export const id = 290;
export const ids = [290];
export const modules = {
  41620: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => uR
    });
    var yR = GR(39914),
      tR = GR(38253);
    class uR {
      static Instantiate(RR) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[RR]) return this.RegisteredExternalClasses[RR];
        const JR = (0, tR.e)(RR);
        if (JR) return JR;
        yR.c.Warn(RR + " not found, you may have missed an import.");
        const GR = RR.split(".");
        let uR = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
        for (let yR = 0, tR = GR.length; yR < tR; yR++) uR = uR[GR[yR]];
        return "function" !== typeof uR ? null : uR
      }
    }
    uR.RegisteredExternalClasses = {}
  },
  41425: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => tR
    });
    var yR = GR(41395);
    class tR {
      static get Now() {
        return (0, yR.m)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
      }
    }
  },
  41449: (RR, JR, GR) => {
    function yR(RR) {
      let JR = 1;
      do {
        JR *= 2
      } while (JR < RR);
      return JR === RR
    }

    function tR(RR, JR, GR) {
      return RR * (1 - GR) + JR * GR
    }

    function uR(RR) {
      const JR = ZR(RR),
        GR = qR(RR);
      return JR - RR > RR - GR ? GR : JR
    }

    function ZR(RR) {
      return RR--, RR |= RR >> 1, RR |= RR >> 2, RR |= RR >> 4, RR |= RR >> 8, RR |= RR >> 16, ++RR
    }

    function qR(RR) {
      return RR |= RR >> 1, RR |= RR >> 2, RR |= RR >> 4, RR |= RR >> 8, (RR |= RR >> 16) - (RR >> 1)
    }

    function iR(RR, JR) {
      let GR;
      switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
        case 1:
          GR = qR(RR);
          break;
        case 2:
          GR = uR(RR);
          break;
        default:
          GR = ZR(RR)
      }
      return Math.min(GR, JR)
    }
    GR.d(JR, {
      d: () => qR,
      e: () => iR,
      f: () => yR,
      h: () => tR,
      i: () => uR
    })
  },
  41616: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => WR,
      e: () => CR,
      h: () => nR,
      k: () => UR
    });
    var yR, tR = GR(38233),
      uR = GR(41395),
      ZR = GR(39914),
      qR = GR(39912),
      iR = GR(41425),
      fR = GR(41407),
      VR = GR(41568),
      KR = GR(38224),
      wR = GR(41564),
      rR = GR(41415),
      eR = GR(41620),
      aR = GR(39062),
      LR = GR(41449);
    class nR {
      static get BaseUrl() {
        return wR.e.BaseUrl
      }
      static set BaseUrl(RR) {
        wR.e.BaseUrl = RR
      }
      static get CleanUrl() {
        return wR.e.CleanUrl
      }
      static set CleanUrl(RR) {
        wR.e.CleanUrl = RR
      }
      static IsAbsoluteUrl(RR) {
        return 0 === RR.indexOf("//") || -1 !== RR.indexOf("://") && (-1 !== RR.indexOf(".") && (-1 !== RR.indexOf("/") && (!(RR.indexOf(":") > RR.indexOf("/")) && (RR.indexOf("://") < RR.indexOf(".") || (0 === RR.indexOf("data:") || 0 === RR.indexOf("blob:"))))))
      }
      static set ScriptBaseUrl(RR) {
        wR.e.ScriptBaseUrl = RR
      }
      static get ScriptBaseUrl() {
        return wR.e.ScriptBaseUrl
      }
      static set CDNBaseUrl(RR) {
        yR.ScriptBaseUrl = RR, yR.AssetBaseUrl = RR
      }
      static set ScriptPreprocessUrl(RR) {
        wR.e.ScriptPreprocessUrl = RR
      }
      static get ScriptPreprocessUrl() {
        return wR.e.ScriptPreprocessUrl
      }
      static get DefaultRetryStrategy() {
        return wR.e.DefaultRetryStrategy
      }
      static set DefaultRetryStrategy(RR) {
        wR.e.DefaultRetryStrategy = RR
      }
      static get CorsBehavior() {
        return wR.e.CorsBehavior
      }
      static set CorsBehavior(RR) {
        wR.e.CorsBehavior = RR
      }
      static get UseFallbackTexture() {
        return KR.c.UseFallbackTexture
      }
      static set UseFallbackTexture(RR) {
        KR.c.UseFallbackTexture = RR
      }
      static get RegisteredExternalClasses() {
        return eR.b.RegisteredExternalClasses
      }
      static set RegisteredExternalClasses(RR) {
        eR.b.RegisteredExternalClasses = RR
      }
      static get fallbackTexture() {
        return KR.c.FallbackTexture
      }
      static set fallbackTexture(RR) {
        KR.c.FallbackTexture = RR
      }
      static FetchToRef(RR, JR, GR, yR, tR, uR) {
        const ZR = 4 * ((Math.abs(RR) * GR % GR | 0) + (Math.abs(JR) * yR % yR | 0) * GR);
        uR.r = tR[ZR] / 255, uR.g = tR[ZR + 1] / 255, uR.b = tR[ZR + 2] / 255, uR.a = tR[ZR + 3] / 255
      }
      static Mix(RR, JR, GR) {
        return 0
      }
      static Instantiate(RR) {
        return eR.b.Instantiate(RR)
      }
      static SetImmediate(RR) {
        rR.e.SetImmediate(RR)
      }
      static IsExponentOfTwo(RR) {
        return !0
      }
      static FloatRound(RR) {
        return Math.fround(RR)
      }
      static GetFilename(RR) {
        const JR = RR.lastIndexOf("/");
        return JR < 0 ? RR : RR.substring(JR + 1)
      }
      static GetFolderPath(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const GR = RR.lastIndexOf("/");
        return GR < 0 ? JR ? RR : "" : RR.substring(0, GR + 1)
      }
      static ToDegrees(RR) {
        return 180 * RR / Math.PI
      }
      static ToRadians(RR) {
        return RR * Math.PI / 180
      }
      static SmoothAngleChange(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
        const yR = this.ToRadians(RR),
          tR = this.ToRadians(JR);
        return this.ToDegrees(Math.atan2((1 - GR) * Math.sin(tR) + GR * Math.sin(yR), (1 - GR) * Math.cos(tR) + GR * Math.cos(yR)))
      }
      static MakeArray(RR, JR) {
        return !0 === JR || void 0 !== RR && null != RR ? Array.isArray(RR) ? RR : [RR] : null
      }
      static GetPointerPrefix(RR) {
        return (0, uR.m)() && !window.PointerEvent ? "mouse" : "pointer"
      }
      static SetCorsBehavior(RR, JR) {
        (0, wR.A)(RR, JR)
      }
      static SetReferrerPolicyBehavior(RR, JR) {
        JR.referrerPolicy = RR
      }
      static get PreprocessUrl() {
        return wR.e.PreprocessUrl
      }
      static set PreprocessUrl(RR) {
        wR.e.PreprocessUrl = RR
      }
      static LoadImage(RR, JR, GR, yR, tR, uR) {
        return (0, wR.q)(RR, JR, GR, yR, tR, uR)
      }
      static LoadFile(RR, JR, GR, yR, tR, uR) {
        return (0, wR.m)(RR, JR, GR, yR, tR, uR)
      }
      static async LoadFileAsync(RR) {
        let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return await new Promise(((GR, yR) => {
          (0, wR.m)(RR, (RR => {
            GR(RR)
          }), void 0, void 0, JR, ((RR, JR) => {
            yR(JR)
          }))
        }))
      }
      static GetAssetUrl(RR) {
        if (!RR) return "";
        if (yR.AssetBaseUrl && RR.startsWith(yR._DefaultAssetsUrl)) {
          const JR = yR.AssetBaseUrl.endsWith("/") ? yR.AssetBaseUrl.slice(0, -1) : yR.AssetBaseUrl;
          return RR.replace(yR._DefaultAssetsUrl, JR)
        }
        return RR
      }
      static GetBabylonScriptURL(RR, JR) {
        if (!RR) return "";
        if (RR.startsWith(yR._DefaultCdnUrl))
          if (yR.ScriptBaseUrl) {
            const JR = yR.ScriptBaseUrl.endsWith("/") ? yR.ScriptBaseUrl.slice(0, -1) : yR.ScriptBaseUrl;
            RR = RR.replace(yR._DefaultCdnUrl, JR)
          } else if (yR._CdnVersion) {
          const JR = `${yR._DefaultCdnUrl}/v${yR._CdnVersion}`;
          RR.startsWith(JR) || (RR = RR.replace(yR._DefaultCdnUrl, JR))
        }
        return RR = yR.ScriptPreprocessUrl(RR), JR && !yR.IsAbsoluteUrl(RR) && (RR = yR.GetAbsoluteUrl(RR)), RR
      }
      static LoadBabylonScript(RR, JR, GR, tR) {
        RR = yR.GetBabylonScriptURL(RR), yR.LoadScript(RR, JR, GR)
      }
      static async LoadBabylonScriptAsync(RR) {
        return RR = yR.GetBabylonScriptURL(RR), await yR.LoadScriptAsync(RR)
      }
      static _LoadScriptNative(RR, JR, GR, tR) {
        if (_native) {
          if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
            const RR = "Loading a script as an ES module is not supported in Babylon Native";
            return void GR?.(RR, new Error(RR))
          }
          yR.LoadFile(RR, (RR => {
            try {
              Function(RR).apply(null), JR && JR()
            } catch (yR) {
              GR && GR("LoadScript Error", yR)
            }
          }), void 0, void 0, !1, ((RR, JR) => {
            GR && GR("LoadScript Error", JR)
          }))
        }
      }
      static _LoadScriptWeb(RR, JR, GR, yR) {
        let tR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" === typeof importScripts) {
          try {
            importScripts(RR), JR && JR()
          } catch (iR) {
            GR?.(`Unable to load script '${RR}' in worker`, iR)
          }
          return
        }
        if (!(0, uR.m)()) return void GR?.(`Cannot load script '${RR}' outside of a window or a worker`);
        const ZR = document.getElementsByTagName("head")[0],
          qR = document.createElement("script");
        tR ? (qR.setAttribute("type", "module"), qR.innerText = RR) : (qR.setAttribute("type", "text/javascript"), qR.setAttribute("src", RR)), yR && (qR.id = yR), qR.onload = () => {
          JR && JR()
        }, qR.onerror = JR => {
          GR && GR(`Unable to load script '${RR}'`, JR)
        }, ZR.appendChild(qR)
      }
      static async LoadScriptAsync(RR, JR) {
        return await new Promise(((GR, yR) => {
          this.LoadScript(RR, (() => {
            GR()
          }), ((RR, JR) => {
            yR(JR || new Error(RR))
          }), JR)
        }))
      }
      static ReadFileAsDataURL(RR, JR, GR) {
        const yR = new FileReader,
          uR = {
            onCompleteObservable: new tR.b,
            abort: () => yR.abort()
          };
        return yR.onloadend = () => {
          uR.onCompleteObservable.notifyObservers(uR)
        }, yR.onload = RR => {
          JR(RR.target.result)
        }, yR.onprogress = GR, yR.readAsDataURL(RR), uR
      }
      static ReadFile(RR, JR, GR, yR, tR) {
        return (0, wR.t)(RR, JR, GR, yR, tR)
      }
      static FileAsURL(RR) {
        const JR = new Blob([RR]);
        return window.URL.createObjectURL(JR)
      }
      static Format(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return RR.toFixed(JR)
      }
      static DeepCopy(RR, JR, GR, yR) {
        qR.b.DeepCopy(RR, JR, GR, yR)
      }
      static IsEmpty(RR) {
        for (const JR in RR)
          if (Object.prototype.hasOwnProperty.call(RR, JR)) return !1;
        return !0
      }
      static RegisterTopRootEvents(RR, JR) {
        for (let yR = 0; yR < JR.length; yR++) {
          const tR = JR[yR];
          RR.addEventListener(tR.name, tR.handler, !1);
          try {
            window.parent && window.parent.addEventListener(tR.name, tR.handler, !1)
          } catch (GR) {}
        }
      }
      static UnregisterTopRootEvents(RR, JR) {
        for (let yR = 0; yR < JR.length; yR++) {
          const tR = JR[yR];
          RR.removeEventListener(tR.name, tR.handler);
          try {
            RR.parent && RR.parent.removeEventListener(tR.name, tR.handler)
          } catch (GR) {}
        }
      }
      static async DumpFramebuffer(RR, JR, GR, yR) {
        throw (0, fR.j)("DumpTools")
      }
      static DumpData(RR, JR, GR, yR) {
        throw (0, fR.j)("DumpTools")
      }
      static async DumpDataAsync(RR, JR, GR) {
        throw (0, fR.j)("DumpTools")
      }
      static _IsOffScreenCanvas(RR) {
        return void 0 !== RR.convertToBlob
      }
      static ToBlob(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          tR = arguments.length > 3 ? arguments[3] : void 0;
        yR._IsOffScreenCanvas(RR) || RR.toBlob || (RR.toBlob = function(RR, JR, GR) {
          setTimeout((() => {
            const yR = atob(this.toDataURL(JR, GR).split(",")[1]),
              tR = yR.length,
              uR = new Uint8Array(tR);
            for (let RR = 0; RR < tR; RR++) uR[RR] = yR.charCodeAt(RR);
            RR(new Blob([uR]))
          }))
        }), yR._IsOffScreenCanvas(RR) ? RR.convertToBlob({
          type: GR,
          quality: tR
        }).then((RR => JR(RR))) : RR.toBlob((function(RR) {
          JR(RR)
        }), GR, tR)
      }
      static DownloadBlob(RR, JR) {
        if ("download" in document.createElement("a")) {
          if (!JR) {
            const RR = new Date;
            JR = "screenshot_" + ((RR.getFullYear() + "-" + (RR.getMonth() + 1)).slice(2) + "-" + RR.getDate() + "_" + RR.getHours() + "-" + ("0" + RR.getMinutes()).slice(-2)) + ".png"
          }
          yR.Download(RR, JR)
        } else if (RR && "undefined" !== typeof URL) {
          const JR = URL.createObjectURL(RR),
            GR = window.open("");
          if (!GR) return;
          const yR = GR.document.createElement("img");
          yR.onload = function() {
            URL.revokeObjectURL(JR)
          }, yR.src = JR, GR.document.body.appendChild(yR)
        }
      }
      static EncodeScreenshotCanvasData(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          tR = arguments.length > 3 ? arguments[3] : void 0,
          uR = arguments.length > 4 ? arguments[4] : void 0;
        if ("string" !== typeof tR && JR) {
          if (JR) {
            if (yR._IsOffScreenCanvas(RR)) return void RR.convertToBlob({
              type: GR,
              quality: uR
            }).then((RR => {
              const GR = new FileReader;
              GR.readAsDataURL(RR), GR.onloadend = () => {
                const RR = GR.result;
                JR(RR)
              }
            }));
            const tR = RR.toDataURL(GR, uR);
            JR(tR)
          }
        } else this.ToBlob(RR, (function(RR) {
          RR && yR.DownloadBlob(RR, tR), JR && JR("")
        }), GR, uR)
      }
      static Download(RR, JR) {
        if ("undefined" === typeof URL) return;
        const GR = window.URL.createObjectURL(RR),
          yR = document.createElement("a");
        document.body.appendChild(yR), yR.style.display = "none", yR.href = GR, yR.download = JR, yR.addEventListener("click", (() => {
          yR.parentElement && yR.parentElement.removeChild(yR)
        })), yR.click(), window.URL.revokeObjectURL(GR)
      }
      static BackCompatCameraNoPreventDefault(RR) {
        return "boolean" === typeof RR[0] ? RR[0] : "boolean" === typeof RR[1] && RR[1]
      }
      static CreateScreenshot(RR, JR, GR, yR) {
        throw (0, fR.j)("ScreenshotTools")
      }
      static async CreateScreenshotAsync(RR, JR, GR) {
        throw (0, fR.j)("ScreenshotTools")
      }
      static CreateScreenshotUsingRenderTarget(RR, JR, GR, yR) {
        throw (0, fR.j)("ScreenshotTools")
      }
      static async CreateScreenshotUsingRenderTargetAsync(RR, JR, GR) {
        throw (0, fR.j)("ScreenshotTools")
      }
      static RandomId() {
        return (0, aR.c)()
      }
      static IsBase64(RR) {
        return (0, wR.l)(RR)
      }
      static DecodeBase64(RR) {
        return (0, wR.d)(RR)
      }
      static get errorsCount() {
        return ZR.c.errorsCount
      }
      static Log(RR) {
        ZR.c.Log(RR)
      }
      static Warn(RR) {
        ZR.c.Warn(RR)
      }
      static Error(RR) {
        ZR.c.Error(RR)
      }
      static get LogCache() {
        return ZR.c.LogCache
      }
      static ClearLogCache() {
        ZR.c.ClearLogCache()
      }
      static set LogLevels(RR) {
        ZR.c.LogLevels = RR
      }
      static set PerformanceLogLevel(RR) {
        (RR & yR.PerformanceUserMarkLogLevel) !== yR.PerformanceUserMarkLogLevel ? (RR & yR.PerformanceConsoleLogLevel) !== yR.PerformanceConsoleLogLevel ? (yR.StartPerformanceCounter = yR._StartPerformanceCounterDisabled, yR.EndPerformanceCounter = yR._EndPerformanceCounterDisabled, _native?.disablePerformanceLogging?.()) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(2), yR.StartPerformanceCounter = yR._StartMarkNative, yR.EndPerformanceCounter = yR._EndMarkNative) : (yR.StartPerformanceCounter = yR._StartPerformanceConsole, yR.EndPerformanceCounter = yR._EndPerformanceConsole) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(1), yR.StartPerformanceCounter = yR._StartMarkNative, yR.EndPerformanceCounter = yR._EndMarkNative) : (yR.StartPerformanceCounter = yR._StartUserMark, yR.EndPerformanceCounter = yR._EndUserMark)
      }
      static _StartPerformanceCounterDisabled(RR, JR) {}
      static _EndPerformanceCounterDisabled(RR, JR) {}
      static _StartUserMark(RR) {
        let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!yR._Performance) {
          if (!(0, uR.m)()) return;
          yR._Performance = window.performance
        }
        JR && yR._Performance.mark && yR._Performance.mark(RR + "-Begin")
      }
      static _EndUserMark(RR) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && yR._Performance.mark && (yR._Performance.mark(RR + "-End"), yR._Performance.measure(RR, RR + "-Begin", RR + "-End"))
      }
      static _StartPerformanceConsole(RR) {
        let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        JR && (yR._StartUserMark(RR, JR), console.time && console.time(RR))
      }
      static _EndPerformanceConsole(RR) {
        let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        JR && (yR._EndUserMark(RR, JR), console.timeEnd(RR))
      }
      static _StartMarkNative(RR) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
          if (yR._NativePerformanceCounterHandles.has(RR)) yR.Warn(`Performance counter with name ${RR} is already started.`);
          else {
            const JR = _native.startPerformanceCounter(RR);
            yR._NativePerformanceCounterHandles.set(RR, JR)
          }
      }
      static _EndMarkNative(RR) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
          const JR = yR._NativePerformanceCounterHandles.get(RR);
          JR ? (_native.endPerformanceCounter(JR), yR._NativePerformanceCounterHandles.delete(RR)) : yR.Warn(`Performance counter with name ${RR} was not started.`)
        }
      }
      static get Now() {
        return iR.b.Now
      }
      static GetClassName(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GR = null;
        if (!JR && RR.getClassName) GR = RR.getClassName();
        else {
          if (RR instanceof Object) {
            GR = (JR ? RR : Object.getPrototypeOf(RR)).constructor.__bjsclassName__
          }
          GR || (GR = typeof RR)
        }
        return GR
      }
      static First(RR, JR) {
        for (const GR of RR)
          if (JR(GR)) return GR;
        return null
      }
      static getFullClassName(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GR = null,
          yR = null;
        if (!JR && RR.getClassName) GR = RR.getClassName();
        else {
          if (RR instanceof Object) {
            const tR = JR ? RR : Object.getPrototypeOf(RR);
            GR = tR.constructor.__bjsclassName__, yR = tR.constructor.__bjsmoduleName__
          }
          GR || (GR = typeof RR)
        }
        return GR ? (null != yR ? yR + "." : "") + GR : null
      }
      static async DelayAsync(RR) {
        await new Promise((JR => {
          setTimeout((() => {
            JR()
          }), RR)
        }))
      }
      static IsSafari() {
        return !!(0, uR.i)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }
    }

    function UR(RR, JR) {
      return GR => {
        GR.__bjsclassName__ = RR, GR.__bjsmoduleName__ = null != JR ? JR : null
      }
    }
    yR = nR, nR.AssetBaseUrl = "", nR.UseCustomRequestHeaders = !1, nR.CustomRequestHeaders = VR.c.CustomRequestHeaders, nR.GetDOMTextContent = uR.d, nR._DefaultCdnUrl = "https://cdn.babylonjs.com", nR._CdnVersion = "9.28.0", nR._DefaultAssetsUrl = "https://assets.babylonjs.com/core", nR.LoadScript = "undefined" === typeof _native ? yR._LoadScriptWeb : yR._LoadScriptNative, nR.GetAbsoluteUrl = "object" === typeof document ? RR => {
      const JR = document.createElement("a");
      return JR.href = RR, JR.href
    } : "function" === typeof URL && "object" === typeof location ? RR => new URL(RR, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
    }, nR.NoneLogLevel = ZR.c.NoneLogLevel, nR.MessageLogLevel = ZR.c.MessageLogLevel, nR.WarningLogLevel = ZR.c.WarningLogLevel, nR.ErrorLogLevel = ZR.c.ErrorLogLevel, nR.AllLogLevel = ZR.c.AllLogLevel, nR.IsWindowObjectExist = uR.m, nR.PerformanceNoneLogLevel = 0, nR.PerformanceUserMarkLogLevel = 1, nR.PerformanceConsoleLogLevel = 2, nR._NativePerformanceCounterHandles = new Map, nR.StartPerformanceCounter = yR._StartPerformanceCounterDisabled, nR.EndPerformanceCounter = yR._EndPerformanceCounterDisabled;
    class WR {
      constructor(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.iterations = RR, this.index = yR - 1, this._done = !1, this._fn = JR, this._successCallback = GR
      }
      executeNext() {
        this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
      }
      breakLoop() {
        this._done = !0, this._successCallback()
      }
      static Run(RR, JR, GR) {
        const yR = new WR(RR, JR, GR, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return yR.executeNext(), yR
      }
      static SyncAsyncForLoop(RR, JR, GR, yR, tR) {
        let uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return WR.Run(Math.ceil(RR / JR), (yR => {
          tR && tR() ? yR.breakLoop() : setTimeout((() => {
            for (let uR = 0; uR < JR; ++uR) {
              const ZR = yR.index * JR + uR;
              if (ZR >= RR) break;
              if (GR(ZR), tR && tR()) {
                yR.breakLoop();
                break
              }
            }
            yR.executeNext()
          }), uR)
        }), yR)
      }
    }
    let AR = !1;

    function CR() {
      AR || (AR = !0, nR.Mix = LR.h, nR.IsExponentOfTwo = LR.f, KR.c.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z")
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);