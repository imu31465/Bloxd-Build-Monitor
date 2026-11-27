/*! For license information please see 4udp6d.304.c497c3c2.chunk.js.LICENSE.txt */
export const id = 304;
export const ids = [304];
export const modules = {
  42054: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      getAnalytics: () => YJ,
      getGoogleAnalyticsClientId: () => TJ,
      initializeAnalytics: () => kJ,
      isSupported: () => QJ,
      logEvent: () => GG,
      setAnalyticsCollectionEnabled: () => RG,
      setConsent: () => yG,
      setCurrentScreen: () => FJ,
      setDefaultEventParameters: () => JG,
      setUserId: () => sJ,
      setUserProperties: () => hJ,
      settings: () => dJ
    });
    var yR = GR(42038),
      tR = GR(42051),
      uR = GR(42046),
      ZR = GR(42044);
    let qR, iR;
    const fR = new WeakMap,
      VR = new WeakMap,
      KR = new WeakMap,
      wR = new WeakMap,
      rR = new WeakMap;
    let eR = {
      get(RR, JR, GR) {
        if (RR instanceof IDBTransaction) {
          if ("done" === JR) return VR.get(RR);
          if ("objectStoreNames" === JR) return RR.objectStoreNames || KR.get(RR);
          if ("store" === JR) return GR.objectStoreNames[1] ? void 0 : GR.objectStore(GR.objectStoreNames[0])
        }
        return nR(RR[JR])
      },
      set: (RR, JR, GR) => (RR[JR] = GR, !0),
      has: (RR, JR) => RR instanceof IDBTransaction && ("done" === JR || "store" === JR) || JR in RR
    };

    function aR(RR) {
      return RR !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (iR || (iR = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(RR) ? function() {
        for (var JR = arguments.length, GR = new Array(JR), yR = 0; yR < JR; yR++) GR[yR] = arguments[yR];
        return RR.apply(UR(this), GR), nR(fR.get(this))
      } : function() {
        for (var JR = arguments.length, GR = new Array(JR), yR = 0; yR < JR; yR++) GR[yR] = arguments[yR];
        return nR(RR.apply(UR(this), GR))
      } : function(JR) {
        for (var GR = arguments.length, yR = new Array(GR > 1 ? GR - 1 : 0), tR = 1; tR < GR; tR++) yR[tR - 1] = arguments[tR];
        const uR = RR.call(UR(this), JR, ...yR);
        return KR.set(uR, JR.sort ? JR.sort() : [JR]), nR(uR)
      }
    }

    function LR(RR) {
      return "function" === typeof RR ? aR(RR) : (RR instanceof IDBTransaction && function(RR) {
        if (VR.has(RR)) return;
        const JR = new Promise(((JR, GR) => {
          const yR = () => {
              RR.removeEventListener("complete", tR), RR.removeEventListener("error", uR), RR.removeEventListener("abort", uR)
            },
            tR = () => {
              JR(), yR()
            },
            uR = () => {
              GR(RR.error || new DOMException("AbortError", "AbortError")), yR()
            };
          RR.addEventListener("complete", tR), RR.addEventListener("error", uR), RR.addEventListener("abort", uR)
        }));
        VR.set(RR, JR)
      }(RR), JR = RR, (qR || (qR = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((RR => JR instanceof RR)) ? new Proxy(RR, eR) : RR);
      var JR
    }

    function nR(RR) {
      if (RR instanceof IDBRequest) return function(RR) {
        const JR = new Promise(((JR, GR) => {
          const yR = () => {
              RR.removeEventListener("success", tR), RR.removeEventListener("error", uR)
            },
            tR = () => {
              JR(nR(RR.result)), yR()
            },
            uR = () => {
              GR(RR.error), yR()
            };
          RR.addEventListener("success", tR), RR.addEventListener("error", uR)
        }));
        return JR.then((JR => {
          JR instanceof IDBCursor && fR.set(JR, RR)
        })).catch((() => {})), rR.set(JR, RR), JR
      }(RR);
      if (wR.has(RR)) return wR.get(RR);
      const JR = LR(RR);
      return JR !== RR && (wR.set(RR, JR), rR.set(JR, RR)), JR
    }
    const UR = RR => rR.get(RR);
    const WR = ["get", "getKey", "getAll", "getAllKeys", "count"],
      AR = ["put", "add", "delete", "clear"],
      CR = new Map;

    function XR(RR, JR) {
      if (!(RR instanceof IDBDatabase) || JR in RR || "string" !== typeof JR) return;
      if (CR.get(JR)) return CR.get(JR);
      const GR = JR.replace(/FromIndex$/, ""),
        yR = JR !== GR,
        tR = AR.includes(GR);
      if (!(GR in (yR ? IDBIndex : IDBObjectStore).prototype) || !tR && !WR.includes(GR)) return;
      const uR = async function(RR) {
        const JR = this.transaction(RR, tR ? "readwrite" : "readonly");
        let uR = JR.store;
        for (var ZR = arguments.length, qR = new Array(ZR > 1 ? ZR - 1 : 0), iR = 1; iR < ZR; iR++) qR[iR - 1] = arguments[iR];
        return yR && (uR = uR.index(qR.shift())), (await Promise.all([uR[GR](...qR), tR && JR.done]))[0]
      };
      return CR.set(JR, uR), uR
    }
    eR = (RR => ({
      ...RR,
      get: (JR, GR, yR) => XR(JR, GR) || RR.get(JR, GR, yR),
      has: (JR, GR) => !!XR(JR, GR) || RR.has(JR, GR)
    }))(eR);
    const MR = "@firebase/installations",
      BR = "0.6.4",
      lR = 1e4,
      pR = `w:${BR}`,
      gR = "FIS_v2",
      bR = 36e5,
      vR = {
        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
        "not-registered": "Firebase Installation is not registered.",
        "installation-not-found": "Firebase Installation not found.",
        "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        "app-offline": "Could not process request. Application offline.",
        "delete-pending-registration": "Can't delete installation while there is a pending registration request."
      },
      OR = new uR.e("installations", "Installations", vR);

    function xR(RR) {
      return RR instanceof uR.f && RR.code.includes("request-failed")
    }

    function NR(RR) {
      let {
        projectId: JR
      } = RR;
      return `https://firebaseinstallations.googleapis.com/v1/projects/${JR}/installations`
    }

    function DR(RR) {
      return {
        token: RR.token,
        requestStatus: 2,
        expiresIn: (JR = RR.expiresIn, Number(JR.replace("s", "000"))),
        creationTime: Date.now()
      };
      var JR
    }
    async function HR(RR, JR) {
      const GR = (await JR.json()).error;
      return OR.create("request-failed", {
        requestName: RR,
        serverCode: GR.code,
        serverMessage: GR.message,
        serverStatus: GR.status
      })
    }

    function oR(RR) {
      let {
        apiKey: JR
      } = RR;
      return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": JR
      })
    }

    function cR(RR, JR) {
      let {
        refreshToken: GR
      } = JR;
      const yR = oR(RR);
      return yR.append("Authorization", function(RR) {
        return `${gR} ${RR}`
      }(GR)), yR
    }
    async function PR(RR) {
      const JR = await RR();
      return JR.status >= 500 && JR.status < 600 ? RR() : JR
    }

    function IR(RR) {
      return new Promise((JR => {
        setTimeout(JR, RR)
      }))
    }
    const mR = /^[cdef][\w-]{21}$/;

    function zR() {
      try {
        const RR = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(RR), RR[0] = 112 + RR[0] % 16;
        const JR = function(RR) {
          const JR = (GR = RR, btoa(String.fromCharCode(...GR)).replace(/\+/g, "-").replace(/\//g, "_"));
          var GR;
          return JR.substr(0, 22)
        }(RR);
        return mR.test(JR) ? JR : ""
      } catch (RR) {
        return ""
      }
    }

    function SR(RR) {
      return `${RR.appName}!${RR.appId}`
    }
    const jR = new Map;

    function dR(RR, JR) {
      const GR = SR(RR);
      ER(GR, JR),
        function(RR, JR) {
          const GR = kR();
          GR && GR.postMessage({
            key: RR,
            fid: JR
          });
          QR()
        }(GR, JR)
    }

    function ER(RR, JR) {
      const GR = jR.get(RR);
      if (GR)
        for (const yR of GR) yR(JR)
    }
    let YR = null;

    function kR() {
      return !YR && "BroadcastChannel" in self && (YR = new BroadcastChannel("[Firebase] FID Change"), YR.onmessage = RR => {
        ER(RR.data.key, RR.data.fid)
      }), YR
    }

    function QR() {
      0 === jR.size && YR && (YR.close(), YR = null)
    }
    const FR = "firebase-installations-store";
    let TR = null;

    function sR() {
      return TR || (TR = function(RR, JR) {
        let {
          blocked: GR,
          upgrade: yR,
          blocking: tR,
          terminated: uR
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const ZR = indexedDB.open(RR, JR),
          qR = nR(ZR);
        return yR && ZR.addEventListener("upgradeneeded", (RR => {
          yR(nR(ZR.result), RR.oldVersion, RR.newVersion, nR(ZR.transaction))
        })), GR && ZR.addEventListener("blocked", (() => GR())), qR.then((RR => {
          uR && RR.addEventListener("close", (() => uR())), tR && RR.addEventListener("versionchange", (() => tR()))
        })).catch((() => {})), qR
      }("firebase-installations-database", 1, {
        upgrade: (RR, JR) => {
          if (0 === JR) RR.createObjectStore(FR)
        }
      })), TR
    }
    async function hR(RR, JR) {
      const GR = SR(RR),
        yR = (await sR()).transaction(FR, "readwrite"),
        tR = yR.objectStore(FR),
        uR = await tR.get(GR);
      return await tR.put(JR, GR), await yR.done, uR && uR.fid === JR.fid || dR(RR, JR.fid), JR
    }
    async function RJ(RR) {
      const JR = SR(RR),
        GR = (await sR()).transaction(FR, "readwrite");
      await GR.objectStore(FR).delete(JR), await GR.done
    }
    async function JJ(RR, JR) {
      const GR = SR(RR),
        yR = (await sR()).transaction(FR, "readwrite"),
        tR = yR.objectStore(FR),
        uR = await tR.get(GR),
        ZR = JR(uR);
      return void 0 === ZR ? await tR.delete(GR) : await tR.put(ZR, GR), await yR.done, !ZR || uR && uR.fid === ZR.fid || dR(RR, ZR.fid), ZR
    }
    async function GJ(RR) {
      let JR;
      const GR = await JJ(RR.appConfig, (GR => {
        const yR = function(RR) {
            const JR = RR || {
              fid: zR(),
              registrationStatus: 0
            };
            return uJ(JR)
          }(GR),
          tR = function(RR, JR) {
            if (0 === JR.registrationStatus) {
              if (!navigator.onLine) {
                return {
                  installationEntry: JR,
                  registrationPromise: Promise.reject(OR.create("app-offline"))
                }
              }
              const GR = {
                  fid: JR.fid,
                  registrationStatus: 1,
                  registrationTime: Date.now()
                },
                yR = async function(RR, JR) {
                  try {
                    const GR = await async function(RR, JR) {
                      let {
                        appConfig: GR,
                        heartbeatServiceProvider: yR
                      } = RR, {
                        fid: tR
                      } = JR;
                      const uR = NR(GR),
                        ZR = oR(GR),
                        qR = yR.getImmediate({
                          optional: !0
                        });
                      if (qR) {
                        const RR = await qR.getHeartbeatsHeader();
                        RR && ZR.append("x-firebase-client", RR)
                      }
                      const iR = {
                          fid: tR,
                          authVersion: gR,
                          appId: GR.appId,
                          sdkVersion: pR
                        },
                        fR = {
                          method: "POST",
                          headers: ZR,
                          body: JSON.stringify(iR)
                        },
                        VR = await PR((() => fetch(uR, fR)));
                      if (VR.ok) {
                        const RR = await VR.json();
                        return {
                          fid: RR.fid || tR,
                          registrationStatus: 2,
                          refreshToken: RR.refreshToken,
                          authToken: DR(RR.authToken)
                        }
                      }
                      throw await HR("Create Installation", VR)
                    }(RR, JR);
                    return hR(RR.appConfig, GR)
                  } catch (GR) {
                    throw xR(GR) && 409 === GR.customData.serverCode ? await RJ(RR.appConfig) : await hR(RR.appConfig, {
                      fid: JR.fid,
                      registrationStatus: 0
                    }), GR
                  }
                }(RR, GR);
              return {
                installationEntry: GR,
                registrationPromise: yR
              }
            }
            return 1 === JR.registrationStatus ? {
              installationEntry: JR,
              registrationPromise: yJ(RR)
            } : {
              installationEntry: JR
            }
          }(RR, yR);
        return JR = tR.registrationPromise, tR.installationEntry
      }));
      return "" === GR.fid ? {
        installationEntry: await JR
      } : {
        installationEntry: GR,
        registrationPromise: JR
      }
    }
    async function yJ(RR) {
      let JR = await tJ(RR.appConfig);
      for (; 1 === JR.registrationStatus;) await IR(100), JR = await tJ(RR.appConfig);
      if (0 === JR.registrationStatus) {
        const {
          installationEntry: JR,
          registrationPromise: GR
        } = await GJ(RR);
        return GR || JR
      }
      return JR
    }

    function tJ(RR) {
      return JJ(RR, (RR => {
        if (!RR) throw OR.create("installation-not-found");
        return uJ(RR)
      }))
    }

    function uJ(RR) {
      return 1 === (JR = RR).registrationStatus && JR.registrationTime + lR < Date.now() ? {
        fid: RR.fid,
        registrationStatus: 0
      } : RR;
      var JR
    }
    async function ZJ(RR, JR) {
      let {
        appConfig: GR,
        heartbeatServiceProvider: yR
      } = RR;
      const tR = function(RR, JR) {
          let {
            fid: GR
          } = JR;
          return `${NR(RR)}/${GR}/authTokens:generate`
        }(GR, JR),
        uR = cR(GR, JR),
        ZR = yR.getImmediate({
          optional: !0
        });
      if (ZR) {
        const RR = await ZR.getHeartbeatsHeader();
        RR && uR.append("x-firebase-client", RR)
      }
      const qR = {
          installation: {
            sdkVersion: pR,
            appId: GR.appId
          }
        },
        iR = {
          method: "POST",
          headers: uR,
          body: JSON.stringify(qR)
        },
        fR = await PR((() => fetch(tR, iR)));
      if (fR.ok) {
        return DR(await fR.json())
      }
      throw await HR("Generate Auth Token", fR)
    }
    async function qJ(RR) {
      let JR, GR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const yR = await JJ(RR.appConfig, (yR => {
        if (!fJ(yR)) throw OR.create("not-registered");
        const tR = yR.authToken;
        if (!GR && function(RR) {
            return 2 === RR.requestStatus && ! function(RR) {
              const JR = Date.now();
              return JR < RR.creationTime || RR.creationTime + RR.expiresIn < JR + bR
            }(RR)
          }(tR)) return yR;
        if (1 === tR.requestStatus) return JR = async function(RR, JR) {
          let GR = await iJ(RR.appConfig);
          for (; 1 === GR.authToken.requestStatus;) await IR(100), GR = await iJ(RR.appConfig);
          const yR = GR.authToken;
          return 0 === yR.requestStatus ? qJ(RR, JR) : yR
        }(RR, GR), yR;
        {
          if (!navigator.onLine) throw OR.create("app-offline");
          const GR = function(RR) {
            const JR = {
              requestStatus: 1,
              requestTime: Date.now()
            };
            return Object.assign(Object.assign({}, RR), {
              authToken: JR
            })
          }(yR);
          return JR = async function(RR, JR) {
            try {
              const GR = await ZJ(RR, JR),
                yR = Object.assign(Object.assign({}, JR), {
                  authToken: GR
                });
              return await hR(RR.appConfig, yR), GR
            } catch (GR) {
              if (!xR(GR) || 401 !== GR.customData.serverCode && 404 !== GR.customData.serverCode) {
                const GR = Object.assign(Object.assign({}, JR), {
                  authToken: {
                    requestStatus: 0
                  }
                });
                await hR(RR.appConfig, GR)
              } else await RJ(RR.appConfig);
              throw GR
            }
          }(RR, GR), GR
        }
      }));
      return JR ? await JR : yR.authToken
    }

    function iJ(RR) {
      return JJ(RR, (RR => {
        if (!fJ(RR)) throw OR.create("not-registered");
        const JR = RR.authToken;
        return 1 === (GR = JR).requestStatus && GR.requestTime + lR < Date.now() ? Object.assign(Object.assign({}, RR), {
          authToken: {
            requestStatus: 0
          }
        }) : RR;
        var GR
      }))
    }

    function fJ(RR) {
      return void 0 !== RR && 2 === RR.registrationStatus
    }
    async function VJ(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const GR = RR;
      await async function(RR) {
        const {
          registrationPromise: JR
        } = await GJ(RR);
        JR && await JR
      }(GR);
      return (await qJ(GR, JR)).token
    }

    function KJ(RR) {
      return OR.create("missing-app-config-values", {
        valueName: RR
      })
    }
    const wJ = "installations",
      rJ = RR => {
        const JR = RR.getProvider("app").getImmediate(),
          GR = function(RR) {
            if (!RR || !RR.options) throw KJ("App Configuration");
            if (!RR.name) throw KJ("App Name");
            const JR = ["projectId", "apiKey", "appId"];
            for (const GR of JR)
              if (!RR.options[GR]) throw KJ(GR);
            return {
              appName: RR.name,
              projectId: RR.options.projectId,
              apiKey: RR.options.apiKey,
              appId: RR.options.appId
            }
          }(JR);
        return {
          app: JR,
          appConfig: GR,
          heartbeatServiceProvider: (0, yR.t)(JR, "heartbeat"),
          _delete: () => Promise.resolve()
        }
      },
      eJ = RR => {
        const JR = RR.getProvider("app").getImmediate(),
          GR = (0, yR.t)(JR, wJ).getImmediate();
        return {
          getId: () => async function(RR) {
            const JR = RR,
              {
                installationEntry: GR,
                registrationPromise: yR
              } = await GJ(JR);
            return yR ? yR.catch(console.error) : qJ(JR).catch(console.error), GR.fid
          }(GR),
          getToken: RR => VJ(GR, RR)
        }
      };
    (0, yR.w)(new ZR.i(wJ, rJ, "PUBLIC")), (0, yR.w)(new ZR.i("installations-internal", eJ, "PRIVATE")), (0, yR.M)(MR, BR), (0, yR.M)(MR, BR, "esm2017");
    const aJ = "analytics",
      LJ = "https://www.googletagmanager.com/gtag/js",
      nJ = new tR.g("@firebase/analytics"),
      UJ = {
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
      WJ = new uR.e("analytics", "Analytics", UJ);

    function AJ(RR) {
      if (!RR.startsWith(LJ)) {
        const JR = WJ.create("invalid-gtag-resource", {
          gtagURL: RR
        });
        return nJ.warn(JR.message), ""
      }
      return RR
    }

    function CJ(RR) {
      return Promise.all(RR.map((RR => RR.catch((RR => RR)))))
    }

    function XJ(RR, JR) {
      const GR = function(RR, JR) {
          let GR;
          return window.trustedTypes && (GR = window.trustedTypes.createPolicy(RR, JR)), GR
        }("firebase-js-sdk-policy", {
          createScriptURL: AJ
        }),
        yR = document.createElement("script"),
        tR = `${LJ}?l=${RR}&id=${JR}`;
      yR.src = GR ? null === GR || void 0 === GR ? void 0 : GR.createScriptURL(tR) : tR, yR.async = !0, document.head.appendChild(yR)
    }

    function MJ(RR, JR, GR, yR) {
      return async function(tR) {
        try {
          for (var uR = arguments.length, ZR = new Array(uR > 1 ? uR - 1 : 0), qR = 1; qR < uR; qR++) ZR[qR - 1] = arguments[qR];
          if ("event" === tR) {
            const [yR, tR] = ZR;
            await async function(RR, JR, GR, yR, tR) {
              try {
                let uR = [];
                if (tR && tR.send_to) {
                  let RR = tR.send_to;
                  Array.isArray(RR) || (RR = [RR]);
                  const yR = await CJ(GR);
                  for (const GR of RR) {
                    const RR = yR.find((RR => RR.measurementId === GR)),
                      tR = RR && JR[RR.appId];
                    if (!tR) {
                      uR = [];
                      break
                    }
                    uR.push(tR)
                  }
                }
                0 === uR.length && (uR = Object.values(JR)), await Promise.all(uR), RR("event", yR, tR || {})
              } catch (uR) {
                nJ.error(uR)
              }
            }(RR, JR, GR, yR, tR)
          } else if ("config" === tR) {
            const [tR, uR] = ZR;
            await async function(RR, JR, GR, yR, tR, uR) {
              const ZR = yR[tR];
              try {
                if (ZR) await JR[ZR];
                else {
                  const RR = (await CJ(GR)).find((RR => RR.measurementId === tR));
                  RR && await JR[RR.appId]
                }
              } catch (qR) {
                nJ.error(qR)
              }
              RR("config", tR, uR)
            }(RR, JR, GR, yR, tR, uR)
          } else if ("consent" === tR) {
            const [JR] = ZR;
            RR("consent", "update", JR)
          } else if ("get" === tR) {
            const [JR, GR, yR] = ZR;
            RR("get", JR, GR, yR)
          } else if ("set" === tR) {
            const [JR] = ZR;
            RR("set", JR)
          } else RR(tR, ...ZR)
        } catch (iR) {
          nJ.error(iR)
        }
      }
    }
    const BJ = new class {
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
        this.throttleMetadata = RR, this.intervalMillis = JR
      }
      getThrottleMetadata(RR) {
        return this.throttleMetadata[RR]
      }
      setThrottleMetadata(RR, JR) {
        this.throttleMetadata[RR] = JR
      }
      deleteThrottleMetadata(RR) {
        delete this.throttleMetadata[RR]
      }
    };

    function lJ(RR) {
      return new Headers({
        Accept: "application/json",
        "x-goog-api-key": RR
      })
    }
    async function pJ(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BJ,
        GR = arguments.length > 2 ? arguments[2] : void 0;
      const {
        appId: yR,
        apiKey: tR,
        measurementId: uR
      } = RR.options;
      if (!yR) throw WJ.create("no-app-id");
      if (!tR) {
        if (uR) return {
          measurementId: uR,
          appId: yR
        };
        throw WJ.create("no-api-key")
      }
      const ZR = JR.getThrottleMetadata(yR) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        },
        qR = new bJ;
      return setTimeout((async () => {
        qR.abort()
      }), void 0 !== GR ? GR : 6e4), gJ({
        appId: yR,
        apiKey: tR,
        measurementId: uR
      }, ZR, qR, JR)
    }
    async function gJ(RR, JR, GR) {
      let {
        throttleEndTimeMillis: yR,
        backoffCount: tR
      } = JR, ZR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BJ;
      var qR;
      const {
        appId: iR,
        measurementId: fR
      } = RR;
      try {
        await
        function(RR, JR) {
          return new Promise(((GR, yR) => {
            const tR = Math.max(JR - Date.now(), 0),
              uR = setTimeout(GR, tR);
            RR.addEventListener((() => {
              clearTimeout(uR), yR(WJ.create("fetch-throttle", {
                throttleEndTimeMillis: JR
              }))
            }))
          }))
        }(GR, yR)
      } catch (VR) {
        if (fR) return nJ.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${fR} provided in the "measurementId" field in the local Firebase config. [${null===VR||void 0===VR?void 0:VR.message}]`), {
          appId: iR,
          measurementId: fR
        };
        throw VR
      }
      try {
        const JR = await async function(RR) {
          var JR;
          const {
            appId: GR,
            apiKey: yR
          } = RR, tR = {
            method: "GET",
            headers: lJ(yR)
          }, uR = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", GR), ZR = await fetch(uR, tR);
          if (200 !== ZR.status && 304 !== ZR.status) {
            let RR = "";
            try {
              const GR = await ZR.json();
              (null === (JR = GR.error) || void 0 === JR ? void 0 : JR.message) && (RR = GR.error.message)
            } catch (qR) {}
            throw WJ.create("config-fetch-failed", {
              httpStatus: ZR.status,
              responseMessage: RR
            })
          }
          return ZR.json()
        }(RR);
        return ZR.deleteThrottleMetadata(iR), JR
      } catch (VR) {
        const JR = VR;
        if (! function(RR) {
            if (!(RR instanceof uR.f) || !RR.customData) return !1;
            const JR = Number(RR.customData.httpStatus);
            return 429 === JR || 500 === JR || 503 === JR || 504 === JR
          }(JR)) {
          if (ZR.deleteThrottleMetadata(iR), fR) return nJ.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${fR} provided in the "measurementId" field in the local Firebase config. [${null===JR||void 0===JR?void 0:JR.message}]`), {
            appId: iR,
            measurementId: fR
          };
          throw VR
        }
        const yR = 503 === Number(null === (qR = null === JR || void 0 === JR ? void 0 : JR.customData) || void 0 === qR ? void 0 : qR.httpStatus) ? (0, uR.p)(tR, ZR.intervalMillis, 30) : (0, uR.p)(tR, ZR.intervalMillis),
          KR = {
            throttleEndTimeMillis: Date.now() + yR,
            backoffCount: tR + 1
          };
        return ZR.setThrottleMetadata(iR, KR), nJ.debug(`Calling attemptFetch again in ${yR} millis`), gJ(RR, KR, GR, ZR)
      }
    }
    class bJ {
      constructor() {
        this.listeners = []
      }
      addEventListener(RR) {
        this.listeners.push(RR)
      }
      abort() {
        this.listeners.forEach((RR => RR()))
      }
    }
    let vJ, OJ;

    function xJ(RR) {
      OJ = RR
    }

    function NJ(RR) {
      vJ = RR
    }
    async function DJ(RR, JR, GR, yR, tR, ZR, qR) {
      var iR;
      const fR = pJ(RR);
      fR.then((JR => {
        GR[JR.measurementId] = JR.appId, RR.options.measurementId && JR.measurementId !== RR.options.measurementId && nJ.warn(`The measurement ID in the local Firebase config (${RR.options.measurementId}) does not match the measurement ID fetched from the server (${JR.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
      })).catch((RR => nJ.error(RR))), JR.push(fR);
      const VR = async function() {
        if (!(0, uR.Q)()) return nJ.warn(WJ.create("indexeddb-unavailable", {
          errorInfo: "IndexedDB is not available in this environment."
        }).message), !1;
        try {
          await (0, uR.eb)()
        } catch (RR) {
          return nJ.warn(WJ.create("indexeddb-unavailable", {
            errorInfo: null === RR || void 0 === RR ? void 0 : RR.toString()
          }).message), !1
        }
        return !0
      }().then((RR => RR ? yR.getId() : void 0)), [KR, wR] = await Promise.all([fR, VR]);
      (function(RR) {
        const JR = window.document.getElementsByTagName("script");
        for (const GR of Object.values(JR))
          if (GR.src && GR.src.includes(LJ) && GR.src.includes(RR)) return GR;
        return null
      })(ZR) || XJ(ZR, KR.measurementId), OJ && (tR("consent", "default", OJ), xJ(void 0)), tR("js", new Date);
      const rR = null !== (iR = null === qR || void 0 === qR ? void 0 : qR.config) && void 0 !== iR ? iR : {};
      return rR.origin = "firebase", rR.update = !0, null != wR && (rR.firebase_id = wR), tR("config", KR.measurementId, rR), vJ && (tR("set", vJ), NJ(void 0)), KR.measurementId
    }
    class HJ {
      constructor(RR) {
        this.app = RR
      }
      _delete() {
        return delete oJ[this.app.options.appId], Promise.resolve()
      }
    }
    let oJ = {},
      cJ = [];
    const PJ = {};
    let IJ, mJ, zJ = "dataLayer",
      SJ = "gtag",
      jJ = !1;

    function dJ(RR) {
      if (jJ) throw WJ.create("already-initialized");
      RR.dataLayerName && (zJ = RR.dataLayerName), RR.gtagName && (SJ = RR.gtagName)
    }

    function EJ(RR, JR, GR) {
      ! function() {
        const RR = [];
        if ((0, uR.I)() && RR.push("This is a browser extension environment."), (0, uR.i)() || RR.push("Cookies are not available."), RR.length > 0) {
          const JR = RR.map(((RR, JR) => `(${JR+1}) ${RR}`)).join(" "),
            GR = WJ.create("invalid-analytics-context", {
              errorInfo: JR
            });
          nJ.warn(GR.message)
        }
      }();
      const yR = RR.options.appId;
      if (!yR) throw WJ.create("no-app-id");
      if (!RR.options.apiKey) {
        if (!RR.options.measurementId) throw WJ.create("no-api-key");
        nJ.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${RR.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
      }
      if (null != oJ[yR]) throw WJ.create("already-exists", {
        id: yR
      });
      if (!jJ) {
        ! function(RR) {
          let JR = [];
          Array.isArray(window[RR]) ? JR = window[RR] : window[RR] = JR
        }(zJ);
        const {
          wrappedGtag: RR,
          gtagCore: JR
        } = function(RR, JR, GR, yR, tR) {
          let uR = function() {
            for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
            window[yR].push(arguments)
          };
          return window[tR] && "function" === typeof window[tR] && (uR = window[tR]), window[tR] = MJ(uR, RR, JR, GR), {
            gtagCore: uR,
            wrappedGtag: window[tR]
          }
        }(oJ, cJ, PJ, zJ, SJ);
        mJ = RR, IJ = JR, jJ = !0
      }
      oJ[yR] = DJ(RR, cJ, PJ, JR, IJ, zJ, GR);
      return new HJ(RR)
    }

    function YJ() {
      let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, yR.G)();
      RR = (0, uR.C)(RR);
      const JR = (0, yR.t)(RR, aJ);
      return JR.isInitialized() ? JR.getImmediate() : kJ(RR)
    }

    function kJ(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const GR = (0, yR.t)(RR, aJ);
      if (GR.isInitialized()) {
        const RR = GR.getImmediate();
        if ((0, uR.r)(JR, GR.getOptions())) return RR;
        throw WJ.create("already-initialized")
      }
      return GR.initialize({
        options: JR
      })
    }
    async function QJ() {
      if ((0, uR.I)()) return !1;
      if (!(0, uR.i)()) return !1;
      if (!(0, uR.Q)()) return !1;
      try {
        return await (0, uR.eb)()
      } catch (RR) {
        return !1
      }
    }

    function FJ(RR, JR, GR) {
      RR = (0, uR.C)(RR), async function(RR, JR, GR, yR) {
        if (yR && yR.global) return RR("set", {
          screen_name: GR
        }), Promise.resolve();
        RR("config", await JR, {
          update: !0,
          screen_name: GR
        })
      }(mJ, oJ[RR.app.options.appId], JR, GR).catch((RR => nJ.error(RR)))
    }
    async function TJ(RR) {
      return RR = (0, uR.C)(RR), async function(RR, JR) {
        const GR = await JR;
        return new Promise(((JR, yR) => {
          RR("get", GR, "client_id", (RR => {
            RR || yR(WJ.create("no-client-id")), JR(RR)
          }))
        }))
      }(mJ, oJ[RR.app.options.appId])
    }

    function sJ(RR, JR, GR) {
      RR = (0, uR.C)(RR), async function(RR, JR, GR, yR) {
        if (yR && yR.global) return RR("set", {
          user_id: GR
        }), Promise.resolve();
        RR("config", await JR, {
          update: !0,
          user_id: GR
        })
      }(mJ, oJ[RR.app.options.appId], JR, GR).catch((RR => nJ.error(RR)))
    }

    function hJ(RR, JR, GR) {
      RR = (0, uR.C)(RR), async function(RR, JR, GR, yR) {
        if (yR && yR.global) {
          const JR = {};
          for (const RR of Object.keys(GR)) JR[`user_properties.${RR}`] = GR[RR];
          return RR("set", JR), Promise.resolve()
        }
        RR("config", await JR, {
          update: !0,
          user_properties: GR
        })
      }(mJ, oJ[RR.app.options.appId], JR, GR).catch((RR => nJ.error(RR)))
    }

    function RG(RR, JR) {
      RR = (0, uR.C)(RR), async function(RR, JR) {
        const GR = await RR;
        window[`ga-disable-${GR}`] = !JR
      }(oJ[RR.app.options.appId], JR).catch((RR => nJ.error(RR)))
    }

    function JG(RR) {
      mJ ? mJ("set", RR) : NJ(RR)
    }

    function GG(RR, JR, GR, yR) {
      RR = (0, uR.C)(RR), async function(RR, JR, GR, yR, tR) {
        if (tR && tR.global) RR("event", GR, yR);
        else {
          const tR = await JR;
          RR("event", GR, Object.assign(Object.assign({}, yR), {
            send_to: tR
          }))
        }
      }(mJ, oJ[RR.app.options.appId], JR, GR, yR).catch((RR => nJ.error(RR)))
    }

    function yG(RR) {
      mJ ? mJ("consent", "update", RR) : xJ(RR)
    }
    const tG = "@firebase/analytics",
      uG = "0.10.0";
    (0, yR.w)(new ZR.i(aJ, ((RR, JR) => {
      let {
        options: GR
      } = JR;
      return EJ(RR.getProvider("app").getImmediate(), RR.getProvider("installations-internal").getImmediate(), GR)
    }), "PUBLIC")), (0, yR.w)(new ZR.i("analytics-internal", (function(RR) {
      try {
        const JR = RR.getProvider(aJ).getImmediate();
        return {
          logEvent: (RR, GR, yR) => GG(JR, RR, GR, yR)
        }
      } catch (JR) {
        throw WJ.create("interop-component-reg-failed", {
          reason: JR
        })
      }
    }), "PRIVATE")), (0, yR.M)(tG, uG), (0, yR.M)(tG, uG, "esm2017")
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);