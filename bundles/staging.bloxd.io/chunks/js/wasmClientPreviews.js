export const id = 60;
export const ids = [60];
export const modules = {
  38982: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Uu,
      f: () => Zu
    });
    const su = new WeakMap;

    function Uu(uu, Eu) {
      return su.set(uu, Eu), uu
    }

    function Zu(uu) {
      var Eu;
      return null !== (Eu = su.get(uu)) && void 0 !== Eu ? Eu : null
    }
  },
  39009: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => lu
    });
    var su = ju(1278);

    function Uu(uu) {
      const Eu = /(\d*\.?\d+)px/.exec(uu);
      return Eu ? Number(Eu[1]) : null
    }

    function Zu(uu) {
      return uu.split(/[\s,]+/).pop()
    }
    let Xu = !1;
    const lu = {
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
      drawText: function(uu, Eu, su, lu, qu, fu) {
        if (qu <= 0 || fu <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: Cu,
          fontVariant: bu,
          fontWeight: cu,
          fontSize: Nu,
          font: Ou
        } = this, Yu = [Cu, bu, cu, `${Nu}px`, Ou].filter(Boolean).join(" "), hu = [
          [cu, `${Nu}px`, Zu(Ou)].filter(Boolean).join(" "), `${Nu}px sans-serif`
        ], Du = uu.font, gu = function(uu, Eu, ju) {
          for (const su of Eu) {
            uu.font = su;
            const Eu = Uu(uu.font),
              Xu = Zu(su);
            if (null !== Eu && Math.abs(Eu - ju) <= .5 && uu.font.toLowerCase().includes(Xu.toLowerCase())) return su
          }
          return null
        }(uu, [Yu, ...hu], Nu);
        gu !== Yu && function(uu, Eu, su) {
          Xu || (Xu = !0, Promise.resolve().then((() => ju(1128))).then((ju => {
            let {
              YY: Uu
            } = ju;
            Uu(new Error("A canvas didn't take canvasTxt's font"), {
              font: uu,
              oN: Eu,
              drawnWith: null !== su && void 0 !== su ? su : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(Yu, Du, gu);
        const Mu = Uu(uu.font);
        if (null === gu && null !== Mu && Mu > 0) {
          const ju = Nu / Mu;
          uu.save();
          try {
            return uu.scale(ju, ju), {
              height: this.drawLines(uu, Eu, su / ju, lu / ju, qu / ju, fu / ju, Mu).height * ju
            }
          } finally {
            uu.restore()
          }
        }
        return this.drawLines(uu, Eu, su, lu, qu, fu, Nu)
      },
      drawLines: function(uu, Eu, ju, Uu, Zu, Xu, lu) {
        const qu = ju + Zu,
          fu = Uu + Xu;
        let Cu, bu = Uu + Xu / 2 + lu / 2;
        "right" === this.align ? (Cu = qu, uu.textAlign = "right") : "left" === this.align ? (Cu = ju, uu.textAlign = "left") : (Cu = ju + Zu / 2, uu.textAlign = "center");
        for (const su of Eu) {
          uu.measureText(su).width >= Zu && (Eu = Eu.replace(su, ""))
        }
        Eu = (0, su.T)(Eu);
        const cu = [],
          Nu = Eu.split("\n"),
          Ou = this.justify ? uu.measureText("\u200a").width : 0;
        Nu.forEach((Eu => {
          let ju = uu.measureText(Eu).width;
          if (ju <= Zu) cu.push(Eu);
          else {
            let su = Eu;
            const Uu = Zu;
            let Xu, lu, qu;
            for (ju = uu.measureText(su).width; ju > Uu;) {
              for (Xu = 0, lu = 0, qu = ""; lu < Uu;) Xu++, qu = su.substr(0, Xu), lu = uu.measureText(qu).width;
              Xu--, qu = qu.substr(0, Xu);
              const Eu = Xu;
              if (" " !== su.substr(Xu, 1)) {
                for (;
                  " " !== su.substr(Xu, 1) && 0 !== Xu;) Xu--;
                0 === Xu && (Xu = Eu), qu = su.substr(0, Xu)
              }
              qu = this.justify ? this.justifyLine(uu, qu, Ou, "\u200a", Zu) : qu, su = su.substr(Xu), ju = uu.measureText(su).width, cu.push(qu)
            }
            ju > 0 && cu.push(su)
          }
        }));
        const Yu = this.lineHeight ? this.lineHeight : this.getTextHeight(uu, Eu),
          hu = Yu * (cu.length - 1),
          Du = hu / 2;
        let gu = Uu;
        "top" === this.vAlign ? bu = Uu + lu : "bottom" === this.vAlign ? (bu = fu - hu, gu = fu) : (gu = Uu + Xu / 2, bu -= Du), cu.forEach((Eu => {
          Eu = Eu.trim(), uu.fillText(Eu, Cu, bu), bu += Yu
        })), this.debug && (uu.lineWidth = 3, uu.strokeStyle = "#00909e", uu.strokeRect(ju, Uu, Zu, Xu), uu.lineWidth = 2, uu.strokeStyle = "#f6d743", uu.beginPath(), uu.moveTo(Cu, Uu), uu.lineTo(Cu, fu), uu.stroke(), uu.strokeStyle = "#ff6363", uu.beginPath(), uu.moveTo(ju, gu), uu.lineTo(qu, gu), uu.stroke());
        return {
          height: hu + Yu
        }
      },
      getTextHeight: function(uu, Eu) {
        const ju = uu.textBaseline;
        uu.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: su
        } = uu.measureText(Eu);
        return uu.textBaseline = ju, su
      },
      justifyLine: function(uu, Eu, ju, su, Uu) {
        const Zu = Eu.trim(),
          Xu = uu.measureText(Zu).width,
          lu = Zu.split(/\s+/).length - 1,
          qu = Math.floor((Uu - Xu) / ju);
        if (lu <= 0 || qu <= 0) return Zu;
        const fu = Math.floor(qu / lu);
        let Cu = qu - lu * fu,
          bu = [];
        for (let cu = 0; cu < fu; cu++) bu.push(su);
        bu = bu.join("");
        return Zu.replace(/\s+/g, (uu => {
          const Eu = Cu > 0 ? bu + su : bu;
          return Cu--, uu + Eu
        }))
      }
    }
  },
  39013: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Yu,
      d: () => Ou,
      f: () => cu,
      i: () => Cu,
      m: () => bu
    });
    var su = ju(4427),
      Uu = ju(349);
    const Zu = 1024,
      Xu = 1536,
      lu = 2 * su.j + 1,
      qu = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      fu = 1.5;

    function Cu(uu, Eu, ju) {
      if ("string" !== typeof uu) return Eu;
      try {
        const ju = JSON.parse(uu);
        return ju && "object" === typeof ju ? ju : Eu
      } catch (su) {
        return void 0 !== ju && console.error(`Couldn't parse ${ju}`, su), Eu
      }
    }

    function bu(uu) {
      return Cu(uu, null, "a leaderboard's rows")
    }

    function cu(uu, Eu) {
      var ju, su;
      return null !== Eu && void 0 !== Eu ? Eu : {
        status: null !== (ju = uu.status) && void 0 !== ju ? ju : "loading",
        entries: null !== (su = uu.entries) && void 0 !== su ? su : []
      }
    }

    function Nu(uu, Eu) {
      return "number" === typeof uu && Number.isFinite(uu) && uu > 0 ? uu : Eu
    }

    function Ou(uu, Eu) {
      const ju = Nu(uu.size, 1);
      let su = Nu(uu.width, Nu(2.5 * ju, 2.5)),
        Uu = Nu(uu.height, Nu(3.75 * ju, 3.75));
      Number.isFinite(Zu * Uu / su) && Number.isFinite(Xu * su / Uu) || (su = 2.5, Uu = 3.75);
      const lu = Uu / su,
        qu = Math.max(1, Math.min(Zu, Eu / lu));
      return {
        width: su,
        height: Uu,
        layoutWidth: Math.max(Zu, Xu / lu),
        layoutHeight: Math.max(Xu, Zu * lu),
        pixelWidth: Math.round(qu),
        pixelHeight: Math.round(Math.max(1, Math.min(Eu, qu * lu)))
      }
    }

    function Yu(uu, Eu, ju, Xu, Cu, bu) {
      uu.setTransform(1, 0, 0, 1, 0, 0), uu.fillStyle = Uu.G.defaultNameTagBackground, uu.fillRect(0, 0, Eu, ju), uu.scale(Eu / Xu.layoutWidth, ju / Xu.layoutHeight), uu.translate((Xu.layoutWidth - Zu) / 2, 0),
        function(uu, Eu, ju, Zu) {
          var Xu, Cu, bu, cu;
          const {
            top: Nu,
            around: Ou,
            showPlayerText: Yu,
            localPlayerDbId: gu
          } = ju, {
            whiteUiText: Mu,
            grayUiText: eu,
            yellowUiText: Gu
          } = Uu.G;
          uu.textBaseline = "middle";
          const pu = function(Eu, ju, su, Uu, Zu, Xu) {
              let lu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              uu.font = `bold ${Uu}px 'Jetbrains Mono', monospace`, uu.fillStyle = Zu, uu.textAlign = lu;
              let qu = Eu.replace(/[\r\n\t]/g, " ");
              if (uu.measureText(qu).width > Xu) {
                for (; qu.length > 0 && uu.measureText(`${qu}\u2026`).width > Xu;) qu = qu.slice(0, -1);
                qu += "\u2026"
              }
              uu.fillText(qu, ju, su)
            },
            wu = Eu => {
              uu.fillStyle = Mu, uu.globalAlpha = .15, uu.fillRect(24, Eu, 976, 2), uu.globalAlpha = 1
            },
            Ju = null === gu ? null : (0, Uu.qc)(gu),
            du = uu => null !== Ju && uu.playerHash === Ju,
            au = hu(Nu.entries, su.l),
            Pu = "ready" === Nu.status && au.length > 0,
            ou = null === Ou ? [] : hu(Ou.entries, lu),
            ku = au.some(du),
            mu = null === Ou ? null : function(uu) {
              const Eu = uu;
              if (!Eu || !Number.isFinite(Eu.rank) || !Number.isFinite(Eu.tied) || !Number.isFinite(Eu.total)) return null;
              return Eu
            }(Ou.standing),
            vu = ou.find(du),
            Ku = au.find(du),
            Vu = null === mu || void 0 === vu ? null : {
              value: vu.value,
              rank: mu.rank
            },
            ru = Du(au, void 0 === Ku || Ku.value === (null === Vu || void 0 === Vu ? void 0 : Vu.value) ? Vu : null),
            Qu = Du(ou, Vu),
            iu = (uu, Eu) => {
              const ju = uu.findIndex(du);
              return ju >= 0 ? Eu[ju] : null
            },
            Wu = null !== (Xu = null !== (Cu = null === mu || void 0 === mu ? void 0 : mu.rank) && void 0 !== Cu ? Cu : iu(ou, Qu)) && void 0 !== Xu ? Xu : iu(au, ru);
          uu.font = "bold 34px 'Jetbrains Mono', monospace";
          const Su = [...Pu ? ru : [], ...ku ? [] : Qu],
            Iu = Math.min(280, Math.max(0, ...Su.map((Eu => uu.measureText(qu.format(Eu)).width)))),
            Fu = Iu <= 80,
            Bu = Fu ? 80 : 32 + Iu,
            Lu = Fu ? 148 : Bu + 28,
            tu = 660 - Lu;
          pu(`TOP ${su.l}  /  ALL TIME`, 24, 52, 28, eu, 976), pu(Yu ? String(null !== (bu = Eu.title) && void 0 !== bu ? bu : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, Mu, 976), pu("RANK", 32, 174, 28, eu, Lu - 40), pu("PLAYER", Lu, 174, 28, eu, tu), pu(Yu ? String(null !== (cu = Eu.scoreLabel) && void 0 !== cu ? cu : "Score").slice(0, 24) : "Score", 992, 174, 28, eu, 304, "right"), wu(202);
          const xu = (Zu - 232) / (su.l + fu + lu),
            Tu = 208 + su.l * xu,
            Hu = Tu + fu * xu,
            Au = (Eu, ju, su, Uu) => {
              const Zu = du(Eu);
              uu.fillStyle = Zu ? Gu : Mu, uu.globalAlpha = Zu ? .15 : Uu ? .035 : 0, uu.fillRect(24, su - xu / 2 + 1, 976, xu - 2), uu.globalAlpha = 1;
              const Xu = Zu ? Gu : Mu;
              pu(qu.format(ju), Bu, su, 34, Xu, Fu ? 80 : Iu, Fu ? "center" : "right"), pu(Yu ? String(Eu.name).slice(0, 64) : "Player", Lu, su, 34, Xu, tu);
              const lu = qu.format(Eu.value);
              pu(uu.measureText(lu).width > 304 ? Eu.value.toExponential(6) : lu, 992, su, 34, Xu, 304, "right")
            };
          if (Pu)
            for (const [su, Uu] of au.entries()) Au(Uu, ru[su], 208 + (su + .5) * xu, su % 2 === 0);
          else {
            const uu = "error" === Nu.status,
              Eu = uu ? "Couldn't load leaderboard" : "ready" === Nu.status ? "No scores yet" : "Loading leaderboard\u2026",
              ju = uu ? "Trying again shortly" : "ready" === Nu.status ? "Be the first on the board!" : "Fetching the top players",
              su = (208 + Tu) / 2;
            pu(Eu, 512, su - 28, 40, uu ? Uu.G.redUiText : Mu, 960, "center"), pu(ju, 512, su + 27, 30, eu, 960, "center")
          }
          const nu = Tu + fu * xu / 2;
          if (null === Wu) wu(nu);
          else {
            const Eu = null === mu ? 0 : mu.tied - 1,
              ju = `YOUR RANK #${qu.format(Wu)}${null===mu?"":` of ${qu.format(mu.total)}`}`;
            uu.font = "bold 36px 'Jetbrains Mono', monospace";
            const su = Math.max(20, Math.min(36, Math.floor(34560 / uu.measureText(ju).width)));
            pu(ju, 512, nu - (Eu > 0 ? 15 : 0), su, Gu, 960, "center"), Eu > 0 && pu(`Tied with ${qu.format(Eu)} other${1===Eu?"":"s"}`, 512, nu + 24, 24, eu, 960, "center")
          }
          if (null === Ou) return;
          const yu = Hu + lu * xu / 2;
          if (ku) pu(`You're in the top ${su.l}!`, 512, yu, 40, Gu, 960, "center");
          else if (0 === ou.length) pu("You're not on this board yet", 512, yu, 34, eu, 960, "center");
          else
            for (const [su, Uu] of ou.entries()) Au(Uu, Qu[su], Hu + (su + .5) * xu, su % 2 === 0)
        }(uu, Cu, bu, Xu.layoutHeight)
    }

    function hu(uu, Eu) {
      return Array.isArray(uu) ? uu.slice(0, Eu).filter((uu => uu && Number.isFinite(uu.rank) && Number.isFinite(uu.value))) : []
    }

    function Du(uu, Eu) {
      const ju = [];
      let su = !1;
      return uu.forEach(((Uu, Zu) => {
        if (null !== Eu && Uu.value === Eu.value) return void ju.push(Eu.rank);
        const Xu = Zu > 0 && Uu.value === uu[Zu - 1].value;
        Xu || (su = 0 === Zu && 1 !== Uu.rank), ju.push(Xu && !su ? ju[Zu - 1] : Uu.rank)
      })), ju
    }
  },
  39203: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Uu,
      f: () => Zu
    });
    const su = 32;

    function Uu(uu) {
      return Array.from(uu).length
    }

    function Zu(uu) {
      const Eu = [""];
      let ju = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Uu = "";
      const Zu = () => {
        Eu.push(""), ju = 0, Uu = ""
      };
      for (const Xu of uu.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(Xu)) Zu();
        else if (/^\s+$/.test(Xu)) Uu += Xu;
      else if (Xu.length > 0) {
        const uu = Array.from(Xu);
        ju > 0 && ju + Uu.length + uu.length > su && Zu(), Eu[Eu.length - 1] += Uu, ju += Uu.length, Uu = "";
        for (const Uu of uu) ju >= su && Zu(), Eu[Eu.length - 1] += Uu, ju++
      }
      return Eu[Eu.length - 1] += Uu, Eu
    }
  },
  51234: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      WasmPreviewHost: () => PE,
      pageBuiltInAnimationPack: () => cu,
      pagePreviews: () => XE,
      previewModule: () => yu
    });
    var su = ju(3020),
      Uu = ju(656);
    const Zu = "[bloxd-wasm-client]";

    function Xu(uu) {
      const Eu = {
        wasm: "unknown",
        client: String(Uu.b)
      };
      try {
        var ju;
        Eu.wasm = null !== (ju = null === uu || void 0 === uu ? void 0 : uu.hb()) && void 0 !== ju ? ju : Eu.wasm
      } catch {}
      return Eu
    }
    async function lu(uu) {
      if (uu.length < 2 || 31 !== uu[0] || 139 !== uu[1]) return uu;
      if ("undefined" === typeof DecompressionStream) {
        const {
          ungzip: Eu
        } = await Promise.resolve().then((() => ju(2955)));
        return Eu(uu)
      }
      const Eu = new Blob([uu]).stream().pipeThrough(new DecompressionStream("gzip"));
      return new Uint8Array(await new Response(Eu).arrayBuffer())
    }

    function qu(uu, Eu, su, Uu) {
      Promise.resolve().then((() => ju(40988))).then((ju => {
        let {
          reportDataLoadFailure: Zu
        } = ju;
        Zu(uu, Eu, su, Uu)
      }), (Eu => {
        console.warn(`${Zu} ${uu} didn't load, and the report couldn't be sent`, su.error, Eu)
      }))
    }
    const fu = [3e4, 12e4, 3e5];
    class Cu {
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
        const Eu = Xu(uu),
          ju = await async function(uu, Eu) {
            let ju;
            try {
              ju = await uu()
            } catch (su) {
              return {
                stage: "fetch",
                error: su
              }
            }
            try {
              return Eu(ju) ? null : {
                stage: "decode",
                error: null
              }
            } catch (su) {
              return {
                stage: "decode",
                error: su
              }
            }
          }((() => this.deps.fetch()), (Eu => {
            const ju = uu.GZu(Eu);
            return ju && this.resolveSet(Eu), ju
          }));
        if (null !== ju) {
          if ("fetch" === ju.stage) {
            this.loading = null;
            const Eu = fu[this.retries++];
            void 0 !== Eu && this.deps.later((() => {
              this.provide(uu)
            }), Eu)
          }
          this.reported || (this.reported = !0, this.deps.onFailed(ju, Eu))
        }
      }
    }
    let bu = null;

    function cu() {
      return bu ??= new Cu({
        fetch: async () => lu(await (0, su.K)(Nu(), {
          priority: "low"
        })),
        onFailed: (uu, Eu) => {
          qu("builtInAnimations", Nu(), uu, Eu)
        },
        later: (uu, Eu) => {
          setTimeout(uu, Eu)
        }
      }), bu
    }

    function Nu() {
      return ju(51236)
    }
    var Ou = ju(3017),
      Yu = ju(1255),
      hu = ju(330),
      Du = ju(326),
      gu = ju(680),
      Mu = ju(4970),
      eu = ju(40963),
      Gu = ju(40980),
      pu = ju(41156),
      wu = (ju(41017), ju(41033)),
      Ju = ju(41040),
      du = ju(41046),
      au = ju(40971),
      Pu = ju(41176),
      ou = ju(41180),
      ku = ju(40960),
      mu = ju(41199),
      vu = ju(41079),
      Ku = ju(41072),
      Vu = ju(41117),
      ru = ju(41161),
      Qu = ju(42866),
      iu = ju(36684),
      Wu = ju(3900);
    const Su = "[bloxd-previews]",
      Iu = 4e5,
      Fu = 0,
      Bu = 1,
      Lu = 2,
      tu = 1,
      xu = 2,
      Tu = 3,
      Hu = 0,
      Au = 1,
      nu = 2;

    function yu(uu) {
      const Eu = uu,
        ju = (0, eu.Z)(uu),
        su = (0, eu.q)(uu);
      return null !== ju && null !== su && "function" === typeof Eu.gZu && "function" === typeof Eu.MZu && "function" === typeof Eu.eZu ? Eu : null
    }

    function zu(uu, Eu, ju) {
      let [su, Uu] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [uu, Eu], Zu = Math.min(Number.isFinite(ju) && ju > 0 ? ju : 1, 2);
      const Xu = Math.max(0, su, uu) * Math.max(0, Uu, Eu) * Zu * Zu;
      return Xu > Iu && (Zu *= Math.sqrt(Iu / Xu)), [Math.max(1, Math.floor(Math.max(0, uu) * Zu)), Math.max(1, Math.floor(Math.max(0, Eu) * Zu))]
    }

    function Ru() {
      return ju(51244)
    }
    async function uE(uu, Eu, su) {
      var Uu;
      let Zu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      "lost" === uu && (0, ku.x)();
      const lu = await (0, ku.O)();
      if (null === lu || (0, eu.t)(lu) || (0, ku.e)()) return;
      const qu = "webgpu" === lu.backend;
      if (!qu && "lost" !== uu) return;
      const fu = qu && (0, Du.k)(lu.adapter, null !== su && void 0 !== su ? su : null, "lost" === uu, Zu),
        Cu = null !== (Uu = "lost" === uu ? (0, Gu.h)((0, Ou.S)() ? (0, eu.Z)((0, Ou.F)()) : null) : void 0) && void 0 !== Uu ? Uu : Eu,
        bu = qu ? (0, eu.gb)(uu, void 0, (0, Gu.b)(Cu)) : null;
      if (null === bu) {
        qu || (0, gu.s)(), (0, ku.r)();
        try {
          await async function(uu, Eu, su, Uu, Zu) {
            let {
              restoreLost: lu,
              adapterRemembered: qu
            } = Zu;
            const fu = (0, Ou.S)(),
              {
                flushCrashReports: Cu,
                reportRenderReload: bu
              } = await Promise.resolve().then((() => ju(40988)));
            bu(uu.backend, Uu, Xu(fu ? (0, Ou.F)() : null), {
              from: "home",
              cause: Eu,
              restoreLost: lu,
              adapterRemembered: qu,
              ...EE(uu, Eu, su)
            }), await Cu(vu.b)
          }(lu, uu, Cu, null !== su && void 0 !== su ? su : "start_failed" === uu ? 0 : 1, {
            restoreLost: Zu,
            adapterRemembered: fu
          })
        } catch (Nu) {
          console.warn(`${Su} ${lu.backend} failed at home (${uu}), and its report couldn't be sent`, Nu)
        }(0, vu.m)()
      } else {
        var cu;
        const Eu = EE(lu, uu, Cu),
          su = `WebGPU failed at home (${uu}${void 0===Eu.error?"":`: ${Eu.error instanceof Error?Eu.error.message:(0,iu.j)(Eu.error)}`}) and ${bu}`;
        console.warn(`${Su} ${su}: the previews stop`, null !== (cu = Eu.error) && void 0 !== cu ? cu : ""), (0, ku.t)(su);
        try {
          const {
            countRenderLost: su
          } = await Promise.resolve().then((() => ju(40988)));
          su(uu, Eu.error, Eu.context)
        } catch (Yu) {
          console.warn(`${Su} WebGPU failed at home (${uu}), and its count couldn't be sent`, Yu)
        }
      }
    }

    function EE(uu, Eu, ju) {
      let {
        adapter: su
      } = uu;
      return {
        error: ju,
        context: {
          adapter: su,
          boundAtMs: "start_failed" === Eu ? null : (0, ku.K)(),
          indirectHangs: (0, ku.z)(),
          restoresSkipped: (0, ku.N)()
        }
      }
    }
    async function jE() {
      if (!(0, Ou.S)()) {
        const uu = await (0, ku.O)();
        if (null === uu || (0, eu.t)(uu)) return null;
        if (await (0, mu.b)(await uu.load()), !(0, Ou.S)()) return null
      }
      return yu((0, Ou.F)())
    }
    class sE {
      constructor(uu, Eu, ju, su, Uu, Zu) {
        this.page = uu, this.host = Eu, this.id = ju, this.canvas = su, this.size = Uu, this.models = void 0, this.images = void 0, this.write = void 0, this.outcomes = [], this.closed = !1, this.quiet = 0, this.settled = [];
        const Xu = {
            ...Zu.images,
            glbUrl: uu => {
              var Eu;
              return null !== (Eu = this.models.drawnUrl(uu)) && void 0 !== Eu ? Eu : Zu.images.glbUrl(uu)
            }
          },
          lu = Eu => uu.modelFile(Eu);
        this.images = new pu.g(Xu, (uu => {
          console.warn(`${Su} image ${uu.key.kind}:${uu.key.index}:${uu.key.word} failed`, uu.error)
        }), {
          fetchFile: lu,
          fetchImage: Eu => uu.imageFile(Eu)
        }), uu.startModels(), this.models = new wu.g(Zu.files, ((Eu, ju) => uu.buildModel(Eu, ju)), (uu => {
          console.warn(`${Su} model file ${uu.file} (${uu.url}) failed`, uu.error)
        }), {
          fetchFile: lu,
          onWritten: (uu, Eu) => {
            this.images.glbWritten(uu, Eu)
          },
          onTaken: (uu, Eu) => {
            this.images.glbTaken(uu, Eu)
          }
        }), this.write = (uu, Eu, ju) => {
          if (this.closed) return !0;
          if (uu === wu.e) {
            const uu = new DataView(ju.buffer, ju.byteOffset, du.d),
              su = uu.getUint32(0, !0),
              Uu = uu.getUint32(du.g, !0),
              Zu = this.page.hostCall(nu, (() => this.host.dXu(this.id, su, Eu, ju.subarray(du.d))));
            return this.outcomes.push([Uu, Zu]), !0
          }
          return uu === pu.d && (this.page.hostCall(void 0, (() => {
            this.host.PXu(this.id, ju)
          })), !0)
        }
      }
      get isClosed() {
        return this.closed
      }
      get isStopped() {
        return this.page.isStopped
      }
      resize(uu, Eu, ju) {
        if (this.closed) return;
        const [su, Uu] = zu(uu, Eu, this.page.dpr(), ju);
        su === this.size[0] && Uu === this.size[1] || (this.size = [su, Uu], this.page.hostCall(void 0, (() => {
          this.host.resize(this.id, su, Uu)
        })))
      }
      setMob(uu, Eu, ju, su) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.KXu(this.id, uu, Eu, ju, su))))
      }
      setPet(uu, Eu, ju, su) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.rXu(this.id, uu, Eu, ju, su))))
      }
      setPlayer(uu, Eu, ju) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.kXu(this.id, uu, Eu, ju))))
      }
      setFigure(uu, Eu, ju, su) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.mXu(this.id, uu, Eu, ju, su))))
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
          alpha: Eu,
          beta: ju,
          radius: su
        } = uu;
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.VXu(this.id, Eu, ju, su)
        }))
      }
      untilSettled() {
        return this.closed || this.page.isStopped ? Promise.resolve() : (this.quiet = 0, new Promise((uu => {
          this.settled.push(uu)
        })))
      }
      packChanged() {
        this.quiet = 0, this.models.refresh(), (0, Pu.j)(this.images)
      }
      feed() {
        this.models.drain(this.write);
        for (const [uu, Eu] of this.outcomes) {
          const ju = Eu === Hu ? [] : [Eu === Au ? uu : (uu | wu.f) >>> 0];
          this.models.taken(uu, ju)
        }
        this.outcomes.length = 0, this.images.drain(this.write)
      }
      collect(uu) {
        let Eu = !1;
        if (uu) {
          const uu = this.host.WXu(this.id);
          for (const Eu of uu) this.models.request(Eu);
          const ju = this.host.iXu(this.id);
          ju.length > 0 && this.images.onEvent(ju), Eu = uu.length > 0 || ju.length > 0
        }
        const ju = this.page.modelsUnavailable ? 0 : this.models.asking + this.models.unanswered,
          su = Eu || ju > 0 || this.images.waiting > 0 || this.images.inFlight > 0;
        this.quiet = su ? 0 : this.quiet + 1, this.quiet >= 3 && this.resolveSettled()
      }
      close() {
        this.closed || (this.closed = !0, this.page.closePreview(this), this.resolveSettled())
      }
      abandon() {
        this.resolveSettled()
      }
      dispose(uu) {
        this.page.hostCall(void 0, (() => {
          const Eu = this.host.close(this.id);
          Eu.length > 0 && this.images.onEvent(Eu), this.page.isTrapped || uu.eZu(this.id)
        })), this.images.dispose(), this.canvas.remove()
      }
      resolveSettled() {
        const uu = this.settled;
        this.settled = [];
        for (const Eu of uu) Eu()
      }
    }
    class UE {
      constructor(uu) {
        this.deps = uu, this.module = null, this.host = null, this.opening = null, this.pageCanvas = null, this.samples = 1, this.binding = null, this.sessionEnds = 0, this.lastEndReturned = !0, this.previews = new Map, this.nextId = 1, this.frameId = null, this.stopped = !1, this.loggedErrors = new Set, this.modelsListener = {
          onUnavailable: uu => {
            this.modelsFailed(uu)
          },
          onDecoderFailed: uu => {
            this.loggedErrors.has("modelDecoder") || (this.loggedErrors.add("modelDecoder"), console.warn(`${Su} the Draco decoder didn't load: models waiting on it won't draw`, uu))
          },
          onWorkerLost: uu => {
            this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${Su} a model worker was lost: ${uu}`))
          },
          onModuleRetry: () => {}
        }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.AN = {
          setShaderPack: (uu, Eu, ju, su, Uu) => (this.shaderPackArgs = [uu, Eu, ju, su, Uu], this.handOverShaderPack(), !0)
        }, this.frame = uu => {
          this.frameId = null;
          const Eu = this.host;
          if (null !== Eu && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped) try {
            this.drawFrame(Eu, uu)
          } catch (ju) {
            if (!this.stopIfTrapped(ju) && (this.stop(), (0, eu.x)(ju))) return void this.deps.onRenderFailed("frames_refused", ju);
            console.warn(`${Su} the previews stopped: their frame threw`, ju)
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
        var uu, Eu;
        return null !== (uu = null === (Eu = this.host) || void 0 === Eu ? void 0 : Eu.attached()) && void 0 !== uu && uu
      }
      get open() {
        return this.previews.size
      }
      get frameCostMs() {
        return 0 === this.costs.length ? 0 : this.costs.reduce(((uu, Eu) => uu + Eu), 0) / this.costs.length
      }
      async bindSession(uu, Eu, ju) {
        const su = this.binding,
          Uu = this.sessionEnds;
        try {
          const Zu = this.hostOf(uu);
          if (!Zu.aXu()) {
            const Eu = (0, Vu.g)().sampleCount,
              Xu = await ju(Eu);
            if (this.sessionEnds !== Uu) return this.keepRendererOfEndedSession(uu, Zu, Xu, Eu, su), Eu;
            if (!Zu.CXu(Xu)) throw new Error("the page has a renderer already");
            (0, ku.w)(performance.now()), this.samples = Eu, (0, ru.h)((0, eu.q)(uu))
          }
          if (!Zu.attach(Eu)) throw new Error("the page's renderer is lent to another session");
          return this.samples
        } finally {
          this.binding === su && this.endBinding()
        }
      }
      keepRendererOfEndedSession(uu, Eu, ju, su, Uu) {
        if (!this.lastEndReturned || null !== this.binding && this.binding !== Uu) try {
          ju.free()
        } catch (Zu) {
          console.warn(`${Su} an ended session's renderer didn't free`, Zu)
        } else Eu.CXu(ju) && ((0, ku.w)(performance.now()), this.samples = su, (0, ru.h)(this.registryOf(uu)))
      }
      async beginSession() {
        var uu;
        let Eu = () => {};
        const ju = new Promise((uu => {
          Eu = uu
        }));
        this.binding = {
          done: ju,
          release: Eu
        }, await (null === (uu = this.opening) || void 0 === uu ? void 0 : uu.catch((() => null)));
        const su = this.pageCanvas;
        return this.pageCanvas = null, su
      }
      endSession(uu) {
        var Eu, ju;
        if (this.sessionEnds++, this.lastEndReturned = uu, this.endBinding(), uu) {
          try {
            var su;
            null === (su = this.host) || void 0 === su || su.detach()
          } catch (Uu) {
            return void console.warn(`${Su} the session's core kept the page's renderer`, Uu)
          }!0 === (null === (Eu = this.host) || void 0 === Eu ? void 0 : Eu.attached()) && console.warn(`${Su} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (ju = this.host) || void 0 === ju ? void 0 : ju.aXu()) && (0, ru.h)(this.registryOf(this.module))
        }
      }
      endBinding() {
        var uu;
        null === (uu = this.binding) || void 0 === uu || uu.release(), this.binding = null
      }
      async openPreview(uu, Eu, ju, su) {
        const Uu = await this.renderingHost(),
          Zu = this.module;
        if (null === Uu || null === Zu) throw new Error("this page can't draw previews: it has no renderer build");
        if (this.animations ??= this.loadAnimations(Uu), this.deps.pack.wanted(), this.isStopped) throw new Error("the previews stopped");
        this.guarded((() => {
          this.deps.provideBuiltInAnimationPack(Zu)
        }));
        const Xu = this.nextId++,
          lu = this.deps.createCanvas(),
          [qu, fu] = zu(Eu, ju, this.deps.dpr(), su);
        lu.width = qu, lu.height = fu;
        if (!this.guarded((() => (Zu.MZu(Xu, lu), Uu.open(Xu, qu, fu, uu))))) throw this.hostCall(void 0, (() => {
          Zu.eZu(Xu)
        })), new Error("the page's renderer is lent to a session that is running");
        this.restartModelsIfFailed();
        const Cu = new sE(this, Uu, Xu, lu, [qu, fu], this.deps);
        return this.previews.set(Xu, Cu), this.startFrames(), Cu
      }
      prefetch() {
        if (this.prefetched || this.isStopped || (0, ku.e)() || null !== (0, ku.H)()) return;
        this.prefetched = !0;
        (null === this.module ? this.loadModule() : Promise.resolve(this.module)).then((uu => {
          null === uu || this.isStopped || (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles())
        }), (() => {}))
      }
      modelFile(uu) {
        return this.prefetchedOr(uu, this.deps.fetchModel)
      }
      imageFile(uu) {
        return this.prefetchedOr(uu, su.K)
      }
      prefetchedOr(uu, Eu) {
        const ju = this.prefetchedFiles.get(uu);
        return void 0 === ju ? Eu(uu) : ju.catch((() => Eu(uu)))
      }
      async prefetchPlayerFiles() {
        const uu = this.deps.playerFile().then((uu => this.deps.files.url(uu))),
          Eu = await Promise.all([uu, this.deps.images.lifeformAtlasUrl(Pu.d)]).catch((() => null));
        if (null === Eu) return;
        const [ju, su] = Eu, Uu = (uu, Eu) => {
          if (null === uu) return;
          const ju = Eu(uu);
          this.prefetchedFiles.set(uu, ju), ju.catch((() => {
            this.prefetchedFiles.delete(uu)
          }))
        };
        Uu(ju, (uu => this.modelFile(uu))), Uu(su, (uu => this.imageFile(uu)))
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
      buildModel(uu, Eu) {
        return this.startModels(), this.models.then((ju => ju(uu, Eu))).then((uu => this.unavailable ? new Promise((() => {})) : uu))
      }
      restartModelsIfFailed() {
        this.unavailable && !this.modelsRestarted && 0 === this.previews.size && (this.modelsRestarted = !0, this.models = null, this.unavailable = !1, this.startModels())
      }
      modelsFailed(uu) {
        this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${Su} the model workers didn't start: models won't draw in the previews`, uu))
      }
      called(uu) {
        return 0 !== uu && this.logError(uu, 0), uu
      }
      closePreview(uu) {
        this.previews.delete(uu.id), null !== this.module && uu.dispose(this.module), 0 === this.previews.size && null !== this.frameId && (this.deps.cancelFrame(this.frameId), this.frameId = null)
      }
      hostOf(uu) {
        if (null !== this.module && this.module !== uu) throw new Error("a second renderer module on one page");
        return this.module = uu, null === this.host && (this.host = this.guarded((() => new uu.gZu)), this.tellInGame(), this.handOverShaderPack()), this.host
      }
      tellInGame() {
        const {
          host: uu
        } = this;
        null !== uu && this.outsideCall("the game's start or end", (() => {
          uu.vXu(this.deps.game.inGame())
        }))
      }
      handOverShaderPack() {
        const {
          host: uu,
          shaderPackArgs: Eu
        } = this;
        null !== uu && null !== Eu && this.outsideCall("the shader pack's hand-over", (() => {
          uu.gsu(...Eu) || console.warn(`${Su} the host refused the shader pack: previews draw without it at home`)
        }))
      }
      outsideCall(uu, Eu) {
        try {
          this.hostCall(void 0, Eu)
        } catch (ju) {
          this.stop(), console.warn(`${Su} the previews stopped: ${uu} threw`, ju)
        }
      }
      async loadAnimations(uu) {
        const Eu = Xu(null),
          ju = this.module;
        try {
          Eu.wasm = null === ju ? Eu.wasm : this.hostCall(Eu.wasm, (() => ju.hb()))
        } catch {}
        let su, Uu;
        try {
          su = await this.fetchAnimationTable()
        } catch (Zu) {
          return void this.deps.onAnimationsFailed({
            stage: "fetch",
            error: Zu
          }, Eu)
        }
        if (!this.settleIfTrapped()) {
          try {
            Uu = uu.oXu(su)
          } catch (Zu) {
            if (this.stopIfTrapped(Zu)) return;
            return void this.deps.onAnimationsFailed({
              stage: "decode",
              error: Zu
            }, Eu)
          }
          Uu || this.deps.onAnimationsFailed({
            stage: "decode",
            error: null
          }, Eu)
        }
      }
      async renderingHost() {
        if (null !== this.binding && await this.binding.done, this.settleIfTrapped()) return null;
        const uu = this.host;
        return null !== uu && this.guarded((() => uu.aXu())) ? uu : (this.opening ??= this.openAtHome().finally((() => {
          this.opening = null
        })), this.opening)
      }
      async openAtHome() {
        var uu;
        const Eu = null !== (uu = this.module) && void 0 !== uu ? uu : await this.loadModule();
        if (null === Eu) return null;
        const ju = this.hostOf(Eu),
          su = () => this.guarded((() => ju.aXu()));
        if (su()) return ju;
        if (null !== (0, ku.H)() || (0, ku.e)()) return null;
        const Uu = this.deps.createCanvas();
        Uu.width = 1, Uu.height = 1;
        const Zu = await this.deps.openExtras();
        if (this.settleIfTrapped()) return null;
        const Xu = (0, Vu.g)().sampleCount;
        let lu;
        try {
          lu = await (0, eu.B)(Eu, "previewRenderer", Uu, Xu, Qu.c, Zu)
        } catch (qu) {
          throw qu instanceof au.d ? this.stopForTrap(qu) : (0, eu.A)(qu) && await this.deps.onRenderFailed("start_failed", qu), qu
        }
        return this.guarded((() => ju.CXu(lu))) ? ((0, ku.w)(performance.now()), this.samples = Xu, this.pageCanvas = Uu, (0, ru.h)(this.registryOf(Eu)), ju) : su() ? ju : null
      }
      startFrames() {
        null !== this.frameId || this.isStopped || (this.frameId = this.deps.requestFrame(this.frame))
      }
      drawFrame(uu, Eu) {
        for (const Xu of this.previews.values()) Xu.feed();
        if (this.stopped) return;
        const ju = this.deps.now(),
          su = uu.frame(Eu);
        this.costs.push(this.deps.now() - ju), this.costs.length > 120 && this.costs.shift();
        const Uu = 0 !== (256 & su),
          Zu = 255 & su;
        for (const Xu of this.previews.values()) {
          if (this.stopped) return;
          Xu.collect(Uu)
        }
        if (!this.stopped) {
          if (0 !== (512 & su) && this.deps.onDrew(), Uu) {
            const Eu = uu.QXu();
            for (let uu = 0; uu + 1 < Eu.length; uu += 2) Eu[uu] === Mu.D.RenderDeviceLost && this.deps.onDeviceLost(), this.logError(Eu[uu], Eu[uu + 1])
          }
          if (Zu !== tu) {
            if (Zu === xu) return this.stop(), void this.deps.onFatal(uu.pXu(), uu.wXu());
            if (Zu === Tu) return this.stop(), void console.warn(`${Su} the previews stopped: the page's renderer went with its session`);
            (0, hu.c)(Eu), this.startFrames()
          } else {
            const Eu = uu.JXu();
            this.stop();
            const ju = Eu[2] === Mu.Zc.PIPELINE_FAILED ? "pipeline_failed" : "lost";
            this.deps.onRenderFailed(ju, void 0, Eu[1], Eu[2] === Mu.Zc.RESTORE_LOST)
          }
        }
      }
      get isStopped() {
        return this.stopped || this.isTrapped
      }
      get isTrapped() {
        return null !== this.module && ((0, au.k)(this.module) || "failed" === (0, Ou.C)())
      }
      hostCall(uu, Eu) {
        if (this.settleIfTrapped()) return uu;
        try {
          return Eu()
        } catch (ju) {
          if (this.stopIfTrapped(ju)) return uu;
          throw ju
        }
      }
      guarded(uu) {
        if (this.settleIfTrapped()) throw new Error("the previews stopped: their module trapped");
        try {
          return uu()
        } catch (Eu) {
          throw this.stopIfTrapped(Eu), Eu
        }
      }
      registryOf(uu) {
        return {
          ssu: (Eu, ju) => {
            this.hostCall(void 0, (() => {
              uu.ssu(Eu, ju)
            }))
          },
          Usu: Eu => {
            this.hostCall(void 0, (() => {
              uu.Usu(Eu)
            }))
          }
        }
      }
      settleIfTrapped() {
        return !!this.isTrapped && (this.stopped || (this.stop(), (0, ru.h)(null)), !0)
      }
      stopIfTrapped(uu) {
        return !(null === this.module || !(0, au.l)(this.module, uu)) && (this.stopForTrap(uu), !0)
      }
      stopForTrap(uu) {
        this.stop(), (0, ru.h)(null), (0, Wu.f)("previews", uu)
      }
      stop() {
        this.stopped = !0;
        for (const uu of this.previews.values()) uu.abandon()
      }
      logError(uu, Eu) {
        const ju = `${uu}:${Eu}`;
        this.loggedErrors.has(ju) || (this.loggedErrors.add(ju), console.warn(`${Su} error ${uu} (detail ${Eu})`))
      }
    }
    let ZE = null;

    function XE() {
      return ZE ??= new UE(function() {
        const uu = (0, Ju.i)(Yu.clientSideServerUrls.staticUrl, {
          packUrl: uu => {
            var Eu, ju;
            return null !== (Eu = null === (ju = Pu.g.current) || void 0 === ju ? void 0 : ju.modelUrl(uu)) && void 0 !== Eu ? Eu : null
          }
        });
        return {
          loadModule: jE,
          startModels: async uu => {
            const {
              pageModelPool: Eu
            } = await ju.e(43).then((() => ju(51314))), {
              pool: su
            } = Eu(uu);
            return (uu, Eu) => su.build(uu, Eu)
          },
          fetchAnimations: async () => lu(await (0, su.K)(Ru())),
          playerFile: async () => (await (0, Ju.g)()).PLAYER_FILE,
          onAnimationsFailed: (uu, Eu) => {
            qu("previewAnimations", Ru(), uu, Eu)
          },
          provideBuiltInAnimationPack: uu => {
            cu().provide(uu)
          },
          openExtras: ku.B,
          files: uu,
          images: (0, Pu.m)((0, pu.m)(uu.url), (() => Pu.g.current)),
          pack: Pu.g,
          game: ou.e,
          fetchModel: uu => (0, Ju.e)(uu),
          createCanvas: () => document.createElement("canvas"),
          dpr: () => window.devicePixelRatio,
          now: () => performance.now(),
          requestFrame: uu => requestAnimationFrame(uu),
          cancelFrame: uu => {
            cancelAnimationFrame(uu)
          },
          onRenderFailed: uE,
          onFatal: (uu, Eu) => {
            console.error(`${Su} the previews stopped: renderer error ${uu} (detail ${Eu})`)
          },
          onDeviceLost: () => {
            (0, ku.D)() === Ku.b.webgpu && ((0, Gu.d)((0, Ou.S)() ? (0, eu.Z)((0, Ou.F)()) : null), Du.B.lost())
          },
          onDrew: () => {
            Du.B.drew()
          }
        }
      }()), ZE
    }
    var lE = ju(636),
      qE = ju(38982),
      fE = ju(3475);
    const CE = {
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
    const bE = "[bloxd-previews]",
      cE = new Uint32Array(5);

    function NE(uu) {
      return lE.n.indexOf(uu)
    }
    const OE = new WeakSet;

    function YE(uu) {
      const Eu = (0, qE.f)(uu),
        ju = null === Eu ? -1 : hE(Eu);
      return -1 !== ju ? ju : (OE.has(uu) || (OE.add(uu), console.warn(`${bE} an animation the previews' table lacks: the mob idles instead`)), -1)
    }

    function hE(uu) {
      var Eu;
      return null !== (Eu = CE[uu]) && void 0 !== Eu ? Eu : -1
    }

    function DE(uu, Eu) {
      const {
        canvas: ju
      } = Eu;
      ju.style.width = "100%", ju.style.height = "100%", ju.style.display = "block", uu.appendChild(ju)
    }

    function gE(uu) {
      const Eu = uu.getBoundingClientRect();
      return [Eu.width, Eu.height]
    }
    class ME {
      constructor(uu, Eu) {
        this.preview = uu, this.showView = Eu
      }
      show(uu) {
        this.showView(this.preview, uu)
      }
      resize(uu, Eu) {
        this.preview.resize(uu, Eu)
      }
      close() {
        this.preview.close()
      }
    }
    class eE {
      constructor(uu) {
        this.preview = uu, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.detachControls = void 0, this.detachControls = function(uu) {
          const {
            canvas: Eu
          } = uu;
          let ju = null;
          const su = uu => {
              var su;
              ju = {
                pointer: uu.pointerId,
                x: uu.clientX,
                y: uu.clientY
              }, null === (su = Eu.setPointerCapture) || void 0 === su || su.call(Eu, uu.pointerId)
            },
            Uu = Eu => {
              var su;
              const Uu = uu.orbit;
              if ((null === (su = ju) || void 0 === su ? void 0 : su.pointer) !== Eu.pointerId || null === Uu) return;
              const Zu = Eu.clientX - ju.x,
                Xu = Eu.clientY - ju.y;
              ju = {
                ...ju,
                x: Eu.clientX,
                y: Eu.clientY
              }, uu.setOrbit({
                alpha: Uu.alpha - .01 * Zu,
                beta: Math.min(Math.PI - .01, Math.max(.01, Uu.beta - .01 * Xu)),
                radius: Uu.radius
              })
            },
            Zu = uu => {
              var Eu;
              (null === (Eu = ju) || void 0 === Eu ? void 0 : Eu.pointer) === uu.pointerId && (ju = null)
            },
            Xu = Eu => {
              const ju = uu.orbit;
              if (null === ju) return;
              Eu.preventDefault();
              const su = Eu.deltaY * (Eu.deltaMode === WheelEvent.DOM_DELTA_LINE ? 40 : Eu.deltaMode === WheelEvent.DOM_DELTA_PAGE ? 800 : 1),
                Uu = Math.min(100, Math.max(5, ju.radius + .08 * su));
              uu.setOrbit({
                ...ju,
                radius: Uu
              })
            };
          return Eu.style.touchAction = "none", Eu.addEventListener("pointerdown", su), Eu.addEventListener("pointermove", Uu), Eu.addEventListener("pointerup", Zu), Eu.addEventListener("pointercancel", Zu), Eu.addEventListener("wheel", Xu, {
            passive: !1
          }), () => {
            Eu.removeEventListener("pointerdown", su), Eu.removeEventListener("pointermove", Uu), Eu.removeEventListener("pointerup", Zu), Eu.removeEventListener("pointercancel", Zu), Eu.removeEventListener("wheel", Xu)
          }
        }(uu), this.dev = {
          canvas: () => uu.canvas,
          isolateHead: () => {
            console.warn(`${bE} isolateHead: noa's character preview only`)
          }
        }, this.apply(), this.ready = uu.untilSettled().then((() => {
          if (uu.isStopped) throw new Error(`${bE} the previews stopped before the character drew`);
          this.built = !0
        }))
      }
      isReady() {
        return this.built && !this.preview.isClosed
      }
      setCosmetic(uu, Eu) {
        this.cosmetics[uu] = Eu, this.apply()
      }
      playEmote(uu) {
        null === uu || uu !== this.emote ? (this.emote = uu, this.apply()) : this.preview.replay()
      }
      untilDrawn(uu) {
        return this.preview.untilSettled()
      }
      setOrbit(uu) {
        let {
          yaw: Eu,
          pitch: ju,
          radius: su
        } = uu;
        const Uu = this.preview.orbit;
        null !== Uu && this.preview.setOrbit({
          alpha: Eu,
          beta: ju,
          radius: null !== su && void 0 !== su ? su : Uu.radius
        })
      }
      resetCamera() {}
      resize(uu, Eu) {
        this.preview.resize(uu, Eu)
      }
      close() {
        this.detachControls(), this.preview.close()
      }
      apply() {
        var uu;
        this.preview.setPlayer(JSON.stringify(this.cosmetics), cE, null === (uu = this.emote) ? -1 : hE(uu))
      }
    }

    function GE(uu, Eu) {
      let {
        mobType: ju,
        variation: su,
        animation: Uu
      } = Eu;
      uu.setMob(NE(ju), null !== su && void 0 !== su ? su : "", 1, YE(Uu))
    }

    function pE(uu, Eu) {
      let {
        mobType: ju,
        variation: su,
        metaInfo: Uu,
        tamed: Zu
      } = Eu;
      uu.setPet(NE(ju), su, Uu, Zu)
    }
    const wE = {
      aimed: .533 / 1.15 * 1.1,
      ready: .16 / .85 * 1.1
    };
    class JE {
      constructor(uu, Eu, ju, su) {
        this.preview = null, this.closed = !1, this.figure = null, this.shown = !1, this.order = "", this.span = {
          left: 0,
          width: 0
        }, this.lineup = [0, 0], this.given = null, this.loaded = !1, uu(ju.width, su[1], su).then((uu => {
          if (this.closed) return void uu.close();
          const {
            style: ju
          } = uu.canvas;
          ju.position = "absolute", ju.top = "0", ju.visibility = "hidden", DE(Eu, uu), this.preview = uu, this.apply()
        })).catch((uu => {
          console.error(`${bE} couldn't open a lineup figure`, uu)
        }))
      }
      update(uu, Eu, ju, su, Uu) {
        this.figure = uu, this.shown = Eu, this.order = ju, this.span = su, this.lineup = Uu, this.apply()
      }
      close() {
        var uu;
        this.closed = !0, null === (uu = this.preview) || void 0 === uu || uu.close(), this.preview = null
      }
      apply() {
        const {
          preview: uu,
          figure: Eu,
          lineup: ju
        } = this;
        if (null === uu || null === Eu) return;
        if (this.given !== Eu) {
          var su;
          this.given = Eu, this.loaded = !1;
          const ju = null === Eu.nG ? 0 : null !== (su = (0, fE.b)(Eu.nG)) && void 0 !== su ? su : 0;
          uu.setFigure(function(uu) {
            return JSON.stringify(Object.fromEntries(uu.cosmetics))
          }(Eu), ju, YE(Eu.animation), Eu.size), uu.untilSettled().then((() => {
            this.given === Eu && (this.loaded = !0, this.apply())
          }))
        }
        const {
          left: Uu,
          width: Zu
        } = this.span;
        uu.resize(Zu, ju[1], ju);
        const {
          style: Xu
        } = uu.canvas;
        Xu.left = `${Uu}px`, Xu.width = `${Zu}px`, Xu.zIndex = this.order, Xu.visibility = this.shown && this.loaded ? "visible" : "hidden"
      }
    }
    class dE {
      constructor(uu, Eu) {
        this.open = Eu, this.layer = void 0, this.figures = [], this.view = {
          figures: [],
          shown: []
        }, this.size = void 0, this.size = gE(uu), this.layer = document.createElement("div");
        const {
          style: ju
        } = this.layer;
        ju.position = "relative", ju.isolation = "isolate", ju.overflow = "hidden", ju.width = "100%", ju.height = "100%", ju.pointerEvents = "none", uu.appendChild(this.layer)
      }
      show(uu) {
        this.view = uu, this.place()
      }
      resize(uu, Eu) {
        this.size = [uu, Eu], this.place()
      }
      close() {
        for (const uu of this.figures) uu.close();
        this.figures = [], this.layer.remove()
      }
      place() {
        const {
          figures: uu,
          shown: Eu
        } = this.view;
        for (const su of this.figures.splice(uu.length)) su.close();
        const {
          size: ju
        } = this;
        uu.forEach(((su, Uu) => {
          var Zu;
          const Xu = function(uu, Eu, ju, su) {
            let [Uu, Zu] = su;
            const Xu = (uu + .5) * Uu / Eu,
              lu = Math.min(Math.max(Uu / Eu, 2 * ju * Zu), 2 * Math.max(Xu, Uu - Xu));
            return {
              left: Xu - lu / 2,
              width: lu
            }
          }(Uu, uu.length, function(uu) {
            let {
              animation: Eu,
              size: ju
            } = uu;
            const {
              aimed: su,
              ready: Uu
            } = wE;
            return (YE(Eu) === CE.gunAimed ? su : Uu) * ju
          }(su), ju);
          this.figures[Uu] ??= new JE(this.open, this.layer, Xu, ju), this.figures[Uu].update(su, null !== (Zu = Eu[Uu]) && void 0 !== Zu && Zu, function(uu, Eu) {
            return String(Math.round(1e3 * uu) + Eu)
          }(su.size, Uu), Xu, ju)
        }))
      }
    }
    const aE = {
      player: Bu,
      store: Lu
    };
    class PE {
      constructor(uu) {
        this.page = uu
      }
      async openMob(uu) {
        return new ME(await this.open(uu, Fu), GE)
      }
      async openPet(uu) {
        return new ME(await this.open(uu, Fu), pE)
      }
      openMobLineup(uu) {
        return new dE(uu, ((uu, Eu, ju) => this.page.openPreview(Fu, uu, Eu, ju)))
      }
      async openCharacter(uu, Eu) {
        return new eE(await this.open(uu, aE[Eu]))
      }
      async open(uu, Eu) {
        const [ju, su] = gE(uu), Uu = await this.page.openPreview(Eu, ju, su);
        return DE(uu, Uu), Uu
      }
    }
  },
  37139: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => su,
      f: () => Uu,
      g: () => cu,
      j: () => hu,
      k: () => Cu,
      l: () => gu,
      m: () => qu,
      n: () => fu,
      p: () => Nu,
      r: () => Ou,
      t: () => Yu,
      u: () => Du
    });
    const su = [{
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

    function Uu(uu, Eu) {
      const {
        numLines: ju,
        charsPerLine: Uu
      } = su[Eu];
      return Mu(uu, ju, Uu, !1)
    }
    const Zu = 7 / 8,
      Xu = .25,
      lu = 8;

    function qu(uu, Eu) {
      return {
        width: Math.min(uu, lu) - 2 * Xu,
        height: Math.min(Eu, lu) - 2 * Xu
      }
    }

    function fu(uu, Eu, ju) {
      const Uu = qu(uu, Eu),
        {
          numLines: Xu,
          charsPerLine: lu
        } = su[ju];
      return {
        numLines: Math.max(1, Math.floor(Xu / Zu * Uu.height)),
        charsPerLine: Math.max(1, Math.floor(lu * Uu.width))
      }
    }

    function Cu(uu, Eu, ju, su) {
      const {
        numLines: Uu,
        charsPerLine: Zu
      } = fu(ju, su, Eu);
      return Mu(uu, Uu, Zu, !1)
    }
    const bu = 32e3;

    function cu(uu) {
      return uu.slice(0, bu)
    }
    const Nu = 512e3,
      Ou = 64,
      Yu = Nu;

    function hu(uu, Eu) {
      const ju = Math.max(0, Yu - Eu),
        su = Math.min(Nu, ju);
      return uu.slice(0, su)
    }
    const Du = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      yX: {
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

    function gu(uu, Eu) {
      const {
        numLines: ju,
        charsPerLine: su
      } = Du[Eu];
      return Mu(uu, ju, su, !1)
    }

    function Mu(uu, Eu, ju, su, Uu) {
      (Uu || su) && (uu = uu.slice(0, null !== Uu && void 0 !== Uu ? Uu : Eu * ju));
      const Zu = uu.split("\n");
      if (Zu.length > Eu && Zu.splice(Eu, Zu.length - Eu), !su)
        for (let Xu = 0; Xu < Zu.length; Xu++) {
          const uu = Zu[Xu];
          uu.length > ju && (Zu[Xu] = uu.substring(0, ju), Zu.length < Eu && Zu.splice(Xu + 1, 0, uu.substring(ju)))
        }
      return Zu.join("\n")
    }
  },
  51236: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/builtInAnimations.anim.38e056f49512e10b7206.gz"
  },
  51244: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/previewAnimations.dat.24d2343c38c8f9b3fb85.gz"
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);