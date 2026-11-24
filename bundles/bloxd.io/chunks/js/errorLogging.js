export const id = 31;
export const ids = [31];
export const modules = {
  6639: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      BaseExtension: () => Bz,
      BaseInstrumentation: () => jz,
      BaseTransport: () => Bd,
      CSPInstrumentation: () => En,
      ConsoleInstrumentation: () => Fz,
      ConsoleTransport: () => dd,
      EVENT_CLICK: () => Lj,
      EVENT_NAVIGATION: () => gj,
      EVENT_ROUTE_CHANGE: () => qj,
      EVENT_SESSION_EXTEND: () => Ej,
      EVENT_SESSION_RESUME: () => Mj,
      EVENT_SESSION_START: () => Sj,
      EVENT_VIEW_CHANGED: () => tj,
      ErrorsInstrumentation: () => Vz,
      FetchTransport: () => Ed,
      InternalLoggerLevel: () => wj,
      LogLevel: () => Lz,
      MAX_SESSION_PERSISTENCE_TIME: () => uB,
      NavigationInstrumentation: () => en,
      Observable: () => Gz,
      PerformanceInstrumentation: () => KQ,
      PersistentSessionsManager: () => Zj,
      SESSION_EXPIRATION_TIME: () => dB,
      SESSION_INACTIVITY_TIME: () => IB,
      STORAGE_KEY: () => nB,
      SessionInstrumentation: () => Qz,
      TransportItemType: () => jd,
      UserActionInstrumentation: () => Mn,
      UserActionState: () => Jn,
      VERSION: () => zz,
      ViewInstrumentation: () => Xz,
      VolatileSessionsManager: () => Aj,
      WebVitalsInstrumentation: () => YQ,
      allLogLevels: () => tz,
      browserMeta: () => bn,
      buildStackFrame: () => nz,
      captureMetas: () => Wd,
      createInternalLogger: () => Dd,
      createPromiseBuffer: () => yd,
      createSession: () => Rn,
      deepEqual: () => Gj,
      defaultEventDomain: () => QB,
      defaultExceptionType: () => iz,
      defaultGlobalObjectKey: () => Fd,
      defaultInternalLoggerLevel: () => Kj,
      defaultLogLevel: () => gz,
      faro: () => mB,
      genShortID: () => kj,
      getCurrentTimestamp: () => Jj,
      getDataFromSafariExtensions: () => rz,
      getIgnoreUrls: () => CB,
      getInternalFaroFromGlobalObject: () => rB,
      getStackFramesFromError: () => Jz,
      getTransportBody: () => nd,
      getUrlFromResource: () => bB,
      getWebInstrumentations: () => wn,
      globalObject: () => aB,
      initializeFaro: () => zI,
      internalGlobalObjectKey: () => pB,
      isArray: () => HB,
      isBoolean: () => iB,
      isDomError: () => TB,
      isDomException: () => PB,
      isElement: () => eB,
      isElementDefined: () => WB,
      tJ: () => KB,
      isError: () => ZB,
      isErrorDefined: () => XB,
      isErrorEvent: () => AB,
      isEvent: () => hB,
      isEventDefined: () => VB,
      isFunction: () => oB,
      isInstanceOf: () => LB,
      isInt: () => EB,
      isInternalFaroOnGlobalObject: () => JB,
      isMap: () => wB,
      isMapDefined: () => lB,
      isNull: () => tB,
      isNumber: () => MB,
      isObject: () => fB,
      isPrimitive: () => YB,
      isRegExp: () => DB,
      isString: () => SB,
      isSymbol: () => qB,
      isSyntheticEvent: () => xB,
      isThenable: () => FB,
      isToString: () => GB,
      isTypeof: () => kB,
      isUndefined: () => gB,
      makeCoreConfig: () => hd,
      noop: () => lj,
      osMeta: () => vn,
      parseStacktrace: () => mz,
      sdkMeta: () => On,
      setInternalFaroOnGlobalObject: () => sB,
      transportItemTypeToBodyKey: () => zd,
      unknownString: () => hz,
      userActionDataAttribute: () => CQ,
      userActionTimeoutDataAttribute: () => cQ
    });
    const QB = "browser",
      nB = "com.grafana.faro.session",
      dB = 144e5,
      IB = 9e5,
      NB = 1e3,
      uB = IB,
      UB = {
        enabled: !0,
        persistent: !1,
        maxSessionPersistenceTime: uB
      };
    const aB = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof zB.g ? zB.g : "undefined" !== typeof self ? self : void 0;
    const pB = "_faroInternal";

    function rB() {
      return aB[pB]
    }

    function sB(BB) {
      BB.config.isolate ? BB.internalLogger.debug("Skipping registering internal Faro instance on global object") : (BB.internalLogger.debug("Registering internal Faro instance on global object"), Object.defineProperty(aB, pB, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: BB
      }))
    }

    function JB() {
      return pB in aB
    }
    let mB = {
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

    function yB(BB, jB, zB, QB, nB, dB, IB) {
      return jB.debug("Initializing Faro"), mB = {
          api: dB,
          config: zB,
          instrumentations: IB,
          internalLogger: jB,
          metas: QB,
          pause: nB.pause,
          transports: nB,
          unpatchedConsole: BB,
          unpause: nB.unpause
        }, sB(mB),
        function(BB) {
          if (BB.config.preventGlobalExposure) BB.internalLogger.debug("Skipping registering public Faro instance in the global scope");
          else {
            if (BB.internalLogger.debug(`Registering public faro reference in the global scope using "${BB.config.globalObjectKey}" key`), BB.config.globalObjectKey in aB) return void BB.internalLogger.warn(`Skipping global registration due to key "${BB.config.globalObjectKey}" being used already. Please set "globalObjectKey" to something else or set "preventGlobalExposure" to "true"`);
            Object.defineProperty(aB, BB.config.globalObjectKey, {
              configurable: !1,
              writable: !1,
              value: BB
            })
          }
        }(mB), mB
    }

    function kB(BB, jB) {
      return typeof BB === jB
    }

    function GB(BB, jB) {
      return Object.prototype.toString.call(BB) === `[object ${jB}]`
    }

    function LB(BB, jB) {
      try {
        return BB instanceof jB
      } catch (zB) {
        return !1
      }
    }
    const gB = BB => kB(BB, "undefined"),
      tB = BB => kB(BB, "null"),
      SB = BB => kB(BB, "string"),
      MB = BB => kB(BB, "number") && !isNaN(BB) || kB(BB, "bigint"),
      EB = BB => MB(BB) && Number.isInteger(BB),
      iB = BB => kB(BB, "boolean"),
      qB = BB => kB(BB, "symbol"),
      fB = BB => !tB(BB) && kB(BB, "object"),
      oB = BB => kB(BB, "function"),
      HB = BB => GB(BB, "Array"),
      DB = BB => GB(BB, "RegExp"),
      FB = BB => oB(null === BB || void 0 === BB ? void 0 : BB.then),
      YB = BB => !fB(BB) && !oB(BB),
      VB = "undefined" !== typeof Event,
      hB = BB => VB && LB(BB, Event),
      XB = "undefined" !== typeof Error,
      ZB = BB => XB && LB(BB, Error),
      AB = BB => GB(BB, "ErrorEvent"),
      TB = BB => GB(BB, "DOMError"),
      PB = BB => GB(BB, "DOMException"),
      WB = "undefined" !== typeof Element,
      eB = BB => WB && LB(BB, Element),
      lB = "undefined" !== typeof Map,
      wB = BB => lB && LB(BB, Map),
      xB = BB => fB(BB) && "nativeEvent" in BB && "preventDefault" in BB && "stopPropagation" in BB;

    function KB(BB) {
      return null == BB || (HB(BB) || SB(BB) ? 0 === BB.length : !!fB(BB) && 0 === Object.keys(BB).length)
    }

    function CB() {
      return mB.transports.transports.flatMap((BB => BB.getIgnoreUrls()))
    }

    function cB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return CB().some((jB => BB && null != BB.match(jB)))
    }

    function bB(BB) {
      return SB(BB) ? BB : BB instanceof URL ? BB.href : !KB(BB) && oB(null === BB || void 0 === BB ? void 0 : BB.toString) ? BB.toString() : void 0
    }
    const vB = "sessionStorage",
      RB = "localStorage";

    function OB(BB) {
      try {
        let jB;
        jB = window[BB];
        const zB = "__faro_storage_test__";
        return jB.setItem(zB, zB), jB.removeItem(zB), !0
      } catch (zB) {
        var jB;
        return null === (jB = mB.internalLogger) || void 0 === jB || jB.info(`Web storage of type ${BB} is not available. Reason: ${zB}`), !1
      }
    }

    function Bj(BB, jB) {
      return dj(jB) ? window[jB].getItem(BB) : null
    }

    function jj(BB, jB, zB) {
      if (dj(zB)) try {
        window[zB].setItem(BB, jB)
      } catch (QB) {}
    }

    function zj(BB, jB) {
      dj(jB) && window[jB].removeItem(BB)
    }
    const Qj = OB(RB),
      nj = OB(vB);

    function dj(BB) {
      return BB === RB ? Qj : BB === vB && nj
    }

    function Ij(BB) {
      return Ij = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, Ij(BB)
    }

    function Nj(BB) {
      var jB = function(BB, jB) {
        if ("object" != Ij(BB) || !BB) return BB;
        var zB = BB[Symbol.toPrimitive];
        if (void 0 !== zB) {
          var QB = zB.call(BB, jB || "default");
          if ("object" != Ij(QB)) return QB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === jB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == Ij(jB) ? jB : jB + ""
    }

    function uj(BB, jB, zB) {
      return (jB = Nj(jB)) in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }

    function Uj(BB, jB) {
      var zB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        jB && (QB = QB.filter((function(jB) {
          return Object.getOwnPropertyDescriptor(BB, jB).enumerable
        }))), zB.push.apply(zB, QB)
      }
      return zB
    }

    function aj(BB) {
      for (var jB = 1; jB < arguments.length; jB++) {
        var zB = null != arguments[jB] ? arguments[jB] : {};
        jB % 2 ? Uj(Object(zB), !0).forEach((function(jB) {
          uj(BB, jB, zB[jB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(zB)) : Uj(Object(zB)).forEach((function(jB) {
          Object.defineProperty(BB, jB, Object.getOwnPropertyDescriptor(zB, jB))
        }))
      }
      return BB
    }

    function pj() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mB;
      var jB, zB, QB;
      const nB = BB.config.sessionTracking,
        dB = null !== (jB = null !== (zB = null === nB || void 0 === nB || null === (QB = nB.sampler) || void 0 === QB ? void 0 : QB.call(nB, {
          metas: BB.metas.value
        })) && void 0 !== zB ? zB : null === nB || void 0 === nB ? void 0 : nB.samplingRate) && void 0 !== jB ? jB : 1,
        IB = "number" === typeof dB ? function(BB) {
          return Math.min(1, Math.max(0, BB))
        }(dB) : 0;
      if (!(IB > 0)) return !1;
      if (1 === IB) return !0;
      try {
        const BB = "undefined" !== typeof window ? window.crypto : void 0;
        if ("function" === typeof(null === BB || void 0 === BB ? void 0 : BB.getRandomValues)) {
          const jB = new Uint32Array(1);
          return BB.getRandomValues(jB), jB[0] / Math.pow(2, 32) < IB
        }
      } catch (NB) {}
      return Math.random() < IB
    }

    function rj() {
      return Date.now()
    }

    function sj() {
      return "undefined" !== typeof performance && "function" === typeof performance.now ? performance.now() : Date.now()
    }

    function Jj() {
      return (new Date).toISOString()
    }

    function mj(BB) {
      return new Date(BB).toISOString()
    }
    const yj = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

    function kj() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      const jB = new Uint32Array(BB),
        zB = "undefined" !== typeof globalThis ? globalThis.crypto : void 0;
      if (null === zB || void 0 === zB ? void 0 : zB.getRandomValues) zB.getRandomValues(jB);
      else
        for (let nB = 0; nB < BB; nB++) jB[nB] = Math.floor(4294967296 * Math.random());
      let QB = "";
      for (let nB = 0; nB < BB; nB++) QB += yj[jB[nB] % 59];
      return QB
    }

    function Gj(BB, jB) {
      if (BB === jB) return !0;
      if (kB(BB, "number") && isNaN(BB)) return kB(jB, "number") && isNaN(jB);
      const zB = HB(BB),
        QB = HB(jB);
      if (zB !== QB) return !1;
      if (zB && QB) {
        const zB = BB.length;
        if (zB !== jB.length) return !1;
        for (let QB = zB; 0 !== QB--;)
          if (!Gj(BB[QB], jB[QB])) return !1;
        return !0
      }
      const nB = fB(BB),
        dB = fB(jB);
      if (nB !== dB) return !1;
      if (BB && jB && nB && dB) {
        const zB = Object.keys(BB),
          QB = Object.keys(jB);
        if (zB.length !== QB.length) return !1;
        for (let BB of zB)
          if (!QB.includes(BB)) return !1;
        for (let nB of zB)
          if (!Gj(BB[nB], jB[nB])) return !1;
        return !0
      }
      return !1
    }
    const Lj = "click",
      gj = "navigation",
      tj = "view_changed",
      Sj = "session_start",
      Mj = "session_resume",
      Ej = "session_extend",
      ij = "service_name_override",
      qj = "route_change";

    function fj() {
      let {
        sessionId: BB,
        started: jB,
        lastActivity: zB,
        isSampled: QB = !0
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, nB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mB;
      var dB;
      const IB = rj(),
        NB = null === (dB = nB.config) || void 0 === dB || null === (dB = dB.sessionTracking) || void 0 === dB ? void 0 : dB.generateSessionId;
      return null == BB && (BB = "function" === typeof NB ? NB() : kj()), {
        sessionId: BB,
        lastActivity: null !== zB && void 0 !== zB ? zB : IB,
        started: null !== jB && void 0 !== jB ? jB : IB,
        isSampled: QB
      }
    }

    function oj(BB) {
      if (null == BB) return !1;
      const jB = rj();
      return jB - BB.started < 144e5 && jB - BB.lastActivity < IB
    }

    function Hj(BB) {
      let {
        fetchUserSession: jB,
        storeUserSession: zB,
        adoptSession: QB,
        updateInterval: nB = 0
      } = BB, NB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mB, uB = 0;
      return function() {
        let {
          forceSessionExtend: BB = !1,
          refreshActivity: UB = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var aB, pB;
        if (!jB || !zB) return;
        const rB = rj();
        if (!BB && rB < uB && uB - rB <= nB) return;
        const sB = NB.config.sessionTracking,
          JB = null === sB || void 0 === sB ? void 0 : sB.persistent;
        if (JB && !Qj || !JB && !nj) return;
        const mB = jB();
        if (uB = Math.min(rB + nB, (null !== (aB = null === mB || void 0 === mB ? void 0 : mB.started) && void 0 !== aB ? aB : rB) + dB, (null !== (pB = null === mB || void 0 === mB ? void 0 : mB.lastActivity) && void 0 !== pB ? pB : rB) + IB), !1 === BB && oj(mB)) {
          var yB;
          UB && zB(aj(aj({}, mB), {}, {
            lastActivity: rB
          }));
          const BB = null === (yB = NB.metas.value.session) || void 0 === yB ? void 0 : yB.id;
          null != QB && null != mB.sessionMeta && mB.sessionId !== BB && QB(mB.sessionMeta)
        } else {
          var kB, GB, LB;
          let BB = Fj(fj({
            isSampled: pj(NB)
          }, NB), mB, NB);
          uB = rB + nB, zB(BB), null === (kB = NB.api) || void 0 === kB || kB.setSession(BB.sessionMeta), null === sB || void 0 === sB || null === (GB = sB.onSessionChange) || void 0 === GB || GB.call(sB, null !== (LB = null === mB || void 0 === mB ? void 0 : mB.sessionMeta) && void 0 !== LB ? LB : null, BB.sessionMeta)
        }
      }
    }

    function Dj(BB) {
      let jB, {
          fetchUserSession: zB,
          storeUserSession: QB,
          updateInterval: nB = 0
        } = BB,
        dB = 0;
      return BB => {
        const IB = rj();
        if (BB === jB && IB < dB && dB - IB <= nB) return;
        jB = BB, dB = IB + nB;
        const NB = zB();
        (null === NB || void 0 === NB ? void 0 : NB.sessionId) === BB && oj(NB) && QB(aj(aj({}, NB), {}, {
          lastActivity: IB
        }))
      }
    }

    function Fj(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : mB;
      var QB, nB, dB, IB, NB, uB;
      const UB = aj(aj({}, BB), {}, {
          sessionMeta: {
            id: BB.sessionId,
            attributes: Vj(aj(aj(aj({}, null === (QB = zB.config.sessionTracking) || void 0 === QB || null === (QB = QB.session) || void 0 === QB ? void 0 : QB.attributes), null !== (nB = null === (dB = zB.metas.value.session) || void 0 === dB ? void 0 : dB.attributes) && void 0 !== nB ? nB : {}), {}, {
              isSampled: BB.isSampled.toString()
            }))
          }
        }),
        aB = null !== (IB = null === (NB = zB.metas.value.session) || void 0 === NB ? void 0 : NB.overrides) && void 0 !== IB ? IB : null === jB || void 0 === jB || null === (uB = jB.sessionMeta) || void 0 === uB ? void 0 : uB.overrides;
      KB(aB) || (UB.sessionMeta.overrides = aB);
      const pB = null === jB || void 0 === jB ? void 0 : jB.sessionId;
      return null != pB && (UB.sessionMeta.attributes.previousSession = pB), UB
    }

    function Yj(BB) {
      let {
        fetchUserSession: jB,
        storeUserSession: zB
      } = BB, QB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mB, nB = !1;
      return function(BB) {
        if (nB) return;
        const dB = BB.session,
          IB = jB();
        let NB = null === dB || void 0 === dB ? void 0 : dB.id;
        const uB = null === dB || void 0 === dB ? void 0 : dB.attributes,
          UB = null === dB || void 0 === dB ? void 0 : dB.overrides,
          aB = null === IB || void 0 === IB ? void 0 : IB.sessionMeta,
          pB = null === aB || void 0 === aB ? void 0 : aB.overrides,
          rB = !!UB && !Gj(UB, pB),
          sB = !!uB && !Gj(uB, null === aB || void 0 === aB ? void 0 : aB.attributes);
        if (dB && NB !== (null === IB || void 0 === IB ? void 0 : IB.sessionId) || sB || rB) {
          var JB, mB;
          const BB = null != IB && NB === IB.sessionId,
            jB = Fj(BB ? IB : fj({
              sessionId: NB,
              isSampled: pj(QB)
            }, QB), IB, QB),
            dB = null === IB || void 0 === IB || null === (JB = IB.sessionMeta) || void 0 === JB || null === (JB = JB.attributes) || void 0 === JB ? void 0 : JB.previousSession;
          BB && null != dB && dB !== jB.sessionId && (jB.sessionMeta.attributes.previousSession = dB), (null === (mB = jB.sessionMeta.attributes) || void 0 === mB ? void 0 : mB.previousSession) === jB.sessionId && delete jB.sessionMeta.attributes.previousSession, zB(jB),
            function(BB, jB) {
              let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              var nB, dB, IB;
              if (!jB) return;
              const NB = zB.serviceName,
                uB = null !== (nB = null !== (dB = QB.serviceName) && void 0 !== dB ? dB : null === (IB = BB.metas.value.app) || void 0 === IB ? void 0 : IB.name) && void 0 !== nB ? nB : "";
              NB && NB !== uB && BB.api.pushEvent(ij, {
                serviceName: NB,
                previousServiceName: uB
              })
            }(QB, rB, UB, pB), nB = !0;
          try {
            QB.api.setSession(jB.sessionMeta)
          } finally {
            nB = !1
          }
        }
      }
    }

    function Vj(BB) {
      const jB = {};
      for (const zB of Object.keys(BB)) {
        const QB = BB[zB];
        void 0 !== QB && (jB[zB] = QB)
      }
      return jB
    }

    function hj() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.stringify(null !== BB && void 0 !== BB ? BB : {}, function() {
        const BB = new WeakSet;
        return function(jB, zB) {
          if (fB(zB) && null !== zB) {
            if (BB.has(zB)) return null;
            BB.add(zB)
          }
          return zB
        }
      }())
    }

    function Xj() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const jB = {};
      for (const [zB, QB] of Object.entries(BB)) jB[zB] = fB(QB) && null !== QB ? hj(QB) : String(QB);
      return jB
    }
    var Zj = class BB {
      constructor() {
        var jB = this;
        let zB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mB;
        this.context = zB, this.adopting = !1, this.isAdopting = () => this.adopting, this.adoptSession = BB => {
          this.adopting = !0;
          try {
            var jB;
            null === (jB = this.context.api) || void 0 === jB || jB.setSession(BB)
          } finally {
            this.adopting = !1
          }
        }, this.updateSession = function() {
          let {
            refreshActivity: BB = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return jB.updateUserSession({
            refreshActivity: BB
          })
        }, this.recordActivity = Dj({
          fetchUserSession: BB.fetchUserSession,
          storeUserSession: BB.storeUserSession,
          updateInterval: NB
        }), this.updateUserSession = Hj({
          fetchUserSession: BB.fetchUserSession,
          storeUserSession: BB.storeUserSession,
          adoptSession: this.adoptSession,
          updateInterval: NB
        }, zB), this.init()
      }
      static removeUserSession() {
        zj(nB, BB.storageTypeLocal)
      }
      static storeUserSession(jB) {
        jj(nB, hj(jB), BB.storageTypeLocal)
      }
      static fetchUserSession() {
        const jB = Bj(nB, BB.storageTypeLocal);
        return jB ? JSON.parse(jB) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var BB;
            this.updateSession({
              refreshActivity: !1
            });
            const jB = null === (BB = this.context.api) || void 0 === BB || null === (BB = BB.getSession()) || void 0 === BB ? void 0 : BB.id;
            jB && this.recordActivity(jB)
          }
        })), this.context.metas.addListener(Yj({
          fetchUserSession: BB.fetchUserSession,
          storeUserSession: BB.storeUserSession
        }, this.context))
      }
    };
    Zj.storageTypeLocal = RB;
    var Aj = class BB {
      constructor() {
        var jB = this;
        let zB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mB;
        this.context = zB, this.isAdopting = () => !1, this.updateSession = function() {
          let {
            refreshActivity: BB = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return jB.updateUserSession({
            refreshActivity: BB
          })
        }, this.recordActivity = Dj({
          fetchUserSession: BB.fetchUserSession,
          storeUserSession: BB.storeUserSession,
          updateInterval: NB
        }), this.updateUserSession = Hj({
          fetchUserSession: BB.fetchUserSession,
          storeUserSession: BB.storeUserSession,
          updateInterval: NB
        }, zB), this.init()
      }
      static removeUserSession() {
        zj(nB, BB.storageTypeSession)
      }
      static storeUserSession(jB) {
        jj(nB, hj(jB), BB.storageTypeSession)
      }
      static fetchUserSession() {
        const jB = Bj(nB, BB.storageTypeSession);
        return jB ? JSON.parse(jB) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var BB;
            this.updateSession({
              refreshActivity: !1
            });
            const jB = null === (BB = this.context.api) || void 0 === BB || null === (BB = BB.getSession()) || void 0 === BB ? void 0 : BB.id;
            jB && this.recordActivity(jB)
          }
        })), this.context.metas.addListener(Yj({
          fetchUserSession: BB.fetchUserSession,
          storeUserSession: BB.storeUserSession
        }, this.context))
      }
    };
    Aj.storageTypeSession = vB;
    const Tj = new WeakMap;

    function Pj(BB) {
      let jB = Tj.get(BB);
      if (!jB) {
        let zB = [],
          QB = [];
        jB = {
          addSessionUpdateListener: BB => {
            zB.push(BB)
          },
          removeSessionUpdateListener: BB => {
            zB = zB.filter((jB => jB !== BB))
          },
          notifySessionUpdate: BB => {
            zB.forEach((jB => jB(BB)))
          },
          shouldCapture: () => QB.every((BB => BB())),
          addCaptureFilter: BB => {
            QB.push(BB)
          },
          removeCaptureFilter: BB => {
            QB = QB.filter((jB => jB !== BB))
          }
        }, Tj.set(BB, jB)
      }
      return jB
    }
    var Wj = class {
      constructor(BB, jB, zB) {
        this.metas = BB, this.transports = jB, this.onActivate = zB, this.waiting = !1, this.shouldCapture = () => !document.prerendering, this.discard = () => null, this.recordUpdate = BB => {
          var jB, zB, QB;
          const nB = this.pending;
          var dB, IB;
          if ("overrides" === BB.type) return void(this.pending = {
            reset: null !== (dB = null === nB || void 0 === nB ? void 0 : nB.reset) && void 0 !== dB && dB,
            inheritOverrides: null === (IB = null === nB || void 0 === nB ? void 0 : nB.inheritOverrides) || void 0 === IB || IB,
            session: aj(aj({}, null === nB || void 0 === nB ? void 0 : nB.session), {}, {
              overrides: aj(aj({}, null === nB || void 0 === nB ? void 0 : nB.session.overrides), BB.overrides)
            })
          });
          const NB = BB.session,
            uB = KB(NB) || null != NB && "id" in NB && !NB.id,
            UB = null !== (jB = null === NB || void 0 === NB ? void 0 : NB.overrides) && void 0 !== jB ? jB : null === nB || void 0 === nB ? void 0 : nB.session.overrides;
          this.pending = {
            reset: uB || !(null === NB || void 0 === NB ? void 0 : NB.id) && null !== (zB = null === nB || void 0 === nB ? void 0 : nB.reset) && void 0 !== zB && zB,
            inheritOverrides: !(!BB.overrides && void 0 !== (null === NB || void 0 === NB ? void 0 : NB.overrides)) && (null === (QB = null === nB || void 0 === nB ? void 0 : nB.inheritOverrides) || void 0 === QB || QB),
            session: {
              id: null === NB || void 0 === NB ? void 0 : NB.id,
              attributes: (null === NB || void 0 === NB ? void 0 : NB.attributes) && aj({}, NB.attributes),
              overrides: BB.overrides ? aj(aj({}, null === nB || void 0 === nB ? void 0 : nB.session.overrides), BB.overrides) : UB && aj({}, UB)
            }
          }
        }, this.activate = () => {
          this.waiting && this.shouldCapture() && (this.destroy(), this.onActivate(this.pending))
        }
      }
      initialize() {
        var BB, jB;
        this.waiting = !0, Pj(this.metas).addSessionUpdateListener(this.recordUpdate), Pj(this.metas).addCaptureFilter(this.shouldCapture), this.transports.addBeforeSendHooks(this.discard), document.addEventListener("prerenderingchange", this.activate), null === (BB = (jB = this.metas).addCaptureListener) || void 0 === BB || BB.call(jB, this.activate), this.activate()
      }
      destroy() {
        var BB, jB;
        this.waiting = !1, document.removeEventListener("prerenderingchange", this.activate), Pj(this.metas).removeSessionUpdateListener(this.recordUpdate), null === (BB = (jB = this.metas).removeCaptureListener) || void 0 === BB || BB.call(jB, this.activate), Pj(this.metas).removeCaptureFilter(this.shouldCapture), this.transports.removeBeforeSendHooks(this.discard)
      }
    };

    function ej(BB) {
      return (null === BB || void 0 === BB ? void 0 : BB.persistent) ? Zj : Aj
    }

    function lj() {}
    let wj = function(BB) {
      return BB[BB.OFF = 0] = "OFF", BB[BB.ERROR = 1] = "ERROR", BB[BB.WARN = 2] = "WARN", BB[BB.INFO = 3] = "INFO", BB[BB.VERBOSE = 4] = "VERBOSE", BB
    }({});
    const xj = {
        debug: lj,
        error: lj,
        info: lj,
        prefix: "Faro",
        warn: lj
      },
      Kj = 1;

    function Cj(BB) {
      return Cj = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, Cj(BB)
    }

    function cj(BB) {
      var jB = function(BB, jB) {
        if ("object" != Cj(BB) || !BB) return BB;
        var zB = BB[Symbol.toPrimitive];
        if (void 0 !== zB) {
          var QB = zB.call(BB, jB || "default");
          if ("object" != Cj(QB)) return QB;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === jB ? String : Number)(BB)
      }(BB, "string");
      return "symbol" == Cj(jB) ? jB : jB + ""
    }

    function bj(BB, jB, zB) {
      return (jB = cj(jB)) in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }

    function vj(BB, jB) {
      var zB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        jB && (QB = QB.filter((function(jB) {
          return Object.getOwnPropertyDescriptor(BB, jB).enumerable
        }))), zB.push.apply(zB, QB)
      }
      return zB
    }

    function Rj(BB) {
      for (var jB = 1; jB < arguments.length; jB++) {
        var zB = null != arguments[jB] ? arguments[jB] : {};
        jB % 2 ? vj(Object(zB), !0).forEach((function(jB) {
          bj(BB, jB, zB[jB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(zB)) : vj(Object(zB)).forEach((function(jB) {
          Object.defineProperty(BB, jB, Object.getOwnPropertyDescriptor(zB, jB))
        }))
      }
      return BB
    }
    const Oj = Rj({}, console);
    var Bz = class {
        constructor() {
          this.unpatchedConsole = Oj, this.internalLogger = xj, this.config = {}, this.metas = {}
        }
        logDebug() {
          for (var BB = arguments.length, jB = new Array(BB), zB = 0; zB < BB; zB++) jB[zB] = arguments[zB];
          this.internalLogger.debug(`${this.name}\n`, ...jB)
        }
        logInfo() {
          for (var BB = arguments.length, jB = new Array(BB), zB = 0; zB < BB; zB++) jB[zB] = arguments[zB];
          this.internalLogger.info(`${this.name}\n`, ...jB)
        }
        logWarn() {
          for (var BB = arguments.length, jB = new Array(BB), zB = 0; zB < BB; zB++) jB[zB] = arguments[zB];
          this.internalLogger.warn(`${this.name}\n`, ...jB)
        }
        logError() {
          for (var BB = arguments.length, jB = new Array(BB), zB = 0; zB < BB; zB++) jB[zB] = arguments[zB];
          this.internalLogger.error(`${this.name}\n`, ...jB)
        }
      },
      jz = class extends Bz {
        constructor() {
          super(...arguments), this.api = {}, this.transports = {}
        }
      };
    const zz = "2.12.1";
    var Qz = class extends jz {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-session", this.version = zz, this.isAdoptingSession = () => !1
      }
      sendSessionStartEvent(BB) {
        var jB;
        const zB = BB.session;
        if (zB && zB.id !== (null === (jB = this.notifiedSession) || void 0 === jB ? void 0 : jB.id)) {
          var QB;
          if (this.isAdoptingSession()) return void(this.notifiedSession = zB);
          if (this.notifiedSession && this.notifiedSession.id === (null === (QB = zB.attributes) || void 0 === QB ? void 0 : QB.previousSession)) return this.api.pushEvent(Ej, {}, void 0, {
            skipDedupe: !0
          }), void(this.notifiedSession = zB);
          this.notifiedSession = zB, this.api.pushEvent(Sj, {}, void 0, {
            skipDedupe: !0
          })
        }
      }
      createInitialSession(BB, jB, zB) {
        const QB = null === zB || void 0 === zB ? void 0 : zB.session;
        let nB, dB, IB = BB.fetchUserSession();
        if (jB.persistent && jB.maxSessionPersistenceTime && IB) {
          const BB = rj();
          IB.lastActivity < BB - jB.maxSessionPersistenceTime && (Zj.removeUserSession(), IB = null)
        }
        const NB = oj(IB);
        if ((null === zB || void 0 === zB ? void 0 : zB.reset) || !NB || (null === QB || void 0 === QB ? void 0 : QB.id) && QB.id !== (null === IB || void 0 === IB ? void 0 : IB.sessionId)) {
          var uB, UB, aB, pB, rB, sB;
          dB = fj({
            sessionId: (null === zB || void 0 === zB ? void 0 : zB.reset) ? void 0 : null !== (uB = null === QB || void 0 === QB ? void 0 : QB.id) && void 0 !== uB ? uB : null === (UB = jB.session) || void 0 === UB ? void 0 : UB.id,
            isSampled: pj(this)
          }, this);
          const BB = dB.sessionId,
            JB = zB && NB ? null === IB || void 0 === IB || null === (aB = IB.sessionMeta) || void 0 === aB ? void 0 : aB.overrides : void 0,
            mB = JB ? aj(aj({}, null === (pB = jB.session) || void 0 === pB ? void 0 : pB.overrides), JB) : null === (rB = jB.session) || void 0 === rB ? void 0 : rB.overrides;
          dB.sessionMeta = aj({
            id: BB,
            attributes: aj({
              isSampled: dB.isSampled.toString()
            }, null === (sB = jB.session) || void 0 === sB ? void 0 : sB.attributes)
          }, mB ? {
            overrides: mB
          } : {}), nB = Sj
        } else {
          var JB, mB;
          const BB = null === IB || void 0 === IB ? void 0 : IB.sessionId;
          dB = fj({
            sessionId: BB,
            isSampled: IB.isSampled || !1,
            started: null === IB || void 0 === IB ? void 0 : IB.started
          }, this);
          const zB = null === IB || void 0 === IB ? void 0 : IB.sessionMeta,
            QB = aj(aj({}, null === (JB = jB.session) || void 0 === JB ? void 0 : JB.overrides), null === zB || void 0 === zB ? void 0 : zB.overrides);
          dB.sessionMeta = aj(aj({}, jB.session), {}, {
            id: BB,
            attributes: aj(aj(aj({}, null === (mB = jB.session) || void 0 === mB ? void 0 : mB.attributes), null === zB || void 0 === zB ? void 0 : zB.attributes), {}, {
              isSampled: dB.isSampled.toString()
            }),
            overrides: QB
          }), nB = Mj
        }
        var yB;
        if (QB && (dB.sessionMeta = aj(aj({}, dB.sessionMeta), {}, {
            attributes: aj(aj(aj({}, null === (yB = dB.sessionMeta) || void 0 === yB ? void 0 : yB.attributes), QB.attributes), {}, {
              isSampled: dB.isSampled.toString()
            })
          }), QB.overrides)) {
          const BB = (null === zB || void 0 === zB ? void 0 : zB.inheritOverrides) ? aj(aj({}, dB.sessionMeta.overrides), QB.overrides) : QB.overrides;
          Object.keys(BB).length > 0 ? dB.sessionMeta.overrides = BB : delete dB.sessionMeta.overrides
        }
        return {
          initialSession: dB,
          lifecycleType: nB
        }
      }
      registerBeforeSendHook(BB) {
        var jB;
        this.beforeSendHook = jB => {
          var zB, QB;
          const nB = null === (zB = jB.meta.session) || void 0 === zB ? void 0 : zB.id;
          nB && !this.transports.isPaused() && BB(nB);
          const dB = null === (QB = jB.meta.session) || void 0 === QB ? void 0 : QB.attributes;
          if (dB && "true" === (null === dB || void 0 === dB ? void 0 : dB.isSampled)) {
            var IB;
            let BB = JSON.parse(JSON.stringify(jB));
            const zB = null === (IB = BB.meta.session) || void 0 === IB ? void 0 : IB.attributes;
            var NB;
            if (null === zB || void 0 === zB || delete zB.isSampled, 0 === Object.keys(null !== zB && void 0 !== zB ? zB : {}).length) null === (NB = BB.meta.session) || void 0 === NB || delete NB.attributes;
            return BB
          }
          return null
        }, null === (jB = this.transports) || void 0 === jB || jB.addBeforeSendHooks(this.beforeSendHook)
      }
      initialize() {
        var BB;
        this.logDebug("init session instrumentation");
        const jB = document.prerendering;
        var zB;
        if ((null === (BB = this.config.sessionTracking) || void 0 === BB ? void 0 : BB.enabled) && (jB || this.prerenderSession)) return null !== (zB = this.prerenderSession) && void 0 !== zB || (this.prerenderSession = new Wj(this.metas, this.transports, (BB => {
          this.prerenderSession = void 0, this.initializeSession(BB)
        }))), void this.prerenderSession.initialize();
        this.initializeSession()
      }
      initializeSession(BB) {
        const jB = this.config.sessionTracking;
        if (null === jB || void 0 === jB ? void 0 : jB.enabled) {
          var zB, QB;
          const nB = ej(jB),
            dB = new nB(this);
          this.isAdoptingSession = dB.isAdopting, this.registerBeforeSendHook(dB.recordActivity);
          const {
            initialSession: IB,
            lifecycleType: NB
          } = this.createInitialSession(nB, jB, BB);
          nB.storeUserSession(IB);
          const uB = IB.sessionMeta;
          this.notifiedSession = uB, this.api.setSession(uB), this.captureListener = () => {
            this.transports.isPaused() || dB.updateSession({
              refreshActivity: !1
            })
          }, null === (zB = (QB = this.metas).addCaptureListener) || void 0 === zB || zB.call(QB, this.captureListener), NB === Sj && this.api.pushEvent(Sj, {}, void 0, {
            skipDedupe: !0
          }), NB === Mj && this.api.pushEvent(Mj, {}, void 0, {
            skipDedupe: !0
          })
        }
        this.sessionStartListener = this.sendSessionStartEvent.bind(this), this.metas.addListener(this.sessionStartListener)
      }
      destroy() {
        var BB, jB, zB;
        (null === (BB = this.prerenderSession) || void 0 === BB || BB.destroy(), this.captureListener) && (null === (jB = (zB = this.metas).removeCaptureListener) || void 0 === jB || jB.call(zB, this.captureListener), this.captureListener = void 0);
        this.beforeSendHook && (this.transports.removeBeforeSendHooks(this.beforeSendHook), this.beforeSendHook = void 0), this.sessionStartListener && (this.metas.removeListener(this.sessionStartListener), this.sessionStartListener = void 0)
      }
    };

    function nz(BB, jB, zB, QB) {
      const nB = {
        filename: BB || document.location.href,
        function: jB || "?"
      };
      return void 0 !== zB && (nB.lineno = zB), void 0 !== QB && (nB.colno = QB), nB
    }
    const dz = /^\s*at (?:(?![a-z]+:\/\/)([^(]+?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      Iz = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      Nz = /^(?=[\s\S]*?(?:\/|bundle|\.js|\[native code]))\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      uz = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      Uz = "safari-extension",
      az = "safari-web-extension",
      pz = /Minified React error #\d+;/i;

    function rz(BB, jB) {
      const zB = null === BB || void 0 === BB ? void 0 : BB.includes(Uz),
        QB = !zB && (null === BB || void 0 === BB ? void 0 : BB.includes("safari-web-extension"));
      return zB || QB ? [(null === BB || void 0 === BB ? void 0 : BB.includes("@")) ? BB.split("@")[0] : BB, zB ? `${Uz}:${jB}` : `${az}:${jB}`] : [BB, jB]
    }
    const sz = 1024;

    function Jz(BB) {
      let jB = [];
      BB.stacktrace ? jB = BB.stacktrace.split("\n").filter(((BB, jB) => jB % 2 === 0)) : BB.stack && (jB = BB.stack.split("\n"));
      const zB = jB.reduce(((jB, zB, QB) => {
        if (zB.length > sz) return jB;
        let nB, dB, IB, NB, uB;
        if (nB = dz.exec(zB)) {
          if (dB = nB[1], IB = nB[2], NB = nB[3], uB = nB[4], null === IB || void 0 === IB ? void 0 : IB.startsWith("eval")) {
            const BB = Iz.exec(IB);
            BB && (IB = BB[1], NB = BB[2], uB = BB[3])
          }
          IB = (null === IB || void 0 === IB ? void 0 : IB.startsWith("address at ")) ? IB.substring(11) : IB, [dB, IB] = rz(dB, IB)
        } else if (nB = Nz.exec(zB)) {
          if (dB = nB[1], IB = nB[3], NB = nB[4], uB = nB[5], IB && IB.includes(" > eval")) {
            const BB = uz.exec(IB);
            BB && (dB = dB || "eval", IB = BB[1], NB = BB[2])
          } else 0 === QB && !uB && MB(BB.columnNumber) && (uB = String(BB.columnNumber + 1));
          [dB, IB] = rz(dB, IB)
        }
        return (IB || dB) && jB.push(nz(IB, dB, NB ? Number(NB) : void 0, uB ? Number(uB) : void 0)), jB
      }), []);
      return pz.test(BB.message) ? zB.slice(1) : zB
    }

    function mz(BB) {
      return {
        frames: Jz(BB)
      }
    }
    const yz = "http-request-start",
      kz = "http-request-end";
    var Gz = class BB {
      constructor() {
        this.subscribers = []
      }
      subscribe(BB) {
        return this.subscribers.push(BB), {
          unsubscribe: () => this.unsubscribe(BB)
        }
      }
      unsubscribe(BB) {
        this.subscribers = this.subscribers.filter((jB => jB !== BB))
      }
      notify(BB) {
        this.subscribers.forEach((jB => jB(BB)))
      }
      first() {
        const jB = new BB,
          zB = BB => {
            jB.notify(BB), QB.unsubscribe()
          },
          QB = this.subscribe(zB),
          nB = jB.unsubscribe.bind(jB);
        return this.withUnsubscribeOverride(jB, nB, zB)
      }
      takeWhile(jB) {
        const zB = new BB,
          QB = BB => {
            jB(BB) ? zB.notify(BB) : zB.unsubscribe(QB)
          };
        this.subscribe(QB);
        const nB = zB.unsubscribe.bind(zB);
        return this.withUnsubscribeOverride(zB, nB, QB)
      }
      filter(jB) {
        const zB = new BB,
          QB = BB => {
            jB(BB) && zB.notify(BB)
          };
        this.subscribe(QB);
        const nB = zB.unsubscribe.bind(zB);
        return this.withUnsubscribeOverride(zB, nB, QB)
      }
      merge() {
        const jB = new BB,
          zB = [];
        for (var QB = arguments.length, nB = new Array(QB), dB = 0; dB < QB; dB++) nB[dB] = arguments[dB];
        nB.forEach((BB => {
          const QB = BB.subscribe((BB => {
            jB.notify(BB)
          }));
          zB.push(QB)
        }));
        const IB = jB.unsubscribeAll.bind(jB);
        return jB.unsubscribe = () => {
          zB.forEach((BB => BB.unsubscribe())), IB()
        }, jB
      }
      withUnsubscribeOverride(BB, jB, zB) {
        return BB.unsubscribe = BB => {
          jB(BB), this.unsubscribe(zB)
        }, BB
      }
      unsubscribeAll() {
        this.subscribers = []
      }
    };
    let Lz = function(BB) {
      return BB.TRACE = "trace", BB.DEBUG = "debug", BB.INFO = "info", BB.LOG = "log", BB.WARN = "warn", BB.ERROR = "error", BB
    }({});
    const gz = "log",
      tz = ["trace", "debug", "info", "log", "warn", "error"];
    let Sz, Mz = !1;
    const Ez = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
      iz = "Error",
      qz = BB => BB.map((BB => fB(BB) ? hj(BB) : String(BB))).join(" ");

    function fz(BB) {
      let jB, zB, QB, nB, dB = [];
      if (AB(BB) && BB.error) jB = BB.error.message, zB = BB.error.name, dB = Jz(BB.error);
      else if ((QB = TB(BB)) || PB(BB)) {
        const {
          name: nB,
          message: dB
        } = BB;
        zB = null !== nB && void 0 !== nB ? nB : QB ? "DOMError" : "DOMException", jB = dB ? `${zB}: ${dB}` : zB
      } else ZB(BB) ? (zB = BB.name, jB = BB.message, dB = Jz(BB)) : (fB(BB) || (nB = hB(BB))) && (zB = nB ? BB.constructor.name : void 0, jB = `Non-Error exception captured with keys: ${Object.keys(BB)}`);
      return [jB, zB, dB]
    }

    function oz(BB) {
      const [jB, zB, QB, nB, dB] = BB;
      let IB, NB, uB = [];
      const UB = SB(jB),
        aB = nz(zB, "?", QB, nB);
      return dB || !UB ? ([IB, NB, uB] = fz(null !== dB && void 0 !== dB ? dB : jB), 0 === uB.length && (uB = [aB])) : UB && ([IB, NB] = function(BB) {
        var jB, zB;
        const QB = BB.match(Ez),
          nB = null !== (jB = null === QB || void 0 === QB ? void 0 : QB[1]) && void 0 !== jB ? jB : iz;
        return [null !== (zB = null === QB || void 0 === QB ? void 0 : QB[2]) && void 0 !== zB ? zB : BB, nB]
      }(jB), uB = [aB]), {
        value: IB,
        type: NB,
        stackFrames: uB
      }
    }

    function Hz(BB, jB) {
      return ZB(BB[0]) ? oz(BB) : {
        value: jB(BB)
      }
    }
    const Dz = BB => BB.map((BB => {
      try {
        return String(BB)
      } catch (jB) {
        return ""
      }
    })).join(" ");
    var Fz = class BB extends jz {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-console", this.version = zz, this.errorSerializer = Dz
      }
      initialize() {
        var jB, zB;
        const QB = this.config.consoleInstrumentation,
          nB = (null === QB || void 0 === QB ? void 0 : QB.serializeErrors) || !!(null === QB || void 0 === QB ? void 0 : QB.errorSerializer);
        this.errorSerializer = nB ? null !== (jB = null === QB || void 0 === QB ? void 0 : QB.errorSerializer) && void 0 !== jB ? jB : qz : Dz;
        const dB = null !== (zB = null === QB || void 0 === QB ? void 0 : QB.disabledLevels) && void 0 !== zB ? zB : BB.defaultDisabledLevels,
          IB = function(BB) {
            if (Sz || (Sz = new Gz), !Mz) {
              const jB = null !== BB && void 0 !== BB ? BB : Oj;
              tz.forEach((BB => {
                console[BB] = function() {
                  for (var zB, QB = arguments.length, nB = new Array(QB), dB = 0; dB < QB; dB++) nB[dB] = arguments[dB];
                  Sz.notify({
                    type: "console",
                    level: BB,
                    args: nB
                  }), null === (zB = jB[BB]) || void 0 === zB || zB.apply(console, nB)
                }
              })), Mz = !0
            }
            return Sz
          }(this.unpatchedConsole);
        this.subscription = IB.subscribe((jB => {
          let {
            level: zB,
            args: nB
          } = jB;
          if (!dB.includes(zB)) try {
            if (zB !== Lz.ERROR || (null === QB || void 0 === QB ? void 0 : QB.consoleErrorAsLog))
              if (zB === Lz.ERROR && (null === QB || void 0 === QB ? void 0 : QB.consoleErrorAsLog)) {
                const {
                  value: jB,
                  type: QB,
                  stackFrames: dB
                } = Hz(nB, this.errorSerializer);
                this.api.pushLog(jB ? [BB.consoleErrorPrefix + jB] : nB, {
                  level: zB,
                  context: {
                    value: null !== jB && void 0 !== jB ? jB : "",
                    type: null !== QB && void 0 !== QB ? QB : "",
                    stackFrames: (null === dB || void 0 === dB ? void 0 : dB.length) ? qz(dB) : ""
                  }
                })
              } else this.api.pushLog(nB, {
                level: zB
              });
            else {
              const {
                value: jB,
                type: zB,
                stackFrames: QB
              } = Hz(nB, this.errorSerializer);
              if (jB && !zB && !QB) return void this.api.pushError(new Error(BB.consoleErrorPrefix + jB));
              this.api.pushError(new Error(BB.consoleErrorPrefix + jB), {
                type: zB,
                stackFrames: QB
              })
            }
          } catch (IB) {
            this.logError(IB)
          }
        }))
      }
      destroy() {
        var BB;
        null === (BB = this.subscription) || void 0 === BB || BB.unsubscribe(), this.subscription = void 0
      }
    };
    Fz.defaultDisabledLevels = [Lz.DEBUG, Lz.TRACE, Lz.LOG], Fz.consoleErrorPrefix = "console.error: ";
    const Yz = [];
    var Vz = class extends jz {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-errors", this.version = zz
      }
      initialize() {
        this.logDebug("Initializing"),
          function(BB) {
            const jB = window.onerror;
            window.onerror = function() {
              for (var zB = arguments.length, QB = new Array(zB), nB = 0; nB < zB; nB++) QB[nB] = arguments[nB];
              try {
                const {
                  value: jB,
                  type: zB,
                  stackFrames: nB
                } = oz(QB), dB = QB[4];
                if (jB) {
                  const QB = {
                    type: zB,
                    stackFrames: nB
                  };
                  null != dB && (QB.originalError = dB), BB.pushError(new Error(jB), QB)
                }
              } finally {
                null === jB || void 0 === jB || jB.apply(window, QB)
              }
            }
          }(this.api),
          function(BB) {
            const jB = jB => {
              var zB;
              let QB, nB, dB = jB;
              if (dB.reason) dB = jB.reason;
              else if (null === (zB = jB.detail) || void 0 === zB ? void 0 : zB.reason) {
                var IB;
                dB = null === (IB = jB.detail) || void 0 === IB ? void 0 : IB.reason
              }
              let NB = [];
              YB(dB) ? (QB = `Non-Error promise rejection captured with value: ${String(dB)}`, nB = "UnhandledRejection") : [QB, nB, NB] = fz(dB), QB && BB.pushError(new Error(QB), {
                type: nB,
                stackFrames: NB
              })
            };
            window.addEventListener("unhandledrejection", jB), Yz.push(jB)
          }(this.api)
      }
    };
    const hz = "unknown";
    var Xz = class extends jz {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-view", this.version = zz, this.waitingForActivation = !1, this.sendViewChangedEvent = BB => {
          var jB;
          if (this.waitingForActivation || document.prerendering) return;
          const zB = BB.view;
          if (zB && zB.name !== (null === (jB = this.notifiedView) || void 0 === jB ? void 0 : jB.name)) {
            var QB, nB, dB;
            const BB = null !== (QB = null === (nB = this.notifiedView) || void 0 === nB ? void 0 : nB.name) && void 0 !== QB ? QB : hz;
            this.notifiedView = zB, this.api.pushEvent(tj, {
              fromView: BB,
              toView: null !== (dB = zB.name) && void 0 !== dB ? dB : hz
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
    class Zz {
      t;
      o = 0;
      i = [];
      l(BB) {
        if (BB.hadRecentInput) return;
        const jB = this.i[0],
          zB = this.i.at(-1);
        this.o && jB && zB && BB.startTime - zB.startTime < 1e3 && BB.startTime - jB.startTime < 5e3 ? (this.o += BB.value, this.i.push(BB)) : (this.o = BB.value, this.i = [BB]), this.t?.(BB)
      }
    }
    const Az = () => {
        const BB = performance.getEntriesByType("navigation")[0];
        if (BB && BB.responseStart > 0 && BB.responseStart < performance.now()) return BB
      },
      Tz = BB => {
        if ("loading" === document.readyState) return "loading";
        const jB = Az();
        if (jB) {
          if (BB < jB.domInteractive) return "loading";
          if (0 === jB.domContentLoadedEventStart || BB < jB.domContentLoadedEventStart) return "dom-interactive";
          if (0 === jB.domComplete || BB < jB.domComplete) return "dom-content-loaded"
        }
        return "complete"
      },
      Pz = BB => {
        const jB = BB.nodeName;
        return 1 === BB.nodeType ? jB.toLowerCase() : jB.toUpperCase().replace(/^#/, "")
      },
      Wz = BB => {
        let jB = "";
        try {
          for (; 9 !== BB?.nodeType;) {
            const zB = BB,
              QB = zB.id ? "#" + zB.id : [Pz(zB), ...Array.from(zB.classList ?? []).sort()].join(".");
            if (jB.length + QB.length > 99) return jB || QB;
            if (jB = jB ? QB + ">" + jB : QB, zB.id) break;
            BB = zB.parentNode
          }
        } catch {}
        return jB
      },
      ez = new WeakMap;

    function lz(BB, jB) {
      let zB = ez.get(jB);
      return zB || (zB = new WeakMap, ez.set(jB, zB)), zB.get(BB) || zB.set(BB, new jB), zB.get(BB)
    }
    let wz = -1;
    const xz = () => wz,
      Kz = BB => {
        addEventListener("pageshow", (jB => {
          jB.persisted && (wz = jB.timeStamp, BB(jB))
        }), !0)
      },
      Cz = (BB, jB, zB, QB) => {
        let nB, dB;
        return IB => {
          jB.value >= 0 && (IB || QB) && (dB = jB.value - (nB ?? 0), (dB || void 0 === nB) && (nB = jB.value, jB.delta = dB, jB.rating = ((BB, jB) => BB > jB[1] ? "poor" : BB > jB[0] ? "needs-improvement" : "good")(jB.value, zB), BB(jB)))
        }
      },
      cz = BB => {
        requestAnimationFrame((() => requestAnimationFrame((() => BB()))))
      },
      bz = () => Az()?.activationStart ?? 0;
    let vz = -1;
    const Rz = new Set,
      Oz = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
      BQ = BB => {
        if ("hidden" === document.visibilityState) {
          if ("visibilitychange" === BB.type)
            for (const BB of Rz) BB();
          isFinite(vz) || (vz = "visibilitychange" === BB.type ? BB.timeStamp : 0, removeEventListener("prerenderingchange", BQ, !0))
        }
      },
      jQ = function() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (vz = 1 / 0), vz < 0) {
          const BB = bz(),
            jB = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find((jB => "hidden" === jB.name && jB.startTime >= BB))?.startTime;
          vz = jB ?? Oz(), addEventListener("visibilitychange", BQ, !0), addEventListener("prerenderingchange", BQ, !0), Kz((() => {
            setTimeout((() => {
              vz = Oz()
            }))
          }))
        }
        return {
          get firstHiddenTime() {
            return vz
          },
          onHidden(BB) {
            Rz.add(BB)
          }
        }
      },
      zQ = function(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          zB = arguments.length > 2 ? arguments[2] : void 0,
          QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          nB = arguments.length > 4 ? arguments[4] : void 0,
          dB = arguments.length > 5 ? arguments[5] : void 0,
          IB = arguments.length > 6 ? arguments[6] : void 0;
        const NB = Az(),
          uB = NB?.navigationId || 0;
        let UB = "navigate";
        return zB ? UB = zB : xz() >= 0 ? UB = "back-forward-cache" : NB && (document.prerendering || bz() > 0 ? UB = "prerender" : document.wasDiscarded ? UB = "restore" : NB.type && (UB = NB.type.replace(/_/g, "-"))), {
          name: BB,
          value: jB,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
          navigationType: UB,
          navigationId: QB || uB,
          navigationInteractionId: nB,
          navigationURL: dB || NB?.name,
          navigationStartTime: IB || 0
        }
      },
      QQ = function(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          const QB = BB.filter((BB => PerformanceObserver.supportedEntryTypes.includes(BB)));
          if (QB.length > 0) {
            const BB = new PerformanceObserver((BB => {
              queueMicrotask((() => {
                const zB = BB.getEntries();
                QB.length > 1 && zB.sort(((BB, jB) => BB.startTime + BB.duration - (jB.startTime + jB.duration))), jB(zB)
              }))
            }));
            for (const jB of QB) BB.observe({
              type: jB,
              buffered: !0,
              ...zB
            });
            return BB
          }
        } catch {}
      },
      nQ = BB => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && BB && BB.reportSoftNavs,
      dQ = (BB, jB) => {
        if (BB.set(jB.navigationId, jB), BB.size > 2) {
          const jB = BB.keys().next().value;
          void 0 !== jB && BB.delete(jB)
        }
      },
      IQ = BB => {
        let jB = !1;
        return () => {
          jB || (BB(), jB = !0)
        }
      };
    class NQ {
      u
    }
    const uQ = BB => {
        document.prerendering ? addEventListener("prerenderingchange", BB, !0) : BB()
      },
      UQ = [1800, 3e3],
      aQ = function(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const zB = nQ(jB);
        uQ((() => {
          const QB = lz(jB, NQ),
            nB = jQ();
          let dB, IB = zQ("FCP");
          const NB = QQ(["paint"], (BB => {
            for (const jB of BB) "first-contentful-paint" === jB.name && (NB.disconnect(), jB.startTime < nB.firstHiddenTime && (IB.value = Math.max(jB.startTime - bz(), 0), IB.entries.push(jB), IB.navigationId = jB.navigationId || IB.navigationId, dB(!0)))
          }));
          NB && (dB = Cz(BB, IB, UQ, jB.reportAllChanges), Kz((zB => {
            IB = zQ("FCP", -1, "back-forward-cache", IB.navigationId, IB.navigationInteractionId, IB.navigationURL, xz()), dB = Cz(BB, IB, UQ, jB.reportAllChanges), cz((() => {
              IB.value = performance.now() - zB.timeStamp, dB(!0)
            }))
          }))), zB && QQ(["soft-navigation"], (zB => {
            zB.forEach((zB => {
              QB.u && zB.navigationId && dQ(QB.u, zB);
              const nB = Math.max((zB.presentationTime || zB.paintTime || 0) - zB.startTime, 0);
              IB = zQ("FCP", nB, "soft-navigation", zB.navigationId, zB.interactionId, zB.name, zB.startTime), dB = Cz(BB, IB, UQ, jB.reportAllChanges), dB(!0)
            }))
          }), jB)
        }))
      },
      pQ = [.1, .25],
      rQ = BB => BB.find((BB => 1 === BB.node?.nodeType)) || BB[0];
    let sQ = 0,
      JQ = 1 / 0,
      mQ = 0;
    const yQ = BB => {
      for (const jB of BB) jB.interactionId && (JQ = Math.min(JQ, jB.interactionId), mQ = Math.max(mQ, jB.interactionId), sQ = mQ ? (mQ - JQ) / 7 + 1 : 0)
    };
    let kQ;
    const GQ = () => kQ ? sQ : performance.interactionCount ?? 0;
    class LQ {
      h = 0;
      v = [];
      p = new Map;
      m;
      M;
      T() {
        return GQ() - this.h
      }
      D() {
        this.h = GQ(), this.v.length = 0, this.p.clear()
      }
      S(BB) {
        const jB = this.T(),
          zB = Math.min(this.v.length - 1, Math.floor(jB / 50));
        return !jB || -1 !== zB || "soft-navigation" !== BB && "back-forward-cache" !== BB ? this.v[zB] : {
          k: 8,
          id: -1,
          entries: []
        }
      }
      l(BB) {
        if (this.m?.(BB), !BB.interactionId) return;
        const jB = this.v.at(-1);
        let zB = this.p.get(BB.interactionId);
        if (zB || this.v.length < 10 || BB.duration > jB.k) {
          if (zB ? BB.duration > zB.k ? (zB.entries = [BB], zB.k = BB.duration) : BB.duration === zB.k && BB.startTime === zB.entries[0].startTime && zB.entries.push(BB) : (zB = {
              id: BB.interactionId,
              entries: [BB],
              k: BB.duration
            }, this.p.set(zB.id, zB), this.v.push(zB)), this.v.sort(((BB, jB) => jB.k - BB.k)), this.v.length > 10) {
            const BB = this.v.splice(10);
            for (const jB of BB) this.p.delete(jB.id)
          }
          this.M?.(zB)
        }
      }
    }
    const gQ = BB => {
        const jB = "requestIdleCallback" in globalThis ? 1e3 : 0,
          zB = globalThis.requestIdleCallback || setTimeout,
          QB = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) BB();
        else {
          const nB = IQ(BB);
          let dB = -1;
          const IB = () => {
            QB(dB), nB()
          };
          addEventListener("visibilitychange", IB, {
            once: !0,
            capture: !0
          }), dB = zB((() => {
            removeEventListener("visibilitychange", IB, {
              capture: !0
            }), nB()
          }), {
            timeout: jB
          })
        }
      },
      tQ = [200, 500],
      SQ = function(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const zB = lz(jB = Object.assign({}, jB), LQ);
        let QB = [],
          nB = [],
          dB = 0;
        const IB = new WeakMap,
          NB = new WeakMap;
        let uB = !1;
        const UB = () => {
            uB || (uB = !0, gQ(aB))
          },
          aB = () => {
            const BB = new Set(zB.v.map((BB => IB.get(BB.entries[0])))),
              jB = nB.length - 10;
            nB = nB.filter(((zB, QB) => QB >= jB || BB.has(zB)));
            const NB = new Set;
            for (const zB of nB) {
              const BB = pB(zB.startTime, zB.processingEnd);
              for (const jB of BB) NB.add(jB)
            }
            const UB = QB.length - 10;
            QB = QB.filter(((BB, jB) => NB.has(BB) || jB >= UB && BB.startTime > dB)), uB = !1
          };
        zB.m = BB => {
          const zB = BB.startTime + BB.duration;
          let QB;
          dB = Math.max(dB, BB.processingEnd);
          for (let dB = nB.length - 1; dB >= 0; dB--) {
            const IB = nB[dB];
            if (Math.abs(zB - IB.renderTime) <= 8) {
              QB = IB, QB.startTime = Math.min(BB.startTime, QB.startTime), QB.processingStart = Math.min(BB.processingStart, QB.processingStart), QB.processingEnd = Math.max(BB.processingEnd, QB.processingEnd), jB.includeProcessedEventEntries && QB.entries.push(BB);
              break
            }
          }
          QB || (QB = {
            startTime: BB.startTime,
            processingStart: BB.processingStart,
            processingEnd: BB.processingEnd,
            renderTime: zB,
            entries: jB.includeProcessedEventEntries ? [BB] : []
          }, nB.push(QB)), BB.interactionId && IB.set(BB, QB), UB()
        }, zB.M = BB => {
          if (!NB.get(BB)) {
            const zB = BB.entries.find((BB => BB.target))?.target;
            if (zB) {
              const QB = jB.generateTarget?.(zB) ?? Wz(zB);
              NB.set(BB, QB)
            } else {
              const jB = BB.entries.find((BB => BB.targetSelector))?.targetSelector;
              jB && NB.set(BB, jB)
            }
          }
        };
        const pB = (BB, jB) => {
          const zB = [];
          for (const nB of QB)
            if (!(nB.startTime + nB.duration < BB)) {
              if (nB.startTime > jB) break;
              zB.push(nB)
            } return zB
        };
        QQ(["long-animation-frame"], (BB => {
            QB = QB.concat(BB), UB()
          }), jB),
          function(BB) {
            let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
            const zB = jQ();
            uQ((() => {
              "interactionCount" in performance || kQ || (kQ = QQ(["event"], yQ, {
                durationThreshold: 0
              }));
              let QB, nB = zQ("INP");
              const dB = lz(jB, LQ),
                IB = (zB, IB, NB, uB, UB) => {
                  dB.D(), nB = zQ("INP", -1, zB, IB, NB, uB, UB), QB = Cz(BB, nB, tQ, jB.reportAllChanges)
                },
                NB = () => {
                  const BB = dB.S(nB.navigationType);
                  BB && BB.k !== nB.value && (nB.value = BB.k, nB.entries = BB.entries, QB())
                },
                uB = BB => {
                  NB(), QB(!0), IB("soft-navigation", BB.navigationId, BB.interactionId, BB.name, BB.startTime)
                },
                UB = function(BB) {
                  let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  gQ((() => {
                    for (const jB of BB) "soft-navigation" !== jB.entryType ? dB.l(jB) : uB(jB);
                    NB(), jB && QB(!0)
                  }))
                },
                aB = ["event", "first-input"];
              nQ(jB) && aB.push("soft-navigation");
              const pB = QQ(aB, UB, {
                ...jB,
                durationThreshold: jB.durationThreshold ?? 40
              });
              QB = Cz(BB, nB, tQ, jB.reportAllChanges), pB && (zB.onHidden((() => {
                UB(pB.takeRecords(), !0)
              })), Kz((() => {
                IB("back-forward-cache", nB.navigationId, nB.navigationInteractionId, nB.navigationURL, xz())
              })))
            }))
          }((jB => {
            BB((BB => {
              if (0 === BB.entries.length) {
                const jB = BB.navigationStartTime || 0,
                  zB = {
                    processedEventEntries: [],
                    longAnimationFrameEntries: [],
                    inputDelay: 0,
                    processingDuration: 0,
                    presentationDelay: BB.value,
                    loadState: Tz(jB)
                  };
                return Object.assign(BB, {
                  attribution: zB
                })
              }
              const jB = BB.entries[0],
                QB = IB.get(jB),
                nB = Math.max(QB.processingStart, jB.startTime),
                dB = Math.max(jB.startTime + jB.duration, nB),
                uB = Math.min(QB.processingEnd, dB),
                UB = QB.entries.sort(((BB, jB) => BB.processingStart - jB.processingStart)),
                aB = pB(jB.startTime, uB),
                rB = zB.p.get(jB.interactionId),
                sB = {
                  interactionTarget: NB.get(rB),
                  interactionType: jB.name.startsWith("key") ? "keyboard" : "pointer",
                  interactionTime: jB.startTime,
                  nextPaintTime: dB,
                  processedEventEntries: UB,
                  longAnimationFrameEntries: aB,
                  inputDelay: nB - jB.startTime,
                  processingDuration: uB - nB,
                  presentationDelay: dB - uB,
                  loadState: Tz(jB.startTime),
                  longestScript: void 0,
                  totalScriptDuration: void 0,
                  totalStyleAndLayoutDuration: void 0,
                  totalPaintDuration: void 0,
                  totalUnattributedDuration: void 0
                };
              return (BB => {
                const jB = BB.interactionTime,
                  zB = BB.nextPaintTime;
                if (!BB.longAnimationFrameEntries?.length || !jB || !zB) return;
                const QB = BB.inputDelay,
                  nB = BB.processingDuration;
                let dB, IB, NB = 0,
                  uB = 0,
                  UB = 0,
                  aB = 0;
                for (const sB of BB.longAnimationFrameEntries) {
                  uB = uB + sB.startTime + sB.duration - sB.styleAndLayoutStart;
                  for (const BB of sB.scripts) {
                    const zB = BB.startTime + BB.duration;
                    if (zB < jB) continue;
                    const UB = zB - Math.max(jB, BB.startTime),
                      pB = BB.duration ? UB / BB.duration * BB.forcedStyleAndLayoutDuration : 0;
                    NB += UB - pB, uB += pB, UB > aB && (IB = BB.startTime < jB + QB ? "input-delay" : BB.startTime >= jB + QB + nB ? "presentation-delay" : "processing-duration", dB = BB, aB = UB)
                  }
                }
                const pB = BB.longAnimationFrameEntries.at(-1),
                  rB = pB ? pB.startTime + pB.duration : 0;
                rB >= jB + QB + nB && (UB = zB - rB), dB && IB && (BB.longestScript = {
                  entry: dB,
                  subpart: IB,
                  intersectingDuration: aB
                }), BB.totalScriptDuration = NB, BB.totalStyleAndLayoutDuration = uB, BB.totalPaintDuration = UB, BB.totalUnattributedDuration = zB - jB - NB - uB - UB
              })(sB), Object.assign(BB, {
                attribution: sB
              })
            })(jB))
          }), jB)
      };
    class MQ {
      m;
      u;
      l(BB) {
        this.m?.(BB)
      }
    }
    const EQ = [2500, 4e3];
    let iQ = 50;
    const qQ = [];
    QQ(["resource"], (BB => {
      for (const jB of BB) qQ.push(jB), qQ.length > iQ && qQ.shift()
    }));
    const fQ = [800, 1800],
      oQ = BB => {
        document.prerendering ? uQ((() => oQ(BB))) : "complete" !== document.readyState ? addEventListener("load", (() => oQ(BB)), !0) : setTimeout(BB)
      },
      HQ = "load_state",
      DQ = "time_to_first_byte";
    var FQ = class {
        constructor(BB, jB) {
          this.corePushMeasurement = BB, this.webVitalConfig = jB
        }
        initialize() {
          this.measureCLS(), this.measureFCP(), this.measureINP(), this.measureLCP(), this.measureTTFB()
        }
        measureCLS() {
          var BB;
          ! function(BB) {
            let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const zB = lz(jB = Object.assign({}, jB), Zz),
              QB = new WeakMap;
            zB.t = BB => {
                if (BB?.sources?.length) {
                  const zB = rQ(BB.sources),
                    nB = zB?.node;
                  if (nB) {
                    const BB = jB.generateTarget?.(nB) ?? Wz(nB);
                    QB.set(zB, BB)
                  }
                }
              },
              function(BB) {
                let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const zB = jQ();
                aQ(IQ((() => {
                  let QB, nB = zQ("CLS", 0);
                  const dB = lz(jB, Zz),
                    IB = (zB, IB, NB, uB, UB) => {
                      nB = zQ("CLS", 0, zB, IB, NB, uB, UB), dB.o = 0, QB = Cz(BB, nB, pQ, jB.reportAllChanges)
                    },
                    NB = function() {
                      let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      dB.o > nB.value && (nB.value = dB.o, nB.entries = dB.i), QB(BB)
                    },
                    uB = BB => {
                      NB(!0), IB("soft-navigation", BB.navigationId, BB.interactionId, BB.name, BB.startTime)
                    },
                    UB = BB => {
                      for (const jB of BB) "soft-navigation" !== jB.entryType ? dB.l(jB) : uB(jB);
                      NB()
                    },
                    aB = ["layout-shift"];
                  nQ(jB) && aB.push("soft-navigation");
                  const pB = QQ(aB, UB);
                  pB && (QB = Cz(BB, nB, pQ, jB.reportAllChanges), zB.onHidden((() => {
                    UB(pB.takeRecords()), QB(!0)
                  })), Kz((() => {
                    IB("back-forward-cache", nB.navigationId, nB.navigationInteractionId, nB.navigationURL, xz()), cz(QB)
                  })), setTimeout(QB))
                })))
              }((jB => {
                BB((BB => {
                  let jB = {};
                  if (BB.entries.length) {
                    const zB = BB.entries.reduce(((BB, jB) => BB.value > jB.value ? BB : jB));
                    if (zB?.sources?.length) {
                      const BB = rQ(zB.sources);
                      BB && (jB = {
                        largestShiftTarget: QB.get(BB),
                        largestShiftTime: zB.startTime,
                        largestShiftValue: zB.value,
                        largestShiftSource: BB,
                        largestShiftEntry: zB,
                        loadState: Tz(zB.startTime)
                      })
                    }
                  }
                  return Object.assign(BB, {
                    attribution: jB
                  })
                })(jB))
              }), jB)
          }((BB => {
            const {
              loadState: jB,
              largestShiftValue: zB,
              largestShiftTime: QB,
              largestShiftTarget: nB
            } = BB.attribution, dB = this.buildInitialValues(BB);
            this.addIfPresent(dB, "largest_shift_value", zB), this.addIfPresent(dB, "largest_shift_time", QB);
            const IB = this.buildInitialContext(BB);
            this.addIfPresent(IB, HQ, jB), this.addIfPresent(IB, "largest_shift_target", nB), this.pushMeasurement(dB, IB)
          }), {
            reportAllChanges: null === (BB = this.webVitalConfig) || void 0 === BB ? void 0 : BB.reportAllChanges
          })
        }
        measureFCP() {
          var BB;
          ! function(BB) {
            let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const zB = lz(jB = Object.assign({}, jB), NQ);
            nQ(jB) && (zB.u = new Map), aQ((jB => {
              BB((BB => {
                let jB = {
                  timeToFirstByte: 0,
                  firstByteToFCP: BB.value,
                  loadState: Tz(xz())
                };
                if ("soft-navigation" !== BB.navigationType) {
                  if (BB.entries.length) {
                    const zB = Az(),
                      QB = BB.entries.at(-1);
                    if (zB) {
                      const nB = zB.responseStart,
                        dB = zB.activationStart || 0,
                        IB = Math.max(0, nB - dB);
                      jB = {
                        timeToFirstByte: IB,
                        firstByteToFCP: BB.value - IB,
                        loadState: Tz(BB.entries[0].startTime),
                        navigationEntry: zB,
                        fcpEntry: QB
                      }
                    }
                  }
                } else {
                  const QB = zB.u?.get(BB.navigationId);
                  QB && (jB = {
                    timeToFirstByte: 0,
                    firstByteToFCP: BB.value,
                    loadState: "complete",
                    navigationEntry: QB
                  })
                }
                return Object.assign(BB, {
                  attribution: jB
                })
              })(jB))
            }), jB)
          }((BB => {
            const {
              firstByteToFCP: jB,
              timeToFirstByte: zB,
              loadState: QB
            } = BB.attribution, nB = this.buildInitialValues(BB);
            this.addIfPresent(nB, "first_byte_to_fcp", jB), this.addIfPresent(nB, DQ, zB);
            const dB = this.buildInitialContext(BB);
            this.addIfPresent(dB, HQ, QB), this.pushMeasurement(nB, dB)
          }), {
            reportAllChanges: null === (BB = this.webVitalConfig) || void 0 === BB ? void 0 : BB.reportAllChanges
          })
        }
        measureINP() {
          var BB;
          SQ((BB => {
            var jB;
            const {
              interactionTime: zB,
              presentationDelay: QB,
              inputDelay: nB,
              processingDuration: dB,
              nextPaintTime: IB,
              loadState: NB,
              interactionTarget: uB,
              interactionType: UB,
              totalScriptDuration: aB,
              totalStyleAndLayoutDuration: pB,
              totalPaintDuration: rB,
              totalUnattributedDuration: sB,
              longestScript: JB
            } = BB.attribution, mB = this.buildInitialValues(BB);
            this.addIfPresent(mB, "interaction_time", zB), this.addIfPresent(mB, "presentation_delay", QB), this.addIfPresent(mB, "input_delay", nB), this.addIfPresent(mB, "processing_duration", dB), this.addIfPresent(mB, "next_paint_time", IB), this.addNumberIfDefined(mB, "total_script_duration", aB), this.addNumberIfDefined(mB, "total_style_and_layout_duration", pB), this.addNumberIfDefined(mB, "total_paint_duration", rB), this.addNumberIfDefined(mB, "total_unattributed_duration", sB), this.addNumberIfDefined(mB, "longest_script_intersecting_duration", null === JB || void 0 === JB ? void 0 : JB.intersectingDuration);
            const yB = this.buildInitialContext(BB);
            this.addIfPresent(yB, HQ, NB), this.addIfPresent(yB, "interaction_target", uB), this.addIfPresent(yB, "interaction_type", UB), this.addIfPresent(yB, "longest_script_subpart", null === JB || void 0 === JB ? void 0 : JB.subpart), this.addIfPresent(yB, "longest_script_invoker_type", null === JB || void 0 === JB ? void 0 : JB.entry.invokerType), (null === (jB = this.webVitalConfig) || void 0 === jB ? void 0 : jB.trackAttributionSources) && (this.addIfPresent(yB, "longest_script_invoker", null === JB || void 0 === JB ? void 0 : JB.entry.invoker), this.addIfPresent(yB, "longest_script_source_url", null === JB || void 0 === JB ? void 0 : JB.entry.sourceURL), this.addIfPresent(yB, "longest_script_source_function_name", null === JB || void 0 === JB ? void 0 : JB.entry.sourceFunctionName), this.addIfPresent(yB, "longest_script_source_char_position", void 0 !== (null === JB || void 0 === JB ? void 0 : JB.entry.sourceCharPosition) ? String(JB.entry.sourceCharPosition) : void 0)), this.pushMeasurement(mB, yB)
          }), {
            reportAllChanges: null === (BB = this.webVitalConfig) || void 0 === BB ? void 0 : BB.reportAllChanges
          })
        }
        measureLCP() {
          var BB;
          ! function(BB) {
            let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            null != (jB = Object.assign({}, jB)).resourceBufferSize && (iQ = jB.resourceBufferSize);
            const zB = lz(jB, MQ),
              QB = new WeakMap;
            nQ(jB) && (zB.u = new Map), zB.m = BB => {
                const zB = BB.element;
                if (zB) {
                  const nB = jB.generateTarget?.(zB) ?? Wz(zB);
                  QB.set(BB, nB)
                } else BB.id && QB.set(BB, `#${BB.id}`)
              },
              function(BB) {
                let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  zB = !1;
                const QB = nQ(jB);
                uQ((() => {
                  let nB, dB = jQ(),
                    IB = zQ("LCP");
                  const NB = lz(jB, MQ),
                    uB = (QB, NB, uB, UB, aB) => {
                      IB = zQ("LCP", -1, QB, NB, uB, UB, aB), nB = Cz(BB, IB, EQ, jB.reportAllChanges), zB = !1, "soft-navigation" === QB && (dB = jQ(!0))
                    },
                    UB = BB => {
                      NB.u && BB.navigationId && dQ(NB.u, BB), zB || nB(!0), uB("soft-navigation", BB.navigationId, BB.interactionId, BB.name, BB.startTime);
                      const jB = BB.getLargestInteractionContentfulPaint?.();
                      jB && aB([jB])
                    },
                    aB = BB => {
                      jB.reportAllChanges || QB || (BB = BB.slice(-1));
                      for (const jB of BB) {
                        if (!jB) continue;
                        if ("soft-navigation" === jB.entryType) {
                          UB(jB);
                          continue
                        }
                        let BB = 0,
                          zB = [],
                          QB = jB.startTime;
                        if ("largest-contentful-paint" === jB.entryType) BB = Math.max(jB.startTime - bz(), 0), NB.l(jB), zB = [jB];
                        else if ("interaction-contentful-paint" === jB.entryType) {
                          const nB = jB;
                          if (!IB.navigationId) continue;
                          if ("interactionId" in nB && nB.interactionId != IB.navigationInteractionId) continue;
                          QB = nB.largestContentfulPaint?.renderTime || 0, BB = Math.max(QB - jB.startTime, 0), nB.largestContentfulPaint && (NB.l(nB.largestContentfulPaint), zB = [nB.largestContentfulPaint])
                        }
                        QB < dB.firstHiddenTime && (IB.value = BB, IB.entries = zB, nB())
                      }
                    },
                    pB = ["largest-contentful-paint"];
                  QB && pB.push("interaction-contentful-paint", "soft-navigation");
                  const rB = QQ(pB, aB);
                  if (rB) {
                    nB = Cz(BB, IB, EQ, jB.reportAllChanges);
                    const dB = ["keydown", "click", "visibilitychange"],
                      NB = BB => {
                        if (BB.isTrusted && !zB) {
                          const BB = IB.id;
                          gQ((() => {
                            if (!zB) {
                              if (!QB) {
                                rB.disconnect();
                                for (const BB of dB) removeEventListener(BB, NB, {
                                  capture: !0
                                })
                              }
                              BB === IB.id && (zB = !0, nB(!0))
                            }
                          }))
                        }
                      };
                    for (const BB of dB) addEventListener(BB, NB, {
                      capture: !0
                    });
                    Kz((QB => {
                      uB("back-forward-cache", IB.navigationId, IB.navigationInteractionId, IB.navigationURL, xz()), nB = Cz(BB, IB, EQ, jB.reportAllChanges), cz((() => {
                        IB.value = performance.now() - QB.timeStamp, zB = !0, nB(!0)
                      }))
                    }))
                  }
                }))
              }((jB => {
                BB((BB => {
                  let jB = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadDuration: 0,
                    elementRenderDelay: BB.value
                  };
                  if (BB.entries.length) {
                    const nB = BB.entries.at(-1),
                      dB = BB => BB.name === nB.url && (BB.requestStart || BB.startTime) <= nB.startTime,
                      IB = nB.url && (qQ.findLast(dB) || performance.getEntriesByType("resource").findLast(dB));
                    let NB;
                    jB.target = QB.get(nB), jB.lcpEntry = nB, nB.url && (jB.url = nB.url), IB && (jB.lcpResourceEntry = IB);
                    let uB = 0,
                      UB = 0;
                    if ("soft-navigation" !== BB.navigationType ? (NB = Az(), uB = NB?.activationStart ?? 0, UB = NB?.responseStart ?? 0) : (uB = BB.navigationStartTime || 0, NB = zB.u?.get(BB.navigationId)), NB) {
                      const zB = Math.max(0, UB - uB),
                        QB = Math.max(zB, IB ? (IB.requestStart || IB.startTime) - uB : 0),
                        nB = Math.min(BB.value, Math.max(QB, IB ? IB.responseEnd - uB : 0));
                      jB = {
                        ...jB,
                        timeToFirstByte: zB,
                        resourceLoadDelay: QB - zB,
                        resourceLoadDuration: nB - QB,
                        elementRenderDelay: BB.value - nB,
                        navigationEntry: NB
                      }
                    }
                  }
                  return Object.assign(BB, {
                    attribution: jB
                  })
                })(jB))
              }), jB)
          }((BB => {
            var jB;
            const {
              elementRenderDelay: zB,
              resourceLoadDelay: QB,
              resourceLoadDuration: nB,
              timeToFirstByte: dB,
              target: IB,
              url: NB,
              lcpResourceEntry: uB
            } = BB.attribution, UB = this.buildInitialValues(BB);
            this.addIfPresent(UB, "element_render_delay", zB), this.addIfPresent(UB, "resource_load_delay", QB), this.addIfPresent(UB, "resource_load_duration", nB), this.addIfPresent(UB, DQ, dB);
            const aB = this.buildInitialContext(BB);
            this.addIfPresent(aB, "element", IB), (null === (jB = this.webVitalConfig) || void 0 === jB ? void 0 : jB.trackAttributionSources) && (this.addIfPresent(aB, "resource_url", NB), this.addIfPresent(aB, "resource_delivery_type", null === uB || void 0 === uB ? void 0 : uB.deliveryType), this.addIfPresent(aB, "resource_initiator_type", null === uB || void 0 === uB ? void 0 : uB.initiatorType)), this.pushMeasurement(UB, aB)
          }), {
            reportAllChanges: null === (BB = this.webVitalConfig) || void 0 === BB ? void 0 : BB.reportAllChanges
          })
        }
        measureTTFB() {
          var BB;
          ! function(BB) {
            ! function(BB) {
              let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const zB = nQ(jB);
              let QB = zQ("TTFB"),
                nB = Cz(BB, QB, fQ, jB.reportAllChanges);
              oQ((() => {
                const dB = Az();
                if (dB) {
                  const IB = dB.responseStart;
                  QB.value = Math.max(IB - bz(), 0), QB.entries = [dB], nB(!0), Kz((() => {
                    QB = zQ("TTFB", 0, "back-forward-cache", QB.navigationId, QB.navigationInteractionId, QB.navigationURL, xz()), nB = Cz(BB, QB, fQ, jB.reportAllChanges), nB(!0)
                  })), zB && QQ(["soft-navigation"], (zB => {
                    zB.forEach((zB => {
                      zB.navigationId && (QB = zQ("TTFB", 0, "soft-navigation", zB.navigationId, zB.interactionId, zB.name, zB.startTime), QB.entries = [zB], nB = Cz(BB, QB, fQ, jB.reportAllChanges), nB(!0))
                    }))
                  }), jB)
                }
              }))
            }((jB => {
              BB((BB => {
                const jB = BB.entries[0];
                let zB = {
                  waitingDuration: 0,
                  cacheDuration: 0,
                  dnsDuration: 0,
                  connectionDuration: 0,
                  requestDuration: 0,
                  navigationEntry: jB
                };
                if (BB.entries.length && jB instanceof PerformanceNavigationTiming) {
                  const QB = jB.activationStart || 0,
                    nB = Math.max((jB.workerStart || jB.fetchStart || 0) - QB, 0),
                    dB = Math.max(jB.domainLookupStart - QB, 0),
                    IB = Math.max(jB.connectStart - QB, 0),
                    NB = Math.max(jB.connectEnd - QB, 0);
                  zB = {
                    waitingDuration: nB,
                    cacheDuration: dB - nB,
                    dnsDuration: IB - dB,
                    connectionDuration: NB - IB,
                    requestDuration: BB.value - NB,
                    navigationEntry: jB
                  }
                }
                return Object.assign(BB, {
                  attribution: zB
                })
              })(jB))
            }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }((BB => {
            const {
              dnsDuration: jB,
              connectionDuration: zB,
              requestDuration: QB,
              waitingDuration: nB,
              cacheDuration: dB
            } = BB.attribution, IB = this.buildInitialValues(BB);
            this.addIfPresent(IB, "dns_duration", jB), this.addIfPresent(IB, "connection_duration", zB), this.addIfPresent(IB, "request_duration", QB), this.addIfPresent(IB, "waiting_duration", nB), this.addIfPresent(IB, "cache_duration", dB);
            const NB = this.buildInitialContext(BB);
            this.pushMeasurement(IB, NB)
          }), {
            reportAllChanges: null === (BB = this.webVitalConfig) || void 0 === BB ? void 0 : BB.reportAllChanges
          })
        }
        buildInitialValues(BB) {
          return {
            [BB.name.toLowerCase()]: BB.value,
            delta: BB.delta
          }
        }
        buildInitialContext(BB) {
          var jB;
          const zB = null !== (jB = Bj("com.grafana.faro.lastNavigationId", vB)) && void 0 !== jB ? jB : hz;
          return {
            id: BB.id,
            rating: BB.rating,
            navigation_type: BB.navigationType,
            navigation_entry_id: zB
          }
        }
        pushMeasurement(BB, jB) {
          this.corePushMeasurement({
            type: "web-vitals",
            values: BB
          }, {
            context: jB
          })
        }
        addIfPresent(BB, jB, zB) {
          zB && (BB[jB] = zB)
        }
        addNumberIfDefined(BB, jB, zB) {
          void 0 !== zB && (BB[jB] = zB)
        }
      },
      YQ = class extends jz {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-web-vitals", this.version = zz
        }
        initialize() {
          this.logDebug("Initializing"), new FQ(this.api.pushMeasurement, this.config.webVitalsInstrumentation).initialize()
        }
      };
    const VQ = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;

    function hQ() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      for (const jB of BB)
        if ("traceparent" === jB.name) {
          if (!VQ.test(jB.description)) continue;
          const [, BB, zB] = jB.description.split("-");
          if (null != BB && null != zB) return {
            traceId: BB,
            spanId: zB
          };
          break
        }
    }

    function XQ(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        wallNow: Date.now(),
        monoNow: performance.now()
      };
      const {
        wallNow: zB,
        monoNow: QB
      } = jB;
      return Math.min(zB, zB - (QB - BB))
    }

    function ZQ(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      for (const [zB, QB] of Object.entries(jB)) {
        const jB = BB[zB];
        return null != jB && (HB(QB) ? QB.includes(jB) : jB === QB)
      }
      return !0
    }

    function AQ(BB) {
      const {
        connectEnd: jB,
        connectStart: zB,
        decodedBodySize: QB,
        domainLookupEnd: nB,
        domainLookupStart: dB,
        duration: IB,
        encodedBodySize: NB,
        fetchStart: uB,
        initiatorType: UB,
        name: aB,
        nextHopProtocol: pB,
        redirectEnd: rB,
        redirectStart: sB,
        renderBlockingStatus: JB,
        requestStart: mB,
        responseEnd: yB,
        responseStart: kB,
        responseStatus: GB,
        secureConnectionStart: LB,
        transferSize: gB,
        workerStart: tB
      } = BB;
      return {
        name: aB,
        httpHost: PQ(aB),
        duration: WQ(IB),
        tcpHandshakeTime: WQ(jB - zB),
        dnsLookupTime: WQ(nB - dB),
        tlsNegotiationTime: WQ(jB - LB),
        responseStatus: WQ(GB),
        redirectTime: WQ(rB - sB),
        requestTime: WQ(kB - mB),
        responseTime: WQ(yB - kB),
        fetchTime: WQ(yB - uB),
        serviceWorkerTime: WQ(tB > 0 ? uB - tB : 0),
        decodedBodySize: WQ(QB),
        encodedBodySize: WQ(NB),
        cacheHitStatus: function() {
          let BB = "fullLoad";
          0 === gB ? QB > 0 && (BB = "cache") : null != GB ? 304 === GB && (BB = "conditionalFetch") : NB > 0 && gB < NB && (BB = "conditionalFetch");
          return BB
        }(),
        renderBlockingStatus: WQ(JB),
        protocol: pB,
        initiatorType: UB,
        visibilityState: document.visibilityState,
        ttfb: WQ(kB - mB),
        transferSize: WQ(gB)
      }
    }

    function TQ(BB) {
      const {
        activationStart: jB,
        domComplete: zB,
        domContentLoadedEventEnd: QB,
        domContentLoadedEventStart: nB,
        domInteractive: dB,
        fetchStart: IB,
        loadEventEnd: NB,
        loadEventStart: uB,
        responseStart: UB,
        type: aB
      } = BB, pB = function() {
        var BB;
        return null != (null === (BB = performance.timing) || void 0 === BB ? void 0 : BB.domLoading) ? performance.timing.domLoading - performance.timeOrigin : null
      }();
      return aj(aj({}, AQ(BB)), {}, {
        pageLoadTime: WQ(zB - IB),
        documentParsingTime: WQ(pB ? dB - pB : null),
        domProcessingTime: WQ(zB - dB),
        domContentLoadHandlerTime: WQ(QB - nB),
        onLoadTime: WQ(NB - uB),
        ttfb: WQ(Math.max(UB - (null !== jB && void 0 !== jB ? jB : 0), 0)),
        type: aB
      })
    }

    function PQ(BB) {
      try {
        return new URL(BB).host || hz
      } catch (jB) {
        return hz
      }
    }

    function WQ(BB) {
      return null == BB ? hz : "number" === typeof BB ? Math.round(BB > 0 ? BB : 0).toString() : BB.toString()
    }
    const eQ = {
      initiatorType: ["xmlhttprequest", "fetch"]
    };

    function lQ(BB, jB, zB, QB, nB, dB, IB) {
      try {
        var NB = BB[dB](IB),
          uB = NB.value
      } catch (BB) {
        return void zB(BB)
      }
      NB.done ? jB(uB) : Promise.resolve(uB).then(QB, nB)
    }

    function wQ(BB) {
      return function() {
        var jB = this,
          zB = arguments;
        return new Promise((function(QB, nB) {
          var dB = BB.apply(jB, zB);

          function IB(BB) {
            lQ(dB, QB, nB, IB, NB, "next", BB)
          }

          function NB(BB) {
            lQ(dB, QB, nB, IB, NB, "throw", BB)
          }
          IB(void 0)
        }))
      }
    }
    const xQ = new Gz;
    var KQ = class extends jz {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-performance", this.version = zz
      }
      initialize() {
        var BB = this;
        if (!("PerformanceObserver" in window)) return void this.logDebug("performance observer not supported. Disable performance instrumentation.");
        let jB = !1;
        const zB = () => {
          ! function(BB) {
            if ("complete" === document.readyState) BB();
            else {
              const jB = () => {
                "complete" === document.readyState && (BB(), document.removeEventListener("readystatechange", jB))
              };
              document.addEventListener("readystatechange", jB)
            }
          }(wQ((function*() {
            if (jB) return;
            const zB = BB.api.pushEvent,
              {
                faroNavigationId: QB
              } = yield function(BB) {
                let jB;
                const zB = new Promise((BB => {
                  jB = BB
                }));
                return new PerformanceObserver((zB => {
                  var QB;
                  const [nB] = zB.getEntries();
                  if (null == nB || cB(nB.name)) return;
                  const dB = nB.toJSON();
                  let IB = hQ(null === dB || void 0 === dB ? void 0 : dB.serverTiming);
                  const NB = null !== (QB = Bj("com.grafana.faro.lastNavigationId", vB)) && void 0 !== QB ? QB : hz,
                    uB = aj(aj({}, TQ(dB)), {}, {
                      faroNavigationId: kj(),
                      faroPreviousNavigationId: NB
                    });
                  jj("com.grafana.faro.lastNavigationId", uB.faroNavigationId, vB), BB("faro.performance.navigation", uB, void 0, {
                    spanContext: IB,
                    timestampOverwriteMs: XQ(dB.startTime)
                  }), jB(uB)
                })).observe({
                  type: "navigation",
                  buffered: !0
                }), zB
              }(zB);
            jB || null == QB || function(BB, jB, zB, QB) {
              const nB = QB.trackResources;
              new PerformanceObserver((QB => {
                const dB = QB.getEntries(),
                  IB = {
                    wallNow: Date.now(),
                    monoNow: performance.now()
                  };
                for (const NB of dB) {
                  if (cB(NB.name)) continue;
                  null === zB || void 0 === zB || zB.notify({
                    type: "resource"
                  });
                  const QB = NB.toJSON();
                  let dB = hQ(null === QB || void 0 === QB ? void 0 : QB.serverTiming);
                  (null == nB && ZQ(QB, eQ) || nB) && jB("faro.performance.resource", aj(aj({}, AQ(QB)), {}, {
                    faroNavigationId: BB,
                    faroResourceId: kj()
                  }), void 0, {
                    spanContext: dB,
                    timestampOverwriteMs: XQ(QB.startTime, IB)
                  })
                }
              })).observe({
                type: "resource",
                buffered: !0
              })
            }(QB, zB, xQ, BB.config)
          })))
        };
        this.cancelInitialization = () => {
          jB = !0, document.removeEventListener("prerenderingchange", zB)
        }, document.prerendering ? document.addEventListener("prerenderingchange", zB, {
          once: !0
        }) : zB()
      }
      destroy() {
        var BB;
        null === (BB = this.cancelInitialization) || void 0 === BB || BB.call(this), this.cancelInitialization = void 0
      }
    };
    const CQ = "data-faro-user-action-name",
      cQ = CQ.replace(/-name$/, "-timeout"),
      bQ = 1e3;

    function vQ(BB) {
      return `data-${(BB.startsWith("data-")?BB.slice(5):BB).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
    }

    function RQ(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
        zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : lj;
      if (void 0 === BB) return jB;
      let QB = NaN;
      try {
        QB = "string" === typeof BB && "" === BB.trim() ? NaN : Number(BB)
      } catch (nB) {}
      return !Number.isFinite(QB) || QB <= 0 ? (zB(`initialActivityTimeout must be a finite number greater than zero; using ${jB} ms`), jB) : QB > 1e3 ? (zB(`initialActivityTimeout cannot exceed ${bQ} ms; clamping to the maximum`), bQ) : QB
    }

    function OQ(BB, jB, zB) {
      return void 0 !== BB && window.clearTimeout(BB), window.setTimeout((() => {
        jB()
      }), zB)
    }

    function Bn(BB) {
      return BB.type === kz
    }
    let jn, zn;

    function Qn() {
      return jn || (jn = new Gz), zn || (zn = new MutationObserver(((BB, jB) => {
        jn.notify({
          type: "dom-mutation"
        })
      })), zn.observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0
      })), jn
    }
    const nn = "fetch",
      dn = "xhr";
    let In, Nn, un, Un, an = !1;

    function pn() {
      if (In) return In;

      function BB(BB) {
        In.notify({
          type: yz,
          request: BB
        })
      }

      function jB(BB) {
        In.notify({
          type: kz,
          request: BB
        })
      }
      return In = new Gz, an || (! function(BB) {
        let {
          onRequestEnd: jB,
          onRequestStart: zB
        } = BB;
        un || (un = window.fetch);
        window.fetch = function() {
          var BB, QB;
          const nB = null !== (BB = bB(arguments[0])) && void 0 !== BB ? BB : "",
            dB = cB(nB),
            IB = (null !== (QB = arguments[1]) && void 0 !== QB ? QB : {}).method,
            NB = kj();
          return dB || zB({
            url: nB,
            method: IB,
            requestId: NB,
            apiType: nn
          }), un.apply(this, arguments).then((BB => (dB || jB({
            url: nB,
            method: IB,
            requestId: NB,
            apiType: nn
          }), BB))).catch((BB => {
            throw dB || jB({
              url: nB,
              method: IB,
              requestId: NB,
              apiType: nn
            }), BB
          }))
        }
      }({
        onRequestStart: BB,
        onRequestEnd: jB
      }), function(BB) {
        let {
          onRequestStart: jB,
          onRequestEnd: zB
        } = BB;
        Nn || (Nn = XMLHttpRequest.prototype.open);
        XMLHttpRequest.prototype.open = function() {
          const BB = arguments[1],
            QB = cB(BB),
            nB = arguments[0],
            dB = kj();
          this.addEventListener("loadstart", (function() {
            QB || jB({
              url: BB,
              method: nB,
              requestId: dB,
              apiType: dn
            })
          })), this.addEventListener("load", (function() {
            QB || zB({
              url: BB,
              method: nB,
              requestId: dB,
              apiType: dn
            })
          })), this.addEventListener("error", (function() {
            QB || zB({
              url: BB,
              method: nB,
              requestId: dB,
              apiType: dn
            })
          })), this.addEventListener("abort", (function() {
            QB || zB({
              url: BB,
              method: nB,
              requestId: dB,
              apiType: dn
            })
          })), Nn.apply(this, arguments)
        }
      }({
        onRequestStart: BB,
        onRequestEnd: jB
      }), an = !0), In
    }
    let rn, sn = !1;
    let Jn = function(BB) {
      return BB[BB.Started = 0] = "Started", BB[BB.Halted = 1] = "Halted", BB[BB.Cancelled = 2] = "Cancelled", BB[BB.Ended = 3] = "Ended", BB
    }({});
    var mn = class {
      constructor(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        this.userAction = BB, this.logDebug = jB, this.initialActivityTimeout = zB, this.http = pn(), this.dom = Qn(), this.perf = (Un || (Un = new Gz), sn || (rn = xQ.subscribe((BB => {
          "resource" === BB.type && Un.notify({
            type: "resource-entry"
          })
        })), sn = !0), Un), this.isValid = !1, this.runningRequests = new Map
      }
      attach() {
        this.allMonitorsSub = (new Gz).merge(this.http, this.dom, this.perf).takeWhile((() => [Jn.Started, Jn.Halted].includes(this.userAction.getState()))).filter((BB => !!(this.userAction.getState() !== Jn.Halted || Bn(BB) && this.runningRequests.has(BB.request.requestId)))).subscribe((BB => {
          (function(BB) {
            return BB.type === yz
          })(BB) && this.runningRequests.set(BB.request.requestId, BB.request), Bn(BB) && this.runningRequests.delete(BB.request.requestId), Bn(BB) ? this.userAction.getState() === Jn.Halted && 0 === this.runningRequests.size && this.endAction() : (this.isValid || (this.isValid = !0, this.clearTimer(this.startupTid)), this.scheduleFollowUp())
        })), this.stateSub = this.userAction.filter((BB => [Jn.Ended, Jn.Cancelled].includes(BB))).first().subscribe((() => this.cleanup())), this.startupTid = OQ(this.startupTid, (() => {
          this.logDebug("User action not sent; no DOM, resource, or HTTP activity:", this.userAction.name), this.cancelAction()
        }), this.initialActivityTimeout)
      }
      scheduleFollowUp() {
        this.clearTimer(this.followUpTid), this.followUpTid = window.setTimeout((() => {
          this.userAction.getState() === Jn.Started && this.runningRequests.size > 0 ? this.haltAction() : this.isValid ? this.endAction() : this.cancelAction()
        }), 100)
      }
      haltAction() {
        this.userAction.getState() === Jn.Started && (this.userAction.halt(), this.startHaltTimeout())
      }
      startHaltTimeout() {
        this.clearTimer(this.haltTid), this.haltTid = OQ(this.haltTid, (() => {
          this.userAction.getState() === Jn.Halted && this.endAction()
        }), 1e4)
      }
      endAction() {
        this.userAction.end(), this.cleanup()
      }
      cancelAction() {
        this.userAction.cancel(), this.cleanup()
      }
      cleanup() {
        var BB, jB;
        this.clearTimer(this.startupTid), this.clearTimer(this.followUpTid), this.clearTimer(this.haltTid), null === (BB = this.allMonitorsSub) || void 0 === BB || BB.unsubscribe(), null === (jB = this.stateSub) || void 0 === jB || jB.unsubscribe(), this.allMonitorsSub = void 0, this.stateSub = void 0, this.runningRequests.clear()
      }
      clearTimer(BB) {
        void 0 !== BB && window.clearTimeout(BB)
      }
    };

    function yn(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lj;
      var zB;
      const {
        api: QB,
        config: nB,
        internalLogger: dB
      } = BB, IB = RQ(null === (zB = nB.userActionsInstrumentation) || void 0 === zB ? void 0 : zB.initialActivityTimeout, 100, jB);
      return {
        processUserEvent: function(BB) {
          var jB, zB;
          const dB = null !== (jB = null === (zB = nB.userActionsInstrumentation) || void 0 === zB ? void 0 : zB.dataAttributeName) && void 0 !== jB ? jB : CQ,
            IB = BB.target;
          if (!(IB instanceof Element)) return;
          const NB = function(BB, jB) {
              let zB = BB;
              for (; zB;) {
                if (zB.hasAttribute(jB)) return zB;
                zB = zB.parentElement
              }
              return null
            }(IB, vQ(dB)),
            uB = function(BB, jB) {
              if (!BB) return;
              const zB = function(BB) {
                  return vQ(BB).slice(5).replace(/-(.)/g, ((BB, jB) => jB.toUpperCase()))
                }(jB),
                QB = BB.dataset;
              for (const nB in QB)
                if (nB === zB) return QB[nB]
            }(NB, dB);
          if (!NB || !uB) return;
          const UB = function(BB, jB) {
            const zB = BB.getAttribute(function(BB) {
              const jB = vQ(BB);
              return jB.endsWith("-name") ? `${jB.slice(0,-5)}-timeout` : `${jB}-timeout`
            }(jB));
            return null === zB ? void 0 : Number(zB)
          }(NB, dB);
          QB.startUserAction(uB, {}, {
            triggerName: BB.type,
            initialActivityTimeout: UB
          })
        },
        processUserActionStarted: function(BB, zB) {
          const QB = BB,
            nB = RQ(zB, IB, jB);
          new mn(QB, dB.debug, nB).attach()
        }
      }
    }
    const kn = "user_action_start",
      Gn = {
        Normal: "normal",
        Critical: "critical"
      };
    var Ln = class {
        constructor() {
          this.buffer = []
        }
        addItem(BB) {
          this.buffer.push(BB)
        }
        flushBuffer(BB) {
          if (oB(BB))
            for (const jB of this.buffer) BB(jB);
          this.buffer.length = 0
        }
        size() {
          return this.buffer.length
        }
      },
      gn = class extends Gz {
        constructor(BB) {
          let {
            name: jB,
            parentId: zB,
            trigger: QB,
            transports: nB,
            attributes: dB,
            trackUserActionsExcludeItem: IB,
            importance: NB = Gn.Normal,
            pushEvent: uB
          } = BB;
          super(), this.name = jB, this.attributes = dB, this.id = kj(), this.trigger = QB, this.parentId = null !== zB && void 0 !== zB ? zB : this.id, this.trackUserActionsExcludeItem = IB, this.importance = NB, this._pushEvent = uB, this._itemBuffer = new Ln, this._transports = nB, this._state = 0, this._start()
        }
        addItem(BB) {
          return 0 === this._state && (this._itemBuffer.addItem(BB), !0)
        }
        _start() {
          this._state = 0, 0 === this._state && (this.startTime = rj(), this._startTimeMono = sj())
        }
        halt() {
          0 === this._state && (this._state = 1, this.notify(this._state))
        }
        cancel() {
          0 === this._state && this._itemBuffer.flushBuffer((BB => {
            this._transports.execute(BB)
          })), this._state = 2, this.notify(this._state)
        }
        end() {
          if (2 === this._state) return;
          const BB = rj(),
            jB = sj() - this._startTimeMono;
          this._state = 3, this._itemBuffer.flushBuffer((BB => {
            if (function(BB, jB) {
                return (null === jB || void 0 === jB ? void 0 : jB(BB)) || "measurement" === BB.type && "web-vitals" === BB.payload.type
              }(BB, this.trackUserActionsExcludeItem)) return void this._transports.execute(BB);
            const jB = Rj(Rj({}, BB), {}, {
              payload: Rj(Rj({}, BB.payload), {}, {
                action: {
                  parentId: this.id,
                  name: this.name
                }
              })
            });
            this._transports.execute(jB)
          })), this._state = 3, this.notify(this._state), this._pushEvent("faro.user.action", Rj({
            userActionName: this.name,
            userActionStartTime: this.startTime.toString(),
            userActionEndTime: BB.toString(),
            userActionDuration: jB.toString(),
            userActionTrigger: this.trigger,
            userActionImportance: this.importance
          }, Xj(this.attributes)), void 0, {
            timestampOverwriteMs: this.startTime,
            customPayloadTransformer: BB => (BB.action = {
              id: this.id,
              name: this.name
            }, BB)
          })
        }
        getState() {
          return this._state
        }
      };
    const tn = new Gz;

    function Sn(BB, jB) {
      return !!BB && (0 === (null === BB || void 0 === BB ? void 0 : BB.getState()) && (BB.addItem(jB), !0))
    }
    var Mn = class extends jz {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-user-action", this.version = zz
        }
        initialize() {
          const {
            processUserEvent: BB,
            processUserActionStarted: jB
          } = yn(mB, (BB => this.logWarn(BB)));
          this._processUserEvent = BB, this._processKeydown = jB => {
            [" ", "Enter"].includes(jB.key) && BB(jB)
          }, window.addEventListener("pointerdown", this._processUserEvent), window.addEventListener("keydown", this._processKeydown), this._userActionSub = tn.subscribe((BB => {
            let {
              type: zB,
              userAction: QB,
              initialActivityTimeout: nB
            } = BB;
            "user_action_start" === zB && jB(QB, nB)
          }))
        }
        destroy() {
          var BB;
          this._processUserEvent && window.removeEventListener("pointerdown", this._processUserEvent), this._processKeydown && window.removeEventListener("keydown", this._processKeydown), null === (BB = this._userActionSub) || void 0 === BB || BB.unsubscribe()
        }
      },
      En = class extends jz {
        constructor() {
          super(), this.name = "@grafana/faro-web-sdk:instrumentation-csp", this.version = zz, this.boundSecuritypolicyviolationHandler = this.securitypolicyviolationHandler.bind(this)
        }
        initialize() {
          document.addEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        destroy() {
          document.removeEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        securitypolicyviolationHandler(BB) {
          const jB = {
            blockedURI: BB.blockedURI,
            columnNumber: BB.columnNumber,
            disposition: BB.disposition,
            documentURI: BB.documentURI,
            effectiveDirective: BB.effectiveDirective,
            lineNumber: BB.lineNumber,
            originalPolicy: BB.originalPolicy,
            referrer: BB.referrer,
            sample: BB.sample,
            sourceFile: BB.sourceFile,
            statusCode: BB.statusCode,
            violatedDirective: BB.violatedDirective
          };
          this.api.pushEvent("securitypolicyviolation", Xj(jB))
        }
      };
    var qn = class extends Gz {
      constructor(BB, jB) {
        var zB, QB, nB, dB;
        super(), this._tracking = !1, this.eventsObservable = BB, this._options = {
          inactivityMs: null !== (zB = null === jB || void 0 === jB ? void 0 : jB.inactivityMs) && void 0 !== zB ? zB : 100,
          drainTimeoutMs: null !== (QB = null === jB || void 0 === jB ? void 0 : jB.drainTimeoutMs) && void 0 !== QB ? QB : 1e4,
          isOperationStart: null !== (nB = null === jB || void 0 === jB ? void 0 : jB.isOperationStart) && void 0 !== nB ? nB : () => {},
          isOperationEnd: null !== (dB = null === jB || void 0 === jB ? void 0 : jB.isOperationEnd) && void 0 !== dB ? dB : () => {}
        }, this._initialize()
      }
      _initialize() {
        this.eventsObservable.filter((() => this._tracking)).subscribe((BB => {
          var jB;
          this._lastEventTime = sj(), null === (jB = this._currentEvents) || void 0 === jB || jB.push(BB);
          const zB = this._options.isOperationStart(BB);
          var QB;
          zB && (null === (QB = this._activeOperations) || void 0 === QB || QB.set(zB, !0));
          const nB = this._options.isOperationEnd(BB);
          var dB;
          nB && (null === (dB = this._activeOperations) || void 0 === dB || dB.delete(nB));
          this._scheduleInactivityCheck()
        }))
      }
      startTracking() {
        this._tracking || (this._tracking = !0, this._startTime = sj(), this._lastEventTime = this._startTime, this.notify({
          message: "tracking-started"
        }), this._currentEvents = [], this._activeOperations = new Map, this._scheduleInactivityCheck())
      }
      stopTracking() {
        let BB;
        this._tracking = !1, this._clearTimer(this._inactivityTid), this._clearTimer(this._drainTid), BB = this.hasActiveOperations() ? sj() - this._startTime : this._lastEventTime ? this._lastEventTime - this._startTime : 0, this.notify({
          message: "tracking-ended",
          events: this._currentEvents,
          duration: BB
        })
      }
      _scheduleInactivityCheck() {
        this._inactivityTid = fn(this._inactivityTid, (() => {
          this.hasActiveOperations() ? this._startDrainTimeout() : this.stopTracking()
        }), this._options.inactivityMs)
      }
      _startDrainTimeout() {
        this._drainTid = fn(this._drainTid, (() => {
          this.stopTracking()
        }), this._options.drainTimeoutMs)
      }
      hasActiveOperations() {
        return !!this._activeOperations && this._activeOperations.size > 0
      }
      _clearTimer(BB) {
        BB && clearTimeout(BB)
      }
    };

    function fn(BB, jB, zB) {
      return BB && clearTimeout(BB), BB = setTimeout((() => {
        jB()
      }), zB)
    }
    let Hn;
    const Dn = new Set,
      Fn = new Map;
    let Yn, Vn, hn, Xn, Zn, An, Tn, Pn, Wn = !1;
    var en = class extends jz {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-navigation", this.version = zz
      }
      initialize() {
        const BB = pn(),
          jB = Qn(),
          zB = function() {
            function BB(BB, jB) {
              const zB = null !== jB && void 0 !== jB ? jB : location.href;
              zB !== Vn && (Yn.notify({
                type: "url-change",
                from: Vn,
                to: zB,
                trigger: BB
              }), Vn = zB)
            }
            if (Yn || (Yn = new Gz, Vn = location.href), !Wn)
              if ("navigation" in window && "NavigateEvent" in window) {
                Tn = jB => {
                  try {
                    const zB = null === jB || void 0 === jB ? void 0 : jB.destination;
                    (null === zB || void 0 === zB ? void 0 : zB.sameDocument) && "string" === typeof zB.url && BB("navigate", zB.url)
                  } catch (zB) {}
                }, window.navigation.addEventListener("navigate", Tn);
                const jB = window.NavigateEvent;
                jB && jB.prototype && "function" === typeof jB.prototype.intercept && (Pn || (Pn = jB.prototype.intercept), jB.prototype.intercept = function(jB) {
                  try {
                    const jB = !!(null === this || void 0 === this ? void 0 : this.canIntercept),
                      zB = null === this || void 0 === this ? void 0 : this.destination;
                    jB && zB && !1 === zB.sameDocument && "string" === typeof zB.url && BB("navigate-intercept", zB.url)
                  } catch (zB) {}
                  return Pn.call(this, jB)
                }), Wn = !0
              } else hn || (hn = window.history.pushState), window.history.pushState = function() {
                for (var jB = arguments.length, zB = new Array(jB), QB = 0; QB < jB; QB++) zB[QB] = arguments[QB];
                const nB = hn.apply(window.history, zB);
                return BB("pushState"), nB
              }, Xn || (Xn = window.history.replaceState), window.history.replaceState = function() {
                for (var jB = arguments.length, zB = new Array(jB), QB = 0; QB < jB; QB++) zB[QB] = arguments[QB];
                const nB = Xn.apply(window.history, zB);
                return BB("replaceState"), nB
              }, Zn = () => BB("popstate"), An = () => BB("hashchange"), window.addEventListener("popstate", Zn), window.addEventListener("hashchange", An), Wn = !0;
            return Yn
          }(),
          QB = (nB = ["pointerdown", "keydown"], Hn || (Hn = new Gz), nB.forEach((BB => {
            if (!Dn.has(BB)) {
              const jB = () => {
                Hn.notify({
                  type: "interaction",
                  name: BB
                })
              };
              window.addEventListener(BB, jB), Dn.add(BB), Fn.set(BB, jB)
            }
          })), Hn);
        var nB;
        const dB = new qn((new Gz).merge(BB, jB, zB), {
          inactivityMs: 100,
          drainTimeoutMs: 1e4,
          isOperationStart: BB => function(BB) {
            return BB.type === yz
          }(BB) ? BB.request.requestId : void 0,
          isOperationEnd: BB => function(BB) {
            return BB.type === kz
          }(BB) ? BB.request.requestId : void 0
        });
        dB.filter((BB => "tracking-ended" === BB.message)).subscribe((BB => {
          var jB, zB;
          if ((null === (jB = BB.events) || void 0 === jB ? void 0 : jB.some((BB => "url-change" === BB.type))) && (null === (zB = BB.events) || void 0 === zB ? void 0 : zB.some((BB => "dom-mutation" === BB.type)))) {
            var QB;
            const jB = null === (QB = BB.events) || void 0 === QB ? void 0 : QB.find((BB => "url-change" === BB.type));
            mB.api.pushEvent("faro.navigation", {
              fromUrl: null === jB || void 0 === jB ? void 0 : jB.from,
              toUrl: null === jB || void 0 === jB ? void 0 : jB.to,
              sameDocument: String(!0),
              duration: BB.duration
            })
          }
        })), QB.subscribe((() => {
          dB.startTracking()
        }))
      }
    };

    function wn() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const jB = [new Mn, new Vz, new YQ, new Qz, new Xz, new en];
      return !1 !== BB.enablePerformanceInstrumentation && jB.unshift(new KQ), !1 !== BB.enableContentSecurityPolicyInstrumentation && jB.push(new En), !1 !== BB.captureConsole && jB.push(new Fz), jB
    }
    var xn = zB(6641);
    let Kn, Cn;

    function cn() {
      const BB = "undefined" !== typeof navigator ? navigator.userAgent : "";
      return Kn === BB && Cn || (Cn = new xn.UAParser(BB).getResult(), Kn = BB), Cn
    }
    const bn = () => {
        const {
          browser: BB,
          os: jB,
          ua: zB
        } = cn(), {
          name: QB,
          version: nB
        } = BB, {
          name: dB,
          version: IB
        } = jB, NB = navigator.language, uB = zB.includes("Mobi"), UB = function() {
          if (!QB || !nB) return;
          if ("userAgentData" in navigator && navigator.userAgentData) return navigator.userAgentData.brands
        }();
        return {
          browser: {
            name: null !== QB && void 0 !== QB ? QB : hz,
            version: null !== nB && void 0 !== nB ? nB : hz,
            os: `${null!==dB&&void 0!==dB?dB:hz} ${null!==IB&&void 0!==IB?IB:hz}`,
            userAgent: null !== zB && void 0 !== zB ? zB : hz,
            language: null !== NB && void 0 !== NB ? NB : hz,
            mobile: uB,
            brands: null !== UB && void 0 !== UB ? UB : hz,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`
          }
        }
      },
      vn = () => {
        const {
          name: BB,
          version: jB
        } = cn().os;
        if (!BB && !jB) return {};
        const zB = {};
        return BB && (zB.name = BB), jB && (zB.version = jB), {
          os: zB
        }
      };

    function Rn(BB) {
      var jB, zB, QB;
      return {
        id: null !== (jB = null === (zB = mB.config) || void 0 === zB || null === (zB = zB.sessionTracking) || void 0 === zB || null === (QB = zB.generateSessionId) || void 0 === QB ? void 0 : QB.call(zB)) && void 0 !== jB ? jB : kj(),
        attributes: BB
      }
    }
    const On = () => ({
      sdk: {
        name: "faro-web",
        version: zz
      }
    });
    var Bd = class extends Bz {
      isBatched() {
        return !1
      }
      getIgnoreUrls() {
        return []
      }
    };
    let jd = function(BB) {
      return BB.EXCEPTION = "exception", BB.LOG = "log", BB.MEASUREMENT = "measurement", BB.TRACE = "trace", BB.EVENT = "event", BB
    }({});
    const zd = {
      exception: "exceptions",
      log: "logs",
      measurement: "measurements",
      trace: "traces",
      event: "events"
    };

    function Qd(BB, jB) {
      var zB, QB;
      if (void 0 === jB) return BB;
      if (void 0 === BB) return {
        resourceSpans: jB
      };
      const nB = null === (zB = BB.resourceSpans) || void 0 === zB ? void 0 : zB[0];
      if (void 0 === nB) return BB;
      const dB = (null === nB || void 0 === nB ? void 0 : nB.scopeSpans) || [],
        IB = (null === jB || void 0 === jB || null === (QB = jB[0]) || void 0 === QB ? void 0 : QB.scopeSpans) || [];
      return Rj(Rj({}, BB), {}, {
        resourceSpans: [Rj(Rj({}, nB), {}, {
          scopeSpans: [...dB, ...IB]
        })]
      })
    }

    function nd(BB) {
      let jB = {
        meta: {}
      };
      return void 0 !== BB[0] && (jB.meta = BB[0].meta), BB.forEach((BB => {
        switch (BB.type) {
          case "log":
          case "event":
          case "exception":
          case "measurement": {
            const zB = zd[BB.type],
              QB = jB[zB];
            jB = Rj(Rj({}, jB), {}, {
              [zB]: void 0 === QB ? [BB.payload] : [...QB, BB.payload]
            });
            break
          }
          case "trace":
            jB = Rj(Rj({}, jB), {}, {
              traces: Qd(jB.traces, BB.payload.resourceSpans)
            })
        }
      })), jB
    }
    var dd = class extends Bd {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(), this.options = BB, this.name = "@grafana/faro-web-sdk:transport-console", this.version = zz
      }
      send(BB) {
        var jB;
        return this.unpatchedConsole[null !== (jB = this.options.level) && void 0 !== jB ? jB : Lz.DEBUG]("New event", nd([BB]))
      }
    };
    const Id = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), ([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      Nd = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-9]{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      ud = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:(?:([0-9]{2}))|(?: ([0-9]))) ([0-9]{2}):([0-9]{2}):([0-9]{2}) ([0-9]{4})$/,
      Ud = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      pd = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      rd = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function sd(BB) {
      let {
        weekday: jB,
        day: zB,
        month: QB,
        year: nB,
        hour: dB,
        minute: IB,
        second: NB
      } = BB;
      if (nB < 1900 || zB < 1 || dB > 23 || IB > 59 || NB > 60) return;
      const uB = 60 === NB,
        UB = new Date(0);
      return UB.setUTCFullYear(nB, QB, zB), UB.setUTCHours(dB, IB, uB ? 59 : NB, 0), UB.getUTCDay() === jB && UB.getUTCDate() === zB && UB.getUTCMonth() === QB && UB.getUTCFullYear() === nB && UB.getUTCHours() === dB && UB.getUTCMinutes() === IB && UB.getUTCSeconds() === (uB ? 59 : NB) ? UB.getTime() + (uB ? 1e3 : 0) : void 0
    }
    var Jd = class {
      constructor(BB) {
        this.options = BB, this.admitted = 0, this.inProgress = 0, this.sequence = 0, this.nextSendAt = 0, this.attemptQueue = [], this.waiting = [], this.unloading = !1
      }
      reserve() {
        var BB = this;
        if (this.admitted >= this.options.bufferSize) return;
        this.admitted++;
        const jB = this.sequence++;
        let zB = !1;
        return {
          deliver: function() {
            var zB = wQ((function*(zB) {
              const QB = BB.options.getNow();
              let nB, dB = 0;
              for (;;) {
                var IB, NB, uB;
                const UB = BB.options.retry.maxAttempts - dB,
                  aB = yield BB.runAttempt((() => zB(UB, BB.unloading)), dB > 0);
                if (dB += aB.attemptsMade, "success" === aB.kind) return {
                  kind: "success",
                  attempts: dB,
                  elapsedTimeMs: BB.options.getNow() - QB
                };
                if (nB = aB.failure, "terminal" === aB.kind || BB.unloading) return {
                  kind: "terminal",
                  attempts: dB,
                  elapsedTimeMs: BB.options.getNow() - QB,
                  failure: nB
                };
                if (dB >= BB.options.retry.maxAttempts) return {
                  kind: "terminal",
                  attempts: dB,
                  elapsedTimeMs: BB.options.getNow() - QB,
                  failure: nB,
                  reason: "retries-exhausted"
                };
                if (null != aB.retryAfterMs && aB.retryAfterMs > BB.options.retry.maxBackoffMs) return {
                  kind: "terminal",
                  attempts: dB,
                  elapsedTimeMs: BB.options.getNow() - QB,
                  failure: nB,
                  reason: "retry-after-too-long"
                };
                const pB = Math.min(null !== (IB = aB.retryAfterMs) && void 0 !== IB ? IB : BB.options.retry.initialBackoffMs * Math.pow(BB.options.retry.backoffMultiplier, dB - 1), BB.options.retry.maxBackoffMs);
                if (null === (NB = (uB = BB.options).onRetry) || void 0 === NB || NB.call(uB, pB, dB + 1), yield BB.waitForTurn(jB, pB)) {
                  const jB = BB.options.retry.maxAttempts - dB,
                    nB = yield BB.runAttempt((() => zB(jB, !0)));
                  return dB += nB.attemptsMade, {
                    kind: "success" === nB.kind ? "success" : "terminal",
                    attempts: dB,
                    elapsedTimeMs: BB.options.getNow() - QB,
                    failure: "success" === nB.kind ? void 0 : nB.failure
                  }
                }
              }
            }));
            return function(BB) {
              return zB.apply(this, arguments)
            }
          }(),
          release: () => {
            zB || (zB = !0, this.admitted--)
          }
        }
      }
      flush() {
        this.unloading = !0, this.nextSendAt = 0;
        const BB = this.waiting.splice(0);
        null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0);
        for (const jB of BB) jB.resolve(!0);
        this.runNextAttempt()
      }
      resume() {
        this.unloading = !1
      }
      runAttempt(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Promise(((zB, QB) => {
          this.attemptQueue.push({
            run: () => {
              this.inProgress++;
              const jB = () => {
                this.inProgress--, this.runNextAttempt()
              };
              BB().then((BB => {
                jB(), zB(BB)
              }), (BB => {
                jB(), QB(BB)
              }))
            },
            isRedelivery: jB
          }), this.runNextAttempt()
        }))
      }
      runNextAttempt() {
        for (null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0); this.inProgress < this.options.concurrency && this.attemptQueue.length > 0;) {
          const BB = this.options.getNow(),
            jB = this.attemptQueue.findIndex((jB => {
              let {
                isRedelivery: zB
              } = jB;
              return this.unloading || !zB || BB >= this.nextSendAt
            }));
          if (jB < 0) return void(this.redeliveryTimer = setTimeout((() => {
            this.redeliveryTimer = void 0, this.runNextAttempt()
          }), Math.max(0, this.nextSendAt - BB)));
          const [zB] = this.attemptQueue.splice(jB, 1);
          zB.isRedelivery && !this.unloading && (this.nextSendAt = BB + 1), zB.run()
        }
      }
      waitForTurn(BB, jB) {
        const zB = Math.min(jB * (1 + .2 * this.options.getRandom()), this.options.retry.maxBackoffMs);
        return new Promise((jB => {
          this.waiting.push({
            sequence: BB,
            readyAt: this.options.getNow() + zB,
            resolve: jB
          }), this.waiting.sort(((BB, jB) => BB.readyAt === jB.readyAt ? BB.sequence - jB.sequence : BB.readyAt - jB.readyAt)), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0), this.scheduleNext()
        }))
      }
      scheduleNext() {
        if (null != this.waitingTimer || 0 === this.waiting.length) return;
        const BB = this.waiting[0],
          jB = BB.readyAt;
        this.waitingTimer = setTimeout((() => {
          this.waitingTimer = void 0;
          const jB = this.waiting.indexOf(BB);
          jB >= 0 && this.waiting.splice(jB, 1), BB.resolve(!1), this.scheduleNext()
        }), Math.max(0, jB - this.options.getNow()))
      }
    };

    function md(BB, jB) {
      if (null == BB) return {};
      var zB, QB, nB = function(BB, jB) {
        if (null == BB) return {};
        var zB = {};
        for (var QB in BB)
          if ({}.hasOwnProperty.call(BB, QB)) {
            if (jB.includes(QB)) continue;
            zB[QB] = BB[QB]
          } return zB
      }(BB, jB);
      if (Object.getOwnPropertySymbols) {
        var dB = Object.getOwnPropertySymbols(BB);
        for (QB = 0; QB < dB.length; QB++) zB = dB[QB], jB.includes(zB) || {}.propertyIsEnumerable.call(BB, zB) && (nB[zB] = BB[zB])
      }
      return nB
    }

    function yd(BB) {
      const {
        size: jB,
        concurrency: zB
      } = BB, QB = [];
      let nB = 0;
      const dB = () => {
        if (nB < zB && QB.length) {
          const {
            producer: BB,
            resolve: jB,
            reject: zB
          } = QB.shift();
          nB++, BB().then((BB => {
            nB--, dB(), jB(BB)
          }), (BB => {
            nB--, dB(), zB(BB)
          }))
        }
      };
      return {
        add: BB => {
          if (QB.length + nB >= jB) throw new Error("Task buffer full");
          return new Promise(((jB, zB) => {
            QB.push({
              producer: BB,
              resolve: jB,
              reject: zB
            }), dB()
          }))
        }
      }
    }
    const kd = ["headers"],
      Gd = ["keepalive", "signal"],
      Ld = new Set([408, 425, 429, 500, 502, 503, 504]),
      gd = new Set([429, 503]);
    let td = 0,
      Sd = 0;
    var Md = class extends Error {};
    var Ed = class extends Bd {
      constructor(BB) {
        var jB, zB, QB, nB, dB, IB, NB, uB, UB, aB, pB, rB, sB, JB, mB, yB, kB;
        super(), this.options = BB, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = zz, this.pendingCustomSends = 0, this.getNow = null !== (jB = BB.getNow) && void 0 !== jB ? jB : Date.now, this.requestTimeoutMs = null !== (zB = BB.requestTimeoutMs) && void 0 !== zB ? zB : 1e4, this.compressionEnabled = null !== (QB = BB.requestCompression) && void 0 !== QB && QB && "undefined" !== typeof CompressionStream, BB.requestCompression && !this.compressionEnabled && this.logWarn("requestCompression is enabled but CompressionStream is not available. Falling back to uncompressed."), this.requestTimeoutMs > 0 && "undefined" === typeof AbortController && this.logWarn("AbortController is unavailable. Requests will be sent without the configured timeout."), this.deliveryQueue = new Jd({
          bufferSize: null !== (nB = BB.bufferSize) && void 0 !== nB ? nB : 30,
          concurrency: null !== (dB = BB.concurrency) && void 0 !== dB ? dB : 5,
          retry: {
            maxAttempts: null !== (IB = null === (NB = BB.retry) || void 0 === NB ? void 0 : NB.maxAttempts) && void 0 !== IB ? IB : 3,
            initialBackoffMs: null !== (uB = null !== (UB = null === (aB = BB.retry) || void 0 === aB ? void 0 : aB.initialBackoffMs) && void 0 !== UB ? UB : BB.defaultRateLimitBackoffMs) && void 0 !== uB ? uB : 1e3,
            maxBackoffMs: null !== (pB = null === (rB = BB.retry) || void 0 === rB ? void 0 : rB.maxBackoffMs) && void 0 !== pB ? pB : 3e4,
            backoffMultiplier: null !== (sB = null === (JB = BB.retry) || void 0 === JB ? void 0 : JB.backoffMultiplier) && void 0 !== sB ? sB : 2
          },
          getNow: this.getNow,
          getRandom: null !== (mB = BB.getRandom) && void 0 !== mB ? mB : Math.random,
          onRetry: (BB, jB) => {
            this.logDebug(`Retrying failed request after ${BB}ms. Attempt ${jB}.`)
          }
        }), this.customPromiseBuffer = yd({
          size: null !== (yB = BB.bufferSize) && void 0 !== yB ? yB : 30,
          concurrency: null !== (kB = BB.concurrency) && void 0 !== kB ? kB : 5
        }), this.defaultPromiseBuffer = {
          add: BB => {
            if (this.promiseBuffer !== this.defaultPromiseBuffer || this.promiseBuffer.add !== this.defaultBufferAdd || this.pendingCustomSends > 0) return this.customPromiseBuffer.add(BB);
            const jB = this.deliveryQueue.reserve();
            if (!jB) throw new Error("Task buffer full");
            return this.runBufferedTask(jB, BB)
          }
        }, this.defaultBufferAdd = this.defaultPromiseBuffer.add, this.promiseBuffer = this.defaultPromiseBuffer, "undefined" !== typeof window && (window.addEventListener("pagehide", (() => this.deliveryQueue.flush())), window.addEventListener("pageshow", (BB => {
          BB.persisted && this.deliveryQueue.resume()
        })))
      }
      send(BB) {
        var jB = this;
        return wQ((function*() {
          const zB = jB.promiseBuffer;
          if (zB !== jB.defaultPromiseBuffer || zB.add !== jB.defaultBufferAdd) {
            jB.pendingCustomSends++;
            try {
              yield zB.add((() => jB.deliver(BB)))
            } catch (QB) {
              jB.logError("Permanent delivery failure", {
                error: QB,
                attempts: 0,
                elapsedTimeMs: 0
              })
            } finally {
              jB.pendingCustomSends--
            }
          } else yield jB.deliver(BB)
        }))()
      }
      runBufferedTask(BB, jB) {
        return wQ((function*() {
          let zB;
          try {
            return yield BB.deliver(wQ((function*() {
              return zB = yield jB(), {
                kind: "success",
                attemptsMade: 1
              }
            }))), zB
          } finally {
            BB.release()
          }
        }))()
      }
      deliver(BB) {
        var jB = this;
        return wQ((function*() {
          const zB = jB.deliveryQueue.reserve();
          if (zB) try {
            const QB = yield jB.prepareRequest(BB), nB = yield zB.deliver(((BB, zB) => jB.performAttempt(QB, BB, zB)));
            "terminal" === nB.kind && jB.logError("retries-exhausted" === nB.reason ? "Delivery retries exhausted" : "Permanent delivery failure", aj(aj({}, nB.failure), {}, {
              reason: nB.reason,
              attempts: nB.attempts,
              elapsedTimeMs: nB.elapsedTimeMs
            }))
          } catch (QB) {
            jB.logError("Permanent delivery failure", {
              error: QB,
              attempts: 0,
              elapsedTimeMs: 0
            })
          } finally {
            zB.release()
          } else jB.logError("Permanent delivery failure", {
            error: "Reliable delivery queue is full",
            attempts: 0,
            elapsedTimeMs: 0
          })
        }))()
      }
      getIgnoreUrls() {
        var BB;
        return [this.options.url].concat(null !== (BB = this.config.ignoreUrls) && void 0 !== BB ? BB : [])
      }
      isBatched() {
        return !0
      }
      prepareRequest(BB) {
        var jB = this;
        return wQ((function*() {
          var zB, QB;
          const nB = nd(BB),
            dB = null === (zB = nB.meta.session) || void 0 === zB ? void 0 : zB.id,
            IB = JSON.stringify(nB),
            NB = null !== (QB = jB.options.requestOptions) && void 0 !== QB ? QB : {},
            {
              headers: uB = {}
            } = NB,
            UB = md(NB, kd),
            {
              keepalive: aB,
              signal: pB
            } = UB,
            rB = md(UB, Gd),
            sB = {};
          for (const [BB, jB] of Object.entries(uB)) sB[BB] = "function" === typeof jB ? yield jB(): jB;
          let JB = IB,
            mB = function(BB) {
              return "undefined" === typeof TextEncoder ? BB.length : (new TextEncoder).encode(BB).byteLength
            }(IB);
          const yB = {};
          return jB.compressionEnabled && (JB = yield jB.compress(IB), mB = JB.size, yB["Content-Encoding"] = "gzip"), {
            bodySize: mB,
            sessionId: dB,
            requestInit: aj({
              method: "POST",
              headers: aj(aj(aj(aj(aj({
                "Content-Type": "application/json"
              }, yB), sB), jB.options.apiKey ? {
                "x-api-key": jB.options.apiKey
              } : {}), dB ? {
                "x-faro-session-id": dB
              } : {}), {}, {
                "Idempotency-Key": kj(20)
              }),
              body: JB
            }, rB)
          }
        }))()
      }
      performAttempt(BB, jB, zB) {
        var QB = this;
        return wQ((function*() {
          var nB;
          const dB = null === (nB = QB.options.requestOptions) || void 0 === nB ? void 0 : nB.signal;
          if (null === dB || void 0 === dB ? void 0 : dB.aborted) return {
            kind: "terminal",
            failure: {
              error: dB.reason
            },
            attemptsMade: 0
          };
          let IB = 0;
          try {
            var NB;
            const nB = yield QB.fetchWithKeepaliveFallback(BB.requestInit, BB.bodySize, !!zB || (null === (NB = QB.options.requestOptions) || void 0 === NB ? void 0 : NB.keepalive), jB, (() => IB++));
            if (QB.handleResponse(nB, BB.sessionId), nB.status >= 200 && nB.status < 300) return {
              kind: "success",
              attemptsMade: IB
            };
            const dB = {
              status: nB.status
            };
            return !Ld.has(nB.status) || zB ? {
              kind: "terminal",
              failure: dB,
              attemptsMade: IB
            } : {
              kind: "retry",
              failure: dB,
              attemptsMade: IB,
              retryAfterMs: gd.has(nB.status) ? QB.getRetryAfterDelayMs(nB) : void 0
            }
          } catch (uB) {
            const BB = {
              error: uB
            };
            return (null === dB || void 0 === dB ? void 0 : dB.aborted) || !QB.isFetchNetworkError(uB) || zB ? {
              kind: "terminal",
              failure: BB,
              attemptsMade: IB
            } : {
              kind: "retry",
              failure: BB,
              attemptsMade: IB
            }
          }
        }))()
      }
      fetchWithKeepaliveFallback(BB, jB, zB, QB, nB) {
        var dB = this;
        return wQ((function*() {
          const IB = dB.getNow(),
            NB = dB.reserveKeepalive(jB, zB);
          try {
            return yield dB.fetchWithTimeout(aj(aj({}, BB), {}, {
              keepalive: NB.keepalive
            }), dB.requestTimeoutMs, nB)
          } catch (UB) {
            var uB;
            if (NB.keepalive && QB > 1 && dB.isFetchNetworkError(UB) && !(UB instanceof Md) && !(null === (uB = dB.options.requestOptions) || void 0 === uB || null === (uB = uB.signal) || void 0 === uB ? void 0 : uB.aborted)) {
              dB.logDebug("Retrying failed keepalive request with keepalive disabled.");
              const jB = dB.requestTimeoutMs - (dB.getNow() - IB);
              return dB.fetchWithTimeout(aj(aj({}, BB), {}, {
                keepalive: !1
              }), jB, nB)
            }
            throw UB
          } finally {
            NB.release()
          }
        }))()
      }
      fetchWithTimeout(BB, jB, zB) {
        var QB = this;
        return wQ((function*() {
          var nB;
          const dB = null === (nB = QB.options.requestOptions) || void 0 === nB ? void 0 : nB.signal;
          if (QB.requestTimeoutMs <= 0 || "undefined" === typeof AbortController) return zB(), fetch(QB.options.url, aj(aj({}, BB), {}, {
            signal: dB
          }));
          if (jB <= 0) throw new Md("Request timed out");
          const IB = new AbortController,
            NB = () => IB.abort(null === dB || void 0 === dB ? void 0 : dB.reason);
          null === dB || void 0 === dB || dB.addEventListener("abort", NB, {
            once: !0
          });
          let uB = !1;
          const UB = setTimeout((() => {
            uB = !0, IB.abort()
          }), jB);
          try {
            return zB(), yield fetch(QB.options.url, aj(aj({}, BB), {}, {
              signal: IB.signal
            }))
          } catch (aB) {
            if (uB && !(null === dB || void 0 === dB ? void 0 : dB.aborted)) throw new Md("Request timed out");
            throw aB
          } finally {
            clearTimeout(UB), null === dB || void 0 === dB || dB.removeEventListener("abort", NB)
          }
        }))()
      }
      getRetryAfterDelayMs(BB) {
        const jB = BB.headers.get("Retry-After");
        if (!jB) return;
        if (/^\d+$/.test(jB)) {
          const BB = 1e3 * Number(jB);
          return Number.isFinite(BB) ? BB : Number.POSITIVE_INFINITY
        }
        const zB = this.getNow(),
          QB = function(BB, jB) {
            const zB = Id.exec(BB);
            if (zB) {
              const [, BB, jB, QB, nB, dB, IB, NB] = zB;
              return sd({
                weekday: Ud.indexOf(BB),
                day: Number(jB),
                month: rd.indexOf(QB),
                year: Number(nB),
                hour: Number(dB),
                minute: Number(IB),
                second: Number(NB)
              })
            }
            const QB = Nd.exec(BB);
            if (QB) {
              const [, BB, zB, IB, NB, uB, UB, aB] = QB, pB = new Date(jB);
              if (Number.isNaN(pB.getTime())) return;
              const rB = pB.getUTCFullYear();
              let sB = 100 * Math.floor(rB / 100) + Number(NB);
              sB < rB && (sB += 100);
              const JB = rd.indexOf(IB),
                mB = {
                  month: JB,
                  day: Number(zB),
                  hour: Number(uB),
                  minute: Number(UB),
                  second: Number(aB),
                  millisecond: 0
                },
                yB = {
                  month: pB.getUTCMonth(),
                  day: pB.getUTCDate(),
                  hour: pB.getUTCHours(),
                  minute: pB.getUTCMinutes(),
                  second: pB.getUTCSeconds(),
                  millisecond: pB.getUTCMilliseconds()
                };
              return (sB > rB + 50 || sB === rB + 50 && (dB = yB, ((nB = mB).month - dB.month || nB.day - dB.day || nB.hour - dB.hour || nB.minute - dB.minute || nB.second - dB.second || nB.millisecond - dB.millisecond) > 0)) && (sB -= 100), sd({
                weekday: pd.indexOf(BB),
                day: Number(zB),
                month: JB,
                year: sB,
                hour: Number(uB),
                minute: Number(UB),
                second: Number(aB)
              })
            }
            var nB, dB;
            const IB = ud.exec(BB);
            if (!IB) return;
            const [, NB, uB, UB, aB, pB, rB, sB, JB] = IB;
            return sd({
              weekday: Ud.indexOf(NB),
              day: Number(null !== UB && void 0 !== UB ? UB : aB),
              month: rd.indexOf(uB),
              year: Number(JB),
              hour: Number(pB),
              minute: Number(rB),
              second: Number(sB)
            })
          }(jB, zB);
        return null == QB ? void 0 : Math.max(0, QB - zB)
      }
      reserveKeepalive(BB, jB) {
        if (!1 === jB || BB > 6e4 || td + BB > 6e4 || Sd >= 9) return {
          keepalive: !1,
          release: lj
        };
        td += BB, Sd++;
        let zB = !1;
        return {
          keepalive: !0,
          release: () => {
            zB || (zB = !0, td -= BB, Sd--)
          }
        }
      }
      handleResponse(BB, jB) {
        202 === BB.status && "invalid" === BB.headers.get("X-Faro-Session-Status") && this.extendFaroSession(this.config, this.logDebug.bind(this), jB), BB.text().catch(lj)
      }
      isFetchNetworkError(BB) {
        return BB instanceof TypeError || BB instanceof Md || BB instanceof DOMException && "AbortError" === BB.name
      }
      compress(BB) {
        return wQ((function*() {
          const jB = [],
            zB = new ReadableStream({
              start(jB) {
                jB.enqueue((new TextEncoder).encode(BB)), jB.close()
              }
            }).pipeThrough(new CompressionStream("gzip")).getReader();
          for (;;) {
            const {
              done: BB,
              value: QB
            } = yield zB.read();
            if (BB) return new Blob(jB);
            jB.push(QB)
          }
        }))()
      }
      extendFaroSession(BB, jB, zB) {
        var QB, nB;
        const dB = BB.sessionTracking;
        if (!(null === dB || void 0 === dB ? void 0 : dB.enabled)) return void jB("Session expired.");
        const {
          fetchUserSession: IB,
          storeUserSession: NB
        } = ej(dB), uB = null === (QB = this.metas.value.session) || void 0 === QB ? void 0 : QB.id, UB = null === (nB = IB()) || void 0 === nB ? void 0 : nB.sessionId;
        zB && zB === uB && zB === UB ? (Hj({
          fetchUserSession: IB,
          storeUserSession: NB
        })({
          forceSessionExtend: !0
        }), jB("Session expired; created new session.")) : jB("Ignoring stale or cross-tab session-invalid response; request session no longer current.")
      }
    };
    const qd = () => {
      const BB = window.k6;
      return {
        k6: aj({
          isK6Browser: !0
        }, (null === BB || void 0 === BB ? void 0 : BB.testRunId) && {
          testRunId: null === BB || void 0 === BB ? void 0 : BB.testRunId
        })
      }
    };
    let fd, od;

    function Hd() {
      let {
        generatePageId: BB,
        initialPageMeta: jB
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return () => {
        const zB = location.href;
        return oB(BB) && fd !== zB && (fd = zB, od = BB(location)), {
          page: aj(aj({
            url: zB
          }, od ? {
            id: od
          } : {}), jB)
        }
      }
    }

    function Dd() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oj,
        jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const zB = xj;
      return jB > 0 && (zB.error = jB >= 1 ? function() {
        for (var jB = arguments.length, QB = new Array(jB), nB = 0; nB < jB; nB++) QB[nB] = arguments[nB];
        BB.error(`${zB.prefix}\n`, ...QB)
      } : lj, zB.warn = jB >= 2 ? function() {
        for (var jB = arguments.length, QB = new Array(jB), nB = 0; nB < jB; nB++) QB[nB] = arguments[nB];
        BB.warn(`${zB.prefix}\n`, ...QB)
      } : lj, zB.info = jB >= 3 ? function() {
        for (var jB = arguments.length, QB = new Array(jB), nB = 0; nB < jB; nB++) QB[nB] = arguments[nB];
        BB.info(`${zB.prefix}\n`, ...QB)
      } : lj, zB.debug = jB >= 4 ? function() {
        for (var jB = arguments.length, QB = new Array(jB), nB = 0; nB < jB; nB++) QB[nB] = arguments[nB];
        BB.debug(`${zB.prefix}\n`, ...QB)
      } : lj), zB
    }
    const Fd = "faro",
      Yd = {
        enabled: !0,
        sendTimeout: 250,
        itemLimit: 50
      },
      Vd = ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "url", "experimental"];

    function hd(BB) {
      var jB, zB, nB, dB, IB, NB;
      const uB = [],
        aB = Dd(BB.unpatchedConsole, BB.internalLoggerLevel);
      BB.transports ? ((BB.url || BB.apiKey) && aB.error('if "transports" is defined, "url" and "apiKey" should not be defined'), uB.push(...BB.transports)) : BB.url ? uB.push(new Ed({
        url: BB.url,
        apiKey: BB.apiKey,
        requestCompression: BB.requestCompression
      })) : aB.error('either "url" or "transports" must be defined');
      const {
        dedupe: pB = !0,
        eventDomain: rB = QB,
        globalObjectKey: sB = Fd,
        instrumentations: JB = wn(),
        internalLoggerLevel: mB = Kj,
        isolate: yB = !1,
        logArgsSerializer: kB = Dz,
        metas: GB = Zd(BB),
        paused: LB = !1,
        preventGlobalExposure: gB = !1,
        unpatchedConsole: tB = Oj,
        url: SB,
        experimental: MB
      } = BB, EB = md(BB, Vd), iB = null !== (jB = null === MB || void 0 === MB ? void 0 : MB.trackNavigation) && void 0 !== jB && jB, qB = {
        dataAttributeName: vQ(null !== (zB = null === (nB = BB.userActionsInstrumentation) || void 0 === nB ? void 0 : nB.dataAttributeName) && void 0 !== zB ? zB : CQ),
        excludeItem: null === (dB = BB.userActionsInstrumentation) || void 0 === dB ? void 0 : dB.excludeItem,
        initialActivityTimeout: RQ(null === (IB = BB.userActionsInstrumentation) || void 0 === IB ? void 0 : IB.initialActivityTimeout, 100, (BB => aB.warn(BB)))
      };
      return aj(aj({}, EB), {}, {
        batching: aj(aj({}, Yd), BB.batching),
        dedupe: pB,
        globalObjectKey: sB,
        instrumentations: Xd(JB, BB),
        internalLoggerLevel: mB,
        isolate: yB,
        logArgsSerializer: kB,
        metas: GB,
        parseStacktrace: mz,
        paused: LB,
        preventGlobalExposure: gB,
        transports: uB,
        unpatchedConsole: tB,
        eventDomain: rB,
        ignoreUrls: [...null !== (NB = BB.ignoreUrls) && void 0 !== NB ? NB : [], ...SB ? [SB] : [], /\/collect(?:\/[\w]*)?$/],
        sessionTracking: aj(aj(aj({}, UB), BB.sessionTracking), Ad({
          trackGeolocation: BB.trackGeolocation,
          sessionTracking: BB.sessionTracking
        })),
        userActionsInstrumentation: qB,
        experimental: {
          trackNavigation: iB
        }
      })
    }

    function Xd(BB, jB) {
      let {
        experimental: zB
      } = jB;
      var QB;
      const nB = null !== (QB = null === zB || void 0 === zB ? void 0 : zB.trackNavigation) && void 0 !== QB && QB;
      return BB.filter((BB => !("@grafana/faro-web-sdk:instrumentation-navigation" === BB.name && !nB)))
    }

    function Zd(BB) {
      var jB, zB, QB;
      const {
        page: nB,
        generatePageId: dB
      } = null !== (jB = null === BB || void 0 === BB ? void 0 : BB.pageTracking) && void 0 !== jB ? jB : {}, IB = [bn, vn, Hd({
        generatePageId: dB,
        initialPageMeta: nB
      }), ...null !== (zB = BB.metas) && void 0 !== zB ? zB : [], On];
      return fB(null === (QB = window) || void 0 === QB ? void 0 : QB.k6) ? [...IB, qd] : IB
    }

    function Ad(BB) {
      let {
        trackGeolocation: jB,
        sessionTracking: zB
      } = BB;
      var QB;
      const nB = {};
      return iB(jB) && (nB.geoLocationTrackingEnabled = jB), KB(nB) ? {} : {
        session: aj(aj({}, null !== (QB = null === zB || void 0 === zB ? void 0 : zB.session) && void 0 !== QB ? QB : {}), {}, {
          overrides: nB
        })
      }
    }
    const Td = new WeakSet;

    function Pd(BB) {
      return Td.add(BB), BB
    }

    function Wd(BB, jB) {
      if (BB.capture) return Pd(BB.capture(jB));
      const zB = Pd(BB.value);
      return null === jB || void 0 === jB || jB(), zB
    }

    function ed(BB) {
      const jB = `__faroBundleId_${BB}`,
        zB = null === aB || void 0 === aB ? void 0 : aB[jB];
      if ("string" === typeof zB && "" !== zB) return zB;
      const QB = "undefined" !== typeof window ? window[jB] : void 0;
      return "string" === typeof QB && "" !== QB ? QB : void 0
    }

    function ld(BB) {
      var jB, zB;
      const QB = BB.config.app.name,
        nB = QB ? function(BB) {
          return null === aB || void 0 === aB ? void 0 : aB[`__faroGitHash_${BB}`]
        }(QB) : void 0,
        dB = {
          sdk: {
            version: zz,
            name: "faro"
          },
          app: Rj({
            bundleId: QB && ed(QB)
          }, void 0 !== nB ? {
            gitHash: nB
          } : {})
        },
        IB = null === (jB = BB.config.sessionTracking) || void 0 === jB ? void 0 : jB.session;
      IB && BB.api.setSession(IB), BB.config.app && (dB.app = Rj(Rj({}, BB.config.app), dB.app)), BB.config.user && (dB.user = BB.config.user), BB.config.view && (dB.view = BB.config.view), BB.metas.add(dB, ...null !== (zB = BB.config.metas) && void 0 !== zB ? zB : [])
    }
    var wd = class {
      constructor(BB, jB) {
        var zB, QB;
        this.signalBuffer = [], this.itemLimit = null !== (zB = null === jB || void 0 === jB ? void 0 : jB.itemLimit) && void 0 !== zB ? zB : 50, this.sendTimeout = null !== (QB = null === jB || void 0 === jB ? void 0 : jB.sendTimeout) && void 0 !== QB ? QB : 250, this.paused = (null === jB || void 0 === jB ? void 0 : jB.paused) || !1, this.sendFn = BB, this.paused || this.start(), "undefined" !== typeof document && document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }))
      }
      addItem(BB) {
        this.paused || (this.signalBuffer.push(BB), this.signalBuffer.length >= this.itemLimit && this.flush())
      }
      start() {
        this.paused = !1, this.sendTimeout > 0 && (this.flushInterval = setInterval((() => this.flush()), this.sendTimeout))
      }
      pause() {
        this.paused = !0, clearInterval(this.flushInterval)
      }
      groupItems(BB) {
        const jB = new Map;
        return BB.forEach((BB => {
          const zB = JSON.stringify(BB.meta);
          let QB = jB.get(zB);
          QB = void 0 === QB ? [BB] : [...QB, BB], jB.set(zB, QB)
        })), Array.from(jB.values())
      }
      flush() {
        if (this.paused || 0 === this.signalBuffer.length) return;
        const BB = this.signalBuffer;
        this.signalBuffer = [];
        try {
          this.groupItems(BB).forEach(this.sendFn)
        } catch (jB) {
          throw this.signalBuffer = [...BB, ...this.signalBuffer], this.trimBufferToLimit(), jB
        }
      }
      trimBufferToLimit() {
        this.signalBuffer.length > this.itemLimit && (this.signalBuffer = this.signalBuffer.slice(0, this.itemLimit))
      }
    };

    function xd(BB, jB, zB, QB) {
      var nB;
      jB.debug("Initializing transports");
      const dB = [];
      let IB = [];
      const NB = BB => {
        let jB = BB;
        for (const QB of IB) {
          const BB = jB.map(QB).filter(Boolean);
          if (0 === BB.length) return [];
          jB = Kd(BB, zB)
        }
        return jB
      };
      let uB;
      (null === (nB = zB.batching) || void 0 === nB ? void 0 : nB.enabled) && (uB = new wd((BB => {
        const zB = NB(BB);
        if (0 !== zB.length)
          for (const QB of dB) jB.debug(`Transporting item using ${QB.name}\n`, zB), QB.isBatched() && QB.send(zB)
      }), {
        sendTimeout: zB.batching.sendTimeout,
        itemLimit: zB.batching.itemLimit,
        paused: zB.paused
      }));
      return {
        add: function() {
          jB.debug("Adding transports");
          for (var nB = arguments.length, IB = new Array(nB), NB = 0; NB < nB; NB++) IB[NB] = arguments[NB];
          IB.forEach((nB => {
            jB.debug(`Adding "${nB.name}" transport`), dB.some((BB => BB === nB)) ? jB.warn(`Transport ${nB.name} is already added`) : (nB.unpatchedConsole = BB, nB.internalLogger = jB, nB.config = zB, nB.metas = QB, dB.push(nB))
          }))
        },
        addBeforeSendHooks: function() {
          jB.debug("Adding beforeSendHooks\n", IB);
          for (var BB = arguments.length, zB = new Array(BB), QB = 0; QB < BB; QB++) zB[QB] = arguments[QB];
          zB.forEach((BB => {
            BB && IB.push(BB)
          }))
        },
        getBeforeSendHooks: () => [...IB],
        execute: BB => {
          var nB;
          if (!zB.paused && Pj(QB).shouldCapture()) {
            if (pB = BB.meta, !Td.has(pB)) {
              var IB, UB, aB;
              const jB = null === (IB = QB.value.session) || void 0 === IB ? void 0 : IB.id,
                nB = Wd(QB);
              if (zB.paused) return;
              const dB = Rj({}, BB.meta);
              (null === (UB = dB.session) || void 0 === UB ? void 0 : UB.id) === jB && (null === (aB = nB.session) || void 0 === aB ? void 0 : aB.id) !== jB && (void 0 === nB.session ? delete dB.session : dB.session = nB.session), BB = Rj(Rj({}, BB), {}, {
                meta: Pd(dB)
              })
            }
            var pB;
            (null === (nB = zB.batching) || void 0 === nB ? void 0 : nB.enabled) && (null === uB || void 0 === uB || uB.addItem(BB)), (BB => {
              var QB;
              if ((null === (QB = zB.batching) || void 0 === QB ? void 0 : QB.enabled) && dB.every((BB => BB.isBatched()))) return;
              const [nB] = NB([BB]);
              if (void 0 !== nB)
                for (const NB of dB) {
                  var IB;
                  jB.debug(`Transporting item using ${NB.name}\n`, nB), NB.isBatched() ? (null === (IB = zB.batching) || void 0 === IB ? void 0 : IB.enabled) || NB.send([nB]) : NB.send(nB)
                }
            })(BB)
          }
        },
        isPaused: () => zB.paused,
        pause: () => {
          jB.debug("Pausing transports"), null === uB || void 0 === uB || uB.pause(), zB.paused = !0
        },
        remove: function() {
          jB.debug("Removing transports");
          for (var BB = arguments.length, zB = new Array(BB), QB = 0; QB < BB; QB++) zB[QB] = arguments[QB];
          zB.forEach((BB => {
            jB.debug(`Removing "${BB.name}" transport`);
            const zB = dB.indexOf(BB); - 1 !== zB ? dB.splice(zB, 1) : jB.warn(`Transport "${BB.name}" is not added`)
          }))
        },
        removeBeforeSendHooks: function() {
          for (var BB = arguments.length, zB = new Array(BB), QB = 0; QB < BB; QB++) zB[QB] = arguments[QB];
          jB.debug("Removing beforeSendHooks"), IB = IB.filter((BB => !zB.includes(BB)))
        },
        get transports() {
          return [...dB]
        },
        unpause: () => {
          jB.debug("Unpausing transports"), null === uB || void 0 === uB || uB.start(), zB.paused = !1
        }
      }
    }

    function Kd(BB, jB) {
      if (jB.preserveOriginalError)
        for (const zB of BB) "exception" === zB.type && delete zB.payload.originalError;
      return BB
    }
    let Cd = Oj;

    function cd(BB) {
      var jB;
      return Cd = null !== (jB = BB.unpatchedConsole) && void 0 !== jB ? jB : Cd, Cd
    }
    let bd, vd = xj;

    function Rd(BB, jB) {
      return vd = Dd(BB, jB.internalLoggerLevel), vd
    }

    function Od(BB) {
      let {
        internalLogger: jB,
        config: zB,
        metas: QB,
        transports: nB,
        tracesApi: dB,
        userActionsApi: IB
      } = BB;
      var NB;
      jB.debug("Initializing exceptions API");
      let uB = null;
      bd = null !== (NB = zB.parseStacktrace) && void 0 !== NB ? NB : bd;
      const UB = BB => {
          jB.debug("Changing stacktrace parser"), bd = null !== BB && void 0 !== BB ? BB : bd
        },
        {
          ignoreErrors: aB = [],
          preserveOriginalError: pB
        } = zB;
      return UB(zB.parseStacktrace), {
        changeStacktraceParser: UB,
        getStacktraceParser: () => bd,
        pushError: function(BB) {
          let {
            skipDedupe: NB,
            stackFrames: UB,
            type: rB,
            context: sB,
            spanContext: JB,
            timestampOverwriteMs: mB,
            originalError: yB,
            fingerprint: kB,
            fatal: GB
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (! function(BB, jB) {
              const {
                message: zB,
                name: QB,
                stack: nB
              } = jB;
              return dB = BB, IB = zB + " " + QB + " " + nB, dB.some((BB => SB(BB) ? IB.includes(BB) : !!IB.match(BB)));
              var dB, IB
            }(aB, null !== yB && void 0 !== yB ? yB : BB)) try {
            var LB, gB;
            if (!Pj(QB).shouldCapture()) return;
            const aB = Xj(Rj(Rj({}, function(BB) {
                let jB = BB.cause;
                ZB(jB) ? jB = BB.cause.toString() : null !== jB && (fB(BB.cause) || HB(BB.cause)) ? jB = hj(BB.cause) : null != jB && (jB = BB.cause.toString());
                return null == jB ? {} : {
                  cause: jB
                }
              }(null !== yB && void 0 !== yB ? yB : BB)), null !== sB && void 0 !== sB ? sB : {})),
              SB = Rj(Rj(Rj(Rj({
                type: rB || BB.name || "Error",
                value: BB.message,
                timestamp: mB ? mj(mB) : Jj(),
                trace: JB ? {
                  trace_id: JB.traceId,
                  span_id: JB.spanId
                } : dB.getTraceContext()
              }, KB(aB) ? {} : {
                context: aB
              }), pB ? {
                originalError: yB
              } : {}), kB ? {
                fingerprint: kB
              } : {}), void 0 !== GB ? {
                fatal: GB
              } : {});
            UB = null !== (LB = UB) && void 0 !== LB ? LB : BB.stack ? null === bd || void 0 === bd ? void 0 : bd(BB).frames : void 0, (null === UB || void 0 === UB ? void 0 : UB.length) && (SB.stacktrace = {
              frames: UB
            });
            const MB = {
              type: SB.type,
              value: SB.value,
              stacktrace: SB.stacktrace,
              context: SB.context,
              fingerprint: SB.fingerprint,
              fatal: null !== (gB = SB.fatal) && void 0 !== gB && gB
            };
            if (!NB && zB.dedupe && !tB(uB) && Gj(MB, uB)) return void jB.debug("Skipping error push because it is the same as the last one\n", SB);
            const EB = uB,
              iB = Wd(QB);
            if (uB !== EB && !NB && zB.dedupe && Gj(MB, uB)) return;
            uB = MB;
            const qB = {
              meta: iB,
              payload: SB,
              type: "exception"
            };
            jB.debug("Pushing exception\n", qB), Sn(IB.getActiveUserAction(), qB) || nB.execute(qB)
          } catch (MB) {
            jB.error("Error pushing event", MB)
          }
        }
      }
    }

    function BI(BB, jB, zB, QB, nB) {
      jB.debug("Initializing API");
      let dB = null;
      const IB = function(BB) {
          let {
            transports: jB,
            internalLogger: zB,
            config: QB,
            pushEvent: nB
          } = BB;
          var dB;
          const IB = null === (dB = QB.userActionsInstrumentation) || void 0 === dB ? void 0 : dB.excludeItem;
          let NB;
          const uB = () => NB;
          return {
            startUserAction: (BB, QB, dB) => {
              if (void 0 === uB()) {
                const zB = new gn({
                  name: BB,
                  transports: jB,
                  attributes: QB,
                  trigger: (null === dB || void 0 === dB ? void 0 : dB.triggerName) || "faroApiCall",
                  importance: (null === dB || void 0 === dB ? void 0 : dB.importance) || Gn.Normal,
                  trackUserActionsExcludeItem: IB,
                  pushEvent: nB
                });
                return zB.filter((BB => [3, 2].includes(BB))).first().subscribe((() => {
                  NB = void 0
                })), tn.notify({
                  type: kn,
                  userAction: zB,
                  initialActivityTimeout: null === dB || void 0 === dB ? void 0 : dB.initialActivityTimeout
                }), NB = zB, NB
              }
              zB.error("Attempted to create a new user action while one is already running. This is not possible.")
            },
            getActiveUserAction: uB
          }
        }({
          transports: nB,
          config: zB,
          internalLogger: jB,
          pushEvent: (BB, zB, QB, nB) => {
            dB ? dB(BB, zB, QB, nB) : jB.warn("pushEventImpl is not initialized. Event dropped:", {
              name: BB,
              attributes: zB,
              domain: QB,
              options: nB
            })
          }
        }),
        NB = function(BB, jB, zB, QB, nB) {
          let dB;
          return jB.debug("Initializing traces API"), {
            getOTEL: () => dB,
            getTraceContext: () => {
              const BB = null === dB || void 0 === dB ? void 0 : dB.trace.getSpanContext(dB.context.active());
              return BB ? {
                trace_id: BB.traceId,
                span_id: BB.spanId
              } : void 0
            },
            initOTEL: (BB, zB) => {
              jB.debug("Initializing OpenTelemetry"), dB = {
                trace: BB,
                context: zB
              }
            },
            isOTELInitialized: () => !!dB,
            pushTraces: BB => {
              try {
                if (!Pj(QB).shouldCapture()) return;
                const zB = {
                  type: "trace",
                  payload: BB,
                  meta: Wd(QB)
                };
                jB.debug("Pushing trace\n", zB), nB.execute(zB)
              } catch (zB) {
                jB.error("Error pushing trace\n", zB)
              }
            }
          }
        }(0, jB, 0, QB, nB),
        uB = {
          unpatchedConsole: BB,
          internalLogger: jB,
          userActionsApi: IB,
          config: zB,
          metas: QB,
          transports: nB,
          tracesApi: NB
        },
        UB = function(BB) {
          let {
            internalLogger: jB,
            config: zB,
            metas: QB,
            transports: nB,
            tracesApi: dB,
            userActionsApi: IB
          } = BB, NB = null;
          return {
            pushEvent: function(BB, uB, UB) {
              let {
                skipDedupe: aB,
                spanContext: pB,
                timestampOverwriteMs: rB,
                customPayloadTransformer: sB = BB => BB
              } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              try {
                if (!Pj(QB).shouldCapture()) return;
                const JB = Xj(uB),
                  mB = sB({
                    name: BB,
                    domain: null !== UB && void 0 !== UB ? UB : zB.eventDomain,
                    attributes: KB(JB) ? void 0 : JB,
                    timestamp: rB ? mj(rB) : Jj(),
                    trace: pB ? {
                      trace_id: pB.traceId,
                      span_id: pB.spanId
                    } : dB.getTraceContext()
                  }),
                  yB = {
                    name: mB.name,
                    attributes: mB.attributes,
                    domain: mB.domain
                  };
                if (!aB && zB.dedupe && !tB(NB) && Gj(yB, NB)) return void jB.debug("Skipping event push because it is the same as the last one\n", mB);
                const kB = NB,
                  GB = Wd(QB);
                if (NB !== kB && !aB && zB.dedupe && Gj(yB, NB)) return;
                NB = yB;
                const LB = {
                  meta: GB,
                  payload: mB,
                  type: "event"
                };
                jB.debug("Pushing event\n", LB), Sn(IB.getActiveUserAction(), LB) || nB.execute(LB)
              } catch (JB) {
                jB.error("Error pushing event", JB)
              }
            }
          }
        }(uB);
      return dB = UB.pushEvent, Rj(Rj(Rj(Rj(Rj(Rj(Rj({}, NB), Od(uB)), function(BB) {
        let jB, zB, QB, nB, {
          internalLogger: dB,
          metas: IB
        } = BB;
        dB.debug("Initializing meta API");
        const NB = BB => {
            zB && IB.remove(zB), zB = {
              user: BB
            }, IB.add(zB)
          },
          uB = (BB, zB) => {
            var QB;
            const nB = null === zB || void 0 === zB ? void 0 : zB.overrides,
              dB = nB ? {
                overrides: Rj(Rj({}, null === jB || void 0 === jB || null === (QB = jB.session) || void 0 === QB ? void 0 : QB.overrides), nB)
              } : {};
            jB && IB.remove(jB), jB = {
              session: Rj(Rj({}, KB(BB) ? void 0 : BB), dB)
            }, IB.add(jB)
          },
          UB = (BB, jB) => {
            Pj(IB).notifySessionUpdate({
              type: "replace",
              session: BB,
              overrides: null === jB || void 0 === jB ? void 0 : jB.overrides
            }), uB(BB, jB)
          },
          aB = () => IB.value.session,
          pB = () => IB.value.page;
        return {
          setUser: NB,
          resetUser: NB,
          setSession: UB,
          resetSession: UB,
          getSession: aB,
          setView: (BB, jB) => {
            var zB;
            if ((null === jB || void 0 === jB ? void 0 : jB.overrides) && (Pj(IB).notifySessionUpdate({
                type: "overrides",
                overrides: jB.overrides
              }), uB(aB(), {
                overrides: jB.overrides
              })), (null === QB || void 0 === QB || null === (zB = QB.view) || void 0 === zB ? void 0 : zB.name) === (null === BB || void 0 === BB ? void 0 : BB.name)) return;
            const nB = QB;
            QB = {
              view: BB
            }, IB.add(QB), nB && IB.remove(nB)
          },
          getView: () => IB.value.view,
          setPage: BB => {
            var jB;
            const zB = SB(BB) ? Rj(Rj({}, null !== (jB = null === nB || void 0 === nB ? void 0 : nB.page) && void 0 !== jB ? jB : pB()), {}, {
              id: BB
            }) : BB;
            nB && IB.remove(nB), nB = {
              page: zB
            }, IB.add(nB)
          },
          getPage: pB
        }
      }(uB)), function(BB) {
        let {
          internalLogger: jB,
          config: zB,
          metas: QB,
          transports: nB,
          tracesApi: dB,
          userActionsApi: IB
        } = BB;
        var NB;
        jB.debug("Initializing logs API");
        let uB = null;
        const UB = null !== (NB = zB.logArgsSerializer) && void 0 !== NB ? NB : Dz;
        return {
          pushLog: function(BB) {
            let {
              context: NB,
              level: aB,
              skipDedupe: pB,
              spanContext: rB,
              timestampOverwriteMs: sB
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!Pj(QB).shouldCapture()) return;
              const JB = Xj(NB),
                mB = {
                  message: UB(BB),
                  level: null !== aB && void 0 !== aB ? aB : "log",
                  context: KB(JB) ? void 0 : JB,
                  timestamp: sB ? mj(sB) : Jj(),
                  trace: rB ? {
                    trace_id: rB.traceId,
                    span_id: rB.spanId
                  } : dB.getTraceContext()
                },
                yB = {
                  message: mB.message,
                  level: mB.level,
                  context: mB.context
                };
              if (!pB && zB.dedupe && !tB(uB) && Gj(yB, uB)) return void jB.debug("Skipping log push because it is the same as the last one\n", mB);
              const kB = uB,
                GB = Wd(QB);
              if (uB !== kB && !pB && zB.dedupe && Gj(yB, uB)) return;
              uB = yB;
              const LB = {
                type: "log",
                payload: mB,
                meta: GB
              };
              jB.debug("Pushing log\n", LB), Sn(IB.getActiveUserAction(), LB) || nB.execute(LB)
            } catch (JB) {
              jB.error("Error pushing log\n", JB)
            }
          }
        }
      }(uB)), function(BB) {
        let {
          internalLogger: jB,
          config: zB,
          metas: QB,
          transports: nB,
          tracesApi: dB,
          userActionsApi: IB
        } = BB;
        jB.debug("Initializing measurements API");
        let NB = null;
        return {
          pushMeasurement: function(BB) {
            let {
              skipDedupe: uB,
              context: UB,
              spanContext: aB,
              timestampOverwriteMs: pB
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!Pj(QB).shouldCapture()) return;
              const rB = Xj(UB),
                sB = Rj(Rj({}, BB), {}, {
                  trace: aB ? {
                    trace_id: aB.traceId,
                    span_id: aB.spanId
                  } : dB.getTraceContext(),
                  timestamp: pB ? mj(pB) : Jj(),
                  context: KB(rB) ? void 0 : rB
                }),
                JB = {
                  type: sB.type,
                  values: sB.values,
                  context: sB.context
                };
              if (!uB && zB.dedupe && !tB(NB) && Gj(JB, NB)) return void jB.debug("Skipping measurement push because it is the same as the last one\n", sB);
              const mB = NB,
                yB = Wd(QB);
              if (NB !== mB && !uB && zB.dedupe && Gj(JB, NB)) return;
              NB = JB;
              const kB = {
                type: "measurement",
                payload: sB,
                meta: yB
              };
              jB.debug("Pushing measurement\n", kB), Sn(IB.getActiveUserAction(), kB) || nB.execute(kB)
            } catch (rB) {
              jB.error("Error pushing measurement\n", rB)
            }
          }
        }
      }(uB)), UB), IB)
    }

    function jI(BB) {
      const jB = cd(BB),
        zB = Rd(jB, BB);
      if (JB() && !BB.isolate) return void zB.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
      zB.debug("Initializing");
      const QB = function(BB, jB) {
          let zB, QB = [],
            nB = [],
            dB = [],
            IB = 0,
            NB = 0;
          const uB = () => QB.reduce(((BB, jB) => Object.assign(BB, oB(jB) ? jB() : jB)), {}),
            UB = () => {
              if (nB.length) {
                const BB = uB();
                nB.forEach((jB => jB(BB)))
              }
            };
          return {
            add: function() {
              for (var BB = arguments.length, zB = new Array(BB), nB = 0; nB < BB; nB++) zB[nB] = arguments[nB];
              jB.debug("Adding metas\n", zB), QB.push(...zB), UB()
            },
            remove: function() {
              for (var BB = arguments.length, zB = new Array(BB), nB = 0; nB < BB; nB++) zB[nB] = arguments[nB];
              jB.debug("Removing metas\n", zB), QB = QB.filter((BB => !zB.includes(BB))), UB()
            },
            addListener: BB => {
              jB.debug("Adding metas listener\n", BB), nB.push(BB)
            },
            removeListener: BB => {
              jB.debug("Removing metas listener\n", BB), nB = nB.filter((jB => jB !== BB))
            },
            capture: BB => {
              var jB;
              const QB = void 0 !== zB,
                nB = null !== (jB = zB) && void 0 !== jB ? jB : dB;
              QB || (zB = nB, IB = 0, NB = nB.length);
              try {
                for (; IB < NB;) {
                  const BB = nB[IB++];
                  null === BB || void 0 === BB || BB()
                }
                const jB = Pd(uB());
                return null === BB || void 0 === BB || BB(), jB
              } finally {
                QB || (zB = void 0)
              }
            },
            addCaptureListener: BB => {
              dB.push(BB)
            },
            removeCaptureListener: BB => {
              dB = dB.filter((jB => jB !== BB))
            },
            get value() {
              return uB()
            }
          }
        }(0, zB),
        nB = xd(jB, zB, BB, QB),
        dB = BI(jB, zB, BB, QB, nB),
        IB = function(BB, jB, zB, QB, nB, dB) {
          jB.debug("Initializing instrumentations");
          const IB = [];
          return {
            add: function() {
              jB.debug("Adding instrumentations");
              for (var NB = arguments.length, uB = new Array(NB), UB = 0; UB < NB; UB++) uB[UB] = arguments[UB];
              uB.forEach((NB => {
                jB.debug(`Adding "${NB.name}" instrumentation`), IB.some((BB => BB.name === NB.name)) ? jB.warn(`Instrumentation ${NB.name} is already added`) : (NB.unpatchedConsole = BB, NB.internalLogger = jB, NB.config = zB, NB.metas = QB, NB.transports = nB, NB.api = dB, IB.push(NB), NB.initialize())
              }))
            },
            get instrumentations() {
              return [...IB]
            },
            remove: function() {
              jB.debug("Removing instrumentations");
              for (var BB = arguments.length, zB = new Array(BB), QB = 0; QB < BB; QB++) zB[QB] = arguments[QB];
              zB.forEach((BB => {
                var zB, QB;
                jB.debug(`Removing "${BB.name}" instrumentation`);
                const nB = IB.reduce(((jB, zB, QB) => null === jB && zB.name === BB.name ? QB : null), null);
                null !== nB ? (null === (zB = (QB = IB[nB]).destroy) || void 0 === zB || zB.call(QB), IB.splice(nB, 1)) : jB.warn(`Instrumentation "${BB.name}" is not added`)
              }))
            }
          }
        }(jB, zB, BB, QB, nB, dB),
        NB = yB(jB, zB, BB, QB, nB, dB, IB);
      return ld(NB),
        function(BB) {
          BB.transports.add(...BB.config.transports), BB.transports.addBeforeSendHooks(BB.config.beforeSend)
        }(NB),
        function(BB) {
          BB.instrumentations.add(...BB.config.instrumentations)
        }(NB), NB
    }

    function zI(BB) {
      const jB = hd(BB);
      if (jB) return jI(jB)
    }
  },
  6641: function(BB, jB, zB) {
    var QB;
    ! function(nB, dB) {
      var IB = "function",
        NB = "undefined",
        uB = "object",
        UB = "string",
        aB = "major",
        pB = "model",
        rB = "name",
        sB = "type",
        JB = "vendor",
        mB = "version",
        yB = "architecture",
        kB = "console",
        GB = "mobile",
        LB = "tablet",
        gB = "smarttv",
        tB = "wearable",
        SB = "embedded",
        MB = "Amazon",
        EB = "Apple",
        iB = "ASUS",
        qB = "BlackBerry",
        fB = "Browser",
        oB = "Chrome",
        HB = "Firefox",
        DB = "Google",
        FB = "Honor",
        YB = "Huawei",
        VB = "LG",
        hB = "Microsoft",
        XB = "Motorola",
        ZB = "Nvidia",
        AB = "OnePlus",
        TB = "Opera",
        PB = "OPPO",
        WB = "Samsung",
        eB = "Sharp",
        lB = "Sony",
        wB = "Xiaomi",
        xB = "Zebra",
        KB = "Facebook",
        CB = "Chromium OS",
        cB = "Mac OS",
        bB = " Browser",
        vB = function(BB) {
          for (var jB = {}, zB = 0; zB < BB.length; zB++) jB[BB[zB].toUpperCase()] = BB[zB];
          return jB
        },
        RB = function(BB, jB) {
          return typeof BB === UB && -1 !== OB(jB).indexOf(OB(BB))
        },
        OB = function(BB) {
          return BB.toLowerCase()
        },
        Bj = function(BB, jB) {
          if (typeof BB === UB) return BB = BB.replace(/^\s\s*/, ""), typeof jB === NB ? BB : BB.substring(0, 500)
        },
        jj = function(BB, jB) {
          for (var zB, QB, nB, NB, UB, aB, pB = 0; pB < jB.length && !UB;) {
            var rB = jB[pB],
              sB = jB[pB + 1];
            for (zB = QB = 0; zB < rB.length && !UB && rB[zB];)
              if (UB = rB[zB++].exec(BB))
                for (nB = 0; nB < sB.length; nB++) aB = UB[++QB], typeof(NB = sB[nB]) === uB && NB.length > 0 ? 2 === NB.length ? typeof NB[1] == IB ? this[NB[0]] = NB[1].call(this, aB) : this[NB[0]] = NB[1] : 3 === NB.length ? typeof NB[1] !== IB || NB[1].exec && NB[1].test ? this[NB[0]] = aB ? aB.replace(NB[1], NB[2]) : dB : this[NB[0]] = aB ? NB[1].call(this, aB, NB[2]) : dB : 4 === NB.length && (this[NB[0]] = aB ? NB[3].call(this, aB.replace(NB[1], NB[2])) : dB) : this[NB] = aB || dB;
            pB += 2
          }
        },
        zj = function(BB, jB) {
          for (var zB in jB)
            if (typeof jB[zB] === uB && jB[zB].length > 0) {
              for (var QB = 0; QB < jB[zB].length; QB++)
                if (RB(jB[zB][QB], BB)) return "?" === zB ? dB : zB
            } else if (RB(jB[zB], BB)) return "?" === zB ? dB : zB;
          return jB.hasOwnProperty("*") ? jB["*"] : BB
        },
        Qj = {
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
        nj = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [mB, [rB, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [mB, [rB, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [rB, mB],
            [/opios[\/ ]+([\w\.]+)/i],
            [mB, [rB, TB + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [mB, [rB, TB + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [mB, [rB, TB]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [mB, [rB, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [mB, [rB, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
            [rB, mB],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [mB, [rB, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [mB, [rB, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [mB, [rB, "UC" + fB]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [mB, [rB, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [mB, [rB, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [mB, [rB, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [mB, [rB, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [mB, [rB, "Smart Lenovo " + fB]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [rB, /(.+)/, "$1 Secure " + fB], mB
            ],
            [/\bfocus\/([\w\.]+)/i],
            [mB, [rB, HB + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [mB, [rB, TB + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [mB, [rB, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [mB, [rB, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [mB, [rB, TB + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [mB, [rB, "MIUI" + bB]],
            [/fxios\/([\w\.-]+)/i],
            [mB, [rB, HB]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [mB, [rB, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [rB, /(.+)/, "$1Browser"], mB
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [rB, /(.+)/, "$1" + bB], mB
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [mB, [rB, WB + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [mB, [rB, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [rB, "Sogou Mobile"], mB
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [rB, mB],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [rB],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [mB, rB],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [rB, KB], mB
            ],
            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
            [rB, mB],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [mB, [rB, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [mB, [rB, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [mB, [rB, oB + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [rB, oB + " WebView"], mB
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [mB, [rB, "Android " + fB]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [rB, mB],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [mB, [rB, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [mB, rB],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [rB, [mB, zj, {
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
            [rB, mB],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [rB, "Netscape"], mB
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [rB, mB],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [mB, [rB, HB + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [rB, [mB, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [rB, [mB, /master.|lts./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [yB, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [yB, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [yB, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [yB, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [yB, "arm"]
            ],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [
              [yB, /ower/, "", OB]
            ],
            [/ sun4\w[;\)]/i],
            [
              [yB, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
            [
              [yB, OB]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [pB, [JB, WB],
              [sB, LB]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
            [pB, [JB, WB],
              [sB, GB]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [pB, [JB, EB],
              [sB, GB]
            ],
            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
            [pB, [JB, EB],
              [sB, LB]
            ],
            [/(macintosh);/i],
            [pB, [JB, EB]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [pB, [JB, eB],
              [sB, GB]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [pB, [JB, FB],
              [sB, LB]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [pB, [JB, FB],
              [sB, GB]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [pB, [JB, YB],
              [sB, LB]
            ],
            [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
            [pB, [JB, YB],
              [sB, GB]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [pB, /_/g, " "],
              [JB, wB],
              [sB, LB]
            ],
            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [pB, /_/g, " "],
              [JB, wB],
              [sB, GB]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [pB, [JB, PB],
              [sB, GB]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [pB, [JB, zj, {
                OnePlus: ["304", "403", "203"],
                "*": PB
              }],
              [sB, LB]
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [pB, [JB, "Vivo"],
              [sB, GB]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [pB, [JB, "Realme"],
              [sB, GB]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
            [pB, [JB, XB],
              [sB, GB]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [pB, [JB, XB],
              [sB, LB]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [pB, [JB, VB],
              [sB, LB]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
            [pB, [JB, VB],
              [sB, GB]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [pB, [JB, "Lenovo"],
              [sB, LB]
            ],
            [/(nokia) (t[12][01])/i],
            [JB, pB, [sB, LB]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
            [
              [pB, /_/g, " "],
              [sB, GB],
              [JB, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [pB, [JB, DB],
              [sB, LB]
            ],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [pB, [JB, DB],
              [sB, GB]
            ],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [pB, [JB, lB],
              [sB, GB]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [pB, "Xperia Tablet"],
              [JB, lB],
              [sB, LB]
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [pB, [JB, AB],
              [sB, GB]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [pB, [JB, MB],
              [sB, LB]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [pB, /(.+)/g, "Fire Phone $1"],
              [JB, MB],
              [sB, GB]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [pB, JB, [sB, LB]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [pB, [JB, qB],
              [sB, GB]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [pB, [JB, iB],
              [sB, LB]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [pB, [JB, iB],
              [sB, GB]
            ],
            [/(nexus 9)/i],
            [pB, [JB, "HTC"],
              [sB, LB]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [JB, [pB, /_/g, " "],
              [sB, GB]
            ],
            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
            [pB, [JB, "TCL"],
              [sB, LB]
            ],
            [/(itel) ((\w+))/i],
            [
              [JB, OB], pB, [sB, zj, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [pB, [JB, "Acer"],
              [sB, LB]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [pB, [JB, "Meizu"],
              [sB, GB]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [pB, [JB, "Ulefone"],
              [sB, GB]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [pB, [JB, "Energizer"],
              [sB, GB]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [pB, [JB, "Cat"],
              [sB, GB]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [pB, [JB, "Smartfren"],
              [sB, GB]
            ],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [pB, [JB, "Nothing"],
              [sB, GB]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [pB, [JB, "Archos"],
              [sB, LB]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [pB, [JB, "Archos"],
              [sB, GB]
            ],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [JB, pB, [sB, LB]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
            [JB, pB, [sB, GB]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [JB, pB, [sB, LB]],
            [/(surface duo)/i],
            [pB, [JB, hB],
              [sB, LB]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [pB, [JB, "Fairphone"],
              [sB, GB]
            ],
            [/(u304aa)/i],
            [pB, [JB, "AT&T"],
              [sB, GB]
            ],
            [/\bsie-(\w*)/i],
            [pB, [JB, "Siemens"],
              [sB, GB]
            ],
            [/\b(rct\w+) b/i],
            [pB, [JB, "RCA"],
              [sB, LB]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [pB, [JB, "Dell"],
              [sB, LB]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [pB, [JB, "Verizon"],
              [sB, LB]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [pB, [JB, "Barnes & Noble"],
              [sB, LB]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [pB, [JB, "NuVision"],
              [sB, LB]
            ],
            [/\b(k88) b/i],
            [pB, [JB, "ZTE"],
              [sB, LB]
            ],
            [/\b(nx\d{3}j) b/i],
            [pB, [JB, "ZTE"],
              [sB, GB]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [pB, [JB, "Swiss"],
              [sB, GB]
            ],
            [/\b(zur\d{3}) b/i],
            [pB, [JB, "Swiss"],
              [sB, LB]
            ],
            [/\b((zeki)?tb.*\b) b/i],
            [pB, [JB, "Zeki"],
              [sB, LB]
            ],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [
              [JB, "Dragon Touch"], pB, [sB, LB]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [pB, [JB, "Insignia"],
              [sB, LB]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [pB, [JB, "NextBook"],
              [sB, LB]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
              [JB, "Voice"], pB, [sB, GB]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
              [JB, "LvTel"], pB, [sB, GB]
            ],
            [/\b(ph-1) /i],
            [pB, [JB, "Essential"],
              [sB, GB]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [pB, [JB, "Envizen"],
              [sB, LB]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [pB, [JB, "MachSpeed"],
              [sB, LB]
            ],
            [/\btu_(1491) b/i],
            [pB, [JB, "Rotor"],
              [sB, LB]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [pB, [JB, ZB],
              [sB, LB]
            ],
            [/(sprint) (\w+)/i],
            [JB, pB, [sB, GB]],
            [/(kin\.[onetw]{3})/i],
            [
              [pB, /\./g, " "],
              [JB, hB],
              [sB, GB]
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [pB, [JB, xB],
              [sB, LB]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [pB, [JB, xB],
              [sB, GB]
            ],
            [/smart-tv.+(samsung)/i],
            [JB, [sB, gB]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [pB, /^/, "SmartTV"],
              [JB, WB],
              [sB, gB]
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [JB, VB],
              [sB, gB]
            ],
            [/(apple) ?tv/i],
            [JB, [pB, EB + " TV"],
              [sB, gB]
            ],
            [/crkey/i],
            [
              [pB, oB + "cast"],
              [JB, DB],
              [sB, gB]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [pB, [JB, MB],
              [sB, gB]
            ],
            [/(shield \w+ tv)/i],
            [pB, [JB, ZB],
              [sB, gB]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [pB, [JB, eB],
              [sB, gB]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [pB, [JB, lB],
              [sB, gB]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [pB, [JB, wB],
              [sB, gB]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [JB, pB, [sB, gB]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [JB, Bj],
              [pB, Bj],
              [sB, gB]
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [pB, [sB, gB]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [
              [sB, gB]
            ],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [JB, pB, [sB, kB]],
            [/droid.+; (shield)( bui|\))/i],
            [pB, [JB, ZB],
              [sB, kB]
            ],
            [/(playstation \w+)/i],
            [pB, [JB, lB],
              [sB, kB]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [pB, [JB, hB],
              [sB, kB]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [pB, [JB, WB],
              [sB, tB]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [JB, pB, [sB, tB]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [pB, [JB, PB],
              [sB, tB]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [pB, [JB, EB],
              [sB, tB]
            ],
            [/(opwwe\d{3})/i],
            [pB, [JB, AB],
              [sB, tB]
            ],
            [/(moto 360)/i],
            [pB, [JB, XB],
              [sB, tB]
            ],
            [/(smartwatch 3)/i],
            [pB, [JB, lB],
              [sB, tB]
            ],
            [/(g watch r)/i],
            [pB, [JB, VB],
              [sB, tB]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [pB, [JB, xB],
              [sB, tB]
            ],
            [/droid.+; (glass) \d/i],
            [pB, [JB, DB],
              [sB, tB]
            ],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [JB, pB, [sB, tB]],
            [/; (quest( \d| pro)?)/i],
            [pB, [JB, KB],
              [sB, tB]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [JB, [sB, SB]],
            [/(aeobc)\b/i],
            [pB, [JB, MB],
              [sB, SB]
            ],
            [/(homepod).+mac os/i],
            [pB, [JB, EB],
              [sB, SB]
            ],
            [/windows iot/i],
            [
              [sB, SB]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [pB, [sB, GB]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [pB, [sB, LB]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [sB, LB]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [sB, GB]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [pB, [JB, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [mB, [rB, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [rB, mB],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [mB, [rB, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [rB, mB],
            [/ladybird\//i],
            [
              [rB, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [mB, rB]
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [rB, mB],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [rB, [mB, zj, Qj]],
            [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [mB, zj, Qj],
              [rB, "Windows"]
            ],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [mB, /_/g, "."],
              [rB, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
              [rB, cB],
              [mB, /_/g, "."]
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [mB, rB],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [rB, /(.+)/, "$1 Touch"], mB
            ],
            [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
            [rB, mB],
            [/\(bb(10);/i],
            [mB, [rB, qB]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [mB, [rB, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [mB, [rB, HB + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [mB, [rB, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [mB, [rB, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [mB, [rB, oB + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [rB, CB], mB
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
            [rB, mB],
            [/(sunos) ?([\w\.\d]*)/i],
            [
              [rB, "Solaris"], mB
            ],
            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [rB, mB]
          ]
        },
        dj = function(BB, jB) {
          if (typeof BB === uB && (jB = BB, BB = dB), !(this instanceof dj)) return new dj(BB, jB).getResult();
          var zB = typeof nB !== NB && nB.navigator ? nB.navigator : dB,
            QB = BB || (zB && zB.userAgent ? zB.userAgent : ""),
            kB = zB && zB.userAgentData ? zB.userAgentData : dB,
            gB = jB ? function(BB, jB) {
              var zB = {};
              for (var QB in BB) jB[QB] && jB[QB].length % 2 === 0 ? zB[QB] = jB[QB].concat(BB[QB]) : zB[QB] = BB[QB];
              return zB
            }(nj, jB) : nj,
            tB = zB && zB.userAgent == QB;
          return this.getBrowser = function() {
            var BB, jB = {};
            return jB[rB] = dB, jB[mB] = dB, jj.call(jB, QB, gB.browser), jB[aB] = typeof(BB = jB[mB]) === UB ? BB.replace(/[^\d\.]/g, "").split(".")[0] : dB, tB && zB && zB.brave && typeof zB.brave.isBrave == IB && (jB[rB] = "Brave"), jB
          }, this.getCPU = function() {
            var BB = {};
            return BB[yB] = dB, jj.call(BB, QB, gB.cpu), BB
          }, this.getDevice = function() {
            var BB = {};
            return BB[JB] = dB, BB[pB] = dB, BB[sB] = dB, jj.call(BB, QB, gB.device), tB && !BB[sB] && kB && kB.mobile && (BB[sB] = GB), tB && "Macintosh" == BB[pB] && zB && typeof zB.standalone !== NB && zB.maxTouchPoints && zB.maxTouchPoints > 2 && (BB[pB] = "iPad", BB[sB] = LB), BB
          }, this.wJ = function() {
            var BB = {};
            return BB[rB] = dB, BB[mB] = dB, jj.call(BB, QB, gB.engine), BB
          }, this.getOS = function() {
            var BB = {};
            return BB[rB] = dB, BB[mB] = dB, jj.call(BB, QB, gB.os), tB && !BB[rB] && kB && kB.platform && "Unknown" != kB.platform && (BB[rB] = kB.platform.replace(/chrome os/i, CB).replace(/macos/i, cB)), BB
          }, this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.wJ(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function() {
            return QB
          }, this.setUA = function(BB) {
            return QB = typeof BB === UB && BB.length > 500 ? Bj(BB, 500) : BB, this
          }, this.setUA(QB), this
        };
      dj.VERSION = "1.0.41", dj.BROWSER = vB([rB, mB, aB]), dj.CPU = vB([yB]), dj.DEVICE = vB([pB, JB, sB, kB, GB, gB, LB, tB, SB]), dj.ENGINE = dj.OS = vB([rB, mB]), typeof jB !== NB ? (BB.exports && (jB = BB.exports = dj), jB.UAParser = dj) : zB.amdO ? (QB = function() {
        return dj
      }.call(jB, zB, jB, BB)) === dB || (BB.exports = QB) : typeof nB !== NB && (nB.UAParser = dj);
      var Ij = typeof nB !== NB && (nB.jQuery || nB.Zepto);
      if (Ij && !Ij.ua) {
        var Nj = new dj;
        Ij.ua = Nj.getResult(), Ij.ua.get = function() {
          return Nj.getUA()
        }, Ij.ua.set = function(BB) {
          Nj.setUA(BB);
          var jB = Nj.getResult();
          for (var zB in jB) Ij.ua[zB] = jB[zB]
        }
      }
    }("object" === typeof window ? window : this)
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);