export const id = 31;
export const ids = [31];
export const modules = {
  6573: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      BaseExtension: () => qg,
      BaseInstrumentation: () => Eg,
      BaseTransport: () => Il,
      CSPInstrumentation: () => rl,
      ConsoleInstrumentation: () => fg,
      ConsoleTransport: () => gO,
      EVENT_CLICK: () => oE,
      EVENT_NAVIGATION: () => PE,
      EVENT_ROUTE_CHANGE: () => hE,
      EVENT_SESSION_EXTEND: () => rE,
      EVENT_SESSION_RESUME: () => tE,
      EVENT_SESSION_START: () => yE,
      EVENT_VIEW_CHANGED: () => QE,
      ErrorsInstrumentation: () => Tg,
      FetchTransport: () => PO,
      InternalLoggerLevel: () => FE,
      LogLevel: () => og,
      MAX_SESSION_PERSISTENCE_TIME: () => Aq,
      NavigationInstrumentation: () => Jl,
      Observable: () => Hg,
      PerformanceInstrumentation: () => XY,
      PersistentSessionsManager: () => pE,
      SESSION_EXPIRATION_TIME: () => Oq,
      SESSION_INACTIVITY_TIME: () => mq,
      STORAGE_KEY: () => lq,
      SessionInstrumentation: () => Yg,
      TransportItemType: () => el,
      UserActionInstrumentation: () => tl,
      UserActionState: () => al,
      VERSION: () => gg,
      ViewInstrumentation: () => Sg,
      VolatileSessionsManager: () => GE,
      WebVitalsInstrumentation: () => MY,
      allLogLevels: () => Qg,
      browserMeta: () => Xl,
      buildStackFrame: () => lg,
      captureMetas: () => SO,
      createInternalLogger: () => vO,
      createPromiseBuffer: () => WO,
      createSession: () => Kl,
      deepEqual: () => HE,
      defaultEventDomain: () => Yq,
      defaultExceptionType: () => vg,
      defaultGlobalObjectKey: () => hO,
      defaultInternalLoggerLevel: () => XE,
      defaultLogLevel: () => Pg,
      faro: () => Vq,
      genShortID: () => jE,
      getCurrentTimestamp: () => aE,
      getDataFromSafariExtensions: () => Wg,
      getIgnoreUrls: () => wq,
      getInternalFaroFromGlobalObject: () => Wq,
      getStackFramesFromError: () => ag,
      getTransportBody: () => EO,
      getUrlFromResource: () => Cq,
      getWebInstrumentations: () => kl,
      globalObject: () => uq,
      initializeFaro: () => IO,
      internalGlobalObjectKey: () => Bq,
      isArray: () => iq,
      isBoolean: () => vq,
      isDomError: () => Lq,
      isDomException: () => Jq,
      isElement: () => Rq,
      isElementDefined: () => kq,
      UN: () => Xq,
      isError: () => pq,
      isErrorDefined: () => Sq,
      isErrorEvent: () => Gq,
      isEvent: () => zq,
      isEventDefined: () => Tq,
      isFunction: () => bq,
      isInstanceOf: () => oq,
      isInt: () => rq,
      isInternalFaroOnGlobalObject: () => aq,
      isMap: () => Fq,
      isMapDefined: () => Uq,
      isNull: () => Qq,
      isNumber: () => tq,
      isObject: () => nq,
      isPrimitive: () => Mq,
      isRegExp: () => Zq,
      isString: () => yq,
      isSymbol: () => hq,
      isSyntheticEvent: () => sq,
      isThenable: () => fq,
      isToString: () => Hq,
      isTypeof: () => jq,
      isUndefined: () => Pq,
      makeCoreConfig: () => iO,
      noop: () => UE,
      osMeta: () => wl,
      parseStacktrace: () => Vg,
      sdkMeta: () => Cl,
      setInternalFaroOnGlobalObject: () => Nq,
      transportItemTypeToBodyKey: () => Dl,
      unknownString: () => zg,
      userActionDataAttribute: () => wY,
      userActionTimeoutDataAttribute: () => KY
    });
    const Yq = "browser",
      lq = "com.grafana.faro.session",
      Oq = 144e5,
      mq = 9e5,
      xq = 1e3,
      Aq = mq,
      cq = {
        enabled: !0,
        persistent: !1,
        maxSessionPersistenceTime: Aq
      };
    const uq = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof gq.g ? gq.g : "undefined" !== typeof self ? self : void 0;
    const Bq = "_faroInternal";

    function Wq() {
      return uq[Bq]
    }

    function Nq(qq) {
      qq.config.isolate ? qq.internalLogger.debug("Skipping registering internal Faro instance on global object") : (qq.internalLogger.debug("Registering internal Faro instance on global object"), Object.defineProperty(uq, Bq, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: qq
      }))
    }

    function aq() {
      return Bq in uq
    }
    let Vq = {
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

    function dq(qq, Eq, gq, Yq, lq, Oq, mq) {
      return Eq.debug("Initializing Faro"), Vq = {
          api: Oq,
          config: gq,
          instrumentations: mq,
          internalLogger: Eq,
          metas: Yq,
          pause: lq.pause,
          transports: lq,
          unpatchedConsole: qq,
          unpause: lq.unpause
        }, Nq(Vq),
        function(qq) {
          if (qq.config.preventGlobalExposure) qq.internalLogger.debug("Skipping registering public Faro instance in the global scope");
          else {
            if (qq.internalLogger.debug(`Registering public faro reference in the global scope using "${qq.config.globalObjectKey}" key`), qq.config.globalObjectKey in uq) return void qq.internalLogger.warn(`Skipping global registration due to key "${qq.config.globalObjectKey}" being used already. Please set "globalObjectKey" to something else or set "preventGlobalExposure" to "true"`);
            Object.defineProperty(uq, qq.config.globalObjectKey, {
              configurable: !1,
              writable: !1,
              value: qq
            })
          }
        }(Vq), Vq
    }

    function jq(qq, Eq) {
      return typeof qq === Eq
    }

    function Hq(qq, Eq) {
      return Object.prototype.toString.call(qq) === `[object ${Eq}]`
    }

    function oq(qq, Eq) {
      try {
        return qq instanceof Eq
      } catch (gq) {
        return !1
      }
    }
    const Pq = qq => jq(qq, "undefined"),
      Qq = qq => jq(qq, "null"),
      yq = qq => jq(qq, "string"),
      tq = qq => jq(qq, "number") && !isNaN(qq) || jq(qq, "bigint"),
      rq = qq => tq(qq) && Number.isInteger(qq),
      vq = qq => jq(qq, "boolean"),
      hq = qq => jq(qq, "symbol"),
      nq = qq => !Qq(qq) && jq(qq, "object"),
      bq = qq => jq(qq, "function"),
      iq = qq => Hq(qq, "Array"),
      Zq = qq => Hq(qq, "RegExp"),
      fq = qq => bq(null === qq || void 0 === qq ? void 0 : qq.then),
      Mq = qq => !nq(qq) && !bq(qq),
      Tq = "undefined" !== typeof Event,
      zq = qq => Tq && oq(qq, Event),
      Sq = "undefined" !== typeof Error,
      pq = qq => Sq && oq(qq, Error),
      Gq = qq => Hq(qq, "ErrorEvent"),
      Lq = qq => Hq(qq, "DOMError"),
      Jq = qq => Hq(qq, "DOMException"),
      kq = "undefined" !== typeof Element,
      Rq = qq => kq && oq(qq, Element),
      Uq = "undefined" !== typeof Map,
      Fq = qq => Uq && oq(qq, Map),
      sq = qq => nq(qq) && "nativeEvent" in qq && "preventDefault" in qq && "stopPropagation" in qq;

    function Xq(qq) {
      return null == qq || (iq(qq) || yq(qq) ? 0 === qq.length : !!nq(qq) && 0 === Object.keys(qq).length)
    }

    function wq() {
      return Vq.transports.transports.flatMap((qq => qq.getIgnoreUrls()))
    }

    function Kq() {
      let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return wq().some((Eq => qq && null != qq.match(Eq)))
    }

    function Cq(qq) {
      return yq(qq) ? qq : qq instanceof URL ? qq.href : !Xq(qq) && bq(null === qq || void 0 === qq ? void 0 : qq.toString) ? qq.toString() : void 0
    }
    const Iq = "sessionStorage",
      eq = "localStorage";

    function Dq(qq) {
      try {
        let Eq;
        Eq = window[qq];
        const gq = "__faro_storage_test__";
        return Eq.setItem(gq, gq), Eq.removeItem(gq), !0
      } catch (gq) {
        var Eq;
        return null === (Eq = Vq.internalLogger) || void 0 === Eq || Eq.info(`Web storage of type ${qq} is not available. Reason: ${gq}`), !1
      }
    }

    function qE(qq, Eq) {
      return OE(Eq) ? window[Eq].getItem(qq) : null
    }

    function EE(qq, Eq, gq) {
      if (OE(gq)) try {
        window[gq].setItem(qq, Eq)
      } catch (Yq) {}
    }

    function gE(qq, Eq) {
      OE(Eq) && window[Eq].removeItem(qq)
    }
    const YE = Dq(eq),
      lE = Dq(Iq);

    function OE(qq) {
      return qq === eq ? YE : qq === Iq && lE
    }

    function mE(qq) {
      return mE = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, mE(qq)
    }

    function xE(qq) {
      var Eq = function(qq, Eq) {
        if ("object" != mE(qq) || !qq) return qq;
        var gq = qq[Symbol.toPrimitive];
        if (void 0 !== gq) {
          var Yq = gq.call(qq, Eq || "default");
          if ("object" != mE(Yq)) return Yq;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Eq ? String : Number)(qq)
      }(qq, "string");
      return "symbol" == mE(Eq) ? Eq : Eq + ""
    }

    function AE(qq, Eq, gq) {
      return (Eq = xE(Eq)) in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }

    function cE(qq, Eq) {
      var gq = Object.keys(qq);
      if (Object.getOwnPropertySymbols) {
        var Yq = Object.getOwnPropertySymbols(qq);
        Eq && (Yq = Yq.filter((function(Eq) {
          return Object.getOwnPropertyDescriptor(qq, Eq).enumerable
        }))), gq.push.apply(gq, Yq)
      }
      return gq
    }

    function uE(qq) {
      for (var Eq = 1; Eq < arguments.length; Eq++) {
        var gq = null != arguments[Eq] ? arguments[Eq] : {};
        Eq % 2 ? cE(Object(gq), !0).forEach((function(Eq) {
          AE(qq, Eq, gq[Eq])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(qq, Object.getOwnPropertyDescriptors(gq)) : cE(Object(gq)).forEach((function(Eq) {
          Object.defineProperty(qq, Eq, Object.getOwnPropertyDescriptor(gq, Eq))
        }))
      }
      return qq
    }

    function BE() {
      let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vq;
      var Eq, gq, Yq;
      const lq = qq.config.sessionTracking,
        Oq = null !== (Eq = null !== (gq = null === lq || void 0 === lq || null === (Yq = lq.sampler) || void 0 === Yq ? void 0 : Yq.call(lq, {
          metas: qq.metas.value
        })) && void 0 !== gq ? gq : null === lq || void 0 === lq ? void 0 : lq.samplingRate) && void 0 !== Eq ? Eq : 1,
        mq = "number" === typeof Oq ? function(qq) {
          return Math.min(1, Math.max(0, qq))
        }(Oq) : 0;
      if (!(mq > 0)) return !1;
      if (1 === mq) return !0;
      try {
        const qq = "undefined" !== typeof window ? window.crypto : void 0;
        if ("function" === typeof(null === qq || void 0 === qq ? void 0 : qq.getRandomValues)) {
          const Eq = new Uint32Array(1);
          return qq.getRandomValues(Eq), Eq[0] / Math.pow(2, 32) < mq
        }
      } catch (xq) {}
      return Math.random() < mq
    }

    function WE() {
      return Date.now()
    }

    function NE() {
      return "undefined" !== typeof performance && "function" === typeof performance.now ? performance.now() : Date.now()
    }

    function aE() {
      return (new Date).toISOString()
    }

    function VE(qq) {
      return new Date(qq).toISOString()
    }
    const dE = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

    function jE() {
      let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      const Eq = new Uint32Array(qq),
        gq = "undefined" !== typeof globalThis ? globalThis.crypto : void 0;
      if (null === gq || void 0 === gq ? void 0 : gq.getRandomValues) gq.getRandomValues(Eq);
      else
        for (let lq = 0; lq < qq; lq++) Eq[lq] = Math.floor(4294967296 * Math.random());
      let Yq = "";
      for (let lq = 0; lq < qq; lq++) Yq += dE[Eq[lq] % 59];
      return Yq
    }

    function HE(qq, Eq) {
      if (qq === Eq) return !0;
      if (jq(qq, "number") && isNaN(qq)) return jq(Eq, "number") && isNaN(Eq);
      const gq = iq(qq),
        Yq = iq(Eq);
      if (gq !== Yq) return !1;
      if (gq && Yq) {
        const gq = qq.length;
        if (gq !== Eq.length) return !1;
        for (let Yq = gq; 0 !== Yq--;)
          if (!HE(qq[Yq], Eq[Yq])) return !1;
        return !0
      }
      const lq = nq(qq),
        Oq = nq(Eq);
      if (lq !== Oq) return !1;
      if (qq && Eq && lq && Oq) {
        const gq = Object.keys(qq),
          Yq = Object.keys(Eq);
        if (gq.length !== Yq.length) return !1;
        for (let qq of gq)
          if (!Yq.includes(qq)) return !1;
        for (let lq of gq)
          if (!HE(qq[lq], Eq[lq])) return !1;
        return !0
      }
      return !1
    }
    const oE = "click",
      PE = "navigation",
      QE = "view_changed",
      yE = "session_start",
      tE = "session_resume",
      rE = "session_extend",
      vE = "service_name_override",
      hE = "route_change";

    function nE() {
      let {
        sessionId: qq,
        started: Eq,
        lastActivity: gq,
        isSampled: Yq = !0
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, lq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Vq;
      var Oq;
      const mq = WE(),
        xq = null === (Oq = lq.config) || void 0 === Oq || null === (Oq = Oq.sessionTracking) || void 0 === Oq ? void 0 : Oq.generateSessionId;
      return null == qq && (qq = "function" === typeof xq ? xq() : jE()), {
        sessionId: qq,
        lastActivity: null !== gq && void 0 !== gq ? gq : mq,
        started: null !== Eq && void 0 !== Eq ? Eq : mq,
        isSampled: Yq
      }
    }

    function bE(qq) {
      if (null == qq) return !1;
      const Eq = WE();
      return Eq - qq.started < 144e5 && Eq - qq.lastActivity < mq
    }

    function iE(qq) {
      let {
        fetchUserSession: Eq,
        storeUserSession: gq,
        adoptSession: Yq,
        updateInterval: lq = 0
      } = qq, xq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Vq, Aq = 0;
      return function() {
        let {
          forceSessionExtend: qq = !1,
          refreshActivity: cq = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var uq, Bq;
        if (!Eq || !gq) return;
        const Wq = WE();
        if (!qq && Wq < Aq && Aq - Wq <= lq) return;
        const Nq = xq.config.sessionTracking,
          aq = null === Nq || void 0 === Nq ? void 0 : Nq.persistent;
        if (aq && !YE || !aq && !lE) return;
        const Vq = Eq();
        if (Aq = Math.min(Wq + lq, (null !== (uq = null === Vq || void 0 === Vq ? void 0 : Vq.started) && void 0 !== uq ? uq : Wq) + Oq, (null !== (Bq = null === Vq || void 0 === Vq ? void 0 : Vq.lastActivity) && void 0 !== Bq ? Bq : Wq) + mq), !1 === qq && bE(Vq)) {
          var dq;
          cq && gq(uE(uE({}, Vq), {}, {
            lastActivity: Wq
          }));
          const qq = null === (dq = xq.metas.value.session) || void 0 === dq ? void 0 : dq.id;
          null != Yq && null != Vq.sessionMeta && Vq.sessionId !== qq && Yq(Vq.sessionMeta)
        } else {
          var jq, Hq, oq;
          let qq = fE(nE({
            isSampled: BE(xq)
          }, xq), Vq, xq);
          Aq = Wq + lq, gq(qq), null === (jq = xq.api) || void 0 === jq || jq.setSession(qq.sessionMeta), null === Nq || void 0 === Nq || null === (Hq = Nq.onSessionChange) || void 0 === Hq || Hq.call(Nq, null !== (oq = null === Vq || void 0 === Vq ? void 0 : Vq.sessionMeta) && void 0 !== oq ? oq : null, qq.sessionMeta)
        }
      }
    }

    function ZE(qq) {
      let Eq, {
          fetchUserSession: gq,
          storeUserSession: Yq,
          updateInterval: lq = 0
        } = qq,
        Oq = 0;
      return qq => {
        const mq = WE();
        if (qq === Eq && mq < Oq && Oq - mq <= lq) return;
        Eq = qq, Oq = mq + lq;
        const xq = gq();
        (null === xq || void 0 === xq ? void 0 : xq.sessionId) === qq && bE(xq) && Yq(uE(uE({}, xq), {}, {
          lastActivity: mq
        }))
      }
    }

    function fE(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Vq;
      var Yq, lq, Oq, mq, xq, Aq;
      const cq = uE(uE({}, qq), {}, {
          sessionMeta: {
            id: qq.sessionId,
            attributes: TE(uE(uE(uE({}, null === (Yq = gq.config.sessionTracking) || void 0 === Yq || null === (Yq = Yq.session) || void 0 === Yq ? void 0 : Yq.attributes), null !== (lq = null === (Oq = gq.metas.value.session) || void 0 === Oq ? void 0 : Oq.attributes) && void 0 !== lq ? lq : {}), {}, {
              isSampled: qq.isSampled.toString()
            }))
          }
        }),
        uq = null !== (mq = null === (xq = gq.metas.value.session) || void 0 === xq ? void 0 : xq.overrides) && void 0 !== mq ? mq : null === Eq || void 0 === Eq || null === (Aq = Eq.sessionMeta) || void 0 === Aq ? void 0 : Aq.overrides;
      Xq(uq) || (cq.sessionMeta.overrides = uq);
      const Bq = null === Eq || void 0 === Eq ? void 0 : Eq.sessionId;
      return null != Bq && (cq.sessionMeta.attributes.previousSession = Bq), cq
    }

    function ME(qq) {
      let {
        fetchUserSession: Eq,
        storeUserSession: gq
      } = qq, Yq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Vq, lq = !1;
      return function(qq) {
        if (lq) return;
        const Oq = qq.session,
          mq = Eq();
        let xq = null === Oq || void 0 === Oq ? void 0 : Oq.id;
        const Aq = null === Oq || void 0 === Oq ? void 0 : Oq.attributes,
          cq = null === Oq || void 0 === Oq ? void 0 : Oq.overrides,
          uq = null === mq || void 0 === mq ? void 0 : mq.sessionMeta,
          Bq = null === uq || void 0 === uq ? void 0 : uq.overrides,
          Wq = !!cq && !HE(cq, Bq),
          Nq = !!Aq && !HE(Aq, null === uq || void 0 === uq ? void 0 : uq.attributes);
        if (Oq && xq !== (null === mq || void 0 === mq ? void 0 : mq.sessionId) || Nq || Wq) {
          var aq, Vq;
          const qq = null != mq && xq === mq.sessionId,
            Eq = fE(qq ? mq : nE({
              sessionId: xq,
              isSampled: BE(Yq)
            }, Yq), mq, Yq),
            Oq = null === mq || void 0 === mq || null === (aq = mq.sessionMeta) || void 0 === aq || null === (aq = aq.attributes) || void 0 === aq ? void 0 : aq.previousSession;
          qq && null != Oq && Oq !== Eq.sessionId && (Eq.sessionMeta.attributes.previousSession = Oq), (null === (Vq = Eq.sessionMeta.attributes) || void 0 === Vq ? void 0 : Vq.previousSession) === Eq.sessionId && delete Eq.sessionMeta.attributes.previousSession, gq(Eq),
            function(qq, Eq) {
              let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              var lq, Oq, mq;
              if (!Eq) return;
              const xq = gq.serviceName,
                Aq = null !== (lq = null !== (Oq = Yq.serviceName) && void 0 !== Oq ? Oq : null === (mq = qq.metas.value.app) || void 0 === mq ? void 0 : mq.name) && void 0 !== lq ? lq : "";
              xq && xq !== Aq && qq.api.pushEvent(vE, {
                serviceName: xq,
                previousServiceName: Aq
              })
            }(Yq, Wq, cq, Bq), lq = !0;
          try {
            Yq.api.setSession(Eq.sessionMeta)
          } finally {
            lq = !1
          }
        }
      }
    }

    function TE(qq) {
      const Eq = {};
      for (const gq of Object.keys(qq)) {
        const Yq = qq[gq];
        void 0 !== Yq && (Eq[gq] = Yq)
      }
      return Eq
    }

    function zE() {
      let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.stringify(null !== qq && void 0 !== qq ? qq : {}, function() {
        const qq = new WeakSet;
        return function(Eq, gq) {
          if (nq(gq) && null !== gq) {
            if (qq.has(gq)) return null;
            qq.add(gq)
          }
          return gq
        }
      }())
    }

    function SE() {
      let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const Eq = {};
      for (const [gq, Yq] of Object.entries(qq)) Eq[gq] = nq(Yq) && null !== Yq ? zE(Yq) : String(Yq);
      return Eq
    }
    var pE = class qq {
      constructor() {
        var Eq = this;
        let gq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vq;
        this.context = gq, this.adopting = !1, this.isAdopting = () => this.adopting, this.adoptSession = qq => {
          this.adopting = !0;
          try {
            var Eq;
            null === (Eq = this.context.api) || void 0 === Eq || Eq.setSession(qq)
          } finally {
            this.adopting = !1
          }
        }, this.updateSession = function() {
          let {
            refreshActivity: qq = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Eq.updateUserSession({
            refreshActivity: qq
          })
        }, this.recordActivity = ZE({
          fetchUserSession: qq.fetchUserSession,
          storeUserSession: qq.storeUserSession,
          updateInterval: xq
        }), this.updateUserSession = iE({
          fetchUserSession: qq.fetchUserSession,
          storeUserSession: qq.storeUserSession,
          adoptSession: this.adoptSession,
          updateInterval: xq
        }, gq), this.init()
      }
      static removeUserSession() {
        gE(lq, qq.storageTypeLocal)
      }
      static storeUserSession(Eq) {
        EE(lq, zE(Eq), qq.storageTypeLocal)
      }
      static fetchUserSession() {
        const Eq = qE(lq, qq.storageTypeLocal);
        return Eq ? JSON.parse(Eq) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var qq;
            this.updateSession({
              refreshActivity: !1
            });
            const Eq = null === (qq = this.context.api) || void 0 === qq || null === (qq = qq.getSession()) || void 0 === qq ? void 0 : qq.id;
            Eq && this.recordActivity(Eq)
          }
        })), this.context.metas.addListener(ME({
          fetchUserSession: qq.fetchUserSession,
          storeUserSession: qq.storeUserSession
        }, this.context))
      }
    };
    pE.storageTypeLocal = eq;
    var GE = class qq {
      constructor() {
        var Eq = this;
        let gq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vq;
        this.context = gq, this.isAdopting = () => !1, this.updateSession = function() {
          let {
            refreshActivity: qq = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Eq.updateUserSession({
            refreshActivity: qq
          })
        }, this.recordActivity = ZE({
          fetchUserSession: qq.fetchUserSession,
          storeUserSession: qq.storeUserSession,
          updateInterval: xq
        }), this.updateUserSession = iE({
          fetchUserSession: qq.fetchUserSession,
          storeUserSession: qq.storeUserSession,
          updateInterval: xq
        }, gq), this.init()
      }
      static removeUserSession() {
        gE(lq, qq.storageTypeSession)
      }
      static storeUserSession(Eq) {
        EE(lq, zE(Eq), qq.storageTypeSession)
      }
      static fetchUserSession() {
        const Eq = qE(lq, qq.storageTypeSession);
        return Eq ? JSON.parse(Eq) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var qq;
            this.updateSession({
              refreshActivity: !1
            });
            const Eq = null === (qq = this.context.api) || void 0 === qq || null === (qq = qq.getSession()) || void 0 === qq ? void 0 : qq.id;
            Eq && this.recordActivity(Eq)
          }
        })), this.context.metas.addListener(ME({
          fetchUserSession: qq.fetchUserSession,
          storeUserSession: qq.storeUserSession
        }, this.context))
      }
    };
    GE.storageTypeSession = Iq;
    const LE = new WeakMap;

    function JE(qq) {
      let Eq = LE.get(qq);
      if (!Eq) {
        let gq = [],
          Yq = [];
        Eq = {
          addSessionUpdateListener: qq => {
            gq.push(qq)
          },
          removeSessionUpdateListener: qq => {
            gq = gq.filter((Eq => Eq !== qq))
          },
          notifySessionUpdate: qq => {
            gq.forEach((Eq => Eq(qq)))
          },
          shouldCapture: () => Yq.every((qq => qq())),
          addCaptureFilter: qq => {
            Yq.push(qq)
          },
          removeCaptureFilter: qq => {
            Yq = Yq.filter((Eq => Eq !== qq))
          }
        }, LE.set(qq, Eq)
      }
      return Eq
    }
    var kE = class {
      constructor(qq, Eq, gq) {
        this.metas = qq, this.transports = Eq, this.onActivate = gq, this.waiting = !1, this.shouldCapture = () => !document.prerendering, this.discard = () => null, this.recordUpdate = qq => {
          var Eq, gq, Yq;
          const lq = this.pending;
          var Oq, mq;
          if ("overrides" === qq.type) return void(this.pending = {
            reset: null !== (Oq = null === lq || void 0 === lq ? void 0 : lq.reset) && void 0 !== Oq && Oq,
            inheritOverrides: null === (mq = null === lq || void 0 === lq ? void 0 : lq.inheritOverrides) || void 0 === mq || mq,
            session: uE(uE({}, null === lq || void 0 === lq ? void 0 : lq.session), {}, {
              overrides: uE(uE({}, null === lq || void 0 === lq ? void 0 : lq.session.overrides), qq.overrides)
            })
          });
          const xq = qq.session,
            Aq = Xq(xq) || null != xq && "id" in xq && !xq.id,
            cq = null !== (Eq = null === xq || void 0 === xq ? void 0 : xq.overrides) && void 0 !== Eq ? Eq : null === lq || void 0 === lq ? void 0 : lq.session.overrides;
          this.pending = {
            reset: Aq || !(null === xq || void 0 === xq ? void 0 : xq.id) && null !== (gq = null === lq || void 0 === lq ? void 0 : lq.reset) && void 0 !== gq && gq,
            inheritOverrides: !(!qq.overrides && void 0 !== (null === xq || void 0 === xq ? void 0 : xq.overrides)) && (null === (Yq = null === lq || void 0 === lq ? void 0 : lq.inheritOverrides) || void 0 === Yq || Yq),
            session: {
              id: null === xq || void 0 === xq ? void 0 : xq.id,
              attributes: (null === xq || void 0 === xq ? void 0 : xq.attributes) && uE({}, xq.attributes),
              overrides: qq.overrides ? uE(uE({}, null === lq || void 0 === lq ? void 0 : lq.session.overrides), qq.overrides) : cq && uE({}, cq)
            }
          }
        }, this.activate = () => {
          this.waiting && this.shouldCapture() && (this.destroy(), this.onActivate(this.pending))
        }
      }
      initialize() {
        var qq, Eq;
        this.waiting = !0, JE(this.metas).addSessionUpdateListener(this.recordUpdate), JE(this.metas).addCaptureFilter(this.shouldCapture), this.transports.addBeforeSendHooks(this.discard), document.addEventListener("prerenderingchange", this.activate), null === (qq = (Eq = this.metas).addCaptureListener) || void 0 === qq || qq.call(Eq, this.activate), this.activate()
      }
      destroy() {
        var qq, Eq;
        this.waiting = !1, document.removeEventListener("prerenderingchange", this.activate), JE(this.metas).removeSessionUpdateListener(this.recordUpdate), null === (qq = (Eq = this.metas).removeCaptureListener) || void 0 === qq || qq.call(Eq, this.activate), JE(this.metas).removeCaptureFilter(this.shouldCapture), this.transports.removeBeforeSendHooks(this.discard)
      }
    };

    function RE(qq) {
      return (null === qq || void 0 === qq ? void 0 : qq.persistent) ? pE : GE
    }

    function UE() {}
    let FE = function(qq) {
      return qq[qq.OFF = 0] = "OFF", qq[qq.ERROR = 1] = "ERROR", qq[qq.WARN = 2] = "WARN", qq[qq.INFO = 3] = "INFO", qq[qq.VERBOSE = 4] = "VERBOSE", qq
    }({});
    const sE = {
        debug: UE,
        error: UE,
        info: UE,
        prefix: "Faro",
        warn: UE
      },
      XE = 1;

    function wE(qq) {
      return wE = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(qq) {
        return typeof qq
      } : function(qq) {
        return qq && "function" == typeof Symbol && qq.constructor === Symbol && qq !== Symbol.prototype ? "symbol" : typeof qq
      }, wE(qq)
    }

    function KE(qq) {
      var Eq = function(qq, Eq) {
        if ("object" != wE(qq) || !qq) return qq;
        var gq = qq[Symbol.toPrimitive];
        if (void 0 !== gq) {
          var Yq = gq.call(qq, Eq || "default");
          if ("object" != wE(Yq)) return Yq;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === Eq ? String : Number)(qq)
      }(qq, "string");
      return "symbol" == wE(Eq) ? Eq : Eq + ""
    }

    function CE(qq, Eq, gq) {
      return (Eq = KE(Eq)) in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }

    function IE(qq, Eq) {
      var gq = Object.keys(qq);
      if (Object.getOwnPropertySymbols) {
        var Yq = Object.getOwnPropertySymbols(qq);
        Eq && (Yq = Yq.filter((function(Eq) {
          return Object.getOwnPropertyDescriptor(qq, Eq).enumerable
        }))), gq.push.apply(gq, Yq)
      }
      return gq
    }

    function eE(qq) {
      for (var Eq = 1; Eq < arguments.length; Eq++) {
        var gq = null != arguments[Eq] ? arguments[Eq] : {};
        Eq % 2 ? IE(Object(gq), !0).forEach((function(Eq) {
          CE(qq, Eq, gq[Eq])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(qq, Object.getOwnPropertyDescriptors(gq)) : IE(Object(gq)).forEach((function(Eq) {
          Object.defineProperty(qq, Eq, Object.getOwnPropertyDescriptor(gq, Eq))
        }))
      }
      return qq
    }
    const DE = eE({}, console);
    var qg = class {
        constructor() {
          this.unpatchedConsole = DE, this.internalLogger = sE, this.config = {}, this.metas = {}
        }
        logDebug() {
          for (var qq = arguments.length, Eq = new Array(qq), gq = 0; gq < qq; gq++) Eq[gq] = arguments[gq];
          this.internalLogger.debug(`${this.name}\n`, ...Eq)
        }
        logInfo() {
          for (var qq = arguments.length, Eq = new Array(qq), gq = 0; gq < qq; gq++) Eq[gq] = arguments[gq];
          this.internalLogger.info(`${this.name}\n`, ...Eq)
        }
        logWarn() {
          for (var qq = arguments.length, Eq = new Array(qq), gq = 0; gq < qq; gq++) Eq[gq] = arguments[gq];
          this.internalLogger.warn(`${this.name}\n`, ...Eq)
        }
        logError() {
          for (var qq = arguments.length, Eq = new Array(qq), gq = 0; gq < qq; gq++) Eq[gq] = arguments[gq];
          this.internalLogger.error(`${this.name}\n`, ...Eq)
        }
      },
      Eg = class extends qg {
        constructor() {
          super(...arguments), this.api = {}, this.transports = {}
        }
      };
    const gg = "2.12.1";
    var Yg = class extends Eg {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-session", this.version = gg, this.isAdoptingSession = () => !1
      }
      sendSessionStartEvent(qq) {
        var Eq;
        const gq = qq.session;
        if (gq && gq.id !== (null === (Eq = this.notifiedSession) || void 0 === Eq ? void 0 : Eq.id)) {
          var Yq;
          if (this.isAdoptingSession()) return void(this.notifiedSession = gq);
          if (this.notifiedSession && this.notifiedSession.id === (null === (Yq = gq.attributes) || void 0 === Yq ? void 0 : Yq.previousSession)) return this.api.pushEvent(rE, {}, void 0, {
            skipDedupe: !0
          }), void(this.notifiedSession = gq);
          this.notifiedSession = gq, this.api.pushEvent(yE, {}, void 0, {
            skipDedupe: !0
          })
        }
      }
      createInitialSession(qq, Eq, gq) {
        const Yq = null === gq || void 0 === gq ? void 0 : gq.session;
        let lq, Oq, mq = qq.fetchUserSession();
        if (Eq.persistent && Eq.maxSessionPersistenceTime && mq) {
          const qq = WE();
          mq.lastActivity < qq - Eq.maxSessionPersistenceTime && (pE.removeUserSession(), mq = null)
        }
        const xq = bE(mq);
        if ((null === gq || void 0 === gq ? void 0 : gq.reset) || !xq || (null === Yq || void 0 === Yq ? void 0 : Yq.id) && Yq.id !== (null === mq || void 0 === mq ? void 0 : mq.sessionId)) {
          var Aq, cq, uq, Bq, Wq, Nq;
          Oq = nE({
            sessionId: (null === gq || void 0 === gq ? void 0 : gq.reset) ? void 0 : null !== (Aq = null === Yq || void 0 === Yq ? void 0 : Yq.id) && void 0 !== Aq ? Aq : null === (cq = Eq.session) || void 0 === cq ? void 0 : cq.id,
            isSampled: BE(this)
          }, this);
          const qq = Oq.sessionId,
            aq = gq && xq ? null === mq || void 0 === mq || null === (uq = mq.sessionMeta) || void 0 === uq ? void 0 : uq.overrides : void 0,
            Vq = aq ? uE(uE({}, null === (Bq = Eq.session) || void 0 === Bq ? void 0 : Bq.overrides), aq) : null === (Wq = Eq.session) || void 0 === Wq ? void 0 : Wq.overrides;
          Oq.sessionMeta = uE({
            id: qq,
            attributes: uE({
              isSampled: Oq.isSampled.toString()
            }, null === (Nq = Eq.session) || void 0 === Nq ? void 0 : Nq.attributes)
          }, Vq ? {
            overrides: Vq
          } : {}), lq = yE
        } else {
          var aq, Vq;
          const qq = null === mq || void 0 === mq ? void 0 : mq.sessionId;
          Oq = nE({
            sessionId: qq,
            isSampled: mq.isSampled || !1,
            started: null === mq || void 0 === mq ? void 0 : mq.started
          }, this);
          const gq = null === mq || void 0 === mq ? void 0 : mq.sessionMeta,
            Yq = uE(uE({}, null === (aq = Eq.session) || void 0 === aq ? void 0 : aq.overrides), null === gq || void 0 === gq ? void 0 : gq.overrides);
          Oq.sessionMeta = uE(uE({}, Eq.session), {}, {
            id: qq,
            attributes: uE(uE(uE({}, null === (Vq = Eq.session) || void 0 === Vq ? void 0 : Vq.attributes), null === gq || void 0 === gq ? void 0 : gq.attributes), {}, {
              isSampled: Oq.isSampled.toString()
            }),
            overrides: Yq
          }), lq = tE
        }
        var dq;
        if (Yq && (Oq.sessionMeta = uE(uE({}, Oq.sessionMeta), {}, {
            attributes: uE(uE(uE({}, null === (dq = Oq.sessionMeta) || void 0 === dq ? void 0 : dq.attributes), Yq.attributes), {}, {
              isSampled: Oq.isSampled.toString()
            })
          }), Yq.overrides)) {
          const qq = (null === gq || void 0 === gq ? void 0 : gq.inheritOverrides) ? uE(uE({}, Oq.sessionMeta.overrides), Yq.overrides) : Yq.overrides;
          Object.keys(qq).length > 0 ? Oq.sessionMeta.overrides = qq : delete Oq.sessionMeta.overrides
        }
        return {
          initialSession: Oq,
          lifecycleType: lq
        }
      }
      registerBeforeSendHook(qq) {
        var Eq;
        this.beforeSendHook = Eq => {
          var gq, Yq;
          const lq = null === (gq = Eq.meta.session) || void 0 === gq ? void 0 : gq.id;
          lq && !this.transports.isPaused() && qq(lq);
          const Oq = null === (Yq = Eq.meta.session) || void 0 === Yq ? void 0 : Yq.attributes;
          if (Oq && "true" === (null === Oq || void 0 === Oq ? void 0 : Oq.isSampled)) {
            var mq;
            let qq = JSON.parse(JSON.stringify(Eq));
            const gq = null === (mq = qq.meta.session) || void 0 === mq ? void 0 : mq.attributes;
            var xq;
            if (null === gq || void 0 === gq || delete gq.isSampled, 0 === Object.keys(null !== gq && void 0 !== gq ? gq : {}).length) null === (xq = qq.meta.session) || void 0 === xq || delete xq.attributes;
            return qq
          }
          return null
        }, null === (Eq = this.transports) || void 0 === Eq || Eq.addBeforeSendHooks(this.beforeSendHook)
      }
      initialize() {
        var qq;
        this.logDebug("init session instrumentation");
        const Eq = document.prerendering;
        var gq;
        if ((null === (qq = this.config.sessionTracking) || void 0 === qq ? void 0 : qq.enabled) && (Eq || this.prerenderSession)) return null !== (gq = this.prerenderSession) && void 0 !== gq || (this.prerenderSession = new kE(this.metas, this.transports, (qq => {
          this.prerenderSession = void 0, this.initializeSession(qq)
        }))), void this.prerenderSession.initialize();
        this.initializeSession()
      }
      initializeSession(qq) {
        const Eq = this.config.sessionTracking;
        if (null === Eq || void 0 === Eq ? void 0 : Eq.enabled) {
          var gq, Yq;
          const lq = RE(Eq),
            Oq = new lq(this);
          this.isAdoptingSession = Oq.isAdopting, this.registerBeforeSendHook(Oq.recordActivity);
          const {
            initialSession: mq,
            lifecycleType: xq
          } = this.createInitialSession(lq, Eq, qq);
          lq.storeUserSession(mq);
          const Aq = mq.sessionMeta;
          this.notifiedSession = Aq, this.api.setSession(Aq), this.captureListener = () => {
            this.transports.isPaused() || Oq.updateSession({
              refreshActivity: !1
            })
          }, null === (gq = (Yq = this.metas).addCaptureListener) || void 0 === gq || gq.call(Yq, this.captureListener), xq === yE && this.api.pushEvent(yE, {}, void 0, {
            skipDedupe: !0
          }), xq === tE && this.api.pushEvent(tE, {}, void 0, {
            skipDedupe: !0
          })
        }
        this.sessionStartListener = this.sendSessionStartEvent.bind(this), this.metas.addListener(this.sessionStartListener)
      }
      destroy() {
        var qq, Eq, gq;
        (null === (qq = this.prerenderSession) || void 0 === qq || qq.destroy(), this.captureListener) && (null === (Eq = (gq = this.metas).removeCaptureListener) || void 0 === Eq || Eq.call(gq, this.captureListener), this.captureListener = void 0);
        this.beforeSendHook && (this.transports.removeBeforeSendHooks(this.beforeSendHook), this.beforeSendHook = void 0), this.sessionStartListener && (this.metas.removeListener(this.sessionStartListener), this.sessionStartListener = void 0)
      }
    };

    function lg(qq, Eq, gq, Yq) {
      const lq = {
        filename: qq || document.location.href,
        function: Eq || "?"
      };
      return void 0 !== gq && (lq.lineno = gq), void 0 !== Yq && (lq.colno = Yq), lq
    }
    const Og = /^\s*at (?:(?![a-z]+:\/\/)([^(]+?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      mg = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      xg = /^(?=[\s\S]*?(?:\/|bundle|\.js|\[native code]))\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      Ag = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      cg = "safari-extension",
      ug = "safari-web-extension",
      Bg = /Minified React error #\d+;/i;

    function Wg(qq, Eq) {
      const gq = null === qq || void 0 === qq ? void 0 : qq.includes(cg),
        Yq = !gq && (null === qq || void 0 === qq ? void 0 : qq.includes("safari-web-extension"));
      return gq || Yq ? [(null === qq || void 0 === qq ? void 0 : qq.includes("@")) ? qq.split("@")[0] : qq, gq ? `${cg}:${Eq}` : `${ug}:${Eq}`] : [qq, Eq]
    }
    const Ng = 1024;

    function ag(qq) {
      let Eq = [];
      qq.stacktrace ? Eq = qq.stacktrace.split("\n").filter(((qq, Eq) => Eq % 2 === 0)) : qq.stack && (Eq = qq.stack.split("\n"));
      const gq = Eq.reduce(((Eq, gq, Yq) => {
        if (gq.length > Ng) return Eq;
        let lq, Oq, mq, xq, Aq;
        if (lq = Og.exec(gq)) {
          if (Oq = lq[1], mq = lq[2], xq = lq[3], Aq = lq[4], null === mq || void 0 === mq ? void 0 : mq.startsWith("eval")) {
            const qq = mg.exec(mq);
            qq && (mq = qq[1], xq = qq[2], Aq = qq[3])
          }
          mq = (null === mq || void 0 === mq ? void 0 : mq.startsWith("address at ")) ? mq.substring(11) : mq, [Oq, mq] = Wg(Oq, mq)
        } else if (lq = xg.exec(gq)) {
          if (Oq = lq[1], mq = lq[3], xq = lq[4], Aq = lq[5], mq && mq.includes(" > eval")) {
            const qq = Ag.exec(mq);
            qq && (Oq = Oq || "eval", mq = qq[1], xq = qq[2])
          } else 0 === Yq && !Aq && tq(qq.columnNumber) && (Aq = String(qq.columnNumber + 1));
          [Oq, mq] = Wg(Oq, mq)
        }
        return (mq || Oq) && Eq.push(lg(mq, Oq, xq ? Number(xq) : void 0, Aq ? Number(Aq) : void 0)), Eq
      }), []);
      return Bg.test(qq.message) ? gq.slice(1) : gq
    }

    function Vg(qq) {
      return {
        frames: ag(qq)
      }
    }
    const dg = "http-request-start",
      jg = "http-request-end";
    var Hg = class qq {
      constructor() {
        this.subscribers = []
      }
      subscribe(qq) {
        return this.subscribers.push(qq), {
          unsubscribe: () => this.unsubscribe(qq)
        }
      }
      unsubscribe(qq) {
        this.subscribers = this.subscribers.filter((Eq => Eq !== qq))
      }
      notify(qq) {
        this.subscribers.forEach((Eq => Eq(qq)))
      }
      first() {
        const Eq = new qq,
          gq = qq => {
            Eq.notify(qq), Yq.unsubscribe()
          },
          Yq = this.subscribe(gq),
          lq = Eq.unsubscribe.bind(Eq);
        return this.withUnsubscribeOverride(Eq, lq, gq)
      }
      takeWhile(Eq) {
        const gq = new qq,
          Yq = qq => {
            Eq(qq) ? gq.notify(qq) : gq.unsubscribe(Yq)
          };
        this.subscribe(Yq);
        const lq = gq.unsubscribe.bind(gq);
        return this.withUnsubscribeOverride(gq, lq, Yq)
      }
      filter(Eq) {
        const gq = new qq,
          Yq = qq => {
            Eq(qq) && gq.notify(qq)
          };
        this.subscribe(Yq);
        const lq = gq.unsubscribe.bind(gq);
        return this.withUnsubscribeOverride(gq, lq, Yq)
      }
      merge() {
        const Eq = new qq,
          gq = [];
        for (var Yq = arguments.length, lq = new Array(Yq), Oq = 0; Oq < Yq; Oq++) lq[Oq] = arguments[Oq];
        lq.forEach((qq => {
          const Yq = qq.subscribe((qq => {
            Eq.notify(qq)
          }));
          gq.push(Yq)
        }));
        const mq = Eq.unsubscribeAll.bind(Eq);
        return Eq.unsubscribe = () => {
          gq.forEach((qq => qq.unsubscribe())), mq()
        }, Eq
      }
      withUnsubscribeOverride(qq, Eq, gq) {
        return qq.unsubscribe = qq => {
          Eq(qq), this.unsubscribe(gq)
        }, qq
      }
      unsubscribeAll() {
        this.subscribers = []
      }
    };
    let og = function(qq) {
      return qq.TRACE = "trace", qq.DEBUG = "debug", qq.INFO = "info", qq.LOG = "log", qq.WARN = "warn", qq.ERROR = "error", qq
    }({});
    const Pg = "log",
      Qg = ["trace", "debug", "info", "log", "warn", "error"];
    let yg, tg = !1;
    const rg = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
      vg = "Error",
      hg = qq => qq.map((qq => nq(qq) ? zE(qq) : String(qq))).join(" ");

    function ng(qq) {
      let Eq, gq, Yq, lq, Oq = [];
      if (Gq(qq) && qq.error) Eq = qq.error.message, gq = qq.error.name, Oq = ag(qq.error);
      else if ((Yq = Lq(qq)) || Jq(qq)) {
        const {
          name: lq,
          message: Oq
        } = qq;
        gq = null !== lq && void 0 !== lq ? lq : Yq ? "DOMError" : "DOMException", Eq = Oq ? `${gq}: ${Oq}` : gq
      } else pq(qq) ? (gq = qq.name, Eq = qq.message, Oq = ag(qq)) : (nq(qq) || (lq = zq(qq))) && (gq = lq ? qq.constructor.name : void 0, Eq = `Non-Error exception captured with keys: ${Object.keys(qq)}`);
      return [Eq, gq, Oq]
    }

    function bg(qq) {
      const [Eq, gq, Yq, lq, Oq] = qq;
      let mq, xq, Aq = [];
      const cq = yq(Eq),
        uq = lg(gq, "?", Yq, lq);
      return Oq || !cq ? ([mq, xq, Aq] = ng(null !== Oq && void 0 !== Oq ? Oq : Eq), 0 === Aq.length && (Aq = [uq])) : cq && ([mq, xq] = function(qq) {
        var Eq, gq;
        const Yq = qq.match(rg),
          lq = null !== (Eq = null === Yq || void 0 === Yq ? void 0 : Yq[1]) && void 0 !== Eq ? Eq : vg;
        return [null !== (gq = null === Yq || void 0 === Yq ? void 0 : Yq[2]) && void 0 !== gq ? gq : qq, lq]
      }(Eq), Aq = [uq]), {
        value: mq,
        type: xq,
        stackFrames: Aq
      }
    }

    function ig(qq, Eq) {
      return pq(qq[0]) ? bg(qq) : {
        value: Eq(qq)
      }
    }
    const Zg = qq => qq.map((qq => {
      try {
        return String(qq)
      } catch (Eq) {
        return ""
      }
    })).join(" ");
    var fg = class qq extends Eg {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-console", this.version = gg, this.errorSerializer = Zg
      }
      initialize() {
        var Eq, gq;
        const Yq = this.config.consoleInstrumentation,
          lq = (null === Yq || void 0 === Yq ? void 0 : Yq.serializeErrors) || !!(null === Yq || void 0 === Yq ? void 0 : Yq.errorSerializer);
        this.errorSerializer = lq ? null !== (Eq = null === Yq || void 0 === Yq ? void 0 : Yq.errorSerializer) && void 0 !== Eq ? Eq : hg : Zg;
        const Oq = null !== (gq = null === Yq || void 0 === Yq ? void 0 : Yq.disabledLevels) && void 0 !== gq ? gq : qq.defaultDisabledLevels,
          mq = function(qq) {
            if (yg || (yg = new Hg), !tg) {
              const Eq = null !== qq && void 0 !== qq ? qq : DE;
              Qg.forEach((qq => {
                console[qq] = function() {
                  for (var gq, Yq = arguments.length, lq = new Array(Yq), Oq = 0; Oq < Yq; Oq++) lq[Oq] = arguments[Oq];
                  yg.notify({
                    type: "console",
                    level: qq,
                    args: lq
                  }), null === (gq = Eq[qq]) || void 0 === gq || gq.apply(console, lq)
                }
              })), tg = !0
            }
            return yg
          }(this.unpatchedConsole);
        this.subscription = mq.subscribe((Eq => {
          let {
            level: gq,
            args: lq
          } = Eq;
          if (!Oq.includes(gq)) try {
            if (gq !== og.ERROR || (null === Yq || void 0 === Yq ? void 0 : Yq.consoleErrorAsLog))
              if (gq === og.ERROR && (null === Yq || void 0 === Yq ? void 0 : Yq.consoleErrorAsLog)) {
                const {
                  value: Eq,
                  type: Yq,
                  stackFrames: Oq
                } = ig(lq, this.errorSerializer);
                this.api.pushLog(Eq ? [qq.consoleErrorPrefix + Eq] : lq, {
                  level: gq,
                  context: {
                    value: null !== Eq && void 0 !== Eq ? Eq : "",
                    type: null !== Yq && void 0 !== Yq ? Yq : "",
                    stackFrames: (null === Oq || void 0 === Oq ? void 0 : Oq.length) ? hg(Oq) : ""
                  }
                })
              } else this.api.pushLog(lq, {
                level: gq
              });
            else {
              const {
                value: Eq,
                type: gq,
                stackFrames: Yq
              } = ig(lq, this.errorSerializer);
              if (Eq && !gq && !Yq) return void this.api.pushError(new Error(qq.consoleErrorPrefix + Eq));
              this.api.pushError(new Error(qq.consoleErrorPrefix + Eq), {
                type: gq,
                stackFrames: Yq
              })
            }
          } catch (mq) {
            this.logError(mq)
          }
        }))
      }
      destroy() {
        var qq;
        null === (qq = this.subscription) || void 0 === qq || qq.unsubscribe(), this.subscription = void 0
      }
    };
    fg.defaultDisabledLevels = [og.DEBUG, og.TRACE, og.LOG], fg.consoleErrorPrefix = "console.error: ";
    const Mg = [];
    var Tg = class extends Eg {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-errors", this.version = gg
      }
      initialize() {
        this.logDebug("Initializing"),
          function(qq) {
            const Eq = window.onerror;
            window.onerror = function() {
              for (var gq = arguments.length, Yq = new Array(gq), lq = 0; lq < gq; lq++) Yq[lq] = arguments[lq];
              try {
                const {
                  value: Eq,
                  type: gq,
                  stackFrames: lq
                } = bg(Yq), Oq = Yq[4];
                if (Eq) {
                  const Yq = {
                    type: gq,
                    stackFrames: lq
                  };
                  null != Oq && (Yq.originalError = Oq), qq.pushError(new Error(Eq), Yq)
                }
              } finally {
                null === Eq || void 0 === Eq || Eq.apply(window, Yq)
              }
            }
          }(this.api),
          function(qq) {
            const Eq = Eq => {
              var gq;
              let Yq, lq, Oq = Eq;
              if (Oq.reason) Oq = Eq.reason;
              else if (null === (gq = Eq.detail) || void 0 === gq ? void 0 : gq.reason) {
                var mq;
                Oq = null === (mq = Eq.detail) || void 0 === mq ? void 0 : mq.reason
              }
              let xq = [];
              Mq(Oq) ? (Yq = `Non-Error promise rejection captured with value: ${String(Oq)}`, lq = "UnhandledRejection") : [Yq, lq, xq] = ng(Oq), Yq && qq.pushError(new Error(Yq), {
                type: lq,
                stackFrames: xq
              })
            };
            window.addEventListener("unhandledrejection", Eq), Mg.push(Eq)
          }(this.api)
      }
    };
    const zg = "unknown";
    var Sg = class extends Eg {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-view", this.version = gg, this.waitingForActivation = !1, this.sendViewChangedEvent = qq => {
          var Eq;
          if (this.waitingForActivation || document.prerendering) return;
          const gq = qq.view;
          if (gq && gq.name !== (null === (Eq = this.notifiedView) || void 0 === Eq ? void 0 : Eq.name)) {
            var Yq, lq, Oq;
            const qq = null !== (Yq = null === (lq = this.notifiedView) || void 0 === lq ? void 0 : lq.name) && void 0 !== Yq ? Yq : zg;
            this.notifiedView = gq, this.api.pushEvent(QE, {
              fromView: qq,
              toView: null !== (Oq = gq.name) && void 0 !== Oq ? Oq : zg
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
    class pg {
      t;
      o = 0;
      i = [];
      l(qq) {
        if (qq.hadRecentInput) return;
        const Eq = this.i[0],
          gq = this.i.at(-1);
        this.o && Eq && gq && qq.startTime - gq.startTime < 1e3 && qq.startTime - Eq.startTime < 5e3 ? (this.o += qq.value, this.i.push(qq)) : (this.o = qq.value, this.i = [qq]), this.t?.(qq)
      }
    }
    const Gg = () => {
        const qq = performance.getEntriesByType("navigation")[0];
        if (qq && qq.responseStart > 0 && qq.responseStart < performance.now()) return qq
      },
      Lg = qq => {
        if ("loading" === document.readyState) return "loading";
        const Eq = Gg();
        if (Eq) {
          if (qq < Eq.domInteractive) return "loading";
          if (0 === Eq.domContentLoadedEventStart || qq < Eq.domContentLoadedEventStart) return "dom-interactive";
          if (0 === Eq.domComplete || qq < Eq.domComplete) return "dom-content-loaded"
        }
        return "complete"
      },
      Jg = qq => {
        const Eq = qq.nodeName;
        return 1 === qq.nodeType ? Eq.toLowerCase() : Eq.toUpperCase().replace(/^#/, "")
      },
      kg = qq => {
        let Eq = "";
        try {
          for (; 9 !== qq?.nodeType;) {
            const gq = qq,
              Yq = gq.id ? "#" + gq.id : [Jg(gq), ...Array.from(gq.classList ?? []).sort()].join(".");
            if (Eq.length + Yq.length > 99) return Eq || Yq;
            if (Eq = Eq ? Yq + ">" + Eq : Yq, gq.id) break;
            qq = gq.parentNode
          }
        } catch {}
        return Eq
      },
      Rg = new WeakMap;

    function Ug(qq, Eq) {
      let gq = Rg.get(Eq);
      return gq || (gq = new WeakMap, Rg.set(Eq, gq)), gq.get(qq) || gq.set(qq, new Eq), gq.get(qq)
    }
    let Fg = -1;
    const sg = () => Fg,
      Xg = qq => {
        addEventListener("pageshow", (Eq => {
          Eq.persisted && (Fg = Eq.timeStamp, qq(Eq))
        }), !0)
      },
      wg = (qq, Eq, gq, Yq) => {
        let lq, Oq;
        return mq => {
          Eq.value >= 0 && (mq || Yq) && (Oq = Eq.value - (lq ?? 0), (Oq || void 0 === lq) && (lq = Eq.value, Eq.delta = Oq, Eq.rating = ((qq, Eq) => qq > Eq[1] ? "poor" : qq > Eq[0] ? "needs-improvement" : "good")(Eq.value, gq), qq(Eq)))
        }
      },
      Kg = qq => {
        requestAnimationFrame((() => requestAnimationFrame((() => qq()))))
      },
      Cg = () => Gg()?.activationStart ?? 0;
    let Ig = -1;
    const eg = new Set,
      Dg = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
      qY = qq => {
        if ("hidden" === document.visibilityState) {
          if ("visibilitychange" === qq.type)
            for (const qq of eg) qq();
          isFinite(Ig) || (Ig = "visibilitychange" === qq.type ? qq.timeStamp : 0, removeEventListener("prerenderingchange", qY, !0))
        }
      },
      EY = function() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (Ig = 1 / 0), Ig < 0) {
          const qq = Cg(),
            Eq = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find((Eq => "hidden" === Eq.name && Eq.startTime >= qq))?.startTime;
          Ig = Eq ?? Dg(), addEventListener("visibilitychange", qY, !0), addEventListener("prerenderingchange", qY, !0), Xg((() => {
            setTimeout((() => {
              Ig = Dg()
            }))
          }))
        }
        return {
          get firstHiddenTime() {
            return Ig
          },
          onHidden(qq) {
            eg.add(qq)
          }
        }
      },
      gY = function(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          gq = arguments.length > 2 ? arguments[2] : void 0,
          Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          lq = arguments.length > 4 ? arguments[4] : void 0,
          Oq = arguments.length > 5 ? arguments[5] : void 0,
          mq = arguments.length > 6 ? arguments[6] : void 0;
        const xq = Gg(),
          Aq = xq?.navigationId || 0;
        let cq = "navigate";
        return gq ? cq = gq : sg() >= 0 ? cq = "back-forward-cache" : xq && (document.prerendering || Cg() > 0 ? cq = "prerender" : document.wasDiscarded ? cq = "restore" : xq.type && (cq = xq.type.replace(/_/g, "-"))), {
          name: qq,
          value: Eq,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
          navigationType: cq,
          navigationId: Yq || Aq,
          navigationInteractionId: lq,
          navigationURL: Oq || xq?.name,
          navigationStartTime: mq || 0
        }
      },
      YY = function(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          const Yq = qq.filter((qq => PerformanceObserver.supportedEntryTypes.includes(qq)));
          if (Yq.length > 0) {
            const qq = new PerformanceObserver((qq => {
              queueMicrotask((() => {
                const gq = qq.getEntries();
                Yq.length > 1 && gq.sort(((qq, Eq) => qq.startTime + qq.duration - (Eq.startTime + Eq.duration))), Eq(gq)
              }))
            }));
            for (const Eq of Yq) qq.observe({
              type: Eq,
              buffered: !0,
              ...gq
            });
            return qq
          }
        } catch {}
      },
      lY = qq => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && qq && qq.reportSoftNavs,
      OY = (qq, Eq) => {
        if (qq.set(Eq.navigationId, Eq), qq.size > 2) {
          const Eq = qq.keys().next().value;
          void 0 !== Eq && qq.delete(Eq)
        }
      },
      mY = qq => {
        let Eq = !1;
        return () => {
          Eq || (qq(), Eq = !0)
        }
      };
    class xY {
      u
    }
    const AY = qq => {
        document.prerendering ? addEventListener("prerenderingchange", qq, !0) : qq()
      },
      cY = [1800, 3e3],
      uY = function(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const gq = lY(Eq);
        AY((() => {
          const Yq = Ug(Eq, xY),
            lq = EY();
          let Oq, mq = gY("FCP");
          const xq = YY(["paint"], (qq => {
            for (const Eq of qq) "first-contentful-paint" === Eq.name && (xq.disconnect(), Eq.startTime < lq.firstHiddenTime && (mq.value = Math.max(Eq.startTime - Cg(), 0), mq.entries.push(Eq), mq.navigationId = Eq.navigationId || mq.navigationId, Oq(!0)))
          }));
          xq && (Oq = wg(qq, mq, cY, Eq.reportAllChanges), Xg((gq => {
            mq = gY("FCP", -1, "back-forward-cache", mq.navigationId, mq.navigationInteractionId, mq.navigationURL, sg()), Oq = wg(qq, mq, cY, Eq.reportAllChanges), Kg((() => {
              mq.value = performance.now() - gq.timeStamp, Oq(!0)
            }))
          }))), gq && YY(["soft-navigation"], (gq => {
            gq.forEach((gq => {
              Yq.u && gq.navigationId && OY(Yq.u, gq);
              const lq = Math.max((gq.presentationTime || gq.paintTime || 0) - gq.startTime, 0);
              mq = gY("FCP", lq, "soft-navigation", gq.navigationId, gq.interactionId, gq.name, gq.startTime), Oq = wg(qq, mq, cY, Eq.reportAllChanges), Oq(!0)
            }))
          }), Eq)
        }))
      },
      BY = [.1, .25],
      WY = qq => qq.find((qq => 1 === qq.node?.nodeType)) || qq[0];
    let NY = 0,
      aY = 1 / 0,
      VY = 0;
    const dY = qq => {
      for (const Eq of qq) Eq.interactionId && (aY = Math.min(aY, Eq.interactionId), VY = Math.max(VY, Eq.interactionId), NY = VY ? (VY - aY) / 7 + 1 : 0)
    };
    let jY;
    const HY = () => jY ? NY : performance.interactionCount ?? 0;
    class oY {
      h = 0;
      v = [];
      p = new Map;
      m;
      M;
      T() {
        return HY() - this.h
      }
      D() {
        this.h = HY(), this.v.length = 0, this.p.clear()
      }
      S(qq) {
        const Eq = this.T(),
          gq = Math.min(this.v.length - 1, Math.floor(Eq / 50));
        return !Eq || -1 !== gq || "soft-navigation" !== qq && "back-forward-cache" !== qq ? this.v[gq] : {
          k: 8,
          id: -1,
          entries: []
        }
      }
      l(qq) {
        if (this.m?.(qq), !qq.interactionId) return;
        const Eq = this.v.at(-1);
        let gq = this.p.get(qq.interactionId);
        if (gq || this.v.length < 10 || qq.duration > Eq.k) {
          if (gq ? qq.duration > gq.k ? (gq.entries = [qq], gq.k = qq.duration) : qq.duration === gq.k && qq.startTime === gq.entries[0].startTime && gq.entries.push(qq) : (gq = {
              id: qq.interactionId,
              entries: [qq],
              k: qq.duration
            }, this.p.set(gq.id, gq), this.v.push(gq)), this.v.sort(((qq, Eq) => Eq.k - qq.k)), this.v.length > 10) {
            const qq = this.v.splice(10);
            for (const Eq of qq) this.p.delete(Eq.id)
          }
          this.M?.(gq)
        }
      }
    }
    const PY = qq => {
        const Eq = "requestIdleCallback" in globalThis ? 1e3 : 0,
          gq = globalThis.requestIdleCallback || setTimeout,
          Yq = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) qq();
        else {
          const lq = mY(qq);
          let Oq = -1;
          const mq = () => {
            Yq(Oq), lq()
          };
          addEventListener("visibilitychange", mq, {
            once: !0,
            capture: !0
          }), Oq = gq((() => {
            removeEventListener("visibilitychange", mq, {
              capture: !0
            }), lq()
          }), {
            timeout: Eq
          })
        }
      },
      QY = [200, 500],
      yY = function(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const gq = Ug(Eq = Object.assign({}, Eq), oY);
        let Yq = [],
          lq = [],
          Oq = 0;
        const mq = new WeakMap,
          xq = new WeakMap;
        let Aq = !1;
        const cq = () => {
            Aq || (Aq = !0, PY(uq))
          },
          uq = () => {
            const qq = new Set(gq.v.map((qq => mq.get(qq.entries[0])))),
              Eq = lq.length - 10;
            lq = lq.filter(((gq, Yq) => Yq >= Eq || qq.has(gq)));
            const xq = new Set;
            for (const gq of lq) {
              const qq = Bq(gq.startTime, gq.processingEnd);
              for (const Eq of qq) xq.add(Eq)
            }
            const cq = Yq.length - 10;
            Yq = Yq.filter(((qq, Eq) => xq.has(qq) || Eq >= cq && qq.startTime > Oq)), Aq = !1
          };
        gq.m = qq => {
          const gq = qq.startTime + qq.duration;
          let Yq;
          Oq = Math.max(Oq, qq.processingEnd);
          for (let Oq = lq.length - 1; Oq >= 0; Oq--) {
            const mq = lq[Oq];
            if (Math.abs(gq - mq.renderTime) <= 8) {
              Yq = mq, Yq.startTime = Math.min(qq.startTime, Yq.startTime), Yq.processingStart = Math.min(qq.processingStart, Yq.processingStart), Yq.processingEnd = Math.max(qq.processingEnd, Yq.processingEnd), Eq.includeProcessedEventEntries && Yq.entries.push(qq);
              break
            }
          }
          Yq || (Yq = {
            startTime: qq.startTime,
            processingStart: qq.processingStart,
            processingEnd: qq.processingEnd,
            renderTime: gq,
            entries: Eq.includeProcessedEventEntries ? [qq] : []
          }, lq.push(Yq)), qq.interactionId && mq.set(qq, Yq), cq()
        }, gq.M = qq => {
          if (!xq.get(qq)) {
            const gq = qq.entries.find((qq => qq.target))?.target;
            if (gq) {
              const Yq = Eq.generateTarget?.(gq) ?? kg(gq);
              xq.set(qq, Yq)
            } else {
              const Eq = qq.entries.find((qq => qq.targetSelector))?.targetSelector;
              Eq && xq.set(qq, Eq)
            }
          }
        };
        const Bq = (qq, Eq) => {
          const gq = [];
          for (const lq of Yq)
            if (!(lq.startTime + lq.duration < qq)) {
              if (lq.startTime > Eq) break;
              gq.push(lq)
            } return gq
        };
        YY(["long-animation-frame"], (qq => {
            Yq = Yq.concat(qq), cq()
          }), Eq),
          function(qq) {
            let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
            const gq = EY();
            AY((() => {
              "interactionCount" in performance || jY || (jY = YY(["event"], dY, {
                durationThreshold: 0
              }));
              let Yq, lq = gY("INP");
              const Oq = Ug(Eq, oY),
                mq = (gq, mq, xq, Aq, cq) => {
                  Oq.D(), lq = gY("INP", -1, gq, mq, xq, Aq, cq), Yq = wg(qq, lq, QY, Eq.reportAllChanges)
                },
                xq = () => {
                  const qq = Oq.S(lq.navigationType);
                  qq && qq.k !== lq.value && (lq.value = qq.k, lq.entries = qq.entries, Yq())
                },
                Aq = qq => {
                  xq(), Yq(!0), mq("soft-navigation", qq.navigationId, qq.interactionId, qq.name, qq.startTime)
                },
                cq = function(qq) {
                  let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  PY((() => {
                    for (const Eq of qq) "soft-navigation" !== Eq.entryType ? Oq.l(Eq) : Aq(Eq);
                    xq(), Eq && Yq(!0)
                  }))
                },
                uq = ["event", "first-input"];
              lY(Eq) && uq.push("soft-navigation");
              const Bq = YY(uq, cq, {
                ...Eq,
                durationThreshold: Eq.durationThreshold ?? 40
              });
              Yq = wg(qq, lq, QY, Eq.reportAllChanges), Bq && (gq.onHidden((() => {
                cq(Bq.takeRecords(), !0)
              })), Xg((() => {
                mq("back-forward-cache", lq.navigationId, lq.navigationInteractionId, lq.navigationURL, sg())
              })))
            }))
          }((Eq => {
            qq((qq => {
              if (0 === qq.entries.length) {
                const Eq = qq.navigationStartTime || 0,
                  gq = {
                    processedEventEntries: [],
                    longAnimationFrameEntries: [],
                    inputDelay: 0,
                    processingDuration: 0,
                    presentationDelay: qq.value,
                    loadState: Lg(Eq)
                  };
                return Object.assign(qq, {
                  attribution: gq
                })
              }
              const Eq = qq.entries[0],
                Yq = mq.get(Eq),
                lq = Math.max(Yq.processingStart, Eq.startTime),
                Oq = Math.max(Eq.startTime + Eq.duration, lq),
                Aq = Math.min(Yq.processingEnd, Oq),
                cq = Yq.entries.sort(((qq, Eq) => qq.processingStart - Eq.processingStart)),
                uq = Bq(Eq.startTime, Aq),
                Wq = gq.p.get(Eq.interactionId),
                Nq = {
                  interactionTarget: xq.get(Wq),
                  interactionType: Eq.name.startsWith("key") ? "keyboard" : "pointer",
                  interactionTime: Eq.startTime,
                  nextPaintTime: Oq,
                  processedEventEntries: cq,
                  longAnimationFrameEntries: uq,
                  inputDelay: lq - Eq.startTime,
                  processingDuration: Aq - lq,
                  presentationDelay: Oq - Aq,
                  loadState: Lg(Eq.startTime),
                  longestScript: void 0,
                  totalScriptDuration: void 0,
                  totalStyleAndLayoutDuration: void 0,
                  totalPaintDuration: void 0,
                  totalUnattributedDuration: void 0
                };
              return (qq => {
                const Eq = qq.interactionTime,
                  gq = qq.nextPaintTime;
                if (!qq.longAnimationFrameEntries?.length || !Eq || !gq) return;
                const Yq = qq.inputDelay,
                  lq = qq.processingDuration;
                let Oq, mq, xq = 0,
                  Aq = 0,
                  cq = 0,
                  uq = 0;
                for (const Nq of qq.longAnimationFrameEntries) {
                  Aq = Aq + Nq.startTime + Nq.duration - Nq.styleAndLayoutStart;
                  for (const qq of Nq.scripts) {
                    const gq = qq.startTime + qq.duration;
                    if (gq < Eq) continue;
                    const cq = gq - Math.max(Eq, qq.startTime),
                      Bq = qq.duration ? cq / qq.duration * qq.forcedStyleAndLayoutDuration : 0;
                    xq += cq - Bq, Aq += Bq, cq > uq && (mq = qq.startTime < Eq + Yq ? "input-delay" : qq.startTime >= Eq + Yq + lq ? "presentation-delay" : "processing-duration", Oq = qq, uq = cq)
                  }
                }
                const Bq = qq.longAnimationFrameEntries.at(-1),
                  Wq = Bq ? Bq.startTime + Bq.duration : 0;
                Wq >= Eq + Yq + lq && (cq = gq - Wq), Oq && mq && (qq.longestScript = {
                  entry: Oq,
                  subpart: mq,
                  intersectingDuration: uq
                }), qq.totalScriptDuration = xq, qq.totalStyleAndLayoutDuration = Aq, qq.totalPaintDuration = cq, qq.totalUnattributedDuration = gq - Eq - xq - Aq - cq
              })(Nq), Object.assign(qq, {
                attribution: Nq
              })
            })(Eq))
          }), Eq)
      };
    class tY {
      m;
      u;
      l(qq) {
        this.m?.(qq)
      }
    }
    const rY = [2500, 4e3];
    let vY = 50;
    const hY = [];
    YY(["resource"], (qq => {
      for (const Eq of qq) hY.push(Eq), hY.length > vY && hY.shift()
    }));
    const nY = [800, 1800],
      bY = qq => {
        document.prerendering ? AY((() => bY(qq))) : "complete" !== document.readyState ? addEventListener("load", (() => bY(qq)), !0) : setTimeout(qq)
      },
      iY = "load_state",
      ZY = "time_to_first_byte";
    var fY = class {
        constructor(qq, Eq) {
          this.corePushMeasurement = qq, this.webVitalConfig = Eq
        }
        initialize() {
          this.measureCLS(), this.measureFCP(), this.measureINP(), this.measureLCP(), this.measureTTFB()
        }
        measureCLS() {
          var qq;
          ! function(qq) {
            let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const gq = Ug(Eq = Object.assign({}, Eq), pg),
              Yq = new WeakMap;
            gq.t = qq => {
                if (qq?.sources?.length) {
                  const gq = WY(qq.sources),
                    lq = gq?.node;
                  if (lq) {
                    const qq = Eq.generateTarget?.(lq) ?? kg(lq);
                    Yq.set(gq, qq)
                  }
                }
              },
              function(qq) {
                let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const gq = EY();
                uY(mY((() => {
                  let Yq, lq = gY("CLS", 0);
                  const Oq = Ug(Eq, pg),
                    mq = (gq, mq, xq, Aq, cq) => {
                      lq = gY("CLS", 0, gq, mq, xq, Aq, cq), Oq.o = 0, Yq = wg(qq, lq, BY, Eq.reportAllChanges)
                    },
                    xq = function() {
                      let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      Oq.o > lq.value && (lq.value = Oq.o, lq.entries = Oq.i), Yq(qq)
                    },
                    Aq = qq => {
                      xq(!0), mq("soft-navigation", qq.navigationId, qq.interactionId, qq.name, qq.startTime)
                    },
                    cq = qq => {
                      for (const Eq of qq) "soft-navigation" !== Eq.entryType ? Oq.l(Eq) : Aq(Eq);
                      xq()
                    },
                    uq = ["layout-shift"];
                  lY(Eq) && uq.push("soft-navigation");
                  const Bq = YY(uq, cq);
                  Bq && (Yq = wg(qq, lq, BY, Eq.reportAllChanges), gq.onHidden((() => {
                    cq(Bq.takeRecords()), Yq(!0)
                  })), Xg((() => {
                    mq("back-forward-cache", lq.navigationId, lq.navigationInteractionId, lq.navigationURL, sg()), Kg(Yq)
                  })), setTimeout(Yq))
                })))
              }((Eq => {
                qq((qq => {
                  let Eq = {};
                  if (qq.entries.length) {
                    const gq = qq.entries.reduce(((qq, Eq) => qq.value > Eq.value ? qq : Eq));
                    if (gq?.sources?.length) {
                      const qq = WY(gq.sources);
                      qq && (Eq = {
                        largestShiftTarget: Yq.get(qq),
                        largestShiftTime: gq.startTime,
                        largestShiftValue: gq.value,
                        largestShiftSource: qq,
                        largestShiftEntry: gq,
                        loadState: Lg(gq.startTime)
                      })
                    }
                  }
                  return Object.assign(qq, {
                    attribution: Eq
                  })
                })(Eq))
              }), Eq)
          }((qq => {
            const {
              loadState: Eq,
              largestShiftValue: gq,
              largestShiftTime: Yq,
              largestShiftTarget: lq
            } = qq.attribution, Oq = this.buildInitialValues(qq);
            this.addIfPresent(Oq, "largest_shift_value", gq), this.addIfPresent(Oq, "largest_shift_time", Yq);
            const mq = this.buildInitialContext(qq);
            this.addIfPresent(mq, iY, Eq), this.addIfPresent(mq, "largest_shift_target", lq), this.pushMeasurement(Oq, mq)
          }), {
            reportAllChanges: null === (qq = this.webVitalConfig) || void 0 === qq ? void 0 : qq.reportAllChanges
          })
        }
        measureFCP() {
          var qq;
          ! function(qq) {
            let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const gq = Ug(Eq = Object.assign({}, Eq), xY);
            lY(Eq) && (gq.u = new Map), uY((Eq => {
              qq((qq => {
                let Eq = {
                  timeToFirstByte: 0,
                  firstByteToFCP: qq.value,
                  loadState: Lg(sg())
                };
                if ("soft-navigation" !== qq.navigationType) {
                  if (qq.entries.length) {
                    const gq = Gg(),
                      Yq = qq.entries.at(-1);
                    if (gq) {
                      const lq = gq.responseStart,
                        Oq = gq.activationStart || 0,
                        mq = Math.max(0, lq - Oq);
                      Eq = {
                        timeToFirstByte: mq,
                        firstByteToFCP: qq.value - mq,
                        loadState: Lg(qq.entries[0].startTime),
                        navigationEntry: gq,
                        fcpEntry: Yq
                      }
                    }
                  }
                } else {
                  const Yq = gq.u?.get(qq.navigationId);
                  Yq && (Eq = {
                    timeToFirstByte: 0,
                    firstByteToFCP: qq.value,
                    loadState: "complete",
                    navigationEntry: Yq
                  })
                }
                return Object.assign(qq, {
                  attribution: Eq
                })
              })(Eq))
            }), Eq)
          }((qq => {
            const {
              firstByteToFCP: Eq,
              timeToFirstByte: gq,
              loadState: Yq
            } = qq.attribution, lq = this.buildInitialValues(qq);
            this.addIfPresent(lq, "first_byte_to_fcp", Eq), this.addIfPresent(lq, ZY, gq);
            const Oq = this.buildInitialContext(qq);
            this.addIfPresent(Oq, iY, Yq), this.pushMeasurement(lq, Oq)
          }), {
            reportAllChanges: null === (qq = this.webVitalConfig) || void 0 === qq ? void 0 : qq.reportAllChanges
          })
        }
        measureINP() {
          var qq;
          yY((qq => {
            var Eq;
            const {
              interactionTime: gq,
              presentationDelay: Yq,
              inputDelay: lq,
              processingDuration: Oq,
              nextPaintTime: mq,
              loadState: xq,
              interactionTarget: Aq,
              interactionType: cq,
              totalScriptDuration: uq,
              totalStyleAndLayoutDuration: Bq,
              totalPaintDuration: Wq,
              totalUnattributedDuration: Nq,
              longestScript: aq
            } = qq.attribution, Vq = this.buildInitialValues(qq);
            this.addIfPresent(Vq, "interaction_time", gq), this.addIfPresent(Vq, "presentation_delay", Yq), this.addIfPresent(Vq, "input_delay", lq), this.addIfPresent(Vq, "processing_duration", Oq), this.addIfPresent(Vq, "next_paint_time", mq), this.addNumberIfDefined(Vq, "total_script_duration", uq), this.addNumberIfDefined(Vq, "total_style_and_layout_duration", Bq), this.addNumberIfDefined(Vq, "total_paint_duration", Wq), this.addNumberIfDefined(Vq, "total_unattributed_duration", Nq), this.addNumberIfDefined(Vq, "longest_script_intersecting_duration", null === aq || void 0 === aq ? void 0 : aq.intersectingDuration);
            const dq = this.buildInitialContext(qq);
            this.addIfPresent(dq, iY, xq), this.addIfPresent(dq, "interaction_target", Aq), this.addIfPresent(dq, "interaction_type", cq), this.addIfPresent(dq, "longest_script_subpart", null === aq || void 0 === aq ? void 0 : aq.subpart), this.addIfPresent(dq, "longest_script_invoker_type", null === aq || void 0 === aq ? void 0 : aq.entry.invokerType), (null === (Eq = this.webVitalConfig) || void 0 === Eq ? void 0 : Eq.trackAttributionSources) && (this.addIfPresent(dq, "longest_script_invoker", null === aq || void 0 === aq ? void 0 : aq.entry.invoker), this.addIfPresent(dq, "longest_script_source_url", null === aq || void 0 === aq ? void 0 : aq.entry.sourceURL), this.addIfPresent(dq, "longest_script_source_function_name", null === aq || void 0 === aq ? void 0 : aq.entry.sourceFunctionName), this.addIfPresent(dq, "longest_script_source_char_position", void 0 !== (null === aq || void 0 === aq ? void 0 : aq.entry.sourceCharPosition) ? String(aq.entry.sourceCharPosition) : void 0)), this.pushMeasurement(Vq, dq)
          }), {
            reportAllChanges: null === (qq = this.webVitalConfig) || void 0 === qq ? void 0 : qq.reportAllChanges
          })
        }
        measureLCP() {
          var qq;
          ! function(qq) {
            let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            null != (Eq = Object.assign({}, Eq)).resourceBufferSize && (vY = Eq.resourceBufferSize);
            const gq = Ug(Eq, tY),
              Yq = new WeakMap;
            lY(Eq) && (gq.u = new Map), gq.m = qq => {
                const gq = qq.element;
                if (gq) {
                  const lq = Eq.generateTarget?.(gq) ?? kg(gq);
                  Yq.set(qq, lq)
                } else qq.id && Yq.set(qq, `#${qq.id}`)
              },
              function(qq) {
                let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  gq = !1;
                const Yq = lY(Eq);
                AY((() => {
                  let lq, Oq = EY(),
                    mq = gY("LCP");
                  const xq = Ug(Eq, tY),
                    Aq = (Yq, xq, Aq, cq, uq) => {
                      mq = gY("LCP", -1, Yq, xq, Aq, cq, uq), lq = wg(qq, mq, rY, Eq.reportAllChanges), gq = !1, "soft-navigation" === Yq && (Oq = EY(!0))
                    },
                    cq = qq => {
                      xq.u && qq.navigationId && OY(xq.u, qq), gq || lq(!0), Aq("soft-navigation", qq.navigationId, qq.interactionId, qq.name, qq.startTime);
                      const Eq = qq.getLargestInteractionContentfulPaint?.();
                      Eq && uq([Eq])
                    },
                    uq = qq => {
                      Eq.reportAllChanges || Yq || (qq = qq.slice(-1));
                      for (const Eq of qq) {
                        if (!Eq) continue;
                        if ("soft-navigation" === Eq.entryType) {
                          cq(Eq);
                          continue
                        }
                        let qq = 0,
                          gq = [],
                          Yq = Eq.startTime;
                        if ("largest-contentful-paint" === Eq.entryType) qq = Math.max(Eq.startTime - Cg(), 0), xq.l(Eq), gq = [Eq];
                        else if ("interaction-contentful-paint" === Eq.entryType) {
                          const lq = Eq;
                          if (!mq.navigationId) continue;
                          if ("interactionId" in lq && lq.interactionId != mq.navigationInteractionId) continue;
                          Yq = lq.largestContentfulPaint?.renderTime || 0, qq = Math.max(Yq - Eq.startTime, 0), lq.largestContentfulPaint && (xq.l(lq.largestContentfulPaint), gq = [lq.largestContentfulPaint])
                        }
                        Yq < Oq.firstHiddenTime && (mq.value = qq, mq.entries = gq, lq())
                      }
                    },
                    Bq = ["largest-contentful-paint"];
                  Yq && Bq.push("interaction-contentful-paint", "soft-navigation");
                  const Wq = YY(Bq, uq);
                  if (Wq) {
                    lq = wg(qq, mq, rY, Eq.reportAllChanges);
                    const Oq = ["keydown", "click", "visibilitychange"],
                      xq = qq => {
                        if (qq.isTrusted && !gq) {
                          const qq = mq.id;
                          PY((() => {
                            if (!gq) {
                              if (!Yq) {
                                Wq.disconnect();
                                for (const qq of Oq) removeEventListener(qq, xq, {
                                  capture: !0
                                })
                              }
                              qq === mq.id && (gq = !0, lq(!0))
                            }
                          }))
                        }
                      };
                    for (const qq of Oq) addEventListener(qq, xq, {
                      capture: !0
                    });
                    Xg((Yq => {
                      Aq("back-forward-cache", mq.navigationId, mq.navigationInteractionId, mq.navigationURL, sg()), lq = wg(qq, mq, rY, Eq.reportAllChanges), Kg((() => {
                        mq.value = performance.now() - Yq.timeStamp, gq = !0, lq(!0)
                      }))
                    }))
                  }
                }))
              }((Eq => {
                qq((qq => {
                  let Eq = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadDuration: 0,
                    elementRenderDelay: qq.value
                  };
                  if (qq.entries.length) {
                    const lq = qq.entries.at(-1),
                      Oq = qq => qq.name === lq.url && (qq.requestStart || qq.startTime) <= lq.startTime,
                      mq = lq.url && (hY.findLast(Oq) || performance.getEntriesByType("resource").findLast(Oq));
                    let xq;
                    Eq.target = Yq.get(lq), Eq.lcpEntry = lq, lq.url && (Eq.url = lq.url), mq && (Eq.lcpResourceEntry = mq);
                    let Aq = 0,
                      cq = 0;
                    if ("soft-navigation" !== qq.navigationType ? (xq = Gg(), Aq = xq?.activationStart ?? 0, cq = xq?.responseStart ?? 0) : (Aq = qq.navigationStartTime || 0, xq = gq.u?.get(qq.navigationId)), xq) {
                      const gq = Math.max(0, cq - Aq),
                        Yq = Math.max(gq, mq ? (mq.requestStart || mq.startTime) - Aq : 0),
                        lq = Math.min(qq.value, Math.max(Yq, mq ? mq.responseEnd - Aq : 0));
                      Eq = {
                        ...Eq,
                        timeToFirstByte: gq,
                        resourceLoadDelay: Yq - gq,
                        resourceLoadDuration: lq - Yq,
                        elementRenderDelay: qq.value - lq,
                        navigationEntry: xq
                      }
                    }
                  }
                  return Object.assign(qq, {
                    attribution: Eq
                  })
                })(Eq))
              }), Eq)
          }((qq => {
            var Eq;
            const {
              elementRenderDelay: gq,
              resourceLoadDelay: Yq,
              resourceLoadDuration: lq,
              timeToFirstByte: Oq,
              target: mq,
              url: xq,
              lcpResourceEntry: Aq
            } = qq.attribution, cq = this.buildInitialValues(qq);
            this.addIfPresent(cq, "element_render_delay", gq), this.addIfPresent(cq, "resource_load_delay", Yq), this.addIfPresent(cq, "resource_load_duration", lq), this.addIfPresent(cq, ZY, Oq);
            const uq = this.buildInitialContext(qq);
            this.addIfPresent(uq, "element", mq), (null === (Eq = this.webVitalConfig) || void 0 === Eq ? void 0 : Eq.trackAttributionSources) && (this.addIfPresent(uq, "resource_url", xq), this.addIfPresent(uq, "resource_delivery_type", null === Aq || void 0 === Aq ? void 0 : Aq.deliveryType), this.addIfPresent(uq, "resource_initiator_type", null === Aq || void 0 === Aq ? void 0 : Aq.initiatorType)), this.pushMeasurement(cq, uq)
          }), {
            reportAllChanges: null === (qq = this.webVitalConfig) || void 0 === qq ? void 0 : qq.reportAllChanges
          })
        }
        measureTTFB() {
          var qq;
          ! function(qq) {
            ! function(qq) {
              let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const gq = lY(Eq);
              let Yq = gY("TTFB"),
                lq = wg(qq, Yq, nY, Eq.reportAllChanges);
              bY((() => {
                const Oq = Gg();
                if (Oq) {
                  const mq = Oq.responseStart;
                  Yq.value = Math.max(mq - Cg(), 0), Yq.entries = [Oq], lq(!0), Xg((() => {
                    Yq = gY("TTFB", 0, "back-forward-cache", Yq.navigationId, Yq.navigationInteractionId, Yq.navigationURL, sg()), lq = wg(qq, Yq, nY, Eq.reportAllChanges), lq(!0)
                  })), gq && YY(["soft-navigation"], (gq => {
                    gq.forEach((gq => {
                      gq.navigationId && (Yq = gY("TTFB", 0, "soft-navigation", gq.navigationId, gq.interactionId, gq.name, gq.startTime), Yq.entries = [gq], lq = wg(qq, Yq, nY, Eq.reportAllChanges), lq(!0))
                    }))
                  }), Eq)
                }
              }))
            }((Eq => {
              qq((qq => {
                const Eq = qq.entries[0];
                let gq = {
                  waitingDuration: 0,
                  cacheDuration: 0,
                  dnsDuration: 0,
                  connectionDuration: 0,
                  requestDuration: 0,
                  navigationEntry: Eq
                };
                if (qq.entries.length && Eq instanceof PerformanceNavigationTiming) {
                  const Yq = Eq.activationStart || 0,
                    lq = Math.max((Eq.workerStart || Eq.fetchStart || 0) - Yq, 0),
                    Oq = Math.max(Eq.domainLookupStart - Yq, 0),
                    mq = Math.max(Eq.connectStart - Yq, 0),
                    xq = Math.max(Eq.connectEnd - Yq, 0);
                  gq = {
                    waitingDuration: lq,
                    cacheDuration: Oq - lq,
                    dnsDuration: mq - Oq,
                    connectionDuration: xq - mq,
                    requestDuration: qq.value - xq,
                    navigationEntry: Eq
                  }
                }
                return Object.assign(qq, {
                  attribution: gq
                })
              })(Eq))
            }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }((qq => {
            const {
              dnsDuration: Eq,
              connectionDuration: gq,
              requestDuration: Yq,
              waitingDuration: lq,
              cacheDuration: Oq
            } = qq.attribution, mq = this.buildInitialValues(qq);
            this.addIfPresent(mq, "dns_duration", Eq), this.addIfPresent(mq, "connection_duration", gq), this.addIfPresent(mq, "request_duration", Yq), this.addIfPresent(mq, "waiting_duration", lq), this.addIfPresent(mq, "cache_duration", Oq);
            const xq = this.buildInitialContext(qq);
            this.pushMeasurement(mq, xq)
          }), {
            reportAllChanges: null === (qq = this.webVitalConfig) || void 0 === qq ? void 0 : qq.reportAllChanges
          })
        }
        buildInitialValues(qq) {
          return {
            [qq.name.toLowerCase()]: qq.value,
            delta: qq.delta
          }
        }
        buildInitialContext(qq) {
          var Eq;
          const gq = null !== (Eq = qE("com.grafana.faro.lastNavigationId", Iq)) && void 0 !== Eq ? Eq : zg;
          return {
            id: qq.id,
            rating: qq.rating,
            navigation_type: qq.navigationType,
            navigation_entry_id: gq
          }
        }
        pushMeasurement(qq, Eq) {
          this.corePushMeasurement({
            type: "web-vitals",
            values: qq
          }, {
            context: Eq
          })
        }
        addIfPresent(qq, Eq, gq) {
          gq && (qq[Eq] = gq)
        }
        addNumberIfDefined(qq, Eq, gq) {
          void 0 !== gq && (qq[Eq] = gq)
        }
      },
      MY = class extends Eg {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-web-vitals", this.version = gg
        }
        initialize() {
          this.logDebug("Initializing"), new fY(this.api.pushMeasurement, this.config.webVitalsInstrumentation).initialize()
        }
      };
    const TY = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;

    function zY() {
      let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      for (const Eq of qq)
        if ("traceparent" === Eq.name) {
          if (!TY.test(Eq.description)) continue;
          const [, qq, gq] = Eq.description.split("-");
          if (null != qq && null != gq) return {
            traceId: qq,
            spanId: gq
          };
          break
        }
    }

    function SY(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        wallNow: Date.now(),
        monoNow: performance.now()
      };
      const {
        wallNow: gq,
        monoNow: Yq
      } = Eq;
      return Math.min(gq, gq - (Yq - qq))
    }

    function pY(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      for (const [gq, Yq] of Object.entries(Eq)) {
        const Eq = qq[gq];
        return null != Eq && (iq(Yq) ? Yq.includes(Eq) : Eq === Yq)
      }
      return !0
    }

    function GY(qq) {
      const {
        connectEnd: Eq,
        connectStart: gq,
        decodedBodySize: Yq,
        domainLookupEnd: lq,
        domainLookupStart: Oq,
        duration: mq,
        encodedBodySize: xq,
        fetchStart: Aq,
        initiatorType: cq,
        name: uq,
        nextHopProtocol: Bq,
        redirectEnd: Wq,
        redirectStart: Nq,
        renderBlockingStatus: aq,
        requestStart: Vq,
        responseEnd: dq,
        responseStart: jq,
        responseStatus: Hq,
        secureConnectionStart: oq,
        transferSize: Pq,
        workerStart: Qq
      } = qq;
      return {
        name: uq,
        httpHost: JY(uq),
        duration: kY(mq),
        tcpHandshakeTime: kY(Eq - gq),
        dnsLookupTime: kY(lq - Oq),
        tlsNegotiationTime: kY(Eq - oq),
        responseStatus: kY(Hq),
        redirectTime: kY(Wq - Nq),
        requestTime: kY(jq - Vq),
        responseTime: kY(dq - jq),
        fetchTime: kY(dq - Aq),
        serviceWorkerTime: kY(Qq > 0 ? Aq - Qq : 0),
        decodedBodySize: kY(Yq),
        encodedBodySize: kY(xq),
        cacheHitStatus: function() {
          let qq = "fullLoad";
          0 === Pq ? Yq > 0 && (qq = "cache") : null != Hq ? 304 === Hq && (qq = "conditionalFetch") : xq > 0 && Pq < xq && (qq = "conditionalFetch");
          return qq
        }(),
        renderBlockingStatus: kY(aq),
        protocol: Bq,
        initiatorType: cq,
        visibilityState: document.visibilityState,
        ttfb: kY(jq - Vq),
        transferSize: kY(Pq)
      }
    }

    function LY(qq) {
      const {
        activationStart: Eq,
        domComplete: gq,
        domContentLoadedEventEnd: Yq,
        domContentLoadedEventStart: lq,
        domInteractive: Oq,
        fetchStart: mq,
        loadEventEnd: xq,
        loadEventStart: Aq,
        responseStart: cq,
        type: uq
      } = qq, Bq = function() {
        var qq;
        return null != (null === (qq = performance.timing) || void 0 === qq ? void 0 : qq.domLoading) ? performance.timing.domLoading - performance.timeOrigin : null
      }();
      return uE(uE({}, GY(qq)), {}, {
        pageLoadTime: kY(gq - mq),
        documentParsingTime: kY(Bq ? Oq - Bq : null),
        domProcessingTime: kY(gq - Oq),
        domContentLoadHandlerTime: kY(Yq - lq),
        onLoadTime: kY(xq - Aq),
        ttfb: kY(Math.max(cq - (null !== Eq && void 0 !== Eq ? Eq : 0), 0)),
        type: uq
      })
    }

    function JY(qq) {
      try {
        return new URL(qq).host || zg
      } catch (Eq) {
        return zg
      }
    }

    function kY(qq) {
      return null == qq ? zg : "number" === typeof qq ? Math.round(qq > 0 ? qq : 0).toString() : qq.toString()
    }
    const RY = {
      initiatorType: ["xmlhttprequest", "fetch"]
    };

    function UY(qq, Eq, gq, Yq, lq, Oq, mq) {
      try {
        var xq = qq[Oq](mq),
          Aq = xq.value
      } catch (qq) {
        return void gq(qq)
      }
      xq.done ? Eq(Aq) : Promise.resolve(Aq).then(Yq, lq)
    }

    function FY(qq) {
      return function() {
        var Eq = this,
          gq = arguments;
        return new Promise((function(Yq, lq) {
          var Oq = qq.apply(Eq, gq);

          function mq(qq) {
            UY(Oq, Yq, lq, mq, xq, "next", qq)
          }

          function xq(qq) {
            UY(Oq, Yq, lq, mq, xq, "throw", qq)
          }
          mq(void 0)
        }))
      }
    }
    const sY = new Hg;
    var XY = class extends Eg {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-performance", this.version = gg
      }
      initialize() {
        var qq = this;
        if (!("PerformanceObserver" in window)) return void this.logDebug("performance observer not supported. Disable performance instrumentation.");
        let Eq = !1;
        const gq = () => {
          ! function(qq) {
            if ("complete" === document.readyState) qq();
            else {
              const Eq = () => {
                "complete" === document.readyState && (qq(), document.removeEventListener("readystatechange", Eq))
              };
              document.addEventListener("readystatechange", Eq)
            }
          }(FY((function*() {
            if (Eq) return;
            const gq = qq.api.pushEvent,
              {
                faroNavigationId: Yq
              } = yield function(qq) {
                let Eq;
                const gq = new Promise((qq => {
                  Eq = qq
                }));
                return new PerformanceObserver((gq => {
                  var Yq;
                  const [lq] = gq.getEntries();
                  if (null == lq || Kq(lq.name)) return;
                  const Oq = lq.toJSON();
                  let mq = zY(null === Oq || void 0 === Oq ? void 0 : Oq.serverTiming);
                  const xq = null !== (Yq = qE("com.grafana.faro.lastNavigationId", Iq)) && void 0 !== Yq ? Yq : zg,
                    Aq = uE(uE({}, LY(Oq)), {}, {
                      faroNavigationId: jE(),
                      faroPreviousNavigationId: xq
                    });
                  EE("com.grafana.faro.lastNavigationId", Aq.faroNavigationId, Iq), qq("faro.performance.navigation", Aq, void 0, {
                    spanContext: mq,
                    timestampOverwriteMs: SY(Oq.startTime)
                  }), Eq(Aq)
                })).observe({
                  type: "navigation",
                  buffered: !0
                }), gq
              }(gq);
            Eq || null == Yq || function(qq, Eq, gq, Yq) {
              const lq = Yq.trackResources;
              new PerformanceObserver((Yq => {
                const Oq = Yq.getEntries(),
                  mq = {
                    wallNow: Date.now(),
                    monoNow: performance.now()
                  };
                for (const xq of Oq) {
                  if (Kq(xq.name)) continue;
                  null === gq || void 0 === gq || gq.notify({
                    type: "resource"
                  });
                  const Yq = xq.toJSON();
                  let Oq = zY(null === Yq || void 0 === Yq ? void 0 : Yq.serverTiming);
                  (null == lq && pY(Yq, RY) || lq) && Eq("faro.performance.resource", uE(uE({}, GY(Yq)), {}, {
                    faroNavigationId: qq,
                    faroResourceId: jE()
                  }), void 0, {
                    spanContext: Oq,
                    timestampOverwriteMs: SY(Yq.startTime, mq)
                  })
                }
              })).observe({
                type: "resource",
                buffered: !0
              })
            }(Yq, gq, sY, qq.config)
          })))
        };
        this.cancelInitialization = () => {
          Eq = !0, document.removeEventListener("prerenderingchange", gq)
        }, document.prerendering ? document.addEventListener("prerenderingchange", gq, {
          once: !0
        }) : gq()
      }
      destroy() {
        var qq;
        null === (qq = this.cancelInitialization) || void 0 === qq || qq.call(this), this.cancelInitialization = void 0
      }
    };
    const wY = "data-faro-user-action-name",
      KY = wY.replace(/-name$/, "-timeout"),
      CY = 1e3;

    function IY(qq) {
      return `data-${(qq.startsWith("data-")?qq.slice(5):qq).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
    }

    function eY(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
        gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : UE;
      if (void 0 === qq) return Eq;
      let Yq = NaN;
      try {
        Yq = "string" === typeof qq && "" === qq.trim() ? NaN : Number(qq)
      } catch (lq) {}
      return !Number.isFinite(Yq) || Yq <= 0 ? (gq(`initialActivityTimeout must be a finite number greater than zero; using ${Eq} ms`), Eq) : Yq > 1e3 ? (gq(`initialActivityTimeout cannot exceed ${CY} ms; clamping to the maximum`), CY) : Yq
    }

    function DY(qq, Eq, gq) {
      return void 0 !== qq && window.clearTimeout(qq), window.setTimeout((() => {
        Eq()
      }), gq)
    }

    function ql(qq) {
      return qq.type === jg
    }
    let El, gl;

    function Yl() {
      return El || (El = new Hg), gl || (gl = new MutationObserver(((qq, Eq) => {
        El.notify({
          type: "dom-mutation"
        })
      })), gl.observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0
      })), El
    }
    const ll = "fetch",
      Ol = "xhr";
    let ml, xl, Al, cl, ul = !1;

    function Bl() {
      if (ml) return ml;

      function qq(qq) {
        ml.notify({
          type: dg,
          request: qq
        })
      }

      function Eq(qq) {
        ml.notify({
          type: jg,
          request: qq
        })
      }
      return ml = new Hg, ul || (! function(qq) {
        let {
          onRequestEnd: Eq,
          onRequestStart: gq
        } = qq;
        Al || (Al = window.fetch);
        window.fetch = function() {
          var qq, Yq;
          const lq = null !== (qq = Cq(arguments[0])) && void 0 !== qq ? qq : "",
            Oq = Kq(lq),
            mq = (null !== (Yq = arguments[1]) && void 0 !== Yq ? Yq : {}).method,
            xq = jE();
          return Oq || gq({
            url: lq,
            method: mq,
            requestId: xq,
            apiType: ll
          }), Al.apply(this, arguments).then((qq => (Oq || Eq({
            url: lq,
            method: mq,
            requestId: xq,
            apiType: ll
          }), qq))).catch((qq => {
            throw Oq || Eq({
              url: lq,
              method: mq,
              requestId: xq,
              apiType: ll
            }), qq
          }))
        }
      }({
        onRequestStart: qq,
        onRequestEnd: Eq
      }), function(qq) {
        let {
          onRequestStart: Eq,
          onRequestEnd: gq
        } = qq;
        xl || (xl = XMLHttpRequest.prototype.open);
        XMLHttpRequest.prototype.open = function() {
          const qq = arguments[1],
            Yq = Kq(qq),
            lq = arguments[0],
            Oq = jE();
          this.addEventListener("loadstart", (function() {
            Yq || Eq({
              url: qq,
              method: lq,
              requestId: Oq,
              apiType: Ol
            })
          })), this.addEventListener("load", (function() {
            Yq || gq({
              url: qq,
              method: lq,
              requestId: Oq,
              apiType: Ol
            })
          })), this.addEventListener("error", (function() {
            Yq || gq({
              url: qq,
              method: lq,
              requestId: Oq,
              apiType: Ol
            })
          })), this.addEventListener("abort", (function() {
            Yq || gq({
              url: qq,
              method: lq,
              requestId: Oq,
              apiType: Ol
            })
          })), xl.apply(this, arguments)
        }
      }({
        onRequestStart: qq,
        onRequestEnd: Eq
      }), ul = !0), ml
    }
    let Wl, Nl = !1;
    let al = function(qq) {
      return qq[qq.Started = 0] = "Started", qq[qq.Halted = 1] = "Halted", qq[qq.Cancelled = 2] = "Cancelled", qq[qq.Ended = 3] = "Ended", qq
    }({});
    var Vl = class {
      constructor(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        this.userAction = qq, this.logDebug = Eq, this.initialActivityTimeout = gq, this.http = Bl(), this.dom = Yl(), this.perf = (cl || (cl = new Hg), Nl || (Wl = sY.subscribe((qq => {
          "resource" === qq.type && cl.notify({
            type: "resource-entry"
          })
        })), Nl = !0), cl), this.isValid = !1, this.runningRequests = new Map
      }
      attach() {
        this.allMonitorsSub = (new Hg).merge(this.http, this.dom, this.perf).takeWhile((() => [al.Started, al.Halted].includes(this.userAction.getState()))).filter((qq => !!(this.userAction.getState() !== al.Halted || ql(qq) && this.runningRequests.has(qq.request.requestId)))).subscribe((qq => {
          (function(qq) {
            return qq.type === dg
          })(qq) && this.runningRequests.set(qq.request.requestId, qq.request), ql(qq) && this.runningRequests.delete(qq.request.requestId), ql(qq) ? this.userAction.getState() === al.Halted && 0 === this.runningRequests.size && this.endAction() : (this.isValid || (this.isValid = !0, this.clearTimer(this.startupTid)), this.scheduleFollowUp())
        })), this.stateSub = this.userAction.filter((qq => [al.Ended, al.Cancelled].includes(qq))).first().subscribe((() => this.cleanup())), this.startupTid = DY(this.startupTid, (() => {
          this.logDebug("User action not sent; no DOM, resource, or HTTP activity:", this.userAction.name), this.cancelAction()
        }), this.initialActivityTimeout)
      }
      scheduleFollowUp() {
        this.clearTimer(this.followUpTid), this.followUpTid = window.setTimeout((() => {
          this.userAction.getState() === al.Started && this.runningRequests.size > 0 ? this.haltAction() : this.isValid ? this.endAction() : this.cancelAction()
        }), 100)
      }
      haltAction() {
        this.userAction.getState() === al.Started && (this.userAction.halt(), this.startHaltTimeout())
      }
      startHaltTimeout() {
        this.clearTimer(this.haltTid), this.haltTid = DY(this.haltTid, (() => {
          this.userAction.getState() === al.Halted && this.endAction()
        }), 1e4)
      }
      endAction() {
        this.userAction.end(), this.cleanup()
      }
      cancelAction() {
        this.userAction.cancel(), this.cleanup()
      }
      cleanup() {
        var qq, Eq;
        this.clearTimer(this.startupTid), this.clearTimer(this.followUpTid), this.clearTimer(this.haltTid), null === (qq = this.allMonitorsSub) || void 0 === qq || qq.unsubscribe(), null === (Eq = this.stateSub) || void 0 === Eq || Eq.unsubscribe(), this.allMonitorsSub = void 0, this.stateSub = void 0, this.runningRequests.clear()
      }
      clearTimer(qq) {
        void 0 !== qq && window.clearTimeout(qq)
      }
    };

    function dl(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UE;
      var gq;
      const {
        api: Yq,
        config: lq,
        internalLogger: Oq
      } = qq, mq = eY(null === (gq = lq.userActionsInstrumentation) || void 0 === gq ? void 0 : gq.initialActivityTimeout, 100, Eq);
      return {
        processUserEvent: function(qq) {
          var Eq, gq;
          const Oq = null !== (Eq = null === (gq = lq.userActionsInstrumentation) || void 0 === gq ? void 0 : gq.dataAttributeName) && void 0 !== Eq ? Eq : wY,
            mq = qq.target;
          if (!(mq instanceof Element)) return;
          const xq = function(qq, Eq) {
              let gq = qq;
              for (; gq;) {
                if (gq.hasAttribute(Eq)) return gq;
                gq = gq.parentElement
              }
              return null
            }(mq, IY(Oq)),
            Aq = function(qq, Eq) {
              if (!qq) return;
              const gq = function(qq) {
                  return IY(qq).slice(5).replace(/-(.)/g, ((qq, Eq) => Eq.toUpperCase()))
                }(Eq),
                Yq = qq.dataset;
              for (const lq in Yq)
                if (lq === gq) return Yq[lq]
            }(xq, Oq);
          if (!xq || !Aq) return;
          const cq = function(qq, Eq) {
            const gq = qq.getAttribute(function(qq) {
              const Eq = IY(qq);
              return Eq.endsWith("-name") ? `${Eq.slice(0,-5)}-timeout` : `${Eq}-timeout`
            }(Eq));
            return null === gq ? void 0 : Number(gq)
          }(xq, Oq);
          Yq.startUserAction(Aq, {}, {
            triggerName: qq.type,
            initialActivityTimeout: cq
          })
        },
        processUserActionStarted: function(qq, gq) {
          const Yq = qq,
            lq = eY(gq, mq, Eq);
          new Vl(Yq, Oq.debug, lq).attach()
        }
      }
    }
    const jl = "user_action_start",
      Hl = {
        Normal: "normal",
        Critical: "critical"
      };
    var ol = class {
        constructor() {
          this.buffer = []
        }
        addItem(qq) {
          this.buffer.push(qq)
        }
        flushBuffer(qq) {
          if (bq(qq))
            for (const Eq of this.buffer) qq(Eq);
          this.buffer.length = 0
        }
        size() {
          return this.buffer.length
        }
      },
      Pl = class extends Hg {
        constructor(qq) {
          let {
            name: Eq,
            parentId: gq,
            trigger: Yq,
            transports: lq,
            attributes: Oq,
            trackUserActionsExcludeItem: mq,
            importance: xq = Hl.Normal,
            pushEvent: Aq
          } = qq;
          super(), this.name = Eq, this.attributes = Oq, this.id = jE(), this.trigger = Yq, this.parentId = null !== gq && void 0 !== gq ? gq : this.id, this.trackUserActionsExcludeItem = mq, this.importance = xq, this._pushEvent = Aq, this._itemBuffer = new ol, this._transports = lq, this._state = 0, this._start()
        }
        addItem(qq) {
          return 0 === this._state && (this._itemBuffer.addItem(qq), !0)
        }
        _start() {
          this._state = 0, 0 === this._state && (this.startTime = WE(), this._startTimeMono = NE())
        }
        halt() {
          0 === this._state && (this._state = 1, this.notify(this._state))
        }
        cancel() {
          0 === this._state && this._itemBuffer.flushBuffer((qq => {
            this._transports.execute(qq)
          })), this._state = 2, this.notify(this._state)
        }
        end() {
          if (2 === this._state) return;
          const qq = WE(),
            Eq = NE() - this._startTimeMono;
          this._state = 3, this._itemBuffer.flushBuffer((qq => {
            if (function(qq, Eq) {
                return (null === Eq || void 0 === Eq ? void 0 : Eq(qq)) || "measurement" === qq.type && "web-vitals" === qq.payload.type
              }(qq, this.trackUserActionsExcludeItem)) return void this._transports.execute(qq);
            const Eq = eE(eE({}, qq), {}, {
              payload: eE(eE({}, qq.payload), {}, {
                action: {
                  parentId: this.id,
                  name: this.name
                }
              })
            });
            this._transports.execute(Eq)
          })), this._state = 3, this.notify(this._state), this._pushEvent("faro.user.action", eE({
            userActionName: this.name,
            userActionStartTime: this.startTime.toString(),
            userActionEndTime: qq.toString(),
            userActionDuration: Eq.toString(),
            userActionTrigger: this.trigger,
            userActionImportance: this.importance
          }, SE(this.attributes)), void 0, {
            timestampOverwriteMs: this.startTime,
            customPayloadTransformer: qq => (qq.action = {
              id: this.id,
              name: this.name
            }, qq)
          })
        }
        getState() {
          return this._state
        }
      };
    const Ql = new Hg;

    function yl(qq, Eq) {
      return !!qq && (0 === (null === qq || void 0 === qq ? void 0 : qq.getState()) && (qq.addItem(Eq), !0))
    }
    var tl = class extends Eg {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-user-action", this.version = gg
        }
        initialize() {
          const {
            processUserEvent: qq,
            processUserActionStarted: Eq
          } = dl(Vq, (qq => this.logWarn(qq)));
          this._processUserEvent = qq, this._processKeydown = Eq => {
            [" ", "Enter"].includes(Eq.key) && qq(Eq)
          }, window.addEventListener("pointerdown", this._processUserEvent), window.addEventListener("keydown", this._processKeydown), this._userActionSub = Ql.subscribe((qq => {
            let {
              type: gq,
              userAction: Yq,
              initialActivityTimeout: lq
            } = qq;
            "user_action_start" === gq && Eq(Yq, lq)
          }))
        }
        destroy() {
          var qq;
          this._processUserEvent && window.removeEventListener("pointerdown", this._processUserEvent), this._processKeydown && window.removeEventListener("keydown", this._processKeydown), null === (qq = this._userActionSub) || void 0 === qq || qq.unsubscribe()
        }
      },
      rl = class extends Eg {
        constructor() {
          super(), this.name = "@grafana/faro-web-sdk:instrumentation-csp", this.version = gg, this.boundSecuritypolicyviolationHandler = this.securitypolicyviolationHandler.bind(this)
        }
        initialize() {
          document.addEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        destroy() {
          document.removeEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        securitypolicyviolationHandler(qq) {
          const Eq = {
            blockedURI: qq.blockedURI,
            columnNumber: qq.columnNumber,
            disposition: qq.disposition,
            documentURI: qq.documentURI,
            effectiveDirective: qq.effectiveDirective,
            lineNumber: qq.lineNumber,
            originalPolicy: qq.originalPolicy,
            referrer: qq.referrer,
            sample: qq.sample,
            sourceFile: qq.sourceFile,
            statusCode: qq.statusCode,
            violatedDirective: qq.violatedDirective
          };
          this.api.pushEvent("securitypolicyviolation", SE(Eq))
        }
      };
    var vl = class extends Hg {
      constructor(qq, Eq) {
        var gq, Yq, lq, Oq;
        super(), this._tracking = !1, this.eventsObservable = qq, this._options = {
          inactivityMs: null !== (gq = null === Eq || void 0 === Eq ? void 0 : Eq.inactivityMs) && void 0 !== gq ? gq : 100,
          drainTimeoutMs: null !== (Yq = null === Eq || void 0 === Eq ? void 0 : Eq.drainTimeoutMs) && void 0 !== Yq ? Yq : 1e4,
          isOperationStart: null !== (lq = null === Eq || void 0 === Eq ? void 0 : Eq.isOperationStart) && void 0 !== lq ? lq : () => {},
          isOperationEnd: null !== (Oq = null === Eq || void 0 === Eq ? void 0 : Eq.isOperationEnd) && void 0 !== Oq ? Oq : () => {}
        }, this._initialize()
      }
      _initialize() {
        this.eventsObservable.filter((() => this._tracking)).subscribe((qq => {
          var Eq;
          this._lastEventTime = NE(), null === (Eq = this._currentEvents) || void 0 === Eq || Eq.push(qq);
          const gq = this._options.isOperationStart(qq);
          var Yq;
          gq && (null === (Yq = this._activeOperations) || void 0 === Yq || Yq.set(gq, !0));
          const lq = this._options.isOperationEnd(qq);
          var Oq;
          lq && (null === (Oq = this._activeOperations) || void 0 === Oq || Oq.delete(lq));
          this._scheduleInactivityCheck()
        }))
      }
      startTracking() {
        this._tracking || (this._tracking = !0, this._startTime = NE(), this._lastEventTime = this._startTime, this.notify({
          message: "tracking-started"
        }), this._currentEvents = [], this._activeOperations = new Map, this._scheduleInactivityCheck())
      }
      stopTracking() {
        let qq;
        this._tracking = !1, this._clearTimer(this._inactivityTid), this._clearTimer(this._drainTid), qq = this.hasActiveOperations() ? NE() - this._startTime : this._lastEventTime ? this._lastEventTime - this._startTime : 0, this.notify({
          message: "tracking-ended",
          events: this._currentEvents,
          duration: qq
        })
      }
      _scheduleInactivityCheck() {
        this._inactivityTid = hl(this._inactivityTid, (() => {
          this.hasActiveOperations() ? this._startDrainTimeout() : this.stopTracking()
        }), this._options.inactivityMs)
      }
      _startDrainTimeout() {
        this._drainTid = hl(this._drainTid, (() => {
          this.stopTracking()
        }), this._options.drainTimeoutMs)
      }
      hasActiveOperations() {
        return !!this._activeOperations && this._activeOperations.size > 0
      }
      _clearTimer(qq) {
        qq && clearTimeout(qq)
      }
    };

    function hl(qq, Eq, gq) {
      return qq && clearTimeout(qq), qq = setTimeout((() => {
        Eq()
      }), gq)
    }
    let nl;
    const bl = new Set,
      il = new Map;
    let Zl, fl, Ml, Tl, zl, Sl, pl, Gl, Ll = !1;
    var Jl = class extends Eg {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-navigation", this.version = gg
      }
      initialize() {
        const qq = Bl(),
          Eq = Yl(),
          gq = function() {
            function qq(qq, Eq) {
              const gq = null !== Eq && void 0 !== Eq ? Eq : location.href;
              gq !== fl && (Zl.notify({
                type: "url-change",
                from: fl,
                to: gq,
                trigger: qq
              }), fl = gq)
            }
            if (Zl || (Zl = new Hg, fl = location.href), !Ll)
              if ("navigation" in window && "NavigateEvent" in window) {
                pl = Eq => {
                  try {
                    const gq = null === Eq || void 0 === Eq ? void 0 : Eq.destination;
                    (null === gq || void 0 === gq ? void 0 : gq.sameDocument) && "string" === typeof gq.url && qq("navigate", gq.url)
                  } catch (gq) {}
                }, window.navigation.addEventListener("navigate", pl);
                const Eq = window.NavigateEvent;
                Eq && Eq.prototype && "function" === typeof Eq.prototype.intercept && (Gl || (Gl = Eq.prototype.intercept), Eq.prototype.intercept = function(Eq) {
                  try {
                    const Eq = !!(null === this || void 0 === this ? void 0 : this.canIntercept),
                      gq = null === this || void 0 === this ? void 0 : this.destination;
                    Eq && gq && !1 === gq.sameDocument && "string" === typeof gq.url && qq("navigate-intercept", gq.url)
                  } catch (gq) {}
                  return Gl.call(this, Eq)
                }), Ll = !0
              } else Ml || (Ml = window.history.pushState), window.history.pushState = function() {
                for (var Eq = arguments.length, gq = new Array(Eq), Yq = 0; Yq < Eq; Yq++) gq[Yq] = arguments[Yq];
                const lq = Ml.apply(window.history, gq);
                return qq("pushState"), lq
              }, Tl || (Tl = window.history.replaceState), window.history.replaceState = function() {
                for (var Eq = arguments.length, gq = new Array(Eq), Yq = 0; Yq < Eq; Yq++) gq[Yq] = arguments[Yq];
                const lq = Tl.apply(window.history, gq);
                return qq("replaceState"), lq
              }, zl = () => qq("popstate"), Sl = () => qq("hashchange"), window.addEventListener("popstate", zl), window.addEventListener("hashchange", Sl), Ll = !0;
            return Zl
          }(),
          Yq = (lq = ["pointerdown", "keydown"], nl || (nl = new Hg), lq.forEach((qq => {
            if (!bl.has(qq)) {
              const Eq = () => {
                nl.notify({
                  type: "interaction",
                  name: qq
                })
              };
              window.addEventListener(qq, Eq), bl.add(qq), il.set(qq, Eq)
            }
          })), nl);
        var lq;
        const Oq = new vl((new Hg).merge(qq, Eq, gq), {
          inactivityMs: 100,
          drainTimeoutMs: 1e4,
          isOperationStart: qq => function(qq) {
            return qq.type === dg
          }(qq) ? qq.request.requestId : void 0,
          isOperationEnd: qq => function(qq) {
            return qq.type === jg
          }(qq) ? qq.request.requestId : void 0
        });
        Oq.filter((qq => "tracking-ended" === qq.message)).subscribe((qq => {
          var Eq, gq;
          if ((null === (Eq = qq.events) || void 0 === Eq ? void 0 : Eq.some((qq => "url-change" === qq.type))) && (null === (gq = qq.events) || void 0 === gq ? void 0 : gq.some((qq => "dom-mutation" === qq.type)))) {
            var Yq;
            const Eq = null === (Yq = qq.events) || void 0 === Yq ? void 0 : Yq.find((qq => "url-change" === qq.type));
            Vq.api.pushEvent("faro.navigation", {
              fromUrl: null === Eq || void 0 === Eq ? void 0 : Eq.from,
              toUrl: null === Eq || void 0 === Eq ? void 0 : Eq.to,
              sameDocument: String(!0),
              duration: qq.duration
            })
          }
        })), Yq.subscribe((() => {
          Oq.startTracking()
        }))
      }
    };

    function kl() {
      let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const Eq = [new tl, new Tg, new MY, new Yg, new Sg, new Jl];
      return !1 !== qq.enablePerformanceInstrumentation && Eq.unshift(new XY), !1 !== qq.enableContentSecurityPolicyInstrumentation && Eq.push(new rl), !1 !== qq.captureConsole && Eq.push(new fg), Eq
    }
    var Rl = gq(6578);
    let Ul, Fl;

    function sl() {
      const qq = "undefined" !== typeof navigator ? navigator.userAgent : "";
      return Ul === qq && Fl || (Fl = new Rl.UAParser(qq).getResult(), Ul = qq), Fl
    }
    const Xl = () => {
        const {
          browser: qq,
          os: Eq,
          ua: gq
        } = sl(), {
          name: Yq,
          version: lq
        } = qq, {
          name: Oq,
          version: mq
        } = Eq, xq = navigator.language, Aq = gq.includes("Mobi"), cq = function() {
          if (!Yq || !lq) return;
          if ("userAgentData" in navigator && navigator.userAgentData) return navigator.userAgentData.brands
        }();
        return {
          browser: {
            name: null !== Yq && void 0 !== Yq ? Yq : zg,
            version: null !== lq && void 0 !== lq ? lq : zg,
            os: `${null!==Oq&&void 0!==Oq?Oq:zg} ${null!==mq&&void 0!==mq?mq:zg}`,
            userAgent: null !== gq && void 0 !== gq ? gq : zg,
            language: null !== xq && void 0 !== xq ? xq : zg,
            mobile: Aq,
            brands: null !== cq && void 0 !== cq ? cq : zg,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`
          }
        }
      },
      wl = () => {
        const {
          name: qq,
          version: Eq
        } = sl().os;
        if (!qq && !Eq) return {};
        const gq = {};
        return qq && (gq.name = qq), Eq && (gq.version = Eq), {
          os: gq
        }
      };

    function Kl(qq) {
      var Eq, gq, Yq;
      return {
        id: null !== (Eq = null === (gq = Vq.config) || void 0 === gq || null === (gq = gq.sessionTracking) || void 0 === gq || null === (Yq = gq.generateSessionId) || void 0 === Yq ? void 0 : Yq.call(gq)) && void 0 !== Eq ? Eq : jE(),
        attributes: qq
      }
    }
    const Cl = () => ({
      sdk: {
        name: "faro-web",
        version: gg
      }
    });
    var Il = class extends qg {
      isBatched() {
        return !1
      }
      getIgnoreUrls() {
        return []
      }
    };
    let el = function(qq) {
      return qq.EXCEPTION = "exception", qq.LOG = "log", qq.MEASUREMENT = "measurement", qq.TRACE = "trace", qq.EVENT = "event", qq
    }({});
    const Dl = {
      exception: "exceptions",
      log: "logs",
      measurement: "measurements",
      trace: "traces",
      event: "events"
    };

    function qO(qq, Eq) {
      var gq, Yq;
      if (void 0 === Eq) return qq;
      if (void 0 === qq) return {
        resourceSpans: Eq
      };
      const lq = null === (gq = qq.resourceSpans) || void 0 === gq ? void 0 : gq[0];
      if (void 0 === lq) return qq;
      const Oq = (null === lq || void 0 === lq ? void 0 : lq.scopeSpans) || [],
        mq = (null === Eq || void 0 === Eq || null === (Yq = Eq[0]) || void 0 === Yq ? void 0 : Yq.scopeSpans) || [];
      return eE(eE({}, qq), {}, {
        resourceSpans: [eE(eE({}, lq), {}, {
          scopeSpans: [...Oq, ...mq]
        })]
      })
    }

    function EO(qq) {
      let Eq = {
        meta: {}
      };
      return void 0 !== qq[0] && (Eq.meta = qq[0].meta), qq.forEach((qq => {
        switch (qq.type) {
          case "log":
          case "event":
          case "exception":
          case "measurement": {
            const gq = Dl[qq.type],
              Yq = Eq[gq];
            Eq = eE(eE({}, Eq), {}, {
              [gq]: void 0 === Yq ? [qq.payload] : [...Yq, qq.payload]
            });
            break
          }
          case "trace":
            Eq = eE(eE({}, Eq), {}, {
              traces: qO(Eq.traces, qq.payload.resourceSpans)
            })
        }
      })), Eq
    }
    var gO = class extends Il {
      constructor() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(), this.options = qq, this.name = "@grafana/faro-web-sdk:transport-console", this.version = gg
      }
      send(qq) {
        var Eq;
        return this.unpatchedConsole[null !== (Eq = this.options.level) && void 0 !== Eq ? Eq : og.DEBUG]("New event", EO([qq]))
      }
    };
    const YO = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), ([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      lO = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-9]{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      OO = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:(?:([0-9]{2}))|(?: ([0-9]))) ([0-9]{2}):([0-9]{2}):([0-9]{2}) ([0-9]{4})$/,
      mO = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      xO = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      AO = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function cO(qq) {
      let {
        weekday: Eq,
        day: gq,
        month: Yq,
        year: lq,
        hour: Oq,
        minute: mq,
        second: xq
      } = qq;
      if (lq < 1900 || gq < 1 || Oq > 23 || mq > 59 || xq > 60) return;
      const Aq = 60 === xq,
        cq = new Date(0);
      return cq.setUTCFullYear(lq, Yq, gq), cq.setUTCHours(Oq, mq, Aq ? 59 : xq, 0), cq.getUTCDay() === Eq && cq.getUTCDate() === gq && cq.getUTCMonth() === Yq && cq.getUTCFullYear() === lq && cq.getUTCHours() === Oq && cq.getUTCMinutes() === mq && cq.getUTCSeconds() === (Aq ? 59 : xq) ? cq.getTime() + (Aq ? 1e3 : 0) : void 0
    }
    var uO = class {
      constructor(qq) {
        this.options = qq, this.admitted = 0, this.inProgress = 0, this.sequence = 0, this.nextSendAt = 0, this.attemptQueue = [], this.waiting = [], this.unloading = !1
      }
      reserve() {
        var qq = this;
        if (this.admitted >= this.options.bufferSize) return;
        this.admitted++;
        const Eq = this.sequence++;
        let gq = !1;
        return {
          deliver: function() {
            var gq = FY((function*(gq) {
              const Yq = qq.options.getNow();
              let lq, Oq = 0;
              for (;;) {
                var mq, xq, Aq;
                const cq = qq.options.retry.maxAttempts - Oq,
                  uq = yield qq.runAttempt((() => gq(cq, qq.unloading)), Oq > 0);
                if (Oq += uq.attemptsMade, "success" === uq.kind) return {
                  kind: "success",
                  attempts: Oq,
                  elapsedTimeMs: qq.options.getNow() - Yq
                };
                if (lq = uq.failure, "terminal" === uq.kind || qq.unloading) return {
                  kind: "terminal",
                  attempts: Oq,
                  elapsedTimeMs: qq.options.getNow() - Yq,
                  failure: lq
                };
                if (Oq >= qq.options.retry.maxAttempts) return {
                  kind: "terminal",
                  attempts: Oq,
                  elapsedTimeMs: qq.options.getNow() - Yq,
                  failure: lq,
                  reason: "retries-exhausted"
                };
                if (null != uq.retryAfterMs && uq.retryAfterMs > qq.options.retry.maxBackoffMs) return {
                  kind: "terminal",
                  attempts: Oq,
                  elapsedTimeMs: qq.options.getNow() - Yq,
                  failure: lq,
                  reason: "retry-after-too-long"
                };
                const Bq = Math.min(null !== (mq = uq.retryAfterMs) && void 0 !== mq ? mq : qq.options.retry.initialBackoffMs * Math.pow(qq.options.retry.backoffMultiplier, Oq - 1), qq.options.retry.maxBackoffMs);
                if (null === (xq = (Aq = qq.options).onRetry) || void 0 === xq || xq.call(Aq, Bq, Oq + 1), yield qq.waitForTurn(Eq, Bq)) {
                  const Eq = qq.options.retry.maxAttempts - Oq,
                    lq = yield qq.runAttempt((() => gq(Eq, !0)));
                  return Oq += lq.attemptsMade, {
                    kind: "success" === lq.kind ? "success" : "terminal",
                    attempts: Oq,
                    elapsedTimeMs: qq.options.getNow() - Yq,
                    failure: "success" === lq.kind ? void 0 : lq.failure
                  }
                }
              }
            }));
            return function(qq) {
              return gq.apply(this, arguments)
            }
          }(),
          release: () => {
            gq || (gq = !0, this.admitted--)
          }
        }
      }
      flush() {
        this.unloading = !0, this.nextSendAt = 0;
        const qq = this.waiting.splice(0);
        null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0);
        for (const Eq of qq) Eq.resolve(!0);
        this.runNextAttempt()
      }
      resume() {
        this.unloading = !1
      }
      runAttempt(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Promise(((gq, Yq) => {
          this.attemptQueue.push({
            run: () => {
              this.inProgress++;
              const Eq = () => {
                this.inProgress--, this.runNextAttempt()
              };
              qq().then((qq => {
                Eq(), gq(qq)
              }), (qq => {
                Eq(), Yq(qq)
              }))
            },
            isRedelivery: Eq
          }), this.runNextAttempt()
        }))
      }
      runNextAttempt() {
        for (null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0); this.inProgress < this.options.concurrency && this.attemptQueue.length > 0;) {
          const qq = this.options.getNow(),
            Eq = this.attemptQueue.findIndex((Eq => {
              let {
                isRedelivery: gq
              } = Eq;
              return this.unloading || !gq || qq >= this.nextSendAt
            }));
          if (Eq < 0) return void(this.redeliveryTimer = setTimeout((() => {
            this.redeliveryTimer = void 0, this.runNextAttempt()
          }), Math.max(0, this.nextSendAt - qq)));
          const [gq] = this.attemptQueue.splice(Eq, 1);
          gq.isRedelivery && !this.unloading && (this.nextSendAt = qq + 1), gq.run()
        }
      }
      waitForTurn(qq, Eq) {
        const gq = Math.min(Eq * (1 + .2 * this.options.getRandom()), this.options.retry.maxBackoffMs);
        return new Promise((Eq => {
          this.waiting.push({
            sequence: qq,
            readyAt: this.options.getNow() + gq,
            resolve: Eq
          }), this.waiting.sort(((qq, Eq) => qq.readyAt === Eq.readyAt ? qq.sequence - Eq.sequence : qq.readyAt - Eq.readyAt)), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0), this.scheduleNext()
        }))
      }
      scheduleNext() {
        if (null != this.waitingTimer || 0 === this.waiting.length) return;
        const qq = this.waiting[0],
          Eq = qq.readyAt;
        this.waitingTimer = setTimeout((() => {
          this.waitingTimer = void 0;
          const Eq = this.waiting.indexOf(qq);
          Eq >= 0 && this.waiting.splice(Eq, 1), qq.resolve(!1), this.scheduleNext()
        }), Math.max(0, Eq - this.options.getNow()))
      }
    };

    function BO(qq, Eq) {
      if (null == qq) return {};
      var gq, Yq, lq = function(qq, Eq) {
        if (null == qq) return {};
        var gq = {};
        for (var Yq in qq)
          if ({}.hasOwnProperty.call(qq, Yq)) {
            if (Eq.includes(Yq)) continue;
            gq[Yq] = qq[Yq]
          } return gq
      }(qq, Eq);
      if (Object.getOwnPropertySymbols) {
        var Oq = Object.getOwnPropertySymbols(qq);
        for (Yq = 0; Yq < Oq.length; Yq++) gq = Oq[Yq], Eq.includes(gq) || {}.propertyIsEnumerable.call(qq, gq) && (lq[gq] = qq[gq])
      }
      return lq
    }

    function WO(qq) {
      const {
        size: Eq,
        concurrency: gq
      } = qq, Yq = [];
      let lq = 0;
      const Oq = () => {
        if (lq < gq && Yq.length) {
          const {
            producer: qq,
            resolve: Eq,
            reject: gq
          } = Yq.shift();
          lq++, qq().then((qq => {
            lq--, Oq(), Eq(qq)
          }), (qq => {
            lq--, Oq(), gq(qq)
          }))
        }
      };
      return {
        add: qq => {
          if (Yq.length + lq >= Eq) throw new Error("Task buffer full");
          return new Promise(((Eq, gq) => {
            Yq.push({
              producer: qq,
              resolve: Eq,
              reject: gq
            }), Oq()
          }))
        }
      }
    }
    const NO = ["headers"],
      aO = ["keepalive", "signal"],
      VO = new Set([408, 425, 429, 500, 502, 503, 504]),
      dO = new Set([429, 503]);
    let jO = 0,
      HO = 0;
    var oO = class extends Error {};
    var PO = class extends Il {
      constructor(qq) {
        var Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq, uq, Bq, Wq, Nq, aq, Vq, dq, jq;
        super(), this.options = qq, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = gg, this.pendingCustomSends = 0, this.getNow = null !== (Eq = qq.getNow) && void 0 !== Eq ? Eq : Date.now, this.requestTimeoutMs = null !== (gq = qq.requestTimeoutMs) && void 0 !== gq ? gq : 1e4, this.compressionEnabled = null !== (Yq = qq.requestCompression) && void 0 !== Yq && Yq && "undefined" !== typeof CompressionStream, qq.requestCompression && !this.compressionEnabled && this.logWarn("requestCompression is enabled but CompressionStream is not available. Falling back to uncompressed."), this.requestTimeoutMs > 0 && "undefined" === typeof AbortController && this.logWarn("AbortController is unavailable. Requests will be sent without the configured timeout."), this.deliveryQueue = new uO({
          bufferSize: null !== (lq = qq.bufferSize) && void 0 !== lq ? lq : 30,
          concurrency: null !== (Oq = qq.concurrency) && void 0 !== Oq ? Oq : 5,
          retry: {
            maxAttempts: null !== (mq = null === (xq = qq.retry) || void 0 === xq ? void 0 : xq.maxAttempts) && void 0 !== mq ? mq : 3,
            initialBackoffMs: null !== (Aq = null !== (cq = null === (uq = qq.retry) || void 0 === uq ? void 0 : uq.initialBackoffMs) && void 0 !== cq ? cq : qq.defaultRateLimitBackoffMs) && void 0 !== Aq ? Aq : 1e3,
            maxBackoffMs: null !== (Bq = null === (Wq = qq.retry) || void 0 === Wq ? void 0 : Wq.maxBackoffMs) && void 0 !== Bq ? Bq : 3e4,
            backoffMultiplier: null !== (Nq = null === (aq = qq.retry) || void 0 === aq ? void 0 : aq.backoffMultiplier) && void 0 !== Nq ? Nq : 2
          },
          getNow: this.getNow,
          getRandom: null !== (Vq = qq.getRandom) && void 0 !== Vq ? Vq : Math.random,
          onRetry: (qq, Eq) => {
            this.logDebug(`Retrying failed request after ${qq}ms. Attempt ${Eq}.`)
          }
        }), this.customPromiseBuffer = WO({
          size: null !== (dq = qq.bufferSize) && void 0 !== dq ? dq : 30,
          concurrency: null !== (jq = qq.concurrency) && void 0 !== jq ? jq : 5
        }), this.defaultPromiseBuffer = {
          add: qq => {
            if (this.promiseBuffer !== this.defaultPromiseBuffer || this.promiseBuffer.add !== this.defaultBufferAdd || this.pendingCustomSends > 0) return this.customPromiseBuffer.add(qq);
            const Eq = this.deliveryQueue.reserve();
            if (!Eq) throw new Error("Task buffer full");
            return this.runBufferedTask(Eq, qq)
          }
        }, this.defaultBufferAdd = this.defaultPromiseBuffer.add, this.promiseBuffer = this.defaultPromiseBuffer, "undefined" !== typeof window && (window.addEventListener("pagehide", (() => this.deliveryQueue.flush())), window.addEventListener("pageshow", (qq => {
          qq.persisted && this.deliveryQueue.resume()
        })))
      }
      send(qq) {
        var Eq = this;
        return FY((function*() {
          const gq = Eq.promiseBuffer;
          if (gq !== Eq.defaultPromiseBuffer || gq.add !== Eq.defaultBufferAdd) {
            Eq.pendingCustomSends++;
            try {
              yield gq.add((() => Eq.deliver(qq)))
            } catch (Yq) {
              Eq.logError("Permanent delivery failure", {
                error: Yq,
                attempts: 0,
                elapsedTimeMs: 0
              })
            } finally {
              Eq.pendingCustomSends--
            }
          } else yield Eq.deliver(qq)
        }))()
      }
      runBufferedTask(qq, Eq) {
        return FY((function*() {
          let gq;
          try {
            return yield qq.deliver(FY((function*() {
              return gq = yield Eq(), {
                kind: "success",
                attemptsMade: 1
              }
            }))), gq
          } finally {
            qq.release()
          }
        }))()
      }
      deliver(qq) {
        var Eq = this;
        return FY((function*() {
          const gq = Eq.deliveryQueue.reserve();
          if (gq) try {
            const Yq = yield Eq.prepareRequest(qq), lq = yield gq.deliver(((qq, gq) => Eq.performAttempt(Yq, qq, gq)));
            "terminal" === lq.kind && Eq.logError("retries-exhausted" === lq.reason ? "Delivery retries exhausted" : "Permanent delivery failure", uE(uE({}, lq.failure), {}, {
              reason: lq.reason,
              attempts: lq.attempts,
              elapsedTimeMs: lq.elapsedTimeMs
            }))
          } catch (Yq) {
            Eq.logError("Permanent delivery failure", {
              error: Yq,
              attempts: 0,
              elapsedTimeMs: 0
            })
          } finally {
            gq.release()
          } else Eq.logError("Permanent delivery failure", {
            error: "Reliable delivery queue is full",
            attempts: 0,
            elapsedTimeMs: 0
          })
        }))()
      }
      getIgnoreUrls() {
        var qq;
        return [this.options.url].concat(null !== (qq = this.config.ignoreUrls) && void 0 !== qq ? qq : [])
      }
      isBatched() {
        return !0
      }
      prepareRequest(qq) {
        var Eq = this;
        return FY((function*() {
          var gq, Yq;
          const lq = EO(qq),
            Oq = null === (gq = lq.meta.session) || void 0 === gq ? void 0 : gq.id,
            mq = JSON.stringify(lq),
            xq = null !== (Yq = Eq.options.requestOptions) && void 0 !== Yq ? Yq : {},
            {
              headers: Aq = {}
            } = xq,
            cq = BO(xq, NO),
            {
              keepalive: uq,
              signal: Bq
            } = cq,
            Wq = BO(cq, aO),
            Nq = {};
          for (const [qq, Eq] of Object.entries(Aq)) Nq[qq] = "function" === typeof Eq ? yield Eq(): Eq;
          let aq = mq,
            Vq = function(qq) {
              return "undefined" === typeof TextEncoder ? qq.length : (new TextEncoder).encode(qq).byteLength
            }(mq);
          const dq = {};
          return Eq.compressionEnabled && (aq = yield Eq.compress(mq), Vq = aq.size, dq["Content-Encoding"] = "gzip"), {
            bodySize: Vq,
            sessionId: Oq,
            requestInit: uE({
              method: "POST",
              headers: uE(uE(uE(uE(uE({
                "Content-Type": "application/json"
              }, dq), Nq), Eq.options.apiKey ? {
                "x-api-key": Eq.options.apiKey
              } : {}), Oq ? {
                "x-faro-session-id": Oq
              } : {}), {}, {
                "Idempotency-Key": jE(20)
              }),
              body: aq
            }, Wq)
          }
        }))()
      }
      performAttempt(qq, Eq, gq) {
        var Yq = this;
        return FY((function*() {
          var lq;
          const Oq = null === (lq = Yq.options.requestOptions) || void 0 === lq ? void 0 : lq.signal;
          if (null === Oq || void 0 === Oq ? void 0 : Oq.aborted) return {
            kind: "terminal",
            failure: {
              error: Oq.reason
            },
            attemptsMade: 0
          };
          let mq = 0;
          try {
            var xq;
            const lq = yield Yq.fetchWithKeepaliveFallback(qq.requestInit, qq.bodySize, !!gq || (null === (xq = Yq.options.requestOptions) || void 0 === xq ? void 0 : xq.keepalive), Eq, (() => mq++));
            if (Yq.handleResponse(lq, qq.sessionId), lq.status >= 200 && lq.status < 300) return {
              kind: "success",
              attemptsMade: mq
            };
            const Oq = {
              status: lq.status
            };
            return !VO.has(lq.status) || gq ? {
              kind: "terminal",
              failure: Oq,
              attemptsMade: mq
            } : {
              kind: "retry",
              failure: Oq,
              attemptsMade: mq,
              retryAfterMs: dO.has(lq.status) ? Yq.getRetryAfterDelayMs(lq) : void 0
            }
          } catch (Aq) {
            const qq = {
              error: Aq
            };
            return (null === Oq || void 0 === Oq ? void 0 : Oq.aborted) || !Yq.isFetchNetworkError(Aq) || gq ? {
              kind: "terminal",
              failure: qq,
              attemptsMade: mq
            } : {
              kind: "retry",
              failure: qq,
              attemptsMade: mq
            }
          }
        }))()
      }
      fetchWithKeepaliveFallback(qq, Eq, gq, Yq, lq) {
        var Oq = this;
        return FY((function*() {
          const mq = Oq.getNow(),
            xq = Oq.reserveKeepalive(Eq, gq);
          try {
            return yield Oq.fetchWithTimeout(uE(uE({}, qq), {}, {
              keepalive: xq.keepalive
            }), Oq.requestTimeoutMs, lq)
          } catch (cq) {
            var Aq;
            if (xq.keepalive && Yq > 1 && Oq.isFetchNetworkError(cq) && !(cq instanceof oO) && !(null === (Aq = Oq.options.requestOptions) || void 0 === Aq || null === (Aq = Aq.signal) || void 0 === Aq ? void 0 : Aq.aborted)) {
              Oq.logDebug("Retrying failed keepalive request with keepalive disabled.");
              const Eq = Oq.requestTimeoutMs - (Oq.getNow() - mq);
              return Oq.fetchWithTimeout(uE(uE({}, qq), {}, {
                keepalive: !1
              }), Eq, lq)
            }
            throw cq
          } finally {
            xq.release()
          }
        }))()
      }
      fetchWithTimeout(qq, Eq, gq) {
        var Yq = this;
        return FY((function*() {
          var lq;
          const Oq = null === (lq = Yq.options.requestOptions) || void 0 === lq ? void 0 : lq.signal;
          if (Yq.requestTimeoutMs <= 0 || "undefined" === typeof AbortController) return gq(), fetch(Yq.options.url, uE(uE({}, qq), {}, {
            signal: Oq
          }));
          if (Eq <= 0) throw new oO("Request timed out");
          const mq = new AbortController,
            xq = () => mq.abort(null === Oq || void 0 === Oq ? void 0 : Oq.reason);
          null === Oq || void 0 === Oq || Oq.addEventListener("abort", xq, {
            once: !0
          });
          let Aq = !1;
          const cq = setTimeout((() => {
            Aq = !0, mq.abort()
          }), Eq);
          try {
            return gq(), yield fetch(Yq.options.url, uE(uE({}, qq), {}, {
              signal: mq.signal
            }))
          } catch (uq) {
            if (Aq && !(null === Oq || void 0 === Oq ? void 0 : Oq.aborted)) throw new oO("Request timed out");
            throw uq
          } finally {
            clearTimeout(cq), null === Oq || void 0 === Oq || Oq.removeEventListener("abort", xq)
          }
        }))()
      }
      getRetryAfterDelayMs(qq) {
        const Eq = qq.headers.get("Retry-After");
        if (!Eq) return;
        if (/^\d+$/.test(Eq)) {
          const qq = 1e3 * Number(Eq);
          return Number.isFinite(qq) ? qq : Number.POSITIVE_INFINITY
        }
        const gq = this.getNow(),
          Yq = function(qq, Eq) {
            const gq = YO.exec(qq);
            if (gq) {
              const [, qq, Eq, Yq, lq, Oq, mq, xq] = gq;
              return cO({
                weekday: mO.indexOf(qq),
                day: Number(Eq),
                month: AO.indexOf(Yq),
                year: Number(lq),
                hour: Number(Oq),
                minute: Number(mq),
                second: Number(xq)
              })
            }
            const Yq = lO.exec(qq);
            if (Yq) {
              const [, qq, gq, mq, xq, Aq, cq, uq] = Yq, Bq = new Date(Eq);
              if (Number.isNaN(Bq.getTime())) return;
              const Wq = Bq.getUTCFullYear();
              let Nq = 100 * Math.floor(Wq / 100) + Number(xq);
              Nq < Wq && (Nq += 100);
              const aq = AO.indexOf(mq),
                Vq = {
                  month: aq,
                  day: Number(gq),
                  hour: Number(Aq),
                  minute: Number(cq),
                  second: Number(uq),
                  millisecond: 0
                },
                dq = {
                  month: Bq.getUTCMonth(),
                  day: Bq.getUTCDate(),
                  hour: Bq.getUTCHours(),
                  minute: Bq.getUTCMinutes(),
                  second: Bq.getUTCSeconds(),
                  millisecond: Bq.getUTCMilliseconds()
                };
              return (Nq > Wq + 50 || Nq === Wq + 50 && (Oq = dq, ((lq = Vq).month - Oq.month || lq.day - Oq.day || lq.hour - Oq.hour || lq.minute - Oq.minute || lq.second - Oq.second || lq.millisecond - Oq.millisecond) > 0)) && (Nq -= 100), cO({
                weekday: xO.indexOf(qq),
                day: Number(gq),
                month: aq,
                year: Nq,
                hour: Number(Aq),
                minute: Number(cq),
                second: Number(uq)
              })
            }
            var lq, Oq;
            const mq = OO.exec(qq);
            if (!mq) return;
            const [, xq, Aq, cq, uq, Bq, Wq, Nq, aq] = mq;
            return cO({
              weekday: mO.indexOf(xq),
              day: Number(null !== cq && void 0 !== cq ? cq : uq),
              month: AO.indexOf(Aq),
              year: Number(aq),
              hour: Number(Bq),
              minute: Number(Wq),
              second: Number(Nq)
            })
          }(Eq, gq);
        return null == Yq ? void 0 : Math.max(0, Yq - gq)
      }
      reserveKeepalive(qq, Eq) {
        if (!1 === Eq || qq > 6e4 || jO + qq > 6e4 || HO >= 9) return {
          keepalive: !1,
          release: UE
        };
        jO += qq, HO++;
        let gq = !1;
        return {
          keepalive: !0,
          release: () => {
            gq || (gq = !0, jO -= qq, HO--)
          }
        }
      }
      handleResponse(qq, Eq) {
        202 === qq.status && "invalid" === qq.headers.get("X-Faro-Session-Status") && this.extendFaroSession(this.config, this.logDebug.bind(this), Eq), qq.text().catch(UE)
      }
      isFetchNetworkError(qq) {
        return qq instanceof TypeError || qq instanceof oO || qq instanceof DOMException && "AbortError" === qq.name
      }
      compress(qq) {
        return FY((function*() {
          const Eq = [],
            gq = new ReadableStream({
              start(Eq) {
                Eq.enqueue((new TextEncoder).encode(qq)), Eq.close()
              }
            }).pipeThrough(new CompressionStream("gzip")).getReader();
          for (;;) {
            const {
              done: qq,
              value: Yq
            } = yield gq.read();
            if (qq) return new Blob(Eq);
            Eq.push(Yq)
          }
        }))()
      }
      extendFaroSession(qq, Eq, gq) {
        var Yq, lq;
        const Oq = qq.sessionTracking;
        if (!(null === Oq || void 0 === Oq ? void 0 : Oq.enabled)) return void Eq("Session expired.");
        const {
          fetchUserSession: mq,
          storeUserSession: xq
        } = RE(Oq), Aq = null === (Yq = this.metas.value.session) || void 0 === Yq ? void 0 : Yq.id, cq = null === (lq = mq()) || void 0 === lq ? void 0 : lq.sessionId;
        gq && gq === Aq && gq === cq ? (iE({
          fetchUserSession: mq,
          storeUserSession: xq
        })({
          forceSessionExtend: !0
        }), Eq("Session expired; created new session.")) : Eq("Ignoring stale or cross-tab session-invalid response; request session no longer current.")
      }
    };
    const QO = () => {
      const qq = window.k6;
      return {
        k6: uE({
          isK6Browser: !0
        }, (null === qq || void 0 === qq ? void 0 : qq.testRunId) && {
          testRunId: null === qq || void 0 === qq ? void 0 : qq.testRunId
        })
      }
    };
    let yO, tO;

    function rO() {
      let {
        generatePageId: qq,
        initialPageMeta: Eq
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return () => {
        const gq = location.href;
        return bq(qq) && yO !== gq && (yO = gq, tO = qq(location)), {
          page: uE(uE({
            url: gq
          }, tO ? {
            id: tO
          } : {}), Eq)
        }
      }
    }

    function vO() {
      let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DE,
        Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const gq = sE;
      return Eq > 0 && (gq.error = Eq >= 1 ? function() {
        for (var Eq = arguments.length, Yq = new Array(Eq), lq = 0; lq < Eq; lq++) Yq[lq] = arguments[lq];
        qq.error(`${gq.prefix}\n`, ...Yq)
      } : UE, gq.warn = Eq >= 2 ? function() {
        for (var Eq = arguments.length, Yq = new Array(Eq), lq = 0; lq < Eq; lq++) Yq[lq] = arguments[lq];
        qq.warn(`${gq.prefix}\n`, ...Yq)
      } : UE, gq.info = Eq >= 3 ? function() {
        for (var Eq = arguments.length, Yq = new Array(Eq), lq = 0; lq < Eq; lq++) Yq[lq] = arguments[lq];
        qq.info(`${gq.prefix}\n`, ...Yq)
      } : UE, gq.debug = Eq >= 4 ? function() {
        for (var Eq = arguments.length, Yq = new Array(Eq), lq = 0; lq < Eq; lq++) Yq[lq] = arguments[lq];
        qq.debug(`${gq.prefix}\n`, ...Yq)
      } : UE), gq
    }
    const hO = "faro",
      nO = {
        enabled: !0,
        sendTimeout: 250,
        itemLimit: 50
      },
      bO = ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "url", "experimental"];

    function iO(qq) {
      var Eq, gq, lq, Oq, mq, xq;
      const Aq = [],
        uq = vO(qq.unpatchedConsole, qq.internalLoggerLevel);
      qq.transports ? ((qq.url || qq.apiKey) && uq.error('if "transports" is defined, "url" and "apiKey" should not be defined'), Aq.push(...qq.transports)) : qq.url ? Aq.push(new PO({
        url: qq.url,
        apiKey: qq.apiKey,
        requestCompression: qq.requestCompression
      })) : uq.error('either "url" or "transports" must be defined');
      const {
        dedupe: Bq = !0,
        eventDomain: Wq = Yq,
        globalObjectKey: Nq = hO,
        instrumentations: aq = kl(),
        internalLoggerLevel: Vq = XE,
        isolate: dq = !1,
        logArgsSerializer: jq = Zg,
        metas: Hq = fO(qq),
        paused: oq = !1,
        preventGlobalExposure: Pq = !1,
        unpatchedConsole: Qq = DE,
        url: yq,
        experimental: tq
      } = qq, rq = BO(qq, bO), vq = null !== (Eq = null === tq || void 0 === tq ? void 0 : tq.trackNavigation) && void 0 !== Eq && Eq, hq = {
        dataAttributeName: IY(null !== (gq = null === (lq = qq.userActionsInstrumentation) || void 0 === lq ? void 0 : lq.dataAttributeName) && void 0 !== gq ? gq : wY),
        excludeItem: null === (Oq = qq.userActionsInstrumentation) || void 0 === Oq ? void 0 : Oq.excludeItem,
        initialActivityTimeout: eY(null === (mq = qq.userActionsInstrumentation) || void 0 === mq ? void 0 : mq.initialActivityTimeout, 100, (qq => uq.warn(qq)))
      };
      return uE(uE({}, rq), {}, {
        batching: uE(uE({}, nO), qq.batching),
        dedupe: Bq,
        globalObjectKey: Nq,
        instrumentations: ZO(aq, qq),
        internalLoggerLevel: Vq,
        isolate: dq,
        logArgsSerializer: jq,
        metas: Hq,
        parseStacktrace: Vg,
        paused: oq,
        preventGlobalExposure: Pq,
        transports: Aq,
        unpatchedConsole: Qq,
        eventDomain: Wq,
        ignoreUrls: [...null !== (xq = qq.ignoreUrls) && void 0 !== xq ? xq : [], ...yq ? [yq] : [], /\/collect(?:\/[\w]*)?$/],
        sessionTracking: uE(uE(uE({}, cq), qq.sessionTracking), MO({
          trackGeolocation: qq.trackGeolocation,
          sessionTracking: qq.sessionTracking
        })),
        userActionsInstrumentation: hq,
        experimental: {
          trackNavigation: vq
        }
      })
    }

    function ZO(qq, Eq) {
      let {
        experimental: gq
      } = Eq;
      var Yq;
      const lq = null !== (Yq = null === gq || void 0 === gq ? void 0 : gq.trackNavigation) && void 0 !== Yq && Yq;
      return qq.filter((qq => !("@grafana/faro-web-sdk:instrumentation-navigation" === qq.name && !lq)))
    }

    function fO(qq) {
      var Eq, gq, Yq;
      const {
        page: lq,
        generatePageId: Oq
      } = null !== (Eq = null === qq || void 0 === qq ? void 0 : qq.pageTracking) && void 0 !== Eq ? Eq : {}, mq = [Xl, wl, rO({
        generatePageId: Oq,
        initialPageMeta: lq
      }), ...null !== (gq = qq.metas) && void 0 !== gq ? gq : [], Cl];
      return nq(null === (Yq = window) || void 0 === Yq ? void 0 : Yq.k6) ? [...mq, QO] : mq
    }

    function MO(qq) {
      let {
        trackGeolocation: Eq,
        sessionTracking: gq
      } = qq;
      var Yq;
      const lq = {};
      return vq(Eq) && (lq.geoLocationTrackingEnabled = Eq), Xq(lq) ? {} : {
        session: uE(uE({}, null !== (Yq = null === gq || void 0 === gq ? void 0 : gq.session) && void 0 !== Yq ? Yq : {}), {}, {
          overrides: lq
        })
      }
    }
    const TO = new WeakSet;

    function zO(qq) {
      return TO.add(qq), qq
    }

    function SO(qq, Eq) {
      if (qq.capture) return zO(qq.capture(Eq));
      const gq = zO(qq.value);
      return null === Eq || void 0 === Eq || Eq(), gq
    }

    function pO(qq) {
      const Eq = `__faroBundleId_${qq}`,
        gq = null === uq || void 0 === uq ? void 0 : uq[Eq];
      if ("string" === typeof gq && "" !== gq) return gq;
      const Yq = "undefined" !== typeof window ? window[Eq] : void 0;
      return "string" === typeof Yq && "" !== Yq ? Yq : void 0
    }

    function GO(qq) {
      var Eq, gq;
      const Yq = qq.config.app.name,
        lq = Yq ? function(qq) {
          return null === uq || void 0 === uq ? void 0 : uq[`__faroGitHash_${qq}`]
        }(Yq) : void 0,
        Oq = {
          sdk: {
            version: gg,
            name: "faro"
          },
          app: eE({
            bundleId: Yq && pO(Yq)
          }, void 0 !== lq ? {
            gitHash: lq
          } : {})
        },
        mq = null === (Eq = qq.config.sessionTracking) || void 0 === Eq ? void 0 : Eq.session;
      mq && qq.api.setSession(mq), qq.config.app && (Oq.app = eE(eE({}, qq.config.app), Oq.app)), qq.config.user && (Oq.user = qq.config.user), qq.config.view && (Oq.view = qq.config.view), qq.metas.add(Oq, ...null !== (gq = qq.config.metas) && void 0 !== gq ? gq : [])
    }
    var LO = class {
      constructor(qq, Eq) {
        var gq, Yq;
        this.signalBuffer = [], this.itemLimit = null !== (gq = null === Eq || void 0 === Eq ? void 0 : Eq.itemLimit) && void 0 !== gq ? gq : 50, this.sendTimeout = null !== (Yq = null === Eq || void 0 === Eq ? void 0 : Eq.sendTimeout) && void 0 !== Yq ? Yq : 250, this.paused = (null === Eq || void 0 === Eq ? void 0 : Eq.paused) || !1, this.sendFn = qq, this.paused || this.start(), "undefined" !== typeof document && document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }))
      }
      addItem(qq) {
        this.paused || (this.signalBuffer.push(qq), this.signalBuffer.length >= this.itemLimit && this.flush())
      }
      start() {
        this.paused = !1, this.sendTimeout > 0 && (this.flushInterval = setInterval((() => this.flush()), this.sendTimeout))
      }
      pause() {
        this.paused = !0, clearInterval(this.flushInterval)
      }
      groupItems(qq) {
        const Eq = new Map;
        return qq.forEach((qq => {
          const gq = JSON.stringify(qq.meta);
          let Yq = Eq.get(gq);
          Yq = void 0 === Yq ? [qq] : [...Yq, qq], Eq.set(gq, Yq)
        })), Array.from(Eq.values())
      }
      flush() {
        if (this.paused || 0 === this.signalBuffer.length) return;
        const qq = this.signalBuffer;
        this.signalBuffer = [];
        try {
          this.groupItems(qq).forEach(this.sendFn)
        } catch (Eq) {
          throw this.signalBuffer = [...qq, ...this.signalBuffer], this.trimBufferToLimit(), Eq
        }
      }
      trimBufferToLimit() {
        this.signalBuffer.length > this.itemLimit && (this.signalBuffer = this.signalBuffer.slice(0, this.itemLimit))
      }
    };

    function JO(qq, Eq, gq, Yq) {
      var lq;
      Eq.debug("Initializing transports");
      const Oq = [];
      let mq = [];
      const xq = qq => {
        let Eq = qq;
        for (const Yq of mq) {
          const qq = Eq.map(Yq).filter(Boolean);
          if (0 === qq.length) return [];
          Eq = kO(qq, gq)
        }
        return Eq
      };
      let Aq;
      (null === (lq = gq.batching) || void 0 === lq ? void 0 : lq.enabled) && (Aq = new LO((qq => {
        const gq = xq(qq);
        if (0 !== gq.length)
          for (const Yq of Oq) Eq.debug(`Transporting item using ${Yq.name}\n`, gq), Yq.isBatched() && Yq.send(gq)
      }), {
        sendTimeout: gq.batching.sendTimeout,
        itemLimit: gq.batching.itemLimit,
        paused: gq.paused
      }));
      return {
        add: function() {
          Eq.debug("Adding transports");
          for (var lq = arguments.length, mq = new Array(lq), xq = 0; xq < lq; xq++) mq[xq] = arguments[xq];
          mq.forEach((lq => {
            Eq.debug(`Adding "${lq.name}" transport`), Oq.some((qq => qq === lq)) ? Eq.warn(`Transport ${lq.name} is already added`) : (lq.unpatchedConsole = qq, lq.internalLogger = Eq, lq.config = gq, lq.metas = Yq, Oq.push(lq))
          }))
        },
        addBeforeSendHooks: function() {
          Eq.debug("Adding beforeSendHooks\n", mq);
          for (var qq = arguments.length, gq = new Array(qq), Yq = 0; Yq < qq; Yq++) gq[Yq] = arguments[Yq];
          gq.forEach((qq => {
            qq && mq.push(qq)
          }))
        },
        getBeforeSendHooks: () => [...mq],
        execute: qq => {
          var lq;
          if (!gq.paused && JE(Yq).shouldCapture()) {
            if (Bq = qq.meta, !TO.has(Bq)) {
              var mq, cq, uq;
              const Eq = null === (mq = Yq.value.session) || void 0 === mq ? void 0 : mq.id,
                lq = SO(Yq);
              if (gq.paused) return;
              const Oq = eE({}, qq.meta);
              (null === (cq = Oq.session) || void 0 === cq ? void 0 : cq.id) === Eq && (null === (uq = lq.session) || void 0 === uq ? void 0 : uq.id) !== Eq && (void 0 === lq.session ? delete Oq.session : Oq.session = lq.session), qq = eE(eE({}, qq), {}, {
                meta: zO(Oq)
              })
            }
            var Bq;
            (null === (lq = gq.batching) || void 0 === lq ? void 0 : lq.enabled) && (null === Aq || void 0 === Aq || Aq.addItem(qq)), (qq => {
              var Yq;
              if ((null === (Yq = gq.batching) || void 0 === Yq ? void 0 : Yq.enabled) && Oq.every((qq => qq.isBatched()))) return;
              const [lq] = xq([qq]);
              if (void 0 !== lq)
                for (const xq of Oq) {
                  var mq;
                  Eq.debug(`Transporting item using ${xq.name}\n`, lq), xq.isBatched() ? (null === (mq = gq.batching) || void 0 === mq ? void 0 : mq.enabled) || xq.send([lq]) : xq.send(lq)
                }
            })(qq)
          }
        },
        isPaused: () => gq.paused,
        pause: () => {
          Eq.debug("Pausing transports"), null === Aq || void 0 === Aq || Aq.pause(), gq.paused = !0
        },
        remove: function() {
          Eq.debug("Removing transports");
          for (var qq = arguments.length, gq = new Array(qq), Yq = 0; Yq < qq; Yq++) gq[Yq] = arguments[Yq];
          gq.forEach((qq => {
            Eq.debug(`Removing "${qq.name}" transport`);
            const gq = Oq.indexOf(qq); - 1 !== gq ? Oq.splice(gq, 1) : Eq.warn(`Transport "${qq.name}" is not added`)
          }))
        },
        removeBeforeSendHooks: function() {
          for (var qq = arguments.length, gq = new Array(qq), Yq = 0; Yq < qq; Yq++) gq[Yq] = arguments[Yq];
          Eq.debug("Removing beforeSendHooks"), mq = mq.filter((qq => !gq.includes(qq)))
        },
        get transports() {
          return [...Oq]
        },
        unpause: () => {
          Eq.debug("Unpausing transports"), null === Aq || void 0 === Aq || Aq.start(), gq.paused = !1
        }
      }
    }

    function kO(qq, Eq) {
      if (Eq.preserveOriginalError)
        for (const gq of qq) "exception" === gq.type && delete gq.payload.originalError;
      return qq
    }
    let RO = DE;

    function UO(qq) {
      var Eq;
      return RO = null !== (Eq = qq.unpatchedConsole) && void 0 !== Eq ? Eq : RO, RO
    }
    let FO, sO = sE;

    function XO(qq, Eq) {
      return sO = vO(qq, Eq.internalLoggerLevel), sO
    }

    function wO(qq) {
      let {
        internalLogger: Eq,
        config: gq,
        metas: Yq,
        transports: lq,
        tracesApi: Oq,
        userActionsApi: mq
      } = qq;
      var xq;
      Eq.debug("Initializing exceptions API");
      let Aq = null;
      FO = null !== (xq = gq.parseStacktrace) && void 0 !== xq ? xq : FO;
      const cq = qq => {
          Eq.debug("Changing stacktrace parser"), FO = null !== qq && void 0 !== qq ? qq : FO
        },
        {
          ignoreErrors: uq = [],
          preserveOriginalError: Bq
        } = gq;
      return cq(gq.parseStacktrace), {
        changeStacktraceParser: cq,
        getStacktraceParser: () => FO,
        pushError: function(qq) {
          let {
            skipDedupe: xq,
            stackFrames: cq,
            type: Wq,
            context: Nq,
            spanContext: aq,
            timestampOverwriteMs: Vq,
            originalError: dq,
            fingerprint: jq,
            fatal: Hq
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (! function(qq, Eq) {
              const {
                message: gq,
                name: Yq,
                stack: lq
              } = Eq;
              return Oq = qq, mq = gq + " " + Yq + " " + lq, Oq.some((qq => yq(qq) ? mq.includes(qq) : !!mq.match(qq)));
              var Oq, mq
            }(uq, null !== dq && void 0 !== dq ? dq : qq)) try {
            var oq, Pq;
            if (!JE(Yq).shouldCapture()) return;
            const uq = SE(eE(eE({}, function(qq) {
                let Eq = qq.cause;
                pq(Eq) ? Eq = qq.cause.toString() : null !== Eq && (nq(qq.cause) || iq(qq.cause)) ? Eq = zE(qq.cause) : null != Eq && (Eq = qq.cause.toString());
                return null == Eq ? {} : {
                  cause: Eq
                }
              }(null !== dq && void 0 !== dq ? dq : qq)), null !== Nq && void 0 !== Nq ? Nq : {})),
              yq = eE(eE(eE(eE({
                type: Wq || qq.name || "Error",
                value: qq.message,
                timestamp: Vq ? VE(Vq) : aE(),
                trace: aq ? {
                  trace_id: aq.traceId,
                  span_id: aq.spanId
                } : Oq.getTraceContext()
              }, Xq(uq) ? {} : {
                context: uq
              }), Bq ? {
                originalError: dq
              } : {}), jq ? {
                fingerprint: jq
              } : {}), void 0 !== Hq ? {
                fatal: Hq
              } : {});
            cq = null !== (oq = cq) && void 0 !== oq ? oq : qq.stack ? null === FO || void 0 === FO ? void 0 : FO(qq).frames : void 0, (null === cq || void 0 === cq ? void 0 : cq.length) && (yq.stacktrace = {
              frames: cq
            });
            const tq = {
              type: yq.type,
              value: yq.value,
              stacktrace: yq.stacktrace,
              context: yq.context,
              fingerprint: yq.fingerprint,
              fatal: null !== (Pq = yq.fatal) && void 0 !== Pq && Pq
            };
            if (!xq && gq.dedupe && !Qq(Aq) && HE(tq, Aq)) return void Eq.debug("Skipping error push because it is the same as the last one\n", yq);
            const rq = Aq,
              vq = SO(Yq);
            if (Aq !== rq && !xq && gq.dedupe && HE(tq, Aq)) return;
            Aq = tq;
            const hq = {
              meta: vq,
              payload: yq,
              type: "exception"
            };
            Eq.debug("Pushing exception\n", hq), yl(mq.getActiveUserAction(), hq) || lq.execute(hq)
          } catch (tq) {
            Eq.error("Error pushing event", tq)
          }
        }
      }
    }

    function KO(qq, Eq, gq, Yq, lq) {
      Eq.debug("Initializing API");
      let Oq = null;
      const mq = function(qq) {
          let {
            transports: Eq,
            internalLogger: gq,
            config: Yq,
            pushEvent: lq
          } = qq;
          var Oq;
          const mq = null === (Oq = Yq.userActionsInstrumentation) || void 0 === Oq ? void 0 : Oq.excludeItem;
          let xq;
          const Aq = () => xq;
          return {
            startUserAction: (qq, Yq, Oq) => {
              if (void 0 === Aq()) {
                const gq = new Pl({
                  name: qq,
                  transports: Eq,
                  attributes: Yq,
                  trigger: (null === Oq || void 0 === Oq ? void 0 : Oq.triggerName) || "faroApiCall",
                  importance: (null === Oq || void 0 === Oq ? void 0 : Oq.importance) || Hl.Normal,
                  trackUserActionsExcludeItem: mq,
                  pushEvent: lq
                });
                return gq.filter((qq => [3, 2].includes(qq))).first().subscribe((() => {
                  xq = void 0
                })), Ql.notify({
                  type: jl,
                  userAction: gq,
                  initialActivityTimeout: null === Oq || void 0 === Oq ? void 0 : Oq.initialActivityTimeout
                }), xq = gq, xq
              }
              gq.error("Attempted to create a new user action while one is already running. This is not possible.")
            },
            getActiveUserAction: Aq
          }
        }({
          transports: lq,
          config: gq,
          internalLogger: Eq,
          pushEvent: (qq, gq, Yq, lq) => {
            Oq ? Oq(qq, gq, Yq, lq) : Eq.warn("pushEventImpl is not initialized. Event dropped:", {
              name: qq,
              attributes: gq,
              domain: Yq,
              options: lq
            })
          }
        }),
        xq = function(qq, Eq, gq, Yq, lq) {
          let Oq;
          return Eq.debug("Initializing traces API"), {
            getOTEL: () => Oq,
            getTraceContext: () => {
              const qq = null === Oq || void 0 === Oq ? void 0 : Oq.trace.getSpanContext(Oq.context.active());
              return qq ? {
                trace_id: qq.traceId,
                span_id: qq.spanId
              } : void 0
            },
            initOTEL: (qq, gq) => {
              Eq.debug("Initializing OpenTelemetry"), Oq = {
                trace: qq,
                context: gq
              }
            },
            isOTELInitialized: () => !!Oq,
            pushTraces: qq => {
              try {
                if (!JE(Yq).shouldCapture()) return;
                const gq = {
                  type: "trace",
                  payload: qq,
                  meta: SO(Yq)
                };
                Eq.debug("Pushing trace\n", gq), lq.execute(gq)
              } catch (gq) {
                Eq.error("Error pushing trace\n", gq)
              }
            }
          }
        }(0, Eq, 0, Yq, lq),
        Aq = {
          unpatchedConsole: qq,
          internalLogger: Eq,
          userActionsApi: mq,
          config: gq,
          metas: Yq,
          transports: lq,
          tracesApi: xq
        },
        cq = function(qq) {
          let {
            internalLogger: Eq,
            config: gq,
            metas: Yq,
            transports: lq,
            tracesApi: Oq,
            userActionsApi: mq
          } = qq, xq = null;
          return {
            pushEvent: function(qq, Aq, cq) {
              let {
                skipDedupe: uq,
                spanContext: Bq,
                timestampOverwriteMs: Wq,
                customPayloadTransformer: Nq = qq => qq
              } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              try {
                if (!JE(Yq).shouldCapture()) return;
                const aq = SE(Aq),
                  Vq = Nq({
                    name: qq,
                    domain: null !== cq && void 0 !== cq ? cq : gq.eventDomain,
                    attributes: Xq(aq) ? void 0 : aq,
                    timestamp: Wq ? VE(Wq) : aE(),
                    trace: Bq ? {
                      trace_id: Bq.traceId,
                      span_id: Bq.spanId
                    } : Oq.getTraceContext()
                  }),
                  dq = {
                    name: Vq.name,
                    attributes: Vq.attributes,
                    domain: Vq.domain
                  };
                if (!uq && gq.dedupe && !Qq(xq) && HE(dq, xq)) return void Eq.debug("Skipping event push because it is the same as the last one\n", Vq);
                const jq = xq,
                  Hq = SO(Yq);
                if (xq !== jq && !uq && gq.dedupe && HE(dq, xq)) return;
                xq = dq;
                const oq = {
                  meta: Hq,
                  payload: Vq,
                  type: "event"
                };
                Eq.debug("Pushing event\n", oq), yl(mq.getActiveUserAction(), oq) || lq.execute(oq)
              } catch (aq) {
                Eq.error("Error pushing event", aq)
              }
            }
          }
        }(Aq);
      return Oq = cq.pushEvent, eE(eE(eE(eE(eE(eE(eE({}, xq), wO(Aq)), function(qq) {
        let Eq, gq, Yq, lq, {
          internalLogger: Oq,
          metas: mq
        } = qq;
        Oq.debug("Initializing meta API");
        const xq = qq => {
            gq && mq.remove(gq), gq = {
              user: qq
            }, mq.add(gq)
          },
          Aq = (qq, gq) => {
            var Yq;
            const lq = null === gq || void 0 === gq ? void 0 : gq.overrides,
              Oq = lq ? {
                overrides: eE(eE({}, null === Eq || void 0 === Eq || null === (Yq = Eq.session) || void 0 === Yq ? void 0 : Yq.overrides), lq)
              } : {};
            Eq && mq.remove(Eq), Eq = {
              session: eE(eE({}, Xq(qq) ? void 0 : qq), Oq)
            }, mq.add(Eq)
          },
          cq = (qq, Eq) => {
            JE(mq).notifySessionUpdate({
              type: "replace",
              session: qq,
              overrides: null === Eq || void 0 === Eq ? void 0 : Eq.overrides
            }), Aq(qq, Eq)
          },
          uq = () => mq.value.session,
          Bq = () => mq.value.page;
        return {
          setUser: xq,
          resetUser: xq,
          setSession: cq,
          resetSession: cq,
          getSession: uq,
          setView: (qq, Eq) => {
            var gq;
            if ((null === Eq || void 0 === Eq ? void 0 : Eq.overrides) && (JE(mq).notifySessionUpdate({
                type: "overrides",
                overrides: Eq.overrides
              }), Aq(uq(), {
                overrides: Eq.overrides
              })), (null === Yq || void 0 === Yq || null === (gq = Yq.view) || void 0 === gq ? void 0 : gq.name) === (null === qq || void 0 === qq ? void 0 : qq.name)) return;
            const lq = Yq;
            Yq = {
              view: qq
            }, mq.add(Yq), lq && mq.remove(lq)
          },
          getView: () => mq.value.view,
          setPage: qq => {
            var Eq;
            const gq = yq(qq) ? eE(eE({}, null !== (Eq = null === lq || void 0 === lq ? void 0 : lq.page) && void 0 !== Eq ? Eq : Bq()), {}, {
              id: qq
            }) : qq;
            lq && mq.remove(lq), lq = {
              page: gq
            }, mq.add(lq)
          },
          getPage: Bq
        }
      }(Aq)), function(qq) {
        let {
          internalLogger: Eq,
          config: gq,
          metas: Yq,
          transports: lq,
          tracesApi: Oq,
          userActionsApi: mq
        } = qq;
        var xq;
        Eq.debug("Initializing logs API");
        let Aq = null;
        const cq = null !== (xq = gq.logArgsSerializer) && void 0 !== xq ? xq : Zg;
        return {
          pushLog: function(qq) {
            let {
              context: xq,
              level: uq,
              skipDedupe: Bq,
              spanContext: Wq,
              timestampOverwriteMs: Nq
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!JE(Yq).shouldCapture()) return;
              const aq = SE(xq),
                Vq = {
                  message: cq(qq),
                  level: null !== uq && void 0 !== uq ? uq : "log",
                  context: Xq(aq) ? void 0 : aq,
                  timestamp: Nq ? VE(Nq) : aE(),
                  trace: Wq ? {
                    trace_id: Wq.traceId,
                    span_id: Wq.spanId
                  } : Oq.getTraceContext()
                },
                dq = {
                  message: Vq.message,
                  level: Vq.level,
                  context: Vq.context
                };
              if (!Bq && gq.dedupe && !Qq(Aq) && HE(dq, Aq)) return void Eq.debug("Skipping log push because it is the same as the last one\n", Vq);
              const jq = Aq,
                Hq = SO(Yq);
              if (Aq !== jq && !Bq && gq.dedupe && HE(dq, Aq)) return;
              Aq = dq;
              const oq = {
                type: "log",
                payload: Vq,
                meta: Hq
              };
              Eq.debug("Pushing log\n", oq), yl(mq.getActiveUserAction(), oq) || lq.execute(oq)
            } catch (aq) {
              Eq.error("Error pushing log\n", aq)
            }
          }
        }
      }(Aq)), function(qq) {
        let {
          internalLogger: Eq,
          config: gq,
          metas: Yq,
          transports: lq,
          tracesApi: Oq,
          userActionsApi: mq
        } = qq;
        Eq.debug("Initializing measurements API");
        let xq = null;
        return {
          pushMeasurement: function(qq) {
            let {
              skipDedupe: Aq,
              context: cq,
              spanContext: uq,
              timestampOverwriteMs: Bq
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!JE(Yq).shouldCapture()) return;
              const Wq = SE(cq),
                Nq = eE(eE({}, qq), {}, {
                  trace: uq ? {
                    trace_id: uq.traceId,
                    span_id: uq.spanId
                  } : Oq.getTraceContext(),
                  timestamp: Bq ? VE(Bq) : aE(),
                  context: Xq(Wq) ? void 0 : Wq
                }),
                aq = {
                  type: Nq.type,
                  values: Nq.values,
                  context: Nq.context
                };
              if (!Aq && gq.dedupe && !Qq(xq) && HE(aq, xq)) return void Eq.debug("Skipping measurement push because it is the same as the last one\n", Nq);
              const Vq = xq,
                dq = SO(Yq);
              if (xq !== Vq && !Aq && gq.dedupe && HE(aq, xq)) return;
              xq = aq;
              const jq = {
                type: "measurement",
                payload: Nq,
                meta: dq
              };
              Eq.debug("Pushing measurement\n", jq), yl(mq.getActiveUserAction(), jq) || lq.execute(jq)
            } catch (Wq) {
              Eq.error("Error pushing measurement\n", Wq)
            }
          }
        }
      }(Aq)), cq), mq)
    }

    function CO(qq) {
      const Eq = UO(qq),
        gq = XO(Eq, qq);
      if (aq() && !qq.isolate) return void gq.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
      gq.debug("Initializing");
      const Yq = function(qq, Eq) {
          let gq, Yq = [],
            lq = [],
            Oq = [],
            mq = 0,
            xq = 0;
          const Aq = () => Yq.reduce(((qq, Eq) => Object.assign(qq, bq(Eq) ? Eq() : Eq)), {}),
            cq = () => {
              if (lq.length) {
                const qq = Aq();
                lq.forEach((Eq => Eq(qq)))
              }
            };
          return {
            add: function() {
              for (var qq = arguments.length, gq = new Array(qq), lq = 0; lq < qq; lq++) gq[lq] = arguments[lq];
              Eq.debug("Adding metas\n", gq), Yq.push(...gq), cq()
            },
            remove: function() {
              for (var qq = arguments.length, gq = new Array(qq), lq = 0; lq < qq; lq++) gq[lq] = arguments[lq];
              Eq.debug("Removing metas\n", gq), Yq = Yq.filter((qq => !gq.includes(qq))), cq()
            },
            addListener: qq => {
              Eq.debug("Adding metas listener\n", qq), lq.push(qq)
            },
            removeListener: qq => {
              Eq.debug("Removing metas listener\n", qq), lq = lq.filter((Eq => Eq !== qq))
            },
            capture: qq => {
              var Eq;
              const Yq = void 0 !== gq,
                lq = null !== (Eq = gq) && void 0 !== Eq ? Eq : Oq;
              Yq || (gq = lq, mq = 0, xq = lq.length);
              try {
                for (; mq < xq;) {
                  const qq = lq[mq++];
                  null === qq || void 0 === qq || qq()
                }
                const Eq = zO(Aq());
                return null === qq || void 0 === qq || qq(), Eq
              } finally {
                Yq || (gq = void 0)
              }
            },
            addCaptureListener: qq => {
              Oq.push(qq)
            },
            removeCaptureListener: qq => {
              Oq = Oq.filter((Eq => Eq !== qq))
            },
            get value() {
              return Aq()
            }
          }
        }(0, gq),
        lq = JO(Eq, gq, qq, Yq),
        Oq = KO(Eq, gq, qq, Yq, lq),
        mq = function(qq, Eq, gq, Yq, lq, Oq) {
          Eq.debug("Initializing instrumentations");
          const mq = [];
          return {
            add: function() {
              Eq.debug("Adding instrumentations");
              for (var xq = arguments.length, Aq = new Array(xq), cq = 0; cq < xq; cq++) Aq[cq] = arguments[cq];
              Aq.forEach((xq => {
                Eq.debug(`Adding "${xq.name}" instrumentation`), mq.some((qq => qq.name === xq.name)) ? Eq.warn(`Instrumentation ${xq.name} is already added`) : (xq.unpatchedConsole = qq, xq.internalLogger = Eq, xq.config = gq, xq.metas = Yq, xq.transports = lq, xq.api = Oq, mq.push(xq), xq.initialize())
              }))
            },
            get instrumentations() {
              return [...mq]
            },
            remove: function() {
              Eq.debug("Removing instrumentations");
              for (var qq = arguments.length, gq = new Array(qq), Yq = 0; Yq < qq; Yq++) gq[Yq] = arguments[Yq];
              gq.forEach((qq => {
                var gq, Yq;
                Eq.debug(`Removing "${qq.name}" instrumentation`);
                const lq = mq.reduce(((Eq, gq, Yq) => null === Eq && gq.name === qq.name ? Yq : null), null);
                null !== lq ? (null === (gq = (Yq = mq[lq]).destroy) || void 0 === gq || gq.call(Yq), mq.splice(lq, 1)) : Eq.warn(`Instrumentation "${qq.name}" is not added`)
              }))
            }
          }
        }(Eq, gq, qq, Yq, lq, Oq),
        xq = dq(Eq, gq, qq, Yq, lq, Oq, mq);
      return GO(xq),
        function(qq) {
          qq.transports.add(...qq.config.transports), qq.transports.addBeforeSendHooks(qq.config.beforeSend)
        }(xq),
        function(qq) {
          qq.instrumentations.add(...qq.config.instrumentations)
        }(xq), xq
    }

    function IO(qq) {
      const Eq = iO(qq);
      if (Eq) return CO(Eq)
    }
  },
  6578: function(qq, Eq, gq) {
    var Yq;
    ! function(lq, Oq) {
      var mq = "function",
        xq = "undefined",
        Aq = "object",
        cq = "string",
        uq = "major",
        Bq = "model",
        Wq = "name",
        Nq = "type",
        aq = "vendor",
        Vq = "version",
        dq = "architecture",
        jq = "console",
        Hq = "mobile",
        oq = "tablet",
        Pq = "smarttv",
        Qq = "wearable",
        yq = "embedded",
        tq = "Amazon",
        rq = "Apple",
        vq = "ASUS",
        hq = "BlackBerry",
        nq = "Browser",
        bq = "Chrome",
        iq = "Firefox",
        Zq = "Google",
        fq = "Honor",
        Mq = "Huawei",
        Tq = "LG",
        zq = "Microsoft",
        Sq = "Motorola",
        pq = "Nvidia",
        Gq = "OnePlus",
        Lq = "Opera",
        Jq = "OPPO",
        kq = "Samsung",
        Rq = "Sharp",
        Uq = "Sony",
        Fq = "Xiaomi",
        sq = "Zebra",
        Xq = "Facebook",
        wq = "Chromium OS",
        Kq = "Mac OS",
        Cq = " Browser",
        Iq = function(qq) {
          for (var Eq = {}, gq = 0; gq < qq.length; gq++) Eq[qq[gq].toUpperCase()] = qq[gq];
          return Eq
        },
        eq = function(qq, Eq) {
          return typeof qq === cq && -1 !== Dq(Eq).indexOf(Dq(qq))
        },
        Dq = function(qq) {
          return qq.toLowerCase()
        },
        qE = function(qq, Eq) {
          if (typeof qq === cq) return qq = qq.replace(/^\s\s*/, ""), typeof Eq === xq ? qq : qq.substring(0, 500)
        },
        EE = function(qq, Eq) {
          for (var gq, Yq, lq, xq, cq, uq, Bq = 0; Bq < Eq.length && !cq;) {
            var Wq = Eq[Bq],
              Nq = Eq[Bq + 1];
            for (gq = Yq = 0; gq < Wq.length && !cq && Wq[gq];)
              if (cq = Wq[gq++].exec(qq))
                for (lq = 0; lq < Nq.length; lq++) uq = cq[++Yq], typeof(xq = Nq[lq]) === Aq && xq.length > 0 ? 2 === xq.length ? typeof xq[1] == mq ? this[xq[0]] = xq[1].call(this, uq) : this[xq[0]] = xq[1] : 3 === xq.length ? typeof xq[1] !== mq || xq[1].exec && xq[1].test ? this[xq[0]] = uq ? uq.replace(xq[1], xq[2]) : Oq : this[xq[0]] = uq ? xq[1].call(this, uq, xq[2]) : Oq : 4 === xq.length && (this[xq[0]] = uq ? xq[3].call(this, uq.replace(xq[1], xq[2])) : Oq) : this[xq] = uq || Oq;
            Bq += 2
          }
        },
        gE = function(qq, Eq) {
          for (var gq in Eq)
            if (typeof Eq[gq] === Aq && Eq[gq].length > 0) {
              for (var Yq = 0; Yq < Eq[gq].length; Yq++)
                if (eq(Eq[gq][Yq], qq)) return "?" === gq ? Oq : gq
            } else if (eq(Eq[gq], qq)) return "?" === gq ? Oq : gq;
          return Eq.hasOwnProperty("*") ? Eq["*"] : qq
        },
        YE = {
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
        lE = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [Vq, [Wq, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [Vq, [Wq, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [Wq, Vq],
            [/opios[\/ ]+([\w\.]+)/i],
            [Vq, [Wq, Lq + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [Vq, [Wq, Lq + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [Vq, [Wq, Lq]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [Vq, [Wq, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [Vq, [Wq, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
            [Wq, Vq],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [Vq, [Wq, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [Vq, [Wq, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [Vq, [Wq, "UC" + nq]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [Vq, [Wq, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [Vq, [Wq, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [Vq, [Wq, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [Vq, [Wq, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [Vq, [Wq, "Smart Lenovo " + nq]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [Wq, /(.+)/, "$1 Secure " + nq], Vq
            ],
            [/\bfocus\/([\w\.]+)/i],
            [Vq, [Wq, iq + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [Vq, [Wq, Lq + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [Vq, [Wq, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [Vq, [Wq, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [Vq, [Wq, Lq + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [Vq, [Wq, "MIUI" + Cq]],
            [/fxios\/([\w\.-]+)/i],
            [Vq, [Wq, iq]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [Vq, [Wq, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [Wq, /(.+)/, "$1Browser"], Vq
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [Wq, /(.+)/, "$1" + Cq], Vq
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [Vq, [Wq, kq + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [Vq, [Wq, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [Wq, "Sogou Mobile"], Vq
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [Wq, Vq],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [Wq],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [Vq, Wq],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [Wq, Xq], Vq
            ],
            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
            [Wq, Vq],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [Vq, [Wq, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [Vq, [Wq, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [Vq, [Wq, bq + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [Wq, bq + " WebView"], Vq
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [Vq, [Wq, "Android " + nq]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [Wq, Vq],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [Vq, [Wq, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [Vq, Wq],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [Wq, [Vq, gE, {
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
            [Wq, Vq],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [Wq, "Netscape"], Vq
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [Wq, Vq],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [Vq, [Wq, iq + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [Wq, [Vq, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [Wq, [Vq, /master.|lts./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [dq, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [dq, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [dq, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [dq, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [dq, "arm"]
            ],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [
              [dq, /ower/, "", Dq]
            ],
            [/ sun4\w[;\)]/i],
            [
              [dq, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
            [
              [dq, Dq]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [Bq, [aq, kq],
              [Nq, oq]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
            [Bq, [aq, kq],
              [Nq, Hq]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [Bq, [aq, rq],
              [Nq, Hq]
            ],
            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
            [Bq, [aq, rq],
              [Nq, oq]
            ],
            [/(macintosh);/i],
            [Bq, [aq, rq]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [Bq, [aq, Rq],
              [Nq, Hq]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [Bq, [aq, fq],
              [Nq, oq]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [Bq, [aq, fq],
              [Nq, Hq]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [Bq, [aq, Mq],
              [Nq, oq]
            ],
            [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
            [Bq, [aq, Mq],
              [Nq, Hq]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [Bq, /_/g, " "],
              [aq, Fq],
              [Nq, oq]
            ],
            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [Bq, /_/g, " "],
              [aq, Fq],
              [Nq, Hq]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [Bq, [aq, Jq],
              [Nq, Hq]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [Bq, [aq, gE, {
                OnePlus: ["304", "403", "203"],
                "*": Jq
              }],
              [Nq, oq]
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [Bq, [aq, "Vivo"],
              [Nq, Hq]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [Bq, [aq, "Realme"],
              [Nq, Hq]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
            [Bq, [aq, Sq],
              [Nq, Hq]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [Bq, [aq, Sq],
              [Nq, oq]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [Bq, [aq, Tq],
              [Nq, oq]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
            [Bq, [aq, Tq],
              [Nq, Hq]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [Bq, [aq, "Lenovo"],
              [Nq, oq]
            ],
            [/(nokia) (t[12][01])/i],
            [aq, Bq, [Nq, oq]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
            [
              [Bq, /_/g, " "],
              [Nq, Hq],
              [aq, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [Bq, [aq, Zq],
              [Nq, oq]
            ],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [Bq, [aq, Zq],
              [Nq, Hq]
            ],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [Bq, [aq, Uq],
              [Nq, Hq]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [Bq, "Xperia Tablet"],
              [aq, Uq],
              [Nq, oq]
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [Bq, [aq, Gq],
              [Nq, Hq]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [Bq, [aq, tq],
              [Nq, oq]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [Bq, /(.+)/g, "Fire Phone $1"],
              [aq, tq],
              [Nq, Hq]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [Bq, aq, [Nq, oq]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [Bq, [aq, hq],
              [Nq, Hq]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [Bq, [aq, vq],
              [Nq, oq]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [Bq, [aq, vq],
              [Nq, Hq]
            ],
            [/(nexus 9)/i],
            [Bq, [aq, "HTC"],
              [Nq, oq]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [aq, [Bq, /_/g, " "],
              [Nq, Hq]
            ],
            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
            [Bq, [aq, "TCL"],
              [Nq, oq]
            ],
            [/(itel) ((\w+))/i],
            [
              [aq, Dq], Bq, [Nq, gE, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [Bq, [aq, "Acer"],
              [Nq, oq]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [Bq, [aq, "Meizu"],
              [Nq, Hq]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [Bq, [aq, "Ulefone"],
              [Nq, Hq]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [Bq, [aq, "Energizer"],
              [Nq, Hq]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [Bq, [aq, "Cat"],
              [Nq, Hq]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [Bq, [aq, "Smartfren"],
              [Nq, Hq]
            ],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [Bq, [aq, "Nothing"],
              [Nq, Hq]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [Bq, [aq, "Archos"],
              [Nq, oq]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [Bq, [aq, "Archos"],
              [Nq, Hq]
            ],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [aq, Bq, [Nq, oq]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
            [aq, Bq, [Nq, Hq]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [aq, Bq, [Nq, oq]],
            [/(surface duo)/i],
            [Bq, [aq, zq],
              [Nq, oq]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [Bq, [aq, "Fairphone"],
              [Nq, Hq]
            ],
            [/(u304aa)/i],
            [Bq, [aq, "AT&T"],
              [Nq, Hq]
            ],
            [/\bsie-(\w*)/i],
            [Bq, [aq, "Siemens"],
              [Nq, Hq]
            ],
            [/\b(rct\w+) b/i],
            [Bq, [aq, "RCA"],
              [Nq, oq]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [Bq, [aq, "Dell"],
              [Nq, oq]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [Bq, [aq, "Verizon"],
              [Nq, oq]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [Bq, [aq, "Barnes & Noble"],
              [Nq, oq]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [Bq, [aq, "NuVision"],
              [Nq, oq]
            ],
            [/\b(k88) b/i],
            [Bq, [aq, "ZTE"],
              [Nq, oq]
            ],
            [/\b(nx\d{3}j) b/i],
            [Bq, [aq, "ZTE"],
              [Nq, Hq]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [Bq, [aq, "Swiss"],
              [Nq, Hq]
            ],
            [/\b(zur\d{3}) b/i],
            [Bq, [aq, "Swiss"],
              [Nq, oq]
            ],
            [/\b((zeki)?tb.*\b) b/i],
            [Bq, [aq, "Zeki"],
              [Nq, oq]
            ],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [
              [aq, "Dragon Touch"], Bq, [Nq, oq]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [Bq, [aq, "Insignia"],
              [Nq, oq]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [Bq, [aq, "NextBook"],
              [Nq, oq]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
              [aq, "Voice"], Bq, [Nq, Hq]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
              [aq, "LvTel"], Bq, [Nq, Hq]
            ],
            [/\b(ph-1) /i],
            [Bq, [aq, "Essential"],
              [Nq, Hq]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [Bq, [aq, "Envizen"],
              [Nq, oq]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [Bq, [aq, "MachSpeed"],
              [Nq, oq]
            ],
            [/\btu_(1491) b/i],
            [Bq, [aq, "Rotor"],
              [Nq, oq]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [Bq, [aq, pq],
              [Nq, oq]
            ],
            [/(sprint) (\w+)/i],
            [aq, Bq, [Nq, Hq]],
            [/(kin\.[onetw]{3})/i],
            [
              [Bq, /\./g, " "],
              [aq, zq],
              [Nq, Hq]
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [Bq, [aq, sq],
              [Nq, oq]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [Bq, [aq, sq],
              [Nq, Hq]
            ],
            [/smart-tv.+(samsung)/i],
            [aq, [Nq, Pq]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [Bq, /^/, "SmartTV"],
              [aq, kq],
              [Nq, Pq]
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [aq, Tq],
              [Nq, Pq]
            ],
            [/(apple) ?tv/i],
            [aq, [Bq, rq + " TV"],
              [Nq, Pq]
            ],
            [/crkey/i],
            [
              [Bq, bq + "cast"],
              [aq, Zq],
              [Nq, Pq]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [Bq, [aq, tq],
              [Nq, Pq]
            ],
            [/(shield \w+ tv)/i],
            [Bq, [aq, pq],
              [Nq, Pq]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [Bq, [aq, Rq],
              [Nq, Pq]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [Bq, [aq, Uq],
              [Nq, Pq]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [Bq, [aq, Fq],
              [Nq, Pq]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [aq, Bq, [Nq, Pq]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [aq, qE],
              [Bq, qE],
              [Nq, Pq]
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [Bq, [Nq, Pq]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [
              [Nq, Pq]
            ],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [aq, Bq, [Nq, jq]],
            [/droid.+; (shield)( bui|\))/i],
            [Bq, [aq, pq],
              [Nq, jq]
            ],
            [/(playstation \w+)/i],
            [Bq, [aq, Uq],
              [Nq, jq]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [Bq, [aq, zq],
              [Nq, jq]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [Bq, [aq, kq],
              [Nq, Qq]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [aq, Bq, [Nq, Qq]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [Bq, [aq, Jq],
              [Nq, Qq]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [Bq, [aq, rq],
              [Nq, Qq]
            ],
            [/(opwwe\d{3})/i],
            [Bq, [aq, Gq],
              [Nq, Qq]
            ],
            [/(moto 360)/i],
            [Bq, [aq, Sq],
              [Nq, Qq]
            ],
            [/(smartwatch 3)/i],
            [Bq, [aq, Uq],
              [Nq, Qq]
            ],
            [/(g watch r)/i],
            [Bq, [aq, Tq],
              [Nq, Qq]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [Bq, [aq, sq],
              [Nq, Qq]
            ],
            [/droid.+; (glass) \d/i],
            [Bq, [aq, Zq],
              [Nq, Qq]
            ],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [aq, Bq, [Nq, Qq]],
            [/; (quest( \d| pro)?)/i],
            [Bq, [aq, Xq],
              [Nq, Qq]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [aq, [Nq, yq]],
            [/(aeobc)\b/i],
            [Bq, [aq, tq],
              [Nq, yq]
            ],
            [/(homepod).+mac os/i],
            [Bq, [aq, rq],
              [Nq, yq]
            ],
            [/windows iot/i],
            [
              [Nq, yq]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [Bq, [Nq, Hq]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [Bq, [Nq, oq]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [Nq, oq]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [Nq, Hq]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [Bq, [aq, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [Vq, [Wq, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [Wq, Vq],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [Vq, [Wq, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [Wq, Vq],
            [/ladybird\//i],
            [
              [Wq, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [Vq, Wq]
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [Wq, Vq],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [Wq, [Vq, gE, YE]],
            [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [Vq, gE, YE],
              [Wq, "Windows"]
            ],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [Vq, /_/g, "."],
              [Wq, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
              [Wq, Kq],
              [Vq, /_/g, "."]
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [Vq, Wq],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [Wq, /(.+)/, "$1 Touch"], Vq
            ],
            [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
            [Wq, Vq],
            [/\(bb(10);/i],
            [Vq, [Wq, hq]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [Vq, [Wq, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [Vq, [Wq, iq + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [Vq, [Wq, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [Vq, [Wq, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [Vq, [Wq, bq + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [Wq, wq], Vq
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
            [Wq, Vq],
            [/(sunos) ?([\w\.\d]*)/i],
            [
              [Wq, "Solaris"], Vq
            ],
            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [Wq, Vq]
          ]
        },
        OE = function(qq, Eq) {
          if (typeof qq === Aq && (Eq = qq, qq = Oq), !(this instanceof OE)) return new OE(qq, Eq).getResult();
          var gq = typeof lq !== xq && lq.navigator ? lq.navigator : Oq,
            Yq = qq || (gq && gq.userAgent ? gq.userAgent : ""),
            jq = gq && gq.userAgentData ? gq.userAgentData : Oq,
            Pq = Eq ? function(qq, Eq) {
              var gq = {};
              for (var Yq in qq) Eq[Yq] && Eq[Yq].length % 2 === 0 ? gq[Yq] = Eq[Yq].concat(qq[Yq]) : gq[Yq] = qq[Yq];
              return gq
            }(lE, Eq) : lE,
            Qq = gq && gq.userAgent == Yq;
          return this.getBrowser = function() {
            var qq, Eq = {};
            return Eq[Wq] = Oq, Eq[Vq] = Oq, EE.call(Eq, Yq, Pq.browser), Eq[uq] = typeof(qq = Eq[Vq]) === cq ? qq.replace(/[^\d\.]/g, "").split(".")[0] : Oq, Qq && gq && gq.brave && typeof gq.brave.isBrave == mq && (Eq[Wq] = "Brave"), Eq
          }, this.getCPU = function() {
            var qq = {};
            return qq[dq] = Oq, EE.call(qq, Yq, Pq.cpu), qq
          }, this.getDevice = function() {
            var qq = {};
            return qq[aq] = Oq, qq[Bq] = Oq, qq[Nq] = Oq, EE.call(qq, Yq, Pq.device), Qq && !qq[Nq] && jq && jq.mobile && (qq[Nq] = Hq), Qq && "Macintosh" == qq[Bq] && gq && typeof gq.standalone !== xq && gq.maxTouchPoints && gq.maxTouchPoints > 2 && (qq[Bq] = "iPad", qq[Nq] = oq), qq
          }, this.Ba = function() {
            var qq = {};
            return qq[Wq] = Oq, qq[Vq] = Oq, EE.call(qq, Yq, Pq.engine), qq
          }, this.getOS = function() {
            var qq = {};
            return qq[Wq] = Oq, qq[Vq] = Oq, EE.call(qq, Yq, Pq.os), Qq && !qq[Wq] && jq && jq.platform && "Unknown" != jq.platform && (qq[Wq] = jq.platform.replace(/chrome os/i, wq).replace(/macos/i, Kq)), qq
          }, this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.Ba(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function() {
            return Yq
          }, this.setUA = function(qq) {
            return Yq = typeof qq === cq && qq.length > 500 ? qE(qq, 500) : qq, this
          }, this.setUA(Yq), this
        };
      OE.VERSION = "1.0.41", OE.BROWSER = Iq([Wq, Vq, uq]), OE.CPU = Iq([dq]), OE.DEVICE = Iq([Bq, aq, Nq, jq, Hq, Pq, oq, Qq, yq]), OE.ENGINE = OE.OS = Iq([Wq, Vq]), typeof Eq !== xq ? (qq.exports && (Eq = qq.exports = OE), Eq.UAParser = OE) : gq.amdO ? (Yq = function() {
        return OE
      }.call(Eq, gq, Eq, qq)) === Oq || (qq.exports = Yq) : typeof lq !== xq && (lq.UAParser = OE);
      var mE = typeof lq !== xq && (lq.jQuery || lq.Zepto);
      if (mE && !mE.ua) {
        var xE = new OE;
        mE.ua = xE.getResult(), mE.ua.get = function() {
          return xE.getUA()
        }, mE.ua.set = function(qq) {
          xE.setUA(qq);
          var Eq = xE.getResult();
          for (var gq in Eq) mE.ua[gq] = Eq[gq]
        }
      }
    }("object" === typeof window ? window : this)
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);