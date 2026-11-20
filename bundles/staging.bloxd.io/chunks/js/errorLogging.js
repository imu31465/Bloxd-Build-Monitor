export const id = 31;
export const ids = [31];
export const modules = {
  6404: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      BaseExtension: () => vP,
      BaseInstrumentation: () => zP,
      BaseTransport: () => kS,
      CSPInstrumentation: () => YS,
      ConsoleInstrumentation: () => RP,
      ConsoleTransport: () => Pe,
      EVENT_CLICK: () => Gz,
      EVENT_NAVIGATION: () => mz,
      EVENT_ROUTE_CHANGE: () => Oz,
      EVENT_SESSION_EXTEND: () => Yz,
      EVENT_SESSION_RESUME: () => Fz,
      EVENT_SESSION_START: () => fz,
      EVENT_VIEW_CHANGED: () => jz,
      ErrorsInstrumentation: () => tP,
      FetchTransport: () => me,
      InternalLoggerLevel: () => Bz,
      LogLevel: () => GP,
      MAX_SESSION_PERSISTENCE_TIME: () => dv,
      NavigationInstrumentation: () => LS,
      Observable: () => cP,
      PerformanceInstrumentation: () => Eh,
      PersistentSessionsManager: () => Qz,
      SESSION_EXPIRATION_TIME: () => ev,
      SESSION_INACTIVITY_TIME: () => gv,
      STORAGE_KEY: () => Sv,
      SessionInstrumentation: () => hP,
      TransportItemType: () => XS,
      UserActionInstrumentation: () => FS,
      UserActionState: () => aS,
      VERSION: () => PP,
      ViewInstrumentation: () => IP,
      VolatileSessionsManager: () => Zz,
      WebVitalsInstrumentation: () => xh,
      allLogLevels: () => jP,
      browserMeta: () => ES,
      buildStackFrame: () => SP,
      captureMetas: () => Ie,
      createInternalLogger: () => ne,
      createPromiseBuffer: () => We,
      createSession: () => bS,
      deepEqual: () => cz,
      defaultEventDomain: () => hv,
      defaultExceptionType: () => nP,
      defaultGlobalObjectKey: () => Oe,
      defaultInternalLoggerLevel: () => Ez,
      defaultLogLevel: () => mP,
      faro: () => sv,
      genShortID: () => iz,
      getCurrentTimestamp: () => az,
      getDataFromSafariExtensions: () => WP,
      getIgnoreUrls: () => ov,
      getInternalFaroFromGlobalObject: () => Wv,
      getStackFramesFromError: () => aP,
      getTransportBody: () => ze,
      getUrlFromResource: () => rv,
      getWebInstrumentations: () => HS,
      globalObject: () => lv,
      initializeFaro: () => ke,
      internalGlobalObjectKey: () => Tv,
      isArray: () => Vv,
      isBoolean: () => nv,
      isDomError: () => Av,
      isDomException: () => Lv,
      isElement: () => Mv,
      isElementDefined: () => Hv,
      kw: () => Ev,
      isError: () => Qv,
      isErrorDefined: () => Iv,
      isErrorEvent: () => Zv,
      isEvent: () => qv,
      isEventDefined: () => tv,
      isFunction: () => Kv,
      isInstanceOf: () => Gv,
      isInt: () => Yv,
      isInternalFaroOnGlobalObject: () => av,
      isMap: () => Bv,
      isMapDefined: () => yv,
      isNull: () => jv,
      isNumber: () => Fv,
      isObject: () => Dv,
      isPrimitive: () => xv,
      isRegExp: () => Uv,
      isString: () => fv,
      isSymbol: () => Ov,
      isSyntheticEvent: () => Jv,
      isThenable: () => Rv,
      isToString: () => cv,
      isTypeof: () => iv,
      isUndefined: () => mv,
      makeCoreConfig: () => Ve,
      noop: () => yz,
      osMeta: () => oS,
      parseStacktrace: () => sP,
      sdkMeta: () => rS,
      setInternalFaroOnGlobalObject: () => wv,
      transportItemTypeToBodyKey: () => uS,
      unknownString: () => qP,
      userActionDataAttribute: () => oh,
      userActionTimeoutDataAttribute: () => bh
    });
    const hv = "browser",
      Sv = "com.grafana.faro.session",
      ev = 144e5,
      gv = 9e5,
      pv = 1e3,
      dv = gv,
      Nv = {
        enabled: !0,
        persistent: !1,
        maxSessionPersistenceTime: dv
      };
    const lv = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof Pv.g ? Pv.g : "undefined" !== typeof self ? self : void 0;
    const Tv = "_faroInternal";

    function Wv() {
      return lv[Tv]
    }

    function wv(vv) {
      vv.config.isolate ? vv.internalLogger.debug("Skipping registering internal Faro instance on global object") : (vv.internalLogger.debug("Registering internal Faro instance on global object"), Object.defineProperty(lv, Tv, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: vv
      }))
    }

    function av() {
      return Tv in lv
    }
    let sv = {
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

    function Cv(vv, zv, Pv, hv, Sv, ev, gv) {
      return zv.debug("Initializing Faro"), sv = {
          api: ev,
          config: Pv,
          instrumentations: gv,
          internalLogger: zv,
          metas: hv,
          pause: Sv.pause,
          transports: Sv,
          unpatchedConsole: vv,
          unpause: Sv.unpause
        }, wv(sv),
        function(vv) {
          if (vv.config.preventGlobalExposure) vv.internalLogger.debug("Skipping registering public Faro instance in the global scope");
          else {
            if (vv.internalLogger.debug(`Registering public faro reference in the global scope using "${vv.config.globalObjectKey}" key`), vv.config.globalObjectKey in lv) return void vv.internalLogger.warn(`Skipping global registration due to key "${vv.config.globalObjectKey}" being used already. Please set "globalObjectKey" to something else or set "preventGlobalExposure" to "true"`);
            Object.defineProperty(lv, vv.config.globalObjectKey, {
              configurable: !1,
              writable: !1,
              value: vv
            })
          }
        }(sv), sv
    }

    function iv(vv, zv) {
      return typeof vv === zv
    }

    function cv(vv, zv) {
      return Object.prototype.toString.call(vv) === `[object ${zv}]`
    }

    function Gv(vv, zv) {
      try {
        return vv instanceof zv
      } catch (Pv) {
        return !1
      }
    }
    const mv = vv => iv(vv, "undefined"),
      jv = vv => iv(vv, "null"),
      fv = vv => iv(vv, "string"),
      Fv = vv => iv(vv, "number") && !isNaN(vv) || iv(vv, "bigint"),
      Yv = vv => Fv(vv) && Number.isInteger(vv),
      nv = vv => iv(vv, "boolean"),
      Ov = vv => iv(vv, "symbol"),
      Dv = vv => !jv(vv) && iv(vv, "object"),
      Kv = vv => iv(vv, "function"),
      Vv = vv => cv(vv, "Array"),
      Uv = vv => cv(vv, "RegExp"),
      Rv = vv => Kv(null === vv || void 0 === vv ? void 0 : vv.then),
      xv = vv => !Dv(vv) && !Kv(vv),
      tv = "undefined" !== typeof Event,
      qv = vv => tv && Gv(vv, Event),
      Iv = "undefined" !== typeof Error,
      Qv = vv => Iv && Gv(vv, Error),
      Zv = vv => cv(vv, "ErrorEvent"),
      Av = vv => cv(vv, "DOMError"),
      Lv = vv => cv(vv, "DOMException"),
      Hv = "undefined" !== typeof Element,
      Mv = vv => Hv && Gv(vv, Element),
      yv = "undefined" !== typeof Map,
      Bv = vv => yv && Gv(vv, Map),
      Jv = vv => Dv(vv) && "nativeEvent" in vv && "preventDefault" in vv && "stopPropagation" in vv;

    function Ev(vv) {
      return null == vv || (Vv(vv) || fv(vv) ? 0 === vv.length : !!Dv(vv) && 0 === Object.keys(vv).length)
    }

    function ov() {
      return sv.transports.transports.flatMap((vv => vv.getIgnoreUrls()))
    }

    function bv() {
      let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return ov().some((zv => vv && null != vv.match(zv)))
    }

    function rv(vv) {
      return fv(vv) ? vv : vv instanceof URL ? vv.href : !Ev(vv) && Kv(null === vv || void 0 === vv ? void 0 : vv.toString) ? vv.toString() : void 0
    }
    const kv = "sessionStorage",
      Xv = "localStorage";

    function uv(vv) {
      try {
        let zv;
        zv = window[vv];
        const Pv = "__faro_storage_test__";
        return zv.setItem(Pv, Pv), zv.removeItem(Pv), !0
      } catch (Pv) {
        var zv;
        return null === (zv = sv.internalLogger) || void 0 === zv || zv.info(`Web storage of type ${vv} is not available. Reason: ${Pv}`), !1
      }
    }

    function vz(vv, zv) {
      return ez(zv) ? window[zv].getItem(vv) : null
    }

    function zz(vv, zv, Pv) {
      if (ez(Pv)) try {
        window[Pv].setItem(vv, zv)
      } catch (hv) {}
    }

    function Pz(vv, zv) {
      ez(zv) && window[zv].removeItem(vv)
    }
    const hz = uv(Xv),
      Sz = uv(kv);

    function ez(vv) {
      return vv === Xv ? hz : vv === kv && Sz
    }

    function gz(vv) {
      return gz = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, gz(vv)
    }

    function pz(vv) {
      var zv = function(vv, zv) {
        if ("object" != gz(vv) || !vv) return vv;
        var Pv = vv[Symbol.toPrimitive];
        if (void 0 !== Pv) {
          var hv = Pv.call(vv, zv || "default");
          if ("object" != gz(hv)) return hv;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zv ? String : Number)(vv)
      }(vv, "string");
      return "symbol" == gz(zv) ? zv : zv + ""
    }

    function dz(vv, zv, Pv) {
      return (zv = pz(zv)) in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }

    function Nz(vv, zv) {
      var Pv = Object.keys(vv);
      if (Object.getOwnPropertySymbols) {
        var hv = Object.getOwnPropertySymbols(vv);
        zv && (hv = hv.filter((function(zv) {
          return Object.getOwnPropertyDescriptor(vv, zv).enumerable
        }))), Pv.push.apply(Pv, hv)
      }
      return Pv
    }

    function lz(vv) {
      for (var zv = 1; zv < arguments.length; zv++) {
        var Pv = null != arguments[zv] ? arguments[zv] : {};
        zv % 2 ? Nz(Object(Pv), !0).forEach((function(zv) {
          dz(vv, zv, Pv[zv])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(vv, Object.getOwnPropertyDescriptors(Pv)) : Nz(Object(Pv)).forEach((function(zv) {
          Object.defineProperty(vv, zv, Object.getOwnPropertyDescriptor(Pv, zv))
        }))
      }
      return vv
    }

    function Tz() {
      let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sv;
      var zv, Pv, hv;
      const Sv = vv.config.sessionTracking,
        ev = null !== (zv = null !== (Pv = null === Sv || void 0 === Sv || null === (hv = Sv.sampler) || void 0 === hv ? void 0 : hv.call(Sv, {
          metas: vv.metas.value
        })) && void 0 !== Pv ? Pv : null === Sv || void 0 === Sv ? void 0 : Sv.samplingRate) && void 0 !== zv ? zv : 1,
        gv = "number" === typeof ev ? function(vv) {
          return Math.min(1, Math.max(0, vv))
        }(ev) : 0;
      if (!(gv > 0)) return !1;
      if (1 === gv) return !0;
      try {
        const vv = "undefined" !== typeof window ? window.crypto : void 0;
        if ("function" === typeof(null === vv || void 0 === vv ? void 0 : vv.getRandomValues)) {
          const zv = new Uint32Array(1);
          return vv.getRandomValues(zv), zv[0] / Math.pow(2, 32) < gv
        }
      } catch (pv) {}
      return Math.random() < gv
    }

    function Wz() {
      return Date.now()
    }

    function wz() {
      return "undefined" !== typeof performance && "function" === typeof performance.now ? performance.now() : Date.now()
    }

    function az() {
      return (new Date).toISOString()
    }

    function sz(vv) {
      return new Date(vv).toISOString()
    }
    const Cz = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

    function iz() {
      let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      const zv = new Uint32Array(vv),
        Pv = "undefined" !== typeof globalThis ? globalThis.crypto : void 0;
      if (null === Pv || void 0 === Pv ? void 0 : Pv.getRandomValues) Pv.getRandomValues(zv);
      else
        for (let Sv = 0; Sv < vv; Sv++) zv[Sv] = Math.floor(4294967296 * Math.random());
      let hv = "";
      for (let Sv = 0; Sv < vv; Sv++) hv += Cz[zv[Sv] % 59];
      return hv
    }

    function cz(vv, zv) {
      if (vv === zv) return !0;
      if (iv(vv, "number") && isNaN(vv)) return iv(zv, "number") && isNaN(zv);
      const Pv = Vv(vv),
        hv = Vv(zv);
      if (Pv !== hv) return !1;
      if (Pv && hv) {
        const Pv = vv.length;
        if (Pv !== zv.length) return !1;
        for (let hv = Pv; 0 !== hv--;)
          if (!cz(vv[hv], zv[hv])) return !1;
        return !0
      }
      const Sv = Dv(vv),
        ev = Dv(zv);
      if (Sv !== ev) return !1;
      if (vv && zv && Sv && ev) {
        const Pv = Object.keys(vv),
          hv = Object.keys(zv);
        if (Pv.length !== hv.length) return !1;
        for (let vv of Pv)
          if (!hv.includes(vv)) return !1;
        for (let Sv of Pv)
          if (!cz(vv[Sv], zv[Sv])) return !1;
        return !0
      }
      return !1
    }
    const Gz = "click",
      mz = "navigation",
      jz = "view_changed",
      fz = "session_start",
      Fz = "session_resume",
      Yz = "session_extend",
      nz = "service_name_override",
      Oz = "route_change";

    function Dz() {
      let {
        sessionId: vv,
        started: zv,
        lastActivity: Pv,
        isSampled: hv = !0
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, Sv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : sv;
      var ev;
      const gv = Wz(),
        pv = null === (ev = Sv.config) || void 0 === ev || null === (ev = ev.sessionTracking) || void 0 === ev ? void 0 : ev.generateSessionId;
      return null == vv && (vv = "function" === typeof pv ? pv() : iz()), {
        sessionId: vv,
        lastActivity: null !== Pv && void 0 !== Pv ? Pv : gv,
        started: null !== zv && void 0 !== zv ? zv : gv,
        isSampled: hv
      }
    }

    function Kz(vv) {
      if (null == vv) return !1;
      const zv = Wz();
      return zv - vv.started < 144e5 && zv - vv.lastActivity < gv
    }

    function Vz(vv) {
      let {
        fetchUserSession: zv,
        storeUserSession: Pv,
        adoptSession: hv,
        updateInterval: Sv = 0
      } = vv, pv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : sv, dv = 0;
      return function() {
        let {
          forceSessionExtend: vv = !1,
          refreshActivity: Nv = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var lv, Tv;
        if (!zv || !Pv) return;
        const Wv = Wz();
        if (!vv && Wv < dv && dv - Wv <= Sv) return;
        const wv = pv.config.sessionTracking,
          av = null === wv || void 0 === wv ? void 0 : wv.persistent;
        if (av && !hz || !av && !Sz) return;
        const sv = zv();
        if (dv = Math.min(Wv + Sv, (null !== (lv = null === sv || void 0 === sv ? void 0 : sv.started) && void 0 !== lv ? lv : Wv) + ev, (null !== (Tv = null === sv || void 0 === sv ? void 0 : sv.lastActivity) && void 0 !== Tv ? Tv : Wv) + gv), !1 === vv && Kz(sv)) {
          var Cv;
          Nv && Pv(lz(lz({}, sv), {}, {
            lastActivity: Wv
          }));
          const vv = null === (Cv = pv.metas.value.session) || void 0 === Cv ? void 0 : Cv.id;
          null != hv && null != sv.sessionMeta && sv.sessionId !== vv && hv(sv.sessionMeta)
        } else {
          var iv, cv, Gv;
          let vv = Rz(Dz({
            isSampled: Tz(pv)
          }, pv), sv, pv);
          dv = Wv + Sv, Pv(vv), null === (iv = pv.api) || void 0 === iv || iv.setSession(vv.sessionMeta), null === wv || void 0 === wv || null === (cv = wv.onSessionChange) || void 0 === cv || cv.call(wv, null !== (Gv = null === sv || void 0 === sv ? void 0 : sv.sessionMeta) && void 0 !== Gv ? Gv : null, vv.sessionMeta)
        }
      }
    }

    function Uz(vv) {
      let zv, {
          fetchUserSession: Pv,
          storeUserSession: hv,
          updateInterval: Sv = 0
        } = vv,
        ev = 0;
      return vv => {
        const gv = Wz();
        if (vv === zv && gv < ev && ev - gv <= Sv) return;
        zv = vv, ev = gv + Sv;
        const pv = Pv();
        (null === pv || void 0 === pv ? void 0 : pv.sessionId) === vv && Kz(pv) && hv(lz(lz({}, pv), {}, {
          lastActivity: gv
        }))
      }
    }

    function Rz(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : sv;
      var hv, Sv, ev, gv, pv, dv;
      const Nv = lz(lz({}, vv), {}, {
          sessionMeta: {
            id: vv.sessionId,
            attributes: tz(lz(lz(lz({}, null === (hv = Pv.config.sessionTracking) || void 0 === hv || null === (hv = hv.session) || void 0 === hv ? void 0 : hv.attributes), null !== (Sv = null === (ev = Pv.metas.value.session) || void 0 === ev ? void 0 : ev.attributes) && void 0 !== Sv ? Sv : {}), {}, {
              isSampled: vv.isSampled.toString()
            }))
          }
        }),
        lv = null !== (gv = null === (pv = Pv.metas.value.session) || void 0 === pv ? void 0 : pv.overrides) && void 0 !== gv ? gv : null === zv || void 0 === zv || null === (dv = zv.sessionMeta) || void 0 === dv ? void 0 : dv.overrides;
      Ev(lv) || (Nv.sessionMeta.overrides = lv);
      const Tv = null === zv || void 0 === zv ? void 0 : zv.sessionId;
      return null != Tv && (Nv.sessionMeta.attributes.previousSession = Tv), Nv
    }

    function xz(vv) {
      let {
        fetchUserSession: zv,
        storeUserSession: Pv
      } = vv, hv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : sv, Sv = !1;
      return function(vv) {
        if (Sv) return;
        const ev = vv.session,
          gv = zv();
        let pv = null === ev || void 0 === ev ? void 0 : ev.id;
        const dv = null === ev || void 0 === ev ? void 0 : ev.attributes,
          Nv = null === ev || void 0 === ev ? void 0 : ev.overrides,
          lv = null === gv || void 0 === gv ? void 0 : gv.sessionMeta,
          Tv = null === lv || void 0 === lv ? void 0 : lv.overrides,
          Wv = !!Nv && !cz(Nv, Tv),
          wv = !!dv && !cz(dv, null === lv || void 0 === lv ? void 0 : lv.attributes);
        if (ev && pv !== (null === gv || void 0 === gv ? void 0 : gv.sessionId) || wv || Wv) {
          var av, sv;
          const vv = null != gv && pv === gv.sessionId,
            zv = Rz(vv ? gv : Dz({
              sessionId: pv,
              isSampled: Tz(hv)
            }, hv), gv, hv),
            ev = null === gv || void 0 === gv || null === (av = gv.sessionMeta) || void 0 === av || null === (av = av.attributes) || void 0 === av ? void 0 : av.previousSession;
          vv && null != ev && ev !== zv.sessionId && (zv.sessionMeta.attributes.previousSession = ev), (null === (sv = zv.sessionMeta.attributes) || void 0 === sv ? void 0 : sv.previousSession) === zv.sessionId && delete zv.sessionMeta.attributes.previousSession, Pv(zv),
            function(vv, zv) {
              let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              var Sv, ev, gv;
              if (!zv) return;
              const pv = Pv.serviceName,
                dv = null !== (Sv = null !== (ev = hv.serviceName) && void 0 !== ev ? ev : null === (gv = vv.metas.value.app) || void 0 === gv ? void 0 : gv.name) && void 0 !== Sv ? Sv : "";
              pv && pv !== dv && vv.api.pushEvent(nz, {
                serviceName: pv,
                previousServiceName: dv
              })
            }(hv, Wv, Nv, Tv), Sv = !0;
          try {
            hv.api.setSession(zv.sessionMeta)
          } finally {
            Sv = !1
          }
        }
      }
    }

    function tz(vv) {
      const zv = {};
      for (const Pv of Object.keys(vv)) {
        const hv = vv[Pv];
        void 0 !== hv && (zv[Pv] = hv)
      }
      return zv
    }

    function qz() {
      let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.stringify(null !== vv && void 0 !== vv ? vv : {}, function() {
        const vv = new WeakSet;
        return function(zv, Pv) {
          if (Dv(Pv) && null !== Pv) {
            if (vv.has(Pv)) return null;
            vv.add(Pv)
          }
          return Pv
        }
      }())
    }

    function Iz() {
      let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const zv = {};
      for (const [Pv, hv] of Object.entries(vv)) zv[Pv] = Dv(hv) && null !== hv ? qz(hv) : String(hv);
      return zv
    }
    var Qz = class vv {
      constructor() {
        var zv = this;
        let Pv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sv;
        this.context = Pv, this.adopting = !1, this.isAdopting = () => this.adopting, this.adoptSession = vv => {
          this.adopting = !0;
          try {
            var zv;
            null === (zv = this.context.api) || void 0 === zv || zv.setSession(vv)
          } finally {
            this.adopting = !1
          }
        }, this.updateSession = function() {
          let {
            refreshActivity: vv = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return zv.updateUserSession({
            refreshActivity: vv
          })
        }, this.recordActivity = Uz({
          fetchUserSession: vv.fetchUserSession,
          storeUserSession: vv.storeUserSession,
          updateInterval: pv
        }), this.updateUserSession = Vz({
          fetchUserSession: vv.fetchUserSession,
          storeUserSession: vv.storeUserSession,
          adoptSession: this.adoptSession,
          updateInterval: pv
        }, Pv), this.init()
      }
      static removeUserSession() {
        Pz(Sv, vv.storageTypeLocal)
      }
      static storeUserSession(zv) {
        zz(Sv, qz(zv), vv.storageTypeLocal)
      }
      static fetchUserSession() {
        const zv = vz(Sv, vv.storageTypeLocal);
        return zv ? JSON.parse(zv) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var vv;
            this.updateSession({
              refreshActivity: !1
            });
            const zv = null === (vv = this.context.api) || void 0 === vv || null === (vv = vv.getSession()) || void 0 === vv ? void 0 : vv.id;
            zv && this.recordActivity(zv)
          }
        })), this.context.metas.addListener(xz({
          fetchUserSession: vv.fetchUserSession,
          storeUserSession: vv.storeUserSession
        }, this.context))
      }
    };
    Qz.storageTypeLocal = Xv;
    var Zz = class vv {
      constructor() {
        var zv = this;
        let Pv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sv;
        this.context = Pv, this.isAdopting = () => !1, this.updateSession = function() {
          let {
            refreshActivity: vv = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return zv.updateUserSession({
            refreshActivity: vv
          })
        }, this.recordActivity = Uz({
          fetchUserSession: vv.fetchUserSession,
          storeUserSession: vv.storeUserSession,
          updateInterval: pv
        }), this.updateUserSession = Vz({
          fetchUserSession: vv.fetchUserSession,
          storeUserSession: vv.storeUserSession,
          updateInterval: pv
        }, Pv), this.init()
      }
      static removeUserSession() {
        Pz(Sv, vv.storageTypeSession)
      }
      static storeUserSession(zv) {
        zz(Sv, qz(zv), vv.storageTypeSession)
      }
      static fetchUserSession() {
        const zv = vz(Sv, vv.storageTypeSession);
        return zv ? JSON.parse(zv) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var vv;
            this.updateSession({
              refreshActivity: !1
            });
            const zv = null === (vv = this.context.api) || void 0 === vv || null === (vv = vv.getSession()) || void 0 === vv ? void 0 : vv.id;
            zv && this.recordActivity(zv)
          }
        })), this.context.metas.addListener(xz({
          fetchUserSession: vv.fetchUserSession,
          storeUserSession: vv.storeUserSession
        }, this.context))
      }
    };
    Zz.storageTypeSession = kv;
    const Az = new WeakMap;

    function Lz(vv) {
      let zv = Az.get(vv);
      if (!zv) {
        let Pv = [],
          hv = [];
        zv = {
          addSessionUpdateListener: vv => {
            Pv.push(vv)
          },
          removeSessionUpdateListener: vv => {
            Pv = Pv.filter((zv => zv !== vv))
          },
          notifySessionUpdate: vv => {
            Pv.forEach((zv => zv(vv)))
          },
          shouldCapture: () => hv.every((vv => vv())),
          addCaptureFilter: vv => {
            hv.push(vv)
          },
          removeCaptureFilter: vv => {
            hv = hv.filter((zv => zv !== vv))
          }
        }, Az.set(vv, zv)
      }
      return zv
    }
    var Hz = class {
      constructor(vv, zv, Pv) {
        this.metas = vv, this.transports = zv, this.onActivate = Pv, this.waiting = !1, this.shouldCapture = () => !document.prerendering, this.discard = () => null, this.recordUpdate = vv => {
          var zv, Pv, hv;
          const Sv = this.pending;
          var ev, gv;
          if ("overrides" === vv.type) return void(this.pending = {
            reset: null !== (ev = null === Sv || void 0 === Sv ? void 0 : Sv.reset) && void 0 !== ev && ev,
            inheritOverrides: null === (gv = null === Sv || void 0 === Sv ? void 0 : Sv.inheritOverrides) || void 0 === gv || gv,
            session: lz(lz({}, null === Sv || void 0 === Sv ? void 0 : Sv.session), {}, {
              overrides: lz(lz({}, null === Sv || void 0 === Sv ? void 0 : Sv.session.overrides), vv.overrides)
            })
          });
          const pv = vv.session,
            dv = Ev(pv) || null != pv && "id" in pv && !pv.id,
            Nv = null !== (zv = null === pv || void 0 === pv ? void 0 : pv.overrides) && void 0 !== zv ? zv : null === Sv || void 0 === Sv ? void 0 : Sv.session.overrides;
          this.pending = {
            reset: dv || !(null === pv || void 0 === pv ? void 0 : pv.id) && null !== (Pv = null === Sv || void 0 === Sv ? void 0 : Sv.reset) && void 0 !== Pv && Pv,
            inheritOverrides: !(!vv.overrides && void 0 !== (null === pv || void 0 === pv ? void 0 : pv.overrides)) && (null === (hv = null === Sv || void 0 === Sv ? void 0 : Sv.inheritOverrides) || void 0 === hv || hv),
            session: {
              id: null === pv || void 0 === pv ? void 0 : pv.id,
              attributes: (null === pv || void 0 === pv ? void 0 : pv.attributes) && lz({}, pv.attributes),
              overrides: vv.overrides ? lz(lz({}, null === Sv || void 0 === Sv ? void 0 : Sv.session.overrides), vv.overrides) : Nv && lz({}, Nv)
            }
          }
        }, this.activate = () => {
          this.waiting && this.shouldCapture() && (this.destroy(), this.onActivate(this.pending))
        }
      }
      initialize() {
        var vv, zv;
        this.waiting = !0, Lz(this.metas).addSessionUpdateListener(this.recordUpdate), Lz(this.metas).addCaptureFilter(this.shouldCapture), this.transports.addBeforeSendHooks(this.discard), document.addEventListener("prerenderingchange", this.activate), null === (vv = (zv = this.metas).addCaptureListener) || void 0 === vv || vv.call(zv, this.activate), this.activate()
      }
      destroy() {
        var vv, zv;
        this.waiting = !1, document.removeEventListener("prerenderingchange", this.activate), Lz(this.metas).removeSessionUpdateListener(this.recordUpdate), null === (vv = (zv = this.metas).removeCaptureListener) || void 0 === vv || vv.call(zv, this.activate), Lz(this.metas).removeCaptureFilter(this.shouldCapture), this.transports.removeBeforeSendHooks(this.discard)
      }
    };

    function Mz(vv) {
      return (null === vv || void 0 === vv ? void 0 : vv.persistent) ? Qz : Zz
    }

    function yz() {}
    let Bz = function(vv) {
      return vv[vv.OFF = 0] = "OFF", vv[vv.ERROR = 1] = "ERROR", vv[vv.WARN = 2] = "WARN", vv[vv.INFO = 3] = "INFO", vv[vv.VERBOSE = 4] = "VERBOSE", vv
    }({});
    const Jz = {
        debug: yz,
        error: yz,
        info: yz,
        prefix: "Faro",
        warn: yz
      },
      Ez = 1;

    function oz(vv) {
      return oz = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, oz(vv)
    }

    function bz(vv) {
      var zv = function(vv, zv) {
        if ("object" != oz(vv) || !vv) return vv;
        var Pv = vv[Symbol.toPrimitive];
        if (void 0 !== Pv) {
          var hv = Pv.call(vv, zv || "default");
          if ("object" != oz(hv)) return hv;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zv ? String : Number)(vv)
      }(vv, "string");
      return "symbol" == oz(zv) ? zv : zv + ""
    }

    function rz(vv, zv, Pv) {
      return (zv = bz(zv)) in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }

    function kz(vv, zv) {
      var Pv = Object.keys(vv);
      if (Object.getOwnPropertySymbols) {
        var hv = Object.getOwnPropertySymbols(vv);
        zv && (hv = hv.filter((function(zv) {
          return Object.getOwnPropertyDescriptor(vv, zv).enumerable
        }))), Pv.push.apply(Pv, hv)
      }
      return Pv
    }

    function Xz(vv) {
      for (var zv = 1; zv < arguments.length; zv++) {
        var Pv = null != arguments[zv] ? arguments[zv] : {};
        zv % 2 ? kz(Object(Pv), !0).forEach((function(zv) {
          rz(vv, zv, Pv[zv])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(vv, Object.getOwnPropertyDescriptors(Pv)) : kz(Object(Pv)).forEach((function(zv) {
          Object.defineProperty(vv, zv, Object.getOwnPropertyDescriptor(Pv, zv))
        }))
      }
      return vv
    }
    const uz = Xz({}, console);
    var vP = class {
        constructor() {
          this.unpatchedConsole = uz, this.internalLogger = Jz, this.config = {}, this.metas = {}
        }
        logDebug() {
          for (var vv = arguments.length, zv = new Array(vv), Pv = 0; Pv < vv; Pv++) zv[Pv] = arguments[Pv];
          this.internalLogger.debug(`${this.name}\n`, ...zv)
        }
        logInfo() {
          for (var vv = arguments.length, zv = new Array(vv), Pv = 0; Pv < vv; Pv++) zv[Pv] = arguments[Pv];
          this.internalLogger.info(`${this.name}\n`, ...zv)
        }
        logWarn() {
          for (var vv = arguments.length, zv = new Array(vv), Pv = 0; Pv < vv; Pv++) zv[Pv] = arguments[Pv];
          this.internalLogger.warn(`${this.name}\n`, ...zv)
        }
        logError() {
          for (var vv = arguments.length, zv = new Array(vv), Pv = 0; Pv < vv; Pv++) zv[Pv] = arguments[Pv];
          this.internalLogger.error(`${this.name}\n`, ...zv)
        }
      },
      zP = class extends vP {
        constructor() {
          super(...arguments), this.api = {}, this.transports = {}
        }
      };
    const PP = "2.12.1";
    var hP = class extends zP {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-session", this.version = PP, this.isAdoptingSession = () => !1
      }
      sendSessionStartEvent(vv) {
        var zv;
        const Pv = vv.session;
        if (Pv && Pv.id !== (null === (zv = this.notifiedSession) || void 0 === zv ? void 0 : zv.id)) {
          var hv;
          if (this.isAdoptingSession()) return void(this.notifiedSession = Pv);
          if (this.notifiedSession && this.notifiedSession.id === (null === (hv = Pv.attributes) || void 0 === hv ? void 0 : hv.previousSession)) return this.api.pushEvent(Yz, {}, void 0, {
            skipDedupe: !0
          }), void(this.notifiedSession = Pv);
          this.notifiedSession = Pv, this.api.pushEvent(fz, {}, void 0, {
            skipDedupe: !0
          })
        }
      }
      createInitialSession(vv, zv, Pv) {
        const hv = null === Pv || void 0 === Pv ? void 0 : Pv.session;
        let Sv, ev, gv = vv.fetchUserSession();
        if (zv.persistent && zv.maxSessionPersistenceTime && gv) {
          const vv = Wz();
          gv.lastActivity < vv - zv.maxSessionPersistenceTime && (Qz.removeUserSession(), gv = null)
        }
        const pv = Kz(gv);
        if ((null === Pv || void 0 === Pv ? void 0 : Pv.reset) || !pv || (null === hv || void 0 === hv ? void 0 : hv.id) && hv.id !== (null === gv || void 0 === gv ? void 0 : gv.sessionId)) {
          var dv, Nv, lv, Tv, Wv, wv;
          ev = Dz({
            sessionId: (null === Pv || void 0 === Pv ? void 0 : Pv.reset) ? void 0 : null !== (dv = null === hv || void 0 === hv ? void 0 : hv.id) && void 0 !== dv ? dv : null === (Nv = zv.session) || void 0 === Nv ? void 0 : Nv.id,
            isSampled: Tz(this)
          }, this);
          const vv = ev.sessionId,
            av = Pv && pv ? null === gv || void 0 === gv || null === (lv = gv.sessionMeta) || void 0 === lv ? void 0 : lv.overrides : void 0,
            sv = av ? lz(lz({}, null === (Tv = zv.session) || void 0 === Tv ? void 0 : Tv.overrides), av) : null === (Wv = zv.session) || void 0 === Wv ? void 0 : Wv.overrides;
          ev.sessionMeta = lz({
            id: vv,
            attributes: lz({
              isSampled: ev.isSampled.toString()
            }, null === (wv = zv.session) || void 0 === wv ? void 0 : wv.attributes)
          }, sv ? {
            overrides: sv
          } : {}), Sv = fz
        } else {
          var av, sv;
          const vv = null === gv || void 0 === gv ? void 0 : gv.sessionId;
          ev = Dz({
            sessionId: vv,
            isSampled: gv.isSampled || !1,
            started: null === gv || void 0 === gv ? void 0 : gv.started
          }, this);
          const Pv = null === gv || void 0 === gv ? void 0 : gv.sessionMeta,
            hv = lz(lz({}, null === (av = zv.session) || void 0 === av ? void 0 : av.overrides), null === Pv || void 0 === Pv ? void 0 : Pv.overrides);
          ev.sessionMeta = lz(lz({}, zv.session), {}, {
            id: vv,
            attributes: lz(lz(lz({}, null === (sv = zv.session) || void 0 === sv ? void 0 : sv.attributes), null === Pv || void 0 === Pv ? void 0 : Pv.attributes), {}, {
              isSampled: ev.isSampled.toString()
            }),
            overrides: hv
          }), Sv = Fz
        }
        var Cv;
        if (hv && (ev.sessionMeta = lz(lz({}, ev.sessionMeta), {}, {
            attributes: lz(lz(lz({}, null === (Cv = ev.sessionMeta) || void 0 === Cv ? void 0 : Cv.attributes), hv.attributes), {}, {
              isSampled: ev.isSampled.toString()
            })
          }), hv.overrides)) {
          const vv = (null === Pv || void 0 === Pv ? void 0 : Pv.inheritOverrides) ? lz(lz({}, ev.sessionMeta.overrides), hv.overrides) : hv.overrides;
          Object.keys(vv).length > 0 ? ev.sessionMeta.overrides = vv : delete ev.sessionMeta.overrides
        }
        return {
          initialSession: ev,
          lifecycleType: Sv
        }
      }
      registerBeforeSendHook(vv) {
        var zv;
        this.beforeSendHook = zv => {
          var Pv, hv;
          const Sv = null === (Pv = zv.meta.session) || void 0 === Pv ? void 0 : Pv.id;
          Sv && !this.transports.isPaused() && vv(Sv);
          const ev = null === (hv = zv.meta.session) || void 0 === hv ? void 0 : hv.attributes;
          if (ev && "true" === (null === ev || void 0 === ev ? void 0 : ev.isSampled)) {
            var gv;
            let vv = JSON.parse(JSON.stringify(zv));
            const Pv = null === (gv = vv.meta.session) || void 0 === gv ? void 0 : gv.attributes;
            var pv;
            if (null === Pv || void 0 === Pv || delete Pv.isSampled, 0 === Object.keys(null !== Pv && void 0 !== Pv ? Pv : {}).length) null === (pv = vv.meta.session) || void 0 === pv || delete pv.attributes;
            return vv
          }
          return null
        }, null === (zv = this.transports) || void 0 === zv || zv.addBeforeSendHooks(this.beforeSendHook)
      }
      initialize() {
        var vv;
        this.logDebug("init session instrumentation");
        const zv = document.prerendering;
        var Pv;
        if ((null === (vv = this.config.sessionTracking) || void 0 === vv ? void 0 : vv.enabled) && (zv || this.prerenderSession)) return null !== (Pv = this.prerenderSession) && void 0 !== Pv || (this.prerenderSession = new Hz(this.metas, this.transports, (vv => {
          this.prerenderSession = void 0, this.initializeSession(vv)
        }))), void this.prerenderSession.initialize();
        this.initializeSession()
      }
      initializeSession(vv) {
        const zv = this.config.sessionTracking;
        if (null === zv || void 0 === zv ? void 0 : zv.enabled) {
          var Pv, hv;
          const Sv = Mz(zv),
            ev = new Sv(this);
          this.isAdoptingSession = ev.isAdopting, this.registerBeforeSendHook(ev.recordActivity);
          const {
            initialSession: gv,
            lifecycleType: pv
          } = this.createInitialSession(Sv, zv, vv);
          Sv.storeUserSession(gv);
          const dv = gv.sessionMeta;
          this.notifiedSession = dv, this.api.setSession(dv), this.captureListener = () => {
            this.transports.isPaused() || ev.updateSession({
              refreshActivity: !1
            })
          }, null === (Pv = (hv = this.metas).addCaptureListener) || void 0 === Pv || Pv.call(hv, this.captureListener), pv === fz && this.api.pushEvent(fz, {}, void 0, {
            skipDedupe: !0
          }), pv === Fz && this.api.pushEvent(Fz, {}, void 0, {
            skipDedupe: !0
          })
        }
        this.sessionStartListener = this.sendSessionStartEvent.bind(this), this.metas.addListener(this.sessionStartListener)
      }
      destroy() {
        var vv, zv, Pv;
        (null === (vv = this.prerenderSession) || void 0 === vv || vv.destroy(), this.captureListener) && (null === (zv = (Pv = this.metas).removeCaptureListener) || void 0 === zv || zv.call(Pv, this.captureListener), this.captureListener = void 0);
        this.beforeSendHook && (this.transports.removeBeforeSendHooks(this.beforeSendHook), this.beforeSendHook = void 0), this.sessionStartListener && (this.metas.removeListener(this.sessionStartListener), this.sessionStartListener = void 0)
      }
    };

    function SP(vv, zv, Pv, hv) {
      const Sv = {
        filename: vv || document.location.href,
        function: zv || "?"
      };
      return void 0 !== Pv && (Sv.lineno = Pv), void 0 !== hv && (Sv.colno = hv), Sv
    }
    const eP = /^\s*at (?:(?![a-z]+:\/\/)([^(]+?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      gP = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      pP = /^(?=[\s\S]*?(?:\/|bundle|\.js|\[native code]))\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      dP = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      NP = "safari-extension",
      lP = "safari-web-extension",
      TP = /Minified React error #\d+;/i;

    function WP(vv, zv) {
      const Pv = null === vv || void 0 === vv ? void 0 : vv.includes(NP),
        hv = !Pv && (null === vv || void 0 === vv ? void 0 : vv.includes("safari-web-extension"));
      return Pv || hv ? [(null === vv || void 0 === vv ? void 0 : vv.includes("@")) ? vv.split("@")[0] : vv, Pv ? `${NP}:${zv}` : `${lP}:${zv}`] : [vv, zv]
    }
    const wP = 1024;

    function aP(vv) {
      let zv = [];
      vv.stacktrace ? zv = vv.stacktrace.split("\n").filter(((vv, zv) => zv % 2 === 0)) : vv.stack && (zv = vv.stack.split("\n"));
      const Pv = zv.reduce(((zv, Pv, hv) => {
        if (Pv.length > wP) return zv;
        let Sv, ev, gv, pv, dv;
        if (Sv = eP.exec(Pv)) {
          if (ev = Sv[1], gv = Sv[2], pv = Sv[3], dv = Sv[4], null === gv || void 0 === gv ? void 0 : gv.startsWith("eval")) {
            const vv = gP.exec(gv);
            vv && (gv = vv[1], pv = vv[2], dv = vv[3])
          }
          gv = (null === gv || void 0 === gv ? void 0 : gv.startsWith("address at ")) ? gv.substring(11) : gv, [ev, gv] = WP(ev, gv)
        } else if (Sv = pP.exec(Pv)) {
          if (ev = Sv[1], gv = Sv[3], pv = Sv[4], dv = Sv[5], gv && gv.includes(" > eval")) {
            const vv = dP.exec(gv);
            vv && (ev = ev || "eval", gv = vv[1], pv = vv[2])
          } else 0 === hv && !dv && Fv(vv.columnNumber) && (dv = String(vv.columnNumber + 1));
          [ev, gv] = WP(ev, gv)
        }
        return (gv || ev) && zv.push(SP(gv, ev, pv ? Number(pv) : void 0, dv ? Number(dv) : void 0)), zv
      }), []);
      return TP.test(vv.message) ? Pv.slice(1) : Pv
    }

    function sP(vv) {
      return {
        frames: aP(vv)
      }
    }
    const CP = "http-request-start",
      iP = "http-request-end";
    var cP = class vv {
      constructor() {
        this.subscribers = []
      }
      subscribe(vv) {
        return this.subscribers.push(vv), {
          unsubscribe: () => this.unsubscribe(vv)
        }
      }
      unsubscribe(vv) {
        this.subscribers = this.subscribers.filter((zv => zv !== vv))
      }
      notify(vv) {
        this.subscribers.forEach((zv => zv(vv)))
      }
      first() {
        const zv = new vv,
          Pv = vv => {
            zv.notify(vv), hv.unsubscribe()
          },
          hv = this.subscribe(Pv),
          Sv = zv.unsubscribe.bind(zv);
        return this.withUnsubscribeOverride(zv, Sv, Pv)
      }
      takeWhile(zv) {
        const Pv = new vv,
          hv = vv => {
            zv(vv) ? Pv.notify(vv) : Pv.unsubscribe(hv)
          };
        this.subscribe(hv);
        const Sv = Pv.unsubscribe.bind(Pv);
        return this.withUnsubscribeOverride(Pv, Sv, hv)
      }
      filter(zv) {
        const Pv = new vv,
          hv = vv => {
            zv(vv) && Pv.notify(vv)
          };
        this.subscribe(hv);
        const Sv = Pv.unsubscribe.bind(Pv);
        return this.withUnsubscribeOverride(Pv, Sv, hv)
      }
      merge() {
        const zv = new vv,
          Pv = [];
        for (var hv = arguments.length, Sv = new Array(hv), ev = 0; ev < hv; ev++) Sv[ev] = arguments[ev];
        Sv.forEach((vv => {
          const hv = vv.subscribe((vv => {
            zv.notify(vv)
          }));
          Pv.push(hv)
        }));
        const gv = zv.unsubscribeAll.bind(zv);
        return zv.unsubscribe = () => {
          Pv.forEach((vv => vv.unsubscribe())), gv()
        }, zv
      }
      withUnsubscribeOverride(vv, zv, Pv) {
        return vv.unsubscribe = vv => {
          zv(vv), this.unsubscribe(Pv)
        }, vv
      }
      unsubscribeAll() {
        this.subscribers = []
      }
    };
    let GP = function(vv) {
      return vv.TRACE = "trace", vv.DEBUG = "debug", vv.INFO = "info", vv.LOG = "log", vv.WARN = "warn", vv.ERROR = "error", vv
    }({});
    const mP = "log",
      jP = ["trace", "debug", "info", "log", "warn", "error"];
    let fP, FP = !1;
    const YP = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
      nP = "Error",
      OP = vv => vv.map((vv => Dv(vv) ? qz(vv) : String(vv))).join(" ");

    function DP(vv) {
      let zv, Pv, hv, Sv, ev = [];
      if (Zv(vv) && vv.error) zv = vv.error.message, Pv = vv.error.name, ev = aP(vv.error);
      else if ((hv = Av(vv)) || Lv(vv)) {
        const {
          name: Sv,
          message: ev
        } = vv;
        Pv = null !== Sv && void 0 !== Sv ? Sv : hv ? "DOMError" : "DOMException", zv = ev ? `${Pv}: ${ev}` : Pv
      } else Qv(vv) ? (Pv = vv.name, zv = vv.message, ev = aP(vv)) : (Dv(vv) || (Sv = qv(vv))) && (Pv = Sv ? vv.constructor.name : void 0, zv = `Non-Error exception captured with keys: ${Object.keys(vv)}`);
      return [zv, Pv, ev]
    }

    function KP(vv) {
      const [zv, Pv, hv, Sv, ev] = vv;
      let gv, pv, dv = [];
      const Nv = fv(zv),
        lv = SP(Pv, "?", hv, Sv);
      return ev || !Nv ? ([gv, pv, dv] = DP(null !== ev && void 0 !== ev ? ev : zv), 0 === dv.length && (dv = [lv])) : Nv && ([gv, pv] = function(vv) {
        var zv, Pv;
        const hv = vv.match(YP),
          Sv = null !== (zv = null === hv || void 0 === hv ? void 0 : hv[1]) && void 0 !== zv ? zv : nP;
        return [null !== (Pv = null === hv || void 0 === hv ? void 0 : hv[2]) && void 0 !== Pv ? Pv : vv, Sv]
      }(zv), dv = [lv]), {
        value: gv,
        type: pv,
        stackFrames: dv
      }
    }

    function VP(vv, zv) {
      return Qv(vv[0]) ? KP(vv) : {
        value: zv(vv)
      }
    }
    const UP = vv => vv.map((vv => {
      try {
        return String(vv)
      } catch (zv) {
        return ""
      }
    })).join(" ");
    var RP = class vv extends zP {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-console", this.version = PP, this.errorSerializer = UP
      }
      initialize() {
        var zv, Pv;
        const hv = this.config.consoleInstrumentation,
          Sv = (null === hv || void 0 === hv ? void 0 : hv.serializeErrors) || !!(null === hv || void 0 === hv ? void 0 : hv.errorSerializer);
        this.errorSerializer = Sv ? null !== (zv = null === hv || void 0 === hv ? void 0 : hv.errorSerializer) && void 0 !== zv ? zv : OP : UP;
        const ev = null !== (Pv = null === hv || void 0 === hv ? void 0 : hv.disabledLevels) && void 0 !== Pv ? Pv : vv.defaultDisabledLevels,
          gv = function(vv) {
            if (fP || (fP = new cP), !FP) {
              const zv = null !== vv && void 0 !== vv ? vv : uz;
              jP.forEach((vv => {
                console[vv] = function() {
                  for (var Pv, hv = arguments.length, Sv = new Array(hv), ev = 0; ev < hv; ev++) Sv[ev] = arguments[ev];
                  fP.notify({
                    type: "console",
                    level: vv,
                    args: Sv
                  }), null === (Pv = zv[vv]) || void 0 === Pv || Pv.apply(console, Sv)
                }
              })), FP = !0
            }
            return fP
          }(this.unpatchedConsole);
        this.subscription = gv.subscribe((zv => {
          let {
            level: Pv,
            args: Sv
          } = zv;
          if (!ev.includes(Pv)) try {
            if (Pv !== GP.ERROR || (null === hv || void 0 === hv ? void 0 : hv.consoleErrorAsLog))
              if (Pv === GP.ERROR && (null === hv || void 0 === hv ? void 0 : hv.consoleErrorAsLog)) {
                const {
                  value: zv,
                  type: hv,
                  stackFrames: ev
                } = VP(Sv, this.errorSerializer);
                this.api.pushLog(zv ? [vv.consoleErrorPrefix + zv] : Sv, {
                  level: Pv,
                  context: {
                    value: null !== zv && void 0 !== zv ? zv : "",
                    type: null !== hv && void 0 !== hv ? hv : "",
                    stackFrames: (null === ev || void 0 === ev ? void 0 : ev.length) ? OP(ev) : ""
                  }
                })
              } else this.api.pushLog(Sv, {
                level: Pv
              });
            else {
              const {
                value: zv,
                type: Pv,
                stackFrames: hv
              } = VP(Sv, this.errorSerializer);
              if (zv && !Pv && !hv) return void this.api.pushError(new Error(vv.consoleErrorPrefix + zv));
              this.api.pushError(new Error(vv.consoleErrorPrefix + zv), {
                type: Pv,
                stackFrames: hv
              })
            }
          } catch (gv) {
            this.logError(gv)
          }
        }))
      }
      destroy() {
        var vv;
        null === (vv = this.subscription) || void 0 === vv || vv.unsubscribe(), this.subscription = void 0
      }
    };
    RP.defaultDisabledLevels = [GP.DEBUG, GP.TRACE, GP.LOG], RP.consoleErrorPrefix = "console.error: ";
    const xP = [];
    var tP = class extends zP {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-errors", this.version = PP
      }
      initialize() {
        this.logDebug("Initializing"),
          function(vv) {
            const zv = window.onerror;
            window.onerror = function() {
              for (var Pv = arguments.length, hv = new Array(Pv), Sv = 0; Sv < Pv; Sv++) hv[Sv] = arguments[Sv];
              try {
                const {
                  value: zv,
                  type: Pv,
                  stackFrames: Sv
                } = KP(hv), ev = hv[4];
                if (zv) {
                  const hv = {
                    type: Pv,
                    stackFrames: Sv
                  };
                  null != ev && (hv.originalError = ev), vv.pushError(new Error(zv), hv)
                }
              } finally {
                null === zv || void 0 === zv || zv.apply(window, hv)
              }
            }
          }(this.api),
          function(vv) {
            const zv = zv => {
              var Pv;
              let hv, Sv, ev = zv;
              if (ev.reason) ev = zv.reason;
              else if (null === (Pv = zv.detail) || void 0 === Pv ? void 0 : Pv.reason) {
                var gv;
                ev = null === (gv = zv.detail) || void 0 === gv ? void 0 : gv.reason
              }
              let pv = [];
              xv(ev) ? (hv = `Non-Error promise rejection captured with value: ${String(ev)}`, Sv = "UnhandledRejection") : [hv, Sv, pv] = DP(ev), hv && vv.pushError(new Error(hv), {
                type: Sv,
                stackFrames: pv
              })
            };
            window.addEventListener("unhandledrejection", zv), xP.push(zv)
          }(this.api)
      }
    };
    const qP = "unknown";
    var IP = class extends zP {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-view", this.version = PP, this.waitingForActivation = !1, this.sendViewChangedEvent = vv => {
          var zv;
          if (this.waitingForActivation || document.prerendering) return;
          const Pv = vv.view;
          if (Pv && Pv.name !== (null === (zv = this.notifiedView) || void 0 === zv ? void 0 : zv.name)) {
            var hv, Sv, ev;
            const vv = null !== (hv = null === (Sv = this.notifiedView) || void 0 === Sv ? void 0 : Sv.name) && void 0 !== hv ? hv : qP;
            this.notifiedView = Pv, this.api.pushEvent(jz, {
              fromView: vv,
              toView: null !== (ev = Pv.name) && void 0 !== ev ? ev : qP
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
    class QP {
      t;
      o = 0;
      i = [];
      l(vv) {
        if (vv.hadRecentInput) return;
        const zv = this.i[0],
          Pv = this.i.at(-1);
        this.o && zv && Pv && vv.startTime - Pv.startTime < 1e3 && vv.startTime - zv.startTime < 5e3 ? (this.o += vv.value, this.i.push(vv)) : (this.o = vv.value, this.i = [vv]), this.t?.(vv)
      }
    }
    const ZP = () => {
        const vv = performance.getEntriesByType("navigation")[0];
        if (vv && vv.responseStart > 0 && vv.responseStart < performance.now()) return vv
      },
      AP = vv => {
        if ("loading" === document.readyState) return "loading";
        const zv = ZP();
        if (zv) {
          if (vv < zv.domInteractive) return "loading";
          if (0 === zv.domContentLoadedEventStart || vv < zv.domContentLoadedEventStart) return "dom-interactive";
          if (0 === zv.domComplete || vv < zv.domComplete) return "dom-content-loaded"
        }
        return "complete"
      },
      LP = vv => {
        const zv = vv.nodeName;
        return 1 === vv.nodeType ? zv.toLowerCase() : zv.toUpperCase().replace(/^#/, "")
      },
      HP = vv => {
        let zv = "";
        try {
          for (; 9 !== vv?.nodeType;) {
            const Pv = vv,
              hv = Pv.id ? "#" + Pv.id : [LP(Pv), ...Array.from(Pv.classList ?? []).sort()].join(".");
            if (zv.length + hv.length > 99) return zv || hv;
            if (zv = zv ? hv + ">" + zv : hv, Pv.id) break;
            vv = Pv.parentNode
          }
        } catch {}
        return zv
      },
      MP = new WeakMap;

    function yP(vv, zv) {
      let Pv = MP.get(zv);
      return Pv || (Pv = new WeakMap, MP.set(zv, Pv)), Pv.get(vv) || Pv.set(vv, new zv), Pv.get(vv)
    }
    let BP = -1;
    const JP = () => BP,
      EP = vv => {
        addEventListener("pageshow", (zv => {
          zv.persisted && (BP = zv.timeStamp, vv(zv))
        }), !0)
      },
      oP = (vv, zv, Pv, hv) => {
        let Sv, ev;
        return gv => {
          zv.value >= 0 && (gv || hv) && (ev = zv.value - (Sv ?? 0), (ev || void 0 === Sv) && (Sv = zv.value, zv.delta = ev, zv.rating = ((vv, zv) => vv > zv[1] ? "poor" : vv > zv[0] ? "needs-improvement" : "good")(zv.value, Pv), vv(zv)))
        }
      },
      bP = vv => {
        requestAnimationFrame((() => requestAnimationFrame((() => vv()))))
      },
      rP = () => ZP()?.activationStart ?? 0;
    let kP = -1;
    const XP = new Set,
      uP = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
      vh = vv => {
        if ("hidden" === document.visibilityState) {
          if ("visibilitychange" === vv.type)
            for (const vv of XP) vv();
          isFinite(kP) || (kP = "visibilitychange" === vv.type ? vv.timeStamp : 0, removeEventListener("prerenderingchange", vh, !0))
        }
      },
      zh = function() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (kP = 1 / 0), kP < 0) {
          const vv = rP(),
            zv = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find((zv => "hidden" === zv.name && zv.startTime >= vv))?.startTime;
          kP = zv ?? uP(), addEventListener("visibilitychange", vh, !0), addEventListener("prerenderingchange", vh, !0), EP((() => {
            setTimeout((() => {
              kP = uP()
            }))
          }))
        }
        return {
          get firstHiddenTime() {
            return kP
          },
          onHidden(vv) {
            XP.add(vv)
          }
        }
      },
      Ph = function(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          Pv = arguments.length > 2 ? arguments[2] : void 0,
          hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Sv = arguments.length > 4 ? arguments[4] : void 0,
          ev = arguments.length > 5 ? arguments[5] : void 0,
          gv = arguments.length > 6 ? arguments[6] : void 0;
        const pv = ZP(),
          dv = pv?.navigationId || 0;
        let Nv = "navigate";
        return Pv ? Nv = Pv : JP() >= 0 ? Nv = "back-forward-cache" : pv && (document.prerendering || rP() > 0 ? Nv = "prerender" : document.wasDiscarded ? Nv = "restore" : pv.type && (Nv = pv.type.replace(/_/g, "-"))), {
          name: vv,
          value: zv,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
          navigationType: Nv,
          navigationId: hv || dv,
          navigationInteractionId: Sv,
          navigationURL: ev || pv?.name,
          navigationStartTime: gv || 0
        }
      },
      hh = function(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          const hv = vv.filter((vv => PerformanceObserver.supportedEntryTypes.includes(vv)));
          if (hv.length > 0) {
            const vv = new PerformanceObserver((vv => {
              queueMicrotask((() => {
                const Pv = vv.getEntries();
                hv.length > 1 && Pv.sort(((vv, zv) => vv.startTime + vv.duration - (zv.startTime + zv.duration))), zv(Pv)
              }))
            }));
            for (const zv of hv) vv.observe({
              type: zv,
              buffered: !0,
              ...Pv
            });
            return vv
          }
        } catch {}
      },
      Sh = vv => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && vv && vv.reportSoftNavs,
      eh = (vv, zv) => {
        if (vv.set(zv.navigationId, zv), vv.size > 2) {
          const zv = vv.keys().next().value;
          void 0 !== zv && vv.delete(zv)
        }
      },
      gh = vv => {
        let zv = !1;
        return () => {
          zv || (vv(), zv = !0)
        }
      };
    class ph {
      u
    }
    const dh = vv => {
        document.prerendering ? addEventListener("prerenderingchange", vv, !0) : vv()
      },
      Nh = [1800, 3e3],
      lh = function(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Pv = Sh(zv);
        dh((() => {
          const hv = yP(zv, ph),
            Sv = zh();
          let ev, gv = Ph("FCP");
          const pv = hh(["paint"], (vv => {
            for (const zv of vv) "first-contentful-paint" === zv.name && (pv.disconnect(), zv.startTime < Sv.firstHiddenTime && (gv.value = Math.max(zv.startTime - rP(), 0), gv.entries.push(zv), gv.navigationId = zv.navigationId || gv.navigationId, ev(!0)))
          }));
          pv && (ev = oP(vv, gv, Nh, zv.reportAllChanges), EP((Pv => {
            gv = Ph("FCP", -1, "back-forward-cache", gv.navigationId, gv.navigationInteractionId, gv.navigationURL, JP()), ev = oP(vv, gv, Nh, zv.reportAllChanges), bP((() => {
              gv.value = performance.now() - Pv.timeStamp, ev(!0)
            }))
          }))), Pv && hh(["soft-navigation"], (Pv => {
            Pv.forEach((Pv => {
              hv.u && Pv.navigationId && eh(hv.u, Pv);
              const Sv = Math.max((Pv.presentationTime || Pv.paintTime || 0) - Pv.startTime, 0);
              gv = Ph("FCP", Sv, "soft-navigation", Pv.navigationId, Pv.interactionId, Pv.name, Pv.startTime), ev = oP(vv, gv, Nh, zv.reportAllChanges), ev(!0)
            }))
          }), zv)
        }))
      },
      Th = [.1, .25],
      Wh = vv => vv.find((vv => 1 === vv.node?.nodeType)) || vv[0];
    let wh = 0,
      ah = 1 / 0,
      sh = 0;
    const Ch = vv => {
      for (const zv of vv) zv.interactionId && (ah = Math.min(ah, zv.interactionId), sh = Math.max(sh, zv.interactionId), wh = sh ? (sh - ah) / 7 + 1 : 0)
    };
    let ih;
    const ch = () => ih ? wh : performance.interactionCount ?? 0;
    class Gh {
      h = 0;
      v = [];
      p = new Map;
      m;
      M;
      T() {
        return ch() - this.h
      }
      D() {
        this.h = ch(), this.v.length = 0, this.p.clear()
      }
      S(vv) {
        const zv = this.T(),
          Pv = Math.min(this.v.length - 1, Math.floor(zv / 50));
        return !zv || -1 !== Pv || "soft-navigation" !== vv && "back-forward-cache" !== vv ? this.v[Pv] : {
          k: 8,
          id: -1,
          entries: []
        }
      }
      l(vv) {
        if (this.m?.(vv), !vv.interactionId) return;
        const zv = this.v.at(-1);
        let Pv = this.p.get(vv.interactionId);
        if (Pv || this.v.length < 10 || vv.duration > zv.k) {
          if (Pv ? vv.duration > Pv.k ? (Pv.entries = [vv], Pv.k = vv.duration) : vv.duration === Pv.k && vv.startTime === Pv.entries[0].startTime && Pv.entries.push(vv) : (Pv = {
              id: vv.interactionId,
              entries: [vv],
              k: vv.duration
            }, this.p.set(Pv.id, Pv), this.v.push(Pv)), this.v.sort(((vv, zv) => zv.k - vv.k)), this.v.length > 10) {
            const vv = this.v.splice(10);
            for (const zv of vv) this.p.delete(zv.id)
          }
          this.M?.(Pv)
        }
      }
    }
    const mh = vv => {
        const zv = "requestIdleCallback" in globalThis ? 1e3 : 0,
          Pv = globalThis.requestIdleCallback || setTimeout,
          hv = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) vv();
        else {
          const Sv = gh(vv);
          let ev = -1;
          const gv = () => {
            hv(ev), Sv()
          };
          addEventListener("visibilitychange", gv, {
            once: !0,
            capture: !0
          }), ev = Pv((() => {
            removeEventListener("visibilitychange", gv, {
              capture: !0
            }), Sv()
          }), {
            timeout: zv
          })
        }
      },
      jh = [200, 500],
      fh = function(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Pv = yP(zv = Object.assign({}, zv), Gh);
        let hv = [],
          Sv = [],
          ev = 0;
        const gv = new WeakMap,
          pv = new WeakMap;
        let dv = !1;
        const Nv = () => {
            dv || (dv = !0, mh(lv))
          },
          lv = () => {
            const vv = new Set(Pv.v.map((vv => gv.get(vv.entries[0])))),
              zv = Sv.length - 10;
            Sv = Sv.filter(((Pv, hv) => hv >= zv || vv.has(Pv)));
            const pv = new Set;
            for (const Pv of Sv) {
              const vv = Tv(Pv.startTime, Pv.processingEnd);
              for (const zv of vv) pv.add(zv)
            }
            const Nv = hv.length - 10;
            hv = hv.filter(((vv, zv) => pv.has(vv) || zv >= Nv && vv.startTime > ev)), dv = !1
          };
        Pv.m = vv => {
          const Pv = vv.startTime + vv.duration;
          let hv;
          ev = Math.max(ev, vv.processingEnd);
          for (let ev = Sv.length - 1; ev >= 0; ev--) {
            const gv = Sv[ev];
            if (Math.abs(Pv - gv.renderTime) <= 8) {
              hv = gv, hv.startTime = Math.min(vv.startTime, hv.startTime), hv.processingStart = Math.min(vv.processingStart, hv.processingStart), hv.processingEnd = Math.max(vv.processingEnd, hv.processingEnd), zv.includeProcessedEventEntries && hv.entries.push(vv);
              break
            }
          }
          hv || (hv = {
            startTime: vv.startTime,
            processingStart: vv.processingStart,
            processingEnd: vv.processingEnd,
            renderTime: Pv,
            entries: zv.includeProcessedEventEntries ? [vv] : []
          }, Sv.push(hv)), vv.interactionId && gv.set(vv, hv), Nv()
        }, Pv.M = vv => {
          if (!pv.get(vv)) {
            const Pv = vv.entries.find((vv => vv.target))?.target;
            if (Pv) {
              const hv = zv.generateTarget?.(Pv) ?? HP(Pv);
              pv.set(vv, hv)
            } else {
              const zv = vv.entries.find((vv => vv.targetSelector))?.targetSelector;
              zv && pv.set(vv, zv)
            }
          }
        };
        const Tv = (vv, zv) => {
          const Pv = [];
          for (const Sv of hv)
            if (!(Sv.startTime + Sv.duration < vv)) {
              if (Sv.startTime > zv) break;
              Pv.push(Sv)
            } return Pv
        };
        hh(["long-animation-frame"], (vv => {
            hv = hv.concat(vv), Nv()
          }), zv),
          function(vv) {
            let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
            const Pv = zh();
            dh((() => {
              "interactionCount" in performance || ih || (ih = hh(["event"], Ch, {
                durationThreshold: 0
              }));
              let hv, Sv = Ph("INP");
              const ev = yP(zv, Gh),
                gv = (Pv, gv, pv, dv, Nv) => {
                  ev.D(), Sv = Ph("INP", -1, Pv, gv, pv, dv, Nv), hv = oP(vv, Sv, jh, zv.reportAllChanges)
                },
                pv = () => {
                  const vv = ev.S(Sv.navigationType);
                  vv && vv.k !== Sv.value && (Sv.value = vv.k, Sv.entries = vv.entries, hv())
                },
                dv = vv => {
                  pv(), hv(!0), gv("soft-navigation", vv.navigationId, vv.interactionId, vv.name, vv.startTime)
                },
                Nv = function(vv) {
                  let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  mh((() => {
                    for (const zv of vv) "soft-navigation" !== zv.entryType ? ev.l(zv) : dv(zv);
                    pv(), zv && hv(!0)
                  }))
                },
                lv = ["event", "first-input"];
              Sh(zv) && lv.push("soft-navigation");
              const Tv = hh(lv, Nv, {
                ...zv,
                durationThreshold: zv.durationThreshold ?? 40
              });
              hv = oP(vv, Sv, jh, zv.reportAllChanges), Tv && (Pv.onHidden((() => {
                Nv(Tv.takeRecords(), !0)
              })), EP((() => {
                gv("back-forward-cache", Sv.navigationId, Sv.navigationInteractionId, Sv.navigationURL, JP())
              })))
            }))
          }((zv => {
            vv((vv => {
              if (0 === vv.entries.length) {
                const zv = vv.navigationStartTime || 0,
                  Pv = {
                    processedEventEntries: [],
                    longAnimationFrameEntries: [],
                    inputDelay: 0,
                    processingDuration: 0,
                    presentationDelay: vv.value,
                    loadState: AP(zv)
                  };
                return Object.assign(vv, {
                  attribution: Pv
                })
              }
              const zv = vv.entries[0],
                hv = gv.get(zv),
                Sv = Math.max(hv.processingStart, zv.startTime),
                ev = Math.max(zv.startTime + zv.duration, Sv),
                dv = Math.min(hv.processingEnd, ev),
                Nv = hv.entries.sort(((vv, zv) => vv.processingStart - zv.processingStart)),
                lv = Tv(zv.startTime, dv),
                Wv = Pv.p.get(zv.interactionId),
                wv = {
                  interactionTarget: pv.get(Wv),
                  interactionType: zv.name.startsWith("key") ? "keyboard" : "pointer",
                  interactionTime: zv.startTime,
                  nextPaintTime: ev,
                  processedEventEntries: Nv,
                  longAnimationFrameEntries: lv,
                  inputDelay: Sv - zv.startTime,
                  processingDuration: dv - Sv,
                  presentationDelay: ev - dv,
                  loadState: AP(zv.startTime),
                  longestScript: void 0,
                  totalScriptDuration: void 0,
                  totalStyleAndLayoutDuration: void 0,
                  totalPaintDuration: void 0,
                  totalUnattributedDuration: void 0
                };
              return (vv => {
                const zv = vv.interactionTime,
                  Pv = vv.nextPaintTime;
                if (!vv.longAnimationFrameEntries?.length || !zv || !Pv) return;
                const hv = vv.inputDelay,
                  Sv = vv.processingDuration;
                let ev, gv, pv = 0,
                  dv = 0,
                  Nv = 0,
                  lv = 0;
                for (const wv of vv.longAnimationFrameEntries) {
                  dv = dv + wv.startTime + wv.duration - wv.styleAndLayoutStart;
                  for (const vv of wv.scripts) {
                    const Pv = vv.startTime + vv.duration;
                    if (Pv < zv) continue;
                    const Nv = Pv - Math.max(zv, vv.startTime),
                      Tv = vv.duration ? Nv / vv.duration * vv.forcedStyleAndLayoutDuration : 0;
                    pv += Nv - Tv, dv += Tv, Nv > lv && (gv = vv.startTime < zv + hv ? "input-delay" : vv.startTime >= zv + hv + Sv ? "presentation-delay" : "processing-duration", ev = vv, lv = Nv)
                  }
                }
                const Tv = vv.longAnimationFrameEntries.at(-1),
                  Wv = Tv ? Tv.startTime + Tv.duration : 0;
                Wv >= zv + hv + Sv && (Nv = Pv - Wv), ev && gv && (vv.longestScript = {
                  entry: ev,
                  subpart: gv,
                  intersectingDuration: lv
                }), vv.totalScriptDuration = pv, vv.totalStyleAndLayoutDuration = dv, vv.totalPaintDuration = Nv, vv.totalUnattributedDuration = Pv - zv - pv - dv - Nv
              })(wv), Object.assign(vv, {
                attribution: wv
              })
            })(zv))
          }), zv)
      };
    class Fh {
      m;
      u;
      l(vv) {
        this.m?.(vv)
      }
    }
    const Yh = [2500, 4e3];
    let nh = 50;
    const Oh = [];
    hh(["resource"], (vv => {
      for (const zv of vv) Oh.push(zv), Oh.length > nh && Oh.shift()
    }));
    const Dh = [800, 1800],
      Kh = vv => {
        document.prerendering ? dh((() => Kh(vv))) : "complete" !== document.readyState ? addEventListener("load", (() => Kh(vv)), !0) : setTimeout(vv)
      },
      Vh = "load_state",
      Uh = "time_to_first_byte";
    var Rh = class {
        constructor(vv, zv) {
          this.corePushMeasurement = vv, this.webVitalConfig = zv
        }
        initialize() {
          this.measureCLS(), this.measureFCP(), this.measureINP(), this.measureLCP(), this.measureTTFB()
        }
        measureCLS() {
          var vv;
          ! function(vv) {
            let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const Pv = yP(zv = Object.assign({}, zv), QP),
              hv = new WeakMap;
            Pv.t = vv => {
                if (vv?.sources?.length) {
                  const Pv = Wh(vv.sources),
                    Sv = Pv?.node;
                  if (Sv) {
                    const vv = zv.generateTarget?.(Sv) ?? HP(Sv);
                    hv.set(Pv, vv)
                  }
                }
              },
              function(vv) {
                let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const Pv = zh();
                lh(gh((() => {
                  let hv, Sv = Ph("CLS", 0);
                  const ev = yP(zv, QP),
                    gv = (Pv, gv, pv, dv, Nv) => {
                      Sv = Ph("CLS", 0, Pv, gv, pv, dv, Nv), ev.o = 0, hv = oP(vv, Sv, Th, zv.reportAllChanges)
                    },
                    pv = function() {
                      let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      ev.o > Sv.value && (Sv.value = ev.o, Sv.entries = ev.i), hv(vv)
                    },
                    dv = vv => {
                      pv(!0), gv("soft-navigation", vv.navigationId, vv.interactionId, vv.name, vv.startTime)
                    },
                    Nv = vv => {
                      for (const zv of vv) "soft-navigation" !== zv.entryType ? ev.l(zv) : dv(zv);
                      pv()
                    },
                    lv = ["layout-shift"];
                  Sh(zv) && lv.push("soft-navigation");
                  const Tv = hh(lv, Nv);
                  Tv && (hv = oP(vv, Sv, Th, zv.reportAllChanges), Pv.onHidden((() => {
                    Nv(Tv.takeRecords()), hv(!0)
                  })), EP((() => {
                    gv("back-forward-cache", Sv.navigationId, Sv.navigationInteractionId, Sv.navigationURL, JP()), bP(hv)
                  })), setTimeout(hv))
                })))
              }((zv => {
                vv((vv => {
                  let zv = {};
                  if (vv.entries.length) {
                    const Pv = vv.entries.reduce(((vv, zv) => vv.value > zv.value ? vv : zv));
                    if (Pv?.sources?.length) {
                      const vv = Wh(Pv.sources);
                      vv && (zv = {
                        largestShiftTarget: hv.get(vv),
                        largestShiftTime: Pv.startTime,
                        largestShiftValue: Pv.value,
                        largestShiftSource: vv,
                        largestShiftEntry: Pv,
                        loadState: AP(Pv.startTime)
                      })
                    }
                  }
                  return Object.assign(vv, {
                    attribution: zv
                  })
                })(zv))
              }), zv)
          }((vv => {
            const {
              loadState: zv,
              largestShiftValue: Pv,
              largestShiftTime: hv,
              largestShiftTarget: Sv
            } = vv.attribution, ev = this.buildInitialValues(vv);
            this.addIfPresent(ev, "largest_shift_value", Pv), this.addIfPresent(ev, "largest_shift_time", hv);
            const gv = this.buildInitialContext(vv);
            this.addIfPresent(gv, Vh, zv), this.addIfPresent(gv, "largest_shift_target", Sv), this.pushMeasurement(ev, gv)
          }), {
            reportAllChanges: null === (vv = this.webVitalConfig) || void 0 === vv ? void 0 : vv.reportAllChanges
          })
        }
        measureFCP() {
          var vv;
          ! function(vv) {
            let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const Pv = yP(zv = Object.assign({}, zv), ph);
            Sh(zv) && (Pv.u = new Map), lh((zv => {
              vv((vv => {
                let zv = {
                  timeToFirstByte: 0,
                  firstByteToFCP: vv.value,
                  loadState: AP(JP())
                };
                if ("soft-navigation" !== vv.navigationType) {
                  if (vv.entries.length) {
                    const Pv = ZP(),
                      hv = vv.entries.at(-1);
                    if (Pv) {
                      const Sv = Pv.responseStart,
                        ev = Pv.activationStart || 0,
                        gv = Math.max(0, Sv - ev);
                      zv = {
                        timeToFirstByte: gv,
                        firstByteToFCP: vv.value - gv,
                        loadState: AP(vv.entries[0].startTime),
                        navigationEntry: Pv,
                        fcpEntry: hv
                      }
                    }
                  }
                } else {
                  const hv = Pv.u?.get(vv.navigationId);
                  hv && (zv = {
                    timeToFirstByte: 0,
                    firstByteToFCP: vv.value,
                    loadState: "complete",
                    navigationEntry: hv
                  })
                }
                return Object.assign(vv, {
                  attribution: zv
                })
              })(zv))
            }), zv)
          }((vv => {
            const {
              firstByteToFCP: zv,
              timeToFirstByte: Pv,
              loadState: hv
            } = vv.attribution, Sv = this.buildInitialValues(vv);
            this.addIfPresent(Sv, "first_byte_to_fcp", zv), this.addIfPresent(Sv, Uh, Pv);
            const ev = this.buildInitialContext(vv);
            this.addIfPresent(ev, Vh, hv), this.pushMeasurement(Sv, ev)
          }), {
            reportAllChanges: null === (vv = this.webVitalConfig) || void 0 === vv ? void 0 : vv.reportAllChanges
          })
        }
        measureINP() {
          var vv;
          fh((vv => {
            var zv;
            const {
              interactionTime: Pv,
              presentationDelay: hv,
              inputDelay: Sv,
              processingDuration: ev,
              nextPaintTime: gv,
              loadState: pv,
              interactionTarget: dv,
              interactionType: Nv,
              totalScriptDuration: lv,
              totalStyleAndLayoutDuration: Tv,
              totalPaintDuration: Wv,
              totalUnattributedDuration: wv,
              longestScript: av
            } = vv.attribution, sv = this.buildInitialValues(vv);
            this.addIfPresent(sv, "interaction_time", Pv), this.addIfPresent(sv, "presentation_delay", hv), this.addIfPresent(sv, "input_delay", Sv), this.addIfPresent(sv, "processing_duration", ev), this.addIfPresent(sv, "next_paint_time", gv), this.addNumberIfDefined(sv, "total_script_duration", lv), this.addNumberIfDefined(sv, "total_style_and_layout_duration", Tv), this.addNumberIfDefined(sv, "total_paint_duration", Wv), this.addNumberIfDefined(sv, "total_unattributed_duration", wv), this.addNumberIfDefined(sv, "longest_script_intersecting_duration", null === av || void 0 === av ? void 0 : av.intersectingDuration);
            const Cv = this.buildInitialContext(vv);
            this.addIfPresent(Cv, Vh, pv), this.addIfPresent(Cv, "interaction_target", dv), this.addIfPresent(Cv, "interaction_type", Nv), this.addIfPresent(Cv, "longest_script_subpart", null === av || void 0 === av ? void 0 : av.subpart), this.addIfPresent(Cv, "longest_script_invoker_type", null === av || void 0 === av ? void 0 : av.entry.invokerType), (null === (zv = this.webVitalConfig) || void 0 === zv ? void 0 : zv.trackAttributionSources) && (this.addIfPresent(Cv, "longest_script_invoker", null === av || void 0 === av ? void 0 : av.entry.invoker), this.addIfPresent(Cv, "longest_script_source_url", null === av || void 0 === av ? void 0 : av.entry.sourceURL), this.addIfPresent(Cv, "longest_script_source_function_name", null === av || void 0 === av ? void 0 : av.entry.sourceFunctionName), this.addIfPresent(Cv, "longest_script_source_char_position", void 0 !== (null === av || void 0 === av ? void 0 : av.entry.sourceCharPosition) ? String(av.entry.sourceCharPosition) : void 0)), this.pushMeasurement(sv, Cv)
          }), {
            reportAllChanges: null === (vv = this.webVitalConfig) || void 0 === vv ? void 0 : vv.reportAllChanges
          })
        }
        measureLCP() {
          var vv;
          ! function(vv) {
            let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            null != (zv = Object.assign({}, zv)).resourceBufferSize && (nh = zv.resourceBufferSize);
            const Pv = yP(zv, Fh),
              hv = new WeakMap;
            Sh(zv) && (Pv.u = new Map), Pv.m = vv => {
                const Pv = vv.element;
                if (Pv) {
                  const Sv = zv.generateTarget?.(Pv) ?? HP(Pv);
                  hv.set(vv, Sv)
                } else vv.id && hv.set(vv, `#${vv.id}`)
              },
              function(vv) {
                let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  Pv = !1;
                const hv = Sh(zv);
                dh((() => {
                  let Sv, ev = zh(),
                    gv = Ph("LCP");
                  const pv = yP(zv, Fh),
                    dv = (hv, pv, dv, Nv, lv) => {
                      gv = Ph("LCP", -1, hv, pv, dv, Nv, lv), Sv = oP(vv, gv, Yh, zv.reportAllChanges), Pv = !1, "soft-navigation" === hv && (ev = zh(!0))
                    },
                    Nv = vv => {
                      pv.u && vv.navigationId && eh(pv.u, vv), Pv || Sv(!0), dv("soft-navigation", vv.navigationId, vv.interactionId, vv.name, vv.startTime);
                      const zv = vv.getLargestInteractionContentfulPaint?.();
                      zv && lv([zv])
                    },
                    lv = vv => {
                      zv.reportAllChanges || hv || (vv = vv.slice(-1));
                      for (const zv of vv) {
                        if (!zv) continue;
                        if ("soft-navigation" === zv.entryType) {
                          Nv(zv);
                          continue
                        }
                        let vv = 0,
                          Pv = [],
                          hv = zv.startTime;
                        if ("largest-contentful-paint" === zv.entryType) vv = Math.max(zv.startTime - rP(), 0), pv.l(zv), Pv = [zv];
                        else if ("interaction-contentful-paint" === zv.entryType) {
                          const Sv = zv;
                          if (!gv.navigationId) continue;
                          if ("interactionId" in Sv && Sv.interactionId != gv.navigationInteractionId) continue;
                          hv = Sv.largestContentfulPaint?.renderTime || 0, vv = Math.max(hv - zv.startTime, 0), Sv.largestContentfulPaint && (pv.l(Sv.largestContentfulPaint), Pv = [Sv.largestContentfulPaint])
                        }
                        hv < ev.firstHiddenTime && (gv.value = vv, gv.entries = Pv, Sv())
                      }
                    },
                    Tv = ["largest-contentful-paint"];
                  hv && Tv.push("interaction-contentful-paint", "soft-navigation");
                  const Wv = hh(Tv, lv);
                  if (Wv) {
                    Sv = oP(vv, gv, Yh, zv.reportAllChanges);
                    const ev = ["keydown", "click", "visibilitychange"],
                      pv = vv => {
                        if (vv.isTrusted && !Pv) {
                          const vv = gv.id;
                          mh((() => {
                            if (!Pv) {
                              if (!hv) {
                                Wv.disconnect();
                                for (const vv of ev) removeEventListener(vv, pv, {
                                  capture: !0
                                })
                              }
                              vv === gv.id && (Pv = !0, Sv(!0))
                            }
                          }))
                        }
                      };
                    for (const vv of ev) addEventListener(vv, pv, {
                      capture: !0
                    });
                    EP((hv => {
                      dv("back-forward-cache", gv.navigationId, gv.navigationInteractionId, gv.navigationURL, JP()), Sv = oP(vv, gv, Yh, zv.reportAllChanges), bP((() => {
                        gv.value = performance.now() - hv.timeStamp, Pv = !0, Sv(!0)
                      }))
                    }))
                  }
                }))
              }((zv => {
                vv((vv => {
                  let zv = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadDuration: 0,
                    elementRenderDelay: vv.value
                  };
                  if (vv.entries.length) {
                    const Sv = vv.entries.at(-1),
                      ev = vv => vv.name === Sv.url && (vv.requestStart || vv.startTime) <= Sv.startTime,
                      gv = Sv.url && (Oh.findLast(ev) || performance.getEntriesByType("resource").findLast(ev));
                    let pv;
                    zv.target = hv.get(Sv), zv.lcpEntry = Sv, Sv.url && (zv.url = Sv.url), gv && (zv.lcpResourceEntry = gv);
                    let dv = 0,
                      Nv = 0;
                    if ("soft-navigation" !== vv.navigationType ? (pv = ZP(), dv = pv?.activationStart ?? 0, Nv = pv?.responseStart ?? 0) : (dv = vv.navigationStartTime || 0, pv = Pv.u?.get(vv.navigationId)), pv) {
                      const Pv = Math.max(0, Nv - dv),
                        hv = Math.max(Pv, gv ? (gv.requestStart || gv.startTime) - dv : 0),
                        Sv = Math.min(vv.value, Math.max(hv, gv ? gv.responseEnd - dv : 0));
                      zv = {
                        ...zv,
                        timeToFirstByte: Pv,
                        resourceLoadDelay: hv - Pv,
                        resourceLoadDuration: Sv - hv,
                        elementRenderDelay: vv.value - Sv,
                        navigationEntry: pv
                      }
                    }
                  }
                  return Object.assign(vv, {
                    attribution: zv
                  })
                })(zv))
              }), zv)
          }((vv => {
            var zv;
            const {
              elementRenderDelay: Pv,
              resourceLoadDelay: hv,
              resourceLoadDuration: Sv,
              timeToFirstByte: ev,
              target: gv,
              url: pv,
              lcpResourceEntry: dv
            } = vv.attribution, Nv = this.buildInitialValues(vv);
            this.addIfPresent(Nv, "element_render_delay", Pv), this.addIfPresent(Nv, "resource_load_delay", hv), this.addIfPresent(Nv, "resource_load_duration", Sv), this.addIfPresent(Nv, Uh, ev);
            const lv = this.buildInitialContext(vv);
            this.addIfPresent(lv, "element", gv), (null === (zv = this.webVitalConfig) || void 0 === zv ? void 0 : zv.trackAttributionSources) && (this.addIfPresent(lv, "resource_url", pv), this.addIfPresent(lv, "resource_delivery_type", null === dv || void 0 === dv ? void 0 : dv.deliveryType), this.addIfPresent(lv, "resource_initiator_type", null === dv || void 0 === dv ? void 0 : dv.initiatorType)), this.pushMeasurement(Nv, lv)
          }), {
            reportAllChanges: null === (vv = this.webVitalConfig) || void 0 === vv ? void 0 : vv.reportAllChanges
          })
        }
        measureTTFB() {
          var vv;
          ! function(vv) {
            ! function(vv) {
              let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const Pv = Sh(zv);
              let hv = Ph("TTFB"),
                Sv = oP(vv, hv, Dh, zv.reportAllChanges);
              Kh((() => {
                const ev = ZP();
                if (ev) {
                  const gv = ev.responseStart;
                  hv.value = Math.max(gv - rP(), 0), hv.entries = [ev], Sv(!0), EP((() => {
                    hv = Ph("TTFB", 0, "back-forward-cache", hv.navigationId, hv.navigationInteractionId, hv.navigationURL, JP()), Sv = oP(vv, hv, Dh, zv.reportAllChanges), Sv(!0)
                  })), Pv && hh(["soft-navigation"], (Pv => {
                    Pv.forEach((Pv => {
                      Pv.navigationId && (hv = Ph("TTFB", 0, "soft-navigation", Pv.navigationId, Pv.interactionId, Pv.name, Pv.startTime), hv.entries = [Pv], Sv = oP(vv, hv, Dh, zv.reportAllChanges), Sv(!0))
                    }))
                  }), zv)
                }
              }))
            }((zv => {
              vv((vv => {
                const zv = vv.entries[0];
                let Pv = {
                  waitingDuration: 0,
                  cacheDuration: 0,
                  dnsDuration: 0,
                  connectionDuration: 0,
                  requestDuration: 0,
                  navigationEntry: zv
                };
                if (vv.entries.length && zv instanceof PerformanceNavigationTiming) {
                  const hv = zv.activationStart || 0,
                    Sv = Math.max((zv.workerStart || zv.fetchStart || 0) - hv, 0),
                    ev = Math.max(zv.domainLookupStart - hv, 0),
                    gv = Math.max(zv.connectStart - hv, 0),
                    pv = Math.max(zv.connectEnd - hv, 0);
                  Pv = {
                    waitingDuration: Sv,
                    cacheDuration: ev - Sv,
                    dnsDuration: gv - ev,
                    connectionDuration: pv - gv,
                    requestDuration: vv.value - pv,
                    navigationEntry: zv
                  }
                }
                return Object.assign(vv, {
                  attribution: Pv
                })
              })(zv))
            }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }((vv => {
            const {
              dnsDuration: zv,
              connectionDuration: Pv,
              requestDuration: hv,
              waitingDuration: Sv,
              cacheDuration: ev
            } = vv.attribution, gv = this.buildInitialValues(vv);
            this.addIfPresent(gv, "dns_duration", zv), this.addIfPresent(gv, "connection_duration", Pv), this.addIfPresent(gv, "request_duration", hv), this.addIfPresent(gv, "waiting_duration", Sv), this.addIfPresent(gv, "cache_duration", ev);
            const pv = this.buildInitialContext(vv);
            this.pushMeasurement(gv, pv)
          }), {
            reportAllChanges: null === (vv = this.webVitalConfig) || void 0 === vv ? void 0 : vv.reportAllChanges
          })
        }
        buildInitialValues(vv) {
          return {
            [vv.name.toLowerCase()]: vv.value,
            delta: vv.delta
          }
        }
        buildInitialContext(vv) {
          var zv;
          const Pv = null !== (zv = vz("com.grafana.faro.lastNavigationId", kv)) && void 0 !== zv ? zv : qP;
          return {
            id: vv.id,
            rating: vv.rating,
            navigation_type: vv.navigationType,
            navigation_entry_id: Pv
          }
        }
        pushMeasurement(vv, zv) {
          this.corePushMeasurement({
            type: "web-vitals",
            values: vv
          }, {
            context: zv
          })
        }
        addIfPresent(vv, zv, Pv) {
          Pv && (vv[zv] = Pv)
        }
        addNumberIfDefined(vv, zv, Pv) {
          void 0 !== Pv && (vv[zv] = Pv)
        }
      },
      xh = class extends zP {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-web-vitals", this.version = PP
        }
        initialize() {
          this.logDebug("Initializing"), new Rh(this.api.pushMeasurement, this.config.webVitalsInstrumentation).initialize()
        }
      };
    const th = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;

    function qh() {
      let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      for (const zv of vv)
        if ("traceparent" === zv.name) {
          if (!th.test(zv.description)) continue;
          const [, vv, Pv] = zv.description.split("-");
          if (null != vv && null != Pv) return {
            traceId: vv,
            spanId: Pv
          };
          break
        }
    }

    function Ih(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        wallNow: Date.now(),
        monoNow: performance.now()
      };
      const {
        wallNow: Pv,
        monoNow: hv
      } = zv;
      return Math.min(Pv, Pv - (hv - vv))
    }

    function Qh(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      for (const [Pv, hv] of Object.entries(zv)) {
        const zv = vv[Pv];
        return null != zv && (Vv(hv) ? hv.includes(zv) : zv === hv)
      }
      return !0
    }

    function Zh(vv) {
      const {
        connectEnd: zv,
        connectStart: Pv,
        decodedBodySize: hv,
        domainLookupEnd: Sv,
        domainLookupStart: ev,
        duration: gv,
        encodedBodySize: pv,
        fetchStart: dv,
        initiatorType: Nv,
        name: lv,
        nextHopProtocol: Tv,
        redirectEnd: Wv,
        redirectStart: wv,
        renderBlockingStatus: av,
        requestStart: sv,
        responseEnd: Cv,
        responseStart: iv,
        responseStatus: cv,
        secureConnectionStart: Gv,
        transferSize: mv,
        workerStart: jv
      } = vv;
      return {
        name: lv,
        httpHost: Lh(lv),
        duration: Hh(gv),
        tcpHandshakeTime: Hh(zv - Pv),
        dnsLookupTime: Hh(Sv - ev),
        tlsNegotiationTime: Hh(zv - Gv),
        responseStatus: Hh(cv),
        redirectTime: Hh(Wv - wv),
        requestTime: Hh(iv - sv),
        responseTime: Hh(Cv - iv),
        fetchTime: Hh(Cv - dv),
        serviceWorkerTime: Hh(jv > 0 ? dv - jv : 0),
        decodedBodySize: Hh(hv),
        encodedBodySize: Hh(pv),
        cacheHitStatus: function() {
          let vv = "fullLoad";
          0 === mv ? hv > 0 && (vv = "cache") : null != cv ? 304 === cv && (vv = "conditionalFetch") : pv > 0 && mv < pv && (vv = "conditionalFetch");
          return vv
        }(),
        renderBlockingStatus: Hh(av),
        protocol: Tv,
        initiatorType: Nv,
        visibilityState: document.visibilityState,
        ttfb: Hh(iv - sv),
        transferSize: Hh(mv)
      }
    }

    function Ah(vv) {
      const {
        activationStart: zv,
        domComplete: Pv,
        domContentLoadedEventEnd: hv,
        domContentLoadedEventStart: Sv,
        domInteractive: ev,
        fetchStart: gv,
        loadEventEnd: pv,
        loadEventStart: dv,
        responseStart: Nv,
        type: lv
      } = vv, Tv = function() {
        var vv;
        return null != (null === (vv = performance.timing) || void 0 === vv ? void 0 : vv.domLoading) ? performance.timing.domLoading - performance.timeOrigin : null
      }();
      return lz(lz({}, Zh(vv)), {}, {
        pageLoadTime: Hh(Pv - gv),
        documentParsingTime: Hh(Tv ? ev - Tv : null),
        domProcessingTime: Hh(Pv - ev),
        domContentLoadHandlerTime: Hh(hv - Sv),
        onLoadTime: Hh(pv - dv),
        ttfb: Hh(Math.max(Nv - (null !== zv && void 0 !== zv ? zv : 0), 0)),
        type: lv
      })
    }

    function Lh(vv) {
      try {
        return new URL(vv).host || qP
      } catch (zv) {
        return qP
      }
    }

    function Hh(vv) {
      return null == vv ? qP : "number" === typeof vv ? Math.round(vv > 0 ? vv : 0).toString() : vv.toString()
    }
    const Mh = {
      initiatorType: ["xmlhttprequest", "fetch"]
    };

    function yh(vv, zv, Pv, hv, Sv, ev, gv) {
      try {
        var pv = vv[ev](gv),
          dv = pv.value
      } catch (vv) {
        return void Pv(vv)
      }
      pv.done ? zv(dv) : Promise.resolve(dv).then(hv, Sv)
    }

    function Bh(vv) {
      return function() {
        var zv = this,
          Pv = arguments;
        return new Promise((function(hv, Sv) {
          var ev = vv.apply(zv, Pv);

          function gv(vv) {
            yh(ev, hv, Sv, gv, pv, "next", vv)
          }

          function pv(vv) {
            yh(ev, hv, Sv, gv, pv, "throw", vv)
          }
          gv(void 0)
        }))
      }
    }
    const Jh = new cP;
    var Eh = class extends zP {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-performance", this.version = PP
      }
      initialize() {
        var vv = this;
        if (!("PerformanceObserver" in window)) return void this.logDebug("performance observer not supported. Disable performance instrumentation.");
        let zv = !1;
        const Pv = () => {
          ! function(vv) {
            if ("complete" === document.readyState) vv();
            else {
              const zv = () => {
                "complete" === document.readyState && (vv(), document.removeEventListener("readystatechange", zv))
              };
              document.addEventListener("readystatechange", zv)
            }
          }(Bh((function*() {
            if (zv) return;
            const Pv = vv.api.pushEvent,
              {
                faroNavigationId: hv
              } = yield function(vv) {
                let zv;
                const Pv = new Promise((vv => {
                  zv = vv
                }));
                return new PerformanceObserver((Pv => {
                  var hv;
                  const [Sv] = Pv.getEntries();
                  if (null == Sv || bv(Sv.name)) return;
                  const ev = Sv.toJSON();
                  let gv = qh(null === ev || void 0 === ev ? void 0 : ev.serverTiming);
                  const pv = null !== (hv = vz("com.grafana.faro.lastNavigationId", kv)) && void 0 !== hv ? hv : qP,
                    dv = lz(lz({}, Ah(ev)), {}, {
                      faroNavigationId: iz(),
                      faroPreviousNavigationId: pv
                    });
                  zz("com.grafana.faro.lastNavigationId", dv.faroNavigationId, kv), vv("faro.performance.navigation", dv, void 0, {
                    spanContext: gv,
                    timestampOverwriteMs: Ih(ev.startTime)
                  }), zv(dv)
                })).observe({
                  type: "navigation",
                  buffered: !0
                }), Pv
              }(Pv);
            zv || null == hv || function(vv, zv, Pv, hv) {
              const Sv = hv.trackResources;
              new PerformanceObserver((hv => {
                const ev = hv.getEntries(),
                  gv = {
                    wallNow: Date.now(),
                    monoNow: performance.now()
                  };
                for (const pv of ev) {
                  if (bv(pv.name)) continue;
                  null === Pv || void 0 === Pv || Pv.notify({
                    type: "resource"
                  });
                  const hv = pv.toJSON();
                  let ev = qh(null === hv || void 0 === hv ? void 0 : hv.serverTiming);
                  (null == Sv && Qh(hv, Mh) || Sv) && zv("faro.performance.resource", lz(lz({}, Zh(hv)), {}, {
                    faroNavigationId: vv,
                    faroResourceId: iz()
                  }), void 0, {
                    spanContext: ev,
                    timestampOverwriteMs: Ih(hv.startTime, gv)
                  })
                }
              })).observe({
                type: "resource",
                buffered: !0
              })
            }(hv, Pv, Jh, vv.config)
          })))
        };
        this.cancelInitialization = () => {
          zv = !0, document.removeEventListener("prerenderingchange", Pv)
        }, document.prerendering ? document.addEventListener("prerenderingchange", Pv, {
          once: !0
        }) : Pv()
      }
      destroy() {
        var vv;
        null === (vv = this.cancelInitialization) || void 0 === vv || vv.call(this), this.cancelInitialization = void 0
      }
    };
    const oh = "data-faro-user-action-name",
      bh = oh.replace(/-name$/, "-timeout"),
      rh = 1e3;

    function kh(vv) {
      return `data-${(vv.startsWith("data-")?vv.slice(5):vv).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
    }

    function Xh(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
        Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : yz;
      if (void 0 === vv) return zv;
      let hv = NaN;
      try {
        hv = "string" === typeof vv && "" === vv.trim() ? NaN : Number(vv)
      } catch (Sv) {}
      return !Number.isFinite(hv) || hv <= 0 ? (Pv(`initialActivityTimeout must be a finite number greater than zero; using ${zv} ms`), zv) : hv > 1e3 ? (Pv(`initialActivityTimeout cannot exceed ${rh} ms; clamping to the maximum`), rh) : hv
    }

    function uh(vv, zv, Pv) {
      return void 0 !== vv && window.clearTimeout(vv), window.setTimeout((() => {
        zv()
      }), Pv)
    }

    function vS(vv) {
      return vv.type === iP
    }
    let zS, PS;

    function hS() {
      return zS || (zS = new cP), PS || (PS = new MutationObserver(((vv, zv) => {
        zS.notify({
          type: "dom-mutation"
        })
      })), PS.observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0
      })), zS
    }
    const SS = "fetch",
      eS = "xhr";
    let gS, pS, dS, NS, lS = !1;

    function TS() {
      if (gS) return gS;

      function vv(vv) {
        gS.notify({
          type: CP,
          request: vv
        })
      }

      function zv(vv) {
        gS.notify({
          type: iP,
          request: vv
        })
      }
      return gS = new cP, lS || (! function(vv) {
        let {
          onRequestEnd: zv,
          onRequestStart: Pv
        } = vv;
        dS || (dS = window.fetch);
        window.fetch = function() {
          var vv, hv;
          const Sv = null !== (vv = rv(arguments[0])) && void 0 !== vv ? vv : "",
            ev = bv(Sv),
            gv = (null !== (hv = arguments[1]) && void 0 !== hv ? hv : {}).method,
            pv = iz();
          return ev || Pv({
            url: Sv,
            method: gv,
            requestId: pv,
            apiType: SS
          }), dS.apply(this, arguments).then((vv => (ev || zv({
            url: Sv,
            method: gv,
            requestId: pv,
            apiType: SS
          }), vv))).catch((vv => {
            throw ev || zv({
              url: Sv,
              method: gv,
              requestId: pv,
              apiType: SS
            }), vv
          }))
        }
      }({
        onRequestStart: vv,
        onRequestEnd: zv
      }), function(vv) {
        let {
          onRequestStart: zv,
          onRequestEnd: Pv
        } = vv;
        pS || (pS = XMLHttpRequest.prototype.open);
        XMLHttpRequest.prototype.open = function() {
          const vv = arguments[1],
            hv = bv(vv),
            Sv = arguments[0],
            ev = iz();
          this.addEventListener("loadstart", (function() {
            hv || zv({
              url: vv,
              method: Sv,
              requestId: ev,
              apiType: eS
            })
          })), this.addEventListener("load", (function() {
            hv || Pv({
              url: vv,
              method: Sv,
              requestId: ev,
              apiType: eS
            })
          })), this.addEventListener("error", (function() {
            hv || Pv({
              url: vv,
              method: Sv,
              requestId: ev,
              apiType: eS
            })
          })), this.addEventListener("abort", (function() {
            hv || Pv({
              url: vv,
              method: Sv,
              requestId: ev,
              apiType: eS
            })
          })), pS.apply(this, arguments)
        }
      }({
        onRequestStart: vv,
        onRequestEnd: zv
      }), lS = !0), gS
    }
    let WS, wS = !1;
    let aS = function(vv) {
      return vv[vv.Started = 0] = "Started", vv[vv.Halted = 1] = "Halted", vv[vv.Cancelled = 2] = "Cancelled", vv[vv.Ended = 3] = "Ended", vv
    }({});
    var sS = class {
      constructor(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        this.userAction = vv, this.logDebug = zv, this.initialActivityTimeout = Pv, this.http = TS(), this.dom = hS(), this.perf = (NS || (NS = new cP), wS || (WS = Jh.subscribe((vv => {
          "resource" === vv.type && NS.notify({
            type: "resource-entry"
          })
        })), wS = !0), NS), this.isValid = !1, this.runningRequests = new Map
      }
      attach() {
        this.allMonitorsSub = (new cP).merge(this.http, this.dom, this.perf).takeWhile((() => [aS.Started, aS.Halted].includes(this.userAction.getState()))).filter((vv => !!(this.userAction.getState() !== aS.Halted || vS(vv) && this.runningRequests.has(vv.request.requestId)))).subscribe((vv => {
          (function(vv) {
            return vv.type === CP
          })(vv) && this.runningRequests.set(vv.request.requestId, vv.request), vS(vv) && this.runningRequests.delete(vv.request.requestId), vS(vv) ? this.userAction.getState() === aS.Halted && 0 === this.runningRequests.size && this.endAction() : (this.isValid || (this.isValid = !0, this.clearTimer(this.startupTid)), this.scheduleFollowUp())
        })), this.stateSub = this.userAction.filter((vv => [aS.Ended, aS.Cancelled].includes(vv))).first().subscribe((() => this.cleanup())), this.startupTid = uh(this.startupTid, (() => {
          this.logDebug("User action not sent; no DOM, resource, or HTTP activity:", this.userAction.name), this.cancelAction()
        }), this.initialActivityTimeout)
      }
      scheduleFollowUp() {
        this.clearTimer(this.followUpTid), this.followUpTid = window.setTimeout((() => {
          this.userAction.getState() === aS.Started && this.runningRequests.size > 0 ? this.haltAction() : this.isValid ? this.endAction() : this.cancelAction()
        }), 100)
      }
      haltAction() {
        this.userAction.getState() === aS.Started && (this.userAction.halt(), this.startHaltTimeout())
      }
      startHaltTimeout() {
        this.clearTimer(this.haltTid), this.haltTid = uh(this.haltTid, (() => {
          this.userAction.getState() === aS.Halted && this.endAction()
        }), 1e4)
      }
      endAction() {
        this.userAction.end(), this.cleanup()
      }
      cancelAction() {
        this.userAction.cancel(), this.cleanup()
      }
      cleanup() {
        var vv, zv;
        this.clearTimer(this.startupTid), this.clearTimer(this.followUpTid), this.clearTimer(this.haltTid), null === (vv = this.allMonitorsSub) || void 0 === vv || vv.unsubscribe(), null === (zv = this.stateSub) || void 0 === zv || zv.unsubscribe(), this.allMonitorsSub = void 0, this.stateSub = void 0, this.runningRequests.clear()
      }
      clearTimer(vv) {
        void 0 !== vv && window.clearTimeout(vv)
      }
    };

    function CS(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yz;
      var Pv;
      const {
        api: hv,
        config: Sv,
        internalLogger: ev
      } = vv, gv = Xh(null === (Pv = Sv.userActionsInstrumentation) || void 0 === Pv ? void 0 : Pv.initialActivityTimeout, 100, zv);
      return {
        processUserEvent: function(vv) {
          var zv, Pv;
          const ev = null !== (zv = null === (Pv = Sv.userActionsInstrumentation) || void 0 === Pv ? void 0 : Pv.dataAttributeName) && void 0 !== zv ? zv : oh,
            gv = vv.target;
          if (!(gv instanceof Element)) return;
          const pv = function(vv, zv) {
              let Pv = vv;
              for (; Pv;) {
                if (Pv.hasAttribute(zv)) return Pv;
                Pv = Pv.parentElement
              }
              return null
            }(gv, kh(ev)),
            dv = function(vv, zv) {
              if (!vv) return;
              const Pv = function(vv) {
                  return kh(vv).slice(5).replace(/-(.)/g, ((vv, zv) => zv.toUpperCase()))
                }(zv),
                hv = vv.dataset;
              for (const Sv in hv)
                if (Sv === Pv) return hv[Sv]
            }(pv, ev);
          if (!pv || !dv) return;
          const Nv = function(vv, zv) {
            const Pv = vv.getAttribute(function(vv) {
              const zv = kh(vv);
              return zv.endsWith("-name") ? `${zv.slice(0,-5)}-timeout` : `${zv}-timeout`
            }(zv));
            return null === Pv ? void 0 : Number(Pv)
          }(pv, ev);
          hv.startUserAction(dv, {}, {
            triggerName: vv.type,
            initialActivityTimeout: Nv
          })
        },
        processUserActionStarted: function(vv, Pv) {
          const hv = vv,
            Sv = Xh(Pv, gv, zv);
          new sS(hv, ev.debug, Sv).attach()
        }
      }
    }
    const iS = "user_action_start",
      cS = {
        Normal: "normal",
        Critical: "critical"
      };
    var GS = class {
        constructor() {
          this.buffer = []
        }
        addItem(vv) {
          this.buffer.push(vv)
        }
        flushBuffer(vv) {
          if (Kv(vv))
            for (const zv of this.buffer) vv(zv);
          this.buffer.length = 0
        }
        size() {
          return this.buffer.length
        }
      },
      mS = class extends cP {
        constructor(vv) {
          let {
            name: zv,
            parentId: Pv,
            trigger: hv,
            transports: Sv,
            attributes: ev,
            trackUserActionsExcludeItem: gv,
            importance: pv = cS.Normal,
            pushEvent: dv
          } = vv;
          super(), this.name = zv, this.attributes = ev, this.id = iz(), this.trigger = hv, this.parentId = null !== Pv && void 0 !== Pv ? Pv : this.id, this.trackUserActionsExcludeItem = gv, this.importance = pv, this._pushEvent = dv, this._itemBuffer = new GS, this._transports = Sv, this._state = 0, this._start()
        }
        addItem(vv) {
          return 0 === this._state && (this._itemBuffer.addItem(vv), !0)
        }
        _start() {
          this._state = 0, 0 === this._state && (this.startTime = Wz(), this._startTimeMono = wz())
        }
        halt() {
          0 === this._state && (this._state = 1, this.notify(this._state))
        }
        cancel() {
          0 === this._state && this._itemBuffer.flushBuffer((vv => {
            this._transports.execute(vv)
          })), this._state = 2, this.notify(this._state)
        }
        end() {
          if (2 === this._state) return;
          const vv = Wz(),
            zv = wz() - this._startTimeMono;
          this._state = 3, this._itemBuffer.flushBuffer((vv => {
            if (function(vv, zv) {
                return (null === zv || void 0 === zv ? void 0 : zv(vv)) || "measurement" === vv.type && "web-vitals" === vv.payload.type
              }(vv, this.trackUserActionsExcludeItem)) return void this._transports.execute(vv);
            const zv = Xz(Xz({}, vv), {}, {
              payload: Xz(Xz({}, vv.payload), {}, {
                action: {
                  parentId: this.id,
                  name: this.name
                }
              })
            });
            this._transports.execute(zv)
          })), this._state = 3, this.notify(this._state), this._pushEvent("faro.user.action", Xz({
            userActionName: this.name,
            userActionStartTime: this.startTime.toString(),
            userActionEndTime: vv.toString(),
            userActionDuration: zv.toString(),
            userActionTrigger: this.trigger,
            userActionImportance: this.importance
          }, Iz(this.attributes)), void 0, {
            timestampOverwriteMs: this.startTime,
            customPayloadTransformer: vv => (vv.action = {
              id: this.id,
              name: this.name
            }, vv)
          })
        }
        getState() {
          return this._state
        }
      };
    const jS = new cP;

    function fS(vv, zv) {
      return !!vv && (0 === (null === vv || void 0 === vv ? void 0 : vv.getState()) && (vv.addItem(zv), !0))
    }
    var FS = class extends zP {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-user-action", this.version = PP
        }
        initialize() {
          const {
            processUserEvent: vv,
            processUserActionStarted: zv
          } = CS(sv, (vv => this.logWarn(vv)));
          this._processUserEvent = vv, this._processKeydown = zv => {
            [" ", "Enter"].includes(zv.key) && vv(zv)
          }, window.addEventListener("pointerdown", this._processUserEvent), window.addEventListener("keydown", this._processKeydown), this._userActionSub = jS.subscribe((vv => {
            let {
              type: Pv,
              userAction: hv,
              initialActivityTimeout: Sv
            } = vv;
            "user_action_start" === Pv && zv(hv, Sv)
          }))
        }
        destroy() {
          var vv;
          this._processUserEvent && window.removeEventListener("pointerdown", this._processUserEvent), this._processKeydown && window.removeEventListener("keydown", this._processKeydown), null === (vv = this._userActionSub) || void 0 === vv || vv.unsubscribe()
        }
      },
      YS = class extends zP {
        constructor() {
          super(), this.name = "@grafana/faro-web-sdk:instrumentation-csp", this.version = PP, this.boundSecuritypolicyviolationHandler = this.securitypolicyviolationHandler.bind(this)
        }
        initialize() {
          document.addEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        destroy() {
          document.removeEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        securitypolicyviolationHandler(vv) {
          const zv = {
            blockedURI: vv.blockedURI,
            columnNumber: vv.columnNumber,
            disposition: vv.disposition,
            documentURI: vv.documentURI,
            effectiveDirective: vv.effectiveDirective,
            lineNumber: vv.lineNumber,
            originalPolicy: vv.originalPolicy,
            referrer: vv.referrer,
            sample: vv.sample,
            sourceFile: vv.sourceFile,
            statusCode: vv.statusCode,
            violatedDirective: vv.violatedDirective
          };
          this.api.pushEvent("securitypolicyviolation", Iz(zv))
        }
      };
    var nS = class extends cP {
      constructor(vv, zv) {
        var Pv, hv, Sv, ev;
        super(), this._tracking = !1, this.eventsObservable = vv, this._options = {
          inactivityMs: null !== (Pv = null === zv || void 0 === zv ? void 0 : zv.inactivityMs) && void 0 !== Pv ? Pv : 100,
          drainTimeoutMs: null !== (hv = null === zv || void 0 === zv ? void 0 : zv.drainTimeoutMs) && void 0 !== hv ? hv : 1e4,
          isOperationStart: null !== (Sv = null === zv || void 0 === zv ? void 0 : zv.isOperationStart) && void 0 !== Sv ? Sv : () => {},
          isOperationEnd: null !== (ev = null === zv || void 0 === zv ? void 0 : zv.isOperationEnd) && void 0 !== ev ? ev : () => {}
        }, this._initialize()
      }
      _initialize() {
        this.eventsObservable.filter((() => this._tracking)).subscribe((vv => {
          var zv;
          this._lastEventTime = wz(), null === (zv = this._currentEvents) || void 0 === zv || zv.push(vv);
          const Pv = this._options.isOperationStart(vv);
          var hv;
          Pv && (null === (hv = this._activeOperations) || void 0 === hv || hv.set(Pv, !0));
          const Sv = this._options.isOperationEnd(vv);
          var ev;
          Sv && (null === (ev = this._activeOperations) || void 0 === ev || ev.delete(Sv));
          this._scheduleInactivityCheck()
        }))
      }
      startTracking() {
        this._tracking || (this._tracking = !0, this._startTime = wz(), this._lastEventTime = this._startTime, this.notify({
          message: "tracking-started"
        }), this._currentEvents = [], this._activeOperations = new Map, this._scheduleInactivityCheck())
      }
      stopTracking() {
        let vv;
        this._tracking = !1, this._clearTimer(this._inactivityTid), this._clearTimer(this._drainTid), vv = this.hasActiveOperations() ? wz() - this._startTime : this._lastEventTime ? this._lastEventTime - this._startTime : 0, this.notify({
          message: "tracking-ended",
          events: this._currentEvents,
          duration: vv
        })
      }
      _scheduleInactivityCheck() {
        this._inactivityTid = OS(this._inactivityTid, (() => {
          this.hasActiveOperations() ? this._startDrainTimeout() : this.stopTracking()
        }), this._options.inactivityMs)
      }
      _startDrainTimeout() {
        this._drainTid = OS(this._drainTid, (() => {
          this.stopTracking()
        }), this._options.drainTimeoutMs)
      }
      hasActiveOperations() {
        return !!this._activeOperations && this._activeOperations.size > 0
      }
      _clearTimer(vv) {
        vv && clearTimeout(vv)
      }
    };

    function OS(vv, zv, Pv) {
      return vv && clearTimeout(vv), vv = setTimeout((() => {
        zv()
      }), Pv)
    }
    let DS;
    const KS = new Set,
      VS = new Map;
    let US, RS, xS, tS, qS, IS, QS, ZS, AS = !1;
    var LS = class extends zP {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-navigation", this.version = PP
      }
      initialize() {
        const vv = TS(),
          zv = hS(),
          Pv = function() {
            function vv(vv, zv) {
              const Pv = null !== zv && void 0 !== zv ? zv : location.href;
              Pv !== RS && (US.notify({
                type: "url-change",
                from: RS,
                to: Pv,
                trigger: vv
              }), RS = Pv)
            }
            if (US || (US = new cP, RS = location.href), !AS)
              if ("navigation" in window && "NavigateEvent" in window) {
                QS = zv => {
                  try {
                    const Pv = null === zv || void 0 === zv ? void 0 : zv.destination;
                    (null === Pv || void 0 === Pv ? void 0 : Pv.sameDocument) && "string" === typeof Pv.url && vv("navigate", Pv.url)
                  } catch (Pv) {}
                }, window.navigation.addEventListener("navigate", QS);
                const zv = window.NavigateEvent;
                zv && zv.prototype && "function" === typeof zv.prototype.intercept && (ZS || (ZS = zv.prototype.intercept), zv.prototype.intercept = function(zv) {
                  try {
                    const zv = !!(null === this || void 0 === this ? void 0 : this.canIntercept),
                      Pv = null === this || void 0 === this ? void 0 : this.destination;
                    zv && Pv && !1 === Pv.sameDocument && "string" === typeof Pv.url && vv("navigate-intercept", Pv.url)
                  } catch (Pv) {}
                  return ZS.call(this, zv)
                }), AS = !0
              } else xS || (xS = window.history.pushState), window.history.pushState = function() {
                for (var zv = arguments.length, Pv = new Array(zv), hv = 0; hv < zv; hv++) Pv[hv] = arguments[hv];
                const Sv = xS.apply(window.history, Pv);
                return vv("pushState"), Sv
              }, tS || (tS = window.history.replaceState), window.history.replaceState = function() {
                for (var zv = arguments.length, Pv = new Array(zv), hv = 0; hv < zv; hv++) Pv[hv] = arguments[hv];
                const Sv = tS.apply(window.history, Pv);
                return vv("replaceState"), Sv
              }, qS = () => vv("popstate"), IS = () => vv("hashchange"), window.addEventListener("popstate", qS), window.addEventListener("hashchange", IS), AS = !0;
            return US
          }(),
          hv = (Sv = ["pointerdown", "keydown"], DS || (DS = new cP), Sv.forEach((vv => {
            if (!KS.has(vv)) {
              const zv = () => {
                DS.notify({
                  type: "interaction",
                  name: vv
                })
              };
              window.addEventListener(vv, zv), KS.add(vv), VS.set(vv, zv)
            }
          })), DS);
        var Sv;
        const ev = new nS((new cP).merge(vv, zv, Pv), {
          inactivityMs: 100,
          drainTimeoutMs: 1e4,
          isOperationStart: vv => function(vv) {
            return vv.type === CP
          }(vv) ? vv.request.requestId : void 0,
          isOperationEnd: vv => function(vv) {
            return vv.type === iP
          }(vv) ? vv.request.requestId : void 0
        });
        ev.filter((vv => "tracking-ended" === vv.message)).subscribe((vv => {
          var zv, Pv;
          if ((null === (zv = vv.events) || void 0 === zv ? void 0 : zv.some((vv => "url-change" === vv.type))) && (null === (Pv = vv.events) || void 0 === Pv ? void 0 : Pv.some((vv => "dom-mutation" === vv.type)))) {
            var hv;
            const zv = null === (hv = vv.events) || void 0 === hv ? void 0 : hv.find((vv => "url-change" === vv.type));
            sv.api.pushEvent("faro.navigation", {
              fromUrl: null === zv || void 0 === zv ? void 0 : zv.from,
              toUrl: null === zv || void 0 === zv ? void 0 : zv.to,
              sameDocument: String(!0),
              duration: vv.duration
            })
          }
        })), hv.subscribe((() => {
          ev.startTracking()
        }))
      }
    };

    function HS() {
      let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const zv = [new FS, new tP, new xh, new hP, new IP, new LS];
      return !1 !== vv.enablePerformanceInstrumentation && zv.unshift(new Eh), !1 !== vv.enableContentSecurityPolicyInstrumentation && zv.push(new YS), !1 !== vv.captureConsole && zv.push(new RP), zv
    }
    var MS = Pv(6406);
    let yS, BS;

    function JS() {
      const vv = "undefined" !== typeof navigator ? navigator.userAgent : "";
      return yS === vv && BS || (BS = new MS.UAParser(vv).getResult(), yS = vv), BS
    }
    const ES = () => {
        const {
          browser: vv,
          os: zv,
          ua: Pv
        } = JS(), {
          name: hv,
          version: Sv
        } = vv, {
          name: ev,
          version: gv
        } = zv, pv = navigator.language, dv = Pv.includes("Mobi"), Nv = function() {
          if (!hv || !Sv) return;
          if ("userAgentData" in navigator && navigator.userAgentData) return navigator.userAgentData.brands
        }();
        return {
          browser: {
            name: null !== hv && void 0 !== hv ? hv : qP,
            version: null !== Sv && void 0 !== Sv ? Sv : qP,
            os: `${null!==ev&&void 0!==ev?ev:qP} ${null!==gv&&void 0!==gv?gv:qP}`,
            userAgent: null !== Pv && void 0 !== Pv ? Pv : qP,
            language: null !== pv && void 0 !== pv ? pv : qP,
            mobile: dv,
            brands: null !== Nv && void 0 !== Nv ? Nv : qP,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`
          }
        }
      },
      oS = () => {
        const {
          name: vv,
          version: zv
        } = JS().os;
        if (!vv && !zv) return {};
        const Pv = {};
        return vv && (Pv.name = vv), zv && (Pv.version = zv), {
          os: Pv
        }
      };

    function bS(vv) {
      var zv, Pv, hv;
      return {
        id: null !== (zv = null === (Pv = sv.config) || void 0 === Pv || null === (Pv = Pv.sessionTracking) || void 0 === Pv || null === (hv = Pv.generateSessionId) || void 0 === hv ? void 0 : hv.call(Pv)) && void 0 !== zv ? zv : iz(),
        attributes: vv
      }
    }
    const rS = () => ({
      sdk: {
        name: "faro-web",
        version: PP
      }
    });
    var kS = class extends vP {
      isBatched() {
        return !1
      }
      getIgnoreUrls() {
        return []
      }
    };
    let XS = function(vv) {
      return vv.EXCEPTION = "exception", vv.LOG = "log", vv.MEASUREMENT = "measurement", vv.TRACE = "trace", vv.EVENT = "event", vv
    }({});
    const uS = {
      exception: "exceptions",
      log: "logs",
      measurement: "measurements",
      trace: "traces",
      event: "events"
    };

    function ve(vv, zv) {
      var Pv, hv;
      if (void 0 === zv) return vv;
      if (void 0 === vv) return {
        resourceSpans: zv
      };
      const Sv = null === (Pv = vv.resourceSpans) || void 0 === Pv ? void 0 : Pv[0];
      if (void 0 === Sv) return vv;
      const ev = (null === Sv || void 0 === Sv ? void 0 : Sv.scopeSpans) || [],
        gv = (null === zv || void 0 === zv || null === (hv = zv[0]) || void 0 === hv ? void 0 : hv.scopeSpans) || [];
      return Xz(Xz({}, vv), {}, {
        resourceSpans: [Xz(Xz({}, Sv), {}, {
          scopeSpans: [...ev, ...gv]
        })]
      })
    }

    function ze(vv) {
      let zv = {
        meta: {}
      };
      return void 0 !== vv[0] && (zv.meta = vv[0].meta), vv.forEach((vv => {
        switch (vv.type) {
          case "log":
          case "event":
          case "exception":
          case "measurement": {
            const Pv = uS[vv.type],
              hv = zv[Pv];
            zv = Xz(Xz({}, zv), {}, {
              [Pv]: void 0 === hv ? [vv.payload] : [...hv, vv.payload]
            });
            break
          }
          case "trace":
            zv = Xz(Xz({}, zv), {}, {
              traces: ve(zv.traces, vv.payload.resourceSpans)
            })
        }
      })), zv
    }
    var Pe = class extends kS {
      constructor() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(), this.options = vv, this.name = "@grafana/faro-web-sdk:transport-console", this.version = PP
      }
      send(vv) {
        var zv;
        return this.unpatchedConsole[null !== (zv = this.options.level) && void 0 !== zv ? zv : GP.DEBUG]("New event", ze([vv]))
      }
    };
    const he = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), ([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      Se = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-9]{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      ee = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:(?:([0-9]{2}))|(?: ([0-9]))) ([0-9]{2}):([0-9]{2}):([0-9]{2}) ([0-9]{4})$/,
      ge = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      pe = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      de = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function Ne(vv) {
      let {
        weekday: zv,
        day: Pv,
        month: hv,
        year: Sv,
        hour: ev,
        minute: gv,
        second: pv
      } = vv;
      if (Sv < 1900 || Pv < 1 || ev > 23 || gv > 59 || pv > 60) return;
      const dv = 60 === pv,
        Nv = new Date(0);
      return Nv.setUTCFullYear(Sv, hv, Pv), Nv.setUTCHours(ev, gv, dv ? 59 : pv, 0), Nv.getUTCDay() === zv && Nv.getUTCDate() === Pv && Nv.getUTCMonth() === hv && Nv.getUTCFullYear() === Sv && Nv.getUTCHours() === ev && Nv.getUTCMinutes() === gv && Nv.getUTCSeconds() === (dv ? 59 : pv) ? Nv.getTime() + (dv ? 1e3 : 0) : void 0
    }
    var le = class {
      constructor(vv) {
        this.options = vv, this.admitted = 0, this.inProgress = 0, this.sequence = 0, this.nextSendAt = 0, this.attemptQueue = [], this.waiting = [], this.unloading = !1
      }
      reserve() {
        var vv = this;
        if (this.admitted >= this.options.bufferSize) return;
        this.admitted++;
        const zv = this.sequence++;
        let Pv = !1;
        return {
          deliver: function() {
            var Pv = Bh((function*(Pv) {
              const hv = vv.options.getNow();
              let Sv, ev = 0;
              for (;;) {
                var gv, pv, dv;
                const Nv = vv.options.retry.maxAttempts - ev,
                  lv = yield vv.runAttempt((() => Pv(Nv, vv.unloading)), ev > 0);
                if (ev += lv.attemptsMade, "success" === lv.kind) return {
                  kind: "success",
                  attempts: ev,
                  elapsedTimeMs: vv.options.getNow() - hv
                };
                if (Sv = lv.failure, "terminal" === lv.kind || vv.unloading) return {
                  kind: "terminal",
                  attempts: ev,
                  elapsedTimeMs: vv.options.getNow() - hv,
                  failure: Sv
                };
                if (ev >= vv.options.retry.maxAttempts) return {
                  kind: "terminal",
                  attempts: ev,
                  elapsedTimeMs: vv.options.getNow() - hv,
                  failure: Sv,
                  reason: "retries-exhausted"
                };
                if (null != lv.retryAfterMs && lv.retryAfterMs > vv.options.retry.maxBackoffMs) return {
                  kind: "terminal",
                  attempts: ev,
                  elapsedTimeMs: vv.options.getNow() - hv,
                  failure: Sv,
                  reason: "retry-after-too-long"
                };
                const Tv = Math.min(null !== (gv = lv.retryAfterMs) && void 0 !== gv ? gv : vv.options.retry.initialBackoffMs * Math.pow(vv.options.retry.backoffMultiplier, ev - 1), vv.options.retry.maxBackoffMs);
                if (null === (pv = (dv = vv.options).onRetry) || void 0 === pv || pv.call(dv, Tv, ev + 1), yield vv.waitForTurn(zv, Tv)) {
                  const zv = vv.options.retry.maxAttempts - ev,
                    Sv = yield vv.runAttempt((() => Pv(zv, !0)));
                  return ev += Sv.attemptsMade, {
                    kind: "success" === Sv.kind ? "success" : "terminal",
                    attempts: ev,
                    elapsedTimeMs: vv.options.getNow() - hv,
                    failure: "success" === Sv.kind ? void 0 : Sv.failure
                  }
                }
              }
            }));
            return function(vv) {
              return Pv.apply(this, arguments)
            }
          }(),
          release: () => {
            Pv || (Pv = !0, this.admitted--)
          }
        }
      }
      flush() {
        this.unloading = !0, this.nextSendAt = 0;
        const vv = this.waiting.splice(0);
        null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0);
        for (const zv of vv) zv.resolve(!0);
        this.runNextAttempt()
      }
      resume() {
        this.unloading = !1
      }
      runAttempt(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Promise(((Pv, hv) => {
          this.attemptQueue.push({
            run: () => {
              this.inProgress++;
              const zv = () => {
                this.inProgress--, this.runNextAttempt()
              };
              vv().then((vv => {
                zv(), Pv(vv)
              }), (vv => {
                zv(), hv(vv)
              }))
            },
            isRedelivery: zv
          }), this.runNextAttempt()
        }))
      }
      runNextAttempt() {
        for (null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0); this.inProgress < this.options.concurrency && this.attemptQueue.length > 0;) {
          const vv = this.options.getNow(),
            zv = this.attemptQueue.findIndex((zv => {
              let {
                isRedelivery: Pv
              } = zv;
              return this.unloading || !Pv || vv >= this.nextSendAt
            }));
          if (zv < 0) return void(this.redeliveryTimer = setTimeout((() => {
            this.redeliveryTimer = void 0, this.runNextAttempt()
          }), Math.max(0, this.nextSendAt - vv)));
          const [Pv] = this.attemptQueue.splice(zv, 1);
          Pv.isRedelivery && !this.unloading && (this.nextSendAt = vv + 1), Pv.run()
        }
      }
      waitForTurn(vv, zv) {
        const Pv = Math.min(zv * (1 + .2 * this.options.getRandom()), this.options.retry.maxBackoffMs);
        return new Promise((zv => {
          this.waiting.push({
            sequence: vv,
            readyAt: this.options.getNow() + Pv,
            resolve: zv
          }), this.waiting.sort(((vv, zv) => vv.readyAt === zv.readyAt ? vv.sequence - zv.sequence : vv.readyAt - zv.readyAt)), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0), this.scheduleNext()
        }))
      }
      scheduleNext() {
        if (null != this.waitingTimer || 0 === this.waiting.length) return;
        const vv = this.waiting[0],
          zv = vv.readyAt;
        this.waitingTimer = setTimeout((() => {
          this.waitingTimer = void 0;
          const zv = this.waiting.indexOf(vv);
          zv >= 0 && this.waiting.splice(zv, 1), vv.resolve(!1), this.scheduleNext()
        }), Math.max(0, zv - this.options.getNow()))
      }
    };

    function Te(vv, zv) {
      if (null == vv) return {};
      var Pv, hv, Sv = function(vv, zv) {
        if (null == vv) return {};
        var Pv = {};
        for (var hv in vv)
          if ({}.hasOwnProperty.call(vv, hv)) {
            if (zv.includes(hv)) continue;
            Pv[hv] = vv[hv]
          } return Pv
      }(vv, zv);
      if (Object.getOwnPropertySymbols) {
        var ev = Object.getOwnPropertySymbols(vv);
        for (hv = 0; hv < ev.length; hv++) Pv = ev[hv], zv.includes(Pv) || {}.propertyIsEnumerable.call(vv, Pv) && (Sv[Pv] = vv[Pv])
      }
      return Sv
    }

    function We(vv) {
      const {
        size: zv,
        concurrency: Pv
      } = vv, hv = [];
      let Sv = 0;
      const ev = () => {
        if (Sv < Pv && hv.length) {
          const {
            producer: vv,
            resolve: zv,
            reject: Pv
          } = hv.shift();
          Sv++, vv().then((vv => {
            Sv--, ev(), zv(vv)
          }), (vv => {
            Sv--, ev(), Pv(vv)
          }))
        }
      };
      return {
        add: vv => {
          if (hv.length + Sv >= zv) throw new Error("Task buffer full");
          return new Promise(((zv, Pv) => {
            hv.push({
              producer: vv,
              resolve: zv,
              reject: Pv
            }), ev()
          }))
        }
      }
    }
    const we = ["headers"],
      ae = ["keepalive", "signal"],
      se = new Set([408, 425, 429, 500, 502, 503, 504]),
      Ce = new Set([429, 503]);
    let ie = 0,
      ce = 0;
    var Ge = class extends Error {};
    var me = class extends kS {
      constructor(vv) {
        var zv, Pv, hv, Sv, ev, gv, pv, dv, Nv, lv, Tv, Wv, wv, av, sv, Cv, iv;
        super(), this.options = vv, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = PP, this.pendingCustomSends = 0, this.getNow = null !== (zv = vv.getNow) && void 0 !== zv ? zv : Date.now, this.requestTimeoutMs = null !== (Pv = vv.requestTimeoutMs) && void 0 !== Pv ? Pv : 1e4, this.compressionEnabled = null !== (hv = vv.requestCompression) && void 0 !== hv && hv && "undefined" !== typeof CompressionStream, vv.requestCompression && !this.compressionEnabled && this.logWarn("requestCompression is enabled but CompressionStream is not available. Falling back to uncompressed."), this.requestTimeoutMs > 0 && "undefined" === typeof AbortController && this.logWarn("AbortController is unavailable. Requests will be sent without the configured timeout."), this.deliveryQueue = new le({
          bufferSize: null !== (Sv = vv.bufferSize) && void 0 !== Sv ? Sv : 30,
          concurrency: null !== (ev = vv.concurrency) && void 0 !== ev ? ev : 5,
          retry: {
            maxAttempts: null !== (gv = null === (pv = vv.retry) || void 0 === pv ? void 0 : pv.maxAttempts) && void 0 !== gv ? gv : 3,
            initialBackoffMs: null !== (dv = null !== (Nv = null === (lv = vv.retry) || void 0 === lv ? void 0 : lv.initialBackoffMs) && void 0 !== Nv ? Nv : vv.defaultRateLimitBackoffMs) && void 0 !== dv ? dv : 1e3,
            maxBackoffMs: null !== (Tv = null === (Wv = vv.retry) || void 0 === Wv ? void 0 : Wv.maxBackoffMs) && void 0 !== Tv ? Tv : 3e4,
            backoffMultiplier: null !== (wv = null === (av = vv.retry) || void 0 === av ? void 0 : av.backoffMultiplier) && void 0 !== wv ? wv : 2
          },
          getNow: this.getNow,
          getRandom: null !== (sv = vv.getRandom) && void 0 !== sv ? sv : Math.random,
          onRetry: (vv, zv) => {
            this.logDebug(`Retrying failed request after ${vv}ms. Attempt ${zv}.`)
          }
        }), this.customPromiseBuffer = We({
          size: null !== (Cv = vv.bufferSize) && void 0 !== Cv ? Cv : 30,
          concurrency: null !== (iv = vv.concurrency) && void 0 !== iv ? iv : 5
        }), this.defaultPromiseBuffer = {
          add: vv => {
            if (this.promiseBuffer !== this.defaultPromiseBuffer || this.promiseBuffer.add !== this.defaultBufferAdd || this.pendingCustomSends > 0) return this.customPromiseBuffer.add(vv);
            const zv = this.deliveryQueue.reserve();
            if (!zv) throw new Error("Task buffer full");
            return this.runBufferedTask(zv, vv)
          }
        }, this.defaultBufferAdd = this.defaultPromiseBuffer.add, this.promiseBuffer = this.defaultPromiseBuffer, "undefined" !== typeof window && (window.addEventListener("pagehide", (() => this.deliveryQueue.flush())), window.addEventListener("pageshow", (vv => {
          vv.persisted && this.deliveryQueue.resume()
        })))
      }
      send(vv) {
        var zv = this;
        return Bh((function*() {
          const Pv = zv.promiseBuffer;
          if (Pv !== zv.defaultPromiseBuffer || Pv.add !== zv.defaultBufferAdd) {
            zv.pendingCustomSends++;
            try {
              yield Pv.add((() => zv.deliver(vv)))
            } catch (hv) {
              zv.logError("Permanent delivery failure", {
                error: hv,
                attempts: 0,
                elapsedTimeMs: 0
              })
            } finally {
              zv.pendingCustomSends--
            }
          } else yield zv.deliver(vv)
        }))()
      }
      runBufferedTask(vv, zv) {
        return Bh((function*() {
          let Pv;
          try {
            return yield vv.deliver(Bh((function*() {
              return Pv = yield zv(), {
                kind: "success",
                attemptsMade: 1
              }
            }))), Pv
          } finally {
            vv.release()
          }
        }))()
      }
      deliver(vv) {
        var zv = this;
        return Bh((function*() {
          const Pv = zv.deliveryQueue.reserve();
          if (Pv) try {
            const hv = yield zv.prepareRequest(vv), Sv = yield Pv.deliver(((vv, Pv) => zv.performAttempt(hv, vv, Pv)));
            "terminal" === Sv.kind && zv.logError("retries-exhausted" === Sv.reason ? "Delivery retries exhausted" : "Permanent delivery failure", lz(lz({}, Sv.failure), {}, {
              reason: Sv.reason,
              attempts: Sv.attempts,
              elapsedTimeMs: Sv.elapsedTimeMs
            }))
          } catch (hv) {
            zv.logError("Permanent delivery failure", {
              error: hv,
              attempts: 0,
              elapsedTimeMs: 0
            })
          } finally {
            Pv.release()
          } else zv.logError("Permanent delivery failure", {
            error: "Reliable delivery queue is full",
            attempts: 0,
            elapsedTimeMs: 0
          })
        }))()
      }
      getIgnoreUrls() {
        var vv;
        return [this.options.url].concat(null !== (vv = this.config.ignoreUrls) && void 0 !== vv ? vv : [])
      }
      isBatched() {
        return !0
      }
      prepareRequest(vv) {
        var zv = this;
        return Bh((function*() {
          var Pv, hv;
          const Sv = ze(vv),
            ev = null === (Pv = Sv.meta.session) || void 0 === Pv ? void 0 : Pv.id,
            gv = JSON.stringify(Sv),
            pv = null !== (hv = zv.options.requestOptions) && void 0 !== hv ? hv : {},
            {
              headers: dv = {}
            } = pv,
            Nv = Te(pv, we),
            {
              keepalive: lv,
              signal: Tv
            } = Nv,
            Wv = Te(Nv, ae),
            wv = {};
          for (const [vv, zv] of Object.entries(dv)) wv[vv] = "function" === typeof zv ? yield zv(): zv;
          let av = gv,
            sv = function(vv) {
              return "undefined" === typeof TextEncoder ? vv.length : (new TextEncoder).encode(vv).byteLength
            }(gv);
          const Cv = {};
          return zv.compressionEnabled && (av = yield zv.compress(gv), sv = av.size, Cv["Content-Encoding"] = "gzip"), {
            bodySize: sv,
            sessionId: ev,
            requestInit: lz({
              method: "POST",
              headers: lz(lz(lz(lz(lz({
                "Content-Type": "application/json"
              }, Cv), wv), zv.options.apiKey ? {
                "x-api-key": zv.options.apiKey
              } : {}), ev ? {
                "x-faro-session-id": ev
              } : {}), {}, {
                "Idempotency-Key": iz(20)
              }),
              body: av
            }, Wv)
          }
        }))()
      }
      performAttempt(vv, zv, Pv) {
        var hv = this;
        return Bh((function*() {
          var Sv;
          const ev = null === (Sv = hv.options.requestOptions) || void 0 === Sv ? void 0 : Sv.signal;
          if (null === ev || void 0 === ev ? void 0 : ev.aborted) return {
            kind: "terminal",
            failure: {
              error: ev.reason
            },
            attemptsMade: 0
          };
          let gv = 0;
          try {
            var pv;
            const Sv = yield hv.fetchWithKeepaliveFallback(vv.requestInit, vv.bodySize, !!Pv || (null === (pv = hv.options.requestOptions) || void 0 === pv ? void 0 : pv.keepalive), zv, (() => gv++));
            if (hv.handleResponse(Sv, vv.sessionId), Sv.status >= 200 && Sv.status < 300) return {
              kind: "success",
              attemptsMade: gv
            };
            const ev = {
              status: Sv.status
            };
            return !se.has(Sv.status) || Pv ? {
              kind: "terminal",
              failure: ev,
              attemptsMade: gv
            } : {
              kind: "retry",
              failure: ev,
              attemptsMade: gv,
              retryAfterMs: Ce.has(Sv.status) ? hv.getRetryAfterDelayMs(Sv) : void 0
            }
          } catch (dv) {
            const vv = {
              error: dv
            };
            return (null === ev || void 0 === ev ? void 0 : ev.aborted) || !hv.isFetchNetworkError(dv) || Pv ? {
              kind: "terminal",
              failure: vv,
              attemptsMade: gv
            } : {
              kind: "retry",
              failure: vv,
              attemptsMade: gv
            }
          }
        }))()
      }
      fetchWithKeepaliveFallback(vv, zv, Pv, hv, Sv) {
        var ev = this;
        return Bh((function*() {
          const gv = ev.getNow(),
            pv = ev.reserveKeepalive(zv, Pv);
          try {
            return yield ev.fetchWithTimeout(lz(lz({}, vv), {}, {
              keepalive: pv.keepalive
            }), ev.requestTimeoutMs, Sv)
          } catch (Nv) {
            var dv;
            if (pv.keepalive && hv > 1 && ev.isFetchNetworkError(Nv) && !(Nv instanceof Ge) && !(null === (dv = ev.options.requestOptions) || void 0 === dv || null === (dv = dv.signal) || void 0 === dv ? void 0 : dv.aborted)) {
              ev.logDebug("Retrying failed keepalive request with keepalive disabled.");
              const zv = ev.requestTimeoutMs - (ev.getNow() - gv);
              return ev.fetchWithTimeout(lz(lz({}, vv), {}, {
                keepalive: !1
              }), zv, Sv)
            }
            throw Nv
          } finally {
            pv.release()
          }
        }))()
      }
      fetchWithTimeout(vv, zv, Pv) {
        var hv = this;
        return Bh((function*() {
          var Sv;
          const ev = null === (Sv = hv.options.requestOptions) || void 0 === Sv ? void 0 : Sv.signal;
          if (hv.requestTimeoutMs <= 0 || "undefined" === typeof AbortController) return Pv(), fetch(hv.options.url, lz(lz({}, vv), {}, {
            signal: ev
          }));
          if (zv <= 0) throw new Ge("Request timed out");
          const gv = new AbortController,
            pv = () => gv.abort(null === ev || void 0 === ev ? void 0 : ev.reason);
          null === ev || void 0 === ev || ev.addEventListener("abort", pv, {
            once: !0
          });
          let dv = !1;
          const Nv = setTimeout((() => {
            dv = !0, gv.abort()
          }), zv);
          try {
            return Pv(), yield fetch(hv.options.url, lz(lz({}, vv), {}, {
              signal: gv.signal
            }))
          } catch (lv) {
            if (dv && !(null === ev || void 0 === ev ? void 0 : ev.aborted)) throw new Ge("Request timed out");
            throw lv
          } finally {
            clearTimeout(Nv), null === ev || void 0 === ev || ev.removeEventListener("abort", pv)
          }
        }))()
      }
      getRetryAfterDelayMs(vv) {
        const zv = vv.headers.get("Retry-After");
        if (!zv) return;
        if (/^\d+$/.test(zv)) {
          const vv = 1e3 * Number(zv);
          return Number.isFinite(vv) ? vv : Number.POSITIVE_INFINITY
        }
        const Pv = this.getNow(),
          hv = function(vv, zv) {
            const Pv = he.exec(vv);
            if (Pv) {
              const [, vv, zv, hv, Sv, ev, gv, pv] = Pv;
              return Ne({
                weekday: ge.indexOf(vv),
                day: Number(zv),
                month: de.indexOf(hv),
                year: Number(Sv),
                hour: Number(ev),
                minute: Number(gv),
                second: Number(pv)
              })
            }
            const hv = Se.exec(vv);
            if (hv) {
              const [, vv, Pv, gv, pv, dv, Nv, lv] = hv, Tv = new Date(zv);
              if (Number.isNaN(Tv.getTime())) return;
              const Wv = Tv.getUTCFullYear();
              let wv = 100 * Math.floor(Wv / 100) + Number(pv);
              wv < Wv && (wv += 100);
              const av = de.indexOf(gv),
                sv = {
                  month: av,
                  day: Number(Pv),
                  hour: Number(dv),
                  minute: Number(Nv),
                  second: Number(lv),
                  millisecond: 0
                },
                Cv = {
                  month: Tv.getUTCMonth(),
                  day: Tv.getUTCDate(),
                  hour: Tv.getUTCHours(),
                  minute: Tv.getUTCMinutes(),
                  second: Tv.getUTCSeconds(),
                  millisecond: Tv.getUTCMilliseconds()
                };
              return (wv > Wv + 50 || wv === Wv + 50 && (ev = Cv, ((Sv = sv).month - ev.month || Sv.day - ev.day || Sv.hour - ev.hour || Sv.minute - ev.minute || Sv.second - ev.second || Sv.millisecond - ev.millisecond) > 0)) && (wv -= 100), Ne({
                weekday: pe.indexOf(vv),
                day: Number(Pv),
                month: av,
                year: wv,
                hour: Number(dv),
                minute: Number(Nv),
                second: Number(lv)
              })
            }
            var Sv, ev;
            const gv = ee.exec(vv);
            if (!gv) return;
            const [, pv, dv, Nv, lv, Tv, Wv, wv, av] = gv;
            return Ne({
              weekday: ge.indexOf(pv),
              day: Number(null !== Nv && void 0 !== Nv ? Nv : lv),
              month: de.indexOf(dv),
              year: Number(av),
              hour: Number(Tv),
              minute: Number(Wv),
              second: Number(wv)
            })
          }(zv, Pv);
        return null == hv ? void 0 : Math.max(0, hv - Pv)
      }
      reserveKeepalive(vv, zv) {
        if (!1 === zv || vv > 6e4 || ie + vv > 6e4 || ce >= 9) return {
          keepalive: !1,
          release: yz
        };
        ie += vv, ce++;
        let Pv = !1;
        return {
          keepalive: !0,
          release: () => {
            Pv || (Pv = !0, ie -= vv, ce--)
          }
        }
      }
      handleResponse(vv, zv) {
        202 === vv.status && "invalid" === vv.headers.get("X-Faro-Session-Status") && this.extendFaroSession(this.config, this.logDebug.bind(this), zv), vv.text().catch(yz)
      }
      isFetchNetworkError(vv) {
        return vv instanceof TypeError || vv instanceof Ge || vv instanceof DOMException && "AbortError" === vv.name
      }
      compress(vv) {
        return Bh((function*() {
          const zv = [],
            Pv = new ReadableStream({
              start(zv) {
                zv.enqueue((new TextEncoder).encode(vv)), zv.close()
              }
            }).pipeThrough(new CompressionStream("gzip")).getReader();
          for (;;) {
            const {
              done: vv,
              value: hv
            } = yield Pv.read();
            if (vv) return new Blob(zv);
            zv.push(hv)
          }
        }))()
      }
      extendFaroSession(vv, zv, Pv) {
        var hv, Sv;
        const ev = vv.sessionTracking;
        if (!(null === ev || void 0 === ev ? void 0 : ev.enabled)) return void zv("Session expired.");
        const {
          fetchUserSession: gv,
          storeUserSession: pv
        } = Mz(ev), dv = null === (hv = this.metas.value.session) || void 0 === hv ? void 0 : hv.id, Nv = null === (Sv = gv()) || void 0 === Sv ? void 0 : Sv.sessionId;
        Pv && Pv === dv && Pv === Nv ? (Vz({
          fetchUserSession: gv,
          storeUserSession: pv
        })({
          forceSessionExtend: !0
        }), zv("Session expired; created new session.")) : zv("Ignoring stale or cross-tab session-invalid response; request session no longer current.")
      }
    };
    const je = () => {
      const vv = window.k6;
      return {
        k6: lz({
          isK6Browser: !0
        }, (null === vv || void 0 === vv ? void 0 : vv.testRunId) && {
          testRunId: null === vv || void 0 === vv ? void 0 : vv.testRunId
        })
      }
    };
    let fe, Fe;

    function Ye() {
      let {
        generatePageId: vv,
        initialPageMeta: zv
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return () => {
        const Pv = location.href;
        return Kv(vv) && fe !== Pv && (fe = Pv, Fe = vv(location)), {
          page: lz(lz({
            url: Pv
          }, Fe ? {
            id: Fe
          } : {}), zv)
        }
      }
    }

    function ne() {
      let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uz,
        zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const Pv = Jz;
      return zv > 0 && (Pv.error = zv >= 1 ? function() {
        for (var zv = arguments.length, hv = new Array(zv), Sv = 0; Sv < zv; Sv++) hv[Sv] = arguments[Sv];
        vv.error(`${Pv.prefix}\n`, ...hv)
      } : yz, Pv.warn = zv >= 2 ? function() {
        for (var zv = arguments.length, hv = new Array(zv), Sv = 0; Sv < zv; Sv++) hv[Sv] = arguments[Sv];
        vv.warn(`${Pv.prefix}\n`, ...hv)
      } : yz, Pv.info = zv >= 3 ? function() {
        for (var zv = arguments.length, hv = new Array(zv), Sv = 0; Sv < zv; Sv++) hv[Sv] = arguments[Sv];
        vv.info(`${Pv.prefix}\n`, ...hv)
      } : yz, Pv.debug = zv >= 4 ? function() {
        for (var zv = arguments.length, hv = new Array(zv), Sv = 0; Sv < zv; Sv++) hv[Sv] = arguments[Sv];
        vv.debug(`${Pv.prefix}\n`, ...hv)
      } : yz), Pv
    }
    const Oe = "faro",
      De = {
        enabled: !0,
        sendTimeout: 250,
        itemLimit: 50
      },
      Ke = ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "url", "experimental"];

    function Ve(vv) {
      var zv, Pv, Sv, ev, gv, pv;
      const dv = [],
        lv = ne(vv.unpatchedConsole, vv.internalLoggerLevel);
      vv.transports ? ((vv.url || vv.apiKey) && lv.error('if "transports" is defined, "url" and "apiKey" should not be defined'), dv.push(...vv.transports)) : vv.url ? dv.push(new me({
        url: vv.url,
        apiKey: vv.apiKey,
        requestCompression: vv.requestCompression
      })) : lv.error('either "url" or "transports" must be defined');
      const {
        dedupe: Tv = !0,
        eventDomain: Wv = hv,
        globalObjectKey: wv = Oe,
        instrumentations: av = HS(),
        internalLoggerLevel: sv = Ez,
        isolate: Cv = !1,
        logArgsSerializer: iv = UP,
        metas: cv = Re(vv),
        paused: Gv = !1,
        preventGlobalExposure: mv = !1,
        unpatchedConsole: jv = uz,
        url: fv,
        experimental: Fv
      } = vv, Yv = Te(vv, Ke), nv = null !== (zv = null === Fv || void 0 === Fv ? void 0 : Fv.trackNavigation) && void 0 !== zv && zv, Ov = {
        dataAttributeName: kh(null !== (Pv = null === (Sv = vv.userActionsInstrumentation) || void 0 === Sv ? void 0 : Sv.dataAttributeName) && void 0 !== Pv ? Pv : oh),
        excludeItem: null === (ev = vv.userActionsInstrumentation) || void 0 === ev ? void 0 : ev.excludeItem,
        initialActivityTimeout: Xh(null === (gv = vv.userActionsInstrumentation) || void 0 === gv ? void 0 : gv.initialActivityTimeout, 100, (vv => lv.warn(vv)))
      };
      return lz(lz({}, Yv), {}, {
        batching: lz(lz({}, De), vv.batching),
        dedupe: Tv,
        globalObjectKey: wv,
        instrumentations: Ue(av, vv),
        internalLoggerLevel: sv,
        isolate: Cv,
        logArgsSerializer: iv,
        metas: cv,
        parseStacktrace: sP,
        paused: Gv,
        preventGlobalExposure: mv,
        transports: dv,
        unpatchedConsole: jv,
        eventDomain: Wv,
        ignoreUrls: [...null !== (pv = vv.ignoreUrls) && void 0 !== pv ? pv : [], ...fv ? [fv] : [], /\/collect(?:\/[\w]*)?$/],
        sessionTracking: lz(lz(lz({}, Nv), vv.sessionTracking), xe({
          trackGeolocation: vv.trackGeolocation,
          sessionTracking: vv.sessionTracking
        })),
        userActionsInstrumentation: Ov,
        experimental: {
          trackNavigation: nv
        }
      })
    }

    function Ue(vv, zv) {
      let {
        experimental: Pv
      } = zv;
      var hv;
      const Sv = null !== (hv = null === Pv || void 0 === Pv ? void 0 : Pv.trackNavigation) && void 0 !== hv && hv;
      return vv.filter((vv => !("@grafana/faro-web-sdk:instrumentation-navigation" === vv.name && !Sv)))
    }

    function Re(vv) {
      var zv, Pv, hv;
      const {
        page: Sv,
        generatePageId: ev
      } = null !== (zv = null === vv || void 0 === vv ? void 0 : vv.pageTracking) && void 0 !== zv ? zv : {}, gv = [ES, oS, Ye({
        generatePageId: ev,
        initialPageMeta: Sv
      }), ...null !== (Pv = vv.metas) && void 0 !== Pv ? Pv : [], rS];
      return Dv(null === (hv = window) || void 0 === hv ? void 0 : hv.k6) ? [...gv, je] : gv
    }

    function xe(vv) {
      let {
        trackGeolocation: zv,
        sessionTracking: Pv
      } = vv;
      var hv;
      const Sv = {};
      return nv(zv) && (Sv.geoLocationTrackingEnabled = zv), Ev(Sv) ? {} : {
        session: lz(lz({}, null !== (hv = null === Pv || void 0 === Pv ? void 0 : Pv.session) && void 0 !== hv ? hv : {}), {}, {
          overrides: Sv
        })
      }
    }
    const te = new WeakSet;

    function qe(vv) {
      return te.add(vv), vv
    }

    function Ie(vv, zv) {
      if (vv.capture) return qe(vv.capture(zv));
      const Pv = qe(vv.value);
      return null === zv || void 0 === zv || zv(), Pv
    }

    function Qe(vv) {
      const zv = `__faroBundleId_${vv}`,
        Pv = null === lv || void 0 === lv ? void 0 : lv[zv];
      if ("string" === typeof Pv && "" !== Pv) return Pv;
      const hv = "undefined" !== typeof window ? window[zv] : void 0;
      return "string" === typeof hv && "" !== hv ? hv : void 0
    }

    function Ze(vv) {
      var zv, Pv;
      const hv = vv.config.app.name,
        Sv = hv ? function(vv) {
          return null === lv || void 0 === lv ? void 0 : lv[`__faroGitHash_${vv}`]
        }(hv) : void 0,
        ev = {
          sdk: {
            version: PP,
            name: "faro"
          },
          app: Xz({
            bundleId: hv && Qe(hv)
          }, void 0 !== Sv ? {
            gitHash: Sv
          } : {})
        },
        gv = null === (zv = vv.config.sessionTracking) || void 0 === zv ? void 0 : zv.session;
      gv && vv.api.setSession(gv), vv.config.app && (ev.app = Xz(Xz({}, vv.config.app), ev.app)), vv.config.user && (ev.user = vv.config.user), vv.config.view && (ev.view = vv.config.view), vv.metas.add(ev, ...null !== (Pv = vv.config.metas) && void 0 !== Pv ? Pv : [])
    }
    var Ae = class {
      constructor(vv, zv) {
        var Pv, hv;
        this.signalBuffer = [], this.itemLimit = null !== (Pv = null === zv || void 0 === zv ? void 0 : zv.itemLimit) && void 0 !== Pv ? Pv : 50, this.sendTimeout = null !== (hv = null === zv || void 0 === zv ? void 0 : zv.sendTimeout) && void 0 !== hv ? hv : 250, this.paused = (null === zv || void 0 === zv ? void 0 : zv.paused) || !1, this.sendFn = vv, this.paused || this.start(), "undefined" !== typeof document && document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }))
      }
      addItem(vv) {
        this.paused || (this.signalBuffer.push(vv), this.signalBuffer.length >= this.itemLimit && this.flush())
      }
      start() {
        this.paused = !1, this.sendTimeout > 0 && (this.flushInterval = setInterval((() => this.flush()), this.sendTimeout))
      }
      pause() {
        this.paused = !0, clearInterval(this.flushInterval)
      }
      groupItems(vv) {
        const zv = new Map;
        return vv.forEach((vv => {
          const Pv = JSON.stringify(vv.meta);
          let hv = zv.get(Pv);
          hv = void 0 === hv ? [vv] : [...hv, vv], zv.set(Pv, hv)
        })), Array.from(zv.values())
      }
      flush() {
        if (this.paused || 0 === this.signalBuffer.length) return;
        const vv = this.signalBuffer;
        this.signalBuffer = [];
        try {
          this.groupItems(vv).forEach(this.sendFn)
        } catch (zv) {
          throw this.signalBuffer = [...vv, ...this.signalBuffer], this.trimBufferToLimit(), zv
        }
      }
      trimBufferToLimit() {
        this.signalBuffer.length > this.itemLimit && (this.signalBuffer = this.signalBuffer.slice(0, this.itemLimit))
      }
    };

    function Le(vv, zv, Pv, hv) {
      var Sv;
      zv.debug("Initializing transports");
      const ev = [];
      let gv = [];
      const pv = vv => {
        let zv = vv;
        for (const hv of gv) {
          const vv = zv.map(hv).filter(Boolean);
          if (0 === vv.length) return [];
          zv = He(vv, Pv)
        }
        return zv
      };
      let dv;
      (null === (Sv = Pv.batching) || void 0 === Sv ? void 0 : Sv.enabled) && (dv = new Ae((vv => {
        const Pv = pv(vv);
        if (0 !== Pv.length)
          for (const hv of ev) zv.debug(`Transporting item using ${hv.name}\n`, Pv), hv.isBatched() && hv.send(Pv)
      }), {
        sendTimeout: Pv.batching.sendTimeout,
        itemLimit: Pv.batching.itemLimit,
        paused: Pv.paused
      }));
      return {
        add: function() {
          zv.debug("Adding transports");
          for (var Sv = arguments.length, gv = new Array(Sv), pv = 0; pv < Sv; pv++) gv[pv] = arguments[pv];
          gv.forEach((Sv => {
            zv.debug(`Adding "${Sv.name}" transport`), ev.some((vv => vv === Sv)) ? zv.warn(`Transport ${Sv.name} is already added`) : (Sv.unpatchedConsole = vv, Sv.internalLogger = zv, Sv.config = Pv, Sv.metas = hv, ev.push(Sv))
          }))
        },
        addBeforeSendHooks: function() {
          zv.debug("Adding beforeSendHooks\n", gv);
          for (var vv = arguments.length, Pv = new Array(vv), hv = 0; hv < vv; hv++) Pv[hv] = arguments[hv];
          Pv.forEach((vv => {
            vv && gv.push(vv)
          }))
        },
        getBeforeSendHooks: () => [...gv],
        execute: vv => {
          var Sv;
          if (!Pv.paused && Lz(hv).shouldCapture()) {
            if (Tv = vv.meta, !te.has(Tv)) {
              var gv, Nv, lv;
              const zv = null === (gv = hv.value.session) || void 0 === gv ? void 0 : gv.id,
                Sv = Ie(hv);
              if (Pv.paused) return;
              const ev = Xz({}, vv.meta);
              (null === (Nv = ev.session) || void 0 === Nv ? void 0 : Nv.id) === zv && (null === (lv = Sv.session) || void 0 === lv ? void 0 : lv.id) !== zv && (void 0 === Sv.session ? delete ev.session : ev.session = Sv.session), vv = Xz(Xz({}, vv), {}, {
                meta: qe(ev)
              })
            }
            var Tv;
            (null === (Sv = Pv.batching) || void 0 === Sv ? void 0 : Sv.enabled) && (null === dv || void 0 === dv || dv.addItem(vv)), (vv => {
              var hv;
              if ((null === (hv = Pv.batching) || void 0 === hv ? void 0 : hv.enabled) && ev.every((vv => vv.isBatched()))) return;
              const [Sv] = pv([vv]);
              if (void 0 !== Sv)
                for (const pv of ev) {
                  var gv;
                  zv.debug(`Transporting item using ${pv.name}\n`, Sv), pv.isBatched() ? (null === (gv = Pv.batching) || void 0 === gv ? void 0 : gv.enabled) || pv.send([Sv]) : pv.send(Sv)
                }
            })(vv)
          }
        },
        isPaused: () => Pv.paused,
        pause: () => {
          zv.debug("Pausing transports"), null === dv || void 0 === dv || dv.pause(), Pv.paused = !0
        },
        remove: function() {
          zv.debug("Removing transports");
          for (var vv = arguments.length, Pv = new Array(vv), hv = 0; hv < vv; hv++) Pv[hv] = arguments[hv];
          Pv.forEach((vv => {
            zv.debug(`Removing "${vv.name}" transport`);
            const Pv = ev.indexOf(vv); - 1 !== Pv ? ev.splice(Pv, 1) : zv.warn(`Transport "${vv.name}" is not added`)
          }))
        },
        removeBeforeSendHooks: function() {
          for (var vv = arguments.length, Pv = new Array(vv), hv = 0; hv < vv; hv++) Pv[hv] = arguments[hv];
          zv.debug("Removing beforeSendHooks"), gv = gv.filter((vv => !Pv.includes(vv)))
        },
        get transports() {
          return [...ev]
        },
        unpause: () => {
          zv.debug("Unpausing transports"), null === dv || void 0 === dv || dv.start(), Pv.paused = !1
        }
      }
    }

    function He(vv, zv) {
      if (zv.preserveOriginalError)
        for (const Pv of vv) "exception" === Pv.type && delete Pv.payload.originalError;
      return vv
    }
    let Me = uz;

    function ye(vv) {
      var zv;
      return Me = null !== (zv = vv.unpatchedConsole) && void 0 !== zv ? zv : Me, Me
    }
    let Be, Je = Jz;

    function Ee(vv, zv) {
      return Je = ne(vv, zv.internalLoggerLevel), Je
    }

    function oe(vv) {
      let {
        internalLogger: zv,
        config: Pv,
        metas: hv,
        transports: Sv,
        tracesApi: ev,
        userActionsApi: gv
      } = vv;
      var pv;
      zv.debug("Initializing exceptions API");
      let dv = null;
      Be = null !== (pv = Pv.parseStacktrace) && void 0 !== pv ? pv : Be;
      const Nv = vv => {
          zv.debug("Changing stacktrace parser"), Be = null !== vv && void 0 !== vv ? vv : Be
        },
        {
          ignoreErrors: lv = [],
          preserveOriginalError: Tv
        } = Pv;
      return Nv(Pv.parseStacktrace), {
        changeStacktraceParser: Nv,
        getStacktraceParser: () => Be,
        pushError: function(vv) {
          let {
            skipDedupe: pv,
            stackFrames: Nv,
            type: Wv,
            context: wv,
            spanContext: av,
            timestampOverwriteMs: sv,
            originalError: Cv,
            fingerprint: iv,
            fatal: cv
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (! function(vv, zv) {
              const {
                message: Pv,
                name: hv,
                stack: Sv
              } = zv;
              return ev = vv, gv = Pv + " " + hv + " " + Sv, ev.some((vv => fv(vv) ? gv.includes(vv) : !!gv.match(vv)));
              var ev, gv
            }(lv, null !== Cv && void 0 !== Cv ? Cv : vv)) try {
            var Gv, mv;
            if (!Lz(hv).shouldCapture()) return;
            const lv = Iz(Xz(Xz({}, function(vv) {
                let zv = vv.cause;
                Qv(zv) ? zv = vv.cause.toString() : null !== zv && (Dv(vv.cause) || Vv(vv.cause)) ? zv = qz(vv.cause) : null != zv && (zv = vv.cause.toString());
                return null == zv ? {} : {
                  cause: zv
                }
              }(null !== Cv && void 0 !== Cv ? Cv : vv)), null !== wv && void 0 !== wv ? wv : {})),
              fv = Xz(Xz(Xz(Xz({
                type: Wv || vv.name || "Error",
                value: vv.message,
                timestamp: sv ? sz(sv) : az(),
                trace: av ? {
                  trace_id: av.traceId,
                  span_id: av.spanId
                } : ev.getTraceContext()
              }, Ev(lv) ? {} : {
                context: lv
              }), Tv ? {
                originalError: Cv
              } : {}), iv ? {
                fingerprint: iv
              } : {}), void 0 !== cv ? {
                fatal: cv
              } : {});
            Nv = null !== (Gv = Nv) && void 0 !== Gv ? Gv : vv.stack ? null === Be || void 0 === Be ? void 0 : Be(vv).frames : void 0, (null === Nv || void 0 === Nv ? void 0 : Nv.length) && (fv.stacktrace = {
              frames: Nv
            });
            const Fv = {
              type: fv.type,
              value: fv.value,
              stacktrace: fv.stacktrace,
              context: fv.context,
              fingerprint: fv.fingerprint,
              fatal: null !== (mv = fv.fatal) && void 0 !== mv && mv
            };
            if (!pv && Pv.dedupe && !jv(dv) && cz(Fv, dv)) return void zv.debug("Skipping error push because it is the same as the last one\n", fv);
            const Yv = dv,
              nv = Ie(hv);
            if (dv !== Yv && !pv && Pv.dedupe && cz(Fv, dv)) return;
            dv = Fv;
            const Ov = {
              meta: nv,
              payload: fv,
              type: "exception"
            };
            zv.debug("Pushing exception\n", Ov), fS(gv.getActiveUserAction(), Ov) || Sv.execute(Ov)
          } catch (Fv) {
            zv.error("Error pushing event", Fv)
          }
        }
      }
    }

    function be(vv, zv, Pv, hv, Sv) {
      zv.debug("Initializing API");
      let ev = null;
      const gv = function(vv) {
          let {
            transports: zv,
            internalLogger: Pv,
            config: hv,
            pushEvent: Sv
          } = vv;
          var ev;
          const gv = null === (ev = hv.userActionsInstrumentation) || void 0 === ev ? void 0 : ev.excludeItem;
          let pv;
          const dv = () => pv;
          return {
            startUserAction: (vv, hv, ev) => {
              if (void 0 === dv()) {
                const Pv = new mS({
                  name: vv,
                  transports: zv,
                  attributes: hv,
                  trigger: (null === ev || void 0 === ev ? void 0 : ev.triggerName) || "faroApiCall",
                  importance: (null === ev || void 0 === ev ? void 0 : ev.importance) || cS.Normal,
                  trackUserActionsExcludeItem: gv,
                  pushEvent: Sv
                });
                return Pv.filter((vv => [3, 2].includes(vv))).first().subscribe((() => {
                  pv = void 0
                })), jS.notify({
                  type: iS,
                  userAction: Pv,
                  initialActivityTimeout: null === ev || void 0 === ev ? void 0 : ev.initialActivityTimeout
                }), pv = Pv, pv
              }
              Pv.error("Attempted to create a new user action while one is already running. This is not possible.")
            },
            getActiveUserAction: dv
          }
        }({
          transports: Sv,
          config: Pv,
          internalLogger: zv,
          pushEvent: (vv, Pv, hv, Sv) => {
            ev ? ev(vv, Pv, hv, Sv) : zv.warn("pushEventImpl is not initialized. Event dropped:", {
              name: vv,
              attributes: Pv,
              domain: hv,
              options: Sv
            })
          }
        }),
        pv = function(vv, zv, Pv, hv, Sv) {
          let ev;
          return zv.debug("Initializing traces API"), {
            getOTEL: () => ev,
            getTraceContext: () => {
              const vv = null === ev || void 0 === ev ? void 0 : ev.trace.getSpanContext(ev.context.active());
              return vv ? {
                trace_id: vv.traceId,
                span_id: vv.spanId
              } : void 0
            },
            initOTEL: (vv, Pv) => {
              zv.debug("Initializing OpenTelemetry"), ev = {
                trace: vv,
                context: Pv
              }
            },
            isOTELInitialized: () => !!ev,
            pushTraces: vv => {
              try {
                if (!Lz(hv).shouldCapture()) return;
                const Pv = {
                  type: "trace",
                  payload: vv,
                  meta: Ie(hv)
                };
                zv.debug("Pushing trace\n", Pv), Sv.execute(Pv)
              } catch (Pv) {
                zv.error("Error pushing trace\n", Pv)
              }
            }
          }
        }(0, zv, 0, hv, Sv),
        dv = {
          unpatchedConsole: vv,
          internalLogger: zv,
          userActionsApi: gv,
          config: Pv,
          metas: hv,
          transports: Sv,
          tracesApi: pv
        },
        Nv = function(vv) {
          let {
            internalLogger: zv,
            config: Pv,
            metas: hv,
            transports: Sv,
            tracesApi: ev,
            userActionsApi: gv
          } = vv, pv = null;
          return {
            pushEvent: function(vv, dv, Nv) {
              let {
                skipDedupe: lv,
                spanContext: Tv,
                timestampOverwriteMs: Wv,
                customPayloadTransformer: wv = vv => vv
              } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              try {
                if (!Lz(hv).shouldCapture()) return;
                const av = Iz(dv),
                  sv = wv({
                    name: vv,
                    domain: null !== Nv && void 0 !== Nv ? Nv : Pv.eventDomain,
                    attributes: Ev(av) ? void 0 : av,
                    timestamp: Wv ? sz(Wv) : az(),
                    trace: Tv ? {
                      trace_id: Tv.traceId,
                      span_id: Tv.spanId
                    } : ev.getTraceContext()
                  }),
                  Cv = {
                    name: sv.name,
                    attributes: sv.attributes,
                    domain: sv.domain
                  };
                if (!lv && Pv.dedupe && !jv(pv) && cz(Cv, pv)) return void zv.debug("Skipping event push because it is the same as the last one\n", sv);
                const iv = pv,
                  cv = Ie(hv);
                if (pv !== iv && !lv && Pv.dedupe && cz(Cv, pv)) return;
                pv = Cv;
                const Gv = {
                  meta: cv,
                  payload: sv,
                  type: "event"
                };
                zv.debug("Pushing event\n", Gv), fS(gv.getActiveUserAction(), Gv) || Sv.execute(Gv)
              } catch (av) {
                zv.error("Error pushing event", av)
              }
            }
          }
        }(dv);
      return ev = Nv.pushEvent, Xz(Xz(Xz(Xz(Xz(Xz(Xz({}, pv), oe(dv)), function(vv) {
        let zv, Pv, hv, Sv, {
          internalLogger: ev,
          metas: gv
        } = vv;
        ev.debug("Initializing meta API");
        const pv = vv => {
            Pv && gv.remove(Pv), Pv = {
              user: vv
            }, gv.add(Pv)
          },
          dv = (vv, Pv) => {
            var hv;
            const Sv = null === Pv || void 0 === Pv ? void 0 : Pv.overrides,
              ev = Sv ? {
                overrides: Xz(Xz({}, null === zv || void 0 === zv || null === (hv = zv.session) || void 0 === hv ? void 0 : hv.overrides), Sv)
              } : {};
            zv && gv.remove(zv), zv = {
              session: Xz(Xz({}, Ev(vv) ? void 0 : vv), ev)
            }, gv.add(zv)
          },
          Nv = (vv, zv) => {
            Lz(gv).notifySessionUpdate({
              type: "replace",
              session: vv,
              overrides: null === zv || void 0 === zv ? void 0 : zv.overrides
            }), dv(vv, zv)
          },
          lv = () => gv.value.session,
          Tv = () => gv.value.page;
        return {
          setUser: pv,
          resetUser: pv,
          setSession: Nv,
          resetSession: Nv,
          getSession: lv,
          setView: (vv, zv) => {
            var Pv;
            if ((null === zv || void 0 === zv ? void 0 : zv.overrides) && (Lz(gv).notifySessionUpdate({
                type: "overrides",
                overrides: zv.overrides
              }), dv(lv(), {
                overrides: zv.overrides
              })), (null === hv || void 0 === hv || null === (Pv = hv.view) || void 0 === Pv ? void 0 : Pv.name) === (null === vv || void 0 === vv ? void 0 : vv.name)) return;
            const Sv = hv;
            hv = {
              view: vv
            }, gv.add(hv), Sv && gv.remove(Sv)
          },
          getView: () => gv.value.view,
          setPage: vv => {
            var zv;
            const Pv = fv(vv) ? Xz(Xz({}, null !== (zv = null === Sv || void 0 === Sv ? void 0 : Sv.page) && void 0 !== zv ? zv : Tv()), {}, {
              id: vv
            }) : vv;
            Sv && gv.remove(Sv), Sv = {
              page: Pv
            }, gv.add(Sv)
          },
          getPage: Tv
        }
      }(dv)), function(vv) {
        let {
          internalLogger: zv,
          config: Pv,
          metas: hv,
          transports: Sv,
          tracesApi: ev,
          userActionsApi: gv
        } = vv;
        var pv;
        zv.debug("Initializing logs API");
        let dv = null;
        const Nv = null !== (pv = Pv.logArgsSerializer) && void 0 !== pv ? pv : UP;
        return {
          pushLog: function(vv) {
            let {
              context: pv,
              level: lv,
              skipDedupe: Tv,
              spanContext: Wv,
              timestampOverwriteMs: wv
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!Lz(hv).shouldCapture()) return;
              const av = Iz(pv),
                sv = {
                  message: Nv(vv),
                  level: null !== lv && void 0 !== lv ? lv : "log",
                  context: Ev(av) ? void 0 : av,
                  timestamp: wv ? sz(wv) : az(),
                  trace: Wv ? {
                    trace_id: Wv.traceId,
                    span_id: Wv.spanId
                  } : ev.getTraceContext()
                },
                Cv = {
                  message: sv.message,
                  level: sv.level,
                  context: sv.context
                };
              if (!Tv && Pv.dedupe && !jv(dv) && cz(Cv, dv)) return void zv.debug("Skipping log push because it is the same as the last one\n", sv);
              const iv = dv,
                cv = Ie(hv);
              if (dv !== iv && !Tv && Pv.dedupe && cz(Cv, dv)) return;
              dv = Cv;
              const Gv = {
                type: "log",
                payload: sv,
                meta: cv
              };
              zv.debug("Pushing log\n", Gv), fS(gv.getActiveUserAction(), Gv) || Sv.execute(Gv)
            } catch (av) {
              zv.error("Error pushing log\n", av)
            }
          }
        }
      }(dv)), function(vv) {
        let {
          internalLogger: zv,
          config: Pv,
          metas: hv,
          transports: Sv,
          tracesApi: ev,
          userActionsApi: gv
        } = vv;
        zv.debug("Initializing measurements API");
        let pv = null;
        return {
          pushMeasurement: function(vv) {
            let {
              skipDedupe: dv,
              context: Nv,
              spanContext: lv,
              timestampOverwriteMs: Tv
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!Lz(hv).shouldCapture()) return;
              const Wv = Iz(Nv),
                wv = Xz(Xz({}, vv), {}, {
                  trace: lv ? {
                    trace_id: lv.traceId,
                    span_id: lv.spanId
                  } : ev.getTraceContext(),
                  timestamp: Tv ? sz(Tv) : az(),
                  context: Ev(Wv) ? void 0 : Wv
                }),
                av = {
                  type: wv.type,
                  values: wv.values,
                  context: wv.context
                };
              if (!dv && Pv.dedupe && !jv(pv) && cz(av, pv)) return void zv.debug("Skipping measurement push because it is the same as the last one\n", wv);
              const sv = pv,
                Cv = Ie(hv);
              if (pv !== sv && !dv && Pv.dedupe && cz(av, pv)) return;
              pv = av;
              const iv = {
                type: "measurement",
                payload: wv,
                meta: Cv
              };
              zv.debug("Pushing measurement\n", iv), fS(gv.getActiveUserAction(), iv) || Sv.execute(iv)
            } catch (Wv) {
              zv.error("Error pushing measurement\n", Wv)
            }
          }
        }
      }(dv)), Nv), gv)
    }

    function re(vv) {
      const zv = ye(vv),
        Pv = Ee(zv, vv);
      if (av() && !vv.isolate) return void Pv.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
      Pv.debug("Initializing");
      const hv = function(vv, zv) {
          let Pv, hv = [],
            Sv = [],
            ev = [],
            gv = 0,
            pv = 0;
          const dv = () => hv.reduce(((vv, zv) => Object.assign(vv, Kv(zv) ? zv() : zv)), {}),
            Nv = () => {
              if (Sv.length) {
                const vv = dv();
                Sv.forEach((zv => zv(vv)))
              }
            };
          return {
            add: function() {
              for (var vv = arguments.length, Pv = new Array(vv), Sv = 0; Sv < vv; Sv++) Pv[Sv] = arguments[Sv];
              zv.debug("Adding metas\n", Pv), hv.push(...Pv), Nv()
            },
            remove: function() {
              for (var vv = arguments.length, Pv = new Array(vv), Sv = 0; Sv < vv; Sv++) Pv[Sv] = arguments[Sv];
              zv.debug("Removing metas\n", Pv), hv = hv.filter((vv => !Pv.includes(vv))), Nv()
            },
            addListener: vv => {
              zv.debug("Adding metas listener\n", vv), Sv.push(vv)
            },
            removeListener: vv => {
              zv.debug("Removing metas listener\n", vv), Sv = Sv.filter((zv => zv !== vv))
            },
            capture: vv => {
              var zv;
              const hv = void 0 !== Pv,
                Sv = null !== (zv = Pv) && void 0 !== zv ? zv : ev;
              hv || (Pv = Sv, gv = 0, pv = Sv.length);
              try {
                for (; gv < pv;) {
                  const vv = Sv[gv++];
                  null === vv || void 0 === vv || vv()
                }
                const zv = qe(dv());
                return null === vv || void 0 === vv || vv(), zv
              } finally {
                hv || (Pv = void 0)
              }
            },
            addCaptureListener: vv => {
              ev.push(vv)
            },
            removeCaptureListener: vv => {
              ev = ev.filter((zv => zv !== vv))
            },
            get value() {
              return dv()
            }
          }
        }(0, Pv),
        Sv = Le(zv, Pv, vv, hv),
        ev = be(zv, Pv, vv, hv, Sv),
        gv = function(vv, zv, Pv, hv, Sv, ev) {
          zv.debug("Initializing instrumentations");
          const gv = [];
          return {
            add: function() {
              zv.debug("Adding instrumentations");
              for (var pv = arguments.length, dv = new Array(pv), Nv = 0; Nv < pv; Nv++) dv[Nv] = arguments[Nv];
              dv.forEach((pv => {
                zv.debug(`Adding "${pv.name}" instrumentation`), gv.some((vv => vv.name === pv.name)) ? zv.warn(`Instrumentation ${pv.name} is already added`) : (pv.unpatchedConsole = vv, pv.internalLogger = zv, pv.config = Pv, pv.metas = hv, pv.transports = Sv, pv.api = ev, gv.push(pv), pv.initialize())
              }))
            },
            get instrumentations() {
              return [...gv]
            },
            remove: function() {
              zv.debug("Removing instrumentations");
              for (var vv = arguments.length, Pv = new Array(vv), hv = 0; hv < vv; hv++) Pv[hv] = arguments[hv];
              Pv.forEach((vv => {
                var Pv, hv;
                zv.debug(`Removing "${vv.name}" instrumentation`);
                const Sv = gv.reduce(((zv, Pv, hv) => null === zv && Pv.name === vv.name ? hv : null), null);
                null !== Sv ? (null === (Pv = (hv = gv[Sv]).destroy) || void 0 === Pv || Pv.call(hv), gv.splice(Sv, 1)) : zv.warn(`Instrumentation "${vv.name}" is not added`)
              }))
            }
          }
        }(zv, Pv, vv, hv, Sv, ev),
        pv = Cv(zv, Pv, vv, hv, Sv, ev, gv);
      return Ze(pv),
        function(vv) {
          vv.transports.add(...vv.config.transports), vv.transports.addBeforeSendHooks(vv.config.beforeSend)
        }(pv),
        function(vv) {
          vv.instrumentations.add(...vv.config.instrumentations)
        }(pv), pv
    }

    function ke(vv) {
      const zv = Ve(vv);
      if (zv) return re(zv)
    }
  },
  6406: function(vv, zv, Pv) {
    var hv;
    ! function(Sv, ev) {
      var gv = "function",
        pv = "undefined",
        dv = "object",
        Nv = "string",
        lv = "major",
        Tv = "model",
        Wv = "name",
        wv = "type",
        av = "vendor",
        sv = "version",
        Cv = "architecture",
        iv = "console",
        cv = "mobile",
        Gv = "tablet",
        mv = "smarttv",
        jv = "wearable",
        fv = "embedded",
        Fv = "Amazon",
        Yv = "Apple",
        nv = "ASUS",
        Ov = "BlackBerry",
        Dv = "Browser",
        Kv = "Chrome",
        Vv = "Firefox",
        Uv = "Google",
        Rv = "Honor",
        xv = "Huawei",
        tv = "LG",
        qv = "Microsoft",
        Iv = "Motorola",
        Qv = "Nvidia",
        Zv = "OnePlus",
        Av = "Opera",
        Lv = "OPPO",
        Hv = "Samsung",
        Mv = "Sharp",
        yv = "Sony",
        Bv = "Xiaomi",
        Jv = "Zebra",
        Ev = "Facebook",
        ov = "Chromium OS",
        bv = "Mac OS",
        rv = " Browser",
        kv = function(vv) {
          for (var zv = {}, Pv = 0; Pv < vv.length; Pv++) zv[vv[Pv].toUpperCase()] = vv[Pv];
          return zv
        },
        Xv = function(vv, zv) {
          return typeof vv === Nv && -1 !== uv(zv).indexOf(uv(vv))
        },
        uv = function(vv) {
          return vv.toLowerCase()
        },
        vz = function(vv, zv) {
          if (typeof vv === Nv) return vv = vv.replace(/^\s\s*/, ""), typeof zv === pv ? vv : vv.substring(0, 500)
        },
        zz = function(vv, zv) {
          for (var Pv, hv, Sv, pv, Nv, lv, Tv = 0; Tv < zv.length && !Nv;) {
            var Wv = zv[Tv],
              wv = zv[Tv + 1];
            for (Pv = hv = 0; Pv < Wv.length && !Nv && Wv[Pv];)
              if (Nv = Wv[Pv++].exec(vv))
                for (Sv = 0; Sv < wv.length; Sv++) lv = Nv[++hv], typeof(pv = wv[Sv]) === dv && pv.length > 0 ? 2 === pv.length ? typeof pv[1] == gv ? this[pv[0]] = pv[1].call(this, lv) : this[pv[0]] = pv[1] : 3 === pv.length ? typeof pv[1] !== gv || pv[1].exec && pv[1].test ? this[pv[0]] = lv ? lv.replace(pv[1], pv[2]) : ev : this[pv[0]] = lv ? pv[1].call(this, lv, pv[2]) : ev : 4 === pv.length && (this[pv[0]] = lv ? pv[3].call(this, lv.replace(pv[1], pv[2])) : ev) : this[pv] = lv || ev;
            Tv += 2
          }
        },
        Pz = function(vv, zv) {
          for (var Pv in zv)
            if (typeof zv[Pv] === dv && zv[Pv].length > 0) {
              for (var hv = 0; hv < zv[Pv].length; hv++)
                if (Xv(zv[Pv][hv], vv)) return "?" === Pv ? ev : Pv
            } else if (Xv(zv[Pv], vv)) return "?" === Pv ? ev : Pv;
          return zv.hasOwnProperty("*") ? zv["*"] : vv
        },
        hz = {
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
        Sz = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [sv, [Wv, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [sv, [Wv, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [Wv, sv],
            [/opios[\/ ]+([\w\.]+)/i],
            [sv, [Wv, Av + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [sv, [Wv, Av + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [sv, [Wv, Av]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [sv, [Wv, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [sv, [Wv, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
            [Wv, sv],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [sv, [Wv, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [sv, [Wv, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [sv, [Wv, "UC" + Dv]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [sv, [Wv, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [sv, [Wv, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [sv, [Wv, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [sv, [Wv, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [sv, [Wv, "Smart Lenovo " + Dv]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [Wv, /(.+)/, "$1 Secure " + Dv], sv
            ],
            [/\bfocus\/([\w\.]+)/i],
            [sv, [Wv, Vv + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [sv, [Wv, Av + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [sv, [Wv, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [sv, [Wv, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [sv, [Wv, Av + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [sv, [Wv, "MIUI" + rv]],
            [/fxios\/([\w\.-]+)/i],
            [sv, [Wv, Vv]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [sv, [Wv, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [Wv, /(.+)/, "$1Browser"], sv
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [Wv, /(.+)/, "$1" + rv], sv
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [sv, [Wv, Hv + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [sv, [Wv, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [Wv, "Sogou Mobile"], sv
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [Wv, sv],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [Wv],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [sv, Wv],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [Wv, Ev], sv
            ],
            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
            [Wv, sv],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [sv, [Wv, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [sv, [Wv, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [sv, [Wv, Kv + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [Wv, Kv + " WebView"], sv
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [sv, [Wv, "Android " + Dv]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [Wv, sv],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [sv, [Wv, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [sv, Wv],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [Wv, [sv, Pz, {
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
            [Wv, sv],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [Wv, "Netscape"], sv
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [Wv, sv],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [sv, [Wv, Vv + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [Wv, [sv, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [Wv, [sv, /master.|lts./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [Cv, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [Cv, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [Cv, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [Cv, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [Cv, "arm"]
            ],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [
              [Cv, /ower/, "", uv]
            ],
            [/ sun4\w[;\)]/i],
            [
              [Cv, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
            [
              [Cv, uv]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [Tv, [av, Hv],
              [wv, Gv]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
            [Tv, [av, Hv],
              [wv, cv]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [Tv, [av, Yv],
              [wv, cv]
            ],
            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
            [Tv, [av, Yv],
              [wv, Gv]
            ],
            [/(macintosh);/i],
            [Tv, [av, Yv]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [Tv, [av, Mv],
              [wv, cv]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [Tv, [av, Rv],
              [wv, Gv]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [Tv, [av, Rv],
              [wv, cv]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [Tv, [av, xv],
              [wv, Gv]
            ],
            [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
            [Tv, [av, xv],
              [wv, cv]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [Tv, /_/g, " "],
              [av, Bv],
              [wv, Gv]
            ],
            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [Tv, /_/g, " "],
              [av, Bv],
              [wv, cv]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [Tv, [av, Lv],
              [wv, cv]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [Tv, [av, Pz, {
                OnePlus: ["304", "403", "203"],
                "*": Lv
              }],
              [wv, Gv]
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [Tv, [av, "Vivo"],
              [wv, cv]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [Tv, [av, "Realme"],
              [wv, cv]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
            [Tv, [av, Iv],
              [wv, cv]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [Tv, [av, Iv],
              [wv, Gv]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [Tv, [av, tv],
              [wv, Gv]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
            [Tv, [av, tv],
              [wv, cv]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [Tv, [av, "Lenovo"],
              [wv, Gv]
            ],
            [/(nokia) (t[12][01])/i],
            [av, Tv, [wv, Gv]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
            [
              [Tv, /_/g, " "],
              [wv, cv],
              [av, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [Tv, [av, Uv],
              [wv, Gv]
            ],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [Tv, [av, Uv],
              [wv, cv]
            ],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [Tv, [av, yv],
              [wv, cv]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [Tv, "Xperia Tablet"],
              [av, yv],
              [wv, Gv]
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [Tv, [av, Zv],
              [wv, cv]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [Tv, [av, Fv],
              [wv, Gv]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [Tv, /(.+)/g, "Fire Phone $1"],
              [av, Fv],
              [wv, cv]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [Tv, av, [wv, Gv]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [Tv, [av, Ov],
              [wv, cv]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [Tv, [av, nv],
              [wv, Gv]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [Tv, [av, nv],
              [wv, cv]
            ],
            [/(nexus 9)/i],
            [Tv, [av, "HTC"],
              [wv, Gv]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [av, [Tv, /_/g, " "],
              [wv, cv]
            ],
            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
            [Tv, [av, "TCL"],
              [wv, Gv]
            ],
            [/(itel) ((\w+))/i],
            [
              [av, uv], Tv, [wv, Pz, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [Tv, [av, "Acer"],
              [wv, Gv]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [Tv, [av, "Meizu"],
              [wv, cv]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [Tv, [av, "Ulefone"],
              [wv, cv]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [Tv, [av, "Energizer"],
              [wv, cv]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [Tv, [av, "Cat"],
              [wv, cv]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [Tv, [av, "Smartfren"],
              [wv, cv]
            ],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [Tv, [av, "Nothing"],
              [wv, cv]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [Tv, [av, "Archos"],
              [wv, Gv]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [Tv, [av, "Archos"],
              [wv, cv]
            ],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [av, Tv, [wv, Gv]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
            [av, Tv, [wv, cv]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [av, Tv, [wv, Gv]],
            [/(surface duo)/i],
            [Tv, [av, qv],
              [wv, Gv]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [Tv, [av, "Fairphone"],
              [wv, cv]
            ],
            [/(u304aa)/i],
            [Tv, [av, "AT&T"],
              [wv, cv]
            ],
            [/\bsie-(\w*)/i],
            [Tv, [av, "Siemens"],
              [wv, cv]
            ],
            [/\b(rct\w+) b/i],
            [Tv, [av, "RCA"],
              [wv, Gv]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [Tv, [av, "Dell"],
              [wv, Gv]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [Tv, [av, "Verizon"],
              [wv, Gv]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [Tv, [av, "Barnes & Noble"],
              [wv, Gv]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [Tv, [av, "NuVision"],
              [wv, Gv]
            ],
            [/\b(k88) b/i],
            [Tv, [av, "ZTE"],
              [wv, Gv]
            ],
            [/\b(nx\d{3}j) b/i],
            [Tv, [av, "ZTE"],
              [wv, cv]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [Tv, [av, "Swiss"],
              [wv, cv]
            ],
            [/\b(zur\d{3}) b/i],
            [Tv, [av, "Swiss"],
              [wv, Gv]
            ],
            [/\b((zeki)?tb.*\b) b/i],
            [Tv, [av, "Zeki"],
              [wv, Gv]
            ],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [
              [av, "Dragon Touch"], Tv, [wv, Gv]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [Tv, [av, "Insignia"],
              [wv, Gv]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [Tv, [av, "NextBook"],
              [wv, Gv]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
              [av, "Voice"], Tv, [wv, cv]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
              [av, "LvTel"], Tv, [wv, cv]
            ],
            [/\b(ph-1) /i],
            [Tv, [av, "Essential"],
              [wv, cv]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [Tv, [av, "Envizen"],
              [wv, Gv]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [Tv, [av, "MachSpeed"],
              [wv, Gv]
            ],
            [/\btu_(1491) b/i],
            [Tv, [av, "Rotor"],
              [wv, Gv]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [Tv, [av, Qv],
              [wv, Gv]
            ],
            [/(sprint) (\w+)/i],
            [av, Tv, [wv, cv]],
            [/(kin\.[onetw]{3})/i],
            [
              [Tv, /\./g, " "],
              [av, qv],
              [wv, cv]
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [Tv, [av, Jv],
              [wv, Gv]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [Tv, [av, Jv],
              [wv, cv]
            ],
            [/smart-tv.+(samsung)/i],
            [av, [wv, mv]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [Tv, /^/, "SmartTV"],
              [av, Hv],
              [wv, mv]
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [av, tv],
              [wv, mv]
            ],
            [/(apple) ?tv/i],
            [av, [Tv, Yv + " TV"],
              [wv, mv]
            ],
            [/crkey/i],
            [
              [Tv, Kv + "cast"],
              [av, Uv],
              [wv, mv]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [Tv, [av, Fv],
              [wv, mv]
            ],
            [/(shield \w+ tv)/i],
            [Tv, [av, Qv],
              [wv, mv]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [Tv, [av, Mv],
              [wv, mv]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [Tv, [av, yv],
              [wv, mv]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [Tv, [av, Bv],
              [wv, mv]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [av, Tv, [wv, mv]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [av, vz],
              [Tv, vz],
              [wv, mv]
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [Tv, [wv, mv]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [
              [wv, mv]
            ],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [av, Tv, [wv, iv]],
            [/droid.+; (shield)( bui|\))/i],
            [Tv, [av, Qv],
              [wv, iv]
            ],
            [/(playstation \w+)/i],
            [Tv, [av, yv],
              [wv, iv]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [Tv, [av, qv],
              [wv, iv]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [Tv, [av, Hv],
              [wv, jv]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [av, Tv, [wv, jv]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [Tv, [av, Lv],
              [wv, jv]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [Tv, [av, Yv],
              [wv, jv]
            ],
            [/(opwwe\d{3})/i],
            [Tv, [av, Zv],
              [wv, jv]
            ],
            [/(moto 360)/i],
            [Tv, [av, Iv],
              [wv, jv]
            ],
            [/(smartwatch 3)/i],
            [Tv, [av, yv],
              [wv, jv]
            ],
            [/(g watch r)/i],
            [Tv, [av, tv],
              [wv, jv]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [Tv, [av, Jv],
              [wv, jv]
            ],
            [/droid.+; (glass) \d/i],
            [Tv, [av, Uv],
              [wv, jv]
            ],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [av, Tv, [wv, jv]],
            [/; (quest( \d| pro)?)/i],
            [Tv, [av, Ev],
              [wv, jv]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [av, [wv, fv]],
            [/(aeobc)\b/i],
            [Tv, [av, Fv],
              [wv, fv]
            ],
            [/(homepod).+mac os/i],
            [Tv, [av, Yv],
              [wv, fv]
            ],
            [/windows iot/i],
            [
              [wv, fv]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [Tv, [wv, cv]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [Tv, [wv, Gv]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [wv, Gv]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [wv, cv]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [Tv, [av, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [sv, [Wv, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [Wv, sv],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [sv, [Wv, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [Wv, sv],
            [/ladybird\//i],
            [
              [Wv, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [sv, Wv]
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [Wv, sv],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [Wv, [sv, Pz, hz]],
            [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [sv, Pz, hz],
              [Wv, "Windows"]
            ],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [sv, /_/g, "."],
              [Wv, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
              [Wv, bv],
              [sv, /_/g, "."]
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [sv, Wv],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [Wv, /(.+)/, "$1 Touch"], sv
            ],
            [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
            [Wv, sv],
            [/\(bb(10);/i],
            [sv, [Wv, Ov]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [sv, [Wv, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [sv, [Wv, Vv + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [sv, [Wv, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [sv, [Wv, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [sv, [Wv, Kv + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [Wv, ov], sv
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
            [Wv, sv],
            [/(sunos) ?([\w\.\d]*)/i],
            [
              [Wv, "Solaris"], sv
            ],
            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [Wv, sv]
          ]
        },
        ez = function(vv, zv) {
          if (typeof vv === dv && (zv = vv, vv = ev), !(this instanceof ez)) return new ez(vv, zv).getResult();
          var Pv = typeof Sv !== pv && Sv.navigator ? Sv.navigator : ev,
            hv = vv || (Pv && Pv.userAgent ? Pv.userAgent : ""),
            iv = Pv && Pv.userAgentData ? Pv.userAgentData : ev,
            mv = zv ? function(vv, zv) {
              var Pv = {};
              for (var hv in vv) zv[hv] && zv[hv].length % 2 === 0 ? Pv[hv] = zv[hv].concat(vv[hv]) : Pv[hv] = vv[hv];
              return Pv
            }(Sz, zv) : Sz,
            jv = Pv && Pv.userAgent == hv;
          return this.getBrowser = function() {
            var vv, zv = {};
            return zv[Wv] = ev, zv[sv] = ev, zz.call(zv, hv, mv.browser), zv[lv] = typeof(vv = zv[sv]) === Nv ? vv.replace(/[^\d\.]/g, "").split(".")[0] : ev, jv && Pv && Pv.brave && typeof Pv.brave.isBrave == gv && (zv[Wv] = "Brave"), zv
          }, this.getCPU = function() {
            var vv = {};
            return vv[Cv] = ev, zz.call(vv, hv, mv.cpu), vv
          }, this.getDevice = function() {
            var vv = {};
            return vv[av] = ev, vv[Tv] = ev, vv[wv] = ev, zz.call(vv, hv, mv.device), jv && !vv[wv] && iv && iv.mobile && (vv[wv] = cv), jv && "Macintosh" == vv[Tv] && Pv && typeof Pv.standalone !== pv && Pv.maxTouchPoints && Pv.maxTouchPoints > 2 && (vv[Tv] = "iPad", vv[wv] = Gv), vv
          }, this.ma = function() {
            var vv = {};
            return vv[Wv] = ev, vv[sv] = ev, zz.call(vv, hv, mv.engine), vv
          }, this.getOS = function() {
            var vv = {};
            return vv[Wv] = ev, vv[sv] = ev, zz.call(vv, hv, mv.os), jv && !vv[Wv] && iv && iv.platform && "Unknown" != iv.platform && (vv[Wv] = iv.platform.replace(/chrome os/i, ov).replace(/macos/i, bv)), vv
          }, this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.ma(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function() {
            return hv
          }, this.setUA = function(vv) {
            return hv = typeof vv === Nv && vv.length > 500 ? vz(vv, 500) : vv, this
          }, this.setUA(hv), this
        };
      ez.VERSION = "1.0.41", ez.BROWSER = kv([Wv, sv, lv]), ez.CPU = kv([Cv]), ez.DEVICE = kv([Tv, av, wv, iv, cv, mv, Gv, jv, fv]), ez.ENGINE = ez.OS = kv([Wv, sv]), typeof zv !== pv ? (vv.exports && (zv = vv.exports = ez), zv.UAParser = ez) : Pv.amdO ? (hv = function() {
        return ez
      }.call(zv, Pv, zv, vv)) === ev || (vv.exports = hv) : typeof Sv !== pv && (Sv.UAParser = ez);
      var gz = typeof Sv !== pv && (Sv.jQuery || Sv.Zepto);
      if (gz && !gz.ua) {
        var pz = new ez;
        gz.ua = pz.getResult(), gz.ua.get = function() {
          return pz.getUA()
        }, gz.ua.set = function(vv) {
          pz.setUA(vv);
          var zv = pz.getResult();
          for (var Pv in zv) gz.ua[Pv] = zv[Pv]
        }
      }
    }("object" === typeof window ? window : this)
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);