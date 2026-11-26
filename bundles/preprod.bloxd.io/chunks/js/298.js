/*! For license information please see cwj32u.298.7e30732e.chunk.js.LICENSE.txt */
export const id = 298;
export const ids = [298];
export const modules = {
  41842: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      getAnalytics: () => dB,
      getGoogleAnalyticsClientId: () => iB,
      initializeAnalytics: () => aB,
      isSupported: () => sB,
      logEvent: () => LL,
      setAnalyticsCollectionEnabled: () => HL,
      setConsent: () => AL,
      setCurrentScreen: () => JB,
      setDefaultEventParameters: () => BL,
      setUserId: () => pB,
      setUserProperties: () => yB,
      settings: () => wB
    });
    var AH = LH(41817),
      rH = LH(41836),
      SH = LH(41831),
      hH = LH(41822);
    let tH, zH;
    const CH = new WeakMap,
      EH = new WeakMap,
      XH = new WeakMap,
      GH = new WeakMap,
      YH = new WeakMap;
    let uH = {
      get(HH, BH, LH) {
        if (HH instanceof IDBTransaction) {
          if ("done" === BH) return EH.get(HH);
          if ("objectStoreNames" === BH) return HH.objectStoreNames || XH.get(HH);
          if ("store" === BH) return LH.objectStoreNames[1] ? void 0 : LH.objectStore(LH.objectStoreNames[0])
        }
        return MH(HH[BH])
      },
      set: (HH, BH, LH) => (HH[BH] = LH, !0),
      has: (HH, BH) => HH instanceof IDBTransaction && ("done" === BH || "store" === BH) || BH in HH
    };

    function QH(HH) {
      return HH !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (zH || (zH = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(HH) ? function() {
        for (var BH = arguments.length, LH = new Array(BH), AH = 0; AH < BH; AH++) LH[AH] = arguments[AH];
        return HH.apply(xH(this), LH), MH(CH.get(this))
      } : function() {
        for (var BH = arguments.length, LH = new Array(BH), AH = 0; AH < BH; AH++) LH[AH] = arguments[AH];
        return MH(HH.apply(xH(this), LH))
      } : function(BH) {
        for (var LH = arguments.length, AH = new Array(LH > 1 ? LH - 1 : 0), rH = 1; rH < LH; rH++) AH[rH - 1] = arguments[rH];
        const SH = HH.call(xH(this), BH, ...AH);
        return XH.set(SH, BH.sort ? BH.sort() : [BH]), MH(SH)
      }
    }

    function WH(HH) {
      return "function" === typeof HH ? QH(HH) : (HH instanceof IDBTransaction && function(HH) {
        if (EH.has(HH)) return;
        const BH = new Promise(((BH, LH) => {
          const AH = () => {
              HH.removeEventListener("complete", rH), HH.removeEventListener("error", SH), HH.removeEventListener("abort", SH)
            },
            rH = () => {
              BH(), AH()
            },
            SH = () => {
              LH(HH.error || new DOMException("AbortError", "AbortError")), AH()
            };
          HH.addEventListener("complete", rH), HH.addEventListener("error", SH), HH.addEventListener("abort", SH)
        }));
        EH.set(HH, BH)
      }(HH), BH = HH, (tH || (tH = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((HH => BH instanceof HH)) ? new Proxy(HH, uH) : HH);
      var BH
    }

    function MH(HH) {
      if (HH instanceof IDBRequest) return function(HH) {
        const BH = new Promise(((BH, LH) => {
          const AH = () => {
              HH.removeEventListener("success", rH), HH.removeEventListener("error", SH)
            },
            rH = () => {
              BH(MH(HH.result)), AH()
            },
            SH = () => {
              LH(HH.error), AH()
            };
          HH.addEventListener("success", rH), HH.addEventListener("error", SH)
        }));
        return BH.then((BH => {
          BH instanceof IDBCursor && CH.set(BH, HH)
        })).catch((() => {})), YH.set(BH, HH), BH
      }(HH);
      if (GH.has(HH)) return GH.get(HH);
      const BH = WH(HH);
      return BH !== HH && (GH.set(HH, BH), YH.set(BH, HH)), BH
    }
    const xH = HH => YH.get(HH);
    const vH = ["get", "getKey", "getAll", "getAllKeys", "count"],
      PH = ["put", "add", "delete", "clear"],
      TH = new Map;

    function UH(HH, BH) {
      if (!(HH instanceof IDBDatabase) || BH in HH || "string" !== typeof BH) return;
      if (TH.get(BH)) return TH.get(BH);
      const LH = BH.replace(/FromIndex$/, ""),
        AH = BH !== LH,
        rH = PH.includes(LH);
      if (!(LH in (AH ? IDBIndex : IDBObjectStore).prototype) || !rH && !vH.includes(LH)) return;
      const SH = async function(HH) {
        const BH = this.transaction(HH, rH ? "readwrite" : "readonly");
        let SH = BH.store;
        for (var hH = arguments.length, tH = new Array(hH > 1 ? hH - 1 : 0), zH = 1; zH < hH; zH++) tH[zH - 1] = arguments[zH];
        return AH && (SH = SH.index(tH.shift())), (await Promise.all([SH[LH](...tH), rH && BH.done]))[0]
      };
      return TH.set(BH, SH), SH
    }
    uH = (HH => ({
      ...HH,
      get: (BH, LH, AH) => UH(BH, LH) || HH.get(BH, LH, AH),
      has: (BH, LH) => !!UH(BH, LH) || HH.has(BH, LH)
    }))(uH);
    const VH = "@firebase/installations",
      OH = "0.6.4",
      bH = 1e4,
      kH = `w:${OH}`,
      mH = "FIS_v2",
      oH = 36e5,
      IH = {
        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
        "not-registered": "Firebase Installation is not registered.",
        "installation-not-found": "Firebase Installation not found.",
        "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        "app-offline": "Could not process request. Application offline.",
        "delete-pending-registration": "Can't delete installation while there is a pending registration request."
      },
      fH = new SH.h("installations", "Installations", IH);

    function lH(HH) {
      return HH instanceof SH.j && HH.code.includes("request-failed")
    }

    function KH(HH) {
      let {
        projectId: BH
      } = HH;
      return `https://firebaseinstallations.googleapis.com/v1/projects/${BH}/installations`
    }

    function cH(HH) {
      return {
        token: HH.token,
        requestStatus: 2,
        expiresIn: (BH = HH.expiresIn, Number(BH.replace("s", "000"))),
        creationTime: Date.now()
      };
      var BH
    }
    async function eH(HH, BH) {
      const LH = (await BH.json()).error;
      return fH.create("request-failed", {
        requestName: HH,
        serverCode: LH.code,
        serverMessage: LH.message,
        serverStatus: LH.status
      })
    }

    function qH(HH) {
      let {
        apiKey: BH
      } = HH;
      return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": BH
      })
    }

    function gH(HH, BH) {
      let {
        refreshToken: LH
      } = BH;
      const AH = qH(HH);
      return AH.append("Authorization", function(HH) {
        return `${mH} ${HH}`
      }(LH)), AH
    }
    async function NH(HH) {
      const BH = await HH();
      return BH.status >= 500 && BH.status < 600 ? HH() : BH
    }

    function RH(HH) {
      return new Promise((BH => {
        setTimeout(BH, HH)
      }))
    }
    const jH = /^[cdef][\w-]{21}$/;

    function nH() {
      try {
        const HH = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(HH), HH[0] = 112 + HH[0] % 16;
        const BH = function(HH) {
          const BH = (LH = HH, btoa(String.fromCharCode(...LH)).replace(/\+/g, "-").replace(/\//g, "_"));
          var LH;
          return BH.substr(0, 22)
        }(HH);
        return jH.test(BH) ? BH : ""
      } catch (HH) {
        return ""
      }
    }

    function FH(HH) {
      return `${HH.appName}!${HH.appId}`
    }
    const DH = new Map;

    function wH(HH, BH) {
      const LH = FH(HH);
      ZH(LH, BH),
        function(HH, BH) {
          const LH = aH();
          LH && LH.postMessage({
            key: HH,
            fid: BH
          });
          sH()
        }(LH, BH)
    }

    function ZH(HH, BH) {
      const LH = DH.get(HH);
      if (LH)
        for (const AH of LH) AH(BH)
    }
    let dH = null;

    function aH() {
      return !dH && "BroadcastChannel" in self && (dH = new BroadcastChannel("[Firebase] FID Change"), dH.onmessage = HH => {
        ZH(HH.data.key, HH.data.fid)
      }), dH
    }

    function sH() {
      0 === DH.size && dH && (dH.close(), dH = null)
    }
    const JH = "firebase-installations-store";
    let iH = null;

    function pH() {
      return iH || (iH = function(HH, BH) {
        let {
          blocked: LH,
          upgrade: AH,
          blocking: rH,
          terminated: SH
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const hH = indexedDB.open(HH, BH),
          tH = MH(hH);
        return AH && hH.addEventListener("upgradeneeded", (HH => {
          AH(MH(hH.result), HH.oldVersion, HH.newVersion, MH(hH.transaction))
        })), LH && hH.addEventListener("blocked", (() => LH())), tH.then((HH => {
          SH && HH.addEventListener("close", (() => SH())), rH && HH.addEventListener("versionchange", (() => rH()))
        })).catch((() => {})), tH
      }("firebase-installations-database", 1, {
        upgrade: (HH, BH) => {
          if (0 === BH) HH.createObjectStore(JH)
        }
      })), iH
    }
    async function yH(HH, BH) {
      const LH = FH(HH),
        AH = (await pH()).transaction(JH, "readwrite"),
        rH = AH.objectStore(JH),
        SH = await rH.get(LH);
      return await rH.put(BH, LH), await AH.done, SH && SH.fid === BH.fid || wH(HH, BH.fid), BH
    }
    async function HB(HH) {
      const BH = FH(HH),
        LH = (await pH()).transaction(JH, "readwrite");
      await LH.objectStore(JH).delete(BH), await LH.done
    }
    async function BB(HH, BH) {
      const LH = FH(HH),
        AH = (await pH()).transaction(JH, "readwrite"),
        rH = AH.objectStore(JH),
        SH = await rH.get(LH),
        hH = BH(SH);
      return void 0 === hH ? await rH.delete(LH) : await rH.put(hH, LH), await AH.done, !hH || SH && SH.fid === hH.fid || wH(HH, hH.fid), hH
    }
    async function LB(HH) {
      let BH;
      const LH = await BB(HH.appConfig, (LH => {
        const AH = function(HH) {
            const BH = HH || {
              fid: nH(),
              registrationStatus: 0
            };
            return SB(BH)
          }(LH),
          rH = function(HH, BH) {
            if (0 === BH.registrationStatus) {
              if (!navigator.onLine) {
                return {
                  installationEntry: BH,
                  registrationPromise: Promise.reject(fH.create("app-offline"))
                }
              }
              const LH = {
                  fid: BH.fid,
                  registrationStatus: 1,
                  registrationTime: Date.now()
                },
                AH = async function(HH, BH) {
                  try {
                    const LH = await async function(HH, BH) {
                      let {
                        appConfig: LH,
                        heartbeatServiceProvider: AH
                      } = HH, {
                        fid: rH
                      } = BH;
                      const SH = KH(LH),
                        hH = qH(LH),
                        tH = AH.getImmediate({
                          optional: !0
                        });
                      if (tH) {
                        const HH = await tH.getHeartbeatsHeader();
                        HH && hH.append("x-firebase-client", HH)
                      }
                      const zH = {
                          fid: rH,
                          authVersion: mH,
                          appId: LH.appId,
                          sdkVersion: kH
                        },
                        CH = {
                          method: "POST",
                          headers: hH,
                          body: JSON.stringify(zH)
                        },
                        EH = await NH((() => fetch(SH, CH)));
                      if (EH.ok) {
                        const HH = await EH.json();
                        return {
                          fid: HH.fid || rH,
                          registrationStatus: 2,
                          refreshToken: HH.refreshToken,
                          authToken: cH(HH.authToken)
                        }
                      }
                      throw await eH("Create Installation", EH)
                    }(HH, BH);
                    return yH(HH.appConfig, LH)
                  } catch (LH) {
                    throw lH(LH) && 409 === LH.customData.serverCode ? await HB(HH.appConfig) : await yH(HH.appConfig, {
                      fid: BH.fid,
                      registrationStatus: 0
                    }), LH
                  }
                }(HH, LH);
              return {
                installationEntry: LH,
                registrationPromise: AH
              }
            }
            return 1 === BH.registrationStatus ? {
              installationEntry: BH,
              registrationPromise: AB(HH)
            } : {
              installationEntry: BH
            }
          }(HH, AH);
        return BH = rH.registrationPromise, rH.installationEntry
      }));
      return "" === LH.fid ? {
        installationEntry: await BH
      } : {
        installationEntry: LH,
        registrationPromise: BH
      }
    }
    async function AB(HH) {
      let BH = await rB(HH.appConfig);
      for (; 1 === BH.registrationStatus;) await RH(100), BH = await rB(HH.appConfig);
      if (0 === BH.registrationStatus) {
        const {
          installationEntry: BH,
          registrationPromise: LH
        } = await LB(HH);
        return LH || BH
      }
      return BH
    }

    function rB(HH) {
      return BB(HH, (HH => {
        if (!HH) throw fH.create("installation-not-found");
        return SB(HH)
      }))
    }

    function SB(HH) {
      return 1 === (BH = HH).registrationStatus && BH.registrationTime + bH < Date.now() ? {
        fid: HH.fid,
        registrationStatus: 0
      } : HH;
      var BH
    }
    async function hB(HH, BH) {
      let {
        appConfig: LH,
        heartbeatServiceProvider: AH
      } = HH;
      const rH = function(HH, BH) {
          let {
            fid: LH
          } = BH;
          return `${KH(HH)}/${LH}/authTokens:generate`
        }(LH, BH),
        SH = gH(LH, BH),
        hH = AH.getImmediate({
          optional: !0
        });
      if (hH) {
        const HH = await hH.getHeartbeatsHeader();
        HH && SH.append("x-firebase-client", HH)
      }
      const tH = {
          installation: {
            sdkVersion: kH,
            appId: LH.appId
          }
        },
        zH = {
          method: "POST",
          headers: SH,
          body: JSON.stringify(tH)
        },
        CH = await NH((() => fetch(rH, zH)));
      if (CH.ok) {
        return cH(await CH.json())
      }
      throw await eH("Generate Auth Token", CH)
    }
    async function tB(HH) {
      let BH, LH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const AH = await BB(HH.appConfig, (AH => {
        if (!CB(AH)) throw fH.create("not-registered");
        const rH = AH.authToken;
        if (!LH && function(HH) {
            return 2 === HH.requestStatus && ! function(HH) {
              const BH = Date.now();
              return BH < HH.creationTime || HH.creationTime + HH.expiresIn < BH + oH
            }(HH)
          }(rH)) return AH;
        if (1 === rH.requestStatus) return BH = async function(HH, BH) {
          let LH = await zB(HH.appConfig);
          for (; 1 === LH.authToken.requestStatus;) await RH(100), LH = await zB(HH.appConfig);
          const AH = LH.authToken;
          return 0 === AH.requestStatus ? tB(HH, BH) : AH
        }(HH, LH), AH;
        {
          if (!navigator.onLine) throw fH.create("app-offline");
          const LH = function(HH) {
            const BH = {
              requestStatus: 1,
              requestTime: Date.now()
            };
            return Object.assign(Object.assign({}, HH), {
              authToken: BH
            })
          }(AH);
          return BH = async function(HH, BH) {
            try {
              const LH = await hB(HH, BH),
                AH = Object.assign(Object.assign({}, BH), {
                  authToken: LH
                });
              return await yH(HH.appConfig, AH), LH
            } catch (LH) {
              if (!lH(LH) || 401 !== LH.customData.serverCode && 404 !== LH.customData.serverCode) {
                const LH = Object.assign(Object.assign({}, BH), {
                  authToken: {
                    requestStatus: 0
                  }
                });
                await yH(HH.appConfig, LH)
              } else await HB(HH.appConfig);
              throw LH
            }
          }(HH, LH), LH
        }
      }));
      return BH ? await BH : AH.authToken
    }

    function zB(HH) {
      return BB(HH, (HH => {
        if (!CB(HH)) throw fH.create("not-registered");
        const BH = HH.authToken;
        return 1 === (LH = BH).requestStatus && LH.requestTime + bH < Date.now() ? Object.assign(Object.assign({}, HH), {
          authToken: {
            requestStatus: 0
          }
        }) : HH;
        var LH
      }))
    }

    function CB(HH) {
      return void 0 !== HH && 2 === HH.registrationStatus
    }
    async function EB(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const LH = HH;
      await async function(HH) {
        const {
          registrationPromise: BH
        } = await LB(HH);
        BH && await BH
      }(LH);
      return (await tB(LH, BH)).token
    }

    function XB(HH) {
      return fH.create("missing-app-config-values", {
        valueName: HH
      })
    }
    const GB = "installations",
      YB = HH => {
        const BH = HH.getProvider("app").getImmediate(),
          LH = function(HH) {
            if (!HH || !HH.options) throw XB("App Configuration");
            if (!HH.name) throw XB("App Name");
            const BH = ["projectId", "apiKey", "appId"];
            for (const LH of BH)
              if (!HH.options[LH]) throw XB(LH);
            return {
              appName: HH.name,
              projectId: HH.options.projectId,
              apiKey: HH.options.apiKey,
              appId: HH.options.appId
            }
          }(BH);
        return {
          app: BH,
          appConfig: LH,
          heartbeatServiceProvider: (0, AH.r)(BH, "heartbeat"),
          _delete: () => Promise.resolve()
        }
      },
      uB = HH => {
        const BH = HH.getProvider("app").getImmediate(),
          LH = (0, AH.r)(BH, GB).getImmediate();
        return {
          getId: () => async function(HH) {
            const BH = HH,
              {
                installationEntry: LH,
                registrationPromise: AH
              } = await LB(BH);
            return AH ? AH.catch(console.error) : tB(BH).catch(console.error), LH.fid
          }(LH),
          getToken: HH => EB(LH, HH)
        }
      };
    (0, AH.u)(new hH.f(GB, YB, "PUBLIC")), (0, AH.u)(new hH.f("installations-internal", uB, "PRIVATE")), (0, AH.L)(VH, OH), (0, AH.L)(VH, OH, "esm2017");
    const QB = "analytics",
      WB = "https://www.googletagmanager.com/gtag/js",
      MB = new rH.g("@firebase/analytics"),
      xB = {
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
      vB = new SH.h("analytics", "Analytics", xB);

    function PB(HH) {
      if (!HH.startsWith(WB)) {
        const BH = vB.create("invalid-gtag-resource", {
          gtagURL: HH
        });
        return MB.warn(BH.message), ""
      }
      return HH
    }

    function TB(HH) {
      return Promise.all(HH.map((HH => HH.catch((HH => HH)))))
    }

    function UB(HH, BH) {
      const LH = function(HH, BH) {
          let LH;
          return window.trustedTypes && (LH = window.trustedTypes.createPolicy(HH, BH)), LH
        }("firebase-js-sdk-policy", {
          createScriptURL: PB
        }),
        AH = document.createElement("script"),
        rH = `${WB}?l=${HH}&id=${BH}`;
      AH.src = LH ? null === LH || void 0 === LH ? void 0 : LH.createScriptURL(rH) : rH, AH.async = !0, document.head.appendChild(AH)
    }

    function VB(HH, BH, LH, AH) {
      return async function(rH) {
        try {
          for (var SH = arguments.length, hH = new Array(SH > 1 ? SH - 1 : 0), tH = 1; tH < SH; tH++) hH[tH - 1] = arguments[tH];
          if ("event" === rH) {
            const [AH, rH] = hH;
            await async function(HH, BH, LH, AH, rH) {
              try {
                let SH = [];
                if (rH && rH.send_to) {
                  let HH = rH.send_to;
                  Array.isArray(HH) || (HH = [HH]);
                  const AH = await TB(LH);
                  for (const LH of HH) {
                    const HH = AH.find((HH => HH.measurementId === LH)),
                      rH = HH && BH[HH.appId];
                    if (!rH) {
                      SH = [];
                      break
                    }
                    SH.push(rH)
                  }
                }
                0 === SH.length && (SH = Object.values(BH)), await Promise.all(SH), HH("event", AH, rH || {})
              } catch (SH) {
                MB.error(SH)
              }
            }(HH, BH, LH, AH, rH)
          } else if ("config" === rH) {
            const [rH, SH] = hH;
            await async function(HH, BH, LH, AH, rH, SH) {
              const hH = AH[rH];
              try {
                if (hH) await BH[hH];
                else {
                  const HH = (await TB(LH)).find((HH => HH.measurementId === rH));
                  HH && await BH[HH.appId]
                }
              } catch (tH) {
                MB.error(tH)
              }
              HH("config", rH, SH)
            }(HH, BH, LH, AH, rH, SH)
          } else if ("consent" === rH) {
            const [BH] = hH;
            HH("consent", "update", BH)
          } else if ("get" === rH) {
            const [BH, LH, AH] = hH;
            HH("get", BH, LH, AH)
          } else if ("set" === rH) {
            const [BH] = hH;
            HH("set", BH)
          } else HH(rH, ...hH)
        } catch (zH) {
          MB.error(zH)
        }
      }
    }
    const OB = new class {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
        this.throttleMetadata = HH, this.intervalMillis = BH
      }
      getThrottleMetadata(HH) {
        return this.throttleMetadata[HH]
      }
      setThrottleMetadata(HH, BH) {
        this.throttleMetadata[HH] = BH
      }
      deleteThrottleMetadata(HH) {
        delete this.throttleMetadata[HH]
      }
    };

    function bB(HH) {
      return new Headers({
        Accept: "application/json",
        "x-goog-api-key": HH
      })
    }
    async function kB(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : OB,
        LH = arguments.length > 2 ? arguments[2] : void 0;
      const {
        appId: AH,
        apiKey: rH,
        measurementId: SH
      } = HH.options;
      if (!AH) throw vB.create("no-app-id");
      if (!rH) {
        if (SH) return {
          measurementId: SH,
          appId: AH
        };
        throw vB.create("no-api-key")
      }
      const hH = BH.getThrottleMetadata(AH) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        },
        tH = new oB;
      return setTimeout((async () => {
        tH.abort()
      }), void 0 !== LH ? LH : 6e4), mB({
        appId: AH,
        apiKey: rH,
        measurementId: SH
      }, hH, tH, BH)
    }
    async function mB(HH, BH, LH) {
      let {
        throttleEndTimeMillis: AH,
        backoffCount: rH
      } = BH, hH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : OB;
      var tH;
      const {
        appId: zH,
        measurementId: CH
      } = HH;
      try {
        await
        function(HH, BH) {
          return new Promise(((LH, AH) => {
            const rH = Math.max(BH - Date.now(), 0),
              SH = setTimeout(LH, rH);
            HH.addEventListener((() => {
              clearTimeout(SH), AH(vB.create("fetch-throttle", {
                throttleEndTimeMillis: BH
              }))
            }))
          }))
        }(LH, AH)
      } catch (EH) {
        if (CH) return MB.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${CH} provided in the "measurementId" field in the local Firebase config. [${null===EH||void 0===EH?void 0:EH.message}]`), {
          appId: zH,
          measurementId: CH
        };
        throw EH
      }
      try {
        const BH = await async function(HH) {
          var BH;
          const {
            appId: LH,
            apiKey: AH
          } = HH, rH = {
            method: "GET",
            headers: bB(AH)
          }, SH = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", LH), hH = await fetch(SH, rH);
          if (200 !== hH.status && 304 !== hH.status) {
            let HH = "";
            try {
              const LH = await hH.json();
              (null === (BH = LH.error) || void 0 === BH ? void 0 : BH.message) && (HH = LH.error.message)
            } catch (tH) {}
            throw vB.create("config-fetch-failed", {
              httpStatus: hH.status,
              responseMessage: HH
            })
          }
          return hH.json()
        }(HH);
        return hH.deleteThrottleMetadata(zH), BH
      } catch (EH) {
        const BH = EH;
        if (! function(HH) {
            if (!(HH instanceof SH.j) || !HH.customData) return !1;
            const BH = Number(HH.customData.httpStatus);
            return 429 === BH || 500 === BH || 503 === BH || 504 === BH
          }(BH)) {
          if (hH.deleteThrottleMetadata(zH), CH) return MB.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${CH} provided in the "measurementId" field in the local Firebase config. [${null===BH||void 0===BH?void 0:BH.message}]`), {
            appId: zH,
            measurementId: CH
          };
          throw EH
        }
        const AH = 503 === Number(null === (tH = null === BH || void 0 === BH ? void 0 : BH.customData) || void 0 === tH ? void 0 : tH.httpStatus) ? (0, SH.w)(rH, hH.intervalMillis, 30) : (0, SH.w)(rH, hH.intervalMillis),
          XH = {
            throttleEndTimeMillis: Date.now() + AH,
            backoffCount: rH + 1
          };
        return hH.setThrottleMetadata(zH, XH), MB.debug(`Calling attemptFetch again in ${AH} millis`), mB(HH, XH, LH, hH)
      }
    }
    class oB {
      constructor() {
        this.listeners = []
      }
      addEventListener(HH) {
        this.listeners.push(HH)
      }
      abort() {
        this.listeners.forEach((HH => HH()))
      }
    }
    let IB, fB;

    function lB(HH) {
      fB = HH
    }

    function KB(HH) {
      IB = HH
    }
    async function cB(HH, BH, LH, AH, rH, hH, tH) {
      var zH;
      const CH = kB(HH);
      CH.then((BH => {
        LH[BH.measurementId] = BH.appId, HH.options.measurementId && BH.measurementId !== HH.options.measurementId && MB.warn(`The measurement ID in the local Firebase config (${HH.options.measurementId}) does not match the measurement ID fetched from the server (${BH.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
      })).catch((HH => MB.error(HH))), BH.push(CH);
      const EH = async function() {
        if (!(0, SH.db)()) return MB.warn(vB.create("indexeddb-unavailable", {
          errorInfo: "IndexedDB is not available in this environment."
        }).message), !1;
        try {
          await (0, SH.qb)()
        } catch (HH) {
          return MB.warn(vB.create("indexeddb-unavailable", {
            errorInfo: null === HH || void 0 === HH ? void 0 : HH.toString()
          }).message), !1
        }
        return !0
      }().then((HH => HH ? AH.getId() : void 0)), [XH, GH] = await Promise.all([CH, EH]);
      (function(HH) {
        const BH = window.document.getElementsByTagName("script");
        for (const LH of Object.values(BH))
          if (LH.src && LH.src.includes(WB) && LH.src.includes(HH)) return LH;
        return null
      })(hH) || UB(hH, XH.measurementId), fB && (rH("consent", "default", fB), lB(void 0)), rH("js", new Date);
      const YH = null !== (zH = null === tH || void 0 === tH ? void 0 : tH.config) && void 0 !== zH ? zH : {};
      return YH.origin = "firebase", YH.update = !0, null != GH && (YH.firebase_id = GH), rH("config", XH.measurementId, YH), IB && (rH("set", IB), KB(void 0)), XH.measurementId
    }
    class eB {
      constructor(HH) {
        this.app = HH
      }
      _delete() {
        return delete qB[this.app.options.appId], Promise.resolve()
      }
    }
    let qB = {},
      gB = [];
    const NB = {};
    let RB, jB, nB = "dataLayer",
      FB = "gtag",
      DB = !1;

    function wB(HH) {
      if (DB) throw vB.create("already-initialized");
      HH.dataLayerName && (nB = HH.dataLayerName), HH.gtagName && (FB = HH.gtagName)
    }

    function ZB(HH, BH, LH) {
      ! function() {
        const HH = [];
        if ((0, SH.V)() && HH.push("This is a browser extension environment."), (0, SH.n)() || HH.push("Cookies are not available."), HH.length > 0) {
          const BH = HH.map(((HH, BH) => `(${BH+1}) ${HH}`)).join(" "),
            LH = vB.create("invalid-analytics-context", {
              errorInfo: BH
            });
          MB.warn(LH.message)
        }
      }();
      const AH = HH.options.appId;
      if (!AH) throw vB.create("no-app-id");
      if (!HH.options.apiKey) {
        if (!HH.options.measurementId) throw vB.create("no-api-key");
        MB.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${HH.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
      }
      if (null != qB[AH]) throw vB.create("already-exists", {
        id: AH
      });
      if (!DB) {
        ! function(HH) {
          let BH = [];
          Array.isArray(window[HH]) ? BH = window[HH] : window[HH] = BH
        }(nB);
        const {
          wrappedGtag: HH,
          gtagCore: BH
        } = function(HH, BH, LH, AH, rH) {
          let SH = function() {
            for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
            window[AH].push(arguments)
          };
          return window[rH] && "function" === typeof window[rH] && (SH = window[rH]), window[rH] = VB(SH, HH, BH, LH), {
            gtagCore: SH,
            wrappedGtag: window[rH]
          }
        }(qB, gB, NB, nB, FB);
        jB = HH, RB = BH, DB = !0
      }
      qB[AH] = cB(HH, gB, NB, BH, RB, nB, LH);
      return new eB(HH)
    }

    function dB() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, AH.H)();
      HH = (0, SH.P)(HH);
      const BH = (0, AH.r)(HH, QB);
      return BH.isInitialized() ? BH.getImmediate() : aB(HH)
    }

    function aB(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const LH = (0, AH.r)(HH, QB);
      if (LH.isInitialized()) {
        const HH = LH.getImmediate();
        if ((0, SH.D)(BH, LH.getOptions())) return HH;
        throw vB.create("already-initialized")
      }
      return LH.initialize({
        options: BH
      })
    }
    async function sB() {
      if ((0, SH.V)()) return !1;
      if (!(0, SH.n)()) return !1;
      if (!(0, SH.db)()) return !1;
      try {
        return await (0, SH.qb)()
      } catch (HH) {
        return !1
      }
    }

    function JB(HH, BH, LH) {
      HH = (0, SH.P)(HH), async function(HH, BH, LH, AH) {
        if (AH && AH.global) return HH("set", {
          screen_name: LH
        }), Promise.resolve();
        HH("config", await BH, {
          update: !0,
          screen_name: LH
        })
      }(jB, qB[HH.app.options.appId], BH, LH).catch((HH => MB.error(HH)))
    }
    async function iB(HH) {
      return HH = (0, SH.P)(HH), async function(HH, BH) {
        const LH = await BH;
        return new Promise(((BH, AH) => {
          HH("get", LH, "client_id", (HH => {
            HH || AH(vB.create("no-client-id")), BH(HH)
          }))
        }))
      }(jB, qB[HH.app.options.appId])
    }

    function pB(HH, BH, LH) {
      HH = (0, SH.P)(HH), async function(HH, BH, LH, AH) {
        if (AH && AH.global) return HH("set", {
          user_id: LH
        }), Promise.resolve();
        HH("config", await BH, {
          update: !0,
          user_id: LH
        })
      }(jB, qB[HH.app.options.appId], BH, LH).catch((HH => MB.error(HH)))
    }

    function yB(HH, BH, LH) {
      HH = (0, SH.P)(HH), async function(HH, BH, LH, AH) {
        if (AH && AH.global) {
          const BH = {};
          for (const HH of Object.keys(LH)) BH[`user_properties.${HH}`] = LH[HH];
          return HH("set", BH), Promise.resolve()
        }
        HH("config", await BH, {
          update: !0,
          user_properties: LH
        })
      }(jB, qB[HH.app.options.appId], BH, LH).catch((HH => MB.error(HH)))
    }

    function HL(HH, BH) {
      HH = (0, SH.P)(HH), async function(HH, BH) {
        const LH = await HH;
        window[`ga-disable-${LH}`] = !BH
      }(qB[HH.app.options.appId], BH).catch((HH => MB.error(HH)))
    }

    function BL(HH) {
      jB ? jB("set", HH) : KB(HH)
    }

    function LL(HH, BH, LH, AH) {
      HH = (0, SH.P)(HH), async function(HH, BH, LH, AH, rH) {
        if (rH && rH.global) HH("event", LH, AH);
        else {
          const rH = await BH;
          HH("event", LH, Object.assign(Object.assign({}, AH), {
            send_to: rH
          }))
        }
      }(jB, qB[HH.app.options.appId], BH, LH, AH).catch((HH => MB.error(HH)))
    }

    function AL(HH) {
      jB ? jB("consent", "update", HH) : lB(HH)
    }
    const rL = "@firebase/analytics",
      SL = "0.10.0";
    (0, AH.u)(new hH.f(QB, ((HH, BH) => {
      let {
        options: LH
      } = BH;
      return ZB(HH.getProvider("app").getImmediate(), HH.getProvider("installations-internal").getImmediate(), LH)
    }), "PUBLIC")), (0, AH.u)(new hH.f("analytics-internal", (function(HH) {
      try {
        const BH = HH.getProvider(QB).getImmediate();
        return {
          logEvent: (HH, LH, AH) => LL(BH, HH, LH, AH)
        }
      } catch (BH) {
        throw vB.create("interop-component-reg-failed", {
          reason: BH
        })
      }
    }), "PRIVATE")), (0, AH.L)(rL, SL), (0, AH.L)(rL, SL, "esm2017")
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);