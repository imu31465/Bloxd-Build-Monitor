export const id = 235;
export const ids = [235];
export const modules = {
  38884: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => eJ
    });
    var FJ = ZJ(37660),
      UJ = ZJ(36216);
    class eJ {
      static Instantiate(JJ) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[JJ]) return this.RegisteredExternalClasses[JJ];
        const cJ = (0, UJ.e)(JJ);
        if (cJ) return cJ;
        FJ.c.Warn(JJ + " not found, you may have missed an import.");
        const ZJ = JJ.split(".");
        let eJ = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
        for (let FJ = 0, UJ = ZJ.length; FJ < UJ; FJ++) eJ = eJ[ZJ[FJ]];
        return "function" !== typeof eJ ? null : eJ
      }
    }
    eJ.RegisteredExternalClasses = {}
  },
  38700: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => UJ
    });
    var FJ = ZJ(38663);
    class UJ {
      static get Now() {
        return (0, FJ.i)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
      }
    }
  },
  38729: (JJ, cJ, ZJ) => {
    function FJ(JJ) {
      let cJ = 1;
      do {
        cJ *= 2
      } while (cJ < JJ);
      return cJ === JJ
    }

    function UJ(JJ, cJ, ZJ) {
      return JJ * (1 - ZJ) + cJ * ZJ
    }

    function eJ(JJ) {
      const cJ = XJ(JJ),
        ZJ = AJ(JJ);
      return cJ - JJ > JJ - ZJ ? ZJ : cJ
    }

    function XJ(JJ) {
      return JJ--, JJ |= JJ >> 1, JJ |= JJ >> 2, JJ |= JJ >> 4, JJ |= JJ >> 8, JJ |= JJ >> 16, ++JJ
    }

    function AJ(JJ) {
      return JJ |= JJ >> 1, JJ |= JJ >> 2, JJ |= JJ >> 4, JJ |= JJ >> 8, (JJ |= JJ >> 16) - (JJ >> 1)
    }

    function qJ(JJ, cJ) {
      let ZJ;
      switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
        case 1:
          ZJ = AJ(JJ);
          break;
        case 2:
          ZJ = eJ(JJ);
          break;
        default:
          ZJ = XJ(JJ)
      }
      return Math.min(ZJ, cJ)
    }
    ZJ.d(cJ, {
      c: () => AJ,
      d: () => qJ,
      e: () => FJ,
      g: () => UJ,
      h: () => eJ
    })
  },
  38879: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => vJ,
      g: () => QJ,
      j: () => xJ,
      m: () => rJ
    });
    var FJ, UJ = ZJ(36200),
      eJ = ZJ(38663),
      XJ = ZJ(37660),
      AJ = ZJ(37658),
      qJ = ZJ(38700),
      jJ = ZJ(38677),
      YJ = ZJ(38848),
      hJ = ZJ(36192),
      DJ = ZJ(38844),
      sJ = ZJ(38689),
      nJ = ZJ(38884),
      GJ = ZJ(36865),
      fJ = ZJ(38729);
    class xJ {
      static get BaseUrl() {
        return DJ.g.BaseUrl
      }
      static set BaseUrl(JJ) {
        DJ.g.BaseUrl = JJ
      }
      static get CleanUrl() {
        return DJ.g.CleanUrl
      }
      static set CleanUrl(JJ) {
        DJ.g.CleanUrl = JJ
      }
      static IsAbsoluteUrl(JJ) {
        return 0 === JJ.indexOf("//") || -1 !== JJ.indexOf("://") && (-1 !== JJ.indexOf(".") && (-1 !== JJ.indexOf("/") && (!(JJ.indexOf(":") > JJ.indexOf("/")) && (JJ.indexOf("://") < JJ.indexOf(".") || (0 === JJ.indexOf("data:") || 0 === JJ.indexOf("blob:"))))))
      }
      static set ScriptBaseUrl(JJ) {
        DJ.g.ScriptBaseUrl = JJ
      }
      static get ScriptBaseUrl() {
        return DJ.g.ScriptBaseUrl
      }
      static set CDNBaseUrl(JJ) {
        FJ.ScriptBaseUrl = JJ, FJ.AssetBaseUrl = JJ
      }
      static set ScriptPreprocessUrl(JJ) {
        DJ.g.ScriptPreprocessUrl = JJ
      }
      static get ScriptPreprocessUrl() {
        return DJ.g.ScriptPreprocessUrl
      }
      static get DefaultRetryStrategy() {
        return DJ.g.DefaultRetryStrategy
      }
      static set DefaultRetryStrategy(JJ) {
        DJ.g.DefaultRetryStrategy = JJ
      }
      static get CorsBehavior() {
        return DJ.g.CorsBehavior
      }
      static set CorsBehavior(JJ) {
        DJ.g.CorsBehavior = JJ
      }
      static get UseFallbackTexture() {
        return hJ.c.UseFallbackTexture
      }
      static set UseFallbackTexture(JJ) {
        hJ.c.UseFallbackTexture = JJ
      }
      static get RegisteredExternalClasses() {
        return nJ.d.RegisteredExternalClasses
      }
      static set RegisteredExternalClasses(JJ) {
        nJ.d.RegisteredExternalClasses = JJ
      }
      static get fallbackTexture() {
        return hJ.c.FallbackTexture
      }
      static set fallbackTexture(JJ) {
        hJ.c.FallbackTexture = JJ
      }
      static FetchToRef(JJ, cJ, ZJ, FJ, UJ, eJ) {
        const XJ = 4 * ((Math.abs(JJ) * ZJ % ZJ | 0) + (Math.abs(cJ) * FJ % FJ | 0) * ZJ);
        eJ.r = UJ[XJ] / 255, eJ.g = UJ[XJ + 1] / 255, eJ.b = UJ[XJ + 2] / 255, eJ.a = UJ[XJ + 3] / 255
      }
      static Mix(JJ, cJ, ZJ) {
        return 0
      }
      static Instantiate(JJ) {
        return nJ.d.Instantiate(JJ)
      }
      static SetImmediate(JJ) {
        sJ.d.SetImmediate(JJ)
      }
      static IsExponentOfTwo(JJ) {
        return !0
      }
      static FloatRound(JJ) {
        return Math.fround(JJ)
      }
      static GetFilename(JJ) {
        const cJ = JJ.lastIndexOf("/");
        return cJ < 0 ? JJ : JJ.substring(cJ + 1)
      }
      static GetFolderPath(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZJ = JJ.lastIndexOf("/");
        return ZJ < 0 ? cJ ? JJ : "" : JJ.substring(0, ZJ + 1)
      }
      static ToDegrees(JJ) {
        return 180 * JJ / Math.PI
      }
      static ToRadians(JJ) {
        return JJ * Math.PI / 180
      }
      static SmoothAngleChange(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
        const FJ = this.ToRadians(JJ),
          UJ = this.ToRadians(cJ);
        return this.ToDegrees(Math.atan2((1 - ZJ) * Math.sin(UJ) + ZJ * Math.sin(FJ), (1 - ZJ) * Math.cos(UJ) + ZJ * Math.cos(FJ)))
      }
      static MakeArray(JJ, cJ) {
        return !0 === cJ || void 0 !== JJ && null != JJ ? Array.isArray(JJ) ? JJ : [JJ] : null
      }
      static GetPointerPrefix(JJ) {
        return (0, eJ.i)() && !window.PointerEvent ? "mouse" : "pointer"
      }
      static SetCorsBehavior(JJ, cJ) {
        (0, DJ.A)(JJ, cJ)
      }
      static SetReferrerPolicyBehavior(JJ, cJ) {
        cJ.referrerPolicy = JJ
      }
      static get PreprocessUrl() {
        return DJ.g.PreprocessUrl
      }
      static set PreprocessUrl(JJ) {
        DJ.g.PreprocessUrl = JJ
      }
      static LoadImage(JJ, cJ, ZJ, FJ, UJ, eJ) {
        return (0, DJ.n)(JJ, cJ, ZJ, FJ, UJ, eJ)
      }
      static LoadFile(JJ, cJ, ZJ, FJ, UJ, eJ) {
        return (0, DJ.k)(JJ, cJ, ZJ, FJ, UJ, eJ)
      }
      static async LoadFileAsync(JJ) {
        let cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return await new Promise(((ZJ, FJ) => {
          (0, DJ.k)(JJ, (JJ => {
            ZJ(JJ)
          }), void 0, void 0, cJ, ((JJ, cJ) => {
            FJ(cJ)
          }))
        }))
      }
      static GetAssetUrl(JJ) {
        if (!JJ) return "";
        if (FJ.AssetBaseUrl && JJ.startsWith(FJ._DefaultAssetsUrl)) {
          const cJ = FJ.AssetBaseUrl.endsWith("/") ? FJ.AssetBaseUrl.slice(0, -1) : FJ.AssetBaseUrl;
          return JJ.replace(FJ._DefaultAssetsUrl, cJ)
        }
        return JJ
      }
      static GetBabylonScriptURL(JJ, cJ) {
        if (!JJ) return "";
        if (JJ.startsWith(FJ._DefaultCdnUrl))
          if (FJ.ScriptBaseUrl) {
            const cJ = FJ.ScriptBaseUrl.endsWith("/") ? FJ.ScriptBaseUrl.slice(0, -1) : FJ.ScriptBaseUrl;
            JJ = JJ.replace(FJ._DefaultCdnUrl, cJ)
          } else if (FJ._CdnVersion) {
          const cJ = `${FJ._DefaultCdnUrl}/v${FJ._CdnVersion}`;
          JJ.startsWith(cJ) || (JJ = JJ.replace(FJ._DefaultCdnUrl, cJ))
        }
        return JJ = FJ.ScriptPreprocessUrl(JJ), cJ && !FJ.IsAbsoluteUrl(JJ) && (JJ = FJ.GetAbsoluteUrl(JJ)), JJ
      }
      static LoadBabylonScript(JJ, cJ, ZJ, UJ) {
        JJ = FJ.GetBabylonScriptURL(JJ), FJ.LoadScript(JJ, cJ, ZJ)
      }
      static async LoadBabylonScriptAsync(JJ) {
        return JJ = FJ.GetBabylonScriptURL(JJ), await FJ.LoadScriptAsync(JJ)
      }
      static _LoadScriptNative(JJ, cJ, ZJ, UJ) {
        if (_native) {
          if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
            const JJ = "Loading a script as an ES module is not supported in Babylon Native";
            return void ZJ?.(JJ, new Error(JJ))
          }
          FJ.LoadFile(JJ, (JJ => {
            try {
              Function(JJ).apply(null), cJ && cJ()
            } catch (FJ) {
              ZJ && ZJ("LoadScript Error", FJ)
            }
          }), void 0, void 0, !1, ((JJ, cJ) => {
            ZJ && ZJ("LoadScript Error", cJ)
          }))
        }
      }
      static _LoadScriptWeb(JJ, cJ, ZJ, FJ) {
        let UJ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" === typeof importScripts) {
          try {
            importScripts(JJ), cJ && cJ()
          } catch (qJ) {
            ZJ?.(`Unable to load script '${JJ}' in worker`, qJ)
          }
          return
        }
        if (!(0, eJ.i)()) return void ZJ?.(`Cannot load script '${JJ}' outside of a window or a worker`);
        const XJ = document.getElementsByTagName("head")[0],
          AJ = document.createElement("script");
        UJ ? (AJ.setAttribute("type", "module"), AJ.innerText = JJ) : (AJ.setAttribute("type", "text/javascript"), AJ.setAttribute("src", JJ)), FJ && (AJ.id = FJ), AJ.onload = () => {
          cJ && cJ()
        }, AJ.onerror = cJ => {
          ZJ && ZJ(`Unable to load script '${JJ}'`, cJ)
        }, XJ.appendChild(AJ)
      }
      static async LoadScriptAsync(JJ, cJ) {
        return await new Promise(((ZJ, FJ) => {
          this.LoadScript(JJ, (() => {
            ZJ()
          }), ((JJ, cJ) => {
            FJ(cJ || new Error(JJ))
          }), cJ)
        }))
      }
      static ReadFileAsDataURL(JJ, cJ, ZJ) {
        const FJ = new FileReader,
          eJ = {
            onCompleteObservable: new UJ.c,
            abort: () => FJ.abort()
          };
        return FJ.onloadend = () => {
          eJ.onCompleteObservable.notifyObservers(eJ)
        }, FJ.onload = JJ => {
          cJ(JJ.target.result)
        }, FJ.onprogress = ZJ, FJ.readAsDataURL(JJ), eJ
      }
      static ReadFile(JJ, cJ, ZJ, FJ, UJ) {
        return (0, DJ.p)(JJ, cJ, ZJ, FJ, UJ)
      }
      static FileAsURL(JJ) {
        const cJ = new Blob([JJ]);
        return window.URL.createObjectURL(cJ)
      }
      static Format(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return JJ.toFixed(cJ)
      }
      static DeepCopy(JJ, cJ, ZJ, FJ) {
        AJ.e.DeepCopy(JJ, cJ, ZJ, FJ)
      }
      static IsEmpty(JJ) {
        for (const cJ in JJ)
          if (Object.prototype.hasOwnProperty.call(JJ, cJ)) return !1;
        return !0
      }
      static RegisterTopRootEvents(JJ, cJ) {
        for (let FJ = 0; FJ < cJ.length; FJ++) {
          const UJ = cJ[FJ];
          JJ.addEventListener(UJ.name, UJ.handler, !1);
          try {
            window.parent && window.parent.addEventListener(UJ.name, UJ.handler, !1)
          } catch (ZJ) {}
        }
      }
      static UnregisterTopRootEvents(JJ, cJ) {
        for (let FJ = 0; FJ < cJ.length; FJ++) {
          const UJ = cJ[FJ];
          JJ.removeEventListener(UJ.name, UJ.handler);
          try {
            JJ.parent && JJ.parent.removeEventListener(UJ.name, UJ.handler)
          } catch (ZJ) {}
        }
      }
      static async DumpFramebuffer(JJ, cJ, ZJ, FJ) {
        throw (0, jJ.m)("DumpTools")
      }
      static DumpData(JJ, cJ, ZJ, FJ) {
        throw (0, jJ.m)("DumpTools")
      }
      static async DumpDataAsync(JJ, cJ, ZJ) {
        throw (0, jJ.m)("DumpTools")
      }
      static _IsOffScreenCanvas(JJ) {
        return void 0 !== JJ.convertToBlob
      }
      static ToBlob(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          UJ = arguments.length > 3 ? arguments[3] : void 0;
        FJ._IsOffScreenCanvas(JJ) || JJ.toBlob || (JJ.toBlob = function(JJ, cJ, ZJ) {
          setTimeout((() => {
            const FJ = atob(this.toDataURL(cJ, ZJ).split(",")[1]),
              UJ = FJ.length,
              eJ = new Uint8Array(UJ);
            for (let JJ = 0; JJ < UJ; JJ++) eJ[JJ] = FJ.charCodeAt(JJ);
            JJ(new Blob([eJ]))
          }))
        }), FJ._IsOffScreenCanvas(JJ) ? JJ.convertToBlob({
          type: ZJ,
          quality: UJ
        }).then((JJ => cJ(JJ))) : JJ.toBlob((function(JJ) {
          cJ(JJ)
        }), ZJ, UJ)
      }
      static DownloadBlob(JJ, cJ) {
        if ("download" in document.createElement("a")) {
          if (!cJ) {
            const JJ = new Date;
            cJ = "screenshot_" + ((JJ.getFullYear() + "-" + (JJ.getMonth() + 1)).slice(2) + "-" + JJ.getDate() + "_" + JJ.getHours() + "-" + ("0" + JJ.getMinutes()).slice(-2)) + ".png"
          }
          FJ.Download(JJ, cJ)
        } else if (JJ && "undefined" !== typeof URL) {
          const cJ = URL.createObjectURL(JJ),
            ZJ = window.open("");
          if (!ZJ) return;
          const FJ = ZJ.document.createElement("img");
          FJ.onload = function() {
            URL.revokeObjectURL(cJ)
          }, FJ.src = cJ, ZJ.document.body.appendChild(FJ)
        }
      }
      static EncodeScreenshotCanvasData(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          UJ = arguments.length > 3 ? arguments[3] : void 0,
          eJ = arguments.length > 4 ? arguments[4] : void 0;
        if ("string" !== typeof UJ && cJ) {
          if (cJ) {
            if (FJ._IsOffScreenCanvas(JJ)) return void JJ.convertToBlob({
              type: ZJ,
              quality: eJ
            }).then((JJ => {
              const ZJ = new FileReader;
              ZJ.readAsDataURL(JJ), ZJ.onloadend = () => {
                const JJ = ZJ.result;
                cJ(JJ)
              }
            }));
            const UJ = JJ.toDataURL(ZJ, eJ);
            cJ(UJ)
          }
        } else this.ToBlob(JJ, (function(JJ) {
          JJ && FJ.DownloadBlob(JJ, UJ), cJ && cJ("")
        }), ZJ, eJ)
      }
      static Download(JJ, cJ) {
        if ("undefined" === typeof URL) return;
        const ZJ = window.URL.createObjectURL(JJ),
          FJ = document.createElement("a");
        document.body.appendChild(FJ), FJ.style.display = "none", FJ.href = ZJ, FJ.download = cJ, FJ.addEventListener("click", (() => {
          FJ.parentElement && FJ.parentElement.removeChild(FJ)
        })), FJ.click(), window.URL.revokeObjectURL(ZJ)
      }
      static BackCompatCameraNoPreventDefault(JJ) {
        return "boolean" === typeof JJ[0] ? JJ[0] : "boolean" === typeof JJ[1] && JJ[1]
      }
      static CreateScreenshot(JJ, cJ, ZJ, FJ) {
        throw (0, jJ.m)("ScreenshotTools")
      }
      static async CreateScreenshotAsync(JJ, cJ, ZJ) {
        throw (0, jJ.m)("ScreenshotTools")
      }
      static CreateScreenshotUsingRenderTarget(JJ, cJ, ZJ, FJ) {
        throw (0, jJ.m)("ScreenshotTools")
      }
      static async CreateScreenshotUsingRenderTargetAsync(JJ, cJ, ZJ) {
        throw (0, jJ.m)("ScreenshotTools")
      }
      static RandomId() {
        return (0, GJ.d)()
      }
      static IsBase64(JJ) {
        return (0, DJ.j)(JJ)
      }
      static DecodeBase64(JJ) {
        return (0, DJ.c)(JJ)
      }
      static get errorsCount() {
        return XJ.c.errorsCount
      }
      static Log(JJ) {
        XJ.c.Log(JJ)
      }
      static Warn(JJ) {
        XJ.c.Warn(JJ)
      }
      static Error(JJ) {
        XJ.c.Error(JJ)
      }
      static get LogCache() {
        return XJ.c.LogCache
      }
      static ClearLogCache() {
        XJ.c.ClearLogCache()
      }
      static set LogLevels(JJ) {
        XJ.c.LogLevels = JJ
      }
      static set PerformanceLogLevel(JJ) {
        (JJ & FJ.PerformanceUserMarkLogLevel) !== FJ.PerformanceUserMarkLogLevel ? (JJ & FJ.PerformanceConsoleLogLevel) !== FJ.PerformanceConsoleLogLevel ? (FJ.StartPerformanceCounter = FJ._StartPerformanceCounterDisabled, FJ.EndPerformanceCounter = FJ._EndPerformanceCounterDisabled, _native?.disablePerformanceLogging?.()) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(2), FJ.StartPerformanceCounter = FJ._StartMarkNative, FJ.EndPerformanceCounter = FJ._EndMarkNative) : (FJ.StartPerformanceCounter = FJ._StartPerformanceConsole, FJ.EndPerformanceCounter = FJ._EndPerformanceConsole) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(1), FJ.StartPerformanceCounter = FJ._StartMarkNative, FJ.EndPerformanceCounter = FJ._EndMarkNative) : (FJ.StartPerformanceCounter = FJ._StartUserMark, FJ.EndPerformanceCounter = FJ._EndUserMark)
      }
      static _StartPerformanceCounterDisabled(JJ, cJ) {}
      static _EndPerformanceCounterDisabled(JJ, cJ) {}
      static _StartUserMark(JJ) {
        let cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!FJ._Performance) {
          if (!(0, eJ.i)()) return;
          FJ._Performance = window.performance
        }
        cJ && FJ._Performance.mark && FJ._Performance.mark(JJ + "-Begin")
      }
      static _EndUserMark(JJ) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && FJ._Performance.mark && (FJ._Performance.mark(JJ + "-End"), FJ._Performance.measure(JJ, JJ + "-Begin", JJ + "-End"))
      }
      static _StartPerformanceConsole(JJ) {
        let cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        cJ && (FJ._StartUserMark(JJ, cJ), console.time && console.time(JJ))
      }
      static _EndPerformanceConsole(JJ) {
        let cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        cJ && (FJ._EndUserMark(JJ, cJ), console.timeEnd(JJ))
      }
      static _StartMarkNative(JJ) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
          if (FJ._NativePerformanceCounterHandles.has(JJ)) FJ.Warn(`Performance counter with name ${JJ} is already started.`);
          else {
            const cJ = _native.startPerformanceCounter(JJ);
            FJ._NativePerformanceCounterHandles.set(JJ, cJ)
          }
      }
      static _EndMarkNative(JJ) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
          const cJ = FJ._NativePerformanceCounterHandles.get(JJ);
          cJ ? (_native.endPerformanceCounter(cJ), FJ._NativePerformanceCounterHandles.delete(JJ)) : FJ.Warn(`Performance counter with name ${JJ} was not started.`)
        }
      }
      static get Now() {
        return qJ.c.Now
      }
      static GetClassName(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZJ = null;
        if (!cJ && JJ.getClassName) ZJ = JJ.getClassName();
        else {
          if (JJ instanceof Object) {
            ZJ = (cJ ? JJ : Object.getPrototypeOf(JJ)).constructor.__bjsclassName__
          }
          ZJ || (ZJ = typeof JJ)
        }
        return ZJ
      }
      static First(JJ, cJ) {
        for (const ZJ of JJ)
          if (cJ(ZJ)) return ZJ;
        return null
      }
      static getFullClassName(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZJ = null,
          FJ = null;
        if (!cJ && JJ.getClassName) ZJ = JJ.getClassName();
        else {
          if (JJ instanceof Object) {
            const UJ = cJ ? JJ : Object.getPrototypeOf(JJ);
            ZJ = UJ.constructor.__bjsclassName__, FJ = UJ.constructor.__bjsmoduleName__
          }
          ZJ || (ZJ = typeof JJ)
        }
        return ZJ ? (null != FJ ? FJ + "." : "") + ZJ : null
      }
      static async DelayAsync(JJ) {
        await new Promise((cJ => {
          setTimeout((() => {
            cJ()
          }), JJ)
        }))
      }
      static IsSafari() {
        return !!(0, eJ.h)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }
    }

    function rJ(JJ, cJ) {
      return ZJ => {
        ZJ.__bjsclassName__ = JJ, ZJ.__bjsmoduleName__ = null != cJ ? cJ : null
      }
    }
    FJ = xJ, xJ.AssetBaseUrl = "", xJ.UseCustomRequestHeaders = !1, xJ.CustomRequestHeaders = YJ.d.CustomRequestHeaders, xJ.GetDOMTextContent = eJ.e, xJ._DefaultCdnUrl = "https://cdn.babylonjs.com", xJ._CdnVersion = "9.28.0", xJ._DefaultAssetsUrl = "https://assets.babylonjs.com/core", xJ.LoadScript = "undefined" === typeof _native ? FJ._LoadScriptWeb : FJ._LoadScriptNative, xJ.GetAbsoluteUrl = "object" === typeof document ? JJ => {
      const cJ = document.createElement("a");
      return cJ.href = JJ, cJ.href
    } : "function" === typeof URL && "object" === typeof location ? JJ => new URL(JJ, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
    }, xJ.NoneLogLevel = XJ.c.NoneLogLevel, xJ.MessageLogLevel = XJ.c.MessageLogLevel, xJ.WarningLogLevel = XJ.c.WarningLogLevel, xJ.ErrorLogLevel = XJ.c.ErrorLogLevel, xJ.AllLogLevel = XJ.c.AllLogLevel, xJ.IsWindowObjectExist = eJ.i, xJ.PerformanceNoneLogLevel = 0, xJ.PerformanceUserMarkLogLevel = 1, xJ.PerformanceConsoleLogLevel = 2, xJ._NativePerformanceCounterHandles = new Map, xJ.StartPerformanceCounter = FJ._StartPerformanceCounterDisabled, xJ.EndPerformanceCounter = FJ._EndPerformanceCounterDisabled;
    class vJ {
      constructor(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.iterations = JJ, this.index = FJ - 1, this._done = !1, this._fn = cJ, this._successCallback = ZJ
      }
      executeNext() {
        this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
      }
      breakLoop() {
        this._done = !0, this._successCallback()
      }
      static Run(JJ, cJ, ZJ) {
        const FJ = new vJ(JJ, cJ, ZJ, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return FJ.executeNext(), FJ
      }
      static SyncAsyncForLoop(JJ, cJ, ZJ, FJ, UJ) {
        let eJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return vJ.Run(Math.ceil(JJ / cJ), (FJ => {
          UJ && UJ() ? FJ.breakLoop() : setTimeout((() => {
            for (let eJ = 0; eJ < cJ; ++eJ) {
              const XJ = FJ.index * cJ + eJ;
              if (XJ >= JJ) break;
              if (ZJ(XJ), UJ && UJ()) {
                FJ.breakLoop();
                break
              }
            }
            FJ.executeNext()
          }), eJ)
        }), FJ)
      }
    }
    let mJ = !1;

    function QJ() {
      mJ || (mJ = !0, xJ.Mix = fJ.g, xJ.IsExponentOfTwo = fJ.e, hJ.c.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z")
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);