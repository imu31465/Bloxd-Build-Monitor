/*! For license information please see 90jf8k.237.650ee0c4.chunk.js.LICENSE.txt */
export const id = 237;
export const ids = [237];
export const modules = {
  38498: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      getAnalytics: () => UW,
      getGoogleAnalyticsClientId: () => JW,
      initializeAnalytics: () => BW,
      isSupported: () => jS,
      logEvent: () => SS,
      setAnalyticsCollectionEnabled: () => FS,
      setConsent: () => CS,
      setCurrentScreen: () => vS,
      setDefaultEventParameters: () => WS,
      setUserId: () => pW,
      setUserProperties: () => lW,
      settings: () => wW
    });
    var CF = SF(38475),
      AF = SF(38496),
      uF = SF(38488),
      hF = SF(38479);
    let bW, dF;
    const PF = new WeakMap,
      RF = new WeakMap,
      iW = new WeakMap,
      eF = new WeakMap,
      EF = new WeakMap;
    let QF = {
      get(FF, WF, SF) {
        if (FF instanceof IDBTransaction) {
          if ("done" === WF) return RF.get(FF);
          if ("objectStoreNames" === WF) return FF.objectStoreNames || iW.get(FF);
          if ("store" === WF) return SF.objectStoreNames[1] ? void 0 : SF.objectStore(SF.objectStoreNames[0])
        }
        return tW(FF[WF])
      },
      set: (FF, WF, SF) => (FF[WF] = SF, !0),
      has: (FF, WF) => FF instanceof IDBTransaction && ("done" === WF || "store" === WF) || WF in FF
    };

    function rW(FF) {
      return FF !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (dF || (dF = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(FF) ? function() {
        for (var WF = arguments.length, SF = new Array(WF), CF = 0; CF < WF; CF++) SF[CF] = arguments[CF];
        return FF.apply(TF(this), SF), tW(PF.get(this))
      } : function() {
        for (var WF = arguments.length, SF = new Array(WF), CF = 0; CF < WF; CF++) SF[CF] = arguments[CF];
        return tW(FF.apply(TF(this), SF))
      } : function(WF) {
        for (var SF = arguments.length, CF = new Array(SF > 1 ? SF - 1 : 0), AF = 1; AF < SF; AF++) CF[AF - 1] = arguments[AF];
        const uF = FF.call(TF(this), WF, ...CF);
        return iW.set(uF, WF.sort ? WF.sort() : [WF]), tW(uF)
      }
    }

    function gW(FF) {
      return "function" === typeof FF ? rW(FF) : (FF instanceof IDBTransaction && function(FF) {
        if (RF.has(FF)) return;
        const WF = new Promise(((WF, SF) => {
          const CF = () => {
              FF.removeEventListener("complete", AF), FF.removeEventListener("error", uF), FF.removeEventListener("abort", uF)
            },
            AF = () => {
              WF(), CF()
            },
            uF = () => {
              SF(FF.error || new DOMException("AbortError", "AbortError")), CF()
            };
          FF.addEventListener("complete", AF), FF.addEventListener("error", uF), FF.addEventListener("abort", uF)
        }));
        RF.set(FF, WF)
      }(FF), WF = FF, (bW || (bW = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((FF => WF instanceof FF)) ? new Proxy(FF, QF) : FF);
      var WF
    }

    function tW(FF) {
      if (FF instanceof IDBRequest) return function(FF) {
        const WF = new Promise(((WF, SF) => {
          const CF = () => {
              FF.removeEventListener("success", AF), FF.removeEventListener("error", uF)
            },
            AF = () => {
              WF(tW(FF.result)), CF()
            },
            uF = () => {
              SF(FF.error), CF()
            };
          FF.addEventListener("success", AF), FF.addEventListener("error", uF)
        }));
        return WF.then((WF => {
          WF instanceof IDBCursor && PF.set(WF, FF)
        })).catch((() => {})), EF.set(WF, FF), WF
      }(FF);
      if (eF.has(FF)) return eF.get(FF);
      const WF = gW(FF);
      return WF !== FF && (eF.set(FF, WF), EF.set(WF, FF)), WF
    }
    const TF = FF => EF.get(FF);
    const aW = ["get", "getKey", "getAll", "getAllKeys", "count"],
      kW = ["put", "add", "delete", "clear"],
      qW = new Map;

    function VF(FF, WF) {
      if (!(FF instanceof IDBDatabase) || WF in FF || "string" !== typeof WF) return;
      if (qW.get(WF)) return qW.get(WF);
      const SF = WF.replace(/FromIndex$/, ""),
        CF = WF !== SF,
        AF = kW.includes(SF);
      if (!(SF in (CF ? IDBIndex : IDBObjectStore).prototype) || !AF && !aW.includes(SF)) return;
      const uF = async function(FF) {
        const WF = this.transaction(FF, AF ? "readwrite" : "readonly");
        let uF = WF.store;
        for (var hF = arguments.length, bW = new Array(hF > 1 ? hF - 1 : 0), dF = 1; dF < hF; dF++) bW[dF - 1] = arguments[dF];
        return CF && (uF = uF.index(bW.shift())), (await Promise.all([uF[SF](...bW), AF && WF.done]))[0]
      };
      return qW.set(WF, uF), uF
    }
    QF = (FF => ({
      ...FF,
      get: (WF, SF, CF) => VF(WF, SF) || FF.get(WF, SF, CF),
      has: (WF, SF) => !!VF(WF, SF) || FF.has(WF, SF)
    }))(QF);
    const NF = "@firebase/installations",
      DF = "0.6.4",
      LF = 1e4,
      mW = `w:${DF}`,
      OF = "FIS_v2",
      xW = 36e5,
      ZF = {
        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
        "not-registered": "Firebase Installation is not registered.",
        "installation-not-found": "Firebase Installation not found.",
        "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        "app-offline": "Could not process request. Application offline.",
        "delete-pending-registration": "Can't delete installation while there is a pending registration request."
      },
      oF = new uF.e("installations", "Installations", ZF);

    function YF(FF) {
      return FF instanceof uF.f && FF.code.includes("request-failed")
    }

    function MF(FF) {
      let {
        projectId: WF
      } = FF;
      return `https://firebaseinstallations.googleapis.com/v1/projects/${WF}/installations`
    }

    function cW(FF) {
      return {
        token: FF.token,
        requestStatus: 2,
        expiresIn: (WF = FF.expiresIn, Number(WF.replace("s", "000"))),
        creationTime: Date.now()
      };
      var WF
    }
    async function GF(FF, WF) {
      const SF = (await WF.json()).error;
      return oF.create("request-failed", {
        requestName: FF,
        serverCode: SF.code,
        serverMessage: SF.message,
        serverStatus: SF.status
      })
    }

    function zW(FF) {
      let {
        apiKey: WF
      } = FF;
      return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": WF
      })
    }

    function IF(FF, WF) {
      let {
        refreshToken: SF
      } = WF;
      const CF = zW(FF);
      return CF.append("Authorization", function(FF) {
        return `${OF} ${FF}`
      }(SF)), CF
    }
    async function fF(FF) {
      const WF = await FF();
      return WF.status >= 500 && WF.status < 600 ? FF() : WF
    }

    function yW(FF) {
      return new Promise((WF => {
        setTimeout(WF, FF)
      }))
    }
    const sF = /^[cdef][\w-]{21}$/;

    function nF() {
      try {
        const FF = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(FF), FF[0] = 112 + FF[0] % 16;
        const WF = function(FF) {
          const WF = (SF = FF, btoa(String.fromCharCode(...SF)).replace(/\+/g, "-").replace(/\//g, "_"));
          var SF;
          return WF.substr(0, 22)
        }(FF);
        return sF.test(WF) ? WF : ""
      } catch (FF) {
        return ""
      }
    }

    function HF(FF) {
      return `${FF.appName}!${FF.appId}`
    }
    const KF = new Map;

    function wF(FF, WF) {
      const SF = HF(FF);
      XF(SF, WF),
        function(FF, WF) {
          const SF = BF();
          SF && SF.postMessage({
            key: FF,
            fid: WF
          });
          jW()
        }(SF, WF)
    }

    function XF(FF, WF) {
      const SF = KF.get(FF);
      if (SF)
        for (const CF of SF) CF(WF)
    }
    let UF = null;

    function BF() {
      return !UF && "BroadcastChannel" in self && (UF = new BroadcastChannel("[Firebase] FID Change"), UF.onmessage = FF => {
        XF(FF.data.key, FF.data.fid)
      }), UF
    }

    function jW() {
      0 === KF.size && UF && (UF.close(), UF = null)
    }
    const vW = "firebase-installations-store";
    let JF = null;

    function pF() {
      return JF || (JF = function(FF, WF) {
        let {
          blocked: SF,
          upgrade: CF,
          blocking: AF,
          terminated: uF
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const hF = indexedDB.open(FF, WF),
          bW = tW(hF);
        return CF && hF.addEventListener("upgradeneeded", (FF => {
          CF(tW(hF.result), FF.oldVersion, FF.newVersion, tW(hF.transaction))
        })), SF && hF.addEventListener("blocked", (() => SF())), bW.then((FF => {
          uF && FF.addEventListener("close", (() => uF())), AF && FF.addEventListener("versionchange", (() => AF()))
        })).catch((() => {})), bW
      }("firebase-installations-database", 1, {
        upgrade: (FF, WF) => {
          if (0 === WF) FF.createObjectStore(vW)
        }
      })), JF
    }
    async function lF(FF, WF) {
      const SF = HF(FF),
        CF = (await pF()).transaction(vW, "readwrite"),
        AF = CF.objectStore(vW),
        uF = await AF.get(SF);
      return await AF.put(WF, SF), await CF.done, uF && uF.fid === WF.fid || wF(FF, WF.fid), WF
    }
    async function FW(FF) {
      const WF = HF(FF),
        SF = (await pF()).transaction(vW, "readwrite");
      await SF.objectStore(vW).delete(WF), await SF.done
    }
    async function WW(FF, WF) {
      const SF = HF(FF),
        CF = (await pF()).transaction(vW, "readwrite"),
        AF = CF.objectStore(vW),
        uF = await AF.get(SF),
        hF = WF(uF);
      return void 0 === hF ? await AF.delete(SF) : await AF.put(hF, SF), await CF.done, !hF || uF && uF.fid === hF.fid || wF(FF, hF.fid), hF
    }
    async function SW(FF) {
      let WF;
      const SF = await WW(FF.appConfig, (SF => {
        const CF = function(FF) {
            const WF = FF || {
              fid: nF(),
              registrationStatus: 0
            };
            return uW(WF)
          }(SF),
          AF = function(FF, WF) {
            if (0 === WF.registrationStatus) {
              if (!navigator.onLine) {
                return {
                  installationEntry: WF,
                  registrationPromise: Promise.reject(oF.create("app-offline"))
                }
              }
              const SF = {
                  fid: WF.fid,
                  registrationStatus: 1,
                  registrationTime: Date.now()
                },
                CF = async function(FF, WF) {
                  try {
                    const SF = await async function(FF, WF) {
                      let {
                        appConfig: SF,
                        heartbeatServiceProvider: CF
                      } = FF, {
                        fid: AF
                      } = WF;
                      const uF = MF(SF),
                        hF = zW(SF),
                        bW = CF.getImmediate({
                          optional: !0
                        });
                      if (bW) {
                        const FF = await bW.getHeartbeatsHeader();
                        FF && hF.append("x-firebase-client", FF)
                      }
                      const dF = {
                          fid: AF,
                          authVersion: OF,
                          appId: SF.appId,
                          sdkVersion: mW
                        },
                        PF = {
                          method: "POST",
                          headers: hF,
                          body: JSON.stringify(dF)
                        },
                        RF = await fF((() => fetch(uF, PF)));
                      if (RF.ok) {
                        const FF = await RF.json();
                        return {
                          fid: FF.fid || AF,
                          registrationStatus: 2,
                          refreshToken: FF.refreshToken,
                          authToken: cW(FF.authToken)
                        }
                      }
                      throw await GF("Create Installation", RF)
                    }(FF, WF);
                    return lF(FF.appConfig, SF)
                  } catch (SF) {
                    throw YF(SF) && 409 === SF.customData.serverCode ? await FW(FF.appConfig) : await lF(FF.appConfig, {
                      fid: WF.fid,
                      registrationStatus: 0
                    }), SF
                  }
                }(FF, SF);
              return {
                installationEntry: SF,
                registrationPromise: CF
              }
            }
            return 1 === WF.registrationStatus ? {
              installationEntry: WF,
              registrationPromise: CW(FF)
            } : {
              installationEntry: WF
            }
          }(FF, CF);
        return WF = AF.registrationPromise, AF.installationEntry
      }));
      return "" === SF.fid ? {
        installationEntry: await WF
      } : {
        installationEntry: SF,
        registrationPromise: WF
      }
    }
    async function CW(FF) {
      let WF = await AW(FF.appConfig);
      for (; 1 === WF.registrationStatus;) await yW(100), WF = await AW(FF.appConfig);
      if (0 === WF.registrationStatus) {
        const {
          installationEntry: WF,
          registrationPromise: SF
        } = await SW(FF);
        return SF || WF
      }
      return WF
    }

    function AW(FF) {
      return WW(FF, (FF => {
        if (!FF) throw oF.create("installation-not-found");
        return uW(FF)
      }))
    }

    function uW(FF) {
      return 1 === (WF = FF).registrationStatus && WF.registrationTime + LF < Date.now() ? {
        fid: FF.fid,
        registrationStatus: 0
      } : FF;
      var WF
    }
    async function hW(FF, WF) {
      let {
        appConfig: SF,
        heartbeatServiceProvider: CF
      } = FF;
      const AF = function(FF, WF) {
          let {
            fid: SF
          } = WF;
          return `${MF(FF)}/${SF}/authTokens:generate`
        }(SF, WF),
        uF = IF(SF, WF),
        hF = CF.getImmediate({
          optional: !0
        });
      if (hF) {
        const FF = await hF.getHeartbeatsHeader();
        FF && uF.append("x-firebase-client", FF)
      }
      const bW = {
          installation: {
            sdkVersion: mW,
            appId: SF.appId
          }
        },
        dF = {
          method: "POST",
          headers: uF,
          body: JSON.stringify(bW)
        },
        PF = await fF((() => fetch(AF, dF)));
      if (PF.ok) {
        return cW(await PF.json())
      }
      throw await GF("Generate Auth Token", PF)
    }
    async function bS(FF) {
      let WF, SF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const CF = await WW(FF.appConfig, (CF => {
        if (!PW(CF)) throw oF.create("not-registered");
        const AF = CF.authToken;
        if (!SF && function(FF) {
            return 2 === FF.requestStatus && ! function(FF) {
              const WF = Date.now();
              return WF < FF.creationTime || FF.creationTime + FF.expiresIn < WF + xW
            }(FF)
          }(AF)) return CF;
        if (1 === AF.requestStatus) return WF = async function(FF, WF) {
          let SF = await dW(FF.appConfig);
          for (; 1 === SF.authToken.requestStatus;) await yW(100), SF = await dW(FF.appConfig);
          const CF = SF.authToken;
          return 0 === CF.requestStatus ? bS(FF, WF) : CF
        }(FF, SF), CF;
        {
          if (!navigator.onLine) throw oF.create("app-offline");
          const SF = function(FF) {
            const WF = {
              requestStatus: 1,
              requestTime: Date.now()
            };
            return Object.assign(Object.assign({}, FF), {
              authToken: WF
            })
          }(CF);
          return WF = async function(FF, WF) {
            try {
              const SF = await hW(FF, WF),
                CF = Object.assign(Object.assign({}, WF), {
                  authToken: SF
                });
              return await lF(FF.appConfig, CF), SF
            } catch (SF) {
              if (!YF(SF) || 401 !== SF.customData.serverCode && 404 !== SF.customData.serverCode) {
                const SF = Object.assign(Object.assign({}, WF), {
                  authToken: {
                    requestStatus: 0
                  }
                });
                await lF(FF.appConfig, SF)
              } else await FW(FF.appConfig);
              throw SF
            }
          }(FF, SF), SF
        }
      }));
      return WF ? await WF : CF.authToken
    }

    function dW(FF) {
      return WW(FF, (FF => {
        if (!PW(FF)) throw oF.create("not-registered");
        const WF = FF.authToken;
        return 1 === (SF = WF).requestStatus && SF.requestTime + LF < Date.now() ? Object.assign(Object.assign({}, FF), {
          authToken: {
            requestStatus: 0
          }
        }) : FF;
        var SF
      }))
    }

    function PW(FF) {
      return void 0 !== FF && 2 === FF.registrationStatus
    }
    async function RW(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const SF = FF;
      await async function(FF) {
        const {
          registrationPromise: WF
        } = await SW(FF);
        WF && await WF
      }(SF);
      return (await bS(SF, WF)).token
    }

    function iS(FF) {
      return oF.create("missing-app-config-values", {
        valueName: FF
      })
    }
    const eW = "installations",
      EW = FF => {
        const WF = FF.getProvider("app").getImmediate(),
          SF = function(FF) {
            if (!FF || !FF.options) throw iS("App Configuration");
            if (!FF.name) throw iS("App Name");
            const WF = ["projectId", "apiKey", "appId"];
            for (const SF of WF)
              if (!FF.options[SF]) throw iS(SF);
            return {
              appName: FF.name,
              projectId: FF.options.projectId,
              apiKey: FF.options.apiKey,
              appId: FF.options.appId
            }
          }(WF);
        return {
          app: WF,
          appConfig: SF,
          heartbeatServiceProvider: (0, CF.B)(WF, "heartbeat"),
          _delete: () => Promise.resolve()
        }
      },
      QW = FF => {
        const WF = FF.getProvider("app").getImmediate(),
          SF = (0, CF.B)(WF, eW).getImmediate();
        return {
          getId: () => async function(FF) {
            const WF = FF,
              {
                installationEntry: SF,
                registrationPromise: CF
              } = await SW(WF);
            return CF ? CF.catch(console.error) : bS(WF).catch(console.error), SF.fid
          }(SF),
          getToken: FF => RW(SF, FF)
        }
      };
    (0, CF.E)(new hF.e(eW, EW, "PUBLIC")), (0, CF.E)(new hF.e("installations-internal", QW, "PRIVATE")), (0, CF.V)(NF, DF), (0, CF.V)(NF, DF, "esm2017");
    const rS = "analytics",
      gS = "https://www.googletagmanager.com/gtag/js",
      tS = new AF.d("@firebase/analytics"),
      TW = {
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
      aS = new uF.e("analytics", "Analytics", TW);

    function kS(FF) {
      if (!FF.startsWith(gS)) {
        const WF = aS.create("invalid-gtag-resource", {
          gtagURL: FF
        });
        return tS.warn(WF.message), ""
      }
      return FF
    }

    function qS(FF) {
      return Promise.all(FF.map((FF => FF.catch((FF => FF)))))
    }

    function VW(FF, WF) {
      const SF = function(FF, WF) {
          let SF;
          return window.trustedTypes && (SF = window.trustedTypes.createPolicy(FF, WF)), SF
        }("firebase-js-sdk-policy", {
          createScriptURL: kS
        }),
        CF = document.createElement("script"),
        AF = `${gS}?l=${FF}&id=${WF}`;
      CF.src = SF ? null === SF || void 0 === SF ? void 0 : SF.createScriptURL(AF) : AF, CF.async = !0, document.head.appendChild(CF)
    }

    function NW(FF, WF, SF, CF) {
      return async function(AF) {
        try {
          for (var uF = arguments.length, hF = new Array(uF > 1 ? uF - 1 : 0), bW = 1; bW < uF; bW++) hF[bW - 1] = arguments[bW];
          if ("event" === AF) {
            const [CF, AF] = hF;
            await async function(FF, WF, SF, CF, AF) {
              try {
                let uF = [];
                if (AF && AF.send_to) {
                  let FF = AF.send_to;
                  Array.isArray(FF) || (FF = [FF]);
                  const CF = await qS(SF);
                  for (const SF of FF) {
                    const FF = CF.find((FF => FF.measurementId === SF)),
                      AF = FF && WF[FF.appId];
                    if (!AF) {
                      uF = [];
                      break
                    }
                    uF.push(AF)
                  }
                }
                0 === uF.length && (uF = Object.values(WF)), await Promise.all(uF), FF("event", CF, AF || {})
              } catch (uF) {
                tS.error(uF)
              }
            }(FF, WF, SF, CF, AF)
          } else if ("config" === AF) {
            const [AF, uF] = hF;
            await async function(FF, WF, SF, CF, AF, uF) {
              const hF = CF[AF];
              try {
                if (hF) await WF[hF];
                else {
                  const FF = (await qS(SF)).find((FF => FF.measurementId === AF));
                  FF && await WF[FF.appId]
                }
              } catch (bW) {
                tS.error(bW)
              }
              FF("config", AF, uF)
            }(FF, WF, SF, CF, AF, uF)
          } else if ("consent" === AF) {
            const [WF] = hF;
            FF("consent", "update", WF)
          } else if ("get" === AF) {
            const [WF, SF, CF] = hF;
            FF("get", WF, SF, CF)
          } else if ("set" === AF) {
            const [WF] = hF;
            FF("set", WF)
          } else FF(AF, ...hF)
        } catch (dF) {
          tS.error(dF)
        }
      }
    }
    const DW = new class {
      constructor() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
        this.throttleMetadata = FF, this.intervalMillis = WF
      }
      getThrottleMetadata(FF) {
        return this.throttleMetadata[FF]
      }
      setThrottleMetadata(FF, WF) {
        this.throttleMetadata[FF] = WF
      }
      deleteThrottleMetadata(FF) {
        delete this.throttleMetadata[FF]
      }
    };

    function LW(FF) {
      return new Headers({
        Accept: "application/json",
        "x-goog-api-key": FF
      })
    }
    async function mS(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DW,
        SF = arguments.length > 2 ? arguments[2] : void 0;
      const {
        appId: CF,
        apiKey: AF,
        measurementId: uF
      } = FF.options;
      if (!CF) throw aS.create("no-app-id");
      if (!AF) {
        if (uF) return {
          measurementId: uF,
          appId: CF
        };
        throw aS.create("no-api-key")
      }
      const hF = WF.getThrottleMetadata(CF) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        },
        bW = new xS;
      return setTimeout((async () => {
        bW.abort()
      }), void 0 !== SF ? SF : 6e4), OW({
        appId: CF,
        apiKey: AF,
        measurementId: uF
      }, hF, bW, WF)
    }
    async function OW(FF, WF, SF) {
      let {
        throttleEndTimeMillis: CF,
        backoffCount: AF
      } = WF, hF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : DW;
      var bW;
      const {
        appId: dF,
        measurementId: PF
      } = FF;
      try {
        await
        function(FF, WF) {
          return new Promise(((SF, CF) => {
            const AF = Math.max(WF - Date.now(), 0),
              uF = setTimeout(SF, AF);
            FF.addEventListener((() => {
              clearTimeout(uF), CF(aS.create("fetch-throttle", {
                throttleEndTimeMillis: WF
              }))
            }))
          }))
        }(SF, CF)
      } catch (RF) {
        if (PF) return tS.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${PF} provided in the "measurementId" field in the local Firebase config. [${null===RF||void 0===RF?void 0:RF.message}]`), {
          appId: dF,
          measurementId: PF
        };
        throw RF
      }
      try {
        const WF = await async function(FF) {
          var WF;
          const {
            appId: SF,
            apiKey: CF
          } = FF, AF = {
            method: "GET",
            headers: LW(CF)
          }, uF = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", SF), hF = await fetch(uF, AF);
          if (200 !== hF.status && 304 !== hF.status) {
            let FF = "";
            try {
              const SF = await hF.json();
              (null === (WF = SF.error) || void 0 === WF ? void 0 : WF.message) && (FF = SF.error.message)
            } catch (bW) {}
            throw aS.create("config-fetch-failed", {
              httpStatus: hF.status,
              responseMessage: FF
            })
          }
          return hF.json()
        }(FF);
        return hF.deleteThrottleMetadata(dF), WF
      } catch (RF) {
        const WF = RF;
        if (! function(FF) {
            if (!(FF instanceof uF.f) || !FF.customData) return !1;
            const WF = Number(FF.customData.httpStatus);
            return 429 === WF || 500 === WF || 503 === WF || 504 === WF
          }(WF)) {
          if (hF.deleteThrottleMetadata(dF), PF) return tS.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${PF} provided in the "measurementId" field in the local Firebase config. [${null===WF||void 0===WF?void 0:WF.message}]`), {
            appId: dF,
            measurementId: PF
          };
          throw RF
        }
        const CF = 503 === Number(null === (bW = null === WF || void 0 === WF ? void 0 : WF.customData) || void 0 === bW ? void 0 : bW.httpStatus) ? (0, uF.q)(AF, hF.intervalMillis, 30) : (0, uF.q)(AF, hF.intervalMillis),
          iW = {
            throttleEndTimeMillis: Date.now() + CF,
            backoffCount: AF + 1
          };
        return hF.setThrottleMetadata(dF, iW), tS.debug(`Calling attemptFetch again in ${CF} millis`), OW(FF, iW, SF, hF)
      }
    }
    class xS {
      constructor() {
        this.listeners = []
      }
      addEventListener(FF) {
        this.listeners.push(FF)
      }
      abort() {
        this.listeners.forEach((FF => FF()))
      }
    }
    let ZW, oW;

    function YW(FF) {
      oW = FF
    }

    function MW(FF) {
      ZW = FF
    }
    async function cS(FF, WF, SF, CF, AF, hF, bW) {
      var dF;
      const PF = mS(FF);
      PF.then((WF => {
        SF[WF.measurementId] = WF.appId, FF.options.measurementId && WF.measurementId !== FF.options.measurementId && tS.warn(`The measurement ID in the local Firebase config (${FF.options.measurementId}) does not match the measurement ID fetched from the server (${WF.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
      })).catch((FF => tS.error(FF))), WF.push(PF);
      const RF = async function() {
        if (!(0, uF.T)()) return tS.warn(aS.create("indexeddb-unavailable", {
          errorInfo: "IndexedDB is not available in this environment."
        }).message), !1;
        try {
          await (0, uF.cb)()
        } catch (FF) {
          return tS.warn(aS.create("indexeddb-unavailable", {
            errorInfo: null === FF || void 0 === FF ? void 0 : FF.toString()
          }).message), !1
        }
        return !0
      }().then((FF => FF ? CF.getId() : void 0)), [iW, eF] = await Promise.all([PF, RF]);
      (function(FF) {
        const WF = window.document.getElementsByTagName("script");
        for (const SF of Object.values(WF))
          if (SF.src && SF.src.includes(gS) && SF.src.includes(FF)) return SF;
        return null
      })(hF) || VW(hF, iW.measurementId), oW && (AF("consent", "default", oW), YW(void 0)), AF("js", new Date);
      const EF = null !== (dF = null === bW || void 0 === bW ? void 0 : bW.config) && void 0 !== dF ? dF : {};
      return EF.origin = "firebase", EF.update = !0, null != eF && (EF.firebase_id = eF), AF("config", iW.measurementId, EF), ZW && (AF("set", ZW), MW(void 0)), iW.measurementId
    }
    class GW {
      constructor(FF) {
        this.app = FF
      }
      _delete() {
        return delete zS[this.app.options.appId], Promise.resolve()
      }
    }
    let zS = {},
      IW = [];
    const fW = {};
    let yS, sW, nW = "dataLayer",
      HW = "gtag",
      KW = !1;

    function wW(FF) {
      if (KW) throw aS.create("already-initialized");
      FF.dataLayerName && (nW = FF.dataLayerName), FF.gtagName && (HW = FF.gtagName)
    }

    function XW(FF, WF, SF) {
      ! function() {
        const FF = [];
        if ((0, uF.N)() && FF.push("This is a browser extension environment."), (0, uF.h)() || FF.push("Cookies are not available."), FF.length > 0) {
          const WF = FF.map(((FF, WF) => `(${WF+1}) ${FF}`)).join(" "),
            SF = aS.create("invalid-analytics-context", {
              errorInfo: WF
            });
          tS.warn(SF.message)
        }
      }();
      const CF = FF.options.appId;
      if (!CF) throw aS.create("no-app-id");
      if (!FF.options.apiKey) {
        if (!FF.options.measurementId) throw aS.create("no-api-key");
        tS.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${FF.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
      }
      if (null != zS[CF]) throw aS.create("already-exists", {
        id: CF
      });
      if (!KW) {
        ! function(FF) {
          let WF = [];
          Array.isArray(window[FF]) ? WF = window[FF] : window[FF] = WF
        }(nW);
        const {
          wrappedGtag: FF,
          gtagCore: WF
        } = function(FF, WF, SF, CF, AF) {
          let uF = function() {
            for (var FF = arguments.length, WF = new Array(FF), SF = 0; SF < FF; SF++) WF[SF] = arguments[SF];
            window[CF].push(arguments)
          };
          return window[AF] && "function" === typeof window[AF] && (uF = window[AF]), window[AF] = NW(uF, FF, WF, SF), {
            gtagCore: uF,
            wrappedGtag: window[AF]
          }
        }(zS, IW, fW, nW, HW);
        sW = FF, yS = WF, KW = !0
      }
      zS[CF] = cS(FF, IW, fW, WF, yS, nW, SF);
      return new GW(FF)
    }

    function UW() {
      let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, CF.M)();
      FF = (0, uF.J)(FF);
      const WF = (0, CF.B)(FF, rS);
      return WF.isInitialized() ? WF.getImmediate() : BW(FF)
    }

    function BW(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const SF = (0, CF.B)(FF, rS);
      if (SF.isInitialized()) {
        const FF = SF.getImmediate();
        if ((0, uF.w)(WF, SF.getOptions())) return FF;
        throw aS.create("already-initialized")
      }
      return SF.initialize({
        options: WF
      })
    }
    async function jS() {
      if ((0, uF.N)()) return !1;
      if (!(0, uF.h)()) return !1;
      if (!(0, uF.T)()) return !1;
      try {
        return await (0, uF.cb)()
      } catch (FF) {
        return !1
      }
    }

    function vS(FF, WF, SF) {
      FF = (0, uF.J)(FF), async function(FF, WF, SF, CF) {
        if (CF && CF.global) return FF("set", {
          screen_name: SF
        }), Promise.resolve();
        FF("config", await WF, {
          update: !0,
          screen_name: SF
        })
      }(sW, zS[FF.app.options.appId], WF, SF).catch((FF => tS.error(FF)))
    }
    async function JW(FF) {
      return FF = (0, uF.J)(FF), async function(FF, WF) {
        const SF = await WF;
        return new Promise(((WF, CF) => {
          FF("get", SF, "client_id", (FF => {
            FF || CF(aS.create("no-client-id")), WF(FF)
          }))
        }))
      }(sW, zS[FF.app.options.appId])
    }

    function pW(FF, WF, SF) {
      FF = (0, uF.J)(FF), async function(FF, WF, SF, CF) {
        if (CF && CF.global) return FF("set", {
          user_id: SF
        }), Promise.resolve();
        FF("config", await WF, {
          update: !0,
          user_id: SF
        })
      }(sW, zS[FF.app.options.appId], WF, SF).catch((FF => tS.error(FF)))
    }

    function lW(FF, WF, SF) {
      FF = (0, uF.J)(FF), async function(FF, WF, SF, CF) {
        if (CF && CF.global) {
          const WF = {};
          for (const FF of Object.keys(SF)) WF[`user_properties.${FF}`] = SF[FF];
          return FF("set", WF), Promise.resolve()
        }
        FF("config", await WF, {
          update: !0,
          user_properties: SF
        })
      }(sW, zS[FF.app.options.appId], WF, SF).catch((FF => tS.error(FF)))
    }

    function FS(FF, WF) {
      FF = (0, uF.J)(FF), async function(FF, WF) {
        const SF = await FF;
        window[`ga-disable-${SF}`] = !WF
      }(zS[FF.app.options.appId], WF).catch((FF => tS.error(FF)))
    }

    function WS(FF) {
      sW ? sW("set", FF) : MW(FF)
    }

    function SS(FF, WF, SF, CF) {
      FF = (0, uF.J)(FF), async function(FF, WF, SF, CF, AF) {
        if (AF && AF.global) FF("event", SF, CF);
        else {
          const AF = await WF;
          FF("event", SF, Object.assign(Object.assign({}, CF), {
            send_to: AF
          }))
        }
      }(sW, zS[FF.app.options.appId], WF, SF, CF).catch((FF => tS.error(FF)))
    }

    function CS(FF) {
      sW ? sW("consent", "update", FF) : YW(FF)
    }
    const AS = "@firebase/analytics",
      uS = "0.10.0";
    (0, CF.E)(new hF.e(rS, ((FF, WF) => {
      let {
        options: SF
      } = WF;
      return XW(FF.getProvider("app").getImmediate(), FF.getProvider("installations-internal").getImmediate(), SF)
    }), "PUBLIC")), (0, CF.E)(new hF.e("analytics-internal", (function(FF) {
      try {
        const WF = FF.getProvider(rS).getImmediate();
        return {
          logEvent: (FF, SF, CF) => SS(WF, FF, SF, CF)
        }
      } catch (WF) {
        throw aS.create("interop-component-reg-failed", {
          reason: WF
        })
      }
    }), "PRIVATE")), (0, CF.V)(AS, uS), (0, CF.V)(AS, uS, "esm2017")
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);