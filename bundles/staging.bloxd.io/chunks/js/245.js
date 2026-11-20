export const id = 245;
export const ids = [245];
export const modules = {
  39533: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => ab
    });
    var kb = sb(38284),
      Wb = sb(36698);
    class ab {
      static Instantiate(bb) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[bb]) return this.RegisteredExternalClasses[bb];
        const cb = (0, Wb.e)(bb);
        if (cb) return cb;
        kb.c.Warn(bb + " not found, you may have missed an import.");
        const sb = bb.split(".");
        let ab = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
        for (let kb = 0, Wb = sb.length; kb < Wb; kb++) ab = ab[sb[kb]];
        return "function" !== typeof ab ? null : ab
      }
    }
    ab.RegisteredExternalClasses = {}
  },
  39314: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Wb
    });
    var kb = sb(39278);
    class Wb {
      static get Now() {
        return (0, kb.j)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
      }
    }
  },
  39337: (bb, cb, sb) => {
    function kb(bb) {
      let cb = 1;
      do {
        cb *= 2
      } while (cb < bb);
      return cb === bb
    }

    function Wb(bb, cb, sb) {
      return bb * (1 - sb) + cb * sb
    }

    function ab(bb) {
      const cb = Tb(bb),
        sb = Ub(bb);
      return cb - bb > bb - sb ? sb : cb
    }

    function Tb(bb) {
      return bb--, bb |= bb >> 1, bb |= bb >> 2, bb |= bb >> 4, bb |= bb >> 8, bb |= bb >> 16, ++bb
    }

    function Ub(bb) {
      return bb |= bb >> 1, bb |= bb >> 2, bb |= bb >> 4, bb |= bb >> 8, (bb |= bb >> 16) - (bb >> 1)
    }

    function Ib(bb, cb) {
      let sb;
      switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
        case 1:
          sb = Ub(bb);
          break;
        case 2:
          sb = ab(bb);
          break;
        default:
          sb = Tb(bb)
      }
      return Math.min(sb, cb)
    }
    sb.d(cb, {
      c: () => Ub,
      f: () => Ib,
      h: () => kb,
      l: () => Wb,
      o: () => ab
    })
  },
  39531: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Nb,
      f: () => Lb,
      g: () => eb,
      i: () => Cb
    });
    var kb, Wb = sb(36683),
      ab = sb(39278),
      Tb = sb(38284),
      Ub = sb(38279),
      Ib = sb(39314),
      Hb = sb(39296),
      fb = sb(39475),
      Mb = sb(36677),
      Xb = sb(39466),
      nb = sb(39307),
      mb = sb(39533),
      lb = sb(37501),
      Qb = sb(39337);
    class eb {
      static get BaseUrl() {
        return Xb.e.BaseUrl
      }
      static set BaseUrl(bb) {
        Xb.e.BaseUrl = bb
      }
      static get CleanUrl() {
        return Xb.e.CleanUrl
      }
      static set CleanUrl(bb) {
        Xb.e.CleanUrl = bb
      }
      static IsAbsoluteUrl(bb) {
        return 0 === bb.indexOf("//") || -1 !== bb.indexOf("://") && (-1 !== bb.indexOf(".") && (-1 !== bb.indexOf("/") && (!(bb.indexOf(":") > bb.indexOf("/")) && (bb.indexOf("://") < bb.indexOf(".") || (0 === bb.indexOf("data:") || 0 === bb.indexOf("blob:"))))))
      }
      static set ScriptBaseUrl(bb) {
        Xb.e.ScriptBaseUrl = bb
      }
      static get ScriptBaseUrl() {
        return Xb.e.ScriptBaseUrl
      }
      static set CDNBaseUrl(bb) {
        kb.ScriptBaseUrl = bb, kb.AssetBaseUrl = bb
      }
      static set ScriptPreprocessUrl(bb) {
        Xb.e.ScriptPreprocessUrl = bb
      }
      static get ScriptPreprocessUrl() {
        return Xb.e.ScriptPreprocessUrl
      }
      static get DefaultRetryStrategy() {
        return Xb.e.DefaultRetryStrategy
      }
      static set DefaultRetryStrategy(bb) {
        Xb.e.DefaultRetryStrategy = bb
      }
      static get CorsBehavior() {
        return Xb.e.CorsBehavior
      }
      static set CorsBehavior(bb) {
        Xb.e.CorsBehavior = bb
      }
      static get UseFallbackTexture() {
        return Mb.d.UseFallbackTexture
      }
      static set UseFallbackTexture(bb) {
        Mb.d.UseFallbackTexture = bb
      }
      static get RegisteredExternalClasses() {
        return mb.d.RegisteredExternalClasses
      }
      static set RegisteredExternalClasses(bb) {
        mb.d.RegisteredExternalClasses = bb
      }
      static get fallbackTexture() {
        return Mb.d.FallbackTexture
      }
      static set fallbackTexture(bb) {
        Mb.d.FallbackTexture = bb
      }
      static FetchToRef(bb, cb, sb, kb, Wb, ab) {
        const Tb = 4 * ((Math.abs(bb) * sb % sb | 0) + (Math.abs(cb) * kb % kb | 0) * sb);
        ab.r = Wb[Tb] / 255, ab.g = Wb[Tb + 1] / 255, ab.b = Wb[Tb + 2] / 255, ab.a = Wb[Tb + 3] / 255
      }
      static Mix(bb, cb, sb) {
        return 0
      }
      static Instantiate(bb) {
        return mb.d.Instantiate(bb)
      }
      static SetImmediate(bb) {
        nb.c.SetImmediate(bb)
      }
      static IsExponentOfTwo(bb) {
        return !0
      }
      static FloatRound(bb) {
        return Math.fround(bb)
      }
      static GetFilename(bb) {
        const cb = bb.lastIndexOf("/");
        return cb < 0 ? bb : bb.substring(cb + 1)
      }
      static GetFolderPath(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const sb = bb.lastIndexOf("/");
        return sb < 0 ? cb ? bb : "" : bb.substring(0, sb + 1)
      }
      static ToDegrees(bb) {
        return 180 * bb / Math.PI
      }
      static ToRadians(bb) {
        return bb * Math.PI / 180
      }
      static SmoothAngleChange(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
        const kb = this.ToRadians(bb),
          Wb = this.ToRadians(cb);
        return this.ToDegrees(Math.atan2((1 - sb) * Math.sin(Wb) + sb * Math.sin(kb), (1 - sb) * Math.cos(Wb) + sb * Math.cos(kb)))
      }
      static MakeArray(bb, cb) {
        return !0 === cb || void 0 !== bb && null != bb ? Array.isArray(bb) ? bb : [bb] : null
      }
      static GetPointerPrefix(bb) {
        return (0, ab.j)() && !window.PointerEvent ? "mouse" : "pointer"
      }
      static SetCorsBehavior(bb, cb) {
        (0, Xb.s)(bb, cb)
      }
      static SetReferrerPolicyBehavior(bb, cb) {
        cb.referrerPolicy = bb
      }
      static get PreprocessUrl() {
        return Xb.e.PreprocessUrl
      }
      static set PreprocessUrl(bb) {
        Xb.e.PreprocessUrl = bb
      }
      static LoadImage(bb, cb, sb, kb, Wb, ab) {
        return (0, Xb.m)(bb, cb, sb, kb, Wb, ab)
      }
      static LoadFile(bb, cb, sb, kb, Wb, ab) {
        return (0, Xb.l)(bb, cb, sb, kb, Wb, ab)
      }
      static async LoadFileAsync(bb) {
        let cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return await new Promise(((sb, kb) => {
          (0, Xb.l)(bb, (bb => {
            sb(bb)
          }), void 0, void 0, cb, ((bb, cb) => {
            kb(cb)
          }))
        }))
      }
      static GetAssetUrl(bb) {
        if (!bb) return "";
        if (kb.AssetBaseUrl && bb.startsWith(kb._DefaultAssetsUrl)) {
          const cb = kb.AssetBaseUrl.endsWith("/") ? kb.AssetBaseUrl.slice(0, -1) : kb.AssetBaseUrl;
          return bb.replace(kb._DefaultAssetsUrl, cb)
        }
        return bb
      }
      static GetBabylonScriptURL(bb, cb) {
        if (!bb) return "";
        if (bb.startsWith(kb._DefaultCdnUrl))
          if (kb.ScriptBaseUrl) {
            const cb = kb.ScriptBaseUrl.endsWith("/") ? kb.ScriptBaseUrl.slice(0, -1) : kb.ScriptBaseUrl;
            bb = bb.replace(kb._DefaultCdnUrl, cb)
          } else if (kb._CdnVersion) {
          const cb = `${kb._DefaultCdnUrl}/v${kb._CdnVersion}`;
          bb.startsWith(cb) || (bb = bb.replace(kb._DefaultCdnUrl, cb))
        }
        return bb = kb.ScriptPreprocessUrl(bb), cb && !kb.IsAbsoluteUrl(bb) && (bb = kb.GetAbsoluteUrl(bb)), bb
      }
      static LoadBabylonScript(bb, cb, sb, Wb) {
        bb = kb.GetBabylonScriptURL(bb), kb.LoadScript(bb, cb, sb)
      }
      static async LoadBabylonScriptAsync(bb) {
        return bb = kb.GetBabylonScriptURL(bb), await kb.LoadScriptAsync(bb)
      }
      static _LoadScriptNative(bb, cb, sb, Wb) {
        if (_native) {
          if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
            const bb = "Loading a script as an ES module is not supported in Babylon Native";
            return void sb?.(bb, new Error(bb))
          }
          kb.LoadFile(bb, (bb => {
            try {
              Function(bb).apply(null), cb && cb()
            } catch (kb) {
              sb && sb("LoadScript Error", kb)
            }
          }), void 0, void 0, !1, ((bb, cb) => {
            sb && sb("LoadScript Error", cb)
          }))
        }
      }
      static _LoadScriptWeb(bb, cb, sb, kb) {
        let Wb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" === typeof importScripts) {
          try {
            importScripts(bb), cb && cb()
          } catch (Ib) {
            sb?.(`Unable to load script '${bb}' in worker`, Ib)
          }
          return
        }
        if (!(0, ab.j)()) return void sb?.(`Cannot load script '${bb}' outside of a window or a worker`);
        const Tb = document.getElementsByTagName("head")[0],
          Ub = document.createElement("script");
        Wb ? (Ub.setAttribute("type", "module"), Ub.innerText = bb) : (Ub.setAttribute("type", "text/javascript"), Ub.setAttribute("src", bb)), kb && (Ub.id = kb), Ub.onload = () => {
          cb && cb()
        }, Ub.onerror = cb => {
          sb && sb(`Unable to load script '${bb}'`, cb)
        }, Tb.appendChild(Ub)
      }
      static async LoadScriptAsync(bb, cb) {
        return await new Promise(((sb, kb) => {
          this.LoadScript(bb, (() => {
            sb()
          }), ((bb, cb) => {
            kb(cb || new Error(bb))
          }), cb)
        }))
      }
      static ReadFileAsDataURL(bb, cb, sb) {
        const kb = new FileReader,
          ab = {
            onCompleteObservable: new Wb.c,
            abort: () => kb.abort()
          };
        return kb.onloadend = () => {
          ab.onCompleteObservable.notifyObservers(ab)
        }, kb.onload = bb => {
          cb(bb.target.result)
        }, kb.onprogress = sb, kb.readAsDataURL(bb), ab
      }
      static ReadFile(bb, cb, sb, kb, Wb) {
        return (0, Xb.n)(bb, cb, sb, kb, Wb)
      }
      static FileAsURL(bb) {
        const cb = new Blob([bb]);
        return window.URL.createObjectURL(cb)
      }
      static Format(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return bb.toFixed(cb)
      }
      static DeepCopy(bb, cb, sb, kb) {
        Ub.c.DeepCopy(bb, cb, sb, kb)
      }
      static IsEmpty(bb) {
        for (const cb in bb)
          if (Object.prototype.hasOwnProperty.call(bb, cb)) return !1;
        return !0
      }
      static RegisterTopRootEvents(bb, cb) {
        for (let kb = 0; kb < cb.length; kb++) {
          const Wb = cb[kb];
          bb.addEventListener(Wb.name, Wb.handler, !1);
          try {
            window.parent && window.parent.addEventListener(Wb.name, Wb.handler, !1)
          } catch (sb) {}
        }
      }
      static UnregisterTopRootEvents(bb, cb) {
        for (let kb = 0; kb < cb.length; kb++) {
          const Wb = cb[kb];
          bb.removeEventListener(Wb.name, Wb.handler);
          try {
            bb.parent && bb.parent.removeEventListener(Wb.name, Wb.handler)
          } catch (sb) {}
        }
      }
      static async DumpFramebuffer(bb, cb, sb, kb) {
        throw (0, Hb.i)("DumpTools")
      }
      static DumpData(bb, cb, sb, kb) {
        throw (0, Hb.i)("DumpTools")
      }
      static async DumpDataAsync(bb, cb, sb) {
        throw (0, Hb.i)("DumpTools")
      }
      static _IsOffScreenCanvas(bb) {
        return void 0 !== bb.convertToBlob
      }
      static ToBlob(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          Wb = arguments.length > 3 ? arguments[3] : void 0;
        kb._IsOffScreenCanvas(bb) || bb.toBlob || (bb.toBlob = function(bb, cb, sb) {
          setTimeout((() => {
            const kb = atob(this.toDataURL(cb, sb).split(",")[1]),
              Wb = kb.length,
              ab = new Uint8Array(Wb);
            for (let bb = 0; bb < Wb; bb++) ab[bb] = kb.charCodeAt(bb);
            bb(new Blob([ab]))
          }))
        }), kb._IsOffScreenCanvas(bb) ? bb.convertToBlob({
          type: sb,
          quality: Wb
        }).then((bb => cb(bb))) : bb.toBlob((function(bb) {
          cb(bb)
        }), sb, Wb)
      }
      static DownloadBlob(bb, cb) {
        if ("download" in document.createElement("a")) {
          if (!cb) {
            const bb = new Date;
            cb = "screenshot_" + ((bb.getFullYear() + "-" + (bb.getMonth() + 1)).slice(2) + "-" + bb.getDate() + "_" + bb.getHours() + "-" + ("0" + bb.getMinutes()).slice(-2)) + ".png"
          }
          kb.Download(bb, cb)
        } else if (bb && "undefined" !== typeof URL) {
          const cb = URL.createObjectURL(bb),
            sb = window.open("");
          if (!sb) return;
          const kb = sb.document.createElement("img");
          kb.onload = function() {
            URL.revokeObjectURL(cb)
          }, kb.src = cb, sb.document.body.appendChild(kb)
        }
      }
      static EncodeScreenshotCanvasData(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          Wb = arguments.length > 3 ? arguments[3] : void 0,
          ab = arguments.length > 4 ? arguments[4] : void 0;
        if ("string" !== typeof Wb && cb) {
          if (cb) {
            if (kb._IsOffScreenCanvas(bb)) return void bb.convertToBlob({
              type: sb,
              quality: ab
            }).then((bb => {
              const sb = new FileReader;
              sb.readAsDataURL(bb), sb.onloadend = () => {
                const bb = sb.result;
                cb(bb)
              }
            }));
            const Wb = bb.toDataURL(sb, ab);
            cb(Wb)
          }
        } else this.ToBlob(bb, (function(bb) {
          bb && kb.DownloadBlob(bb, Wb), cb && cb("")
        }), sb, ab)
      }
      static Download(bb, cb) {
        if ("undefined" === typeof URL) return;
        const sb = window.URL.createObjectURL(bb),
          kb = document.createElement("a");
        document.body.appendChild(kb), kb.style.display = "none", kb.href = sb, kb.download = cb, kb.addEventListener("click", (() => {
          kb.parentElement && kb.parentElement.removeChild(kb)
        })), kb.click(), window.URL.revokeObjectURL(sb)
      }
      static BackCompatCameraNoPreventDefault(bb) {
        return "boolean" === typeof bb[0] ? bb[0] : "boolean" === typeof bb[1] && bb[1]
      }
      static CreateScreenshot(bb, cb, sb, kb) {
        throw (0, Hb.i)("ScreenshotTools")
      }
      static async CreateScreenshotAsync(bb, cb, sb) {
        throw (0, Hb.i)("ScreenshotTools")
      }
      static CreateScreenshotUsingRenderTarget(bb, cb, sb, kb) {
        throw (0, Hb.i)("ScreenshotTools")
      }
      static async CreateScreenshotUsingRenderTargetAsync(bb, cb, sb) {
        throw (0, Hb.i)("ScreenshotTools")
      }
      static RandomId() {
        return (0, lb.b)()
      }
      static IsBase64(bb) {
        return (0, Xb.i)(bb)
      }
      static DecodeBase64(bb) {
        return (0, Xb.c)(bb)
      }
      static get errorsCount() {
        return Tb.c.errorsCount
      }
      static Log(bb) {
        Tb.c.Log(bb)
      }
      static Warn(bb) {
        Tb.c.Warn(bb)
      }
      static Error(bb) {
        Tb.c.Error(bb)
      }
      static get LogCache() {
        return Tb.c.LogCache
      }
      static ClearLogCache() {
        Tb.c.ClearLogCache()
      }
      static set LogLevels(bb) {
        Tb.c.LogLevels = bb
      }
      static set PerformanceLogLevel(bb) {
        (bb & kb.PerformanceUserMarkLogLevel) !== kb.PerformanceUserMarkLogLevel ? (bb & kb.PerformanceConsoleLogLevel) !== kb.PerformanceConsoleLogLevel ? (kb.StartPerformanceCounter = kb._StartPerformanceCounterDisabled, kb.EndPerformanceCounter = kb._EndPerformanceCounterDisabled, _native?.disablePerformanceLogging?.()) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(2), kb.StartPerformanceCounter = kb._StartMarkNative, kb.EndPerformanceCounter = kb._EndMarkNative) : (kb.StartPerformanceCounter = kb._StartPerformanceConsole, kb.EndPerformanceCounter = kb._EndPerformanceConsole) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(1), kb.StartPerformanceCounter = kb._StartMarkNative, kb.EndPerformanceCounter = kb._EndMarkNative) : (kb.StartPerformanceCounter = kb._StartUserMark, kb.EndPerformanceCounter = kb._EndUserMark)
      }
      static _StartPerformanceCounterDisabled(bb, cb) {}
      static _EndPerformanceCounterDisabled(bb, cb) {}
      static _StartUserMark(bb) {
        let cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!kb._Performance) {
          if (!(0, ab.j)()) return;
          kb._Performance = window.performance
        }
        cb && kb._Performance.mark && kb._Performance.mark(bb + "-Begin")
      }
      static _EndUserMark(bb) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && kb._Performance.mark && (kb._Performance.mark(bb + "-End"), kb._Performance.measure(bb, bb + "-Begin", bb + "-End"))
      }
      static _StartPerformanceConsole(bb) {
        let cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        cb && (kb._StartUserMark(bb, cb), console.time && console.time(bb))
      }
      static _EndPerformanceConsole(bb) {
        let cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        cb && (kb._EndUserMark(bb, cb), console.timeEnd(bb))
      }
      static _StartMarkNative(bb) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
          if (kb._NativePerformanceCounterHandles.has(bb)) kb.Warn(`Performance counter with name ${bb} is already started.`);
          else {
            const cb = _native.startPerformanceCounter(bb);
            kb._NativePerformanceCounterHandles.set(bb, cb)
          }
      }
      static _EndMarkNative(bb) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
          const cb = kb._NativePerformanceCounterHandles.get(bb);
          cb ? (_native.endPerformanceCounter(cb), kb._NativePerformanceCounterHandles.delete(bb)) : kb.Warn(`Performance counter with name ${bb} was not started.`)
        }
      }
      static get Now() {
        return Ib.e.Now
      }
      static GetClassName(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sb = null;
        if (!cb && bb.getClassName) sb = bb.getClassName();
        else {
          if (bb instanceof Object) {
            sb = (cb ? bb : Object.getPrototypeOf(bb)).constructor.__bjsclassName__
          }
          sb || (sb = typeof bb)
        }
        return sb
      }
      static First(bb, cb) {
        for (const sb of bb)
          if (cb(sb)) return sb;
        return null
      }
      static getFullClassName(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sb = null,
          kb = null;
        if (!cb && bb.getClassName) sb = bb.getClassName();
        else {
          if (bb instanceof Object) {
            const Wb = cb ? bb : Object.getPrototypeOf(bb);
            sb = Wb.constructor.__bjsclassName__, kb = Wb.constructor.__bjsmoduleName__
          }
          sb || (sb = typeof bb)
        }
        return sb ? (null != kb ? kb + "." : "") + sb : null
      }
      static async DelayAsync(bb) {
        await new Promise((cb => {
          setTimeout((() => {
            cb()
          }), bb)
        }))
      }
      static IsSafari() {
        return !!(0, ab.h)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }
    }

    function Cb(bb, cb) {
      return sb => {
        sb.__bjsclassName__ = bb, sb.__bjsmoduleName__ = null != cb ? cb : null
      }
    }
    kb = eb, eb.AssetBaseUrl = "", eb.UseCustomRequestHeaders = !1, eb.CustomRequestHeaders = fb.c.CustomRequestHeaders, eb.GetDOMTextContent = ab.d, eb._DefaultCdnUrl = "https://cdn.babylonjs.com", eb._CdnVersion = "9.28.0", eb._DefaultAssetsUrl = "https://assets.babylonjs.com/core", eb.LoadScript = "undefined" === typeof _native ? kb._LoadScriptWeb : kb._LoadScriptNative, eb.GetAbsoluteUrl = "object" === typeof document ? bb => {
      const cb = document.createElement("a");
      return cb.href = bb, cb.href
    } : "function" === typeof URL && "object" === typeof location ? bb => new URL(bb, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
    }, eb.NoneLogLevel = Tb.c.NoneLogLevel, eb.MessageLogLevel = Tb.c.MessageLogLevel, eb.WarningLogLevel = Tb.c.WarningLogLevel, eb.ErrorLogLevel = Tb.c.ErrorLogLevel, eb.AllLogLevel = Tb.c.AllLogLevel, eb.IsWindowObjectExist = ab.j, eb.PerformanceNoneLogLevel = 0, eb.PerformanceUserMarkLogLevel = 1, eb.PerformanceConsoleLogLevel = 2, eb._NativePerformanceCounterHandles = new Map, eb.StartPerformanceCounter = kb._StartPerformanceCounterDisabled, eb.EndPerformanceCounter = kb._EndPerformanceCounterDisabled;
    class Nb {
      constructor(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.iterations = bb, this.index = kb - 1, this._done = !1, this._fn = cb, this._successCallback = sb
      }
      executeNext() {
        this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
      }
      breakLoop() {
        this._done = !0, this._successCallback()
      }
      static Run(bb, cb, sb) {
        const kb = new Nb(bb, cb, sb, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return kb.executeNext(), kb
      }
      static SyncAsyncForLoop(bb, cb, sb, kb, Wb) {
        let ab = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return Nb.Run(Math.ceil(bb / cb), (kb => {
          Wb && Wb() ? kb.breakLoop() : setTimeout((() => {
            for (let ab = 0; ab < cb; ++ab) {
              const Tb = kb.index * cb + ab;
              if (Tb >= bb) break;
              if (sb(Tb), Wb && Wb()) {
                kb.breakLoop();
                break
              }
            }
            kb.executeNext()
          }), ab)
        }), kb)
      }
    }
    let Vb = !1;

    function Lb() {
      Vb || (Vb = !0, eb.Mix = Qb.l, eb.IsExponentOfTwo = Qb.h, Mb.d.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z")
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);