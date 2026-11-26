/*! For license information please see gw4e3a.297.8f94c955.chunk.js.LICENSE.txt */
export const id = 297;
export const ids = [297];
export const modules = {
  41520: (BB, OB, GB) => {
    GB.d(OB, {
      C: () => zB,
      E: () => EB,
      H: () => pB,
      I: () => ZB,
      L: () => fB,
      P: () => RB,
      S: () => WB,
      W: () => qB,
      _: () => NB,
      bb: () => uB,
      d: () => lB,
      eb: () => KB,
      f: () => nB,
      h: () => SB,
      ib: () => AB,
      l: () => VB,
      p: () => jB,
      q: () => oB,
      t: () => wB,
      u: () => IB,
      v: () => kB,
      w: () => mB,
      x: () => PB,
      y: () => MB
    });
    const YB = function(BB) {
        const OB = [];
        let GB = 0;
        for (let YB = 0; YB < BB.length; YB++) {
          let DB = BB.charCodeAt(YB);
          DB < 128 ? OB[GB++] = DB : DB < 2048 ? (OB[GB++] = DB >> 6 | 192, OB[GB++] = 63 & DB | 128) : 55296 === (64512 & DB) && YB + 1 < BB.length && 56320 === (64512 & BB.charCodeAt(YB + 1)) ? (DB = 65536 + ((1023 & DB) << 10) + (1023 & BB.charCodeAt(++YB)), OB[GB++] = DB >> 18 | 240, OB[GB++] = DB >> 12 & 63 | 128, OB[GB++] = DB >> 6 & 63 | 128, OB[GB++] = 63 & DB | 128) : (OB[GB++] = DB >> 12 | 224, OB[GB++] = DB >> 6 & 63 | 128, OB[GB++] = 63 & DB | 128)
        }
        return OB
      },
      DB = {
        byteToCharMap_: null,
        charToByteMap_: null,
        byteToCharMapWebSafe_: null,
        charToByteMapWebSafe_: null,
        ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        get ENCODED_VALS() {
          return this.ENCODED_VALS_BASE + "+/="
        },
        get ENCODED_VALS_WEBSAFE() {
          return this.ENCODED_VALS_BASE + "-_."
        },
        HAS_NATIVE_SUPPORT: "function" === typeof atob,
        encodeByteArray(BB, OB) {
          if (!Array.isArray(BB)) throw Error("encodeByteArray takes an array as a parameter");
          this.init_();
          const GB = OB ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
            YB = [];
          for (let DB = 0; DB < BB.length; DB += 3) {
            const OB = BB[DB],
              QB = DB + 1 < BB.length,
              oB = QB ? BB[DB + 1] : 0,
              jB = DB + 2 < BB.length,
              yB = jB ? BB[DB + 2] : 0,
              JB = OB >> 2,
              MB = (3 & OB) << 4 | oB >> 4;
            let PB = (15 & oB) << 2 | yB >> 6,
              zB = 63 & yB;
            jB || (zB = 64, QB || (PB = 64)), YB.push(GB[JB], GB[MB], GB[PB], GB[zB])
          }
          return YB.join("")
        },
        encodeString(BB, OB) {
          return this.HAS_NATIVE_SUPPORT && !OB ? btoa(BB) : this.encodeByteArray(YB(BB), OB)
        },
        decodeString(BB, OB) {
          return this.HAS_NATIVE_SUPPORT && !OB ? atob(BB) : function(BB) {
            const OB = [];
            let GB = 0,
              YB = 0;
            for (; GB < BB.length;) {
              const DB = BB[GB++];
              if (DB < 128) OB[YB++] = String.fromCharCode(DB);
              else if (DB > 191 && DB < 224) {
                const QB = BB[GB++];
                OB[YB++] = String.fromCharCode((31 & DB) << 6 | 63 & QB)
              } else if (DB > 239 && DB < 365) {
                const QB = ((7 & DB) << 18 | (63 & BB[GB++]) << 12 | (63 & BB[GB++]) << 6 | 63 & BB[GB++]) - 65536;
                OB[YB++] = String.fromCharCode(55296 + (QB >> 10)), OB[YB++] = String.fromCharCode(56320 + (1023 & QB))
              } else {
                const QB = BB[GB++],
                  oB = BB[GB++];
                OB[YB++] = String.fromCharCode((15 & DB) << 12 | (63 & QB) << 6 | 63 & oB)
              }
            }
            return OB.join("")
          }(this.decodeStringToByteArray(BB, OB))
        },
        decodeStringToByteArray(BB, OB) {
          this.init_();
          const GB = OB ? this.charToByteMapWebSafe_ : this.charToByteMap_,
            YB = [];
          for (let DB = 0; DB < BB.length;) {
            const OB = GB[BB.charAt(DB++)],
              oB = DB < BB.length ? GB[BB.charAt(DB)] : 0;
            ++DB;
            const jB = DB < BB.length ? GB[BB.charAt(DB)] : 64;
            ++DB;
            const yB = DB < BB.length ? GB[BB.charAt(DB)] : 64;
            if (++DB, null == OB || null == oB || null == jB || null == yB) throw new QB;
            const JB = OB << 2 | oB >> 4;
            if (YB.push(JB), 64 !== jB) {
              const BB = oB << 4 & 240 | jB >> 2;
              if (YB.push(BB), 64 !== yB) {
                const BB = jB << 6 & 192 | yB;
                YB.push(BB)
              }
            }
          }
          return YB
        },
        init_() {
          if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
            for (let BB = 0; BB < this.ENCODED_VALS.length; BB++) this.byteToCharMap_[BB] = this.ENCODED_VALS.charAt(BB), this.charToByteMap_[this.byteToCharMap_[BB]] = BB, this.byteToCharMapWebSafe_[BB] = this.ENCODED_VALS_WEBSAFE.charAt(BB), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[BB]] = BB, BB >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(BB)] = BB, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(BB)] = BB)
          }
        }
      };
    class QB extends Error {
      constructor() {
        super(...arguments), this.name = "DecodeBase64StringError"
      }
    }
    const oB = function(BB) {
        return function(BB) {
          const OB = YB(BB);
          return DB.encodeByteArray(OB, !0)
        }(BB).replace(/\./g, "")
      },
      jB = function(BB) {
        try {
          return DB.decodeString(BB, !0)
        } catch (OB) {
          console.error("base64Decode failed: ", OB)
        }
        return null
      };
    const yB = () => function() {
        if ("undefined" !== typeof self) return self;
        if ("undefined" !== typeof window) return window;
        if ("undefined" !== typeof GB.g) return GB.g;
        throw new Error("Unable to locate global object.")
      }().__FIREBASE_DEFAULTS__,
      JB = () => {
        try {
          return yB() || (() => {
            if ("undefined" === typeof process) return
          })() || (() => {
            if ("undefined" === typeof document) return;
            let BB;
            try {
              BB = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)
            } catch (GB) {
              return
            }
            const OB = BB && jB(BB[1]);
            return OB && JSON.parse(OB)
          })()
        } catch (BB) {
          return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${BB}`)
        }
      },
      MB = BB => {
        var OB, GB;
        return null === (GB = null === (OB = JB()) || void 0 === OB ? void 0 : OB.emulatorHosts) || void 0 === GB ? void 0 : GB[BB]
      },
      PB = () => {
        var BB;
        return null === (BB = JB()) || void 0 === BB ? void 0 : BB.config
      },
      zB = BB => {
        var OB;
        return null === (OB = JB()) || void 0 === OB ? void 0 : OB[`_${BB}`]
      };
    class lB {
      constructor() {
        this.reject = () => {}, this.resolve = () => {}, this.promise = new Promise(((BB, OB) => {
          this.resolve = BB, this.reject = OB
        }))
      }
      wrapCallback(BB) {
        return (OB, GB) => {
          OB ? this.reject(OB) : this.resolve(GB), "function" === typeof BB && (this.promise.catch((() => {})), 1 === BB.length ? BB(OB) : BB(OB, GB))
        }
      }
    }

    function pB() {
      return "undefined" !== typeof navigator && "string" === typeof navigator.userAgent ? navigator.userAgent : ""
    }

    function qB() {
      return "undefined" !== typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pB())
    }

    function ZB() {
      const BB = "object" === typeof chrome ? chrome.runtime : "object" === typeof browser ? browser.runtime : void 0;
      return "object" === typeof BB && void 0 !== BB.id
    }

    function NB() {
      return "object" === typeof navigator && "ReactNative" === navigator.product
    }

    function RB() {
      const BB = pB();
      return BB.indexOf("MSIE ") >= 0 || BB.indexOf("Trident/") >= 0
    }

    function WB() {
      try {
        return "object" === typeof indexedDB
      } catch (BB) {
        return !1
      }
    }

    function AB() {
      return new Promise(((BB, OB) => {
        try {
          let GB = !0;
          const YB = "validate-browser-context-for-indexeddb-analytics-module",
            DB = self.indexedDB.open(YB);
          DB.onsuccess = () => {
            DB.result.close(), GB || self.indexedDB.deleteDatabase(YB), BB(!0)
          }, DB.onupgradeneeded = () => {
            GB = !1
          }, DB.onerror = () => {
            var BB;
            OB((null === (BB = DB.error) || void 0 === BB ? void 0 : BB.message) || "")
          }
        } catch (GB) {
          OB(GB)
        }
      }))
    }

    function VB() {
      return !("undefined" === typeof navigator || !navigator.cookieEnabled)
    }
    class SB extends Error {
      constructor(BB, OB, GB) {
        super(OB), this.code = BB, this.customData = GB, this.name = "FirebaseError", Object.setPrototypeOf(this, SB.prototype), Error.captureStackTrace && Error.captureStackTrace(this, nB.prototype.create)
      }
    }
    class nB {
      constructor(BB, OB, GB) {
        this.service = BB, this.serviceName = OB, this.errors = GB
      }
      create(BB) {
        const OB = (arguments.length <= 1 ? void 0 : arguments[1]) || {},
          GB = `${this.service}/${BB}`,
          YB = this.errors[BB],
          DB = YB ? function(BB, OB) {
            return BB.replace(UB, ((BB, GB) => {
              const YB = OB[GB];
              return null != YB ? String(YB) : `<${GB}?>`
            }))
          }(YB, OB) : "Error",
          QB = `${this.serviceName}: ${DB} (${GB}).`;
        return new SB(GB, QB, OB)
      }
    }
    const UB = /\{\$([^}]+)}/g;

    function fB(BB) {
      for (const OB in BB)
        if (Object.prototype.hasOwnProperty.call(BB, OB)) return !1;
      return !0
    }

    function kB(BB, OB) {
      if (BB === OB) return !0;
      const GB = Object.keys(BB),
        YB = Object.keys(OB);
      for (const DB of GB) {
        if (!YB.includes(DB)) return !1;
        const GB = BB[DB],
          QB = OB[DB];
        if (dB(GB) && dB(QB)) {
          if (!kB(GB, QB)) return !1
        } else if (GB !== QB) return !1
      }
      for (const DB of YB)
        if (!GB.includes(DB)) return !1;
      return !0
    }

    function dB(BB) {
      return null !== BB && "object" === typeof BB
    }

    function KB(BB) {
      const OB = [];
      for (const [GB, YB] of Object.entries(BB)) Array.isArray(YB) ? YB.forEach((BB => {
        OB.push(encodeURIComponent(GB) + "=" + encodeURIComponent(BB))
      })) : OB.push(encodeURIComponent(GB) + "=" + encodeURIComponent(YB));
      return OB.length ? "&" + OB.join("&") : ""
    }

    function uB(BB) {
      const OB = {};
      return BB.replace(/^\?/, "").split("&").forEach((BB => {
        if (BB) {
          const [GB, YB] = BB.split("=");
          OB[decodeURIComponent(GB)] = decodeURIComponent(YB)
        }
      })), OB
    }

    function mB(BB) {
      const OB = BB.indexOf("?");
      if (!OB) return "";
      const GB = BB.indexOf("#", OB);
      return BB.substring(OB, GB > 0 ? GB : void 0)
    }

    function IB(BB, OB) {
      const GB = new FB(BB, OB);
      return GB.subscribe.bind(GB)
    }
    class FB {
      constructor(BB, OB) {
        this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = OB, this.task.then((() => {
          BB(this)
        })).catch((BB => {
          this.error(BB)
        }))
      }
      next(BB) {
        this.forEachObserver((OB => {
          OB.next(BB)
        }))
      }
      error(BB) {
        this.forEachObserver((OB => {
          OB.error(BB)
        })), this.close(BB)
      }
      complete() {
        this.forEachObserver((BB => {
          BB.complete()
        })), this.close()
      }
      subscribe(BB, OB, GB) {
        let YB;
        if (void 0 === BB && void 0 === OB && void 0 === GB) throw new Error("Missing Observer.");
        YB = function(BB, OB) {
          if ("object" !== typeof BB || null === BB) return !1;
          for (const GB of OB)
            if (GB in BB && "function" === typeof BB[GB]) return !0;
          return !1
        }(BB, ["next", "error", "complete"]) ? BB : {
          next: BB,
          error: OB,
          complete: GB
        }, void 0 === YB.next && (YB.next = iB), void 0 === YB.error && (YB.error = iB), void 0 === YB.complete && (YB.complete = iB);
        const DB = this.unsubscribeOne.bind(this, this.observers.length);
        return this.finalized && this.task.then((() => {
          try {
            this.finalError ? YB.error(this.finalError) : YB.complete()
          } catch (BB) {}
        })), this.observers.push(YB), DB
      }
      unsubscribeOne(BB) {
        void 0 !== this.observers && void 0 !== this.observers[BB] && (delete this.observers[BB], this.observerCount -= 1, 0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this))
      }
      forEachObserver(BB) {
        if (!this.finalized)
          for (let OB = 0; OB < this.observers.length; OB++) this.sendOne(OB, BB)
      }
      sendOne(BB, OB) {
        this.task.then((() => {
          if (void 0 !== this.observers && void 0 !== this.observers[BB]) try {
            OB(this.observers[BB])
          } catch (GB) {
            "undefined" !== typeof console && console.error && console.error(GB)
          }
        }))
      }
      close(BB) {
        this.finalized || (this.finalized = !0, void 0 !== BB && (this.finalError = BB), this.task.then((() => {
          this.observers = void 0, this.onNoObservers = void 0
        })))
      }
    }

    function iB() {}
    const LB = 1e3,
      gB = 2,
      rB = 144e5,
      XB = .5;

    function wB(BB) {
      let OB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : gB;
      const GB = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : LB) * Math.pow(OB, BB),
        YB = Math.round(XB * GB * (Math.random() - .5) * 2);
      return Math.min(rB, GB + YB)
    }

    function EB(BB) {
      return BB && BB._delegate ? BB._delegate : BB
    }
  },
  41513: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => QB.h,
      i: () => PO,
      k: () => xB,
      o: () => GO,
      s: () => YO,
      u: () => BO,
      y: () => jO,
      C: () => OO,
      D: () => QO,
      F: () => DO,
      J: () => oO,
      M: () => qO,
      S: () => lO,
      P: () => pO,
      U: () => zO,
      W: () => NO,
      X: () => ZO,
      $: () => RO
    });
    var YB = GB(41515),
      DB = GB(41525),
      QB = GB(41520);
    let oB, jB;
    const yB = new WeakMap,
      JB = new WeakMap,
      MB = new WeakMap,
      PB = new WeakMap,
      zB = new WeakMap;
    let lB = {
      get(BB, OB, GB) {
        if (BB instanceof IDBTransaction) {
          if ("done" === OB) return JB.get(BB);
          if ("objectStoreNames" === OB) return BB.objectStoreNames || MB.get(BB);
          if ("store" === OB) return GB.objectStoreNames[1] ? void 0 : GB.objectStore(GB.objectStoreNames[0])
        }
        return ZB(BB[OB])
      },
      set: (BB, OB, GB) => (BB[OB] = GB, !0),
      has: (BB, OB) => BB instanceof IDBTransaction && ("done" === OB || "store" === OB) || OB in BB
    };

    function pB(BB) {
      return BB !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (jB || (jB = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(BB) ? function() {
        for (var OB = arguments.length, GB = new Array(OB), YB = 0; YB < OB; YB++) GB[YB] = arguments[YB];
        return BB.apply(NB(this), GB), ZB(yB.get(this))
      } : function() {
        for (var OB = arguments.length, GB = new Array(OB), YB = 0; YB < OB; YB++) GB[YB] = arguments[YB];
        return ZB(BB.apply(NB(this), GB))
      } : function(OB) {
        for (var GB = arguments.length, YB = new Array(GB > 1 ? GB - 1 : 0), DB = 1; DB < GB; DB++) YB[DB - 1] = arguments[DB];
        const QB = BB.call(NB(this), OB, ...YB);
        return MB.set(QB, OB.sort ? OB.sort() : [OB]), ZB(QB)
      }
    }

    function qB(BB) {
      return "function" === typeof BB ? pB(BB) : (BB instanceof IDBTransaction && function(BB) {
        if (JB.has(BB)) return;
        const OB = new Promise(((OB, GB) => {
          const YB = () => {
              BB.removeEventListener("complete", DB), BB.removeEventListener("error", QB), BB.removeEventListener("abort", QB)
            },
            DB = () => {
              OB(), YB()
            },
            QB = () => {
              GB(BB.error || new DOMException("AbortError", "AbortError")), YB()
            };
          BB.addEventListener("complete", DB), BB.addEventListener("error", QB), BB.addEventListener("abort", QB)
        }));
        JB.set(BB, OB)
      }(BB), OB = BB, (oB || (oB = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((BB => OB instanceof BB)) ? new Proxy(BB, lB) : BB);
      var OB
    }

    function ZB(BB) {
      if (BB instanceof IDBRequest) return function(BB) {
        const OB = new Promise(((OB, GB) => {
          const YB = () => {
              BB.removeEventListener("success", DB), BB.removeEventListener("error", QB)
            },
            DB = () => {
              OB(ZB(BB.result)), YB()
            },
            QB = () => {
              GB(BB.error), YB()
            };
          BB.addEventListener("success", DB), BB.addEventListener("error", QB)
        }));
        return OB.then((OB => {
          OB instanceof IDBCursor && yB.set(OB, BB)
        })).catch((() => {})), zB.set(OB, BB), OB
      }(BB);
      if (PB.has(BB)) return PB.get(BB);
      const OB = qB(BB);
      return OB !== BB && (PB.set(BB, OB), zB.set(OB, BB)), OB
    }
    const NB = BB => zB.get(BB);
    const RB = ["get", "getKey", "getAll", "getAllKeys", "count"],
      WB = ["put", "add", "delete", "clear"],
      AB = new Map;

    function VB(BB, OB) {
      if (!(BB instanceof IDBDatabase) || OB in BB || "string" !== typeof OB) return;
      if (AB.get(OB)) return AB.get(OB);
      const GB = OB.replace(/FromIndex$/, ""),
        YB = OB !== GB,
        DB = WB.includes(GB);
      if (!(GB in (YB ? IDBIndex : IDBObjectStore).prototype) || !DB && !RB.includes(GB)) return;
      const QB = async function(BB) {
        const OB = this.transaction(BB, DB ? "readwrite" : "readonly");
        let QB = OB.store;
        for (var oB = arguments.length, jB = new Array(oB > 1 ? oB - 1 : 0), yB = 1; yB < oB; yB++) jB[yB - 1] = arguments[yB];
        return YB && (QB = QB.index(jB.shift())), (await Promise.all([QB[GB](...jB), DB && OB.done]))[0]
      };
      return AB.set(OB, QB), QB
    }
    lB = (BB => ({
      ...BB,
      get: (OB, GB, YB) => VB(OB, GB) || BB.get(OB, GB, YB),
      has: (OB, GB) => !!VB(OB, GB) || BB.has(OB, GB)
    }))(lB);
    class SB {
      constructor(BB) {
        this.container = BB
      }
      getPlatformInfoString() {
        return this.container.getProviders().map((BB => {
          if (function(BB) {
              const OB = BB.getComponent();
              return "VERSION" === (null === OB || void 0 === OB ? void 0 : OB.type)
            }(BB)) {
            const OB = BB.getImmediate();
            return `${OB.library}/${OB.version}`
          }
          return null
        })).filter((BB => BB)).join(" ")
      }
    }
    const nB = "@firebase/app",
      UB = "0.9.13",
      fB = new DB.g("@firebase/app"),
      kB = "@firebase/app-compat",
      dB = "@firebase/analytics-compat",
      KB = "@firebase/analytics",
      uB = "@firebase/app-check-compat",
      mB = "@firebase/app-check",
      IB = "@firebase/auth",
      FB = "@firebase/auth-compat",
      iB = "@firebase/database",
      LB = "@firebase/database-compat",
      gB = "@firebase/functions",
      rB = "@firebase/functions-compat",
      XB = "@firebase/installations",
      wB = "@firebase/installations-compat",
      EB = "@firebase/messaging",
      cB = "@firebase/messaging-compat",
      hB = "@firebase/performance",
      aB = "@firebase/performance-compat",
      eB = "@firebase/remote-config",
      TB = "@firebase/remote-config-compat",
      bB = "@firebase/storage",
      CB = "@firebase/storage-compat",
      HB = "@firebase/firestore",
      vB = "@firebase/firestore-compat",
      sB = "firebase",
      xB = "[DEFAULT]",
      tB = {
        [nB]: "fire-core",
        [kB]: "fire-core-compat",
        [KB]: "fire-analytics",
        [dB]: "fire-analytics-compat",
        [mB]: "fire-app-check",
        [uB]: "fire-app-check-compat",
        [IB]: "fire-auth",
        [FB]: "fire-auth-compat",
        [iB]: "fire-rtdb",
        [LB]: "fire-rtdb-compat",
        [gB]: "fire-fn",
        [rB]: "fire-fn-compat",
        [XB]: "fire-iid",
        [wB]: "fire-iid-compat",
        [EB]: "fire-fcm",
        [cB]: "fire-fcm-compat",
        [hB]: "fire-perf",
        [aB]: "fire-perf-compat",
        [eB]: "fire-rc",
        [TB]: "fire-rc-compat",
        [bB]: "fire-gcs",
        [CB]: "fire-gcs-compat",
        [HB]: "fire-fst",
        [vB]: "fire-fst-compat",
        "fire-js": "fire-js",
        [sB]: "fire-js-all"
      },
      BO = new Map,
      OO = new Map;

    function GO(BB, OB) {
      try {
        BB.container.RL(OB)
      } catch (GB) {
        fB.debug(`Component ${OB.name} failed to register with FirebaseApp ${BB.name}`, GB)
      }
    }

    function YO(BB, OB) {
      BB.container.addOrOverwriteComponent(OB)
    }

    function DO(BB) {
      const OB = BB.name;
      if (OO.has(OB)) return fB.debug(`There were multiple attempts to register component ${OB}.`), !1;
      OO.set(OB, BB);
      for (const GB of BO.values()) GO(GB, BB);
      return !0
    }

    function QO(BB, OB) {
      const GB = BB.container.getProvider("heartbeat").getImmediate({
        optional: !0
      });
      return GB && GB.triggerHeartbeat(), BB.container.getProvider(OB)
    }

    function oO(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : xB;
      QO(BB, OB).clearInstance(GB)
    }

    function jO() {
      OO.clear()
    }
    const yO = {
        "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first",
        "bad-app-name": "Illegal App name: '{$appName}",
        "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
        "app-deleted": "Firebase App named '{$appName}' already deleted",
        "no-options": "Need to provide options, when not being deployed to hosting via source.",
        "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
        "invalid-log-argument": "First argument to `onLog` must be null or a function.",
        "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
        "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
        "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
        "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."
      },
      JO = new QB.f("app", "Firebase", yO);
    class MO {
      constructor(BB, OB, GB) {
        this._isDeleted = !1, this._options = Object.assign({}, BB), this._config = Object.assign({}, OB), this._name = OB.name, this._automaticDataCollectionEnabled = OB.automaticDataCollectionEnabled, this._container = GB, this.container.RL(new YB.f("app", (() => this), "PUBLIC"))
      }
      get automaticDataCollectionEnabled() {
        return this.checkDestroyed(), this._automaticDataCollectionEnabled
      }
      set automaticDataCollectionEnabled(BB) {
        this.checkDestroyed(), this._automaticDataCollectionEnabled = BB
      }
      get name() {
        return this.checkDestroyed(), this._name
      }
      get options() {
        return this.checkDestroyed(), this._options
      }
      get config() {
        return this.checkDestroyed(), this._config
      }
      get container() {
        return this._container
      }
      get isDeleted() {
        return this._isDeleted
      }
      set isDeleted(BB) {
        this._isDeleted = BB
      }
      checkDestroyed() {
        if (this.isDeleted) throw JO.create("app-deleted", {
          appName: this._name
        })
      }
    }
    const PO = "9.23.0";

    function zO(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        GB = BB;
      if ("object" !== typeof OB) {
        OB = {
          name: OB
        }
      }
      const DB = Object.assign({
          name: xB,
          automaticDataCollectionEnabled: !1
        }, OB),
        oB = DB.name;
      if ("string" !== typeof oB || !oB) throw JO.create("bad-app-name", {
        appName: String(oB)
      });
      if (GB || (GB = (0, QB.x)()), !GB) throw JO.create("no-options");
      const jB = BO.get(oB);
      if (jB) {
        if ((0, QB.v)(GB, jB.options) && (0, QB.v)(DB, jB.config)) return jB;
        throw JO.create("duplicate-app", {
          appName: oB
        })
      }
      const yB = new YB.b(oB);
      for (const YB of OO.values()) yB.RL(YB);
      const JB = new MO(GB, DB, yB);
      return BO.set(oB, JB), JB
    }

    function lO() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xB;
      const OB = BO.get(BB);
      if (!OB && BB === xB && (0, QB.x)()) return zO();
      if (!OB) throw JO.create("no-app", {
        appName: BB
      });
      return OB
    }

    function pO() {
      return Array.from(BO.values())
    }
    async function qO(BB) {
      const OB = BB.name;
      BO.has(OB) && (BO.delete(OB), await Promise.all(BB.container.getProviders().map((BB => BB.delete()))), BB.isDeleted = !0)
    }

    function ZO(BB, OB, GB) {
      var DB;
      let QB = null !== (DB = tB[BB]) && void 0 !== DB ? DB : BB;
      GB && (QB += `-${GB}`);
      const oB = QB.match(/\s|\//),
        jB = OB.match(/\s|\//);
      if (oB || jB) {
        const BB = [`Unable to register library "${QB}" with version "${OB}":`];
        return oB && BB.push(`library name "${QB}" contains illegal characters (whitespace or "/")`), oB && jB && BB.push("and"), jB && BB.push(`version name "${OB}" contains illegal characters (whitespace or "/")`), void fB.warn(BB.join(" "))
      }
      DO(new YB.f(`${QB}-version`, (() => ({
        library: QB,
        version: OB
      })), "VERSION"))
    }

    function NO(BB, OB) {
      if (null !== BB && "function" !== typeof BB) throw JO.create("invalid-log-argument");
      (0, DB.n)(BB, OB)
    }

    function RO(BB) {
      (0, DB.k)(BB)
    }
    const WO = "firebase-heartbeat-store";
    let AO = null;

    function VO() {
      return AO || (AO = function(BB, OB) {
        let {
          blocked: GB,
          upgrade: YB,
          blocking: DB,
          terminated: QB
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const oB = indexedDB.open(BB, OB),
          jB = ZB(oB);
        return YB && oB.addEventListener("upgradeneeded", (BB => {
          YB(ZB(oB.result), BB.oldVersion, BB.newVersion, ZB(oB.transaction), BB)
        })), GB && oB.addEventListener("blocked", (BB => GB(BB.oldVersion, BB.newVersion, BB))), jB.then((BB => {
          QB && BB.addEventListener("close", (() => QB())), DB && BB.addEventListener("versionchange", (BB => DB(BB.oldVersion, BB.newVersion, BB)))
        })).catch((() => {})), jB
      }("firebase-heartbeat-database", 1, {
        upgrade: (BB, OB) => {
          if (0 === OB) BB.createObjectStore(WO)
        }
      }).catch((BB => {
        throw JO.create("idb-open", {
          originalErrorMessage: BB.message
        })
      }))), AO
    }
    async function SO(BB, OB) {
      try {
        const GB = (await VO()).transaction(WO, "readwrite"),
          YB = GB.objectStore(WO);
        await YB.put(OB, nO(BB)), await GB.done
      } catch (GB) {
        if (GB instanceof QB.h) fB.warn(GB.message);
        else {
          const BB = JO.create("idb-set", {
            originalErrorMessage: null === GB || void 0 === GB ? void 0 : GB.message
          });
          fB.warn(BB.message)
        }
      }
    }

    function nO(BB) {
      return `${BB.name}!${BB.options.appId}`
    }
    class UO {
      constructor(BB) {
        this.container = BB, this._heartbeatsCache = null;
        const OB = this.container.getProvider("app").getImmediate();
        this.Vq = new kO(OB), this._heartbeatsCachePromise = this.Vq.read().then((BB => (this._heartbeatsCache = BB, BB)))
      }
      async triggerHeartbeat() {
        const BB = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),
          OB = fO();
        if (null === this._heartbeatsCache && (this._heartbeatsCache = await this._heartbeatsCachePromise), this._heartbeatsCache.lastSentHeartbeatDate !== OB && !this._heartbeatsCache.heartbeats.some((BB => BB.date === OB))) return this._heartbeatsCache.heartbeats.push({
          date: OB,
          agent: BB
        }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((BB => {
          const OB = new Date(BB.date).valueOf();
          return Date.now() - OB <= 2592e6
        })), this.Vq.overwrite(this._heartbeatsCache)
      }
      async getHeartbeatsHeader() {
        if (null === this._heartbeatsCache && await this._heartbeatsCachePromise, null === this._heartbeatsCache || 0 === this._heartbeatsCache.heartbeats.length) return "";
        const BB = fO(),
          {
            heartbeatsToSend: OB,
            unsentEntries: GB
          } = function(BB) {
            let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1024;
            const GB = [];
            let YB = BB.slice();
            for (const DB of BB) {
              const BB = GB.find((BB => BB.agent === DB.agent));
              if (BB) {
                if (BB.dates.push(DB.date), dO(GB) > OB) {
                  BB.dates.pop();
                  break
                }
              } else if (GB.push({
                  agent: DB.agent,
                  dates: [DB.date]
                }), dO(GB) > OB) {
                GB.pop();
                break
              }
              YB = YB.slice(1)
            }
            return {
              heartbeatsToSend: GB,
              unsentEntries: YB
            }
          }(this._heartbeatsCache.heartbeats),
          YB = (0, QB.q)(JSON.stringify({
            version: 2,
            heartbeats: OB
          }));
        return this._heartbeatsCache.lastSentHeartbeatDate = BB, GB.length > 0 ? (this._heartbeatsCache.heartbeats = GB, await this.Vq.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this.Vq.overwrite(this._heartbeatsCache)), YB
      }
    }

    function fO() {
      return (new Date).toISOString().substring(0, 10)
    }
    class kO {
      constructor(BB) {
        this.app = BB, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
      }
      async runIndexedDBEnvironmentCheck() {
        return !!(0, QB.S)() && (0, QB.ib)().then((() => !0)).catch((() => !1))
      }
      async read() {
        if (await this._canUseIndexedDBPromise) {
          return await async function(BB) {
            try {
              const OB = await VO();
              return await OB.transaction(WO).objectStore(WO).get(nO(BB))
            } catch (OB) {
              if (OB instanceof QB.h) fB.warn(OB.message);
              else {
                const BB = JO.create("idb-get", {
                  originalErrorMessage: null === OB || void 0 === OB ? void 0 : OB.message
                });
                fB.warn(BB.message)
              }
            }
          }(this.app) || {
            heartbeats: []
          }
        }
        return {
          heartbeats: []
        }
      }
      async overwrite(BB) {
        var OB;
        if (await this._canUseIndexedDBPromise) {
          const GB = await this.read();
          return SO(this.app, {
            lastSentHeartbeatDate: null !== (OB = BB.lastSentHeartbeatDate) && void 0 !== OB ? OB : GB.lastSentHeartbeatDate,
            heartbeats: BB.heartbeats
          })
        }
      }
      async add(BB) {
        var OB;
        if (await this._canUseIndexedDBPromise) {
          const GB = await this.read();
          return SO(this.app, {
            lastSentHeartbeatDate: null !== (OB = BB.lastSentHeartbeatDate) && void 0 !== OB ? OB : GB.lastSentHeartbeatDate,
            heartbeats: [...GB.heartbeats, ...BB.heartbeats]
          })
        }
      }
    }

    function dO(BB) {
      return (0, QB.q)(JSON.stringify({
        version: 2,
        heartbeats: BB
      })).length
    }
    var KO;
    KO = "", DO(new YB.f("platform-logger", (BB => new SB(BB)), "PRIVATE")), DO(new YB.f("heartbeat", (BB => new UO(BB)), "PRIVATE")), ZO(nB, UB, KO), ZO(nB, UB, "esm2017"), ZO("fire-js", "")
  },
  41515: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => jB,
      f: () => DB
    });
    var YB = GB(41520);
    class DB {
      constructor(BB, OB, GB) {
        this.name = BB, this.instanceFactory = OB, this.type = GB, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
      }
      setInstantiationMode(BB) {
        return this.instantiationMode = BB, this
      }
      setMultipleInstances(BB) {
        return this.multipleInstances = BB, this
      }
      setServiceProps(BB) {
        return this.serviceProps = BB, this
      }
      setInstanceCreatedCallback(BB) {
        return this.onInstanceCreated = BB, this
      }
    }
    const QB = "[DEFAULT]";
    class oB {
      constructor(BB, OB) {
        this.name = BB, this.container = OB, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map
      }
      get(BB) {
        const OB = this.normalizeInstanceIdentifier(BB);
        if (!this.instancesDeferred.has(OB)) {
          const BB = new YB.d;
          if (this.instancesDeferred.set(OB, BB), this.isInitialized(OB) || this.shouldAutoInitialize()) try {
            const GB = this.getOrInitializeService({
              instanceIdentifier: OB
            });
            GB && BB.resolve(GB)
          } catch (GB) {}
        }
        return this.instancesDeferred.get(OB).promise
      }
      getImmediate(BB) {
        var OB;
        const GB = this.normalizeInstanceIdentifier(null === BB || void 0 === BB ? void 0 : BB.identifier),
          YB = null !== (OB = null === BB || void 0 === BB ? void 0 : BB.optional) && void 0 !== OB && OB;
        if (!this.isInitialized(GB) && !this.shouldAutoInitialize()) {
          if (YB) return null;
          throw Error(`Service ${this.name} is not available`)
        }
        try {
          return this.getOrInitializeService({
            instanceIdentifier: GB
          })
        } catch (DB) {
          if (YB) return null;
          throw DB
        }
      }
      getComponent() {
        return this.component
      }
      setComponent(BB) {
        if (BB.name !== this.name) throw Error(`Mismatching Component ${BB.name} for Provider ${this.name}.`);
        if (this.component) throw Error(`Component for ${this.name} has already been provided`);
        if (this.component = BB, this.shouldAutoInitialize()) {
          if (function(BB) {
              return "EAGER" === BB.instantiationMode
            }(BB)) try {
            this.getOrInitializeService({
              instanceIdentifier: QB
            })
          } catch (OB) {}
          for (const [BB, GB] of this.instancesDeferred.entries()) {
            const YB = this.normalizeInstanceIdentifier(BB);
            try {
              const BB = this.getOrInitializeService({
                instanceIdentifier: YB
              });
              GB.resolve(BB)
            } catch (OB) {}
          }
        }
      }
      clearInstance() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : QB;
        this.instancesDeferred.delete(BB), this.instancesOptions.delete(BB), this.instances.delete(BB)
      }
      async delete() {
        const BB = Array.from(this.instances.values());
        await Promise.all([...BB.filter((BB => "INTERNAL" in BB)).map((BB => BB.INTERNAL.delete())), ...BB.filter((BB => "_delete" in BB)).map((BB => BB._delete()))])
      }
      isComponentSet() {
        return null != this.component
      }
      isInitialized() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : QB;
        return this.instances.has(BB)
      }
      getOptions() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : QB;
        return this.instancesOptions.get(BB) || {}
      }
      initialize() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const {
          options: OB = {}
        } = BB, GB = this.normalizeInstanceIdentifier(BB.instanceIdentifier);
        if (this.isInitialized(GB)) throw Error(`${this.name}(${GB}) has already been initialized`);
        if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
        const YB = this.getOrInitializeService({
          instanceIdentifier: GB,
          options: OB
        });
        for (const [DB, QB] of this.instancesDeferred.entries()) {
          GB === this.normalizeInstanceIdentifier(DB) && QB.resolve(YB)
        }
        return YB
      }
      uP(BB, OB) {
        var GB;
        const YB = this.normalizeInstanceIdentifier(OB),
          DB = null !== (GB = this.onInitCallbacks.get(YB)) && void 0 !== GB ? GB : new Set;
        DB.add(BB), this.onInitCallbacks.set(YB, DB);
        const QB = this.instances.get(YB);
        return QB && BB(QB, YB), () => {
          DB.delete(BB)
        }
      }
      invokeOnInitCallbacks(BB, OB) {
        const GB = this.onInitCallbacks.get(OB);
        if (GB)
          for (const DB of GB) try {
            DB(BB, OB)
          } catch (YB) {}
      }
      getOrInitializeService(BB) {
        let {
          instanceIdentifier: OB,
          options: GB = {}
        } = BB, YB = this.instances.get(OB);
        if (!YB && this.component && (YB = this.component.instanceFactory(this.container, {
            instanceIdentifier: (DB = OB, DB === QB ? void 0 : DB),
            options: GB
          }), this.instances.set(OB, YB), this.instancesOptions.set(OB, GB), this.invokeOnInitCallbacks(YB, OB), this.component.onInstanceCreated)) try {
          this.component.onInstanceCreated(this.container, OB, YB)
        } catch (oB) {}
        var DB;
        return YB || null
      }
      normalizeInstanceIdentifier() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : QB;
        return this.component ? this.component.multipleInstances ? BB : QB : BB
      }
      shouldAutoInitialize() {
        return !!this.component && "EXPLICIT" !== this.component.instantiationMode
      }
    }
    class jB {
      constructor(BB) {
        this.name = BB, this.providers = new Map
      }
      RL(BB) {
        const OB = this.getProvider(BB.name);
        if (OB.isComponentSet()) throw new Error(`Component ${BB.name} has already been registered with ${this.name}`);
        OB.setComponent(BB)
      }
      addOrOverwriteComponent(BB) {
        this.getProvider(BB.name).isComponentSet() && this.providers.delete(BB.name), this.RL(BB)
      }
      getProvider(BB) {
        if (this.providers.has(BB)) return this.providers.get(BB);
        const OB = new oB(BB, this);
        return this.providers.set(BB, OB), OB
      }
      getProviders() {
        return Array.from(this.providers.values())
      }
    }
  },
  41525: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => DB,
      g: () => JB,
      k: () => MB,
      n: () => PB
    });
    const YB = [];
    var DB;
    ! function(BB) {
      BB[BB.DEBUG = 0] = "DEBUG", BB[BB.VERBOSE = 1] = "VERBOSE", BB[BB.INFO = 2] = "INFO", BB[BB.WARN = 3] = "WARN", BB[BB.ERROR = 4] = "ERROR", BB[BB.SILENT = 5] = "SILENT"
    }(DB || (DB = {}));
    const QB = {
        debug: DB.DEBUG,
        verbose: DB.VERBOSE,
        info: DB.INFO,
        warn: DB.WARN,
        error: DB.ERROR,
        silent: DB.SILENT
      },
      oB = DB.INFO,
      jB = {
        [DB.DEBUG]: "log",
        [DB.VERBOSE]: "log",
        [DB.INFO]: "info",
        [DB.WARN]: "warn",
        [DB.ERROR]: "error"
      },
      yB = function(BB, OB) {
        if (OB < BB.logLevel) return;
        const GB = (new Date).toISOString(),
          YB = jB[OB];
        if (!YB) throw new Error(`Attempted to log a message with an invalid logType (value: ${OB})`);
        for (var DB = arguments.length, QB = new Array(DB > 2 ? DB - 2 : 0), oB = 2; oB < DB; oB++) QB[oB - 2] = arguments[oB];
        console[YB](`[${GB}]  ${BB.name}:`, ...QB)
      };
    class JB {
      constructor(BB) {
        this.name = BB, this._logLevel = oB, this._logHandler = yB, this._userLogHandler = null, YB.push(this)
      }
      get logLevel() {
        return this._logLevel
      }
      set logLevel(BB) {
        if (!(BB in DB)) throw new TypeError(`Invalid value "${BB}" assigned to \`logLevel\``);
        this._logLevel = BB
      }
      setLogLevel(BB) {
        this._logLevel = "string" === typeof BB ? QB[BB] : BB
      }
      get logHandler() {
        return this._logHandler
      }
      set logHandler(BB) {
        if ("function" !== typeof BB) throw new TypeError("Value assigned to `logHandler` must be a function");
        this._logHandler = BB
      }
      get userLogHandler() {
        return this._userLogHandler
      }
      set userLogHandler(BB) {
        this._userLogHandler = BB
      }
      debug() {
        for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
        this._userLogHandler && this._userLogHandler(this, DB.DEBUG, ...OB), this._logHandler(this, DB.DEBUG, ...OB)
      }
      log() {
        for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
        this._userLogHandler && this._userLogHandler(this, DB.VERBOSE, ...OB), this._logHandler(this, DB.VERBOSE, ...OB)
      }
      info() {
        for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
        this._userLogHandler && this._userLogHandler(this, DB.INFO, ...OB), this._logHandler(this, DB.INFO, ...OB)
      }
      warn() {
        for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
        this._userLogHandler && this._userLogHandler(this, DB.WARN, ...OB), this._logHandler(this, DB.WARN, ...OB)
      }
      error() {
        for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
        this._userLogHandler && this._userLogHandler(this, DB.ERROR, ...OB), this._logHandler(this, DB.ERROR, ...OB)
      }
    }

    function MB(BB) {
      YB.forEach((OB => {
        OB.setLogLevel(BB)
      }))
    }

    function PB(BB, OB) {
      for (const GB of YB) {
        let YB = null;
        OB && OB.level && (YB = QB[OB.level]), GB.userLogHandler = null === BB ? null : function(OB, GB) {
          for (var QB = arguments.length, oB = new Array(QB > 2 ? QB - 2 : 0), jB = 2; jB < QB; jB++) oB[jB - 2] = arguments[jB];
          const yB = oB.map((BB => {
            if (null == BB) return null;
            if ("string" === typeof BB) return BB;
            if ("number" === typeof BB || "boolean" === typeof BB) return BB.toString();
            if (BB instanceof Error) return BB.message;
            try {
              return JSON.stringify(BB)
            } catch (OB) {
              return null
            }
          })).filter((BB => BB)).join(" ");
          GB >= (null !== YB && void 0 !== YB ? YB : OB.logLevel) && BB({
            level: DB[GB].toLowerCase(),
            message: yB,
            args: oB,
            type: OB.name
          })
        }
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);