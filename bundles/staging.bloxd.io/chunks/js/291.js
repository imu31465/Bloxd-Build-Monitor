export const id = 291;
export const ids = [291];
export const modules = {
  41955: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => ar
    });
    var Zr = Qr(40246),
      Wr = Qr(38609);
    class ar {
      static Instantiate(rr) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[rr]) return this.RegisteredExternalClasses[rr];
        const Sr = (0, Wr.d)(rr);
        if (Sr) return Sr;
        Zr.c.Warn(rr + " not found, you may have missed an import.");
        const Qr = rr.split(".");
        let ar = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
        for (let Zr = 0, Wr = Qr.length; Zr < Wr; Zr++) ar = ar[Qr[Zr]];
        return "function" !== typeof ar ? null : ar
      }
    }
    ar.RegisteredExternalClasses = {}
  },
  41787: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Wr
    });
    var Zr = Qr(41749);
    class Wr {
      static get Now() {
        return (0, Zr.m)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
      }
    }
  },
  41818: (rr, Sr, Qr) => {
    function Zr(rr) {
      let Sr = 1;
      do {
        Sr *= 2
      } while (Sr < rr);
      return Sr === rr
    }

    function Wr(rr, Sr, Qr) {
      return rr * (1 - Qr) + Sr * Qr
    }

    function ar(rr) {
      const Sr = jr(rr),
        Qr = Ir(rr);
      return Sr - rr > rr - Qr ? Qr : Sr
    }

    function jr(rr) {
      return rr--, rr |= rr >> 1, rr |= rr >> 2, rr |= rr >> 4, rr |= rr >> 8, rr |= rr >> 16, ++rr
    }

    function Ir(rr) {
      return rr |= rr >> 1, rr |= rr >> 2, rr |= rr >> 4, rr |= rr >> 8, (rr |= rr >> 16) - (rr >> 1)
    }

    function fr(rr, Sr) {
      let Qr;
      switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
        case 1:
          Qr = Ir(rr);
          break;
        case 2:
          Qr = ar(rr);
          break;
        default:
          Qr = jr(rr)
      }
      return Math.min(Qr, Sr)
    }
    Qr.d(Sr, {
      d: () => Ir,
      h: () => fr,
      l: () => Zr,
      n: () => Wr,
      o: () => ar
    })
  },
  41950: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => nr,
      d: () => Kr,
      h: () => zr,
      j: () => Yr
    });
    var Zr, Wr = Qr(38595),
      ar = Qr(41749),
      jr = Qr(40246),
      Ir = Qr(40237),
      fr = Qr(41787),
      Er = Qr(41769),
      pr = Qr(41906),
      xr = Qr(38587),
      mr = Qr(41898),
      Nr = Qr(41781),
      Ur = Qr(41955),
      tr = Qr(39405),
      hr = Qr(41818);
    class zr {
      static get BaseUrl() {
        return mr.e.BaseUrl
      }
      static set BaseUrl(rr) {
        mr.e.BaseUrl = rr
      }
      static get CleanUrl() {
        return mr.e.CleanUrl
      }
      static set CleanUrl(rr) {
        mr.e.CleanUrl = rr
      }
      static IsAbsoluteUrl(rr) {
        return 0 === rr.indexOf("//") || -1 !== rr.indexOf("://") && (-1 !== rr.indexOf(".") && (-1 !== rr.indexOf("/") && (!(rr.indexOf(":") > rr.indexOf("/")) && (rr.indexOf("://") < rr.indexOf(".") || (0 === rr.indexOf("data:") || 0 === rr.indexOf("blob:"))))))
      }
      static set ScriptBaseUrl(rr) {
        mr.e.ScriptBaseUrl = rr
      }
      static get ScriptBaseUrl() {
        return mr.e.ScriptBaseUrl
      }
      static set CDNBaseUrl(rr) {
        Zr.ScriptBaseUrl = rr, Zr.AssetBaseUrl = rr
      }
      static set ScriptPreprocessUrl(rr) {
        mr.e.ScriptPreprocessUrl = rr
      }
      static get ScriptPreprocessUrl() {
        return mr.e.ScriptPreprocessUrl
      }
      static get DefaultRetryStrategy() {
        return mr.e.DefaultRetryStrategy
      }
      static set DefaultRetryStrategy(rr) {
        mr.e.DefaultRetryStrategy = rr
      }
      static get CorsBehavior() {
        return mr.e.CorsBehavior
      }
      static set CorsBehavior(rr) {
        mr.e.CorsBehavior = rr
      }
      static get UseFallbackTexture() {
        return xr.b.UseFallbackTexture
      }
      static set UseFallbackTexture(rr) {
        xr.b.UseFallbackTexture = rr
      }
      static get RegisteredExternalClasses() {
        return Ur.d.RegisteredExternalClasses
      }
      static set RegisteredExternalClasses(rr) {
        Ur.d.RegisteredExternalClasses = rr
      }
      static get fallbackTexture() {
        return xr.b.FallbackTexture
      }
      static set fallbackTexture(rr) {
        xr.b.FallbackTexture = rr
      }
      static FetchToRef(rr, Sr, Qr, Zr, Wr, ar) {
        const jr = 4 * ((Math.abs(rr) * Qr % Qr | 0) + (Math.abs(Sr) * Zr % Zr | 0) * Qr);
        ar.r = Wr[jr] / 255, ar.g = Wr[jr + 1] / 255, ar.b = Wr[jr + 2] / 255, ar.a = Wr[jr + 3] / 255
      }
      static Mix(rr, Sr, Qr) {
        return 0
      }
      static Instantiate(rr) {
        return Ur.d.Instantiate(rr)
      }
      static SetImmediate(rr) {
        Nr.d.SetImmediate(rr)
      }
      static IsExponentOfTwo(rr) {
        return !0
      }
      static FloatRound(rr) {
        return Math.fround(rr)
      }
      static GetFilename(rr) {
        const Sr = rr.lastIndexOf("/");
        return Sr < 0 ? rr : rr.substring(Sr + 1)
      }
      static GetFolderPath(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Qr = rr.lastIndexOf("/");
        return Qr < 0 ? Sr ? rr : "" : rr.substring(0, Qr + 1)
      }
      static ToDegrees(rr) {
        return 180 * rr / Math.PI
      }
      static ToRadians(rr) {
        return rr * Math.PI / 180
      }
      static SmoothAngleChange(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
        const Zr = this.ToRadians(rr),
          Wr = this.ToRadians(Sr);
        return this.ToDegrees(Math.atan2((1 - Qr) * Math.sin(Wr) + Qr * Math.sin(Zr), (1 - Qr) * Math.cos(Wr) + Qr * Math.cos(Zr)))
      }
      static MakeArray(rr, Sr) {
        return !0 === Sr || void 0 !== rr && null != rr ? Array.isArray(rr) ? rr : [rr] : null
      }
      static GetPointerPrefix(rr) {
        return (0, ar.m)() && !window.PointerEvent ? "mouse" : "pointer"
      }
      static SetCorsBehavior(rr, Sr) {
        (0, mr.E)(rr, Sr)
      }
      static SetReferrerPolicyBehavior(rr, Sr) {
        Sr.referrerPolicy = rr
      }
      static get PreprocessUrl() {
        return mr.e.PreprocessUrl
      }
      static set PreprocessUrl(rr) {
        mr.e.PreprocessUrl = rr
      }
      static LoadImage(rr, Sr, Qr, Zr, Wr, ar) {
        return (0, mr.q)(rr, Sr, Qr, Zr, Wr, ar)
      }
      static LoadFile(rr, Sr, Qr, Zr, Wr, ar) {
        return (0, mr.n)(rr, Sr, Qr, Zr, Wr, ar)
      }
      static async LoadFileAsync(rr) {
        let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return await new Promise(((Qr, Zr) => {
          (0, mr.n)(rr, (rr => {
            Qr(rr)
          }), void 0, void 0, Sr, ((rr, Sr) => {
            Zr(Sr)
          }))
        }))
      }
      static GetAssetUrl(rr) {
        if (!rr) return "";
        if (Zr.AssetBaseUrl && rr.startsWith(Zr._DefaultAssetsUrl)) {
          const Sr = Zr.AssetBaseUrl.endsWith("/") ? Zr.AssetBaseUrl.slice(0, -1) : Zr.AssetBaseUrl;
          return rr.replace(Zr._DefaultAssetsUrl, Sr)
        }
        return rr
      }
      static GetBabylonScriptURL(rr, Sr) {
        if (!rr) return "";
        if (rr.startsWith(Zr._DefaultCdnUrl))
          if (Zr.ScriptBaseUrl) {
            const Sr = Zr.ScriptBaseUrl.endsWith("/") ? Zr.ScriptBaseUrl.slice(0, -1) : Zr.ScriptBaseUrl;
            rr = rr.replace(Zr._DefaultCdnUrl, Sr)
          } else if (Zr._CdnVersion) {
          const Sr = `${Zr._DefaultCdnUrl}/v${Zr._CdnVersion}`;
          rr.startsWith(Sr) || (rr = rr.replace(Zr._DefaultCdnUrl, Sr))
        }
        return rr = Zr.ScriptPreprocessUrl(rr), Sr && !Zr.IsAbsoluteUrl(rr) && (rr = Zr.GetAbsoluteUrl(rr)), rr
      }
      static LoadBabylonScript(rr, Sr, Qr, Wr) {
        rr = Zr.GetBabylonScriptURL(rr), Zr.LoadScript(rr, Sr, Qr)
      }
      static async LoadBabylonScriptAsync(rr) {
        return rr = Zr.GetBabylonScriptURL(rr), await Zr.LoadScriptAsync(rr)
      }
      static _LoadScriptNative(rr, Sr, Qr, Wr) {
        if (_native) {
          if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
            const rr = "Loading a script as an ES module is not supported in Babylon Native";
            return void Qr?.(rr, new Error(rr))
          }
          Zr.LoadFile(rr, (rr => {
            try {
              Function(rr).apply(null), Sr && Sr()
            } catch (Zr) {
              Qr && Qr("LoadScript Error", Zr)
            }
          }), void 0, void 0, !1, ((rr, Sr) => {
            Qr && Qr("LoadScript Error", Sr)
          }))
        }
      }
      static _LoadScriptWeb(rr, Sr, Qr, Zr) {
        let Wr = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" === typeof importScripts) {
          try {
            importScripts(rr), Sr && Sr()
          } catch (fr) {
            Qr?.(`Unable to load script '${rr}' in worker`, fr)
          }
          return
        }
        if (!(0, ar.m)()) return void Qr?.(`Cannot load script '${rr}' outside of a window or a worker`);
        const jr = document.getElementsByTagName("head")[0],
          Ir = document.createElement("script");
        Wr ? (Ir.setAttribute("type", "module"), Ir.innerText = rr) : (Ir.setAttribute("type", "text/javascript"), Ir.setAttribute("src", rr)), Zr && (Ir.id = Zr), Ir.onload = () => {
          Sr && Sr()
        }, Ir.onerror = Sr => {
          Qr && Qr(`Unable to load script '${rr}'`, Sr)
        }, jr.appendChild(Ir)
      }
      static async LoadScriptAsync(rr, Sr) {
        return await new Promise(((Qr, Zr) => {
          this.LoadScript(rr, (() => {
            Qr()
          }), ((rr, Sr) => {
            Zr(Sr || new Error(rr))
          }), Sr)
        }))
      }
      static ReadFileAsDataURL(rr, Sr, Qr) {
        const Zr = new FileReader,
          ar = {
            onCompleteObservable: new Wr.d,
            abort: () => Zr.abort()
          };
        return Zr.onloadend = () => {
          ar.onCompleteObservable.notifyObservers(ar)
        }, Zr.onload = rr => {
          Sr(rr.target.result)
        }, Zr.onprogress = Qr, Zr.readAsDataURL(rr), ar
      }
      static ReadFile(rr, Sr, Qr, Zr, Wr) {
        return (0, mr.t)(rr, Sr, Qr, Zr, Wr)
      }
      static FileAsURL(rr) {
        const Sr = new Blob([rr]);
        return window.URL.createObjectURL(Sr)
      }
      static Format(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return rr.toFixed(Sr)
      }
      static DeepCopy(rr, Sr, Qr, Zr) {
        Ir.b.DeepCopy(rr, Sr, Qr, Zr)
      }
      static IsEmpty(rr) {
        for (const Sr in rr)
          if (Object.prototype.hasOwnProperty.call(rr, Sr)) return !1;
        return !0
      }
      static RegisterTopRootEvents(rr, Sr) {
        for (let Zr = 0; Zr < Sr.length; Zr++) {
          const Wr = Sr[Zr];
          rr.addEventListener(Wr.name, Wr.handler, !1);
          try {
            window.parent && window.parent.addEventListener(Wr.name, Wr.handler, !1)
          } catch (Qr) {}
        }
      }
      static UnregisterTopRootEvents(rr, Sr) {
        for (let Zr = 0; Zr < Sr.length; Zr++) {
          const Wr = Sr[Zr];
          rr.removeEventListener(Wr.name, Wr.handler);
          try {
            rr.parent && rr.parent.removeEventListener(Wr.name, Wr.handler)
          } catch (Qr) {}
        }
      }
      static async DumpFramebuffer(rr, Sr, Qr, Zr) {
        throw (0, Er.l)("DumpTools")
      }
      static DumpData(rr, Sr, Qr, Zr) {
        throw (0, Er.l)("DumpTools")
      }
      static async DumpDataAsync(rr, Sr, Qr) {
        throw (0, Er.l)("DumpTools")
      }
      static _IsOffScreenCanvas(rr) {
        return void 0 !== rr.convertToBlob
      }
      static ToBlob(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          Wr = arguments.length > 3 ? arguments[3] : void 0;
        Zr._IsOffScreenCanvas(rr) || rr.toBlob || (rr.toBlob = function(rr, Sr, Qr) {
          setTimeout((() => {
            const Zr = atob(this.toDataURL(Sr, Qr).split(",")[1]),
              Wr = Zr.length,
              ar = new Uint8Array(Wr);
            for (let rr = 0; rr < Wr; rr++) ar[rr] = Zr.charCodeAt(rr);
            rr(new Blob([ar]))
          }))
        }), Zr._IsOffScreenCanvas(rr) ? rr.convertToBlob({
          type: Qr,
          quality: Wr
        }).then((rr => Sr(rr))) : rr.toBlob((function(rr) {
          Sr(rr)
        }), Qr, Wr)
      }
      static DownloadBlob(rr, Sr) {
        if ("download" in document.createElement("a")) {
          if (!Sr) {
            const rr = new Date;
            Sr = "screenshot_" + ((rr.getFullYear() + "-" + (rr.getMonth() + 1)).slice(2) + "-" + rr.getDate() + "_" + rr.getHours() + "-" + ("0" + rr.getMinutes()).slice(-2)) + ".png"
          }
          Zr.Download(rr, Sr)
        } else if (rr && "undefined" !== typeof URL) {
          const Sr = URL.createObjectURL(rr),
            Qr = window.open("");
          if (!Qr) return;
          const Zr = Qr.document.createElement("img");
          Zr.onload = function() {
            URL.revokeObjectURL(Sr)
          }, Zr.src = Sr, Qr.document.body.appendChild(Zr)
        }
      }
      static EncodeScreenshotCanvasData(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          Wr = arguments.length > 3 ? arguments[3] : void 0,
          ar = arguments.length > 4 ? arguments[4] : void 0;
        if ("string" !== typeof Wr && Sr) {
          if (Sr) {
            if (Zr._IsOffScreenCanvas(rr)) return void rr.convertToBlob({
              type: Qr,
              quality: ar
            }).then((rr => {
              const Qr = new FileReader;
              Qr.readAsDataURL(rr), Qr.onloadend = () => {
                const rr = Qr.result;
                Sr(rr)
              }
            }));
            const Wr = rr.toDataURL(Qr, ar);
            Sr(Wr)
          }
        } else this.ToBlob(rr, (function(rr) {
          rr && Zr.DownloadBlob(rr, Wr), Sr && Sr("")
        }), Qr, ar)
      }
      static Download(rr, Sr) {
        if ("undefined" === typeof URL) return;
        const Qr = window.URL.createObjectURL(rr),
          Zr = document.createElement("a");
        document.body.appendChild(Zr), Zr.style.display = "none", Zr.href = Qr, Zr.download = Sr, Zr.addEventListener("click", (() => {
          Zr.parentElement && Zr.parentElement.removeChild(Zr)
        })), Zr.click(), window.URL.revokeObjectURL(Qr)
      }
      static BackCompatCameraNoPreventDefault(rr) {
        return "boolean" === typeof rr[0] ? rr[0] : "boolean" === typeof rr[1] && rr[1]
      }
      static CreateScreenshot(rr, Sr, Qr, Zr) {
        throw (0, Er.l)("ScreenshotTools")
      }
      static async CreateScreenshotAsync(rr, Sr, Qr) {
        throw (0, Er.l)("ScreenshotTools")
      }
      static CreateScreenshotUsingRenderTarget(rr, Sr, Qr, Zr) {
        throw (0, Er.l)("ScreenshotTools")
      }
      static async CreateScreenshotUsingRenderTargetAsync(rr, Sr, Qr) {
        throw (0, Er.l)("ScreenshotTools")
      }
      static RandomId() {
        return (0, tr.b)()
      }
      static IsBase64(rr) {
        return (0, mr.j)(rr)
      }
      static DecodeBase64(rr) {
        return (0, mr.b)(rr)
      }
      static get errorsCount() {
        return jr.c.errorsCount
      }
      static Log(rr) {
        jr.c.Log(rr)
      }
      static Warn(rr) {
        jr.c.Warn(rr)
      }
      static Error(rr) {
        jr.c.Error(rr)
      }
      static get LogCache() {
        return jr.c.LogCache
      }
      static ClearLogCache() {
        jr.c.ClearLogCache()
      }
      static set LogLevels(rr) {
        jr.c.LogLevels = rr
      }
      static set PerformanceLogLevel(rr) {
        (rr & Zr.PerformanceUserMarkLogLevel) !== Zr.PerformanceUserMarkLogLevel ? (rr & Zr.PerformanceConsoleLogLevel) !== Zr.PerformanceConsoleLogLevel ? (Zr.StartPerformanceCounter = Zr._StartPerformanceCounterDisabled, Zr.EndPerformanceCounter = Zr._EndPerformanceCounterDisabled, _native?.disablePerformanceLogging?.()) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(2), Zr.StartPerformanceCounter = Zr._StartMarkNative, Zr.EndPerformanceCounter = Zr._EndMarkNative) : (Zr.StartPerformanceCounter = Zr._StartPerformanceConsole, Zr.EndPerformanceCounter = Zr._EndPerformanceConsole) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(1), Zr.StartPerformanceCounter = Zr._StartMarkNative, Zr.EndPerformanceCounter = Zr._EndMarkNative) : (Zr.StartPerformanceCounter = Zr._StartUserMark, Zr.EndPerformanceCounter = Zr._EndUserMark)
      }
      static _StartPerformanceCounterDisabled(rr, Sr) {}
      static _EndPerformanceCounterDisabled(rr, Sr) {}
      static _StartUserMark(rr) {
        let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!Zr._Performance) {
          if (!(0, ar.m)()) return;
          Zr._Performance = window.performance
        }
        Sr && Zr._Performance.mark && Zr._Performance.mark(rr + "-Begin")
      }
      static _EndUserMark(rr) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && Zr._Performance.mark && (Zr._Performance.mark(rr + "-End"), Zr._Performance.measure(rr, rr + "-Begin", rr + "-End"))
      }
      static _StartPerformanceConsole(rr) {
        let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        Sr && (Zr._StartUserMark(rr, Sr), console.time && console.time(rr))
      }
      static _EndPerformanceConsole(rr) {
        let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        Sr && (Zr._EndUserMark(rr, Sr), console.timeEnd(rr))
      }
      static _StartMarkNative(rr) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
          if (Zr._NativePerformanceCounterHandles.has(rr)) Zr.Warn(`Performance counter with name ${rr} is already started.`);
          else {
            const Sr = _native.startPerformanceCounter(rr);
            Zr._NativePerformanceCounterHandles.set(rr, Sr)
          }
      }
      static _EndMarkNative(rr) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
          const Sr = Zr._NativePerformanceCounterHandles.get(rr);
          Sr ? (_native.endPerformanceCounter(Sr), Zr._NativePerformanceCounterHandles.delete(rr)) : Zr.Warn(`Performance counter with name ${rr} was not started.`)
        }
      }
      static get Now() {
        return fr.c.Now
      }
      static GetClassName(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Qr = null;
        if (!Sr && rr.getClassName) Qr = rr.getClassName();
        else {
          if (rr instanceof Object) {
            Qr = (Sr ? rr : Object.getPrototypeOf(rr)).constructor.__bjsclassName__
          }
          Qr || (Qr = typeof rr)
        }
        return Qr
      }
      static First(rr, Sr) {
        for (const Qr of rr)
          if (Sr(Qr)) return Qr;
        return null
      }
      static getFullClassName(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Qr = null,
          Zr = null;
        if (!Sr && rr.getClassName) Qr = rr.getClassName();
        else {
          if (rr instanceof Object) {
            const Wr = Sr ? rr : Object.getPrototypeOf(rr);
            Qr = Wr.constructor.__bjsclassName__, Zr = Wr.constructor.__bjsmoduleName__
          }
          Qr || (Qr = typeof rr)
        }
        return Qr ? (null != Zr ? Zr + "." : "") + Qr : null
      }
      static async DelayAsync(rr) {
        await new Promise((Sr => {
          setTimeout((() => {
            Sr()
          }), rr)
        }))
      }
      static IsSafari() {
        return !!(0, ar.j)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }
    }

    function Yr(rr, Sr) {
      return Qr => {
        Qr.__bjsclassName__ = rr, Qr.__bjsmoduleName__ = null != Sr ? Sr : null
      }
    }
    Zr = zr, zr.AssetBaseUrl = "", zr.UseCustomRequestHeaders = !1, zr.CustomRequestHeaders = pr.b.CustomRequestHeaders, zr.GetDOMTextContent = ar.e, zr._DefaultCdnUrl = "https://cdn.babylonjs.com", zr._CdnVersion = "9.28.0", zr._DefaultAssetsUrl = "https://assets.babylonjs.com/core", zr.LoadScript = "undefined" === typeof _native ? Zr._LoadScriptWeb : Zr._LoadScriptNative, zr.GetAbsoluteUrl = "object" === typeof document ? rr => {
      const Sr = document.createElement("a");
      return Sr.href = rr, Sr.href
    } : "function" === typeof URL && "object" === typeof location ? rr => new URL(rr, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
    }, zr.NoneLogLevel = jr.c.NoneLogLevel, zr.MessageLogLevel = jr.c.MessageLogLevel, zr.WarningLogLevel = jr.c.WarningLogLevel, zr.ErrorLogLevel = jr.c.ErrorLogLevel, zr.AllLogLevel = jr.c.AllLogLevel, zr.IsWindowObjectExist = ar.m, zr.PerformanceNoneLogLevel = 0, zr.PerformanceUserMarkLogLevel = 1, zr.PerformanceConsoleLogLevel = 2, zr._NativePerformanceCounterHandles = new Map, zr.StartPerformanceCounter = Zr._StartPerformanceCounterDisabled, zr.EndPerformanceCounter = Zr._EndPerformanceCounterDisabled;
    class nr {
      constructor(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.iterations = rr, this.index = Zr - 1, this._done = !1, this._fn = Sr, this._successCallback = Qr
      }
      executeNext() {
        this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
      }
      breakLoop() {
        this._done = !0, this._successCallback()
      }
      static Run(rr, Sr, Qr) {
        const Zr = new nr(rr, Sr, Qr, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return Zr.executeNext(), Zr
      }
      static SyncAsyncForLoop(rr, Sr, Qr, Zr, Wr) {
        let ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return nr.Run(Math.ceil(rr / Sr), (Zr => {
          Wr && Wr() ? Zr.breakLoop() : setTimeout((() => {
            for (let ar = 0; ar < Sr; ++ar) {
              const jr = Zr.index * Sr + ar;
              if (jr >= rr) break;
              if (Qr(jr), Wr && Wr()) {
                Zr.breakLoop();
                break
              }
            }
            Zr.executeNext()
          }), ar)
        }), Zr)
      }
    }
    let er = !1;

    function Kr() {
      er || (er = !0, zr.Mix = hr.n, zr.IsExponentOfTwo = hr.l, xr.b.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z")
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);