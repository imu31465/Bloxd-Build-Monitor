export const id = 244;
export const ids = [244];
export const modules = {
  38889: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => kT
    });
    var iT = IT(37660),
      zT = IT(36166);
    class kT {
      static Instantiate(TT) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[TT]) return this.RegisteredExternalClasses[TT];
        const oT = (0, zT.d)(TT);
        if (oT) return oT;
        iT.d.Warn(TT + " not found, you may have missed an import.");
        const IT = TT.split(".");
        let kT = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
        for (let iT = 0, zT = IT.length; iT < zT; iT++) kT = kT[IT[iT]];
        return "function" !== typeof kT ? null : kT
      }
    }
    kT.RegisteredExternalClasses = {}
  },
  38667: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => zT
    });
    var iT = IT(38626);
    class zT {
      static get Now() {
        return (0, iT.k)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
      }
    }
  },
  38698: (TT, oT, IT) => {
    function iT(TT) {
      let oT = 1;
      do {
        oT *= 2
      } while (oT < TT);
      return oT === TT
    }

    function zT(TT, oT, IT) {
      return TT * (1 - IT) + oT * IT
    }

    function kT(TT) {
      const oT = WT(TT),
        IT = XT(TT);
      return oT - TT > TT - IT ? IT : oT
    }

    function WT(TT) {
      return TT--, TT |= TT >> 1, TT |= TT >> 2, TT |= TT >> 4, TT |= TT >> 8, TT |= TT >> 16, ++TT
    }

    function XT(TT) {
      return TT |= TT >> 1, TT |= TT >> 2, TT |= TT >> 4, TT |= TT >> 8, (TT |= TT >> 16) - (TT >> 1)
    }

    function BT(TT, oT) {
      let IT;
      switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
        case 1:
          IT = XT(TT);
          break;
        case 2:
          IT = kT(TT);
          break;
        default:
          IT = WT(TT)
      }
      return Math.min(IT, oT)
    }
    IT.d(oT, {
      d: () => XT,
      e: () => BT,
      h: () => iT,
      k: () => zT,
      m: () => kT
    })
  },
  38886: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => gT,
      e: () => wT,
      i: () => rT,
      k: () => AT
    });
    var iT, zT = IT(36149),
      kT = IT(38626),
      WT = IT(37660),
      XT = IT(37658),
      BT = IT(38667),
      FT = IT(38643),
      ST = IT(38835),
      DT = IT(36146),
      LT = IT(38827),
      xT = IT(38653),
      cT = IT(38889),
      KT = IT(36851),
      MT = IT(38698);
    class rT {
      static get BaseUrl() {
        return LT.f.BaseUrl
      }
      static set BaseUrl(TT) {
        LT.f.BaseUrl = TT
      }
      static get CleanUrl() {
        return LT.f.CleanUrl
      }
      static set CleanUrl(TT) {
        LT.f.CleanUrl = TT
      }
      static IsAbsoluteUrl(TT) {
        return 0 === TT.indexOf("//") || -1 !== TT.indexOf("://") && (-1 !== TT.indexOf(".") && (-1 !== TT.indexOf("/") && (!(TT.indexOf(":") > TT.indexOf("/")) && (TT.indexOf("://") < TT.indexOf(".") || (0 === TT.indexOf("data:") || 0 === TT.indexOf("blob:"))))))
      }
      static set ScriptBaseUrl(TT) {
        LT.f.ScriptBaseUrl = TT
      }
      static get ScriptBaseUrl() {
        return LT.f.ScriptBaseUrl
      }
      static set CDNBaseUrl(TT) {
        iT.ScriptBaseUrl = TT, iT.AssetBaseUrl = TT
      }
      static set ScriptPreprocessUrl(TT) {
        LT.f.ScriptPreprocessUrl = TT
      }
      static get ScriptPreprocessUrl() {
        return LT.f.ScriptPreprocessUrl
      }
      static get DefaultRetryStrategy() {
        return LT.f.DefaultRetryStrategy
      }
      static set DefaultRetryStrategy(TT) {
        LT.f.DefaultRetryStrategy = TT
      }
      static get CorsBehavior() {
        return LT.f.CorsBehavior
      }
      static set CorsBehavior(TT) {
        LT.f.CorsBehavior = TT
      }
      static get UseFallbackTexture() {
        return DT.d.UseFallbackTexture
      }
      static set UseFallbackTexture(TT) {
        DT.d.UseFallbackTexture = TT
      }
      static get RegisteredExternalClasses() {
        return cT.d.RegisteredExternalClasses
      }
      static set RegisteredExternalClasses(TT) {
        cT.d.RegisteredExternalClasses = TT
      }
      static get fallbackTexture() {
        return DT.d.FallbackTexture
      }
      static set fallbackTexture(TT) {
        DT.d.FallbackTexture = TT
      }
      static FetchToRef(TT, oT, IT, iT, zT, kT) {
        const WT = 4 * ((Math.abs(TT) * IT % IT | 0) + (Math.abs(oT) * iT % iT | 0) * IT);
        kT.r = zT[WT] / 255, kT.g = zT[WT + 1] / 255, kT.b = zT[WT + 2] / 255, kT.a = zT[WT + 3] / 255
      }
      static Mix(TT, oT, IT) {
        return 0
      }
      static Instantiate(TT) {
        return cT.d.Instantiate(TT)
      }
      static SetImmediate(TT) {
        xT.c.SetImmediate(TT)
      }
      static IsExponentOfTwo(TT) {
        return !0
      }
      static FloatRound(TT) {
        return Math.fround(TT)
      }
      static GetFilename(TT) {
        const oT = TT.lastIndexOf("/");
        return oT < 0 ? TT : TT.substring(oT + 1)
      }
      static GetFolderPath(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const IT = TT.lastIndexOf("/");
        return IT < 0 ? oT ? TT : "" : TT.substring(0, IT + 1)
      }
      static ToDegrees(TT) {
        return 180 * TT / Math.PI
      }
      static ToRadians(TT) {
        return TT * Math.PI / 180
      }
      static SmoothAngleChange(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
        const iT = this.ToRadians(TT),
          zT = this.ToRadians(oT);
        return this.ToDegrees(Math.atan2((1 - IT) * Math.sin(zT) + IT * Math.sin(iT), (1 - IT) * Math.cos(zT) + IT * Math.cos(iT)))
      }
      static MakeArray(TT, oT) {
        return !0 === oT || void 0 !== TT && null != TT ? Array.isArray(TT) ? TT : [TT] : null
      }
      static GetPointerPrefix(TT) {
        return (0, kT.k)() && !window.PointerEvent ? "mouse" : "pointer"
      }
      static SetCorsBehavior(TT, oT) {
        (0, LT.A)(TT, oT)
      }
      static SetReferrerPolicyBehavior(TT, oT) {
        oT.referrerPolicy = TT
      }
      static get PreprocessUrl() {
        return LT.f.PreprocessUrl
      }
      static set PreprocessUrl(TT) {
        LT.f.PreprocessUrl = TT
      }
      static LoadImage(TT, oT, IT, iT, zT, kT) {
        return (0, LT.r)(TT, oT, IT, iT, zT, kT)
      }
      static LoadFile(TT, oT, IT, iT, zT, kT) {
        return (0, LT.q)(TT, oT, IT, iT, zT, kT)
      }
      static async LoadFileAsync(TT) {
        let oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return await new Promise(((IT, iT) => {
          (0, LT.q)(TT, (TT => {
            IT(TT)
          }), void 0, void 0, oT, ((TT, oT) => {
            iT(oT)
          }))
        }))
      }
      static GetAssetUrl(TT) {
        if (!TT) return "";
        if (iT.AssetBaseUrl && TT.startsWith(iT._DefaultAssetsUrl)) {
          const oT = iT.AssetBaseUrl.endsWith("/") ? iT.AssetBaseUrl.slice(0, -1) : iT.AssetBaseUrl;
          return TT.replace(iT._DefaultAssetsUrl, oT)
        }
        return TT
      }
      static GetBabylonScriptURL(TT, oT) {
        if (!TT) return "";
        if (TT.startsWith(iT._DefaultCdnUrl))
          if (iT.ScriptBaseUrl) {
            const oT = iT.ScriptBaseUrl.endsWith("/") ? iT.ScriptBaseUrl.slice(0, -1) : iT.ScriptBaseUrl;
            TT = TT.replace(iT._DefaultCdnUrl, oT)
          } else if (iT._CdnVersion) {
          const oT = `${iT._DefaultCdnUrl}/v${iT._CdnVersion}`;
          TT.startsWith(oT) || (TT = TT.replace(iT._DefaultCdnUrl, oT))
        }
        return TT = iT.ScriptPreprocessUrl(TT), oT && !iT.IsAbsoluteUrl(TT) && (TT = iT.GetAbsoluteUrl(TT)), TT
      }
      static LoadBabylonScript(TT, oT, IT, zT) {
        TT = iT.GetBabylonScriptURL(TT), iT.LoadScript(TT, oT, IT)
      }
      static async LoadBabylonScriptAsync(TT) {
        return TT = iT.GetBabylonScriptURL(TT), await iT.LoadScriptAsync(TT)
      }
      static _LoadScriptNative(TT, oT, IT, zT) {
        if (_native) {
          if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
            const TT = "Loading a script as an ES module is not supported in Babylon Native";
            return void IT?.(TT, new Error(TT))
          }
          iT.LoadFile(TT, (TT => {
            try {
              Function(TT).apply(null), oT && oT()
            } catch (iT) {
              IT && IT("LoadScript Error", iT)
            }
          }), void 0, void 0, !1, ((TT, oT) => {
            IT && IT("LoadScript Error", oT)
          }))
        }
      }
      static _LoadScriptWeb(TT, oT, IT, iT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" === typeof importScripts) {
          try {
            importScripts(TT), oT && oT()
          } catch (BT) {
            IT?.(`Unable to load script '${TT}' in worker`, BT)
          }
          return
        }
        if (!(0, kT.k)()) return void IT?.(`Cannot load script '${TT}' outside of a window or a worker`);
        const WT = document.getElementsByTagName("head")[0],
          XT = document.createElement("script");
        zT ? (XT.setAttribute("type", "module"), XT.innerText = TT) : (XT.setAttribute("type", "text/javascript"), XT.setAttribute("src", TT)), iT && (XT.id = iT), XT.onload = () => {
          oT && oT()
        }, XT.onerror = oT => {
          IT && IT(`Unable to load script '${TT}'`, oT)
        }, WT.appendChild(XT)
      }
      static async LoadScriptAsync(TT, oT) {
        return await new Promise(((IT, iT) => {
          this.LoadScript(TT, (() => {
            IT()
          }), ((TT, oT) => {
            iT(oT || new Error(TT))
          }), oT)
        }))
      }
      static ReadFileAsDataURL(TT, oT, IT) {
        const iT = new FileReader,
          kT = {
            onCompleteObservable: new zT.d,
            abort: () => iT.abort()
          };
        return iT.onloadend = () => {
          kT.onCompleteObservable.notifyObservers(kT)
        }, iT.onload = TT => {
          oT(TT.target.result)
        }, iT.onprogress = IT, iT.readAsDataURL(TT), kT
      }
      static ReadFile(TT, oT, IT, iT, zT) {
        return (0, LT.u)(TT, oT, IT, iT, zT)
      }
      static FileAsURL(TT) {
        const oT = new Blob([TT]);
        return window.URL.createObjectURL(oT)
      }
      static Format(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return TT.toFixed(oT)
      }
      static DeepCopy(TT, oT, IT, iT) {
        XT.d.DeepCopy(TT, oT, IT, iT)
      }
      static IsEmpty(TT) {
        for (const oT in TT)
          if (Object.prototype.hasOwnProperty.call(TT, oT)) return !1;
        return !0
      }
      static RegisterTopRootEvents(TT, oT) {
        for (let iT = 0; iT < oT.length; iT++) {
          const zT = oT[iT];
          TT.addEventListener(zT.name, zT.handler, !1);
          try {
            window.parent && window.parent.addEventListener(zT.name, zT.handler, !1)
          } catch (IT) {}
        }
      }
      static UnregisterTopRootEvents(TT, oT) {
        for (let iT = 0; iT < oT.length; iT++) {
          const zT = oT[iT];
          TT.removeEventListener(zT.name, zT.handler);
          try {
            TT.parent && TT.parent.removeEventListener(zT.name, zT.handler)
          } catch (IT) {}
        }
      }
      static async DumpFramebuffer(TT, oT, IT, iT) {
        throw (0, FT.k)("DumpTools")
      }
      static DumpData(TT, oT, IT, iT) {
        throw (0, FT.k)("DumpTools")
      }
      static async DumpDataAsync(TT, oT, IT) {
        throw (0, FT.k)("DumpTools")
      }
      static _IsOffScreenCanvas(TT) {
        return void 0 !== TT.convertToBlob
      }
      static ToBlob(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          zT = arguments.length > 3 ? arguments[3] : void 0;
        iT._IsOffScreenCanvas(TT) || TT.toBlob || (TT.toBlob = function(TT, oT, IT) {
          setTimeout((() => {
            const iT = atob(this.toDataURL(oT, IT).split(",")[1]),
              zT = iT.length,
              kT = new Uint8Array(zT);
            for (let TT = 0; TT < zT; TT++) kT[TT] = iT.charCodeAt(TT);
            TT(new Blob([kT]))
          }))
        }), iT._IsOffScreenCanvas(TT) ? TT.convertToBlob({
          type: IT,
          quality: zT
        }).then((TT => oT(TT))) : TT.toBlob((function(TT) {
          oT(TT)
        }), IT, zT)
      }
      static DownloadBlob(TT, oT) {
        if ("download" in document.createElement("a")) {
          if (!oT) {
            const TT = new Date;
            oT = "screenshot_" + ((TT.getFullYear() + "-" + (TT.getMonth() + 1)).slice(2) + "-" + TT.getDate() + "_" + TT.getHours() + "-" + ("0" + TT.getMinutes()).slice(-2)) + ".png"
          }
          iT.Download(TT, oT)
        } else if (TT && "undefined" !== typeof URL) {
          const oT = URL.createObjectURL(TT),
            IT = window.open("");
          if (!IT) return;
          const iT = IT.document.createElement("img");
          iT.onload = function() {
            URL.revokeObjectURL(oT)
          }, iT.src = oT, IT.document.body.appendChild(iT)
        }
      }
      static EncodeScreenshotCanvasData(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          zT = arguments.length > 3 ? arguments[3] : void 0,
          kT = arguments.length > 4 ? arguments[4] : void 0;
        if ("string" !== typeof zT && oT) {
          if (oT) {
            if (iT._IsOffScreenCanvas(TT)) return void TT.convertToBlob({
              type: IT,
              quality: kT
            }).then((TT => {
              const IT = new FileReader;
              IT.readAsDataURL(TT), IT.onloadend = () => {
                const TT = IT.result;
                oT(TT)
              }
            }));
            const zT = TT.toDataURL(IT, kT);
            oT(zT)
          }
        } else this.ToBlob(TT, (function(TT) {
          TT && iT.DownloadBlob(TT, zT), oT && oT("")
        }), IT, kT)
      }
      static Download(TT, oT) {
        if ("undefined" === typeof URL) return;
        const IT = window.URL.createObjectURL(TT),
          iT = document.createElement("a");
        document.body.appendChild(iT), iT.style.display = "none", iT.href = IT, iT.download = oT, iT.addEventListener("click", (() => {
          iT.parentElement && iT.parentElement.removeChild(iT)
        })), iT.click(), window.URL.revokeObjectURL(IT)
      }
      static BackCompatCameraNoPreventDefault(TT) {
        return "boolean" === typeof TT[0] ? TT[0] : "boolean" === typeof TT[1] && TT[1]
      }
      static CreateScreenshot(TT, oT, IT, iT) {
        throw (0, FT.k)("ScreenshotTools")
      }
      static async CreateScreenshotAsync(TT, oT, IT) {
        throw (0, FT.k)("ScreenshotTools")
      }
      static CreateScreenshotUsingRenderTarget(TT, oT, IT, iT) {
        throw (0, FT.k)("ScreenshotTools")
      }
      static async CreateScreenshotUsingRenderTargetAsync(TT, oT, IT) {
        throw (0, FT.k)("ScreenshotTools")
      }
      static RandomId() {
        return (0, KT.e)()
      }
      static IsBase64(TT) {
        return (0, LT.m)(TT)
      }
      static DecodeBase64(TT) {
        return (0, LT.e)(TT)
      }
      static get errorsCount() {
        return WT.d.errorsCount
      }
      static Log(TT) {
        WT.d.Log(TT)
      }
      static Warn(TT) {
        WT.d.Warn(TT)
      }
      static Error(TT) {
        WT.d.Error(TT)
      }
      static get LogCache() {
        return WT.d.LogCache
      }
      static ClearLogCache() {
        WT.d.ClearLogCache()
      }
      static set LogLevels(TT) {
        WT.d.LogLevels = TT
      }
      static set PerformanceLogLevel(TT) {
        (TT & iT.PerformanceUserMarkLogLevel) !== iT.PerformanceUserMarkLogLevel ? (TT & iT.PerformanceConsoleLogLevel) !== iT.PerformanceConsoleLogLevel ? (iT.StartPerformanceCounter = iT._StartPerformanceCounterDisabled, iT.EndPerformanceCounter = iT._EndPerformanceCounterDisabled, _native?.disablePerformanceLogging?.()) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(2), iT.StartPerformanceCounter = iT._StartMarkNative, iT.EndPerformanceCounter = iT._EndMarkNative) : (iT.StartPerformanceCounter = iT._StartPerformanceConsole, iT.EndPerformanceCounter = iT._EndPerformanceConsole) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(1), iT.StartPerformanceCounter = iT._StartMarkNative, iT.EndPerformanceCounter = iT._EndMarkNative) : (iT.StartPerformanceCounter = iT._StartUserMark, iT.EndPerformanceCounter = iT._EndUserMark)
      }
      static _StartPerformanceCounterDisabled(TT, oT) {}
      static _EndPerformanceCounterDisabled(TT, oT) {}
      static _StartUserMark(TT) {
        let oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!iT._Performance) {
          if (!(0, kT.k)()) return;
          iT._Performance = window.performance
        }
        oT && iT._Performance.mark && iT._Performance.mark(TT + "-Begin")
      }
      static _EndUserMark(TT) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && iT._Performance.mark && (iT._Performance.mark(TT + "-End"), iT._Performance.measure(TT, TT + "-Begin", TT + "-End"))
      }
      static _StartPerformanceConsole(TT) {
        let oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        oT && (iT._StartUserMark(TT, oT), console.time && console.time(TT))
      }
      static _EndPerformanceConsole(TT) {
        let oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        oT && (iT._EndUserMark(TT, oT), console.timeEnd(TT))
      }
      static _StartMarkNative(TT) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
          if (iT._NativePerformanceCounterHandles.has(TT)) iT.Warn(`Performance counter with name ${TT} is already started.`);
          else {
            const oT = _native.startPerformanceCounter(TT);
            iT._NativePerformanceCounterHandles.set(TT, oT)
          }
      }
      static _EndMarkNative(TT) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
          const oT = iT._NativePerformanceCounterHandles.get(TT);
          oT ? (_native.endPerformanceCounter(oT), iT._NativePerformanceCounterHandles.delete(TT)) : iT.Warn(`Performance counter with name ${TT} was not started.`)
        }
      }
      static get Now() {
        return BT.c.Now
      }
      static GetClassName(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          IT = null;
        if (!oT && TT.getClassName) IT = TT.getClassName();
        else {
          if (TT instanceof Object) {
            IT = (oT ? TT : Object.getPrototypeOf(TT)).constructor.__bjsclassName__
          }
          IT || (IT = typeof TT)
        }
        return IT
      }
      static First(TT, oT) {
        for (const IT of TT)
          if (oT(IT)) return IT;
        return null
      }
      static getFullClassName(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          IT = null,
          iT = null;
        if (!oT && TT.getClassName) IT = TT.getClassName();
        else {
          if (TT instanceof Object) {
            const zT = oT ? TT : Object.getPrototypeOf(TT);
            IT = zT.constructor.__bjsclassName__, iT = zT.constructor.__bjsmoduleName__
          }
          IT || (IT = typeof TT)
        }
        return IT ? (null != iT ? iT + "." : "") + IT : null
      }
      static async DelayAsync(TT) {
        await new Promise((oT => {
          setTimeout((() => {
            oT()
          }), TT)
        }))
      }
      static IsSafari() {
        return !!(0, kT.g)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }
    }

    function AT(TT, oT) {
      return IT => {
        IT.__bjsclassName__ = TT, IT.__bjsmoduleName__ = null != oT ? oT : null
      }
    }
    iT = rT, rT.AssetBaseUrl = "", rT.UseCustomRequestHeaders = !1, rT.CustomRequestHeaders = ST.b.CustomRequestHeaders, rT.GetDOMTextContent = kT.d, rT._DefaultCdnUrl = "https://cdn.babylonjs.com", rT._CdnVersion = "9.28.0", rT._DefaultAssetsUrl = "https://assets.babylonjs.com/core", rT.LoadScript = "undefined" === typeof _native ? iT._LoadScriptWeb : iT._LoadScriptNative, rT.GetAbsoluteUrl = "object" === typeof document ? TT => {
      const oT = document.createElement("a");
      return oT.href = TT, oT.href
    } : "function" === typeof URL && "object" === typeof location ? TT => new URL(TT, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
    }, rT.NoneLogLevel = WT.d.NoneLogLevel, rT.MessageLogLevel = WT.d.MessageLogLevel, rT.WarningLogLevel = WT.d.WarningLogLevel, rT.ErrorLogLevel = WT.d.ErrorLogLevel, rT.AllLogLevel = WT.d.AllLogLevel, rT.IsWindowObjectExist = kT.k, rT.PerformanceNoneLogLevel = 0, rT.PerformanceUserMarkLogLevel = 1, rT.PerformanceConsoleLogLevel = 2, rT._NativePerformanceCounterHandles = new Map, rT.StartPerformanceCounter = iT._StartPerformanceCounterDisabled, rT.EndPerformanceCounter = iT._EndPerformanceCounterDisabled;
    class gT {
      constructor(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.iterations = TT, this.index = iT - 1, this._done = !1, this._fn = oT, this._successCallback = IT
      }
      executeNext() {
        this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
      }
      breakLoop() {
        this._done = !0, this._successCallback()
      }
      static Run(TT, oT, IT) {
        const iT = new gT(TT, oT, IT, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return iT.executeNext(), iT
      }
      static SyncAsyncForLoop(TT, oT, IT, iT, zT) {
        let kT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return gT.Run(Math.ceil(TT / oT), (iT => {
          zT && zT() ? iT.breakLoop() : setTimeout((() => {
            for (let kT = 0; kT < oT; ++kT) {
              const WT = iT.index * oT + kT;
              if (WT >= TT) break;
              if (IT(WT), zT && zT()) {
                iT.breakLoop();
                break
              }
            }
            iT.executeNext()
          }), kT)
        }), iT)
      }
    }
    let hT = !1;

    function wT() {
      hT || (hT = !0, rT.Mix = MT.k, rT.IsExponentOfTwo = MT.h, DT.d.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z")
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);