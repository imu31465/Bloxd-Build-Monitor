/*! For license information please see yma3ej.271.8d8f530e.chunk.js.LICENSE.txt */
export const id = 271;
export const ids = [271];
export const modules = {
  40653: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      getAnalytics: () => NU,
      getGoogleAnalyticsClientId: () => oU,
      initializeAnalytics: () => EU,
      isSupported: () => hU,
      logEvent: () => mm,
      setAnalyticsCollectionEnabled: () => Tm,
      setConsent: () => Wm,
      setCurrentScreen: () => DU,
      setDefaultEventParameters: () => Um,
      setUserId: () => AU,
      setUserProperties: () => RU,
      settings: () => SU
    });
    var WT = mT(40631),
      zT = mT(40651),
      MT = mT(40643),
      gT = mT(40639);
    let nT, HT;
    const kT = new WeakMap,
      jT = new WeakMap,
      lT = new WeakMap,
      LT = new WeakMap,
      pT = new WeakMap;
    let BT = {
      get(TT, UT, mT) {
        if (TT instanceof IDBTransaction) {
          if ("done" === UT) return jT.get(TT);
          if ("objectStoreNames" === UT) return TT.objectStoreNames || lT.get(TT);
          if ("store" === UT) return mT.objectStoreNames[1] ? void 0 : mT.objectStore(mT.objectStoreNames[0])
        }
        return vT(TT[UT])
      },
      set: (TT, UT, mT) => (TT[UT] = mT, !0),
      has: (TT, UT) => TT instanceof IDBTransaction && ("done" === UT || "store" === UT) || UT in TT
    };

    function ZT(TT) {
      return TT !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (HT || (HT = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(TT) ? function() {
        for (var UT = arguments.length, mT = new Array(UT), WT = 0; WT < UT; WT++) mT[WT] = arguments[WT];
        return TT.apply(fT(this), mT), vT(kT.get(this))
      } : function() {
        for (var UT = arguments.length, mT = new Array(UT), WT = 0; WT < UT; WT++) mT[WT] = arguments[WT];
        return vT(TT.apply(fT(this), mT))
      } : function(UT) {
        for (var mT = arguments.length, WT = new Array(mT > 1 ? mT - 1 : 0), zT = 1; zT < mT; zT++) WT[zT - 1] = arguments[zT];
        const MT = TT.call(fT(this), UT, ...WT);
        return lT.set(MT, UT.sort ? UT.sort() : [UT]), vT(MT)
      }
    }

    function cT(TT) {
      return "function" === typeof TT ? ZT(TT) : (TT instanceof IDBTransaction && function(TT) {
        if (jT.has(TT)) return;
        const UT = new Promise(((UT, mT) => {
          const WT = () => {
              TT.removeEventListener("complete", zT), TT.removeEventListener("error", MT), TT.removeEventListener("abort", MT)
            },
            zT = () => {
              UT(), WT()
            },
            MT = () => {
              mT(TT.error || new DOMException("AbortError", "AbortError")), WT()
            };
          TT.addEventListener("complete", zT), TT.addEventListener("error", MT), TT.addEventListener("abort", MT)
        }));
        jT.set(TT, UT)
      }(TT), UT = TT, (nT || (nT = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((TT => UT instanceof TT)) ? new Proxy(TT, BT) : TT);
      var UT
    }

    function vT(TT) {
      if (TT instanceof IDBRequest) return function(TT) {
        const UT = new Promise(((UT, mT) => {
          const WT = () => {
              TT.removeEventListener("success", zT), TT.removeEventListener("error", MT)
            },
            zT = () => {
              UT(vT(TT.result)), WT()
            },
            MT = () => {
              mT(TT.error), WT()
            };
          TT.addEventListener("success", zT), TT.addEventListener("error", MT)
        }));
        return UT.then((UT => {
          UT instanceof IDBCursor && kT.set(UT, TT)
        })).catch((() => {})), pT.set(UT, TT), UT
      }(TT);
      if (LT.has(TT)) return LT.get(TT);
      const UT = cT(TT);
      return UT !== TT && (LT.set(TT, UT), pT.set(UT, TT)), UT
    }
    const fT = TT => pT.get(TT);
    const qT = ["get", "getKey", "getAll", "getAllKeys", "count"],
      iT = ["put", "add", "delete", "clear"],
      bT = new Map;

    function OT(TT, UT) {
      if (!(TT instanceof IDBDatabase) || UT in TT || "string" !== typeof UT) return;
      if (bT.get(UT)) return bT.get(UT);
      const mT = UT.replace(/FromIndex$/, ""),
        WT = UT !== mT,
        zT = iT.includes(mT);
      if (!(mT in (WT ? IDBIndex : IDBObjectStore).prototype) || !zT && !qT.includes(mT)) return;
      const MT = async function(TT) {
        const UT = this.transaction(TT, zT ? "readwrite" : "readonly");
        let MT = UT.store;
        for (var gT = arguments.length, nT = new Array(gT > 1 ? gT - 1 : 0), HT = 1; HT < gT; HT++) nT[HT - 1] = arguments[HT];
        return WT && (MT = MT.index(nT.shift())), (await Promise.all([MT[mT](...nT), zT && UT.done]))[0]
      };
      return bT.set(UT, MT), MT
    }
    BT = (TT => ({
      ...TT,
      get: (UT, mT, WT) => OT(UT, mT) || TT.get(UT, mT, WT),
      has: (UT, mT) => !!OT(UT, mT) || TT.has(UT, mT)
    }))(BT);
    const eT = "@firebase/installations",
      YT = "0.6.4",
      JT = 1e4,
      xT = `w:${YT}`,
      dT = "FIS_v2",
      wT = 36e5,
      tT = {
        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
        "not-registered": "Firebase Installation is not registered.",
        "installation-not-found": "Firebase Installation not found.",
        "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        "app-offline": "Could not process request. Application offline.",
        "delete-pending-registration": "Can't delete installation while there is a pending registration request."
      },
      aT = new MT.g("installations", "Installations", tT);

    function yT(TT) {
      return TT instanceof MT.i && TT.code.includes("request-failed")
    }

    function XT(TT) {
      let {
        projectId: UT
      } = TT;
      return `https://firebaseinstallations.googleapis.com/v1/projects/${UT}/installations`
    }

    function IT(TT) {
      return {
        token: TT.token,
        requestStatus: 2,
        expiresIn: (UT = TT.expiresIn, Number(UT.replace("s", "000"))),
        creationTime: Date.now()
      };
      var UT
    }
    async function QT(TT, UT) {
      const mT = (await UT.json()).error;
      return aT.create("request-failed", {
        requestName: TT,
        serverCode: mT.code,
        serverMessage: mT.message,
        serverStatus: mT.status
      })
    }

    function sT(TT) {
      let {
        apiKey: UT
      } = TT;
      return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": UT
      })
    }

    function FT(TT, UT) {
      let {
        refreshToken: mT
      } = UT;
      const WT = sT(TT);
      return WT.append("Authorization", function(TT) {
        return `${dT} ${TT}`
      }(mT)), WT
    }
    async function PT(TT) {
      const UT = await TT();
      return UT.status >= 500 && UT.status < 600 ? TT() : UT
    }

    function VT(TT) {
      return new Promise((UT => {
        setTimeout(UT, TT)
      }))
    }
    const uT = /^[cdef][\w-]{21}$/;

    function CT() {
      try {
        const TT = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(TT), TT[0] = 112 + TT[0] % 16;
        const UT = function(TT) {
          const UT = (mT = TT, btoa(String.fromCharCode(...mT)).replace(/\+/g, "-").replace(/\//g, "_"));
          var mT;
          return UT.substr(0, 22)
        }(TT);
        return uT.test(UT) ? UT : ""
      } catch (TT) {
        return ""
      }
    }

    function rT(TT) {
      return `${TT.appName}!${TT.appId}`
    }
    const KT = new Map;

    function ST(TT, UT) {
      const mT = rT(TT);
      GT(mT, UT),
        function(TT, UT) {
          const mT = ET();
          mT && mT.postMessage({
            key: TT,
            fid: UT
          });
          hT()
        }(mT, UT)
    }

    function GT(TT, UT) {
      const mT = KT.get(TT);
      if (mT)
        for (const WT of mT) WT(UT)
    }
    let NT = null;

    function ET() {
      return !NT && "BroadcastChannel" in self && (NT = new BroadcastChannel("[Firebase] FID Change"), NT.onmessage = TT => {
        GT(TT.data.key, TT.data.fid)
      }), NT
    }

    function hT() {
      0 === KT.size && NT && (NT.close(), NT = null)
    }
    const DT = "firebase-installations-store";
    let oT = null;

    function AT() {
      return oT || (oT = function(TT, UT) {
        let {
          blocked: mT,
          upgrade: WT,
          blocking: zT,
          terminated: MT
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const gT = indexedDB.open(TT, UT),
          nT = vT(gT);
        return WT && gT.addEventListener("upgradeneeded", (TT => {
          WT(vT(gT.result), TT.oldVersion, TT.newVersion, vT(gT.transaction))
        })), mT && gT.addEventListener("blocked", (() => mT())), nT.then((TT => {
          MT && TT.addEventListener("close", (() => MT())), zT && TT.addEventListener("versionchange", (() => zT()))
        })).catch((() => {})), nT
      }("firebase-installations-database", 1, {
        upgrade: (TT, UT) => {
          if (0 === UT) TT.createObjectStore(DT)
        }
      })), oT
    }
    async function RT(TT, UT) {
      const mT = rT(TT),
        WT = (await AT()).transaction(DT, "readwrite"),
        zT = WT.objectStore(DT),
        MT = await zT.get(mT);
      return await zT.put(UT, mT), await WT.done, MT && MT.fid === UT.fid || ST(TT, UT.fid), UT
    }
    async function TU(TT) {
      const UT = rT(TT),
        mT = (await AT()).transaction(DT, "readwrite");
      await mT.objectStore(DT).delete(UT), await mT.done
    }
    async function UU(TT, UT) {
      const mT = rT(TT),
        WT = (await AT()).transaction(DT, "readwrite"),
        zT = WT.objectStore(DT),
        MT = await zT.get(mT),
        gT = UT(MT);
      return void 0 === gT ? await zT.delete(mT) : await zT.put(gT, mT), await WT.done, !gT || MT && MT.fid === gT.fid || ST(TT, gT.fid), gT
    }
    async function mU(TT) {
      let UT;
      const mT = await UU(TT.appConfig, (mT => {
        const WT = function(TT) {
            const UT = TT || {
              fid: CT(),
              registrationStatus: 0
            };
            return MU(UT)
          }(mT),
          zT = function(TT, UT) {
            if (0 === UT.registrationStatus) {
              if (!navigator.onLine) {
                return {
                  installationEntry: UT,
                  registrationPromise: Promise.reject(aT.create("app-offline"))
                }
              }
              const mT = {
                  fid: UT.fid,
                  registrationStatus: 1,
                  registrationTime: Date.now()
                },
                WT = async function(TT, UT) {
                  try {
                    const mT = await async function(TT, UT) {
                      let {
                        appConfig: mT,
                        heartbeatServiceProvider: WT
                      } = TT, {
                        fid: zT
                      } = UT;
                      const MT = XT(mT),
                        gT = sT(mT),
                        nT = WT.getImmediate({
                          optional: !0
                        });
                      if (nT) {
                        const TT = await nT.getHeartbeatsHeader();
                        TT && gT.append("x-firebase-client", TT)
                      }
                      const HT = {
                          fid: zT,
                          authVersion: dT,
                          appId: mT.appId,
                          sdkVersion: xT
                        },
                        kT = {
                          method: "POST",
                          headers: gT,
                          body: JSON.stringify(HT)
                        },
                        jT = await PT((() => fetch(MT, kT)));
                      if (jT.ok) {
                        const TT = await jT.json();
                        return {
                          fid: TT.fid || zT,
                          registrationStatus: 2,
                          refreshToken: TT.refreshToken,
                          authToken: IT(TT.authToken)
                        }
                      }
                      throw await QT("Create Installation", jT)
                    }(TT, UT);
                    return RT(TT.appConfig, mT)
                  } catch (mT) {
                    throw yT(mT) && 409 === mT.customData.serverCode ? await TU(TT.appConfig) : await RT(TT.appConfig, {
                      fid: UT.fid,
                      registrationStatus: 0
                    }), mT
                  }
                }(TT, mT);
              return {
                installationEntry: mT,
                registrationPromise: WT
              }
            }
            return 1 === UT.registrationStatus ? {
              installationEntry: UT,
              registrationPromise: WU(TT)
            } : {
              installationEntry: UT
            }
          }(TT, WT);
        return UT = zT.registrationPromise, zT.installationEntry
      }));
      return "" === mT.fid ? {
        installationEntry: await UT
      } : {
        installationEntry: mT,
        registrationPromise: UT
      }
    }
    async function WU(TT) {
      let UT = await zU(TT.appConfig);
      for (; 1 === UT.registrationStatus;) await VT(100), UT = await zU(TT.appConfig);
      if (0 === UT.registrationStatus) {
        const {
          installationEntry: UT,
          registrationPromise: mT
        } = await mU(TT);
        return mT || UT
      }
      return UT
    }

    function zU(TT) {
      return UU(TT, (TT => {
        if (!TT) throw aT.create("installation-not-found");
        return MU(TT)
      }))
    }

    function MU(TT) {
      return 1 === (UT = TT).registrationStatus && UT.registrationTime + JT < Date.now() ? {
        fid: TT.fid,
        registrationStatus: 0
      } : TT;
      var UT
    }
    async function gU(TT, UT) {
      let {
        appConfig: mT,
        heartbeatServiceProvider: WT
      } = TT;
      const zT = function(TT, UT) {
          let {
            fid: mT
          } = UT;
          return `${XT(TT)}/${mT}/authTokens:generate`
        }(mT, UT),
        MT = FT(mT, UT),
        gT = WT.getImmediate({
          optional: !0
        });
      if (gT) {
        const TT = await gT.getHeartbeatsHeader();
        TT && MT.append("x-firebase-client", TT)
      }
      const nT = {
          installation: {
            sdkVersion: xT,
            appId: mT.appId
          }
        },
        HT = {
          method: "POST",
          headers: MT,
          body: JSON.stringify(nT)
        },
        kT = await PT((() => fetch(zT, HT)));
      if (kT.ok) {
        return IT(await kT.json())
      }
      throw await QT("Generate Auth Token", kT)
    }
    async function nU(TT) {
      let UT, mT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const WT = await UU(TT.appConfig, (WT => {
        if (!kU(WT)) throw aT.create("not-registered");
        const zT = WT.authToken;
        if (!mT && function(TT) {
            return 2 === TT.requestStatus && ! function(TT) {
              const UT = Date.now();
              return UT < TT.creationTime || TT.creationTime + TT.expiresIn < UT + wT
            }(TT)
          }(zT)) return WT;
        if (1 === zT.requestStatus) return UT = async function(TT, UT) {
          let mT = await HU(TT.appConfig);
          for (; 1 === mT.authToken.requestStatus;) await VT(100), mT = await HU(TT.appConfig);
          const WT = mT.authToken;
          return 0 === WT.requestStatus ? nU(TT, UT) : WT
        }(TT, mT), WT;
        {
          if (!navigator.onLine) throw aT.create("app-offline");
          const mT = function(TT) {
            const UT = {
              requestStatus: 1,
              requestTime: Date.now()
            };
            return Object.assign(Object.assign({}, TT), {
              authToken: UT
            })
          }(WT);
          return UT = async function(TT, UT) {
            try {
              const mT = await gU(TT, UT),
                WT = Object.assign(Object.assign({}, UT), {
                  authToken: mT
                });
              return await RT(TT.appConfig, WT), mT
            } catch (mT) {
              if (!yT(mT) || 401 !== mT.customData.serverCode && 404 !== mT.customData.serverCode) {
                const mT = Object.assign(Object.assign({}, UT), {
                  authToken: {
                    requestStatus: 0
                  }
                });
                await RT(TT.appConfig, mT)
              } else await TU(TT.appConfig);
              throw mT
            }
          }(TT, mT), mT
        }
      }));
      return UT ? await UT : WT.authToken
    }

    function HU(TT) {
      return UU(TT, (TT => {
        if (!kU(TT)) throw aT.create("not-registered");
        const UT = TT.authToken;
        return 1 === (mT = UT).requestStatus && mT.requestTime + JT < Date.now() ? Object.assign(Object.assign({}, TT), {
          authToken: {
            requestStatus: 0
          }
        }) : TT;
        var mT
      }))
    }

    function kU(TT) {
      return void 0 !== TT && 2 === TT.registrationStatus
    }
    async function jU(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const mT = TT;
      await async function(TT) {
        const {
          registrationPromise: UT
        } = await mU(TT);
        UT && await UT
      }(mT);
      return (await nU(mT, UT)).token
    }

    function lU(TT) {
      return aT.create("missing-app-config-values", {
        valueName: TT
      })
    }
    const LU = "installations",
      pU = TT => {
        const UT = TT.getProvider("app").getImmediate(),
          mT = function(TT) {
            if (!TT || !TT.options) throw lU("App Configuration");
            if (!TT.name) throw lU("App Name");
            const UT = ["projectId", "apiKey", "appId"];
            for (const mT of UT)
              if (!TT.options[mT]) throw lU(mT);
            return {
              appName: TT.name,
              projectId: TT.options.projectId,
              apiKey: TT.options.apiKey,
              appId: TT.options.appId
            }
          }(UT);
        return {
          app: UT,
          appConfig: mT,
          heartbeatServiceProvider: (0, WT.B)(UT, "heartbeat"),
          _delete: () => Promise.resolve()
        }
      },
      BU = TT => {
        const UT = TT.getProvider("app").getImmediate(),
          mT = (0, WT.B)(UT, LU).getImmediate();
        return {
          getId: () => async function(TT) {
            const UT = TT,
              {
                installationEntry: mT,
                registrationPromise: WT
              } = await mU(UT);
            return WT ? WT.catch(console.error) : nU(UT).catch(console.error), mT.fid
          }(mT),
          getToken: TT => jU(mT, TT)
        }
      };
    (0, WT.D)(new gT.g(LU, pU, "PUBLIC")), (0, WT.D)(new gT.g("installations-internal", BU, "PRIVATE")), (0, WT.N)(eT, YT), (0, WT.N)(eT, YT, "esm2017");
    const ZU = "analytics",
      cU = "https://www.googletagmanager.com/gtag/js",
      vU = new zT.h("@firebase/analytics"),
      fU = {
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
      qU = new MT.g("analytics", "Analytics", fU);

    function iU(TT) {
      if (!TT.startsWith(cU)) {
        const UT = qU.create("invalid-gtag-resource", {
          gtagURL: TT
        });
        return vU.warn(UT.message), ""
      }
      return TT
    }

    function bU(TT) {
      return Promise.all(TT.map((TT => TT.catch((TT => TT)))))
    }

    function OU(TT, UT) {
      const mT = function(TT, UT) {
          let mT;
          return window.trustedTypes && (mT = window.trustedTypes.createPolicy(TT, UT)), mT
        }("firebase-js-sdk-policy", {
          createScriptURL: iU
        }),
        WT = document.createElement("script"),
        zT = `${cU}?l=${TT}&id=${UT}`;
      WT.src = mT ? null === mT || void 0 === mT ? void 0 : mT.createScriptURL(zT) : zT, WT.async = !0, document.head.appendChild(WT)
    }

    function eU(TT, UT, mT, WT) {
      return async function(zT) {
        try {
          for (var MT = arguments.length, gT = new Array(MT > 1 ? MT - 1 : 0), nT = 1; nT < MT; nT++) gT[nT - 1] = arguments[nT];
          if ("event" === zT) {
            const [WT, zT] = gT;
            await async function(TT, UT, mT, WT, zT) {
              try {
                let MT = [];
                if (zT && zT.send_to) {
                  let TT = zT.send_to;
                  Array.isArray(TT) || (TT = [TT]);
                  const WT = await bU(mT);
                  for (const mT of TT) {
                    const TT = WT.find((TT => TT.measurementId === mT)),
                      zT = TT && UT[TT.appId];
                    if (!zT) {
                      MT = [];
                      break
                    }
                    MT.push(zT)
                  }
                }
                0 === MT.length && (MT = Object.values(UT)), await Promise.all(MT), TT("event", WT, zT || {})
              } catch (MT) {
                vU.error(MT)
              }
            }(TT, UT, mT, WT, zT)
          } else if ("config" === zT) {
            const [zT, MT] = gT;
            await async function(TT, UT, mT, WT, zT, MT) {
              const gT = WT[zT];
              try {
                if (gT) await UT[gT];
                else {
                  const TT = (await bU(mT)).find((TT => TT.measurementId === zT));
                  TT && await UT[TT.appId]
                }
              } catch (nT) {
                vU.error(nT)
              }
              TT("config", zT, MT)
            }(TT, UT, mT, WT, zT, MT)
          } else if ("consent" === zT) {
            const [UT] = gT;
            TT("consent", "update", UT)
          } else if ("get" === zT) {
            const [UT, mT, WT] = gT;
            TT("get", UT, mT, WT)
          } else if ("set" === zT) {
            const [UT] = gT;
            TT("set", UT)
          } else TT(zT, ...gT)
        } catch (HT) {
          vU.error(HT)
        }
      }
    }
    const YU = new class {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
        this.throttleMetadata = TT, this.intervalMillis = UT
      }
      getThrottleMetadata(TT) {
        return this.throttleMetadata[TT]
      }
      setThrottleMetadata(TT, UT) {
        this.throttleMetadata[TT] = UT
      }
      deleteThrottleMetadata(TT) {
        delete this.throttleMetadata[TT]
      }
    };

    function JU(TT) {
      return new Headers({
        Accept: "application/json",
        "x-goog-api-key": TT
      })
    }
    async function xU(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YU,
        mT = arguments.length > 2 ? arguments[2] : void 0;
      const {
        appId: WT,
        apiKey: zT,
        measurementId: MT
      } = TT.options;
      if (!WT) throw qU.create("no-app-id");
      if (!zT) {
        if (MT) return {
          measurementId: MT,
          appId: WT
        };
        throw qU.create("no-api-key")
      }
      const gT = UT.getThrottleMetadata(WT) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        },
        nT = new wU;
      return setTimeout((async () => {
        nT.abort()
      }), void 0 !== mT ? mT : 6e4), dU({
        appId: WT,
        apiKey: zT,
        measurementId: MT
      }, gT, nT, UT)
    }
    async function dU(TT, UT, mT) {
      let {
        throttleEndTimeMillis: WT,
        backoffCount: zT
      } = UT, gT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : YU;
      var nT;
      const {
        appId: HT,
        measurementId: kT
      } = TT;
      try {
        await
        function(TT, UT) {
          return new Promise(((mT, WT) => {
            const zT = Math.max(UT - Date.now(), 0),
              MT = setTimeout(mT, zT);
            TT.addEventListener((() => {
              clearTimeout(MT), WT(qU.create("fetch-throttle", {
                throttleEndTimeMillis: UT
              }))
            }))
          }))
        }(mT, WT)
      } catch (jT) {
        if (kT) return vU.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${kT} provided in the "measurementId" field in the local Firebase config. [${null===jT||void 0===jT?void 0:jT.message}]`), {
          appId: HT,
          measurementId: kT
        };
        throw jT
      }
      try {
        const UT = await async function(TT) {
          var UT;
          const {
            appId: mT,
            apiKey: WT
          } = TT, zT = {
            method: "GET",
            headers: JU(WT)
          }, MT = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", mT), gT = await fetch(MT, zT);
          if (200 !== gT.status && 304 !== gT.status) {
            let TT = "";
            try {
              const mT = await gT.json();
              (null === (UT = mT.error) || void 0 === UT ? void 0 : UT.message) && (TT = mT.error.message)
            } catch (nT) {}
            throw qU.create("config-fetch-failed", {
              httpStatus: gT.status,
              responseMessage: TT
            })
          }
          return gT.json()
        }(TT);
        return gT.deleteThrottleMetadata(HT), UT
      } catch (jT) {
        const UT = jT;
        if (! function(TT) {
            if (!(TT instanceof MT.i) || !TT.customData) return !1;
            const UT = Number(TT.customData.httpStatus);
            return 429 === UT || 500 === UT || 503 === UT || 504 === UT
          }(UT)) {
          if (gT.deleteThrottleMetadata(HT), kT) return vU.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${kT} provided in the "measurementId" field in the local Firebase config. [${null===UT||void 0===UT?void 0:UT.message}]`), {
            appId: HT,
            measurementId: kT
          };
          throw jT
        }
        const WT = 503 === Number(null === (nT = null === UT || void 0 === UT ? void 0 : UT.customData) || void 0 === nT ? void 0 : nT.httpStatus) ? (0, MT.u)(zT, gT.intervalMillis, 30) : (0, MT.u)(zT, gT.intervalMillis),
          lT = {
            throttleEndTimeMillis: Date.now() + WT,
            backoffCount: zT + 1
          };
        return gT.setThrottleMetadata(HT, lT), vU.debug(`Calling attemptFetch again in ${WT} millis`), dU(TT, lT, mT, gT)
      }
    }
    class wU {
      constructor() {
        this.listeners = []
      }
      addEventListener(TT) {
        this.listeners.push(TT)
      }
      abort() {
        this.listeners.forEach((TT => TT()))
      }
    }
    let tU, aU;

    function yU(TT) {
      aU = TT
    }

    function XU(TT) {
      tU = TT
    }
    async function IU(TT, UT, mT, WT, zT, gT, nT) {
      var HT;
      const kT = xU(TT);
      kT.then((UT => {
        mT[UT.measurementId] = UT.appId, TT.options.measurementId && UT.measurementId !== TT.options.measurementId && vU.warn(`The measurement ID in the local Firebase config (${TT.options.measurementId}) does not match the measurement ID fetched from the server (${UT.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
      })).catch((TT => vU.error(TT))), UT.push(kT);
      const jT = async function() {
        if (!(0, MT.cb)()) return vU.warn(qU.create("indexeddb-unavailable", {
          errorInfo: "IndexedDB is not available in this environment."
        }).message), !1;
        try {
          await (0, MT.qb)()
        } catch (TT) {
          return vU.warn(qU.create("indexeddb-unavailable", {
            errorInfo: null === TT || void 0 === TT ? void 0 : TT.toString()
          }).message), !1
        }
        return !0
      }().then((TT => TT ? WT.getId() : void 0)), [lT, LT] = await Promise.all([kT, jT]);
      (function(TT) {
        const UT = window.document.getElementsByTagName("script");
        for (const mT of Object.values(UT))
          if (mT.src && mT.src.includes(cU) && mT.src.includes(TT)) return mT;
        return null
      })(gT) || OU(gT, lT.measurementId), aU && (zT("consent", "default", aU), yU(void 0)), zT("js", new Date);
      const pT = null !== (HT = null === nT || void 0 === nT ? void 0 : nT.config) && void 0 !== HT ? HT : {};
      return pT.origin = "firebase", pT.update = !0, null != LT && (pT.firebase_id = LT), zT("config", lT.measurementId, pT), tU && (zT("set", tU), XU(void 0)), lT.measurementId
    }
    class QU {
      constructor(TT) {
        this.app = TT
      }
      _delete() {
        return delete sU[this.app.options.appId], Promise.resolve()
      }
    }
    let sU = {},
      FU = [];
    const PU = {};
    let VU, uU, CU = "dataLayer",
      rU = "gtag",
      KU = !1;

    function SU(TT) {
      if (KU) throw qU.create("already-initialized");
      TT.dataLayerName && (CU = TT.dataLayerName), TT.gtagName && (rU = TT.gtagName)
    }

    function GU(TT, UT, mT) {
      ! function() {
        const TT = [];
        if ((0, MT.V)() && TT.push("This is a browser extension environment."), (0, MT.m)() || TT.push("Cookies are not available."), TT.length > 0) {
          const UT = TT.map(((TT, UT) => `(${UT+1}) ${TT}`)).join(" "),
            mT = qU.create("invalid-analytics-context", {
              errorInfo: UT
            });
          vU.warn(mT.message)
        }
      }();
      const WT = TT.options.appId;
      if (!WT) throw qU.create("no-app-id");
      if (!TT.options.apiKey) {
        if (!TT.options.measurementId) throw qU.create("no-api-key");
        vU.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${TT.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
      }
      if (null != sU[WT]) throw qU.create("already-exists", {
        id: WT
      });
      if (!KU) {
        ! function(TT) {
          let UT = [];
          Array.isArray(window[TT]) ? UT = window[TT] : window[TT] = UT
        }(CU);
        const {
          wrappedGtag: TT,
          gtagCore: UT
        } = function(TT, UT, mT, WT, zT) {
          let MT = function() {
            for (var TT = arguments.length, UT = new Array(TT), mT = 0; mT < TT; mT++) UT[mT] = arguments[mT];
            window[WT].push(arguments)
          };
          return window[zT] && "function" === typeof window[zT] && (MT = window[zT]), window[zT] = eU(MT, TT, UT, mT), {
            gtagCore: MT,
            wrappedGtag: window[zT]
          }
        }(sU, FU, PU, CU, rU);
        uU = TT, VU = UT, KU = !0
      }
      sU[WT] = IU(TT, FU, PU, UT, VU, CU, mT);
      return new QU(TT)
    }

    function NU() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, WT.I)();
      TT = (0, MT.P)(TT);
      const UT = (0, WT.B)(TT, ZU);
      return UT.isInitialized() ? UT.getImmediate() : EU(TT)
    }

    function EU(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const mT = (0, WT.B)(TT, ZU);
      if (mT.isInitialized()) {
        const TT = mT.getImmediate();
        if ((0, MT.B)(UT, mT.getOptions())) return TT;
        throw qU.create("already-initialized")
      }
      return mT.initialize({
        options: UT
      })
    }
    async function hU() {
      if ((0, MT.V)()) return !1;
      if (!(0, MT.m)()) return !1;
      if (!(0, MT.cb)()) return !1;
      try {
        return await (0, MT.qb)()
      } catch (TT) {
        return !1
      }
    }

    function DU(TT, UT, mT) {
      TT = (0, MT.P)(TT), async function(TT, UT, mT, WT) {
        if (WT && WT.global) return TT("set", {
          screen_name: mT
        }), Promise.resolve();
        TT("config", await UT, {
          update: !0,
          screen_name: mT
        })
      }(uU, sU[TT.app.options.appId], UT, mT).catch((TT => vU.error(TT)))
    }
    async function oU(TT) {
      return TT = (0, MT.P)(TT), async function(TT, UT) {
        const mT = await UT;
        return new Promise(((UT, WT) => {
          TT("get", mT, "client_id", (TT => {
            TT || WT(qU.create("no-client-id")), UT(TT)
          }))
        }))
      }(uU, sU[TT.app.options.appId])
    }

    function AU(TT, UT, mT) {
      TT = (0, MT.P)(TT), async function(TT, UT, mT, WT) {
        if (WT && WT.global) return TT("set", {
          user_id: mT
        }), Promise.resolve();
        TT("config", await UT, {
          update: !0,
          user_id: mT
        })
      }(uU, sU[TT.app.options.appId], UT, mT).catch((TT => vU.error(TT)))
    }

    function RU(TT, UT, mT) {
      TT = (0, MT.P)(TT), async function(TT, UT, mT, WT) {
        if (WT && WT.global) {
          const UT = {};
          for (const TT of Object.keys(mT)) UT[`user_properties.${TT}`] = mT[TT];
          return TT("set", UT), Promise.resolve()
        }
        TT("config", await UT, {
          update: !0,
          user_properties: mT
        })
      }(uU, sU[TT.app.options.appId], UT, mT).catch((TT => vU.error(TT)))
    }

    function Tm(TT, UT) {
      TT = (0, MT.P)(TT), async function(TT, UT) {
        const mT = await TT;
        window[`ga-disable-${mT}`] = !UT
      }(sU[TT.app.options.appId], UT).catch((TT => vU.error(TT)))
    }

    function Um(TT) {
      uU ? uU("set", TT) : XU(TT)
    }

    function mm(TT, UT, mT, WT) {
      TT = (0, MT.P)(TT), async function(TT, UT, mT, WT, zT) {
        if (zT && zT.global) TT("event", mT, WT);
        else {
          const zT = await UT;
          TT("event", mT, Object.assign(Object.assign({}, WT), {
            send_to: zT
          }))
        }
      }(uU, sU[TT.app.options.appId], UT, mT, WT).catch((TT => vU.error(TT)))
    }

    function Wm(TT) {
      uU ? uU("consent", "update", TT) : yU(TT)
    }
    const zm = "@firebase/analytics",
      Mm = "0.10.0";
    (0, WT.D)(new gT.g(ZU, ((TT, UT) => {
      let {
        options: mT
      } = UT;
      return GU(TT.getProvider("app").getImmediate(), TT.getProvider("installations-internal").getImmediate(), mT)
    }), "PUBLIC")), (0, WT.D)(new gT.g("analytics-internal", (function(TT) {
      try {
        const UT = TT.getProvider(ZU).getImmediate();
        return {
          logEvent: (TT, mT, WT) => mm(UT, TT, mT, WT)
        }
      } catch (UT) {
        throw qU.create("interop-component-reg-failed", {
          reason: UT
        })
      }
    }), "PRIVATE")), (0, WT.N)(zm, Mm), (0, WT.N)(zm, Mm, "esm2017")
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);