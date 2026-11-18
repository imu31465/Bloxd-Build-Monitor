/*! For license information please see l9xvfg.247.9e5fa589.chunk.js.LICENSE.txt */
export const id = 247;
export const ids = [247];
export const modules = {
  39264: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      getAnalytics: () => qT,
      getGoogleAnalyticsClientId: () => bT,
      initializeAnalytics: () => xT,
      isSupported: () => jT,
      logEvent: () => dd,
      setAnalyticsCollectionEnabled: () => Bd,
      setConsent: () => Vd,
      setCurrentScreen: () => AT,
      setDefaultEventParameters: () => Td,
      setUserId: () => nT,
      setUserProperties: () => eT,
      settings: () => CT
    });
    var VB = dB(39248),
      yB = dB(39258),
      pB = dB(39255),
      lB = dB(39253);
    let JB, YB;
    const gB = new WeakMap,
      oB = new WeakMap,
      kB = new WeakMap,
      LB = new WeakMap,
      OB = new WeakMap;
    let DB = {
      get(BB, TB, dB) {
        if (BB instanceof IDBTransaction) {
          if ("done" === TB) return oB.get(BB);
          if ("objectStoreNames" === TB) return BB.objectStoreNames || kB.get(BB);
          if ("store" === TB) return dB.objectStoreNames[1] ? void 0 : dB.objectStore(dB.objectStoreNames[0])
        }
        return EB(BB[TB])
      },
      set: (BB, TB, dB) => (BB[TB] = dB, !0),
      has: (BB, TB) => BB instanceof IDBTransaction && ("done" === TB || "store" === TB) || TB in BB
    };

    function uB(BB) {
      return BB !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (YB || (YB = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(BB) ? function() {
        for (var TB = arguments.length, dB = new Array(TB), VB = 0; VB < TB; VB++) dB[VB] = arguments[VB];
        return BB.apply(vB(this), dB), EB(gB.get(this))
      } : function() {
        for (var TB = arguments.length, dB = new Array(TB), VB = 0; VB < TB; VB++) dB[VB] = arguments[VB];
        return EB(BB.apply(vB(this), dB))
      } : function(TB) {
        for (var dB = arguments.length, VB = new Array(dB > 1 ? dB - 1 : 0), yB = 1; yB < dB; yB++) VB[yB - 1] = arguments[yB];
        const pB = BB.call(vB(this), TB, ...VB);
        return kB.set(pB, TB.sort ? TB.sort() : [TB]), EB(pB)
      }
    }

    function HB(BB) {
      return "function" === typeof BB ? uB(BB) : (BB instanceof IDBTransaction && function(BB) {
        if (oB.has(BB)) return;
        const TB = new Promise(((TB, dB) => {
          const VB = () => {
              BB.removeEventListener("complete", yB), BB.removeEventListener("error", pB), BB.removeEventListener("abort", pB)
            },
            yB = () => {
              TB(), VB()
            },
            pB = () => {
              dB(BB.error || new DOMException("AbortError", "AbortError")), VB()
            };
          BB.addEventListener("complete", yB), BB.addEventListener("error", pB), BB.addEventListener("abort", pB)
        }));
        oB.set(BB, TB)
      }(BB), TB = BB, (JB || (JB = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((BB => TB instanceof BB)) ? new Proxy(BB, DB) : BB);
      var TB
    }

    function EB(BB) {
      if (BB instanceof IDBRequest) return function(BB) {
        const TB = new Promise(((TB, dB) => {
          const VB = () => {
              BB.removeEventListener("success", yB), BB.removeEventListener("error", pB)
            },
            yB = () => {
              TB(EB(BB.result)), VB()
            },
            pB = () => {
              dB(BB.error), VB()
            };
          BB.addEventListener("success", yB), BB.addEventListener("error", pB)
        }));
        return TB.then((TB => {
          TB instanceof IDBCursor && gB.set(TB, BB)
        })).catch((() => {})), OB.set(TB, BB), TB
      }(BB);
      if (LB.has(BB)) return LB.get(BB);
      const TB = HB(BB);
      return TB !== BB && (LB.set(BB, TB), OB.set(TB, BB)), TB
    }
    const vB = BB => OB.get(BB);
    const mB = ["get", "getKey", "getAll", "getAllKeys", "count"],
      iB = ["put", "add", "delete", "clear"],
      NB = new Map;

    function tB(BB, TB) {
      if (!(BB instanceof IDBDatabase) || TB in BB || "string" !== typeof TB) return;
      if (NB.get(TB)) return NB.get(TB);
      const dB = TB.replace(/FromIndex$/, ""),
        VB = TB !== dB,
        yB = iB.includes(dB);
      if (!(dB in (VB ? IDBIndex : IDBObjectStore).prototype) || !yB && !mB.includes(dB)) return;
      const pB = async function(BB) {
        const TB = this.transaction(BB, yB ? "readwrite" : "readonly");
        let pB = TB.store;
        for (var lB = arguments.length, JB = new Array(lB > 1 ? lB - 1 : 0), YB = 1; YB < lB; YB++) JB[YB - 1] = arguments[YB];
        return VB && (pB = pB.index(JB.shift())), (await Promise.all([pB[dB](...JB), yB && TB.done]))[0]
      };
      return NB.set(TB, pB), pB
    }
    DB = (BB => ({
      ...BB,
      get: (TB, dB, VB) => tB(TB, dB) || BB.get(TB, dB, VB),
      has: (TB, dB) => !!tB(TB, dB) || BB.has(TB, dB)
    }))(DB);
    const fB = "@firebase/installations",
      sB = "0.6.4",
      MB = 1e4,
      zB = `w:${sB}`,
      wB = "FIS_v2",
      UB = 36e5,
      FB = {
        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
        "not-registered": "Firebase Installation is not registered.",
        "installation-not-found": "Firebase Installation not found.",
        "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        "app-offline": "Could not process request. Application offline.",
        "delete-pending-registration": "Can't delete installation while there is a pending registration request."
      },
      KB = new pB.e("installations", "Installations", FB);

    function rB(BB) {
      return BB instanceof pB.g && BB.code.includes("request-failed")
    }

    function IB(BB) {
      let {
        projectId: TB
      } = BB;
      return `https://firebaseinstallations.googleapis.com/v1/projects/${TB}/installations`
    }

    function cB(BB) {
      return {
        token: BB.token,
        requestStatus: 2,
        expiresIn: (TB = BB.expiresIn, Number(TB.replace("s", "000"))),
        creationTime: Date.now()
      };
      var TB
    }
    async function SB(BB, TB) {
      const dB = (await TB.json()).error;
      return KB.create("request-failed", {
        requestName: BB,
        serverCode: dB.code,
        serverMessage: dB.message,
        serverStatus: dB.status
      })
    }

    function PB(BB) {
      let {
        apiKey: TB
      } = BB;
      return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": TB
      })
    }

    function QB(BB, TB) {
      let {
        refreshToken: dB
      } = TB;
      const VB = PB(BB);
      return VB.append("Authorization", function(BB) {
        return `${wB} ${BB}`
      }(dB)), VB
    }
    async function RB(BB) {
      const TB = await BB();
      return TB.status >= 500 && TB.status < 600 ? BB() : TB
    }

    function aB(BB) {
      return new Promise((TB => {
        setTimeout(TB, BB)
      }))
    }
    const ZB = /^[cdef][\w-]{21}$/;

    function XB() {
      try {
        const BB = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(BB), BB[0] = 112 + BB[0] % 16;
        const TB = function(BB) {
          const TB = (dB = BB, btoa(String.fromCharCode(...dB)).replace(/\+/g, "-").replace(/\//g, "_"));
          var dB;
          return TB.substr(0, 22)
        }(BB);
        return ZB.test(TB) ? TB : ""
      } catch (BB) {
        return ""
      }
    }

    function WB(BB) {
      return `${BB.appName}!${BB.appId}`
    }
    const hB = new Map;

    function CB(BB, TB) {
      const dB = WB(BB);
      GB(dB, TB),
        function(BB, TB) {
          const dB = xB();
          dB && dB.postMessage({
            key: BB,
            fid: TB
          });
          jB()
        }(dB, TB)
    }

    function GB(BB, TB) {
      const dB = hB.get(BB);
      if (dB)
        for (const VB of dB) VB(TB)
    }
    let qB = null;

    function xB() {
      return !qB && "BroadcastChannel" in self && (qB = new BroadcastChannel("[Firebase] FID Change"), qB.onmessage = BB => {
        GB(BB.data.key, BB.data.fid)
      }), qB
    }

    function jB() {
      0 === hB.size && qB && (qB.close(), qB = null)
    }
    const AB = "firebase-installations-store";
    let bB = null;

    function nB() {
      return bB || (bB = function(BB, TB) {
        let {
          blocked: dB,
          upgrade: VB,
          blocking: yB,
          terminated: pB
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const lB = indexedDB.open(BB, TB),
          JB = EB(lB);
        return VB && lB.addEventListener("upgradeneeded", (BB => {
          VB(EB(lB.result), BB.oldVersion, BB.newVersion, EB(lB.transaction))
        })), dB && lB.addEventListener("blocked", (() => dB())), JB.then((BB => {
          pB && BB.addEventListener("close", (() => pB())), yB && BB.addEventListener("versionchange", (() => yB()))
        })).catch((() => {})), JB
      }("firebase-installations-database", 1, {
        upgrade: (BB, TB) => {
          if (0 === TB) BB.createObjectStore(AB)
        }
      })), bB
    }
    async function eB(BB, TB) {
      const dB = WB(BB),
        VB = (await nB()).transaction(AB, "readwrite"),
        yB = VB.objectStore(AB),
        pB = await yB.get(dB);
      return await yB.put(TB, dB), await VB.done, pB && pB.fid === TB.fid || CB(BB, TB.fid), TB
    }
    async function BT(BB) {
      const TB = WB(BB),
        dB = (await nB()).transaction(AB, "readwrite");
      await dB.objectStore(AB).delete(TB), await dB.done
    }
    async function TT(BB, TB) {
      const dB = WB(BB),
        VB = (await nB()).transaction(AB, "readwrite"),
        yB = VB.objectStore(AB),
        pB = await yB.get(dB),
        lB = TB(pB);
      return void 0 === lB ? await yB.delete(dB) : await yB.put(lB, dB), await VB.done, !lB || pB && pB.fid === lB.fid || CB(BB, lB.fid), lB
    }
    async function dT(BB) {
      let TB;
      const dB = await TT(BB.appConfig, (dB => {
        const VB = function(BB) {
            const TB = BB || {
              fid: XB(),
              registrationStatus: 0
            };
            return pT(TB)
          }(dB),
          yB = function(BB, TB) {
            if (0 === TB.registrationStatus) {
              if (!navigator.onLine) {
                return {
                  installationEntry: TB,
                  registrationPromise: Promise.reject(KB.create("app-offline"))
                }
              }
              const dB = {
                  fid: TB.fid,
                  registrationStatus: 1,
                  registrationTime: Date.now()
                },
                VB = async function(BB, TB) {
                  try {
                    const dB = await async function(BB, TB) {
                      let {
                        appConfig: dB,
                        heartbeatServiceProvider: VB
                      } = BB, {
                        fid: yB
                      } = TB;
                      const pB = IB(dB),
                        lB = PB(dB),
                        JB = VB.getImmediate({
                          optional: !0
                        });
                      if (JB) {
                        const BB = await JB.getHeartbeatsHeader();
                        BB && lB.append("x-firebase-client", BB)
                      }
                      const YB = {
                          fid: yB,
                          authVersion: wB,
                          appId: dB.appId,
                          sdkVersion: zB
                        },
                        gB = {
                          method: "POST",
                          headers: lB,
                          body: JSON.stringify(YB)
                        },
                        oB = await RB((() => fetch(pB, gB)));
                      if (oB.ok) {
                        const BB = await oB.json();
                        return {
                          fid: BB.fid || yB,
                          registrationStatus: 2,
                          refreshToken: BB.refreshToken,
                          authToken: cB(BB.authToken)
                        }
                      }
                      throw await SB("Create Installation", oB)
                    }(BB, TB);
                    return eB(BB.appConfig, dB)
                  } catch (dB) {
                    throw rB(dB) && 409 === dB.customData.serverCode ? await BT(BB.appConfig) : await eB(BB.appConfig, {
                      fid: TB.fid,
                      registrationStatus: 0
                    }), dB
                  }
                }(BB, dB);
              return {
                installationEntry: dB,
                registrationPromise: VB
              }
            }
            return 1 === TB.registrationStatus ? {
              installationEntry: TB,
              registrationPromise: VT(BB)
            } : {
              installationEntry: TB
            }
          }(BB, VB);
        return TB = yB.registrationPromise, yB.installationEntry
      }));
      return "" === dB.fid ? {
        installationEntry: await TB
      } : {
        installationEntry: dB,
        registrationPromise: TB
      }
    }
    async function VT(BB) {
      let TB = await yT(BB.appConfig);
      for (; 1 === TB.registrationStatus;) await aB(100), TB = await yT(BB.appConfig);
      if (0 === TB.registrationStatus) {
        const {
          installationEntry: TB,
          registrationPromise: dB
        } = await dT(BB);
        return dB || TB
      }
      return TB
    }

    function yT(BB) {
      return TT(BB, (BB => {
        if (!BB) throw KB.create("installation-not-found");
        return pT(BB)
      }))
    }

    function pT(BB) {
      return 1 === (TB = BB).registrationStatus && TB.registrationTime + MB < Date.now() ? {
        fid: BB.fid,
        registrationStatus: 0
      } : BB;
      var TB
    }
    async function lT(BB, TB) {
      let {
        appConfig: dB,
        heartbeatServiceProvider: VB
      } = BB;
      const yB = function(BB, TB) {
          let {
            fid: dB
          } = TB;
          return `${IB(BB)}/${dB}/authTokens:generate`
        }(dB, TB),
        pB = QB(dB, TB),
        lB = VB.getImmediate({
          optional: !0
        });
      if (lB) {
        const BB = await lB.getHeartbeatsHeader();
        BB && pB.append("x-firebase-client", BB)
      }
      const JB = {
          installation: {
            sdkVersion: zB,
            appId: dB.appId
          }
        },
        YB = {
          method: "POST",
          headers: pB,
          body: JSON.stringify(JB)
        },
        gB = await RB((() => fetch(yB, YB)));
      if (gB.ok) {
        return cB(await gB.json())
      }
      throw await SB("Generate Auth Token", gB)
    }
    async function JT(BB) {
      let TB, dB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const VB = await TT(BB.appConfig, (VB => {
        if (!gT(VB)) throw KB.create("not-registered");
        const yB = VB.authToken;
        if (!dB && function(BB) {
            return 2 === BB.requestStatus && ! function(BB) {
              const TB = Date.now();
              return TB < BB.creationTime || BB.creationTime + BB.expiresIn < TB + UB
            }(BB)
          }(yB)) return VB;
        if (1 === yB.requestStatus) return TB = async function(BB, TB) {
          let dB = await YT(BB.appConfig);
          for (; 1 === dB.authToken.requestStatus;) await aB(100), dB = await YT(BB.appConfig);
          const VB = dB.authToken;
          return 0 === VB.requestStatus ? JT(BB, TB) : VB
        }(BB, dB), VB;
        {
          if (!navigator.onLine) throw KB.create("app-offline");
          const dB = function(BB) {
            const TB = {
              requestStatus: 1,
              requestTime: Date.now()
            };
            return Object.assign(Object.assign({}, BB), {
              authToken: TB
            })
          }(VB);
          return TB = async function(BB, TB) {
            try {
              const dB = await lT(BB, TB),
                VB = Object.assign(Object.assign({}, TB), {
                  authToken: dB
                });
              return await eB(BB.appConfig, VB), dB
            } catch (dB) {
              if (!rB(dB) || 401 !== dB.customData.serverCode && 404 !== dB.customData.serverCode) {
                const dB = Object.assign(Object.assign({}, TB), {
                  authToken: {
                    requestStatus: 0
                  }
                });
                await eB(BB.appConfig, dB)
              } else await BT(BB.appConfig);
              throw dB
            }
          }(BB, dB), dB
        }
      }));
      return TB ? await TB : VB.authToken
    }

    function YT(BB) {
      return TT(BB, (BB => {
        if (!gT(BB)) throw KB.create("not-registered");
        const TB = BB.authToken;
        return 1 === (dB = TB).requestStatus && dB.requestTime + MB < Date.now() ? Object.assign(Object.assign({}, BB), {
          authToken: {
            requestStatus: 0
          }
        }) : BB;
        var dB
      }))
    }

    function gT(BB) {
      return void 0 !== BB && 2 === BB.registrationStatus
    }
    async function oT(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const dB = BB;
      await async function(BB) {
        const {
          registrationPromise: TB
        } = await dT(BB);
        TB && await TB
      }(dB);
      return (await JT(dB, TB)).token
    }

    function kT(BB) {
      return KB.create("missing-app-config-values", {
        valueName: BB
      })
    }
    const LT = "installations",
      OT = BB => {
        const TB = BB.getProvider("app").getImmediate(),
          dB = function(BB) {
            if (!BB || !BB.options) throw kT("App Configuration");
            if (!BB.name) throw kT("App Name");
            const TB = ["projectId", "apiKey", "appId"];
            for (const dB of TB)
              if (!BB.options[dB]) throw kT(dB);
            return {
              appName: BB.name,
              projectId: BB.options.projectId,
              apiKey: BB.options.apiKey,
              appId: BB.options.appId
            }
          }(TB);
        return {
          app: TB,
          appConfig: dB,
          heartbeatServiceProvider: (0, VB.y)(TB, "heartbeat"),
          _delete: () => Promise.resolve()
        }
      },
      DT = BB => {
        const TB = BB.getProvider("app").getImmediate(),
          dB = (0, VB.y)(TB, LT).getImmediate();
        return {
          getId: () => async function(BB) {
            const TB = BB,
              {
                installationEntry: dB,
                registrationPromise: VB
              } = await dT(TB);
            return VB ? VB.catch(console.error) : JT(TB).catch(console.error), dB.fid
          }(dB),
          getToken: BB => oT(dB, BB)
        }
      };
    (0, VB.A)(new lB.c(LT, OT, "PUBLIC")), (0, VB.A)(new lB.c("installations-internal", DT, "PRIVATE")), (0, VB.R)(fB, sB), (0, VB.R)(fB, sB, "esm2017");
    const uT = "analytics",
      HT = "https://www.googletagmanager.com/gtag/js",
      ET = new yB.h("@firebase/analytics"),
      vT = {
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
      mT = new pB.e("analytics", "Analytics", vT);

    function iT(BB) {
      if (!BB.startsWith(HT)) {
        const TB = mT.create("invalid-gtag-resource", {
          gtagURL: BB
        });
        return ET.warn(TB.message), ""
      }
      return BB
    }

    function NT(BB) {
      return Promise.all(BB.map((BB => BB.catch((BB => BB)))))
    }

    function tT(BB, TB) {
      const dB = function(BB, TB) {
          let dB;
          return window.trustedTypes && (dB = window.trustedTypes.createPolicy(BB, TB)), dB
        }("firebase-js-sdk-policy", {
          createScriptURL: iT
        }),
        VB = document.createElement("script"),
        yB = `${HT}?l=${BB}&id=${TB}`;
      VB.src = dB ? null === dB || void 0 === dB ? void 0 : dB.createScriptURL(yB) : yB, VB.async = !0, document.head.appendChild(VB)
    }

    function fT(BB, TB, dB, VB) {
      return async function(yB) {
        try {
          for (var pB = arguments.length, lB = new Array(pB > 1 ? pB - 1 : 0), JB = 1; JB < pB; JB++) lB[JB - 1] = arguments[JB];
          if ("event" === yB) {
            const [VB, yB] = lB;
            await async function(BB, TB, dB, VB, yB) {
              try {
                let pB = [];
                if (yB && yB.send_to) {
                  let BB = yB.send_to;
                  Array.isArray(BB) || (BB = [BB]);
                  const VB = await NT(dB);
                  for (const dB of BB) {
                    const BB = VB.find((BB => BB.measurementId === dB)),
                      yB = BB && TB[BB.appId];
                    if (!yB) {
                      pB = [];
                      break
                    }
                    pB.push(yB)
                  }
                }
                0 === pB.length && (pB = Object.values(TB)), await Promise.all(pB), BB("event", VB, yB || {})
              } catch (pB) {
                ET.error(pB)
              }
            }(BB, TB, dB, VB, yB)
          } else if ("config" === yB) {
            const [yB, pB] = lB;
            await async function(BB, TB, dB, VB, yB, pB) {
              const lB = VB[yB];
              try {
                if (lB) await TB[lB];
                else {
                  const BB = (await NT(dB)).find((BB => BB.measurementId === yB));
                  BB && await TB[BB.appId]
                }
              } catch (JB) {
                ET.error(JB)
              }
              BB("config", yB, pB)
            }(BB, TB, dB, VB, yB, pB)
          } else if ("consent" === yB) {
            const [TB] = lB;
            BB("consent", "update", TB)
          } else if ("get" === yB) {
            const [TB, dB, VB] = lB;
            BB("get", TB, dB, VB)
          } else if ("set" === yB) {
            const [TB] = lB;
            BB("set", TB)
          } else BB(yB, ...lB)
        } catch (YB) {
          ET.error(YB)
        }
      }
    }
    const sT = new class {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
        this.throttleMetadata = BB, this.intervalMillis = TB
      }
      getThrottleMetadata(BB) {
        return this.throttleMetadata[BB]
      }
      setThrottleMetadata(BB, TB) {
        this.throttleMetadata[BB] = TB
      }
      deleteThrottleMetadata(BB) {
        delete this.throttleMetadata[BB]
      }
    };

    function MT(BB) {
      return new Headers({
        Accept: "application/json",
        "x-goog-api-key": BB
      })
    }
    async function zT(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : sT,
        dB = arguments.length > 2 ? arguments[2] : void 0;
      const {
        appId: VB,
        apiKey: yB,
        measurementId: pB
      } = BB.options;
      if (!VB) throw mT.create("no-app-id");
      if (!yB) {
        if (pB) return {
          measurementId: pB,
          appId: VB
        };
        throw mT.create("no-api-key")
      }
      const lB = TB.getThrottleMetadata(VB) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        },
        JB = new UT;
      return setTimeout((async () => {
        JB.abort()
      }), void 0 !== dB ? dB : 6e4), wT({
        appId: VB,
        apiKey: yB,
        measurementId: pB
      }, lB, JB, TB)
    }
    async function wT(BB, TB, dB) {
      let {
        throttleEndTimeMillis: VB,
        backoffCount: yB
      } = TB, lB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : sT;
      var JB;
      const {
        appId: YB,
        measurementId: gB
      } = BB;
      try {
        await
        function(BB, TB) {
          return new Promise(((dB, VB) => {
            const yB = Math.max(TB - Date.now(), 0),
              pB = setTimeout(dB, yB);
            BB.addEventListener((() => {
              clearTimeout(pB), VB(mT.create("fetch-throttle", {
                throttleEndTimeMillis: TB
              }))
            }))
          }))
        }(dB, VB)
      } catch (oB) {
        if (gB) return ET.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${gB} provided in the "measurementId" field in the local Firebase config. [${null===oB||void 0===oB?void 0:oB.message}]`), {
          appId: YB,
          measurementId: gB
        };
        throw oB
      }
      try {
        const TB = await async function(BB) {
          var TB;
          const {
            appId: dB,
            apiKey: VB
          } = BB, yB = {
            method: "GET",
            headers: MT(VB)
          }, pB = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", dB), lB = await fetch(pB, yB);
          if (200 !== lB.status && 304 !== lB.status) {
            let BB = "";
            try {
              const dB = await lB.json();
              (null === (TB = dB.error) || void 0 === TB ? void 0 : TB.message) && (BB = dB.error.message)
            } catch (JB) {}
            throw mT.create("config-fetch-failed", {
              httpStatus: lB.status,
              responseMessage: BB
            })
          }
          return lB.json()
        }(BB);
        return lB.deleteThrottleMetadata(YB), TB
      } catch (oB) {
        const TB = oB;
        if (! function(BB) {
            if (!(BB instanceof pB.g) || !BB.customData) return !1;
            const TB = Number(BB.customData.httpStatus);
            return 429 === TB || 500 === TB || 503 === TB || 504 === TB
          }(TB)) {
          if (lB.deleteThrottleMetadata(YB), gB) return ET.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${gB} provided in the "measurementId" field in the local Firebase config. [${null===TB||void 0===TB?void 0:TB.message}]`), {
            appId: YB,
            measurementId: gB
          };
          throw oB
        }
        const VB = 503 === Number(null === (JB = null === TB || void 0 === TB ? void 0 : TB.customData) || void 0 === JB ? void 0 : JB.httpStatus) ? (0, pB.r)(yB, lB.intervalMillis, 30) : (0, pB.r)(yB, lB.intervalMillis),
          kB = {
            throttleEndTimeMillis: Date.now() + VB,
            backoffCount: yB + 1
          };
        return lB.setThrottleMetadata(YB, kB), ET.debug(`Calling attemptFetch again in ${VB} millis`), wT(BB, kB, dB, lB)
      }
    }
    class UT {
      constructor() {
        this.listeners = []
      }
      addEventListener(BB) {
        this.listeners.push(BB)
      }
      abort() {
        this.listeners.forEach((BB => BB()))
      }
    }
    let FT, KT;

    function rT(BB) {
      KT = BB
    }

    function IT(BB) {
      FT = BB
    }
    async function cT(BB, TB, dB, VB, yB, lB, JB) {
      var YB;
      const gB = zT(BB);
      gB.then((TB => {
        dB[TB.measurementId] = TB.appId, BB.options.measurementId && TB.measurementId !== BB.options.measurementId && ET.warn(`The measurement ID in the local Firebase config (${BB.options.measurementId}) does not match the measurement ID fetched from the server (${TB.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
      })).catch((BB => ET.error(BB))), TB.push(gB);
      const oB = async function() {
        if (!(0, pB.cb)()) return ET.warn(mT.create("indexeddb-unavailable", {
          errorInfo: "IndexedDB is not available in this environment."
        }).message), !1;
        try {
          await (0, pB.qb)()
        } catch (BB) {
          return ET.warn(mT.create("indexeddb-unavailable", {
            errorInfo: null === BB || void 0 === BB ? void 0 : BB.toString()
          }).message), !1
        }
        return !0
      }().then((BB => BB ? VB.getId() : void 0)), [kB, LB] = await Promise.all([gB, oB]);
      (function(BB) {
        const TB = window.document.getElementsByTagName("script");
        for (const dB of Object.values(TB))
          if (dB.src && dB.src.includes(HT) && dB.src.includes(BB)) return dB;
        return null
      })(lB) || tT(lB, kB.measurementId), KT && (yB("consent", "default", KT), rT(void 0)), yB("js", new Date);
      const OB = null !== (YB = null === JB || void 0 === JB ? void 0 : JB.config) && void 0 !== YB ? YB : {};
      return OB.origin = "firebase", OB.update = !0, null != LB && (OB.firebase_id = LB), yB("config", kB.measurementId, OB), FT && (yB("set", FT), IT(void 0)), kB.measurementId
    }
    class ST {
      constructor(BB) {
        this.app = BB
      }
      _delete() {
        return delete PT[this.app.options.appId], Promise.resolve()
      }
    }
    let PT = {},
      QT = [];
    const RT = {};
    let aT, ZT, XT = "dataLayer",
      WT = "gtag",
      hT = !1;

    function CT(BB) {
      if (hT) throw mT.create("already-initialized");
      BB.dataLayerName && (XT = BB.dataLayerName), BB.gtagName && (WT = BB.gtagName)
    }

    function GT(BB, TB, dB) {
      ! function() {
        const BB = [];
        if ((0, pB.V)() && BB.push("This is a browser extension environment."), (0, pB.h)() || BB.push("Cookies are not available."), BB.length > 0) {
          const TB = BB.map(((BB, TB) => `(${TB+1}) ${BB}`)).join(" "),
            dB = mT.create("invalid-analytics-context", {
              errorInfo: TB
            });
          ET.warn(dB.message)
        }
      }();
      const VB = BB.options.appId;
      if (!VB) throw mT.create("no-app-id");
      if (!BB.options.apiKey) {
        if (!BB.options.measurementId) throw mT.create("no-api-key");
        ET.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${BB.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
      }
      if (null != PT[VB]) throw mT.create("already-exists", {
        id: VB
      });
      if (!hT) {
        ! function(BB) {
          let TB = [];
          Array.isArray(window[BB]) ? TB = window[BB] : window[BB] = TB
        }(XT);
        const {
          wrappedGtag: BB,
          gtagCore: TB
        } = function(BB, TB, dB, VB, yB) {
          let pB = function() {
            for (var BB = arguments.length, TB = new Array(BB), dB = 0; dB < BB; dB++) TB[dB] = arguments[dB];
            window[VB].push(arguments)
          };
          return window[yB] && "function" === typeof window[yB] && (pB = window[yB]), window[yB] = fT(pB, BB, TB, dB), {
            gtagCore: pB,
            wrappedGtag: window[yB]
          }
        }(PT, QT, RT, XT, WT);
        ZT = BB, aT = TB, hT = !0
      }
      PT[VB] = cT(BB, QT, RT, TB, aT, XT, dB);
      return new ST(BB)
    }

    function qT() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, VB.I)();
      BB = (0, pB.N)(BB);
      const TB = (0, VB.y)(BB, uT);
      return TB.isInitialized() ? TB.getImmediate() : xT(BB)
    }

    function xT(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const dB = (0, VB.y)(BB, uT);
      if (dB.isInitialized()) {
        const BB = dB.getImmediate();
        if ((0, pB.z)(TB, dB.getOptions())) return BB;
        throw mT.create("already-initialized")
      }
      return dB.initialize({
        options: TB
      })
    }
    async function jT() {
      if ((0, pB.V)()) return !1;
      if (!(0, pB.h)()) return !1;
      if (!(0, pB.cb)()) return !1;
      try {
        return await (0, pB.qb)()
      } catch (BB) {
        return !1
      }
    }

    function AT(BB, TB, dB) {
      BB = (0, pB.N)(BB), async function(BB, TB, dB, VB) {
        if (VB && VB.global) return BB("set", {
          screen_name: dB
        }), Promise.resolve();
        BB("config", await TB, {
          update: !0,
          screen_name: dB
        })
      }(ZT, PT[BB.app.options.appId], TB, dB).catch((BB => ET.error(BB)))
    }
    async function bT(BB) {
      return BB = (0, pB.N)(BB), async function(BB, TB) {
        const dB = await TB;
        return new Promise(((TB, VB) => {
          BB("get", dB, "client_id", (BB => {
            BB || VB(mT.create("no-client-id")), TB(BB)
          }))
        }))
      }(ZT, PT[BB.app.options.appId])
    }

    function nT(BB, TB, dB) {
      BB = (0, pB.N)(BB), async function(BB, TB, dB, VB) {
        if (VB && VB.global) return BB("set", {
          user_id: dB
        }), Promise.resolve();
        BB("config", await TB, {
          update: !0,
          user_id: dB
        })
      }(ZT, PT[BB.app.options.appId], TB, dB).catch((BB => ET.error(BB)))
    }

    function eT(BB, TB, dB) {
      BB = (0, pB.N)(BB), async function(BB, TB, dB, VB) {
        if (VB && VB.global) {
          const TB = {};
          for (const BB of Object.keys(dB)) TB[`user_properties.${BB}`] = dB[BB];
          return BB("set", TB), Promise.resolve()
        }
        BB("config", await TB, {
          update: !0,
          user_properties: dB
        })
      }(ZT, PT[BB.app.options.appId], TB, dB).catch((BB => ET.error(BB)))
    }

    function Bd(BB, TB) {
      BB = (0, pB.N)(BB), async function(BB, TB) {
        const dB = await BB;
        window[`ga-disable-${dB}`] = !TB
      }(PT[BB.app.options.appId], TB).catch((BB => ET.error(BB)))
    }

    function Td(BB) {
      ZT ? ZT("set", BB) : IT(BB)
    }

    function dd(BB, TB, dB, VB) {
      BB = (0, pB.N)(BB), async function(BB, TB, dB, VB, yB) {
        if (yB && yB.global) BB("event", dB, VB);
        else {
          const yB = await TB;
          BB("event", dB, Object.assign(Object.assign({}, VB), {
            send_to: yB
          }))
        }
      }(ZT, PT[BB.app.options.appId], TB, dB, VB).catch((BB => ET.error(BB)))
    }

    function Vd(BB) {
      ZT ? ZT("consent", "update", BB) : rT(BB)
    }
    const yd = "@firebase/analytics",
      pd = "0.10.0";
    (0, VB.A)(new lB.c(uT, ((BB, TB) => {
      let {
        options: dB
      } = TB;
      return GT(BB.getProvider("app").getImmediate(), BB.getProvider("installations-internal").getImmediate(), dB)
    }), "PUBLIC")), (0, VB.A)(new lB.c("analytics-internal", (function(BB) {
      try {
        const TB = BB.getProvider(uT).getImmediate();
        return {
          logEvent: (BB, dB, VB) => dd(TB, BB, dB, VB)
        }
      } catch (TB) {
        throw mT.create("interop-component-reg-failed", {
          reason: TB
        })
      }
    }), "PRIVATE")), (0, VB.R)(yd, pd), (0, VB.R)(yd, pd, "esm2017")
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);