export const id = 244;
export const ids = [244];
export const modules = {
  39223: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => IY
    });
    var FY = DY(38040),
      AY = DY(36569);
    class IY {
      static Instantiate(YY) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[YY]) return this.RegisteredExternalClasses[YY];
        const rY = (0, AY.e)(YY);
        if (rY) return rY;
        FY.d.Warn(YY + " not found, you may have missed an import.");
        const DY = YY.split(".");
        let IY = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
        for (let FY = 0, AY = DY.length; FY < AY; FY++) IY = IY[DY[FY]];
        return "function" !== typeof IY ? null : IY
      }
    }
    IY.RegisteredExternalClasses = {}
  },
  39044: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => AY
    });
    var FY = DY(39013);
    class AY {
      static get Now() {
        return (0, FY.l)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
      }
    }
  },
  39065: (YY, rY, DY) => {
    function FY(YY) {
      let rY = 1;
      do {
        rY *= 2
      } while (rY < YY);
      return rY === YY
    }

    function AY(YY, rY, DY) {
      return YY * (1 - DY) + rY * DY
    }

    function IY(YY) {
      const rY = RY(YY),
        DY = OY(YY);
      return rY - YY > YY - DY ? DY : rY
    }

    function RY(YY) {
      return YY--, YY |= YY >> 1, YY |= YY >> 2, YY |= YY >> 4, YY |= YY >> 8, YY |= YY >> 16, ++YY
    }

    function OY(YY) {
      return YY |= YY >> 1, YY |= YY >> 2, YY |= YY >> 4, YY |= YY >> 8, (YY |= YY >> 16) - (YY >> 1)
    }

    function gY(YY, rY) {
      let DY;
      switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
        case 1:
          DY = OY(YY);
          break;
        case 2:
          DY = IY(YY);
          break;
        default:
          DY = RY(YY)
      }
      return Math.min(DY, rY)
    }
    DY.d(rY, {
      d: () => OY,
      f: () => gY,
      g: () => FY,
      j: () => AY,
      n: () => IY
    })
  },
  39219: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => mY,
      f: () => SY,
      i: () => WY,
      m: () => EY
    });
    var FY, AY = DY(36552),
      IY = DY(39013),
      RY = DY(38040),
      OY = DY(38037),
      gY = DY(39044),
      aY = DY(39029),
      vY = DY(39169),
      uY = DY(36546),
      sY = DY(39160),
      iY = DY(39037),
      yY = DY(39223),
      QY = DY(37242),
      oY = DY(39065);
    class WY {
      static get BaseUrl() {
        return sY.d.BaseUrl
      }
      static set BaseUrl(YY) {
        sY.d.BaseUrl = YY
      }
      static get CleanUrl() {
        return sY.d.CleanUrl
      }
      static set CleanUrl(YY) {
        sY.d.CleanUrl = YY
      }
      static IsAbsoluteUrl(YY) {
        return 0 === YY.indexOf("//") || -1 !== YY.indexOf("://") && (-1 !== YY.indexOf(".") && (-1 !== YY.indexOf("/") && (!(YY.indexOf(":") > YY.indexOf("/")) && (YY.indexOf("://") < YY.indexOf(".") || (0 === YY.indexOf("data:") || 0 === YY.indexOf("blob:"))))))
      }
      static set ScriptBaseUrl(YY) {
        sY.d.ScriptBaseUrl = YY
      }
      static get ScriptBaseUrl() {
        return sY.d.ScriptBaseUrl
      }
      static set CDNBaseUrl(YY) {
        FY.ScriptBaseUrl = YY, FY.AssetBaseUrl = YY
      }
      static set ScriptPreprocessUrl(YY) {
        sY.d.ScriptPreprocessUrl = YY
      }
      static get ScriptPreprocessUrl() {
        return sY.d.ScriptPreprocessUrl
      }
      static get DefaultRetryStrategy() {
        return sY.d.DefaultRetryStrategy
      }
      static set DefaultRetryStrategy(YY) {
        sY.d.DefaultRetryStrategy = YY
      }
      static get CorsBehavior() {
        return sY.d.CorsBehavior
      }
      static set CorsBehavior(YY) {
        sY.d.CorsBehavior = YY
      }
      static get UseFallbackTexture() {
        return uY.d.UseFallbackTexture
      }
      static set UseFallbackTexture(YY) {
        uY.d.UseFallbackTexture = YY
      }
      static get RegisteredExternalClasses() {
        return yY.e.RegisteredExternalClasses
      }
      static set RegisteredExternalClasses(YY) {
        yY.e.RegisteredExternalClasses = YY
      }
      static get fallbackTexture() {
        return uY.d.FallbackTexture
      }
      static set fallbackTexture(YY) {
        uY.d.FallbackTexture = YY
      }
      static FetchToRef(YY, rY, DY, FY, AY, IY) {
        const RY = 4 * ((Math.abs(YY) * DY % DY | 0) + (Math.abs(rY) * FY % FY | 0) * DY);
        IY.r = AY[RY] / 255, IY.g = AY[RY + 1] / 255, IY.b = AY[RY + 2] / 255, IY.a = AY[RY + 3] / 255
      }
      static Mix(YY, rY, DY) {
        return 0
      }
      static Instantiate(YY) {
        return yY.e.Instantiate(YY)
      }
      static SetImmediate(YY) {
        iY.d.SetImmediate(YY)
      }
      static IsExponentOfTwo(YY) {
        return !0
      }
      static FloatRound(YY) {
        return Math.fround(YY)
      }
      static GetFilename(YY) {
        const rY = YY.lastIndexOf("/");
        return rY < 0 ? YY : YY.substring(rY + 1)
      }
      static GetFolderPath(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const DY = YY.lastIndexOf("/");
        return DY < 0 ? rY ? YY : "" : YY.substring(0, DY + 1)
      }
      static ToDegrees(YY) {
        return 180 * YY / Math.PI
      }
      static ToRadians(YY) {
        return YY * Math.PI / 180
      }
      static SmoothAngleChange(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
        const FY = this.ToRadians(YY),
          AY = this.ToRadians(rY);
        return this.ToDegrees(Math.atan2((1 - DY) * Math.sin(AY) + DY * Math.sin(FY), (1 - DY) * Math.cos(AY) + DY * Math.cos(FY)))
      }
      static MakeArray(YY, rY) {
        return !0 === rY || void 0 !== YY && null != YY ? Array.isArray(YY) ? YY : [YY] : null
      }
      static GetPointerPrefix(YY) {
        return (0, IY.l)() && !window.PointerEvent ? "mouse" : "pointer"
      }
      static SetCorsBehavior(YY, rY) {
        (0, sY.y)(YY, rY)
      }
      static SetReferrerPolicyBehavior(YY, rY) {
        rY.referrerPolicy = YY
      }
      static get PreprocessUrl() {
        return sY.d.PreprocessUrl
      }
      static set PreprocessUrl(YY) {
        sY.d.PreprocessUrl = YY
      }
      static LoadImage(YY, rY, DY, FY, AY, IY) {
        return (0, sY.m)(YY, rY, DY, FY, AY, IY)
      }
      static LoadFile(YY, rY, DY, FY, AY, IY) {
        return (0, sY.i)(YY, rY, DY, FY, AY, IY)
      }
      static async LoadFileAsync(YY) {
        let rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return await new Promise(((DY, FY) => {
          (0, sY.i)(YY, (YY => {
            DY(YY)
          }), void 0, void 0, rY, ((YY, rY) => {
            FY(rY)
          }))
        }))
      }
      static GetAssetUrl(YY) {
        if (!YY) return "";
        if (FY.AssetBaseUrl && YY.startsWith(FY._DefaultAssetsUrl)) {
          const rY = FY.AssetBaseUrl.endsWith("/") ? FY.AssetBaseUrl.slice(0, -1) : FY.AssetBaseUrl;
          return YY.replace(FY._DefaultAssetsUrl, rY)
        }
        return YY
      }
      static GetBabylonScriptURL(YY, rY) {
        if (!YY) return "";
        if (YY.startsWith(FY._DefaultCdnUrl))
          if (FY.ScriptBaseUrl) {
            const rY = FY.ScriptBaseUrl.endsWith("/") ? FY.ScriptBaseUrl.slice(0, -1) : FY.ScriptBaseUrl;
            YY = YY.replace(FY._DefaultCdnUrl, rY)
          } else if (FY._CdnVersion) {
          const rY = `${FY._DefaultCdnUrl}/v${FY._CdnVersion}`;
          YY.startsWith(rY) || (YY = YY.replace(FY._DefaultCdnUrl, rY))
        }
        return YY = FY.ScriptPreprocessUrl(YY), rY && !FY.IsAbsoluteUrl(YY) && (YY = FY.GetAbsoluteUrl(YY)), YY
      }
      static LoadBabylonScript(YY, rY, DY, AY) {
        YY = FY.GetBabylonScriptURL(YY), FY.LoadScript(YY, rY, DY)
      }
      static async LoadBabylonScriptAsync(YY) {
        return YY = FY.GetBabylonScriptURL(YY), await FY.LoadScriptAsync(YY)
      }
      static _LoadScriptNative(YY, rY, DY, AY) {
        if (_native) {
          if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
            const YY = "Loading a script as an ES module is not supported in Babylon Native";
            return void DY?.(YY, new Error(YY))
          }
          FY.LoadFile(YY, (YY => {
            try {
              Function(YY).apply(null), rY && rY()
            } catch (FY) {
              DY && DY("LoadScript Error", FY)
            }
          }), void 0, void 0, !1, ((YY, rY) => {
            DY && DY("LoadScript Error", rY)
          }))
        }
      }
      static _LoadScriptWeb(YY, rY, DY, FY) {
        let AY = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" === typeof importScripts) {
          try {
            importScripts(YY), rY && rY()
          } catch (gY) {
            DY?.(`Unable to load script '${YY}' in worker`, gY)
          }
          return
        }
        if (!(0, IY.l)()) return void DY?.(`Cannot load script '${YY}' outside of a window or a worker`);
        const RY = document.getElementsByTagName("head")[0],
          OY = document.createElement("script");
        AY ? (OY.setAttribute("type", "module"), OY.innerText = YY) : (OY.setAttribute("type", "text/javascript"), OY.setAttribute("src", YY)), FY && (OY.id = FY), OY.onload = () => {
          rY && rY()
        }, OY.onerror = rY => {
          DY && DY(`Unable to load script '${YY}'`, rY)
        }, RY.appendChild(OY)
      }
      static async LoadScriptAsync(YY, rY) {
        return await new Promise(((DY, FY) => {
          this.LoadScript(YY, (() => {
            DY()
          }), ((YY, rY) => {
            FY(rY || new Error(YY))
          }), rY)
        }))
      }
      static ReadFileAsDataURL(YY, rY, DY) {
        const FY = new FileReader,
          IY = {
            onCompleteObservable: new AY.e,
            abort: () => FY.abort()
          };
        return FY.onloadend = () => {
          IY.onCompleteObservable.notifyObservers(IY)
        }, FY.onload = YY => {
          rY(YY.target.result)
        }, FY.onprogress = DY, FY.readAsDataURL(YY), IY
      }
      static ReadFile(YY, rY, DY, FY, AY) {
        return (0, sY.p)(YY, rY, DY, FY, AY)
      }
      static FileAsURL(YY) {
        const rY = new Blob([YY]);
        return window.URL.createObjectURL(rY)
      }
      static Format(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return YY.toFixed(rY)
      }
      static DeepCopy(YY, rY, DY, FY) {
        OY.c.DeepCopy(YY, rY, DY, FY)
      }
      static IsEmpty(YY) {
        for (const rY in YY)
          if (Object.prototype.hasOwnProperty.call(YY, rY)) return !1;
        return !0
      }
      static RegisterTopRootEvents(YY, rY) {
        for (let FY = 0; FY < rY.length; FY++) {
          const AY = rY[FY];
          YY.addEventListener(AY.name, AY.handler, !1);
          try {
            window.parent && window.parent.addEventListener(AY.name, AY.handler, !1)
          } catch (DY) {}
        }
      }
      static UnregisterTopRootEvents(YY, rY) {
        for (let FY = 0; FY < rY.length; FY++) {
          const AY = rY[FY];
          YY.removeEventListener(AY.name, AY.handler);
          try {
            YY.parent && YY.parent.removeEventListener(AY.name, AY.handler)
          } catch (DY) {}
        }
      }
      static async DumpFramebuffer(YY, rY, DY, FY) {
        throw (0, aY.i)("DumpTools")
      }
      static DumpData(YY, rY, DY, FY) {
        throw (0, aY.i)("DumpTools")
      }
      static async DumpDataAsync(YY, rY, DY) {
        throw (0, aY.i)("DumpTools")
      }
      static _IsOffScreenCanvas(YY) {
        return void 0 !== YY.convertToBlob
      }
      static ToBlob(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          AY = arguments.length > 3 ? arguments[3] : void 0;
        FY._IsOffScreenCanvas(YY) || YY.toBlob || (YY.toBlob = function(YY, rY, DY) {
          setTimeout((() => {
            const FY = atob(this.toDataURL(rY, DY).split(",")[1]),
              AY = FY.length,
              IY = new Uint8Array(AY);
            for (let YY = 0; YY < AY; YY++) IY[YY] = FY.charCodeAt(YY);
            YY(new Blob([IY]))
          }))
        }), FY._IsOffScreenCanvas(YY) ? YY.convertToBlob({
          type: DY,
          quality: AY
        }).then((YY => rY(YY))) : YY.toBlob((function(YY) {
          rY(YY)
        }), DY, AY)
      }
      static DownloadBlob(YY, rY) {
        if ("download" in document.createElement("a")) {
          if (!rY) {
            const YY = new Date;
            rY = "screenshot_" + ((YY.getFullYear() + "-" + (YY.getMonth() + 1)).slice(2) + "-" + YY.getDate() + "_" + YY.getHours() + "-" + ("0" + YY.getMinutes()).slice(-2)) + ".png"
          }
          FY.Download(YY, rY)
        } else if (YY && "undefined" !== typeof URL) {
          const rY = URL.createObjectURL(YY),
            DY = window.open("");
          if (!DY) return;
          const FY = DY.document.createElement("img");
          FY.onload = function() {
            URL.revokeObjectURL(rY)
          }, FY.src = rY, DY.document.body.appendChild(FY)
        }
      }
      static EncodeScreenshotCanvasData(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          AY = arguments.length > 3 ? arguments[3] : void 0,
          IY = arguments.length > 4 ? arguments[4] : void 0;
        if ("string" !== typeof AY && rY) {
          if (rY) {
            if (FY._IsOffScreenCanvas(YY)) return void YY.convertToBlob({
              type: DY,
              quality: IY
            }).then((YY => {
              const DY = new FileReader;
              DY.readAsDataURL(YY), DY.onloadend = () => {
                const YY = DY.result;
                rY(YY)
              }
            }));
            const AY = YY.toDataURL(DY, IY);
            rY(AY)
          }
        } else this.ToBlob(YY, (function(YY) {
          YY && FY.DownloadBlob(YY, AY), rY && rY("")
        }), DY, IY)
      }
      static Download(YY, rY) {
        if ("undefined" === typeof URL) return;
        const DY = window.URL.createObjectURL(YY),
          FY = document.createElement("a");
        document.body.appendChild(FY), FY.style.display = "none", FY.href = DY, FY.download = rY, FY.addEventListener("click", (() => {
          FY.parentElement && FY.parentElement.removeChild(FY)
        })), FY.click(), window.URL.revokeObjectURL(DY)
      }
      static BackCompatCameraNoPreventDefault(YY) {
        return "boolean" === typeof YY[0] ? YY[0] : "boolean" === typeof YY[1] && YY[1]
      }
      static CreateScreenshot(YY, rY, DY, FY) {
        throw (0, aY.i)("ScreenshotTools")
      }
      static async CreateScreenshotAsync(YY, rY, DY) {
        throw (0, aY.i)("ScreenshotTools")
      }
      static CreateScreenshotUsingRenderTarget(YY, rY, DY, FY) {
        throw (0, aY.i)("ScreenshotTools")
      }
      static async CreateScreenshotUsingRenderTargetAsync(YY, rY, DY) {
        throw (0, aY.i)("ScreenshotTools")
      }
      static RandomId() {
        return (0, QY.c)()
      }
      static IsBase64(YY) {
        return (0, sY.g)(YY)
      }
      static DecodeBase64(YY) {
        return (0, sY.b)(YY)
      }
      static get errorsCount() {
        return RY.d.errorsCount
      }
      static Log(YY) {
        RY.d.Log(YY)
      }
      static Warn(YY) {
        RY.d.Warn(YY)
      }
      static Error(YY) {
        RY.d.Error(YY)
      }
      static get LogCache() {
        return RY.d.LogCache
      }
      static ClearLogCache() {
        RY.d.ClearLogCache()
      }
      static set LogLevels(YY) {
        RY.d.LogLevels = YY
      }
      static set PerformanceLogLevel(YY) {
        (YY & FY.PerformanceUserMarkLogLevel) !== FY.PerformanceUserMarkLogLevel ? (YY & FY.PerformanceConsoleLogLevel) !== FY.PerformanceConsoleLogLevel ? (FY.StartPerformanceCounter = FY._StartPerformanceCounterDisabled, FY.EndPerformanceCounter = FY._EndPerformanceCounterDisabled, _native?.disablePerformanceLogging?.()) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(2), FY.StartPerformanceCounter = FY._StartMarkNative, FY.EndPerformanceCounter = FY._EndMarkNative) : (FY.StartPerformanceCounter = FY._StartPerformanceConsole, FY.EndPerformanceCounter = FY._EndPerformanceConsole) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(1), FY.StartPerformanceCounter = FY._StartMarkNative, FY.EndPerformanceCounter = FY._EndMarkNative) : (FY.StartPerformanceCounter = FY._StartUserMark, FY.EndPerformanceCounter = FY._EndUserMark)
      }
      static _StartPerformanceCounterDisabled(YY, rY) {}
      static _EndPerformanceCounterDisabled(YY, rY) {}
      static _StartUserMark(YY) {
        let rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!FY._Performance) {
          if (!(0, IY.l)()) return;
          FY._Performance = window.performance
        }
        rY && FY._Performance.mark && FY._Performance.mark(YY + "-Begin")
      }
      static _EndUserMark(YY) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && FY._Performance.mark && (FY._Performance.mark(YY + "-End"), FY._Performance.measure(YY, YY + "-Begin", YY + "-End"))
      }
      static _StartPerformanceConsole(YY) {
        let rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        rY && (FY._StartUserMark(YY, rY), console.time && console.time(YY))
      }
      static _EndPerformanceConsole(YY) {
        let rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        rY && (FY._EndUserMark(YY, rY), console.timeEnd(YY))
      }
      static _StartMarkNative(YY) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
          if (FY._NativePerformanceCounterHandles.has(YY)) FY.Warn(`Performance counter with name ${YY} is already started.`);
          else {
            const rY = _native.startPerformanceCounter(YY);
            FY._NativePerformanceCounterHandles.set(YY, rY)
          }
      }
      static _EndMarkNative(YY) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
          const rY = FY._NativePerformanceCounterHandles.get(YY);
          rY ? (_native.endPerformanceCounter(rY), FY._NativePerformanceCounterHandles.delete(YY)) : FY.Warn(`Performance counter with name ${YY} was not started.`)
        }
      }
      static get Now() {
        return gY.c.Now
      }
      static GetClassName(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          DY = null;
        if (!rY && YY.getClassName) DY = YY.getClassName();
        else {
          if (YY instanceof Object) {
            DY = (rY ? YY : Object.getPrototypeOf(YY)).constructor.__bjsclassName__
          }
          DY || (DY = typeof YY)
        }
        return DY
      }
      static First(YY, rY) {
        for (const DY of YY)
          if (rY(DY)) return DY;
        return null
      }
      static getFullClassName(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          DY = null,
          FY = null;
        if (!rY && YY.getClassName) DY = YY.getClassName();
        else {
          if (YY instanceof Object) {
            const AY = rY ? YY : Object.getPrototypeOf(YY);
            DY = AY.constructor.__bjsclassName__, FY = AY.constructor.__bjsmoduleName__
          }
          DY || (DY = typeof YY)
        }
        return DY ? (null != FY ? FY + "." : "") + DY : null
      }
      static async DelayAsync(YY) {
        await new Promise((rY => {
          setTimeout((() => {
            rY()
          }), YY)
        }))
      }
      static IsSafari() {
        return !!(0, IY.i)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }
    }

    function EY(YY, rY) {
      return DY => {
        DY.__bjsclassName__ = YY, DY.__bjsmoduleName__ = null != rY ? rY : null
      }
    }
    FY = WY, WY.AssetBaseUrl = "", WY.UseCustomRequestHeaders = !1, WY.CustomRequestHeaders = vY.d.CustomRequestHeaders, WY.GetDOMTextContent = IY.d, WY._DefaultCdnUrl = "https://cdn.babylonjs.com", WY._CdnVersion = "9.28.0", WY._DefaultAssetsUrl = "https://assets.babylonjs.com/core", WY.LoadScript = "undefined" === typeof _native ? FY._LoadScriptWeb : FY._LoadScriptNative, WY.GetAbsoluteUrl = "object" === typeof document ? YY => {
      const rY = document.createElement("a");
      return rY.href = YY, rY.href
    } : "function" === typeof URL && "object" === typeof location ? YY => new URL(YY, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
    }, WY.NoneLogLevel = RY.d.NoneLogLevel, WY.MessageLogLevel = RY.d.MessageLogLevel, WY.WarningLogLevel = RY.d.WarningLogLevel, WY.ErrorLogLevel = RY.d.ErrorLogLevel, WY.AllLogLevel = RY.d.AllLogLevel, WY.IsWindowObjectExist = IY.l, WY.PerformanceNoneLogLevel = 0, WY.PerformanceUserMarkLogLevel = 1, WY.PerformanceConsoleLogLevel = 2, WY._NativePerformanceCounterHandles = new Map, WY.StartPerformanceCounter = FY._StartPerformanceCounterDisabled, WY.EndPerformanceCounter = FY._EndPerformanceCounterDisabled;
    class mY {
      constructor(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.iterations = YY, this.index = FY - 1, this._done = !1, this._fn = rY, this._successCallback = DY
      }
      executeNext() {
        this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
      }
      breakLoop() {
        this._done = !0, this._successCallback()
      }
      static Run(YY, rY, DY) {
        const FY = new mY(YY, rY, DY, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return FY.executeNext(), FY
      }
      static SyncAsyncForLoop(YY, rY, DY, FY, AY) {
        let IY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return mY.Run(Math.ceil(YY / rY), (FY => {
          AY && AY() ? FY.breakLoop() : setTimeout((() => {
            for (let IY = 0; IY < rY; ++IY) {
              const RY = FY.index * rY + IY;
              if (RY >= YY) break;
              if (DY(RY), AY && AY()) {
                FY.breakLoop();
                break
              }
            }
            FY.executeNext()
          }), IY)
        }), FY)
      }
    }
    let VY = !1;

    function SY() {
      VY || (VY = !0, WY.Mix = oY.j, WY.IsExponentOfTwo = oY.g, uY.d.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z")
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);