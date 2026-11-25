export const id = 259;
export const ids = [259];
export const modules = {
  40480: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => LG
    });
    var wG = ZG(39093),
      SG = ZG(37484);
    class LG {
      static Instantiate(GG) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[GG]) return this.RegisteredExternalClasses[GG];
        const bG = (0, SG.e)(GG);
        if (bG) return bG;
        wG.c.Warn(GG + " not found, you may have missed an import.");
        const ZG = GG.split(".");
        let LG = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
        for (let wG = 0, SG = ZG.length; wG < SG; wG++) LG = LG[ZG[wG]];
        return "function" !== typeof LG ? null : LG
      }
    }
    LG.RegisteredExternalClasses = {}
  },
  40285: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => SG
    });
    var wG = ZG(40241);
    class SG {
      static get Now() {
        return (0, wG.k)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
      }
    }
  },
  40319: (GG, bG, ZG) => {
    function wG(GG) {
      let bG = 1;
      do {
        bG *= 2
      } while (bG < GG);
      return bG === GG
    }

    function SG(GG, bG, ZG) {
      return GG * (1 - ZG) + bG * ZG
    }

    function LG(GG) {
      const bG = yG(GG),
        ZG = kG(GG);
      return bG - GG > GG - ZG ? ZG : bG
    }

    function yG(GG) {
      return GG--, GG |= GG >> 1, GG |= GG >> 2, GG |= GG >> 4, GG |= GG >> 8, GG |= GG >> 16, ++GG
    }

    function kG(GG) {
      return GG |= GG >> 1, GG |= GG >> 2, GG |= GG >> 4, GG |= GG >> 8, (GG |= GG >> 16) - (GG >> 1)
    }

    function UG(GG, bG) {
      let ZG;
      switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
        case 1:
          ZG = kG(GG);
          break;
        case 2:
          ZG = LG(GG);
          break;
        default:
          ZG = yG(GG)
      }
      return Math.min(ZG, bG)
    }
    ZG.d(bG, {
      e: () => kG,
      h: () => UG,
      k: () => wG,
      o: () => SG,
      r: () => LG
    })
  },
  40477: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => zG,
      d: () => oG,
      f: () => JG,
      h: () => rG
    });
    var wG, SG = ZG(37465),
      LG = ZG(40241),
      yG = ZG(39093),
      kG = ZG(39086),
      UG = ZG(40285),
      YG = ZG(40258),
      VG = ZG(40432),
      pG = ZG(37463),
      fG = ZG(40430),
      QG = ZG(40271),
      KG = ZG(40480),
      hG = ZG(38311),
      dG = ZG(40319);
    class JG {
      static get BaseUrl() {
        return fG.f.BaseUrl
      }
      static set BaseUrl(GG) {
        fG.f.BaseUrl = GG
      }
      static get CleanUrl() {
        return fG.f.CleanUrl
      }
      static set CleanUrl(GG) {
        fG.f.CleanUrl = GG
      }
      static IsAbsoluteUrl(GG) {
        return 0 === GG.indexOf("//") || -1 !== GG.indexOf("://") && (-1 !== GG.indexOf(".") && (-1 !== GG.indexOf("/") && (!(GG.indexOf(":") > GG.indexOf("/")) && (GG.indexOf("://") < GG.indexOf(".") || (0 === GG.indexOf("data:") || 0 === GG.indexOf("blob:"))))))
      }
      static set ScriptBaseUrl(GG) {
        fG.f.ScriptBaseUrl = GG
      }
      static get ScriptBaseUrl() {
        return fG.f.ScriptBaseUrl
      }
      static set CDNBaseUrl(GG) {
        wG.ScriptBaseUrl = GG, wG.AssetBaseUrl = GG
      }
      static set ScriptPreprocessUrl(GG) {
        fG.f.ScriptPreprocessUrl = GG
      }
      static get ScriptPreprocessUrl() {
        return fG.f.ScriptPreprocessUrl
      }
      static get DefaultRetryStrategy() {
        return fG.f.DefaultRetryStrategy
      }
      static set DefaultRetryStrategy(GG) {
        fG.f.DefaultRetryStrategy = GG
      }
      static get CorsBehavior() {
        return fG.f.CorsBehavior
      }
      static set CorsBehavior(GG) {
        fG.f.CorsBehavior = GG
      }
      static get UseFallbackTexture() {
        return pG.c.UseFallbackTexture
      }
      static set UseFallbackTexture(GG) {
        pG.c.UseFallbackTexture = GG
      }
      static get RegisteredExternalClasses() {
        return KG.c.RegisteredExternalClasses
      }
      static set RegisteredExternalClasses(GG) {
        KG.c.RegisteredExternalClasses = GG
      }
      static get fallbackTexture() {
        return pG.c.FallbackTexture
      }
      static set fallbackTexture(GG) {
        pG.c.FallbackTexture = GG
      }
      static FetchToRef(GG, bG, ZG, wG, SG, LG) {
        const yG = 4 * ((Math.abs(GG) * ZG % ZG | 0) + (Math.abs(bG) * wG % wG | 0) * ZG);
        LG.r = SG[yG] / 255, LG.g = SG[yG + 1] / 255, LG.b = SG[yG + 2] / 255, LG.a = SG[yG + 3] / 255
      }
      static Mix(GG, bG, ZG) {
        return 0
      }
      static Instantiate(GG) {
        return KG.c.Instantiate(GG)
      }
      static SetImmediate(GG) {
        QG.b.SetImmediate(GG)
      }
      static IsExponentOfTwo(GG) {
        return !0
      }
      static FloatRound(GG) {
        return Math.fround(GG)
      }
      static GetFilename(GG) {
        const bG = GG.lastIndexOf("/");
        return bG < 0 ? GG : GG.substring(bG + 1)
      }
      static GetFolderPath(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZG = GG.lastIndexOf("/");
        return ZG < 0 ? bG ? GG : "" : GG.substring(0, ZG + 1)
      }
      static ToDegrees(GG) {
        return 180 * GG / Math.PI
      }
      static ToRadians(GG) {
        return GG * Math.PI / 180
      }
      static SmoothAngleChange(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
        const wG = this.ToRadians(GG),
          SG = this.ToRadians(bG);
        return this.ToDegrees(Math.atan2((1 - ZG) * Math.sin(SG) + ZG * Math.sin(wG), (1 - ZG) * Math.cos(SG) + ZG * Math.cos(wG)))
      }
      static MakeArray(GG, bG) {
        return !0 === bG || void 0 !== GG && null != GG ? Array.isArray(GG) ? GG : [GG] : null
      }
      static GetPointerPrefix(GG) {
        return (0, LG.k)() && !window.PointerEvent ? "mouse" : "pointer"
      }
      static SetCorsBehavior(GG, bG) {
        (0, fG.A)(GG, bG)
      }
      static SetReferrerPolicyBehavior(GG, bG) {
        bG.referrerPolicy = GG
      }
      static get PreprocessUrl() {
        return fG.f.PreprocessUrl
      }
      static set PreprocessUrl(GG) {
        fG.f.PreprocessUrl = GG
      }
      static LoadImage(GG, bG, ZG, wG, SG, LG) {
        return (0, fG.q)(GG, bG, ZG, wG, SG, LG)
      }
      static LoadFile(GG, bG, ZG, wG, SG, LG) {
        return (0, fG.o)(GG, bG, ZG, wG, SG, LG)
      }
      static async LoadFileAsync(GG) {
        let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return await new Promise(((ZG, wG) => {
          (0, fG.o)(GG, (GG => {
            ZG(GG)
          }), void 0, void 0, bG, ((GG, bG) => {
            wG(bG)
          }))
        }))
      }
      static GetAssetUrl(GG) {
        if (!GG) return "";
        if (wG.AssetBaseUrl && GG.startsWith(wG._DefaultAssetsUrl)) {
          const bG = wG.AssetBaseUrl.endsWith("/") ? wG.AssetBaseUrl.slice(0, -1) : wG.AssetBaseUrl;
          return GG.replace(wG._DefaultAssetsUrl, bG)
        }
        return GG
      }
      static GetBabylonScriptURL(GG, bG) {
        if (!GG) return "";
        if (GG.startsWith(wG._DefaultCdnUrl))
          if (wG.ScriptBaseUrl) {
            const bG = wG.ScriptBaseUrl.endsWith("/") ? wG.ScriptBaseUrl.slice(0, -1) : wG.ScriptBaseUrl;
            GG = GG.replace(wG._DefaultCdnUrl, bG)
          } else if (wG._CdnVersion) {
          const bG = `${wG._DefaultCdnUrl}/v${wG._CdnVersion}`;
          GG.startsWith(bG) || (GG = GG.replace(wG._DefaultCdnUrl, bG))
        }
        return GG = wG.ScriptPreprocessUrl(GG), bG && !wG.IsAbsoluteUrl(GG) && (GG = wG.GetAbsoluteUrl(GG)), GG
      }
      static LoadBabylonScript(GG, bG, ZG, SG) {
        GG = wG.GetBabylonScriptURL(GG), wG.LoadScript(GG, bG, ZG)
      }
      static async LoadBabylonScriptAsync(GG) {
        return GG = wG.GetBabylonScriptURL(GG), await wG.LoadScriptAsync(GG)
      }
      static _LoadScriptNative(GG, bG, ZG, SG) {
        if (_native) {
          if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
            const GG = "Loading a script as an ES module is not supported in Babylon Native";
            return void ZG?.(GG, new Error(GG))
          }
          wG.LoadFile(GG, (GG => {
            try {
              Function(GG).apply(null), bG && bG()
            } catch (wG) {
              ZG && ZG("LoadScript Error", wG)
            }
          }), void 0, void 0, !1, ((GG, bG) => {
            ZG && ZG("LoadScript Error", bG)
          }))
        }
      }
      static _LoadScriptWeb(GG, bG, ZG, wG) {
        let SG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" === typeof importScripts) {
          try {
            importScripts(GG), bG && bG()
          } catch (UG) {
            ZG?.(`Unable to load script '${GG}' in worker`, UG)
          }
          return
        }
        if (!(0, LG.k)()) return void ZG?.(`Cannot load script '${GG}' outside of a window or a worker`);
        const yG = document.getElementsByTagName("head")[0],
          kG = document.createElement("script");
        SG ? (kG.setAttribute("type", "module"), kG.innerText = GG) : (kG.setAttribute("type", "text/javascript"), kG.setAttribute("src", GG)), wG && (kG.id = wG), kG.onload = () => {
          bG && bG()
        }, kG.onerror = bG => {
          ZG && ZG(`Unable to load script '${GG}'`, bG)
        }, yG.appendChild(kG)
      }
      static async LoadScriptAsync(GG, bG) {
        return await new Promise(((ZG, wG) => {
          this.LoadScript(GG, (() => {
            ZG()
          }), ((GG, bG) => {
            wG(bG || new Error(GG))
          }), bG)
        }))
      }
      static ReadFileAsDataURL(GG, bG, ZG) {
        const wG = new FileReader,
          LG = {
            onCompleteObservable: new SG.c,
            abort: () => wG.abort()
          };
        return wG.onloadend = () => {
          LG.onCompleteObservable.notifyObservers(LG)
        }, wG.onload = GG => {
          bG(GG.target.result)
        }, wG.onprogress = ZG, wG.readAsDataURL(GG), LG
      }
      static ReadFile(GG, bG, ZG, wG, SG) {
        return (0, fG.s)(GG, bG, ZG, wG, SG)
      }
      static FileAsURL(GG) {
        const bG = new Blob([GG]);
        return window.URL.createObjectURL(bG)
      }
      static Format(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return GG.toFixed(bG)
      }
      static DeepCopy(GG, bG, ZG, wG) {
        kG.e.DeepCopy(GG, bG, ZG, wG)
      }
      static IsEmpty(GG) {
        for (const bG in GG)
          if (Object.prototype.hasOwnProperty.call(GG, bG)) return !1;
        return !0
      }
      static RegisterTopRootEvents(GG, bG) {
        for (let wG = 0; wG < bG.length; wG++) {
          const SG = bG[wG];
          GG.addEventListener(SG.name, SG.handler, !1);
          try {
            window.parent && window.parent.addEventListener(SG.name, SG.handler, !1)
          } catch (ZG) {}
        }
      }
      static UnregisterTopRootEvents(GG, bG) {
        for (let wG = 0; wG < bG.length; wG++) {
          const SG = bG[wG];
          GG.removeEventListener(SG.name, SG.handler);
          try {
            GG.parent && GG.parent.removeEventListener(SG.name, SG.handler)
          } catch (ZG) {}
        }
      }
      static async DumpFramebuffer(GG, bG, ZG, wG) {
        throw (0, YG.i)("DumpTools")
      }
      static DumpData(GG, bG, ZG, wG) {
        throw (0, YG.i)("DumpTools")
      }
      static async DumpDataAsync(GG, bG, ZG) {
        throw (0, YG.i)("DumpTools")
      }
      static _IsOffScreenCanvas(GG) {
        return void 0 !== GG.convertToBlob
      }
      static ToBlob(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          SG = arguments.length > 3 ? arguments[3] : void 0;
        wG._IsOffScreenCanvas(GG) || GG.toBlob || (GG.toBlob = function(GG, bG, ZG) {
          setTimeout((() => {
            const wG = atob(this.toDataURL(bG, ZG).split(",")[1]),
              SG = wG.length,
              LG = new Uint8Array(SG);
            for (let GG = 0; GG < SG; GG++) LG[GG] = wG.charCodeAt(GG);
            GG(new Blob([LG]))
          }))
        }), wG._IsOffScreenCanvas(GG) ? GG.convertToBlob({
          type: ZG,
          quality: SG
        }).then((GG => bG(GG))) : GG.toBlob((function(GG) {
          bG(GG)
        }), ZG, SG)
      }
      static DownloadBlob(GG, bG) {
        if ("download" in document.createElement("a")) {
          if (!bG) {
            const GG = new Date;
            bG = "screenshot_" + ((GG.getFullYear() + "-" + (GG.getMonth() + 1)).slice(2) + "-" + GG.getDate() + "_" + GG.getHours() + "-" + ("0" + GG.getMinutes()).slice(-2)) + ".png"
          }
          wG.Download(GG, bG)
        } else if (GG && "undefined" !== typeof URL) {
          const bG = URL.createObjectURL(GG),
            ZG = window.open("");
          if (!ZG) return;
          const wG = ZG.document.createElement("img");
          wG.onload = function() {
            URL.revokeObjectURL(bG)
          }, wG.src = bG, ZG.document.body.appendChild(wG)
        }
      }
      static EncodeScreenshotCanvasData(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          SG = arguments.length > 3 ? arguments[3] : void 0,
          LG = arguments.length > 4 ? arguments[4] : void 0;
        if ("string" !== typeof SG && bG) {
          if (bG) {
            if (wG._IsOffScreenCanvas(GG)) return void GG.convertToBlob({
              type: ZG,
              quality: LG
            }).then((GG => {
              const ZG = new FileReader;
              ZG.readAsDataURL(GG), ZG.onloadend = () => {
                const GG = ZG.result;
                bG(GG)
              }
            }));
            const SG = GG.toDataURL(ZG, LG);
            bG(SG)
          }
        } else this.ToBlob(GG, (function(GG) {
          GG && wG.DownloadBlob(GG, SG), bG && bG("")
        }), ZG, LG)
      }
      static Download(GG, bG) {
        if ("undefined" === typeof URL) return;
        const ZG = window.URL.createObjectURL(GG),
          wG = document.createElement("a");
        document.body.appendChild(wG), wG.style.display = "none", wG.href = ZG, wG.download = bG, wG.addEventListener("click", (() => {
          wG.parentElement && wG.parentElement.removeChild(wG)
        })), wG.click(), window.URL.revokeObjectURL(ZG)
      }
      static BackCompatCameraNoPreventDefault(GG) {
        return "boolean" === typeof GG[0] ? GG[0] : "boolean" === typeof GG[1] && GG[1]
      }
      static CreateScreenshot(GG, bG, ZG, wG) {
        throw (0, YG.i)("ScreenshotTools")
      }
      static async CreateScreenshotAsync(GG, bG, ZG) {
        throw (0, YG.i)("ScreenshotTools")
      }
      static CreateScreenshotUsingRenderTarget(GG, bG, ZG, wG) {
        throw (0, YG.i)("ScreenshotTools")
      }
      static async CreateScreenshotUsingRenderTargetAsync(GG, bG, ZG) {
        throw (0, YG.i)("ScreenshotTools")
      }
      static RandomId() {
        return (0, hG.e)()
      }
      static IsBase64(GG) {
        return (0, fG.k)(GG)
      }
      static DecodeBase64(GG) {
        return (0, fG.c)(GG)
      }
      static get errorsCount() {
        return yG.c.errorsCount
      }
      static Log(GG) {
        yG.c.Log(GG)
      }
      static Warn(GG) {
        yG.c.Warn(GG)
      }
      static Error(GG) {
        yG.c.Error(GG)
      }
      static get LogCache() {
        return yG.c.LogCache
      }
      static ClearLogCache() {
        yG.c.ClearLogCache()
      }
      static set LogLevels(GG) {
        yG.c.LogLevels = GG
      }
      static set PerformanceLogLevel(GG) {
        (GG & wG.PerformanceUserMarkLogLevel) !== wG.PerformanceUserMarkLogLevel ? (GG & wG.PerformanceConsoleLogLevel) !== wG.PerformanceConsoleLogLevel ? (wG.StartPerformanceCounter = wG._StartPerformanceCounterDisabled, wG.EndPerformanceCounter = wG._EndPerformanceCounterDisabled, _native?.disablePerformanceLogging?.()) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(2), wG.StartPerformanceCounter = wG._StartMarkNative, wG.EndPerformanceCounter = wG._EndMarkNative) : (wG.StartPerformanceCounter = wG._StartPerformanceConsole, wG.EndPerformanceCounter = wG._EndPerformanceConsole) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(1), wG.StartPerformanceCounter = wG._StartMarkNative, wG.EndPerformanceCounter = wG._EndMarkNative) : (wG.StartPerformanceCounter = wG._StartUserMark, wG.EndPerformanceCounter = wG._EndUserMark)
      }
      static _StartPerformanceCounterDisabled(GG, bG) {}
      static _EndPerformanceCounterDisabled(GG, bG) {}
      static _StartUserMark(GG) {
        let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!wG._Performance) {
          if (!(0, LG.k)()) return;
          wG._Performance = window.performance
        }
        bG && wG._Performance.mark && wG._Performance.mark(GG + "-Begin")
      }
      static _EndUserMark(GG) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && wG._Performance.mark && (wG._Performance.mark(GG + "-End"), wG._Performance.measure(GG, GG + "-Begin", GG + "-End"))
      }
      static _StartPerformanceConsole(GG) {
        let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        bG && (wG._StartUserMark(GG, bG), console.time && console.time(GG))
      }
      static _EndPerformanceConsole(GG) {
        let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        bG && (wG._EndUserMark(GG, bG), console.timeEnd(GG))
      }
      static _StartMarkNative(GG) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
          if (wG._NativePerformanceCounterHandles.has(GG)) wG.Warn(`Performance counter with name ${GG} is already started.`);
          else {
            const bG = _native.startPerformanceCounter(GG);
            wG._NativePerformanceCounterHandles.set(GG, bG)
          }
      }
      static _EndMarkNative(GG) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
          const bG = wG._NativePerformanceCounterHandles.get(GG);
          bG ? (_native.endPerformanceCounter(bG), wG._NativePerformanceCounterHandles.delete(GG)) : wG.Warn(`Performance counter with name ${GG} was not started.`)
        }
      }
      static get Now() {
        return UG.c.Now
      }
      static GetClassName(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZG = null;
        if (!bG && GG.getClassName) ZG = GG.getClassName();
        else {
          if (GG instanceof Object) {
            ZG = (bG ? GG : Object.getPrototypeOf(GG)).constructor.__bjsclassName__
          }
          ZG || (ZG = typeof GG)
        }
        return ZG
      }
      static First(GG, bG) {
        for (const ZG of GG)
          if (bG(ZG)) return ZG;
        return null
      }
      static getFullClassName(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZG = null,
          wG = null;
        if (!bG && GG.getClassName) ZG = GG.getClassName();
        else {
          if (GG instanceof Object) {
            const SG = bG ? GG : Object.getPrototypeOf(GG);
            ZG = SG.constructor.__bjsclassName__, wG = SG.constructor.__bjsmoduleName__
          }
          ZG || (ZG = typeof GG)
        }
        return ZG ? (null != wG ? wG + "." : "") + ZG : null
      }
      static async DelayAsync(GG) {
        await new Promise((bG => {
          setTimeout((() => {
            bG()
          }), GG)
        }))
      }
      static IsSafari() {
        return !!(0, LG.g)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }
    }

    function rG(GG, bG) {
      return ZG => {
        ZG.__bjsclassName__ = GG, ZG.__bjsmoduleName__ = null != bG ? bG : null
      }
    }
    wG = JG, JG.AssetBaseUrl = "", JG.UseCustomRequestHeaders = !1, JG.CustomRequestHeaders = VG.b.CustomRequestHeaders, JG.GetDOMTextContent = LG.b, JG._DefaultCdnUrl = "https://cdn.babylonjs.com", JG._CdnVersion = "9.28.0", JG._DefaultAssetsUrl = "https://assets.babylonjs.com/core", JG.LoadScript = "undefined" === typeof _native ? wG._LoadScriptWeb : wG._LoadScriptNative, JG.GetAbsoluteUrl = "object" === typeof document ? GG => {
      const bG = document.createElement("a");
      return bG.href = GG, bG.href
    } : "function" === typeof URL && "object" === typeof location ? GG => new URL(GG, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
    }, JG.NoneLogLevel = yG.c.NoneLogLevel, JG.MessageLogLevel = yG.c.MessageLogLevel, JG.WarningLogLevel = yG.c.WarningLogLevel, JG.ErrorLogLevel = yG.c.ErrorLogLevel, JG.AllLogLevel = yG.c.AllLogLevel, JG.IsWindowObjectExist = LG.k, JG.PerformanceNoneLogLevel = 0, JG.PerformanceUserMarkLogLevel = 1, JG.PerformanceConsoleLogLevel = 2, JG._NativePerformanceCounterHandles = new Map, JG.StartPerformanceCounter = wG._StartPerformanceCounterDisabled, JG.EndPerformanceCounter = wG._EndPerformanceCounterDisabled;
    class zG {
      constructor(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.iterations = GG, this.index = wG - 1, this._done = !1, this._fn = bG, this._successCallback = ZG
      }
      executeNext() {
        this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
      }
      breakLoop() {
        this._done = !0, this._successCallback()
      }
      static Run(GG, bG, ZG) {
        const wG = new zG(GG, bG, ZG, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return wG.executeNext(), wG
      }
      static SyncAsyncForLoop(GG, bG, ZG, wG, SG) {
        let LG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return zG.Run(Math.ceil(GG / bG), (wG => {
          SG && SG() ? wG.breakLoop() : setTimeout((() => {
            for (let LG = 0; LG < bG; ++LG) {
              const yG = wG.index * bG + LG;
              if (yG >= GG) break;
              if (ZG(yG), SG && SG()) {
                wG.breakLoop();
                break
              }
            }
            wG.executeNext()
          }), LG)
        }), wG)
      }
    }
    let EG = !1;

    function oG() {
      EG || (EG = !0, JG.Mix = dG.o, JG.IsExponentOfTwo = dG.k, pG.c.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z")
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);