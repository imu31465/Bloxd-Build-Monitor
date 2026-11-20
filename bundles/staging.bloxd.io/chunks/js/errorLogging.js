export const id = 31;
export const ids = [31];
export const modules = {
  6272: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      BaseExtension: () => ts,
      BaseInstrumentation: () => ss,
      BaseTransport: () => zX,
      CSPInstrumentation: () => eW,
      ConsoleInstrumentation: () => ys,
      ConsoleTransport: () => XX,
      EVENT_CLICK: () => Pt,
      EVENT_NAVIGATION: () => rt,
      EVENT_ROUTE_CHANGE: () => Ct,
      EVENT_SESSION_EXTEND: () => Jt,
      EVENT_SESSION_RESUME: () => mt,
      EVENT_SESSION_START: () => xt,
      EVENT_VIEW_CHANGED: () => Yt,
      ErrorsInstrumentation: () => ds,
      FetchTransport: () => mX,
      InternalLoggerLevel: () => nt,
      LogLevel: () => rs,
      MAX_SESSION_PERSISTENCE_TIME: () => vz,
      NavigationInstrumentation: () => lW,
      Observable: () => Ps,
      PerformanceInstrumentation: () => RF,
      PersistentSessionsManager: () => dt,
      SESSION_EXPIRATION_TIME: () => Xz,
      SESSION_INACTIVITY_TIME: () => Oz,
      STORAGE_KEY: () => Wz,
      SessionInstrumentation: () => Ws,
      TransportItemType: () => tX,
      UserActionInstrumentation: () => CW,
      UserActionState: () => HW,
      VERSION: () => Fs,
      ViewInstrumentation: () => Qs,
      VolatileSessionsManager: () => ht,
      WebVitalsInstrumentation: () => MF,
      allLogLevels: () => xs,
      browserMeta: () => RW,
      buildStackFrame: () => Xs,
      captureMetas: () => QX,
      createInternalLogger: () => ZX,
      createPromiseBuffer: () => DX,
      createSession: () => fW,
      deepEqual: () => Bt,
      defaultEventDomain: () => Fz,
      defaultExceptionType: () => es,
      defaultGlobalObjectKey: () => GX,
      defaultInternalLoggerLevel: () => St,
      defaultLogLevel: () => Ys,
      faro: () => Dz,
      genShortID: () => Ht,
      getCurrentTimestamp: () => wt,
      getDataFromSafariExtensions: () => bs,
      getIgnoreUrls: () => Sz,
      getInternalFaroFromGlobalObject: () => Nz,
      getStackFramesFromError: () => Ds,
      getTransportBody: () => WX,
      getUrlFromResource: () => Rz,
      getWebInstrumentations: () => nW,
      globalObject: () => Kz,
      initializeFaro: () => zO,
      internalGlobalObjectKey: () => uz,
      isArray: () => Gz,
      isBoolean: () => Iz,
      isDomError: () => Qz,
      isDomException: () => kz,
      isElement: () => Lz,
      isElementDefined: () => iz,
      Aw: () => qz,
      isError: () => dz,
      isErrorDefined: () => Mz,
      isErrorEvent: () => hz,
      isEvent: () => yz,
      isEventDefined: () => Az,
      isFunction: () => Zz,
      isInstanceOf: () => Pz,
      isInt: () => Jz,
      isInternalFaroOnGlobalObject: () => wz,
      isMap: () => nz,
      isMapDefined: () => lz,
      isNull: () => Yz,
      isNumber: () => mz,
      isObject: () => ez,
      isPrimitive: () => jz,
      isRegExp: () => Tz,
      isString: () => xz,
      isSymbol: () => Cz,
      isSyntheticEvent: () => az,
      isThenable: () => cz,
      isToString: () => Bz,
      isTypeof: () => Hz,
      isUndefined: () => rz,
      makeCoreConfig: () => jX,
      noop: () => lt,
      osMeta: () => pW,
      parseStacktrace: () => gs,
      sdkMeta: () => EW,
      setInternalFaroOnGlobalObject: () => bz,
      transportItemTypeToBodyKey: () => sX,
      unknownString: () => hs,
      userActionDataAttribute: () => pF,
      userActionTimeoutDataAttribute: () => fF
    });
    const Fz = "browser",
      Wz = "com.grafana.faro.session",
      Xz = 144e5,
      Oz = 9e5,
      oz = 1e3,
      vz = Oz,
      Uz = {
        enabled: !0,
        persistent: !1,
        maxSessionPersistenceTime: vz
      };
    const Kz = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof sz.g ? sz.g : "undefined" !== typeof self ? self : void 0;
    const uz = "_faroInternal";

    function Nz() {
      return Kz[uz]
    }

    function bz(zz) {
      zz.config.isolate ? zz.internalLogger.debug("Skipping registering internal Faro instance on global object") : (zz.internalLogger.debug("Registering internal Faro instance on global object"), Object.defineProperty(Kz, uz, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: zz
      }))
    }

    function wz() {
      return uz in Kz
    }
    let Dz = {
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

    function gz(zz, tz, sz, Fz, Wz, Xz, Oz) {
      return tz.debug("Initializing Faro"), Dz = {
          api: Xz,
          config: sz,
          instrumentations: Oz,
          internalLogger: tz,
          metas: Fz,
          pause: Wz.pause,
          transports: Wz,
          unpatchedConsole: zz,
          unpause: Wz.unpause
        }, bz(Dz),
        function(zz) {
          if (zz.config.preventGlobalExposure) zz.internalLogger.debug("Skipping registering public Faro instance in the global scope");
          else {
            if (zz.internalLogger.debug(`Registering public faro reference in the global scope using "${zz.config.globalObjectKey}" key`), zz.config.globalObjectKey in Kz) return void zz.internalLogger.warn(`Skipping global registration due to key "${zz.config.globalObjectKey}" being used already. Please set "globalObjectKey" to something else or set "preventGlobalExposure" to "true"`);
            Object.defineProperty(Kz, zz.config.globalObjectKey, {
              configurable: !1,
              writable: !1,
              value: zz
            })
          }
        }(Dz), Dz
    }

    function Hz(zz, tz) {
      return typeof zz === tz
    }

    function Bz(zz, tz) {
      return Object.prototype.toString.call(zz) === `[object ${tz}]`
    }

    function Pz(zz, tz) {
      try {
        return zz instanceof tz
      } catch (sz) {
        return !1
      }
    }
    const rz = zz => Hz(zz, "undefined"),
      Yz = zz => Hz(zz, "null"),
      xz = zz => Hz(zz, "string"),
      mz = zz => Hz(zz, "number") && !isNaN(zz) || Hz(zz, "bigint"),
      Jz = zz => mz(zz) && Number.isInteger(zz),
      Iz = zz => Hz(zz, "boolean"),
      Cz = zz => Hz(zz, "symbol"),
      ez = zz => !Yz(zz) && Hz(zz, "object"),
      Zz = zz => Hz(zz, "function"),
      Gz = zz => Bz(zz, "Array"),
      Tz = zz => Bz(zz, "RegExp"),
      cz = zz => Zz(null === zz || void 0 === zz ? void 0 : zz.then),
      jz = zz => !ez(zz) && !Zz(zz),
      Az = "undefined" !== typeof Event,
      yz = zz => Az && Pz(zz, Event),
      Mz = "undefined" !== typeof Error,
      dz = zz => Mz && Pz(zz, Error),
      hz = zz => Bz(zz, "ErrorEvent"),
      Qz = zz => Bz(zz, "DOMError"),
      kz = zz => Bz(zz, "DOMException"),
      iz = "undefined" !== typeof Element,
      Lz = zz => iz && Pz(zz, Element),
      lz = "undefined" !== typeof Map,
      nz = zz => lz && Pz(zz, Map),
      az = zz => ez(zz) && "nativeEvent" in zz && "preventDefault" in zz && "stopPropagation" in zz;

    function qz(zz) {
      return null == zz || (Gz(zz) || xz(zz) ? 0 === zz.length : !!ez(zz) && 0 === Object.keys(zz).length)
    }

    function Sz() {
      return Dz.transports.transports.flatMap((zz => zz.getIgnoreUrls()))
    }

    function Vz() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return Sz().some((tz => zz && null != zz.match(tz)))
    }

    function Rz(zz) {
      return xz(zz) ? zz : zz instanceof URL ? zz.href : !qz(zz) && Zz(null === zz || void 0 === zz ? void 0 : zz.toString) ? zz.toString() : void 0
    }
    const pz = "sessionStorage",
      fz = "localStorage";

    function Ez(zz) {
      try {
        let tz;
        tz = window[zz];
        const sz = "__faro_storage_test__";
        return tz.setItem(sz, sz), tz.removeItem(sz), !0
      } catch (sz) {
        var tz;
        return null === (tz = Dz.internalLogger) || void 0 === tz || tz.info(`Web storage of type ${zz} is not available. Reason: ${sz}`), !1
      }
    }

    function zt(zz, tz) {
      return Xt(tz) ? window[tz].getItem(zz) : null
    }

    function tt(zz, tz, sz) {
      if (Xt(sz)) try {
        window[sz].setItem(zz, tz)
      } catch (Fz) {}
    }

    function st(zz, tz) {
      Xt(tz) && window[tz].removeItem(zz)
    }
    const Ft = Ez(fz),
      Wt = Ez(pz);

    function Xt(zz) {
      return zz === fz ? Ft : zz === pz && Wt
    }

    function Ot(zz) {
      return Ot = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(zz) {
        return typeof zz
      } : function(zz) {
        return zz && "function" == typeof Symbol && zz.constructor === Symbol && zz !== Symbol.prototype ? "symbol" : typeof zz
      }, Ot(zz)
    }

    function ot(zz) {
      var tz = function(zz, tz) {
        if ("object" != Ot(zz) || !zz) return zz;
        var sz = zz[Symbol.toPrimitive];
        if (void 0 !== sz) {
          var Fz = sz.call(zz, tz || "default");
          if ("object" != Ot(Fz)) return Fz;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === tz ? String : Number)(zz)
      }(zz, "string");
      return "symbol" == Ot(tz) ? tz : tz + ""
    }

    function vt(zz, tz, sz) {
      return (tz = ot(tz)) in zz ? Object.defineProperty(zz, tz, {
        value: sz,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : zz[tz] = sz, zz
    }

    function Ut(zz, tz) {
      var sz = Object.keys(zz);
      if (Object.getOwnPropertySymbols) {
        var Fz = Object.getOwnPropertySymbols(zz);
        tz && (Fz = Fz.filter((function(tz) {
          return Object.getOwnPropertyDescriptor(zz, tz).enumerable
        }))), sz.push.apply(sz, Fz)
      }
      return sz
    }

    function Kt(zz) {
      for (var tz = 1; tz < arguments.length; tz++) {
        var sz = null != arguments[tz] ? arguments[tz] : {};
        tz % 2 ? Ut(Object(sz), !0).forEach((function(tz) {
          vt(zz, tz, sz[tz])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(zz, Object.getOwnPropertyDescriptors(sz)) : Ut(Object(sz)).forEach((function(tz) {
          Object.defineProperty(zz, tz, Object.getOwnPropertyDescriptor(sz, tz))
        }))
      }
      return zz
    }

    function ut() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dz;
      var tz, sz, Fz;
      const Wz = zz.config.sessionTracking,
        Xz = null !== (tz = null !== (sz = null === Wz || void 0 === Wz || null === (Fz = Wz.sampler) || void 0 === Fz ? void 0 : Fz.call(Wz, {
          metas: zz.metas.value
        })) && void 0 !== sz ? sz : null === Wz || void 0 === Wz ? void 0 : Wz.samplingRate) && void 0 !== tz ? tz : 1,
        Oz = "number" === typeof Xz ? function(zz) {
          return Math.min(1, Math.max(0, zz))
        }(Xz) : 0;
      if (!(Oz > 0)) return !1;
      if (1 === Oz) return !0;
      try {
        const zz = "undefined" !== typeof window ? window.crypto : void 0;
        if ("function" === typeof(null === zz || void 0 === zz ? void 0 : zz.getRandomValues)) {
          const tz = new Uint32Array(1);
          return zz.getRandomValues(tz), tz[0] / Math.pow(2, 32) < Oz
        }
      } catch (oz) {}
      return Math.random() < Oz
    }

    function Nt() {
      return Date.now()
    }

    function bt() {
      return "undefined" !== typeof performance && "function" === typeof performance.now ? performance.now() : Date.now()
    }

    function wt() {
      return (new Date).toISOString()
    }

    function Dt(zz) {
      return new Date(zz).toISOString()
    }
    const gt = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

    function Ht() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      const tz = new Uint32Array(zz),
        sz = "undefined" !== typeof globalThis ? globalThis.crypto : void 0;
      if (null === sz || void 0 === sz ? void 0 : sz.getRandomValues) sz.getRandomValues(tz);
      else
        for (let Wz = 0; Wz < zz; Wz++) tz[Wz] = Math.floor(4294967296 * Math.random());
      let Fz = "";
      for (let Wz = 0; Wz < zz; Wz++) Fz += gt[tz[Wz] % 59];
      return Fz
    }

    function Bt(zz, tz) {
      if (zz === tz) return !0;
      if (Hz(zz, "number") && isNaN(zz)) return Hz(tz, "number") && isNaN(tz);
      const sz = Gz(zz),
        Fz = Gz(tz);
      if (sz !== Fz) return !1;
      if (sz && Fz) {
        const sz = zz.length;
        if (sz !== tz.length) return !1;
        for (let Fz = sz; 0 !== Fz--;)
          if (!Bt(zz[Fz], tz[Fz])) return !1;
        return !0
      }
      const Wz = ez(zz),
        Xz = ez(tz);
      if (Wz !== Xz) return !1;
      if (zz && tz && Wz && Xz) {
        const sz = Object.keys(zz),
          Fz = Object.keys(tz);
        if (sz.length !== Fz.length) return !1;
        for (let zz of sz)
          if (!Fz.includes(zz)) return !1;
        for (let Wz of sz)
          if (!Bt(zz[Wz], tz[Wz])) return !1;
        return !0
      }
      return !1
    }
    const Pt = "click",
      rt = "navigation",
      Yt = "view_changed",
      xt = "session_start",
      mt = "session_resume",
      Jt = "session_extend",
      It = "service_name_override",
      Ct = "route_change";

    function et() {
      let {
        sessionId: zz,
        started: tz,
        lastActivity: sz,
        isSampled: Fz = !0
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, Wz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Dz;
      var Xz;
      const Oz = Nt(),
        oz = null === (Xz = Wz.config) || void 0 === Xz || null === (Xz = Xz.sessionTracking) || void 0 === Xz ? void 0 : Xz.generateSessionId;
      return null == zz && (zz = "function" === typeof oz ? oz() : Ht()), {
        sessionId: zz,
        lastActivity: null !== sz && void 0 !== sz ? sz : Oz,
        started: null !== tz && void 0 !== tz ? tz : Oz,
        isSampled: Fz
      }
    }

    function Zt(zz) {
      if (null == zz) return !1;
      const tz = Nt();
      return tz - zz.started < 144e5 && tz - zz.lastActivity < Oz
    }

    function Gt(zz) {
      let {
        fetchUserSession: tz,
        storeUserSession: sz,
        adoptSession: Fz,
        updateInterval: Wz = 0
      } = zz, oz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Dz, vz = 0;
      return function() {
        let {
          forceSessionExtend: zz = !1,
          refreshActivity: Uz = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var Kz, uz;
        if (!tz || !sz) return;
        const Nz = Nt();
        if (!zz && Nz < vz && vz - Nz <= Wz) return;
        const bz = oz.config.sessionTracking,
          wz = null === bz || void 0 === bz ? void 0 : bz.persistent;
        if (wz && !Ft || !wz && !Wt) return;
        const Dz = tz();
        if (vz = Math.min(Nz + Wz, (null !== (Kz = null === Dz || void 0 === Dz ? void 0 : Dz.started) && void 0 !== Kz ? Kz : Nz) + Xz, (null !== (uz = null === Dz || void 0 === Dz ? void 0 : Dz.lastActivity) && void 0 !== uz ? uz : Nz) + Oz), !1 === zz && Zt(Dz)) {
          var gz;
          Uz && sz(Kt(Kt({}, Dz), {}, {
            lastActivity: Nz
          }));
          const zz = null === (gz = oz.metas.value.session) || void 0 === gz ? void 0 : gz.id;
          null != Fz && null != Dz.sessionMeta && Dz.sessionId !== zz && Fz(Dz.sessionMeta)
        } else {
          var Hz, Bz, Pz;
          let zz = ct(et({
            isSampled: ut(oz)
          }, oz), Dz, oz);
          vz = Nz + Wz, sz(zz), null === (Hz = oz.api) || void 0 === Hz || Hz.setSession(zz.sessionMeta), null === bz || void 0 === bz || null === (Bz = bz.onSessionChange) || void 0 === Bz || Bz.call(bz, null !== (Pz = null === Dz || void 0 === Dz ? void 0 : Dz.sessionMeta) && void 0 !== Pz ? Pz : null, zz.sessionMeta)
        }
      }
    }

    function Tt(zz) {
      let tz, {
          fetchUserSession: sz,
          storeUserSession: Fz,
          updateInterval: Wz = 0
        } = zz,
        Xz = 0;
      return zz => {
        const Oz = Nt();
        if (zz === tz && Oz < Xz && Xz - Oz <= Wz) return;
        tz = zz, Xz = Oz + Wz;
        const oz = sz();
        (null === oz || void 0 === oz ? void 0 : oz.sessionId) === zz && Zt(oz) && Fz(Kt(Kt({}, oz), {}, {
          lastActivity: Oz
        }))
      }
    }

    function ct(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Dz;
      var Fz, Wz, Xz, Oz, oz, vz;
      const Uz = Kt(Kt({}, zz), {}, {
          sessionMeta: {
            id: zz.sessionId,
            attributes: At(Kt(Kt(Kt({}, null === (Fz = sz.config.sessionTracking) || void 0 === Fz || null === (Fz = Fz.session) || void 0 === Fz ? void 0 : Fz.attributes), null !== (Wz = null === (Xz = sz.metas.value.session) || void 0 === Xz ? void 0 : Xz.attributes) && void 0 !== Wz ? Wz : {}), {}, {
              isSampled: zz.isSampled.toString()
            }))
          }
        }),
        Kz = null !== (Oz = null === (oz = sz.metas.value.session) || void 0 === oz ? void 0 : oz.overrides) && void 0 !== Oz ? Oz : null === tz || void 0 === tz || null === (vz = tz.sessionMeta) || void 0 === vz ? void 0 : vz.overrides;
      qz(Kz) || (Uz.sessionMeta.overrides = Kz);
      const uz = null === tz || void 0 === tz ? void 0 : tz.sessionId;
      return null != uz && (Uz.sessionMeta.attributes.previousSession = uz), Uz
    }

    function jt(zz) {
      let {
        fetchUserSession: tz,
        storeUserSession: sz
      } = zz, Fz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Dz, Wz = !1;
      return function(zz) {
        if (Wz) return;
        const Xz = zz.session,
          Oz = tz();
        let oz = null === Xz || void 0 === Xz ? void 0 : Xz.id;
        const vz = null === Xz || void 0 === Xz ? void 0 : Xz.attributes,
          Uz = null === Xz || void 0 === Xz ? void 0 : Xz.overrides,
          Kz = null === Oz || void 0 === Oz ? void 0 : Oz.sessionMeta,
          uz = null === Kz || void 0 === Kz ? void 0 : Kz.overrides,
          Nz = !!Uz && !Bt(Uz, uz),
          bz = !!vz && !Bt(vz, null === Kz || void 0 === Kz ? void 0 : Kz.attributes);
        if (Xz && oz !== (null === Oz || void 0 === Oz ? void 0 : Oz.sessionId) || bz || Nz) {
          var wz, Dz;
          const zz = null != Oz && oz === Oz.sessionId,
            tz = ct(zz ? Oz : et({
              sessionId: oz,
              isSampled: ut(Fz)
            }, Fz), Oz, Fz),
            Xz = null === Oz || void 0 === Oz || null === (wz = Oz.sessionMeta) || void 0 === wz || null === (wz = wz.attributes) || void 0 === wz ? void 0 : wz.previousSession;
          zz && null != Xz && Xz !== tz.sessionId && (tz.sessionMeta.attributes.previousSession = Xz), (null === (Dz = tz.sessionMeta.attributes) || void 0 === Dz ? void 0 : Dz.previousSession) === tz.sessionId && delete tz.sessionMeta.attributes.previousSession, sz(tz),
            function(zz, tz) {
              let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              var Wz, Xz, Oz;
              if (!tz) return;
              const oz = sz.serviceName,
                vz = null !== (Wz = null !== (Xz = Fz.serviceName) && void 0 !== Xz ? Xz : null === (Oz = zz.metas.value.app) || void 0 === Oz ? void 0 : Oz.name) && void 0 !== Wz ? Wz : "";
              oz && oz !== vz && zz.api.pushEvent(It, {
                serviceName: oz,
                previousServiceName: vz
              })
            }(Fz, Nz, Uz, uz), Wz = !0;
          try {
            Fz.api.setSession(tz.sessionMeta)
          } finally {
            Wz = !1
          }
        }
      }
    }

    function At(zz) {
      const tz = {};
      for (const sz of Object.keys(zz)) {
        const Fz = zz[sz];
        void 0 !== Fz && (tz[sz] = Fz)
      }
      return tz
    }

    function yt() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.stringify(null !== zz && void 0 !== zz ? zz : {}, function() {
        const zz = new WeakSet;
        return function(tz, sz) {
          if (ez(sz) && null !== sz) {
            if (zz.has(sz)) return null;
            zz.add(sz)
          }
          return sz
        }
      }())
    }

    function Mt() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const tz = {};
      for (const [sz, Fz] of Object.entries(zz)) tz[sz] = ez(Fz) && null !== Fz ? yt(Fz) : String(Fz);
      return tz
    }
    var dt = class zz {
      constructor() {
        var tz = this;
        let sz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dz;
        this.context = sz, this.adopting = !1, this.isAdopting = () => this.adopting, this.adoptSession = zz => {
          this.adopting = !0;
          try {
            var tz;
            null === (tz = this.context.api) || void 0 === tz || tz.setSession(zz)
          } finally {
            this.adopting = !1
          }
        }, this.updateSession = function() {
          let {
            refreshActivity: zz = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return tz.updateUserSession({
            refreshActivity: zz
          })
        }, this.recordActivity = Tt({
          fetchUserSession: zz.fetchUserSession,
          storeUserSession: zz.storeUserSession,
          updateInterval: oz
        }), this.updateUserSession = Gt({
          fetchUserSession: zz.fetchUserSession,
          storeUserSession: zz.storeUserSession,
          adoptSession: this.adoptSession,
          updateInterval: oz
        }, sz), this.init()
      }
      static removeUserSession() {
        st(Wz, zz.storageTypeLocal)
      }
      static storeUserSession(tz) {
        tt(Wz, yt(tz), zz.storageTypeLocal)
      }
      static fetchUserSession() {
        const tz = zt(Wz, zz.storageTypeLocal);
        return tz ? JSON.parse(tz) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var zz;
            this.updateSession({
              refreshActivity: !1
            });
            const tz = null === (zz = this.context.api) || void 0 === zz || null === (zz = zz.getSession()) || void 0 === zz ? void 0 : zz.id;
            tz && this.recordActivity(tz)
          }
        })), this.context.metas.addListener(jt({
          fetchUserSession: zz.fetchUserSession,
          storeUserSession: zz.storeUserSession
        }, this.context))
      }
    };
    dt.storageTypeLocal = fz;
    var ht = class zz {
      constructor() {
        var tz = this;
        let sz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dz;
        this.context = sz, this.isAdopting = () => !1, this.updateSession = function() {
          let {
            refreshActivity: zz = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return tz.updateUserSession({
            refreshActivity: zz
          })
        }, this.recordActivity = Tt({
          fetchUserSession: zz.fetchUserSession,
          storeUserSession: zz.storeUserSession,
          updateInterval: oz
        }), this.updateUserSession = Gt({
          fetchUserSession: zz.fetchUserSession,
          storeUserSession: zz.storeUserSession,
          updateInterval: oz
        }, sz), this.init()
      }
      static removeUserSession() {
        st(Wz, zz.storageTypeSession)
      }
      static storeUserSession(tz) {
        tt(Wz, yt(tz), zz.storageTypeSession)
      }
      static fetchUserSession() {
        const tz = zt(Wz, zz.storageTypeSession);
        return tz ? JSON.parse(tz) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var zz;
            this.updateSession({
              refreshActivity: !1
            });
            const tz = null === (zz = this.context.api) || void 0 === zz || null === (zz = zz.getSession()) || void 0 === zz ? void 0 : zz.id;
            tz && this.recordActivity(tz)
          }
        })), this.context.metas.addListener(jt({
          fetchUserSession: zz.fetchUserSession,
          storeUserSession: zz.storeUserSession
        }, this.context))
      }
    };
    ht.storageTypeSession = pz;
    const Qt = new WeakMap;

    function kt(zz) {
      let tz = Qt.get(zz);
      if (!tz) {
        let sz = [],
          Fz = [];
        tz = {
          addSessionUpdateListener: zz => {
            sz.push(zz)
          },
          removeSessionUpdateListener: zz => {
            sz = sz.filter((tz => tz !== zz))
          },
          notifySessionUpdate: zz => {
            sz.forEach((tz => tz(zz)))
          },
          shouldCapture: () => Fz.every((zz => zz())),
          addCaptureFilter: zz => {
            Fz.push(zz)
          },
          removeCaptureFilter: zz => {
            Fz = Fz.filter((tz => tz !== zz))
          }
        }, Qt.set(zz, tz)
      }
      return tz
    }
    var it = class {
      constructor(zz, tz, sz) {
        this.metas = zz, this.transports = tz, this.onActivate = sz, this.waiting = !1, this.shouldCapture = () => !document.prerendering, this.discard = () => null, this.recordUpdate = zz => {
          var tz, sz, Fz;
          const Wz = this.pending;
          var Xz, Oz;
          if ("overrides" === zz.type) return void(this.pending = {
            reset: null !== (Xz = null === Wz || void 0 === Wz ? void 0 : Wz.reset) && void 0 !== Xz && Xz,
            inheritOverrides: null === (Oz = null === Wz || void 0 === Wz ? void 0 : Wz.inheritOverrides) || void 0 === Oz || Oz,
            session: Kt(Kt({}, null === Wz || void 0 === Wz ? void 0 : Wz.session), {}, {
              overrides: Kt(Kt({}, null === Wz || void 0 === Wz ? void 0 : Wz.session.overrides), zz.overrides)
            })
          });
          const oz = zz.session,
            vz = qz(oz) || null != oz && "id" in oz && !oz.id,
            Uz = null !== (tz = null === oz || void 0 === oz ? void 0 : oz.overrides) && void 0 !== tz ? tz : null === Wz || void 0 === Wz ? void 0 : Wz.session.overrides;
          this.pending = {
            reset: vz || !(null === oz || void 0 === oz ? void 0 : oz.id) && null !== (sz = null === Wz || void 0 === Wz ? void 0 : Wz.reset) && void 0 !== sz && sz,
            inheritOverrides: !(!zz.overrides && void 0 !== (null === oz || void 0 === oz ? void 0 : oz.overrides)) && (null === (Fz = null === Wz || void 0 === Wz ? void 0 : Wz.inheritOverrides) || void 0 === Fz || Fz),
            session: {
              id: null === oz || void 0 === oz ? void 0 : oz.id,
              attributes: (null === oz || void 0 === oz ? void 0 : oz.attributes) && Kt({}, oz.attributes),
              overrides: zz.overrides ? Kt(Kt({}, null === Wz || void 0 === Wz ? void 0 : Wz.session.overrides), zz.overrides) : Uz && Kt({}, Uz)
            }
          }
        }, this.activate = () => {
          this.waiting && this.shouldCapture() && (this.destroy(), this.onActivate(this.pending))
        }
      }
      initialize() {
        var zz, tz;
        this.waiting = !0, kt(this.metas).addSessionUpdateListener(this.recordUpdate), kt(this.metas).addCaptureFilter(this.shouldCapture), this.transports.addBeforeSendHooks(this.discard), document.addEventListener("prerenderingchange", this.activate), null === (zz = (tz = this.metas).addCaptureListener) || void 0 === zz || zz.call(tz, this.activate), this.activate()
      }
      destroy() {
        var zz, tz;
        this.waiting = !1, document.removeEventListener("prerenderingchange", this.activate), kt(this.metas).removeSessionUpdateListener(this.recordUpdate), null === (zz = (tz = this.metas).removeCaptureListener) || void 0 === zz || zz.call(tz, this.activate), kt(this.metas).removeCaptureFilter(this.shouldCapture), this.transports.removeBeforeSendHooks(this.discard)
      }
    };

    function Lt(zz) {
      return (null === zz || void 0 === zz ? void 0 : zz.persistent) ? dt : ht
    }

    function lt() {}
    let nt = function(zz) {
      return zz[zz.OFF = 0] = "OFF", zz[zz.ERROR = 1] = "ERROR", zz[zz.WARN = 2] = "WARN", zz[zz.INFO = 3] = "INFO", zz[zz.VERBOSE = 4] = "VERBOSE", zz
    }({});
    const qt = {
        debug: lt,
        error: lt,
        info: lt,
        prefix: "Faro",
        warn: lt
      },
      St = 1;

    function Vt(zz) {
      return Vt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(zz) {
        return typeof zz
      } : function(zz) {
        return zz && "function" == typeof Symbol && zz.constructor === Symbol && zz !== Symbol.prototype ? "symbol" : typeof zz
      }, Vt(zz)
    }

    function Rt(zz) {
      var tz = function(zz, tz) {
        if ("object" != Vt(zz) || !zz) return zz;
        var sz = zz[Symbol.toPrimitive];
        if (void 0 !== sz) {
          var Fz = sz.call(zz, tz || "default");
          if ("object" != Vt(Fz)) return Fz;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === tz ? String : Number)(zz)
      }(zz, "string");
      return "symbol" == Vt(tz) ? tz : tz + ""
    }

    function pt(zz, tz, sz) {
      return (tz = Rt(tz)) in zz ? Object.defineProperty(zz, tz, {
        value: sz,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : zz[tz] = sz, zz
    }

    function ft(zz, tz) {
      var sz = Object.keys(zz);
      if (Object.getOwnPropertySymbols) {
        var Fz = Object.getOwnPropertySymbols(zz);
        tz && (Fz = Fz.filter((function(tz) {
          return Object.getOwnPropertyDescriptor(zz, tz).enumerable
        }))), sz.push.apply(sz, Fz)
      }
      return sz
    }

    function Et(zz) {
      for (var tz = 1; tz < arguments.length; tz++) {
        var sz = null != arguments[tz] ? arguments[tz] : {};
        tz % 2 ? ft(Object(sz), !0).forEach((function(tz) {
          pt(zz, tz, sz[tz])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(zz, Object.getOwnPropertyDescriptors(sz)) : ft(Object(sz)).forEach((function(tz) {
          Object.defineProperty(zz, tz, Object.getOwnPropertyDescriptor(sz, tz))
        }))
      }
      return zz
    }
    const zs = Et({}, console);
    var ts = class {
        constructor() {
          this.unpatchedConsole = zs, this.internalLogger = qt, this.config = {}, this.metas = {}
        }
        logDebug() {
          for (var zz = arguments.length, tz = new Array(zz), sz = 0; sz < zz; sz++) tz[sz] = arguments[sz];
          this.internalLogger.debug(`${this.name}\n`, ...tz)
        }
        logInfo() {
          for (var zz = arguments.length, tz = new Array(zz), sz = 0; sz < zz; sz++) tz[sz] = arguments[sz];
          this.internalLogger.info(`${this.name}\n`, ...tz)
        }
        logWarn() {
          for (var zz = arguments.length, tz = new Array(zz), sz = 0; sz < zz; sz++) tz[sz] = arguments[sz];
          this.internalLogger.warn(`${this.name}\n`, ...tz)
        }
        logError() {
          for (var zz = arguments.length, tz = new Array(zz), sz = 0; sz < zz; sz++) tz[sz] = arguments[sz];
          this.internalLogger.error(`${this.name}\n`, ...tz)
        }
      },
      ss = class extends ts {
        constructor() {
          super(...arguments), this.api = {}, this.transports = {}
        }
      };
    const Fs = "2.12.1";
    var Ws = class extends ss {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-session", this.version = Fs, this.isAdoptingSession = () => !1
      }
      sendSessionStartEvent(zz) {
        var tz;
        const sz = zz.session;
        if (sz && sz.id !== (null === (tz = this.notifiedSession) || void 0 === tz ? void 0 : tz.id)) {
          var Fz;
          if (this.isAdoptingSession()) return void(this.notifiedSession = sz);
          if (this.notifiedSession && this.notifiedSession.id === (null === (Fz = sz.attributes) || void 0 === Fz ? void 0 : Fz.previousSession)) return this.api.pushEvent(Jt, {}, void 0, {
            skipDedupe: !0
          }), void(this.notifiedSession = sz);
          this.notifiedSession = sz, this.api.pushEvent(xt, {}, void 0, {
            skipDedupe: !0
          })
        }
      }
      createInitialSession(zz, tz, sz) {
        const Fz = null === sz || void 0 === sz ? void 0 : sz.session;
        let Wz, Xz, Oz = zz.fetchUserSession();
        if (tz.persistent && tz.maxSessionPersistenceTime && Oz) {
          const zz = Nt();
          Oz.lastActivity < zz - tz.maxSessionPersistenceTime && (dt.removeUserSession(), Oz = null)
        }
        const oz = Zt(Oz);
        if ((null === sz || void 0 === sz ? void 0 : sz.reset) || !oz || (null === Fz || void 0 === Fz ? void 0 : Fz.id) && Fz.id !== (null === Oz || void 0 === Oz ? void 0 : Oz.sessionId)) {
          var vz, Uz, Kz, uz, Nz, bz;
          Xz = et({
            sessionId: (null === sz || void 0 === sz ? void 0 : sz.reset) ? void 0 : null !== (vz = null === Fz || void 0 === Fz ? void 0 : Fz.id) && void 0 !== vz ? vz : null === (Uz = tz.session) || void 0 === Uz ? void 0 : Uz.id,
            isSampled: ut(this)
          }, this);
          const zz = Xz.sessionId,
            wz = sz && oz ? null === Oz || void 0 === Oz || null === (Kz = Oz.sessionMeta) || void 0 === Kz ? void 0 : Kz.overrides : void 0,
            Dz = wz ? Kt(Kt({}, null === (uz = tz.session) || void 0 === uz ? void 0 : uz.overrides), wz) : null === (Nz = tz.session) || void 0 === Nz ? void 0 : Nz.overrides;
          Xz.sessionMeta = Kt({
            id: zz,
            attributes: Kt({
              isSampled: Xz.isSampled.toString()
            }, null === (bz = tz.session) || void 0 === bz ? void 0 : bz.attributes)
          }, Dz ? {
            overrides: Dz
          } : {}), Wz = xt
        } else {
          var wz, Dz;
          const zz = null === Oz || void 0 === Oz ? void 0 : Oz.sessionId;
          Xz = et({
            sessionId: zz,
            isSampled: Oz.isSampled || !1,
            started: null === Oz || void 0 === Oz ? void 0 : Oz.started
          }, this);
          const sz = null === Oz || void 0 === Oz ? void 0 : Oz.sessionMeta,
            Fz = Kt(Kt({}, null === (wz = tz.session) || void 0 === wz ? void 0 : wz.overrides), null === sz || void 0 === sz ? void 0 : sz.overrides);
          Xz.sessionMeta = Kt(Kt({}, tz.session), {}, {
            id: zz,
            attributes: Kt(Kt(Kt({}, null === (Dz = tz.session) || void 0 === Dz ? void 0 : Dz.attributes), null === sz || void 0 === sz ? void 0 : sz.attributes), {}, {
              isSampled: Xz.isSampled.toString()
            }),
            overrides: Fz
          }), Wz = mt
        }
        var gz;
        if (Fz && (Xz.sessionMeta = Kt(Kt({}, Xz.sessionMeta), {}, {
            attributes: Kt(Kt(Kt({}, null === (gz = Xz.sessionMeta) || void 0 === gz ? void 0 : gz.attributes), Fz.attributes), {}, {
              isSampled: Xz.isSampled.toString()
            })
          }), Fz.overrides)) {
          const zz = (null === sz || void 0 === sz ? void 0 : sz.inheritOverrides) ? Kt(Kt({}, Xz.sessionMeta.overrides), Fz.overrides) : Fz.overrides;
          Object.keys(zz).length > 0 ? Xz.sessionMeta.overrides = zz : delete Xz.sessionMeta.overrides
        }
        return {
          initialSession: Xz,
          lifecycleType: Wz
        }
      }
      registerBeforeSendHook(zz) {
        var tz;
        this.beforeSendHook = tz => {
          var sz, Fz;
          const Wz = null === (sz = tz.meta.session) || void 0 === sz ? void 0 : sz.id;
          Wz && !this.transports.isPaused() && zz(Wz);
          const Xz = null === (Fz = tz.meta.session) || void 0 === Fz ? void 0 : Fz.attributes;
          if (Xz && "true" === (null === Xz || void 0 === Xz ? void 0 : Xz.isSampled)) {
            var Oz;
            let zz = JSON.parse(JSON.stringify(tz));
            const sz = null === (Oz = zz.meta.session) || void 0 === Oz ? void 0 : Oz.attributes;
            var oz;
            if (null === sz || void 0 === sz || delete sz.isSampled, 0 === Object.keys(null !== sz && void 0 !== sz ? sz : {}).length) null === (oz = zz.meta.session) || void 0 === oz || delete oz.attributes;
            return zz
          }
          return null
        }, null === (tz = this.transports) || void 0 === tz || tz.addBeforeSendHooks(this.beforeSendHook)
      }
      initialize() {
        var zz;
        this.logDebug("init session instrumentation");
        const tz = document.prerendering;
        var sz;
        if ((null === (zz = this.config.sessionTracking) || void 0 === zz ? void 0 : zz.enabled) && (tz || this.prerenderSession)) return null !== (sz = this.prerenderSession) && void 0 !== sz || (this.prerenderSession = new it(this.metas, this.transports, (zz => {
          this.prerenderSession = void 0, this.initializeSession(zz)
        }))), void this.prerenderSession.initialize();
        this.initializeSession()
      }
      initializeSession(zz) {
        const tz = this.config.sessionTracking;
        if (null === tz || void 0 === tz ? void 0 : tz.enabled) {
          var sz, Fz;
          const Wz = Lt(tz),
            Xz = new Wz(this);
          this.isAdoptingSession = Xz.isAdopting, this.registerBeforeSendHook(Xz.recordActivity);
          const {
            initialSession: Oz,
            lifecycleType: oz
          } = this.createInitialSession(Wz, tz, zz);
          Wz.storeUserSession(Oz);
          const vz = Oz.sessionMeta;
          this.notifiedSession = vz, this.api.setSession(vz), this.captureListener = () => {
            this.transports.isPaused() || Xz.updateSession({
              refreshActivity: !1
            })
          }, null === (sz = (Fz = this.metas).addCaptureListener) || void 0 === sz || sz.call(Fz, this.captureListener), oz === xt && this.api.pushEvent(xt, {}, void 0, {
            skipDedupe: !0
          }), oz === mt && this.api.pushEvent(mt, {}, void 0, {
            skipDedupe: !0
          })
        }
        this.sessionStartListener = this.sendSessionStartEvent.bind(this), this.metas.addListener(this.sessionStartListener)
      }
      destroy() {
        var zz, tz, sz;
        (null === (zz = this.prerenderSession) || void 0 === zz || zz.destroy(), this.captureListener) && (null === (tz = (sz = this.metas).removeCaptureListener) || void 0 === tz || tz.call(sz, this.captureListener), this.captureListener = void 0);
        this.beforeSendHook && (this.transports.removeBeforeSendHooks(this.beforeSendHook), this.beforeSendHook = void 0), this.sessionStartListener && (this.metas.removeListener(this.sessionStartListener), this.sessionStartListener = void 0)
      }
    };

    function Xs(zz, tz, sz, Fz) {
      const Wz = {
        filename: zz || document.location.href,
        function: tz || "?"
      };
      return void 0 !== sz && (Wz.lineno = sz), void 0 !== Fz && (Wz.colno = Fz), Wz
    }
    const Os = /^\s*at (?:(?![a-z]+:\/\/)([^(]+?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      os = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      vs = /^(?=[\s\S]*?(?:\/|bundle|\.js|\[native code]))\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      Us = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      Ks = "safari-extension",
      us = "safari-web-extension",
      Ns = /Minified React error #\d+;/i;

    function bs(zz, tz) {
      const sz = null === zz || void 0 === zz ? void 0 : zz.includes(Ks),
        Fz = !sz && (null === zz || void 0 === zz ? void 0 : zz.includes("safari-web-extension"));
      return sz || Fz ? [(null === zz || void 0 === zz ? void 0 : zz.includes("@")) ? zz.split("@")[0] : zz, sz ? `${Ks}:${tz}` : `${us}:${tz}`] : [zz, tz]
    }
    const ws = 1024;

    function Ds(zz) {
      let tz = [];
      zz.stacktrace ? tz = zz.stacktrace.split("\n").filter(((zz, tz) => tz % 2 === 0)) : zz.stack && (tz = zz.stack.split("\n"));
      const sz = tz.reduce(((tz, sz, Fz) => {
        if (sz.length > ws) return tz;
        let Wz, Xz, Oz, oz, vz;
        if (Wz = Os.exec(sz)) {
          if (Xz = Wz[1], Oz = Wz[2], oz = Wz[3], vz = Wz[4], null === Oz || void 0 === Oz ? void 0 : Oz.startsWith("eval")) {
            const zz = os.exec(Oz);
            zz && (Oz = zz[1], oz = zz[2], vz = zz[3])
          }
          Oz = (null === Oz || void 0 === Oz ? void 0 : Oz.startsWith("address at ")) ? Oz.substring(11) : Oz, [Xz, Oz] = bs(Xz, Oz)
        } else if (Wz = vs.exec(sz)) {
          if (Xz = Wz[1], Oz = Wz[3], oz = Wz[4], vz = Wz[5], Oz && Oz.includes(" > eval")) {
            const zz = Us.exec(Oz);
            zz && (Xz = Xz || "eval", Oz = zz[1], oz = zz[2])
          } else 0 === Fz && !vz && mz(zz.columnNumber) && (vz = String(zz.columnNumber + 1));
          [Xz, Oz] = bs(Xz, Oz)
        }
        return (Oz || Xz) && tz.push(Xs(Oz, Xz, oz ? Number(oz) : void 0, vz ? Number(vz) : void 0)), tz
      }), []);
      return Ns.test(zz.message) ? sz.slice(1) : sz
    }

    function gs(zz) {
      return {
        frames: Ds(zz)
      }
    }
    const Hs = "http-request-start",
      Bs = "http-request-end";
    var Ps = class zz {
      constructor() {
        this.subscribers = []
      }
      subscribe(zz) {
        return this.subscribers.push(zz), {
          unsubscribe: () => this.unsubscribe(zz)
        }
      }
      unsubscribe(zz) {
        this.subscribers = this.subscribers.filter((tz => tz !== zz))
      }
      notify(zz) {
        this.subscribers.forEach((tz => tz(zz)))
      }
      first() {
        const tz = new zz,
          sz = zz => {
            tz.notify(zz), Fz.unsubscribe()
          },
          Fz = this.subscribe(sz),
          Wz = tz.unsubscribe.bind(tz);
        return this.withUnsubscribeOverride(tz, Wz, sz)
      }
      takeWhile(tz) {
        const sz = new zz,
          Fz = zz => {
            tz(zz) ? sz.notify(zz) : sz.unsubscribe(Fz)
          };
        this.subscribe(Fz);
        const Wz = sz.unsubscribe.bind(sz);
        return this.withUnsubscribeOverride(sz, Wz, Fz)
      }
      filter(tz) {
        const sz = new zz,
          Fz = zz => {
            tz(zz) && sz.notify(zz)
          };
        this.subscribe(Fz);
        const Wz = sz.unsubscribe.bind(sz);
        return this.withUnsubscribeOverride(sz, Wz, Fz)
      }
      merge() {
        const tz = new zz,
          sz = [];
        for (var Fz = arguments.length, Wz = new Array(Fz), Xz = 0; Xz < Fz; Xz++) Wz[Xz] = arguments[Xz];
        Wz.forEach((zz => {
          const Fz = zz.subscribe((zz => {
            tz.notify(zz)
          }));
          sz.push(Fz)
        }));
        const Oz = tz.unsubscribeAll.bind(tz);
        return tz.unsubscribe = () => {
          sz.forEach((zz => zz.unsubscribe())), Oz()
        }, tz
      }
      withUnsubscribeOverride(zz, tz, sz) {
        return zz.unsubscribe = zz => {
          tz(zz), this.unsubscribe(sz)
        }, zz
      }
      unsubscribeAll() {
        this.subscribers = []
      }
    };
    let rs = function(zz) {
      return zz.TRACE = "trace", zz.DEBUG = "debug", zz.INFO = "info", zz.LOG = "log", zz.WARN = "warn", zz.ERROR = "error", zz
    }({});
    const Ys = "log",
      xs = ["trace", "debug", "info", "log", "warn", "error"];
    let ms, Is = !1;
    const Cs = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
      es = "Error",
      Zs = zz => zz.map((zz => ez(zz) ? yt(zz) : String(zz))).join(" ");

    function Gs(zz) {
      let tz, sz, Fz, Wz, Xz = [];
      if (hz(zz) && zz.error) tz = zz.error.message, sz = zz.error.name, Xz = Ds(zz.error);
      else if ((Fz = Qz(zz)) || kz(zz)) {
        const {
          name: Wz,
          message: Xz
        } = zz;
        sz = null !== Wz && void 0 !== Wz ? Wz : Fz ? "DOMError" : "DOMException", tz = Xz ? `${sz}: ${Xz}` : sz
      } else dz(zz) ? (sz = zz.name, tz = zz.message, Xz = Ds(zz)) : (ez(zz) || (Wz = yz(zz))) && (sz = Wz ? zz.constructor.name : void 0, tz = `Non-Error exception captured with keys: ${Object.keys(zz)}`);
      return [tz, sz, Xz]
    }

    function Ts(zz) {
      const [tz, sz, Fz, Wz, Xz] = zz;
      let Oz, oz, vz = [];
      const Uz = xz(tz),
        Kz = Xs(sz, "?", Fz, Wz);
      return Xz || !Uz ? ([Oz, oz, vz] = Gs(null !== Xz && void 0 !== Xz ? Xz : tz), 0 === vz.length && (vz = [Kz])) : Uz && ([Oz, oz] = function(zz) {
        var tz, sz;
        const Fz = zz.match(Cs),
          Wz = null !== (tz = null === Fz || void 0 === Fz ? void 0 : Fz[1]) && void 0 !== tz ? tz : es;
        return [null !== (sz = null === Fz || void 0 === Fz ? void 0 : Fz[2]) && void 0 !== sz ? sz : zz, Wz]
      }(tz), vz = [Kz]), {
        value: Oz,
        type: oz,
        stackFrames: vz
      }
    }

    function cs(zz, tz) {
      return dz(zz[0]) ? Ts(zz) : {
        value: tz(zz)
      }
    }
    const As = zz => zz.map((zz => {
      try {
        return String(zz)
      } catch (tz) {
        return ""
      }
    })).join(" ");
    var ys = class zz extends ss {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-console", this.version = Fs, this.errorSerializer = As
      }
      initialize() {
        var tz, sz;
        const Fz = this.config.consoleInstrumentation,
          Wz = (null === Fz || void 0 === Fz ? void 0 : Fz.serializeErrors) || !!(null === Fz || void 0 === Fz ? void 0 : Fz.errorSerializer);
        this.errorSerializer = Wz ? null !== (tz = null === Fz || void 0 === Fz ? void 0 : Fz.errorSerializer) && void 0 !== tz ? tz : Zs : As;
        const Xz = null !== (sz = null === Fz || void 0 === Fz ? void 0 : Fz.disabledLevels) && void 0 !== sz ? sz : zz.defaultDisabledLevels,
          Oz = function(zz) {
            if (ms || (ms = new Ps), !Is) {
              const tz = null !== zz && void 0 !== zz ? zz : zs;
              xs.forEach((zz => {
                console[zz] = function() {
                  for (var sz, Fz = arguments.length, Wz = new Array(Fz), Xz = 0; Xz < Fz; Xz++) Wz[Xz] = arguments[Xz];
                  ms.notify({
                    type: "console",
                    level: zz,
                    args: Wz
                  }), null === (sz = tz[zz]) || void 0 === sz || sz.apply(console, Wz)
                }
              })), Is = !0
            }
            return ms
          }(this.unpatchedConsole);
        this.subscription = Oz.subscribe((tz => {
          let {
            level: sz,
            args: Wz
          } = tz;
          if (!Xz.includes(sz)) try {
            if (sz !== rs.ERROR || (null === Fz || void 0 === Fz ? void 0 : Fz.consoleErrorAsLog))
              if (sz === rs.ERROR && (null === Fz || void 0 === Fz ? void 0 : Fz.consoleErrorAsLog)) {
                const {
                  value: tz,
                  type: Fz,
                  stackFrames: Xz
                } = cs(Wz, this.errorSerializer);
                this.api.pushLog(tz ? [zz.consoleErrorPrefix + tz] : Wz, {
                  level: sz,
                  context: {
                    value: null !== tz && void 0 !== tz ? tz : "",
                    type: null !== Fz && void 0 !== Fz ? Fz : "",
                    stackFrames: (null === Xz || void 0 === Xz ? void 0 : Xz.length) ? Zs(Xz) : ""
                  }
                })
              } else this.api.pushLog(Wz, {
                level: sz
              });
            else {
              const {
                value: tz,
                type: sz,
                stackFrames: Fz
              } = cs(Wz, this.errorSerializer);
              if (tz && !sz && !Fz) return void this.api.pushError(new Error(zz.consoleErrorPrefix + tz));
              this.api.pushError(new Error(zz.consoleErrorPrefix + tz), {
                type: sz,
                stackFrames: Fz
              })
            }
          } catch (Oz) {
            this.logError(Oz)
          }
        }))
      }
      destroy() {
        var zz;
        null === (zz = this.subscription) || void 0 === zz || zz.unsubscribe(), this.subscription = void 0
      }
    };
    ys.defaultDisabledLevels = [rs.DEBUG, rs.TRACE, rs.LOG], ys.consoleErrorPrefix = "console.error: ";
    const Ms = [];
    var ds = class extends ss {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-errors", this.version = Fs
      }
      initialize() {
        this.logDebug("Initializing"),
          function(zz) {
            const tz = window.onerror;
            window.onerror = function() {
              for (var sz = arguments.length, Fz = new Array(sz), Wz = 0; Wz < sz; Wz++) Fz[Wz] = arguments[Wz];
              try {
                const {
                  value: tz,
                  type: sz,
                  stackFrames: Wz
                } = Ts(Fz), Xz = Fz[4];
                if (tz) {
                  const Fz = {
                    type: sz,
                    stackFrames: Wz
                  };
                  null != Xz && (Fz.originalError = Xz), zz.pushError(new Error(tz), Fz)
                }
              } finally {
                null === tz || void 0 === tz || tz.apply(window, Fz)
              }
            }
          }(this.api),
          function(zz) {
            const tz = tz => {
              var sz;
              let Fz, Wz, Xz = tz;
              if (Xz.reason) Xz = tz.reason;
              else if (null === (sz = tz.detail) || void 0 === sz ? void 0 : sz.reason) {
                var Oz;
                Xz = null === (Oz = tz.detail) || void 0 === Oz ? void 0 : Oz.reason
              }
              let oz = [];
              jz(Xz) ? (Fz = `Non-Error promise rejection captured with value: ${String(Xz)}`, Wz = "UnhandledRejection") : [Fz, Wz, oz] = Gs(Xz), Fz && zz.pushError(new Error(Fz), {
                type: Wz,
                stackFrames: oz
              })
            };
            window.addEventListener("unhandledrejection", tz), Ms.push(tz)
          }(this.api)
      }
    };
    const hs = "unknown";
    var Qs = class extends ss {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-view", this.version = Fs, this.waitingForActivation = !1, this.sendViewChangedEvent = zz => {
          var tz;
          if (this.waitingForActivation || document.prerendering) return;
          const sz = zz.view;
          if (sz && sz.name !== (null === (tz = this.notifiedView) || void 0 === tz ? void 0 : tz.name)) {
            var Fz, Wz, Xz;
            const zz = null !== (Fz = null === (Wz = this.notifiedView) || void 0 === Wz ? void 0 : Wz.name) && void 0 !== Fz ? Fz : hs;
            this.notifiedView = sz, this.api.pushEvent(Yt, {
              fromView: zz,
              toView: null !== (Xz = sz.name) && void 0 !== Xz ? Xz : hs
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
    class ks {
      t;
      o = 0;
      i = [];
      l(zz) {
        if (zz.hadRecentInput) return;
        const tz = this.i[0],
          sz = this.i.at(-1);
        this.o && tz && sz && zz.startTime - sz.startTime < 1e3 && zz.startTime - tz.startTime < 5e3 ? (this.o += zz.value, this.i.push(zz)) : (this.o = zz.value, this.i = [zz]), this.t?.(zz)
      }
    }
    const is = () => {
        const zz = performance.getEntriesByType("navigation")[0];
        if (zz && zz.responseStart > 0 && zz.responseStart < performance.now()) return zz
      },
      Ls = zz => {
        if ("loading" === document.readyState) return "loading";
        const tz = is();
        if (tz) {
          if (zz < tz.domInteractive) return "loading";
          if (0 === tz.domContentLoadedEventStart || zz < tz.domContentLoadedEventStart) return "dom-interactive";
          if (0 === tz.domComplete || zz < tz.domComplete) return "dom-content-loaded"
        }
        return "complete"
      },
      ls = zz => {
        const tz = zz.nodeName;
        return 1 === zz.nodeType ? tz.toLowerCase() : tz.toUpperCase().replace(/^#/, "")
      },
      ns = zz => {
        let tz = "";
        try {
          for (; 9 !== zz?.nodeType;) {
            const sz = zz,
              Fz = sz.id ? "#" + sz.id : [ls(sz), ...Array.from(sz.classList ?? []).sort()].join(".");
            if (tz.length + Fz.length > 99) return tz || Fz;
            if (tz = tz ? Fz + ">" + tz : Fz, sz.id) break;
            zz = sz.parentNode
          }
        } catch {}
        return tz
      },
      as = new WeakMap;

    function qs(zz, tz) {
      let sz = as.get(tz);
      return sz || (sz = new WeakMap, as.set(tz, sz)), sz.get(zz) || sz.set(zz, new tz), sz.get(zz)
    }
    let Ss = -1;
    const Vs = () => Ss,
      Rs = zz => {
        addEventListener("pageshow", (tz => {
          tz.persisted && (Ss = tz.timeStamp, zz(tz))
        }), !0)
      },
      ps = (zz, tz, sz, Fz) => {
        let Wz, Xz;
        return Oz => {
          tz.value >= 0 && (Oz || Fz) && (Xz = tz.value - (Wz ?? 0), (Xz || void 0 === Wz) && (Wz = tz.value, tz.delta = Xz, tz.rating = ((zz, tz) => zz > tz[1] ? "poor" : zz > tz[0] ? "needs-improvement" : "good")(tz.value, sz), zz(tz)))
        }
      },
      fs = zz => {
        requestAnimationFrame((() => requestAnimationFrame((() => zz()))))
      },
      Es = () => is()?.activationStart ?? 0;
    let zF = -1;
    const tF = new Set,
      sF = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
      FF = zz => {
        if ("hidden" === document.visibilityState) {
          if ("visibilitychange" === zz.type)
            for (const zz of tF) zz();
          isFinite(zF) || (zF = "visibilitychange" === zz.type ? zz.timeStamp : 0, removeEventListener("prerenderingchange", FF, !0))
        }
      },
      WF = function() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (zF = 1 / 0), zF < 0) {
          const zz = Es(),
            tz = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find((tz => "hidden" === tz.name && tz.startTime >= zz))?.startTime;
          zF = tz ?? sF(), addEventListener("visibilitychange", FF, !0), addEventListener("prerenderingchange", FF, !0), Rs((() => {
            setTimeout((() => {
              zF = sF()
            }))
          }))
        }
        return {
          get firstHiddenTime() {
            return zF
          },
          onHidden(zz) {
            tF.add(zz)
          }
        }
      },
      XF = function(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          sz = arguments.length > 2 ? arguments[2] : void 0,
          Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Wz = arguments.length > 4 ? arguments[4] : void 0,
          Xz = arguments.length > 5 ? arguments[5] : void 0,
          Oz = arguments.length > 6 ? arguments[6] : void 0;
        const oz = is(),
          vz = oz?.navigationId || 0;
        let Uz = "navigate";
        return sz ? Uz = sz : Vs() >= 0 ? Uz = "back-forward-cache" : oz && (document.prerendering || Es() > 0 ? Uz = "prerender" : document.wasDiscarded ? Uz = "restore" : oz.type && (Uz = oz.type.replace(/_/g, "-"))), {
          name: zz,
          value: tz,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
          navigationType: Uz,
          navigationId: Fz || vz,
          navigationInteractionId: Wz,
          navigationURL: Xz || oz?.name,
          navigationStartTime: Oz || 0
        }
      },
      OF = function(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          const Fz = zz.filter((zz => PerformanceObserver.supportedEntryTypes.includes(zz)));
          if (Fz.length > 0) {
            const zz = new PerformanceObserver((zz => {
              queueMicrotask((() => {
                const sz = zz.getEntries();
                Fz.length > 1 && sz.sort(((zz, tz) => zz.startTime + zz.duration - (tz.startTime + tz.duration))), tz(sz)
              }))
            }));
            for (const tz of Fz) zz.observe({
              type: tz,
              buffered: !0,
              ...sz
            });
            return zz
          }
        } catch {}
      },
      oF = zz => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && zz && zz.reportSoftNavs,
      vF = (zz, tz) => {
        if (zz.set(tz.navigationId, tz), zz.size > 2) {
          const tz = zz.keys().next().value;
          void 0 !== tz && zz.delete(tz)
        }
      },
      UF = zz => {
        let tz = !1;
        return () => {
          tz || (zz(), tz = !0)
        }
      };
    class KF {
      u
    }
    const uF = zz => {
        document.prerendering ? addEventListener("prerenderingchange", zz, !0) : zz()
      },
      NF = [1800, 3e3],
      bF = function(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const sz = oF(tz);
        uF((() => {
          const Fz = qs(tz, KF),
            Wz = WF();
          let Xz, Oz = XF("FCP");
          const oz = OF(["paint"], (zz => {
            for (const tz of zz) "first-contentful-paint" === tz.name && (oz.disconnect(), tz.startTime < Wz.firstHiddenTime && (Oz.value = Math.max(tz.startTime - Es(), 0), Oz.entries.push(tz), Oz.navigationId = tz.navigationId || Oz.navigationId, Xz(!0)))
          }));
          oz && (Xz = ps(zz, Oz, NF, tz.reportAllChanges), Rs((sz => {
            Oz = XF("FCP", -1, "back-forward-cache", Oz.navigationId, Oz.navigationInteractionId, Oz.navigationURL, Vs()), Xz = ps(zz, Oz, NF, tz.reportAllChanges), fs((() => {
              Oz.value = performance.now() - sz.timeStamp, Xz(!0)
            }))
          }))), sz && OF(["soft-navigation"], (sz => {
            sz.forEach((sz => {
              Fz.u && sz.navigationId && vF(Fz.u, sz);
              const Wz = Math.max((sz.presentationTime || sz.paintTime || 0) - sz.startTime, 0);
              Oz = XF("FCP", Wz, "soft-navigation", sz.navigationId, sz.interactionId, sz.name, sz.startTime), Xz = ps(zz, Oz, NF, tz.reportAllChanges), Xz(!0)
            }))
          }), tz)
        }))
      },
      wF = [.1, .25],
      DF = zz => zz.find((zz => 1 === zz.node?.nodeType)) || zz[0];
    let gF = 0,
      HF = 1 / 0,
      BF = 0;
    const PF = zz => {
      for (const tz of zz) tz.interactionId && (HF = Math.min(HF, tz.interactionId), BF = Math.max(BF, tz.interactionId), gF = BF ? (BF - HF) / 7 + 1 : 0)
    };
    let rF;
    const YF = () => rF ? gF : performance.interactionCount ?? 0;
    class xF {
      h = 0;
      v = [];
      p = new Map;
      m;
      M;
      T() {
        return YF() - this.h
      }
      D() {
        this.h = YF(), this.v.length = 0, this.p.clear()
      }
      S(zz) {
        const tz = this.T(),
          sz = Math.min(this.v.length - 1, Math.floor(tz / 50));
        return !tz || -1 !== sz || "soft-navigation" !== zz && "back-forward-cache" !== zz ? this.v[sz] : {
          k: 8,
          id: -1,
          entries: []
        }
      }
      l(zz) {
        if (this.m?.(zz), !zz.interactionId) return;
        const tz = this.v.at(-1);
        let sz = this.p.get(zz.interactionId);
        if (sz || this.v.length < 10 || zz.duration > tz.k) {
          if (sz ? zz.duration > sz.k ? (sz.entries = [zz], sz.k = zz.duration) : zz.duration === sz.k && zz.startTime === sz.entries[0].startTime && sz.entries.push(zz) : (sz = {
              id: zz.interactionId,
              entries: [zz],
              k: zz.duration
            }, this.p.set(sz.id, sz), this.v.push(sz)), this.v.sort(((zz, tz) => tz.k - zz.k)), this.v.length > 10) {
            const zz = this.v.splice(10);
            for (const tz of zz) this.p.delete(tz.id)
          }
          this.M?.(sz)
        }
      }
    }
    const mF = zz => {
        const tz = "requestIdleCallback" in globalThis ? 1e3 : 0,
          sz = globalThis.requestIdleCallback || setTimeout,
          Fz = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) zz();
        else {
          const Wz = UF(zz);
          let Xz = -1;
          const Oz = () => {
            Fz(Xz), Wz()
          };
          addEventListener("visibilitychange", Oz, {
            once: !0,
            capture: !0
          }), Xz = sz((() => {
            removeEventListener("visibilitychange", Oz, {
              capture: !0
            }), Wz()
          }), {
            timeout: tz
          })
        }
      },
      JF = [200, 500],
      IF = function(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const sz = qs(tz = Object.assign({}, tz), xF);
        let Fz = [],
          Wz = [],
          Xz = 0;
        const Oz = new WeakMap,
          oz = new WeakMap;
        let vz = !1;
        const Uz = () => {
            vz || (vz = !0, mF(Kz))
          },
          Kz = () => {
            const zz = new Set(sz.v.map((zz => Oz.get(zz.entries[0])))),
              tz = Wz.length - 10;
            Wz = Wz.filter(((sz, Fz) => Fz >= tz || zz.has(sz)));
            const oz = new Set;
            for (const sz of Wz) {
              const zz = uz(sz.startTime, sz.processingEnd);
              for (const tz of zz) oz.add(tz)
            }
            const Uz = Fz.length - 10;
            Fz = Fz.filter(((zz, tz) => oz.has(zz) || tz >= Uz && zz.startTime > Xz)), vz = !1
          };
        sz.m = zz => {
          const sz = zz.startTime + zz.duration;
          let Fz;
          Xz = Math.max(Xz, zz.processingEnd);
          for (let Xz = Wz.length - 1; Xz >= 0; Xz--) {
            const Oz = Wz[Xz];
            if (Math.abs(sz - Oz.renderTime) <= 8) {
              Fz = Oz, Fz.startTime = Math.min(zz.startTime, Fz.startTime), Fz.processingStart = Math.min(zz.processingStart, Fz.processingStart), Fz.processingEnd = Math.max(zz.processingEnd, Fz.processingEnd), tz.includeProcessedEventEntries && Fz.entries.push(zz);
              break
            }
          }
          Fz || (Fz = {
            startTime: zz.startTime,
            processingStart: zz.processingStart,
            processingEnd: zz.processingEnd,
            renderTime: sz,
            entries: tz.includeProcessedEventEntries ? [zz] : []
          }, Wz.push(Fz)), zz.interactionId && Oz.set(zz, Fz), Uz()
        }, sz.M = zz => {
          if (!oz.get(zz)) {
            const sz = zz.entries.find((zz => zz.target))?.target;
            if (sz) {
              const Fz = tz.generateTarget?.(sz) ?? ns(sz);
              oz.set(zz, Fz)
            } else {
              const tz = zz.entries.find((zz => zz.targetSelector))?.targetSelector;
              tz && oz.set(zz, tz)
            }
          }
        };
        const uz = (zz, tz) => {
          const sz = [];
          for (const Wz of Fz)
            if (!(Wz.startTime + Wz.duration < zz)) {
              if (Wz.startTime > tz) break;
              sz.push(Wz)
            } return sz
        };
        OF(["long-animation-frame"], (zz => {
            Fz = Fz.concat(zz), Uz()
          }), tz),
          function(zz) {
            let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
            const sz = WF();
            uF((() => {
              "interactionCount" in performance || rF || (rF = OF(["event"], PF, {
                durationThreshold: 0
              }));
              let Fz, Wz = XF("INP");
              const Xz = qs(tz, xF),
                Oz = (sz, Oz, oz, vz, Uz) => {
                  Xz.D(), Wz = XF("INP", -1, sz, Oz, oz, vz, Uz), Fz = ps(zz, Wz, JF, tz.reportAllChanges)
                },
                oz = () => {
                  const zz = Xz.S(Wz.navigationType);
                  zz && zz.k !== Wz.value && (Wz.value = zz.k, Wz.entries = zz.entries, Fz())
                },
                vz = zz => {
                  oz(), Fz(!0), Oz("soft-navigation", zz.navigationId, zz.interactionId, zz.name, zz.startTime)
                },
                Uz = function(zz) {
                  let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  mF((() => {
                    for (const tz of zz) "soft-navigation" !== tz.entryType ? Xz.l(tz) : vz(tz);
                    oz(), tz && Fz(!0)
                  }))
                },
                Kz = ["event", "first-input"];
              oF(tz) && Kz.push("soft-navigation");
              const uz = OF(Kz, Uz, {
                ...tz,
                durationThreshold: tz.durationThreshold ?? 40
              });
              Fz = ps(zz, Wz, JF, tz.reportAllChanges), uz && (sz.onHidden((() => {
                Uz(uz.takeRecords(), !0)
              })), Rs((() => {
                Oz("back-forward-cache", Wz.navigationId, Wz.navigationInteractionId, Wz.navigationURL, Vs())
              })))
            }))
          }((tz => {
            zz((zz => {
              if (0 === zz.entries.length) {
                const tz = zz.navigationStartTime || 0,
                  sz = {
                    processedEventEntries: [],
                    longAnimationFrameEntries: [],
                    inputDelay: 0,
                    processingDuration: 0,
                    presentationDelay: zz.value,
                    loadState: Ls(tz)
                  };
                return Object.assign(zz, {
                  attribution: sz
                })
              }
              const tz = zz.entries[0],
                Fz = Oz.get(tz),
                Wz = Math.max(Fz.processingStart, tz.startTime),
                Xz = Math.max(tz.startTime + tz.duration, Wz),
                vz = Math.min(Fz.processingEnd, Xz),
                Uz = Fz.entries.sort(((zz, tz) => zz.processingStart - tz.processingStart)),
                Kz = uz(tz.startTime, vz),
                Nz = sz.p.get(tz.interactionId),
                bz = {
                  interactionTarget: oz.get(Nz),
                  interactionType: tz.name.startsWith("key") ? "keyboard" : "pointer",
                  interactionTime: tz.startTime,
                  nextPaintTime: Xz,
                  processedEventEntries: Uz,
                  longAnimationFrameEntries: Kz,
                  inputDelay: Wz - tz.startTime,
                  processingDuration: vz - Wz,
                  presentationDelay: Xz - vz,
                  loadState: Ls(tz.startTime),
                  longestScript: void 0,
                  totalScriptDuration: void 0,
                  totalStyleAndLayoutDuration: void 0,
                  totalPaintDuration: void 0,
                  totalUnattributedDuration: void 0
                };
              return (zz => {
                const tz = zz.interactionTime,
                  sz = zz.nextPaintTime;
                if (!zz.longAnimationFrameEntries?.length || !tz || !sz) return;
                const Fz = zz.inputDelay,
                  Wz = zz.processingDuration;
                let Xz, Oz, oz = 0,
                  vz = 0,
                  Uz = 0,
                  Kz = 0;
                for (const bz of zz.longAnimationFrameEntries) {
                  vz = vz + bz.startTime + bz.duration - bz.styleAndLayoutStart;
                  for (const zz of bz.scripts) {
                    const sz = zz.startTime + zz.duration;
                    if (sz < tz) continue;
                    const Uz = sz - Math.max(tz, zz.startTime),
                      uz = zz.duration ? Uz / zz.duration * zz.forcedStyleAndLayoutDuration : 0;
                    oz += Uz - uz, vz += uz, Uz > Kz && (Oz = zz.startTime < tz + Fz ? "input-delay" : zz.startTime >= tz + Fz + Wz ? "presentation-delay" : "processing-duration", Xz = zz, Kz = Uz)
                  }
                }
                const uz = zz.longAnimationFrameEntries.at(-1),
                  Nz = uz ? uz.startTime + uz.duration : 0;
                Nz >= tz + Fz + Wz && (Uz = sz - Nz), Xz && Oz && (zz.longestScript = {
                  entry: Xz,
                  subpart: Oz,
                  intersectingDuration: Kz
                }), zz.totalScriptDuration = oz, zz.totalStyleAndLayoutDuration = vz, zz.totalPaintDuration = Uz, zz.totalUnattributedDuration = sz - tz - oz - vz - Uz
              })(bz), Object.assign(zz, {
                attribution: bz
              })
            })(tz))
          }), tz)
      };
    class CF {
      m;
      u;
      l(zz) {
        this.m?.(zz)
      }
    }
    const eF = [2500, 4e3];
    let ZF = 50;
    const GF = [];
    OF(["resource"], (zz => {
      for (const tz of zz) GF.push(tz), GF.length > ZF && GF.shift()
    }));
    const TF = [800, 1800],
      cF = zz => {
        document.prerendering ? uF((() => cF(zz))) : "complete" !== document.readyState ? addEventListener("load", (() => cF(zz)), !0) : setTimeout(zz)
      },
      jF = "load_state",
      AF = "time_to_first_byte";
    var yF = class {
        constructor(zz, tz) {
          this.corePushMeasurement = zz, this.webVitalConfig = tz
        }
        initialize() {
          this.measureCLS(), this.measureFCP(), this.measureINP(), this.measureLCP(), this.measureTTFB()
        }
        measureCLS() {
          var zz;
          ! function(zz) {
            let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const sz = qs(tz = Object.assign({}, tz), ks),
              Fz = new WeakMap;
            sz.t = zz => {
                if (zz?.sources?.length) {
                  const sz = DF(zz.sources),
                    Wz = sz?.node;
                  if (Wz) {
                    const zz = tz.generateTarget?.(Wz) ?? ns(Wz);
                    Fz.set(sz, zz)
                  }
                }
              },
              function(zz) {
                let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const sz = WF();
                bF(UF((() => {
                  let Fz, Wz = XF("CLS", 0);
                  const Xz = qs(tz, ks),
                    Oz = (sz, Oz, oz, vz, Uz) => {
                      Wz = XF("CLS", 0, sz, Oz, oz, vz, Uz), Xz.o = 0, Fz = ps(zz, Wz, wF, tz.reportAllChanges)
                    },
                    oz = function() {
                      let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      Xz.o > Wz.value && (Wz.value = Xz.o, Wz.entries = Xz.i), Fz(zz)
                    },
                    vz = zz => {
                      oz(!0), Oz("soft-navigation", zz.navigationId, zz.interactionId, zz.name, zz.startTime)
                    },
                    Uz = zz => {
                      for (const tz of zz) "soft-navigation" !== tz.entryType ? Xz.l(tz) : vz(tz);
                      oz()
                    },
                    Kz = ["layout-shift"];
                  oF(tz) && Kz.push("soft-navigation");
                  const uz = OF(Kz, Uz);
                  uz && (Fz = ps(zz, Wz, wF, tz.reportAllChanges), sz.onHidden((() => {
                    Uz(uz.takeRecords()), Fz(!0)
                  })), Rs((() => {
                    Oz("back-forward-cache", Wz.navigationId, Wz.navigationInteractionId, Wz.navigationURL, Vs()), fs(Fz)
                  })), setTimeout(Fz))
                })))
              }((tz => {
                zz((zz => {
                  let tz = {};
                  if (zz.entries.length) {
                    const sz = zz.entries.reduce(((zz, tz) => zz.value > tz.value ? zz : tz));
                    if (sz?.sources?.length) {
                      const zz = DF(sz.sources);
                      zz && (tz = {
                        largestShiftTarget: Fz.get(zz),
                        largestShiftTime: sz.startTime,
                        largestShiftValue: sz.value,
                        largestShiftSource: zz,
                        largestShiftEntry: sz,
                        loadState: Ls(sz.startTime)
                      })
                    }
                  }
                  return Object.assign(zz, {
                    attribution: tz
                  })
                })(tz))
              }), tz)
          }((zz => {
            const {
              loadState: tz,
              largestShiftValue: sz,
              largestShiftTime: Fz,
              largestShiftTarget: Wz
            } = zz.attribution, Xz = this.buildInitialValues(zz);
            this.addIfPresent(Xz, "largest_shift_value", sz), this.addIfPresent(Xz, "largest_shift_time", Fz);
            const Oz = this.buildInitialContext(zz);
            this.addIfPresent(Oz, jF, tz), this.addIfPresent(Oz, "largest_shift_target", Wz), this.pushMeasurement(Xz, Oz)
          }), {
            reportAllChanges: null === (zz = this.webVitalConfig) || void 0 === zz ? void 0 : zz.reportAllChanges
          })
        }
        measureFCP() {
          var zz;
          ! function(zz) {
            let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const sz = qs(tz = Object.assign({}, tz), KF);
            oF(tz) && (sz.u = new Map), bF((tz => {
              zz((zz => {
                let tz = {
                  timeToFirstByte: 0,
                  firstByteToFCP: zz.value,
                  loadState: Ls(Vs())
                };
                if ("soft-navigation" !== zz.navigationType) {
                  if (zz.entries.length) {
                    const sz = is(),
                      Fz = zz.entries.at(-1);
                    if (sz) {
                      const Wz = sz.responseStart,
                        Xz = sz.activationStart || 0,
                        Oz = Math.max(0, Wz - Xz);
                      tz = {
                        timeToFirstByte: Oz,
                        firstByteToFCP: zz.value - Oz,
                        loadState: Ls(zz.entries[0].startTime),
                        navigationEntry: sz,
                        fcpEntry: Fz
                      }
                    }
                  }
                } else {
                  const Fz = sz.u?.get(zz.navigationId);
                  Fz && (tz = {
                    timeToFirstByte: 0,
                    firstByteToFCP: zz.value,
                    loadState: "complete",
                    navigationEntry: Fz
                  })
                }
                return Object.assign(zz, {
                  attribution: tz
                })
              })(tz))
            }), tz)
          }((zz => {
            const {
              firstByteToFCP: tz,
              timeToFirstByte: sz,
              loadState: Fz
            } = zz.attribution, Wz = this.buildInitialValues(zz);
            this.addIfPresent(Wz, "first_byte_to_fcp", tz), this.addIfPresent(Wz, AF, sz);
            const Xz = this.buildInitialContext(zz);
            this.addIfPresent(Xz, jF, Fz), this.pushMeasurement(Wz, Xz)
          }), {
            reportAllChanges: null === (zz = this.webVitalConfig) || void 0 === zz ? void 0 : zz.reportAllChanges
          })
        }
        measureINP() {
          var zz;
          IF((zz => {
            var tz;
            const {
              interactionTime: sz,
              presentationDelay: Fz,
              inputDelay: Wz,
              processingDuration: Xz,
              nextPaintTime: Oz,
              loadState: oz,
              interactionTarget: vz,
              interactionType: Uz,
              totalScriptDuration: Kz,
              totalStyleAndLayoutDuration: uz,
              totalPaintDuration: Nz,
              totalUnattributedDuration: bz,
              longestScript: wz
            } = zz.attribution, Dz = this.buildInitialValues(zz);
            this.addIfPresent(Dz, "interaction_time", sz), this.addIfPresent(Dz, "presentation_delay", Fz), this.addIfPresent(Dz, "input_delay", Wz), this.addIfPresent(Dz, "processing_duration", Xz), this.addIfPresent(Dz, "next_paint_time", Oz), this.addNumberIfDefined(Dz, "total_script_duration", Kz), this.addNumberIfDefined(Dz, "total_style_and_layout_duration", uz), this.addNumberIfDefined(Dz, "total_paint_duration", Nz), this.addNumberIfDefined(Dz, "total_unattributed_duration", bz), this.addNumberIfDefined(Dz, "longest_script_intersecting_duration", null === wz || void 0 === wz ? void 0 : wz.intersectingDuration);
            const gz = this.buildInitialContext(zz);
            this.addIfPresent(gz, jF, oz), this.addIfPresent(gz, "interaction_target", vz), this.addIfPresent(gz, "interaction_type", Uz), this.addIfPresent(gz, "longest_script_subpart", null === wz || void 0 === wz ? void 0 : wz.subpart), this.addIfPresent(gz, "longest_script_invoker_type", null === wz || void 0 === wz ? void 0 : wz.entry.invokerType), (null === (tz = this.webVitalConfig) || void 0 === tz ? void 0 : tz.trackAttributionSources) && (this.addIfPresent(gz, "longest_script_invoker", null === wz || void 0 === wz ? void 0 : wz.entry.invoker), this.addIfPresent(gz, "longest_script_source_url", null === wz || void 0 === wz ? void 0 : wz.entry.sourceURL), this.addIfPresent(gz, "longest_script_source_function_name", null === wz || void 0 === wz ? void 0 : wz.entry.sourceFunctionName), this.addIfPresent(gz, "longest_script_source_char_position", void 0 !== (null === wz || void 0 === wz ? void 0 : wz.entry.sourceCharPosition) ? String(wz.entry.sourceCharPosition) : void 0)), this.pushMeasurement(Dz, gz)
          }), {
            reportAllChanges: null === (zz = this.webVitalConfig) || void 0 === zz ? void 0 : zz.reportAllChanges
          })
        }
        measureLCP() {
          var zz;
          ! function(zz) {
            let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            null != (tz = Object.assign({}, tz)).resourceBufferSize && (ZF = tz.resourceBufferSize);
            const sz = qs(tz, CF),
              Fz = new WeakMap;
            oF(tz) && (sz.u = new Map), sz.m = zz => {
                const sz = zz.element;
                if (sz) {
                  const Wz = tz.generateTarget?.(sz) ?? ns(sz);
                  Fz.set(zz, Wz)
                } else zz.id && Fz.set(zz, `#${zz.id}`)
              },
              function(zz) {
                let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  sz = !1;
                const Fz = oF(tz);
                uF((() => {
                  let Wz, Xz = WF(),
                    Oz = XF("LCP");
                  const oz = qs(tz, CF),
                    vz = (Fz, oz, vz, Uz, Kz) => {
                      Oz = XF("LCP", -1, Fz, oz, vz, Uz, Kz), Wz = ps(zz, Oz, eF, tz.reportAllChanges), sz = !1, "soft-navigation" === Fz && (Xz = WF(!0))
                    },
                    Uz = zz => {
                      oz.u && zz.navigationId && vF(oz.u, zz), sz || Wz(!0), vz("soft-navigation", zz.navigationId, zz.interactionId, zz.name, zz.startTime);
                      const tz = zz.getLargestInteractionContentfulPaint?.();
                      tz && Kz([tz])
                    },
                    Kz = zz => {
                      tz.reportAllChanges || Fz || (zz = zz.slice(-1));
                      for (const tz of zz) {
                        if (!tz) continue;
                        if ("soft-navigation" === tz.entryType) {
                          Uz(tz);
                          continue
                        }
                        let zz = 0,
                          sz = [],
                          Fz = tz.startTime;
                        if ("largest-contentful-paint" === tz.entryType) zz = Math.max(tz.startTime - Es(), 0), oz.l(tz), sz = [tz];
                        else if ("interaction-contentful-paint" === tz.entryType) {
                          const Wz = tz;
                          if (!Oz.navigationId) continue;
                          if ("interactionId" in Wz && Wz.interactionId != Oz.navigationInteractionId) continue;
                          Fz = Wz.largestContentfulPaint?.renderTime || 0, zz = Math.max(Fz - tz.startTime, 0), Wz.largestContentfulPaint && (oz.l(Wz.largestContentfulPaint), sz = [Wz.largestContentfulPaint])
                        }
                        Fz < Xz.firstHiddenTime && (Oz.value = zz, Oz.entries = sz, Wz())
                      }
                    },
                    uz = ["largest-contentful-paint"];
                  Fz && uz.push("interaction-contentful-paint", "soft-navigation");
                  const Nz = OF(uz, Kz);
                  if (Nz) {
                    Wz = ps(zz, Oz, eF, tz.reportAllChanges);
                    const Xz = ["keydown", "click", "visibilitychange"],
                      oz = zz => {
                        if (zz.isTrusted && !sz) {
                          const zz = Oz.id;
                          mF((() => {
                            if (!sz) {
                              if (!Fz) {
                                Nz.disconnect();
                                for (const zz of Xz) removeEventListener(zz, oz, {
                                  capture: !0
                                })
                              }
                              zz === Oz.id && (sz = !0, Wz(!0))
                            }
                          }))
                        }
                      };
                    for (const zz of Xz) addEventListener(zz, oz, {
                      capture: !0
                    });
                    Rs((Fz => {
                      vz("back-forward-cache", Oz.navigationId, Oz.navigationInteractionId, Oz.navigationURL, Vs()), Wz = ps(zz, Oz, eF, tz.reportAllChanges), fs((() => {
                        Oz.value = performance.now() - Fz.timeStamp, sz = !0, Wz(!0)
                      }))
                    }))
                  }
                }))
              }((tz => {
                zz((zz => {
                  let tz = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadDuration: 0,
                    elementRenderDelay: zz.value
                  };
                  if (zz.entries.length) {
                    const Wz = zz.entries.at(-1),
                      Xz = zz => zz.name === Wz.url && (zz.requestStart || zz.startTime) <= Wz.startTime,
                      Oz = Wz.url && (GF.findLast(Xz) || performance.getEntriesByType("resource").findLast(Xz));
                    let oz;
                    tz.target = Fz.get(Wz), tz.lcpEntry = Wz, Wz.url && (tz.url = Wz.url), Oz && (tz.lcpResourceEntry = Oz);
                    let vz = 0,
                      Uz = 0;
                    if ("soft-navigation" !== zz.navigationType ? (oz = is(), vz = oz?.activationStart ?? 0, Uz = oz?.responseStart ?? 0) : (vz = zz.navigationStartTime || 0, oz = sz.u?.get(zz.navigationId)), oz) {
                      const sz = Math.max(0, Uz - vz),
                        Fz = Math.max(sz, Oz ? (Oz.requestStart || Oz.startTime) - vz : 0),
                        Wz = Math.min(zz.value, Math.max(Fz, Oz ? Oz.responseEnd - vz : 0));
                      tz = {
                        ...tz,
                        timeToFirstByte: sz,
                        resourceLoadDelay: Fz - sz,
                        resourceLoadDuration: Wz - Fz,
                        elementRenderDelay: zz.value - Wz,
                        navigationEntry: oz
                      }
                    }
                  }
                  return Object.assign(zz, {
                    attribution: tz
                  })
                })(tz))
              }), tz)
          }((zz => {
            var tz;
            const {
              elementRenderDelay: sz,
              resourceLoadDelay: Fz,
              resourceLoadDuration: Wz,
              timeToFirstByte: Xz,
              target: Oz,
              url: oz,
              lcpResourceEntry: vz
            } = zz.attribution, Uz = this.buildInitialValues(zz);
            this.addIfPresent(Uz, "element_render_delay", sz), this.addIfPresent(Uz, "resource_load_delay", Fz), this.addIfPresent(Uz, "resource_load_duration", Wz), this.addIfPresent(Uz, AF, Xz);
            const Kz = this.buildInitialContext(zz);
            this.addIfPresent(Kz, "element", Oz), (null === (tz = this.webVitalConfig) || void 0 === tz ? void 0 : tz.trackAttributionSources) && (this.addIfPresent(Kz, "resource_url", oz), this.addIfPresent(Kz, "resource_delivery_type", null === vz || void 0 === vz ? void 0 : vz.deliveryType), this.addIfPresent(Kz, "resource_initiator_type", null === vz || void 0 === vz ? void 0 : vz.initiatorType)), this.pushMeasurement(Uz, Kz)
          }), {
            reportAllChanges: null === (zz = this.webVitalConfig) || void 0 === zz ? void 0 : zz.reportAllChanges
          })
        }
        measureTTFB() {
          var zz;
          ! function(zz) {
            ! function(zz) {
              let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const sz = oF(tz);
              let Fz = XF("TTFB"),
                Wz = ps(zz, Fz, TF, tz.reportAllChanges);
              cF((() => {
                const Xz = is();
                if (Xz) {
                  const Oz = Xz.responseStart;
                  Fz.value = Math.max(Oz - Es(), 0), Fz.entries = [Xz], Wz(!0), Rs((() => {
                    Fz = XF("TTFB", 0, "back-forward-cache", Fz.navigationId, Fz.navigationInteractionId, Fz.navigationURL, Vs()), Wz = ps(zz, Fz, TF, tz.reportAllChanges), Wz(!0)
                  })), sz && OF(["soft-navigation"], (sz => {
                    sz.forEach((sz => {
                      sz.navigationId && (Fz = XF("TTFB", 0, "soft-navigation", sz.navigationId, sz.interactionId, sz.name, sz.startTime), Fz.entries = [sz], Wz = ps(zz, Fz, TF, tz.reportAllChanges), Wz(!0))
                    }))
                  }), tz)
                }
              }))
            }((tz => {
              zz((zz => {
                const tz = zz.entries[0];
                let sz = {
                  waitingDuration: 0,
                  cacheDuration: 0,
                  dnsDuration: 0,
                  connectionDuration: 0,
                  requestDuration: 0,
                  navigationEntry: tz
                };
                if (zz.entries.length && tz instanceof PerformanceNavigationTiming) {
                  const Fz = tz.activationStart || 0,
                    Wz = Math.max((tz.workerStart || tz.fetchStart || 0) - Fz, 0),
                    Xz = Math.max(tz.domainLookupStart - Fz, 0),
                    Oz = Math.max(tz.connectStart - Fz, 0),
                    oz = Math.max(tz.connectEnd - Fz, 0);
                  sz = {
                    waitingDuration: Wz,
                    cacheDuration: Xz - Wz,
                    dnsDuration: Oz - Xz,
                    connectionDuration: oz - Oz,
                    requestDuration: zz.value - oz,
                    navigationEntry: tz
                  }
                }
                return Object.assign(zz, {
                  attribution: sz
                })
              })(tz))
            }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }((zz => {
            const {
              dnsDuration: tz,
              connectionDuration: sz,
              requestDuration: Fz,
              waitingDuration: Wz,
              cacheDuration: Xz
            } = zz.attribution, Oz = this.buildInitialValues(zz);
            this.addIfPresent(Oz, "dns_duration", tz), this.addIfPresent(Oz, "connection_duration", sz), this.addIfPresent(Oz, "request_duration", Fz), this.addIfPresent(Oz, "waiting_duration", Wz), this.addIfPresent(Oz, "cache_duration", Xz);
            const oz = this.buildInitialContext(zz);
            this.pushMeasurement(Oz, oz)
          }), {
            reportAllChanges: null === (zz = this.webVitalConfig) || void 0 === zz ? void 0 : zz.reportAllChanges
          })
        }
        buildInitialValues(zz) {
          return {
            [zz.name.toLowerCase()]: zz.value,
            delta: zz.delta
          }
        }
        buildInitialContext(zz) {
          var tz;
          const sz = null !== (tz = zt("com.grafana.faro.lastNavigationId", pz)) && void 0 !== tz ? tz : hs;
          return {
            id: zz.id,
            rating: zz.rating,
            navigation_type: zz.navigationType,
            navigation_entry_id: sz
          }
        }
        pushMeasurement(zz, tz) {
          this.corePushMeasurement({
            type: "web-vitals",
            values: zz
          }, {
            context: tz
          })
        }
        addIfPresent(zz, tz, sz) {
          sz && (zz[tz] = sz)
        }
        addNumberIfDefined(zz, tz, sz) {
          void 0 !== sz && (zz[tz] = sz)
        }
      },
      MF = class extends ss {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-web-vitals", this.version = Fs
        }
        initialize() {
          this.logDebug("Initializing"), new yF(this.api.pushMeasurement, this.config.webVitalsInstrumentation).initialize()
        }
      };
    const dF = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;

    function hF() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      for (const tz of zz)
        if ("traceparent" === tz.name) {
          if (!dF.test(tz.description)) continue;
          const [, zz, sz] = tz.description.split("-");
          if (null != zz && null != sz) return {
            traceId: zz,
            spanId: sz
          };
          break
        }
    }

    function QF(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        wallNow: Date.now(),
        monoNow: performance.now()
      };
      const {
        wallNow: sz,
        monoNow: Fz
      } = tz;
      return Math.min(sz, sz - (Fz - zz))
    }

    function kF(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      for (const [sz, Fz] of Object.entries(tz)) {
        const tz = zz[sz];
        return null != tz && (Gz(Fz) ? Fz.includes(tz) : tz === Fz)
      }
      return !0
    }

    function iF(zz) {
      const {
        connectEnd: tz,
        connectStart: sz,
        decodedBodySize: Fz,
        domainLookupEnd: Wz,
        domainLookupStart: Xz,
        duration: Oz,
        encodedBodySize: oz,
        fetchStart: vz,
        initiatorType: Uz,
        name: Kz,
        nextHopProtocol: uz,
        redirectEnd: Nz,
        redirectStart: bz,
        renderBlockingStatus: wz,
        requestStart: Dz,
        responseEnd: gz,
        responseStart: Hz,
        responseStatus: Bz,
        secureConnectionStart: Pz,
        transferSize: rz,
        workerStart: Yz
      } = zz;
      return {
        name: Kz,
        httpHost: lF(Kz),
        duration: nF(Oz),
        tcpHandshakeTime: nF(tz - sz),
        dnsLookupTime: nF(Wz - Xz),
        tlsNegotiationTime: nF(tz - Pz),
        responseStatus: nF(Bz),
        redirectTime: nF(Nz - bz),
        requestTime: nF(Hz - Dz),
        responseTime: nF(gz - Hz),
        fetchTime: nF(gz - vz),
        serviceWorkerTime: nF(Yz > 0 ? vz - Yz : 0),
        decodedBodySize: nF(Fz),
        encodedBodySize: nF(oz),
        cacheHitStatus: function() {
          let zz = "fullLoad";
          0 === rz ? Fz > 0 && (zz = "cache") : null != Bz ? 304 === Bz && (zz = "conditionalFetch") : oz > 0 && rz < oz && (zz = "conditionalFetch");
          return zz
        }(),
        renderBlockingStatus: nF(wz),
        protocol: uz,
        initiatorType: Uz,
        visibilityState: document.visibilityState,
        ttfb: nF(Hz - Dz),
        transferSize: nF(rz)
      }
    }

    function LF(zz) {
      const {
        activationStart: tz,
        domComplete: sz,
        domContentLoadedEventEnd: Fz,
        domContentLoadedEventStart: Wz,
        domInteractive: Xz,
        fetchStart: Oz,
        loadEventEnd: oz,
        loadEventStart: vz,
        responseStart: Uz,
        type: Kz
      } = zz, uz = function() {
        var zz;
        return null != (null === (zz = performance.timing) || void 0 === zz ? void 0 : zz.domLoading) ? performance.timing.domLoading - performance.timeOrigin : null
      }();
      return Kt(Kt({}, iF(zz)), {}, {
        pageLoadTime: nF(sz - Oz),
        documentParsingTime: nF(uz ? Xz - uz : null),
        domProcessingTime: nF(sz - Xz),
        domContentLoadHandlerTime: nF(Fz - Wz),
        onLoadTime: nF(oz - vz),
        ttfb: nF(Math.max(Uz - (null !== tz && void 0 !== tz ? tz : 0), 0)),
        type: Kz
      })
    }

    function lF(zz) {
      try {
        return new URL(zz).host || hs
      } catch (tz) {
        return hs
      }
    }

    function nF(zz) {
      return null == zz ? hs : "number" === typeof zz ? Math.round(zz > 0 ? zz : 0).toString() : zz.toString()
    }
    const aF = {
      initiatorType: ["xmlhttprequest", "fetch"]
    };

    function qF(zz, tz, sz, Fz, Wz, Xz, Oz) {
      try {
        var oz = zz[Xz](Oz),
          vz = oz.value
      } catch (zz) {
        return void sz(zz)
      }
      oz.done ? tz(vz) : Promise.resolve(vz).then(Fz, Wz)
    }

    function SF(zz) {
      return function() {
        var tz = this,
          sz = arguments;
        return new Promise((function(Fz, Wz) {
          var Xz = zz.apply(tz, sz);

          function Oz(zz) {
            qF(Xz, Fz, Wz, Oz, oz, "next", zz)
          }

          function oz(zz) {
            qF(Xz, Fz, Wz, Oz, oz, "throw", zz)
          }
          Oz(void 0)
        }))
      }
    }
    const VF = new Ps;
    var RF = class extends ss {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-performance", this.version = Fs
      }
      initialize() {
        var zz = this;
        if (!("PerformanceObserver" in window)) return void this.logDebug("performance observer not supported. Disable performance instrumentation.");
        let tz = !1;
        const sz = () => {
          ! function(zz) {
            if ("complete" === document.readyState) zz();
            else {
              const tz = () => {
                "complete" === document.readyState && (zz(), document.removeEventListener("readystatechange", tz))
              };
              document.addEventListener("readystatechange", tz)
            }
          }(SF((function*() {
            if (tz) return;
            const sz = zz.api.pushEvent,
              {
                faroNavigationId: Fz
              } = yield function(zz) {
                let tz;
                const sz = new Promise((zz => {
                  tz = zz
                }));
                return new PerformanceObserver((sz => {
                  var Fz;
                  const [Wz] = sz.getEntries();
                  if (null == Wz || Vz(Wz.name)) return;
                  const Xz = Wz.toJSON();
                  let Oz = hF(null === Xz || void 0 === Xz ? void 0 : Xz.serverTiming);
                  const oz = null !== (Fz = zt("com.grafana.faro.lastNavigationId", pz)) && void 0 !== Fz ? Fz : hs,
                    vz = Kt(Kt({}, LF(Xz)), {}, {
                      faroNavigationId: Ht(),
                      faroPreviousNavigationId: oz
                    });
                  tt("com.grafana.faro.lastNavigationId", vz.faroNavigationId, pz), zz("faro.performance.navigation", vz, void 0, {
                    spanContext: Oz,
                    timestampOverwriteMs: QF(Xz.startTime)
                  }), tz(vz)
                })).observe({
                  type: "navigation",
                  buffered: !0
                }), sz
              }(sz);
            tz || null == Fz || function(zz, tz, sz, Fz) {
              const Wz = Fz.trackResources;
              new PerformanceObserver((Fz => {
                const Xz = Fz.getEntries(),
                  Oz = {
                    wallNow: Date.now(),
                    monoNow: performance.now()
                  };
                for (const oz of Xz) {
                  if (Vz(oz.name)) continue;
                  null === sz || void 0 === sz || sz.notify({
                    type: "resource"
                  });
                  const Fz = oz.toJSON();
                  let Xz = hF(null === Fz || void 0 === Fz ? void 0 : Fz.serverTiming);
                  (null == Wz && kF(Fz, aF) || Wz) && tz("faro.performance.resource", Kt(Kt({}, iF(Fz)), {}, {
                    faroNavigationId: zz,
                    faroResourceId: Ht()
                  }), void 0, {
                    spanContext: Xz,
                    timestampOverwriteMs: QF(Fz.startTime, Oz)
                  })
                }
              })).observe({
                type: "resource",
                buffered: !0
              })
            }(Fz, sz, VF, zz.config)
          })))
        };
        this.cancelInitialization = () => {
          tz = !0, document.removeEventListener("prerenderingchange", sz)
        }, document.prerendering ? document.addEventListener("prerenderingchange", sz, {
          once: !0
        }) : sz()
      }
      destroy() {
        var zz;
        null === (zz = this.cancelInitialization) || void 0 === zz || zz.call(this), this.cancelInitialization = void 0
      }
    };
    const pF = "data-faro-user-action-name",
      fF = pF.replace(/-name$/, "-timeout"),
      EF = 1e3;

    function zW(zz) {
      return `data-${(zz.startsWith("data-")?zz.slice(5):zz).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
    }

    function tW(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
        sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : lt;
      if (void 0 === zz) return tz;
      let Fz = NaN;
      try {
        Fz = "string" === typeof zz && "" === zz.trim() ? NaN : Number(zz)
      } catch (Wz) {}
      return !Number.isFinite(Fz) || Fz <= 0 ? (sz(`initialActivityTimeout must be a finite number greater than zero; using ${tz} ms`), tz) : Fz > 1e3 ? (sz(`initialActivityTimeout cannot exceed ${EF} ms; clamping to the maximum`), EF) : Fz
    }

    function sW(zz, tz, sz) {
      return void 0 !== zz && window.clearTimeout(zz), window.setTimeout((() => {
        tz()
      }), sz)
    }

    function FW(zz) {
      return zz.type === Bs
    }
    let WW, XW;

    function OW() {
      return WW || (WW = new Ps), XW || (XW = new MutationObserver(((zz, tz) => {
        WW.notify({
          type: "dom-mutation"
        })
      })), XW.observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0
      })), WW
    }
    const oW = "fetch",
      vW = "xhr";
    let UW, KW, uW, NW, bW = !1;

    function wW() {
      if (UW) return UW;

      function zz(zz) {
        UW.notify({
          type: Hs,
          request: zz
        })
      }

      function tz(zz) {
        UW.notify({
          type: Bs,
          request: zz
        })
      }
      return UW = new Ps, bW || (! function(zz) {
        let {
          onRequestEnd: tz,
          onRequestStart: sz
        } = zz;
        uW || (uW = window.fetch);
        window.fetch = function() {
          var zz, Fz;
          const Wz = null !== (zz = Rz(arguments[0])) && void 0 !== zz ? zz : "",
            Xz = Vz(Wz),
            Oz = (null !== (Fz = arguments[1]) && void 0 !== Fz ? Fz : {}).method,
            oz = Ht();
          return Xz || sz({
            url: Wz,
            method: Oz,
            requestId: oz,
            apiType: oW
          }), uW.apply(this, arguments).then((zz => (Xz || tz({
            url: Wz,
            method: Oz,
            requestId: oz,
            apiType: oW
          }), zz))).catch((zz => {
            throw Xz || tz({
              url: Wz,
              method: Oz,
              requestId: oz,
              apiType: oW
            }), zz
          }))
        }
      }({
        onRequestStart: zz,
        onRequestEnd: tz
      }), function(zz) {
        let {
          onRequestStart: tz,
          onRequestEnd: sz
        } = zz;
        KW || (KW = XMLHttpRequest.prototype.open);
        XMLHttpRequest.prototype.open = function() {
          const zz = arguments[1],
            Fz = Vz(zz),
            Wz = arguments[0],
            Xz = Ht();
          this.addEventListener("loadstart", (function() {
            Fz || tz({
              url: zz,
              method: Wz,
              requestId: Xz,
              apiType: vW
            })
          })), this.addEventListener("load", (function() {
            Fz || sz({
              url: zz,
              method: Wz,
              requestId: Xz,
              apiType: vW
            })
          })), this.addEventListener("error", (function() {
            Fz || sz({
              url: zz,
              method: Wz,
              requestId: Xz,
              apiType: vW
            })
          })), this.addEventListener("abort", (function() {
            Fz || sz({
              url: zz,
              method: Wz,
              requestId: Xz,
              apiType: vW
            })
          })), KW.apply(this, arguments)
        }
      }({
        onRequestStart: zz,
        onRequestEnd: tz
      }), bW = !0), UW
    }
    let DW, gW = !1;
    let HW = function(zz) {
      return zz[zz.Started = 0] = "Started", zz[zz.Halted = 1] = "Halted", zz[zz.Cancelled = 2] = "Cancelled", zz[zz.Ended = 3] = "Ended", zz
    }({});
    var BW = class {
      constructor(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        this.userAction = zz, this.logDebug = tz, this.initialActivityTimeout = sz, this.http = wW(), this.dom = OW(), this.perf = (NW || (NW = new Ps), gW || (DW = VF.subscribe((zz => {
          "resource" === zz.type && NW.notify({
            type: "resource-entry"
          })
        })), gW = !0), NW), this.isValid = !1, this.runningRequests = new Map
      }
      attach() {
        this.allMonitorsSub = (new Ps).merge(this.http, this.dom, this.perf).takeWhile((() => [HW.Started, HW.Halted].includes(this.userAction.getState()))).filter((zz => !!(this.userAction.getState() !== HW.Halted || FW(zz) && this.runningRequests.has(zz.request.requestId)))).subscribe((zz => {
          (function(zz) {
            return zz.type === Hs
          })(zz) && this.runningRequests.set(zz.request.requestId, zz.request), FW(zz) && this.runningRequests.delete(zz.request.requestId), FW(zz) ? this.userAction.getState() === HW.Halted && 0 === this.runningRequests.size && this.endAction() : (this.isValid || (this.isValid = !0, this.clearTimer(this.startupTid)), this.scheduleFollowUp())
        })), this.stateSub = this.userAction.filter((zz => [HW.Ended, HW.Cancelled].includes(zz))).first().subscribe((() => this.cleanup())), this.startupTid = sW(this.startupTid, (() => {
          this.logDebug("User action not sent; no DOM, resource, or HTTP activity:", this.userAction.name), this.cancelAction()
        }), this.initialActivityTimeout)
      }
      scheduleFollowUp() {
        this.clearTimer(this.followUpTid), this.followUpTid = window.setTimeout((() => {
          this.userAction.getState() === HW.Started && this.runningRequests.size > 0 ? this.haltAction() : this.isValid ? this.endAction() : this.cancelAction()
        }), 100)
      }
      haltAction() {
        this.userAction.getState() === HW.Started && (this.userAction.halt(), this.startHaltTimeout())
      }
      startHaltTimeout() {
        this.clearTimer(this.haltTid), this.haltTid = sW(this.haltTid, (() => {
          this.userAction.getState() === HW.Halted && this.endAction()
        }), 1e4)
      }
      endAction() {
        this.userAction.end(), this.cleanup()
      }
      cancelAction() {
        this.userAction.cancel(), this.cleanup()
      }
      cleanup() {
        var zz, tz;
        this.clearTimer(this.startupTid), this.clearTimer(this.followUpTid), this.clearTimer(this.haltTid), null === (zz = this.allMonitorsSub) || void 0 === zz || zz.unsubscribe(), null === (tz = this.stateSub) || void 0 === tz || tz.unsubscribe(), this.allMonitorsSub = void 0, this.stateSub = void 0, this.runningRequests.clear()
      }
      clearTimer(zz) {
        void 0 !== zz && window.clearTimeout(zz)
      }
    };

    function PW(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lt;
      var sz;
      const {
        api: Fz,
        config: Wz,
        internalLogger: Xz
      } = zz, Oz = tW(null === (sz = Wz.userActionsInstrumentation) || void 0 === sz ? void 0 : sz.initialActivityTimeout, 100, tz);
      return {
        processUserEvent: function(zz) {
          var tz, sz;
          const Xz = null !== (tz = null === (sz = Wz.userActionsInstrumentation) || void 0 === sz ? void 0 : sz.dataAttributeName) && void 0 !== tz ? tz : pF,
            Oz = zz.target;
          if (!(Oz instanceof Element)) return;
          const oz = function(zz, tz) {
              let sz = zz;
              for (; sz;) {
                if (sz.hasAttribute(tz)) return sz;
                sz = sz.parentElement
              }
              return null
            }(Oz, zW(Xz)),
            vz = function(zz, tz) {
              if (!zz) return;
              const sz = function(zz) {
                  return zW(zz).slice(5).replace(/-(.)/g, ((zz, tz) => tz.toUpperCase()))
                }(tz),
                Fz = zz.dataset;
              for (const Wz in Fz)
                if (Wz === sz) return Fz[Wz]
            }(oz, Xz);
          if (!oz || !vz) return;
          const Uz = function(zz, tz) {
            const sz = zz.getAttribute(function(zz) {
              const tz = zW(zz);
              return tz.endsWith("-name") ? `${tz.slice(0,-5)}-timeout` : `${tz}-timeout`
            }(tz));
            return null === sz ? void 0 : Number(sz)
          }(oz, Xz);
          Fz.startUserAction(vz, {}, {
            triggerName: zz.type,
            initialActivityTimeout: Uz
          })
        },
        processUserActionStarted: function(zz, sz) {
          const Fz = zz,
            Wz = tW(sz, Oz, tz);
          new BW(Fz, Xz.debug, Wz).attach()
        }
      }
    }
    const rW = "user_action_start",
      YW = {
        Normal: "normal",
        Critical: "critical"
      };
    var xW = class {
        constructor() {
          this.buffer = []
        }
        addItem(zz) {
          this.buffer.push(zz)
        }
        flushBuffer(zz) {
          if (Zz(zz))
            for (const tz of this.buffer) zz(tz);
          this.buffer.length = 0
        }
        size() {
          return this.buffer.length
        }
      },
      mW = class extends Ps {
        constructor(zz) {
          let {
            name: tz,
            parentId: sz,
            trigger: Fz,
            transports: Wz,
            attributes: Xz,
            trackUserActionsExcludeItem: Oz,
            importance: oz = YW.Normal,
            pushEvent: vz
          } = zz;
          super(), this.name = tz, this.attributes = Xz, this.id = Ht(), this.trigger = Fz, this.parentId = null !== sz && void 0 !== sz ? sz : this.id, this.trackUserActionsExcludeItem = Oz, this.importance = oz, this._pushEvent = vz, this._itemBuffer = new xW, this._transports = Wz, this._state = 0, this._start()
        }
        addItem(zz) {
          return 0 === this._state && (this._itemBuffer.addItem(zz), !0)
        }
        _start() {
          this._state = 0, 0 === this._state && (this.startTime = Nt(), this._startTimeMono = bt())
        }
        halt() {
          0 === this._state && (this._state = 1, this.notify(this._state))
        }
        cancel() {
          0 === this._state && this._itemBuffer.flushBuffer((zz => {
            this._transports.execute(zz)
          })), this._state = 2, this.notify(this._state)
        }
        end() {
          if (2 === this._state) return;
          const zz = Nt(),
            tz = bt() - this._startTimeMono;
          this._state = 3, this._itemBuffer.flushBuffer((zz => {
            if (function(zz, tz) {
                return (null === tz || void 0 === tz ? void 0 : tz(zz)) || "measurement" === zz.type && "web-vitals" === zz.payload.type
              }(zz, this.trackUserActionsExcludeItem)) return void this._transports.execute(zz);
            const tz = Et(Et({}, zz), {}, {
              payload: Et(Et({}, zz.payload), {}, {
                action: {
                  parentId: this.id,
                  name: this.name
                }
              })
            });
            this._transports.execute(tz)
          })), this._state = 3, this.notify(this._state), this._pushEvent("faro.user.action", Et({
            userActionName: this.name,
            userActionStartTime: this.startTime.toString(),
            userActionEndTime: zz.toString(),
            userActionDuration: tz.toString(),
            userActionTrigger: this.trigger,
            userActionImportance: this.importance
          }, Mt(this.attributes)), void 0, {
            timestampOverwriteMs: this.startTime,
            customPayloadTransformer: zz => (zz.action = {
              id: this.id,
              name: this.name
            }, zz)
          })
        }
        getState() {
          return this._state
        }
      };
    const JW = new Ps;

    function IW(zz, tz) {
      return !!zz && (0 === (null === zz || void 0 === zz ? void 0 : zz.getState()) && (zz.addItem(tz), !0))
    }
    var CW = class extends ss {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-user-action", this.version = Fs
        }
        initialize() {
          const {
            processUserEvent: zz,
            processUserActionStarted: tz
          } = PW(Dz, (zz => this.logWarn(zz)));
          this._processUserEvent = zz, this._processKeydown = tz => {
            [" ", "Enter"].includes(tz.key) && zz(tz)
          }, window.addEventListener("pointerdown", this._processUserEvent), window.addEventListener("keydown", this._processKeydown), this._userActionSub = JW.subscribe((zz => {
            let {
              type: sz,
              userAction: Fz,
              initialActivityTimeout: Wz
            } = zz;
            "user_action_start" === sz && tz(Fz, Wz)
          }))
        }
        destroy() {
          var zz;
          this._processUserEvent && window.removeEventListener("pointerdown", this._processUserEvent), this._processKeydown && window.removeEventListener("keydown", this._processKeydown), null === (zz = this._userActionSub) || void 0 === zz || zz.unsubscribe()
        }
      },
      eW = class extends ss {
        constructor() {
          super(), this.name = "@grafana/faro-web-sdk:instrumentation-csp", this.version = Fs, this.boundSecuritypolicyviolationHandler = this.securitypolicyviolationHandler.bind(this)
        }
        initialize() {
          document.addEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        destroy() {
          document.removeEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        securitypolicyviolationHandler(zz) {
          const tz = {
            blockedURI: zz.blockedURI,
            columnNumber: zz.columnNumber,
            disposition: zz.disposition,
            documentURI: zz.documentURI,
            effectiveDirective: zz.effectiveDirective,
            lineNumber: zz.lineNumber,
            originalPolicy: zz.originalPolicy,
            referrer: zz.referrer,
            sample: zz.sample,
            sourceFile: zz.sourceFile,
            statusCode: zz.statusCode,
            violatedDirective: zz.violatedDirective
          };
          this.api.pushEvent("securitypolicyviolation", Mt(tz))
        }
      };
    var ZW = class extends Ps {
      constructor(zz, tz) {
        var sz, Fz, Wz, Xz;
        super(), this._tracking = !1, this.eventsObservable = zz, this._options = {
          inactivityMs: null !== (sz = null === tz || void 0 === tz ? void 0 : tz.inactivityMs) && void 0 !== sz ? sz : 100,
          drainTimeoutMs: null !== (Fz = null === tz || void 0 === tz ? void 0 : tz.drainTimeoutMs) && void 0 !== Fz ? Fz : 1e4,
          isOperationStart: null !== (Wz = null === tz || void 0 === tz ? void 0 : tz.isOperationStart) && void 0 !== Wz ? Wz : () => {},
          isOperationEnd: null !== (Xz = null === tz || void 0 === tz ? void 0 : tz.isOperationEnd) && void 0 !== Xz ? Xz : () => {}
        }, this._initialize()
      }
      _initialize() {
        this.eventsObservable.filter((() => this._tracking)).subscribe((zz => {
          var tz;
          this._lastEventTime = bt(), null === (tz = this._currentEvents) || void 0 === tz || tz.push(zz);
          const sz = this._options.isOperationStart(zz);
          var Fz;
          sz && (null === (Fz = this._activeOperations) || void 0 === Fz || Fz.set(sz, !0));
          const Wz = this._options.isOperationEnd(zz);
          var Xz;
          Wz && (null === (Xz = this._activeOperations) || void 0 === Xz || Xz.delete(Wz));
          this._scheduleInactivityCheck()
        }))
      }
      startTracking() {
        this._tracking || (this._tracking = !0, this._startTime = bt(), this._lastEventTime = this._startTime, this.notify({
          message: "tracking-started"
        }), this._currentEvents = [], this._activeOperations = new Map, this._scheduleInactivityCheck())
      }
      stopTracking() {
        let zz;
        this._tracking = !1, this._clearTimer(this._inactivityTid), this._clearTimer(this._drainTid), zz = this.hasActiveOperations() ? bt() - this._startTime : this._lastEventTime ? this._lastEventTime - this._startTime : 0, this.notify({
          message: "tracking-ended",
          events: this._currentEvents,
          duration: zz
        })
      }
      _scheduleInactivityCheck() {
        this._inactivityTid = GW(this._inactivityTid, (() => {
          this.hasActiveOperations() ? this._startDrainTimeout() : this.stopTracking()
        }), this._options.inactivityMs)
      }
      _startDrainTimeout() {
        this._drainTid = GW(this._drainTid, (() => {
          this.stopTracking()
        }), this._options.drainTimeoutMs)
      }
      hasActiveOperations() {
        return !!this._activeOperations && this._activeOperations.size > 0
      }
      _clearTimer(zz) {
        zz && clearTimeout(zz)
      }
    };

    function GW(zz, tz, sz) {
      return zz && clearTimeout(zz), zz = setTimeout((() => {
        tz()
      }), sz)
    }
    let TW;
    const cW = new Set,
      jW = new Map;
    let AW, yW, MW, dW, hW, QW, kW, iW, LW = !1;
    var lW = class extends ss {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-navigation", this.version = Fs
      }
      initialize() {
        const zz = wW(),
          tz = OW(),
          sz = function() {
            function zz(zz, tz) {
              const sz = null !== tz && void 0 !== tz ? tz : location.href;
              sz !== yW && (AW.notify({
                type: "url-change",
                from: yW,
                to: sz,
                trigger: zz
              }), yW = sz)
            }
            if (AW || (AW = new Ps, yW = location.href), !LW)
              if ("navigation" in window && "NavigateEvent" in window) {
                kW = tz => {
                  try {
                    const sz = null === tz || void 0 === tz ? void 0 : tz.destination;
                    (null === sz || void 0 === sz ? void 0 : sz.sameDocument) && "string" === typeof sz.url && zz("navigate", sz.url)
                  } catch (sz) {}
                }, window.navigation.addEventListener("navigate", kW);
                const tz = window.NavigateEvent;
                tz && tz.prototype && "function" === typeof tz.prototype.intercept && (iW || (iW = tz.prototype.intercept), tz.prototype.intercept = function(tz) {
                  try {
                    const tz = !!(null === this || void 0 === this ? void 0 : this.canIntercept),
                      sz = null === this || void 0 === this ? void 0 : this.destination;
                    tz && sz && !1 === sz.sameDocument && "string" === typeof sz.url && zz("navigate-intercept", sz.url)
                  } catch (sz) {}
                  return iW.call(this, tz)
                }), LW = !0
              } else MW || (MW = window.history.pushState), window.history.pushState = function() {
                for (var tz = arguments.length, sz = new Array(tz), Fz = 0; Fz < tz; Fz++) sz[Fz] = arguments[Fz];
                const Wz = MW.apply(window.history, sz);
                return zz("pushState"), Wz
              }, dW || (dW = window.history.replaceState), window.history.replaceState = function() {
                for (var tz = arguments.length, sz = new Array(tz), Fz = 0; Fz < tz; Fz++) sz[Fz] = arguments[Fz];
                const Wz = dW.apply(window.history, sz);
                return zz("replaceState"), Wz
              }, hW = () => zz("popstate"), QW = () => zz("hashchange"), window.addEventListener("popstate", hW), window.addEventListener("hashchange", QW), LW = !0;
            return AW
          }(),
          Fz = (Wz = ["pointerdown", "keydown"], TW || (TW = new Ps), Wz.forEach((zz => {
            if (!cW.has(zz)) {
              const tz = () => {
                TW.notify({
                  type: "interaction",
                  name: zz
                })
              };
              window.addEventListener(zz, tz), cW.add(zz), jW.set(zz, tz)
            }
          })), TW);
        var Wz;
        const Xz = new ZW((new Ps).merge(zz, tz, sz), {
          inactivityMs: 100,
          drainTimeoutMs: 1e4,
          isOperationStart: zz => function(zz) {
            return zz.type === Hs
          }(zz) ? zz.request.requestId : void 0,
          isOperationEnd: zz => function(zz) {
            return zz.type === Bs
          }(zz) ? zz.request.requestId : void 0
        });
        Xz.filter((zz => "tracking-ended" === zz.message)).subscribe((zz => {
          var tz, sz;
          if ((null === (tz = zz.events) || void 0 === tz ? void 0 : tz.some((zz => "url-change" === zz.type))) && (null === (sz = zz.events) || void 0 === sz ? void 0 : sz.some((zz => "dom-mutation" === zz.type)))) {
            var Fz;
            const tz = null === (Fz = zz.events) || void 0 === Fz ? void 0 : Fz.find((zz => "url-change" === zz.type));
            Dz.api.pushEvent("faro.navigation", {
              fromUrl: null === tz || void 0 === tz ? void 0 : tz.from,
              toUrl: null === tz || void 0 === tz ? void 0 : tz.to,
              sameDocument: String(!0),
              duration: zz.duration
            })
          }
        })), Fz.subscribe((() => {
          Xz.startTracking()
        }))
      }
    };

    function nW() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const tz = [new CW, new ds, new MF, new Ws, new Qs, new lW];
      return !1 !== zz.enablePerformanceInstrumentation && tz.unshift(new RF), !1 !== zz.enableContentSecurityPolicyInstrumentation && tz.push(new eW), !1 !== zz.captureConsole && tz.push(new ys), tz
    }
    var aW = sz(6274);
    let qW, SW;

    function VW() {
      const zz = "undefined" !== typeof navigator ? navigator.userAgent : "";
      return qW === zz && SW || (SW = new aW.UAParser(zz).getResult(), qW = zz), SW
    }
    const RW = () => {
        const {
          browser: zz,
          os: tz,
          ua: sz
        } = VW(), {
          name: Fz,
          version: Wz
        } = zz, {
          name: Xz,
          version: Oz
        } = tz, oz = navigator.language, vz = sz.includes("Mobi"), Uz = function() {
          if (!Fz || !Wz) return;
          if ("userAgentData" in navigator && navigator.userAgentData) return navigator.userAgentData.brands
        }();
        return {
          browser: {
            name: null !== Fz && void 0 !== Fz ? Fz : hs,
            version: null !== Wz && void 0 !== Wz ? Wz : hs,
            os: `${null!==Xz&&void 0!==Xz?Xz:hs} ${null!==Oz&&void 0!==Oz?Oz:hs}`,
            userAgent: null !== sz && void 0 !== sz ? sz : hs,
            language: null !== oz && void 0 !== oz ? oz : hs,
            mobile: vz,
            brands: null !== Uz && void 0 !== Uz ? Uz : hs,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`
          }
        }
      },
      pW = () => {
        const {
          name: zz,
          version: tz
        } = VW().os;
        if (!zz && !tz) return {};
        const sz = {};
        return zz && (sz.name = zz), tz && (sz.version = tz), {
          os: sz
        }
      };

    function fW(zz) {
      var tz, sz, Fz;
      return {
        id: null !== (tz = null === (sz = Dz.config) || void 0 === sz || null === (sz = sz.sessionTracking) || void 0 === sz || null === (Fz = sz.generateSessionId) || void 0 === Fz ? void 0 : Fz.call(sz)) && void 0 !== tz ? tz : Ht(),
        attributes: zz
      }
    }
    const EW = () => ({
      sdk: {
        name: "faro-web",
        version: Fs
      }
    });
    var zX = class extends ts {
      isBatched() {
        return !1
      }
      getIgnoreUrls() {
        return []
      }
    };
    let tX = function(zz) {
      return zz.EXCEPTION = "exception", zz.LOG = "log", zz.MEASUREMENT = "measurement", zz.TRACE = "trace", zz.EVENT = "event", zz
    }({});
    const sX = {
      exception: "exceptions",
      log: "logs",
      measurement: "measurements",
      trace: "traces",
      event: "events"
    };

    function FX(zz, tz) {
      var sz, Fz;
      if (void 0 === tz) return zz;
      if (void 0 === zz) return {
        resourceSpans: tz
      };
      const Wz = null === (sz = zz.resourceSpans) || void 0 === sz ? void 0 : sz[0];
      if (void 0 === Wz) return zz;
      const Xz = (null === Wz || void 0 === Wz ? void 0 : Wz.scopeSpans) || [],
        Oz = (null === tz || void 0 === tz || null === (Fz = tz[0]) || void 0 === Fz ? void 0 : Fz.scopeSpans) || [];
      return Et(Et({}, zz), {}, {
        resourceSpans: [Et(Et({}, Wz), {}, {
          scopeSpans: [...Xz, ...Oz]
        })]
      })
    }

    function WX(zz) {
      let tz = {
        meta: {}
      };
      return void 0 !== zz[0] && (tz.meta = zz[0].meta), zz.forEach((zz => {
        switch (zz.type) {
          case "log":
          case "event":
          case "exception":
          case "measurement": {
            const sz = sX[zz.type],
              Fz = tz[sz];
            tz = Et(Et({}, tz), {}, {
              [sz]: void 0 === Fz ? [zz.payload] : [...Fz, zz.payload]
            });
            break
          }
          case "trace":
            tz = Et(Et({}, tz), {}, {
              traces: FX(tz.traces, zz.payload.resourceSpans)
            })
        }
      })), tz
    }
    var XX = class extends zX {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(), this.options = zz, this.name = "@grafana/faro-web-sdk:transport-console", this.version = Fs
      }
      send(zz) {
        var tz;
        return this.unpatchedConsole[null !== (tz = this.options.level) && void 0 !== tz ? tz : rs.DEBUG]("New event", WX([zz]))
      }
    };
    const OX = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), ([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      oX = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-9]{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      vX = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:(?:([0-9]{2}))|(?: ([0-9]))) ([0-9]{2}):([0-9]{2}):([0-9]{2}) ([0-9]{4})$/,
      UX = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      KX = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      uX = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function NX(zz) {
      let {
        weekday: tz,
        day: sz,
        month: Fz,
        year: Wz,
        hour: Xz,
        minute: Oz,
        second: oz
      } = zz;
      if (Wz < 1900 || sz < 1 || Xz > 23 || Oz > 59 || oz > 60) return;
      const vz = 60 === oz,
        Uz = new Date(0);
      return Uz.setUTCFullYear(Wz, Fz, sz), Uz.setUTCHours(Xz, Oz, vz ? 59 : oz, 0), Uz.getUTCDay() === tz && Uz.getUTCDate() === sz && Uz.getUTCMonth() === Fz && Uz.getUTCFullYear() === Wz && Uz.getUTCHours() === Xz && Uz.getUTCMinutes() === Oz && Uz.getUTCSeconds() === (vz ? 59 : oz) ? Uz.getTime() + (vz ? 1e3 : 0) : void 0
    }
    var bX = class {
      constructor(zz) {
        this.options = zz, this.admitted = 0, this.inProgress = 0, this.sequence = 0, this.nextSendAt = 0, this.attemptQueue = [], this.waiting = [], this.unloading = !1
      }
      reserve() {
        var zz = this;
        if (this.admitted >= this.options.bufferSize) return;
        this.admitted++;
        const tz = this.sequence++;
        let sz = !1;
        return {
          deliver: function() {
            var sz = SF((function*(sz) {
              const Fz = zz.options.getNow();
              let Wz, Xz = 0;
              for (;;) {
                var Oz, oz, vz;
                const Uz = zz.options.retry.maxAttempts - Xz,
                  Kz = yield zz.runAttempt((() => sz(Uz, zz.unloading)), Xz > 0);
                if (Xz += Kz.attemptsMade, "success" === Kz.kind) return {
                  kind: "success",
                  attempts: Xz,
                  elapsedTimeMs: zz.options.getNow() - Fz
                };
                if (Wz = Kz.failure, "terminal" === Kz.kind || zz.unloading) return {
                  kind: "terminal",
                  attempts: Xz,
                  elapsedTimeMs: zz.options.getNow() - Fz,
                  failure: Wz
                };
                if (Xz >= zz.options.retry.maxAttempts) return {
                  kind: "terminal",
                  attempts: Xz,
                  elapsedTimeMs: zz.options.getNow() - Fz,
                  failure: Wz,
                  reason: "retries-exhausted"
                };
                if (null != Kz.retryAfterMs && Kz.retryAfterMs > zz.options.retry.maxBackoffMs) return {
                  kind: "terminal",
                  attempts: Xz,
                  elapsedTimeMs: zz.options.getNow() - Fz,
                  failure: Wz,
                  reason: "retry-after-too-long"
                };
                const uz = Math.min(null !== (Oz = Kz.retryAfterMs) && void 0 !== Oz ? Oz : zz.options.retry.initialBackoffMs * Math.pow(zz.options.retry.backoffMultiplier, Xz - 1), zz.options.retry.maxBackoffMs);
                if (null === (oz = (vz = zz.options).onRetry) || void 0 === oz || oz.call(vz, uz, Xz + 1), yield zz.waitForTurn(tz, uz)) {
                  const tz = zz.options.retry.maxAttempts - Xz,
                    Wz = yield zz.runAttempt((() => sz(tz, !0)));
                  return Xz += Wz.attemptsMade, {
                    kind: "success" === Wz.kind ? "success" : "terminal",
                    attempts: Xz,
                    elapsedTimeMs: zz.options.getNow() - Fz,
                    failure: "success" === Wz.kind ? void 0 : Wz.failure
                  }
                }
              }
            }));
            return function(zz) {
              return sz.apply(this, arguments)
            }
          }(),
          release: () => {
            sz || (sz = !0, this.admitted--)
          }
        }
      }
      flush() {
        this.unloading = !0, this.nextSendAt = 0;
        const zz = this.waiting.splice(0);
        null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0);
        for (const tz of zz) tz.resolve(!0);
        this.runNextAttempt()
      }
      resume() {
        this.unloading = !1
      }
      runAttempt(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Promise(((sz, Fz) => {
          this.attemptQueue.push({
            run: () => {
              this.inProgress++;
              const tz = () => {
                this.inProgress--, this.runNextAttempt()
              };
              zz().then((zz => {
                tz(), sz(zz)
              }), (zz => {
                tz(), Fz(zz)
              }))
            },
            isRedelivery: tz
          }), this.runNextAttempt()
        }))
      }
      runNextAttempt() {
        for (null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0); this.inProgress < this.options.concurrency && this.attemptQueue.length > 0;) {
          const zz = this.options.getNow(),
            tz = this.attemptQueue.findIndex((tz => {
              let {
                isRedelivery: sz
              } = tz;
              return this.unloading || !sz || zz >= this.nextSendAt
            }));
          if (tz < 0) return void(this.redeliveryTimer = setTimeout((() => {
            this.redeliveryTimer = void 0, this.runNextAttempt()
          }), Math.max(0, this.nextSendAt - zz)));
          const [sz] = this.attemptQueue.splice(tz, 1);
          sz.isRedelivery && !this.unloading && (this.nextSendAt = zz + 1), sz.run()
        }
      }
      waitForTurn(zz, tz) {
        const sz = Math.min(tz * (1 + .2 * this.options.getRandom()), this.options.retry.maxBackoffMs);
        return new Promise((tz => {
          this.waiting.push({
            sequence: zz,
            readyAt: this.options.getNow() + sz,
            resolve: tz
          }), this.waiting.sort(((zz, tz) => zz.readyAt === tz.readyAt ? zz.sequence - tz.sequence : zz.readyAt - tz.readyAt)), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0), this.scheduleNext()
        }))
      }
      scheduleNext() {
        if (null != this.waitingTimer || 0 === this.waiting.length) return;
        const zz = this.waiting[0],
          tz = zz.readyAt;
        this.waitingTimer = setTimeout((() => {
          this.waitingTimer = void 0;
          const tz = this.waiting.indexOf(zz);
          tz >= 0 && this.waiting.splice(tz, 1), zz.resolve(!1), this.scheduleNext()
        }), Math.max(0, tz - this.options.getNow()))
      }
    };

    function wX(zz, tz) {
      if (null == zz) return {};
      var sz, Fz, Wz = function(zz, tz) {
        if (null == zz) return {};
        var sz = {};
        for (var Fz in zz)
          if ({}.hasOwnProperty.call(zz, Fz)) {
            if (tz.includes(Fz)) continue;
            sz[Fz] = zz[Fz]
          } return sz
      }(zz, tz);
      if (Object.getOwnPropertySymbols) {
        var Xz = Object.getOwnPropertySymbols(zz);
        for (Fz = 0; Fz < Xz.length; Fz++) sz = Xz[Fz], tz.includes(sz) || {}.propertyIsEnumerable.call(zz, sz) && (Wz[sz] = zz[sz])
      }
      return Wz
    }

    function DX(zz) {
      const {
        size: tz,
        concurrency: sz
      } = zz, Fz = [];
      let Wz = 0;
      const Xz = () => {
        if (Wz < sz && Fz.length) {
          const {
            producer: zz,
            resolve: tz,
            reject: sz
          } = Fz.shift();
          Wz++, zz().then((zz => {
            Wz--, Xz(), tz(zz)
          }), (zz => {
            Wz--, Xz(), sz(zz)
          }))
        }
      };
      return {
        add: zz => {
          if (Fz.length + Wz >= tz) throw new Error("Task buffer full");
          return new Promise(((tz, sz) => {
            Fz.push({
              producer: zz,
              resolve: tz,
              reject: sz
            }), Xz()
          }))
        }
      }
    }
    const gX = ["headers"],
      HX = ["keepalive", "signal"],
      BX = new Set([408, 425, 429, 500, 502, 503, 504]),
      PX = new Set([429, 503]);
    let rX = 0,
      YX = 0;
    var xX = class extends Error {};
    var mX = class extends zX {
      constructor(zz) {
        var tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz, Kz, uz, Nz, bz, wz, Dz, gz, Hz;
        super(), this.options = zz, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = Fs, this.pendingCustomSends = 0, this.getNow = null !== (tz = zz.getNow) && void 0 !== tz ? tz : Date.now, this.requestTimeoutMs = null !== (sz = zz.requestTimeoutMs) && void 0 !== sz ? sz : 1e4, this.compressionEnabled = null !== (Fz = zz.requestCompression) && void 0 !== Fz && Fz && "undefined" !== typeof CompressionStream, zz.requestCompression && !this.compressionEnabled && this.logWarn("requestCompression is enabled but CompressionStream is not available. Falling back to uncompressed."), this.requestTimeoutMs > 0 && "undefined" === typeof AbortController && this.logWarn("AbortController is unavailable. Requests will be sent without the configured timeout."), this.deliveryQueue = new bX({
          bufferSize: null !== (Wz = zz.bufferSize) && void 0 !== Wz ? Wz : 30,
          concurrency: null !== (Xz = zz.concurrency) && void 0 !== Xz ? Xz : 5,
          retry: {
            maxAttempts: null !== (Oz = null === (oz = zz.retry) || void 0 === oz ? void 0 : oz.maxAttempts) && void 0 !== Oz ? Oz : 3,
            initialBackoffMs: null !== (vz = null !== (Uz = null === (Kz = zz.retry) || void 0 === Kz ? void 0 : Kz.initialBackoffMs) && void 0 !== Uz ? Uz : zz.defaultRateLimitBackoffMs) && void 0 !== vz ? vz : 1e3,
            maxBackoffMs: null !== (uz = null === (Nz = zz.retry) || void 0 === Nz ? void 0 : Nz.maxBackoffMs) && void 0 !== uz ? uz : 3e4,
            backoffMultiplier: null !== (bz = null === (wz = zz.retry) || void 0 === wz ? void 0 : wz.backoffMultiplier) && void 0 !== bz ? bz : 2
          },
          getNow: this.getNow,
          getRandom: null !== (Dz = zz.getRandom) && void 0 !== Dz ? Dz : Math.random,
          onRetry: (zz, tz) => {
            this.logDebug(`Retrying failed request after ${zz}ms. Attempt ${tz}.`)
          }
        }), this.customPromiseBuffer = DX({
          size: null !== (gz = zz.bufferSize) && void 0 !== gz ? gz : 30,
          concurrency: null !== (Hz = zz.concurrency) && void 0 !== Hz ? Hz : 5
        }), this.defaultPromiseBuffer = {
          add: zz => {
            if (this.promiseBuffer !== this.defaultPromiseBuffer || this.promiseBuffer.add !== this.defaultBufferAdd || this.pendingCustomSends > 0) return this.customPromiseBuffer.add(zz);
            const tz = this.deliveryQueue.reserve();
            if (!tz) throw new Error("Task buffer full");
            return this.runBufferedTask(tz, zz)
          }
        }, this.defaultBufferAdd = this.defaultPromiseBuffer.add, this.promiseBuffer = this.defaultPromiseBuffer, "undefined" !== typeof window && (window.addEventListener("pagehide", (() => this.deliveryQueue.flush())), window.addEventListener("pageshow", (zz => {
          zz.persisted && this.deliveryQueue.resume()
        })))
      }
      send(zz) {
        var tz = this;
        return SF((function*() {
          const sz = tz.promiseBuffer;
          if (sz !== tz.defaultPromiseBuffer || sz.add !== tz.defaultBufferAdd) {
            tz.pendingCustomSends++;
            try {
              yield sz.add((() => tz.deliver(zz)))
            } catch (Fz) {
              tz.logError("Permanent delivery failure", {
                error: Fz,
                attempts: 0,
                elapsedTimeMs: 0
              })
            } finally {
              tz.pendingCustomSends--
            }
          } else yield tz.deliver(zz)
        }))()
      }
      runBufferedTask(zz, tz) {
        return SF((function*() {
          let sz;
          try {
            return yield zz.deliver(SF((function*() {
              return sz = yield tz(), {
                kind: "success",
                attemptsMade: 1
              }
            }))), sz
          } finally {
            zz.release()
          }
        }))()
      }
      deliver(zz) {
        var tz = this;
        return SF((function*() {
          const sz = tz.deliveryQueue.reserve();
          if (sz) try {
            const Fz = yield tz.prepareRequest(zz), Wz = yield sz.deliver(((zz, sz) => tz.performAttempt(Fz, zz, sz)));
            "terminal" === Wz.kind && tz.logError("retries-exhausted" === Wz.reason ? "Delivery retries exhausted" : "Permanent delivery failure", Kt(Kt({}, Wz.failure), {}, {
              reason: Wz.reason,
              attempts: Wz.attempts,
              elapsedTimeMs: Wz.elapsedTimeMs
            }))
          } catch (Fz) {
            tz.logError("Permanent delivery failure", {
              error: Fz,
              attempts: 0,
              elapsedTimeMs: 0
            })
          } finally {
            sz.release()
          } else tz.logError("Permanent delivery failure", {
            error: "Reliable delivery queue is full",
            attempts: 0,
            elapsedTimeMs: 0
          })
        }))()
      }
      getIgnoreUrls() {
        var zz;
        return [this.options.url].concat(null !== (zz = this.config.ignoreUrls) && void 0 !== zz ? zz : [])
      }
      isBatched() {
        return !0
      }
      prepareRequest(zz) {
        var tz = this;
        return SF((function*() {
          var sz, Fz;
          const Wz = WX(zz),
            Xz = null === (sz = Wz.meta.session) || void 0 === sz ? void 0 : sz.id,
            Oz = JSON.stringify(Wz),
            oz = null !== (Fz = tz.options.requestOptions) && void 0 !== Fz ? Fz : {},
            {
              headers: vz = {}
            } = oz,
            Uz = wX(oz, gX),
            {
              keepalive: Kz,
              signal: uz
            } = Uz,
            Nz = wX(Uz, HX),
            bz = {};
          for (const [zz, tz] of Object.entries(vz)) bz[zz] = "function" === typeof tz ? yield tz(): tz;
          let wz = Oz,
            Dz = function(zz) {
              return "undefined" === typeof TextEncoder ? zz.length : (new TextEncoder).encode(zz).byteLength
            }(Oz);
          const gz = {};
          return tz.compressionEnabled && (wz = yield tz.compress(Oz), Dz = wz.size, gz["Content-Encoding"] = "gzip"), {
            bodySize: Dz,
            sessionId: Xz,
            requestInit: Kt({
              method: "POST",
              headers: Kt(Kt(Kt(Kt(Kt({
                "Content-Type": "application/json"
              }, gz), bz), tz.options.apiKey ? {
                "x-api-key": tz.options.apiKey
              } : {}), Xz ? {
                "x-faro-session-id": Xz
              } : {}), {}, {
                "Idempotency-Key": Ht(20)
              }),
              body: wz
            }, Nz)
          }
        }))()
      }
      performAttempt(zz, tz, sz) {
        var Fz = this;
        return SF((function*() {
          var Wz;
          const Xz = null === (Wz = Fz.options.requestOptions) || void 0 === Wz ? void 0 : Wz.signal;
          if (null === Xz || void 0 === Xz ? void 0 : Xz.aborted) return {
            kind: "terminal",
            failure: {
              error: Xz.reason
            },
            attemptsMade: 0
          };
          let Oz = 0;
          try {
            var oz;
            const Wz = yield Fz.fetchWithKeepaliveFallback(zz.requestInit, zz.bodySize, !!sz || (null === (oz = Fz.options.requestOptions) || void 0 === oz ? void 0 : oz.keepalive), tz, (() => Oz++));
            if (Fz.handleResponse(Wz, zz.sessionId), Wz.status >= 200 && Wz.status < 300) return {
              kind: "success",
              attemptsMade: Oz
            };
            const Xz = {
              status: Wz.status
            };
            return !BX.has(Wz.status) || sz ? {
              kind: "terminal",
              failure: Xz,
              attemptsMade: Oz
            } : {
              kind: "retry",
              failure: Xz,
              attemptsMade: Oz,
              retryAfterMs: PX.has(Wz.status) ? Fz.getRetryAfterDelayMs(Wz) : void 0
            }
          } catch (vz) {
            const zz = {
              error: vz
            };
            return (null === Xz || void 0 === Xz ? void 0 : Xz.aborted) || !Fz.isFetchNetworkError(vz) || sz ? {
              kind: "terminal",
              failure: zz,
              attemptsMade: Oz
            } : {
              kind: "retry",
              failure: zz,
              attemptsMade: Oz
            }
          }
        }))()
      }
      fetchWithKeepaliveFallback(zz, tz, sz, Fz, Wz) {
        var Xz = this;
        return SF((function*() {
          const Oz = Xz.getNow(),
            oz = Xz.reserveKeepalive(tz, sz);
          try {
            return yield Xz.fetchWithTimeout(Kt(Kt({}, zz), {}, {
              keepalive: oz.keepalive
            }), Xz.requestTimeoutMs, Wz)
          } catch (Uz) {
            var vz;
            if (oz.keepalive && Fz > 1 && Xz.isFetchNetworkError(Uz) && !(Uz instanceof xX) && !(null === (vz = Xz.options.requestOptions) || void 0 === vz || null === (vz = vz.signal) || void 0 === vz ? void 0 : vz.aborted)) {
              Xz.logDebug("Retrying failed keepalive request with keepalive disabled.");
              const tz = Xz.requestTimeoutMs - (Xz.getNow() - Oz);
              return Xz.fetchWithTimeout(Kt(Kt({}, zz), {}, {
                keepalive: !1
              }), tz, Wz)
            }
            throw Uz
          } finally {
            oz.release()
          }
        }))()
      }
      fetchWithTimeout(zz, tz, sz) {
        var Fz = this;
        return SF((function*() {
          var Wz;
          const Xz = null === (Wz = Fz.options.requestOptions) || void 0 === Wz ? void 0 : Wz.signal;
          if (Fz.requestTimeoutMs <= 0 || "undefined" === typeof AbortController) return sz(), fetch(Fz.options.url, Kt(Kt({}, zz), {}, {
            signal: Xz
          }));
          if (tz <= 0) throw new xX("Request timed out");
          const Oz = new AbortController,
            oz = () => Oz.abort(null === Xz || void 0 === Xz ? void 0 : Xz.reason);
          null === Xz || void 0 === Xz || Xz.addEventListener("abort", oz, {
            once: !0
          });
          let vz = !1;
          const Uz = setTimeout((() => {
            vz = !0, Oz.abort()
          }), tz);
          try {
            return sz(), yield fetch(Fz.options.url, Kt(Kt({}, zz), {}, {
              signal: Oz.signal
            }))
          } catch (Kz) {
            if (vz && !(null === Xz || void 0 === Xz ? void 0 : Xz.aborted)) throw new xX("Request timed out");
            throw Kz
          } finally {
            clearTimeout(Uz), null === Xz || void 0 === Xz || Xz.removeEventListener("abort", oz)
          }
        }))()
      }
      getRetryAfterDelayMs(zz) {
        const tz = zz.headers.get("Retry-After");
        if (!tz) return;
        if (/^\d+$/.test(tz)) {
          const zz = 1e3 * Number(tz);
          return Number.isFinite(zz) ? zz : Number.POSITIVE_INFINITY
        }
        const sz = this.getNow(),
          Fz = function(zz, tz) {
            const sz = OX.exec(zz);
            if (sz) {
              const [, zz, tz, Fz, Wz, Xz, Oz, oz] = sz;
              return NX({
                weekday: UX.indexOf(zz),
                day: Number(tz),
                month: uX.indexOf(Fz),
                year: Number(Wz),
                hour: Number(Xz),
                minute: Number(Oz),
                second: Number(oz)
              })
            }
            const Fz = oX.exec(zz);
            if (Fz) {
              const [, zz, sz, Oz, oz, vz, Uz, Kz] = Fz, uz = new Date(tz);
              if (Number.isNaN(uz.getTime())) return;
              const Nz = uz.getUTCFullYear();
              let bz = 100 * Math.floor(Nz / 100) + Number(oz);
              bz < Nz && (bz += 100);
              const wz = uX.indexOf(Oz),
                Dz = {
                  month: wz,
                  day: Number(sz),
                  hour: Number(vz),
                  minute: Number(Uz),
                  second: Number(Kz),
                  millisecond: 0
                },
                gz = {
                  month: uz.getUTCMonth(),
                  day: uz.getUTCDate(),
                  hour: uz.getUTCHours(),
                  minute: uz.getUTCMinutes(),
                  second: uz.getUTCSeconds(),
                  millisecond: uz.getUTCMilliseconds()
                };
              return (bz > Nz + 50 || bz === Nz + 50 && (Xz = gz, ((Wz = Dz).month - Xz.month || Wz.day - Xz.day || Wz.hour - Xz.hour || Wz.minute - Xz.minute || Wz.second - Xz.second || Wz.millisecond - Xz.millisecond) > 0)) && (bz -= 100), NX({
                weekday: KX.indexOf(zz),
                day: Number(sz),
                month: wz,
                year: bz,
                hour: Number(vz),
                minute: Number(Uz),
                second: Number(Kz)
              })
            }
            var Wz, Xz;
            const Oz = vX.exec(zz);
            if (!Oz) return;
            const [, oz, vz, Uz, Kz, uz, Nz, bz, wz] = Oz;
            return NX({
              weekday: UX.indexOf(oz),
              day: Number(null !== Uz && void 0 !== Uz ? Uz : Kz),
              month: uX.indexOf(vz),
              year: Number(wz),
              hour: Number(uz),
              minute: Number(Nz),
              second: Number(bz)
            })
          }(tz, sz);
        return null == Fz ? void 0 : Math.max(0, Fz - sz)
      }
      reserveKeepalive(zz, tz) {
        if (!1 === tz || zz > 6e4 || rX + zz > 6e4 || YX >= 9) return {
          keepalive: !1,
          release: lt
        };
        rX += zz, YX++;
        let sz = !1;
        return {
          keepalive: !0,
          release: () => {
            sz || (sz = !0, rX -= zz, YX--)
          }
        }
      }
      handleResponse(zz, tz) {
        202 === zz.status && "invalid" === zz.headers.get("X-Faro-Session-Status") && this.extendFaroSession(this.config, this.logDebug.bind(this), tz), zz.text().catch(lt)
      }
      isFetchNetworkError(zz) {
        return zz instanceof TypeError || zz instanceof xX || zz instanceof DOMException && "AbortError" === zz.name
      }
      compress(zz) {
        return SF((function*() {
          const tz = [],
            sz = new ReadableStream({
              start(tz) {
                tz.enqueue((new TextEncoder).encode(zz)), tz.close()
              }
            }).pipeThrough(new CompressionStream("gzip")).getReader();
          for (;;) {
            const {
              done: zz,
              value: Fz
            } = yield sz.read();
            if (zz) return new Blob(tz);
            tz.push(Fz)
          }
        }))()
      }
      extendFaroSession(zz, tz, sz) {
        var Fz, Wz;
        const Xz = zz.sessionTracking;
        if (!(null === Xz || void 0 === Xz ? void 0 : Xz.enabled)) return void tz("Session expired.");
        const {
          fetchUserSession: Oz,
          storeUserSession: oz
        } = Lt(Xz), vz = null === (Fz = this.metas.value.session) || void 0 === Fz ? void 0 : Fz.id, Uz = null === (Wz = Oz()) || void 0 === Wz ? void 0 : Wz.sessionId;
        sz && sz === vz && sz === Uz ? (Gt({
          fetchUserSession: Oz,
          storeUserSession: oz
        })({
          forceSessionExtend: !0
        }), tz("Session expired; created new session.")) : tz("Ignoring stale or cross-tab session-invalid response; request session no longer current.")
      }
    };
    const JX = () => {
      const zz = window.k6;
      return {
        k6: Kt({
          isK6Browser: !0
        }, (null === zz || void 0 === zz ? void 0 : zz.testRunId) && {
          testRunId: null === zz || void 0 === zz ? void 0 : zz.testRunId
        })
      }
    };
    let IX, CX;

    function eX() {
      let {
        generatePageId: zz,
        initialPageMeta: tz
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return () => {
        const sz = location.href;
        return Zz(zz) && IX !== sz && (IX = sz, CX = zz(location)), {
          page: Kt(Kt({
            url: sz
          }, CX ? {
            id: CX
          } : {}), tz)
        }
      }
    }

    function ZX() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zs,
        tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const sz = qt;
      return tz > 0 && (sz.error = tz >= 1 ? function() {
        for (var tz = arguments.length, Fz = new Array(tz), Wz = 0; Wz < tz; Wz++) Fz[Wz] = arguments[Wz];
        zz.error(`${sz.prefix}\n`, ...Fz)
      } : lt, sz.warn = tz >= 2 ? function() {
        for (var tz = arguments.length, Fz = new Array(tz), Wz = 0; Wz < tz; Wz++) Fz[Wz] = arguments[Wz];
        zz.warn(`${sz.prefix}\n`, ...Fz)
      } : lt, sz.info = tz >= 3 ? function() {
        for (var tz = arguments.length, Fz = new Array(tz), Wz = 0; Wz < tz; Wz++) Fz[Wz] = arguments[Wz];
        zz.info(`${sz.prefix}\n`, ...Fz)
      } : lt, sz.debug = tz >= 4 ? function() {
        for (var tz = arguments.length, Fz = new Array(tz), Wz = 0; Wz < tz; Wz++) Fz[Wz] = arguments[Wz];
        zz.debug(`${sz.prefix}\n`, ...Fz)
      } : lt), sz
    }
    const GX = "faro",
      TX = {
        enabled: !0,
        sendTimeout: 250,
        itemLimit: 50
      },
      cX = ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "url", "experimental"];

    function jX(zz) {
      var tz, sz, Wz, Xz, Oz, oz;
      const vz = [],
        Kz = ZX(zz.unpatchedConsole, zz.internalLoggerLevel);
      zz.transports ? ((zz.url || zz.apiKey) && Kz.error('if "transports" is defined, "url" and "apiKey" should not be defined'), vz.push(...zz.transports)) : zz.url ? vz.push(new mX({
        url: zz.url,
        apiKey: zz.apiKey,
        requestCompression: zz.requestCompression
      })) : Kz.error('either "url" or "transports" must be defined');
      const {
        dedupe: uz = !0,
        eventDomain: Nz = Fz,
        globalObjectKey: bz = GX,
        instrumentations: wz = nW(),
        internalLoggerLevel: Dz = St,
        isolate: gz = !1,
        logArgsSerializer: Hz = As,
        metas: Bz = yX(zz),
        paused: Pz = !1,
        preventGlobalExposure: rz = !1,
        unpatchedConsole: Yz = zs,
        url: xz,
        experimental: mz
      } = zz, Jz = wX(zz, cX), Iz = null !== (tz = null === mz || void 0 === mz ? void 0 : mz.trackNavigation) && void 0 !== tz && tz, Cz = {
        dataAttributeName: zW(null !== (sz = null === (Wz = zz.userActionsInstrumentation) || void 0 === Wz ? void 0 : Wz.dataAttributeName) && void 0 !== sz ? sz : pF),
        excludeItem: null === (Xz = zz.userActionsInstrumentation) || void 0 === Xz ? void 0 : Xz.excludeItem,
        initialActivityTimeout: tW(null === (Oz = zz.userActionsInstrumentation) || void 0 === Oz ? void 0 : Oz.initialActivityTimeout, 100, (zz => Kz.warn(zz)))
      };
      return Kt(Kt({}, Jz), {}, {
        batching: Kt(Kt({}, TX), zz.batching),
        dedupe: uz,
        globalObjectKey: bz,
        instrumentations: AX(wz, zz),
        internalLoggerLevel: Dz,
        isolate: gz,
        logArgsSerializer: Hz,
        metas: Bz,
        parseStacktrace: gs,
        paused: Pz,
        preventGlobalExposure: rz,
        transports: vz,
        unpatchedConsole: Yz,
        eventDomain: Nz,
        ignoreUrls: [...null !== (oz = zz.ignoreUrls) && void 0 !== oz ? oz : [], ...xz ? [xz] : [], /\/collect(?:\/[\w]*)?$/],
        sessionTracking: Kt(Kt(Kt({}, Uz), zz.sessionTracking), MX({
          trackGeolocation: zz.trackGeolocation,
          sessionTracking: zz.sessionTracking
        })),
        userActionsInstrumentation: Cz,
        experimental: {
          trackNavigation: Iz
        }
      })
    }

    function AX(zz, tz) {
      let {
        experimental: sz
      } = tz;
      var Fz;
      const Wz = null !== (Fz = null === sz || void 0 === sz ? void 0 : sz.trackNavigation) && void 0 !== Fz && Fz;
      return zz.filter((zz => !("@grafana/faro-web-sdk:instrumentation-navigation" === zz.name && !Wz)))
    }

    function yX(zz) {
      var tz, sz, Fz;
      const {
        page: Wz,
        generatePageId: Xz
      } = null !== (tz = null === zz || void 0 === zz ? void 0 : zz.pageTracking) && void 0 !== tz ? tz : {}, Oz = [RW, pW, eX({
        generatePageId: Xz,
        initialPageMeta: Wz
      }), ...null !== (sz = zz.metas) && void 0 !== sz ? sz : [], EW];
      return ez(null === (Fz = window) || void 0 === Fz ? void 0 : Fz.k6) ? [...Oz, JX] : Oz
    }

    function MX(zz) {
      let {
        trackGeolocation: tz,
        sessionTracking: sz
      } = zz;
      var Fz;
      const Wz = {};
      return Iz(tz) && (Wz.geoLocationTrackingEnabled = tz), qz(Wz) ? {} : {
        session: Kt(Kt({}, null !== (Fz = null === sz || void 0 === sz ? void 0 : sz.session) && void 0 !== Fz ? Fz : {}), {}, {
          overrides: Wz
        })
      }
    }
    const dX = new WeakSet;

    function hX(zz) {
      return dX.add(zz), zz
    }

    function QX(zz, tz) {
      if (zz.capture) return hX(zz.capture(tz));
      const sz = hX(zz.value);
      return null === tz || void 0 === tz || tz(), sz
    }

    function kX(zz) {
      const tz = `__faroBundleId_${zz}`,
        sz = null === Kz || void 0 === Kz ? void 0 : Kz[tz];
      if ("string" === typeof sz && "" !== sz) return sz;
      const Fz = "undefined" !== typeof window ? window[tz] : void 0;
      return "string" === typeof Fz && "" !== Fz ? Fz : void 0
    }

    function iX(zz) {
      var tz, sz;
      const Fz = zz.config.app.name,
        Wz = Fz ? function(zz) {
          return null === Kz || void 0 === Kz ? void 0 : Kz[`__faroGitHash_${zz}`]
        }(Fz) : void 0,
        Xz = {
          sdk: {
            version: Fs,
            name: "faro"
          },
          app: Et({
            bundleId: Fz && kX(Fz)
          }, void 0 !== Wz ? {
            gitHash: Wz
          } : {})
        },
        Oz = null === (tz = zz.config.sessionTracking) || void 0 === tz ? void 0 : tz.session;
      Oz && zz.api.setSession(Oz), zz.config.app && (Xz.app = Et(Et({}, zz.config.app), Xz.app)), zz.config.user && (Xz.user = zz.config.user), zz.config.view && (Xz.view = zz.config.view), zz.metas.add(Xz, ...null !== (sz = zz.config.metas) && void 0 !== sz ? sz : [])
    }
    var LX = class {
      constructor(zz, tz) {
        var sz, Fz;
        this.signalBuffer = [], this.itemLimit = null !== (sz = null === tz || void 0 === tz ? void 0 : tz.itemLimit) && void 0 !== sz ? sz : 50, this.sendTimeout = null !== (Fz = null === tz || void 0 === tz ? void 0 : tz.sendTimeout) && void 0 !== Fz ? Fz : 250, this.paused = (null === tz || void 0 === tz ? void 0 : tz.paused) || !1, this.sendFn = zz, this.paused || this.start(), "undefined" !== typeof document && document.addEventListener("visibilitychange", (() => {
          "hidden" === document.visibilityState && this.flush()
        }))
      }
      addItem(zz) {
        this.paused || (this.signalBuffer.push(zz), this.signalBuffer.length >= this.itemLimit && this.flush())
      }
      start() {
        this.paused = !1, this.sendTimeout > 0 && (this.flushInterval = setInterval((() => this.flush()), this.sendTimeout))
      }
      pause() {
        this.paused = !0, clearInterval(this.flushInterval)
      }
      groupItems(zz) {
        const tz = new Map;
        return zz.forEach((zz => {
          const sz = JSON.stringify(zz.meta);
          let Fz = tz.get(sz);
          Fz = void 0 === Fz ? [zz] : [...Fz, zz], tz.set(sz, Fz)
        })), Array.from(tz.values())
      }
      flush() {
        if (this.paused || 0 === this.signalBuffer.length) return;
        const zz = this.signalBuffer;
        this.signalBuffer = [];
        try {
          this.groupItems(zz).forEach(this.sendFn)
        } catch (tz) {
          throw this.signalBuffer = [...zz, ...this.signalBuffer], this.trimBufferToLimit(), tz
        }
      }
      trimBufferToLimit() {
        this.signalBuffer.length > this.itemLimit && (this.signalBuffer = this.signalBuffer.slice(0, this.itemLimit))
      }
    };

    function lX(zz, tz, sz, Fz) {
      var Wz;
      tz.debug("Initializing transports");
      const Xz = [];
      let Oz = [];
      const oz = zz => {
        let tz = zz;
        for (const Fz of Oz) {
          const zz = tz.map(Fz).filter(Boolean);
          if (0 === zz.length) return [];
          tz = nX(zz, sz)
        }
        return tz
      };
      let vz;
      (null === (Wz = sz.batching) || void 0 === Wz ? void 0 : Wz.enabled) && (vz = new LX((zz => {
        const sz = oz(zz);
        if (0 !== sz.length)
          for (const Fz of Xz) tz.debug(`Transporting item using ${Fz.name}\n`, sz), Fz.isBatched() && Fz.send(sz)
      }), {
        sendTimeout: sz.batching.sendTimeout,
        itemLimit: sz.batching.itemLimit,
        paused: sz.paused
      }));
      return {
        add: function() {
          tz.debug("Adding transports");
          for (var Wz = arguments.length, Oz = new Array(Wz), oz = 0; oz < Wz; oz++) Oz[oz] = arguments[oz];
          Oz.forEach((Wz => {
            tz.debug(`Adding "${Wz.name}" transport`), Xz.some((zz => zz === Wz)) ? tz.warn(`Transport ${Wz.name} is already added`) : (Wz.unpatchedConsole = zz, Wz.internalLogger = tz, Wz.config = sz, Wz.metas = Fz, Xz.push(Wz))
          }))
        },
        addBeforeSendHooks: function() {
          tz.debug("Adding beforeSendHooks\n", Oz);
          for (var zz = arguments.length, sz = new Array(zz), Fz = 0; Fz < zz; Fz++) sz[Fz] = arguments[Fz];
          sz.forEach((zz => {
            zz && Oz.push(zz)
          }))
        },
        getBeforeSendHooks: () => [...Oz],
        execute: zz => {
          var Wz;
          if (!sz.paused && kt(Fz).shouldCapture()) {
            if (uz = zz.meta, !dX.has(uz)) {
              var Oz, Uz, Kz;
              const tz = null === (Oz = Fz.value.session) || void 0 === Oz ? void 0 : Oz.id,
                Wz = QX(Fz);
              if (sz.paused) return;
              const Xz = Et({}, zz.meta);
              (null === (Uz = Xz.session) || void 0 === Uz ? void 0 : Uz.id) === tz && (null === (Kz = Wz.session) || void 0 === Kz ? void 0 : Kz.id) !== tz && (void 0 === Wz.session ? delete Xz.session : Xz.session = Wz.session), zz = Et(Et({}, zz), {}, {
                meta: hX(Xz)
              })
            }
            var uz;
            (null === (Wz = sz.batching) || void 0 === Wz ? void 0 : Wz.enabled) && (null === vz || void 0 === vz || vz.addItem(zz)), (zz => {
              var Fz;
              if ((null === (Fz = sz.batching) || void 0 === Fz ? void 0 : Fz.enabled) && Xz.every((zz => zz.isBatched()))) return;
              const [Wz] = oz([zz]);
              if (void 0 !== Wz)
                for (const oz of Xz) {
                  var Oz;
                  tz.debug(`Transporting item using ${oz.name}\n`, Wz), oz.isBatched() ? (null === (Oz = sz.batching) || void 0 === Oz ? void 0 : Oz.enabled) || oz.send([Wz]) : oz.send(Wz)
                }
            })(zz)
          }
        },
        isPaused: () => sz.paused,
        pause: () => {
          tz.debug("Pausing transports"), null === vz || void 0 === vz || vz.pause(), sz.paused = !0
        },
        remove: function() {
          tz.debug("Removing transports");
          for (var zz = arguments.length, sz = new Array(zz), Fz = 0; Fz < zz; Fz++) sz[Fz] = arguments[Fz];
          sz.forEach((zz => {
            tz.debug(`Removing "${zz.name}" transport`);
            const sz = Xz.indexOf(zz); - 1 !== sz ? Xz.splice(sz, 1) : tz.warn(`Transport "${zz.name}" is not added`)
          }))
        },
        removeBeforeSendHooks: function() {
          for (var zz = arguments.length, sz = new Array(zz), Fz = 0; Fz < zz; Fz++) sz[Fz] = arguments[Fz];
          tz.debug("Removing beforeSendHooks"), Oz = Oz.filter((zz => !sz.includes(zz)))
        },
        get transports() {
          return [...Xz]
        },
        unpause: () => {
          tz.debug("Unpausing transports"), null === vz || void 0 === vz || vz.start(), sz.paused = !1
        }
      }
    }

    function nX(zz, tz) {
      if (tz.preserveOriginalError)
        for (const sz of zz) "exception" === sz.type && delete sz.payload.originalError;
      return zz
    }
    let aX = zs;

    function qX(zz) {
      var tz;
      return aX = null !== (tz = zz.unpatchedConsole) && void 0 !== tz ? tz : aX, aX
    }
    let SX, VX = qt;

    function RX(zz, tz) {
      return VX = ZX(zz, tz.internalLoggerLevel), VX
    }

    function pX(zz) {
      let {
        internalLogger: tz,
        config: sz,
        metas: Fz,
        transports: Wz,
        tracesApi: Xz,
        userActionsApi: Oz
      } = zz;
      var oz;
      tz.debug("Initializing exceptions API");
      let vz = null;
      SX = null !== (oz = sz.parseStacktrace) && void 0 !== oz ? oz : SX;
      const Uz = zz => {
          tz.debug("Changing stacktrace parser"), SX = null !== zz && void 0 !== zz ? zz : SX
        },
        {
          ignoreErrors: Kz = [],
          preserveOriginalError: uz
        } = sz;
      return Uz(sz.parseStacktrace), {
        changeStacktraceParser: Uz,
        getStacktraceParser: () => SX,
        pushError: function(zz) {
          let {
            skipDedupe: oz,
            stackFrames: Uz,
            type: Nz,
            context: bz,
            spanContext: wz,
            timestampOverwriteMs: Dz,
            originalError: gz,
            fingerprint: Hz,
            fatal: Bz
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (! function(zz, tz) {
              const {
                message: sz,
                name: Fz,
                stack: Wz
              } = tz;
              return Xz = zz, Oz = sz + " " + Fz + " " + Wz, Xz.some((zz => xz(zz) ? Oz.includes(zz) : !!Oz.match(zz)));
              var Xz, Oz
            }(Kz, null !== gz && void 0 !== gz ? gz : zz)) try {
            var Pz, rz;
            if (!kt(Fz).shouldCapture()) return;
            const Kz = Mt(Et(Et({}, function(zz) {
                let tz = zz.cause;
                dz(tz) ? tz = zz.cause.toString() : null !== tz && (ez(zz.cause) || Gz(zz.cause)) ? tz = yt(zz.cause) : null != tz && (tz = zz.cause.toString());
                return null == tz ? {} : {
                  cause: tz
                }
              }(null !== gz && void 0 !== gz ? gz : zz)), null !== bz && void 0 !== bz ? bz : {})),
              xz = Et(Et(Et(Et({
                type: Nz || zz.name || "Error",
                value: zz.message,
                timestamp: Dz ? Dt(Dz) : wt(),
                trace: wz ? {
                  trace_id: wz.traceId,
                  span_id: wz.spanId
                } : Xz.getTraceContext()
              }, qz(Kz) ? {} : {
                context: Kz
              }), uz ? {
                originalError: gz
              } : {}), Hz ? {
                fingerprint: Hz
              } : {}), void 0 !== Bz ? {
                fatal: Bz
              } : {});
            Uz = null !== (Pz = Uz) && void 0 !== Pz ? Pz : zz.stack ? null === SX || void 0 === SX ? void 0 : SX(zz).frames : void 0, (null === Uz || void 0 === Uz ? void 0 : Uz.length) && (xz.stacktrace = {
              frames: Uz
            });
            const mz = {
              type: xz.type,
              value: xz.value,
              stacktrace: xz.stacktrace,
              context: xz.context,
              fingerprint: xz.fingerprint,
              fatal: null !== (rz = xz.fatal) && void 0 !== rz && rz
            };
            if (!oz && sz.dedupe && !Yz(vz) && Bt(mz, vz)) return void tz.debug("Skipping error push because it is the same as the last one\n", xz);
            const Jz = vz,
              Iz = QX(Fz);
            if (vz !== Jz && !oz && sz.dedupe && Bt(mz, vz)) return;
            vz = mz;
            const Cz = {
              meta: Iz,
              payload: xz,
              type: "exception"
            };
            tz.debug("Pushing exception\n", Cz), IW(Oz.getActiveUserAction(), Cz) || Wz.execute(Cz)
          } catch (mz) {
            tz.error("Error pushing event", mz)
          }
        }
      }
    }

    function fX(zz, tz, sz, Fz, Wz) {
      tz.debug("Initializing API");
      let Xz = null;
      const Oz = function(zz) {
          let {
            transports: tz,
            internalLogger: sz,
            config: Fz,
            pushEvent: Wz
          } = zz;
          var Xz;
          const Oz = null === (Xz = Fz.userActionsInstrumentation) || void 0 === Xz ? void 0 : Xz.excludeItem;
          let oz;
          const vz = () => oz;
          return {
            startUserAction: (zz, Fz, Xz) => {
              if (void 0 === vz()) {
                const sz = new mW({
                  name: zz,
                  transports: tz,
                  attributes: Fz,
                  trigger: (null === Xz || void 0 === Xz ? void 0 : Xz.triggerName) || "faroApiCall",
                  importance: (null === Xz || void 0 === Xz ? void 0 : Xz.importance) || YW.Normal,
                  trackUserActionsExcludeItem: Oz,
                  pushEvent: Wz
                });
                return sz.filter((zz => [3, 2].includes(zz))).first().subscribe((() => {
                  oz = void 0
                })), JW.notify({
                  type: rW,
                  userAction: sz,
                  initialActivityTimeout: null === Xz || void 0 === Xz ? void 0 : Xz.initialActivityTimeout
                }), oz = sz, oz
              }
              sz.error("Attempted to create a new user action while one is already running. This is not possible.")
            },
            getActiveUserAction: vz
          }
        }({
          transports: Wz,
          config: sz,
          internalLogger: tz,
          pushEvent: (zz, sz, Fz, Wz) => {
            Xz ? Xz(zz, sz, Fz, Wz) : tz.warn("pushEventImpl is not initialized. Event dropped:", {
              name: zz,
              attributes: sz,
              domain: Fz,
              options: Wz
            })
          }
        }),
        oz = function(zz, tz, sz, Fz, Wz) {
          let Xz;
          return tz.debug("Initializing traces API"), {
            getOTEL: () => Xz,
            getTraceContext: () => {
              const zz = null === Xz || void 0 === Xz ? void 0 : Xz.trace.getSpanContext(Xz.context.active());
              return zz ? {
                trace_id: zz.traceId,
                span_id: zz.spanId
              } : void 0
            },
            initOTEL: (zz, sz) => {
              tz.debug("Initializing OpenTelemetry"), Xz = {
                trace: zz,
                context: sz
              }
            },
            isOTELInitialized: () => !!Xz,
            pushTraces: zz => {
              try {
                if (!kt(Fz).shouldCapture()) return;
                const sz = {
                  type: "trace",
                  payload: zz,
                  meta: QX(Fz)
                };
                tz.debug("Pushing trace\n", sz), Wz.execute(sz)
              } catch (sz) {
                tz.error("Error pushing trace\n", sz)
              }
            }
          }
        }(0, tz, 0, Fz, Wz),
        vz = {
          unpatchedConsole: zz,
          internalLogger: tz,
          userActionsApi: Oz,
          config: sz,
          metas: Fz,
          transports: Wz,
          tracesApi: oz
        },
        Uz = function(zz) {
          let {
            internalLogger: tz,
            config: sz,
            metas: Fz,
            transports: Wz,
            tracesApi: Xz,
            userActionsApi: Oz
          } = zz, oz = null;
          return {
            pushEvent: function(zz, vz, Uz) {
              let {
                skipDedupe: Kz,
                spanContext: uz,
                timestampOverwriteMs: Nz,
                customPayloadTransformer: bz = zz => zz
              } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              try {
                if (!kt(Fz).shouldCapture()) return;
                const wz = Mt(vz),
                  Dz = bz({
                    name: zz,
                    domain: null !== Uz && void 0 !== Uz ? Uz : sz.eventDomain,
                    attributes: qz(wz) ? void 0 : wz,
                    timestamp: Nz ? Dt(Nz) : wt(),
                    trace: uz ? {
                      trace_id: uz.traceId,
                      span_id: uz.spanId
                    } : Xz.getTraceContext()
                  }),
                  gz = {
                    name: Dz.name,
                    attributes: Dz.attributes,
                    domain: Dz.domain
                  };
                if (!Kz && sz.dedupe && !Yz(oz) && Bt(gz, oz)) return void tz.debug("Skipping event push because it is the same as the last one\n", Dz);
                const Hz = oz,
                  Bz = QX(Fz);
                if (oz !== Hz && !Kz && sz.dedupe && Bt(gz, oz)) return;
                oz = gz;
                const Pz = {
                  meta: Bz,
                  payload: Dz,
                  type: "event"
                };
                tz.debug("Pushing event\n", Pz), IW(Oz.getActiveUserAction(), Pz) || Wz.execute(Pz)
              } catch (wz) {
                tz.error("Error pushing event", wz)
              }
            }
          }
        }(vz);
      return Xz = Uz.pushEvent, Et(Et(Et(Et(Et(Et(Et({}, oz), pX(vz)), function(zz) {
        let tz, sz, Fz, Wz, {
          internalLogger: Xz,
          metas: Oz
        } = zz;
        Xz.debug("Initializing meta API");
        const oz = zz => {
            sz && Oz.remove(sz), sz = {
              user: zz
            }, Oz.add(sz)
          },
          vz = (zz, sz) => {
            var Fz;
            const Wz = null === sz || void 0 === sz ? void 0 : sz.overrides,
              Xz = Wz ? {
                overrides: Et(Et({}, null === tz || void 0 === tz || null === (Fz = tz.session) || void 0 === Fz ? void 0 : Fz.overrides), Wz)
              } : {};
            tz && Oz.remove(tz), tz = {
              session: Et(Et({}, qz(zz) ? void 0 : zz), Xz)
            }, Oz.add(tz)
          },
          Uz = (zz, tz) => {
            kt(Oz).notifySessionUpdate({
              type: "replace",
              session: zz,
              overrides: null === tz || void 0 === tz ? void 0 : tz.overrides
            }), vz(zz, tz)
          },
          Kz = () => Oz.value.session,
          uz = () => Oz.value.page;
        return {
          setUser: oz,
          resetUser: oz,
          setSession: Uz,
          resetSession: Uz,
          getSession: Kz,
          setView: (zz, tz) => {
            var sz;
            if ((null === tz || void 0 === tz ? void 0 : tz.overrides) && (kt(Oz).notifySessionUpdate({
                type: "overrides",
                overrides: tz.overrides
              }), vz(Kz(), {
                overrides: tz.overrides
              })), (null === Fz || void 0 === Fz || null === (sz = Fz.view) || void 0 === sz ? void 0 : sz.name) === (null === zz || void 0 === zz ? void 0 : zz.name)) return;
            const Wz = Fz;
            Fz = {
              view: zz
            }, Oz.add(Fz), Wz && Oz.remove(Wz)
          },
          getView: () => Oz.value.view,
          setPage: zz => {
            var tz;
            const sz = xz(zz) ? Et(Et({}, null !== (tz = null === Wz || void 0 === Wz ? void 0 : Wz.page) && void 0 !== tz ? tz : uz()), {}, {
              id: zz
            }) : zz;
            Wz && Oz.remove(Wz), Wz = {
              page: sz
            }, Oz.add(Wz)
          },
          getPage: uz
        }
      }(vz)), function(zz) {
        let {
          internalLogger: tz,
          config: sz,
          metas: Fz,
          transports: Wz,
          tracesApi: Xz,
          userActionsApi: Oz
        } = zz;
        var oz;
        tz.debug("Initializing logs API");
        let vz = null;
        const Uz = null !== (oz = sz.logArgsSerializer) && void 0 !== oz ? oz : As;
        return {
          pushLog: function(zz) {
            let {
              context: oz,
              level: Kz,
              skipDedupe: uz,
              spanContext: Nz,
              timestampOverwriteMs: bz
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!kt(Fz).shouldCapture()) return;
              const wz = Mt(oz),
                Dz = {
                  message: Uz(zz),
                  level: null !== Kz && void 0 !== Kz ? Kz : "log",
                  context: qz(wz) ? void 0 : wz,
                  timestamp: bz ? Dt(bz) : wt(),
                  trace: Nz ? {
                    trace_id: Nz.traceId,
                    span_id: Nz.spanId
                  } : Xz.getTraceContext()
                },
                gz = {
                  message: Dz.message,
                  level: Dz.level,
                  context: Dz.context
                };
              if (!uz && sz.dedupe && !Yz(vz) && Bt(gz, vz)) return void tz.debug("Skipping log push because it is the same as the last one\n", Dz);
              const Hz = vz,
                Bz = QX(Fz);
              if (vz !== Hz && !uz && sz.dedupe && Bt(gz, vz)) return;
              vz = gz;
              const Pz = {
                type: "log",
                payload: Dz,
                meta: Bz
              };
              tz.debug("Pushing log\n", Pz), IW(Oz.getActiveUserAction(), Pz) || Wz.execute(Pz)
            } catch (wz) {
              tz.error("Error pushing log\n", wz)
            }
          }
        }
      }(vz)), function(zz) {
        let {
          internalLogger: tz,
          config: sz,
          metas: Fz,
          transports: Wz,
          tracesApi: Xz,
          userActionsApi: Oz
        } = zz;
        tz.debug("Initializing measurements API");
        let oz = null;
        return {
          pushMeasurement: function(zz) {
            let {
              skipDedupe: vz,
              context: Uz,
              spanContext: Kz,
              timestampOverwriteMs: uz
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!kt(Fz).shouldCapture()) return;
              const Nz = Mt(Uz),
                bz = Et(Et({}, zz), {}, {
                  trace: Kz ? {
                    trace_id: Kz.traceId,
                    span_id: Kz.spanId
                  } : Xz.getTraceContext(),
                  timestamp: uz ? Dt(uz) : wt(),
                  context: qz(Nz) ? void 0 : Nz
                }),
                wz = {
                  type: bz.type,
                  values: bz.values,
                  context: bz.context
                };
              if (!vz && sz.dedupe && !Yz(oz) && Bt(wz, oz)) return void tz.debug("Skipping measurement push because it is the same as the last one\n", bz);
              const Dz = oz,
                gz = QX(Fz);
              if (oz !== Dz && !vz && sz.dedupe && Bt(wz, oz)) return;
              oz = wz;
              const Hz = {
                type: "measurement",
                payload: bz,
                meta: gz
              };
              tz.debug("Pushing measurement\n", Hz), IW(Oz.getActiveUserAction(), Hz) || Wz.execute(Hz)
            } catch (Nz) {
              tz.error("Error pushing measurement\n", Nz)
            }
          }
        }
      }(vz)), Uz), Oz)
    }

    function EX(zz) {
      const tz = qX(zz),
        sz = RX(tz, zz);
      if (wz() && !zz.isolate) return void sz.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
      sz.debug("Initializing");
      const Fz = function(zz, tz) {
          let sz, Fz = [],
            Wz = [],
            Xz = [],
            Oz = 0,
            oz = 0;
          const vz = () => Fz.reduce(((zz, tz) => Object.assign(zz, Zz(tz) ? tz() : tz)), {}),
            Uz = () => {
              if (Wz.length) {
                const zz = vz();
                Wz.forEach((tz => tz(zz)))
              }
            };
          return {
            add: function() {
              for (var zz = arguments.length, sz = new Array(zz), Wz = 0; Wz < zz; Wz++) sz[Wz] = arguments[Wz];
              tz.debug("Adding metas\n", sz), Fz.push(...sz), Uz()
            },
            remove: function() {
              for (var zz = arguments.length, sz = new Array(zz), Wz = 0; Wz < zz; Wz++) sz[Wz] = arguments[Wz];
              tz.debug("Removing metas\n", sz), Fz = Fz.filter((zz => !sz.includes(zz))), Uz()
            },
            addListener: zz => {
              tz.debug("Adding metas listener\n", zz), Wz.push(zz)
            },
            removeListener: zz => {
              tz.debug("Removing metas listener\n", zz), Wz = Wz.filter((tz => tz !== zz))
            },
            capture: zz => {
              var tz;
              const Fz = void 0 !== sz,
                Wz = null !== (tz = sz) && void 0 !== tz ? tz : Xz;
              Fz || (sz = Wz, Oz = 0, oz = Wz.length);
              try {
                for (; Oz < oz;) {
                  const zz = Wz[Oz++];
                  null === zz || void 0 === zz || zz()
                }
                const tz = hX(vz());
                return null === zz || void 0 === zz || zz(), tz
              } finally {
                Fz || (sz = void 0)
              }
            },
            addCaptureListener: zz => {
              Xz.push(zz)
            },
            removeCaptureListener: zz => {
              Xz = Xz.filter((tz => tz !== zz))
            },
            get value() {
              return vz()
            }
          }
        }(0, sz),
        Wz = lX(tz, sz, zz, Fz),
        Xz = fX(tz, sz, zz, Fz, Wz),
        Oz = function(zz, tz, sz, Fz, Wz, Xz) {
          tz.debug("Initializing instrumentations");
          const Oz = [];
          return {
            add: function() {
              tz.debug("Adding instrumentations");
              for (var oz = arguments.length, vz = new Array(oz), Uz = 0; Uz < oz; Uz++) vz[Uz] = arguments[Uz];
              vz.forEach((oz => {
                tz.debug(`Adding "${oz.name}" instrumentation`), Oz.some((zz => zz.name === oz.name)) ? tz.warn(`Instrumentation ${oz.name} is already added`) : (oz.unpatchedConsole = zz, oz.internalLogger = tz, oz.config = sz, oz.metas = Fz, oz.transports = Wz, oz.api = Xz, Oz.push(oz), oz.initialize())
              }))
            },
            get instrumentations() {
              return [...Oz]
            },
            remove: function() {
              tz.debug("Removing instrumentations");
              for (var zz = arguments.length, sz = new Array(zz), Fz = 0; Fz < zz; Fz++) sz[Fz] = arguments[Fz];
              sz.forEach((zz => {
                var sz, Fz;
                tz.debug(`Removing "${zz.name}" instrumentation`);
                const Wz = Oz.reduce(((tz, sz, Fz) => null === tz && sz.name === zz.name ? Fz : null), null);
                null !== Wz ? (null === (sz = (Fz = Oz[Wz]).destroy) || void 0 === sz || sz.call(Fz), Oz.splice(Wz, 1)) : tz.warn(`Instrumentation "${zz.name}" is not added`)
              }))
            }
          }
        }(tz, sz, zz, Fz, Wz, Xz),
        oz = gz(tz, sz, zz, Fz, Wz, Xz, Oz);
      return iX(oz),
        function(zz) {
          zz.transports.add(...zz.config.transports), zz.transports.addBeforeSendHooks(zz.config.beforeSend)
        }(oz),
        function(zz) {
          zz.instrumentations.add(...zz.config.instrumentations)
        }(oz), oz
    }

    function zO(zz) {
      const tz = jX(zz);
      if (tz) return EX(tz)
    }
  },
  6274: function(zz, tz, sz) {
    var Fz;
    ! function(Wz, Xz) {
      var Oz = "function",
        oz = "undefined",
        vz = "object",
        Uz = "string",
        Kz = "major",
        uz = "model",
        Nz = "name",
        bz = "type",
        wz = "vendor",
        Dz = "version",
        gz = "architecture",
        Hz = "console",
        Bz = "mobile",
        Pz = "tablet",
        rz = "smarttv",
        Yz = "wearable",
        xz = "embedded",
        mz = "Amazon",
        Jz = "Apple",
        Iz = "ASUS",
        Cz = "BlackBerry",
        ez = "Browser",
        Zz = "Chrome",
        Gz = "Firefox",
        Tz = "Google",
        cz = "Honor",
        jz = "Huawei",
        Az = "LG",
        yz = "Microsoft",
        Mz = "Motorola",
        dz = "Nvidia",
        hz = "OnePlus",
        Qz = "Opera",
        kz = "OPPO",
        iz = "Samsung",
        Lz = "Sharp",
        lz = "Sony",
        nz = "Xiaomi",
        az = "Zebra",
        qz = "Facebook",
        Sz = "Chromium OS",
        Vz = "Mac OS",
        Rz = " Browser",
        pz = function(zz) {
          for (var tz = {}, sz = 0; sz < zz.length; sz++) tz[zz[sz].toUpperCase()] = zz[sz];
          return tz
        },
        fz = function(zz, tz) {
          return typeof zz === Uz && -1 !== Ez(tz).indexOf(Ez(zz))
        },
        Ez = function(zz) {
          return zz.toLowerCase()
        },
        zt = function(zz, tz) {
          if (typeof zz === Uz) return zz = zz.replace(/^\s\s*/, ""), typeof tz === oz ? zz : zz.substring(0, 500)
        },
        tt = function(zz, tz) {
          for (var sz, Fz, Wz, oz, Uz, Kz, uz = 0; uz < tz.length && !Uz;) {
            var Nz = tz[uz],
              bz = tz[uz + 1];
            for (sz = Fz = 0; sz < Nz.length && !Uz && Nz[sz];)
              if (Uz = Nz[sz++].exec(zz))
                for (Wz = 0; Wz < bz.length; Wz++) Kz = Uz[++Fz], typeof(oz = bz[Wz]) === vz && oz.length > 0 ? 2 === oz.length ? typeof oz[1] == Oz ? this[oz[0]] = oz[1].call(this, Kz) : this[oz[0]] = oz[1] : 3 === oz.length ? typeof oz[1] !== Oz || oz[1].exec && oz[1].test ? this[oz[0]] = Kz ? Kz.replace(oz[1], oz[2]) : Xz : this[oz[0]] = Kz ? oz[1].call(this, Kz, oz[2]) : Xz : 4 === oz.length && (this[oz[0]] = Kz ? oz[3].call(this, Kz.replace(oz[1], oz[2])) : Xz) : this[oz] = Kz || Xz;
            uz += 2
          }
        },
        st = function(zz, tz) {
          for (var sz in tz)
            if (typeof tz[sz] === vz && tz[sz].length > 0) {
              for (var Fz = 0; Fz < tz[sz].length; Fz++)
                if (fz(tz[sz][Fz], zz)) return "?" === sz ? Xz : sz
            } else if (fz(tz[sz], zz)) return "?" === sz ? Xz : sz;
          return tz.hasOwnProperty("*") ? tz["*"] : zz
        },
        Ft = {
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
        Wt = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [Dz, [Nz, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [Dz, [Nz, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [Nz, Dz],
            [/opios[\/ ]+([\w\.]+)/i],
            [Dz, [Nz, Qz + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [Dz, [Nz, Qz + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [Dz, [Nz, Qz]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [Dz, [Nz, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [Dz, [Nz, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
            [Nz, Dz],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [Dz, [Nz, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [Dz, [Nz, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [Dz, [Nz, "UC" + ez]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [Dz, [Nz, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [Dz, [Nz, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [Dz, [Nz, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [Dz, [Nz, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [Dz, [Nz, "Smart Lenovo " + ez]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [Nz, /(.+)/, "$1 Secure " + ez], Dz
            ],
            [/\bfocus\/([\w\.]+)/i],
            [Dz, [Nz, Gz + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [Dz, [Nz, Qz + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [Dz, [Nz, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [Dz, [Nz, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [Dz, [Nz, Qz + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [Dz, [Nz, "MIUI" + Rz]],
            [/fxios\/([\w\.-]+)/i],
            [Dz, [Nz, Gz]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [Dz, [Nz, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [Nz, /(.+)/, "$1Browser"], Dz
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [Nz, /(.+)/, "$1" + Rz], Dz
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [Dz, [Nz, iz + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [Dz, [Nz, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [Nz, "Sogou Mobile"], Dz
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [Nz, Dz],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [Nz],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [Dz, Nz],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [Nz, qz], Dz
            ],
            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
            [Nz, Dz],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [Dz, [Nz, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [Dz, [Nz, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [Dz, [Nz, Zz + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [Nz, Zz + " WebView"], Dz
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [Dz, [Nz, "Android " + ez]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [Nz, Dz],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [Dz, [Nz, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [Dz, Nz],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [Nz, [Dz, st, {
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
            [Nz, Dz],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [Nz, "Netscape"], Dz
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [Nz, Dz],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [Dz, [Nz, Gz + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [Nz, [Dz, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [Nz, [Dz, /master.|lts./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [gz, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [gz, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [gz, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [gz, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [gz, "arm"]
            ],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [
              [gz, /ower/, "", Ez]
            ],
            [/ sun4\w[;\)]/i],
            [
              [gz, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
            [
              [gz, Ez]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [uz, [wz, iz],
              [bz, Pz]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
            [uz, [wz, iz],
              [bz, Bz]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [uz, [wz, Jz],
              [bz, Bz]
            ],
            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
            [uz, [wz, Jz],
              [bz, Pz]
            ],
            [/(macintosh);/i],
            [uz, [wz, Jz]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [uz, [wz, Lz],
              [bz, Bz]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [uz, [wz, cz],
              [bz, Pz]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [uz, [wz, cz],
              [bz, Bz]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [uz, [wz, jz],
              [bz, Pz]
            ],
            [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
            [uz, [wz, jz],
              [bz, Bz]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [uz, /_/g, " "],
              [wz, nz],
              [bz, Pz]
            ],
            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [uz, /_/g, " "],
              [wz, nz],
              [bz, Bz]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [uz, [wz, kz],
              [bz, Bz]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [uz, [wz, st, {
                OnePlus: ["304", "403", "203"],
                "*": kz
              }],
              [bz, Pz]
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [uz, [wz, "Vivo"],
              [bz, Bz]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [uz, [wz, "Realme"],
              [bz, Bz]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
            [uz, [wz, Mz],
              [bz, Bz]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [uz, [wz, Mz],
              [bz, Pz]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [uz, [wz, Az],
              [bz, Pz]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
            [uz, [wz, Az],
              [bz, Bz]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [uz, [wz, "Lenovo"],
              [bz, Pz]
            ],
            [/(nokia) (t[12][01])/i],
            [wz, uz, [bz, Pz]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
            [
              [uz, /_/g, " "],
              [bz, Bz],
              [wz, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [uz, [wz, Tz],
              [bz, Pz]
            ],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [uz, [wz, Tz],
              [bz, Bz]
            ],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [uz, [wz, lz],
              [bz, Bz]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [uz, "Xperia Tablet"],
              [wz, lz],
              [bz, Pz]
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [uz, [wz, hz],
              [bz, Bz]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [uz, [wz, mz],
              [bz, Pz]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [uz, /(.+)/g, "Fire Phone $1"],
              [wz, mz],
              [bz, Bz]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [uz, wz, [bz, Pz]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [uz, [wz, Cz],
              [bz, Bz]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [uz, [wz, Iz],
              [bz, Pz]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [uz, [wz, Iz],
              [bz, Bz]
            ],
            [/(nexus 9)/i],
            [uz, [wz, "HTC"],
              [bz, Pz]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [wz, [uz, /_/g, " "],
              [bz, Bz]
            ],
            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
            [uz, [wz, "TCL"],
              [bz, Pz]
            ],
            [/(itel) ((\w+))/i],
            [
              [wz, Ez], uz, [bz, st, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [uz, [wz, "Acer"],
              [bz, Pz]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [uz, [wz, "Meizu"],
              [bz, Bz]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [uz, [wz, "Ulefone"],
              [bz, Bz]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [uz, [wz, "Energizer"],
              [bz, Bz]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [uz, [wz, "Cat"],
              [bz, Bz]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [uz, [wz, "Smartfren"],
              [bz, Bz]
            ],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [uz, [wz, "Nothing"],
              [bz, Bz]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [uz, [wz, "Archos"],
              [bz, Pz]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [uz, [wz, "Archos"],
              [bz, Bz]
            ],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [wz, uz, [bz, Pz]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
            [wz, uz, [bz, Bz]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [wz, uz, [bz, Pz]],
            [/(surface duo)/i],
            [uz, [wz, yz],
              [bz, Pz]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [uz, [wz, "Fairphone"],
              [bz, Bz]
            ],
            [/(u304aa)/i],
            [uz, [wz, "AT&T"],
              [bz, Bz]
            ],
            [/\bsie-(\w*)/i],
            [uz, [wz, "Siemens"],
              [bz, Bz]
            ],
            [/\b(rct\w+) b/i],
            [uz, [wz, "RCA"],
              [bz, Pz]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [uz, [wz, "Dell"],
              [bz, Pz]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [uz, [wz, "Verizon"],
              [bz, Pz]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [uz, [wz, "Barnes & Noble"],
              [bz, Pz]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [uz, [wz, "NuVision"],
              [bz, Pz]
            ],
            [/\b(k88) b/i],
            [uz, [wz, "ZTE"],
              [bz, Pz]
            ],
            [/\b(nx\d{3}j) b/i],
            [uz, [wz, "ZTE"],
              [bz, Bz]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [uz, [wz, "Swiss"],
              [bz, Bz]
            ],
            [/\b(zur\d{3}) b/i],
            [uz, [wz, "Swiss"],
              [bz, Pz]
            ],
            [/\b((zeki)?tb.*\b) b/i],
            [uz, [wz, "Zeki"],
              [bz, Pz]
            ],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [
              [wz, "Dragon Touch"], uz, [bz, Pz]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [uz, [wz, "Insignia"],
              [bz, Pz]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [uz, [wz, "NextBook"],
              [bz, Pz]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
              [wz, "Voice"], uz, [bz, Bz]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
              [wz, "LvTel"], uz, [bz, Bz]
            ],
            [/\b(ph-1) /i],
            [uz, [wz, "Essential"],
              [bz, Bz]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [uz, [wz, "Envizen"],
              [bz, Pz]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [uz, [wz, "MachSpeed"],
              [bz, Pz]
            ],
            [/\btu_(1491) b/i],
            [uz, [wz, "Rotor"],
              [bz, Pz]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [uz, [wz, dz],
              [bz, Pz]
            ],
            [/(sprint) (\w+)/i],
            [wz, uz, [bz, Bz]],
            [/(kin\.[onetw]{3})/i],
            [
              [uz, /\./g, " "],
              [wz, yz],
              [bz, Bz]
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [uz, [wz, az],
              [bz, Pz]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [uz, [wz, az],
              [bz, Bz]
            ],
            [/smart-tv.+(samsung)/i],
            [wz, [bz, rz]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [uz, /^/, "SmartTV"],
              [wz, iz],
              [bz, rz]
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [wz, Az],
              [bz, rz]
            ],
            [/(apple) ?tv/i],
            [wz, [uz, Jz + " TV"],
              [bz, rz]
            ],
            [/crkey/i],
            [
              [uz, Zz + "cast"],
              [wz, Tz],
              [bz, rz]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [uz, [wz, mz],
              [bz, rz]
            ],
            [/(shield \w+ tv)/i],
            [uz, [wz, dz],
              [bz, rz]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [uz, [wz, Lz],
              [bz, rz]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [uz, [wz, lz],
              [bz, rz]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [uz, [wz, nz],
              [bz, rz]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [wz, uz, [bz, rz]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [wz, zt],
              [uz, zt],
              [bz, rz]
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [uz, [bz, rz]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [
              [bz, rz]
            ],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [wz, uz, [bz, Hz]],
            [/droid.+; (shield)( bui|\))/i],
            [uz, [wz, dz],
              [bz, Hz]
            ],
            [/(playstation \w+)/i],
            [uz, [wz, lz],
              [bz, Hz]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [uz, [wz, yz],
              [bz, Hz]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [uz, [wz, iz],
              [bz, Yz]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [wz, uz, [bz, Yz]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [uz, [wz, kz],
              [bz, Yz]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [uz, [wz, Jz],
              [bz, Yz]
            ],
            [/(opwwe\d{3})/i],
            [uz, [wz, hz],
              [bz, Yz]
            ],
            [/(moto 360)/i],
            [uz, [wz, Mz],
              [bz, Yz]
            ],
            [/(smartwatch 3)/i],
            [uz, [wz, lz],
              [bz, Yz]
            ],
            [/(g watch r)/i],
            [uz, [wz, Az],
              [bz, Yz]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [uz, [wz, az],
              [bz, Yz]
            ],
            [/droid.+; (glass) \d/i],
            [uz, [wz, Tz],
              [bz, Yz]
            ],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [wz, uz, [bz, Yz]],
            [/; (quest( \d| pro)?)/i],
            [uz, [wz, qz],
              [bz, Yz]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [wz, [bz, xz]],
            [/(aeobc)\b/i],
            [uz, [wz, mz],
              [bz, xz]
            ],
            [/(homepod).+mac os/i],
            [uz, [wz, Jz],
              [bz, xz]
            ],
            [/windows iot/i],
            [
              [bz, xz]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [uz, [bz, Bz]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [uz, [bz, Pz]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [bz, Pz]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [bz, Bz]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [uz, [wz, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [Dz, [Nz, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [Nz, Dz],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [Dz, [Nz, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [Nz, Dz],
            [/ladybird\//i],
            [
              [Nz, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [Dz, Nz]
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [Nz, Dz],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [Nz, [Dz, st, Ft]],
            [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [Dz, st, Ft],
              [Nz, "Windows"]
            ],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [Dz, /_/g, "."],
              [Nz, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
              [Nz, Vz],
              [Dz, /_/g, "."]
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [Dz, Nz],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [Nz, /(.+)/, "$1 Touch"], Dz
            ],
            [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
            [Nz, Dz],
            [/\(bb(10);/i],
            [Dz, [Nz, Cz]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [Dz, [Nz, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [Dz, [Nz, Gz + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [Dz, [Nz, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [Dz, [Nz, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [Dz, [Nz, Zz + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [Nz, Sz], Dz
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
            [Nz, Dz],
            [/(sunos) ?([\w\.\d]*)/i],
            [
              [Nz, "Solaris"], Dz
            ],
            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [Nz, Dz]
          ]
        },
        Xt = function(zz, tz) {
          if (typeof zz === vz && (tz = zz, zz = Xz), !(this instanceof Xt)) return new Xt(zz, tz).getResult();
          var sz = typeof Wz !== oz && Wz.navigator ? Wz.navigator : Xz,
            Fz = zz || (sz && sz.userAgent ? sz.userAgent : ""),
            Hz = sz && sz.userAgentData ? sz.userAgentData : Xz,
            rz = tz ? function(zz, tz) {
              var sz = {};
              for (var Fz in zz) tz[Fz] && tz[Fz].length % 2 === 0 ? sz[Fz] = tz[Fz].concat(zz[Fz]) : sz[Fz] = zz[Fz];
              return sz
            }(Wt, tz) : Wt,
            Yz = sz && sz.userAgent == Fz;
          return this.getBrowser = function() {
            var zz, tz = {};
            return tz[Nz] = Xz, tz[Dz] = Xz, tt.call(tz, Fz, rz.browser), tz[Kz] = typeof(zz = tz[Dz]) === Uz ? zz.replace(/[^\d\.]/g, "").split(".")[0] : Xz, Yz && sz && sz.brave && typeof sz.brave.isBrave == Oz && (tz[Nz] = "Brave"), tz
          }, this.getCPU = function() {
            var zz = {};
            return zz[gz] = Xz, tt.call(zz, Fz, rz.cpu), zz
          }, this.getDevice = function() {
            var zz = {};
            return zz[wz] = Xz, zz[uz] = Xz, zz[bz] = Xz, tt.call(zz, Fz, rz.device), Yz && !zz[bz] && Hz && Hz.mobile && (zz[bz] = Bz), Yz && "Macintosh" == zz[uz] && sz && typeof sz.standalone !== oz && sz.maxTouchPoints && sz.maxTouchPoints > 2 && (zz[uz] = "iPad", zz[bz] = Pz), zz
          }, this.FD = function() {
            var zz = {};
            return zz[Nz] = Xz, zz[Dz] = Xz, tt.call(zz, Fz, rz.engine), zz
          }, this.getOS = function() {
            var zz = {};
            return zz[Nz] = Xz, zz[Dz] = Xz, tt.call(zz, Fz, rz.os), Yz && !zz[Nz] && Hz && Hz.platform && "Unknown" != Hz.platform && (zz[Nz] = Hz.platform.replace(/chrome os/i, Sz).replace(/macos/i, Vz)), zz
          }, this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.FD(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function() {
            return Fz
          }, this.setUA = function(zz) {
            return Fz = typeof zz === Uz && zz.length > 500 ? zt(zz, 500) : zz, this
          }, this.setUA(Fz), this
        };
      Xt.VERSION = "1.0.41", Xt.BROWSER = pz([Nz, Dz, Kz]), Xt.CPU = pz([gz]), Xt.DEVICE = pz([uz, wz, bz, Hz, Bz, rz, Pz, Yz, xz]), Xt.ENGINE = Xt.OS = pz([Nz, Dz]), typeof tz !== oz ? (zz.exports && (tz = zz.exports = Xt), tz.UAParser = Xt) : sz.amdO ? (Fz = function() {
        return Xt
      }.call(tz, sz, tz, zz)) === Xz || (zz.exports = Fz) : typeof Wz !== oz && (Wz.UAParser = Xt);
      var Ot = typeof Wz !== oz && (Wz.jQuery || Wz.Zepto);
      if (Ot && !Ot.ua) {
        var ot = new Xt;
        Ot.ua = ot.getResult(), Ot.ua.get = function() {
          return ot.getUA()
        }, Ot.ua.set = function(zz) {
          ot.setUA(zz);
          var tz = ot.getResult();
          for (var sz in tz) Ot.ua[sz] = tz[sz]
        }
      }
    }("object" === typeof window ? window : this)
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);