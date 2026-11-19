/*! For license information please see wd13r.257.f641d11e.chunk.js.LICENSE.txt */
export const id = 257;
export const ids = [257];
export const modules = {
  39639: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      getAnalytics: () => EC,
      getGoogleAnalyticsClientId: () => rC,
      initializeAnalytics: () => eC,
      isSupported: () => uC,
      logEvent: () => cc,
      setAnalyticsCollectionEnabled: () => Dc,
      setConsent: () => Ic,
      setCurrentScreen: () => hC,
      setDefaultEventParameters: () => Cc,
      setUserId: () => AC,
      setUserProperties: () => FC,
      settings: () => WC
    });
    var ID = cD(39626),
      pD = cD(39637),
      iD = cD(39634),
      fD = cD(39632);
    let bD, QD;
    const wD = new WeakMap,
      SD = new WeakMap,
      BD = new WeakMap,
      yD = new WeakMap,
      MD = new WeakMap;
    let tD = {
      get(DD, CD, cD) {
        if (DD instanceof IDBTransaction) {
          if ("done" === CD) return SD.get(DD);
          if ("objectStoreNames" === CD) return DD.objectStoreNames || BD.get(DD);
          if ("store" === CD) return cD.objectStoreNames[1] ? void 0 : cD.objectStore(cD.objectStoreNames[0])
        }
        return vD(DD[CD])
      },
      set: (DD, CD, cD) => (DD[CD] = cD, !0),
      has: (DD, CD) => DD instanceof IDBTransaction && ("done" === CD || "store" === CD) || CD in DD
    };

    function ZD(DD) {
      return DD !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (QD || (QD = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(DD) ? function() {
        for (var CD = arguments.length, cD = new Array(CD), ID = 0; ID < CD; ID++) cD[ID] = arguments[ID];
        return DD.apply(ND(this), cD), vD(wD.get(this))
      } : function() {
        for (var CD = arguments.length, cD = new Array(CD), ID = 0; ID < CD; ID++) cD[ID] = arguments[ID];
        return vD(DD.apply(ND(this), cD))
      } : function(CD) {
        for (var cD = arguments.length, ID = new Array(cD > 1 ? cD - 1 : 0), pD = 1; pD < cD; pD++) ID[pD - 1] = arguments[pD];
        const iD = DD.call(ND(this), CD, ...ID);
        return BD.set(iD, CD.sort ? CD.sort() : [CD]), vD(iD)
      }
    }

    function oD(DD) {
      return "function" === typeof DD ? ZD(DD) : (DD instanceof IDBTransaction && function(DD) {
        if (SD.has(DD)) return;
        const CD = new Promise(((CD, cD) => {
          const ID = () => {
              DD.removeEventListener("complete", pD), DD.removeEventListener("error", iD), DD.removeEventListener("abort", iD)
            },
            pD = () => {
              CD(), ID()
            },
            iD = () => {
              cD(DD.error || new DOMException("AbortError", "AbortError")), ID()
            };
          DD.addEventListener("complete", pD), DD.addEventListener("error", iD), DD.addEventListener("abort", iD)
        }));
        SD.set(DD, CD)
      }(DD), CD = DD, (bD || (bD = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((DD => CD instanceof DD)) ? new Proxy(DD, tD) : DD);
      var CD
    }

    function vD(DD) {
      if (DD instanceof IDBRequest) return function(DD) {
        const CD = new Promise(((CD, cD) => {
          const ID = () => {
              DD.removeEventListener("success", pD), DD.removeEventListener("error", iD)
            },
            pD = () => {
              CD(vD(DD.result)), ID()
            },
            iD = () => {
              cD(DD.error), ID()
            };
          DD.addEventListener("success", pD), DD.addEventListener("error", iD)
        }));
        return CD.then((CD => {
          CD instanceof IDBCursor && wD.set(CD, DD)
        })).catch((() => {})), MD.set(CD, DD), CD
      }(DD);
      if (yD.has(DD)) return yD.get(DD);
      const CD = oD(DD);
      return CD !== DD && (yD.set(DD, CD), MD.set(CD, DD)), CD
    }
    const ND = DD => MD.get(DD);
    const gD = ["get", "getKey", "getAll", "getAllKeys", "count"],
      XD = ["put", "add", "delete", "clear"],
      mD = new Map;

    function nD(DD, CD) {
      if (!(DD instanceof IDBDatabase) || CD in DD || "string" !== typeof CD) return;
      if (mD.get(CD)) return mD.get(CD);
      const cD = CD.replace(/FromIndex$/, ""),
        ID = CD !== cD,
        pD = XD.includes(cD);
      if (!(cD in (ID ? IDBIndex : IDBObjectStore).prototype) || !pD && !gD.includes(cD)) return;
      const iD = async function(DD) {
        const CD = this.transaction(DD, pD ? "readwrite" : "readonly");
        let iD = CD.store;
        for (var fD = arguments.length, bD = new Array(fD > 1 ? fD - 1 : 0), QD = 1; QD < fD; QD++) bD[QD - 1] = arguments[QD];
        return ID && (iD = iD.index(bD.shift())), (await Promise.all([iD[cD](...bD), pD && CD.done]))[0]
      };
      return mD.set(CD, iD), iD
    }
    tD = (DD => ({
      ...DD,
      get: (CD, cD, ID) => nD(CD, cD) || DD.get(CD, cD, ID),
      has: (CD, cD) => !!nD(CD, cD) || DD.has(CD, cD)
    }))(tD);
    const OD = "@firebase/installations",
      PD = "0.6.4",
      HD = 1e4,
      UD = `w:${PD}`,
      xD = "FIS_v2",
      qD = 36e5,
      JD = {
        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
        "not-registered": "Firebase Installation is not registered.",
        "installation-not-found": "Firebase Installation not found.",
        "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        "app-offline": "Could not process request. Application offline.",
        "delete-pending-registration": "Can't delete installation while there is a pending registration request."
      },
      KD = new iD.h("installations", "Installations", JD);

    function aD(DD) {
      return DD instanceof iD.k && DD.code.includes("request-failed")
    }

    function VD(DD) {
      let {
        projectId: CD
      } = DD;
      return `https://firebaseinstallations.googleapis.com/v1/projects/${CD}/installations`
    }

    function zD(DD) {
      return {
        token: DD.token,
        requestStatus: 2,
        expiresIn: (CD = DD.expiresIn, Number(CD.replace("s", "000"))),
        creationTime: Date.now()
      };
      var CD
    }
    async function jD(DD, CD) {
      const cD = (await CD.json()).error;
      return KD.create("request-failed", {
        requestName: DD,
        serverCode: cD.code,
        serverMessage: cD.message,
        serverStatus: cD.status
      })
    }

    function lD(DD) {
      let {
        apiKey: CD
      } = DD;
      return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": CD
      })
    }

    function LD(DD, CD) {
      let {
        refreshToken: cD
      } = CD;
      const ID = lD(DD);
      return ID.append("Authorization", function(DD) {
        return `${xD} ${DD}`
      }(cD)), ID
    }
    async function TD(DD) {
      const CD = await DD();
      return CD.status >= 500 && CD.status < 600 ? DD() : CD
    }

    function GD(DD) {
      return new Promise((CD => {
        setTimeout(CD, DD)
      }))
    }
    const RD = /^[cdef][\w-]{21}$/;

    function kD() {
      try {
        const DD = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(DD), DD[0] = 112 + DD[0] % 16;
        const CD = function(DD) {
          const CD = (cD = DD, btoa(String.fromCharCode(...cD)).replace(/\+/g, "-").replace(/\//g, "_"));
          var cD;
          return CD.substr(0, 22)
        }(DD);
        return RD.test(CD) ? CD : ""
      } catch (DD) {
        return ""
      }
    }

    function dD(DD) {
      return `${DD.appName}!${DD.appId}`
    }
    const YD = new Map;

    function WD(DD, CD) {
      const cD = dD(DD);
      sD(cD, CD),
        function(DD, CD) {
          const cD = eD();
          cD && cD.postMessage({
            key: DD,
            fid: CD
          });
          uD()
        }(cD, CD)
    }

    function sD(DD, CD) {
      const cD = YD.get(DD);
      if (cD)
        for (const ID of cD) ID(CD)
    }
    let ED = null;

    function eD() {
      return !ED && "BroadcastChannel" in self && (ED = new BroadcastChannel("[Firebase] FID Change"), ED.onmessage = DD => {
        sD(DD.data.key, DD.data.fid)
      }), ED
    }

    function uD() {
      0 === YD.size && ED && (ED.close(), ED = null)
    }
    const hD = "firebase-installations-store";
    let rD = null;

    function AD() {
      return rD || (rD = function(DD, CD) {
        let {
          blocked: cD,
          upgrade: ID,
          blocking: pD,
          terminated: iD
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const fD = indexedDB.open(DD, CD),
          bD = vD(fD);
        return ID && fD.addEventListener("upgradeneeded", (DD => {
          ID(vD(fD.result), DD.oldVersion, DD.newVersion, vD(fD.transaction))
        })), cD && fD.addEventListener("blocked", (() => cD())), bD.then((DD => {
          iD && DD.addEventListener("close", (() => iD())), pD && DD.addEventListener("versionchange", (() => pD()))
        })).catch((() => {})), bD
      }("firebase-installations-database", 1, {
        upgrade: (DD, CD) => {
          if (0 === CD) DD.createObjectStore(hD)
        }
      })), rD
    }
    async function FD(DD, CD) {
      const cD = dD(DD),
        ID = (await AD()).transaction(hD, "readwrite"),
        pD = ID.objectStore(hD),
        iD = await pD.get(cD);
      return await pD.put(CD, cD), await ID.done, iD && iD.fid === CD.fid || WD(DD, CD.fid), CD
    }
    async function DC(DD) {
      const CD = dD(DD),
        cD = (await AD()).transaction(hD, "readwrite");
      await cD.objectStore(hD).delete(CD), await cD.done
    }
    async function CC(DD, CD) {
      const cD = dD(DD),
        ID = (await AD()).transaction(hD, "readwrite"),
        pD = ID.objectStore(hD),
        iD = await pD.get(cD),
        fD = CD(iD);
      return void 0 === fD ? await pD.delete(cD) : await pD.put(fD, cD), await ID.done, !fD || iD && iD.fid === fD.fid || WD(DD, fD.fid), fD
    }
    async function cC(DD) {
      let CD;
      const cD = await CC(DD.appConfig, (cD => {
        const ID = function(DD) {
            const CD = DD || {
              fid: kD(),
              registrationStatus: 0
            };
            return iC(CD)
          }(cD),
          pD = function(DD, CD) {
            if (0 === CD.registrationStatus) {
              if (!navigator.onLine) {
                return {
                  installationEntry: CD,
                  registrationPromise: Promise.reject(KD.create("app-offline"))
                }
              }
              const cD = {
                  fid: CD.fid,
                  registrationStatus: 1,
                  registrationTime: Date.now()
                },
                ID = async function(DD, CD) {
                  try {
                    const cD = await async function(DD, CD) {
                      let {
                        appConfig: cD,
                        heartbeatServiceProvider: ID
                      } = DD, {
                        fid: pD
                      } = CD;
                      const iD = VD(cD),
                        fD = lD(cD),
                        bD = ID.getImmediate({
                          optional: !0
                        });
                      if (bD) {
                        const DD = await bD.getHeartbeatsHeader();
                        DD && fD.append("x-firebase-client", DD)
                      }
                      const QD = {
                          fid: pD,
                          authVersion: xD,
                          appId: cD.appId,
                          sdkVersion: UD
                        },
                        wD = {
                          method: "POST",
                          headers: fD,
                          body: JSON.stringify(QD)
                        },
                        SD = await TD((() => fetch(iD, wD)));
                      if (SD.ok) {
                        const DD = await SD.json();
                        return {
                          fid: DD.fid || pD,
                          registrationStatus: 2,
                          refreshToken: DD.refreshToken,
                          authToken: zD(DD.authToken)
                        }
                      }
                      throw await jD("Create Installation", SD)
                    }(DD, CD);
                    return FD(DD.appConfig, cD)
                  } catch (cD) {
                    throw aD(cD) && 409 === cD.customData.serverCode ? await DC(DD.appConfig) : await FD(DD.appConfig, {
                      fid: CD.fid,
                      registrationStatus: 0
                    }), cD
                  }
                }(DD, cD);
              return {
                installationEntry: cD,
                registrationPromise: ID
              }
            }
            return 1 === CD.registrationStatus ? {
              installationEntry: CD,
              registrationPromise: IC(DD)
            } : {
              installationEntry: CD
            }
          }(DD, ID);
        return CD = pD.registrationPromise, pD.installationEntry
      }));
      return "" === cD.fid ? {
        installationEntry: await CD
      } : {
        installationEntry: cD,
        registrationPromise: CD
      }
    }
    async function IC(DD) {
      let CD = await pC(DD.appConfig);
      for (; 1 === CD.registrationStatus;) await GD(100), CD = await pC(DD.appConfig);
      if (0 === CD.registrationStatus) {
        const {
          installationEntry: CD,
          registrationPromise: cD
        } = await cC(DD);
        return cD || CD
      }
      return CD
    }

    function pC(DD) {
      return CC(DD, (DD => {
        if (!DD) throw KD.create("installation-not-found");
        return iC(DD)
      }))
    }

    function iC(DD) {
      return 1 === (CD = DD).registrationStatus && CD.registrationTime + HD < Date.now() ? {
        fid: DD.fid,
        registrationStatus: 0
      } : DD;
      var CD
    }
    async function fC(DD, CD) {
      let {
        appConfig: cD,
        heartbeatServiceProvider: ID
      } = DD;
      const pD = function(DD, CD) {
          let {
            fid: cD
          } = CD;
          return `${VD(DD)}/${cD}/authTokens:generate`
        }(cD, CD),
        iD = LD(cD, CD),
        fD = ID.getImmediate({
          optional: !0
        });
      if (fD) {
        const DD = await fD.getHeartbeatsHeader();
        DD && iD.append("x-firebase-client", DD)
      }
      const bD = {
          installation: {
            sdkVersion: UD,
            appId: cD.appId
          }
        },
        QD = {
          method: "POST",
          headers: iD,
          body: JSON.stringify(bD)
        },
        wD = await TD((() => fetch(pD, QD)));
      if (wD.ok) {
        return zD(await wD.json())
      }
      throw await jD("Generate Auth Token", wD)
    }
    async function bC(DD) {
      let CD, cD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const ID = await CC(DD.appConfig, (ID => {
        if (!wC(ID)) throw KD.create("not-registered");
        const pD = ID.authToken;
        if (!cD && function(DD) {
            return 2 === DD.requestStatus && ! function(DD) {
              const CD = Date.now();
              return CD < DD.creationTime || DD.creationTime + DD.expiresIn < CD + qD
            }(DD)
          }(pD)) return ID;
        if (1 === pD.requestStatus) return CD = async function(DD, CD) {
          let cD = await QC(DD.appConfig);
          for (; 1 === cD.authToken.requestStatus;) await GD(100), cD = await QC(DD.appConfig);
          const ID = cD.authToken;
          return 0 === ID.requestStatus ? bC(DD, CD) : ID
        }(DD, cD), ID;
        {
          if (!navigator.onLine) throw KD.create("app-offline");
          const cD = function(DD) {
            const CD = {
              requestStatus: 1,
              requestTime: Date.now()
            };
            return Object.assign(Object.assign({}, DD), {
              authToken: CD
            })
          }(ID);
          return CD = async function(DD, CD) {
            try {
              const cD = await fC(DD, CD),
                ID = Object.assign(Object.assign({}, CD), {
                  authToken: cD
                });
              return await FD(DD.appConfig, ID), cD
            } catch (cD) {
              if (!aD(cD) || 401 !== cD.customData.serverCode && 404 !== cD.customData.serverCode) {
                const cD = Object.assign(Object.assign({}, CD), {
                  authToken: {
                    requestStatus: 0
                  }
                });
                await FD(DD.appConfig, cD)
              } else await DC(DD.appConfig);
              throw cD
            }
          }(DD, cD), cD
        }
      }));
      return CD ? await CD : ID.authToken
    }

    function QC(DD) {
      return CC(DD, (DD => {
        if (!wC(DD)) throw KD.create("not-registered");
        const CD = DD.authToken;
        return 1 === (cD = CD).requestStatus && cD.requestTime + HD < Date.now() ? Object.assign(Object.assign({}, DD), {
          authToken: {
            requestStatus: 0
          }
        }) : DD;
        var cD
      }))
    }

    function wC(DD) {
      return void 0 !== DD && 2 === DD.registrationStatus
    }
    async function SC(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const cD = DD;
      await async function(DD) {
        const {
          registrationPromise: CD
        } = await cC(DD);
        CD && await CD
      }(cD);
      return (await bC(cD, CD)).token
    }

    function BC(DD) {
      return KD.create("missing-app-config-values", {
        valueName: DD
      })
    }
    const yC = "installations",
      MC = DD => {
        const CD = DD.getProvider("app").getImmediate(),
          cD = function(DD) {
            if (!DD || !DD.options) throw BC("App Configuration");
            if (!DD.name) throw BC("App Name");
            const CD = ["projectId", "apiKey", "appId"];
            for (const cD of CD)
              if (!DD.options[cD]) throw BC(cD);
            return {
              appName: DD.name,
              projectId: DD.options.projectId,
              apiKey: DD.options.apiKey,
              appId: DD.options.appId
            }
          }(CD);
        return {
          app: CD,
          appConfig: cD,
          heartbeatServiceProvider: (0, ID.w)(CD, "heartbeat"),
          _delete: () => Promise.resolve()
        }
      },
      tC = DD => {
        const CD = DD.getProvider("app").getImmediate(),
          cD = (0, ID.w)(CD, yC).getImmediate();
        return {
          getId: () => async function(DD) {
            const CD = DD,
              {
                installationEntry: cD,
                registrationPromise: ID
              } = await cC(CD);
            return ID ? ID.catch(console.error) : bC(CD).catch(console.error), cD.fid
          }(cD),
          getToken: DD => SC(cD, DD)
        }
      };
    (0, ID.x)(new fD.g(yC, MC, "PUBLIC")), (0, ID.x)(new fD.g("installations-internal", tC, "PRIVATE")), (0, ID.O)(OD, PD), (0, ID.O)(OD, PD, "esm2017");
    const ZC = "analytics",
      oC = "https://www.googletagmanager.com/gtag/js",
      vC = new pD.f("@firebase/analytics"),
      NC = {
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
      gC = new iD.h("analytics", "Analytics", NC);

    function XC(DD) {
      if (!DD.startsWith(oC)) {
        const CD = gC.create("invalid-gtag-resource", {
          gtagURL: DD
        });
        return vC.warn(CD.message), ""
      }
      return DD
    }

    function mC(DD) {
      return Promise.all(DD.map((DD => DD.catch((DD => DD)))))
    }

    function nC(DD, CD) {
      const cD = function(DD, CD) {
          let cD;
          return window.trustedTypes && (cD = window.trustedTypes.createPolicy(DD, CD)), cD
        }("firebase-js-sdk-policy", {
          createScriptURL: XC
        }),
        ID = document.createElement("script"),
        pD = `${oC}?l=${DD}&id=${CD}`;
      ID.src = cD ? null === cD || void 0 === cD ? void 0 : cD.createScriptURL(pD) : pD, ID.async = !0, document.head.appendChild(ID)
    }

    function OC(DD, CD, cD, ID) {
      return async function(pD) {
        try {
          for (var iD = arguments.length, fD = new Array(iD > 1 ? iD - 1 : 0), bD = 1; bD < iD; bD++) fD[bD - 1] = arguments[bD];
          if ("event" === pD) {
            const [ID, pD] = fD;
            await async function(DD, CD, cD, ID, pD) {
              try {
                let iD = [];
                if (pD && pD.send_to) {
                  let DD = pD.send_to;
                  Array.isArray(DD) || (DD = [DD]);
                  const ID = await mC(cD);
                  for (const cD of DD) {
                    const DD = ID.find((DD => DD.measurementId === cD)),
                      pD = DD && CD[DD.appId];
                    if (!pD) {
                      iD = [];
                      break
                    }
                    iD.push(pD)
                  }
                }
                0 === iD.length && (iD = Object.values(CD)), await Promise.all(iD), DD("event", ID, pD || {})
              } catch (iD) {
                vC.error(iD)
              }
            }(DD, CD, cD, ID, pD)
          } else if ("config" === pD) {
            const [pD, iD] = fD;
            await async function(DD, CD, cD, ID, pD, iD) {
              const fD = ID[pD];
              try {
                if (fD) await CD[fD];
                else {
                  const DD = (await mC(cD)).find((DD => DD.measurementId === pD));
                  DD && await CD[DD.appId]
                }
              } catch (bD) {
                vC.error(bD)
              }
              DD("config", pD, iD)
            }(DD, CD, cD, ID, pD, iD)
          } else if ("consent" === pD) {
            const [CD] = fD;
            DD("consent", "update", CD)
          } else if ("get" === pD) {
            const [CD, cD, ID] = fD;
            DD("get", CD, cD, ID)
          } else if ("set" === pD) {
            const [CD] = fD;
            DD("set", CD)
          } else DD(pD, ...fD)
        } catch (QD) {
          vC.error(QD)
        }
      }
    }
    const PC = new class {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
        this.throttleMetadata = DD, this.intervalMillis = CD
      }
      getThrottleMetadata(DD) {
        return this.throttleMetadata[DD]
      }
      setThrottleMetadata(DD, CD) {
        this.throttleMetadata[DD] = CD
      }
      deleteThrottleMetadata(DD) {
        delete this.throttleMetadata[DD]
      }
    };

    function HC(DD) {
      return new Headers({
        Accept: "application/json",
        "x-goog-api-key": DD
      })
    }
    async function UC(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : PC,
        cD = arguments.length > 2 ? arguments[2] : void 0;
      const {
        appId: ID,
        apiKey: pD,
        measurementId: iD
      } = DD.options;
      if (!ID) throw gC.create("no-app-id");
      if (!pD) {
        if (iD) return {
          measurementId: iD,
          appId: ID
        };
        throw gC.create("no-api-key")
      }
      const fD = CD.getThrottleMetadata(ID) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        },
        bD = new qC;
      return setTimeout((async () => {
        bD.abort()
      }), void 0 !== cD ? cD : 6e4), xC({
        appId: ID,
        apiKey: pD,
        measurementId: iD
      }, fD, bD, CD)
    }
    async function xC(DD, CD, cD) {
      let {
        throttleEndTimeMillis: ID,
        backoffCount: pD
      } = CD, fD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : PC;
      var bD;
      const {
        appId: QD,
        measurementId: wD
      } = DD;
      try {
        await
        function(DD, CD) {
          return new Promise(((cD, ID) => {
            const pD = Math.max(CD - Date.now(), 0),
              iD = setTimeout(cD, pD);
            DD.addEventListener((() => {
              clearTimeout(iD), ID(gC.create("fetch-throttle", {
                throttleEndTimeMillis: CD
              }))
            }))
          }))
        }(cD, ID)
      } catch (SD) {
        if (wD) return vC.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${wD} provided in the "measurementId" field in the local Firebase config. [${null===SD||void 0===SD?void 0:SD.message}]`), {
          appId: QD,
          measurementId: wD
        };
        throw SD
      }
      try {
        const CD = await async function(DD) {
          var CD;
          const {
            appId: cD,
            apiKey: ID
          } = DD, pD = {
            method: "GET",
            headers: HC(ID)
          }, iD = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", cD), fD = await fetch(iD, pD);
          if (200 !== fD.status && 304 !== fD.status) {
            let DD = "";
            try {
              const cD = await fD.json();
              (null === (CD = cD.error) || void 0 === CD ? void 0 : CD.message) && (DD = cD.error.message)
            } catch (bD) {}
            throw gC.create("config-fetch-failed", {
              httpStatus: fD.status,
              responseMessage: DD
            })
          }
          return fD.json()
        }(DD);
        return fD.deleteThrottleMetadata(QD), CD
      } catch (SD) {
        const CD = SD;
        if (! function(DD) {
            if (!(DD instanceof iD.k) || !DD.customData) return !1;
            const CD = Number(DD.customData.httpStatus);
            return 429 === CD || 500 === CD || 503 === CD || 504 === CD
          }(CD)) {
          if (fD.deleteThrottleMetadata(QD), wD) return vC.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${wD} provided in the "measurementId" field in the local Firebase config. [${null===CD||void 0===CD?void 0:CD.message}]`), {
            appId: QD,
            measurementId: wD
          };
          throw SD
        }
        const ID = 503 === Number(null === (bD = null === CD || void 0 === CD ? void 0 : CD.customData) || void 0 === bD ? void 0 : bD.httpStatus) ? (0, iD.v)(pD, fD.intervalMillis, 30) : (0, iD.v)(pD, fD.intervalMillis),
          BD = {
            throttleEndTimeMillis: Date.now() + ID,
            backoffCount: pD + 1
          };
        return fD.setThrottleMetadata(QD, BD), vC.debug(`Calling attemptFetch again in ${ID} millis`), xC(DD, BD, cD, fD)
      }
    }
    class qC {
      constructor() {
        this.listeners = []
      }
      addEventListener(DD) {
        this.listeners.push(DD)
      }
      abort() {
        this.listeners.forEach((DD => DD()))
      }
    }
    let JC, KC;

    function aC(DD) {
      KC = DD
    }

    function VC(DD) {
      JC = DD
    }
    async function zC(DD, CD, cD, ID, pD, fD, bD) {
      var QD;
      const wD = UC(DD);
      wD.then((CD => {
        cD[CD.measurementId] = CD.appId, DD.options.measurementId && CD.measurementId !== DD.options.measurementId && vC.warn(`The measurement ID in the local Firebase config (${DD.options.measurementId}) does not match the measurement ID fetched from the server (${CD.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
      })).catch((DD => vC.error(DD))), CD.push(wD);
      const SD = async function() {
        if (!(0, iD.$)()) return vC.warn(gC.create("indexeddb-unavailable", {
          errorInfo: "IndexedDB is not available in this environment."
        }).message), !1;
        try {
          await (0, iD.lb)()
        } catch (DD) {
          return vC.warn(gC.create("indexeddb-unavailable", {
            errorInfo: null === DD || void 0 === DD ? void 0 : DD.toString()
          }).message), !1
        }
        return !0
      }().then((DD => DD ? ID.getId() : void 0)), [BD, yD] = await Promise.all([wD, SD]);
      (function(DD) {
        const CD = window.document.getElementsByTagName("script");
        for (const cD of Object.values(CD))
          if (cD.src && cD.src.includes(oC) && cD.src.includes(DD)) return cD;
        return null
      })(fD) || nC(fD, BD.measurementId), KC && (pD("consent", "default", KC), aC(void 0)), pD("js", new Date);
      const MD = null !== (QD = null === bD || void 0 === bD ? void 0 : bD.config) && void 0 !== QD ? QD : {};
      return MD.origin = "firebase", MD.update = !0, null != yD && (MD.firebase_id = yD), pD("config", BD.measurementId, MD), JC && (pD("set", JC), VC(void 0)), BD.measurementId
    }
    class jC {
      constructor(DD) {
        this.app = DD
      }
      _delete() {
        return delete lC[this.app.options.appId], Promise.resolve()
      }
    }
    let lC = {},
      LC = [];
    const TC = {};
    let GC, RC, kC = "dataLayer",
      dC = "gtag",
      YC = !1;

    function WC(DD) {
      if (YC) throw gC.create("already-initialized");
      DD.dataLayerName && (kC = DD.dataLayerName), DD.gtagName && (dC = DD.gtagName)
    }

    function sC(DD, CD, cD) {
      ! function() {
        const DD = [];
        if ((0, iD.U)() && DD.push("This is a browser extension environment."), (0, iD.m)() || DD.push("Cookies are not available."), DD.length > 0) {
          const CD = DD.map(((DD, CD) => `(${CD+1}) ${DD}`)).join(" "),
            cD = gC.create("invalid-analytics-context", {
              errorInfo: CD
            });
          vC.warn(cD.message)
        }
      }();
      const ID = DD.options.appId;
      if (!ID) throw gC.create("no-app-id");
      if (!DD.options.apiKey) {
        if (!DD.options.measurementId) throw gC.create("no-api-key");
        vC.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${DD.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
      }
      if (null != lC[ID]) throw gC.create("already-exists", {
        id: ID
      });
      if (!YC) {
        ! function(DD) {
          let CD = [];
          Array.isArray(window[DD]) ? CD = window[DD] : window[DD] = CD
        }(kC);
        const {
          wrappedGtag: DD,
          gtagCore: CD
        } = function(DD, CD, cD, ID, pD) {
          let iD = function() {
            for (var DD = arguments.length, CD = new Array(DD), cD = 0; cD < DD; cD++) CD[cD] = arguments[cD];
            window[ID].push(arguments)
          };
          return window[pD] && "function" === typeof window[pD] && (iD = window[pD]), window[pD] = OC(iD, DD, CD, cD), {
            gtagCore: iD,
            wrappedGtag: window[pD]
          }
        }(lC, LC, TC, kC, dC);
        RC = DD, GC = CD, YC = !0
      }
      lC[ID] = zC(DD, LC, TC, CD, GC, kC, cD);
      return new jC(DD)
    }

    function EC() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, ID.F)();
      DD = (0, iD.P)(DD);
      const CD = (0, ID.w)(DD, ZC);
      return CD.isInitialized() ? CD.getImmediate() : eC(DD)
    }

    function eC(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const cD = (0, ID.w)(DD, ZC);
      if (cD.isInitialized()) {
        const DD = cD.getImmediate();
        if ((0, iD.A)(CD, cD.getOptions())) return DD;
        throw gC.create("already-initialized")
      }
      return cD.initialize({
        options: CD
      })
    }
    async function uC() {
      if ((0, iD.U)()) return !1;
      if (!(0, iD.m)()) return !1;
      if (!(0, iD.$)()) return !1;
      try {
        return await (0, iD.lb)()
      } catch (DD) {
        return !1
      }
    }

    function hC(DD, CD, cD) {
      DD = (0, iD.P)(DD), async function(DD, CD, cD, ID) {
        if (ID && ID.global) return DD("set", {
          screen_name: cD
        }), Promise.resolve();
        DD("config", await CD, {
          update: !0,
          screen_name: cD
        })
      }(RC, lC[DD.app.options.appId], CD, cD).catch((DD => vC.error(DD)))
    }
    async function rC(DD) {
      return DD = (0, iD.P)(DD), async function(DD, CD) {
        const cD = await CD;
        return new Promise(((CD, ID) => {
          DD("get", cD, "client_id", (DD => {
            DD || ID(gC.create("no-client-id")), CD(DD)
          }))
        }))
      }(RC, lC[DD.app.options.appId])
    }

    function AC(DD, CD, cD) {
      DD = (0, iD.P)(DD), async function(DD, CD, cD, ID) {
        if (ID && ID.global) return DD("set", {
          user_id: cD
        }), Promise.resolve();
        DD("config", await CD, {
          update: !0,
          user_id: cD
        })
      }(RC, lC[DD.app.options.appId], CD, cD).catch((DD => vC.error(DD)))
    }

    function FC(DD, CD, cD) {
      DD = (0, iD.P)(DD), async function(DD, CD, cD, ID) {
        if (ID && ID.global) {
          const CD = {};
          for (const DD of Object.keys(cD)) CD[`user_properties.${DD}`] = cD[DD];
          return DD("set", CD), Promise.resolve()
        }
        DD("config", await CD, {
          update: !0,
          user_properties: cD
        })
      }(RC, lC[DD.app.options.appId], CD, cD).catch((DD => vC.error(DD)))
    }

    function Dc(DD, CD) {
      DD = (0, iD.P)(DD), async function(DD, CD) {
        const cD = await DD;
        window[`ga-disable-${cD}`] = !CD
      }(lC[DD.app.options.appId], CD).catch((DD => vC.error(DD)))
    }

    function Cc(DD) {
      RC ? RC("set", DD) : VC(DD)
    }

    function cc(DD, CD, cD, ID) {
      DD = (0, iD.P)(DD), async function(DD, CD, cD, ID, pD) {
        if (pD && pD.global) DD("event", cD, ID);
        else {
          const pD = await CD;
          DD("event", cD, Object.assign(Object.assign({}, ID), {
            send_to: pD
          }))
        }
      }(RC, lC[DD.app.options.appId], CD, cD, ID).catch((DD => vC.error(DD)))
    }

    function Ic(DD) {
      RC ? RC("consent", "update", DD) : aC(DD)
    }
    const pc = "@firebase/analytics",
      ic = "0.10.0";
    (0, ID.x)(new fD.g(ZC, ((DD, CD) => {
      let {
        options: cD
      } = CD;
      return sC(DD.getProvider("app").getImmediate(), DD.getProvider("installations-internal").getImmediate(), cD)
    }), "PUBLIC")), (0, ID.x)(new fD.g("analytics-internal", (function(DD) {
      try {
        const CD = DD.getProvider(ZC).getImmediate();
        return {
          logEvent: (DD, cD, ID) => cc(CD, DD, cD, ID)
        }
      } catch (CD) {
        throw gC.create("interop-component-reg-failed", {
          reason: CD
        })
      }
    }), "PRIVATE")), (0, ID.O)(pc, ic), (0, ID.O)(pc, ic, "esm2017")
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);