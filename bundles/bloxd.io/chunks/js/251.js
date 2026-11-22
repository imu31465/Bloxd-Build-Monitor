export const id = 251;
export const ids = [251];
export const modules = {
  39666: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Sk
    });
    var Dk = ik(38272),
      fk = ik(36734);
    class Sk {
      static Instantiate(kk) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[kk]) return this.RegisteredExternalClasses[kk];
        const ek = (0, fk.d)(kk);
        if (ek) return ek;
        Dk.b.Warn(kk + " not found, you may have missed an import.");
        const ik = kk.split(".");
        let Sk = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
        for (let Dk = 0, fk = ik.length; Dk < fk; Dk++) Sk = Sk[ik[Dk]];
        return "function" !== typeof Sk ? null : Sk
      }
    }
    Sk.RegisteredExternalClasses = {}
  },
  39470: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => fk
    });
    var Dk = ik(39429);
    class fk {
      static get Now() {
        return (0, Dk.i)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
      }
    }
  },
  39501: (kk, ek, ik) => {
    function Dk(kk) {
      let ek = 1;
      do {
        ek *= 2
      } while (ek < kk);
      return ek === kk
    }

    function fk(kk, ek, ik) {
      return kk * (1 - ik) + ek * ik
    }

    function Sk(kk) {
      const ek = bk(kk),
        ik = rk(kk);
      return ek - kk > kk - ik ? ik : ek
    }

    function bk(kk) {
      return kk--, kk |= kk >> 1, kk |= kk >> 2, kk |= kk >> 4, kk |= kk >> 8, kk |= kk >> 16, ++kk
    }

    function rk(kk) {
      return kk |= kk >> 1, kk |= kk >> 2, kk |= kk >> 4, kk |= kk >> 8, (kk |= kk >> 16) - (kk >> 1)
    }

    function Pk(kk, ek) {
      let ik;
      switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
        case 1:
          ik = rk(kk);
          break;
        case 2:
          ik = Sk(kk);
          break;
        default:
          ik = bk(kk)
      }
      return Math.min(ik, ek)
    }
    ik.d(ek, {
      d: () => rk,
      g: () => Pk,
      j: () => Dk,
      l: () => fk,
      p: () => Sk
    })
  },
  39662: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => yk,
      g: () => Lk,
      i: () => lk,
      l: () => pk
    });
    var Dk, fk = ik(36726),
      Sk = ik(39429),
      bk = ik(38272),
      rk = ik(38265),
      Pk = ik(39470),
      mk = ik(39447),
      Mk = ik(39612),
      Kk = ik(36722),
      xk = ik(39607),
      nk = ik(39458),
      Uk = ik(39666),
      Hk = ik(37497),
      wk = ik(39501);
    class lk {
      static get BaseUrl() {
        return xk.e.BaseUrl
      }
      static set BaseUrl(kk) {
        xk.e.BaseUrl = kk
      }
      static get CleanUrl() {
        return xk.e.CleanUrl
      }
      static set CleanUrl(kk) {
        xk.e.CleanUrl = kk
      }
      static IsAbsoluteUrl(kk) {
        return 0 === kk.indexOf("//") || -1 !== kk.indexOf("://") && (-1 !== kk.indexOf(".") && (-1 !== kk.indexOf("/") && (!(kk.indexOf(":") > kk.indexOf("/")) && (kk.indexOf("://") < kk.indexOf(".") || (0 === kk.indexOf("data:") || 0 === kk.indexOf("blob:"))))))
      }
      static set ScriptBaseUrl(kk) {
        xk.e.ScriptBaseUrl = kk
      }
      static get ScriptBaseUrl() {
        return xk.e.ScriptBaseUrl
      }
      static set CDNBaseUrl(kk) {
        Dk.ScriptBaseUrl = kk, Dk.AssetBaseUrl = kk
      }
      static set ScriptPreprocessUrl(kk) {
        xk.e.ScriptPreprocessUrl = kk
      }
      static get ScriptPreprocessUrl() {
        return xk.e.ScriptPreprocessUrl
      }
      static get DefaultRetryStrategy() {
        return xk.e.DefaultRetryStrategy
      }
      static set DefaultRetryStrategy(kk) {
        xk.e.DefaultRetryStrategy = kk
      }
      static get CorsBehavior() {
        return xk.e.CorsBehavior
      }
      static set CorsBehavior(kk) {
        xk.e.CorsBehavior = kk
      }
      static get UseFallbackTexture() {
        return Kk.e.UseFallbackTexture
      }
      static set UseFallbackTexture(kk) {
        Kk.e.UseFallbackTexture = kk
      }
      static get RegisteredExternalClasses() {
        return Uk.d.RegisteredExternalClasses
      }
      static set RegisteredExternalClasses(kk) {
        Uk.d.RegisteredExternalClasses = kk
      }
      static get fallbackTexture() {
        return Kk.e.FallbackTexture
      }
      static set fallbackTexture(kk) {
        Kk.e.FallbackTexture = kk
      }
      static FetchToRef(kk, ek, ik, Dk, fk, Sk) {
        const bk = 4 * ((Math.abs(kk) * ik % ik | 0) + (Math.abs(ek) * Dk % Dk | 0) * ik);
        Sk.r = fk[bk] / 255, Sk.g = fk[bk + 1] / 255, Sk.b = fk[bk + 2] / 255, Sk.a = fk[bk + 3] / 255
      }
      static Mix(kk, ek, ik) {
        return 0
      }
      static Instantiate(kk) {
        return Uk.d.Instantiate(kk)
      }
      static SetImmediate(kk) {
        nk.e.SetImmediate(kk)
      }
      static IsExponentOfTwo(kk) {
        return !0
      }
      static FloatRound(kk) {
        return Math.fround(kk)
      }
      static GetFilename(kk) {
        const ek = kk.lastIndexOf("/");
        return ek < 0 ? kk : kk.substring(ek + 1)
      }
      static GetFolderPath(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ik = kk.lastIndexOf("/");
        return ik < 0 ? ek ? kk : "" : kk.substring(0, ik + 1)
      }
      static ToDegrees(kk) {
        return 180 * kk / Math.PI
      }
      static ToRadians(kk) {
        return kk * Math.PI / 180
      }
      static SmoothAngleChange(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
        const Dk = this.ToRadians(kk),
          fk = this.ToRadians(ek);
        return this.ToDegrees(Math.atan2((1 - ik) * Math.sin(fk) + ik * Math.sin(Dk), (1 - ik) * Math.cos(fk) + ik * Math.cos(Dk)))
      }
      static MakeArray(kk, ek) {
        return !0 === ek || void 0 !== kk && null != kk ? Array.isArray(kk) ? kk : [kk] : null
      }
      static GetPointerPrefix(kk) {
        return (0, Sk.i)() && !window.PointerEvent ? "mouse" : "pointer"
      }
      static SetCorsBehavior(kk, ek) {
        (0, xk.w)(kk, ek)
      }
      static SetReferrerPolicyBehavior(kk, ek) {
        ek.referrerPolicy = kk
      }
      static get PreprocessUrl() {
        return xk.e.PreprocessUrl
      }
      static set PreprocessUrl(kk) {
        xk.e.PreprocessUrl = kk
      }
      static LoadImage(kk, ek, ik, Dk, fk, Sk) {
        return (0, xk.o)(kk, ek, ik, Dk, fk, Sk)
      }
      static LoadFile(kk, ek, ik, Dk, fk, Sk) {
        return (0, xk.k)(kk, ek, ik, Dk, fk, Sk)
      }
      static async LoadFileAsync(kk) {
        let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return await new Promise(((ik, Dk) => {
          (0, xk.k)(kk, (kk => {
            ik(kk)
          }), void 0, void 0, ek, ((kk, ek) => {
            Dk(ek)
          }))
        }))
      }
      static GetAssetUrl(kk) {
        if (!kk) return "";
        if (Dk.AssetBaseUrl && kk.startsWith(Dk._DefaultAssetsUrl)) {
          const ek = Dk.AssetBaseUrl.endsWith("/") ? Dk.AssetBaseUrl.slice(0, -1) : Dk.AssetBaseUrl;
          return kk.replace(Dk._DefaultAssetsUrl, ek)
        }
        return kk
      }
      static GetBabylonScriptURL(kk, ek) {
        if (!kk) return "";
        if (kk.startsWith(Dk._DefaultCdnUrl))
          if (Dk.ScriptBaseUrl) {
            const ek = Dk.ScriptBaseUrl.endsWith("/") ? Dk.ScriptBaseUrl.slice(0, -1) : Dk.ScriptBaseUrl;
            kk = kk.replace(Dk._DefaultCdnUrl, ek)
          } else if (Dk._CdnVersion) {
          const ek = `${Dk._DefaultCdnUrl}/v${Dk._CdnVersion}`;
          kk.startsWith(ek) || (kk = kk.replace(Dk._DefaultCdnUrl, ek))
        }
        return kk = Dk.ScriptPreprocessUrl(kk), ek && !Dk.IsAbsoluteUrl(kk) && (kk = Dk.GetAbsoluteUrl(kk)), kk
      }
      static LoadBabylonScript(kk, ek, ik, fk) {
        kk = Dk.GetBabylonScriptURL(kk), Dk.LoadScript(kk, ek, ik)
      }
      static async LoadBabylonScriptAsync(kk) {
        return kk = Dk.GetBabylonScriptURL(kk), await Dk.LoadScriptAsync(kk)
      }
      static _LoadScriptNative(kk, ek, ik, fk) {
        if (_native) {
          if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
            const kk = "Loading a script as an ES module is not supported in Babylon Native";
            return void ik?.(kk, new Error(kk))
          }
          Dk.LoadFile(kk, (kk => {
            try {
              Function(kk).apply(null), ek && ek()
            } catch (Dk) {
              ik && ik("LoadScript Error", Dk)
            }
          }), void 0, void 0, !1, ((kk, ek) => {
            ik && ik("LoadScript Error", ek)
          }))
        }
      }
      static _LoadScriptWeb(kk, ek, ik, Dk) {
        let fk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" === typeof importScripts) {
          try {
            importScripts(kk), ek && ek()
          } catch (Pk) {
            ik?.(`Unable to load script '${kk}' in worker`, Pk)
          }
          return
        }
        if (!(0, Sk.i)()) return void ik?.(`Cannot load script '${kk}' outside of a window or a worker`);
        const bk = document.getElementsByTagName("head")[0],
          rk = document.createElement("script");
        fk ? (rk.setAttribute("type", "module"), rk.innerText = kk) : (rk.setAttribute("type", "text/javascript"), rk.setAttribute("src", kk)), Dk && (rk.id = Dk), rk.onload = () => {
          ek && ek()
        }, rk.onerror = ek => {
          ik && ik(`Unable to load script '${kk}'`, ek)
        }, bk.appendChild(rk)
      }
      static async LoadScriptAsync(kk, ek) {
        return await new Promise(((ik, Dk) => {
          this.LoadScript(kk, (() => {
            ik()
          }), ((kk, ek) => {
            Dk(ek || new Error(kk))
          }), ek)
        }))
      }
      static ReadFileAsDataURL(kk, ek, ik) {
        const Dk = new FileReader,
          Sk = {
            onCompleteObservable: new fk.c,
            abort: () => Dk.abort()
          };
        return Dk.onloadend = () => {
          Sk.onCompleteObservable.notifyObservers(Sk)
        }, Dk.onload = kk => {
          ek(kk.target.result)
        }, Dk.onprogress = ik, Dk.readAsDataURL(kk), Sk
      }
      static ReadFile(kk, ek, ik, Dk, fk) {
        return (0, xk.q)(kk, ek, ik, Dk, fk)
      }
      static FileAsURL(kk) {
        const ek = new Blob([kk]);
        return window.URL.createObjectURL(ek)
      }
      static Format(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return kk.toFixed(ek)
      }
      static DeepCopy(kk, ek, ik, Dk) {
        rk.c.DeepCopy(kk, ek, ik, Dk)
      }
      static IsEmpty(kk) {
        for (const ek in kk)
          if (Object.prototype.hasOwnProperty.call(kk, ek)) return !1;
        return !0
      }
      static RegisterTopRootEvents(kk, ek) {
        for (let Dk = 0; Dk < ek.length; Dk++) {
          const fk = ek[Dk];
          kk.addEventListener(fk.name, fk.handler, !1);
          try {
            window.parent && window.parent.addEventListener(fk.name, fk.handler, !1)
          } catch (ik) {}
        }
      }
      static UnregisterTopRootEvents(kk, ek) {
        for (let Dk = 0; Dk < ek.length; Dk++) {
          const fk = ek[Dk];
          kk.removeEventListener(fk.name, fk.handler);
          try {
            kk.parent && kk.parent.removeEventListener(fk.name, fk.handler)
          } catch (ik) {}
        }
      }
      static async DumpFramebuffer(kk, ek, ik, Dk) {
        throw (0, mk.k)("DumpTools")
      }
      static DumpData(kk, ek, ik, Dk) {
        throw (0, mk.k)("DumpTools")
      }
      static async DumpDataAsync(kk, ek, ik) {
        throw (0, mk.k)("DumpTools")
      }
      static _IsOffScreenCanvas(kk) {
        return void 0 !== kk.convertToBlob
      }
      static ToBlob(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          fk = arguments.length > 3 ? arguments[3] : void 0;
        Dk._IsOffScreenCanvas(kk) || kk.toBlob || (kk.toBlob = function(kk, ek, ik) {
          setTimeout((() => {
            const Dk = atob(this.toDataURL(ek, ik).split(",")[1]),
              fk = Dk.length,
              Sk = new Uint8Array(fk);
            for (let kk = 0; kk < fk; kk++) Sk[kk] = Dk.charCodeAt(kk);
            kk(new Blob([Sk]))
          }))
        }), Dk._IsOffScreenCanvas(kk) ? kk.convertToBlob({
          type: ik,
          quality: fk
        }).then((kk => ek(kk))) : kk.toBlob((function(kk) {
          ek(kk)
        }), ik, fk)
      }
      static DownloadBlob(kk, ek) {
        if ("download" in document.createElement("a")) {
          if (!ek) {
            const kk = new Date;
            ek = "screenshot_" + ((kk.getFullYear() + "-" + (kk.getMonth() + 1)).slice(2) + "-" + kk.getDate() + "_" + kk.getHours() + "-" + ("0" + kk.getMinutes()).slice(-2)) + ".png"
          }
          Dk.Download(kk, ek)
        } else if (kk && "undefined" !== typeof URL) {
          const ek = URL.createObjectURL(kk),
            ik = window.open("");
          if (!ik) return;
          const Dk = ik.document.createElement("img");
          Dk.onload = function() {
            URL.revokeObjectURL(ek)
          }, Dk.src = ek, ik.document.body.appendChild(Dk)
        }
      }
      static EncodeScreenshotCanvasData(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          fk = arguments.length > 3 ? arguments[3] : void 0,
          Sk = arguments.length > 4 ? arguments[4] : void 0;
        if ("string" !== typeof fk && ek) {
          if (ek) {
            if (Dk._IsOffScreenCanvas(kk)) return void kk.convertToBlob({
              type: ik,
              quality: Sk
            }).then((kk => {
              const ik = new FileReader;
              ik.readAsDataURL(kk), ik.onloadend = () => {
                const kk = ik.result;
                ek(kk)
              }
            }));
            const fk = kk.toDataURL(ik, Sk);
            ek(fk)
          }
        } else this.ToBlob(kk, (function(kk) {
          kk && Dk.DownloadBlob(kk, fk), ek && ek("")
        }), ik, Sk)
      }
      static Download(kk, ek) {
        if ("undefined" === typeof URL) return;
        const ik = window.URL.createObjectURL(kk),
          Dk = document.createElement("a");
        document.body.appendChild(Dk), Dk.style.display = "none", Dk.href = ik, Dk.download = ek, Dk.addEventListener("click", (() => {
          Dk.parentElement && Dk.parentElement.removeChild(Dk)
        })), Dk.click(), window.URL.revokeObjectURL(ik)
      }
      static BackCompatCameraNoPreventDefault(kk) {
        return "boolean" === typeof kk[0] ? kk[0] : "boolean" === typeof kk[1] && kk[1]
      }
      static CreateScreenshot(kk, ek, ik, Dk) {
        throw (0, mk.k)("ScreenshotTools")
      }
      static async CreateScreenshotAsync(kk, ek, ik) {
        throw (0, mk.k)("ScreenshotTools")
      }
      static CreateScreenshotUsingRenderTarget(kk, ek, ik, Dk) {
        throw (0, mk.k)("ScreenshotTools")
      }
      static async CreateScreenshotUsingRenderTargetAsync(kk, ek, ik) {
        throw (0, mk.k)("ScreenshotTools")
      }
      static RandomId() {
        return (0, Hk.b)()
      }
      static IsBase64(kk) {
        return (0, xk.h)(kk)
      }
      static DecodeBase64(kk) {
        return (0, xk.d)(kk)
      }
      static get errorsCount() {
        return bk.b.errorsCount
      }
      static Log(kk) {
        bk.b.Log(kk)
      }
      static Warn(kk) {
        bk.b.Warn(kk)
      }
      static Error(kk) {
        bk.b.Error(kk)
      }
      static get LogCache() {
        return bk.b.LogCache
      }
      static ClearLogCache() {
        bk.b.ClearLogCache()
      }
      static set LogLevels(kk) {
        bk.b.LogLevels = kk
      }
      static set PerformanceLogLevel(kk) {
        (kk & Dk.PerformanceUserMarkLogLevel) !== Dk.PerformanceUserMarkLogLevel ? (kk & Dk.PerformanceConsoleLogLevel) !== Dk.PerformanceConsoleLogLevel ? (Dk.StartPerformanceCounter = Dk._StartPerformanceCounterDisabled, Dk.EndPerformanceCounter = Dk._EndPerformanceCounterDisabled, _native?.disablePerformanceLogging?.()) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(2), Dk.StartPerformanceCounter = Dk._StartMarkNative, Dk.EndPerformanceCounter = Dk._EndMarkNative) : (Dk.StartPerformanceCounter = Dk._StartPerformanceConsole, Dk.EndPerformanceCounter = Dk._EndPerformanceConsole) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(1), Dk.StartPerformanceCounter = Dk._StartMarkNative, Dk.EndPerformanceCounter = Dk._EndMarkNative) : (Dk.StartPerformanceCounter = Dk._StartUserMark, Dk.EndPerformanceCounter = Dk._EndUserMark)
      }
      static _StartPerformanceCounterDisabled(kk, ek) {}
      static _EndPerformanceCounterDisabled(kk, ek) {}
      static _StartUserMark(kk) {
        let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!Dk._Performance) {
          if (!(0, Sk.i)()) return;
          Dk._Performance = window.performance
        }
        ek && Dk._Performance.mark && Dk._Performance.mark(kk + "-Begin")
      }
      static _EndUserMark(kk) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && Dk._Performance.mark && (Dk._Performance.mark(kk + "-End"), Dk._Performance.measure(kk, kk + "-Begin", kk + "-End"))
      }
      static _StartPerformanceConsole(kk) {
        let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        ek && (Dk._StartUserMark(kk, ek), console.time && console.time(kk))
      }
      static _EndPerformanceConsole(kk) {
        let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        ek && (Dk._EndUserMark(kk, ek), console.timeEnd(kk))
      }
      static _StartMarkNative(kk) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
          if (Dk._NativePerformanceCounterHandles.has(kk)) Dk.Warn(`Performance counter with name ${kk} is already started.`);
          else {
            const ek = _native.startPerformanceCounter(kk);
            Dk._NativePerformanceCounterHandles.set(kk, ek)
          }
      }
      static _EndMarkNative(kk) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
          const ek = Dk._NativePerformanceCounterHandles.get(kk);
          ek ? (_native.endPerformanceCounter(ek), Dk._NativePerformanceCounterHandles.delete(kk)) : Dk.Warn(`Performance counter with name ${kk} was not started.`)
        }
      }
      static get Now() {
        return Pk.d.Now
      }
      static GetClassName(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ik = null;
        if (!ek && kk.getClassName) ik = kk.getClassName();
        else {
          if (kk instanceof Object) {
            ik = (ek ? kk : Object.getPrototypeOf(kk)).constructor.__bjsclassName__
          }
          ik || (ik = typeof kk)
        }
        return ik
      }
      static First(kk, ek) {
        for (const ik of kk)
          if (ek(ik)) return ik;
        return null
      }
      static getFullClassName(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ik = null,
          Dk = null;
        if (!ek && kk.getClassName) ik = kk.getClassName();
        else {
          if (kk instanceof Object) {
            const fk = ek ? kk : Object.getPrototypeOf(kk);
            ik = fk.constructor.__bjsclassName__, Dk = fk.constructor.__bjsmoduleName__
          }
          ik || (ik = typeof kk)
        }
        return ik ? (null != Dk ? Dk + "." : "") + ik : null
      }
      static async DelayAsync(kk) {
        await new Promise((ek => {
          setTimeout((() => {
            ek()
          }), kk)
        }))
      }
      static IsSafari() {
        return !!(0, Sk.f)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }
    }

    function pk(kk, ek) {
      return ik => {
        ik.__bjsclassName__ = kk, ik.__bjsmoduleName__ = null != ek ? ek : null
      }
    }
    Dk = lk, lk.AssetBaseUrl = "", lk.UseCustomRequestHeaders = !1, lk.CustomRequestHeaders = Mk.d.CustomRequestHeaders, lk.GetDOMTextContent = Sk.c, lk._DefaultCdnUrl = "https://cdn.babylonjs.com", lk._CdnVersion = "9.28.0", lk._DefaultAssetsUrl = "https://assets.babylonjs.com/core", lk.LoadScript = "undefined" === typeof _native ? Dk._LoadScriptWeb : Dk._LoadScriptNative, lk.GetAbsoluteUrl = "object" === typeof document ? kk => {
      const ek = document.createElement("a");
      return ek.href = kk, ek.href
    } : "function" === typeof URL && "object" === typeof location ? kk => new URL(kk, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
    }, lk.NoneLogLevel = bk.b.NoneLogLevel, lk.MessageLogLevel = bk.b.MessageLogLevel, lk.WarningLogLevel = bk.b.WarningLogLevel, lk.ErrorLogLevel = bk.b.ErrorLogLevel, lk.AllLogLevel = bk.b.AllLogLevel, lk.IsWindowObjectExist = Sk.i, lk.PerformanceNoneLogLevel = 0, lk.PerformanceUserMarkLogLevel = 1, lk.PerformanceConsoleLogLevel = 2, lk._NativePerformanceCounterHandles = new Map, lk.StartPerformanceCounter = Dk._StartPerformanceCounterDisabled, lk.EndPerformanceCounter = Dk._EndPerformanceCounterDisabled;
    class yk {
      constructor(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.iterations = kk, this.index = Dk - 1, this._done = !1, this._fn = ek, this._successCallback = ik
      }
      executeNext() {
        this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
      }
      breakLoop() {
        this._done = !0, this._successCallback()
      }
      static Run(kk, ek, ik) {
        const Dk = new yk(kk, ek, ik, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return Dk.executeNext(), Dk
      }
      static SyncAsyncForLoop(kk, ek, ik, Dk, fk) {
        let Sk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return yk.Run(Math.ceil(kk / ek), (Dk => {
          fk && fk() ? Dk.breakLoop() : setTimeout((() => {
            for (let Sk = 0; Sk < ek; ++Sk) {
              const bk = Dk.index * ek + Sk;
              if (bk >= kk) break;
              if (ik(bk), fk && fk()) {
                Dk.breakLoop();
                break
              }
            }
            Dk.executeNext()
          }), Sk)
        }), Dk)
      }
    }
    let Yk = !1;

    function Lk() {
      Yk || (Yk = !0, lk.Mix = wk.l, lk.IsExponentOfTwo = wk.j, Kk.e.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z")
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);