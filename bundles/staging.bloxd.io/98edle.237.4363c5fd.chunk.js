/*! For license information please see 98edle.237.4363c5fd.chunk.js.LICENSE.txt */
export const id = 237;
export const ids = [237];
export const modules = {
  38109: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      getAnalytics: () => GR,
      getGoogleAnalyticsClientId: () => qM,
      initializeAnalytics: () => LR,
      isSupported: () => HR,
      logEvent: () => MM,
      setAnalyticsCollectionEnabled: () => WM,
      setConsent: () => wM,
      setCurrentScreen: () => DR,
      setDefaultEventParameters: () => RM,
      setUserId: () => ZR,
      setUserProperties: () => SR,
      settings: () => OR
    });
    var wW = MW(38097),
      CW = MW(38106),
      zR = MW(38103),
      AW = MW(38101);
    let bR, yR;
    const NW = new WeakMap,
      eW = new WeakMap,
      BW = new WeakMap,
      tR = new WeakMap,
      TW = new WeakMap;
    let gR = {
      get(WW, RW, MW) {
        if (WW instanceof IDBTransaction) {
          if ("done" === RW) return eW.get(WW);
          if ("objectStoreNames" === RW) return WW.objectStoreNames || BW.get(WW);
          if ("store" === RW) return MW.objectStoreNames[1] ? void 0 : MW.objectStore(MW.objectStoreNames[0])
        }
        return JW(WW[RW])
      },
      set: (WW, RW, MW) => (WW[RW] = MW, !0),
      has: (WW, RW) => WW instanceof IDBTransaction && ("done" === RW || "store" === RW) || RW in WW
    };

    function iR(WW) {
      return WW !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (yR || (yR = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(WW) ? function() {
        for (var RW = arguments.length, MW = new Array(RW), wW = 0; wW < RW; wW++) MW[wW] = arguments[wW];
        return WW.apply(PW(this), MW), JW(NW.get(this))
      } : function() {
        for (var RW = arguments.length, MW = new Array(RW), wW = 0; wW < RW; wW++) MW[wW] = arguments[wW];
        return JW(WW.apply(PW(this), MW))
      } : function(RW) {
        for (var MW = arguments.length, wW = new Array(MW > 1 ? MW - 1 : 0), CW = 1; CW < MW; CW++) wW[CW - 1] = arguments[CW];
        const zR = WW.call(PW(this), RW, ...wW);
        return BW.set(zR, RW.sort ? RW.sort() : [RW]), JW(zR)
      }
    }

    function YW(WW) {
      return "function" === typeof WW ? iR(WW) : (WW instanceof IDBTransaction && function(WW) {
        if (eW.has(WW)) return;
        const RW = new Promise(((RW, MW) => {
          const wW = () => {
              WW.removeEventListener("complete", CW), WW.removeEventListener("error", zR), WW.removeEventListener("abort", zR)
            },
            CW = () => {
              RW(), wW()
            },
            zR = () => {
              MW(WW.error || new DOMException("AbortError", "AbortError")), wW()
            };
          WW.addEventListener("complete", CW), WW.addEventListener("error", zR), WW.addEventListener("abort", zR)
        }));
        eW.set(WW, RW)
      }(WW), RW = WW, (bR || (bR = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((WW => RW instanceof WW)) ? new Proxy(WW, gR) : WW);
      var RW
    }

    function JW(WW) {
      if (WW instanceof IDBRequest) return function(WW) {
        const RW = new Promise(((RW, MW) => {
          const wW = () => {
              WW.removeEventListener("success", CW), WW.removeEventListener("error", zR)
            },
            CW = () => {
              RW(JW(WW.result)), wW()
            },
            zR = () => {
              MW(WW.error), wW()
            };
          WW.addEventListener("success", CW), WW.addEventListener("error", zR)
        }));
        return RW.then((RW => {
          RW instanceof IDBCursor && NW.set(RW, WW)
        })).catch((() => {})), TW.set(RW, WW), RW
      }(WW);
      if (tR.has(WW)) return tR.get(WW);
      const RW = YW(WW);
      return RW !== WW && (tR.set(WW, RW), TW.set(RW, WW)), RW
    }
    const PW = WW => TW.get(WW);
    const IW = ["get", "getKey", "getAll", "getAllKeys", "count"],
      oW = ["put", "add", "delete", "clear"],
      lW = new Map;

    function FW(WW, RW) {
      if (!(WW instanceof IDBDatabase) || RW in WW || "string" !== typeof RW) return;
      if (lW.get(RW)) return lW.get(RW);
      const MW = RW.replace(/FromIndex$/, ""),
        wW = RW !== MW,
        CW = oW.includes(MW);
      if (!(MW in (wW ? IDBIndex : IDBObjectStore).prototype) || !CW && !IW.includes(MW)) return;
      const zR = async function(WW) {
        const RW = this.transaction(WW, CW ? "readwrite" : "readonly");
        let zR = RW.store;
        for (var AW = arguments.length, bR = new Array(AW > 1 ? AW - 1 : 0), yR = 1; yR < AW; yR++) bR[yR - 1] = arguments[yR];
        return wW && (zR = zR.index(bR.shift())), (await Promise.all([zR[MW](...bR), CW && RW.done]))[0]
      };
      return lW.set(RW, zR), zR
    }
    gR = (WW => ({
      ...WW,
      get: (RW, MW, wW) => FW(RW, MW) || WW.get(RW, MW, wW),
      has: (RW, MW) => !!FW(RW, MW) || WW.has(RW, MW)
    }))(gR);
    const fW = "@firebase/installations",
      QW = "0.6.4",
      rR = 1e4,
      cR = `w:${QW}`,
      XW = "FIS_v2",
      jR = 36e5,
      kR = {
        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
        "not-registered": "Firebase Installation is not registered.",
        "installation-not-found": "Firebase Installation not found.",
        "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        "app-offline": "Could not process request. Application offline.",
        "delete-pending-registration": "Can't delete installation while there is a pending registration request."
      },
      aR = new zR.g("installations", "Installations", kR);

    function sW(WW) {
      return WW instanceof zR.h && WW.code.includes("request-failed")
    }

    function dW(WW) {
      let {
        projectId: RW
      } = WW;
      return `https://firebaseinstallations.googleapis.com/v1/projects/${RW}/installations`
    }

    function pW(WW) {
      return {
        token: WW.token,
        requestStatus: 2,
        expiresIn: (RW = WW.expiresIn, Number(RW.replace("s", "000"))),
        creationTime: Date.now()
      };
      var RW
    }
    async function hW(WW, RW) {
      const MW = (await RW.json()).error;
      return aR.create("request-failed", {
        requestName: WW,
        serverCode: MW.code,
        serverMessage: MW.message,
        serverStatus: MW.status
      })
    }

    function UW(WW) {
      let {
        apiKey: RW
      } = WW;
      return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": RW
      })
    }

    function EW(WW, RW) {
      let {
        refreshToken: MW
      } = RW;
      const wW = UW(WW);
      return wW.append("Authorization", function(WW) {
        return `${XW} ${WW}`
      }(MW)), wW
    }
    async function VW(WW) {
      const RW = await WW();
      return RW.status >= 500 && RW.status < 600 ? WW() : RW
    }

    function mR(WW) {
      return new Promise((RW => {
        setTimeout(RW, WW)
      }))
    }
    const xR = /^[cdef][\w-]{21}$/;

    function vR() {
      try {
        const WW = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(WW), WW[0] = 112 + WW[0] % 16;
        const RW = function(WW) {
          const RW = (MW = WW, btoa(String.fromCharCode(...MW)).replace(/\+/g, "-").replace(/\//g, "_"));
          var MW;
          return RW.substr(0, 22)
        }(WW);
        return xR.test(RW) ? RW : ""
      } catch (WW) {
        return ""
      }
    }

    function KW(WW) {
      return `${WW.appName}!${WW.appId}`
    }
    const uW = new Map;

    function OW(WW, RW) {
      const MW = KW(WW);
      nW(MW, RW),
        function(WW, RW) {
          const MW = LW();
          MW && MW.postMessage({
            key: WW,
            fid: RW
          });
          HW()
        }(MW, RW)
    }

    function nW(WW, RW) {
      const MW = uW.get(WW);
      if (MW)
        for (const wW of MW) wW(RW)
    }
    let GW = null;

    function LW() {
      return !GW && "BroadcastChannel" in self && (GW = new BroadcastChannel("[Firebase] FID Change"), GW.onmessage = WW => {
        nW(WW.data.key, WW.data.fid)
      }), GW
    }

    function HW() {
      0 === uW.size && GW && (GW.close(), GW = null)
    }
    const DW = "firebase-installations-store";
    let qR = null;

    function ZW() {
      return qR || (qR = function(WW, RW) {
        let {
          blocked: MW,
          upgrade: wW,
          blocking: CW,
          terminated: zR
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const AW = indexedDB.open(WW, RW),
          bR = JW(AW);
        return wW && AW.addEventListener("upgradeneeded", (WW => {
          wW(JW(AW.result), WW.oldVersion, WW.newVersion, JW(AW.transaction))
        })), MW && AW.addEventListener("blocked", (() => MW())), bR.then((WW => {
          zR && WW.addEventListener("close", (() => zR())), CW && WW.addEventListener("versionchange", (() => CW()))
        })).catch((() => {})), bR
      }("firebase-installations-database", 1, {
        upgrade: (WW, RW) => {
          if (0 === RW) WW.createObjectStore(DW)
        }
      })), qR
    }
    async function SW(WW, RW) {
      const MW = KW(WW),
        wW = (await ZW()).transaction(DW, "readwrite"),
        CW = wW.objectStore(DW),
        zR = await CW.get(MW);
      return await CW.put(RW, MW), await wW.done, zR && zR.fid === RW.fid || OW(WW, RW.fid), RW
    }
    async function WR(WW) {
      const RW = KW(WW),
        MW = (await ZW()).transaction(DW, "readwrite");
      await MW.objectStore(DW).delete(RW), await MW.done
    }
    async function RR(WW, RW) {
      const MW = KW(WW),
        wW = (await ZW()).transaction(DW, "readwrite"),
        CW = wW.objectStore(DW),
        zR = await CW.get(MW),
        AW = RW(zR);
      return void 0 === AW ? await CW.delete(MW) : await CW.put(AW, MW), await wW.done, !AW || zR && zR.fid === AW.fid || OW(WW, AW.fid), AW
    }
    async function MR(WW) {
      let RW;
      const MW = await RR(WW.appConfig, (MW => {
        const wW = function(WW) {
            const RW = WW || {
              fid: vR(),
              registrationStatus: 0
            };
            return zM(RW)
          }(MW),
          CW = function(WW, RW) {
            if (0 === RW.registrationStatus) {
              if (!navigator.onLine) {
                return {
                  installationEntry: RW,
                  registrationPromise: Promise.reject(aR.create("app-offline"))
                }
              }
              const MW = {
                  fid: RW.fid,
                  registrationStatus: 1,
                  registrationTime: Date.now()
                },
                wW = async function(WW, RW) {
                  try {
                    const MW = await async function(WW, RW) {
                      let {
                        appConfig: MW,
                        heartbeatServiceProvider: wW
                      } = WW, {
                        fid: CW
                      } = RW;
                      const zR = dW(MW),
                        AW = UW(MW),
                        bR = wW.getImmediate({
                          optional: !0
                        });
                      if (bR) {
                        const WW = await bR.getHeartbeatsHeader();
                        WW && AW.append("x-firebase-client", WW)
                      }
                      const yR = {
                          fid: CW,
                          authVersion: XW,
                          appId: MW.appId,
                          sdkVersion: cR
                        },
                        NW = {
                          method: "POST",
                          headers: AW,
                          body: JSON.stringify(yR)
                        },
                        eW = await VW((() => fetch(zR, NW)));
                      if (eW.ok) {
                        const WW = await eW.json();
                        return {
                          fid: WW.fid || CW,
                          registrationStatus: 2,
                          refreshToken: WW.refreshToken,
                          authToken: pW(WW.authToken)
                        }
                      }
                      throw await hW("Create Installation", eW)
                    }(WW, RW);
                    return SW(WW.appConfig, MW)
                  } catch (MW) {
                    throw sW(MW) && 409 === MW.customData.serverCode ? await WR(WW.appConfig) : await SW(WW.appConfig, {
                      fid: RW.fid,
                      registrationStatus: 0
                    }), MW
                  }
                }(WW, MW);
              return {
                installationEntry: MW,
                registrationPromise: wW
              }
            }
            return 1 === RW.registrationStatus ? {
              installationEntry: RW,
              registrationPromise: wR(WW)
            } : {
              installationEntry: RW
            }
          }(WW, wW);
        return RW = CW.registrationPromise, CW.installationEntry
      }));
      return "" === MW.fid ? {
        installationEntry: await RW
      } : {
        installationEntry: MW,
        registrationPromise: RW
      }
    }
    async function wR(WW) {
      let RW = await CR(WW.appConfig);
      for (; 1 === RW.registrationStatus;) await mR(100), RW = await CR(WW.appConfig);
      if (0 === RW.registrationStatus) {
        const {
          installationEntry: RW,
          registrationPromise: MW
        } = await MR(WW);
        return MW || RW
      }
      return RW
    }

    function CR(WW) {
      return RR(WW, (WW => {
        if (!WW) throw aR.create("installation-not-found");
        return zM(WW)
      }))
    }

    function zM(WW) {
      return 1 === (RW = WW).registrationStatus && RW.registrationTime + rR < Date.now() ? {
        fid: WW.fid,
        registrationStatus: 0
      } : WW;
      var RW
    }
    async function AR(WW, RW) {
      let {
        appConfig: MW,
        heartbeatServiceProvider: wW
      } = WW;
      const CW = function(WW, RW) {
          let {
            fid: MW
          } = RW;
          return `${dW(WW)}/${MW}/authTokens:generate`
        }(MW, RW),
        zR = EW(MW, RW),
        AW = wW.getImmediate({
          optional: !0
        });
      if (AW) {
        const WW = await AW.getHeartbeatsHeader();
        WW && zR.append("x-firebase-client", WW)
      }
      const bR = {
          installation: {
            sdkVersion: cR,
            appId: MW.appId
          }
        },
        yR = {
          method: "POST",
          headers: zR,
          body: JSON.stringify(bR)
        },
        NW = await VW((() => fetch(CW, yR)));
      if (NW.ok) {
        return pW(await NW.json())
      }
      throw await hW("Generate Auth Token", NW)
    }
    async function bM(WW) {
      let RW, MW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const wW = await RR(WW.appConfig, (wW => {
        if (!NR(wW)) throw aR.create("not-registered");
        const CW = wW.authToken;
        if (!MW && function(WW) {
            return 2 === WW.requestStatus && ! function(WW) {
              const RW = Date.now();
              return RW < WW.creationTime || WW.creationTime + WW.expiresIn < RW + jR
            }(WW)
          }(CW)) return wW;
        if (1 === CW.requestStatus) return RW = async function(WW, RW) {
          let MW = await yM(WW.appConfig);
          for (; 1 === MW.authToken.requestStatus;) await mR(100), MW = await yM(WW.appConfig);
          const wW = MW.authToken;
          return 0 === wW.requestStatus ? bM(WW, RW) : wW
        }(WW, MW), wW;
        {
          if (!navigator.onLine) throw aR.create("app-offline");
          const MW = function(WW) {
            const RW = {
              requestStatus: 1,
              requestTime: Date.now()
            };
            return Object.assign(Object.assign({}, WW), {
              authToken: RW
            })
          }(wW);
          return RW = async function(WW, RW) {
            try {
              const MW = await AR(WW, RW),
                wW = Object.assign(Object.assign({}, RW), {
                  authToken: MW
                });
              return await SW(WW.appConfig, wW), MW
            } catch (MW) {
              if (!sW(MW) || 401 !== MW.customData.serverCode && 404 !== MW.customData.serverCode) {
                const MW = Object.assign(Object.assign({}, RW), {
                  authToken: {
                    requestStatus: 0
                  }
                });
                await SW(WW.appConfig, MW)
              } else await WR(WW.appConfig);
              throw MW
            }
          }(WW, MW), MW
        }
      }));
      return RW ? await RW : wW.authToken
    }

    function yM(WW) {
      return RR(WW, (WW => {
        if (!NR(WW)) throw aR.create("not-registered");
        const RW = WW.authToken;
        return 1 === (MW = RW).requestStatus && MW.requestTime + rR < Date.now() ? Object.assign(Object.assign({}, WW), {
          authToken: {
            requestStatus: 0
          }
        }) : WW;
        var MW
      }))
    }

    function NR(WW) {
      return void 0 !== WW && 2 === WW.registrationStatus
    }
    async function eR(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const MW = WW;
      await async function(WW) {
        const {
          registrationPromise: RW
        } = await MR(WW);
        RW && await RW
      }(MW);
      return (await bM(MW, RW)).token
    }

    function BR(WW) {
      return aR.create("missing-app-config-values", {
        valueName: WW
      })
    }
    const tM = "installations",
      TR = WW => {
        const RW = WW.getProvider("app").getImmediate(),
          MW = function(WW) {
            if (!WW || !WW.options) throw BR("App Configuration");
            if (!WW.name) throw BR("App Name");
            const RW = ["projectId", "apiKey", "appId"];
            for (const MW of RW)
              if (!WW.options[MW]) throw BR(MW);
            return {
              appName: WW.name,
              projectId: WW.options.projectId,
              apiKey: WW.options.apiKey,
              appId: WW.options.appId
            }
          }(RW);
        return {
          app: RW,
          appConfig: MW,
          heartbeatServiceProvider: (0, wW.t)(RW, "heartbeat"),
          _delete: () => Promise.resolve()
        }
      },
      gM = WW => {
        const RW = WW.getProvider("app").getImmediate(),
          MW = (0, wW.t)(RW, tM).getImmediate();
        return {
          getId: () => async function(WW) {
            const RW = WW,
              {
                installationEntry: MW,
                registrationPromise: wW
              } = await MR(RW);
            return wW ? wW.catch(console.error) : bM(RW).catch(console.error), MW.fid
          }(MW),
          getToken: WW => eR(MW, WW)
        }
      };
    (0, wW.w)(new AW.e(tM, TR, "PUBLIC")), (0, wW.w)(new AW.e("installations-internal", gM, "PRIVATE")), (0, wW.M)(fW, QW), (0, wW.M)(fW, QW, "esm2017");
    const iM = "analytics",
      YR = "https://www.googletagmanager.com/gtag/js",
      JR = new CW.f("@firebase/analytics"),
      PR = {
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
      IR = new zR.g("analytics", "Analytics", PR);

    function oR(WW) {
      if (!WW.startsWith(YR)) {
        const RW = IR.create("invalid-gtag-resource", {
          gtagURL: WW
        });
        return JR.warn(RW.message), ""
      }
      return WW
    }

    function lR(WW) {
      return Promise.all(WW.map((WW => WW.catch((WW => WW)))))
    }

    function FR(WW, RW) {
      const MW = function(WW, RW) {
          let MW;
          return window.trustedTypes && (MW = window.trustedTypes.createPolicy(WW, RW)), MW
        }("firebase-js-sdk-policy", {
          createScriptURL: oR
        }),
        wW = document.createElement("script"),
        CW = `${YR}?l=${WW}&id=${RW}`;
      wW.src = MW ? null === MW || void 0 === MW ? void 0 : MW.createScriptURL(CW) : CW, wW.async = !0, document.head.appendChild(wW)
    }

    function fR(WW, RW, MW, wW) {
      return async function(CW) {
        try {
          for (var zR = arguments.length, AW = new Array(zR > 1 ? zR - 1 : 0), bR = 1; bR < zR; bR++) AW[bR - 1] = arguments[bR];
          if ("event" === CW) {
            const [wW, CW] = AW;
            await async function(WW, RW, MW, wW, CW) {
              try {
                let zR = [];
                if (CW && CW.send_to) {
                  let WW = CW.send_to;
                  Array.isArray(WW) || (WW = [WW]);
                  const wW = await lR(MW);
                  for (const MW of WW) {
                    const WW = wW.find((WW => WW.measurementId === MW)),
                      CW = WW && RW[WW.appId];
                    if (!CW) {
                      zR = [];
                      break
                    }
                    zR.push(CW)
                  }
                }
                0 === zR.length && (zR = Object.values(RW)), await Promise.all(zR), WW("event", wW, CW || {})
              } catch (zR) {
                JR.error(zR)
              }
            }(WW, RW, MW, wW, CW)
          } else if ("config" === CW) {
            const [CW, zR] = AW;
            await async function(WW, RW, MW, wW, CW, zR) {
              const AW = wW[CW];
              try {
                if (AW) await RW[AW];
                else {
                  const WW = (await lR(MW)).find((WW => WW.measurementId === CW));
                  WW && await RW[WW.appId]
                }
              } catch (bR) {
                JR.error(bR)
              }
              WW("config", CW, zR)
            }(WW, RW, MW, wW, CW, zR)
          } else if ("consent" === CW) {
            const [RW] = AW;
            WW("consent", "update", RW)
          } else if ("get" === CW) {
            const [RW, MW, wW] = AW;
            WW("get", RW, MW, wW)
          } else if ("set" === CW) {
            const [RW] = AW;
            WW("set", RW)
          } else WW(CW, ...AW)
        } catch (yR) {
          JR.error(yR)
        }
      }
    }
    const QR = new class {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
        this.throttleMetadata = WW, this.intervalMillis = RW
      }
      getThrottleMetadata(WW) {
        return this.throttleMetadata[WW]
      }
      setThrottleMetadata(WW, RW) {
        this.throttleMetadata[WW] = RW
      }
      deleteThrottleMetadata(WW) {
        delete this.throttleMetadata[WW]
      }
    };

    function rM(WW) {
      return new Headers({
        Accept: "application/json",
        "x-goog-api-key": WW
      })
    }
    async function cM(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QR,
        MW = arguments.length > 2 ? arguments[2] : void 0;
      const {
        appId: wW,
        apiKey: CW,
        measurementId: zR
      } = WW.options;
      if (!wW) throw IR.create("no-app-id");
      if (!CW) {
        if (zR) return {
          measurementId: zR,
          appId: wW
        };
        throw IR.create("no-api-key")
      }
      const AW = RW.getThrottleMetadata(wW) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        },
        bR = new jM;
      return setTimeout((async () => {
        bR.abort()
      }), void 0 !== MW ? MW : 6e4), XR({
        appId: wW,
        apiKey: CW,
        measurementId: zR
      }, AW, bR, RW)
    }
    async function XR(WW, RW, MW) {
      let {
        throttleEndTimeMillis: wW,
        backoffCount: CW
      } = RW, AW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : QR;
      var bR;
      const {
        appId: yR,
        measurementId: NW
      } = WW;
      try {
        await
        function(WW, RW) {
          return new Promise(((MW, wW) => {
            const CW = Math.max(RW - Date.now(), 0),
              zR = setTimeout(MW, CW);
            WW.addEventListener((() => {
              clearTimeout(zR), wW(IR.create("fetch-throttle", {
                throttleEndTimeMillis: RW
              }))
            }))
          }))
        }(MW, wW)
      } catch (eW) {
        if (NW) return JR.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${NW} provided in the "measurementId" field in the local Firebase config. [${null===eW||void 0===eW?void 0:eW.message}]`), {
          appId: yR,
          measurementId: NW
        };
        throw eW
      }
      try {
        const RW = await async function(WW) {
          var RW;
          const {
            appId: MW,
            apiKey: wW
          } = WW, CW = {
            method: "GET",
            headers: rM(wW)
          }, zR = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", MW), AW = await fetch(zR, CW);
          if (200 !== AW.status && 304 !== AW.status) {
            let WW = "";
            try {
              const MW = await AW.json();
              (null === (RW = MW.error) || void 0 === RW ? void 0 : RW.message) && (WW = MW.error.message)
            } catch (bR) {}
            throw IR.create("config-fetch-failed", {
              httpStatus: AW.status,
              responseMessage: WW
            })
          }
          return AW.json()
        }(WW);
        return AW.deleteThrottleMetadata(yR), RW
      } catch (eW) {
        const RW = eW;
        if (! function(WW) {
            if (!(WW instanceof zR.h) || !WW.customData) return !1;
            const RW = Number(WW.customData.httpStatus);
            return 429 === RW || 500 === RW || 503 === RW || 504 === RW
          }(RW)) {
          if (AW.deleteThrottleMetadata(yR), NW) return JR.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${NW} provided in the "measurementId" field in the local Firebase config. [${null===RW||void 0===RW?void 0:RW.message}]`), {
            appId: yR,
            measurementId: NW
          };
          throw eW
        }
        const wW = 503 === Number(null === (bR = null === RW || void 0 === RW ? void 0 : RW.customData) || void 0 === bR ? void 0 : bR.httpStatus) ? (0, zR.q)(CW, AW.intervalMillis, 30) : (0, zR.q)(CW, AW.intervalMillis),
          BW = {
            throttleEndTimeMillis: Date.now() + wW,
            backoffCount: CW + 1
          };
        return AW.setThrottleMetadata(yR, BW), JR.debug(`Calling attemptFetch again in ${wW} millis`), XR(WW, BW, MW, AW)
      }
    }
    class jM {
      constructor() {
        this.listeners = []
      }
      addEventListener(WW) {
        this.listeners.push(WW)
      }
      abort() {
        this.listeners.forEach((WW => WW()))
      }
    }
    let kM, aM;

    function sR(WW) {
      aM = WW
    }

    function dR(WW) {
      kM = WW
    }
    async function pR(WW, RW, MW, wW, CW, AW, bR) {
      var yR;
      const NW = cM(WW);
      NW.then((RW => {
        MW[RW.measurementId] = RW.appId, WW.options.measurementId && RW.measurementId !== WW.options.measurementId && JR.warn(`The measurement ID in the local Firebase config (${WW.options.measurementId}) does not match the measurement ID fetched from the server (${RW.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
      })).catch((WW => JR.error(WW))), RW.push(NW);
      const eW = async function() {
        if (!(0, zR.Z)()) return JR.warn(IR.create("indexeddb-unavailable", {
          errorInfo: "IndexedDB is not available in this environment."
        }).message), !1;
        try {
          await (0, zR.ib)()
        } catch (WW) {
          return JR.warn(IR.create("indexeddb-unavailable", {
            errorInfo: null === WW || void 0 === WW ? void 0 : WW.toString()
          }).message), !1
        }
        return !0
      }().then((WW => WW ? wW.getId() : void 0)), [BW, tR] = await Promise.all([NW, eW]);
      (function(WW) {
        const RW = window.document.getElementsByTagName("script");
        for (const MW of Object.values(RW))
          if (MW.src && MW.src.includes(YR) && MW.src.includes(WW)) return MW;
        return null
      })(AW) || FR(AW, BW.measurementId), aM && (CW("consent", "default", aM), sR(void 0)), CW("js", new Date);
      const TW = null !== (yR = null === bR || void 0 === bR ? void 0 : bR.config) && void 0 !== yR ? yR : {};
      return TW.origin = "firebase", TW.update = !0, null != tR && (TW.firebase_id = tR), CW("config", BW.measurementId, TW), kM && (CW("set", kM), dR(void 0)), BW.measurementId
    }
    class hR {
      constructor(WW) {
        this.app = WW
      }
      _delete() {
        return delete UR[this.app.options.appId], Promise.resolve()
      }
    }
    let UR = {},
      ER = [];
    const VR = {};
    let mM, xM, vM = "dataLayer",
      KR = "gtag",
      uR = !1;

    function OR(WW) {
      if (uR) throw IR.create("already-initialized");
      WW.dataLayerName && (vM = WW.dataLayerName), WW.gtagName && (KR = WW.gtagName)
    }

    function nR(WW, RW, MW) {
      ! function() {
        const WW = [];
        if ((0, zR.Q)() && WW.push("This is a browser extension environment."), (0, zR.i)() || WW.push("Cookies are not available."), WW.length > 0) {
          const RW = WW.map(((WW, RW) => `(${RW+1}) ${WW}`)).join(" "),
            MW = IR.create("invalid-analytics-context", {
              errorInfo: RW
            });
          JR.warn(MW.message)
        }
      }();
      const wW = WW.options.appId;
      if (!wW) throw IR.create("no-app-id");
      if (!WW.options.apiKey) {
        if (!WW.options.measurementId) throw IR.create("no-api-key");
        JR.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${WW.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
      }
      if (null != UR[wW]) throw IR.create("already-exists", {
        id: wW
      });
      if (!uR) {
        ! function(WW) {
          let RW = [];
          Array.isArray(window[WW]) ? RW = window[WW] : window[WW] = RW
        }(vM);
        const {
          wrappedGtag: WW,
          gtagCore: RW
        } = function(WW, RW, MW, wW, CW) {
          let zR = function() {
            for (var WW = arguments.length, RW = new Array(WW), MW = 0; MW < WW; MW++) RW[MW] = arguments[MW];
            window[wW].push(arguments)
          };
          return window[CW] && "function" === typeof window[CW] && (zR = window[CW]), window[CW] = fR(zR, WW, RW, MW), {
            gtagCore: zR,
            wrappedGtag: window[CW]
          }
        }(UR, ER, VR, vM, KR);
        xM = WW, mM = RW, uR = !0
      }
      UR[wW] = pR(WW, ER, VR, RW, mM, vM, MW);
      return new hR(WW)
    }

    function GR() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, wW.E)();
      WW = (0, zR.K)(WW);
      const RW = (0, wW.t)(WW, iM);
      return RW.isInitialized() ? RW.getImmediate() : LR(WW)
    }

    function LR(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const MW = (0, wW.t)(WW, iM);
      if (MW.isInitialized()) {
        const WW = MW.getImmediate();
        if ((0, zR.v)(RW, MW.getOptions())) return WW;
        throw IR.create("already-initialized")
      }
      return MW.initialize({
        options: RW
      })
    }
    async function HR() {
      if ((0, zR.Q)()) return !1;
      if (!(0, zR.i)()) return !1;
      if (!(0, zR.Z)()) return !1;
      try {
        return await (0, zR.ib)()
      } catch (WW) {
        return !1
      }
    }

    function DR(WW, RW, MW) {
      WW = (0, zR.K)(WW), async function(WW, RW, MW, wW) {
        if (wW && wW.global) return WW("set", {
          screen_name: MW
        }), Promise.resolve();
        WW("config", await RW, {
          update: !0,
          screen_name: MW
        })
      }(xM, UR[WW.app.options.appId], RW, MW).catch((WW => JR.error(WW)))
    }
    async function qM(WW) {
      return WW = (0, zR.K)(WW), async function(WW, RW) {
        const MW = await RW;
        return new Promise(((RW, wW) => {
          WW("get", MW, "client_id", (WW => {
            WW || wW(IR.create("no-client-id")), RW(WW)
          }))
        }))
      }(xM, UR[WW.app.options.appId])
    }

    function ZR(WW, RW, MW) {
      WW = (0, zR.K)(WW), async function(WW, RW, MW, wW) {
        if (wW && wW.global) return WW("set", {
          user_id: MW
        }), Promise.resolve();
        WW("config", await RW, {
          update: !0,
          user_id: MW
        })
      }(xM, UR[WW.app.options.appId], RW, MW).catch((WW => JR.error(WW)))
    }

    function SR(WW, RW, MW) {
      WW = (0, zR.K)(WW), async function(WW, RW, MW, wW) {
        if (wW && wW.global) {
          const RW = {};
          for (const WW of Object.keys(MW)) RW[`user_properties.${WW}`] = MW[WW];
          return WW("set", RW), Promise.resolve()
        }
        WW("config", await RW, {
          update: !0,
          user_properties: MW
        })
      }(xM, UR[WW.app.options.appId], RW, MW).catch((WW => JR.error(WW)))
    }

    function WM(WW, RW) {
      WW = (0, zR.K)(WW), async function(WW, RW) {
        const MW = await WW;
        window[`ga-disable-${MW}`] = !RW
      }(UR[WW.app.options.appId], RW).catch((WW => JR.error(WW)))
    }

    function RM(WW) {
      xM ? xM("set", WW) : dR(WW)
    }

    function MM(WW, RW, MW, wW) {
      WW = (0, zR.K)(WW), async function(WW, RW, MW, wW, CW) {
        if (CW && CW.global) WW("event", MW, wW);
        else {
          const CW = await RW;
          WW("event", MW, Object.assign(Object.assign({}, wW), {
            send_to: CW
          }))
        }
      }(xM, UR[WW.app.options.appId], RW, MW, wW).catch((WW => JR.error(WW)))
    }

    function wM(WW) {
      xM ? xM("consent", "update", WW) : sR(WW)
    }
    const CM = "@firebase/analytics",
      zw = "0.10.0";
    (0, wW.w)(new AW.e(iM, ((WW, RW) => {
      let {
        options: MW
      } = RW;
      return nR(WW.getProvider("app").getImmediate(), WW.getProvider("installations-internal").getImmediate(), MW)
    }), "PUBLIC")), (0, wW.w)(new AW.e("analytics-internal", (function(WW) {
      try {
        const RW = WW.getProvider(iM).getImmediate();
        return {
          logEvent: (WW, MW, wW) => MM(RW, WW, MW, wW)
        }
      } catch (RW) {
        throw IR.create("interop-component-reg-failed", {
          reason: RW
        })
      }
    }), "PRIVATE")), (0, wW.M)(CM, zw), (0, wW.M)(CM, zw, "esm2017")
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);