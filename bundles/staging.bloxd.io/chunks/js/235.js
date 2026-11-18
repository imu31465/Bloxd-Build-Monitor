export const id = 235;
export const ids = [235];
export const modules = {
  38852: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => pB
    });
    var VB = dB(37651),
      yB = dB(36166);
    class pB {
      static Instantiate(BB) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[BB]) return this.RegisteredExternalClasses[BB];
        const TB = (0, yB.e)(BB);
        if (TB) return TB;
        VB.b.Warn(BB + " not found, you may have missed an import.");
        const dB = BB.split(".");
        let pB = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
        for (let VB = 0, yB = dB.length; VB < yB; VB++) pB = pB[dB[VB]];
        return "function" !== typeof pB ? null : pB
      }
    }
    pB.RegisteredExternalClasses = {}
  },
  38657: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => yB
    });
    var VB = dB(38606);
    class yB {
      static get Now() {
        return (0, VB.h)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
      }
    }
  },
  38689: (BB, TB, dB) => {
    function VB(BB) {
      let TB = 1;
      do {
        TB *= 2
      } while (TB < BB);
      return TB === BB
    }

    function yB(BB, TB, dB) {
      return BB * (1 - dB) + TB * dB
    }

    function pB(BB) {
      const TB = lB(BB),
        dB = JB(BB);
      return TB - BB > BB - dB ? dB : TB
    }

    function lB(BB) {
      return BB--, BB |= BB >> 1, BB |= BB >> 2, BB |= BB >> 4, BB |= BB >> 8, BB |= BB >> 16, ++BB
    }

    function JB(BB) {
      return BB |= BB >> 1, BB |= BB >> 2, BB |= BB >> 4, BB |= BB >> 8, (BB |= BB >> 16) - (BB >> 1)
    }

    function YB(BB, TB) {
      let dB;
      switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
        case 1:
          dB = JB(BB);
          break;
        case 2:
          dB = pB(BB);
          break;
        default:
          dB = lB(BB)
      }
      return Math.min(dB, TB)
    }
    dB.d(TB, {
      c: () => JB,
      g: () => YB,
      i: () => VB,
      m: () => yB,
      n: () => pB
    })
  },
  38848: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => mB,
      g: () => NB,
      h: () => EB,
      i: () => vB
    });
    var VB, yB = dB(36150),
      pB = dB(38606),
      lB = dB(37651),
      JB = dB(37646),
      YB = dB(38657),
      gB = dB(38629),
      oB = dB(38799),
      kB = dB(36148),
      LB = dB(38790),
      OB = dB(38645),
      DB = dB(38852),
      uB = dB(36822),
      HB = dB(38689);
    class EB {
      static get BaseUrl() {
        return LB.f.BaseUrl
      }
      static set BaseUrl(BB) {
        LB.f.BaseUrl = BB
      }
      static get CleanUrl() {
        return LB.f.CleanUrl
      }
      static set CleanUrl(BB) {
        LB.f.CleanUrl = BB
      }
      static IsAbsoluteUrl(BB) {
        return 0 === BB.indexOf("//") || -1 !== BB.indexOf("://") && (-1 !== BB.indexOf(".") && (-1 !== BB.indexOf("/") && (!(BB.indexOf(":") > BB.indexOf("/")) && (BB.indexOf("://") < BB.indexOf(".") || (0 === BB.indexOf("data:") || 0 === BB.indexOf("blob:"))))))
      }
      static set ScriptBaseUrl(BB) {
        LB.f.ScriptBaseUrl = BB
      }
      static get ScriptBaseUrl() {
        return LB.f.ScriptBaseUrl
      }
      static set CDNBaseUrl(BB) {
        VB.ScriptBaseUrl = BB, VB.AssetBaseUrl = BB
      }
      static set ScriptPreprocessUrl(BB) {
        LB.f.ScriptPreprocessUrl = BB
      }
      static get ScriptPreprocessUrl() {
        return LB.f.ScriptPreprocessUrl
      }
      static get DefaultRetryStrategy() {
        return LB.f.DefaultRetryStrategy
      }
      static set DefaultRetryStrategy(BB) {
        LB.f.DefaultRetryStrategy = BB
      }
      static get CorsBehavior() {
        return LB.f.CorsBehavior
      }
      static set CorsBehavior(BB) {
        LB.f.CorsBehavior = BB
      }
      static get UseFallbackTexture() {
        return kB.c.UseFallbackTexture
      }
      static set UseFallbackTexture(BB) {
        kB.c.UseFallbackTexture = BB
      }
      static get RegisteredExternalClasses() {
        return DB.d.RegisteredExternalClasses
      }
      static set RegisteredExternalClasses(BB) {
        DB.d.RegisteredExternalClasses = BB
      }
      static get fallbackTexture() {
        return kB.c.FallbackTexture
      }
      static set fallbackTexture(BB) {
        kB.c.FallbackTexture = BB
      }
      static FetchToRef(BB, TB, dB, VB, yB, pB) {
        const lB = 4 * ((Math.abs(BB) * dB % dB | 0) + (Math.abs(TB) * VB % VB | 0) * dB);
        pB.r = yB[lB] / 255, pB.g = yB[lB + 1] / 255, pB.b = yB[lB + 2] / 255, pB.a = yB[lB + 3] / 255
      }
      static Mix(BB, TB, dB) {
        return 0
      }
      static Instantiate(BB) {
        return DB.d.Instantiate(BB)
      }
      static SetImmediate(BB) {
        OB.b.SetImmediate(BB)
      }
      static IsExponentOfTwo(BB) {
        return !0
      }
      static FloatRound(BB) {
        return Math.fround(BB)
      }
      static GetFilename(BB) {
        const TB = BB.lastIndexOf("/");
        return TB < 0 ? BB : BB.substring(TB + 1)
      }
      static GetFolderPath(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const dB = BB.lastIndexOf("/");
        return dB < 0 ? TB ? BB : "" : BB.substring(0, dB + 1)
      }
      static ToDegrees(BB) {
        return 180 * BB / Math.PI
      }
      static ToRadians(BB) {
        return BB * Math.PI / 180
      }
      static SmoothAngleChange(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
        const VB = this.ToRadians(BB),
          yB = this.ToRadians(TB);
        return this.ToDegrees(Math.atan2((1 - dB) * Math.sin(yB) + dB * Math.sin(VB), (1 - dB) * Math.cos(yB) + dB * Math.cos(VB)))
      }
      static MakeArray(BB, TB) {
        return !0 === TB || void 0 !== BB && null != BB ? Array.isArray(BB) ? BB : [BB] : null
      }
      static GetPointerPrefix(BB) {
        return (0, pB.h)() && !window.PointerEvent ? "mouse" : "pointer"
      }
      static SetCorsBehavior(BB, TB) {
        (0, LB.D)(BB, TB)
      }
      static SetReferrerPolicyBehavior(BB, TB) {
        TB.referrerPolicy = BB
      }
      static get PreprocessUrl() {
        return LB.f.PreprocessUrl
      }
      static set PreprocessUrl(BB) {
        LB.f.PreprocessUrl = BB
      }
      static LoadImage(BB, TB, dB, VB, yB, pB) {
        return (0, LB.s)(BB, TB, dB, VB, yB, pB)
      }
      static LoadFile(BB, TB, dB, VB, yB, pB) {
        return (0, LB.q)(BB, TB, dB, VB, yB, pB)
      }
      static async LoadFileAsync(BB) {
        let TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return await new Promise(((dB, VB) => {
          (0, LB.q)(BB, (BB => {
            dB(BB)
          }), void 0, void 0, TB, ((BB, TB) => {
            VB(TB)
          }))
        }))
      }
      static GetAssetUrl(BB) {
        if (!BB) return "";
        if (VB.AssetBaseUrl && BB.startsWith(VB._DefaultAssetsUrl)) {
          const TB = VB.AssetBaseUrl.endsWith("/") ? VB.AssetBaseUrl.slice(0, -1) : VB.AssetBaseUrl;
          return BB.replace(VB._DefaultAssetsUrl, TB)
        }
        return BB
      }
      static GetBabylonScriptURL(BB, TB) {
        if (!BB) return "";
        if (BB.startsWith(VB._DefaultCdnUrl))
          if (VB.ScriptBaseUrl) {
            const TB = VB.ScriptBaseUrl.endsWith("/") ? VB.ScriptBaseUrl.slice(0, -1) : VB.ScriptBaseUrl;
            BB = BB.replace(VB._DefaultCdnUrl, TB)
          } else if (VB._CdnVersion) {
          const TB = `${VB._DefaultCdnUrl}/v${VB._CdnVersion}`;
          BB.startsWith(TB) || (BB = BB.replace(VB._DefaultCdnUrl, TB))
        }
        return BB = VB.ScriptPreprocessUrl(BB), TB && !VB.IsAbsoluteUrl(BB) && (BB = VB.GetAbsoluteUrl(BB)), BB
      }
      static LoadBabylonScript(BB, TB, dB, yB) {
        BB = VB.GetBabylonScriptURL(BB), VB.LoadScript(BB, TB, dB)
      }
      static async LoadBabylonScriptAsync(BB) {
        return BB = VB.GetBabylonScriptURL(BB), await VB.LoadScriptAsync(BB)
      }
      static _LoadScriptNative(BB, TB, dB, yB) {
        if (_native) {
          if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
            const BB = "Loading a script as an ES module is not supported in Babylon Native";
            return void dB?.(BB, new Error(BB))
          }
          VB.LoadFile(BB, (BB => {
            try {
              Function(BB).apply(null), TB && TB()
            } catch (VB) {
              dB && dB("LoadScript Error", VB)
            }
          }), void 0, void 0, !1, ((BB, TB) => {
            dB && dB("LoadScript Error", TB)
          }))
        }
      }
      static _LoadScriptWeb(BB, TB, dB, VB) {
        let yB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" === typeof importScripts) {
          try {
            importScripts(BB), TB && TB()
          } catch (YB) {
            dB?.(`Unable to load script '${BB}' in worker`, YB)
          }
          return
        }
        if (!(0, pB.h)()) return void dB?.(`Cannot load script '${BB}' outside of a window or a worker`);
        const lB = document.getElementsByTagName("head")[0],
          JB = document.createElement("script");
        yB ? (JB.setAttribute("type", "module"), JB.innerText = BB) : (JB.setAttribute("type", "text/javascript"), JB.setAttribute("src", BB)), VB && (JB.id = VB), JB.onload = () => {
          TB && TB()
        }, JB.onerror = TB => {
          dB && dB(`Unable to load script '${BB}'`, TB)
        }, lB.appendChild(JB)
      }
      static async LoadScriptAsync(BB, TB) {
        return await new Promise(((dB, VB) => {
          this.LoadScript(BB, (() => {
            dB()
          }), ((BB, TB) => {
            VB(TB || new Error(BB))
          }), TB)
        }))
      }
      static ReadFileAsDataURL(BB, TB, dB) {
        const VB = new FileReader,
          pB = {
            onCompleteObservable: new yB.e,
            abort: () => VB.abort()
          };
        return VB.onloadend = () => {
          pB.onCompleteObservable.notifyObservers(pB)
        }, VB.onload = BB => {
          TB(BB.target.result)
        }, VB.onprogress = dB, VB.readAsDataURL(BB), pB
      }
      static ReadFile(BB, TB, dB, VB, yB) {
        return (0, LB.t)(BB, TB, dB, VB, yB)
      }
      static FileAsURL(BB) {
        const TB = new Blob([BB]);
        return window.URL.createObjectURL(TB)
      }
      static Format(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return BB.toFixed(TB)
      }
      static DeepCopy(BB, TB, dB, VB) {
        JB.b.DeepCopy(BB, TB, dB, VB)
      }
      static IsEmpty(BB) {
        for (const TB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, TB)) return !1;
        return !0
      }
      static RegisterTopRootEvents(BB, TB) {
        for (let VB = 0; VB < TB.length; VB++) {
          const yB = TB[VB];
          BB.addEventListener(yB.name, yB.handler, !1);
          try {
            window.parent && window.parent.addEventListener(yB.name, yB.handler, !1)
          } catch (dB) {}
        }
      }
      static UnregisterTopRootEvents(BB, TB) {
        for (let VB = 0; VB < TB.length; VB++) {
          const yB = TB[VB];
          BB.removeEventListener(yB.name, yB.handler);
          try {
            BB.parent && BB.parent.removeEventListener(yB.name, yB.handler)
          } catch (dB) {}
        }
      }
      static async DumpFramebuffer(BB, TB, dB, VB) {
        throw (0, gB.i)("DumpTools")
      }
      static DumpData(BB, TB, dB, VB) {
        throw (0, gB.i)("DumpTools")
      }
      static async DumpDataAsync(BB, TB, dB) {
        throw (0, gB.i)("DumpTools")
      }
      static _IsOffScreenCanvas(BB) {
        return void 0 !== BB.convertToBlob
      }
      static ToBlob(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          yB = arguments.length > 3 ? arguments[3] : void 0;
        VB._IsOffScreenCanvas(BB) || BB.toBlob || (BB.toBlob = function(BB, TB, dB) {
          setTimeout((() => {
            const VB = atob(this.toDataURL(TB, dB).split(",")[1]),
              yB = VB.length,
              pB = new Uint8Array(yB);
            for (let BB = 0; BB < yB; BB++) pB[BB] = VB.charCodeAt(BB);
            BB(new Blob([pB]))
          }))
        }), VB._IsOffScreenCanvas(BB) ? BB.convertToBlob({
          type: dB,
          quality: yB
        }).then((BB => TB(BB))) : BB.toBlob((function(BB) {
          TB(BB)
        }), dB, yB)
      }
      static DownloadBlob(BB, TB) {
        if ("download" in document.createElement("a")) {
          if (!TB) {
            const BB = new Date;
            TB = "screenshot_" + ((BB.getFullYear() + "-" + (BB.getMonth() + 1)).slice(2) + "-" + BB.getDate() + "_" + BB.getHours() + "-" + ("0" + BB.getMinutes()).slice(-2)) + ".png"
          }
          VB.Download(BB, TB)
        } else if (BB && "undefined" !== typeof URL) {
          const TB = URL.createObjectURL(BB),
            dB = window.open("");
          if (!dB) return;
          const VB = dB.document.createElement("img");
          VB.onload = function() {
            URL.revokeObjectURL(TB)
          }, VB.src = TB, dB.document.body.appendChild(VB)
        }
      }
      static EncodeScreenshotCanvasData(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          yB = arguments.length > 3 ? arguments[3] : void 0,
          pB = arguments.length > 4 ? arguments[4] : void 0;
        if ("string" !== typeof yB && TB) {
          if (TB) {
            if (VB._IsOffScreenCanvas(BB)) return void BB.convertToBlob({
              type: dB,
              quality: pB
            }).then((BB => {
              const dB = new FileReader;
              dB.readAsDataURL(BB), dB.onloadend = () => {
                const BB = dB.result;
                TB(BB)
              }
            }));
            const yB = BB.toDataURL(dB, pB);
            TB(yB)
          }
        } else this.ToBlob(BB, (function(BB) {
          BB && VB.DownloadBlob(BB, yB), TB && TB("")
        }), dB, pB)
      }
      static Download(BB, TB) {
        if ("undefined" === typeof URL) return;
        const dB = window.URL.createObjectURL(BB),
          VB = document.createElement("a");
        document.body.appendChild(VB), VB.style.display = "none", VB.href = dB, VB.download = TB, VB.addEventListener("click", (() => {
          VB.parentElement && VB.parentElement.removeChild(VB)
        })), VB.click(), window.URL.revokeObjectURL(dB)
      }
      static BackCompatCameraNoPreventDefault(BB) {
        return "boolean" === typeof BB[0] ? BB[0] : "boolean" === typeof BB[1] && BB[1]
      }
      static CreateScreenshot(BB, TB, dB, VB) {
        throw (0, gB.i)("ScreenshotTools")
      }
      static async CreateScreenshotAsync(BB, TB, dB) {
        throw (0, gB.i)("ScreenshotTools")
      }
      static CreateScreenshotUsingRenderTarget(BB, TB, dB, VB) {
        throw (0, gB.i)("ScreenshotTools")
      }
      static async CreateScreenshotUsingRenderTargetAsync(BB, TB, dB) {
        throw (0, gB.i)("ScreenshotTools")
      }
      static RandomId() {
        return (0, uB.c)()
      }
      static IsBase64(BB) {
        return (0, LB.m)(BB)
      }
      static DecodeBase64(BB) {
        return (0, LB.b)(BB)
      }
      static get errorsCount() {
        return lB.b.errorsCount
      }
      static Log(BB) {
        lB.b.Log(BB)
      }
      static Warn(BB) {
        lB.b.Warn(BB)
      }
      static Error(BB) {
        lB.b.Error(BB)
      }
      static get LogCache() {
        return lB.b.LogCache
      }
      static ClearLogCache() {
        lB.b.ClearLogCache()
      }
      static set LogLevels(BB) {
        lB.b.LogLevels = BB
      }
      static set PerformanceLogLevel(BB) {
        (BB & VB.PerformanceUserMarkLogLevel) !== VB.PerformanceUserMarkLogLevel ? (BB & VB.PerformanceConsoleLogLevel) !== VB.PerformanceConsoleLogLevel ? (VB.StartPerformanceCounter = VB._StartPerformanceCounterDisabled, VB.EndPerformanceCounter = VB._EndPerformanceCounterDisabled, _native?.disablePerformanceLogging?.()) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(2), VB.StartPerformanceCounter = VB._StartMarkNative, VB.EndPerformanceCounter = VB._EndMarkNative) : (VB.StartPerformanceCounter = VB._StartPerformanceConsole, VB.EndPerformanceCounter = VB._EndPerformanceConsole) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(1), VB.StartPerformanceCounter = VB._StartMarkNative, VB.EndPerformanceCounter = VB._EndMarkNative) : (VB.StartPerformanceCounter = VB._StartUserMark, VB.EndPerformanceCounter = VB._EndUserMark)
      }
      static _StartPerformanceCounterDisabled(BB, TB) {}
      static _EndPerformanceCounterDisabled(BB, TB) {}
      static _StartUserMark(BB) {
        let TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!VB._Performance) {
          if (!(0, pB.h)()) return;
          VB._Performance = window.performance
        }
        TB && VB._Performance.mark && VB._Performance.mark(BB + "-Begin")
      }
      static _EndUserMark(BB) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && VB._Performance.mark && (VB._Performance.mark(BB + "-End"), VB._Performance.measure(BB, BB + "-Begin", BB + "-End"))
      }
      static _StartPerformanceConsole(BB) {
        let TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        TB && (VB._StartUserMark(BB, TB), console.time && console.time(BB))
      }
      static _EndPerformanceConsole(BB) {
        let TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        TB && (VB._EndUserMark(BB, TB), console.timeEnd(BB))
      }
      static _StartMarkNative(BB) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
          if (VB._NativePerformanceCounterHandles.has(BB)) VB.Warn(`Performance counter with name ${BB} is already started.`);
          else {
            const TB = _native.startPerformanceCounter(BB);
            VB._NativePerformanceCounterHandles.set(BB, TB)
          }
      }
      static _EndMarkNative(BB) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
          const TB = VB._NativePerformanceCounterHandles.get(BB);
          TB ? (_native.endPerformanceCounter(TB), VB._NativePerformanceCounterHandles.delete(BB)) : VB.Warn(`Performance counter with name ${BB} was not started.`)
        }
      }
      static get Now() {
        return YB.d.Now
      }
      static GetClassName(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          dB = null;
        if (!TB && BB.getClassName) dB = BB.getClassName();
        else {
          if (BB instanceof Object) {
            dB = (TB ? BB : Object.getPrototypeOf(BB)).constructor.__bjsclassName__
          }
          dB || (dB = typeof BB)
        }
        return dB
      }
      static First(BB, TB) {
        for (const dB of BB)
          if (TB(dB)) return dB;
        return null
      }
      static getFullClassName(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          dB = null,
          VB = null;
        if (!TB && BB.getClassName) dB = BB.getClassName();
        else {
          if (BB instanceof Object) {
            const yB = TB ? BB : Object.getPrototypeOf(BB);
            dB = yB.constructor.__bjsclassName__, VB = yB.constructor.__bjsmoduleName__
          }
          dB || (dB = typeof BB)
        }
        return dB ? (null != VB ? VB + "." : "") + dB : null
      }
      static async DelayAsync(BB) {
        await new Promise((TB => {
          setTimeout((() => {
            TB()
          }), BB)
        }))
      }
      static IsSafari() {
        return !!(0, pB.f)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }
    }

    function vB(BB, TB) {
      return dB => {
        dB.__bjsclassName__ = BB, dB.__bjsmoduleName__ = null != TB ? TB : null
      }
    }
    VB = EB, EB.AssetBaseUrl = "", EB.UseCustomRequestHeaders = !1, EB.CustomRequestHeaders = oB.c.CustomRequestHeaders, EB.GetDOMTextContent = pB.b, EB._DefaultCdnUrl = "https://cdn.babylonjs.com", EB._CdnVersion = "9.28.0", EB._DefaultAssetsUrl = "https://assets.babylonjs.com/core", EB.LoadScript = "undefined" === typeof _native ? VB._LoadScriptWeb : VB._LoadScriptNative, EB.GetAbsoluteUrl = "object" === typeof document ? BB => {
      const TB = document.createElement("a");
      return TB.href = BB, TB.href
    } : "function" === typeof URL && "object" === typeof location ? BB => new URL(BB, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
    }, EB.NoneLogLevel = lB.b.NoneLogLevel, EB.MessageLogLevel = lB.b.MessageLogLevel, EB.WarningLogLevel = lB.b.WarningLogLevel, EB.ErrorLogLevel = lB.b.ErrorLogLevel, EB.AllLogLevel = lB.b.AllLogLevel, EB.IsWindowObjectExist = pB.h, EB.PerformanceNoneLogLevel = 0, EB.PerformanceUserMarkLogLevel = 1, EB.PerformanceConsoleLogLevel = 2, EB._NativePerformanceCounterHandles = new Map, EB.StartPerformanceCounter = VB._StartPerformanceCounterDisabled, EB.EndPerformanceCounter = VB._EndPerformanceCounterDisabled;
    class mB {
      constructor(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.iterations = BB, this.index = VB - 1, this._done = !1, this._fn = TB, this._successCallback = dB
      }
      executeNext() {
        this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
      }
      breakLoop() {
        this._done = !0, this._successCallback()
      }
      static Run(BB, TB, dB) {
        const VB = new mB(BB, TB, dB, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return VB.executeNext(), VB
      }
      static SyncAsyncForLoop(BB, TB, dB, VB, yB) {
        let pB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return mB.Run(Math.ceil(BB / TB), (VB => {
          yB && yB() ? VB.breakLoop() : setTimeout((() => {
            for (let pB = 0; pB < TB; ++pB) {
              const lB = VB.index * TB + pB;
              if (lB >= BB) break;
              if (dB(lB), yB && yB()) {
                VB.breakLoop();
                break
              }
            }
            VB.executeNext()
          }), pB)
        }), VB)
      }
    }
    let iB = !1;

    function NB() {
      iB || (iB = !0, EB.Mix = HB.m, EB.IsExponentOfTwo = HB.i, kB.c.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z")
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);