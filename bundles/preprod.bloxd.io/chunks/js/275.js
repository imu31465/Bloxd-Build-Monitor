/*! For license information please see 8104he.275.9acc3bd5.chunk.js.LICENSE.txt */
export const id = 275;
export const ids = [275];
export const modules = {
  40773: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      getAnalytics: () => YW,
      getGoogleAnalyticsClientId: () => KW,
      initializeAnalytics: () => NW,
      isSupported: () => ZW,
      logEvent: () => XX,
      setAnalyticsCollectionEnabled: () => QX,
      setConsent: () => wX,
      setCurrentScreen: () => OW,
      setDefaultEventParameters: () => WX,
      setUserId: () => mW,
      setUserProperties: () => MW,
      settings: () => nW
    });
    var wQ = XQ(40755),
      qQ = XQ(40770),
      TQ = XQ(40761),
      zQ = XQ(40758);
    let sQ, FQ;
    const PQ = new WeakMap,
      gQ = new WeakMap,
      JQ = new WeakMap,
      rQ = new WeakMap,
      IQ = new WeakMap;
    let jQ = {
      get(QQ, WQ, XQ) {
        if (QQ instanceof IDBTransaction) {
          if ("done" === WQ) return gQ.get(QQ);
          if ("objectStoreNames" === WQ) return QQ.objectStoreNames || JQ.get(QQ);
          if ("store" === WQ) return XQ.objectStoreNames[1] ? void 0 : XQ.objectStore(XQ.objectStoreNames[0])
        }
        return VQ(QQ[WQ])
      },
      set: (QQ, WQ, XQ) => (QQ[WQ] = XQ, !0),
      has: (QQ, WQ) => QQ instanceof IDBTransaction && ("done" === WQ || "store" === WQ) || WQ in QQ
    };

    function BQ(QQ) {
      return QQ !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (FQ || (FQ = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(QQ) ? function() {
        for (var WQ = arguments.length, XQ = new Array(WQ), wQ = 0; wQ < WQ; wQ++) XQ[wQ] = arguments[wQ];
        return QQ.apply(DQ(this), XQ), VQ(PQ.get(this))
      } : function() {
        for (var WQ = arguments.length, XQ = new Array(WQ), wQ = 0; wQ < WQ; wQ++) XQ[wQ] = arguments[wQ];
        return VQ(QQ.apply(DQ(this), XQ))
      } : function(WQ) {
        for (var XQ = arguments.length, wQ = new Array(XQ > 1 ? XQ - 1 : 0), qQ = 1; qQ < XQ; qQ++) wQ[qQ - 1] = arguments[qQ];
        const TQ = QQ.call(DQ(this), WQ, ...wQ);
        return JQ.set(TQ, WQ.sort ? WQ.sort() : [WQ]), VQ(TQ)
      }
    }

    function yQ(QQ) {
      return "function" === typeof QQ ? BQ(QQ) : (QQ instanceof IDBTransaction && function(QQ) {
        if (gQ.has(QQ)) return;
        const WQ = new Promise(((WQ, XQ) => {
          const wQ = () => {
              QQ.removeEventListener("complete", qQ), QQ.removeEventListener("error", TQ), QQ.removeEventListener("abort", TQ)
            },
            qQ = () => {
              WQ(), wQ()
            },
            TQ = () => {
              XQ(QQ.error || new DOMException("AbortError", "AbortError")), wQ()
            };
          QQ.addEventListener("complete", qQ), QQ.addEventListener("error", TQ), QQ.addEventListener("abort", TQ)
        }));
        gQ.set(QQ, WQ)
      }(QQ), WQ = QQ, (sQ || (sQ = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((QQ => WQ instanceof QQ)) ? new Proxy(QQ, jQ) : QQ);
      var WQ
    }

    function VQ(QQ) {
      if (QQ instanceof IDBRequest) return function(QQ) {
        const WQ = new Promise(((WQ, XQ) => {
          const wQ = () => {
              QQ.removeEventListener("success", qQ), QQ.removeEventListener("error", TQ)
            },
            qQ = () => {
              WQ(VQ(QQ.result)), wQ()
            },
            TQ = () => {
              XQ(QQ.error), wQ()
            };
          QQ.addEventListener("success", qQ), QQ.addEventListener("error", TQ)
        }));
        return WQ.then((WQ => {
          WQ instanceof IDBCursor && PQ.set(WQ, QQ)
        })).catch((() => {})), IQ.set(WQ, QQ), WQ
      }(QQ);
      if (rQ.has(QQ)) return rQ.get(QQ);
      const WQ = yQ(QQ);
      return WQ !== QQ && (rQ.set(QQ, WQ), IQ.set(WQ, QQ)), WQ
    }
    const DQ = QQ => IQ.get(QQ);
    const pQ = ["get", "getKey", "getAll", "getAllKeys", "count"],
      GQ = ["put", "add", "delete", "clear"],
      UQ = new Map;

    function bQ(QQ, WQ) {
      if (!(QQ instanceof IDBDatabase) || WQ in QQ || "string" !== typeof WQ) return;
      if (UQ.get(WQ)) return UQ.get(WQ);
      const XQ = WQ.replace(/FromIndex$/, ""),
        wQ = WQ !== XQ,
        qQ = GQ.includes(XQ);
      if (!(XQ in (wQ ? IDBIndex : IDBObjectStore).prototype) || !qQ && !pQ.includes(XQ)) return;
      const TQ = async function(QQ) {
        const WQ = this.transaction(QQ, qQ ? "readwrite" : "readonly");
        let TQ = WQ.store;
        for (var zQ = arguments.length, sQ = new Array(zQ > 1 ? zQ - 1 : 0), FQ = 1; FQ < zQ; FQ++) sQ[FQ - 1] = arguments[FQ];
        return wQ && (TQ = TQ.index(sQ.shift())), (await Promise.all([TQ[XQ](...sQ), qQ && WQ.done]))[0]
      };
      return UQ.set(WQ, TQ), TQ
    }
    jQ = (QQ => ({
      ...QQ,
      get: (WQ, XQ, wQ) => bQ(WQ, XQ) || QQ.get(WQ, XQ, wQ),
      has: (WQ, XQ) => !!bQ(WQ, XQ) || QQ.has(WQ, XQ)
    }))(jQ);
    const vQ = "@firebase/installations",
      dQ = "0.6.4",
      HQ = 1e4,
      aQ = `w:${dQ}`,
      lQ = "FIS_v2",
      hQ = 36e5,
      iQ = {
        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
        "not-registered": "Firebase Installation is not registered.",
        "installation-not-found": "Firebase Installation not found.",
        "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        "app-offline": "Could not process request. Application offline.",
        "delete-pending-registration": "Can't delete installation while there is a pending registration request."
      },
      cQ = new TQ.h("installations", "Installations", iQ);

    function AQ(QQ) {
      return QQ instanceof TQ.k && QQ.code.includes("request-failed")
    }

    function RQ(QQ) {
      let {
        projectId: WQ
      } = QQ;
      return `https://firebaseinstallations.googleapis.com/v1/projects/${WQ}/installations`
    }

    function EQ(QQ) {
      return {
        token: QQ.token,
        requestStatus: 2,
        expiresIn: (WQ = QQ.expiresIn, Number(WQ.replace("s", "000"))),
        creationTime: Date.now()
      };
      var WQ
    }
    async function CQ(QQ, WQ) {
      const XQ = (await WQ.json()).error;
      return cQ.create("request-failed", {
        requestName: QQ,
        serverCode: XQ.code,
        serverMessage: XQ.message,
        serverStatus: XQ.status
      })
    }

    function uQ(QQ) {
      let {
        apiKey: WQ
      } = QQ;
      return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": WQ
      })
    }

    function LQ(QQ, WQ) {
      let {
        refreshToken: XQ
      } = WQ;
      const wQ = uQ(QQ);
      return wQ.append("Authorization", function(QQ) {
        return `${lQ} ${QQ}`
      }(XQ)), wQ
    }
    async function kQ(QQ) {
      const WQ = await QQ();
      return WQ.status >= 500 && WQ.status < 600 ? QQ() : WQ
    }

    function fQ(QQ) {
      return new Promise((WQ => {
        setTimeout(WQ, QQ)
      }))
    }
    const SQ = /^[cdef][\w-]{21}$/;

    function tQ() {
      try {
        const QQ = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(QQ), QQ[0] = 112 + QQ[0] % 16;
        const WQ = function(QQ) {
          const WQ = (XQ = QQ, btoa(String.fromCharCode(...XQ)).replace(/\+/g, "-").replace(/\//g, "_"));
          var XQ;
          return WQ.substr(0, 22)
        }(QQ);
        return SQ.test(WQ) ? WQ : ""
      } catch (QQ) {
        return ""
      }
    }

    function oQ(QQ) {
      return `${QQ.appName}!${QQ.appId}`
    }
    const eQ = new Map;

    function nQ(QQ, WQ) {
      const XQ = oQ(QQ);
      xQ(XQ, WQ),
        function(QQ, WQ) {
          const XQ = NQ();
          XQ && XQ.postMessage({
            key: QQ,
            fid: WQ
          });
          ZQ()
        }(XQ, WQ)
    }

    function xQ(QQ, WQ) {
      const XQ = eQ.get(QQ);
      if (XQ)
        for (const wQ of XQ) wQ(WQ)
    }
    let YQ = null;

    function NQ() {
      return !YQ && "BroadcastChannel" in self && (YQ = new BroadcastChannel("[Firebase] FID Change"), YQ.onmessage = QQ => {
        xQ(QQ.data.key, QQ.data.fid)
      }), YQ
    }

    function ZQ() {
      0 === eQ.size && YQ && (YQ.close(), YQ = null)
    }
    const OQ = "firebase-installations-store";
    let KQ = null;

    function mQ() {
      return KQ || (KQ = function(QQ, WQ) {
        let {
          blocked: XQ,
          upgrade: wQ,
          blocking: qQ,
          terminated: TQ
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const zQ = indexedDB.open(QQ, WQ),
          sQ = VQ(zQ);
        return wQ && zQ.addEventListener("upgradeneeded", (QQ => {
          wQ(VQ(zQ.result), QQ.oldVersion, QQ.newVersion, VQ(zQ.transaction))
        })), XQ && zQ.addEventListener("blocked", (() => XQ())), sQ.then((QQ => {
          TQ && QQ.addEventListener("close", (() => TQ())), qQ && QQ.addEventListener("versionchange", (() => qQ()))
        })).catch((() => {})), sQ
      }("firebase-installations-database", 1, {
        upgrade: (QQ, WQ) => {
          if (0 === WQ) QQ.createObjectStore(OQ)
        }
      })), KQ
    }
    async function MQ(QQ, WQ) {
      const XQ = oQ(QQ),
        wQ = (await mQ()).transaction(OQ, "readwrite"),
        qQ = wQ.objectStore(OQ),
        TQ = await qQ.get(XQ);
      return await qQ.put(WQ, XQ), await wQ.done, TQ && TQ.fid === WQ.fid || nQ(QQ, WQ.fid), WQ
    }
    async function QW(QQ) {
      const WQ = oQ(QQ),
        XQ = (await mQ()).transaction(OQ, "readwrite");
      await XQ.objectStore(OQ).delete(WQ), await XQ.done
    }
    async function WW(QQ, WQ) {
      const XQ = oQ(QQ),
        wQ = (await mQ()).transaction(OQ, "readwrite"),
        qQ = wQ.objectStore(OQ),
        TQ = await qQ.get(XQ),
        zQ = WQ(TQ);
      return void 0 === zQ ? await qQ.delete(XQ) : await qQ.put(zQ, XQ), await wQ.done, !zQ || TQ && TQ.fid === zQ.fid || nQ(QQ, zQ.fid), zQ
    }
    async function XW(QQ) {
      let WQ;
      const XQ = await WW(QQ.appConfig, (XQ => {
        const wQ = function(QQ) {
            const WQ = QQ || {
              fid: tQ(),
              registrationStatus: 0
            };
            return TW(WQ)
          }(XQ),
          qQ = function(QQ, WQ) {
            if (0 === WQ.registrationStatus) {
              if (!navigator.onLine) {
                return {
                  installationEntry: WQ,
                  registrationPromise: Promise.reject(cQ.create("app-offline"))
                }
              }
              const XQ = {
                  fid: WQ.fid,
                  registrationStatus: 1,
                  registrationTime: Date.now()
                },
                wQ = async function(QQ, WQ) {
                  try {
                    const XQ = await async function(QQ, WQ) {
                      let {
                        appConfig: XQ,
                        heartbeatServiceProvider: wQ
                      } = QQ, {
                        fid: qQ
                      } = WQ;
                      const TQ = RQ(XQ),
                        zQ = uQ(XQ),
                        sQ = wQ.getImmediate({
                          optional: !0
                        });
                      if (sQ) {
                        const QQ = await sQ.getHeartbeatsHeader();
                        QQ && zQ.append("x-firebase-client", QQ)
                      }
                      const FQ = {
                          fid: qQ,
                          authVersion: lQ,
                          appId: XQ.appId,
                          sdkVersion: aQ
                        },
                        PQ = {
                          method: "POST",
                          headers: zQ,
                          body: JSON.stringify(FQ)
                        },
                        gQ = await kQ((() => fetch(TQ, PQ)));
                      if (gQ.ok) {
                        const QQ = await gQ.json();
                        return {
                          fid: QQ.fid || qQ,
                          registrationStatus: 2,
                          refreshToken: QQ.refreshToken,
                          authToken: EQ(QQ.authToken)
                        }
                      }
                      throw await CQ("Create Installation", gQ)
                    }(QQ, WQ);
                    return MQ(QQ.appConfig, XQ)
                  } catch (XQ) {
                    throw AQ(XQ) && 409 === XQ.customData.serverCode ? await QW(QQ.appConfig) : await MQ(QQ.appConfig, {
                      fid: WQ.fid,
                      registrationStatus: 0
                    }), XQ
                  }
                }(QQ, XQ);
              return {
                installationEntry: XQ,
                registrationPromise: wQ
              }
            }
            return 1 === WQ.registrationStatus ? {
              installationEntry: WQ,
              registrationPromise: wW(QQ)
            } : {
              installationEntry: WQ
            }
          }(QQ, wQ);
        return WQ = qQ.registrationPromise, qQ.installationEntry
      }));
      return "" === XQ.fid ? {
        installationEntry: await WQ
      } : {
        installationEntry: XQ,
        registrationPromise: WQ
      }
    }
    async function wW(QQ) {
      let WQ = await qW(QQ.appConfig);
      for (; 1 === WQ.registrationStatus;) await fQ(100), WQ = await qW(QQ.appConfig);
      if (0 === WQ.registrationStatus) {
        const {
          installationEntry: WQ,
          registrationPromise: XQ
        } = await XW(QQ);
        return XQ || WQ
      }
      return WQ
    }

    function qW(QQ) {
      return WW(QQ, (QQ => {
        if (!QQ) throw cQ.create("installation-not-found");
        return TW(QQ)
      }))
    }

    function TW(QQ) {
      return 1 === (WQ = QQ).registrationStatus && WQ.registrationTime + HQ < Date.now() ? {
        fid: QQ.fid,
        registrationStatus: 0
      } : QQ;
      var WQ
    }
    async function zW(QQ, WQ) {
      let {
        appConfig: XQ,
        heartbeatServiceProvider: wQ
      } = QQ;
      const qQ = function(QQ, WQ) {
          let {
            fid: XQ
          } = WQ;
          return `${RQ(QQ)}/${XQ}/authTokens:generate`
        }(XQ, WQ),
        TQ = LQ(XQ, WQ),
        zQ = wQ.getImmediate({
          optional: !0
        });
      if (zQ) {
        const QQ = await zQ.getHeartbeatsHeader();
        QQ && TQ.append("x-firebase-client", QQ)
      }
      const sQ = {
          installation: {
            sdkVersion: aQ,
            appId: XQ.appId
          }
        },
        FQ = {
          method: "POST",
          headers: TQ,
          body: JSON.stringify(sQ)
        },
        PQ = await kQ((() => fetch(qQ, FQ)));
      if (PQ.ok) {
        return EQ(await PQ.json())
      }
      throw await CQ("Generate Auth Token", PQ)
    }
    async function sW(QQ) {
      let WQ, XQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const wQ = await WW(QQ.appConfig, (wQ => {
        if (!PW(wQ)) throw cQ.create("not-registered");
        const qQ = wQ.authToken;
        if (!XQ && function(QQ) {
            return 2 === QQ.requestStatus && ! function(QQ) {
              const WQ = Date.now();
              return WQ < QQ.creationTime || QQ.creationTime + QQ.expiresIn < WQ + hQ
            }(QQ)
          }(qQ)) return wQ;
        if (1 === qQ.requestStatus) return WQ = async function(QQ, WQ) {
          let XQ = await FW(QQ.appConfig);
          for (; 1 === XQ.authToken.requestStatus;) await fQ(100), XQ = await FW(QQ.appConfig);
          const wQ = XQ.authToken;
          return 0 === wQ.requestStatus ? sW(QQ, WQ) : wQ
        }(QQ, XQ), wQ;
        {
          if (!navigator.onLine) throw cQ.create("app-offline");
          const XQ = function(QQ) {
            const WQ = {
              requestStatus: 1,
              requestTime: Date.now()
            };
            return Object.assign(Object.assign({}, QQ), {
              authToken: WQ
            })
          }(wQ);
          return WQ = async function(QQ, WQ) {
            try {
              const XQ = await zW(QQ, WQ),
                wQ = Object.assign(Object.assign({}, WQ), {
                  authToken: XQ
                });
              return await MQ(QQ.appConfig, wQ), XQ
            } catch (XQ) {
              if (!AQ(XQ) || 401 !== XQ.customData.serverCode && 404 !== XQ.customData.serverCode) {
                const XQ = Object.assign(Object.assign({}, WQ), {
                  authToken: {
                    requestStatus: 0
                  }
                });
                await MQ(QQ.appConfig, XQ)
              } else await QW(QQ.appConfig);
              throw XQ
            }
          }(QQ, XQ), XQ
        }
      }));
      return WQ ? await WQ : wQ.authToken
    }

    function FW(QQ) {
      return WW(QQ, (QQ => {
        if (!PW(QQ)) throw cQ.create("not-registered");
        const WQ = QQ.authToken;
        return 1 === (XQ = WQ).requestStatus && XQ.requestTime + HQ < Date.now() ? Object.assign(Object.assign({}, QQ), {
          authToken: {
            requestStatus: 0
          }
        }) : QQ;
        var XQ
      }))
    }

    function PW(QQ) {
      return void 0 !== QQ && 2 === QQ.registrationStatus
    }
    async function gW(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const XQ = QQ;
      await async function(QQ) {
        const {
          registrationPromise: WQ
        } = await XW(QQ);
        WQ && await WQ
      }(XQ);
      return (await sW(XQ, WQ)).token
    }

    function JW(QQ) {
      return cQ.create("missing-app-config-values", {
        valueName: QQ
      })
    }
    const rW = "installations",
      IW = QQ => {
        const WQ = QQ.getProvider("app").getImmediate(),
          XQ = function(QQ) {
            if (!QQ || !QQ.options) throw JW("App Configuration");
            if (!QQ.name) throw JW("App Name");
            const WQ = ["projectId", "apiKey", "appId"];
            for (const XQ of WQ)
              if (!QQ.options[XQ]) throw JW(XQ);
            return {
              appName: QQ.name,
              projectId: QQ.options.projectId,
              apiKey: QQ.options.apiKey,
              appId: QQ.options.appId
            }
          }(WQ);
        return {
          app: WQ,
          appConfig: XQ,
          heartbeatServiceProvider: (0, wQ.B)(WQ, "heartbeat"),
          _delete: () => Promise.resolve()
        }
      },
      jW = QQ => {
        const WQ = QQ.getProvider("app").getImmediate(),
          XQ = (0, wQ.B)(WQ, rW).getImmediate();
        return {
          getId: () => async function(QQ) {
            const WQ = QQ,
              {
                installationEntry: XQ,
                registrationPromise: wQ
              } = await XW(WQ);
            return wQ ? wQ.catch(console.error) : sW(WQ).catch(console.error), XQ.fid
          }(XQ),
          getToken: QQ => gW(XQ, QQ)
        }
      };
    (0, wQ.E)(new zQ.e(rW, IW, "PUBLIC")), (0, wQ.E)(new zQ.e("installations-internal", jW, "PRIVATE")), (0, wQ._)(vQ, dQ), (0, wQ._)(vQ, dQ, "esm2017");
    const BW = "analytics",
      yW = "https://www.googletagmanager.com/gtag/js",
      VW = new qQ.e("@firebase/analytics"),
      DW = {
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
      pW = new TQ.h("analytics", "Analytics", DW);

    function GW(QQ) {
      if (!QQ.startsWith(yW)) {
        const WQ = pW.create("invalid-gtag-resource", {
          gtagURL: QQ
        });
        return VW.warn(WQ.message), ""
      }
      return QQ
    }

    function UW(QQ) {
      return Promise.all(QQ.map((QQ => QQ.catch((QQ => QQ)))))
    }

    function bW(QQ, WQ) {
      const XQ = function(QQ, WQ) {
          let XQ;
          return window.trustedTypes && (XQ = window.trustedTypes.createPolicy(QQ, WQ)), XQ
        }("firebase-js-sdk-policy", {
          createScriptURL: GW
        }),
        wQ = document.createElement("script"),
        qQ = `${yW}?l=${QQ}&id=${WQ}`;
      wQ.src = XQ ? null === XQ || void 0 === XQ ? void 0 : XQ.createScriptURL(qQ) : qQ, wQ.async = !0, document.head.appendChild(wQ)
    }

    function vW(QQ, WQ, XQ, wQ) {
      return async function(qQ) {
        try {
          for (var TQ = arguments.length, zQ = new Array(TQ > 1 ? TQ - 1 : 0), sQ = 1; sQ < TQ; sQ++) zQ[sQ - 1] = arguments[sQ];
          if ("event" === qQ) {
            const [wQ, qQ] = zQ;
            await async function(QQ, WQ, XQ, wQ, qQ) {
              try {
                let TQ = [];
                if (qQ && qQ.send_to) {
                  let QQ = qQ.send_to;
                  Array.isArray(QQ) || (QQ = [QQ]);
                  const wQ = await UW(XQ);
                  for (const XQ of QQ) {
                    const QQ = wQ.find((QQ => QQ.measurementId === XQ)),
                      qQ = QQ && WQ[QQ.appId];
                    if (!qQ) {
                      TQ = [];
                      break
                    }
                    TQ.push(qQ)
                  }
                }
                0 === TQ.length && (TQ = Object.values(WQ)), await Promise.all(TQ), QQ("event", wQ, qQ || {})
              } catch (TQ) {
                VW.error(TQ)
              }
            }(QQ, WQ, XQ, wQ, qQ)
          } else if ("config" === qQ) {
            const [qQ, TQ] = zQ;
            await async function(QQ, WQ, XQ, wQ, qQ, TQ) {
              const zQ = wQ[qQ];
              try {
                if (zQ) await WQ[zQ];
                else {
                  const QQ = (await UW(XQ)).find((QQ => QQ.measurementId === qQ));
                  QQ && await WQ[QQ.appId]
                }
              } catch (sQ) {
                VW.error(sQ)
              }
              QQ("config", qQ, TQ)
            }(QQ, WQ, XQ, wQ, qQ, TQ)
          } else if ("consent" === qQ) {
            const [WQ] = zQ;
            QQ("consent", "update", WQ)
          } else if ("get" === qQ) {
            const [WQ, XQ, wQ] = zQ;
            QQ("get", WQ, XQ, wQ)
          } else if ("set" === qQ) {
            const [WQ] = zQ;
            QQ("set", WQ)
          } else QQ(qQ, ...zQ)
        } catch (FQ) {
          VW.error(FQ)
        }
      }
    }
    const dW = new class {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
        this.throttleMetadata = QQ, this.intervalMillis = WQ
      }
      getThrottleMetadata(QQ) {
        return this.throttleMetadata[QQ]
      }
      setThrottleMetadata(QQ, WQ) {
        this.throttleMetadata[QQ] = WQ
      }
      deleteThrottleMetadata(QQ) {
        delete this.throttleMetadata[QQ]
      }
    };

    function HW(QQ) {
      return new Headers({
        Accept: "application/json",
        "x-goog-api-key": QQ
      })
    }
    async function aW(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dW,
        XQ = arguments.length > 2 ? arguments[2] : void 0;
      const {
        appId: wQ,
        apiKey: qQ,
        measurementId: TQ
      } = QQ.options;
      if (!wQ) throw pW.create("no-app-id");
      if (!qQ) {
        if (TQ) return {
          measurementId: TQ,
          appId: wQ
        };
        throw pW.create("no-api-key")
      }
      const zQ = WQ.getThrottleMetadata(wQ) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        },
        sQ = new hW;
      return setTimeout((async () => {
        sQ.abort()
      }), void 0 !== XQ ? XQ : 6e4), lW({
        appId: wQ,
        apiKey: qQ,
        measurementId: TQ
      }, zQ, sQ, WQ)
    }
    async function lW(QQ, WQ, XQ) {
      let {
        throttleEndTimeMillis: wQ,
        backoffCount: qQ
      } = WQ, zQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : dW;
      var sQ;
      const {
        appId: FQ,
        measurementId: PQ
      } = QQ;
      try {
        await
        function(QQ, WQ) {
          return new Promise(((XQ, wQ) => {
            const qQ = Math.max(WQ - Date.now(), 0),
              TQ = setTimeout(XQ, qQ);
            QQ.addEventListener((() => {
              clearTimeout(TQ), wQ(pW.create("fetch-throttle", {
                throttleEndTimeMillis: WQ
              }))
            }))
          }))
        }(XQ, wQ)
      } catch (gQ) {
        if (PQ) return VW.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${PQ} provided in the "measurementId" field in the local Firebase config. [${null===gQ||void 0===gQ?void 0:gQ.message}]`), {
          appId: FQ,
          measurementId: PQ
        };
        throw gQ
      }
      try {
        const WQ = await async function(QQ) {
          var WQ;
          const {
            appId: XQ,
            apiKey: wQ
          } = QQ, qQ = {
            method: "GET",
            headers: HW(wQ)
          }, TQ = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", XQ), zQ = await fetch(TQ, qQ);
          if (200 !== zQ.status && 304 !== zQ.status) {
            let QQ = "";
            try {
              const XQ = await zQ.json();
              (null === (WQ = XQ.error) || void 0 === WQ ? void 0 : WQ.message) && (QQ = XQ.error.message)
            } catch (sQ) {}
            throw pW.create("config-fetch-failed", {
              httpStatus: zQ.status,
              responseMessage: QQ
            })
          }
          return zQ.json()
        }(QQ);
        return zQ.deleteThrottleMetadata(FQ), WQ
      } catch (gQ) {
        const WQ = gQ;
        if (! function(QQ) {
            if (!(QQ instanceof TQ.k) || !QQ.customData) return !1;
            const WQ = Number(QQ.customData.httpStatus);
            return 429 === WQ || 500 === WQ || 503 === WQ || 504 === WQ
          }(WQ)) {
          if (zQ.deleteThrottleMetadata(FQ), PQ) return VW.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${PQ} provided in the "measurementId" field in the local Firebase config. [${null===WQ||void 0===WQ?void 0:WQ.message}]`), {
            appId: FQ,
            measurementId: PQ
          };
          throw gQ
        }
        const wQ = 503 === Number(null === (sQ = null === WQ || void 0 === WQ ? void 0 : WQ.customData) || void 0 === sQ ? void 0 : sQ.httpStatus) ? (0, TQ.v)(qQ, zQ.intervalMillis, 30) : (0, TQ.v)(qQ, zQ.intervalMillis),
          JQ = {
            throttleEndTimeMillis: Date.now() + wQ,
            backoffCount: qQ + 1
          };
        return zQ.setThrottleMetadata(FQ, JQ), VW.debug(`Calling attemptFetch again in ${wQ} millis`), lW(QQ, JQ, XQ, zQ)
      }
    }
    class hW {
      constructor() {
        this.listeners = []
      }
      addEventListener(QQ) {
        this.listeners.push(QQ)
      }
      abort() {
        this.listeners.forEach((QQ => QQ()))
      }
    }
    let iW, cW;

    function AW(QQ) {
      cW = QQ
    }

    function RW(QQ) {
      iW = QQ
    }
    async function EW(QQ, WQ, XQ, wQ, qQ, zQ, sQ) {
      var FQ;
      const PQ = aW(QQ);
      PQ.then((WQ => {
        XQ[WQ.measurementId] = WQ.appId, QQ.options.measurementId && WQ.measurementId !== QQ.options.measurementId && VW.warn(`The measurement ID in the local Firebase config (${QQ.options.measurementId}) does not match the measurement ID fetched from the server (${WQ.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
      })).catch((QQ => VW.error(QQ))), WQ.push(PQ);
      const gQ = async function() {
        if (!(0, TQ.Z)()) return VW.warn(pW.create("indexeddb-unavailable", {
          errorInfo: "IndexedDB is not available in this environment."
        }).message), !1;
        try {
          await (0, TQ.fb)()
        } catch (QQ) {
          return VW.warn(pW.create("indexeddb-unavailable", {
            errorInfo: null === QQ || void 0 === QQ ? void 0 : QQ.toString()
          }).message), !1
        }
        return !0
      }().then((QQ => QQ ? wQ.getId() : void 0)), [JQ, rQ] = await Promise.all([PQ, gQ]);
      (function(QQ) {
        const WQ = window.document.getElementsByTagName("script");
        for (const XQ of Object.values(WQ))
          if (XQ.src && XQ.src.includes(yW) && XQ.src.includes(QQ)) return XQ;
        return null
      })(zQ) || bW(zQ, JQ.measurementId), cW && (qQ("consent", "default", cW), AW(void 0)), qQ("js", new Date);
      const IQ = null !== (FQ = null === sQ || void 0 === sQ ? void 0 : sQ.config) && void 0 !== FQ ? FQ : {};
      return IQ.origin = "firebase", IQ.update = !0, null != rQ && (IQ.firebase_id = rQ), qQ("config", JQ.measurementId, IQ), iW && (qQ("set", iW), RW(void 0)), JQ.measurementId
    }
    class CW {
      constructor(QQ) {
        this.app = QQ
      }
      _delete() {
        return delete uW[this.app.options.appId], Promise.resolve()
      }
    }
    let uW = {},
      LW = [];
    const kW = {};
    let fW, SW, tW = "dataLayer",
      oW = "gtag",
      eW = !1;

    function nW(QQ) {
      if (eW) throw pW.create("already-initialized");
      QQ.dataLayerName && (tW = QQ.dataLayerName), QQ.gtagName && (oW = QQ.gtagName)
    }

    function xW(QQ, WQ, XQ) {
      ! function() {
        const QQ = [];
        if ((0, TQ.R)() && QQ.push("This is a browser extension environment."), (0, TQ.n)() || QQ.push("Cookies are not available."), QQ.length > 0) {
          const WQ = QQ.map(((QQ, WQ) => `(${WQ+1}) ${QQ}`)).join(" "),
            XQ = pW.create("invalid-analytics-context", {
              errorInfo: WQ
            });
          VW.warn(XQ.message)
        }
      }();
      const wQ = QQ.options.appId;
      if (!wQ) throw pW.create("no-app-id");
      if (!QQ.options.apiKey) {
        if (!QQ.options.measurementId) throw pW.create("no-api-key");
        VW.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${QQ.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
      }
      if (null != uW[wQ]) throw pW.create("already-exists", {
        id: wQ
      });
      if (!eW) {
        ! function(QQ) {
          let WQ = [];
          Array.isArray(window[QQ]) ? WQ = window[QQ] : window[QQ] = WQ
        }(tW);
        const {
          wrappedGtag: QQ,
          gtagCore: WQ
        } = function(QQ, WQ, XQ, wQ, qQ) {
          let TQ = function() {
            for (var QQ = arguments.length, WQ = new Array(QQ), XQ = 0; XQ < QQ; XQ++) WQ[XQ] = arguments[XQ];
            window[wQ].push(arguments)
          };
          return window[qQ] && "function" === typeof window[qQ] && (TQ = window[qQ]), window[qQ] = vW(TQ, QQ, WQ, XQ), {
            gtagCore: TQ,
            wrappedGtag: window[qQ]
          }
        }(uW, LW, kW, tW, oW);
        SW = QQ, fW = WQ, eW = !0
      }
      uW[wQ] = EW(QQ, LW, kW, WQ, fW, tW, XQ);
      return new CW(QQ)
    }

    function YW() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, wQ.O)();
      QQ = (0, TQ.L)(QQ);
      const WQ = (0, wQ.B)(QQ, BW);
      return WQ.isInitialized() ? WQ.getImmediate() : NW(QQ)
    }

    function NW(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const XQ = (0, wQ.B)(QQ, BW);
      if (XQ.isInitialized()) {
        const QQ = XQ.getImmediate();
        if ((0, TQ.y)(WQ, XQ.getOptions())) return QQ;
        throw pW.create("already-initialized")
      }
      return XQ.initialize({
        options: WQ
      })
    }
    async function ZW() {
      if ((0, TQ.R)()) return !1;
      if (!(0, TQ.n)()) return !1;
      if (!(0, TQ.Z)()) return !1;
      try {
        return await (0, TQ.fb)()
      } catch (QQ) {
        return !1
      }
    }

    function OW(QQ, WQ, XQ) {
      QQ = (0, TQ.L)(QQ), async function(QQ, WQ, XQ, wQ) {
        if (wQ && wQ.global) return QQ("set", {
          screen_name: XQ
        }), Promise.resolve();
        QQ("config", await WQ, {
          update: !0,
          screen_name: XQ
        })
      }(SW, uW[QQ.app.options.appId], WQ, XQ).catch((QQ => VW.error(QQ)))
    }
    async function KW(QQ) {
      return QQ = (0, TQ.L)(QQ), async function(QQ, WQ) {
        const XQ = await WQ;
        return new Promise(((WQ, wQ) => {
          QQ("get", XQ, "client_id", (QQ => {
            QQ || wQ(pW.create("no-client-id")), WQ(QQ)
          }))
        }))
      }(SW, uW[QQ.app.options.appId])
    }

    function mW(QQ, WQ, XQ) {
      QQ = (0, TQ.L)(QQ), async function(QQ, WQ, XQ, wQ) {
        if (wQ && wQ.global) return QQ("set", {
          user_id: XQ
        }), Promise.resolve();
        QQ("config", await WQ, {
          update: !0,
          user_id: XQ
        })
      }(SW, uW[QQ.app.options.appId], WQ, XQ).catch((QQ => VW.error(QQ)))
    }

    function MW(QQ, WQ, XQ) {
      QQ = (0, TQ.L)(QQ), async function(QQ, WQ, XQ, wQ) {
        if (wQ && wQ.global) {
          const WQ = {};
          for (const QQ of Object.keys(XQ)) WQ[`user_properties.${QQ}`] = XQ[QQ];
          return QQ("set", WQ), Promise.resolve()
        }
        QQ("config", await WQ, {
          update: !0,
          user_properties: XQ
        })
      }(SW, uW[QQ.app.options.appId], WQ, XQ).catch((QQ => VW.error(QQ)))
    }

    function QX(QQ, WQ) {
      QQ = (0, TQ.L)(QQ), async function(QQ, WQ) {
        const XQ = await QQ;
        window[`ga-disable-${XQ}`] = !WQ
      }(uW[QQ.app.options.appId], WQ).catch((QQ => VW.error(QQ)))
    }

    function WX(QQ) {
      SW ? SW("set", QQ) : RW(QQ)
    }

    function XX(QQ, WQ, XQ, wQ) {
      QQ = (0, TQ.L)(QQ), async function(QQ, WQ, XQ, wQ, qQ) {
        if (qQ && qQ.global) QQ("event", XQ, wQ);
        else {
          const qQ = await WQ;
          QQ("event", XQ, Object.assign(Object.assign({}, wQ), {
            send_to: qQ
          }))
        }
      }(SW, uW[QQ.app.options.appId], WQ, XQ, wQ).catch((QQ => VW.error(QQ)))
    }

    function wX(QQ) {
      SW ? SW("consent", "update", QQ) : AW(QQ)
    }
    const qX = "@firebase/analytics",
      TX = "0.10.0";
    (0, wQ.E)(new zQ.e(BW, ((QQ, WQ) => {
      let {
        options: XQ
      } = WQ;
      return xW(QQ.getProvider("app").getImmediate(), QQ.getProvider("installations-internal").getImmediate(), XQ)
    }), "PUBLIC")), (0, wQ.E)(new zQ.e("analytics-internal", (function(QQ) {
      try {
        const WQ = QQ.getProvider(BW).getImmediate();
        return {
          logEvent: (QQ, XQ, wQ) => XX(WQ, QQ, XQ, wQ)
        }
      } catch (WQ) {
        throw pW.create("interop-component-reg-failed", {
          reason: WQ
        })
      }
    }), "PRIVATE")), (0, wQ._)(qX, TX), (0, wQ._)(qX, TX, "esm2017")
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);