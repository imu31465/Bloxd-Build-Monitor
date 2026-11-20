/*! For license information please see halsg.259.76eeee1f.chunk.js.LICENSE.txt */
export const id = 259;
export const ids = [259];
export const modules = {
  39986: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      getAnalytics: () => Fu,
      getGoogleAnalyticsClientId: () => cu,
      initializeAnalytics: () => fu,
      isSupported: () => ku,
      logEvent: () => hh,
      setAnalyticsCollectionEnabled: () => bh,
      setConsent: () => Bh,
      setCurrentScreen: () => Tu,
      setDefaultEventParameters: () => uh,
      setUserId: () => Qu,
      setUserProperties: () => Ru,
      settings: () => yu
    });
    var Bb = hb(39959),
      Ob = hb(39983),
      Gb = hb(39976),
      Ub = hb(39967);
    let Lb, Yb;
    const Sb = new WeakMap,
      ab = new WeakMap,
      Hb = new WeakMap,
      wb = new WeakMap,
      Zb = new WeakMap;
    let Xb = {
      get(bb, ub, hb) {
        if (bb instanceof IDBTransaction) {
          if ("done" === ub) return ab.get(bb);
          if ("objectStoreNames" === ub) return bb.objectStoreNames || Hb.get(bb);
          if ("store" === ub) return hb.objectStoreNames[1] ? void 0 : hb.objectStore(hb.objectStoreNames[0])
        }
        return Ab(bb[ub])
      },
      set: (bb, ub, hb) => (bb[ub] = hb, !0),
      has: (bb, ub) => bb instanceof IDBTransaction && ("done" === ub || "store" === ub) || ub in bb
    };

    function pb(bb) {
      return bb !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (Yb || (Yb = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(bb) ? function() {
        for (var ub = arguments.length, hb = new Array(ub), Bb = 0; Bb < ub; Bb++) hb[Bb] = arguments[Bb];
        return bb.apply(lb(this), hb), Ab(Sb.get(this))
      } : function() {
        for (var ub = arguments.length, hb = new Array(ub), Bb = 0; Bb < ub; Bb++) hb[Bb] = arguments[Bb];
        return Ab(bb.apply(lb(this), hb))
      } : function(ub) {
        for (var hb = arguments.length, Bb = new Array(hb > 1 ? hb - 1 : 0), Ob = 1; Ob < hb; Ob++) Bb[Ob - 1] = arguments[Ob];
        const Gb = bb.call(lb(this), ub, ...Bb);
        return Hb.set(Gb, ub.sort ? ub.sort() : [ub]), Ab(Gb)
      }
    }

    function ob(bb) {
      return "function" === typeof bb ? pb(bb) : (bb instanceof IDBTransaction && function(bb) {
        if (ab.has(bb)) return;
        const ub = new Promise(((ub, hb) => {
          const Bb = () => {
              bb.removeEventListener("complete", Ob), bb.removeEventListener("error", Gb), bb.removeEventListener("abort", Gb)
            },
            Ob = () => {
              ub(), Bb()
            },
            Gb = () => {
              hb(bb.error || new DOMException("AbortError", "AbortError")), Bb()
            };
          bb.addEventListener("complete", Ob), bb.addEventListener("error", Gb), bb.addEventListener("abort", Gb)
        }));
        ab.set(bb, ub)
      }(bb), ub = bb, (Lb || (Lb = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((bb => ub instanceof bb)) ? new Proxy(bb, Xb) : bb);
      var ub
    }

    function Ab(bb) {
      if (bb instanceof IDBRequest) return function(bb) {
        const ub = new Promise(((ub, hb) => {
          const Bb = () => {
              bb.removeEventListener("success", Ob), bb.removeEventListener("error", Gb)
            },
            Ob = () => {
              ub(Ab(bb.result)), Bb()
            },
            Gb = () => {
              hb(bb.error), Bb()
            };
          bb.addEventListener("success", Ob), bb.addEventListener("error", Gb)
        }));
        return ub.then((ub => {
          ub instanceof IDBCursor && Sb.set(ub, bb)
        })).catch((() => {})), Zb.set(ub, bb), ub
      }(bb);
      if (wb.has(bb)) return wb.get(bb);
      const ub = ob(bb);
      return ub !== bb && (wb.set(bb, ub), Zb.set(ub, bb)), ub
    }
    const lb = bb => Zb.get(bb);
    const Kb = ["get", "getKey", "getAll", "getAllKeys", "count"],
      Wb = ["put", "add", "delete", "clear"],
      Cb = new Map;

    function db(bb, ub) {
      if (!(bb instanceof IDBDatabase) || ub in bb || "string" !== typeof ub) return;
      if (Cb.get(ub)) return Cb.get(ub);
      const hb = ub.replace(/FromIndex$/, ""),
        Bb = ub !== hb,
        Ob = Wb.includes(hb);
      if (!(hb in (Bb ? IDBIndex : IDBObjectStore).prototype) || !Ob && !Kb.includes(hb)) return;
      const Gb = async function(bb) {
        const ub = this.transaction(bb, Ob ? "readwrite" : "readonly");
        let Gb = ub.store;
        for (var Ub = arguments.length, Lb = new Array(Ub > 1 ? Ub - 1 : 0), Yb = 1; Yb < Ub; Yb++) Lb[Yb - 1] = arguments[Yb];
        return Bb && (Gb = Gb.index(Lb.shift())), (await Promise.all([Gb[hb](...Lb), Ob && ub.done]))[0]
      };
      return Cb.set(ub, Gb), Gb
    }
    Xb = (bb => ({
      ...bb,
      get: (ub, hb, Bb) => db(ub, hb) || bb.get(ub, hb, Bb),
      has: (ub, hb) => !!db(ub, hb) || bb.has(ub, hb)
    }))(Xb);
    const rb = "@firebase/installations",
      jb = "0.6.4",
      nb = 1e4,
      Db = `w:${jb}`,
      xb = "FIS_v2",
      zb = 36e5,
      gb = {
        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
        "not-registered": "Firebase Installation is not registered.",
        "installation-not-found": "Firebase Installation not found.",
        "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        "app-offline": "Could not process request. Application offline.",
        "delete-pending-registration": "Can't delete installation while there is a pending registration request."
      },
      ib = new Gb.h("installations", "Installations", gb);

    function vb(bb) {
      return bb instanceof Gb.i && bb.code.includes("request-failed")
    }

    function tb(bb) {
      let {
        projectId: ub
      } = bb;
      return `https://firebaseinstallations.googleapis.com/v1/projects/${ub}/installations`
    }

    function Jb(bb) {
      return {
        token: bb.token,
        requestStatus: 2,
        expiresIn: (ub = bb.expiresIn, Number(ub.replace("s", "000"))),
        creationTime: Date.now()
      };
      var ub
    }
    async function eb(bb, ub) {
      const hb = (await ub.json()).error;
      return ib.create("request-failed", {
        requestName: bb,
        serverCode: hb.code,
        serverMessage: hb.message,
        serverStatus: hb.status
      })
    }

    function Nb(bb) {
      let {
        apiKey: ub
      } = bb;
      return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": ub
      })
    }

    function sb(bb, ub) {
      let {
        refreshToken: hb
      } = ub;
      const Bb = Nb(bb);
      return Bb.append("Authorization", function(bb) {
        return `${xb} ${bb}`
      }(hb)), Bb
    }
    async function Mb(bb) {
      const ub = await bb();
      return ub.status >= 500 && ub.status < 600 ? bb() : ub
    }

    function mb(bb) {
      return new Promise((ub => {
        setTimeout(ub, bb)
      }))
    }
    const Ib = /^[cdef][\w-]{21}$/;

    function Pb() {
      try {
        const bb = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(bb), bb[0] = 112 + bb[0] % 16;
        const ub = function(bb) {
          const ub = (hb = bb, btoa(String.fromCharCode(...hb)).replace(/\+/g, "-").replace(/\//g, "_"));
          var hb;
          return ub.substr(0, 22)
        }(bb);
        return Ib.test(ub) ? ub : ""
      } catch (bb) {
        return ""
      }
    }

    function qb(bb) {
      return `${bb.appName}!${bb.appId}`
    }
    const Eb = new Map;

    function yb(bb, ub) {
      const hb = qb(bb);
      Vb(hb, ub),
        function(bb, ub) {
          const hb = fb();
          hb && hb.postMessage({
            key: bb,
            fid: ub
          });
          kb()
        }(hb, ub)
    }

    function Vb(bb, ub) {
      const hb = Eb.get(bb);
      if (hb)
        for (const Bb of hb) Bb(ub)
    }
    let Fb = null;

    function fb() {
      return !Fb && "BroadcastChannel" in self && (Fb = new BroadcastChannel("[Firebase] FID Change"), Fb.onmessage = bb => {
        Vb(bb.data.key, bb.data.fid)
      }), Fb
    }

    function kb() {
      0 === Eb.size && Fb && (Fb.close(), Fb = null)
    }
    const Tb = "firebase-installations-store";
    let cb = null;

    function Qb() {
      return cb || (cb = function(bb, ub) {
        let {
          blocked: hb,
          upgrade: Bb,
          blocking: Ob,
          terminated: Gb
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const Ub = indexedDB.open(bb, ub),
          Lb = Ab(Ub);
        return Bb && Ub.addEventListener("upgradeneeded", (bb => {
          Bb(Ab(Ub.result), bb.oldVersion, bb.newVersion, Ab(Ub.transaction))
        })), hb && Ub.addEventListener("blocked", (() => hb())), Lb.then((bb => {
          Gb && bb.addEventListener("close", (() => Gb())), Ob && bb.addEventListener("versionchange", (() => Ob()))
        })).catch((() => {})), Lb
      }("firebase-installations-database", 1, {
        upgrade: (bb, ub) => {
          if (0 === ub) bb.createObjectStore(Tb)
        }
      })), cb
    }
    async function Rb(bb, ub) {
      const hb = qb(bb),
        Bb = (await Qb()).transaction(Tb, "readwrite"),
        Ob = Bb.objectStore(Tb),
        Gb = await Ob.get(hb);
      return await Ob.put(ub, hb), await Bb.done, Gb && Gb.fid === ub.fid || yb(bb, ub.fid), ub
    }
    async function bu(bb) {
      const ub = qb(bb),
        hb = (await Qb()).transaction(Tb, "readwrite");
      await hb.objectStore(Tb).delete(ub), await hb.done
    }
    async function uu(bb, ub) {
      const hb = qb(bb),
        Bb = (await Qb()).transaction(Tb, "readwrite"),
        Ob = Bb.objectStore(Tb),
        Gb = await Ob.get(hb),
        Ub = ub(Gb);
      return void 0 === Ub ? await Ob.delete(hb) : await Ob.put(Ub, hb), await Bb.done, !Ub || Gb && Gb.fid === Ub.fid || yb(bb, Ub.fid), Ub
    }
    async function hu(bb) {
      let ub;
      const hb = await uu(bb.appConfig, (hb => {
        const Bb = function(bb) {
            const ub = bb || {
              fid: Pb(),
              registrationStatus: 0
            };
            return Gu(ub)
          }(hb),
          Ob = function(bb, ub) {
            if (0 === ub.registrationStatus) {
              if (!navigator.onLine) {
                return {
                  installationEntry: ub,
                  registrationPromise: Promise.reject(ib.create("app-offline"))
                }
              }
              const hb = {
                  fid: ub.fid,
                  registrationStatus: 1,
                  registrationTime: Date.now()
                },
                Bb = async function(bb, ub) {
                  try {
                    const hb = await async function(bb, ub) {
                      let {
                        appConfig: hb,
                        heartbeatServiceProvider: Bb
                      } = bb, {
                        fid: Ob
                      } = ub;
                      const Gb = tb(hb),
                        Ub = Nb(hb),
                        Lb = Bb.getImmediate({
                          optional: !0
                        });
                      if (Lb) {
                        const bb = await Lb.getHeartbeatsHeader();
                        bb && Ub.append("x-firebase-client", bb)
                      }
                      const Yb = {
                          fid: Ob,
                          authVersion: xb,
                          appId: hb.appId,
                          sdkVersion: Db
                        },
                        Sb = {
                          method: "POST",
                          headers: Ub,
                          body: JSON.stringify(Yb)
                        },
                        ab = await Mb((() => fetch(Gb, Sb)));
                      if (ab.ok) {
                        const bb = await ab.json();
                        return {
                          fid: bb.fid || Ob,
                          registrationStatus: 2,
                          refreshToken: bb.refreshToken,
                          authToken: Jb(bb.authToken)
                        }
                      }
                      throw await eb("Create Installation", ab)
                    }(bb, ub);
                    return Rb(bb.appConfig, hb)
                  } catch (hb) {
                    throw vb(hb) && 409 === hb.customData.serverCode ? await bu(bb.appConfig) : await Rb(bb.appConfig, {
                      fid: ub.fid,
                      registrationStatus: 0
                    }), hb
                  }
                }(bb, hb);
              return {
                installationEntry: hb,
                registrationPromise: Bb
              }
            }
            return 1 === ub.registrationStatus ? {
              installationEntry: ub,
              registrationPromise: Bu(bb)
            } : {
              installationEntry: ub
            }
          }(bb, Bb);
        return ub = Ob.registrationPromise, Ob.installationEntry
      }));
      return "" === hb.fid ? {
        installationEntry: await ub
      } : {
        installationEntry: hb,
        registrationPromise: ub
      }
    }
    async function Bu(bb) {
      let ub = await Ou(bb.appConfig);
      for (; 1 === ub.registrationStatus;) await mb(100), ub = await Ou(bb.appConfig);
      if (0 === ub.registrationStatus) {
        const {
          installationEntry: ub,
          registrationPromise: hb
        } = await hu(bb);
        return hb || ub
      }
      return ub
    }

    function Ou(bb) {
      return uu(bb, (bb => {
        if (!bb) throw ib.create("installation-not-found");
        return Gu(bb)
      }))
    }

    function Gu(bb) {
      return 1 === (ub = bb).registrationStatus && ub.registrationTime + nb < Date.now() ? {
        fid: bb.fid,
        registrationStatus: 0
      } : bb;
      var ub
    }
    async function Uu(bb, ub) {
      let {
        appConfig: hb,
        heartbeatServiceProvider: Bb
      } = bb;
      const Ob = function(bb, ub) {
          let {
            fid: hb
          } = ub;
          return `${tb(bb)}/${hb}/authTokens:generate`
        }(hb, ub),
        Gb = sb(hb, ub),
        Ub = Bb.getImmediate({
          optional: !0
        });
      if (Ub) {
        const bb = await Ub.getHeartbeatsHeader();
        bb && Gb.append("x-firebase-client", bb)
      }
      const Lb = {
          installation: {
            sdkVersion: Db,
            appId: hb.appId
          }
        },
        Yb = {
          method: "POST",
          headers: Gb,
          body: JSON.stringify(Lb)
        },
        Sb = await Mb((() => fetch(Ob, Yb)));
      if (Sb.ok) {
        return Jb(await Sb.json())
      }
      throw await eb("Generate Auth Token", Sb)
    }
    async function Lu(bb) {
      let ub, hb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const Bb = await uu(bb.appConfig, (Bb => {
        if (!Su(Bb)) throw ib.create("not-registered");
        const Ob = Bb.authToken;
        if (!hb && function(bb) {
            return 2 === bb.requestStatus && ! function(bb) {
              const ub = Date.now();
              return ub < bb.creationTime || bb.creationTime + bb.expiresIn < ub + zb
            }(bb)
          }(Ob)) return Bb;
        if (1 === Ob.requestStatus) return ub = async function(bb, ub) {
          let hb = await Yu(bb.appConfig);
          for (; 1 === hb.authToken.requestStatus;) await mb(100), hb = await Yu(bb.appConfig);
          const Bb = hb.authToken;
          return 0 === Bb.requestStatus ? Lu(bb, ub) : Bb
        }(bb, hb), Bb;
        {
          if (!navigator.onLine) throw ib.create("app-offline");
          const hb = function(bb) {
            const ub = {
              requestStatus: 1,
              requestTime: Date.now()
            };
            return Object.assign(Object.assign({}, bb), {
              authToken: ub
            })
          }(Bb);
          return ub = async function(bb, ub) {
            try {
              const hb = await Uu(bb, ub),
                Bb = Object.assign(Object.assign({}, ub), {
                  authToken: hb
                });
              return await Rb(bb.appConfig, Bb), hb
            } catch (hb) {
              if (!vb(hb) || 401 !== hb.customData.serverCode && 404 !== hb.customData.serverCode) {
                const hb = Object.assign(Object.assign({}, ub), {
                  authToken: {
                    requestStatus: 0
                  }
                });
                await Rb(bb.appConfig, hb)
              } else await bu(bb.appConfig);
              throw hb
            }
          }(bb, hb), hb
        }
      }));
      return ub ? await ub : Bb.authToken
    }

    function Yu(bb) {
      return uu(bb, (bb => {
        if (!Su(bb)) throw ib.create("not-registered");
        const ub = bb.authToken;
        return 1 === (hb = ub).requestStatus && hb.requestTime + nb < Date.now() ? Object.assign(Object.assign({}, bb), {
          authToken: {
            requestStatus: 0
          }
        }) : bb;
        var hb
      }))
    }

    function Su(bb) {
      return void 0 !== bb && 2 === bb.registrationStatus
    }
    async function au(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const hb = bb;
      await async function(bb) {
        const {
          registrationPromise: ub
        } = await hu(bb);
        ub && await ub
      }(hb);
      return (await Lu(hb, ub)).token
    }

    function Hu(bb) {
      return ib.create("missing-app-config-values", {
        valueName: bb
      })
    }
    const wu = "installations",
      Zu = bb => {
        const ub = bb.getProvider("app").getImmediate(),
          hb = function(bb) {
            if (!bb || !bb.options) throw Hu("App Configuration");
            if (!bb.name) throw Hu("App Name");
            const ub = ["projectId", "apiKey", "appId"];
            for (const hb of ub)
              if (!bb.options[hb]) throw Hu(hb);
            return {
              appName: bb.name,
              projectId: bb.options.projectId,
              apiKey: bb.options.apiKey,
              appId: bb.options.appId
            }
          }(ub);
        return {
          app: ub,
          appConfig: hb,
          heartbeatServiceProvider: (0, Bb.z)(ub, "heartbeat"),
          _delete: () => Promise.resolve()
        }
      },
      Xu = bb => {
        const ub = bb.getProvider("app").getImmediate(),
          hb = (0, Bb.z)(ub, wu).getImmediate();
        return {
          getId: () => async function(bb) {
            const ub = bb,
              {
                installationEntry: hb,
                registrationPromise: Bb
              } = await hu(ub);
            return Bb ? Bb.catch(console.error) : Lu(ub).catch(console.error), hb.fid
          }(hb),
          getToken: bb => au(hb, bb)
        }
      };
    (0, Bb.D)(new Ub.f(wu, Zu, "PUBLIC")), (0, Bb.D)(new Ub.f("installations-internal", Xu, "PRIVATE")), (0, Bb.R)(rb, jb), (0, Bb.R)(rb, jb, "esm2017");
    const pu = "analytics",
      ou = "https://www.googletagmanager.com/gtag/js",
      Au = new Ob.i("@firebase/analytics"),
      lu = {
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
      Ku = new Gb.h("analytics", "Analytics", lu);

    function Wu(bb) {
      if (!bb.startsWith(ou)) {
        const ub = Ku.create("invalid-gtag-resource", {
          gtagURL: bb
        });
        return Au.warn(ub.message), ""
      }
      return bb
    }

    function Cu(bb) {
      return Promise.all(bb.map((bb => bb.catch((bb => bb)))))
    }

    function du(bb, ub) {
      const hb = function(bb, ub) {
          let hb;
          return window.trustedTypes && (hb = window.trustedTypes.createPolicy(bb, ub)), hb
        }("firebase-js-sdk-policy", {
          createScriptURL: Wu
        }),
        Bb = document.createElement("script"),
        Ob = `${ou}?l=${bb}&id=${ub}`;
      Bb.src = hb ? null === hb || void 0 === hb ? void 0 : hb.createScriptURL(Ob) : Ob, Bb.async = !0, document.head.appendChild(Bb)
    }

    function ru(bb, ub, hb, Bb) {
      return async function(Ob) {
        try {
          for (var Gb = arguments.length, Ub = new Array(Gb > 1 ? Gb - 1 : 0), Lb = 1; Lb < Gb; Lb++) Ub[Lb - 1] = arguments[Lb];
          if ("event" === Ob) {
            const [Bb, Ob] = Ub;
            await async function(bb, ub, hb, Bb, Ob) {
              try {
                let Gb = [];
                if (Ob && Ob.send_to) {
                  let bb = Ob.send_to;
                  Array.isArray(bb) || (bb = [bb]);
                  const Bb = await Cu(hb);
                  for (const hb of bb) {
                    const bb = Bb.find((bb => bb.measurementId === hb)),
                      Ob = bb && ub[bb.appId];
                    if (!Ob) {
                      Gb = [];
                      break
                    }
                    Gb.push(Ob)
                  }
                }
                0 === Gb.length && (Gb = Object.values(ub)), await Promise.all(Gb), bb("event", Bb, Ob || {})
              } catch (Gb) {
                Au.error(Gb)
              }
            }(bb, ub, hb, Bb, Ob)
          } else if ("config" === Ob) {
            const [Ob, Gb] = Ub;
            await async function(bb, ub, hb, Bb, Ob, Gb) {
              const Ub = Bb[Ob];
              try {
                if (Ub) await ub[Ub];
                else {
                  const bb = (await Cu(hb)).find((bb => bb.measurementId === Ob));
                  bb && await ub[bb.appId]
                }
              } catch (Lb) {
                Au.error(Lb)
              }
              bb("config", Ob, Gb)
            }(bb, ub, hb, Bb, Ob, Gb)
          } else if ("consent" === Ob) {
            const [ub] = Ub;
            bb("consent", "update", ub)
          } else if ("get" === Ob) {
            const [ub, hb, Bb] = Ub;
            bb("get", ub, hb, Bb)
          } else if ("set" === Ob) {
            const [ub] = Ub;
            bb("set", ub)
          } else bb(Ob, ...Ub)
        } catch (Yb) {
          Au.error(Yb)
        }
      }
    }
    const ju = new class {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
        this.throttleMetadata = bb, this.intervalMillis = ub
      }
      getThrottleMetadata(bb) {
        return this.throttleMetadata[bb]
      }
      setThrottleMetadata(bb, ub) {
        this.throttleMetadata[bb] = ub
      }
      deleteThrottleMetadata(bb) {
        delete this.throttleMetadata[bb]
      }
    };

    function nu(bb) {
      return new Headers({
        Accept: "application/json",
        "x-goog-api-key": bb
      })
    }
    async function Du(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ju,
        hb = arguments.length > 2 ? arguments[2] : void 0;
      const {
        appId: Bb,
        apiKey: Ob,
        measurementId: Gb
      } = bb.options;
      if (!Bb) throw Ku.create("no-app-id");
      if (!Ob) {
        if (Gb) return {
          measurementId: Gb,
          appId: Bb
        };
        throw Ku.create("no-api-key")
      }
      const Ub = ub.getThrottleMetadata(Bb) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        },
        Lb = new zu;
      return setTimeout((async () => {
        Lb.abort()
      }), void 0 !== hb ? hb : 6e4), xu({
        appId: Bb,
        apiKey: Ob,
        measurementId: Gb
      }, Ub, Lb, ub)
    }
    async function xu(bb, ub, hb) {
      let {
        throttleEndTimeMillis: Bb,
        backoffCount: Ob
      } = ub, Ub = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ju;
      var Lb;
      const {
        appId: Yb,
        measurementId: Sb
      } = bb;
      try {
        await
        function(bb, ub) {
          return new Promise(((hb, Bb) => {
            const Ob = Math.max(ub - Date.now(), 0),
              Gb = setTimeout(hb, Ob);
            bb.addEventListener((() => {
              clearTimeout(Gb), Bb(Ku.create("fetch-throttle", {
                throttleEndTimeMillis: ub
              }))
            }))
          }))
        }(hb, Bb)
      } catch (ab) {
        if (Sb) return Au.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${Sb} provided in the "measurementId" field in the local Firebase config. [${null===ab||void 0===ab?void 0:ab.message}]`), {
          appId: Yb,
          measurementId: Sb
        };
        throw ab
      }
      try {
        const ub = await async function(bb) {
          var ub;
          const {
            appId: hb,
            apiKey: Bb
          } = bb, Ob = {
            method: "GET",
            headers: nu(Bb)
          }, Gb = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", hb), Ub = await fetch(Gb, Ob);
          if (200 !== Ub.status && 304 !== Ub.status) {
            let bb = "";
            try {
              const hb = await Ub.json();
              (null === (ub = hb.error) || void 0 === ub ? void 0 : ub.message) && (bb = hb.error.message)
            } catch (Lb) {}
            throw Ku.create("config-fetch-failed", {
              httpStatus: Ub.status,
              responseMessage: bb
            })
          }
          return Ub.json()
        }(bb);
        return Ub.deleteThrottleMetadata(Yb), ub
      } catch (ab) {
        const ub = ab;
        if (! function(bb) {
            if (!(bb instanceof Gb.i) || !bb.customData) return !1;
            const ub = Number(bb.customData.httpStatus);
            return 429 === ub || 500 === ub || 503 === ub || 504 === ub
          }(ub)) {
          if (Ub.deleteThrottleMetadata(Yb), Sb) return Au.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${Sb} provided in the "measurementId" field in the local Firebase config. [${null===ub||void 0===ub?void 0:ub.message}]`), {
            appId: Yb,
            measurementId: Sb
          };
          throw ab
        }
        const Bb = 503 === Number(null === (Lb = null === ub || void 0 === ub ? void 0 : ub.customData) || void 0 === Lb ? void 0 : Lb.httpStatus) ? (0, Gb.s)(Ob, Ub.intervalMillis, 30) : (0, Gb.s)(Ob, Ub.intervalMillis),
          Hb = {
            throttleEndTimeMillis: Date.now() + Bb,
            backoffCount: Ob + 1
          };
        return Ub.setThrottleMetadata(Yb, Hb), Au.debug(`Calling attemptFetch again in ${Bb} millis`), xu(bb, Hb, hb, Ub)
      }
    }
    class zu {
      constructor() {
        this.listeners = []
      }
      addEventListener(bb) {
        this.listeners.push(bb)
      }
      abort() {
        this.listeners.forEach((bb => bb()))
      }
    }
    let gu, iu;

    function vu(bb) {
      iu = bb
    }

    function tu(bb) {
      gu = bb
    }
    async function Ju(bb, ub, hb, Bb, Ob, Ub, Lb) {
      var Yb;
      const Sb = Du(bb);
      Sb.then((ub => {
        hb[ub.measurementId] = ub.appId, bb.options.measurementId && ub.measurementId !== bb.options.measurementId && Au.warn(`The measurement ID in the local Firebase config (${bb.options.measurementId}) does not match the measurement ID fetched from the server (${ub.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
      })).catch((bb => Au.error(bb))), ub.push(Sb);
      const ab = async function() {
        if (!(0, Gb.V)()) return Au.warn(Ku.create("indexeddb-unavailable", {
          errorInfo: "IndexedDB is not available in this environment."
        }).message), !1;
        try {
          await (0, Gb.jb)()
        } catch (bb) {
          return Au.warn(Ku.create("indexeddb-unavailable", {
            errorInfo: null === bb || void 0 === bb ? void 0 : bb.toString()
          }).message), !1
        }
        return !0
      }().then((bb => bb ? Bb.getId() : void 0)), [Hb, wb] = await Promise.all([Sb, ab]);
      (function(bb) {
        const ub = window.document.getElementsByTagName("script");
        for (const hb of Object.values(ub))
          if (hb.src && hb.src.includes(ou) && hb.src.includes(bb)) return hb;
        return null
      })(Ub) || du(Ub, Hb.measurementId), iu && (Ob("consent", "default", iu), vu(void 0)), Ob("js", new Date);
      const Zb = null !== (Yb = null === Lb || void 0 === Lb ? void 0 : Lb.config) && void 0 !== Yb ? Yb : {};
      return Zb.origin = "firebase", Zb.update = !0, null != wb && (Zb.firebase_id = wb), Ob("config", Hb.measurementId, Zb), gu && (Ob("set", gu), tu(void 0)), Hb.measurementId
    }
    class eu {
      constructor(bb) {
        this.app = bb
      }
      _delete() {
        return delete Nu[this.app.options.appId], Promise.resolve()
      }
    }
    let Nu = {},
      su = [];
    const Mu = {};
    let mu, Iu, Pu = "dataLayer",
      qu = "gtag",
      Eu = !1;

    function yu(bb) {
      if (Eu) throw Ku.create("already-initialized");
      bb.dataLayerName && (Pu = bb.dataLayerName), bb.gtagName && (qu = bb.gtagName)
    }

    function Vu(bb, ub, hb) {
      ! function() {
        const bb = [];
        if ((0, Gb.P)() && bb.push("This is a browser extension environment."), (0, Gb.j)() || bb.push("Cookies are not available."), bb.length > 0) {
          const ub = bb.map(((bb, ub) => `(${ub+1}) ${bb}`)).join(" "),
            hb = Ku.create("invalid-analytics-context", {
              errorInfo: ub
            });
          Au.warn(hb.message)
        }
      }();
      const Bb = bb.options.appId;
      if (!Bb) throw Ku.create("no-app-id");
      if (!bb.options.apiKey) {
        if (!bb.options.measurementId) throw Ku.create("no-api-key");
        Au.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${bb.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
      }
      if (null != Nu[Bb]) throw Ku.create("already-exists", {
        id: Bb
      });
      if (!Eu) {
        ! function(bb) {
          let ub = [];
          Array.isArray(window[bb]) ? ub = window[bb] : window[bb] = ub
        }(Pu);
        const {
          wrappedGtag: bb,
          gtagCore: ub
        } = function(bb, ub, hb, Bb, Ob) {
          let Gb = function() {
            for (var bb = arguments.length, ub = new Array(bb), hb = 0; hb < bb; hb++) ub[hb] = arguments[hb];
            window[Bb].push(arguments)
          };
          return window[Ob] && "function" === typeof window[Ob] && (Gb = window[Ob]), window[Ob] = ru(Gb, bb, ub, hb), {
            gtagCore: Gb,
            wrappedGtag: window[Ob]
          }
        }(Nu, su, Mu, Pu, qu);
        Iu = bb, mu = ub, Eu = !0
      }
      Nu[Bb] = Ju(bb, su, Mu, ub, mu, Pu, hb);
      return new eu(bb)
    }

    function Fu() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Bb.L)();
      bb = (0, Gb.K)(bb);
      const ub = (0, Bb.z)(bb, pu);
      return ub.isInitialized() ? ub.getImmediate() : fu(bb)
    }

    function fu(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const hb = (0, Bb.z)(bb, pu);
      if (hb.isInitialized()) {
        const bb = hb.getImmediate();
        if ((0, Gb.y)(ub, hb.getOptions())) return bb;
        throw Ku.create("already-initialized")
      }
      return hb.initialize({
        options: ub
      })
    }
    async function ku() {
      if ((0, Gb.P)()) return !1;
      if (!(0, Gb.j)()) return !1;
      if (!(0, Gb.V)()) return !1;
      try {
        return await (0, Gb.jb)()
      } catch (bb) {
        return !1
      }
    }

    function Tu(bb, ub, hb) {
      bb = (0, Gb.K)(bb), async function(bb, ub, hb, Bb) {
        if (Bb && Bb.global) return bb("set", {
          screen_name: hb
        }), Promise.resolve();
        bb("config", await ub, {
          update: !0,
          screen_name: hb
        })
      }(Iu, Nu[bb.app.options.appId], ub, hb).catch((bb => Au.error(bb)))
    }
    async function cu(bb) {
      return bb = (0, Gb.K)(bb), async function(bb, ub) {
        const hb = await ub;
        return new Promise(((ub, Bb) => {
          bb("get", hb, "client_id", (bb => {
            bb || Bb(Ku.create("no-client-id")), ub(bb)
          }))
        }))
      }(Iu, Nu[bb.app.options.appId])
    }

    function Qu(bb, ub, hb) {
      bb = (0, Gb.K)(bb), async function(bb, ub, hb, Bb) {
        if (Bb && Bb.global) return bb("set", {
          user_id: hb
        }), Promise.resolve();
        bb("config", await ub, {
          update: !0,
          user_id: hb
        })
      }(Iu, Nu[bb.app.options.appId], ub, hb).catch((bb => Au.error(bb)))
    }

    function Ru(bb, ub, hb) {
      bb = (0, Gb.K)(bb), async function(bb, ub, hb, Bb) {
        if (Bb && Bb.global) {
          const ub = {};
          for (const bb of Object.keys(hb)) ub[`user_properties.${bb}`] = hb[bb];
          return bb("set", ub), Promise.resolve()
        }
        bb("config", await ub, {
          update: !0,
          user_properties: hb
        })
      }(Iu, Nu[bb.app.options.appId], ub, hb).catch((bb => Au.error(bb)))
    }

    function bh(bb, ub) {
      bb = (0, Gb.K)(bb), async function(bb, ub) {
        const hb = await bb;
        window[`ga-disable-${hb}`] = !ub
      }(Nu[bb.app.options.appId], ub).catch((bb => Au.error(bb)))
    }

    function uh(bb) {
      Iu ? Iu("set", bb) : tu(bb)
    }

    function hh(bb, ub, hb, Bb) {
      bb = (0, Gb.K)(bb), async function(bb, ub, hb, Bb, Ob) {
        if (Ob && Ob.global) bb("event", hb, Bb);
        else {
          const Ob = await ub;
          bb("event", hb, Object.assign(Object.assign({}, Bb), {
            send_to: Ob
          }))
        }
      }(Iu, Nu[bb.app.options.appId], ub, hb, Bb).catch((bb => Au.error(bb)))
    }

    function Bh(bb) {
      Iu ? Iu("consent", "update", bb) : vu(bb)
    }
    const Oh = "@firebase/analytics",
      Gh = "0.10.0";
    (0, Bb.D)(new Ub.f(pu, ((bb, ub) => {
      let {
        options: hb
      } = ub;
      return Vu(bb.getProvider("app").getImmediate(), bb.getProvider("installations-internal").getImmediate(), hb)
    }), "PUBLIC")), (0, Bb.D)(new Ub.f("analytics-internal", (function(bb) {
      try {
        const ub = bb.getProvider(pu).getImmediate();
        return {
          logEvent: (bb, hb, Bb) => hh(ub, bb, hb, Bb)
        }
      } catch (ub) {
        throw Ku.create("interop-component-reg-failed", {
          reason: ub
        })
      }
    }), "PRIVATE")), (0, Bb.R)(Oh, Gh), (0, Bb.R)(Oh, Gh, "esm2017")
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);