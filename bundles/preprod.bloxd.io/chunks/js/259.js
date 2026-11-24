export const id = 259;
export const ids = [259];
export const modules = {
  40306: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Ip
    });
    var Op = cp(38905),
      op = cp(37368);
    class Ip {
      static Instantiate(pp) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[pp]) return this.RegisteredExternalClasses[pp];
        const ip = (0, op.d)(pp);
        if (ip) return ip;
        Op.e.Warn(pp + " not found, you may have missed an import.");
        const cp = pp.split(".");
        let Ip = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
        for (let Op = 0, op = cp.length; Op < op; Op++) Ip = Ip[cp[Op]];
        return "function" !== typeof Ip ? null : Ip
      }
    }
    Ip.RegisteredExternalClasses = {}
  },
  40122: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => op
    });
    var Op = cp(40071);
    class op {
      static get Now() {
        return (0, Op.j)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
      }
    }
  },
  40143: (pp, ip, cp) => {
    function Op(pp) {
      let ip = 1;
      do {
        ip *= 2
      } while (ip < pp);
      return ip === pp
    }

    function op(pp, ip, cp) {
      return pp * (1 - cp) + ip * cp
    }

    function Ip(pp) {
      const ip = Sp(pp),
        cp = xp(pp);
      return ip - pp > pp - cp ? cp : ip
    }

    function Sp(pp) {
      return pp--, pp |= pp >> 1, pp |= pp >> 2, pp |= pp >> 4, pp |= pp >> 8, pp |= pp >> 16, ++pp
    }

    function xp(pp) {
      return pp |= pp >> 1, pp |= pp >> 2, pp |= pp >> 4, pp |= pp >> 8, (pp |= pp >> 16) - (pp >> 1)
    }

    function Lp(pp, ip) {
      let cp;
      switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
        case 1:
          cp = xp(pp);
          break;
        case 2:
          cp = Ip(pp);
          break;
        default:
          cp = Sp(pp)
      }
      return Math.min(cp, ip)
    }
    cp.d(ip, {
      b: () => xp,
      e: () => Lp,
      h: () => Op,
      i: () => op,
      l: () => Ip
    })
  },
  40304: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Hp,
      g: () => ep,
      i: () => vp,
      l: () => tp
    });
    var Op, op = cp(37349),
      Ip = cp(40071),
      Sp = cp(38905),
      xp = cp(38900),
      Lp = cp(40122),
      Yp = cp(40096),
      Dp = cp(40261),
      Ap = cp(37345),
      Pp = cp(40257),
      Wp = cp(40107),
      yp = cp(40306),
      Up = cp(38124),
      wp = cp(40143);
    class vp {
      static get BaseUrl() {
        return Pp.c.BaseUrl
      }
      static set BaseUrl(pp) {
        Pp.c.BaseUrl = pp
      }
      static get CleanUrl() {
        return Pp.c.CleanUrl
      }
      static set CleanUrl(pp) {
        Pp.c.CleanUrl = pp
      }
      static IsAbsoluteUrl(pp) {
        return 0 === pp.indexOf("//") || -1 !== pp.indexOf("://") && (-1 !== pp.indexOf(".") && (-1 !== pp.indexOf("/") && (!(pp.indexOf(":") > pp.indexOf("/")) && (pp.indexOf("://") < pp.indexOf(".") || (0 === pp.indexOf("data:") || 0 === pp.indexOf("blob:"))))))
      }
      static set ScriptBaseUrl(pp) {
        Pp.c.ScriptBaseUrl = pp
      }
      static get ScriptBaseUrl() {
        return Pp.c.ScriptBaseUrl
      }
      static set CDNBaseUrl(pp) {
        Op.ScriptBaseUrl = pp, Op.AssetBaseUrl = pp
      }
      static set ScriptPreprocessUrl(pp) {
        Pp.c.ScriptPreprocessUrl = pp
      }
      static get ScriptPreprocessUrl() {
        return Pp.c.ScriptPreprocessUrl
      }
      static get DefaultRetryStrategy() {
        return Pp.c.DefaultRetryStrategy
      }
      static set DefaultRetryStrategy(pp) {
        Pp.c.DefaultRetryStrategy = pp
      }
      static get CorsBehavior() {
        return Pp.c.CorsBehavior
      }
      static set CorsBehavior(pp) {
        Pp.c.CorsBehavior = pp
      }
      static get UseFallbackTexture() {
        return Ap.e.UseFallbackTexture
      }
      static set UseFallbackTexture(pp) {
        Ap.e.UseFallbackTexture = pp
      }
      static get RegisteredExternalClasses() {
        return yp.d.RegisteredExternalClasses
      }
      static set RegisteredExternalClasses(pp) {
        yp.d.RegisteredExternalClasses = pp
      }
      static get fallbackTexture() {
        return Ap.e.FallbackTexture
      }
      static set fallbackTexture(pp) {
        Ap.e.FallbackTexture = pp
      }
      static FetchToRef(pp, ip, cp, Op, op, Ip) {
        const Sp = 4 * ((Math.abs(pp) * cp % cp | 0) + (Math.abs(ip) * Op % Op | 0) * cp);
        Ip.r = op[Sp] / 255, Ip.g = op[Sp + 1] / 255, Ip.b = op[Sp + 2] / 255, Ip.a = op[Sp + 3] / 255
      }
      static Mix(pp, ip, cp) {
        return 0
      }
      static Instantiate(pp) {
        return yp.d.Instantiate(pp)
      }
      static SetImmediate(pp) {
        Wp.b.SetImmediate(pp)
      }
      static IsExponentOfTwo(pp) {
        return !0
      }
      static FloatRound(pp) {
        return Math.fround(pp)
      }
      static GetFilename(pp) {
        const ip = pp.lastIndexOf("/");
        return ip < 0 ? pp : pp.substring(ip + 1)
      }
      static GetFolderPath(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const cp = pp.lastIndexOf("/");
        return cp < 0 ? ip ? pp : "" : pp.substring(0, cp + 1)
      }
      static ToDegrees(pp) {
        return 180 * pp / Math.PI
      }
      static ToRadians(pp) {
        return pp * Math.PI / 180
      }
      static SmoothAngleChange(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
        const Op = this.ToRadians(pp),
          op = this.ToRadians(ip);
        return this.ToDegrees(Math.atan2((1 - cp) * Math.sin(op) + cp * Math.sin(Op), (1 - cp) * Math.cos(op) + cp * Math.cos(Op)))
      }
      static MakeArray(pp, ip) {
        return !0 === ip || void 0 !== pp && null != pp ? Array.isArray(pp) ? pp : [pp] : null
      }
      static GetPointerPrefix(pp) {
        return (0, Ip.j)() && !window.PointerEvent ? "mouse" : "pointer"
      }
      static SetCorsBehavior(pp, ip) {
        (0, Pp.y)(pp, ip)
      }
      static SetReferrerPolicyBehavior(pp, ip) {
        ip.referrerPolicy = pp
      }
      static get PreprocessUrl() {
        return Pp.c.PreprocessUrl
      }
      static set PreprocessUrl(pp) {
        Pp.c.PreprocessUrl = pp
      }
      static LoadImage(pp, ip, cp, Op, op, Ip) {
        return (0, Pp.p)(pp, ip, cp, Op, op, Ip)
      }
      static LoadFile(pp, ip, cp, Op, op, Ip) {
        return (0, Pp.l)(pp, ip, cp, Op, op, Ip)
      }
      static async LoadFileAsync(pp) {
        let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return await new Promise(((cp, Op) => {
          (0, Pp.l)(pp, (pp => {
            cp(pp)
          }), void 0, void 0, ip, ((pp, ip) => {
            Op(ip)
          }))
        }))
      }
      static GetAssetUrl(pp) {
        if (!pp) return "";
        if (Op.AssetBaseUrl && pp.startsWith(Op._DefaultAssetsUrl)) {
          const ip = Op.AssetBaseUrl.endsWith("/") ? Op.AssetBaseUrl.slice(0, -1) : Op.AssetBaseUrl;
          return pp.replace(Op._DefaultAssetsUrl, ip)
        }
        return pp
      }
      static GetBabylonScriptURL(pp, ip) {
        if (!pp) return "";
        if (pp.startsWith(Op._DefaultCdnUrl))
          if (Op.ScriptBaseUrl) {
            const ip = Op.ScriptBaseUrl.endsWith("/") ? Op.ScriptBaseUrl.slice(0, -1) : Op.ScriptBaseUrl;
            pp = pp.replace(Op._DefaultCdnUrl, ip)
          } else if (Op._CdnVersion) {
          const ip = `${Op._DefaultCdnUrl}/v${Op._CdnVersion}`;
          pp.startsWith(ip) || (pp = pp.replace(Op._DefaultCdnUrl, ip))
        }
        return pp = Op.ScriptPreprocessUrl(pp), ip && !Op.IsAbsoluteUrl(pp) && (pp = Op.GetAbsoluteUrl(pp)), pp
      }
      static LoadBabylonScript(pp, ip, cp, op) {
        pp = Op.GetBabylonScriptURL(pp), Op.LoadScript(pp, ip, cp)
      }
      static async LoadBabylonScriptAsync(pp) {
        return pp = Op.GetBabylonScriptURL(pp), await Op.LoadScriptAsync(pp)
      }
      static _LoadScriptNative(pp, ip, cp, op) {
        if (_native) {
          if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
            const pp = "Loading a script as an ES module is not supported in Babylon Native";
            return void cp?.(pp, new Error(pp))
          }
          Op.LoadFile(pp, (pp => {
            try {
              Function(pp).apply(null), ip && ip()
            } catch (Op) {
              cp && cp("LoadScript Error", Op)
            }
          }), void 0, void 0, !1, ((pp, ip) => {
            cp && cp("LoadScript Error", ip)
          }))
        }
      }
      static _LoadScriptWeb(pp, ip, cp, Op) {
        let op = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" === typeof importScripts) {
          try {
            importScripts(pp), ip && ip()
          } catch (Lp) {
            cp?.(`Unable to load script '${pp}' in worker`, Lp)
          }
          return
        }
        if (!(0, Ip.j)()) return void cp?.(`Cannot load script '${pp}' outside of a window or a worker`);
        const Sp = document.getElementsByTagName("head")[0],
          xp = document.createElement("script");
        op ? (xp.setAttribute("type", "module"), xp.innerText = pp) : (xp.setAttribute("type", "text/javascript"), xp.setAttribute("src", pp)), Op && (xp.id = Op), xp.onload = () => {
          ip && ip()
        }, xp.onerror = ip => {
          cp && cp(`Unable to load script '${pp}'`, ip)
        }, Sp.appendChild(xp)
      }
      static async LoadScriptAsync(pp, ip) {
        return await new Promise(((cp, Op) => {
          this.LoadScript(pp, (() => {
            cp()
          }), ((pp, ip) => {
            Op(ip || new Error(pp))
          }), ip)
        }))
      }
      static ReadFileAsDataURL(pp, ip, cp) {
        const Op = new FileReader,
          Ip = {
            onCompleteObservable: new op.d,
            abort: () => Op.abort()
          };
        return Op.onloadend = () => {
          Ip.onCompleteObservable.notifyObservers(Ip)
        }, Op.onload = pp => {
          ip(pp.target.result)
        }, Op.onprogress = cp, Op.readAsDataURL(pp), Ip
      }
      static ReadFile(pp, ip, cp, Op, op) {
        return (0, Pp.r)(pp, ip, cp, Op, op)
      }
      static FileAsURL(pp) {
        const ip = new Blob([pp]);
        return window.URL.createObjectURL(ip)
      }
      static Format(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return pp.toFixed(ip)
      }
      static DeepCopy(pp, ip, cp, Op) {
        xp.e.DeepCopy(pp, ip, cp, Op)
      }
      static IsEmpty(pp) {
        for (const ip in pp)
          if (Object.prototype.hasOwnProperty.call(pp, ip)) return !1;
        return !0
      }
      static RegisterTopRootEvents(pp, ip) {
        for (let Op = 0; Op < ip.length; Op++) {
          const op = ip[Op];
          pp.addEventListener(op.name, op.handler, !1);
          try {
            window.parent && window.parent.addEventListener(op.name, op.handler, !1)
          } catch (cp) {}
        }
      }
      static UnregisterTopRootEvents(pp, ip) {
        for (let Op = 0; Op < ip.length; Op++) {
          const op = ip[Op];
          pp.removeEventListener(op.name, op.handler);
          try {
            pp.parent && pp.parent.removeEventListener(op.name, op.handler)
          } catch (cp) {}
        }
      }
      static async DumpFramebuffer(pp, ip, cp, Op) {
        throw (0, Yp.o)("DumpTools")
      }
      static DumpData(pp, ip, cp, Op) {
        throw (0, Yp.o)("DumpTools")
      }
      static async DumpDataAsync(pp, ip, cp) {
        throw (0, Yp.o)("DumpTools")
      }
      static _IsOffScreenCanvas(pp) {
        return void 0 !== pp.convertToBlob
      }
      static ToBlob(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          op = arguments.length > 3 ? arguments[3] : void 0;
        Op._IsOffScreenCanvas(pp) || pp.toBlob || (pp.toBlob = function(pp, ip, cp) {
          setTimeout((() => {
            const Op = atob(this.toDataURL(ip, cp).split(",")[1]),
              op = Op.length,
              Ip = new Uint8Array(op);
            for (let pp = 0; pp < op; pp++) Ip[pp] = Op.charCodeAt(pp);
            pp(new Blob([Ip]))
          }))
        }), Op._IsOffScreenCanvas(pp) ? pp.convertToBlob({
          type: cp,
          quality: op
        }).then((pp => ip(pp))) : pp.toBlob((function(pp) {
          ip(pp)
        }), cp, op)
      }
      static DownloadBlob(pp, ip) {
        if ("download" in document.createElement("a")) {
          if (!ip) {
            const pp = new Date;
            ip = "screenshot_" + ((pp.getFullYear() + "-" + (pp.getMonth() + 1)).slice(2) + "-" + pp.getDate() + "_" + pp.getHours() + "-" + ("0" + pp.getMinutes()).slice(-2)) + ".png"
          }
          Op.Download(pp, ip)
        } else if (pp && "undefined" !== typeof URL) {
          const ip = URL.createObjectURL(pp),
            cp = window.open("");
          if (!cp) return;
          const Op = cp.document.createElement("img");
          Op.onload = function() {
            URL.revokeObjectURL(ip)
          }, Op.src = ip, cp.document.body.appendChild(Op)
        }
      }
      static EncodeScreenshotCanvasData(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          op = arguments.length > 3 ? arguments[3] : void 0,
          Ip = arguments.length > 4 ? arguments[4] : void 0;
        if ("string" !== typeof op && ip) {
          if (ip) {
            if (Op._IsOffScreenCanvas(pp)) return void pp.convertToBlob({
              type: cp,
              quality: Ip
            }).then((pp => {
              const cp = new FileReader;
              cp.readAsDataURL(pp), cp.onloadend = () => {
                const pp = cp.result;
                ip(pp)
              }
            }));
            const op = pp.toDataURL(cp, Ip);
            ip(op)
          }
        } else this.ToBlob(pp, (function(pp) {
          pp && Op.DownloadBlob(pp, op), ip && ip("")
        }), cp, Ip)
      }
      static Download(pp, ip) {
        if ("undefined" === typeof URL) return;
        const cp = window.URL.createObjectURL(pp),
          Op = document.createElement("a");
        document.body.appendChild(Op), Op.style.display = "none", Op.href = cp, Op.download = ip, Op.addEventListener("click", (() => {
          Op.parentElement && Op.parentElement.removeChild(Op)
        })), Op.click(), window.URL.revokeObjectURL(cp)
      }
      static BackCompatCameraNoPreventDefault(pp) {
        return "boolean" === typeof pp[0] ? pp[0] : "boolean" === typeof pp[1] && pp[1]
      }
      static CreateScreenshot(pp, ip, cp, Op) {
        throw (0, Yp.o)("ScreenshotTools")
      }
      static async CreateScreenshotAsync(pp, ip, cp) {
        throw (0, Yp.o)("ScreenshotTools")
      }
      static CreateScreenshotUsingRenderTarget(pp, ip, cp, Op) {
        throw (0, Yp.o)("ScreenshotTools")
      }
      static async CreateScreenshotUsingRenderTargetAsync(pp, ip, cp) {
        throw (0, Yp.o)("ScreenshotTools")
      }
      static RandomId() {
        return (0, Up.e)()
      }
      static IsBase64(pp) {
        return (0, Pp.k)(pp)
      }
      static DecodeBase64(pp) {
        return (0, Pp.b)(pp)
      }
      static get errorsCount() {
        return Sp.e.errorsCount
      }
      static Log(pp) {
        Sp.e.Log(pp)
      }
      static Warn(pp) {
        Sp.e.Warn(pp)
      }
      static Error(pp) {
        Sp.e.Error(pp)
      }
      static get LogCache() {
        return Sp.e.LogCache
      }
      static ClearLogCache() {
        Sp.e.ClearLogCache()
      }
      static set LogLevels(pp) {
        Sp.e.LogLevels = pp
      }
      static set PerformanceLogLevel(pp) {
        (pp & Op.PerformanceUserMarkLogLevel) !== Op.PerformanceUserMarkLogLevel ? (pp & Op.PerformanceConsoleLogLevel) !== Op.PerformanceConsoleLogLevel ? (Op.StartPerformanceCounter = Op._StartPerformanceCounterDisabled, Op.EndPerformanceCounter = Op._EndPerformanceCounterDisabled, _native?.disablePerformanceLogging?.()) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(2), Op.StartPerformanceCounter = Op._StartMarkNative, Op.EndPerformanceCounter = Op._EndMarkNative) : (Op.StartPerformanceCounter = Op._StartPerformanceConsole, Op.EndPerformanceCounter = Op._EndPerformanceConsole) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(1), Op.StartPerformanceCounter = Op._StartMarkNative, Op.EndPerformanceCounter = Op._EndMarkNative) : (Op.StartPerformanceCounter = Op._StartUserMark, Op.EndPerformanceCounter = Op._EndUserMark)
      }
      static _StartPerformanceCounterDisabled(pp, ip) {}
      static _EndPerformanceCounterDisabled(pp, ip) {}
      static _StartUserMark(pp) {
        let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!Op._Performance) {
          if (!(0, Ip.j)()) return;
          Op._Performance = window.performance
        }
        ip && Op._Performance.mark && Op._Performance.mark(pp + "-Begin")
      }
      static _EndUserMark(pp) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && Op._Performance.mark && (Op._Performance.mark(pp + "-End"), Op._Performance.measure(pp, pp + "-Begin", pp + "-End"))
      }
      static _StartPerformanceConsole(pp) {
        let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        ip && (Op._StartUserMark(pp, ip), console.time && console.time(pp))
      }
      static _EndPerformanceConsole(pp) {
        let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        ip && (Op._EndUserMark(pp, ip), console.timeEnd(pp))
      }
      static _StartMarkNative(pp) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
          if (Op._NativePerformanceCounterHandles.has(pp)) Op.Warn(`Performance counter with name ${pp} is already started.`);
          else {
            const ip = _native.startPerformanceCounter(pp);
            Op._NativePerformanceCounterHandles.set(pp, ip)
          }
      }
      static _EndMarkNative(pp) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
          const ip = Op._NativePerformanceCounterHandles.get(pp);
          ip ? (_native.endPerformanceCounter(ip), Op._NativePerformanceCounterHandles.delete(pp)) : Op.Warn(`Performance counter with name ${pp} was not started.`)
        }
      }
      static get Now() {
        return Lp.e.Now
      }
      static GetClassName(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cp = null;
        if (!ip && pp.getClassName) cp = pp.getClassName();
        else {
          if (pp instanceof Object) {
            cp = (ip ? pp : Object.getPrototypeOf(pp)).constructor.__bjsclassName__
          }
          cp || (cp = typeof pp)
        }
        return cp
      }
      static First(pp, ip) {
        for (const cp of pp)
          if (ip(cp)) return cp;
        return null
      }
      static getFullClassName(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cp = null,
          Op = null;
        if (!ip && pp.getClassName) cp = pp.getClassName();
        else {
          if (pp instanceof Object) {
            const op = ip ? pp : Object.getPrototypeOf(pp);
            cp = op.constructor.__bjsclassName__, Op = op.constructor.__bjsmoduleName__
          }
          cp || (cp = typeof pp)
        }
        return cp ? (null != Op ? Op + "." : "") + cp : null
      }
      static async DelayAsync(pp) {
        await new Promise((ip => {
          setTimeout((() => {
            ip()
          }), pp)
        }))
      }
      static IsSafari() {
        return !!(0, Ip.h)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }
    }

    function tp(pp, ip) {
      return cp => {
        cp.__bjsclassName__ = pp, cp.__bjsmoduleName__ = null != ip ? ip : null
      }
    }
    Op = vp, vp.AssetBaseUrl = "", vp.UseCustomRequestHeaders = !1, vp.CustomRequestHeaders = Dp.e.CustomRequestHeaders, vp.GetDOMTextContent = Ip.d, vp._DefaultCdnUrl = "https://cdn.babylonjs.com", vp._CdnVersion = "9.28.0", vp._DefaultAssetsUrl = "https://assets.babylonjs.com/core", vp.LoadScript = "undefined" === typeof _native ? Op._LoadScriptWeb : Op._LoadScriptNative, vp.GetAbsoluteUrl = "object" === typeof document ? pp => {
      const ip = document.createElement("a");
      return ip.href = pp, ip.href
    } : "function" === typeof URL && "object" === typeof location ? pp => new URL(pp, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
    }, vp.NoneLogLevel = Sp.e.NoneLogLevel, vp.MessageLogLevel = Sp.e.MessageLogLevel, vp.WarningLogLevel = Sp.e.WarningLogLevel, vp.ErrorLogLevel = Sp.e.ErrorLogLevel, vp.AllLogLevel = Sp.e.AllLogLevel, vp.IsWindowObjectExist = Ip.j, vp.PerformanceNoneLogLevel = 0, vp.PerformanceUserMarkLogLevel = 1, vp.PerformanceConsoleLogLevel = 2, vp._NativePerformanceCounterHandles = new Map, vp.StartPerformanceCounter = Op._StartPerformanceCounterDisabled, vp.EndPerformanceCounter = Op._EndPerformanceCounterDisabled;
    class Hp {
      constructor(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.iterations = pp, this.index = Op - 1, this._done = !1, this._fn = ip, this._successCallback = cp
      }
      executeNext() {
        this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
      }
      breakLoop() {
        this._done = !0, this._successCallback()
      }
      static Run(pp, ip, cp) {
        const Op = new Hp(pp, ip, cp, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return Op.executeNext(), Op
      }
      static SyncAsyncForLoop(pp, ip, cp, Op, op) {
        let Ip = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return Hp.Run(Math.ceil(pp / ip), (Op => {
          op && op() ? Op.breakLoop() : setTimeout((() => {
            for (let Ip = 0; Ip < ip; ++Ip) {
              const Sp = Op.index * ip + Ip;
              if (Sp >= pp) break;
              if (cp(Sp), op && op()) {
                Op.breakLoop();
                break
              }
            }
            Op.executeNext()
          }), Ip)
        }), Op)
      }
    }
    let dp = !1;

    function ep() {
      dp || (dp = !0, vp.Mix = wp.i, vp.IsExponentOfTwo = wp.h, Ap.e.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z")
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);