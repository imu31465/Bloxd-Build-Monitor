export const id = 255;
export const ids = [255];
export const modules = {
  40099: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => ik
    });
    var Xk = Ik(38674),
      Tk = Ik(37201);
    class ik {
      static Instantiate(kk) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[kk]) return this.RegisteredExternalClasses[kk];
        const Fk = (0, Tk.b)(kk);
        if (Fk) return Fk;
        Xk.e.Warn(kk + " not found, you may have missed an import.");
        const Ik = kk.split(".");
        let ik = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
        for (let Xk = 0, Tk = Ik.length; Xk < Tk; Xk++) ik = ik[Ik[Xk]];
        return "function" !== typeof ik ? null : ik
      }
    }
    ik.RegisteredExternalClasses = {}
  },
  39891: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Tk
    });
    var Xk = Ik(39850);
    class Tk {
      static get Now() {
        return (0, Xk.j)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
      }
    }
  },
  39923: (kk, Fk, Ik) => {
    function Xk(kk) {
      let Fk = 1;
      do {
        Fk *= 2
      } while (Fk < kk);
      return Fk === kk
    }

    function Tk(kk, Fk, Ik) {
      return kk * (1 - Ik) + Fk * Ik
    }

    function ik(kk) {
      const Fk = yk(kk),
        Ik = lk(kk);
      return Fk - kk > kk - Ik ? Ik : Fk
    }

    function yk(kk) {
      return kk--, kk |= kk >> 1, kk |= kk >> 2, kk |= kk >> 4, kk |= kk >> 8, kk |= kk >> 16, ++kk
    }

    function lk(kk) {
      return kk |= kk >> 1, kk |= kk >> 2, kk |= kk >> 4, kk |= kk >> 8, (kk |= kk >> 16) - (kk >> 1)
    }

    function ak(kk, Fk) {
      let Ik;
      switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
        case 1:
          Ik = lk(kk);
          break;
        case 2:
          Ik = ik(kk);
          break;
        default:
          Ik = yk(kk)
      }
      return Math.min(Ik, Fk)
    }
    Ik.d(Fk, {
      d: () => lk,
      g: () => ak,
      j: () => Xk,
      l: () => Tk,
      o: () => ik
    })
  },
  40097: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Pk,
      e: () => Qk,
      h: () => Jk,
      k: () => xk
    });
    var Xk, Tk = Ik(37187),
      ik = Ik(39850),
      yk = Ik(38674),
      lk = Ik(38666),
      ak = Ik(39891),
      qk = Ik(39863),
      Lk = Ik(40040),
      tk = Ik(37178),
      Zk = Ik(40038),
      jk = Ik(39878),
      ek = Ik(40099),
      wk = Ik(37902),
      Hk = Ik(39923);
    class Jk {
      static get BaseUrl() {
        return Zk.h.BaseUrl
      }
      static set BaseUrl(kk) {
        Zk.h.BaseUrl = kk
      }
      static get CleanUrl() {
        return Zk.h.CleanUrl
      }
      static set CleanUrl(kk) {
        Zk.h.CleanUrl = kk
      }
      static IsAbsoluteUrl(kk) {
        return 0 === kk.indexOf("//") || -1 !== kk.indexOf("://") && (-1 !== kk.indexOf(".") && (-1 !== kk.indexOf("/") && (!(kk.indexOf(":") > kk.indexOf("/")) && (kk.indexOf("://") < kk.indexOf(".") || (0 === kk.indexOf("data:") || 0 === kk.indexOf("blob:"))))))
      }
      static set ScriptBaseUrl(kk) {
        Zk.h.ScriptBaseUrl = kk
      }
      static get ScriptBaseUrl() {
        return Zk.h.ScriptBaseUrl
      }
      static set CDNBaseUrl(kk) {
        Xk.ScriptBaseUrl = kk, Xk.AssetBaseUrl = kk
      }
      static set ScriptPreprocessUrl(kk) {
        Zk.h.ScriptPreprocessUrl = kk
      }
      static get ScriptPreprocessUrl() {
        return Zk.h.ScriptPreprocessUrl
      }
      static get DefaultRetryStrategy() {
        return Zk.h.DefaultRetryStrategy
      }
      static set DefaultRetryStrategy(kk) {
        Zk.h.DefaultRetryStrategy = kk
      }
      static get CorsBehavior() {
        return Zk.h.CorsBehavior
      }
      static set CorsBehavior(kk) {
        Zk.h.CorsBehavior = kk
      }
      static get UseFallbackTexture() {
        return tk.e.UseFallbackTexture
      }
      static set UseFallbackTexture(kk) {
        tk.e.UseFallbackTexture = kk
      }
      static get RegisteredExternalClasses() {
        return ek.d.RegisteredExternalClasses
      }
      static set RegisteredExternalClasses(kk) {
        ek.d.RegisteredExternalClasses = kk
      }
      static get fallbackTexture() {
        return tk.e.FallbackTexture
      }
      static set fallbackTexture(kk) {
        tk.e.FallbackTexture = kk
      }
      static FetchToRef(kk, Fk, Ik, Xk, Tk, ik) {
        const yk = 4 * ((Math.abs(kk) * Ik % Ik | 0) + (Math.abs(Fk) * Xk % Xk | 0) * Ik);
        ik.r = Tk[yk] / 255, ik.g = Tk[yk + 1] / 255, ik.b = Tk[yk + 2] / 255, ik.a = Tk[yk + 3] / 255
      }
      static Mix(kk, Fk, Ik) {
        return 0
      }
      static Instantiate(kk) {
        return ek.d.Instantiate(kk)
      }
      static SetImmediate(kk) {
        jk.d.SetImmediate(kk)
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
        const Ik = kk.lastIndexOf("/");
        return Ik < 0 ? Fk ? kk : "" : kk.substring(0, Ik + 1)
      }
      static ToDegrees(kk) {
        return 180 * kk / Math.PI
      }
      static ToRadians(kk) {
        return kk * Math.PI / 180
      }
      static SmoothAngleChange(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
        const Xk = this.ToRadians(kk),
          Tk = this.ToRadians(Fk);
        return this.ToDegrees(Math.atan2((1 - Ik) * Math.sin(Tk) + Ik * Math.sin(Xk), (1 - Ik) * Math.cos(Tk) + Ik * Math.cos(Xk)))
      }
      static MakeArray(kk, Fk) {
        return !0 === Fk || void 0 !== kk && null != kk ? Array.isArray(kk) ? kk : [kk] : null
      }
      static GetPointerPrefix(kk) {
        return (0, ik.j)() && !window.PointerEvent ? "mouse" : "pointer"
      }
      static SetCorsBehavior(kk, Fk) {
        (0, Zk.B)(kk, Fk)
      }
      static SetReferrerPolicyBehavior(kk, Fk) {
        Fk.referrerPolicy = kk
      }
      static get PreprocessUrl() {
        return Zk.h.PreprocessUrl
      }
      static set PreprocessUrl(kk) {
        Zk.h.PreprocessUrl = kk
      }
      static LoadImage(kk, Fk, Ik, Xk, Tk, ik) {
        return (0, Zk.t)(kk, Fk, Ik, Xk, Tk, ik)
      }
      static LoadFile(kk, Fk, Ik, Xk, Tk, ik) {
        return (0, Zk.p)(kk, Fk, Ik, Xk, Tk, ik)
      }
      static async LoadFileAsync(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return await new Promise(((Ik, Xk) => {
          (0, Zk.p)(kk, (kk => {
            Ik(kk)
          }), void 0, void 0, Fk, ((kk, Fk) => {
            Xk(Fk)
          }))
        }))
      }
      static GetAssetUrl(kk) {
        if (!kk) return "";
        if (Xk.AssetBaseUrl && kk.startsWith(Xk._DefaultAssetsUrl)) {
          const Fk = Xk.AssetBaseUrl.endsWith("/") ? Xk.AssetBaseUrl.slice(0, -1) : Xk.AssetBaseUrl;
          return kk.replace(Xk._DefaultAssetsUrl, Fk)
        }
        return kk
      }
      static GetBabylonScriptURL(kk, Fk) {
        if (!kk) return "";
        if (kk.startsWith(Xk._DefaultCdnUrl))
          if (Xk.ScriptBaseUrl) {
            const Fk = Xk.ScriptBaseUrl.endsWith("/") ? Xk.ScriptBaseUrl.slice(0, -1) : Xk.ScriptBaseUrl;
            kk = kk.replace(Xk._DefaultCdnUrl, Fk)
          } else if (Xk._CdnVersion) {
          const Fk = `${Xk._DefaultCdnUrl}/v${Xk._CdnVersion}`;
          kk.startsWith(Fk) || (kk = kk.replace(Xk._DefaultCdnUrl, Fk))
        }
        return kk = Xk.ScriptPreprocessUrl(kk), Fk && !Xk.IsAbsoluteUrl(kk) && (kk = Xk.GetAbsoluteUrl(kk)), kk
      }
      static LoadBabylonScript(kk, Fk, Ik, Tk) {
        kk = Xk.GetBabylonScriptURL(kk), Xk.LoadScript(kk, Fk, Ik)
      }
      static async LoadBabylonScriptAsync(kk) {
        return kk = Xk.GetBabylonScriptURL(kk), await Xk.LoadScriptAsync(kk)
      }
      static _LoadScriptNative(kk, Fk, Ik, Tk) {
        if (_native) {
          if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
            const kk = "Loading a script as an ES module is not supported in Babylon Native";
            return void Ik?.(kk, new Error(kk))
          }
          Xk.LoadFile(kk, (kk => {
            try {
              Function(kk).apply(null), Fk && Fk()
            } catch (Xk) {
              Ik && Ik("LoadScript Error", Xk)
            }
          }), void 0, void 0, !1, ((kk, Fk) => {
            Ik && Ik("LoadScript Error", Fk)
          }))
        }
      }
      static _LoadScriptWeb(kk, Fk, Ik, Xk) {
        let Tk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" === typeof importScripts) {
          try {
            importScripts(kk), Fk && Fk()
          } catch (ak) {
            Ik?.(`Unable to load script '${kk}' in worker`, ak)
          }
          return
        }
        if (!(0, ik.j)()) return void Ik?.(`Cannot load script '${kk}' outside of a window or a worker`);
        const yk = document.getElementsByTagName("head")[0],
          lk = document.createElement("script");
        Tk ? (lk.setAttribute("type", "module"), lk.innerText = kk) : (lk.setAttribute("type", "text/javascript"), lk.setAttribute("src", kk)), Xk && (lk.id = Xk), lk.onload = () => {
          Fk && Fk()
        }, lk.onerror = Fk => {
          Ik && Ik(`Unable to load script '${kk}'`, Fk)
        }, yk.appendChild(lk)
      }
      static async LoadScriptAsync(kk, Fk) {
        return await new Promise(((Ik, Xk) => {
          this.LoadScript(kk, (() => {
            Ik()
          }), ((kk, Fk) => {
            Xk(Fk || new Error(kk))
          }), Fk)
        }))
      }
      static ReadFileAsDataURL(kk, Fk, Ik) {
        const Xk = new FileReader,
          ik = {
            onCompleteObservable: new Tk.e,
            abort: () => Xk.abort()
          };
        return Xk.onloadend = () => {
          ik.onCompleteObservable.notifyObservers(ik)
        }, Xk.onload = kk => {
          Fk(kk.target.result)
        }, Xk.onprogress = Ik, Xk.readAsDataURL(kk), ik
      }
      static ReadFile(kk, Fk, Ik, Xk, Tk) {
        return (0, Zk.w)(kk, Fk, Ik, Xk, Tk)
      }
      static FileAsURL(kk) {
        const Fk = new Blob([kk]);
        return window.URL.createObjectURL(Fk)
      }
      static Format(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return kk.toFixed(Fk)
      }
      static DeepCopy(kk, Fk, Ik, Xk) {
        lk.c.DeepCopy(kk, Fk, Ik, Xk)
      }
      static IsEmpty(kk) {
        for (const Fk in kk)
          if (Object.prototype.hasOwnProperty.call(kk, Fk)) return !1;
        return !0
      }
      static RegisterTopRootEvents(kk, Fk) {
        for (let Xk = 0; Xk < Fk.length; Xk++) {
          const Tk = Fk[Xk];
          kk.addEventListener(Tk.name, Tk.handler, !1);
          try {
            window.parent && window.parent.addEventListener(Tk.name, Tk.handler, !1)
          } catch (Ik) {}
        }
      }
      static UnregisterTopRootEvents(kk, Fk) {
        for (let Xk = 0; Xk < Fk.length; Xk++) {
          const Tk = Fk[Xk];
          kk.removeEventListener(Tk.name, Tk.handler);
          try {
            kk.parent && kk.parent.removeEventListener(Tk.name, Tk.handler)
          } catch (Ik) {}
        }
      }
      static async DumpFramebuffer(kk, Fk, Ik, Xk) {
        throw (0, qk.j)("DumpTools")
      }
      static DumpData(kk, Fk, Ik, Xk) {
        throw (0, qk.j)("DumpTools")
      }
      static async DumpDataAsync(kk, Fk, Ik) {
        throw (0, qk.j)("DumpTools")
      }
      static _IsOffScreenCanvas(kk) {
        return void 0 !== kk.convertToBlob
      }
      static ToBlob(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          Tk = arguments.length > 3 ? arguments[3] : void 0;
        Xk._IsOffScreenCanvas(kk) || kk.toBlob || (kk.toBlob = function(kk, Fk, Ik) {
          setTimeout((() => {
            const Xk = atob(this.toDataURL(Fk, Ik).split(",")[1]),
              Tk = Xk.length,
              ik = new Uint8Array(Tk);
            for (let kk = 0; kk < Tk; kk++) ik[kk] = Xk.charCodeAt(kk);
            kk(new Blob([ik]))
          }))
        }), Xk._IsOffScreenCanvas(kk) ? kk.convertToBlob({
          type: Ik,
          quality: Tk
        }).then((kk => Fk(kk))) : kk.toBlob((function(kk) {
          Fk(kk)
        }), Ik, Tk)
      }
      static DownloadBlob(kk, Fk) {
        if ("download" in document.createElement("a")) {
          if (!Fk) {
            const kk = new Date;
            Fk = "screenshot_" + ((kk.getFullYear() + "-" + (kk.getMonth() + 1)).slice(2) + "-" + kk.getDate() + "_" + kk.getHours() + "-" + ("0" + kk.getMinutes()).slice(-2)) + ".png"
          }
          Xk.Download(kk, Fk)
        } else if (kk && "undefined" !== typeof URL) {
          const Fk = URL.createObjectURL(kk),
            Ik = window.open("");
          if (!Ik) return;
          const Xk = Ik.document.createElement("img");
          Xk.onload = function() {
            URL.revokeObjectURL(Fk)
          }, Xk.src = Fk, Ik.document.body.appendChild(Xk)
        }
      }
      static EncodeScreenshotCanvasData(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          Tk = arguments.length > 3 ? arguments[3] : void 0,
          ik = arguments.length > 4 ? arguments[4] : void 0;
        if ("string" !== typeof Tk && Fk) {
          if (Fk) {
            if (Xk._IsOffScreenCanvas(kk)) return void kk.convertToBlob({
              type: Ik,
              quality: ik
            }).then((kk => {
              const Ik = new FileReader;
              Ik.readAsDataURL(kk), Ik.onloadend = () => {
                const kk = Ik.result;
                Fk(kk)
              }
            }));
            const Tk = kk.toDataURL(Ik, ik);
            Fk(Tk)
          }
        } else this.ToBlob(kk, (function(kk) {
          kk && Xk.DownloadBlob(kk, Tk), Fk && Fk("")
        }), Ik, ik)
      }
      static Download(kk, Fk) {
        if ("undefined" === typeof URL) return;
        const Ik = window.URL.createObjectURL(kk),
          Xk = document.createElement("a");
        document.body.appendChild(Xk), Xk.style.display = "none", Xk.href = Ik, Xk.download = Fk, Xk.addEventListener("click", (() => {
          Xk.parentElement && Xk.parentElement.removeChild(Xk)
        })), Xk.click(), window.URL.revokeObjectURL(Ik)
      }
      static BackCompatCameraNoPreventDefault(kk) {
        return "boolean" === typeof kk[0] ? kk[0] : "boolean" === typeof kk[1] && kk[1]
      }
      static CreateScreenshot(kk, Fk, Ik, Xk) {
        throw (0, qk.j)("ScreenshotTools")
      }
      static async CreateScreenshotAsync(kk, Fk, Ik) {
        throw (0, qk.j)("ScreenshotTools")
      }
      static CreateScreenshotUsingRenderTarget(kk, Fk, Ik, Xk) {
        throw (0, qk.j)("ScreenshotTools")
      }
      static async CreateScreenshotUsingRenderTargetAsync(kk, Fk, Ik) {
        throw (0, qk.j)("ScreenshotTools")
      }
      static RandomId() {
        return (0, wk.e)()
      }
      static IsBase64(kk) {
        return (0, Zk.o)(kk)
      }
      static DecodeBase64(kk) {
        return (0, Zk.e)(kk)
      }
      static get errorsCount() {
        return yk.e.errorsCount
      }
      static Log(kk) {
        yk.e.Log(kk)
      }
      static Warn(kk) {
        yk.e.Warn(kk)
      }
      static Error(kk) {
        yk.e.Error(kk)
      }
      static get LogCache() {
        return yk.e.LogCache
      }
      static ClearLogCache() {
        yk.e.ClearLogCache()
      }
      static set LogLevels(kk) {
        yk.e.LogLevels = kk
      }
      static set PerformanceLogLevel(kk) {
        (kk & Xk.PerformanceUserMarkLogLevel) !== Xk.PerformanceUserMarkLogLevel ? (kk & Xk.PerformanceConsoleLogLevel) !== Xk.PerformanceConsoleLogLevel ? (Xk.StartPerformanceCounter = Xk._StartPerformanceCounterDisabled, Xk.EndPerformanceCounter = Xk._EndPerformanceCounterDisabled, _native?.disablePerformanceLogging?.()) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(2), Xk.StartPerformanceCounter = Xk._StartMarkNative, Xk.EndPerformanceCounter = Xk._EndMarkNative) : (Xk.StartPerformanceCounter = Xk._StartPerformanceConsole, Xk.EndPerformanceCounter = Xk._EndPerformanceConsole) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(1), Xk.StartPerformanceCounter = Xk._StartMarkNative, Xk.EndPerformanceCounter = Xk._EndMarkNative) : (Xk.StartPerformanceCounter = Xk._StartUserMark, Xk.EndPerformanceCounter = Xk._EndUserMark)
      }
      static _StartPerformanceCounterDisabled(kk, Fk) {}
      static _EndPerformanceCounterDisabled(kk, Fk) {}
      static _StartUserMark(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!Xk._Performance) {
          if (!(0, ik.j)()) return;
          Xk._Performance = window.performance
        }
        Fk && Xk._Performance.mark && Xk._Performance.mark(kk + "-Begin")
      }
      static _EndUserMark(kk) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && Xk._Performance.mark && (Xk._Performance.mark(kk + "-End"), Xk._Performance.measure(kk, kk + "-Begin", kk + "-End"))
      }
      static _StartPerformanceConsole(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        Fk && (Xk._StartUserMark(kk, Fk), console.time && console.time(kk))
      }
      static _EndPerformanceConsole(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        Fk && (Xk._EndUserMark(kk, Fk), console.timeEnd(kk))
      }
      static _StartMarkNative(kk) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
          if (Xk._NativePerformanceCounterHandles.has(kk)) Xk.Warn(`Performance counter with name ${kk} is already started.`);
          else {
            const Fk = _native.startPerformanceCounter(kk);
            Xk._NativePerformanceCounterHandles.set(kk, Fk)
          }
      }
      static _EndMarkNative(kk) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
          const Fk = Xk._NativePerformanceCounterHandles.get(kk);
          Fk ? (_native.endPerformanceCounter(Fk), Xk._NativePerformanceCounterHandles.delete(kk)) : Xk.Warn(`Performance counter with name ${kk} was not started.`)
        }
      }
      static get Now() {
        return ak.d.Now
      }
      static GetClassName(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ik = null;
        if (!Fk && kk.getClassName) Ik = kk.getClassName();
        else {
          if (kk instanceof Object) {
            Ik = (Fk ? kk : Object.getPrototypeOf(kk)).constructor.__bjsclassName__
          }
          Ik || (Ik = typeof kk)
        }
        return Ik
      }
      static First(kk, Fk) {
        for (const Ik of kk)
          if (Fk(Ik)) return Ik;
        return null
      }
      static getFullClassName(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ik = null,
          Xk = null;
        if (!Fk && kk.getClassName) Ik = kk.getClassName();
        else {
          if (kk instanceof Object) {
            const Tk = Fk ? kk : Object.getPrototypeOf(kk);
            Ik = Tk.constructor.__bjsclassName__, Xk = Tk.constructor.__bjsmoduleName__
          }
          Ik || (Ik = typeof kk)
        }
        return Ik ? (null != Xk ? Xk + "." : "") + Ik : null
      }
      static async DelayAsync(kk) {
        await new Promise((Fk => {
          setTimeout((() => {
            Fk()
          }), kk)
        }))
      }
      static IsSafari() {
        return !!(0, ik.h)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }
    }

    function xk(kk, Fk) {
      return Ik => {
        Ik.__bjsclassName__ = kk, Ik.__bjsmoduleName__ = null != Fk ? Fk : null
      }
    }
    Xk = Jk, Jk.AssetBaseUrl = "", Jk.UseCustomRequestHeaders = !1, Jk.CustomRequestHeaders = Lk.b.CustomRequestHeaders, Jk.GetDOMTextContent = ik.c, Jk._DefaultCdnUrl = "https://cdn.babylonjs.com", Jk._CdnVersion = "9.28.0", Jk._DefaultAssetsUrl = "https://assets.babylonjs.com/core", Jk.LoadScript = "undefined" === typeof _native ? Xk._LoadScriptWeb : Xk._LoadScriptNative, Jk.GetAbsoluteUrl = "object" === typeof document ? kk => {
      const Fk = document.createElement("a");
      return Fk.href = kk, Fk.href
    } : "function" === typeof URL && "object" === typeof location ? kk => new URL(kk, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
    }, Jk.NoneLogLevel = yk.e.NoneLogLevel, Jk.MessageLogLevel = yk.e.MessageLogLevel, Jk.WarningLogLevel = yk.e.WarningLogLevel, Jk.ErrorLogLevel = yk.e.ErrorLogLevel, Jk.AllLogLevel = yk.e.AllLogLevel, Jk.IsWindowObjectExist = ik.j, Jk.PerformanceNoneLogLevel = 0, Jk.PerformanceUserMarkLogLevel = 1, Jk.PerformanceConsoleLogLevel = 2, Jk._NativePerformanceCounterHandles = new Map, Jk.StartPerformanceCounter = Xk._StartPerformanceCounterDisabled, Jk.EndPerformanceCounter = Xk._EndPerformanceCounterDisabled;
    class Pk {
      constructor(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.iterations = kk, this.index = Xk - 1, this._done = !1, this._fn = Fk, this._successCallback = Ik
      }
      executeNext() {
        this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
      }
      breakLoop() {
        this._done = !0, this._successCallback()
      }
      static Run(kk, Fk, Ik) {
        const Xk = new Pk(kk, Fk, Ik, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return Xk.executeNext(), Xk
      }
      static SyncAsyncForLoop(kk, Fk, Ik, Xk, Tk) {
        let ik = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return Pk.Run(Math.ceil(kk / Fk), (Xk => {
          Tk && Tk() ? Xk.breakLoop() : setTimeout((() => {
            for (let ik = 0; ik < Fk; ++ik) {
              const yk = Xk.index * Fk + ik;
              if (yk >= kk) break;
              if (Ik(yk), Tk && Tk()) {
                Xk.breakLoop();
                break
              }
            }
            Xk.executeNext()
          }), ik)
        }), Xk)
      }
    }
    let Kk = !1;

    function Qk() {
      Kk || (Kk = !0, Jk.Mix = Hk.l, Jk.IsExponentOfTwo = Hk.j, tk.e.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z")
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);