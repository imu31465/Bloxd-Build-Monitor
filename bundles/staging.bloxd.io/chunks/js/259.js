export const id = 259;
export const ids = [259];
export const modules = {
  40154: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => oB
    });
    var TB = ZB(38718),
      JB = ZB(37170);
    class oB {
      static Instantiate(BB) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[BB]) return this.RegisteredExternalClasses[BB];
        const IB = (0, JB.e)(BB);
        if (IB) return IB;
        TB.d.Warn(BB + " not found, you may have missed an import.");
        const ZB = BB.split(".");
        let oB = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
        for (let TB = 0, JB = ZB.length; TB < JB; TB++) oB = oB[ZB[TB]];
        return "function" !== typeof oB ? null : oB
      }
    }
    oB.RegisteredExternalClasses = {}
  },
  39959: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => JB
    });
    var TB = ZB(39912);
    class JB {
      static get Now() {
        return (0, TB.l)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
      }
    }
  },
  39993: (BB, IB, ZB) => {
    function TB(BB) {
      let IB = 1;
      do {
        IB *= 2
      } while (IB < BB);
      return IB === BB
    }

    function JB(BB, IB, ZB) {
      return BB * (1 - ZB) + IB * ZB
    }

    function oB(BB) {
      const IB = GB(BB),
        ZB = vB(BB);
      return IB - BB > BB - ZB ? ZB : IB
    }

    function GB(BB) {
      return BB--, BB |= BB >> 1, BB |= BB >> 2, BB |= BB >> 4, BB |= BB >> 8, BB |= BB >> 16, ++BB
    }

    function vB(BB) {
      return BB |= BB >> 1, BB |= BB >> 2, BB |= BB >> 4, BB |= BB >> 8, (BB |= BB >> 16) - (BB >> 1)
    }

    function kB(BB, IB) {
      let ZB;
      switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
        case 1:
          ZB = vB(BB);
          break;
        case 2:
          ZB = oB(BB);
          break;
        default:
          ZB = GB(BB)
      }
      return Math.min(ZB, IB)
    }
    ZB.d(IB, {
      d: () => vB,
      f: () => kB,
      i: () => TB,
      m: () => JB,
      p: () => oB
    })
  },
  40152: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => WB,
      f: () => CB,
      j: () => yB,
      k: () => UB
    });
    var TB, JB = ZB(37153),
      oB = ZB(39912),
      GB = ZB(38718),
      vB = ZB(38714),
      kB = ZB(39959),
      cB = ZB(39931),
      nB = ZB(40118),
      hB = ZB(37147),
      zB = ZB(40110),
      FB = ZB(39943),
      NB = ZB(40154),
      gB = ZB(37964),
      qB = ZB(39993);
    class yB {
      static get BaseUrl() {
        return zB.d.BaseUrl
      }
      static set BaseUrl(BB) {
        zB.d.BaseUrl = BB
      }
      static get CleanUrl() {
        return zB.d.CleanUrl
      }
      static set CleanUrl(BB) {
        zB.d.CleanUrl = BB
      }
      static IsAbsoluteUrl(BB) {
        return 0 === BB.indexOf("//") || -1 !== BB.indexOf("://") && (-1 !== BB.indexOf(".") && (-1 !== BB.indexOf("/") && (!(BB.indexOf(":") > BB.indexOf("/")) && (BB.indexOf("://") < BB.indexOf(".") || (0 === BB.indexOf("data:") || 0 === BB.indexOf("blob:"))))))
      }
      static set ScriptBaseUrl(BB) {
        zB.d.ScriptBaseUrl = BB
      }
      static get ScriptBaseUrl() {
        return zB.d.ScriptBaseUrl
      }
      static set CDNBaseUrl(BB) {
        TB.ScriptBaseUrl = BB, TB.AssetBaseUrl = BB
      }
      static set ScriptPreprocessUrl(BB) {
        zB.d.ScriptPreprocessUrl = BB
      }
      static get ScriptPreprocessUrl() {
        return zB.d.ScriptPreprocessUrl
      }
      static get DefaultRetryStrategy() {
        return zB.d.DefaultRetryStrategy
      }
      static set DefaultRetryStrategy(BB) {
        zB.d.DefaultRetryStrategy = BB
      }
      static get CorsBehavior() {
        return zB.d.CorsBehavior
      }
      static set CorsBehavior(BB) {
        zB.d.CorsBehavior = BB
      }
      static get UseFallbackTexture() {
        return hB.e.UseFallbackTexture
      }
      static set UseFallbackTexture(BB) {
        hB.e.UseFallbackTexture = BB
      }
      static get RegisteredExternalClasses() {
        return NB.d.RegisteredExternalClasses
      }
      static set RegisteredExternalClasses(BB) {
        NB.d.RegisteredExternalClasses = BB
      }
      static get fallbackTexture() {
        return hB.e.FallbackTexture
      }
      static set fallbackTexture(BB) {
        hB.e.FallbackTexture = BB
      }
      static FetchToRef(BB, IB, ZB, TB, JB, oB) {
        const GB = 4 * ((Math.abs(BB) * ZB % ZB | 0) + (Math.abs(IB) * TB % TB | 0) * ZB);
        oB.r = JB[GB] / 255, oB.g = JB[GB + 1] / 255, oB.b = JB[GB + 2] / 255, oB.a = JB[GB + 3] / 255
      }
      static Mix(BB, IB, ZB) {
        return 0
      }
      static Instantiate(BB) {
        return NB.d.Instantiate(BB)
      }
      static SetImmediate(BB) {
        FB.b.SetImmediate(BB)
      }
      static IsExponentOfTwo(BB) {
        return !0
      }
      static FloatRound(BB) {
        return Math.fround(BB)
      }
      static GetFilename(BB) {
        const IB = BB.lastIndexOf("/");
        return IB < 0 ? BB : BB.substring(IB + 1)
      }
      static GetFolderPath(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZB = BB.lastIndexOf("/");
        return ZB < 0 ? IB ? BB : "" : BB.substring(0, ZB + 1)
      }
      static ToDegrees(BB) {
        return 180 * BB / Math.PI
      }
      static ToRadians(BB) {
        return BB * Math.PI / 180
      }
      static SmoothAngleChange(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
        const TB = this.ToRadians(BB),
          JB = this.ToRadians(IB);
        return this.ToDegrees(Math.atan2((1 - ZB) * Math.sin(JB) + ZB * Math.sin(TB), (1 - ZB) * Math.cos(JB) + ZB * Math.cos(TB)))
      }
      static MakeArray(BB, IB) {
        return !0 === IB || void 0 !== BB && null != BB ? Array.isArray(BB) ? BB : [BB] : null
      }
      static GetPointerPrefix(BB) {
        return (0, oB.l)() && !window.PointerEvent ? "mouse" : "pointer"
      }
      static SetCorsBehavior(BB, IB) {
        (0, zB.s)(BB, IB)
      }
      static SetReferrerPolicyBehavior(BB, IB) {
        IB.referrerPolicy = BB
      }
      static get PreprocessUrl() {
        return zB.d.PreprocessUrl
      }
      static set PreprocessUrl(BB) {
        zB.d.PreprocessUrl = BB
      }
      static LoadImage(BB, IB, ZB, TB, JB, oB) {
        return (0, zB.l)(BB, IB, ZB, TB, JB, oB)
      }
      static LoadFile(BB, IB, ZB, TB, JB, oB) {
        return (0, zB.j)(BB, IB, ZB, TB, JB, oB)
      }
      static async LoadFileAsync(BB) {
        let IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return await new Promise(((ZB, TB) => {
          (0, zB.j)(BB, (BB => {
            ZB(BB)
          }), void 0, void 0, IB, ((BB, IB) => {
            TB(IB)
          }))
        }))
      }
      static GetAssetUrl(BB) {
        if (!BB) return "";
        if (TB.AssetBaseUrl && BB.startsWith(TB._DefaultAssetsUrl)) {
          const IB = TB.AssetBaseUrl.endsWith("/") ? TB.AssetBaseUrl.slice(0, -1) : TB.AssetBaseUrl;
          return BB.replace(TB._DefaultAssetsUrl, IB)
        }
        return BB
      }
      static GetBabylonScriptURL(BB, IB) {
        if (!BB) return "";
        if (BB.startsWith(TB._DefaultCdnUrl))
          if (TB.ScriptBaseUrl) {
            const IB = TB.ScriptBaseUrl.endsWith("/") ? TB.ScriptBaseUrl.slice(0, -1) : TB.ScriptBaseUrl;
            BB = BB.replace(TB._DefaultCdnUrl, IB)
          } else if (TB._CdnVersion) {
          const IB = `${TB._DefaultCdnUrl}/v${TB._CdnVersion}`;
          BB.startsWith(IB) || (BB = BB.replace(TB._DefaultCdnUrl, IB))
        }
        return BB = TB.ScriptPreprocessUrl(BB), IB && !TB.IsAbsoluteUrl(BB) && (BB = TB.GetAbsoluteUrl(BB)), BB
      }
      static LoadBabylonScript(BB, IB, ZB, JB) {
        BB = TB.GetBabylonScriptURL(BB), TB.LoadScript(BB, IB, ZB)
      }
      static async LoadBabylonScriptAsync(BB) {
        return BB = TB.GetBabylonScriptURL(BB), await TB.LoadScriptAsync(BB)
      }
      static _LoadScriptNative(BB, IB, ZB, JB) {
        if (_native) {
          if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
            const BB = "Loading a script as an ES module is not supported in Babylon Native";
            return void ZB?.(BB, new Error(BB))
          }
          TB.LoadFile(BB, (BB => {
            try {
              Function(BB).apply(null), IB && IB()
            } catch (TB) {
              ZB && ZB("LoadScript Error", TB)
            }
          }), void 0, void 0, !1, ((BB, IB) => {
            ZB && ZB("LoadScript Error", IB)
          }))
        }
      }
      static _LoadScriptWeb(BB, IB, ZB, TB) {
        let JB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" === typeof importScripts) {
          try {
            importScripts(BB), IB && IB()
          } catch (kB) {
            ZB?.(`Unable to load script '${BB}' in worker`, kB)
          }
          return
        }
        if (!(0, oB.l)()) return void ZB?.(`Cannot load script '${BB}' outside of a window or a worker`);
        const GB = document.getElementsByTagName("head")[0],
          vB = document.createElement("script");
        JB ? (vB.setAttribute("type", "module"), vB.innerText = BB) : (vB.setAttribute("type", "text/javascript"), vB.setAttribute("src", BB)), TB && (vB.id = TB), vB.onload = () => {
          IB && IB()
        }, vB.onerror = IB => {
          ZB && ZB(`Unable to load script '${BB}'`, IB)
        }, GB.appendChild(vB)
      }
      static async LoadScriptAsync(BB, IB) {
        return await new Promise(((ZB, TB) => {
          this.LoadScript(BB, (() => {
            ZB()
          }), ((BB, IB) => {
            TB(IB || new Error(BB))
          }), IB)
        }))
      }
      static ReadFileAsDataURL(BB, IB, ZB) {
        const TB = new FileReader,
          oB = {
            onCompleteObservable: new JB.b,
            abort: () => TB.abort()
          };
        return TB.onloadend = () => {
          oB.onCompleteObservable.notifyObservers(oB)
        }, TB.onload = BB => {
          IB(BB.target.result)
        }, TB.onprogress = ZB, TB.readAsDataURL(BB), oB
      }
      static ReadFile(BB, IB, ZB, TB, JB) {
        return (0, zB.m)(BB, IB, ZB, TB, JB)
      }
      static FileAsURL(BB) {
        const IB = new Blob([BB]);
        return window.URL.createObjectURL(IB)
      }
      static Format(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return BB.toFixed(IB)
      }
      static DeepCopy(BB, IB, ZB, TB) {
        vB.b.DeepCopy(BB, IB, ZB, TB)
      }
      static IsEmpty(BB) {
        for (const IB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, IB)) return !1;
        return !0
      }
      static RegisterTopRootEvents(BB, IB) {
        for (let TB = 0; TB < IB.length; TB++) {
          const JB = IB[TB];
          BB.addEventListener(JB.name, JB.handler, !1);
          try {
            window.parent && window.parent.addEventListener(JB.name, JB.handler, !1)
          } catch (ZB) {}
        }
      }
      static UnregisterTopRootEvents(BB, IB) {
        for (let TB = 0; TB < IB.length; TB++) {
          const JB = IB[TB];
          BB.removeEventListener(JB.name, JB.handler);
          try {
            BB.parent && BB.parent.removeEventListener(JB.name, JB.handler)
          } catch (ZB) {}
        }
      }
      static async DumpFramebuffer(BB, IB, ZB, TB) {
        throw (0, cB.m)("DumpTools")
      }
      static DumpData(BB, IB, ZB, TB) {
        throw (0, cB.m)("DumpTools")
      }
      static async DumpDataAsync(BB, IB, ZB) {
        throw (0, cB.m)("DumpTools")
      }
      static _IsOffScreenCanvas(BB) {
        return void 0 !== BB.convertToBlob
      }
      static ToBlob(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          JB = arguments.length > 3 ? arguments[3] : void 0;
        TB._IsOffScreenCanvas(BB) || BB.toBlob || (BB.toBlob = function(BB, IB, ZB) {
          setTimeout((() => {
            const TB = atob(this.toDataURL(IB, ZB).split(",")[1]),
              JB = TB.length,
              oB = new Uint8Array(JB);
            for (let BB = 0; BB < JB; BB++) oB[BB] = TB.charCodeAt(BB);
            BB(new Blob([oB]))
          }))
        }), TB._IsOffScreenCanvas(BB) ? BB.convertToBlob({
          type: ZB,
          quality: JB
        }).then((BB => IB(BB))) : BB.toBlob((function(BB) {
          IB(BB)
        }), ZB, JB)
      }
      static DownloadBlob(BB, IB) {
        if ("download" in document.createElement("a")) {
          if (!IB) {
            const BB = new Date;
            IB = "screenshot_" + ((BB.getFullYear() + "-" + (BB.getMonth() + 1)).slice(2) + "-" + BB.getDate() + "_" + BB.getHours() + "-" + ("0" + BB.getMinutes()).slice(-2)) + ".png"
          }
          TB.Download(BB, IB)
        } else if (BB && "undefined" !== typeof URL) {
          const IB = URL.createObjectURL(BB),
            ZB = window.open("");
          if (!ZB) return;
          const TB = ZB.document.createElement("img");
          TB.onload = function() {
            URL.revokeObjectURL(IB)
          }, TB.src = IB, ZB.document.body.appendChild(TB)
        }
      }
      static EncodeScreenshotCanvasData(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          JB = arguments.length > 3 ? arguments[3] : void 0,
          oB = arguments.length > 4 ? arguments[4] : void 0;
        if ("string" !== typeof JB && IB) {
          if (IB) {
            if (TB._IsOffScreenCanvas(BB)) return void BB.convertToBlob({
              type: ZB,
              quality: oB
            }).then((BB => {
              const ZB = new FileReader;
              ZB.readAsDataURL(BB), ZB.onloadend = () => {
                const BB = ZB.result;
                IB(BB)
              }
            }));
            const JB = BB.toDataURL(ZB, oB);
            IB(JB)
          }
        } else this.ToBlob(BB, (function(BB) {
          BB && TB.DownloadBlob(BB, JB), IB && IB("")
        }), ZB, oB)
      }
      static Download(BB, IB) {
        if ("undefined" === typeof URL) return;
        const ZB = window.URL.createObjectURL(BB),
          TB = document.createElement("a");
        document.body.appendChild(TB), TB.style.display = "none", TB.href = ZB, TB.download = IB, TB.addEventListener("click", (() => {
          TB.parentElement && TB.parentElement.removeChild(TB)
        })), TB.click(), window.URL.revokeObjectURL(ZB)
      }
      static BackCompatCameraNoPreventDefault(BB) {
        return "boolean" === typeof BB[0] ? BB[0] : "boolean" === typeof BB[1] && BB[1]
      }
      static CreateScreenshot(BB, IB, ZB, TB) {
        throw (0, cB.m)("ScreenshotTools")
      }
      static async CreateScreenshotAsync(BB, IB, ZB) {
        throw (0, cB.m)("ScreenshotTools")
      }
      static CreateScreenshotUsingRenderTarget(BB, IB, ZB, TB) {
        throw (0, cB.m)("ScreenshotTools")
      }
      static async CreateScreenshotUsingRenderTargetAsync(BB, IB, ZB) {
        throw (0, cB.m)("ScreenshotTools")
      }
      static RandomId() {
        return (0, gB.d)()
      }
      static IsBase64(BB) {
        return (0, zB.g)(BB)
      }
      static DecodeBase64(BB) {
        return (0, zB.c)(BB)
      }
      static get errorsCount() {
        return GB.d.errorsCount
      }
      static Log(BB) {
        GB.d.Log(BB)
      }
      static Warn(BB) {
        GB.d.Warn(BB)
      }
      static Error(BB) {
        GB.d.Error(BB)
      }
      static get LogCache() {
        return GB.d.LogCache
      }
      static ClearLogCache() {
        GB.d.ClearLogCache()
      }
      static set LogLevels(BB) {
        GB.d.LogLevels = BB
      }
      static set PerformanceLogLevel(BB) {
        (BB & TB.PerformanceUserMarkLogLevel) !== TB.PerformanceUserMarkLogLevel ? (BB & TB.PerformanceConsoleLogLevel) !== TB.PerformanceConsoleLogLevel ? (TB.StartPerformanceCounter = TB._StartPerformanceCounterDisabled, TB.EndPerformanceCounter = TB._EndPerformanceCounterDisabled, _native?.disablePerformanceLogging?.()) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(2), TB.StartPerformanceCounter = TB._StartMarkNative, TB.EndPerformanceCounter = TB._EndMarkNative) : (TB.StartPerformanceCounter = TB._StartPerformanceConsole, TB.EndPerformanceCounter = TB._EndPerformanceConsole) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(1), TB.StartPerformanceCounter = TB._StartMarkNative, TB.EndPerformanceCounter = TB._EndMarkNative) : (TB.StartPerformanceCounter = TB._StartUserMark, TB.EndPerformanceCounter = TB._EndUserMark)
      }
      static _StartPerformanceCounterDisabled(BB, IB) {}
      static _EndPerformanceCounterDisabled(BB, IB) {}
      static _StartUserMark(BB) {
        let IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!TB._Performance) {
          if (!(0, oB.l)()) return;
          TB._Performance = window.performance
        }
        IB && TB._Performance.mark && TB._Performance.mark(BB + "-Begin")
      }
      static _EndUserMark(BB) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && TB._Performance.mark && (TB._Performance.mark(BB + "-End"), TB._Performance.measure(BB, BB + "-Begin", BB + "-End"))
      }
      static _StartPerformanceConsole(BB) {
        let IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        IB && (TB._StartUserMark(BB, IB), console.time && console.time(BB))
      }
      static _EndPerformanceConsole(BB) {
        let IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        IB && (TB._EndUserMark(BB, IB), console.timeEnd(BB))
      }
      static _StartMarkNative(BB) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
          if (TB._NativePerformanceCounterHandles.has(BB)) TB.Warn(`Performance counter with name ${BB} is already started.`);
          else {
            const IB = _native.startPerformanceCounter(BB);
            TB._NativePerformanceCounterHandles.set(BB, IB)
          }
      }
      static _EndMarkNative(BB) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
          const IB = TB._NativePerformanceCounterHandles.get(BB);
          IB ? (_native.endPerformanceCounter(IB), TB._NativePerformanceCounterHandles.delete(BB)) : TB.Warn(`Performance counter with name ${BB} was not started.`)
        }
      }
      static get Now() {
        return kB.c.Now
      }
      static GetClassName(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZB = null;
        if (!IB && BB.getClassName) ZB = BB.getClassName();
        else {
          if (BB instanceof Object) {
            ZB = (IB ? BB : Object.getPrototypeOf(BB)).constructor.__bjsclassName__
          }
          ZB || (ZB = typeof BB)
        }
        return ZB
      }
      static First(BB, IB) {
        for (const ZB of BB)
          if (IB(ZB)) return ZB;
        return null
      }
      static getFullClassName(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZB = null,
          TB = null;
        if (!IB && BB.getClassName) ZB = BB.getClassName();
        else {
          if (BB instanceof Object) {
            const JB = IB ? BB : Object.getPrototypeOf(BB);
            ZB = JB.constructor.__bjsclassName__, TB = JB.constructor.__bjsmoduleName__
          }
          ZB || (ZB = typeof BB)
        }
        return ZB ? (null != TB ? TB + "." : "") + ZB : null
      }
      static async DelayAsync(BB) {
        await new Promise((IB => {
          setTimeout((() => {
            IB()
          }), BB)
        }))
      }
      static IsSafari() {
        return !!(0, oB.h)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }
    }

    function UB(BB, IB) {
      return ZB => {
        ZB.__bjsclassName__ = BB, ZB.__bjsmoduleName__ = null != IB ? IB : null
      }
    }
    TB = yB, yB.AssetBaseUrl = "", yB.UseCustomRequestHeaders = !1, yB.CustomRequestHeaders = nB.d.CustomRequestHeaders, yB.GetDOMTextContent = oB.c, yB._DefaultCdnUrl = "https://cdn.babylonjs.com", yB._CdnVersion = "9.28.0", yB._DefaultAssetsUrl = "https://assets.babylonjs.com/core", yB.LoadScript = "undefined" === typeof _native ? TB._LoadScriptWeb : TB._LoadScriptNative, yB.GetAbsoluteUrl = "object" === typeof document ? BB => {
      const IB = document.createElement("a");
      return IB.href = BB, IB.href
    } : "function" === typeof URL && "object" === typeof location ? BB => new URL(BB, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
    }, yB.NoneLogLevel = GB.d.NoneLogLevel, yB.MessageLogLevel = GB.d.MessageLogLevel, yB.WarningLogLevel = GB.d.WarningLogLevel, yB.ErrorLogLevel = GB.d.ErrorLogLevel, yB.AllLogLevel = GB.d.AllLogLevel, yB.IsWindowObjectExist = oB.l, yB.PerformanceNoneLogLevel = 0, yB.PerformanceUserMarkLogLevel = 1, yB.PerformanceConsoleLogLevel = 2, yB._NativePerformanceCounterHandles = new Map, yB.StartPerformanceCounter = TB._StartPerformanceCounterDisabled, yB.EndPerformanceCounter = TB._EndPerformanceCounterDisabled;
    class WB {
      constructor(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.iterations = BB, this.index = TB - 1, this._done = !1, this._fn = IB, this._successCallback = ZB
      }
      executeNext() {
        this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
      }
      breakLoop() {
        this._done = !0, this._successCallback()
      }
      static Run(BB, IB, ZB) {
        const TB = new WB(BB, IB, ZB, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return TB.executeNext(), TB
      }
      static SyncAsyncForLoop(BB, IB, ZB, TB, JB) {
        let oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return WB.Run(Math.ceil(BB / IB), (TB => {
          JB && JB() ? TB.breakLoop() : setTimeout((() => {
            for (let oB = 0; oB < IB; ++oB) {
              const GB = TB.index * IB + oB;
              if (GB >= BB) break;
              if (ZB(GB), JB && JB()) {
                TB.breakLoop();
                break
              }
            }
            TB.executeNext()
          }), oB)
        }), TB)
      }
    }
    let dB = !1;

    function CB() {
      dB || (dB = !0, yB.Mix = qB.m, yB.IsExponentOfTwo = qB.i, hB.e.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z")
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);