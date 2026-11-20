export const id = 247;
export const ids = [247];
export const modules = {
  39732: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => KT
    });
    var lT = cT(38512),
      MT = cT(36949);
    class KT {
      static Instantiate(TT) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[TT]) return this.RegisteredExternalClasses[TT];
        const kT = (0, MT.e)(TT);
        if (kT) return kT;
        lT.e.Warn(TT + " not found, you may have missed an import.");
        const cT = TT.split(".");
        let KT = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
        for (let lT = 0, MT = cT.length; lT < MT; lT++) KT = KT[cT[lT]];
        return "function" !== typeof KT ? null : KT
      }
    }
    KT.RegisteredExternalClasses = {}
  },
  39521: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => MT
    });
    var lT = cT(39482);
    class MT {
      static get Now() {
        return (0, lT.i)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
      }
    }
  },
  39549: (TT, kT, cT) => {
    function lT(TT) {
      let kT = 1;
      do {
        kT *= 2
      } while (kT < TT);
      return kT === TT
    }

    function MT(TT, kT, cT) {
      return TT * (1 - cT) + kT * cT
    }

    function KT(TT) {
      const kT = OT(TT),
        cT = yT(TT);
      return kT - TT > TT - cT ? cT : kT
    }

    function OT(TT) {
      return TT--, TT |= TT >> 1, TT |= TT >> 2, TT |= TT >> 4, TT |= TT >> 8, TT |= TT >> 16, ++TT
    }

    function yT(TT) {
      return TT |= TT >> 1, TT |= TT >> 2, TT |= TT >> 4, TT |= TT >> 8, (TT |= TT >> 16) - (TT >> 1)
    }

    function fT(TT, kT) {
      let cT;
      switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
        case 1:
          cT = yT(TT);
          break;
        case 2:
          cT = KT(TT);
          break;
        default:
          cT = OT(TT)
      }
      return Math.min(cT, kT)
    }
    cT.d(kT, {
      b: () => yT,
      c: () => fT,
      g: () => lT,
      i: () => MT,
      j: () => KT
    })
  },
  39727: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => ST,
      g: () => aT,
      h: () => NT,
      i: () => QT
    });
    var lT, MT = cT(36932),
      KT = cT(39482),
      OT = cT(38512),
      yT = cT(38507),
      fT = cT(39521),
      xT = cT(39500),
      IT = cT(39675),
      AT = cT(36925),
      CT = cT(39666),
      jT = cT(39514),
      vT = cT(39732),
      tT = cT(37760),
      hT = cT(39549);
    class NT {
      static get BaseUrl() {
        return CT.c.BaseUrl
      }
      static set BaseUrl(TT) {
        CT.c.BaseUrl = TT
      }
      static get CleanUrl() {
        return CT.c.CleanUrl
      }
      static set CleanUrl(TT) {
        CT.c.CleanUrl = TT
      }
      static IsAbsoluteUrl(TT) {
        return 0 === TT.indexOf("//") || -1 !== TT.indexOf("://") && (-1 !== TT.indexOf(".") && (-1 !== TT.indexOf("/") && (!(TT.indexOf(":") > TT.indexOf("/")) && (TT.indexOf("://") < TT.indexOf(".") || (0 === TT.indexOf("data:") || 0 === TT.indexOf("blob:"))))))
      }
      static set ScriptBaseUrl(TT) {
        CT.c.ScriptBaseUrl = TT
      }
      static get ScriptBaseUrl() {
        return CT.c.ScriptBaseUrl
      }
      static set CDNBaseUrl(TT) {
        lT.ScriptBaseUrl = TT, lT.AssetBaseUrl = TT
      }
      static set ScriptPreprocessUrl(TT) {
        CT.c.ScriptPreprocessUrl = TT
      }
      static get ScriptPreprocessUrl() {
        return CT.c.ScriptPreprocessUrl
      }
      static get DefaultRetryStrategy() {
        return CT.c.DefaultRetryStrategy
      }
      static set DefaultRetryStrategy(TT) {
        CT.c.DefaultRetryStrategy = TT
      }
      static get CorsBehavior() {
        return CT.c.CorsBehavior
      }
      static set CorsBehavior(TT) {
        CT.c.CorsBehavior = TT
      }
      static get UseFallbackTexture() {
        return AT.d.UseFallbackTexture
      }
      static set UseFallbackTexture(TT) {
        AT.d.UseFallbackTexture = TT
      }
      static get RegisteredExternalClasses() {
        return vT.d.RegisteredExternalClasses
      }
      static set RegisteredExternalClasses(TT) {
        vT.d.RegisteredExternalClasses = TT
      }
      static get fallbackTexture() {
        return AT.d.FallbackTexture
      }
      static set fallbackTexture(TT) {
        AT.d.FallbackTexture = TT
      }
      static FetchToRef(TT, kT, cT, lT, MT, KT) {
        const OT = 4 * ((Math.abs(TT) * cT % cT | 0) + (Math.abs(kT) * lT % lT | 0) * cT);
        KT.r = MT[OT] / 255, KT.g = MT[OT + 1] / 255, KT.b = MT[OT + 2] / 255, KT.a = MT[OT + 3] / 255
      }
      static Mix(TT, kT, cT) {
        return 0
      }
      static Instantiate(TT) {
        return vT.d.Instantiate(TT)
      }
      static SetImmediate(TT) {
        jT.e.SetImmediate(TT)
      }
      static IsExponentOfTwo(TT) {
        return !0
      }
      static FloatRound(TT) {
        return Math.fround(TT)
      }
      static GetFilename(TT) {
        const kT = TT.lastIndexOf("/");
        return kT < 0 ? TT : TT.substring(kT + 1)
      }
      static GetFolderPath(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const cT = TT.lastIndexOf("/");
        return cT < 0 ? kT ? TT : "" : TT.substring(0, cT + 1)
      }
      static ToDegrees(TT) {
        return 180 * TT / Math.PI
      }
      static ToRadians(TT) {
        return TT * Math.PI / 180
      }
      static SmoothAngleChange(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
        const lT = this.ToRadians(TT),
          MT = this.ToRadians(kT);
        return this.ToDegrees(Math.atan2((1 - cT) * Math.sin(MT) + cT * Math.sin(lT), (1 - cT) * Math.cos(MT) + cT * Math.cos(lT)))
      }
      static MakeArray(TT, kT) {
        return !0 === kT || void 0 !== TT && null != TT ? Array.isArray(TT) ? TT : [TT] : null
      }
      static GetPointerPrefix(TT) {
        return (0, KT.i)() && !window.PointerEvent ? "mouse" : "pointer"
      }
      static SetCorsBehavior(TT, kT) {
        (0, CT.v)(TT, kT)
      }
      static SetReferrerPolicyBehavior(TT, kT) {
        kT.referrerPolicy = TT
      }
      static get PreprocessUrl() {
        return CT.c.PreprocessUrl
      }
      static set PreprocessUrl(TT) {
        CT.c.PreprocessUrl = TT
      }
      static LoadImage(TT, kT, cT, lT, MT, KT) {
        return (0, CT.o)(TT, kT, cT, lT, MT, KT)
      }
      static LoadFile(TT, kT, cT, lT, MT, KT) {
        return (0, CT.k)(TT, kT, cT, lT, MT, KT)
      }
      static async LoadFileAsync(TT) {
        let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return await new Promise(((cT, lT) => {
          (0, CT.k)(TT, (TT => {
            cT(TT)
          }), void 0, void 0, kT, ((TT, kT) => {
            lT(kT)
          }))
        }))
      }
      static GetAssetUrl(TT) {
        if (!TT) return "";
        if (lT.AssetBaseUrl && TT.startsWith(lT._DefaultAssetsUrl)) {
          const kT = lT.AssetBaseUrl.endsWith("/") ? lT.AssetBaseUrl.slice(0, -1) : lT.AssetBaseUrl;
          return TT.replace(lT._DefaultAssetsUrl, kT)
        }
        return TT
      }
      static GetBabylonScriptURL(TT, kT) {
        if (!TT) return "";
        if (TT.startsWith(lT._DefaultCdnUrl))
          if (lT.ScriptBaseUrl) {
            const kT = lT.ScriptBaseUrl.endsWith("/") ? lT.ScriptBaseUrl.slice(0, -1) : lT.ScriptBaseUrl;
            TT = TT.replace(lT._DefaultCdnUrl, kT)
          } else if (lT._CdnVersion) {
          const kT = `${lT._DefaultCdnUrl}/v${lT._CdnVersion}`;
          TT.startsWith(kT) || (TT = TT.replace(lT._DefaultCdnUrl, kT))
        }
        return TT = lT.ScriptPreprocessUrl(TT), kT && !lT.IsAbsoluteUrl(TT) && (TT = lT.GetAbsoluteUrl(TT)), TT
      }
      static LoadBabylonScript(TT, kT, cT, MT) {
        TT = lT.GetBabylonScriptURL(TT), lT.LoadScript(TT, kT, cT)
      }
      static async LoadBabylonScriptAsync(TT) {
        return TT = lT.GetBabylonScriptURL(TT), await lT.LoadScriptAsync(TT)
      }
      static _LoadScriptNative(TT, kT, cT, MT) {
        if (_native) {
          if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
            const TT = "Loading a script as an ES module is not supported in Babylon Native";
            return void cT?.(TT, new Error(TT))
          }
          lT.LoadFile(TT, (TT => {
            try {
              Function(TT).apply(null), kT && kT()
            } catch (lT) {
              cT && cT("LoadScript Error", lT)
            }
          }), void 0, void 0, !1, ((TT, kT) => {
            cT && cT("LoadScript Error", kT)
          }))
        }
      }
      static _LoadScriptWeb(TT, kT, cT, lT) {
        let MT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" === typeof importScripts) {
          try {
            importScripts(TT), kT && kT()
          } catch (fT) {
            cT?.(`Unable to load script '${TT}' in worker`, fT)
          }
          return
        }
        if (!(0, KT.i)()) return void cT?.(`Cannot load script '${TT}' outside of a window or a worker`);
        const OT = document.getElementsByTagName("head")[0],
          yT = document.createElement("script");
        MT ? (yT.setAttribute("type", "module"), yT.innerText = TT) : (yT.setAttribute("type", "text/javascript"), yT.setAttribute("src", TT)), lT && (yT.id = lT), yT.onload = () => {
          kT && kT()
        }, yT.onerror = kT => {
          cT && cT(`Unable to load script '${TT}'`, kT)
        }, OT.appendChild(yT)
      }
      static async LoadScriptAsync(TT, kT) {
        return await new Promise(((cT, lT) => {
          this.LoadScript(TT, (() => {
            cT()
          }), ((TT, kT) => {
            lT(kT || new Error(TT))
          }), kT)
        }))
      }
      static ReadFileAsDataURL(TT, kT, cT) {
        const lT = new FileReader,
          KT = {
            onCompleteObservable: new MT.b,
            abort: () => lT.abort()
          };
        return lT.onloadend = () => {
          KT.onCompleteObservable.notifyObservers(KT)
        }, lT.onload = TT => {
          kT(TT.target.result)
        }, lT.onprogress = cT, lT.readAsDataURL(TT), KT
      }
      static ReadFile(TT, kT, cT, lT, MT) {
        return (0, CT.p)(TT, kT, cT, lT, MT)
      }
      static FileAsURL(TT) {
        const kT = new Blob([TT]);
        return window.URL.createObjectURL(kT)
      }
      static Format(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return TT.toFixed(kT)
      }
      static DeepCopy(TT, kT, cT, lT) {
        yT.d.DeepCopy(TT, kT, cT, lT)
      }
      static IsEmpty(TT) {
        for (const kT in TT)
          if (Object.prototype.hasOwnProperty.call(TT, kT)) return !1;
        return !0
      }
      static RegisterTopRootEvents(TT, kT) {
        for (let lT = 0; lT < kT.length; lT++) {
          const MT = kT[lT];
          TT.addEventListener(MT.name, MT.handler, !1);
          try {
            window.parent && window.parent.addEventListener(MT.name, MT.handler, !1)
          } catch (cT) {}
        }
      }
      static UnregisterTopRootEvents(TT, kT) {
        for (let lT = 0; lT < kT.length; lT++) {
          const MT = kT[lT];
          TT.removeEventListener(MT.name, MT.handler);
          try {
            TT.parent && TT.parent.removeEventListener(MT.name, MT.handler)
          } catch (cT) {}
        }
      }
      static async DumpFramebuffer(TT, kT, cT, lT) {
        throw (0, xT.i)("DumpTools")
      }
      static DumpData(TT, kT, cT, lT) {
        throw (0, xT.i)("DumpTools")
      }
      static async DumpDataAsync(TT, kT, cT) {
        throw (0, xT.i)("DumpTools")
      }
      static _IsOffScreenCanvas(TT) {
        return void 0 !== TT.convertToBlob
      }
      static ToBlob(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          MT = arguments.length > 3 ? arguments[3] : void 0;
        lT._IsOffScreenCanvas(TT) || TT.toBlob || (TT.toBlob = function(TT, kT, cT) {
          setTimeout((() => {
            const lT = atob(this.toDataURL(kT, cT).split(",")[1]),
              MT = lT.length,
              KT = new Uint8Array(MT);
            for (let TT = 0; TT < MT; TT++) KT[TT] = lT.charCodeAt(TT);
            TT(new Blob([KT]))
          }))
        }), lT._IsOffScreenCanvas(TT) ? TT.convertToBlob({
          type: cT,
          quality: MT
        }).then((TT => kT(TT))) : TT.toBlob((function(TT) {
          kT(TT)
        }), cT, MT)
      }
      static DownloadBlob(TT, kT) {
        if ("download" in document.createElement("a")) {
          if (!kT) {
            const TT = new Date;
            kT = "screenshot_" + ((TT.getFullYear() + "-" + (TT.getMonth() + 1)).slice(2) + "-" + TT.getDate() + "_" + TT.getHours() + "-" + ("0" + TT.getMinutes()).slice(-2)) + ".png"
          }
          lT.Download(TT, kT)
        } else if (TT && "undefined" !== typeof URL) {
          const kT = URL.createObjectURL(TT),
            cT = window.open("");
          if (!cT) return;
          const lT = cT.document.createElement("img");
          lT.onload = function() {
            URL.revokeObjectURL(kT)
          }, lT.src = kT, cT.document.body.appendChild(lT)
        }
      }
      static EncodeScreenshotCanvasData(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          MT = arguments.length > 3 ? arguments[3] : void 0,
          KT = arguments.length > 4 ? arguments[4] : void 0;
        if ("string" !== typeof MT && kT) {
          if (kT) {
            if (lT._IsOffScreenCanvas(TT)) return void TT.convertToBlob({
              type: cT,
              quality: KT
            }).then((TT => {
              const cT = new FileReader;
              cT.readAsDataURL(TT), cT.onloadend = () => {
                const TT = cT.result;
                kT(TT)
              }
            }));
            const MT = TT.toDataURL(cT, KT);
            kT(MT)
          }
        } else this.ToBlob(TT, (function(TT) {
          TT && lT.DownloadBlob(TT, MT), kT && kT("")
        }), cT, KT)
      }
      static Download(TT, kT) {
        if ("undefined" === typeof URL) return;
        const cT = window.URL.createObjectURL(TT),
          lT = document.createElement("a");
        document.body.appendChild(lT), lT.style.display = "none", lT.href = cT, lT.download = kT, lT.addEventListener("click", (() => {
          lT.parentElement && lT.parentElement.removeChild(lT)
        })), lT.click(), window.URL.revokeObjectURL(cT)
      }
      static BackCompatCameraNoPreventDefault(TT) {
        return "boolean" === typeof TT[0] ? TT[0] : "boolean" === typeof TT[1] && TT[1]
      }
      static CreateScreenshot(TT, kT, cT, lT) {
        throw (0, xT.i)("ScreenshotTools")
      }
      static async CreateScreenshotAsync(TT, kT, cT) {
        throw (0, xT.i)("ScreenshotTools")
      }
      static CreateScreenshotUsingRenderTarget(TT, kT, cT, lT) {
        throw (0, xT.i)("ScreenshotTools")
      }
      static async CreateScreenshotUsingRenderTargetAsync(TT, kT, cT) {
        throw (0, xT.i)("ScreenshotTools")
      }
      static RandomId() {
        return (0, tT.c)()
      }
      static IsBase64(TT) {
        return (0, CT.g)(TT)
      }
      static DecodeBase64(TT) {
        return (0, CT.b)(TT)
      }
      static get errorsCount() {
        return OT.e.errorsCount
      }
      static Log(TT) {
        OT.e.Log(TT)
      }
      static Warn(TT) {
        OT.e.Warn(TT)
      }
      static Error(TT) {
        OT.e.Error(TT)
      }
      static get LogCache() {
        return OT.e.LogCache
      }
      static ClearLogCache() {
        OT.e.ClearLogCache()
      }
      static set LogLevels(TT) {
        OT.e.LogLevels = TT
      }
      static set PerformanceLogLevel(TT) {
        (TT & lT.PerformanceUserMarkLogLevel) !== lT.PerformanceUserMarkLogLevel ? (TT & lT.PerformanceConsoleLogLevel) !== lT.PerformanceConsoleLogLevel ? (lT.StartPerformanceCounter = lT._StartPerformanceCounterDisabled, lT.EndPerformanceCounter = lT._EndPerformanceCounterDisabled, _native?.disablePerformanceLogging?.()) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(2), lT.StartPerformanceCounter = lT._StartMarkNative, lT.EndPerformanceCounter = lT._EndMarkNative) : (lT.StartPerformanceCounter = lT._StartPerformanceConsole, lT.EndPerformanceCounter = lT._EndPerformanceConsole) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(1), lT.StartPerformanceCounter = lT._StartMarkNative, lT.EndPerformanceCounter = lT._EndMarkNative) : (lT.StartPerformanceCounter = lT._StartUserMark, lT.EndPerformanceCounter = lT._EndUserMark)
      }
      static _StartPerformanceCounterDisabled(TT, kT) {}
      static _EndPerformanceCounterDisabled(TT, kT) {}
      static _StartUserMark(TT) {
        let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!lT._Performance) {
          if (!(0, KT.i)()) return;
          lT._Performance = window.performance
        }
        kT && lT._Performance.mark && lT._Performance.mark(TT + "-Begin")
      }
      static _EndUserMark(TT) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && lT._Performance.mark && (lT._Performance.mark(TT + "-End"), lT._Performance.measure(TT, TT + "-Begin", TT + "-End"))
      }
      static _StartPerformanceConsole(TT) {
        let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        kT && (lT._StartUserMark(TT, kT), console.time && console.time(TT))
      }
      static _EndPerformanceConsole(TT) {
        let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        kT && (lT._EndUserMark(TT, kT), console.timeEnd(TT))
      }
      static _StartMarkNative(TT) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
          if (lT._NativePerformanceCounterHandles.has(TT)) lT.Warn(`Performance counter with name ${TT} is already started.`);
          else {
            const kT = _native.startPerformanceCounter(TT);
            lT._NativePerformanceCounterHandles.set(TT, kT)
          }
      }
      static _EndMarkNative(TT) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
          const kT = lT._NativePerformanceCounterHandles.get(TT);
          kT ? (_native.endPerformanceCounter(kT), lT._NativePerformanceCounterHandles.delete(TT)) : lT.Warn(`Performance counter with name ${TT} was not started.`)
        }
      }
      static get Now() {
        return fT.d.Now
      }
      static GetClassName(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cT = null;
        if (!kT && TT.getClassName) cT = TT.getClassName();
        else {
          if (TT instanceof Object) {
            cT = (kT ? TT : Object.getPrototypeOf(TT)).constructor.__bjsclassName__
          }
          cT || (cT = typeof TT)
        }
        return cT
      }
      static First(TT, kT) {
        for (const cT of TT)
          if (kT(cT)) return cT;
        return null
      }
      static getFullClassName(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cT = null,
          lT = null;
        if (!kT && TT.getClassName) cT = TT.getClassName();
        else {
          if (TT instanceof Object) {
            const MT = kT ? TT : Object.getPrototypeOf(TT);
            cT = MT.constructor.__bjsclassName__, lT = MT.constructor.__bjsmoduleName__
          }
          cT || (cT = typeof TT)
        }
        return cT ? (null != lT ? lT + "." : "") + cT : null
      }
      static async DelayAsync(TT) {
        await new Promise((kT => {
          setTimeout((() => {
            kT()
          }), TT)
        }))
      }
      static IsSafari() {
        return !!(0, KT.g)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }
    }

    function QT(TT, kT) {
      return cT => {
        cT.__bjsclassName__ = TT, cT.__bjsmoduleName__ = null != kT ? kT : null
      }
    }
    lT = NT, NT.AssetBaseUrl = "", NT.UseCustomRequestHeaders = !1, NT.CustomRequestHeaders = IT.b.CustomRequestHeaders, NT.GetDOMTextContent = KT.b, NT._DefaultCdnUrl = "https://cdn.babylonjs.com", NT._CdnVersion = "9.28.0", NT._DefaultAssetsUrl = "https://assets.babylonjs.com/core", NT.LoadScript = "undefined" === typeof _native ? lT._LoadScriptWeb : lT._LoadScriptNative, NT.GetAbsoluteUrl = "object" === typeof document ? TT => {
      const kT = document.createElement("a");
      return kT.href = TT, kT.href
    } : "function" === typeof URL && "object" === typeof location ? TT => new URL(TT, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
    }, NT.NoneLogLevel = OT.e.NoneLogLevel, NT.MessageLogLevel = OT.e.MessageLogLevel, NT.WarningLogLevel = OT.e.WarningLogLevel, NT.ErrorLogLevel = OT.e.ErrorLogLevel, NT.AllLogLevel = OT.e.AllLogLevel, NT.IsWindowObjectExist = KT.i, NT.PerformanceNoneLogLevel = 0, NT.PerformanceUserMarkLogLevel = 1, NT.PerformanceConsoleLogLevel = 2, NT._NativePerformanceCounterHandles = new Map, NT.StartPerformanceCounter = lT._StartPerformanceCounterDisabled, NT.EndPerformanceCounter = lT._EndPerformanceCounterDisabled;
    class ST {
      constructor(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.iterations = TT, this.index = lT - 1, this._done = !1, this._fn = kT, this._successCallback = cT
      }
      executeNext() {
        this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
      }
      breakLoop() {
        this._done = !0, this._successCallback()
      }
      static Run(TT, kT, cT) {
        const lT = new ST(TT, kT, cT, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return lT.executeNext(), lT
      }
      static SyncAsyncForLoop(TT, kT, cT, lT, MT) {
        let KT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return ST.Run(Math.ceil(TT / kT), (lT => {
          MT && MT() ? lT.breakLoop() : setTimeout((() => {
            for (let KT = 0; KT < kT; ++KT) {
              const OT = lT.index * kT + KT;
              if (OT >= TT) break;
              if (cT(OT), MT && MT()) {
                lT.breakLoop();
                break
              }
            }
            lT.executeNext()
          }), KT)
        }), lT)
      }
    }
    let DT = !1;

    function aT() {
      DT || (DT = !0, NT.Mix = hT.i, NT.IsExponentOfTwo = hT.g, AT.d.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z")
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);