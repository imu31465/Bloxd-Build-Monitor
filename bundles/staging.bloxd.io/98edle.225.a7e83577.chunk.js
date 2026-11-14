export const id = 225;
export const ids = [225];
export const modules = {
  37688: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => zR
    });
    var wW = MW(36721),
      CW = MW(35361);
    class zR {
      static Instantiate(WW) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[WW]) return this.RegisteredExternalClasses[WW];
        const RW = (0, CW.c)(WW);
        if (RW) return RW;
        wW.b.Warn(WW + " not found, you may have missed an import.");
        const MW = WW.split(".");
        let zR = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
        for (let wW = 0, CW = MW.length; wW < CW; wW++) zR = zR[MW[wW]];
        return "function" !== typeof zR ? null : zR
      }
    }
    zR.RegisteredExternalClasses = {}
  },
  37488: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => CW
    });
    var wW = MW(37456);
    class CW {
      static get Now() {
        return (0, wW.m)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
      }
    }
  },
  37520: (WW, RW, MW) => {
    function wW(WW) {
      let RW = 1;
      do {
        RW *= 2
      } while (RW < WW);
      return RW === WW
    }

    function CW(WW, RW, MW) {
      return WW * (1 - MW) + RW * MW
    }

    function zR(WW) {
      const RW = AW(WW),
        MW = bR(WW);
      return RW - WW > WW - MW ? MW : RW
    }

    function AW(WW) {
      return WW--, WW |= WW >> 1, WW |= WW >> 2, WW |= WW >> 4, WW |= WW >> 8, WW |= WW >> 16, ++WW
    }

    function bR(WW) {
      return WW |= WW >> 1, WW |= WW >> 2, WW |= WW >> 4, WW |= WW >> 8, (WW |= WW >> 16) - (WW >> 1)
    }

    function yR(WW, RW) {
      let MW;
      switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
        case 1:
          MW = bR(WW);
          break;
        case 2:
          MW = zR(WW);
          break;
        default:
          MW = AW(WW)
      }
      return Math.min(MW, RW)
    }
    MW.d(RW, {
      c: () => bR,
      e: () => yR,
      f: () => wW,
      i: () => CW,
      k: () => zR
    })
  },
  37685: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => IW,
      f: () => lW,
      j: () => JW,
      n: () => PW
    });
    var wW, CW = MW(35346),
      zR = MW(37456),
      AW = MW(36721),
      bR = MW(36716),
      yR = MW(37488),
      NW = MW(37470),
      eW = MW(37637),
      BW = MW(35344),
      tR = MW(37635),
      TW = MW(37483),
      gR = MW(37688),
      iR = MW(35984),
      YW = MW(37520);
    class JW {
      static get BaseUrl() {
        return tR.c.BaseUrl
      }
      static set BaseUrl(WW) {
        tR.c.BaseUrl = WW
      }
      static get CleanUrl() {
        return tR.c.CleanUrl
      }
      static set CleanUrl(WW) {
        tR.c.CleanUrl = WW
      }
      static IsAbsoluteUrl(WW) {
        return 0 === WW.indexOf("//") || -1 !== WW.indexOf("://") && (-1 !== WW.indexOf(".") && (-1 !== WW.indexOf("/") && (!(WW.indexOf(":") > WW.indexOf("/")) && (WW.indexOf("://") < WW.indexOf(".") || (0 === WW.indexOf("data:") || 0 === WW.indexOf("blob:"))))))
      }
      static set ScriptBaseUrl(WW) {
        tR.c.ScriptBaseUrl = WW
      }
      static get ScriptBaseUrl() {
        return tR.c.ScriptBaseUrl
      }
      static set CDNBaseUrl(WW) {
        wW.ScriptBaseUrl = WW, wW.AssetBaseUrl = WW
      }
      static set ScriptPreprocessUrl(WW) {
        tR.c.ScriptPreprocessUrl = WW
      }
      static get ScriptPreprocessUrl() {
        return tR.c.ScriptPreprocessUrl
      }
      static get DefaultRetryStrategy() {
        return tR.c.DefaultRetryStrategy
      }
      static set DefaultRetryStrategy(WW) {
        tR.c.DefaultRetryStrategy = WW
      }
      static get CorsBehavior() {
        return tR.c.CorsBehavior
      }
      static set CorsBehavior(WW) {
        tR.c.CorsBehavior = WW
      }
      static get UseFallbackTexture() {
        return BW.d.UseFallbackTexture
      }
      static set UseFallbackTexture(WW) {
        BW.d.UseFallbackTexture = WW
      }
      static get RegisteredExternalClasses() {
        return gR.e.RegisteredExternalClasses
      }
      static set RegisteredExternalClasses(WW) {
        gR.e.RegisteredExternalClasses = WW
      }
      static get fallbackTexture() {
        return BW.d.FallbackTexture
      }
      static set fallbackTexture(WW) {
        BW.d.FallbackTexture = WW
      }
      static FetchToRef(WW, RW, MW, wW, CW, zR) {
        const AW = 4 * ((Math.abs(WW) * MW % MW | 0) + (Math.abs(RW) * wW % wW | 0) * MW);
        zR.r = CW[AW] / 255, zR.g = CW[AW + 1] / 255, zR.b = CW[AW + 2] / 255, zR.a = CW[AW + 3] / 255
      }
      static Mix(WW, RW, MW) {
        return 0
      }
      static Instantiate(WW) {
        return gR.e.Instantiate(WW)
      }
      static SetImmediate(WW) {
        TW.c.SetImmediate(WW)
      }
      static IsExponentOfTwo(WW) {
        return !0
      }
      static FloatRound(WW) {
        return Math.fround(WW)
      }
      static GetFilename(WW) {
        const RW = WW.lastIndexOf("/");
        return RW < 0 ? WW : WW.substring(RW + 1)
      }
      static GetFolderPath(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const MW = WW.lastIndexOf("/");
        return MW < 0 ? RW ? WW : "" : WW.substring(0, MW + 1)
      }
      static ToDegrees(WW) {
        return 180 * WW / Math.PI
      }
      static ToRadians(WW) {
        return WW * Math.PI / 180
      }
      static SmoothAngleChange(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
        const wW = this.ToRadians(WW),
          CW = this.ToRadians(RW);
        return this.ToDegrees(Math.atan2((1 - MW) * Math.sin(CW) + MW * Math.sin(wW), (1 - MW) * Math.cos(CW) + MW * Math.cos(wW)))
      }
      static MakeArray(WW, RW) {
        return !0 === RW || void 0 !== WW && null != WW ? Array.isArray(WW) ? WW : [WW] : null
      }
      static GetPointerPrefix(WW) {
        return (0, zR.m)() && !window.PointerEvent ? "mouse" : "pointer"
      }
      static SetCorsBehavior(WW, RW) {
        (0, tR.x)(WW, RW)
      }
      static SetReferrerPolicyBehavior(WW, RW) {
        RW.referrerPolicy = WW
      }
      static get PreprocessUrl() {
        return tR.c.PreprocessUrl
      }
      static set PreprocessUrl(WW) {
        tR.c.PreprocessUrl = WW
      }
      static LoadImage(WW, RW, MW, wW, CW, zR) {
        return (0, tR.m)(WW, RW, MW, wW, CW, zR)
      }
      static LoadFile(WW, RW, MW, wW, CW, zR) {
        return (0, tR.l)(WW, RW, MW, wW, CW, zR)
      }
      static async LoadFileAsync(WW) {
        let RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return await new Promise(((MW, wW) => {
          (0, tR.l)(WW, (WW => {
            MW(WW)
          }), void 0, void 0, RW, ((WW, RW) => {
            wW(RW)
          }))
        }))
      }
      static GetAssetUrl(WW) {
        if (!WW) return "";
        if (wW.AssetBaseUrl && WW.startsWith(wW._DefaultAssetsUrl)) {
          const RW = wW.AssetBaseUrl.endsWith("/") ? wW.AssetBaseUrl.slice(0, -1) : wW.AssetBaseUrl;
          return WW.replace(wW._DefaultAssetsUrl, RW)
        }
        return WW
      }
      static GetBabylonScriptURL(WW, RW) {
        if (!WW) return "";
        if (WW.startsWith(wW._DefaultCdnUrl))
          if (wW.ScriptBaseUrl) {
            const RW = wW.ScriptBaseUrl.endsWith("/") ? wW.ScriptBaseUrl.slice(0, -1) : wW.ScriptBaseUrl;
            WW = WW.replace(wW._DefaultCdnUrl, RW)
          } else if (wW._CdnVersion) {
          const RW = `${wW._DefaultCdnUrl}/v${wW._CdnVersion}`;
          WW.startsWith(RW) || (WW = WW.replace(wW._DefaultCdnUrl, RW))
        }
        return WW = wW.ScriptPreprocessUrl(WW), RW && !wW.IsAbsoluteUrl(WW) && (WW = wW.GetAbsoluteUrl(WW)), WW
      }
      static LoadBabylonScript(WW, RW, MW, CW) {
        WW = wW.GetBabylonScriptURL(WW), wW.LoadScript(WW, RW, MW)
      }
      static async LoadBabylonScriptAsync(WW) {
        return WW = wW.GetBabylonScriptURL(WW), await wW.LoadScriptAsync(WW)
      }
      static _LoadScriptNative(WW, RW, MW, CW) {
        if (_native) {
          if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
            const WW = "Loading a script as an ES module is not supported in Babylon Native";
            return void MW?.(WW, new Error(WW))
          }
          wW.LoadFile(WW, (WW => {
            try {
              Function(WW).apply(null), RW && RW()
            } catch (wW) {
              MW && MW("LoadScript Error", wW)
            }
          }), void 0, void 0, !1, ((WW, RW) => {
            MW && MW("LoadScript Error", RW)
          }))
        }
      }
      static _LoadScriptWeb(WW, RW, MW, wW) {
        let CW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" === typeof importScripts) {
          try {
            importScripts(WW), RW && RW()
          } catch (yR) {
            MW?.(`Unable to load script '${WW}' in worker`, yR)
          }
          return
        }
        if (!(0, zR.m)()) return void MW?.(`Cannot load script '${WW}' outside of a window or a worker`);
        const AW = document.getElementsByTagName("head")[0],
          bR = document.createElement("script");
        CW ? (bR.setAttribute("type", "module"), bR.innerText = WW) : (bR.setAttribute("type", "text/javascript"), bR.setAttribute("src", WW)), wW && (bR.id = wW), bR.onload = () => {
          RW && RW()
        }, bR.onerror = RW => {
          MW && MW(`Unable to load script '${WW}'`, RW)
        }, AW.appendChild(bR)
      }
      static async LoadScriptAsync(WW, RW) {
        return await new Promise(((MW, wW) => {
          this.LoadScript(WW, (() => {
            MW()
          }), ((WW, RW) => {
            wW(RW || new Error(WW))
          }), RW)
        }))
      }
      static ReadFileAsDataURL(WW, RW, MW) {
        const wW = new FileReader,
          zR = {
            onCompleteObservable: new CW.c,
            abort: () => wW.abort()
          };
        return wW.onloadend = () => {
          zR.onCompleteObservable.notifyObservers(zR)
        }, wW.onload = WW => {
          RW(WW.target.result)
        }, wW.onprogress = MW, wW.readAsDataURL(WW), zR
      }
      static ReadFile(WW, RW, MW, wW, CW) {
        return (0, tR.p)(WW, RW, MW, wW, CW)
      }
      static FileAsURL(WW) {
        const RW = new Blob([WW]);
        return window.URL.createObjectURL(RW)
      }
      static Format(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return WW.toFixed(RW)
      }
      static DeepCopy(WW, RW, MW, wW) {
        bR.c.DeepCopy(WW, RW, MW, wW)
      }
      static IsEmpty(WW) {
        for (const RW in WW)
          if (Object.prototype.hasOwnProperty.call(WW, RW)) return !1;
        return !0
      }
      static RegisterTopRootEvents(WW, RW) {
        for (let wW = 0; wW < RW.length; wW++) {
          const CW = RW[wW];
          WW.addEventListener(CW.name, CW.handler, !1);
          try {
            window.parent && window.parent.addEventListener(CW.name, CW.handler, !1)
          } catch (MW) {}
        }
      }
      static UnregisterTopRootEvents(WW, RW) {
        for (let wW = 0; wW < RW.length; wW++) {
          const CW = RW[wW];
          WW.removeEventListener(CW.name, CW.handler);
          try {
            WW.parent && WW.parent.removeEventListener(CW.name, CW.handler)
          } catch (MW) {}
        }
      }
      static async DumpFramebuffer(WW, RW, MW, wW) {
        throw (0, NW.g)("DumpTools")
      }
      static DumpData(WW, RW, MW, wW) {
        throw (0, NW.g)("DumpTools")
      }
      static async DumpDataAsync(WW, RW, MW) {
        throw (0, NW.g)("DumpTools")
      }
      static _IsOffScreenCanvas(WW) {
        return void 0 !== WW.convertToBlob
      }
      static ToBlob(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          CW = arguments.length > 3 ? arguments[3] : void 0;
        wW._IsOffScreenCanvas(WW) || WW.toBlob || (WW.toBlob = function(WW, RW, MW) {
          setTimeout((() => {
            const wW = atob(this.toDataURL(RW, MW).split(",")[1]),
              CW = wW.length,
              zR = new Uint8Array(CW);
            for (let WW = 0; WW < CW; WW++) zR[WW] = wW.charCodeAt(WW);
            WW(new Blob([zR]))
          }))
        }), wW._IsOffScreenCanvas(WW) ? WW.convertToBlob({
          type: MW,
          quality: CW
        }).then((WW => RW(WW))) : WW.toBlob((function(WW) {
          RW(WW)
        }), MW, CW)
      }
      static DownloadBlob(WW, RW) {
        if ("download" in document.createElement("a")) {
          if (!RW) {
            const WW = new Date;
            RW = "screenshot_" + ((WW.getFullYear() + "-" + (WW.getMonth() + 1)).slice(2) + "-" + WW.getDate() + "_" + WW.getHours() + "-" + ("0" + WW.getMinutes()).slice(-2)) + ".png"
          }
          wW.Download(WW, RW)
        } else if (WW && "undefined" !== typeof URL) {
          const RW = URL.createObjectURL(WW),
            MW = window.open("");
          if (!MW) return;
          const wW = MW.document.createElement("img");
          wW.onload = function() {
            URL.revokeObjectURL(RW)
          }, wW.src = RW, MW.document.body.appendChild(wW)
        }
      }
      static EncodeScreenshotCanvasData(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          CW = arguments.length > 3 ? arguments[3] : void 0,
          zR = arguments.length > 4 ? arguments[4] : void 0;
        if ("string" !== typeof CW && RW) {
          if (RW) {
            if (wW._IsOffScreenCanvas(WW)) return void WW.convertToBlob({
              type: MW,
              quality: zR
            }).then((WW => {
              const MW = new FileReader;
              MW.readAsDataURL(WW), MW.onloadend = () => {
                const WW = MW.result;
                RW(WW)
              }
            }));
            const CW = WW.toDataURL(MW, zR);
            RW(CW)
          }
        } else this.ToBlob(WW, (function(WW) {
          WW && wW.DownloadBlob(WW, CW), RW && RW("")
        }), MW, zR)
      }
      static Download(WW, RW) {
        if ("undefined" === typeof URL) return;
        const MW = window.URL.createObjectURL(WW),
          wW = document.createElement("a");
        document.body.appendChild(wW), wW.style.display = "none", wW.href = MW, wW.download = RW, wW.addEventListener("click", (() => {
          wW.parentElement && wW.parentElement.removeChild(wW)
        })), wW.click(), window.URL.revokeObjectURL(MW)
      }
      static BackCompatCameraNoPreventDefault(WW) {
        return "boolean" === typeof WW[0] ? WW[0] : "boolean" === typeof WW[1] && WW[1]
      }
      static CreateScreenshot(WW, RW, MW, wW) {
        throw (0, NW.g)("ScreenshotTools")
      }
      static async CreateScreenshotAsync(WW, RW, MW) {
        throw (0, NW.g)("ScreenshotTools")
      }
      static CreateScreenshotUsingRenderTarget(WW, RW, MW, wW) {
        throw (0, NW.g)("ScreenshotTools")
      }
      static async CreateScreenshotUsingRenderTargetAsync(WW, RW, MW) {
        throw (0, NW.g)("ScreenshotTools")
      }
      static RandomId() {
        return (0, iR.e)()
      }
      static IsBase64(WW) {
        return (0, tR.h)(WW)
      }
      static DecodeBase64(WW) {
        return (0, tR.b)(WW)
      }
      static get errorsCount() {
        return AW.b.errorsCount
      }
      static Log(WW) {
        AW.b.Log(WW)
      }
      static Warn(WW) {
        AW.b.Warn(WW)
      }
      static Error(WW) {
        AW.b.Error(WW)
      }
      static get LogCache() {
        return AW.b.LogCache
      }
      static ClearLogCache() {
        AW.b.ClearLogCache()
      }
      static set LogLevels(WW) {
        AW.b.LogLevels = WW
      }
      static set PerformanceLogLevel(WW) {
        (WW & wW.PerformanceUserMarkLogLevel) !== wW.PerformanceUserMarkLogLevel ? (WW & wW.PerformanceConsoleLogLevel) !== wW.PerformanceConsoleLogLevel ? (wW.StartPerformanceCounter = wW._StartPerformanceCounterDisabled, wW.EndPerformanceCounter = wW._EndPerformanceCounterDisabled, _native?.disablePerformanceLogging?.()) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(2), wW.StartPerformanceCounter = wW._StartMarkNative, wW.EndPerformanceCounter = wW._EndMarkNative) : (wW.StartPerformanceCounter = wW._StartPerformanceConsole, wW.EndPerformanceCounter = wW._EndPerformanceConsole) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(1), wW.StartPerformanceCounter = wW._StartMarkNative, wW.EndPerformanceCounter = wW._EndMarkNative) : (wW.StartPerformanceCounter = wW._StartUserMark, wW.EndPerformanceCounter = wW._EndUserMark)
      }
      static _StartPerformanceCounterDisabled(WW, RW) {}
      static _EndPerformanceCounterDisabled(WW, RW) {}
      static _StartUserMark(WW) {
        let RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!wW._Performance) {
          if (!(0, zR.m)()) return;
          wW._Performance = window.performance
        }
        RW && wW._Performance.mark && wW._Performance.mark(WW + "-Begin")
      }
      static _EndUserMark(WW) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && wW._Performance.mark && (wW._Performance.mark(WW + "-End"), wW._Performance.measure(WW, WW + "-Begin", WW + "-End"))
      }
      static _StartPerformanceConsole(WW) {
        let RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        RW && (wW._StartUserMark(WW, RW), console.time && console.time(WW))
      }
      static _EndPerformanceConsole(WW) {
        let RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        RW && (wW._EndUserMark(WW, RW), console.timeEnd(WW))
      }
      static _StartMarkNative(WW) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
          if (wW._NativePerformanceCounterHandles.has(WW)) wW.Warn(`Performance counter with name ${WW} is already started.`);
          else {
            const RW = _native.startPerformanceCounter(WW);
            wW._NativePerformanceCounterHandles.set(WW, RW)
          }
      }
      static _EndMarkNative(WW) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
          const RW = wW._NativePerformanceCounterHandles.get(WW);
          RW ? (_native.endPerformanceCounter(RW), wW._NativePerformanceCounterHandles.delete(WW)) : wW.Warn(`Performance counter with name ${WW} was not started.`)
        }
      }
      static get Now() {
        return yR.d.Now
      }
      static GetClassName(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          MW = null;
        if (!RW && WW.getClassName) MW = WW.getClassName();
        else {
          if (WW instanceof Object) {
            MW = (RW ? WW : Object.getPrototypeOf(WW)).constructor.__bjsclassName__
          }
          MW || (MW = typeof WW)
        }
        return MW
      }
      static First(WW, RW) {
        for (const MW of WW)
          if (RW(MW)) return MW;
        return null
      }
      static getFullClassName(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          MW = null,
          wW = null;
        if (!RW && WW.getClassName) MW = WW.getClassName();
        else {
          if (WW instanceof Object) {
            const CW = RW ? WW : Object.getPrototypeOf(WW);
            MW = CW.constructor.__bjsclassName__, wW = CW.constructor.__bjsmoduleName__
          }
          MW || (MW = typeof WW)
        }
        return MW ? (null != wW ? wW + "." : "") + MW : null
      }
      static async DelayAsync(WW) {
        await new Promise((RW => {
          setTimeout((() => {
            RW()
          }), WW)
        }))
      }
      static IsSafari() {
        return !!(0, zR.j)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }
    }

    function PW(WW, RW) {
      return MW => {
        MW.__bjsclassName__ = WW, MW.__bjsmoduleName__ = null != RW ? RW : null
      }
    }
    wW = JW, JW.AssetBaseUrl = "", JW.UseCustomRequestHeaders = !1, JW.CustomRequestHeaders = eW.b.CustomRequestHeaders, JW.GetDOMTextContent = zR.c, JW._DefaultCdnUrl = "https://cdn.babylonjs.com", JW._CdnVersion = "9.28.0", JW._DefaultAssetsUrl = "https://assets.babylonjs.com/core", JW.LoadScript = "undefined" === typeof _native ? wW._LoadScriptWeb : wW._LoadScriptNative, JW.GetAbsoluteUrl = "object" === typeof document ? WW => {
      const RW = document.createElement("a");
      return RW.href = WW, RW.href
    } : "function" === typeof URL && "object" === typeof location ? WW => new URL(WW, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
    }, JW.NoneLogLevel = AW.b.NoneLogLevel, JW.MessageLogLevel = AW.b.MessageLogLevel, JW.WarningLogLevel = AW.b.WarningLogLevel, JW.ErrorLogLevel = AW.b.ErrorLogLevel, JW.AllLogLevel = AW.b.AllLogLevel, JW.IsWindowObjectExist = zR.m, JW.PerformanceNoneLogLevel = 0, JW.PerformanceUserMarkLogLevel = 1, JW.PerformanceConsoleLogLevel = 2, JW._NativePerformanceCounterHandles = new Map, JW.StartPerformanceCounter = wW._StartPerformanceCounterDisabled, JW.EndPerformanceCounter = wW._EndPerformanceCounterDisabled;
    class IW {
      constructor(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.iterations = WW, this.index = wW - 1, this._done = !1, this._fn = RW, this._successCallback = MW
      }
      executeNext() {
        this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
      }
      breakLoop() {
        this._done = !0, this._successCallback()
      }
      static Run(WW, RW, MW) {
        const wW = new IW(WW, RW, MW, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return wW.executeNext(), wW
      }
      static SyncAsyncForLoop(WW, RW, MW, wW, CW) {
        let zR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return IW.Run(Math.ceil(WW / RW), (wW => {
          CW && CW() ? wW.breakLoop() : setTimeout((() => {
            for (let zR = 0; zR < RW; ++zR) {
              const AW = wW.index * RW + zR;
              if (AW >= WW) break;
              if (MW(AW), CW && CW()) {
                wW.breakLoop();
                break
              }
            }
            wW.executeNext()
          }), zR)
        }), wW)
      }
    }
    let oW = !1;

    function lW() {
      oW || (oW = !0, JW.Mix = YW.i, JW.IsExponentOfTwo = YW.f, BW.d.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z")
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);