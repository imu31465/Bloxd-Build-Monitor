/*! For license information please see gw4e3a.298.16f1aa57.chunk.js.LICENSE.txt */
export const id = 298;
export const ids = [298];
export const modules = {
  41533: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      getAnalytics: () => bO,
      getGoogleAnalyticsClientId: () => sO,
      initializeAnalytics: () => CO,
      isSupported: () => HO,
      logEvent: () => GG,
      setAnalyticsCollectionEnabled: () => BG,
      setConsent: () => YG,
      setCurrentScreen: () => vO,
      setDefaultEventParameters: () => OG,
      setUserId: () => xO,
      setUserProperties: () => tO,
      settings: () => eO
    });
    var YB = GB(41513),
      DB = GB(41525),
      QB = GB(41520),
      oB = GB(41515);
    let jB, yB;
    const JB = new WeakMap,
      MB = new WeakMap,
      PB = new WeakMap,
      zB = new WeakMap,
      lB = new WeakMap;
    let pB = {
      get(BB, OB, GB) {
        if (BB instanceof IDBTransaction) {
          if ("done" === OB) return MB.get(BB);
          if ("objectStoreNames" === OB) return BB.objectStoreNames || PB.get(BB);
          if ("store" === OB) return GB.objectStoreNames[1] ? void 0 : GB.objectStore(GB.objectStoreNames[0])
        }
        return NB(BB[OB])
      },
      set: (BB, OB, GB) => (BB[OB] = GB, !0),
      has: (BB, OB) => BB instanceof IDBTransaction && ("done" === OB || "store" === OB) || OB in BB
    };

    function qB(BB) {
      return BB !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (yB || (yB = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(BB) ? function() {
        for (var OB = arguments.length, GB = new Array(OB), YB = 0; YB < OB; YB++) GB[YB] = arguments[YB];
        return BB.apply(RB(this), GB), NB(JB.get(this))
      } : function() {
        for (var OB = arguments.length, GB = new Array(OB), YB = 0; YB < OB; YB++) GB[YB] = arguments[YB];
        return NB(BB.apply(RB(this), GB))
      } : function(OB) {
        for (var GB = arguments.length, YB = new Array(GB > 1 ? GB - 1 : 0), DB = 1; DB < GB; DB++) YB[DB - 1] = arguments[DB];
        const QB = BB.call(RB(this), OB, ...YB);
        return PB.set(QB, OB.sort ? OB.sort() : [OB]), NB(QB)
      }
    }

    function ZB(BB) {
      return "function" === typeof BB ? qB(BB) : (BB instanceof IDBTransaction && function(BB) {
        if (MB.has(BB)) return;
        const OB = new Promise(((OB, GB) => {
          const YB = () => {
              BB.removeEventListener("complete", DB), BB.removeEventListener("error", QB), BB.removeEventListener("abort", QB)
            },
            DB = () => {
              OB(), YB()
            },
            QB = () => {
              GB(BB.error || new DOMException("AbortError", "AbortError")), YB()
            };
          BB.addEventListener("complete", DB), BB.addEventListener("error", QB), BB.addEventListener("abort", QB)
        }));
        MB.set(BB, OB)
      }(BB), OB = BB, (jB || (jB = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((BB => OB instanceof BB)) ? new Proxy(BB, pB) : BB);
      var OB
    }

    function NB(BB) {
      if (BB instanceof IDBRequest) return function(BB) {
        const OB = new Promise(((OB, GB) => {
          const YB = () => {
              BB.removeEventListener("success", DB), BB.removeEventListener("error", QB)
            },
            DB = () => {
              OB(NB(BB.result)), YB()
            },
            QB = () => {
              GB(BB.error), YB()
            };
          BB.addEventListener("success", DB), BB.addEventListener("error", QB)
        }));
        return OB.then((OB => {
          OB instanceof IDBCursor && JB.set(OB, BB)
        })).catch((() => {})), lB.set(OB, BB), OB
      }(BB);
      if (zB.has(BB)) return zB.get(BB);
      const OB = ZB(BB);
      return OB !== BB && (zB.set(BB, OB), lB.set(OB, BB)), OB
    }
    const RB = BB => lB.get(BB);
    const WB = ["get", "getKey", "getAll", "getAllKeys", "count"],
      AB = ["put", "add", "delete", "clear"],
      VB = new Map;

    function SB(BB, OB) {
      if (!(BB instanceof IDBDatabase) || OB in BB || "string" !== typeof OB) return;
      if (VB.get(OB)) return VB.get(OB);
      const GB = OB.replace(/FromIndex$/, ""),
        YB = OB !== GB,
        DB = AB.includes(GB);
      if (!(GB in (YB ? IDBIndex : IDBObjectStore).prototype) || !DB && !WB.includes(GB)) return;
      const QB = async function(BB) {
        const OB = this.transaction(BB, DB ? "readwrite" : "readonly");
        let QB = OB.store;
        for (var oB = arguments.length, jB = new Array(oB > 1 ? oB - 1 : 0), yB = 1; yB < oB; yB++) jB[yB - 1] = arguments[yB];
        return YB && (QB = QB.index(jB.shift())), (await Promise.all([QB[GB](...jB), DB && OB.done]))[0]
      };
      return VB.set(OB, QB), QB
    }
    pB = (BB => ({
      ...BB,
      get: (OB, GB, YB) => SB(OB, GB) || BB.get(OB, GB, YB),
      has: (OB, GB) => !!SB(OB, GB) || BB.has(OB, GB)
    }))(pB);
    const nB = "@firebase/installations",
      UB = "0.6.4",
      fB = 1e4,
      kB = `w:${UB}`,
      dB = "FIS_v2",
      KB = 36e5,
      uB = {
        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
        "not-registered": "Firebase Installation is not registered.",
        "installation-not-found": "Firebase Installation not found.",
        "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        "app-offline": "Could not process request. Application offline.",
        "delete-pending-registration": "Can't delete installation while there is a pending registration request."
      },
      mB = new QB.f("installations", "Installations", uB);

    function IB(BB) {
      return BB instanceof QB.h && BB.code.includes("request-failed")
    }

    function FB(BB) {
      let {
        projectId: OB
      } = BB;
      return `https://firebaseinstallations.googleapis.com/v1/projects/${OB}/installations`
    }

    function iB(BB) {
      return {
        token: BB.token,
        requestStatus: 2,
        expiresIn: (OB = BB.expiresIn, Number(OB.replace("s", "000"))),
        creationTime: Date.now()
      };
      var OB
    }
    async function LB(BB, OB) {
      const GB = (await OB.json()).error;
      return mB.create("request-failed", {
        requestName: BB,
        serverCode: GB.code,
        serverMessage: GB.message,
        serverStatus: GB.status
      })
    }

    function gB(BB) {
      let {
        apiKey: OB
      } = BB;
      return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": OB
      })
    }

    function rB(BB, OB) {
      let {
        refreshToken: GB
      } = OB;
      const YB = gB(BB);
      return YB.append("Authorization", function(BB) {
        return `${dB} ${BB}`
      }(GB)), YB
    }
    async function XB(BB) {
      const OB = await BB();
      return OB.status >= 500 && OB.status < 600 ? BB() : OB
    }

    function wB(BB) {
      return new Promise((OB => {
        setTimeout(OB, BB)
      }))
    }
    const EB = /^[cdef][\w-]{21}$/;

    function cB() {
      try {
        const BB = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(BB), BB[0] = 112 + BB[0] % 16;
        const OB = function(BB) {
          const OB = (GB = BB, btoa(String.fromCharCode(...GB)).replace(/\+/g, "-").replace(/\//g, "_"));
          var GB;
          return OB.substr(0, 22)
        }(BB);
        return EB.test(OB) ? OB : ""
      } catch (BB) {
        return ""
      }
    }

    function hB(BB) {
      return `${BB.appName}!${BB.appId}`
    }
    const aB = new Map;

    function eB(BB, OB) {
      const GB = hB(BB);
      TB(GB, OB),
        function(BB, OB) {
          const GB = CB();
          GB && GB.postMessage({
            key: BB,
            fid: OB
          });
          HB()
        }(GB, OB)
    }

    function TB(BB, OB) {
      const GB = aB.get(BB);
      if (GB)
        for (const YB of GB) YB(OB)
    }
    let bB = null;

    function CB() {
      return !bB && "BroadcastChannel" in self && (bB = new BroadcastChannel("[Firebase] FID Change"), bB.onmessage = BB => {
        TB(BB.data.key, BB.data.fid)
      }), bB
    }

    function HB() {
      0 === aB.size && bB && (bB.close(), bB = null)
    }
    const vB = "firebase-installations-store";
    let sB = null;

    function xB() {
      return sB || (sB = function(BB, OB) {
        let {
          blocked: GB,
          upgrade: YB,
          blocking: DB,
          terminated: QB
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const oB = indexedDB.open(BB, OB),
          jB = NB(oB);
        return YB && oB.addEventListener("upgradeneeded", (BB => {
          YB(NB(oB.result), BB.oldVersion, BB.newVersion, NB(oB.transaction))
        })), GB && oB.addEventListener("blocked", (() => GB())), jB.then((BB => {
          QB && BB.addEventListener("close", (() => QB())), DB && BB.addEventListener("versionchange", (() => DB()))
        })).catch((() => {})), jB
      }("firebase-installations-database", 1, {
        upgrade: (BB, OB) => {
          if (0 === OB) BB.createObjectStore(vB)
        }
      })), sB
    }
    async function tB(BB, OB) {
      const GB = hB(BB),
        YB = (await xB()).transaction(vB, "readwrite"),
        DB = YB.objectStore(vB),
        QB = await DB.get(GB);
      return await DB.put(OB, GB), await YB.done, QB && QB.fid === OB.fid || eB(BB, OB.fid), OB
    }
    async function BO(BB) {
      const OB = hB(BB),
        GB = (await xB()).transaction(vB, "readwrite");
      await GB.objectStore(vB).delete(OB), await GB.done
    }
    async function OO(BB, OB) {
      const GB = hB(BB),
        YB = (await xB()).transaction(vB, "readwrite"),
        DB = YB.objectStore(vB),
        QB = await DB.get(GB),
        oB = OB(QB);
      return void 0 === oB ? await DB.delete(GB) : await DB.put(oB, GB), await YB.done, !oB || QB && QB.fid === oB.fid || eB(BB, oB.fid), oB
    }
    async function GO(BB) {
      let OB;
      const GB = await OO(BB.appConfig, (GB => {
        const YB = function(BB) {
            const OB = BB || {
              fid: cB(),
              registrationStatus: 0
            };
            return QO(OB)
          }(GB),
          DB = function(BB, OB) {
            if (0 === OB.registrationStatus) {
              if (!navigator.onLine) {
                return {
                  installationEntry: OB,
                  registrationPromise: Promise.reject(mB.create("app-offline"))
                }
              }
              const GB = {
                  fid: OB.fid,
                  registrationStatus: 1,
                  registrationTime: Date.now()
                },
                YB = async function(BB, OB) {
                  try {
                    const GB = await async function(BB, OB) {
                      let {
                        appConfig: GB,
                        heartbeatServiceProvider: YB
                      } = BB, {
                        fid: DB
                      } = OB;
                      const QB = FB(GB),
                        oB = gB(GB),
                        jB = YB.getImmediate({
                          optional: !0
                        });
                      if (jB) {
                        const BB = await jB.getHeartbeatsHeader();
                        BB && oB.append("x-firebase-client", BB)
                      }
                      const yB = {
                          fid: DB,
                          authVersion: dB,
                          appId: GB.appId,
                          sdkVersion: kB
                        },
                        JB = {
                          method: "POST",
                          headers: oB,
                          body: JSON.stringify(yB)
                        },
                        MB = await XB((() => fetch(QB, JB)));
                      if (MB.ok) {
                        const BB = await MB.json();
                        return {
                          fid: BB.fid || DB,
                          registrationStatus: 2,
                          refreshToken: BB.refreshToken,
                          authToken: iB(BB.authToken)
                        }
                      }
                      throw await LB("Create Installation", MB)
                    }(BB, OB);
                    return tB(BB.appConfig, GB)
                  } catch (GB) {
                    throw IB(GB) && 409 === GB.customData.serverCode ? await BO(BB.appConfig) : await tB(BB.appConfig, {
                      fid: OB.fid,
                      registrationStatus: 0
                    }), GB
                  }
                }(BB, GB);
              return {
                installationEntry: GB,
                registrationPromise: YB
              }
            }
            return 1 === OB.registrationStatus ? {
              installationEntry: OB,
              registrationPromise: YO(BB)
            } : {
              installationEntry: OB
            }
          }(BB, YB);
        return OB = DB.registrationPromise, DB.installationEntry
      }));
      return "" === GB.fid ? {
        installationEntry: await OB
      } : {
        installationEntry: GB,
        registrationPromise: OB
      }
    }
    async function YO(BB) {
      let OB = await DO(BB.appConfig);
      for (; 1 === OB.registrationStatus;) await wB(100), OB = await DO(BB.appConfig);
      if (0 === OB.registrationStatus) {
        const {
          installationEntry: OB,
          registrationPromise: GB
        } = await GO(BB);
        return GB || OB
      }
      return OB
    }

    function DO(BB) {
      return OO(BB, (BB => {
        if (!BB) throw mB.create("installation-not-found");
        return QO(BB)
      }))
    }

    function QO(BB) {
      return 1 === (OB = BB).registrationStatus && OB.registrationTime + fB < Date.now() ? {
        fid: BB.fid,
        registrationStatus: 0
      } : BB;
      var OB
    }
    async function oO(BB, OB) {
      let {
        appConfig: GB,
        heartbeatServiceProvider: YB
      } = BB;
      const DB = function(BB, OB) {
          let {
            fid: GB
          } = OB;
          return `${FB(BB)}/${GB}/authTokens:generate`
        }(GB, OB),
        QB = rB(GB, OB),
        oB = YB.getImmediate({
          optional: !0
        });
      if (oB) {
        const BB = await oB.getHeartbeatsHeader();
        BB && QB.append("x-firebase-client", BB)
      }
      const jB = {
          installation: {
            sdkVersion: kB,
            appId: GB.appId
          }
        },
        yB = {
          method: "POST",
          headers: QB,
          body: JSON.stringify(jB)
        },
        JB = await XB((() => fetch(DB, yB)));
      if (JB.ok) {
        return iB(await JB.json())
      }
      throw await LB("Generate Auth Token", JB)
    }
    async function jO(BB) {
      let OB, GB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const YB = await OO(BB.appConfig, (YB => {
        if (!JO(YB)) throw mB.create("not-registered");
        const DB = YB.authToken;
        if (!GB && function(BB) {
            return 2 === BB.requestStatus && ! function(BB) {
              const OB = Date.now();
              return OB < BB.creationTime || BB.creationTime + BB.expiresIn < OB + KB
            }(BB)
          }(DB)) return YB;
        if (1 === DB.requestStatus) return OB = async function(BB, OB) {
          let GB = await yO(BB.appConfig);
          for (; 1 === GB.authToken.requestStatus;) await wB(100), GB = await yO(BB.appConfig);
          const YB = GB.authToken;
          return 0 === YB.requestStatus ? jO(BB, OB) : YB
        }(BB, GB), YB;
        {
          if (!navigator.onLine) throw mB.create("app-offline");
          const GB = function(BB) {
            const OB = {
              requestStatus: 1,
              requestTime: Date.now()
            };
            return Object.assign(Object.assign({}, BB), {
              authToken: OB
            })
          }(YB);
          return OB = async function(BB, OB) {
            try {
              const GB = await oO(BB, OB),
                YB = Object.assign(Object.assign({}, OB), {
                  authToken: GB
                });
              return await tB(BB.appConfig, YB), GB
            } catch (GB) {
              if (!IB(GB) || 401 !== GB.customData.serverCode && 404 !== GB.customData.serverCode) {
                const GB = Object.assign(Object.assign({}, OB), {
                  authToken: {
                    requestStatus: 0
                  }
                });
                await tB(BB.appConfig, GB)
              } else await BO(BB.appConfig);
              throw GB
            }
          }(BB, GB), GB
        }
      }));
      return OB ? await OB : YB.authToken
    }

    function yO(BB) {
      return OO(BB, (BB => {
        if (!JO(BB)) throw mB.create("not-registered");
        const OB = BB.authToken;
        return 1 === (GB = OB).requestStatus && GB.requestTime + fB < Date.now() ? Object.assign(Object.assign({}, BB), {
          authToken: {
            requestStatus: 0
          }
        }) : BB;
        var GB
      }))
    }

    function JO(BB) {
      return void 0 !== BB && 2 === BB.registrationStatus
    }
    async function MO(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const GB = BB;
      await async function(BB) {
        const {
          registrationPromise: OB
        } = await GO(BB);
        OB && await OB
      }(GB);
      return (await jO(GB, OB)).token
    }

    function PO(BB) {
      return mB.create("missing-app-config-values", {
        valueName: BB
      })
    }
    const zO = "installations",
      lO = BB => {
        const OB = BB.getProvider("app").getImmediate(),
          GB = function(BB) {
            if (!BB || !BB.options) throw PO("App Configuration");
            if (!BB.name) throw PO("App Name");
            const OB = ["projectId", "apiKey", "appId"];
            for (const GB of OB)
              if (!BB.options[GB]) throw PO(GB);
            return {
              appName: BB.name,
              projectId: BB.options.projectId,
              apiKey: BB.options.apiKey,
              appId: BB.options.appId
            }
          }(OB);
        return {
          app: OB,
          appConfig: GB,
          heartbeatServiceProvider: (0, YB.D)(OB, "heartbeat"),
          _delete: () => Promise.resolve()
        }
      },
      pO = BB => {
        const OB = BB.getProvider("app").getImmediate(),
          GB = (0, YB.D)(OB, zO).getImmediate();
        return {
          getId: () => async function(BB) {
            const OB = BB,
              {
                installationEntry: GB,
                registrationPromise: YB
              } = await GO(OB);
            return YB ? YB.catch(console.error) : jO(OB).catch(console.error), GB.fid
          }(GB),
          getToken: BB => MO(GB, BB)
        }
      };
    (0, YB.F)(new oB.f(zO, lO, "PUBLIC")), (0, YB.F)(new oB.f("installations-internal", pO, "PRIVATE")), (0, YB.X)(nB, UB), (0, YB.X)(nB, UB, "esm2017");
    const qO = "analytics",
      ZO = "https://www.googletagmanager.com/gtag/js",
      NO = new DB.g("@firebase/analytics"),
      RO = {
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
      WO = new QB.f("analytics", "Analytics", RO);

    function AO(BB) {
      if (!BB.startsWith(ZO)) {
        const OB = WO.create("invalid-gtag-resource", {
          gtagURL: BB
        });
        return NO.warn(OB.message), ""
      }
      return BB
    }

    function VO(BB) {
      return Promise.all(BB.map((BB => BB.catch((BB => BB)))))
    }

    function SO(BB, OB) {
      const GB = function(BB, OB) {
          let GB;
          return window.trustedTypes && (GB = window.trustedTypes.createPolicy(BB, OB)), GB
        }("firebase-js-sdk-policy", {
          createScriptURL: AO
        }),
        YB = document.createElement("script"),
        DB = `${ZO}?l=${BB}&id=${OB}`;
      YB.src = GB ? null === GB || void 0 === GB ? void 0 : GB.createScriptURL(DB) : DB, YB.async = !0, document.head.appendChild(YB)
    }

    function nO(BB, OB, GB, YB) {
      return async function(DB) {
        try {
          for (var QB = arguments.length, oB = new Array(QB > 1 ? QB - 1 : 0), jB = 1; jB < QB; jB++) oB[jB - 1] = arguments[jB];
          if ("event" === DB) {
            const [YB, DB] = oB;
            await async function(BB, OB, GB, YB, DB) {
              try {
                let QB = [];
                if (DB && DB.send_to) {
                  let BB = DB.send_to;
                  Array.isArray(BB) || (BB = [BB]);
                  const YB = await VO(GB);
                  for (const GB of BB) {
                    const BB = YB.find((BB => BB.measurementId === GB)),
                      DB = BB && OB[BB.appId];
                    if (!DB) {
                      QB = [];
                      break
                    }
                    QB.push(DB)
                  }
                }
                0 === QB.length && (QB = Object.values(OB)), await Promise.all(QB), BB("event", YB, DB || {})
              } catch (QB) {
                NO.error(QB)
              }
            }(BB, OB, GB, YB, DB)
          } else if ("config" === DB) {
            const [DB, QB] = oB;
            await async function(BB, OB, GB, YB, DB, QB) {
              const oB = YB[DB];
              try {
                if (oB) await OB[oB];
                else {
                  const BB = (await VO(GB)).find((BB => BB.measurementId === DB));
                  BB && await OB[BB.appId]
                }
              } catch (jB) {
                NO.error(jB)
              }
              BB("config", DB, QB)
            }(BB, OB, GB, YB, DB, QB)
          } else if ("consent" === DB) {
            const [OB] = oB;
            BB("consent", "update", OB)
          } else if ("get" === DB) {
            const [OB, GB, YB] = oB;
            BB("get", OB, GB, YB)
          } else if ("set" === DB) {
            const [OB] = oB;
            BB("set", OB)
          } else BB(DB, ...oB)
        } catch (yB) {
          NO.error(yB)
        }
      }
    }
    const UO = new class {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
        this.throttleMetadata = BB, this.intervalMillis = OB
      }
      getThrottleMetadata(BB) {
        return this.throttleMetadata[BB]
      }
      setThrottleMetadata(BB, OB) {
        this.throttleMetadata[BB] = OB
      }
      deleteThrottleMetadata(BB) {
        delete this.throttleMetadata[BB]
      }
    };

    function fO(BB) {
      return new Headers({
        Accept: "application/json",
        "x-goog-api-key": BB
      })
    }
    async function kO(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UO,
        GB = arguments.length > 2 ? arguments[2] : void 0;
      const {
        appId: YB,
        apiKey: DB,
        measurementId: QB
      } = BB.options;
      if (!YB) throw WO.create("no-app-id");
      if (!DB) {
        if (QB) return {
          measurementId: QB,
          appId: YB
        };
        throw WO.create("no-api-key")
      }
      const oB = OB.getThrottleMetadata(YB) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        },
        jB = new KO;
      return setTimeout((async () => {
        jB.abort()
      }), void 0 !== GB ? GB : 6e4), dO({
        appId: YB,
        apiKey: DB,
        measurementId: QB
      }, oB, jB, OB)
    }
    async function dO(BB, OB, GB) {
      let {
        throttleEndTimeMillis: YB,
        backoffCount: DB
      } = OB, oB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : UO;
      var jB;
      const {
        appId: yB,
        measurementId: JB
      } = BB;
      try {
        await
        function(BB, OB) {
          return new Promise(((GB, YB) => {
            const DB = Math.max(OB - Date.now(), 0),
              QB = setTimeout(GB, DB);
            BB.addEventListener((() => {
              clearTimeout(QB), YB(WO.create("fetch-throttle", {
                throttleEndTimeMillis: OB
              }))
            }))
          }))
        }(GB, YB)
      } catch (MB) {
        if (JB) return NO.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${JB} provided in the "measurementId" field in the local Firebase config. [${null===MB||void 0===MB?void 0:MB.message}]`), {
          appId: yB,
          measurementId: JB
        };
        throw MB
      }
      try {
        const OB = await async function(BB) {
          var OB;
          const {
            appId: GB,
            apiKey: YB
          } = BB, DB = {
            method: "GET",
            headers: fO(YB)
          }, QB = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", GB), oB = await fetch(QB, DB);
          if (200 !== oB.status && 304 !== oB.status) {
            let BB = "";
            try {
              const GB = await oB.json();
              (null === (OB = GB.error) || void 0 === OB ? void 0 : OB.message) && (BB = GB.error.message)
            } catch (jB) {}
            throw WO.create("config-fetch-failed", {
              httpStatus: oB.status,
              responseMessage: BB
            })
          }
          return oB.json()
        }(BB);
        return oB.deleteThrottleMetadata(yB), OB
      } catch (MB) {
        const OB = MB;
        if (! function(BB) {
            if (!(BB instanceof QB.h) || !BB.customData) return !1;
            const OB = Number(BB.customData.httpStatus);
            return 429 === OB || 500 === OB || 503 === OB || 504 === OB
          }(OB)) {
          if (oB.deleteThrottleMetadata(yB), JB) return NO.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${JB} provided in the "measurementId" field in the local Firebase config. [${null===OB||void 0===OB?void 0:OB.message}]`), {
            appId: yB,
            measurementId: JB
          };
          throw MB
        }
        const YB = 503 === Number(null === (jB = null === OB || void 0 === OB ? void 0 : OB.customData) || void 0 === jB ? void 0 : jB.httpStatus) ? (0, QB.t)(DB, oB.intervalMillis, 30) : (0, QB.t)(DB, oB.intervalMillis),
          PB = {
            throttleEndTimeMillis: Date.now() + YB,
            backoffCount: DB + 1
          };
        return oB.setThrottleMetadata(yB, PB), NO.debug(`Calling attemptFetch again in ${YB} millis`), dO(BB, PB, GB, oB)
      }
    }
    class KO {
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
    let uO, mO;

    function IO(BB) {
      mO = BB
    }

    function FO(BB) {
      uO = BB
    }
    async function iO(BB, OB, GB, YB, DB, oB, jB) {
      var yB;
      const JB = kO(BB);
      JB.then((OB => {
        GB[OB.measurementId] = OB.appId, BB.options.measurementId && OB.measurementId !== BB.options.measurementId && NO.warn(`The measurement ID in the local Firebase config (${BB.options.measurementId}) does not match the measurement ID fetched from the server (${OB.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
      })).catch((BB => NO.error(BB))), OB.push(JB);
      const MB = async function() {
        if (!(0, QB.S)()) return NO.warn(WO.create("indexeddb-unavailable", {
          errorInfo: "IndexedDB is not available in this environment."
        }).message), !1;
        try {
          await (0, QB.ib)()
        } catch (BB) {
          return NO.warn(WO.create("indexeddb-unavailable", {
            errorInfo: null === BB || void 0 === BB ? void 0 : BB.toString()
          }).message), !1
        }
        return !0
      }().then((BB => BB ? YB.getId() : void 0)), [PB, zB] = await Promise.all([JB, MB]);
      (function(BB) {
        const OB = window.document.getElementsByTagName("script");
        for (const GB of Object.values(OB))
          if (GB.src && GB.src.includes(ZO) && GB.src.includes(BB)) return GB;
        return null
      })(oB) || SO(oB, PB.measurementId), mO && (DB("consent", "default", mO), IO(void 0)), DB("js", new Date);
      const lB = null !== (yB = null === jB || void 0 === jB ? void 0 : jB.config) && void 0 !== yB ? yB : {};
      return lB.origin = "firebase", lB.update = !0, null != zB && (lB.firebase_id = zB), DB("config", PB.measurementId, lB), uO && (DB("set", uO), FO(void 0)), PB.measurementId
    }
    class LO {
      constructor(BB) {
        this.app = BB
      }
      _delete() {
        return delete gO[this.app.options.appId], Promise.resolve()
      }
    }
    let gO = {},
      rO = [];
    const XO = {};
    let wO, EO, cO = "dataLayer",
      hO = "gtag",
      aO = !1;

    function eO(BB) {
      if (aO) throw WO.create("already-initialized");
      BB.dataLayerName && (cO = BB.dataLayerName), BB.gtagName && (hO = BB.gtagName)
    }

    function TO(BB, OB, GB) {
      ! function() {
        const BB = [];
        if ((0, QB.I)() && BB.push("This is a browser extension environment."), (0, QB.l)() || BB.push("Cookies are not available."), BB.length > 0) {
          const OB = BB.map(((BB, OB) => `(${OB+1}) ${BB}`)).join(" "),
            GB = WO.create("invalid-analytics-context", {
              errorInfo: OB
            });
          NO.warn(GB.message)
        }
      }();
      const YB = BB.options.appId;
      if (!YB) throw WO.create("no-app-id");
      if (!BB.options.apiKey) {
        if (!BB.options.measurementId) throw WO.create("no-api-key");
        NO.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${BB.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
      }
      if (null != gO[YB]) throw WO.create("already-exists", {
        id: YB
      });
      if (!aO) {
        ! function(BB) {
          let OB = [];
          Array.isArray(window[BB]) ? OB = window[BB] : window[BB] = OB
        }(cO);
        const {
          wrappedGtag: BB,
          gtagCore: OB
        } = function(BB, OB, GB, YB, DB) {
          let QB = function() {
            for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
            window[YB].push(arguments)
          };
          return window[DB] && "function" === typeof window[DB] && (QB = window[DB]), window[DB] = nO(QB, BB, OB, GB), {
            gtagCore: QB,
            wrappedGtag: window[DB]
          }
        }(gO, rO, XO, cO, hO);
        EO = BB, wO = OB, aO = !0
      }
      gO[YB] = iO(BB, rO, XO, OB, wO, cO, GB);
      return new LO(BB)
    }

    function bO() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, YB.S)();
      BB = (0, QB.E)(BB);
      const OB = (0, YB.D)(BB, qO);
      return OB.isInitialized() ? OB.getImmediate() : CO(BB)
    }

    function CO(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const GB = (0, YB.D)(BB, qO);
      if (GB.isInitialized()) {
        const BB = GB.getImmediate();
        if ((0, QB.v)(OB, GB.getOptions())) return BB;
        throw WO.create("already-initialized")
      }
      return GB.initialize({
        options: OB
      })
    }
    async function HO() {
      if ((0, QB.I)()) return !1;
      if (!(0, QB.l)()) return !1;
      if (!(0, QB.S)()) return !1;
      try {
        return await (0, QB.ib)()
      } catch (BB) {
        return !1
      }
    }

    function vO(BB, OB, GB) {
      BB = (0, QB.E)(BB), async function(BB, OB, GB, YB) {
        if (YB && YB.global) return BB("set", {
          screen_name: GB
        }), Promise.resolve();
        BB("config", await OB, {
          update: !0,
          screen_name: GB
        })
      }(EO, gO[BB.app.options.appId], OB, GB).catch((BB => NO.error(BB)))
    }
    async function sO(BB) {
      return BB = (0, QB.E)(BB), async function(BB, OB) {
        const GB = await OB;
        return new Promise(((OB, YB) => {
          BB("get", GB, "client_id", (BB => {
            BB || YB(WO.create("no-client-id")), OB(BB)
          }))
        }))
      }(EO, gO[BB.app.options.appId])
    }

    function xO(BB, OB, GB) {
      BB = (0, QB.E)(BB), async function(BB, OB, GB, YB) {
        if (YB && YB.global) return BB("set", {
          user_id: GB
        }), Promise.resolve();
        BB("config", await OB, {
          update: !0,
          user_id: GB
        })
      }(EO, gO[BB.app.options.appId], OB, GB).catch((BB => NO.error(BB)))
    }

    function tO(BB, OB, GB) {
      BB = (0, QB.E)(BB), async function(BB, OB, GB, YB) {
        if (YB && YB.global) {
          const OB = {};
          for (const BB of Object.keys(GB)) OB[`user_properties.${BB}`] = GB[BB];
          return BB("set", OB), Promise.resolve()
        }
        BB("config", await OB, {
          update: !0,
          user_properties: GB
        })
      }(EO, gO[BB.app.options.appId], OB, GB).catch((BB => NO.error(BB)))
    }

    function BG(BB, OB) {
      BB = (0, QB.E)(BB), async function(BB, OB) {
        const GB = await BB;
        window[`ga-disable-${GB}`] = !OB
      }(gO[BB.app.options.appId], OB).catch((BB => NO.error(BB)))
    }

    function OG(BB) {
      EO ? EO("set", BB) : FO(BB)
    }

    function GG(BB, OB, GB, YB) {
      BB = (0, QB.E)(BB), async function(BB, OB, GB, YB, DB) {
        if (DB && DB.global) BB("event", GB, YB);
        else {
          const DB = await OB;
          BB("event", GB, Object.assign(Object.assign({}, YB), {
            send_to: DB
          }))
        }
      }(EO, gO[BB.app.options.appId], OB, GB, YB).catch((BB => NO.error(BB)))
    }

    function YG(BB) {
      EO ? EO("consent", "update", BB) : IO(BB)
    }
    const DG = "@firebase/analytics",
      QG = "0.10.0";
    (0, YB.F)(new oB.f(qO, ((BB, OB) => {
      let {
        options: GB
      } = OB;
      return TO(BB.getProvider("app").getImmediate(), BB.getProvider("installations-internal").getImmediate(), GB)
    }), "PUBLIC")), (0, YB.F)(new oB.f("analytics-internal", (function(BB) {
      try {
        const OB = BB.getProvider(qO).getImmediate();
        return {
          logEvent: (BB, GB, YB) => GG(OB, BB, GB, YB)
        }
      } catch (OB) {
        throw WO.create("interop-component-reg-failed", {
          reason: OB
        })
      }
    }), "PRIVATE")), (0, YB.X)(DG, QG), (0, YB.X)(DG, QG, "esm2017")
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);