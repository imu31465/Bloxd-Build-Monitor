/*! For license information please see sn3sfj.271.47f11aee.chunk.js.LICENSE.txt */
export const id = 271;
export const ids = [271];
export const modules = {
  40713: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      getAnalytics: () => zi,
      getGoogleAnalyticsClientId: () => pc,
      initializeAnalytics: () => si,
      isSupported: () => Ki,
      logEvent: () => Ic,
      setAnalyticsCollectionEnabled: () => Oc,
      setConsent: () => Sc,
      setCurrentScreen: () => Vi,
      setDefaultEventParameters: () => oc,
      setUserId: () => ic,
      setUserProperties: () => cc,
      settings: () => ri
    });
    var Op = cp(40687),
      op = cp(40704),
      Ip = cp(40700),
      Sp = cp(40692);
    let xp, Lp;
    const Yp = new WeakMap,
      Dp = new WeakMap,
      Ap = new WeakMap,
      Pp = new WeakMap,
      Wp = new WeakMap;
    let yp = {
      get(pp, ip, cp) {
        if (pp instanceof IDBTransaction) {
          if ("done" === ip) return Dp.get(pp);
          if ("objectStoreNames" === ip) return pp.objectStoreNames || Ap.get(pp);
          if ("store" === ip) return cp.objectStoreNames[1] ? void 0 : cp.objectStore(cp.objectStoreNames[0])
        }
        return vp(pp[ip])
      },
      set: (pp, ip, cp) => (pp[ip] = cp, !0),
      has: (pp, ip) => pp instanceof IDBTransaction && ("done" === ip || "store" === ip) || ip in pp
    };

    function Up(pp) {
      return pp !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (Lp || (Lp = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(pp) ? function() {
        for (var ip = arguments.length, cp = new Array(ip), Op = 0; Op < ip; Op++) cp[Op] = arguments[Op];
        return pp.apply(tp(this), cp), vp(Yp.get(this))
      } : function() {
        for (var ip = arguments.length, cp = new Array(ip), Op = 0; Op < ip; Op++) cp[Op] = arguments[Op];
        return vp(pp.apply(tp(this), cp))
      } : function(ip) {
        for (var cp = arguments.length, Op = new Array(cp > 1 ? cp - 1 : 0), op = 1; op < cp; op++) Op[op - 1] = arguments[op];
        const Ip = pp.call(tp(this), ip, ...Op);
        return Ap.set(Ip, ip.sort ? ip.sort() : [ip]), vp(Ip)
      }
    }

    function wp(pp) {
      return "function" === typeof pp ? Up(pp) : (pp instanceof IDBTransaction && function(pp) {
        if (Dp.has(pp)) return;
        const ip = new Promise(((ip, cp) => {
          const Op = () => {
              pp.removeEventListener("complete", op), pp.removeEventListener("error", Ip), pp.removeEventListener("abort", Ip)
            },
            op = () => {
              ip(), Op()
            },
            Ip = () => {
              cp(pp.error || new DOMException("AbortError", "AbortError")), Op()
            };
          pp.addEventListener("complete", op), pp.addEventListener("error", Ip), pp.addEventListener("abort", Ip)
        }));
        Dp.set(pp, ip)
      }(pp), ip = pp, (xp || (xp = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((pp => ip instanceof pp)) ? new Proxy(pp, yp) : pp);
      var ip
    }

    function vp(pp) {
      if (pp instanceof IDBRequest) return function(pp) {
        const ip = new Promise(((ip, cp) => {
          const Op = () => {
              pp.removeEventListener("success", op), pp.removeEventListener("error", Ip)
            },
            op = () => {
              ip(vp(pp.result)), Op()
            },
            Ip = () => {
              cp(pp.error), Op()
            };
          pp.addEventListener("success", op), pp.addEventListener("error", Ip)
        }));
        return ip.then((ip => {
          ip instanceof IDBCursor && Yp.set(ip, pp)
        })).catch((() => {})), Wp.set(ip, pp), ip
      }(pp);
      if (Pp.has(pp)) return Pp.get(pp);
      const ip = wp(pp);
      return ip !== pp && (Pp.set(pp, ip), Wp.set(ip, pp)), ip
    }
    const tp = pp => Wp.get(pp);
    const Hp = ["get", "getKey", "getAll", "getAllKeys", "count"],
      dp = ["put", "add", "delete", "clear"],
      ep = new Map;

    function jp(pp, ip) {
      if (!(pp instanceof IDBDatabase) || ip in pp || "string" !== typeof ip) return;
      if (ep.get(ip)) return ep.get(ip);
      const cp = ip.replace(/FromIndex$/, ""),
        Op = ip !== cp,
        op = dp.includes(cp);
      if (!(cp in (Op ? IDBIndex : IDBObjectStore).prototype) || !op && !Hp.includes(cp)) return;
      const Ip = async function(pp) {
        const ip = this.transaction(pp, op ? "readwrite" : "readonly");
        let Ip = ip.store;
        for (var Sp = arguments.length, xp = new Array(Sp > 1 ? Sp - 1 : 0), Lp = 1; Lp < Sp; Lp++) xp[Lp - 1] = arguments[Lp];
        return Op && (Ip = Ip.index(xp.shift())), (await Promise.all([Ip[cp](...xp), op && ip.done]))[0]
      };
      return ep.set(ip, Ip), Ip
    }
    yp = (pp => ({
      ...pp,
      get: (ip, cp, Op) => jp(ip, cp) || pp.get(ip, cp, Op),
      has: (ip, cp) => !!jp(ip, cp) || pp.has(ip, cp)
    }))(yp);
    const kp = "@firebase/installations",
      mp = "0.6.4",
      Rp = 1e4,
      qp = `w:${mp}`,
      Mp = "FIS_v2",
      Cp = 36e5,
      Ep = {
        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
        "not-registered": "Firebase Installation is not registered.",
        "installation-not-found": "Firebase Installation not found.",
        "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        "app-offline": "Could not process request. Application offline.",
        "delete-pending-registration": "Can't delete installation while there is a pending registration request."
      },
      Xp = new Ip.i("installations", "Installations", Ep);

    function lp(pp) {
      return pp instanceof Ip.l && pp.code.includes("request-failed")
    }

    function Qp(pp) {
      let {
        projectId: ip
      } = pp;
      return `https://firebaseinstallations.googleapis.com/v1/projects/${ip}/installations`
    }

    function Jp(pp) {
      return {
        token: pp.token,
        requestStatus: 2,
        expiresIn: (ip = pp.expiresIn, Number(ip.replace("s", "000"))),
        creationTime: Date.now()
      };
      var ip
    }
    async function Bp(pp, ip) {
      const cp = (await ip.json()).error;
      return Xp.create("request-failed", {
        requestName: pp,
        serverCode: cp.code,
        serverMessage: cp.message,
        serverStatus: cp.status
      })
    }

    function Np(pp) {
      let {
        apiKey: ip
      } = pp;
      return new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-goog-api-key": ip
      })
    }

    function Tp(pp, ip) {
      let {
        refreshToken: cp
      } = ip;
      const Op = Np(pp);
      return Op.append("Authorization", function(pp) {
        return `${Mp} ${pp}`
      }(cp)), Op
    }
    async function fp(pp) {
      const ip = await pp();
      return ip.status >= 500 && ip.status < 600 ? pp() : ip
    }

    function bp(pp) {
      return new Promise((ip => {
        setTimeout(ip, pp)
      }))
    }
    const hp = /^[cdef][\w-]{21}$/;

    function ap() {
      try {
        const pp = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(pp), pp[0] = 112 + pp[0] % 16;
        const ip = function(pp) {
          const ip = (cp = pp, btoa(String.fromCharCode(...cp)).replace(/\+/g, "-").replace(/\//g, "_"));
          var cp;
          return ip.substr(0, 22)
        }(pp);
        return hp.test(ip) ? ip : ""
      } catch (pp) {
        return ""
      }
    }

    function np(pp) {
      return `${pp.appName}!${pp.appId}`
    }
    const Fp = new Map;

    function gp(pp, ip) {
      const cp = np(pp);
      Gp(cp, ip),
        function(pp, ip) {
          const cp = Zp();
          cp && cp.postMessage({
            key: pp,
            fid: ip
          });
          zp()
        }(cp, ip)
    }

    function Gp(pp, ip) {
      const cp = Fp.get(pp);
      if (cp)
        for (const Op of cp) Op(ip)
    }
    let rp = null;

    function Zp() {
      return !rp && "BroadcastChannel" in self && (rp = new BroadcastChannel("[Firebase] FID Change"), rp.onmessage = pp => {
        Gp(pp.data.key, pp.data.fid)
      }), rp
    }

    function zp() {
      0 === Fp.size && rp && (rp.close(), rp = null)
    }
    const sp = "firebase-installations-store";
    let Kp = null;

    function Vp() {
      return Kp || (Kp = function(pp, ip) {
        let {
          blocked: cp,
          upgrade: Op,
          blocking: op,
          terminated: Ip
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const Sp = indexedDB.open(pp, ip),
          xp = vp(Sp);
        return Op && Sp.addEventListener("upgradeneeded", (pp => {
          Op(vp(Sp.result), pp.oldVersion, pp.newVersion, vp(Sp.transaction))
        })), cp && Sp.addEventListener("blocked", (() => cp())), xp.then((pp => {
          Ip && pp.addEventListener("close", (() => Ip())), op && pp.addEventListener("versionchange", (() => op()))
        })).catch((() => {})), xp
      }("firebase-installations-database", 1, {
        upgrade: (pp, ip) => {
          if (0 === ip) pp.createObjectStore(sp)
        }
      })), Kp
    }
    async function ii(pp, ip) {
      const cp = np(pp),
        Op = (await Vp()).transaction(sp, "readwrite"),
        op = Op.objectStore(sp),
        Ip = await op.get(cp);
      return await op.put(ip, cp), await Op.done, Ip && Ip.fid === ip.fid || gp(pp, ip.fid), ip
    }
    async function ci(pp) {
      const ip = np(pp),
        cp = (await Vp()).transaction(sp, "readwrite");
      await cp.objectStore(sp).delete(ip), await cp.done
    }
    async function Oi(pp, ip) {
      const cp = np(pp),
        Op = (await Vp()).transaction(sp, "readwrite"),
        op = Op.objectStore(sp),
        Ip = await op.get(cp),
        Sp = ip(Ip);
      return void 0 === Sp ? await op.delete(cp) : await op.put(Sp, cp), await Op.done, !Sp || Ip && Ip.fid === Sp.fid || gp(pp, Sp.fid), Sp
    }
    async function oi(pp) {
      let ip;
      const cp = await Oi(pp.appConfig, (cp => {
        const Op = function(pp) {
            const ip = pp || {
              fid: ap(),
              registrationStatus: 0
            };
            return xi(ip)
          }(cp),
          op = function(pp, ip) {
            if (0 === ip.registrationStatus) {
              if (!navigator.onLine) {
                return {
                  installationEntry: ip,
                  registrationPromise: Promise.reject(Xp.create("app-offline"))
                }
              }
              const cp = {
                  fid: ip.fid,
                  registrationStatus: 1,
                  registrationTime: Date.now()
                },
                Op = async function(pp, ip) {
                  try {
                    const cp = await async function(pp, ip) {
                      let {
                        appConfig: cp,
                        heartbeatServiceProvider: Op
                      } = pp, {
                        fid: op
                      } = ip;
                      const Ip = Qp(cp),
                        Sp = Np(cp),
                        xp = Op.getImmediate({
                          optional: !0
                        });
                      if (xp) {
                        const pp = await xp.getHeartbeatsHeader();
                        pp && Sp.append("x-firebase-client", pp)
                      }
                      const Lp = {
                          fid: op,
                          authVersion: Mp,
                          appId: cp.appId,
                          sdkVersion: qp
                        },
                        Yp = {
                          method: "POST",
                          headers: Sp,
                          body: JSON.stringify(Lp)
                        },
                        Dp = await fp((() => fetch(Ip, Yp)));
                      if (Dp.ok) {
                        const pp = await Dp.json();
                        return {
                          fid: pp.fid || op,
                          registrationStatus: 2,
                          refreshToken: pp.refreshToken,
                          authToken: Jp(pp.authToken)
                        }
                      }
                      throw await Bp("Create Installation", Dp)
                    }(pp, ip);
                    return ii(pp.appConfig, cp)
                  } catch (cp) {
                    throw lp(cp) && 409 === cp.customData.serverCode ? await ci(pp.appConfig) : await ii(pp.appConfig, {
                      fid: ip.fid,
                      registrationStatus: 0
                    }), cp
                  }
                }(pp, cp);
              return {
                installationEntry: cp,
                registrationPromise: Op
              }
            }
            return 1 === ip.registrationStatus ? {
              installationEntry: ip,
              registrationPromise: Ii(pp)
            } : {
              installationEntry: ip
            }
          }(pp, Op);
        return ip = op.registrationPromise, op.installationEntry
      }));
      return "" === cp.fid ? {
        installationEntry: await ip
      } : {
        installationEntry: cp,
        registrationPromise: ip
      }
    }
    async function Ii(pp) {
      let ip = await Si(pp.appConfig);
      for (; 1 === ip.registrationStatus;) await bp(100), ip = await Si(pp.appConfig);
      if (0 === ip.registrationStatus) {
        const {
          installationEntry: ip,
          registrationPromise: cp
        } = await oi(pp);
        return cp || ip
      }
      return ip
    }

    function Si(pp) {
      return Oi(pp, (pp => {
        if (!pp) throw Xp.create("installation-not-found");
        return xi(pp)
      }))
    }

    function xi(pp) {
      return 1 === (ip = pp).registrationStatus && ip.registrationTime + Rp < Date.now() ? {
        fid: pp.fid,
        registrationStatus: 0
      } : pp;
      var ip
    }
    async function Li(pp, ip) {
      let {
        appConfig: cp,
        heartbeatServiceProvider: Op
      } = pp;
      const op = function(pp, ip) {
          let {
            fid: cp
          } = ip;
          return `${Qp(pp)}/${cp}/authTokens:generate`
        }(cp, ip),
        Ip = Tp(cp, ip),
        Sp = Op.getImmediate({
          optional: !0
        });
      if (Sp) {
        const pp = await Sp.getHeartbeatsHeader();
        pp && Ip.append("x-firebase-client", pp)
      }
      const xp = {
          installation: {
            sdkVersion: qp,
            appId: cp.appId
          }
        },
        Lp = {
          method: "POST",
          headers: Ip,
          body: JSON.stringify(xp)
        },
        Yp = await fp((() => fetch(op, Lp)));
      if (Yp.ok) {
        return Jp(await Yp.json())
      }
      throw await Bp("Generate Auth Token", Yp)
    }
    async function Yi(pp) {
      let ip, cp = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const Op = await Oi(pp.appConfig, (Op => {
        if (!Ai(Op)) throw Xp.create("not-registered");
        const op = Op.authToken;
        if (!cp && function(pp) {
            return 2 === pp.requestStatus && ! function(pp) {
              const ip = Date.now();
              return ip < pp.creationTime || pp.creationTime + pp.expiresIn < ip + Cp
            }(pp)
          }(op)) return Op;
        if (1 === op.requestStatus) return ip = async function(pp, ip) {
          let cp = await Di(pp.appConfig);
          for (; 1 === cp.authToken.requestStatus;) await bp(100), cp = await Di(pp.appConfig);
          const Op = cp.authToken;
          return 0 === Op.requestStatus ? Yi(pp, ip) : Op
        }(pp, cp), Op;
        {
          if (!navigator.onLine) throw Xp.create("app-offline");
          const cp = function(pp) {
            const ip = {
              requestStatus: 1,
              requestTime: Date.now()
            };
            return Object.assign(Object.assign({}, pp), {
              authToken: ip
            })
          }(Op);
          return ip = async function(pp, ip) {
            try {
              const cp = await Li(pp, ip),
                Op = Object.assign(Object.assign({}, ip), {
                  authToken: cp
                });
              return await ii(pp.appConfig, Op), cp
            } catch (cp) {
              if (!lp(cp) || 401 !== cp.customData.serverCode && 404 !== cp.customData.serverCode) {
                const cp = Object.assign(Object.assign({}, ip), {
                  authToken: {
                    requestStatus: 0
                  }
                });
                await ii(pp.appConfig, cp)
              } else await ci(pp.appConfig);
              throw cp
            }
          }(pp, cp), cp
        }
      }));
      return ip ? await ip : Op.authToken
    }

    function Di(pp) {
      return Oi(pp, (pp => {
        if (!Ai(pp)) throw Xp.create("not-registered");
        const ip = pp.authToken;
        return 1 === (cp = ip).requestStatus && cp.requestTime + Rp < Date.now() ? Object.assign(Object.assign({}, pp), {
          authToken: {
            requestStatus: 0
          }
        }) : pp;
        var cp
      }))
    }

    function Ai(pp) {
      return void 0 !== pp && 2 === pp.registrationStatus
    }
    async function Pi(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const cp = pp;
      await async function(pp) {
        const {
          registrationPromise: ip
        } = await oi(pp);
        ip && await ip
      }(cp);
      return (await Yi(cp, ip)).token
    }

    function Wi(pp) {
      return Xp.create("missing-app-config-values", {
        valueName: pp
      })
    }
    const yi = "installations",
      Ui = pp => {
        const ip = pp.getProvider("app").getImmediate(),
          cp = function(pp) {
            if (!pp || !pp.options) throw Wi("App Configuration");
            if (!pp.name) throw Wi("App Name");
            const ip = ["projectId", "apiKey", "appId"];
            for (const cp of ip)
              if (!pp.options[cp]) throw Wi(cp);
            return {
              appName: pp.name,
              projectId: pp.options.projectId,
              apiKey: pp.options.apiKey,
              appId: pp.options.appId
            }
          }(ip);
        return {
          app: ip,
          appConfig: cp,
          heartbeatServiceProvider: (0, Op.x)(ip, "heartbeat"),
          _delete: () => Promise.resolve()
        }
      },
      wi = pp => {
        const ip = pp.getProvider("app").getImmediate(),
          cp = (0, Op.x)(ip, yi).getImmediate();
        return {
          getId: () => async function(pp) {
            const ip = pp,
              {
                installationEntry: cp,
                registrationPromise: Op
              } = await oi(ip);
            return Op ? Op.catch(console.error) : Yi(ip).catch(console.error), cp.fid
          }(cp),
          getToken: pp => Pi(cp, pp)
        }
      };
    (0, Op.z)(new Sp.d(yi, Ui, "PUBLIC")), (0, Op.z)(new Sp.d("installations-internal", wi, "PRIVATE")), (0, Op.S)(kp, mp), (0, Op.S)(kp, mp, "esm2017");
    const vi = "analytics",
      ti = "https://www.googletagmanager.com/gtag/js",
      Hi = new op.d("@firebase/analytics"),
      di = {
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
      ei = new Ip.i("analytics", "Analytics", di);

    function ui(pp) {
      if (!pp.startsWith(ti)) {
        const ip = ei.create("invalid-gtag-resource", {
          gtagURL: pp
        });
        return Hi.warn(ip.message), ""
      }
      return pp
    }

    function ji(pp) {
      return Promise.all(pp.map((pp => pp.catch((pp => pp)))))
    }

    function ki(pp, ip) {
      const cp = function(pp, ip) {
          let cp;
          return window.trustedTypes && (cp = window.trustedTypes.createPolicy(pp, ip)), cp
        }("firebase-js-sdk-policy", {
          createScriptURL: ui
        }),
        Op = document.createElement("script"),
        op = `${ti}?l=${pp}&id=${ip}`;
      Op.src = cp ? null === cp || void 0 === cp ? void 0 : cp.createScriptURL(op) : op, Op.async = !0, document.head.appendChild(Op)
    }

    function mi(pp, ip, cp, Op) {
      return async function(op) {
        try {
          for (var Ip = arguments.length, Sp = new Array(Ip > 1 ? Ip - 1 : 0), xp = 1; xp < Ip; xp++) Sp[xp - 1] = arguments[xp];
          if ("event" === op) {
            const [Op, op] = Sp;
            await async function(pp, ip, cp, Op, op) {
              try {
                let Ip = [];
                if (op && op.send_to) {
                  let pp = op.send_to;
                  Array.isArray(pp) || (pp = [pp]);
                  const Op = await ji(cp);
                  for (const cp of pp) {
                    const pp = Op.find((pp => pp.measurementId === cp)),
                      op = pp && ip[pp.appId];
                    if (!op) {
                      Ip = [];
                      break
                    }
                    Ip.push(op)
                  }
                }
                0 === Ip.length && (Ip = Object.values(ip)), await Promise.all(Ip), pp("event", Op, op || {})
              } catch (Ip) {
                Hi.error(Ip)
              }
            }(pp, ip, cp, Op, op)
          } else if ("config" === op) {
            const [op, Ip] = Sp;
            await async function(pp, ip, cp, Op, op, Ip) {
              const Sp = Op[op];
              try {
                if (Sp) await ip[Sp];
                else {
                  const pp = (await ji(cp)).find((pp => pp.measurementId === op));
                  pp && await ip[pp.appId]
                }
              } catch (xp) {
                Hi.error(xp)
              }
              pp("config", op, Ip)
            }(pp, ip, cp, Op, op, Ip)
          } else if ("consent" === op) {
            const [ip] = Sp;
            pp("consent", "update", ip)
          } else if ("get" === op) {
            const [ip, cp, Op] = Sp;
            pp("get", ip, cp, Op)
          } else if ("set" === op) {
            const [ip] = Sp;
            pp("set", ip)
          } else pp(op, ...Sp)
        } catch (Lp) {
          Hi.error(Lp)
        }
      }
    }
    const Ri = new class {
      constructor() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
        this.throttleMetadata = pp, this.intervalMillis = ip
      }
      getThrottleMetadata(pp) {
        return this.throttleMetadata[pp]
      }
      setThrottleMetadata(pp, ip) {
        this.throttleMetadata[pp] = ip
      }
      deleteThrottleMetadata(pp) {
        delete this.throttleMetadata[pp]
      }
    };

    function qi(pp) {
      return new Headers({
        Accept: "application/json",
        "x-goog-api-key": pp
      })
    }
    async function Mi(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ri,
        cp = arguments.length > 2 ? arguments[2] : void 0;
      const {
        appId: Op,
        apiKey: op,
        measurementId: Ip
      } = pp.options;
      if (!Op) throw ei.create("no-app-id");
      if (!op) {
        if (Ip) return {
          measurementId: Ip,
          appId: Op
        };
        throw ei.create("no-api-key")
      }
      const Sp = ip.getThrottleMetadata(Op) || {
          backoffCount: 0,
          throttleEndTimeMillis: Date.now()
        },
        xp = new Ei;
      return setTimeout((async () => {
        xp.abort()
      }), void 0 !== cp ? cp : 6e4), Ci({
        appId: Op,
        apiKey: op,
        measurementId: Ip
      }, Sp, xp, ip)
    }
    async function Ci(pp, ip, cp) {
      let {
        throttleEndTimeMillis: Op,
        backoffCount: op
      } = ip, Sp = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ri;
      var xp;
      const {
        appId: Lp,
        measurementId: Yp
      } = pp;
      try {
        await
        function(pp, ip) {
          return new Promise(((cp, Op) => {
            const op = Math.max(ip - Date.now(), 0),
              Ip = setTimeout(cp, op);
            pp.addEventListener((() => {
              clearTimeout(Ip), Op(ei.create("fetch-throttle", {
                throttleEndTimeMillis: ip
              }))
            }))
          }))
        }(cp, Op)
      } catch (Dp) {
        if (Yp) return Hi.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${Yp} provided in the "measurementId" field in the local Firebase config. [${null===Dp||void 0===Dp?void 0:Dp.message}]`), {
          appId: Lp,
          measurementId: Yp
        };
        throw Dp
      }
      try {
        const ip = await async function(pp) {
          var ip;
          const {
            appId: cp,
            apiKey: Op
          } = pp, op = {
            method: "GET",
            headers: qi(Op)
          }, Ip = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", cp), Sp = await fetch(Ip, op);
          if (200 !== Sp.status && 304 !== Sp.status) {
            let pp = "";
            try {
              const cp = await Sp.json();
              (null === (ip = cp.error) || void 0 === ip ? void 0 : ip.message) && (pp = cp.error.message)
            } catch (xp) {}
            throw ei.create("config-fetch-failed", {
              httpStatus: Sp.status,
              responseMessage: pp
            })
          }
          return Sp.json()
        }(pp);
        return Sp.deleteThrottleMetadata(Lp), ip
      } catch (Dp) {
        const ip = Dp;
        if (! function(pp) {
            if (!(pp instanceof Ip.l) || !pp.customData) return !1;
            const ip = Number(pp.customData.httpStatus);
            return 429 === ip || 500 === ip || 503 === ip || 504 === ip
          }(ip)) {
          if (Sp.deleteThrottleMetadata(Lp), Yp) return Hi.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${Yp} provided in the "measurementId" field in the local Firebase config. [${null===ip||void 0===ip?void 0:ip.message}]`), {
            appId: Lp,
            measurementId: Yp
          };
          throw Dp
        }
        const Op = 503 === Number(null === (xp = null === ip || void 0 === ip ? void 0 : ip.customData) || void 0 === xp ? void 0 : xp.httpStatus) ? (0, Ip.v)(op, Sp.intervalMillis, 30) : (0, Ip.v)(op, Sp.intervalMillis),
          Ap = {
            throttleEndTimeMillis: Date.now() + Op,
            backoffCount: op + 1
          };
        return Sp.setThrottleMetadata(Lp, Ap), Hi.debug(`Calling attemptFetch again in ${Op} millis`), Ci(pp, Ap, cp, Sp)
      }
    }
    class Ei {
      constructor() {
        this.listeners = []
      }
      addEventListener(pp) {
        this.listeners.push(pp)
      }
      abort() {
        this.listeners.forEach((pp => pp()))
      }
    }
    let Xi, li;

    function Qi(pp) {
      li = pp
    }

    function Ji(pp) {
      Xi = pp
    }
    async function Bi(pp, ip, cp, Op, op, Sp, xp) {
      var Lp;
      const Yp = Mi(pp);
      Yp.then((ip => {
        cp[ip.measurementId] = ip.appId, pp.options.measurementId && ip.measurementId !== pp.options.measurementId && Hi.warn(`The measurement ID in the local Firebase config (${pp.options.measurementId}) does not match the measurement ID fetched from the server (${ip.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
      })).catch((pp => Hi.error(pp))), ip.push(Yp);
      const Dp = async function() {
        if (!(0, Ip.Q)()) return Hi.warn(ei.create("indexeddb-unavailable", {
          errorInfo: "IndexedDB is not available in this environment."
        }).message), !1;
        try {
          await (0, Ip.gb)()
        } catch (pp) {
          return Hi.warn(ei.create("indexeddb-unavailable", {
            errorInfo: null === pp || void 0 === pp ? void 0 : pp.toString()
          }).message), !1
        }
        return !0
      }().then((pp => pp ? Op.getId() : void 0)), [Ap, Pp] = await Promise.all([Yp, Dp]);
      (function(pp) {
        const ip = window.document.getElementsByTagName("script");
        for (const cp of Object.values(ip))
          if (cp.src && cp.src.includes(ti) && cp.src.includes(pp)) return cp;
        return null
      })(Sp) || ki(Sp, Ap.measurementId), li && (op("consent", "default", li), Qi(void 0)), op("js", new Date);
      const Wp = null !== (Lp = null === xp || void 0 === xp ? void 0 : xp.config) && void 0 !== Lp ? Lp : {};
      return Wp.origin = "firebase", Wp.update = !0, null != Pp && (Wp.firebase_id = Pp), op("config", Ap.measurementId, Wp), Xi && (op("set", Xi), Ji(void 0)), Ap.measurementId
    }
    class Ni {
      constructor(pp) {
        this.app = pp
      }
      _delete() {
        return delete Ti[this.app.options.appId], Promise.resolve()
      }
    }
    let Ti = {},
      fi = [];
    const bi = {};
    let ai, ni, Fi = "dataLayer",
      gi = "gtag",
      Gi = !1;

    function ri(pp) {
      if (Gi) throw ei.create("already-initialized");
      pp.dataLayerName && (Fi = pp.dataLayerName), pp.gtagName && (gi = pp.gtagName)
    }

    function Zi(pp, ip, cp) {
      ! function() {
        const pp = [];
        if ((0, Ip.K)() && pp.push("This is a browser extension environment."), (0, Ip.o)() || pp.push("Cookies are not available."), pp.length > 0) {
          const ip = pp.map(((pp, ip) => `(${ip+1}) ${pp}`)).join(" "),
            cp = ei.create("invalid-analytics-context", {
              errorInfo: ip
            });
          Hi.warn(cp.message)
        }
      }();
      const Op = pp.options.appId;
      if (!Op) throw ei.create("no-app-id");
      if (!pp.options.apiKey) {
        if (!pp.options.measurementId) throw ei.create("no-api-key");
        Hi.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${pp.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
      }
      if (null != Ti[Op]) throw ei.create("already-exists", {
        id: Op
      });
      if (!Gi) {
        ! function(pp) {
          let ip = [];
          Array.isArray(window[pp]) ? ip = window[pp] : window[pp] = ip
        }(Fi);
        const {
          wrappedGtag: pp,
          gtagCore: ip
        } = function(pp, ip, cp, Op, op) {
          let Ip = function() {
            for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
            window[Op].push(arguments)
          };
          return window[op] && "function" === typeof window[op] && (Ip = window[op]), window[op] = mi(Ip, pp, ip, cp), {
            gtagCore: Ip,
            wrappedGtag: window[op]
          }
        }(Ti, fi, bi, Fi, gi);
        ni = pp, ai = ip, Gi = !0
      }
      Ti[Op] = Bi(pp, fi, bi, ip, ai, Fi, cp);
      return new Ni(pp)
    }

    function zi() {
      let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Op.J)();
      pp = (0, Ip.F)(pp);
      const ip = (0, Op.x)(pp, vi);
      return ip.isInitialized() ? ip.getImmediate() : si(pp)
    }

    function si(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const cp = (0, Op.x)(pp, vi);
      if (cp.isInitialized()) {
        const pp = cp.getImmediate();
        if ((0, Ip.y)(ip, cp.getOptions())) return pp;
        throw ei.create("already-initialized")
      }
      return cp.initialize({
        options: ip
      })
    }
    async function Ki() {
      if ((0, Ip.K)()) return !1;
      if (!(0, Ip.o)()) return !1;
      if (!(0, Ip.Q)()) return !1;
      try {
        return await (0, Ip.gb)()
      } catch (pp) {
        return !1
      }
    }

    function Vi(pp, ip, cp) {
      pp = (0, Ip.F)(pp), async function(pp, ip, cp, Op) {
        if (Op && Op.global) return pp("set", {
          screen_name: cp
        }), Promise.resolve();
        pp("config", await ip, {
          update: !0,
          screen_name: cp
        })
      }(ni, Ti[pp.app.options.appId], ip, cp).catch((pp => Hi.error(pp)))
    }
    async function pc(pp) {
      return pp = (0, Ip.F)(pp), async function(pp, ip) {
        const cp = await ip;
        return new Promise(((ip, Op) => {
          pp("get", cp, "client_id", (pp => {
            pp || Op(ei.create("no-client-id")), ip(pp)
          }))
        }))
      }(ni, Ti[pp.app.options.appId])
    }

    function ic(pp, ip, cp) {
      pp = (0, Ip.F)(pp), async function(pp, ip, cp, Op) {
        if (Op && Op.global) return pp("set", {
          user_id: cp
        }), Promise.resolve();
        pp("config", await ip, {
          update: !0,
          user_id: cp
        })
      }(ni, Ti[pp.app.options.appId], ip, cp).catch((pp => Hi.error(pp)))
    }

    function cc(pp, ip, cp) {
      pp = (0, Ip.F)(pp), async function(pp, ip, cp, Op) {
        if (Op && Op.global) {
          const ip = {};
          for (const pp of Object.keys(cp)) ip[`user_properties.${pp}`] = cp[pp];
          return pp("set", ip), Promise.resolve()
        }
        pp("config", await ip, {
          update: !0,
          user_properties: cp
        })
      }(ni, Ti[pp.app.options.appId], ip, cp).catch((pp => Hi.error(pp)))
    }

    function Oc(pp, ip) {
      pp = (0, Ip.F)(pp), async function(pp, ip) {
        const cp = await pp;
        window[`ga-disable-${cp}`] = !ip
      }(Ti[pp.app.options.appId], ip).catch((pp => Hi.error(pp)))
    }

    function oc(pp) {
      ni ? ni("set", pp) : Ji(pp)
    }

    function Ic(pp, ip, cp, Op) {
      pp = (0, Ip.F)(pp), async function(pp, ip, cp, Op, op) {
        if (op && op.global) pp("event", cp, Op);
        else {
          const op = await ip;
          pp("event", cp, Object.assign(Object.assign({}, Op), {
            send_to: op
          }))
        }
      }(ni, Ti[pp.app.options.appId], ip, cp, Op).catch((pp => Hi.error(pp)))
    }

    function Sc(pp) {
      ni ? ni("consent", "update", pp) : Qi(pp)
    }
    const xc = "@firebase/analytics",
      Lc = "0.10.0";
    (0, Op.z)(new Sp.d(vi, ((pp, ip) => {
      let {
        options: cp
      } = ip;
      return Zi(pp.getProvider("app").getImmediate(), pp.getProvider("installations-internal").getImmediate(), cp)
    }), "PUBLIC")), (0, Op.z)(new Sp.d("analytics-internal", (function(pp) {
      try {
        const ip = pp.getProvider(vi).getImmediate();
        return {
          logEvent: (pp, cp, Op) => Ic(ip, pp, cp, Op)
        }
      } catch (ip) {
        throw ei.create("interop-component-reg-failed", {
          reason: ip
        })
      }
    }), "PRIVATE")), (0, Op.S)(xc, Lc), (0, Op.S)(xc, Lc, "esm2017")
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);