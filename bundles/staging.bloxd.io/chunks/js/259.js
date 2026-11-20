/*! For license information please see bcgkc.259.e81ca9a3.chunk.js.LICENSE.txt */
export const id = 259;
export const ids = [259];
export const modules = {
  40157: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      getAnalytics: () => Wk,
      getGoogleAnalyticsClientId: () => qk,
      initializeAnalytics: () => nk,
      isSupported: () => pk,
      logEvent: () => lc,
      setAnalyticsCollectionEnabled: () => kc,
      setConsent: () => Mc,
      setCurrentScreen: () => ik,
      setDefaultEventParameters: () => cc,
      setUserId: () => sk,
      setUserProperties: () => Tc,
      settings: () => Yk
    });
    var lT = cT(40137),
      MT = cT(40149),
      KT = cT(40144),
      OT = cT(40140);
    let yT, fT;
    const xT = new WeakMap,
      IT = new WeakMap,
      AT = new WeakMap,
      CT = new WeakMap,
      jT = new WeakMap;
    let vT = {
      get(TT, kT, cT) {
        if (TT instanceof IDBTransaction) {
          if ("done" === kT) return IT.get(TT);
          if ("objectStoreNames" === kT) return TT.objectStoreNames || AT.get(TT);
          if ("store" === kT) return cT.objectStoreNames[1] ? void 0 : cT.objectStore(cT.objectStoreNames[0])
        }
        return NT(TT[kT])
      },
      set: (TT, kT, cT) => (TT[kT] = cT, !0),
      has: (TT, kT) => TT instanceof IDBTransaction && ("done" === kT || "store" === kT) || kT in TT
    };

    function tT(TT) {
      return TT !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (fT || (fT = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(TT) ? function() {
        for (var kT = arguments.length, cT = new Array(kT), lT = 0; lT < kT; lT++) cT[lT] = arguments[lT];
        return TT.apply(QT(this), cT), NT(xT.get(this))
      } : function() {
        for (var kT = arguments.length, cT = new Array(kT), lT = 0; lT < kT; lT++) cT[lT] = arguments[lT];
        return NT(TT.apply(QT(this), cT))
      } : function(kT) {
        for (var cT = arguments.length, lT = new Array(cT > 1 ? cT - 1 : 0), MT = 1; MT < cT; MT++) lT[MT - 1] = arguments[MT];
        const KT = TT.call(QT(this), kT, ...lT);
        return AT.set(KT, kT.sort ? kT.sort() : [kT]), NT(KT)
      }
    }

    function hT(TT) {
      return "function" === typeof TT ? tT(TT) : (TT instanceof IDBTransaction && function(TT) {
        if (IT.has(TT)) return;
        const kT = new Promise(((kT, cT) => {
          const lT = () => {
              TT.removeEventListener("complete", MT), TT.removeEventListener("error", KT), TT.removeEventListener("abort", KT)
            },
            MT = () => {
              kT(), lT()
            },
            KT = () => {
              cT(TT.error || new DOMException("AbortError", "AbortError")), lT()
            };
          TT.addEventListener("complete", MT), TT.addEventListener("error", KT), TT.addEventListener("abort", KT)
        }));
        IT.set(TT, kT)
      }(TT), kT = TT, (yT || (yT = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((TT => kT instanceof TT)) ? new Proxy(TT, vT) : TT);
      var kT
    }

    function NT(TT) {
      if (TT instanceof IDBRequest) return function(TT) {
        const kT = new Promise(((kT, cT) => {
          const lT = () => {
              TT.removeEventListener("success", MT), TT.removeEventListener("error", KT)
            },
            MT = () => {
              kT(NT(TT.result)), lT()
            },
            KT = () => {
              cT(TT.error), lT()
            };
          TT.addEventListener("success", MT), TT.addEventListener("error", KT)
        }));
        return kT.then((kT => {
          kT instanceof IDBCursor && xT.set(kT, TT)
        })).catch((() => {})), jT.set(kT, TT), kT
      }(TT);
      if (CT.has(TT)) return CT.get(TT);
      const kT = hT(TT);
      return kT !== TT && (CT.set(TT, kT), jT.set(kT, TT)), kT
    }
    const QT = TT => jT.get(TT);
    const ST = ["get", "getKey", "getAll", "getAllKeys", "count"],
      DT = ["put", "add", "delete", "clear"],
      aT = new Map;

    function FT(TT, kT) {
      if (!(TT instanceof IDBDatabase) || kT in TT || "string" !== typeof kT) return;
      if (aT.get(kT)) return aT.get(kT);
      const cT = kT.replace(/FromIndex$/, ""),
        lT = kT !== cT,
        MT = DT.includes(cT);
      if (!(cT in (lT ? IDBIndex : IDBObjectStore).prototype) || !MT && !ST.includes(cT)) return;
      const KT = async function(TT) {
        const kT = this.transaction(TT, MT ? "readwrite" : "readonly");
        let KT = kT.store;
        for (var OT = arguments.length, yT = new Array(OT > 1 ? OT - 1 : 0), fT = 1; fT < OT; fT++) yT[fT - 1] = arguments[fT];
        return lT && (KT = KT.index(yT.shift())), (await Promise.all([KT[cT](...yT), MT && kT.done]))[0]
      };
      return aT.set(kT, KT), KT
    }
    vT = (TT => ({
      ...TT,
      get: (kT, cT, lT) => FT(kT, cT) || TT.get(kT, cT, lT),
      has: (kT, cT) => !!FT(kT, cT) || TT.has(kT, cT)
    }))(vT);
    const rT = "@firebase/installations",
      PT = "0.6.4",
      wT = 1e4,
      mT = `w:${PT}`,
      bT = "FIS_v2",
      zT = 36e5,
      JT = {
        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
        "not-registered": "Firebase Installation is not registered.",
        "installation-not-found": "Firebase Installation not found.",
        "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        "app-offline": "Could not process request. Application offline.",
        "delete-pending-registration": "Can't delete installation while there is a pending registration request."
      },
      oT = new KT.f("installations", "Installations", JT);

    function HT(TT) {
      return TT instanceof KT.j && TT.code.includes("request-failed")
    }

    function eT(TT) {
      let {
        projectId: kT
      } = TT;
      return `https://firebaseinstallations.googleapis.com/v1/projects/${kT}/installations`
    }

    function GT(TT) {
      return {
        token: TT.token,
        requestStatus: 2,
        expiresIn: (kT = TT.expiresIn, Number(kT.replace("s", "000"))),
        creationTime: Date.now()
      };
      var kT
    }
    async function VT(TT, kT) {
      const cT = (await kT.json()).error;
      return oT.create("request-failed", {
        requestName: TT,
        serverCode: cT.code,
        serverMessage: cT.message,
        serverStatus: cT.status
      })
    }

    function ET(TT) {
      let {
        apiKey: kT
      } = TT;
      return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": kT
      })
    }

    function ZT(TT, kT) {
      let {
        refreshToken: cT
      } = kT;
      const lT = ET(TT);
      return lT.append("Authorization", function(TT) {
        return `${bT} ${TT}`
      }(cT)), lT
    }
    async function uT(TT) {
      const kT = await TT();
      return kT.status >= 500 && kT.status < 600 ? TT() : kT
    }

    function XT(TT) {
      return new Promise((kT => {
        setTimeout(kT, TT)
      }))
    }
    const dT = /^[cdef][\w-]{21}$/;

    function LT() {
      try {
        const TT = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(TT), TT[0] = 112 + TT[0] % 16;
        const kT = function(TT) {
          const kT = (cT = TT, btoa(String.fromCharCode(...cT)).replace(/\+/g, "-").replace(/\//g, "_"));
          var cT;
          return kT.substr(0, 22)
        }(TT);
        return dT.test(kT) ? kT : ""
      } catch (TT) {
        return ""
      }
    }

    function RT(TT) {
      return `${TT.appName}!${TT.appId}`
    }
    const gT = new Map;

    function UT(TT, kT) {
      const cT = RT(TT);
      YT(cT, kT),
        function(TT, kT) {
          const cT = WT();
          cT && cT.postMessage({
            key: TT,
            fid: kT
          });
          nT()
        }(cT, kT)
    }

    function YT(TT, kT) {
      const cT = gT.get(TT);
      if (cT)
        for (const lT of cT) lT(kT)
    }
    let BT = null;

    function WT() {
      return !BT && "BroadcastChannel" in self && (BT = new BroadcastChannel("[Firebase] FID Change"), BT.onmessage = TT => {
        YT(TT.data.key, TT.data.fid)
      }), BT
    }

    function nT() {
      0 === gT.size && BT && (BT.close(), BT = null)
    }
    const pT = "firebase-installations-store";
    let iT = null;

    function qT() {
      return iT || (iT = function(TT, kT) {
        let {
          blocked: cT,
          upgrade: lT,
          blocking: MT,
          terminated: KT
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const OT = indexedDB.open(TT, kT),
          yT = NT(OT);
        return lT && OT.addEventListener("upgradeneeded", (TT => {
          lT(NT(OT.result), TT.oldVersion, TT.newVersion, NT(OT.transaction))
        })), cT && OT.addEventListener("blocked", (() => cT())), yT.then((TT => {
          KT && TT.addEventListener("close", (() => KT())), MT && TT.addEventListener("versionchange", (() => MT()))
        })).catch((() => {})), yT
      }("firebase-installations-database", 1, {
        upgrade: (TT, kT) => {
          if (0 === kT) TT.createObjectStore(pT)
        }
      })), iT
    }
    async function sT(TT, kT) {
      const cT = RT(TT),
        lT = (await qT()).transaction(pT, "readwrite"),
        MT = lT.objectStore(pT),
        KT = await MT.get(cT);
      return await MT.put(kT, cT), await lT.done, KT && KT.fid === kT.fid || UT(TT, kT.fid), kT
    }
    async function Tk(TT) {
      const kT = RT(TT),
        cT = (await qT()).transaction(pT, "readwrite");
      await cT.objectStore(pT).delete(kT), await cT.done
    }
    async function kk(TT, kT) {
      const cT = RT(TT),
        lT = (await qT()).transaction(pT, "readwrite"),
        MT = lT.objectStore(pT),
        KT = await MT.get(cT),
        OT = kT(KT);
      return void 0 === OT ? await MT.delete(cT) : await MT.put(OT, cT), await lT.done, !OT || KT && KT.fid === OT.fid || UT(TT, OT.fid), OT
    }
    async function ck(TT) {
      let kT;
      const cT = await kk(TT.appConfig, (cT => {
        const lT = function(TT) {
            const kT = TT || {
              fid: LT(),
              registrationStatus: 0
            };
            return Kk(kT)
          }(cT),
          MT = function(TT, kT) {
            if (0 === kT.registrationStatus) {
              if (!navigator.onLine) {
                return {
                  installationEntry: kT,
                  registrationPromise: Promise.reject(oT.create("app-offline"))
                }
              }
              const cT = {
                  fid: kT.fid,
                  registrationStatus: 1,
                  registrationTime: Date.now()
                },
                lT = async function(TT, kT) {
                  try {
                    const cT = await async function(TT, kT) {
                      let {
                        appConfig: cT,
                        heartbeatServiceProvider: lT
                      } = TT, {
                        fid: MT
                      } = kT;
                      const KT = eT(cT),
                        OT = ET(cT),
                        yT = lT.getImmediate({
                          optional: !0
                        });
                      if (yT) {
                        const TT = await yT.getHeartbeatsHeader();
                        TT && OT.append("x-firebase-client", TT)
                      }
                      const fT = {
                          fid: MT,
                          authVersion: bT,
                          appId: cT.appId,
                          sdkVersion: mT
                        },
                        xT = {
                          method: "POST",
                          headers: OT,
                          body: JSON.stringify(fT)
                        },
                        IT = await uT((() => fetch(KT, xT)));
                      if (IT.ok) {
                        const TT = await IT.json();
                        return {
                          fid: TT.fid || MT,
                          registrationStatus: 2,
                          refreshToken: TT.refreshToken,
                          authToken: GT(TT.authToken)
                        }
                      }
                      throw await VT("Create Installation", IT)
                    }(TT, kT);
                    return sT(TT.appConfig, cT)
                  } catch (cT) {
                    throw HT(cT) && 409 === cT.customData.serverCode ? await Tk(TT.appConfig) : await sT(TT.appConfig, {
                      fid: kT.fid,
                      registrationStatus: 0
                    }), cT
                  }
                }(TT, cT);
              return {
                installationEntry: cT,
                registrationPromise: lT
              }
            }
            return 1 === kT.registrationStatus ? {
              installationEntry: kT,
              registrationPromise: lk(TT)
            } : {
              installationEntry: kT
            }
          }(TT, lT);
        return kT = MT.registrationPromise, MT.installationEntry
      }));
      return "" === cT.fid ? {
        installationEntry: await kT
      } : {
        installationEntry: cT,
        registrationPromise: kT
      }
    }
    async function lk(TT) {
      let kT = await Mk(TT.appConfig);
      for (; 1 === kT.registrationStatus;) await XT(100), kT = await Mk(TT.appConfig);
      if (0 === kT.registrationStatus) {
        const {
          installationEntry: kT,
          registrationPromise: cT
        } = await ck(TT);
        return cT || kT
      }
      return kT
    }

    function Mk(TT) {
      return kk(TT, (TT => {
        if (!TT) throw oT.create("installation-not-found");
        return Kk(TT)
      }))
    }

    function Kk(TT) {
      return 1 === (kT = TT).registrationStatus && kT.registrationTime + wT < Date.now() ? {
        fid: TT.fid,
        registrationStatus: 0
      } : TT;
      var kT
    }
    async function Ok(TT, kT) {
      let {
        appConfig: cT,
        heartbeatServiceProvider: lT
      } = TT;
      const MT = function(TT, kT) {
          let {
            fid: cT
          } = kT;
          return `${eT(TT)}/${cT}/authTokens:generate`
        }(cT, kT),
        KT = ZT(cT, kT),
        OT = lT.getImmediate({
          optional: !0
        });
      if (OT) {
        const TT = await OT.getHeartbeatsHeader();
        TT && KT.append("x-firebase-client", TT)
      }
      const yT = {
          installation: {
            sdkVersion: mT,
            appId: cT.appId
          }
        },
        fT = {
          method: "POST",
          headers: KT,
          body: JSON.stringify(yT)
        },
        xT = await uT((() => fetch(MT, fT)));
      if (xT.ok) {
        return GT(await xT.json())
      }
      throw await VT("Generate Auth Token", xT)
    }
    async function yk(TT) {
      let kT, cT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const lT = await kk(TT.appConfig, (lT => {
        if (!xk(lT)) throw oT.create("not-registered");
        const MT = lT.authToken;
        if (!cT && function(TT) {
            return 2 === TT.requestStatus && ! function(TT) {
              const kT = Date.now();
              return kT < TT.creationTime || TT.creationTime + TT.expiresIn < kT + zT
            }(TT)
          }(MT)) return lT;
        if (1 === MT.requestStatus) return kT = async function(TT, kT) {
          let cT = await fk(TT.appConfig);
          for (; 1 === cT.authToken.requestStatus;) await XT(100), cT = await fk(TT.appConfig);
          const lT = cT.authToken;
          return 0 === lT.requestStatus ? yk(TT, kT) : lT
        }(TT, cT), lT;
        {
          if (!navigator.onLine) throw oT.create("app-offline");
          const cT = function(TT) {
            const kT = {
              requestStatus: 1,
              requestTime: Date.now()
            };
            return Object.assign(Object.assign({}, TT), {
              authToken: kT
            })
          }(lT);
          return kT = async function(TT, kT) {
            try {
              const cT = await Ok(TT, kT),
                lT = Object.assign(Object.assign({}, kT), {
                  authToken: cT
                });
              return await sT(TT.appConfig, lT), cT
            } catch (cT) {
              if (!HT(cT) || 401 !== cT.customData.serverCode && 404 !== cT.customData.serverCode) {
                const cT = Object.assign(Object.assign({}, kT), {
                  authToken: {
                    requestStatus: 0
                  }
                });
                await sT(TT.appConfig, cT)
              } else await Tk(TT.appConfig);
              throw cT
            }
          }(TT, cT), cT
        }
      }));
      return kT ? await kT : lT.authToken
    }

    function fk(TT) {
      return kk(TT, (TT => {
        if (!xk(TT)) throw oT.create("not-registered");
        const kT = TT.authToken;
        return 1 === (cT = kT).requestStatus && cT.requestTime + wT < Date.now() ? Object.assign(Object.assign({}, TT), {
          authToken: {
            requestStatus: 0
          }
        }) : TT;
        var cT
      }))
    }

    function xk(TT) {
      return void 0 !== TT && 2 === TT.registrationStatus
    }
    async function Ik(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const cT = TT;
      await async function(TT) {
        const {
          registrationPromise: kT
        } = await ck(TT);
        kT && await kT
      }(cT);
      return (await yk(cT, kT)).token
    }

    function Ak(TT) {
      return oT.create("missing-app-config-values", {
        valueName: TT
      })
    }
    const Ck = "installations",
      jk = TT => {
        const kT = TT.getProvider("app").getImmediate(),
          cT = function(TT) {
            if (!TT || !TT.options) throw Ak("App Configuration");
            if (!TT.name) throw Ak("App Name");
            const kT = ["projectId", "apiKey", "appId"];
            for (const cT of kT)
              if (!TT.options[cT]) throw Ak(cT);
            return {
              appName: TT.name,
              projectId: TT.options.projectId,
              apiKey: TT.options.apiKey,
              appId: TT.options.appId
            }
          }(kT);
        return {
          app: kT,
          appConfig: cT,
          heartbeatServiceProvider: (0, lT.s)(kT, "heartbeat"),
          _delete: () => Promise.resolve()
        }
      },
      vk = TT => {
        const kT = TT.getProvider("app").getImmediate(),
          cT = (0, lT.s)(kT, Ck).getImmediate();
        return {
          getId: () => async function(TT) {
            const kT = TT,
              {
                installationEntry: cT,
                registrationPromise: lT
              } = await ck(kT);
            return lT ? lT.catch(console.error) : yk(kT).catch(console.error), cT.fid
          }(cT),
          getToken: TT => Ik(cT, TT)
        }
      };
    (0, lT.v)(new OT.h(Ck, jk, "PUBLIC")), (0, lT.v)(new OT.h("installations-internal", vk, "PRIVATE")), (0, lT.N)(rT, PT), (0, lT.N)(rT, PT, "esm2017");
    const tk = "analytics",
      hk = "https://www.googletagmanager.com/gtag/js",
      Nk = new MT.f("@firebase/analytics"),
      Qk = {
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
      Sk = new KT.f("analytics", "Analytics", Qk);

    function Dk(TT) {
      if (!TT.startsWith(hk)) {
        const kT = Sk.create("invalid-gtag-resource", {
          gtagURL: TT
        });
        return Nk.warn(kT.message), ""
      }
      return TT
    }

    function ak(TT) {
      return Promise.all(TT.map((TT => TT.catch((TT => TT)))))
    }

    function Fk(TT, kT) {
      const cT = function(TT, kT) {
          let cT;
          return window.trustedTypes && (cT = window.trustedTypes.createPolicy(TT, kT)), cT
        }("firebase-js-sdk-policy", {
          createScriptURL: Dk
        }),
        lT = document.createElement("script"),
        MT = `${hk}?l=${TT}&id=${kT}`;
      lT.src = cT ? null === cT || void 0 === cT ? void 0 : cT.createScriptURL(MT) : MT, lT.async = !0, document.head.appendChild(lT)
    }

    function rk(TT, kT, cT, lT) {
      return async function(MT) {
        try {
          for (var KT = arguments.length, OT = new Array(KT > 1 ? KT - 1 : 0), yT = 1; yT < KT; yT++) OT[yT - 1] = arguments[yT];
          if ("event" === MT) {
            const [lT, MT] = OT;
            await async function(TT, kT, cT, lT, MT) {
              try {
                let KT = [];
                if (MT && MT.send_to) {
                  let TT = MT.send_to;
                  Array.isArray(TT) || (TT = [TT]);
                  const lT = await ak(cT);
                  for (const cT of TT) {
                    const TT = lT.find((TT => TT.measurementId === cT)),
                      MT = TT && kT[TT.appId];
                    if (!MT) {
                      KT = [];
                      break
                    }
                    KT.push(MT)
                  }
                }
                0 === KT.length && (KT = Object.values(kT)), await Promise.all(KT), TT("event", lT, MT || {})
              } catch (KT) {
                Nk.error(KT)
              }
            }(TT, kT, cT, lT, MT)
          } else if ("config" === MT) {
            const [MT, KT] = OT;
            await async function(TT, kT, cT, lT, MT, KT) {
              const OT = lT[MT];
              try {
                if (OT) await kT[OT];
                else {
                  const TT = (await ak(cT)).find((TT => TT.measurementId === MT));
                  TT && await kT[TT.appId]
                }
              } catch (yT) {
                Nk.error(yT)
              }
              TT("config", MT, KT)
            }(TT, kT, cT, lT, MT, KT)
          } else if ("consent" === MT) {
            const [kT] = OT;
            TT("consent", "update", kT)
          } else if ("get" === MT) {
            const [kT, cT, lT] = OT;
            TT("get", kT, cT, lT)
          } else if ("set" === MT) {
            const [kT] = OT;
            TT("set", kT)
          } else TT(MT, ...OT)
        } catch (fT) {
          Nk.error(fT)
        }
      }
    }
    const Pk = new class {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
        this.throttleMetadata = TT, this.intervalMillis = kT
      }
      getThrottleMetadata(TT) {
        return this.throttleMetadata[TT]
      }
      setThrottleMetadata(TT, kT) {
        this.throttleMetadata[TT] = kT
      }
      deleteThrottleMetadata(TT) {
        delete this.throttleMetadata[TT]
      }
    };

    function wk(TT) {
      return new Headers({
        Accept: "application/json",
        "x-goog-api-key": TT
      })
    }
    async function mk(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Pk,
        cT = arguments.length > 2 ? arguments[2] : void 0;
      const {
        appId: lT,
        apiKey: MT,
        measurementId: KT
      } = TT.options;
      if (!lT) throw Sk.create("no-app-id");
      if (!MT) {
        if (KT) return {
          measurementId: KT,
          appId: lT
        };
        throw Sk.create("no-api-key")
      }
      const OT = kT.getThrottleMetadata(lT) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        },
        yT = new zk;
      return setTimeout((async () => {
        yT.abort()
      }), void 0 !== cT ? cT : 6e4), bk({
        appId: lT,
        apiKey: MT,
        measurementId: KT
      }, OT, yT, kT)
    }
    async function bk(TT, kT, cT) {
      let {
        throttleEndTimeMillis: lT,
        backoffCount: MT
      } = kT, OT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Pk;
      var yT;
      const {
        appId: fT,
        measurementId: xT
      } = TT;
      try {
        await
        function(TT, kT) {
          return new Promise(((cT, lT) => {
            const MT = Math.max(kT - Date.now(), 0),
              KT = setTimeout(cT, MT);
            TT.addEventListener((() => {
              clearTimeout(KT), lT(Sk.create("fetch-throttle", {
                throttleEndTimeMillis: kT
              }))
            }))
          }))
        }(cT, lT)
      } catch (IT) {
        if (xT) return Nk.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${xT} provided in the "measurementId" field in the local Firebase config. [${null===IT||void 0===IT?void 0:IT.message}]`), {
          appId: fT,
          measurementId: xT
        };
        throw IT
      }
      try {
        const kT = await async function(TT) {
          var kT;
          const {
            appId: cT,
            apiKey: lT
          } = TT, MT = {
            method: "GET",
            headers: wk(lT)
          }, KT = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", cT), OT = await fetch(KT, MT);
          if (200 !== OT.status && 304 !== OT.status) {
            let TT = "";
            try {
              const cT = await OT.json();
              (null === (kT = cT.error) || void 0 === kT ? void 0 : kT.message) && (TT = cT.error.message)
            } catch (yT) {}
            throw Sk.create("config-fetch-failed", {
              httpStatus: OT.status,
              responseMessage: TT
            })
          }
          return OT.json()
        }(TT);
        return OT.deleteThrottleMetadata(fT), kT
      } catch (IT) {
        const kT = IT;
        if (! function(TT) {
            if (!(TT instanceof KT.j) || !TT.customData) return !1;
            const kT = Number(TT.customData.httpStatus);
            return 429 === kT || 500 === kT || 503 === kT || 504 === kT
          }(kT)) {
          if (OT.deleteThrottleMetadata(fT), xT) return Nk.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${xT} provided in the "measurementId" field in the local Firebase config. [${null===kT||void 0===kT?void 0:kT.message}]`), {
            appId: fT,
            measurementId: xT
          };
          throw IT
        }
        const lT = 503 === Number(null === (yT = null === kT || void 0 === kT ? void 0 : kT.customData) || void 0 === yT ? void 0 : yT.httpStatus) ? (0, KT.t)(MT, OT.intervalMillis, 30) : (0, KT.t)(MT, OT.intervalMillis),
          AT = {
            throttleEndTimeMillis: Date.now() + lT,
            backoffCount: MT + 1
          };
        return OT.setThrottleMetadata(fT, AT), Nk.debug(`Calling attemptFetch again in ${lT} millis`), bk(TT, AT, cT, OT)
      }
    }
    class zk {
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
    let Jk, Hk;

    function ek(TT) {
      Hk = TT
    }

    function Gk(TT) {
      Jk = TT
    }
    async function Vk(TT, kT, cT, lT, MT, OT, yT) {
      var fT;
      const xT = mk(TT);
      xT.then((kT => {
        cT[kT.measurementId] = kT.appId, TT.options.measurementId && kT.measurementId !== TT.options.measurementId && Nk.warn(`The measurement ID in the local Firebase config (${TT.options.measurementId}) does not match the measurement ID fetched from the server (${kT.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
      })).catch((TT => Nk.error(TT))), kT.push(xT);
      const IT = async function() {
        if (!(0, KT.U)()) return Nk.warn(Sk.create("indexeddb-unavailable", {
          errorInfo: "IndexedDB is not available in this environment."
        }).message), !1;
        try {
          await (0, KT.gb)()
        } catch (TT) {
          return Nk.warn(Sk.create("indexeddb-unavailable", {
            errorInfo: null === TT || void 0 === TT ? void 0 : TT.toString()
          }).message), !1
        }
        return !0
      }().then((TT => TT ? lT.getId() : void 0)), [AT, CT] = await Promise.all([xT, IT]);
      (function(TT) {
        const kT = window.document.getElementsByTagName("script");
        for (const cT of Object.values(kT))
          if (cT.src && cT.src.includes(hk) && cT.src.includes(TT)) return cT;
        return null
      })(OT) || Fk(OT, AT.measurementId), Hk && (MT("consent", "default", Hk), ek(void 0)), MT("js", new Date);
      const jT = null !== (fT = null === yT || void 0 === yT ? void 0 : yT.config) && void 0 !== fT ? fT : {};
      return jT.origin = "firebase", jT.update = !0, null != CT && (jT.firebase_id = CT), MT("config", AT.measurementId, jT), Jk && (MT("set", Jk), Gk(void 0)), AT.measurementId
    }
    class Ek {
      constructor(TT) {
        this.app = TT
      }
      _delete() {
        return delete Zk[this.app.options.appId], Promise.resolve()
      }
    }
    let Zk = {},
      uk = [];
    const Xk = {};
    let dk, Lk, Rk = "dataLayer",
      gk = "gtag",
      Uk = !1;

    function Yk(TT) {
      if (Uk) throw Sk.create("already-initialized");
      TT.dataLayerName && (Rk = TT.dataLayerName), TT.gtagName && (gk = TT.gtagName)
    }

    function Bk(TT, kT, cT) {
      ! function() {
        const TT = [];
        if ((0, KT.O)() && TT.push("This is a browser extension environment."), (0, KT.n)() || TT.push("Cookies are not available."), TT.length > 0) {
          const kT = TT.map(((TT, kT) => `(${kT+1}) ${TT}`)).join(" "),
            cT = Sk.create("invalid-analytics-context", {
              errorInfo: kT
            });
          Nk.warn(cT.message)
        }
      }();
      const lT = TT.options.appId;
      if (!lT) throw Sk.create("no-app-id");
      if (!TT.options.apiKey) {
        if (!TT.options.measurementId) throw Sk.create("no-api-key");
        Nk.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${TT.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
      }
      if (null != Zk[lT]) throw Sk.create("already-exists", {
        id: lT
      });
      if (!Uk) {
        ! function(TT) {
          let kT = [];
          Array.isArray(window[TT]) ? kT = window[TT] : window[TT] = kT
        }(Rk);
        const {
          wrappedGtag: TT,
          gtagCore: kT
        } = function(TT, kT, cT, lT, MT) {
          let KT = function() {
            for (var TT = arguments.length, kT = new Array(TT), cT = 0; cT < TT; cT++) kT[cT] = arguments[cT];
            window[lT].push(arguments)
          };
          return window[MT] && "function" === typeof window[MT] && (KT = window[MT]), window[MT] = rk(KT, TT, kT, cT), {
            gtagCore: KT,
            wrappedGtag: window[MT]
          }
        }(Zk, uk, Xk, Rk, gk);
        Lk = TT, dk = kT, Uk = !0
      }
      Zk[lT] = Vk(TT, uk, Xk, kT, dk, Rk, cT);
      return new Ek(TT)
    }

    function Wk() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, lT.G)();
      TT = (0, KT.L)(TT);
      const kT = (0, lT.s)(TT, tk);
      return kT.isInitialized() ? kT.getImmediate() : nk(TT)
    }

    function nk(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const cT = (0, lT.s)(TT, tk);
      if (cT.isInitialized()) {
        const TT = cT.getImmediate();
        if ((0, KT.A)(kT, cT.getOptions())) return TT;
        throw Sk.create("already-initialized")
      }
      return cT.initialize({
        options: kT
      })
    }
    async function pk() {
      if ((0, KT.O)()) return !1;
      if (!(0, KT.n)()) return !1;
      if (!(0, KT.U)()) return !1;
      try {
        return await (0, KT.gb)()
      } catch (TT) {
        return !1
      }
    }

    function ik(TT, kT, cT) {
      TT = (0, KT.L)(TT), async function(TT, kT, cT, lT) {
        if (lT && lT.global) return TT("set", {
          screen_name: cT
        }), Promise.resolve();
        TT("config", await kT, {
          update: !0,
          screen_name: cT
        })
      }(Lk, Zk[TT.app.options.appId], kT, cT).catch((TT => Nk.error(TT)))
    }
    async function qk(TT) {
      return TT = (0, KT.L)(TT), async function(TT, kT) {
        const cT = await kT;
        return new Promise(((kT, lT) => {
          TT("get", cT, "client_id", (TT => {
            TT || lT(Sk.create("no-client-id")), kT(TT)
          }))
        }))
      }(Lk, Zk[TT.app.options.appId])
    }

    function sk(TT, kT, cT) {
      TT = (0, KT.L)(TT), async function(TT, kT, cT, lT) {
        if (lT && lT.global) return TT("set", {
          user_id: cT
        }), Promise.resolve();
        TT("config", await kT, {
          update: !0,
          user_id: cT
        })
      }(Lk, Zk[TT.app.options.appId], kT, cT).catch((TT => Nk.error(TT)))
    }

    function Tc(TT, kT, cT) {
      TT = (0, KT.L)(TT), async function(TT, kT, cT, lT) {
        if (lT && lT.global) {
          const kT = {};
          for (const TT of Object.keys(cT)) kT[`user_properties.${TT}`] = cT[TT];
          return TT("set", kT), Promise.resolve()
        }
        TT("config", await kT, {
          update: !0,
          user_properties: cT
        })
      }(Lk, Zk[TT.app.options.appId], kT, cT).catch((TT => Nk.error(TT)))
    }

    function kc(TT, kT) {
      TT = (0, KT.L)(TT), async function(TT, kT) {
        const cT = await TT;
        window[`ga-disable-${cT}`] = !kT
      }(Zk[TT.app.options.appId], kT).catch((TT => Nk.error(TT)))
    }

    function cc(TT) {
      Lk ? Lk("set", TT) : Gk(TT)
    }

    function lc(TT, kT, cT, lT) {
      TT = (0, KT.L)(TT), async function(TT, kT, cT, lT, MT) {
        if (MT && MT.global) TT("event", cT, lT);
        else {
          const MT = await kT;
          TT("event", cT, Object.assign(Object.assign({}, lT), {
            send_to: MT
          }))
        }
      }(Lk, Zk[TT.app.options.appId], kT, cT, lT).catch((TT => Nk.error(TT)))
    }

    function Mc(TT) {
      Lk ? Lk("consent", "update", TT) : ek(TT)
    }
    const Kc = "@firebase/analytics",
      Oc = "0.10.0";
    (0, lT.v)(new OT.h(tk, ((TT, kT) => {
      let {
        options: cT
      } = kT;
      return Bk(TT.getProvider("app").getImmediate(), TT.getProvider("installations-internal").getImmediate(), cT)
    }), "PUBLIC")), (0, lT.v)(new OT.h("analytics-internal", (function(TT) {
      try {
        const kT = TT.getProvider(tk).getImmediate();
        return {
          logEvent: (TT, cT, lT) => lc(kT, TT, cT, lT)
        }
      } catch (kT) {
        throw Sk.create("interop-component-reg-failed", {
          reason: kT
        })
      }
    }), "PRIVATE")), (0, lT.N)(Kc, Oc), (0, lT.N)(Kc, Oc, "esm2017")
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);