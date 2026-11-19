export const id = 31;
export const ids = [31];
export const modules = {
  6422: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      BaseExtension: () => zb,
      BaseInstrumentation: () => ub,
      BaseTransport: () => zi,
      CSPInstrumentation: () => An,
      ConsoleInstrumentation: () => Gb,
      ConsoleTransport: () => ii,
      EVENT_CLICK: () => fu,
      EVENT_NAVIGATION: () => su,
      EVENT_ROUTE_CHANGE: () => Ju,
      EVENT_SESSION_EXTEND: () => vu,
      EVENT_SESSION_RESUME: () => Nu,
      EVENT_SESSION_START: () => ou,
      EVENT_VIEW_CHANGED: () => ru,
      ErrorsInstrumentation: () => Vb,
      FetchTransport: () => vi,
      InternalLoggerLevel: () => Qu,
      LogLevel: () => fb,
      MAX_SESSION_PERSISTENCE_TIME: () => tz,
      NavigationInstrumentation: () => Dn,
      Observable: () => Xb,
      PerformanceInstrumentation: () => eE,
      PersistentSessionsManager: () => hu,
      SESSION_EXPIRATION_TIME: () => iz,
      SESSION_INACTIVITY_TIME: () => lz,
      STORAGE_KEY: () => nz,
      SessionInstrumentation: () => Eb,
      TransportItemType: () => ui,
      UserActionInstrumentation: () => Jn,
      UserActionState: () => Kn,
      VERSION: () => bb,
      ViewInstrumentation: () => qb,
      VolatileSessionsManager: () => Uu,
      WebVitalsInstrumentation: () => aE,
      allLogLevels: () => rb,
      browserMeta: () => Bn,
      buildStackFrame: () => nb,
      captureMetas: () => Si,
      createInternalLogger: () => Li,
      createPromiseBuffer: () => Ki,
      createSession: () => Yn,
      deepEqual: () => Xu,
      defaultEventDomain: () => Ez,
      defaultExceptionType: () => xb,
      defaultGlobalObjectKey: () => Pi,
      defaultInternalLoggerLevel: () => eu,
      defaultLogLevel: () => sb,
      faro: () => Rz,
      genShortID: () => wu,
      getCurrentTimestamp: () => Zu,
      getDataFromSafariExtensions: () => db,
      getIgnoreUrls: () => jz,
      getInternalFaroFromGlobalObject: () => dz,
      getStackFramesFromError: () => Zb,
      getTransportBody: () => ni,
      getUrlFromResource: () => Bz,
      getWebInstrumentations: () => Qn,
      globalObject: () => Oz,
      initializeFaro: () => bl,
      internalGlobalObjectKey: () => pz,
      isArray: () => Lz,
      isBoolean: () => xz,
      isDomError: () => cz,
      isDomException: () => gz,
      isElement: () => yz,
      isElementDefined: () => Sz,
      aZ: () => ez,
      isError: () => hz,
      isErrorDefined: () => qz,
      isErrorEvent: () => Uz,
      isEvent: () => mz,
      isEventDefined: () => Vz,
      isFunction: () => Tz,
      isInstanceOf: () => fz,
      isInt: () => vz,
      isInternalFaroOnGlobalObject: () => Zz,
      isMap: () => Qz,
      isMapDefined: () => Dz,
      isNull: () => rz,
      isNumber: () => Nz,
      isObject: () => Az,
      isPrimitive: () => az,
      isRegExp: () => Pz,
      isString: () => oz,
      isSymbol: () => Jz,
      isSyntheticEvent: () => Wz,
      isThenable: () => Gz,
      isToString: () => Xz,
      isTypeof: () => wz,
      isUndefined: () => sz,
      makeCoreConfig: () => Vi,
      noop: () => Du,
      osMeta: () => Cn,
      parseStacktrace: () => Rb,
      sdkMeta: () => kn,
      setInternalFaroOnGlobalObject: () => Fz,
      transportItemTypeToBodyKey: () => bi,
      unknownString: () => mb,
      userActionDataAttribute: () => jE,
      userActionTimeoutDataAttribute: () => IE
    });
    const Ez = "browser",
      nz = "com.grafana.faro.session",
      iz = 144e5,
      lz = 9e5,
      Mz = 1e3,
      tz = lz,
      Hz = {
        enabled: !0,
        persistent: !1,
        maxSessionPersistenceTime: tz
      };
    const Oz = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof bz.g ? bz.g : "undefined" !== typeof self ? self : void 0;
    const pz = "_faroInternal";

    function dz() {
      return Oz[pz]
    }

    function Fz(zz) {
      zz.config.isolate ? zz.internalLogger.debug("Skipping registering internal Faro instance on global object") : (zz.internalLogger.debug("Registering internal Faro instance on global object"), Object.defineProperty(Oz, pz, {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: zz
      }))
    }

    function Zz() {
      return pz in Oz
    }
    let Rz = {
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

    function Kz(zz, uz, bz, Ez, nz, iz, lz) {
      return uz.debug("Initializing Faro"), Rz = {
          api: iz,
          config: bz,
          instrumentations: lz,
          internalLogger: uz,
          metas: Ez,
          pause: nz.pause,
          transports: nz,
          unpatchedConsole: zz,
          unpause: nz.unpause
        }, Fz(Rz),
        function(zz) {
          if (zz.config.preventGlobalExposure) zz.internalLogger.debug("Skipping registering public Faro instance in the global scope");
          else {
            if (zz.internalLogger.debug(`Registering public faro reference in the global scope using "${zz.config.globalObjectKey}" key`), zz.config.globalObjectKey in Oz) return void zz.internalLogger.warn(`Skipping global registration due to key "${zz.config.globalObjectKey}" being used already. Please set "globalObjectKey" to something else or set "preventGlobalExposure" to "true"`);
            Object.defineProperty(Oz, zz.config.globalObjectKey, {
              configurable: !1,
              writable: !1,
              value: zz
            })
          }
        }(Rz), Rz
    }

    function wz(zz, uz) {
      return typeof zz === uz
    }

    function Xz(zz, uz) {
      return Object.prototype.toString.call(zz) === `[object ${uz}]`
    }

    function fz(zz, uz) {
      try {
        return zz instanceof uz
      } catch (bz) {
        return !1
      }
    }
    const sz = zz => wz(zz, "undefined"),
      rz = zz => wz(zz, "null"),
      oz = zz => wz(zz, "string"),
      Nz = zz => wz(zz, "number") && !isNaN(zz) || wz(zz, "bigint"),
      vz = zz => Nz(zz) && Number.isInteger(zz),
      xz = zz => wz(zz, "boolean"),
      Jz = zz => wz(zz, "symbol"),
      Az = zz => !rz(zz) && wz(zz, "object"),
      Tz = zz => wz(zz, "function"),
      Lz = zz => Xz(zz, "Array"),
      Pz = zz => Xz(zz, "RegExp"),
      Gz = zz => Tz(null === zz || void 0 === zz ? void 0 : zz.then),
      az = zz => !Az(zz) && !Tz(zz),
      Vz = "undefined" !== typeof Event,
      mz = zz => Vz && fz(zz, Event),
      qz = "undefined" !== typeof Error,
      hz = zz => qz && fz(zz, Error),
      Uz = zz => Xz(zz, "ErrorEvent"),
      cz = zz => Xz(zz, "DOMError"),
      gz = zz => Xz(zz, "DOMException"),
      Sz = "undefined" !== typeof Element,
      yz = zz => Sz && fz(zz, Element),
      Dz = "undefined" !== typeof Map,
      Qz = zz => Dz && fz(zz, Map),
      Wz = zz => Az(zz) && "nativeEvent" in zz && "preventDefault" in zz && "stopPropagation" in zz;

    function ez(zz) {
      return null == zz || (Lz(zz) || oz(zz) ? 0 === zz.length : !!Az(zz) && 0 === Object.keys(zz).length)
    }

    function jz() {
      return Rz.transports.transports.flatMap((zz => zz.getIgnoreUrls()))
    }

    function Iz() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return jz().some((uz => zz && null != zz.match(uz)))
    }

    function Bz(zz) {
      return oz(zz) ? zz : zz instanceof URL ? zz.href : !ez(zz) && Tz(null === zz || void 0 === zz ? void 0 : zz.toString) ? zz.toString() : void 0
    }
    const Cz = "sessionStorage",
      Yz = "localStorage";

    function kz(zz) {
      try {
        let uz;
        uz = window[zz];
        const bz = "__faro_storage_test__";
        return uz.setItem(bz, bz), uz.removeItem(bz), !0
      } catch (bz) {
        var uz;
        return null === (uz = Rz.internalLogger) || void 0 === uz || uz.info(`Web storage of type ${zz} is not available. Reason: ${bz}`), !1
      }
    }

    function zu(zz, uz) {
      return iu(uz) ? window[uz].getItem(zz) : null
    }

    function uu(zz, uz, bz) {
      if (iu(bz)) try {
        window[bz].setItem(zz, uz)
      } catch (Ez) {}
    }

    function bu(zz, uz) {
      iu(uz) && window[uz].removeItem(zz)
    }
    const Eu = kz(Yz),
      nu = kz(Cz);

    function iu(zz) {
      return zz === Yz ? Eu : zz === Cz && nu
    }

    function lu(zz) {
      return lu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(zz) {
        return typeof zz
      } : function(zz) {
        return zz && "function" == typeof Symbol && zz.constructor === Symbol && zz !== Symbol.prototype ? "symbol" : typeof zz
      }, lu(zz)
    }

    function Mu(zz) {
      var uz = function(zz, uz) {
        if ("object" != lu(zz) || !zz) return zz;
        var bz = zz[Symbol.toPrimitive];
        if (void 0 !== bz) {
          var Ez = bz.call(zz, uz || "default");
          if ("object" != lu(Ez)) return Ez;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === uz ? String : Number)(zz)
      }(zz, "string");
      return "symbol" == lu(uz) ? uz : uz + ""
    }

    function tu(zz, uz, bz) {
      return (uz = Mu(uz)) in zz ? Object.defineProperty(zz, uz, {
        value: bz,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : zz[uz] = bz, zz
    }

    function Hu(zz, uz) {
      var bz = Object.keys(zz);
      if (Object.getOwnPropertySymbols) {
        var Ez = Object.getOwnPropertySymbols(zz);
        uz && (Ez = Ez.filter((function(uz) {
          return Object.getOwnPropertyDescriptor(zz, uz).enumerable
        }))), bz.push.apply(bz, Ez)
      }
      return bz
    }

    function Ou(zz) {
      for (var uz = 1; uz < arguments.length; uz++) {
        var bz = null != arguments[uz] ? arguments[uz] : {};
        uz % 2 ? Hu(Object(bz), !0).forEach((function(uz) {
          tu(zz, uz, bz[uz])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(zz, Object.getOwnPropertyDescriptors(bz)) : Hu(Object(bz)).forEach((function(uz) {
          Object.defineProperty(zz, uz, Object.getOwnPropertyDescriptor(bz, uz))
        }))
      }
      return zz
    }

    function pu() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rz;
      var uz, bz, Ez;
      const nz = zz.config.sessionTracking,
        iz = null !== (uz = null !== (bz = null === nz || void 0 === nz || null === (Ez = nz.sampler) || void 0 === Ez ? void 0 : Ez.call(nz, {
          metas: zz.metas.value
        })) && void 0 !== bz ? bz : null === nz || void 0 === nz ? void 0 : nz.samplingRate) && void 0 !== uz ? uz : 1,
        lz = "number" === typeof iz ? function(zz) {
          return Math.min(1, Math.max(0, zz))
        }(iz) : 0;
      if (!(lz > 0)) return !1;
      if (1 === lz) return !0;
      try {
        const zz = "undefined" !== typeof window ? window.crypto : void 0;
        if ("function" === typeof(null === zz || void 0 === zz ? void 0 : zz.getRandomValues)) {
          const uz = new Uint32Array(1);
          return zz.getRandomValues(uz), uz[0] / Math.pow(2, 32) < lz
        }
      } catch (Mz) {}
      return Math.random() < lz
    }

    function du() {
      return Date.now()
    }

    function Fu() {
      return "undefined" !== typeof performance && "function" === typeof performance.now ? performance.now() : Date.now()
    }

    function Zu() {
      return (new Date).toISOString()
    }

    function Ru(zz) {
      return new Date(zz).toISOString()
    }
    const Ku = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

    function wu() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      const uz = new Uint32Array(zz),
        bz = "undefined" !== typeof globalThis ? globalThis.crypto : void 0;
      if (null === bz || void 0 === bz ? void 0 : bz.getRandomValues) bz.getRandomValues(uz);
      else
        for (let nz = 0; nz < zz; nz++) uz[nz] = Math.floor(4294967296 * Math.random());
      let Ez = "";
      for (let nz = 0; nz < zz; nz++) Ez += Ku[uz[nz] % 59];
      return Ez
    }

    function Xu(zz, uz) {
      if (zz === uz) return !0;
      if (wz(zz, "number") && isNaN(zz)) return wz(uz, "number") && isNaN(uz);
      const bz = Lz(zz),
        Ez = Lz(uz);
      if (bz !== Ez) return !1;
      if (bz && Ez) {
        const bz = zz.length;
        if (bz !== uz.length) return !1;
        for (let Ez = bz; 0 !== Ez--;)
          if (!Xu(zz[Ez], uz[Ez])) return !1;
        return !0
      }
      const nz = Az(zz),
        iz = Az(uz);
      if (nz !== iz) return !1;
      if (zz && uz && nz && iz) {
        const bz = Object.keys(zz),
          Ez = Object.keys(uz);
        if (bz.length !== Ez.length) return !1;
        for (let zz of bz)
          if (!Ez.includes(zz)) return !1;
        for (let nz of bz)
          if (!Xu(zz[nz], uz[nz])) return !1;
        return !0
      }
      return !1
    }
    const fu = "click",
      su = "navigation",
      ru = "view_changed",
      ou = "session_start",
      Nu = "session_resume",
      vu = "session_extend",
      xu = "service_name_override",
      Ju = "route_change";

    function Au() {
      let {
        sessionId: zz,
        started: uz,
        lastActivity: bz,
        isSampled: Ez = !0
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, nz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Rz;
      var iz;
      const lz = du(),
        Mz = null === (iz = nz.config) || void 0 === iz || null === (iz = iz.sessionTracking) || void 0 === iz ? void 0 : iz.generateSessionId;
      return null == zz && (zz = "function" === typeof Mz ? Mz() : wu()), {
        sessionId: zz,
        lastActivity: null !== bz && void 0 !== bz ? bz : lz,
        started: null !== uz && void 0 !== uz ? uz : lz,
        isSampled: Ez
      }
    }

    function Tu(zz) {
      if (null == zz) return !1;
      const uz = du();
      return uz - zz.started < 144e5 && uz - zz.lastActivity < lz
    }

    function Lu(zz) {
      let {
        fetchUserSession: uz,
        storeUserSession: bz,
        adoptSession: Ez,
        updateInterval: nz = 0
      } = zz, Mz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Rz, tz = 0;
      return function() {
        let {
          forceSessionExtend: zz = !1,
          refreshActivity: Hz = !0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var Oz, pz;
        if (!uz || !bz) return;
        const dz = du();
        if (!zz && dz < tz && tz - dz <= nz) return;
        const Fz = Mz.config.sessionTracking,
          Zz = null === Fz || void 0 === Fz ? void 0 : Fz.persistent;
        if (Zz && !Eu || !Zz && !nu) return;
        const Rz = uz();
        if (tz = Math.min(dz + nz, (null !== (Oz = null === Rz || void 0 === Rz ? void 0 : Rz.started) && void 0 !== Oz ? Oz : dz) + iz, (null !== (pz = null === Rz || void 0 === Rz ? void 0 : Rz.lastActivity) && void 0 !== pz ? pz : dz) + lz), !1 === zz && Tu(Rz)) {
          var Kz;
          Hz && bz(Ou(Ou({}, Rz), {}, {
            lastActivity: dz
          }));
          const zz = null === (Kz = Mz.metas.value.session) || void 0 === Kz ? void 0 : Kz.id;
          null != Ez && null != Rz.sessionMeta && Rz.sessionId !== zz && Ez(Rz.sessionMeta)
        } else {
          var wz, Xz, fz;
          let zz = Gu(Au({
            isSampled: pu(Mz)
          }, Mz), Rz, Mz);
          tz = dz + nz, bz(zz), null === (wz = Mz.api) || void 0 === wz || wz.setSession(zz.sessionMeta), null === Fz || void 0 === Fz || null === (Xz = Fz.onSessionChange) || void 0 === Xz || Xz.call(Fz, null !== (fz = null === Rz || void 0 === Rz ? void 0 : Rz.sessionMeta) && void 0 !== fz ? fz : null, zz.sessionMeta)
        }
      }
    }

    function Pu(zz) {
      let uz, {
          fetchUserSession: bz,
          storeUserSession: Ez,
          updateInterval: nz = 0
        } = zz,
        iz = 0;
      return zz => {
        const lz = du();
        if (zz === uz && lz < iz && iz - lz <= nz) return;
        uz = zz, iz = lz + nz;
        const Mz = bz();
        (null === Mz || void 0 === Mz ? void 0 : Mz.sessionId) === zz && Tu(Mz) && Ez(Ou(Ou({}, Mz), {}, {
          lastActivity: lz
        }))
      }
    }

    function Gu(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Rz;
      var Ez, nz, iz, lz, Mz, tz;
      const Hz = Ou(Ou({}, zz), {}, {
          sessionMeta: {
            id: zz.sessionId,
            attributes: Vu(Ou(Ou(Ou({}, null === (Ez = bz.config.sessionTracking) || void 0 === Ez || null === (Ez = Ez.session) || void 0 === Ez ? void 0 : Ez.attributes), null !== (nz = null === (iz = bz.metas.value.session) || void 0 === iz ? void 0 : iz.attributes) && void 0 !== nz ? nz : {}), {}, {
              isSampled: zz.isSampled.toString()
            }))
          }
        }),
        Oz = null !== (lz = null === (Mz = bz.metas.value.session) || void 0 === Mz ? void 0 : Mz.overrides) && void 0 !== lz ? lz : null === uz || void 0 === uz || null === (tz = uz.sessionMeta) || void 0 === tz ? void 0 : tz.overrides;
      ez(Oz) || (Hz.sessionMeta.overrides = Oz);
      const pz = null === uz || void 0 === uz ? void 0 : uz.sessionId;
      return null != pz && (Hz.sessionMeta.attributes.previousSession = pz), Hz
    }

    function au(zz) {
      let {
        fetchUserSession: uz,
        storeUserSession: bz
      } = zz, Ez = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Rz, nz = !1;
      return function(zz) {
        if (nz) return;
        const iz = zz.session,
          lz = uz();
        let Mz = null === iz || void 0 === iz ? void 0 : iz.id;
        const tz = null === iz || void 0 === iz ? void 0 : iz.attributes,
          Hz = null === iz || void 0 === iz ? void 0 : iz.overrides,
          Oz = null === lz || void 0 === lz ? void 0 : lz.sessionMeta,
          pz = null === Oz || void 0 === Oz ? void 0 : Oz.overrides,
          dz = !!Hz && !Xu(Hz, pz),
          Fz = !!tz && !Xu(tz, null === Oz || void 0 === Oz ? void 0 : Oz.attributes);
        if (iz && Mz !== (null === lz || void 0 === lz ? void 0 : lz.sessionId) || Fz || dz) {
          var Zz, Rz;
          const zz = null != lz && Mz === lz.sessionId,
            uz = Gu(zz ? lz : Au({
              sessionId: Mz,
              isSampled: pu(Ez)
            }, Ez), lz, Ez),
            iz = null === lz || void 0 === lz || null === (Zz = lz.sessionMeta) || void 0 === Zz || null === (Zz = Zz.attributes) || void 0 === Zz ? void 0 : Zz.previousSession;
          zz && null != iz && iz !== uz.sessionId && (uz.sessionMeta.attributes.previousSession = iz), (null === (Rz = uz.sessionMeta.attributes) || void 0 === Rz ? void 0 : Rz.previousSession) === uz.sessionId && delete uz.sessionMeta.attributes.previousSession, bz(uz),
            function(zz, uz) {
              let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              var nz, iz, lz;
              if (!uz) return;
              const Mz = bz.serviceName,
                tz = null !== (nz = null !== (iz = Ez.serviceName) && void 0 !== iz ? iz : null === (lz = zz.metas.value.app) || void 0 === lz ? void 0 : lz.name) && void 0 !== nz ? nz : "";
              Mz && Mz !== tz && zz.api.pushEvent(xu, {
                serviceName: Mz,
                previousServiceName: tz
              })
            }(Ez, dz, Hz, pz), nz = !0;
          try {
            Ez.api.setSession(uz.sessionMeta)
          } finally {
            nz = !1
          }
        }
      }
    }

    function Vu(zz) {
      const uz = {};
      for (const bz of Object.keys(zz)) {
        const Ez = zz[bz];
        void 0 !== Ez && (uz[bz] = Ez)
      }
      return uz
    }

    function mu() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return JSON.stringify(null !== zz && void 0 !== zz ? zz : {}, function() {
        const zz = new WeakSet;
        return function(uz, bz) {
          if (Az(bz) && null !== bz) {
            if (zz.has(bz)) return null;
            zz.add(bz)
          }
          return bz
        }
      }())
    }

    function qu() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const uz = {};
      for (const [bz, Ez] of Object.entries(zz)) uz[bz] = Az(Ez) && null !== Ez ? mu(Ez) : String(Ez);
      return uz
    }
    var hu = class zz {
      constructor() {
        var uz = this;
        let bz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rz;
        this.context = bz, this.adopting = !1, this.isAdopting = () => this.adopting, this.adoptSession = zz => {
          this.adopting = !0;
          try {
            var uz;
            null === (uz = this.context.api) || void 0 === uz || uz.setSession(zz)
          } finally {
            this.adopting = !1
          }
        }, this.updateSession = function() {
          let {
            refreshActivity: zz = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return uz.updateUserSession({
            refreshActivity: zz
          })
        }, this.recordActivity = Pu({
          fetchUserSession: zz.fetchUserSession,
          storeUserSession: zz.storeUserSession,
          updateInterval: Mz
        }), this.updateUserSession = Lu({
          fetchUserSession: zz.fetchUserSession,
          storeUserSession: zz.storeUserSession,
          adoptSession: this.adoptSession,
          updateInterval: Mz
        }, bz), this.init()
      }
      static removeUserSession() {
        bu(nz, zz.storageTypeLocal)
      }
      static storeUserSession(uz) {
        uu(nz, mu(uz), zz.storageTypeLocal)
      }
      static fetchUserSession() {
        const uz = zu(nz, zz.storageTypeLocal);
        return uz ? JSON.parse(uz) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var zz;
            this.updateSession({
              refreshActivity: !1
            });
            const uz = null === (zz = this.context.api) || void 0 === zz || null === (zz = zz.getSession()) || void 0 === zz ? void 0 : zz.id;
            uz && this.recordActivity(uz)
          }
        })), this.context.metas.addListener(au({
          fetchUserSession: zz.fetchUserSession,
          storeUserSession: zz.storeUserSession
        }, this.context))
      }
    };
    hu.storageTypeLocal = Yz;
    var Uu = class zz {
      constructor() {
        var uz = this;
        let bz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rz;
        this.context = bz, this.isAdopting = () => !1, this.updateSession = function() {
          let {
            refreshActivity: zz = !0
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return uz.updateUserSession({
            refreshActivity: zz
          })
        }, this.recordActivity = Pu({
          fetchUserSession: zz.fetchUserSession,
          storeUserSession: zz.storeUserSession,
          updateInterval: Mz
        }), this.updateUserSession = Lu({
          fetchUserSession: zz.fetchUserSession,
          storeUserSession: zz.storeUserSession,
          updateInterval: Mz
        }, bz), this.init()
      }
      static removeUserSession() {
        bu(nz, zz.storageTypeSession)
      }
      static storeUserSession(uz) {
        uu(nz, mu(uz), zz.storageTypeSession)
      }
      static fetchUserSession() {
        const uz = zu(nz, zz.storageTypeSession);
        return uz ? JSON.parse(uz) : null
      }
      init() {
        document.addEventListener("visibilitychange", (() => {
          if ("visible" === document.visibilityState) {
            var zz;
            this.updateSession({
              refreshActivity: !1
            });
            const uz = null === (zz = this.context.api) || void 0 === zz || null === (zz = zz.getSession()) || void 0 === zz ? void 0 : zz.id;
            uz && this.recordActivity(uz)
          }
        })), this.context.metas.addListener(au({
          fetchUserSession: zz.fetchUserSession,
          storeUserSession: zz.storeUserSession
        }, this.context))
      }
    };
    Uu.storageTypeSession = Cz;
    const cu = new WeakMap;

    function gu(zz) {
      let uz = cu.get(zz);
      if (!uz) {
        let bz = [],
          Ez = [];
        uz = {
          addSessionUpdateListener: zz => {
            bz.push(zz)
          },
          removeSessionUpdateListener: zz => {
            bz = bz.filter((uz => uz !== zz))
          },
          notifySessionUpdate: zz => {
            bz.forEach((uz => uz(zz)))
          },
          shouldCapture: () => Ez.every((zz => zz())),
          addCaptureFilter: zz => {
            Ez.push(zz)
          },
          removeCaptureFilter: zz => {
            Ez = Ez.filter((uz => uz !== zz))
          }
        }, cu.set(zz, uz)
      }
      return uz
    }
    var Su = class {
      constructor(zz, uz, bz) {
        this.metas = zz, this.transports = uz, this.onActivate = bz, this.waiting = !1, this.shouldCapture = () => !document.prerendering, this.discard = () => null, this.recordUpdate = zz => {
          var uz, bz, Ez;
          const nz = this.pending;
          var iz, lz;
          if ("overrides" === zz.type) return void(this.pending = {
            reset: null !== (iz = null === nz || void 0 === nz ? void 0 : nz.reset) && void 0 !== iz && iz,
            inheritOverrides: null === (lz = null === nz || void 0 === nz ? void 0 : nz.inheritOverrides) || void 0 === lz || lz,
            session: Ou(Ou({}, null === nz || void 0 === nz ? void 0 : nz.session), {}, {
              overrides: Ou(Ou({}, null === nz || void 0 === nz ? void 0 : nz.session.overrides), zz.overrides)
            })
          });
          const Mz = zz.session,
            tz = ez(Mz) || null != Mz && "id" in Mz && !Mz.id,
            Hz = null !== (uz = null === Mz || void 0 === Mz ? void 0 : Mz.overrides) && void 0 !== uz ? uz : null === nz || void 0 === nz ? void 0 : nz.session.overrides;
          this.pending = {
            reset: tz || !(null === Mz || void 0 === Mz ? void 0 : Mz.id) && null !== (bz = null === nz || void 0 === nz ? void 0 : nz.reset) && void 0 !== bz && bz,
            inheritOverrides: !(!zz.overrides && void 0 !== (null === Mz || void 0 === Mz ? void 0 : Mz.overrides)) && (null === (Ez = null === nz || void 0 === nz ? void 0 : nz.inheritOverrides) || void 0 === Ez || Ez),
            session: {
              id: null === Mz || void 0 === Mz ? void 0 : Mz.id,
              attributes: (null === Mz || void 0 === Mz ? void 0 : Mz.attributes) && Ou({}, Mz.attributes),
              overrides: zz.overrides ? Ou(Ou({}, null === nz || void 0 === nz ? void 0 : nz.session.overrides), zz.overrides) : Hz && Ou({}, Hz)
            }
          }
        }, this.activate = () => {
          this.waiting && this.shouldCapture() && (this.destroy(), this.onActivate(this.pending))
        }
      }
      initialize() {
        var zz, uz;
        this.waiting = !0, gu(this.metas).addSessionUpdateListener(this.recordUpdate), gu(this.metas).addCaptureFilter(this.shouldCapture), this.transports.addBeforeSendHooks(this.discard), document.addEventListener("prerenderingchange", this.activate), null === (zz = (uz = this.metas).addCaptureListener) || void 0 === zz || zz.call(uz, this.activate), this.activate()
      }
      destroy() {
        var zz, uz;
        this.waiting = !1, document.removeEventListener("prerenderingchange", this.activate), gu(this.metas).removeSessionUpdateListener(this.recordUpdate), null === (zz = (uz = this.metas).removeCaptureListener) || void 0 === zz || zz.call(uz, this.activate), gu(this.metas).removeCaptureFilter(this.shouldCapture), this.transports.removeBeforeSendHooks(this.discard)
      }
    };

    function yu(zz) {
      return (null === zz || void 0 === zz ? void 0 : zz.persistent) ? hu : Uu
    }

    function Du() {}
    let Qu = function(zz) {
      return zz[zz.OFF = 0] = "OFF", zz[zz.ERROR = 1] = "ERROR", zz[zz.WARN = 2] = "WARN", zz[zz.INFO = 3] = "INFO", zz[zz.VERBOSE = 4] = "VERBOSE", zz
    }({});
    const Wu = {
        debug: Du,
        error: Du,
        info: Du,
        prefix: "Faro",
        warn: Du
      },
      eu = 1;

    function ju(zz) {
      return ju = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(zz) {
        return typeof zz
      } : function(zz) {
        return zz && "function" == typeof Symbol && zz.constructor === Symbol && zz !== Symbol.prototype ? "symbol" : typeof zz
      }, ju(zz)
    }

    function Iu(zz) {
      var uz = function(zz, uz) {
        if ("object" != ju(zz) || !zz) return zz;
        var bz = zz[Symbol.toPrimitive];
        if (void 0 !== bz) {
          var Ez = bz.call(zz, uz || "default");
          if ("object" != ju(Ez)) return Ez;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === uz ? String : Number)(zz)
      }(zz, "string");
      return "symbol" == ju(uz) ? uz : uz + ""
    }

    function Bu(zz, uz, bz) {
      return (uz = Iu(uz)) in zz ? Object.defineProperty(zz, uz, {
        value: bz,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : zz[uz] = bz, zz
    }

    function Cu(zz, uz) {
      var bz = Object.keys(zz);
      if (Object.getOwnPropertySymbols) {
        var Ez = Object.getOwnPropertySymbols(zz);
        uz && (Ez = Ez.filter((function(uz) {
          return Object.getOwnPropertyDescriptor(zz, uz).enumerable
        }))), bz.push.apply(bz, Ez)
      }
      return bz
    }

    function Yu(zz) {
      for (var uz = 1; uz < arguments.length; uz++) {
        var bz = null != arguments[uz] ? arguments[uz] : {};
        uz % 2 ? Cu(Object(bz), !0).forEach((function(uz) {
          Bu(zz, uz, bz[uz])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(zz, Object.getOwnPropertyDescriptors(bz)) : Cu(Object(bz)).forEach((function(uz) {
          Object.defineProperty(zz, uz, Object.getOwnPropertyDescriptor(bz, uz))
        }))
      }
      return zz
    }
    const ku = Yu({}, console);
    var zb = class {
        constructor() {
          this.unpatchedConsole = ku, this.internalLogger = Wu, this.config = {}, this.metas = {}
        }
        logDebug() {
          for (var zz = arguments.length, uz = new Array(zz), bz = 0; bz < zz; bz++) uz[bz] = arguments[bz];
          this.internalLogger.debug(`${this.name}\n`, ...uz)
        }
        logInfo() {
          for (var zz = arguments.length, uz = new Array(zz), bz = 0; bz < zz; bz++) uz[bz] = arguments[bz];
          this.internalLogger.info(`${this.name}\n`, ...uz)
        }
        logWarn() {
          for (var zz = arguments.length, uz = new Array(zz), bz = 0; bz < zz; bz++) uz[bz] = arguments[bz];
          this.internalLogger.warn(`${this.name}\n`, ...uz)
        }
        logError() {
          for (var zz = arguments.length, uz = new Array(zz), bz = 0; bz < zz; bz++) uz[bz] = arguments[bz];
          this.internalLogger.error(`${this.name}\n`, ...uz)
        }
      },
      ub = class extends zb {
        constructor() {
          super(...arguments), this.api = {}, this.transports = {}
        }
      };
    const bb = "2.12.1";
    var Eb = class extends ub {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-session", this.version = bb, this.isAdoptingSession = () => !1
      }
      sendSessionStartEvent(zz) {
        var uz;
        const bz = zz.session;
        if (bz && bz.id !== (null === (uz = this.notifiedSession) || void 0 === uz ? void 0 : uz.id)) {
          var Ez;
          if (this.isAdoptingSession()) return void(this.notifiedSession = bz);
          if (this.notifiedSession && this.notifiedSession.id === (null === (Ez = bz.attributes) || void 0 === Ez ? void 0 : Ez.previousSession)) return this.api.pushEvent(vu, {}, void 0, {
            skipDedupe: !0
          }), void(this.notifiedSession = bz);
          this.notifiedSession = bz, this.api.pushEvent(ou, {}, void 0, {
            skipDedupe: !0
          })
        }
      }
      createInitialSession(zz, uz, bz) {
        const Ez = null === bz || void 0 === bz ? void 0 : bz.session;
        let nz, iz, lz = zz.fetchUserSession();
        if (uz.persistent && uz.maxSessionPersistenceTime && lz) {
          const zz = du();
          lz.lastActivity < zz - uz.maxSessionPersistenceTime && (hu.removeUserSession(), lz = null)
        }
        const Mz = Tu(lz);
        if ((null === bz || void 0 === bz ? void 0 : bz.reset) || !Mz || (null === Ez || void 0 === Ez ? void 0 : Ez.id) && Ez.id !== (null === lz || void 0 === lz ? void 0 : lz.sessionId)) {
          var tz, Hz, Oz, pz, dz, Fz;
          iz = Au({
            sessionId: (null === bz || void 0 === bz ? void 0 : bz.reset) ? void 0 : null !== (tz = null === Ez || void 0 === Ez ? void 0 : Ez.id) && void 0 !== tz ? tz : null === (Hz = uz.session) || void 0 === Hz ? void 0 : Hz.id,
            isSampled: pu(this)
          }, this);
          const zz = iz.sessionId,
            Zz = bz && Mz ? null === lz || void 0 === lz || null === (Oz = lz.sessionMeta) || void 0 === Oz ? void 0 : Oz.overrides : void 0,
            Rz = Zz ? Ou(Ou({}, null === (pz = uz.session) || void 0 === pz ? void 0 : pz.overrides), Zz) : null === (dz = uz.session) || void 0 === dz ? void 0 : dz.overrides;
          iz.sessionMeta = Ou({
            id: zz,
            attributes: Ou({
              isSampled: iz.isSampled.toString()
            }, null === (Fz = uz.session) || void 0 === Fz ? void 0 : Fz.attributes)
          }, Rz ? {
            overrides: Rz
          } : {}), nz = ou
        } else {
          var Zz, Rz;
          const zz = null === lz || void 0 === lz ? void 0 : lz.sessionId;
          iz = Au({
            sessionId: zz,
            isSampled: lz.isSampled || !1,
            started: null === lz || void 0 === lz ? void 0 : lz.started
          }, this);
          const bz = null === lz || void 0 === lz ? void 0 : lz.sessionMeta,
            Ez = Ou(Ou({}, null === (Zz = uz.session) || void 0 === Zz ? void 0 : Zz.overrides), null === bz || void 0 === bz ? void 0 : bz.overrides);
          iz.sessionMeta = Ou(Ou({}, uz.session), {}, {
            id: zz,
            attributes: Ou(Ou(Ou({}, null === (Rz = uz.session) || void 0 === Rz ? void 0 : Rz.attributes), null === bz || void 0 === bz ? void 0 : bz.attributes), {}, {
              isSampled: iz.isSampled.toString()
            }),
            overrides: Ez
          }), nz = Nu
        }
        var Kz;
        if (Ez && (iz.sessionMeta = Ou(Ou({}, iz.sessionMeta), {}, {
            attributes: Ou(Ou(Ou({}, null === (Kz = iz.sessionMeta) || void 0 === Kz ? void 0 : Kz.attributes), Ez.attributes), {}, {
              isSampled: iz.isSampled.toString()
            })
          }), Ez.overrides)) {
          const zz = (null === bz || void 0 === bz ? void 0 : bz.inheritOverrides) ? Ou(Ou({}, iz.sessionMeta.overrides), Ez.overrides) : Ez.overrides;
          Object.keys(zz).length > 0 ? iz.sessionMeta.overrides = zz : delete iz.sessionMeta.overrides
        }
        return {
          initialSession: iz,
          lifecycleType: nz
        }
      }
      registerBeforeSendHook(zz) {
        var uz;
        this.beforeSendHook = uz => {
          var bz, Ez;
          const nz = null === (bz = uz.meta.session) || void 0 === bz ? void 0 : bz.id;
          nz && !this.transports.isPaused() && zz(nz);
          const iz = null === (Ez = uz.meta.session) || void 0 === Ez ? void 0 : Ez.attributes;
          if (iz && "true" === (null === iz || void 0 === iz ? void 0 : iz.isSampled)) {
            var lz;
            let zz = JSON.parse(JSON.stringify(uz));
            const bz = null === (lz = zz.meta.session) || void 0 === lz ? void 0 : lz.attributes;
            var Mz;
            if (null === bz || void 0 === bz || delete bz.isSampled, 0 === Object.keys(null !== bz && void 0 !== bz ? bz : {}).length) null === (Mz = zz.meta.session) || void 0 === Mz || delete Mz.attributes;
            return zz
          }
          return null
        }, null === (uz = this.transports) || void 0 === uz || uz.addBeforeSendHooks(this.beforeSendHook)
      }
      initialize() {
        var zz;
        this.logDebug("init session instrumentation");
        const uz = document.prerendering;
        var bz;
        if ((null === (zz = this.config.sessionTracking) || void 0 === zz ? void 0 : zz.enabled) && (uz || this.prerenderSession)) return null !== (bz = this.prerenderSession) && void 0 !== bz || (this.prerenderSession = new Su(this.metas, this.transports, (zz => {
          this.prerenderSession = void 0, this.initializeSession(zz)
        }))), void this.prerenderSession.initialize();
        this.initializeSession()
      }
      initializeSession(zz) {
        const uz = this.config.sessionTracking;
        if (null === uz || void 0 === uz ? void 0 : uz.enabled) {
          var bz, Ez;
          const nz = yu(uz),
            iz = new nz(this);
          this.isAdoptingSession = iz.isAdopting, this.registerBeforeSendHook(iz.recordActivity);
          const {
            initialSession: lz,
            lifecycleType: Mz
          } = this.createInitialSession(nz, uz, zz);
          nz.storeUserSession(lz);
          const tz = lz.sessionMeta;
          this.notifiedSession = tz, this.api.setSession(tz), this.captureListener = () => {
            this.transports.isPaused() || iz.updateSession({
              refreshActivity: !1
            })
          }, null === (bz = (Ez = this.metas).addCaptureListener) || void 0 === bz || bz.call(Ez, this.captureListener), Mz === ou && this.api.pushEvent(ou, {}, void 0, {
            skipDedupe: !0
          }), Mz === Nu && this.api.pushEvent(Nu, {}, void 0, {
            skipDedupe: !0
          })
        }
        this.sessionStartListener = this.sendSessionStartEvent.bind(this), this.metas.addListener(this.sessionStartListener)
      }
      destroy() {
        var zz, uz, bz;
        (null === (zz = this.prerenderSession) || void 0 === zz || zz.destroy(), this.captureListener) && (null === (uz = (bz = this.metas).removeCaptureListener) || void 0 === uz || uz.call(bz, this.captureListener), this.captureListener = void 0);
        this.beforeSendHook && (this.transports.removeBeforeSendHooks(this.beforeSendHook), this.beforeSendHook = void 0), this.sessionStartListener && (this.metas.removeListener(this.sessionStartListener), this.sessionStartListener = void 0)
      }
    };

    function nb(zz, uz, bz, Ez) {
      const nz = {
        filename: zz || document.location.href,
        function: uz || "?"
      };
      return void 0 !== bz && (nz.lineno = bz), void 0 !== Ez && (nz.colno = Ez), nz
    }
    const ib = /^\s*at (?:(?![a-z]+:\/\/)([^(]+?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      lb = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      Mb = /^(?=[\s\S]*?(?:\/|bundle|\.js|\[native code]))\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      tb = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      Hb = "safari-extension",
      Ob = "safari-web-extension",
      pb = /Minified React error #\d+;/i;

    function db(zz, uz) {
      const bz = null === zz || void 0 === zz ? void 0 : zz.includes(Hb),
        Ez = !bz && (null === zz || void 0 === zz ? void 0 : zz.includes("safari-web-extension"));
      return bz || Ez ? [(null === zz || void 0 === zz ? void 0 : zz.includes("@")) ? zz.split("@")[0] : zz, bz ? `${Hb}:${uz}` : `${Ob}:${uz}`] : [zz, uz]
    }
    const Fb = 1024;

    function Zb(zz) {
      let uz = [];
      zz.stacktrace ? uz = zz.stacktrace.split("\n").filter(((zz, uz) => uz % 2 === 0)) : zz.stack && (uz = zz.stack.split("\n"));
      const bz = uz.reduce(((uz, bz, Ez) => {
        if (bz.length > Fb) return uz;
        let nz, iz, lz, Mz, tz;
        if (nz = ib.exec(bz)) {
          if (iz = nz[1], lz = nz[2], Mz = nz[3], tz = nz[4], null === lz || void 0 === lz ? void 0 : lz.startsWith("eval")) {
            const zz = lb.exec(lz);
            zz && (lz = zz[1], Mz = zz[2], tz = zz[3])
          }
          lz = (null === lz || void 0 === lz ? void 0 : lz.startsWith("address at ")) ? lz.substring(11) : lz, [iz, lz] = db(iz, lz)
        } else if (nz = Mb.exec(bz)) {
          if (iz = nz[1], lz = nz[3], Mz = nz[4], tz = nz[5], lz && lz.includes(" > eval")) {
            const zz = tb.exec(lz);
            zz && (iz = iz || "eval", lz = zz[1], Mz = zz[2])
          } else 0 === Ez && !tz && Nz(zz.columnNumber) && (tz = String(zz.columnNumber + 1));
          [iz, lz] = db(iz, lz)
        }
        return (lz || iz) && uz.push(nb(lz, iz, Mz ? Number(Mz) : void 0, tz ? Number(tz) : void 0)), uz
      }), []);
      return pb.test(zz.message) ? bz.slice(1) : bz
    }

    function Rb(zz) {
      return {
        frames: Zb(zz)
      }
    }
    const Kb = "http-request-start",
      wb = "http-request-end";
    var Xb = class zz {
      constructor() {
        this.subscribers = []
      }
      subscribe(zz) {
        return this.subscribers.push(zz), {
          unsubscribe: () => this.unsubscribe(zz)
        }
      }
      unsubscribe(zz) {
        this.subscribers = this.subscribers.filter((uz => uz !== zz))
      }
      notify(zz) {
        this.subscribers.forEach((uz => uz(zz)))
      }
      first() {
        const uz = new zz,
          bz = zz => {
            uz.notify(zz), Ez.unsubscribe()
          },
          Ez = this.subscribe(bz),
          nz = uz.unsubscribe.bind(uz);
        return this.withUnsubscribeOverride(uz, nz, bz)
      }
      takeWhile(uz) {
        const bz = new zz,
          Ez = zz => {
            uz(zz) ? bz.notify(zz) : bz.unsubscribe(Ez)
          };
        this.subscribe(Ez);
        const nz = bz.unsubscribe.bind(bz);
        return this.withUnsubscribeOverride(bz, nz, Ez)
      }
      filter(uz) {
        const bz = new zz,
          Ez = zz => {
            uz(zz) && bz.notify(zz)
          };
        this.subscribe(Ez);
        const nz = bz.unsubscribe.bind(bz);
        return this.withUnsubscribeOverride(bz, nz, Ez)
      }
      merge() {
        const uz = new zz,
          bz = [];
        for (var Ez = arguments.length, nz = new Array(Ez), iz = 0; iz < Ez; iz++) nz[iz] = arguments[iz];
        nz.forEach((zz => {
          const Ez = zz.subscribe((zz => {
            uz.notify(zz)
          }));
          bz.push(Ez)
        }));
        const lz = uz.unsubscribeAll.bind(uz);
        return uz.unsubscribe = () => {
          bz.forEach((zz => zz.unsubscribe())), lz()
        }, uz
      }
      withUnsubscribeOverride(zz, uz, bz) {
        return zz.unsubscribe = zz => {
          uz(zz), this.unsubscribe(bz)
        }, zz
      }
      unsubscribeAll() {
        this.subscribers = []
      }
    };
    let fb = function(zz) {
      return zz.TRACE = "trace", zz.DEBUG = "debug", zz.INFO = "info", zz.LOG = "log", zz.WARN = "warn", zz.ERROR = "error", zz
    }({});
    const sb = "log",
      rb = ["trace", "debug", "info", "log", "warn", "error"];
    let ob, Nb = !1;
    const vb = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
      xb = "Error",
      Jb = zz => zz.map((zz => Az(zz) ? mu(zz) : String(zz))).join(" ");

    function Ab(zz) {
      let uz, bz, Ez, nz, iz = [];
      if (Uz(zz) && zz.error) uz = zz.error.message, bz = zz.error.name, iz = Zb(zz.error);
      else if ((Ez = cz(zz)) || gz(zz)) {
        const {
          name: nz,
          message: iz
        } = zz;
        bz = null !== nz && void 0 !== nz ? nz : Ez ? "DOMError" : "DOMException", uz = iz ? `${bz}: ${iz}` : bz
      } else hz(zz) ? (bz = zz.name, uz = zz.message, iz = Zb(zz)) : (Az(zz) || (nz = mz(zz))) && (bz = nz ? zz.constructor.name : void 0, uz = `Non-Error exception captured with keys: ${Object.keys(zz)}`);
      return [uz, bz, iz]
    }

    function Tb(zz) {
      const [uz, bz, Ez, nz, iz] = zz;
      let lz, Mz, tz = [];
      const Hz = oz(uz),
        Oz = nb(bz, "?", Ez, nz);
      return iz || !Hz ? ([lz, Mz, tz] = Ab(null !== iz && void 0 !== iz ? iz : uz), 0 === tz.length && (tz = [Oz])) : Hz && ([lz, Mz] = function(zz) {
        var uz, bz;
        const Ez = zz.match(vb),
          nz = null !== (uz = null === Ez || void 0 === Ez ? void 0 : Ez[1]) && void 0 !== uz ? uz : xb;
        return [null !== (bz = null === Ez || void 0 === Ez ? void 0 : Ez[2]) && void 0 !== bz ? bz : zz, nz]
      }(uz), tz = [Oz]), {
        value: lz,
        type: Mz,
        stackFrames: tz
      }
    }

    function Lb(zz, uz) {
      return hz(zz[0]) ? Tb(zz) : {
        value: uz(zz)
      }
    }
    const Pb = zz => zz.map((zz => {
      try {
        return String(zz)
      } catch (uz) {
        return ""
      }
    })).join(" ");
    var Gb = class zz extends ub {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-console", this.version = bb, this.errorSerializer = Pb
      }
      initialize() {
        var uz, bz;
        const Ez = this.config.consoleInstrumentation,
          nz = (null === Ez || void 0 === Ez ? void 0 : Ez.serializeErrors) || !!(null === Ez || void 0 === Ez ? void 0 : Ez.errorSerializer);
        this.errorSerializer = nz ? null !== (uz = null === Ez || void 0 === Ez ? void 0 : Ez.errorSerializer) && void 0 !== uz ? uz : Jb : Pb;
        const iz = null !== (bz = null === Ez || void 0 === Ez ? void 0 : Ez.disabledLevels) && void 0 !== bz ? bz : zz.defaultDisabledLevels,
          lz = function(zz) {
            if (ob || (ob = new Xb), !Nb) {
              const uz = null !== zz && void 0 !== zz ? zz : ku;
              rb.forEach((zz => {
                console[zz] = function() {
                  for (var bz, Ez = arguments.length, nz = new Array(Ez), iz = 0; iz < Ez; iz++) nz[iz] = arguments[iz];
                  ob.notify({
                    type: "console",
                    level: zz,
                    args: nz
                  }), null === (bz = uz[zz]) || void 0 === bz || bz.apply(console, nz)
                }
              })), Nb = !0
            }
            return ob
          }(this.unpatchedConsole);
        this.subscription = lz.subscribe((uz => {
          let {
            level: bz,
            args: nz
          } = uz;
          if (!iz.includes(bz)) try {
            if (bz !== fb.ERROR || (null === Ez || void 0 === Ez ? void 0 : Ez.consoleErrorAsLog))
              if (bz === fb.ERROR && (null === Ez || void 0 === Ez ? void 0 : Ez.consoleErrorAsLog)) {
                const {
                  value: uz,
                  type: Ez,
                  stackFrames: iz
                } = Lb(nz, this.errorSerializer);
                this.api.pushLog(uz ? [zz.consoleErrorPrefix + uz] : nz, {
                  level: bz,
                  context: {
                    value: null !== uz && void 0 !== uz ? uz : "",
                    type: null !== Ez && void 0 !== Ez ? Ez : "",
                    stackFrames: (null === iz || void 0 === iz ? void 0 : iz.length) ? Jb(iz) : ""
                  }
                })
              } else this.api.pushLog(nz, {
                level: bz
              });
            else {
              const {
                value: uz,
                type: bz,
                stackFrames: Ez
              } = Lb(nz, this.errorSerializer);
              if (uz && !bz && !Ez) return void this.api.pushError(new Error(zz.consoleErrorPrefix + uz));
              this.api.pushError(new Error(zz.consoleErrorPrefix + uz), {
                type: bz,
                stackFrames: Ez
              })
            }
          } catch (lz) {
            this.logError(lz)
          }
        }))
      }
      destroy() {
        var zz;
        null === (zz = this.subscription) || void 0 === zz || zz.unsubscribe(), this.subscription = void 0
      }
    };
    Gb.defaultDisabledLevels = [fb.DEBUG, fb.TRACE, fb.LOG], Gb.consoleErrorPrefix = "console.error: ";
    const ab = [];
    var Vb = class extends ub {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-errors", this.version = bb
      }
      initialize() {
        this.logDebug("Initializing"),
          function(zz) {
            const uz = window.onerror;
            window.onerror = function() {
              for (var bz = arguments.length, Ez = new Array(bz), nz = 0; nz < bz; nz++) Ez[nz] = arguments[nz];
              try {
                const {
                  value: uz,
                  type: bz,
                  stackFrames: nz
                } = Tb(Ez), iz = Ez[4];
                if (uz) {
                  const Ez = {
                    type: bz,
                    stackFrames: nz
                  };
                  null != iz && (Ez.originalError = iz), zz.pushError(new Error(uz), Ez)
                }
              } finally {
                null === uz || void 0 === uz || uz.apply(window, Ez)
              }
            }
          }(this.api),
          function(zz) {
            const uz = uz => {
              var bz;
              let Ez, nz, iz = uz;
              if (iz.reason) iz = uz.reason;
              else if (null === (bz = uz.detail) || void 0 === bz ? void 0 : bz.reason) {
                var lz;
                iz = null === (lz = uz.detail) || void 0 === lz ? void 0 : lz.reason
              }
              let Mz = [];
              az(iz) ? (Ez = `Non-Error promise rejection captured with value: ${String(iz)}`, nz = "UnhandledRejection") : [Ez, nz, Mz] = Ab(iz), Ez && zz.pushError(new Error(Ez), {
                type: nz,
                stackFrames: Mz
              })
            };
            window.addEventListener("unhandledrejection", uz), ab.push(uz)
          }(this.api)
      }
    };
    const mb = "unknown";
    var qb = class extends ub {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-view", this.version = bb, this.waitingForActivation = !1, this.sendViewChangedEvent = zz => {
          var uz;
          if (this.waitingForActivation || document.prerendering) return;
          const bz = zz.view;
          if (bz && bz.name !== (null === (uz = this.notifiedView) || void 0 === uz ? void 0 : uz.name)) {
            var Ez, nz, iz;
            const zz = null !== (Ez = null === (nz = this.notifiedView) || void 0 === nz ? void 0 : nz.name) && void 0 !== Ez ? Ez : mb;
            this.notifiedView = bz, this.api.pushEvent(ru, {
              fromView: zz,
              toView: null !== (iz = bz.name) && void 0 !== iz ? iz : mb
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
    class hb {
      t;
      o = 0;
      i = [];
      l(zz) {
        if (zz.hadRecentInput) return;
        const uz = this.i[0],
          bz = this.i.at(-1);
        this.o && uz && bz && zz.startTime - bz.startTime < 1e3 && zz.startTime - uz.startTime < 5e3 ? (this.o += zz.value, this.i.push(zz)) : (this.o = zz.value, this.i = [zz]), this.t?.(zz)
      }
    }
    const Ub = () => {
        const zz = performance.getEntriesByType("navigation")[0];
        if (zz && zz.responseStart > 0 && zz.responseStart < performance.now()) return zz
      },
      cb = zz => {
        if ("loading" === document.readyState) return "loading";
        const uz = Ub();
        if (uz) {
          if (zz < uz.domInteractive) return "loading";
          if (0 === uz.domContentLoadedEventStart || zz < uz.domContentLoadedEventStart) return "dom-interactive";
          if (0 === uz.domComplete || zz < uz.domComplete) return "dom-content-loaded"
        }
        return "complete"
      },
      gb = zz => {
        const uz = zz.nodeName;
        return 1 === zz.nodeType ? uz.toLowerCase() : uz.toUpperCase().replace(/^#/, "")
      },
      Sb = zz => {
        let uz = "";
        try {
          for (; 9 !== zz?.nodeType;) {
            const bz = zz,
              Ez = bz.id ? "#" + bz.id : [gb(bz), ...Array.from(bz.classList ?? []).sort()].join(".");
            if (uz.length + Ez.length > 99) return uz || Ez;
            if (uz = uz ? Ez + ">" + uz : Ez, bz.id) break;
            zz = bz.parentNode
          }
        } catch {}
        return uz
      },
      yb = new WeakMap;

    function Db(zz, uz) {
      let bz = yb.get(uz);
      return bz || (bz = new WeakMap, yb.set(uz, bz)), bz.get(zz) || bz.set(zz, new uz), bz.get(zz)
    }
    let Qb = -1;
    const Wb = () => Qb,
      eb = zz => {
        addEventListener("pageshow", (uz => {
          uz.persisted && (Qb = uz.timeStamp, zz(uz))
        }), !0)
      },
      jb = (zz, uz, bz, Ez) => {
        let nz, iz;
        return lz => {
          uz.value >= 0 && (lz || Ez) && (iz = uz.value - (nz ?? 0), (iz || void 0 === nz) && (nz = uz.value, uz.delta = iz, uz.rating = ((zz, uz) => zz > uz[1] ? "poor" : zz > uz[0] ? "needs-improvement" : "good")(uz.value, bz), zz(uz)))
        }
      },
      Ib = zz => {
        requestAnimationFrame((() => requestAnimationFrame((() => zz()))))
      },
      Bb = () => Ub()?.activationStart ?? 0;
    let Cb = -1;
    const Yb = new Set,
      kb = () => "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0,
      zE = zz => {
        if ("hidden" === document.visibilityState) {
          if ("visibilitychange" === zz.type)
            for (const zz of Yb) zz();
          isFinite(Cb) || (Cb = "visibilitychange" === zz.type ? zz.timeStamp : 0, removeEventListener("prerenderingchange", zE, !0))
        }
      },
      uE = function() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (Cb = 1 / 0), Cb < 0) {
          const zz = Bb(),
            uz = document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").find((uz => "hidden" === uz.name && uz.startTime >= zz))?.startTime;
          Cb = uz ?? kb(), addEventListener("visibilitychange", zE, !0), addEventListener("prerenderingchange", zE, !0), eb((() => {
            setTimeout((() => {
              Cb = kb()
            }))
          }))
        }
        return {
          get firstHiddenTime() {
            return Cb
          },
          onHidden(zz) {
            Yb.add(zz)
          }
        }
      },
      bE = function(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          bz = arguments.length > 2 ? arguments[2] : void 0,
          Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          nz = arguments.length > 4 ? arguments[4] : void 0,
          iz = arguments.length > 5 ? arguments[5] : void 0,
          lz = arguments.length > 6 ? arguments[6] : void 0;
        const Mz = Ub(),
          tz = Mz?.navigationId || 0;
        let Hz = "navigate";
        return bz ? Hz = bz : Wb() >= 0 ? Hz = "back-forward-cache" : Mz && (document.prerendering || Bb() > 0 ? Hz = "prerender" : document.wasDiscarded ? Hz = "restore" : Mz.type && (Hz = Mz.type.replace(/_/g, "-"))), {
          name: zz,
          value: uz,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v6-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
          navigationType: Hz,
          navigationId: Ez || tz,
          navigationInteractionId: nz,
          navigationURL: iz || Mz?.name,
          navigationStartTime: lz || 0
        }
      },
      EE = function(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        try {
          const Ez = zz.filter((zz => PerformanceObserver.supportedEntryTypes.includes(zz)));
          if (Ez.length > 0) {
            const zz = new PerformanceObserver((zz => {
              queueMicrotask((() => {
                const bz = zz.getEntries();
                Ez.length > 1 && bz.sort(((zz, uz) => zz.startTime + zz.duration - (uz.startTime + uz.duration))), uz(bz)
              }))
            }));
            for (const uz of Ez) zz.observe({
              type: uz,
              buffered: !0,
              ...bz
            });
            return zz
          }
        } catch {}
      },
      nE = zz => globalThis.PerformanceObserver?.supportedEntryTypes?.includes("soft-navigation") && "function" == typeof globalThis.PerformanceSoftNavigation?.prototype?.getLargestInteractionContentfulPaint && zz && zz.reportSoftNavs,
      iE = (zz, uz) => {
        if (zz.set(uz.navigationId, uz), zz.size > 2) {
          const uz = zz.keys().next().value;
          void 0 !== uz && zz.delete(uz)
        }
      },
      lE = zz => {
        let uz = !1;
        return () => {
          uz || (zz(), uz = !0)
        }
      };
    class ME {
      u
    }
    const tE = zz => {
        document.prerendering ? addEventListener("prerenderingchange", zz, !0) : zz()
      },
      HE = [1800, 3e3],
      OE = function(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const bz = nE(uz);
        tE((() => {
          const Ez = Db(uz, ME),
            nz = uE();
          let iz, lz = bE("FCP");
          const Mz = EE(["paint"], (zz => {
            for (const uz of zz) "first-contentful-paint" === uz.name && (Mz.disconnect(), uz.startTime < nz.firstHiddenTime && (lz.value = Math.max(uz.startTime - Bb(), 0), lz.entries.push(uz), lz.navigationId = uz.navigationId || lz.navigationId, iz(!0)))
          }));
          Mz && (iz = jb(zz, lz, HE, uz.reportAllChanges), eb((bz => {
            lz = bE("FCP", -1, "back-forward-cache", lz.navigationId, lz.navigationInteractionId, lz.navigationURL, Wb()), iz = jb(zz, lz, HE, uz.reportAllChanges), Ib((() => {
              lz.value = performance.now() - bz.timeStamp, iz(!0)
            }))
          }))), bz && EE(["soft-navigation"], (bz => {
            bz.forEach((bz => {
              Ez.u && bz.navigationId && iE(Ez.u, bz);
              const nz = Math.max((bz.presentationTime || bz.paintTime || 0) - bz.startTime, 0);
              lz = bE("FCP", nz, "soft-navigation", bz.navigationId, bz.interactionId, bz.name, bz.startTime), iz = jb(zz, lz, HE, uz.reportAllChanges), iz(!0)
            }))
          }), uz)
        }))
      },
      pE = [.1, .25],
      dE = zz => zz.find((zz => 1 === zz.node?.nodeType)) || zz[0];
    let FE = 0,
      ZE = 1 / 0,
      RE = 0;
    const KE = zz => {
      for (const uz of zz) uz.interactionId && (ZE = Math.min(ZE, uz.interactionId), RE = Math.max(RE, uz.interactionId), FE = RE ? (RE - ZE) / 7 + 1 : 0)
    };
    let wE;
    const XE = () => wE ? FE : performance.interactionCount ?? 0;
    class fE {
      h = 0;
      v = [];
      p = new Map;
      m;
      M;
      T() {
        return XE() - this.h
      }
      D() {
        this.h = XE(), this.v.length = 0, this.p.clear()
      }
      S(zz) {
        const uz = this.T(),
          bz = Math.min(this.v.length - 1, Math.floor(uz / 50));
        return !uz || -1 !== bz || "soft-navigation" !== zz && "back-forward-cache" !== zz ? this.v[bz] : {
          k: 8,
          id: -1,
          entries: []
        }
      }
      l(zz) {
        if (this.m?.(zz), !zz.interactionId) return;
        const uz = this.v.at(-1);
        let bz = this.p.get(zz.interactionId);
        if (bz || this.v.length < 10 || zz.duration > uz.k) {
          if (bz ? zz.duration > bz.k ? (bz.entries = [zz], bz.k = zz.duration) : zz.duration === bz.k && zz.startTime === bz.entries[0].startTime && bz.entries.push(zz) : (bz = {
              id: zz.interactionId,
              entries: [zz],
              k: zz.duration
            }, this.p.set(bz.id, bz), this.v.push(bz)), this.v.sort(((zz, uz) => uz.k - zz.k)), this.v.length > 10) {
            const zz = this.v.splice(10);
            for (const uz of zz) this.p.delete(uz.id)
          }
          this.M?.(bz)
        }
      }
    }
    const sE = zz => {
        const uz = "requestIdleCallback" in globalThis ? 1e3 : 0,
          bz = globalThis.requestIdleCallback || setTimeout,
          Ez = globalThis.cancelIdleCallback || clearTimeout;
        if ("hidden" === document.visibilityState) zz();
        else {
          const nz = lE(zz);
          let iz = -1;
          const lz = () => {
            Ez(iz), nz()
          };
          addEventListener("visibilitychange", lz, {
            once: !0,
            capture: !0
          }), iz = bz((() => {
            removeEventListener("visibilitychange", lz, {
              capture: !0
            }), nz()
          }), {
            timeout: uz
          })
        }
      },
      rE = [200, 500],
      oE = function(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const bz = Db(uz = Object.assign({}, uz), fE);
        let Ez = [],
          nz = [],
          iz = 0;
        const lz = new WeakMap,
          Mz = new WeakMap;
        let tz = !1;
        const Hz = () => {
            tz || (tz = !0, sE(Oz))
          },
          Oz = () => {
            const zz = new Set(bz.v.map((zz => lz.get(zz.entries[0])))),
              uz = nz.length - 10;
            nz = nz.filter(((bz, Ez) => Ez >= uz || zz.has(bz)));
            const Mz = new Set;
            for (const bz of nz) {
              const zz = pz(bz.startTime, bz.processingEnd);
              for (const uz of zz) Mz.add(uz)
            }
            const Hz = Ez.length - 10;
            Ez = Ez.filter(((zz, uz) => Mz.has(zz) || uz >= Hz && zz.startTime > iz)), tz = !1
          };
        bz.m = zz => {
          const bz = zz.startTime + zz.duration;
          let Ez;
          iz = Math.max(iz, zz.processingEnd);
          for (let iz = nz.length - 1; iz >= 0; iz--) {
            const lz = nz[iz];
            if (Math.abs(bz - lz.renderTime) <= 8) {
              Ez = lz, Ez.startTime = Math.min(zz.startTime, Ez.startTime), Ez.processingStart = Math.min(zz.processingStart, Ez.processingStart), Ez.processingEnd = Math.max(zz.processingEnd, Ez.processingEnd), uz.includeProcessedEventEntries && Ez.entries.push(zz);
              break
            }
          }
          Ez || (Ez = {
            startTime: zz.startTime,
            processingStart: zz.processingStart,
            processingEnd: zz.processingEnd,
            renderTime: bz,
            entries: uz.includeProcessedEventEntries ? [zz] : []
          }, nz.push(Ez)), zz.interactionId && lz.set(zz, Ez), Hz()
        }, bz.M = zz => {
          if (!Mz.get(zz)) {
            const bz = zz.entries.find((zz => zz.target))?.target;
            if (bz) {
              const Ez = uz.generateTarget?.(bz) ?? Sb(bz);
              Mz.set(zz, Ez)
            } else {
              const uz = zz.entries.find((zz => zz.targetSelector))?.targetSelector;
              uz && Mz.set(zz, uz)
            }
          }
        };
        const pz = (zz, uz) => {
          const bz = [];
          for (const nz of Ez)
            if (!(nz.startTime + nz.duration < zz)) {
              if (nz.startTime > uz) break;
              bz.push(nz)
            } return bz
        };
        EE(["long-animation-frame"], (zz => {
            Ez = Ez.concat(zz), Hz()
          }), uz),
          function(zz) {
            let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
            const bz = uE();
            tE((() => {
              "interactionCount" in performance || wE || (wE = EE(["event"], KE, {
                durationThreshold: 0
              }));
              let Ez, nz = bE("INP");
              const iz = Db(uz, fE),
                lz = (bz, lz, Mz, tz, Hz) => {
                  iz.D(), nz = bE("INP", -1, bz, lz, Mz, tz, Hz), Ez = jb(zz, nz, rE, uz.reportAllChanges)
                },
                Mz = () => {
                  const zz = iz.S(nz.navigationType);
                  zz && zz.k !== nz.value && (nz.value = zz.k, nz.entries = zz.entries, Ez())
                },
                tz = zz => {
                  Mz(), Ez(!0), lz("soft-navigation", zz.navigationId, zz.interactionId, zz.name, zz.startTime)
                },
                Hz = function(zz) {
                  let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  sE((() => {
                    for (const uz of zz) "soft-navigation" !== uz.entryType ? iz.l(uz) : tz(uz);
                    Mz(), uz && Ez(!0)
                  }))
                },
                Oz = ["event", "first-input"];
              nE(uz) && Oz.push("soft-navigation");
              const pz = EE(Oz, Hz, {
                ...uz,
                durationThreshold: uz.durationThreshold ?? 40
              });
              Ez = jb(zz, nz, rE, uz.reportAllChanges), pz && (bz.onHidden((() => {
                Hz(pz.takeRecords(), !0)
              })), eb((() => {
                lz("back-forward-cache", nz.navigationId, nz.navigationInteractionId, nz.navigationURL, Wb())
              })))
            }))
          }((uz => {
            zz((zz => {
              if (0 === zz.entries.length) {
                const uz = zz.navigationStartTime || 0,
                  bz = {
                    processedEventEntries: [],
                    longAnimationFrameEntries: [],
                    inputDelay: 0,
                    processingDuration: 0,
                    presentationDelay: zz.value,
                    loadState: cb(uz)
                  };
                return Object.assign(zz, {
                  attribution: bz
                })
              }
              const uz = zz.entries[0],
                Ez = lz.get(uz),
                nz = Math.max(Ez.processingStart, uz.startTime),
                iz = Math.max(uz.startTime + uz.duration, nz),
                tz = Math.min(Ez.processingEnd, iz),
                Hz = Ez.entries.sort(((zz, uz) => zz.processingStart - uz.processingStart)),
                Oz = pz(uz.startTime, tz),
                dz = bz.p.get(uz.interactionId),
                Fz = {
                  interactionTarget: Mz.get(dz),
                  interactionType: uz.name.startsWith("key") ? "keyboard" : "pointer",
                  interactionTime: uz.startTime,
                  nextPaintTime: iz,
                  processedEventEntries: Hz,
                  longAnimationFrameEntries: Oz,
                  inputDelay: nz - uz.startTime,
                  processingDuration: tz - nz,
                  presentationDelay: iz - tz,
                  loadState: cb(uz.startTime),
                  longestScript: void 0,
                  totalScriptDuration: void 0,
                  totalStyleAndLayoutDuration: void 0,
                  totalPaintDuration: void 0,
                  totalUnattributedDuration: void 0
                };
              return (zz => {
                const uz = zz.interactionTime,
                  bz = zz.nextPaintTime;
                if (!zz.longAnimationFrameEntries?.length || !uz || !bz) return;
                const Ez = zz.inputDelay,
                  nz = zz.processingDuration;
                let iz, lz, Mz = 0,
                  tz = 0,
                  Hz = 0,
                  Oz = 0;
                for (const Fz of zz.longAnimationFrameEntries) {
                  tz = tz + Fz.startTime + Fz.duration - Fz.styleAndLayoutStart;
                  for (const zz of Fz.scripts) {
                    const bz = zz.startTime + zz.duration;
                    if (bz < uz) continue;
                    const Hz = bz - Math.max(uz, zz.startTime),
                      pz = zz.duration ? Hz / zz.duration * zz.forcedStyleAndLayoutDuration : 0;
                    Mz += Hz - pz, tz += pz, Hz > Oz && (lz = zz.startTime < uz + Ez ? "input-delay" : zz.startTime >= uz + Ez + nz ? "presentation-delay" : "processing-duration", iz = zz, Oz = Hz)
                  }
                }
                const pz = zz.longAnimationFrameEntries.at(-1),
                  dz = pz ? pz.startTime + pz.duration : 0;
                dz >= uz + Ez + nz && (Hz = bz - dz), iz && lz && (zz.longestScript = {
                  entry: iz,
                  subpart: lz,
                  intersectingDuration: Oz
                }), zz.totalScriptDuration = Mz, zz.totalStyleAndLayoutDuration = tz, zz.totalPaintDuration = Hz, zz.totalUnattributedDuration = bz - uz - Mz - tz - Hz
              })(Fz), Object.assign(zz, {
                attribution: Fz
              })
            })(uz))
          }), uz)
      };
    class NE {
      m;
      u;
      l(zz) {
        this.m?.(zz)
      }
    }
    const vE = [2500, 4e3];
    let xE = 50;
    const JE = [];
    EE(["resource"], (zz => {
      for (const uz of zz) JE.push(uz), JE.length > xE && JE.shift()
    }));
    const AE = [800, 1800],
      TE = zz => {
        document.prerendering ? tE((() => TE(zz))) : "complete" !== document.readyState ? addEventListener("load", (() => TE(zz)), !0) : setTimeout(zz)
      },
      LE = "load_state",
      PE = "time_to_first_byte";
    var GE = class {
        constructor(zz, uz) {
          this.corePushMeasurement = zz, this.webVitalConfig = uz
        }
        initialize() {
          this.measureCLS(), this.measureFCP(), this.measureINP(), this.measureLCP(), this.measureTTFB()
        }
        measureCLS() {
          var zz;
          ! function(zz) {
            let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const bz = Db(uz = Object.assign({}, uz), hb),
              Ez = new WeakMap;
            bz.t = zz => {
                if (zz?.sources?.length) {
                  const bz = dE(zz.sources),
                    nz = bz?.node;
                  if (nz) {
                    const zz = uz.generateTarget?.(nz) ?? Sb(nz);
                    Ez.set(bz, zz)
                  }
                }
              },
              function(zz) {
                let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const bz = uE();
                OE(lE((() => {
                  let Ez, nz = bE("CLS", 0);
                  const iz = Db(uz, hb),
                    lz = (bz, lz, Mz, tz, Hz) => {
                      nz = bE("CLS", 0, bz, lz, Mz, tz, Hz), iz.o = 0, Ez = jb(zz, nz, pE, uz.reportAllChanges)
                    },
                    Mz = function() {
                      let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      iz.o > nz.value && (nz.value = iz.o, nz.entries = iz.i), Ez(zz)
                    },
                    tz = zz => {
                      Mz(!0), lz("soft-navigation", zz.navigationId, zz.interactionId, zz.name, zz.startTime)
                    },
                    Hz = zz => {
                      for (const uz of zz) "soft-navigation" !== uz.entryType ? iz.l(uz) : tz(uz);
                      Mz()
                    },
                    Oz = ["layout-shift"];
                  nE(uz) && Oz.push("soft-navigation");
                  const pz = EE(Oz, Hz);
                  pz && (Ez = jb(zz, nz, pE, uz.reportAllChanges), bz.onHidden((() => {
                    Hz(pz.takeRecords()), Ez(!0)
                  })), eb((() => {
                    lz("back-forward-cache", nz.navigationId, nz.navigationInteractionId, nz.navigationURL, Wb()), Ib(Ez)
                  })), setTimeout(Ez))
                })))
              }((uz => {
                zz((zz => {
                  let uz = {};
                  if (zz.entries.length) {
                    const bz = zz.entries.reduce(((zz, uz) => zz.value > uz.value ? zz : uz));
                    if (bz?.sources?.length) {
                      const zz = dE(bz.sources);
                      zz && (uz = {
                        largestShiftTarget: Ez.get(zz),
                        largestShiftTime: bz.startTime,
                        largestShiftValue: bz.value,
                        largestShiftSource: zz,
                        largestShiftEntry: bz,
                        loadState: cb(bz.startTime)
                      })
                    }
                  }
                  return Object.assign(zz, {
                    attribution: uz
                  })
                })(uz))
              }), uz)
          }((zz => {
            const {
              loadState: uz,
              largestShiftValue: bz,
              largestShiftTime: Ez,
              largestShiftTarget: nz
            } = zz.attribution, iz = this.buildInitialValues(zz);
            this.addIfPresent(iz, "largest_shift_value", bz), this.addIfPresent(iz, "largest_shift_time", Ez);
            const lz = this.buildInitialContext(zz);
            this.addIfPresent(lz, LE, uz), this.addIfPresent(lz, "largest_shift_target", nz), this.pushMeasurement(iz, lz)
          }), {
            reportAllChanges: null === (zz = this.webVitalConfig) || void 0 === zz ? void 0 : zz.reportAllChanges
          })
        }
        measureFCP() {
          var zz;
          ! function(zz) {
            let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const bz = Db(uz = Object.assign({}, uz), ME);
            nE(uz) && (bz.u = new Map), OE((uz => {
              zz((zz => {
                let uz = {
                  timeToFirstByte: 0,
                  firstByteToFCP: zz.value,
                  loadState: cb(Wb())
                };
                if ("soft-navigation" !== zz.navigationType) {
                  if (zz.entries.length) {
                    const bz = Ub(),
                      Ez = zz.entries.at(-1);
                    if (bz) {
                      const nz = bz.responseStart,
                        iz = bz.activationStart || 0,
                        lz = Math.max(0, nz - iz);
                      uz = {
                        timeToFirstByte: lz,
                        firstByteToFCP: zz.value - lz,
                        loadState: cb(zz.entries[0].startTime),
                        navigationEntry: bz,
                        fcpEntry: Ez
                      }
                    }
                  }
                } else {
                  const Ez = bz.u?.get(zz.navigationId);
                  Ez && (uz = {
                    timeToFirstByte: 0,
                    firstByteToFCP: zz.value,
                    loadState: "complete",
                    navigationEntry: Ez
                  })
                }
                return Object.assign(zz, {
                  attribution: uz
                })
              })(uz))
            }), uz)
          }((zz => {
            const {
              firstByteToFCP: uz,
              timeToFirstByte: bz,
              loadState: Ez
            } = zz.attribution, nz = this.buildInitialValues(zz);
            this.addIfPresent(nz, "first_byte_to_fcp", uz), this.addIfPresent(nz, PE, bz);
            const iz = this.buildInitialContext(zz);
            this.addIfPresent(iz, LE, Ez), this.pushMeasurement(nz, iz)
          }), {
            reportAllChanges: null === (zz = this.webVitalConfig) || void 0 === zz ? void 0 : zz.reportAllChanges
          })
        }
        measureINP() {
          var zz;
          oE((zz => {
            var uz;
            const {
              interactionTime: bz,
              presentationDelay: Ez,
              inputDelay: nz,
              processingDuration: iz,
              nextPaintTime: lz,
              loadState: Mz,
              interactionTarget: tz,
              interactionType: Hz,
              totalScriptDuration: Oz,
              totalStyleAndLayoutDuration: pz,
              totalPaintDuration: dz,
              totalUnattributedDuration: Fz,
              longestScript: Zz
            } = zz.attribution, Rz = this.buildInitialValues(zz);
            this.addIfPresent(Rz, "interaction_time", bz), this.addIfPresent(Rz, "presentation_delay", Ez), this.addIfPresent(Rz, "input_delay", nz), this.addIfPresent(Rz, "processing_duration", iz), this.addIfPresent(Rz, "next_paint_time", lz), this.addNumberIfDefined(Rz, "total_script_duration", Oz), this.addNumberIfDefined(Rz, "total_style_and_layout_duration", pz), this.addNumberIfDefined(Rz, "total_paint_duration", dz), this.addNumberIfDefined(Rz, "total_unattributed_duration", Fz), this.addNumberIfDefined(Rz, "longest_script_intersecting_duration", null === Zz || void 0 === Zz ? void 0 : Zz.intersectingDuration);
            const Kz = this.buildInitialContext(zz);
            this.addIfPresent(Kz, LE, Mz), this.addIfPresent(Kz, "interaction_target", tz), this.addIfPresent(Kz, "interaction_type", Hz), this.addIfPresent(Kz, "longest_script_subpart", null === Zz || void 0 === Zz ? void 0 : Zz.subpart), this.addIfPresent(Kz, "longest_script_invoker_type", null === Zz || void 0 === Zz ? void 0 : Zz.entry.invokerType), (null === (uz = this.webVitalConfig) || void 0 === uz ? void 0 : uz.trackAttributionSources) && (this.addIfPresent(Kz, "longest_script_invoker", null === Zz || void 0 === Zz ? void 0 : Zz.entry.invoker), this.addIfPresent(Kz, "longest_script_source_url", null === Zz || void 0 === Zz ? void 0 : Zz.entry.sourceURL), this.addIfPresent(Kz, "longest_script_source_function_name", null === Zz || void 0 === Zz ? void 0 : Zz.entry.sourceFunctionName), this.addIfPresent(Kz, "longest_script_source_char_position", void 0 !== (null === Zz || void 0 === Zz ? void 0 : Zz.entry.sourceCharPosition) ? String(Zz.entry.sourceCharPosition) : void 0)), this.pushMeasurement(Rz, Kz)
          }), {
            reportAllChanges: null === (zz = this.webVitalConfig) || void 0 === zz ? void 0 : zz.reportAllChanges
          })
        }
        measureLCP() {
          var zz;
          ! function(zz) {
            let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            null != (uz = Object.assign({}, uz)).resourceBufferSize && (xE = uz.resourceBufferSize);
            const bz = Db(uz, NE),
              Ez = new WeakMap;
            nE(uz) && (bz.u = new Map), bz.m = zz => {
                const bz = zz.element;
                if (bz) {
                  const nz = uz.generateTarget?.(bz) ?? Sb(bz);
                  Ez.set(zz, nz)
                } else zz.id && Ez.set(zz, `#${zz.id}`)
              },
              function(zz) {
                let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  bz = !1;
                const Ez = nE(uz);
                tE((() => {
                  let nz, iz = uE(),
                    lz = bE("LCP");
                  const Mz = Db(uz, NE),
                    tz = (Ez, Mz, tz, Hz, Oz) => {
                      lz = bE("LCP", -1, Ez, Mz, tz, Hz, Oz), nz = jb(zz, lz, vE, uz.reportAllChanges), bz = !1, "soft-navigation" === Ez && (iz = uE(!0))
                    },
                    Hz = zz => {
                      Mz.u && zz.navigationId && iE(Mz.u, zz), bz || nz(!0), tz("soft-navigation", zz.navigationId, zz.interactionId, zz.name, zz.startTime);
                      const uz = zz.getLargestInteractionContentfulPaint?.();
                      uz && Oz([uz])
                    },
                    Oz = zz => {
                      uz.reportAllChanges || Ez || (zz = zz.slice(-1));
                      for (const uz of zz) {
                        if (!uz) continue;
                        if ("soft-navigation" === uz.entryType) {
                          Hz(uz);
                          continue
                        }
                        let zz = 0,
                          bz = [],
                          Ez = uz.startTime;
                        if ("largest-contentful-paint" === uz.entryType) zz = Math.max(uz.startTime - Bb(), 0), Mz.l(uz), bz = [uz];
                        else if ("interaction-contentful-paint" === uz.entryType) {
                          const nz = uz;
                          if (!lz.navigationId) continue;
                          if ("interactionId" in nz && nz.interactionId != lz.navigationInteractionId) continue;
                          Ez = nz.largestContentfulPaint?.renderTime || 0, zz = Math.max(Ez - uz.startTime, 0), nz.largestContentfulPaint && (Mz.l(nz.largestContentfulPaint), bz = [nz.largestContentfulPaint])
                        }
                        Ez < iz.firstHiddenTime && (lz.value = zz, lz.entries = bz, nz())
                      }
                    },
                    pz = ["largest-contentful-paint"];
                  Ez && pz.push("interaction-contentful-paint", "soft-navigation");
                  const dz = EE(pz, Oz);
                  if (dz) {
                    nz = jb(zz, lz, vE, uz.reportAllChanges);
                    const iz = ["keydown", "click", "visibilitychange"],
                      Mz = zz => {
                        if (zz.isTrusted && !bz) {
                          const zz = lz.id;
                          sE((() => {
                            if (!bz) {
                              if (!Ez) {
                                dz.disconnect();
                                for (const zz of iz) removeEventListener(zz, Mz, {
                                  capture: !0
                                })
                              }
                              zz === lz.id && (bz = !0, nz(!0))
                            }
                          }))
                        }
                      };
                    for (const zz of iz) addEventListener(zz, Mz, {
                      capture: !0
                    });
                    eb((Ez => {
                      tz("back-forward-cache", lz.navigationId, lz.navigationInteractionId, lz.navigationURL, Wb()), nz = jb(zz, lz, vE, uz.reportAllChanges), Ib((() => {
                        lz.value = performance.now() - Ez.timeStamp, bz = !0, nz(!0)
                      }))
                    }))
                  }
                }))
              }((uz => {
                zz((zz => {
                  let uz = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadDuration: 0,
                    elementRenderDelay: zz.value
                  };
                  if (zz.entries.length) {
                    const nz = zz.entries.at(-1),
                      iz = zz => zz.name === nz.url && (zz.requestStart || zz.startTime) <= nz.startTime,
                      lz = nz.url && (JE.findLast(iz) || performance.getEntriesByType("resource").findLast(iz));
                    let Mz;
                    uz.target = Ez.get(nz), uz.lcpEntry = nz, nz.url && (uz.url = nz.url), lz && (uz.lcpResourceEntry = lz);
                    let tz = 0,
                      Hz = 0;
                    if ("soft-navigation" !== zz.navigationType ? (Mz = Ub(), tz = Mz?.activationStart ?? 0, Hz = Mz?.responseStart ?? 0) : (tz = zz.navigationStartTime || 0, Mz = bz.u?.get(zz.navigationId)), Mz) {
                      const bz = Math.max(0, Hz - tz),
                        Ez = Math.max(bz, lz ? (lz.requestStart || lz.startTime) - tz : 0),
                        nz = Math.min(zz.value, Math.max(Ez, lz ? lz.responseEnd - tz : 0));
                      uz = {
                        ...uz,
                        timeToFirstByte: bz,
                        resourceLoadDelay: Ez - bz,
                        resourceLoadDuration: nz - Ez,
                        elementRenderDelay: zz.value - nz,
                        navigationEntry: Mz
                      }
                    }
                  }
                  return Object.assign(zz, {
                    attribution: uz
                  })
                })(uz))
              }), uz)
          }((zz => {
            var uz;
            const {
              elementRenderDelay: bz,
              resourceLoadDelay: Ez,
              resourceLoadDuration: nz,
              timeToFirstByte: iz,
              target: lz,
              url: Mz,
              lcpResourceEntry: tz
            } = zz.attribution, Hz = this.buildInitialValues(zz);
            this.addIfPresent(Hz, "element_render_delay", bz), this.addIfPresent(Hz, "resource_load_delay", Ez), this.addIfPresent(Hz, "resource_load_duration", nz), this.addIfPresent(Hz, PE, iz);
            const Oz = this.buildInitialContext(zz);
            this.addIfPresent(Oz, "element", lz), (null === (uz = this.webVitalConfig) || void 0 === uz ? void 0 : uz.trackAttributionSources) && (this.addIfPresent(Oz, "resource_url", Mz), this.addIfPresent(Oz, "resource_delivery_type", null === tz || void 0 === tz ? void 0 : tz.deliveryType), this.addIfPresent(Oz, "resource_initiator_type", null === tz || void 0 === tz ? void 0 : tz.initiatorType)), this.pushMeasurement(Hz, Oz)
          }), {
            reportAllChanges: null === (zz = this.webVitalConfig) || void 0 === zz ? void 0 : zz.reportAllChanges
          })
        }
        measureTTFB() {
          var zz;
          ! function(zz) {
            ! function(zz) {
              let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const bz = nE(uz);
              let Ez = bE("TTFB"),
                nz = jb(zz, Ez, AE, uz.reportAllChanges);
              TE((() => {
                const iz = Ub();
                if (iz) {
                  const lz = iz.responseStart;
                  Ez.value = Math.max(lz - Bb(), 0), Ez.entries = [iz], nz(!0), eb((() => {
                    Ez = bE("TTFB", 0, "back-forward-cache", Ez.navigationId, Ez.navigationInteractionId, Ez.navigationURL, Wb()), nz = jb(zz, Ez, AE, uz.reportAllChanges), nz(!0)
                  })), bz && EE(["soft-navigation"], (bz => {
                    bz.forEach((bz => {
                      bz.navigationId && (Ez = bE("TTFB", 0, "soft-navigation", bz.navigationId, bz.interactionId, bz.name, bz.startTime), Ez.entries = [bz], nz = jb(zz, Ez, AE, uz.reportAllChanges), nz(!0))
                    }))
                  }), uz)
                }
              }))
            }((uz => {
              zz((zz => {
                const uz = zz.entries[0];
                let bz = {
                  waitingDuration: 0,
                  cacheDuration: 0,
                  dnsDuration: 0,
                  connectionDuration: 0,
                  requestDuration: 0,
                  navigationEntry: uz
                };
                if (zz.entries.length && uz instanceof PerformanceNavigationTiming) {
                  const Ez = uz.activationStart || 0,
                    nz = Math.max((uz.workerStart || uz.fetchStart || 0) - Ez, 0),
                    iz = Math.max(uz.domainLookupStart - Ez, 0),
                    lz = Math.max(uz.connectStart - Ez, 0),
                    Mz = Math.max(uz.connectEnd - Ez, 0);
                  bz = {
                    waitingDuration: nz,
                    cacheDuration: iz - nz,
                    dnsDuration: lz - iz,
                    connectionDuration: Mz - lz,
                    requestDuration: zz.value - Mz,
                    navigationEntry: uz
                  }
                }
                return Object.assign(zz, {
                  attribution: bz
                })
              })(uz))
            }), arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
          }((zz => {
            const {
              dnsDuration: uz,
              connectionDuration: bz,
              requestDuration: Ez,
              waitingDuration: nz,
              cacheDuration: iz
            } = zz.attribution, lz = this.buildInitialValues(zz);
            this.addIfPresent(lz, "dns_duration", uz), this.addIfPresent(lz, "connection_duration", bz), this.addIfPresent(lz, "request_duration", Ez), this.addIfPresent(lz, "waiting_duration", nz), this.addIfPresent(lz, "cache_duration", iz);
            const Mz = this.buildInitialContext(zz);
            this.pushMeasurement(lz, Mz)
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
          var uz;
          const bz = null !== (uz = zu("com.grafana.faro.lastNavigationId", Cz)) && void 0 !== uz ? uz : mb;
          return {
            id: zz.id,
            rating: zz.rating,
            navigation_type: zz.navigationType,
            navigation_entry_id: bz
          }
        }
        pushMeasurement(zz, uz) {
          this.corePushMeasurement({
            type: "web-vitals",
            values: zz
          }, {
            context: uz
          })
        }
        addIfPresent(zz, uz, bz) {
          bz && (zz[uz] = bz)
        }
        addNumberIfDefined(zz, uz, bz) {
          void 0 !== bz && (zz[uz] = bz)
        }
      },
      aE = class extends ub {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-web-vitals", this.version = bb
        }
        initialize() {
          this.logDebug("Initializing"), new GE(this.api.pushMeasurement, this.config.webVitalsInstrumentation).initialize()
        }
      };
    const VE = /^00-[a-f0-9]{32}-[a-f0-9]{16}-[0-9]{1,2}$/;

    function mE() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      for (const uz of zz)
        if ("traceparent" === uz.name) {
          if (!VE.test(uz.description)) continue;
          const [, zz, bz] = uz.description.split("-");
          if (null != zz && null != bz) return {
            traceId: zz,
            spanId: bz
          };
          break
        }
    }

    function qE(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
        wallNow: Date.now(),
        monoNow: performance.now()
      };
      const {
        wallNow: bz,
        monoNow: Ez
      } = uz;
      return Math.min(bz, bz - (Ez - zz))
    }

    function hE(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      for (const [bz, Ez] of Object.entries(uz)) {
        const uz = zz[bz];
        return null != uz && (Lz(Ez) ? Ez.includes(uz) : uz === Ez)
      }
      return !0
    }

    function UE(zz) {
      const {
        connectEnd: uz,
        connectStart: bz,
        decodedBodySize: Ez,
        domainLookupEnd: nz,
        domainLookupStart: iz,
        duration: lz,
        encodedBodySize: Mz,
        fetchStart: tz,
        initiatorType: Hz,
        name: Oz,
        nextHopProtocol: pz,
        redirectEnd: dz,
        redirectStart: Fz,
        renderBlockingStatus: Zz,
        requestStart: Rz,
        responseEnd: Kz,
        responseStart: wz,
        responseStatus: Xz,
        secureConnectionStart: fz,
        transferSize: sz,
        workerStart: rz
      } = zz;
      return {
        name: Oz,
        httpHost: gE(Oz),
        duration: SE(lz),
        tcpHandshakeTime: SE(uz - bz),
        dnsLookupTime: SE(nz - iz),
        tlsNegotiationTime: SE(uz - fz),
        responseStatus: SE(Xz),
        redirectTime: SE(dz - Fz),
        requestTime: SE(wz - Rz),
        responseTime: SE(Kz - wz),
        fetchTime: SE(Kz - tz),
        serviceWorkerTime: SE(rz > 0 ? tz - rz : 0),
        decodedBodySize: SE(Ez),
        encodedBodySize: SE(Mz),
        cacheHitStatus: function() {
          let zz = "fullLoad";
          0 === sz ? Ez > 0 && (zz = "cache") : null != Xz ? 304 === Xz && (zz = "conditionalFetch") : Mz > 0 && sz < Mz && (zz = "conditionalFetch");
          return zz
        }(),
        renderBlockingStatus: SE(Zz),
        protocol: pz,
        initiatorType: Hz,
        visibilityState: document.visibilityState,
        ttfb: SE(wz - Rz),
        transferSize: SE(sz)
      }
    }

    function cE(zz) {
      const {
        activationStart: uz,
        domComplete: bz,
        domContentLoadedEventEnd: Ez,
        domContentLoadedEventStart: nz,
        domInteractive: iz,
        fetchStart: lz,
        loadEventEnd: Mz,
        loadEventStart: tz,
        responseStart: Hz,
        type: Oz
      } = zz, pz = function() {
        var zz;
        return null != (null === (zz = performance.timing) || void 0 === zz ? void 0 : zz.domLoading) ? performance.timing.domLoading - performance.timeOrigin : null
      }();
      return Ou(Ou({}, UE(zz)), {}, {
        pageLoadTime: SE(bz - lz),
        documentParsingTime: SE(pz ? iz - pz : null),
        domProcessingTime: SE(bz - iz),
        domContentLoadHandlerTime: SE(Ez - nz),
        onLoadTime: SE(Mz - tz),
        ttfb: SE(Math.max(Hz - (null !== uz && void 0 !== uz ? uz : 0), 0)),
        type: Oz
      })
    }

    function gE(zz) {
      try {
        return new URL(zz).host || mb
      } catch (uz) {
        return mb
      }
    }

    function SE(zz) {
      return null == zz ? mb : "number" === typeof zz ? Math.round(zz > 0 ? zz : 0).toString() : zz.toString()
    }
    const yE = {
      initiatorType: ["xmlhttprequest", "fetch"]
    };

    function DE(zz, uz, bz, Ez, nz, iz, lz) {
      try {
        var Mz = zz[iz](lz),
          tz = Mz.value
      } catch (zz) {
        return void bz(zz)
      }
      Mz.done ? uz(tz) : Promise.resolve(tz).then(Ez, nz)
    }

    function QE(zz) {
      return function() {
        var uz = this,
          bz = arguments;
        return new Promise((function(Ez, nz) {
          var iz = zz.apply(uz, bz);

          function lz(zz) {
            DE(iz, Ez, nz, lz, Mz, "next", zz)
          }

          function Mz(zz) {
            DE(iz, Ez, nz, lz, Mz, "throw", zz)
          }
          lz(void 0)
        }))
      }
    }
    const WE = new Xb;
    var eE = class extends ub {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-performance", this.version = bb
      }
      initialize() {
        var zz = this;
        if (!("PerformanceObserver" in window)) return void this.logDebug("performance observer not supported. Disable performance instrumentation.");
        let uz = !1;
        const bz = () => {
          ! function(zz) {
            if ("complete" === document.readyState) zz();
            else {
              const uz = () => {
                "complete" === document.readyState && (zz(), document.removeEventListener("readystatechange", uz))
              };
              document.addEventListener("readystatechange", uz)
            }
          }(QE((function*() {
            if (uz) return;
            const bz = zz.api.pushEvent,
              {
                faroNavigationId: Ez
              } = yield function(zz) {
                let uz;
                const bz = new Promise((zz => {
                  uz = zz
                }));
                return new PerformanceObserver((bz => {
                  var Ez;
                  const [nz] = bz.getEntries();
                  if (null == nz || Iz(nz.name)) return;
                  const iz = nz.toJSON();
                  let lz = mE(null === iz || void 0 === iz ? void 0 : iz.serverTiming);
                  const Mz = null !== (Ez = zu("com.grafana.faro.lastNavigationId", Cz)) && void 0 !== Ez ? Ez : mb,
                    tz = Ou(Ou({}, cE(iz)), {}, {
                      faroNavigationId: wu(),
                      faroPreviousNavigationId: Mz
                    });
                  uu("com.grafana.faro.lastNavigationId", tz.faroNavigationId, Cz), zz("faro.performance.navigation", tz, void 0, {
                    spanContext: lz,
                    timestampOverwriteMs: qE(iz.startTime)
                  }), uz(tz)
                })).observe({
                  type: "navigation",
                  buffered: !0
                }), bz
              }(bz);
            uz || null == Ez || function(zz, uz, bz, Ez) {
              const nz = Ez.trackResources;
              new PerformanceObserver((Ez => {
                const iz = Ez.getEntries(),
                  lz = {
                    wallNow: Date.now(),
                    monoNow: performance.now()
                  };
                for (const Mz of iz) {
                  if (Iz(Mz.name)) continue;
                  null === bz || void 0 === bz || bz.notify({
                    type: "resource"
                  });
                  const Ez = Mz.toJSON();
                  let iz = mE(null === Ez || void 0 === Ez ? void 0 : Ez.serverTiming);
                  (null == nz && hE(Ez, yE) || nz) && uz("faro.performance.resource", Ou(Ou({}, UE(Ez)), {}, {
                    faroNavigationId: zz,
                    faroResourceId: wu()
                  }), void 0, {
                    spanContext: iz,
                    timestampOverwriteMs: qE(Ez.startTime, lz)
                  })
                }
              })).observe({
                type: "resource",
                buffered: !0
              })
            }(Ez, bz, WE, zz.config)
          })))
        };
        this.cancelInitialization = () => {
          uz = !0, document.removeEventListener("prerenderingchange", bz)
        }, document.prerendering ? document.addEventListener("prerenderingchange", bz, {
          once: !0
        }) : bz()
      }
      destroy() {
        var zz;
        null === (zz = this.cancelInitialization) || void 0 === zz || zz.call(this), this.cancelInitialization = void 0
      }
    };
    const jE = "data-faro-user-action-name",
      IE = jE.replace(/-name$/, "-timeout"),
      BE = 1e3;

    function CE(zz) {
      return `data-${(zz.startsWith("data-")?zz.slice(5):zz).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`
    }

    function YE(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
        bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Du;
      if (void 0 === zz) return uz;
      let Ez = NaN;
      try {
        Ez = "string" === typeof zz && "" === zz.trim() ? NaN : Number(zz)
      } catch (nz) {}
      return !Number.isFinite(Ez) || Ez <= 0 ? (bz(`initialActivityTimeout must be a finite number greater than zero; using ${uz} ms`), uz) : Ez > 1e3 ? (bz(`initialActivityTimeout cannot exceed ${BE} ms; clamping to the maximum`), BE) : Ez
    }

    function kE(zz, uz, bz) {
      return void 0 !== zz && window.clearTimeout(zz), window.setTimeout((() => {
        uz()
      }), bz)
    }

    function zn(zz) {
      return zz.type === wb
    }
    let un, bn;

    function En() {
      return un || (un = new Xb), bn || (bn = new MutationObserver(((zz, uz) => {
        un.notify({
          type: "dom-mutation"
        })
      })), bn.observe(document, {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0
      })), un
    }
    const nn = "fetch",
      Mn = "xhr";
    let tn, Hn, On, pn, dn = !1;

    function Fn() {
      if (tn) return tn;

      function zz(zz) {
        tn.notify({
          type: Kb,
          request: zz
        })
      }

      function uz(zz) {
        tn.notify({
          type: wb,
          request: zz
        })
      }
      return tn = new Xb, dn || (! function(zz) {
        let {
          onRequestEnd: uz,
          onRequestStart: bz
        } = zz;
        On || (On = window.fetch);
        window.fetch = function() {
          var zz, Ez;
          const nz = null !== (zz = Bz(arguments[0])) && void 0 !== zz ? zz : "",
            iz = Iz(nz),
            lz = (null !== (Ez = arguments[1]) && void 0 !== Ez ? Ez : {}).method,
            Mz = wu();
          return iz || bz({
            url: nz,
            method: lz,
            requestId: Mz,
            apiType: nn
          }), On.apply(this, arguments).then((zz => (iz || uz({
            url: nz,
            method: lz,
            requestId: Mz,
            apiType: nn
          }), zz))).catch((zz => {
            throw iz || uz({
              url: nz,
              method: lz,
              requestId: Mz,
              apiType: nn
            }), zz
          }))
        }
      }({
        onRequestStart: zz,
        onRequestEnd: uz
      }), function(zz) {
        let {
          onRequestStart: uz,
          onRequestEnd: bz
        } = zz;
        Hn || (Hn = XMLHttpRequest.prototype.open);
        XMLHttpRequest.prototype.open = function() {
          const zz = arguments[1],
            Ez = Iz(zz),
            nz = arguments[0],
            iz = wu();
          this.addEventListener("loadstart", (function() {
            Ez || uz({
              url: zz,
              method: nz,
              requestId: iz,
              apiType: Mn
            })
          })), this.addEventListener("load", (function() {
            Ez || bz({
              url: zz,
              method: nz,
              requestId: iz,
              apiType: Mn
            })
          })), this.addEventListener("error", (function() {
            Ez || bz({
              url: zz,
              method: nz,
              requestId: iz,
              apiType: Mn
            })
          })), this.addEventListener("abort", (function() {
            Ez || bz({
              url: zz,
              method: nz,
              requestId: iz,
              apiType: Mn
            })
          })), Hn.apply(this, arguments)
        }
      }({
        onRequestStart: zz,
        onRequestEnd: uz
      }), dn = !0), tn
    }
    let Zn, Rn = !1;
    let Kn = function(zz) {
      return zz[zz.Started = 0] = "Started", zz[zz.Halted = 1] = "Halted", zz[zz.Cancelled = 2] = "Cancelled", zz[zz.Ended = 3] = "Ended", zz
    }({});
    var wn = class {
      constructor(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        this.userAction = zz, this.logDebug = uz, this.initialActivityTimeout = bz, this.http = Fn(), this.dom = En(), this.perf = (pn || (pn = new Xb), Rn || (Zn = WE.subscribe((zz => {
          "resource" === zz.type && pn.notify({
            type: "resource-entry"
          })
        })), Rn = !0), pn), this.isValid = !1, this.runningRequests = new Map
      }
      attach() {
        this.allMonitorsSub = (new Xb).merge(this.http, this.dom, this.perf).takeWhile((() => [Kn.Started, Kn.Halted].includes(this.userAction.getState()))).filter((zz => !!(this.userAction.getState() !== Kn.Halted || zn(zz) && this.runningRequests.has(zz.request.requestId)))).subscribe((zz => {
          (function(zz) {
            return zz.type === Kb
          })(zz) && this.runningRequests.set(zz.request.requestId, zz.request), zn(zz) && this.runningRequests.delete(zz.request.requestId), zn(zz) ? this.userAction.getState() === Kn.Halted && 0 === this.runningRequests.size && this.endAction() : (this.isValid || (this.isValid = !0, this.clearTimer(this.startupTid)), this.scheduleFollowUp())
        })), this.stateSub = this.userAction.filter((zz => [Kn.Ended, Kn.Cancelled].includes(zz))).first().subscribe((() => this.cleanup())), this.startupTid = kE(this.startupTid, (() => {
          this.logDebug("User action not sent; no DOM, resource, or HTTP activity:", this.userAction.name), this.cancelAction()
        }), this.initialActivityTimeout)
      }
      scheduleFollowUp() {
        this.clearTimer(this.followUpTid), this.followUpTid = window.setTimeout((() => {
          this.userAction.getState() === Kn.Started && this.runningRequests.size > 0 ? this.haltAction() : this.isValid ? this.endAction() : this.cancelAction()
        }), 100)
      }
      haltAction() {
        this.userAction.getState() === Kn.Started && (this.userAction.halt(), this.startHaltTimeout())
      }
      startHaltTimeout() {
        this.clearTimer(this.haltTid), this.haltTid = kE(this.haltTid, (() => {
          this.userAction.getState() === Kn.Halted && this.endAction()
        }), 1e4)
      }
      endAction() {
        this.userAction.end(), this.cleanup()
      }
      cancelAction() {
        this.userAction.cancel(), this.cleanup()
      }
      cleanup() {
        var zz, uz;
        this.clearTimer(this.startupTid), this.clearTimer(this.followUpTid), this.clearTimer(this.haltTid), null === (zz = this.allMonitorsSub) || void 0 === zz || zz.unsubscribe(), null === (uz = this.stateSub) || void 0 === uz || uz.unsubscribe(), this.allMonitorsSub = void 0, this.stateSub = void 0, this.runningRequests.clear()
      }
      clearTimer(zz) {
        void 0 !== zz && window.clearTimeout(zz)
      }
    };

    function Xn(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Du;
      var bz;
      const {
        api: Ez,
        config: nz,
        internalLogger: iz
      } = zz, lz = YE(null === (bz = nz.userActionsInstrumentation) || void 0 === bz ? void 0 : bz.initialActivityTimeout, 100, uz);
      return {
        processUserEvent: function(zz) {
          var uz, bz;
          const iz = null !== (uz = null === (bz = nz.userActionsInstrumentation) || void 0 === bz ? void 0 : bz.dataAttributeName) && void 0 !== uz ? uz : jE,
            lz = zz.target;
          if (!(lz instanceof Element)) return;
          const Mz = function(zz, uz) {
              let bz = zz;
              for (; bz;) {
                if (bz.hasAttribute(uz)) return bz;
                bz = bz.parentElement
              }
              return null
            }(lz, CE(iz)),
            tz = function(zz, uz) {
              if (!zz) return;
              const bz = function(zz) {
                  return CE(zz).slice(5).replace(/-(.)/g, ((zz, uz) => uz.toUpperCase()))
                }(uz),
                Ez = zz.dataset;
              for (const nz in Ez)
                if (nz === bz) return Ez[nz]
            }(Mz, iz);
          if (!Mz || !tz) return;
          const Hz = function(zz, uz) {
            const bz = zz.getAttribute(function(zz) {
              const uz = CE(zz);
              return uz.endsWith("-name") ? `${uz.slice(0,-5)}-timeout` : `${uz}-timeout`
            }(uz));
            return null === bz ? void 0 : Number(bz)
          }(Mz, iz);
          Ez.startUserAction(tz, {}, {
            triggerName: zz.type,
            initialActivityTimeout: Hz
          })
        },
        processUserActionStarted: function(zz, bz) {
          const Ez = zz,
            nz = YE(bz, lz, uz);
          new wn(Ez, iz.debug, nz).attach()
        }
      }
    }
    const fn = "user_action_start",
      sn = {
        Normal: "normal",
        Critical: "critical"
      };
    var rn = class {
        constructor() {
          this.buffer = []
        }
        addItem(zz) {
          this.buffer.push(zz)
        }
        flushBuffer(zz) {
          if (Tz(zz))
            for (const uz of this.buffer) zz(uz);
          this.buffer.length = 0
        }
        size() {
          return this.buffer.length
        }
      },
      Nn = class extends Xb {
        constructor(zz) {
          let {
            name: uz,
            parentId: bz,
            trigger: Ez,
            transports: nz,
            attributes: iz,
            trackUserActionsExcludeItem: lz,
            importance: Mz = sn.Normal,
            pushEvent: tz
          } = zz;
          super(), this.name = uz, this.attributes = iz, this.id = wu(), this.trigger = Ez, this.parentId = null !== bz && void 0 !== bz ? bz : this.id, this.trackUserActionsExcludeItem = lz, this.importance = Mz, this._pushEvent = tz, this._itemBuffer = new rn, this._transports = nz, this._state = 0, this._start()
        }
        addItem(zz) {
          return 0 === this._state && (this._itemBuffer.addItem(zz), !0)
        }
        _start() {
          this._state = 0, 0 === this._state && (this.startTime = du(), this._startTimeMono = Fu())
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
          const zz = du(),
            uz = Fu() - this._startTimeMono;
          this._state = 3, this._itemBuffer.flushBuffer((zz => {
            if (function(zz, uz) {
                return (null === uz || void 0 === uz ? void 0 : uz(zz)) || "measurement" === zz.type && "web-vitals" === zz.payload.type
              }(zz, this.trackUserActionsExcludeItem)) return void this._transports.execute(zz);
            const uz = Yu(Yu({}, zz), {}, {
              payload: Yu(Yu({}, zz.payload), {}, {
                action: {
                  parentId: this.id,
                  name: this.name
                }
              })
            });
            this._transports.execute(uz)
          })), this._state = 3, this.notify(this._state), this._pushEvent("faro.user.action", Yu({
            userActionName: this.name,
            userActionStartTime: this.startTime.toString(),
            userActionEndTime: zz.toString(),
            userActionDuration: uz.toString(),
            userActionTrigger: this.trigger,
            userActionImportance: this.importance
          }, qu(this.attributes)), void 0, {
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
    const vn = new Xb;

    function xn(zz, uz) {
      return !!zz && (0 === (null === zz || void 0 === zz ? void 0 : zz.getState()) && (zz.addItem(uz), !0))
    }
    var Jn = class extends ub {
        constructor() {
          super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-user-action", this.version = bb
        }
        initialize() {
          const {
            processUserEvent: zz,
            processUserActionStarted: uz
          } = Xn(Rz, (zz => this.logWarn(zz)));
          this._processUserEvent = zz, this._processKeydown = uz => {
            [" ", "Enter"].includes(uz.key) && zz(uz)
          }, window.addEventListener("pointerdown", this._processUserEvent), window.addEventListener("keydown", this._processKeydown), this._userActionSub = vn.subscribe((zz => {
            let {
              type: bz,
              userAction: Ez,
              initialActivityTimeout: nz
            } = zz;
            "user_action_start" === bz && uz(Ez, nz)
          }))
        }
        destroy() {
          var zz;
          this._processUserEvent && window.removeEventListener("pointerdown", this._processUserEvent), this._processKeydown && window.removeEventListener("keydown", this._processKeydown), null === (zz = this._userActionSub) || void 0 === zz || zz.unsubscribe()
        }
      },
      An = class extends ub {
        constructor() {
          super(), this.name = "@grafana/faro-web-sdk:instrumentation-csp", this.version = bb, this.boundSecuritypolicyviolationHandler = this.securitypolicyviolationHandler.bind(this)
        }
        initialize() {
          document.addEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        destroy() {
          document.removeEventListener("securitypolicyviolation", this.boundSecuritypolicyviolationHandler)
        }
        securitypolicyviolationHandler(zz) {
          const uz = {
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
          this.api.pushEvent("securitypolicyviolation", qu(uz))
        }
      };
    var Tn = class extends Xb {
      constructor(zz, uz) {
        var bz, Ez, nz, iz;
        super(), this._tracking = !1, this.eventsObservable = zz, this._options = {
          inactivityMs: null !== (bz = null === uz || void 0 === uz ? void 0 : uz.inactivityMs) && void 0 !== bz ? bz : 100,
          drainTimeoutMs: null !== (Ez = null === uz || void 0 === uz ? void 0 : uz.drainTimeoutMs) && void 0 !== Ez ? Ez : 1e4,
          isOperationStart: null !== (nz = null === uz || void 0 === uz ? void 0 : uz.isOperationStart) && void 0 !== nz ? nz : () => {},
          isOperationEnd: null !== (iz = null === uz || void 0 === uz ? void 0 : uz.isOperationEnd) && void 0 !== iz ? iz : () => {}
        }, this._initialize()
      }
      _initialize() {
        this.eventsObservable.filter((() => this._tracking)).subscribe((zz => {
          var uz;
          this._lastEventTime = Fu(), null === (uz = this._currentEvents) || void 0 === uz || uz.push(zz);
          const bz = this._options.isOperationStart(zz);
          var Ez;
          bz && (null === (Ez = this._activeOperations) || void 0 === Ez || Ez.set(bz, !0));
          const nz = this._options.isOperationEnd(zz);
          var iz;
          nz && (null === (iz = this._activeOperations) || void 0 === iz || iz.delete(nz));
          this._scheduleInactivityCheck()
        }))
      }
      startTracking() {
        this._tracking || (this._tracking = !0, this._startTime = Fu(), this._lastEventTime = this._startTime, this.notify({
          message: "tracking-started"
        }), this._currentEvents = [], this._activeOperations = new Map, this._scheduleInactivityCheck())
      }
      stopTracking() {
        let zz;
        this._tracking = !1, this._clearTimer(this._inactivityTid), this._clearTimer(this._drainTid), zz = this.hasActiveOperations() ? Fu() - this._startTime : this._lastEventTime ? this._lastEventTime - this._startTime : 0, this.notify({
          message: "tracking-ended",
          events: this._currentEvents,
          duration: zz
        })
      }
      _scheduleInactivityCheck() {
        this._inactivityTid = Ln(this._inactivityTid, (() => {
          this.hasActiveOperations() ? this._startDrainTimeout() : this.stopTracking()
        }), this._options.inactivityMs)
      }
      _startDrainTimeout() {
        this._drainTid = Ln(this._drainTid, (() => {
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

    function Ln(zz, uz, bz) {
      return zz && clearTimeout(zz), zz = setTimeout((() => {
        uz()
      }), bz)
    }
    let Pn;
    const Gn = new Set,
      an = new Map;
    let Vn, mn, qn, hn, Un, cn, gn, Sn, yn = !1;
    var Dn = class extends ub {
      constructor() {
        super(...arguments), this.name = "@grafana/faro-web-sdk:instrumentation-navigation", this.version = bb
      }
      initialize() {
        const zz = Fn(),
          uz = En(),
          bz = function() {
            function zz(zz, uz) {
              const bz = null !== uz && void 0 !== uz ? uz : location.href;
              bz !== mn && (Vn.notify({
                type: "url-change",
                from: mn,
                to: bz,
                trigger: zz
              }), mn = bz)
            }
            if (Vn || (Vn = new Xb, mn = location.href), !yn)
              if ("navigation" in window && "NavigateEvent" in window) {
                gn = uz => {
                  try {
                    const bz = null === uz || void 0 === uz ? void 0 : uz.destination;
                    (null === bz || void 0 === bz ? void 0 : bz.sameDocument) && "string" === typeof bz.url && zz("navigate", bz.url)
                  } catch (bz) {}
                }, window.navigation.addEventListener("navigate", gn);
                const uz = window.NavigateEvent;
                uz && uz.prototype && "function" === typeof uz.prototype.intercept && (Sn || (Sn = uz.prototype.intercept), uz.prototype.intercept = function(uz) {
                  try {
                    const uz = !!(null === this || void 0 === this ? void 0 : this.canIntercept),
                      bz = null === this || void 0 === this ? void 0 : this.destination;
                    uz && bz && !1 === bz.sameDocument && "string" === typeof bz.url && zz("navigate-intercept", bz.url)
                  } catch (bz) {}
                  return Sn.call(this, uz)
                }), yn = !0
              } else qn || (qn = window.history.pushState), window.history.pushState = function() {
                for (var uz = arguments.length, bz = new Array(uz), Ez = 0; Ez < uz; Ez++) bz[Ez] = arguments[Ez];
                const nz = qn.apply(window.history, bz);
                return zz("pushState"), nz
              }, hn || (hn = window.history.replaceState), window.history.replaceState = function() {
                for (var uz = arguments.length, bz = new Array(uz), Ez = 0; Ez < uz; Ez++) bz[Ez] = arguments[Ez];
                const nz = hn.apply(window.history, bz);
                return zz("replaceState"), nz
              }, Un = () => zz("popstate"), cn = () => zz("hashchange"), window.addEventListener("popstate", Un), window.addEventListener("hashchange", cn), yn = !0;
            return Vn
          }(),
          Ez = (nz = ["pointerdown", "keydown"], Pn || (Pn = new Xb), nz.forEach((zz => {
            if (!Gn.has(zz)) {
              const uz = () => {
                Pn.notify({
                  type: "interaction",
                  name: zz
                })
              };
              window.addEventListener(zz, uz), Gn.add(zz), an.set(zz, uz)
            }
          })), Pn);
        var nz;
        const iz = new Tn((new Xb).merge(zz, uz, bz), {
          inactivityMs: 100,
          drainTimeoutMs: 1e4,
          isOperationStart: zz => function(zz) {
            return zz.type === Kb
          }(zz) ? zz.request.requestId : void 0,
          isOperationEnd: zz => function(zz) {
            return zz.type === wb
          }(zz) ? zz.request.requestId : void 0
        });
        iz.filter((zz => "tracking-ended" === zz.message)).subscribe((zz => {
          var uz, bz;
          if ((null === (uz = zz.events) || void 0 === uz ? void 0 : uz.some((zz => "url-change" === zz.type))) && (null === (bz = zz.events) || void 0 === bz ? void 0 : bz.some((zz => "dom-mutation" === zz.type)))) {
            var Ez;
            const uz = null === (Ez = zz.events) || void 0 === Ez ? void 0 : Ez.find((zz => "url-change" === zz.type));
            Rz.api.pushEvent("faro.navigation", {
              fromUrl: null === uz || void 0 === uz ? void 0 : uz.from,
              toUrl: null === uz || void 0 === uz ? void 0 : uz.to,
              sameDocument: String(!0),
              duration: zz.duration
            })
          }
        })), Ez.subscribe((() => {
          iz.startTracking()
        }))
      }
    };

    function Qn() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const uz = [new Jn, new Vb, new aE, new Eb, new qb, new Dn];
      return !1 !== zz.enablePerformanceInstrumentation && uz.unshift(new eE), !1 !== zz.enableContentSecurityPolicyInstrumentation && uz.push(new An), !1 !== zz.captureConsole && uz.push(new Gb), uz
    }
    var Wn = bz(6424);
    let en, jn;

    function In() {
      const zz = "undefined" !== typeof navigator ? navigator.userAgent : "";
      return en === zz && jn || (jn = new Wn.UAParser(zz).getResult(), en = zz), jn
    }
    const Bn = () => {
        const {
          browser: zz,
          os: uz,
          ua: bz
        } = In(), {
          name: Ez,
          version: nz
        } = zz, {
          name: iz,
          version: lz
        } = uz, Mz = navigator.language, tz = bz.includes("Mobi"), Hz = function() {
          if (!Ez || !nz) return;
          if ("userAgentData" in navigator && navigator.userAgentData) return navigator.userAgentData.brands
        }();
        return {
          browser: {
            name: null !== Ez && void 0 !== Ez ? Ez : mb,
            version: null !== nz && void 0 !== nz ? nz : mb,
            os: `${null!==iz&&void 0!==iz?iz:mb} ${null!==lz&&void 0!==lz?lz:mb}`,
            userAgent: null !== bz && void 0 !== bz ? bz : mb,
            language: null !== Mz && void 0 !== Mz ? Mz : mb,
            mobile: tz,
            brands: null !== Hz && void 0 !== Hz ? Hz : mb,
            viewportWidth: `${window.innerWidth}`,
            viewportHeight: `${window.innerHeight}`
          }
        }
      },
      Cn = () => {
        const {
          name: zz,
          version: uz
        } = In().os;
        if (!zz && !uz) return {};
        const bz = {};
        return zz && (bz.name = zz), uz && (bz.version = uz), {
          os: bz
        }
      };

    function Yn(zz) {
      var uz, bz, Ez;
      return {
        id: null !== (uz = null === (bz = Rz.config) || void 0 === bz || null === (bz = bz.sessionTracking) || void 0 === bz || null === (Ez = bz.generateSessionId) || void 0 === Ez ? void 0 : Ez.call(bz)) && void 0 !== uz ? uz : wu(),
        attributes: zz
      }
    }
    const kn = () => ({
      sdk: {
        name: "faro-web",
        version: bb
      }
    });
    var zi = class extends zb {
      isBatched() {
        return !1
      }
      getIgnoreUrls() {
        return []
      }
    };
    let ui = function(zz) {
      return zz.EXCEPTION = "exception", zz.LOG = "log", zz.MEASUREMENT = "measurement", zz.TRACE = "trace", zz.EVENT = "event", zz
    }({});
    const bi = {
      exception: "exceptions",
      log: "logs",
      measurement: "measurements",
      trace: "traces",
      event: "events"
    };

    function Ei(zz, uz) {
      var bz, Ez;
      if (void 0 === uz) return zz;
      if (void 0 === zz) return {
        resourceSpans: uz
      };
      const nz = null === (bz = zz.resourceSpans) || void 0 === bz ? void 0 : bz[0];
      if (void 0 === nz) return zz;
      const iz = (null === nz || void 0 === nz ? void 0 : nz.scopeSpans) || [],
        lz = (null === uz || void 0 === uz || null === (Ez = uz[0]) || void 0 === Ez ? void 0 : Ez.scopeSpans) || [];
      return Yu(Yu({}, zz), {}, {
        resourceSpans: [Yu(Yu({}, nz), {}, {
          scopeSpans: [...iz, ...lz]
        })]
      })
    }

    function ni(zz) {
      let uz = {
        meta: {}
      };
      return void 0 !== zz[0] && (uz.meta = zz[0].meta), zz.forEach((zz => {
        switch (zz.type) {
          case "log":
          case "event":
          case "exception":
          case "measurement": {
            const bz = bi[zz.type],
              Ez = uz[bz];
            uz = Yu(Yu({}, uz), {}, {
              [bz]: void 0 === Ez ? [zz.payload] : [...Ez, zz.payload]
            });
            break
          }
          case "trace":
            uz = Yu(Yu({}, uz), {}, {
              traces: Ei(uz.traces, zz.payload.resourceSpans)
            })
        }
      })), uz
    }
    var ii = class extends zi {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super(), this.options = zz, this.name = "@grafana/faro-web-sdk:transport-console", this.version = bb
      }
      send(zz) {
        var uz;
        return this.unpatchedConsole[null !== (uz = this.options.level) && void 0 !== uz ? uz : fb.DEBUG]("New event", ni([zz]))
      }
    };
    const li = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), ([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      Mi = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), ([0-9]{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2}) GMT$/,
      ti = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (?:(?:([0-9]{2}))|(?: ([0-9]))) ([0-9]{2}):([0-9]{2}):([0-9]{2}) ([0-9]{4})$/,
      Hi = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      Oi = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      di = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function Fi(zz) {
      let {
        weekday: uz,
        day: bz,
        month: Ez,
        year: nz,
        hour: iz,
        minute: lz,
        second: Mz
      } = zz;
      if (nz < 1900 || bz < 1 || iz > 23 || lz > 59 || Mz > 60) return;
      const tz = 60 === Mz,
        Hz = new Date(0);
      return Hz.setUTCFullYear(nz, Ez, bz), Hz.setUTCHours(iz, lz, tz ? 59 : Mz, 0), Hz.getUTCDay() === uz && Hz.getUTCDate() === bz && Hz.getUTCMonth() === Ez && Hz.getUTCFullYear() === nz && Hz.getUTCHours() === iz && Hz.getUTCMinutes() === lz && Hz.getUTCSeconds() === (tz ? 59 : Mz) ? Hz.getTime() + (tz ? 1e3 : 0) : void 0
    }
    var Zi = class {
      constructor(zz) {
        this.options = zz, this.admitted = 0, this.inProgress = 0, this.sequence = 0, this.nextSendAt = 0, this.attemptQueue = [], this.waiting = [], this.unloading = !1
      }
      reserve() {
        var zz = this;
        if (this.admitted >= this.options.bufferSize) return;
        this.admitted++;
        const uz = this.sequence++;
        let bz = !1;
        return {
          deliver: function() {
            var bz = QE((function*(bz) {
              const Ez = zz.options.getNow();
              let nz, iz = 0;
              for (;;) {
                var lz, Mz, tz;
                const Hz = zz.options.retry.maxAttempts - iz,
                  Oz = yield zz.runAttempt((() => bz(Hz, zz.unloading)), iz > 0);
                if (iz += Oz.attemptsMade, "success" === Oz.kind) return {
                  kind: "success",
                  attempts: iz,
                  elapsedTimeMs: zz.options.getNow() - Ez
                };
                if (nz = Oz.failure, "terminal" === Oz.kind || zz.unloading) return {
                  kind: "terminal",
                  attempts: iz,
                  elapsedTimeMs: zz.options.getNow() - Ez,
                  failure: nz
                };
                if (iz >= zz.options.retry.maxAttempts) return {
                  kind: "terminal",
                  attempts: iz,
                  elapsedTimeMs: zz.options.getNow() - Ez,
                  failure: nz,
                  reason: "retries-exhausted"
                };
                if (null != Oz.retryAfterMs && Oz.retryAfterMs > zz.options.retry.maxBackoffMs) return {
                  kind: "terminal",
                  attempts: iz,
                  elapsedTimeMs: zz.options.getNow() - Ez,
                  failure: nz,
                  reason: "retry-after-too-long"
                };
                const pz = Math.min(null !== (lz = Oz.retryAfterMs) && void 0 !== lz ? lz : zz.options.retry.initialBackoffMs * Math.pow(zz.options.retry.backoffMultiplier, iz - 1), zz.options.retry.maxBackoffMs);
                if (null === (Mz = (tz = zz.options).onRetry) || void 0 === Mz || Mz.call(tz, pz, iz + 1), yield zz.waitForTurn(uz, pz)) {
                  const uz = zz.options.retry.maxAttempts - iz,
                    nz = yield zz.runAttempt((() => bz(uz, !0)));
                  return iz += nz.attemptsMade, {
                    kind: "success" === nz.kind ? "success" : "terminal",
                    attempts: iz,
                    elapsedTimeMs: zz.options.getNow() - Ez,
                    failure: "success" === nz.kind ? void 0 : nz.failure
                  }
                }
              }
            }));
            return function(zz) {
              return bz.apply(this, arguments)
            }
          }(),
          release: () => {
            bz || (bz = !0, this.admitted--)
          }
        }
      }
      flush() {
        this.unloading = !0, this.nextSendAt = 0;
        const zz = this.waiting.splice(0);
        null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0);
        for (const uz of zz) uz.resolve(!0);
        this.runNextAttempt()
      }
      resume() {
        this.unloading = !1
      }
      runAttempt(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new Promise(((bz, Ez) => {
          this.attemptQueue.push({
            run: () => {
              this.inProgress++;
              const uz = () => {
                this.inProgress--, this.runNextAttempt()
              };
              zz().then((zz => {
                uz(), bz(zz)
              }), (zz => {
                uz(), Ez(zz)
              }))
            },
            isRedelivery: uz
          }), this.runNextAttempt()
        }))
      }
      runNextAttempt() {
        for (null != this.redeliveryTimer && (clearTimeout(this.redeliveryTimer), this.redeliveryTimer = void 0); this.inProgress < this.options.concurrency && this.attemptQueue.length > 0;) {
          const zz = this.options.getNow(),
            uz = this.attemptQueue.findIndex((uz => {
              let {
                isRedelivery: bz
              } = uz;
              return this.unloading || !bz || zz >= this.nextSendAt
            }));
          if (uz < 0) return void(this.redeliveryTimer = setTimeout((() => {
            this.redeliveryTimer = void 0, this.runNextAttempt()
          }), Math.max(0, this.nextSendAt - zz)));
          const [bz] = this.attemptQueue.splice(uz, 1);
          bz.isRedelivery && !this.unloading && (this.nextSendAt = zz + 1), bz.run()
        }
      }
      waitForTurn(zz, uz) {
        const bz = Math.min(uz * (1 + .2 * this.options.getRandom()), this.options.retry.maxBackoffMs);
        return new Promise((uz => {
          this.waiting.push({
            sequence: zz,
            readyAt: this.options.getNow() + bz,
            resolve: uz
          }), this.waiting.sort(((zz, uz) => zz.readyAt === uz.readyAt ? zz.sequence - uz.sequence : zz.readyAt - uz.readyAt)), null != this.waitingTimer && (clearTimeout(this.waitingTimer), this.waitingTimer = void 0), this.scheduleNext()
        }))
      }
      scheduleNext() {
        if (null != this.waitingTimer || 0 === this.waiting.length) return;
        const zz = this.waiting[0],
          uz = zz.readyAt;
        this.waitingTimer = setTimeout((() => {
          this.waitingTimer = void 0;
          const uz = this.waiting.indexOf(zz);
          uz >= 0 && this.waiting.splice(uz, 1), zz.resolve(!1), this.scheduleNext()
        }), Math.max(0, uz - this.options.getNow()))
      }
    };

    function Ri(zz, uz) {
      if (null == zz) return {};
      var bz, Ez, nz = function(zz, uz) {
        if (null == zz) return {};
        var bz = {};
        for (var Ez in zz)
          if ({}.hasOwnProperty.call(zz, Ez)) {
            if (uz.includes(Ez)) continue;
            bz[Ez] = zz[Ez]
          } return bz
      }(zz, uz);
      if (Object.getOwnPropertySymbols) {
        var iz = Object.getOwnPropertySymbols(zz);
        for (Ez = 0; Ez < iz.length; Ez++) bz = iz[Ez], uz.includes(bz) || {}.propertyIsEnumerable.call(zz, bz) && (nz[bz] = zz[bz])
      }
      return nz
    }

    function Ki(zz) {
      const {
        size: uz,
        concurrency: bz
      } = zz, Ez = [];
      let nz = 0;
      const iz = () => {
        if (nz < bz && Ez.length) {
          const {
            producer: zz,
            resolve: uz,
            reject: bz
          } = Ez.shift();
          nz++, zz().then((zz => {
            nz--, iz(), uz(zz)
          }), (zz => {
            nz--, iz(), bz(zz)
          }))
        }
      };
      return {
        add: zz => {
          if (Ez.length + nz >= uz) throw new Error("Task buffer full");
          return new Promise(((uz, bz) => {
            Ez.push({
              producer: zz,
              resolve: uz,
              reject: bz
            }), iz()
          }))
        }
      }
    }
    const wi = ["headers"],
      Xi = ["keepalive", "signal"],
      fi = new Set([408, 425, 429, 500, 502, 503, 504]),
      si = new Set([429, 503]);
    let ri = 0,
      oi = 0;
    var Ni = class extends Error {};
    var vi = class extends zi {
      constructor(zz) {
        var uz, bz, Ez, nz, iz, lz, Mz, tz, Hz, Oz, pz, dz, Fz, Zz, Rz, Kz, wz;
        super(), this.options = zz, this.name = "@grafana/faro-web-sdk:transport-fetch", this.version = bb, this.pendingCustomSends = 0, this.getNow = null !== (uz = zz.getNow) && void 0 !== uz ? uz : Date.now, this.requestTimeoutMs = null !== (bz = zz.requestTimeoutMs) && void 0 !== bz ? bz : 1e4, this.compressionEnabled = null !== (Ez = zz.requestCompression) && void 0 !== Ez && Ez && "undefined" !== typeof CompressionStream, zz.requestCompression && !this.compressionEnabled && this.logWarn("requestCompression is enabled but CompressionStream is not available. Falling back to uncompressed."), this.requestTimeoutMs > 0 && "undefined" === typeof AbortController && this.logWarn("AbortController is unavailable. Requests will be sent without the configured timeout."), this.deliveryQueue = new Zi({
          bufferSize: null !== (nz = zz.bufferSize) && void 0 !== nz ? nz : 30,
          concurrency: null !== (iz = zz.concurrency) && void 0 !== iz ? iz : 5,
          retry: {
            maxAttempts: null !== (lz = null === (Mz = zz.retry) || void 0 === Mz ? void 0 : Mz.maxAttempts) && void 0 !== lz ? lz : 3,
            initialBackoffMs: null !== (tz = null !== (Hz = null === (Oz = zz.retry) || void 0 === Oz ? void 0 : Oz.initialBackoffMs) && void 0 !== Hz ? Hz : zz.defaultRateLimitBackoffMs) && void 0 !== tz ? tz : 1e3,
            maxBackoffMs: null !== (pz = null === (dz = zz.retry) || void 0 === dz ? void 0 : dz.maxBackoffMs) && void 0 !== pz ? pz : 3e4,
            backoffMultiplier: null !== (Fz = null === (Zz = zz.retry) || void 0 === Zz ? void 0 : Zz.backoffMultiplier) && void 0 !== Fz ? Fz : 2
          },
          getNow: this.getNow,
          getRandom: null !== (Rz = zz.getRandom) && void 0 !== Rz ? Rz : Math.random,
          onRetry: (zz, uz) => {
            this.logDebug(`Retrying failed request after ${zz}ms. Attempt ${uz}.`)
          }
        }), this.customPromiseBuffer = Ki({
          size: null !== (Kz = zz.bufferSize) && void 0 !== Kz ? Kz : 30,
          concurrency: null !== (wz = zz.concurrency) && void 0 !== wz ? wz : 5
        }), this.defaultPromiseBuffer = {
          add: zz => {
            if (this.promiseBuffer !== this.defaultPromiseBuffer || this.promiseBuffer.add !== this.defaultBufferAdd || this.pendingCustomSends > 0) return this.customPromiseBuffer.add(zz);
            const uz = this.deliveryQueue.reserve();
            if (!uz) throw new Error("Task buffer full");
            return this.runBufferedTask(uz, zz)
          }
        }, this.defaultBufferAdd = this.defaultPromiseBuffer.add, this.promiseBuffer = this.defaultPromiseBuffer, "undefined" !== typeof window && (window.addEventListener("pagehide", (() => this.deliveryQueue.flush())), window.addEventListener("pageshow", (zz => {
          zz.persisted && this.deliveryQueue.resume()
        })))
      }
      send(zz) {
        var uz = this;
        return QE((function*() {
          const bz = uz.promiseBuffer;
          if (bz !== uz.defaultPromiseBuffer || bz.add !== uz.defaultBufferAdd) {
            uz.pendingCustomSends++;
            try {
              yield bz.add((() => uz.deliver(zz)))
            } catch (Ez) {
              uz.logError("Permanent delivery failure", {
                error: Ez,
                attempts: 0,
                elapsedTimeMs: 0
              })
            } finally {
              uz.pendingCustomSends--
            }
          } else yield uz.deliver(zz)
        }))()
      }
      runBufferedTask(zz, uz) {
        return QE((function*() {
          let bz;
          try {
            return yield zz.deliver(QE((function*() {
              return bz = yield uz(), {
                kind: "success",
                attemptsMade: 1
              }
            }))), bz
          } finally {
            zz.release()
          }
        }))()
      }
      deliver(zz) {
        var uz = this;
        return QE((function*() {
          const bz = uz.deliveryQueue.reserve();
          if (bz) try {
            const Ez = yield uz.prepareRequest(zz), nz = yield bz.deliver(((zz, bz) => uz.performAttempt(Ez, zz, bz)));
            "terminal" === nz.kind && uz.logError("retries-exhausted" === nz.reason ? "Delivery retries exhausted" : "Permanent delivery failure", Ou(Ou({}, nz.failure), {}, {
              reason: nz.reason,
              attempts: nz.attempts,
              elapsedTimeMs: nz.elapsedTimeMs
            }))
          } catch (Ez) {
            uz.logError("Permanent delivery failure", {
              error: Ez,
              attempts: 0,
              elapsedTimeMs: 0
            })
          } finally {
            bz.release()
          } else uz.logError("Permanent delivery failure", {
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
        var uz = this;
        return QE((function*() {
          var bz, Ez;
          const nz = ni(zz),
            iz = null === (bz = nz.meta.session) || void 0 === bz ? void 0 : bz.id,
            lz = JSON.stringify(nz),
            Mz = null !== (Ez = uz.options.requestOptions) && void 0 !== Ez ? Ez : {},
            {
              headers: tz = {}
            } = Mz,
            Hz = Ri(Mz, wi),
            {
              keepalive: Oz,
              signal: pz
            } = Hz,
            dz = Ri(Hz, Xi),
            Fz = {};
          for (const [zz, uz] of Object.entries(tz)) Fz[zz] = "function" === typeof uz ? yield uz(): uz;
          let Zz = lz,
            Rz = function(zz) {
              return "undefined" === typeof TextEncoder ? zz.length : (new TextEncoder).encode(zz).byteLength
            }(lz);
          const Kz = {};
          return uz.compressionEnabled && (Zz = yield uz.compress(lz), Rz = Zz.size, Kz["Content-Encoding"] = "gzip"), {
            bodySize: Rz,
            sessionId: iz,
            requestInit: Ou({
              method: "POST",
              headers: Ou(Ou(Ou(Ou(Ou({
                "Content-Type": "application/json"
              }, Kz), Fz), uz.options.apiKey ? {
                "x-api-key": uz.options.apiKey
              } : {}), iz ? {
                "x-faro-session-id": iz
              } : {}), {}, {
                "Idempotency-Key": wu(20)
              }),
              body: Zz
            }, dz)
          }
        }))()
      }
      performAttempt(zz, uz, bz) {
        var Ez = this;
        return QE((function*() {
          var nz;
          const iz = null === (nz = Ez.options.requestOptions) || void 0 === nz ? void 0 : nz.signal;
          if (null === iz || void 0 === iz ? void 0 : iz.aborted) return {
            kind: "terminal",
            failure: {
              error: iz.reason
            },
            attemptsMade: 0
          };
          let lz = 0;
          try {
            var Mz;
            const nz = yield Ez.fetchWithKeepaliveFallback(zz.requestInit, zz.bodySize, !!bz || (null === (Mz = Ez.options.requestOptions) || void 0 === Mz ? void 0 : Mz.keepalive), uz, (() => lz++));
            if (Ez.handleResponse(nz, zz.sessionId), nz.status >= 200 && nz.status < 300) return {
              kind: "success",
              attemptsMade: lz
            };
            const iz = {
              status: nz.status
            };
            return !fi.has(nz.status) || bz ? {
              kind: "terminal",
              failure: iz,
              attemptsMade: lz
            } : {
              kind: "retry",
              failure: iz,
              attemptsMade: lz,
              retryAfterMs: si.has(nz.status) ? Ez.getRetryAfterDelayMs(nz) : void 0
            }
          } catch (tz) {
            const zz = {
              error: tz
            };
            return (null === iz || void 0 === iz ? void 0 : iz.aborted) || !Ez.isFetchNetworkError(tz) || bz ? {
              kind: "terminal",
              failure: zz,
              attemptsMade: lz
            } : {
              kind: "retry",
              failure: zz,
              attemptsMade: lz
            }
          }
        }))()
      }
      fetchWithKeepaliveFallback(zz, uz, bz, Ez, nz) {
        var iz = this;
        return QE((function*() {
          const lz = iz.getNow(),
            Mz = iz.reserveKeepalive(uz, bz);
          try {
            return yield iz.fetchWithTimeout(Ou(Ou({}, zz), {}, {
              keepalive: Mz.keepalive
            }), iz.requestTimeoutMs, nz)
          } catch (Hz) {
            var tz;
            if (Mz.keepalive && Ez > 1 && iz.isFetchNetworkError(Hz) && !(Hz instanceof Ni) && !(null === (tz = iz.options.requestOptions) || void 0 === tz || null === (tz = tz.signal) || void 0 === tz ? void 0 : tz.aborted)) {
              iz.logDebug("Retrying failed keepalive request with keepalive disabled.");
              const uz = iz.requestTimeoutMs - (iz.getNow() - lz);
              return iz.fetchWithTimeout(Ou(Ou({}, zz), {}, {
                keepalive: !1
              }), uz, nz)
            }
            throw Hz
          } finally {
            Mz.release()
          }
        }))()
      }
      fetchWithTimeout(zz, uz, bz) {
        var Ez = this;
        return QE((function*() {
          var nz;
          const iz = null === (nz = Ez.options.requestOptions) || void 0 === nz ? void 0 : nz.signal;
          if (Ez.requestTimeoutMs <= 0 || "undefined" === typeof AbortController) return bz(), fetch(Ez.options.url, Ou(Ou({}, zz), {}, {
            signal: iz
          }));
          if (uz <= 0) throw new Ni("Request timed out");
          const lz = new AbortController,
            Mz = () => lz.abort(null === iz || void 0 === iz ? void 0 : iz.reason);
          null === iz || void 0 === iz || iz.addEventListener("abort", Mz, {
            once: !0
          });
          let tz = !1;
          const Hz = setTimeout((() => {
            tz = !0, lz.abort()
          }), uz);
          try {
            return bz(), yield fetch(Ez.options.url, Ou(Ou({}, zz), {}, {
              signal: lz.signal
            }))
          } catch (Oz) {
            if (tz && !(null === iz || void 0 === iz ? void 0 : iz.aborted)) throw new Ni("Request timed out");
            throw Oz
          } finally {
            clearTimeout(Hz), null === iz || void 0 === iz || iz.removeEventListener("abort", Mz)
          }
        }))()
      }
      getRetryAfterDelayMs(zz) {
        const uz = zz.headers.get("Retry-After");
        if (!uz) return;
        if (/^\d+$/.test(uz)) {
          const zz = 1e3 * Number(uz);
          return Number.isFinite(zz) ? zz : Number.POSITIVE_INFINITY
        }
        const bz = this.getNow(),
          Ez = function(zz, uz) {
            const bz = li.exec(zz);
            if (bz) {
              const [, zz, uz, Ez, nz, iz, lz, Mz] = bz;
              return Fi({
                weekday: Hi.indexOf(zz),
                day: Number(uz),
                month: di.indexOf(Ez),
                year: Number(nz),
                hour: Number(iz),
                minute: Number(lz),
                second: Number(Mz)
              })
            }
            const Ez = Mi.exec(zz);
            if (Ez) {
              const [, zz, bz, lz, Mz, tz, Hz, Oz] = Ez, pz = new Date(uz);
              if (Number.isNaN(pz.getTime())) return;
              const dz = pz.getUTCFullYear();
              let Fz = 100 * Math.floor(dz / 100) + Number(Mz);
              Fz < dz && (Fz += 100);
              const Zz = di.indexOf(lz),
                Rz = {
                  month: Zz,
                  day: Number(bz),
                  hour: Number(tz),
                  minute: Number(Hz),
                  second: Number(Oz),
                  millisecond: 0
                },
                Kz = {
                  month: pz.getUTCMonth(),
                  day: pz.getUTCDate(),
                  hour: pz.getUTCHours(),
                  minute: pz.getUTCMinutes(),
                  second: pz.getUTCSeconds(),
                  millisecond: pz.getUTCMilliseconds()
                };
              return (Fz > dz + 50 || Fz === dz + 50 && (iz = Kz, ((nz = Rz).month - iz.month || nz.day - iz.day || nz.hour - iz.hour || nz.minute - iz.minute || nz.second - iz.second || nz.millisecond - iz.millisecond) > 0)) && (Fz -= 100), Fi({
                weekday: Oi.indexOf(zz),
                day: Number(bz),
                month: Zz,
                year: Fz,
                hour: Number(tz),
                minute: Number(Hz),
                second: Number(Oz)
              })
            }
            var nz, iz;
            const lz = ti.exec(zz);
            if (!lz) return;
            const [, Mz, tz, Hz, Oz, pz, dz, Fz, Zz] = lz;
            return Fi({
              weekday: Hi.indexOf(Mz),
              day: Number(null !== Hz && void 0 !== Hz ? Hz : Oz),
              month: di.indexOf(tz),
              year: Number(Zz),
              hour: Number(pz),
              minute: Number(dz),
              second: Number(Fz)
            })
          }(uz, bz);
        return null == Ez ? void 0 : Math.max(0, Ez - bz)
      }
      reserveKeepalive(zz, uz) {
        if (!1 === uz || zz > 6e4 || ri + zz > 6e4 || oi >= 9) return {
          keepalive: !1,
          release: Du
        };
        ri += zz, oi++;
        let bz = !1;
        return {
          keepalive: !0,
          release: () => {
            bz || (bz = !0, ri -= zz, oi--)
          }
        }
      }
      handleResponse(zz, uz) {
        202 === zz.status && "invalid" === zz.headers.get("X-Faro-Session-Status") && this.extendFaroSession(this.config, this.logDebug.bind(this), uz), zz.text().catch(Du)
      }
      isFetchNetworkError(zz) {
        return zz instanceof TypeError || zz instanceof Ni || zz instanceof DOMException && "AbortError" === zz.name
      }
      compress(zz) {
        return QE((function*() {
          const uz = [],
            bz = new ReadableStream({
              start(uz) {
                uz.enqueue((new TextEncoder).encode(zz)), uz.close()
              }
            }).pipeThrough(new CompressionStream("gzip")).getReader();
          for (;;) {
            const {
              done: zz,
              value: Ez
            } = yield bz.read();
            if (zz) return new Blob(uz);
            uz.push(Ez)
          }
        }))()
      }
      extendFaroSession(zz, uz, bz) {
        var Ez, nz;
        const iz = zz.sessionTracking;
        if (!(null === iz || void 0 === iz ? void 0 : iz.enabled)) return void uz("Session expired.");
        const {
          fetchUserSession: lz,
          storeUserSession: Mz
        } = yu(iz), tz = null === (Ez = this.metas.value.session) || void 0 === Ez ? void 0 : Ez.id, Hz = null === (nz = lz()) || void 0 === nz ? void 0 : nz.sessionId;
        bz && bz === tz && bz === Hz ? (Lu({
          fetchUserSession: lz,
          storeUserSession: Mz
        })({
          forceSessionExtend: !0
        }), uz("Session expired; created new session.")) : uz("Ignoring stale or cross-tab session-invalid response; request session no longer current.")
      }
    };
    const xi = () => {
      const zz = window.k6;
      return {
        k6: Ou({
          isK6Browser: !0
        }, (null === zz || void 0 === zz ? void 0 : zz.testRunId) && {
          testRunId: null === zz || void 0 === zz ? void 0 : zz.testRunId
        })
      }
    };
    let Ji, Ai;

    function Ti() {
      let {
        generatePageId: zz,
        initialPageMeta: uz
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return () => {
        const bz = location.href;
        return Tz(zz) && Ji !== bz && (Ji = bz, Ai = zz(location)), {
          page: Ou(Ou({
            url: bz
          }, Ai ? {
            id: Ai
          } : {}), uz)
        }
      }
    }

    function Li() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ku,
        uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      const bz = Wu;
      return uz > 0 && (bz.error = uz >= 1 ? function() {
        for (var uz = arguments.length, Ez = new Array(uz), nz = 0; nz < uz; nz++) Ez[nz] = arguments[nz];
        zz.error(`${bz.prefix}\n`, ...Ez)
      } : Du, bz.warn = uz >= 2 ? function() {
        for (var uz = arguments.length, Ez = new Array(uz), nz = 0; nz < uz; nz++) Ez[nz] = arguments[nz];
        zz.warn(`${bz.prefix}\n`, ...Ez)
      } : Du, bz.info = uz >= 3 ? function() {
        for (var uz = arguments.length, Ez = new Array(uz), nz = 0; nz < uz; nz++) Ez[nz] = arguments[nz];
        zz.info(`${bz.prefix}\n`, ...Ez)
      } : Du, bz.debug = uz >= 4 ? function() {
        for (var uz = arguments.length, Ez = new Array(uz), nz = 0; nz < uz; nz++) Ez[nz] = arguments[nz];
        zz.debug(`${bz.prefix}\n`, ...Ez)
      } : Du), bz
    }
    const Pi = "faro",
      Gi = {
        enabled: !0,
        sendTimeout: 250,
        itemLimit: 50
      },
      ai = ["dedupe", "eventDomain", "globalObjectKey", "instrumentations", "internalLoggerLevel", "isolate", "logArgsSerializer", "metas", "paused", "preventGlobalExposure", "unpatchedConsole", "url", "experimental"];

    function Vi(zz) {
      var uz, bz, nz, iz, lz, Mz;
      const tz = [],
        Oz = Li(zz.unpatchedConsole, zz.internalLoggerLevel);
      zz.transports ? ((zz.url || zz.apiKey) && Oz.error('if "transports" is defined, "url" and "apiKey" should not be defined'), tz.push(...zz.transports)) : zz.url ? tz.push(new vi({
        url: zz.url,
        apiKey: zz.apiKey,
        requestCompression: zz.requestCompression
      })) : Oz.error('either "url" or "transports" must be defined');
      const {
        dedupe: pz = !0,
        eventDomain: dz = Ez,
        globalObjectKey: Fz = Pi,
        instrumentations: Zz = Qn(),
        internalLoggerLevel: Rz = eu,
        isolate: Kz = !1,
        logArgsSerializer: wz = Pb,
        metas: Xz = qi(zz),
        paused: fz = !1,
        preventGlobalExposure: sz = !1,
        unpatchedConsole: rz = ku,
        url: oz,
        experimental: Nz
      } = zz, vz = Ri(zz, ai), xz = null !== (uz = null === Nz || void 0 === Nz ? void 0 : Nz.trackNavigation) && void 0 !== uz && uz, Jz = {
        dataAttributeName: CE(null !== (bz = null === (nz = zz.userActionsInstrumentation) || void 0 === nz ? void 0 : nz.dataAttributeName) && void 0 !== bz ? bz : jE),
        excludeItem: null === (iz = zz.userActionsInstrumentation) || void 0 === iz ? void 0 : iz.excludeItem,
        initialActivityTimeout: YE(null === (lz = zz.userActionsInstrumentation) || void 0 === lz ? void 0 : lz.initialActivityTimeout, 100, (zz => Oz.warn(zz)))
      };
      return Ou(Ou({}, vz), {}, {
        batching: Ou(Ou({}, Gi), zz.batching),
        dedupe: pz,
        globalObjectKey: Fz,
        instrumentations: mi(Zz, zz),
        internalLoggerLevel: Rz,
        isolate: Kz,
        logArgsSerializer: wz,
        metas: Xz,
        parseStacktrace: Rb,
        paused: fz,
        preventGlobalExposure: sz,
        transports: tz,
        unpatchedConsole: rz,
        eventDomain: dz,
        ignoreUrls: [...null !== (Mz = zz.ignoreUrls) && void 0 !== Mz ? Mz : [], ...oz ? [oz] : [], /\/collect(?:\/[\w]*)?$/],
        sessionTracking: Ou(Ou(Ou({}, Hz), zz.sessionTracking), Ui({
          trackGeolocation: zz.trackGeolocation,
          sessionTracking: zz.sessionTracking
        })),
        userActionsInstrumentation: Jz,
        experimental: {
          trackNavigation: xz
        }
      })
    }

    function mi(zz, uz) {
      let {
        experimental: bz
      } = uz;
      var Ez;
      const nz = null !== (Ez = null === bz || void 0 === bz ? void 0 : bz.trackNavigation) && void 0 !== Ez && Ez;
      return zz.filter((zz => !("@grafana/faro-web-sdk:instrumentation-navigation" === zz.name && !nz)))
    }

    function qi(zz) {
      var uz, bz, Ez;
      const {
        page: nz,
        generatePageId: iz
      } = null !== (uz = null === zz || void 0 === zz ? void 0 : zz.pageTracking) && void 0 !== uz ? uz : {}, lz = [Bn, Cn, Ti({
        generatePageId: iz,
        initialPageMeta: nz
      }), ...null !== (bz = zz.metas) && void 0 !== bz ? bz : [], kn];
      return Az(null === (Ez = window) || void 0 === Ez ? void 0 : Ez.k6) ? [...lz, xi] : lz
    }

    function Ui(zz) {
      let {
        trackGeolocation: uz,
        sessionTracking: bz
      } = zz;
      var Ez;
      const nz = {};
      return xz(uz) && (nz.geoLocationTrackingEnabled = uz), ez(nz) ? {} : {
        session: Ou(Ou({}, null !== (Ez = null === bz || void 0 === bz ? void 0 : bz.session) && void 0 !== Ez ? Ez : {}), {}, {
          overrides: nz
        })
      }
    }
    const ci = new WeakSet;

    function gi(zz) {
      return ci.add(zz), zz
    }

    function Si(zz, uz) {
      if (zz.capture) return gi(zz.capture(uz));
      const bz = gi(zz.value);
      return null === uz || void 0 === uz || uz(), bz
    }

    function yi(zz) {
      const uz = `__faroBundleId_${zz}`,
        bz = null === Oz || void 0 === Oz ? void 0 : Oz[uz];
      if ("string" === typeof bz && "" !== bz) return bz;
      const Ez = "undefined" !== typeof window ? window[uz] : void 0;
      return "string" === typeof Ez && "" !== Ez ? Ez : void 0
    }

    function Di(zz) {
      var uz, bz;
      const Ez = zz.config.app.name,
        nz = Ez ? function(zz) {
          return null === Oz || void 0 === Oz ? void 0 : Oz[`__faroGitHash_${zz}`]
        }(Ez) : void 0,
        iz = {
          sdk: {
            version: bb,
            name: "faro"
          },
          app: Yu({
            bundleId: Ez && yi(Ez)
          }, void 0 !== nz ? {
            gitHash: nz
          } : {})
        },
        lz = null === (uz = zz.config.sessionTracking) || void 0 === uz ? void 0 : uz.session;
      lz && zz.api.setSession(lz), zz.config.app && (iz.app = Yu(Yu({}, zz.config.app), iz.app)), zz.config.user && (iz.user = zz.config.user), zz.config.view && (iz.view = zz.config.view), zz.metas.add(iz, ...null !== (bz = zz.config.metas) && void 0 !== bz ? bz : [])
    }
    var Qi = class {
      constructor(zz, uz) {
        var bz, Ez;
        this.signalBuffer = [], this.itemLimit = null !== (bz = null === uz || void 0 === uz ? void 0 : uz.itemLimit) && void 0 !== bz ? bz : 50, this.sendTimeout = null !== (Ez = null === uz || void 0 === uz ? void 0 : uz.sendTimeout) && void 0 !== Ez ? Ez : 250, this.paused = (null === uz || void 0 === uz ? void 0 : uz.paused) || !1, this.sendFn = zz, this.paused || this.start(), "undefined" !== typeof document && document.addEventListener("visibilitychange", (() => {
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
        const uz = new Map;
        return zz.forEach((zz => {
          const bz = JSON.stringify(zz.meta);
          let Ez = uz.get(bz);
          Ez = void 0 === Ez ? [zz] : [...Ez, zz], uz.set(bz, Ez)
        })), Array.from(uz.values())
      }
      flush() {
        if (this.paused || 0 === this.signalBuffer.length) return;
        const zz = this.signalBuffer;
        this.signalBuffer = [];
        try {
          this.groupItems(zz).forEach(this.sendFn)
        } catch (uz) {
          throw this.signalBuffer = [...zz, ...this.signalBuffer], this.trimBufferToLimit(), uz
        }
      }
      trimBufferToLimit() {
        this.signalBuffer.length > this.itemLimit && (this.signalBuffer = this.signalBuffer.slice(0, this.itemLimit))
      }
    };

    function Wi(zz, uz, bz, Ez) {
      var nz;
      uz.debug("Initializing transports");
      const iz = [];
      let lz = [];
      const Mz = zz => {
        let uz = zz;
        for (const Ez of lz) {
          const zz = uz.map(Ez).filter(Boolean);
          if (0 === zz.length) return [];
          uz = ei(zz, bz)
        }
        return uz
      };
      let tz;
      (null === (nz = bz.batching) || void 0 === nz ? void 0 : nz.enabled) && (tz = new Qi((zz => {
        const bz = Mz(zz);
        if (0 !== bz.length)
          for (const Ez of iz) uz.debug(`Transporting item using ${Ez.name}\n`, bz), Ez.isBatched() && Ez.send(bz)
      }), {
        sendTimeout: bz.batching.sendTimeout,
        itemLimit: bz.batching.itemLimit,
        paused: bz.paused
      }));
      return {
        add: function() {
          uz.debug("Adding transports");
          for (var nz = arguments.length, lz = new Array(nz), Mz = 0; Mz < nz; Mz++) lz[Mz] = arguments[Mz];
          lz.forEach((nz => {
            uz.debug(`Adding "${nz.name}" transport`), iz.some((zz => zz === nz)) ? uz.warn(`Transport ${nz.name} is already added`) : (nz.unpatchedConsole = zz, nz.internalLogger = uz, nz.config = bz, nz.metas = Ez, iz.push(nz))
          }))
        },
        addBeforeSendHooks: function() {
          uz.debug("Adding beforeSendHooks\n", lz);
          for (var zz = arguments.length, bz = new Array(zz), Ez = 0; Ez < zz; Ez++) bz[Ez] = arguments[Ez];
          bz.forEach((zz => {
            zz && lz.push(zz)
          }))
        },
        getBeforeSendHooks: () => [...lz],
        execute: zz => {
          var nz;
          if (!bz.paused && gu(Ez).shouldCapture()) {
            if (pz = zz.meta, !ci.has(pz)) {
              var lz, Hz, Oz;
              const uz = null === (lz = Ez.value.session) || void 0 === lz ? void 0 : lz.id,
                nz = Si(Ez);
              if (bz.paused) return;
              const iz = Yu({}, zz.meta);
              (null === (Hz = iz.session) || void 0 === Hz ? void 0 : Hz.id) === uz && (null === (Oz = nz.session) || void 0 === Oz ? void 0 : Oz.id) !== uz && (void 0 === nz.session ? delete iz.session : iz.session = nz.session), zz = Yu(Yu({}, zz), {}, {
                meta: gi(iz)
              })
            }
            var pz;
            (null === (nz = bz.batching) || void 0 === nz ? void 0 : nz.enabled) && (null === tz || void 0 === tz || tz.addItem(zz)), (zz => {
              var Ez;
              if ((null === (Ez = bz.batching) || void 0 === Ez ? void 0 : Ez.enabled) && iz.every((zz => zz.isBatched()))) return;
              const [nz] = Mz([zz]);
              if (void 0 !== nz)
                for (const Mz of iz) {
                  var lz;
                  uz.debug(`Transporting item using ${Mz.name}\n`, nz), Mz.isBatched() ? (null === (lz = bz.batching) || void 0 === lz ? void 0 : lz.enabled) || Mz.send([nz]) : Mz.send(nz)
                }
            })(zz)
          }
        },
        isPaused: () => bz.paused,
        pause: () => {
          uz.debug("Pausing transports"), null === tz || void 0 === tz || tz.pause(), bz.paused = !0
        },
        remove: function() {
          uz.debug("Removing transports");
          for (var zz = arguments.length, bz = new Array(zz), Ez = 0; Ez < zz; Ez++) bz[Ez] = arguments[Ez];
          bz.forEach((zz => {
            uz.debug(`Removing "${zz.name}" transport`);
            const bz = iz.indexOf(zz); - 1 !== bz ? iz.splice(bz, 1) : uz.warn(`Transport "${zz.name}" is not added`)
          }))
        },
        removeBeforeSendHooks: function() {
          for (var zz = arguments.length, bz = new Array(zz), Ez = 0; Ez < zz; Ez++) bz[Ez] = arguments[Ez];
          uz.debug("Removing beforeSendHooks"), lz = lz.filter((zz => !bz.includes(zz)))
        },
        get transports() {
          return [...iz]
        },
        unpause: () => {
          uz.debug("Unpausing transports"), null === tz || void 0 === tz || tz.start(), bz.paused = !1
        }
      }
    }

    function ei(zz, uz) {
      if (uz.preserveOriginalError)
        for (const bz of zz) "exception" === bz.type && delete bz.payload.originalError;
      return zz
    }
    let ji = ku;

    function Ii(zz) {
      var uz;
      return ji = null !== (uz = zz.unpatchedConsole) && void 0 !== uz ? uz : ji, ji
    }
    let Bi, Ci = Wu;

    function Yi(zz, uz) {
      return Ci = Li(zz, uz.internalLoggerLevel), Ci
    }

    function ki(zz) {
      let {
        internalLogger: uz,
        config: bz,
        metas: Ez,
        transports: nz,
        tracesApi: iz,
        userActionsApi: lz
      } = zz;
      var Mz;
      uz.debug("Initializing exceptions API");
      let tz = null;
      Bi = null !== (Mz = bz.parseStacktrace) && void 0 !== Mz ? Mz : Bi;
      const Hz = zz => {
          uz.debug("Changing stacktrace parser"), Bi = null !== zz && void 0 !== zz ? zz : Bi
        },
        {
          ignoreErrors: Oz = [],
          preserveOriginalError: pz
        } = bz;
      return Hz(bz.parseStacktrace), {
        changeStacktraceParser: Hz,
        getStacktraceParser: () => Bi,
        pushError: function(zz) {
          let {
            skipDedupe: Mz,
            stackFrames: Hz,
            type: dz,
            context: Fz,
            spanContext: Zz,
            timestampOverwriteMs: Rz,
            originalError: Kz,
            fingerprint: wz,
            fatal: Xz
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (! function(zz, uz) {
              const {
                message: bz,
                name: Ez,
                stack: nz
              } = uz;
              return iz = zz, lz = bz + " " + Ez + " " + nz, iz.some((zz => oz(zz) ? lz.includes(zz) : !!lz.match(zz)));
              var iz, lz
            }(Oz, null !== Kz && void 0 !== Kz ? Kz : zz)) try {
            var fz, sz;
            if (!gu(Ez).shouldCapture()) return;
            const Oz = qu(Yu(Yu({}, function(zz) {
                let uz = zz.cause;
                hz(uz) ? uz = zz.cause.toString() : null !== uz && (Az(zz.cause) || Lz(zz.cause)) ? uz = mu(zz.cause) : null != uz && (uz = zz.cause.toString());
                return null == uz ? {} : {
                  cause: uz
                }
              }(null !== Kz && void 0 !== Kz ? Kz : zz)), null !== Fz && void 0 !== Fz ? Fz : {})),
              oz = Yu(Yu(Yu(Yu({
                type: dz || zz.name || "Error",
                value: zz.message,
                timestamp: Rz ? Ru(Rz) : Zu(),
                trace: Zz ? {
                  trace_id: Zz.traceId,
                  span_id: Zz.spanId
                } : iz.getTraceContext()
              }, ez(Oz) ? {} : {
                context: Oz
              }), pz ? {
                originalError: Kz
              } : {}), wz ? {
                fingerprint: wz
              } : {}), void 0 !== Xz ? {
                fatal: Xz
              } : {});
            Hz = null !== (fz = Hz) && void 0 !== fz ? fz : zz.stack ? null === Bi || void 0 === Bi ? void 0 : Bi(zz).frames : void 0, (null === Hz || void 0 === Hz ? void 0 : Hz.length) && (oz.stacktrace = {
              frames: Hz
            });
            const Nz = {
              type: oz.type,
              value: oz.value,
              stacktrace: oz.stacktrace,
              context: oz.context,
              fingerprint: oz.fingerprint,
              fatal: null !== (sz = oz.fatal) && void 0 !== sz && sz
            };
            if (!Mz && bz.dedupe && !rz(tz) && Xu(Nz, tz)) return void uz.debug("Skipping error push because it is the same as the last one\n", oz);
            const vz = tz,
              xz = Si(Ez);
            if (tz !== vz && !Mz && bz.dedupe && Xu(Nz, tz)) return;
            tz = Nz;
            const Jz = {
              meta: xz,
              payload: oz,
              type: "exception"
            };
            uz.debug("Pushing exception\n", Jz), xn(lz.getActiveUserAction(), Jz) || nz.execute(Jz)
          } catch (Nz) {
            uz.error("Error pushing event", Nz)
          }
        }
      }
    }

    function zl(zz, uz, bz, Ez, nz) {
      uz.debug("Initializing API");
      let iz = null;
      const lz = function(zz) {
          let {
            transports: uz,
            internalLogger: bz,
            config: Ez,
            pushEvent: nz
          } = zz;
          var iz;
          const lz = null === (iz = Ez.userActionsInstrumentation) || void 0 === iz ? void 0 : iz.excludeItem;
          let Mz;
          const tz = () => Mz;
          return {
            startUserAction: (zz, Ez, iz) => {
              if (void 0 === tz()) {
                const bz = new Nn({
                  name: zz,
                  transports: uz,
                  attributes: Ez,
                  trigger: (null === iz || void 0 === iz ? void 0 : iz.triggerName) || "faroApiCall",
                  importance: (null === iz || void 0 === iz ? void 0 : iz.importance) || sn.Normal,
                  trackUserActionsExcludeItem: lz,
                  pushEvent: nz
                });
                return bz.filter((zz => [3, 2].includes(zz))).first().subscribe((() => {
                  Mz = void 0
                })), vn.notify({
                  type: fn,
                  userAction: bz,
                  initialActivityTimeout: null === iz || void 0 === iz ? void 0 : iz.initialActivityTimeout
                }), Mz = bz, Mz
              }
              bz.error("Attempted to create a new user action while one is already running. This is not possible.")
            },
            getActiveUserAction: tz
          }
        }({
          transports: nz,
          config: bz,
          internalLogger: uz,
          pushEvent: (zz, bz, Ez, nz) => {
            iz ? iz(zz, bz, Ez, nz) : uz.warn("pushEventImpl is not initialized. Event dropped:", {
              name: zz,
              attributes: bz,
              domain: Ez,
              options: nz
            })
          }
        }),
        Mz = function(zz, uz, bz, Ez, nz) {
          let iz;
          return uz.debug("Initializing traces API"), {
            getOTEL: () => iz,
            getTraceContext: () => {
              const zz = null === iz || void 0 === iz ? void 0 : iz.trace.getSpanContext(iz.context.active());
              return zz ? {
                trace_id: zz.traceId,
                span_id: zz.spanId
              } : void 0
            },
            initOTEL: (zz, bz) => {
              uz.debug("Initializing OpenTelemetry"), iz = {
                trace: zz,
                context: bz
              }
            },
            isOTELInitialized: () => !!iz,
            pushTraces: zz => {
              try {
                if (!gu(Ez).shouldCapture()) return;
                const bz = {
                  type: "trace",
                  payload: zz,
                  meta: Si(Ez)
                };
                uz.debug("Pushing trace\n", bz), nz.execute(bz)
              } catch (bz) {
                uz.error("Error pushing trace\n", bz)
              }
            }
          }
        }(0, uz, 0, Ez, nz),
        tz = {
          unpatchedConsole: zz,
          internalLogger: uz,
          userActionsApi: lz,
          config: bz,
          metas: Ez,
          transports: nz,
          tracesApi: Mz
        },
        Hz = function(zz) {
          let {
            internalLogger: uz,
            config: bz,
            metas: Ez,
            transports: nz,
            tracesApi: iz,
            userActionsApi: lz
          } = zz, Mz = null;
          return {
            pushEvent: function(zz, tz, Hz) {
              let {
                skipDedupe: Oz,
                spanContext: pz,
                timestampOverwriteMs: dz,
                customPayloadTransformer: Fz = zz => zz
              } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              try {
                if (!gu(Ez).shouldCapture()) return;
                const Zz = qu(tz),
                  Rz = Fz({
                    name: zz,
                    domain: null !== Hz && void 0 !== Hz ? Hz : bz.eventDomain,
                    attributes: ez(Zz) ? void 0 : Zz,
                    timestamp: dz ? Ru(dz) : Zu(),
                    trace: pz ? {
                      trace_id: pz.traceId,
                      span_id: pz.spanId
                    } : iz.getTraceContext()
                  }),
                  Kz = {
                    name: Rz.name,
                    attributes: Rz.attributes,
                    domain: Rz.domain
                  };
                if (!Oz && bz.dedupe && !rz(Mz) && Xu(Kz, Mz)) return void uz.debug("Skipping event push because it is the same as the last one\n", Rz);
                const wz = Mz,
                  Xz = Si(Ez);
                if (Mz !== wz && !Oz && bz.dedupe && Xu(Kz, Mz)) return;
                Mz = Kz;
                const fz = {
                  meta: Xz,
                  payload: Rz,
                  type: "event"
                };
                uz.debug("Pushing event\n", fz), xn(lz.getActiveUserAction(), fz) || nz.execute(fz)
              } catch (Zz) {
                uz.error("Error pushing event", Zz)
              }
            }
          }
        }(tz);
      return iz = Hz.pushEvent, Yu(Yu(Yu(Yu(Yu(Yu(Yu({}, Mz), ki(tz)), function(zz) {
        let uz, bz, Ez, nz, {
          internalLogger: iz,
          metas: lz
        } = zz;
        iz.debug("Initializing meta API");
        const Mz = zz => {
            bz && lz.remove(bz), bz = {
              user: zz
            }, lz.add(bz)
          },
          tz = (zz, bz) => {
            var Ez;
            const nz = null === bz || void 0 === bz ? void 0 : bz.overrides,
              iz = nz ? {
                overrides: Yu(Yu({}, null === uz || void 0 === uz || null === (Ez = uz.session) || void 0 === Ez ? void 0 : Ez.overrides), nz)
              } : {};
            uz && lz.remove(uz), uz = {
              session: Yu(Yu({}, ez(zz) ? void 0 : zz), iz)
            }, lz.add(uz)
          },
          Hz = (zz, uz) => {
            gu(lz).notifySessionUpdate({
              type: "replace",
              session: zz,
              overrides: null === uz || void 0 === uz ? void 0 : uz.overrides
            }), tz(zz, uz)
          },
          Oz = () => lz.value.session,
          pz = () => lz.value.page;
        return {
          setUser: Mz,
          resetUser: Mz,
          setSession: Hz,
          resetSession: Hz,
          getSession: Oz,
          setView: (zz, uz) => {
            var bz;
            if ((null === uz || void 0 === uz ? void 0 : uz.overrides) && (gu(lz).notifySessionUpdate({
                type: "overrides",
                overrides: uz.overrides
              }), tz(Oz(), {
                overrides: uz.overrides
              })), (null === Ez || void 0 === Ez || null === (bz = Ez.view) || void 0 === bz ? void 0 : bz.name) === (null === zz || void 0 === zz ? void 0 : zz.name)) return;
            const nz = Ez;
            Ez = {
              view: zz
            }, lz.add(Ez), nz && lz.remove(nz)
          },
          getView: () => lz.value.view,
          setPage: zz => {
            var uz;
            const bz = oz(zz) ? Yu(Yu({}, null !== (uz = null === nz || void 0 === nz ? void 0 : nz.page) && void 0 !== uz ? uz : pz()), {}, {
              id: zz
            }) : zz;
            nz && lz.remove(nz), nz = {
              page: bz
            }, lz.add(nz)
          },
          getPage: pz
        }
      }(tz)), function(zz) {
        let {
          internalLogger: uz,
          config: bz,
          metas: Ez,
          transports: nz,
          tracesApi: iz,
          userActionsApi: lz
        } = zz;
        var Mz;
        uz.debug("Initializing logs API");
        let tz = null;
        const Hz = null !== (Mz = bz.logArgsSerializer) && void 0 !== Mz ? Mz : Pb;
        return {
          pushLog: function(zz) {
            let {
              context: Mz,
              level: Oz,
              skipDedupe: pz,
              spanContext: dz,
              timestampOverwriteMs: Fz
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!gu(Ez).shouldCapture()) return;
              const Zz = qu(Mz),
                Rz = {
                  message: Hz(zz),
                  level: null !== Oz && void 0 !== Oz ? Oz : "log",
                  context: ez(Zz) ? void 0 : Zz,
                  timestamp: Fz ? Ru(Fz) : Zu(),
                  trace: dz ? {
                    trace_id: dz.traceId,
                    span_id: dz.spanId
                  } : iz.getTraceContext()
                },
                Kz = {
                  message: Rz.message,
                  level: Rz.level,
                  context: Rz.context
                };
              if (!pz && bz.dedupe && !rz(tz) && Xu(Kz, tz)) return void uz.debug("Skipping log push because it is the same as the last one\n", Rz);
              const wz = tz,
                Xz = Si(Ez);
              if (tz !== wz && !pz && bz.dedupe && Xu(Kz, tz)) return;
              tz = Kz;
              const fz = {
                type: "log",
                payload: Rz,
                meta: Xz
              };
              uz.debug("Pushing log\n", fz), xn(lz.getActiveUserAction(), fz) || nz.execute(fz)
            } catch (Zz) {
              uz.error("Error pushing log\n", Zz)
            }
          }
        }
      }(tz)), function(zz) {
        let {
          internalLogger: uz,
          config: bz,
          metas: Ez,
          transports: nz,
          tracesApi: iz,
          userActionsApi: lz
        } = zz;
        uz.debug("Initializing measurements API");
        let Mz = null;
        return {
          pushMeasurement: function(zz) {
            let {
              skipDedupe: tz,
              context: Hz,
              spanContext: Oz,
              timestampOverwriteMs: pz
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            try {
              if (!gu(Ez).shouldCapture()) return;
              const dz = qu(Hz),
                Fz = Yu(Yu({}, zz), {}, {
                  trace: Oz ? {
                    trace_id: Oz.traceId,
                    span_id: Oz.spanId
                  } : iz.getTraceContext(),
                  timestamp: pz ? Ru(pz) : Zu(),
                  context: ez(dz) ? void 0 : dz
                }),
                Zz = {
                  type: Fz.type,
                  values: Fz.values,
                  context: Fz.context
                };
              if (!tz && bz.dedupe && !rz(Mz) && Xu(Zz, Mz)) return void uz.debug("Skipping measurement push because it is the same as the last one\n", Fz);
              const Rz = Mz,
                Kz = Si(Ez);
              if (Mz !== Rz && !tz && bz.dedupe && Xu(Zz, Mz)) return;
              Mz = Zz;
              const wz = {
                type: "measurement",
                payload: Fz,
                meta: Kz
              };
              uz.debug("Pushing measurement\n", wz), xn(lz.getActiveUserAction(), wz) || nz.execute(wz)
            } catch (dz) {
              uz.error("Error pushing measurement\n", dz)
            }
          }
        }
      }(tz)), Hz), lz)
    }

    function ul(zz) {
      const uz = Ii(zz),
        bz = Yi(uz, zz);
      if (Zz() && !zz.isolate) return void bz.error('Faro is already registered. Either add instrumentations, transports etc. to the global faro instance or use the "isolate" property');
      bz.debug("Initializing");
      const Ez = function(zz, uz) {
          let bz, Ez = [],
            nz = [],
            iz = [],
            lz = 0,
            Mz = 0;
          const tz = () => Ez.reduce(((zz, uz) => Object.assign(zz, Tz(uz) ? uz() : uz)), {}),
            Hz = () => {
              if (nz.length) {
                const zz = tz();
                nz.forEach((uz => uz(zz)))
              }
            };
          return {
            add: function() {
              for (var zz = arguments.length, bz = new Array(zz), nz = 0; nz < zz; nz++) bz[nz] = arguments[nz];
              uz.debug("Adding metas\n", bz), Ez.push(...bz), Hz()
            },
            remove: function() {
              for (var zz = arguments.length, bz = new Array(zz), nz = 0; nz < zz; nz++) bz[nz] = arguments[nz];
              uz.debug("Removing metas\n", bz), Ez = Ez.filter((zz => !bz.includes(zz))), Hz()
            },
            addListener: zz => {
              uz.debug("Adding metas listener\n", zz), nz.push(zz)
            },
            removeListener: zz => {
              uz.debug("Removing metas listener\n", zz), nz = nz.filter((uz => uz !== zz))
            },
            capture: zz => {
              var uz;
              const Ez = void 0 !== bz,
                nz = null !== (uz = bz) && void 0 !== uz ? uz : iz;
              Ez || (bz = nz, lz = 0, Mz = nz.length);
              try {
                for (; lz < Mz;) {
                  const zz = nz[lz++];
                  null === zz || void 0 === zz || zz()
                }
                const uz = gi(tz());
                return null === zz || void 0 === zz || zz(), uz
              } finally {
                Ez || (bz = void 0)
              }
            },
            addCaptureListener: zz => {
              iz.push(zz)
            },
            removeCaptureListener: zz => {
              iz = iz.filter((uz => uz !== zz))
            },
            get value() {
              return tz()
            }
          }
        }(0, bz),
        nz = Wi(uz, bz, zz, Ez),
        iz = zl(uz, bz, zz, Ez, nz),
        lz = function(zz, uz, bz, Ez, nz, iz) {
          uz.debug("Initializing instrumentations");
          const lz = [];
          return {
            add: function() {
              uz.debug("Adding instrumentations");
              for (var Mz = arguments.length, tz = new Array(Mz), Hz = 0; Hz < Mz; Hz++) tz[Hz] = arguments[Hz];
              tz.forEach((Mz => {
                uz.debug(`Adding "${Mz.name}" instrumentation`), lz.some((zz => zz.name === Mz.name)) ? uz.warn(`Instrumentation ${Mz.name} is already added`) : (Mz.unpatchedConsole = zz, Mz.internalLogger = uz, Mz.config = bz, Mz.metas = Ez, Mz.transports = nz, Mz.api = iz, lz.push(Mz), Mz.initialize())
              }))
            },
            get instrumentations() {
              return [...lz]
            },
            remove: function() {
              uz.debug("Removing instrumentations");
              for (var zz = arguments.length, bz = new Array(zz), Ez = 0; Ez < zz; Ez++) bz[Ez] = arguments[Ez];
              bz.forEach((zz => {
                var bz, Ez;
                uz.debug(`Removing "${zz.name}" instrumentation`);
                const nz = lz.reduce(((uz, bz, Ez) => null === uz && bz.name === zz.name ? Ez : null), null);
                null !== nz ? (null === (bz = (Ez = lz[nz]).destroy) || void 0 === bz || bz.call(Ez), lz.splice(nz, 1)) : uz.warn(`Instrumentation "${zz.name}" is not added`)
              }))
            }
          }
        }(uz, bz, zz, Ez, nz, iz),
        Mz = Kz(uz, bz, zz, Ez, nz, iz, lz);
      return Di(Mz),
        function(zz) {
          zz.transports.add(...zz.config.transports), zz.transports.addBeforeSendHooks(zz.config.beforeSend)
        }(Mz),
        function(zz) {
          zz.instrumentations.add(...zz.config.instrumentations)
        }(Mz), Mz
    }

    function bl(zz) {
      const uz = Vi(zz);
      if (uz) return ul(uz)
    }
  },
  6424: function(zz, uz, bz) {
    var Ez;
    ! function(nz, iz) {
      var lz = "function",
        Mz = "undefined",
        tz = "object",
        Hz = "string",
        Oz = "major",
        pz = "model",
        dz = "name",
        Fz = "type",
        Zz = "vendor",
        Rz = "version",
        Kz = "architecture",
        wz = "console",
        Xz = "mobile",
        fz = "tablet",
        sz = "smarttv",
        rz = "wearable",
        oz = "embedded",
        Nz = "Amazon",
        vz = "Apple",
        xz = "ASUS",
        Jz = "BlackBerry",
        Az = "Browser",
        Tz = "Chrome",
        Lz = "Firefox",
        Pz = "Google",
        Gz = "Honor",
        az = "Huawei",
        Vz = "LG",
        mz = "Microsoft",
        qz = "Motorola",
        hz = "Nvidia",
        Uz = "OnePlus",
        cz = "Opera",
        gz = "OPPO",
        Sz = "Samsung",
        yz = "Sharp",
        Dz = "Sony",
        Qz = "Xiaomi",
        Wz = "Zebra",
        ez = "Facebook",
        jz = "Chromium OS",
        Iz = "Mac OS",
        Bz = " Browser",
        Cz = function(zz) {
          for (var uz = {}, bz = 0; bz < zz.length; bz++) uz[zz[bz].toUpperCase()] = zz[bz];
          return uz
        },
        Yz = function(zz, uz) {
          return typeof zz === Hz && -1 !== kz(uz).indexOf(kz(zz))
        },
        kz = function(zz) {
          return zz.toLowerCase()
        },
        zu = function(zz, uz) {
          if (typeof zz === Hz) return zz = zz.replace(/^\s\s*/, ""), typeof uz === Mz ? zz : zz.substring(0, 500)
        },
        uu = function(zz, uz) {
          for (var bz, Ez, nz, Mz, Hz, Oz, pz = 0; pz < uz.length && !Hz;) {
            var dz = uz[pz],
              Fz = uz[pz + 1];
            for (bz = Ez = 0; bz < dz.length && !Hz && dz[bz];)
              if (Hz = dz[bz++].exec(zz))
                for (nz = 0; nz < Fz.length; nz++) Oz = Hz[++Ez], typeof(Mz = Fz[nz]) === tz && Mz.length > 0 ? 2 === Mz.length ? typeof Mz[1] == lz ? this[Mz[0]] = Mz[1].call(this, Oz) : this[Mz[0]] = Mz[1] : 3 === Mz.length ? typeof Mz[1] !== lz || Mz[1].exec && Mz[1].test ? this[Mz[0]] = Oz ? Oz.replace(Mz[1], Mz[2]) : iz : this[Mz[0]] = Oz ? Mz[1].call(this, Oz, Mz[2]) : iz : 4 === Mz.length && (this[Mz[0]] = Oz ? Mz[3].call(this, Oz.replace(Mz[1], Mz[2])) : iz) : this[Mz] = Oz || iz;
            pz += 2
          }
        },
        bu = function(zz, uz) {
          for (var bz in uz)
            if (typeof uz[bz] === tz && uz[bz].length > 0) {
              for (var Ez = 0; Ez < uz[bz].length; Ez++)
                if (Yz(uz[bz][Ez], zz)) return "?" === bz ? iz : bz
            } else if (Yz(uz[bz], zz)) return "?" === bz ? iz : bz;
          return uz.hasOwnProperty("*") ? uz["*"] : zz
        },
        Eu = {
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
        nu = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [Rz, [dz, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [Rz, [dz, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [dz, Rz],
            [/opios[\/ ]+([\w\.]+)/i],
            [Rz, [dz, cz + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [Rz, [dz, cz + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [Rz, [dz, cz]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [Rz, [dz, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [Rz, [dz, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
            [dz, Rz],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [Rz, [dz, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [Rz, [dz, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [Rz, [dz, "UC" + Az]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [Rz, [dz, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [Rz, [dz, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [Rz, [dz, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [Rz, [dz, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [Rz, [dz, "Smart Lenovo " + Az]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
              [dz, /(.+)/, "$1 Secure " + Az], Rz
            ],
            [/\bfocus\/([\w\.]+)/i],
            [Rz, [dz, Lz + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [Rz, [dz, cz + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [Rz, [dz, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [Rz, [dz, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [Rz, [dz, cz + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [Rz, [dz, "MIUI" + Bz]],
            [/fxios\/([\w\.-]+)/i],
            [Rz, [dz, Lz]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [Rz, [dz, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
              [dz, /(.+)/, "$1Browser"], Rz
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
              [dz, /(.+)/, "$1" + Bz], Rz
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [Rz, [dz, Sz + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [Rz, [dz, "Sogou Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
              [dz, "Sogou Mobile"], Rz
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [dz, Rz],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [dz],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [Rz, dz],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
              [dz, ez], Rz
            ],
            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
            [dz, Rz],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [Rz, [dz, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [Rz, [dz, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [Rz, [dz, Tz + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
              [dz, Tz + " WebView"], Rz
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [Rz, [dz, "Android " + Az]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [dz, Rz],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [Rz, [dz, "Mobile Safari"]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [Rz, dz],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [dz, [Rz, bu, {
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
            [dz, Rz],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
              [dz, "Netscape"], Rz
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [dz, Rz],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [Rz, [dz, Lz + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [dz, [Rz, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [dz, [Rz, /master.|lts./, ""]]
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
              [Kz, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
              [Kz, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
              [Kz, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
              [Kz, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
              [Kz, "arm"]
            ],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [
              [Kz, /ower/, "", kz]
            ],
            [/ sun4\w[;\)]/i],
            [
              [Kz, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
            [
              [Kz, kz]
            ]
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [pz, [Zz, Sz],
              [Fz, fz]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
            [pz, [Zz, Sz],
              [Fz, Xz]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [pz, [Zz, vz],
              [Fz, Xz]
            ],
            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
            [pz, [Zz, vz],
              [Fz, fz]
            ],
            [/(macintosh);/i],
            [pz, [Zz, vz]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [pz, [Zz, yz],
              [Fz, Xz]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [pz, [Zz, Gz],
              [Fz, fz]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [pz, [Zz, Gz],
              [Fz, Xz]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [pz, [Zz, az],
              [Fz, fz]
            ],
            [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
            [pz, [Zz, az],
              [Fz, Xz]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
              [pz, /_/g, " "],
              [Zz, Qz],
              [Fz, fz]
            ],
            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
              [pz, /_/g, " "],
              [Zz, Qz],
              [Fz, Xz]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [pz, [Zz, gz],
              [Fz, Xz]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [pz, [Zz, bu, {
                OnePlus: ["304", "403", "203"],
                "*": gz
              }],
              [Fz, fz]
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [pz, [Zz, "Vivo"],
              [Fz, Xz]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [pz, [Zz, "Realme"],
              [Fz, Xz]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
            [pz, [Zz, qz],
              [Fz, Xz]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [pz, [Zz, qz],
              [Fz, fz]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [pz, [Zz, Vz],
              [Fz, fz]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
            [pz, [Zz, Vz],
              [Fz, Xz]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [pz, [Zz, "Lenovo"],
              [Fz, fz]
            ],
            [/(nokia) (t[12][01])/i],
            [Zz, pz, [Fz, fz]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
            [
              [pz, /_/g, " "],
              [Fz, Xz],
              [Zz, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [pz, [Zz, Pz],
              [Fz, fz]
            ],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [pz, [Zz, Pz],
              [Fz, Xz]
            ],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [pz, [Zz, Dz],
              [Fz, Xz]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [pz, "Xperia Tablet"],
              [Zz, Dz],
              [Fz, fz]
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [pz, [Zz, Uz],
              [Fz, Xz]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [pz, [Zz, Nz],
              [Fz, fz]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [pz, /(.+)/g, "Fire Phone $1"],
              [Zz, Nz],
              [Fz, Xz]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [pz, Zz, [Fz, fz]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [pz, [Zz, Jz],
              [Fz, Xz]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [pz, [Zz, xz],
              [Fz, fz]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [pz, [Zz, xz],
              [Fz, Xz]
            ],
            [/(nexus 9)/i],
            [pz, [Zz, "HTC"],
              [Fz, fz]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [Zz, [pz, /_/g, " "],
              [Fz, Xz]
            ],
            [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
            [pz, [Zz, "TCL"],
              [Fz, fz]
            ],
            [/(itel) ((\w+))/i],
            [
              [Zz, kz], pz, [Fz, bu, {
                tablet: ["p10001l", "w7001"],
                "*": "mobile"
              }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [pz, [Zz, "Acer"],
              [Fz, fz]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [pz, [Zz, "Meizu"],
              [Fz, Xz]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [pz, [Zz, "Ulefone"],
              [Fz, Xz]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [pz, [Zz, "Energizer"],
              [Fz, Xz]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [pz, [Zz, "Cat"],
              [Fz, Xz]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [pz, [Zz, "Smartfren"],
              [Fz, Xz]
            ],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [pz, [Zz, "Nothing"],
              [Fz, Xz]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [pz, [Zz, "Archos"],
              [Fz, fz]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [pz, [Zz, "Archos"],
              [Fz, Xz]
            ],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [Zz, pz, [Fz, fz]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
            [Zz, pz, [Fz, Xz]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
            [Zz, pz, [Fz, fz]],
            [/(surface duo)/i],
            [pz, [Zz, mz],
              [Fz, fz]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [pz, [Zz, "Fairphone"],
              [Fz, Xz]
            ],
            [/(u304aa)/i],
            [pz, [Zz, "AT&T"],
              [Fz, Xz]
            ],
            [/\bsie-(\w*)/i],
            [pz, [Zz, "Siemens"],
              [Fz, Xz]
            ],
            [/\b(rct\w+) b/i],
            [pz, [Zz, "RCA"],
              [Fz, fz]
            ],
            [/\b(venue[\d ]{2,7}) b/i],
            [pz, [Zz, "Dell"],
              [Fz, fz]
            ],
            [/\b(q(?:mv|ta)\w+) b/i],
            [pz, [Zz, "Verizon"],
              [Fz, fz]
            ],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [pz, [Zz, "Barnes & Noble"],
              [Fz, fz]
            ],
            [/\b(tm\d{3}\w+) b/i],
            [pz, [Zz, "NuVision"],
              [Fz, fz]
            ],
            [/\b(k88) b/i],
            [pz, [Zz, "ZTE"],
              [Fz, fz]
            ],
            [/\b(nx\d{3}j) b/i],
            [pz, [Zz, "ZTE"],
              [Fz, Xz]
            ],
            [/\b(gen\d{3}) b.+49h/i],
            [pz, [Zz, "Swiss"],
              [Fz, Xz]
            ],
            [/\b(zur\d{3}) b/i],
            [pz, [Zz, "Swiss"],
              [Fz, fz]
            ],
            [/\b((zeki)?tb.*\b) b/i],
            [pz, [Zz, "Zeki"],
              [Fz, fz]
            ],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [
              [Zz, "Dragon Touch"], pz, [Fz, fz]
            ],
            [/\b(ns-?\w{0,9}) b/i],
            [pz, [Zz, "Insignia"],
              [Fz, fz]
            ],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [pz, [Zz, "NextBook"],
              [Fz, fz]
            ],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [
              [Zz, "Voice"], pz, [Fz, Xz]
            ],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [
              [Zz, "LvTel"], pz, [Fz, Xz]
            ],
            [/\b(ph-1) /i],
            [pz, [Zz, "Essential"],
              [Fz, Xz]
            ],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [pz, [Zz, "Envizen"],
              [Fz, fz]
            ],
            [/\b(trio[-\w\. ]+) b/i],
            [pz, [Zz, "MachSpeed"],
              [Fz, fz]
            ],
            [/\btu_(1491) b/i],
            [pz, [Zz, "Rotor"],
              [Fz, fz]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [pz, [Zz, hz],
              [Fz, fz]
            ],
            [/(sprint) (\w+)/i],
            [Zz, pz, [Fz, Xz]],
            [/(kin\.[onetw]{3})/i],
            [
              [pz, /\./g, " "],
              [Zz, mz],
              [Fz, Xz]
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [pz, [Zz, Wz],
              [Fz, fz]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [pz, [Zz, Wz],
              [Fz, Xz]
            ],
            [/smart-tv.+(samsung)/i],
            [Zz, [Fz, sz]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [pz, /^/, "SmartTV"],
              [Zz, Sz],
              [Fz, sz]
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [Zz, Vz],
              [Fz, sz]
            ],
            [/(apple) ?tv/i],
            [Zz, [pz, vz + " TV"],
              [Fz, sz]
            ],
            [/crkey/i],
            [
              [pz, Tz + "cast"],
              [Zz, Pz],
              [Fz, sz]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [pz, [Zz, Nz],
              [Fz, sz]
            ],
            [/(shield \w+ tv)/i],
            [pz, [Zz, hz],
              [Fz, sz]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [pz, [Zz, yz],
              [Fz, sz]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [pz, [Zz, Dz],
              [Fz, sz]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [pz, [Zz, Qz],
              [Fz, sz]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [Zz, pz, [Fz, sz]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
              [Zz, zu],
              [pz, zu],
              [Fz, sz]
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [pz, [Fz, sz]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [
              [Fz, sz]
            ],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [Zz, pz, [Fz, wz]],
            [/droid.+; (shield)( bui|\))/i],
            [pz, [Zz, hz],
              [Fz, wz]
            ],
            [/(playstation \w+)/i],
            [pz, [Zz, Dz],
              [Fz, wz]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [pz, [Zz, mz],
              [Fz, wz]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [pz, [Zz, Sz],
              [Fz, rz]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [Zz, pz, [Fz, rz]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [pz, [Zz, gz],
              [Fz, rz]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [pz, [Zz, vz],
              [Fz, rz]
            ],
            [/(opwwe\d{3})/i],
            [pz, [Zz, Uz],
              [Fz, rz]
            ],
            [/(moto 360)/i],
            [pz, [Zz, qz],
              [Fz, rz]
            ],
            [/(smartwatch 3)/i],
            [pz, [Zz, Dz],
              [Fz, rz]
            ],
            [/(g watch r)/i],
            [pz, [Zz, Vz],
              [Fz, rz]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [pz, [Zz, Wz],
              [Fz, rz]
            ],
            [/droid.+; (glass) \d/i],
            [pz, [Zz, Pz],
              [Fz, rz]
            ],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [Zz, pz, [Fz, rz]],
            [/; (quest( \d| pro)?)/i],
            [pz, [Zz, ez],
              [Fz, rz]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [Zz, [Fz, oz]],
            [/(aeobc)\b/i],
            [pz, [Zz, Nz],
              [Fz, oz]
            ],
            [/(homepod).+mac os/i],
            [pz, [Zz, vz],
              [Fz, oz]
            ],
            [/windows iot/i],
            [
              [Fz, oz]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [pz, [Fz, Xz]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [pz, [Fz, fz]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
              [Fz, fz]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
              [Fz, Xz]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [pz, [Zz, "Generic"]]
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [Rz, [dz, "EdgeHTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [dz, Rz],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [Rz, [dz, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [dz, Rz],
            [/ladybird\//i],
            [
              [dz, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [Rz, dz]
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [dz, Rz],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [dz, [Rz, bu, Eu]],
            [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [Rz, bu, Eu],
              [dz, "Windows"]
            ],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
            [
              [Rz, /_/g, "."],
              [dz, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
              [dz, Iz],
              [Rz, /_/g, "."]
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [Rz, dz],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
              [dz, /(.+)/, "$1 Touch"], Rz
            ],
            [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
            [dz, Rz],
            [/\(bb(10);/i],
            [Rz, [dz, Jz]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [Rz, [dz, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [Rz, [dz, Lz + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [Rz, [dz, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [Rz, [dz, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [Rz, [dz, Tz + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
              [dz, jz], Rz
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
            [dz, Rz],
            [/(sunos) ?([\w\.\d]*)/i],
            [
              [dz, "Solaris"], Rz
            ],
            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [dz, Rz]
          ]
        },
        iu = function(zz, uz) {
          if (typeof zz === tz && (uz = zz, zz = iz), !(this instanceof iu)) return new iu(zz, uz).getResult();
          var bz = typeof nz !== Mz && nz.navigator ? nz.navigator : iz,
            Ez = zz || (bz && bz.userAgent ? bz.userAgent : ""),
            wz = bz && bz.userAgentData ? bz.userAgentData : iz,
            sz = uz ? function(zz, uz) {
              var bz = {};
              for (var Ez in zz) uz[Ez] && uz[Ez].length % 2 === 0 ? bz[Ez] = uz[Ez].concat(zz[Ez]) : bz[Ez] = zz[Ez];
              return bz
            }(nu, uz) : nu,
            rz = bz && bz.userAgent == Ez;
          return this.getBrowser = function() {
            var zz, uz = {};
            return uz[dz] = iz, uz[Rz] = iz, uu.call(uz, Ez, sz.browser), uz[Oz] = typeof(zz = uz[Rz]) === Hz ? zz.replace(/[^\d\.]/g, "").split(".")[0] : iz, rz && bz && bz.brave && typeof bz.brave.isBrave == lz && (uz[dz] = "Brave"), uz
          }, this.getCPU = function() {
            var zz = {};
            return zz[Kz] = iz, uu.call(zz, Ez, sz.cpu), zz
          }, this.getDevice = function() {
            var zz = {};
            return zz[Zz] = iz, zz[pz] = iz, zz[Fz] = iz, uu.call(zz, Ez, sz.device), rz && !zz[Fz] && wz && wz.mobile && (zz[Fz] = Xz), rz && "Macintosh" == zz[pz] && bz && typeof bz.standalone !== Mz && bz.maxTouchPoints && bz.maxTouchPoints > 2 && (zz[pz] = "iPad", zz[Fz] = fz), zz
          }, this.uR = function() {
            var zz = {};
            return zz[dz] = iz, zz[Rz] = iz, uu.call(zz, Ez, sz.engine), zz
          }, this.getOS = function() {
            var zz = {};
            return zz[dz] = iz, zz[Rz] = iz, uu.call(zz, Ez, sz.os), rz && !zz[dz] && wz && wz.platform && "Unknown" != wz.platform && (zz[dz] = wz.platform.replace(/chrome os/i, jz).replace(/macos/i, Iz)), zz
          }, this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.uR(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            }
          }, this.getUA = function() {
            return Ez
          }, this.setUA = function(zz) {
            return Ez = typeof zz === Hz && zz.length > 500 ? zu(zz, 500) : zz, this
          }, this.setUA(Ez), this
        };
      iu.VERSION = "1.0.41", iu.BROWSER = Cz([dz, Rz, Oz]), iu.CPU = Cz([Kz]), iu.DEVICE = Cz([pz, Zz, Fz, wz, Xz, sz, fz, rz, oz]), iu.ENGINE = iu.OS = Cz([dz, Rz]), typeof uz !== Mz ? (zz.exports && (uz = zz.exports = iu), uz.UAParser = iu) : bz.amdO ? (Ez = function() {
        return iu
      }.call(uz, bz, uz, zz)) === iz || (zz.exports = Ez) : typeof nz !== Mz && (nz.UAParser = iu);
      var lu = typeof nz !== Mz && (nz.jQuery || nz.Zepto);
      if (lu && !lu.ua) {
        var Mu = new iu;
        lu.ua = Mu.getResult(), lu.ua.get = function() {
          return Mu.getUA()
        }, lu.ua.set = function(zz) {
          Mu.setUA(zz);
          var uz = Mu.getResult();
          for (var bz in uz) lu.ua[bz] = uz[bz]
        }
      }
    }("object" === typeof window ? window : this)
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);