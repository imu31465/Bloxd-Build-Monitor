/*! For license information please see mpd96o.267.9644bc7f.chunk.js.LICENSE.txt */
export const id = 267;
export const ids = [267];
export const modules = {
  40620: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      getAnalytics: () => tT,
      getGoogleAnalyticsClientId: () => WT,
      initializeAnalytics: () => UT,
      isSupported: () => dT,
      logEvent: () => hf,
      setAnalyticsCollectionEnabled: () => Tf,
      setConsent: () => Af,
      setCurrentScreen: () => gT,
      setDefaultEventParameters: () => ff,
      setUserId: () => FT,
      setUserProperties: () => mf,
      settings: () => LT
    });
    var hm = fm(40606),
      Am = fm(40618),
      am = fm(40614),
      xm = fm(40610);
    let wm, Dm;
    const im = new WeakMap,
      Rm = new WeakMap,
      pm = new WeakMap,
      Em = new WeakMap,
      om = new WeakMap;
    let Om = {
      get(mm, Tm, fm) {
        if (mm instanceof IDBTransaction) {
          if ("done" === Tm) return Rm.get(mm);
          if ("objectStoreNames" === Tm) return mm.objectStoreNames || pm.get(mm);
          if ("store" === Tm) return fm.objectStoreNames[1] ? void 0 : fm.objectStore(fm.objectStoreNames[0])
        }
        return jm(mm[Tm])
      },
      set: (mm, Tm, fm) => (mm[Tm] = fm, !0),
      has: (mm, Tm) => mm instanceof IDBTransaction && ("done" === Tm || "store" === Tm) || Tm in mm
    };

    function Ym(mm) {
      return mm !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (Dm || (Dm = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(mm) ? function() {
        for (var Tm = arguments.length, fm = new Array(Tm), hm = 0; hm < Tm; hm++) fm[hm] = arguments[hm];
        return mm.apply(Vm(this), fm), jm(im.get(this))
      } : function() {
        for (var Tm = arguments.length, fm = new Array(Tm), hm = 0; hm < Tm; hm++) fm[hm] = arguments[hm];
        return jm(mm.apply(Vm(this), fm))
      } : function(Tm) {
        for (var fm = arguments.length, hm = new Array(fm > 1 ? fm - 1 : 0), Am = 1; Am < fm; Am++) hm[Am - 1] = arguments[Am];
        const am = mm.call(Vm(this), Tm, ...hm);
        return pm.set(am, Tm.sort ? Tm.sort() : [Tm]), jm(am)
      }
    }

    function qm(mm) {
      return "function" === typeof mm ? Ym(mm) : (mm instanceof IDBTransaction && function(mm) {
        if (Rm.has(mm)) return;
        const Tm = new Promise(((Tm, fm) => {
          const hm = () => {
              mm.removeEventListener("complete", Am), mm.removeEventListener("error", am), mm.removeEventListener("abort", am)
            },
            Am = () => {
              Tm(), hm()
            },
            am = () => {
              fm(mm.error || new DOMException("AbortError", "AbortError")), hm()
            };
          mm.addEventListener("complete", Am), mm.addEventListener("error", am), mm.addEventListener("abort", am)
        }));
        Rm.set(mm, Tm)
      }(mm), Tm = mm, (wm || (wm = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((mm => Tm instanceof mm)) ? new Proxy(mm, Om) : mm);
      var Tm
    }

    function jm(mm) {
      if (mm instanceof IDBRequest) return function(mm) {
        const Tm = new Promise(((Tm, fm) => {
          const hm = () => {
              mm.removeEventListener("success", Am), mm.removeEventListener("error", am)
            },
            Am = () => {
              Tm(jm(mm.result)), hm()
            },
            am = () => {
              fm(mm.error), hm()
            };
          mm.addEventListener("success", Am), mm.addEventListener("error", am)
        }));
        return Tm.then((Tm => {
          Tm instanceof IDBCursor && im.set(Tm, mm)
        })).catch((() => {})), om.set(Tm, mm), Tm
      }(mm);
      if (Em.has(mm)) return Em.get(mm);
      const Tm = qm(mm);
      return Tm !== mm && (Em.set(mm, Tm), om.set(Tm, mm)), Tm
    }
    const Vm = mm => om.get(mm);
    const Im = ["get", "getKey", "getAll", "getAllKeys", "count"],
      Km = ["put", "add", "delete", "clear"],
      Qm = new Map;

    function nm(mm, Tm) {
      if (!(mm instanceof IDBDatabase) || Tm in mm || "string" !== typeof Tm) return;
      if (Qm.get(Tm)) return Qm.get(Tm);
      const fm = Tm.replace(/FromIndex$/, ""),
        hm = Tm !== fm,
        Am = Km.includes(fm);
      if (!(fm in (hm ? IDBIndex : IDBObjectStore).prototype) || !Am && !Im.includes(fm)) return;
      const am = async function(mm) {
        const Tm = this.transaction(mm, Am ? "readwrite" : "readonly");
        let am = Tm.store;
        for (var xm = arguments.length, wm = new Array(xm > 1 ? xm - 1 : 0), Dm = 1; Dm < xm; Dm++) wm[Dm - 1] = arguments[Dm];
        return hm && (am = am.index(wm.shift())), (await Promise.all([am[fm](...wm), Am && Tm.done]))[0]
      };
      return Qm.set(Tm, am), am
    }
    Om = (mm => ({
      ...mm,
      get: (Tm, fm, hm) => nm(Tm, fm) || mm.get(Tm, fm, hm),
      has: (Tm, fm) => !!nm(Tm, fm) || mm.has(Tm, fm)
    }))(Om);
    const Jm = "@firebase/installations",
      cm = "0.6.4",
      zm = 1e4,
      Zm = `w:${cm}`,
      km = "FIS_v2",
      bm = 36e5,
      Sm = {
        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
        "not-registered": "Firebase Installation is not registered.",
        "installation-not-found": "Firebase Installation not found.",
        "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        "app-offline": "Could not process request. Application offline.",
        "delete-pending-registration": "Can't delete installation while there is a pending registration request."
      },
      em = new am.e("installations", "Installations", Sm);

    function Nm(mm) {
      return mm instanceof am.h && mm.code.includes("request-failed")
    }

    function Gm(mm) {
      let {
        projectId: Tm
      } = mm;
      return `https://firebaseinstallations.googleapis.com/v1/projects/${Tm}/installations`
    }

    function Xm(mm) {
      return {
        token: mm.token,
        requestStatus: 2,
        expiresIn: (Tm = mm.expiresIn, Number(Tm.replace("s", "000"))),
        creationTime: Date.now()
      };
      var Tm
    }
    async function Pm(mm, Tm) {
      const fm = (await Tm.json()).error;
      return em.create("request-failed", {
        requestName: mm,
        serverCode: fm.code,
        serverMessage: fm.message,
        serverStatus: fm.status
      })
    }

    function Hm(mm) {
      let {
        apiKey: Tm
      } = mm;
      return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": Tm
      })
    }

    function ym(mm, Tm) {
      let {
        refreshToken: fm
      } = Tm;
      const hm = Hm(mm);
      return hm.append("Authorization", function(mm) {
        return `${km} ${mm}`
      }(fm)), hm
    }
    async function Cm(mm) {
      const Tm = await mm();
      return Tm.status >= 500 && Tm.status < 600 ? mm() : Tm
    }

    function rm(mm) {
      return new Promise((Tm => {
        setTimeout(Tm, mm)
      }))
    }
    const sm = /^[cdef][\w-]{21}$/;

    function lm() {
      try {
        const mm = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(mm), mm[0] = 112 + mm[0] % 16;
        const Tm = function(mm) {
          const Tm = (fm = mm, btoa(String.fromCharCode(...fm)).replace(/\+/g, "-").replace(/\//g, "_"));
          var fm;
          return Tm.substr(0, 22)
        }(mm);
        return sm.test(Tm) ? Tm : ""
      } catch (mm) {
        return ""
      }
    }

    function Mm(mm) {
      return `${mm.appName}!${mm.appId}`
    }
    const um = new Map;

    function Bm(mm, Tm) {
      const fm = Mm(mm);
      Lm(fm, Tm),
        function(mm, Tm) {
          const fm = Um();
          fm && fm.postMessage({
            key: mm,
            fid: Tm
          });
          dm()
        }(fm, Tm)
    }

    function Lm(mm, Tm) {
      const fm = um.get(mm);
      if (fm)
        for (const hm of fm) hm(Tm)
    }
    let tm = null;

    function Um() {
      return !tm && "BroadcastChannel" in self && (tm = new BroadcastChannel("[Firebase] FID Change"), tm.onmessage = mm => {
        Lm(mm.data.key, mm.data.fid)
      }), tm
    }

    function dm() {
      0 === um.size && tm && (tm.close(), tm = null)
    }
    const gm = "firebase-installations-store";
    let Wm = null;

    function Fm() {
      return Wm || (Wm = function(mm, Tm) {
        let {
          blocked: fm,
          upgrade: hm,
          blocking: Am,
          terminated: am
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const xm = indexedDB.open(mm, Tm),
          wm = jm(xm);
        return hm && xm.addEventListener("upgradeneeded", (mm => {
          hm(jm(xm.result), mm.oldVersion, mm.newVersion, jm(xm.transaction))
        })), fm && xm.addEventListener("blocked", (() => fm())), wm.then((mm => {
          am && mm.addEventListener("close", (() => am())), Am && mm.addEventListener("versionchange", (() => Am()))
        })).catch((() => {})), wm
      }("firebase-installations-database", 1, {
        upgrade: (mm, Tm) => {
          if (0 === Tm) mm.createObjectStore(gm)
        }
      })), Wm
    }
    async function mT(mm, Tm) {
      const fm = Mm(mm),
        hm = (await Fm()).transaction(gm, "readwrite"),
        Am = hm.objectStore(gm),
        am = await Am.get(fm);
      return await Am.put(Tm, fm), await hm.done, am && am.fid === Tm.fid || Bm(mm, Tm.fid), Tm
    }
    async function TT(mm) {
      const Tm = Mm(mm),
        fm = (await Fm()).transaction(gm, "readwrite");
      await fm.objectStore(gm).delete(Tm), await fm.done
    }
    async function fT(mm, Tm) {
      const fm = Mm(mm),
        hm = (await Fm()).transaction(gm, "readwrite"),
        Am = hm.objectStore(gm),
        am = await Am.get(fm),
        xm = Tm(am);
      return void 0 === xm ? await Am.delete(fm) : await Am.put(xm, fm), await hm.done, !xm || am && am.fid === xm.fid || Bm(mm, xm.fid), xm
    }
    async function hT(mm) {
      let Tm;
      const fm = await fT(mm.appConfig, (fm => {
        const hm = function(mm) {
            const Tm = mm || {
              fid: lm(),
              registrationStatus: 0
            };
            return xT(Tm)
          }(fm),
          Am = function(mm, Tm) {
            if (0 === Tm.registrationStatus) {
              if (!navigator.onLine) {
                return {
                  installationEntry: Tm,
                  registrationPromise: Promise.reject(em.create("app-offline"))
                }
              }
              const fm = {
                  fid: Tm.fid,
                  registrationStatus: 1,
                  registrationTime: Date.now()
                },
                hm = async function(mm, Tm) {
                  try {
                    const fm = await async function(mm, Tm) {
                      let {
                        appConfig: fm,
                        heartbeatServiceProvider: hm
                      } = mm, {
                        fid: Am
                      } = Tm;
                      const am = Gm(fm),
                        xm = Hm(fm),
                        wm = hm.getImmediate({
                          optional: !0
                        });
                      if (wm) {
                        const mm = await wm.getHeartbeatsHeader();
                        mm && xm.append("x-firebase-client", mm)
                      }
                      const Dm = {
                          fid: Am,
                          authVersion: km,
                          appId: fm.appId,
                          sdkVersion: Zm
                        },
                        im = {
                          method: "POST",
                          headers: xm,
                          body: JSON.stringify(Dm)
                        },
                        Rm = await Cm((() => fetch(am, im)));
                      if (Rm.ok) {
                        const mm = await Rm.json();
                        return {
                          fid: mm.fid || Am,
                          registrationStatus: 2,
                          refreshToken: mm.refreshToken,
                          authToken: Xm(mm.authToken)
                        }
                      }
                      throw await Pm("Create Installation", Rm)
                    }(mm, Tm);
                    return mT(mm.appConfig, fm)
                  } catch (fm) {
                    throw Nm(fm) && 409 === fm.customData.serverCode ? await TT(mm.appConfig) : await mT(mm.appConfig, {
                      fid: Tm.fid,
                      registrationStatus: 0
                    }), fm
                  }
                }(mm, fm);
              return {
                installationEntry: fm,
                registrationPromise: hm
              }
            }
            return 1 === Tm.registrationStatus ? {
              installationEntry: Tm,
              registrationPromise: AT(mm)
            } : {
              installationEntry: Tm
            }
          }(mm, hm);
        return Tm = Am.registrationPromise, Am.installationEntry
      }));
      return "" === fm.fid ? {
        installationEntry: await Tm
      } : {
        installationEntry: fm,
        registrationPromise: Tm
      }
    }
    async function AT(mm) {
      let Tm = await aT(mm.appConfig);
      for (; 1 === Tm.registrationStatus;) await rm(100), Tm = await aT(mm.appConfig);
      if (0 === Tm.registrationStatus) {
        const {
          installationEntry: Tm,
          registrationPromise: fm
        } = await hT(mm);
        return fm || Tm
      }
      return Tm
    }

    function aT(mm) {
      return fT(mm, (mm => {
        if (!mm) throw em.create("installation-not-found");
        return xT(mm)
      }))
    }

    function xT(mm) {
      return 1 === (Tm = mm).registrationStatus && Tm.registrationTime + zm < Date.now() ? {
        fid: mm.fid,
        registrationStatus: 0
      } : mm;
      var Tm
    }
    async function wT(mm, Tm) {
      let {
        appConfig: fm,
        heartbeatServiceProvider: hm
      } = mm;
      const Am = function(mm, Tm) {
          let {
            fid: fm
          } = Tm;
          return `${Gm(mm)}/${fm}/authTokens:generate`
        }(fm, Tm),
        am = ym(fm, Tm),
        xm = hm.getImmediate({
          optional: !0
        });
      if (xm) {
        const mm = await xm.getHeartbeatsHeader();
        mm && am.append("x-firebase-client", mm)
      }
      const wm = {
          installation: {
            sdkVersion: Zm,
            appId: fm.appId
          }
        },
        Dm = {
          method: "POST",
          headers: am,
          body: JSON.stringify(wm)
        },
        im = await Cm((() => fetch(Am, Dm)));
      if (im.ok) {
        return Xm(await im.json())
      }
      throw await Pm("Generate Auth Token", im)
    }
    async function DT(mm) {
      let Tm, fm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const hm = await fT(mm.appConfig, (hm => {
        if (!RT(hm)) throw em.create("not-registered");
        const Am = hm.authToken;
        if (!fm && function(mm) {
            return 2 === mm.requestStatus && ! function(mm) {
              const Tm = Date.now();
              return Tm < mm.creationTime || mm.creationTime + mm.expiresIn < Tm + bm
            }(mm)
          }(Am)) return hm;
        if (1 === Am.requestStatus) return Tm = async function(mm, Tm) {
          let fm = await iT(mm.appConfig);
          for (; 1 === fm.authToken.requestStatus;) await rm(100), fm = await iT(mm.appConfig);
          const hm = fm.authToken;
          return 0 === hm.requestStatus ? DT(mm, Tm) : hm
        }(mm, fm), hm;
        {
          if (!navigator.onLine) throw em.create("app-offline");
          const fm = function(mm) {
            const Tm = {
              requestStatus: 1,
              requestTime: Date.now()
            };
            return Object.assign(Object.assign({}, mm), {
              authToken: Tm
            })
          }(hm);
          return Tm = async function(mm, Tm) {
            try {
              const fm = await wT(mm, Tm),
                hm = Object.assign(Object.assign({}, Tm), {
                  authToken: fm
                });
              return await mT(mm.appConfig, hm), fm
            } catch (fm) {
              if (!Nm(fm) || 401 !== fm.customData.serverCode && 404 !== fm.customData.serverCode) {
                const fm = Object.assign(Object.assign({}, Tm), {
                  authToken: {
                    requestStatus: 0
                  }
                });
                await mT(mm.appConfig, fm)
              } else await TT(mm.appConfig);
              throw fm
            }
          }(mm, fm), fm
        }
      }));
      return Tm ? await Tm : hm.authToken
    }

    function iT(mm) {
      return fT(mm, (mm => {
        if (!RT(mm)) throw em.create("not-registered");
        const Tm = mm.authToken;
        return 1 === (fm = Tm).requestStatus && fm.requestTime + zm < Date.now() ? Object.assign(Object.assign({}, mm), {
          authToken: {
            requestStatus: 0
          }
        }) : mm;
        var fm
      }))
    }

    function RT(mm) {
      return void 0 !== mm && 2 === mm.registrationStatus
    }
    async function pT(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const fm = mm;
      await async function(mm) {
        const {
          registrationPromise: Tm
        } = await hT(mm);
        Tm && await Tm
      }(fm);
      return (await DT(fm, Tm)).token
    }

    function ET(mm) {
      return em.create("missing-app-config-values", {
        valueName: mm
      })
    }
    const oT = "installations",
      OT = mm => {
        const Tm = mm.getProvider("app").getImmediate(),
          fm = function(mm) {
            if (!mm || !mm.options) throw ET("App Configuration");
            if (!mm.name) throw ET("App Name");
            const Tm = ["projectId", "apiKey", "appId"];
            for (const fm of Tm)
              if (!mm.options[fm]) throw ET(fm);
            return {
              appName: mm.name,
              projectId: mm.options.projectId,
              apiKey: mm.options.apiKey,
              appId: mm.options.appId
            }
          }(Tm);
        return {
          app: Tm,
          appConfig: fm,
          heartbeatServiceProvider: (0, hm.z)(Tm, "heartbeat"),
          _delete: () => Promise.resolve()
        }
      },
      YT = mm => {
        const Tm = mm.getProvider("app").getImmediate(),
          fm = (0, hm.z)(Tm, oT).getImmediate();
        return {
          getId: () => async function(mm) {
            const Tm = mm,
              {
                installationEntry: fm,
                registrationPromise: hm
              } = await hT(Tm);
            return hm ? hm.catch(console.error) : DT(Tm).catch(console.error), fm.fid
          }(fm),
          getToken: mm => pT(fm, mm)
        }
      };
    (0, hm.A)(new xm.h(oT, OT, "PUBLIC")), (0, hm.A)(new xm.h("installations-internal", YT, "PRIVATE")), (0, hm.N)(Jm, cm), (0, hm.N)(Jm, cm, "esm2017");
    const qT = "analytics",
      jT = "https://www.googletagmanager.com/gtag/js",
      VT = new Am.g("@firebase/analytics"),
      IT = {
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
      KT = new am.e("analytics", "Analytics", IT);

    function QT(mm) {
      if (!mm.startsWith(jT)) {
        const Tm = KT.create("invalid-gtag-resource", {
          gtagURL: mm
        });
        return VT.warn(Tm.message), ""
      }
      return mm
    }

    function nT(mm) {
      return Promise.all(mm.map((mm => mm.catch((mm => mm)))))
    }

    function JT(mm, Tm) {
      const fm = function(mm, Tm) {
          let fm;
          return window.trustedTypes && (fm = window.trustedTypes.createPolicy(mm, Tm)), fm
        }("firebase-js-sdk-policy", {
          createScriptURL: QT
        }),
        hm = document.createElement("script"),
        Am = `${jT}?l=${mm}&id=${Tm}`;
      hm.src = fm ? null === fm || void 0 === fm ? void 0 : fm.createScriptURL(Am) : Am, hm.async = !0, document.head.appendChild(hm)
    }

    function cT(mm, Tm, fm, hm) {
      return async function(Am) {
        try {
          for (var am = arguments.length, xm = new Array(am > 1 ? am - 1 : 0), wm = 1; wm < am; wm++) xm[wm - 1] = arguments[wm];
          if ("event" === Am) {
            const [hm, Am] = xm;
            await async function(mm, Tm, fm, hm, Am) {
              try {
                let am = [];
                if (Am && Am.send_to) {
                  let mm = Am.send_to;
                  Array.isArray(mm) || (mm = [mm]);
                  const hm = await nT(fm);
                  for (const fm of mm) {
                    const mm = hm.find((mm => mm.measurementId === fm)),
                      Am = mm && Tm[mm.appId];
                    if (!Am) {
                      am = [];
                      break
                    }
                    am.push(Am)
                  }
                }
                0 === am.length && (am = Object.values(Tm)), await Promise.all(am), mm("event", hm, Am || {})
              } catch (am) {
                VT.error(am)
              }
            }(mm, Tm, fm, hm, Am)
          } else if ("config" === Am) {
            const [Am, am] = xm;
            await async function(mm, Tm, fm, hm, Am, am) {
              const xm = hm[Am];
              try {
                if (xm) await Tm[xm];
                else {
                  const mm = (await nT(fm)).find((mm => mm.measurementId === Am));
                  mm && await Tm[mm.appId]
                }
              } catch (wm) {
                VT.error(wm)
              }
              mm("config", Am, am)
            }(mm, Tm, fm, hm, Am, am)
          } else if ("consent" === Am) {
            const [Tm] = xm;
            mm("consent", "update", Tm)
          } else if ("get" === Am) {
            const [Tm, fm, hm] = xm;
            mm("get", Tm, fm, hm)
          } else if ("set" === Am) {
            const [Tm] = xm;
            mm("set", Tm)
          } else mm(Am, ...xm)
        } catch (Dm) {
          VT.error(Dm)
        }
      }
    }
    const zT = new class {
      constructor() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
        this.throttleMetadata = mm, this.intervalMillis = Tm
      }
      getThrottleMetadata(mm) {
        return this.throttleMetadata[mm]
      }
      setThrottleMetadata(mm, Tm) {
        this.throttleMetadata[mm] = Tm
      }
      deleteThrottleMetadata(mm) {
        delete this.throttleMetadata[mm]
      }
    };

    function ZT(mm) {
      return new Headers({
        Accept: "application/json",
        "x-goog-api-key": mm
      })
    }
    async function kT(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zT,
        fm = arguments.length > 2 ? arguments[2] : void 0;
      const {
        appId: hm,
        apiKey: Am,
        measurementId: am
      } = mm.options;
      if (!hm) throw KT.create("no-app-id");
      if (!Am) {
        if (am) return {
          measurementId: am,
          appId: hm
        };
        throw KT.create("no-api-key")
      }
      const xm = Tm.getThrottleMetadata(hm) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        },
        wm = new ST;
      return setTimeout((async () => {
        wm.abort()
      }), void 0 !== fm ? fm : 6e4), bT({
        appId: hm,
        apiKey: Am,
        measurementId: am
      }, xm, wm, Tm)
    }
    async function bT(mm, Tm, fm) {
      let {
        throttleEndTimeMillis: hm,
        backoffCount: Am
      } = Tm, xm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zT;
      var wm;
      const {
        appId: Dm,
        measurementId: im
      } = mm;
      try {
        await
        function(mm, Tm) {
          return new Promise(((fm, hm) => {
            const Am = Math.max(Tm - Date.now(), 0),
              am = setTimeout(fm, Am);
            mm.addEventListener((() => {
              clearTimeout(am), hm(KT.create("fetch-throttle", {
                throttleEndTimeMillis: Tm
              }))
            }))
          }))
        }(fm, hm)
      } catch (Rm) {
        if (im) return VT.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${im} provided in the "measurementId" field in the local Firebase config. [${null===Rm||void 0===Rm?void 0:Rm.message}]`), {
          appId: Dm,
          measurementId: im
        };
        throw Rm
      }
      try {
        const Tm = await async function(mm) {
          var Tm;
          const {
            appId: fm,
            apiKey: hm
          } = mm, Am = {
            method: "GET",
            headers: ZT(hm)
          }, am = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", fm), xm = await fetch(am, Am);
          if (200 !== xm.status && 304 !== xm.status) {
            let mm = "";
            try {
              const fm = await xm.json();
              (null === (Tm = fm.error) || void 0 === Tm ? void 0 : Tm.message) && (mm = fm.error.message)
            } catch (wm) {}
            throw KT.create("config-fetch-failed", {
              httpStatus: xm.status,
              responseMessage: mm
            })
          }
          return xm.json()
        }(mm);
        return xm.deleteThrottleMetadata(Dm), Tm
      } catch (Rm) {
        const Tm = Rm;
        if (! function(mm) {
            if (!(mm instanceof am.h) || !mm.customData) return !1;
            const Tm = Number(mm.customData.httpStatus);
            return 429 === Tm || 500 === Tm || 503 === Tm || 504 === Tm
          }(Tm)) {
          if (xm.deleteThrottleMetadata(Dm), im) return VT.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${im} provided in the "measurementId" field in the local Firebase config. [${null===Tm||void 0===Tm?void 0:Tm.message}]`), {
            appId: Dm,
            measurementId: im
          };
          throw Rm
        }
        const hm = 503 === Number(null === (wm = null === Tm || void 0 === Tm ? void 0 : Tm.customData) || void 0 === wm ? void 0 : wm.httpStatus) ? (0, am.q)(Am, xm.intervalMillis, 30) : (0, am.q)(Am, xm.intervalMillis),
          pm = {
            throttleEndTimeMillis: Date.now() + hm,
            backoffCount: Am + 1
          };
        return xm.setThrottleMetadata(Dm, pm), VT.debug(`Calling attemptFetch again in ${hm} millis`), bT(mm, pm, fm, xm)
      }
    }
    class ST {
      constructor() {
        this.listeners = []
      }
      addEventListener(mm) {
        this.listeners.push(mm)
      }
      abort() {
        this.listeners.forEach((mm => mm()))
      }
    }
    let eT, NT;

    function GT(mm) {
      NT = mm
    }

    function XT(mm) {
      eT = mm
    }
    async function PT(mm, Tm, fm, hm, Am, xm, wm) {
      var Dm;
      const im = kT(mm);
      im.then((Tm => {
        fm[Tm.measurementId] = Tm.appId, mm.options.measurementId && Tm.measurementId !== mm.options.measurementId && VT.warn(`The measurement ID in the local Firebase config (${mm.options.measurementId}) does not match the measurement ID fetched from the server (${Tm.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
      })).catch((mm => VT.error(mm))), Tm.push(im);
      const Rm = async function() {
        if (!(0, am.T)()) return VT.warn(KT.create("indexeddb-unavailable", {
          errorInfo: "IndexedDB is not available in this environment."
        }).message), !1;
        try {
          await (0, am.db)()
        } catch (mm) {
          return VT.warn(KT.create("indexeddb-unavailable", {
            errorInfo: null === mm || void 0 === mm ? void 0 : mm.toString()
          }).message), !1
        }
        return !0
      }().then((mm => mm ? hm.getId() : void 0)), [pm, Em] = await Promise.all([im, Rm]);
      (function(mm) {
        const Tm = window.document.getElementsByTagName("script");
        for (const fm of Object.values(Tm))
          if (fm.src && fm.src.includes(jT) && fm.src.includes(mm)) return fm;
        return null
      })(xm) || JT(xm, pm.measurementId), NT && (Am("consent", "default", NT), GT(void 0)), Am("js", new Date);
      const om = null !== (Dm = null === wm || void 0 === wm ? void 0 : wm.config) && void 0 !== Dm ? Dm : {};
      return om.origin = "firebase", om.update = !0, null != Em && (om.firebase_id = Em), Am("config", pm.measurementId, om), eT && (Am("set", eT), XT(void 0)), pm.measurementId
    }
    class HT {
      constructor(mm) {
        this.app = mm
      }
      _delete() {
        return delete yT[this.app.options.appId], Promise.resolve()
      }
    }
    let yT = {},
      CT = [];
    const rT = {};
    let sT, lT, MT = "dataLayer",
      uT = "gtag",
      BT = !1;

    function LT(mm) {
      if (BT) throw KT.create("already-initialized");
      mm.dataLayerName && (MT = mm.dataLayerName), mm.gtagName && (uT = mm.gtagName)
    }

    function vT(mm, Tm, fm) {
      ! function() {
        const mm = [];
        if ((0, am.P)() && mm.push("This is a browser extension environment."), (0, am.j)() || mm.push("Cookies are not available."), mm.length > 0) {
          const Tm = mm.map(((mm, Tm) => `(${Tm+1}) ${mm}`)).join(" "),
            fm = KT.create("invalid-analytics-context", {
              errorInfo: Tm
            });
          VT.warn(fm.message)
        }
      }();
      const hm = mm.options.appId;
      if (!hm) throw KT.create("no-app-id");
      if (!mm.options.apiKey) {
        if (!mm.options.measurementId) throw KT.create("no-api-key");
        VT.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${mm.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
      }
      if (null != yT[hm]) throw KT.create("already-exists", {
        id: hm
      });
      if (!BT) {
        ! function(mm) {
          let Tm = [];
          Array.isArray(window[mm]) ? Tm = window[mm] : window[mm] = Tm
        }(MT);
        const {
          wrappedGtag: mm,
          gtagCore: Tm
        } = function(mm, Tm, fm, hm, Am) {
          let am = function() {
            for (var mm = arguments.length, Tm = new Array(mm), fm = 0; fm < mm; fm++) Tm[fm] = arguments[fm];
            window[hm].push(arguments)
          };
          return window[Am] && "function" === typeof window[Am] && (am = window[Am]), window[Am] = cT(am, mm, Tm, fm), {
            gtagCore: am,
            wrappedGtag: window[Am]
          }
        }(yT, CT, rT, MT, uT);
        lT = mm, sT = Tm, BT = !0
      }
      yT[hm] = PT(mm, CT, rT, Tm, sT, MT, fm);
      return new HT(mm)
    }

    function tT() {
      let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, hm.H)();
      mm = (0, am.J)(mm);
      const Tm = (0, hm.z)(mm, qT);
      return Tm.isInitialized() ? Tm.getImmediate() : UT(mm)
    }

    function UT(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const fm = (0, hm.z)(mm, qT);
      if (fm.isInitialized()) {
        const mm = fm.getImmediate();
        if ((0, am.w)(Tm, fm.getOptions())) return mm;
        throw KT.create("already-initialized")
      }
      return fm.initialize({
        options: Tm
      })
    }
    async function dT() {
      if ((0, am.P)()) return !1;
      if (!(0, am.j)()) return !1;
      if (!(0, am.T)()) return !1;
      try {
        return await (0, am.db)()
      } catch (mm) {
        return !1
      }
    }

    function gT(mm, Tm, fm) {
      mm = (0, am.J)(mm), async function(mm, Tm, fm, hm) {
        if (hm && hm.global) return mm("set", {
          screen_name: fm
        }), Promise.resolve();
        mm("config", await Tm, {
          update: !0,
          screen_name: fm
        })
      }(lT, yT[mm.app.options.appId], Tm, fm).catch((mm => VT.error(mm)))
    }
    async function WT(mm) {
      return mm = (0, am.J)(mm), async function(mm, Tm) {
        const fm = await Tm;
        return new Promise(((Tm, hm) => {
          mm("get", fm, "client_id", (mm => {
            mm || hm(KT.create("no-client-id")), Tm(mm)
          }))
        }))
      }(lT, yT[mm.app.options.appId])
    }

    function FT(mm, Tm, fm) {
      mm = (0, am.J)(mm), async function(mm, Tm, fm, hm) {
        if (hm && hm.global) return mm("set", {
          user_id: fm
        }), Promise.resolve();
        mm("config", await Tm, {
          update: !0,
          user_id: fm
        })
      }(lT, yT[mm.app.options.appId], Tm, fm).catch((mm => VT.error(mm)))
    }

    function mf(mm, Tm, fm) {
      mm = (0, am.J)(mm), async function(mm, Tm, fm, hm) {
        if (hm && hm.global) {
          const Tm = {};
          for (const mm of Object.keys(fm)) Tm[`user_properties.${mm}`] = fm[mm];
          return mm("set", Tm), Promise.resolve()
        }
        mm("config", await Tm, {
          update: !0,
          user_properties: fm
        })
      }(lT, yT[mm.app.options.appId], Tm, fm).catch((mm => VT.error(mm)))
    }

    function Tf(mm, Tm) {
      mm = (0, am.J)(mm), async function(mm, Tm) {
        const fm = await mm;
        window[`ga-disable-${fm}`] = !Tm
      }(yT[mm.app.options.appId], Tm).catch((mm => VT.error(mm)))
    }

    function ff(mm) {
      lT ? lT("set", mm) : XT(mm)
    }

    function hf(mm, Tm, fm, hm) {
      mm = (0, am.J)(mm), async function(mm, Tm, fm, hm, Am) {
        if (Am && Am.global) mm("event", fm, hm);
        else {
          const Am = await Tm;
          mm("event", fm, Object.assign(Object.assign({}, hm), {
            send_to: Am
          }))
        }
      }(lT, yT[mm.app.options.appId], Tm, fm, hm).catch((mm => VT.error(mm)))
    }

    function Af(mm) {
      lT ? lT("consent", "update", mm) : GT(mm)
    }
    const af = "@firebase/analytics",
      xf = "0.10.0";
    (0, hm.A)(new xm.h(qT, ((mm, Tm) => {
      let {
        options: fm
      } = Tm;
      return vT(mm.getProvider("app").getImmediate(), mm.getProvider("installations-internal").getImmediate(), fm)
    }), "PUBLIC")), (0, hm.A)(new xm.h("analytics-internal", (function(mm) {
      try {
        const Tm = mm.getProvider(qT).getImmediate();
        return {
          logEvent: (mm, fm, hm) => hf(Tm, mm, fm, hm)
        }
      } catch (Tm) {
        throw KT.create("interop-component-reg-failed", {
          reason: Tm
        })
      }
    }), "PRIVATE")), (0, hm.N)(af, xf), (0, hm.N)(af, xf, "esm2017")
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);