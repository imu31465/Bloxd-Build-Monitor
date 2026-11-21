/*! For license information please see bqoxjr.259.6d904199.chunk.js.LICENSE.txt */
export const id = 259;
export const ids = [259];
export const modules = {
  39963: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      getAnalytics: () => nF,
      getGoogleAnalyticsClientId: () => yF,
      initializeAnalytics: () => gF,
      isSupported: () => PF,
      logEvent: () => ww,
      setAnalyticsCollectionEnabled: () => Qw,
      setConsent: () => Lw,
      setCurrentScreen: () => ZF,
      setDefaultEventParameters: () => Fw,
      setUserId: () => BF,
      setUserProperties: () => dF,
      settings: () => JF
    });
    var LQ = wQ(39933),
      qQ = wQ(39956),
      oQ = wQ(39949),
      DQ = wQ(39942);
    let kQ, vQ;
    const mQ = new WeakMap,
      uQ = new WeakMap,
      HQ = new WeakMap,
      bQ = new WeakMap,
      YQ = new WeakMap;
    let xQ = {
      get(QQ, FQ, wQ) {
        if (QQ instanceof IDBTransaction) {
          if ("done" === FQ) return uQ.get(QQ);
          if ("objectStoreNames" === FQ) return QQ.objectStoreNames || HQ.get(QQ);
          if ("store" === FQ) return wQ.objectStoreNames[1] ? void 0 : wQ.objectStore(wQ.objectStoreNames[0])
        }
        return eQ(QQ[FQ])
      },
      set: (QQ, FQ, wQ) => (QQ[FQ] = wQ, !0),
      has: (QQ, FQ) => QQ instanceof IDBTransaction && ("done" === FQ || "store" === FQ) || FQ in QQ
    };

    function AQ(QQ) {
      return QQ !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (vQ || (vQ = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(QQ) ? function() {
        for (var FQ = arguments.length, wQ = new Array(FQ), LQ = 0; LQ < FQ; LQ++) wQ[LQ] = arguments[LQ];
        return QQ.apply(MQ(this), wQ), eQ(mQ.get(this))
      } : function() {
        for (var FQ = arguments.length, wQ = new Array(FQ), LQ = 0; LQ < FQ; LQ++) wQ[LQ] = arguments[LQ];
        return eQ(QQ.apply(MQ(this), wQ))
      } : function(FQ) {
        for (var wQ = arguments.length, LQ = new Array(wQ > 1 ? wQ - 1 : 0), qQ = 1; qQ < wQ; qQ++) LQ[qQ - 1] = arguments[qQ];
        const oQ = QQ.call(MQ(this), FQ, ...LQ);
        return HQ.set(oQ, FQ.sort ? FQ.sort() : [FQ]), eQ(oQ)
      }
    }

    function tQ(QQ) {
      return "function" === typeof QQ ? AQ(QQ) : (QQ instanceof IDBTransaction && function(QQ) {
        if (uQ.has(QQ)) return;
        const FQ = new Promise(((FQ, wQ) => {
          const LQ = () => {
              QQ.removeEventListener("complete", qQ), QQ.removeEventListener("error", oQ), QQ.removeEventListener("abort", oQ)
            },
            qQ = () => {
              FQ(), LQ()
            },
            oQ = () => {
              wQ(QQ.error || new DOMException("AbortError", "AbortError")), LQ()
            };
          QQ.addEventListener("complete", qQ), QQ.addEventListener("error", oQ), QQ.addEventListener("abort", oQ)
        }));
        uQ.set(QQ, FQ)
      }(QQ), FQ = QQ, (kQ || (kQ = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((QQ => FQ instanceof QQ)) ? new Proxy(QQ, xQ) : QQ);
      var FQ
    }

    function eQ(QQ) {
      if (QQ instanceof IDBRequest) return function(QQ) {
        const FQ = new Promise(((FQ, wQ) => {
          const LQ = () => {
              QQ.removeEventListener("success", qQ), QQ.removeEventListener("error", oQ)
            },
            qQ = () => {
              FQ(eQ(QQ.result)), LQ()
            },
            oQ = () => {
              wQ(QQ.error), LQ()
            };
          QQ.addEventListener("success", qQ), QQ.addEventListener("error", oQ)
        }));
        return FQ.then((FQ => {
          FQ instanceof IDBCursor && mQ.set(FQ, QQ)
        })).catch((() => {})), YQ.set(FQ, QQ), FQ
      }(QQ);
      if (bQ.has(QQ)) return bQ.get(QQ);
      const FQ = tQ(QQ);
      return FQ !== QQ && (bQ.set(QQ, FQ), YQ.set(FQ, QQ)), FQ
    }
    const MQ = QQ => YQ.get(QQ);
    const GQ = ["get", "getKey", "getAll", "getAllKeys", "count"],
      pQ = ["put", "add", "delete", "clear"],
      cQ = new Map;

    function CQ(QQ, FQ) {
      if (!(QQ instanceof IDBDatabase) || FQ in QQ || "string" !== typeof FQ) return;
      if (cQ.get(FQ)) return cQ.get(FQ);
      const wQ = FQ.replace(/FromIndex$/, ""),
        LQ = FQ !== wQ,
        qQ = pQ.includes(wQ);
      if (!(wQ in (LQ ? IDBIndex : IDBObjectStore).prototype) || !qQ && !GQ.includes(wQ)) return;
      const oQ = async function(QQ) {
        const FQ = this.transaction(QQ, qQ ? "readwrite" : "readonly");
        let oQ = FQ.store;
        for (var DQ = arguments.length, kQ = new Array(DQ > 1 ? DQ - 1 : 0), vQ = 1; vQ < DQ; vQ++) kQ[vQ - 1] = arguments[vQ];
        return LQ && (oQ = oQ.index(kQ.shift())), (await Promise.all([oQ[wQ](...kQ), qQ && FQ.done]))[0]
      };
      return cQ.set(FQ, oQ), oQ
    }
    xQ = (QQ => ({
      ...QQ,
      get: (FQ, wQ, LQ) => CQ(FQ, wQ) || QQ.get(FQ, wQ, LQ),
      has: (FQ, wQ) => !!CQ(FQ, wQ) || QQ.has(FQ, wQ)
    }))(xQ);
    const SQ = "@firebase/installations",
      iQ = "0.6.4",
      WQ = 1e4,
      RQ = `w:${iQ}`,
      OQ = "FIS_v2",
      sQ = 36e5,
      rQ = {
        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
        "not-registered": "Firebase Installation is not registered.",
        "installation-not-found": "Firebase Installation not found.",
        "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        "app-offline": "Could not process request. Application offline.",
        "delete-pending-registration": "Can't delete installation while there is a pending registration request."
      },
      IQ = new oQ.h("installations", "Installations", rQ);

    function UQ(QQ) {
      return QQ instanceof oQ.k && QQ.code.includes("request-failed")
    }

    function NQ(QQ) {
      let {
        projectId: FQ
      } = QQ;
      return `https://firebaseinstallations.googleapis.com/v1/projects/${FQ}/installations`
    }

    function TQ(QQ) {
      return {
        token: QQ.token,
        requestStatus: 2,
        expiresIn: (FQ = QQ.expiresIn, Number(FQ.replace("s", "000"))),
        creationTime: Date.now()
      };
      var FQ
    }
    async function KQ(QQ, FQ) {
      const wQ = (await FQ.json()).error;
      return IQ.create("request-failed", {
        requestName: QQ,
        serverCode: wQ.code,
        serverMessage: wQ.message,
        serverStatus: wQ.status
      })
    }

    function zQ(QQ) {
      let {
        apiKey: FQ
      } = QQ;
      return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": FQ
      })
    }

    function lQ(QQ, FQ) {
      let {
        refreshToken: wQ
      } = FQ;
      const LQ = zQ(QQ);
      return LQ.append("Authorization", function(QQ) {
        return `${OQ} ${QQ}`
      }(wQ)), LQ
    }
    async function jQ(QQ) {
      const FQ = await QQ();
      return FQ.status >= 500 && FQ.status < 600 ? QQ() : FQ
    }

    function aQ(QQ) {
      return new Promise((FQ => {
        setTimeout(FQ, QQ)
      }))
    }
    const XQ = /^[cdef][\w-]{21}$/;

    function fQ() {
      try {
        const QQ = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(QQ), QQ[0] = 112 + QQ[0] % 16;
        const FQ = function(QQ) {
          const FQ = (wQ = QQ, btoa(String.fromCharCode(...wQ)).replace(/\+/g, "-").replace(/\//g, "_"));
          var wQ;
          return FQ.substr(0, 22)
        }(QQ);
        return XQ.test(FQ) ? FQ : ""
      } catch (QQ) {
        return ""
      }
    }

    function VQ(QQ) {
      return `${QQ.appName}!${QQ.appId}`
    }
    const hQ = new Map;

    function JQ(QQ, FQ) {
      const wQ = VQ(QQ);
      EQ(wQ, FQ),
        function(QQ, FQ) {
          const wQ = gQ();
          wQ && wQ.postMessage({
            key: QQ,
            fid: FQ
          });
          PQ()
        }(wQ, FQ)
    }

    function EQ(QQ, FQ) {
      const wQ = hQ.get(QQ);
      if (wQ)
        for (const LQ of wQ) LQ(FQ)
    }
    let nQ = null;

    function gQ() {
      return !nQ && "BroadcastChannel" in self && (nQ = new BroadcastChannel("[Firebase] FID Change"), nQ.onmessage = QQ => {
        EQ(QQ.data.key, QQ.data.fid)
      }), nQ
    }

    function PQ() {
      0 === hQ.size && nQ && (nQ.close(), nQ = null)
    }
    const ZQ = "firebase-installations-store";
    let yQ = null;

    function BQ() {
      return yQ || (yQ = function(QQ, FQ) {
        let {
          blocked: wQ,
          upgrade: LQ,
          blocking: qQ,
          terminated: oQ
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const DQ = indexedDB.open(QQ, FQ),
          kQ = eQ(DQ);
        return LQ && DQ.addEventListener("upgradeneeded", (QQ => {
          LQ(eQ(DQ.result), QQ.oldVersion, QQ.newVersion, eQ(DQ.transaction))
        })), wQ && DQ.addEventListener("blocked", (() => wQ())), kQ.then((QQ => {
          oQ && QQ.addEventListener("close", (() => oQ())), qQ && QQ.addEventListener("versionchange", (() => qQ()))
        })).catch((() => {})), kQ
      }("firebase-installations-database", 1, {
        upgrade: (QQ, FQ) => {
          if (0 === FQ) QQ.createObjectStore(ZQ)
        }
      })), yQ
    }
    async function dQ(QQ, FQ) {
      const wQ = VQ(QQ),
        LQ = (await BQ()).transaction(ZQ, "readwrite"),
        qQ = LQ.objectStore(ZQ),
        oQ = await qQ.get(wQ);
      return await qQ.put(FQ, wQ), await LQ.done, oQ && oQ.fid === FQ.fid || JQ(QQ, FQ.fid), FQ
    }
    async function QF(QQ) {
      const FQ = VQ(QQ),
        wQ = (await BQ()).transaction(ZQ, "readwrite");
      await wQ.objectStore(ZQ).delete(FQ), await wQ.done
    }
    async function FF(QQ, FQ) {
      const wQ = VQ(QQ),
        LQ = (await BQ()).transaction(ZQ, "readwrite"),
        qQ = LQ.objectStore(ZQ),
        oQ = await qQ.get(wQ),
        DQ = FQ(oQ);
      return void 0 === DQ ? await qQ.delete(wQ) : await qQ.put(DQ, wQ), await LQ.done, !DQ || oQ && oQ.fid === DQ.fid || JQ(QQ, DQ.fid), DQ
    }
    async function wF(QQ) {
      let FQ;
      const wQ = await FF(QQ.appConfig, (wQ => {
        const LQ = function(QQ) {
            const FQ = QQ || {
              fid: fQ(),
              registrationStatus: 0
            };
            return oF(FQ)
          }(wQ),
          qQ = function(QQ, FQ) {
            if (0 === FQ.registrationStatus) {
              if (!navigator.onLine) {
                return {
                  installationEntry: FQ,
                  registrationPromise: Promise.reject(IQ.create("app-offline"))
                }
              }
              const wQ = {
                  fid: FQ.fid,
                  registrationStatus: 1,
                  registrationTime: Date.now()
                },
                LQ = async function(QQ, FQ) {
                  try {
                    const wQ = await async function(QQ, FQ) {
                      let {
                        appConfig: wQ,
                        heartbeatServiceProvider: LQ
                      } = QQ, {
                        fid: qQ
                      } = FQ;
                      const oQ = NQ(wQ),
                        DQ = zQ(wQ),
                        kQ = LQ.getImmediate({
                          optional: !0
                        });
                      if (kQ) {
                        const QQ = await kQ.getHeartbeatsHeader();
                        QQ && DQ.append("x-firebase-client", QQ)
                      }
                      const vQ = {
                          fid: qQ,
                          authVersion: OQ,
                          appId: wQ.appId,
                          sdkVersion: RQ
                        },
                        mQ = {
                          method: "POST",
                          headers: DQ,
                          body: JSON.stringify(vQ)
                        },
                        uQ = await jQ((() => fetch(oQ, mQ)));
                      if (uQ.ok) {
                        const QQ = await uQ.json();
                        return {
                          fid: QQ.fid || qQ,
                          registrationStatus: 2,
                          refreshToken: QQ.refreshToken,
                          authToken: TQ(QQ.authToken)
                        }
                      }
                      throw await KQ("Create Installation", uQ)
                    }(QQ, FQ);
                    return dQ(QQ.appConfig, wQ)
                  } catch (wQ) {
                    throw UQ(wQ) && 409 === wQ.customData.serverCode ? await QF(QQ.appConfig) : await dQ(QQ.appConfig, {
                      fid: FQ.fid,
                      registrationStatus: 0
                    }), wQ
                  }
                }(QQ, wQ);
              return {
                installationEntry: wQ,
                registrationPromise: LQ
              }
            }
            return 1 === FQ.registrationStatus ? {
              installationEntry: FQ,
              registrationPromise: LF(QQ)
            } : {
              installationEntry: FQ
            }
          }(QQ, LQ);
        return FQ = qQ.registrationPromise, qQ.installationEntry
      }));
      return "" === wQ.fid ? {
        installationEntry: await FQ
      } : {
        installationEntry: wQ,
        registrationPromise: FQ
      }
    }
    async function LF(QQ) {
      let FQ = await qF(QQ.appConfig);
      for (; 1 === FQ.registrationStatus;) await aQ(100), FQ = await qF(QQ.appConfig);
      if (0 === FQ.registrationStatus) {
        const {
          installationEntry: FQ,
          registrationPromise: wQ
        } = await wF(QQ);
        return wQ || FQ
      }
      return FQ
    }

    function qF(QQ) {
      return FF(QQ, (QQ => {
        if (!QQ) throw IQ.create("installation-not-found");
        return oF(QQ)
      }))
    }

    function oF(QQ) {
      return 1 === (FQ = QQ).registrationStatus && FQ.registrationTime + WQ < Date.now() ? {
        fid: QQ.fid,
        registrationStatus: 0
      } : QQ;
      var FQ
    }
    async function DF(QQ, FQ) {
      let {
        appConfig: wQ,
        heartbeatServiceProvider: LQ
      } = QQ;
      const qQ = function(QQ, FQ) {
          let {
            fid: wQ
          } = FQ;
          return `${NQ(QQ)}/${wQ}/authTokens:generate`
        }(wQ, FQ),
        oQ = lQ(wQ, FQ),
        DQ = LQ.getImmediate({
          optional: !0
        });
      if (DQ) {
        const QQ = await DQ.getHeartbeatsHeader();
        QQ && oQ.append("x-firebase-client", QQ)
      }
      const kQ = {
          installation: {
            sdkVersion: RQ,
            appId: wQ.appId
          }
        },
        vQ = {
          method: "POST",
          headers: oQ,
          body: JSON.stringify(kQ)
        },
        mQ = await jQ((() => fetch(qQ, vQ)));
      if (mQ.ok) {
        return TQ(await mQ.json())
      }
      throw await KQ("Generate Auth Token", mQ)
    }
    async function kF(QQ) {
      let FQ, wQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const LQ = await FF(QQ.appConfig, (LQ => {
        if (!mF(LQ)) throw IQ.create("not-registered");
        const qQ = LQ.authToken;
        if (!wQ && function(QQ) {
            return 2 === QQ.requestStatus && ! function(QQ) {
              const FQ = Date.now();
              return FQ < QQ.creationTime || QQ.creationTime + QQ.expiresIn < FQ + sQ
            }(QQ)
          }(qQ)) return LQ;
        if (1 === qQ.requestStatus) return FQ = async function(QQ, FQ) {
          let wQ = await vF(QQ.appConfig);
          for (; 1 === wQ.authToken.requestStatus;) await aQ(100), wQ = await vF(QQ.appConfig);
          const LQ = wQ.authToken;
          return 0 === LQ.requestStatus ? kF(QQ, FQ) : LQ
        }(QQ, wQ), LQ;
        {
          if (!navigator.onLine) throw IQ.create("app-offline");
          const wQ = function(QQ) {
            const FQ = {
              requestStatus: 1,
              requestTime: Date.now()
            };
            return Object.assign(Object.assign({}, QQ), {
              authToken: FQ
            })
          }(LQ);
          return FQ = async function(QQ, FQ) {
            try {
              const wQ = await DF(QQ, FQ),
                LQ = Object.assign(Object.assign({}, FQ), {
                  authToken: wQ
                });
              return await dQ(QQ.appConfig, LQ), wQ
            } catch (wQ) {
              if (!UQ(wQ) || 401 !== wQ.customData.serverCode && 404 !== wQ.customData.serverCode) {
                const wQ = Object.assign(Object.assign({}, FQ), {
                  authToken: {
                    requestStatus: 0
                  }
                });
                await dQ(QQ.appConfig, wQ)
              } else await QF(QQ.appConfig);
              throw wQ
            }
          }(QQ, wQ), wQ
        }
      }));
      return FQ ? await FQ : LQ.authToken
    }

    function vF(QQ) {
      return FF(QQ, (QQ => {
        if (!mF(QQ)) throw IQ.create("not-registered");
        const FQ = QQ.authToken;
        return 1 === (wQ = FQ).requestStatus && wQ.requestTime + WQ < Date.now() ? Object.assign(Object.assign({}, QQ), {
          authToken: {
            requestStatus: 0
          }
        }) : QQ;
        var wQ
      }))
    }

    function mF(QQ) {
      return void 0 !== QQ && 2 === QQ.registrationStatus
    }
    async function uF(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const wQ = QQ;
      await async function(QQ) {
        const {
          registrationPromise: FQ
        } = await wF(QQ);
        FQ && await FQ
      }(wQ);
      return (await kF(wQ, FQ)).token
    }

    function HF(QQ) {
      return IQ.create("missing-app-config-values", {
        valueName: QQ
      })
    }
    const bF = "installations",
      YF = QQ => {
        const FQ = QQ.getProvider("app").getImmediate(),
          wQ = function(QQ) {
            if (!QQ || !QQ.options) throw HF("App Configuration");
            if (!QQ.name) throw HF("App Name");
            const FQ = ["projectId", "apiKey", "appId"];
            for (const wQ of FQ)
              if (!QQ.options[wQ]) throw HF(wQ);
            return {
              appName: QQ.name,
              projectId: QQ.options.projectId,
              apiKey: QQ.options.apiKey,
              appId: QQ.options.appId
            }
          }(FQ);
        return {
          app: FQ,
          appConfig: wQ,
          heartbeatServiceProvider: (0, LQ.t)(FQ, "heartbeat"),
          _delete: () => Promise.resolve()
        }
      },
      xF = QQ => {
        const FQ = QQ.getProvider("app").getImmediate(),
          wQ = (0, LQ.t)(FQ, bF).getImmediate();
        return {
          getId: () => async function(QQ) {
            const FQ = QQ,
              {
                installationEntry: wQ,
                registrationPromise: LQ
              } = await wF(FQ);
            return LQ ? LQ.catch(console.error) : kF(FQ).catch(console.error), wQ.fid
          }(wQ),
          getToken: QQ => uF(wQ, QQ)
        }
      };
    (0, LQ.x)(new DQ.e(bF, YF, "PUBLIC")), (0, LQ.x)(new DQ.e("installations-internal", xF, "PRIVATE")), (0, LQ.R)(SQ, iQ), (0, LQ.R)(SQ, iQ, "esm2017");
    const AF = "analytics",
      tF = "https://www.googletagmanager.com/gtag/js",
      eF = new qQ.f("@firebase/analytics"),
      MF = {
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
      GF = new oQ.h("analytics", "Analytics", MF);

    function pF(QQ) {
      if (!QQ.startsWith(tF)) {
        const FQ = GF.create("invalid-gtag-resource", {
          gtagURL: QQ
        });
        return eF.warn(FQ.message), ""
      }
      return QQ
    }

    function cF(QQ) {
      return Promise.all(QQ.map((QQ => QQ.catch((QQ => QQ)))))
    }

    function CF(QQ, FQ) {
      const wQ = function(QQ, FQ) {
          let wQ;
          return window.trustedTypes && (wQ = window.trustedTypes.createPolicy(QQ, FQ)), wQ
        }("firebase-js-sdk-policy", {
          createScriptURL: pF
        }),
        LQ = document.createElement("script"),
        qQ = `${tF}?l=${QQ}&id=${FQ}`;
      LQ.src = wQ ? null === wQ || void 0 === wQ ? void 0 : wQ.createScriptURL(qQ) : qQ, LQ.async = !0, document.head.appendChild(LQ)
    }

    function SF(QQ, FQ, wQ, LQ) {
      return async function(qQ) {
        try {
          for (var oQ = arguments.length, DQ = new Array(oQ > 1 ? oQ - 1 : 0), kQ = 1; kQ < oQ; kQ++) DQ[kQ - 1] = arguments[kQ];
          if ("event" === qQ) {
            const [LQ, qQ] = DQ;
            await async function(QQ, FQ, wQ, LQ, qQ) {
              try {
                let oQ = [];
                if (qQ && qQ.send_to) {
                  let QQ = qQ.send_to;
                  Array.isArray(QQ) || (QQ = [QQ]);
                  const LQ = await cF(wQ);
                  for (const wQ of QQ) {
                    const QQ = LQ.find((QQ => QQ.measurementId === wQ)),
                      qQ = QQ && FQ[QQ.appId];
                    if (!qQ) {
                      oQ = [];
                      break
                    }
                    oQ.push(qQ)
                  }
                }
                0 === oQ.length && (oQ = Object.values(FQ)), await Promise.all(oQ), QQ("event", LQ, qQ || {})
              } catch (oQ) {
                eF.error(oQ)
              }
            }(QQ, FQ, wQ, LQ, qQ)
          } else if ("config" === qQ) {
            const [qQ, oQ] = DQ;
            await async function(QQ, FQ, wQ, LQ, qQ, oQ) {
              const DQ = LQ[qQ];
              try {
                if (DQ) await FQ[DQ];
                else {
                  const QQ = (await cF(wQ)).find((QQ => QQ.measurementId === qQ));
                  QQ && await FQ[QQ.appId]
                }
              } catch (kQ) {
                eF.error(kQ)
              }
              QQ("config", qQ, oQ)
            }(QQ, FQ, wQ, LQ, qQ, oQ)
          } else if ("consent" === qQ) {
            const [FQ] = DQ;
            QQ("consent", "update", FQ)
          } else if ("get" === qQ) {
            const [FQ, wQ, LQ] = DQ;
            QQ("get", FQ, wQ, LQ)
          } else if ("set" === qQ) {
            const [FQ] = DQ;
            QQ("set", FQ)
          } else QQ(qQ, ...DQ)
        } catch (vQ) {
          eF.error(vQ)
        }
      }
    }
    const iF = new class {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
        this.throttleMetadata = QQ, this.intervalMillis = FQ
      }
      getThrottleMetadata(QQ) {
        return this.throttleMetadata[QQ]
      }
      setThrottleMetadata(QQ, FQ) {
        this.throttleMetadata[QQ] = FQ
      }
      deleteThrottleMetadata(QQ) {
        delete this.throttleMetadata[QQ]
      }
    };

    function WF(QQ) {
      return new Headers({
        Accept: "application/json",
        "x-goog-api-key": QQ
      })
    }
    async function RF(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : iF,
        wQ = arguments.length > 2 ? arguments[2] : void 0;
      const {
        appId: LQ,
        apiKey: qQ,
        measurementId: oQ
      } = QQ.options;
      if (!LQ) throw GF.create("no-app-id");
      if (!qQ) {
        if (oQ) return {
          measurementId: oQ,
          appId: LQ
        };
        throw GF.create("no-api-key")
      }
      const DQ = FQ.getThrottleMetadata(LQ) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        },
        kQ = new sF;
      return setTimeout((async () => {
        kQ.abort()
      }), void 0 !== wQ ? wQ : 6e4), OF({
        appId: LQ,
        apiKey: qQ,
        measurementId: oQ
      }, DQ, kQ, FQ)
    }
    async function OF(QQ, FQ, wQ) {
      let {
        throttleEndTimeMillis: LQ,
        backoffCount: qQ
      } = FQ, DQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : iF;
      var kQ;
      const {
        appId: vQ,
        measurementId: mQ
      } = QQ;
      try {
        await
        function(QQ, FQ) {
          return new Promise(((wQ, LQ) => {
            const qQ = Math.max(FQ - Date.now(), 0),
              oQ = setTimeout(wQ, qQ);
            QQ.addEventListener((() => {
              clearTimeout(oQ), LQ(GF.create("fetch-throttle", {
                throttleEndTimeMillis: FQ
              }))
            }))
          }))
        }(wQ, LQ)
      } catch (uQ) {
        if (mQ) return eF.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${mQ} provided in the "measurementId" field in the local Firebase config. [${null===uQ||void 0===uQ?void 0:uQ.message}]`), {
          appId: vQ,
          measurementId: mQ
        };
        throw uQ
      }
      try {
        const FQ = await async function(QQ) {
          var FQ;
          const {
            appId: wQ,
            apiKey: LQ
          } = QQ, qQ = {
            method: "GET",
            headers: WF(LQ)
          }, oQ = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", wQ), DQ = await fetch(oQ, qQ);
          if (200 !== DQ.status && 304 !== DQ.status) {
            let QQ = "";
            try {
              const wQ = await DQ.json();
              (null === (FQ = wQ.error) || void 0 === FQ ? void 0 : FQ.message) && (QQ = wQ.error.message)
            } catch (kQ) {}
            throw GF.create("config-fetch-failed", {
              httpStatus: DQ.status,
              responseMessage: QQ
            })
          }
          return DQ.json()
        }(QQ);
        return DQ.deleteThrottleMetadata(vQ), FQ
      } catch (uQ) {
        const FQ = uQ;
        if (! function(QQ) {
            if (!(QQ instanceof oQ.k) || !QQ.customData) return !1;
            const FQ = Number(QQ.customData.httpStatus);
            return 429 === FQ || 500 === FQ || 503 === FQ || 504 === FQ
          }(FQ)) {
          if (DQ.deleteThrottleMetadata(vQ), mQ) return eF.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${mQ} provided in the "measurementId" field in the local Firebase config. [${null===FQ||void 0===FQ?void 0:FQ.message}]`), {
            appId: vQ,
            measurementId: mQ
          };
          throw uQ
        }
        const LQ = 503 === Number(null === (kQ = null === FQ || void 0 === FQ ? void 0 : FQ.customData) || void 0 === kQ ? void 0 : kQ.httpStatus) ? (0, oQ.u)(qQ, DQ.intervalMillis, 30) : (0, oQ.u)(qQ, DQ.intervalMillis),
          HQ = {
            throttleEndTimeMillis: Date.now() + LQ,
            backoffCount: qQ + 1
          };
        return DQ.setThrottleMetadata(vQ, HQ), eF.debug(`Calling attemptFetch again in ${LQ} millis`), OF(QQ, HQ, wQ, DQ)
      }
    }
    class sF {
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
    let rF, IF;

    function UF(QQ) {
      IF = QQ
    }

    function NF(QQ) {
      rF = QQ
    }
    async function TF(QQ, FQ, wQ, LQ, qQ, DQ, kQ) {
      var vQ;
      const mQ = RF(QQ);
      mQ.then((FQ => {
        wQ[FQ.measurementId] = FQ.appId, QQ.options.measurementId && FQ.measurementId !== QQ.options.measurementId && eF.warn(`The measurement ID in the local Firebase config (${QQ.options.measurementId}) does not match the measurement ID fetched from the server (${FQ.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
      })).catch((QQ => eF.error(QQ))), FQ.push(mQ);
      const uQ = async function() {
        if (!(0, oQ.$)()) return eF.warn(GF.create("indexeddb-unavailable", {
          errorInfo: "IndexedDB is not available in this environment."
        }).message), !1;
        try {
          await (0, oQ.mb)()
        } catch (QQ) {
          return eF.warn(GF.create("indexeddb-unavailable", {
            errorInfo: null === QQ || void 0 === QQ ? void 0 : QQ.toString()
          }).message), !1
        }
        return !0
      }().then((QQ => QQ ? LQ.getId() : void 0)), [HQ, bQ] = await Promise.all([mQ, uQ]);
      (function(QQ) {
        const FQ = window.document.getElementsByTagName("script");
        for (const wQ of Object.values(FQ))
          if (wQ.src && wQ.src.includes(tF) && wQ.src.includes(QQ)) return wQ;
        return null
      })(DQ) || CF(DQ, HQ.measurementId), IF && (qQ("consent", "default", IF), UF(void 0)), qQ("js", new Date);
      const YQ = null !== (vQ = null === kQ || void 0 === kQ ? void 0 : kQ.config) && void 0 !== vQ ? vQ : {};
      return YQ.origin = "firebase", YQ.update = !0, null != bQ && (YQ.firebase_id = bQ), qQ("config", HQ.measurementId, YQ), rF && (qQ("set", rF), NF(void 0)), HQ.measurementId
    }
    class KF {
      constructor(QQ) {
        this.app = QQ
      }
      _delete() {
        return delete zF[this.app.options.appId], Promise.resolve()
      }
    }
    let zF = {},
      lF = [];
    const jF = {};
    let aF, XF, fF = "dataLayer",
      VF = "gtag",
      hF = !1;

    function JF(QQ) {
      if (hF) throw GF.create("already-initialized");
      QQ.dataLayerName && (fF = QQ.dataLayerName), QQ.gtagName && (VF = QQ.gtagName)
    }

    function EF(QQ, FQ, wQ) {
      ! function() {
        const QQ = [];
        if ((0, oQ.U)() && QQ.push("This is a browser extension environment."), (0, oQ.m)() || QQ.push("Cookies are not available."), QQ.length > 0) {
          const FQ = QQ.map(((QQ, FQ) => `(${FQ+1}) ${QQ}`)).join(" "),
            wQ = GF.create("invalid-analytics-context", {
              errorInfo: FQ
            });
          eF.warn(wQ.message)
        }
      }();
      const LQ = QQ.options.appId;
      if (!LQ) throw GF.create("no-app-id");
      if (!QQ.options.apiKey) {
        if (!QQ.options.measurementId) throw GF.create("no-api-key");
        eF.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${QQ.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
      }
      if (null != zF[LQ]) throw GF.create("already-exists", {
        id: LQ
      });
      if (!hF) {
        ! function(QQ) {
          let FQ = [];
          Array.isArray(window[QQ]) ? FQ = window[QQ] : window[QQ] = FQ
        }(fF);
        const {
          wrappedGtag: QQ,
          gtagCore: FQ
        } = function(QQ, FQ, wQ, LQ, qQ) {
          let oQ = function() {
            for (var QQ = arguments.length, FQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) FQ[wQ] = arguments[wQ];
            window[LQ].push(arguments)
          };
          return window[qQ] && "function" === typeof window[qQ] && (oQ = window[qQ]), window[qQ] = SF(oQ, QQ, FQ, wQ), {
            gtagCore: oQ,
            wrappedGtag: window[qQ]
          }
        }(zF, lF, jF, fF, VF);
        XF = QQ, aF = FQ, hF = !0
      }
      zF[LQ] = TF(QQ, lF, jF, FQ, aF, fF, wQ);
      return new KF(QQ)
    }

    function nF() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, LQ.J)();
      QQ = (0, oQ.P)(QQ);
      const FQ = (0, LQ.t)(QQ, AF);
      return FQ.isInitialized() ? FQ.getImmediate() : gF(QQ)
    }

    function gF(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const wQ = (0, LQ.t)(QQ, AF);
      if (wQ.isInitialized()) {
        const QQ = wQ.getImmediate();
        if ((0, oQ.C)(FQ, wQ.getOptions())) return QQ;
        throw GF.create("already-initialized")
      }
      return wQ.initialize({
        options: FQ
      })
    }
    async function PF() {
      if ((0, oQ.U)()) return !1;
      if (!(0, oQ.m)()) return !1;
      if (!(0, oQ.$)()) return !1;
      try {
        return await (0, oQ.mb)()
      } catch (QQ) {
        return !1
      }
    }

    function ZF(QQ, FQ, wQ) {
      QQ = (0, oQ.P)(QQ), async function(QQ, FQ, wQ, LQ) {
        if (LQ && LQ.global) return QQ("set", {
          screen_name: wQ
        }), Promise.resolve();
        QQ("config", await FQ, {
          update: !0,
          screen_name: wQ
        })
      }(XF, zF[QQ.app.options.appId], FQ, wQ).catch((QQ => eF.error(QQ)))
    }
    async function yF(QQ) {
      return QQ = (0, oQ.P)(QQ), async function(QQ, FQ) {
        const wQ = await FQ;
        return new Promise(((FQ, LQ) => {
          QQ("get", wQ, "client_id", (QQ => {
            QQ || LQ(GF.create("no-client-id")), FQ(QQ)
          }))
        }))
      }(XF, zF[QQ.app.options.appId])
    }

    function BF(QQ, FQ, wQ) {
      QQ = (0, oQ.P)(QQ), async function(QQ, FQ, wQ, LQ) {
        if (LQ && LQ.global) return QQ("set", {
          user_id: wQ
        }), Promise.resolve();
        QQ("config", await FQ, {
          update: !0,
          user_id: wQ
        })
      }(XF, zF[QQ.app.options.appId], FQ, wQ).catch((QQ => eF.error(QQ)))
    }

    function dF(QQ, FQ, wQ) {
      QQ = (0, oQ.P)(QQ), async function(QQ, FQ, wQ, LQ) {
        if (LQ && LQ.global) {
          const FQ = {};
          for (const QQ of Object.keys(wQ)) FQ[`user_properties.${QQ}`] = wQ[QQ];
          return QQ("set", FQ), Promise.resolve()
        }
        QQ("config", await FQ, {
          update: !0,
          user_properties: wQ
        })
      }(XF, zF[QQ.app.options.appId], FQ, wQ).catch((QQ => eF.error(QQ)))
    }

    function Qw(QQ, FQ) {
      QQ = (0, oQ.P)(QQ), async function(QQ, FQ) {
        const wQ = await QQ;
        window[`ga-disable-${wQ}`] = !FQ
      }(zF[QQ.app.options.appId], FQ).catch((QQ => eF.error(QQ)))
    }

    function Fw(QQ) {
      XF ? XF("set", QQ) : NF(QQ)
    }

    function ww(QQ, FQ, wQ, LQ) {
      QQ = (0, oQ.P)(QQ), async function(QQ, FQ, wQ, LQ, qQ) {
        if (qQ && qQ.global) QQ("event", wQ, LQ);
        else {
          const qQ = await FQ;
          QQ("event", wQ, Object.assign(Object.assign({}, LQ), {
            send_to: qQ
          }))
        }
      }(XF, zF[QQ.app.options.appId], FQ, wQ, LQ).catch((QQ => eF.error(QQ)))
    }

    function Lw(QQ) {
      XF ? XF("consent", "update", QQ) : UF(QQ)
    }
    const qw = "@firebase/analytics",
      ow = "0.10.0";
    (0, LQ.x)(new DQ.e(AF, ((QQ, FQ) => {
      let {
        options: wQ
      } = FQ;
      return EF(QQ.getProvider("app").getImmediate(), QQ.getProvider("installations-internal").getImmediate(), wQ)
    }), "PUBLIC")), (0, LQ.x)(new DQ.e("analytics-internal", (function(QQ) {
      try {
        const FQ = QQ.getProvider(AF).getImmediate();
        return {
          logEvent: (QQ, wQ, LQ) => ww(FQ, QQ, wQ, LQ)
        }
      } catch (FQ) {
        throw GF.create("interop-component-reg-failed", {
          reason: FQ
        })
      }
    }), "PRIVATE")), (0, LQ.R)(qw, ow), (0, LQ.R)(qw, ow, "esm2017")
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);