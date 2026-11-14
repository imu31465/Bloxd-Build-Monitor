export const id = 27;
export const ids = [27];
export const modules = {
  6952: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      BaseExtension: () => Bn,
      BaseInstrumentation: () => nn,
      BaseTransport: () => AI,
      CSPInstrumentation: () => LI,
      ConsoleInstrumentation: () => vV,
      ConsoleTransport: () => Vr,
      EVENT_CLICK: () => zn,
      EVENT_NAVIGATION: () => pB,
      EVENT_ROUTE_CHANGE: () => gn,
      EVENT_SESSION_EXTEND: () => YB,
      EVENT_SESSION_RESUME: () => lB,
      EVENT_SESSION_START: () => an,
      EVENT_VIEW_CHANGED: () => hB,
      ErrorsInstrumentation: () => Nn,
      FetchTransport: () => hr,
      InternalLoggerLevel: () => JB,
      LogLevel: () => pn,
      MAX_SESSION_PERSISTENCE_TIME: () => Mc,
      NavigationInstrumentation: () => XI,
      Observable: () => zV,
      PerformanceInstrumentation: () => iI,
      PersistentSessionsManager: () => oB,
      SESSION_EXPIRATION_TIME: () => rB,
      SESSION_INACTIVITY_TIME: () => uc,
      STORAGE_KEY: () => Ic,
      SessionInstrumentation: () => In,
      TransportItemType: () => GI,
      UserActionInstrumentation: () => YI,
      UserActionState: () => eI,
      VERSION: () => Vn,
      ViewInstrumentation: () => onc,
      VolatileSessionsManager: () => WB,
      WebVitalsInstrumentation: () => DV,
      allLogLevels: () => aV,
      browserMeta: () => ir,
      buildStackFrame: () => rV,
      captureMetas: () => or,
      createInternalLogger: () => gu,
      createPromiseBuffer: () => fr,
      createSession: () => xr,
      deepEqual: () => yn,
      defaultEventDomain: () => Vc,
      defaultExceptionType: () => gV,
      defaultGlobalObjectKey: () => Ur,
      defaultInternalLoggerLevel: () => RB,
      defaultLogLevel: () => hn,
      faro: () => ec,
      genShortID: () => SB,
      getCurrentTimestamp: () => mn,
      getDataFromSafariExtensions: () => fn,
      getIgnoreUrls: () => iB,
      getInternalFaroFromGlobalObject: () => Tc,
      getStackFramesFromError: () => en,
      getTransportBody: () => nr,
      getUrlFromResource: () => xB,
      getWebInstrumentations: () => HI,
      globalObject: () => qB,
      initializeFaro: () => Ar,
      internalGlobalObjectKey: () => Oc,
      isArray: () => Zc,
      isBoolean: () => Lc,
      isDomError: () => wc,
      isDomException: () => kB,
      isElement: () => Hc,
      isElementDefined: () => Xc,
      hV: () => Rc,
      isError: () => oc,
      isErrorDefined: () => Ec,
      isErrorEvent: () => Wc,
      isEvent: () => Nc,
      isEventDefined: () => Dc,
      isFunction: () => bB,
      isInstanceOf: () => zB,
      isInt: () => Yc,
      isInternalFaroOnGlobalObject: () => mB,
      isMap: () => Jc,
      isMapDefined: () => Fc,
      isNull: () => hc,
      isNumber: () => lc,
      isObject: () => Uc,
      isPrimitive: () => vB,
      isRegExp: () => Qc,
      isString: () => aB,
      isSymbol: () => gB,
      isSyntheticEvent: () => jB,
      isThenable: () => Cc,
      isToString: () => yB,
      isTypeof: () => Sc,
      isUndefined: () => pc,
      makeCoreConfig: () => Qr,
      noop: () => FB,
      osMeta: () => KI,
      parseStacktrace: () => tV,
      sdkMeta: () => dI,
      setInternalFaroOnGlobalObject: () => fc,
      transportItemTypeToBodyKey: () => cu,
      unknownString: () => En,
      userActionDataAttribute: () => KV,
      userActionTimeoutDataAttribute: () => xI
    });
    const Vc = "browser",
      Ic = "com.grafana.faro.session",
      rB = 144e5,
      uc = 9e5,
      sc = 1e3,
      Mc = uc,
      Pc = {
        enabled: !0,
        persistent: !1,
        maxSessionPersistenceTime: Mc
      };
    const qB = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof nc.g ? nc.g : "undefined" !== typeof self ? self : void 0;
    const Oc = "_faroInternal";

    function Tc() {
      return qB[Oc]
    }

    function fc(cB) {
      cB.config.isolate ? cB.internalLogger.debug("Skipping registering internal Faro instance on global object") : (cB.internalLogger.debug("Registering internal Faro instance on global object"), Object.defineProperty(qB, Oc, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: cB
      }))
    }

    function mB() {
      return Oc in qB
    }
    let ec = {
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

    function tB(cB, Bc, nc, Vc, Ic, rB, uc) {
      return Bc.debug("Initializing Faro"), ec = {
          api: rB,
          config: nc,
          instrumentations: uc,
          internalLogger: Bc,
          metas: Vc,
          pause: Ic.pause,
          transports: Ic,
          unpatchedConsole: cB,
          unpause: Ic.unpause
        }, fc(ec),
        function(cB) {
          if (cB.config.preventGlobalExposure) cB.internalLogger.debug("Skipping registering public Faro instance in the global scope");
          else {
            if (cB.internalLogger.debug(`Registering public faro reference in the global scope using "${cB.config.globalObjectKey}" key`), cB.config.globalObjectKey in qB) return void cB.internalLogger.warn(`Skipping global registration due to key "${cB.config.globalObjectKey}" being used already. Please set "globalObjectKey" to something else or set "preventGlobalExposure" to "true"`);
            Object.defineProperty(qB, cB.config.globalObjectKey, {
              configurable: !1,
              writable: !1,
              value: cB
            })
          }
        }(ec), ec
    }

    function Sc(cB, Bc) {
      return typeof cB === Bc
    }

    function yB(cB, Bc) {
      return Object.prototype.toString.call(cB) === `[object ${Bc}]`
    }

    function zB(cB, Bc) {
      try {
        return cB instanceof Bc
      } catch (nc) {
        return !1
      }
    }
    const pc = cB => Sc(cB, "undefined"),
      hc = cB => Sc(cB, "null"),
      aB = cB => Sc(cB, "string"),
      lc = cB => Sc(cB, "number") && !isNaN(cB) || Sc(cB, "bigint"),
      Yc = cB => lc(cB) && Number.isInteger(cB),
      Lc = cB => Sc(cB, "boolean"),
      gB = cB => Sc(cB, "symbol"),
      Uc = cB => !hc(cB) && Sc(cB, "object"),
      bB = cB => Sc(cB, "function"),
      Zc = cB => yB(cB, "Array"),
      Qc = cB => yB(cB, "RegExp"),
      Cc = cB => bB(null === cB || void 0 === cB ? void 0 : cB.then),
      vB = cB => !Uc(cB) && !bB(cB),
      Dc = "undefined" !== typeof Event,
      Nc = cB => Dc && zB(cB, Event),
      Ec = "undefined" !== typeof Error,
      oc = cB => Ec && zB(cB, Error),
      Wc = cB => yB(cB, "ErrorEvent"),
      wc = cB => yB(cB, "DOMError"),
      kB = cB => yB(cB, "DOMException"),
      Xc = "undefined" !== typeof Element,
      Hc = cB => Xc && zB(cB, Element),
      Fc = "undefined" !== typeof Map,
      Jc = cB => Fc && zB(cB, Map),
      jB = cB => Uc(cB) && "nativeEvent" in cB && "preventDefault" in cB && "stopPropagation" in cB;

    function Rc(cB) {
      return null == cB || (Zc(cB) || aB(cB) ? 0 === cB.length : !!Uc(cB) && 0 === Object.keys(cB).length)
    }

    function iB() {
      return ec.transports.transports.flatMap((cB => cB.getIgnoreUrls()))
    }

    function Kc() {
      let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return iB().some((Bc => cB && null != cB.match(Bc)))
    }

    function xB(cB) {
      return aB(cB) ? cB : cB instanceof URL ? cB.href : !Rc(cB) && bB(null === cB || void 0 === cB ? void 0 : cB.toString) ? cB.toString() : void 0
    }
    const dc = "sessionStorage",
      Ac = "localStorage";

    function Gc(cB) {
      try {
        let Bc;
        Bc = window[cB];
        const nc = "__faro_storage_test__";
        return Bc.setItem(nc, nc), Bc.removeItem(nc), !0
      } catch (nc) {
        var Bc;
        return null === (Bc = ec.internalLogger) || void 0 === Bc || Bc.info(`Web storage of type ${cB} is not available. Reason: ${nc}`), !1
      }
    }

    function cn(cB, Bc) {
      return rn(Bc) ? window[Bc].getItem(cB) : null
    }

    function BB(cB, Bc, nc) {
      if (rn(nc)) try {
        window[nc].setItem(cB, Bc)
      } catch (Vc) {}
    }

    function nB(cB, Bc) {
      rn(Bc) && window[Bc].removeItem(cB)
    }
    const VB = Gc(Ac),
      IB = Gc(dc);

    function rn(cB) {
      return cB === Ac ? VB : cB === dc && IB
    }

    function uB(cB) {
      return uB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(cB) {
        return typeof cB
      } : function(cB) {
        return cB && "function" == typeof Symbol && cB.constructor === Symbol && cB !== Symbol.prototype ? "symbol" : typeof cB
      }, uB(cB)
    }

    function sB(cB) {
      var Bc = function(cB, Bc) {
        if ("object" != uB(cB) || !cB) return cB;
        var nc = cB[Symbol.toPrimitive];
        if (void 0 !== nc) {
          var Vc = nc.call(cB, Bc || "default");
          if ("object" != uB(Vc)) return Vc;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Bc ? String : Number)(cB)
      }(cB, "string");
      return "symbol" == uB(Bc) ? Bc : Bc + ""
    }

    function MB(cB, Bc, nc) {
      return (Bc = sB(Bc)) in cB ? Object.defineProperty(cB, Bc, {
        value: nc,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : cB[Bc] = nc, cB
    }

    function PB(cB, Bc) {
      var nc = Object.keys(cB);
      if (Object.getOwnPropertySymbols) {
        var Vc = Object.getOwnPropertySymbols(cB);
        Bc && (Vc = Vc.filter((function(Bc) {
          return Object.getOwnPropertyDescriptor(cB, Bc).enumerable
        }))), nc.push.apply(nc, Vc)
      }
      return nc
    }

    function qn(cB) {
      for (var Bc = 1; Bc < arguments.length; Bc++) {
        var nc = null != arguments[Bc] ? arguments[Bc] : {};
        Bc % 2 ? PB(Object(nc), !0).forEach((function(Bc) {
          MB(cB, Bc, nc[Bc])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(cB, Object.getOwnPropertyDescriptors(nc)) : PB(Object(nc)).forEach((function(Bc) {
          Object.defineProperty(cB, Bc, Object.getOwnPropertyDescriptor(nc, Bc))
        }))
      }
      return cB
    }

    function OB() {
      let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ec;
      var Bc, nc, Vc;
      const Ic = cB.config.sessionTracking,
        rB = null !== (Bc = null !== (nc = null === Ic || void 0 === Ic || null === (Vc = Ic.sampler) || void 0 === Vc ? void 0 : Vc.call(Ic, {
          metas: cB.metas.value
        })) && void 0 !== nc ? nc : null === Ic || void 0 === Ic ? void 0 : Ic.samplingRate) && void 0 !== Bc ? Bc : 1,
        uc = "number" === typeof rB ? function(cB) {
          return Math.min(1, Math.max(0, cB))
        }(rB) : 0;
      if (!(uc > 0)) return !1;
      if (1 === uc) return !0;
      try {
        const cB = "undefined" !== typeof window ? window.crypto : void 0;
        if ("function" === typeof(null === cB || void 0 === cB ? void 0 : cB.getRandomValues)) {
          const Bc = new Uint32Array(1);
          return cB.getRandomValues(Bc), Bc[0] / Math.pow(2, 32) < uc
        }
      } catch (sc) {}
      return Math.random() < uc
    }

    function TB() {
      return Date.now()
    }

    function fB() {
      return "undefined" !== typeof performance && "function" === typeof performance.now ? performance.now() : Date.now()
    }

    function mn() {
      return (new Date).toISOString()
    }

    function eB(cB) {
      return new Date(cB).toISOString()
    }
    const tn = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

    function SB() {
      let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      const Bc = new Uint32Array(cB),
        nc = "undefined" !== typeof globalThis ? globalThis.crypto : void 0;
      if (null === nc || void 0 === nc ? void 0 : nc.getRandomValues) nc.getRandomValues(Bc);
      else
        for (let Ic = 0; Ic < cB; Ic++) Bc[Ic] = Math.floor(4294967296 * Math.random());
      let Vc = "";
      for (let Ic = 0; Ic < cB; Ic++) Vc += tn[Bc[Ic] % 59];
      return Vc
    }

    function yn(cB, Bc) {
      if (cB === Bc) return !0;
      if (Sc(cB, "number") && isNaN(cB)) return Sc(Bc, "number") && isNaN(Bc);
      const nc = Zc(cB),
        Vc = Zc(Bc);
      if (nc !== Vc) return !1;
      if (nc && Vc) {
        const nc = cB.length;
        if (nc !== Bc.length) return !1;
        for (let Vc = nc; 0 !== Vc--;)
          if (!yn(cB[Vc], Bc[Vc])) return !1;
        return !0
      }
      const Ic = Uc(cB),
        rB = Uc(Bc);
      if (Ic !== rB) return !1;
      if (cB && Bc && Ic && rB) {
        const nc = Object.keys(cB),
          Vc = Object.keys(Bc);
        if (nc.length !== Vc.length) return !1;
        for (let cB of nc)
          if (!Vc.includes(cB)) return !1;
        for (let Ic of nc)
          if (!yn(cB[Ic], Bc[Ic])) return !1;
        return !0
      }
      return !1
    }
    const zn = "click",
      pB = "navigation",
      hB = "view_changed",
      an = "session_start",
      lB = "session_resume",
      YB = "session_extend",
      LB = "service_name_override",
      gn = "route_change";

    function UB() {
      let {
        sessionId: cB,
        started: Bc,
        lastActivity: nc,
        isSampled: Vc = !0
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, Ic = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec;
      var rB;
      const uc = TB(),
        sc = null === (rB = Ic.config) || void 0 === rB || null === (rB = rB.sessionTracking) || void 0 === rB ? void 0 : rB.generateSessionId;
      return null == cB && (cB = "function" === typeof sc ? sc() : SB()), {
        sessionId: cB,
        lastActivity: null !== nc && void 0 !== nc ? nc : uc,
        started: null !== Bc && void 0 !== Bc ? Bc : uc,
        isSampled: Vc
      }
    }

    function bn(cB) {
      if (null == cB) return !1;
      const Bc = TB();
      return Bc - cB.started < 144e5 && Bc - cB.lastActivity < uc
    }

    function ZB(cB) {
      let {
        fetchUserSession: Bc,
        storeUserSession: nc,
        adoptSession: Vc,
        updateInterval: Ic = 0
      } = cB, sc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec, Mc = 0;
      return function() {
        let {
          forceSessionExtend: cB = !1,
          refreshActivity: Pc = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var qB, Oc;
        if (!Bc || !nc) return;
        const Tc = TB();
        if (!cB && Tc < Mc && Mc - Tc <= Ic) return;
        const fc = sc.config.sessionTracking,
          mB = null === fc || void 0 === fc ? void 0 : fc.persistent;
        if (mB && !VB || !mB && !IB) return;
        const ec = Bc();
        if (Mc = Math.min(Tc + Ic, (null !== (qB = null === ec || void 0 === ec ? void 0 : ec.started) && void 0 !== qB ? qB : Tc) + rB, (null !== (Oc = null === ec || void 0 === ec ? void 0 : ec.lastActivity) && void 0 !== Oc ? Oc : Tc) + uc), !1 === cB && bn(ec)) {
          var tB;
          Pc && nc(qn(qn({}, ec), {}, {
            lastActivity: Tc
          }));
          const cB = null === (tB = sc.metas.value.session) || void 0 === tB ? void 0 : tB.id;
          null != Vc && null != ec.sessionMeta && ec.sessionId !== cB && Vc(ec.sessionMeta)
        } else {
          var Sc, yB, zB;
          let cB = CB(UB({
            isSampled: OB(sc)
          }, sc), ec, sc);
          Mc = Tc + Ic, nc(cB), null === (Sc = sc.api) || void 0 === Sc || Sc.setSession(cB.sessionMeta), null === fc || void 0 === fc || null === (yB = fc.onSessionChange) || void 0 === yB || yB.call(fc, null !== (zB = null === ec || void 0 === ec ? void 0 : ec.sessionMeta) && void 0 !== zB ? zB : null, cB.sessionMeta)
        }
      }
    }

    function QB(cB) {
      let Bc, {
          fetchUserSession: nc,
          storeUserSession: Vc,
          updateInterval: Ic = 0
        } = cB,
        rB = 0;
      return cB => {
        const uc = TB();
        if (cB === Bc && uc < rB && rB - uc <= Ic) return;
        Bc = cB, rB = uc + Ic;
        const sc = nc();
        (null === sc || void 0 === sc ? void 0 : sc.sessionId) === cB && bn(sc) && Vc(qn(qn({}, sc), {}, {
          lastActivity: uc
        }))
      }
    }

    function CB(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ec;
      var Vc, Ic, rB, uc, sc, Mc;
      const Pc = qn(qn({}, cB), {}, {
          sessionMeta: {
            id: cB.sessionId,
            attributes: DB(qn(qn(qn({}, null === (Vc = nc.config.sessionTracking) || void 0 === Vc || null === (Vc = Vc.session) || void 0 === Vc ? void 0 : Vc.attributes), null !== (Ic = null === (rB = nc.metas.value.session) || void 0 === rB ? void 0 : rB.attributes) && void 0 !== Ic ? Ic : {}), {}, {
              isSampled: cB.isSampled.toString()
            }))
          }
        }),
        qB = null !== (uc = null === (sc = nc.metas.value.session) || void 0 === sc ? void 0 : sc.overrides) && void 0 !== uc ? uc : null === Bc || void 0 === Bc || null === (Mc = Bc.sessionMeta) || void 0 === Mc ? void 0 : Mc.overrides;
      Rc(qB) || (Pc.sessionMeta.overrides = qB);
      const Oc = null === Bc || void 0 === Bc ? void 0 : Bc.sessionId;
      return null != Oc && (Pc.sessionMeta.attributes.previousSession = Oc), Pc
    }

    function vn(cB) {
      let {
        fetchUserSession: Bc,
        storeUserSession: nc
      } = cB, Vc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ec, Ic = !1;
      return function(cB) {
        if (Ic) return;
        const rB = cB.session,
          uc = Bc();
        let sc = null === rB || void 0 === rB ? void 0 : rB.id;
        const Mc = null === rB || void 0 === rB ? void 0 : rB.attributes,
          Pc = null === rB || void 0 === rB ? void 0 : rB.overrides,
          qB = null === uc || void 0 === uc ? void 0 : uc.sessionMeta,
          Oc = null === qB || void 0 === qB ? void 0 : qB.overrides,
          Tc = !!Pc && !yn(Pc, Oc),
          fc = !!Mc && !yn(Mc, null === qB || void 0 === qB ? void 0 : qB.attributes);
        if (rB && sc !== (null === uc || void 0 === uc ? void 0 : uc.sessionId) || fc || Tc) {
          var mB, ec;
          const cB = null != uc && sc === uc.sessionId,
            Bc = CB(cB ? uc : UB({
              sessionId: sc,
              isSampled: OB(Vc)
            }, Vc), uc, Vc),
            rB = null === uc || void 0 === uc || null === (mB = uc.sessionMeta) || void 0 === mB || null === (mB = mB.attributes) || void 0 === mB ? void 0 : mB.previousSession;
          cB && null != rB && rB !== Bc.sessionId && (Bc.sessionMeta.attributes.previousSession = rB), (null === (ec = Bc.sessionMeta.attributes) || void 0 === ec ? void 0 : ec.previousSession) === Bc.sessionId && delete Bc.sessionMeta.attributes.previousSession, nc(Bc),
            function(cB, Bc) {
              let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              var Ic, rB, uc;
              if (!Bc) return;
              const sc = nc.serviceName,
                Mc = null !== (Ic = null !== (rB = Vc.serviceName) && void 0 !== rB ? rB : null === (uc = cB.metas.value.app) || void 0 === uc ? void 0 : uc.name) && void 0 !== Ic ? Ic : "";
              sc && sc !== Mc && cB.api.pushEvent(LB, {
                serviceName: sc,
                previousServiceName: Mc
              })
            }(Vc, Tc, Pc, Oc), Ic = !0;
          try {
            Vc.api.setSession(Bc.sessionMeta)
          } finally {
            Ic = !1
          }
        }
      }
    }

    function DB(cB) {
      const Bc = {};
      for (const nc of Object.keys(cB)) {
        const Vc = cB[nc];
        void 0 !== Vc && (Bc[nc] = Vc)
      }
      return Bc
    }

    function NB() {
      let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.stringify(null !== cB && void 0 !== cB ? cB : {}, function() {
        const cB = new WeakSet;
        return function(Bc, nc) {
          if (Uc(nc) && null !== nc) {
            if (cB.has(nc)) return null;
            cB.add(nc)
          }
          return nc
        }
      }())
    }

    function EB() {
      let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const Bc = {};
      for (const [nc, Vc] of Object.entries(cB)) Bc[nc] = Uc(Vc) && null !== Vc ? NB(Vc) : String(Vc);
      return Bc
    }
    var oB = class cB {
      constructor() {
        var Bc = this;
        let nc = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ec;
        this.context = nc, this.adopting = !1, this.isAdopting = () => this.adopting, this.adoptSession = cB => {
          this.adopting = !0;
          try {
            var Bc;
            null === (Bc = this.context.api) || void 0 === Bc || Bc.setSession(cB)
          } finally {
            this.adopting = !1
          }
        }, this.updateSession = function() {
          let {
            refreshActivity: cB = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Bc.updateUserSession({
            refreshActivity: cB
          })
        }, this.recordActivity = QB({
          fetchUserSession: cB.fetchUserSession,
          storeUserSession: cB.storeUserSession,
          updateInterval: sc
        }), this.updateUserSession = ZB({
          fetchUserSession: cB.fetchUserSession,
          storeUserSession: cB.storeUserSession,
          adoptSession: this.adoptSession,
          updateInterval: sc
        }, nc), this.init()
      }
      static removeUserSession() {
        nB(Ic, cB.storageTypeLocal)
      }
      static storeUserSession(Bc) {
        BB(Ic, NB(Bc), cB.storageTypeLocal)
      }
      static fetchUserSession() {
        const Bc = cn(Ic, cB.storageTypeLocal);
        return Bc ? JSON.parse(Bc) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var cB;
            this.updateSession({
              refreshActivity: !1
            });
            const Bc = null === (cB = this.context.api) || void 0 === cB || null === (cB = cB.getSession()) || void 0 === cB ? void 0 : cB.id;
            Bc && this.recordActivity(Bc)
          }
        })), this.context.metas.addListener(vn({
          fetchUserSession: cB.fetchUserSession,
          storeUserSession: cB.storeUserSession
        }, this.context))
      }
    };
    oB.storageTypeLocal = Ac;
    var WB = class cB {
      constructor() {
        var Bc = this;
        let nc = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ec;
        this.context = nc, this.isAdopting = () => !1, this.updateSession = function() {
          let {
            refreshActivity: cB = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Bc.updateUserSession({
            refreshActivity: cB
          })
        }, this.recordActivity = QB({
          fetchUserSession: cB.fetchUserSession,
          storeUserSession: cB.storeUserSession,
          updateInterval: sc
        }), this.updateUserSession = ZB({
          fetchUserSession: cB.fetchUserSession,
          storeUserSession: cB.storeUserSession,
          updateInterval: sc
        }, nc), this.init()
      }
      static removeUserSession() {
        nB(Ic, cB.storageTypeSession)
      }
      static storeUserSession(Bc) {
        BB(Ic, NB(Bc), cB.storageTypeSession)
      }
      static fetchUserSession() {
        const Bc = cn(Ic, cB.storageTypeSession);
        return Bc ? JSON.parse(Bc) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var cB;
            this.updateSession({
              refreshActivity: !1
            });
            const Bc = null === (cB = this.context.api) || void 0 === cB || null === (cB = cB.getSession()) || void 0 === cB ? void 0 : cB.id;
            Bc && this.recordActivity(Bc)
          }
        })), this.context.metas.addListener(vn({
          fetchUserSession: cB.fetchUserSession,
          storeUserSession: cB.storeUserSession
        }, this.context))
      }
    };
    WB.storageTypeSession = dc;
    const wB = new WeakMap;

    function kn(cB) {
      let Bc = wB.get(cB);
      if (!Bc) {
        let nc = [],
          Vc = [];
        Bc = {
          addSessionUpdateListener: cB => {
            nc.push(cB)
          },
          removeSessionUpdateListener: cB => {
            nc = nc.filter((Bc => Bc !== cB))
          },
          notifySessionUpdate: cB => {
            nc.forEach((Bc => Bc(cB)))
          },
          shouldCapture: () => Vc.every((cB => cB())),
          addCaptureFilter: cB => {
            Vc.push(cB)
          },
          removeCaptureFilter: cB => {
            Vc = Vc.filter((Bc => Bc !== cB))
          }
        }, wB.set(cB, Bc)
      }
      return Bc
    }
    var XB = class {
      constructor(cB, Bc, nc) {
        this.metas = cB, this.transports = Bc, this.onActivate = nc, this.waiting = !1, this.shouldCapture = () => !document.prerendering, this.discard = () => null, this.recordUpdate = cB => {
          var Bc, nc, Vc;
          const Ic = this.pending;
          var rB, uc;
          if ("overrides" === cB.type) return void(this.pending = {
            reset: null !== (rB = null === Ic || void 0 === Ic ? void 0 : Ic.reset) && void 0 !== rB && rB,
            inheritOverrides: null === (uc = null === Ic || void 0 === Ic ? void 0 : Ic.inheritOverrides) || void 0 === uc || uc,
            session: qn(qn({}, null === Ic || void 0 === Ic ? void 0 : Ic.session), {}, {
              overrides: qn(qn({}, null === Ic || void 0 === Ic ? void 0 : Ic.session.overrides), cB.overrides)
            })
          });
          const sc = cB.session,
            Mc = Rc(sc) || null != sc && "id" in sc && !sc.id,
            Pc = null !== (Bc = null === sc || void 0 === sc ? void 0 : sc.overrides) && void 0 !== Bc ? Bc : null === Ic || void 0 === Ic ? void 0 : Ic.session.overrides;
          this.pending = {
            reset: Mc || !(null === sc || void 0 === sc ? void 0 : sc.id) && null !== (nc = null === Ic || void 0 === Ic ? void 0 : Ic.reset) && void 0 !== nc && nc,
            inheritOverrides: !(!cB.overrides && void 0 !== (null === sc || void 0 === sc ? void 0 : sc.overrides)) && (null === (Vc = null === Ic || void 0 === Ic ? void 0 : Ic.inheritOverrides) || void 0 === Vc || Vc),
            session: {
              id: null === sc || void 0 === sc ? void 0 : sc.id,
              attributes: (null === sc || void 0 === sc ? void 0 : sc.attributes) && qn({}, sc.attributes),
              overrides: cB.overrides ? qn(qn({}, null === Ic || void 0 === Ic ? void 0 : Ic.session.overrides), cB.overrides) : Pc && qn({}, Pc)
            }
          }
        }, this.activate = () => {
          this.waiting && this.shouldCapture() && (this.destroy(), this.onActivate(this.pending))
        }
      }
      initialize() {
        var cB, Bc;
        this.waiting = !0, kn(this.metas).addSessionUpdateListener(this.recordUpdate), kn(this.metas).addCaptureFilter(this.shouldCapture), this.transports.addBeforeSendHooks(this.discard), document.addEventListener("prerenderingchange", this.activate), null === (cB = (Bc = this.metas).addCaptureListener) || void 0 === cB || cB.call(Bc, this.activate), this.activate()
      }
      destroy() {
        var cB, Bc;
        this.waiting = !1, document.removeEventListener("prerenderingchange", this.activate), kn(this.metas).removeSessionUpdateListener(this.recordUpdate), null === (cB = (Bc = this.metas).removeCaptureListener) || void 0 === cB || cB.call(Bc, this.activate), kn(this.metas).removeCaptureFilter(this.shouldCapture), this.transports.removeBeforeSendHooks(this.discard)
      }
    };

    function HB(cB) {
      return (null === cB || void 0 === cB ? void 0 : cB.persistent) ? oB : WB
    }

    function FB() {}
    let JB = function(cB) {
      return cB[cB.OFF = 0] = "OFF", cB[cB.ERROR = 1] = "ERROR", cB[cB.WARN = 2] = "WARN", cB[cB.INFO = 3] = "INFO", cB[cB.VERBOSE = 4] = "VERBOSE", cB
    }({});
    const jn = {
        debug: FB,
        error: FB,
        info: FB,
        prefix: "Faro",
        warn: FB
      },
      RB = 1;

    function KB(cB) {
      return KB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(cB) {
        return typeof cB
      } : function(cB) {
        return cB && "function" == typeof Symbol && cB.constructor === Symbol && cB !== Symbol.prototype ? "symbol" : typeof cB
      }, KB(cB)
    }

    function xn(cB) {
      var Bc = function(cB, Bc) {
        if ("object" != KB(cB) || !cB) return cB;
        var nc = cB[Symbol.toPrimitive];
        if (void 0 !== nc) {
          var Vc = nc.call(cB, Bc || "default");
          if ("object" != KB(Vc)) return Vc;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Bc ? String : Number)(cB)
      }(cB, "string");
      return "symbol" == KB(Bc) ? Bc : Bc + ""
    }

    function dB(cB, Bc, nc) {
      return (Bc = xn(Bc)) in cB ? Object.defineProperty(cB, Bc, {
        value: nc,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : cB[Bc] = nc, cB
    }

    function AB(cB, Bc) {
      var nc = Object.keys(cB);
      if (Object.getOwnPropertySymbols) {
        var Vc = Object.getOwnPropertySymbols(cB);
        Bc && (Vc = Vc.filter((function(Bc) {
          return Object.getOwnPropertyDescriptor(cB, Bc).enumerable
        }))), nc.push.apply(nc, Vc)
      }
      return nc
    }

    function GB(cB) {
      for (var Bc = 1; Bc < arguments.length; Bc++) {
        var nc = null != arguments[Bc] ? arguments[Bc] : {};
        Bc % 2 ? AB(Object(nc), !0).forEach((function(Bc) {
          dB(cB, Bc, nc[Bc])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(cB, Object.getOwnPropertyDescriptors(nc)) : AB(Object(nc)).forEach((function(Bc) {
          Object.defineProperty(cB, Bc, Object.getOwnPropertyDescriptor(nc, Bc))
        }))
      }
      return cB
    }
    const cV = GB({}, console);
    var Bn = class {
        constructor() {
          this.unpatchedConsole = cV, this.internalLogger = jn, this.config = {}, this.metas = {}
        }
        logDebug() {
          for (var cB = arguments.length, Bc = new Array(cB), nc = 0; nc < cB; nc++) Bc[nc] = arguments[nc];
          this.internalLogger.debug(`${this.name}\n`, ...Bc)
        }
        logInfo() {
          for (var cB = arguments.length, Bc = new Array(cB), nc = 0; nc < cB; nc++) Bc[nc] = arguments[nc];
          this.internalLogger.info(`${this.name}\n`, ...Bc)
        }
        logWarn() {
          for (var cB = arguments.length, Bc = new Array(cB), nc = 0; nc < cB; nc++) Bc[nc] = arguments[nc];
          this.internalLogger.warn(`${this.name}\n`, ...Bc)
        }
        logError() {
          for (var cB = arguments.length, Bc = new Array(cB), nc = 0; nc < cB; nc++) Bc[nc] = arguments[nc];
          this.internalLogger.error(`${this.name}\n`, ...Bc)
        }
      },
      nn = class extends Bn {
        constructor() {
          super(...arguments), this.api = {}, this.transports = {}
        }
      };
    const Vn = "2.12.1";
    var In = class extends nn {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-session", this.version = Vn, this.isAdoptingSession = () => !1
      }
      sendSessionStartEvent(cB) {
        var Bc;
        const nc = cB.session;
        if (nc && nc.id !== (null === (Bc = this.notifiedSession) || void 0 === Bc ? void 0 : Bc.id)) {
          var Vc;
          if (this.isAdoptingSession()) return void(this.notifiedSession = nc);
          if (this.notifiedSession && this.notifiedSession.id === (null === (Vc = nc.attributes) || void 0 === Vc ? void 0 : Vc.previousSession)) return this.api.pushEvent(YB, {}, void 0, {
            skipDedupe: !0
          }), void(this.notifiedSession = nc);
          this.notifiedSession = nc, this.api.pushEvent(an, {}, void 0, {
            skipDedupe: !0
          })
        }
      }
      createInitialSession(cB, Bc, nc) {
        const Vc = null === nc || void 0 === nc ? void 0 : nc.session;
        let Ic, rB, uc = cB.fetchUserSession();
        if (Bc.persistent && Bc.maxSessionPersistenceTime && uc) {
          const cB = TB();
          uc.lastActivity < cB - Bc.maxSessionPersistenceTime && (oB.removeUserSession(), uc = null)
        }
        const sc = bn(uc);
        if ((null === nc || void 0 === nc ? void 0 : nc.reset) || !sc || (null === Vc || void 0 === Vc ? void 0 : Vc.id) && Vc.id !== (null === uc || void 0 === uc ? void 0 : uc.sessionId)) {
          var Mc, Pc, qB, Oc, Tc, fc;
          rB = UB({
            sessionId: (null === nc || void 0 === nc ? void 0 : nc.reset) ? void 0 : null !== (Mc = null === Vc || void 0 === Vc ? void 0 : Vc.id) && void 0 !== Mc ? Mc : null === (Pc = Bc.session) || void 0 === Pc ? void 0 : Pc.id,
            isSampled: OB(this)
          }, this);
          const cB = rB.sessionId,
            mB = nc && sc ? null === uc || void 0 === uc || null === (qB = uc.sessionMeta) || void 0 === qB ? void 0 : qB.overrides : void 0,
            ec = mB ? qn(qn({}, null === (Oc = Bc.session) || void 0 === Oc ? void 0 : Oc.overrides), mB) : null === (Tc = Bc.session) || void 0 === Tc ? void 0 : Tc.overrides;
          rB.sessionMeta = qn({
            id: cB,
            attributes: qn({
              isSampled: rB.isSampled.toString()
            }, null === (fc = Bc.session) || void 0 === fc ? void 0 : fc.attributes)
          }, ec ? {
            overrides: ec
          } : {}), Ic = an
        } else {
          var mB, ec;
          const cB = null === uc || void 0 === uc ? void 0 : uc.sessionId;
          rB = UB({
            sessionId: cB,
            isSampled: uc.isSampled || !1,
            started: null === uc || void 0 === uc ? void 0 : uc.started
          }, this);
          const nc = null === uc || void 0 === uc ? void 0 : uc.sessionMeta,
            Vc = qn(qn({}, null === (mB = Bc.session) || void 0 === mB ? void 0 : mB.overrides), null === nc || void 0 === nc ? void 0 : nc.overrides);
          rB.sessionMeta = qn(qn({}, Bc.session), {}, {
            id: cB,
            attributes: qn(qn(qn({}, null === (ec = Bc.session) || void 0 === ec ? void 0 : ec.attributes), null === nc || void 0 === nc ? void 0 : nc.attributes), {}, {
              isSampled: rB.isSampled.toString()
            }),
            overrides: Vc
          }), Ic = lB
        }
        var tB;
        if (Vc && (rB.sessionMeta = qn(qn({}, rB.sessionMeta), {}, {
            attributes: qn(qn(qn({}, null === (tB = rB.sessionMeta) || void 0 === tB ? void 0 : tB.attributes), Vc.attributes), {}, {
              isSampled: rB.isSampled.toString()
            })
          }), Vc.overrides)) {
          const cB = (null === nc || void 0 === nc ? void 0 : nc.inheritOverrides) ? qn(qn({}, rB.sessionMeta.overrides), Vc.overrides) : Vc.overrides;
          Object.keys(cB).length > 0 ? rB.sessionMeta.overrides = cB : delete rB.sessionMeta.overrides
        }
        return {
          initialSession: rB,
          lifecycleType: Ic
        }
      }
      registerBeforeSendHook(cB) {
        var Bc;
        this.beforeSendHook = Bc => {
          var nc, Vc;
          const Ic = null === (nc = Bc.meta.session) || void 0 === nc ? void 0 : nc.id;
          Ic && !this.transports.isPaused() && cB(Ic);
          const rB = null === (Vc = Bc.meta.session) || void 0 === Vc ? void 0 : Vc.attributes;
          if (rB && "true" === (null === rB || void 0 === rB ? void 0 : rB.isSampled)) {
            var uc;
            let cB = JSON.parse(JSON.stringify(Bc));
            const nc = null === (uc = cB.meta.session) || void 0 === uc ? void 0 : uc.attributes;
            var sc;
            if (null === nc || void 0 === nc || delete nc.isSampled, 0 === Object.keys(null !== nc && void 0 !== nc ? nc : {}).length) null === (sc = cB.meta.session) || void 0 === sc || delete sc.attributes;
            return cB
          }
          return null
        }, null === (Bc = this.transports) || void 0 === Bc || Bc.addBeforeSendHooks(this.beforeSendHook)
      }
      initialize() {
        var cB;
        this.logDebug("init session instrumentation");
        const Bc = document.prerendering;
        var nc;
        if ((null === (cB = this.config.sessionTracking) || void 0 === cB ? void 0 : cB.enabled) && (Bc || this.prerenderSession)) return null !== (nc = this.prerenderSession) && void 0 !== nc || (this.prerenderSession = new XB(this.metas, this.transports, (cB => {
          this.prerenderSession = void 0, this.initializeSession(cB)
        }))), void this.prerenderSession.initialize();
        this.initializeSession()
      }
      initializeSession(cB) {
        const Bc = this.config.sessionTracking;
        if (null === Bc || void 0 === Bc ? void 0 : Bc.enabled) {
          var nc, Vc;
          const Ic = HB(Bc),
            rB = new Ic(this);
          this.isAdoptingSession = rB.isAdopting, this.registerBeforeSendHook(rB.recordActivity);
          const {
            initialSession: uc,
            lifecycleType: sc
          } = this.createInitialSession(Ic, Bc, cB);
          Ic.storeUserSession(uc);
          const Mc = uc.sessionMeta;
          this.notifiedSession = Mc, this.api.setSession(Mc), this.captureListener = () => {
            this.transports.isPaused() || rB.updateSession({
              refreshActivity: !1
            })
          }, null === (nc = (Vc = this.metas).addCaptureListener) || void 0 === nc || nc.call(Vc, this.captureListener), sc === an && this.api.pushEvent(an, {}, void 0, {
            skipDedupe: !0
          }), sc === lB && this.api.pushEvent(lB, {}, void 0, {
            skipDedupe: !0
          })
        }
        this.sessionStartListener = this.sendSessionStartEvent.bind(this), this.metas.addListener(this.sessionStartListener)
      }
      destroy() {
        var cB, Bc, nc;
        (null === (cB = this.prerenderSession) || void 0 === cB || cB.destroy(), this.captureListener) && (null === (Bc = (nc = this.metas).removeCaptureListener) || void 0 === Bc || Bc.call(nc, this.captureListener), this.captureListener = void 0);
        this.beforeSendHook && (this.transports.removeBeforeSendHooks(this.beforeSendHook), this.beforeSendHook = void 0), this.sessionStartListener && (this.metas.removeListener(this.sessionStartListener), this.sessionStartListener = void 0)
      }
    };

    function rV(cB, Bc, nc, Vc) {
      const Ic = {
        filename: cB || document.location.href,
        function: Bc || "?"
      };
      return void 0 !== nc && (Ic.lineno = nc), void 0 !== Vc && (Ic.colno = Vc), Ic
    }
    const un = /^\s*at (?:(?![a-z]+:\/\/)([^(]+?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      sn = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      Mn = /^(?=[\s\S]*?(?:\/|bundle|\.js|\[native code]))\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      Pn = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      qV = "safari-extension",
      On = "safari-web-extension",
      Tn = /Minified React error #\d+;/i;

    function fn(cB, Bc) {
      const nc = null === cB || void 0 === cB ? void 0 : cB.includes(qV),
        Vc = !nc && (null === cB || void 0 === cB ? void 0 : cB.includes("safari-web-extension"));
      return nc || Vc ? [(null === cB || void 0 === cB ? void 0 : cB.includes("@")) ? cB.split("@")[0] : cB, nc ? `${qV}:${Bc}` : `${On}:${Bc}`] : [cB, Bc]
    }
    const mV = 1024;

    function en(cB) {
      let Bc = [];
      cB.stacktrace ? Bc = cB.stacktrace.split("\n").filter(((cB, Bc) => Bc % 2 === 0)) : cB.stack && (Bc = cB.stack.split("\n"));
      const nc = Bc.reduce(((Bc, nc, Vc) => {
        if (nc.length > mV) return Bc;
        let Ic, rB, uc, sc, Mc;
        if (Ic = un.exec(nc)) {
          if (rB = Ic[1], uc = Ic[2], sc = Ic[3], Mc = Ic[4], null === uc || void 0 === uc ? void 0 : uc.startsWith("eval")) {
            const cB = sn.exec(uc);
            cB && (uc = cB[1], sc = cB[2], Mc = cB[3])
          }
          uc = (null === uc || void 0 === uc ? void 0 : uc.startsWith("address at ")) ? uc.substring(11) : uc, [rB, uc] = fn(rB, uc)
        } else if (Ic = Mn.exec(nc)) {
          if (rB = Ic[1], uc = Ic[3], sc = Ic[4], Mc = Ic[5], uc && uc.includes(" > eval")) {
            const cB = Pn.exec(uc);
            cB && (rB = rB || "eval", uc = cB[1], sc = cB[2])
          } else 0 === Vc && !Mc && lc(cB.columnNumber) && (Mc = String(cB.columnNumber + 1));
          [rB, uc] = fn(rB, uc)
        }
        return (uc || rB) && Bc.push(rV(uc, rB, sc ? Number(sc) : void 0, Mc ? Number(Mc) : void 0)), Bc
      }), []);
      return Tn.test(cB.message) ? nc.slice(1) : nc
    }

    function tV(cB) {
      return {
        frames: en(cB)
      }
    }
    const Sn = "http-request-start",
      yV = "http-request-end";
    var zV = class cB {
      constructor() {
        this.subscribers = []
      }
      subscribe(cB) {
        return this.subscribers.push(cB), {
          unsubscribe: () => this.unsubscribe(cB)
        }
      }
      unsubscribe(cB) {
        this.subscribers = this.subscribers.filter((Bc => Bc !== cB))
      }
      notify(cB) {
        this.subscribers.forEach((Bc => Bc(cB)))
      }
      first() {
        const Bc = new cB,
          nc = cB => {
            Bc.notify(cB), Vc.unsubscribe()
          },
          Vc = this.subscribe(nc),
          Ic = Bc.unsubscribe.bind(Bc);
        return this.withUnsubscribeOverride(Bc, Ic, nc)
      }
      takeWhile(Bc) {
        const nc = new cB,
          Vc = cB => {
            Bc(cB) ? nc.notify(cB) : nc.unsubscribe(Vc)
          };
        this.subscribe(Vc);
        const Ic = nc.unsubscribe.bind(nc);
        return this.withUnsubscribeOverride(nc, Ic, Vc)
      }
      filter(Bc) {
        const nc = new cB,
          Vc = cB => {
            Bc(cB) && nc.notify(cB)
          };
        this.subscribe(Vc);
        const Ic = nc.unsubscribe.bind(nc);
        return this.withUnsubscribeOverride(nc, Ic, Vc)
      }
      merge() {
        const Bc = new cB,
          nc = [];
        for (var Vc = arguments.length, Ic = new Array(Vc), rB = 0; rB < Vc; rB++) Ic[rB] = arguments[rB];
        Ic.forEach((cB => {
          const Vc = cB.subscribe((cB => {
            Bc.notify(cB)
          }));
          nc.push(Vc)
        }));
        const uc = Bc.unsubscribeAll.bind(Bc);
        return Bc.unsubscribe = () => {
          nc.forEach((cB => cB.unsubscribe())), uc()
        }, Bc
      }
      withUnsubscribeOverride(cB, Bc, nc) {
        return cB.unsubscribe = cB => {
          Bc(cB), this.unsubscribe(nc)
        }, cB
      }
      unsubscribeAll() {
        this.subscribers = []
      }
    };
    let pn = function(cB) {
      return cB.TRACE = "trace", cB.DEBUG = "debug", cB.INFO = "info", cB.LOG = "log", cB.WARN = "warn", cB.ERROR = "error", cB
    }({});
    const hn = "log",
      aV = ["trace", "debug", "info", "log", "warn", "error"];
    let lnc, Yn = !1;
    const Ln = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
      gV = "Error",
      Un = cB => cB.map((cB => Uc(cB) ? NB(cB) : String(cB))).join(" ");

    function bV(cB) {
      let Bc, nc, Vc, Ic, rB = [];
      if (Wc(cB) && cB.error) Bc = cB.error.message, nc = cB.error.name, rB = en(cB.error);
      else if ((Vc = wc(cB)) || kB(cB)) {
        const {
          name: Ic,
          message: rB
        } = cB;
        nc = null !== Ic && void 0 !== Ic ? Ic : Vc ? "DOMError" : "DOMException", Bc = rB ? `${nc}: ${rB}` : nc
      } else oc(cB) ? (nc = cB.name, Bc = cB.message, rB = en(cB)) : (Uc(cB) || (Ic = Nc(cB))) && (nc = Ic ? cB.constructor.name : void 0, Bc = `Non-Error exception captured with keys: ${Object.keys(cB)}`);
      return [Bc, nc, rB]
    }

    function Zn(cB) {
      const [Bc, nc, Vc, Ic, rB] = cB;
      let uc, sc, Mc = [];
      const Pc = aB(Bc),
        qB = rV(nc, "?", Vc, Ic);
      return rB || !Pc ? ([uc, sc, Mc] = bV(null !== rB && void 0 !== rB ? rB : Bc), 0 === Mc.length && (Mc = [qB])) : Pc && ([uc, sc] = function(cB) {
        var Bc, nc;
        const Vc = cB.match(Ln),
          Ic = null !== (Bc = null === Vc || void 0 === Vc ? void 0 : Vc[1]) && void 0 !== Bc ? Bc : gV;
        return [null !== (nc = null === Vc || void 0 === Vc ? void 0 : Vc[2]) && void 0 !== nc ? nc : cB, Ic]
      }(Bc), Mc = [qB]), {
        value: uc,
        type: sc,
        stackFrames: Mc
      }
    }

    function Qn(cB, Bc) {
      return oc(cB[0]) ? Zn(cB) : {
        value: Bc(cB)
      }
    }
    const Cn = cB => cB.map((cB => {
      try {
        return String(cB)
      } catch (Bc) {
        return ""
      }
    })).join(" ");
    var vV = class cB extends nn {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-console", this.version = Vn, this.errorSerializer = Cn
      }
      initialize() {
        var Bc, nc;
        const Vc = this.config.consoleInstrumentation,
          Ic = (null === Vc || void 0 === Vc ? void 0 : Vc.serializeErrors) || !!(null === Vc || void 0 === Vc ? void 0 : Vc.errorSerializer);
        this.errorSerializer = Ic ? null !== (Bc = null === Vc || void 0 === Vc ? void 0 : Vc.errorSerializer) && void 0 !== Bc ? Bc : Un : Cn;
        const rB = null !== (nc = null === Vc || void 0 === Vc ? void 0 : Vc.disabledLevels) && void 0 !== nc ? nc : cB.defaultDisabledLevels,
          uc = function(cB) {
            if (lnc || (lnc = new zV), !Yn) {
              const Bc = null !== cB && void 0 !== cB ? cB : cV;
              aV.forEach((cB => {
                console[cB] = function() {
                  for (var nc, Vc = arguments.length, Ic = new Array(Vc), rB = 0; rB < Vc; rB++) Ic[rB] = arguments[rB];
                  lnc.notify({
                    type: "console",
                    level: cB,
                    args: Ic
                  }), null === (nc = Bc[cB]) || void 0 === nc || nc.apply(console, Ic)
                }
              })), Yn = !0
            }
            return lnc
          }(this.unpatchedConsole);
        this.subscription = uc.subscribe((Bc => {
          let {
            level: nc,
            args: Ic
          } = Bc;
          if (!rB.includes(nc)) try {
            if (nc !== pn.ERROR || (null === Vc || void 0 === Vc ? void 0 : Vc.consoleErrorAsLog))
              if (nc === pn.ERROR && (null === Vc || void 0 === Vc ? void 0 : Vc.consoleErrorAsLog)) {
                const {
                  value: Bc,
                  type: Vc,
                  stackFrames: rB
                } = Qn(Ic, this.errorSerializer);
                this.api.pushLog(Bc ? [cB.consoleErrorPrefix + Bc] : Ic, {
                  level: nc,
                  context: {
                    value: null !== Bc && void 0 !== Bc ? Bc : "",
                    type: null !== Vc && void 0 !== Vc ? Vc : "",
                    stackFrames: (null === rB || void 0 === rB ? void 0 : rB.length) ? Un(rB) : ""
                  }
                })
              } else this.api.pushLog(Ic, {
                level: nc
              });
            else {
              const {
                value: Bc,
                type: nc,
                stackFrames: Vc
              } = Qn(Ic, this.errorSerializer);
              if (Bc && !nc && !Vc) return void this.api.pushError(new Error(cB.consoleErrorPrefix + Bc));
              this.api.pushError(new Error(cB.consoleErrorPrefix + Bc), {
                type: nc,
                stackFrames: Vc
              })
            }
          } catch (uc) {
            this.logError(uc)
          }
        }))
      }
      destroy() {
        var cB;
        null === (cB = this.subscription) || void 0 === cB || cB.unsubscribe(), this.subscription = void 0
      }
    };
    vV.defaultDisabledLevels = [pn.DEBUG, pn.TRACE, pn.LOG], vV.consoleErrorPrefix = "console.error: ";
    const Dn = [];
    var Nn = class extends nn {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-errors", this.version = Vn
      }
      initialize() {
        this.logDebug("Initializing"),
          function(cB) {
            const Bc = window.onerror;
            window.onerror = function() {
              for (var nc = arguments.length, Vc = new Array(nc), Ic = 0; Ic < nc; Ic++) Vc[Ic] = arguments[Ic];
              try {
                const {
                  value: Bc,
                  type: nc,
                  stackFrames: Ic
                } = Zn(Vc), rB = Vc[4];
                if (Bc) {
                  const Vc = {
                    type: nc,
                    stackFrames: Ic
                  };
                  null != rB && (Vc.originalError = rB), cB.pushError(new Error(Bc), Vc)
                }
              } finally {
                null === Bc || void 0 === Bc || Bc.apply(window, Vc)
              }
            }
          }(this.api),
          function(cB) {
            const Bc = Bc => {
              var nc;
              let Vc, Ic, rB = Bc;
              if (rB.reason) rB = Bc.reason;
              else if (null === (nc = Bc.detail) || void 0 === nc ? void 0 : nc.reason) {
                var uc;
                rB = null === (uc = Bc.detail) || void 0 === uc ? void 0 : uc.reason
              }
              let sc = [];
              vB(rB) ? (Vc = `Non-Error promise rejection captured with value: ${String(rB)}`, Ic = "UnhandledRejection") : [Vc, Ic, sc] = bV(rB), Vc && cB.pushError(new Error(Vc), {
                type: Ic,
                stackFrames: sc
              })
            };
            window.addEventListener("unhandledrejection", Bc), Dn.push(Bc)
          }(this.api)
      }
    };
    const En = "unknown";
    var onc = class extends nn {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-view", this.version = Vn, this.waitingForActivation = !1, this.sendViewChangedEvent = cB => {
          var Bc;
          if (this.waitingForActivation || document.prerendering) return;
          const nc = cB.view;
          if (nc && nc.name !== (null === (Bc = this.notifiedView) || void 0 === Bc ? void 0 : Bc.name)) {
            var Vc, Ic, rB;
            const cB = null !== (Vc = null === (Ic = this.notifiedView) || void 0 === Ic ? void 0 : Ic.name) && void 0 !== Vc ? Vc : En;
            this.notifiedView = nc, this.api.pushEvent(hB, {
              fromView: cB,
              toView: null !== (rB = nc.name) && void 0 !== rB ? rB : En
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
    class Wn {
      t;
      o = 0;
      i = [];
      l(cB) {
        if (cB.hadRecentInput) return;
        const Bc = this.i[0],
          nc = this.i.at(-1);
        this.o && Bc && nc && cB.startTime - nc.startTime < 1e3 && cB.startTime - Bc.startTime < 5e3 ? (this.o += cB.value, this.i.push(cB)) : (this.o = cB.value, this.i = [cB]), this.t?.(cB)
      }
    }
    const wn = () => {
        const cB = performance.getEntriesByType("navigation")[0];
        if (cB && cB.responseStart > 0 && cB.responseStart < performance.now()) return cB
      },
      kV = cB => {
        if ("loading" === document.readyState) return "loading";
        const Bc = wn();
        if (Bc) {
          if (cB < Bc.domInteractive) return "loading";
          if (0 === Bc.domContentLoadedEventStart || cB < Bc.domContentLoadedEventStart) return "dom-interactive";
          if (0 === Bc.domComplete || cB < Bc.domComplete) return "dom-content-loaded"
        }
        return "complete"
      },
      Xn = cB => {
        const Bc = cB.nodeName;
        return 1 === cB.nodeType ? Bc.toLowerCase() : Bc.toUpperCase().replace(/^#/, "")
      },
      Hn = cB => {
        let Bc = "";
        try {
          for (; 9 !== cB?.nodeType;) {
            const nc = cB,
              Vc = nc.id ? "#" + nc.id : [Xn(nc), ...Array.from(nc.classList ?? []).sort()].join(".");
            if (Bc.length + Vc.length > 99) return Bc || Vc;
            if (Bc = Bc ? Vc + ">" + Bc : Vc, nc.id) break;
            cB = nc.parentNode
          }
        } catch {}
        return Bc
      },
      Fn = new WeakMap;

    function Jn(cB, Bc) {
      let nc = Fn.get(Bc);
      return nc || (nc = new WeakMap, Fn.set(Bc, nc)), nc.get(cB) || nc.set(cB, new Bc), nc.get(cB)
    }
    let jV = -1;
    const Rn = () => jV,
      iV = cB => {
        addEventListener("pageshow", (Bc => {
          Bc.persisted && (jV = Bc.timeStamp, cB(Bc))
        }), !0)
      },
      Kn = (cB, Bc, nc, Vc) => {
        let Ic, rB;
        return uc => {
          Bc.value >= 0 && (uc || Vc) && (rB = Bc.value - (Ic ?? 0), (rB || void 0 === Ic) && (Ic = Bc.value, Bc.delta = rB, Bc.rating = ((cB, Bc) => cB > Bc[1] ? "poor" : cB > Bc[0] ? "needs-improvement" : "good")(Bc.value, nc), cB(Bc)))
        }
      },
      xV = cB => {
        requestAnimationFrame((() => requestAnimationFrame((() => cB()))))
      },
      dn = () => wn()?.activationStart ?? 0;
    let An = -1;
    const Gn = new Set,
      cI = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
      BV = cB => {
        if ("hidden" === document.visibilityState) {
          if ("visibilitychange" === cB.type)
            for (const cB of Gn) cB();
          isFinite(An) || (An = "visibilitychange" === cB.type ? cB.timeStamp : 0, removeEventListener("prerenderingchange", BV, !0))
        }
      },
      nV = function() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (An = 1 / 0), An < 0) {
          const cB = dn(),
            Bc = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find((Bc => "hidden" === Bc.name && Bc.startTime >= cB))?.startTime;
          An = Bc ?? cI(), addEventListener("visibilitychange", BV, !0), addEventListener("prerenderingchange", BV, !0), iV((() => {
            setTimeout((() => {
              An = cI()
            }))
          }))
        }
        return {
          get firstHiddenTime() {
            return An
          },
          onHidden(cB) {
            Gn.add(cB)
          }
        }
      },
      VV = function(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          nc = arguments.length > 2 ? arguments[2] : void 0,
          Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Ic = arguments.length > 4 ? arguments[4] : void 0,
          rB = arguments.length > 5 ? arguments[5] : void 0,
          uc = arguments.length > 6 ? arguments[6] : void 0;
        const sc = wn(),
          Mc = sc?.navigationId || 0;
        let Pc = "navigate";
        return nc ? Pc = nc : Rn() >= 0 ? Pc = "back-forward-cache" : sc && (document.prerendering || dn() > 0 ? Pc = "prerender" : document.wasDiscarded ? Pc = "restore" : sc.type && (Pc = sc.type.replace(/_/g, "-"))), {
          name: cB,
          value: Bc,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
          navigationType: Pc,
          navigationId: Vc || Mc,
          navigationInteractionId: Ic,
          navigationURL: rB || sc?.name,
          navigationStartTime: uc || 0
        }
      },
      IV = function(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          const Vc = cB.filter((cB => PerformanceObserver.supportedEntryTypes.includes(cB)));
          if (Vc.length > 0) {
            const cB = new PerformanceObserver((cB => {
              queueMicrotask((() => {
                const nc = cB.getEntries();
                Vc.length > 1 && nc.sort(((cB, Bc) => cB.startTime + cB.duration - (Bc.startTime + Bc.duration))), Bc(nc)
              }))
            }));
            for (const Bc of Vc) cB.observe({
              type: Bc,
              buffered: !0,
              ...nc
            });
            return cB
          }
        } catch {}
      },
      rI = cB => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && cB && cB.reportSoftNavs,
      uV = (cB, Bc) => {
        if (cB.set(Bc.navigationId, Bc), cB.size > 2) {
          const Bc = cB.keys().next().value;
          void 0 !== Bc && cB.delete(Bc)
        }
      },
      sV = cB => {
        let Bc = !1;
        return () => {
          Bc || (cB(), Bc = !0)
        }
      };
    class MV {
      u
    }
    const PV = cB => {
        document.prerendering ? addEventListener("prerenderingchange", cB, !0) : cB()
      },
      qI = [1800, 3e3],
      OV = function(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const nc = rI(Bc);
        PV((() => {
          const Vc = Jn(Bc, MV),
            Ic = nV();
          let rB, uc = VV("FCP");
          const sc = IV(["paint"], (cB => {
            for (const Bc of cB) "first-contentful-paint" === Bc.name && (sc.disconnect(), Bc.startTime < Ic.firstHiddenTime && (uc.value = Math.max(Bc.startTime - dn(), 0), uc.entries.push(Bc), uc.navigationId = Bc.navigationId || uc.navigationId, rB(!0)))
          }));
          sc && (rB = Kn(cB, uc, qI, Bc.reportAllChanges), iV((nc => {
            uc = VV("FCP", -1, "back-forward-cache", uc.navigationId, uc.navigationInteractionId, uc.navigationURL, Rn()), rB = Kn(cB, uc, qI, Bc.reportAllChanges), xV((() => {
              uc.value = performance.now() - nc.timeStamp, rB(!0)
            }))
          }))), nc && IV(["soft-navigation"], (nc => {
            nc.forEach((nc => {
              Vc.u && nc.navigationId && uV(Vc.u, nc);
              const Ic = Math.max((nc.presentationTime || nc.paintTime || 0) - nc.startTime, 0);
              uc = VV("FCP", Ic, "soft-navigation", nc.navigationId, nc.interactionId, nc.name, nc.startTime), rB = Kn(cB, uc, qI, Bc.reportAllChanges), rB(!0)
            }))
          }), Bc)
        }))
      },
      TV = [.1, .25],
      fV = cB => cB.find((cB => 1 === cB.node?.nodeType)) || cB[0];
    let mI = 0,
      eV = 1 / 0,
      tI = 0;
    const SV = cB => {
      for (const Bc of cB) Bc.interactionId && (eV = Math.min(eV, Bc.interactionId), tI = Math.max(tI, Bc.interactionId), mI = tI ? (tI - eV) / 7 + 1 : 0)
    };
    let yI;
    const zI = () => yI ? mI : performance.interactionCount ?? 0;
    class pV {
      h = 0;
      v = [];
      p = new Map;
      m;
      M;
      T() {
        return zI() - this.h
      }
      D() {
        this.h = zI(), this.v.length = 0, this.p.clear()
      }
      S(cB) {
        const Bc = this.T(),
          nc = Math.min(this.v.length - 1, Math.floor(Bc / 50));
        return !Bc || -1 !== nc || "soft-navigation" !== cB && "back-forward-cache" !== cB ? this.v[nc] : {
          k: 8,
          id: -1,
          entries: []
        }
      }
      l(cB) {
        if (this.m?.(cB), !cB.interactionId) return;
        const Bc = this.v.at(-1);
        let nc = this.p.get(cB.interactionId);
        if (nc || this.v.length < 10 || cB.duration > Bc.k) {
          if (nc ? cB.duration > nc.k ? (nc.entries = [cB], nc.k = cB.duration) : cB.duration === nc.k && cB.startTime === nc.entries[0].startTime && nc.entries.push(cB) : (nc = {
              id: cB.interactionId,
              entries: [cB],
              k: cB.duration
            }, this.p.set(nc.id, nc), this.v.push(nc)), this.v.sort(((cB, Bc) => Bc.k - cB.k)), this.v.length > 10) {
            const cB = this.v.splice(10);
            for (const Bc of cB) this.p.delete(Bc.id)
          }
          this.M?.(nc)
        }
      }
    }
    const hV = cB => {
        const Bc = "requestIdleCallback" in globalThis ? 1e3 : 0,
          nc = globalThis.requestIdleCallback || setTimeout,
          Vc = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) cB();
        else {
          const Ic = sV(cB);
          let rB = -1;
          const uc = () => {
            Vc(rB), Ic()
          };
          addEventListener("visibilitychange", uc, {
            once: !0,
            capture: !0
          }), rB = nc((() => {
            removeEventListener("visibilitychange", uc, {
              capture: !0
            }), Ic()
          }), {
            timeout: Bc
          })
        }
      },
      aI = [200, 500],
      lV = function(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const nc = Jn(Bc = Object.assign({}, Bc), pV);
        let Vc = [],
          Ic = [],
          rB = 0;
        const uc = new WeakMap,
          sc = new WeakMap;
        let Mc = !1;
        const Pc = () => {
            Mc || (Mc = !0, hV(qB))
          },
          qB = () => {
            const cB = new Set(nc.v.map((cB => uc.get(cB.entries[0])))),
              Bc = Ic.length - 10;
            Ic = Ic.filter(((nc, Vc) => Vc >= Bc || cB.has(nc)));
            const sc = new Set;
            for (const nc of Ic) {
              const cB = Oc(nc.startTime, nc.processingEnd);
              for (const Bc of cB) sc.add(Bc)
            }
            const Pc = Vc.length - 10;
            Vc = Vc.filter(((cB, Bc) => sc.has(cB) || Bc >= Pc && cB.startTime > rB)), Mc = !1
          };
        nc.m = cB => {
          const nc = cB.startTime + cB.duration;
          let Vc;
          rB = Math.max(rB, cB.processingEnd);
          for (let rB = Ic.length - 1; rB >= 0; rB--) {
            const uc = Ic[rB];
            if (Math.abs(nc - uc.renderTime) <= 8) {
              Vc = uc, Vc.startTime = Math.min(cB.startTime, Vc.startTime), Vc.processingStart = Math.min(cB.processingStart, Vc.processingStart), Vc.processingEnd = Math.max(cB.processingEnd, Vc.processingEnd), Bc.includeProcessedEventEntries && Vc.entries.push(cB);
              break
            }
          }
          Vc || (Vc = {
            startTime: cB.startTime,
            processingStart: cB.processingStart,
            processingEnd: cB.processingEnd,
            renderTime: nc,
            entries: Bc.includeProcessedEventEntries ? [cB] : []
          }, Ic.push(Vc)), cB.interactionId && uc.set(cB, Vc), Pc()
        }, nc.M = cB => {
          if (!sc.get(cB)) {
            const nc = cB.entries.find((cB => cB.target))?.target;
            if (nc) {
              const Vc = Bc.generateTarget?.(nc) ?? Hn(nc);
              sc.set(cB, Vc)
            } else {
              const Bc = cB.entries.find((cB => cB.targetSelector))?.targetSelector;
              Bc && sc.set(cB, Bc)
            }
          }
        };
        const Oc = (cB, Bc) => {
          const nc = [];
          for (const Ic of Vc)
            if (!(Ic.startTime + Ic.duration < cB)) {
              if (Ic.startTime > Bc) break;
              nc.push(Ic)
            } return nc
        };
        IV(["long-animation-frame"], (cB => {
            Vc = Vc.concat(cB), Pc()
          }), Bc),
          function(cB) {
            let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
            const nc = nV();
            PV((() => {
              "interactionCount" in performance || yI || (yI = IV(["event"], SV, {
                durationThreshold: 0
              }));
              let Vc, Ic = VV("INP");
              const rB = Jn(Bc, pV),
                uc = (nc, uc, sc, Mc, Pc) => {
                  rB.D(), Ic = VV("INP", -1, nc, uc, sc, Mc, Pc), Vc = Kn(cB, Ic, aI, Bc.reportAllChanges)
                },
                sc = () => {
                  const cB = rB.S(Ic.navigationType);
                  cB && cB.k !== Ic.value && (Ic.value = cB.k, Ic.entries = cB.entries, Vc())
                },
                Mc = cB => {
                  sc(), Vc(!0), uc("soft-navigation", cB.navigationId, cB.interactionId, cB.name, cB.startTime)
                },
                Pc = function(cB) {
                  let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  hV((() => {
                    for (const Bc of cB) "soft-navigation" !== Bc.entryType ? rB.l(Bc) : Mc(Bc);
                    sc(), Bc && Vc(!0)
                  }))
                },
                qB = ["event", "first-input"];
              rI(Bc) && qB.push("soft-navigation");
              const Oc = IV(qB, Pc, {
                ...Bc,
                durationThreshold: Bc.durationThreshold ?? 40
              });
              Vc = Kn(cB, Ic, aI, Bc.reportAllChanges), Oc && (nc.onHidden((() => {
                Pc(Oc.takeRecords(), !0)
              })), iV((() => {
                uc("back-forward-cache", Ic.navigationId, Ic.navigationInteractionId, Ic.navigationURL, Rn())
              })))
            }))
          }((Bc => {
            cB((cB => {
              if (0 === cB.entries.length) {
                const Bc = cB.navigationStartTime || 0,
                  nc = {
                    processedEventEntries: [],
                    longAnimationFrameEntries: [],
                    inputDelay: 0,
                    processingDuration: 0,
                    presentationDelay: cB.value,
                    loadState: kV(Bc)
                  };
                return Object.assign(cB, {
                  attribution: nc
                })
              }
              const Bc = cB.entries[0],
                Vc = uc.get(Bc),
                Ic = Math.max(Vc.processingStart, Bc.startTime),
                rB = Math.max(Bc.startTime + Bc.duration, Ic),
                Mc = Math.min(Vc.processingEnd, rB),
                Pc = Vc.entries.sort(((cB, Bc) => cB.processingStart - Bc.processingStart)),
                qB = Oc(Bc.startTime, Mc),
                Tc = nc.p.get(Bc.interactionId),
                fc = {
                  interactionTarget: sc.get(Tc),
                  interactionType: Bc.name.startsWith("key") ? "keyboard" : "pointer",
                  interactionTime: Bc.startTime,
                  nextPaintTime: rB,
                  processedEventEntries: Pc,
                  longAnimationFrameEntries: qB,
                  inputDelay: Ic - Bc.startTime,
                  processingDuration: Mc - Ic,
                  presentationDelay: rB - Mc,
                  loadState: kV(Bc.startTime),
                  longestScript: void 0,
                  totalScriptDuration: void 0,
                  totalStyleAndLayoutDuration: void 0,
                  totalPaintDuration: void 0,
                  totalUnattributedDuration: void 0
                };
              return (cB => {
                const Bc = cB.interactionTime,
                  nc = cB.nextPaintTime;
                if (!cB.longAnimationFrameEntries?.length || !Bc || !nc) return;
                const Vc = cB.inputDelay,
                  Ic = cB.processingDuration;
                let rB, uc, sc = 0,
                  Mc = 0,
                  Pc = 0,
                  qB = 0;
                for (const fc of cB.longAnimationFrameEntries) {
                  Mc = Mc + fc.startTime + fc.duration - fc.styleAndLayoutStart;
                  for (const cB of fc.scripts) {
                    const nc = cB.startTime + cB.duration;
                    if (nc < Bc) continue;
                    const Pc = nc - Math.max(Bc, cB.startTime),
                      Oc = cB.duration ? Pc / cB.duration * cB.forcedStyleAndLayoutDuration : 0;
                    sc += Pc - Oc, Mc += Oc, Pc > qB && (uc = cB.startTime < Bc + Vc ? "input-delay" : cB.startTime >= Bc + Vc + Ic ? "presentation-delay" : "processing-duration", rB = cB, qB = Pc)
                  }
                }
                const Oc = cB.longAnimationFrameEntries.at(-1),
                  Tc = Oc ? Oc.startTime + Oc.duration : 0;
                Tc >= Bc + Vc + Ic && (Pc = nc - Tc), rB && uc && (cB.longestScript = {
                  entry: rB,
                  subpart: uc,
                  intersectingDuration: qB
                }), cB.totalScriptDuration = sc, cB.totalStyleAndLayoutDuration = Mc, cB.totalPaintDuration = Pc, cB.totalUnattributedDuration = nc - Bc - sc - Mc - Pc
              })(fc), Object.assign(cB, {
                attribution: fc
              })
            })(Bc))
          }), Bc)
      };
    class YV {
      m;
      u;
      l(cB) {
        this.m?.(cB)
      }
    }
    const LV = [2500, 4e3];
    let gI = 50;
    const UV = [];
    IV(["resource"], (cB => {
      for (const Bc of cB) UV.push(Bc), UV.length > gI && UV.shift()
    }));
    const bI = [800, 1800],
      ZV = cB => {
        document.prerendering ? PV((() => ZV(cB))) : "complete" !== document.readyState ? addEventListener("load", (() => ZV(cB)), !0) : setTimeout(cB)
      },
      QV = "load_state",
      CV = "time_to_first_byte";
    var vI = class {
        constructor(cB, Bc) {
          this.corePushMeasurement = cB, this.webVitalConfig = Bc
        }
        initialize() {
          this.measureCLS(), this.measureFCP(), this.measureINP(), this.measureLCP(), this.measureTTFB()
        }
        measureCLS() {
          var cB;
          ! function(cB) {
            let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const nc = Jn(Bc = Object.assign({}, Bc), Wn),
              Vc = new WeakMap;
            nc.t = cB => {
                if (cB?.sources?.length) {
                  const nc = fV(cB.sources),
                    Ic = nc?.node;
                  if (Ic) {
                    const cB = Bc.generateTarget?.(Ic) ?? Hn(Ic);
                    Vc.set(nc, cB)
                  }
                }
              },
              function(cB) {
                let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const nc = nV();
                OV(sV((() => {
                  let Vc, Ic = VV("CLS", 0);
                  const rB = Jn(Bc, Wn),
                    uc = (nc, uc, sc, Mc, Pc) => {
                      Ic = VV("CLS", 0, nc, uc, sc, Mc, Pc), rB.o = 0, Vc = Kn(cB, Ic, TV, Bc.reportAllChanges)
                    },
                    sc = function() {
                      let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      rB.o > Ic.value && (Ic.value = rB.o, Ic.entries = rB.i), Vc(cB)
                    },
                    Mc = cB => {
                      sc(!0), uc("soft-navigation", cB.navigationId, cB.interactionId, cB.name, cB.startTime)
                    },
                    Pc = cB => {
                      for (const Bc of cB) "soft-navigation" !== Bc.entryType ? rB.l(Bc) : Mc(Bc);
                      sc()
                    },
                    qB = ["layout-shift"];
                  rI(Bc) && qB.push("soft-navigation");
                  const Oc = IV(qB, Pc);
                  Oc && (Vc = Kn(cB, Ic, TV, Bc.reportAllChanges), nc.onHidden((() => {
                    Pc(Oc.takeRecords()), Vc(!0)
                  })), iV((() => {
                    uc("back-forward-cache", Ic.navigationId, Ic.navigationInteractionId, Ic.navigationURL, Rn()), xV(Vc)
                  })), setTimeout(Vc))
                })))
              }((Bc => {
                cB((cB => {
                  let Bc = {};
                  if (cB.entries.length) {
                    const nc = cB.entries.reduce(((cB, Bc) => cB.value > Bc.value ? cB : Bc));
                    if (nc?.sources?.length) {
                      const cB = fV(nc.sources);
                      cB && (Bc = {
                        largestShiftTarget: Vc.get(cB),
                        largestShiftTime: nc.startTime,
                        largestShiftValue: nc.value,
                        largestShiftSource: cB,
                        largestShiftEntry: nc,
                        loadState: kV(nc.startTime)
                      })
                    }
                  }
                  return Object.assign(cB, {
                    attribution: Bc
                  })
                })(Bc))
              }), Bc)
          }((cB => {
            const {
              loadState: Bc,
              largestShiftValue: nc,
              largestShiftTime: Vc,
              largestShiftTarget: Ic
            } = cB.attribution, rB = this.buildInitialValues(cB);
            this.addIfPresent(rB, "largest_shift_value", nc), this.addIfPresent(rB, "largest_shift_time", Vc);
            const uc = this.buildInitialContext(cB);
            this.addIfPresent(uc, QV, Bc), this.addIfPresent(uc, "largest_shift_target", Ic), this.pushMeasurement(rB, uc)
          }), {
            reportAllChanges: null === (cB = this.webVitalConfig) || void 0 === cB ? void 0 : cB.reportAllChanges
          })
        }
        measureFCP() {
          var cB;
          ! function(cB) {
            let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const nc = Jn(Bc = Object.assign({}, Bc), MV);
            rI(Bc) && (nc.u = new Map), OV((Bc => {
              cB((cB => {
                let Bc = {
                  timeToFirstByte: 0,
                  firstByteToFCP: cB.value,
                  loadState: kV(Rn())
                };
                if ("soft-navigation" !== cB.navigationType) {
                  if (cB.entries.length) {
                    const nc = wn(),
                      Vc = cB.entries.at(-1);
                    if (nc) {
                      const Ic = nc.responseStart,
                        rB = nc.activationStart || 0,
                        uc = Math.max(0, Ic - rB);
                      Bc = {
                        timeToFirstByte: uc,
                        firstByteToFCP: cB.value - uc,
                        loadState: kV(cB.entries[0].startTime),
                        navigationEntry: nc,
                        fcpEntry: Vc
                      }
                    }
                  }
                } else {
                  const Vc = nc.u?.get(cB.navigationId);
                  Vc && (Bc = {
                    timeToFirstByte: 0,
                    firstByteToFCP: cB.value,
                    loadState: "complete",
                    navigationEntry: Vc
                  })
                }
                return Object.assign(cB, {
                  attribution: Bc
                })
              })(Bc))
            }), Bc)
          }((cB => {
            const {
              firstByteToFCP: Bc,
              timeToFirstByte: nc,
              loadState: Vc
            } = cB.attribution, Ic = this.buildInitialValues(cB);
            this.addIfPresent(Ic, "first_byte_to_fcp", Bc), this.addIfPresent(Ic, CV, nc);
            const rB = this.buildInitialContext(cB);
            this.addIfPresent(rB, QV, Vc), this.pushMeasurement(Ic, rB)
          }), {
            reportAllChanges: null === (cB = this.webVitalConfig) || void 0 === cB ? void 0 : cB.reportAllChanges
          })
        }
        measureINP() {
          var cB;
          lV((cB => {
            var Bc;
            const {
              interactionTime: nc,
              presentationDelay: Vc,
              inputDelay: Ic,
              processingDuration: rB,
              nextPaintTime: uc,
              loadState: sc,
              interactionTarget: Mc,
              interactionType: Pc,
              totalScriptDuration: qB,
              totalStyleAndLayoutDuration: Oc,
              totalPaintDuration: Tc,
              totalUnattributedDuration: fc,
              longestScript: mB
            } = cB.attribution, ec = this.buildInitialValues(cB);
            this.addIfPresent(ec, "interaction_time", nc), this.addIfPresent(ec, "presentation_delay", Vc), this.addIfPresent(ec, "input_delay", Ic), this.addIfPresent(ec, "processing_duration", rB), this.addIfPresent(ec, "next_paint_time", uc), this.addNumberIfDefined(ec, "total_script_duration", qB), this.addNumberIfDefined(ec, "total_style_and_layout_duration", Oc), this.addNumberIfDefined(ec, "total_paint_duration", Tc), this.addNumberIfDefined(ec, "total_unattributed_duration", fc), this.addNumberIfDefined(ec, "longest_script_intersecting_duration", null === mB || void 0 === mB ? void 0 : mB.intersectingDuration);
            const tB = this.buildInitialContext(cB);
            this.addIfPresent(tB, QV, sc), this.addIfPresent(tB, "interaction_target", Mc), this.addIfPresent(tB, "interaction_type", Pc), this.addIfPresent(tB, "longest_script_subpart", null === mB || void 0 === mB ? void 0 : mB.subpart), this.addIfPresent(tB, "longest_script_invoker_type", null === mB || void 0 === mB ? void 0 : mB.entry.invokerType), (null === (Bc = this.webVitalConfig) || void 0 === Bc ? void 0 : Bc.trackAttributionSources) && (this.addIfPresent(tB, "longest_script_invoker", null === mB || void 0 === mB ? void 0 : mB.entry.invoker), this.addIfPresent(tB, "longest_script_source_url", null === mB || void 0 === mB ? void 0 : mB.entry.sourceURL), this.addIfPresent(tB, "longest_script_source_function_name", null === mB || void 0 === mB ? void 0 : mB.entry.sourceFunctionName), this.addIfPresent(tB, "longest_script_source_char_position", void 0 !== (null === mB || void 0 === mB ? void 0 : mB.entry.sourceCharPosition) ? String(mB.entry.sourceCharPosition) : void 0)), this.pushMeasurement(ec, tB)
          }), {
            reportAllChanges: null === (cB = this.webVitalConfig) || void 0 === cB ? void 0 : cB.reportAllChanges
          })
        }
        measureLCP() {
          var cB;
          ! function(cB) {
            let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            null != (Bc = Object.assign({}, Bc)).resourceBufferSize && (gI = Bc.resourceBufferSize);
            const nc = Jn(Bc, YV),
              Vc = new WeakMap;
            rI(Bc) && (nc.u = new Map), nc.m = cB => {
                const nc = cB.element;
                if (nc) {
                  const Ic = Bc.generateTarget?.(nc) ?? Hn(nc);
                  Vc.set(cB, Ic)
                } else cB.id && Vc.set(cB, `#${cB.id}`)
              },
              function(cB) {
                let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  nc = !1;
                const Vc = rI(Bc);
                PV((() => {
                  let Ic, rB = nV(),
                    uc = VV("LCP");
                  const sc = Jn(Bc, YV),
                    Mc = (Vc, sc, Mc, Pc, qB) => {
                      uc = VV("LCP", -1, Vc, sc, Mc, Pc, qB), Ic = Kn(cB, uc, LV, Bc.reportAllChanges), nc = !1, "soft-navigation" === Vc && (rB = nV(!0))
                    },
                    Pc = cB => {
                      sc.u && cB.navigationId && uV(sc.u, cB), nc || Ic(!0), Mc("soft-navigation", cB.navigationId, cB.interactionId, cB.name, cB.startTime);
                      const Bc = cB.getLargestInteractionContentfulPaint?.();
                      Bc && qB([Bc])
                    },
                    qB = cB => {
                      Bc.reportAllChanges || Vc || (cB = cB.slice(-1));
                      for (const Bc of cB) {
                        if (!Bc) continue;
                        if ("soft-navigation" === Bc.entryType) {
                          Pc(Bc);
                          continue
                        }
                        let cB = 0,
                          nc = [],
                          Vc = Bc.startTime;
                        if ("largest-contentful-paint" === Bc.entryType) cB = Math.max(Bc.startTime - dn(), 0), sc.l(Bc), nc = [Bc];
                        else if ("interaction-contentful-paint" === Bc.entryType) {
                          const Ic = Bc;
                          if (!uc.navigationId) continue;
                          if ("interactionId" in Ic && Ic.interactionId != uc.navigationInteractionId) continue;
                          Vc = Ic.largestContentfulPaint?.renderTime || 0, cB = Math.max(Vc - Bc.startTime, 0), Ic.largestContentfulPaint && (sc.l(Ic.largestContentfulPaint), nc = [Ic.largestContentfulPaint])
                        }
                        Vc < rB.firstHiddenTime && (uc.value = cB, uc.entries = nc, Ic())
                      }
                    },
                    Oc = ["largest-contentful-paint"];
                  Vc && Oc.push("interaction-contentful-paint", "soft-navigation");
                  const Tc = IV(Oc, qB);
                  if (Tc) {
                    Ic = Kn(cB, uc, LV, Bc.reportAllChanges);
                    const rB = ["keydown", "click", "visibilitychange"],
                      sc = cB => {
                        if (cB.isTrusted && !nc) {
                          const cB = uc.id;
                          hV((() => {
                            if (!nc) {
                              if (!Vc) {
                                Tc.disconnect();
                                for (const cB of rB) removeEventListener(cB, sc, {
                                  capture: !0
                                })
                              }
                              cB === uc.id && (nc = !0, Ic(!0))
                            }
                          }))
                        }
                      };
                    for (const cB of rB) addEventListener(cB, sc, {
                      capture: !0
                    });
                    iV((Vc => {
                      Mc("back-forward-cache", uc.navigationId, uc.navigationInteractionId, uc.navigationURL, Rn()), Ic = Kn(cB, uc, LV, Bc.reportAllChanges), xV((() => {
                        uc.value = performance.now() - Vc.timeStamp, nc = !0, Ic(!0)
                      }))
                    }))
                  }
                }))
              }((Bc => {
                cB((cB => {
                  let Bc = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadDuration: 0,
                    elementRenderDelay: cB.value
                  };
                  if (cB.entries.length) {
                    const Ic = cB.entries.at(-1),
                      rB = cB => cB.name === Ic.url && (cB.requestStart || cB.startTime) <= Ic.startTime,
                      uc = Ic.url && (UV.findLast(rB) || performance.getEntriesByType("resource").findLast(rB));
                    let sc;
                    Bc.target = Vc.get(Ic), Bc.lcpEntry = Ic, Ic.url && (Bc.url = Ic.url), uc && (Bc.lcpResourceEntry = uc);
                    let Mc = 0,
                      Pc = 0;
                    if ("soft-navigation" !== cB.navigationType ? (sc = wn(), Mc = sc?.activationStart ?? 0, Pc = sc?.responseStart ?? 0) : (Mc = cB.navigationStartTime || 0, sc = nc.u?.get(cB.navigationId)), sc) {
                      const nc = Math.max(0, Pc - Mc),
                        Vc = Math.max(nc, uc ? (uc.requestStart || uc.startTime) - Mc : 0),
                        Ic = Math.min(cB.value, Math.max(Vc, uc ? uc.responseEnd - Mc : 0));
                      Bc = {
                        ...Bc,
                        timeToFirstByte: nc,
                        resourceLoadDelay: Vc - nc,
                        resourceLoadDuration: Ic - Vc,
                        elementRenderDelay: cB.value - Ic,
                        navigationEntry: sc
                      }
                    }
                  }
                  return Object.assign(cB, {
                    attribution: Bc
                  })
                })(Bc))
              }), Bc)
          }((cB => {
            var Bc;
            const {
              elementRenderDelay: nc,
              resourceLoadDelay: Vc,
              resourceLoadDuration: Ic,
              timeToFirstByte: rB,
              target: uc,
              url: sc,
              lcpResourceEntry: Mc
            } = cB.attribution, Pc = this.buildInitialValues(cB);
            this.addIfPresent(Pc, "element_render_delay", nc), this.addIfPresent(Pc, "resource_load_delay", Vc), this.addIfPresent(Pc, "resource_load_duration", Ic), this.addIfPresent(Pc, CV, rB);
            const qB = this.buildInitialContext(cB);
            this.addIfPresent(qB, "element", uc), (null === (Bc = this.webVitalConfig) || void 0 === Bc ? void 0 : Bc.trackAttributionSources) && (this.addIfPresent(qB, "resource_url", sc), this.addIfPresent(qB, "resource_delivery_type", null === Mc || void 0 === Mc ? void 0 : Mc.deliveryType), this.addIfPresent(qB, "resource_initiator_type", null === Mc || void 0 === Mc ? void 0 : Mc.initiatorType)), this.pushMeasurement(Pc, qB)
          }), {
            reportAllChanges: null === (cB = this.webVitalConfig) || void 0 === cB ? void 0 : cB.reportAllChanges
          })
        }
        measureTTFB() {
          var cB;
          ! function(cB) {
            ! function(cB) {
              let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const nc = rI(Bc);
              let Vc = VV("TTFB"),
                Ic = Kn(cB, Vc, bI, Bc.reportAllChanges);
              ZV((() => {
                const rB = wn();
                if (rB) {
                  const uc = rB.responseStart;
                  Vc.value = Math.max(uc - dn(), 0), Vc.entries = [rB], Ic(!0), iV((() => {
                    Vc = VV("TTFB", 0, "back-forward-cache", Vc.navigationId, Vc.navigationInteractionId, Vc.navigationURL, Rn()), Ic = Kn(cB, Vc, bI, Bc.reportAllChanges), Ic(!0)
                  })), nc && IV(["soft-navigation"], (nc => {
                    nc.forEach((nc => {
                      nc.navigationId && (Vc = VV("TTFB", 0, "soft-navigation", nc.navigationId, nc.interactionId, nc.name, nc.startTime), Vc.entries = [nc], Ic = Kn(cB, Vc, bI, Bc.reportAllChanges), Ic(!0))
                    }))
                  }), Bc)
                }
              }))
            }((Bc => {
              cB((cB => {
                const Bc = cB.entries[0];
                let nc = {
                  waitingDuration: 0,
                  cacheDuration: 0,
                  dnsDuration: 0,
                  connectionDuration: 0,
                  requestDuration: 0,
                  navigationEntry: Bc
                };
                if (cB.entries.length && Bc instanceof PerformanceNavigationTiming) {
                  const Vc = Bc.activationStart || 0,
                    Ic = Math.max((Bc.workerStart || Bc.fetchStart || 0) - Vc, 0),
                    rB = Math.max(Bc.domainLookupStart - Vc, 0),
                    uc = Math.max(Bc.connectStart - Vc, 0),
                    sc = Math.max(Bc.connectEnd - Vc, 0);
                  nc = {
                    waitingDuration: Ic,
                    cacheDuration: rB - Ic,
                    dnsDuration: uc - rB,
                    connectionDuration: sc - uc,
                    requestDuration: cB.value - sc,
                    navigationEntry: Bc
                  }
                }
                return Object.assign(cB, {
                  attribution: nc
                })
              })(Bc))
            }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }((cB => {
            const {
              dnsDuration: Bc,
              connectionDuration: nc,
              requestDuration: Vc,
              waitingDuration: Ic,
              cacheDuration: rB
            } = cB.attribution, uc = this.buildInitialValues(cB);
            this.addIfPresent(uc, "dns_duration", Bc), this.addIfPresent(uc, "connection_duration", nc), this.addIfPresent(uc, "request_duration", Vc), this.addIfPresent(uc, "waiting_duration", Ic), this.addIfPresent(uc, "cache_duration", rB);
            const sc = this.buildInitialContext(cB);
            this.pushMeasurement(uc, sc)
          }), {
            reportAllChanges: null === (cB = this.webVitalConfig) || void 0 === cB ? void 0 : cB.reportAllChanges
          })
        }
        buildInitialValues(cB) {
          return {
            [cB.name.toLowerCase()]: cB.value,
            delta: cB.delta
          }
        }
        buildInitialContext(cB) {
          var Bc;
          const nc = null !== (Bc = cn("com.grafana.faro.lastNavigationId", dc)) && void 0 !== Bc ? Bc : En;
          return {
            id: cB.id,
            rating: cB.rating,
            navigation_type: cB.navigationType,
            navigation_entry_id: nc
          }
        }
        pushMeasurement(cB, Bc) {
          this.corePushMeasurement({
            type: "web-vitals",
            values: cB
          }, {
            context: Bc
          })
        }
        addIfPresent(cB, Bc, nc) {
          nc && (cB[Bc] = nc)
        }
        addNumberIfDefined(cB, Bc, nc) {
          void 0 !== nc && (cB[Bc] = nc)
        }
      },
      DV = class extends nn {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-web-vitals", this.version = Vn
        }
        initialize() {
          this.logDebug("Initializing"), new vI(this.api.pushMeasurement, this.config.webVitalsInstrumentation).initialize()
        }
      };
    const NV = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;

    function EV() {
      let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      for (const Bc of cB)
        if ("traceparent" === Bc.name) {
          if (!NV.test(Bc.description)) continue;
          const [, cB, nc] = Bc.description.split("-");
          if (null != cB && null != nc) return {
            traceId: cB,
            spanId: nc
          };
          break
        }
    }

    function oV(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        wallNow: Date.now(),
        monoNow: performance.now()
      };
      const {
        wallNow: nc,
        monoNow: Vc
      } = Bc;
      return Math.min(nc, nc - (Vc - cB))
    }

    function WV(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      for (const [nc, Vc] of Object.entries(Bc)) {
        const Bc = cB[nc];
        return null != Bc && (Zc(Vc) ? Vc.includes(Bc) : Bc === Vc)
      }
      return !0
    }

    function wV(cB) {
      const {
        connectEnd: Bc,
        connectStart: nc,
        decodedBodySize: Vc,
        domainLookupEnd: Ic,
        domainLookupStart: rB,
        duration: uc,
        encodedBodySize: sc,
        fetchStart: Mc,
        initiatorType: Pc,
        name: qB,
        nextHopProtocol: Oc,
        redirectEnd: Tc,
        redirectStart: fc,
        renderBlockingStatus: mB,
        requestStart: ec,
        responseEnd: tB,
        responseStart: Sc,
        responseStatus: yB,
        secureConnectionStart: zB,
        transferSize: pc,
        workerStart: hc
      } = cB;
      return {
        name: qB,
        httpHost: XV(qB),
        duration: HV(uc),
        tcpHandshakeTime: HV(Bc - nc),
        dnsLookupTime: HV(Ic - rB),
        tlsNegotiationTime: HV(Bc - zB),
        responseStatus: HV(yB),
        redirectTime: HV(Tc - fc),
        requestTime: HV(Sc - ec),
        responseTime: HV(tB - Sc),
        fetchTime: HV(tB - Mc),
        serviceWorkerTime: HV(hc > 0 ? Mc - hc : 0),
        decodedBodySize: HV(Vc),
        encodedBodySize: HV(sc),
        cacheHitStatus: function() {
          let cB = "fullLoad";
          0 === pc ? Vc > 0 && (cB = "cache") : null != yB ? 304 === yB && (cB = "conditionalFetch") : sc > 0 && pc < sc && (cB = "conditionalFetch");
          return cB
        }(),
        renderBlockingStatus: HV(mB),
        protocol: Oc,
        initiatorType: Pc,
        visibilityState: document.visibilityState,
        ttfb: HV(Sc - ec),
        transferSize: HV(pc)
      }
    }

    function kI(cB) {
      const {
        activationStart: Bc,
        domComplete: nc,
        domContentLoadedEventEnd: Vc,
        domContentLoadedEventStart: Ic,
        domInteractive: rB,
        fetchStart: uc,
        loadEventEnd: sc,
        loadEventStart: Mc,
        responseStart: Pc,
        type: qB
      } = cB, Oc = function() {
        var cB;
        return null != (null === (cB = performance.timing) || void 0 === cB ? void 0 : cB.domLoading) ? performance.timing.domLoading - performance.timeOrigin : null
      }();
      return qn(qn({}, wV(cB)), {}, {
        pageLoadTime: HV(nc - uc),
        documentParsingTime: HV(Oc ? rB - Oc : null),
        domProcessingTime: HV(nc - rB),
        domContentLoadHandlerTime: HV(Vc - Ic),
        onLoadTime: HV(sc - Mc),
        ttfb: HV(Math.max(Pc - (null !== Bc && void 0 !== Bc ? Bc : 0), 0)),
        type: qB
      })
    }

    function XV(cB) {
      try {
        return new URL(cB).host || En
      } catch (Bc) {
        return En
      }
    }

    function HV(cB) {
      return null == cB ? En : "number" === typeof cB ? Math.round(cB > 0 ? cB : 0).toString() : cB.toString()
    }
    const FV = {
      initiatorType: ["xmlhttprequest", "fetch"]
    };

    function JV(cB, Bc, nc, Vc, Ic, rB, uc) {
      try {
        var sc = cB[rB](uc),
          Mc = sc.value
      } catch (cB) {
        return void nc(cB)
      }
      sc.done ? Bc(Mc) : Promise.resolve(Mc).then(Vc, Ic)
    }

    function jI(cB) {
      return function() {
        var Bc = this,
          nc = arguments;
        return new Promise((function(Vc, Ic) {
          var rB = cB.apply(Bc, nc);

          function uc(cB) {
            JV(rB, Vc, Ic, uc, sc, "next", cB)
          }

          function sc(cB) {
            JV(rB, Vc, Ic, uc, sc, "throw", cB)
          }
          uc(void 0)
        }))
      }
    }
    const RV = new zV;
    var iI = class extends nn {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-performance", this.version = Vn
      }
      initialize() {
        var cB = this;
        if (!("PerformanceObserver" in window)) return void this.logDebug("performance observer not supported. Disable performance instrumentation.");
        let Bc = !1;
        const nc = () => {
          ! function(cB) {
            if ("complete" === document.readyState) cB();
            else {
              const Bc = () => {
                "complete" === document.readyState && (cB(), document.removeEventListener("readystatechange", Bc))
              };
              document.addEventListener("readystatechange", Bc)
            }
          }(jI((function*() {
            if (Bc) return;
            const nc = cB.api.pushEvent,
              {
                faroNavigationId: Vc
              } = yield function(cB) {
                let Bc;
                const nc = new Promise((cB => {
                  Bc = cB
                }));
                return new PerformanceObserver((nc => {
                  var Vc;
                  const [Ic] = nc.getEntries();
                  if (null == Ic || Kc(Ic.name)) return;
                  const rB = Ic.toJSON();
                  let uc = EV(null === rB || void 0 === rB ? void 0 : rB.serverTiming);
                  const sc = null !== (Vc = cn("com.grafana.faro.lastNavigationId", dc)) && void 0 !== Vc ? Vc : En,
                    Mc = qn(qn({}, kI(rB)), {}, {
                      faroNavigationId: SB(),
                      faroPreviousNavigationId: sc
                    });
                  BB("com.grafana.faro.lastNavigationId", Mc.faroNavigationId, dc), cB("faro.performance.navigation", Mc, void 0, {
                    spanContext: uc,
                    timestampOverwriteMs: oV(rB.startTime)
                  }), Bc(Mc)
                })).observe({
                  type: "navigation",
                  buffered: !0
                }), nc
              }(nc);
            Bc || null == Vc || function(cB, Bc, nc, Vc) {
              const Ic = Vc.trackResources;
              new PerformanceObserver((Vc => {
                const rB = Vc.getEntries(),
                  uc = {
                    wallNow: Date.now(),
                    monoNow: performance.now()
                  };
                for (const sc of rB) {
                  if (Kc(sc.name)) continue;
                  null === nc || void 0 === nc || nc.notify({
                    type: "resource"
                  });
                  const Vc = sc.toJSON();
                  let rB = EV(null === Vc || void 0 === Vc ? void 0 : Vc.serverTiming);
                  (null == Ic && WV(Vc, FV) || Ic) && Bc("faro.performance.resource", qn(qn({}, wV(Vc)), {}, {
                    faroNavigationId: cB,
                    faroResourceId: SB()
                  }), void 0, {
                    spanContext: rB,
                    timestampOverwriteMs: oV(Vc.startTime, uc)
                  })
                }
              })).observe({
                type: "resource",
                buffered: !0
              })
            }(Vc, nc, RV, cB.config)
          })))
        };
        this.cancelInitialization = () => {
          Bc = !0, document.removeEventListener("prerenderingchange", nc)
        }, document.prerendering ? document.addEventListener("prerenderingchange", nc, {
          once: !0
        }) : nc()
      }
      destroy() {
        var cB;
        null === (cB = this.cancelInitialization) || void 0 === cB || cB.call(this), this.cancelInitialization = void 0
      }
    };
    const KV = "data-faro-user-action-name",
      xI = KV.replace(/-name$/, "-timeout"),
      dV = 1e3;

    function AV(cB) {
      return `data-${(cB.startsWith("data-")?cB.slice(5):cB).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
    }

    function GV(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
        nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : FB;
      if (void 0 === cB) return Bc;
      let Vc = NaN;
      try {
        Vc = "string" === typeof cB && "" === cB.trim() ? NaN : Number(cB)
      } catch (Ic) {}
      return !Number.isFinite(Vc) || Vc <= 0 ? (nc(`initialActivityTimeout must be a finite number greater than zero; using ${Bc} ms`), Bc) : Vc > 1e3 ? (nc(`initialActivityTimeout cannot exceed ${dV} ms; clamping to the maximum`), dV) : Vc
    }

    function cr(cB, Bc, nc) {
      return void 0 !== cB && window.clearTimeout(cB), window.setTimeout((() => {
        Bc()
      }), nc)
    }

    function BI(cB) {
      return cB.type === yV
    }
    let nI, VI;

    function II() {
      return nI || (nI = new zV), VI || (VI = new MutationObserver(((cB, Bc) => {
        nI.notify({
          type: "dom-mutation"
        })
      })), VI.observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0
      })), nI
    }
    const rr = "fetch",
      uI = "xhr";
    let sI, MI, PI, qr, OI = !1;

    function TI() {
      if (sI) return sI;

      function cB(cB) {
        sI.notify({
          type: Sn,
          request: cB
        })
      }

      function Bc(cB) {
        sI.notify({
          type: yV,
          request: cB
        })
      }
      return sI = new zV, OI || (! function(cB) {
        let {
          onRequestEnd: Bc,
          onRequestStart: nc
        } = cB;
        PI || (PI = window.fetch);
        window.fetch = function() {
          var cB, Vc;
          const Ic = null !== (cB = xB(arguments[0])) && void 0 !== cB ? cB : "",
            rB = Kc(Ic),
            uc = (null !== (Vc = arguments[1]) && void 0 !== Vc ? Vc : {}).method,
            sc = SB();
          return rB || nc({
            url: Ic,
            method: uc,
            requestId: sc,
            apiType: rr
          }), PI.apply(this, arguments).then((cB => (rB || Bc({
            url: Ic,
            method: uc,
            requestId: sc,
            apiType: rr
          }), cB))).catch((cB => {
            throw rB || Bc({
              url: Ic,
              method: uc,
              requestId: sc,
              apiType: rr
            }), cB
          }))
        }
      }({
        onRequestStart: cB,
        onRequestEnd: Bc
      }), function(cB) {
        let {
          onRequestStart: Bc,
          onRequestEnd: nc
        } = cB;
        MI || (MI = XMLHttpRequest.prototype.open);
        XMLHttpRequest.prototype.open = function() {
          const cB = arguments[1],
            Vc = Kc(cB),
            Ic = arguments[0],
            rB = SB();
          this.addEventListener("loadstart", (function() {
            Vc || Bc({
              url: cB,
              method: Ic,
              requestId: rB,
              apiType: uI
            })
          })), this.addEventListener("load", (function() {
            Vc || nc({
              url: cB,
              method: Ic,
              requestId: rB,
              apiType: uI
            })
          })), this.addEventListener("error", (function() {
            Vc || nc({
              url: cB,
              method: Ic,
              requestId: rB,
              apiType: uI
            })
          })), this.addEventListener("abort", (function() {
            Vc || nc({
              url: cB,
              method: Ic,
              requestId: rB,
              apiType: uI
            })
          })), MI.apply(this, arguments)
        }
      }({
        onRequestStart: cB,
        onRequestEnd: Bc
      }), OI = !0), sI
    }
    let fI, mr = !1;
    let eI = function(cB) {
      return cB[cB.Started = 0] = "Started", cB[cB.Halted = 1] = "Halted", cB[cB.Cancelled = 2] = "Cancelled", cB[cB.Ended = 3] = "Ended", cB
    }({});
    var tr = class {
      constructor(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        this.userAction = cB, this.logDebug = Bc, this.initialActivityTimeout = nc, this.http = TI(), this.dom = II(), this.perf = (qr || (qr = new zV), mr || (fI = RV.subscribe((cB => {
          "resource" === cB.type && qr.notify({
            type: "resource-entry"
          })
        })), mr = !0), qr), this.isValid = !1, this.runningRequests = new Map
      }
      attach() {
        this.allMonitorsSub = (new zV).merge(this.http, this.dom, this.perf).takeWhile((() => [eI.Started, eI.Halted].includes(this.userAction.getState()))).filter((cB => !!(this.userAction.getState() !== eI.Halted || BI(cB) && this.runningRequests.has(cB.request.requestId)))).subscribe((cB => {
          (function(cB) {
            return cB.type === Sn
          })(cB) && this.runningRequests.set(cB.request.requestId, cB.request), BI(cB) && this.runningRequests.delete(cB.request.requestId), BI(cB) ? this.userAction.getState() === eI.Halted && 0 === this.runningRequests.size && this.endAction() : (this.isValid || (this.isValid = !0, this.clearTimer(this.startupTid)), this.scheduleFollowUp())
        })), this.stateSub = this.userAction.filter((cB => [eI.Ended, eI.Cancelled].includes(cB))).first().subscribe((() => this.cleanup())), this.startupTid = cr(this.startupTid, (() => {
          this.logDebug("User action not sent; no DOM, resource, or HTTP activity:", this.userAction.name), this.cancelAction()
        }), this.initialActivityTimeout)
      }
      scheduleFollowUp() {
        this.clearTimer(this.followUpTid), this.followUpTid = window.setTimeout((() => {
          this.userAction.getState() === eI.Started && this.runningRequests.size > 0 ? this.haltAction() : this.isValid ? this.endAction() : this.cancelAction()
        }), 100)
      }
      haltAction() {
        this.userAction.getState() === eI.Started && (this.userAction.halt(), this.startHaltTimeout())
      }
      startHaltTimeout() {
        this.clearTimer(this.haltTid), this.haltTid = cr(this.haltTid, (() => {
          this.userAction.getState() === eI.Halted && this.endAction()
        }), 1e4)
      }
      endAction() {
        this.userAction.end(), this.cleanup()
      }
      cancelAction() {
        this.userAction.cancel(), this.cleanup()
      }
      cleanup() {
        var cB, Bc;
        this.clearTimer(this.startupTid), this.clearTimer(this.followUpTid), this.clearTimer(this.haltTid), null === (cB = this.allMonitorsSub) || void 0 === cB || cB.unsubscribe(), null === (Bc = this.stateSub) || void 0 === Bc || Bc.unsubscribe(), this.allMonitorsSub = void 0, this.stateSub = void 0, this.runningRequests.clear()
      }
      clearTimer(cB) {
        void 0 !== cB && window.clearTimeout(cB)
      }
    };

    function SI(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : FB;
      var nc;
      const {
        api: Vc,
        config: Ic,
        internalLogger: rB
      } = cB, uc = GV(null === (nc = Ic.userActionsInstrumentation) || void 0 === nc ? void 0 : nc.initialActivityTimeout, 100, Bc);
      return {
        processUserEvent: function(cB) {
          var Bc, nc;
          const rB = null !== (Bc = null === (nc = Ic.userActionsInstrumentation) || void 0 === nc ? void 0 : nc.dataAttributeName) && void 0 !== Bc ? Bc : KV,
            uc = cB.target;
          if (!(uc instanceof Element)) return;
          const sc = function(cB, Bc) {
              let nc = cB;
              for (; nc;) {
                if (nc.hasAttribute(Bc)) return nc;
                nc = nc.parentElement
              }
              return null
            }(uc, AV(rB)),
            Mc = function(cB, Bc) {
              if (!cB) return;
              const nc = function(cB) {
                  return AV(cB).slice(5).replace(/-(.)/g, ((cB, Bc) => Bc.toUpperCase()))
                }(Bc),
                Vc = cB.dataset;
              for (const Ic in Vc)
                if (Ic === nc) return Vc[Ic]
            }(sc, rB);
          if (!sc || !Mc) return;
          const Pc = function(cB, Bc) {
            const nc = cB.getAttribute(function(cB) {
              const Bc = AV(cB);
              return Bc.endsWith("-name") ? `${Bc.slice(0,-5)}-timeout` : `${Bc}-timeout`
            }(Bc));
            return null === nc ? void 0 : Number(nc)
          }(sc, rB);
          Vc.startUserAction(Mc, {}, {
            triggerName: cB.type,
            initialActivityTimeout: Pc
          })
        },
        processUserActionStarted: function(cB, nc) {
          const Vc = cB,
            Ic = GV(nc, uc, Bc);
          new tr(Vc, rB.debug, Ic).attach()
        }
      }
    }
    const yr = "user_action_start",
      zr = {
        Normal: "normal",
        Critical: "critical"
      };
    var pI = class {
        constructor() {
          this.buffer = []
        }
        addItem(cB) {
          this.buffer.push(cB)
        }
        flushBuffer(cB) {
          if (bB(cB))
            for (const Bc of this.buffer) cB(Bc);
          this.buffer.length = 0
        }
        size() {
          return this.buffer.length
        }
      },
      hI = class extends zV {
        constructor(cB) {
          let {
            name: Bc,
            parentId: nc,
            trigger: Vc,
            transports: Ic,
            attributes: rB,
            trackUserActionsExcludeItem: uc,
            importance: sc = zr.Normal,
            pushEvent: Mc
          } = cB;
          super(), this.name = Bc, this.attributes = rB, this.id = SB(), this.trigger = Vc, this.parentId = null !== nc && void 0 !== nc ? nc : this.id, this.trackUserActionsExcludeItem = uc, this.importance = sc, this._pushEvent = Mc, this._itemBuffer = new pI, this._transports = Ic, this._state = 0, this._start()
        }
        addItem(cB) {
          return 0 === this._state && (this._itemBuffer.addItem(cB), !0)
        }
        _start() {
          this._state = 0, 0 === this._state && (this.startTime = TB(), this._startTimeMono = fB())
        }
        halt() {
          0 === this._state && (this._state = 1, this.notify(this._state))
        }
        cancel() {
          0 === this._state && this._itemBuffer.flushBuffer((cB => {
            this._transports.execute(cB)
          })), this._state = 2, this.notify(this._state)
        }
        end() {
          if (2 === this._state) return;
          const cB = TB(),
            Bc = fB() - this._startTimeMono;
          this._state = 3, this._itemBuffer.flushBuffer((cB => {
            if (function(cB, Bc) {
                return (null === Bc || void 0 === Bc ? void 0 : Bc(cB)) || "measurement" === cB.type && "web-vitals" === cB.payload.type
              }(cB, this.trackUserActionsExcludeItem)) return void this._transports.execute(cB);
            const Bc = GB(GB({}, cB), {}, {
              payload: GB(GB({}, cB.payload), {}, {
                action: {
                  parentId: this.id,
                  name: this.name
                }
              })
            });
            this._transports.execute(Bc)
          })), this._state = 3, this.notify(this._state), this._pushEvent("faro.user.action", GB({
            userActionName: this.name,
            userActionStartTime: this.startTime.toString(),
            userActionEndTime: cB.toString(),
            userActionDuration: Bc.toString(),
            userActionTrigger: this.trigger,
            userActionImportance: this.importance
          }, EB(this.attributes)), void 0, {
            timestampOverwriteMs: this.startTime,
            customPayloadTransformer: cB => (cB.action = {
              id: this.id,
              name: this.name
            }, cB)
          })
        }
        getState() {
          return this._state
        }
      };
    const ar = new zV;

    function lI(cB, Bc) {
      return !!cB && (0 === (null === cB || void 0 === cB ? void 0 : cB.getState()) && (cB.addItem(Bc), !0))
    }
    var YI = class extends nn {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-user-action", this.version = Vn
        }
        initialize() {
          const {
            processUserEvent: cB,
            processUserActionStarted: Bc
          } = SI(ec, (cB => this.logWarn(cB)));
          this._processUserEvent = cB, this._processKeydown = Bc => {
            [" ", "Enter"].includes(Bc.key) && cB(Bc)
          }, window.addEventListener("pointerdown", this._processUserEvent), window.addEventListener("keydown", this._processKeydown), this._userActionSub = ar.subscribe((cB => {
            let {
              type: nc,
              userAction: Vc,
              initialActivityTimeout: Ic
            } = cB;
            "user_action_start" === nc && Bc(Vc, Ic)
          }))
        }
        destroy() {
          var cB;
          this._processUserEvent && window.removeEventListener("pointerdown", this._processUserEvent), this._processKeydown && window.removeEventListener("keydown", this._processKeydown), null === (cB = this._userActionSub) || void 0 === cB || cB.unsubscribe()
        }
      },
      LI = class extends nn {
        constructor() {
          super(), this.name = "@grafana/faro-web-sdk:instrumentation-csp", this.version = Vn, this.boundSecuritypolicyviolationHandler = this.securitypolicyviolationHandler.bind(this)
        }
        initialize() {
          document.addEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        destroy() {
          document.removeEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        securitypolicyviolationHandler(cB) {
          const Bc = {
            blockedURI: cB.blockedURI,
            columnNumber: cB.columnNumber,
            disposition: cB.disposition,
            documentURI: cB.documentURI,
            effectiveDirective: cB.effectiveDirective,
            lineNumber: cB.lineNumber,
            originalPolicy: cB.originalPolicy,
            referrer: cB.referrer,
            sample: cB.sample,
            sourceFile: cB.sourceFile,
            statusCode: cB.statusCode,
            violatedDirective: cB.violatedDirective
          };
          this.api.pushEvent("securitypolicyviolation", EB(Bc))
        }
      };
    var gr = class extends zV {
      constructor(cB, Bc) {
        var nc, Vc, Ic, rB;
        super(), this._tracking = !1, this.eventsObservable = cB, this._options = {
          inactivityMs: null !== (nc = null === Bc || void 0 === Bc ? void 0 : Bc.inactivityMs) && void 0 !== nc ? nc : 100,
          drainTimeoutMs: null !== (Vc = null === Bc || void 0 === Bc ? void 0 : Bc.drainTimeoutMs) && void 0 !== Vc ? Vc : 1e4,
          isOperationStart: null !== (Ic = null === Bc || void 0 === Bc ? void 0 : Bc.isOperationStart) && void 0 !== Ic ? Ic : () => {},
          isOperationEnd: null !== (rB = null === Bc || void 0 === Bc ? void 0 : Bc.isOperationEnd) && void 0 !== rB ? rB : () => {}
        }, this._initialize()
      }
      _initialize() {
        this.eventsObservable.filter((() => this._tracking)).subscribe((cB => {
          var Bc;
          this._lastEventTime = fB(), null === (Bc = this._currentEvents) || void 0 === Bc || Bc.push(cB);
          const nc = this._options.isOperationStart(cB);
          var Vc;
          nc && (null === (Vc = this._activeOperations) || void 0 === Vc || Vc.set(nc, !0));
          const Ic = this._options.isOperationEnd(cB);
          var rB;
          Ic && (null === (rB = this._activeOperations) || void 0 === rB || rB.delete(Ic));
          this._scheduleInactivityCheck()
        }))
      }
      startTracking() {
        this._tracking || (this._tracking = !0, this._startTime = fB(), this._lastEventTime = this._startTime, this.notify({
          message: "tracking-started"
        }), this._currentEvents = [], this._activeOperations = new Map, this._scheduleInactivityCheck())
      }
      stopTracking() {
        let cB;
        this._tracking = !1, this._clearTimer(this._inactivityTid), this._clearTimer(this._drainTid), cB = this.hasActiveOperations() ? fB() - this._startTime : this._lastEventTime ? this._lastEventTime - this._startTime : 0, this.notify({
          message: "tracking-ended",
          events: this._currentEvents,
          duration: cB
        })
      }
      _scheduleInactivityCheck() {
        this._inactivityTid = UI(this._inactivityTid, (() => {
          this.hasActiveOperations() ? this._startDrainTimeout() : this.stopTracking()
        }), this._options.inactivityMs)
      }
      _startDrainTimeout() {
        this._drainTid = UI(this._drainTid, (() => {
          this.stopTracking()
        }), this._options.drainTimeoutMs)
      }
      hasActiveOperations() {
        return !!this._activeOperations && this._activeOperations.size > 0
      }
      _clearTimer(cB) {
        cB && clearTimeout(cB)
      }
    };

    function UI(cB, Bc, nc) {
      return cB && clearTimeout(cB), cB = setTimeout((() => {
        Bc()
      }), nc)
    }
    let br;
    const ZI = new Set,
      QI = new Map;
    let CI, vr, DI, NI, EI, oI, WI, wI, kr = !1;
    var XI = class extends nn {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-navigation", this.version = Vn
      }
      initialize() {
        const cB = TI(),
          Bc = II(),
          nc = function() {
            function cB(cB, Bc) {
              const nc = null !== Bc && void 0 !== Bc ? Bc : location.href;
              nc !== vr && (CI.notify({
                type: "url-change",
                from: vr,
                to: nc,
                trigger: cB
              }), vr = nc)
            }
            if (CI || (CI = new zV, vr = location.href), !kr)
              if ("navigation" in window && "NavigateEvent" in window) {
                WI = Bc => {
                  try {
                    const nc = null === Bc || void 0 === Bc ? void 0 : Bc.destination;
                    (null === nc || void 0 === nc ? void 0 : nc.sameDocument) && "string" === typeof nc.url && cB("navigate", nc.url)
                  } catch (nc) {}
                }, window.navigation.addEventListener("navigate", WI);
                const Bc = window.NavigateEvent;
                Bc && Bc.prototype && "function" === typeof Bc.prototype.intercept && (wI || (wI = Bc.prototype.intercept), Bc.prototype.intercept = function(Bc) {
                  try {
                    const Bc = !!(null === this || void 0 === this ? void 0 : this.canIntercept),
                      nc = null === this || void 0 === this ? void 0 : this.destination;
                    Bc && nc && !1 === nc.sameDocument && "string" === typeof nc.url && cB("navigate-intercept", nc.url)
                  } catch (nc) {}
                  return wI.call(this, Bc)
                }), kr = !0
              } else DI || (DI = window.history.pushState), window.history.pushState = function() {
                for (var Bc = arguments.length, nc = new Array(Bc), Vc = 0; Vc < Bc; Vc++) nc[Vc] = arguments[Vc];
                const Ic = DI.apply(window.history, nc);
                return cB("pushState"), Ic
              }, NI || (NI = window.history.replaceState), window.history.replaceState = function() {
                for (var Bc = arguments.length, nc = new Array(Bc), Vc = 0; Vc < Bc; Vc++) nc[Vc] = arguments[Vc];
                const Ic = NI.apply(window.history, nc);
                return cB("replaceState"), Ic
              }, EI = () => cB("popstate"), oI = () => cB("hashchange"), window.addEventListener("popstate", EI), window.addEventListener("hashchange", oI), kr = !0;
            return CI
          }(),
          Vc = (Ic = ["pointerdown", "keydown"], br || (br = new zV), Ic.forEach((cB => {
            if (!ZI.has(cB)) {
              const Bc = () => {
                br.notify({
                  type: "interaction",
                  name: cB
                })
              };
              window.addEventListener(cB, Bc), ZI.add(cB), QI.set(cB, Bc)
            }
          })), br);
        var Ic;
        const rB = new gr((new zV).merge(cB, Bc, nc), {
          inactivityMs: 100,
          drainTimeoutMs: 1e4,
          isOperationStart: cB => function(cB) {
            return cB.type === Sn
          }(cB) ? cB.request.requestId : void 0,
          isOperationEnd: cB => function(cB) {
            return cB.type === yV
          }(cB) ? cB.request.requestId : void 0
        });
        rB.filter((cB => "tracking-ended" === cB.message)).subscribe((cB => {
          var Bc, nc;
          if ((null === (Bc = cB.events) || void 0 === Bc ? void 0 : Bc.some((cB => "url-change" === cB.type))) && (null === (nc = cB.events) || void 0 === nc ? void 0 : nc.some((cB => "dom-mutation" === cB.type)))) {
            var Vc;
            const Bc = null === (Vc = cB.events) || void 0 === Vc ? void 0 : Vc.find((cB => "url-change" === cB.type));
            ec.api.pushEvent("faro.navigation", {
              fromUrl: null === Bc || void 0 === Bc ? void 0 : Bc.from,
              toUrl: null === Bc || void 0 === Bc ? void 0 : Bc.to,
              sameDocument: String(!0),
              duration: cB.duration
            })
          }
        })), Vc.subscribe((() => {
          rB.startTracking()
        }))
      }
    };

    function HI() {
      let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const Bc = [new YI, new Nn, new DV, new In, new onc, new XI];
      return !1 !== cB.enablePerformanceInstrumentation && Bc.unshift(new iI), !1 !== cB.enableContentSecurityPolicyInstrumentation && Bc.push(new LI), !1 !== cB.captureConsole && Bc.push(new vV), Bc
    }
    var FI = nc(6958);
    let JI, jr;

    function RI() {
      const cB = "undefined" !== typeof navigator ? navigator.userAgent : "";
      return JI === cB && jr || (jr = new FI.UAParser(cB).getResult(), JI = cB), jr
    }
    const ir = () => {
        const {
          browser: cB,
          os: Bc,
          ua: nc
        } = RI(), {
          name: Vc,
          version: Ic
        } = cB, {
          name: rB,
          version: uc
        } = Bc, sc = navigator.language, Mc = nc.includes("Mobi"), Pc = function() {
          if (!Vc || !Ic) return;
          if ("userAgentData" in navigator && navigator.userAgentData) return navigator.userAgentData.brands
        }();
        return {
          browser: {
            name: null !== Vc && void 0 !== Vc ? Vc : En,
            version: null !== Ic && void 0 !== Ic ? Ic : En,
            os: `${null!==rB&&void 0!==rB?rB:En} ${null!==uc&&void 0!==uc?uc:En}`,
            userAgent: null !== nc && void 0 !== nc ? nc : En,
            language: null !== sc && void 0 !== sc ? sc : En,
            mobile: Mc,
            brands: null !== Pc && void 0 !== Pc ? Pc : En,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`
          }
        }
      },
      KI = () => {
        const {
          name: cB,
          version: Bc
        } = RI().os;
        if (!cB && !Bc) return {};
        const nc = {};
        return cB && (nc.name = cB), Bc && (nc.version = Bc), {
          os: nc
        }
      };

    function xr(cB) {
      var Bc, nc, Vc;
      return {
        id: null !== (Bc = null === (nc = ec.config) || void 0 === nc || null === (nc = nc.sessionTracking) || void 0 === nc || null === (Vc = nc.generateSessionId) || void 0 === Vc ? void 0 : Vc.call(nc)) && void 0 !== Bc ? Bc : SB(),
        attributes: cB
      }
    }
    const dI = () => ({
      sdk: {
        name: "faro-web",
        version: Vn
      }
    });
    var AI = class extends Bn {
      isBatched() {
        return !1
      }
      getIgnoreUrls() {
        return []
      }
    };
    let GI = function(cB) {
      return cB.EXCEPTION = "exception", cB.LOG = "log", cB.MEASUREMENT = "measurement", cB.TRACE = "trace", cB.EVENT = "event", cB
    }({});
    const cu = {
      exception: "exceptions",
      log: "logs",
      measurement: "measurements",
      trace: "traces",
      event: "events"
    };

    function Br(cB, Bc) {
      var nc, Vc;
      if (void 0 === Bc) return cB;
      if (void 0 === cB) return {
        resourceSpans: Bc
      };
      const Ic = null === (nc = cB.resourceSpans) || void 0 === nc ? void 0 : nc[0];
      if (void 0 === Ic) return cB;
      const rB = (null === Ic || void 0 === Ic ? void 0 : Ic.scopeSpans) || [],
        uc = (null === Bc || void 0 === Bc || null === (Vc = Bc[0]) || void 0 === Vc ? void 0 : Vc.scopeSpans) || [];
      return GB(GB({}, cB), {}, {
        resourceSpans: [GB(GB({}, Ic), {}, {
          scopeSpans: [...rB, ...uc]
        })]
      })
    }

    function nr(cB) {
      let Bc = {
        meta: {}
      };
      return void 0 !== cB[0] && (Bc.meta = cB[0].meta), cB.forEach((cB => {
        switch (cB.type) {
          case "log":
          case "event":
          case "exception":
          case "measurement": {
            const nc = cu[cB.type],
              Vc = Bc[nc];
            Bc = GB(GB({}, Bc), {}, {
              [nc]: void 0 === Vc ? [cB.payload] : [...Vc, cB.payload]
            });
            break
          }
          case "trace":
            Bc = GB(GB({}, Bc), {}, {
              traces: Br(Bc.traces, cB.payload.resourceSpans)
            })
        }
      })), Bc
    }
    var Vr = class extends AI {
      constructor() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(), this.options = cB, this.name = "@grafana/faro-web-sdk:transport-console", this.version = Vn
      }
      send(cB) {
        var Bc;
        return this.unpatchedConsole[null !== (Bc = this.options.level) && void 0 !== Bc ? Bc : pn.DEBUG]("New event", nr([cB]))
      }
    };
    const Ir = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), ([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      ru = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-9]{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      ur = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:(?:([0-9]{2}))|(?: ([0-9]))) ([0-9]{2}):([0-9]{2}):([0-9]{2}) ([0-9]{4})$/,
      sr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      Mr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      Pr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function qu(cB) {
      let {
        weekday: Bc,
        day: nc,
        month: Vc,
        year: Ic,
        hour: rB,
        minute: uc,
        second: sc
      } = cB;
      if (Ic < 1900 || nc < 1 || rB > 23 || uc > 59 || sc > 60) return;
      const Mc = 60 === sc,
        Pc = new Date(0);
      return Pc.setUTCFullYear(Ic, Vc, nc), Pc.setUTCHours(rB, uc, Mc ? 59 : sc, 0), Pc.getUTCDay() === Bc && Pc.getUTCDate() === nc && Pc.getUTCMonth() === Vc && Pc.getUTCFullYear() === Ic && Pc.getUTCHours() === rB && Pc.getUTCMinutes() === uc && Pc.getUTCSeconds() === (Mc ? 59 : sc) ? Pc.getTime() + (Mc ? 1e3 : 0) : void 0
    }
    var Or = class {
      constructor(cB) {
        this.options = cB, this.admitted = 0, this.inProgress = 0, this.sequence = 0, this.nextSendAt = 0, this.attemptQueue = [], this.waiting = [], this.unloading = !1
      }
      reserve() {
        var cB = this;
        if (this.admitted >= this.options.bufferSize) return;
        this.admitted++;
        const Bc = this.sequence++;
        let nc = !1;
        return {
          deliver: function() {
            var nc = jI((function*(nc) {
              const Vc = cB.options.getNow();
              let Ic, rB = 0;
              for (;;) {
                var uc, sc, Mc;
                const Pc = cB.options.retry.maxAttempts - rB,
                  qB = yield cB.runAttempt((() => nc(Pc, cB.unloading)), rB > 0);
                if (rB += qB.attemptsMade, "success" === qB.kind) return {
                  kind: "success",
                  attempts: rB,
                  elapsedTimeMs: cB.options.getNow() - Vc
                };
                if (Ic = qB.failure, "terminal" === qB.kind || cB.unloading) return {
                  kind: "terminal",
                  attempts: rB,
                  elapsedTimeMs: cB.options.getNow() - Vc,
                  failure: Ic
                };
                if (rB >= cB.options.retry.maxAttempts) return {
                  kind: "terminal",
                  attempts: rB,
                  elapsedTimeMs: cB.options.getNow() - Vc,
                  failure: Ic,
                  reason: "retries-exhausted"
                };
                if (null != qB.retryAfterMs && qB.retryAfterMs > cB.options.retry.maxBackoffMs) return {
                  kind: "terminal",
                  attempts: rB,
                  elapsedTimeMs: cB.options.getNow() - Vc,
                  failure: Ic,
                  reason: "retry-after-too-long"
                };
                const Oc = Math.min(null !== (uc = qB.retryAfterMs) && void 0 !== uc ? uc : cB.options.retry.initialBackoffMs * Math.pow(cB.options.retry.backoffMultiplier, rB - 1), cB.options.retry.maxBackoffMs);
                if (null === (sc = (Mc = cB.options).onRetry) || void 0 === sc || sc.call(Mc, Oc, rB + 1), yield cB.waitForTurn(Bc, Oc)) {
                  const Bc = cB.options.retry.maxAttempts - rB,
                    Ic = yield cB.runAttempt((() => nc(Bc, !0)));
                  return rB += Ic.attemptsMade, {
                    kind: "success" === Ic.kind ? "success" : "terminal",
                    attempts: rB,
                    elapsedTimeMs: cB.options.getNow() - Vc,
                    failure: "success" === Ic.kind ? void 0 : Ic.failure
                  }
                }
              }
            }));
            return function(cB) {
              return nc.apply(this, arguments)
            }
          }(),
          release: () => {
            nc || (nc = !0, this.admitted--)
          }
        }
      }
      flush() {
        this.unloading = !0, this.nextSendAt = 0;
        const cB = this.waiting.splice(0);
        null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0);
        for (const Bc of cB) Bc.resolve(!0);
        this.runNextAttempt()
      }
      resume() {
        this.unloading = !1
      }
      runAttempt(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Promise(((nc, Vc) => {
          this.attemptQueue.push({
            run: () => {
              this.inProgress++;
              const Bc = () => {
                this.inProgress--, this.runNextAttempt()
              };
              cB().then((cB => {
                Bc(), nc(cB)
              }), (cB => {
                Bc(), Vc(cB)
              }))
            },
            isRedelivery: Bc
          }), this.runNextAttempt()
        }))
      }
      runNextAttempt() {
        for (null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0); this.inProgress < this.options.concurrency && this.attemptQueue.length > 0;) {
          const cB = this.options.getNow(),
            Bc = this.attemptQueue.findIndex((Bc => {
              let {
                isRedelivery: nc
              } = Bc;
              return this.unloading || !nc || cB >= this.nextSendAt
            }));
          if (Bc < 0) return void(this.redeliveryTimer = setTimeout((() => {
            this.redeliveryTimer = void 0, this.runNextAttempt()
          }), Math.max(0, this.nextSendAt - cB)));
          const [nc] = this.attemptQueue.splice(Bc, 1);
          nc.isRedelivery && !this.unloading && (this.nextSendAt = cB + 1), nc.run()
        }
      }
      waitForTurn(cB, Bc) {
        const nc = Math.min(Bc * (1 + .2 * this.options.getRandom()), this.options.retry.maxBackoffMs);
        return new Promise((Bc => {
          this.waiting.push({
            sequence: cB,
            readyAt: this.options.getNow() + nc,
            resolve: Bc
          }), this.waiting.sort(((cB, Bc) => cB.readyAt === Bc.readyAt ? cB.sequence - Bc.sequence : cB.readyAt - Bc.readyAt)), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0), this.scheduleNext()
        }))
      }
      scheduleNext() {
        if (null != this.waitingTimer || 0 === this.waiting.length) return;
        const cB = this.waiting[0],
          Bc = cB.readyAt;
        this.waitingTimer = setTimeout((() => {
          this.waitingTimer = void 0;
          const Bc = this.waiting.indexOf(cB);
          Bc >= 0 && this.waiting.splice(Bc, 1), cB.resolve(!1), this.scheduleNext()
        }), Math.max(0, Bc - this.options.getNow()))
      }
    };

    function Tr(cB, Bc) {
      if (null == cB) return {};
      var nc, Vc, Ic = function(cB, Bc) {
        if (null == cB) return {};
        var nc = {};
        for (var Vc in cB)
          if ({}.hasOwnProperty.call(cB, Vc)) {
            if (Bc.includes(Vc)) continue;
            nc[Vc] = cB[Vc]
          } return nc
      }(cB, Bc);
      if (Object.getOwnPropertySymbols) {
        var rB = Object.getOwnPropertySymbols(cB);
        for (Vc = 0; Vc < rB.length; Vc++) nc = rB[Vc], Bc.includes(nc) || {}.propertyIsEnumerable.call(cB, nc) && (Ic[nc] = cB[nc])
      }
      return Ic
    }

    function fr(cB) {
      const {
        size: Bc,
        concurrency: nc
      } = cB, Vc = [];
      let Ic = 0;
      const rB = () => {
        if (Ic < nc && Vc.length) {
          const {
            producer: cB,
            resolve: Bc,
            reject: nc
          } = Vc.shift();
          Ic++, cB().then((cB => {
            Ic--, rB(), Bc(cB)
          }), (cB => {
            Ic--, rB(), nc(cB)
          }))
        }
      };
      return {
        add: cB => {
          if (Vc.length + Ic >= Bc) throw new Error("Task buffer full");
          return new Promise(((Bc, nc) => {
            Vc.push({
              producer: cB,
              resolve: Bc,
              reject: nc
            }), rB()
          }))
        }
      }
    }
    const mu = ["headers"],
      er = ["keepalive", "signal"],
      tu = new Set([408, 425, 429, 500, 502, 503, 504]),
      Sr = new Set([429, 503]);
    let yu = 0,
      zu = 0;
    var pr = class extends Error {};
    var hr = class extends AI {
      constructor(cB) {
        var Bc, nc, Vc, Ic, rB, uc, sc, Mc, Pc, qB, Oc, Tc, fc, mB, ec, tB, Sc;
        super(), this.options = cB, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = Vn, this.pendingCustomSends = 0, this.getNow = null !== (Bc = cB.getNow) && void 0 !== Bc ? Bc : Date.now, this.requestTimeoutMs = null !== (nc = cB.requestTimeoutMs) && void 0 !== nc ? nc : 1e4, this.compressionEnabled = null !== (Vc = cB.requestCompression) && void 0 !== Vc && Vc && "undefined" !== typeof CompressionStream, cB.requestCompression && !this.compressionEnabled && this.logWarn("requestCompression is enabled but CompressionStream is not available. Falling back to uncompressed."), this.requestTimeoutMs > 0 && "undefined" === typeof AbortController && this.logWarn("AbortController is unavailable. Requests will be sent without the configured timeout."), this.deliveryQueue = new Or({
          bufferSize: null !== (Ic = cB.bufferSize) && void 0 !== Ic ? Ic : 30,
          concurrency: null !== (rB = cB.concurrency) && void 0 !== rB ? rB : 5,
          retry: {
            maxAttempts: null !== (uc = null === (sc = cB.retry) || void 0 === sc ? void 0 : sc.maxAttempts) && void 0 !== uc ? uc : 3,
            initialBackoffMs: null !== (Mc = null !== (Pc = null === (qB = cB.retry) || void 0 === qB ? void 0 : qB.initialBackoffMs) && void 0 !== Pc ? Pc : cB.defaultRateLimitBackoffMs) && void 0 !== Mc ? Mc : 1e3,
            maxBackoffMs: null !== (Oc = null === (Tc = cB.retry) || void 0 === Tc ? void 0 : Tc.maxBackoffMs) && void 0 !== Oc ? Oc : 3e4,
            backoffMultiplier: null !== (fc = null === (mB = cB.retry) || void 0 === mB ? void 0 : mB.backoffMultiplier) && void 0 !== fc ? fc : 2
          },
          getNow: this.getNow,
          getRandom: null !== (ec = cB.getRandom) && void 0 !== ec ? ec : Math.random,
          onRetry: (cB, Bc) => {
            this.logDebug(`Retrying failed request after ${cB}ms. Attempt ${Bc}.`)
          }
        }), this.customPromiseBuffer = fr({
          size: null !== (tB = cB.bufferSize) && void 0 !== tB ? tB : 30,
          concurrency: null !== (Sc = cB.concurrency) && void 0 !== Sc ? Sc : 5
        }), this.defaultPromiseBuffer = {
          add: cB => {
            if (this.promiseBuffer !== this.defaultPromiseBuffer || this.promiseBuffer.add !== this.defaultBufferAdd || this.pendingCustomSends > 0) return this.customPromiseBuffer.add(cB);
            const Bc = this.deliveryQueue.reserve();
            if (!Bc) throw new Error("Task buffer full");
            return this.runBufferedTask(Bc, cB)
          }
        }, this.defaultBufferAdd = this.defaultPromiseBuffer.add, this.promiseBuffer = this.defaultPromiseBuffer, "undefined" !== typeof window && (window.addEventListener("pagehide", (() => this.deliveryQueue.flush())), window.addEventListener("pageshow", (cB => {
          cB.persisted && this.deliveryQueue.resume()
        })))
      }
      send(cB) {
        var Bc = this;
        return jI((function*() {
          const nc = Bc.promiseBuffer;
          if (nc !== Bc.defaultPromiseBuffer || nc.add !== Bc.defaultBufferAdd) {
            Bc.pendingCustomSends++;
            try {
              yield nc.add((() => Bc.deliver(cB)))
            } catch (Vc) {
              Bc.logError("Permanent delivery failure", {
                error: Vc,
                attempts: 0,
                elapsedTimeMs: 0
              })
            } finally {
              Bc.pendingCustomSends--
            }
          } else yield Bc.deliver(cB)
        }))()
      }
      runBufferedTask(cB, Bc) {
        return jI((function*() {
          let nc;
          try {
            return yield cB.deliver(jI((function*() {
              return nc = yield Bc(), {
                kind: "success",
                attemptsMade: 1
              }
            }))), nc
          } finally {
            cB.release()
          }
        }))()
      }
      deliver(cB) {
        var Bc = this;
        return jI((function*() {
          const nc = Bc.deliveryQueue.reserve();
          if (nc) try {
            const Vc = yield Bc.prepareRequest(cB), Ic = yield nc.deliver(((cB, nc) => Bc.performAttempt(Vc, cB, nc)));
            "terminal" === Ic.kind && Bc.logError("retries-exhausted" === Ic.reason ? "Delivery retries exhausted" : "Permanent delivery failure", qn(qn({}, Ic.failure), {}, {
              reason: Ic.reason,
              attempts: Ic.attempts,
              elapsedTimeMs: Ic.elapsedTimeMs
            }))
          } catch (Vc) {
            Bc.logError("Permanent delivery failure", {
              error: Vc,
              attempts: 0,
              elapsedTimeMs: 0
            })
          } finally {
            nc.release()
          } else Bc.logError("Permanent delivery failure", {
            error: "Reliable delivery queue is full",
            attempts: 0,
            elapsedTimeMs: 0
          })
        }))()
      }
      getIgnoreUrls() {
        var cB;
        return [this.options.url].concat(null !== (cB = this.config.ignoreUrls) && void 0 !== cB ? cB : [])
      }
      isBatched() {
        return !0
      }
      prepareRequest(cB) {
        var Bc = this;
        return jI((function*() {
          var nc, Vc;
          const Ic = nr(cB),
            rB = null === (nc = Ic.meta.session) || void 0 === nc ? void 0 : nc.id,
            uc = JSON.stringify(Ic),
            sc = null !== (Vc = Bc.options.requestOptions) && void 0 !== Vc ? Vc : {},
            {
              headers: Mc = {}
            } = sc,
            Pc = Tr(sc, mu),
            {
              keepalive: qB,
              signal: Oc
            } = Pc,
            Tc = Tr(Pc, er),
            fc = {};
          for (const [cB, Bc] of Object.entries(Mc)) fc[cB] = "function" === typeof Bc ? yield Bc(): Bc;
          let mB = uc,
            ec = function(cB) {
              return "undefined" === typeof TextEncoder ? cB.length : (new TextEncoder).encode(cB).byteLength
            }(uc);
          const tB = {};
          return Bc.compressionEnabled && (mB = yield Bc.compress(uc), ec = mB.size, tB["Content-Encoding"] = "gzip"), {
            bodySize: ec,
            sessionId: rB,
            requestInit: qn({
              method: "POST",
              headers: qn(qn(qn(qn(qn({
                "Content-Type": "application/json"
              }, tB), fc), Bc.options.apiKey ? {
                "x-api-key": Bc.options.apiKey
              } : {}), rB ? {
                "x-faro-session-id": rB
              } : {}), {}, {
                "Idempotency-Key": SB(20)
              }),
              body: mB
            }, Tc)
          }
        }))()
      }
      performAttempt(cB, Bc, nc) {
        var Vc = this;
        return jI((function*() {
          var Ic;
          const rB = null === (Ic = Vc.options.requestOptions) || void 0 === Ic ? void 0 : Ic.signal;
          if (null === rB || void 0 === rB ? void 0 : rB.aborted) return {
            kind: "terminal",
            failure: {
              error: rB.reason
            },
            attemptsMade: 0
          };
          let uc = 0;
          try {
            var sc;
            const Ic = yield Vc.fetchWithKeepaliveFallback(cB.requestInit, cB.bodySize, !!nc || (null === (sc = Vc.options.requestOptions) || void 0 === sc ? void 0 : sc.keepalive), Bc, (() => uc++));
            if (Vc.handleResponse(Ic, cB.sessionId), Ic.status >= 200 && Ic.status < 300) return {
              kind: "success",
              attemptsMade: uc
            };
            const rB = {
              status: Ic.status
            };
            return !tu.has(Ic.status) || nc ? {
              kind: "terminal",
              failure: rB,
              attemptsMade: uc
            } : {
              kind: "retry",
              failure: rB,
              attemptsMade: uc,
              retryAfterMs: Sr.has(Ic.status) ? Vc.getRetryAfterDelayMs(Ic) : void 0
            }
          } catch (Mc) {
            const cB = {
              error: Mc
            };
            return (null === rB || void 0 === rB ? void 0 : rB.aborted) || !Vc.isFetchNetworkError(Mc) || nc ? {
              kind: "terminal",
              failure: cB,
              attemptsMade: uc
            } : {
              kind: "retry",
              failure: cB,
              attemptsMade: uc
            }
          }
        }))()
      }
      fetchWithKeepaliveFallback(cB, Bc, nc, Vc, Ic) {
        var rB = this;
        return jI((function*() {
          const uc = rB.getNow(),
            sc = rB.reserveKeepalive(Bc, nc);
          try {
            return yield rB.fetchWithTimeout(qn(qn({}, cB), {}, {
              keepalive: sc.keepalive
            }), rB.requestTimeoutMs, Ic)
          } catch (Pc) {
            var Mc;
            if (sc.keepalive && Vc > 1 && rB.isFetchNetworkError(Pc) && !(Pc instanceof pr) && !(null === (Mc = rB.options.requestOptions) || void 0 === Mc || null === (Mc = Mc.signal) || void 0 === Mc ? void 0 : Mc.aborted)) {
              rB.logDebug("Retrying failed keepalive request with keepalive disabled.");
              const Bc = rB.requestTimeoutMs - (rB.getNow() - uc);
              return rB.fetchWithTimeout(qn(qn({}, cB), {}, {
                keepalive: !1
              }), Bc, Ic)
            }
            throw Pc
          } finally {
            sc.release()
          }
        }))()
      }
      fetchWithTimeout(cB, Bc, nc) {
        var Vc = this;
        return jI((function*() {
          var Ic;
          const rB = null === (Ic = Vc.options.requestOptions) || void 0 === Ic ? void 0 : Ic.signal;
          if (Vc.requestTimeoutMs <= 0 || "undefined" === typeof AbortController) return nc(), fetch(Vc.options.url, qn(qn({}, cB), {}, {
            signal: rB
          }));
          if (Bc <= 0) throw new pr("Request timed out");
          const uc = new AbortController,
            sc = () => uc.abort(null === rB || void 0 === rB ? void 0 : rB.reason);
          null === rB || void 0 === rB || rB.addEventListener("abort", sc, {
            once: !0
          });
          let Mc = !1;
          const Pc = setTimeout((() => {
            Mc = !0, uc.abort()
          }), Bc);
          try {
            return nc(), yield fetch(Vc.options.url, qn(qn({}, cB), {}, {
              signal: uc.signal
            }))
          } catch (qB) {
            if (Mc && !(null === rB || void 0 === rB ? void 0 : rB.aborted)) throw new pr("Request timed out");
            throw qB
          } finally {
            clearTimeout(Pc), null === rB || void 0 === rB || rB.removeEventListener("abort", sc)
          }
        }))()
      }
      getRetryAfterDelayMs(cB) {
        const Bc = cB.headers.get("Retry-After");
        if (!Bc) return;
        if (/^\d+$/.test(Bc)) {
          const cB = 1e3 * Number(Bc);
          return Number.isFinite(cB) ? cB : Number.POSITIVE_INFINITY
        }
        const nc = this.getNow(),
          Vc = function(cB, Bc) {
            const nc = Ir.exec(cB);
            if (nc) {
              const [, cB, Bc, Vc, Ic, rB, uc, sc] = nc;
              return qu({
                weekday: sr.indexOf(cB),
                day: Number(Bc),
                month: Pr.indexOf(Vc),
                year: Number(Ic),
                hour: Number(rB),
                minute: Number(uc),
                second: Number(sc)
              })
            }
            const Vc = ru.exec(cB);
            if (Vc) {
              const [, cB, nc, uc, sc, Mc, Pc, qB] = Vc, Oc = new Date(Bc);
              if (Number.isNaN(Oc.getTime())) return;
              const Tc = Oc.getUTCFullYear();
              let fc = 100 * Math.floor(Tc / 100) + Number(sc);
              fc < Tc && (fc += 100);
              const mB = Pr.indexOf(uc),
                ec = {
                  month: mB,
                  day: Number(nc),
                  hour: Number(Mc),
                  minute: Number(Pc),
                  second: Number(qB),
                  millisecond: 0
                },
                tB = {
                  month: Oc.getUTCMonth(),
                  day: Oc.getUTCDate(),
                  hour: Oc.getUTCHours(),
                  minute: Oc.getUTCMinutes(),
                  second: Oc.getUTCSeconds(),
                  millisecond: Oc.getUTCMilliseconds()
                };
              return (fc > Tc + 50 || fc === Tc + 50 && (rB = tB, ((Ic = ec).month - rB.month || Ic.day - rB.day || Ic.hour - rB.hour || Ic.minute - rB.minute || Ic.second - rB.second || Ic.millisecond - rB.millisecond) > 0)) && (fc -= 100), qu({
                weekday: Mr.indexOf(cB),
                day: Number(nc),
                month: mB,
                year: fc,
                hour: Number(Mc),
                minute: Number(Pc),
                second: Number(qB)
              })
            }
            var Ic, rB;
            const uc = ur.exec(cB);
            if (!uc) return;
            const [, sc, Mc, Pc, qB, Oc, Tc, fc, mB] = uc;
            return qu({
              weekday: sr.indexOf(sc),
              day: Number(null !== Pc && void 0 !== Pc ? Pc : qB),
              month: Pr.indexOf(Mc),
              year: Number(mB),
              hour: Number(Oc),
              minute: Number(Tc),
              second: Number(fc)
            })
          }(Bc, nc);
        return null == Vc ? void 0 : Math.max(0, Vc - nc)
      }
      reserveKeepalive(cB, Bc) {
        if (!1 === Bc || cB > 6e4 || yu + cB > 6e4 || zu >= 9) return {
          keepalive: !1,
          release: FB
        };
        yu += cB, zu++;
        let nc = !1;
        return {
          keepalive: !0,
          release: () => {
            nc || (nc = !0, yu -= cB, zu--)
          }
        }
      }
      handleResponse(cB, Bc) {
        202 === cB.status && "invalid" === cB.headers.get("X-Faro-Session-Status") && this.extendFaroSession(this.config, this.logDebug.bind(this), Bc), cB.text().catch(FB)
      }
      isFetchNetworkError(cB) {
        return cB instanceof TypeError || cB instanceof pr || cB instanceof DOMException && "AbortError" === cB.name
      }
      compress(cB) {
        return jI((function*() {
          const Bc = [],
            nc = new ReadableStream({
              start(Bc) {
                Bc.enqueue((new TextEncoder).encode(cB)), Bc.close()
              }
            }).pipeThrough(new CompressionStream("gzip")).getReader();
          for (;;) {
            const {
              done: cB,
              value: Vc
            } = yield nc.read();
            if (cB) return new Blob(Bc);
            Bc.push(Vc)
          }
        }))()
      }
      extendFaroSession(cB, Bc, nc) {
        var Vc, Ic;
        const rB = cB.sessionTracking;
        if (!(null === rB || void 0 === rB ? void 0 : rB.enabled)) return void Bc("Session expired.");
        const {
          fetchUserSession: uc,
          storeUserSession: sc
        } = HB(rB), Mc = null === (Vc = this.metas.value.session) || void 0 === Vc ? void 0 : Vc.id, Pc = null === (Ic = uc()) || void 0 === Ic ? void 0 : Ic.sessionId;
        nc && nc === Mc && nc === Pc ? (ZB({
          fetchUserSession: uc,
          storeUserSession: sc
        })({
          forceSessionExtend: !0
        }), Bc("Session expired; created new session.")) : Bc("Ignoring stale or cross-tab session-invalid response; request session no longer current.")
      }
    };
    const au = () => {
      const cB = window.k6;
      return {
        k6: qn({
          isK6Browser: !0
        }, (null === cB || void 0 === cB ? void 0 : cB.testRunId) && {
          testRunId: null === cB || void 0 === cB ? void 0 : cB.testRunId
        })
      }
    };
    let lr, Yr;

    function Lr() {
      let {
        generatePageId: cB,
        initialPageMeta: Bc
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return () => {
        const nc = location.href;
        return bB(cB) && lr !== nc && (lr = nc, Yr = cB(location)), {
          page: qn(qn({
            url: nc
          }, Yr ? {
            id: Yr
          } : {}), Bc)
        }
      }
    }

    function gu() {
      let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cV,
        Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const nc = jn;
      return Bc > 0 && (nc.error = Bc >= 1 ? function() {
        for (var Bc = arguments.length, Vc = new Array(Bc), Ic = 0; Ic < Bc; Ic++) Vc[Ic] = arguments[Ic];
        cB.error(`${nc.prefix}\n`, ...Vc)
      } : FB, nc.warn = Bc >= 2 ? function() {
        for (var Bc = arguments.length, Vc = new Array(Bc), Ic = 0; Ic < Bc; Ic++) Vc[Ic] = arguments[Ic];
        cB.warn(`${nc.prefix}\n`, ...Vc)
      } : FB, nc.info = Bc >= 3 ? function() {
        for (var Bc = arguments.length, Vc = new Array(Bc), Ic = 0; Ic < Bc; Ic++) Vc[Ic] = arguments[Ic];
        cB.info(`${nc.prefix}\n`, ...Vc)
      } : FB, nc.debug = Bc >= 4 ? function() {
        for (var Bc = arguments.length, Vc = new Array(Bc), Ic = 0; Ic < Bc; Ic++) Vc[Ic] = arguments[Ic];
        cB.debug(`${nc.prefix}\n`, ...Vc)
      } : FB), nc
    }
    const Ur = "faro",
      bu = {
        enabled: !0,
        sendTimeout: 250,
        itemLimit: 50
      },
      Zr = ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "url", "experimental"];

    function Qr(cB) {
      var Bc, nc, Ic, rB, uc, sc;
      const Mc = [],
        qB = gu(cB.unpatchedConsole, cB.internalLoggerLevel);
      cB.transports ? ((cB.url || cB.apiKey) && qB.error('if "transports" is defined, "url" and "apiKey" should not be defined'), Mc.push(...cB.transports)) : cB.url ? Mc.push(new hr({
        url: cB.url,
        apiKey: cB.apiKey,
        requestCompression: cB.requestCompression
      })) : qB.error('either "url" or "transports" must be defined');
      const {
        dedupe: Oc = !0,
        eventDomain: Tc = Vc,
        globalObjectKey: fc = Ur,
        instrumentations: mB = HI(),
        internalLoggerLevel: ec = RB,
        isolate: tB = !1,
        logArgsSerializer: Sc = Cn,
        metas: yB = vu(cB),
        paused: zB = !1,
        preventGlobalExposure: pc = !1,
        unpatchedConsole: hc = cV,
        url: aB,
        experimental: lc
      } = cB, Yc = Tr(cB, Zr), Lc = null !== (Bc = null === lc || void 0 === lc ? void 0 : lc.trackNavigation) && void 0 !== Bc && Bc, gB = {
        dataAttributeName: AV(null !== (nc = null === (Ic = cB.userActionsInstrumentation) || void 0 === Ic ? void 0 : Ic.dataAttributeName) && void 0 !== nc ? nc : KV),
        excludeItem: null === (rB = cB.userActionsInstrumentation) || void 0 === rB ? void 0 : rB.excludeItem,
        initialActivityTimeout: GV(null === (uc = cB.userActionsInstrumentation) || void 0 === uc ? void 0 : uc.initialActivityTimeout, 100, (cB => qB.warn(cB)))
      };
      return qn(qn({}, Yc), {}, {
        batching: qn(qn({}, bu), cB.batching),
        dedupe: Oc,
        globalObjectKey: fc,
        instrumentations: Cr(mB, cB),
        internalLoggerLevel: ec,
        isolate: tB,
        logArgsSerializer: Sc,
        metas: yB,
        parseStacktrace: tV,
        paused: zB,
        preventGlobalExposure: pc,
        transports: Mc,
        unpatchedConsole: hc,
        eventDomain: Tc,
        ignoreUrls: [...null !== (sc = cB.ignoreUrls) && void 0 !== sc ? sc : [], ...aB ? [aB] : [], /\/collect(?:\/[\w]*)?$/],
        sessionTracking: qn(qn(qn({}, Pc), cB.sessionTracking), Dr({
          trackGeolocation: cB.trackGeolocation,
          sessionTracking: cB.sessionTracking
        })),
        userActionsInstrumentation: gB,
        experimental: {
          trackNavigation: Lc
        }
      })
    }

    function Cr(cB, Bc) {
      let {
        experimental: nc
      } = Bc;
      var Vc;
      const Ic = null !== (Vc = null === nc || void 0 === nc ? void 0 : nc.trackNavigation) && void 0 !== Vc && Vc;
      return cB.filter((cB => !("@grafana/faro-web-sdk:instrumentation-navigation" === cB.name && !Ic)))
    }

    function vu(cB) {
      var Bc, nc, Vc;
      const {
        page: Ic,
        generatePageId: rB
      } = null !== (Bc = null === cB || void 0 === cB ? void 0 : cB.pageTracking) && void 0 !== Bc ? Bc : {}, uc = [ir, KI, Lr({
        generatePageId: rB,
        initialPageMeta: Ic
      }), ...null !== (nc = cB.metas) && void 0 !== nc ? nc : [], dI];
      return Uc(null === (Vc = window) || void 0 === Vc ? void 0 : Vc.k6) ? [...uc, au] : uc
    }

    function Dr(cB) {
      let {
        trackGeolocation: Bc,
        sessionTracking: nc
      } = cB;
      var Vc;
      const Ic = {};
      return Lc(Bc) && (Ic.geoLocationTrackingEnabled = Bc), Rc(Ic) ? {} : {
        session: qn(qn({}, null !== (Vc = null === nc || void 0 === nc ? void 0 : nc.session) && void 0 !== Vc ? Vc : {}), {}, {
          overrides: Ic
        })
      }
    }
    const Nr = new WeakSet;

    function Er(cB) {
      return Nr.add(cB), cB
    }

    function or(cB, Bc) {
      if (cB.capture) return Er(cB.capture(Bc));
      const nc = Er(cB.value);
      return null === Bc || void 0 === Bc || Bc(), nc
    }

    function Wr(cB) {
      const Bc = `__faroBundleId_${cB}`,
        nc = null === qB || void 0 === qB ? void 0 : qB[Bc];
      if ("string" === typeof nc && "" !== nc) return nc;
      const Vc = "undefined" !== typeof window ? window[Bc] : void 0;
      return "string" === typeof Vc && "" !== Vc ? Vc : void 0
    }

    function wr(cB) {
      var Bc, nc;
      const Vc = cB.config.app.name,
        Ic = Vc ? function(cB) {
          return null === qB || void 0 === qB ? void 0 : qB[`__faroGitHash_${cB}`]
        }(Vc) : void 0,
        rB = {
          sdk: {
            version: Vn,
            name: "faro"
          },
          app: GB({
            bundleId: Vc && Wr(Vc)
          }, void 0 !== Ic ? {
            gitHash: Ic
          } : {})
        },
        uc = null === (Bc = cB.config.sessionTracking) || void 0 === Bc ? void 0 : Bc.session;
      uc && cB.api.setSession(uc), cB.config.app && (rB.app = GB(GB({}, cB.config.app), rB.app)), cB.config.user && (rB.user = cB.config.user), cB.config.view && (rB.view = cB.config.view), cB.metas.add(rB, ...null !== (nc = cB.config.metas) && void 0 !== nc ? nc : [])
    }
    var ku = class {
      constructor(cB, Bc) {
        var nc, Vc;
        this.signalBuffer = [], this.itemLimit = null !== (nc = null === Bc || void 0 === Bc ? void 0 : Bc.itemLimit) && void 0 !== nc ? nc : 50, this.sendTimeout = null !== (Vc = null === Bc || void 0 === Bc ? void 0 : Bc.sendTimeout) && void 0 !== Vc ? Vc : 250, this.paused = (null === Bc || void 0 === Bc ? void 0 : Bc.paused) || !1, this.sendFn = cB, this.paused || this.start(), "undefined" !== typeof document && document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }))
      }
      addItem(cB) {
        this.paused || (this.signalBuffer.push(cB), this.signalBuffer.length >= this.itemLimit && this.flush())
      }
      start() {
        this.paused = !1, this.sendTimeout > 0 && (this.flushInterval = setInterval((() => this.flush()), this.sendTimeout))
      }
      pause() {
        this.paused = !0, clearInterval(this.flushInterval)
      }
      groupItems(cB) {
        const Bc = new Map;
        return cB.forEach((cB => {
          const nc = JSON.stringify(cB.meta);
          let Vc = Bc.get(nc);
          Vc = void 0 === Vc ? [cB] : [...Vc, cB], Bc.set(nc, Vc)
        })), Array.from(Bc.values())
      }
      flush() {
        if (this.paused || 0 === this.signalBuffer.length) return;
        const cB = this.signalBuffer;
        this.signalBuffer = [];
        try {
          this.groupItems(cB).forEach(this.sendFn)
        } catch (Bc) {
          throw this.signalBuffer = [...cB, ...this.signalBuffer], this.trimBufferToLimit(), Bc
        }
      }
      trimBufferToLimit() {
        this.signalBuffer.length > this.itemLimit && (this.signalBuffer = this.signalBuffer.slice(0, this.itemLimit))
      }
    };

    function Xr(cB, Bc, nc, Vc) {
      var Ic;
      Bc.debug("Initializing transports");
      const rB = [];
      let uc = [];
      const sc = cB => {
        let Bc = cB;
        for (const Vc of uc) {
          const cB = Bc.map(Vc).filter(Boolean);
          if (0 === cB.length) return [];
          Bc = Hr(cB, nc)
        }
        return Bc
      };
      let Mc;
      (null === (Ic = nc.batching) || void 0 === Ic ? void 0 : Ic.enabled) && (Mc = new ku((cB => {
        const nc = sc(cB);
        if (0 !== nc.length)
          for (const Vc of rB) Bc.debug(`Transporting item using ${Vc.name}\n`, nc), Vc.isBatched() && Vc.send(nc)
      }), {
        sendTimeout: nc.batching.sendTimeout,
        itemLimit: nc.batching.itemLimit,
        paused: nc.paused
      }));
      return {
        add: function() {
          Bc.debug("Adding transports");
          for (var Ic = arguments.length, uc = new Array(Ic), sc = 0; sc < Ic; sc++) uc[sc] = arguments[sc];
          uc.forEach((Ic => {
            Bc.debug(`Adding "${Ic.name}" transport`), rB.some((cB => cB === Ic)) ? Bc.warn(`Transport ${Ic.name} is already added`) : (Ic.unpatchedConsole = cB, Ic.internalLogger = Bc, Ic.config = nc, Ic.metas = Vc, rB.push(Ic))
          }))
        },
        addBeforeSendHooks: function() {
          Bc.debug("Adding beforeSendHooks\n", uc);
          for (var cB = arguments.length, nc = new Array(cB), Vc = 0; Vc < cB; Vc++) nc[Vc] = arguments[Vc];
          nc.forEach((cB => {
            cB && uc.push(cB)
          }))
        },
        getBeforeSendHooks: () => [...uc],
        execute: cB => {
          var Ic;
          if (!nc.paused && kn(Vc).shouldCapture()) {
            if (Oc = cB.meta, !Nr.has(Oc)) {
              var uc, Pc, qB;
              const Bc = null === (uc = Vc.value.session) || void 0 === uc ? void 0 : uc.id,
                Ic = or(Vc);
              if (nc.paused) return;
              const rB = GB({}, cB.meta);
              (null === (Pc = rB.session) || void 0 === Pc ? void 0 : Pc.id) === Bc && (null === (qB = Ic.session) || void 0 === qB ? void 0 : qB.id) !== Bc && (void 0 === Ic.session ? delete rB.session : rB.session = Ic.session), cB = GB(GB({}, cB), {}, {
                meta: Er(rB)
              })
            }
            var Oc;
            (null === (Ic = nc.batching) || void 0 === Ic ? void 0 : Ic.enabled) && (null === Mc || void 0 === Mc || Mc.addItem(cB)), (cB => {
              var Vc;
              if ((null === (Vc = nc.batching) || void 0 === Vc ? void 0 : Vc.enabled) && rB.every((cB => cB.isBatched()))) return;
              const [Ic] = sc([cB]);
              if (void 0 !== Ic)
                for (const sc of rB) {
                  var uc;
                  Bc.debug(`Transporting item using ${sc.name}\n`, Ic), sc.isBatched() ? (null === (uc = nc.batching) || void 0 === uc ? void 0 : uc.enabled) || sc.send([Ic]) : sc.send(Ic)
                }
            })(cB)
          }
        },
        isPaused: () => nc.paused,
        pause: () => {
          Bc.debug("Pausing transports"), null === Mc || void 0 === Mc || Mc.pause(), nc.paused = !0
        },
        remove: function() {
          Bc.debug("Removing transports");
          for (var cB = arguments.length, nc = new Array(cB), Vc = 0; Vc < cB; Vc++) nc[Vc] = arguments[Vc];
          nc.forEach((cB => {
            Bc.debug(`Removing "${cB.name}" transport`);
            const nc = rB.indexOf(cB); - 1 !== nc ? rB.splice(nc, 1) : Bc.warn(`Transport "${cB.name}" is not added`)
          }))
        },
        removeBeforeSendHooks: function() {
          for (var cB = arguments.length, nc = new Array(cB), Vc = 0; Vc < cB; Vc++) nc[Vc] = arguments[Vc];
          Bc.debug("Removing beforeSendHooks"), uc = uc.filter((cB => !nc.includes(cB)))
        },
        get transports() {
          return [...rB]
        },
        unpause: () => {
          Bc.debug("Unpausing transports"), null === Mc || void 0 === Mc || Mc.start(), nc.paused = !1
        }
      }
    }

    function Hr(cB, Bc) {
      if (Bc.preserveOriginalError)
        for (const nc of cB) "exception" === nc.type && delete nc.payload.originalError;
      return cB
    }
    let Fr = cV;

    function Jr(cB) {
      var Bc;
      return Fr = null !== (Bc = cB.unpatchedConsole) && void 0 !== Bc ? Bc : Fr, Fr
    }
    let ju, Rr = jn;

    function iu(cB, Bc) {
      return Rr = gu(cB, Bc.internalLoggerLevel), Rr
    }

    function Kr(cB) {
      let {
        internalLogger: Bc,
        config: nc,
        metas: Vc,
        transports: Ic,
        tracesApi: rB,
        userActionsApi: uc
      } = cB;
      var sc;
      Bc.debug("Initializing exceptions API");
      let Mc = null;
      ju = null !== (sc = nc.parseStacktrace) && void 0 !== sc ? sc : ju;
      const Pc = cB => {
          Bc.debug("Changing stacktrace parser"), ju = null !== cB && void 0 !== cB ? cB : ju
        },
        {
          ignoreErrors: qB = [],
          preserveOriginalError: Oc
        } = nc;
      return Pc(nc.parseStacktrace), {
        changeStacktraceParser: Pc,
        getStacktraceParser: () => ju,
        pushError: function(cB) {
          let {
            skipDedupe: sc,
            stackFrames: Pc,
            type: Tc,
            context: fc,
            spanContext: mB,
            timestampOverwriteMs: ec,
            originalError: tB,
            fingerprint: Sc,
            fatal: yB
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (! function(cB, Bc) {
              const {
                message: nc,
                name: Vc,
                stack: Ic
              } = Bc;
              return rB = cB, uc = nc + " " + Vc + " " + Ic, rB.some((cB => aB(cB) ? uc.includes(cB) : !!uc.match(cB)));
              var rB, uc
            }(qB, null !== tB && void 0 !== tB ? tB : cB)) try {
            var zB, pc;
            if (!kn(Vc).shouldCapture()) return;
            const qB = EB(GB(GB({}, function(cB) {
                let Bc = cB.cause;
                oc(Bc) ? Bc = cB.cause.toString() : null !== Bc && (Uc(cB.cause) || Zc(cB.cause)) ? Bc = NB(cB.cause) : null != Bc && (Bc = cB.cause.toString());
                return null == Bc ? {} : {
                  cause: Bc
                }
              }(null !== tB && void 0 !== tB ? tB : cB)), null !== fc && void 0 !== fc ? fc : {})),
              aB = GB(GB(GB(GB({
                type: Tc || cB.name || "Error",
                value: cB.message,
                timestamp: ec ? eB(ec) : mn(),
                trace: mB ? {
                  trace_id: mB.traceId,
                  span_id: mB.spanId
                } : rB.getTraceContext()
              }, Rc(qB) ? {} : {
                context: qB
              }), Oc ? {
                originalError: tB
              } : {}), Sc ? {
                fingerprint: Sc
              } : {}), void 0 !== yB ? {
                fatal: yB
              } : {});
            Pc = null !== (zB = Pc) && void 0 !== zB ? zB : cB.stack ? null === ju || void 0 === ju ? void 0 : ju(cB).frames : void 0, (null === Pc || void 0 === Pc ? void 0 : Pc.length) && (aB.stacktrace = {
              frames: Pc
            });
            const lc = {
              type: aB.type,
              value: aB.value,
              stacktrace: aB.stacktrace,
              context: aB.context,
              fingerprint: aB.fingerprint,
              fatal: null !== (pc = aB.fatal) && void 0 !== pc && pc
            };
            if (!sc && nc.dedupe && !hc(Mc) && yn(lc, Mc)) return void Bc.debug("Skipping error push because it is the same as the last one\n", aB);
            const Yc = Mc,
              Lc = or(Vc);
            if (Mc !== Yc && !sc && nc.dedupe && yn(lc, Mc)) return;
            Mc = lc;
            const gB = {
              meta: Lc,
              payload: aB,
              type: "exception"
            };
            Bc.debug("Pushing exception\n", gB), lI(uc.getActiveUserAction(), gB) || Ic.execute(gB)
          } catch (lc) {
            Bc.error("Error pushing event", lc)
          }
        }
      }
    }

    function xu(cB, Bc, nc, Vc, Ic) {
      Bc.debug("Initializing API");
      let rB = null;
      const uc = function(cB) {
          let {
            transports: Bc,
            internalLogger: nc,
            config: Vc,
            pushEvent: Ic
          } = cB;
          var rB;
          const uc = null === (rB = Vc.userActionsInstrumentation) || void 0 === rB ? void 0 : rB.excludeItem;
          let sc;
          const Mc = () => sc;
          return {
            startUserAction: (cB, Vc, rB) => {
              if (void 0 === Mc()) {
                const nc = new hI({
                  name: cB,
                  transports: Bc,
                  attributes: Vc,
                  trigger: (null === rB || void 0 === rB ? void 0 : rB.triggerName) || "faroApiCall",
                  importance: (null === rB || void 0 === rB ? void 0 : rB.importance) || zr.Normal,
                  trackUserActionsExcludeItem: uc,
                  pushEvent: Ic
                });
                return nc.filter((cB => [3, 2].includes(cB))).first().subscribe((() => {
                  sc = void 0
                })), ar.notify({
                  type: yr,
                  userAction: nc,
                  initialActivityTimeout: null === rB || void 0 === rB ? void 0 : rB.initialActivityTimeout
                }), sc = nc, sc
              }
              nc.error("Attempted to create a new user action while one is already running. This is not possible.")
            },
            getActiveUserAction: Mc
          }
        }({
          transports: Ic,
          config: nc,
          internalLogger: Bc,
          pushEvent: (cB, nc, Vc, Ic) => {
            rB ? rB(cB, nc, Vc, Ic) : Bc.warn("pushEventImpl is not initialized. Event dropped:", {
              name: cB,
              attributes: nc,
              domain: Vc,
              options: Ic
            })
          }
        }),
        sc = function(cB, Bc, nc, Vc, Ic) {
          let rB;
          return Bc.debug("Initializing traces API"), {
            getOTEL: () => rB,
            getTraceContext: () => {
              const cB = null === rB || void 0 === rB ? void 0 : rB.trace.getSpanContext(rB.context.active());
              return cB ? {
                trace_id: cB.traceId,
                span_id: cB.spanId
              } : void 0
            },
            initOTEL: (cB, nc) => {
              Bc.debug("Initializing OpenTelemetry"), rB = {
                trace: cB,
                context: nc
              }
            },
            isOTELInitialized: () => !!rB,
            pushTraces: cB => {
              try {
                if (!kn(Vc).shouldCapture()) return;
                const nc = {
                  type: "trace",
                  payload: cB,
                  meta: or(Vc)
                };
                Bc.debug("Pushing trace\n", nc), Ic.execute(nc)
              } catch (nc) {
                Bc.error("Error pushing trace\n", nc)
              }
            }
          }
        }(0, Bc, 0, Vc, Ic),
        Mc = {
          unpatchedConsole: cB,
          internalLogger: Bc,
          userActionsApi: uc,
          config: nc,
          metas: Vc,
          transports: Ic,
          tracesApi: sc
        },
        Pc = function(cB) {
          let {
            internalLogger: Bc,
            config: nc,
            metas: Vc,
            transports: Ic,
            tracesApi: rB,
            userActionsApi: uc
          } = cB, sc = null;
          return {
            pushEvent: function(cB, Mc, Pc) {
              let {
                skipDedupe: qB,
                spanContext: Oc,
                timestampOverwriteMs: Tc,
                customPayloadTransformer: fc = cB => cB
              } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              try {
                if (!kn(Vc).shouldCapture()) return;
                const mB = EB(Mc),
                  ec = fc({
                    name: cB,
                    domain: null !== Pc && void 0 !== Pc ? Pc : nc.eventDomain,
                    attributes: Rc(mB) ? void 0 : mB,
                    timestamp: Tc ? eB(Tc) : mn(),
                    trace: Oc ? {
                      trace_id: Oc.traceId,
                      span_id: Oc.spanId
                    } : rB.getTraceContext()
                  }),
                  tB = {
                    name: ec.name,
                    attributes: ec.attributes,
                    domain: ec.domain
                  };
                if (!qB && nc.dedupe && !hc(sc) && yn(tB, sc)) return void Bc.debug("Skipping event push because it is the same as the last one\n", ec);
                const Sc = sc,
                  yB = or(Vc);
                if (sc !== Sc && !qB && nc.dedupe && yn(tB, sc)) return;
                sc = tB;
                const zB = {
                  meta: yB,
                  payload: ec,
                  type: "event"
                };
                Bc.debug("Pushing event\n", zB), lI(uc.getActiveUserAction(), zB) || Ic.execute(zB)
              } catch (mB) {
                Bc.error("Error pushing event", mB)
              }
            }
          }
        }(Mc);
      return rB = Pc.pushEvent, GB(GB(GB(GB(GB(GB(GB({}, sc), Kr(Mc)), function(cB) {
        let Bc, nc, Vc, Ic, {
          internalLogger: rB,
          metas: uc
        } = cB;
        rB.debug("Initializing meta API");
        const sc = cB => {
            nc && uc.remove(nc), nc = {
              user: cB
            }, uc.add(nc)
          },
          Mc = (cB, nc) => {
            var Vc;
            const Ic = null === nc || void 0 === nc ? void 0 : nc.overrides,
              rB = Ic ? {
                overrides: GB(GB({}, null === Bc || void 0 === Bc || null === (Vc = Bc.session) || void 0 === Vc ? void 0 : Vc.overrides), Ic)
              } : {};
            Bc && uc.remove(Bc), Bc = {
              session: GB(GB({}, Rc(cB) ? void 0 : cB), rB)
            }, uc.add(Bc)
          },
          Pc = (cB, Bc) => {
            kn(uc).notifySessionUpdate({
              type: "replace",
              session: cB,
              overrides: null === Bc || void 0 === Bc ? void 0 : Bc.overrides
            }), Mc(cB, Bc)
          },
          qB = () => uc.value.session,
          Oc = () => uc.value.page;
        return {
          setUser: sc,
          resetUser: sc,
          setSession: Pc,
          resetSession: Pc,
          getSession: qB,
          setView: (cB, Bc) => {
            var nc;
            if ((null === Bc || void 0 === Bc ? void 0 : Bc.overrides) && (kn(uc).notifySessionUpdate({
                type: "overrides",
                overrides: Bc.overrides
              }), Mc(qB(), {
                overrides: Bc.overrides
              })), (null === Vc || void 0 === Vc || null === (nc = Vc.view) || void 0 === nc ? void 0 : nc.name) === (null === cB || void 0 === cB ? void 0 : cB.name)) return;
            const Ic = Vc;
            Vc = {
              view: cB
            }, uc.add(Vc), Ic && uc.remove(Ic)
          },
          getView: () => uc.value.view,
          setPage: cB => {
            var Bc;
            const nc = aB(cB) ? GB(GB({}, null !== (Bc = null === Ic || void 0 === Ic ? void 0 : Ic.page) && void 0 !== Bc ? Bc : Oc()), {}, {
              id: cB
            }) : cB;
            Ic && uc.remove(Ic), Ic = {
              page: nc
            }, uc.add(Ic)
          },
          getPage: Oc
        }
      }(Mc)), function(cB) {
        let {
          internalLogger: Bc,
          config: nc,
          metas: Vc,
          transports: Ic,
          tracesApi: rB,
          userActionsApi: uc
        } = cB;
        var sc;
        Bc.debug("Initializing logs API");
        let Mc = null;
        const Pc = null !== (sc = nc.logArgsSerializer) && void 0 !== sc ? sc : Cn;
        return {
          pushLog: function(cB) {
            let {
              context: sc,
              level: qB,
              skipDedupe: Oc,
              spanContext: Tc,
              timestampOverwriteMs: fc
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!kn(Vc).shouldCapture()) return;
              const mB = EB(sc),
                ec = {
                  message: Pc(cB),
                  level: null !== qB && void 0 !== qB ? qB : "log",
                  context: Rc(mB) ? void 0 : mB,
                  timestamp: fc ? eB(fc) : mn(),
                  trace: Tc ? {
                    trace_id: Tc.traceId,
                    span_id: Tc.spanId
                  } : rB.getTraceContext()
                },
                tB = {
                  message: ec.message,
                  level: ec.level,
                  context: ec.context
                };
              if (!Oc && nc.dedupe && !hc(Mc) && yn(tB, Mc)) return void Bc.debug("Skipping log push because it is the same as the last one\n", ec);
              const Sc = Mc,
                yB = or(Vc);
              if (Mc !== Sc && !Oc && nc.dedupe && yn(tB, Mc)) return;
              Mc = tB;
              const zB = {
                type: "log",
                payload: ec,
                meta: yB
              };
              Bc.debug("Pushing log\n", zB), lI(uc.getActiveUserAction(), zB) || Ic.execute(zB)
            } catch (mB) {
              Bc.error("Error pushing log\n", mB)
            }
          }
        }
      }(Mc)), function(cB) {
        let {
          internalLogger: Bc,
          config: nc,
          metas: Vc,
          transports: Ic,
          tracesApi: rB,
          userActionsApi: uc
        } = cB;
        Bc.debug("Initializing measurements API");
        let sc = null;
        return {
          pushMeasurement: function(cB) {
            let {
              skipDedupe: Mc,
              context: Pc,
              spanContext: qB,
              timestampOverwriteMs: Oc
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!kn(Vc).shouldCapture()) return;
              const Tc = EB(Pc),
                fc = GB(GB({}, cB), {}, {
                  trace: qB ? {
                    trace_id: qB.traceId,
                    span_id: qB.spanId
                  } : rB.getTraceContext(),
                  timestamp: Oc ? eB(Oc) : mn(),
                  context: Rc(Tc) ? void 0 : Tc
                }),
                mB = {
                  type: fc.type,
                  values: fc.values,
                  context: fc.context
                };
              if (!Mc && nc.dedupe && !hc(sc) && yn(mB, sc)) return void Bc.debug("Skipping measurement push because it is the same as the last one\n", fc);
              const ec = sc,
                tB = or(Vc);
              if (sc !== ec && !Mc && nc.dedupe && yn(mB, sc)) return;
              sc = mB;
              const Sc = {
                type: "measurement",
                payload: fc,
                meta: tB
              };
              Bc.debug("Pushing measurement\n", Sc), lI(uc.getActiveUserAction(), Sc) || Ic.execute(Sc)
            } catch (Tc) {
              Bc.error("Error pushing measurement\n", Tc)
            }
          }
        }
      }(Mc)), Pc), uc)
    }

    function dr(cB) {
      const Bc = Jr(cB),
        nc = iu(Bc, cB);
      if (mB() && !cB.isolate) return void nc.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
      nc.debug("Initializing");
      const Vc = function(cB, Bc) {
          let nc, Vc = [],
            Ic = [],
            rB = [],
            uc = 0,
            sc = 0;
          const Mc = () => Vc.reduce(((cB, Bc) => Object.assign(cB, bB(Bc) ? Bc() : Bc)), {}),
            Pc = () => {
              if (Ic.length) {
                const cB = Mc();
                Ic.forEach((Bc => Bc(cB)))
              }
            };
          return {
            add: function() {
              for (var cB = arguments.length, nc = new Array(cB), Ic = 0; Ic < cB; Ic++) nc[Ic] = arguments[Ic];
              Bc.debug("Adding metas\n", nc), Vc.push(...nc), Pc()
            },
            remove: function() {
              for (var cB = arguments.length, nc = new Array(cB), Ic = 0; Ic < cB; Ic++) nc[Ic] = arguments[Ic];
              Bc.debug("Removing metas\n", nc), Vc = Vc.filter((cB => !nc.includes(cB))), Pc()
            },
            addListener: cB => {
              Bc.debug("Adding metas listener\n", cB), Ic.push(cB)
            },
            removeListener: cB => {
              Bc.debug("Removing metas listener\n", cB), Ic = Ic.filter((Bc => Bc !== cB))
            },
            capture: cB => {
              var Bc;
              const Vc = void 0 !== nc,
                Ic = null !== (Bc = nc) && void 0 !== Bc ? Bc : rB;
              Vc || (nc = Ic, uc = 0, sc = Ic.length);
              try {
                for (; uc < sc;) {
                  const cB = Ic[uc++];
                  null === cB || void 0 === cB || cB()
                }
                const Bc = Er(Mc());
                return null === cB || void 0 === cB || cB(), Bc
              } finally {
                Vc || (nc = void 0)
              }
            },
            addCaptureListener: cB => {
              rB.push(cB)
            },
            removeCaptureListener: cB => {
              rB = rB.filter((Bc => Bc !== cB))
            },
            get value() {
              return Mc()
            }
          }
        }(0, nc),
        Ic = Xr(Bc, nc, cB, Vc),
        rB = xu(Bc, nc, cB, Vc, Ic),
        uc = function(cB, Bc, nc, Vc, Ic, rB) {
          Bc.debug("Initializing instrumentations");
          const uc = [];
          return {
            add: function() {
              Bc.debug("Adding instrumentations");
              for (var sc = arguments.length, Mc = new Array(sc), Pc = 0; Pc < sc; Pc++) Mc[Pc] = arguments[Pc];
              Mc.forEach((sc => {
                Bc.debug(`Adding "${sc.name}" instrumentation`), uc.some((cB => cB.name === sc.name)) ? Bc.warn(`Instrumentation ${sc.name} is already added`) : (sc.unpatchedConsole = cB, sc.internalLogger = Bc, sc.config = nc, sc.metas = Vc, sc.transports = Ic, sc.api = rB, uc.push(sc), sc.initialize())
              }))
            },
            get instrumentations() {
              return [...uc]
            },
            remove: function() {
              Bc.debug("Removing instrumentations");
              for (var cB = arguments.length, nc = new Array(cB), Vc = 0; Vc < cB; Vc++) nc[Vc] = arguments[Vc];
              nc.forEach((cB => {
                var nc, Vc;
                Bc.debug(`Removing "${cB.name}" instrumentation`);
                const Ic = uc.reduce(((Bc, nc, Vc) => null === Bc && nc.name === cB.name ? Vc : null), null);
                null !== Ic ? (null === (nc = (Vc = uc[Ic]).destroy) || void 0 === nc || nc.call(Vc), uc.splice(Ic, 1)) : Bc.warn(`Instrumentation "${cB.name}" is not added`)
              }))
            }
          }
        }(Bc, nc, cB, Vc, Ic, rB),
        sc = tB(Bc, nc, cB, Vc, Ic, rB, uc);
      return wr(sc),
        function(cB) {
          cB.transports.add(...cB.config.transports), cB.transports.addBeforeSendHooks(cB.config.beforeSend)
        }(sc),
        function(cB) {
          cB.instrumentations.add(...cB.config.instrumentations)
        }(sc), sc
    }

    function Ar(cB) {
      const Bc = Qr(cB);
      if (Bc) return dr(Bc)
    }
  },
  6958: function(cB, Bc, nc) {
    var Vc;
    ! function(Ic, rB) {
      var uc = "function",
        sc = "undefined",
        Mc = "object",
        Pc = "string",
        qB = "major",
        Oc = "model",
        Tc = "name",
        fc = "type",
        mB = "vendor",
        ec = "version",
        tB = "architecture",
        Sc = "console",
        yB = "mobile",
        zB = "tablet",
        pc = "smarttv",
        hc = "wearable",
        aB = "embedded",
        lc = "Amazon",
        Yc = "Apple",
        Lc = "ASUS",
        gB = "BlackBerry",
        Uc = "Browser",
        bB = "Chrome",
        Zc = "Firefox",
        Qc = "Google",
        Cc = "Honor",
        vB = "Huawei",
        Dc = "LG",
        Nc = "Microsoft",
        Ec = "Motorola",
        oc = "Nvidia",
        Wc = "OnePlus",
        wc = "Opera",
        kB = "OPPO",
        Xc = "Samsung",
        Hc = "Sharp",
        Fc = "Sony",
        Jc = "Xiaomi",
        jB = "Zebra",
        Rc = "Facebook",
        iB = "Chromium OS",
        Kc = "Mac OS",
        xB = " Browser",
        dc = function(cB) {
          for (var Bc = {}, nc = 0; nc < cB.length; nc++) Bc[cB[nc].toUpperCase()] = cB[nc];
          return Bc
        },
        Ac = function(cB, Bc) {
          return typeof cB === Pc && -1 !== Gc(Bc).indexOf(Gc(cB))
        },
        Gc = function(cB) {
          return cB.toLowerCase()
        },
        cn = function(cB, Bc) {
          if (typeof cB === Pc) return cB = cB.replace(/^\s\s*/, ""), typeof Bc === sc ? cB : cB.substring(0, 500)
        },
        BB = function(cB, Bc) {
          for (var nc, Vc, Ic, sc, Pc, qB, Oc = 0; Oc < Bc.length && !Pc;) {
            var Tc = Bc[Oc],
              fc = Bc[Oc + 1];
            for (nc = Vc = 0; nc < Tc.length && !Pc && Tc[nc];)
              if (Pc = Tc[nc++].exec(cB))
                for (Ic = 0; Ic < fc.length; Ic++) qB = Pc[++Vc], typeof(sc = fc[Ic]) === Mc && sc.length > 0 ? 2 === sc.length ? typeof sc[1] == uc ? this[sc[0]] = sc[1].call(this, qB) : this[sc[0]] = sc[1] : 3 === sc.length ? typeof sc[1] !== uc || sc[1].exec && sc[1].test ? this[sc[0]] = qB ? qB.replace(sc[1], sc[2]) : rB : this[sc[0]] = qB ? sc[1].call(this, qB, sc[2]) : rB : 4 === sc.length && (this[sc[0]] = qB ? sc[3].call(this, qB.replace(sc[1], sc[2])) : rB) : this[sc] = qB || rB;
            Oc += 2
          }
        },
        nB = function(cB, Bc) {
          for (var nc in Bc)
            if (typeof Bc[nc] === Mc && Bc[nc].length > 0) {
              for (var Vc = 0; Vc < Bc[nc].length; Vc++)
                if (Ac(Bc[nc][Vc], cB)) return "?" === nc ? rB : nc
            } else if (Ac(Bc[nc], cB)) return "?" === nc ? rB : nc;
          return Bc.hasOwnProperty("*") ? Bc["*"] : cB
        },
        VB = {
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
        IB = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [ec, [Tc, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [ec, [Tc, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [Tc, ec],
            [/opios[\/ ]+([\w\.]+)/i],
            [ec, [Tc, wc + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [ec, [Tc, wc + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [ec, [Tc, wc]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [ec, [Tc, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [ec, [Tc, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
            [Tc, ec],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [ec, [Tc, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [ec, [Tc, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [ec, [Tc, "UC" + Uc]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [ec, [Tc, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [ec, [Tc, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [ec, [Tc, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [ec, [Tc, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [ec, [Tc, "Smart Lenovo " + Uc]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [Tc, /(.+)/, "$1 Secure " + Uc], ec
            ],
            [/\bfocus\/([\w\.]+)/i],
            [ec, [Tc, Zc + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [ec, [Tc, wc + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [ec, [Tc, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [ec, [Tc, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [ec, [Tc, wc + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [ec, [Tc, "MIUI" + xB]],
            [/fxios\/([\w\.-]+)/i],
            [ec, [Tc, Zc]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [ec, [Tc, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [Tc, /(.+)/, "$1Browser"], ec
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [Tc, /(.+)/, "$1" + xB], ec
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [ec, [Tc, Xc + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [ec, [Tc, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [Tc, "Sogou Mobile"], ec
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [Tc, ec],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [Tc],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [ec, Tc],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [Tc, Rc], ec
            ],
            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
            [Tc, ec],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [ec, [Tc, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [ec, [Tc, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [ec, [Tc, bB + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [Tc, bB + " WebView"], ec
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [ec, [Tc, "Android " + Uc]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [Tc, ec],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [ec, [Tc, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [ec, Tc],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [Tc, [ec, nB, {
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
            [Tc, ec],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [Tc, "Netscape"], ec
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [Tc, ec],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [ec, [Tc, Zc + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [Tc, [ec, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [Tc, [ec, /master.|lts./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [tB, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [tB, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [tB, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [tB, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [tB, "arm"]
            ],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [
              [tB, /ower/, "", Gc]
            ],
            [/ sun4\w[;\)]/i],
            [
              [tB, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
            [
              [tB, Gc]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [Oc, [mB, Xc],
              [fc, zB]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
            [Oc, [mB, Xc],
              [fc, yB]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [Oc, [mB, Yc],
              [fc, yB]
            ],
            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
            [Oc, [mB, Yc],
              [fc, zB]
            ],
            [/(macintosh);/i],
            [Oc, [mB, Yc]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [Oc, [mB, Hc],
              [fc, yB]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [Oc, [mB, Cc],
              [fc, zB]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [Oc, [mB, Cc],
              [fc, yB]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [Oc, [mB, vB],
              [fc, zB]
            ],
            [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
            [Oc, [mB, vB],
              [fc, yB]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [Oc, /_/g, " "],
              [mB, Jc],
              [fc, zB]
            ],
            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [Oc, /_/g, " "],
              [mB, Jc],
              [fc, yB]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [Oc, [mB, kB],
              [fc, yB]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [Oc, [mB, nB, {
                OnePlus: ["304", "403", "203"],
                "*": kB
              }],
              [fc, zB]
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [Oc, [mB, "Vivo"],
              [fc, yB]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [Oc, [mB, "Realme"],
              [fc, yB]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
            [Oc, [mB, Ec],
              [fc, yB]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [Oc, [mB, Ec],
              [fc, zB]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [Oc, [mB, Dc],
              [fc, zB]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
            [Oc, [mB, Dc],
              [fc, yB]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [Oc, [mB, "Lenovo"],
              [fc, zB]
            ],
            [/(nokia) (t[12][01])/i],
            [mB, Oc, [fc, zB]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
            [
              [Oc, /_/g, " "],
              [fc, yB],
              [mB, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [Oc, [mB, Qc],
              [fc, zB]
            ],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [Oc, [mB, Qc],
              [fc, yB]
            ],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [Oc, [mB, Fc],
              [fc, yB]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [Oc, "Xperia Tablet"],
              [mB, Fc],
              [fc, zB]
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [Oc, [mB, Wc],
              [fc, yB]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [Oc, [mB, lc],
              [fc, zB]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [Oc, /(.+)/g, "Fire Phone $1"],
              [mB, lc],
              [fc, yB]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [Oc, mB, [fc, zB]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [Oc, [mB, gB],
              [fc, yB]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [Oc, [mB, Lc],
              [fc, zB]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [Oc, [mB, Lc],
              [fc, yB]
            ],
            [/(nexus 9)/i],
            [Oc, [mB, "HTC"],
              [fc, zB]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [mB, [Oc, /_/g, " "],
              [fc, yB]
            ],
            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
            [Oc, [mB, "TCL"],
              [fc, zB]
            ],
            [/(itel) ((\w+))/i],
            [
              [mB, Gc], Oc, [fc, nB, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [Oc, [mB, "Acer"],
              [fc, zB]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [Oc, [mB, "Meizu"],
              [fc, yB]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [Oc, [mB, "Ulefone"],
              [fc, yB]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [Oc, [mB, "Energizer"],
              [fc, yB]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [Oc, [mB, "Cat"],
              [fc, yB]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [Oc, [mB, "Smartfren"],
              [fc, yB]
            ],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [Oc, [mB, "Nothing"],
              [fc, yB]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [Oc, [mB, "Archos"],
              [fc, zB]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [Oc, [mB, "Archos"],
              [fc, yB]
            ],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [mB, Oc, [fc, zB]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
            [mB, Oc, [fc, yB]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [mB, Oc, [fc, zB]],
            [/(surface duo)/i],
            [Oc, [mB, Nc],
              [fc, zB]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [Oc, [mB, "Fairphone"],
              [fc, yB]
            ],
            [/(u304aa)/i],
            [Oc, [mB, "AT&T"],
              [fc, yB]
            ],
            [/\bsie-(\w*)/i],
            [Oc, [mB, "Siemens"],
              [fc, yB]
            ],
            [/\b(rct\w+) b/i],
            [Oc, [mB, "RCA"],
              [fc, zB]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [Oc, [mB, "Dell"],
              [fc, zB]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [Oc, [mB, "Verizon"],
              [fc, zB]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [Oc, [mB, "Barnes & Noble"],
              [fc, zB]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [Oc, [mB, "NuVision"],
              [fc, zB]
            ],
            [/\b(k88) b/i],
            [Oc, [mB, "ZTE"],
              [fc, zB]
            ],
            [/\b(nx\d{3}j) b/i],
            [Oc, [mB, "ZTE"],
              [fc, yB]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [Oc, [mB, "Swiss"],
              [fc, yB]
            ],
            [/\b(zur\d{3}) b/i],
            [Oc, [mB, "Swiss"],
              [fc, zB]
            ],
            [/\b((zeki)?tb.*\b) b/i],
            [Oc, [mB, "Zeki"],
              [fc, zB]
            ],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [
              [mB, "Dragon Touch"], Oc, [fc, zB]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [Oc, [mB, "Insignia"],
              [fc, zB]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [Oc, [mB, "NextBook"],
              [fc, zB]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
              [mB, "Voice"], Oc, [fc, yB]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
              [mB, "LvTel"], Oc, [fc, yB]
            ],
            [/\b(ph-1) /i],
            [Oc, [mB, "Essential"],
              [fc, yB]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [Oc, [mB, "Envizen"],
              [fc, zB]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [Oc, [mB, "MachSpeed"],
              [fc, zB]
            ],
            [/\btu_(1491) b/i],
            [Oc, [mB, "Rotor"],
              [fc, zB]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [Oc, [mB, oc],
              [fc, zB]
            ],
            [/(sprint) (\w+)/i],
            [mB, Oc, [fc, yB]],
            [/(kin\.[onetw]{3})/i],
            [
              [Oc, /\./g, " "],
              [mB, Nc],
              [fc, yB]
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [Oc, [mB, jB],
              [fc, zB]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [Oc, [mB, jB],
              [fc, yB]
            ],
            [/smart-tv.+(samsung)/i],
            [mB, [fc, pc]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [Oc, /^/, "SmartTV"],
              [mB, Xc],
              [fc, pc]
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [mB, Dc],
              [fc, pc]
            ],
            [/(apple) ?tv/i],
            [mB, [Oc, Yc + " TV"],
              [fc, pc]
            ],
            [/crkey/i],
            [
              [Oc, bB + "cast"],
              [mB, Qc],
              [fc, pc]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [Oc, [mB, lc],
              [fc, pc]
            ],
            [/(shield \w+ tv)/i],
            [Oc, [mB, oc],
              [fc, pc]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [Oc, [mB, Hc],
              [fc, pc]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [Oc, [mB, Fc],
              [fc, pc]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [Oc, [mB, Jc],
              [fc, pc]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [mB, Oc, [fc, pc]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [mB, cn],
              [Oc, cn],
              [fc, pc]
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [Oc, [fc, pc]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [
              [fc, pc]
            ],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [mB, Oc, [fc, Sc]],
            [/droid.+; (shield)( bui|\))/i],
            [Oc, [mB, oc],
              [fc, Sc]
            ],
            [/(playstation \w+)/i],
            [Oc, [mB, Fc],
              [fc, Sc]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [Oc, [mB, Nc],
              [fc, Sc]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [Oc, [mB, Xc],
              [fc, hc]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [mB, Oc, [fc, hc]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [Oc, [mB, kB],
              [fc, hc]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [Oc, [mB, Yc],
              [fc, hc]
            ],
            [/(opwwe\d{3})/i],
            [Oc, [mB, Wc],
              [fc, hc]
            ],
            [/(moto 360)/i],
            [Oc, [mB, Ec],
              [fc, hc]
            ],
            [/(smartwatch 3)/i],
            [Oc, [mB, Fc],
              [fc, hc]
            ],
            [/(g watch r)/i],
            [Oc, [mB, Dc],
              [fc, hc]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [Oc, [mB, jB],
              [fc, hc]
            ],
            [/droid.+; (glass) \d/i],
            [Oc, [mB, Qc],
              [fc, hc]
            ],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [mB, Oc, [fc, hc]],
            [/; (quest( \d| pro)?)/i],
            [Oc, [mB, Rc],
              [fc, hc]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [mB, [fc, aB]],
            [/(aeobc)\b/i],
            [Oc, [mB, lc],
              [fc, aB]
            ],
            [/(homepod).+mac os/i],
            [Oc, [mB, Yc],
              [fc, aB]
            ],
            [/windows iot/i],
            [
              [fc, aB]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [Oc, [fc, yB]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [Oc, [fc, zB]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [fc, zB]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [fc, yB]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [Oc, [mB, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [ec, [Tc, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [Tc, ec],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [ec, [Tc, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [Tc, ec],
            [/ladybird\//i],
            [
              [Tc, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [ec, Tc]
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [Tc, ec],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [Tc, [ec, nB, VB]],
            [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [ec, nB, VB],
              [Tc, "Windows"]
            ],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [ec, /_/g, "."],
              [Tc, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
              [Tc, Kc],
              [ec, /_/g, "."]
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [ec, Tc],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [Tc, /(.+)/, "$1 Touch"], ec
            ],
            [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
            [Tc, ec],
            [/\(bb(10);/i],
            [ec, [Tc, gB]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [ec, [Tc, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [ec, [Tc, Zc + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [ec, [Tc, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [ec, [Tc, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [ec, [Tc, bB + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [Tc, iB], ec
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
            [Tc, ec],
            [/(sunos) ?([\w\.\d]*)/i],
            [
              [Tc, "Solaris"], ec
            ],
            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [Tc, ec]
          ]
        },
        rn = function(cB, Bc) {
          if (typeof cB === Mc && (Bc = cB, cB = rB), !(this instanceof rn)) return new rn(cB, Bc).getResult();
          var nc = typeof Ic !== sc && Ic.navigator ? Ic.navigator : rB,
            Vc = cB || (nc && nc.userAgent ? nc.userAgent : ""),
            Sc = nc && nc.userAgentData ? nc.userAgentData : rB,
            pc = Bc ? function(cB, Bc) {
              var nc = {};
              for (var Vc in cB) Bc[Vc] && Bc[Vc].length % 2 === 0 ? nc[Vc] = Bc[Vc].concat(cB[Vc]) : nc[Vc] = cB[Vc];
              return nc
            }(IB, Bc) : IB,
            hc = nc && nc.userAgent == Vc;
          return this.getBrowser = function() {
            var cB, Bc = {};
            return Bc[Tc] = rB, Bc[ec] = rB, BB.call(Bc, Vc, pc.browser), Bc[qB] = typeof(cB = Bc[ec]) === Pc ? cB.replace(/[^\d\.]/g, "").split(".")[0] : rB, hc && nc && nc.brave && typeof nc.brave.isBrave == uc && (Bc[Tc] = "Brave"), Bc
          }, this.getCPU = function() {
            var cB = {};
            return cB[tB] = rB, BB.call(cB, Vc, pc.cpu), cB
          }, this.getDevice = function() {
            var cB = {};
            return cB[mB] = rB, cB[Oc] = rB, cB[fc] = rB, BB.call(cB, Vc, pc.device), hc && !cB[fc] && Sc && Sc.mobile && (cB[fc] = yB), hc && "Macintosh" == cB[Oc] && nc && typeof nc.standalone !== sc && nc.maxTouchPoints && nc.maxTouchPoints > 2 && (cB[Oc] = "iPad", cB[fc] = zB), cB
          }, this.RV = function() {
            var cB = {};
            return cB[Tc] = rB, cB[ec] = rB, BB.call(cB, Vc, pc.engine), cB
          }, this.getOS = function() {
            var cB = {};
            return cB[Tc] = rB, cB[ec] = rB, BB.call(cB, Vc, pc.os), hc && !cB[Tc] && Sc && Sc.platform && "Unknown" != Sc.platform && (cB[Tc] = Sc.platform.replace(/chrome os/i, iB).replace(/macos/i, Kc)), cB
          }, this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.RV(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function() {
            return Vc
          }, this.setUA = function(cB) {
            return Vc = typeof cB === Pc && cB.length > 500 ? cn(cB, 500) : cB, this
          }, this.setUA(Vc), this
        };
      rn.VERSION = "1.0.41", rn.BROWSER = dc([Tc, ec, qB]), rn.CPU = dc([tB]), rn.DEVICE = dc([Oc, mB, fc, Sc, yB, pc, zB, hc, aB]), rn.ENGINE = rn.OS = dc([Tc, ec]), typeof Bc !== sc ? (cB.exports && (Bc = cB.exports = rn), Bc.UAParser = rn) : nc.amdO ? (Vc = function() {
        return rn
      }.call(Bc, nc, Bc, cB)) === rB || (cB.exports = Vc) : typeof Ic !== sc && (Ic.UAParser = rn);
      var uB = typeof Ic !== sc && (Ic.jQuery || Ic.Zepto);
      if (uB && !uB.ua) {
        var sB = new rn;
        uB.ua = sB.getResult(), uB.ua.get = function() {
          return sB.getUA()
        }, uB.ua.set = function(cB) {
          sB.setUA(cB);
          var Bc = sB.getResult();
          for (var nc in Bc) uB.ua[nc] = Bc[nc]
        }
      }
    }("object" === typeof window ? window : this)
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);