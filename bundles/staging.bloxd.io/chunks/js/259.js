export const id = 259;
export const ids = [259];
export const modules = {
  40307: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Dt
    });
    var Ot = Vt(38899),
      qt = Vt(37390);
    class Dt {
      static Instantiate(tt) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[tt]) return this.RegisteredExternalClasses[tt];
        const et = (0, qt.e)(tt);
        if (et) return et;
        Ot.d.Warn(tt + " not found, you may have missed an import.");
        const Vt = tt.split(".");
        let Dt = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
        for (let Ot = 0, qt = Vt.length; Ot < qt; Ot++) Dt = Dt[Vt[Ot]];
        return "function" !== typeof Dt ? null : Dt
      }
    }
    Dt.RegisteredExternalClasses = {}
  },
  40098: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => qt
    });
    var Ot = Vt(40068);
    class qt {
      static get Now() {
        return (0, Ot.j)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
      }
    }
  },
  40131: (tt, et, Vt) => {
    function Ot(tt) {
      let et = 1;
      do {
        et *= 2
      } while (et < tt);
      return et === tt
    }

    function qt(tt, et, Vt) {
      return tt * (1 - Vt) + et * Vt
    }

    function Dt(tt) {
      const et = mt(tt),
        Vt = dt(tt);
      return et - tt > tt - Vt ? Vt : et
    }

    function mt(tt) {
      return tt--, tt |= tt >> 1, tt |= tt >> 2, tt |= tt >> 4, tt |= tt >> 8, tt |= tt >> 16, ++tt
    }

    function dt(tt) {
      return tt |= tt >> 1, tt |= tt >> 2, tt |= tt >> 4, tt |= tt >> 8, (tt |= tt >> 16) - (tt >> 1)
    }

    function jt(tt, et) {
      let Vt;
      switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
        case 1:
          Vt = dt(tt);
          break;
        case 2:
          Vt = Dt(tt);
          break;
        default:
          Vt = mt(tt)
      }
      return Math.min(Vt, et)
    }
    Vt.d(et, {
      e: () => dt,
      g: () => jt,
      h: () => Ot,
      l: () => qt,
      n: () => Dt
    })
  },
  40300: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => bt,
      h: () => Ct,
      l: () => Nt,
      o: () => Mt
    });
    var Ot, qt = Vt(37367),
      Dt = Vt(40068),
      mt = Vt(38899),
      dt = Vt(38897),
      jt = Vt(40098),
      Ht = Vt(40080),
      Xt = Vt(40255),
      Qt = Vt(37359),
      lt = Vt(40249),
      Et = Vt(40085),
      ft = Vt(40307),
      wt = Vt(38159),
      yt = Vt(40131);
    class Nt {
      static get BaseUrl() {
        return lt.f.BaseUrl
      }
      static set BaseUrl(tt) {
        lt.f.BaseUrl = tt
      }
      static get CleanUrl() {
        return lt.f.CleanUrl
      }
      static set CleanUrl(tt) {
        lt.f.CleanUrl = tt
      }
      static IsAbsoluteUrl(tt) {
        return 0 === tt.indexOf("//") || -1 !== tt.indexOf("://") && (-1 !== tt.indexOf(".") && (-1 !== tt.indexOf("/") && (!(tt.indexOf(":") > tt.indexOf("/")) && (tt.indexOf("://") < tt.indexOf(".") || (0 === tt.indexOf("data:") || 0 === tt.indexOf("blob:"))))))
      }
      static set ScriptBaseUrl(tt) {
        lt.f.ScriptBaseUrl = tt
      }
      static get ScriptBaseUrl() {
        return lt.f.ScriptBaseUrl
      }
      static set CDNBaseUrl(tt) {
        Ot.ScriptBaseUrl = tt, Ot.AssetBaseUrl = tt
      }
      static set ScriptPreprocessUrl(tt) {
        lt.f.ScriptPreprocessUrl = tt
      }
      static get ScriptPreprocessUrl() {
        return lt.f.ScriptPreprocessUrl
      }
      static get DefaultRetryStrategy() {
        return lt.f.DefaultRetryStrategy
      }
      static set DefaultRetryStrategy(tt) {
        lt.f.DefaultRetryStrategy = tt
      }
      static get CorsBehavior() {
        return lt.f.CorsBehavior
      }
      static set CorsBehavior(tt) {
        lt.f.CorsBehavior = tt
      }
      static get UseFallbackTexture() {
        return Qt.d.UseFallbackTexture
      }
      static set UseFallbackTexture(tt) {
        Qt.d.UseFallbackTexture = tt
      }
      static get RegisteredExternalClasses() {
        return ft.d.RegisteredExternalClasses
      }
      static set RegisteredExternalClasses(tt) {
        ft.d.RegisteredExternalClasses = tt
      }
      static get fallbackTexture() {
        return Qt.d.FallbackTexture
      }
      static set fallbackTexture(tt) {
        Qt.d.FallbackTexture = tt
      }
      static FetchToRef(tt, et, Vt, Ot, qt, Dt) {
        const mt = 4 * ((Math.abs(tt) * Vt % Vt | 0) + (Math.abs(et) * Ot % Ot | 0) * Vt);
        Dt.r = qt[mt] / 255, Dt.g = qt[mt + 1] / 255, Dt.b = qt[mt + 2] / 255, Dt.a = qt[mt + 3] / 255
      }
      static Mix(tt, et, Vt) {
        return 0
      }
      static Instantiate(tt) {
        return ft.d.Instantiate(tt)
      }
      static SetImmediate(tt) {
        Et.c.SetImmediate(tt)
      }
      static IsExponentOfTwo(tt) {
        return !0
      }
      static FloatRound(tt) {
        return Math.fround(tt)
      }
      static GetFilename(tt) {
        const et = tt.lastIndexOf("/");
        return et < 0 ? tt : tt.substring(et + 1)
      }
      static GetFolderPath(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Vt = tt.lastIndexOf("/");
        return Vt < 0 ? et ? tt : "" : tt.substring(0, Vt + 1)
      }
      static ToDegrees(tt) {
        return 180 * tt / Math.PI
      }
      static ToRadians(tt) {
        return tt * Math.PI / 180
      }
      static SmoothAngleChange(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
        const Ot = this.ToRadians(tt),
          qt = this.ToRadians(et);
        return this.ToDegrees(Math.atan2((1 - Vt) * Math.sin(qt) + Vt * Math.sin(Ot), (1 - Vt) * Math.cos(qt) + Vt * Math.cos(Ot)))
      }
      static MakeArray(tt, et) {
        return !0 === et || void 0 !== tt && null != tt ? Array.isArray(tt) ? tt : [tt] : null
      }
      static GetPointerPrefix(tt) {
        return (0, Dt.j)() && !window.PointerEvent ? "mouse" : "pointer"
      }
      static SetCorsBehavior(tt, et) {
        (0, lt.z)(tt, et)
      }
      static SetReferrerPolicyBehavior(tt, et) {
        et.referrerPolicy = tt
      }
      static get PreprocessUrl() {
        return lt.f.PreprocessUrl
      }
      static set PreprocessUrl(tt) {
        lt.f.PreprocessUrl = tt
      }
      static LoadImage(tt, et, Vt, Ot, qt, Dt) {
        return (0, lt.p)(tt, et, Vt, Ot, qt, Dt)
      }
      static LoadFile(tt, et, Vt, Ot, qt, Dt) {
        return (0, lt.o)(tt, et, Vt, Ot, qt, Dt)
      }
      static async LoadFileAsync(tt) {
        let et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return await new Promise(((Vt, Ot) => {
          (0, lt.o)(tt, (tt => {
            Vt(tt)
          }), void 0, void 0, et, ((tt, et) => {
            Ot(et)
          }))
        }))
      }
      static GetAssetUrl(tt) {
        if (!tt) return "";
        if (Ot.AssetBaseUrl && tt.startsWith(Ot._DefaultAssetsUrl)) {
          const et = Ot.AssetBaseUrl.endsWith("/") ? Ot.AssetBaseUrl.slice(0, -1) : Ot.AssetBaseUrl;
          return tt.replace(Ot._DefaultAssetsUrl, et)
        }
        return tt
      }
      static GetBabylonScriptURL(tt, et) {
        if (!tt) return "";
        if (tt.startsWith(Ot._DefaultCdnUrl))
          if (Ot.ScriptBaseUrl) {
            const et = Ot.ScriptBaseUrl.endsWith("/") ? Ot.ScriptBaseUrl.slice(0, -1) : Ot.ScriptBaseUrl;
            tt = tt.replace(Ot._DefaultCdnUrl, et)
          } else if (Ot._CdnVersion) {
          const et = `${Ot._DefaultCdnUrl}/v${Ot._CdnVersion}`;
          tt.startsWith(et) || (tt = tt.replace(Ot._DefaultCdnUrl, et))
        }
        return tt = Ot.ScriptPreprocessUrl(tt), et && !Ot.IsAbsoluteUrl(tt) && (tt = Ot.GetAbsoluteUrl(tt)), tt
      }
      static LoadBabylonScript(tt, et, Vt, qt) {
        tt = Ot.GetBabylonScriptURL(tt), Ot.LoadScript(tt, et, Vt)
      }
      static async LoadBabylonScriptAsync(tt) {
        return tt = Ot.GetBabylonScriptURL(tt), await Ot.LoadScriptAsync(tt)
      }
      static _LoadScriptNative(tt, et, Vt, qt) {
        if (_native) {
          if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
            const tt = "Loading a script as an ES module is not supported in Babylon Native";
            return void Vt?.(tt, new Error(tt))
          }
          Ot.LoadFile(tt, (tt => {
            try {
              Function(tt).apply(null), et && et()
            } catch (Ot) {
              Vt && Vt("LoadScript Error", Ot)
            }
          }), void 0, void 0, !1, ((tt, et) => {
            Vt && Vt("LoadScript Error", et)
          }))
        }
      }
      static _LoadScriptWeb(tt, et, Vt, Ot) {
        let qt = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" === typeof importScripts) {
          try {
            importScripts(tt), et && et()
          } catch (jt) {
            Vt?.(`Unable to load script '${tt}' in worker`, jt)
          }
          return
        }
        if (!(0, Dt.j)()) return void Vt?.(`Cannot load script '${tt}' outside of a window or a worker`);
        const mt = document.getElementsByTagName("head")[0],
          dt = document.createElement("script");
        qt ? (dt.setAttribute("type", "module"), dt.innerText = tt) : (dt.setAttribute("type", "text/javascript"), dt.setAttribute("src", tt)), Ot && (dt.id = Ot), dt.onload = () => {
          et && et()
        }, dt.onerror = et => {
          Vt && Vt(`Unable to load script '${tt}'`, et)
        }, mt.appendChild(dt)
      }
      static async LoadScriptAsync(tt, et) {
        return await new Promise(((Vt, Ot) => {
          this.LoadScript(tt, (() => {
            Vt()
          }), ((tt, et) => {
            Ot(et || new Error(tt))
          }), et)
        }))
      }
      static ReadFileAsDataURL(tt, et, Vt) {
        const Ot = new FileReader,
          Dt = {
            onCompleteObservable: new qt.c,
            abort: () => Ot.abort()
          };
        return Ot.onloadend = () => {
          Dt.onCompleteObservable.notifyObservers(Dt)
        }, Ot.onload = tt => {
          et(tt.target.result)
        }, Ot.onprogress = Vt, Ot.readAsDataURL(tt), Dt
      }
      static ReadFile(tt, et, Vt, Ot, qt) {
        return (0, lt.r)(tt, et, Vt, Ot, qt)
      }
      static FileAsURL(tt) {
        const et = new Blob([tt]);
        return window.URL.createObjectURL(et)
      }
      static Format(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return tt.toFixed(et)
      }
      static DeepCopy(tt, et, Vt, Ot) {
        dt.d.DeepCopy(tt, et, Vt, Ot)
      }
      static IsEmpty(tt) {
        for (const et in tt)
          if (Object.prototype.hasOwnProperty.call(tt, et)) return !1;
        return !0
      }
      static RegisterTopRootEvents(tt, et) {
        for (let Ot = 0; Ot < et.length; Ot++) {
          const qt = et[Ot];
          tt.addEventListener(qt.name, qt.handler, !1);
          try {
            window.parent && window.parent.addEventListener(qt.name, qt.handler, !1)
          } catch (Vt) {}
        }
      }
      static UnregisterTopRootEvents(tt, et) {
        for (let Ot = 0; Ot < et.length; Ot++) {
          const qt = et[Ot];
          tt.removeEventListener(qt.name, qt.handler);
          try {
            tt.parent && tt.parent.removeEventListener(qt.name, qt.handler)
          } catch (Vt) {}
        }
      }
      static async DumpFramebuffer(tt, et, Vt, Ot) {
        throw (0, Ht.e)("DumpTools")
      }
      static DumpData(tt, et, Vt, Ot) {
        throw (0, Ht.e)("DumpTools")
      }
      static async DumpDataAsync(tt, et, Vt) {
        throw (0, Ht.e)("DumpTools")
      }
      static _IsOffScreenCanvas(tt) {
        return void 0 !== tt.convertToBlob
      }
      static ToBlob(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          qt = arguments.length > 3 ? arguments[3] : void 0;
        Ot._IsOffScreenCanvas(tt) || tt.toBlob || (tt.toBlob = function(tt, et, Vt) {
          setTimeout((() => {
            const Ot = atob(this.toDataURL(et, Vt).split(",")[1]),
              qt = Ot.length,
              Dt = new Uint8Array(qt);
            for (let tt = 0; tt < qt; tt++) Dt[tt] = Ot.charCodeAt(tt);
            tt(new Blob([Dt]))
          }))
        }), Ot._IsOffScreenCanvas(tt) ? tt.convertToBlob({
          type: Vt,
          quality: qt
        }).then((tt => et(tt))) : tt.toBlob((function(tt) {
          et(tt)
        }), Vt, qt)
      }
      static DownloadBlob(tt, et) {
        if ("download" in document.createElement("a")) {
          if (!et) {
            const tt = new Date;
            et = "screenshot_" + ((tt.getFullYear() + "-" + (tt.getMonth() + 1)).slice(2) + "-" + tt.getDate() + "_" + tt.getHours() + "-" + ("0" + tt.getMinutes()).slice(-2)) + ".png"
          }
          Ot.Download(tt, et)
        } else if (tt && "undefined" !== typeof URL) {
          const et = URL.createObjectURL(tt),
            Vt = window.open("");
          if (!Vt) return;
          const Ot = Vt.document.createElement("img");
          Ot.onload = function() {
            URL.revokeObjectURL(et)
          }, Ot.src = et, Vt.document.body.appendChild(Ot)
        }
      }
      static EncodeScreenshotCanvasData(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          qt = arguments.length > 3 ? arguments[3] : void 0,
          Dt = arguments.length > 4 ? arguments[4] : void 0;
        if ("string" !== typeof qt && et) {
          if (et) {
            if (Ot._IsOffScreenCanvas(tt)) return void tt.convertToBlob({
              type: Vt,
              quality: Dt
            }).then((tt => {
              const Vt = new FileReader;
              Vt.readAsDataURL(tt), Vt.onloadend = () => {
                const tt = Vt.result;
                et(tt)
              }
            }));
            const qt = tt.toDataURL(Vt, Dt);
            et(qt)
          }
        } else this.ToBlob(tt, (function(tt) {
          tt && Ot.DownloadBlob(tt, qt), et && et("")
        }), Vt, Dt)
      }
      static Download(tt, et) {
        if ("undefined" === typeof URL) return;
        const Vt = window.URL.createObjectURL(tt),
          Ot = document.createElement("a");
        document.body.appendChild(Ot), Ot.style.display = "none", Ot.href = Vt, Ot.download = et, Ot.addEventListener("click", (() => {
          Ot.parentElement && Ot.parentElement.removeChild(Ot)
        })), Ot.click(), window.URL.revokeObjectURL(Vt)
      }
      static BackCompatCameraNoPreventDefault(tt) {
        return "boolean" === typeof tt[0] ? tt[0] : "boolean" === typeof tt[1] && tt[1]
      }
      static CreateScreenshot(tt, et, Vt, Ot) {
        throw (0, Ht.e)("ScreenshotTools")
      }
      static async CreateScreenshotAsync(tt, et, Vt) {
        throw (0, Ht.e)("ScreenshotTools")
      }
      static CreateScreenshotUsingRenderTarget(tt, et, Vt, Ot) {
        throw (0, Ht.e)("ScreenshotTools")
      }
      static async CreateScreenshotUsingRenderTargetAsync(tt, et, Vt) {
        throw (0, Ht.e)("ScreenshotTools")
      }
      static RandomId() {
        return (0, wt.b)()
      }
      static IsBase64(tt) {
        return (0, lt.k)(tt)
      }
      static DecodeBase64(tt) {
        return (0, lt.b)(tt)
      }
      static get errorsCount() {
        return mt.d.errorsCount
      }
      static Log(tt) {
        mt.d.Log(tt)
      }
      static Warn(tt) {
        mt.d.Warn(tt)
      }
      static Error(tt) {
        mt.d.Error(tt)
      }
      static get LogCache() {
        return mt.d.LogCache
      }
      static ClearLogCache() {
        mt.d.ClearLogCache()
      }
      static set LogLevels(tt) {
        mt.d.LogLevels = tt
      }
      static set PerformanceLogLevel(tt) {
        (tt & Ot.PerformanceUserMarkLogLevel) !== Ot.PerformanceUserMarkLogLevel ? (tt & Ot.PerformanceConsoleLogLevel) !== Ot.PerformanceConsoleLogLevel ? (Ot.StartPerformanceCounter = Ot._StartPerformanceCounterDisabled, Ot.EndPerformanceCounter = Ot._EndPerformanceCounterDisabled, _native?.disablePerformanceLogging?.()) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(2), Ot.StartPerformanceCounter = Ot._StartMarkNative, Ot.EndPerformanceCounter = Ot._EndMarkNative) : (Ot.StartPerformanceCounter = Ot._StartPerformanceConsole, Ot.EndPerformanceCounter = Ot._EndPerformanceConsole) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(1), Ot.StartPerformanceCounter = Ot._StartMarkNative, Ot.EndPerformanceCounter = Ot._EndMarkNative) : (Ot.StartPerformanceCounter = Ot._StartUserMark, Ot.EndPerformanceCounter = Ot._EndUserMark)
      }
      static _StartPerformanceCounterDisabled(tt, et) {}
      static _EndPerformanceCounterDisabled(tt, et) {}
      static _StartUserMark(tt) {
        let et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!Ot._Performance) {
          if (!(0, Dt.j)()) return;
          Ot._Performance = window.performance
        }
        et && Ot._Performance.mark && Ot._Performance.mark(tt + "-Begin")
      }
      static _EndUserMark(tt) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && Ot._Performance.mark && (Ot._Performance.mark(tt + "-End"), Ot._Performance.measure(tt, tt + "-Begin", tt + "-End"))
      }
      static _StartPerformanceConsole(tt) {
        let et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        et && (Ot._StartUserMark(tt, et), console.time && console.time(tt))
      }
      static _EndPerformanceConsole(tt) {
        let et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        et && (Ot._EndUserMark(tt, et), console.timeEnd(tt))
      }
      static _StartMarkNative(tt) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
          if (Ot._NativePerformanceCounterHandles.has(tt)) Ot.Warn(`Performance counter with name ${tt} is already started.`);
          else {
            const et = _native.startPerformanceCounter(tt);
            Ot._NativePerformanceCounterHandles.set(tt, et)
          }
      }
      static _EndMarkNative(tt) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
          const et = Ot._NativePerformanceCounterHandles.get(tt);
          et ? (_native.endPerformanceCounter(et), Ot._NativePerformanceCounterHandles.delete(tt)) : Ot.Warn(`Performance counter with name ${tt} was not started.`)
        }
      }
      static get Now() {
        return jt.b.Now
      }
      static GetClassName(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Vt = null;
        if (!et && tt.getClassName) Vt = tt.getClassName();
        else {
          if (tt instanceof Object) {
            Vt = (et ? tt : Object.getPrototypeOf(tt)).constructor.__bjsclassName__
          }
          Vt || (Vt = typeof tt)
        }
        return Vt
      }
      static First(tt, et) {
        for (const Vt of tt)
          if (et(Vt)) return Vt;
        return null
      }
      static getFullClassName(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Vt = null,
          Ot = null;
        if (!et && tt.getClassName) Vt = tt.getClassName();
        else {
          if (tt instanceof Object) {
            const qt = et ? tt : Object.getPrototypeOf(tt);
            Vt = qt.constructor.__bjsclassName__, Ot = qt.constructor.__bjsmoduleName__
          }
          Vt || (Vt = typeof tt)
        }
        return Vt ? (null != Ot ? Ot + "." : "") + Vt : null
      }
      static async DelayAsync(tt) {
        await new Promise((et => {
          setTimeout((() => {
            et()
          }), tt)
        }))
      }
      static IsSafari() {
        return !!(0, Dt.h)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }
    }

    function Mt(tt, et) {
      return Vt => {
        Vt.__bjsclassName__ = tt, Vt.__bjsmoduleName__ = null != et ? et : null
      }
    }
    Ot = Nt, Nt.AssetBaseUrl = "", Nt.UseCustomRequestHeaders = !1, Nt.CustomRequestHeaders = Xt.e.CustomRequestHeaders, Nt.GetDOMTextContent = Dt.c, Nt._DefaultCdnUrl = "https://cdn.babylonjs.com", Nt._CdnVersion = "9.28.0", Nt._DefaultAssetsUrl = "https://assets.babylonjs.com/core", Nt.LoadScript = "undefined" === typeof _native ? Ot._LoadScriptWeb : Ot._LoadScriptNative, Nt.GetAbsoluteUrl = "object" === typeof document ? tt => {
      const et = document.createElement("a");
      return et.href = tt, et.href
    } : "function" === typeof URL && "object" === typeof location ? tt => new URL(tt, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
    }, Nt.NoneLogLevel = mt.d.NoneLogLevel, Nt.MessageLogLevel = mt.d.MessageLogLevel, Nt.WarningLogLevel = mt.d.WarningLogLevel, Nt.ErrorLogLevel = mt.d.ErrorLogLevel, Nt.AllLogLevel = mt.d.AllLogLevel, Nt.IsWindowObjectExist = Dt.j, Nt.PerformanceNoneLogLevel = 0, Nt.PerformanceUserMarkLogLevel = 1, Nt.PerformanceConsoleLogLevel = 2, Nt._NativePerformanceCounterHandles = new Map, Nt.StartPerformanceCounter = Ot._StartPerformanceCounterDisabled, Nt.EndPerformanceCounter = Ot._EndPerformanceCounterDisabled;
    class bt {
      constructor(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.iterations = tt, this.index = Ot - 1, this._done = !1, this._fn = et, this._successCallback = Vt
      }
      executeNext() {
        this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
      }
      breakLoop() {
        this._done = !0, this._successCallback()
      }
      static Run(tt, et, Vt) {
        const Ot = new bt(tt, et, Vt, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return Ot.executeNext(), Ot
      }
      static SyncAsyncForLoop(tt, et, Vt, Ot, qt) {
        let Dt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return bt.Run(Math.ceil(tt / et), (Ot => {
          qt && qt() ? Ot.breakLoop() : setTimeout((() => {
            for (let Dt = 0; Dt < et; ++Dt) {
              const mt = Ot.index * et + Dt;
              if (mt >= tt) break;
              if (Vt(mt), qt && qt()) {
                Ot.breakLoop();
                break
              }
            }
            Ot.executeNext()
          }), Dt)
        }), Ot)
      }
    }
    let Jt = !1;

    function Ct() {
      Jt || (Jt = !0, Nt.Mix = yt.l, Nt.IsExponentOfTwo = yt.h, Qt.d.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z")
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);