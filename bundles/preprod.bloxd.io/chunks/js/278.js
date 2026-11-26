export const id = 278;
export const ids = [278];
export const modules = {
  41207: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => QU
    });
    var cU = zU(39493),
      yU = zU(37863);
    class QU {
      static Instantiate(UU) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[UU]) return this.RegisteredExternalClasses[UU];
        const XU = (0, yU.e)(UU);
        if (XU) return XU;
        cU.b.Warn(UU + " not found, you may have missed an import.");
        const zU = UU.split(".");
        let QU = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
        for (let cU = 0, yU = zU.length; cU < yU; cU++) QU = QU[zU[cU]];
        return "function" !== typeof QU ? null : QU
      }
    }
    QU.RegisteredExternalClasses = {}
  },
  41010: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => yU
    });
    var cU = zU(40971);
    class yU {
      static get Now() {
        return (0, cU.h)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
      }
    }
  },
  41036: (UU, XU, zU) => {
    function cU(UU) {
      let XU = 1;
      do {
        XU *= 2
      } while (XU < UU);
      return XU === UU
    }

    function yU(UU, XU, zU) {
      return UU * (1 - zU) + XU * zU
    }

    function QU(UU) {
      const XU = AU(UU),
        zU = FU(UU);
      return XU - UU > UU - zU ? zU : XU
    }

    function AU(UU) {
      return UU--, UU |= UU >> 1, UU |= UU >> 2, UU |= UU >> 4, UU |= UU >> 8, UU |= UU >> 16, ++UU
    }

    function FU(UU) {
      return UU |= UU >> 1, UU |= UU >> 2, UU |= UU >> 4, UU |= UU >> 8, (UU |= UU >> 16) - (UU >> 1)
    }

    function oU(UU, XU) {
      let zU;
      switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
        case 1:
          zU = FU(UU);
          break;
        case 2:
          zU = QU(UU);
          break;
        default:
          zU = AU(UU)
      }
      return Math.min(zU, XU)
    }
    zU.d(XU, {
      e: () => FU,
      g: () => oU,
      k: () => cU,
      n: () => yU,
      q: () => QU
    })
  },
  41205: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => GU,
      g: () => ZU,
      j: () => gU,
      k: () => kU
    });
    var cU, yU = zU(37846),
      QU = zU(40971),
      AU = zU(39493),
      FU = zU(39486),
      oU = zU(41010),
      DU = zU(40989),
      EU = zU(41160),
      YU = zU(37841),
      NU = zU(41152),
      IU = zU(40999),
      pU = zU(41207),
      aU = zU(38649),
      tU = zU(41036);
    class gU {
      static get BaseUrl() {
        return NU.g.BaseUrl
      }
      static set BaseUrl(UU) {
        NU.g.BaseUrl = UU
      }
      static get CleanUrl() {
        return NU.g.CleanUrl
      }
      static set CleanUrl(UU) {
        NU.g.CleanUrl = UU
      }
      static IsAbsoluteUrl(UU) {
        return 0 === UU.indexOf("//") || -1 !== UU.indexOf("://") && (-1 !== UU.indexOf(".") && (-1 !== UU.indexOf("/") && (!(UU.indexOf(":") > UU.indexOf("/")) && (UU.indexOf("://") < UU.indexOf(".") || (0 === UU.indexOf("data:") || 0 === UU.indexOf("blob:"))))))
      }
      static set ScriptBaseUrl(UU) {
        NU.g.ScriptBaseUrl = UU
      }
      static get ScriptBaseUrl() {
        return NU.g.ScriptBaseUrl
      }
      static set CDNBaseUrl(UU) {
        cU.ScriptBaseUrl = UU, cU.AssetBaseUrl = UU
      }
      static set ScriptPreprocessUrl(UU) {
        NU.g.ScriptPreprocessUrl = UU
      }
      static get ScriptPreprocessUrl() {
        return NU.g.ScriptPreprocessUrl
      }
      static get DefaultRetryStrategy() {
        return NU.g.DefaultRetryStrategy
      }
      static set DefaultRetryStrategy(UU) {
        NU.g.DefaultRetryStrategy = UU
      }
      static get CorsBehavior() {
        return NU.g.CorsBehavior
      }
      static set CorsBehavior(UU) {
        NU.g.CorsBehavior = UU
      }
      static get UseFallbackTexture() {
        return YU.b.UseFallbackTexture
      }
      static set UseFallbackTexture(UU) {
        YU.b.UseFallbackTexture = UU
      }
      static get RegisteredExternalClasses() {
        return pU.c.RegisteredExternalClasses
      }
      static set RegisteredExternalClasses(UU) {
        pU.c.RegisteredExternalClasses = UU
      }
      static get fallbackTexture() {
        return YU.b.FallbackTexture
      }
      static set fallbackTexture(UU) {
        YU.b.FallbackTexture = UU
      }
      static FetchToRef(UU, XU, zU, cU, yU, QU) {
        const AU = 4 * ((Math.abs(UU) * zU % zU | 0) + (Math.abs(XU) * cU % cU | 0) * zU);
        QU.r = yU[AU] / 255, QU.g = yU[AU + 1] / 255, QU.b = yU[AU + 2] / 255, QU.a = yU[AU + 3] / 255
      }
      static Mix(UU, XU, zU) {
        return 0
      }
      static Instantiate(UU) {
        return pU.c.Instantiate(UU)
      }
      static SetImmediate(UU) {
        IU.e.SetImmediate(UU)
      }
      static IsExponentOfTwo(UU) {
        return !0
      }
      static FloatRound(UU) {
        return Math.fround(UU)
      }
      static GetFilename(UU) {
        const XU = UU.lastIndexOf("/");
        return XU < 0 ? UU : UU.substring(XU + 1)
      }
      static GetFolderPath(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const zU = UU.lastIndexOf("/");
        return zU < 0 ? XU ? UU : "" : UU.substring(0, zU + 1)
      }
      static ToDegrees(UU) {
        return 180 * UU / Math.PI
      }
      static ToRadians(UU) {
        return UU * Math.PI / 180
      }
      static SmoothAngleChange(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
        const cU = this.ToRadians(UU),
          yU = this.ToRadians(XU);
        return this.ToDegrees(Math.atan2((1 - zU) * Math.sin(yU) + zU * Math.sin(cU), (1 - zU) * Math.cos(yU) + zU * Math.cos(cU)))
      }
      static MakeArray(UU, XU) {
        return !0 === XU || void 0 !== UU && null != UU ? Array.isArray(UU) ? UU : [UU] : null
      }
      static GetPointerPrefix(UU) {
        return (0, QU.h)() && !window.PointerEvent ? "mouse" : "pointer"
      }
      static SetCorsBehavior(UU, XU) {
        (0, NU.H)(UU, XU)
      }
      static SetReferrerPolicyBehavior(UU, XU) {
        XU.referrerPolicy = UU
      }
      static get PreprocessUrl() {
        return NU.g.PreprocessUrl
      }
      static set PreprocessUrl(UU) {
        NU.g.PreprocessUrl = UU
      }
      static LoadImage(UU, XU, zU, cU, yU, QU) {
        return (0, NU.s)(UU, XU, zU, cU, yU, QU)
      }
      static LoadFile(UU, XU, zU, cU, yU, QU) {
        return (0, NU.q)(UU, XU, zU, cU, yU, QU)
      }
      static async LoadFileAsync(UU) {
        let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return await new Promise(((zU, cU) => {
          (0, NU.q)(UU, (UU => {
            zU(UU)
          }), void 0, void 0, XU, ((UU, XU) => {
            cU(XU)
          }))
        }))
      }
      static GetAssetUrl(UU) {
        if (!UU) return "";
        if (cU.AssetBaseUrl && UU.startsWith(cU._DefaultAssetsUrl)) {
          const XU = cU.AssetBaseUrl.endsWith("/") ? cU.AssetBaseUrl.slice(0, -1) : cU.AssetBaseUrl;
          return UU.replace(cU._DefaultAssetsUrl, XU)
        }
        return UU
      }
      static GetBabylonScriptURL(UU, XU) {
        if (!UU) return "";
        if (UU.startsWith(cU._DefaultCdnUrl))
          if (cU.ScriptBaseUrl) {
            const XU = cU.ScriptBaseUrl.endsWith("/") ? cU.ScriptBaseUrl.slice(0, -1) : cU.ScriptBaseUrl;
            UU = UU.replace(cU._DefaultCdnUrl, XU)
          } else if (cU._CdnVersion) {
          const XU = `${cU._DefaultCdnUrl}/v${cU._CdnVersion}`;
          UU.startsWith(XU) || (UU = UU.replace(cU._DefaultCdnUrl, XU))
        }
        return UU = cU.ScriptPreprocessUrl(UU), XU && !cU.IsAbsoluteUrl(UU) && (UU = cU.GetAbsoluteUrl(UU)), UU
      }
      static LoadBabylonScript(UU, XU, zU, yU) {
        UU = cU.GetBabylonScriptURL(UU), cU.LoadScript(UU, XU, zU)
      }
      static async LoadBabylonScriptAsync(UU) {
        return UU = cU.GetBabylonScriptURL(UU), await cU.LoadScriptAsync(UU)
      }
      static _LoadScriptNative(UU, XU, zU, yU) {
        if (_native) {
          if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
            const UU = "Loading a script as an ES module is not supported in Babylon Native";
            return void zU?.(UU, new Error(UU))
          }
          cU.LoadFile(UU, (UU => {
            try {
              Function(UU).apply(null), XU && XU()
            } catch (cU) {
              zU && zU("LoadScript Error", cU)
            }
          }), void 0, void 0, !1, ((UU, XU) => {
            zU && zU("LoadScript Error", XU)
          }))
        }
      }
      static _LoadScriptWeb(UU, XU, zU, cU) {
        let yU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" === typeof importScripts) {
          try {
            importScripts(UU), XU && XU()
          } catch (oU) {
            zU?.(`Unable to load script '${UU}' in worker`, oU)
          }
          return
        }
        if (!(0, QU.h)()) return void zU?.(`Cannot load script '${UU}' outside of a window or a worker`);
        const AU = document.getElementsByTagName("head")[0],
          FU = document.createElement("script");
        yU ? (FU.setAttribute("type", "module"), FU.innerText = UU) : (FU.setAttribute("type", "text/javascript"), FU.setAttribute("src", UU)), cU && (FU.id = cU), FU.onload = () => {
          XU && XU()
        }, FU.onerror = XU => {
          zU && zU(`Unable to load script '${UU}'`, XU)
        }, AU.appendChild(FU)
      }
      static async LoadScriptAsync(UU, XU) {
        return await new Promise(((zU, cU) => {
          this.LoadScript(UU, (() => {
            zU()
          }), ((UU, XU) => {
            cU(XU || new Error(UU))
          }), XU)
        }))
      }
      static ReadFileAsDataURL(UU, XU, zU) {
        const cU = new FileReader,
          QU = {
            onCompleteObservable: new yU.e,
            abort: () => cU.abort()
          };
        return cU.onloadend = () => {
          QU.onCompleteObservable.notifyObservers(QU)
        }, cU.onload = UU => {
          XU(UU.target.result)
        }, cU.onprogress = zU, cU.readAsDataURL(UU), QU
      }
      static ReadFile(UU, XU, zU, cU, yU) {
        return (0, NU.w)(UU, XU, zU, cU, yU)
      }
      static FileAsURL(UU) {
        const XU = new Blob([UU]);
        return window.URL.createObjectURL(XU)
      }
      static Format(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return UU.toFixed(XU)
      }
      static DeepCopy(UU, XU, zU, cU) {
        FU.c.DeepCopy(UU, XU, zU, cU)
      }
      static IsEmpty(UU) {
        for (const XU in UU)
          if (Object.prototype.hasOwnProperty.call(UU, XU)) return !1;
        return !0
      }
      static RegisterTopRootEvents(UU, XU) {
        for (let cU = 0; cU < XU.length; cU++) {
          const yU = XU[cU];
          UU.addEventListener(yU.name, yU.handler, !1);
          try {
            window.parent && window.parent.addEventListener(yU.name, yU.handler, !1)
          } catch (zU) {}
        }
      }
      static UnregisterTopRootEvents(UU, XU) {
        for (let cU = 0; cU < XU.length; cU++) {
          const yU = XU[cU];
          UU.removeEventListener(yU.name, yU.handler);
          try {
            UU.parent && UU.parent.removeEventListener(yU.name, yU.handler)
          } catch (zU) {}
        }
      }
      static async DumpFramebuffer(UU, XU, zU, cU) {
        throw (0, DU.m)("DumpTools")
      }
      static DumpData(UU, XU, zU, cU) {
        throw (0, DU.m)("DumpTools")
      }
      static async DumpDataAsync(UU, XU, zU) {
        throw (0, DU.m)("DumpTools")
      }
      static _IsOffScreenCanvas(UU) {
        return void 0 !== UU.convertToBlob
      }
      static ToBlob(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          yU = arguments.length > 3 ? arguments[3] : void 0;
        cU._IsOffScreenCanvas(UU) || UU.toBlob || (UU.toBlob = function(UU, XU, zU) {
          setTimeout((() => {
            const cU = atob(this.toDataURL(XU, zU).split(",")[1]),
              yU = cU.length,
              QU = new Uint8Array(yU);
            for (let UU = 0; UU < yU; UU++) QU[UU] = cU.charCodeAt(UU);
            UU(new Blob([QU]))
          }))
        }), cU._IsOffScreenCanvas(UU) ? UU.convertToBlob({
          type: zU,
          quality: yU
        }).then((UU => XU(UU))) : UU.toBlob((function(UU) {
          XU(UU)
        }), zU, yU)
      }
      static DownloadBlob(UU, XU) {
        if ("download" in document.createElement("a")) {
          if (!XU) {
            const UU = new Date;
            XU = "screenshot_" + ((UU.getFullYear() + "-" + (UU.getMonth() + 1)).slice(2) + "-" + UU.getDate() + "_" + UU.getHours() + "-" + ("0" + UU.getMinutes()).slice(-2)) + ".png"
          }
          cU.Download(UU, XU)
        } else if (UU && "undefined" !== typeof URL) {
          const XU = URL.createObjectURL(UU),
            zU = window.open("");
          if (!zU) return;
          const cU = zU.document.createElement("img");
          cU.onload = function() {
            URL.revokeObjectURL(XU)
          }, cU.src = XU, zU.document.body.appendChild(cU)
        }
      }
      static EncodeScreenshotCanvasData(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          yU = arguments.length > 3 ? arguments[3] : void 0,
          QU = arguments.length > 4 ? arguments[4] : void 0;
        if ("string" !== typeof yU && XU) {
          if (XU) {
            if (cU._IsOffScreenCanvas(UU)) return void UU.convertToBlob({
              type: zU,
              quality: QU
            }).then((UU => {
              const zU = new FileReader;
              zU.readAsDataURL(UU), zU.onloadend = () => {
                const UU = zU.result;
                XU(UU)
              }
            }));
            const yU = UU.toDataURL(zU, QU);
            XU(yU)
          }
        } else this.ToBlob(UU, (function(UU) {
          UU && cU.DownloadBlob(UU, yU), XU && XU("")
        }), zU, QU)
      }
      static Download(UU, XU) {
        if ("undefined" === typeof URL) return;
        const zU = window.URL.createObjectURL(UU),
          cU = document.createElement("a");
        document.body.appendChild(cU), cU.style.display = "none", cU.href = zU, cU.download = XU, cU.addEventListener("click", (() => {
          cU.parentElement && cU.parentElement.removeChild(cU)
        })), cU.click(), window.URL.revokeObjectURL(zU)
      }
      static BackCompatCameraNoPreventDefault(UU) {
        return "boolean" === typeof UU[0] ? UU[0] : "boolean" === typeof UU[1] && UU[1]
      }
      static CreateScreenshot(UU, XU, zU, cU) {
        throw (0, DU.m)("ScreenshotTools")
      }
      static async CreateScreenshotAsync(UU, XU, zU) {
        throw (0, DU.m)("ScreenshotTools")
      }
      static CreateScreenshotUsingRenderTarget(UU, XU, zU, cU) {
        throw (0, DU.m)("ScreenshotTools")
      }
      static async CreateScreenshotUsingRenderTargetAsync(UU, XU, zU) {
        throw (0, DU.m)("ScreenshotTools")
      }
      static RandomId() {
        return (0, aU.d)()
      }
      static IsBase64(UU) {
        return (0, NU.o)(UU)
      }
      static DecodeBase64(UU) {
        return (0, NU.e)(UU)
      }
      static get errorsCount() {
        return AU.b.errorsCount
      }
      static Log(UU) {
        AU.b.Log(UU)
      }
      static Warn(UU) {
        AU.b.Warn(UU)
      }
      static Error(UU) {
        AU.b.Error(UU)
      }
      static get LogCache() {
        return AU.b.LogCache
      }
      static ClearLogCache() {
        AU.b.ClearLogCache()
      }
      static set LogLevels(UU) {
        AU.b.LogLevels = UU
      }
      static set PerformanceLogLevel(UU) {
        (UU & cU.PerformanceUserMarkLogLevel) !== cU.PerformanceUserMarkLogLevel ? (UU & cU.PerformanceConsoleLogLevel) !== cU.PerformanceConsoleLogLevel ? (cU.StartPerformanceCounter = cU._StartPerformanceCounterDisabled, cU.EndPerformanceCounter = cU._EndPerformanceCounterDisabled, _native?.disablePerformanceLogging?.()) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(2), cU.StartPerformanceCounter = cU._StartMarkNative, cU.EndPerformanceCounter = cU._EndMarkNative) : (cU.StartPerformanceCounter = cU._StartPerformanceConsole, cU.EndPerformanceCounter = cU._EndPerformanceConsole) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(1), cU.StartPerformanceCounter = cU._StartMarkNative, cU.EndPerformanceCounter = cU._EndMarkNative) : (cU.StartPerformanceCounter = cU._StartUserMark, cU.EndPerformanceCounter = cU._EndUserMark)
      }
      static _StartPerformanceCounterDisabled(UU, XU) {}
      static _EndPerformanceCounterDisabled(UU, XU) {}
      static _StartUserMark(UU) {
        let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!cU._Performance) {
          if (!(0, QU.h)()) return;
          cU._Performance = window.performance
        }
        XU && cU._Performance.mark && cU._Performance.mark(UU + "-Begin")
      }
      static _EndUserMark(UU) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && cU._Performance.mark && (cU._Performance.mark(UU + "-End"), cU._Performance.measure(UU, UU + "-Begin", UU + "-End"))
      }
      static _StartPerformanceConsole(UU) {
        let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        XU && (cU._StartUserMark(UU, XU), console.time && console.time(UU))
      }
      static _EndPerformanceConsole(UU) {
        let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        XU && (cU._EndUserMark(UU, XU), console.timeEnd(UU))
      }
      static _StartMarkNative(UU) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
          if (cU._NativePerformanceCounterHandles.has(UU)) cU.Warn(`Performance counter with name ${UU} is already started.`);
          else {
            const XU = _native.startPerformanceCounter(UU);
            cU._NativePerformanceCounterHandles.set(UU, XU)
          }
      }
      static _EndMarkNative(UU) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
          const XU = cU._NativePerformanceCounterHandles.get(UU);
          XU ? (_native.endPerformanceCounter(XU), cU._NativePerformanceCounterHandles.delete(UU)) : cU.Warn(`Performance counter with name ${UU} was not started.`)
        }
      }
      static get Now() {
        return oU.e.Now
      }
      static GetClassName(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zU = null;
        if (!XU && UU.getClassName) zU = UU.getClassName();
        else {
          if (UU instanceof Object) {
            zU = (XU ? UU : Object.getPrototypeOf(UU)).constructor.__bjsclassName__
          }
          zU || (zU = typeof UU)
        }
        return zU
      }
      static First(UU, XU) {
        for (const zU of UU)
          if (XU(zU)) return zU;
        return null
      }
      static getFullClassName(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zU = null,
          cU = null;
        if (!XU && UU.getClassName) zU = UU.getClassName();
        else {
          if (UU instanceof Object) {
            const yU = XU ? UU : Object.getPrototypeOf(UU);
            zU = yU.constructor.__bjsclassName__, cU = yU.constructor.__bjsmoduleName__
          }
          zU || (zU = typeof UU)
        }
        return zU ? (null != cU ? cU + "." : "") + zU : null
      }
      static async DelayAsync(UU) {
        await new Promise((XU => {
          setTimeout((() => {
            XU()
          }), UU)
        }))
      }
      static IsSafari() {
        return !!(0, QU.e)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }
    }

    function kU(UU, XU) {
      return zU => {
        zU.__bjsclassName__ = UU, zU.__bjsmoduleName__ = null != XU ? XU : null
      }
    }
    cU = gU, gU.AssetBaseUrl = "", gU.UseCustomRequestHeaders = !1, gU.CustomRequestHeaders = EU.e.CustomRequestHeaders, gU.GetDOMTextContent = QU.b, gU._DefaultCdnUrl = "https://cdn.babylonjs.com", gU._CdnVersion = "9.28.0", gU._DefaultAssetsUrl = "https://assets.babylonjs.com/core", gU.LoadScript = "undefined" === typeof _native ? cU._LoadScriptWeb : cU._LoadScriptNative, gU.GetAbsoluteUrl = "object" === typeof document ? UU => {
      const XU = document.createElement("a");
      return XU.href = UU, XU.href
    } : "function" === typeof URL && "object" === typeof location ? UU => new URL(UU, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
    }, gU.NoneLogLevel = AU.b.NoneLogLevel, gU.MessageLogLevel = AU.b.MessageLogLevel, gU.WarningLogLevel = AU.b.WarningLogLevel, gU.ErrorLogLevel = AU.b.ErrorLogLevel, gU.AllLogLevel = AU.b.AllLogLevel, gU.IsWindowObjectExist = QU.h, gU.PerformanceNoneLogLevel = 0, gU.PerformanceUserMarkLogLevel = 1, gU.PerformanceConsoleLogLevel = 2, gU._NativePerformanceCounterHandles = new Map, gU.StartPerformanceCounter = cU._StartPerformanceCounterDisabled, gU.EndPerformanceCounter = cU._EndPerformanceCounterDisabled;
    class GU {
      constructor(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.iterations = UU, this.index = cU - 1, this._done = !1, this._fn = XU, this._successCallback = zU
      }
      executeNext() {
        this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
      }
      breakLoop() {
        this._done = !0, this._successCallback()
      }
      static Run(UU, XU, zU) {
        const cU = new GU(UU, XU, zU, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return cU.executeNext(), cU
      }
      static SyncAsyncForLoop(UU, XU, zU, cU, yU) {
        let QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return GU.Run(Math.ceil(UU / XU), (cU => {
          yU && yU() ? cU.breakLoop() : setTimeout((() => {
            for (let QU = 0; QU < XU; ++QU) {
              const AU = cU.index * XU + QU;
              if (AU >= UU) break;
              if (zU(AU), yU && yU()) {
                cU.breakLoop();
                break
              }
            }
            cU.executeNext()
          }), QU)
        }), cU)
      }
    }
    let BU = !1;

    function ZU() {
      BU || (BU = !0, gU.Mix = tU.n, gU.IsExponentOfTwo = tU.k, YU.b.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z")
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);