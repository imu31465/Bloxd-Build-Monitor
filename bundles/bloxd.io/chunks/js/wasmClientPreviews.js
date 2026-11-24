export const id = 60;
export const ids = [60];
export const modules = {
  38856: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => op,
      c: () => Ip
    });
    const Op = new WeakMap;

    function op(pp, ip) {
      return Op.set(pp, ip), pp
    }

    function Ip(pp) {
      var ip;
      return null !== (ip = Op.get(pp)) && void 0 !== ip ? ip : null
    }
  },
  38883: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => xp
    });
    var Op = cp(1234);

    function op(pp) {
      const ip = /(\d*\.?\d+)px/.exec(pp);
      return ip ? Number(ip[1]) : null
    }

    function Ip(pp) {
      return pp.split(/[\s,]+/).pop()
    }
    let Sp = !1;
    const xp = {
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
      drawText: function(pp, ip, Op, xp, Lp, Yp) {
        if (Lp <= 0 || Yp <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: Dp,
          fontVariant: Ap,
          fontWeight: Pp,
          fontSize: Wp,
          font: yp
        } = this, Up = [Dp, Ap, Pp, `${Wp}px`, yp].filter(Boolean).join(" "), wp = [
          [Pp, `${Wp}px`, Ip(yp)].filter(Boolean).join(" "), `${Wp}px sans-serif`
        ], vp = pp.font, tp = function(pp, ip, cp) {
          for (const Op of ip) {
            pp.font = Op;
            const ip = op(pp.font),
              Sp = Ip(Op);
            if (null !== ip && Math.abs(ip - cp) <= .5 && pp.font.toLowerCase().includes(Sp.toLowerCase())) return Op
          }
          return null
        }(pp, [Up, ...wp], Wp);
        tp !== Up && function(pp, ip, Op) {
          Sp || (Sp = !0, Promise.resolve().then((() => cp(1080))).then((cp => {
            let {
              NU: op
            } = cp;
            op(new Error("A canvas didn't take canvasTxt's font"), {
              font: pp,
              aW: ip,
              drawnWith: null !== Op && void 0 !== Op ? Op : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(Up, vp, tp);
        const Hp = op(pp.font);
        if (null === tp && null !== Hp && Hp > 0) {
          const cp = Wp / Hp;
          pp.save();
          try {
            return pp.scale(cp, cp), {
              height: this.drawLines(pp, ip, Op / cp, xp / cp, Lp / cp, Yp / cp, Hp).height * cp
            }
          } finally {
            pp.restore()
          }
        }
        return this.drawLines(pp, ip, Op, xp, Lp, Yp, Wp)
      },
      drawLines: function(pp, ip, cp, op, Ip, Sp, xp) {
        const Lp = cp + Ip,
          Yp = op + Sp;
        let Dp, Ap = op + Sp / 2 + xp / 2;
        "right" === this.align ? (Dp = Lp, pp.textAlign = "right") : "left" === this.align ? (Dp = cp, pp.textAlign = "left") : (Dp = cp + Ip / 2, pp.textAlign = "center");
        for (const Op of ip) {
          pp.measureText(Op).width >= Ip && (ip = ip.replace(Op, ""))
        }
        ip = (0, Op.P)(ip);
        const Pp = [],
          Wp = ip.split("\n"),
          yp = this.justify ? pp.measureText("\u200a").width : 0;
        Wp.forEach((ip => {
          let cp = pp.measureText(ip).width;
          if (cp <= Ip) Pp.push(ip);
          else {
            let Op = ip;
            const op = Ip;
            let Sp, xp, Lp;
            for (cp = pp.measureText(Op).width; cp > op;) {
              for (Sp = 0, xp = 0, Lp = ""; xp < op;) Sp++, Lp = Op.substr(0, Sp), xp = pp.measureText(Lp).width;
              Sp--, Lp = Lp.substr(0, Sp);
              const ip = Sp;
              if (" " !== Op.substr(Sp, 1)) {
                for (;
                  " " !== Op.substr(Sp, 1) && 0 !== Sp;) Sp--;
                0 === Sp && (Sp = ip), Lp = Op.substr(0, Sp)
              }
              Lp = this.justify ? this.justifyLine(pp, Lp, yp, "\u200a", Ip) : Lp, Op = Op.substr(Sp), cp = pp.measureText(Op).width, Pp.push(Lp)
            }
            cp > 0 && Pp.push(Op)
          }
        }));
        const Up = this.lineHeight ? this.lineHeight : this.getTextHeight(pp, ip),
          wp = Up * (Pp.length - 1),
          vp = wp / 2;
        let tp = op;
        "top" === this.vAlign ? Ap = op + xp : "bottom" === this.vAlign ? (Ap = Yp - wp, tp = Yp) : (tp = op + Sp / 2, Ap -= vp), Pp.forEach((ip => {
          ip = ip.trim(), pp.fillText(ip, Dp, Ap), Ap += Up
        })), this.debug && (pp.lineWidth = 3, pp.strokeStyle = "#00909e", pp.strokeRect(cp, op, Ip, Sp), pp.lineWidth = 2, pp.strokeStyle = "#f6d743", pp.beginPath(), pp.moveTo(Dp, op), pp.lineTo(Dp, Yp), pp.stroke(), pp.strokeStyle = "#ff6363", pp.beginPath(), pp.moveTo(cp, tp), pp.lineTo(Lp, tp), pp.stroke());
        return {
          height: wp + Up
        }
      },
      getTextHeight: function(pp, ip) {
        const cp = pp.textBaseline;
        pp.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: Op
        } = pp.measureText(ip);
        return pp.textBaseline = cp, Op
      },
      justifyLine: function(pp, ip, cp, Op, op) {
        const Ip = ip.trim(),
          Sp = pp.measureText(Ip).width,
          xp = Ip.split(/\s+/).length - 1,
          Lp = Math.floor((op - Sp) / cp);
        if (xp <= 0 || Lp <= 0) return Ip;
        const Yp = Math.floor(Lp / xp);
        let Dp = Lp - xp * Yp,
          Ap = [];
        for (let Pp = 0; Pp < Yp; Pp++) Ap.push(Op);
        Ap = Ap.join("");
        return Ip.replace(/\s+/g, (pp => {
          const ip = Dp > 0 ? Ap + Op : Ap;
          return Dp--, pp + ip
        }))
      }
    }
  },
  38890: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Up,
      f: () => yp,
      i: () => Pp,
      l: () => Dp,
      n: () => Ap
    });
    var Op = cp(4341),
      op = cp(337);
    const Ip = 1024,
      Sp = 1536,
      xp = 2 * Op.l + 1,
      Lp = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      Yp = 1.5;

    function Dp(pp, ip, cp) {
      if ("string" !== typeof pp) return ip;
      try {
        const cp = JSON.parse(pp);
        return cp && "object" === typeof cp ? cp : ip
      } catch (Op) {
        return void 0 !== cp && console.error(`Couldn't parse ${cp}`, Op), ip
      }
    }

    function Ap(pp) {
      return Dp(pp, null, "a leaderboard's rows")
    }

    function Pp(pp, ip) {
      var cp, Op;
      return null !== ip && void 0 !== ip ? ip : {
        status: null !== (cp = pp.status) && void 0 !== cp ? cp : "loading",
        entries: null !== (Op = pp.entries) && void 0 !== Op ? Op : []
      }
    }

    function Wp(pp, ip) {
      return "number" === typeof pp && Number.isFinite(pp) && pp > 0 ? pp : ip
    }

    function yp(pp, ip) {
      const cp = Wp(pp.size, 1);
      let Op = Wp(pp.width, Wp(2.5 * cp, 2.5)),
        op = Wp(pp.height, Wp(3.75 * cp, 3.75));
      Number.isFinite(Ip * op / Op) && Number.isFinite(Sp * Op / op) || (Op = 2.5, op = 3.75);
      const xp = op / Op,
        Lp = Math.max(1, Math.min(Ip, ip / xp));
      return {
        width: Op,
        height: op,
        layoutWidth: Math.max(Ip, Sp / xp),
        layoutHeight: Math.max(Sp, Ip * xp),
        pixelWidth: Math.round(Lp),
        pixelHeight: Math.round(Math.max(1, Math.min(ip, Lp * xp)))
      }
    }

    function Up(pp, ip, cp, Sp, Dp, Ap) {
      pp.setTransform(1, 0, 0, 1, 0, 0), pp.fillStyle = op.N.defaultNameTagBackground, pp.fillRect(0, 0, ip, cp), pp.scale(ip / Sp.layoutWidth, cp / Sp.layoutHeight), pp.translate((Sp.layoutWidth - Ip) / 2, 0),
        function(pp, ip, cp, Ip) {
          var Sp, Dp, Ap, Pp;
          const {
            top: Wp,
            around: yp,
            showPlayerText: Up,
            localPlayerDbId: tp
          } = cp, {
            whiteUiText: Hp,
            grayUiText: dp,
            yellowUiText: ep
          } = op.N;
          pp.textBaseline = "middle";
          const jp = function(ip, cp, Op, op, Ip, Sp) {
              let xp = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              pp.font = `bold ${op}px 'Jetbrains Mono', monospace`, pp.fillStyle = Ip, pp.textAlign = xp;
              let Lp = ip.replace(/[\r\n\t]/g, " ");
              if (pp.measureText(Lp).width > Sp) {
                for (; Lp.length > 0 && pp.measureText(`${Lp}\u2026`).width > Sp;) Lp = Lp.slice(0, -1);
                Lp += "\u2026"
              }
              pp.fillText(Lp, cp, Op)
            },
            kp = ip => {
              pp.fillStyle = Hp, pp.globalAlpha = .15, pp.fillRect(24, ip, 976, 2), pp.globalAlpha = 1
            },
            mp = null === tp ? null : (0, op.gc)(tp),
            Rp = pp => null !== mp && pp.playerHash === mp,
            qp = wp(Wp.entries, Op.n),
            Mp = "ready" === Wp.status && qp.length > 0,
            Cp = null === yp ? [] : wp(yp.entries, xp),
            Ep = qp.some(Rp),
            Xp = null === yp ? null : function(pp) {
              const ip = pp;
              if (!ip || !Number.isFinite(ip.rank) || !Number.isFinite(ip.tied) || !Number.isFinite(ip.total)) return null;
              return ip
            }(yp.standing),
            lp = Cp.find(Rp),
            Qp = qp.find(Rp),
            Jp = null === Xp || void 0 === lp ? null : {
              value: lp.value,
              rank: Xp.rank
            },
            Bp = vp(qp, void 0 === Qp || Qp.value === (null === Jp || void 0 === Jp ? void 0 : Jp.value) ? Jp : null),
            Np = vp(Cp, Jp),
            Tp = (pp, ip) => {
              const cp = pp.findIndex(Rp);
              return cp >= 0 ? ip[cp] : null
            },
            fp = null !== (Sp = null !== (Dp = null === Xp || void 0 === Xp ? void 0 : Xp.rank) && void 0 !== Dp ? Dp : Tp(Cp, Np)) && void 0 !== Sp ? Sp : Tp(qp, Bp);
          pp.font = "bold 34px 'Jetbrains Mono', monospace";
          const bp = [...Mp ? Bp : [], ...Ep ? [] : Np],
            hp = Math.min(280, Math.max(0, ...bp.map((ip => pp.measureText(Lp.format(ip)).width)))),
            ap = hp <= 80,
            np = ap ? 80 : 32 + hp,
            Fp = ap ? 148 : np + 28,
            gp = 660 - Fp;
          jp(`TOP ${Op.n}  /  ALL TIME`, 24, 52, 28, dp, 976), jp(Up ? String(null !== (Ap = ip.title) && void 0 !== Ap ? Ap : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, Hp, 976), jp("RANK", 32, 174, 28, dp, Fp - 40), jp("PLAYER", Fp, 174, 28, dp, gp), jp(Up ? String(null !== (Pp = ip.scoreLabel) && void 0 !== Pp ? Pp : "Score").slice(0, 24) : "Score", 992, 174, 28, dp, 304, "right"), kp(202);
          const Gp = (Ip - 232) / (Op.n + Yp + xp),
            rp = 208 + Op.n * Gp,
            Zp = rp + Yp * Gp,
            zp = (ip, cp, Op, op) => {
              const Ip = Rp(ip);
              pp.fillStyle = Ip ? ep : Hp, pp.globalAlpha = Ip ? .15 : op ? .035 : 0, pp.fillRect(24, Op - Gp / 2 + 1, 976, Gp - 2), pp.globalAlpha = 1;
              const Sp = Ip ? ep : Hp;
              jp(Lp.format(cp), np, Op, 34, Sp, ap ? 80 : hp, ap ? "center" : "right"), jp(Up ? String(ip.name).slice(0, 64) : "Player", Fp, Op, 34, Sp, gp);
              const xp = Lp.format(ip.value);
              jp(pp.measureText(xp).width > 304 ? ip.value.toExponential(6) : xp, 992, Op, 34, Sp, 304, "right")
            };
          if (Mp)
            for (const [Op, op] of qp.entries()) zp(op, Bp[Op], 208 + (Op + .5) * Gp, Op % 2 === 0);
          else {
            const pp = "error" === Wp.status,
              ip = pp ? "Couldn't load leaderboard" : "ready" === Wp.status ? "No scores yet" : "Loading leaderboard\u2026",
              cp = pp ? "Trying again shortly" : "ready" === Wp.status ? "Be the first on the board!" : "Fetching the top players",
              Op = (208 + rp) / 2;
            jp(ip, 512, Op - 28, 40, pp ? op.N.redUiText : Hp, 960, "center"), jp(cp, 512, Op + 27, 30, dp, 960, "center")
          }
          const sp = rp + Yp * Gp / 2;
          if (null === fp) kp(sp);
          else {
            const ip = null === Xp ? 0 : Xp.tied - 1,
              cp = `YOUR RANK #${Lp.format(fp)}${null===Xp?"":` of ${Lp.format(Xp.total)}`}`;
            pp.font = "bold 36px 'Jetbrains Mono', monospace";
            const Op = Math.max(20, Math.min(36, Math.floor(34560 / pp.measureText(cp).width)));
            jp(cp, 512, sp - (ip > 0 ? 15 : 0), Op, ep, 960, "center"), ip > 0 && jp(`Tied with ${Lp.format(ip)} other${1===ip?"":"s"}`, 512, sp + 24, 24, dp, 960, "center")
          }
          if (null === yp) return;
          const Kp = Zp + xp * Gp / 2;
          if (Ep) jp(`You're in the top ${Op.n}!`, 512, Kp, 40, ep, 960, "center");
          else if (0 === Cp.length) jp("You're not on this board yet", 512, Kp, 34, dp, 960, "center");
          else
            for (const [Op, op] of Cp.entries()) zp(op, Np[Op], Zp + (Op + .5) * Gp, Op % 2 === 0)
        }(pp, Dp, Ap, Sp.layoutHeight)
    }

    function wp(pp, ip) {
      return Array.isArray(pp) ? pp.slice(0, ip).filter((pp => pp && Number.isFinite(pp.rank) && Number.isFinite(pp.value))) : []
    }

    function vp(pp, ip) {
      const cp = [];
      let Op = !1;
      return pp.forEach(((op, Ip) => {
        if (null !== ip && op.value === ip.value) return void cp.push(ip.rank);
        const Sp = Ip > 0 && op.value === pp[Ip - 1].value;
        Sp || (Op = 0 === Ip && 1 !== op.rank), cp.push(Sp && !Op ? cp[Ip - 1] : op.rank)
      })), cp
    }
  },
  39076: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => op,
      e: () => Ip
    });
    const Op = 32;

    function op(pp) {
      return Array.from(pp).length
    }

    function Ip(pp) {
      const ip = [""];
      let cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        op = "";
      const Ip = () => {
        ip.push(""), cp = 0, op = ""
      };
      for (const Sp of pp.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(Sp)) Ip();
        else if (/^\s+$/.test(Sp)) op += Sp;
      else if (Sp.length > 0) {
        const pp = Array.from(Sp);
        cp > 0 && cp + op.length + pp.length > Op && Ip(), ip[ip.length - 1] += op, cp += op.length, op = "";
        for (const op of pp) cp >= Op && Ip(), ip[ip.length - 1] += op, cp++
      }
      return ip[ip.length - 1] += op, ip
    }
  },
  51184: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      WasmPreviewHost: () => Ci,
      pageBuiltInAnimationPack: () => Pp,
      pagePreviews: () => Li,
      previewModule: () => Kp
    });
    var Op = cp(2970),
      op = cp(643);
    const Ip = "[bloxd-wasm-client]";

    function Sp(pp) {
      const ip = {
        wasm: "unknown",
        client: String(op.c)
      };
      try {
        var cp;
        ip.wasm = null !== (cp = null === pp || void 0 === pp ? void 0 : pp.JA()) && void 0 !== cp ? cp : ip.wasm
      } catch {}
      return ip
    }
    async function xp(pp) {
      if (pp.length < 2 || 31 !== pp[0] || 139 !== pp[1]) return pp;
      if ("undefined" === typeof DecompressionStream) {
        const {
          ungzip: ip
        } = await Promise.resolve().then((() => cp(2918)));
        return ip(pp)
      }
      const ip = new Blob([pp]).stream().pipeThrough(new DecompressionStream("gzip"));
      return new Uint8Array(await new Response(ip).arrayBuffer())
    }

    function Lp(pp, ip, Op, op) {
      Promise.resolve().then((() => cp(40945))).then((cp => {
        let {
          reportDataLoadFailure: Ip
        } = cp;
        Ip(pp, ip, Op, op)
      }), (ip => {
        console.warn(`${Ip} ${pp} didn't load, and the report couldn't be sent`, Op.error, ip)
      }))
    }
    const Yp = [3e4, 12e4, 3e5];
    class Dp {
      constructor(pp) {
        this.deps = pp, this.loading = null, this.reported = !1, this.retries = 0, this.resolveSet = () => {}, this.set = new Promise((pp => {
          this.resolveSet = pp
        }))
      }
      provide(pp) {
        return this.loading ??= this.load(pp), this.loading
      }
      whenSet() {
        return this.set
      }
      async load(pp) {
        const ip = Sp(pp),
          cp = await async function(pp, ip) {
            let cp;
            try {
              cp = await pp()
            } catch (Op) {
              return {
                stage: "fetch",
                error: Op
              }
            }
            try {
              return ip(cp) ? null : {
                stage: "decode",
                error: null
              }
            } catch (Op) {
              return {
                stage: "decode",
                error: Op
              }
            }
          }((() => this.deps.fetch()), (ip => {
            const cp = pp.iSp(ip);
            return cp && this.resolveSet(ip), cp
          }));
        if (null !== cp) {
          if ("fetch" === cp.stage) {
            this.loading = null;
            const ip = Yp[this.retries++];
            void 0 !== ip && this.deps.later((() => {
              this.provide(pp)
            }), ip)
          }
          this.reported || (this.reported = !0, this.deps.onFailed(cp, ip))
        }
      }
    }
    let Ap = null;

    function Pp() {
      return Ap ??= new Dp({
        fetch: async () => xp(await (0, Op.F)(Wp(), {
          priority: "low"
        })),
        onFailed: (pp, ip) => {
          Lp("builtInAnimations", Wp(), pp, ip)
        },
        later: (pp, ip) => {
          setTimeout(pp, ip)
        }
      }), Ap
    }

    function Wp() {
      return cp(51187)
    }
    var yp = cp(2963),
      Up = cp(1211),
      wp = cp(316),
      vp = cp(314),
      tp = cp(657),
      Hp = cp(4903),
      dp = cp(40911),
      ep = cp(40930),
      jp = cp(41133),
      kp = (cp(40976), cp(40988)),
      mp = cp(40997),
      Rp = cp(41001),
      qp = cp(40923),
      Mp = cp(41158),
      Cp = cp(41165),
      Ep = cp(40902),
      Xp = cp(41185),
      lp = cp(41038),
      Qp = cp(41025),
      Jp = cp(41087),
      Bp = cp(41147),
      Np = cp(42879),
      Tp = cp(36484),
      fp = cp(3801);
    const bp = "[bloxd-previews]",
      hp = 4e5,
      ap = 0,
      np = 1,
      Fp = 2,
      gp = 1,
      Gp = 2,
      rp = 3,
      Zp = 0,
      zp = 1,
      sp = 2;

    function Kp(pp) {
      const ip = pp,
        cp = (0, dp.Y)(pp),
        Op = (0, dp.o)(pp);
      return null !== cp && null !== Op && "function" === typeof ip.KIp && "function" === typeof ip.VIp && "function" === typeof ip.pSp ? ip : null
    }

    function Vp(pp, ip, cp) {
      let [Op, op] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [pp, ip], Ip = Math.min(Number.isFinite(cp) && cp > 0 ? cp : 1, 2);
      const Sp = Math.max(0, Op, pp) * Math.max(0, op, ip) * Ip * Ip;
      return Sp > hp && (Ip *= Math.sqrt(hp / Sp)), [Math.max(1, Math.floor(Math.max(0, pp) * Ip)), Math.max(1, Math.floor(Math.max(0, ip) * Ip))]
    }

    function ii() {
      return cp(51194)
    }
    async function ci(pp, ip, Op) {
      var op;
      let Ip = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      "lost" === pp && (0, Ep.u)();
      const xp = await (0, Ep.L)();
      if (null === xp || (0, dp.s)(xp) || (0, Ep.b)()) return;
      const Lp = "webgpu" === xp.backend;
      if (!Lp && "lost" !== pp) return;
      const Yp = Lp && (0, vp.m)(xp.adapter, null !== Op && void 0 !== Op ? Op : null, "lost" === pp, Ip),
        Dp = null !== (op = "lost" === pp ? (0, ep.o)((0, yp.X)() ? (0, dp.Y)((0, yp.H)()) : null) : void 0) && void 0 !== op ? op : ip,
        Ap = Lp ? (0, dp.gb)(pp, void 0, (0, ep.d)(Dp)) : null;
      if (null === Ap) {
        Lp || (0, tp.q)(), (0, Ep.l)();
        try {
          await async function(pp, ip, Op, op, Ip) {
            let {
              restoreLost: xp,
              adapterRemembered: Lp
            } = Ip;
            const Yp = (0, yp.X)(),
              {
                flushCrashReports: Dp,
                reportRenderReload: Ap
              } = await Promise.resolve().then((() => cp(40945)));
            Ap(pp.backend, op, Sp(Yp ? (0, yp.H)() : null), {
              from: "home",
              cause: ip,
              restoreLost: xp,
              adapterRemembered: Lp,
              ...Oi(pp, ip, Op)
            }), await Dp(lp.b)
          }(xp, pp, Dp, null !== Op && void 0 !== Op ? Op : "start_failed" === pp ? 0 : 1, {
            restoreLost: Ip,
            adapterRemembered: Yp
          })
        } catch (Wp) {
          console.warn(`${bp} ${xp.backend} failed at home (${pp}), and its report couldn't be sent`, Wp)
        }(0, lp.i)()
      } else {
        var Pp;
        const ip = Oi(xp, pp, Dp),
          Op = `WebGPU failed at home (${pp}${void 0===ip.error?"":`: ${ip.error instanceof Error?ip.error.message:(0,Tp.h)(ip.error)}`}) and ${Ap}`;
        console.warn(`${bp} ${Op}: the previews stop`, null !== (Pp = ip.error) && void 0 !== Pp ? Pp : ""), (0, Ep.m)(Op);
        try {
          const {
            countRenderLost: Op
          } = await Promise.resolve().then((() => cp(40945)));
          Op(pp, ip.error, ip.context)
        } catch (Up) {
          console.warn(`${bp} WebGPU failed at home (${pp}), and its count couldn't be sent`, Up)
        }
      }
    }

    function Oi(pp, ip, cp) {
      let {
        adapter: Op
      } = pp;
      return {
        error: cp,
        context: {
          adapter: Op,
          boundAtMs: "start_failed" === ip ? null : (0, Ep.J)(),
          indirectHangs: (0, Ep.x)(),
          restoresSkipped: (0, Ep.K)()
        }
      }
    }
    async function oi() {
      if (!(0, yp.X)()) {
        const pp = await (0, Ep.L)();
        if (null === pp || (0, dp.s)(pp)) return null;
        if (await (0, Xp.e)(await pp.load()), !(0, yp.X)()) return null
      }
      return Kp((0, yp.H)())
    }
    class Ii {
      constructor(pp, ip, cp, Op, op, Ip) {
        this.page = pp, this.host = ip, this.id = cp, this.canvas = Op, this.size = op, this.models = void 0, this.images = void 0, this.write = void 0, this.outcomes = [], this.closed = !1, this.quiet = 0, this.settled = [];
        const Sp = {
            ...Ip.images,
            glbUrl: pp => {
              var ip;
              return null !== (ip = this.models.drawnUrl(pp)) && void 0 !== ip ? ip : Ip.images.glbUrl(pp)
            }
          },
          xp = ip => pp.modelFile(ip);
        this.images = new jp.e(Sp, (pp => {
          console.warn(`${bp} image ${pp.key.kind}:${pp.key.index}:${pp.key.word} failed`, pp.error)
        }), {
          fetchFile: xp,
          fetchImage: ip => pp.imageFile(ip)
        }), pp.startModels(), this.models = new kp.f(Ip.files, ((ip, cp) => pp.buildModel(ip, cp)), (pp => {
          console.warn(`${bp} model file ${pp.file} (${pp.url}) failed`, pp.error)
        }), {
          fetchFile: xp,
          onWritten: (pp, ip) => {
            this.images.glbWritten(pp, ip)
          },
          onTaken: (pp, ip) => {
            this.images.glbTaken(pp, ip)
          }
        }), this.write = (pp, ip, cp) => {
          if (this.closed) return !0;
          if (pp === kp.b) {
            const pp = new DataView(cp.buffer, cp.byteOffset, Rp.d),
              Op = pp.getUint32(0, !0),
              op = pp.getUint32(Rp.g, !0),
              Ip = this.page.hostCall(sp, (() => this.host.Sxp(this.id, Op, ip, cp.subarray(Rp.d))));
            return this.outcomes.push([op, Ip]), !0
          }
          return pp === jp.c && (this.page.hostCall(void 0, (() => {
            this.host.Lxp(this.id, cp)
          })), !0)
        }
      }
      get isClosed() {
        return this.closed
      }
      get isStopped() {
        return this.page.isStopped
      }
      resize(pp, ip, cp) {
        if (this.closed) return;
        const [Op, op] = Vp(pp, ip, this.page.dpr(), cp);
        Op === this.size[0] && op === this.size[1] || (this.size = [Op, op], this.page.hostCall(void 0, (() => {
          this.host.resize(this.id, Op, op)
        })))
      }
      setMob(pp, ip, cp, Op) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.Wxp(this.id, pp, ip, cp, Op))))
      }
      setPet(pp, ip, cp, Op) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.Uxp(this.id, pp, ip, cp, Op))))
      }
      setPlayer(pp, ip, cp) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.Dxp(this.id, pp, ip, cp))))
      }
      setFigure(pp, ip, cp, Op) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.Axp(this.id, pp, ip, cp, Op))))
      }
      replay() {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.replay(this.id))))
      }
      get orbit() {
        if (this.closed) return null;
        const pp = this.page.hostCall(null, (() => this.host.orbit(this.id)));
        return null === pp || pp.length < 3 ? null : {
          alpha: pp[0],
          beta: pp[1],
          radius: pp[2]
        }
      }
      setOrbit(pp) {
        let {
          alpha: ip,
          beta: cp,
          radius: Op
        } = pp;
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.yxp(this.id, ip, cp, Op)
        }))
      }
      untilSettled() {
        return this.closed || this.page.isStopped ? Promise.resolve() : (this.quiet = 0, new Promise((pp => {
          this.settled.push(pp)
        })))
      }
      packChanged() {
        this.quiet = 0, this.models.refresh(), (0, Mp.g)(this.images)
      }
      feed() {
        this.models.drain(this.write);
        for (const [pp, ip] of this.outcomes) {
          const cp = ip === Zp ? [] : [ip === zp ? pp : (pp | kp.e) >>> 0];
          this.models.taken(pp, cp)
        }
        this.outcomes.length = 0, this.images.drain(this.write)
      }
      collect(pp) {
        let ip = !1;
        if (pp) {
          const pp = this.host.txp(this.id);
          for (const ip of pp) this.models.request(ip);
          const cp = this.host.vxp(this.id);
          cp.length > 0 && this.images.onEvent(cp), ip = pp.length > 0 || cp.length > 0
        }
        const cp = this.page.modelsUnavailable ? 0 : this.models.asking + this.models.unanswered,
          Op = ip || cp > 0 || this.images.waiting > 0 || this.images.inFlight > 0;
        this.quiet = Op ? 0 : this.quiet + 1, this.quiet >= 3 && this.resolveSettled()
      }
      close() {
        this.closed || (this.closed = !0, this.page.closePreview(this), this.resolveSettled())
      }
      abandon() {
        this.resolveSettled()
      }
      dispose(pp) {
        this.page.hostCall(void 0, (() => {
          const ip = this.host.close(this.id);
          ip.length > 0 && this.images.onEvent(ip), this.page.isTrapped || pp.pSp(this.id)
        })), this.images.dispose(), this.canvas.remove()
      }
      resolveSettled() {
        const pp = this.settled;
        this.settled = [];
        for (const ip of pp) ip()
      }
    }
    class Si {
      constructor(pp) {
        this.deps = pp, this.module = null, this.host = null, this.opening = null, this.pageCanvas = null, this.samples = 1, this.binding = null, this.sessionEnds = 0, this.lastEndReturned = !0, this.previews = new Map, this.nextId = 1, this.frameId = null, this.stopped = !1, this.loggedErrors = new Set, this.modelsListener = {
          onUnavailable: pp => {
            this.modelsFailed(pp)
          },
          onDecoderFailed: pp => {
            this.loggedErrors.has("modelDecoder") || (this.loggedErrors.add("modelDecoder"), console.warn(`${bp} the Draco decoder didn't load: models waiting on it won't draw`, pp))
          },
          onWorkerLost: pp => {
            this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${bp} a model worker was lost: ${pp}`))
          },
          onModuleRetry: () => {}
        }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.Dy = {
          setShaderPack: (pp, ip, cp, Op, op) => (this.shaderPackArgs = [pp, ip, cp, Op, op], this.handOverShaderPack(), !0)
        }, this.frame = pp => {
          this.frameId = null;
          const ip = this.host;
          if (null !== ip && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped) try {
            this.drawFrame(ip, pp)
          } catch (cp) {
            if (!this.stopIfTrapped(cp) && (this.stop(), (0, dp.w)(cp))) return void this.deps.onRenderFailed("frames_refused", cp);
            console.warn(`${bp} the previews stopped: their frame threw`, cp)
          }
        }, pp.pack.onChange((() => {
          this.packChanged()
        })), pp.game.onGameChange((() => {
          this.tellInGame()
        }))
      }
      packChanged() {
        if (!this.stopped)
          for (const pp of this.previews.values()) pp.packChanged()
      }
      dpr() {
        return this.deps.dpr()
      }
      get sessionBound() {
        var pp, ip;
        return null !== (pp = null === (ip = this.host) || void 0 === ip ? void 0 : ip.attached()) && void 0 !== pp && pp
      }
      get open() {
        return this.previews.size
      }
      get frameCostMs() {
        return 0 === this.costs.length ? 0 : this.costs.reduce(((pp, ip) => pp + ip), 0) / this.costs.length
      }
      async bindSession(pp, ip, cp) {
        const Op = this.binding,
          op = this.sessionEnds;
        try {
          const Ip = this.hostOf(pp);
          if (!Ip.xxp()) {
            const ip = (0, Jp.g)().sampleCount,
              Sp = await cp(ip);
            if (this.sessionEnds !== op) return this.keepRendererOfEndedSession(pp, Ip, Sp, ip, Op), ip;
            if (!Ip.FSp(Sp)) throw new Error("the page has a renderer already");
            (0, Ep.q)(performance.now()), this.samples = ip, (0, Bp.h)((0, dp.o)(pp))
          }
          if (!Ip.attach(ip)) throw new Error("the page's renderer is lent to another session");
          return this.samples
        } finally {
          this.binding === Op && this.endBinding()
        }
      }
      keepRendererOfEndedSession(pp, ip, cp, Op, op) {
        if (!this.lastEndReturned || null !== this.binding && this.binding !== op) try {
          cp.free()
        } catch (Ip) {
          console.warn(`${bp} an ended session's renderer didn't free`, Ip)
        } else ip.FSp(cp) && ((0, Ep.q)(performance.now()), this.samples = Op, (0, Bp.h)(this.registryOf(pp)))
      }
      async beginSession() {
        var pp;
        let ip = () => {};
        const cp = new Promise((pp => {
          ip = pp
        }));
        this.binding = {
          done: cp,
          release: ip
        }, await (null === (pp = this.opening) || void 0 === pp ? void 0 : pp.catch((() => null)));
        const Op = this.pageCanvas;
        return this.pageCanvas = null, Op
      }
      endSession(pp) {
        var ip, cp;
        if (this.sessionEnds++, this.lastEndReturned = pp, this.endBinding(), pp) {
          try {
            var Op;
            null === (Op = this.host) || void 0 === Op || Op.detach()
          } catch (op) {
            return void console.warn(`${bp} the session's core kept the page's renderer`, op)
          }!0 === (null === (ip = this.host) || void 0 === ip ? void 0 : ip.attached()) && console.warn(`${bp} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (cp = this.host) || void 0 === cp ? void 0 : cp.xxp()) && (0, Bp.h)(this.registryOf(this.module))
        }
      }
      endBinding() {
        var pp;
        null === (pp = this.binding) || void 0 === pp || pp.release(), this.binding = null
      }
      async openPreview(pp, ip, cp, Op) {
        const op = await this.renderingHost(),
          Ip = this.module;
        if (null === op || null === Ip) throw new Error("this page can't draw previews: it has no renderer build");
        if (this.animations ??= this.loadAnimations(op), this.deps.pack.wanted(), this.isStopped) throw new Error("the previews stopped");
        this.guarded((() => {
          this.deps.provideBuiltInAnimationPack(Ip)
        }));
        const Sp = this.nextId++,
          xp = this.deps.createCanvas(),
          [Lp, Yp] = Vp(ip, cp, this.deps.dpr(), Op);
        xp.width = Lp, xp.height = Yp;
        if (!this.guarded((() => (Ip.VIp(Sp, xp), op.open(Sp, Lp, Yp, pp))))) throw this.hostCall(void 0, (() => {
          Ip.pSp(Sp)
        })), new Error("the page's renderer is lent to a session that is running");
        this.restartModelsIfFailed();
        const Dp = new Ii(this, op, Sp, xp, [Lp, Yp], this.deps);
        return this.previews.set(Sp, Dp), this.startFrames(), Dp
      }
      prefetch() {
        if (this.prefetched || this.isStopped || (0, Ep.b)() || null !== (0, Ep.G)()) return;
        this.prefetched = !0;
        (null === this.module ? this.loadModule() : Promise.resolve(this.module)).then((pp => {
          null === pp || this.isStopped || (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles())
        }), (() => {}))
      }
      modelFile(pp) {
        return this.prefetchedOr(pp, this.deps.fetchModel)
      }
      imageFile(pp) {
        return this.prefetchedOr(pp, Op.F)
      }
      prefetchedOr(pp, ip) {
        const cp = this.prefetchedFiles.get(pp);
        return void 0 === cp ? ip(pp) : cp.catch((() => ip(pp)))
      }
      async prefetchPlayerFiles() {
        const pp = this.deps.playerFile().then((pp => this.deps.files.url(pp))),
          ip = await Promise.all([pp, this.deps.images.lifeformAtlasUrl(Mp.b)]).catch((() => null));
        if (null === ip) return;
        const [cp, Op] = ip, op = (pp, ip) => {
          if (null === pp) return;
          const cp = ip(pp);
          this.prefetchedFiles.set(pp, cp), cp.catch((() => {
            this.prefetchedFiles.delete(pp)
          }))
        };
        op(cp, (pp => this.modelFile(pp))), op(Op, (pp => this.imageFile(pp)))
      }
      loadModule() {
        return this.moduleLoad ??= this.deps.loadModule().then((pp => (null === pp && (this.moduleLoad = null), pp)), (pp => {
          throw this.moduleLoad = null, pp
        })), this.moduleLoad
      }
      fetchAnimationTable() {
        return this.animationTable ??= this.deps.fetchAnimations().catch((pp => {
          throw this.animationTable = null, pp
        })), this.animationTable
      }
      get modelsUnavailable() {
        return this.unavailable
      }
      startModels() {
        this.models ??= this.deps.startModels(this.modelsListener).catch((pp => (this.modelsFailed(pp), () => new Promise((() => {})))))
      }
      buildModel(pp, ip) {
        return this.startModels(), this.models.then((cp => cp(pp, ip))).then((pp => this.unavailable ? new Promise((() => {})) : pp))
      }
      restartModelsIfFailed() {
        this.unavailable && !this.modelsRestarted && 0 === this.previews.size && (this.modelsRestarted = !0, this.models = null, this.unavailable = !1, this.startModels())
      }
      modelsFailed(pp) {
        this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${bp} the model workers didn't start: models won't draw in the previews`, pp))
      }
      called(pp) {
        return 0 !== pp && this.logError(pp, 0), pp
      }
      closePreview(pp) {
        this.previews.delete(pp.id), null !== this.module && pp.dispose(this.module), 0 === this.previews.size && null !== this.frameId && (this.deps.cancelFrame(this.frameId), this.frameId = null)
      }
      hostOf(pp) {
        if (null !== this.module && this.module !== pp) throw new Error("a second renderer module on one page");
        return this.module = pp, null === this.host && (this.host = this.guarded((() => new pp.KIp)), this.tellInGame(), this.handOverShaderPack()), this.host
      }
      tellInGame() {
        const {
          host: pp
        } = this;
        null !== pp && this.outsideCall("the game's start or end", (() => {
          pp.Pxp(this.deps.game.inGame())
        }))
      }
      handOverShaderPack() {
        const {
          host: pp,
          shaderPackArgs: ip
        } = this;
        null !== pp && null !== ip && this.outsideCall("the shader pack's hand-over", (() => {
          pp.fOp(...ip) || console.warn(`${bp} the host refused the shader pack: previews draw without it at home`)
        }))
      }
      outsideCall(pp, ip) {
        try {
          this.hostCall(void 0, ip)
        } catch (cp) {
          this.stop(), console.warn(`${bp} the previews stopped: ${pp} threw`, cp)
        }
      }
      async loadAnimations(pp) {
        const ip = Sp(null),
          cp = this.module;
        try {
          ip.wasm = null === cp ? ip.wasm : this.hostCall(ip.wasm, (() => cp.JA()))
        } catch {}
        let Op, op;
        try {
          Op = await this.fetchAnimationTable()
        } catch (Ip) {
          return void this.deps.onAnimationsFailed({
            stage: "fetch",
            error: Ip
          }, ip)
        }
        if (!this.settleIfTrapped()) {
          try {
            op = pp.Yxp(Op)
          } catch (Ip) {
            if (this.stopIfTrapped(Ip)) return;
            return void this.deps.onAnimationsFailed({
              stage: "decode",
              error: Ip
            }, ip)
          }
          op || this.deps.onAnimationsFailed({
            stage: "decode",
            error: null
          }, ip)
        }
      }
      async renderingHost() {
        if (null !== this.binding && await this.binding.done, this.settleIfTrapped()) return null;
        const pp = this.host;
        return null !== pp && this.guarded((() => pp.xxp())) ? pp : (this.opening ??= this.openAtHome().finally((() => {
          this.opening = null
        })), this.opening)
      }
      async openAtHome() {
        var pp;
        const ip = null !== (pp = this.module) && void 0 !== pp ? pp : await this.loadModule();
        if (null === ip) return null;
        const cp = this.hostOf(ip),
          Op = () => this.guarded((() => cp.xxp()));
        if (Op()) return cp;
        if (null !== (0, Ep.G)() || (0, Ep.b)()) return null;
        const op = this.deps.createCanvas();
        op.width = 1, op.height = 1;
        const Ip = await this.deps.openExtras();
        if (this.settleIfTrapped()) return null;
        const Sp = (0, Jp.g)().sampleCount;
        let xp;
        try {
          xp = await (0, dp.A)(ip, "previewRenderer", op, Sp, Np.d, Ip)
        } catch (Lp) {
          throw Lp instanceof qp.b ? this.stopForTrap(Lp) : (0, dp.z)(Lp) && await this.deps.onRenderFailed("start_failed", Lp), Lp
        }
        return this.guarded((() => cp.FSp(xp))) ? ((0, Ep.q)(performance.now()), this.samples = Sp, this.pageCanvas = op, (0, Bp.h)(this.registryOf(ip)), cp) : Op() ? cp : null
      }
      startFrames() {
        null !== this.frameId || this.isStopped || (this.frameId = this.deps.requestFrame(this.frame))
      }
      drawFrame(pp, ip) {
        for (const Sp of this.previews.values()) Sp.feed();
        if (this.stopped) return;
        const cp = this.deps.now(),
          Op = pp.frame(ip);
        this.costs.push(this.deps.now() - cp), this.costs.length > 120 && this.costs.shift();
        const op = 0 !== (256 & Op),
          Ip = 255 & Op;
        for (const Sp of this.previews.values()) {
          if (this.stopped) return;
          Sp.collect(op)
        }
        if (!this.stopped) {
          if (0 !== (512 & Op) && this.deps.onDrew(), op) {
            const ip = pp.wxp();
            for (let pp = 0; pp + 1 < ip.length; pp += 2) ip[pp] === Hp.M.RenderDeviceLost && this.deps.onDeviceLost(), this.logError(ip[pp], ip[pp + 1])
          }
          if (Ip !== gp) {
            if (Ip === Gp) return this.stop(), void this.deps.onFatal(pp.Oxp(), pp.oxp());
            if (Ip === rp) return this.stop(), void console.warn(`${bp} the previews stopped: the page's renderer went with its session`);
            (0, wp.e)(ip), this.startFrames()
          } else {
            const ip = pp.Ixp();
            this.stop();
            const cp = ip[2] === Hp.Yc.PIPELINE_FAILED ? "pipeline_failed" : "lost";
            this.deps.onRenderFailed(cp, void 0, ip[1], ip[2] === Hp.Yc.RESTORE_LOST)
          }
        }
      }
      get isStopped() {
        return this.stopped || this.isTrapped
      }
      get isTrapped() {
        return null !== this.module && ((0, qp.g)(this.module) || "failed" === (0, yp.E)())
      }
      hostCall(pp, ip) {
        if (this.settleIfTrapped()) return pp;
        try {
          return ip()
        } catch (cp) {
          if (this.stopIfTrapped(cp)) return pp;
          throw cp
        }
      }
      guarded(pp) {
        if (this.settleIfTrapped()) throw new Error("the previews stopped: their module trapped");
        try {
          return pp()
        } catch (ip) {
          throw this.stopIfTrapped(ip), ip
        }
      }
      registryOf(pp) {
        return {
          kOp: (ip, cp) => {
            this.hostCall(void 0, (() => {
              pp.kOp(ip, cp)
            }))
          },
          mOp: ip => {
            this.hostCall(void 0, (() => {
              pp.mOp(ip)
            }))
          }
        }
      }
      settleIfTrapped() {
        return !!this.isTrapped && (this.stopped || (this.stop(), (0, Bp.h)(null)), !0)
      }
      stopIfTrapped(pp) {
        return !(null === this.module || !(0, qp.h)(this.module, pp)) && (this.stopForTrap(pp), !0)
      }
      stopForTrap(pp) {
        this.stop(), (0, Bp.h)(null), (0, fp.e)("previews", pp)
      }
      stop() {
        this.stopped = !0;
        for (const pp of this.previews.values()) pp.abandon()
      }
      logError(pp, ip) {
        const cp = `${pp}:${ip}`;
        this.loggedErrors.has(cp) || (this.loggedErrors.add(cp), console.warn(`${bp} error ${pp} (detail ${ip})`))
      }
    }
    let xi = null;

    function Li() {
      return xi ??= new Si(function() {
        const pp = (0, mp.r)(Up.clientSideServerUrls.staticUrl, {
          packUrl: pp => {
            var ip, cp;
            return null !== (ip = null === (cp = Mp.e.current) || void 0 === cp ? void 0 : cp.modelUrl(pp)) && void 0 !== ip ? ip : null
          }
        });
        return {
          loadModule: oi,
          startModels: async pp => {
            const {
              pageModelPool: ip
            } = await cp.e(43).then((() => cp(51251))), {
              pool: Op
            } = ip(pp);
            return (pp, ip) => Op.build(pp, ip)
          },
          fetchAnimations: async () => xp(await (0, Op.F)(ii())),
          playerFile: async () => (await (0, mp.o)()).PLAYER_FILE,
          onAnimationsFailed: (pp, ip) => {
            Lp("previewAnimations", ii(), pp, ip)
          },
          provideBuiltInAnimationPack: pp => {
            Pp().provide(pp)
          },
          openExtras: Ep.A,
          files: pp,
          images: (0, Mp.i)((0, jp.k)(pp.url), (() => Mp.e.current)),
          pack: Mp.e,
          game: Cp.d,
          fetchModel: pp => (0, mp.j)(pp),
          createCanvas: () => document.createElement("canvas"),
          dpr: () => window.devicePixelRatio,
          now: () => performance.now(),
          requestFrame: pp => requestAnimationFrame(pp),
          cancelFrame: pp => {
            cancelAnimationFrame(pp)
          },
          onRenderFailed: ci,
          onFatal: (pp, ip) => {
            console.error(`${bp} the previews stopped: renderer error ${pp} (detail ${ip})`)
          },
          onDeviceLost: () => {
            (0, Ep.C)() === Qp.b.webgpu && ((0, ep.h)((0, yp.X)() ? (0, dp.Y)((0, yp.H)()) : null), vp.D.lost())
          },
          onDrew: () => {
            vp.D.drew()
          }
        }
      }()), xi
    }
    var Yi = cp(629),
      Di = cp(38856),
      Ai = cp(3400);
    const Pi = {
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
    const Wi = "[bloxd-previews]",
      yi = new Uint32Array(5);

    function Ui(pp) {
      return Yi.i.indexOf(pp)
    }
    const wi = new WeakSet;

    function vi(pp) {
      const ip = (0, Di.c)(pp),
        cp = null === ip ? -1 : ti(ip);
      return -1 !== cp ? cp : (wi.has(pp) || (wi.add(pp), console.warn(`${Wi} an animation the previews' table lacks: the mob idles instead`)), -1)
    }

    function ti(pp) {
      var ip;
      return null !== (ip = Pi[pp]) && void 0 !== ip ? ip : -1
    }

    function Hi(pp, ip) {
      const {
        canvas: cp
      } = ip;
      cp.style.width = "100%", cp.style.height = "100%", cp.style.display = "block", pp.appendChild(cp)
    }

    function di(pp) {
      const ip = pp.getBoundingClientRect();
      return [ip.width, ip.height]
    }
    class ei {
      constructor(pp, ip) {
        this.preview = pp, this.showView = ip
      }
      show(pp) {
        this.showView(this.preview, pp)
      }
      resize(pp, ip) {
        this.preview.resize(pp, ip)
      }
      close() {
        this.preview.close()
      }
    }
    class ui {
      constructor(pp) {
        this.preview = pp, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.detachControls = void 0, this.detachControls = function(pp) {
          const {
            canvas: ip
          } = pp;
          let cp = null;
          const Op = pp => {
              var Op;
              cp = {
                pointer: pp.pointerId,
                x: pp.clientX,
                y: pp.clientY
              }, null === (Op = ip.setPointerCapture) || void 0 === Op || Op.call(ip, pp.pointerId)
            },
            op = ip => {
              var Op;
              const op = pp.orbit;
              if ((null === (Op = cp) || void 0 === Op ? void 0 : Op.pointer) !== ip.pointerId || null === op) return;
              const Ip = ip.clientX - cp.x,
                Sp = ip.clientY - cp.y;
              cp = {
                ...cp,
                x: ip.clientX,
                y: ip.clientY
              }, pp.setOrbit({
                alpha: op.alpha - .01 * Ip,
                beta: Math.min(Math.PI - .01, Math.max(.01, op.beta - .01 * Sp)),
                radius: op.radius
              })
            },
            Ip = pp => {
              var ip;
              (null === (ip = cp) || void 0 === ip ? void 0 : ip.pointer) === pp.pointerId && (cp = null)
            },
            Sp = ip => {
              const cp = pp.orbit;
              if (null === cp) return;
              ip.preventDefault();
              const Op = ip.deltaY * (ip.deltaMode === WheelEvent.DOM_DELTA_LINE ? 40 : ip.deltaMode === WheelEvent.DOM_DELTA_PAGE ? 800 : 1),
                op = Math.min(100, Math.max(5, cp.radius + .08 * Op));
              pp.setOrbit({
                ...cp,
                radius: op
              })
            };
          return ip.style.touchAction = "none", ip.addEventListener("pointerdown", Op), ip.addEventListener("pointermove", op), ip.addEventListener("pointerup", Ip), ip.addEventListener("pointercancel", Ip), ip.addEventListener("wheel", Sp, {
            passive: !1
          }), () => {
            ip.removeEventListener("pointerdown", Op), ip.removeEventListener("pointermove", op), ip.removeEventListener("pointerup", Ip), ip.removeEventListener("pointercancel", Ip), ip.removeEventListener("wheel", Sp)
          }
        }(pp), this.dev = {
          canvas: () => pp.canvas,
          isolateHead: () => {
            console.warn(`${Wi} isolateHead: noa's character preview only`)
          }
        }, this.apply(), this.ready = pp.untilSettled().then((() => {
          if (pp.isStopped) throw new Error(`${Wi} the previews stopped before the character drew`);
          this.built = !0
        }))
      }
      isReady() {
        return this.built && !this.preview.isClosed
      }
      setCosmetic(pp, ip) {
        this.cosmetics[pp] = ip, this.apply()
      }
      playEmote(pp) {
        null === pp || pp !== this.emote ? (this.emote = pp, this.apply()) : this.preview.replay()
      }
      untilDrawn(pp) {
        return this.preview.untilSettled()
      }
      setOrbit(pp) {
        let {
          yaw: ip,
          pitch: cp,
          radius: Op
        } = pp;
        const op = this.preview.orbit;
        null !== op && this.preview.setOrbit({
          alpha: ip,
          beta: cp,
          radius: null !== Op && void 0 !== Op ? Op : op.radius
        })
      }
      resetCamera() {}
      resize(pp, ip) {
        this.preview.resize(pp, ip)
      }
      close() {
        this.detachControls(), this.preview.close()
      }
      apply() {
        var pp;
        this.preview.setPlayer(JSON.stringify(this.cosmetics), yi, null === (pp = this.emote) ? -1 : ti(pp))
      }
    }

    function ji(pp, ip) {
      let {
        mobType: cp,
        variation: Op,
        animation: op
      } = ip;
      pp.setMob(Ui(cp), null !== Op && void 0 !== Op ? Op : "", 1, vi(op))
    }

    function ki(pp, ip) {
      let {
        mobType: cp,
        variation: Op,
        metaInfo: op,
        tamed: Ip
      } = ip;
      pp.setPet(Ui(cp), Op, op, Ip)
    }
    const mi = {
      aimed: .533 / 1.15 * 1.1,
      ready: .16 / .85 * 1.1
    };
    class Ri {
      constructor(pp, ip, cp, Op) {
        this.preview = null, this.closed = !1, this.figure = null, this.shown = !1, this.order = "", this.span = {
          left: 0,
          width: 0
        }, this.lineup = [0, 0], this.given = null, this.loaded = !1, pp(cp.width, Op[1], Op).then((pp => {
          if (this.closed) return void pp.close();
          const {
            style: cp
          } = pp.canvas;
          cp.position = "absolute", cp.top = "0", cp.visibility = "hidden", Hi(ip, pp), this.preview = pp, this.apply()
        })).catch((pp => {
          console.error(`${Wi} couldn't open a lineup figure`, pp)
        }))
      }
      update(pp, ip, cp, Op, op) {
        this.figure = pp, this.shown = ip, this.order = cp, this.span = Op, this.lineup = op, this.apply()
      }
      close() {
        var pp;
        this.closed = !0, null === (pp = this.preview) || void 0 === pp || pp.close(), this.preview = null
      }
      apply() {
        const {
          preview: pp,
          figure: ip,
          lineup: cp
        } = this;
        if (null === pp || null === ip) return;
        if (this.given !== ip) {
          var Op;
          this.given = ip, this.loaded = !1;
          const cp = null === ip.qm ? 0 : null !== (Op = (0, Ai.c)(ip.qm)) && void 0 !== Op ? Op : 0;
          pp.setFigure(function(pp) {
            return JSON.stringify(Object.fromEntries(pp.cosmetics))
          }(ip), cp, vi(ip.animation), ip.size), pp.untilSettled().then((() => {
            this.given === ip && (this.loaded = !0, this.apply())
          }))
        }
        const {
          left: op,
          width: Ip
        } = this.span;
        pp.resize(Ip, cp[1], cp);
        const {
          style: Sp
        } = pp.canvas;
        Sp.left = `${op}px`, Sp.width = `${Ip}px`, Sp.zIndex = this.order, Sp.visibility = this.shown && this.loaded ? "visible" : "hidden"
      }
    }
    class qi {
      constructor(pp, ip) {
        this.open = ip, this.layer = void 0, this.figures = [], this.view = {
          figures: [],
          shown: []
        }, this.size = void 0, this.size = di(pp), this.layer = document.createElement("div");
        const {
          style: cp
        } = this.layer;
        cp.position = "relative", cp.isolation = "isolate", cp.overflow = "hidden", cp.width = "100%", cp.height = "100%", cp.pointerEvents = "none", pp.appendChild(this.layer)
      }
      show(pp) {
        this.view = pp, this.place()
      }
      resize(pp, ip) {
        this.size = [pp, ip], this.place()
      }
      close() {
        for (const pp of this.figures) pp.close();
        this.figures = [], this.layer.remove()
      }
      place() {
        const {
          figures: pp,
          shown: ip
        } = this.view;
        for (const Op of this.figures.splice(pp.length)) Op.close();
        const {
          size: cp
        } = this;
        pp.forEach(((Op, op) => {
          var Ip;
          const Sp = function(pp, ip, cp, Op) {
            let [op, Ip] = Op;
            const Sp = (pp + .5) * op / ip,
              xp = Math.min(Math.max(op / ip, 2 * cp * Ip), 2 * Math.max(Sp, op - Sp));
            return {
              left: Sp - xp / 2,
              width: xp
            }
          }(op, pp.length, function(pp) {
            let {
              animation: ip,
              size: cp
            } = pp;
            const {
              aimed: Op,
              ready: op
            } = mi;
            return (vi(ip) === Pi.gunAimed ? Op : op) * cp
          }(Op), cp);
          this.figures[op] ??= new Ri(this.open, this.layer, Sp, cp), this.figures[op].update(Op, null !== (Ip = ip[op]) && void 0 !== Ip && Ip, function(pp, ip) {
            return String(Math.round(1e3 * pp) + ip)
          }(Op.size, op), Sp, cp)
        }))
      }
    }
    const Mi = {
      player: np,
      store: Fp
    };
    class Ci {
      constructor(pp) {
        this.page = pp
      }
      async openMob(pp) {
        return new ei(await this.open(pp, ap), ji)
      }
      async openPet(pp) {
        return new ei(await this.open(pp, ap), ki)
      }
      openMobLineup(pp) {
        return new qi(pp, ((pp, ip, cp) => this.page.openPreview(ap, pp, ip, cp)))
      }
      async openCharacter(pp, ip) {
        return new ui(await this.open(pp, Mi[ip]))
      }
      async open(pp, ip) {
        const [cp, Op] = di(pp), op = await this.page.openPreview(ip, cp, Op);
        return Hi(pp, op), op
      }
    }
  },
  36939: (pp, ip, cp) => {
    cp.d(ip, {
      A: () => yp,
      E: () => Up,
      H: () => vp,
      e: () => Op,
      h: () => op,
      i: () => Pp,
      j: () => wp,
      l: () => Dp,
      p: () => tp,
      t: () => Lp,
      v: () => Yp,
      y: () => Wp
    });
    const Op = [{
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

    function op(pp, ip) {
      const {
        numLines: cp,
        charsPerLine: op
      } = Op[ip];
      return Hp(pp, cp, op, !1)
    }
    const Ip = 7 / 8,
      Sp = .25,
      xp = 8;

    function Lp(pp, ip) {
      return {
        width: Math.min(pp, xp) - 2 * Sp,
        height: Math.min(ip, xp) - 2 * Sp
      }
    }

    function Yp(pp, ip, cp) {
      const op = Lp(pp, ip),
        {
          numLines: Sp,
          charsPerLine: xp
        } = Op[cp];
      return {
        numLines: Math.max(1, Math.floor(Sp / Ip * op.height)),
        charsPerLine: Math.max(1, Math.floor(xp * op.width))
      }
    }

    function Dp(pp, ip, cp, Op) {
      const {
        numLines: op,
        charsPerLine: Ip
      } = Yp(cp, Op, ip);
      return Hp(pp, op, Ip, !1)
    }
    const Ap = 32e3;

    function Pp(pp) {
      return pp.slice(0, Ap)
    }
    const Wp = 512e3,
      yp = 64,
      Up = Wp;

    function wp(pp, ip) {
      const cp = Math.max(0, Up - ip),
        Op = Math.min(Wp, cp);
      return pp.slice(0, Op)
    }
    const vp = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      Ux: {
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

    function tp(pp, ip) {
      const {
        numLines: cp,
        charsPerLine: Op
      } = vp[ip];
      return Hp(pp, cp, Op, !1)
    }

    function Hp(pp, ip, cp, Op, op) {
      (op || Op) && (pp = pp.slice(0, null !== op && void 0 !== op ? op : ip * cp));
      const Ip = pp.split("\n");
      if (Ip.length > ip && Ip.splice(ip, Ip.length - ip), !Op)
        for (let Sp = 0; Sp < Ip.length; Sp++) {
          const pp = Ip[Sp];
          pp.length > cp && (Ip[Sp] = pp.substring(0, cp), Ip.length < ip && Ip.splice(Sp + 1, 0, pp.substring(cp)))
        }
      return Ip.join("\n")
    }
  },
  51187: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/builtInAnimations.anim.38e056f49512e10b7206.gz"
  },
  51194: (pp, ip, cp) => {
    pp.exports = cp.p + "static/media/previewAnimations.dat.24d2343c38c8f9b3fb85.gz"
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);