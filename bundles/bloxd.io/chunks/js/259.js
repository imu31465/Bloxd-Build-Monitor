export const id = 259;
export const ids = [259];
export const modules = {
  40167: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => dB
    });
    var QB = zB(38783),
      nB = zB(37222);
    class dB {
      static Instantiate(BB) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[BB]) return this.RegisteredExternalClasses[BB];
        const jB = (0, nB.b)(BB);
        if (jB) return jB;
        QB.c.Warn(BB + " not found, you may have missed an import.");
        const zB = BB.split(".");
        let dB = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
        for (let QB = 0, nB = zB.length; QB < nB; QB++) dB = dB[zB[QB]];
        return "function" !== typeof dB ? null : dB
      }
    }
    dB.RegisteredExternalClasses = {}
  },
  39986: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => nB
    });
    var QB = zB(39943);
    class nB {
      static get Now() {
        return (0, QB.o)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
      }
    }
  },
  40015: (BB, jB, zB) => {
    function QB(BB) {
      let jB = 1;
      do {
        jB *= 2
      } while (jB < BB);
      return jB === BB
    }

    function nB(BB, jB, zB) {
      return BB * (1 - zB) + jB * zB
    }

    function dB(BB) {
      const jB = IB(BB),
        zB = NB(BB);
      return jB - BB > BB - zB ? zB : jB
    }

    function IB(BB) {
      return BB--, BB |= BB >> 1, BB |= BB >> 2, BB |= BB >> 4, BB |= BB >> 8, BB |= BB >> 16, ++BB
    }

    function NB(BB) {
      return BB |= BB >> 1, BB |= BB >> 2, BB |= BB >> 4, BB |= BB >> 8, (BB |= BB >> 16) - (BB >> 1)
    }

    function uB(BB, jB) {
      let zB;
      switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
        case 1:
          zB = NB(BB);
          break;
        case 2:
          zB = dB(BB);
          break;
        default:
          zB = IB(BB)
      }
      return Math.min(zB, jB)
    }
    zB.d(jB, {
      b: () => NB,
      c: () => uB,
      d: () => QB,
      e: () => nB,
      g: () => dB
    })
  },
  40164: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => LB,
      h: () => tB,
      i: () => kB,
      l: () => GB
    });
    var QB, nB = zB(37202),
      dB = zB(39943),
      IB = zB(38783),
      NB = zB(38780),
      uB = zB(39986),
      UB = zB(39965),
      aB = zB(40110),
      pB = zB(37197),
      rB = zB(40108),
      sB = zB(39976),
      JB = zB(40167),
      mB = zB(37987),
      yB = zB(40015);
    class kB {
      static get BaseUrl() {
        return rB.f.BaseUrl
      }
      static set BaseUrl(BB) {
        rB.f.BaseUrl = BB
      }
      static get CleanUrl() {
        return rB.f.CleanUrl
      }
      static set CleanUrl(BB) {
        rB.f.CleanUrl = BB
      }
      static IsAbsoluteUrl(BB) {
        return 0 === BB.indexOf("//") || -1 !== BB.indexOf("://") && (-1 !== BB.indexOf(".") && (-1 !== BB.indexOf("/") && (!(BB.indexOf(":") > BB.indexOf("/")) && (BB.indexOf("://") < BB.indexOf(".") || (0 === BB.indexOf("data:") || 0 === BB.indexOf("blob:"))))))
      }
      static set ScriptBaseUrl(BB) {
        rB.f.ScriptBaseUrl = BB
      }
      static get ScriptBaseUrl() {
        return rB.f.ScriptBaseUrl
      }
      static set CDNBaseUrl(BB) {
        QB.ScriptBaseUrl = BB, QB.AssetBaseUrl = BB
      }
      static set ScriptPreprocessUrl(BB) {
        rB.f.ScriptPreprocessUrl = BB
      }
      static get ScriptPreprocessUrl() {
        return rB.f.ScriptPreprocessUrl
      }
      static get DefaultRetryStrategy() {
        return rB.f.DefaultRetryStrategy
      }
      static set DefaultRetryStrategy(BB) {
        rB.f.DefaultRetryStrategy = BB
      }
      static get CorsBehavior() {
        return rB.f.CorsBehavior
      }
      static set CorsBehavior(BB) {
        rB.f.CorsBehavior = BB
      }
      static get UseFallbackTexture() {
        return pB.c.UseFallbackTexture
      }
      static set UseFallbackTexture(BB) {
        pB.c.UseFallbackTexture = BB
      }
      static get RegisteredExternalClasses() {
        return JB.b.RegisteredExternalClasses
      }
      static set RegisteredExternalClasses(BB) {
        JB.b.RegisteredExternalClasses = BB
      }
      static get fallbackTexture() {
        return pB.c.FallbackTexture
      }
      static set fallbackTexture(BB) {
        pB.c.FallbackTexture = BB
      }
      static FetchToRef(BB, jB, zB, QB, nB, dB) {
        const IB = 4 * ((Math.abs(BB) * zB % zB | 0) + (Math.abs(jB) * QB % QB | 0) * zB);
        dB.r = nB[IB] / 255, dB.g = nB[IB + 1] / 255, dB.b = nB[IB + 2] / 255, dB.a = nB[IB + 3] / 255
      }
      static Mix(BB, jB, zB) {
        return 0
      }
      static Instantiate(BB) {
        return JB.b.Instantiate(BB)
      }
      static SetImmediate(BB) {
        sB.b.SetImmediate(BB)
      }
      static IsExponentOfTwo(BB) {
        return !0
      }
      static FloatRound(BB) {
        return Math.fround(BB)
      }
      static GetFilename(BB) {
        const jB = BB.lastIndexOf("/");
        return jB < 0 ? BB : BB.substring(jB + 1)
      }
      static GetFolderPath(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const zB = BB.lastIndexOf("/");
        return zB < 0 ? jB ? BB : "" : BB.substring(0, zB + 1)
      }
      static ToDegrees(BB) {
        return 180 * BB / Math.PI
      }
      static ToRadians(BB) {
        return BB * Math.PI / 180
      }
      static SmoothAngleChange(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
        const QB = this.ToRadians(BB),
          nB = this.ToRadians(jB);
        return this.ToDegrees(Math.atan2((1 - zB) * Math.sin(nB) + zB * Math.sin(QB), (1 - zB) * Math.cos(nB) + zB * Math.cos(QB)))
      }
      static MakeArray(BB, jB) {
        return !0 === jB || void 0 !== BB && null != BB ? Array.isArray(BB) ? BB : [BB] : null
      }
      static GetPointerPrefix(BB) {
        return (0, dB.o)() && !window.PointerEvent ? "mouse" : "pointer"
      }
      static SetCorsBehavior(BB, jB) {
        (0, rB.C)(BB, jB)
      }
      static SetReferrerPolicyBehavior(BB, jB) {
        jB.referrerPolicy = BB
      }
      static get PreprocessUrl() {
        return rB.f.PreprocessUrl
      }
      static set PreprocessUrl(BB) {
        rB.f.PreprocessUrl = BB
      }
      static LoadImage(BB, jB, zB, QB, nB, dB) {
        return (0, rB.r)(BB, jB, zB, QB, nB, dB)
      }
      static LoadFile(BB, jB, zB, QB, nB, dB) {
        return (0, rB.q)(BB, jB, zB, QB, nB, dB)
      }
      static async LoadFileAsync(BB) {
        let jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return await new Promise(((zB, QB) => {
          (0, rB.q)(BB, (BB => {
            zB(BB)
          }), void 0, void 0, jB, ((BB, jB) => {
            QB(jB)
          }))
        }))
      }
      static GetAssetUrl(BB) {
        if (!BB) return "";
        if (QB.AssetBaseUrl && BB.startsWith(QB._DefaultAssetsUrl)) {
          const jB = QB.AssetBaseUrl.endsWith("/") ? QB.AssetBaseUrl.slice(0, -1) : QB.AssetBaseUrl;
          return BB.replace(QB._DefaultAssetsUrl, jB)
        }
        return BB
      }
      static GetBabylonScriptURL(BB, jB) {
        if (!BB) return "";
        if (BB.startsWith(QB._DefaultCdnUrl))
          if (QB.ScriptBaseUrl) {
            const jB = QB.ScriptBaseUrl.endsWith("/") ? QB.ScriptBaseUrl.slice(0, -1) : QB.ScriptBaseUrl;
            BB = BB.replace(QB._DefaultCdnUrl, jB)
          } else if (QB._CdnVersion) {
          const jB = `${QB._DefaultCdnUrl}/v${QB._CdnVersion}`;
          BB.startsWith(jB) || (BB = BB.replace(QB._DefaultCdnUrl, jB))
        }
        return BB = QB.ScriptPreprocessUrl(BB), jB && !QB.IsAbsoluteUrl(BB) && (BB = QB.GetAbsoluteUrl(BB)), BB
      }
      static LoadBabylonScript(BB, jB, zB, nB) {
        BB = QB.GetBabylonScriptURL(BB), QB.LoadScript(BB, jB, zB)
      }
      static async LoadBabylonScriptAsync(BB) {
        return BB = QB.GetBabylonScriptURL(BB), await QB.LoadScriptAsync(BB)
      }
      static _LoadScriptNative(BB, jB, zB, nB) {
        if (_native) {
          if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
            const BB = "Loading a script as an ES module is not supported in Babylon Native";
            return void zB?.(BB, new Error(BB))
          }
          QB.LoadFile(BB, (BB => {
            try {
              Function(BB).apply(null), jB && jB()
            } catch (QB) {
              zB && zB("LoadScript Error", QB)
            }
          }), void 0, void 0, !1, ((BB, jB) => {
            zB && zB("LoadScript Error", jB)
          }))
        }
      }
      static _LoadScriptWeb(BB, jB, zB, QB) {
        let nB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" === typeof importScripts) {
          try {
            importScripts(BB), jB && jB()
          } catch (uB) {
            zB?.(`Unable to load script '${BB}' in worker`, uB)
          }
          return
        }
        if (!(0, dB.o)()) return void zB?.(`Cannot load script '${BB}' outside of a window or a worker`);
        const IB = document.getElementsByTagName("head")[0],
          NB = document.createElement("script");
        nB ? (NB.setAttribute("type", "module"), NB.innerText = BB) : (NB.setAttribute("type", "text/javascript"), NB.setAttribute("src", BB)), QB && (NB.id = QB), NB.onload = () => {
          jB && jB()
        }, NB.onerror = jB => {
          zB && zB(`Unable to load script '${BB}'`, jB)
        }, IB.appendChild(NB)
      }
      static async LoadScriptAsync(BB, jB) {
        return await new Promise(((zB, QB) => {
          this.LoadScript(BB, (() => {
            zB()
          }), ((BB, jB) => {
            QB(jB || new Error(BB))
          }), jB)
        }))
      }
      static ReadFileAsDataURL(BB, jB, zB) {
        const QB = new FileReader,
          dB = {
            onCompleteObservable: new nB.c,
            abort: () => QB.abort()
          };
        return QB.onloadend = () => {
          dB.onCompleteObservable.notifyObservers(dB)
        }, QB.onload = BB => {
          jB(BB.target.result)
        }, QB.onprogress = zB, QB.readAsDataURL(BB), dB
      }
      static ReadFile(BB, jB, zB, QB, nB) {
        return (0, rB.v)(BB, jB, zB, QB, nB)
      }
      static FileAsURL(BB) {
        const jB = new Blob([BB]);
        return window.URL.createObjectURL(jB)
      }
      static Format(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return BB.toFixed(jB)
      }
      static DeepCopy(BB, jB, zB, QB) {
        NB.e.DeepCopy(BB, jB, zB, QB)
      }
      static IsEmpty(BB) {
        for (const jB in BB)
          if (Object.prototype.hasOwnProperty.call(BB, jB)) return !1;
        return !0
      }
      static RegisterTopRootEvents(BB, jB) {
        for (let QB = 0; QB < jB.length; QB++) {
          const nB = jB[QB];
          BB.addEventListener(nB.name, nB.handler, !1);
          try {
            window.parent && window.parent.addEventListener(nB.name, nB.handler, !1)
          } catch (zB) {}
        }
      }
      static UnregisterTopRootEvents(BB, jB) {
        for (let QB = 0; QB < jB.length; QB++) {
          const nB = jB[QB];
          BB.removeEventListener(nB.name, nB.handler);
          try {
            BB.parent && BB.parent.removeEventListener(nB.name, nB.handler)
          } catch (zB) {}
        }
      }
      static async DumpFramebuffer(BB, jB, zB, QB) {
        throw (0, UB.k)("DumpTools")
      }
      static DumpData(BB, jB, zB, QB) {
        throw (0, UB.k)("DumpTools")
      }
      static async DumpDataAsync(BB, jB, zB) {
        throw (0, UB.k)("DumpTools")
      }
      static _IsOffScreenCanvas(BB) {
        return void 0 !== BB.convertToBlob
      }
      static ToBlob(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          nB = arguments.length > 3 ? arguments[3] : void 0;
        QB._IsOffScreenCanvas(BB) || BB.toBlob || (BB.toBlob = function(BB, jB, zB) {
          setTimeout((() => {
            const QB = atob(this.toDataURL(jB, zB).split(",")[1]),
              nB = QB.length,
              dB = new Uint8Array(nB);
            for (let BB = 0; BB < nB; BB++) dB[BB] = QB.charCodeAt(BB);
            BB(new Blob([dB]))
          }))
        }), QB._IsOffScreenCanvas(BB) ? BB.convertToBlob({
          type: zB,
          quality: nB
        }).then((BB => jB(BB))) : BB.toBlob((function(BB) {
          jB(BB)
        }), zB, nB)
      }
      static DownloadBlob(BB, jB) {
        if ("download" in document.createElement("a")) {
          if (!jB) {
            const BB = new Date;
            jB = "screenshot_" + ((BB.getFullYear() + "-" + (BB.getMonth() + 1)).slice(2) + "-" + BB.getDate() + "_" + BB.getHours() + "-" + ("0" + BB.getMinutes()).slice(-2)) + ".png"
          }
          QB.Download(BB, jB)
        } else if (BB && "undefined" !== typeof URL) {
          const jB = URL.createObjectURL(BB),
            zB = window.open("");
          if (!zB) return;
          const QB = zB.document.createElement("img");
          QB.onload = function() {
            URL.revokeObjectURL(jB)
          }, QB.src = jB, zB.document.body.appendChild(QB)
        }
      }
      static EncodeScreenshotCanvasData(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          nB = arguments.length > 3 ? arguments[3] : void 0,
          dB = arguments.length > 4 ? arguments[4] : void 0;
        if ("string" !== typeof nB && jB) {
          if (jB) {
            if (QB._IsOffScreenCanvas(BB)) return void BB.convertToBlob({
              type: zB,
              quality: dB
            }).then((BB => {
              const zB = new FileReader;
              zB.readAsDataURL(BB), zB.onloadend = () => {
                const BB = zB.result;
                jB(BB)
              }
            }));
            const nB = BB.toDataURL(zB, dB);
            jB(nB)
          }
        } else this.ToBlob(BB, (function(BB) {
          BB && QB.DownloadBlob(BB, nB), jB && jB("")
        }), zB, dB)
      }
      static Download(BB, jB) {
        if ("undefined" === typeof URL) return;
        const zB = window.URL.createObjectURL(BB),
          QB = document.createElement("a");
        document.body.appendChild(QB), QB.style.display = "none", QB.href = zB, QB.download = jB, QB.addEventListener("click", (() => {
          QB.parentElement && QB.parentElement.removeChild(QB)
        })), QB.click(), window.URL.revokeObjectURL(zB)
      }
      static BackCompatCameraNoPreventDefault(BB) {
        return "boolean" === typeof BB[0] ? BB[0] : "boolean" === typeof BB[1] && BB[1]
      }
      static CreateScreenshot(BB, jB, zB, QB) {
        throw (0, UB.k)("ScreenshotTools")
      }
      static async CreateScreenshotAsync(BB, jB, zB) {
        throw (0, UB.k)("ScreenshotTools")
      }
      static CreateScreenshotUsingRenderTarget(BB, jB, zB, QB) {
        throw (0, UB.k)("ScreenshotTools")
      }
      static async CreateScreenshotUsingRenderTargetAsync(BB, jB, zB) {
        throw (0, UB.k)("ScreenshotTools")
      }
      static RandomId() {
        return (0, mB.d)()
      }
      static IsBase64(BB) {
        return (0, rB.m)(BB)
      }
      static DecodeBase64(BB) {
        return (0, rB.b)(BB)
      }
      static get errorsCount() {
        return IB.c.errorsCount
      }
      static Log(BB) {
        IB.c.Log(BB)
      }
      static Warn(BB) {
        IB.c.Warn(BB)
      }
      static Error(BB) {
        IB.c.Error(BB)
      }
      static get LogCache() {
        return IB.c.LogCache
      }
      static ClearLogCache() {
        IB.c.ClearLogCache()
      }
      static set LogLevels(BB) {
        IB.c.LogLevels = BB
      }
      static set PerformanceLogLevel(BB) {
        (BB & QB.PerformanceUserMarkLogLevel) !== QB.PerformanceUserMarkLogLevel ? (BB & QB.PerformanceConsoleLogLevel) !== QB.PerformanceConsoleLogLevel ? (QB.StartPerformanceCounter = QB._StartPerformanceCounterDisabled, QB.EndPerformanceCounter = QB._EndPerformanceCounterDisabled, _native?.disablePerformanceLogging?.()) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(2), QB.StartPerformanceCounter = QB._StartMarkNative, QB.EndPerformanceCounter = QB._EndMarkNative) : (QB.StartPerformanceCounter = QB._StartPerformanceConsole, QB.EndPerformanceCounter = QB._EndPerformanceConsole) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(1), QB.StartPerformanceCounter = QB._StartMarkNative, QB.EndPerformanceCounter = QB._EndMarkNative) : (QB.StartPerformanceCounter = QB._StartUserMark, QB.EndPerformanceCounter = QB._EndUserMark)
      }
      static _StartPerformanceCounterDisabled(BB, jB) {}
      static _EndPerformanceCounterDisabled(BB, jB) {}
      static _StartUserMark(BB) {
        let jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!QB._Performance) {
          if (!(0, dB.o)()) return;
          QB._Performance = window.performance
        }
        jB && QB._Performance.mark && QB._Performance.mark(BB + "-Begin")
      }
      static _EndUserMark(BB) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && QB._Performance.mark && (QB._Performance.mark(BB + "-End"), QB._Performance.measure(BB, BB + "-Begin", BB + "-End"))
      }
      static _StartPerformanceConsole(BB) {
        let jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        jB && (QB._StartUserMark(BB, jB), console.time && console.time(BB))
      }
      static _EndPerformanceConsole(BB) {
        let jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        jB && (QB._EndUserMark(BB, jB), console.timeEnd(BB))
      }
      static _StartMarkNative(BB) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
          if (QB._NativePerformanceCounterHandles.has(BB)) QB.Warn(`Performance counter with name ${BB} is already started.`);
          else {
            const jB = _native.startPerformanceCounter(BB);
            QB._NativePerformanceCounterHandles.set(BB, jB)
          }
      }
      static _EndMarkNative(BB) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
          const jB = QB._NativePerformanceCounterHandles.get(BB);
          jB ? (_native.endPerformanceCounter(jB), QB._NativePerformanceCounterHandles.delete(BB)) : QB.Warn(`Performance counter with name ${BB} was not started.`)
        }
      }
      static get Now() {
        return uB.e.Now
      }
      static GetClassName(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zB = null;
        if (!jB && BB.getClassName) zB = BB.getClassName();
        else {
          if (BB instanceof Object) {
            zB = (jB ? BB : Object.getPrototypeOf(BB)).constructor.__bjsclassName__
          }
          zB || (zB = typeof BB)
        }
        return zB
      }
      static First(BB, jB) {
        for (const zB of BB)
          if (jB(zB)) return zB;
        return null
      }
      static getFullClassName(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zB = null,
          QB = null;
        if (!jB && BB.getClassName) zB = BB.getClassName();
        else {
          if (BB instanceof Object) {
            const nB = jB ? BB : Object.getPrototypeOf(BB);
            zB = nB.constructor.__bjsclassName__, QB = nB.constructor.__bjsmoduleName__
          }
          zB || (zB = typeof BB)
        }
        return zB ? (null != QB ? QB + "." : "") + zB : null
      }
      static async DelayAsync(BB) {
        await new Promise((jB => {
          setTimeout((() => {
            jB()
          }), BB)
        }))
      }
      static IsSafari() {
        return !!(0, dB.k)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }
    }

    function GB(BB, jB) {
      return zB => {
        zB.__bjsclassName__ = BB, zB.__bjsmoduleName__ = null != jB ? jB : null
      }
    }
    QB = kB, kB.AssetBaseUrl = "", kB.UseCustomRequestHeaders = !1, kB.CustomRequestHeaders = aB.b.CustomRequestHeaders, kB.GetDOMTextContent = dB.d, kB._DefaultCdnUrl = "https://cdn.babylonjs.com", kB._CdnVersion = "9.28.0", kB._DefaultAssetsUrl = "https://assets.babylonjs.com/core", kB.LoadScript = "undefined" === typeof _native ? QB._LoadScriptWeb : QB._LoadScriptNative, kB.GetAbsoluteUrl = "object" === typeof document ? BB => {
      const jB = document.createElement("a");
      return jB.href = BB, jB.href
    } : "function" === typeof URL && "object" === typeof location ? BB => new URL(BB, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
    }, kB.NoneLogLevel = IB.c.NoneLogLevel, kB.MessageLogLevel = IB.c.MessageLogLevel, kB.WarningLogLevel = IB.c.WarningLogLevel, kB.ErrorLogLevel = IB.c.ErrorLogLevel, kB.AllLogLevel = IB.c.AllLogLevel, kB.IsWindowObjectExist = dB.o, kB.PerformanceNoneLogLevel = 0, kB.PerformanceUserMarkLogLevel = 1, kB.PerformanceConsoleLogLevel = 2, kB._NativePerformanceCounterHandles = new Map, kB.StartPerformanceCounter = QB._StartPerformanceCounterDisabled, kB.EndPerformanceCounter = QB._EndPerformanceCounterDisabled;
    class LB {
      constructor(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.iterations = BB, this.index = QB - 1, this._done = !1, this._fn = jB, this._successCallback = zB
      }
      executeNext() {
        this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
      }
      breakLoop() {
        this._done = !0, this._successCallback()
      }
      static Run(BB, jB, zB) {
        const QB = new LB(BB, jB, zB, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return QB.executeNext(), QB
      }
      static SyncAsyncForLoop(BB, jB, zB, QB, nB) {
        let dB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return LB.Run(Math.ceil(BB / jB), (QB => {
          nB && nB() ? QB.breakLoop() : setTimeout((() => {
            for (let dB = 0; dB < jB; ++dB) {
              const IB = QB.index * jB + dB;
              if (IB >= BB) break;
              if (zB(IB), nB && nB()) {
                QB.breakLoop();
                break
              }
            }
            QB.executeNext()
          }), dB)
        }), QB)
      }
    }
    let gB = !1;

    function tB() {
      gB || (gB = !0, kB.Mix = yB.e, kB.IsExponentOfTwo = yB.d, pB.c.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z")
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);