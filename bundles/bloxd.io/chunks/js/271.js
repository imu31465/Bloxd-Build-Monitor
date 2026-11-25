/*! For license information please see c6gaap.271.2f0572d3.chunk.js.LICENSE.txt */
export const id = 271;
export const ids = [271];
export const modules = {
  40574: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      getAnalytics: () => bI,
      getGoogleAnalyticsClientId: () => KI,
      initializeAnalytics: () => xI,
      isSupported: () => EI,
      logEvent: () => ZZ,
      setAnalyticsCollectionEnabled: () => BZ,
      setConsent: () => TZ,
      setCurrentScreen: () => DI,
      setDefaultEventParameters: () => IZ,
      setUserId: () => VI,
      setUserProperties: () => SI,
      settings: () => AI
    });
    var TB = ZB(40551),
      JB = ZB(40568),
      oB = ZB(40562),
      GB = ZB(40559);
    let vB, kB;
    const cB = new WeakMap,
      nB = new WeakMap,
      hB = new WeakMap,
      zB = new WeakMap,
      FB = new WeakMap;
    let NB = {
      get(BB, IB, ZB) {
        if (BB instanceof IDBTransaction) {
          if ("done" === IB) return nB.get(BB);
          if ("objectStoreNames" === IB) return BB.objectStoreNames || hB.get(BB);
          if ("store" === IB) return ZB.objectStoreNames[1] ? void 0 : ZB.objectStore(ZB.objectStoreNames[0])
        }
        return yB(BB[IB])
      },
      set: (BB, IB, ZB) => (BB[IB] = ZB, !0),
      has: (BB, IB) => BB instanceof IDBTransaction && ("done" === IB || "store" === IB) || IB in BB
    };

    function gB(BB) {
      return BB !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (kB || (kB = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(BB) ? function() {
        for (var IB = arguments.length, ZB = new Array(IB), TB = 0; TB < IB; TB++) ZB[TB] = arguments[TB];
        return BB.apply(UB(this), ZB), yB(cB.get(this))
      } : function() {
        for (var IB = arguments.length, ZB = new Array(IB), TB = 0; TB < IB; TB++) ZB[TB] = arguments[TB];
        return yB(BB.apply(UB(this), ZB))
      } : function(IB) {
        for (var ZB = arguments.length, TB = new Array(ZB > 1 ? ZB - 1 : 0), JB = 1; JB < ZB; JB++) TB[JB - 1] = arguments[JB];
        const oB = BB.call(UB(this), IB, ...TB);
        return hB.set(oB, IB.sort ? IB.sort() : [IB]), yB(oB)
      }
    }

    function qB(BB) {
      return "function" === typeof BB ? gB(BB) : (BB instanceof IDBTransaction && function(BB) {
        if (nB.has(BB)) return;
        const IB = new Promise(((IB, ZB) => {
          const TB = () => {
              BB.removeEventListener("complete", JB), BB.removeEventListener("error", oB), BB.removeEventListener("abort", oB)
            },
            JB = () => {
              IB(), TB()
            },
            oB = () => {
              ZB(BB.error || new DOMException("AbortError", "AbortError")), TB()
            };
          BB.addEventListener("complete", JB), BB.addEventListener("error", oB), BB.addEventListener("abort", oB)
        }));
        nB.set(BB, IB)
      }(BB), IB = BB, (vB || (vB = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((BB => IB instanceof BB)) ? new Proxy(BB, NB) : BB);
      var IB
    }

    function yB(BB) {
      if (BB instanceof IDBRequest) return function(BB) {
        const IB = new Promise(((IB, ZB) => {
          const TB = () => {
              BB.removeEventListener("success", JB), BB.removeEventListener("error", oB)
            },
            JB = () => {
              IB(yB(BB.result)), TB()
            },
            oB = () => {
              ZB(BB.error), TB()
            };
          BB.addEventListener("success", JB), BB.addEventListener("error", oB)
        }));
        return IB.then((IB => {
          IB instanceof IDBCursor && cB.set(IB, BB)
        })).catch((() => {})), FB.set(IB, BB), IB
      }(BB);
      if (zB.has(BB)) return zB.get(BB);
      const IB = qB(BB);
      return IB !== BB && (zB.set(BB, IB), FB.set(IB, BB)), IB
    }
    const UB = BB => FB.get(BB);
    const WB = ["get", "getKey", "getAll", "getAllKeys", "count"],
      dB = ["put", "add", "delete", "clear"],
      CB = new Map;

    function QB(BB, IB) {
      if (!(BB instanceof IDBDatabase) || IB in BB || "string" !== typeof IB) return;
      if (CB.get(IB)) return CB.get(IB);
      const ZB = IB.replace(/FromIndex$/, ""),
        TB = IB !== ZB,
        JB = dB.includes(ZB);
      if (!(ZB in (TB ? IDBIndex : IDBObjectStore).prototype) || !JB && !WB.includes(ZB)) return;
      const oB = async function(BB) {
        const IB = this.transaction(BB, JB ? "readwrite" : "readonly");
        let oB = IB.store;
        for (var GB = arguments.length, vB = new Array(GB > 1 ? GB - 1 : 0), kB = 1; kB < GB; kB++) vB[kB - 1] = arguments[kB];
        return TB && (oB = oB.index(vB.shift())), (await Promise.all([oB[ZB](...vB), JB && IB.done]))[0]
      };
      return CB.set(IB, oB), oB
    }
    NB = (BB => ({
      ...BB,
      get: (IB, ZB, TB) => QB(IB, ZB) || BB.get(IB, ZB, TB),
      has: (IB, ZB) => !!QB(IB, ZB) || BB.has(IB, ZB)
    }))(NB);
    const sB = "@firebase/installations",
      wB = "0.6.4",
      OB = 1e4,
      YB = `w:${wB}`,
      iB = "FIS_v2",
      pB = 36e5,
      aB = {
        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
        "not-registered": "Firebase Installation is not registered.",
        "installation-not-found": "Firebase Installation not found.",
        "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        "app-offline": "Could not process request. Application offline.",
        "delete-pending-registration": "Can't delete installation while there is a pending registration request."
      },
      HB = new oB.h("installations", "Installations", aB);

    function MB(BB) {
      return BB instanceof oB.j && BB.code.includes("request-failed")
    }

    function jB(BB) {
      let {
        projectId: IB
      } = BB;
      return `https://firebaseinstallations.googleapis.com/v1/projects/${IB}/installations`
    }

    function PB(BB) {
      return {
        token: BB.token,
        requestStatus: 2,
        expiresIn: (IB = BB.expiresIn, Number(IB.replace("s", "000"))),
        creationTime: Date.now()
      };
      var IB
    }
    async function RB(BB, IB) {
      const ZB = (await IB.json()).error;
      return HB.create("request-failed", {
        requestName: BB,
        serverCode: ZB.code,
        serverMessage: ZB.message,
        serverStatus: ZB.status
      })
    }

    function rB(BB) {
      let {
        apiKey: IB
      } = BB;
      return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": IB
      })
    }

    function mB(BB, IB) {
      let {
        refreshToken: ZB
      } = IB;
      const TB = rB(BB);
      return TB.append("Authorization", function(BB) {
        return `${iB} ${BB}`
      }(ZB)), TB
    }
    async function XB(BB) {
      const IB = await BB();
      return IB.status >= 500 && IB.status < 600 ? BB() : IB
    }

    function LB(BB) {
      return new Promise((IB => {
        setTimeout(IB, BB)
      }))
    }
    const eB = /^[cdef][\w-]{21}$/;

    function uB() {
      try {
        const BB = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(BB), BB[0] = 112 + BB[0] % 16;
        const IB = function(BB) {
          const IB = (ZB = BB, btoa(String.fromCharCode(...ZB)).replace(/\+/g, "-").replace(/\//g, "_"));
          var ZB;
          return IB.substr(0, 22)
        }(BB);
        return eB.test(IB) ? IB : ""
      } catch (BB) {
        return ""
      }
    }

    function fB(BB) {
      return `${BB.appName}!${BB.appId}`
    }
    const lB = new Map;

    function AB(BB, IB) {
      const ZB = fB(BB);
      tB(ZB, IB),
        function(BB, IB) {
          const ZB = xB();
          ZB && ZB.postMessage({
            key: BB,
            fid: IB
          });
          EB()
        }(ZB, IB)
    }

    function tB(BB, IB) {
      const ZB = lB.get(BB);
      if (ZB)
        for (const TB of ZB) TB(IB)
    }
    let bB = null;

    function xB() {
      return !bB && "BroadcastChannel" in self && (bB = new BroadcastChannel("[Firebase] FID Change"), bB.onmessage = BB => {
        tB(BB.data.key, BB.data.fid)
      }), bB
    }

    function EB() {
      0 === lB.size && bB && (bB.close(), bB = null)
    }
    const DB = "firebase-installations-store";
    let KB = null;

    function VB() {
      return KB || (KB = function(BB, IB) {
        let {
          blocked: ZB,
          upgrade: TB,
          blocking: JB,
          terminated: oB
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const GB = indexedDB.open(BB, IB),
          vB = yB(GB);
        return TB && GB.addEventListener("upgradeneeded", (BB => {
          TB(yB(GB.result), BB.oldVersion, BB.newVersion, yB(GB.transaction))
        })), ZB && GB.addEventListener("blocked", (() => ZB())), vB.then((BB => {
          oB && BB.addEventListener("close", (() => oB())), JB && BB.addEventListener("versionchange", (() => JB()))
        })).catch((() => {})), vB
      }("firebase-installations-database", 1, {
        upgrade: (BB, IB) => {
          if (0 === IB) BB.createObjectStore(DB)
        }
      })), KB
    }
    async function SB(BB, IB) {
      const ZB = fB(BB),
        TB = (await VB()).transaction(DB, "readwrite"),
        JB = TB.objectStore(DB),
        oB = await JB.get(ZB);
      return await JB.put(IB, ZB), await TB.done, oB && oB.fid === IB.fid || AB(BB, IB.fid), IB
    }
    async function BI(BB) {
      const IB = fB(BB),
        ZB = (await VB()).transaction(DB, "readwrite");
      await ZB.objectStore(DB).delete(IB), await ZB.done
    }
    async function II(BB, IB) {
      const ZB = fB(BB),
        TB = (await VB()).transaction(DB, "readwrite"),
        JB = TB.objectStore(DB),
        oB = await JB.get(ZB),
        GB = IB(oB);
      return void 0 === GB ? await JB.delete(ZB) : await JB.put(GB, ZB), await TB.done, !GB || oB && oB.fid === GB.fid || AB(BB, GB.fid), GB
    }
    async function ZI(BB) {
      let IB;
      const ZB = await II(BB.appConfig, (ZB => {
        const TB = function(BB) {
            const IB = BB || {
              fid: uB(),
              registrationStatus: 0
            };
            return oI(IB)
          }(ZB),
          JB = function(BB, IB) {
            if (0 === IB.registrationStatus) {
              if (!navigator.onLine) {
                return {
                  installationEntry: IB,
                  registrationPromise: Promise.reject(HB.create("app-offline"))
                }
              }
              const ZB = {
                  fid: IB.fid,
                  registrationStatus: 1,
                  registrationTime: Date.now()
                },
                TB = async function(BB, IB) {
                  try {
                    const ZB = await async function(BB, IB) {
                      let {
                        appConfig: ZB,
                        heartbeatServiceProvider: TB
                      } = BB, {
                        fid: JB
                      } = IB;
                      const oB = jB(ZB),
                        GB = rB(ZB),
                        vB = TB.getImmediate({
                          optional: !0
                        });
                      if (vB) {
                        const BB = await vB.getHeartbeatsHeader();
                        BB && GB.append("x-firebase-client", BB)
                      }
                      const kB = {
                          fid: JB,
                          authVersion: iB,
                          appId: ZB.appId,
                          sdkVersion: YB
                        },
                        cB = {
                          method: "POST",
                          headers: GB,
                          body: JSON.stringify(kB)
                        },
                        nB = await XB((() => fetch(oB, cB)));
                      if (nB.ok) {
                        const BB = await nB.json();
                        return {
                          fid: BB.fid || JB,
                          registrationStatus: 2,
                          refreshToken: BB.refreshToken,
                          authToken: PB(BB.authToken)
                        }
                      }
                      throw await RB("Create Installation", nB)
                    }(BB, IB);
                    return SB(BB.appConfig, ZB)
                  } catch (ZB) {
                    throw MB(ZB) && 409 === ZB.customData.serverCode ? await BI(BB.appConfig) : await SB(BB.appConfig, {
                      fid: IB.fid,
                      registrationStatus: 0
                    }), ZB
                  }
                }(BB, ZB);
              return {
                installationEntry: ZB,
                registrationPromise: TB
              }
            }
            return 1 === IB.registrationStatus ? {
              installationEntry: IB,
              registrationPromise: TI(BB)
            } : {
              installationEntry: IB
            }
          }(BB, TB);
        return IB = JB.registrationPromise, JB.installationEntry
      }));
      return "" === ZB.fid ? {
        installationEntry: await IB
      } : {
        installationEntry: ZB,
        registrationPromise: IB
      }
    }
    async function TI(BB) {
      let IB = await JI(BB.appConfig);
      for (; 1 === IB.registrationStatus;) await LB(100), IB = await JI(BB.appConfig);
      if (0 === IB.registrationStatus) {
        const {
          installationEntry: IB,
          registrationPromise: ZB
        } = await ZI(BB);
        return ZB || IB
      }
      return IB
    }

    function JI(BB) {
      return II(BB, (BB => {
        if (!BB) throw HB.create("installation-not-found");
        return oI(BB)
      }))
    }

    function oI(BB) {
      return 1 === (IB = BB).registrationStatus && IB.registrationTime + OB < Date.now() ? {
        fid: BB.fid,
        registrationStatus: 0
      } : BB;
      var IB
    }
    async function GI(BB, IB) {
      let {
        appConfig: ZB,
        heartbeatServiceProvider: TB
      } = BB;
      const JB = function(BB, IB) {
          let {
            fid: ZB
          } = IB;
          return `${jB(BB)}/${ZB}/authTokens:generate`
        }(ZB, IB),
        oB = mB(ZB, IB),
        GB = TB.getImmediate({
          optional: !0
        });
      if (GB) {
        const BB = await GB.getHeartbeatsHeader();
        BB && oB.append("x-firebase-client", BB)
      }
      const vB = {
          installation: {
            sdkVersion: YB,
            appId: ZB.appId
          }
        },
        kB = {
          method: "POST",
          headers: oB,
          body: JSON.stringify(vB)
        },
        cB = await XB((() => fetch(JB, kB)));
      if (cB.ok) {
        return PB(await cB.json())
      }
      throw await RB("Generate Auth Token", cB)
    }
    async function vI(BB) {
      let IB, ZB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const TB = await II(BB.appConfig, (TB => {
        if (!cI(TB)) throw HB.create("not-registered");
        const JB = TB.authToken;
        if (!ZB && function(BB) {
            return 2 === BB.requestStatus && ! function(BB) {
              const IB = Date.now();
              return IB < BB.creationTime || BB.creationTime + BB.expiresIn < IB + pB
            }(BB)
          }(JB)) return TB;
        if (1 === JB.requestStatus) return IB = async function(BB, IB) {
          let ZB = await kI(BB.appConfig);
          for (; 1 === ZB.authToken.requestStatus;) await LB(100), ZB = await kI(BB.appConfig);
          const TB = ZB.authToken;
          return 0 === TB.requestStatus ? vI(BB, IB) : TB
        }(BB, ZB), TB;
        {
          if (!navigator.onLine) throw HB.create("app-offline");
          const ZB = function(BB) {
            const IB = {
              requestStatus: 1,
              requestTime: Date.now()
            };
            return Object.assign(Object.assign({}, BB), {
              authToken: IB
            })
          }(TB);
          return IB = async function(BB, IB) {
            try {
              const ZB = await GI(BB, IB),
                TB = Object.assign(Object.assign({}, IB), {
                  authToken: ZB
                });
              return await SB(BB.appConfig, TB), ZB
            } catch (ZB) {
              if (!MB(ZB) || 401 !== ZB.customData.serverCode && 404 !== ZB.customData.serverCode) {
                const ZB = Object.assign(Object.assign({}, IB), {
                  authToken: {
                    requestStatus: 0
                  }
                });
                await SB(BB.appConfig, ZB)
              } else await BI(BB.appConfig);
              throw ZB
            }
          }(BB, ZB), ZB
        }
      }));
      return IB ? await IB : TB.authToken
    }

    function kI(BB) {
      return II(BB, (BB => {
        if (!cI(BB)) throw HB.create("not-registered");
        const IB = BB.authToken;
        return 1 === (ZB = IB).requestStatus && ZB.requestTime + OB < Date.now() ? Object.assign(Object.assign({}, BB), {
          authToken: {
            requestStatus: 0
          }
        }) : BB;
        var ZB
      }))
    }

    function cI(BB) {
      return void 0 !== BB && 2 === BB.registrationStatus
    }
    async function nI(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const ZB = BB;
      await async function(BB) {
        const {
          registrationPromise: IB
        } = await ZI(BB);
        IB && await IB
      }(ZB);
      return (await vI(ZB, IB)).token
    }

    function hI(BB) {
      return HB.create("missing-app-config-values", {
        valueName: BB
      })
    }
    const zI = "installations",
      FI = BB => {
        const IB = BB.getProvider("app").getImmediate(),
          ZB = function(BB) {
            if (!BB || !BB.options) throw hI("App Configuration");
            if (!BB.name) throw hI("App Name");
            const IB = ["projectId", "apiKey", "appId"];
            for (const ZB of IB)
              if (!BB.options[ZB]) throw hI(ZB);
            return {
              appName: BB.name,
              projectId: BB.options.projectId,
              apiKey: BB.options.apiKey,
              appId: BB.options.appId
            }
          }(IB);
        return {
          app: IB,
          appConfig: ZB,
          heartbeatServiceProvider: (0, TB.w)(IB, "heartbeat"),
          _delete: () => Promise.resolve()
        }
      },
      NI = BB => {
        const IB = BB.getProvider("app").getImmediate(),
          ZB = (0, TB.w)(IB, zI).getImmediate();
        return {
          getId: () => async function(BB) {
            const IB = BB,
              {
                installationEntry: ZB,
                registrationPromise: TB
              } = await ZI(IB);
            return TB ? TB.catch(console.error) : vI(IB).catch(console.error), ZB.fid
          }(ZB),
          getToken: BB => nI(ZB, BB)
        }
      };
    (0, TB.y)(new GB.e(zI, FI, "PUBLIC")), (0, TB.y)(new GB.e("installations-internal", NI, "PRIVATE")), (0, TB.R)(sB, wB), (0, TB.R)(sB, wB, "esm2017");
    const gI = "analytics",
      qI = "https://www.googletagmanager.com/gtag/js",
      yI = new JB.g("@firebase/analytics"),
      UI = {
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
      WI = new oB.h("analytics", "Analytics", UI);

    function dI(BB) {
      if (!BB.startsWith(qI)) {
        const IB = WI.create("invalid-gtag-resource", {
          gtagURL: BB
        });
        return yI.warn(IB.message), ""
      }
      return BB
    }

    function CI(BB) {
      return Promise.all(BB.map((BB => BB.catch((BB => BB)))))
    }

    function QI(BB, IB) {
      const ZB = function(BB, IB) {
          let ZB;
          return window.trustedTypes && (ZB = window.trustedTypes.createPolicy(BB, IB)), ZB
        }("firebase-js-sdk-policy", {
          createScriptURL: dI
        }),
        TB = document.createElement("script"),
        JB = `${qI}?l=${BB}&id=${IB}`;
      TB.src = ZB ? null === ZB || void 0 === ZB ? void 0 : ZB.createScriptURL(JB) : JB, TB.async = !0, document.head.appendChild(TB)
    }

    function sI(BB, IB, ZB, TB) {
      return async function(JB) {
        try {
          for (var oB = arguments.length, GB = new Array(oB > 1 ? oB - 1 : 0), vB = 1; vB < oB; vB++) GB[vB - 1] = arguments[vB];
          if ("event" === JB) {
            const [TB, JB] = GB;
            await async function(BB, IB, ZB, TB, JB) {
              try {
                let oB = [];
                if (JB && JB.send_to) {
                  let BB = JB.send_to;
                  Array.isArray(BB) || (BB = [BB]);
                  const TB = await CI(ZB);
                  for (const ZB of BB) {
                    const BB = TB.find((BB => BB.measurementId === ZB)),
                      JB = BB && IB[BB.appId];
                    if (!JB) {
                      oB = [];
                      break
                    }
                    oB.push(JB)
                  }
                }
                0 === oB.length && (oB = Object.values(IB)), await Promise.all(oB), BB("event", TB, JB || {})
              } catch (oB) {
                yI.error(oB)
              }
            }(BB, IB, ZB, TB, JB)
          } else if ("config" === JB) {
            const [JB, oB] = GB;
            await async function(BB, IB, ZB, TB, JB, oB) {
              const GB = TB[JB];
              try {
                if (GB) await IB[GB];
                else {
                  const BB = (await CI(ZB)).find((BB => BB.measurementId === JB));
                  BB && await IB[BB.appId]
                }
              } catch (vB) {
                yI.error(vB)
              }
              BB("config", JB, oB)
            }(BB, IB, ZB, TB, JB, oB)
          } else if ("consent" === JB) {
            const [IB] = GB;
            BB("consent", "update", IB)
          } else if ("get" === JB) {
            const [IB, ZB, TB] = GB;
            BB("get", IB, ZB, TB)
          } else if ("set" === JB) {
            const [IB] = GB;
            BB("set", IB)
          } else BB(JB, ...GB)
        } catch (kB) {
          yI.error(kB)
        }
      }
    }
    const wI = new class {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
        this.throttleMetadata = BB, this.intervalMillis = IB
      }
      getThrottleMetadata(BB) {
        return this.throttleMetadata[BB]
      }
      setThrottleMetadata(BB, IB) {
        this.throttleMetadata[BB] = IB
      }
      deleteThrottleMetadata(BB) {
        delete this.throttleMetadata[BB]
      }
    };

    function OI(BB) {
      return new Headers({
        Accept: "application/json",
        "x-goog-api-key": BB
      })
    }
    async function YI(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wI,
        ZB = arguments.length > 2 ? arguments[2] : void 0;
      const {
        appId: TB,
        apiKey: JB,
        measurementId: oB
      } = BB.options;
      if (!TB) throw WI.create("no-app-id");
      if (!JB) {
        if (oB) return {
          measurementId: oB,
          appId: TB
        };
        throw WI.create("no-api-key")
      }
      const GB = IB.getThrottleMetadata(TB) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        },
        vB = new pI;
      return setTimeout((async () => {
        vB.abort()
      }), void 0 !== ZB ? ZB : 6e4), iI({
        appId: TB,
        apiKey: JB,
        measurementId: oB
      }, GB, vB, IB)
    }
    async function iI(BB, IB, ZB) {
      let {
        throttleEndTimeMillis: TB,
        backoffCount: JB
      } = IB, GB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : wI;
      var vB;
      const {
        appId: kB,
        measurementId: cB
      } = BB;
      try {
        await
        function(BB, IB) {
          return new Promise(((ZB, TB) => {
            const JB = Math.max(IB - Date.now(), 0),
              oB = setTimeout(ZB, JB);
            BB.addEventListener((() => {
              clearTimeout(oB), TB(WI.create("fetch-throttle", {
                throttleEndTimeMillis: IB
              }))
            }))
          }))
        }(ZB, TB)
      } catch (nB) {
        if (cB) return yI.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${cB} provided in the "measurementId" field in the local Firebase config. [${null===nB||void 0===nB?void 0:nB.message}]`), {
          appId: kB,
          measurementId: cB
        };
        throw nB
      }
      try {
        const IB = await async function(BB) {
          var IB;
          const {
            appId: ZB,
            apiKey: TB
          } = BB, JB = {
            method: "GET",
            headers: OI(TB)
          }, oB = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", ZB), GB = await fetch(oB, JB);
          if (200 !== GB.status && 304 !== GB.status) {
            let BB = "";
            try {
              const ZB = await GB.json();
              (null === (IB = ZB.error) || void 0 === IB ? void 0 : IB.message) && (BB = ZB.error.message)
            } catch (vB) {}
            throw WI.create("config-fetch-failed", {
              httpStatus: GB.status,
              responseMessage: BB
            })
          }
          return GB.json()
        }(BB);
        return GB.deleteThrottleMetadata(kB), IB
      } catch (nB) {
        const IB = nB;
        if (! function(BB) {
            if (!(BB instanceof oB.j) || !BB.customData) return !1;
            const IB = Number(BB.customData.httpStatus);
            return 429 === IB || 500 === IB || 503 === IB || 504 === IB
          }(IB)) {
          if (GB.deleteThrottleMetadata(kB), cB) return yI.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${cB} provided in the "measurementId" field in the local Firebase config. [${null===IB||void 0===IB?void 0:IB.message}]`), {
            appId: kB,
            measurementId: cB
          };
          throw nB
        }
        const TB = 503 === Number(null === (vB = null === IB || void 0 === IB ? void 0 : IB.customData) || void 0 === vB ? void 0 : vB.httpStatus) ? (0, oB.t)(JB, GB.intervalMillis, 30) : (0, oB.t)(JB, GB.intervalMillis),
          hB = {
            throttleEndTimeMillis: Date.now() + TB,
            backoffCount: JB + 1
          };
        return GB.setThrottleMetadata(kB, hB), yI.debug(`Calling attemptFetch again in ${TB} millis`), iI(BB, hB, ZB, GB)
      }
    }
    class pI {
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
    let aI, HI;

    function MI(BB) {
      HI = BB
    }

    function jI(BB) {
      aI = BB
    }
    async function PI(BB, IB, ZB, TB, JB, GB, vB) {
      var kB;
      const cB = YI(BB);
      cB.then((IB => {
        ZB[IB.measurementId] = IB.appId, BB.options.measurementId && IB.measurementId !== BB.options.measurementId && yI.warn(`The measurement ID in the local Firebase config (${BB.options.measurementId}) does not match the measurement ID fetched from the server (${IB.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
      })).catch((BB => yI.error(BB))), IB.push(cB);
      const nB = async function() {
        if (!(0, oB.Y)()) return yI.warn(WI.create("indexeddb-unavailable", {
          errorInfo: "IndexedDB is not available in this environment."
        }).message), !1;
        try {
          await (0, oB.hb)()
        } catch (BB) {
          return yI.warn(WI.create("indexeddb-unavailable", {
            errorInfo: null === BB || void 0 === BB ? void 0 : BB.toString()
          }).message), !1
        }
        return !0
      }().then((BB => BB ? TB.getId() : void 0)), [hB, zB] = await Promise.all([cB, nB]);
      (function(BB) {
        const IB = window.document.getElementsByTagName("script");
        for (const ZB of Object.values(IB))
          if (ZB.src && ZB.src.includes(qI) && ZB.src.includes(BB)) return ZB;
        return null
      })(GB) || QI(GB, hB.measurementId), HI && (JB("consent", "default", HI), MI(void 0)), JB("js", new Date);
      const FB = null !== (kB = null === vB || void 0 === vB ? void 0 : vB.config) && void 0 !== kB ? kB : {};
      return FB.origin = "firebase", FB.update = !0, null != zB && (FB.firebase_id = zB), JB("config", hB.measurementId, FB), aI && (JB("set", aI), jI(void 0)), hB.measurementId
    }
    class RI {
      constructor(BB) {
        this.app = BB
      }
      _delete() {
        return delete rI[this.app.options.appId], Promise.resolve()
      }
    }
    let rI = {},
      mI = [];
    const XI = {};
    let LI, eI, uI = "dataLayer",
      fI = "gtag",
      lI = !1;

    function AI(BB) {
      if (lI) throw WI.create("already-initialized");
      BB.dataLayerName && (uI = BB.dataLayerName), BB.gtagName && (fI = BB.gtagName)
    }

    function tI(BB, IB, ZB) {
      ! function() {
        const BB = [];
        if ((0, oB.T)() && BB.push("This is a browser extension environment."), (0, oB.n)() || BB.push("Cookies are not available."), BB.length > 0) {
          const IB = BB.map(((BB, IB) => `(${IB+1}) ${BB}`)).join(" "),
            ZB = WI.create("invalid-analytics-context", {
              errorInfo: IB
            });
          yI.warn(ZB.message)
        }
      }();
      const TB = BB.options.appId;
      if (!TB) throw WI.create("no-app-id");
      if (!BB.options.apiKey) {
        if (!BB.options.measurementId) throw WI.create("no-api-key");
        yI.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${BB.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
      }
      if (null != rI[TB]) throw WI.create("already-exists", {
        id: TB
      });
      if (!lI) {
        ! function(BB) {
          let IB = [];
          Array.isArray(window[BB]) ? IB = window[BB] : window[BB] = IB
        }(uI);
        const {
          wrappedGtag: BB,
          gtagCore: IB
        } = function(BB, IB, ZB, TB, JB) {
          let oB = function() {
            for (var BB = arguments.length, IB = new Array(BB), ZB = 0; ZB < BB; ZB++) IB[ZB] = arguments[ZB];
            window[TB].push(arguments)
          };
          return window[JB] && "function" === typeof window[JB] && (oB = window[JB]), window[JB] = sI(oB, BB, IB, ZB), {
            gtagCore: oB,
            wrappedGtag: window[JB]
          }
        }(rI, mI, XI, uI, fI);
        eI = BB, LI = IB, lI = !0
      }
      rI[TB] = PI(BB, mI, XI, IB, LI, uI, ZB);
      return new RI(BB)
    }

    function bI() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, TB.I)();
      BB = (0, oB.N)(BB);
      const IB = (0, TB.w)(BB, gI);
      return IB.isInitialized() ? IB.getImmediate() : xI(BB)
    }

    function xI(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const ZB = (0, TB.w)(BB, gI);
      if (ZB.isInitialized()) {
        const BB = ZB.getImmediate();
        if ((0, oB.B)(IB, ZB.getOptions())) return BB;
        throw WI.create("already-initialized")
      }
      return ZB.initialize({
        options: IB
      })
    }
    async function EI() {
      if ((0, oB.T)()) return !1;
      if (!(0, oB.n)()) return !1;
      if (!(0, oB.Y)()) return !1;
      try {
        return await (0, oB.hb)()
      } catch (BB) {
        return !1
      }
    }

    function DI(BB, IB, ZB) {
      BB = (0, oB.N)(BB), async function(BB, IB, ZB, TB) {
        if (TB && TB.global) return BB("set", {
          screen_name: ZB
        }), Promise.resolve();
        BB("config", await IB, {
          update: !0,
          screen_name: ZB
        })
      }(eI, rI[BB.app.options.appId], IB, ZB).catch((BB => yI.error(BB)))
    }
    async function KI(BB) {
      return BB = (0, oB.N)(BB), async function(BB, IB) {
        const ZB = await IB;
        return new Promise(((IB, TB) => {
          BB("get", ZB, "client_id", (BB => {
            BB || TB(WI.create("no-client-id")), IB(BB)
          }))
        }))
      }(eI, rI[BB.app.options.appId])
    }

    function VI(BB, IB, ZB) {
      BB = (0, oB.N)(BB), async function(BB, IB, ZB, TB) {
        if (TB && TB.global) return BB("set", {
          user_id: ZB
        }), Promise.resolve();
        BB("config", await IB, {
          update: !0,
          user_id: ZB
        })
      }(eI, rI[BB.app.options.appId], IB, ZB).catch((BB => yI.error(BB)))
    }

    function SI(BB, IB, ZB) {
      BB = (0, oB.N)(BB), async function(BB, IB, ZB, TB) {
        if (TB && TB.global) {
          const IB = {};
          for (const BB of Object.keys(ZB)) IB[`user_properties.${BB}`] = ZB[BB];
          return BB("set", IB), Promise.resolve()
        }
        BB("config", await IB, {
          update: !0,
          user_properties: ZB
        })
      }(eI, rI[BB.app.options.appId], IB, ZB).catch((BB => yI.error(BB)))
    }

    function BZ(BB, IB) {
      BB = (0, oB.N)(BB), async function(BB, IB) {
        const ZB = await BB;
        window[`ga-disable-${ZB}`] = !IB
      }(rI[BB.app.options.appId], IB).catch((BB => yI.error(BB)))
    }

    function IZ(BB) {
      eI ? eI("set", BB) : jI(BB)
    }

    function ZZ(BB, IB, ZB, TB) {
      BB = (0, oB.N)(BB), async function(BB, IB, ZB, TB, JB) {
        if (JB && JB.global) BB("event", ZB, TB);
        else {
          const JB = await IB;
          BB("event", ZB, Object.assign(Object.assign({}, TB), {
            send_to: JB
          }))
        }
      }(eI, rI[BB.app.options.appId], IB, ZB, TB).catch((BB => yI.error(BB)))
    }

    function TZ(BB) {
      eI ? eI("consent", "update", BB) : MI(BB)
    }
    const JZ = "@firebase/analytics",
      oZ = "0.10.0";
    (0, TB.y)(new GB.e(gI, ((BB, IB) => {
      let {
        options: ZB
      } = IB;
      return tI(BB.getProvider("app").getImmediate(), BB.getProvider("installations-internal").getImmediate(), ZB)
    }), "PUBLIC")), (0, TB.y)(new GB.e("analytics-internal", (function(BB) {
      try {
        const IB = BB.getProvider(gI).getImmediate();
        return {
          logEvent: (BB, ZB, TB) => ZZ(IB, BB, ZB, TB)
        }
      } catch (IB) {
        throw WI.create("interop-component-reg-failed", {
          reason: IB
        })
      }
    }), "PRIVATE")), (0, TB.R)(JZ, oZ), (0, TB.R)(JZ, oZ, "esm2017")
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);