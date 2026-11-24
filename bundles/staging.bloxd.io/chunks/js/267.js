/*! For license information please see tz47m9.267.09b90d97.chunk.js.LICENSE.txt */
export const id = 267;
export const ids = [267];
export const modules = {
  40450: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      getAnalytics: () => uz,
      getGoogleAnalyticsClientId: () => Yz,
      initializeAnalytics: () => vz,
      isSupported: () => tz,
      logEvent: () => ww,
      setAnalyticsCollectionEnabled: () => Dw,
      setConsent: () => pw,
      setCurrentScreen: () => Fz,
      setDefaultEventParameters: () => zw,
      setUserId: () => Hz,
      setUserProperties: () => qz,
      settings: () => oz
    });
    var pD = wD(40430),
      sD = wD(40446),
      KD = wD(40442),
      rD = wD(40435);
    let LD, cD;
    const gD = new WeakMap,
      RD = new WeakMap,
      AD = new WeakMap,
      UD = new WeakMap,
      fD = new WeakMap;
    let ID = {
      get(DD, zD, wD) {
        if (DD instanceof IDBTransaction) {
          if ("done" === zD) return RD.get(DD);
          if ("objectStoreNames" === zD) return DD.objectStoreNames || AD.get(DD);
          if ("store" === zD) return wD.objectStoreNames[1] ? void 0 : wD.objectStore(wD.objectStoreNames[0])
        }
        return hD(DD[zD])
      },
      set: (DD, zD, wD) => (DD[zD] = wD, !0),
      has: (DD, zD) => DD instanceof IDBTransaction && ("done" === zD || "store" === zD) || zD in DD
    };

    function BD(DD) {
      return DD !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (cD || (cD = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(DD) ? function() {
        for (var zD = arguments.length, wD = new Array(zD), pD = 0; pD < zD; pD++) wD[pD] = arguments[pD];
        return DD.apply(nD(this), wD), hD(gD.get(this))
      } : function() {
        for (var zD = arguments.length, wD = new Array(zD), pD = 0; pD < zD; pD++) wD[pD] = arguments[pD];
        return hD(DD.apply(nD(this), wD))
      } : function(zD) {
        for (var wD = arguments.length, pD = new Array(wD > 1 ? wD - 1 : 0), sD = 1; sD < wD; sD++) pD[sD - 1] = arguments[sD];
        const KD = DD.call(nD(this), zD, ...pD);
        return AD.set(KD, zD.sort ? zD.sort() : [zD]), hD(KD)
      }
    }

    function GD(DD) {
      return "function" === typeof DD ? BD(DD) : (DD instanceof IDBTransaction && function(DD) {
        if (RD.has(DD)) return;
        const zD = new Promise(((zD, wD) => {
          const pD = () => {
              DD.removeEventListener("complete", sD), DD.removeEventListener("error", KD), DD.removeEventListener("abort", KD)
            },
            sD = () => {
              zD(), pD()
            },
            KD = () => {
              wD(DD.error || new DOMException("AbortError", "AbortError")), pD()
            };
          DD.addEventListener("complete", sD), DD.addEventListener("error", KD), DD.addEventListener("abort", KD)
        }));
        RD.set(DD, zD)
      }(DD), zD = DD, (LD || (LD = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((DD => zD instanceof DD)) ? new Proxy(DD, ID) : DD);
      var zD
    }

    function hD(DD) {
      if (DD instanceof IDBRequest) return function(DD) {
        const zD = new Promise(((zD, wD) => {
          const pD = () => {
              DD.removeEventListener("success", sD), DD.removeEventListener("error", KD)
            },
            sD = () => {
              zD(hD(DD.result)), pD()
            },
            KD = () => {
              wD(DD.error), pD()
            };
          DD.addEventListener("success", sD), DD.addEventListener("error", KD)
        }));
        return zD.then((zD => {
          zD instanceof IDBCursor && gD.set(zD, DD)
        })).catch((() => {})), fD.set(zD, DD), zD
      }(DD);
      if (UD.has(DD)) return UD.get(DD);
      const zD = GD(DD);
      return zD !== DD && (UD.set(DD, zD), fD.set(zD, DD)), zD
    }
    const nD = DD => fD.get(DD);
    const MD = ["get", "getKey", "getAll", "getAllKeys", "count"],
      OD = ["put", "add", "delete", "clear"],
      JD = new Map;

    function ED(DD, zD) {
      if (!(DD instanceof IDBDatabase) || zD in DD || "string" !== typeof zD) return;
      if (JD.get(zD)) return JD.get(zD);
      const wD = zD.replace(/FromIndex$/, ""),
        pD = zD !== wD,
        sD = OD.includes(wD);
      if (!(wD in (pD ? IDBIndex : IDBObjectStore).prototype) || !sD && !MD.includes(wD)) return;
      const KD = async function(DD) {
        const zD = this.transaction(DD, sD ? "readwrite" : "readonly");
        let KD = zD.store;
        for (var rD = arguments.length, LD = new Array(rD > 1 ? rD - 1 : 0), cD = 1; cD < rD; cD++) LD[cD - 1] = arguments[cD];
        return pD && (KD = KD.index(LD.shift())), (await Promise.all([KD[wD](...LD), sD && zD.done]))[0]
      };
      return JD.set(zD, KD), KD
    }
    ID = (DD => ({
      ...DD,
      get: (zD, wD, pD) => ED(zD, wD) || DD.get(zD, wD, pD),
      has: (zD, wD) => !!ED(zD, wD) || DD.has(zD, wD)
    }))(ID);
    const QD = "@firebase/installations",
      XD = "0.6.4",
      VD = 1e4,
      PD = `w:${XD}`,
      CD = "FIS_v2",
      xD = 36e5,
      TD = {
        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
        "not-registered": "Firebase Installation is not registered.",
        "installation-not-found": "Firebase Installation not found.",
        "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        "app-offline": "Could not process request. Application offline.",
        "delete-pending-registration": "Can't delete installation while there is a pending registration request."
      },
      bD = new KD.c("installations", "Installations", TD);

    function jD(DD) {
      return DD instanceof KD.e && DD.code.includes("request-failed")
    }

    function dD(DD) {
      let {
        projectId: zD
      } = DD;
      return `https://firebaseinstallations.googleapis.com/v1/projects/${zD}/installations`
    }

    function SD(DD) {
      return {
        token: DD.token,
        requestStatus: 2,
        expiresIn: (zD = DD.expiresIn, Number(zD.replace("s", "000"))),
        creationTime: Date.now()
      };
      var zD
    }
    async function iD(DD, zD) {
      const wD = (await zD.json()).error;
      return bD.create("request-failed", {
        requestName: DD,
        serverCode: wD.code,
        serverMessage: wD.message,
        serverStatus: wD.status
      })
    }

    function lD(DD) {
      let {
        apiKey: zD
      } = DD;
      return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": zD
      })
    }

    function WD(DD, zD) {
      let {
        refreshToken: wD
      } = zD;
      const pD = lD(DD);
      return pD.append("Authorization", function(DD) {
        return `${CD} ${DD}`
      }(wD)), pD
    }
    async function ND(DD) {
      const zD = await DD();
      return zD.status >= 500 && zD.status < 600 ? DD() : zD
    }

    function ZD(DD) {
      return new Promise((zD => {
        setTimeout(zD, DD)
      }))
    }
    const yD = /^[cdef][\w-]{21}$/;

    function kD() {
      try {
        const DD = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(DD), DD[0] = 112 + DD[0] % 16;
        const zD = function(DD) {
          const zD = (wD = DD, btoa(String.fromCharCode(...wD)).replace(/\+/g, "-").replace(/\//g, "_"));
          var wD;
          return zD.substr(0, 22)
        }(DD);
        return yD.test(zD) ? zD : ""
      } catch (DD) {
        return ""
      }
    }

    function mD(DD) {
      return `${DD.appName}!${DD.appId}`
    }
    const eD = new Map;

    function oD(DD, zD) {
      const wD = mD(DD);
      aD(wD, zD),
        function(DD, zD) {
          const wD = vD();
          wD && wD.postMessage({
            key: DD,
            fid: zD
          });
          tD()
        }(wD, zD)
    }

    function aD(DD, zD) {
      const wD = eD.get(DD);
      if (wD)
        for (const pD of wD) pD(zD)
    }
    let uD = null;

    function vD() {
      return !uD && "BroadcastChannel" in self && (uD = new BroadcastChannel("[Firebase] FID Change"), uD.onmessage = DD => {
        aD(DD.data.key, DD.data.fid)
      }), uD
    }

    function tD() {
      0 === eD.size && uD && (uD.close(), uD = null)
    }
    const FD = "firebase-installations-store";
    let YD = null;

    function HD() {
      return YD || (YD = function(DD, zD) {
        let {
          blocked: wD,
          upgrade: pD,
          blocking: sD,
          terminated: KD
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const rD = indexedDB.open(DD, zD),
          LD = hD(rD);
        return pD && rD.addEventListener("upgradeneeded", (DD => {
          pD(hD(rD.result), DD.oldVersion, DD.newVersion, hD(rD.transaction))
        })), wD && rD.addEventListener("blocked", (() => wD())), LD.then((DD => {
          KD && DD.addEventListener("close", (() => KD())), sD && DD.addEventListener("versionchange", (() => sD()))
        })).catch((() => {})), LD
      }("firebase-installations-database", 1, {
        upgrade: (DD, zD) => {
          if (0 === zD) DD.createObjectStore(FD)
        }
      })), YD
    }
    async function qD(DD, zD) {
      const wD = mD(DD),
        pD = (await HD()).transaction(FD, "readwrite"),
        sD = pD.objectStore(FD),
        KD = await sD.get(wD);
      return await sD.put(zD, wD), await pD.done, KD && KD.fid === zD.fid || oD(DD, zD.fid), zD
    }
    async function Dz(DD) {
      const zD = mD(DD),
        wD = (await HD()).transaction(FD, "readwrite");
      await wD.objectStore(FD).delete(zD), await wD.done
    }
    async function zz(DD, zD) {
      const wD = mD(DD),
        pD = (await HD()).transaction(FD, "readwrite"),
        sD = pD.objectStore(FD),
        KD = await sD.get(wD),
        rD = zD(KD);
      return void 0 === rD ? await sD.delete(wD) : await sD.put(rD, wD), await pD.done, !rD || KD && KD.fid === rD.fid || oD(DD, rD.fid), rD
    }
    async function wz(DD) {
      let zD;
      const wD = await zz(DD.appConfig, (wD => {
        const pD = function(DD) {
            const zD = DD || {
              fid: kD(),
              registrationStatus: 0
            };
            return Kz(zD)
          }(wD),
          sD = function(DD, zD) {
            if (0 === zD.registrationStatus) {
              if (!navigator.onLine) {
                return {
                  installationEntry: zD,
                  registrationPromise: Promise.reject(bD.create("app-offline"))
                }
              }
              const wD = {
                  fid: zD.fid,
                  registrationStatus: 1,
                  registrationTime: Date.now()
                },
                pD = async function(DD, zD) {
                  try {
                    const wD = await async function(DD, zD) {
                      let {
                        appConfig: wD,
                        heartbeatServiceProvider: pD
                      } = DD, {
                        fid: sD
                      } = zD;
                      const KD = dD(wD),
                        rD = lD(wD),
                        LD = pD.getImmediate({
                          optional: !0
                        });
                      if (LD) {
                        const DD = await LD.getHeartbeatsHeader();
                        DD && rD.append("x-firebase-client", DD)
                      }
                      const cD = {
                          fid: sD,
                          authVersion: CD,
                          appId: wD.appId,
                          sdkVersion: PD
                        },
                        gD = {
                          method: "POST",
                          headers: rD,
                          body: JSON.stringify(cD)
                        },
                        RD = await ND((() => fetch(KD, gD)));
                      if (RD.ok) {
                        const DD = await RD.json();
                        return {
                          fid: DD.fid || sD,
                          registrationStatus: 2,
                          refreshToken: DD.refreshToken,
                          authToken: SD(DD.authToken)
                        }
                      }
                      throw await iD("Create Installation", RD)
                    }(DD, zD);
                    return qD(DD.appConfig, wD)
                  } catch (wD) {
                    throw jD(wD) && 409 === wD.customData.serverCode ? await Dz(DD.appConfig) : await qD(DD.appConfig, {
                      fid: zD.fid,
                      registrationStatus: 0
                    }), wD
                  }
                }(DD, wD);
              return {
                installationEntry: wD,
                registrationPromise: pD
              }
            }
            return 1 === zD.registrationStatus ? {
              installationEntry: zD,
              registrationPromise: pz(DD)
            } : {
              installationEntry: zD
            }
          }(DD, pD);
        return zD = sD.registrationPromise, sD.installationEntry
      }));
      return "" === wD.fid ? {
        installationEntry: await zD
      } : {
        installationEntry: wD,
        registrationPromise: zD
      }
    }
    async function pz(DD) {
      let zD = await sz(DD.appConfig);
      for (; 1 === zD.registrationStatus;) await ZD(100), zD = await sz(DD.appConfig);
      if (0 === zD.registrationStatus) {
        const {
          installationEntry: zD,
          registrationPromise: wD
        } = await wz(DD);
        return wD || zD
      }
      return zD
    }

    function sz(DD) {
      return zz(DD, (DD => {
        if (!DD) throw bD.create("installation-not-found");
        return Kz(DD)
      }))
    }

    function Kz(DD) {
      return 1 === (zD = DD).registrationStatus && zD.registrationTime + VD < Date.now() ? {
        fid: DD.fid,
        registrationStatus: 0
      } : DD;
      var zD
    }
    async function rz(DD, zD) {
      let {
        appConfig: wD,
        heartbeatServiceProvider: pD
      } = DD;
      const sD = function(DD, zD) {
          let {
            fid: wD
          } = zD;
          return `${dD(DD)}/${wD}/authTokens:generate`
        }(wD, zD),
        KD = WD(wD, zD),
        rD = pD.getImmediate({
          optional: !0
        });
      if (rD) {
        const DD = await rD.getHeartbeatsHeader();
        DD && KD.append("x-firebase-client", DD)
      }
      const LD = {
          installation: {
            sdkVersion: PD,
            appId: wD.appId
          }
        },
        cD = {
          method: "POST",
          headers: KD,
          body: JSON.stringify(LD)
        },
        gD = await ND((() => fetch(sD, cD)));
      if (gD.ok) {
        return SD(await gD.json())
      }
      throw await iD("Generate Auth Token", gD)
    }
    async function Lz(DD) {
      let zD, wD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const pD = await zz(DD.appConfig, (pD => {
        if (!gz(pD)) throw bD.create("not-registered");
        const sD = pD.authToken;
        if (!wD && function(DD) {
            return 2 === DD.requestStatus && ! function(DD) {
              const zD = Date.now();
              return zD < DD.creationTime || DD.creationTime + DD.expiresIn < zD + xD
            }(DD)
          }(sD)) return pD;
        if (1 === sD.requestStatus) return zD = async function(DD, zD) {
          let wD = await cz(DD.appConfig);
          for (; 1 === wD.authToken.requestStatus;) await ZD(100), wD = await cz(DD.appConfig);
          const pD = wD.authToken;
          return 0 === pD.requestStatus ? Lz(DD, zD) : pD
        }(DD, wD), pD;
        {
          if (!navigator.onLine) throw bD.create("app-offline");
          const wD = function(DD) {
            const zD = {
              requestStatus: 1,
              requestTime: Date.now()
            };
            return Object.assign(Object.assign({}, DD), {
              authToken: zD
            })
          }(pD);
          return zD = async function(DD, zD) {
            try {
              const wD = await rz(DD, zD),
                pD = Object.assign(Object.assign({}, zD), {
                  authToken: wD
                });
              return await qD(DD.appConfig, pD), wD
            } catch (wD) {
              if (!jD(wD) || 401 !== wD.customData.serverCode && 404 !== wD.customData.serverCode) {
                const wD = Object.assign(Object.assign({}, zD), {
                  authToken: {
                    requestStatus: 0
                  }
                });
                await qD(DD.appConfig, wD)
              } else await Dz(DD.appConfig);
              throw wD
            }
          }(DD, wD), wD
        }
      }));
      return zD ? await zD : pD.authToken
    }

    function cz(DD) {
      return zz(DD, (DD => {
        if (!gz(DD)) throw bD.create("not-registered");
        const zD = DD.authToken;
        return 1 === (wD = zD).requestStatus && wD.requestTime + VD < Date.now() ? Object.assign(Object.assign({}, DD), {
          authToken: {
            requestStatus: 0
          }
        }) : DD;
        var wD
      }))
    }

    function gz(DD) {
      return void 0 !== DD && 2 === DD.registrationStatus
    }
    async function Rz(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const wD = DD;
      await async function(DD) {
        const {
          registrationPromise: zD
        } = await wz(DD);
        zD && await zD
      }(wD);
      return (await Lz(wD, zD)).token
    }

    function Az(DD) {
      return bD.create("missing-app-config-values", {
        valueName: DD
      })
    }
    const Uz = "installations",
      fz = DD => {
        const zD = DD.getProvider("app").getImmediate(),
          wD = function(DD) {
            if (!DD || !DD.options) throw Az("App Configuration");
            if (!DD.name) throw Az("App Name");
            const zD = ["projectId", "apiKey", "appId"];
            for (const wD of zD)
              if (!DD.options[wD]) throw Az(wD);
            return {
              appName: DD.name,
              projectId: DD.options.projectId,
              apiKey: DD.options.apiKey,
              appId: DD.options.appId
            }
          }(zD);
        return {
          app: zD,
          appConfig: wD,
          heartbeatServiceProvider: (0, pD.v)(zD, "heartbeat"),
          _delete: () => Promise.resolve()
        }
      },
      Iz = DD => {
        const zD = DD.getProvider("app").getImmediate(),
          wD = (0, pD.v)(zD, Uz).getImmediate();
        return {
          getId: () => async function(DD) {
            const zD = DD,
              {
                installationEntry: wD,
                registrationPromise: pD
              } = await wz(zD);
            return pD ? pD.catch(console.error) : Lz(zD).catch(console.error), wD.fid
          }(wD),
          getToken: DD => Rz(wD, DD)
        }
      };
    (0, pD.z)(new rD.f(Uz, fz, "PUBLIC")), (0, pD.z)(new rD.f("installations-internal", Iz, "PRIVATE")), (0, pD.T)(QD, XD), (0, pD.T)(QD, XD, "esm2017");
    const Bz = "analytics",
      Gz = "https://www.googletagmanager.com/gtag/js",
      hz = new sD.h("@firebase/analytics"),
      nz = {
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
      Mz = new KD.c("analytics", "Analytics", nz);

    function Oz(DD) {
      if (!DD.startsWith(Gz)) {
        const zD = Mz.create("invalid-gtag-resource", {
          gtagURL: DD
        });
        return hz.warn(zD.message), ""
      }
      return DD
    }

    function Jz(DD) {
      return Promise.all(DD.map((DD => DD.catch((DD => DD)))))
    }

    function Ez(DD, zD) {
      const wD = function(DD, zD) {
          let wD;
          return window.trustedTypes && (wD = window.trustedTypes.createPolicy(DD, zD)), wD
        }("firebase-js-sdk-policy", {
          createScriptURL: Oz
        }),
        pD = document.createElement("script"),
        sD = `${Gz}?l=${DD}&id=${zD}`;
      pD.src = wD ? null === wD || void 0 === wD ? void 0 : wD.createScriptURL(sD) : sD, pD.async = !0, document.head.appendChild(pD)
    }

    function Qz(DD, zD, wD, pD) {
      return async function(sD) {
        try {
          for (var KD = arguments.length, rD = new Array(KD > 1 ? KD - 1 : 0), LD = 1; LD < KD; LD++) rD[LD - 1] = arguments[LD];
          if ("event" === sD) {
            const [pD, sD] = rD;
            await async function(DD, zD, wD, pD, sD) {
              try {
                let KD = [];
                if (sD && sD.send_to) {
                  let DD = sD.send_to;
                  Array.isArray(DD) || (DD = [DD]);
                  const pD = await Jz(wD);
                  for (const wD of DD) {
                    const DD = pD.find((DD => DD.measurementId === wD)),
                      sD = DD && zD[DD.appId];
                    if (!sD) {
                      KD = [];
                      break
                    }
                    KD.push(sD)
                  }
                }
                0 === KD.length && (KD = Object.values(zD)), await Promise.all(KD), DD("event", pD, sD || {})
              } catch (KD) {
                hz.error(KD)
              }
            }(DD, zD, wD, pD, sD)
          } else if ("config" === sD) {
            const [sD, KD] = rD;
            await async function(DD, zD, wD, pD, sD, KD) {
              const rD = pD[sD];
              try {
                if (rD) await zD[rD];
                else {
                  const DD = (await Jz(wD)).find((DD => DD.measurementId === sD));
                  DD && await zD[DD.appId]
                }
              } catch (LD) {
                hz.error(LD)
              }
              DD("config", sD, KD)
            }(DD, zD, wD, pD, sD, KD)
          } else if ("consent" === sD) {
            const [zD] = rD;
            DD("consent", "update", zD)
          } else if ("get" === sD) {
            const [zD, wD, pD] = rD;
            DD("get", zD, wD, pD)
          } else if ("set" === sD) {
            const [zD] = rD;
            DD("set", zD)
          } else DD(sD, ...rD)
        } catch (cD) {
          hz.error(cD)
        }
      }
    }
    const Xz = new class {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
        this.throttleMetadata = DD, this.intervalMillis = zD
      }
      getThrottleMetadata(DD) {
        return this.throttleMetadata[DD]
      }
      setThrottleMetadata(DD, zD) {
        this.throttleMetadata[DD] = zD
      }
      deleteThrottleMetadata(DD) {
        delete this.throttleMetadata[DD]
      }
    };

    function Vz(DD) {
      return new Headers({
        Accept: "application/json",
        "x-goog-api-key": DD
      })
    }
    async function Pz(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xz,
        wD = arguments.length > 2 ? arguments[2] : void 0;
      const {
        appId: pD,
        apiKey: sD,
        measurementId: KD
      } = DD.options;
      if (!pD) throw Mz.create("no-app-id");
      if (!sD) {
        if (KD) return {
          measurementId: KD,
          appId: pD
        };
        throw Mz.create("no-api-key")
      }
      const rD = zD.getThrottleMetadata(pD) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        },
        LD = new xz;
      return setTimeout((async () => {
        LD.abort()
      }), void 0 !== wD ? wD : 6e4), Cz({
        appId: pD,
        apiKey: sD,
        measurementId: KD
      }, rD, LD, zD)
    }
    async function Cz(DD, zD, wD) {
      let {
        throttleEndTimeMillis: pD,
        backoffCount: sD
      } = zD, rD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Xz;
      var LD;
      const {
        appId: cD,
        measurementId: gD
      } = DD;
      try {
        await
        function(DD, zD) {
          return new Promise(((wD, pD) => {
            const sD = Math.max(zD - Date.now(), 0),
              KD = setTimeout(wD, sD);
            DD.addEventListener((() => {
              clearTimeout(KD), pD(Mz.create("fetch-throttle", {
                throttleEndTimeMillis: zD
              }))
            }))
          }))
        }(wD, pD)
      } catch (RD) {
        if (gD) return hz.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${gD} provided in the "measurementId" field in the local Firebase config. [${null===RD||void 0===RD?void 0:RD.message}]`), {
          appId: cD,
          measurementId: gD
        };
        throw RD
      }
      try {
        const zD = await async function(DD) {
          var zD;
          const {
            appId: wD,
            apiKey: pD
          } = DD, sD = {
            method: "GET",
            headers: Vz(pD)
          }, KD = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", wD), rD = await fetch(KD, sD);
          if (200 !== rD.status && 304 !== rD.status) {
            let DD = "";
            try {
              const wD = await rD.json();
              (null === (zD = wD.error) || void 0 === zD ? void 0 : zD.message) && (DD = wD.error.message)
            } catch (LD) {}
            throw Mz.create("config-fetch-failed", {
              httpStatus: rD.status,
              responseMessage: DD
            })
          }
          return rD.json()
        }(DD);
        return rD.deleteThrottleMetadata(cD), zD
      } catch (RD) {
        const zD = RD;
        if (! function(DD) {
            if (!(DD instanceof KD.e) || !DD.customData) return !1;
            const zD = Number(DD.customData.httpStatus);
            return 429 === zD || 500 === zD || 503 === zD || 504 === zD
          }(zD)) {
          if (rD.deleteThrottleMetadata(cD), gD) return hz.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${gD} provided in the "measurementId" field in the local Firebase config. [${null===zD||void 0===zD?void 0:zD.message}]`), {
            appId: cD,
            measurementId: gD
          };
          throw RD
        }
        const pD = 503 === Number(null === (LD = null === zD || void 0 === zD ? void 0 : zD.customData) || void 0 === LD ? void 0 : LD.httpStatus) ? (0, KD.p)(sD, rD.intervalMillis, 30) : (0, KD.p)(sD, rD.intervalMillis),
          AD = {
            throttleEndTimeMillis: Date.now() + pD,
            backoffCount: sD + 1
          };
        return rD.setThrottleMetadata(cD, AD), hz.debug(`Calling attemptFetch again in ${pD} millis`), Cz(DD, AD, wD, rD)
      }
    }
    class xz {
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
    let Tz, bz;

    function jz(DD) {
      bz = DD
    }

    function dz(DD) {
      Tz = DD
    }
    async function Sz(DD, zD, wD, pD, sD, rD, LD) {
      var cD;
      const gD = Pz(DD);
      gD.then((zD => {
        wD[zD.measurementId] = zD.appId, DD.options.measurementId && zD.measurementId !== DD.options.measurementId && hz.warn(`The measurement ID in the local Firebase config (${DD.options.measurementId}) does not match the measurement ID fetched from the server (${zD.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
      })).catch((DD => hz.error(DD))), zD.push(gD);
      const RD = async function() {
        if (!(0, KD.Q)()) return hz.warn(Mz.create("indexeddb-unavailable", {
          errorInfo: "IndexedDB is not available in this environment."
        }).message), !1;
        try {
          await (0, KD.ab)()
        } catch (DD) {
          return hz.warn(Mz.create("indexeddb-unavailable", {
            errorInfo: null === DD || void 0 === DD ? void 0 : DD.toString()
          }).message), !1
        }
        return !0
      }().then((DD => DD ? pD.getId() : void 0)), [AD, UD] = await Promise.all([gD, RD]);
      (function(DD) {
        const zD = window.document.getElementsByTagName("script");
        for (const wD of Object.values(zD))
          if (wD.src && wD.src.includes(Gz) && wD.src.includes(DD)) return wD;
        return null
      })(rD) || Ez(rD, AD.measurementId), bz && (sD("consent", "default", bz), jz(void 0)), sD("js", new Date);
      const fD = null !== (cD = null === LD || void 0 === LD ? void 0 : LD.config) && void 0 !== cD ? cD : {};
      return fD.origin = "firebase", fD.update = !0, null != UD && (fD.firebase_id = UD), sD("config", AD.measurementId, fD), Tz && (sD("set", Tz), dz(void 0)), AD.measurementId
    }
    class iz {
      constructor(DD) {
        this.app = DD
      }
      _delete() {
        return delete lz[this.app.options.appId], Promise.resolve()
      }
    }
    let lz = {},
      Wz = [];
    const Nz = {};
    let Zz, yz, kz = "dataLayer",
      mz = "gtag",
      ez = !1;

    function oz(DD) {
      if (ez) throw Mz.create("already-initialized");
      DD.dataLayerName && (kz = DD.dataLayerName), DD.gtagName && (mz = DD.gtagName)
    }

    function az(DD, zD, wD) {
      ! function() {
        const DD = [];
        if ((0, KD.L)() && DD.push("This is a browser extension environment."), (0, KD.g)() || DD.push("Cookies are not available."), DD.length > 0) {
          const zD = DD.map(((DD, zD) => `(${zD+1}) ${DD}`)).join(" "),
            wD = Mz.create("invalid-analytics-context", {
              errorInfo: zD
            });
          hz.warn(wD.message)
        }
      }();
      const pD = DD.options.appId;
      if (!pD) throw Mz.create("no-app-id");
      if (!DD.options.apiKey) {
        if (!DD.options.measurementId) throw Mz.create("no-api-key");
        hz.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${DD.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
      }
      if (null != lz[pD]) throw Mz.create("already-exists", {
        id: pD
      });
      if (!ez) {
        ! function(DD) {
          let zD = [];
          Array.isArray(window[DD]) ? zD = window[DD] : window[DD] = zD
        }(kz);
        const {
          wrappedGtag: DD,
          gtagCore: zD
        } = function(DD, zD, wD, pD, sD) {
          let KD = function() {
            for (var DD = arguments.length, zD = new Array(DD), wD = 0; wD < DD; wD++) zD[wD] = arguments[wD];
            window[pD].push(arguments)
          };
          return window[sD] && "function" === typeof window[sD] && (KD = window[sD]), window[sD] = Qz(KD, DD, zD, wD), {
            gtagCore: KD,
            wrappedGtag: window[sD]
          }
        }(lz, Wz, Nz, kz, mz);
        yz = DD, Zz = zD, ez = !0
      }
      lz[pD] = Sz(DD, Wz, Nz, zD, Zz, kz, wD);
      return new iz(DD)
    }

    function uz() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, pD.K)();
      DD = (0, KD.H)(DD);
      const zD = (0, pD.v)(DD, Bz);
      return zD.isInitialized() ? zD.getImmediate() : vz(DD)
    }

    function vz(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const wD = (0, pD.v)(DD, Bz);
      if (wD.isInitialized()) {
        const DD = wD.getImmediate();
        if ((0, KD.u)(zD, wD.getOptions())) return DD;
        throw Mz.create("already-initialized")
      }
      return wD.initialize({
        options: zD
      })
    }
    async function tz() {
      if ((0, KD.L)()) return !1;
      if (!(0, KD.g)()) return !1;
      if (!(0, KD.Q)()) return !1;
      try {
        return await (0, KD.ab)()
      } catch (DD) {
        return !1
      }
    }

    function Fz(DD, zD, wD) {
      DD = (0, KD.H)(DD), async function(DD, zD, wD, pD) {
        if (pD && pD.global) return DD("set", {
          screen_name: wD
        }), Promise.resolve();
        DD("config", await zD, {
          update: !0,
          screen_name: wD
        })
      }(yz, lz[DD.app.options.appId], zD, wD).catch((DD => hz.error(DD)))
    }
    async function Yz(DD) {
      return DD = (0, KD.H)(DD), async function(DD, zD) {
        const wD = await zD;
        return new Promise(((zD, pD) => {
          DD("get", wD, "client_id", (DD => {
            DD || pD(Mz.create("no-client-id")), zD(DD)
          }))
        }))
      }(yz, lz[DD.app.options.appId])
    }

    function Hz(DD, zD, wD) {
      DD = (0, KD.H)(DD), async function(DD, zD, wD, pD) {
        if (pD && pD.global) return DD("set", {
          user_id: wD
        }), Promise.resolve();
        DD("config", await zD, {
          update: !0,
          user_id: wD
        })
      }(yz, lz[DD.app.options.appId], zD, wD).catch((DD => hz.error(DD)))
    }

    function qz(DD, zD, wD) {
      DD = (0, KD.H)(DD), async function(DD, zD, wD, pD) {
        if (pD && pD.global) {
          const zD = {};
          for (const DD of Object.keys(wD)) zD[`user_properties.${DD}`] = wD[DD];
          return DD("set", zD), Promise.resolve()
        }
        DD("config", await zD, {
          update: !0,
          user_properties: wD
        })
      }(yz, lz[DD.app.options.appId], zD, wD).catch((DD => hz.error(DD)))
    }

    function Dw(DD, zD) {
      DD = (0, KD.H)(DD), async function(DD, zD) {
        const wD = await DD;
        window[`ga-disable-${wD}`] = !zD
      }(lz[DD.app.options.appId], zD).catch((DD => hz.error(DD)))
    }

    function zw(DD) {
      yz ? yz("set", DD) : dz(DD)
    }

    function ww(DD, zD, wD, pD) {
      DD = (0, KD.H)(DD), async function(DD, zD, wD, pD, sD) {
        if (sD && sD.global) DD("event", wD, pD);
        else {
          const sD = await zD;
          DD("event", wD, Object.assign(Object.assign({}, pD), {
            send_to: sD
          }))
        }
      }(yz, lz[DD.app.options.appId], zD, wD, pD).catch((DD => hz.error(DD)))
    }

    function pw(DD) {
      yz ? yz("consent", "update", DD) : jz(DD)
    }
    const sw = "@firebase/analytics",
      Kw = "0.10.0";
    (0, pD.z)(new rD.f(Bz, ((DD, zD) => {
      let {
        options: wD
      } = zD;
      return az(DD.getProvider("app").getImmediate(), DD.getProvider("installations-internal").getImmediate(), wD)
    }), "PUBLIC")), (0, pD.z)(new rD.f("analytics-internal", (function(DD) {
      try {
        const zD = DD.getProvider(Bz).getImmediate();
        return {
          logEvent: (DD, wD, pD) => ww(zD, DD, wD, pD)
        }
      } catch (zD) {
        throw Mz.create("interop-component-reg-failed", {
          reason: zD
        })
      }
    }), "PRIVATE")), (0, pD.T)(sw, Kw), (0, pD.T)(sw, Kw, "esm2017")
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);