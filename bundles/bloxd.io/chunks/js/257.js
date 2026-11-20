/*! For license information please see eulrrq.257.79818796.chunk.js.LICENSE.txt */
export const id = 257;
export const ids = [257];
export const modules = {
  39902: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      getAnalytics: () => zR,
      getGoogleAnalyticsClientId: () => NR,
      initializeAnalytics: () => MR,
      isSupported: () => DR,
      logEvent: () => gg,
      setAnalyticsCollectionEnabled: () => Ug,
      setConsent: () => tg,
      setCurrentScreen: () => LR,
      setDefaultEventParameters: () => Rg,
      setUserId: () => lR,
      setUserProperties: () => OR,
      settings: () => iR
    });
    var tU = gU(39882),
      pU = gU(39898),
      EU = gU(39894),
      PU = gU(39887);
    let TU, qU;
    const KU = new WeakMap,
      cU = new WeakMap,
      GU = new WeakMap,
      jU = new WeakMap,
      uU = new WeakMap;
    let CU = {
      get(UU, RU, gU) {
        if (UU instanceof IDBTransaction) {
          if ("done" === RU) return cU.get(UU);
          if ("objectStoreNames" === RU) return UU.objectStoreNames || GU.get(UU);
          if ("store" === RU) return gU.objectStoreNames[1] ? void 0 : gU.objectStore(gU.objectStoreNames[0])
        }
        return eU(UU[RU])
      },
      set: (UU, RU, gU) => (UU[RU] = gU, !0),
      has: (UU, RU) => UU instanceof IDBTransaction && ("done" === RU || "store" === RU) || RU in UU
    };

    function hU(UU) {
      return UU !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (qU || (qU = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(UU) ? function() {
        for (var RU = arguments.length, gU = new Array(RU), tU = 0; tU < RU; tU++) gU[tU] = arguments[tU];
        return UU.apply(WU(this), gU), eU(KU.get(this))
      } : function() {
        for (var RU = arguments.length, gU = new Array(RU), tU = 0; tU < RU; tU++) gU[tU] = arguments[tU];
        return eU(UU.apply(WU(this), gU))
      } : function(RU) {
        for (var gU = arguments.length, tU = new Array(gU > 1 ? gU - 1 : 0), pU = 1; pU < gU; pU++) tU[pU - 1] = arguments[pU];
        const EU = UU.call(WU(this), RU, ...tU);
        return GU.set(EU, RU.sort ? RU.sort() : [RU]), eU(EU)
      }
    }

    function QU(UU) {
      return "function" === typeof UU ? hU(UU) : (UU instanceof IDBTransaction && function(UU) {
        if (cU.has(UU)) return;
        const RU = new Promise(((RU, gU) => {
          const tU = () => {
              UU.removeEventListener("complete", pU), UU.removeEventListener("error", EU), UU.removeEventListener("abort", EU)
            },
            pU = () => {
              RU(), tU()
            },
            EU = () => {
              gU(UU.error || new DOMException("AbortError", "AbortError")), tU()
            };
          UU.addEventListener("complete", pU), UU.addEventListener("error", EU), UU.addEventListener("abort", EU)
        }));
        cU.set(UU, RU)
      }(UU), RU = UU, (TU || (TU = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((UU => RU instanceof UU)) ? new Proxy(UU, CU) : UU);
      var RU
    }

    function eU(UU) {
      if (UU instanceof IDBRequest) return function(UU) {
        const RU = new Promise(((RU, gU) => {
          const tU = () => {
              UU.removeEventListener("success", pU), UU.removeEventListener("error", EU)
            },
            pU = () => {
              RU(eU(UU.result)), tU()
            },
            EU = () => {
              gU(UU.error), tU()
            };
          UU.addEventListener("success", pU), UU.addEventListener("error", EU)
        }));
        return RU.then((RU => {
          RU instanceof IDBCursor && KU.set(RU, UU)
        })).catch((() => {})), uU.set(RU, UU), RU
      }(UU);
      if (jU.has(UU)) return jU.get(UU);
      const RU = QU(UU);
      return RU !== UU && (jU.set(UU, RU), uU.set(RU, UU)), RU
    }
    const WU = UU => uU.get(UU);
    const fU = ["get", "getKey", "getAll", "getAllKeys", "count"],
      xU = ["put", "add", "delete", "clear"],
      mU = new Map;

    function IU(UU, RU) {
      if (!(UU instanceof IDBDatabase) || RU in UU || "string" !== typeof RU) return;
      if (mU.get(RU)) return mU.get(RU);
      const gU = RU.replace(/FromIndex$/, ""),
        tU = RU !== gU,
        pU = xU.includes(gU);
      if (!(gU in (tU ? IDBIndex : IDBObjectStore).prototype) || !pU && !fU.includes(gU)) return;
      const EU = async function(UU) {
        const RU = this.transaction(UU, pU ? "readwrite" : "readonly");
        let EU = RU.store;
        for (var PU = arguments.length, TU = new Array(PU > 1 ? PU - 1 : 0), qU = 1; qU < PU; qU++) TU[qU - 1] = arguments[qU];
        return tU && (EU = EU.index(TU.shift())), (await Promise.all([EU[gU](...TU), pU && RU.done]))[0]
      };
      return mU.set(RU, EU), EU
    }
    CU = (UU => ({
      ...UU,
      get: (RU, gU, tU) => IU(RU, gU) || UU.get(RU, gU, tU),
      has: (RU, gU) => !!IU(RU, gU) || UU.has(RU, gU)
    }))(CU);
    const JU = "@firebase/installations",
      wU = "0.6.4",
      nU = 1e4,
      bU = `w:${wU}`,
      oU = "FIS_v2",
      ZU = 36e5,
      aU = {
        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
        "not-registered": "Firebase Installation is not registered.",
        "installation-not-found": "Firebase Installation not found.",
        "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        "app-offline": "Could not process request. Application offline.",
        "delete-pending-registration": "Can't delete installation while there is a pending registration request."
      },
      YU = new EU.e("installations", "Installations", aU);

    function BU(UU) {
      return UU instanceof EU.i && UU.code.includes("request-failed")
    }

    function VU(UU) {
      let {
        projectId: RU
      } = UU;
      return `https://firebaseinstallations.googleapis.com/v1/projects/${RU}/installations`
    }

    function rU(UU) {
      return {
        token: UU.token,
        requestStatus: 2,
        expiresIn: (RU = UU.expiresIn, Number(RU.replace("s", "000"))),
        creationTime: Date.now()
      };
      var RU
    }
    async function XU(UU, RU) {
      const gU = (await RU.json()).error;
      return YU.create("request-failed", {
        requestName: UU,
        serverCode: gU.code,
        serverMessage: gU.message,
        serverStatus: gU.status
      })
    }

    function vU(UU) {
      let {
        apiKey: RU
      } = UU;
      return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": RU
      })
    }

    function dU(UU, RU) {
      let {
        refreshToken: gU
      } = RU;
      const tU = vU(UU);
      return tU.append("Authorization", function(UU) {
        return `${oU} ${UU}`
      }(gU)), tU
    }
    async function HU(UU) {
      const RU = await UU();
      return RU.status >= 500 && RU.status < 600 ? UU() : RU
    }

    function SU(UU) {
      return new Promise((RU => {
        setTimeout(RU, UU)
      }))
    }
    const sU = /^[cdef][\w-]{21}$/;

    function yU() {
      try {
        const UU = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(UU), UU[0] = 112 + UU[0] % 16;
        const RU = function(UU) {
          const RU = (gU = UU, btoa(String.fromCharCode(...gU)).replace(/\+/g, "-").replace(/\//g, "_"));
          var gU;
          return RU.substr(0, 22)
        }(UU);
        return sU.test(RU) ? RU : ""
      } catch (UU) {
        return ""
      }
    }

    function kU(UU) {
      return `${UU.appName}!${UU.appId}`
    }
    const FU = new Map;

    function iU(UU, RU) {
      const gU = kU(UU);
      AU(gU, RU),
        function(UU, RU) {
          const gU = MU();
          gU && gU.postMessage({
            key: UU,
            fid: RU
          });
          DU()
        }(gU, RU)
    }

    function AU(UU, RU) {
      const gU = FU.get(UU);
      if (gU)
        for (const tU of gU) tU(RU)
    }
    let zU = null;

    function MU() {
      return !zU && "BroadcastChannel" in self && (zU = new BroadcastChannel("[Firebase] FID Change"), zU.onmessage = UU => {
        AU(UU.data.key, UU.data.fid)
      }), zU
    }

    function DU() {
      0 === FU.size && zU && (zU.close(), zU = null)
    }
    const LU = "firebase-installations-store";
    let NU = null;

    function lU() {
      return NU || (NU = function(UU, RU) {
        let {
          blocked: gU,
          upgrade: tU,
          blocking: pU,
          terminated: EU
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const PU = indexedDB.open(UU, RU),
          TU = eU(PU);
        return tU && PU.addEventListener("upgradeneeded", (UU => {
          tU(eU(PU.result), UU.oldVersion, UU.newVersion, eU(PU.transaction))
        })), gU && PU.addEventListener("blocked", (() => gU())), TU.then((UU => {
          EU && UU.addEventListener("close", (() => EU())), pU && UU.addEventListener("versionchange", (() => pU()))
        })).catch((() => {})), TU
      }("firebase-installations-database", 1, {
        upgrade: (UU, RU) => {
          if (0 === RU) UU.createObjectStore(LU)
        }
      })), NU
    }
    async function OU(UU, RU) {
      const gU = kU(UU),
        tU = (await lU()).transaction(LU, "readwrite"),
        pU = tU.objectStore(LU),
        EU = await pU.get(gU);
      return await pU.put(RU, gU), await tU.done, EU && EU.fid === RU.fid || iU(UU, RU.fid), RU
    }
    async function UR(UU) {
      const RU = kU(UU),
        gU = (await lU()).transaction(LU, "readwrite");
      await gU.objectStore(LU).delete(RU), await gU.done
    }
    async function RR(UU, RU) {
      const gU = kU(UU),
        tU = (await lU()).transaction(LU, "readwrite"),
        pU = tU.objectStore(LU),
        EU = await pU.get(gU),
        PU = RU(EU);
      return void 0 === PU ? await pU.delete(gU) : await pU.put(PU, gU), await tU.done, !PU || EU && EU.fid === PU.fid || iU(UU, PU.fid), PU
    }
    async function gR(UU) {
      let RU;
      const gU = await RR(UU.appConfig, (gU => {
        const tU = function(UU) {
            const RU = UU || {
              fid: yU(),
              registrationStatus: 0
            };
            return ER(RU)
          }(gU),
          pU = function(UU, RU) {
            if (0 === RU.registrationStatus) {
              if (!navigator.onLine) {
                return {
                  installationEntry: RU,
                  registrationPromise: Promise.reject(YU.create("app-offline"))
                }
              }
              const gU = {
                  fid: RU.fid,
                  registrationStatus: 1,
                  registrationTime: Date.now()
                },
                tU = async function(UU, RU) {
                  try {
                    const gU = await async function(UU, RU) {
                      let {
                        appConfig: gU,
                        heartbeatServiceProvider: tU
                      } = UU, {
                        fid: pU
                      } = RU;
                      const EU = VU(gU),
                        PU = vU(gU),
                        TU = tU.getImmediate({
                          optional: !0
                        });
                      if (TU) {
                        const UU = await TU.getHeartbeatsHeader();
                        UU && PU.append("x-firebase-client", UU)
                      }
                      const qU = {
                          fid: pU,
                          authVersion: oU,
                          appId: gU.appId,
                          sdkVersion: bU
                        },
                        KU = {
                          method: "POST",
                          headers: PU,
                          body: JSON.stringify(qU)
                        },
                        cU = await HU((() => fetch(EU, KU)));
                      if (cU.ok) {
                        const UU = await cU.json();
                        return {
                          fid: UU.fid || pU,
                          registrationStatus: 2,
                          refreshToken: UU.refreshToken,
                          authToken: rU(UU.authToken)
                        }
                      }
                      throw await XU("Create Installation", cU)
                    }(UU, RU);
                    return OU(UU.appConfig, gU)
                  } catch (gU) {
                    throw BU(gU) && 409 === gU.customData.serverCode ? await UR(UU.appConfig) : await OU(UU.appConfig, {
                      fid: RU.fid,
                      registrationStatus: 0
                    }), gU
                  }
                }(UU, gU);
              return {
                installationEntry: gU,
                registrationPromise: tU
              }
            }
            return 1 === RU.registrationStatus ? {
              installationEntry: RU,
              registrationPromise: tR(UU)
            } : {
              installationEntry: RU
            }
          }(UU, tU);
        return RU = pU.registrationPromise, pU.installationEntry
      }));
      return "" === gU.fid ? {
        installationEntry: await RU
      } : {
        installationEntry: gU,
        registrationPromise: RU
      }
    }
    async function tR(UU) {
      let RU = await pR(UU.appConfig);
      for (; 1 === RU.registrationStatus;) await SU(100), RU = await pR(UU.appConfig);
      if (0 === RU.registrationStatus) {
        const {
          installationEntry: RU,
          registrationPromise: gU
        } = await gR(UU);
        return gU || RU
      }
      return RU
    }

    function pR(UU) {
      return RR(UU, (UU => {
        if (!UU) throw YU.create("installation-not-found");
        return ER(UU)
      }))
    }

    function ER(UU) {
      return 1 === (RU = UU).registrationStatus && RU.registrationTime + nU < Date.now() ? {
        fid: UU.fid,
        registrationStatus: 0
      } : UU;
      var RU
    }
    async function PR(UU, RU) {
      let {
        appConfig: gU,
        heartbeatServiceProvider: tU
      } = UU;
      const pU = function(UU, RU) {
          let {
            fid: gU
          } = RU;
          return `${VU(UU)}/${gU}/authTokens:generate`
        }(gU, RU),
        EU = dU(gU, RU),
        PU = tU.getImmediate({
          optional: !0
        });
      if (PU) {
        const UU = await PU.getHeartbeatsHeader();
        UU && EU.append("x-firebase-client", UU)
      }
      const TU = {
          installation: {
            sdkVersion: bU,
            appId: gU.appId
          }
        },
        qU = {
          method: "POST",
          headers: EU,
          body: JSON.stringify(TU)
        },
        KU = await HU((() => fetch(pU, qU)));
      if (KU.ok) {
        return rU(await KU.json())
      }
      throw await XU("Generate Auth Token", KU)
    }
    async function TR(UU) {
      let RU, gU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const tU = await RR(UU.appConfig, (tU => {
        if (!KR(tU)) throw YU.create("not-registered");
        const pU = tU.authToken;
        if (!gU && function(UU) {
            return 2 === UU.requestStatus && ! function(UU) {
              const RU = Date.now();
              return RU < UU.creationTime || UU.creationTime + UU.expiresIn < RU + ZU
            }(UU)
          }(pU)) return tU;
        if (1 === pU.requestStatus) return RU = async function(UU, RU) {
          let gU = await qR(UU.appConfig);
          for (; 1 === gU.authToken.requestStatus;) await SU(100), gU = await qR(UU.appConfig);
          const tU = gU.authToken;
          return 0 === tU.requestStatus ? TR(UU, RU) : tU
        }(UU, gU), tU;
        {
          if (!navigator.onLine) throw YU.create("app-offline");
          const gU = function(UU) {
            const RU = {
              requestStatus: 1,
              requestTime: Date.now()
            };
            return Object.assign(Object.assign({}, UU), {
              authToken: RU
            })
          }(tU);
          return RU = async function(UU, RU) {
            try {
              const gU = await PR(UU, RU),
                tU = Object.assign(Object.assign({}, RU), {
                  authToken: gU
                });
              return await OU(UU.appConfig, tU), gU
            } catch (gU) {
              if (!BU(gU) || 401 !== gU.customData.serverCode && 404 !== gU.customData.serverCode) {
                const gU = Object.assign(Object.assign({}, RU), {
                  authToken: {
                    requestStatus: 0
                  }
                });
                await OU(UU.appConfig, gU)
              } else await UR(UU.appConfig);
              throw gU
            }
          }(UU, gU), gU
        }
      }));
      return RU ? await RU : tU.authToken
    }

    function qR(UU) {
      return RR(UU, (UU => {
        if (!KR(UU)) throw YU.create("not-registered");
        const RU = UU.authToken;
        return 1 === (gU = RU).requestStatus && gU.requestTime + nU < Date.now() ? Object.assign(Object.assign({}, UU), {
          authToken: {
            requestStatus: 0
          }
        }) : UU;
        var gU
      }))
    }

    function KR(UU) {
      return void 0 !== UU && 2 === UU.registrationStatus
    }
    async function cR(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const gU = UU;
      await async function(UU) {
        const {
          registrationPromise: RU
        } = await gR(UU);
        RU && await RU
      }(gU);
      return (await TR(gU, RU)).token
    }

    function GR(UU) {
      return YU.create("missing-app-config-values", {
        valueName: UU
      })
    }
    const jR = "installations",
      uR = UU => {
        const RU = UU.getProvider("app").getImmediate(),
          gU = function(UU) {
            if (!UU || !UU.options) throw GR("App Configuration");
            if (!UU.name) throw GR("App Name");
            const RU = ["projectId", "apiKey", "appId"];
            for (const gU of RU)
              if (!UU.options[gU]) throw GR(gU);
            return {
              appName: UU.name,
              projectId: UU.options.projectId,
              apiKey: UU.options.apiKey,
              appId: UU.options.appId
            }
          }(RU);
        return {
          app: RU,
          appConfig: gU,
          heartbeatServiceProvider: (0, tU.w)(RU, "heartbeat"),
          _delete: () => Promise.resolve()
        }
      },
      CR = UU => {
        const RU = UU.getProvider("app").getImmediate(),
          gU = (0, tU.w)(RU, jR).getImmediate();
        return {
          getId: () => async function(UU) {
            const RU = UU,
              {
                installationEntry: gU,
                registrationPromise: tU
              } = await gR(RU);
            return tU ? tU.catch(console.error) : TR(RU).catch(console.error), gU.fid
          }(gU),
          getToken: UU => cR(gU, UU)
        }
      };
    (0, tU.A)(new PU.e(jR, uR, "PUBLIC")), (0, tU.A)(new PU.e("installations-internal", CR, "PRIVATE")), (0, tU.U)(JU, wU), (0, tU.U)(JU, wU, "esm2017");
    const hR = "analytics",
      QR = "https://www.googletagmanager.com/gtag/js",
      eR = new pU.h("@firebase/analytics"),
      WR = {
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
      fR = new EU.e("analytics", "Analytics", WR);

    function xR(UU) {
      if (!UU.startsWith(QR)) {
        const RU = fR.create("invalid-gtag-resource", {
          gtagURL: UU
        });
        return eR.warn(RU.message), ""
      }
      return UU
    }

    function mR(UU) {
      return Promise.all(UU.map((UU => UU.catch((UU => UU)))))
    }

    function IR(UU, RU) {
      const gU = function(UU, RU) {
          let gU;
          return window.trustedTypes && (gU = window.trustedTypes.createPolicy(UU, RU)), gU
        }("firebase-js-sdk-policy", {
          createScriptURL: xR
        }),
        tU = document.createElement("script"),
        pU = `${QR}?l=${UU}&id=${RU}`;
      tU.src = gU ? null === gU || void 0 === gU ? void 0 : gU.createScriptURL(pU) : pU, tU.async = !0, document.head.appendChild(tU)
    }

    function JR(UU, RU, gU, tU) {
      return async function(pU) {
        try {
          for (var EU = arguments.length, PU = new Array(EU > 1 ? EU - 1 : 0), TU = 1; TU < EU; TU++) PU[TU - 1] = arguments[TU];
          if ("event" === pU) {
            const [tU, pU] = PU;
            await async function(UU, RU, gU, tU, pU) {
              try {
                let EU = [];
                if (pU && pU.send_to) {
                  let UU = pU.send_to;
                  Array.isArray(UU) || (UU = [UU]);
                  const tU = await mR(gU);
                  for (const gU of UU) {
                    const UU = tU.find((UU => UU.measurementId === gU)),
                      pU = UU && RU[UU.appId];
                    if (!pU) {
                      EU = [];
                      break
                    }
                    EU.push(pU)
                  }
                }
                0 === EU.length && (EU = Object.values(RU)), await Promise.all(EU), UU("event", tU, pU || {})
              } catch (EU) {
                eR.error(EU)
              }
            }(UU, RU, gU, tU, pU)
          } else if ("config" === pU) {
            const [pU, EU] = PU;
            await async function(UU, RU, gU, tU, pU, EU) {
              const PU = tU[pU];
              try {
                if (PU) await RU[PU];
                else {
                  const UU = (await mR(gU)).find((UU => UU.measurementId === pU));
                  UU && await RU[UU.appId]
                }
              } catch (TU) {
                eR.error(TU)
              }
              UU("config", pU, EU)
            }(UU, RU, gU, tU, pU, EU)
          } else if ("consent" === pU) {
            const [RU] = PU;
            UU("consent", "update", RU)
          } else if ("get" === pU) {
            const [RU, gU, tU] = PU;
            UU("get", RU, gU, tU)
          } else if ("set" === pU) {
            const [RU] = PU;
            UU("set", RU)
          } else UU(pU, ...PU)
        } catch (qU) {
          eR.error(qU)
        }
      }
    }
    const wR = new class {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
        this.throttleMetadata = UU, this.intervalMillis = RU
      }
      getThrottleMetadata(UU) {
        return this.throttleMetadata[UU]
      }
      setThrottleMetadata(UU, RU) {
        this.throttleMetadata[UU] = RU
      }
      deleteThrottleMetadata(UU) {
        delete this.throttleMetadata[UU]
      }
    };

    function nR(UU) {
      return new Headers({
        Accept: "application/json",
        "x-goog-api-key": UU
      })
    }
    async function bR(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wR,
        gU = arguments.length > 2 ? arguments[2] : void 0;
      const {
        appId: tU,
        apiKey: pU,
        measurementId: EU
      } = UU.options;
      if (!tU) throw fR.create("no-app-id");
      if (!pU) {
        if (EU) return {
          measurementId: EU,
          appId: tU
        };
        throw fR.create("no-api-key")
      }
      const PU = RU.getThrottleMetadata(tU) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        },
        TU = new ZR;
      return setTimeout((async () => {
        TU.abort()
      }), void 0 !== gU ? gU : 6e4), oR({
        appId: tU,
        apiKey: pU,
        measurementId: EU
      }, PU, TU, RU)
    }
    async function oR(UU, RU, gU) {
      let {
        throttleEndTimeMillis: tU,
        backoffCount: pU
      } = RU, PU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : wR;
      var TU;
      const {
        appId: qU,
        measurementId: KU
      } = UU;
      try {
        await
        function(UU, RU) {
          return new Promise(((gU, tU) => {
            const pU = Math.max(RU - Date.now(), 0),
              EU = setTimeout(gU, pU);
            UU.addEventListener((() => {
              clearTimeout(EU), tU(fR.create("fetch-throttle", {
                throttleEndTimeMillis: RU
              }))
            }))
          }))
        }(gU, tU)
      } catch (cU) {
        if (KU) return eR.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${KU} provided in the "measurementId" field in the local Firebase config. [${null===cU||void 0===cU?void 0:cU.message}]`), {
          appId: qU,
          measurementId: KU
        };
        throw cU
      }
      try {
        const RU = await async function(UU) {
          var RU;
          const {
            appId: gU,
            apiKey: tU
          } = UU, pU = {
            method: "GET",
            headers: nR(tU)
          }, EU = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", gU), PU = await fetch(EU, pU);
          if (200 !== PU.status && 304 !== PU.status) {
            let UU = "";
            try {
              const gU = await PU.json();
              (null === (RU = gU.error) || void 0 === RU ? void 0 : RU.message) && (UU = gU.error.message)
            } catch (TU) {}
            throw fR.create("config-fetch-failed", {
              httpStatus: PU.status,
              responseMessage: UU
            })
          }
          return PU.json()
        }(UU);
        return PU.deleteThrottleMetadata(qU), RU
      } catch (cU) {
        const RU = cU;
        if (! function(UU) {
            if (!(UU instanceof EU.i) || !UU.customData) return !1;
            const RU = Number(UU.customData.httpStatus);
            return 429 === RU || 500 === RU || 503 === RU || 504 === RU
          }(RU)) {
          if (PU.deleteThrottleMetadata(qU), KU) return eR.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${KU} provided in the "measurementId" field in the local Firebase config. [${null===RU||void 0===RU?void 0:RU.message}]`), {
            appId: qU,
            measurementId: KU
          };
          throw cU
        }
        const tU = 503 === Number(null === (TU = null === RU || void 0 === RU ? void 0 : RU.customData) || void 0 === TU ? void 0 : TU.httpStatus) ? (0, EU.p)(pU, PU.intervalMillis, 30) : (0, EU.p)(pU, PU.intervalMillis),
          GU = {
            throttleEndTimeMillis: Date.now() + tU,
            backoffCount: pU + 1
          };
        return PU.setThrottleMetadata(qU, GU), eR.debug(`Calling attemptFetch again in ${tU} millis`), oR(UU, GU, gU, PU)
      }
    }
    class ZR {
      constructor() {
        this.listeners = []
      }
      addEventListener(UU) {
        this.listeners.push(UU)
      }
      abort() {
        this.listeners.forEach((UU => UU()))
      }
    }
    let aR, YR;

    function BR(UU) {
      YR = UU
    }

    function VR(UU) {
      aR = UU
    }
    async function rR(UU, RU, gU, tU, pU, PU, TU) {
      var qU;
      const KU = bR(UU);
      KU.then((RU => {
        gU[RU.measurementId] = RU.appId, UU.options.measurementId && RU.measurementId !== UU.options.measurementId && eR.warn(`The measurement ID in the local Firebase config (${UU.options.measurementId}) does not match the measurement ID fetched from the server (${RU.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
      })).catch((UU => eR.error(UU))), RU.push(KU);
      const cU = async function() {
        if (!(0, EU.P)()) return eR.warn(fR.create("indexeddb-unavailable", {
          errorInfo: "IndexedDB is not available in this environment."
        }).message), !1;
        try {
          await (0, EU.ab)()
        } catch (UU) {
          return eR.warn(fR.create("indexeddb-unavailable", {
            errorInfo: null === UU || void 0 === UU ? void 0 : UU.toString()
          }).message), !1
        }
        return !0
      }().then((UU => UU ? tU.getId() : void 0)), [GU, jU] = await Promise.all([KU, cU]);
      (function(UU) {
        const RU = window.document.getElementsByTagName("script");
        for (const gU of Object.values(RU))
          if (gU.src && gU.src.includes(QR) && gU.src.includes(UU)) return gU;
        return null
      })(PU) || IR(PU, GU.measurementId), YR && (pU("consent", "default", YR), BR(void 0)), pU("js", new Date);
      const uU = null !== (qU = null === TU || void 0 === TU ? void 0 : TU.config) && void 0 !== qU ? qU : {};
      return uU.origin = "firebase", uU.update = !0, null != jU && (uU.firebase_id = jU), pU("config", GU.measurementId, uU), aR && (pU("set", aR), VR(void 0)), GU.measurementId
    }
    class XR {
      constructor(UU) {
        this.app = UU
      }
      _delete() {
        return delete vR[this.app.options.appId], Promise.resolve()
      }
    }
    let vR = {},
      dR = [];
    const HR = {};
    let SR, sR, yR = "dataLayer",
      kR = "gtag",
      FR = !1;

    function iR(UU) {
      if (FR) throw fR.create("already-initialized");
      UU.dataLayerName && (yR = UU.dataLayerName), UU.gtagName && (kR = UU.gtagName)
    }

    function AR(UU, RU, gU) {
      ! function() {
        const UU = [];
        if ((0, EU.M)() && UU.push("This is a browser extension environment."), (0, EU.k)() || UU.push("Cookies are not available."), UU.length > 0) {
          const RU = UU.map(((UU, RU) => `(${RU+1}) ${UU}`)).join(" "),
            gU = fR.create("invalid-analytics-context", {
              errorInfo: RU
            });
          eR.warn(gU.message)
        }
      }();
      const tU = UU.options.appId;
      if (!tU) throw fR.create("no-app-id");
      if (!UU.options.apiKey) {
        if (!UU.options.measurementId) throw fR.create("no-api-key");
        eR.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${UU.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
      }
      if (null != vR[tU]) throw fR.create("already-exists", {
        id: tU
      });
      if (!FR) {
        ! function(UU) {
          let RU = [];
          Array.isArray(window[UU]) ? RU = window[UU] : window[UU] = RU
        }(yR);
        const {
          wrappedGtag: UU,
          gtagCore: RU
        } = function(UU, RU, gU, tU, pU) {
          let EU = function() {
            for (var UU = arguments.length, RU = new Array(UU), gU = 0; gU < UU; gU++) RU[gU] = arguments[gU];
            window[tU].push(arguments)
          };
          return window[pU] && "function" === typeof window[pU] && (EU = window[pU]), window[pU] = JR(EU, UU, RU, gU), {
            gtagCore: EU,
            wrappedGtag: window[pU]
          }
        }(vR, dR, HR, yR, kR);
        sR = UU, SR = RU, FR = !0
      }
      vR[tU] = rR(UU, dR, HR, RU, SR, yR, gU);
      return new XR(UU)
    }

    function zR() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, tU.K)();
      UU = (0, EU.I)(UU);
      const RU = (0, tU.w)(UU, hR);
      return RU.isInitialized() ? RU.getImmediate() : MR(UU)
    }

    function MR(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const gU = (0, tU.w)(UU, hR);
      if (gU.isInitialized()) {
        const UU = gU.getImmediate();
        if ((0, EU.v)(RU, gU.getOptions())) return UU;
        throw fR.create("already-initialized")
      }
      return gU.initialize({
        options: RU
      })
    }
    async function DR() {
      if ((0, EU.M)()) return !1;
      if (!(0, EU.k)()) return !1;
      if (!(0, EU.P)()) return !1;
      try {
        return await (0, EU.ab)()
      } catch (UU) {
        return !1
      }
    }

    function LR(UU, RU, gU) {
      UU = (0, EU.I)(UU), async function(UU, RU, gU, tU) {
        if (tU && tU.global) return UU("set", {
          screen_name: gU
        }), Promise.resolve();
        UU("config", await RU, {
          update: !0,
          screen_name: gU
        })
      }(sR, vR[UU.app.options.appId], RU, gU).catch((UU => eR.error(UU)))
    }
    async function NR(UU) {
      return UU = (0, EU.I)(UU), async function(UU, RU) {
        const gU = await RU;
        return new Promise(((RU, tU) => {
          UU("get", gU, "client_id", (UU => {
            UU || tU(fR.create("no-client-id")), RU(UU)
          }))
        }))
      }(sR, vR[UU.app.options.appId])
    }

    function lR(UU, RU, gU) {
      UU = (0, EU.I)(UU), async function(UU, RU, gU, tU) {
        if (tU && tU.global) return UU("set", {
          user_id: gU
        }), Promise.resolve();
        UU("config", await RU, {
          update: !0,
          user_id: gU
        })
      }(sR, vR[UU.app.options.appId], RU, gU).catch((UU => eR.error(UU)))
    }

    function OR(UU, RU, gU) {
      UU = (0, EU.I)(UU), async function(UU, RU, gU, tU) {
        if (tU && tU.global) {
          const RU = {};
          for (const UU of Object.keys(gU)) RU[`user_properties.${UU}`] = gU[UU];
          return UU("set", RU), Promise.resolve()
        }
        UU("config", await RU, {
          update: !0,
          user_properties: gU
        })
      }(sR, vR[UU.app.options.appId], RU, gU).catch((UU => eR.error(UU)))
    }

    function Ug(UU, RU) {
      UU = (0, EU.I)(UU), async function(UU, RU) {
        const gU = await UU;
        window[`ga-disable-${gU}`] = !RU
      }(vR[UU.app.options.appId], RU).catch((UU => eR.error(UU)))
    }

    function Rg(UU) {
      sR ? sR("set", UU) : VR(UU)
    }

    function gg(UU, RU, gU, tU) {
      UU = (0, EU.I)(UU), async function(UU, RU, gU, tU, pU) {
        if (pU && pU.global) UU("event", gU, tU);
        else {
          const pU = await RU;
          UU("event", gU, Object.assign(Object.assign({}, tU), {
            send_to: pU
          }))
        }
      }(sR, vR[UU.app.options.appId], RU, gU, tU).catch((UU => eR.error(UU)))
    }

    function tg(UU) {
      sR ? sR("consent", "update", UU) : BR(UU)
    }
    const pg = "@firebase/analytics",
      Eg = "0.10.0";
    (0, tU.A)(new PU.e(hR, ((UU, RU) => {
      let {
        options: gU
      } = RU;
      return AR(UU.getProvider("app").getImmediate(), UU.getProvider("installations-internal").getImmediate(), gU)
    }), "PUBLIC")), (0, tU.A)(new PU.e("analytics-internal", (function(UU) {
      try {
        const RU = UU.getProvider(hR).getImmediate();
        return {
          logEvent: (UU, gU, tU) => gg(RU, UU, gU, tU)
        }
      } catch (RU) {
        throw fR.create("interop-component-reg-failed", {
          reason: RU
        })
      }
    }), "PRIVATE")), (0, tU.U)(pg, Eg), (0, tU.U)(pg, Eg, "esm2017")
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);