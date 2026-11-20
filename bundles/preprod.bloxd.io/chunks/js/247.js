export const id = 247;
export const ids = [247];
export const modules = {
  39853: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Oq
    });
    var Yq = gq(38653),
      lq = gq(37171);
    class Oq {
      static Instantiate(qq) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[qq]) return this.RegisteredExternalClasses[qq];
        const Eq = (0, lq.e)(qq);
        if (Eq) return Eq;
        Yq.b.Warn(qq + " not found, you may have missed an import.");
        const gq = qq.split(".");
        let Oq = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
        for (let Yq = 0, lq = gq.length; Yq < lq; Yq++) Oq = Oq[gq[Yq]];
        return "function" !== typeof Oq ? null : Oq
      }
    }
    Oq.RegisteredExternalClasses = {}
  },
  39662: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => lq
    });
    var Yq = gq(39626);
    class lq {
      static get Now() {
        return (0, Yq.n)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
      }
    }
  },
  39696: (qq, Eq, gq) => {
    function Yq(qq) {
      let Eq = 1;
      do {
        Eq *= 2
      } while (Eq < qq);
      return Eq === qq
    }

    function lq(qq, Eq, gq) {
      return qq * (1 - gq) + Eq * gq
    }

    function Oq(qq) {
      const Eq = mq(qq),
        gq = xq(qq);
      return Eq - qq > qq - gq ? gq : Eq
    }

    function mq(qq) {
      return qq--, qq |= qq >> 1, qq |= qq >> 2, qq |= qq >> 4, qq |= qq >> 8, qq |= qq >> 16, ++qq
    }

    function xq(qq) {
      return qq |= qq >> 1, qq |= qq >> 2, qq |= qq >> 4, qq |= qq >> 8, (qq |= qq >> 16) - (qq >> 1)
    }

    function Aq(qq, Eq) {
      let gq;
      switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
        case 1:
          gq = xq(qq);
          break;
        case 2:
          gq = Oq(qq);
          break;
        default:
          gq = mq(qq)
      }
      return Math.min(gq, Eq)
    }
    gq.d(Eq, {
      d: () => xq,
      g: () => Aq,
      k: () => Yq,
      o: () => lq,
      q: () => Oq
    })
  },
  39845: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => oq,
      e: () => Qq,
      f: () => jq,
      h: () => Hq
    });
    var Yq, lq = gq(37156),
      Oq = gq(39626),
      mq = gq(38653),
      xq = gq(38649),
      Aq = gq(39662),
      cq = gq(39636),
      uq = gq(39801),
      Bq = gq(37153),
      Wq = gq(39799),
      Nq = gq(39644),
      aq = gq(39853),
      Vq = gq(37872),
      dq = gq(39696);
    class jq {
      static get BaseUrl() {
        return Wq.i.BaseUrl
      }
      static set BaseUrl(qq) {
        Wq.i.BaseUrl = qq
      }
      static get CleanUrl() {
        return Wq.i.CleanUrl
      }
      static set CleanUrl(qq) {
        Wq.i.CleanUrl = qq
      }
      static IsAbsoluteUrl(qq) {
        return 0 === qq.indexOf("//") || -1 !== qq.indexOf("://") && (-1 !== qq.indexOf(".") && (-1 !== qq.indexOf("/") && (!(qq.indexOf(":") > qq.indexOf("/")) && (qq.indexOf("://") < qq.indexOf(".") || (0 === qq.indexOf("data:") || 0 === qq.indexOf("blob:"))))))
      }
      static set ScriptBaseUrl(qq) {
        Wq.i.ScriptBaseUrl = qq
      }
      static get ScriptBaseUrl() {
        return Wq.i.ScriptBaseUrl
      }
      static set CDNBaseUrl(qq) {
        Yq.ScriptBaseUrl = qq, Yq.AssetBaseUrl = qq
      }
      static set ScriptPreprocessUrl(qq) {
        Wq.i.ScriptPreprocessUrl = qq
      }
      static get ScriptPreprocessUrl() {
        return Wq.i.ScriptPreprocessUrl
      }
      static get DefaultRetryStrategy() {
        return Wq.i.DefaultRetryStrategy
      }
      static set DefaultRetryStrategy(qq) {
        Wq.i.DefaultRetryStrategy = qq
      }
      static get CorsBehavior() {
        return Wq.i.CorsBehavior
      }
      static set CorsBehavior(qq) {
        Wq.i.CorsBehavior = qq
      }
      static get UseFallbackTexture() {
        return Bq.b.UseFallbackTexture
      }
      static set UseFallbackTexture(qq) {
        Bq.b.UseFallbackTexture = qq
      }
      static get RegisteredExternalClasses() {
        return aq.d.RegisteredExternalClasses
      }
      static set RegisteredExternalClasses(qq) {
        aq.d.RegisteredExternalClasses = qq
      }
      static get fallbackTexture() {
        return Bq.b.FallbackTexture
      }
      static set fallbackTexture(qq) {
        Bq.b.FallbackTexture = qq
      }
      static FetchToRef(qq, Eq, gq, Yq, lq, Oq) {
        const mq = 4 * ((Math.abs(qq) * gq % gq | 0) + (Math.abs(Eq) * Yq % Yq | 0) * gq);
        Oq.r = lq[mq] / 255, Oq.g = lq[mq + 1] / 255, Oq.b = lq[mq + 2] / 255, Oq.a = lq[mq + 3] / 255
      }
      static Mix(qq, Eq, gq) {
        return 0
      }
      static Instantiate(qq) {
        return aq.d.Instantiate(qq)
      }
      static SetImmediate(qq) {
        Nq.c.SetImmediate(qq)
      }
      static IsExponentOfTwo(qq) {
        return !0
      }
      static FloatRound(qq) {
        return Math.fround(qq)
      }
      static GetFilename(qq) {
        const Eq = qq.lastIndexOf("/");
        return Eq < 0 ? qq : qq.substring(Eq + 1)
      }
      static GetFolderPath(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const gq = qq.lastIndexOf("/");
        return gq < 0 ? Eq ? qq : "" : qq.substring(0, gq + 1)
      }
      static ToDegrees(qq) {
        return 180 * qq / Math.PI
      }
      static ToRadians(qq) {
        return qq * Math.PI / 180
      }
      static SmoothAngleChange(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
        const Yq = this.ToRadians(qq),
          lq = this.ToRadians(Eq);
        return this.ToDegrees(Math.atan2((1 - gq) * Math.sin(lq) + gq * Math.sin(Yq), (1 - gq) * Math.cos(lq) + gq * Math.cos(Yq)))
      }
      static MakeArray(qq, Eq) {
        return !0 === Eq || void 0 !== qq && null != qq ? Array.isArray(qq) ? qq : [qq] : null
      }
      static GetPointerPrefix(qq) {
        return (0, Oq.n)() && !window.PointerEvent ? "mouse" : "pointer"
      }
      static SetCorsBehavior(qq, Eq) {
        (0, Wq.J)(qq, Eq)
      }
      static SetReferrerPolicyBehavior(qq, Eq) {
        Eq.referrerPolicy = qq
      }
      static get PreprocessUrl() {
        return Wq.i.PreprocessUrl
      }
      static set PreprocessUrl(qq) {
        Wq.i.PreprocessUrl = qq
      }
      static LoadImage(qq, Eq, gq, Yq, lq, Oq) {
        return (0, Wq.x)(qq, Eq, gq, Yq, lq, Oq)
      }
      static LoadFile(qq, Eq, gq, Yq, lq, Oq) {
        return (0, Wq.u)(qq, Eq, gq, Yq, lq, Oq)
      }
      static async LoadFileAsync(qq) {
        let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return await new Promise(((gq, Yq) => {
          (0, Wq.u)(qq, (qq => {
            gq(qq)
          }), void 0, void 0, Eq, ((qq, Eq) => {
            Yq(Eq)
          }))
        }))
      }
      static GetAssetUrl(qq) {
        if (!qq) return "";
        if (Yq.AssetBaseUrl && qq.startsWith(Yq._DefaultAssetsUrl)) {
          const Eq = Yq.AssetBaseUrl.endsWith("/") ? Yq.AssetBaseUrl.slice(0, -1) : Yq.AssetBaseUrl;
          return qq.replace(Yq._DefaultAssetsUrl, Eq)
        }
        return qq
      }
      static GetBabylonScriptURL(qq, Eq) {
        if (!qq) return "";
        if (qq.startsWith(Yq._DefaultCdnUrl))
          if (Yq.ScriptBaseUrl) {
            const Eq = Yq.ScriptBaseUrl.endsWith("/") ? Yq.ScriptBaseUrl.slice(0, -1) : Yq.ScriptBaseUrl;
            qq = qq.replace(Yq._DefaultCdnUrl, Eq)
          } else if (Yq._CdnVersion) {
          const Eq = `${Yq._DefaultCdnUrl}/v${Yq._CdnVersion}`;
          qq.startsWith(Eq) || (qq = qq.replace(Yq._DefaultCdnUrl, Eq))
        }
        return qq = Yq.ScriptPreprocessUrl(qq), Eq && !Yq.IsAbsoluteUrl(qq) && (qq = Yq.GetAbsoluteUrl(qq)), qq
      }
      static LoadBabylonScript(qq, Eq, gq, lq) {
        qq = Yq.GetBabylonScriptURL(qq), Yq.LoadScript(qq, Eq, gq)
      }
      static async LoadBabylonScriptAsync(qq) {
        return qq = Yq.GetBabylonScriptURL(qq), await Yq.LoadScriptAsync(qq)
      }
      static _LoadScriptNative(qq, Eq, gq, lq) {
        if (_native) {
          if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
            const qq = "Loading a script as an ES module is not supported in Babylon Native";
            return void gq?.(qq, new Error(qq))
          }
          Yq.LoadFile(qq, (qq => {
            try {
              Function(qq).apply(null), Eq && Eq()
            } catch (Yq) {
              gq && gq("LoadScript Error", Yq)
            }
          }), void 0, void 0, !1, ((qq, Eq) => {
            gq && gq("LoadScript Error", Eq)
          }))
        }
      }
      static _LoadScriptWeb(qq, Eq, gq, Yq) {
        let lq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" === typeof importScripts) {
          try {
            importScripts(qq), Eq && Eq()
          } catch (Aq) {
            gq?.(`Unable to load script '${qq}' in worker`, Aq)
          }
          return
        }
        if (!(0, Oq.n)()) return void gq?.(`Cannot load script '${qq}' outside of a window or a worker`);
        const mq = document.getElementsByTagName("head")[0],
          xq = document.createElement("script");
        lq ? (xq.setAttribute("type", "module"), xq.innerText = qq) : (xq.setAttribute("type", "text/javascript"), xq.setAttribute("src", qq)), Yq && (xq.id = Yq), xq.onload = () => {
          Eq && Eq()
        }, xq.onerror = Eq => {
          gq && gq(`Unable to load script '${qq}'`, Eq)
        }, mq.appendChild(xq)
      }
      static async LoadScriptAsync(qq, Eq) {
        return await new Promise(((gq, Yq) => {
          this.LoadScript(qq, (() => {
            gq()
          }), ((qq, Eq) => {
            Yq(Eq || new Error(qq))
          }), Eq)
        }))
      }
      static ReadFileAsDataURL(qq, Eq, gq) {
        const Yq = new FileReader,
          Oq = {
            onCompleteObservable: new lq.d,
            abort: () => Yq.abort()
          };
        return Yq.onloadend = () => {
          Oq.onCompleteObservable.notifyObservers(Oq)
        }, Yq.onload = qq => {
          Eq(qq.target.result)
        }, Yq.onprogress = gq, Yq.readAsDataURL(qq), Oq
      }
      static ReadFile(qq, Eq, gq, Yq, lq) {
        return (0, Wq.z)(qq, Eq, gq, Yq, lq)
      }
      static FileAsURL(qq) {
        const Eq = new Blob([qq]);
        return window.URL.createObjectURL(Eq)
      }
      static Format(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return qq.toFixed(Eq)
      }
      static DeepCopy(qq, Eq, gq, Yq) {
        xq.b.DeepCopy(qq, Eq, gq, Yq)
      }
      static IsEmpty(qq) {
        for (const Eq in qq)
          if (Object.prototype.hasOwnProperty.call(qq, Eq)) return !1;
        return !0
      }
      static RegisterTopRootEvents(qq, Eq) {
        for (let Yq = 0; Yq < Eq.length; Yq++) {
          const lq = Eq[Yq];
          qq.addEventListener(lq.name, lq.handler, !1);
          try {
            window.parent && window.parent.addEventListener(lq.name, lq.handler, !1)
          } catch (gq) {}
        }
      }
      static UnregisterTopRootEvents(qq, Eq) {
        for (let Yq = 0; Yq < Eq.length; Yq++) {
          const lq = Eq[Yq];
          qq.removeEventListener(lq.name, lq.handler);
          try {
            qq.parent && qq.parent.removeEventListener(lq.name, lq.handler)
          } catch (gq) {}
        }
      }
      static async DumpFramebuffer(qq, Eq, gq, Yq) {
        throw (0, cq.m)("DumpTools")
      }
      static DumpData(qq, Eq, gq, Yq) {
        throw (0, cq.m)("DumpTools")
      }
      static async DumpDataAsync(qq, Eq, gq) {
        throw (0, cq.m)("DumpTools")
      }
      static _IsOffScreenCanvas(qq) {
        return void 0 !== qq.convertToBlob
      }
      static ToBlob(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          lq = arguments.length > 3 ? arguments[3] : void 0;
        Yq._IsOffScreenCanvas(qq) || qq.toBlob || (qq.toBlob = function(qq, Eq, gq) {
          setTimeout((() => {
            const Yq = atob(this.toDataURL(Eq, gq).split(",")[1]),
              lq = Yq.length,
              Oq = new Uint8Array(lq);
            for (let qq = 0; qq < lq; qq++) Oq[qq] = Yq.charCodeAt(qq);
            qq(new Blob([Oq]))
          }))
        }), Yq._IsOffScreenCanvas(qq) ? qq.convertToBlob({
          type: gq,
          quality: lq
        }).then((qq => Eq(qq))) : qq.toBlob((function(qq) {
          Eq(qq)
        }), gq, lq)
      }
      static DownloadBlob(qq, Eq) {
        if ("download" in document.createElement("a")) {
          if (!Eq) {
            const qq = new Date;
            Eq = "screenshot_" + ((qq.getFullYear() + "-" + (qq.getMonth() + 1)).slice(2) + "-" + qq.getDate() + "_" + qq.getHours() + "-" + ("0" + qq.getMinutes()).slice(-2)) + ".png"
          }
          Yq.Download(qq, Eq)
        } else if (qq && "undefined" !== typeof URL) {
          const Eq = URL.createObjectURL(qq),
            gq = window.open("");
          if (!gq) return;
          const Yq = gq.document.createElement("img");
          Yq.onload = function() {
            URL.revokeObjectURL(Eq)
          }, Yq.src = Eq, gq.document.body.appendChild(Yq)
        }
      }
      static EncodeScreenshotCanvasData(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          lq = arguments.length > 3 ? arguments[3] : void 0,
          Oq = arguments.length > 4 ? arguments[4] : void 0;
        if ("string" !== typeof lq && Eq) {
          if (Eq) {
            if (Yq._IsOffScreenCanvas(qq)) return void qq.convertToBlob({
              type: gq,
              quality: Oq
            }).then((qq => {
              const gq = new FileReader;
              gq.readAsDataURL(qq), gq.onloadend = () => {
                const qq = gq.result;
                Eq(qq)
              }
            }));
            const lq = qq.toDataURL(gq, Oq);
            Eq(lq)
          }
        } else this.ToBlob(qq, (function(qq) {
          qq && Yq.DownloadBlob(qq, lq), Eq && Eq("")
        }), gq, Oq)
      }
      static Download(qq, Eq) {
        if ("undefined" === typeof URL) return;
        const gq = window.URL.createObjectURL(qq),
          Yq = document.createElement("a");
        document.body.appendChild(Yq), Yq.style.display = "none", Yq.href = gq, Yq.download = Eq, Yq.addEventListener("click", (() => {
          Yq.parentElement && Yq.parentElement.removeChild(Yq)
        })), Yq.click(), window.URL.revokeObjectURL(gq)
      }
      static BackCompatCameraNoPreventDefault(qq) {
        return "boolean" === typeof qq[0] ? qq[0] : "boolean" === typeof qq[1] && qq[1]
      }
      static CreateScreenshot(qq, Eq, gq, Yq) {
        throw (0, cq.m)("ScreenshotTools")
      }
      static async CreateScreenshotAsync(qq, Eq, gq) {
        throw (0, cq.m)("ScreenshotTools")
      }
      static CreateScreenshotUsingRenderTarget(qq, Eq, gq, Yq) {
        throw (0, cq.m)("ScreenshotTools")
      }
      static async CreateScreenshotUsingRenderTargetAsync(qq, Eq, gq) {
        throw (0, cq.m)("ScreenshotTools")
      }
      static RandomId() {
        return (0, Vq.d)()
      }
      static IsBase64(qq) {
        return (0, Wq.q)(qq)
      }
      static DecodeBase64(qq) {
        return (0, Wq.e)(qq)
      }
      static get errorsCount() {
        return mq.b.errorsCount
      }
      static Log(qq) {
        mq.b.Log(qq)
      }
      static Warn(qq) {
        mq.b.Warn(qq)
      }
      static Error(qq) {
        mq.b.Error(qq)
      }
      static get LogCache() {
        return mq.b.LogCache
      }
      static ClearLogCache() {
        mq.b.ClearLogCache()
      }
      static set LogLevels(qq) {
        mq.b.LogLevels = qq
      }
      static set PerformanceLogLevel(qq) {
        (qq & Yq.PerformanceUserMarkLogLevel) !== Yq.PerformanceUserMarkLogLevel ? (qq & Yq.PerformanceConsoleLogLevel) !== Yq.PerformanceConsoleLogLevel ? (Yq.StartPerformanceCounter = Yq._StartPerformanceCounterDisabled, Yq.EndPerformanceCounter = Yq._EndPerformanceCounterDisabled, _native?.disablePerformanceLogging?.()) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(2), Yq.StartPerformanceCounter = Yq._StartMarkNative, Yq.EndPerformanceCounter = Yq._EndMarkNative) : (Yq.StartPerformanceCounter = Yq._StartPerformanceConsole, Yq.EndPerformanceCounter = Yq._EndPerformanceConsole) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(1), Yq.StartPerformanceCounter = Yq._StartMarkNative, Yq.EndPerformanceCounter = Yq._EndMarkNative) : (Yq.StartPerformanceCounter = Yq._StartUserMark, Yq.EndPerformanceCounter = Yq._EndUserMark)
      }
      static _StartPerformanceCounterDisabled(qq, Eq) {}
      static _EndPerformanceCounterDisabled(qq, Eq) {}
      static _StartUserMark(qq) {
        let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!Yq._Performance) {
          if (!(0, Oq.n)()) return;
          Yq._Performance = window.performance
        }
        Eq && Yq._Performance.mark && Yq._Performance.mark(qq + "-Begin")
      }
      static _EndUserMark(qq) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && Yq._Performance.mark && (Yq._Performance.mark(qq + "-End"), Yq._Performance.measure(qq, qq + "-Begin", qq + "-End"))
      }
      static _StartPerformanceConsole(qq) {
        let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        Eq && (Yq._StartUserMark(qq, Eq), console.time && console.time(qq))
      }
      static _EndPerformanceConsole(qq) {
        let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        Eq && (Yq._EndUserMark(qq, Eq), console.timeEnd(qq))
      }
      static _StartMarkNative(qq) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
          if (Yq._NativePerformanceCounterHandles.has(qq)) Yq.Warn(`Performance counter with name ${qq} is already started.`);
          else {
            const Eq = _native.startPerformanceCounter(qq);
            Yq._NativePerformanceCounterHandles.set(qq, Eq)
          }
      }
      static _EndMarkNative(qq) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
          const Eq = Yq._NativePerformanceCounterHandles.get(qq);
          Eq ? (_native.endPerformanceCounter(Eq), Yq._NativePerformanceCounterHandles.delete(qq)) : Yq.Warn(`Performance counter with name ${qq} was not started.`)
        }
      }
      static get Now() {
        return Aq.c.Now
      }
      static GetClassName(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gq = null;
        if (!Eq && qq.getClassName) gq = qq.getClassName();
        else {
          if (qq instanceof Object) {
            gq = (Eq ? qq : Object.getPrototypeOf(qq)).constructor.__bjsclassName__
          }
          gq || (gq = typeof qq)
        }
        return gq
      }
      static First(qq, Eq) {
        for (const gq of qq)
          if (Eq(gq)) return gq;
        return null
      }
      static getFullClassName(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gq = null,
          Yq = null;
        if (!Eq && qq.getClassName) gq = qq.getClassName();
        else {
          if (qq instanceof Object) {
            const lq = Eq ? qq : Object.getPrototypeOf(qq);
            gq = lq.constructor.__bjsclassName__, Yq = lq.constructor.__bjsmoduleName__
          }
          gq || (gq = typeof qq)
        }
        return gq ? (null != Yq ? Yq + "." : "") + gq : null
      }
      static async DelayAsync(qq) {
        await new Promise((Eq => {
          setTimeout((() => {
            Eq()
          }), qq)
        }))
      }
      static IsSafari() {
        return !!(0, Oq.j)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }
    }

    function Hq(qq, Eq) {
      return gq => {
        gq.__bjsclassName__ = qq, gq.__bjsmoduleName__ = null != Eq ? Eq : null
      }
    }
    Yq = jq, jq.AssetBaseUrl = "", jq.UseCustomRequestHeaders = !1, jq.CustomRequestHeaders = uq.e.CustomRequestHeaders, jq.GetDOMTextContent = Oq.b, jq._DefaultCdnUrl = "https://cdn.babylonjs.com", jq._CdnVersion = "9.28.0", jq._DefaultAssetsUrl = "https://assets.babylonjs.com/core", jq.LoadScript = "undefined" === typeof _native ? Yq._LoadScriptWeb : Yq._LoadScriptNative, jq.GetAbsoluteUrl = "object" === typeof document ? qq => {
      const Eq = document.createElement("a");
      return Eq.href = qq, Eq.href
    } : "function" === typeof URL && "object" === typeof location ? qq => new URL(qq, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
    }, jq.NoneLogLevel = mq.b.NoneLogLevel, jq.MessageLogLevel = mq.b.MessageLogLevel, jq.WarningLogLevel = mq.b.WarningLogLevel, jq.ErrorLogLevel = mq.b.ErrorLogLevel, jq.AllLogLevel = mq.b.AllLogLevel, jq.IsWindowObjectExist = Oq.n, jq.PerformanceNoneLogLevel = 0, jq.PerformanceUserMarkLogLevel = 1, jq.PerformanceConsoleLogLevel = 2, jq._NativePerformanceCounterHandles = new Map, jq.StartPerformanceCounter = Yq._StartPerformanceCounterDisabled, jq.EndPerformanceCounter = Yq._EndPerformanceCounterDisabled;
    class oq {
      constructor(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.iterations = qq, this.index = Yq - 1, this._done = !1, this._fn = Eq, this._successCallback = gq
      }
      executeNext() {
        this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
      }
      breakLoop() {
        this._done = !0, this._successCallback()
      }
      static Run(qq, Eq, gq) {
        const Yq = new oq(qq, Eq, gq, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return Yq.executeNext(), Yq
      }
      static SyncAsyncForLoop(qq, Eq, gq, Yq, lq) {
        let Oq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return oq.Run(Math.ceil(qq / Eq), (Yq => {
          lq && lq() ? Yq.breakLoop() : setTimeout((() => {
            for (let Oq = 0; Oq < Eq; ++Oq) {
              const mq = Yq.index * Eq + Oq;
              if (mq >= qq) break;
              if (gq(mq), lq && lq()) {
                Yq.breakLoop();
                break
              }
            }
            Yq.executeNext()
          }), Oq)
        }), Yq)
      }
    }
    let Pq = !1;

    function Qq() {
      Pq || (Pq = !0, jq.Mix = dq.o, jq.IsExponentOfTwo = dq.k, Bq.b.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z")
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);