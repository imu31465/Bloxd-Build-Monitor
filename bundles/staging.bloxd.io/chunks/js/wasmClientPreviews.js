export const id = 56;
export const ids = [56];
export const modules = {
  37946: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Mb,
      g: () => Tb
    });
    const Ab = new WeakMap;

    function Mb(bb, ab) {
      return Ab.set(bb, ab), bb
    }

    function Tb(bb) {
      var ab;
      return null !== (ab = Ab.get(bb)) && void 0 !== ab ? ab : null
    }
  },
  37964: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Yb
    });
    var Ab = Ub(1162);

    function Mb(bb) {
      const ab = /(\d*\.?\d+)px/.exec(bb);
      return ab ? Number(ab[1]) : null
    }

    function Tb(bb) {
      return bb.split(/[\s,]+/).pop()
    }
    let Eb = !1;
    const Yb = {
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
      drawText: function(bb, ab, Ab, Yb, Bb, eb) {
        if (Bb <= 0 || eb <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: vb,
          fontVariant: Lb,
          fontWeight: Pb,
          fontSize: Xb,
          font: jb
        } = this, Rb = [vb, Lb, Pb, `${Xb}px`, jb].filter(Boolean).join(" "), kb = [
          [Pb, `${Xb}px`, Tb(jb)].filter(Boolean).join(" "), `${Xb}px sans-serif`
        ], yb = bb.font, Zb = function(bb, ab, Ub) {
          for (const Ab of ab) {
            bb.font = Ab;
            const ab = Mb(bb.font),
              Eb = Tb(Ab);
            if (null !== ab && Math.abs(ab - Ub) <= .5 && bb.font.toLowerCase().includes(Eb.toLowerCase())) return Ab
          }
          return null
        }(bb, [Rb, ...kb], Xb);
        Zb !== Rb && function(bb, ab, Ab) {
          Eb || (Eb = !0, Promise.resolve().then((() => Ub(1003))).then((Ub => {
            let {
              UR: Mb
            } = Ub;
            Mb(new Error("A canvas didn't take canvasTxt's font"), {
              font: bb,
              RX: ab,
              drawnWith: null !== Ab && void 0 !== Ab ? Ab : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(Rb, yb, Zb);
        const Db = Mb(bb.font);
        if (null === Zb && null !== Db && Db > 0) {
          const Ub = Xb / Db;
          bb.save();
          try {
            return bb.scale(Ub, Ub), {
              height: this.drawLines(bb, ab, Ab / Ub, Yb / Ub, Bb / Ub, eb / Ub, Db).height * Ub
            }
          } finally {
            bb.restore()
          }
        }
        return this.drawLines(bb, ab, Ab, Yb, Bb, eb, Xb)
      },
      drawLines: function(bb, ab, Ub, Mb, Tb, Eb, Yb) {
        const Bb = Ub + Tb,
          eb = Mb + Eb;
        let vb, Lb = Mb + Eb / 2 + Yb / 2;
        "right" === this.align ? (vb = Bb, bb.textAlign = "right") : "left" === this.align ? (vb = Ub, bb.textAlign = "left") : (vb = Ub + Tb / 2, bb.textAlign = "center");
        for (const Ab of ab) {
          bb.measureText(Ab).width >= Tb && (ab = ab.replace(Ab, ""))
        }
        ab = (0, Ab.V)(ab);
        const Pb = [],
          Xb = ab.split("\n"),
          jb = this.justify ? bb.measureText("\u200a").width : 0;
        Xb.forEach((ab => {
          let Ub = bb.measureText(ab).width;
          if (Ub <= Tb) Pb.push(ab);
          else {
            let Ab = ab;
            const Mb = Tb;
            let Eb, Yb, Bb;
            for (Ub = bb.measureText(Ab).width; Ub > Mb;) {
              for (Eb = 0, Yb = 0, Bb = ""; Yb < Mb;) Eb++, Bb = Ab.substr(0, Eb), Yb = bb.measureText(Bb).width;
              Eb--, Bb = Bb.substr(0, Eb);
              const ab = Eb;
              if (" " !== Ab.substr(Eb, 1)) {
                for (;
                  " " !== Ab.substr(Eb, 1) && 0 !== Eb;) Eb--;
                0 === Eb && (Eb = ab), Bb = Ab.substr(0, Eb)
              }
              Bb = this.justify ? this.justifyLine(bb, Bb, jb, "\u200a", Tb) : Bb, Ab = Ab.substr(Eb), Ub = bb.measureText(Ab).width, Pb.push(Bb)
            }
            Ub > 0 && Pb.push(Ab)
          }
        }));
        const Rb = this.lineHeight ? this.lineHeight : this.getTextHeight(bb, ab),
          kb = Rb * (Pb.length - 1),
          yb = kb / 2;
        let Zb = Mb;
        "top" === this.vAlign ? Lb = Mb + Yb : "bottom" === this.vAlign ? (Lb = eb - kb, Zb = eb) : (Zb = Mb + Eb / 2, Lb -= yb), Pb.forEach((ab => {
          ab = ab.trim(), bb.fillText(ab, vb, Lb), Lb += Rb
        })), this.debug && (bb.lineWidth = 3, bb.strokeStyle = "#00909e", bb.strokeRect(Ub, Mb, Tb, Eb), bb.lineWidth = 2, bb.strokeStyle = "#f6d743", bb.beginPath(), bb.moveTo(vb, Mb), bb.lineTo(vb, eb), bb.stroke(), bb.strokeStyle = "#ff6363", bb.beginPath(), bb.moveTo(Ub, Zb), bb.lineTo(Bb, Zb), bb.stroke());
        return {
          height: kb + Rb
        }
      },
      getTextHeight: function(bb, ab) {
        const Ub = bb.textBaseline;
        bb.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: Ab
        } = bb.measureText(ab);
        return bb.textBaseline = Ub, Ab
      },
      justifyLine: function(bb, ab, Ub, Ab, Mb) {
        const Tb = ab.trim(),
          Eb = bb.measureText(Tb).width,
          Yb = Tb.split(/\s+/).length - 1,
          Bb = Math.floor((Mb - Eb) / Ub);
        if (Yb <= 0 || Bb <= 0) return Tb;
        const eb = Math.floor(Bb / Yb);
        let vb = Bb - Yb * eb,
          Lb = [];
        for (let Pb = 0; Pb < eb; Pb++) Lb.push(Ab);
        Lb = Lb.join("");
        return Tb.replace(/\s+/g, (bb => {
          const ab = vb > 0 ? Lb + Ab : Lb;
          return vb--, bb + ab
        }))
      }
    }
  },
  37973: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Rb,
      d: () => jb,
      g: () => Pb,
      j: () => vb,
      n: () => Lb
    });
    var Ab = Ub(3959),
      Mb = Ub(325);
    const Tb = 1024,
      Eb = 1536,
      Yb = 2 * Ab.l + 1,
      Bb = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      eb = 1.5;

    function vb(bb, ab, Ub) {
      if ("string" !== typeof bb) return ab;
      try {
        const Ub = JSON.parse(bb);
        return Ub && "object" === typeof Ub ? Ub : ab
      } catch (Ab) {
        return void 0 !== Ub && console.error(`Couldn't parse ${Ub}`, Ab), ab
      }
    }

    function Lb(bb) {
      return vb(bb, null, "a leaderboard's rows")
    }

    function Pb(bb, ab) {
      var Ub, Ab;
      return null !== ab && void 0 !== ab ? ab : {
        status: null !== (Ub = bb.status) && void 0 !== Ub ? Ub : "loading",
        entries: null !== (Ab = bb.entries) && void 0 !== Ab ? Ab : []
      }
    }

    function Xb(bb, ab) {
      return "number" === typeof bb && Number.isFinite(bb) && bb > 0 ? bb : ab
    }

    function jb(bb, ab) {
      const Ub = Xb(bb.size, 1);
      let Ab = Xb(bb.width, Xb(2.5 * Ub, 2.5)),
        Mb = Xb(bb.height, Xb(3.75 * Ub, 3.75));
      Number.isFinite(Tb * Mb / Ab) && Number.isFinite(Eb * Ab / Mb) || (Ab = 2.5, Mb = 3.75);
      const Yb = Mb / Ab,
        Bb = Math.max(1, Math.min(Tb, ab / Yb));
      return {
        width: Ab,
        height: Mb,
        layoutWidth: Math.max(Tb, Eb / Yb),
        layoutHeight: Math.max(Eb, Tb * Yb),
        pixelWidth: Math.round(Bb),
        pixelHeight: Math.round(Math.max(1, Math.min(ab, Bb * Yb)))
      }
    }

    function Rb(bb, ab, Ub, Eb, vb, Lb) {
      bb.setTransform(1, 0, 0, 1, 0, 0), bb.fillStyle = Mb.E.defaultNameTagBackground, bb.fillRect(0, 0, ab, Ub), bb.scale(ab / Eb.layoutWidth, Ub / Eb.layoutHeight), bb.translate((Eb.layoutWidth - Tb) / 2, 0),
        function(bb, ab, Ub, Tb) {
          var Eb, vb, Lb, Pb;
          const {
            top: Xb,
            around: jb,
            showPlayerText: Rb,
            localPlayerDbId: Zb
          } = Ub, {
            whiteUiText: Db,
            grayUiText: zb,
            yellowUiText: xb
          } = Mb.E;
          bb.textBaseline = "middle";
          const ib = function(ab, Ub, Ab, Mb, Tb, Eb) {
              let Yb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              bb.font = `bold ${Mb}px 'Jetbrains Mono', monospace`, bb.fillStyle = Tb, bb.textAlign = Yb;
              let Bb = ab.replace(/[\r\n\t]/g, " ");
              if (bb.measureText(Bb).width > Eb) {
                for (; Bb.length > 0 && bb.measureText(`${Bb}\u2026`).width > Eb;) Bb = Bb.slice(0, -1);
                Bb += "\u2026"
              }
              bb.fillText(Bb, Ub, Ab)
            },
            fb = ab => {
              bb.fillStyle = Db, bb.globalAlpha = .15, bb.fillRect(24, ab, 976, 2), bb.globalAlpha = 1
            },
            mb = null === Zb ? null : (0, Mb.$b)(Zb),
            pb = bb => null !== mb && bb.playerHash === mb,
            Nb = kb(Xb.entries, Ab.n),
            Wb = "ready" === Xb.status && Nb.length > 0,
            Hb = null === jb ? [] : kb(jb.entries, Yb),
            Ib = Nb.some(pb),
            db = null === jb ? null : function(bb) {
              const ab = bb;
              if (!ab || !Number.isFinite(ab.rank) || !Number.isFinite(ab.tied) || !Number.isFinite(ab.total)) return null;
              return ab
            }(jb.standing),
            Fb = Hb.find(pb),
            hb = Nb.find(pb),
            Gb = null === db || void 0 === Fb ? null : {
              value: Fb.value,
              rank: db.rank
            },
            Qb = yb(Nb, void 0 === hb || hb.value === (null === Gb || void 0 === Gb ? void 0 : Gb.value) ? Gb : null),
            qb = yb(Hb, Gb),
            ub = (bb, ab) => {
              const Ub = bb.findIndex(pb);
              return Ub >= 0 ? ab[Ub] : null
            },
            rb = null !== (Eb = null !== (vb = null === db || void 0 === db ? void 0 : db.rank) && void 0 !== vb ? vb : ub(Hb, qb)) && void 0 !== Eb ? Eb : ub(Nb, Qb);
          bb.font = "bold 34px 'Jetbrains Mono', monospace";
          const Kb = [...Wb ? Qb : [], ...Ib ? [] : qb],
            ob = Math.min(280, Math.max(0, ...Kb.map((ab => bb.measureText(Bb.format(ab)).width)))),
            lb = ob <= 80,
            tb = lb ? 80 : 32 + ob,
            wb = lb ? 148 : tb + 28,
            sb = 660 - wb;
          ib(`TOP ${Ab.n}  /  ALL TIME`, 24, 52, 28, zb, 976), ib(Rb ? String(null !== (Lb = ab.title) && void 0 !== Lb ? Lb : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, Db, 976), ib("RANK", 32, 174, 28, zb, wb - 40), ib("PLAYER", wb, 174, 28, zb, sb), ib(Rb ? String(null !== (Pb = ab.scoreLabel) && void 0 !== Pb ? Pb : "Score").slice(0, 24) : "Score", 992, 174, 28, zb, 304, "right"), fb(202);
          const gb = (Tb - 232) / (Ab.n + eb + Yb),
            Cb = 208 + Ab.n * gb,
            Vb = Cb + eb * gb,
            Ob = (ab, Ub, Ab, Mb) => {
              const Tb = pb(ab);
              bb.fillStyle = Tb ? xb : Db, bb.globalAlpha = Tb ? .15 : Mb ? .035 : 0, bb.fillRect(24, Ab - gb / 2 + 1, 976, gb - 2), bb.globalAlpha = 1;
              const Eb = Tb ? xb : Db;
              ib(Bb.format(Ub), tb, Ab, 34, Eb, lb ? 80 : ob, lb ? "center" : "right"), ib(Rb ? String(ab.name).slice(0, 64) : "Player", wb, Ab, 34, Eb, sb);
              const Yb = Bb.format(ab.value);
              ib(bb.measureText(Yb).width > 304 ? ab.value.toExponential(6) : Yb, 992, Ab, 34, Eb, 304, "right")
            };
          if (Wb)
            for (const [Ab, Mb] of Nb.entries()) Ob(Mb, Qb[Ab], 208 + (Ab + .5) * gb, Ab % 2 === 0);
          else {
            const bb = "error" === Xb.status,
              ab = bb ? "Couldn't load leaderboard" : "ready" === Xb.status ? "No scores yet" : "Loading leaderboard\u2026",
              Ub = bb ? "Trying again shortly" : "ready" === Xb.status ? "Be the first on the board!" : "Fetching the top players",
              Ab = (208 + Cb) / 2;
            ib(ab, 512, Ab - 28, 40, bb ? Mb.E.redUiText : Db, 960, "center"), ib(Ub, 512, Ab + 27, 30, zb, 960, "center")
          }
          const cb = Cb + eb * gb / 2;
          if (null === rb) fb(cb);
          else {
            const ab = null === db ? 0 : db.tied - 1,
              Ub = `YOUR RANK #${Bb.format(rb)}${null===db?"":` of ${Bb.format(db.total)}`}`;
            bb.font = "bold 36px 'Jetbrains Mono', monospace";
            const Ab = Math.max(20, Math.min(36, Math.floor(34560 / bb.measureText(Ub).width)));
            ib(Ub, 512, cb - (ab > 0 ? 15 : 0), Ab, xb, 960, "center"), ab > 0 && ib(`Tied with ${Bb.format(ab)} other${1===ab?"":"s"}`, 512, cb + 24, 24, zb, 960, "center")
          }
          if (null === jb) return;
          const Jb = Vb + Yb * gb / 2;
          if (Ib) ib(`You're in the top ${Ab.n}!`, 512, Jb, 40, xb, 960, "center");
          else if (0 === Hb.length) ib("You're not on this board yet", 512, Jb, 34, zb, 960, "center");
          else
            for (const [Ab, Mb] of Hb.entries()) Ob(Mb, qb[Ab], Vb + (Ab + .5) * gb, Ab % 2 === 0)
        }(bb, vb, Lb, Eb.layoutHeight)
    }

    function kb(bb, ab) {
      return Array.isArray(bb) ? bb.slice(0, ab).filter((bb => bb && Number.isFinite(bb.rank) && Number.isFinite(bb.value))) : []
    }

    function yb(bb, ab) {
      const Ub = [];
      let Ab = !1;
      return bb.forEach(((Mb, Tb) => {
        if (null !== ab && Mb.value === ab.value) return void Ub.push(ab.rank);
        const Eb = Tb > 0 && Mb.value === bb[Tb - 1].value;
        Eb || (Ab = 0 === Tb && 1 !== Mb.rank), Ub.push(Eb && !Ab ? Ub[Tb - 1] : Mb.rank)
      })), Ub
    }
  },
  38175: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Mb,
      f: () => Tb
    });
    const Ab = 32;

    function Mb(bb) {
      return Array.from(bb).length
    }

    function Tb(bb) {
      const ab = [""];
      let Ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Mb = "";
      const Tb = () => {
        ab.push(""), Ub = 0, Mb = ""
      };
      for (const Eb of bb.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(Eb)) Tb();
        else if (/^\s+$/.test(Eb)) Mb += Eb;
      else if (Eb.length > 0) {
        const bb = Array.from(Eb);
        Ub > 0 && Ub + Mb.length + bb.length > Ab && Tb(), ab[ab.length - 1] += Mb, Ub += Mb.length, Mb = "";
        for (const Mb of bb) Ub >= Ab && Tb(), ab[ab.length - 1] += Mb, Ub++
      }
      return ab[ab.length - 1] += Mb, ab
    }
  },
  42386: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      WasmPreviewHost: () => ia,
      pageBuiltInAnimationPack: () => Pb,
      pagePreviews: () => aa,
      previewModule: () => Cb
    });
    var Ab = Ub(3382),
      Mb = Ub(595);
    const Tb = "[bloxd-wasm-client]";

    function Eb(bb) {
      const ab = {
        wasm: "unknown",
        client: String(Mb.b)
      };
      try {
        var Ub;
        ab.wasm = null !== (Ub = null === bb || void 0 === bb ? void 0 : bb.eL()) && void 0 !== Ub ? Ub : ab.wasm
      } catch {}
      return ab
    }
    async function Yb(bb) {
      if (bb.length < 2 || 31 !== bb[0] || 139 !== bb[1]) return bb;
      if ("undefined" === typeof DecompressionStream) {
        const {
          ungzip: ab
        } = await Ub.e(218).then((() => Ub(36300)));
        return ab(bb)
      }
      const ab = new Blob([bb]).stream().pipeThrough(new DecompressionStream("gzip"));
      return new Uint8Array(await new Response(ab).arrayBuffer())
    }

    function Bb(bb, ab, Ab, Mb) {
      Promise.resolve().then((() => Ub(40052))).then((Ub => {
        let {
          reportDataLoadFailure: Tb
        } = Ub;
        Tb(bb, ab, Ab, Mb)
      }), (ab => {
        console.warn(`${Tb} ${bb} didn't load, and the report couldn't be sent`, Ab.error, ab)
      }))
    }
    const eb = [3e4, 12e4, 3e5];
    class vb {
      constructor(bb) {
        this.deps = bb, this.loading = null, this.reported = !1, this.retries = 0, this.resolveSet = () => {}, this.set = new Promise((bb => {
          this.resolveSet = bb
        }))
      }
      provide(bb) {
        return this.loading ??= this.load(bb), this.loading
      }
      whenSet() {
        return this.set
      }
      async load(bb) {
        const ab = Eb(bb),
          Ub = await async function(bb, ab) {
            let Ub;
            try {
              Ub = await bb()
            } catch (Ab) {
              return {
                stage: "fetch",
                error: Ab
              }
            }
            try {
              return ab(Ub) ? null : {
                stage: "decode",
                error: null
              }
            } catch (Ab) {
              return {
                stage: "decode",
                error: Ab
              }
            }
          }((() => this.deps.fetch()), (ab => {
            const Ub = bb.wMb(ab);
            return Ub && this.resolveSet(ab), Ub
          }));
        if (null !== Ub) {
          if ("fetch" === Ub.stage) {
            this.loading = null;
            const ab = eb[this.retries++];
            void 0 !== ab && this.deps.later((() => {
              this.provide(bb)
            }), ab)
          }
          this.reported || (this.reported = !0, this.deps.onFailed(Ub, ab))
        }
      }
    }
    let Lb = null;

    function Pb() {
      return Lb ??= new vb({
        fetch: async () => Yb(await (0, Ab.E)(Xb(), {
          priority: "low"
        })),
        onFailed: (bb, ab) => {
          Bb("builtInAnimations", Xb(), bb, ab)
        },
        later: (bb, ab) => {
          setTimeout(bb, ab)
        }
      }), Lb
    }

    function Xb() {
      return Ub(42391)
    }
    var jb = Ub(3376),
      Rb = Ub(35776),
      kb = Ub(39882),
      yb = Ub(1142),
      Zb = Ub(299),
      Db = Ub(39902),
      zb = Ub(40126),
      xb = (Ub(39921), Ub(40066)),
      ib = Ub(40073),
      fb = Ub(40076),
      mb = Ub(39916),
      pb = Ub(40140),
      Nb = Ub(40143),
      Wb = Ub(39940),
      Hb = Ub(40015),
      Ib = Ub(40020),
      db = Ub(40136),
      Fb = Ub(41673),
      hb = Ub(35745),
      Gb = Ub(3368);
    const Qb = "[bloxd-previews]",
      qb = 4e5,
      ub = 0,
      rb = 1,
      Kb = 2,
      ob = 1,
      lb = 2,
      tb = 3,
      wb = 0,
      sb = 1,
      gb = 2;

    function Cb(bb) {
      const ab = bb,
        Ub = (0, Db.G)(bb),
        Ab = (0, Db.n)(bb);
      return null !== Ub && null !== Ab && "function" === typeof ab.oMb && "function" === typeof ab.lMb && "function" === typeof ab.tMb ? ab : null
    }

    function Vb(bb, ab, Ub) {
      let [Ab, Mb] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [bb, ab], Tb = Math.min(Number.isFinite(Ub) && Ub > 0 ? Ub : 1, 2);
      const Eb = Math.max(0, Ab, bb) * Math.max(0, Mb, ab) * Tb * Tb;
      return Eb > qb && (Tb *= Math.sqrt(qb / Eb)), [Math.max(1, Math.floor(Math.max(0, bb) * Tb)), Math.max(1, Math.floor(Math.max(0, ab) * Tb))]
    }

    function Ob() {
      return Ub(42394)
    }
    async function cb(bb, ab) {
      "lost" === bb && (0, Wb.x)();
      const Ab = await (0, Wb.R)();
      if (null === Ab || (0, Db.p)(Ab) || (0, Wb.c)()) return;
      const Mb = "webgpu" === Ab.backend;
      if (!Mb && "lost" !== bb) return;
      const Tb = Mb ? (0, Db.O)(bb) : null;
      if (null !== Tb) {
        const Ub = `WebGPU failed at home (${bb}${void 0===ab?"":`: ${ab instanceof Error?ab.message:(0,hb.e)(ab)}`}) and ${Tb}`;
        return console.warn(`${Qb} ${Ub}: the previews stop`, null !== ab && void 0 !== ab ? ab : ""), void(0, Wb.s)(Ub)
      }(0, Wb.o)();
      try {
        await async function(bb, ab, Ab) {
          var Mb;
          let {
            backend: Tb,
            adapter: Yb
          } = bb;
          const Bb = (0, jb.H)(),
            {
              flushCrashReports: eb,
              reportRenderReload: vb
            } = await Promise.resolve().then((() => Ub(40052)));
          vb(Tb, "start_failed" === ab ? 0 : 1, Eb(Bb ? (0, jb.x)() : null), {
            cause: ab,
            error: "lost" === ab && null !== (Mb = (0, Db.S)(Bb ? (0, Db.G)((0, jb.x)()) : null)) && void 0 !== Mb ? Mb : Ab,
            context: {
              adapter: Yb,
              boundAtMs: "start_failed" === ab ? null : (0, Wb.O)(),
              indirectHangs: (0, Wb.y)()
            }
          }), await eb(Hb.e)
        }(Ab, bb, ab)
      } catch (Yb) {
        console.warn(`${Qb} ${Ab.backend} failed at home (${bb}), and its report couldn't be sent`, Yb)
      }(0, Hb.n)()
    }
    async function Jb() {
      if (!(0, jb.H)()) {
        const bb = await (0, Wb.R)();
        if (null === bb || (0, Db.p)(bb)) return null;
        if (await (0, Rb.k)(await bb.load(), kb.g), !(0, jb.H)()) return null
      }
      return Cb((0, jb.x)())
    }
    class nb {
      constructor(bb, ab, Ub, Ab, Mb, Tb) {
        this.page = bb, this.host = ab, this.id = Ub, this.canvas = Ab, this.size = Mb, this.models = void 0, this.images = void 0, this.write = void 0, this.outcomes = [], this.closed = !1, this.quiet = 0, this.settled = [];
        const Eb = {
            ...Tb.images,
            glbUrl: bb => {
              var ab;
              return null !== (ab = this.models.drawnUrl(bb)) && void 0 !== ab ? ab : Tb.images.glbUrl(bb)
            }
          },
          Yb = ab => bb.modelFile(ab);
        this.images = new zb.d(Eb, (bb => {
          console.warn(`${Qb} image ${bb.key.kind}:${bb.key.index}:${bb.key.word} failed`, bb.error)
        }), {
          fetchFile: Yb,
          fetchImage: ab => bb.imageFile(ab)
        }), bb.startModels(), this.models = new xb.i(Tb.files, ((ab, Ub) => bb.buildModel(ab, Ub)), (bb => {
          console.warn(`${Qb} model file ${bb.file} (${bb.url}) failed`, bb.error)
        }), {
          fetchFile: Yb,
          onWritten: (bb, ab) => {
            this.images.glbWritten(bb, ab)
          },
          onTaken: (bb, ab) => {
            this.images.glbTaken(bb, ab)
          }
        }), this.write = (bb, ab, Ub) => {
          if (this.closed) return !0;
          if (bb === xb.d) {
            const bb = new DataView(Ub.buffer, Ub.byteOffset, fb.c),
              Ab = bb.getUint32(0, !0),
              Mb = bb.getUint32(fb.f, !0),
              Tb = this.page.hostCall(gb, (() => this.host.gTb(this.id, Ab, ab, Ub.subarray(fb.c))));
            return this.outcomes.push([Mb, Tb]), !0
          }
          return bb === zb.b && (this.page.hostCall(void 0, (() => {
            this.host.VTb(this.id, Ub)
          })), !0)
        }
      }
      get isClosed() {
        return this.closed
      }
      get isStopped() {
        return this.page.isStopped
      }
      resize(bb, ab, Ub) {
        if (this.closed) return;
        const [Ab, Mb] = Vb(bb, ab, this.page.dpr(), Ub);
        Ab === this.size[0] && Mb === this.size[1] || (this.size = [Ab, Mb], this.page.hostCall(void 0, (() => {
          this.host.resize(this.id, Ab, Mb)
        })))
      }
      setMob(bb, ab, Ub, Ab) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.STb(this.id, bb, ab, Ub, Ab))))
      }
      setPet(bb, ab, Ub, Ab) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.aEb(this.id, bb, ab, Ub, Ab))))
      }
      setPlayer(bb, ab, Ub) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.cTb(this.id, bb, ab, Ub))))
      }
      setFigure(bb, ab, Ub, Ab) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.JTb(this.id, bb, ab, Ub, Ab))))
      }
      replay() {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.replay(this.id))))
      }
      get orbit() {
        if (this.closed) return null;
        const bb = this.page.hostCall(null, (() => this.host.orbit(this.id)));
        return null === bb || bb.length < 3 ? null : {
          alpha: bb[0],
          beta: bb[1],
          radius: bb[2]
        }
      }
      setOrbit(bb) {
        let {
          alpha: ab,
          beta: Ub,
          radius: Ab
        } = bb;
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.bEb(this.id, ab, Ub, Ab)
        }))
      }
      untilSettled() {
        return this.closed || this.page.isStopped ? Promise.resolve() : (this.quiet = 0, new Promise((bb => {
          this.settled.push(bb)
        })))
      }
      packChanged() {
        this.quiet = 0, this.models.refresh(), (0, pb.i)(this.images)
      }
      feed() {
        this.models.drain(this.write);
        for (const [bb, ab] of this.outcomes) {
          const Ub = ab === wb ? [] : [ab === sb ? bb : (bb | xb.h) >>> 0];
          this.models.taken(bb, Ub)
        }
        this.outcomes.length = 0, this.images.drain(this.write)
      }
      collect(bb) {
        let ab = !1;
        if (bb) {
          const bb = this.host.TEb(this.id);
          for (const ab of bb) this.models.request(ab);
          const Ub = this.host.MEb(this.id);
          Ub.length > 0 && this.images.onEvent(Ub), ab = bb.length > 0 || Ub.length > 0
        }
        const Ub = this.page.modelsUnavailable ? 0 : this.models.asking + this.models.unanswered,
          Ab = ab || Ub > 0 || this.images.waiting > 0 || this.images.inFlight > 0;
        this.quiet = Ab ? 0 : this.quiet + 1, this.quiet >= 3 && this.resolveSettled()
      }
      close() {
        this.closed || (this.closed = !0, this.page.closePreview(this), this.resolveSettled())
      }
      abandon() {
        this.resolveSettled()
      }
      dispose(bb) {
        this.page.hostCall(void 0, (() => {
          const ab = this.host.close(this.id);
          ab.length > 0 && this.images.onEvent(ab), this.page.isTrapped || bb.tMb(this.id)
        })), this.images.dispose(), this.canvas.remove()
      }
      resolveSettled() {
        const bb = this.settled;
        this.settled = [];
        for (const ab of bb) ab()
      }
    }
    class Sb {
      constructor(bb) {
        this.deps = bb, this.module = null, this.host = null, this.opening = null, this.pageCanvas = null, this.samples = 1, this.binding = null, this.sessionEnds = 0, this.lastEndReturned = !0, this.previews = new Map, this.nextId = 1, this.frameId = null, this.stopped = !1, this.loggedErrors = new Set, this.modelsListener = {
          onUnavailable: bb => {
            this.modelsFailed(bb)
          },
          onDecoderFailed: bb => {
            this.loggedErrors.has("modelDecoder") || (this.loggedErrors.add("modelDecoder"), console.warn(`${Qb} the Draco decoder didn't load: models waiting on it won't draw`, bb))
          },
          onWorkerLost: bb => {
            this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${Qb} a model worker was lost: ${bb}`))
          },
          onModuleRetry: () => {}
        }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.QX = {
          setShaderPack: (bb, ab, Ub, Ab, Mb) => (this.shaderPackArgs = [bb, ab, Ub, Ab, Mb], this.handOverShaderPack(), !0)
        }, this.frame = bb => {
          this.frameId = null;
          const ab = this.host;
          if (null !== ab && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped) try {
            this.drawFrame(ab, bb)
          } catch (Ub) {
            if (!this.stopIfTrapped(Ub) && (this.stop(), (0, Db.s)(Ub))) return void this.deps.onRenderFailed("frames_refused", Ub);
            console.warn(`${Qb} the previews stopped: their frame threw`, Ub)
          }
        }, bb.pack.onChange((() => {
          this.packChanged()
        })), bb.game.onGameChange((() => {
          this.tellInGame()
        }))
      }
      packChanged() {
        if (!this.stopped)
          for (const bb of this.previews.values()) bb.packChanged()
      }
      dpr() {
        return this.deps.dpr()
      }
      get sessionBound() {
        var bb, ab;
        return null !== (bb = null === (ab = this.host) || void 0 === ab ? void 0 : ab.attached()) && void 0 !== bb && bb
      }
      get open() {
        return this.previews.size
      }
      get frameCostMs() {
        return 0 === this.costs.length ? 0 : this.costs.reduce(((bb, ab) => bb + ab), 0) / this.costs.length
      }
      async bindSession(bb, ab, Ub) {
        const Ab = this.binding,
          Mb = this.sessionEnds;
        try {
          const Tb = this.hostOf(bb);
          if (!Tb.CTb()) {
            const ab = (0, Ib.h)().sampleCount,
              Eb = await Ub(ab);
            if (this.sessionEnds !== Mb) return this.keepRendererOfEndedSession(bb, Tb, Eb, ab, Ab), ab;
            if (!Tb.dTb(Eb)) throw new Error("the page has a renderer already");
            (0, Wb.t)(performance.now()), this.samples = ab, (0, db.h)((0, Db.n)(bb))
          }
          if (!Tb.attach(ab)) throw new Error("the page's renderer is lent to another session");
          return this.samples
        } finally {
          this.binding === Ab && this.endBinding()
        }
      }
      keepRendererOfEndedSession(bb, ab, Ub, Ab, Mb) {
        if (!this.lastEndReturned || null !== this.binding && this.binding !== Mb) try {
          Ub.free()
        } catch (Tb) {
          console.warn(`${Qb} an ended session's renderer didn't free`, Tb)
        } else ab.dTb(Ub) && ((0, Wb.t)(performance.now()), this.samples = Ab, (0, db.h)(this.registryOf(bb)))
      }
      async beginSession() {
        var bb;
        let ab = () => {};
        const Ub = new Promise((bb => {
          ab = bb
        }));
        this.binding = {
          done: Ub,
          release: ab
        }, await (null === (bb = this.opening) || void 0 === bb ? void 0 : bb.catch((() => null)));
        const Ab = this.pageCanvas;
        return this.pageCanvas = null, Ab
      }
      endSession(bb) {
        var ab, Ub;
        if (this.sessionEnds++, this.lastEndReturned = bb, this.endBinding(), bb) {
          try {
            var Ab;
            null === (Ab = this.host) || void 0 === Ab || Ab.detach()
          } catch (Mb) {
            return void console.warn(`${Qb} the session's core kept the page's renderer`, Mb)
          }!0 === (null === (ab = this.host) || void 0 === ab ? void 0 : ab.attached()) && console.warn(`${Qb} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (Ub = this.host) || void 0 === Ub ? void 0 : Ub.CTb()) && (0, db.h)(this.registryOf(this.module))
        }
      }
      endBinding() {
        var bb;
        null === (bb = this.binding) || void 0 === bb || bb.release(), this.binding = null
      }
      async openPreview(bb, ab, Ub, Ab) {
        const Mb = await this.renderingHost(),
          Tb = this.module;
        if (null === Mb || null === Tb) throw new Error("this page can't draw previews: it has no renderer build");
        if (this.animations ??= this.loadAnimations(Mb), this.deps.pack.wanted(), this.isStopped) throw new Error("the previews stopped");
        this.guarded((() => {
          this.deps.provideBuiltInAnimationPack(Tb)
        }));
        const Eb = this.nextId++,
          Yb = this.deps.createCanvas(),
          [Bb, eb] = Vb(ab, Ub, this.deps.dpr(), Ab);
        Yb.width = Bb, Yb.height = eb;
        if (!this.guarded((() => (Tb.lMb(Eb, Yb), Mb.open(Eb, Bb, eb, bb))))) throw this.hostCall(void 0, (() => {
          Tb.tMb(Eb)
        })), new Error("the page's renderer is lent to a session that is running");
        this.restartModelsIfFailed();
        const vb = new nb(this, Mb, Eb, Yb, [Bb, eb], this.deps);
        return this.previews.set(Eb, vb), this.startFrames(), vb
      }
      prefetch() {
        if (this.prefetched || this.isStopped || (0, Wb.c)() || null !== (0, Wb.K)()) return;
        this.prefetched = !0;
        (null === this.module ? this.loadModule() : Promise.resolve(this.module)).then((bb => {
          null === bb || this.isStopped || (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles())
        }), (() => {}))
      }
      modelFile(bb) {
        return this.prefetchedOr(bb, this.deps.fetchModel)
      }
      imageFile(bb) {
        return this.prefetchedOr(bb, Ab.E)
      }
      prefetchedOr(bb, ab) {
        const Ub = this.prefetchedFiles.get(bb);
        return void 0 === Ub ? ab(bb) : Ub.catch((() => ab(bb)))
      }
      async prefetchPlayerFiles() {
        const bb = this.deps.playerFile().then((bb => this.deps.files.url(bb))),
          ab = await Promise.all([bb, this.deps.images.lifeformAtlasUrl(pb.d)]).catch((() => null));
        if (null === ab) return;
        const [Ub, Ab] = ab, Mb = (bb, ab) => {
          if (null === bb) return;
          const Ub = ab(bb);
          this.prefetchedFiles.set(bb, Ub), Ub.catch((() => {
            this.prefetchedFiles.delete(bb)
          }))
        };
        Mb(Ub, (bb => this.modelFile(bb))), Mb(Ab, (bb => this.imageFile(bb)))
      }
      loadModule() {
        return this.moduleLoad ??= this.deps.loadModule().then((bb => (null === bb && (this.moduleLoad = null), bb)), (bb => {
          throw this.moduleLoad = null, bb
        })), this.moduleLoad
      }
      fetchAnimationTable() {
        return this.animationTable ??= this.deps.fetchAnimations().catch((bb => {
          throw this.animationTable = null, bb
        })), this.animationTable
      }
      get modelsUnavailable() {
        return this.unavailable
      }
      startModels() {
        this.models ??= this.deps.startModels(this.modelsListener).catch((bb => (this.modelsFailed(bb), () => new Promise((() => {})))))
      }
      buildModel(bb, ab) {
        return this.startModels(), this.models.then((Ub => Ub(bb, ab))).then((bb => this.unavailable ? new Promise((() => {})) : bb))
      }
      restartModelsIfFailed() {
        this.unavailable && !this.modelsRestarted && 0 === this.previews.size && (this.modelsRestarted = !0, this.models = null, this.unavailable = !1, this.startModels())
      }
      modelsFailed(bb) {
        this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${Qb} the model workers didn't start: models won't draw in the previews`, bb))
      }
      called(bb) {
        return 0 !== bb && this.logError(bb, 0), bb
      }
      closePreview(bb) {
        this.previews.delete(bb.id), null !== this.module && bb.dispose(this.module), 0 === this.previews.size && null !== this.frameId && (this.deps.cancelFrame(this.frameId), this.frameId = null)
      }
      hostOf(bb) {
        if (null !== this.module && this.module !== bb) throw new Error("a second renderer module on one page");
        return this.module = bb, null === this.host && (this.host = this.guarded((() => new bb.oMb)), this.tellInGame(), this.handOverShaderPack()), this.host
      }
      tellInGame() {
        const {
          host: bb
        } = this;
        null !== bb && this.outsideCall("the game's start or end", (() => {
          bb.nTb(this.deps.game.inGame())
        }))
      }
      handOverShaderPack() {
        const {
          host: bb,
          shaderPackArgs: ab
        } = this;
        null !== bb && null !== ab && this.outsideCall("the shader pack's hand-over", (() => {
          bb.KUb(...ab) || console.warn(`${Qb} the host refused the shader pack: previews draw without it at home`)
        }))
      }
      outsideCall(bb, ab) {
        try {
          this.hostCall(void 0, ab)
        } catch (Ub) {
          this.stop(), console.warn(`${Qb} the previews stopped: ${bb} threw`, Ub)
        }
      }
      async loadAnimations(bb) {
        const ab = Eb(null),
          Ub = this.module;
        try {
          ab.wasm = null === Ub ? ab.wasm : this.hostCall(ab.wasm, (() => Ub.eL()))
        } catch {}
        let Ab, Mb;
        try {
          Ab = await this.fetchAnimationTable()
        } catch (Tb) {
          return void this.deps.onAnimationsFailed({
            stage: "fetch",
            error: Tb
          }, ab)
        }
        if (!this.settleIfTrapped()) {
          try {
            Mb = bb.OTb(Ab)
          } catch (Tb) {
            if (this.stopIfTrapped(Tb)) return;
            return void this.deps.onAnimationsFailed({
              stage: "decode",
              error: Tb
            }, ab)
          }
          Mb || this.deps.onAnimationsFailed({
            stage: "decode",
            error: null
          }, ab)
        }
      }
      async renderingHost() {
        if (null !== this.binding && await this.binding.done, this.settleIfTrapped()) return null;
        const bb = this.host;
        return null !== bb && this.guarded((() => bb.CTb())) ? bb : (this.opening ??= this.openAtHome().finally((() => {
          this.opening = null
        })), this.opening)
      }
      async openAtHome() {
        var bb;
        const ab = null !== (bb = this.module) && void 0 !== bb ? bb : await this.loadModule();
        if (null === ab) return null;
        const Ub = this.hostOf(ab),
          Ab = () => this.guarded((() => Ub.CTb()));
        if (Ab()) return Ub;
        if (null !== (0, Wb.K)() || (0, Wb.c)()) return null;
        const Mb = this.deps.createCanvas();
        Mb.width = 1, Mb.height = 1;
        const Tb = await this.deps.openExtras();
        if (this.settleIfTrapped()) return null;
        const Eb = (0, Ib.h)().sampleCount;
        let Yb;
        try {
          Yb = await (0, Db.x)(ab, "previewRenderer", Mb, Eb, Fb.d, Tb)
        } catch (Bb) {
          throw Bb instanceof mb.d ? this.stopForTrap(Bb) : (0, Db.u)(Bb) && await this.deps.onRenderFailed("start_failed", Bb), Bb
        }
        return this.guarded((() => Ub.dTb(Yb))) ? ((0, Wb.t)(performance.now()), this.samples = Eb, this.pageCanvas = Mb, (0, db.h)(this.registryOf(ab)), Ub) : Ab() ? Ub : null
      }
      startFrames() {
        null !== this.frameId || this.isStopped || (this.frameId = this.deps.requestFrame(this.frame))
      }
      drawFrame(bb, ab) {
        for (const Eb of this.previews.values()) Eb.feed();
        if (this.stopped) return;
        const Ub = this.deps.now(),
          Ab = bb.frame(ab);
        this.costs.push(this.deps.now() - Ub), this.costs.length > 120 && this.costs.shift();
        const Mb = 0 !== (256 & Ab),
          Tb = 255 & Ab;
        for (const Eb of this.previews.values()) {
          if (this.stopped) return;
          Eb.collect(Mb)
        }
        if (!this.stopped) {
          if (Mb) {
            const ab = bb.UEb();
            for (let bb = 0; bb + 1 < ab.length; bb += 2) this.logError(ab[bb], ab[bb + 1])
          }
          if (Tb === ob) return this.stop(), void this.deps.onRenderFailed("lost");
          if (Tb === lb) return this.stop(), void this.deps.onFatal(bb.wTb(), bb.sTb());
          if (Tb === tb) return this.stop(), void console.warn(`${Qb} the previews stopped: the page's renderer went with its session`);
          (0, Zb.b)(ab), this.startFrames()
        }
      }
      get isStopped() {
        return this.stopped || this.isTrapped
      }
      get isTrapped() {
        return null !== this.module && ((0, mb.l)(this.module) || "failed" === (0, jb.v)())
      }
      hostCall(bb, ab) {
        if (this.settleIfTrapped()) return bb;
        try {
          return ab()
        } catch (Ub) {
          if (this.stopIfTrapped(Ub)) return bb;
          throw Ub
        }
      }
      guarded(bb) {
        if (this.settleIfTrapped()) throw new Error("the previews stopped: their module trapped");
        try {
          return bb()
        } catch (ab) {
          throw this.stopIfTrapped(ab), ab
        }
      }
      registryOf(bb) {
        return {
          fUb: (ab, Ub) => {
            this.hostCall(void 0, (() => {
              bb.fUb(ab, Ub)
            }))
          },
          mUb: ab => {
            this.hostCall(void 0, (() => {
              bb.mUb(ab)
            }))
          }
        }
      }
      settleIfTrapped() {
        return !!this.isTrapped && (this.stopped || (this.stop(), (0, db.h)(null)), !0)
      }
      stopIfTrapped(bb) {
        return !(null === this.module || !(0, mb.n)(this.module, bb)) && (this.stopForTrap(bb), !0)
      }
      stopForTrap(bb) {
        this.stop(), (0, db.h)(null), (0, Gb.f)("previews", bb)
      }
      stop() {
        this.stopped = !0;
        for (const bb of this.previews.values()) bb.abandon()
      }
      logError(bb, ab) {
        const Ub = `${bb}:${ab}`;
        this.loggedErrors.has(Ub) || (this.loggedErrors.add(Ub), console.warn(`${Qb} error ${bb} (detail ${ab})`))
      }
    }
    let ba = null;

    function aa() {
      return ba ??= new Sb(function() {
        const bb = (0, ib.q)(yb.clientSideServerUrls.staticUrl, {
          packUrl: bb => {
            var ab, Ub;
            return null !== (ab = null === (Ub = pb.g.current) || void 0 === Ub ? void 0 : Ub.modelUrl(bb)) && void 0 !== ab ? ab : null
          }
        });
        return {
          loadModule: Jb,
          startModels: async bb => {
            const {
              pageModelPool: ab
            } = await Ub.e(42).then((() => Ub(42469))), {
              pool: Ab
            } = ab(bb);
            return (bb, ab) => Ab.build(bb, ab)
          },
          fetchAnimations: async () => Yb(await (0, Ab.E)(Ob())),
          playerFile: async () => (await (0, ib.o)()).PLAYER_FILE,
          onAnimationsFailed: (bb, ab) => {
            Bb("previewAnimations", Ob(), bb, ab)
          },
          provideBuiltInAnimationPack: bb => {
            Pb().provide(bb)
          },
          openExtras: Wb.C,
          files: bb,
          images: (0, pb.j)((0, zb.l)(bb.url), (() => pb.g.current)),
          pack: pb.g,
          game: Nb.b,
          fetchModel: bb => (0, ib.i)(bb),
          createCanvas: () => document.createElement("canvas"),
          dpr: () => window.devicePixelRatio,
          now: () => performance.now(),
          requestFrame: bb => requestAnimationFrame(bb),
          cancelFrame: bb => {
            cancelAnimationFrame(bb)
          },
          onRenderFailed: cb,
          onFatal: (bb, ab) => {
            console.error(`${Qb} the previews stopped: renderer error ${bb} (detail ${ab})`)
          }
        }
      }()), ba
    }
    var Ua = Ub(580),
      Aa = Ub(37946),
      Ma = Ub(2989);
    const Ta = {
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
    const Ea = "[bloxd-previews]",
      Ya = new Uint32Array(5);

    function Ba(bb) {
      return Ua.n.indexOf(bb)
    }
    const ea = new WeakSet;

    function va(bb) {
      const ab = (0, Aa.g)(bb),
        Ub = null === ab ? -1 : La(ab);
      return -1 !== Ub ? Ub : (ea.has(bb) || (ea.add(bb), console.warn(`${Ea} an animation the previews' table lacks: the mob idles instead`)), -1)
    }

    function La(bb) {
      var ab;
      return null !== (ab = Ta[bb]) && void 0 !== ab ? ab : -1
    }

    function Pa(bb, ab) {
      const {
        canvas: Ub
      } = ab;
      Ub.style.width = "100%", Ub.style.height = "100%", Ub.style.display = "block", bb.appendChild(Ub)
    }

    function Xa(bb) {
      const ab = bb.getBoundingClientRect();
      return [ab.width, ab.height]
    }
    class ja {
      constructor(bb, ab) {
        this.preview = bb, this.showView = ab
      }
      show(bb) {
        this.showView(this.preview, bb)
      }
      resize(bb, ab) {
        this.preview.resize(bb, ab)
      }
      close() {
        this.preview.close()
      }
    }
    class Ra {
      constructor(bb) {
        this.preview = bb, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.detachControls = void 0, this.detachControls = function(bb) {
          const {
            canvas: ab
          } = bb;
          let Ub = null;
          const Ab = bb => {
              var Ab;
              Ub = {
                pointer: bb.pointerId,
                x: bb.clientX,
                y: bb.clientY
              }, null === (Ab = ab.setPointerCapture) || void 0 === Ab || Ab.call(ab, bb.pointerId)
            },
            Mb = ab => {
              var Ab;
              const Mb = bb.orbit;
              if ((null === (Ab = Ub) || void 0 === Ab ? void 0 : Ab.pointer) !== ab.pointerId || null === Mb) return;
              const Tb = ab.clientX - Ub.x,
                Eb = ab.clientY - Ub.y;
              Ub = {
                ...Ub,
                x: ab.clientX,
                y: ab.clientY
              }, bb.setOrbit({
                alpha: Mb.alpha - .01 * Tb,
                beta: Math.min(Math.PI - .01, Math.max(.01, Mb.beta - .01 * Eb)),
                radius: Mb.radius
              })
            },
            Tb = bb => {
              var ab;
              (null === (ab = Ub) || void 0 === ab ? void 0 : ab.pointer) === bb.pointerId && (Ub = null)
            },
            Eb = ab => {
              const Ub = bb.orbit;
              if (null === Ub) return;
              ab.preventDefault();
              const Ab = ab.deltaY * (ab.deltaMode === WheelEvent.DOM_DELTA_LINE ? 40 : ab.deltaMode === WheelEvent.DOM_DELTA_PAGE ? 800 : 1),
                Mb = Math.min(100, Math.max(5, Ub.radius + .08 * Ab));
              bb.setOrbit({
                ...Ub,
                radius: Mb
              })
            };
          return ab.style.touchAction = "none", ab.addEventListener("pointerdown", Ab), ab.addEventListener("pointermove", Mb), ab.addEventListener("pointerup", Tb), ab.addEventListener("pointercancel", Tb), ab.addEventListener("wheel", Eb, {
            passive: !1
          }), () => {
            ab.removeEventListener("pointerdown", Ab), ab.removeEventListener("pointermove", Mb), ab.removeEventListener("pointerup", Tb), ab.removeEventListener("pointercancel", Tb), ab.removeEventListener("wheel", Eb)
          }
        }(bb), this.dev = {
          canvas: () => bb.canvas,
          isolateHead: () => {
            console.warn(`${Ea} isolateHead: noa's character preview only`)
          }
        }, this.apply(), this.ready = bb.untilSettled().then((() => {
          if (bb.isStopped) throw new Error(`${Ea} the previews stopped before the character drew`);
          this.built = !0
        }))
      }
      isReady() {
        return this.built && !this.preview.isClosed
      }
      setCosmetic(bb, ab) {
        this.cosmetics[bb] = ab, this.apply()
      }
      playEmote(bb) {
        null === bb || bb !== this.emote ? (this.emote = bb, this.apply()) : this.preview.replay()
      }
      untilDrawn(bb) {
        return this.preview.untilSettled()
      }
      setOrbit(bb) {
        let {
          yaw: ab,
          pitch: Ub,
          radius: Ab
        } = bb;
        const Mb = this.preview.orbit;
        null !== Mb && this.preview.setOrbit({
          alpha: ab,
          beta: Ub,
          radius: null !== Ab && void 0 !== Ab ? Ab : Mb.radius
        })
      }
      resetCamera() {}
      resize(bb, ab) {
        this.preview.resize(bb, ab)
      }
      close() {
        this.detachControls(), this.preview.close()
      }
      apply() {
        var bb;
        this.preview.setPlayer(JSON.stringify(this.cosmetics), Ya, null === (bb = this.emote) ? -1 : La(bb))
      }
    }

    function ka(bb, ab) {
      let {
        mobType: Ub,
        variation: Ab,
        animation: Mb
      } = ab;
      bb.setMob(Ba(Ub), null !== Ab && void 0 !== Ab ? Ab : "", 1, va(Mb))
    }

    function ya(bb, ab) {
      let {
        mobType: Ub,
        variation: Ab,
        metaInfo: Mb,
        tamed: Tb
      } = ab;
      bb.setPet(Ba(Ub), Ab, Mb, Tb)
    }
    const Za = {
      aimed: .533 / 1.15 * 1.1,
      ready: .16 / .85 * 1.1
    };
    class Da {
      constructor(bb, ab, Ub, Ab) {
        this.preview = null, this.closed = !1, this.figure = null, this.shown = !1, this.order = "", this.span = {
          left: 0,
          width: 0
        }, this.lineup = [0, 0], this.given = null, this.loaded = !1, bb(Ub.width, Ab[1], Ab).then((bb => {
          if (this.closed) return void bb.close();
          const {
            style: Ub
          } = bb.canvas;
          Ub.position = "absolute", Ub.top = "0", Ub.visibility = "hidden", Pa(ab, bb), this.preview = bb, this.apply()
        })).catch((bb => {
          console.error(`${Ea} couldn't open a lineup figure`, bb)
        }))
      }
      update(bb, ab, Ub, Ab, Mb) {
        this.figure = bb, this.shown = ab, this.order = Ub, this.span = Ab, this.lineup = Mb, this.apply()
      }
      close() {
        var bb;
        this.closed = !0, null === (bb = this.preview) || void 0 === bb || bb.close(), this.preview = null
      }
      apply() {
        const {
          preview: bb,
          figure: ab,
          lineup: Ub
        } = this;
        if (null === bb || null === ab) return;
        if (this.given !== ab) {
          var Ab;
          this.given = ab, this.loaded = !1;
          const Ub = null === ab.dD ? 0 : null !== (Ab = (0, Ma.d)(ab.dD)) && void 0 !== Ab ? Ab : 0;
          bb.setFigure(function(bb) {
            return JSON.stringify(Object.fromEntries(bb.cosmetics))
          }(ab), Ub, va(ab.animation), ab.size), bb.untilSettled().then((() => {
            this.given === ab && (this.loaded = !0, this.apply())
          }))
        }
        const {
          left: Mb,
          width: Tb
        } = this.span;
        bb.resize(Tb, Ub[1], Ub);
        const {
          style: Eb
        } = bb.canvas;
        Eb.left = `${Mb}px`, Eb.width = `${Tb}px`, Eb.zIndex = this.order, Eb.visibility = this.shown && this.loaded ? "visible" : "hidden"
      }
    }
    class za {
      constructor(bb, ab) {
        this.open = ab, this.layer = void 0, this.figures = [], this.view = {
          figures: [],
          shown: []
        }, this.size = void 0, this.size = Xa(bb), this.layer = document.createElement("div");
        const {
          style: Ub
        } = this.layer;
        Ub.position = "relative", Ub.isolation = "isolate", Ub.overflow = "hidden", Ub.width = "100%", Ub.height = "100%", Ub.pointerEvents = "none", bb.appendChild(this.layer)
      }
      show(bb) {
        this.view = bb, this.place()
      }
      resize(bb, ab) {
        this.size = [bb, ab], this.place()
      }
      close() {
        for (const bb of this.figures) bb.close();
        this.figures = [], this.layer.remove()
      }
      place() {
        const {
          figures: bb,
          shown: ab
        } = this.view;
        for (const Ab of this.figures.splice(bb.length)) Ab.close();
        const {
          size: Ub
        } = this;
        bb.forEach(((Ab, Mb) => {
          var Tb;
          const Eb = function(bb, ab, Ub, Ab) {
            let [Mb, Tb] = Ab;
            const Eb = (bb + .5) * Mb / ab,
              Yb = Math.min(Math.max(Mb / ab, 2 * Ub * Tb), 2 * Math.max(Eb, Mb - Eb));
            return {
              left: Eb - Yb / 2,
              width: Yb
            }
          }(Mb, bb.length, function(bb) {
            let {
              animation: ab,
              size: Ub
            } = bb;
            const {
              aimed: Ab,
              ready: Mb
            } = Za;
            return (va(ab) === Ta.gunAimed ? Ab : Mb) * Ub
          }(Ab), Ub);
          this.figures[Mb] ??= new Da(this.open, this.layer, Eb, Ub), this.figures[Mb].update(Ab, null !== (Tb = ab[Mb]) && void 0 !== Tb && Tb, function(bb, ab) {
            return String(Math.round(1e3 * bb) + ab)
          }(Ab.size, Mb), Eb, Ub)
        }))
      }
    }
    const xa = {
      player: rb,
      store: Kb
    };
    class ia {
      constructor(bb) {
        this.page = bb
      }
      async openMob(bb) {
        return new ja(await this.open(bb, ub), ka)
      }
      async openPet(bb) {
        return new ja(await this.open(bb, ub), ya)
      }
      openMobLineup(bb) {
        return new za(bb, ((bb, ab, Ub) => this.page.openPreview(ub, bb, ab, Ub)))
      }
      async openCharacter(bb, ab) {
        return new Ra(await this.open(bb, xa[ab]))
      }
      async open(bb, ab) {
        const [Ub, Ab] = Xa(bb), Mb = await this.page.openPreview(ab, Ub, Ab);
        return Pa(bb, Mb), Mb
      }
    }
  },
  36098: (bb, ab, Ub) => {
    Ub.d(ab, {
      D: () => Rb,
      E: () => yb,
      c: () => Ab,
      e: () => Mb,
      g: () => Pb,
      j: () => kb,
      m: () => vb,
      q: () => Zb,
      u: () => Bb,
      w: () => eb,
      y: () => Xb,
      z: () => jb
    });
    const Ab = [{
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

    function Mb(bb, ab) {
      const {
        numLines: Ub,
        charsPerLine: Mb
      } = Ab[ab];
      return Db(bb, Ub, Mb, !1)
    }
    const Tb = 7 / 8,
      Eb = .25,
      Yb = 8;

    function Bb(bb, ab) {
      return {
        width: Math.min(bb, Yb) - 2 * Eb,
        height: Math.min(ab, Yb) - 2 * Eb
      }
    }

    function eb(bb, ab, Ub) {
      const Mb = Bb(bb, ab),
        {
          numLines: Eb,
          charsPerLine: Yb
        } = Ab[Ub];
      return {
        numLines: Math.max(1, Math.floor(Eb / Tb * Mb.height)),
        charsPerLine: Math.max(1, Math.floor(Yb * Mb.width))
      }
    }

    function vb(bb, ab, Ub, Ab) {
      const {
        numLines: Mb,
        charsPerLine: Tb
      } = eb(Ub, Ab, ab);
      return Db(bb, Mb, Tb, !1)
    }
    const Lb = 32e3;

    function Pb(bb) {
      return bb.slice(0, Lb)
    }
    const Xb = 512e3,
      jb = 64,
      Rb = Xb;

    function kb(bb, ab) {
      const Ub = Math.max(0, Rb - ab),
        Ab = Math.min(Xb, Ub);
      return bb.slice(0, Ab)
    }
    const yb = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      eY: {
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

    function Zb(bb, ab) {
      const {
        numLines: Ub,
        charsPerLine: Ab
      } = yb[ab];
      return Db(bb, Ub, Ab, !1)
    }

    function Db(bb, ab, Ub, Ab, Mb) {
      (Mb || Ab) && (bb = bb.slice(0, null !== Mb && void 0 !== Mb ? Mb : ab * Ub));
      const Tb = bb.split("\n");
      if (Tb.length > ab && Tb.splice(ab, Tb.length - ab), !Ab)
        for (let Eb = 0; Eb < Tb.length; Eb++) {
          const bb = Tb[Eb];
          bb.length > Ub && (Tb[Eb] = bb.substring(0, Ub), Tb.length < ab && Tb.splice(Eb + 1, 0, bb.substring(Ub)))
        }
      return Tb.join("\n")
    }
  },
  42391: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/builtInAnimations.anim.38e056f49512e10b7206.gz"
  },
  42394: (bb, ab, Ub) => {
    bb.exports = Ub.p + "static/media/previewAnimations.dat.24d2343c38c8f9b3fb85.gz"
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);