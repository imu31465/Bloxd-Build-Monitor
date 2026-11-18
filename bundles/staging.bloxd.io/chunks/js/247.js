/*! For license information please see symm5.247.4979ac0d.chunk.js.LICENSE.txt */
export const id = 247;
export const ids = [247];
export const modules = {
  39289: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      getAnalytics: () => Rc,
      getGoogleAnalyticsClientId: () => tc,
      initializeAnalytics: () => Lc,
      isSupported: () => ac,
      logEvent: () => ZZ,
      setAnalyticsCollectionEnabled: () => JZ,
      setConsent: () => FZ,
      setCurrentScreen: () => Bc,
      setDefaultEventParameters: () => cZ,
      setUserId: () => oc,
      setUserProperties: () => lc,
      settings: () => uc
    });
    var FJ = ZJ(39268),
      UJ = ZJ(39284),
      eJ = ZJ(39279),
      XJ = ZJ(39275);
    let AJ, qJ;
    const jJ = new WeakMap,
      YJ = new WeakMap,
      hJ = new WeakMap,
      DJ = new WeakMap,
      sJ = new WeakMap;
    let nJ = {
      get(JJ, cJ, ZJ) {
        if (JJ instanceof IDBTransaction) {
          if ("done" === cJ) return YJ.get(JJ);
          if ("objectStoreNames" === cJ) return JJ.objectStoreNames || hJ.get(JJ);
          if ("store" === cJ) return ZJ.objectStoreNames[1] ? void 0 : ZJ.objectStore(ZJ.objectStoreNames[0])
        }
        return xJ(JJ[cJ])
      },
      set: (JJ, cJ, ZJ) => (JJ[cJ] = ZJ, !0),
      has: (JJ, cJ) => JJ instanceof IDBTransaction && ("done" === cJ || "store" === cJ) || cJ in JJ
    };

    function GJ(JJ) {
      return JJ !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (qJ || (qJ = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(JJ) ? function() {
        for (var cJ = arguments.length, ZJ = new Array(cJ), FJ = 0; FJ < cJ; FJ++) ZJ[FJ] = arguments[FJ];
        return JJ.apply(rJ(this), ZJ), xJ(jJ.get(this))
      } : function() {
        for (var cJ = arguments.length, ZJ = new Array(cJ), FJ = 0; FJ < cJ; FJ++) ZJ[FJ] = arguments[FJ];
        return xJ(JJ.apply(rJ(this), ZJ))
      } : function(cJ) {
        for (var ZJ = arguments.length, FJ = new Array(ZJ > 1 ? ZJ - 1 : 0), UJ = 1; UJ < ZJ; UJ++) FJ[UJ - 1] = arguments[UJ];
        const eJ = JJ.call(rJ(this), cJ, ...FJ);
        return hJ.set(eJ, cJ.sort ? cJ.sort() : [cJ]), xJ(eJ)
      }
    }

    function fJ(JJ) {
      return "function" === typeof JJ ? GJ(JJ) : (JJ instanceof IDBTransaction && function(JJ) {
        if (YJ.has(JJ)) return;
        const cJ = new Promise(((cJ, ZJ) => {
          const FJ = () => {
              JJ.removeEventListener("complete", UJ), JJ.removeEventListener("error", eJ), JJ.removeEventListener("abort", eJ)
            },
            UJ = () => {
              cJ(), FJ()
            },
            eJ = () => {
              ZJ(JJ.error || new DOMException("AbortError", "AbortError")), FJ()
            };
          JJ.addEventListener("complete", UJ), JJ.addEventListener("error", eJ), JJ.addEventListener("abort", eJ)
        }));
        YJ.set(JJ, cJ)
      }(JJ), cJ = JJ, (AJ || (AJ = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((JJ => cJ instanceof JJ)) ? new Proxy(JJ, nJ) : JJ);
      var cJ
    }

    function xJ(JJ) {
      if (JJ instanceof IDBRequest) return function(JJ) {
        const cJ = new Promise(((cJ, ZJ) => {
          const FJ = () => {
              JJ.removeEventListener("success", UJ), JJ.removeEventListener("error", eJ)
            },
            UJ = () => {
              cJ(xJ(JJ.result)), FJ()
            },
            eJ = () => {
              ZJ(JJ.error), FJ()
            };
          JJ.addEventListener("success", UJ), JJ.addEventListener("error", eJ)
        }));
        return cJ.then((cJ => {
          cJ instanceof IDBCursor && jJ.set(cJ, JJ)
        })).catch((() => {})), sJ.set(cJ, JJ), cJ
      }(JJ);
      if (DJ.has(JJ)) return DJ.get(JJ);
      const cJ = fJ(JJ);
      return cJ !== JJ && (DJ.set(JJ, cJ), sJ.set(cJ, JJ)), cJ
    }
    const rJ = JJ => sJ.get(JJ);
    const vJ = ["get", "getKey", "getAll", "getAllKeys", "count"],
      mJ = ["put", "add", "delete", "clear"],
      QJ = new Map;

    function EJ(JJ, cJ) {
      if (!(JJ instanceof IDBDatabase) || cJ in JJ || "string" !== typeof cJ) return;
      if (QJ.get(cJ)) return QJ.get(cJ);
      const ZJ = cJ.replace(/FromIndex$/, ""),
        FJ = cJ !== ZJ,
        UJ = mJ.includes(ZJ);
      if (!(ZJ in (FJ ? IDBIndex : IDBObjectStore).prototype) || !UJ && !vJ.includes(ZJ)) return;
      const eJ = async function(JJ) {
        const cJ = this.transaction(JJ, UJ ? "readwrite" : "readonly");
        let eJ = cJ.store;
        for (var XJ = arguments.length, AJ = new Array(XJ > 1 ? XJ - 1 : 0), qJ = 1; qJ < XJ; qJ++) AJ[qJ - 1] = arguments[qJ];
        return FJ && (eJ = eJ.index(AJ.shift())), (await Promise.all([eJ[ZJ](...AJ), UJ && cJ.done]))[0]
      };
      return QJ.set(cJ, eJ), eJ
    }
    nJ = (JJ => ({
      ...JJ,
      get: (cJ, ZJ, FJ) => EJ(cJ, ZJ) || JJ.get(cJ, ZJ, FJ),
      has: (cJ, ZJ) => !!EJ(cJ, ZJ) || JJ.has(cJ, ZJ)
    }))(nJ);
    const VJ = "@firebase/installations",
      KJ = "0.6.4",
      yJ = 1e4,
      SJ = `w:${KJ}`,
      IJ = "FIS_v2",
      MJ = 36e5,
      bJ = {
        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
        "not-registered": "Firebase Installation is not registered.",
        "installation-not-found": "Firebase Installation not found.",
        "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        "app-offline": "Could not process request. Application offline.",
        "delete-pending-registration": "Can't delete installation while there is a pending registration request."
      },
      wJ = new eJ.d("installations", "Installations", bJ);

    function WJ(JJ) {
      return JJ instanceof eJ.h && JJ.code.includes("request-failed")
    }

    function gJ(JJ) {
      let {
        projectId: cJ
      } = JJ;
      return `https://firebaseinstallations.googleapis.com/v1/projects/${cJ}/installations`
    }

    function HJ(JJ) {
      return {
        token: JJ.token,
        requestStatus: 2,
        expiresIn: (cJ = JJ.expiresIn, Number(cJ.replace("s", "000"))),
        creationTime: Date.now()
      };
      var cJ
    }
    async function PJ(JJ, cJ) {
      const ZJ = (await cJ.json()).error;
      return wJ.create("request-failed", {
        requestName: JJ,
        serverCode: ZJ.code,
        serverMessage: ZJ.message,
        serverStatus: ZJ.status
      })
    }

    function kJ(JJ) {
      let {
        apiKey: cJ
      } = JJ;
      return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": cJ
      })
    }

    function pJ(JJ, cJ) {
      let {
        refreshToken: ZJ
      } = cJ;
      const FJ = kJ(JJ);
      return FJ.append("Authorization", function(JJ) {
        return `${IJ} ${JJ}`
      }(ZJ)), FJ
    }
    async function dJ(JJ) {
      const cJ = await JJ();
      return cJ.status >= 500 && cJ.status < 600 ? JJ() : cJ
    }

    function zJ(JJ) {
      return new Promise((cJ => {
        setTimeout(cJ, JJ)
      }))
    }
    const NJ = /^[cdef][\w-]{21}$/;

    function OJ() {
      try {
        const JJ = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(JJ), JJ[0] = 112 + JJ[0] % 16;
        const cJ = function(JJ) {
          const cJ = (ZJ = JJ, btoa(String.fromCharCode(...ZJ)).replace(/\+/g, "-").replace(/\//g, "_"));
          var ZJ;
          return cJ.substr(0, 22)
        }(JJ);
        return NJ.test(cJ) ? cJ : ""
      } catch (JJ) {
        return ""
      }
    }

    function TJ(JJ) {
      return `${JJ.appName}!${JJ.appId}`
    }
    const CJ = new Map;

    function uJ(JJ, cJ) {
      const ZJ = TJ(JJ);
      iJ(ZJ, cJ),
        function(JJ, cJ) {
          const ZJ = LJ();
          ZJ && ZJ.postMessage({
            key: JJ,
            fid: cJ
          });
          aJ()
        }(ZJ, cJ)
    }

    function iJ(JJ, cJ) {
      const ZJ = CJ.get(JJ);
      if (ZJ)
        for (const FJ of ZJ) FJ(cJ)
    }
    let RJ = null;

    function LJ() {
      return !RJ && "BroadcastChannel" in self && (RJ = new BroadcastChannel("[Firebase] FID Change"), RJ.onmessage = JJ => {
        iJ(JJ.data.key, JJ.data.fid)
      }), RJ
    }

    function aJ() {
      0 === CJ.size && RJ && (RJ.close(), RJ = null)
    }
    const BJ = "firebase-installations-store";
    let tJ = null;

    function oJ() {
      return tJ || (tJ = function(JJ, cJ) {
        let {
          blocked: ZJ,
          upgrade: FJ,
          blocking: UJ,
          terminated: eJ
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const XJ = indexedDB.open(JJ, cJ),
          AJ = xJ(XJ);
        return FJ && XJ.addEventListener("upgradeneeded", (JJ => {
          FJ(xJ(XJ.result), JJ.oldVersion, JJ.newVersion, xJ(XJ.transaction))
        })), ZJ && XJ.addEventListener("blocked", (() => ZJ())), AJ.then((JJ => {
          eJ && JJ.addEventListener("close", (() => eJ())), UJ && JJ.addEventListener("versionchange", (() => UJ()))
        })).catch((() => {})), AJ
      }("firebase-installations-database", 1, {
        upgrade: (JJ, cJ) => {
          if (0 === cJ) JJ.createObjectStore(BJ)
        }
      })), tJ
    }
    async function lJ(JJ, cJ) {
      const ZJ = TJ(JJ),
        FJ = (await oJ()).transaction(BJ, "readwrite"),
        UJ = FJ.objectStore(BJ),
        eJ = await UJ.get(ZJ);
      return await UJ.put(cJ, ZJ), await FJ.done, eJ && eJ.fid === cJ.fid || uJ(JJ, cJ.fid), cJ
    }
    async function Jc(JJ) {
      const cJ = TJ(JJ),
        ZJ = (await oJ()).transaction(BJ, "readwrite");
      await ZJ.objectStore(BJ).delete(cJ), await ZJ.done
    }
    async function cc(JJ, cJ) {
      const ZJ = TJ(JJ),
        FJ = (await oJ()).transaction(BJ, "readwrite"),
        UJ = FJ.objectStore(BJ),
        eJ = await UJ.get(ZJ),
        XJ = cJ(eJ);
      return void 0 === XJ ? await UJ.delete(ZJ) : await UJ.put(XJ, ZJ), await FJ.done, !XJ || eJ && eJ.fid === XJ.fid || uJ(JJ, XJ.fid), XJ
    }
    async function Zc(JJ) {
      let cJ;
      const ZJ = await cc(JJ.appConfig, (ZJ => {
        const FJ = function(JJ) {
            const cJ = JJ || {
              fid: OJ(),
              registrationStatus: 0
            };
            return ec(cJ)
          }(ZJ),
          UJ = function(JJ, cJ) {
            if (0 === cJ.registrationStatus) {
              if (!navigator.onLine) {
                return {
                  installationEntry: cJ,
                  registrationPromise: Promise.reject(wJ.create("app-offline"))
                }
              }
              const ZJ = {
                  fid: cJ.fid,
                  registrationStatus: 1,
                  registrationTime: Date.now()
                },
                FJ = async function(JJ, cJ) {
                  try {
                    const ZJ = await async function(JJ, cJ) {
                      let {
                        appConfig: ZJ,
                        heartbeatServiceProvider: FJ
                      } = JJ, {
                        fid: UJ
                      } = cJ;
                      const eJ = gJ(ZJ),
                        XJ = kJ(ZJ),
                        AJ = FJ.getImmediate({
                          optional: !0
                        });
                      if (AJ) {
                        const JJ = await AJ.getHeartbeatsHeader();
                        JJ && XJ.append("x-firebase-client", JJ)
                      }
                      const qJ = {
                          fid: UJ,
                          authVersion: IJ,
                          appId: ZJ.appId,
                          sdkVersion: SJ
                        },
                        jJ = {
                          method: "POST",
                          headers: XJ,
                          body: JSON.stringify(qJ)
                        },
                        YJ = await dJ((() => fetch(eJ, jJ)));
                      if (YJ.ok) {
                        const JJ = await YJ.json();
                        return {
                          fid: JJ.fid || UJ,
                          registrationStatus: 2,
                          refreshToken: JJ.refreshToken,
                          authToken: HJ(JJ.authToken)
                        }
                      }
                      throw await PJ("Create Installation", YJ)
                    }(JJ, cJ);
                    return lJ(JJ.appConfig, ZJ)
                  } catch (ZJ) {
                    throw WJ(ZJ) && 409 === ZJ.customData.serverCode ? await Jc(JJ.appConfig) : await lJ(JJ.appConfig, {
                      fid: cJ.fid,
                      registrationStatus: 0
                    }), ZJ
                  }
                }(JJ, ZJ);
              return {
                installationEntry: ZJ,
                registrationPromise: FJ
              }
            }
            return 1 === cJ.registrationStatus ? {
              installationEntry: cJ,
              registrationPromise: Fc(JJ)
            } : {
              installationEntry: cJ
            }
          }(JJ, FJ);
        return cJ = UJ.registrationPromise, UJ.installationEntry
      }));
      return "" === ZJ.fid ? {
        installationEntry: await cJ
      } : {
        installationEntry: ZJ,
        registrationPromise: cJ
      }
    }
    async function Fc(JJ) {
      let cJ = await Uc(JJ.appConfig);
      for (; 1 === cJ.registrationStatus;) await zJ(100), cJ = await Uc(JJ.appConfig);
      if (0 === cJ.registrationStatus) {
        const {
          installationEntry: cJ,
          registrationPromise: ZJ
        } = await Zc(JJ);
        return ZJ || cJ
      }
      return cJ
    }

    function Uc(JJ) {
      return cc(JJ, (JJ => {
        if (!JJ) throw wJ.create("installation-not-found");
        return ec(JJ)
      }))
    }

    function ec(JJ) {
      return 1 === (cJ = JJ).registrationStatus && cJ.registrationTime + yJ < Date.now() ? {
        fid: JJ.fid,
        registrationStatus: 0
      } : JJ;
      var cJ
    }
    async function Xc(JJ, cJ) {
      let {
        appConfig: ZJ,
        heartbeatServiceProvider: FJ
      } = JJ;
      const UJ = function(JJ, cJ) {
          let {
            fid: ZJ
          } = cJ;
          return `${gJ(JJ)}/${ZJ}/authTokens:generate`
        }(ZJ, cJ),
        eJ = pJ(ZJ, cJ),
        XJ = FJ.getImmediate({
          optional: !0
        });
      if (XJ) {
        const JJ = await XJ.getHeartbeatsHeader();
        JJ && eJ.append("x-firebase-client", JJ)
      }
      const AJ = {
          installation: {
            sdkVersion: SJ,
            appId: ZJ.appId
          }
        },
        qJ = {
          method: "POST",
          headers: eJ,
          body: JSON.stringify(AJ)
        },
        jJ = await dJ((() => fetch(UJ, qJ)));
      if (jJ.ok) {
        return HJ(await jJ.json())
      }
      throw await PJ("Generate Auth Token", jJ)
    }
    async function Ac(JJ) {
      let cJ, ZJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const FJ = await cc(JJ.appConfig, (FJ => {
        if (!jc(FJ)) throw wJ.create("not-registered");
        const UJ = FJ.authToken;
        if (!ZJ && function(JJ) {
            return 2 === JJ.requestStatus && ! function(JJ) {
              const cJ = Date.now();
              return cJ < JJ.creationTime || JJ.creationTime + JJ.expiresIn < cJ + MJ
            }(JJ)
          }(UJ)) return FJ;
        if (1 === UJ.requestStatus) return cJ = async function(JJ, cJ) {
          let ZJ = await qc(JJ.appConfig);
          for (; 1 === ZJ.authToken.requestStatus;) await zJ(100), ZJ = await qc(JJ.appConfig);
          const FJ = ZJ.authToken;
          return 0 === FJ.requestStatus ? Ac(JJ, cJ) : FJ
        }(JJ, ZJ), FJ;
        {
          if (!navigator.onLine) throw wJ.create("app-offline");
          const ZJ = function(JJ) {
            const cJ = {
              requestStatus: 1,
              requestTime: Date.now()
            };
            return Object.assign(Object.assign({}, JJ), {
              authToken: cJ
            })
          }(FJ);
          return cJ = async function(JJ, cJ) {
            try {
              const ZJ = await Xc(JJ, cJ),
                FJ = Object.assign(Object.assign({}, cJ), {
                  authToken: ZJ
                });
              return await lJ(JJ.appConfig, FJ), ZJ
            } catch (ZJ) {
              if (!WJ(ZJ) || 401 !== ZJ.customData.serverCode && 404 !== ZJ.customData.serverCode) {
                const ZJ = Object.assign(Object.assign({}, cJ), {
                  authToken: {
                    requestStatus: 0
                  }
                });
                await lJ(JJ.appConfig, ZJ)
              } else await Jc(JJ.appConfig);
              throw ZJ
            }
          }(JJ, ZJ), ZJ
        }
      }));
      return cJ ? await cJ : FJ.authToken
    }

    function qc(JJ) {
      return cc(JJ, (JJ => {
        if (!jc(JJ)) throw wJ.create("not-registered");
        const cJ = JJ.authToken;
        return 1 === (ZJ = cJ).requestStatus && ZJ.requestTime + yJ < Date.now() ? Object.assign(Object.assign({}, JJ), {
          authToken: {
            requestStatus: 0
          }
        }) : JJ;
        var ZJ
      }))
    }

    function jc(JJ) {
      return void 0 !== JJ && 2 === JJ.registrationStatus
    }
    async function Yc(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const ZJ = JJ;
      await async function(JJ) {
        const {
          registrationPromise: cJ
        } = await Zc(JJ);
        cJ && await cJ
      }(ZJ);
      return (await Ac(ZJ, cJ)).token
    }

    function hc(JJ) {
      return wJ.create("missing-app-config-values", {
        valueName: JJ
      })
    }
    const Dc = "installations",
      sc = JJ => {
        const cJ = JJ.getProvider("app").getImmediate(),
          ZJ = function(JJ) {
            if (!JJ || !JJ.options) throw hc("App Configuration");
            if (!JJ.name) throw hc("App Name");
            const cJ = ["projectId", "apiKey", "appId"];
            for (const ZJ of cJ)
              if (!JJ.options[ZJ]) throw hc(ZJ);
            return {
              appName: JJ.name,
              projectId: JJ.options.projectId,
              apiKey: JJ.options.apiKey,
              appId: JJ.options.appId
            }
          }(cJ);
        return {
          app: cJ,
          appConfig: ZJ,
          heartbeatServiceProvider: (0, FJ.A)(cJ, "heartbeat"),
          _delete: () => Promise.resolve()
        }
      },
      nc = JJ => {
        const cJ = JJ.getProvider("app").getImmediate(),
          ZJ = (0, FJ.A)(cJ, Dc).getImmediate();
        return {
          getId: () => async function(JJ) {
            const cJ = JJ,
              {
                installationEntry: ZJ,
                registrationPromise: FJ
              } = await Zc(cJ);
            return FJ ? FJ.catch(console.error) : Ac(cJ).catch(console.error), ZJ.fid
          }(ZJ),
          getToken: JJ => Yc(ZJ, JJ)
        }
      };
    (0, FJ.C)(new XJ.c(Dc, sc, "PUBLIC")), (0, FJ.C)(new XJ.c("installations-internal", nc, "PRIVATE")), (0, FJ.U)(VJ, KJ), (0, FJ.U)(VJ, KJ, "esm2017");
    const Gc = "analytics",
      fc = "https://www.googletagmanager.com/gtag/js",
      xc = new UJ.e("@firebase/analytics"),
      rc = {
        "already-exists": "A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",
        "already-initialized": "initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",
        "already-initialized-settings": "Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",
        "interop-component-reg-failed": "Firebase Analytics Interop Component failed to instantiate: {$reason}",
        "invalid-analytics-context": "Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
        "indexeddb-unavailable": "IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
        "fetch-throttle": "The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",
        "config-fetch-failed": "Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",
        "no-api-key": 'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',
        "no-app-id": 'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',
        "no-client-id": 'The "client_id" field is empty.',
        "invalid-gtag-resource": "Trusted Types detected an invalid gtag resource: {$gtagURL}."
      },
      vc = new eJ.d("analytics", "Analytics", rc);

    function mc(JJ) {
      if (!JJ.startsWith(fc)) {
        const cJ = vc.create("invalid-gtag-resource", {
          gtagURL: JJ
        });
        return xc.warn(cJ.message), ""
      }
      return JJ
    }

    function Qc(JJ) {
      return Promise.all(JJ.map((JJ => JJ.catch((JJ => JJ)))))
    }

    function Ec(JJ, cJ) {
      const ZJ = function(JJ, cJ) {
          let ZJ;
          return window.trustedTypes && (ZJ = window.trustedTypes.createPolicy(JJ, cJ)), ZJ
        }("firebase-js-sdk-policy", {
          createScriptURL: mc
        }),
        FJ = document.createElement("script"),
        UJ = `${fc}?l=${JJ}&id=${cJ}`;
      FJ.src = ZJ ? null === ZJ || void 0 === ZJ ? void 0 : ZJ.createScriptURL(UJ) : UJ, FJ.async = !0, document.head.appendChild(FJ)
    }

    function Vc(JJ, cJ, ZJ, FJ) {
      return async function(UJ) {
        try {
          for (var eJ = arguments.length, XJ = new Array(eJ > 1 ? eJ - 1 : 0), AJ = 1; AJ < eJ; AJ++) XJ[AJ - 1] = arguments[AJ];
          if ("event" === UJ) {
            const [FJ, UJ] = XJ;
            await async function(JJ, cJ, ZJ, FJ, UJ) {
              try {
                let eJ = [];
                if (UJ && UJ.send_to) {
                  let JJ = UJ.send_to;
                  Array.isArray(JJ) || (JJ = [JJ]);
                  const FJ = await Qc(ZJ);
                  for (const ZJ of JJ) {
                    const JJ = FJ.find((JJ => JJ.measurementId === ZJ)),
                      UJ = JJ && cJ[JJ.appId];
                    if (!UJ) {
                      eJ = [];
                      break
                    }
                    eJ.push(UJ)
                  }
                }
                0 === eJ.length && (eJ = Object.values(cJ)), await Promise.all(eJ), JJ("event", FJ, UJ || {})
              } catch (eJ) {
                xc.error(eJ)
              }
            }(JJ, cJ, ZJ, FJ, UJ)
          } else if ("config" === UJ) {
            const [UJ, eJ] = XJ;
            await async function(JJ, cJ, ZJ, FJ, UJ, eJ) {
              const XJ = FJ[UJ];
              try {
                if (XJ) await cJ[XJ];
                else {
                  const JJ = (await Qc(ZJ)).find((JJ => JJ.measurementId === UJ));
                  JJ && await cJ[JJ.appId]
                }
              } catch (AJ) {
                xc.error(AJ)
              }
              JJ("config", UJ, eJ)
            }(JJ, cJ, ZJ, FJ, UJ, eJ)
          } else if ("consent" === UJ) {
            const [cJ] = XJ;
            JJ("consent", "update", cJ)
          } else if ("get" === UJ) {
            const [cJ, ZJ, FJ] = XJ;
            JJ("get", cJ, ZJ, FJ)
          } else if ("set" === UJ) {
            const [cJ] = XJ;
            JJ("set", cJ)
          } else JJ(UJ, ...XJ)
        } catch (qJ) {
          xc.error(qJ)
        }
      }
    }
    const Kc = new class {
      constructor() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
        this.throttleMetadata = JJ, this.intervalMillis = cJ
      }
      getThrottleMetadata(JJ) {
        return this.throttleMetadata[JJ]
      }
      setThrottleMetadata(JJ, cJ) {
        this.throttleMetadata[JJ] = cJ
      }
      deleteThrottleMetadata(JJ) {
        delete this.throttleMetadata[JJ]
      }
    };

    function yc(JJ) {
      return new Headers({
        Accept: "application/json",
        "x-goog-api-key": JJ
      })
    }
    async function Sc(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Kc,
        ZJ = arguments.length > 2 ? arguments[2] : void 0;
      const {
        appId: FJ,
        apiKey: UJ,
        measurementId: eJ
      } = JJ.options;
      if (!FJ) throw vc.create("no-app-id");
      if (!UJ) {
        if (eJ) return {
          measurementId: eJ,
          appId: FJ
        };
        throw vc.create("no-api-key")
      }
      const XJ = cJ.getThrottleMetadata(FJ) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        },
        AJ = new Mc;
      return setTimeout((async () => {
        AJ.abort()
      }), void 0 !== ZJ ? ZJ : 6e4), Ic({
        appId: FJ,
        apiKey: UJ,
        measurementId: eJ
      }, XJ, AJ, cJ)
    }
    async function Ic(JJ, cJ, ZJ) {
      let {
        throttleEndTimeMillis: FJ,
        backoffCount: UJ
      } = cJ, XJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Kc;
      var AJ;
      const {
        appId: qJ,
        measurementId: jJ
      } = JJ;
      try {
        await
        function(JJ, cJ) {
          return new Promise(((ZJ, FJ) => {
            const UJ = Math.max(cJ - Date.now(), 0),
              eJ = setTimeout(ZJ, UJ);
            JJ.addEventListener((() => {
              clearTimeout(eJ), FJ(vc.create("fetch-throttle", {
                throttleEndTimeMillis: cJ
              }))
            }))
          }))
        }(ZJ, FJ)
      } catch (YJ) {
        if (jJ) return xc.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${jJ} provided in the "measurementId" field in the local Firebase config. [${null===YJ||void 0===YJ?void 0:YJ.message}]`), {
          appId: qJ,
          measurementId: jJ
        };
        throw YJ
      }
      try {
        const cJ = await async function(JJ) {
          var cJ;
          const {
            appId: ZJ,
            apiKey: FJ
          } = JJ, UJ = {
            method: "GET",
            headers: yc(FJ)
          }, eJ = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", ZJ), XJ = await fetch(eJ, UJ);
          if (200 !== XJ.status && 304 !== XJ.status) {
            let JJ = "";
            try {
              const ZJ = await XJ.json();
              (null === (cJ = ZJ.error) || void 0 === cJ ? void 0 : cJ.message) && (JJ = ZJ.error.message)
            } catch (AJ) {}
            throw vc.create("config-fetch-failed", {
              httpStatus: XJ.status,
              responseMessage: JJ
            })
          }
          return XJ.json()
        }(JJ);
        return XJ.deleteThrottleMetadata(qJ), cJ
      } catch (YJ) {
        const cJ = YJ;
        if (! function(JJ) {
            if (!(JJ instanceof eJ.h) || !JJ.customData) return !1;
            const cJ = Number(JJ.customData.httpStatus);
            return 429 === cJ || 500 === cJ || 503 === cJ || 504 === cJ
          }(cJ)) {
          if (XJ.deleteThrottleMetadata(qJ), jJ) return xc.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${jJ} provided in the "measurementId" field in the local Firebase config. [${null===cJ||void 0===cJ?void 0:cJ.message}]`), {
            appId: qJ,
            measurementId: jJ
          };
          throw YJ
        }
        const FJ = 503 === Number(null === (AJ = null === cJ || void 0 === cJ ? void 0 : cJ.customData) || void 0 === AJ ? void 0 : AJ.httpStatus) ? (0, eJ.p)(UJ, XJ.intervalMillis, 30) : (0, eJ.p)(UJ, XJ.intervalMillis),
          hJ = {
            throttleEndTimeMillis: Date.now() + FJ,
            backoffCount: UJ + 1
          };
        return XJ.setThrottleMetadata(qJ, hJ), xc.debug(`Calling attemptFetch again in ${FJ} millis`), Ic(JJ, hJ, ZJ, XJ)
      }
    }
    class Mc {
      constructor() {
        this.listeners = []
      }
      addEventListener(JJ) {
        this.listeners.push(JJ)
      }
      abort() {
        this.listeners.forEach((JJ => JJ()))
      }
    }
    let bc, wc;

    function Wc(JJ) {
      wc = JJ
    }

    function gc(JJ) {
      bc = JJ
    }
    async function Hc(JJ, cJ, ZJ, FJ, UJ, XJ, AJ) {
      var qJ;
      const jJ = Sc(JJ);
      jJ.then((cJ => {
        ZJ[cJ.measurementId] = cJ.appId, JJ.options.measurementId && cJ.measurementId !== JJ.options.measurementId && xc.warn(`The measurement ID in the local Firebase config (${JJ.options.measurementId}) does not match the measurement ID fetched from the server (${cJ.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
      })).catch((JJ => xc.error(JJ))), cJ.push(jJ);
      const YJ = async function() {
        if (!(0, eJ.M)()) return xc.warn(vc.create("indexeddb-unavailable", {
          errorInfo: "IndexedDB is not available in this environment."
        }).message), !1;
        try {
          await (0, eJ._)()
        } catch (JJ) {
          return xc.warn(vc.create("indexeddb-unavailable", {
            errorInfo: null === JJ || void 0 === JJ ? void 0 : JJ.toString()
          }).message), !1
        }
        return !0
      }().then((JJ => JJ ? FJ.getId() : void 0)), [hJ, DJ] = await Promise.all([jJ, YJ]);
      (function(JJ) {
        const cJ = window.document.getElementsByTagName("script");
        for (const ZJ of Object.values(cJ))
          if (ZJ.src && ZJ.src.includes(fc) && ZJ.src.includes(JJ)) return ZJ;
        return null
      })(XJ) || Ec(XJ, hJ.measurementId), wc && (UJ("consent", "default", wc), Wc(void 0)), UJ("js", new Date);
      const sJ = null !== (qJ = null === AJ || void 0 === AJ ? void 0 : AJ.config) && void 0 !== qJ ? qJ : {};
      return sJ.origin = "firebase", sJ.update = !0, null != DJ && (sJ.firebase_id = DJ), UJ("config", hJ.measurementId, sJ), bc && (UJ("set", bc), gc(void 0)), hJ.measurementId
    }
    class Pc {
      constructor(JJ) {
        this.app = JJ
      }
      _delete() {
        return delete kc[this.app.options.appId], Promise.resolve()
      }
    }
    let kc = {},
      pc = [];
    const dc = {};
    let zc, Nc, Oc = "dataLayer",
      Tc = "gtag",
      Cc = !1;

    function uc(JJ) {
      if (Cc) throw vc.create("already-initialized");
      JJ.dataLayerName && (Oc = JJ.dataLayerName), JJ.gtagName && (Tc = JJ.gtagName)
    }

    function ic(JJ, cJ, ZJ) {
      ! function() {
        const JJ = [];
        if ((0, eJ.H)() && JJ.push("This is a browser extension environment."), (0, eJ.i)() || JJ.push("Cookies are not available."), JJ.length > 0) {
          const cJ = JJ.map(((JJ, cJ) => `(${cJ+1}) ${JJ}`)).join(" "),
            ZJ = vc.create("invalid-analytics-context", {
              errorInfo: cJ
            });
          xc.warn(ZJ.message)
        }
      }();
      const FJ = JJ.options.appId;
      if (!FJ) throw vc.create("no-app-id");
      if (!JJ.options.apiKey) {
        if (!JJ.options.measurementId) throw vc.create("no-api-key");
        xc.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${JJ.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
      }
      if (null != kc[FJ]) throw vc.create("already-exists", {
        id: FJ
      });
      if (!Cc) {
        ! function(JJ) {
          let cJ = [];
          Array.isArray(window[JJ]) ? cJ = window[JJ] : window[JJ] = cJ
        }(Oc);
        const {
          wrappedGtag: JJ,
          gtagCore: cJ
        } = function(JJ, cJ, ZJ, FJ, UJ) {
          let eJ = function() {
            for (var JJ = arguments.length, cJ = new Array(JJ), ZJ = 0; ZJ < JJ; ZJ++) cJ[ZJ] = arguments[ZJ];
            window[FJ].push(arguments)
          };
          return window[UJ] && "function" === typeof window[UJ] && (eJ = window[UJ]), window[UJ] = Vc(eJ, JJ, cJ, ZJ), {
            gtagCore: eJ,
            wrappedGtag: window[UJ]
          }
        }(kc, pc, dc, Oc, Tc);
        Nc = JJ, zc = cJ, Cc = !0
      }
      kc[FJ] = Hc(JJ, pc, dc, cJ, zc, Oc, ZJ);
      return new Pc(JJ)
    }

    function Rc() {
      let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, FJ.M)();
      JJ = (0, eJ.D)(JJ);
      const cJ = (0, FJ.A)(JJ, Gc);
      return cJ.isInitialized() ? cJ.getImmediate() : Lc(JJ)
    }

    function Lc(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const ZJ = (0, FJ.A)(JJ, Gc);
      if (ZJ.isInitialized()) {
        const JJ = ZJ.getImmediate();
        if ((0, eJ.r)(cJ, ZJ.getOptions())) return JJ;
        throw vc.create("already-initialized")
      }
      return ZJ.initialize({
        options: cJ
      })
    }
    async function ac() {
      if ((0, eJ.H)()) return !1;
      if (!(0, eJ.i)()) return !1;
      if (!(0, eJ.M)()) return !1;
      try {
        return await (0, eJ._)()
      } catch (JJ) {
        return !1
      }
    }

    function Bc(JJ, cJ, ZJ) {
      JJ = (0, eJ.D)(JJ), async function(JJ, cJ, ZJ, FJ) {
        if (FJ && FJ.global) return JJ("set", {
          screen_name: ZJ
        }), Promise.resolve();
        JJ("config", await cJ, {
          update: !0,
          screen_name: ZJ
        })
      }(Nc, kc[JJ.app.options.appId], cJ, ZJ).catch((JJ => xc.error(JJ)))
    }
    async function tc(JJ) {
      return JJ = (0, eJ.D)(JJ), async function(JJ, cJ) {
        const ZJ = await cJ;
        return new Promise(((cJ, FJ) => {
          JJ("get", ZJ, "client_id", (JJ => {
            JJ || FJ(vc.create("no-client-id")), cJ(JJ)
          }))
        }))
      }(Nc, kc[JJ.app.options.appId])
    }

    function oc(JJ, cJ, ZJ) {
      JJ = (0, eJ.D)(JJ), async function(JJ, cJ, ZJ, FJ) {
        if (FJ && FJ.global) return JJ("set", {
          user_id: ZJ
        }), Promise.resolve();
        JJ("config", await cJ, {
          update: !0,
          user_id: ZJ
        })
      }(Nc, kc[JJ.app.options.appId], cJ, ZJ).catch((JJ => xc.error(JJ)))
    }

    function lc(JJ, cJ, ZJ) {
      JJ = (0, eJ.D)(JJ), async function(JJ, cJ, ZJ, FJ) {
        if (FJ && FJ.global) {
          const cJ = {};
          for (const JJ of Object.keys(ZJ)) cJ[`user_properties.${JJ}`] = ZJ[JJ];
          return JJ("set", cJ), Promise.resolve()
        }
        JJ("config", await cJ, {
          update: !0,
          user_properties: ZJ
        })
      }(Nc, kc[JJ.app.options.appId], cJ, ZJ).catch((JJ => xc.error(JJ)))
    }

    function JZ(JJ, cJ) {
      JJ = (0, eJ.D)(JJ), async function(JJ, cJ) {
        const ZJ = await JJ;
        window[`ga-disable-${ZJ}`] = !cJ
      }(kc[JJ.app.options.appId], cJ).catch((JJ => xc.error(JJ)))
    }

    function cZ(JJ) {
      Nc ? Nc("set", JJ) : gc(JJ)
    }

    function ZZ(JJ, cJ, ZJ, FJ) {
      JJ = (0, eJ.D)(JJ), async function(JJ, cJ, ZJ, FJ, UJ) {
        if (UJ && UJ.global) JJ("event", ZJ, FJ);
        else {
          const UJ = await cJ;
          JJ("event", ZJ, Object.assign(Object.assign({}, FJ), {
            send_to: UJ
          }))
        }
      }(Nc, kc[JJ.app.options.appId], cJ, ZJ, FJ).catch((JJ => xc.error(JJ)))
    }

    function FZ(JJ) {
      Nc ? Nc("consent", "update", JJ) : Wc(JJ)
    }
    const UZ = "@firebase/analytics",
      eZ = "0.10.0";
    (0, FJ.C)(new XJ.c(Gc, ((JJ, cJ) => {
      let {
        options: ZJ
      } = cJ;
      return ic(JJ.getProvider("app").getImmediate(), JJ.getProvider("installations-internal").getImmediate(), ZJ)
    }), "PUBLIC")), (0, FJ.C)(new XJ.c("analytics-internal", (function(JJ) {
      try {
        const cJ = JJ.getProvider(Gc).getImmediate();
        return {
          logEvent: (JJ, ZJ, FJ) => ZZ(cJ, JJ, ZJ, FJ)
        }
      } catch (cJ) {
        throw vc.create("interop-component-reg-failed", {
          reason: cJ
        })
      }
    }), "PRIVATE")), (0, FJ.U)(UZ, eZ), (0, FJ.U)(UZ, eZ, "esm2017")
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);