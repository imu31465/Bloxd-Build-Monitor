/*! For license information please see symm5.246.c37bf052.chunk.js.LICENSE.txt */
export const id = 246;
export const ids = [246];
export const modules = {
  39279: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      A: () => YJ,
      C: () => DJ,
      D: () => NJ,
      G: () => nJ,
      H: () => fJ,
      J: () => yJ,
      L: () => rJ,
      M: () => vJ,
      O: () => GJ,
      P: () => xJ,
      S: () => bJ,
      W: () => MJ,
      _: () => mJ,
      b: () => sJ,
      d: () => VJ,
      h: () => EJ,
      i: () => QJ,
      j: () => AJ,
      m: () => XJ,
      p: () => zJ,
      q: () => WJ,
      r: () => SJ,
      u: () => wJ,
      y: () => hJ
    });
    const FJ = function(JJ) {
        const cJ = [];
        let ZJ = 0;
        for (let FJ = 0; FJ < JJ.length; FJ++) {
          let UJ = JJ.charCodeAt(FJ);
          UJ < 128 ? cJ[ZJ++] = UJ : UJ < 2048 ? (cJ[ZJ++] = UJ >> 6 | 192, cJ[ZJ++] = 63 & UJ | 128) : 55296 === (64512 & UJ) && FJ + 1 < JJ.length && 56320 === (64512 & JJ.charCodeAt(FJ + 1)) ? (UJ = 65536 + ((1023 & UJ) << 10) + (1023 & JJ.charCodeAt(++FJ)), cJ[ZJ++] = UJ >> 18 | 240, cJ[ZJ++] = UJ >> 12 & 63 | 128, cJ[ZJ++] = UJ >> 6 & 63 | 128, cJ[ZJ++] = 63 & UJ | 128) : (cJ[ZJ++] = UJ >> 12 | 224, cJ[ZJ++] = UJ >> 6 & 63 | 128, cJ[ZJ++] = 63 & UJ | 128)
        }
        return cJ
      },
      UJ = {
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
        encodeByteArray(JJ, cJ) {
          if (!Array.isArray(JJ)) throw Error("encodeByteArray takes an array as a parameter");
          this.init_();
          const ZJ = cJ ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
            FJ = [];
          for (let UJ = 0; UJ < JJ.length; UJ += 3) {
            const cJ = JJ[UJ],
              eJ = UJ + 1 < JJ.length,
              XJ = eJ ? JJ[UJ + 1] : 0,
              AJ = UJ + 2 < JJ.length,
              qJ = AJ ? JJ[UJ + 2] : 0,
              jJ = cJ >> 2,
              YJ = (3 & cJ) << 4 | XJ >> 4;
            let hJ = (15 & XJ) << 2 | qJ >> 6,
              DJ = 63 & qJ;
            AJ || (DJ = 64, eJ || (hJ = 64)), FJ.push(ZJ[jJ], ZJ[YJ], ZJ[hJ], ZJ[DJ])
          }
          return FJ.join("")
        },
        encodeString(JJ, cJ) {
          return this.HAS_NATIVE_SUPPORT && !cJ ? btoa(JJ) : this.encodeByteArray(FJ(JJ), cJ)
        },
        decodeString(JJ, cJ) {
          return this.HAS_NATIVE_SUPPORT && !cJ ? atob(JJ) : function(JJ) {
            const cJ = [];
            let ZJ = 0,
              FJ = 0;
            for (; ZJ < JJ.length;) {
              const UJ = JJ[ZJ++];
              if (UJ < 128) cJ[FJ++] = String.fromCharCode(UJ);
              else if (UJ > 191 && UJ < 224) {
                const eJ = JJ[ZJ++];
                cJ[FJ++] = String.fromCharCode((31 & UJ) << 6 | 63 & eJ)
              } else if (UJ > 239 && UJ < 365) {
                const eJ = ((7 & UJ) << 18 | (63 & JJ[ZJ++]) << 12 | (63 & JJ[ZJ++]) << 6 | 63 & JJ[ZJ++]) - 65536;
                cJ[FJ++] = String.fromCharCode(55296 + (eJ >> 10)), cJ[FJ++] = String.fromCharCode(56320 + (1023 & eJ))
              } else {
                const eJ = JJ[ZJ++],
                  XJ = JJ[ZJ++];
                cJ[FJ++] = String.fromCharCode((15 & UJ) << 12 | (63 & eJ) << 6 | 63 & XJ)
              }
            }
            return cJ.join("")
          }(this.decodeStringToByteArray(JJ, cJ))
        },
        decodeStringToByteArray(JJ, cJ) {
          this.init_();
          const ZJ = cJ ? this.charToByteMapWebSafe_ : this.charToByteMap_,
            FJ = [];
          for (let UJ = 0; UJ < JJ.length;) {
            const cJ = ZJ[JJ.charAt(UJ++)],
              XJ = UJ < JJ.length ? ZJ[JJ.charAt(UJ)] : 0;
            ++UJ;
            const AJ = UJ < JJ.length ? ZJ[JJ.charAt(UJ)] : 64;
            ++UJ;
            const qJ = UJ < JJ.length ? ZJ[JJ.charAt(UJ)] : 64;
            if (++UJ, null == cJ || null == XJ || null == AJ || null == qJ) throw new eJ;
            const jJ = cJ << 2 | XJ >> 4;
            if (FJ.push(jJ), 64 !== AJ) {
              const JJ = XJ << 4 & 240 | AJ >> 2;
              if (FJ.push(JJ), 64 !== qJ) {
                const JJ = AJ << 6 & 192 | qJ;
                FJ.push(JJ)
              }
            }
          }
          return FJ
        },
        init_() {
          if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
            for (let JJ = 0; JJ < this.ENCODED_VALS.length; JJ++) this.byteToCharMap_[JJ] = this.ENCODED_VALS.charAt(JJ), this.charToByteMap_[this.byteToCharMap_[JJ]] = JJ, this.byteToCharMapWebSafe_[JJ] = this.ENCODED_VALS_WEBSAFE.charAt(JJ), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[JJ]] = JJ, JJ >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(JJ)] = JJ, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(JJ)] = JJ)
          }
        }
      };
    class eJ extends Error {
      constructor() {
        super(...arguments), this.name = "DecodeBase64StringError"
      }
    }
    const XJ = function(JJ) {
        return function(JJ) {
          const cJ = FJ(JJ);
          return UJ.encodeByteArray(cJ, !0)
        }(JJ).replace(/\./g, "")
      },
      AJ = function(JJ) {
        try {
          return UJ.decodeString(JJ, !0)
        } catch (cJ) {
          console.error("base64Decode failed: ", cJ)
        }
        return null
      };
    const qJ = () => function() {
        if ("undefined" !== typeof self) return self;
        if ("undefined" !== typeof window) return window;
        if ("undefined" !== typeof ZJ.g) return ZJ.g;
        throw new Error("Unable to locate global object.")
      }().__FIREBASE_DEFAULTS__,
      jJ = () => {
        try {
          return qJ() || (() => {
            if ("undefined" === typeof process) return
          })() || (() => {
            if ("undefined" === typeof document) return;
            let JJ;
            try {
              JJ = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)
            } catch (ZJ) {
              return
            }
            const cJ = JJ && AJ(JJ[1]);
            return cJ && JSON.parse(cJ)
          })()
        } catch (JJ) {
          return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${JJ}`)
        }
      },
      YJ = JJ => {
        var cJ, ZJ;
        return null === (ZJ = null === (cJ = jJ()) || void 0 === cJ ? void 0 : cJ.emulatorHosts) || void 0 === ZJ ? void 0 : ZJ[JJ]
      },
      hJ = () => {
        var JJ;
        return null === (JJ = jJ()) || void 0 === JJ ? void 0 : JJ.config
      },
      DJ = JJ => {
        var cJ;
        return null === (cJ = jJ()) || void 0 === cJ ? void 0 : cJ[`_${JJ}`]
      };
    class sJ {
      constructor() {
        this.reject = () => {}, this.resolve = () => {}, this.promise = new Promise(((JJ, cJ) => {
          this.resolve = JJ, this.reject = cJ
        }))
      }
      wrapCallback(JJ) {
        return (cJ, ZJ) => {
          cJ ? this.reject(cJ) : this.resolve(ZJ), "function" === typeof JJ && (this.promise.catch((() => {})), 1 === JJ.length ? JJ(cJ) : JJ(cJ, ZJ))
        }
      }
    }

    function nJ() {
      return "undefined" !== typeof navigator && "string" === typeof navigator.userAgent ? navigator.userAgent : ""
    }

    function GJ() {
      return "undefined" !== typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nJ())
    }

    function fJ() {
      const JJ = "object" === typeof chrome ? chrome.runtime : "object" === typeof browser ? browser.runtime : void 0;
      return "object" === typeof JJ && void 0 !== JJ.id
    }

    function xJ() {
      return "object" === typeof navigator && "ReactNative" === navigator.product
    }

    function rJ() {
      const JJ = nJ();
      return JJ.indexOf("MSIE ") >= 0 || JJ.indexOf("Trident/") >= 0
    }

    function vJ() {
      try {
        return "object" === typeof indexedDB
      } catch (JJ) {
        return !1
      }
    }

    function mJ() {
      return new Promise(((JJ, cJ) => {
        try {
          let ZJ = !0;
          const FJ = "validate-browser-context-for-indexeddb-analytics-module",
            UJ = self.indexedDB.open(FJ);
          UJ.onsuccess = () => {
            UJ.result.close(), ZJ || self.indexedDB.deleteDatabase(FJ), JJ(!0)
          }, UJ.onupgradeneeded = () => {
            ZJ = !1
          }, UJ.onerror = () => {
            var JJ;
            cJ((null === (JJ = UJ.error) || void 0 === JJ ? void 0 : JJ.message) || "")
          }
        } catch (ZJ) {
          cJ(ZJ)
        }
      }))
    }

    function QJ() {
      return !("undefined" === typeof navigator || !navigator.cookieEnabled)
    }
    class EJ extends Error {
      constructor(JJ, cJ, ZJ) {
        super(cJ), this.code = JJ, this.customData = ZJ, this.name = "FirebaseError", Object.setPrototypeOf(this, EJ.prototype), Error.captureStackTrace && Error.captureStackTrace(this, VJ.prototype.create)
      }
    }
    class VJ {
      constructor(JJ, cJ, ZJ) {
        this.service = JJ, this.serviceName = cJ, this.errors = ZJ
      }
      create(JJ) {
        const cJ = (arguments.length <= 1 ? void 0 : arguments[1]) || {},
          ZJ = `${this.service}/${JJ}`,
          FJ = this.errors[JJ],
          UJ = FJ ? function(JJ, cJ) {
            return JJ.replace(KJ, ((JJ, ZJ) => {
              const FJ = cJ[ZJ];
              return null != FJ ? String(FJ) : `<${ZJ}?>`
            }))
          }(FJ, cJ) : "Error",
          eJ = `${this.serviceName}: ${UJ} (${ZJ}).`;
        return new EJ(ZJ, eJ, cJ)
      }
    }
    const KJ = /\{\$([^}]+)}/g;

    function yJ(JJ) {
      for (const cJ in JJ)
        if (Object.prototype.hasOwnProperty.call(JJ, cJ)) return !1;
      return !0
    }

    function SJ(JJ, cJ) {
      if (JJ === cJ) return !0;
      const ZJ = Object.keys(JJ),
        FJ = Object.keys(cJ);
      for (const UJ of ZJ) {
        if (!FJ.includes(UJ)) return !1;
        const ZJ = JJ[UJ],
          eJ = cJ[UJ];
        if (IJ(ZJ) && IJ(eJ)) {
          if (!SJ(ZJ, eJ)) return !1
        } else if (ZJ !== eJ) return !1
      }
      for (const UJ of FJ)
        if (!ZJ.includes(UJ)) return !1;
      return !0
    }

    function IJ(JJ) {
      return null !== JJ && "object" === typeof JJ
    }

    function MJ(JJ) {
      const cJ = [];
      for (const [ZJ, FJ] of Object.entries(JJ)) Array.isArray(FJ) ? FJ.forEach((JJ => {
        cJ.push(encodeURIComponent(ZJ) + "=" + encodeURIComponent(JJ))
      })) : cJ.push(encodeURIComponent(ZJ) + "=" + encodeURIComponent(FJ));
      return cJ.length ? "&" + cJ.join("&") : ""
    }

    function bJ(JJ) {
      const cJ = {};
      return JJ.replace(/^\?/, "").split("&").forEach((JJ => {
        if (JJ) {
          const [ZJ, FJ] = JJ.split("=");
          cJ[decodeURIComponent(ZJ)] = decodeURIComponent(FJ)
        }
      })), cJ
    }

    function wJ(JJ) {
      const cJ = JJ.indexOf("?");
      if (!cJ) return "";
      const ZJ = JJ.indexOf("#", cJ);
      return JJ.substring(cJ, ZJ > 0 ? ZJ : void 0)
    }

    function WJ(JJ, cJ) {
      const ZJ = new gJ(JJ, cJ);
      return ZJ.subscribe.bind(ZJ)
    }
    class gJ {
      constructor(JJ, cJ) {
        this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = cJ, this.task.then((() => {
          JJ(this)
        })).catch((JJ => {
          this.error(JJ)
        }))
      }
      next(JJ) {
        this.forEachObserver((cJ => {
          cJ.next(JJ)
        }))
      }
      error(JJ) {
        this.forEachObserver((cJ => {
          cJ.error(JJ)
        })), this.close(JJ)
      }
      complete() {
        this.forEachObserver((JJ => {
          JJ.complete()
        })), this.close()
      }
      subscribe(JJ, cJ, ZJ) {
        let FJ;
        if (void 0 === JJ && void 0 === cJ && void 0 === ZJ) throw new Error("Missing Observer.");
        FJ = function(JJ, cJ) {
          if ("object" !== typeof JJ || null === JJ) return !1;
          for (const ZJ of cJ)
            if (ZJ in JJ && "function" === typeof JJ[ZJ]) return !0;
          return !1
        }(JJ, ["next", "error", "complete"]) ? JJ : {
          next: JJ,
          error: cJ,
          complete: ZJ
        }, void 0 === FJ.next && (FJ.next = HJ), void 0 === FJ.error && (FJ.error = HJ), void 0 === FJ.complete && (FJ.complete = HJ);
        const UJ = this.unsubscribeOne.bind(this, this.observers.length);
        return this.finalized && this.task.then((() => {
          try {
            this.finalError ? FJ.error(this.finalError) : FJ.complete()
          } catch (JJ) {}
        })), this.observers.push(FJ), UJ
      }
      unsubscribeOne(JJ) {
        void 0 !== this.observers && void 0 !== this.observers[JJ] && (delete this.observers[JJ], this.observerCount -= 1, 0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this))
      }
      forEachObserver(JJ) {
        if (!this.finalized)
          for (let cJ = 0; cJ < this.observers.length; cJ++) this.sendOne(cJ, JJ)
      }
      sendOne(JJ, cJ) {
        this.task.then((() => {
          if (void 0 !== this.observers && void 0 !== this.observers[JJ]) try {
            cJ(this.observers[JJ])
          } catch (ZJ) {
            "undefined" !== typeof console && console.error && console.error(ZJ)
          }
        }))
      }
      close(JJ) {
        this.finalized || (this.finalized = !0, void 0 !== JJ && (this.finalError = JJ), this.task.then((() => {
          this.observers = void 0, this.onNoObservers = void 0
        })))
      }
    }

    function HJ() {}
    const PJ = 1e3,
      kJ = 2,
      pJ = 144e5,
      dJ = .5;

    function zJ(JJ) {
      let cJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : kJ;
      const ZJ = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : PJ) * Math.pow(cJ, JJ),
        FJ = Math.round(dJ * ZJ * (Math.random() - .5) * 2);
      return Math.min(pJ, ZJ + FJ)
    }

    function NJ(JJ) {
      return JJ && JJ._delegate ? JJ._delegate : JJ
    }
  },
  39268: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => eJ.h,
      h: () => hc,
      j: () => oJ,
      m: () => Zc,
      p: () => Fc,
      s: () => Jc,
      w: () => Ac,
      x: () => cc,
      A: () => ec,
      C: () => Uc,
      F: () => Xc,
      H: () => Gc,
      M: () => sc,
      L: () => nc,
      P: () => Dc,
      S: () => xc,
      U: () => fc,
      V: () => rc
    });
    var FJ = ZJ(39275),
      UJ = ZJ(39284),
      eJ = ZJ(39279);
    let XJ, AJ;
    const qJ = new WeakMap,
      jJ = new WeakMap,
      YJ = new WeakMap,
      hJ = new WeakMap,
      DJ = new WeakMap;
    let sJ = {
      get(JJ, cJ, ZJ) {
        if (JJ instanceof IDBTransaction) {
          if ("done" === cJ) return jJ.get(JJ);
          if ("objectStoreNames" === cJ) return JJ.objectStoreNames || YJ.get(JJ);
          if ("store" === cJ) return ZJ.objectStoreNames[1] ? void 0 : ZJ.objectStore(ZJ.objectStoreNames[0])
        }
        return fJ(JJ[cJ])
      },
      set: (JJ, cJ, ZJ) => (JJ[cJ] = ZJ, !0),
      has: (JJ, cJ) => JJ instanceof IDBTransaction && ("done" === cJ || "store" === cJ) || cJ in JJ
    };

    function nJ(JJ) {
      return JJ !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (AJ || (AJ = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(JJ) ? function() {
        for (var cJ = arguments.length, ZJ = new Array(cJ), FJ = 0; FJ < cJ; FJ++) ZJ[FJ] = arguments[FJ];
        return JJ.apply(xJ(this), ZJ), fJ(qJ.get(this))
      } : function() {
        for (var cJ = arguments.length, ZJ = new Array(cJ), FJ = 0; FJ < cJ; FJ++) ZJ[FJ] = arguments[FJ];
        return fJ(JJ.apply(xJ(this), ZJ))
      } : function(cJ) {
        for (var ZJ = arguments.length, FJ = new Array(ZJ > 1 ? ZJ - 1 : 0), UJ = 1; UJ < ZJ; UJ++) FJ[UJ - 1] = arguments[UJ];
        const eJ = JJ.call(xJ(this), cJ, ...FJ);
        return YJ.set(eJ, cJ.sort ? cJ.sort() : [cJ]), fJ(eJ)
      }
    }

    function GJ(JJ) {
      return "function" === typeof JJ ? nJ(JJ) : (JJ instanceof IDBTransaction && function(JJ) {
        if (jJ.has(JJ)) return;
        const cJ = new Promise(((cJ, ZJ) => {
          const FJ = () => {
              JJ.removeEventListener("complete", UJ), JJ.removeEventListener("error", eJ), JJ.removeEventListener("abort", eJ)
            },
            UJ = () => {
              cJ(), FJ()
            },
            eJ = () => {
              ZJ(JJ.error || new DOMException("AbortError", "AbortError")), FJ()
            };
          JJ.addEventListener("complete", UJ), JJ.addEventListener("error", eJ), JJ.addEventListener("abort", eJ)
        }));
        jJ.set(JJ, cJ)
      }(JJ), cJ = JJ, (XJ || (XJ = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((JJ => cJ instanceof JJ)) ? new Proxy(JJ, sJ) : JJ);
      var cJ
    }

    function fJ(JJ) {
      if (JJ instanceof IDBRequest) return function(JJ) {
        const cJ = new Promise(((cJ, ZJ) => {
          const FJ = () => {
              JJ.removeEventListener("success", UJ), JJ.removeEventListener("error", eJ)
            },
            UJ = () => {
              cJ(fJ(JJ.result)), FJ()
            },
            eJ = () => {
              ZJ(JJ.error), FJ()
            };
          JJ.addEventListener("success", UJ), JJ.addEventListener("error", eJ)
        }));
        return cJ.then((cJ => {
          cJ instanceof IDBCursor && qJ.set(cJ, JJ)
        })).catch((() => {})), DJ.set(cJ, JJ), cJ
      }(JJ);
      if (hJ.has(JJ)) return hJ.get(JJ);
      const cJ = GJ(JJ);
      return cJ !== JJ && (hJ.set(JJ, cJ), DJ.set(cJ, JJ)), cJ
    }
    const xJ = JJ => DJ.get(JJ);
    const rJ = ["get", "getKey", "getAll", "getAllKeys", "count"],
      vJ = ["put", "add", "delete", "clear"],
      mJ = new Map;

    function QJ(JJ, cJ) {
      if (!(JJ instanceof IDBDatabase) || cJ in JJ || "string" !== typeof cJ) return;
      if (mJ.get(cJ)) return mJ.get(cJ);
      const ZJ = cJ.replace(/FromIndex$/, ""),
        FJ = cJ !== ZJ,
        UJ = vJ.includes(ZJ);
      if (!(ZJ in (FJ ? IDBIndex : IDBObjectStore).prototype) || !UJ && !rJ.includes(ZJ)) return;
      const eJ = async function(JJ) {
        const cJ = this.transaction(JJ, UJ ? "readwrite" : "readonly");
        let eJ = cJ.store;
        for (var XJ = arguments.length, AJ = new Array(XJ > 1 ? XJ - 1 : 0), qJ = 1; qJ < XJ; qJ++) AJ[qJ - 1] = arguments[qJ];
        return FJ && (eJ = eJ.index(AJ.shift())), (await Promise.all([eJ[ZJ](...AJ), UJ && cJ.done]))[0]
      };
      return mJ.set(cJ, eJ), eJ
    }
    sJ = (JJ => ({
      ...JJ,
      get: (cJ, ZJ, FJ) => QJ(cJ, ZJ) || JJ.get(cJ, ZJ, FJ),
      has: (cJ, ZJ) => !!QJ(cJ, ZJ) || JJ.has(cJ, ZJ)
    }))(sJ);
    class EJ {
      constructor(JJ) {
        this.container = JJ
      }
      getPlatformInfoString() {
        return this.container.getProviders().map((JJ => {
          if (function(JJ) {
              const cJ = JJ.getComponent();
              return "VERSION" === (null === cJ || void 0 === cJ ? void 0 : cJ.type)
            }(JJ)) {
            const cJ = JJ.getImmediate();
            return `${cJ.library}/${cJ.version}`
          }
          return null
        })).filter((JJ => JJ)).join(" ")
      }
    }
    const VJ = "@firebase/app",
      KJ = "0.9.13",
      yJ = new UJ.e("@firebase/app"),
      SJ = "@firebase/app-compat",
      IJ = "@firebase/analytics-compat",
      MJ = "@firebase/analytics",
      bJ = "@firebase/app-check-compat",
      wJ = "@firebase/app-check",
      WJ = "@firebase/auth",
      gJ = "@firebase/auth-compat",
      HJ = "@firebase/database",
      PJ = "@firebase/database-compat",
      kJ = "@firebase/functions",
      pJ = "@firebase/functions-compat",
      dJ = "@firebase/installations",
      zJ = "@firebase/installations-compat",
      NJ = "@firebase/messaging",
      OJ = "@firebase/messaging-compat",
      TJ = "@firebase/performance",
      CJ = "@firebase/performance-compat",
      uJ = "@firebase/remote-config",
      iJ = "@firebase/remote-config-compat",
      RJ = "@firebase/storage",
      LJ = "@firebase/storage-compat",
      aJ = "@firebase/firestore",
      BJ = "@firebase/firestore-compat",
      tJ = "firebase",
      oJ = "[DEFAULT]",
      lJ = {
        [VJ]: "fire-core",
        [SJ]: "fire-core-compat",
        [MJ]: "fire-analytics",
        [IJ]: "fire-analytics-compat",
        [wJ]: "fire-app-check",
        [bJ]: "fire-app-check-compat",
        [WJ]: "fire-auth",
        [gJ]: "fire-auth-compat",
        [HJ]: "fire-rtdb",
        [PJ]: "fire-rtdb-compat",
        [kJ]: "fire-fn",
        [pJ]: "fire-fn-compat",
        [dJ]: "fire-iid",
        [zJ]: "fire-iid-compat",
        [NJ]: "fire-fcm",
        [OJ]: "fire-fcm-compat",
        [TJ]: "fire-perf",
        [CJ]: "fire-perf-compat",
        [uJ]: "fire-rc",
        [iJ]: "fire-rc-compat",
        [RJ]: "fire-gcs",
        [LJ]: "fire-gcs-compat",
        [aJ]: "fire-fst",
        [BJ]: "fire-fst-compat",
        "fire-js": "fire-js",
        [tJ]: "fire-js-all"
      },
      Jc = new Map,
      cc = new Map;

    function Zc(JJ, cJ) {
      try {
        JJ.container.xI(cJ)
      } catch (ZJ) {
        yJ.debug(`Component ${cJ.name} failed to register with FirebaseApp ${JJ.name}`, ZJ)
      }
    }

    function Fc(JJ, cJ) {
      JJ.container.addOrOverwriteComponent(cJ)
    }

    function Uc(JJ) {
      const cJ = JJ.name;
      if (cc.has(cJ)) return yJ.debug(`There were multiple attempts to register component ${cJ}.`), !1;
      cc.set(cJ, JJ);
      for (const ZJ of Jc.values()) Zc(ZJ, JJ);
      return !0
    }

    function ec(JJ, cJ) {
      const ZJ = JJ.container.getProvider("heartbeat").getImmediate({
        optional: !0
      });
      return ZJ && ZJ.triggerHeartbeat(), JJ.container.getProvider(cJ)
    }

    function Xc(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : oJ;
      ec(JJ, cJ).clearInstance(ZJ)
    }

    function Ac() {
      cc.clear()
    }
    const qc = {
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
      jc = new eJ.d("app", "Firebase", qc);
    class Yc {
      constructor(JJ, cJ, ZJ) {
        this._isDeleted = !1, this._options = Object.assign({}, JJ), this._config = Object.assign({}, cJ), this._name = cJ.name, this._automaticDataCollectionEnabled = cJ.automaticDataCollectionEnabled, this._container = ZJ, this.container.xI(new FJ.c("app", (() => this), "PUBLIC"))
      }
      get automaticDataCollectionEnabled() {
        return this.checkDestroyed(), this._automaticDataCollectionEnabled
      }
      set automaticDataCollectionEnabled(JJ) {
        this.checkDestroyed(), this._automaticDataCollectionEnabled = JJ
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
      set isDeleted(JJ) {
        this._isDeleted = JJ
      }
      checkDestroyed() {
        if (this.isDeleted) throw jc.create("app-deleted", {
          appName: this._name
        })
      }
    }
    const hc = "9.23.0";

    function Dc(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        ZJ = JJ;
      if ("object" !== typeof cJ) {
        cJ = {
          name: cJ
        }
      }
      const UJ = Object.assign({
          name: oJ,
          automaticDataCollectionEnabled: !1
        }, cJ),
        XJ = UJ.name;
      if ("string" !== typeof XJ || !XJ) throw jc.create("bad-app-name", {
        appName: String(XJ)
      });
      if (ZJ || (ZJ = (0, eJ.y)()), !ZJ) throw jc.create("no-options");
      const AJ = Jc.get(XJ);
      if (AJ) {
        if ((0, eJ.r)(ZJ, AJ.options) && (0, eJ.r)(UJ, AJ.config)) return AJ;
        throw jc.create("duplicate-app", {
          appName: XJ
        })
      }
      const qJ = new FJ.b(XJ);
      for (const FJ of cc.values()) qJ.xI(FJ);
      const jJ = new Yc(ZJ, UJ, qJ);
      return Jc.set(XJ, jJ), jJ
    }

    function sc() {
      let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oJ;
      const cJ = Jc.get(JJ);
      if (!cJ && JJ === oJ && (0, eJ.y)()) return Dc();
      if (!cJ) throw jc.create("no-app", {
        appName: JJ
      });
      return cJ
    }

    function nc() {
      return Array.from(Jc.values())
    }
    async function Gc(JJ) {
      const cJ = JJ.name;
      Jc.has(cJ) && (Jc.delete(cJ), await Promise.all(JJ.container.getProviders().map((JJ => JJ.delete()))), JJ.isDeleted = !0)
    }

    function fc(JJ, cJ, ZJ) {
      var UJ;
      let eJ = null !== (UJ = lJ[JJ]) && void 0 !== UJ ? UJ : JJ;
      ZJ && (eJ += `-${ZJ}`);
      const XJ = eJ.match(/\s|\//),
        AJ = cJ.match(/\s|\//);
      if (XJ || AJ) {
        const JJ = [`Unable to register library "${eJ}" with version "${cJ}":`];
        return XJ && JJ.push(`library name "${eJ}" contains illegal characters (whitespace or "/")`), XJ && AJ && JJ.push("and"), AJ && JJ.push(`version name "${cJ}" contains illegal characters (whitespace or "/")`), void yJ.warn(JJ.join(" "))
      }
      Uc(new FJ.c(`${eJ}-version`, (() => ({
        library: eJ,
        version: cJ
      })), "VERSION"))
    }

    function xc(JJ, cJ) {
      if (null !== JJ && "function" !== typeof JJ) throw jc.create("invalid-log-argument");
      (0, UJ.k)(JJ, cJ)
    }

    function rc(JJ) {
      (0, UJ.h)(JJ)
    }
    const vc = "firebase-heartbeat-store";
    let mc = null;

    function Qc() {
      return mc || (mc = function(JJ, cJ) {
        let {
          blocked: ZJ,
          upgrade: FJ,
          blocking: UJ,
          terminated: eJ
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const XJ = indexedDB.open(JJ, cJ),
          AJ = fJ(XJ);
        return FJ && XJ.addEventListener("upgradeneeded", (JJ => {
          FJ(fJ(XJ.result), JJ.oldVersion, JJ.newVersion, fJ(XJ.transaction), JJ)
        })), ZJ && XJ.addEventListener("blocked", (JJ => ZJ(JJ.oldVersion, JJ.newVersion, JJ))), AJ.then((JJ => {
          eJ && JJ.addEventListener("close", (() => eJ())), UJ && JJ.addEventListener("versionchange", (JJ => UJ(JJ.oldVersion, JJ.newVersion, JJ)))
        })).catch((() => {})), AJ
      }("firebase-heartbeat-database", 1, {
        upgrade: (JJ, cJ) => {
          if (0 === cJ) JJ.createObjectStore(vc)
        }
      }).catch((JJ => {
        throw jc.create("idb-open", {
          originalErrorMessage: JJ.message
        })
      }))), mc
    }
    async function Ec(JJ, cJ) {
      try {
        const ZJ = (await Qc()).transaction(vc, "readwrite"),
          FJ = ZJ.objectStore(vc);
        await FJ.put(cJ, Vc(JJ)), await ZJ.done
      } catch (ZJ) {
        if (ZJ instanceof eJ.h) yJ.warn(ZJ.message);
        else {
          const JJ = jc.create("idb-set", {
            originalErrorMessage: null === ZJ || void 0 === ZJ ? void 0 : ZJ.message
          });
          yJ.warn(JJ.message)
        }
      }
    }

    function Vc(JJ) {
      return `${JJ.name}!${JJ.options.appId}`
    }
    class Kc {
      constructor(JJ) {
        this.container = JJ, this._heartbeatsCache = null;
        const cJ = this.container.getProvider("app").getImmediate();
        this.VG = new Sc(cJ), this._heartbeatsCachePromise = this.VG.read().then((JJ => (this._heartbeatsCache = JJ, JJ)))
      }
      async triggerHeartbeat() {
        const JJ = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),
          cJ = yc();
        if (null === this._heartbeatsCache && (this._heartbeatsCache = await this._heartbeatsCachePromise), this._heartbeatsCache.lastSentHeartbeatDate !== cJ && !this._heartbeatsCache.heartbeats.some((JJ => JJ.date === cJ))) return this._heartbeatsCache.heartbeats.push({
          date: cJ,
          agent: JJ
        }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((JJ => {
          const cJ = new Date(JJ.date).valueOf();
          return Date.now() - cJ <= 2592e6
        })), this.VG.overwrite(this._heartbeatsCache)
      }
      async getHeartbeatsHeader() {
        if (null === this._heartbeatsCache && await this._heartbeatsCachePromise, null === this._heartbeatsCache || 0 === this._heartbeatsCache.heartbeats.length) return "";
        const JJ = yc(),
          {
            heartbeatsToSend: cJ,
            unsentEntries: ZJ
          } = function(JJ) {
            let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1024;
            const ZJ = [];
            let FJ = JJ.slice();
            for (const UJ of JJ) {
              const JJ = ZJ.find((JJ => JJ.agent === UJ.agent));
              if (JJ) {
                if (JJ.dates.push(UJ.date), Ic(ZJ) > cJ) {
                  JJ.dates.pop();
                  break
                }
              } else if (ZJ.push({
                  agent: UJ.agent,
                  dates: [UJ.date]
                }), Ic(ZJ) > cJ) {
                ZJ.pop();
                break
              }
              FJ = FJ.slice(1)
            }
            return {
              heartbeatsToSend: ZJ,
              unsentEntries: FJ
            }
          }(this._heartbeatsCache.heartbeats),
          FJ = (0, eJ.m)(JSON.stringify({
            version: 2,
            heartbeats: cJ
          }));
        return this._heartbeatsCache.lastSentHeartbeatDate = JJ, ZJ.length > 0 ? (this._heartbeatsCache.heartbeats = ZJ, await this.VG.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this.VG.overwrite(this._heartbeatsCache)), FJ
      }
    }

    function yc() {
      return (new Date).toISOString().substring(0, 10)
    }
    class Sc {
      constructor(JJ) {
        this.app = JJ, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
      }
      async runIndexedDBEnvironmentCheck() {
        return !!(0, eJ.M)() && (0, eJ._)().then((() => !0)).catch((() => !1))
      }
      async read() {
        if (await this._canUseIndexedDBPromise) {
          return await async function(JJ) {
            try {
              const cJ = await Qc();
              return await cJ.transaction(vc).objectStore(vc).get(Vc(JJ))
            } catch (cJ) {
              if (cJ instanceof eJ.h) yJ.warn(cJ.message);
              else {
                const JJ = jc.create("idb-get", {
                  originalErrorMessage: null === cJ || void 0 === cJ ? void 0 : cJ.message
                });
                yJ.warn(JJ.message)
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
      async overwrite(JJ) {
        var cJ;
        if (await this._canUseIndexedDBPromise) {
          const ZJ = await this.read();
          return Ec(this.app, {
            lastSentHeartbeatDate: null !== (cJ = JJ.lastSentHeartbeatDate) && void 0 !== cJ ? cJ : ZJ.lastSentHeartbeatDate,
            heartbeats: JJ.heartbeats
          })
        }
      }
      async add(JJ) {
        var cJ;
        if (await this._canUseIndexedDBPromise) {
          const ZJ = await this.read();
          return Ec(this.app, {
            lastSentHeartbeatDate: null !== (cJ = JJ.lastSentHeartbeatDate) && void 0 !== cJ ? cJ : ZJ.lastSentHeartbeatDate,
            heartbeats: [...ZJ.heartbeats, ...JJ.heartbeats]
          })
        }
      }
    }

    function Ic(JJ) {
      return (0, eJ.m)(JSON.stringify({
        version: 2,
        heartbeats: JJ
      })).length
    }
    var Mc;
    Mc = "", Uc(new FJ.c("platform-logger", (JJ => new EJ(JJ)), "PRIVATE")), Uc(new FJ.c("heartbeat", (JJ => new Kc(JJ)), "PRIVATE")), fc(VJ, KJ, Mc), fc(VJ, KJ, "esm2017"), fc("fire-js", "")
  },
  39275: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => AJ,
      c: () => UJ
    });
    var FJ = ZJ(39279);
    class UJ {
      constructor(JJ, cJ, ZJ) {
        this.name = JJ, this.instanceFactory = cJ, this.type = ZJ, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
      }
      setInstantiationMode(JJ) {
        return this.instantiationMode = JJ, this
      }
      setMultipleInstances(JJ) {
        return this.multipleInstances = JJ, this
      }
      setServiceProps(JJ) {
        return this.serviceProps = JJ, this
      }
      setInstanceCreatedCallback(JJ) {
        return this.onInstanceCreated = JJ, this
      }
    }
    const eJ = "[DEFAULT]";
    class XJ {
      constructor(JJ, cJ) {
        this.name = JJ, this.container = cJ, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map
      }
      get(JJ) {
        const cJ = this.normalizeInstanceIdentifier(JJ);
        if (!this.instancesDeferred.has(cJ)) {
          const JJ = new FJ.b;
          if (this.instancesDeferred.set(cJ, JJ), this.isInitialized(cJ) || this.shouldAutoInitialize()) try {
            const ZJ = this.getOrInitializeService({
              instanceIdentifier: cJ
            });
            ZJ && JJ.resolve(ZJ)
          } catch (ZJ) {}
        }
        return this.instancesDeferred.get(cJ).promise
      }
      getImmediate(JJ) {
        var cJ;
        const ZJ = this.normalizeInstanceIdentifier(null === JJ || void 0 === JJ ? void 0 : JJ.identifier),
          FJ = null !== (cJ = null === JJ || void 0 === JJ ? void 0 : JJ.optional) && void 0 !== cJ && cJ;
        if (!this.isInitialized(ZJ) && !this.shouldAutoInitialize()) {
          if (FJ) return null;
          throw Error(`Service ${this.name} is not available`)
        }
        try {
          return this.getOrInitializeService({
            instanceIdentifier: ZJ
          })
        } catch (UJ) {
          if (FJ) return null;
          throw UJ
        }
      }
      getComponent() {
        return this.component
      }
      setComponent(JJ) {
        if (JJ.name !== this.name) throw Error(`Mismatching Component ${JJ.name} for Provider ${this.name}.`);
        if (this.component) throw Error(`Component for ${this.name} has already been provided`);
        if (this.component = JJ, this.shouldAutoInitialize()) {
          if (function(JJ) {
              return "EAGER" === JJ.instantiationMode
            }(JJ)) try {
            this.getOrInitializeService({
              instanceIdentifier: eJ
            })
          } catch (cJ) {}
          for (const [JJ, ZJ] of this.instancesDeferred.entries()) {
            const FJ = this.normalizeInstanceIdentifier(JJ);
            try {
              const JJ = this.getOrInitializeService({
                instanceIdentifier: FJ
              });
              ZJ.resolve(JJ)
            } catch (cJ) {}
          }
        }
      }
      clearInstance() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eJ;
        this.instancesDeferred.delete(JJ), this.instancesOptions.delete(JJ), this.instances.delete(JJ)
      }
      async delete() {
        const JJ = Array.from(this.instances.values());
        await Promise.all([...JJ.filter((JJ => "INTERNAL" in JJ)).map((JJ => JJ.INTERNAL.delete())), ...JJ.filter((JJ => "_delete" in JJ)).map((JJ => JJ._delete()))])
      }
      isComponentSet() {
        return null != this.component
      }
      isInitialized() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eJ;
        return this.instances.has(JJ)
      }
      getOptions() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eJ;
        return this.instancesOptions.get(JJ) || {}
      }
      initialize() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const {
          options: cJ = {}
        } = JJ, ZJ = this.normalizeInstanceIdentifier(JJ.instanceIdentifier);
        if (this.isInitialized(ZJ)) throw Error(`${this.name}(${ZJ}) has already been initialized`);
        if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
        const FJ = this.getOrInitializeService({
          instanceIdentifier: ZJ,
          options: cJ
        });
        for (const [UJ, eJ] of this.instancesDeferred.entries()) {
          ZJ === this.normalizeInstanceIdentifier(UJ) && eJ.resolve(FJ)
        }
        return FJ
      }
      fW(JJ, cJ) {
        var ZJ;
        const FJ = this.normalizeInstanceIdentifier(cJ),
          UJ = null !== (ZJ = this.onInitCallbacks.get(FJ)) && void 0 !== ZJ ? ZJ : new Set;
        UJ.add(JJ), this.onInitCallbacks.set(FJ, UJ);
        const eJ = this.instances.get(FJ);
        return eJ && JJ(eJ, FJ), () => {
          UJ.delete(JJ)
        }
      }
      invokeOnInitCallbacks(JJ, cJ) {
        const ZJ = this.onInitCallbacks.get(cJ);
        if (ZJ)
          for (const UJ of ZJ) try {
            UJ(JJ, cJ)
          } catch (FJ) {}
      }
      getOrInitializeService(JJ) {
        let {
          instanceIdentifier: cJ,
          options: ZJ = {}
        } = JJ, FJ = this.instances.get(cJ);
        if (!FJ && this.component && (FJ = this.component.instanceFactory(this.container, {
            instanceIdentifier: (UJ = cJ, UJ === eJ ? void 0 : UJ),
            options: ZJ
          }), this.instances.set(cJ, FJ), this.instancesOptions.set(cJ, ZJ), this.invokeOnInitCallbacks(FJ, cJ), this.component.onInstanceCreated)) try {
          this.component.onInstanceCreated(this.container, cJ, FJ)
        } catch (XJ) {}
        var UJ;
        return FJ || null
      }
      normalizeInstanceIdentifier() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eJ;
        return this.component ? this.component.multipleInstances ? JJ : eJ : JJ
      }
      shouldAutoInitialize() {
        return !!this.component && "EXPLICIT" !== this.component.instantiationMode
      }
    }
    class AJ {
      constructor(JJ) {
        this.name = JJ, this.providers = new Map
      }
      xI(JJ) {
        const cJ = this.getProvider(JJ.name);
        if (cJ.isComponentSet()) throw new Error(`Component ${JJ.name} has already been registered with ${this.name}`);
        cJ.setComponent(JJ)
      }
      addOrOverwriteComponent(JJ) {
        this.getProvider(JJ.name).isComponentSet() && this.providers.delete(JJ.name), this.xI(JJ)
      }
      getProvider(JJ) {
        if (this.providers.has(JJ)) return this.providers.get(JJ);
        const cJ = new XJ(JJ, this);
        return this.providers.set(JJ, cJ), cJ
      }
      getProviders() {
        return Array.from(this.providers.values())
      }
    }
  },
  39284: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => UJ,
      e: () => jJ,
      h: () => YJ,
      k: () => hJ
    });
    const FJ = [];
    var UJ;
    ! function(JJ) {
      JJ[JJ.DEBUG = 0] = "DEBUG", JJ[JJ.VERBOSE = 1] = "VERBOSE", JJ[JJ.INFO = 2] = "INFO", JJ[JJ.WARN = 3] = "WARN", JJ[JJ.ERROR = 4] = "ERROR", JJ[JJ.SILENT = 5] = "SILENT"
    }(UJ || (UJ = {}));
    const eJ = {
        debug: UJ.DEBUG,
        verbose: UJ.VERBOSE,
        info: UJ.INFO,
        warn: UJ.WARN,
        error: UJ.ERROR,
        silent: UJ.SILENT
      },
      XJ = UJ.INFO,
      AJ = {
        [UJ.DEBUG]: "log",
        [UJ.VERBOSE]: "log",
        [UJ.INFO]: "info",
        [UJ.WARN]: "warn",
        [UJ.ERROR]: "error"
      },
      qJ = function(JJ, cJ) {
        if (cJ < JJ.logLevel) return;
        const ZJ = (new Date).toISOString(),
          FJ = AJ[cJ];
        if (!FJ) throw new Error(`Attempted to log a message with an invalid logType (value: ${cJ})`);
        for (var UJ = arguments.length, eJ = new Array(UJ > 2 ? UJ - 2 : 0), XJ = 2; XJ < UJ; XJ++) eJ[XJ - 2] = arguments[XJ];
        console[FJ](`[${ZJ}]  ${JJ.name}:`, ...eJ)
      };
    class jJ {
      constructor(JJ) {
        this.name = JJ, this._logLevel = XJ, this._logHandler = qJ, this._userLogHandler = null, FJ.push(this)
      }
      get logLevel() {
        return this._logLevel
      }
      set logLevel(JJ) {
        if (!(JJ in UJ)) throw new TypeError(`Invalid value "${JJ}" assigned to \`logLevel\``);
        this._logLevel = JJ
      }
      setLogLevel(JJ) {
        this._logLevel = "string" === typeof JJ ? eJ[JJ] : JJ
      }
      get logHandler() {
        return this._logHandler
      }
      set logHandler(JJ) {
        if ("function" !== typeof JJ) throw new TypeError("Value assigned to `logHandler` must be a function");
        this._logHandler = JJ
      }
      get userLogHandler() {
        return this._userLogHandler
      }
      set userLogHandler(JJ) {
        this._userLogHandler = JJ
      }
      debug() {
        for (var JJ = arguments.length, cJ = new Array(JJ), ZJ = 0; ZJ < JJ; ZJ++) cJ[ZJ] = arguments[ZJ];
        this._userLogHandler && this._userLogHandler(this, UJ.DEBUG, ...cJ), this._logHandler(this, UJ.DEBUG, ...cJ)
      }
      log() {
        for (var JJ = arguments.length, cJ = new Array(JJ), ZJ = 0; ZJ < JJ; ZJ++) cJ[ZJ] = arguments[ZJ];
        this._userLogHandler && this._userLogHandler(this, UJ.VERBOSE, ...cJ), this._logHandler(this, UJ.VERBOSE, ...cJ)
      }
      info() {
        for (var JJ = arguments.length, cJ = new Array(JJ), ZJ = 0; ZJ < JJ; ZJ++) cJ[ZJ] = arguments[ZJ];
        this._userLogHandler && this._userLogHandler(this, UJ.INFO, ...cJ), this._logHandler(this, UJ.INFO, ...cJ)
      }
      warn() {
        for (var JJ = arguments.length, cJ = new Array(JJ), ZJ = 0; ZJ < JJ; ZJ++) cJ[ZJ] = arguments[ZJ];
        this._userLogHandler && this._userLogHandler(this, UJ.WARN, ...cJ), this._logHandler(this, UJ.WARN, ...cJ)
      }
      error() {
        for (var JJ = arguments.length, cJ = new Array(JJ), ZJ = 0; ZJ < JJ; ZJ++) cJ[ZJ] = arguments[ZJ];
        this._userLogHandler && this._userLogHandler(this, UJ.ERROR, ...cJ), this._logHandler(this, UJ.ERROR, ...cJ)
      }
    }

    function YJ(JJ) {
      FJ.forEach((cJ => {
        cJ.setLogLevel(JJ)
      }))
    }

    function hJ(JJ, cJ) {
      for (const ZJ of FJ) {
        let FJ = null;
        cJ && cJ.level && (FJ = eJ[cJ.level]), ZJ.userLogHandler = null === JJ ? null : function(cJ, ZJ) {
          for (var eJ = arguments.length, XJ = new Array(eJ > 2 ? eJ - 2 : 0), AJ = 2; AJ < eJ; AJ++) XJ[AJ - 2] = arguments[AJ];
          const qJ = XJ.map((JJ => {
            if (null == JJ) return null;
            if ("string" === typeof JJ) return JJ;
            if ("number" === typeof JJ || "boolean" === typeof JJ) return JJ.toString();
            if (JJ instanceof Error) return JJ.message;
            try {
              return JSON.stringify(JJ)
            } catch (cJ) {
              return null
            }
          })).filter((JJ => JJ)).join(" ");
          ZJ >= (null !== FJ && void 0 !== FJ ? FJ : cJ.logLevel) && JJ({
            level: UJ[ZJ].toLowerCase(),
            message: qJ,
            args: XJ,
            type: cJ.name
          })
        }
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);