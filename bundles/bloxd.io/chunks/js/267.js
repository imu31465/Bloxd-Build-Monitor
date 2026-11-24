/*! For license information please see fqwnlq.267.8ef8caa9.chunk.js.LICENSE.txt */
export const id = 267;
export const ids = [267];
export const modules = {
  40560: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      getAnalytics: () => RH,
      getGoogleAnalyticsClientId: () => mH,
      initializeAnalytics: () => TH,
      isSupported: () => oH,
      logEvent: () => gg,
      setAnalyticsCollectionEnabled: () => Sg,
      setConsent: () => tg,
      setCurrentScreen: () => lH,
      setDefaultEventParameters: () => Hg,
      setUserId: () => eH,
      setUserProperties: () => rH,
      settings: () => MH
    });
    var tS = gS(40539),
      bS = gS(40552),
      XS = gS(40547),
      xS = gS(40541);
    let NS, qS;
    const uS = new WeakMap,
      IS = new WeakMap,
      fS = new WeakMap,
      kS = new WeakMap,
      aS = new WeakMap;
    let KS = {
      get(SS, HS, gS) {
        if (SS instanceof IDBTransaction) {
          if ("done" === HS) return IS.get(SS);
          if ("objectStoreNames" === HS) return SS.objectStoreNames || fS.get(SS);
          if ("store" === HS) return gS.objectStoreNames[1] ? void 0 : gS.objectStore(gS.objectStoreNames[0])
        }
        return CS(SS[HS])
      },
      set: (SS, HS, gS) => (SS[HS] = gS, !0),
      has: (SS, HS) => SS instanceof IDBTransaction && ("done" === HS || "store" === HS) || HS in SS
    };

    function jS(SS) {
      return SS !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (qS || (qS = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(SS) ? function() {
        for (var HS = arguments.length, gS = new Array(HS), tS = 0; tS < HS; tS++) gS[tS] = arguments[tS];
        return SS.apply(nS(this), gS), CS(uS.get(this))
      } : function() {
        for (var HS = arguments.length, gS = new Array(HS), tS = 0; tS < HS; tS++) gS[tS] = arguments[tS];
        return CS(SS.apply(nS(this), gS))
      } : function(HS) {
        for (var gS = arguments.length, tS = new Array(gS > 1 ? gS - 1 : 0), bS = 1; bS < gS; bS++) tS[bS - 1] = arguments[bS];
        const XS = SS.call(nS(this), HS, ...tS);
        return fS.set(XS, HS.sort ? HS.sort() : [HS]), CS(XS)
      }
    }

    function GS(SS) {
      return "function" === typeof SS ? jS(SS) : (SS instanceof IDBTransaction && function(SS) {
        if (IS.has(SS)) return;
        const HS = new Promise(((HS, gS) => {
          const tS = () => {
              SS.removeEventListener("complete", bS), SS.removeEventListener("error", XS), SS.removeEventListener("abort", XS)
            },
            bS = () => {
              HS(), tS()
            },
            XS = () => {
              gS(SS.error || new DOMException("AbortError", "AbortError")), tS()
            };
          SS.addEventListener("complete", bS), SS.addEventListener("error", XS), SS.addEventListener("abort", XS)
        }));
        IS.set(SS, HS)
      }(SS), HS = SS, (NS || (NS = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((SS => HS instanceof SS)) ? new Proxy(SS, KS) : SS);
      var HS
    }

    function CS(SS) {
      if (SS instanceof IDBRequest) return function(SS) {
        const HS = new Promise(((HS, gS) => {
          const tS = () => {
              SS.removeEventListener("success", bS), SS.removeEventListener("error", XS)
            },
            bS = () => {
              HS(CS(SS.result)), tS()
            },
            XS = () => {
              gS(SS.error), tS()
            };
          SS.addEventListener("success", bS), SS.addEventListener("error", XS)
        }));
        return HS.then((HS => {
          HS instanceof IDBCursor && uS.set(HS, SS)
        })).catch((() => {})), aS.set(HS, SS), HS
      }(SS);
      if (kS.has(SS)) return kS.get(SS);
      const HS = GS(SS);
      return HS !== SS && (kS.set(SS, HS), aS.set(HS, SS)), HS
    }
    const nS = SS => aS.get(SS);
    const PS = ["get", "getKey", "getAll", "getAllKeys", "count"],
      QS = ["put", "add", "delete", "clear"],
      DS = new Map;

    function wS(SS, HS) {
      if (!(SS instanceof IDBDatabase) || HS in SS || "string" !== typeof HS) return;
      if (DS.get(HS)) return DS.get(HS);
      const gS = HS.replace(/FromIndex$/, ""),
        tS = HS !== gS,
        bS = QS.includes(gS);
      if (!(gS in (tS ? IDBIndex : IDBObjectStore).prototype) || !bS && !PS.includes(gS)) return;
      const XS = async function(SS) {
        const HS = this.transaction(SS, bS ? "readwrite" : "readonly");
        let XS = HS.store;
        for (var xS = arguments.length, NS = new Array(xS > 1 ? xS - 1 : 0), qS = 1; qS < xS; qS++) NS[qS - 1] = arguments[qS];
        return tS && (XS = XS.index(NS.shift())), (await Promise.all([XS[gS](...NS), bS && HS.done]))[0]
      };
      return DS.set(HS, XS), XS
    }
    KS = (SS => ({
      ...SS,
      get: (HS, gS, tS) => wS(HS, gS) || SS.get(HS, gS, tS),
      has: (HS, gS) => !!wS(HS, gS) || SS.has(HS, gS)
    }))(KS);
    const hS = "@firebase/installations",
      ZS = "0.6.4",
      JS = 1e4,
      OS = `w:${ZS}`,
      dS = "FIS_v2",
      cS = 36e5,
      vS = {
        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
        "not-registered": "Firebase Installation is not registered.",
        "installation-not-found": "Firebase Installation not found.",
        "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        "app-offline": "Could not process request. Application offline.",
        "delete-pending-registration": "Can't delete installation while there is a pending registration request."
      },
      ES = new XS.d("installations", "Installations", vS);

    function LS(SS) {
      return SS instanceof XS.f && SS.code.includes("request-failed")
    }

    function YS(SS) {
      let {
        projectId: HS
      } = SS;
      return `https://firebaseinstallations.googleapis.com/v1/projects/${HS}/installations`
    }

    function AS(SS) {
      return {
        token: SS.token,
        requestStatus: 2,
        expiresIn: (HS = SS.expiresIn, Number(HS.replace("s", "000"))),
        creationTime: Date.now()
      };
      var HS
    }
    async function yS(SS, HS) {
      const gS = (await HS.json()).error;
      return ES.create("request-failed", {
        requestName: SS,
        serverCode: gS.code,
        serverMessage: gS.message,
        serverStatus: gS.status
      })
    }

    function VS(SS) {
      let {
        apiKey: HS
      } = SS;
      return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": HS
      })
    }

    function iS(SS, HS) {
      let {
        refreshToken: gS
      } = HS;
      const tS = VS(SS);
      return tS.append("Authorization", function(SS) {
        return `${dS} ${SS}`
      }(gS)), tS
    }
    async function WS(SS) {
      const HS = await SS();
      return HS.status >= 500 && HS.status < 600 ? SS() : HS
    }

    function zS(SS) {
      return new Promise((HS => {
        setTimeout(HS, SS)
      }))
    }
    const US = /^[cdef][\w-]{21}$/;

    function pS() {
      try {
        const SS = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(SS), SS[0] = 112 + SS[0] % 16;
        const HS = function(SS) {
          const HS = (gS = SS, btoa(String.fromCharCode(...gS)).replace(/\+/g, "-").replace(/\//g, "_"));
          var gS;
          return HS.substr(0, 22)
        }(SS);
        return US.test(HS) ? HS : ""
      } catch (SS) {
        return ""
      }
    }

    function sS(SS) {
      return `${SS.appName}!${SS.appId}`
    }
    const BS = new Map;

    function MS(SS, HS) {
      const gS = sS(SS);
      FS(gS, HS),
        function(SS, HS) {
          const gS = TS();
          gS && gS.postMessage({
            key: SS,
            fid: HS
          });
          oS()
        }(gS, HS)
    }

    function FS(SS, HS) {
      const gS = BS.get(SS);
      if (gS)
        for (const tS of gS) tS(HS)
    }
    let RS = null;

    function TS() {
      return !RS && "BroadcastChannel" in self && (RS = new BroadcastChannel("[Firebase] FID Change"), RS.onmessage = SS => {
        FS(SS.data.key, SS.data.fid)
      }), RS
    }

    function oS() {
      0 === BS.size && RS && (RS.close(), RS = null)
    }
    const lS = "firebase-installations-store";
    let mS = null;

    function eS() {
      return mS || (mS = function(SS, HS) {
        let {
          blocked: gS,
          upgrade: tS,
          blocking: bS,
          terminated: XS
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const xS = indexedDB.open(SS, HS),
          NS = CS(xS);
        return tS && xS.addEventListener("upgradeneeded", (SS => {
          tS(CS(xS.result), SS.oldVersion, SS.newVersion, CS(xS.transaction))
        })), gS && xS.addEventListener("blocked", (() => gS())), NS.then((SS => {
          XS && SS.addEventListener("close", (() => XS())), bS && SS.addEventListener("versionchange", (() => bS()))
        })).catch((() => {})), NS
      }("firebase-installations-database", 1, {
        upgrade: (SS, HS) => {
          if (0 === HS) SS.createObjectStore(lS)
        }
      })), mS
    }
    async function rS(SS, HS) {
      const gS = sS(SS),
        tS = (await eS()).transaction(lS, "readwrite"),
        bS = tS.objectStore(lS),
        XS = await bS.get(gS);
      return await bS.put(HS, gS), await tS.done, XS && XS.fid === HS.fid || MS(SS, HS.fid), HS
    }
    async function SH(SS) {
      const HS = sS(SS),
        gS = (await eS()).transaction(lS, "readwrite");
      await gS.objectStore(lS).delete(HS), await gS.done
    }
    async function HH(SS, HS) {
      const gS = sS(SS),
        tS = (await eS()).transaction(lS, "readwrite"),
        bS = tS.objectStore(lS),
        XS = await bS.get(gS),
        xS = HS(XS);
      return void 0 === xS ? await bS.delete(gS) : await bS.put(xS, gS), await tS.done, !xS || XS && XS.fid === xS.fid || MS(SS, xS.fid), xS
    }
    async function gH(SS) {
      let HS;
      const gS = await HH(SS.appConfig, (gS => {
        const tS = function(SS) {
            const HS = SS || {
              fid: pS(),
              registrationStatus: 0
            };
            return XH(HS)
          }(gS),
          bS = function(SS, HS) {
            if (0 === HS.registrationStatus) {
              if (!navigator.onLine) {
                return {
                  installationEntry: HS,
                  registrationPromise: Promise.reject(ES.create("app-offline"))
                }
              }
              const gS = {
                  fid: HS.fid,
                  registrationStatus: 1,
                  registrationTime: Date.now()
                },
                tS = async function(SS, HS) {
                  try {
                    const gS = await async function(SS, HS) {
                      let {
                        appConfig: gS,
                        heartbeatServiceProvider: tS
                      } = SS, {
                        fid: bS
                      } = HS;
                      const XS = YS(gS),
                        xS = VS(gS),
                        NS = tS.getImmediate({
                          optional: !0
                        });
                      if (NS) {
                        const SS = await NS.getHeartbeatsHeader();
                        SS && xS.append("x-firebase-client", SS)
                      }
                      const qS = {
                          fid: bS,
                          authVersion: dS,
                          appId: gS.appId,
                          sdkVersion: OS
                        },
                        uS = {
                          method: "POST",
                          headers: xS,
                          body: JSON.stringify(qS)
                        },
                        IS = await WS((() => fetch(XS, uS)));
                      if (IS.ok) {
                        const SS = await IS.json();
                        return {
                          fid: SS.fid || bS,
                          registrationStatus: 2,
                          refreshToken: SS.refreshToken,
                          authToken: AS(SS.authToken)
                        }
                      }
                      throw await yS("Create Installation", IS)
                    }(SS, HS);
                    return rS(SS.appConfig, gS)
                  } catch (gS) {
                    throw LS(gS) && 409 === gS.customData.serverCode ? await SH(SS.appConfig) : await rS(SS.appConfig, {
                      fid: HS.fid,
                      registrationStatus: 0
                    }), gS
                  }
                }(SS, gS);
              return {
                installationEntry: gS,
                registrationPromise: tS
              }
            }
            return 1 === HS.registrationStatus ? {
              installationEntry: HS,
              registrationPromise: tH(SS)
            } : {
              installationEntry: HS
            }
          }(SS, tS);
        return HS = bS.registrationPromise, bS.installationEntry
      }));
      return "" === gS.fid ? {
        installationEntry: await HS
      } : {
        installationEntry: gS,
        registrationPromise: HS
      }
    }
    async function tH(SS) {
      let HS = await bH(SS.appConfig);
      for (; 1 === HS.registrationStatus;) await zS(100), HS = await bH(SS.appConfig);
      if (0 === HS.registrationStatus) {
        const {
          installationEntry: HS,
          registrationPromise: gS
        } = await gH(SS);
        return gS || HS
      }
      return HS
    }

    function bH(SS) {
      return HH(SS, (SS => {
        if (!SS) throw ES.create("installation-not-found");
        return XH(SS)
      }))
    }

    function XH(SS) {
      return 1 === (HS = SS).registrationStatus && HS.registrationTime + JS < Date.now() ? {
        fid: SS.fid,
        registrationStatus: 0
      } : SS;
      var HS
    }
    async function xH(SS, HS) {
      let {
        appConfig: gS,
        heartbeatServiceProvider: tS
      } = SS;
      const bS = function(SS, HS) {
          let {
            fid: gS
          } = HS;
          return `${YS(SS)}/${gS}/authTokens:generate`
        }(gS, HS),
        XS = iS(gS, HS),
        xS = tS.getImmediate({
          optional: !0
        });
      if (xS) {
        const SS = await xS.getHeartbeatsHeader();
        SS && XS.append("x-firebase-client", SS)
      }
      const NS = {
          installation: {
            sdkVersion: OS,
            appId: gS.appId
          }
        },
        qS = {
          method: "POST",
          headers: XS,
          body: JSON.stringify(NS)
        },
        uS = await WS((() => fetch(bS, qS)));
      if (uS.ok) {
        return AS(await uS.json())
      }
      throw await yS("Generate Auth Token", uS)
    }
    async function NH(SS) {
      let HS, gS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const tS = await HH(SS.appConfig, (tS => {
        if (!uH(tS)) throw ES.create("not-registered");
        const bS = tS.authToken;
        if (!gS && function(SS) {
            return 2 === SS.requestStatus && ! function(SS) {
              const HS = Date.now();
              return HS < SS.creationTime || SS.creationTime + SS.expiresIn < HS + cS
            }(SS)
          }(bS)) return tS;
        if (1 === bS.requestStatus) return HS = async function(SS, HS) {
          let gS = await qH(SS.appConfig);
          for (; 1 === gS.authToken.requestStatus;) await zS(100), gS = await qH(SS.appConfig);
          const tS = gS.authToken;
          return 0 === tS.requestStatus ? NH(SS, HS) : tS
        }(SS, gS), tS;
        {
          if (!navigator.onLine) throw ES.create("app-offline");
          const gS = function(SS) {
            const HS = {
              requestStatus: 1,
              requestTime: Date.now()
            };
            return Object.assign(Object.assign({}, SS), {
              authToken: HS
            })
          }(tS);
          return HS = async function(SS, HS) {
            try {
              const gS = await xH(SS, HS),
                tS = Object.assign(Object.assign({}, HS), {
                  authToken: gS
                });
              return await rS(SS.appConfig, tS), gS
            } catch (gS) {
              if (!LS(gS) || 401 !== gS.customData.serverCode && 404 !== gS.customData.serverCode) {
                const gS = Object.assign(Object.assign({}, HS), {
                  authToken: {
                    requestStatus: 0
                  }
                });
                await rS(SS.appConfig, gS)
              } else await SH(SS.appConfig);
              throw gS
            }
          }(SS, gS), gS
        }
      }));
      return HS ? await HS : tS.authToken
    }

    function qH(SS) {
      return HH(SS, (SS => {
        if (!uH(SS)) throw ES.create("not-registered");
        const HS = SS.authToken;
        return 1 === (gS = HS).requestStatus && gS.requestTime + JS < Date.now() ? Object.assign(Object.assign({}, SS), {
          authToken: {
            requestStatus: 0
          }
        }) : SS;
        var gS
      }))
    }

    function uH(SS) {
      return void 0 !== SS && 2 === SS.registrationStatus
    }
    async function IH(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const gS = SS;
      await async function(SS) {
        const {
          registrationPromise: HS
        } = await gH(SS);
        HS && await HS
      }(gS);
      return (await NH(gS, HS)).token
    }

    function fH(SS) {
      return ES.create("missing-app-config-values", {
        valueName: SS
      })
    }
    const kH = "installations",
      aH = SS => {
        const HS = SS.getProvider("app").getImmediate(),
          gS = function(SS) {
            if (!SS || !SS.options) throw fH("App Configuration");
            if (!SS.name) throw fH("App Name");
            const HS = ["projectId", "apiKey", "appId"];
            for (const gS of HS)
              if (!SS.options[gS]) throw fH(gS);
            return {
              appName: SS.name,
              projectId: SS.options.projectId,
              apiKey: SS.options.apiKey,
              appId: SS.options.appId
            }
          }(HS);
        return {
          app: HS,
          appConfig: gS,
          heartbeatServiceProvider: (0, tS.z)(HS, "heartbeat"),
          _delete: () => Promise.resolve()
        }
      },
      KH = SS => {
        const HS = SS.getProvider("app").getImmediate(),
          gS = (0, tS.z)(HS, kH).getImmediate();
        return {
          getId: () => async function(SS) {
            const HS = SS,
              {
                installationEntry: gS,
                registrationPromise: tS
              } = await gH(HS);
            return tS ? tS.catch(console.error) : NH(HS).catch(console.error), gS.fid
          }(gS),
          getToken: SS => IH(gS, SS)
        }
      };
    (0, tS.A)(new xS.d(kH, aH, "PUBLIC")), (0, tS.A)(new xS.d("installations-internal", KH, "PRIVATE")), (0, tS.T)(hS, ZS), (0, tS.T)(hS, ZS, "esm2017");
    const jH = "analytics",
      GH = "https://www.googletagmanager.com/gtag/js",
      CH = new bS.d("@firebase/analytics"),
      nH = {
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
      PH = new XS.d("analytics", "Analytics", nH);

    function QH(SS) {
      if (!SS.startsWith(GH)) {
        const HS = PH.create("invalid-gtag-resource", {
          gtagURL: SS
        });
        return CH.warn(HS.message), ""
      }
      return SS
    }

    function DH(SS) {
      return Promise.all(SS.map((SS => SS.catch((SS => SS)))))
    }

    function wH(SS, HS) {
      const gS = function(SS, HS) {
          let gS;
          return window.trustedTypes && (gS = window.trustedTypes.createPolicy(SS, HS)), gS
        }("firebase-js-sdk-policy", {
          createScriptURL: QH
        }),
        tS = document.createElement("script"),
        bS = `${GH}?l=${SS}&id=${HS}`;
      tS.src = gS ? null === gS || void 0 === gS ? void 0 : gS.createScriptURL(bS) : bS, tS.async = !0, document.head.appendChild(tS)
    }

    function hH(SS, HS, gS, tS) {
      return async function(bS) {
        try {
          for (var XS = arguments.length, xS = new Array(XS > 1 ? XS - 1 : 0), NS = 1; NS < XS; NS++) xS[NS - 1] = arguments[NS];
          if ("event" === bS) {
            const [tS, bS] = xS;
            await async function(SS, HS, gS, tS, bS) {
              try {
                let XS = [];
                if (bS && bS.send_to) {
                  let SS = bS.send_to;
                  Array.isArray(SS) || (SS = [SS]);
                  const tS = await DH(gS);
                  for (const gS of SS) {
                    const SS = tS.find((SS => SS.measurementId === gS)),
                      bS = SS && HS[SS.appId];
                    if (!bS) {
                      XS = [];
                      break
                    }
                    XS.push(bS)
                  }
                }
                0 === XS.length && (XS = Object.values(HS)), await Promise.all(XS), SS("event", tS, bS || {})
              } catch (XS) {
                CH.error(XS)
              }
            }(SS, HS, gS, tS, bS)
          } else if ("config" === bS) {
            const [bS, XS] = xS;
            await async function(SS, HS, gS, tS, bS, XS) {
              const xS = tS[bS];
              try {
                if (xS) await HS[xS];
                else {
                  const SS = (await DH(gS)).find((SS => SS.measurementId === bS));
                  SS && await HS[SS.appId]
                }
              } catch (NS) {
                CH.error(NS)
              }
              SS("config", bS, XS)
            }(SS, HS, gS, tS, bS, XS)
          } else if ("consent" === bS) {
            const [HS] = xS;
            SS("consent", "update", HS)
          } else if ("get" === bS) {
            const [HS, gS, tS] = xS;
            SS("get", HS, gS, tS)
          } else if ("set" === bS) {
            const [HS] = xS;
            SS("set", HS)
          } else SS(bS, ...xS)
        } catch (qS) {
          CH.error(qS)
        }
      }
    }
    const ZH = new class {
      constructor() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
        this.throttleMetadata = SS, this.intervalMillis = HS
      }
      getThrottleMetadata(SS) {
        return this.throttleMetadata[SS]
      }
      setThrottleMetadata(SS, HS) {
        this.throttleMetadata[SS] = HS
      }
      deleteThrottleMetadata(SS) {
        delete this.throttleMetadata[SS]
      }
    };

    function JH(SS) {
      return new Headers({
        Accept: "application/json",
        "x-goog-api-key": SS
      })
    }
    async function OH(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ZH,
        gS = arguments.length > 2 ? arguments[2] : void 0;
      const {
        appId: tS,
        apiKey: bS,
        measurementId: XS
      } = SS.options;
      if (!tS) throw PH.create("no-app-id");
      if (!bS) {
        if (XS) return {
          measurementId: XS,
          appId: tS
        };
        throw PH.create("no-api-key")
      }
      const xS = HS.getThrottleMetadata(tS) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        },
        NS = new cH;
      return setTimeout((async () => {
        NS.abort()
      }), void 0 !== gS ? gS : 6e4), dH({
        appId: tS,
        apiKey: bS,
        measurementId: XS
      }, xS, NS, HS)
    }
    async function dH(SS, HS, gS) {
      let {
        throttleEndTimeMillis: tS,
        backoffCount: bS
      } = HS, xS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ZH;
      var NS;
      const {
        appId: qS,
        measurementId: uS
      } = SS;
      try {
        await
        function(SS, HS) {
          return new Promise(((gS, tS) => {
            const bS = Math.max(HS - Date.now(), 0),
              XS = setTimeout(gS, bS);
            SS.addEventListener((() => {
              clearTimeout(XS), tS(PH.create("fetch-throttle", {
                throttleEndTimeMillis: HS
              }))
            }))
          }))
        }(gS, tS)
      } catch (IS) {
        if (uS) return CH.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${uS} provided in the "measurementId" field in the local Firebase config. [${null===IS||void 0===IS?void 0:IS.message}]`), {
          appId: qS,
          measurementId: uS
        };
        throw IS
      }
      try {
        const HS = await async function(SS) {
          var HS;
          const {
            appId: gS,
            apiKey: tS
          } = SS, bS = {
            method: "GET",
            headers: JH(tS)
          }, XS = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", gS), xS = await fetch(XS, bS);
          if (200 !== xS.status && 304 !== xS.status) {
            let SS = "";
            try {
              const gS = await xS.json();
              (null === (HS = gS.error) || void 0 === HS ? void 0 : HS.message) && (SS = gS.error.message)
            } catch (NS) {}
            throw PH.create("config-fetch-failed", {
              httpStatus: xS.status,
              responseMessage: SS
            })
          }
          return xS.json()
        }(SS);
        return xS.deleteThrottleMetadata(qS), HS
      } catch (IS) {
        const HS = IS;
        if (! function(SS) {
            if (!(SS instanceof XS.f) || !SS.customData) return !1;
            const HS = Number(SS.customData.httpStatus);
            return 429 === HS || 500 === HS || 503 === HS || 504 === HS
          }(HS)) {
          if (xS.deleteThrottleMetadata(qS), uS) return CH.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${uS} provided in the "measurementId" field in the local Firebase config. [${null===HS||void 0===HS?void 0:HS.message}]`), {
            appId: qS,
            measurementId: uS
          };
          throw IS
        }
        const tS = 503 === Number(null === (NS = null === HS || void 0 === HS ? void 0 : HS.customData) || void 0 === NS ? void 0 : NS.httpStatus) ? (0, XS.q)(bS, xS.intervalMillis, 30) : (0, XS.q)(bS, xS.intervalMillis),
          fS = {
            throttleEndTimeMillis: Date.now() + tS,
            backoffCount: bS + 1
          };
        return xS.setThrottleMetadata(qS, fS), CH.debug(`Calling attemptFetch again in ${tS} millis`), dH(SS, fS, gS, xS)
      }
    }
    class cH {
      constructor() {
        this.listeners = []
      }
      addEventListener(SS) {
        this.listeners.push(SS)
      }
      abort() {
        this.listeners.forEach((SS => SS()))
      }
    }
    let vH, EH;

    function LH(SS) {
      EH = SS
    }

    function YH(SS) {
      vH = SS
    }
    async function AH(SS, HS, gS, tS, bS, xS, NS) {
      var qS;
      const uS = OH(SS);
      uS.then((HS => {
        gS[HS.measurementId] = HS.appId, SS.options.measurementId && HS.measurementId !== SS.options.measurementId && CH.warn(`The measurement ID in the local Firebase config (${SS.options.measurementId}) does not match the measurement ID fetched from the server (${HS.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
      })).catch((SS => CH.error(SS))), HS.push(uS);
      const IS = async function() {
        if (!(0, XS.U)()) return CH.warn(PH.create("indexeddb-unavailable", {
          errorInfo: "IndexedDB is not available in this environment."
        }).message), !1;
        try {
          await (0, XS.hb)()
        } catch (SS) {
          return CH.warn(PH.create("indexeddb-unavailable", {
            errorInfo: null === SS || void 0 === SS ? void 0 : SS.toString()
          }).message), !1
        }
        return !0
      }().then((SS => SS ? tS.getId() : void 0)), [fS, kS] = await Promise.all([uS, IS]);
      (function(SS) {
        const HS = window.document.getElementsByTagName("script");
        for (const gS of Object.values(HS))
          if (gS.src && gS.src.includes(GH) && gS.src.includes(SS)) return gS;
        return null
      })(xS) || wH(xS, fS.measurementId), EH && (bS("consent", "default", EH), LH(void 0)), bS("js", new Date);
      const aS = null !== (qS = null === NS || void 0 === NS ? void 0 : NS.config) && void 0 !== qS ? qS : {};
      return aS.origin = "firebase", aS.update = !0, null != kS && (aS.firebase_id = kS), bS("config", fS.measurementId, aS), vH && (bS("set", vH), YH(void 0)), fS.measurementId
    }
    class yH {
      constructor(SS) {
        this.app = SS
      }
      _delete() {
        return delete VH[this.app.options.appId], Promise.resolve()
      }
    }
    let VH = {},
      iH = [];
    const WH = {};
    let zH, UH, pH = "dataLayer",
      sH = "gtag",
      BH = !1;

    function MH(SS) {
      if (BH) throw PH.create("already-initialized");
      SS.dataLayerName && (pH = SS.dataLayerName), SS.gtagName && (sH = SS.gtagName)
    }

    function FH(SS, HS, gS) {
      ! function() {
        const SS = [];
        if ((0, XS.O)() && SS.push("This is a browser extension environment."), (0, XS.h)() || SS.push("Cookies are not available."), SS.length > 0) {
          const HS = SS.map(((SS, HS) => `(${HS+1}) ${SS}`)).join(" "),
            gS = PH.create("invalid-analytics-context", {
              errorInfo: HS
            });
          CH.warn(gS.message)
        }
      }();
      const tS = SS.options.appId;
      if (!tS) throw PH.create("no-app-id");
      if (!SS.options.apiKey) {
        if (!SS.options.measurementId) throw PH.create("no-api-key");
        CH.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${SS.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
      }
      if (null != VH[tS]) throw PH.create("already-exists", {
        id: tS
      });
      if (!BH) {
        ! function(SS) {
          let HS = [];
          Array.isArray(window[SS]) ? HS = window[SS] : window[SS] = HS
        }(pH);
        const {
          wrappedGtag: SS,
          gtagCore: HS
        } = function(SS, HS, gS, tS, bS) {
          let XS = function() {
            for (var SS = arguments.length, HS = new Array(SS), gS = 0; gS < SS; gS++) HS[gS] = arguments[gS];
            window[tS].push(arguments)
          };
          return window[bS] && "function" === typeof window[bS] && (XS = window[bS]), window[bS] = hH(XS, SS, HS, gS), {
            gtagCore: XS,
            wrappedGtag: window[bS]
          }
        }(VH, iH, WH, pH, sH);
        UH = SS, zH = HS, BH = !0
      }
      VH[tS] = AH(SS, iH, WH, HS, zH, pH, gS);
      return new yH(SS)
    }

    function RH() {
      let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, tS.M)();
      SS = (0, XS.J)(SS);
      const HS = (0, tS.z)(SS, jH);
      return HS.isInitialized() ? HS.getImmediate() : TH(SS)
    }

    function TH(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const gS = (0, tS.z)(SS, jH);
      if (gS.isInitialized()) {
        const SS = gS.getImmediate();
        if ((0, XS.v)(HS, gS.getOptions())) return SS;
        throw PH.create("already-initialized")
      }
      return gS.initialize({
        options: HS
      })
    }
    async function oH() {
      if ((0, XS.O)()) return !1;
      if (!(0, XS.h)()) return !1;
      if (!(0, XS.U)()) return !1;
      try {
        return await (0, XS.hb)()
      } catch (SS) {
        return !1
      }
    }

    function lH(SS, HS, gS) {
      SS = (0, XS.J)(SS), async function(SS, HS, gS, tS) {
        if (tS && tS.global) return SS("set", {
          screen_name: gS
        }), Promise.resolve();
        SS("config", await HS, {
          update: !0,
          screen_name: gS
        })
      }(UH, VH[SS.app.options.appId], HS, gS).catch((SS => CH.error(SS)))
    }
    async function mH(SS) {
      return SS = (0, XS.J)(SS), async function(SS, HS) {
        const gS = await HS;
        return new Promise(((HS, tS) => {
          SS("get", gS, "client_id", (SS => {
            SS || tS(PH.create("no-client-id")), HS(SS)
          }))
        }))
      }(UH, VH[SS.app.options.appId])
    }

    function eH(SS, HS, gS) {
      SS = (0, XS.J)(SS), async function(SS, HS, gS, tS) {
        if (tS && tS.global) return SS("set", {
          user_id: gS
        }), Promise.resolve();
        SS("config", await HS, {
          update: !0,
          user_id: gS
        })
      }(UH, VH[SS.app.options.appId], HS, gS).catch((SS => CH.error(SS)))
    }

    function rH(SS, HS, gS) {
      SS = (0, XS.J)(SS), async function(SS, HS, gS, tS) {
        if (tS && tS.global) {
          const HS = {};
          for (const SS of Object.keys(gS)) HS[`user_properties.${SS}`] = gS[SS];
          return SS("set", HS), Promise.resolve()
        }
        SS("config", await HS, {
          update: !0,
          user_properties: gS
        })
      }(UH, VH[SS.app.options.appId], HS, gS).catch((SS => CH.error(SS)))
    }

    function Sg(SS, HS) {
      SS = (0, XS.J)(SS), async function(SS, HS) {
        const gS = await SS;
        window[`ga-disable-${gS}`] = !HS
      }(VH[SS.app.options.appId], HS).catch((SS => CH.error(SS)))
    }

    function Hg(SS) {
      UH ? UH("set", SS) : YH(SS)
    }

    function gg(SS, HS, gS, tS) {
      SS = (0, XS.J)(SS), async function(SS, HS, gS, tS, bS) {
        if (bS && bS.global) SS("event", gS, tS);
        else {
          const bS = await HS;
          SS("event", gS, Object.assign(Object.assign({}, tS), {
            send_to: bS
          }))
        }
      }(UH, VH[SS.app.options.appId], HS, gS, tS).catch((SS => CH.error(SS)))
    }

    function tg(SS) {
      UH ? UH("consent", "update", SS) : LH(SS)
    }
    const bg = "@firebase/analytics",
      Xg = "0.10.0";
    (0, tS.A)(new xS.d(jH, ((SS, HS) => {
      let {
        options: gS
      } = HS;
      return FH(SS.getProvider("app").getImmediate(), SS.getProvider("installations-internal").getImmediate(), gS)
    }), "PUBLIC")), (0, tS.A)(new xS.d("analytics-internal", (function(SS) {
      try {
        const HS = SS.getProvider(jH).getImmediate();
        return {
          logEvent: (SS, gS, tS) => gg(HS, SS, gS, tS)
        }
      } catch (HS) {
        throw PH.create("interop-component-reg-failed", {
          reason: HS
        })
      }
    }), "PRIVATE")), (0, tS.T)(bg, Xg), (0, tS.T)(bg, Xg, "esm2017")
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);