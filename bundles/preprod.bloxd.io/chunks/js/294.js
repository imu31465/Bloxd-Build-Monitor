/*! For license information please see fo1voe.294.fcb376e9.chunk.js.LICENSE.txt */
export const id = 294;
export const ids = [294];
export const modules = {
  41619: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      getAnalytics: () => Xr,
      getGoogleAnalyticsClientId: () => Tr,
      initializeAnalytics: () => Ir,
      isSupported: () => Kr,
      logEvent: () => ii,
      setAnalyticsCollectionEnabled: () => Mi,
      setConsent: () => Oi,
      setCurrentScreen: () => qr,
      setDefaultEventParameters: () => ri,
      setUserId: () => Vr,
      setUserProperties: () => cr,
      settings: () => Fr
    });
    var OM = iM(41598),
      SM = iM(41614),
      jM = iM(41611),
      aM = iM(41605);
    let PM, nM;
    const QM = new WeakMap,
      zM = new WeakMap,
      LM = new WeakMap,
      mM = new WeakMap,
      HM = new WeakMap;
    let hM = {
      get(MM, rM, iM) {
        if (MM instanceof IDBTransaction) {
          if ("done" === rM) return zM.get(MM);
          if ("objectStoreNames" === rM) return MM.objectStoreNames || LM.get(MM);
          if ("store" === rM) return iM.objectStoreNames[1] ? void 0 : iM.objectStore(iM.objectStoreNames[0])
        }
        return yM(MM[rM])
      },
      set: (MM, rM, iM) => (MM[rM] = iM, !0),
      has: (MM, rM) => MM instanceof IDBTransaction && ("done" === rM || "store" === rM) || rM in MM
    };

    function JM(MM) {
      return MM !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (nM || (nM = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(MM) ? function() {
        for (var rM = arguments.length, iM = new Array(rM), OM = 0; OM < rM; OM++) iM[OM] = arguments[OM];
        return MM.apply(lM(this), iM), yM(QM.get(this))
      } : function() {
        for (var rM = arguments.length, iM = new Array(rM), OM = 0; OM < rM; OM++) iM[OM] = arguments[OM];
        return yM(MM.apply(lM(this), iM))
      } : function(rM) {
        for (var iM = arguments.length, OM = new Array(iM > 1 ? iM - 1 : 0), SM = 1; SM < iM; SM++) OM[SM - 1] = arguments[SM];
        const jM = MM.call(lM(this), rM, ...OM);
        return LM.set(jM, rM.sort ? rM.sort() : [rM]), yM(jM)
      }
    }

    function dM(MM) {
      return "function" === typeof MM ? JM(MM) : (MM instanceof IDBTransaction && function(MM) {
        if (zM.has(MM)) return;
        const rM = new Promise(((rM, iM) => {
          const OM = () => {
              MM.removeEventListener("complete", SM), MM.removeEventListener("error", jM), MM.removeEventListener("abort", jM)
            },
            SM = () => {
              rM(), OM()
            },
            jM = () => {
              iM(MM.error || new DOMException("AbortError", "AbortError")), OM()
            };
          MM.addEventListener("complete", SM), MM.addEventListener("error", jM), MM.addEventListener("abort", jM)
        }));
        zM.set(MM, rM)
      }(MM), rM = MM, (PM || (PM = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((MM => rM instanceof MM)) ? new Proxy(MM, hM) : MM);
      var rM
    }

    function yM(MM) {
      if (MM instanceof IDBRequest) return function(MM) {
        const rM = new Promise(((rM, iM) => {
          const OM = () => {
              MM.removeEventListener("success", SM), MM.removeEventListener("error", jM)
            },
            SM = () => {
              rM(yM(MM.result)), OM()
            },
            jM = () => {
              iM(MM.error), OM()
            };
          MM.addEventListener("success", SM), MM.addEventListener("error", jM)
        }));
        return rM.then((rM => {
          rM instanceof IDBCursor && QM.set(rM, MM)
        })).catch((() => {})), HM.set(rM, MM), rM
      }(MM);
      if (mM.has(MM)) return mM.get(MM);
      const rM = dM(MM);
      return rM !== MM && (mM.set(MM, rM), HM.set(rM, MM)), rM
    }
    const lM = MM => HM.get(MM);
    const EM = ["get", "getKey", "getAll", "getAllKeys", "count"],
      UM = ["put", "add", "delete", "clear"],
      GM = new Map;

    function CM(MM, rM) {
      if (!(MM instanceof IDBDatabase) || rM in MM || "string" !== typeof rM) return;
      if (GM.get(rM)) return GM.get(rM);
      const iM = rM.replace(/FromIndex$/, ""),
        OM = rM !== iM,
        SM = UM.includes(iM);
      if (!(iM in (OM ? IDBIndex : IDBObjectStore).prototype) || !SM && !EM.includes(iM)) return;
      const jM = async function(MM) {
        const rM = this.transaction(MM, SM ? "readwrite" : "readonly");
        let jM = rM.store;
        for (var aM = arguments.length, PM = new Array(aM > 1 ? aM - 1 : 0), nM = 1; nM < aM; nM++) PM[nM - 1] = arguments[nM];
        return OM && (jM = jM.index(PM.shift())), (await Promise.all([jM[iM](...PM), SM && rM.done]))[0]
      };
      return GM.set(rM, jM), jM
    }
    hM = (MM => ({
      ...MM,
      get: (rM, iM, OM) => CM(rM, iM) || MM.get(rM, iM, OM),
      has: (rM, iM) => !!CM(rM, iM) || MM.has(rM, iM)
    }))(hM);
    const eM = "@firebase/installations",
      bM = "0.6.4",
      wM = 1e4,
      tM = `w:${bM}`,
      gM = "FIS_v2",
      uM = 36e5,
      RM = {
        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
        "not-registered": "Firebase Installation is not registered.",
        "installation-not-found": "Firebase Installation not found.",
        "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        "app-offline": "Could not process request. Application offline.",
        "delete-pending-registration": "Can't delete installation while there is a pending registration request."
      },
      pM = new jM.h("installations", "Installations", RM);

    function WM(MM) {
      return MM instanceof jM.j && MM.code.includes("request-failed")
    }

    function sM(MM) {
      let {
        projectId: rM
      } = MM;
      return `https://firebaseinstallations.googleapis.com/v1/projects/${rM}/installations`
    }

    function DM(MM) {
      return {
        token: MM.token,
        requestStatus: 2,
        expiresIn: (rM = MM.expiresIn, Number(rM.replace("s", "000"))),
        creationTime: Date.now()
      };
      var rM
    }
    async function kM(MM, rM) {
      const iM = (await rM.json()).error;
      return pM.create("request-failed", {
        requestName: MM,
        serverCode: iM.code,
        serverMessage: iM.message,
        serverStatus: iM.status
      })
    }

    function ZM(MM) {
      let {
        apiKey: rM
      } = MM;
      return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": rM
      })
    }

    function oM(MM, rM) {
      let {
        refreshToken: iM
      } = rM;
      const OM = ZM(MM);
      return OM.append("Authorization", function(MM) {
        return `${gM} ${MM}`
      }(iM)), OM
    }
    async function fM(MM) {
      const rM = await MM();
      return rM.status >= 500 && rM.status < 600 ? MM() : rM
    }

    function YM(MM) {
      return new Promise((rM => {
        setTimeout(rM, MM)
      }))
    }
    const NM = /^[cdef][\w-]{21}$/;

    function AM() {
      try {
        const MM = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(MM), MM[0] = 112 + MM[0] % 16;
        const rM = function(MM) {
          const rM = (iM = MM, btoa(String.fromCharCode(...iM)).replace(/\+/g, "-").replace(/\//g, "_"));
          var iM;
          return rM.substr(0, 22)
        }(MM);
        return NM.test(rM) ? rM : ""
      } catch (MM) {
        return ""
      }
    }

    function xM(MM) {
      return `${MM.appName}!${MM.appId}`
    }
    const vM = new Map;

    function FM(MM, rM) {
      const iM = xM(MM);
      BM(iM, rM),
        function(MM, rM) {
          const iM = IM();
          iM && iM.postMessage({
            key: MM,
            fid: rM
          });
          KM()
        }(iM, rM)
    }

    function BM(MM, rM) {
      const iM = vM.get(MM);
      if (iM)
        for (const OM of iM) OM(rM)
    }
    let XM = null;

    function IM() {
      return !XM && "BroadcastChannel" in self && (XM = new BroadcastChannel("[Firebase] FID Change"), XM.onmessage = MM => {
        BM(MM.data.key, MM.data.fid)
      }), XM
    }

    function KM() {
      0 === vM.size && XM && (XM.close(), XM = null)
    }
    const qM = "firebase-installations-store";
    let TM = null;

    function VM() {
      return TM || (TM = function(MM, rM) {
        let {
          blocked: iM,
          upgrade: OM,
          blocking: SM,
          terminated: jM
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const aM = indexedDB.open(MM, rM),
          PM = yM(aM);
        return OM && aM.addEventListener("upgradeneeded", (MM => {
          OM(yM(aM.result), MM.oldVersion, MM.newVersion, yM(aM.transaction))
        })), iM && aM.addEventListener("blocked", (() => iM())), PM.then((MM => {
          jM && MM.addEventListener("close", (() => jM())), SM && MM.addEventListener("versionchange", (() => SM()))
        })).catch((() => {})), PM
      }("firebase-installations-database", 1, {
        upgrade: (MM, rM) => {
          if (0 === rM) MM.createObjectStore(qM)
        }
      })), TM
    }
    async function cM(MM, rM) {
      const iM = xM(MM),
        OM = (await VM()).transaction(qM, "readwrite"),
        SM = OM.objectStore(qM),
        jM = await SM.get(iM);
      return await SM.put(rM, iM), await OM.done, jM && jM.fid === rM.fid || FM(MM, rM.fid), rM
    }
    async function Mr(MM) {
      const rM = xM(MM),
        iM = (await VM()).transaction(qM, "readwrite");
      await iM.objectStore(qM).delete(rM), await iM.done
    }
    async function rr(MM, rM) {
      const iM = xM(MM),
        OM = (await VM()).transaction(qM, "readwrite"),
        SM = OM.objectStore(qM),
        jM = await SM.get(iM),
        aM = rM(jM);
      return void 0 === aM ? await SM.delete(iM) : await SM.put(aM, iM), await OM.done, !aM || jM && jM.fid === aM.fid || FM(MM, aM.fid), aM
    }
    async function ir(MM) {
      let rM;
      const iM = await rr(MM.appConfig, (iM => {
        const OM = function(MM) {
            const rM = MM || {
              fid: AM(),
              registrationStatus: 0
            };
            return jr(rM)
          }(iM),
          SM = function(MM, rM) {
            if (0 === rM.registrationStatus) {
              if (!navigator.onLine) {
                return {
                  installationEntry: rM,
                  registrationPromise: Promise.reject(pM.create("app-offline"))
                }
              }
              const iM = {
                  fid: rM.fid,
                  registrationStatus: 1,
                  registrationTime: Date.now()
                },
                OM = async function(MM, rM) {
                  try {
                    const iM = await async function(MM, rM) {
                      let {
                        appConfig: iM,
                        heartbeatServiceProvider: OM
                      } = MM, {
                        fid: SM
                      } = rM;
                      const jM = sM(iM),
                        aM = ZM(iM),
                        PM = OM.getImmediate({
                          optional: !0
                        });
                      if (PM) {
                        const MM = await PM.getHeartbeatsHeader();
                        MM && aM.append("x-firebase-client", MM)
                      }
                      const nM = {
                          fid: SM,
                          authVersion: gM,
                          appId: iM.appId,
                          sdkVersion: tM
                        },
                        QM = {
                          method: "POST",
                          headers: aM,
                          body: JSON.stringify(nM)
                        },
                        zM = await fM((() => fetch(jM, QM)));
                      if (zM.ok) {
                        const MM = await zM.json();
                        return {
                          fid: MM.fid || SM,
                          registrationStatus: 2,
                          refreshToken: MM.refreshToken,
                          authToken: DM(MM.authToken)
                        }
                      }
                      throw await kM("Create Installation", zM)
                    }(MM, rM);
                    return cM(MM.appConfig, iM)
                  } catch (iM) {
                    throw WM(iM) && 409 === iM.customData.serverCode ? await Mr(MM.appConfig) : await cM(MM.appConfig, {
                      fid: rM.fid,
                      registrationStatus: 0
                    }), iM
                  }
                }(MM, iM);
              return {
                installationEntry: iM,
                registrationPromise: OM
              }
            }
            return 1 === rM.registrationStatus ? {
              installationEntry: rM,
              registrationPromise: Or(MM)
            } : {
              installationEntry: rM
            }
          }(MM, OM);
        return rM = SM.registrationPromise, SM.installationEntry
      }));
      return "" === iM.fid ? {
        installationEntry: await rM
      } : {
        installationEntry: iM,
        registrationPromise: rM
      }
    }
    async function Or(MM) {
      let rM = await Sr(MM.appConfig);
      for (; 1 === rM.registrationStatus;) await YM(100), rM = await Sr(MM.appConfig);
      if (0 === rM.registrationStatus) {
        const {
          installationEntry: rM,
          registrationPromise: iM
        } = await ir(MM);
        return iM || rM
      }
      return rM
    }

    function Sr(MM) {
      return rr(MM, (MM => {
        if (!MM) throw pM.create("installation-not-found");
        return jr(MM)
      }))
    }

    function jr(MM) {
      return 1 === (rM = MM).registrationStatus && rM.registrationTime + wM < Date.now() ? {
        fid: MM.fid,
        registrationStatus: 0
      } : MM;
      var rM
    }
    async function ar(MM, rM) {
      let {
        appConfig: iM,
        heartbeatServiceProvider: OM
      } = MM;
      const SM = function(MM, rM) {
          let {
            fid: iM
          } = rM;
          return `${sM(MM)}/${iM}/authTokens:generate`
        }(iM, rM),
        jM = oM(iM, rM),
        aM = OM.getImmediate({
          optional: !0
        });
      if (aM) {
        const MM = await aM.getHeartbeatsHeader();
        MM && jM.append("x-firebase-client", MM)
      }
      const PM = {
          installation: {
            sdkVersion: tM,
            appId: iM.appId
          }
        },
        nM = {
          method: "POST",
          headers: jM,
          body: JSON.stringify(PM)
        },
        QM = await fM((() => fetch(SM, nM)));
      if (QM.ok) {
        return DM(await QM.json())
      }
      throw await kM("Generate Auth Token", QM)
    }
    async function Pr(MM) {
      let rM, iM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const OM = await rr(MM.appConfig, (OM => {
        if (!Qr(OM)) throw pM.create("not-registered");
        const SM = OM.authToken;
        if (!iM && function(MM) {
            return 2 === MM.requestStatus && ! function(MM) {
              const rM = Date.now();
              return rM < MM.creationTime || MM.creationTime + MM.expiresIn < rM + uM
            }(MM)
          }(SM)) return OM;
        if (1 === SM.requestStatus) return rM = async function(MM, rM) {
          let iM = await nr(MM.appConfig);
          for (; 1 === iM.authToken.requestStatus;) await YM(100), iM = await nr(MM.appConfig);
          const OM = iM.authToken;
          return 0 === OM.requestStatus ? Pr(MM, rM) : OM
        }(MM, iM), OM;
        {
          if (!navigator.onLine) throw pM.create("app-offline");
          const iM = function(MM) {
            const rM = {
              requestStatus: 1,
              requestTime: Date.now()
            };
            return Object.assign(Object.assign({}, MM), {
              authToken: rM
            })
          }(OM);
          return rM = async function(MM, rM) {
            try {
              const iM = await ar(MM, rM),
                OM = Object.assign(Object.assign({}, rM), {
                  authToken: iM
                });
              return await cM(MM.appConfig, OM), iM
            } catch (iM) {
              if (!WM(iM) || 401 !== iM.customData.serverCode && 404 !== iM.customData.serverCode) {
                const iM = Object.assign(Object.assign({}, rM), {
                  authToken: {
                    requestStatus: 0
                  }
                });
                await cM(MM.appConfig, iM)
              } else await Mr(MM.appConfig);
              throw iM
            }
          }(MM, iM), iM
        }
      }));
      return rM ? await rM : OM.authToken
    }

    function nr(MM) {
      return rr(MM, (MM => {
        if (!Qr(MM)) throw pM.create("not-registered");
        const rM = MM.authToken;
        return 1 === (iM = rM).requestStatus && iM.requestTime + wM < Date.now() ? Object.assign(Object.assign({}, MM), {
          authToken: {
            requestStatus: 0
          }
        }) : MM;
        var iM
      }))
    }

    function Qr(MM) {
      return void 0 !== MM && 2 === MM.registrationStatus
    }
    async function zr(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const iM = MM;
      await async function(MM) {
        const {
          registrationPromise: rM
        } = await ir(MM);
        rM && await rM
      }(iM);
      return (await Pr(iM, rM)).token
    }

    function Lr(MM) {
      return pM.create("missing-app-config-values", {
        valueName: MM
      })
    }
    const mr = "installations",
      Hr = MM => {
        const rM = MM.getProvider("app").getImmediate(),
          iM = function(MM) {
            if (!MM || !MM.options) throw Lr("App Configuration");
            if (!MM.name) throw Lr("App Name");
            const rM = ["projectId", "apiKey", "appId"];
            for (const iM of rM)
              if (!MM.options[iM]) throw Lr(iM);
            return {
              appName: MM.name,
              projectId: MM.options.projectId,
              apiKey: MM.options.apiKey,
              appId: MM.options.appId
            }
          }(rM);
        return {
          app: rM,
          appConfig: iM,
          heartbeatServiceProvider: (0, OM.x)(rM, "heartbeat"),
          _delete: () => Promise.resolve()
        }
      },
      hr = MM => {
        const rM = MM.getProvider("app").getImmediate(),
          iM = (0, OM.x)(rM, mr).getImmediate();
        return {
          getId: () => async function(MM) {
            const rM = MM,
              {
                installationEntry: iM,
                registrationPromise: OM
              } = await ir(rM);
            return OM ? OM.catch(console.error) : Pr(rM).catch(console.error), iM.fid
          }(iM),
          getToken: MM => zr(iM, MM)
        }
      };
    (0, OM.z)(new aM.g(mr, Hr, "PUBLIC")), (0, OM.z)(new aM.g("installations-internal", hr, "PRIVATE")), (0, OM.O)(eM, bM), (0, OM.O)(eM, bM, "esm2017");
    const Jr = "analytics",
      dr = "https://www.googletagmanager.com/gtag/js",
      yr = new SM.e("@firebase/analytics"),
      lr = {
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
      Er = new jM.h("analytics", "Analytics", lr);

    function Ur(MM) {
      if (!MM.startsWith(dr)) {
        const rM = Er.create("invalid-gtag-resource", {
          gtagURL: MM
        });
        return yr.warn(rM.message), ""
      }
      return MM
    }

    function Gr(MM) {
      return Promise.all(MM.map((MM => MM.catch((MM => MM)))))
    }

    function Cr(MM, rM) {
      const iM = function(MM, rM) {
          let iM;
          return window.trustedTypes && (iM = window.trustedTypes.createPolicy(MM, rM)), iM
        }("firebase-js-sdk-policy", {
          createScriptURL: Ur
        }),
        OM = document.createElement("script"),
        SM = `${dr}?l=${MM}&id=${rM}`;
      OM.src = iM ? null === iM || void 0 === iM ? void 0 : iM.createScriptURL(SM) : SM, OM.async = !0, document.head.appendChild(OM)
    }

    function er(MM, rM, iM, OM) {
      return async function(SM) {
        try {
          for (var jM = arguments.length, aM = new Array(jM > 1 ? jM - 1 : 0), PM = 1; PM < jM; PM++) aM[PM - 1] = arguments[PM];
          if ("event" === SM) {
            const [OM, SM] = aM;
            await async function(MM, rM, iM, OM, SM) {
              try {
                let jM = [];
                if (SM && SM.send_to) {
                  let MM = SM.send_to;
                  Array.isArray(MM) || (MM = [MM]);
                  const OM = await Gr(iM);
                  for (const iM of MM) {
                    const MM = OM.find((MM => MM.measurementId === iM)),
                      SM = MM && rM[MM.appId];
                    if (!SM) {
                      jM = [];
                      break
                    }
                    jM.push(SM)
                  }
                }
                0 === jM.length && (jM = Object.values(rM)), await Promise.all(jM), MM("event", OM, SM || {})
              } catch (jM) {
                yr.error(jM)
              }
            }(MM, rM, iM, OM, SM)
          } else if ("config" === SM) {
            const [SM, jM] = aM;
            await async function(MM, rM, iM, OM, SM, jM) {
              const aM = OM[SM];
              try {
                if (aM) await rM[aM];
                else {
                  const MM = (await Gr(iM)).find((MM => MM.measurementId === SM));
                  MM && await rM[MM.appId]
                }
              } catch (PM) {
                yr.error(PM)
              }
              MM("config", SM, jM)
            }(MM, rM, iM, OM, SM, jM)
          } else if ("consent" === SM) {
            const [rM] = aM;
            MM("consent", "update", rM)
          } else if ("get" === SM) {
            const [rM, iM, OM] = aM;
            MM("get", rM, iM, OM)
          } else if ("set" === SM) {
            const [rM] = aM;
            MM("set", rM)
          } else MM(SM, ...aM)
        } catch (nM) {
          yr.error(nM)
        }
      }
    }
    const br = new class {
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
        this.throttleMetadata = MM, this.intervalMillis = rM
      }
      getThrottleMetadata(MM) {
        return this.throttleMetadata[MM]
      }
      setThrottleMetadata(MM, rM) {
        this.throttleMetadata[MM] = rM
      }
      deleteThrottleMetadata(MM) {
        delete this.throttleMetadata[MM]
      }
    };

    function wr(MM) {
      return new Headers({
        Accept: "application/json",
        "x-goog-api-key": MM
      })
    }
    async function tr(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : br,
        iM = arguments.length > 2 ? arguments[2] : void 0;
      const {
        appId: OM,
        apiKey: SM,
        measurementId: jM
      } = MM.options;
      if (!OM) throw Er.create("no-app-id");
      if (!SM) {
        if (jM) return {
          measurementId: jM,
          appId: OM
        };
        throw Er.create("no-api-key")
      }
      const aM = rM.getThrottleMetadata(OM) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        },
        PM = new ur;
      return setTimeout((async () => {
        PM.abort()
      }), void 0 !== iM ? iM : 6e4), gr({
        appId: OM,
        apiKey: SM,
        measurementId: jM
      }, aM, PM, rM)
    }
    async function gr(MM, rM, iM) {
      let {
        throttleEndTimeMillis: OM,
        backoffCount: SM
      } = rM, aM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : br;
      var PM;
      const {
        appId: nM,
        measurementId: QM
      } = MM;
      try {
        await
        function(MM, rM) {
          return new Promise(((iM, OM) => {
            const SM = Math.max(rM - Date.now(), 0),
              jM = setTimeout(iM, SM);
            MM.addEventListener((() => {
              clearTimeout(jM), OM(Er.create("fetch-throttle", {
                throttleEndTimeMillis: rM
              }))
            }))
          }))
        }(iM, OM)
      } catch (zM) {
        if (QM) return yr.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${QM} provided in the "measurementId" field in the local Firebase config. [${null===zM||void 0===zM?void 0:zM.message}]`), {
          appId: nM,
          measurementId: QM
        };
        throw zM
      }
      try {
        const rM = await async function(MM) {
          var rM;
          const {
            appId: iM,
            apiKey: OM
          } = MM, SM = {
            method: "GET",
            headers: wr(OM)
          }, jM = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", iM), aM = await fetch(jM, SM);
          if (200 !== aM.status && 304 !== aM.status) {
            let MM = "";
            try {
              const iM = await aM.json();
              (null === (rM = iM.error) || void 0 === rM ? void 0 : rM.message) && (MM = iM.error.message)
            } catch (PM) {}
            throw Er.create("config-fetch-failed", {
              httpStatus: aM.status,
              responseMessage: MM
            })
          }
          return aM.json()
        }(MM);
        return aM.deleteThrottleMetadata(nM), rM
      } catch (zM) {
        const rM = zM;
        if (! function(MM) {
            if (!(MM instanceof jM.j) || !MM.customData) return !1;
            const rM = Number(MM.customData.httpStatus);
            return 429 === rM || 500 === rM || 503 === rM || 504 === rM
          }(rM)) {
          if (aM.deleteThrottleMetadata(nM), QM) return yr.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${QM} provided in the "measurementId" field in the local Firebase config. [${null===rM||void 0===rM?void 0:rM.message}]`), {
            appId: nM,
            measurementId: QM
          };
          throw zM
        }
        const OM = 503 === Number(null === (PM = null === rM || void 0 === rM ? void 0 : rM.customData) || void 0 === PM ? void 0 : PM.httpStatus) ? (0, jM.u)(SM, aM.intervalMillis, 30) : (0, jM.u)(SM, aM.intervalMillis),
          LM = {
            throttleEndTimeMillis: Date.now() + OM,
            backoffCount: SM + 1
          };
        return aM.setThrottleMetadata(nM, LM), yr.debug(`Calling attemptFetch again in ${OM} millis`), gr(MM, LM, iM, aM)
      }
    }
    class ur {
      constructor() {
        this.listeners = []
      }
      addEventListener(MM) {
        this.listeners.push(MM)
      }
      abort() {
        this.listeners.forEach((MM => MM()))
      }
    }
    let Rr, pr;

    function Wr(MM) {
      pr = MM
    }

    function sr(MM) {
      Rr = MM
    }
    async function Dr(MM, rM, iM, OM, SM, aM, PM) {
      var nM;
      const QM = tr(MM);
      QM.then((rM => {
        iM[rM.measurementId] = rM.appId, MM.options.measurementId && rM.measurementId !== MM.options.measurementId && yr.warn(`The measurement ID in the local Firebase config (${MM.options.measurementId}) does not match the measurement ID fetched from the server (${rM.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
      })).catch((MM => yr.error(MM))), rM.push(QM);
      const zM = async function() {
        if (!(0, jM.X)()) return yr.warn(Er.create("indexeddb-unavailable", {
          errorInfo: "IndexedDB is not available in this environment."
        }).message), !1;
        try {
          await (0, jM.jb)()
        } catch (MM) {
          return yr.warn(Er.create("indexeddb-unavailable", {
            errorInfo: null === MM || void 0 === MM ? void 0 : MM.toString()
          }).message), !1
        }
        return !0
      }().then((MM => MM ? OM.getId() : void 0)), [LM, mM] = await Promise.all([QM, zM]);
      (function(MM) {
        const rM = window.document.getElementsByTagName("script");
        for (const iM of Object.values(rM))
          if (iM.src && iM.src.includes(dr) && iM.src.includes(MM)) return iM;
        return null
      })(aM) || Cr(aM, LM.measurementId), pr && (SM("consent", "default", pr), Wr(void 0)), SM("js", new Date);
      const HM = null !== (nM = null === PM || void 0 === PM ? void 0 : PM.config) && void 0 !== nM ? nM : {};
      return HM.origin = "firebase", HM.update = !0, null != mM && (HM.firebase_id = mM), SM("config", LM.measurementId, HM), Rr && (SM("set", Rr), sr(void 0)), LM.measurementId
    }
    class kr {
      constructor(MM) {
        this.app = MM
      }
      _delete() {
        return delete Zr[this.app.options.appId], Promise.resolve()
      }
    }
    let Zr = {},
      or = [];
    const fr = {};
    let Yr, Nr, Ar = "dataLayer",
      xr = "gtag",
      vr = !1;

    function Fr(MM) {
      if (vr) throw Er.create("already-initialized");
      MM.dataLayerName && (Ar = MM.dataLayerName), MM.gtagName && (xr = MM.gtagName)
    }

    function Br(MM, rM, iM) {
      ! function() {
        const MM = [];
        if ((0, jM.T)() && MM.push("This is a browser extension environment."), (0, jM.m)() || MM.push("Cookies are not available."), MM.length > 0) {
          const rM = MM.map(((MM, rM) => `(${rM+1}) ${MM}`)).join(" "),
            iM = Er.create("invalid-analytics-context", {
              errorInfo: rM
            });
          yr.warn(iM.message)
        }
      }();
      const OM = MM.options.appId;
      if (!OM) throw Er.create("no-app-id");
      if (!MM.options.apiKey) {
        if (!MM.options.measurementId) throw Er.create("no-api-key");
        yr.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${MM.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
      }
      if (null != Zr[OM]) throw Er.create("already-exists", {
        id: OM
      });
      if (!vr) {
        ! function(MM) {
          let rM = [];
          Array.isArray(window[MM]) ? rM = window[MM] : window[MM] = rM
        }(Ar);
        const {
          wrappedGtag: MM,
          gtagCore: rM
        } = function(MM, rM, iM, OM, SM) {
          let jM = function() {
            for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
            window[OM].push(arguments)
          };
          return window[SM] && "function" === typeof window[SM] && (jM = window[SM]), window[SM] = er(jM, MM, rM, iM), {
            gtagCore: jM,
            wrappedGtag: window[SM]
          }
        }(Zr, or, fr, Ar, xr);
        Nr = MM, Yr = rM, vr = !0
      }
      Zr[OM] = Dr(MM, or, fr, rM, Yr, Ar, iM);
      return new kr(MM)
    }

    function Xr() {
      let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, OM.G)();
      MM = (0, jM.N)(MM);
      const rM = (0, OM.x)(MM, Jr);
      return rM.isInitialized() ? rM.getImmediate() : Ir(MM)
    }

    function Ir(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const iM = (0, OM.x)(MM, Jr);
      if (iM.isInitialized()) {
        const MM = iM.getImmediate();
        if ((0, jM.C)(rM, iM.getOptions())) return MM;
        throw Er.create("already-initialized")
      }
      return iM.initialize({
        options: rM
      })
    }
    async function Kr() {
      if ((0, jM.T)()) return !1;
      if (!(0, jM.m)()) return !1;
      if (!(0, jM.X)()) return !1;
      try {
        return await (0, jM.jb)()
      } catch (MM) {
        return !1
      }
    }

    function qr(MM, rM, iM) {
      MM = (0, jM.N)(MM), async function(MM, rM, iM, OM) {
        if (OM && OM.global) return MM("set", {
          screen_name: iM
        }), Promise.resolve();
        MM("config", await rM, {
          update: !0,
          screen_name: iM
        })
      }(Nr, Zr[MM.app.options.appId], rM, iM).catch((MM => yr.error(MM)))
    }
    async function Tr(MM) {
      return MM = (0, jM.N)(MM), async function(MM, rM) {
        const iM = await rM;
        return new Promise(((rM, OM) => {
          MM("get", iM, "client_id", (MM => {
            MM || OM(Er.create("no-client-id")), rM(MM)
          }))
        }))
      }(Nr, Zr[MM.app.options.appId])
    }

    function Vr(MM, rM, iM) {
      MM = (0, jM.N)(MM), async function(MM, rM, iM, OM) {
        if (OM && OM.global) return MM("set", {
          user_id: iM
        }), Promise.resolve();
        MM("config", await rM, {
          update: !0,
          user_id: iM
        })
      }(Nr, Zr[MM.app.options.appId], rM, iM).catch((MM => yr.error(MM)))
    }

    function cr(MM, rM, iM) {
      MM = (0, jM.N)(MM), async function(MM, rM, iM, OM) {
        if (OM && OM.global) {
          const rM = {};
          for (const MM of Object.keys(iM)) rM[`user_properties.${MM}`] = iM[MM];
          return MM("set", rM), Promise.resolve()
        }
        MM("config", await rM, {
          update: !0,
          user_properties: iM
        })
      }(Nr, Zr[MM.app.options.appId], rM, iM).catch((MM => yr.error(MM)))
    }

    function Mi(MM, rM) {
      MM = (0, jM.N)(MM), async function(MM, rM) {
        const iM = await MM;
        window[`ga-disable-${iM}`] = !rM
      }(Zr[MM.app.options.appId], rM).catch((MM => yr.error(MM)))
    }

    function ri(MM) {
      Nr ? Nr("set", MM) : sr(MM)
    }

    function ii(MM, rM, iM, OM) {
      MM = (0, jM.N)(MM), async function(MM, rM, iM, OM, SM) {
        if (SM && SM.global) MM("event", iM, OM);
        else {
          const SM = await rM;
          MM("event", iM, Object.assign(Object.assign({}, OM), {
            send_to: SM
          }))
        }
      }(Nr, Zr[MM.app.options.appId], rM, iM, OM).catch((MM => yr.error(MM)))
    }

    function Oi(MM) {
      Nr ? Nr("consent", "update", MM) : Wr(MM)
    }
    const Si = "@firebase/analytics",
      ji = "0.10.0";
    (0, OM.z)(new aM.g(Jr, ((MM, rM) => {
      let {
        options: iM
      } = rM;
      return Br(MM.getProvider("app").getImmediate(), MM.getProvider("installations-internal").getImmediate(), iM)
    }), "PUBLIC")), (0, OM.z)(new aM.g("analytics-internal", (function(MM) {
      try {
        const rM = MM.getProvider(Jr).getImmediate();
        return {
          logEvent: (MM, iM, OM) => ii(rM, MM, iM, OM)
        }
      } catch (rM) {
        throw Er.create("interop-component-reg-failed", {
          reason: rM
        })
      }
    }), "PRIVATE")), (0, OM.O)(Si, ji), (0, OM.O)(Si, ji, "esm2017")
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);