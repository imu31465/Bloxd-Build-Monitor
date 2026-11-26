/*! For license information please see fecih8.292.0449abef.chunk.js.LICENSE.txt */
export const id = 292;
export const ids = [292];
export const modules = {
  41610: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      getAnalytics: () => xX,
      getGoogleAnalyticsClientId: () => bX,
      initializeAnalytics: () => JX,
      isSupported: () => jX,
      logEvent: () => zz,
      setAnalyticsCollectionEnabled: () => Uz,
      setConsent: () => cz,
      setCurrentScreen: () => KX,
      setDefaultEventParameters: () => Xz,
      setUserId: () => TX,
      setUserProperties: () => hX,
      settings: () => mX
    });
    var cU = zU(41582),
      yU = zU(41603),
      QU = zU(41599),
      AU = zU(41590);
    let FU, oU;
    const DU = new WeakMap,
      EU = new WeakMap,
      YU = new WeakMap,
      NU = new WeakMap,
      IU = new WeakMap;
    let pU = {
      get(UU, XU, zU) {
        if (UU instanceof IDBTransaction) {
          if ("done" === XU) return EU.get(UU);
          if ("objectStoreNames" === XU) return UU.objectStoreNames || YU.get(UU);
          if ("store" === XU) return zU.objectStoreNames[1] ? void 0 : zU.objectStore(zU.objectStoreNames[0])
        }
        return gU(UU[XU])
      },
      set: (UU, XU, zU) => (UU[XU] = zU, !0),
      has: (UU, XU) => UU instanceof IDBTransaction && ("done" === XU || "store" === XU) || XU in UU
    };

    function aU(UU) {
      return UU !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (oU || (oU = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(UU) ? function() {
        for (var XU = arguments.length, zU = new Array(XU), cU = 0; cU < XU; cU++) zU[cU] = arguments[cU];
        return UU.apply(kU(this), zU), gU(DU.get(this))
      } : function() {
        for (var XU = arguments.length, zU = new Array(XU), cU = 0; cU < XU; cU++) zU[cU] = arguments[cU];
        return gU(UU.apply(kU(this), zU))
      } : function(XU) {
        for (var zU = arguments.length, cU = new Array(zU > 1 ? zU - 1 : 0), yU = 1; yU < zU; yU++) cU[yU - 1] = arguments[yU];
        const QU = UU.call(kU(this), XU, ...cU);
        return YU.set(QU, XU.sort ? XU.sort() : [XU]), gU(QU)
      }
    }

    function tU(UU) {
      return "function" === typeof UU ? aU(UU) : (UU instanceof IDBTransaction && function(UU) {
        if (EU.has(UU)) return;
        const XU = new Promise(((XU, zU) => {
          const cU = () => {
              UU.removeEventListener("complete", yU), UU.removeEventListener("error", QU), UU.removeEventListener("abort", QU)
            },
            yU = () => {
              XU(), cU()
            },
            QU = () => {
              zU(UU.error || new DOMException("AbortError", "AbortError")), cU()
            };
          UU.addEventListener("complete", yU), UU.addEventListener("error", QU), UU.addEventListener("abort", QU)
        }));
        EU.set(UU, XU)
      }(UU), XU = UU, (FU || (FU = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((UU => XU instanceof UU)) ? new Proxy(UU, pU) : UU);
      var XU
    }

    function gU(UU) {
      if (UU instanceof IDBRequest) return function(UU) {
        const XU = new Promise(((XU, zU) => {
          const cU = () => {
              UU.removeEventListener("success", yU), UU.removeEventListener("error", QU)
            },
            yU = () => {
              XU(gU(UU.result)), cU()
            },
            QU = () => {
              zU(UU.error), cU()
            };
          UU.addEventListener("success", yU), UU.addEventListener("error", QU)
        }));
        return XU.then((XU => {
          XU instanceof IDBCursor && DU.set(XU, UU)
        })).catch((() => {})), IU.set(XU, UU), XU
      }(UU);
      if (NU.has(UU)) return NU.get(UU);
      const XU = tU(UU);
      return XU !== UU && (NU.set(UU, XU), IU.set(XU, UU)), XU
    }
    const kU = UU => IU.get(UU);
    const GU = ["get", "getKey", "getAll", "getAllKeys", "count"],
      BU = ["put", "add", "delete", "clear"],
      ZU = new Map;

    function RU(UU, XU) {
      if (!(UU instanceof IDBDatabase) || XU in UU || "string" !== typeof XU) return;
      if (ZU.get(XU)) return ZU.get(XU);
      const zU = XU.replace(/FromIndex$/, ""),
        cU = XU !== zU,
        yU = BU.includes(zU);
      if (!(zU in (cU ? IDBIndex : IDBObjectStore).prototype) || !yU && !GU.includes(zU)) return;
      const QU = async function(UU) {
        const XU = this.transaction(UU, yU ? "readwrite" : "readonly");
        let QU = XU.store;
        for (var AU = arguments.length, FU = new Array(AU > 1 ? AU - 1 : 0), oU = 1; oU < AU; oU++) FU[oU - 1] = arguments[oU];
        return cU && (QU = QU.index(FU.shift())), (await Promise.all([QU[zU](...FU), yU && XU.done]))[0]
      };
      return ZU.set(XU, QU), QU
    }
    pU = (UU => ({
      ...UU,
      get: (XU, zU, cU) => RU(XU, zU) || UU.get(XU, zU, cU),
      has: (XU, zU) => !!RU(XU, zU) || UU.has(XU, zU)
    }))(pU);
    const PU = "@firebase/installations",
      WU = "0.6.4",
      dU = 1e4,
      LU = `w:${WU}`,
      eU = "FIS_v2",
      CU = 36e5,
      wU = {
        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
        "not-registered": "Firebase Installation is not registered.",
        "installation-not-found": "Firebase Installation not found.",
        "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        "app-offline": "Could not process request. Application offline.",
        "delete-pending-registration": "Can't delete installation while there is a pending registration request."
      },
      qU = new QU.f("installations", "Installations", wU);

    function OU(UU) {
      return UU instanceof QU.j && UU.code.includes("request-failed")
    }

    function SU(UU) {
      let {
        projectId: XU
      } = UU;
      return `https://firebaseinstallations.googleapis.com/v1/projects/${XU}/installations`
    }

    function rU(UU) {
      return {
        token: UU.token,
        requestStatus: 2,
        expiresIn: (XU = UU.expiresIn, Number(XU.replace("s", "000"))),
        creationTime: Date.now()
      };
      var XU
    }
    async function uU(UU, XU) {
      const zU = (await XU.json()).error;
      return qU.create("request-failed", {
        requestName: UU,
        serverCode: zU.code,
        serverMessage: zU.message,
        serverStatus: zU.status
      })
    }

    function fU(UU) {
      let {
        apiKey: XU
      } = UU;
      return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": XU
      })
    }

    function iU(UU, XU) {
      let {
        refreshToken: zU
      } = XU;
      const cU = fU(UU);
      return cU.append("Authorization", function(UU) {
        return `${eU} ${UU}`
      }(zU)), cU
    }
    async function HU(UU) {
      const XU = await UU();
      return XU.status >= 500 && XU.status < 600 ? UU() : XU
    }

    function MU(UU) {
      return new Promise((XU => {
        setTimeout(XU, UU)
      }))
    }
    const vU = /^[cdef][\w-]{21}$/;

    function VU() {
      try {
        const UU = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(UU), UU[0] = 112 + UU[0] % 16;
        const XU = function(UU) {
          const XU = (zU = UU, btoa(String.fromCharCode(...zU)).replace(/\+/g, "-").replace(/\//g, "_"));
          var zU;
          return XU.substr(0, 22)
        }(UU);
        return vU.test(XU) ? XU : ""
      } catch (UU) {
        return ""
      }
    }

    function sU(UU) {
      return `${UU.appName}!${UU.appId}`
    }
    const nU = new Map;

    function mU(UU, XU) {
      const zU = sU(UU);
      lU(zU, XU),
        function(UU, XU) {
          const zU = JU();
          zU && zU.postMessage({
            key: UU,
            fid: XU
          });
          jU()
        }(zU, XU)
    }

    function lU(UU, XU) {
      const zU = nU.get(UU);
      if (zU)
        for (const cU of zU) cU(XU)
    }
    let xU = null;

    function JU() {
      return !xU && "BroadcastChannel" in self && (xU = new BroadcastChannel("[Firebase] FID Change"), xU.onmessage = UU => {
        lU(UU.data.key, UU.data.fid)
      }), xU
    }

    function jU() {
      0 === nU.size && xU && (xU.close(), xU = null)
    }
    const KU = "firebase-installations-store";
    let bU = null;

    function TU() {
      return bU || (bU = function(UU, XU) {
        let {
          blocked: zU,
          upgrade: cU,
          blocking: yU,
          terminated: QU
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const AU = indexedDB.open(UU, XU),
          FU = gU(AU);
        return cU && AU.addEventListener("upgradeneeded", (UU => {
          cU(gU(AU.result), UU.oldVersion, UU.newVersion, gU(AU.transaction))
        })), zU && AU.addEventListener("blocked", (() => zU())), FU.then((UU => {
          QU && UU.addEventListener("close", (() => QU())), yU && UU.addEventListener("versionchange", (() => yU()))
        })).catch((() => {})), FU
      }("firebase-installations-database", 1, {
        upgrade: (UU, XU) => {
          if (0 === XU) UU.createObjectStore(KU)
        }
      })), bU
    }
    async function hU(UU, XU) {
      const zU = sU(UU),
        cU = (await TU()).transaction(KU, "readwrite"),
        yU = cU.objectStore(KU),
        QU = await yU.get(zU);
      return await yU.put(XU, zU), await cU.done, QU && QU.fid === XU.fid || mU(UU, XU.fid), XU
    }
    async function UX(UU) {
      const XU = sU(UU),
        zU = (await TU()).transaction(KU, "readwrite");
      await zU.objectStore(KU).delete(XU), await zU.done
    }
    async function XX(UU, XU) {
      const zU = sU(UU),
        cU = (await TU()).transaction(KU, "readwrite"),
        yU = cU.objectStore(KU),
        QU = await yU.get(zU),
        AU = XU(QU);
      return void 0 === AU ? await yU.delete(zU) : await yU.put(AU, zU), await cU.done, !AU || QU && QU.fid === AU.fid || mU(UU, AU.fid), AU
    }
    async function zX(UU) {
      let XU;
      const zU = await XX(UU.appConfig, (zU => {
        const cU = function(UU) {
            const XU = UU || {
              fid: VU(),
              registrationStatus: 0
            };
            return QX(XU)
          }(zU),
          yU = function(UU, XU) {
            if (0 === XU.registrationStatus) {
              if (!navigator.onLine) {
                return {
                  installationEntry: XU,
                  registrationPromise: Promise.reject(qU.create("app-offline"))
                }
              }
              const zU = {
                  fid: XU.fid,
                  registrationStatus: 1,
                  registrationTime: Date.now()
                },
                cU = async function(UU, XU) {
                  try {
                    const zU = await async function(UU, XU) {
                      let {
                        appConfig: zU,
                        heartbeatServiceProvider: cU
                      } = UU, {
                        fid: yU
                      } = XU;
                      const QU = SU(zU),
                        AU = fU(zU),
                        FU = cU.getImmediate({
                          optional: !0
                        });
                      if (FU) {
                        const UU = await FU.getHeartbeatsHeader();
                        UU && AU.append("x-firebase-client", UU)
                      }
                      const oU = {
                          fid: yU,
                          authVersion: eU,
                          appId: zU.appId,
                          sdkVersion: LU
                        },
                        DU = {
                          method: "POST",
                          headers: AU,
                          body: JSON.stringify(oU)
                        },
                        EU = await HU((() => fetch(QU, DU)));
                      if (EU.ok) {
                        const UU = await EU.json();
                        return {
                          fid: UU.fid || yU,
                          registrationStatus: 2,
                          refreshToken: UU.refreshToken,
                          authToken: rU(UU.authToken)
                        }
                      }
                      throw await uU("Create Installation", EU)
                    }(UU, XU);
                    return hU(UU.appConfig, zU)
                  } catch (zU) {
                    throw OU(zU) && 409 === zU.customData.serverCode ? await UX(UU.appConfig) : await hU(UU.appConfig, {
                      fid: XU.fid,
                      registrationStatus: 0
                    }), zU
                  }
                }(UU, zU);
              return {
                installationEntry: zU,
                registrationPromise: cU
              }
            }
            return 1 === XU.registrationStatus ? {
              installationEntry: XU,
              registrationPromise: cX(UU)
            } : {
              installationEntry: XU
            }
          }(UU, cU);
        return XU = yU.registrationPromise, yU.installationEntry
      }));
      return "" === zU.fid ? {
        installationEntry: await XU
      } : {
        installationEntry: zU,
        registrationPromise: XU
      }
    }
    async function cX(UU) {
      let XU = await yX(UU.appConfig);
      for (; 1 === XU.registrationStatus;) await MU(100), XU = await yX(UU.appConfig);
      if (0 === XU.registrationStatus) {
        const {
          installationEntry: XU,
          registrationPromise: zU
        } = await zX(UU);
        return zU || XU
      }
      return XU
    }

    function yX(UU) {
      return XX(UU, (UU => {
        if (!UU) throw qU.create("installation-not-found");
        return QX(UU)
      }))
    }

    function QX(UU) {
      return 1 === (XU = UU).registrationStatus && XU.registrationTime + dU < Date.now() ? {
        fid: UU.fid,
        registrationStatus: 0
      } : UU;
      var XU
    }
    async function AX(UU, XU) {
      let {
        appConfig: zU,
        heartbeatServiceProvider: cU
      } = UU;
      const yU = function(UU, XU) {
          let {
            fid: zU
          } = XU;
          return `${SU(UU)}/${zU}/authTokens:generate`
        }(zU, XU),
        QU = iU(zU, XU),
        AU = cU.getImmediate({
          optional: !0
        });
      if (AU) {
        const UU = await AU.getHeartbeatsHeader();
        UU && QU.append("x-firebase-client", UU)
      }
      const FU = {
          installation: {
            sdkVersion: LU,
            appId: zU.appId
          }
        },
        oU = {
          method: "POST",
          headers: QU,
          body: JSON.stringify(FU)
        },
        DU = await HU((() => fetch(yU, oU)));
      if (DU.ok) {
        return rU(await DU.json())
      }
      throw await uU("Generate Auth Token", DU)
    }
    async function FX(UU) {
      let XU, zU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const cU = await XX(UU.appConfig, (cU => {
        if (!DX(cU)) throw qU.create("not-registered");
        const yU = cU.authToken;
        if (!zU && function(UU) {
            return 2 === UU.requestStatus && ! function(UU) {
              const XU = Date.now();
              return XU < UU.creationTime || UU.creationTime + UU.expiresIn < XU + CU
            }(UU)
          }(yU)) return cU;
        if (1 === yU.requestStatus) return XU = async function(UU, XU) {
          let zU = await oX(UU.appConfig);
          for (; 1 === zU.authToken.requestStatus;) await MU(100), zU = await oX(UU.appConfig);
          const cU = zU.authToken;
          return 0 === cU.requestStatus ? FX(UU, XU) : cU
        }(UU, zU), cU;
        {
          if (!navigator.onLine) throw qU.create("app-offline");
          const zU = function(UU) {
            const XU = {
              requestStatus: 1,
              requestTime: Date.now()
            };
            return Object.assign(Object.assign({}, UU), {
              authToken: XU
            })
          }(cU);
          return XU = async function(UU, XU) {
            try {
              const zU = await AX(UU, XU),
                cU = Object.assign(Object.assign({}, XU), {
                  authToken: zU
                });
              return await hU(UU.appConfig, cU), zU
            } catch (zU) {
              if (!OU(zU) || 401 !== zU.customData.serverCode && 404 !== zU.customData.serverCode) {
                const zU = Object.assign(Object.assign({}, XU), {
                  authToken: {
                    requestStatus: 0
                  }
                });
                await hU(UU.appConfig, zU)
              } else await UX(UU.appConfig);
              throw zU
            }
          }(UU, zU), zU
        }
      }));
      return XU ? await XU : cU.authToken
    }

    function oX(UU) {
      return XX(UU, (UU => {
        if (!DX(UU)) throw qU.create("not-registered");
        const XU = UU.authToken;
        return 1 === (zU = XU).requestStatus && zU.requestTime + dU < Date.now() ? Object.assign(Object.assign({}, UU), {
          authToken: {
            requestStatus: 0
          }
        }) : UU;
        var zU
      }))
    }

    function DX(UU) {
      return void 0 !== UU && 2 === UU.registrationStatus
    }
    async function EX(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const zU = UU;
      await async function(UU) {
        const {
          registrationPromise: XU
        } = await zX(UU);
        XU && await XU
      }(zU);
      return (await FX(zU, XU)).token
    }

    function YX(UU) {
      return qU.create("missing-app-config-values", {
        valueName: UU
      })
    }
    const NX = "installations",
      IX = UU => {
        const XU = UU.getProvider("app").getImmediate(),
          zU = function(UU) {
            if (!UU || !UU.options) throw YX("App Configuration");
            if (!UU.name) throw YX("App Name");
            const XU = ["projectId", "apiKey", "appId"];
            for (const zU of XU)
              if (!UU.options[zU]) throw YX(zU);
            return {
              appName: UU.name,
              projectId: UU.options.projectId,
              apiKey: UU.options.apiKey,
              appId: UU.options.appId
            }
          }(XU);
        return {
          app: XU,
          appConfig: zU,
          heartbeatServiceProvider: (0, cU.s)(XU, "heartbeat"),
          _delete: () => Promise.resolve()
        }
      },
      pX = UU => {
        const XU = UU.getProvider("app").getImmediate(),
          zU = (0, cU.s)(XU, NX).getImmediate();
        return {
          getId: () => async function(UU) {
            const XU = UU,
              {
                installationEntry: zU,
                registrationPromise: cU
              } = await zX(XU);
            return cU ? cU.catch(console.error) : FX(XU).catch(console.error), zU.fid
          }(zU),
          getToken: UU => EX(zU, UU)
        }
      };
    (0, cU.t)(new AU.f(NX, IX, "PUBLIC")), (0, cU.t)(new AU.f("installations-internal", pX, "PRIVATE")), (0, cU.Q)(PU, WU), (0, cU.Q)(PU, WU, "esm2017");
    const aX = "analytics",
      tX = "https://www.googletagmanager.com/gtag/js",
      gX = new yU.d("@firebase/analytics"),
      kX = {
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
      GX = new QU.f("analytics", "Analytics", kX);

    function BX(UU) {
      if (!UU.startsWith(tX)) {
        const XU = GX.create("invalid-gtag-resource", {
          gtagURL: UU
        });
        return gX.warn(XU.message), ""
      }
      return UU
    }

    function ZX(UU) {
      return Promise.all(UU.map((UU => UU.catch((UU => UU)))))
    }

    function RX(UU, XU) {
      const zU = function(UU, XU) {
          let zU;
          return window.trustedTypes && (zU = window.trustedTypes.createPolicy(UU, XU)), zU
        }("firebase-js-sdk-policy", {
          createScriptURL: BX
        }),
        cU = document.createElement("script"),
        yU = `${tX}?l=${UU}&id=${XU}`;
      cU.src = zU ? null === zU || void 0 === zU ? void 0 : zU.createScriptURL(yU) : yU, cU.async = !0, document.head.appendChild(cU)
    }

    function PX(UU, XU, zU, cU) {
      return async function(yU) {
        try {
          for (var QU = arguments.length, AU = new Array(QU > 1 ? QU - 1 : 0), FU = 1; FU < QU; FU++) AU[FU - 1] = arguments[FU];
          if ("event" === yU) {
            const [cU, yU] = AU;
            await async function(UU, XU, zU, cU, yU) {
              try {
                let QU = [];
                if (yU && yU.send_to) {
                  let UU = yU.send_to;
                  Array.isArray(UU) || (UU = [UU]);
                  const cU = await ZX(zU);
                  for (const zU of UU) {
                    const UU = cU.find((UU => UU.measurementId === zU)),
                      yU = UU && XU[UU.appId];
                    if (!yU) {
                      QU = [];
                      break
                    }
                    QU.push(yU)
                  }
                }
                0 === QU.length && (QU = Object.values(XU)), await Promise.all(QU), UU("event", cU, yU || {})
              } catch (QU) {
                gX.error(QU)
              }
            }(UU, XU, zU, cU, yU)
          } else if ("config" === yU) {
            const [yU, QU] = AU;
            await async function(UU, XU, zU, cU, yU, QU) {
              const AU = cU[yU];
              try {
                if (AU) await XU[AU];
                else {
                  const UU = (await ZX(zU)).find((UU => UU.measurementId === yU));
                  UU && await XU[UU.appId]
                }
              } catch (FU) {
                gX.error(FU)
              }
              UU("config", yU, QU)
            }(UU, XU, zU, cU, yU, QU)
          } else if ("consent" === yU) {
            const [XU] = AU;
            UU("consent", "update", XU)
          } else if ("get" === yU) {
            const [XU, zU, cU] = AU;
            UU("get", XU, zU, cU)
          } else if ("set" === yU) {
            const [XU] = AU;
            UU("set", XU)
          } else UU(yU, ...AU)
        } catch (oU) {
          gX.error(oU)
        }
      }
    }
    const WX = new class {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
        this.throttleMetadata = UU, this.intervalMillis = XU
      }
      getThrottleMetadata(UU) {
        return this.throttleMetadata[UU]
      }
      setThrottleMetadata(UU, XU) {
        this.throttleMetadata[UU] = XU
      }
      deleteThrottleMetadata(UU) {
        delete this.throttleMetadata[UU]
      }
    };

    function dX(UU) {
      return new Headers({
        Accept: "application/json",
        "x-goog-api-key": UU
      })
    }
    async function LX(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WX,
        zU = arguments.length > 2 ? arguments[2] : void 0;
      const {
        appId: cU,
        apiKey: yU,
        measurementId: QU
      } = UU.options;
      if (!cU) throw GX.create("no-app-id");
      if (!yU) {
        if (QU) return {
          measurementId: QU,
          appId: cU
        };
        throw GX.create("no-api-key")
      }
      const AU = XU.getThrottleMetadata(cU) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        },
        FU = new CX;
      return setTimeout((async () => {
        FU.abort()
      }), void 0 !== zU ? zU : 6e4), eX({
        appId: cU,
        apiKey: yU,
        measurementId: QU
      }, AU, FU, XU)
    }
    async function eX(UU, XU, zU) {
      let {
        throttleEndTimeMillis: cU,
        backoffCount: yU
      } = XU, AU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : WX;
      var FU;
      const {
        appId: oU,
        measurementId: DU
      } = UU;
      try {
        await
        function(UU, XU) {
          return new Promise(((zU, cU) => {
            const yU = Math.max(XU - Date.now(), 0),
              QU = setTimeout(zU, yU);
            UU.addEventListener((() => {
              clearTimeout(QU), cU(GX.create("fetch-throttle", {
                throttleEndTimeMillis: XU
              }))
            }))
          }))
        }(zU, cU)
      } catch (EU) {
        if (DU) return gX.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${DU} provided in the "measurementId" field in the local Firebase config. [${null===EU||void 0===EU?void 0:EU.message}]`), {
          appId: oU,
          measurementId: DU
        };
        throw EU
      }
      try {
        const XU = await async function(UU) {
          var XU;
          const {
            appId: zU,
            apiKey: cU
          } = UU, yU = {
            method: "GET",
            headers: dX(cU)
          }, QU = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", zU), AU = await fetch(QU, yU);
          if (200 !== AU.status && 304 !== AU.status) {
            let UU = "";
            try {
              const zU = await AU.json();
              (null === (XU = zU.error) || void 0 === XU ? void 0 : XU.message) && (UU = zU.error.message)
            } catch (FU) {}
            throw GX.create("config-fetch-failed", {
              httpStatus: AU.status,
              responseMessage: UU
            })
          }
          return AU.json()
        }(UU);
        return AU.deleteThrottleMetadata(oU), XU
      } catch (EU) {
        const XU = EU;
        if (! function(UU) {
            if (!(UU instanceof QU.j) || !UU.customData) return !1;
            const XU = Number(UU.customData.httpStatus);
            return 429 === XU || 500 === XU || 503 === XU || 504 === XU
          }(XU)) {
          if (AU.deleteThrottleMetadata(oU), DU) return gX.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${DU} provided in the "measurementId" field in the local Firebase config. [${null===XU||void 0===XU?void 0:XU.message}]`), {
            appId: oU,
            measurementId: DU
          };
          throw EU
        }
        const cU = 503 === Number(null === (FU = null === XU || void 0 === XU ? void 0 : XU.customData) || void 0 === FU ? void 0 : FU.httpStatus) ? (0, QU.v)(yU, AU.intervalMillis, 30) : (0, QU.v)(yU, AU.intervalMillis),
          YU = {
            throttleEndTimeMillis: Date.now() + cU,
            backoffCount: yU + 1
          };
        return AU.setThrottleMetadata(oU, YU), gX.debug(`Calling attemptFetch again in ${cU} millis`), eX(UU, YU, zU, AU)
      }
    }
    class CX {
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
    let wX, qX;

    function OX(UU) {
      qX = UU
    }

    function SX(UU) {
      wX = UU
    }
    async function rX(UU, XU, zU, cU, yU, AU, FU) {
      var oU;
      const DU = LX(UU);
      DU.then((XU => {
        zU[XU.measurementId] = XU.appId, UU.options.measurementId && XU.measurementId !== UU.options.measurementId && gX.warn(`The measurement ID in the local Firebase config (${UU.options.measurementId}) does not match the measurement ID fetched from the server (${XU.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
      })).catch((UU => gX.error(UU))), XU.push(DU);
      const EU = async function() {
        if (!(0, QU.fb)()) return gX.warn(GX.create("indexeddb-unavailable", {
          errorInfo: "IndexedDB is not available in this environment."
        }).message), !1;
        try {
          await (0, QU.tb)()
        } catch (UU) {
          return gX.warn(GX.create("indexeddb-unavailable", {
            errorInfo: null === UU || void 0 === UU ? void 0 : UU.toString()
          }).message), !1
        }
        return !0
      }().then((UU => UU ? cU.getId() : void 0)), [YU, NU] = await Promise.all([DU, EU]);
      (function(UU) {
        const XU = window.document.getElementsByTagName("script");
        for (const zU of Object.values(XU))
          if (zU.src && zU.src.includes(tX) && zU.src.includes(UU)) return zU;
        return null
      })(AU) || RX(AU, YU.measurementId), qX && (yU("consent", "default", qX), OX(void 0)), yU("js", new Date);
      const IU = null !== (oU = null === FU || void 0 === FU ? void 0 : FU.config) && void 0 !== oU ? oU : {};
      return IU.origin = "firebase", IU.update = !0, null != NU && (IU.firebase_id = NU), yU("config", YU.measurementId, IU), wX && (yU("set", wX), SX(void 0)), YU.measurementId
    }
    class uX {
      constructor(UU) {
        this.app = UU
      }
      _delete() {
        return delete fX[this.app.options.appId], Promise.resolve()
      }
    }
    let fX = {},
      iX = [];
    const HX = {};
    let MX, vX, VX = "dataLayer",
      sX = "gtag",
      nX = !1;

    function mX(UU) {
      if (nX) throw GX.create("already-initialized");
      UU.dataLayerName && (VX = UU.dataLayerName), UU.gtagName && (sX = UU.gtagName)
    }

    function lX(UU, XU, zU) {
      ! function() {
        const UU = [];
        if ((0, QU.Z)() && UU.push("This is a browser extension environment."), (0, QU.m)() || UU.push("Cookies are not available."), UU.length > 0) {
          const XU = UU.map(((UU, XU) => `(${XU+1}) ${UU}`)).join(" "),
            zU = GX.create("invalid-analytics-context", {
              errorInfo: XU
            });
          gX.warn(zU.message)
        }
      }();
      const cU = UU.options.appId;
      if (!cU) throw GX.create("no-app-id");
      if (!UU.options.apiKey) {
        if (!UU.options.measurementId) throw GX.create("no-api-key");
        gX.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${UU.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
      }
      if (null != fX[cU]) throw GX.create("already-exists", {
        id: cU
      });
      if (!nX) {
        ! function(UU) {
          let XU = [];
          Array.isArray(window[UU]) ? XU = window[UU] : window[UU] = XU
        }(VX);
        const {
          wrappedGtag: UU,
          gtagCore: XU
        } = function(UU, XU, zU, cU, yU) {
          let QU = function() {
            for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
            window[cU].push(arguments)
          };
          return window[yU] && "function" === typeof window[yU] && (QU = window[yU]), window[yU] = PX(QU, UU, XU, zU), {
            gtagCore: QU,
            wrappedGtag: window[yU]
          }
        }(fX, iX, HX, VX, sX);
        vX = UU, MX = XU, nX = !0
      }
      fX[cU] = rX(UU, iX, HX, XU, MX, VX, zU);
      return new uX(UU)
    }

    function xX() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, cU.H)();
      UU = (0, QU.R)(UU);
      const XU = (0, cU.s)(UU, aX);
      return XU.isInitialized() ? XU.getImmediate() : JX(UU)
    }

    function JX(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const zU = (0, cU.s)(UU, aX);
      if (zU.isInitialized()) {
        const UU = zU.getImmediate();
        if ((0, QU.z)(XU, zU.getOptions())) return UU;
        throw GX.create("already-initialized")
      }
      return zU.initialize({
        options: XU
      })
    }
    async function jX() {
      if ((0, QU.Z)()) return !1;
      if (!(0, QU.m)()) return !1;
      if (!(0, QU.fb)()) return !1;
      try {
        return await (0, QU.tb)()
      } catch (UU) {
        return !1
      }
    }

    function KX(UU, XU, zU) {
      UU = (0, QU.R)(UU), async function(UU, XU, zU, cU) {
        if (cU && cU.global) return UU("set", {
          screen_name: zU
        }), Promise.resolve();
        UU("config", await XU, {
          update: !0,
          screen_name: zU
        })
      }(vX, fX[UU.app.options.appId], XU, zU).catch((UU => gX.error(UU)))
    }
    async function bX(UU) {
      return UU = (0, QU.R)(UU), async function(UU, XU) {
        const zU = await XU;
        return new Promise(((XU, cU) => {
          UU("get", zU, "client_id", (UU => {
            UU || cU(GX.create("no-client-id")), XU(UU)
          }))
        }))
      }(vX, fX[UU.app.options.appId])
    }

    function TX(UU, XU, zU) {
      UU = (0, QU.R)(UU), async function(UU, XU, zU, cU) {
        if (cU && cU.global) return UU("set", {
          user_id: zU
        }), Promise.resolve();
        UU("config", await XU, {
          update: !0,
          user_id: zU
        })
      }(vX, fX[UU.app.options.appId], XU, zU).catch((UU => gX.error(UU)))
    }

    function hX(UU, XU, zU) {
      UU = (0, QU.R)(UU), async function(UU, XU, zU, cU) {
        if (cU && cU.global) {
          const XU = {};
          for (const UU of Object.keys(zU)) XU[`user_properties.${UU}`] = zU[UU];
          return UU("set", XU), Promise.resolve()
        }
        UU("config", await XU, {
          update: !0,
          user_properties: zU
        })
      }(vX, fX[UU.app.options.appId], XU, zU).catch((UU => gX.error(UU)))
    }

    function Uz(UU, XU) {
      UU = (0, QU.R)(UU), async function(UU, XU) {
        const zU = await UU;
        window[`ga-disable-${zU}`] = !XU
      }(fX[UU.app.options.appId], XU).catch((UU => gX.error(UU)))
    }

    function Xz(UU) {
      vX ? vX("set", UU) : SX(UU)
    }

    function zz(UU, XU, zU, cU) {
      UU = (0, QU.R)(UU), async function(UU, XU, zU, cU, yU) {
        if (yU && yU.global) UU("event", zU, cU);
        else {
          const yU = await XU;
          UU("event", zU, Object.assign(Object.assign({}, cU), {
            send_to: yU
          }))
        }
      }(vX, fX[UU.app.options.appId], XU, zU, cU).catch((UU => gX.error(UU)))
    }

    function cz(UU) {
      vX ? vX("consent", "update", UU) : OX(UU)
    }
    const yz = "@firebase/analytics",
      Qz = "0.10.0";
    (0, cU.t)(new AU.f(aX, ((UU, XU) => {
      let {
        options: zU
      } = XU;
      return lX(UU.getProvider("app").getImmediate(), UU.getProvider("installations-internal").getImmediate(), zU)
    }), "PUBLIC")), (0, cU.t)(new AU.f("analytics-internal", (function(UU) {
      try {
        const XU = UU.getProvider(aX).getImmediate();
        return {
          logEvent: (UU, zU, cU) => zz(XU, UU, zU, cU)
        }
      } catch (XU) {
        throw GX.create("interop-component-reg-failed", {
          reason: XU
        })
      }
    }), "PRIVATE")), (0, cU.Q)(yz, Qz), (0, cU.Q)(yz, Qz, "esm2017")
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);