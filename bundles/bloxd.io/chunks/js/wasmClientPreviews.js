export const id = 56;
export const ids = [56];
export const modules = {
  38401: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Ku,
      f: () => Qu
    });
    const Eu = new WeakMap;

    function Ku(uu, Ru) {
      return Eu.set(uu, Ru), uu
    }

    function Qu(uu) {
      var Ru;
      return null !== (Ru = Eu.get(uu)) && void 0 !== Ru ? Ru : null
    }
  },
  38427: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Ju
    });
    var Eu = yu(1199);

    function Ku(uu) {
      const Ru = /(\d*\.?\d+)px/.exec(uu);
      return Ru ? Number(Ru[1]) : null
    }

    function Qu(uu) {
      return uu.split(/[\s,]+/).pop()
    }
    let mu = !1;
    const Ju = {
      debug: !1,
      align: "center",
      vAlign: "middle",
      fontSize: 14,
      fontWeight: "",
      fontStyle: "",
      fontVariant: "",
      font: "Arial",
      lineHeight: null,
      justify: !1,
      drawText: function(uu, Ru, Eu, Ju, Nu, Xu) {
        if (Nu <= 0 || Xu <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: Vu,
          fontVariant: ru,
          fontWeight: Bu,
          fontSize: xu,
          font: Su
        } = this, pu = [Vu, ru, Bu, `${xu}px`, Su].filter(Boolean).join(" "), Tu = [
          [Bu, `${xu}px`, Qu(Su)].filter(Boolean).join(" "), `${xu}px sans-serif`
        ], Wu = uu.font, ju = function(uu, Ru, yu) {
          for (const Eu of Ru) {
            uu.font = Eu;
            const Ru = Ku(uu.font),
              mu = Qu(Eu);
            if (null !== Ru && Math.abs(Ru - yu) <= .5 && uu.font.toLowerCase().includes(mu.toLowerCase())) return Eu
          }
          return null
        }(uu, [pu, ...Tu], xu);
        ju !== pu && function(uu, Ru, Eu) {
          mu || (mu = !0, Promise.resolve().then((() => yu(1056))).then((yu => {
            let {
              jp: Ku
            } = yu;
            Ku(new Error("A canvas didn't take canvasTxt's font"), {
              font: uu,
              kx: Ru,
              drawnWith: null !== Eu && void 0 !== Eu ? Eu : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(pu, Wu, ju);
        const Hu = Ku(uu.font);
        if (null === ju && null !== Hu && Hu > 0) {
          const yu = xu / Hu;
          uu.save();
          try {
            return uu.scale(yu, yu), {
              height: this.drawLines(uu, Ru, Eu / yu, Ju / yu, Nu / yu, Xu / yu, Hu).height * yu
            }
          } finally {
            uu.restore()
          }
        }
        return this.drawLines(uu, Ru, Eu, Ju, Nu, Xu, xu)
      },
      drawLines: function(uu, Ru, yu, Ku, Qu, mu, Ju) {
        const Nu = yu + Qu,
          Xu = Ku + mu;
        let Vu, ru = Ku + mu / 2 + Ju / 2;
        "right" === this.align ? (Vu = Nu, uu.textAlign = "right") : "left" === this.align ? (Vu = yu, uu.textAlign = "left") : (Vu = yu + Qu / 2, uu.textAlign = "center");
        for (const Eu of Ru) {
          uu.measureText(Eu).width >= Qu && (Ru = Ru.replace(Eu, ""))
        }
        Ru = (0, Eu.R)(Ru);
        const Bu = [],
          xu = Ru.split("\n"),
          Su = this.justify ? uu.measureText("\u200a").width : 0;
        xu.forEach((Ru => {
          let yu = uu.measureText(Ru).width;
          if (yu <= Qu) Bu.push(Ru);
          else {
            let Eu = Ru;
            const Ku = Qu;
            let mu, Ju, Nu;
            for (yu = uu.measureText(Eu).width; yu > Ku;) {
              for (mu = 0, Ju = 0, Nu = ""; Ju < Ku;) mu++, Nu = Eu.substr(0, mu), Ju = uu.measureText(Nu).width;
              mu--, Nu = Nu.substr(0, mu);
              const Ru = mu;
              if (" " !== Eu.substr(mu, 1)) {
                for (;
                  " " !== Eu.substr(mu, 1) && 0 !== mu;) mu--;
                0 === mu && (mu = Ru), Nu = Eu.substr(0, mu)
              }
              Nu = this.justify ? this.justifyLine(uu, Nu, Su, "\u200a", Qu) : Nu, Eu = Eu.substr(mu), yu = uu.measureText(Eu).width, Bu.push(Nu)
            }
            yu > 0 && Bu.push(Eu)
          }
        }));
        const pu = this.lineHeight ? this.lineHeight : this.getTextHeight(uu, Ru),
          Tu = pu * (Bu.length - 1),
          Wu = Tu / 2;
        let ju = Ku;
        "top" === this.vAlign ? ru = Ku + Ju : "bottom" === this.vAlign ? (ru = Xu - Tu, ju = Xu) : (ju = Ku + mu / 2, ru -= Wu), Bu.forEach((Ru => {
          Ru = Ru.trim(), uu.fillText(Ru, Vu, ru), ru += pu
        })), this.debug && (uu.lineWidth = 3, uu.strokeStyle = "#00909e", uu.strokeRect(yu, Ku, Qu, mu), uu.lineWidth = 2, uu.strokeStyle = "#f6d743", uu.beginPath(), uu.moveTo(Vu, Ku), uu.lineTo(Vu, Xu), uu.stroke(), uu.strokeStyle = "#ff6363", uu.beginPath(), uu.moveTo(yu, ju), uu.lineTo(Nu, ju), uu.stroke());
        return {
          height: Tu + pu
        }
      },
      getTextHeight: function(uu, Ru) {
        const yu = uu.textBaseline;
        uu.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: Eu
        } = uu.measureText(Ru);
        return uu.textBaseline = yu, Eu
      },
      justifyLine: function(uu, Ru, yu, Eu, Ku) {
        const Qu = Ru.trim(),
          mu = uu.measureText(Qu).width,
          Ju = Qu.split(/\s+/).length - 1,
          Nu = Math.floor((Ku - mu) / yu);
        if (Ju <= 0 || Nu <= 0) return Qu;
        const Xu = Math.floor(Nu / Ju);
        let Vu = Nu - Ju * Xu,
          ru = [];
        for (let Bu = 0; Bu < Xu; Bu++) ru.push(Eu);
        ru = ru.join("");
        return Qu.replace(/\s+/g, (uu => {
          const Ru = Vu > 0 ? ru + Eu : ru;
          return Vu--, uu + Ru
        }))
      }
    }
  },
  38432: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => pu,
      f: () => Su,
      g: () => Bu,
      h: () => Vu,
      l: () => ru
    });
    var Eu = yu(4053),
      Ku = yu(343);
    const Qu = 1024,
      mu = 1536,
      Ju = 2 * Eu.o + 1,
      Nu = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      Xu = 1.5;

    function Vu(uu, Ru, yu) {
      if ("string" !== typeof uu) return Ru;
      try {
        const yu = JSON.parse(uu);
        return yu && "object" === typeof yu ? yu : Ru
      } catch (Eu) {
        return void 0 !== yu && console.error(`Couldn't parse ${yu}`, Eu), Ru
      }
    }

    function ru(uu) {
      return Vu(uu, null, "a leaderboard's rows")
    }

    function Bu(uu, Ru) {
      var yu, Eu;
      return null !== Ru && void 0 !== Ru ? Ru : {
        status: null !== (yu = uu.status) && void 0 !== yu ? yu : "loading",
        entries: null !== (Eu = uu.entries) && void 0 !== Eu ? Eu : []
      }
    }

    function xu(uu, Ru) {
      return "number" === typeof uu && Number.isFinite(uu) && uu > 0 ? uu : Ru
    }

    function Su(uu, Ru) {
      const yu = xu(uu.size, 1);
      let Eu = xu(uu.width, xu(2.5 * yu, 2.5)),
        Ku = xu(uu.height, xu(3.75 * yu, 3.75));
      Number.isFinite(Qu * Ku / Eu) && Number.isFinite(mu * Eu / Ku) || (Eu = 2.5, Ku = 3.75);
      const Ju = Ku / Eu,
        Nu = Math.max(1, Math.min(Qu, Ru / Ju));
      return {
        width: Eu,
        height: Ku,
        layoutWidth: Math.max(Qu, mu / Ju),
        layoutHeight: Math.max(mu, Qu * Ju),
        pixelWidth: Math.round(Nu),
        pixelHeight: Math.round(Math.max(1, Math.min(Ru, Nu * Ju)))
      }
    }

    function pu(uu, Ru, yu, mu, Vu, ru) {
      uu.setTransform(1, 0, 0, 1, 0, 0), uu.fillStyle = Ku.L.defaultNameTagBackground, uu.fillRect(0, 0, Ru, yu), uu.scale(Ru / mu.layoutWidth, yu / mu.layoutHeight), uu.translate((mu.layoutWidth - Qu) / 2, 0),
        function(uu, Ru, yu, Qu) {
          var mu, Vu, ru, Bu;
          const {
            top: xu,
            around: Su,
            showPlayerText: pu,
            localPlayerDbId: ju
          } = yu, {
            whiteUiText: Hu,
            grayUiText: du,
            yellowUiText: bu
          } = Ku.L;
          uu.textBaseline = "middle";
          const Cu = function(Ru, yu, Eu, Ku, Qu, mu) {
              let Ju = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              uu.font = `bold ${Ku}px 'Jetbrains Mono', monospace`, uu.fillStyle = Qu, uu.textAlign = Ju;
              let Nu = Ru.replace(/[\r\n\t]/g, " ");
              if (uu.measureText(Nu).width > mu) {
                for (; Nu.length > 0 && uu.measureText(`${Nu}\u2026`).width > mu;) Nu = Nu.slice(0, -1);
                Nu += "\u2026"
              }
              uu.fillText(Nu, yu, Eu)
            },
            ku = Ru => {
              uu.fillStyle = Hu, uu.globalAlpha = .15, uu.fillRect(24, Ru, 976, 2), uu.globalAlpha = 1
            },
            eu = null === ju ? null : (0, Ku.xc)(ju),
            Au = uu => null !== eu && uu.playerHash === eu,
            Du = Tu(xu.entries, Eu.s),
            Mu = "ready" === xu.status && Du.length > 0,
            Iu = null === Su ? [] : Tu(Su.entries, Ju),
            Gu = Du.some(Au),
            Uu = null === Su ? null : function(uu) {
              const Ru = uu;
              if (!Ru || !Number.isFinite(Ru.rank) || !Number.isFinite(Ru.tied) || !Number.isFinite(Ru.total)) return null;
              return Ru
            }(Su.standing),
            nu = Iu.find(Au),
            su = Du.find(Au),
            tu = null === Uu || void 0 === nu ? null : {
              value: nu.value,
              rank: Uu.rank
            },
            lu = Wu(Du, void 0 === su || su.value === (null === tu || void 0 === tu ? void 0 : tu.value) ? tu : null),
            gu = Wu(Iu, tu),
            cu = (uu, Ru) => {
              const yu = uu.findIndex(Au);
              return yu >= 0 ? Ru[yu] : null
            },
            Lu = null !== (mu = null !== (Vu = null === Uu || void 0 === Uu ? void 0 : Uu.rank) && void 0 !== Vu ? Vu : cu(Iu, gu)) && void 0 !== mu ? mu : cu(Du, lu);
          uu.font = "bold 34px 'Jetbrains Mono', monospace";
          const zu = [...Mu ? lu : [], ...Gu ? [] : gu],
            Fu = Math.min(280, Math.max(0, ...zu.map((Ru => uu.measureText(Nu.format(Ru)).width)))),
            wu = Fu <= 80,
            Zu = wu ? 80 : 32 + Fu,
            hu = wu ? 148 : Zu + 28,
            Pu = 660 - hu;
          Cu(`TOP ${Eu.s}  /  ALL TIME`, 24, 52, 28, du, 976), Cu(pu ? String(null !== (ru = Ru.title) && void 0 !== ru ? ru : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, Hu, 976), Cu("RANK", 32, 174, 28, du, hu - 40), Cu("PLAYER", hu, 174, 28, du, Pu), Cu(pu ? String(null !== (Bu = Ru.scoreLabel) && void 0 !== Bu ? Bu : "Score").slice(0, 24) : "Score", 992, 174, 28, du, 304, "right"), ku(202);
          const iu = (Qu - 232) / (Eu.s + Xu + Ju),
            Yu = 208 + Eu.s * iu,
            ou = Yu + Xu * iu,
            qu = (Ru, yu, Eu, Ku) => {
              const Qu = Au(Ru);
              uu.fillStyle = Qu ? bu : Hu, uu.globalAlpha = Qu ? .15 : Ku ? .035 : 0, uu.fillRect(24, Eu - iu / 2 + 1, 976, iu - 2), uu.globalAlpha = 1;
              const mu = Qu ? bu : Hu;
              Cu(Nu.format(yu), Zu, Eu, 34, mu, wu ? 80 : Fu, wu ? "center" : "right"), Cu(pu ? String(Ru.name).slice(0, 64) : "Player", hu, Eu, 34, mu, Pu);
              const Ju = Nu.format(Ru.value);
              Cu(uu.measureText(Ju).width > 304 ? Ru.value.toExponential(6) : Ju, 992, Eu, 34, mu, 304, "right")
            };
          if (Mu)
            for (const [Eu, Ku] of Du.entries()) qu(Ku, lu[Eu], 208 + (Eu + .5) * iu, Eu % 2 === 0);
          else {
            const uu = "error" === xu.status,
              Ru = uu ? "Couldn't load leaderboard" : "ready" === xu.status ? "No scores yet" : "Loading leaderboard\u2026",
              yu = uu ? "Trying again shortly" : "ready" === xu.status ? "Be the first on the board!" : "Fetching the top players",
              Eu = (208 + Yu) / 2;
            Cu(Ru, 512, Eu - 28, 40, uu ? Ku.L.redUiText : Hu, 960, "center"), Cu(yu, 512, Eu + 27, 30, du, 960, "center")
          }
          const Ou = Yu + Xu * iu / 2;
          if (null === Lu) ku(Ou);
          else {
            const Ru = null === Uu ? 0 : Uu.tied - 1,
              yu = `YOUR RANK #${Nu.format(Lu)}${null===Uu?"":` of ${Nu.format(Uu.total)}`}`;
            uu.font = "bold 36px 'Jetbrains Mono', monospace";
            const Eu = Math.max(20, Math.min(36, Math.floor(34560 / uu.measureText(yu).width)));
            Cu(yu, 512, Ou - (Ru > 0 ? 15 : 0), Eu, bu, 960, "center"), Ru > 0 && Cu(`Tied with ${Nu.format(Ru)} other${1===Ru?"":"s"}`, 512, Ou + 24, 24, du, 960, "center")
          }
          if (null === Su) return;
          const vu = ou + Ju * iu / 2;
          if (Gu) Cu(`You're in the top ${Eu.s}!`, 512, vu, 40, bu, 960, "center");
          else if (0 === Iu.length) Cu("You're not on this board yet", 512, vu, 34, du, 960, "center");
          else
            for (const [Eu, Ku] of Iu.entries()) qu(Ku, gu[Eu], ou + (Eu + .5) * iu, Eu % 2 === 0)
        }(uu, Vu, ru, mu.layoutHeight)
    }

    function Tu(uu, Ru) {
      return Array.isArray(uu) ? uu.slice(0, Ru).filter((uu => uu && Number.isFinite(uu.rank) && Number.isFinite(uu.value))) : []
    }

    function Wu(uu, Ru) {
      const yu = [];
      let Eu = !1;
      return uu.forEach(((Ku, Qu) => {
        if (null !== Ru && Ku.value === Ru.value) return void yu.push(Ru.rank);
        const mu = Qu > 0 && Ku.value === uu[Qu - 1].value;
        mu || (Eu = 0 === Qu && 1 !== Ku.rank), yu.push(mu && !Eu ? yu[Qu - 1] : Ku.rank)
      })), yu
    }
  },
  38617: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Ku,
      h: () => Qu
    });
    const Eu = 32;

    function Ku(uu) {
      return Array.from(uu).length
    }

    function Qu(uu) {
      const Ru = [""];
      let yu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Ku = "";
      const Qu = () => {
        Ru.push(""), yu = 0, Ku = ""
      };
      for (const mu of uu.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(mu)) Qu();
        else if (/^\s+$/.test(mu)) Ku += mu;
      else if (mu.length > 0) {
        const uu = Array.from(mu);
        yu > 0 && yu + Ku.length + uu.length > Eu && Qu(), Ru[Ru.length - 1] += Ku, yu += Ku.length, Ku = "";
        for (const Ku of uu) yu >= Eu && Qu(), Ru[Ru.length - 1] += Ku, yu++
      }
      return Ru[Ru.length - 1] += Ku, Ru
    }
  },
  42850: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      WasmPreviewHost: () => bR,
      pageBuiltInAnimationPack: () => Bu,
      pagePreviews: () => uR,
      previewModule: () => iu
    });
    var Eu = yu(3514),
      Ku = yu(614);
    const Qu = "[bloxd-wasm-client]";

    function mu(uu) {
      const Ru = {
        wasm: "unknown",
        client: String(Ku.c)
      };
      try {
        var yu;
        Ru.wasm = null !== (yu = null === uu || void 0 === uu ? void 0 : uu.Qr()) && void 0 !== yu ? yu : Ru.wasm
      } catch {}
      return Ru
    }
    async function Ju(uu) {
      if (uu.length < 2 || 31 !== uu[0] || 139 !== uu[1]) return uu;
      if ("undefined" === typeof DecompressionStream) {
        const {
          ungzip: Ru
        } = await yu.e(218).then((() => yu(36743)));
        return Ru(uu)
      }
      const Ru = new Blob([uu]).stream().pipeThrough(new DecompressionStream("gzip"));
      return new Uint8Array(await new Response(Ru).arrayBuffer())
    }

    function Nu(uu, Ru, Eu, Ku) {
      Promise.resolve().then((() => yu(40513))).then((yu => {
        let {
          reportDataLoadFailure: Qu
        } = yu;
        Qu(uu, Ru, Eu, Ku)
      }), (Ru => {
        console.warn(`${Qu} ${uu} didn't load, and the report couldn't be sent`, Eu.error, Ru)
      }))
    }
    const Xu = [3e4, 12e4, 3e5];
    class Vu {
      constructor(uu) {
        this.deps = uu, this.loading = null, this.reported = !1, this.retries = 0, this.resolveSet = () => {}, this.set = new Promise((uu => {
          this.resolveSet = uu
        }))
      }
      provide(uu) {
        return this.loading ??= this.load(uu), this.loading
      }
      whenSet() {
        return this.set
      }
      async load(uu) {
        const Ru = mu(uu),
          yu = await async function(uu, Ru) {
            let yu;
            try {
              yu = await uu()
            } catch (Eu) {
              return {
                stage: "fetch",
                error: Eu
              }
            }
            try {
              return Ru(yu) ? null : {
                stage: "decode",
                error: null
              }
            } catch (Eu) {
              return {
                stage: "decode",
                error: Eu
              }
            }
          }((() => this.deps.fetch()), (Ru => {
            const yu = uu.nQu(Ru);
            return yu && this.resolveSet(Ru), yu
          }));
        if (null !== yu) {
          if ("fetch" === yu.stage) {
            this.loading = null;
            const Ru = Xu[this.retries++];
            void 0 !== Ru && this.deps.later((() => {
              this.provide(uu)
            }), Ru)
          }
          this.reported || (this.reported = !0, this.deps.onFailed(yu, Ru))
        }
      }
    }
    let ru = null;

    function Bu() {
      return ru ??= new Vu({
        fetch: async () => Ju(await (0, Eu.E)(xu(), {
          priority: "low"
        })),
        onFailed: (uu, Ru) => {
          Nu("builtInAnimations", xu(), uu, Ru)
        },
        later: (uu, Ru) => {
          setTimeout(uu, Ru)
        }
      }), ru
    }

    function xu() {
      return yu(42858)
    }
    var Su = yu(3510),
      pu = yu(36199),
      Tu = yu(40341),
      Wu = yu(1176),
      ju = yu(325),
      Hu = yu(40361),
      du = yu(40590),
      bu = (yu(40374), yu(40528)),
      Cu = yu(40535),
      ku = yu(40544),
      eu = yu(40371),
      Au = yu(40605),
      Du = yu(40607),
      Mu = yu(40393),
      Iu = yu(40462),
      Gu = yu(40470),
      Uu = yu(40603),
      nu = yu(42141),
      su = yu(36176);
    const tu = "[bloxd-previews]",
      lu = 4e5,
      gu = 0,
      cu = 1,
      Lu = 2,
      zu = 1,
      Fu = 2,
      wu = 3,
      Zu = 0,
      hu = 1,
      Pu = 2;

    function iu(uu) {
      const Ru = uu,
        yu = (0, Hu.F)(uu),
        Eu = (0, Hu.j)(uu);
      return null !== yu && null !== Eu && "function" === typeof Ru.IQu && "function" === typeof Ru.GQu && "function" === typeof Ru.UQu ? Ru : null
    }

    function Yu(uu, Ru, yu) {
      let [Eu, Ku] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [uu, Ru], Qu = Math.min(Number.isFinite(yu) && yu > 0 ? yu : 1, 2);
      const mu = Math.max(0, Eu, uu) * Math.max(0, Ku, Ru) * Qu * Qu;
      return mu > lu && (Qu *= Math.sqrt(lu / mu)), [Math.max(1, Math.floor(Math.max(0, uu) * Qu)), Math.max(1, Math.floor(Math.max(0, Ru) * Qu))]
    }

    function ou() {
      return yu(42865)
    }
    async function qu(uu, Ru) {
      "lost" === uu && (0, Mu.x)();
      const Eu = await (0, Mu.L)();
      if (null === Eu || (0, Hu.l)(Eu) || (0, Mu.e)()) return;
      const Ku = "webgpu" === Eu.backend;
      if (!Ku && "lost" !== uu) return;
      const Qu = Ku ? (0, Hu.N)(uu) : null;
      if (null !== Qu) {
        const yu = `WebGPU failed at home (${uu}${void 0===Ru?"":`: ${Ru instanceof Error?Ru.message:(0,su.k)(Ru)}`}) and ${Qu}`;
        return console.warn(`${tu} ${yu}: the previews stop`, null !== Ru && void 0 !== Ru ? Ru : ""), void(0, Mu.t)(yu)
      }(0, Mu.r)();
      try {
        await async function(uu, Ru, Eu) {
          var Ku;
          let {
            backend: Qu,
            adapter: Ju
          } = uu;
          const Nu = (0, Su.N)(),
            {
              flushCrashReports: Xu,
              reportRenderReload: Vu
            } = await Promise.resolve().then((() => yu(40513)));
          Vu(Qu, "start_failed" === Ru ? 0 : 1, mu(Nu ? (0, Su.w)() : null), {
            cause: Ru,
            error: "lost" === Ru && null !== (Ku = (0, Hu.R)(Nu ? (0, Hu.F)((0, Su.w)()) : null)) && void 0 !== Ku ? Ku : Eu,
            context: {
              adapter: Ju,
              boundAtMs: "start_failed" === Ru ? null : (0, Mu.I)(),
              indirectHangs: (0, Mu.z)()
            }
          }), await Xu(Iu.e)
        }(Eu, uu, Ru)
      } catch (Ju) {
        console.warn(`${tu} ${Eu.backend} failed at home (${uu}), and its report couldn't be sent`, Ju)
      }(0, Iu.k)()
    }
    async function Ou() {
      if (!(0, Su.N)()) {
        const uu = await (0, Mu.L)();
        if (null === uu || (0, Hu.l)(uu)) return null;
        if (await (0, pu.h)(await uu.load(), Tu.e), !(0, Su.N)()) return null
      }
      return iu((0, Su.w)())
    }
    class vu {
      constructor(uu, Ru, yu, Eu, Ku, Qu) {
        this.page = uu, this.host = Ru, this.id = yu, this.canvas = Eu, this.size = Ku, this.models = void 0, this.images = void 0, this.write = void 0, this.outcomes = [], this.closed = !1, this.quiet = 0, this.settled = [];
        const mu = {
            ...Qu.images,
            glbUrl: uu => {
              var Ru;
              return null !== (Ru = this.models.drawnUrl(uu)) && void 0 !== Ru ? Ru : Qu.images.glbUrl(uu)
            }
          },
          Ju = Ru => uu.modelFile(Ru);
        this.images = new du.d(mu, (uu => {
          console.warn(`${tu} image ${uu.key.kind}:${uu.key.index}:${uu.key.word} failed`, uu.error)
        }), {
          fetchFile: Ju,
          fetchImage: Ru => uu.imageFile(Ru)
        }), uu.startModels(), this.models = new bu.f(Qu.files, ((Ru, yu) => uu.buildModel(Ru, yu)), (uu => {
          console.warn(`${tu} model file ${uu.file} (${uu.url}) failed`, uu.error)
        }), {
          fetchFile: Ju,
          onWritten: (uu, Ru) => {
            this.images.glbWritten(uu, Ru)
          },
          onTaken: (uu, Ru) => {
            this.images.glbTaken(uu, Ru)
          }
        }), this.write = (uu, Ru, yu) => {
          if (this.closed) return !0;
          if (uu === bu.d) {
            const uu = new DataView(yu.buffer, yu.byteOffset, ku.b),
              Eu = uu.getUint32(0, !0),
              Ku = uu.getUint32(ku.d, !0),
              Qu = this.page.hostCall(Pu, (() => this.host.tmu(this.id, Eu, Ru, yu.subarray(ku.b))));
            return this.outcomes.push([Ku, Qu]), !0
          }
          return uu === du.c && (this.page.hostCall(void 0, (() => {
            this.host.gmu(this.id, yu)
          })), !0)
        }
      }
      get isClosed() {
        return this.closed
      }
      get isStopped() {
        return this.page.isStopped
      }
      resize(uu, Ru, yu) {
        if (this.closed) return;
        const [Eu, Ku] = Yu(uu, Ru, this.page.dpr(), yu);
        Eu === this.size[0] && Ku === this.size[1] || (this.size = [Eu, Ku], this.page.hostCall(void 0, (() => {
          this.host.resize(this.id, Eu, Ku)
        })))
      }
      setMob(uu, Ru, yu, Eu) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.Zmu(this.id, uu, Ru, yu, Eu))))
      }
      setPet(uu, Ru, yu, Eu) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.Pmu(this.id, uu, Ru, yu, Eu))))
      }
      setPlayer(uu, Ru, yu) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.zmu(this.id, uu, Ru, yu))))
      }
      setFigure(uu, Ru, yu, Eu) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.Fmu(this.id, uu, Ru, yu, Eu))))
      }
      replay() {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.replay(this.id))))
      }
      get orbit() {
        if (this.closed) return null;
        const uu = this.page.hostCall(null, (() => this.host.orbit(this.id)));
        return null === uu || uu.length < 3 ? null : {
          alpha: uu[0],
          beta: uu[1],
          radius: uu[2]
        }
      }
      setOrbit(uu) {
        let {
          alpha: Ru,
          beta: yu,
          radius: Eu
        } = uu;
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.hmu(this.id, Ru, yu, Eu)
        }))
      }
      untilSettled() {
        return this.closed || this.page.isStopped ? Promise.resolve() : (this.quiet = 0, new Promise((uu => {
          this.settled.push(uu)
        })))
      }
      packChanged() {
        this.quiet = 0, this.models.refresh(), (0, Au.g)(this.images)
      }
      feed() {
        this.models.drain(this.write);
        for (const [uu, Ru] of this.outcomes) {
          const yu = Ru === Zu ? [] : [Ru === hu ? uu : (uu | bu.e) >>> 0];
          this.models.taken(uu, yu)
        }
        this.outcomes.length = 0, this.images.drain(this.write)
      }
      collect(uu) {
        let Ru = !1;
        if (uu) {
          const uu = this.host.omu(this.id);
          for (const Ru of uu) this.models.request(Ru);
          const yu = this.host.Ymu(this.id);
          yu.length > 0 && this.images.onEvent(yu), Ru = uu.length > 0 || yu.length > 0
        }
        const yu = this.page.modelsUnavailable ? 0 : this.models.asking + this.models.unanswered,
          Eu = Ru || yu > 0 || this.images.waiting > 0 || this.images.inFlight > 0;
        this.quiet = Eu ? 0 : this.quiet + 1, this.quiet >= 3 && this.resolveSettled()
      }
      close() {
        this.closed || (this.closed = !0, this.page.closePreview(this), this.resolveSettled())
      }
      abandon() {
        this.resolveSettled()
      }
      dispose(uu) {
        this.page.hostCall(void 0, (() => {
          const Ru = this.host.close(this.id);
          Ru.length > 0 && this.images.onEvent(Ru), this.page.isTrapped || uu.UQu(this.id)
        })), this.images.dispose(), this.canvas.remove()
      }
      resolveSettled() {
        const uu = this.settled;
        this.settled = [];
        for (const Ru of uu) Ru()
      }
    }
    class au {
      constructor(uu) {
        this.deps = uu, this.module = null, this.host = null, this.opening = null, this.pageCanvas = null, this.samples = 1, this.binding = null, this.sessionEnds = 0, this.lastEndReturned = !0, this.previews = new Map, this.nextId = 1, this.frameId = null, this.stopped = !1, this.loggedErrors = new Set, this.modelsListener = {
          onUnavailable: uu => {
            this.modelsFailed(uu)
          },
          onDecoderFailed: uu => {
            this.loggedErrors.has("modelDecoder") || (this.loggedErrors.add("modelDecoder"), console.warn(`${tu} the Draco decoder didn't load: models waiting on it won't draw`, uu))
          },
          onWorkerLost: uu => {
            this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${tu} a model worker was lost: ${uu}`))
          },
          onModuleRetry: () => {}
        }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.ix = {
          setShaderPack: (uu, Ru, yu, Eu, Ku) => (this.shaderPackArgs = [uu, Ru, yu, Eu, Ku], this.handOverShaderPack(), !0)
        }, this.frame = uu => {
          this.frameId = null;
          const Ru = this.host;
          if (null !== Ru && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped) try {
            this.drawFrame(Ru, uu)
          } catch (yu) {
            if (!this.stopIfTrapped(yu) && (this.stop(), (0, Hu.o)(yu))) return void this.deps.onRenderFailed("frames_refused", yu);
            console.warn(`${tu} the previews stopped: their frame threw`, yu)
          }
        }, uu.pack.onChange((() => {
          this.packChanged()
        })), uu.game.onGameChange((() => {
          this.tellInGame()
        }))
      }
      packChanged() {
        if (!this.stopped)
          for (const uu of this.previews.values()) uu.packChanged()
      }
      dpr() {
        return this.deps.dpr()
      }
      get sessionBound() {
        var uu, Ru;
        return null !== (uu = null === (Ru = this.host) || void 0 === Ru ? void 0 : Ru.attached()) && void 0 !== uu && uu
      }
      get open() {
        return this.previews.size
      }
      get frameCostMs() {
        return 0 === this.costs.length ? 0 : this.costs.reduce(((uu, Ru) => uu + Ru), 0) / this.costs.length
      }
      async bindSession(uu, Ru, yu) {
        const Eu = this.binding,
          Ku = this.sessionEnds;
        try {
          const Qu = this.hostOf(uu);
          if (!Qu.lmu()) {
            const Ru = (0, Gu.f)().sampleCount,
              mu = await yu(Ru);
            if (this.sessionEnds !== Ku) return this.keepRendererOfEndedSession(uu, Qu, mu, Ru, Eu), Ru;
            if (!Qu.Hmu(mu)) throw new Error("the page has a renderer already");
            (0, Mu.w)(performance.now()), this.samples = Ru, (0, Uu.g)((0, Hu.j)(uu))
          }
          if (!Qu.attach(Ru)) throw new Error("the page's renderer is lent to another session");
          return this.samples
        } finally {
          this.binding === Eu && this.endBinding()
        }
      }
      keepRendererOfEndedSession(uu, Ru, yu, Eu, Ku) {
        if (!this.lastEndReturned || null !== this.binding && this.binding !== Ku) try {
          yu.free()
        } catch (Qu) {
          console.warn(`${tu} an ended session's renderer didn't free`, Qu)
        } else Ru.Hmu(yu) && ((0, Mu.w)(performance.now()), this.samples = Eu, (0, Uu.g)(this.registryOf(uu)))
      }
      async beginSession() {
        var uu;
        let Ru = () => {};
        const yu = new Promise((uu => {
          Ru = uu
        }));
        this.binding = {
          done: yu,
          release: Ru
        }, await (null === (uu = this.opening) || void 0 === uu ? void 0 : uu.catch((() => null)));
        const Eu = this.pageCanvas;
        return this.pageCanvas = null, Eu
      }
      endSession(uu) {
        var Ru, yu;
        if (this.sessionEnds++, this.lastEndReturned = uu, this.endBinding(), uu) {
          try {
            var Eu;
            null === (Eu = this.host) || void 0 === Eu || Eu.detach()
          } catch (Ku) {
            return void console.warn(`${tu} the session's core kept the page's renderer`, Ku)
          }!0 === (null === (Ru = this.host) || void 0 === Ru ? void 0 : Ru.attached()) && console.warn(`${tu} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (yu = this.host) || void 0 === yu ? void 0 : yu.lmu()) && (0, Uu.g)(this.registryOf(this.module))
        }
      }
      endBinding() {
        var uu;
        null === (uu = this.binding) || void 0 === uu || uu.release(), this.binding = null
      }
      async openPreview(uu, Ru, yu, Eu) {
        const Ku = await this.renderingHost(),
          Qu = this.module;
        if (null === Ku || null === Qu) throw new Error("this page can't draw previews: it has no renderer build");
        if (this.animations ??= this.loadAnimations(Ku), this.deps.pack.wanted(), this.isStopped) throw new Error("the previews stopped");
        this.guarded((() => {
          this.deps.provideBuiltInAnimationPack(Qu)
        }));
        const mu = this.nextId++,
          Ju = this.deps.createCanvas(),
          [Nu, Xu] = Yu(Ru, yu, this.deps.dpr(), Eu);
        Ju.width = Nu, Ju.height = Xu;
        if (!this.guarded((() => (Qu.GQu(mu, Ju), Ku.open(mu, Nu, Xu, uu))))) throw this.hostCall(void 0, (() => {
          Qu.UQu(mu)
        })), new Error("the page's renderer is lent to a session that is running");
        this.restartModelsIfFailed();
        const Vu = new vu(this, Ku, mu, Ju, [Nu, Xu], this.deps);
        return this.previews.set(mu, Vu), this.startFrames(), Vu
      }
      prefetch() {
        if (this.prefetched || this.isStopped || (0, Mu.e)() || null !== (0, Mu.F)()) return;
        this.prefetched = !0;
        (null === this.module ? this.loadModule() : Promise.resolve(this.module)).then((uu => {
          null === uu || this.isStopped || (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles())
        }), (() => {}))
      }
      modelFile(uu) {
        return this.prefetchedOr(uu, this.deps.fetchModel)
      }
      imageFile(uu) {
        return this.prefetchedOr(uu, Eu.E)
      }
      prefetchedOr(uu, Ru) {
        const yu = this.prefetchedFiles.get(uu);
        return void 0 === yu ? Ru(uu) : yu.catch((() => Ru(uu)))
      }
      async prefetchPlayerFiles() {
        const uu = this.deps.playerFile().then((uu => this.deps.files.url(uu))),
          Ru = await Promise.all([uu, this.deps.images.lifeformAtlasUrl(Au.b)]).catch((() => null));
        if (null === Ru) return;
        const [yu, Eu] = Ru, Ku = (uu, Ru) => {
          if (null === uu) return;
          const yu = Ru(uu);
          this.prefetchedFiles.set(uu, yu), yu.catch((() => {
            this.prefetchedFiles.delete(uu)
          }))
        };
        Ku(yu, (uu => this.modelFile(uu))), Ku(Eu, (uu => this.imageFile(uu)))
      }
      loadModule() {
        return this.moduleLoad ??= this.deps.loadModule().then((uu => (null === uu && (this.moduleLoad = null), uu)), (uu => {
          throw this.moduleLoad = null, uu
        })), this.moduleLoad
      }
      fetchAnimationTable() {
        return this.animationTable ??= this.deps.fetchAnimations().catch((uu => {
          throw this.animationTable = null, uu
        })), this.animationTable
      }
      get modelsUnavailable() {
        return this.unavailable
      }
      startModels() {
        this.models ??= this.deps.startModels(this.modelsListener).catch((uu => (this.modelsFailed(uu), () => new Promise((() => {})))))
      }
      buildModel(uu, Ru) {
        return this.startModels(), this.models.then((yu => yu(uu, Ru))).then((uu => this.unavailable ? new Promise((() => {})) : uu))
      }
      restartModelsIfFailed() {
        this.unavailable && !this.modelsRestarted && 0 === this.previews.size && (this.modelsRestarted = !0, this.models = null, this.unavailable = !1, this.startModels())
      }
      modelsFailed(uu) {
        this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${tu} the model workers didn't start: models won't draw in the previews`, uu))
      }
      called(uu) {
        return 0 !== uu && this.logError(uu, 0), uu
      }
      closePreview(uu) {
        this.previews.delete(uu.id), null !== this.module && uu.dispose(this.module), 0 === this.previews.size && null !== this.frameId && (this.deps.cancelFrame(this.frameId), this.frameId = null)
      }
      hostOf(uu) {
        if (null !== this.module && this.module !== uu) throw new Error("a second renderer module on one page");
        return this.module = uu, null === this.host && (this.host = this.guarded((() => new uu.IQu)), this.tellInGame(), this.handOverShaderPack()), this.host
      }
      tellInGame() {
        const {
          host: uu
        } = this;
        null !== uu && this.outsideCall("the game's start or end", (() => {
          uu.wmu(this.deps.game.inGame())
        }))
      }
      handOverShaderPack() {
        const {
          host: uu,
          shaderPackArgs: Ru
        } = this;
        null !== uu && null !== Ru && this.outsideCall("the shader pack's hand-over", (() => {
          uu.IEu(...Ru) || console.warn(`${tu} the host refused the shader pack: previews draw without it at home`)
        }))
      }
      outsideCall(uu, Ru) {
        try {
          this.hostCall(void 0, Ru)
        } catch (yu) {
          this.stop(), console.warn(`${tu} the previews stopped: ${uu} threw`, yu)
        }
      }
      async loadAnimations(uu) {
        const Ru = mu(null),
          yu = this.module;
        try {
          Ru.wasm = null === yu ? Ru.wasm : this.hostCall(Ru.wasm, (() => yu.Qr()))
        } catch {}
        let Eu, Ku;
        try {
          Eu = await this.fetchAnimationTable()
        } catch (Qu) {
          return void this.deps.onAnimationsFailed({
            stage: "fetch",
            error: Qu
          }, Ru)
        }
        if (!this.settleIfTrapped()) {
          try {
            Ku = uu.Lmu(Eu)
          } catch (Qu) {
            if (this.stopIfTrapped(Qu)) return;
            return void this.deps.onAnimationsFailed({
              stage: "decode",
              error: Qu
            }, Ru)
          }
          Ku || this.deps.onAnimationsFailed({
            stage: "decode",
            error: null
          }, Ru)
        }
      }
      async renderingHost() {
        if (null !== this.binding && await this.binding.done, this.settleIfTrapped()) return null;
        const uu = this.host;
        return null !== uu && this.guarded((() => uu.lmu())) ? uu : (this.opening ??= this.openAtHome().finally((() => {
          this.opening = null
        })), this.opening)
      }
      async openAtHome() {
        var uu;
        const Ru = null !== (uu = this.module) && void 0 !== uu ? uu : await this.loadModule();
        if (null === Ru) return null;
        const yu = this.hostOf(Ru),
          Eu = () => this.guarded((() => yu.lmu()));
        if (Eu()) return yu;
        if (null !== (0, Mu.F)() || (0, Mu.e)()) return null;
        const Ku = this.deps.createCanvas();
        Ku.width = 1, Ku.height = 1;
        const Qu = await this.deps.openExtras();
        if (this.settleIfTrapped()) return null;
        const mu = (0, Gu.f)().sampleCount;
        let Ju;
        try {
          Ju = await (0, Hu.u)(Ru, "previewRenderer", Ku, mu, nu.b, Qu)
        } catch (Nu) {
          throw Nu instanceof eu.b ? this.stopForTrap(Nu) : (0, Hu.q)(Nu) && await this.deps.onRenderFailed("start_failed", Nu), Nu
        }
        return this.guarded((() => yu.Hmu(Ju))) ? ((0, Mu.w)(performance.now()), this.samples = mu, this.pageCanvas = Ku, (0, Uu.g)(this.registryOf(Ru)), yu) : Eu() ? yu : null
      }
      startFrames() {
        null !== this.frameId || this.isStopped || (this.frameId = this.deps.requestFrame(this.frame))
      }
      drawFrame(uu, Ru) {
        for (const mu of this.previews.values()) mu.feed();
        if (this.stopped) return;
        const yu = this.deps.now(),
          Eu = uu.frame(Ru);
        this.costs.push(this.deps.now() - yu), this.costs.length > 120 && this.costs.shift();
        const Ku = 0 !== (256 & Eu),
          Qu = 255 & Eu;
        for (const mu of this.previews.values()) {
          if (this.stopped) return;
          mu.collect(Ku)
        }
        if (!this.stopped) {
          if (Ku) {
            const Ru = uu.imu();
            for (let uu = 0; uu + 1 < Ru.length; uu += 2) this.logError(Ru[uu], Ru[uu + 1])
          }
          if (Qu === zu) return this.stop(), void this.deps.onRenderFailed("lost");
          if (Qu === Fu) return this.stop(), void this.deps.onFatal(uu.nmu(), uu.smu());
          if (Qu === wu) return this.stop(), void console.warn(`${tu} the previews stopped: the page's renderer went with its session`);
          (0, ju.e)(Ru), this.startFrames()
        }
      }
      get isStopped() {
        return this.stopped || this.isTrapped
      }
      get isTrapped() {
        return null !== this.module && ((0, eu.h)(this.module) || "failed" === (0, Su.u)())
      }
      hostCall(uu, Ru) {
        if (this.settleIfTrapped()) return uu;
        try {
          return Ru()
        } catch (yu) {
          if (this.stopIfTrapped(yu)) return uu;
          throw yu
        }
      }
      guarded(uu) {
        if (this.settleIfTrapped()) throw new Error("the previews stopped: their module trapped");
        try {
          return uu()
        } catch (Ru) {
          throw this.stopIfTrapped(Ru), Ru
        }
      }
      registryOf(uu) {
        return {
          xEu: (Ru, yu) => {
            this.hostCall(void 0, (() => {
              uu.xEu(Ru, yu)
            }))
          },
          SEu: Ru => {
            this.hostCall(void 0, (() => {
              uu.SEu(Ru)
            }))
          }
        }
      }
      settleIfTrapped() {
        return !!this.isTrapped && (this.stopped || (this.stop(), (0, Uu.g)(null)), !0)
      }
      stopIfTrapped(uu) {
        return !(null === this.module || !(0, eu.i)(this.module, uu)) && (this.stopForTrap(uu), !0)
      }
      stopForTrap(uu) {
        this.stop(), (0, Uu.g)(null), (0, Su.P)(uu)
      }
      stop() {
        this.stopped = !0;
        for (const uu of this.previews.values()) uu.abandon()
      }
      logError(uu, Ru) {
        const yu = `${uu}:${Ru}`;
        this.loggedErrors.has(yu) || (this.loggedErrors.add(yu), console.warn(`${tu} error ${uu} (detail ${Ru})`))
      }
    }
    let fu = null;

    function uR() {
      return fu ??= new au(function() {
        const uu = (0, Cu.t)(Wu.clientSideServerUrls.staticUrl, {
          packUrl: uu => {
            var Ru, yu;
            return null !== (Ru = null === (yu = Au.f.current) || void 0 === yu ? void 0 : yu.modelUrl(uu)) && void 0 !== Ru ? Ru : null
          }
        });
        return {
          loadModule: Ou,
          startModels: async uu => {
            const {
              pageModelPool: Ru
            } = await yu.e(42).then((() => yu(42935))), {
              pool: Eu
            } = Ru(uu);
            return (uu, Ru) => Eu.build(uu, Ru)
          },
          fetchAnimations: async () => Ju(await (0, Eu.E)(ou())),
          playerFile: async () => (await (0, Cu.p)()).PLAYER_FILE,
          onAnimationsFailed: (uu, Ru) => {
            Nu("previewAnimations", ou(), uu, Ru)
          },
          provideBuiltInAnimationPack: uu => {
            Bu().provide(uu)
          },
          openExtras: Mu.D,
          files: uu,
          images: (0, Au.k)((0, du.l)(uu.url), (() => Au.f.current)),
          pack: Au.f,
          game: Du.c,
          fetchModel: uu => (0, Cu.i)(uu),
          createCanvas: () => document.createElement("canvas"),
          dpr: () => window.devicePixelRatio,
          now: () => performance.now(),
          requestFrame: uu => requestAnimationFrame(uu),
          cancelFrame: uu => {
            cancelAnimationFrame(uu)
          },
          onRenderFailed: qu,
          onFatal: (uu, Ru) => {
            console.error(`${tu} the previews stopped: renderer error ${uu} (detail ${Ru})`)
          }
        }
      }()), fu
    }
    var RR = yu(599),
      yR = yu(38401),
      ER = yu(3093);
    const KR = {
      wave: 0,
      clap: 1,
      point: 2,
      shrug: 3,
      cheer: 4,
      sit: 5,
      beeFly: 6,
      bow: 7,
      jesterDance: 8,
      mobIdle: 9,
      caveGolem: 10,
      magmaGolem: 11,
      frostWraith: 12,
      tikiTerror: 13,
      gunReady: 14,
      gunAimed: 15
    };
    const QR = "[bloxd-previews]",
      mR = new Uint32Array(5);

    function JR(uu) {
      return RR.l.indexOf(uu)
    }
    const NR = new WeakSet;

    function XR(uu) {
      const Ru = (0, yR.f)(uu),
        yu = null === Ru ? -1 : VR(Ru);
      return -1 !== yu ? yu : (NR.has(uu) || (NR.add(uu), console.warn(`${QR} an animation the previews' table lacks: the mob idles instead`)), -1)
    }

    function VR(uu) {
      var Ru;
      return null !== (Ru = KR[uu]) && void 0 !== Ru ? Ru : -1
    }

    function rR(uu, Ru) {
      const {
        canvas: yu
      } = Ru;
      yu.style.width = "100%", yu.style.height = "100%", yu.style.display = "block", uu.appendChild(yu)
    }

    function BR(uu) {
      const Ru = uu.getBoundingClientRect();
      return [Ru.width, Ru.height]
    }
    class xR {
      constructor(uu, Ru) {
        this.preview = uu, this.showView = Ru
      }
      show(uu) {
        this.showView(this.preview, uu)
      }
      resize(uu, Ru) {
        this.preview.resize(uu, Ru)
      }
      close() {
        this.preview.close()
      }
    }
    class SR {
      constructor(uu) {
        this.preview = uu, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.detachControls = void 0, this.detachControls = function(uu) {
          const {
            canvas: Ru
          } = uu;
          let yu = null;
          const Eu = uu => {
              var Eu;
              yu = {
                pointer: uu.pointerId,
                x: uu.clientX,
                y: uu.clientY
              }, null === (Eu = Ru.setPointerCapture) || void 0 === Eu || Eu.call(Ru, uu.pointerId)
            },
            Ku = Ru => {
              var Eu;
              const Ku = uu.orbit;
              if ((null === (Eu = yu) || void 0 === Eu ? void 0 : Eu.pointer) !== Ru.pointerId || null === Ku) return;
              const Qu = Ru.clientX - yu.x,
                mu = Ru.clientY - yu.y;
              yu = {
                ...yu,
                x: Ru.clientX,
                y: Ru.clientY
              }, uu.setOrbit({
                alpha: Ku.alpha - .01 * Qu,
                beta: Math.min(Math.PI - .01, Math.max(.01, Ku.beta - .01 * mu)),
                radius: Ku.radius
              })
            },
            Qu = uu => {
              var Ru;
              (null === (Ru = yu) || void 0 === Ru ? void 0 : Ru.pointer) === uu.pointerId && (yu = null)
            },
            mu = Ru => {
              const yu = uu.orbit;
              if (null === yu) return;
              Ru.preventDefault();
              const Eu = Ru.deltaY * (Ru.deltaMode === WheelEvent.DOM_DELTA_LINE ? 40 : Ru.deltaMode === WheelEvent.DOM_DELTA_PAGE ? 800 : 1),
                Ku = Math.min(100, Math.max(5, yu.radius + .08 * Eu));
              uu.setOrbit({
                ...yu,
                radius: Ku
              })
            };
          return Ru.style.touchAction = "none", Ru.addEventListener("pointerdown", Eu), Ru.addEventListener("pointermove", Ku), Ru.addEventListener("pointerup", Qu), Ru.addEventListener("pointercancel", Qu), Ru.addEventListener("wheel", mu, {
            passive: !1
          }), () => {
            Ru.removeEventListener("pointerdown", Eu), Ru.removeEventListener("pointermove", Ku), Ru.removeEventListener("pointerup", Qu), Ru.removeEventListener("pointercancel", Qu), Ru.removeEventListener("wheel", mu)
          }
        }(uu), this.dev = {
          canvas: () => uu.canvas,
          isolateHead: () => {
            console.warn(`${QR} isolateHead: noa's character preview only`)
          }
        }, this.apply(), this.ready = uu.untilSettled().then((() => {
          if (uu.isStopped) throw new Error(`${QR} the previews stopped before the character drew`);
          this.built = !0
        }))
      }
      isReady() {
        return this.built && !this.preview.isClosed
      }
      setCosmetic(uu, Ru) {
        this.cosmetics[uu] = Ru, this.apply()
      }
      playEmote(uu) {
        null === uu || uu !== this.emote ? (this.emote = uu, this.apply()) : this.preview.replay()
      }
      untilDrawn(uu) {
        return this.preview.untilSettled()
      }
      setOrbit(uu) {
        let {
          yaw: Ru,
          pitch: yu,
          radius: Eu
        } = uu;
        const Ku = this.preview.orbit;
        null !== Ku && this.preview.setOrbit({
          alpha: Ru,
          beta: yu,
          radius: null !== Eu && void 0 !== Eu ? Eu : Ku.radius
        })
      }
      resetCamera() {}
      resize(uu, Ru) {
        this.preview.resize(uu, Ru)
      }
      close() {
        this.detachControls(), this.preview.close()
      }
      apply() {
        var uu;
        this.preview.setPlayer(JSON.stringify(this.cosmetics), mR, null === (uu = this.emote) ? -1 : VR(uu))
      }
    }

    function pR(uu, Ru) {
      let {
        mobType: yu,
        variation: Eu,
        animation: Ku
      } = Ru;
      uu.setMob(JR(yu), null !== Eu && void 0 !== Eu ? Eu : "", 1, XR(Ku))
    }

    function TR(uu, Ru) {
      let {
        mobType: yu,
        variation: Eu,
        metaInfo: Ku,
        tamed: Qu
      } = Ru;
      uu.setPet(JR(yu), Eu, Ku, Qu)
    }
    const WR = {
      aimed: .533 / 1.15 * 1.1,
      ready: .16 / .85 * 1.1
    };
    class jR {
      constructor(uu, Ru, yu, Eu) {
        this.preview = null, this.closed = !1, this.figure = null, this.shown = !1, this.order = "", this.span = {
          left: 0,
          width: 0
        }, this.lineup = [0, 0], this.given = null, this.loaded = !1, uu(yu.width, Eu[1], Eu).then((uu => {
          if (this.closed) return void uu.close();
          const {
            style: yu
          } = uu.canvas;
          yu.position = "absolute", yu.top = "0", yu.visibility = "hidden", rR(Ru, uu), this.preview = uu, this.apply()
        })).catch((uu => {
          console.error(`${QR} couldn't open a lineup figure`, uu)
        }))
      }
      update(uu, Ru, yu, Eu, Ku) {
        this.figure = uu, this.shown = Ru, this.order = yu, this.span = Eu, this.lineup = Ku, this.apply()
      }
      close() {
        var uu;
        this.closed = !0, null === (uu = this.preview) || void 0 === uu || uu.close(), this.preview = null
      }
      apply() {
        const {
          preview: uu,
          figure: Ru,
          lineup: yu
        } = this;
        if (null === uu || null === Ru) return;
        if (this.given !== Ru) {
          var Eu;
          this.given = Ru, this.loaded = !1;
          const yu = null === Ru.pC ? 0 : null !== (Eu = (0, ER.b)(Ru.pC)) && void 0 !== Eu ? Eu : 0;
          uu.setFigure(function(uu) {
            return JSON.stringify(Object.fromEntries(uu.cosmetics))
          }(Ru), yu, XR(Ru.animation), Ru.size), uu.untilSettled().then((() => {
            this.given === Ru && (this.loaded = !0, this.apply())
          }))
        }
        const {
          left: Ku,
          width: Qu
        } = this.span;
        uu.resize(Qu, yu[1], yu);
        const {
          style: mu
        } = uu.canvas;
        mu.left = `${Ku}px`, mu.width = `${Qu}px`, mu.zIndex = this.order, mu.visibility = this.shown && this.loaded ? "visible" : "hidden"
      }
    }
    class HR {
      constructor(uu, Ru) {
        this.open = Ru, this.layer = void 0, this.figures = [], this.view = {
          figures: [],
          shown: []
        }, this.size = void 0, this.size = BR(uu), this.layer = document.createElement("div");
        const {
          style: yu
        } = this.layer;
        yu.position = "relative", yu.isolation = "isolate", yu.overflow = "hidden", yu.width = "100%", yu.height = "100%", yu.pointerEvents = "none", uu.appendChild(this.layer)
      }
      show(uu) {
        this.view = uu, this.place()
      }
      resize(uu, Ru) {
        this.size = [uu, Ru], this.place()
      }
      close() {
        for (const uu of this.figures) uu.close();
        this.figures = [], this.layer.remove()
      }
      place() {
        const {
          figures: uu,
          shown: Ru
        } = this.view;
        for (const Eu of this.figures.splice(uu.length)) Eu.close();
        const {
          size: yu
        } = this;
        uu.forEach(((Eu, Ku) => {
          var Qu;
          const mu = function(uu, Ru, yu, Eu) {
            let [Ku, Qu] = Eu;
            const mu = (uu + .5) * Ku / Ru,
              Ju = Math.min(Math.max(Ku / Ru, 2 * yu * Qu), 2 * Math.max(mu, Ku - mu));
            return {
              left: mu - Ju / 2,
              width: Ju
            }
          }(Ku, uu.length, function(uu) {
            let {
              animation: Ru,
              size: yu
            } = uu;
            const {
              aimed: Eu,
              ready: Ku
            } = WR;
            return (XR(Ru) === KR.gunAimed ? Eu : Ku) * yu
          }(Eu), yu);
          this.figures[Ku] ??= new jR(this.open, this.layer, mu, yu), this.figures[Ku].update(Eu, null !== (Qu = Ru[Ku]) && void 0 !== Qu && Qu, function(uu, Ru) {
            return String(Math.round(1e3 * uu) + Ru)
          }(Eu.size, Ku), mu, yu)
        }))
      }
    }
    const dR = {
      player: cu,
      store: Lu
    };
    class bR {
      constructor(uu) {
        this.page = uu
      }
      async openMob(uu) {
        return new xR(await this.open(uu, gu), pR)
      }
      async openPet(uu) {
        return new xR(await this.open(uu, gu), TR)
      }
      openMobLineup(uu) {
        return new HR(uu, ((uu, Ru, yu) => this.page.openPreview(gu, uu, Ru, yu)))
      }
      async openCharacter(uu, Ru) {
        return new SR(await this.open(uu, dR[Ru]))
      }
      async open(uu, Ru) {
        const [yu, Eu] = BR(uu), Ku = await this.page.openPreview(Ru, yu, Eu);
        return rR(uu, Ku), Ku
      }
    }
  },
  36541: (uu, Ru, yu) => {
    yu.d(Ru, {
      A: () => Xu,
      B: () => xu,
      C: () => Su,
      D: () => pu,
      G: () => Wu,
      c: () => Eu,
      g: () => Ku,
      j: () => Bu,
      n: () => Tu,
      r: () => Vu,
      v: () => ju,
      x: () => Nu
    });
    const Eu = [{
      numLines: 7,
      charsPerLine: 16,
      uiFontSize: 3.3,
      ingameFontSize: 25
    }, {
      numLines: 5,
      charsPerLine: 11,
      uiFontSize: 4.6,
      ingameFontSize: 36
    }, {
      numLines: 3,
      charsPerLine: 7,
      uiFontSize: 7.5,
      ingameFontSize: 58
    }];

    function Ku(uu, Ru) {
      const {
        numLines: yu,
        charsPerLine: Ku
      } = Eu[Ru];
      return Hu(uu, yu, Ku, !1)
    }
    const Qu = 7 / 8,
      mu = .25,
      Ju = 8;

    function Nu(uu, Ru) {
      return {
        width: Math.min(uu, Ju) - 2 * mu,
        height: Math.min(Ru, Ju) - 2 * mu
      }
    }

    function Xu(uu, Ru, yu) {
      const Ku = Nu(uu, Ru),
        {
          numLines: mu,
          charsPerLine: Ju
        } = Eu[yu];
      return {
        numLines: Math.max(1, Math.floor(mu / Qu * Ku.height)),
        charsPerLine: Math.max(1, Math.floor(Ju * Ku.width))
      }
    }

    function Vu(uu, Ru, yu, Eu) {
      const {
        numLines: Ku,
        charsPerLine: Qu
      } = Xu(yu, Eu, Ru);
      return Hu(uu, Ku, Qu, !1)
    }
    const ru = 32e3;

    function Bu(uu) {
      return uu.slice(0, ru)
    }
    const xu = 512e3,
      Su = 64,
      pu = xu;

    function Tu(uu, Ru) {
      const yu = Math.max(0, pu - Ru),
        Eu = Math.min(xu, yu);
      return uu.slice(0, Eu)
    }
    const Wu = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      pJ: {
        numLines: 1,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      nameTag: {
        numLines: 1,
        charsPerLine: 13,
        uiFontSize: 4.6
      }
    };

    function ju(uu, Ru) {
      const {
        numLines: yu,
        charsPerLine: Eu
      } = Wu[Ru];
      return Hu(uu, yu, Eu, !1)
    }

    function Hu(uu, Ru, yu, Eu, Ku) {
      (Ku || Eu) && (uu = uu.slice(0, null !== Ku && void 0 !== Ku ? Ku : Ru * yu));
      const Qu = uu.split("\n");
      if (Qu.length > Ru && Qu.splice(Ru, Qu.length - Ru), !Eu)
        for (let mu = 0; mu < Qu.length; mu++) {
          const uu = Qu[mu];
          uu.length > yu && (Qu[mu] = uu.substring(0, yu), Qu.length < Ru && Qu.splice(mu + 1, 0, uu.substring(yu)))
        }
      return Qu.join("\n")
    }
  },
  42858: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/builtInAnimations.anim.38e056f49512e10b7206.gz"
  },
  42865: (uu, Ru, yu) => {
    uu.exports = yu.p + "static/media/previewAnimations.dat.24d2343c38c8f9b3fb85.gz"
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);