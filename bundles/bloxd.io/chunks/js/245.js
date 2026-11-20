export const id = 245;
export const ids = [245];
export const modules = {
  39197: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Tb
    });
    var Ab = Ub(37989),
      Mb = Ub(36447);
    class Tb {
      static Instantiate(bb) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[bb]) return this.RegisteredExternalClasses[bb];
        const ab = (0, Mb.b)(bb);
        if (ab) return ab;
        Ab.e.Warn(bb + " not found, you may have missed an import.");
        const Ub = bb.split(".");
        let Tb = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
        for (let Ab = 0, Mb = Ub.length; Ab < Mb; Ab++) Tb = Tb[Ub[Ab]];
        return "function" !== typeof Tb ? null : Tb
      }
    }
    Tb.RegisteredExternalClasses = {}
  },
  39010: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Mb
    });
    var Ab = Ub(38955);
    class Mb {
      static get Now() {
        return (0, Ab.k)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
      }
    }
  },
  39033: (bb, ab, Ub) => {
    function Ab(bb) {
      let ab = 1;
      do {
        ab *= 2
      } while (ab < bb);
      return ab === bb
    }

    function Mb(bb, ab, Ub) {
      return bb * (1 - Ub) + ab * Ub
    }

    function Tb(bb) {
      const ab = Eb(bb),
        Ub = Yb(bb);
      return ab - bb > bb - Ub ? Ub : ab
    }

    function Eb(bb) {
      return bb--, bb |= bb >> 1, bb |= bb >> 2, bb |= bb >> 4, bb |= bb >> 8, bb |= bb >> 16, ++bb
    }

    function Yb(bb) {
      return bb |= bb >> 1, bb |= bb >> 2, bb |= bb >> 4, bb |= bb >> 8, (bb |= bb >> 16) - (bb >> 1)
    }

    function Bb(bb, ab) {
      let Ub;
      switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
        case 1:
          Ub = Yb(bb);
          break;
        case 2:
          Ub = Tb(bb);
          break;
        default:
          Ub = Eb(bb)
      }
      return Math.min(Ub, ab)
    }
    Ub.d(ab, {
      b: () => Yb,
      e: () => Bb,
      g: () => Ab,
      j: () => Mb,
      n: () => Tb
    })
  },
  39195: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Db,
      d: () => xb,
      h: () => yb,
      l: () => Zb
    });
    var Ab, Mb = Ub(36431),
      Tb = Ub(38955),
      Eb = Ub(37989),
      Yb = Ub(37982),
      Bb = Ub(39010),
      eb = Ub(38982),
      vb = Ub(39153),
      Lb = Ub(36425),
      Pb = Ub(39146),
      Xb = Ub(38993),
      jb = Ub(39197),
      Rb = Ub(37251),
      kb = Ub(39033);
    class yb {
      static get BaseUrl() {
        return Pb.g.BaseUrl
      }
      static set BaseUrl(bb) {
        Pb.g.BaseUrl = bb
      }
      static get CleanUrl() {
        return Pb.g.CleanUrl
      }
      static set CleanUrl(bb) {
        Pb.g.CleanUrl = bb
      }
      static IsAbsoluteUrl(bb) {
        return 0 === bb.indexOf("//") || -1 !== bb.indexOf("://") && (-1 !== bb.indexOf(".") && (-1 !== bb.indexOf("/") && (!(bb.indexOf(":") > bb.indexOf("/")) && (bb.indexOf("://") < bb.indexOf(".") || (0 === bb.indexOf("data:") || 0 === bb.indexOf("blob:"))))))
      }
      static set ScriptBaseUrl(bb) {
        Pb.g.ScriptBaseUrl = bb
      }
      static get ScriptBaseUrl() {
        return Pb.g.ScriptBaseUrl
      }
      static set CDNBaseUrl(bb) {
        Ab.ScriptBaseUrl = bb, Ab.AssetBaseUrl = bb
      }
      static set ScriptPreprocessUrl(bb) {
        Pb.g.ScriptPreprocessUrl = bb
      }
      static get ScriptPreprocessUrl() {
        return Pb.g.ScriptPreprocessUrl
      }
      static get DefaultRetryStrategy() {
        return Pb.g.DefaultRetryStrategy
      }
      static set DefaultRetryStrategy(bb) {
        Pb.g.DefaultRetryStrategy = bb
      }
      static get CorsBehavior() {
        return Pb.g.CorsBehavior
      }
      static set CorsBehavior(bb) {
        Pb.g.CorsBehavior = bb
      }
      static get UseFallbackTexture() {
        return Lb.d.UseFallbackTexture
      }
      static set UseFallbackTexture(bb) {
        Lb.d.UseFallbackTexture = bb
      }
      static get RegisteredExternalClasses() {
        return jb.e.RegisteredExternalClasses
      }
      static set RegisteredExternalClasses(bb) {
        jb.e.RegisteredExternalClasses = bb
      }
      static get fallbackTexture() {
        return Lb.d.FallbackTexture
      }
      static set fallbackTexture(bb) {
        Lb.d.FallbackTexture = bb
      }
      static FetchToRef(bb, ab, Ub, Ab, Mb, Tb) {
        const Eb = 4 * ((Math.abs(bb) * Ub % Ub | 0) + (Math.abs(ab) * Ab % Ab | 0) * Ub);
        Tb.r = Mb[Eb] / 255, Tb.g = Mb[Eb + 1] / 255, Tb.b = Mb[Eb + 2] / 255, Tb.a = Mb[Eb + 3] / 255
      }
      static Mix(bb, ab, Ub) {
        return 0
      }
      static Instantiate(bb) {
        return jb.e.Instantiate(bb)
      }
      static SetImmediate(bb) {
        Xb.c.SetImmediate(bb)
      }
      static IsExponentOfTwo(bb) {
        return !0
      }
      static FloatRound(bb) {
        return Math.fround(bb)
      }
      static GetFilename(bb) {
        const ab = bb.lastIndexOf("/");
        return ab < 0 ? bb : bb.substring(ab + 1)
      }
      static GetFolderPath(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Ub = bb.lastIndexOf("/");
        return Ub < 0 ? ab ? bb : "" : bb.substring(0, Ub + 1)
      }
      static ToDegrees(bb) {
        return 180 * bb / Math.PI
      }
      static ToRadians(bb) {
        return bb * Math.PI / 180
      }
      static SmoothAngleChange(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
        const Ab = this.ToRadians(bb),
          Mb = this.ToRadians(ab);
        return this.ToDegrees(Math.atan2((1 - Ub) * Math.sin(Mb) + Ub * Math.sin(Ab), (1 - Ub) * Math.cos(Mb) + Ub * Math.cos(Ab)))
      }
      static MakeArray(bb, ab) {
        return !0 === ab || void 0 !== bb && null != bb ? Array.isArray(bb) ? bb : [bb] : null
      }
      static GetPointerPrefix(bb) {
        return (0, Tb.k)() && !window.PointerEvent ? "mouse" : "pointer"
      }
      static SetCorsBehavior(bb, ab) {
        (0, Pb.t)(bb, ab)
      }
      static SetReferrerPolicyBehavior(bb, ab) {
        ab.referrerPolicy = bb
      }
      static get PreprocessUrl() {
        return Pb.g.PreprocessUrl
      }
      static set PreprocessUrl(bb) {
        Pb.g.PreprocessUrl = bb
      }
      static LoadImage(bb, ab, Ub, Ab, Mb, Tb) {
        return (0, Pb.m)(bb, ab, Ub, Ab, Mb, Tb)
      }
      static LoadFile(bb, ab, Ub, Ab, Mb, Tb) {
        return (0, Pb.j)(bb, ab, Ub, Ab, Mb, Tb)
      }
      static async LoadFileAsync(bb) {
        let ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return await new Promise(((Ub, Ab) => {
          (0, Pb.j)(bb, (bb => {
            Ub(bb)
          }), void 0, void 0, ab, ((bb, ab) => {
            Ab(ab)
          }))
        }))
      }
      static GetAssetUrl(bb) {
        if (!bb) return "";
        if (Ab.AssetBaseUrl && bb.startsWith(Ab._DefaultAssetsUrl)) {
          const ab = Ab.AssetBaseUrl.endsWith("/") ? Ab.AssetBaseUrl.slice(0, -1) : Ab.AssetBaseUrl;
          return bb.replace(Ab._DefaultAssetsUrl, ab)
        }
        return bb
      }
      static GetBabylonScriptURL(bb, ab) {
        if (!bb) return "";
        if (bb.startsWith(Ab._DefaultCdnUrl))
          if (Ab.ScriptBaseUrl) {
            const ab = Ab.ScriptBaseUrl.endsWith("/") ? Ab.ScriptBaseUrl.slice(0, -1) : Ab.ScriptBaseUrl;
            bb = bb.replace(Ab._DefaultCdnUrl, ab)
          } else if (Ab._CdnVersion) {
          const ab = `${Ab._DefaultCdnUrl}/v${Ab._CdnVersion}`;
          bb.startsWith(ab) || (bb = bb.replace(Ab._DefaultCdnUrl, ab))
        }
        return bb = Ab.ScriptPreprocessUrl(bb), ab && !Ab.IsAbsoluteUrl(bb) && (bb = Ab.GetAbsoluteUrl(bb)), bb
      }
      static LoadBabylonScript(bb, ab, Ub, Mb) {
        bb = Ab.GetBabylonScriptURL(bb), Ab.LoadScript(bb, ab, Ub)
      }
      static async LoadBabylonScriptAsync(bb) {
        return bb = Ab.GetBabylonScriptURL(bb), await Ab.LoadScriptAsync(bb)
      }
      static _LoadScriptNative(bb, ab, Ub, Mb) {
        if (_native) {
          if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
            const bb = "Loading a script as an ES module is not supported in Babylon Native";
            return void Ub?.(bb, new Error(bb))
          }
          Ab.LoadFile(bb, (bb => {
            try {
              Function(bb).apply(null), ab && ab()
            } catch (Ab) {
              Ub && Ub("LoadScript Error", Ab)
            }
          }), void 0, void 0, !1, ((bb, ab) => {
            Ub && Ub("LoadScript Error", ab)
          }))
        }
      }
      static _LoadScriptWeb(bb, ab, Ub, Ab) {
        let Mb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" === typeof importScripts) {
          try {
            importScripts(bb), ab && ab()
          } catch (Bb) {
            Ub?.(`Unable to load script '${bb}' in worker`, Bb)
          }
          return
        }
        if (!(0, Tb.k)()) return void Ub?.(`Cannot load script '${bb}' outside of a window or a worker`);
        const Eb = document.getElementsByTagName("head")[0],
          Yb = document.createElement("script");
        Mb ? (Yb.setAttribute("type", "module"), Yb.innerText = bb) : (Yb.setAttribute("type", "text/javascript"), Yb.setAttribute("src", bb)), Ab && (Yb.id = Ab), Yb.onload = () => {
          ab && ab()
        }, Yb.onerror = ab => {
          Ub && Ub(`Unable to load script '${bb}'`, ab)
        }, Eb.appendChild(Yb)
      }
      static async LoadScriptAsync(bb, ab) {
        return await new Promise(((Ub, Ab) => {
          this.LoadScript(bb, (() => {
            Ub()
          }), ((bb, ab) => {
            Ab(ab || new Error(bb))
          }), ab)
        }))
      }
      static ReadFileAsDataURL(bb, ab, Ub) {
        const Ab = new FileReader,
          Tb = {
            onCompleteObservable: new Mb.b,
            abort: () => Ab.abort()
          };
        return Ab.onloadend = () => {
          Tb.onCompleteObservable.notifyObservers(Tb)
        }, Ab.onload = bb => {
          ab(bb.target.result)
        }, Ab.onprogress = Ub, Ab.readAsDataURL(bb), Tb
      }
      static ReadFile(bb, ab, Ub, Ab, Mb) {
        return (0, Pb.n)(bb, ab, Ub, Ab, Mb)
      }
      static FileAsURL(bb) {
        const ab = new Blob([bb]);
        return window.URL.createObjectURL(ab)
      }
      static Format(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return bb.toFixed(ab)
      }
      static DeepCopy(bb, ab, Ub, Ab) {
        Yb.e.DeepCopy(bb, ab, Ub, Ab)
      }
      static IsEmpty(bb) {
        for (const ab in bb)
          if (Object.prototype.hasOwnProperty.call(bb, ab)) return !1;
        return !0
      }
      static RegisterTopRootEvents(bb, ab) {
        for (let Ab = 0; Ab < ab.length; Ab++) {
          const Mb = ab[Ab];
          bb.addEventListener(Mb.name, Mb.handler, !1);
          try {
            window.parent && window.parent.addEventListener(Mb.name, Mb.handler, !1)
          } catch (Ub) {}
        }
      }
      static UnregisterTopRootEvents(bb, ab) {
        for (let Ab = 0; Ab < ab.length; Ab++) {
          const Mb = ab[Ab];
          bb.removeEventListener(Mb.name, Mb.handler);
          try {
            bb.parent && bb.parent.removeEventListener(Mb.name, Mb.handler)
          } catch (Ub) {}
        }
      }
      static async DumpFramebuffer(bb, ab, Ub, Ab) {
        throw (0, eb.l)("DumpTools")
      }
      static DumpData(bb, ab, Ub, Ab) {
        throw (0, eb.l)("DumpTools")
      }
      static async DumpDataAsync(bb, ab, Ub) {
        throw (0, eb.l)("DumpTools")
      }
      static _IsOffScreenCanvas(bb) {
        return void 0 !== bb.convertToBlob
      }
      static ToBlob(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          Mb = arguments.length > 3 ? arguments[3] : void 0;
        Ab._IsOffScreenCanvas(bb) || bb.toBlob || (bb.toBlob = function(bb, ab, Ub) {
          setTimeout((() => {
            const Ab = atob(this.toDataURL(ab, Ub).split(",")[1]),
              Mb = Ab.length,
              Tb = new Uint8Array(Mb);
            for (let bb = 0; bb < Mb; bb++) Tb[bb] = Ab.charCodeAt(bb);
            bb(new Blob([Tb]))
          }))
        }), Ab._IsOffScreenCanvas(bb) ? bb.convertToBlob({
          type: Ub,
          quality: Mb
        }).then((bb => ab(bb))) : bb.toBlob((function(bb) {
          ab(bb)
        }), Ub, Mb)
      }
      static DownloadBlob(bb, ab) {
        if ("download" in document.createElement("a")) {
          if (!ab) {
            const bb = new Date;
            ab = "screenshot_" + ((bb.getFullYear() + "-" + (bb.getMonth() + 1)).slice(2) + "-" + bb.getDate() + "_" + bb.getHours() + "-" + ("0" + bb.getMinutes()).slice(-2)) + ".png"
          }
          Ab.Download(bb, ab)
        } else if (bb && "undefined" !== typeof URL) {
          const ab = URL.createObjectURL(bb),
            Ub = window.open("");
          if (!Ub) return;
          const Ab = Ub.document.createElement("img");
          Ab.onload = function() {
            URL.revokeObjectURL(ab)
          }, Ab.src = ab, Ub.document.body.appendChild(Ab)
        }
      }
      static EncodeScreenshotCanvasData(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          Mb = arguments.length > 3 ? arguments[3] : void 0,
          Tb = arguments.length > 4 ? arguments[4] : void 0;
        if ("string" !== typeof Mb && ab) {
          if (ab) {
            if (Ab._IsOffScreenCanvas(bb)) return void bb.convertToBlob({
              type: Ub,
              quality: Tb
            }).then((bb => {
              const Ub = new FileReader;
              Ub.readAsDataURL(bb), Ub.onloadend = () => {
                const bb = Ub.result;
                ab(bb)
              }
            }));
            const Mb = bb.toDataURL(Ub, Tb);
            ab(Mb)
          }
        } else this.ToBlob(bb, (function(bb) {
          bb && Ab.DownloadBlob(bb, Mb), ab && ab("")
        }), Ub, Tb)
      }
      static Download(bb, ab) {
        if ("undefined" === typeof URL) return;
        const Ub = window.URL.createObjectURL(bb),
          Ab = document.createElement("a");
        document.body.appendChild(Ab), Ab.style.display = "none", Ab.href = Ub, Ab.download = ab, Ab.addEventListener("click", (() => {
          Ab.parentElement && Ab.parentElement.removeChild(Ab)
        })), Ab.click(), window.URL.revokeObjectURL(Ub)
      }
      static BackCompatCameraNoPreventDefault(bb) {
        return "boolean" === typeof bb[0] ? bb[0] : "boolean" === typeof bb[1] && bb[1]
      }
      static CreateScreenshot(bb, ab, Ub, Ab) {
        throw (0, eb.l)("ScreenshotTools")
      }
      static async CreateScreenshotAsync(bb, ab, Ub) {
        throw (0, eb.l)("ScreenshotTools")
      }
      static CreateScreenshotUsingRenderTarget(bb, ab, Ub, Ab) {
        throw (0, eb.l)("ScreenshotTools")
      }
      static async CreateScreenshotUsingRenderTargetAsync(bb, ab, Ub) {
        throw (0, eb.l)("ScreenshotTools")
      }
      static RandomId() {
        return (0, Rb.b)()
      }
      static IsBase64(bb) {
        return (0, Pb.i)(bb)
      }
      static DecodeBase64(bb) {
        return (0, Pb.d)(bb)
      }
      static get errorsCount() {
        return Eb.e.errorsCount
      }
      static Log(bb) {
        Eb.e.Log(bb)
      }
      static Warn(bb) {
        Eb.e.Warn(bb)
      }
      static Error(bb) {
        Eb.e.Error(bb)
      }
      static get LogCache() {
        return Eb.e.LogCache
      }
      static ClearLogCache() {
        Eb.e.ClearLogCache()
      }
      static set LogLevels(bb) {
        Eb.e.LogLevels = bb
      }
      static set PerformanceLogLevel(bb) {
        (bb & Ab.PerformanceUserMarkLogLevel) !== Ab.PerformanceUserMarkLogLevel ? (bb & Ab.PerformanceConsoleLogLevel) !== Ab.PerformanceConsoleLogLevel ? (Ab.StartPerformanceCounter = Ab._StartPerformanceCounterDisabled, Ab.EndPerformanceCounter = Ab._EndPerformanceCounterDisabled, _native?.disablePerformanceLogging?.()) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(2), Ab.StartPerformanceCounter = Ab._StartMarkNative, Ab.EndPerformanceCounter = Ab._EndMarkNative) : (Ab.StartPerformanceCounter = Ab._StartPerformanceConsole, Ab.EndPerformanceCounter = Ab._EndPerformanceConsole) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(1), Ab.StartPerformanceCounter = Ab._StartMarkNative, Ab.EndPerformanceCounter = Ab._EndMarkNative) : (Ab.StartPerformanceCounter = Ab._StartUserMark, Ab.EndPerformanceCounter = Ab._EndUserMark)
      }
      static _StartPerformanceCounterDisabled(bb, ab) {}
      static _EndPerformanceCounterDisabled(bb, ab) {}
      static _StartUserMark(bb) {
        let ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!Ab._Performance) {
          if (!(0, Tb.k)()) return;
          Ab._Performance = window.performance
        }
        ab && Ab._Performance.mark && Ab._Performance.mark(bb + "-Begin")
      }
      static _EndUserMark(bb) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && Ab._Performance.mark && (Ab._Performance.mark(bb + "-End"), Ab._Performance.measure(bb, bb + "-Begin", bb + "-End"))
      }
      static _StartPerformanceConsole(bb) {
        let ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        ab && (Ab._StartUserMark(bb, ab), console.time && console.time(bb))
      }
      static _EndPerformanceConsole(bb) {
        let ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        ab && (Ab._EndUserMark(bb, ab), console.timeEnd(bb))
      }
      static _StartMarkNative(bb) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
          if (Ab._NativePerformanceCounterHandles.has(bb)) Ab.Warn(`Performance counter with name ${bb} is already started.`);
          else {
            const ab = _native.startPerformanceCounter(bb);
            Ab._NativePerformanceCounterHandles.set(bb, ab)
          }
      }
      static _EndMarkNative(bb) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
          const ab = Ab._NativePerformanceCounterHandles.get(bb);
          ab ? (_native.endPerformanceCounter(ab), Ab._NativePerformanceCounterHandles.delete(bb)) : Ab.Warn(`Performance counter with name ${bb} was not started.`)
        }
      }
      static get Now() {
        return Bb.e.Now
      }
      static GetClassName(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ub = null;
        if (!ab && bb.getClassName) Ub = bb.getClassName();
        else {
          if (bb instanceof Object) {
            Ub = (ab ? bb : Object.getPrototypeOf(bb)).constructor.__bjsclassName__
          }
          Ub || (Ub = typeof bb)
        }
        return Ub
      }
      static First(bb, ab) {
        for (const Ub of bb)
          if (ab(Ub)) return Ub;
        return null
      }
      static getFullClassName(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ub = null,
          Ab = null;
        if (!ab && bb.getClassName) Ub = bb.getClassName();
        else {
          if (bb instanceof Object) {
            const Mb = ab ? bb : Object.getPrototypeOf(bb);
            Ub = Mb.constructor.__bjsclassName__, Ab = Mb.constructor.__bjsmoduleName__
          }
          Ub || (Ub = typeof bb)
        }
        return Ub ? (null != Ab ? Ab + "." : "") + Ub : null
      }
      static async DelayAsync(bb) {
        await new Promise((ab => {
          setTimeout((() => {
            ab()
          }), bb)
        }))
      }
      static IsSafari() {
        return !!(0, Tb.g)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }
    }

    function Zb(bb, ab) {
      return Ub => {
        Ub.__bjsclassName__ = bb, Ub.__bjsmoduleName__ = null != ab ? ab : null
      }
    }
    Ab = yb, yb.AssetBaseUrl = "", yb.UseCustomRequestHeaders = !1, yb.CustomRequestHeaders = vb.d.CustomRequestHeaders, yb.GetDOMTextContent = Tb.b, yb._DefaultCdnUrl = "https://cdn.babylonjs.com", yb._CdnVersion = "9.28.0", yb._DefaultAssetsUrl = "https://assets.babylonjs.com/core", yb.LoadScript = "undefined" === typeof _native ? Ab._LoadScriptWeb : Ab._LoadScriptNative, yb.GetAbsoluteUrl = "object" === typeof document ? bb => {
      const ab = document.createElement("a");
      return ab.href = bb, ab.href
    } : "function" === typeof URL && "object" === typeof location ? bb => new URL(bb, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
    }, yb.NoneLogLevel = Eb.e.NoneLogLevel, yb.MessageLogLevel = Eb.e.MessageLogLevel, yb.WarningLogLevel = Eb.e.WarningLogLevel, yb.ErrorLogLevel = Eb.e.ErrorLogLevel, yb.AllLogLevel = Eb.e.AllLogLevel, yb.IsWindowObjectExist = Tb.k, yb.PerformanceNoneLogLevel = 0, yb.PerformanceUserMarkLogLevel = 1, yb.PerformanceConsoleLogLevel = 2, yb._NativePerformanceCounterHandles = new Map, yb.StartPerformanceCounter = Ab._StartPerformanceCounterDisabled, yb.EndPerformanceCounter = Ab._EndPerformanceCounterDisabled;
    class Db {
      constructor(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.iterations = bb, this.index = Ab - 1, this._done = !1, this._fn = ab, this._successCallback = Ub
      }
      executeNext() {
        this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
      }
      breakLoop() {
        this._done = !0, this._successCallback()
      }
      static Run(bb, ab, Ub) {
        const Ab = new Db(bb, ab, Ub, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return Ab.executeNext(), Ab
      }
      static SyncAsyncForLoop(bb, ab, Ub, Ab, Mb) {
        let Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return Db.Run(Math.ceil(bb / ab), (Ab => {
          Mb && Mb() ? Ab.breakLoop() : setTimeout((() => {
            for (let Tb = 0; Tb < ab; ++Tb) {
              const Eb = Ab.index * ab + Tb;
              if (Eb >= bb) break;
              if (Ub(Eb), Mb && Mb()) {
                Ab.breakLoop();
                break
              }
            }
            Ab.executeNext()
          }), Tb)
        }), Ab)
      }
    }
    let zb = !1;

    function xb() {
      zb || (zb = !0, yb.Mix = kb.j, yb.IsExponentOfTwo = kb.g, Lb.d.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z")
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);