export const id = 245;
export const ids = [245];
export const modules = {
  39475: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => EU
    });
    var tU = gU(38236),
      pU = gU(36639);
    class EU {
      static Instantiate(UU) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[UU]) return this.RegisteredExternalClasses[UU];
        const RU = (0, pU.e)(UU);
        if (RU) return RU;
        tU.e.Warn(UU + " not found, you may have missed an import.");
        const gU = UU.split(".");
        let EU = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
        for (let tU = 0, pU = gU.length; tU < pU; tU++) EU = EU[gU[tU]];
        return "function" !== typeof EU ? null : EU
      }
    }
    EU.RegisteredExternalClasses = {}
  },
  39280: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => pU
    });
    var tU = gU(39231);
    class pU {
      static get Now() {
        return (0, tU.k)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
      }
    }
  },
  39311: (UU, RU, gU) => {
    function tU(UU) {
      let RU = 1;
      do {
        RU *= 2
      } while (RU < UU);
      return RU === UU
    }

    function pU(UU, RU, gU) {
      return UU * (1 - gU) + RU * gU
    }

    function EU(UU) {
      const RU = PU(UU),
        gU = TU(UU);
      return RU - UU > UU - gU ? gU : RU
    }

    function PU(UU) {
      return UU--, UU |= UU >> 1, UU |= UU >> 2, UU |= UU >> 4, UU |= UU >> 8, UU |= UU >> 16, ++UU
    }

    function TU(UU) {
      return UU |= UU >> 1, UU |= UU >> 2, UU |= UU >> 4, UU |= UU >> 8, (UU |= UU >> 16) - (UU >> 1)
    }

    function qU(UU, RU) {
      let gU;
      switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
        case 1:
          gU = TU(UU);
          break;
        case 2:
          gU = EU(UU);
          break;
        default:
          gU = PU(UU)
      }
      return Math.min(gU, RU)
    }
    gU.d(RU, {
      b: () => TU,
      e: () => qU,
      f: () => tU,
      i: () => pU,
      k: () => EU
    })
  },
  39473: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => fU,
      e: () => mU,
      g: () => eU,
      j: () => WU
    });
    var tU, pU = gU(36624),
      EU = gU(39231),
      PU = gU(38236),
      TU = gU(38234),
      qU = gU(39280),
      KU = gU(39256),
      cU = gU(39427),
      GU = gU(36622),
      jU = gU(39424),
      uU = gU(39268),
      CU = gU(39475),
      hU = gU(37439),
      QU = gU(39311);
    class eU {
      static get BaseUrl() {
        return jU.g.BaseUrl
      }
      static set BaseUrl(UU) {
        jU.g.BaseUrl = UU
      }
      static get CleanUrl() {
        return jU.g.CleanUrl
      }
      static set CleanUrl(UU) {
        jU.g.CleanUrl = UU
      }
      static IsAbsoluteUrl(UU) {
        return 0 === UU.indexOf("//") || -1 !== UU.indexOf("://") && (-1 !== UU.indexOf(".") && (-1 !== UU.indexOf("/") && (!(UU.indexOf(":") > UU.indexOf("/")) && (UU.indexOf("://") < UU.indexOf(".") || (0 === UU.indexOf("data:") || 0 === UU.indexOf("blob:"))))))
      }
      static set ScriptBaseUrl(UU) {
        jU.g.ScriptBaseUrl = UU
      }
      static get ScriptBaseUrl() {
        return jU.g.ScriptBaseUrl
      }
      static set CDNBaseUrl(UU) {
        tU.ScriptBaseUrl = UU, tU.AssetBaseUrl = UU
      }
      static set ScriptPreprocessUrl(UU) {
        jU.g.ScriptPreprocessUrl = UU
      }
      static get ScriptPreprocessUrl() {
        return jU.g.ScriptPreprocessUrl
      }
      static get DefaultRetryStrategy() {
        return jU.g.DefaultRetryStrategy
      }
      static set DefaultRetryStrategy(UU) {
        jU.g.DefaultRetryStrategy = UU
      }
      static get CorsBehavior() {
        return jU.g.CorsBehavior
      }
      static set CorsBehavior(UU) {
        jU.g.CorsBehavior = UU
      }
      static get UseFallbackTexture() {
        return GU.c.UseFallbackTexture
      }
      static set UseFallbackTexture(UU) {
        GU.c.UseFallbackTexture = UU
      }
      static get RegisteredExternalClasses() {
        return CU.b.RegisteredExternalClasses
      }
      static set RegisteredExternalClasses(UU) {
        CU.b.RegisteredExternalClasses = UU
      }
      static get fallbackTexture() {
        return GU.c.FallbackTexture
      }
      static set fallbackTexture(UU) {
        GU.c.FallbackTexture = UU
      }
      static FetchToRef(UU, RU, gU, tU, pU, EU) {
        const PU = 4 * ((Math.abs(UU) * gU % gU | 0) + (Math.abs(RU) * tU % tU | 0) * gU);
        EU.r = pU[PU] / 255, EU.g = pU[PU + 1] / 255, EU.b = pU[PU + 2] / 255, EU.a = pU[PU + 3] / 255
      }
      static Mix(UU, RU, gU) {
        return 0
      }
      static Instantiate(UU) {
        return CU.b.Instantiate(UU)
      }
      static SetImmediate(UU) {
        uU.b.SetImmediate(UU)
      }
      static IsExponentOfTwo(UU) {
        return !0
      }
      static FloatRound(UU) {
        return Math.fround(UU)
      }
      static GetFilename(UU) {
        const RU = UU.lastIndexOf("/");
        return RU < 0 ? UU : UU.substring(RU + 1)
      }
      static GetFolderPath(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const gU = UU.lastIndexOf("/");
        return gU < 0 ? RU ? UU : "" : UU.substring(0, gU + 1)
      }
      static ToDegrees(UU) {
        return 180 * UU / Math.PI
      }
      static ToRadians(UU) {
        return UU * Math.PI / 180
      }
      static SmoothAngleChange(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
        const tU = this.ToRadians(UU),
          pU = this.ToRadians(RU);
        return this.ToDegrees(Math.atan2((1 - gU) * Math.sin(pU) + gU * Math.sin(tU), (1 - gU) * Math.cos(pU) + gU * Math.cos(tU)))
      }
      static MakeArray(UU, RU) {
        return !0 === RU || void 0 !== UU && null != UU ? Array.isArray(UU) ? UU : [UU] : null
      }
      static GetPointerPrefix(UU) {
        return (0, EU.k)() && !window.PointerEvent ? "mouse" : "pointer"
      }
      static SetCorsBehavior(UU, RU) {
        (0, jU.A)(UU, RU)
      }
      static SetReferrerPolicyBehavior(UU, RU) {
        RU.referrerPolicy = UU
      }
      static get PreprocessUrl() {
        return jU.g.PreprocessUrl
      }
      static set PreprocessUrl(UU) {
        jU.g.PreprocessUrl = UU
      }
      static LoadImage(UU, RU, gU, tU, pU, EU) {
        return (0, jU.p)(UU, RU, gU, tU, pU, EU)
      }
      static LoadFile(UU, RU, gU, tU, pU, EU) {
        return (0, jU.m)(UU, RU, gU, tU, pU, EU)
      }
      static async LoadFileAsync(UU) {
        let RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return await new Promise(((gU, tU) => {
          (0, jU.m)(UU, (UU => {
            gU(UU)
          }), void 0, void 0, RU, ((UU, RU) => {
            tU(RU)
          }))
        }))
      }
      static GetAssetUrl(UU) {
        if (!UU) return "";
        if (tU.AssetBaseUrl && UU.startsWith(tU._DefaultAssetsUrl)) {
          const RU = tU.AssetBaseUrl.endsWith("/") ? tU.AssetBaseUrl.slice(0, -1) : tU.AssetBaseUrl;
          return UU.replace(tU._DefaultAssetsUrl, RU)
        }
        return UU
      }
      static GetBabylonScriptURL(UU, RU) {
        if (!UU) return "";
        if (UU.startsWith(tU._DefaultCdnUrl))
          if (tU.ScriptBaseUrl) {
            const RU = tU.ScriptBaseUrl.endsWith("/") ? tU.ScriptBaseUrl.slice(0, -1) : tU.ScriptBaseUrl;
            UU = UU.replace(tU._DefaultCdnUrl, RU)
          } else if (tU._CdnVersion) {
          const RU = `${tU._DefaultCdnUrl}/v${tU._CdnVersion}`;
          UU.startsWith(RU) || (UU = UU.replace(tU._DefaultCdnUrl, RU))
        }
        return UU = tU.ScriptPreprocessUrl(UU), RU && !tU.IsAbsoluteUrl(UU) && (UU = tU.GetAbsoluteUrl(UU)), UU
      }
      static LoadBabylonScript(UU, RU, gU, pU) {
        UU = tU.GetBabylonScriptURL(UU), tU.LoadScript(UU, RU, gU)
      }
      static async LoadBabylonScriptAsync(UU) {
        return UU = tU.GetBabylonScriptURL(UU), await tU.LoadScriptAsync(UU)
      }
      static _LoadScriptNative(UU, RU, gU, pU) {
        if (_native) {
          if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
            const UU = "Loading a script as an ES module is not supported in Babylon Native";
            return void gU?.(UU, new Error(UU))
          }
          tU.LoadFile(UU, (UU => {
            try {
              Function(UU).apply(null), RU && RU()
            } catch (tU) {
              gU && gU("LoadScript Error", tU)
            }
          }), void 0, void 0, !1, ((UU, RU) => {
            gU && gU("LoadScript Error", RU)
          }))
        }
      }
      static _LoadScriptWeb(UU, RU, gU, tU) {
        let pU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" === typeof importScripts) {
          try {
            importScripts(UU), RU && RU()
          } catch (qU) {
            gU?.(`Unable to load script '${UU}' in worker`, qU)
          }
          return
        }
        if (!(0, EU.k)()) return void gU?.(`Cannot load script '${UU}' outside of a window or a worker`);
        const PU = document.getElementsByTagName("head")[0],
          TU = document.createElement("script");
        pU ? (TU.setAttribute("type", "module"), TU.innerText = UU) : (TU.setAttribute("type", "text/javascript"), TU.setAttribute("src", UU)), tU && (TU.id = tU), TU.onload = () => {
          RU && RU()
        }, TU.onerror = RU => {
          gU && gU(`Unable to load script '${UU}'`, RU)
        }, PU.appendChild(TU)
      }
      static async LoadScriptAsync(UU, RU) {
        return await new Promise(((gU, tU) => {
          this.LoadScript(UU, (() => {
            gU()
          }), ((UU, RU) => {
            tU(RU || new Error(UU))
          }), RU)
        }))
      }
      static ReadFileAsDataURL(UU, RU, gU) {
        const tU = new FileReader,
          EU = {
            onCompleteObservable: new pU.b,
            abort: () => tU.abort()
          };
        return tU.onloadend = () => {
          EU.onCompleteObservable.notifyObservers(EU)
        }, tU.onload = UU => {
          RU(UU.target.result)
        }, tU.onprogress = gU, tU.readAsDataURL(UU), EU
      }
      static ReadFile(UU, RU, gU, tU, pU) {
        return (0, jU.r)(UU, RU, gU, tU, pU)
      }
      static FileAsURL(UU) {
        const RU = new Blob([UU]);
        return window.URL.createObjectURL(RU)
      }
      static Format(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return UU.toFixed(RU)
      }
      static DeepCopy(UU, RU, gU, tU) {
        TU.c.DeepCopy(UU, RU, gU, tU)
      }
      static IsEmpty(UU) {
        for (const RU in UU)
          if (Object.prototype.hasOwnProperty.call(UU, RU)) return !1;
        return !0
      }
      static RegisterTopRootEvents(UU, RU) {
        for (let tU = 0; tU < RU.length; tU++) {
          const pU = RU[tU];
          UU.addEventListener(pU.name, pU.handler, !1);
          try {
            window.parent && window.parent.addEventListener(pU.name, pU.handler, !1)
          } catch (gU) {}
        }
      }
      static UnregisterTopRootEvents(UU, RU) {
        for (let tU = 0; tU < RU.length; tU++) {
          const pU = RU[tU];
          UU.removeEventListener(pU.name, pU.handler);
          try {
            UU.parent && UU.parent.removeEventListener(pU.name, pU.handler)
          } catch (gU) {}
        }
      }
      static async DumpFramebuffer(UU, RU, gU, tU) {
        throw (0, KU.n)("DumpTools")
      }
      static DumpData(UU, RU, gU, tU) {
        throw (0, KU.n)("DumpTools")
      }
      static async DumpDataAsync(UU, RU, gU) {
        throw (0, KU.n)("DumpTools")
      }
      static _IsOffScreenCanvas(UU) {
        return void 0 !== UU.convertToBlob
      }
      static ToBlob(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          pU = arguments.length > 3 ? arguments[3] : void 0;
        tU._IsOffScreenCanvas(UU) || UU.toBlob || (UU.toBlob = function(UU, RU, gU) {
          setTimeout((() => {
            const tU = atob(this.toDataURL(RU, gU).split(",")[1]),
              pU = tU.length,
              EU = new Uint8Array(pU);
            for (let UU = 0; UU < pU; UU++) EU[UU] = tU.charCodeAt(UU);
            UU(new Blob([EU]))
          }))
        }), tU._IsOffScreenCanvas(UU) ? UU.convertToBlob({
          type: gU,
          quality: pU
        }).then((UU => RU(UU))) : UU.toBlob((function(UU) {
          RU(UU)
        }), gU, pU)
      }
      static DownloadBlob(UU, RU) {
        if ("download" in document.createElement("a")) {
          if (!RU) {
            const UU = new Date;
            RU = "screenshot_" + ((UU.getFullYear() + "-" + (UU.getMonth() + 1)).slice(2) + "-" + UU.getDate() + "_" + UU.getHours() + "-" + ("0" + UU.getMinutes()).slice(-2)) + ".png"
          }
          tU.Download(UU, RU)
        } else if (UU && "undefined" !== typeof URL) {
          const RU = URL.createObjectURL(UU),
            gU = window.open("");
          if (!gU) return;
          const tU = gU.document.createElement("img");
          tU.onload = function() {
            URL.revokeObjectURL(RU)
          }, tU.src = RU, gU.document.body.appendChild(tU)
        }
      }
      static EncodeScreenshotCanvasData(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          pU = arguments.length > 3 ? arguments[3] : void 0,
          EU = arguments.length > 4 ? arguments[4] : void 0;
        if ("string" !== typeof pU && RU) {
          if (RU) {
            if (tU._IsOffScreenCanvas(UU)) return void UU.convertToBlob({
              type: gU,
              quality: EU
            }).then((UU => {
              const gU = new FileReader;
              gU.readAsDataURL(UU), gU.onloadend = () => {
                const UU = gU.result;
                RU(UU)
              }
            }));
            const pU = UU.toDataURL(gU, EU);
            RU(pU)
          }
        } else this.ToBlob(UU, (function(UU) {
          UU && tU.DownloadBlob(UU, pU), RU && RU("")
        }), gU, EU)
      }
      static Download(UU, RU) {
        if ("undefined" === typeof URL) return;
        const gU = window.URL.createObjectURL(UU),
          tU = document.createElement("a");
        document.body.appendChild(tU), tU.style.display = "none", tU.href = gU, tU.download = RU, tU.addEventListener("click", (() => {
          tU.parentElement && tU.parentElement.removeChild(tU)
        })), tU.click(), window.URL.revokeObjectURL(gU)
      }
      static BackCompatCameraNoPreventDefault(UU) {
        return "boolean" === typeof UU[0] ? UU[0] : "boolean" === typeof UU[1] && UU[1]
      }
      static CreateScreenshot(UU, RU, gU, tU) {
        throw (0, KU.n)("ScreenshotTools")
      }
      static async CreateScreenshotAsync(UU, RU, gU) {
        throw (0, KU.n)("ScreenshotTools")
      }
      static CreateScreenshotUsingRenderTarget(UU, RU, gU, tU) {
        throw (0, KU.n)("ScreenshotTools")
      }
      static async CreateScreenshotUsingRenderTargetAsync(UU, RU, gU) {
        throw (0, KU.n)("ScreenshotTools")
      }
      static RandomId() {
        return (0, hU.b)()
      }
      static IsBase64(UU) {
        return (0, jU.l)(UU)
      }
      static DecodeBase64(UU) {
        return (0, jU.c)(UU)
      }
      static get errorsCount() {
        return PU.e.errorsCount
      }
      static Log(UU) {
        PU.e.Log(UU)
      }
      static Warn(UU) {
        PU.e.Warn(UU)
      }
      static Error(UU) {
        PU.e.Error(UU)
      }
      static get LogCache() {
        return PU.e.LogCache
      }
      static ClearLogCache() {
        PU.e.ClearLogCache()
      }
      static set LogLevels(UU) {
        PU.e.LogLevels = UU
      }
      static set PerformanceLogLevel(UU) {
        (UU & tU.PerformanceUserMarkLogLevel) !== tU.PerformanceUserMarkLogLevel ? (UU & tU.PerformanceConsoleLogLevel) !== tU.PerformanceConsoleLogLevel ? (tU.StartPerformanceCounter = tU._StartPerformanceCounterDisabled, tU.EndPerformanceCounter = tU._EndPerformanceCounterDisabled, _native?.disablePerformanceLogging?.()) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(2), tU.StartPerformanceCounter = tU._StartMarkNative, tU.EndPerformanceCounter = tU._EndMarkNative) : (tU.StartPerformanceCounter = tU._StartPerformanceConsole, tU.EndPerformanceCounter = tU._EndPerformanceConsole) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(1), tU.StartPerformanceCounter = tU._StartMarkNative, tU.EndPerformanceCounter = tU._EndMarkNative) : (tU.StartPerformanceCounter = tU._StartUserMark, tU.EndPerformanceCounter = tU._EndUserMark)
      }
      static _StartPerformanceCounterDisabled(UU, RU) {}
      static _EndPerformanceCounterDisabled(UU, RU) {}
      static _StartUserMark(UU) {
        let RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!tU._Performance) {
          if (!(0, EU.k)()) return;
          tU._Performance = window.performance
        }
        RU && tU._Performance.mark && tU._Performance.mark(UU + "-Begin")
      }
      static _EndUserMark(UU) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && tU._Performance.mark && (tU._Performance.mark(UU + "-End"), tU._Performance.measure(UU, UU + "-Begin", UU + "-End"))
      }
      static _StartPerformanceConsole(UU) {
        let RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        RU && (tU._StartUserMark(UU, RU), console.time && console.time(UU))
      }
      static _EndPerformanceConsole(UU) {
        let RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        RU && (tU._EndUserMark(UU, RU), console.timeEnd(UU))
      }
      static _StartMarkNative(UU) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
          if (tU._NativePerformanceCounterHandles.has(UU)) tU.Warn(`Performance counter with name ${UU} is already started.`);
          else {
            const RU = _native.startPerformanceCounter(UU);
            tU._NativePerformanceCounterHandles.set(UU, RU)
          }
      }
      static _EndMarkNative(UU) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
          const RU = tU._NativePerformanceCounterHandles.get(UU);
          RU ? (_native.endPerformanceCounter(RU), tU._NativePerformanceCounterHandles.delete(UU)) : tU.Warn(`Performance counter with name ${UU} was not started.`)
        }
      }
      static get Now() {
        return qU.b.Now
      }
      static GetClassName(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gU = null;
        if (!RU && UU.getClassName) gU = UU.getClassName();
        else {
          if (UU instanceof Object) {
            gU = (RU ? UU : Object.getPrototypeOf(UU)).constructor.__bjsclassName__
          }
          gU || (gU = typeof UU)
        }
        return gU
      }
      static First(UU, RU) {
        for (const gU of UU)
          if (RU(gU)) return gU;
        return null
      }
      static getFullClassName(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gU = null,
          tU = null;
        if (!RU && UU.getClassName) gU = UU.getClassName();
        else {
          if (UU instanceof Object) {
            const pU = RU ? UU : Object.getPrototypeOf(UU);
            gU = pU.constructor.__bjsclassName__, tU = pU.constructor.__bjsmoduleName__
          }
          gU || (gU = typeof UU)
        }
        return gU ? (null != tU ? tU + "." : "") + gU : null
      }
      static async DelayAsync(UU) {
        await new Promise((RU => {
          setTimeout((() => {
            RU()
          }), UU)
        }))
      }
      static IsSafari() {
        return !!(0, EU.h)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }
    }

    function WU(UU, RU) {
      return gU => {
        gU.__bjsclassName__ = UU, gU.__bjsmoduleName__ = null != RU ? RU : null
      }
    }
    tU = eU, eU.AssetBaseUrl = "", eU.UseCustomRequestHeaders = !1, eU.CustomRequestHeaders = cU.e.CustomRequestHeaders, eU.GetDOMTextContent = EU.c, eU._DefaultCdnUrl = "https://cdn.babylonjs.com", eU._CdnVersion = "9.28.0", eU._DefaultAssetsUrl = "https://assets.babylonjs.com/core", eU.LoadScript = "undefined" === typeof _native ? tU._LoadScriptWeb : tU._LoadScriptNative, eU.GetAbsoluteUrl = "object" === typeof document ? UU => {
      const RU = document.createElement("a");
      return RU.href = UU, RU.href
    } : "function" === typeof URL && "object" === typeof location ? UU => new URL(UU, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
    }, eU.NoneLogLevel = PU.e.NoneLogLevel, eU.MessageLogLevel = PU.e.MessageLogLevel, eU.WarningLogLevel = PU.e.WarningLogLevel, eU.ErrorLogLevel = PU.e.ErrorLogLevel, eU.AllLogLevel = PU.e.AllLogLevel, eU.IsWindowObjectExist = EU.k, eU.PerformanceNoneLogLevel = 0, eU.PerformanceUserMarkLogLevel = 1, eU.PerformanceConsoleLogLevel = 2, eU._NativePerformanceCounterHandles = new Map, eU.StartPerformanceCounter = tU._StartPerformanceCounterDisabled, eU.EndPerformanceCounter = tU._EndPerformanceCounterDisabled;
    class fU {
      constructor(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.iterations = UU, this.index = tU - 1, this._done = !1, this._fn = RU, this._successCallback = gU
      }
      executeNext() {
        this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
      }
      breakLoop() {
        this._done = !0, this._successCallback()
      }
      static Run(UU, RU, gU) {
        const tU = new fU(UU, RU, gU, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return tU.executeNext(), tU
      }
      static SyncAsyncForLoop(UU, RU, gU, tU, pU) {
        let EU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return fU.Run(Math.ceil(UU / RU), (tU => {
          pU && pU() ? tU.breakLoop() : setTimeout((() => {
            for (let EU = 0; EU < RU; ++EU) {
              const PU = tU.index * RU + EU;
              if (PU >= UU) break;
              if (gU(PU), pU && pU()) {
                tU.breakLoop();
                break
              }
            }
            tU.executeNext()
          }), EU)
        }), tU)
      }
    }
    let xU = !1;

    function mU() {
      xU || (xU = !0, eU.Mix = QU.i, eU.IsExponentOfTwo = QU.f, GU.c.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z")
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);