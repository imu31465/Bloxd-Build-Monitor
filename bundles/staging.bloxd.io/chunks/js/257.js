/*! For license information please see fsa8nn.257.d33dd68c.chunk.js.LICENSE.txt */
export const id = 257;
export const ids = [257];
export const modules = {
  39953: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      getAnalytics: () => Sc,
      getGoogleAnalyticsClientId: () => xc,
      initializeAnalytics: () => Rc,
      isSupported: () => vc,
      logEvent: () => ss,
      setAnalyticsCollectionEnabled: () => bs,
      setConsent: () => ks,
      setCurrentScreen: () => Fc,
      setDefaultEventParameters: () => cs,
      setUserId: () => jc,
      setUserProperties: () => pc,
      settings: () => rc
    });
    var kb = sb(39926),
      Wb = sb(39945),
      ab = sb(39940),
      Tb = sb(39934);
    let Ub, Ib;
    const Hb = new WeakMap,
      fb = new WeakMap,
      Mb = new WeakMap,
      Xb = new WeakMap,
      nb = new WeakMap;
    let mb = {
      get(bb, cb, sb) {
        if (bb instanceof IDBTransaction) {
          if ("done" === cb) return fb.get(bb);
          if ("objectStoreNames" === cb) return bb.objectStoreNames || Mb.get(bb);
          if ("store" === cb) return sb.objectStoreNames[1] ? void 0 : sb.objectStore(sb.objectStoreNames[0])
        }
        return eb(bb[cb])
      },
      set: (bb, cb, sb) => (bb[cb] = sb, !0),
      has: (bb, cb) => bb instanceof IDBTransaction && ("done" === cb || "store" === cb) || cb in bb
    };

    function lb(bb) {
      return bb !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (Ib || (Ib = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(bb) ? function() {
        for (var cb = arguments.length, sb = new Array(cb), kb = 0; kb < cb; kb++) sb[kb] = arguments[kb];
        return bb.apply(Cb(this), sb), eb(Hb.get(this))
      } : function() {
        for (var cb = arguments.length, sb = new Array(cb), kb = 0; kb < cb; kb++) sb[kb] = arguments[kb];
        return eb(bb.apply(Cb(this), sb))
      } : function(cb) {
        for (var sb = arguments.length, kb = new Array(sb > 1 ? sb - 1 : 0), Wb = 1; Wb < sb; Wb++) kb[Wb - 1] = arguments[Wb];
        const ab = bb.call(Cb(this), cb, ...kb);
        return Mb.set(ab, cb.sort ? cb.sort() : [cb]), eb(ab)
      }
    }

    function Qb(bb) {
      return "function" === typeof bb ? lb(bb) : (bb instanceof IDBTransaction && function(bb) {
        if (fb.has(bb)) return;
        const cb = new Promise(((cb, sb) => {
          const kb = () => {
              bb.removeEventListener("complete", Wb), bb.removeEventListener("error", ab), bb.removeEventListener("abort", ab)
            },
            Wb = () => {
              cb(), kb()
            },
            ab = () => {
              sb(bb.error || new DOMException("AbortError", "AbortError")), kb()
            };
          bb.addEventListener("complete", Wb), bb.addEventListener("error", ab), bb.addEventListener("abort", ab)
        }));
        fb.set(bb, cb)
      }(bb), cb = bb, (Ub || (Ub = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((bb => cb instanceof bb)) ? new Proxy(bb, mb) : bb);
      var cb
    }

    function eb(bb) {
      if (bb instanceof IDBRequest) return function(bb) {
        const cb = new Promise(((cb, sb) => {
          const kb = () => {
              bb.removeEventListener("success", Wb), bb.removeEventListener("error", ab)
            },
            Wb = () => {
              cb(eb(bb.result)), kb()
            },
            ab = () => {
              sb(bb.error), kb()
            };
          bb.addEventListener("success", Wb), bb.addEventListener("error", ab)
        }));
        return cb.then((cb => {
          cb instanceof IDBCursor && Hb.set(cb, bb)
        })).catch((() => {})), nb.set(cb, bb), cb
      }(bb);
      if (Xb.has(bb)) return Xb.get(bb);
      const cb = Qb(bb);
      return cb !== bb && (Xb.set(bb, cb), nb.set(cb, bb)), cb
    }
    const Cb = bb => nb.get(bb);
    const Nb = ["get", "getKey", "getAll", "getAllKeys", "count"],
      Vb = ["put", "add", "delete", "clear"],
      Lb = new Map;

    function ub(bb, cb) {
      if (!(bb instanceof IDBDatabase) || cb in bb || "string" !== typeof cb) return;
      if (Lb.get(cb)) return Lb.get(cb);
      const sb = cb.replace(/FromIndex$/, ""),
        kb = cb !== sb,
        Wb = Vb.includes(sb);
      if (!(sb in (kb ? IDBIndex : IDBObjectStore).prototype) || !Wb && !Nb.includes(sb)) return;
      const ab = async function(bb) {
        const cb = this.transaction(bb, Wb ? "readwrite" : "readonly");
        let ab = cb.store;
        for (var Tb = arguments.length, Ub = new Array(Tb > 1 ? Tb - 1 : 0), Ib = 1; Ib < Tb; Ib++) Ub[Ib - 1] = arguments[Ib];
        return kb && (ab = ab.index(Ub.shift())), (await Promise.all([ab[sb](...Ub), Wb && cb.done]))[0]
      };
      return Lb.set(cb, ab), ab
    }
    mb = (bb => ({
      ...bb,
      get: (cb, sb, kb) => ub(cb, sb) || bb.get(cb, sb, kb),
      has: (cb, sb) => !!ub(cb, sb) || bb.has(cb, sb)
    }))(mb);
    const Yb = "@firebase/installations",
      hb = "0.6.4",
      Jb = 1e4,
      gb = `w:${hb}`,
      Bb = "FIS_v2",
      tb = 36e5,
      yb = {
        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
        "not-registered": "Firebase Installation is not registered.",
        "installation-not-found": "Firebase Installation not found.",
        "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        "app-offline": "Could not process request. Application offline.",
        "delete-pending-registration": "Can't delete installation while there is a pending registration request."
      },
      Pb = new ab.h("installations", "Installations", yb);

    function Db(bb) {
      return bb instanceof ab.k && bb.code.includes("request-failed")
    }

    function Eb(bb) {
      let {
        projectId: cb
      } = bb;
      return `https://firebaseinstallations.googleapis.com/v1/projects/${cb}/installations`
    }

    function ib(bb) {
      return {
        token: bb.token,
        requestStatus: 2,
        expiresIn: (cb = bb.expiresIn, Number(cb.replace("s", "000"))),
        creationTime: Date.now()
      };
      var cb
    }
    async function Ob(bb, cb) {
      const sb = (await cb.json()).error;
      return Pb.create("request-failed", {
        requestName: bb,
        serverCode: sb.code,
        serverMessage: sb.message,
        serverStatus: sb.status
      })
    }

    function Gb(bb) {
      let {
        apiKey: cb
      } = bb;
      return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": cb
      })
    }

    function Kb(bb, cb) {
      let {
        refreshToken: sb
      } = cb;
      const kb = Gb(bb);
      return kb.append("Authorization", function(bb) {
        return `${Bb} ${bb}`
      }(sb)), kb
    }
    async function Zb(bb) {
      const cb = await bb();
      return cb.status >= 500 && cb.status < 600 ? bb() : cb
    }

    function zb(bb) {
      return new Promise((cb => {
        setTimeout(cb, bb)
      }))
    }
    const qb = /^[cdef][\w-]{21}$/;

    function db() {
      try {
        const bb = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(bb), bb[0] = 112 + bb[0] % 16;
        const cb = function(bb) {
          const cb = (sb = bb, btoa(String.fromCharCode(...sb)).replace(/\+/g, "-").replace(/\//g, "_"));
          var sb;
          return cb.substr(0, 22)
        }(bb);
        return qb.test(cb) ? cb : ""
      } catch (bb) {
        return ""
      }
    }

    function Ab(bb) {
      return `${bb.appName}!${bb.appId}`
    }
    const wb = new Map;

    function rb(bb, cb) {
      const sb = Ab(bb);
      ob(sb, cb),
        function(bb, cb) {
          const sb = Rb();
          sb && sb.postMessage({
            key: bb,
            fid: cb
          });
          vb()
        }(sb, cb)
    }

    function ob(bb, cb) {
      const sb = wb.get(bb);
      if (sb)
        for (const kb of sb) kb(cb)
    }
    let Sb = null;

    function Rb() {
      return !Sb && "BroadcastChannel" in self && (Sb = new BroadcastChannel("[Firebase] FID Change"), Sb.onmessage = bb => {
        ob(bb.data.key, bb.data.fid)
      }), Sb
    }

    function vb() {
      0 === wb.size && Sb && (Sb.close(), Sb = null)
    }
    const Fb = "firebase-installations-store";
    let xb = null;

    function jb() {
      return xb || (xb = function(bb, cb) {
        let {
          blocked: sb,
          upgrade: kb,
          blocking: Wb,
          terminated: ab
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const Tb = indexedDB.open(bb, cb),
          Ub = eb(Tb);
        return kb && Tb.addEventListener("upgradeneeded", (bb => {
          kb(eb(Tb.result), bb.oldVersion, bb.newVersion, eb(Tb.transaction))
        })), sb && Tb.addEventListener("blocked", (() => sb())), Ub.then((bb => {
          ab && bb.addEventListener("close", (() => ab())), Wb && bb.addEventListener("versionchange", (() => Wb()))
        })).catch((() => {})), Ub
      }("firebase-installations-database", 1, {
        upgrade: (bb, cb) => {
          if (0 === cb) bb.createObjectStore(Fb)
        }
      })), xb
    }
    async function pb(bb, cb) {
      const sb = Ab(bb),
        kb = (await jb()).transaction(Fb, "readwrite"),
        Wb = kb.objectStore(Fb),
        ab = await Wb.get(sb);
      return await Wb.put(cb, sb), await kb.done, ab && ab.fid === cb.fid || rb(bb, cb.fid), cb
    }
    async function bc(bb) {
      const cb = Ab(bb),
        sb = (await jb()).transaction(Fb, "readwrite");
      await sb.objectStore(Fb).delete(cb), await sb.done
    }
    async function cc(bb, cb) {
      const sb = Ab(bb),
        kb = (await jb()).transaction(Fb, "readwrite"),
        Wb = kb.objectStore(Fb),
        ab = await Wb.get(sb),
        Tb = cb(ab);
      return void 0 === Tb ? await Wb.delete(sb) : await Wb.put(Tb, sb), await kb.done, !Tb || ab && ab.fid === Tb.fid || rb(bb, Tb.fid), Tb
    }
    async function sc(bb) {
      let cb;
      const sb = await cc(bb.appConfig, (sb => {
        const kb = function(bb) {
            const cb = bb || {
              fid: db(),
              registrationStatus: 0
            };
            return ac(cb)
          }(sb),
          Wb = function(bb, cb) {
            if (0 === cb.registrationStatus) {
              if (!navigator.onLine) {
                return {
                  installationEntry: cb,
                  registrationPromise: Promise.reject(Pb.create("app-offline"))
                }
              }
              const sb = {
                  fid: cb.fid,
                  registrationStatus: 1,
                  registrationTime: Date.now()
                },
                kb = async function(bb, cb) {
                  try {
                    const sb = await async function(bb, cb) {
                      let {
                        appConfig: sb,
                        heartbeatServiceProvider: kb
                      } = bb, {
                        fid: Wb
                      } = cb;
                      const ab = Eb(sb),
                        Tb = Gb(sb),
                        Ub = kb.getImmediate({
                          optional: !0
                        });
                      if (Ub) {
                        const bb = await Ub.getHeartbeatsHeader();
                        bb && Tb.append("x-firebase-client", bb)
                      }
                      const Ib = {
                          fid: Wb,
                          authVersion: Bb,
                          appId: sb.appId,
                          sdkVersion: gb
                        },
                        Hb = {
                          method: "POST",
                          headers: Tb,
                          body: JSON.stringify(Ib)
                        },
                        fb = await Zb((() => fetch(ab, Hb)));
                      if (fb.ok) {
                        const bb = await fb.json();
                        return {
                          fid: bb.fid || Wb,
                          registrationStatus: 2,
                          refreshToken: bb.refreshToken,
                          authToken: ib(bb.authToken)
                        }
                      }
                      throw await Ob("Create Installation", fb)
                    }(bb, cb);
                    return pb(bb.appConfig, sb)
                  } catch (sb) {
                    throw Db(sb) && 409 === sb.customData.serverCode ? await bc(bb.appConfig) : await pb(bb.appConfig, {
                      fid: cb.fid,
                      registrationStatus: 0
                    }), sb
                  }
                }(bb, sb);
              return {
                installationEntry: sb,
                registrationPromise: kb
              }
            }
            return 1 === cb.registrationStatus ? {
              installationEntry: cb,
              registrationPromise: kc(bb)
            } : {
              installationEntry: cb
            }
          }(bb, kb);
        return cb = Wb.registrationPromise, Wb.installationEntry
      }));
      return "" === sb.fid ? {
        installationEntry: await cb
      } : {
        installationEntry: sb,
        registrationPromise: cb
      }
    }
    async function kc(bb) {
      let cb = await Wc(bb.appConfig);
      for (; 1 === cb.registrationStatus;) await zb(100), cb = await Wc(bb.appConfig);
      if (0 === cb.registrationStatus) {
        const {
          installationEntry: cb,
          registrationPromise: sb
        } = await sc(bb);
        return sb || cb
      }
      return cb
    }

    function Wc(bb) {
      return cc(bb, (bb => {
        if (!bb) throw Pb.create("installation-not-found");
        return ac(bb)
      }))
    }

    function ac(bb) {
      return 1 === (cb = bb).registrationStatus && cb.registrationTime + Jb < Date.now() ? {
        fid: bb.fid,
        registrationStatus: 0
      } : bb;
      var cb
    }
    async function Tc(bb, cb) {
      let {
        appConfig: sb,
        heartbeatServiceProvider: kb
      } = bb;
      const Wb = function(bb, cb) {
          let {
            fid: sb
          } = cb;
          return `${Eb(bb)}/${sb}/authTokens:generate`
        }(sb, cb),
        ab = Kb(sb, cb),
        Tb = kb.getImmediate({
          optional: !0
        });
      if (Tb) {
        const bb = await Tb.getHeartbeatsHeader();
        bb && ab.append("x-firebase-client", bb)
      }
      const Ub = {
          installation: {
            sdkVersion: gb,
            appId: sb.appId
          }
        },
        Ib = {
          method: "POST",
          headers: ab,
          body: JSON.stringify(Ub)
        },
        Hb = await Zb((() => fetch(Wb, Ib)));
      if (Hb.ok) {
        return ib(await Hb.json())
      }
      throw await Ob("Generate Auth Token", Hb)
    }
    async function Uc(bb) {
      let cb, sb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const kb = await cc(bb.appConfig, (kb => {
        if (!Hc(kb)) throw Pb.create("not-registered");
        const Wb = kb.authToken;
        if (!sb && function(bb) {
            return 2 === bb.requestStatus && ! function(bb) {
              const cb = Date.now();
              return cb < bb.creationTime || bb.creationTime + bb.expiresIn < cb + tb
            }(bb)
          }(Wb)) return kb;
        if (1 === Wb.requestStatus) return cb = async function(bb, cb) {
          let sb = await Ic(bb.appConfig);
          for (; 1 === sb.authToken.requestStatus;) await zb(100), sb = await Ic(bb.appConfig);
          const kb = sb.authToken;
          return 0 === kb.requestStatus ? Uc(bb, cb) : kb
        }(bb, sb), kb;
        {
          if (!navigator.onLine) throw Pb.create("app-offline");
          const sb = function(bb) {
            const cb = {
              requestStatus: 1,
              requestTime: Date.now()
            };
            return Object.assign(Object.assign({}, bb), {
              authToken: cb
            })
          }(kb);
          return cb = async function(bb, cb) {
            try {
              const sb = await Tc(bb, cb),
                kb = Object.assign(Object.assign({}, cb), {
                  authToken: sb
                });
              return await pb(bb.appConfig, kb), sb
            } catch (sb) {
              if (!Db(sb) || 401 !== sb.customData.serverCode && 404 !== sb.customData.serverCode) {
                const sb = Object.assign(Object.assign({}, cb), {
                  authToken: {
                    requestStatus: 0
                  }
                });
                await pb(bb.appConfig, sb)
              } else await bc(bb.appConfig);
              throw sb
            }
          }(bb, sb), sb
        }
      }));
      return cb ? await cb : kb.authToken
    }

    function Ic(bb) {
      return cc(bb, (bb => {
        if (!Hc(bb)) throw Pb.create("not-registered");
        const cb = bb.authToken;
        return 1 === (sb = cb).requestStatus && sb.requestTime + Jb < Date.now() ? Object.assign(Object.assign({}, bb), {
          authToken: {
            requestStatus: 0
          }
        }) : bb;
        var sb
      }))
    }

    function Hc(bb) {
      return void 0 !== bb && 2 === bb.registrationStatus
    }
    async function fc(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const sb = bb;
      await async function(bb) {
        const {
          registrationPromise: cb
        } = await sc(bb);
        cb && await cb
      }(sb);
      return (await Uc(sb, cb)).token
    }

    function Mc(bb) {
      return Pb.create("missing-app-config-values", {
        valueName: bb
      })
    }
    const Xc = "installations",
      nc = bb => {
        const cb = bb.getProvider("app").getImmediate(),
          sb = function(bb) {
            if (!bb || !bb.options) throw Mc("App Configuration");
            if (!bb.name) throw Mc("App Name");
            const cb = ["projectId", "apiKey", "appId"];
            for (const sb of cb)
              if (!bb.options[sb]) throw Mc(sb);
            return {
              appName: bb.name,
              projectId: bb.options.projectId,
              apiKey: bb.options.apiKey,
              appId: bb.options.appId
            }
          }(cb);
        return {
          app: cb,
          appConfig: sb,
          heartbeatServiceProvider: (0, kb.A)(cb, "heartbeat"),
          _delete: () => Promise.resolve()
        }
      },
      mc = bb => {
        const cb = bb.getProvider("app").getImmediate(),
          sb = (0, kb.A)(cb, Xc).getImmediate();
        return {
          getId: () => async function(bb) {
            const cb = bb,
              {
                installationEntry: sb,
                registrationPromise: kb
              } = await sc(cb);
            return kb ? kb.catch(console.error) : Uc(cb).catch(console.error), sb.fid
          }(sb),
          getToken: bb => fc(sb, bb)
        }
      };
    (0, kb.B)(new Tb.i(Xc, nc, "PUBLIC")), (0, kb.B)(new Tb.i("installations-internal", mc, "PRIVATE")), (0, kb.R)(Yb, hb), (0, kb.R)(Yb, hb, "esm2017");
    const lc = "analytics",
      Qc = "https://www.googletagmanager.com/gtag/js",
      ec = new Wb.h("@firebase/analytics"),
      Cc = {
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
      Nc = new ab.h("analytics", "Analytics", Cc);

    function Vc(bb) {
      if (!bb.startsWith(Qc)) {
        const cb = Nc.create("invalid-gtag-resource", {
          gtagURL: bb
        });
        return ec.warn(cb.message), ""
      }
      return bb
    }

    function Lc(bb) {
      return Promise.all(bb.map((bb => bb.catch((bb => bb)))))
    }

    function uc(bb, cb) {
      const sb = function(bb, cb) {
          let sb;
          return window.trustedTypes && (sb = window.trustedTypes.createPolicy(bb, cb)), sb
        }("firebase-js-sdk-policy", {
          createScriptURL: Vc
        }),
        kb = document.createElement("script"),
        Wb = `${Qc}?l=${bb}&id=${cb}`;
      kb.src = sb ? null === sb || void 0 === sb ? void 0 : sb.createScriptURL(Wb) : Wb, kb.async = !0, document.head.appendChild(kb)
    }

    function Yc(bb, cb, sb, kb) {
      return async function(Wb) {
        try {
          for (var ab = arguments.length, Tb = new Array(ab > 1 ? ab - 1 : 0), Ub = 1; Ub < ab; Ub++) Tb[Ub - 1] = arguments[Ub];
          if ("event" === Wb) {
            const [kb, Wb] = Tb;
            await async function(bb, cb, sb, kb, Wb) {
              try {
                let ab = [];
                if (Wb && Wb.send_to) {
                  let bb = Wb.send_to;
                  Array.isArray(bb) || (bb = [bb]);
                  const kb = await Lc(sb);
                  for (const sb of bb) {
                    const bb = kb.find((bb => bb.measurementId === sb)),
                      Wb = bb && cb[bb.appId];
                    if (!Wb) {
                      ab = [];
                      break
                    }
                    ab.push(Wb)
                  }
                }
                0 === ab.length && (ab = Object.values(cb)), await Promise.all(ab), bb("event", kb, Wb || {})
              } catch (ab) {
                ec.error(ab)
              }
            }(bb, cb, sb, kb, Wb)
          } else if ("config" === Wb) {
            const [Wb, ab] = Tb;
            await async function(bb, cb, sb, kb, Wb, ab) {
              const Tb = kb[Wb];
              try {
                if (Tb) await cb[Tb];
                else {
                  const bb = (await Lc(sb)).find((bb => bb.measurementId === Wb));
                  bb && await cb[bb.appId]
                }
              } catch (Ub) {
                ec.error(Ub)
              }
              bb("config", Wb, ab)
            }(bb, cb, sb, kb, Wb, ab)
          } else if ("consent" === Wb) {
            const [cb] = Tb;
            bb("consent", "update", cb)
          } else if ("get" === Wb) {
            const [cb, sb, kb] = Tb;
            bb("get", cb, sb, kb)
          } else if ("set" === Wb) {
            const [cb] = Tb;
            bb("set", cb)
          } else bb(Wb, ...Tb)
        } catch (Ib) {
          ec.error(Ib)
        }
      }
    }
    const hc = new class {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
        this.throttleMetadata = bb, this.intervalMillis = cb
      }
      getThrottleMetadata(bb) {
        return this.throttleMetadata[bb]
      }
      setThrottleMetadata(bb, cb) {
        this.throttleMetadata[bb] = cb
      }
      deleteThrottleMetadata(bb) {
        delete this.throttleMetadata[bb]
      }
    };

    function Jc(bb) {
      return new Headers({
        Accept: "application/json",
        "x-goog-api-key": bb
      })
    }
    async function gc(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hc,
        sb = arguments.length > 2 ? arguments[2] : void 0;
      const {
        appId: kb,
        apiKey: Wb,
        measurementId: ab
      } = bb.options;
      if (!kb) throw Nc.create("no-app-id");
      if (!Wb) {
        if (ab) return {
          measurementId: ab,
          appId: kb
        };
        throw Nc.create("no-api-key")
      }
      const Tb = cb.getThrottleMetadata(kb) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        },
        Ub = new tc;
      return setTimeout((async () => {
        Ub.abort()
      }), void 0 !== sb ? sb : 6e4), Bc({
        appId: kb,
        apiKey: Wb,
        measurementId: ab
      }, Tb, Ub, cb)
    }
    async function Bc(bb, cb, sb) {
      let {
        throttleEndTimeMillis: kb,
        backoffCount: Wb
      } = cb, Tb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : hc;
      var Ub;
      const {
        appId: Ib,
        measurementId: Hb
      } = bb;
      try {
        await
        function(bb, cb) {
          return new Promise(((sb, kb) => {
            const Wb = Math.max(cb - Date.now(), 0),
              ab = setTimeout(sb, Wb);
            bb.addEventListener((() => {
              clearTimeout(ab), kb(Nc.create("fetch-throttle", {
                throttleEndTimeMillis: cb
              }))
            }))
          }))
        }(sb, kb)
      } catch (fb) {
        if (Hb) return ec.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${Hb} provided in the "measurementId" field in the local Firebase config. [${null===fb||void 0===fb?void 0:fb.message}]`), {
          appId: Ib,
          measurementId: Hb
        };
        throw fb
      }
      try {
        const cb = await async function(bb) {
          var cb;
          const {
            appId: sb,
            apiKey: kb
          } = bb, Wb = {
            method: "GET",
            headers: Jc(kb)
          }, ab = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", sb), Tb = await fetch(ab, Wb);
          if (200 !== Tb.status && 304 !== Tb.status) {
            let bb = "";
            try {
              const sb = await Tb.json();
              (null === (cb = sb.error) || void 0 === cb ? void 0 : cb.message) && (bb = sb.error.message)
            } catch (Ub) {}
            throw Nc.create("config-fetch-failed", {
              httpStatus: Tb.status,
              responseMessage: bb
            })
          }
          return Tb.json()
        }(bb);
        return Tb.deleteThrottleMetadata(Ib), cb
      } catch (fb) {
        const cb = fb;
        if (! function(bb) {
            if (!(bb instanceof ab.k) || !bb.customData) return !1;
            const cb = Number(bb.customData.httpStatus);
            return 429 === cb || 500 === cb || 503 === cb || 504 === cb
          }(cb)) {
          if (Tb.deleteThrottleMetadata(Ib), Hb) return ec.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${Hb} provided in the "measurementId" field in the local Firebase config. [${null===cb||void 0===cb?void 0:cb.message}]`), {
            appId: Ib,
            measurementId: Hb
          };
          throw fb
        }
        const kb = 503 === Number(null === (Ub = null === cb || void 0 === cb ? void 0 : cb.customData) || void 0 === Ub ? void 0 : Ub.httpStatus) ? (0, ab.q)(Wb, Tb.intervalMillis, 30) : (0, ab.q)(Wb, Tb.intervalMillis),
          Mb = {
            throttleEndTimeMillis: Date.now() + kb,
            backoffCount: Wb + 1
          };
        return Tb.setThrottleMetadata(Ib, Mb), ec.debug(`Calling attemptFetch again in ${kb} millis`), Bc(bb, Mb, sb, Tb)
      }
    }
    class tc {
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
    let yc, Pc;

    function Dc(bb) {
      Pc = bb
    }

    function Ec(bb) {
      yc = bb
    }
    async function ic(bb, cb, sb, kb, Wb, Tb, Ub) {
      var Ib;
      const Hb = gc(bb);
      Hb.then((cb => {
        sb[cb.measurementId] = cb.appId, bb.options.measurementId && cb.measurementId !== bb.options.measurementId && ec.warn(`The measurement ID in the local Firebase config (${bb.options.measurementId}) does not match the measurement ID fetched from the server (${cb.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
      })).catch((bb => ec.error(bb))), cb.push(Hb);
      const fb = async function() {
        if (!(0, ab.Q)()) return ec.warn(Nc.create("indexeddb-unavailable", {
          errorInfo: "IndexedDB is not available in this environment."
        }).message), !1;
        try {
          await (0, ab.ab)()
        } catch (bb) {
          return ec.warn(Nc.create("indexeddb-unavailable", {
            errorInfo: null === bb || void 0 === bb ? void 0 : bb.toString()
          }).message), !1
        }
        return !0
      }().then((bb => bb ? kb.getId() : void 0)), [Mb, Xb] = await Promise.all([Hb, fb]);
      (function(bb) {
        const cb = window.document.getElementsByTagName("script");
        for (const sb of Object.values(cb))
          if (sb.src && sb.src.includes(Qc) && sb.src.includes(bb)) return sb;
        return null
      })(Tb) || uc(Tb, Mb.measurementId), Pc && (Wb("consent", "default", Pc), Dc(void 0)), Wb("js", new Date);
      const nb = null !== (Ib = null === Ub || void 0 === Ub ? void 0 : Ub.config) && void 0 !== Ib ? Ib : {};
      return nb.origin = "firebase", nb.update = !0, null != Xb && (nb.firebase_id = Xb), Wb("config", Mb.measurementId, nb), yc && (Wb("set", yc), Ec(void 0)), Mb.measurementId
    }
    class Oc {
      constructor(bb) {
        this.app = bb
      }
      _delete() {
        return delete Gc[this.app.options.appId], Promise.resolve()
      }
    }
    let Gc = {},
      Kc = [];
    const Zc = {};
    let zc, qc, dc = "dataLayer",
      Ac = "gtag",
      wc = !1;

    function rc(bb) {
      if (wc) throw Nc.create("already-initialized");
      bb.dataLayerName && (dc = bb.dataLayerName), bb.gtagName && (Ac = bb.gtagName)
    }

    function oc(bb, cb, sb) {
      ! function() {
        const bb = [];
        if ((0, ab.G)() && bb.push("This is a browser extension environment."), (0, ab.m)() || bb.push("Cookies are not available."), bb.length > 0) {
          const cb = bb.map(((bb, cb) => `(${cb+1}) ${bb}`)).join(" "),
            sb = Nc.create("invalid-analytics-context", {
              errorInfo: cb
            });
          ec.warn(sb.message)
        }
      }();
      const kb = bb.options.appId;
      if (!kb) throw Nc.create("no-app-id");
      if (!bb.options.apiKey) {
        if (!bb.options.measurementId) throw Nc.create("no-api-key");
        ec.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${bb.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
      }
      if (null != Gc[kb]) throw Nc.create("already-exists", {
        id: kb
      });
      if (!wc) {
        ! function(bb) {
          let cb = [];
          Array.isArray(window[bb]) ? cb = window[bb] : window[bb] = cb
        }(dc);
        const {
          wrappedGtag: bb,
          gtagCore: cb
        } = function(bb, cb, sb, kb, Wb) {
          let ab = function() {
            for (var bb = arguments.length, cb = new Array(bb), sb = 0; sb < bb; sb++) cb[sb] = arguments[sb];
            window[kb].push(arguments)
          };
          return window[Wb] && "function" === typeof window[Wb] && (ab = window[Wb]), window[Wb] = Yc(ab, bb, cb, sb), {
            gtagCore: ab,
            wrappedGtag: window[Wb]
          }
        }(Gc, Kc, Zc, dc, Ac);
        qc = bb, zc = cb, wc = !0
      }
      Gc[kb] = ic(bb, Kc, Zc, cb, zc, dc, sb);
      return new Oc(bb)
    }

    function Sc() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, kb.M)();
      bb = (0, ab.E)(bb);
      const cb = (0, kb.A)(bb, lc);
      return cb.isInitialized() ? cb.getImmediate() : Rc(bb)
    }

    function Rc(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const sb = (0, kb.A)(bb, lc);
      if (sb.isInitialized()) {
        const bb = sb.getImmediate();
        if ((0, ab.t)(cb, sb.getOptions())) return bb;
        throw Nc.create("already-initialized")
      }
      return sb.initialize({
        options: cb
      })
    }
    async function vc() {
      if ((0, ab.G)()) return !1;
      if (!(0, ab.m)()) return !1;
      if (!(0, ab.Q)()) return !1;
      try {
        return await (0, ab.ab)()
      } catch (bb) {
        return !1
      }
    }

    function Fc(bb, cb, sb) {
      bb = (0, ab.E)(bb), async function(bb, cb, sb, kb) {
        if (kb && kb.global) return bb("set", {
          screen_name: sb
        }), Promise.resolve();
        bb("config", await cb, {
          update: !0,
          screen_name: sb
        })
      }(qc, Gc[bb.app.options.appId], cb, sb).catch((bb => ec.error(bb)))
    }
    async function xc(bb) {
      return bb = (0, ab.E)(bb), async function(bb, cb) {
        const sb = await cb;
        return new Promise(((cb, kb) => {
          bb("get", sb, "client_id", (bb => {
            bb || kb(Nc.create("no-client-id")), cb(bb)
          }))
        }))
      }(qc, Gc[bb.app.options.appId])
    }

    function jc(bb, cb, sb) {
      bb = (0, ab.E)(bb), async function(bb, cb, sb, kb) {
        if (kb && kb.global) return bb("set", {
          user_id: sb
        }), Promise.resolve();
        bb("config", await cb, {
          update: !0,
          user_id: sb
        })
      }(qc, Gc[bb.app.options.appId], cb, sb).catch((bb => ec.error(bb)))
    }

    function pc(bb, cb, sb) {
      bb = (0, ab.E)(bb), async function(bb, cb, sb, kb) {
        if (kb && kb.global) {
          const cb = {};
          for (const bb of Object.keys(sb)) cb[`user_properties.${bb}`] = sb[bb];
          return bb("set", cb), Promise.resolve()
        }
        bb("config", await cb, {
          update: !0,
          user_properties: sb
        })
      }(qc, Gc[bb.app.options.appId], cb, sb).catch((bb => ec.error(bb)))
    }

    function bs(bb, cb) {
      bb = (0, ab.E)(bb), async function(bb, cb) {
        const sb = await bb;
        window[`ga-disable-${sb}`] = !cb
      }(Gc[bb.app.options.appId], cb).catch((bb => ec.error(bb)))
    }

    function cs(bb) {
      qc ? qc("set", bb) : Ec(bb)
    }

    function ss(bb, cb, sb, kb) {
      bb = (0, ab.E)(bb), async function(bb, cb, sb, kb, Wb) {
        if (Wb && Wb.global) bb("event", sb, kb);
        else {
          const Wb = await cb;
          bb("event", sb, Object.assign(Object.assign({}, kb), {
            send_to: Wb
          }))
        }
      }(qc, Gc[bb.app.options.appId], cb, sb, kb).catch((bb => ec.error(bb)))
    }

    function ks(bb) {
      qc ? qc("consent", "update", bb) : Dc(bb)
    }
    const Ws = "@firebase/analytics",
      as = "0.10.0";
    (0, kb.B)(new Tb.i(lc, ((bb, cb) => {
      let {
        options: sb
      } = cb;
      return oc(bb.getProvider("app").getImmediate(), bb.getProvider("installations-internal").getImmediate(), sb)
    }), "PUBLIC")), (0, kb.B)(new Tb.i("analytics-internal", (function(bb) {
      try {
        const cb = bb.getProvider(lc).getImmediate();
        return {
          logEvent: (bb, sb, kb) => ss(cb, bb, sb, kb)
        }
      } catch (cb) {
        throw Nc.create("interop-component-reg-failed", {
          reason: cb
        })
      }
    }), "PRIVATE")), (0, kb.R)(Ws, as), (0, kb.R)(Ws, as, "esm2017")
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);