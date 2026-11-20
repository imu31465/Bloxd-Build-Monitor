export const id = 56;
export const ids = [56];
export const modules = {
  38240: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Wb,
      f: () => ab
    });
    const kb = new WeakMap;

    function Wb(bb, cb) {
      return kb.set(bb, cb), bb
    }

    function ab(bb) {
      var cb;
      return null !== (cb = kb.get(bb)) && void 0 !== cb ? cb : null
    }
  },
  38263: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Ub
    });
    var kb = sb(1235);

    function Wb(bb) {
      const cb = /(\d*\.?\d+)px/.exec(bb);
      return cb ? Number(cb[1]) : null
    }

    function ab(bb) {
      return bb.split(/[\s,]+/).pop()
    }
    let Tb = !1;
    const Ub = {
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
      drawText: function(bb, cb, kb, Ub, Ib, Hb) {
        if (Ib <= 0 || Hb <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: fb,
          fontVariant: Mb,
          fontWeight: Xb,
          fontSize: nb,
          font: mb
        } = this, lb = [fb, Mb, Xb, `${nb}px`, mb].filter(Boolean).join(" "), Qb = [
          [Xb, `${nb}px`, ab(mb)].filter(Boolean).join(" "), `${nb}px sans-serif`
        ], eb = bb.font, Cb = function(bb, cb, sb) {
          for (const kb of cb) {
            bb.font = kb;
            const cb = Wb(bb.font),
              Tb = ab(kb);
            if (null !== cb && Math.abs(cb - sb) <= .5 && bb.font.toLowerCase().includes(Tb.toLowerCase())) return kb
          }
          return null
        }(bb, [lb, ...Qb], nb);
        Cb !== lb && function(bb, cb, kb) {
          Tb || (Tb = !0, Promise.resolve().then((() => sb(1058))).then((sb => {
            let {
              dl: Wb
            } = sb;
            Wb(new Error("A canvas didn't take canvasTxt's font"), {
              font: bb,
              vn: cb,
              drawnWith: null !== kb && void 0 !== kb ? kb : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(lb, eb, Cb);
        const Nb = Wb(bb.font);
        if (null === Cb && null !== Nb && Nb > 0) {
          const sb = nb / Nb;
          bb.save();
          try {
            return bb.scale(sb, sb), {
              height: this.drawLines(bb, cb, kb / sb, Ub / sb, Ib / sb, Hb / sb, Nb).height * sb
            }
          } finally {
            bb.restore()
          }
        }
        return this.drawLines(bb, cb, kb, Ub, Ib, Hb, nb)
      },
      drawLines: function(bb, cb, sb, Wb, ab, Tb, Ub) {
        const Ib = sb + ab,
          Hb = Wb + Tb;
        let fb, Mb = Wb + Tb / 2 + Ub / 2;
        "right" === this.align ? (fb = Ib, bb.textAlign = "right") : "left" === this.align ? (fb = sb, bb.textAlign = "left") : (fb = sb + ab / 2, bb.textAlign = "center");
        for (const kb of cb) {
          bb.measureText(kb).width >= ab && (cb = cb.replace(kb, ""))
        }
        cb = (0, kb.L)(cb);
        const Xb = [],
          nb = cb.split("\n"),
          mb = this.justify ? bb.measureText("\u200a").width : 0;
        nb.forEach((cb => {
          let sb = bb.measureText(cb).width;
          if (sb <= ab) Xb.push(cb);
          else {
            let kb = cb;
            const Wb = ab;
            let Tb, Ub, Ib;
            for (sb = bb.measureText(kb).width; sb > Wb;) {
              for (Tb = 0, Ub = 0, Ib = ""; Ub < Wb;) Tb++, Ib = kb.substr(0, Tb), Ub = bb.measureText(Ib).width;
              Tb--, Ib = Ib.substr(0, Tb);
              const cb = Tb;
              if (" " !== kb.substr(Tb, 1)) {
                for (;
                  " " !== kb.substr(Tb, 1) && 0 !== Tb;) Tb--;
                0 === Tb && (Tb = cb), Ib = kb.substr(0, Tb)
              }
              Ib = this.justify ? this.justifyLine(bb, Ib, mb, "\u200a", ab) : Ib, kb = kb.substr(Tb), sb = bb.measureText(kb).width, Xb.push(Ib)
            }
            sb > 0 && Xb.push(kb)
          }
        }));
        const lb = this.lineHeight ? this.lineHeight : this.getTextHeight(bb, cb),
          Qb = lb * (Xb.length - 1),
          eb = Qb / 2;
        let Cb = Wb;
        "top" === this.vAlign ? Mb = Wb + Ub : "bottom" === this.vAlign ? (Mb = Hb - Qb, Cb = Hb) : (Cb = Wb + Tb / 2, Mb -= eb), Xb.forEach((cb => {
          cb = cb.trim(), bb.fillText(cb, fb, Mb), Mb += lb
        })), this.debug && (bb.lineWidth = 3, bb.strokeStyle = "#00909e", bb.strokeRect(sb, Wb, ab, Tb), bb.lineWidth = 2, bb.strokeStyle = "#f6d743", bb.beginPath(), bb.moveTo(fb, Wb), bb.lineTo(fb, Hb), bb.stroke(), bb.strokeStyle = "#ff6363", bb.beginPath(), bb.moveTo(sb, Cb), bb.lineTo(Ib, Cb), bb.stroke());
        return {
          height: Qb + lb
        }
      },
      getTextHeight: function(bb, cb) {
        const sb = bb.textBaseline;
        bb.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: kb
        } = bb.measureText(cb);
        return bb.textBaseline = sb, kb
      },
      justifyLine: function(bb, cb, sb, kb, Wb) {
        const ab = cb.trim(),
          Tb = bb.measureText(ab).width,
          Ub = ab.split(/\s+/).length - 1,
          Ib = Math.floor((Wb - Tb) / sb);
        if (Ub <= 0 || Ib <= 0) return ab;
        const Hb = Math.floor(Ib / Ub);
        let fb = Ib - Ub * Hb,
          Mb = [];
        for (let Xb = 0; Xb < Hb; Xb++) Mb.push(kb);
        Mb = Mb.join("");
        return ab.replace(/\s+/g, (bb => {
          const cb = fb > 0 ? Mb + kb : Mb;
          return fb--, bb + cb
        }))
      }
    }
  },
  38267: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => lb,
      g: () => mb,
      i: () => Xb,
      k: () => fb,
      o: () => Mb
    });
    var kb = sb(4023),
      Wb = sb(344);
    const ab = 1024,
      Tb = 1536,
      Ub = 2 * kb.k + 1,
      Ib = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      Hb = 1.5;

    function fb(bb, cb, sb) {
      if ("string" !== typeof bb) return cb;
      try {
        const sb = JSON.parse(bb);
        return sb && "object" === typeof sb ? sb : cb
      } catch (kb) {
        return void 0 !== sb && console.error(`Couldn't parse ${sb}`, kb), cb
      }
    }

    function Mb(bb) {
      return fb(bb, null, "a leaderboard's rows")
    }

    function Xb(bb, cb) {
      var sb, kb;
      return null !== cb && void 0 !== cb ? cb : {
        status: null !== (sb = bb.status) && void 0 !== sb ? sb : "loading",
        entries: null !== (kb = bb.entries) && void 0 !== kb ? kb : []
      }
    }

    function nb(bb, cb) {
      return "number" === typeof bb && Number.isFinite(bb) && bb > 0 ? bb : cb
    }

    function mb(bb, cb) {
      const sb = nb(bb.size, 1);
      let kb = nb(bb.width, nb(2.5 * sb, 2.5)),
        Wb = nb(bb.height, nb(3.75 * sb, 3.75));
      Number.isFinite(ab * Wb / kb) && Number.isFinite(Tb * kb / Wb) || (kb = 2.5, Wb = 3.75);
      const Ub = Wb / kb,
        Ib = Math.max(1, Math.min(ab, cb / Ub));
      return {
        width: kb,
        height: Wb,
        layoutWidth: Math.max(ab, Tb / Ub),
        layoutHeight: Math.max(Tb, ab * Ub),
        pixelWidth: Math.round(Ib),
        pixelHeight: Math.round(Math.max(1, Math.min(cb, Ib * Ub)))
      }
    }

    function lb(bb, cb, sb, Tb, fb, Mb) {
      bb.setTransform(1, 0, 0, 1, 0, 0), bb.fillStyle = Wb.L.defaultNameTagBackground, bb.fillRect(0, 0, cb, sb), bb.scale(cb / Tb.layoutWidth, sb / Tb.layoutHeight), bb.translate((Tb.layoutWidth - ab) / 2, 0),
        function(bb, cb, sb, ab) {
          var Tb, fb, Mb, Xb;
          const {
            top: nb,
            around: mb,
            showPlayerText: lb,
            localPlayerDbId: Cb
          } = sb, {
            whiteUiText: Nb,
            grayUiText: Vb,
            yellowUiText: Lb
          } = Wb.L;
          bb.textBaseline = "middle";
          const ub = function(cb, sb, kb, Wb, ab, Tb) {
              let Ub = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              bb.font = `bold ${Wb}px 'Jetbrains Mono', monospace`, bb.fillStyle = ab, bb.textAlign = Ub;
              let Ib = cb.replace(/[\r\n\t]/g, " ");
              if (bb.measureText(Ib).width > Tb) {
                for (; Ib.length > 0 && bb.measureText(`${Ib}\u2026`).width > Tb;) Ib = Ib.slice(0, -1);
                Ib += "\u2026"
              }
              bb.fillText(Ib, sb, kb)
            },
            Yb = cb => {
              bb.fillStyle = Nb, bb.globalAlpha = .15, bb.fillRect(24, cb, 976, 2), bb.globalAlpha = 1
            },
            hb = null === Cb ? null : (0, Wb.nc)(Cb),
            Jb = bb => null !== hb && bb.playerHash === hb,
            gb = Qb(nb.entries, kb.m),
            Bb = "ready" === nb.status && gb.length > 0,
            tb = null === mb ? [] : Qb(mb.entries, Ub),
            yb = gb.some(Jb),
            Pb = null === mb ? null : function(bb) {
              const cb = bb;
              if (!cb || !Number.isFinite(cb.rank) || !Number.isFinite(cb.tied) || !Number.isFinite(cb.total)) return null;
              return cb
            }(mb.standing),
            Db = tb.find(Jb),
            Eb = gb.find(Jb),
            ib = null === Pb || void 0 === Db ? null : {
              value: Db.value,
              rank: Pb.rank
            },
            Ob = eb(gb, void 0 === Eb || Eb.value === (null === ib || void 0 === ib ? void 0 : ib.value) ? ib : null),
            Gb = eb(tb, ib),
            Kb = (bb, cb) => {
              const sb = bb.findIndex(Jb);
              return sb >= 0 ? cb[sb] : null
            },
            Zb = null !== (Tb = null !== (fb = null === Pb || void 0 === Pb ? void 0 : Pb.rank) && void 0 !== fb ? fb : Kb(tb, Gb)) && void 0 !== Tb ? Tb : Kb(gb, Ob);
          bb.font = "bold 34px 'Jetbrains Mono', monospace";
          const zb = [...Bb ? Ob : [], ...yb ? [] : Gb],
            qb = Math.min(280, Math.max(0, ...zb.map((cb => bb.measureText(Ib.format(cb)).width)))),
            db = qb <= 80,
            Ab = db ? 80 : 32 + qb,
            wb = db ? 148 : Ab + 28,
            rb = 660 - wb;
          ub(`TOP ${kb.m}  /  ALL TIME`, 24, 52, 28, Vb, 976), ub(lb ? String(null !== (Mb = cb.title) && void 0 !== Mb ? Mb : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, Nb, 976), ub("RANK", 32, 174, 28, Vb, wb - 40), ub("PLAYER", wb, 174, 28, Vb, rb), ub(lb ? String(null !== (Xb = cb.scoreLabel) && void 0 !== Xb ? Xb : "Score").slice(0, 24) : "Score", 992, 174, 28, Vb, 304, "right"), Yb(202);
          const ob = (ab - 232) / (kb.m + Hb + Ub),
            Sb = 208 + kb.m * ob,
            Rb = Sb + Hb * ob,
            vb = (cb, sb, kb, Wb) => {
              const ab = Jb(cb);
              bb.fillStyle = ab ? Lb : Nb, bb.globalAlpha = ab ? .15 : Wb ? .035 : 0, bb.fillRect(24, kb - ob / 2 + 1, 976, ob - 2), bb.globalAlpha = 1;
              const Tb = ab ? Lb : Nb;
              ub(Ib.format(sb), Ab, kb, 34, Tb, db ? 80 : qb, db ? "center" : "right"), ub(lb ? String(cb.name).slice(0, 64) : "Player", wb, kb, 34, Tb, rb);
              const Ub = Ib.format(cb.value);
              ub(bb.measureText(Ub).width > 304 ? cb.value.toExponential(6) : Ub, 992, kb, 34, Tb, 304, "right")
            };
          if (Bb)
            for (const [kb, Wb] of gb.entries()) vb(Wb, Ob[kb], 208 + (kb + .5) * ob, kb % 2 === 0);
          else {
            const bb = "error" === nb.status,
              cb = bb ? "Couldn't load leaderboard" : "ready" === nb.status ? "No scores yet" : "Loading leaderboard\u2026",
              sb = bb ? "Trying again shortly" : "ready" === nb.status ? "Be the first on the board!" : "Fetching the top players",
              kb = (208 + Sb) / 2;
            ub(cb, 512, kb - 28, 40, bb ? Wb.L.redUiText : Nb, 960, "center"), ub(sb, 512, kb + 27, 30, Vb, 960, "center")
          }
          const Fb = Sb + Hb * ob / 2;
          if (null === Zb) Yb(Fb);
          else {
            const cb = null === Pb ? 0 : Pb.tied - 1,
              sb = `YOUR RANK #${Ib.format(Zb)}${null===Pb?"":` of ${Ib.format(Pb.total)}`}`;
            bb.font = "bold 36px 'Jetbrains Mono', monospace";
            const kb = Math.max(20, Math.min(36, Math.floor(34560 / bb.measureText(sb).width)));
            ub(sb, 512, Fb - (cb > 0 ? 15 : 0), kb, Lb, 960, "center"), cb > 0 && ub(`Tied with ${Ib.format(cb)} other${1===cb?"":"s"}`, 512, Fb + 24, 24, Vb, 960, "center")
          }
          if (null === mb) return;
          const xb = Rb + Ub * ob / 2;
          if (yb) ub(`You're in the top ${kb.m}!`, 512, xb, 40, Lb, 960, "center");
          else if (0 === tb.length) ub("You're not on this board yet", 512, xb, 34, Vb, 960, "center");
          else
            for (const [kb, Wb] of tb.entries()) vb(Wb, Gb[kb], Rb + (kb + .5) * ob, kb % 2 === 0)
        }(bb, fb, Mb, Tb.layoutHeight)
    }

    function Qb(bb, cb) {
      return Array.isArray(bb) ? bb.slice(0, cb).filter((bb => bb && Number.isFinite(bb.rank) && Number.isFinite(bb.value))) : []
    }

    function eb(bb, cb) {
      const sb = [];
      let kb = !1;
      return bb.forEach(((Wb, ab) => {
        if (null !== cb && Wb.value === cb.value) return void sb.push(cb.rank);
        const Tb = ab > 0 && Wb.value === bb[ab - 1].value;
        Tb || (kb = 0 === ab && 1 !== Wb.rank), sb.push(Tb && !kb ? sb[ab - 1] : Wb.rank)
      })), sb
    }
  },
  38451: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Wb,
      g: () => ab
    });
    const kb = 32;

    function Wb(bb) {
      return Array.from(bb).length
    }

    function ab(bb) {
      const cb = [""];
      let sb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Wb = "";
      const ab = () => {
        cb.push(""), sb = 0, Wb = ""
      };
      for (const Tb of bb.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(Tb)) ab();
        else if (/^\s+$/.test(Tb)) Wb += Tb;
      else if (Tb.length > 0) {
        const bb = Array.from(Tb);
        sb > 0 && sb + Wb.length + bb.length > kb && ab(), cb[cb.length - 1] += Wb, sb += Wb.length, Wb = "";
        for (const Wb of bb) sb >= kb && ab(), cb[cb.length - 1] += Wb, sb++
      }
      return cb[cb.length - 1] += Wb, cb
    }
  },
  42639: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      WasmPreviewHost: () => uc,
      pageBuiltInAnimationPack: () => Xb,
      pagePreviews: () => cc,
      previewModule: () => Sb
    });
    var kb = sb(3505),
      Wb = sb(635);
    const ab = "[bloxd-wasm-client]";

    function Tb(bb) {
      const cb = {
        wasm: "unknown",
        client: String(Wb.d)
      };
      try {
        var sb;
        cb.wasm = null !== (sb = null === bb || void 0 === bb ? void 0 : bb.EM()) && void 0 !== sb ? sb : cb.wasm
      } catch {}
      return cb
    }
    async function Ub(bb) {
      if (bb.length < 2 || 31 !== bb[0] || 139 !== bb[1]) return bb;
      if ("undefined" === typeof DecompressionStream) {
        const {
          ungzip: cb
        } = await sb.e(218).then((() => sb(36538)));
        return cb(bb)
      }
      const cb = new Blob([bb]).stream().pipeThrough(new DecompressionStream("gzip"));
      return new Uint8Array(await new Response(cb).arrayBuffer())
    }

    function Ib(bb, cb, kb, Wb) {
      Promise.resolve().then((() => sb(40373))).then((sb => {
        let {
          reportDataLoadFailure: ab
        } = sb;
        ab(bb, cb, kb, Wb)
      }), (cb => {
        console.warn(`${ab} ${bb} didn't load, and the report couldn't be sent`, kb.error, cb)
      }))
    }
    const Hb = [3e4, 12e4, 3e5];
    class fb {
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
        const cb = Tb(bb),
          sb = await async function(bb, cb) {
            let sb;
            try {
              sb = await bb()
            } catch (kb) {
              return {
                stage: "fetch",
                error: kb
              }
            }
            try {
              return cb(sb) ? null : {
                stage: "decode",
                error: null
              }
            } catch (kb) {
              return {
                stage: "decode",
                error: kb
              }
            }
          }((() => this.deps.fetch()), (cb => {
            const sb = bb.wWb(cb);
            return sb && this.resolveSet(cb), sb
          }));
        if (null !== sb) {
          if ("fetch" === sb.stage) {
            this.loading = null;
            const cb = Hb[this.retries++];
            void 0 !== cb && this.deps.later((() => {
              this.provide(bb)
            }), cb)
          }
          this.reported || (this.reported = !0, this.deps.onFailed(sb, cb))
        }
      }
    }
    let Mb = null;

    function Xb() {
      return Mb ??= new fb({
        fetch: async () => Ub(await (0, kb.C)(nb(), {
          priority: "low"
        })),
        onFailed: (bb, cb) => {
          Ib("builtInAnimations", nb(), bb, cb)
        },
        later: (bb, cb) => {
          setTimeout(bb, cb)
        }
      }), Mb
    }

    function nb() {
      return sb(42641)
    }
    var mb = sb(3500),
      lb = sb(35976),
      Qb = sb(40189),
      eb = sb(1208),
      Cb = sb(326),
      Nb = sb(40207),
      Vb = sb(40433),
      Lb = (sb(40223), sb(40388)),
      ub = sb(40391),
      Yb = sb(40396),
      hb = sb(40221),
      Jb = sb(40453),
      gb = sb(40461),
      Bb = sb(40238),
      tb = sb(40332),
      yb = sb(40335),
      Pb = sb(40447),
      Db = sb(41941),
      Eb = sb(35945),
      ib = sb(3495);
    const Ob = "[bloxd-previews]",
      Gb = 4e5,
      Kb = 0,
      Zb = 1,
      zb = 2,
      qb = 1,
      db = 2,
      Ab = 3,
      wb = 0,
      rb = 1,
      ob = 2;

    function Sb(bb) {
      const cb = bb,
        sb = (0, Nb.z)(bb),
        kb = (0, Nb.h)(bb);
      return null !== sb && null !== kb && "function" === typeof cb.qWb && "function" === typeof cb.dWb && "function" === typeof cb.AWb ? cb : null
    }

    function Rb(bb, cb, sb) {
      let [kb, Wb] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [bb, cb], ab = Math.min(Number.isFinite(sb) && sb > 0 ? sb : 1, 2);
      const Tb = Math.max(0, kb, bb) * Math.max(0, Wb, cb) * ab * ab;
      return Tb > Gb && (ab *= Math.sqrt(Gb / Tb)), [Math.max(1, Math.floor(Math.max(0, bb) * ab)), Math.max(1, Math.floor(Math.max(0, cb) * ab))]
    }

    function vb() {
      return sb(42650)
    }
    async function Fb(bb, cb) {
      "lost" === bb && (0, Bb.y)();
      const kb = await (0, Bb.I)();
      if (null === kb || (0, Nb.l)(kb) || (0, Bb.e)()) return;
      const Wb = "webgpu" === kb.backend;
      if (!Wb && "lost" !== bb) return;
      const ab = Wb ? (0, Nb.G)(bb) : null;
      if (null !== ab) {
        const sb = `WebGPU failed at home (${bb}${void 0===cb?"":`: ${cb instanceof Error?cb.message:(0,Eb.h)(cb)}`}) and ${ab}`;
        return console.warn(`${Ob} ${sb}: the previews stop`, null !== cb && void 0 !== cb ? cb : ""), void(0, Bb.s)(sb)
      }(0, Bb.r)();
      try {
        await async function(bb, cb, kb) {
          var Wb;
          let {
            backend: ab,
            adapter: Ub
          } = bb;
          const Ib = (0, mb.M)(),
            {
              flushCrashReports: Hb,
              reportRenderReload: fb
            } = await Promise.resolve().then((() => sb(40373)));
          fb(ab, "start_failed" === cb ? 0 : 1, Tb(Ib ? (0, mb.G)() : null), {
            cause: cb,
            error: "lost" === cb && null !== (Wb = (0, Nb.M)(Ib ? (0, Nb.z)((0, mb.G)()) : null)) && void 0 !== Wb ? Wb : kb,
            context: {
              adapter: Ub,
              boundAtMs: "start_failed" === cb ? null : (0, Bb.G)(),
              indirectHangs: (0, Bb.A)()
            }
          }), await Hb(tb.b)
        }(kb, bb, cb)
      } catch (Ub) {
        console.warn(`${Ob} ${kb.backend} failed at home (${bb}), and its report couldn't be sent`, Ub)
      }(0, tb.i)()
    }
    async function xb() {
      if (!(0, mb.M)()) {
        const bb = await (0, Bb.I)();
        if (null === bb || (0, Nb.l)(bb)) return null;
        if (await (0, lb.j)(await bb.load(), Qb.f), !(0, mb.M)()) return null
      }
      return Sb((0, mb.G)())
    }
    class jb {
      constructor(bb, cb, sb, kb, Wb, ab) {
        this.page = bb, this.host = cb, this.id = sb, this.canvas = kb, this.size = Wb, this.models = void 0, this.images = void 0, this.write = void 0, this.outcomes = [], this.closed = !1, this.quiet = 0, this.settled = [];
        const Tb = {
            ...ab.images,
            glbUrl: bb => {
              var cb;
              return null !== (cb = this.models.drawnUrl(bb)) && void 0 !== cb ? cb : ab.images.glbUrl(bb)
            }
          },
          Ub = cb => bb.modelFile(cb);
        this.images = new Vb.g(Tb, (bb => {
          console.warn(`${Ob} image ${bb.key.kind}:${bb.key.index}:${bb.key.word} failed`, bb.error)
        }), {
          fetchFile: Ub,
          fetchImage: cb => bb.imageFile(cb)
        }), bb.startModels(), this.models = new Lb.i(ab.files, ((cb, sb) => bb.buildModel(cb, sb)), (bb => {
          console.warn(`${Ob} model file ${bb.file} (${bb.url}) failed`, bb.error)
        }), {
          fetchFile: Ub,
          onWritten: (bb, cb) => {
            this.images.glbWritten(bb, cb)
          },
          onTaken: (bb, cb) => {
            this.images.glbTaken(bb, cb)
          }
        }), this.write = (bb, cb, sb) => {
          if (this.closed) return !0;
          if (bb === Lb.d) {
            const bb = new DataView(sb.buffer, sb.byteOffset, Yb.c),
              kb = bb.getUint32(0, !0),
              Wb = bb.getUint32(Yb.e, !0),
              ab = this.page.hostCall(ob, (() => this.host.sTb(this.id, kb, cb, sb.subarray(Yb.c))));
            return this.outcomes.push([Wb, ab]), !0
          }
          return bb === Vb.e && (this.page.hostCall(void 0, (() => {
            this.host.WTb(this.id, sb)
          })), !0)
        }
      }
      get isClosed() {
        return this.closed
      }
      get isStopped() {
        return this.page.isStopped
      }
      resize(bb, cb, sb) {
        if (this.closed) return;
        const [kb, Wb] = Rb(bb, cb, this.page.dpr(), sb);
        kb === this.size[0] && Wb === this.size[1] || (this.size = [kb, Wb], this.page.hostCall(void 0, (() => {
          this.host.resize(this.id, kb, Wb)
        })))
      }
      setMob(bb, cb, sb, kb) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.HTb(this.id, bb, cb, sb, kb))))
      }
      setPet(bb, cb, sb, kb) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.MTb(this.id, bb, cb, sb, kb))))
      }
      setPlayer(bb, cb, sb) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.TTb(this.id, bb, cb, sb))))
      }
      setFigure(bb, cb, sb, kb) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.UTb(this.id, bb, cb, sb, kb))))
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
          alpha: cb,
          beta: sb,
          radius: kb
        } = bb;
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.fTb(this.id, cb, sb, kb)
        }))
      }
      untilSettled() {
        return this.closed || this.page.isStopped ? Promise.resolve() : (this.quiet = 0, new Promise((bb => {
          this.settled.push(bb)
        })))
      }
      packChanged() {
        this.quiet = 0, this.models.refresh(), (0, Jb.k)(this.images)
      }
      feed() {
        this.models.drain(this.write);
        for (const [bb, cb] of this.outcomes) {
          const sb = cb === wb ? [] : [cb === rb ? bb : (bb | Lb.f) >>> 0];
          this.models.taken(bb, sb)
        }
        this.outcomes.length = 0, this.images.drain(this.write)
      }
      collect(bb) {
        let cb = !1;
        if (bb) {
          const bb = this.host.mTb(this.id);
          for (const cb of bb) this.models.request(cb);
          const sb = this.host.nTb(this.id);
          sb.length > 0 && this.images.onEvent(sb), cb = bb.length > 0 || sb.length > 0
        }
        const sb = this.page.modelsUnavailable ? 0 : this.models.asking + this.models.unanswered,
          kb = cb || sb > 0 || this.images.waiting > 0 || this.images.inFlight > 0;
        this.quiet = kb ? 0 : this.quiet + 1, this.quiet >= 3 && this.resolveSettled()
      }
      close() {
        this.closed || (this.closed = !0, this.page.closePreview(this), this.resolveSettled())
      }
      abandon() {
        this.resolveSettled()
      }
      dispose(bb) {
        this.page.hostCall(void 0, (() => {
          const cb = this.host.close(this.id);
          cb.length > 0 && this.images.onEvent(cb), this.page.isTrapped || bb.AWb(this.id)
        })), this.images.dispose(), this.canvas.remove()
      }
      resolveSettled() {
        const bb = this.settled;
        this.settled = [];
        for (const cb of bb) cb()
      }
    }
    class pb {
      constructor(bb) {
        this.deps = bb, this.module = null, this.host = null, this.opening = null, this.pageCanvas = null, this.samples = 1, this.binding = null, this.sessionEnds = 0, this.lastEndReturned = !0, this.previews = new Map, this.nextId = 1, this.frameId = null, this.stopped = !1, this.loggedErrors = new Set, this.modelsListener = {
          onUnavailable: bb => {
            this.modelsFailed(bb)
          },
          onDecoderFailed: bb => {
            this.loggedErrors.has("modelDecoder") || (this.loggedErrors.add("modelDecoder"), console.warn(`${Ob} the Draco decoder didn't load: models waiting on it won't draw`, bb))
          },
          onWorkerLost: bb => {
            this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${Ob} a model worker was lost: ${bb}`))
          },
          onModuleRetry: () => {}
        }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.Qm = {
          setShaderPack: (bb, cb, sb, kb, Wb) => (this.shaderPackArgs = [bb, cb, sb, kb, Wb], this.handOverShaderPack(), !0)
        }, this.frame = bb => {
          this.frameId = null;
          const cb = this.host;
          if (null !== cb && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped) try {
            this.drawFrame(cb, bb)
          } catch (sb) {
            if (!this.stopIfTrapped(sb) && (this.stop(), (0, Nb.o)(sb))) return void this.deps.onRenderFailed("frames_refused", sb);
            console.warn(`${Ob} the previews stopped: their frame threw`, sb)
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
        var bb, cb;
        return null !== (bb = null === (cb = this.host) || void 0 === cb ? void 0 : cb.attached()) && void 0 !== bb && bb
      }
      get open() {
        return this.previews.size
      }
      get frameCostMs() {
        return 0 === this.costs.length ? 0 : this.costs.reduce(((bb, cb) => bb + cb), 0) / this.costs.length
      }
      async bindSession(bb, cb, sb) {
        const kb = this.binding,
          Wb = this.sessionEnds;
        try {
          const ab = this.hostOf(bb);
          if (!ab.kTb()) {
            const cb = (0, yb.d)().sampleCount,
              Tb = await sb(cb);
            if (this.sessionEnds !== Wb) return this.keepRendererOfEndedSession(bb, ab, Tb, cb, kb), cb;
            if (!ab.zab(Tb)) throw new Error("the page has a renderer already");
            (0, Bb.v)(performance.now()), this.samples = cb, (0, Pb.h)((0, Nb.h)(bb))
          }
          if (!ab.attach(cb)) throw new Error("the page's renderer is lent to another session");
          return this.samples
        } finally {
          this.binding === kb && this.endBinding()
        }
      }
      keepRendererOfEndedSession(bb, cb, sb, kb, Wb) {
        if (!this.lastEndReturned || null !== this.binding && this.binding !== Wb) try {
          sb.free()
        } catch (ab) {
          console.warn(`${Ob} an ended session's renderer didn't free`, ab)
        } else cb.zab(sb) && ((0, Bb.v)(performance.now()), this.samples = kb, (0, Pb.h)(this.registryOf(bb)))
      }
      async beginSession() {
        var bb;
        let cb = () => {};
        const sb = new Promise((bb => {
          cb = bb
        }));
        this.binding = {
          done: sb,
          release: cb
        }, await (null === (bb = this.opening) || void 0 === bb ? void 0 : bb.catch((() => null)));
        const kb = this.pageCanvas;
        return this.pageCanvas = null, kb
      }
      endSession(bb) {
        var cb, sb;
        if (this.sessionEnds++, this.lastEndReturned = bb, this.endBinding(), bb) {
          try {
            var kb;
            null === (kb = this.host) || void 0 === kb || kb.detach()
          } catch (Wb) {
            return void console.warn(`${Ob} the session's core kept the page's renderer`, Wb)
          }!0 === (null === (cb = this.host) || void 0 === cb ? void 0 : cb.attached()) && console.warn(`${Ob} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (sb = this.host) || void 0 === sb ? void 0 : sb.kTb()) && (0, Pb.h)(this.registryOf(this.module))
        }
      }
      endBinding() {
        var bb;
        null === (bb = this.binding) || void 0 === bb || bb.release(), this.binding = null
      }
      async openPreview(bb, cb, sb, kb) {
        const Wb = await this.renderingHost(),
          ab = this.module;
        if (null === Wb || null === ab) throw new Error("this page can't draw previews: it has no renderer build");
        if (this.animations ??= this.loadAnimations(Wb), this.deps.pack.wanted(), this.isStopped) throw new Error("the previews stopped");
        this.guarded((() => {
          this.deps.provideBuiltInAnimationPack(ab)
        }));
        const Tb = this.nextId++,
          Ub = this.deps.createCanvas(),
          [Ib, Hb] = Rb(cb, sb, this.deps.dpr(), kb);
        Ub.width = Ib, Ub.height = Hb;
        if (!this.guarded((() => (ab.dWb(Tb, Ub), Wb.open(Tb, Ib, Hb, bb))))) throw this.hostCall(void 0, (() => {
          ab.AWb(Tb)
        })), new Error("the page's renderer is lent to a session that is running");
        this.restartModelsIfFailed();
        const fb = new jb(this, Wb, Tb, Ub, [Ib, Hb], this.deps);
        return this.previews.set(Tb, fb), this.startFrames(), fb
      }
      prefetch() {
        if (this.prefetched || this.isStopped || (0, Bb.e)() || null !== (0, Bb.E)()) return;
        this.prefetched = !0;
        (null === this.module ? this.loadModule() : Promise.resolve(this.module)).then((bb => {
          null === bb || this.isStopped || (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles())
        }), (() => {}))
      }
      modelFile(bb) {
        return this.prefetchedOr(bb, this.deps.fetchModel)
      }
      imageFile(bb) {
        return this.prefetchedOr(bb, kb.C)
      }
      prefetchedOr(bb, cb) {
        const sb = this.prefetchedFiles.get(bb);
        return void 0 === sb ? cb(bb) : sb.catch((() => cb(bb)))
      }
      async prefetchPlayerFiles() {
        const bb = this.deps.playerFile().then((bb => this.deps.files.url(bb))),
          cb = await Promise.all([bb, this.deps.images.lifeformAtlasUrl(Jb.e)]).catch((() => null));
        if (null === cb) return;
        const [sb, kb] = cb, Wb = (bb, cb) => {
          if (null === bb) return;
          const sb = cb(bb);
          this.prefetchedFiles.set(bb, sb), sb.catch((() => {
            this.prefetchedFiles.delete(bb)
          }))
        };
        Wb(sb, (bb => this.modelFile(bb))), Wb(kb, (bb => this.imageFile(bb)))
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
      buildModel(bb, cb) {
        return this.startModels(), this.models.then((sb => sb(bb, cb))).then((bb => this.unavailable ? new Promise((() => {})) : bb))
      }
      restartModelsIfFailed() {
        this.unavailable && !this.modelsRestarted && 0 === this.previews.size && (this.modelsRestarted = !0, this.models = null, this.unavailable = !1, this.startModels())
      }
      modelsFailed(bb) {
        this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${Ob} the model workers didn't start: models won't draw in the previews`, bb))
      }
      called(bb) {
        return 0 !== bb && this.logError(bb, 0), bb
      }
      closePreview(bb) {
        this.previews.delete(bb.id), null !== this.module && bb.dispose(this.module), 0 === this.previews.size && null !== this.frameId && (this.deps.cancelFrame(this.frameId), this.frameId = null)
      }
      hostOf(bb) {
        if (null !== this.module && this.module !== bb) throw new Error("a second renderer module on one page");
        return this.module = bb, null === this.host && (this.host = this.guarded((() => new bb.qWb)), this.tellInGame(), this.handOverShaderPack()), this.host
      }
      tellInGame() {
        const {
          host: bb
        } = this;
        null !== bb && this.outsideCall("the game's start or end", (() => {
          bb.ITb(this.deps.game.inGame())
        }))
      }
      handOverShaderPack() {
        const {
          host: bb,
          shaderPackArgs: cb
        } = this;
        null !== bb && null !== cb && this.outsideCall("the shader pack's hand-over", (() => {
          bb.Zsb(...cb) || console.warn(`${Ob} the host refused the shader pack: previews draw without it at home`)
        }))
      }
      outsideCall(bb, cb) {
        try {
          this.hostCall(void 0, cb)
        } catch (sb) {
          this.stop(), console.warn(`${Ob} the previews stopped: ${bb} threw`, sb)
        }
      }
      async loadAnimations(bb) {
        const cb = Tb(null),
          sb = this.module;
        try {
          cb.wasm = null === sb ? cb.wasm : this.hostCall(cb.wasm, (() => sb.EM()))
        } catch {}
        let kb, Wb;
        try {
          kb = await this.fetchAnimationTable()
        } catch (ab) {
          return void this.deps.onAnimationsFailed({
            stage: "fetch",
            error: ab
          }, cb)
        }
        if (!this.settleIfTrapped()) {
          try {
            Wb = bb.aTb(kb)
          } catch (ab) {
            if (this.stopIfTrapped(ab)) return;
            return void this.deps.onAnimationsFailed({
              stage: "decode",
              error: ab
            }, cb)
          }
          Wb || this.deps.onAnimationsFailed({
            stage: "decode",
            error: null
          }, cb)
        }
      }
      async renderingHost() {
        if (null !== this.binding && await this.binding.done, this.settleIfTrapped()) return null;
        const bb = this.host;
        return null !== bb && this.guarded((() => bb.kTb())) ? bb : (this.opening ??= this.openAtHome().finally((() => {
          this.opening = null
        })), this.opening)
      }
      async openAtHome() {
        var bb;
        const cb = null !== (bb = this.module) && void 0 !== bb ? bb : await this.loadModule();
        if (null === cb) return null;
        const sb = this.hostOf(cb),
          kb = () => this.guarded((() => sb.kTb()));
        if (kb()) return sb;
        if (null !== (0, Bb.E)() || (0, Bb.e)()) return null;
        const Wb = this.deps.createCanvas();
        Wb.width = 1, Wb.height = 1;
        const ab = await this.deps.openExtras();
        if (this.settleIfTrapped()) return null;
        const Tb = (0, yb.d)().sampleCount;
        let Ub;
        try {
          Ub = await (0, Nb.q)(cb, "previewRenderer", Wb, Tb, Db.c, ab)
        } catch (Ib) {
          throw Ib instanceof hb.e ? this.stopForTrap(Ib) : (0, Nb.p)(Ib) && await this.deps.onRenderFailed("start_failed", Ib), Ib
        }
        return this.guarded((() => sb.zab(Ub))) ? ((0, Bb.v)(performance.now()), this.samples = Tb, this.pageCanvas = Wb, (0, Pb.h)(this.registryOf(cb)), sb) : kb() ? sb : null
      }
      startFrames() {
        null !== this.frameId || this.isStopped || (this.frameId = this.deps.requestFrame(this.frame))
      }
      drawFrame(bb, cb) {
        for (const Tb of this.previews.values()) Tb.feed();
        if (this.stopped) return;
        const sb = this.deps.now(),
          kb = bb.frame(cb);
        this.costs.push(this.deps.now() - sb), this.costs.length > 120 && this.costs.shift();
        const Wb = 0 !== (256 & kb),
          ab = 255 & kb;
        for (const Tb of this.previews.values()) {
          if (this.stopped) return;
          Tb.collect(Wb)
        }
        if (!this.stopped) {
          if (Wb) {
            const cb = bb.XTb();
            for (let bb = 0; bb + 1 < cb.length; bb += 2) this.logError(cb[bb], cb[bb + 1])
          }
          if (ab === qb) return this.stop(), void this.deps.onRenderFailed("lost");
          if (ab === db) return this.stop(), void this.deps.onFatal(bb.bTb(), bb.cTb());
          if (ab === Ab) return this.stop(), void console.warn(`${Ob} the previews stopped: the page's renderer went with its session`);
          (0, Cb.c)(cb), this.startFrames()
        }
      }
      get isStopped() {
        return this.stopped || this.isTrapped
      }
      get isTrapped() {
        return null !== this.module && ((0, hb.j)(this.module) || "failed" === (0, mb.C)())
      }
      hostCall(bb, cb) {
        if (this.settleIfTrapped()) return bb;
        try {
          return cb()
        } catch (sb) {
          if (this.stopIfTrapped(sb)) return bb;
          throw sb
        }
      }
      guarded(bb) {
        if (this.settleIfTrapped()) throw new Error("the previews stopped: their module trapped");
        try {
          return bb()
        } catch (cb) {
          throw this.stopIfTrapped(cb), cb
        }
      }
      registryOf(bb) {
        return {
          Lsb: (cb, sb) => {
            this.hostCall(void 0, (() => {
              bb.Lsb(cb, sb)
            }))
          },
          Ysb: cb => {
            this.hostCall(void 0, (() => {
              bb.Ysb(cb)
            }))
          }
        }
      }
      settleIfTrapped() {
        return !!this.isTrapped && (this.stopped || (this.stop(), (0, Pb.h)(null)), !0)
      }
      stopIfTrapped(bb) {
        return !(null === this.module || !(0, hb.k)(this.module, bb)) && (this.stopForTrap(bb), !0)
      }
      stopForTrap(bb) {
        this.stop(), (0, Pb.h)(null), (0, ib.i)("previews", bb)
      }
      stop() {
        this.stopped = !0;
        for (const bb of this.previews.values()) bb.abandon()
      }
      logError(bb, cb) {
        const sb = `${bb}:${cb}`;
        this.loggedErrors.has(sb) || (this.loggedErrors.add(sb), console.warn(`${Ob} error ${bb} (detail ${cb})`))
      }
    }
    let bc = null;

    function cc() {
      return bc ??= new pb(function() {
        const bb = (0, ub.n)(eb.clientSideServerUrls.staticUrl, {
          packUrl: bb => {
            var cb, sb;
            return null !== (cb = null === (sb = Jb.h.current) || void 0 === sb ? void 0 : sb.modelUrl(bb)) && void 0 !== cb ? cb : null
          }
        });
        return {
          loadModule: xb,
          startModels: async bb => {
            const {
              pageModelPool: cb
            } = await sb.e(42).then((() => sb(42721))), {
              pool: kb
            } = cb(bb);
            return (bb, cb) => kb.build(bb, cb)
          },
          fetchAnimations: async () => Ub(await (0, kb.C)(vb())),
          playerFile: async () => (await (0, ub.m)()).PLAYER_FILE,
          onAnimationsFailed: (bb, cb) => {
            Ib("previewAnimations", vb(), bb, cb)
          },
          provideBuiltInAnimationPack: bb => {
            Xb().provide(bb)
          },
          openExtras: Bb.C,
          files: bb,
          images: (0, Jb.o)((0, Vb.p)(bb.url), (() => Jb.h.current)),
          pack: Jb.h,
          game: gb.b,
          fetchModel: bb => (0, ub.j)(bb),
          createCanvas: () => document.createElement("canvas"),
          dpr: () => window.devicePixelRatio,
          now: () => performance.now(),
          requestFrame: bb => requestAnimationFrame(bb),
          cancelFrame: bb => {
            cancelAnimationFrame(bb)
          },
          onRenderFailed: Fb,
          onFatal: (bb, cb) => {
            console.error(`${Ob} the previews stopped: renderer error ${bb} (detail ${cb})`)
          }
        }
      }()), bc
    }
    var sc = sb(620),
      kc = sb(38240),
      Wc = sb(3050);
    const ac = {
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
    const Tc = "[bloxd-previews]",
      Uc = new Uint32Array(5);

    function Ic(bb) {
      return sc.m.indexOf(bb)
    }
    const Hc = new WeakSet;

    function fc(bb) {
      const cb = (0, kc.f)(bb),
        sb = null === cb ? -1 : Mc(cb);
      return -1 !== sb ? sb : (Hc.has(bb) || (Hc.add(bb), console.warn(`${Tc} an animation the previews' table lacks: the mob idles instead`)), -1)
    }

    function Mc(bb) {
      var cb;
      return null !== (cb = ac[bb]) && void 0 !== cb ? cb : -1
    }

    function Xc(bb, cb) {
      const {
        canvas: sb
      } = cb;
      sb.style.width = "100%", sb.style.height = "100%", sb.style.display = "block", bb.appendChild(sb)
    }

    function nc(bb) {
      const cb = bb.getBoundingClientRect();
      return [cb.width, cb.height]
    }
    class mc {
      constructor(bb, cb) {
        this.preview = bb, this.showView = cb
      }
      show(bb) {
        this.showView(this.preview, bb)
      }
      resize(bb, cb) {
        this.preview.resize(bb, cb)
      }
      close() {
        this.preview.close()
      }
    }
    class lc {
      constructor(bb) {
        this.preview = bb, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.detachControls = void 0, this.detachControls = function(bb) {
          const {
            canvas: cb
          } = bb;
          let sb = null;
          const kb = bb => {
              var kb;
              sb = {
                pointer: bb.pointerId,
                x: bb.clientX,
                y: bb.clientY
              }, null === (kb = cb.setPointerCapture) || void 0 === kb || kb.call(cb, bb.pointerId)
            },
            Wb = cb => {
              var kb;
              const Wb = bb.orbit;
              if ((null === (kb = sb) || void 0 === kb ? void 0 : kb.pointer) !== cb.pointerId || null === Wb) return;
              const ab = cb.clientX - sb.x,
                Tb = cb.clientY - sb.y;
              sb = {
                ...sb,
                x: cb.clientX,
                y: cb.clientY
              }, bb.setOrbit({
                alpha: Wb.alpha - .01 * ab,
                beta: Math.min(Math.PI - .01, Math.max(.01, Wb.beta - .01 * Tb)),
                radius: Wb.radius
              })
            },
            ab = bb => {
              var cb;
              (null === (cb = sb) || void 0 === cb ? void 0 : cb.pointer) === bb.pointerId && (sb = null)
            },
            Tb = cb => {
              const sb = bb.orbit;
              if (null === sb) return;
              cb.preventDefault();
              const kb = cb.deltaY * (cb.deltaMode === WheelEvent.DOM_DELTA_LINE ? 40 : cb.deltaMode === WheelEvent.DOM_DELTA_PAGE ? 800 : 1),
                Wb = Math.min(100, Math.max(5, sb.radius + .08 * kb));
              bb.setOrbit({
                ...sb,
                radius: Wb
              })
            };
          return cb.style.touchAction = "none", cb.addEventListener("pointerdown", kb), cb.addEventListener("pointermove", Wb), cb.addEventListener("pointerup", ab), cb.addEventListener("pointercancel", ab), cb.addEventListener("wheel", Tb, {
            passive: !1
          }), () => {
            cb.removeEventListener("pointerdown", kb), cb.removeEventListener("pointermove", Wb), cb.removeEventListener("pointerup", ab), cb.removeEventListener("pointercancel", ab), cb.removeEventListener("wheel", Tb)
          }
        }(bb), this.dev = {
          canvas: () => bb.canvas,
          isolateHead: () => {
            console.warn(`${Tc} isolateHead: noa's character preview only`)
          }
        }, this.apply(), this.ready = bb.untilSettled().then((() => {
          if (bb.isStopped) throw new Error(`${Tc} the previews stopped before the character drew`);
          this.built = !0
        }))
      }
      isReady() {
        return this.built && !this.preview.isClosed
      }
      setCosmetic(bb, cb) {
        this.cosmetics[bb] = cb, this.apply()
      }
      playEmote(bb) {
        null === bb || bb !== this.emote ? (this.emote = bb, this.apply()) : this.preview.replay()
      }
      untilDrawn(bb) {
        return this.preview.untilSettled()
      }
      setOrbit(bb) {
        let {
          yaw: cb,
          pitch: sb,
          radius: kb
        } = bb;
        const Wb = this.preview.orbit;
        null !== Wb && this.preview.setOrbit({
          alpha: cb,
          beta: sb,
          radius: null !== kb && void 0 !== kb ? kb : Wb.radius
        })
      }
      resetCamera() {}
      resize(bb, cb) {
        this.preview.resize(bb, cb)
      }
      close() {
        this.detachControls(), this.preview.close()
      }
      apply() {
        var bb;
        this.preview.setPlayer(JSON.stringify(this.cosmetics), Uc, null === (bb = this.emote) ? -1 : Mc(bb))
      }
    }

    function Qc(bb, cb) {
      let {
        mobType: sb,
        variation: kb,
        animation: Wb
      } = cb;
      bb.setMob(Ic(sb), null !== kb && void 0 !== kb ? kb : "", 1, fc(Wb))
    }

    function ec(bb, cb) {
      let {
        mobType: sb,
        variation: kb,
        metaInfo: Wb,
        tamed: ab
      } = cb;
      bb.setPet(Ic(sb), kb, Wb, ab)
    }
    const Cc = {
      aimed: .533 / 1.15 * 1.1,
      ready: .16 / .85 * 1.1
    };
    class Nc {
      constructor(bb, cb, sb, kb) {
        this.preview = null, this.closed = !1, this.figure = null, this.shown = !1, this.order = "", this.span = {
          left: 0,
          width: 0
        }, this.lineup = [0, 0], this.given = null, this.loaded = !1, bb(sb.width, kb[1], kb).then((bb => {
          if (this.closed) return void bb.close();
          const {
            style: sb
          } = bb.canvas;
          sb.position = "absolute", sb.top = "0", sb.visibility = "hidden", Xc(cb, bb), this.preview = bb, this.apply()
        })).catch((bb => {
          console.error(`${Tc} couldn't open a lineup figure`, bb)
        }))
      }
      update(bb, cb, sb, kb, Wb) {
        this.figure = bb, this.shown = cb, this.order = sb, this.span = kb, this.lineup = Wb, this.apply()
      }
      close() {
        var bb;
        this.closed = !0, null === (bb = this.preview) || void 0 === bb || bb.close(), this.preview = null
      }
      apply() {
        const {
          preview: bb,
          figure: cb,
          lineup: sb
        } = this;
        if (null === bb || null === cb) return;
        if (this.given !== cb) {
          var kb;
          this.given = cb, this.loaded = !1;
          const sb = null === cb.VV ? 0 : null !== (kb = (0, Wc.b)(cb.VV)) && void 0 !== kb ? kb : 0;
          bb.setFigure(function(bb) {
            return JSON.stringify(Object.fromEntries(bb.cosmetics))
          }(cb), sb, fc(cb.animation), cb.size), bb.untilSettled().then((() => {
            this.given === cb && (this.loaded = !0, this.apply())
          }))
        }
        const {
          left: Wb,
          width: ab
        } = this.span;
        bb.resize(ab, sb[1], sb);
        const {
          style: Tb
        } = bb.canvas;
        Tb.left = `${Wb}px`, Tb.width = `${ab}px`, Tb.zIndex = this.order, Tb.visibility = this.shown && this.loaded ? "visible" : "hidden"
      }
    }
    class Vc {
      constructor(bb, cb) {
        this.open = cb, this.layer = void 0, this.figures = [], this.view = {
          figures: [],
          shown: []
        }, this.size = void 0, this.size = nc(bb), this.layer = document.createElement("div");
        const {
          style: sb
        } = this.layer;
        sb.position = "relative", sb.isolation = "isolate", sb.overflow = "hidden", sb.width = "100%", sb.height = "100%", sb.pointerEvents = "none", bb.appendChild(this.layer)
      }
      show(bb) {
        this.view = bb, this.place()
      }
      resize(bb, cb) {
        this.size = [bb, cb], this.place()
      }
      close() {
        for (const bb of this.figures) bb.close();
        this.figures = [], this.layer.remove()
      }
      place() {
        const {
          figures: bb,
          shown: cb
        } = this.view;
        for (const kb of this.figures.splice(bb.length)) kb.close();
        const {
          size: sb
        } = this;
        bb.forEach(((kb, Wb) => {
          var ab;
          const Tb = function(bb, cb, sb, kb) {
            let [Wb, ab] = kb;
            const Tb = (bb + .5) * Wb / cb,
              Ub = Math.min(Math.max(Wb / cb, 2 * sb * ab), 2 * Math.max(Tb, Wb - Tb));
            return {
              left: Tb - Ub / 2,
              width: Ub
            }
          }(Wb, bb.length, function(bb) {
            let {
              animation: cb,
              size: sb
            } = bb;
            const {
              aimed: kb,
              ready: Wb
            } = Cc;
            return (fc(cb) === ac.gunAimed ? kb : Wb) * sb
          }(kb), sb);
          this.figures[Wb] ??= new Nc(this.open, this.layer, Tb, sb), this.figures[Wb].update(kb, null !== (ab = cb[Wb]) && void 0 !== ab && ab, function(bb, cb) {
            return String(Math.round(1e3 * bb) + cb)
          }(kb.size, Wb), Tb, sb)
        }))
      }
    }
    const Lc = {
      player: Zb,
      store: zb
    };
    class uc {
      constructor(bb) {
        this.page = bb
      }
      async openMob(bb) {
        return new mc(await this.open(bb, Kb), Qc)
      }
      async openPet(bb) {
        return new mc(await this.open(bb, Kb), ec)
      }
      openMobLineup(bb) {
        return new Vc(bb, ((bb, cb, sb) => this.page.openPreview(Kb, bb, cb, sb)))
      }
      async openCharacter(bb, cb) {
        return new lc(await this.open(bb, Lc[cb]))
      }
      async open(bb, cb) {
        const [sb, kb] = nc(bb), Wb = await this.page.openPreview(cb, sb, kb);
        return Xc(bb, Wb), Wb
      }
    }
  },
  36351: (bb, cb, sb) => {
    sb.d(cb, {
      B: () => lb,
      D: () => eb,
      b: () => kb,
      f: () => Wb,
      i: () => Xb,
      l: () => Qb,
      o: () => fb,
      s: () => Cb,
      t: () => Ib,
      u: () => Hb,
      w: () => nb,
      y: () => mb
    });
    const kb = [{
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

    function Wb(bb, cb) {
      const {
        numLines: sb,
        charsPerLine: Wb
      } = kb[cb];
      return Nb(bb, sb, Wb, !1)
    }
    const ab = 7 / 8,
      Tb = .25,
      Ub = 8;

    function Ib(bb, cb) {
      return {
        width: Math.min(bb, Ub) - 2 * Tb,
        height: Math.min(cb, Ub) - 2 * Tb
      }
    }

    function Hb(bb, cb, sb) {
      const Wb = Ib(bb, cb),
        {
          numLines: Tb,
          charsPerLine: Ub
        } = kb[sb];
      return {
        numLines: Math.max(1, Math.floor(Tb / ab * Wb.height)),
        charsPerLine: Math.max(1, Math.floor(Ub * Wb.width))
      }
    }

    function fb(bb, cb, sb, kb) {
      const {
        numLines: Wb,
        charsPerLine: ab
      } = Hb(sb, kb, cb);
      return Nb(bb, Wb, ab, !1)
    }
    const Mb = 32e3;

    function Xb(bb) {
      return bb.slice(0, Mb)
    }
    const nb = 512e3,
      mb = 64,
      lb = nb;

    function Qb(bb, cb) {
      const sb = Math.max(0, lb - cb),
        kb = Math.min(nb, sb);
      return bb.slice(0, kb)
    }
    const eb = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      KU: {
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

    function Cb(bb, cb) {
      const {
        numLines: sb,
        charsPerLine: kb
      } = eb[cb];
      return Nb(bb, sb, kb, !1)
    }

    function Nb(bb, cb, sb, kb, Wb) {
      (Wb || kb) && (bb = bb.slice(0, null !== Wb && void 0 !== Wb ? Wb : cb * sb));
      const ab = bb.split("\n");
      if (ab.length > cb && ab.splice(cb, ab.length - cb), !kb)
        for (let Tb = 0; Tb < ab.length; Tb++) {
          const bb = ab[Tb];
          bb.length > sb && (ab[Tb] = bb.substring(0, sb), ab.length < cb && ab.splice(Tb + 1, 0, bb.substring(sb)))
        }
      return ab.join("\n")
    }
  },
  42641: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/builtInAnimations.anim.38e056f49512e10b7206.gz"
  },
  42650: (bb, cb, sb) => {
    bb.exports = sb.p + "static/media/previewAnimations.dat.24d2343c38c8f9b3fb85.gz"
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);