export const id = 38;
export const ids = [38];
export const modules = {
  7637: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      BaseExtension: () => rQ,
      BaseInstrumentation: () => SQ,
      BaseTransport: () => dW,
      CSPInstrumentation: () => TW,
      ConsoleInstrumentation: () => HQ,
      ConsoleTransport: () => Qa,
      EVENT_CLICK: () => nS,
      EVENT_NAVIGATION: () => eS,
      EVENT_ROUTE_CHANGE: () => OS,
      EVENT_SESSION_EXTEND: () => TS,
      EVENT_SESSION_RESUME: () => BS,
      EVENT_SESSION_START: () => yS,
      EVENT_VIEW_CHANGED: () => KS,
      ErrorsInstrumentation: () => RQ,
      FetchTransport: () => ea,
      InternalLoggerLevel: () => cS,
      LogLevel: () => nQ,
      MAX_SESSION_PERSISTENCE_TIME: () => fr,
      NavigationInstrumentation: () => AW,
      Observable: () => YQ,
      PerformanceInstrumentation: () => oZ,
      PersistentSessionsManager: () => MS,
      SESSION_EXPIRATION_TIME: () => ar,
      SESSION_INACTIVITY_TIME: () => jr,
      STORAGE_KEY: () => Wr,
      SessionInstrumentation: () => ZQ,
      TransportItemType: () => sW,
      UserActionInstrumentation: () => BW,
      UserActionState: () => UW,
      VERSION: () => QQ,
      ViewInstrumentation: () => CQ,
      VolatileSessionsManager: () => GS,
      WebVitalsInstrumentation: () => qZ,
      allLogLevels: () => KQ,
      browserMeta: () => oW,
      buildStackFrame: () => WQ,
      captureMetas: () => Ca,
      createInternalLogger: () => va,
      createPromiseBuffer: () => ma,
      createSession: () => JW,
      deepEqual: () => YS,
      defaultEventDomain: () => Zr,
      defaultExceptionType: () => vQ,
      defaultGlobalObjectKey: () => Oa,
      defaultInternalLoggerLevel: () => oS,
      defaultLogLevel: () => eQ,
      faro: () => tr,
      genShortID: () => zS,
      getCurrentTimestamp: () => US,
      getDataFromSafariExtensions: () => mQ,
      getIgnoreUrls: () => br,
      getInternalFaroFromGlobalObject: () => mr,
      getStackFramesFromError: () => UQ,
      getTransportBody: () => Sa,
      getUrlFromResource: () => Dr,
      getWebInstrumentations: () => VW,
      globalObject: () => pr,
      initializeFaro: () => da,
      internalGlobalObjectKey: () => xr,
      isArray: () => Xr,
      isBoolean: () => vr,
      isDomError: () => kr,
      isDomException: () => Ar,
      isElement: () => ir,
      isElementDefined: () => Vr,
      nx: () => or,
      isError: () => Mr,
      isErrorDefined: () => Cr,
      isErrorEvent: () => Gr,
      isEvent: () => gr,
      isEventDefined: () => Rr,
      isFunction: () => lr,
      isInstanceOf: () => nr,
      isInt: () => Tr,
      isInternalFaroOnGlobalObject: () => Ur,
      isMap: () => cr,
      isMapDefined: () => wr,
      isNull: () => Kr,
      isNumber: () => Br,
      isObject: () => Lr,
      isPrimitive: () => qr,
      isRegExp: () => Pr,
      isString: () => yr,
      isSymbol: () => Or,
      isSyntheticEvent: () => Fr,
      isThenable: () => Hr,
      isToString: () => Yr,
      isTypeof: () => zr,
      isUndefined: () => er,
      makeCoreConfig: () => Xa,
      noop: () => wS,
      osMeta: () => bW,
      parseStacktrace: () => tQ,
      sdkMeta: () => DW,
      setInternalFaroOnGlobalObject: () => Nr,
      transportItemTypeToBodyKey: () => uW,
      unknownString: () => gQ,
      userActionDataAttribute: () => bZ,
      userActionTimeoutDataAttribute: () => JZ
    });
    const Zr = "browser",
      Wr = "com.grafana.faro.session",
      ar = 144e5,
      jr = 9e5,
      Ir = 1e3,
      fr = jr,
      Er = {
        enabled: !0,
        persistent: !1,
        maxSessionPersistenceTime: fr
      };
    const pr = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof Qr.g ? Qr.g : "undefined" !== typeof self ? self : void 0;
    const xr = "_faroInternal";

    function mr() {
      return pr[xr]
    }

    function Nr(rr) {
      rr.config.isolate ? rr.internalLogger.debug("Skipping registering internal Faro instance on global object") : (rr.internalLogger.debug("Registering internal Faro instance on global object"), Object.defineProperty(pr, xr, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: rr
      }))
    }

    function Ur() {
      return xr in pr
    }
    let tr = {
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

    function hr(rr, Sr, Qr, Zr, Wr, ar, jr) {
      return Sr.debug("Initializing Faro"), tr = {
          api: ar,
          config: Qr,
          instrumentations: jr,
          internalLogger: Sr,
          metas: Zr,
          pause: Wr.pause,
          transports: Wr,
          unpatchedConsole: rr,
          unpause: Wr.unpause
        }, Nr(tr),
        function(rr) {
          if (rr.config.preventGlobalExposure) rr.internalLogger.debug("Skipping registering public Faro instance in the global scope");
          else {
            if (rr.internalLogger.debug(`Registering public faro reference in the global scope using "${rr.config.globalObjectKey}" key`), rr.config.globalObjectKey in pr) return void rr.internalLogger.warn(`Skipping global registration due to key "${rr.config.globalObjectKey}" being used already. Please set "globalObjectKey" to something else or set "preventGlobalExposure" to "true"`);
            Object.defineProperty(pr, rr.config.globalObjectKey, {
              configurable: !1,
              writable: !1,
              value: rr
            })
          }
        }(tr), tr
    }

    function zr(rr, Sr) {
      return typeof rr === Sr
    }

    function Yr(rr, Sr) {
      return Object.prototype.toString.call(rr) === `[object ${Sr}]`
    }

    function nr(rr, Sr) {
      try {
        return rr instanceof Sr
      } catch (Qr) {
        return !1
      }
    }
    const er = rr => zr(rr, "undefined"),
      Kr = rr => zr(rr, "null"),
      yr = rr => zr(rr, "string"),
      Br = rr => zr(rr, "number") && !isNaN(rr) || zr(rr, "bigint"),
      Tr = rr => Br(rr) && Number.isInteger(rr),
      vr = rr => zr(rr, "boolean"),
      Or = rr => zr(rr, "symbol"),
      Lr = rr => !Kr(rr) && zr(rr, "object"),
      lr = rr => zr(rr, "function"),
      Xr = rr => Yr(rr, "Array"),
      Pr = rr => Yr(rr, "RegExp"),
      Hr = rr => lr(null === rr || void 0 === rr ? void 0 : rr.then),
      qr = rr => !Lr(rr) && !lr(rr),
      Rr = "undefined" !== typeof Event,
      gr = rr => Rr && nr(rr, Event),
      Cr = "undefined" !== typeof Error,
      Mr = rr => Cr && nr(rr, Error),
      Gr = rr => Yr(rr, "ErrorEvent"),
      kr = rr => Yr(rr, "DOMError"),
      Ar = rr => Yr(rr, "DOMException"),
      Vr = "undefined" !== typeof Element,
      ir = rr => Vr && nr(rr, Element),
      wr = "undefined" !== typeof Map,
      cr = rr => wr && nr(rr, Map),
      Fr = rr => Lr(rr) && "nativeEvent" in rr && "preventDefault" in rr && "stopPropagation" in rr;

    function or(rr) {
      return null == rr || (Xr(rr) || yr(rr) ? 0 === rr.length : !!Lr(rr) && 0 === Object.keys(rr).length)
    }

    function br() {
      return tr.transports.transports.flatMap((rr => rr.getIgnoreUrls()))
    }

    function Jr() {
      let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return br().some((Sr => rr && null != rr.match(Sr)))
    }

    function Dr(rr) {
      return yr(rr) ? rr : rr instanceof URL ? rr.href : !or(rr) && lr(null === rr || void 0 === rr ? void 0 : rr.toString) ? rr.toString() : void 0
    }
    const dr = "sessionStorage",
      sr = "localStorage";

    function ur(rr) {
      try {
        let Sr;
        Sr = window[rr];
        const Qr = "__faro_storage_test__";
        return Sr.setItem(Qr, Qr), Sr.removeItem(Qr), !0
      } catch (Qr) {
        var Sr;
        return null === (Sr = tr.internalLogger) || void 0 === Sr || Sr.info(`Web storage of type ${rr} is not available. Reason: ${Qr}`), !1
      }
    }

    function rS(rr, Sr) {
      return aS(Sr) ? window[Sr].getItem(rr) : null
    }

    function SS(rr, Sr, Qr) {
      if (aS(Qr)) try {
        window[Qr].setItem(rr, Sr)
      } catch (Zr) {}
    }

    function QS(rr, Sr) {
      aS(Sr) && window[Sr].removeItem(rr)
    }
    const ZS = ur(sr),
      WS = ur(dr);

    function aS(rr) {
      return rr === sr ? ZS : rr === dr && WS
    }

    function jS(rr) {
      return jS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(rr) {
        return typeof rr
      } : function(rr) {
        return rr && "function" == typeof Symbol && rr.constructor === Symbol && rr !== Symbol.prototype ? "symbol" : typeof rr
      }, jS(rr)
    }

    function IS(rr) {
      var Sr = function(rr, Sr) {
        if ("object" != jS(rr) || !rr) return rr;
        var Qr = rr[Symbol.toPrimitive];
        if (void 0 !== Qr) {
          var Zr = Qr.call(rr, Sr || "default");
          if ("object" != jS(Zr)) return Zr;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Sr ? String : Number)(rr)
      }(rr, "string");
      return "symbol" == jS(Sr) ? Sr : Sr + ""
    }

    function fS(rr, Sr, Qr) {
      return (Sr = IS(Sr)) in rr ? Object.defineProperty(rr, Sr, {
        value: Qr,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : rr[Sr] = Qr, rr
    }

    function ES(rr, Sr) {
      var Qr = Object.keys(rr);
      if (Object.getOwnPropertySymbols) {
        var Zr = Object.getOwnPropertySymbols(rr);
        Sr && (Zr = Zr.filter((function(Sr) {
          return Object.getOwnPropertyDescriptor(rr, Sr).enumerable
        }))), Qr.push.apply(Qr, Zr)
      }
      return Qr
    }

    function pS(rr) {
      for (var Sr = 1; Sr < arguments.length; Sr++) {
        var Qr = null != arguments[Sr] ? arguments[Sr] : {};
        Sr % 2 ? ES(Object(Qr), !0).forEach((function(Sr) {
          fS(rr, Sr, Qr[Sr])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(rr, Object.getOwnPropertyDescriptors(Qr)) : ES(Object(Qr)).forEach((function(Sr) {
          Object.defineProperty(rr, Sr, Object.getOwnPropertyDescriptor(Qr, Sr))
        }))
      }
      return rr
    }

    function xS() {
      let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tr;
      var Sr, Qr, Zr;
      const Wr = rr.config.sessionTracking,
        ar = null !== (Sr = null !== (Qr = null === Wr || void 0 === Wr || null === (Zr = Wr.sampler) || void 0 === Zr ? void 0 : Zr.call(Wr, {
          metas: rr.metas.value
        })) && void 0 !== Qr ? Qr : null === Wr || void 0 === Wr ? void 0 : Wr.samplingRate) && void 0 !== Sr ? Sr : 1,
        jr = "number" === typeof ar ? function(rr) {
          return Math.min(1, Math.max(0, rr))
        }(ar) : 0;
      if (!(jr > 0)) return !1;
      if (1 === jr) return !0;
      try {
        const rr = "undefined" !== typeof window ? window.crypto : void 0;
        if ("function" === typeof(null === rr || void 0 === rr ? void 0 : rr.getRandomValues)) {
          const Sr = new Uint32Array(1);
          return rr.getRandomValues(Sr), Sr[0] / Math.pow(2, 32) < jr
        }
      } catch (Ir) {}
      return Math.random() < jr
    }

    function mS() {
      return Date.now()
    }

    function NS() {
      return "undefined" !== typeof performance && "function" === typeof performance.now ? performance.now() : Date.now()
    }

    function US() {
      return (new Date).toISOString()
    }

    function tS(rr) {
      return new Date(rr).toISOString()
    }
    const hS = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

    function zS() {
      let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      const Sr = new Uint32Array(rr),
        Qr = "undefined" !== typeof globalThis ? globalThis.crypto : void 0;
      if (null === Qr || void 0 === Qr ? void 0 : Qr.getRandomValues) Qr.getRandomValues(Sr);
      else
        for (let Wr = 0; Wr < rr; Wr++) Sr[Wr] = Math.floor(4294967296 * Math.random());
      let Zr = "";
      for (let Wr = 0; Wr < rr; Wr++) Zr += hS[Sr[Wr] % 59];
      return Zr
    }

    function YS(rr, Sr) {
      if (rr === Sr) return !0;
      if (zr(rr, "number") && isNaN(rr)) return zr(Sr, "number") && isNaN(Sr);
      const Qr = Xr(rr),
        Zr = Xr(Sr);
      if (Qr !== Zr) return !1;
      if (Qr && Zr) {
        const Qr = rr.length;
        if (Qr !== Sr.length) return !1;
        for (let Zr = Qr; 0 !== Zr--;)
          if (!YS(rr[Zr], Sr[Zr])) return !1;
        return !0
      }
      const Wr = Lr(rr),
        ar = Lr(Sr);
      if (Wr !== ar) return !1;
      if (rr && Sr && Wr && ar) {
        const Qr = Object.keys(rr),
          Zr = Object.keys(Sr);
        if (Qr.length !== Zr.length) return !1;
        for (let rr of Qr)
          if (!Zr.includes(rr)) return !1;
        for (let Wr of Qr)
          if (!YS(rr[Wr], Sr[Wr])) return !1;
        return !0
      }
      return !1
    }
    const nS = "click",
      eS = "navigation",
      KS = "view_changed",
      yS = "session_start",
      BS = "session_resume",
      TS = "session_extend",
      vS = "service_name_override",
      OS = "route_change";

    function LS() {
      let {
        sessionId: rr,
        started: Sr,
        lastActivity: Qr,
        isSampled: Zr = !0
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, Wr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tr;
      var ar;
      const jr = mS(),
        Ir = null === (ar = Wr.config) || void 0 === ar || null === (ar = ar.sessionTracking) || void 0 === ar ? void 0 : ar.generateSessionId;
      return null == rr && (rr = "function" === typeof Ir ? Ir() : zS()), {
        sessionId: rr,
        lastActivity: null !== Qr && void 0 !== Qr ? Qr : jr,
        started: null !== Sr && void 0 !== Sr ? Sr : jr,
        isSampled: Zr
      }
    }

    function lS(rr) {
      if (null == rr) return !1;
      const Sr = mS();
      return Sr - rr.started < 144e5 && Sr - rr.lastActivity < jr
    }

    function XS(rr) {
      let {
        fetchUserSession: Sr,
        storeUserSession: Qr,
        adoptSession: Zr,
        updateInterval: Wr = 0
      } = rr, Ir = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tr, fr = 0;
      return function() {
        let {
          forceSessionExtend: rr = !1,
          refreshActivity: Er = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var pr, xr;
        if (!Sr || !Qr) return;
        const mr = mS();
        if (!rr && mr < fr && fr - mr <= Wr) return;
        const Nr = Ir.config.sessionTracking,
          Ur = null === Nr || void 0 === Nr ? void 0 : Nr.persistent;
        if (Ur && !ZS || !Ur && !WS) return;
        const tr = Sr();
        if (fr = Math.min(mr + Wr, (null !== (pr = null === tr || void 0 === tr ? void 0 : tr.started) && void 0 !== pr ? pr : mr) + ar, (null !== (xr = null === tr || void 0 === tr ? void 0 : tr.lastActivity) && void 0 !== xr ? xr : mr) + jr), !1 === rr && lS(tr)) {
          var hr;
          Er && Qr(pS(pS({}, tr), {}, {
            lastActivity: mr
          }));
          const rr = null === (hr = Ir.metas.value.session) || void 0 === hr ? void 0 : hr.id;
          null != Zr && null != tr.sessionMeta && tr.sessionId !== rr && Zr(tr.sessionMeta)
        } else {
          var zr, Yr, nr;
          let rr = HS(LS({
            isSampled: xS(Ir)
          }, Ir), tr, Ir);
          fr = mr + Wr, Qr(rr), null === (zr = Ir.api) || void 0 === zr || zr.setSession(rr.sessionMeta), null === Nr || void 0 === Nr || null === (Yr = Nr.onSessionChange) || void 0 === Yr || Yr.call(Nr, null !== (nr = null === tr || void 0 === tr ? void 0 : tr.sessionMeta) && void 0 !== nr ? nr : null, rr.sessionMeta)
        }
      }
    }

    function PS(rr) {
      let Sr, {
          fetchUserSession: Qr,
          storeUserSession: Zr,
          updateInterval: Wr = 0
        } = rr,
        ar = 0;
      return rr => {
        const jr = mS();
        if (rr === Sr && jr < ar && ar - jr <= Wr) return;
        Sr = rr, ar = jr + Wr;
        const Ir = Qr();
        (null === Ir || void 0 === Ir ? void 0 : Ir.sessionId) === rr && lS(Ir) && Zr(pS(pS({}, Ir), {}, {
          lastActivity: jr
        }))
      }
    }

    function HS(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tr;
      var Zr, Wr, ar, jr, Ir, fr;
      const Er = pS(pS({}, rr), {}, {
          sessionMeta: {
            id: rr.sessionId,
            attributes: RS(pS(pS(pS({}, null === (Zr = Qr.config.sessionTracking) || void 0 === Zr || null === (Zr = Zr.session) || void 0 === Zr ? void 0 : Zr.attributes), null !== (Wr = null === (ar = Qr.metas.value.session) || void 0 === ar ? void 0 : ar.attributes) && void 0 !== Wr ? Wr : {}), {}, {
              isSampled: rr.isSampled.toString()
            }))
          }
        }),
        pr = null !== (jr = null === (Ir = Qr.metas.value.session) || void 0 === Ir ? void 0 : Ir.overrides) && void 0 !== jr ? jr : null === Sr || void 0 === Sr || null === (fr = Sr.sessionMeta) || void 0 === fr ? void 0 : fr.overrides;
      or(pr) || (Er.sessionMeta.overrides = pr);
      const xr = null === Sr || void 0 === Sr ? void 0 : Sr.sessionId;
      return null != xr && (Er.sessionMeta.attributes.previousSession = xr), Er
    }

    function qS(rr) {
      let {
        fetchUserSession: Sr,
        storeUserSession: Qr
      } = rr, Zr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tr, Wr = !1;
      return function(rr) {
        if (Wr) return;
        const ar = rr.session,
          jr = Sr();
        let Ir = null === ar || void 0 === ar ? void 0 : ar.id;
        const fr = null === ar || void 0 === ar ? void 0 : ar.attributes,
          Er = null === ar || void 0 === ar ? void 0 : ar.overrides,
          pr = null === jr || void 0 === jr ? void 0 : jr.sessionMeta,
          xr = null === pr || void 0 === pr ? void 0 : pr.overrides,
          mr = !!Er && !YS(Er, xr),
          Nr = !!fr && !YS(fr, null === pr || void 0 === pr ? void 0 : pr.attributes);
        if (ar && Ir !== (null === jr || void 0 === jr ? void 0 : jr.sessionId) || Nr || mr) {
          var Ur, tr;
          const rr = null != jr && Ir === jr.sessionId,
            Sr = HS(rr ? jr : LS({
              sessionId: Ir,
              isSampled: xS(Zr)
            }, Zr), jr, Zr),
            ar = null === jr || void 0 === jr || null === (Ur = jr.sessionMeta) || void 0 === Ur || null === (Ur = Ur.attributes) || void 0 === Ur ? void 0 : Ur.previousSession;
          rr && null != ar && ar !== Sr.sessionId && (Sr.sessionMeta.attributes.previousSession = ar), (null === (tr = Sr.sessionMeta.attributes) || void 0 === tr ? void 0 : tr.previousSession) === Sr.sessionId && delete Sr.sessionMeta.attributes.previousSession, Qr(Sr),
            function(rr, Sr) {
              let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              var Wr, ar, jr;
              if (!Sr) return;
              const Ir = Qr.serviceName,
                fr = null !== (Wr = null !== (ar = Zr.serviceName) && void 0 !== ar ? ar : null === (jr = rr.metas.value.app) || void 0 === jr ? void 0 : jr.name) && void 0 !== Wr ? Wr : "";
              Ir && Ir !== fr && rr.api.pushEvent(vS, {
                serviceName: Ir,
                previousServiceName: fr
              })
            }(Zr, mr, Er, xr), Wr = !0;
          try {
            Zr.api.setSession(Sr.sessionMeta)
          } finally {
            Wr = !1
          }
        }
      }
    }

    function RS(rr) {
      const Sr = {};
      for (const Qr of Object.keys(rr)) {
        const Zr = rr[Qr];
        void 0 !== Zr && (Sr[Qr] = Zr)
      }
      return Sr
    }

    function gS() {
      let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.stringify(null !== rr && void 0 !== rr ? rr : {}, function() {
        const rr = new WeakSet;
        return function(Sr, Qr) {
          if (Lr(Qr) && null !== Qr) {
            if (rr.has(Qr)) return null;
            rr.add(Qr)
          }
          return Qr
        }
      }())
    }

    function CS() {
      let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const Sr = {};
      for (const [Qr, Zr] of Object.entries(rr)) Sr[Qr] = Lr(Zr) && null !== Zr ? gS(Zr) : String(Zr);
      return Sr
    }
    var MS = class rr {
      constructor() {
        var Sr = this;
        let Qr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tr;
        this.context = Qr, this.adopting = !1, this.isAdopting = () => this.adopting, this.adoptSession = rr => {
          this.adopting = !0;
          try {
            var Sr;
            null === (Sr = this.context.api) || void 0 === Sr || Sr.setSession(rr)
          } finally {
            this.adopting = !1
          }
        }, this.updateSession = function() {
          let {
            refreshActivity: rr = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Sr.updateUserSession({
            refreshActivity: rr
          })
        }, this.recordActivity = PS({
          fetchUserSession: rr.fetchUserSession,
          storeUserSession: rr.storeUserSession,
          updateInterval: Ir
        }), this.updateUserSession = XS({
          fetchUserSession: rr.fetchUserSession,
          storeUserSession: rr.storeUserSession,
          adoptSession: this.adoptSession,
          updateInterval: Ir
        }, Qr), this.init()
      }
      static removeUserSession() {
        QS(Wr, rr.storageTypeLocal)
      }
      static storeUserSession(Sr) {
        SS(Wr, gS(Sr), rr.storageTypeLocal)
      }
      static fetchUserSession() {
        const Sr = rS(Wr, rr.storageTypeLocal);
        return Sr ? JSON.parse(Sr) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var rr;
            this.updateSession({
              refreshActivity: !1
            });
            const Sr = null === (rr = this.context.api) || void 0 === rr || null === (rr = rr.getSession()) || void 0 === rr ? void 0 : rr.id;
            Sr && this.recordActivity(Sr)
          }
        })), this.context.metas.addListener(qS({
          fetchUserSession: rr.fetchUserSession,
          storeUserSession: rr.storeUserSession
        }, this.context))
      }
    };
    MS.storageTypeLocal = sr;
    var GS = class rr {
      constructor() {
        var Sr = this;
        let Qr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tr;
        this.context = Qr, this.isAdopting = () => !1, this.updateSession = function() {
          let {
            refreshActivity: rr = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Sr.updateUserSession({
            refreshActivity: rr
          })
        }, this.recordActivity = PS({
          fetchUserSession: rr.fetchUserSession,
          storeUserSession: rr.storeUserSession,
          updateInterval: Ir
        }), this.updateUserSession = XS({
          fetchUserSession: rr.fetchUserSession,
          storeUserSession: rr.storeUserSession,
          updateInterval: Ir
        }, Qr), this.init()
      }
      static removeUserSession() {
        QS(Wr, rr.storageTypeSession)
      }
      static storeUserSession(Sr) {
        SS(Wr, gS(Sr), rr.storageTypeSession)
      }
      static fetchUserSession() {
        const Sr = rS(Wr, rr.storageTypeSession);
        return Sr ? JSON.parse(Sr) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var rr;
            this.updateSession({
              refreshActivity: !1
            });
            const Sr = null === (rr = this.context.api) || void 0 === rr || null === (rr = rr.getSession()) || void 0 === rr ? void 0 : rr.id;
            Sr && this.recordActivity(Sr)
          }
        })), this.context.metas.addListener(qS({
          fetchUserSession: rr.fetchUserSession,
          storeUserSession: rr.storeUserSession
        }, this.context))
      }
    };
    GS.storageTypeSession = dr;
    const kS = new WeakMap;

    function AS(rr) {
      let Sr = kS.get(rr);
      if (!Sr) {
        let Qr = [],
          Zr = [];
        Sr = {
          addSessionUpdateListener: rr => {
            Qr.push(rr)
          },
          removeSessionUpdateListener: rr => {
            Qr = Qr.filter((Sr => Sr !== rr))
          },
          notifySessionUpdate: rr => {
            Qr.forEach((Sr => Sr(rr)))
          },
          shouldCapture: () => Zr.every((rr => rr())),
          addCaptureFilter: rr => {
            Zr.push(rr)
          },
          removeCaptureFilter: rr => {
            Zr = Zr.filter((Sr => Sr !== rr))
          }
        }, kS.set(rr, Sr)
      }
      return Sr
    }
    var VS = class {
      constructor(rr, Sr, Qr) {
        this.metas = rr, this.transports = Sr, this.onActivate = Qr, this.waiting = !1, this.shouldCapture = () => !document.prerendering, this.discard = () => null, this.recordUpdate = rr => {
          var Sr, Qr, Zr;
          const Wr = this.pending;
          var ar, jr;
          if ("overrides" === rr.type) return void(this.pending = {
            reset: null !== (ar = null === Wr || void 0 === Wr ? void 0 : Wr.reset) && void 0 !== ar && ar,
            inheritOverrides: null === (jr = null === Wr || void 0 === Wr ? void 0 : Wr.inheritOverrides) || void 0 === jr || jr,
            session: pS(pS({}, null === Wr || void 0 === Wr ? void 0 : Wr.session), {}, {
              overrides: pS(pS({}, null === Wr || void 0 === Wr ? void 0 : Wr.session.overrides), rr.overrides)
            })
          });
          const Ir = rr.session,
            fr = or(Ir) || null != Ir && "id" in Ir && !Ir.id,
            Er = null !== (Sr = null === Ir || void 0 === Ir ? void 0 : Ir.overrides) && void 0 !== Sr ? Sr : null === Wr || void 0 === Wr ? void 0 : Wr.session.overrides;
          this.pending = {
            reset: fr || !(null === Ir || void 0 === Ir ? void 0 : Ir.id) && null !== (Qr = null === Wr || void 0 === Wr ? void 0 : Wr.reset) && void 0 !== Qr && Qr,
            inheritOverrides: !(!rr.overrides && void 0 !== (null === Ir || void 0 === Ir ? void 0 : Ir.overrides)) && (null === (Zr = null === Wr || void 0 === Wr ? void 0 : Wr.inheritOverrides) || void 0 === Zr || Zr),
            session: {
              id: null === Ir || void 0 === Ir ? void 0 : Ir.id,
              attributes: (null === Ir || void 0 === Ir ? void 0 : Ir.attributes) && pS({}, Ir.attributes),
              overrides: rr.overrides ? pS(pS({}, null === Wr || void 0 === Wr ? void 0 : Wr.session.overrides), rr.overrides) : Er && pS({}, Er)
            }
          }
        }, this.activate = () => {
          this.waiting && this.shouldCapture() && (this.destroy(), this.onActivate(this.pending))
        }
      }
      initialize() {
        var rr, Sr;
        this.waiting = !0, AS(this.metas).addSessionUpdateListener(this.recordUpdate), AS(this.metas).addCaptureFilter(this.shouldCapture), this.transports.addBeforeSendHooks(this.discard), document.addEventListener("prerenderingchange", this.activate), null === (rr = (Sr = this.metas).addCaptureListener) || void 0 === rr || rr.call(Sr, this.activate), this.activate()
      }
      destroy() {
        var rr, Sr;
        this.waiting = !1, document.removeEventListener("prerenderingchange", this.activate), AS(this.metas).removeSessionUpdateListener(this.recordUpdate), null === (rr = (Sr = this.metas).removeCaptureListener) || void 0 === rr || rr.call(Sr, this.activate), AS(this.metas).removeCaptureFilter(this.shouldCapture), this.transports.removeBeforeSendHooks(this.discard)
      }
    };

    function iS(rr) {
      return (null === rr || void 0 === rr ? void 0 : rr.persistent) ? MS : GS
    }

    function wS() {}
    let cS = function(rr) {
      return rr[rr.OFF = 0] = "OFF", rr[rr.ERROR = 1] = "ERROR", rr[rr.WARN = 2] = "WARN", rr[rr.INFO = 3] = "INFO", rr[rr.VERBOSE = 4] = "VERBOSE", rr
    }({});
    const FS = {
        debug: wS,
        error: wS,
        info: wS,
        prefix: "Faro",
        warn: wS
      },
      oS = 1;

    function bS(rr) {
      return bS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(rr) {
        return typeof rr
      } : function(rr) {
        return rr && "function" == typeof Symbol && rr.constructor === Symbol && rr !== Symbol.prototype ? "symbol" : typeof rr
      }, bS(rr)
    }

    function JS(rr) {
      var Sr = function(rr, Sr) {
        if ("object" != bS(rr) || !rr) return rr;
        var Qr = rr[Symbol.toPrimitive];
        if (void 0 !== Qr) {
          var Zr = Qr.call(rr, Sr || "default");
          if ("object" != bS(Zr)) return Zr;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Sr ? String : Number)(rr)
      }(rr, "string");
      return "symbol" == bS(Sr) ? Sr : Sr + ""
    }

    function DS(rr, Sr, Qr) {
      return (Sr = JS(Sr)) in rr ? Object.defineProperty(rr, Sr, {
        value: Qr,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : rr[Sr] = Qr, rr
    }

    function dS(rr, Sr) {
      var Qr = Object.keys(rr);
      if (Object.getOwnPropertySymbols) {
        var Zr = Object.getOwnPropertySymbols(rr);
        Sr && (Zr = Zr.filter((function(Sr) {
          return Object.getOwnPropertyDescriptor(rr, Sr).enumerable
        }))), Qr.push.apply(Qr, Zr)
      }
      return Qr
    }

    function sS(rr) {
      for (var Sr = 1; Sr < arguments.length; Sr++) {
        var Qr = null != arguments[Sr] ? arguments[Sr] : {};
        Sr % 2 ? dS(Object(Qr), !0).forEach((function(Sr) {
          DS(rr, Sr, Qr[Sr])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(rr, Object.getOwnPropertyDescriptors(Qr)) : dS(Object(Qr)).forEach((function(Sr) {
          Object.defineProperty(rr, Sr, Object.getOwnPropertyDescriptor(Qr, Sr))
        }))
      }
      return rr
    }
    const uS = sS({}, console);
    var rQ = class {
        constructor() {
          this.unpatchedConsole = uS, this.internalLogger = FS, this.config = {}, this.metas = {}
        }
        logDebug() {
          for (var rr = arguments.length, Sr = new Array(rr), Qr = 0; Qr < rr; Qr++) Sr[Qr] = arguments[Qr];
          this.internalLogger.debug(`${this.name}\n`, ...Sr)
        }
        logInfo() {
          for (var rr = arguments.length, Sr = new Array(rr), Qr = 0; Qr < rr; Qr++) Sr[Qr] = arguments[Qr];
          this.internalLogger.info(`${this.name}\n`, ...Sr)
        }
        logWarn() {
          for (var rr = arguments.length, Sr = new Array(rr), Qr = 0; Qr < rr; Qr++) Sr[Qr] = arguments[Qr];
          this.internalLogger.warn(`${this.name}\n`, ...Sr)
        }
        logError() {
          for (var rr = arguments.length, Sr = new Array(rr), Qr = 0; Qr < rr; Qr++) Sr[Qr] = arguments[Qr];
          this.internalLogger.error(`${this.name}\n`, ...Sr)
        }
      },
      SQ = class extends rQ {
        constructor() {
          super(...arguments), this.api = {}, this.transports = {}
        }
      };
    const QQ = "2.12.1";
    var ZQ = class extends SQ {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-session", this.version = QQ, this.isAdoptingSession = () => !1
      }
      sendSessionStartEvent(rr) {
        var Sr;
        const Qr = rr.session;
        if (Qr && Qr.id !== (null === (Sr = this.notifiedSession) || void 0 === Sr ? void 0 : Sr.id)) {
          var Zr;
          if (this.isAdoptingSession()) return void(this.notifiedSession = Qr);
          if (this.notifiedSession && this.notifiedSession.id === (null === (Zr = Qr.attributes) || void 0 === Zr ? void 0 : Zr.previousSession)) return this.api.pushEvent(TS, {}, void 0, {
            skipDedupe: !0
          }), void(this.notifiedSession = Qr);
          this.notifiedSession = Qr, this.api.pushEvent(yS, {}, void 0, {
            skipDedupe: !0
          })
        }
      }
      createInitialSession(rr, Sr, Qr) {
        const Zr = null === Qr || void 0 === Qr ? void 0 : Qr.session;
        let Wr, ar, jr = rr.fetchUserSession();
        if (Sr.persistent && Sr.maxSessionPersistenceTime && jr) {
          const rr = mS();
          jr.lastActivity < rr - Sr.maxSessionPersistenceTime && (MS.removeUserSession(), jr = null)
        }
        const Ir = lS(jr);
        if ((null === Qr || void 0 === Qr ? void 0 : Qr.reset) || !Ir || (null === Zr || void 0 === Zr ? void 0 : Zr.id) && Zr.id !== (null === jr || void 0 === jr ? void 0 : jr.sessionId)) {
          var fr, Er, pr, xr, mr, Nr;
          ar = LS({
            sessionId: (null === Qr || void 0 === Qr ? void 0 : Qr.reset) ? void 0 : null !== (fr = null === Zr || void 0 === Zr ? void 0 : Zr.id) && void 0 !== fr ? fr : null === (Er = Sr.session) || void 0 === Er ? void 0 : Er.id,
            isSampled: xS(this)
          }, this);
          const rr = ar.sessionId,
            Ur = Qr && Ir ? null === jr || void 0 === jr || null === (pr = jr.sessionMeta) || void 0 === pr ? void 0 : pr.overrides : void 0,
            tr = Ur ? pS(pS({}, null === (xr = Sr.session) || void 0 === xr ? void 0 : xr.overrides), Ur) : null === (mr = Sr.session) || void 0 === mr ? void 0 : mr.overrides;
          ar.sessionMeta = pS({
            id: rr,
            attributes: pS({
              isSampled: ar.isSampled.toString()
            }, null === (Nr = Sr.session) || void 0 === Nr ? void 0 : Nr.attributes)
          }, tr ? {
            overrides: tr
          } : {}), Wr = yS
        } else {
          var Ur, tr;
          const rr = null === jr || void 0 === jr ? void 0 : jr.sessionId;
          ar = LS({
            sessionId: rr,
            isSampled: jr.isSampled || !1,
            started: null === jr || void 0 === jr ? void 0 : jr.started
          }, this);
          const Qr = null === jr || void 0 === jr ? void 0 : jr.sessionMeta,
            Zr = pS(pS({}, null === (Ur = Sr.session) || void 0 === Ur ? void 0 : Ur.overrides), null === Qr || void 0 === Qr ? void 0 : Qr.overrides);
          ar.sessionMeta = pS(pS({}, Sr.session), {}, {
            id: rr,
            attributes: pS(pS(pS({}, null === (tr = Sr.session) || void 0 === tr ? void 0 : tr.attributes), null === Qr || void 0 === Qr ? void 0 : Qr.attributes), {}, {
              isSampled: ar.isSampled.toString()
            }),
            overrides: Zr
          }), Wr = BS
        }
        var hr;
        if (Zr && (ar.sessionMeta = pS(pS({}, ar.sessionMeta), {}, {
            attributes: pS(pS(pS({}, null === (hr = ar.sessionMeta) || void 0 === hr ? void 0 : hr.attributes), Zr.attributes), {}, {
              isSampled: ar.isSampled.toString()
            })
          }), Zr.overrides)) {
          const rr = (null === Qr || void 0 === Qr ? void 0 : Qr.inheritOverrides) ? pS(pS({}, ar.sessionMeta.overrides), Zr.overrides) : Zr.overrides;
          Object.keys(rr).length > 0 ? ar.sessionMeta.overrides = rr : delete ar.sessionMeta.overrides
        }
        return {
          initialSession: ar,
          lifecycleType: Wr
        }
      }
      registerBeforeSendHook(rr) {
        var Sr;
        this.beforeSendHook = Sr => {
          var Qr, Zr;
          const Wr = null === (Qr = Sr.meta.session) || void 0 === Qr ? void 0 : Qr.id;
          Wr && !this.transports.isPaused() && rr(Wr);
          const ar = null === (Zr = Sr.meta.session) || void 0 === Zr ? void 0 : Zr.attributes;
          if (ar && "true" === (null === ar || void 0 === ar ? void 0 : ar.isSampled)) {
            var jr;
            let rr = JSON.parse(JSON.stringify(Sr));
            const Qr = null === (jr = rr.meta.session) || void 0 === jr ? void 0 : jr.attributes;
            var Ir;
            if (null === Qr || void 0 === Qr || delete Qr.isSampled, 0 === Object.keys(null !== Qr && void 0 !== Qr ? Qr : {}).length) null === (Ir = rr.meta.session) || void 0 === Ir || delete Ir.attributes;
            return rr
          }
          return null
        }, null === (Sr = this.transports) || void 0 === Sr || Sr.addBeforeSendHooks(this.beforeSendHook)
      }
      initialize() {
        var rr;
        this.logDebug("init session instrumentation");
        const Sr = document.prerendering;
        var Qr;
        if ((null === (rr = this.config.sessionTracking) || void 0 === rr ? void 0 : rr.enabled) && (Sr || this.prerenderSession)) return null !== (Qr = this.prerenderSession) && void 0 !== Qr || (this.prerenderSession = new VS(this.metas, this.transports, (rr => {
          this.prerenderSession = void 0, this.initializeSession(rr)
        }))), void this.prerenderSession.initialize();
        this.initializeSession()
      }
      initializeSession(rr) {
        const Sr = this.config.sessionTracking;
        if (null === Sr || void 0 === Sr ? void 0 : Sr.enabled) {
          var Qr, Zr;
          const Wr = iS(Sr),
            ar = new Wr(this);
          this.isAdoptingSession = ar.isAdopting, this.registerBeforeSendHook(ar.recordActivity);
          const {
            initialSession: jr,
            lifecycleType: Ir
          } = this.createInitialSession(Wr, Sr, rr);
          Wr.storeUserSession(jr);
          const fr = jr.sessionMeta;
          this.notifiedSession = fr, this.api.setSession(fr), this.captureListener = () => {
            this.transports.isPaused() || ar.updateSession({
              refreshActivity: !1
            })
          }, null === (Qr = (Zr = this.metas).addCaptureListener) || void 0 === Qr || Qr.call(Zr, this.captureListener), Ir === yS && this.api.pushEvent(yS, {}, void 0, {
            skipDedupe: !0
          }), Ir === BS && this.api.pushEvent(BS, {}, void 0, {
            skipDedupe: !0
          })
        }
        this.sessionStartListener = this.sendSessionStartEvent.bind(this), this.metas.addListener(this.sessionStartListener)
      }
      destroy() {
        var rr, Sr, Qr;
        (null === (rr = this.prerenderSession) || void 0 === rr || rr.destroy(), this.captureListener) && (null === (Sr = (Qr = this.metas).removeCaptureListener) || void 0 === Sr || Sr.call(Qr, this.captureListener), this.captureListener = void 0);
        this.beforeSendHook && (this.transports.removeBeforeSendHooks(this.beforeSendHook), this.beforeSendHook = void 0), this.sessionStartListener && (this.metas.removeListener(this.sessionStartListener), this.sessionStartListener = void 0)
      }
    };

    function WQ(rr, Sr, Qr, Zr) {
      const Wr = {
        filename: rr || document.location.href,
        function: Sr || "?"
      };
      return void 0 !== Qr && (Wr.lineno = Qr), void 0 !== Zr && (Wr.colno = Zr), Wr
    }
    const aQ = /^\s*at (?:(?![a-z]+:\/\/)([^(]+?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      jQ = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      IQ = /^(?=[\s\S]*?(?:\/|bundle|\.js|\[native code]))\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      fQ = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      EQ = "safari-extension",
      pQ = "safari-web-extension",
      xQ = /Minified React error #\d+;/i;

    function mQ(rr, Sr) {
      const Qr = null === rr || void 0 === rr ? void 0 : rr.includes(EQ),
        Zr = !Qr && (null === rr || void 0 === rr ? void 0 : rr.includes("safari-web-extension"));
      return Qr || Zr ? [(null === rr || void 0 === rr ? void 0 : rr.includes("@")) ? rr.split("@")[0] : rr, Qr ? `${EQ}:${Sr}` : `${pQ}:${Sr}`] : [rr, Sr]
    }
    const NQ = 1024;

    function UQ(rr) {
      let Sr = [];
      rr.stacktrace ? Sr = rr.stacktrace.split("\n").filter(((rr, Sr) => Sr % 2 === 0)) : rr.stack && (Sr = rr.stack.split("\n"));
      const Qr = Sr.reduce(((Sr, Qr, Zr) => {
        if (Qr.length > NQ) return Sr;
        let Wr, ar, jr, Ir, fr;
        if (Wr = aQ.exec(Qr)) {
          if (ar = Wr[1], jr = Wr[2], Ir = Wr[3], fr = Wr[4], null === jr || void 0 === jr ? void 0 : jr.startsWith("eval")) {
            const rr = jQ.exec(jr);
            rr && (jr = rr[1], Ir = rr[2], fr = rr[3])
          }
          jr = (null === jr || void 0 === jr ? void 0 : jr.startsWith("address at ")) ? jr.substring(11) : jr, [ar, jr] = mQ(ar, jr)
        } else if (Wr = IQ.exec(Qr)) {
          if (ar = Wr[1], jr = Wr[3], Ir = Wr[4], fr = Wr[5], jr && jr.includes(" > eval")) {
            const rr = fQ.exec(jr);
            rr && (ar = ar || "eval", jr = rr[1], Ir = rr[2])
          } else 0 === Zr && !fr && Br(rr.columnNumber) && (fr = String(rr.columnNumber + 1));
          [ar, jr] = mQ(ar, jr)
        }
        return (jr || ar) && Sr.push(WQ(jr, ar, Ir ? Number(Ir) : void 0, fr ? Number(fr) : void 0)), Sr
      }), []);
      return xQ.test(rr.message) ? Qr.slice(1) : Qr
    }

    function tQ(rr) {
      return {
        frames: UQ(rr)
      }
    }
    const hQ = "http-request-start",
      zQ = "http-request-end";
    var YQ = class rr {
      constructor() {
        this.subscribers = []
      }
      subscribe(rr) {
        return this.subscribers.push(rr), {
          unsubscribe: () => this.unsubscribe(rr)
        }
      }
      unsubscribe(rr) {
        this.subscribers = this.subscribers.filter((Sr => Sr !== rr))
      }
      notify(rr) {
        this.subscribers.forEach((Sr => Sr(rr)))
      }
      first() {
        const Sr = new rr,
          Qr = rr => {
            Sr.notify(rr), Zr.unsubscribe()
          },
          Zr = this.subscribe(Qr),
          Wr = Sr.unsubscribe.bind(Sr);
        return this.withUnsubscribeOverride(Sr, Wr, Qr)
      }
      takeWhile(Sr) {
        const Qr = new rr,
          Zr = rr => {
            Sr(rr) ? Qr.notify(rr) : Qr.unsubscribe(Zr)
          };
        this.subscribe(Zr);
        const Wr = Qr.unsubscribe.bind(Qr);
        return this.withUnsubscribeOverride(Qr, Wr, Zr)
      }
      filter(Sr) {
        const Qr = new rr,
          Zr = rr => {
            Sr(rr) && Qr.notify(rr)
          };
        this.subscribe(Zr);
        const Wr = Qr.unsubscribe.bind(Qr);
        return this.withUnsubscribeOverride(Qr, Wr, Zr)
      }
      merge() {
        const Sr = new rr,
          Qr = [];
        for (var Zr = arguments.length, Wr = new Array(Zr), ar = 0; ar < Zr; ar++) Wr[ar] = arguments[ar];
        Wr.forEach((rr => {
          const Zr = rr.subscribe((rr => {
            Sr.notify(rr)
          }));
          Qr.push(Zr)
        }));
        const jr = Sr.unsubscribeAll.bind(Sr);
        return Sr.unsubscribe = () => {
          Qr.forEach((rr => rr.unsubscribe())), jr()
        }, Sr
      }
      withUnsubscribeOverride(rr, Sr, Qr) {
        return rr.unsubscribe = rr => {
          Sr(rr), this.unsubscribe(Qr)
        }, rr
      }
      unsubscribeAll() {
        this.subscribers = []
      }
    };
    let nQ = function(rr) {
      return rr.TRACE = "trace", rr.DEBUG = "debug", rr.INFO = "info", rr.LOG = "log", rr.WARN = "warn", rr.ERROR = "error", rr
    }({});
    const eQ = "log",
      KQ = ["trace", "debug", "info", "log", "warn", "error"];
    let yQ, BQ = !1;
    const TQ = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
      vQ = "Error",
      OQ = rr => rr.map((rr => Lr(rr) ? gS(rr) : String(rr))).join(" ");

    function LQ(rr) {
      let Sr, Qr, Zr, Wr, ar = [];
      if (Gr(rr) && rr.error) Sr = rr.error.message, Qr = rr.error.name, ar = UQ(rr.error);
      else if ((Zr = kr(rr)) || Ar(rr)) {
        const {
          name: Wr,
          message: ar
        } = rr;
        Qr = null !== Wr && void 0 !== Wr ? Wr : Zr ? "DOMError" : "DOMException", Sr = ar ? `${Qr}: ${ar}` : Qr
      } else Mr(rr) ? (Qr = rr.name, Sr = rr.message, ar = UQ(rr)) : (Lr(rr) || (Wr = gr(rr))) && (Qr = Wr ? rr.constructor.name : void 0, Sr = `Non-Error exception captured with keys: ${Object.keys(rr)}`);
      return [Sr, Qr, ar]
    }

    function lQ(rr) {
      const [Sr, Qr, Zr, Wr, ar] = rr;
      let jr, Ir, fr = [];
      const Er = yr(Sr),
        pr = WQ(Qr, "?", Zr, Wr);
      return ar || !Er ? ([jr, Ir, fr] = LQ(null !== ar && void 0 !== ar ? ar : Sr), 0 === fr.length && (fr = [pr])) : Er && ([jr, Ir] = function(rr) {
        var Sr, Qr;
        const Zr = rr.match(TQ),
          Wr = null !== (Sr = null === Zr || void 0 === Zr ? void 0 : Zr[1]) && void 0 !== Sr ? Sr : vQ;
        return [null !== (Qr = null === Zr || void 0 === Zr ? void 0 : Zr[2]) && void 0 !== Qr ? Qr : rr, Wr]
      }(Sr), fr = [pr]), {
        value: jr,
        type: Ir,
        stackFrames: fr
      }
    }

    function XQ(rr, Sr) {
      return Mr(rr[0]) ? lQ(rr) : {
        value: Sr(rr)
      }
    }
    const PQ = rr => rr.map((rr => {
      try {
        return String(rr)
      } catch (Sr) {
        return ""
      }
    })).join(" ");
    var HQ = class rr extends SQ {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-console", this.version = QQ, this.errorSerializer = PQ
      }
      initialize() {
        var Sr, Qr;
        const Zr = this.config.consoleInstrumentation,
          Wr = (null === Zr || void 0 === Zr ? void 0 : Zr.serializeErrors) || !!(null === Zr || void 0 === Zr ? void 0 : Zr.errorSerializer);
        this.errorSerializer = Wr ? null !== (Sr = null === Zr || void 0 === Zr ? void 0 : Zr.errorSerializer) && void 0 !== Sr ? Sr : OQ : PQ;
        const ar = null !== (Qr = null === Zr || void 0 === Zr ? void 0 : Zr.disabledLevels) && void 0 !== Qr ? Qr : rr.defaultDisabledLevels,
          jr = function(rr) {
            if (yQ || (yQ = new YQ), !BQ) {
              const Sr = null !== rr && void 0 !== rr ? rr : uS;
              KQ.forEach((rr => {
                console[rr] = function() {
                  for (var Qr, Zr = arguments.length, Wr = new Array(Zr), ar = 0; ar < Zr; ar++) Wr[ar] = arguments[ar];
                  yQ.notify({
                    type: "console",
                    level: rr,
                    args: Wr
                  }), null === (Qr = Sr[rr]) || void 0 === Qr || Qr.apply(console, Wr)
                }
              })), BQ = !0
            }
            return yQ
          }(this.unpatchedConsole);
        this.subscription = jr.subscribe((Sr => {
          let {
            level: Qr,
            args: Wr
          } = Sr;
          if (!ar.includes(Qr)) try {
            if (Qr !== nQ.ERROR || (null === Zr || void 0 === Zr ? void 0 : Zr.consoleErrorAsLog))
              if (Qr === nQ.ERROR && (null === Zr || void 0 === Zr ? void 0 : Zr.consoleErrorAsLog)) {
                const {
                  value: Sr,
                  type: Zr,
                  stackFrames: ar
                } = XQ(Wr, this.errorSerializer);
                this.api.pushLog(Sr ? [rr.consoleErrorPrefix + Sr] : Wr, {
                  level: Qr,
                  context: {
                    value: null !== Sr && void 0 !== Sr ? Sr : "",
                    type: null !== Zr && void 0 !== Zr ? Zr : "",
                    stackFrames: (null === ar || void 0 === ar ? void 0 : ar.length) ? OQ(ar) : ""
                  }
                })
              } else this.api.pushLog(Wr, {
                level: Qr
              });
            else {
              const {
                value: Sr,
                type: Qr,
                stackFrames: Zr
              } = XQ(Wr, this.errorSerializer);
              if (Sr && !Qr && !Zr) return void this.api.pushError(new Error(rr.consoleErrorPrefix + Sr));
              this.api.pushError(new Error(rr.consoleErrorPrefix + Sr), {
                type: Qr,
                stackFrames: Zr
              })
            }
          } catch (jr) {
            this.logError(jr)
          }
        }))
      }
      destroy() {
        var rr;
        null === (rr = this.subscription) || void 0 === rr || rr.unsubscribe(), this.subscription = void 0
      }
    };
    HQ.defaultDisabledLevels = [nQ.DEBUG, nQ.TRACE, nQ.LOG], HQ.consoleErrorPrefix = "console.error: ";
    const qQ = [];
    var RQ = class extends SQ {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-errors", this.version = QQ
      }
      initialize() {
        this.logDebug("Initializing"),
          function(rr) {
            const Sr = window.onerror;
            window.onerror = function() {
              for (var Qr = arguments.length, Zr = new Array(Qr), Wr = 0; Wr < Qr; Wr++) Zr[Wr] = arguments[Wr];
              try {
                const {
                  value: Sr,
                  type: Qr,
                  stackFrames: Wr
                } = lQ(Zr), ar = Zr[4];
                if (Sr) {
                  const Zr = {
                    type: Qr,
                    stackFrames: Wr
                  };
                  null != ar && (Zr.originalError = ar), rr.pushError(new Error(Sr), Zr)
                }
              } finally {
                null === Sr || void 0 === Sr || Sr.apply(window, Zr)
              }
            }
          }(this.api),
          function(rr) {
            const Sr = Sr => {
              var Qr;
              let Zr, Wr, ar = Sr;
              if (ar.reason) ar = Sr.reason;
              else if (null === (Qr = Sr.detail) || void 0 === Qr ? void 0 : Qr.reason) {
                var jr;
                ar = null === (jr = Sr.detail) || void 0 === jr ? void 0 : jr.reason
              }
              let Ir = [];
              qr(ar) ? (Zr = `Non-Error promise rejection captured with value: ${String(ar)}`, Wr = "UnhandledRejection") : [Zr, Wr, Ir] = LQ(ar), Zr && rr.pushError(new Error(Zr), {
                type: Wr,
                stackFrames: Ir
              })
            };
            window.addEventListener("unhandledrejection", Sr), qQ.push(Sr)
          }(this.api)
      }
    };
    const gQ = "unknown";
    var CQ = class extends SQ {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-view", this.version = QQ, this.waitingForActivation = !1, this.sendViewChangedEvent = rr => {
          var Sr;
          if (this.waitingForActivation || document.prerendering) return;
          const Qr = rr.view;
          if (Qr && Qr.name !== (null === (Sr = this.notifiedView) || void 0 === Sr ? void 0 : Sr.name)) {
            var Zr, Wr, ar;
            const rr = null !== (Zr = null === (Wr = this.notifiedView) || void 0 === Wr ? void 0 : Wr.name) && void 0 !== Zr ? Zr : gQ;
            this.notifiedView = Qr, this.api.pushEvent(KS, {
              fromView: rr,
              toView: null !== (ar = Qr.name) && void 0 !== ar ? ar : gQ
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
    class MQ {
      t;
      o = 0;
      i = [];
      l(rr) {
        if (rr.hadRecentInput) return;
        const Sr = this.i[0],
          Qr = this.i.at(-1);
        this.o && Sr && Qr && rr.startTime - Qr.startTime < 1e3 && rr.startTime - Sr.startTime < 5e3 ? (this.o += rr.value, this.i.push(rr)) : (this.o = rr.value, this.i = [rr]), this.t?.(rr)
      }
    }
    const GQ = () => {
        const rr = performance.getEntriesByType("navigation")[0];
        if (rr && rr.responseStart > 0 && rr.responseStart < performance.now()) return rr
      },
      kQ = rr => {
        if ("loading" === document.readyState) return "loading";
        const Sr = GQ();
        if (Sr) {
          if (rr < Sr.domInteractive) return "loading";
          if (0 === Sr.domContentLoadedEventStart || rr < Sr.domContentLoadedEventStart) return "dom-interactive";
          if (0 === Sr.domComplete || rr < Sr.domComplete) return "dom-content-loaded"
        }
        return "complete"
      },
      AQ = rr => {
        const Sr = rr.nodeName;
        return 1 === rr.nodeType ? Sr.toLowerCase() : Sr.toUpperCase().replace(/^#/, "")
      },
      VQ = rr => {
        let Sr = "";
        try {
          for (; 9 !== rr?.nodeType;) {
            const Qr = rr,
              Zr = Qr.id ? "#" + Qr.id : [AQ(Qr), ...Array.from(Qr.classList ?? []).sort()].join(".");
            if (Sr.length + Zr.length > 99) return Sr || Zr;
            if (Sr = Sr ? Zr + ">" + Sr : Zr, Qr.id) break;
            rr = Qr.parentNode
          }
        } catch {}
        return Sr
      },
      iQ = new WeakMap;

    function wQ(rr, Sr) {
      let Qr = iQ.get(Sr);
      return Qr || (Qr = new WeakMap, iQ.set(Sr, Qr)), Qr.get(rr) || Qr.set(rr, new Sr), Qr.get(rr)
    }
    let cQ = -1;
    const FQ = () => cQ,
      oQ = rr => {
        addEventListener("pageshow", (Sr => {
          Sr.persisted && (cQ = Sr.timeStamp, rr(Sr))
        }), !0)
      },
      bQ = (rr, Sr, Qr, Zr) => {
        let Wr, ar;
        return jr => {
          Sr.value >= 0 && (jr || Zr) && (ar = Sr.value - (Wr ?? 0), (ar || void 0 === Wr) && (Wr = Sr.value, Sr.delta = ar, Sr.rating = ((rr, Sr) => rr > Sr[1] ? "poor" : rr > Sr[0] ? "needs-improvement" : "good")(Sr.value, Qr), rr(Sr)))
        }
      },
      JQ = rr => {
        requestAnimationFrame((() => requestAnimationFrame((() => rr()))))
      },
      DQ = () => GQ()?.activationStart ?? 0;
    let dQ = -1;
    const sQ = new Set,
      uQ = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
      rZ = rr => {
        if ("hidden" === document.visibilityState) {
          if ("visibilitychange" === rr.type)
            for (const rr of sQ) rr();
          isFinite(dQ) || (dQ = "visibilitychange" === rr.type ? rr.timeStamp : 0, removeEventListener("prerenderingchange", rZ, !0))
        }
      },
      SZ = function() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (dQ = 1 / 0), dQ < 0) {
          const rr = DQ(),
            Sr = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find((Sr => "hidden" === Sr.name && Sr.startTime >= rr))?.startTime;
          dQ = Sr ?? uQ(), addEventListener("visibilitychange", rZ, !0), addEventListener("prerenderingchange", rZ, !0), oQ((() => {
            setTimeout((() => {
              dQ = uQ()
            }))
          }))
        }
        return {
          get firstHiddenTime() {
            return dQ
          },
          onHidden(rr) {
            sQ.add(rr)
          }
        }
      },
      QZ = function(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          Qr = arguments.length > 2 ? arguments[2] : void 0,
          Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Wr = arguments.length > 4 ? arguments[4] : void 0,
          ar = arguments.length > 5 ? arguments[5] : void 0,
          jr = arguments.length > 6 ? arguments[6] : void 0;
        const Ir = GQ(),
          fr = Ir?.navigationId || 0;
        let Er = "navigate";
        return Qr ? Er = Qr : FQ() >= 0 ? Er = "back-forward-cache" : Ir && (document.prerendering || DQ() > 0 ? Er = "prerender" : document.wasDiscarded ? Er = "restore" : Ir.type && (Er = Ir.type.replace(/_/g, "-"))), {
          name: rr,
          value: Sr,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
          navigationType: Er,
          navigationId: Zr || fr,
          navigationInteractionId: Wr,
          navigationURL: ar || Ir?.name,
          navigationStartTime: jr || 0
        }
      },
      ZZ = function(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          const Zr = rr.filter((rr => PerformanceObserver.supportedEntryTypes.includes(rr)));
          if (Zr.length > 0) {
            const rr = new PerformanceObserver((rr => {
              queueMicrotask((() => {
                const Qr = rr.getEntries();
                Zr.length > 1 && Qr.sort(((rr, Sr) => rr.startTime + rr.duration - (Sr.startTime + Sr.duration))), Sr(Qr)
              }))
            }));
            for (const Sr of Zr) rr.observe({
              type: Sr,
              buffered: !0,
              ...Qr
            });
            return rr
          }
        } catch {}
      },
      WZ = rr => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && rr && rr.reportSoftNavs,
      aZ = (rr, Sr) => {
        if (rr.set(Sr.navigationId, Sr), rr.size > 2) {
          const Sr = rr.keys().next().value;
          void 0 !== Sr && rr.delete(Sr)
        }
      },
      jZ = rr => {
        let Sr = !1;
        return () => {
          Sr || (rr(), Sr = !0)
        }
      };
    class IZ {
      u
    }
    const fZ = rr => {
        document.prerendering ? addEventListener("prerenderingchange", rr, !0) : rr()
      },
      EZ = [1800, 3e3],
      pZ = function(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Qr = WZ(Sr);
        fZ((() => {
          const Zr = wQ(Sr, IZ),
            Wr = SZ();
          let ar, jr = QZ("FCP");
          const Ir = ZZ(["paint"], (rr => {
            for (const Sr of rr) "first-contentful-paint" === Sr.name && (Ir.disconnect(), Sr.startTime < Wr.firstHiddenTime && (jr.value = Math.max(Sr.startTime - DQ(), 0), jr.entries.push(Sr), jr.navigationId = Sr.navigationId || jr.navigationId, ar(!0)))
          }));
          Ir && (ar = bQ(rr, jr, EZ, Sr.reportAllChanges), oQ((Qr => {
            jr = QZ("FCP", -1, "back-forward-cache", jr.navigationId, jr.navigationInteractionId, jr.navigationURL, FQ()), ar = bQ(rr, jr, EZ, Sr.reportAllChanges), JQ((() => {
              jr.value = performance.now() - Qr.timeStamp, ar(!0)
            }))
          }))), Qr && ZZ(["soft-navigation"], (Qr => {
            Qr.forEach((Qr => {
              Zr.u && Qr.navigationId && aZ(Zr.u, Qr);
              const Wr = Math.max((Qr.presentationTime || Qr.paintTime || 0) - Qr.startTime, 0);
              jr = QZ("FCP", Wr, "soft-navigation", Qr.navigationId, Qr.interactionId, Qr.name, Qr.startTime), ar = bQ(rr, jr, EZ, Sr.reportAllChanges), ar(!0)
            }))
          }), Sr)
        }))
      },
      xZ = [.1, .25],
      mZ = rr => rr.find((rr => 1 === rr.node?.nodeType)) || rr[0];
    let NZ = 0,
      UZ = 1 / 0,
      tZ = 0;
    const hZ = rr => {
      for (const Sr of rr) Sr.interactionId && (UZ = Math.min(UZ, Sr.interactionId), tZ = Math.max(tZ, Sr.interactionId), NZ = tZ ? (tZ - UZ) / 7 + 1 : 0)
    };
    let zZ;
    const YZ = () => zZ ? NZ : performance.interactionCount ?? 0;
    class nZ {
      h = 0;
      v = [];
      p = new Map;
      m;
      M;
      T() {
        return YZ() - this.h
      }
      D() {
        this.h = YZ(), this.v.length = 0, this.p.clear()
      }
      S(rr) {
        const Sr = this.T(),
          Qr = Math.min(this.v.length - 1, Math.floor(Sr / 50));
        return !Sr || -1 !== Qr || "soft-navigation" !== rr && "back-forward-cache" !== rr ? this.v[Qr] : {
          k: 8,
          id: -1,
          entries: []
        }
      }
      l(rr) {
        if (this.m?.(rr), !rr.interactionId) return;
        const Sr = this.v.at(-1);
        let Qr = this.p.get(rr.interactionId);
        if (Qr || this.v.length < 10 || rr.duration > Sr.k) {
          if (Qr ? rr.duration > Qr.k ? (Qr.entries = [rr], Qr.k = rr.duration) : rr.duration === Qr.k && rr.startTime === Qr.entries[0].startTime && Qr.entries.push(rr) : (Qr = {
              id: rr.interactionId,
              entries: [rr],
              k: rr.duration
            }, this.p.set(Qr.id, Qr), this.v.push(Qr)), this.v.sort(((rr, Sr) => Sr.k - rr.k)), this.v.length > 10) {
            const rr = this.v.splice(10);
            for (const Sr of rr) this.p.delete(Sr.id)
          }
          this.M?.(Qr)
        }
      }
    }
    const eZ = rr => {
        const Sr = "requestIdleCallback" in globalThis ? 1e3 : 0,
          Qr = globalThis.requestIdleCallback || setTimeout,
          Zr = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) rr();
        else {
          const Wr = jZ(rr);
          let ar = -1;
          const jr = () => {
            Zr(ar), Wr()
          };
          addEventListener("visibilitychange", jr, {
            once: !0,
            capture: !0
          }), ar = Qr((() => {
            removeEventListener("visibilitychange", jr, {
              capture: !0
            }), Wr()
          }), {
            timeout: Sr
          })
        }
      },
      KZ = [200, 500],
      yZ = function(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Qr = wQ(Sr = Object.assign({}, Sr), nZ);
        let Zr = [],
          Wr = [],
          ar = 0;
        const jr = new WeakMap,
          Ir = new WeakMap;
        let fr = !1;
        const Er = () => {
            fr || (fr = !0, eZ(pr))
          },
          pr = () => {
            const rr = new Set(Qr.v.map((rr => jr.get(rr.entries[0])))),
              Sr = Wr.length - 10;
            Wr = Wr.filter(((Qr, Zr) => Zr >= Sr || rr.has(Qr)));
            const Ir = new Set;
            for (const Qr of Wr) {
              const rr = xr(Qr.startTime, Qr.processingEnd);
              for (const Sr of rr) Ir.add(Sr)
            }
            const Er = Zr.length - 10;
            Zr = Zr.filter(((rr, Sr) => Ir.has(rr) || Sr >= Er && rr.startTime > ar)), fr = !1
          };
        Qr.m = rr => {
          const Qr = rr.startTime + rr.duration;
          let Zr;
          ar = Math.max(ar, rr.processingEnd);
          for (let ar = Wr.length - 1; ar >= 0; ar--) {
            const jr = Wr[ar];
            if (Math.abs(Qr - jr.renderTime) <= 8) {
              Zr = jr, Zr.startTime = Math.min(rr.startTime, Zr.startTime), Zr.processingStart = Math.min(rr.processingStart, Zr.processingStart), Zr.processingEnd = Math.max(rr.processingEnd, Zr.processingEnd), Sr.includeProcessedEventEntries && Zr.entries.push(rr);
              break
            }
          }
          Zr || (Zr = {
            startTime: rr.startTime,
            processingStart: rr.processingStart,
            processingEnd: rr.processingEnd,
            renderTime: Qr,
            entries: Sr.includeProcessedEventEntries ? [rr] : []
          }, Wr.push(Zr)), rr.interactionId && jr.set(rr, Zr), Er()
        }, Qr.M = rr => {
          if (!Ir.get(rr)) {
            const Qr = rr.entries.find((rr => rr.target))?.target;
            if (Qr) {
              const Zr = Sr.generateTarget?.(Qr) ?? VQ(Qr);
              Ir.set(rr, Zr)
            } else {
              const Sr = rr.entries.find((rr => rr.targetSelector))?.targetSelector;
              Sr && Ir.set(rr, Sr)
            }
          }
        };
        const xr = (rr, Sr) => {
          const Qr = [];
          for (const Wr of Zr)
            if (!(Wr.startTime + Wr.duration < rr)) {
              if (Wr.startTime > Sr) break;
              Qr.push(Wr)
            } return Qr
        };
        ZZ(["long-animation-frame"], (rr => {
            Zr = Zr.concat(rr), Er()
          }), Sr),
          function(rr) {
            let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
            const Qr = SZ();
            fZ((() => {
              "interactionCount" in performance || zZ || (zZ = ZZ(["event"], hZ, {
                durationThreshold: 0
              }));
              let Zr, Wr = QZ("INP");
              const ar = wQ(Sr, nZ),
                jr = (Qr, jr, Ir, fr, Er) => {
                  ar.D(), Wr = QZ("INP", -1, Qr, jr, Ir, fr, Er), Zr = bQ(rr, Wr, KZ, Sr.reportAllChanges)
                },
                Ir = () => {
                  const rr = ar.S(Wr.navigationType);
                  rr && rr.k !== Wr.value && (Wr.value = rr.k, Wr.entries = rr.entries, Zr())
                },
                fr = rr => {
                  Ir(), Zr(!0), jr("soft-navigation", rr.navigationId, rr.interactionId, rr.name, rr.startTime)
                },
                Er = function(rr) {
                  let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  eZ((() => {
                    for (const Sr of rr) "soft-navigation" !== Sr.entryType ? ar.l(Sr) : fr(Sr);
                    Ir(), Sr && Zr(!0)
                  }))
                },
                pr = ["event", "first-input"];
              WZ(Sr) && pr.push("soft-navigation");
              const xr = ZZ(pr, Er, {
                ...Sr,
                durationThreshold: Sr.durationThreshold ?? 40
              });
              Zr = bQ(rr, Wr, KZ, Sr.reportAllChanges), xr && (Qr.onHidden((() => {
                Er(xr.takeRecords(), !0)
              })), oQ((() => {
                jr("back-forward-cache", Wr.navigationId, Wr.navigationInteractionId, Wr.navigationURL, FQ())
              })))
            }))
          }((Sr => {
            rr((rr => {
              if (0 === rr.entries.length) {
                const Sr = rr.navigationStartTime || 0,
                  Qr = {
                    processedEventEntries: [],
                    longAnimationFrameEntries: [],
                    inputDelay: 0,
                    processingDuration: 0,
                    presentationDelay: rr.value,
                    loadState: kQ(Sr)
                  };
                return Object.assign(rr, {
                  attribution: Qr
                })
              }
              const Sr = rr.entries[0],
                Zr = jr.get(Sr),
                Wr = Math.max(Zr.processingStart, Sr.startTime),
                ar = Math.max(Sr.startTime + Sr.duration, Wr),
                fr = Math.min(Zr.processingEnd, ar),
                Er = Zr.entries.sort(((rr, Sr) => rr.processingStart - Sr.processingStart)),
                pr = xr(Sr.startTime, fr),
                mr = Qr.p.get(Sr.interactionId),
                Nr = {
                  interactionTarget: Ir.get(mr),
                  interactionType: Sr.name.startsWith("key") ? "keyboard" : "pointer",
                  interactionTime: Sr.startTime,
                  nextPaintTime: ar,
                  processedEventEntries: Er,
                  longAnimationFrameEntries: pr,
                  inputDelay: Wr - Sr.startTime,
                  processingDuration: fr - Wr,
                  presentationDelay: ar - fr,
                  loadState: kQ(Sr.startTime),
                  longestScript: void 0,
                  totalScriptDuration: void 0,
                  totalStyleAndLayoutDuration: void 0,
                  totalPaintDuration: void 0,
                  totalUnattributedDuration: void 0
                };
              return (rr => {
                const Sr = rr.interactionTime,
                  Qr = rr.nextPaintTime;
                if (!rr.longAnimationFrameEntries?.length || !Sr || !Qr) return;
                const Zr = rr.inputDelay,
                  Wr = rr.processingDuration;
                let ar, jr, Ir = 0,
                  fr = 0,
                  Er = 0,
                  pr = 0;
                for (const Nr of rr.longAnimationFrameEntries) {
                  fr = fr + Nr.startTime + Nr.duration - Nr.styleAndLayoutStart;
                  for (const rr of Nr.scripts) {
                    const Qr = rr.startTime + rr.duration;
                    if (Qr < Sr) continue;
                    const Er = Qr - Math.max(Sr, rr.startTime),
                      xr = rr.duration ? Er / rr.duration * rr.forcedStyleAndLayoutDuration : 0;
                    Ir += Er - xr, fr += xr, Er > pr && (jr = rr.startTime < Sr + Zr ? "input-delay" : rr.startTime >= Sr + Zr + Wr ? "presentation-delay" : "processing-duration", ar = rr, pr = Er)
                  }
                }
                const xr = rr.longAnimationFrameEntries.at(-1),
                  mr = xr ? xr.startTime + xr.duration : 0;
                mr >= Sr + Zr + Wr && (Er = Qr - mr), ar && jr && (rr.longestScript = {
                  entry: ar,
                  subpart: jr,
                  intersectingDuration: pr
                }), rr.totalScriptDuration = Ir, rr.totalStyleAndLayoutDuration = fr, rr.totalPaintDuration = Er, rr.totalUnattributedDuration = Qr - Sr - Ir - fr - Er
              })(Nr), Object.assign(rr, {
                attribution: Nr
              })
            })(Sr))
          }), Sr)
      };
    class BZ {
      m;
      u;
      l(rr) {
        this.m?.(rr)
      }
    }
    const TZ = [2500, 4e3];
    let vZ = 50;
    const OZ = [];
    ZZ(["resource"], (rr => {
      for (const Sr of rr) OZ.push(Sr), OZ.length > vZ && OZ.shift()
    }));
    const LZ = [800, 1800],
      lZ = rr => {
        document.prerendering ? fZ((() => lZ(rr))) : "complete" !== document.readyState ? addEventListener("load", (() => lZ(rr)), !0) : setTimeout(rr)
      },
      XZ = "load_state",
      PZ = "time_to_first_byte";
    var HZ = class {
        constructor(rr, Sr) {
          this.corePushMeasurement = rr, this.webVitalConfig = Sr
        }
        initialize() {
          this.measureCLS(), this.measureFCP(), this.measureINP(), this.measureLCP(), this.measureTTFB()
        }
        measureCLS() {
          var rr;
          ! function(rr) {
            let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const Qr = wQ(Sr = Object.assign({}, Sr), MQ),
              Zr = new WeakMap;
            Qr.t = rr => {
                if (rr?.sources?.length) {
                  const Qr = mZ(rr.sources),
                    Wr = Qr?.node;
                  if (Wr) {
                    const rr = Sr.generateTarget?.(Wr) ?? VQ(Wr);
                    Zr.set(Qr, rr)
                  }
                }
              },
              function(rr) {
                let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const Qr = SZ();
                pZ(jZ((() => {
                  let Zr, Wr = QZ("CLS", 0);
                  const ar = wQ(Sr, MQ),
                    jr = (Qr, jr, Ir, fr, Er) => {
                      Wr = QZ("CLS", 0, Qr, jr, Ir, fr, Er), ar.o = 0, Zr = bQ(rr, Wr, xZ, Sr.reportAllChanges)
                    },
                    Ir = function() {
                      let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      ar.o > Wr.value && (Wr.value = ar.o, Wr.entries = ar.i), Zr(rr)
                    },
                    fr = rr => {
                      Ir(!0), jr("soft-navigation", rr.navigationId, rr.interactionId, rr.name, rr.startTime)
                    },
                    Er = rr => {
                      for (const Sr of rr) "soft-navigation" !== Sr.entryType ? ar.l(Sr) : fr(Sr);
                      Ir()
                    },
                    pr = ["layout-shift"];
                  WZ(Sr) && pr.push("soft-navigation");
                  const xr = ZZ(pr, Er);
                  xr && (Zr = bQ(rr, Wr, xZ, Sr.reportAllChanges), Qr.onHidden((() => {
                    Er(xr.takeRecords()), Zr(!0)
                  })), oQ((() => {
                    jr("back-forward-cache", Wr.navigationId, Wr.navigationInteractionId, Wr.navigationURL, FQ()), JQ(Zr)
                  })), setTimeout(Zr))
                })))
              }((Sr => {
                rr((rr => {
                  let Sr = {};
                  if (rr.entries.length) {
                    const Qr = rr.entries.reduce(((rr, Sr) => rr.value > Sr.value ? rr : Sr));
                    if (Qr?.sources?.length) {
                      const rr = mZ(Qr.sources);
                      rr && (Sr = {
                        largestShiftTarget: Zr.get(rr),
                        largestShiftTime: Qr.startTime,
                        largestShiftValue: Qr.value,
                        largestShiftSource: rr,
                        largestShiftEntry: Qr,
                        loadState: kQ(Qr.startTime)
                      })
                    }
                  }
                  return Object.assign(rr, {
                    attribution: Sr
                  })
                })(Sr))
              }), Sr)
          }((rr => {
            const {
              loadState: Sr,
              largestShiftValue: Qr,
              largestShiftTime: Zr,
              largestShiftTarget: Wr
            } = rr.attribution, ar = this.buildInitialValues(rr);
            this.addIfPresent(ar, "largest_shift_value", Qr), this.addIfPresent(ar, "largest_shift_time", Zr);
            const jr = this.buildInitialContext(rr);
            this.addIfPresent(jr, XZ, Sr), this.addIfPresent(jr, "largest_shift_target", Wr), this.pushMeasurement(ar, jr)
          }), {
            reportAllChanges: null === (rr = this.webVitalConfig) || void 0 === rr ? void 0 : rr.reportAllChanges
          })
        }
        measureFCP() {
          var rr;
          ! function(rr) {
            let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const Qr = wQ(Sr = Object.assign({}, Sr), IZ);
            WZ(Sr) && (Qr.u = new Map), pZ((Sr => {
              rr((rr => {
                let Sr = {
                  timeToFirstByte: 0,
                  firstByteToFCP: rr.value,
                  loadState: kQ(FQ())
                };
                if ("soft-navigation" !== rr.navigationType) {
                  if (rr.entries.length) {
                    const Qr = GQ(),
                      Zr = rr.entries.at(-1);
                    if (Qr) {
                      const Wr = Qr.responseStart,
                        ar = Qr.activationStart || 0,
                        jr = Math.max(0, Wr - ar);
                      Sr = {
                        timeToFirstByte: jr,
                        firstByteToFCP: rr.value - jr,
                        loadState: kQ(rr.entries[0].startTime),
                        navigationEntry: Qr,
                        fcpEntry: Zr
                      }
                    }
                  }
                } else {
                  const Zr = Qr.u?.get(rr.navigationId);
                  Zr && (Sr = {
                    timeToFirstByte: 0,
                    firstByteToFCP: rr.value,
                    loadState: "complete",
                    navigationEntry: Zr
                  })
                }
                return Object.assign(rr, {
                  attribution: Sr
                })
              })(Sr))
            }), Sr)
          }((rr => {
            const {
              firstByteToFCP: Sr,
              timeToFirstByte: Qr,
              loadState: Zr
            } = rr.attribution, Wr = this.buildInitialValues(rr);
            this.addIfPresent(Wr, "first_byte_to_fcp", Sr), this.addIfPresent(Wr, PZ, Qr);
            const ar = this.buildInitialContext(rr);
            this.addIfPresent(ar, XZ, Zr), this.pushMeasurement(Wr, ar)
          }), {
            reportAllChanges: null === (rr = this.webVitalConfig) || void 0 === rr ? void 0 : rr.reportAllChanges
          })
        }
        measureINP() {
          var rr;
          yZ((rr => {
            var Sr;
            const {
              interactionTime: Qr,
              presentationDelay: Zr,
              inputDelay: Wr,
              processingDuration: ar,
              nextPaintTime: jr,
              loadState: Ir,
              interactionTarget: fr,
              interactionType: Er,
              totalScriptDuration: pr,
              totalStyleAndLayoutDuration: xr,
              totalPaintDuration: mr,
              totalUnattributedDuration: Nr,
              longestScript: Ur
            } = rr.attribution, tr = this.buildInitialValues(rr);
            this.addIfPresent(tr, "interaction_time", Qr), this.addIfPresent(tr, "presentation_delay", Zr), this.addIfPresent(tr, "input_delay", Wr), this.addIfPresent(tr, "processing_duration", ar), this.addIfPresent(tr, "next_paint_time", jr), this.addNumberIfDefined(tr, "total_script_duration", pr), this.addNumberIfDefined(tr, "total_style_and_layout_duration", xr), this.addNumberIfDefined(tr, "total_paint_duration", mr), this.addNumberIfDefined(tr, "total_unattributed_duration", Nr), this.addNumberIfDefined(tr, "longest_script_intersecting_duration", null === Ur || void 0 === Ur ? void 0 : Ur.intersectingDuration);
            const hr = this.buildInitialContext(rr);
            this.addIfPresent(hr, XZ, Ir), this.addIfPresent(hr, "interaction_target", fr), this.addIfPresent(hr, "interaction_type", Er), this.addIfPresent(hr, "longest_script_subpart", null === Ur || void 0 === Ur ? void 0 : Ur.subpart), this.addIfPresent(hr, "longest_script_invoker_type", null === Ur || void 0 === Ur ? void 0 : Ur.entry.invokerType), (null === (Sr = this.webVitalConfig) || void 0 === Sr ? void 0 : Sr.trackAttributionSources) && (this.addIfPresent(hr, "longest_script_invoker", null === Ur || void 0 === Ur ? void 0 : Ur.entry.invoker), this.addIfPresent(hr, "longest_script_source_url", null === Ur || void 0 === Ur ? void 0 : Ur.entry.sourceURL), this.addIfPresent(hr, "longest_script_source_function_name", null === Ur || void 0 === Ur ? void 0 : Ur.entry.sourceFunctionName), this.addIfPresent(hr, "longest_script_source_char_position", void 0 !== (null === Ur || void 0 === Ur ? void 0 : Ur.entry.sourceCharPosition) ? String(Ur.entry.sourceCharPosition) : void 0)), this.pushMeasurement(tr, hr)
          }), {
            reportAllChanges: null === (rr = this.webVitalConfig) || void 0 === rr ? void 0 : rr.reportAllChanges
          })
        }
        measureLCP() {
          var rr;
          ! function(rr) {
            let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            null != (Sr = Object.assign({}, Sr)).resourceBufferSize && (vZ = Sr.resourceBufferSize);
            const Qr = wQ(Sr, BZ),
              Zr = new WeakMap;
            WZ(Sr) && (Qr.u = new Map), Qr.m = rr => {
                const Qr = rr.element;
                if (Qr) {
                  const Wr = Sr.generateTarget?.(Qr) ?? VQ(Qr);
                  Zr.set(rr, Wr)
                } else rr.id && Zr.set(rr, `#${rr.id}`)
              },
              function(rr) {
                let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  Qr = !1;
                const Zr = WZ(Sr);
                fZ((() => {
                  let Wr, ar = SZ(),
                    jr = QZ("LCP");
                  const Ir = wQ(Sr, BZ),
                    fr = (Zr, Ir, fr, Er, pr) => {
                      jr = QZ("LCP", -1, Zr, Ir, fr, Er, pr), Wr = bQ(rr, jr, TZ, Sr.reportAllChanges), Qr = !1, "soft-navigation" === Zr && (ar = SZ(!0))
                    },
                    Er = rr => {
                      Ir.u && rr.navigationId && aZ(Ir.u, rr), Qr || Wr(!0), fr("soft-navigation", rr.navigationId, rr.interactionId, rr.name, rr.startTime);
                      const Sr = rr.getLargestInteractionContentfulPaint?.();
                      Sr && pr([Sr])
                    },
                    pr = rr => {
                      Sr.reportAllChanges || Zr || (rr = rr.slice(-1));
                      for (const Sr of rr) {
                        if (!Sr) continue;
                        if ("soft-navigation" === Sr.entryType) {
                          Er(Sr);
                          continue
                        }
                        let rr = 0,
                          Qr = [],
                          Zr = Sr.startTime;
                        if ("largest-contentful-paint" === Sr.entryType) rr = Math.max(Sr.startTime - DQ(), 0), Ir.l(Sr), Qr = [Sr];
                        else if ("interaction-contentful-paint" === Sr.entryType) {
                          const Wr = Sr;
                          if (!jr.navigationId) continue;
                          if ("interactionId" in Wr && Wr.interactionId != jr.navigationInteractionId) continue;
                          Zr = Wr.largestContentfulPaint?.renderTime || 0, rr = Math.max(Zr - Sr.startTime, 0), Wr.largestContentfulPaint && (Ir.l(Wr.largestContentfulPaint), Qr = [Wr.largestContentfulPaint])
                        }
                        Zr < ar.firstHiddenTime && (jr.value = rr, jr.entries = Qr, Wr())
                      }
                    },
                    xr = ["largest-contentful-paint"];
                  Zr && xr.push("interaction-contentful-paint", "soft-navigation");
                  const mr = ZZ(xr, pr);
                  if (mr) {
                    Wr = bQ(rr, jr, TZ, Sr.reportAllChanges);
                    const ar = ["keydown", "click", "visibilitychange"],
                      Ir = rr => {
                        if (rr.isTrusted && !Qr) {
                          const rr = jr.id;
                          eZ((() => {
                            if (!Qr) {
                              if (!Zr) {
                                mr.disconnect();
                                for (const rr of ar) removeEventListener(rr, Ir, {
                                  capture: !0
                                })
                              }
                              rr === jr.id && (Qr = !0, Wr(!0))
                            }
                          }))
                        }
                      };
                    for (const rr of ar) addEventListener(rr, Ir, {
                      capture: !0
                    });
                    oQ((Zr => {
                      fr("back-forward-cache", jr.navigationId, jr.navigationInteractionId, jr.navigationURL, FQ()), Wr = bQ(rr, jr, TZ, Sr.reportAllChanges), JQ((() => {
                        jr.value = performance.now() - Zr.timeStamp, Qr = !0, Wr(!0)
                      }))
                    }))
                  }
                }))
              }((Sr => {
                rr((rr => {
                  let Sr = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadDuration: 0,
                    elementRenderDelay: rr.value
                  };
                  if (rr.entries.length) {
                    const Wr = rr.entries.at(-1),
                      ar = rr => rr.name === Wr.url && (rr.requestStart || rr.startTime) <= Wr.startTime,
                      jr = Wr.url && (OZ.findLast(ar) || performance.getEntriesByType("resource").findLast(ar));
                    let Ir;
                    Sr.target = Zr.get(Wr), Sr.lcpEntry = Wr, Wr.url && (Sr.url = Wr.url), jr && (Sr.lcpResourceEntry = jr);
                    let fr = 0,
                      Er = 0;
                    if ("soft-navigation" !== rr.navigationType ? (Ir = GQ(), fr = Ir?.activationStart ?? 0, Er = Ir?.responseStart ?? 0) : (fr = rr.navigationStartTime || 0, Ir = Qr.u?.get(rr.navigationId)), Ir) {
                      const Qr = Math.max(0, Er - fr),
                        Zr = Math.max(Qr, jr ? (jr.requestStart || jr.startTime) - fr : 0),
                        Wr = Math.min(rr.value, Math.max(Zr, jr ? jr.responseEnd - fr : 0));
                      Sr = {
                        ...Sr,
                        timeToFirstByte: Qr,
                        resourceLoadDelay: Zr - Qr,
                        resourceLoadDuration: Wr - Zr,
                        elementRenderDelay: rr.value - Wr,
                        navigationEntry: Ir
                      }
                    }
                  }
                  return Object.assign(rr, {
                    attribution: Sr
                  })
                })(Sr))
              }), Sr)
          }((rr => {
            var Sr;
            const {
              elementRenderDelay: Qr,
              resourceLoadDelay: Zr,
              resourceLoadDuration: Wr,
              timeToFirstByte: ar,
              target: jr,
              url: Ir,
              lcpResourceEntry: fr
            } = rr.attribution, Er = this.buildInitialValues(rr);
            this.addIfPresent(Er, "element_render_delay", Qr), this.addIfPresent(Er, "resource_load_delay", Zr), this.addIfPresent(Er, "resource_load_duration", Wr), this.addIfPresent(Er, PZ, ar);
            const pr = this.buildInitialContext(rr);
            this.addIfPresent(pr, "element", jr), (null === (Sr = this.webVitalConfig) || void 0 === Sr ? void 0 : Sr.trackAttributionSources) && (this.addIfPresent(pr, "resource_url", Ir), this.addIfPresent(pr, "resource_delivery_type", null === fr || void 0 === fr ? void 0 : fr.deliveryType), this.addIfPresent(pr, "resource_initiator_type", null === fr || void 0 === fr ? void 0 : fr.initiatorType)), this.pushMeasurement(Er, pr)
          }), {
            reportAllChanges: null === (rr = this.webVitalConfig) || void 0 === rr ? void 0 : rr.reportAllChanges
          })
        }
        measureTTFB() {
          var rr;
          ! function(rr) {
            ! function(rr) {
              let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const Qr = WZ(Sr);
              let Zr = QZ("TTFB"),
                Wr = bQ(rr, Zr, LZ, Sr.reportAllChanges);
              lZ((() => {
                const ar = GQ();
                if (ar) {
                  const jr = ar.responseStart;
                  Zr.value = Math.max(jr - DQ(), 0), Zr.entries = [ar], Wr(!0), oQ((() => {
                    Zr = QZ("TTFB", 0, "back-forward-cache", Zr.navigationId, Zr.navigationInteractionId, Zr.navigationURL, FQ()), Wr = bQ(rr, Zr, LZ, Sr.reportAllChanges), Wr(!0)
                  })), Qr && ZZ(["soft-navigation"], (Qr => {
                    Qr.forEach((Qr => {
                      Qr.navigationId && (Zr = QZ("TTFB", 0, "soft-navigation", Qr.navigationId, Qr.interactionId, Qr.name, Qr.startTime), Zr.entries = [Qr], Wr = bQ(rr, Zr, LZ, Sr.reportAllChanges), Wr(!0))
                    }))
                  }), Sr)
                }
              }))
            }((Sr => {
              rr((rr => {
                const Sr = rr.entries[0];
                let Qr = {
                  waitingDuration: 0,
                  cacheDuration: 0,
                  dnsDuration: 0,
                  connectionDuration: 0,
                  requestDuration: 0,
                  navigationEntry: Sr
                };
                if (rr.entries.length && Sr instanceof PerformanceNavigationTiming) {
                  const Zr = Sr.activationStart || 0,
                    Wr = Math.max((Sr.workerStart || Sr.fetchStart || 0) - Zr, 0),
                    ar = Math.max(Sr.domainLookupStart - Zr, 0),
                    jr = Math.max(Sr.connectStart - Zr, 0),
                    Ir = Math.max(Sr.connectEnd - Zr, 0);
                  Qr = {
                    waitingDuration: Wr,
                    cacheDuration: ar - Wr,
                    dnsDuration: jr - ar,
                    connectionDuration: Ir - jr,
                    requestDuration: rr.value - Ir,
                    navigationEntry: Sr
                  }
                }
                return Object.assign(rr, {
                  attribution: Qr
                })
              })(Sr))
            }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }((rr => {
            const {
              dnsDuration: Sr,
              connectionDuration: Qr,
              requestDuration: Zr,
              waitingDuration: Wr,
              cacheDuration: ar
            } = rr.attribution, jr = this.buildInitialValues(rr);
            this.addIfPresent(jr, "dns_duration", Sr), this.addIfPresent(jr, "connection_duration", Qr), this.addIfPresent(jr, "request_duration", Zr), this.addIfPresent(jr, "waiting_duration", Wr), this.addIfPresent(jr, "cache_duration", ar);
            const Ir = this.buildInitialContext(rr);
            this.pushMeasurement(jr, Ir)
          }), {
            reportAllChanges: null === (rr = this.webVitalConfig) || void 0 === rr ? void 0 : rr.reportAllChanges
          })
        }
        buildInitialValues(rr) {
          return {
            [rr.name.toLowerCase()]: rr.value,
            delta: rr.delta
          }
        }
        buildInitialContext(rr) {
          var Sr;
          const Qr = null !== (Sr = rS("com.grafana.faro.lastNavigationId", dr)) && void 0 !== Sr ? Sr : gQ;
          return {
            id: rr.id,
            rating: rr.rating,
            navigation_type: rr.navigationType,
            navigation_entry_id: Qr
          }
        }
        pushMeasurement(rr, Sr) {
          this.corePushMeasurement({
            type: "web-vitals",
            values: rr
          }, {
            context: Sr
          })
        }
        addIfPresent(rr, Sr, Qr) {
          Qr && (rr[Sr] = Qr)
        }
        addNumberIfDefined(rr, Sr, Qr) {
          void 0 !== Qr && (rr[Sr] = Qr)
        }
      },
      qZ = class extends SQ {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-web-vitals", this.version = QQ
        }
        initialize() {
          this.logDebug("Initializing"), new HZ(this.api.pushMeasurement, this.config.webVitalsInstrumentation).initialize()
        }
      };
    const RZ = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;

    function gZ() {
      let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      for (const Sr of rr)
        if ("traceparent" === Sr.name) {
          if (!RZ.test(Sr.description)) continue;
          const [, rr, Qr] = Sr.description.split("-");
          if (null != rr && null != Qr) return {
            traceId: rr,
            spanId: Qr
          };
          break
        }
    }

    function CZ(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        wallNow: Date.now(),
        monoNow: performance.now()
      };
      const {
        wallNow: Qr,
        monoNow: Zr
      } = Sr;
      return Math.min(Qr, Qr - (Zr - rr))
    }

    function MZ(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      for (const [Qr, Zr] of Object.entries(Sr)) {
        const Sr = rr[Qr];
        return null != Sr && (Xr(Zr) ? Zr.includes(Sr) : Sr === Zr)
      }
      return !0
    }

    function GZ(rr) {
      const {
        connectEnd: Sr,
        connectStart: Qr,
        decodedBodySize: Zr,
        domainLookupEnd: Wr,
        domainLookupStart: ar,
        duration: jr,
        encodedBodySize: Ir,
        fetchStart: fr,
        initiatorType: Er,
        name: pr,
        nextHopProtocol: xr,
        redirectEnd: mr,
        redirectStart: Nr,
        renderBlockingStatus: Ur,
        requestStart: tr,
        responseEnd: hr,
        responseStart: zr,
        responseStatus: Yr,
        secureConnectionStart: nr,
        transferSize: er,
        workerStart: Kr
      } = rr;
      return {
        name: pr,
        httpHost: AZ(pr),
        duration: VZ(jr),
        tcpHandshakeTime: VZ(Sr - Qr),
        dnsLookupTime: VZ(Wr - ar),
        tlsNegotiationTime: VZ(Sr - nr),
        responseStatus: VZ(Yr),
        redirectTime: VZ(mr - Nr),
        requestTime: VZ(zr - tr),
        responseTime: VZ(hr - zr),
        fetchTime: VZ(hr - fr),
        serviceWorkerTime: VZ(Kr > 0 ? fr - Kr : 0),
        decodedBodySize: VZ(Zr),
        encodedBodySize: VZ(Ir),
        cacheHitStatus: function() {
          let rr = "fullLoad";
          0 === er ? Zr > 0 && (rr = "cache") : null != Yr ? 304 === Yr && (rr = "conditionalFetch") : Ir > 0 && er < Ir && (rr = "conditionalFetch");
          return rr
        }(),
        renderBlockingStatus: VZ(Ur),
        protocol: xr,
        initiatorType: Er,
        visibilityState: document.visibilityState,
        ttfb: VZ(zr - tr),
        transferSize: VZ(er)
      }
    }

    function kZ(rr) {
      const {
        activationStart: Sr,
        domComplete: Qr,
        domContentLoadedEventEnd: Zr,
        domContentLoadedEventStart: Wr,
        domInteractive: ar,
        fetchStart: jr,
        loadEventEnd: Ir,
        loadEventStart: fr,
        responseStart: Er,
        type: pr
      } = rr, xr = function() {
        var rr;
        return null != (null === (rr = performance.timing) || void 0 === rr ? void 0 : rr.domLoading) ? performance.timing.domLoading - performance.timeOrigin : null
      }();
      return pS(pS({}, GZ(rr)), {}, {
        pageLoadTime: VZ(Qr - jr),
        documentParsingTime: VZ(xr ? ar - xr : null),
        domProcessingTime: VZ(Qr - ar),
        domContentLoadHandlerTime: VZ(Zr - Wr),
        onLoadTime: VZ(Ir - fr),
        ttfb: VZ(Math.max(Er - (null !== Sr && void 0 !== Sr ? Sr : 0), 0)),
        type: pr
      })
    }

    function AZ(rr) {
      try {
        return new URL(rr).host || gQ
      } catch (Sr) {
        return gQ
      }
    }

    function VZ(rr) {
      return null == rr ? gQ : "number" === typeof rr ? Math.round(rr > 0 ? rr : 0).toString() : rr.toString()
    }
    const iZ = {
      initiatorType: ["xmlhttprequest", "fetch"]
    };

    function wZ(rr, Sr, Qr, Zr, Wr, ar, jr) {
      try {
        var Ir = rr[ar](jr),
          fr = Ir.value
      } catch (rr) {
        return void Qr(rr)
      }
      Ir.done ? Sr(fr) : Promise.resolve(fr).then(Zr, Wr)
    }

    function cZ(rr) {
      return function() {
        var Sr = this,
          Qr = arguments;
        return new Promise((function(Zr, Wr) {
          var ar = rr.apply(Sr, Qr);

          function jr(rr) {
            wZ(ar, Zr, Wr, jr, Ir, "next", rr)
          }

          function Ir(rr) {
            wZ(ar, Zr, Wr, jr, Ir, "throw", rr)
          }
          jr(void 0)
        }))
      }
    }
    const FZ = new YQ;
    var oZ = class extends SQ {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-performance", this.version = QQ
      }
      initialize() {
        var rr = this;
        if (!("PerformanceObserver" in window)) return void this.logDebug("performance observer not supported. Disable performance instrumentation.");
        let Sr = !1;
        const Qr = () => {
          ! function(rr) {
            if ("complete" === document.readyState) rr();
            else {
              const Sr = () => {
                "complete" === document.readyState && (rr(), document.removeEventListener("readystatechange", Sr))
              };
              document.addEventListener("readystatechange", Sr)
            }
          }(cZ((function*() {
            if (Sr) return;
            const Qr = rr.api.pushEvent,
              {
                faroNavigationId: Zr
              } = yield function(rr) {
                let Sr;
                const Qr = new Promise((rr => {
                  Sr = rr
                }));
                return new PerformanceObserver((Qr => {
                  var Zr;
                  const [Wr] = Qr.getEntries();
                  if (null == Wr || Jr(Wr.name)) return;
                  const ar = Wr.toJSON();
                  let jr = gZ(null === ar || void 0 === ar ? void 0 : ar.serverTiming);
                  const Ir = null !== (Zr = rS("com.grafana.faro.lastNavigationId", dr)) && void 0 !== Zr ? Zr : gQ,
                    fr = pS(pS({}, kZ(ar)), {}, {
                      faroNavigationId: zS(),
                      faroPreviousNavigationId: Ir
                    });
                  SS("com.grafana.faro.lastNavigationId", fr.faroNavigationId, dr), rr("faro.performance.navigation", fr, void 0, {
                    spanContext: jr,
                    timestampOverwriteMs: CZ(ar.startTime)
                  }), Sr(fr)
                })).observe({
                  type: "navigation",
                  buffered: !0
                }), Qr
              }(Qr);
            Sr || null == Zr || function(rr, Sr, Qr, Zr) {
              const Wr = Zr.trackResources;
              new PerformanceObserver((Zr => {
                const ar = Zr.getEntries(),
                  jr = {
                    wallNow: Date.now(),
                    monoNow: performance.now()
                  };
                for (const Ir of ar) {
                  if (Jr(Ir.name)) continue;
                  null === Qr || void 0 === Qr || Qr.notify({
                    type: "resource"
                  });
                  const Zr = Ir.toJSON();
                  let ar = gZ(null === Zr || void 0 === Zr ? void 0 : Zr.serverTiming);
                  (null == Wr && MZ(Zr, iZ) || Wr) && Sr("faro.performance.resource", pS(pS({}, GZ(Zr)), {}, {
                    faroNavigationId: rr,
                    faroResourceId: zS()
                  }), void 0, {
                    spanContext: ar,
                    timestampOverwriteMs: CZ(Zr.startTime, jr)
                  })
                }
              })).observe({
                type: "resource",
                buffered: !0
              })
            }(Zr, Qr, FZ, rr.config)
          })))
        };
        this.cancelInitialization = () => {
          Sr = !0, document.removeEventListener("prerenderingchange", Qr)
        }, document.prerendering ? document.addEventListener("prerenderingchange", Qr, {
          once: !0
        }) : Qr()
      }
      destroy() {
        var rr;
        null === (rr = this.cancelInitialization) || void 0 === rr || rr.call(this), this.cancelInitialization = void 0
      }
    };
    const bZ = "data-faro-user-action-name",
      JZ = bZ.replace(/-name$/, "-timeout"),
      DZ = 1e3;

    function dZ(rr) {
      return `data-${(rr.startsWith("data-")?rr.slice(5):rr).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
    }

    function sZ(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
        Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : wS;
      if (void 0 === rr) return Sr;
      let Zr = NaN;
      try {
        Zr = "string" === typeof rr && "" === rr.trim() ? NaN : Number(rr)
      } catch (Wr) {}
      return !Number.isFinite(Zr) || Zr <= 0 ? (Qr(`initialActivityTimeout must be a finite number greater than zero; using ${Sr} ms`), Sr) : Zr > 1e3 ? (Qr(`initialActivityTimeout cannot exceed ${DZ} ms; clamping to the maximum`), DZ) : Zr
    }

    function uZ(rr, Sr, Qr) {
      return void 0 !== rr && window.clearTimeout(rr), window.setTimeout((() => {
        Sr()
      }), Qr)
    }

    function rW(rr) {
      return rr.type === zQ
    }
    let SW, QW;

    function ZW() {
      return SW || (SW = new YQ), QW || (QW = new MutationObserver(((rr, Sr) => {
        SW.notify({
          type: "dom-mutation"
        })
      })), QW.observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0
      })), SW
    }
    const WW = "fetch",
      aW = "xhr";
    let jW, IW, fW, EW, pW = !1;

    function xW() {
      if (jW) return jW;

      function rr(rr) {
        jW.notify({
          type: hQ,
          request: rr
        })
      }

      function Sr(rr) {
        jW.notify({
          type: zQ,
          request: rr
        })
      }
      return jW = new YQ, pW || (! function(rr) {
        let {
          onRequestEnd: Sr,
          onRequestStart: Qr
        } = rr;
        fW || (fW = window.fetch);
        window.fetch = function() {
          var rr, Zr;
          const Wr = null !== (rr = Dr(arguments[0])) && void 0 !== rr ? rr : "",
            ar = Jr(Wr),
            jr = (null !== (Zr = arguments[1]) && void 0 !== Zr ? Zr : {}).method,
            Ir = zS();
          return ar || Qr({
            url: Wr,
            method: jr,
            requestId: Ir,
            apiType: WW
          }), fW.apply(this, arguments).then((rr => (ar || Sr({
            url: Wr,
            method: jr,
            requestId: Ir,
            apiType: WW
          }), rr))).catch((rr => {
            throw ar || Sr({
              url: Wr,
              method: jr,
              requestId: Ir,
              apiType: WW
            }), rr
          }))
        }
      }({
        onRequestStart: rr,
        onRequestEnd: Sr
      }), function(rr) {
        let {
          onRequestStart: Sr,
          onRequestEnd: Qr
        } = rr;
        IW || (IW = XMLHttpRequest.prototype.open);
        XMLHttpRequest.prototype.open = function() {
          const rr = arguments[1],
            Zr = Jr(rr),
            Wr = arguments[0],
            ar = zS();
          this.addEventListener("loadstart", (function() {
            Zr || Sr({
              url: rr,
              method: Wr,
              requestId: ar,
              apiType: aW
            })
          })), this.addEventListener("load", (function() {
            Zr || Qr({
              url: rr,
              method: Wr,
              requestId: ar,
              apiType: aW
            })
          })), this.addEventListener("error", (function() {
            Zr || Qr({
              url: rr,
              method: Wr,
              requestId: ar,
              apiType: aW
            })
          })), this.addEventListener("abort", (function() {
            Zr || Qr({
              url: rr,
              method: Wr,
              requestId: ar,
              apiType: aW
            })
          })), IW.apply(this, arguments)
        }
      }({
        onRequestStart: rr,
        onRequestEnd: Sr
      }), pW = !0), jW
    }
    let mW, NW = !1;
    let UW = function(rr) {
      return rr[rr.Started = 0] = "Started", rr[rr.Halted = 1] = "Halted", rr[rr.Cancelled = 2] = "Cancelled", rr[rr.Ended = 3] = "Ended", rr
    }({});
    var tW = class {
      constructor(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        this.userAction = rr, this.logDebug = Sr, this.initialActivityTimeout = Qr, this.http = xW(), this.dom = ZW(), this.perf = (EW || (EW = new YQ), NW || (mW = FZ.subscribe((rr => {
          "resource" === rr.type && EW.notify({
            type: "resource-entry"
          })
        })), NW = !0), EW), this.isValid = !1, this.runningRequests = new Map
      }
      attach() {
        this.allMonitorsSub = (new YQ).merge(this.http, this.dom, this.perf).takeWhile((() => [UW.Started, UW.Halted].includes(this.userAction.getState()))).filter((rr => !!(this.userAction.getState() !== UW.Halted || rW(rr) && this.runningRequests.has(rr.request.requestId)))).subscribe((rr => {
          (function(rr) {
            return rr.type === hQ
          })(rr) && this.runningRequests.set(rr.request.requestId, rr.request), rW(rr) && this.runningRequests.delete(rr.request.requestId), rW(rr) ? this.userAction.getState() === UW.Halted && 0 === this.runningRequests.size && this.endAction() : (this.isValid || (this.isValid = !0, this.clearTimer(this.startupTid)), this.scheduleFollowUp())
        })), this.stateSub = this.userAction.filter((rr => [UW.Ended, UW.Cancelled].includes(rr))).first().subscribe((() => this.cleanup())), this.startupTid = uZ(this.startupTid, (() => {
          this.logDebug("User action not sent; no DOM, resource, or HTTP activity:", this.userAction.name), this.cancelAction()
        }), this.initialActivityTimeout)
      }
      scheduleFollowUp() {
        this.clearTimer(this.followUpTid), this.followUpTid = window.setTimeout((() => {
          this.userAction.getState() === UW.Started && this.runningRequests.size > 0 ? this.haltAction() : this.isValid ? this.endAction() : this.cancelAction()
        }), 100)
      }
      haltAction() {
        this.userAction.getState() === UW.Started && (this.userAction.halt(), this.startHaltTimeout())
      }
      startHaltTimeout() {
        this.clearTimer(this.haltTid), this.haltTid = uZ(this.haltTid, (() => {
          this.userAction.getState() === UW.Halted && this.endAction()
        }), 1e4)
      }
      endAction() {
        this.userAction.end(), this.cleanup()
      }
      cancelAction() {
        this.userAction.cancel(), this.cleanup()
      }
      cleanup() {
        var rr, Sr;
        this.clearTimer(this.startupTid), this.clearTimer(this.followUpTid), this.clearTimer(this.haltTid), null === (rr = this.allMonitorsSub) || void 0 === rr || rr.unsubscribe(), null === (Sr = this.stateSub) || void 0 === Sr || Sr.unsubscribe(), this.allMonitorsSub = void 0, this.stateSub = void 0, this.runningRequests.clear()
      }
      clearTimer(rr) {
        void 0 !== rr && window.clearTimeout(rr)
      }
    };

    function hW(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wS;
      var Qr;
      const {
        api: Zr,
        config: Wr,
        internalLogger: ar
      } = rr, jr = sZ(null === (Qr = Wr.userActionsInstrumentation) || void 0 === Qr ? void 0 : Qr.initialActivityTimeout, 100, Sr);
      return {
        processUserEvent: function(rr) {
          var Sr, Qr;
          const ar = null !== (Sr = null === (Qr = Wr.userActionsInstrumentation) || void 0 === Qr ? void 0 : Qr.dataAttributeName) && void 0 !== Sr ? Sr : bZ,
            jr = rr.target;
          if (!(jr instanceof Element)) return;
          const Ir = function(rr, Sr) {
              let Qr = rr;
              for (; Qr;) {
                if (Qr.hasAttribute(Sr)) return Qr;
                Qr = Qr.parentElement
              }
              return null
            }(jr, dZ(ar)),
            fr = function(rr, Sr) {
              if (!rr) return;
              const Qr = function(rr) {
                  return dZ(rr).slice(5).replace(/-(.)/g, ((rr, Sr) => Sr.toUpperCase()))
                }(Sr),
                Zr = rr.dataset;
              for (const Wr in Zr)
                if (Wr === Qr) return Zr[Wr]
            }(Ir, ar);
          if (!Ir || !fr) return;
          const Er = function(rr, Sr) {
            const Qr = rr.getAttribute(function(rr) {
              const Sr = dZ(rr);
              return Sr.endsWith("-name") ? `${Sr.slice(0,-5)}-timeout` : `${Sr}-timeout`
            }(Sr));
            return null === Qr ? void 0 : Number(Qr)
          }(Ir, ar);
          Zr.startUserAction(fr, {}, {
            triggerName: rr.type,
            initialActivityTimeout: Er
          })
        },
        processUserActionStarted: function(rr, Qr) {
          const Zr = rr,
            Wr = sZ(Qr, jr, Sr);
          new tW(Zr, ar.debug, Wr).attach()
        }
      }
    }
    const zW = "user_action_start",
      YW = {
        Normal: "normal",
        Critical: "critical"
      };
    var nW = class {
        constructor() {
          this.buffer = []
        }
        addItem(rr) {
          this.buffer.push(rr)
        }
        flushBuffer(rr) {
          if (lr(rr))
            for (const Sr of this.buffer) rr(Sr);
          this.buffer.length = 0
        }
        size() {
          return this.buffer.length
        }
      },
      eW = class extends YQ {
        constructor(rr) {
          let {
            name: Sr,
            parentId: Qr,
            trigger: Zr,
            transports: Wr,
            attributes: ar,
            trackUserActionsExcludeItem: jr,
            importance: Ir = YW.Normal,
            pushEvent: fr
          } = rr;
          super(), this.name = Sr, this.attributes = ar, this.id = zS(), this.trigger = Zr, this.parentId = null !== Qr && void 0 !== Qr ? Qr : this.id, this.trackUserActionsExcludeItem = jr, this.importance = Ir, this._pushEvent = fr, this._itemBuffer = new nW, this._transports = Wr, this._state = 0, this._start()
        }
        addItem(rr) {
          return 0 === this._state && (this._itemBuffer.addItem(rr), !0)
        }
        _start() {
          this._state = 0, 0 === this._state && (this.startTime = mS(), this._startTimeMono = NS())
        }
        halt() {
          0 === this._state && (this._state = 1, this.notify(this._state))
        }
        cancel() {
          0 === this._state && this._itemBuffer.flushBuffer((rr => {
            this._transports.execute(rr)
          })), this._state = 2, this.notify(this._state)
        }
        end() {
          if (2 === this._state) return;
          const rr = mS(),
            Sr = NS() - this._startTimeMono;
          this._state = 3, this._itemBuffer.flushBuffer((rr => {
            if (function(rr, Sr) {
                return (null === Sr || void 0 === Sr ? void 0 : Sr(rr)) || "measurement" === rr.type && "web-vitals" === rr.payload.type
              }(rr, this.trackUserActionsExcludeItem)) return void this._transports.execute(rr);
            const Sr = sS(sS({}, rr), {}, {
              payload: sS(sS({}, rr.payload), {}, {
                action: {
                  parentId: this.id,
                  name: this.name
                }
              })
            });
            this._transports.execute(Sr)
          })), this._state = 3, this.notify(this._state), this._pushEvent("faro.user.action", sS({
            userActionName: this.name,
            userActionStartTime: this.startTime.toString(),
            userActionEndTime: rr.toString(),
            userActionDuration: Sr.toString(),
            userActionTrigger: this.trigger,
            userActionImportance: this.importance
          }, CS(this.attributes)), void 0, {
            timestampOverwriteMs: this.startTime,
            customPayloadTransformer: rr => (rr.action = {
              id: this.id,
              name: this.name
            }, rr)
          })
        }
        getState() {
          return this._state
        }
      };
    const KW = new YQ;

    function yW(rr, Sr) {
      return !!rr && (0 === (null === rr || void 0 === rr ? void 0 : rr.getState()) && (rr.addItem(Sr), !0))
    }
    var BW = class extends SQ {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-user-action", this.version = QQ
        }
        initialize() {
          const {
            processUserEvent: rr,
            processUserActionStarted: Sr
          } = hW(tr, (rr => this.logWarn(rr)));
          this._processUserEvent = rr, this._processKeydown = Sr => {
            [" ", "Enter"].includes(Sr.key) && rr(Sr)
          }, window.addEventListener("pointerdown", this._processUserEvent), window.addEventListener("keydown", this._processKeydown), this._userActionSub = KW.subscribe((rr => {
            let {
              type: Qr,
              userAction: Zr,
              initialActivityTimeout: Wr
            } = rr;
            "user_action_start" === Qr && Sr(Zr, Wr)
          }))
        }
        destroy() {
          var rr;
          this._processUserEvent && window.removeEventListener("pointerdown", this._processUserEvent), this._processKeydown && window.removeEventListener("keydown", this._processKeydown), null === (rr = this._userActionSub) || void 0 === rr || rr.unsubscribe()
        }
      },
      TW = class extends SQ {
        constructor() {
          super(), this.name = "@grafana/faro-web-sdk:instrumentation-csp", this.version = QQ, this.boundSecuritypolicyviolationHandler = this.securitypolicyviolationHandler.bind(this)
        }
        initialize() {
          document.addEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        destroy() {
          document.removeEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        securitypolicyviolationHandler(rr) {
          const Sr = {
            blockedURI: rr.blockedURI,
            columnNumber: rr.columnNumber,
            disposition: rr.disposition,
            documentURI: rr.documentURI,
            effectiveDirective: rr.effectiveDirective,
            lineNumber: rr.lineNumber,
            originalPolicy: rr.originalPolicy,
            referrer: rr.referrer,
            sample: rr.sample,
            sourceFile: rr.sourceFile,
            statusCode: rr.statusCode,
            violatedDirective: rr.violatedDirective
          };
          this.api.pushEvent("securitypolicyviolation", CS(Sr))
        }
      };
    var vW = class extends YQ {
      constructor(rr, Sr) {
        var Qr, Zr, Wr, ar;
        super(), this._tracking = !1, this.eventsObservable = rr, this._options = {
          inactivityMs: null !== (Qr = null === Sr || void 0 === Sr ? void 0 : Sr.inactivityMs) && void 0 !== Qr ? Qr : 100,
          drainTimeoutMs: null !== (Zr = null === Sr || void 0 === Sr ? void 0 : Sr.drainTimeoutMs) && void 0 !== Zr ? Zr : 1e4,
          isOperationStart: null !== (Wr = null === Sr || void 0 === Sr ? void 0 : Sr.isOperationStart) && void 0 !== Wr ? Wr : () => {},
          isOperationEnd: null !== (ar = null === Sr || void 0 === Sr ? void 0 : Sr.isOperationEnd) && void 0 !== ar ? ar : () => {}
        }, this._initialize()
      }
      _initialize() {
        this.eventsObservable.filter((() => this._tracking)).subscribe((rr => {
          var Sr;
          this._lastEventTime = NS(), null === (Sr = this._currentEvents) || void 0 === Sr || Sr.push(rr);
          const Qr = this._options.isOperationStart(rr);
          var Zr;
          Qr && (null === (Zr = this._activeOperations) || void 0 === Zr || Zr.set(Qr, !0));
          const Wr = this._options.isOperationEnd(rr);
          var ar;
          Wr && (null === (ar = this._activeOperations) || void 0 === ar || ar.delete(Wr));
          this._scheduleInactivityCheck()
        }))
      }
      startTracking() {
        this._tracking || (this._tracking = !0, this._startTime = NS(), this._lastEventTime = this._startTime, this.notify({
          message: "tracking-started"
        }), this._currentEvents = [], this._activeOperations = new Map, this._scheduleInactivityCheck())
      }
      stopTracking() {
        let rr;
        this._tracking = !1, this._clearTimer(this._inactivityTid), this._clearTimer(this._drainTid), rr = this.hasActiveOperations() ? NS() - this._startTime : this._lastEventTime ? this._lastEventTime - this._startTime : 0, this.notify({
          message: "tracking-ended",
          events: this._currentEvents,
          duration: rr
        })
      }
      _scheduleInactivityCheck() {
        this._inactivityTid = OW(this._inactivityTid, (() => {
          this.hasActiveOperations() ? this._startDrainTimeout() : this.stopTracking()
        }), this._options.inactivityMs)
      }
      _startDrainTimeout() {
        this._drainTid = OW(this._drainTid, (() => {
          this.stopTracking()
        }), this._options.drainTimeoutMs)
      }
      hasActiveOperations() {
        return !!this._activeOperations && this._activeOperations.size > 0
      }
      _clearTimer(rr) {
        rr && clearTimeout(rr)
      }
    };

    function OW(rr, Sr, Qr) {
      return rr && clearTimeout(rr), rr = setTimeout((() => {
        Sr()
      }), Qr)
    }
    let LW;
    const lW = new Set,
      XW = new Map;
    let PW, HW, qW, RW, gW, CW, MW, GW, kW = !1;
    var AW = class extends SQ {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-navigation", this.version = QQ
      }
      initialize() {
        const rr = xW(),
          Sr = ZW(),
          Qr = function() {
            function rr(rr, Sr) {
              const Qr = null !== Sr && void 0 !== Sr ? Sr : location.href;
              Qr !== HW && (PW.notify({
                type: "url-change",
                from: HW,
                to: Qr,
                trigger: rr
              }), HW = Qr)
            }
            if (PW || (PW = new YQ, HW = location.href), !kW)
              if ("navigation" in window && "NavigateEvent" in window) {
                MW = Sr => {
                  try {
                    const Qr = null === Sr || void 0 === Sr ? void 0 : Sr.destination;
                    (null === Qr || void 0 === Qr ? void 0 : Qr.sameDocument) && "string" === typeof Qr.url && rr("navigate", Qr.url)
                  } catch (Qr) {}
                }, window.navigation.addEventListener("navigate", MW);
                const Sr = window.NavigateEvent;
                Sr && Sr.prototype && "function" === typeof Sr.prototype.intercept && (GW || (GW = Sr.prototype.intercept), Sr.prototype.intercept = function(Sr) {
                  try {
                    const Sr = !!(null === this || void 0 === this ? void 0 : this.canIntercept),
                      Qr = null === this || void 0 === this ? void 0 : this.destination;
                    Sr && Qr && !1 === Qr.sameDocument && "string" === typeof Qr.url && rr("navigate-intercept", Qr.url)
                  } catch (Qr) {}
                  return GW.call(this, Sr)
                }), kW = !0
              } else qW || (qW = window.history.pushState), window.history.pushState = function() {
                for (var Sr = arguments.length, Qr = new Array(Sr), Zr = 0; Zr < Sr; Zr++) Qr[Zr] = arguments[Zr];
                const Wr = qW.apply(window.history, Qr);
                return rr("pushState"), Wr
              }, RW || (RW = window.history.replaceState), window.history.replaceState = function() {
                for (var Sr = arguments.length, Qr = new Array(Sr), Zr = 0; Zr < Sr; Zr++) Qr[Zr] = arguments[Zr];
                const Wr = RW.apply(window.history, Qr);
                return rr("replaceState"), Wr
              }, gW = () => rr("popstate"), CW = () => rr("hashchange"), window.addEventListener("popstate", gW), window.addEventListener("hashchange", CW), kW = !0;
            return PW
          }(),
          Zr = (Wr = ["pointerdown", "keydown"], LW || (LW = new YQ), Wr.forEach((rr => {
            if (!lW.has(rr)) {
              const Sr = () => {
                LW.notify({
                  type: "interaction",
                  name: rr
                })
              };
              window.addEventListener(rr, Sr), lW.add(rr), XW.set(rr, Sr)
            }
          })), LW);
        var Wr;
        const ar = new vW((new YQ).merge(rr, Sr, Qr), {
          inactivityMs: 100,
          drainTimeoutMs: 1e4,
          isOperationStart: rr => function(rr) {
            return rr.type === hQ
          }(rr) ? rr.request.requestId : void 0,
          isOperationEnd: rr => function(rr) {
            return rr.type === zQ
          }(rr) ? rr.request.requestId : void 0
        });
        ar.filter((rr => "tracking-ended" === rr.message)).subscribe((rr => {
          var Sr, Qr;
          if ((null === (Sr = rr.events) || void 0 === Sr ? void 0 : Sr.some((rr => "url-change" === rr.type))) && (null === (Qr = rr.events) || void 0 === Qr ? void 0 : Qr.some((rr => "dom-mutation" === rr.type)))) {
            var Zr;
            const Sr = null === (Zr = rr.events) || void 0 === Zr ? void 0 : Zr.find((rr => "url-change" === rr.type));
            tr.api.pushEvent("faro.navigation", {
              fromUrl: null === Sr || void 0 === Sr ? void 0 : Sr.from,
              toUrl: null === Sr || void 0 === Sr ? void 0 : Sr.to,
              sameDocument: String(!0),
              duration: rr.duration
            })
          }
        })), Zr.subscribe((() => {
          ar.startTracking()
        }))
      }
    };

    function VW() {
      let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const Sr = [new BW, new RQ, new qZ, new ZQ, new CQ, new AW];
      return !1 !== rr.enablePerformanceInstrumentation && Sr.unshift(new oZ), !1 !== rr.enableContentSecurityPolicyInstrumentation && Sr.push(new TW), !1 !== rr.captureConsole && Sr.push(new HQ), Sr
    }
    var iW = Qr(7643);
    let wW, cW;

    function FW() {
      const rr = "undefined" !== typeof navigator ? navigator.userAgent : "";
      return wW === rr && cW || (cW = new iW.UAParser(rr).getResult(), wW = rr), cW
    }
    const oW = () => {
        const {
          browser: rr,
          os: Sr,
          ua: Qr
        } = FW(), {
          name: Zr,
          version: Wr
        } = rr, {
          name: ar,
          version: jr
        } = Sr, Ir = navigator.language, fr = Qr.includes("Mobi"), Er = function() {
          if (!Zr || !Wr) return;
          if ("userAgentData" in navigator && navigator.userAgentData) return navigator.userAgentData.brands
        }();
        return {
          browser: {
            name: null !== Zr && void 0 !== Zr ? Zr : gQ,
            version: null !== Wr && void 0 !== Wr ? Wr : gQ,
            os: `${null!==ar&&void 0!==ar?ar:gQ} ${null!==jr&&void 0!==jr?jr:gQ}`,
            userAgent: null !== Qr && void 0 !== Qr ? Qr : gQ,
            language: null !== Ir && void 0 !== Ir ? Ir : gQ,
            mobile: fr,
            brands: null !== Er && void 0 !== Er ? Er : gQ,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`
          }
        }
      },
      bW = () => {
        const {
          name: rr,
          version: Sr
        } = FW().os;
        if (!rr && !Sr) return {};
        const Qr = {};
        return rr && (Qr.name = rr), Sr && (Qr.version = Sr), {
          os: Qr
        }
      };

    function JW(rr) {
      var Sr, Qr, Zr;
      return {
        id: null !== (Sr = null === (Qr = tr.config) || void 0 === Qr || null === (Qr = Qr.sessionTracking) || void 0 === Qr || null === (Zr = Qr.generateSessionId) || void 0 === Zr ? void 0 : Zr.call(Qr)) && void 0 !== Sr ? Sr : zS(),
        attributes: rr
      }
    }
    const DW = () => ({
      sdk: {
        name: "faro-web",
        version: QQ
      }
    });
    var dW = class extends rQ {
      isBatched() {
        return !1
      }
      getIgnoreUrls() {
        return []
      }
    };
    let sW = function(rr) {
      return rr.EXCEPTION = "exception", rr.LOG = "log", rr.MEASUREMENT = "measurement", rr.TRACE = "trace", rr.EVENT = "event", rr
    }({});
    const uW = {
      exception: "exceptions",
      log: "logs",
      measurement: "measurements",
      trace: "traces",
      event: "events"
    };

    function ra(rr, Sr) {
      var Qr, Zr;
      if (void 0 === Sr) return rr;
      if (void 0 === rr) return {
        resourceSpans: Sr
      };
      const Wr = null === (Qr = rr.resourceSpans) || void 0 === Qr ? void 0 : Qr[0];
      if (void 0 === Wr) return rr;
      const ar = (null === Wr || void 0 === Wr ? void 0 : Wr.scopeSpans) || [],
        jr = (null === Sr || void 0 === Sr || null === (Zr = Sr[0]) || void 0 === Zr ? void 0 : Zr.scopeSpans) || [];
      return sS(sS({}, rr), {}, {
        resourceSpans: [sS(sS({}, Wr), {}, {
          scopeSpans: [...ar, ...jr]
        })]
      })
    }

    function Sa(rr) {
      let Sr = {
        meta: {}
      };
      return void 0 !== rr[0] && (Sr.meta = rr[0].meta), rr.forEach((rr => {
        switch (rr.type) {
          case "log":
          case "event":
          case "exception":
          case "measurement": {
            const Qr = uW[rr.type],
              Zr = Sr[Qr];
            Sr = sS(sS({}, Sr), {}, {
              [Qr]: void 0 === Zr ? [rr.payload] : [...Zr, rr.payload]
            });
            break
          }
          case "trace":
            Sr = sS(sS({}, Sr), {}, {
              traces: ra(Sr.traces, rr.payload.resourceSpans)
            })
        }
      })), Sr
    }
    var Qa = class extends dW {
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(), this.options = rr, this.name = "@grafana/faro-web-sdk:transport-console", this.version = QQ
      }
      send(rr) {
        var Sr;
        return this.unpatchedConsole[null !== (Sr = this.options.level) && void 0 !== Sr ? Sr : nQ.DEBUG]("New event", Sa([rr]))
      }
    };
    const Za = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), ([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      Wa = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-9]{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      aa = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:(?:([0-9]{2}))|(?: ([0-9]))) ([0-9]{2}):([0-9]{2}):([0-9]{2}) ([0-9]{4})$/,
      ja = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      Ia = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      fa = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function Ea(rr) {
      let {
        weekday: Sr,
        day: Qr,
        month: Zr,
        year: Wr,
        hour: ar,
        minute: jr,
        second: Ir
      } = rr;
      if (Wr < 1900 || Qr < 1 || ar > 23 || jr > 59 || Ir > 60) return;
      const fr = 60 === Ir,
        Er = new Date(0);
      return Er.setUTCFullYear(Wr, Zr, Qr), Er.setUTCHours(ar, jr, fr ? 59 : Ir, 0), Er.getUTCDay() === Sr && Er.getUTCDate() === Qr && Er.getUTCMonth() === Zr && Er.getUTCFullYear() === Wr && Er.getUTCHours() === ar && Er.getUTCMinutes() === jr && Er.getUTCSeconds() === (fr ? 59 : Ir) ? Er.getTime() + (fr ? 1e3 : 0) : void 0
    }
    var pa = class {
      constructor(rr) {
        this.options = rr, this.admitted = 0, this.inProgress = 0, this.sequence = 0, this.nextSendAt = 0, this.attemptQueue = [], this.waiting = [], this.unloading = !1
      }
      reserve() {
        var rr = this;
        if (this.admitted >= this.options.bufferSize) return;
        this.admitted++;
        const Sr = this.sequence++;
        let Qr = !1;
        return {
          deliver: function() {
            var Qr = cZ((function*(Qr) {
              const Zr = rr.options.getNow();
              let Wr, ar = 0;
              for (;;) {
                var jr, Ir, fr;
                const Er = rr.options.retry.maxAttempts - ar,
                  pr = yield rr.runAttempt((() => Qr(Er, rr.unloading)), ar > 0);
                if (ar += pr.attemptsMade, "success" === pr.kind) return {
                  kind: "success",
                  attempts: ar,
                  elapsedTimeMs: rr.options.getNow() - Zr
                };
                if (Wr = pr.failure, "terminal" === pr.kind || rr.unloading) return {
                  kind: "terminal",
                  attempts: ar,
                  elapsedTimeMs: rr.options.getNow() - Zr,
                  failure: Wr
                };
                if (ar >= rr.options.retry.maxAttempts) return {
                  kind: "terminal",
                  attempts: ar,
                  elapsedTimeMs: rr.options.getNow() - Zr,
                  failure: Wr,
                  reason: "retries-exhausted"
                };
                if (null != pr.retryAfterMs && pr.retryAfterMs > rr.options.retry.maxBackoffMs) return {
                  kind: "terminal",
                  attempts: ar,
                  elapsedTimeMs: rr.options.getNow() - Zr,
                  failure: Wr,
                  reason: "retry-after-too-long"
                };
                const xr = Math.min(null !== (jr = pr.retryAfterMs) && void 0 !== jr ? jr : rr.options.retry.initialBackoffMs * Math.pow(rr.options.retry.backoffMultiplier, ar - 1), rr.options.retry.maxBackoffMs);
                if (null === (Ir = (fr = rr.options).onRetry) || void 0 === Ir || Ir.call(fr, xr, ar + 1), yield rr.waitForTurn(Sr, xr)) {
                  const Sr = rr.options.retry.maxAttempts - ar,
                    Wr = yield rr.runAttempt((() => Qr(Sr, !0)));
                  return ar += Wr.attemptsMade, {
                    kind: "success" === Wr.kind ? "success" : "terminal",
                    attempts: ar,
                    elapsedTimeMs: rr.options.getNow() - Zr,
                    failure: "success" === Wr.kind ? void 0 : Wr.failure
                  }
                }
              }
            }));
            return function(rr) {
              return Qr.apply(this, arguments)
            }
          }(),
          release: () => {
            Qr || (Qr = !0, this.admitted--)
          }
        }
      }
      flush() {
        this.unloading = !0, this.nextSendAt = 0;
        const rr = this.waiting.splice(0);
        null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0);
        for (const Sr of rr) Sr.resolve(!0);
        this.runNextAttempt()
      }
      resume() {
        this.unloading = !1
      }
      runAttempt(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Promise(((Qr, Zr) => {
          this.attemptQueue.push({
            run: () => {
              this.inProgress++;
              const Sr = () => {
                this.inProgress--, this.runNextAttempt()
              };
              rr().then((rr => {
                Sr(), Qr(rr)
              }), (rr => {
                Sr(), Zr(rr)
              }))
            },
            isRedelivery: Sr
          }), this.runNextAttempt()
        }))
      }
      runNextAttempt() {
        for (null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0); this.inProgress < this.options.concurrency && this.attemptQueue.length > 0;) {
          const rr = this.options.getNow(),
            Sr = this.attemptQueue.findIndex((Sr => {
              let {
                isRedelivery: Qr
              } = Sr;
              return this.unloading || !Qr || rr >= this.nextSendAt
            }));
          if (Sr < 0) return void(this.redeliveryTimer = setTimeout((() => {
            this.redeliveryTimer = void 0, this.runNextAttempt()
          }), Math.max(0, this.nextSendAt - rr)));
          const [Qr] = this.attemptQueue.splice(Sr, 1);
          Qr.isRedelivery && !this.unloading && (this.nextSendAt = rr + 1), Qr.run()
        }
      }
      waitForTurn(rr, Sr) {
        const Qr = Math.min(Sr * (1 + .2 * this.options.getRandom()), this.options.retry.maxBackoffMs);
        return new Promise((Sr => {
          this.waiting.push({
            sequence: rr,
            readyAt: this.options.getNow() + Qr,
            resolve: Sr
          }), this.waiting.sort(((rr, Sr) => rr.readyAt === Sr.readyAt ? rr.sequence - Sr.sequence : rr.readyAt - Sr.readyAt)), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0), this.scheduleNext()
        }))
      }
      scheduleNext() {
        if (null != this.waitingTimer || 0 === this.waiting.length) return;
        const rr = this.waiting[0],
          Sr = rr.readyAt;
        this.waitingTimer = setTimeout((() => {
          this.waitingTimer = void 0;
          const Sr = this.waiting.indexOf(rr);
          Sr >= 0 && this.waiting.splice(Sr, 1), rr.resolve(!1), this.scheduleNext()
        }), Math.max(0, Sr - this.options.getNow()))
      }
    };

    function xa(rr, Sr) {
      if (null == rr) return {};
      var Qr, Zr, Wr = function(rr, Sr) {
        if (null == rr) return {};
        var Qr = {};
        for (var Zr in rr)
          if ({}.hasOwnProperty.call(rr, Zr)) {
            if (Sr.includes(Zr)) continue;
            Qr[Zr] = rr[Zr]
          } return Qr
      }(rr, Sr);
      if (Object.getOwnPropertySymbols) {
        var ar = Object.getOwnPropertySymbols(rr);
        for (Zr = 0; Zr < ar.length; Zr++) Qr = ar[Zr], Sr.includes(Qr) || {}.propertyIsEnumerable.call(rr, Qr) && (Wr[Qr] = rr[Qr])
      }
      return Wr
    }

    function ma(rr) {
      const {
        size: Sr,
        concurrency: Qr
      } = rr, Zr = [];
      let Wr = 0;
      const ar = () => {
        if (Wr < Qr && Zr.length) {
          const {
            producer: rr,
            resolve: Sr,
            reject: Qr
          } = Zr.shift();
          Wr++, rr().then((rr => {
            Wr--, ar(), Sr(rr)
          }), (rr => {
            Wr--, ar(), Qr(rr)
          }))
        }
      };
      return {
        add: rr => {
          if (Zr.length + Wr >= Sr) throw new Error("Task buffer full");
          return new Promise(((Sr, Qr) => {
            Zr.push({
              producer: rr,
              resolve: Sr,
              reject: Qr
            }), ar()
          }))
        }
      }
    }
    const Na = ["headers"],
      Ua = ["keepalive", "signal"],
      ta = new Set([408, 425, 429, 500, 502, 503, 504]),
      ha = new Set([429, 503]);
    let za = 0,
      Ya = 0;
    var na = class extends Error {};
    var ea = class extends dW {
      constructor(rr) {
        var Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er, pr, xr, mr, Nr, Ur, tr, hr, zr;
        super(), this.options = rr, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = QQ, this.pendingCustomSends = 0, this.getNow = null !== (Sr = rr.getNow) && void 0 !== Sr ? Sr : Date.now, this.requestTimeoutMs = null !== (Qr = rr.requestTimeoutMs) && void 0 !== Qr ? Qr : 1e4, this.compressionEnabled = null !== (Zr = rr.requestCompression) && void 0 !== Zr && Zr && "undefined" !== typeof CompressionStream, rr.requestCompression && !this.compressionEnabled && this.logWarn("requestCompression is enabled but CompressionStream is not available. Falling back to uncompressed."), this.requestTimeoutMs > 0 && "undefined" === typeof AbortController && this.logWarn("AbortController is unavailable. Requests will be sent without the configured timeout."), this.deliveryQueue = new pa({
          bufferSize: null !== (Wr = rr.bufferSize) && void 0 !== Wr ? Wr : 30,
          concurrency: null !== (ar = rr.concurrency) && void 0 !== ar ? ar : 5,
          retry: {
            maxAttempts: null !== (jr = null === (Ir = rr.retry) || void 0 === Ir ? void 0 : Ir.maxAttempts) && void 0 !== jr ? jr : 3,
            initialBackoffMs: null !== (fr = null !== (Er = null === (pr = rr.retry) || void 0 === pr ? void 0 : pr.initialBackoffMs) && void 0 !== Er ? Er : rr.defaultRateLimitBackoffMs) && void 0 !== fr ? fr : 1e3,
            maxBackoffMs: null !== (xr = null === (mr = rr.retry) || void 0 === mr ? void 0 : mr.maxBackoffMs) && void 0 !== xr ? xr : 3e4,
            backoffMultiplier: null !== (Nr = null === (Ur = rr.retry) || void 0 === Ur ? void 0 : Ur.backoffMultiplier) && void 0 !== Nr ? Nr : 2
          },
          getNow: this.getNow,
          getRandom: null !== (tr = rr.getRandom) && void 0 !== tr ? tr : Math.random,
          onRetry: (rr, Sr) => {
            this.logDebug(`Retrying failed request after ${rr}ms. Attempt ${Sr}.`)
          }
        }), this.customPromiseBuffer = ma({
          size: null !== (hr = rr.bufferSize) && void 0 !== hr ? hr : 30,
          concurrency: null !== (zr = rr.concurrency) && void 0 !== zr ? zr : 5
        }), this.defaultPromiseBuffer = {
          add: rr => {
            if (this.promiseBuffer !== this.defaultPromiseBuffer || this.promiseBuffer.add !== this.defaultBufferAdd || this.pendingCustomSends > 0) return this.customPromiseBuffer.add(rr);
            const Sr = this.deliveryQueue.reserve();
            if (!Sr) throw new Error("Task buffer full");
            return this.runBufferedTask(Sr, rr)
          }
        }, this.defaultBufferAdd = this.defaultPromiseBuffer.add, this.promiseBuffer = this.defaultPromiseBuffer, "undefined" !== typeof window && (window.addEventListener("pagehide", (() => this.deliveryQueue.flush())), window.addEventListener("pageshow", (rr => {
          rr.persisted && this.deliveryQueue.resume()
        })))
      }
      send(rr) {
        var Sr = this;
        return cZ((function*() {
          const Qr = Sr.promiseBuffer;
          if (Qr !== Sr.defaultPromiseBuffer || Qr.add !== Sr.defaultBufferAdd) {
            Sr.pendingCustomSends++;
            try {
              yield Qr.add((() => Sr.deliver(rr)))
            } catch (Zr) {
              Sr.logError("Permanent delivery failure", {
                error: Zr,
                attempts: 0,
                elapsedTimeMs: 0
              })
            } finally {
              Sr.pendingCustomSends--
            }
          } else yield Sr.deliver(rr)
        }))()
      }
      runBufferedTask(rr, Sr) {
        return cZ((function*() {
          let Qr;
          try {
            return yield rr.deliver(cZ((function*() {
              return Qr = yield Sr(), {
                kind: "success",
                attemptsMade: 1
              }
            }))), Qr
          } finally {
            rr.release()
          }
        }))()
      }
      deliver(rr) {
        var Sr = this;
        return cZ((function*() {
          const Qr = Sr.deliveryQueue.reserve();
          if (Qr) try {
            const Zr = yield Sr.prepareRequest(rr), Wr = yield Qr.deliver(((rr, Qr) => Sr.performAttempt(Zr, rr, Qr)));
            "terminal" === Wr.kind && Sr.logError("retries-exhausted" === Wr.reason ? "Delivery retries exhausted" : "Permanent delivery failure", pS(pS({}, Wr.failure), {}, {
              reason: Wr.reason,
              attempts: Wr.attempts,
              elapsedTimeMs: Wr.elapsedTimeMs
            }))
          } catch (Zr) {
            Sr.logError("Permanent delivery failure", {
              error: Zr,
              attempts: 0,
              elapsedTimeMs: 0
            })
          } finally {
            Qr.release()
          } else Sr.logError("Permanent delivery failure", {
            error: "Reliable delivery queue is full",
            attempts: 0,
            elapsedTimeMs: 0
          })
        }))()
      }
      getIgnoreUrls() {
        var rr;
        return [this.options.url].concat(null !== (rr = this.config.ignoreUrls) && void 0 !== rr ? rr : [])
      }
      isBatched() {
        return !0
      }
      prepareRequest(rr) {
        var Sr = this;
        return cZ((function*() {
          var Qr, Zr;
          const Wr = Sa(rr),
            ar = null === (Qr = Wr.meta.session) || void 0 === Qr ? void 0 : Qr.id,
            jr = JSON.stringify(Wr),
            Ir = null !== (Zr = Sr.options.requestOptions) && void 0 !== Zr ? Zr : {},
            {
              headers: fr = {}
            } = Ir,
            Er = xa(Ir, Na),
            {
              keepalive: pr,
              signal: xr
            } = Er,
            mr = xa(Er, Ua),
            Nr = {};
          for (const [rr, Sr] of Object.entries(fr)) Nr[rr] = "function" === typeof Sr ? yield Sr(): Sr;
          let Ur = jr,
            tr = function(rr) {
              return "undefined" === typeof TextEncoder ? rr.length : (new TextEncoder).encode(rr).byteLength
            }(jr);
          const hr = {};
          return Sr.compressionEnabled && (Ur = yield Sr.compress(jr), tr = Ur.size, hr["Content-Encoding"] = "gzip"), {
            bodySize: tr,
            sessionId: ar,
            requestInit: pS({
              method: "POST",
              headers: pS(pS(pS(pS(pS({
                "Content-Type": "application/json"
              }, hr), Nr), Sr.options.apiKey ? {
                "x-api-key": Sr.options.apiKey
              } : {}), ar ? {
                "x-faro-session-id": ar
              } : {}), {}, {
                "Idempotency-Key": zS(20)
              }),
              body: Ur
            }, mr)
          }
        }))()
      }
      performAttempt(rr, Sr, Qr) {
        var Zr = this;
        return cZ((function*() {
          var Wr;
          const ar = null === (Wr = Zr.options.requestOptions) || void 0 === Wr ? void 0 : Wr.signal;
          if (null === ar || void 0 === ar ? void 0 : ar.aborted) return {
            kind: "terminal",
            failure: {
              error: ar.reason
            },
            attemptsMade: 0
          };
          let jr = 0;
          try {
            var Ir;
            const Wr = yield Zr.fetchWithKeepaliveFallback(rr.requestInit, rr.bodySize, !!Qr || (null === (Ir = Zr.options.requestOptions) || void 0 === Ir ? void 0 : Ir.keepalive), Sr, (() => jr++));
            if (Zr.handleResponse(Wr, rr.sessionId), Wr.status >= 200 && Wr.status < 300) return {
              kind: "success",
              attemptsMade: jr
            };
            const ar = {
              status: Wr.status
            };
            return !ta.has(Wr.status) || Qr ? {
              kind: "terminal",
              failure: ar,
              attemptsMade: jr
            } : {
              kind: "retry",
              failure: ar,
              attemptsMade: jr,
              retryAfterMs: ha.has(Wr.status) ? Zr.getRetryAfterDelayMs(Wr) : void 0
            }
          } catch (fr) {
            const rr = {
              error: fr
            };
            return (null === ar || void 0 === ar ? void 0 : ar.aborted) || !Zr.isFetchNetworkError(fr) || Qr ? {
              kind: "terminal",
              failure: rr,
              attemptsMade: jr
            } : {
              kind: "retry",
              failure: rr,
              attemptsMade: jr
            }
          }
        }))()
      }
      fetchWithKeepaliveFallback(rr, Sr, Qr, Zr, Wr) {
        var ar = this;
        return cZ((function*() {
          const jr = ar.getNow(),
            Ir = ar.reserveKeepalive(Sr, Qr);
          try {
            return yield ar.fetchWithTimeout(pS(pS({}, rr), {}, {
              keepalive: Ir.keepalive
            }), ar.requestTimeoutMs, Wr)
          } catch (Er) {
            var fr;
            if (Ir.keepalive && Zr > 1 && ar.isFetchNetworkError(Er) && !(Er instanceof na) && !(null === (fr = ar.options.requestOptions) || void 0 === fr || null === (fr = fr.signal) || void 0 === fr ? void 0 : fr.aborted)) {
              ar.logDebug("Retrying failed keepalive request with keepalive disabled.");
              const Sr = ar.requestTimeoutMs - (ar.getNow() - jr);
              return ar.fetchWithTimeout(pS(pS({}, rr), {}, {
                keepalive: !1
              }), Sr, Wr)
            }
            throw Er
          } finally {
            Ir.release()
          }
        }))()
      }
      fetchWithTimeout(rr, Sr, Qr) {
        var Zr = this;
        return cZ((function*() {
          var Wr;
          const ar = null === (Wr = Zr.options.requestOptions) || void 0 === Wr ? void 0 : Wr.signal;
          if (Zr.requestTimeoutMs <= 0 || "undefined" === typeof AbortController) return Qr(), fetch(Zr.options.url, pS(pS({}, rr), {}, {
            signal: ar
          }));
          if (Sr <= 0) throw new na("Request timed out");
          const jr = new AbortController,
            Ir = () => jr.abort(null === ar || void 0 === ar ? void 0 : ar.reason);
          null === ar || void 0 === ar || ar.addEventListener("abort", Ir, {
            once: !0
          });
          let fr = !1;
          const Er = setTimeout((() => {
            fr = !0, jr.abort()
          }), Sr);
          try {
            return Qr(), yield fetch(Zr.options.url, pS(pS({}, rr), {}, {
              signal: jr.signal
            }))
          } catch (pr) {
            if (fr && !(null === ar || void 0 === ar ? void 0 : ar.aborted)) throw new na("Request timed out");
            throw pr
          } finally {
            clearTimeout(Er), null === ar || void 0 === ar || ar.removeEventListener("abort", Ir)
          }
        }))()
      }
      getRetryAfterDelayMs(rr) {
        const Sr = rr.headers.get("Retry-After");
        if (!Sr) return;
        if (/^\d+$/.test(Sr)) {
          const rr = 1e3 * Number(Sr);
          return Number.isFinite(rr) ? rr : Number.POSITIVE_INFINITY
        }
        const Qr = this.getNow(),
          Zr = function(rr, Sr) {
            const Qr = Za.exec(rr);
            if (Qr) {
              const [, rr, Sr, Zr, Wr, ar, jr, Ir] = Qr;
              return Ea({
                weekday: ja.indexOf(rr),
                day: Number(Sr),
                month: fa.indexOf(Zr),
                year: Number(Wr),
                hour: Number(ar),
                minute: Number(jr),
                second: Number(Ir)
              })
            }
            const Zr = Wa.exec(rr);
            if (Zr) {
              const [, rr, Qr, jr, Ir, fr, Er, pr] = Zr, xr = new Date(Sr);
              if (Number.isNaN(xr.getTime())) return;
              const mr = xr.getUTCFullYear();
              let Nr = 100 * Math.floor(mr / 100) + Number(Ir);
              Nr < mr && (Nr += 100);
              const Ur = fa.indexOf(jr),
                tr = {
                  month: Ur,
                  day: Number(Qr),
                  hour: Number(fr),
                  minute: Number(Er),
                  second: Number(pr),
                  millisecond: 0
                },
                hr = {
                  month: xr.getUTCMonth(),
                  day: xr.getUTCDate(),
                  hour: xr.getUTCHours(),
                  minute: xr.getUTCMinutes(),
                  second: xr.getUTCSeconds(),
                  millisecond: xr.getUTCMilliseconds()
                };
              return (Nr > mr + 50 || Nr === mr + 50 && (ar = hr, ((Wr = tr).month - ar.month || Wr.day - ar.day || Wr.hour - ar.hour || Wr.minute - ar.minute || Wr.second - ar.second || Wr.millisecond - ar.millisecond) > 0)) && (Nr -= 100), Ea({
                weekday: Ia.indexOf(rr),
                day: Number(Qr),
                month: Ur,
                year: Nr,
                hour: Number(fr),
                minute: Number(Er),
                second: Number(pr)
              })
            }
            var Wr, ar;
            const jr = aa.exec(rr);
            if (!jr) return;
            const [, Ir, fr, Er, pr, xr, mr, Nr, Ur] = jr;
            return Ea({
              weekday: ja.indexOf(Ir),
              day: Number(null !== Er && void 0 !== Er ? Er : pr),
              month: fa.indexOf(fr),
              year: Number(Ur),
              hour: Number(xr),
              minute: Number(mr),
              second: Number(Nr)
            })
          }(Sr, Qr);
        return null == Zr ? void 0 : Math.max(0, Zr - Qr)
      }
      reserveKeepalive(rr, Sr) {
        if (!1 === Sr || rr > 6e4 || za + rr > 6e4 || Ya >= 9) return {
          keepalive: !1,
          release: wS
        };
        za += rr, Ya++;
        let Qr = !1;
        return {
          keepalive: !0,
          release: () => {
            Qr || (Qr = !0, za -= rr, Ya--)
          }
        }
      }
      handleResponse(rr, Sr) {
        202 === rr.status && "invalid" === rr.headers.get("X-Faro-Session-Status") && this.extendFaroSession(this.config, this.logDebug.bind(this), Sr), rr.text().catch(wS)
      }
      isFetchNetworkError(rr) {
        return rr instanceof TypeError || rr instanceof na || rr instanceof DOMException && "AbortError" === rr.name
      }
      compress(rr) {
        return cZ((function*() {
          const Sr = [],
            Qr = new ReadableStream({
              start(Sr) {
                Sr.enqueue((new TextEncoder).encode(rr)), Sr.close()
              }
            }).pipeThrough(new CompressionStream("gzip")).getReader();
          for (;;) {
            const {
              done: rr,
              value: Zr
            } = yield Qr.read();
            if (rr) return new Blob(Sr);
            Sr.push(Zr)
          }
        }))()
      }
      extendFaroSession(rr, Sr, Qr) {
        var Zr, Wr;
        const ar = rr.sessionTracking;
        if (!(null === ar || void 0 === ar ? void 0 : ar.enabled)) return void Sr("Session expired.");
        const {
          fetchUserSession: jr,
          storeUserSession: Ir
        } = iS(ar), fr = null === (Zr = this.metas.value.session) || void 0 === Zr ? void 0 : Zr.id, Er = null === (Wr = jr()) || void 0 === Wr ? void 0 : Wr.sessionId;
        Qr && Qr === fr && Qr === Er ? (XS({
          fetchUserSession: jr,
          storeUserSession: Ir
        })({
          forceSessionExtend: !0
        }), Sr("Session expired; created new session.")) : Sr("Ignoring stale or cross-tab session-invalid response; request session no longer current.")
      }
    };
    const Ka = () => {
      const rr = window.k6;
      return {
        k6: pS({
          isK6Browser: !0
        }, (null === rr || void 0 === rr ? void 0 : rr.testRunId) && {
          testRunId: null === rr || void 0 === rr ? void 0 : rr.testRunId
        })
      }
    };
    let ya, Ba;

    function Ta() {
      let {
        generatePageId: rr,
        initialPageMeta: Sr
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return () => {
        const Qr = location.href;
        return lr(rr) && ya !== Qr && (ya = Qr, Ba = rr(location)), {
          page: pS(pS({
            url: Qr
          }, Ba ? {
            id: Ba
          } : {}), Sr)
        }
      }
    }

    function va() {
      let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uS,
        Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const Qr = FS;
      return Sr > 0 && (Qr.error = Sr >= 1 ? function() {
        for (var Sr = arguments.length, Zr = new Array(Sr), Wr = 0; Wr < Sr; Wr++) Zr[Wr] = arguments[Wr];
        rr.error(`${Qr.prefix}\n`, ...Zr)
      } : wS, Qr.warn = Sr >= 2 ? function() {
        for (var Sr = arguments.length, Zr = new Array(Sr), Wr = 0; Wr < Sr; Wr++) Zr[Wr] = arguments[Wr];
        rr.warn(`${Qr.prefix}\n`, ...Zr)
      } : wS, Qr.info = Sr >= 3 ? function() {
        for (var Sr = arguments.length, Zr = new Array(Sr), Wr = 0; Wr < Sr; Wr++) Zr[Wr] = arguments[Wr];
        rr.info(`${Qr.prefix}\n`, ...Zr)
      } : wS, Qr.debug = Sr >= 4 ? function() {
        for (var Sr = arguments.length, Zr = new Array(Sr), Wr = 0; Wr < Sr; Wr++) Zr[Wr] = arguments[Wr];
        rr.debug(`${Qr.prefix}\n`, ...Zr)
      } : wS), Qr
    }
    const Oa = "faro",
      La = {
        enabled: !0,
        sendTimeout: 250,
        itemLimit: 50
      },
      la = ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "url", "experimental"];

    function Xa(rr) {
      var Sr, Qr, Wr, ar, jr, Ir;
      const fr = [],
        pr = va(rr.unpatchedConsole, rr.internalLoggerLevel);
      rr.transports ? ((rr.url || rr.apiKey) && pr.error('if "transports" is defined, "url" and "apiKey" should not be defined'), fr.push(...rr.transports)) : rr.url ? fr.push(new ea({
        url: rr.url,
        apiKey: rr.apiKey,
        requestCompression: rr.requestCompression
      })) : pr.error('either "url" or "transports" must be defined');
      const {
        dedupe: xr = !0,
        eventDomain: mr = Zr,
        globalObjectKey: Nr = Oa,
        instrumentations: Ur = VW(),
        internalLoggerLevel: tr = oS,
        isolate: hr = !1,
        logArgsSerializer: zr = PQ,
        metas: Yr = Ha(rr),
        paused: nr = !1,
        preventGlobalExposure: er = !1,
        unpatchedConsole: Kr = uS,
        url: yr,
        experimental: Br
      } = rr, Tr = xa(rr, la), vr = null !== (Sr = null === Br || void 0 === Br ? void 0 : Br.trackNavigation) && void 0 !== Sr && Sr, Or = {
        dataAttributeName: dZ(null !== (Qr = null === (Wr = rr.userActionsInstrumentation) || void 0 === Wr ? void 0 : Wr.dataAttributeName) && void 0 !== Qr ? Qr : bZ),
        excludeItem: null === (ar = rr.userActionsInstrumentation) || void 0 === ar ? void 0 : ar.excludeItem,
        initialActivityTimeout: sZ(null === (jr = rr.userActionsInstrumentation) || void 0 === jr ? void 0 : jr.initialActivityTimeout, 100, (rr => pr.warn(rr)))
      };
      return pS(pS({}, Tr), {}, {
        batching: pS(pS({}, La), rr.batching),
        dedupe: xr,
        globalObjectKey: Nr,
        instrumentations: Pa(Ur, rr),
        internalLoggerLevel: tr,
        isolate: hr,
        logArgsSerializer: zr,
        metas: Yr,
        parseStacktrace: tQ,
        paused: nr,
        preventGlobalExposure: er,
        transports: fr,
        unpatchedConsole: Kr,
        eventDomain: mr,
        ignoreUrls: [...null !== (Ir = rr.ignoreUrls) && void 0 !== Ir ? Ir : [], ...yr ? [yr] : [], /\/collect(?:\/[\w]*)?$/],
        sessionTracking: pS(pS(pS({}, Er), rr.sessionTracking), qa({
          trackGeolocation: rr.trackGeolocation,
          sessionTracking: rr.sessionTracking
        })),
        userActionsInstrumentation: Or,
        experimental: {
          trackNavigation: vr
        }
      })
    }

    function Pa(rr, Sr) {
      let {
        experimental: Qr
      } = Sr;
      var Zr;
      const Wr = null !== (Zr = null === Qr || void 0 === Qr ? void 0 : Qr.trackNavigation) && void 0 !== Zr && Zr;
      return rr.filter((rr => !("@grafana/faro-web-sdk:instrumentation-navigation" === rr.name && !Wr)))
    }

    function Ha(rr) {
      var Sr, Qr, Zr;
      const {
        page: Wr,
        generatePageId: ar
      } = null !== (Sr = null === rr || void 0 === rr ? void 0 : rr.pageTracking) && void 0 !== Sr ? Sr : {}, jr = [oW, bW, Ta({
        generatePageId: ar,
        initialPageMeta: Wr
      }), ...null !== (Qr = rr.metas) && void 0 !== Qr ? Qr : [], DW];
      return Lr(null === (Zr = window) || void 0 === Zr ? void 0 : Zr.k6) ? [...jr, Ka] : jr
    }

    function qa(rr) {
      let {
        trackGeolocation: Sr,
        sessionTracking: Qr
      } = rr;
      var Zr;
      const Wr = {};
      return vr(Sr) && (Wr.geoLocationTrackingEnabled = Sr), or(Wr) ? {} : {
        session: pS(pS({}, null !== (Zr = null === Qr || void 0 === Qr ? void 0 : Qr.session) && void 0 !== Zr ? Zr : {}), {}, {
          overrides: Wr
        })
      }
    }
    const Ra = new WeakSet;

    function ga(rr) {
      return Ra.add(rr), rr
    }

    function Ca(rr, Sr) {
      if (rr.capture) return ga(rr.capture(Sr));
      const Qr = ga(rr.value);
      return null === Sr || void 0 === Sr || Sr(), Qr
    }

    function Ma(rr) {
      const Sr = `__faroBundleId_${rr}`,
        Qr = null === pr || void 0 === pr ? void 0 : pr[Sr];
      if ("string" === typeof Qr && "" !== Qr) return Qr;
      const Zr = "undefined" !== typeof window ? window[Sr] : void 0;
      return "string" === typeof Zr && "" !== Zr ? Zr : void 0
    }

    function Ga(rr) {
      var Sr, Qr;
      const Zr = rr.config.app.name,
        Wr = Zr ? function(rr) {
          return null === pr || void 0 === pr ? void 0 : pr[`__faroGitHash_${rr}`]
        }(Zr) : void 0,
        ar = {
          sdk: {
            version: QQ,
            name: "faro"
          },
          app: sS({
            bundleId: Zr && Ma(Zr)
          }, void 0 !== Wr ? {
            gitHash: Wr
          } : {})
        },
        jr = null === (Sr = rr.config.sessionTracking) || void 0 === Sr ? void 0 : Sr.session;
      jr && rr.api.setSession(jr), rr.config.app && (ar.app = sS(sS({}, rr.config.app), ar.app)), rr.config.user && (ar.user = rr.config.user), rr.config.view && (ar.view = rr.config.view), rr.metas.add(ar, ...null !== (Qr = rr.config.metas) && void 0 !== Qr ? Qr : [])
    }
    var ka = class {
      constructor(rr, Sr) {
        var Qr, Zr;
        this.signalBuffer = [], this.itemLimit = null !== (Qr = null === Sr || void 0 === Sr ? void 0 : Sr.itemLimit) && void 0 !== Qr ? Qr : 50, this.sendTimeout = null !== (Zr = null === Sr || void 0 === Sr ? void 0 : Sr.sendTimeout) && void 0 !== Zr ? Zr : 250, this.paused = (null === Sr || void 0 === Sr ? void 0 : Sr.paused) || !1, this.sendFn = rr, this.paused || this.start(), "undefined" !== typeof document && document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }))
      }
      addItem(rr) {
        this.paused || (this.signalBuffer.push(rr), this.signalBuffer.length >= this.itemLimit && this.flush())
      }
      start() {
        this.paused = !1, this.sendTimeout > 0 && (this.flushInterval = setInterval((() => this.flush()), this.sendTimeout))
      }
      pause() {
        this.paused = !0, clearInterval(this.flushInterval)
      }
      groupItems(rr) {
        const Sr = new Map;
        return rr.forEach((rr => {
          const Qr = JSON.stringify(rr.meta);
          let Zr = Sr.get(Qr);
          Zr = void 0 === Zr ? [rr] : [...Zr, rr], Sr.set(Qr, Zr)
        })), Array.from(Sr.values())
      }
      flush() {
        if (this.paused || 0 === this.signalBuffer.length) return;
        const rr = this.signalBuffer;
        this.signalBuffer = [];
        try {
          this.groupItems(rr).forEach(this.sendFn)
        } catch (Sr) {
          throw this.signalBuffer = [...rr, ...this.signalBuffer], this.trimBufferToLimit(), Sr
        }
      }
      trimBufferToLimit() {
        this.signalBuffer.length > this.itemLimit && (this.signalBuffer = this.signalBuffer.slice(0, this.itemLimit))
      }
    };

    function Aa(rr, Sr, Qr, Zr) {
      var Wr;
      Sr.debug("Initializing transports");
      const ar = [];
      let jr = [];
      const Ir = rr => {
        let Sr = rr;
        for (const Zr of jr) {
          const rr = Sr.map(Zr).filter(Boolean);
          if (0 === rr.length) return [];
          Sr = Va(rr, Qr)
        }
        return Sr
      };
      let fr;
      (null === (Wr = Qr.batching) || void 0 === Wr ? void 0 : Wr.enabled) && (fr = new ka((rr => {
        const Qr = Ir(rr);
        if (0 !== Qr.length)
          for (const Zr of ar) Sr.debug(`Transporting item using ${Zr.name}\n`, Qr), Zr.isBatched() && Zr.send(Qr)
      }), {
        sendTimeout: Qr.batching.sendTimeout,
        itemLimit: Qr.batching.itemLimit,
        paused: Qr.paused
      }));
      return {
        add: function() {
          Sr.debug("Adding transports");
          for (var Wr = arguments.length, jr = new Array(Wr), Ir = 0; Ir < Wr; Ir++) jr[Ir] = arguments[Ir];
          jr.forEach((Wr => {
            Sr.debug(`Adding "${Wr.name}" transport`), ar.some((rr => rr === Wr)) ? Sr.warn(`Transport ${Wr.name} is already added`) : (Wr.unpatchedConsole = rr, Wr.internalLogger = Sr, Wr.config = Qr, Wr.metas = Zr, ar.push(Wr))
          }))
        },
        addBeforeSendHooks: function() {
          Sr.debug("Adding beforeSendHooks\n", jr);
          for (var rr = arguments.length, Qr = new Array(rr), Zr = 0; Zr < rr; Zr++) Qr[Zr] = arguments[Zr];
          Qr.forEach((rr => {
            rr && jr.push(rr)
          }))
        },
        getBeforeSendHooks: () => [...jr],
        execute: rr => {
          var Wr;
          if (!Qr.paused && AS(Zr).shouldCapture()) {
            if (xr = rr.meta, !Ra.has(xr)) {
              var jr, Er, pr;
              const Sr = null === (jr = Zr.value.session) || void 0 === jr ? void 0 : jr.id,
                Wr = Ca(Zr);
              if (Qr.paused) return;
              const ar = sS({}, rr.meta);
              (null === (Er = ar.session) || void 0 === Er ? void 0 : Er.id) === Sr && (null === (pr = Wr.session) || void 0 === pr ? void 0 : pr.id) !== Sr && (void 0 === Wr.session ? delete ar.session : ar.session = Wr.session), rr = sS(sS({}, rr), {}, {
                meta: ga(ar)
              })
            }
            var xr;
            (null === (Wr = Qr.batching) || void 0 === Wr ? void 0 : Wr.enabled) && (null === fr || void 0 === fr || fr.addItem(rr)), (rr => {
              var Zr;
              if ((null === (Zr = Qr.batching) || void 0 === Zr ? void 0 : Zr.enabled) && ar.every((rr => rr.isBatched()))) return;
              const [Wr] = Ir([rr]);
              if (void 0 !== Wr)
                for (const Ir of ar) {
                  var jr;
                  Sr.debug(`Transporting item using ${Ir.name}\n`, Wr), Ir.isBatched() ? (null === (jr = Qr.batching) || void 0 === jr ? void 0 : jr.enabled) || Ir.send([Wr]) : Ir.send(Wr)
                }
            })(rr)
          }
        },
        isPaused: () => Qr.paused,
        pause: () => {
          Sr.debug("Pausing transports"), null === fr || void 0 === fr || fr.pause(), Qr.paused = !0
        },
        remove: function() {
          Sr.debug("Removing transports");
          for (var rr = arguments.length, Qr = new Array(rr), Zr = 0; Zr < rr; Zr++) Qr[Zr] = arguments[Zr];
          Qr.forEach((rr => {
            Sr.debug(`Removing "${rr.name}" transport`);
            const Qr = ar.indexOf(rr); - 1 !== Qr ? ar.splice(Qr, 1) : Sr.warn(`Transport "${rr.name}" is not added`)
          }))
        },
        removeBeforeSendHooks: function() {
          for (var rr = arguments.length, Qr = new Array(rr), Zr = 0; Zr < rr; Zr++) Qr[Zr] = arguments[Zr];
          Sr.debug("Removing beforeSendHooks"), jr = jr.filter((rr => !Qr.includes(rr)))
        },
        get transports() {
          return [...ar]
        },
        unpause: () => {
          Sr.debug("Unpausing transports"), null === fr || void 0 === fr || fr.start(), Qr.paused = !1
        }
      }
    }

    function Va(rr, Sr) {
      if (Sr.preserveOriginalError)
        for (const Qr of rr) "exception" === Qr.type && delete Qr.payload.originalError;
      return rr
    }
    let ia = uS;

    function wa(rr) {
      var Sr;
      return ia = null !== (Sr = rr.unpatchedConsole) && void 0 !== Sr ? Sr : ia, ia
    }
    let ca, Fa = FS;

    function oa(rr, Sr) {
      return Fa = va(rr, Sr.internalLoggerLevel), Fa
    }

    function ba(rr) {
      let {
        internalLogger: Sr,
        config: Qr,
        metas: Zr,
        transports: Wr,
        tracesApi: ar,
        userActionsApi: jr
      } = rr;
      var Ir;
      Sr.debug("Initializing exceptions API");
      let fr = null;
      ca = null !== (Ir = Qr.parseStacktrace) && void 0 !== Ir ? Ir : ca;
      const Er = rr => {
          Sr.debug("Changing stacktrace parser"), ca = null !== rr && void 0 !== rr ? rr : ca
        },
        {
          ignoreErrors: pr = [],
          preserveOriginalError: xr
        } = Qr;
      return Er(Qr.parseStacktrace), {
        changeStacktraceParser: Er,
        getStacktraceParser: () => ca,
        pushError: function(rr) {
          let {
            skipDedupe: Ir,
            stackFrames: Er,
            type: mr,
            context: Nr,
            spanContext: Ur,
            timestampOverwriteMs: tr,
            originalError: hr,
            fingerprint: zr,
            fatal: Yr
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (! function(rr, Sr) {
              const {
                message: Qr,
                name: Zr,
                stack: Wr
              } = Sr;
              return ar = rr, jr = Qr + " " + Zr + " " + Wr, ar.some((rr => yr(rr) ? jr.includes(rr) : !!jr.match(rr)));
              var ar, jr
            }(pr, null !== hr && void 0 !== hr ? hr : rr)) try {
            var nr, er;
            if (!AS(Zr).shouldCapture()) return;
            const pr = CS(sS(sS({}, function(rr) {
                let Sr = rr.cause;
                Mr(Sr) ? Sr = rr.cause.toString() : null !== Sr && (Lr(rr.cause) || Xr(rr.cause)) ? Sr = gS(rr.cause) : null != Sr && (Sr = rr.cause.toString());
                return null == Sr ? {} : {
                  cause: Sr
                }
              }(null !== hr && void 0 !== hr ? hr : rr)), null !== Nr && void 0 !== Nr ? Nr : {})),
              yr = sS(sS(sS(sS({
                type: mr || rr.name || "Error",
                value: rr.message,
                timestamp: tr ? tS(tr) : US(),
                trace: Ur ? {
                  trace_id: Ur.traceId,
                  span_id: Ur.spanId
                } : ar.getTraceContext()
              }, or(pr) ? {} : {
                context: pr
              }), xr ? {
                originalError: hr
              } : {}), zr ? {
                fingerprint: zr
              } : {}), void 0 !== Yr ? {
                fatal: Yr
              } : {});
            Er = null !== (nr = Er) && void 0 !== nr ? nr : rr.stack ? null === ca || void 0 === ca ? void 0 : ca(rr).frames : void 0, (null === Er || void 0 === Er ? void 0 : Er.length) && (yr.stacktrace = {
              frames: Er
            });
            const Br = {
              type: yr.type,
              value: yr.value,
              stacktrace: yr.stacktrace,
              context: yr.context,
              fingerprint: yr.fingerprint,
              fatal: null !== (er = yr.fatal) && void 0 !== er && er
            };
            if (!Ir && Qr.dedupe && !Kr(fr) && YS(Br, fr)) return void Sr.debug("Skipping error push because it is the same as the last one\n", yr);
            const Tr = fr,
              vr = Ca(Zr);
            if (fr !== Tr && !Ir && Qr.dedupe && YS(Br, fr)) return;
            fr = Br;
            const Or = {
              meta: vr,
              payload: yr,
              type: "exception"
            };
            Sr.debug("Pushing exception\n", Or), yW(jr.getActiveUserAction(), Or) || Wr.execute(Or)
          } catch (Br) {
            Sr.error("Error pushing event", Br)
          }
        }
      }
    }

    function Ja(rr, Sr, Qr, Zr, Wr) {
      Sr.debug("Initializing API");
      let ar = null;
      const jr = function(rr) {
          let {
            transports: Sr,
            internalLogger: Qr,
            config: Zr,
            pushEvent: Wr
          } = rr;
          var ar;
          const jr = null === (ar = Zr.userActionsInstrumentation) || void 0 === ar ? void 0 : ar.excludeItem;
          let Ir;
          const fr = () => Ir;
          return {
            startUserAction: (rr, Zr, ar) => {
              if (void 0 === fr()) {
                const Qr = new eW({
                  name: rr,
                  transports: Sr,
                  attributes: Zr,
                  trigger: (null === ar || void 0 === ar ? void 0 : ar.triggerName) || "faroApiCall",
                  importance: (null === ar || void 0 === ar ? void 0 : ar.importance) || YW.Normal,
                  trackUserActionsExcludeItem: jr,
                  pushEvent: Wr
                });
                return Qr.filter((rr => [3, 2].includes(rr))).first().subscribe((() => {
                  Ir = void 0
                })), KW.notify({
                  type: zW,
                  userAction: Qr,
                  initialActivityTimeout: null === ar || void 0 === ar ? void 0 : ar.initialActivityTimeout
                }), Ir = Qr, Ir
              }
              Qr.error("Attempted to create a new user action while one is already running. This is not possible.")
            },
            getActiveUserAction: fr
          }
        }({
          transports: Wr,
          config: Qr,
          internalLogger: Sr,
          pushEvent: (rr, Qr, Zr, Wr) => {
            ar ? ar(rr, Qr, Zr, Wr) : Sr.warn("pushEventImpl is not initialized. Event dropped:", {
              name: rr,
              attributes: Qr,
              domain: Zr,
              options: Wr
            })
          }
        }),
        Ir = function(rr, Sr, Qr, Zr, Wr) {
          let ar;
          return Sr.debug("Initializing traces API"), {
            getOTEL: () => ar,
            getTraceContext: () => {
              const rr = null === ar || void 0 === ar ? void 0 : ar.trace.getSpanContext(ar.context.active());
              return rr ? {
                trace_id: rr.traceId,
                span_id: rr.spanId
              } : void 0
            },
            initOTEL: (rr, Qr) => {
              Sr.debug("Initializing OpenTelemetry"), ar = {
                trace: rr,
                context: Qr
              }
            },
            isOTELInitialized: () => !!ar,
            pushTraces: rr => {
              try {
                if (!AS(Zr).shouldCapture()) return;
                const Qr = {
                  type: "trace",
                  payload: rr,
                  meta: Ca(Zr)
                };
                Sr.debug("Pushing trace\n", Qr), Wr.execute(Qr)
              } catch (Qr) {
                Sr.error("Error pushing trace\n", Qr)
              }
            }
          }
        }(0, Sr, 0, Zr, Wr),
        fr = {
          unpatchedConsole: rr,
          internalLogger: Sr,
          userActionsApi: jr,
          config: Qr,
          metas: Zr,
          transports: Wr,
          tracesApi: Ir
        },
        Er = function(rr) {
          let {
            internalLogger: Sr,
            config: Qr,
            metas: Zr,
            transports: Wr,
            tracesApi: ar,
            userActionsApi: jr
          } = rr, Ir = null;
          return {
            pushEvent: function(rr, fr, Er) {
              let {
                skipDedupe: pr,
                spanContext: xr,
                timestampOverwriteMs: mr,
                customPayloadTransformer: Nr = rr => rr
              } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              try {
                if (!AS(Zr).shouldCapture()) return;
                const Ur = CS(fr),
                  tr = Nr({
                    name: rr,
                    domain: null !== Er && void 0 !== Er ? Er : Qr.eventDomain,
                    attributes: or(Ur) ? void 0 : Ur,
                    timestamp: mr ? tS(mr) : US(),
                    trace: xr ? {
                      trace_id: xr.traceId,
                      span_id: xr.spanId
                    } : ar.getTraceContext()
                  }),
                  hr = {
                    name: tr.name,
                    attributes: tr.attributes,
                    domain: tr.domain
                  };
                if (!pr && Qr.dedupe && !Kr(Ir) && YS(hr, Ir)) return void Sr.debug("Skipping event push because it is the same as the last one\n", tr);
                const zr = Ir,
                  Yr = Ca(Zr);
                if (Ir !== zr && !pr && Qr.dedupe && YS(hr, Ir)) return;
                Ir = hr;
                const nr = {
                  meta: Yr,
                  payload: tr,
                  type: "event"
                };
                Sr.debug("Pushing event\n", nr), yW(jr.getActiveUserAction(), nr) || Wr.execute(nr)
              } catch (Ur) {
                Sr.error("Error pushing event", Ur)
              }
            }
          }
        }(fr);
      return ar = Er.pushEvent, sS(sS(sS(sS(sS(sS(sS({}, Ir), ba(fr)), function(rr) {
        let Sr, Qr, Zr, Wr, {
          internalLogger: ar,
          metas: jr
        } = rr;
        ar.debug("Initializing meta API");
        const Ir = rr => {
            Qr && jr.remove(Qr), Qr = {
              user: rr
            }, jr.add(Qr)
          },
          fr = (rr, Qr) => {
            var Zr;
            const Wr = null === Qr || void 0 === Qr ? void 0 : Qr.overrides,
              ar = Wr ? {
                overrides: sS(sS({}, null === Sr || void 0 === Sr || null === (Zr = Sr.session) || void 0 === Zr ? void 0 : Zr.overrides), Wr)
              } : {};
            Sr && jr.remove(Sr), Sr = {
              session: sS(sS({}, or(rr) ? void 0 : rr), ar)
            }, jr.add(Sr)
          },
          Er = (rr, Sr) => {
            AS(jr).notifySessionUpdate({
              type: "replace",
              session: rr,
              overrides: null === Sr || void 0 === Sr ? void 0 : Sr.overrides
            }), fr(rr, Sr)
          },
          pr = () => jr.value.session,
          xr = () => jr.value.page;
        return {
          setUser: Ir,
          resetUser: Ir,
          setSession: Er,
          resetSession: Er,
          getSession: pr,
          setView: (rr, Sr) => {
            var Qr;
            if ((null === Sr || void 0 === Sr ? void 0 : Sr.overrides) && (AS(jr).notifySessionUpdate({
                type: "overrides",
                overrides: Sr.overrides
              }), fr(pr(), {
                overrides: Sr.overrides
              })), (null === Zr || void 0 === Zr || null === (Qr = Zr.view) || void 0 === Qr ? void 0 : Qr.name) === (null === rr || void 0 === rr ? void 0 : rr.name)) return;
            const Wr = Zr;
            Zr = {
              view: rr
            }, jr.add(Zr), Wr && jr.remove(Wr)
          },
          getView: () => jr.value.view,
          setPage: rr => {
            var Sr;
            const Qr = yr(rr) ? sS(sS({}, null !== (Sr = null === Wr || void 0 === Wr ? void 0 : Wr.page) && void 0 !== Sr ? Sr : xr()), {}, {
              id: rr
            }) : rr;
            Wr && jr.remove(Wr), Wr = {
              page: Qr
            }, jr.add(Wr)
          },
          getPage: xr
        }
      }(fr)), function(rr) {
        let {
          internalLogger: Sr,
          config: Qr,
          metas: Zr,
          transports: Wr,
          tracesApi: ar,
          userActionsApi: jr
        } = rr;
        var Ir;
        Sr.debug("Initializing logs API");
        let fr = null;
        const Er = null !== (Ir = Qr.logArgsSerializer) && void 0 !== Ir ? Ir : PQ;
        return {
          pushLog: function(rr) {
            let {
              context: Ir,
              level: pr,
              skipDedupe: xr,
              spanContext: mr,
              timestampOverwriteMs: Nr
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!AS(Zr).shouldCapture()) return;
              const Ur = CS(Ir),
                tr = {
                  message: Er(rr),
                  level: null !== pr && void 0 !== pr ? pr : "log",
                  context: or(Ur) ? void 0 : Ur,
                  timestamp: Nr ? tS(Nr) : US(),
                  trace: mr ? {
                    trace_id: mr.traceId,
                    span_id: mr.spanId
                  } : ar.getTraceContext()
                },
                hr = {
                  message: tr.message,
                  level: tr.level,
                  context: tr.context
                };
              if (!xr && Qr.dedupe && !Kr(fr) && YS(hr, fr)) return void Sr.debug("Skipping log push because it is the same as the last one\n", tr);
              const zr = fr,
                Yr = Ca(Zr);
              if (fr !== zr && !xr && Qr.dedupe && YS(hr, fr)) return;
              fr = hr;
              const nr = {
                type: "log",
                payload: tr,
                meta: Yr
              };
              Sr.debug("Pushing log\n", nr), yW(jr.getActiveUserAction(), nr) || Wr.execute(nr)
            } catch (Ur) {
              Sr.error("Error pushing log\n", Ur)
            }
          }
        }
      }(fr)), function(rr) {
        let {
          internalLogger: Sr,
          config: Qr,
          metas: Zr,
          transports: Wr,
          tracesApi: ar,
          userActionsApi: jr
        } = rr;
        Sr.debug("Initializing measurements API");
        let Ir = null;
        return {
          pushMeasurement: function(rr) {
            let {
              skipDedupe: fr,
              context: Er,
              spanContext: pr,
              timestampOverwriteMs: xr
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!AS(Zr).shouldCapture()) return;
              const mr = CS(Er),
                Nr = sS(sS({}, rr), {}, {
                  trace: pr ? {
                    trace_id: pr.traceId,
                    span_id: pr.spanId
                  } : ar.getTraceContext(),
                  timestamp: xr ? tS(xr) : US(),
                  context: or(mr) ? void 0 : mr
                }),
                Ur = {
                  type: Nr.type,
                  values: Nr.values,
                  context: Nr.context
                };
              if (!fr && Qr.dedupe && !Kr(Ir) && YS(Ur, Ir)) return void Sr.debug("Skipping measurement push because it is the same as the last one\n", Nr);
              const tr = Ir,
                hr = Ca(Zr);
              if (Ir !== tr && !fr && Qr.dedupe && YS(Ur, Ir)) return;
              Ir = Ur;
              const zr = {
                type: "measurement",
                payload: Nr,
                meta: hr
              };
              Sr.debug("Pushing measurement\n", zr), yW(jr.getActiveUserAction(), zr) || Wr.execute(zr)
            } catch (mr) {
              Sr.error("Error pushing measurement\n", mr)
            }
          }
        }
      }(fr)), Er), jr)
    }

    function Da(rr) {
      const Sr = wa(rr),
        Qr = oa(Sr, rr);
      if (Ur() && !rr.isolate) return void Qr.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
      Qr.debug("Initializing");
      const Zr = function(rr, Sr) {
          let Qr, Zr = [],
            Wr = [],
            ar = [],
            jr = 0,
            Ir = 0;
          const fr = () => Zr.reduce(((rr, Sr) => Object.assign(rr, lr(Sr) ? Sr() : Sr)), {}),
            Er = () => {
              if (Wr.length) {
                const rr = fr();
                Wr.forEach((Sr => Sr(rr)))
              }
            };
          return {
            add: function() {
              for (var rr = arguments.length, Qr = new Array(rr), Wr = 0; Wr < rr; Wr++) Qr[Wr] = arguments[Wr];
              Sr.debug("Adding metas\n", Qr), Zr.push(...Qr), Er()
            },
            remove: function() {
              for (var rr = arguments.length, Qr = new Array(rr), Wr = 0; Wr < rr; Wr++) Qr[Wr] = arguments[Wr];
              Sr.debug("Removing metas\n", Qr), Zr = Zr.filter((rr => !Qr.includes(rr))), Er()
            },
            addListener: rr => {
              Sr.debug("Adding metas listener\n", rr), Wr.push(rr)
            },
            removeListener: rr => {
              Sr.debug("Removing metas listener\n", rr), Wr = Wr.filter((Sr => Sr !== rr))
            },
            capture: rr => {
              var Sr;
              const Zr = void 0 !== Qr,
                Wr = null !== (Sr = Qr) && void 0 !== Sr ? Sr : ar;
              Zr || (Qr = Wr, jr = 0, Ir = Wr.length);
              try {
                for (; jr < Ir;) {
                  const rr = Wr[jr++];
                  null === rr || void 0 === rr || rr()
                }
                const Sr = ga(fr());
                return null === rr || void 0 === rr || rr(), Sr
              } finally {
                Zr || (Qr = void 0)
              }
            },
            addCaptureListener: rr => {
              ar.push(rr)
            },
            removeCaptureListener: rr => {
              ar = ar.filter((Sr => Sr !== rr))
            },
            get value() {
              return fr()
            }
          }
        }(0, Qr),
        Wr = Aa(Sr, Qr, rr, Zr),
        ar = Ja(Sr, Qr, rr, Zr, Wr),
        jr = function(rr, Sr, Qr, Zr, Wr, ar) {
          Sr.debug("Initializing instrumentations");
          const jr = [];
          return {
            add: function() {
              Sr.debug("Adding instrumentations");
              for (var Ir = arguments.length, fr = new Array(Ir), Er = 0; Er < Ir; Er++) fr[Er] = arguments[Er];
              fr.forEach((Ir => {
                Sr.debug(`Adding "${Ir.name}" instrumentation`), jr.some((rr => rr.name === Ir.name)) ? Sr.warn(`Instrumentation ${Ir.name} is already added`) : (Ir.unpatchedConsole = rr, Ir.internalLogger = Sr, Ir.config = Qr, Ir.metas = Zr, Ir.transports = Wr, Ir.api = ar, jr.push(Ir), Ir.initialize())
              }))
            },
            get instrumentations() {
              return [...jr]
            },
            remove: function() {
              Sr.debug("Removing instrumentations");
              for (var rr = arguments.length, Qr = new Array(rr), Zr = 0; Zr < rr; Zr++) Qr[Zr] = arguments[Zr];
              Qr.forEach((rr => {
                var Qr, Zr;
                Sr.debug(`Removing "${rr.name}" instrumentation`);
                const Wr = jr.reduce(((Sr, Qr, Zr) => null === Sr && Qr.name === rr.name ? Zr : null), null);
                null !== Wr ? (null === (Qr = (Zr = jr[Wr]).destroy) || void 0 === Qr || Qr.call(Zr), jr.splice(Wr, 1)) : Sr.warn(`Instrumentation "${rr.name}" is not added`)
              }))
            }
          }
        }(Sr, Qr, rr, Zr, Wr, ar),
        Ir = hr(Sr, Qr, rr, Zr, Wr, ar, jr);
      return Ga(Ir),
        function(rr) {
          rr.transports.add(...rr.config.transports), rr.transports.addBeforeSendHooks(rr.config.beforeSend)
        }(Ir),
        function(rr) {
          rr.instrumentations.add(...rr.config.instrumentations)
        }(Ir), Ir
    }

    function da(rr) {
      const Sr = Xa(rr);
      if (Sr) return Da(Sr)
    }
  },
  7643: function(rr, Sr, Qr) {
    var Zr;
    ! function(Wr, ar) {
      var jr = "function",
        Ir = "undefined",
        fr = "object",
        Er = "string",
        pr = "major",
        xr = "model",
        mr = "name",
        Nr = "type",
        Ur = "vendor",
        tr = "version",
        hr = "architecture",
        zr = "console",
        Yr = "mobile",
        nr = "tablet",
        er = "smarttv",
        Kr = "wearable",
        yr = "embedded",
        Br = "Amazon",
        Tr = "Apple",
        vr = "ASUS",
        Or = "BlackBerry",
        Lr = "Browser",
        lr = "Chrome",
        Xr = "Firefox",
        Pr = "Google",
        Hr = "Honor",
        qr = "Huawei",
        Rr = "LG",
        gr = "Microsoft",
        Cr = "Motorola",
        Mr = "Nvidia",
        Gr = "OnePlus",
        kr = "Opera",
        Ar = "OPPO",
        Vr = "Samsung",
        ir = "Sharp",
        wr = "Sony",
        cr = "Xiaomi",
        Fr = "Zebra",
        or = "Facebook",
        br = "Chromium OS",
        Jr = "Mac OS",
        Dr = " Browser",
        dr = function(rr) {
          for (var Sr = {}, Qr = 0; Qr < rr.length; Qr++) Sr[rr[Qr].toUpperCase()] = rr[Qr];
          return Sr
        },
        sr = function(rr, Sr) {
          return typeof rr === Er && -1 !== ur(Sr).indexOf(ur(rr))
        },
        ur = function(rr) {
          return rr.toLowerCase()
        },
        rS = function(rr, Sr) {
          if (typeof rr === Er) return rr = rr.replace(/^\s\s*/, ""), typeof Sr === Ir ? rr : rr.substring(0, 500)
        },
        SS = function(rr, Sr) {
          for (var Qr, Zr, Wr, Ir, Er, pr, xr = 0; xr < Sr.length && !Er;) {
            var mr = Sr[xr],
              Nr = Sr[xr + 1];
            for (Qr = Zr = 0; Qr < mr.length && !Er && mr[Qr];)
              if (Er = mr[Qr++].exec(rr))
                for (Wr = 0; Wr < Nr.length; Wr++) pr = Er[++Zr], typeof(Ir = Nr[Wr]) === fr && Ir.length > 0 ? 2 === Ir.length ? typeof Ir[1] == jr ? this[Ir[0]] = Ir[1].call(this, pr) : this[Ir[0]] = Ir[1] : 3 === Ir.length ? typeof Ir[1] !== jr || Ir[1].exec && Ir[1].test ? this[Ir[0]] = pr ? pr.replace(Ir[1], Ir[2]) : ar : this[Ir[0]] = pr ? Ir[1].call(this, pr, Ir[2]) : ar : 4 === Ir.length && (this[Ir[0]] = pr ? Ir[3].call(this, pr.replace(Ir[1], Ir[2])) : ar) : this[Ir] = pr || ar;
            xr += 2
          }
        },
        QS = function(rr, Sr) {
          for (var Qr in Sr)
            if (typeof Sr[Qr] === fr && Sr[Qr].length > 0) {
              for (var Zr = 0; Zr < Sr[Qr].length; Zr++)
                if (sr(Sr[Qr][Zr], rr)) return "?" === Qr ? ar : Qr
            } else if (sr(Sr[Qr], rr)) return "?" === Qr ? ar : Qr;
          return Sr.hasOwnProperty("*") ? Sr["*"] : rr
        },
        ZS = {
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
        WS = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [tr, [mr, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [tr, [mr, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [mr, tr],
            [/opios[\/ ]+([\w\.]+)/i],
            [tr, [mr, kr + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [tr, [mr, kr + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [tr, [mr, kr]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [tr, [mr, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [tr, [mr, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
            [mr, tr],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [tr, [mr, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [tr, [mr, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [tr, [mr, "UC" + Lr]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [tr, [mr, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [tr, [mr, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [tr, [mr, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [tr, [mr, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [tr, [mr, "Smart Lenovo " + Lr]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [mr, /(.+)/, "$1 Secure " + Lr], tr
            ],
            [/\bfocus\/([\w\.]+)/i],
            [tr, [mr, Xr + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [tr, [mr, kr + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [tr, [mr, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [tr, [mr, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [tr, [mr, kr + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [tr, [mr, "MIUI" + Dr]],
            [/fxios\/([\w\.-]+)/i],
            [tr, [mr, Xr]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [tr, [mr, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [mr, /(.+)/, "$1Browser"], tr
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [mr, /(.+)/, "$1" + Dr], tr
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [tr, [mr, Vr + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [tr, [mr, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [mr, "Sogou Mobile"], tr
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [mr, tr],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [mr],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [tr, mr],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [mr, or], tr
            ],
            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
            [mr, tr],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [tr, [mr, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [tr, [mr, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [tr, [mr, lr + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [mr, lr + " WebView"], tr
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [tr, [mr, "Android " + Lr]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [mr, tr],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [tr, [mr, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [tr, mr],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [mr, [tr, QS, {
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
            [mr, tr],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [mr, "Netscape"], tr
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [mr, tr],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [tr, [mr, Xr + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [mr, [tr, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [mr, [tr, /master.|lts./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [hr, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [hr, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [hr, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [hr, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [hr, "arm"]
            ],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [
              [hr, /ower/, "", ur]
            ],
            [/ sun4\w[;\)]/i],
            [
              [hr, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
            [
              [hr, ur]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [xr, [Ur, Vr],
              [Nr, nr]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
            [xr, [Ur, Vr],
              [Nr, Yr]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [xr, [Ur, Tr],
              [Nr, Yr]
            ],
            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
            [xr, [Ur, Tr],
              [Nr, nr]
            ],
            [/(macintosh);/i],
            [xr, [Ur, Tr]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [xr, [Ur, ir],
              [Nr, Yr]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [xr, [Ur, Hr],
              [Nr, nr]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [xr, [Ur, Hr],
              [Nr, Yr]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [xr, [Ur, qr],
              [Nr, nr]
            ],
            [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
            [xr, [Ur, qr],
              [Nr, Yr]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [xr, /_/g, " "],
              [Ur, cr],
              [Nr, nr]
            ],
            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [xr, /_/g, " "],
              [Ur, cr],
              [Nr, Yr]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [xr, [Ur, Ar],
              [Nr, Yr]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [xr, [Ur, QS, {
                OnePlus: ["304", "403", "203"],
                "*": Ar
              }],
              [Nr, nr]
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [xr, [Ur, "Vivo"],
              [Nr, Yr]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [xr, [Ur, "Realme"],
              [Nr, Yr]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
            [xr, [Ur, Cr],
              [Nr, Yr]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [xr, [Ur, Cr],
              [Nr, nr]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [xr, [Ur, Rr],
              [Nr, nr]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
            [xr, [Ur, Rr],
              [Nr, Yr]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [xr, [Ur, "Lenovo"],
              [Nr, nr]
            ],
            [/(nokia) (t[12][01])/i],
            [Ur, xr, [Nr, nr]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
            [
              [xr, /_/g, " "],
              [Nr, Yr],
              [Ur, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [xr, [Ur, Pr],
              [Nr, nr]
            ],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [xr, [Ur, Pr],
              [Nr, Yr]
            ],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [xr, [Ur, wr],
              [Nr, Yr]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [xr, "Xperia Tablet"],
              [Ur, wr],
              [Nr, nr]
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [xr, [Ur, Gr],
              [Nr, Yr]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [xr, [Ur, Br],
              [Nr, nr]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [xr, /(.+)/g, "Fire Phone $1"],
              [Ur, Br],
              [Nr, Yr]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [xr, Ur, [Nr, nr]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [xr, [Ur, Or],
              [Nr, Yr]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [xr, [Ur, vr],
              [Nr, nr]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [xr, [Ur, vr],
              [Nr, Yr]
            ],
            [/(nexus 9)/i],
            [xr, [Ur, "HTC"],
              [Nr, nr]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [Ur, [xr, /_/g, " "],
              [Nr, Yr]
            ],
            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
            [xr, [Ur, "TCL"],
              [Nr, nr]
            ],
            [/(itel) ((\w+))/i],
            [
              [Ur, ur], xr, [Nr, QS, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [xr, [Ur, "Acer"],
              [Nr, nr]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [xr, [Ur, "Meizu"],
              [Nr, Yr]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [xr, [Ur, "Ulefone"],
              [Nr, Yr]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [xr, [Ur, "Energizer"],
              [Nr, Yr]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [xr, [Ur, "Cat"],
              [Nr, Yr]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [xr, [Ur, "Smartfren"],
              [Nr, Yr]
            ],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [xr, [Ur, "Nothing"],
              [Nr, Yr]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [xr, [Ur, "Archos"],
              [Nr, nr]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [xr, [Ur, "Archos"],
              [Nr, Yr]
            ],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [Ur, xr, [Nr, nr]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
            [Ur, xr, [Nr, Yr]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [Ur, xr, [Nr, nr]],
            [/(surface duo)/i],
            [xr, [Ur, gr],
              [Nr, nr]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [xr, [Ur, "Fairphone"],
              [Nr, Yr]
            ],
            [/(u304aa)/i],
            [xr, [Ur, "AT&T"],
              [Nr, Yr]
            ],
            [/\bsie-(\w*)/i],
            [xr, [Ur, "Siemens"],
              [Nr, Yr]
            ],
            [/\b(rct\w+) b/i],
            [xr, [Ur, "RCA"],
              [Nr, nr]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [xr, [Ur, "Dell"],
              [Nr, nr]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [xr, [Ur, "Verizon"],
              [Nr, nr]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [xr, [Ur, "Barnes & Noble"],
              [Nr, nr]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [xr, [Ur, "NuVision"],
              [Nr, nr]
            ],
            [/\b(k88) b/i],
            [xr, [Ur, "ZTE"],
              [Nr, nr]
            ],
            [/\b(nx\d{3}j) b/i],
            [xr, [Ur, "ZTE"],
              [Nr, Yr]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [xr, [Ur, "Swiss"],
              [Nr, Yr]
            ],
            [/\b(zur\d{3}) b/i],
            [xr, [Ur, "Swiss"],
              [Nr, nr]
            ],
            [/\b((zeki)?tb.*\b) b/i],
            [xr, [Ur, "Zeki"],
              [Nr, nr]
            ],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [
              [Ur, "Dragon Touch"], xr, [Nr, nr]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [xr, [Ur, "Insignia"],
              [Nr, nr]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [xr, [Ur, "NextBook"],
              [Nr, nr]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
              [Ur, "Voice"], xr, [Nr, Yr]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
              [Ur, "LvTel"], xr, [Nr, Yr]
            ],
            [/\b(ph-1) /i],
            [xr, [Ur, "Essential"],
              [Nr, Yr]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [xr, [Ur, "Envizen"],
              [Nr, nr]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [xr, [Ur, "MachSpeed"],
              [Nr, nr]
            ],
            [/\btu_(1491) b/i],
            [xr, [Ur, "Rotor"],
              [Nr, nr]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [xr, [Ur, Mr],
              [Nr, nr]
            ],
            [/(sprint) (\w+)/i],
            [Ur, xr, [Nr, Yr]],
            [/(kin\.[onetw]{3})/i],
            [
              [xr, /\./g, " "],
              [Ur, gr],
              [Nr, Yr]
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [xr, [Ur, Fr],
              [Nr, nr]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [xr, [Ur, Fr],
              [Nr, Yr]
            ],
            [/smart-tv.+(samsung)/i],
            [Ur, [Nr, er]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [xr, /^/, "SmartTV"],
              [Ur, Vr],
              [Nr, er]
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [Ur, Rr],
              [Nr, er]
            ],
            [/(apple) ?tv/i],
            [Ur, [xr, Tr + " TV"],
              [Nr, er]
            ],
            [/crkey/i],
            [
              [xr, lr + "cast"],
              [Ur, Pr],
              [Nr, er]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [xr, [Ur, Br],
              [Nr, er]
            ],
            [/(shield \w+ tv)/i],
            [xr, [Ur, Mr],
              [Nr, er]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [xr, [Ur, ir],
              [Nr, er]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [xr, [Ur, wr],
              [Nr, er]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [xr, [Ur, cr],
              [Nr, er]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [Ur, xr, [Nr, er]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [Ur, rS],
              [xr, rS],
              [Nr, er]
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [xr, [Nr, er]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [
              [Nr, er]
            ],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [Ur, xr, [Nr, zr]],
            [/droid.+; (shield)( bui|\))/i],
            [xr, [Ur, Mr],
              [Nr, zr]
            ],
            [/(playstation \w+)/i],
            [xr, [Ur, wr],
              [Nr, zr]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [xr, [Ur, gr],
              [Nr, zr]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [xr, [Ur, Vr],
              [Nr, Kr]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [Ur, xr, [Nr, Kr]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [xr, [Ur, Ar],
              [Nr, Kr]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [xr, [Ur, Tr],
              [Nr, Kr]
            ],
            [/(opwwe\d{3})/i],
            [xr, [Ur, Gr],
              [Nr, Kr]
            ],
            [/(moto 360)/i],
            [xr, [Ur, Cr],
              [Nr, Kr]
            ],
            [/(smartwatch 3)/i],
            [xr, [Ur, wr],
              [Nr, Kr]
            ],
            [/(g watch r)/i],
            [xr, [Ur, Rr],
              [Nr, Kr]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [xr, [Ur, Fr],
              [Nr, Kr]
            ],
            [/droid.+; (glass) \d/i],
            [xr, [Ur, Pr],
              [Nr, Kr]
            ],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [Ur, xr, [Nr, Kr]],
            [/; (quest( \d| pro)?)/i],
            [xr, [Ur, or],
              [Nr, Kr]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [Ur, [Nr, yr]],
            [/(aeobc)\b/i],
            [xr, [Ur, Br],
              [Nr, yr]
            ],
            [/(homepod).+mac os/i],
            [xr, [Ur, Tr],
              [Nr, yr]
            ],
            [/windows iot/i],
            [
              [Nr, yr]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [xr, [Nr, Yr]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [xr, [Nr, nr]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [Nr, nr]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [Nr, Yr]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [xr, [Ur, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [tr, [mr, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [mr, tr],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [tr, [mr, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [mr, tr],
            [/ladybird\//i],
            [
              [mr, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [tr, mr]
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [mr, tr],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [mr, [tr, QS, ZS]],
            [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [tr, QS, ZS],
              [mr, "Windows"]
            ],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [tr, /_/g, "."],
              [mr, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
              [mr, Jr],
              [tr, /_/g, "."]
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [tr, mr],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [mr, /(.+)/, "$1 Touch"], tr
            ],
            [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
            [mr, tr],
            [/\(bb(10);/i],
            [tr, [mr, Or]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [tr, [mr, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [tr, [mr, Xr + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [tr, [mr, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [tr, [mr, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [tr, [mr, lr + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [mr, br], tr
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
            [mr, tr],
            [/(sunos) ?([\w\.\d]*)/i],
            [
              [mr, "Solaris"], tr
            ],
            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [mr, tr]
          ]
        },
        aS = function(rr, Sr) {
          if (typeof rr === fr && (Sr = rr, rr = ar), !(this instanceof aS)) return new aS(rr, Sr).getResult();
          var Qr = typeof Wr !== Ir && Wr.navigator ? Wr.navigator : ar,
            Zr = rr || (Qr && Qr.userAgent ? Qr.userAgent : ""),
            zr = Qr && Qr.userAgentData ? Qr.userAgentData : ar,
            er = Sr ? function(rr, Sr) {
              var Qr = {};
              for (var Zr in rr) Sr[Zr] && Sr[Zr].length % 2 === 0 ? Qr[Zr] = Sr[Zr].concat(rr[Zr]) : Qr[Zr] = rr[Zr];
              return Qr
            }(WS, Sr) : WS,
            Kr = Qr && Qr.userAgent == Zr;
          return this.getBrowser = function() {
            var rr, Sr = {};
            return Sr[mr] = ar, Sr[tr] = ar, SS.call(Sr, Zr, er.browser), Sr[pr] = typeof(rr = Sr[tr]) === Er ? rr.replace(/[^\d\.]/g, "").split(".")[0] : ar, Kr && Qr && Qr.brave && typeof Qr.brave.isBrave == jr && (Sr[mr] = "Brave"), Sr
          }, this.getCPU = function() {
            var rr = {};
            return rr[hr] = ar, SS.call(rr, Zr, er.cpu), rr
          }, this.getDevice = function() {
            var rr = {};
            return rr[Ur] = ar, rr[xr] = ar, rr[Nr] = ar, SS.call(rr, Zr, er.device), Kr && !rr[Nr] && zr && zr.mobile && (rr[Nr] = Yr), Kr && "Macintosh" == rr[xr] && Qr && typeof Qr.standalone !== Ir && Qr.maxTouchPoints && Qr.maxTouchPoints > 2 && (rr[xr] = "iPad", rr[Nr] = nr), rr
          }, this.MU = function() {
            var rr = {};
            return rr[mr] = ar, rr[tr] = ar, SS.call(rr, Zr, er.engine), rr
          }, this.getOS = function() {
            var rr = {};
            return rr[mr] = ar, rr[tr] = ar, SS.call(rr, Zr, er.os), Kr && !rr[mr] && zr && zr.platform && "Unknown" != zr.platform && (rr[mr] = zr.platform.replace(/chrome os/i, br).replace(/macos/i, Jr)), rr
          }, this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.MU(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function() {
            return Zr
          }, this.setUA = function(rr) {
            return Zr = typeof rr === Er && rr.length > 500 ? rS(rr, 500) : rr, this
          }, this.setUA(Zr), this
        };
      aS.VERSION = "1.0.41", aS.BROWSER = dr([mr, tr, pr]), aS.CPU = dr([hr]), aS.DEVICE = dr([xr, Ur, Nr, zr, Yr, er, nr, Kr, yr]), aS.ENGINE = aS.OS = dr([mr, tr]), typeof Sr !== Ir ? (rr.exports && (Sr = rr.exports = aS), Sr.UAParser = aS) : Qr.amdO ? (Zr = function() {
        return aS
      }.call(Sr, Qr, Sr, rr)) === ar || (rr.exports = Zr) : typeof Wr !== Ir && (Wr.UAParser = aS);
      var jS = typeof Wr !== Ir && (Wr.jQuery || Wr.Zepto);
      if (jS && !jS.ua) {
        var IS = new aS;
        jS.ua = IS.getResult(), jS.ua.get = function() {
          return IS.getUA()
        }, jS.ua.set = function(rr) {
          IS.setUA(rr);
          var Sr = IS.getResult();
          for (var Qr in Sr) jS.ua[Qr] = Sr[Qr]
        }
      }
    }("object" === typeof window ? window : this)
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);