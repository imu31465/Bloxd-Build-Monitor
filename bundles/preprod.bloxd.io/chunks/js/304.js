/*! For license information please see 1yqdn.304.b09aaf6d.chunk.js.LICENSE.txt */
export const id = 304;
export const ids = [304];
export const modules = {
  42045: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      getAnalytics: () => ai,
      getGoogleAnalyticsClientId: () => Qi,
      initializeAnalytics: () => ri,
      isSupported: () => zi,
      logEvent: () => EO,
      setAnalyticsCollectionEnabled: () => OO,
      setConsent: () => NO,
      setCurrentScreen: () => Fi,
      setDefaultEventParameters: () => mO,
      setUserId: () => WO,
      setUserProperties: () => iO,
      settings: () => Gi
    });
    var mW = OW(42035),
      EW = OW(42043),
      NW = OW(42041),
      PW = OW(42038);
    let LW, cW;
    const wW = new WeakMap,
      tW = new WeakMap,
      ZW = new WeakMap,
      xW = new WeakMap,
      lW = new WeakMap;
    let AW = {
      get(WW, iW, OW) {
        if (WW instanceof IDBTransaction) {
          if ("done" === iW) return tW.get(WW);
          if ("objectStoreNames" === iW) return WW.objectStoreNames || ZW.get(WW);
          if ("store" === iW) return OW.objectStoreNames[1] ? void 0 : OW.objectStore(OW.objectStoreNames[0])
        }
        return UW(WW[iW])
      },
      set: (WW, iW, OW) => (WW[iW] = OW, !0),
      has: (WW, iW) => WW instanceof IDBTransaction && ("done" === iW || "store" === iW) || iW in WW
    };

    function bW(WW) {
      return WW !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (cW || (cW = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(WW) ? function() {
        for (var iW = arguments.length, OW = new Array(iW), mW = 0; mW < iW; mW++) OW[mW] = arguments[mW];
        return WW.apply(kW(this), OW), UW(wW.get(this))
      } : function() {
        for (var iW = arguments.length, OW = new Array(iW), mW = 0; mW < iW; mW++) OW[mW] = arguments[mW];
        return UW(WW.apply(kW(this), OW))
      } : function(iW) {
        for (var OW = arguments.length, mW = new Array(OW > 1 ? OW - 1 : 0), EW = 1; EW < OW; EW++) mW[EW - 1] = arguments[EW];
        const NW = WW.call(kW(this), iW, ...mW);
        return ZW.set(NW, iW.sort ? iW.sort() : [iW]), UW(NW)
      }
    }

    function jW(WW) {
      return "function" === typeof WW ? bW(WW) : (WW instanceof IDBTransaction && function(WW) {
        if (tW.has(WW)) return;
        const iW = new Promise(((iW, OW) => {
          const mW = () => {
              WW.removeEventListener("complete", EW), WW.removeEventListener("error", NW), WW.removeEventListener("abort", NW)
            },
            EW = () => {
              iW(), mW()
            },
            NW = () => {
              OW(WW.error || new DOMException("AbortError", "AbortError")), mW()
            };
          WW.addEventListener("complete", EW), WW.addEventListener("error", NW), WW.addEventListener("abort", NW)
        }));
        tW.set(WW, iW)
      }(WW), iW = WW, (LW || (LW = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((WW => iW instanceof WW)) ? new Proxy(WW, AW) : WW);
      var iW
    }

    function UW(WW) {
      if (WW instanceof IDBRequest) return function(WW) {
        const iW = new Promise(((iW, OW) => {
          const mW = () => {
              WW.removeEventListener("success", EW), WW.removeEventListener("error", NW)
            },
            EW = () => {
              iW(UW(WW.result)), mW()
            },
            NW = () => {
              OW(WW.error), mW()
            };
          WW.addEventListener("success", EW), WW.addEventListener("error", NW)
        }));
        return iW.then((iW => {
          iW instanceof IDBCursor && wW.set(iW, WW)
        })).catch((() => {})), lW.set(iW, WW), iW
      }(WW);
      if (xW.has(WW)) return xW.get(WW);
      const iW = jW(WW);
      return iW !== WW && (xW.set(WW, iW), lW.set(iW, WW)), iW
    }
    const kW = WW => lW.get(WW);
    const sW = ["get", "getKey", "getAll", "getAllKeys", "count"],
      MW = ["put", "add", "delete", "clear"],
      KW = new Map;

    function SW(WW, iW) {
      if (!(WW instanceof IDBDatabase) || iW in WW || "string" !== typeof iW) return;
      if (KW.get(iW)) return KW.get(iW);
      const OW = iW.replace(/FromIndex$/, ""),
        mW = iW !== OW,
        EW = MW.includes(OW);
      if (!(OW in (mW ? IDBIndex : IDBObjectStore).prototype) || !EW && !sW.includes(OW)) return;
      const NW = async function(WW) {
        const iW = this.transaction(WW, EW ? "readwrite" : "readonly");
        let NW = iW.store;
        for (var PW = arguments.length, LW = new Array(PW > 1 ? PW - 1 : 0), cW = 1; cW < PW; cW++) LW[cW - 1] = arguments[cW];
        return mW && (NW = NW.index(LW.shift())), (await Promise.all([NW[OW](...LW), EW && iW.done]))[0]
      };
      return KW.set(iW, NW), NW
    }
    AW = (WW => ({
      ...WW,
      get: (iW, OW, mW) => SW(iW, OW) || WW.get(iW, OW, mW),
      has: (iW, OW) => !!SW(iW, OW) || WW.has(iW, OW)
    }))(AW);
    const YW = "@firebase/installations",
      yW = "0.6.4",
      TW = 1e4,
      JW = `w:${yW}`,
      hW = "FIS_v2",
      HW = 36e5,
      nW = {
        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
        "not-registered": "Firebase Installation is not registered.",
        "installation-not-found": "Firebase Installation not found.",
        "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        "app-offline": "Could not process request. Application offline.",
        "delete-pending-registration": "Can't delete installation while there is a pending registration request."
      },
      uW = new NW.h("installations", "Installations", nW);

    function oW(WW) {
      return WW instanceof NW.k && WW.code.includes("request-failed")
    }

    function dW(WW) {
      let {
        projectId: iW
      } = WW;
      return `https://firebaseinstallations.googleapis.com/v1/projects/${iW}/installations`
    }

    function eW(WW) {
      return {
        token: WW.token,
        requestStatus: 2,
        expiresIn: (iW = WW.expiresIn, Number(iW.replace("s", "000"))),
        creationTime: Date.now()
      };
      var iW
    }
    async function vW(WW, iW) {
      const OW = (await iW.json()).error;
      return uW.create("request-failed", {
        requestName: WW,
        serverCode: OW.code,
        serverMessage: OW.message,
        serverStatus: OW.status
      })
    }

    function gW(WW) {
      let {
        apiKey: iW
      } = WW;
      return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": iW
      })
    }

    function DW(WW, iW) {
      let {
        refreshToken: OW
      } = iW;
      const mW = gW(WW);
      return mW.append("Authorization", function(WW) {
        return `${hW} ${WW}`
      }(OW)), mW
    }
    async function VW(WW) {
      const iW = await WW();
      return iW.status >= 500 && iW.status < 600 ? WW() : iW
    }

    function pW(WW) {
      return new Promise((iW => {
        setTimeout(iW, WW)
      }))
    }
    const fW = /^[cdef][\w-]{21}$/;

    function CW() {
      try {
        const WW = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(WW), WW[0] = 112 + WW[0] % 16;
        const iW = function(WW) {
          const iW = (OW = WW, btoa(String.fromCharCode(...OW)).replace(/\+/g, "-").replace(/\//g, "_"));
          var OW;
          return iW.substr(0, 22)
        }(WW);
        return fW.test(iW) ? iW : ""
      } catch (WW) {
        return ""
      }
    }

    function XW(WW) {
      return `${WW.appName}!${WW.appId}`
    }
    const BW = new Map;

    function qW(WW, iW) {
      const OW = XW(WW);
      RW(OW, iW),
        function(WW, iW) {
          const OW = IW();
          OW && OW.postMessage({
            key: WW,
            fid: iW
          });
          aW()
        }(OW, iW)
    }

    function RW(WW, iW) {
      const OW = BW.get(WW);
      if (OW)
        for (const mW of OW) mW(iW)
    }
    let GW = null;

    function IW() {
      return !GW && "BroadcastChannel" in self && (GW = new BroadcastChannel("[Firebase] FID Change"), GW.onmessage = WW => {
        RW(WW.data.key, WW.data.fid)
      }), GW
    }

    function aW() {
      0 === BW.size && GW && (GW.close(), GW = null)
    }
    const rW = "firebase-installations-store";
    let zW = null;

    function FW() {
      return zW || (zW = function(WW, iW) {
        let {
          blocked: OW,
          upgrade: mW,
          blocking: EW,
          terminated: NW
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const PW = indexedDB.open(WW, iW),
          LW = UW(PW);
        return mW && PW.addEventListener("upgradeneeded", (WW => {
          mW(UW(PW.result), WW.oldVersion, WW.newVersion, UW(PW.transaction))
        })), OW && PW.addEventListener("blocked", (() => OW())), LW.then((WW => {
          NW && WW.addEventListener("close", (() => NW())), EW && WW.addEventListener("versionchange", (() => EW()))
        })).catch((() => {})), LW
      }("firebase-installations-database", 1, {
        upgrade: (WW, iW) => {
          if (0 === iW) WW.createObjectStore(rW)
        }
      })), zW
    }
    async function QW(WW, iW) {
      const OW = XW(WW),
        mW = (await FW()).transaction(rW, "readwrite"),
        EW = mW.objectStore(rW),
        NW = await EW.get(OW);
      return await EW.put(iW, OW), await mW.done, NW && NW.fid === iW.fid || qW(WW, iW.fid), iW
    }
    async function Wi(WW) {
      const iW = XW(WW),
        OW = (await FW()).transaction(rW, "readwrite");
      await OW.objectStore(rW).delete(iW), await OW.done
    }
    async function ii(WW, iW) {
      const OW = XW(WW),
        mW = (await FW()).transaction(rW, "readwrite"),
        EW = mW.objectStore(rW),
        NW = await EW.get(OW),
        PW = iW(NW);
      return void 0 === PW ? await EW.delete(OW) : await EW.put(PW, OW), await mW.done, !PW || NW && NW.fid === PW.fid || qW(WW, PW.fid), PW
    }
    async function Oi(WW) {
      let iW;
      const OW = await ii(WW.appConfig, (OW => {
        const mW = function(WW) {
            const iW = WW || {
              fid: CW(),
              registrationStatus: 0
            };
            return Ni(iW)
          }(OW),
          EW = function(WW, iW) {
            if (0 === iW.registrationStatus) {
              if (!navigator.onLine) {
                return {
                  installationEntry: iW,
                  registrationPromise: Promise.reject(uW.create("app-offline"))
                }
              }
              const OW = {
                  fid: iW.fid,
                  registrationStatus: 1,
                  registrationTime: Date.now()
                },
                mW = async function(WW, iW) {
                  try {
                    const OW = await async function(WW, iW) {
                      let {
                        appConfig: OW,
                        heartbeatServiceProvider: mW
                      } = WW, {
                        fid: EW
                      } = iW;
                      const NW = dW(OW),
                        PW = gW(OW),
                        LW = mW.getImmediate({
                          optional: !0
                        });
                      if (LW) {
                        const WW = await LW.getHeartbeatsHeader();
                        WW && PW.append("x-firebase-client", WW)
                      }
                      const cW = {
                          fid: EW,
                          authVersion: hW,
                          appId: OW.appId,
                          sdkVersion: JW
                        },
                        wW = {
                          method: "POST",
                          headers: PW,
                          body: JSON.stringify(cW)
                        },
                        tW = await VW((() => fetch(NW, wW)));
                      if (tW.ok) {
                        const WW = await tW.json();
                        return {
                          fid: WW.fid || EW,
                          registrationStatus: 2,
                          refreshToken: WW.refreshToken,
                          authToken: eW(WW.authToken)
                        }
                      }
                      throw await vW("Create Installation", tW)
                    }(WW, iW);
                    return QW(WW.appConfig, OW)
                  } catch (OW) {
                    throw oW(OW) && 409 === OW.customData.serverCode ? await Wi(WW.appConfig) : await QW(WW.appConfig, {
                      fid: iW.fid,
                      registrationStatus: 0
                    }), OW
                  }
                }(WW, OW);
              return {
                installationEntry: OW,
                registrationPromise: mW
              }
            }
            return 1 === iW.registrationStatus ? {
              installationEntry: iW,
              registrationPromise: mi(WW)
            } : {
              installationEntry: iW
            }
          }(WW, mW);
        return iW = EW.registrationPromise, EW.installationEntry
      }));
      return "" === OW.fid ? {
        installationEntry: await iW
      } : {
        installationEntry: OW,
        registrationPromise: iW
      }
    }
    async function mi(WW) {
      let iW = await Ei(WW.appConfig);
      for (; 1 === iW.registrationStatus;) await pW(100), iW = await Ei(WW.appConfig);
      if (0 === iW.registrationStatus) {
        const {
          installationEntry: iW,
          registrationPromise: OW
        } = await Oi(WW);
        return OW || iW
      }
      return iW
    }

    function Ei(WW) {
      return ii(WW, (WW => {
        if (!WW) throw uW.create("installation-not-found");
        return Ni(WW)
      }))
    }

    function Ni(WW) {
      return 1 === (iW = WW).registrationStatus && iW.registrationTime + TW < Date.now() ? {
        fid: WW.fid,
        registrationStatus: 0
      } : WW;
      var iW
    }
    async function Pi(WW, iW) {
      let {
        appConfig: OW,
        heartbeatServiceProvider: mW
      } = WW;
      const EW = function(WW, iW) {
          let {
            fid: OW
          } = iW;
          return `${dW(WW)}/${OW}/authTokens:generate`
        }(OW, iW),
        NW = DW(OW, iW),
        PW = mW.getImmediate({
          optional: !0
        });
      if (PW) {
        const WW = await PW.getHeartbeatsHeader();
        WW && NW.append("x-firebase-client", WW)
      }
      const LW = {
          installation: {
            sdkVersion: JW,
            appId: OW.appId
          }
        },
        cW = {
          method: "POST",
          headers: NW,
          body: JSON.stringify(LW)
        },
        wW = await VW((() => fetch(EW, cW)));
      if (wW.ok) {
        return eW(await wW.json())
      }
      throw await vW("Generate Auth Token", wW)
    }
    async function Li(WW) {
      let iW, OW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const mW = await ii(WW.appConfig, (mW => {
        if (!wi(mW)) throw uW.create("not-registered");
        const EW = mW.authToken;
        if (!OW && function(WW) {
            return 2 === WW.requestStatus && ! function(WW) {
              const iW = Date.now();
              return iW < WW.creationTime || WW.creationTime + WW.expiresIn < iW + HW
            }(WW)
          }(EW)) return mW;
        if (1 === EW.requestStatus) return iW = async function(WW, iW) {
          let OW = await ci(WW.appConfig);
          for (; 1 === OW.authToken.requestStatus;) await pW(100), OW = await ci(WW.appConfig);
          const mW = OW.authToken;
          return 0 === mW.requestStatus ? Li(WW, iW) : mW
        }(WW, OW), mW;
        {
          if (!navigator.onLine) throw uW.create("app-offline");
          const OW = function(WW) {
            const iW = {
              requestStatus: 1,
              requestTime: Date.now()
            };
            return Object.assign(Object.assign({}, WW), {
              authToken: iW
            })
          }(mW);
          return iW = async function(WW, iW) {
            try {
              const OW = await Pi(WW, iW),
                mW = Object.assign(Object.assign({}, iW), {
                  authToken: OW
                });
              return await QW(WW.appConfig, mW), OW
            } catch (OW) {
              if (!oW(OW) || 401 !== OW.customData.serverCode && 404 !== OW.customData.serverCode) {
                const OW = Object.assign(Object.assign({}, iW), {
                  authToken: {
                    requestStatus: 0
                  }
                });
                await QW(WW.appConfig, OW)
              } else await Wi(WW.appConfig);
              throw OW
            }
          }(WW, OW), OW
        }
      }));
      return iW ? await iW : mW.authToken
    }

    function ci(WW) {
      return ii(WW, (WW => {
        if (!wi(WW)) throw uW.create("not-registered");
        const iW = WW.authToken;
        return 1 === (OW = iW).requestStatus && OW.requestTime + TW < Date.now() ? Object.assign(Object.assign({}, WW), {
          authToken: {
            requestStatus: 0
          }
        }) : WW;
        var OW
      }))
    }

    function wi(WW) {
      return void 0 !== WW && 2 === WW.registrationStatus
    }
    async function ti(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const OW = WW;
      await async function(WW) {
        const {
          registrationPromise: iW
        } = await Oi(WW);
        iW && await iW
      }(OW);
      return (await Li(OW, iW)).token
    }

    function Zi(WW) {
      return uW.create("missing-app-config-values", {
        valueName: WW
      })
    }
    const xi = "installations",
      li = WW => {
        const iW = WW.getProvider("app").getImmediate(),
          OW = function(WW) {
            if (!WW || !WW.options) throw Zi("App Configuration");
            if (!WW.name) throw Zi("App Name");
            const iW = ["projectId", "apiKey", "appId"];
            for (const OW of iW)
              if (!WW.options[OW]) throw Zi(OW);
            return {
              appName: WW.name,
              projectId: WW.options.projectId,
              apiKey: WW.options.apiKey,
              appId: WW.options.appId
            }
          }(iW);
        return {
          app: iW,
          appConfig: OW,
          heartbeatServiceProvider: (0, mW.B)(iW, "heartbeat"),
          _delete: () => Promise.resolve()
        }
      },
      Ai = WW => {
        const iW = WW.getProvider("app").getImmediate(),
          OW = (0, mW.B)(iW, xi).getImmediate();
        return {
          getId: () => async function(WW) {
            const iW = WW,
              {
                installationEntry: OW,
                registrationPromise: mW
              } = await Oi(iW);
            return mW ? mW.catch(console.error) : Li(iW).catch(console.error), OW.fid
          }(OW),
          getToken: WW => ti(OW, WW)
        }
      };
    (0, mW.E)(new PW.h(xi, li, "PUBLIC")), (0, mW.E)(new PW.h("installations-internal", Ai, "PRIVATE")), (0, mW.V)(YW, yW), (0, mW.V)(YW, yW, "esm2017");
    const bi = "analytics",
      ji = "https://www.googletagmanager.com/gtag/js",
      Ui = new EW.f("@firebase/analytics"),
      ki = {
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
      si = new NW.h("analytics", "Analytics", ki);

    function Mi(WW) {
      if (!WW.startsWith(ji)) {
        const iW = si.create("invalid-gtag-resource", {
          gtagURL: WW
        });
        return Ui.warn(iW.message), ""
      }
      return WW
    }

    function Ki(WW) {
      return Promise.all(WW.map((WW => WW.catch((WW => WW)))))
    }

    function Si(WW, iW) {
      const OW = function(WW, iW) {
          let OW;
          return window.trustedTypes && (OW = window.trustedTypes.createPolicy(WW, iW)), OW
        }("firebase-js-sdk-policy", {
          createScriptURL: Mi
        }),
        mW = document.createElement("script"),
        EW = `${ji}?l=${WW}&id=${iW}`;
      mW.src = OW ? null === OW || void 0 === OW ? void 0 : OW.createScriptURL(EW) : EW, mW.async = !0, document.head.appendChild(mW)
    }

    function Yi(WW, iW, OW, mW) {
      return async function(EW) {
        try {
          for (var NW = arguments.length, PW = new Array(NW > 1 ? NW - 1 : 0), LW = 1; LW < NW; LW++) PW[LW - 1] = arguments[LW];
          if ("event" === EW) {
            const [mW, EW] = PW;
            await async function(WW, iW, OW, mW, EW) {
              try {
                let NW = [];
                if (EW && EW.send_to) {
                  let WW = EW.send_to;
                  Array.isArray(WW) || (WW = [WW]);
                  const mW = await Ki(OW);
                  for (const OW of WW) {
                    const WW = mW.find((WW => WW.measurementId === OW)),
                      EW = WW && iW[WW.appId];
                    if (!EW) {
                      NW = [];
                      break
                    }
                    NW.push(EW)
                  }
                }
                0 === NW.length && (NW = Object.values(iW)), await Promise.all(NW), WW("event", mW, EW || {})
              } catch (NW) {
                Ui.error(NW)
              }
            }(WW, iW, OW, mW, EW)
          } else if ("config" === EW) {
            const [EW, NW] = PW;
            await async function(WW, iW, OW, mW, EW, NW) {
              const PW = mW[EW];
              try {
                if (PW) await iW[PW];
                else {
                  const WW = (await Ki(OW)).find((WW => WW.measurementId === EW));
                  WW && await iW[WW.appId]
                }
              } catch (LW) {
                Ui.error(LW)
              }
              WW("config", EW, NW)
            }(WW, iW, OW, mW, EW, NW)
          } else if ("consent" === EW) {
            const [iW] = PW;
            WW("consent", "update", iW)
          } else if ("get" === EW) {
            const [iW, OW, mW] = PW;
            WW("get", iW, OW, mW)
          } else if ("set" === EW) {
            const [iW] = PW;
            WW("set", iW)
          } else WW(EW, ...PW)
        } catch (cW) {
          Ui.error(cW)
        }
      }
    }
    const yi = new class {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
        this.throttleMetadata = WW, this.intervalMillis = iW
      }
      getThrottleMetadata(WW) {
        return this.throttleMetadata[WW]
      }
      setThrottleMetadata(WW, iW) {
        this.throttleMetadata[WW] = iW
      }
      deleteThrottleMetadata(WW) {
        delete this.throttleMetadata[WW]
      }
    };

    function Ti(WW) {
      return new Headers({
        Accept: "application/json",
        "x-goog-api-key": WW
      })
    }
    async function Ji(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yi,
        OW = arguments.length > 2 ? arguments[2] : void 0;
      const {
        appId: mW,
        apiKey: EW,
        measurementId: NW
      } = WW.options;
      if (!mW) throw si.create("no-app-id");
      if (!EW) {
        if (NW) return {
          measurementId: NW,
          appId: mW
        };
        throw si.create("no-api-key")
      }
      const PW = iW.getThrottleMetadata(mW) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        },
        LW = new ni;
      return setTimeout((async () => {
        LW.abort()
      }), void 0 !== OW ? OW : 6e4), Hi({
        appId: mW,
        apiKey: EW,
        measurementId: NW
      }, PW, LW, iW)
    }
    async function Hi(WW, iW, OW) {
      let {
        throttleEndTimeMillis: mW,
        backoffCount: EW
      } = iW, PW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : yi;
      var LW;
      const {
        appId: cW,
        measurementId: wW
      } = WW;
      try {
        await
        function(WW, iW) {
          return new Promise(((OW, mW) => {
            const EW = Math.max(iW - Date.now(), 0),
              NW = setTimeout(OW, EW);
            WW.addEventListener((() => {
              clearTimeout(NW), mW(si.create("fetch-throttle", {
                throttleEndTimeMillis: iW
              }))
            }))
          }))
        }(OW, mW)
      } catch (tW) {
        if (wW) return Ui.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${wW} provided in the "measurementId" field in the local Firebase config. [${null===tW||void 0===tW?void 0:tW.message}]`), {
          appId: cW,
          measurementId: wW
        };
        throw tW
      }
      try {
        const iW = await async function(WW) {
          var iW;
          const {
            appId: OW,
            apiKey: mW
          } = WW, EW = {
            method: "GET",
            headers: Ti(mW)
          }, NW = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", OW), PW = await fetch(NW, EW);
          if (200 !== PW.status && 304 !== PW.status) {
            let WW = "";
            try {
              const OW = await PW.json();
              (null === (iW = OW.error) || void 0 === iW ? void 0 : iW.message) && (WW = OW.error.message)
            } catch (LW) {}
            throw si.create("config-fetch-failed", {
              httpStatus: PW.status,
              responseMessage: WW
            })
          }
          return PW.json()
        }(WW);
        return PW.deleteThrottleMetadata(cW), iW
      } catch (tW) {
        const iW = tW;
        if (! function(WW) {
            if (!(WW instanceof NW.k) || !WW.customData) return !1;
            const iW = Number(WW.customData.httpStatus);
            return 429 === iW || 500 === iW || 503 === iW || 504 === iW
          }(iW)) {
          if (PW.deleteThrottleMetadata(cW), wW) return Ui.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${wW} provided in the "measurementId" field in the local Firebase config. [${null===iW||void 0===iW?void 0:iW.message}]`), {
            appId: cW,
            measurementId: wW
          };
          throw tW
        }
        const mW = 503 === Number(null === (LW = null === iW || void 0 === iW ? void 0 : iW.customData) || void 0 === LW ? void 0 : LW.httpStatus) ? (0, NW.u)(EW, PW.intervalMillis, 30) : (0, NW.u)(EW, PW.intervalMillis),
          ZW = {
            throttleEndTimeMillis: Date.now() + mW,
            backoffCount: EW + 1
          };
        return PW.setThrottleMetadata(cW, ZW), Ui.debug(`Calling attemptFetch again in ${mW} millis`), Hi(WW, ZW, OW, PW)
      }
    }
    class ni {
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
    let ui, oi;

    function di(WW) {
      oi = WW
    }

    function ei(WW) {
      ui = WW
    }
    async function vi(WW, iW, OW, mW, EW, PW, LW) {
      var cW;
      const wW = Ji(WW);
      wW.then((iW => {
        OW[iW.measurementId] = iW.appId, WW.options.measurementId && iW.measurementId !== WW.options.measurementId && Ui.warn(`The measurement ID in the local Firebase config (${WW.options.measurementId}) does not match the measurement ID fetched from the server (${iW.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
      })).catch((WW => Ui.error(WW))), iW.push(wW);
      const tW = async function() {
        if (!(0, NW.U)()) return Ui.warn(si.create("indexeddb-unavailable", {
          errorInfo: "IndexedDB is not available in this environment."
        }).message), !1;
        try {
          await (0, NW.bb)()
        } catch (WW) {
          return Ui.warn(si.create("indexeddb-unavailable", {
            errorInfo: null === WW || void 0 === WW ? void 0 : WW.toString()
          }).message), !1
        }
        return !0
      }().then((WW => WW ? mW.getId() : void 0)), [ZW, xW] = await Promise.all([wW, tW]);
      (function(WW) {
        const iW = window.document.getElementsByTagName("script");
        for (const OW of Object.values(iW))
          if (OW.src && OW.src.includes(ji) && OW.src.includes(WW)) return OW;
        return null
      })(PW) || Si(PW, ZW.measurementId), oi && (EW("consent", "default", oi), di(void 0)), EW("js", new Date);
      const lW = null !== (cW = null === LW || void 0 === LW ? void 0 : LW.config) && void 0 !== cW ? cW : {};
      return lW.origin = "firebase", lW.update = !0, null != xW && (lW.firebase_id = xW), EW("config", ZW.measurementId, lW), ui && (EW("set", ui), ei(void 0)), ZW.measurementId
    }
    class gi {
      constructor(WW) {
        this.app = WW
      }
      _delete() {
        return delete Di[this.app.options.appId], Promise.resolve()
      }
    }
    let Di = {},
      Vi = [];
    const fi = {};
    let Ci, Xi, Bi = "dataLayer",
      qi = "gtag",
      Ri = !1;

    function Gi(WW) {
      if (Ri) throw si.create("already-initialized");
      WW.dataLayerName && (Bi = WW.dataLayerName), WW.gtagName && (qi = WW.gtagName)
    }

    function Ii(WW, iW, OW) {
      ! function() {
        const WW = [];
        if ((0, NW.O)() && WW.push("This is a browser extension environment."), (0, NW.l)() || WW.push("Cookies are not available."), WW.length > 0) {
          const iW = WW.map(((WW, iW) => `(${iW+1}) ${WW}`)).join(" "),
            OW = si.create("invalid-analytics-context", {
              errorInfo: iW
            });
          Ui.warn(OW.message)
        }
      }();
      const mW = WW.options.appId;
      if (!mW) throw si.create("no-app-id");
      if (!WW.options.apiKey) {
        if (!WW.options.measurementId) throw si.create("no-api-key");
        Ui.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${WW.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
      }
      if (null != Di[mW]) throw si.create("already-exists", {
        id: mW
      });
      if (!Ri) {
        ! function(WW) {
          let iW = [];
          Array.isArray(window[WW]) ? iW = window[WW] : window[WW] = iW
        }(Bi);
        const {
          wrappedGtag: WW,
          gtagCore: iW
        } = function(WW, iW, OW, mW, EW) {
          let NW = function() {
            for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
            window[mW].push(arguments)
          };
          return window[EW] && "function" === typeof window[EW] && (NW = window[EW]), window[EW] = Yi(NW, WW, iW, OW), {
            gtagCore: NW,
            wrappedGtag: window[EW]
          }
        }(Di, Vi, fi, Bi, qi);
        Xi = WW, Ci = iW, Ri = !0
      }
      Di[mW] = vi(WW, Vi, fi, iW, Ci, Bi, OW);
      return new gi(WW)
    }

    function ai() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, mW.N)();
      WW = (0, NW.J)(WW);
      const iW = (0, mW.B)(WW, bi);
      return iW.isInitialized() ? iW.getImmediate() : ri(WW)
    }

    function ri(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const OW = (0, mW.B)(WW, bi);
      if (OW.isInitialized()) {
        const WW = OW.getImmediate();
        if ((0, NW.C)(iW, OW.getOptions())) return WW;
        throw si.create("already-initialized")
      }
      return OW.initialize({
        options: iW
      })
    }
    async function zi() {
      if ((0, NW.O)()) return !1;
      if (!(0, NW.l)()) return !1;
      if (!(0, NW.U)()) return !1;
      try {
        return await (0, NW.bb)()
      } catch (WW) {
        return !1
      }
    }

    function Fi(WW, iW, OW) {
      WW = (0, NW.J)(WW), async function(WW, iW, OW, mW) {
        if (mW && mW.global) return WW("set", {
          screen_name: OW
        }), Promise.resolve();
        WW("config", await iW, {
          update: !0,
          screen_name: OW
        })
      }(Xi, Di[WW.app.options.appId], iW, OW).catch((WW => Ui.error(WW)))
    }
    async function Qi(WW) {
      return WW = (0, NW.J)(WW), async function(WW, iW) {
        const OW = await iW;
        return new Promise(((iW, mW) => {
          WW("get", OW, "client_id", (WW => {
            WW || mW(si.create("no-client-id")), iW(WW)
          }))
        }))
      }(Xi, Di[WW.app.options.appId])
    }

    function WO(WW, iW, OW) {
      WW = (0, NW.J)(WW), async function(WW, iW, OW, mW) {
        if (mW && mW.global) return WW("set", {
          user_id: OW
        }), Promise.resolve();
        WW("config", await iW, {
          update: !0,
          user_id: OW
        })
      }(Xi, Di[WW.app.options.appId], iW, OW).catch((WW => Ui.error(WW)))
    }

    function iO(WW, iW, OW) {
      WW = (0, NW.J)(WW), async function(WW, iW, OW, mW) {
        if (mW && mW.global) {
          const iW = {};
          for (const WW of Object.keys(OW)) iW[`user_properties.${WW}`] = OW[WW];
          return WW("set", iW), Promise.resolve()
        }
        WW("config", await iW, {
          update: !0,
          user_properties: OW
        })
      }(Xi, Di[WW.app.options.appId], iW, OW).catch((WW => Ui.error(WW)))
    }

    function OO(WW, iW) {
      WW = (0, NW.J)(WW), async function(WW, iW) {
        const OW = await WW;
        window[`ga-disable-${OW}`] = !iW
      }(Di[WW.app.options.appId], iW).catch((WW => Ui.error(WW)))
    }

    function mO(WW) {
      Xi ? Xi("set", WW) : ei(WW)
    }

    function EO(WW, iW, OW, mW) {
      WW = (0, NW.J)(WW), async function(WW, iW, OW, mW, EW) {
        if (EW && EW.global) WW("event", OW, mW);
        else {
          const EW = await iW;
          WW("event", OW, Object.assign(Object.assign({}, mW), {
            send_to: EW
          }))
        }
      }(Xi, Di[WW.app.options.appId], iW, OW, mW).catch((WW => Ui.error(WW)))
    }

    function NO(WW) {
      Xi ? Xi("consent", "update", WW) : di(WW)
    }
    const PO = "@firebase/analytics",
      LO = "0.10.0";
    (0, mW.E)(new PW.h(bi, ((WW, iW) => {
      let {
        options: OW
      } = iW;
      return Ii(WW.getProvider("app").getImmediate(), WW.getProvider("installations-internal").getImmediate(), OW)
    }), "PUBLIC")), (0, mW.E)(new PW.h("analytics-internal", (function(WW) {
      try {
        const iW = WW.getProvider(bi).getImmediate();
        return {
          logEvent: (WW, OW, mW) => EO(iW, WW, OW, mW)
        }
      } catch (iW) {
        throw si.create("interop-component-reg-failed", {
          reason: iW
        })
      }
    }), "PRIVATE")), (0, mW.V)(PO, LO), (0, mW.V)(PO, LO, "esm2017")
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);