export const id = 245;
export const ids = [245];
export const modules = {
  39500: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => ak
    });
    var Rk = Bk(38320),
      tk = Bk(36798);
    class ak {
      static Instantiate(kk) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[kk]) return this.RegisteredExternalClasses[kk];
        const Fk = (0, tk.c)(kk);
        if (Fk) return Fk;
        Rk.b.Warn(kk + " not found, you may have missed an import.");
        const Bk = kk.split(".");
        let ak = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
        for (let Rk = 0, tk = Bk.length; Rk < tk; Rk++) ak = ak[Bk[Rk]];
        return "function" !== typeof ak ? null : ak
      }
    }
    ak.RegisteredExternalClasses = {}
  },
  39307: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => tk
    });
    var Rk = Bk(39281);
    class tk {
      static get Now() {
        return (0, Rk.j)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
      }
    }
  },
  39329: (kk, Fk, Bk) => {
    function Rk(kk) {
      let Fk = 1;
      do {
        Fk *= 2
      } while (Fk < kk);
      return Fk === kk
    }

    function tk(kk, Fk, Bk) {
      return kk * (1 - Bk) + Fk * Bk
    }

    function ak(kk) {
      const Fk = Xk(kk),
        Bk = bk(kk);
      return Fk - kk > kk - Bk ? Bk : Fk
    }

    function Xk(kk) {
      return kk--, kk |= kk >> 1, kk |= kk >> 2, kk |= kk >> 4, kk |= kk >> 8, kk |= kk >> 16, ++kk
    }

    function bk(kk) {
      return kk |= kk >> 1, kk |= kk >> 2, kk |= kk >> 4, kk |= kk >> 8, (kk |= kk >> 16) - (kk >> 1)
    }

    function wk(kk, Fk) {
      let Bk;
      switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
        case 1:
          Bk = bk(kk);
          break;
        case 2:
          Bk = ak(kk);
          break;
        default:
          Bk = Xk(kk)
      }
      return Math.min(Bk, Fk)
    }
    Bk.d(Fk, {
      c: () => bk,
      g: () => wk,
      h: () => Rk,
      j: () => tk,
      k: () => ak
    })
  },
  39492: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => vk,
      f: () => Yk,
      h: () => mk,
      k: () => Wk
    });
    var Rk, tk = Bk(36781),
      ak = Bk(39281),
      Xk = Bk(38320),
      bk = Bk(38318),
      wk = Bk(39307),
      dk = Bk(39296),
      sk = Bk(39445),
      Vk = Bk(36772),
      Jk = Bk(39436),
      Ak = Bk(39302),
      ek = Bk(39500),
      yk = Bk(37578),
      fk = Bk(39329);
    class mk {
      static get BaseUrl() {
        return Jk.d.BaseUrl
      }
      static set BaseUrl(kk) {
        Jk.d.BaseUrl = kk
      }
      static get CleanUrl() {
        return Jk.d.CleanUrl
      }
      static set CleanUrl(kk) {
        Jk.d.CleanUrl = kk
      }
      static IsAbsoluteUrl(kk) {
        return 0 === kk.indexOf("//") || -1 !== kk.indexOf("://") && (-1 !== kk.indexOf(".") && (-1 !== kk.indexOf("/") && (!(kk.indexOf(":") > kk.indexOf("/")) && (kk.indexOf("://") < kk.indexOf(".") || (0 === kk.indexOf("data:") || 0 === kk.indexOf("blob:"))))))
      }
      static set ScriptBaseUrl(kk) {
        Jk.d.ScriptBaseUrl = kk
      }
      static get ScriptBaseUrl() {
        return Jk.d.ScriptBaseUrl
      }
      static set CDNBaseUrl(kk) {
        Rk.ScriptBaseUrl = kk, Rk.AssetBaseUrl = kk
      }
      static set ScriptPreprocessUrl(kk) {
        Jk.d.ScriptPreprocessUrl = kk
      }
      static get ScriptPreprocessUrl() {
        return Jk.d.ScriptPreprocessUrl
      }
      static get DefaultRetryStrategy() {
        return Jk.d.DefaultRetryStrategy
      }
      static set DefaultRetryStrategy(kk) {
        Jk.d.DefaultRetryStrategy = kk
      }
      static get CorsBehavior() {
        return Jk.d.CorsBehavior
      }
      static set CorsBehavior(kk) {
        Jk.d.CorsBehavior = kk
      }
      static get UseFallbackTexture() {
        return Vk.c.UseFallbackTexture
      }
      static set UseFallbackTexture(kk) {
        Vk.c.UseFallbackTexture = kk
      }
      static get RegisteredExternalClasses() {
        return ek.c.RegisteredExternalClasses
      }
      static set RegisteredExternalClasses(kk) {
        ek.c.RegisteredExternalClasses = kk
      }
      static get fallbackTexture() {
        return Vk.c.FallbackTexture
      }
      static set fallbackTexture(kk) {
        Vk.c.FallbackTexture = kk
      }
      static FetchToRef(kk, Fk, Bk, Rk, tk, ak) {
        const Xk = 4 * ((Math.abs(kk) * Bk % Bk | 0) + (Math.abs(Fk) * Rk % Rk | 0) * Bk);
        ak.r = tk[Xk] / 255, ak.g = tk[Xk + 1] / 255, ak.b = tk[Xk + 2] / 255, ak.a = tk[Xk + 3] / 255
      }
      static Mix(kk, Fk, Bk) {
        return 0
      }
      static Instantiate(kk) {
        return ek.c.Instantiate(kk)
      }
      static SetImmediate(kk) {
        Ak.e.SetImmediate(kk)
      }
      static IsExponentOfTwo(kk) {
        return !0
      }
      static FloatRound(kk) {
        return Math.fround(kk)
      }
      static GetFilename(kk) {
        const Fk = kk.lastIndexOf("/");
        return Fk < 0 ? kk : kk.substring(Fk + 1)
      }
      static GetFolderPath(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Bk = kk.lastIndexOf("/");
        return Bk < 0 ? Fk ? kk : "" : kk.substring(0, Bk + 1)
      }
      static ToDegrees(kk) {
        return 180 * kk / Math.PI
      }
      static ToRadians(kk) {
        return kk * Math.PI / 180
      }
      static SmoothAngleChange(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
        const Rk = this.ToRadians(kk),
          tk = this.ToRadians(Fk);
        return this.ToDegrees(Math.atan2((1 - Bk) * Math.sin(tk) + Bk * Math.sin(Rk), (1 - Bk) * Math.cos(tk) + Bk * Math.cos(Rk)))
      }
      static MakeArray(kk, Fk) {
        return !0 === Fk || void 0 !== kk && null != kk ? Array.isArray(kk) ? kk : [kk] : null
      }
      static GetPointerPrefix(kk) {
        return (0, ak.j)() && !window.PointerEvent ? "mouse" : "pointer"
      }
      static SetCorsBehavior(kk, Fk) {
        (0, Jk.v)(kk, Fk)
      }
      static SetReferrerPolicyBehavior(kk, Fk) {
        Fk.referrerPolicy = kk
      }
      static get PreprocessUrl() {
        return Jk.d.PreprocessUrl
      }
      static set PreprocessUrl(kk) {
        Jk.d.PreprocessUrl = kk
      }
      static LoadImage(kk, Fk, Bk, Rk, tk, ak) {
        return (0, Jk.j)(kk, Fk, Bk, Rk, tk, ak)
      }
      static LoadFile(kk, Fk, Bk, Rk, tk, ak) {
        return (0, Jk.i)(kk, Fk, Bk, Rk, tk, ak)
      }
      static async LoadFileAsync(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return await new Promise(((Bk, Rk) => {
          (0, Jk.i)(kk, (kk => {
            Bk(kk)
          }), void 0, void 0, Fk, ((kk, Fk) => {
            Rk(Fk)
          }))
        }))
      }
      static GetAssetUrl(kk) {
        if (!kk) return "";
        if (Rk.AssetBaseUrl && kk.startsWith(Rk._DefaultAssetsUrl)) {
          const Fk = Rk.AssetBaseUrl.endsWith("/") ? Rk.AssetBaseUrl.slice(0, -1) : Rk.AssetBaseUrl;
          return kk.replace(Rk._DefaultAssetsUrl, Fk)
        }
        return kk
      }
      static GetBabylonScriptURL(kk, Fk) {
        if (!kk) return "";
        if (kk.startsWith(Rk._DefaultCdnUrl))
          if (Rk.ScriptBaseUrl) {
            const Fk = Rk.ScriptBaseUrl.endsWith("/") ? Rk.ScriptBaseUrl.slice(0, -1) : Rk.ScriptBaseUrl;
            kk = kk.replace(Rk._DefaultCdnUrl, Fk)
          } else if (Rk._CdnVersion) {
          const Fk = `${Rk._DefaultCdnUrl}/v${Rk._CdnVersion}`;
          kk.startsWith(Fk) || (kk = kk.replace(Rk._DefaultCdnUrl, Fk))
        }
        return kk = Rk.ScriptPreprocessUrl(kk), Fk && !Rk.IsAbsoluteUrl(kk) && (kk = Rk.GetAbsoluteUrl(kk)), kk
      }
      static LoadBabylonScript(kk, Fk, Bk, tk) {
        kk = Rk.GetBabylonScriptURL(kk), Rk.LoadScript(kk, Fk, Bk)
      }
      static async LoadBabylonScriptAsync(kk) {
        return kk = Rk.GetBabylonScriptURL(kk), await Rk.LoadScriptAsync(kk)
      }
      static _LoadScriptNative(kk, Fk, Bk, tk) {
        if (_native) {
          if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
            const kk = "Loading a script as an ES module is not supported in Babylon Native";
            return void Bk?.(kk, new Error(kk))
          }
          Rk.LoadFile(kk, (kk => {
            try {
              Function(kk).apply(null), Fk && Fk()
            } catch (Rk) {
              Bk && Bk("LoadScript Error", Rk)
            }
          }), void 0, void 0, !1, ((kk, Fk) => {
            Bk && Bk("LoadScript Error", Fk)
          }))
        }
      }
      static _LoadScriptWeb(kk, Fk, Bk, Rk) {
        let tk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" === typeof importScripts) {
          try {
            importScripts(kk), Fk && Fk()
          } catch (wk) {
            Bk?.(`Unable to load script '${kk}' in worker`, wk)
          }
          return
        }
        if (!(0, ak.j)()) return void Bk?.(`Cannot load script '${kk}' outside of a window or a worker`);
        const Xk = document.getElementsByTagName("head")[0],
          bk = document.createElement("script");
        tk ? (bk.setAttribute("type", "module"), bk.innerText = kk) : (bk.setAttribute("type", "text/javascript"), bk.setAttribute("src", kk)), Rk && (bk.id = Rk), bk.onload = () => {
          Fk && Fk()
        }, bk.onerror = Fk => {
          Bk && Bk(`Unable to load script '${kk}'`, Fk)
        }, Xk.appendChild(bk)
      }
      static async LoadScriptAsync(kk, Fk) {
        return await new Promise(((Bk, Rk) => {
          this.LoadScript(kk, (() => {
            Bk()
          }), ((kk, Fk) => {
            Rk(Fk || new Error(kk))
          }), Fk)
        }))
      }
      static ReadFileAsDataURL(kk, Fk, Bk) {
        const Rk = new FileReader,
          ak = {
            onCompleteObservable: new tk.e,
            abort: () => Rk.abort()
          };
        return Rk.onloadend = () => {
          ak.onCompleteObservable.notifyObservers(ak)
        }, Rk.onload = kk => {
          Fk(kk.target.result)
        }, Rk.onprogress = Bk, Rk.readAsDataURL(kk), ak
      }
      static ReadFile(kk, Fk, Bk, Rk, tk) {
        return (0, Jk.m)(kk, Fk, Bk, Rk, tk)
      }
      static FileAsURL(kk) {
        const Fk = new Blob([kk]);
        return window.URL.createObjectURL(Fk)
      }
      static Format(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return kk.toFixed(Fk)
      }
      static DeepCopy(kk, Fk, Bk, Rk) {
        bk.e.DeepCopy(kk, Fk, Bk, Rk)
      }
      static IsEmpty(kk) {
        for (const Fk in kk)
          if (Object.prototype.hasOwnProperty.call(kk, Fk)) return !1;
        return !0
      }
      static RegisterTopRootEvents(kk, Fk) {
        for (let Rk = 0; Rk < Fk.length; Rk++) {
          const tk = Fk[Rk];
          kk.addEventListener(tk.name, tk.handler, !1);
          try {
            window.parent && window.parent.addEventListener(tk.name, tk.handler, !1)
          } catch (Bk) {}
        }
      }
      static UnregisterTopRootEvents(kk, Fk) {
        for (let Rk = 0; Rk < Fk.length; Rk++) {
          const tk = Fk[Rk];
          kk.removeEventListener(tk.name, tk.handler);
          try {
            kk.parent && kk.parent.removeEventListener(tk.name, tk.handler)
          } catch (Bk) {}
        }
      }
      static async DumpFramebuffer(kk, Fk, Bk, Rk) {
        throw (0, dk.i)("DumpTools")
      }
      static DumpData(kk, Fk, Bk, Rk) {
        throw (0, dk.i)("DumpTools")
      }
      static async DumpDataAsync(kk, Fk, Bk) {
        throw (0, dk.i)("DumpTools")
      }
      static _IsOffScreenCanvas(kk) {
        return void 0 !== kk.convertToBlob
      }
      static ToBlob(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          tk = arguments.length > 3 ? arguments[3] : void 0;
        Rk._IsOffScreenCanvas(kk) || kk.toBlob || (kk.toBlob = function(kk, Fk, Bk) {
          setTimeout((() => {
            const Rk = atob(this.toDataURL(Fk, Bk).split(",")[1]),
              tk = Rk.length,
              ak = new Uint8Array(tk);
            for (let kk = 0; kk < tk; kk++) ak[kk] = Rk.charCodeAt(kk);
            kk(new Blob([ak]))
          }))
        }), Rk._IsOffScreenCanvas(kk) ? kk.convertToBlob({
          type: Bk,
          quality: tk
        }).then((kk => Fk(kk))) : kk.toBlob((function(kk) {
          Fk(kk)
        }), Bk, tk)
      }
      static DownloadBlob(kk, Fk) {
        if ("download" in document.createElement("a")) {
          if (!Fk) {
            const kk = new Date;
            Fk = "screenshot_" + ((kk.getFullYear() + "-" + (kk.getMonth() + 1)).slice(2) + "-" + kk.getDate() + "_" + kk.getHours() + "-" + ("0" + kk.getMinutes()).slice(-2)) + ".png"
          }
          Rk.Download(kk, Fk)
        } else if (kk && "undefined" !== typeof URL) {
          const Fk = URL.createObjectURL(kk),
            Bk = window.open("");
          if (!Bk) return;
          const Rk = Bk.document.createElement("img");
          Rk.onload = function() {
            URL.revokeObjectURL(Fk)
          }, Rk.src = Fk, Bk.document.body.appendChild(Rk)
        }
      }
      static EncodeScreenshotCanvasData(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          tk = arguments.length > 3 ? arguments[3] : void 0,
          ak = arguments.length > 4 ? arguments[4] : void 0;
        if ("string" !== typeof tk && Fk) {
          if (Fk) {
            if (Rk._IsOffScreenCanvas(kk)) return void kk.convertToBlob({
              type: Bk,
              quality: ak
            }).then((kk => {
              const Bk = new FileReader;
              Bk.readAsDataURL(kk), Bk.onloadend = () => {
                const kk = Bk.result;
                Fk(kk)
              }
            }));
            const tk = kk.toDataURL(Bk, ak);
            Fk(tk)
          }
        } else this.ToBlob(kk, (function(kk) {
          kk && Rk.DownloadBlob(kk, tk), Fk && Fk("")
        }), Bk, ak)
      }
      static Download(kk, Fk) {
        if ("undefined" === typeof URL) return;
        const Bk = window.URL.createObjectURL(kk),
          Rk = document.createElement("a");
        document.body.appendChild(Rk), Rk.style.display = "none", Rk.href = Bk, Rk.download = Fk, Rk.addEventListener("click", (() => {
          Rk.parentElement && Rk.parentElement.removeChild(Rk)
        })), Rk.click(), window.URL.revokeObjectURL(Bk)
      }
      static BackCompatCameraNoPreventDefault(kk) {
        return "boolean" === typeof kk[0] ? kk[0] : "boolean" === typeof kk[1] && kk[1]
      }
      static CreateScreenshot(kk, Fk, Bk, Rk) {
        throw (0, dk.i)("ScreenshotTools")
      }
      static async CreateScreenshotAsync(kk, Fk, Bk) {
        throw (0, dk.i)("ScreenshotTools")
      }
      static CreateScreenshotUsingRenderTarget(kk, Fk, Bk, Rk) {
        throw (0, dk.i)("ScreenshotTools")
      }
      static async CreateScreenshotUsingRenderTargetAsync(kk, Fk, Bk) {
        throw (0, dk.i)("ScreenshotTools")
      }
      static RandomId() {
        return (0, yk.e)()
      }
      static IsBase64(kk) {
        return (0, Jk.h)(kk)
      }
      static DecodeBase64(kk) {
        return (0, Jk.c)(kk)
      }
      static get errorsCount() {
        return Xk.b.errorsCount
      }
      static Log(kk) {
        Xk.b.Log(kk)
      }
      static Warn(kk) {
        Xk.b.Warn(kk)
      }
      static Error(kk) {
        Xk.b.Error(kk)
      }
      static get LogCache() {
        return Xk.b.LogCache
      }
      static ClearLogCache() {
        Xk.b.ClearLogCache()
      }
      static set LogLevels(kk) {
        Xk.b.LogLevels = kk
      }
      static set PerformanceLogLevel(kk) {
        (kk & Rk.PerformanceUserMarkLogLevel) !== Rk.PerformanceUserMarkLogLevel ? (kk & Rk.PerformanceConsoleLogLevel) !== Rk.PerformanceConsoleLogLevel ? (Rk.StartPerformanceCounter = Rk._StartPerformanceCounterDisabled, Rk.EndPerformanceCounter = Rk._EndPerformanceCounterDisabled, _native?.disablePerformanceLogging?.()) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(2), Rk.StartPerformanceCounter = Rk._StartMarkNative, Rk.EndPerformanceCounter = Rk._EndMarkNative) : (Rk.StartPerformanceCounter = Rk._StartPerformanceConsole, Rk.EndPerformanceCounter = Rk._EndPerformanceConsole) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(1), Rk.StartPerformanceCounter = Rk._StartMarkNative, Rk.EndPerformanceCounter = Rk._EndMarkNative) : (Rk.StartPerformanceCounter = Rk._StartUserMark, Rk.EndPerformanceCounter = Rk._EndUserMark)
      }
      static _StartPerformanceCounterDisabled(kk, Fk) {}
      static _EndPerformanceCounterDisabled(kk, Fk) {}
      static _StartUserMark(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!Rk._Performance) {
          if (!(0, ak.j)()) return;
          Rk._Performance = window.performance
        }
        Fk && Rk._Performance.mark && Rk._Performance.mark(kk + "-Begin")
      }
      static _EndUserMark(kk) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && Rk._Performance.mark && (Rk._Performance.mark(kk + "-End"), Rk._Performance.measure(kk, kk + "-Begin", kk + "-End"))
      }
      static _StartPerformanceConsole(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        Fk && (Rk._StartUserMark(kk, Fk), console.time && console.time(kk))
      }
      static _EndPerformanceConsole(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        Fk && (Rk._EndUserMark(kk, Fk), console.timeEnd(kk))
      }
      static _StartMarkNative(kk) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
          if (Rk._NativePerformanceCounterHandles.has(kk)) Rk.Warn(`Performance counter with name ${kk} is already started.`);
          else {
            const Fk = _native.startPerformanceCounter(kk);
            Rk._NativePerformanceCounterHandles.set(kk, Fk)
          }
      }
      static _EndMarkNative(kk) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
          const Fk = Rk._NativePerformanceCounterHandles.get(kk);
          Fk ? (_native.endPerformanceCounter(Fk), Rk._NativePerformanceCounterHandles.delete(kk)) : Rk.Warn(`Performance counter with name ${kk} was not started.`)
        }
      }
      static get Now() {
        return wk.e.Now
      }
      static GetClassName(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Bk = null;
        if (!Fk && kk.getClassName) Bk = kk.getClassName();
        else {
          if (kk instanceof Object) {
            Bk = (Fk ? kk : Object.getPrototypeOf(kk)).constructor.__bjsclassName__
          }
          Bk || (Bk = typeof kk)
        }
        return Bk
      }
      static First(kk, Fk) {
        for (const Bk of kk)
          if (Fk(Bk)) return Bk;
        return null
      }
      static getFullClassName(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Bk = null,
          Rk = null;
        if (!Fk && kk.getClassName) Bk = kk.getClassName();
        else {
          if (kk instanceof Object) {
            const tk = Fk ? kk : Object.getPrototypeOf(kk);
            Bk = tk.constructor.__bjsclassName__, Rk = tk.constructor.__bjsmoduleName__
          }
          Bk || (Bk = typeof kk)
        }
        return Bk ? (null != Rk ? Rk + "." : "") + Bk : null
      }
      static async DelayAsync(kk) {
        await new Promise((Fk => {
          setTimeout((() => {
            Fk()
          }), kk)
        }))
      }
      static IsSafari() {
        return !!(0, ak.g)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }
    }

    function Wk(kk, Fk) {
      return Bk => {
        Bk.__bjsclassName__ = kk, Bk.__bjsmoduleName__ = null != Fk ? Fk : null
      }
    }
    Rk = mk, mk.AssetBaseUrl = "", mk.UseCustomRequestHeaders = !1, mk.CustomRequestHeaders = sk.d.CustomRequestHeaders, mk.GetDOMTextContent = ak.d, mk._DefaultCdnUrl = "https://cdn.babylonjs.com", mk._CdnVersion = "9.28.0", mk._DefaultAssetsUrl = "https://assets.babylonjs.com/core", mk.LoadScript = "undefined" === typeof _native ? Rk._LoadScriptWeb : Rk._LoadScriptNative, mk.GetAbsoluteUrl = "object" === typeof document ? kk => {
      const Fk = document.createElement("a");
      return Fk.href = kk, Fk.href
    } : "function" === typeof URL && "object" === typeof location ? kk => new URL(kk, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
    }, mk.NoneLogLevel = Xk.b.NoneLogLevel, mk.MessageLogLevel = Xk.b.MessageLogLevel, mk.WarningLogLevel = Xk.b.WarningLogLevel, mk.ErrorLogLevel = Xk.b.ErrorLogLevel, mk.AllLogLevel = Xk.b.AllLogLevel, mk.IsWindowObjectExist = ak.j, mk.PerformanceNoneLogLevel = 0, mk.PerformanceUserMarkLogLevel = 1, mk.PerformanceConsoleLogLevel = 2, mk._NativePerformanceCounterHandles = new Map, mk.StartPerformanceCounter = Rk._StartPerformanceCounterDisabled, mk.EndPerformanceCounter = Rk._EndPerformanceCounterDisabled;
    class vk {
      constructor(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.iterations = kk, this.index = Rk - 1, this._done = !1, this._fn = Fk, this._successCallback = Bk
      }
      executeNext() {
        this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
      }
      breakLoop() {
        this._done = !0, this._successCallback()
      }
      static Run(kk, Fk, Bk) {
        const Rk = new vk(kk, Fk, Bk, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return Rk.executeNext(), Rk
      }
      static SyncAsyncForLoop(kk, Fk, Bk, Rk, tk) {
        let ak = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return vk.Run(Math.ceil(kk / Fk), (Rk => {
          tk && tk() ? Rk.breakLoop() : setTimeout((() => {
            for (let ak = 0; ak < Fk; ++ak) {
              const Xk = Rk.index * Fk + ak;
              if (Xk >= kk) break;
              if (Bk(Xk), tk && tk()) {
                Rk.breakLoop();
                break
              }
            }
            Rk.executeNext()
          }), ak)
        }), Rk)
      }
    }
    let ik = !1;

    function Yk() {
      ik || (ik = !0, mk.Mix = fk.j, mk.IsExponentOfTwo = fk.h, Vk.c.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z")
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);