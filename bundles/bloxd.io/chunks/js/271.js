/*! For license information please see 7zvlu.271.71c09cfb.chunk.js.LICENSE.txt */
export const id = 271;
export const ids = [271];
export const modules = {
  40625: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      getAnalytics: () => Kj,
      getGoogleAnalyticsClientId: () => vj,
      initializeAnalytics: () => Cj,
      isSupported: () => cj,
      logEvent: () => zz,
      setAnalyticsCollectionEnabled: () => Bz,
      setConsent: () => Qz,
      setCurrentScreen: () => bj,
      setDefaultEventParameters: () => jz,
      setUserId: () => Rj,
      setUserProperties: () => Oj,
      settings: () => wj
    });
    var QB = zB(40601),
      nB = zB(40616),
      dB = zB(40611),
      IB = zB(40603);
    let NB, uB;
    const UB = new WeakMap,
      aB = new WeakMap,
      pB = new WeakMap,
      rB = new WeakMap,
      sB = new WeakMap;
    let JB = {
      get(BB, jB, zB) {
        if (BB instanceof IDBTransaction) {
          if ("done" === jB) return aB.get(BB);
          if ("objectStoreNames" === jB) return BB.objectStoreNames || pB.get(BB);
          if ("store" === jB) return zB.objectStoreNames[1] ? void 0 : zB.objectStore(zB.objectStoreNames[0])
        }
        return kB(BB[jB])
      },
      set: (BB, jB, zB) => (BB[jB] = zB, !0),
      has: (BB, jB) => BB instanceof IDBTransaction && ("done" === jB || "store" === jB) || jB in BB
    };

    function mB(BB) {
      return BB !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (uB || (uB = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(BB) ? function() {
        for (var jB = arguments.length, zB = new Array(jB), QB = 0; QB < jB; QB++) zB[QB] = arguments[QB];
        return BB.apply(GB(this), zB), kB(UB.get(this))
      } : function() {
        for (var jB = arguments.length, zB = new Array(jB), QB = 0; QB < jB; QB++) zB[QB] = arguments[QB];
        return kB(BB.apply(GB(this), zB))
      } : function(jB) {
        for (var zB = arguments.length, QB = new Array(zB > 1 ? zB - 1 : 0), nB = 1; nB < zB; nB++) QB[nB - 1] = arguments[nB];
        const dB = BB.call(GB(this), jB, ...QB);
        return pB.set(dB, jB.sort ? jB.sort() : [jB]), kB(dB)
      }
    }

    function yB(BB) {
      return "function" === typeof BB ? mB(BB) : (BB instanceof IDBTransaction && function(BB) {
        if (aB.has(BB)) return;
        const jB = new Promise(((jB, zB) => {
          const QB = () => {
              BB.removeEventListener("complete", nB), BB.removeEventListener("error", dB), BB.removeEventListener("abort", dB)
            },
            nB = () => {
              jB(), QB()
            },
            dB = () => {
              zB(BB.error || new DOMException("AbortError", "AbortError")), QB()
            };
          BB.addEventListener("complete", nB), BB.addEventListener("error", dB), BB.addEventListener("abort", dB)
        }));
        aB.set(BB, jB)
      }(BB), jB = BB, (NB || (NB = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((BB => jB instanceof BB)) ? new Proxy(BB, JB) : BB);
      var jB
    }

    function kB(BB) {
      if (BB instanceof IDBRequest) return function(BB) {
        const jB = new Promise(((jB, zB) => {
          const QB = () => {
              BB.removeEventListener("success", nB), BB.removeEventListener("error", dB)
            },
            nB = () => {
              jB(kB(BB.result)), QB()
            },
            dB = () => {
              zB(BB.error), QB()
            };
          BB.addEventListener("success", nB), BB.addEventListener("error", dB)
        }));
        return jB.then((jB => {
          jB instanceof IDBCursor && UB.set(jB, BB)
        })).catch((() => {})), sB.set(jB, BB), jB
      }(BB);
      if (rB.has(BB)) return rB.get(BB);
      const jB = yB(BB);
      return jB !== BB && (rB.set(BB, jB), sB.set(jB, BB)), jB
    }
    const GB = BB => sB.get(BB);
    const LB = ["get", "getKey", "getAll", "getAllKeys", "count"],
      gB = ["put", "add", "delete", "clear"],
      tB = new Map;

    function SB(BB, jB) {
      if (!(BB instanceof IDBDatabase) || jB in BB || "string" !== typeof jB) return;
      if (tB.get(jB)) return tB.get(jB);
      const zB = jB.replace(/FromIndex$/, ""),
        QB = jB !== zB,
        nB = gB.includes(zB);
      if (!(zB in (QB ? IDBIndex : IDBObjectStore).prototype) || !nB && !LB.includes(zB)) return;
      const dB = async function(BB) {
        const jB = this.transaction(BB, nB ? "readwrite" : "readonly");
        let dB = jB.store;
        for (var IB = arguments.length, NB = new Array(IB > 1 ? IB - 1 : 0), uB = 1; uB < IB; uB++) NB[uB - 1] = arguments[uB];
        return QB && (dB = dB.index(NB.shift())), (await Promise.all([dB[zB](...NB), nB && jB.done]))[0]
      };
      return tB.set(jB, dB), dB
    }
    JB = (BB => ({
      ...BB,
      get: (jB, zB, QB) => SB(jB, zB) || BB.get(jB, zB, QB),
      has: (jB, zB) => !!SB(jB, zB) || BB.has(jB, zB)
    }))(JB);
    const MB = "@firebase/installations",
      EB = "0.6.4",
      iB = 1e4,
      qB = `w:${EB}`,
      fB = "FIS_v2",
      oB = 36e5,
      HB = {
        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
        "not-registered": "Firebase Installation is not registered.",
        "installation-not-found": "Firebase Installation not found.",
        "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        "app-offline": "Could not process request. Application offline.",
        "delete-pending-registration": "Can't delete installation while there is a pending registration request."
      },
      DB = new dB.d("installations", "Installations", HB);

    function FB(BB) {
      return BB instanceof dB.g && BB.code.includes("request-failed")
    }

    function YB(BB) {
      let {
        projectId: jB
      } = BB;
      return `https://firebaseinstallations.googleapis.com/v1/projects/${jB}/installations`
    }

    function VB(BB) {
      return {
        token: BB.token,
        requestStatus: 2,
        expiresIn: (jB = BB.expiresIn, Number(jB.replace("s", "000"))),
        creationTime: Date.now()
      };
      var jB
    }
    async function hB(BB, jB) {
      const zB = (await jB.json()).error;
      return DB.create("request-failed", {
        requestName: BB,
        serverCode: zB.code,
        serverMessage: zB.message,
        serverStatus: zB.status
      })
    }

    function XB(BB) {
      let {
        apiKey: jB
      } = BB;
      return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": jB
      })
    }

    function ZB(BB, jB) {
      let {
        refreshToken: zB
      } = jB;
      const QB = XB(BB);
      return QB.append("Authorization", function(BB) {
        return `${fB} ${BB}`
      }(zB)), QB
    }
    async function AB(BB) {
      const jB = await BB();
      return jB.status >= 500 && jB.status < 600 ? BB() : jB
    }

    function TB(BB) {
      return new Promise((jB => {
        setTimeout(jB, BB)
      }))
    }
    const PB = /^[cdef][\w-]{21}$/;

    function WB() {
      try {
        const BB = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(BB), BB[0] = 112 + BB[0] % 16;
        const jB = function(BB) {
          const jB = (zB = BB, btoa(String.fromCharCode(...zB)).replace(/\+/g, "-").replace(/\//g, "_"));
          var zB;
          return jB.substr(0, 22)
        }(BB);
        return PB.test(jB) ? jB : ""
      } catch (BB) {
        return ""
      }
    }

    function eB(BB) {
      return `${BB.appName}!${BB.appId}`
    }
    const lB = new Map;

    function wB(BB, jB) {
      const zB = eB(BB);
      xB(zB, jB),
        function(BB, jB) {
          const zB = CB();
          zB && zB.postMessage({
            key: BB,
            fid: jB
          });
          cB()
        }(zB, jB)
    }

    function xB(BB, jB) {
      const zB = lB.get(BB);
      if (zB)
        for (const QB of zB) QB(jB)
    }
    let KB = null;

    function CB() {
      return !KB && "BroadcastChannel" in self && (KB = new BroadcastChannel("[Firebase] FID Change"), KB.onmessage = BB => {
        xB(BB.data.key, BB.data.fid)
      }), KB
    }

    function cB() {
      0 === lB.size && KB && (KB.close(), KB = null)
    }
    const bB = "firebase-installations-store";
    let vB = null;

    function RB() {
      return vB || (vB = function(BB, jB) {
        let {
          blocked: zB,
          upgrade: QB,
          blocking: nB,
          terminated: dB
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const IB = indexedDB.open(BB, jB),
          NB = kB(IB);
        return QB && IB.addEventListener("upgradeneeded", (BB => {
          QB(kB(IB.result), BB.oldVersion, BB.newVersion, kB(IB.transaction))
        })), zB && IB.addEventListener("blocked", (() => zB())), NB.then((BB => {
          dB && BB.addEventListener("close", (() => dB())), nB && BB.addEventListener("versionchange", (() => nB()))
        })).catch((() => {})), NB
      }("firebase-installations-database", 1, {
        upgrade: (BB, jB) => {
          if (0 === jB) BB.createObjectStore(bB)
        }
      })), vB
    }
    async function OB(BB, jB) {
      const zB = eB(BB),
        QB = (await RB()).transaction(bB, "readwrite"),
        nB = QB.objectStore(bB),
        dB = await nB.get(zB);
      return await nB.put(jB, zB), await QB.done, dB && dB.fid === jB.fid || wB(BB, jB.fid), jB
    }
    async function Bj(BB) {
      const jB = eB(BB),
        zB = (await RB()).transaction(bB, "readwrite");
      await zB.objectStore(bB).delete(jB), await zB.done
    }
    async function jj(BB, jB) {
      const zB = eB(BB),
        QB = (await RB()).transaction(bB, "readwrite"),
        nB = QB.objectStore(bB),
        dB = await nB.get(zB),
        IB = jB(dB);
      return void 0 === IB ? await nB.delete(zB) : await nB.put(IB, zB), await QB.done, !IB || dB && dB.fid === IB.fid || wB(BB, IB.fid), IB
    }
    async function zj(BB) {
      let jB;
      const zB = await jj(BB.appConfig, (zB => {
        const QB = function(BB) {
            const jB = BB || {
              fid: WB(),
              registrationStatus: 0
            };
            return dj(jB)
          }(zB),
          nB = function(BB, jB) {
            if (0 === jB.registrationStatus) {
              if (!navigator.onLine) {
                return {
                  installationEntry: jB,
                  registrationPromise: Promise.reject(DB.create("app-offline"))
                }
              }
              const zB = {
                  fid: jB.fid,
                  registrationStatus: 1,
                  registrationTime: Date.now()
                },
                QB = async function(BB, jB) {
                  try {
                    const zB = await async function(BB, jB) {
                      let {
                        appConfig: zB,
                        heartbeatServiceProvider: QB
                      } = BB, {
                        fid: nB
                      } = jB;
                      const dB = YB(zB),
                        IB = XB(zB),
                        NB = QB.getImmediate({
                          optional: !0
                        });
                      if (NB) {
                        const BB = await NB.getHeartbeatsHeader();
                        BB && IB.append("x-firebase-client", BB)
                      }
                      const uB = {
                          fid: nB,
                          authVersion: fB,
                          appId: zB.appId,
                          sdkVersion: qB
                        },
                        UB = {
                          method: "POST",
                          headers: IB,
                          body: JSON.stringify(uB)
                        },
                        aB = await AB((() => fetch(dB, UB)));
                      if (aB.ok) {
                        const BB = await aB.json();
                        return {
                          fid: BB.fid || nB,
                          registrationStatus: 2,
                          refreshToken: BB.refreshToken,
                          authToken: VB(BB.authToken)
                        }
                      }
                      throw await hB("Create Installation", aB)
                    }(BB, jB);
                    return OB(BB.appConfig, zB)
                  } catch (zB) {
                    throw FB(zB) && 409 === zB.customData.serverCode ? await Bj(BB.appConfig) : await OB(BB.appConfig, {
                      fid: jB.fid,
                      registrationStatus: 0
                    }), zB
                  }
                }(BB, zB);
              return {
                installationEntry: zB,
                registrationPromise: QB
              }
            }
            return 1 === jB.registrationStatus ? {
              installationEntry: jB,
              registrationPromise: Qj(BB)
            } : {
              installationEntry: jB
            }
          }(BB, QB);
        return jB = nB.registrationPromise, nB.installationEntry
      }));
      return "" === zB.fid ? {
        installationEntry: await jB
      } : {
        installationEntry: zB,
        registrationPromise: jB
      }
    }
    async function Qj(BB) {
      let jB = await nj(BB.appConfig);
      for (; 1 === jB.registrationStatus;) await TB(100), jB = await nj(BB.appConfig);
      if (0 === jB.registrationStatus) {
        const {
          installationEntry: jB,
          registrationPromise: zB
        } = await zj(BB);
        return zB || jB
      }
      return jB
    }

    function nj(BB) {
      return jj(BB, (BB => {
        if (!BB) throw DB.create("installation-not-found");
        return dj(BB)
      }))
    }

    function dj(BB) {
      return 1 === (jB = BB).registrationStatus && jB.registrationTime + iB < Date.now() ? {
        fid: BB.fid,
        registrationStatus: 0
      } : BB;
      var jB
    }
    async function Ij(BB, jB) {
      let {
        appConfig: zB,
        heartbeatServiceProvider: QB
      } = BB;
      const nB = function(BB, jB) {
          let {
            fid: zB
          } = jB;
          return `${YB(BB)}/${zB}/authTokens:generate`
        }(zB, jB),
        dB = ZB(zB, jB),
        IB = QB.getImmediate({
          optional: !0
        });
      if (IB) {
        const BB = await IB.getHeartbeatsHeader();
        BB && dB.append("x-firebase-client", BB)
      }
      const NB = {
          installation: {
            sdkVersion: qB,
            appId: zB.appId
          }
        },
        uB = {
          method: "POST",
          headers: dB,
          body: JSON.stringify(NB)
        },
        UB = await AB((() => fetch(nB, uB)));
      if (UB.ok) {
        return VB(await UB.json())
      }
      throw await hB("Generate Auth Token", UB)
    }
    async function Nj(BB) {
      let jB, zB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const QB = await jj(BB.appConfig, (QB => {
        if (!Uj(QB)) throw DB.create("not-registered");
        const nB = QB.authToken;
        if (!zB && function(BB) {
            return 2 === BB.requestStatus && ! function(BB) {
              const jB = Date.now();
              return jB < BB.creationTime || BB.creationTime + BB.expiresIn < jB + oB
            }(BB)
          }(nB)) return QB;
        if (1 === nB.requestStatus) return jB = async function(BB, jB) {
          let zB = await uj(BB.appConfig);
          for (; 1 === zB.authToken.requestStatus;) await TB(100), zB = await uj(BB.appConfig);
          const QB = zB.authToken;
          return 0 === QB.requestStatus ? Nj(BB, jB) : QB
        }(BB, zB), QB;
        {
          if (!navigator.onLine) throw DB.create("app-offline");
          const zB = function(BB) {
            const jB = {
              requestStatus: 1,
              requestTime: Date.now()
            };
            return Object.assign(Object.assign({}, BB), {
              authToken: jB
            })
          }(QB);
          return jB = async function(BB, jB) {
            try {
              const zB = await Ij(BB, jB),
                QB = Object.assign(Object.assign({}, jB), {
                  authToken: zB
                });
              return await OB(BB.appConfig, QB), zB
            } catch (zB) {
              if (!FB(zB) || 401 !== zB.customData.serverCode && 404 !== zB.customData.serverCode) {
                const zB = Object.assign(Object.assign({}, jB), {
                  authToken: {
                    requestStatus: 0
                  }
                });
                await OB(BB.appConfig, zB)
              } else await Bj(BB.appConfig);
              throw zB
            }
          }(BB, zB), zB
        }
      }));
      return jB ? await jB : QB.authToken
    }

    function uj(BB) {
      return jj(BB, (BB => {
        if (!Uj(BB)) throw DB.create("not-registered");
        const jB = BB.authToken;
        return 1 === (zB = jB).requestStatus && zB.requestTime + iB < Date.now() ? Object.assign(Object.assign({}, BB), {
          authToken: {
            requestStatus: 0
          }
        }) : BB;
        var zB
      }))
    }

    function Uj(BB) {
      return void 0 !== BB && 2 === BB.registrationStatus
    }
    async function aj(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const zB = BB;
      await async function(BB) {
        const {
          registrationPromise: jB
        } = await zj(BB);
        jB && await jB
      }(zB);
      return (await Nj(zB, jB)).token
    }

    function pj(BB) {
      return DB.create("missing-app-config-values", {
        valueName: BB
      })
    }
    const rj = "installations",
      sj = BB => {
        const jB = BB.getProvider("app").getImmediate(),
          zB = function(BB) {
            if (!BB || !BB.options) throw pj("App Configuration");
            if (!BB.name) throw pj("App Name");
            const jB = ["projectId", "apiKey", "appId"];
            for (const zB of jB)
              if (!BB.options[zB]) throw pj(zB);
            return {
              appName: BB.name,
              projectId: BB.options.projectId,
              apiKey: BB.options.apiKey,
              appId: BB.options.appId
            }
          }(jB);
        return {
          app: jB,
          appConfig: zB,
          heartbeatServiceProvider: (0, QB.z)(jB, "heartbeat"),
          _delete: () => Promise.resolve()
        }
      },
      Jj = BB => {
        const jB = BB.getProvider("app").getImmediate(),
          zB = (0, QB.z)(jB, rj).getImmediate();
        return {
          getId: () => async function(BB) {
            const jB = BB,
              {
                installationEntry: zB,
                registrationPromise: QB
              } = await zj(jB);
            return QB ? QB.catch(console.error) : Nj(jB).catch(console.error), zB.fid
          }(zB),
          getToken: BB => aj(zB, BB)
        }
      };
    (0, QB.D)(new IB.d(rj, sj, "PUBLIC")), (0, QB.D)(new IB.d("installations-internal", Jj, "PRIVATE")), (0, QB.X)(MB, EB), (0, QB.X)(MB, EB, "esm2017");
    const mj = "analytics",
      yj = "https://www.googletagmanager.com/gtag/js",
      kj = new nB.c("@firebase/analytics"),
      Gj = {
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
      Lj = new dB.d("analytics", "Analytics", Gj);

    function gj(BB) {
      if (!BB.startsWith(yj)) {
        const jB = Lj.create("invalid-gtag-resource", {
          gtagURL: BB
        });
        return kj.warn(jB.message), ""
      }
      return BB
    }

    function tj(BB) {
      return Promise.all(BB.map((BB => BB.catch((BB => BB)))))
    }

    function Sj(BB, jB) {
      const zB = function(BB, jB) {
          let zB;
          return window.trustedTypes && (zB = window.trustedTypes.createPolicy(BB, jB)), zB
        }("firebase-js-sdk-policy", {
          createScriptURL: gj
        }),
        QB = document.createElement("script"),
        nB = `${yj}?l=${BB}&id=${jB}`;
      QB.src = zB ? null === zB || void 0 === zB ? void 0 : zB.createScriptURL(nB) : nB, QB.async = !0, document.head.appendChild(QB)
    }

    function Mj(BB, jB, zB, QB) {
      return async function(nB) {
        try {
          for (var dB = arguments.length, IB = new Array(dB > 1 ? dB - 1 : 0), NB = 1; NB < dB; NB++) IB[NB - 1] = arguments[NB];
          if ("event" === nB) {
            const [QB, nB] = IB;
            await async function(BB, jB, zB, QB, nB) {
              try {
                let dB = [];
                if (nB && nB.send_to) {
                  let BB = nB.send_to;
                  Array.isArray(BB) || (BB = [BB]);
                  const QB = await tj(zB);
                  for (const zB of BB) {
                    const BB = QB.find((BB => BB.measurementId === zB)),
                      nB = BB && jB[BB.appId];
                    if (!nB) {
                      dB = [];
                      break
                    }
                    dB.push(nB)
                  }
                }
                0 === dB.length && (dB = Object.values(jB)), await Promise.all(dB), BB("event", QB, nB || {})
              } catch (dB) {
                kj.error(dB)
              }
            }(BB, jB, zB, QB, nB)
          } else if ("config" === nB) {
            const [nB, dB] = IB;
            await async function(BB, jB, zB, QB, nB, dB) {
              const IB = QB[nB];
              try {
                if (IB) await jB[IB];
                else {
                  const BB = (await tj(zB)).find((BB => BB.measurementId === nB));
                  BB && await jB[BB.appId]
                }
              } catch (NB) {
                kj.error(NB)
              }
              BB("config", nB, dB)
            }(BB, jB, zB, QB, nB, dB)
          } else if ("consent" === nB) {
            const [jB] = IB;
            BB("consent", "update", jB)
          } else if ("get" === nB) {
            const [jB, zB, QB] = IB;
            BB("get", jB, zB, QB)
          } else if ("set" === nB) {
            const [jB] = IB;
            BB("set", jB)
          } else BB(nB, ...IB)
        } catch (uB) {
          kj.error(uB)
        }
      }
    }
    const Ej = new class {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
        this.throttleMetadata = BB, this.intervalMillis = jB
      }
      getThrottleMetadata(BB) {
        return this.throttleMetadata[BB]
      }
      setThrottleMetadata(BB, jB) {
        this.throttleMetadata[BB] = jB
      }
      deleteThrottleMetadata(BB) {
        delete this.throttleMetadata[BB]
      }
    };

    function ij(BB) {
      return new Headers({
        Accept: "application/json",
        "x-goog-api-key": BB
      })
    }
    async function qj(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ej,
        zB = arguments.length > 2 ? arguments[2] : void 0;
      const {
        appId: QB,
        apiKey: nB,
        measurementId: dB
      } = BB.options;
      if (!QB) throw Lj.create("no-app-id");
      if (!nB) {
        if (dB) return {
          measurementId: dB,
          appId: QB
        };
        throw Lj.create("no-api-key")
      }
      const IB = jB.getThrottleMetadata(QB) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        },
        NB = new oj;
      return setTimeout((async () => {
        NB.abort()
      }), void 0 !== zB ? zB : 6e4), fj({
        appId: QB,
        apiKey: nB,
        measurementId: dB
      }, IB, NB, jB)
    }
    async function fj(BB, jB, zB) {
      let {
        throttleEndTimeMillis: QB,
        backoffCount: nB
      } = jB, IB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ej;
      var NB;
      const {
        appId: uB,
        measurementId: UB
      } = BB;
      try {
        await
        function(BB, jB) {
          return new Promise(((zB, QB) => {
            const nB = Math.max(jB - Date.now(), 0),
              dB = setTimeout(zB, nB);
            BB.addEventListener((() => {
              clearTimeout(dB), QB(Lj.create("fetch-throttle", {
                throttleEndTimeMillis: jB
              }))
            }))
          }))
        }(zB, QB)
      } catch (aB) {
        if (UB) return kj.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${UB} provided in the "measurementId" field in the local Firebase config. [${null===aB||void 0===aB?void 0:aB.message}]`), {
          appId: uB,
          measurementId: UB
        };
        throw aB
      }
      try {
        const jB = await async function(BB) {
          var jB;
          const {
            appId: zB,
            apiKey: QB
          } = BB, nB = {
            method: "GET",
            headers: ij(QB)
          }, dB = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", zB), IB = await fetch(dB, nB);
          if (200 !== IB.status && 304 !== IB.status) {
            let BB = "";
            try {
              const zB = await IB.json();
              (null === (jB = zB.error) || void 0 === jB ? void 0 : jB.message) && (BB = zB.error.message)
            } catch (NB) {}
            throw Lj.create("config-fetch-failed", {
              httpStatus: IB.status,
              responseMessage: BB
            })
          }
          return IB.json()
        }(BB);
        return IB.deleteThrottleMetadata(uB), jB
      } catch (aB) {
        const jB = aB;
        if (! function(BB) {
            if (!(BB instanceof dB.g) || !BB.customData) return !1;
            const jB = Number(BB.customData.httpStatus);
            return 429 === jB || 500 === jB || 503 === jB || 504 === jB
          }(jB)) {
          if (IB.deleteThrottleMetadata(uB), UB) return kj.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${UB} provided in the "measurementId" field in the local Firebase config. [${null===jB||void 0===jB?void 0:jB.message}]`), {
            appId: uB,
            measurementId: UB
          };
          throw aB
        }
        const QB = 503 === Number(null === (NB = null === jB || void 0 === jB ? void 0 : jB.customData) || void 0 === NB ? void 0 : NB.httpStatus) ? (0, dB.s)(nB, IB.intervalMillis, 30) : (0, dB.s)(nB, IB.intervalMillis),
          pB = {
            throttleEndTimeMillis: Date.now() + QB,
            backoffCount: nB + 1
          };
        return IB.setThrottleMetadata(uB, pB), kj.debug(`Calling attemptFetch again in ${QB} millis`), fj(BB, pB, zB, IB)
      }
    }
    class oj {
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
    let Hj, Dj;

    function Fj(BB) {
      Dj = BB
    }

    function Yj(BB) {
      Hj = BB
    }
    async function Vj(BB, jB, zB, QB, nB, IB, NB) {
      var uB;
      const UB = qj(BB);
      UB.then((jB => {
        zB[jB.measurementId] = jB.appId, BB.options.measurementId && jB.measurementId !== BB.options.measurementId && kj.warn(`The measurement ID in the local Firebase config (${BB.options.measurementId}) does not match the measurement ID fetched from the server (${jB.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
      })).catch((BB => kj.error(BB))), jB.push(UB);
      const aB = async function() {
        if (!(0, dB.P)()) return kj.warn(Lj.create("indexeddb-unavailable", {
          errorInfo: "IndexedDB is not available in this environment."
        }).message), !1;
        try {
          await (0, dB.db)()
        } catch (BB) {
          return kj.warn(Lj.create("indexeddb-unavailable", {
            errorInfo: null === BB || void 0 === BB ? void 0 : BB.toString()
          }).message), !1
        }
        return !0
      }().then((BB => BB ? QB.getId() : void 0)), [pB, rB] = await Promise.all([UB, aB]);
      (function(BB) {
        const jB = window.document.getElementsByTagName("script");
        for (const zB of Object.values(jB))
          if (zB.src && zB.src.includes(yj) && zB.src.includes(BB)) return zB;
        return null
      })(IB) || Sj(IB, pB.measurementId), Dj && (nB("consent", "default", Dj), Fj(void 0)), nB("js", new Date);
      const sB = null !== (uB = null === NB || void 0 === NB ? void 0 : NB.config) && void 0 !== uB ? uB : {};
      return sB.origin = "firebase", sB.update = !0, null != rB && (sB.firebase_id = rB), nB("config", pB.measurementId, sB), Hj && (nB("set", Hj), Yj(void 0)), pB.measurementId
    }
    class hj {
      constructor(BB) {
        this.app = BB
      }
      _delete() {
        return delete Xj[this.app.options.appId], Promise.resolve()
      }
    }
    let Xj = {},
      Zj = [];
    const Aj = {};
    let Tj, Pj, Wj = "dataLayer",
      ej = "gtag",
      lj = !1;

    function wj(BB) {
      if (lj) throw Lj.create("already-initialized");
      BB.dataLayerName && (Wj = BB.dataLayerName), BB.gtagName && (ej = BB.gtagName)
    }

    function xj(BB, jB, zB) {
      ! function() {
        const BB = [];
        if ((0, dB.K)() && BB.push("This is a browser extension environment."), (0, dB.i)() || BB.push("Cookies are not available."), BB.length > 0) {
          const jB = BB.map(((BB, jB) => `(${jB+1}) ${BB}`)).join(" "),
            zB = Lj.create("invalid-analytics-context", {
              errorInfo: jB
            });
          kj.warn(zB.message)
        }
      }();
      const QB = BB.options.appId;
      if (!QB) throw Lj.create("no-app-id");
      if (!BB.options.apiKey) {
        if (!BB.options.measurementId) throw Lj.create("no-api-key");
        kj.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${BB.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
      }
      if (null != Xj[QB]) throw Lj.create("already-exists", {
        id: QB
      });
      if (!lj) {
        ! function(BB) {
          let jB = [];
          Array.isArray(window[BB]) ? jB = window[BB] : window[BB] = jB
        }(Wj);
        const {
          wrappedGtag: BB,
          gtagCore: jB
        } = function(BB, jB, zB, QB, nB) {
          let dB = function() {
            for (var BB = arguments.length, jB = new Array(BB), zB = 0; zB < BB; zB++) jB[zB] = arguments[zB];
            window[QB].push(arguments)
          };
          return window[nB] && "function" === typeof window[nB] && (dB = window[nB]), window[nB] = Mj(dB, BB, jB, zB), {
            gtagCore: dB,
            wrappedGtag: window[nB]
          }
        }(Xj, Zj, Aj, Wj, ej);
        Pj = BB, Tj = jB, lj = !0
      }
      Xj[QB] = Vj(BB, Zj, Aj, jB, Tj, Wj, zB);
      return new hj(BB)
    }

    function Kj() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, QB.N)();
      BB = (0, dB.H)(BB);
      const jB = (0, QB.z)(BB, mj);
      return jB.isInitialized() ? jB.getImmediate() : Cj(BB)
    }

    function Cj(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const zB = (0, QB.z)(BB, mj);
      if (zB.isInitialized()) {
        const BB = zB.getImmediate();
        if ((0, dB.x)(jB, zB.getOptions())) return BB;
        throw Lj.create("already-initialized")
      }
      return zB.initialize({
        options: jB
      })
    }
    async function cj() {
      if ((0, dB.K)()) return !1;
      if (!(0, dB.i)()) return !1;
      if (!(0, dB.P)()) return !1;
      try {
        return await (0, dB.db)()
      } catch (BB) {
        return !1
      }
    }

    function bj(BB, jB, zB) {
      BB = (0, dB.H)(BB), async function(BB, jB, zB, QB) {
        if (QB && QB.global) return BB("set", {
          screen_name: zB
        }), Promise.resolve();
        BB("config", await jB, {
          update: !0,
          screen_name: zB
        })
      }(Pj, Xj[BB.app.options.appId], jB, zB).catch((BB => kj.error(BB)))
    }
    async function vj(BB) {
      return BB = (0, dB.H)(BB), async function(BB, jB) {
        const zB = await jB;
        return new Promise(((jB, QB) => {
          BB("get", zB, "client_id", (BB => {
            BB || QB(Lj.create("no-client-id")), jB(BB)
          }))
        }))
      }(Pj, Xj[BB.app.options.appId])
    }

    function Rj(BB, jB, zB) {
      BB = (0, dB.H)(BB), async function(BB, jB, zB, QB) {
        if (QB && QB.global) return BB("set", {
          user_id: zB
        }), Promise.resolve();
        BB("config", await jB, {
          update: !0,
          user_id: zB
        })
      }(Pj, Xj[BB.app.options.appId], jB, zB).catch((BB => kj.error(BB)))
    }

    function Oj(BB, jB, zB) {
      BB = (0, dB.H)(BB), async function(BB, jB, zB, QB) {
        if (QB && QB.global) {
          const jB = {};
          for (const BB of Object.keys(zB)) jB[`user_properties.${BB}`] = zB[BB];
          return BB("set", jB), Promise.resolve()
        }
        BB("config", await jB, {
          update: !0,
          user_properties: zB
        })
      }(Pj, Xj[BB.app.options.appId], jB, zB).catch((BB => kj.error(BB)))
    }

    function Bz(BB, jB) {
      BB = (0, dB.H)(BB), async function(BB, jB) {
        const zB = await BB;
        window[`ga-disable-${zB}`] = !jB
      }(Xj[BB.app.options.appId], jB).catch((BB => kj.error(BB)))
    }

    function jz(BB) {
      Pj ? Pj("set", BB) : Yj(BB)
    }

    function zz(BB, jB, zB, QB) {
      BB = (0, dB.H)(BB), async function(BB, jB, zB, QB, nB) {
        if (nB && nB.global) BB("event", zB, QB);
        else {
          const nB = await jB;
          BB("event", zB, Object.assign(Object.assign({}, QB), {
            send_to: nB
          }))
        }
      }(Pj, Xj[BB.app.options.appId], jB, zB, QB).catch((BB => kj.error(BB)))
    }

    function Qz(BB) {
      Pj ? Pj("consent", "update", BB) : Fj(BB)
    }
    const nz = "@firebase/analytics",
      dz = "0.10.0";
    (0, QB.D)(new IB.d(mj, ((BB, jB) => {
      let {
        options: zB
      } = jB;
      return xj(BB.getProvider("app").getImmediate(), BB.getProvider("installations-internal").getImmediate(), zB)
    }), "PUBLIC")), (0, QB.D)(new IB.d("analytics-internal", (function(BB) {
      try {
        const jB = BB.getProvider(mj).getImmediate();
        return {
          logEvent: (BB, zB, QB) => zz(jB, BB, zB, QB)
        }
      } catch (jB) {
        throw Lj.create("interop-component-reg-failed", {
          reason: jB
        })
      }
    }), "PRIVATE")), (0, QB.X)(nz, dz), (0, QB.X)(nz, dz, "esm2017")
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);