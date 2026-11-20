export const id = 57;
export const ids = [57];
export const modules = {
  38250: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ob,
      e: () => Gb
    });
    const Bb = new WeakMap;

    function Ob(bb, ub) {
      return Bb.set(bb, ub), bb
    }

    function Gb(bb) {
      var ub;
      return null !== (ub = Bb.get(bb)) && void 0 !== ub ? ub : null
    }
  },
  38277: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Lb
    });
    var Bb = hb(1124);

    function Ob(bb) {
      const ub = /(\d*\.?\d+)px/.exec(bb);
      return ub ? Number(ub[1]) : null
    }

    function Gb(bb) {
      return bb.split(/[\s,]+/).pop()
    }
    let Ub = !1;
    const Lb = {
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
      drawText: function(bb, ub, Bb, Lb, Yb, Sb) {
        if (Yb <= 0 || Sb <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: ab,
          fontVariant: Hb,
          fontWeight: wb,
          fontSize: Zb,
          font: Xb
        } = this, pb = [ab, Hb, wb, `${Zb}px`, Xb].filter(Boolean).join(" "), ob = [
          [wb, `${Zb}px`, Gb(Xb)].filter(Boolean).join(" "), `${Zb}px sans-serif`
        ], Ab = bb.font, lb = function(bb, ub, hb) {
          for (const Bb of ub) {
            bb.font = Bb;
            const ub = Ob(bb.font),
              Ub = Gb(Bb);
            if (null !== ub && Math.abs(ub - hb) <= .5 && bb.font.toLowerCase().includes(Ub.toLowerCase())) return Bb
          }
          return null
        }(bb, [pb, ...ob], Zb);
        lb !== pb && function(bb, ub, Bb) {
          Ub || (Ub = !0, Promise.resolve().then((() => hb(981))).then((hb => {
            let {
              cX: Ob
            } = hb;
            Ob(new Error("A canvas didn't take canvasTxt's font"), {
              font: bb,
              HZ: ub,
              drawnWith: null !== Bb && void 0 !== Bb ? Bb : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(pb, Ab, lb);
        const Kb = Ob(bb.font);
        if (null === lb && null !== Kb && Kb > 0) {
          const hb = Zb / Kb;
          bb.save();
          try {
            return bb.scale(hb, hb), {
              height: this.drawLines(bb, ub, Bb / hb, Lb / hb, Yb / hb, Sb / hb, Kb).height * hb
            }
          } finally {
            bb.restore()
          }
        }
        return this.drawLines(bb, ub, Bb, Lb, Yb, Sb, Zb)
      },
      drawLines: function(bb, ub, hb, Ob, Gb, Ub, Lb) {
        const Yb = hb + Gb,
          Sb = Ob + Ub;
        let ab, Hb = Ob + Ub / 2 + Lb / 2;
        "right" === this.align ? (ab = Yb, bb.textAlign = "right") : "left" === this.align ? (ab = hb, bb.textAlign = "left") : (ab = hb + Gb / 2, bb.textAlign = "center");
        for (const Bb of ub) {
          bb.measureText(Bb).width >= Gb && (ub = ub.replace(Bb, ""))
        }
        ub = (0, Bb.cb)(ub);
        const wb = [],
          Zb = ub.split("\n"),
          Xb = this.justify ? bb.measureText("\u200a").width : 0;
        Zb.forEach((ub => {
          let hb = bb.measureText(ub).width;
          if (hb <= Gb) wb.push(ub);
          else {
            let Bb = ub;
            const Ob = Gb;
            let Ub, Lb, Yb;
            for (hb = bb.measureText(Bb).width; hb > Ob;) {
              for (Ub = 0, Lb = 0, Yb = ""; Lb < Ob;) Ub++, Yb = Bb.substr(0, Ub), Lb = bb.measureText(Yb).width;
              Ub--, Yb = Yb.substr(0, Ub);
              const ub = Ub;
              if (" " !== Bb.substr(Ub, 1)) {
                for (;
                  " " !== Bb.substr(Ub, 1) && 0 !== Ub;) Ub--;
                0 === Ub && (Ub = ub), Yb = Bb.substr(0, Ub)
              }
              Yb = this.justify ? this.justifyLine(bb, Yb, Xb, "\u200a", Gb) : Yb, Bb = Bb.substr(Ub), hb = bb.measureText(Bb).width, wb.push(Yb)
            }
            hb > 0 && wb.push(Bb)
          }
        }));
        const pb = this.lineHeight ? this.lineHeight : this.getTextHeight(bb, ub),
          ob = pb * (wb.length - 1),
          Ab = ob / 2;
        let lb = Ob;
        "top" === this.vAlign ? Hb = Ob + Lb : "bottom" === this.vAlign ? (Hb = Sb - ob, lb = Sb) : (lb = Ob + Ub / 2, Hb -= Ab), wb.forEach((ub => {
          ub = ub.trim(), bb.fillText(ub, ab, Hb), Hb += pb
        })), this.debug && (bb.lineWidth = 3, bb.strokeStyle = "#00909e", bb.strokeRect(hb, Ob, Gb, Ub), bb.lineWidth = 2, bb.strokeStyle = "#f6d743", bb.beginPath(), bb.moveTo(ab, Ob), bb.lineTo(ab, Sb), bb.stroke(), bb.strokeStyle = "#ff6363", bb.beginPath(), bb.moveTo(hb, lb), bb.lineTo(Yb, lb), bb.stroke());
        return {
          height: ob + pb
        }
      },
      getTextHeight: function(bb, ub) {
        const hb = bb.textBaseline;
        bb.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: Bb
        } = bb.measureText(ub);
        return bb.textBaseline = hb, Bb
      },
      justifyLine: function(bb, ub, hb, Bb, Ob) {
        const Gb = ub.trim(),
          Ub = bb.measureText(Gb).width,
          Lb = Gb.split(/\s+/).length - 1,
          Yb = Math.floor((Ob - Ub) / hb);
        if (Lb <= 0 || Yb <= 0) return Gb;
        const Sb = Math.floor(Yb / Lb);
        let ab = Yb - Lb * Sb,
          Hb = [];
        for (let wb = 0; wb < Sb; wb++) Hb.push(Bb);
        Hb = Hb.join("");
        return Gb.replace(/\s+/g, (bb => {
          const ub = ab > 0 ? Hb + Bb : Hb;
          return ab--, bb + ub
        }))
      }
    }
  },
  38286: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => pb,
      d: () => Xb,
      g: () => wb,
      j: () => ab,
      k: () => Hb
    });
    var Bb = hb(4013),
      Ob = hb(314);
    const Gb = 1024,
      Ub = 1536,
      Lb = 2 * Bb.i + 1,
      Yb = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      Sb = 1.5;

    function ab(bb, ub, hb) {
      if ("string" !== typeof bb) return ub;
      try {
        const hb = JSON.parse(bb);
        return hb && "object" === typeof hb ? hb : ub
      } catch (Bb) {
        return void 0 !== hb && console.error(`Couldn't parse ${hb}`, Bb), ub
      }
    }

    function Hb(bb) {
      return ab(bb, null, "a leaderboard's rows")
    }

    function wb(bb, ub) {
      var hb, Bb;
      return null !== ub && void 0 !== ub ? ub : {
        status: null !== (hb = bb.status) && void 0 !== hb ? hb : "loading",
        entries: null !== (Bb = bb.entries) && void 0 !== Bb ? Bb : []
      }
    }

    function Zb(bb, ub) {
      return "number" === typeof bb && Number.isFinite(bb) && bb > 0 ? bb : ub
    }

    function Xb(bb, ub) {
      const hb = Zb(bb.size, 1);
      let Bb = Zb(bb.width, Zb(2.5 * hb, 2.5)),
        Ob = Zb(bb.height, Zb(3.75 * hb, 3.75));
      Number.isFinite(Gb * Ob / Bb) && Number.isFinite(Ub * Bb / Ob) || (Bb = 2.5, Ob = 3.75);
      const Lb = Ob / Bb,
        Yb = Math.max(1, Math.min(Gb, ub / Lb));
      return {
        width: Bb,
        height: Ob,
        layoutWidth: Math.max(Gb, Ub / Lb),
        layoutHeight: Math.max(Ub, Gb * Lb),
        pixelWidth: Math.round(Yb),
        pixelHeight: Math.round(Math.max(1, Math.min(ub, Yb * Lb)))
      }
    }

    function pb(bb, ub, hb, Ub, ab, Hb) {
      bb.setTransform(1, 0, 0, 1, 0, 0), bb.fillStyle = Ob.I.defaultNameTagBackground, bb.fillRect(0, 0, ub, hb), bb.scale(ub / Ub.layoutWidth, hb / Ub.layoutHeight), bb.translate((Ub.layoutWidth - Gb) / 2, 0),
        function(bb, ub, hb, Gb) {
          var Ub, ab, Hb, wb;
          const {
            top: Zb,
            around: Xb,
            showPlayerText: pb,
            localPlayerDbId: lb
          } = hb, {
            whiteUiText: Kb,
            grayUiText: Wb,
            yellowUiText: Cb
          } = Ob.I;
          bb.textBaseline = "middle";
          const db = function(ub, hb, Bb, Ob, Gb, Ub) {
              let Lb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              bb.font = `bold ${Ob}px 'Jetbrains Mono', monospace`, bb.fillStyle = Gb, bb.textAlign = Lb;
              let Yb = ub.replace(/[\r\n\t]/g, " ");
              if (bb.measureText(Yb).width > Ub) {
                for (; Yb.length > 0 && bb.measureText(`${Yb}\u2026`).width > Ub;) Yb = Yb.slice(0, -1);
                Yb += "\u2026"
              }
              bb.fillText(Yb, hb, Bb)
            },
            rb = ub => {
              bb.fillStyle = Kb, bb.globalAlpha = .15, bb.fillRect(24, ub, 976, 2), bb.globalAlpha = 1
            },
            jb = null === lb ? null : (0, Ob.qc)(lb),
            nb = bb => null !== jb && bb.playerHash === jb,
            Db = ob(Zb.entries, Bb.k),
            xb = "ready" === Zb.status && Db.length > 0,
            zb = null === Xb ? [] : ob(Xb.entries, Lb),
            gb = Db.some(nb),
            ib = null === Xb ? null : function(bb) {
              const ub = bb;
              if (!ub || !Number.isFinite(ub.rank) || !Number.isFinite(ub.tied) || !Number.isFinite(ub.total)) return null;
              return ub
            }(Xb.standing),
            vb = zb.find(nb),
            tb = Db.find(nb),
            Jb = null === ib || void 0 === vb ? null : {
              value: vb.value,
              rank: ib.rank
            },
            eb = Ab(Db, void 0 === tb || tb.value === (null === Jb || void 0 === Jb ? void 0 : Jb.value) ? Jb : null),
            Nb = Ab(zb, Jb),
            sb = (bb, ub) => {
              const hb = bb.findIndex(nb);
              return hb >= 0 ? ub[hb] : null
            },
            Mb = null !== (Ub = null !== (ab = null === ib || void 0 === ib ? void 0 : ib.rank) && void 0 !== ab ? ab : sb(zb, Nb)) && void 0 !== Ub ? Ub : sb(Db, eb);
          bb.font = "bold 34px 'Jetbrains Mono', monospace";
          const mb = [...xb ? eb : [], ...gb ? [] : Nb],
            Ib = Math.min(280, Math.max(0, ...mb.map((ub => bb.measureText(Yb.format(ub)).width)))),
            Pb = Ib <= 80,
            qb = Pb ? 80 : 32 + Ib,
            Eb = Pb ? 148 : qb + 28,
            yb = 660 - Eb;
          db(`TOP ${Bb.k}  /  ALL TIME`, 24, 52, 28, Wb, 976), db(pb ? String(null !== (Hb = ub.title) && void 0 !== Hb ? Hb : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, Kb, 976), db("RANK", 32, 174, 28, Wb, Eb - 40), db("PLAYER", Eb, 174, 28, Wb, yb), db(pb ? String(null !== (wb = ub.scoreLabel) && void 0 !== wb ? wb : "Score").slice(0, 24) : "Score", 992, 174, 28, Wb, 304, "right"), rb(202);
          const Vb = (Gb - 232) / (Bb.k + Sb + Lb),
            Fb = 208 + Bb.k * Vb,
            fb = Fb + Sb * Vb,
            kb = (ub, hb, Bb, Ob) => {
              const Gb = nb(ub);
              bb.fillStyle = Gb ? Cb : Kb, bb.globalAlpha = Gb ? .15 : Ob ? .035 : 0, bb.fillRect(24, Bb - Vb / 2 + 1, 976, Vb - 2), bb.globalAlpha = 1;
              const Ub = Gb ? Cb : Kb;
              db(Yb.format(hb), qb, Bb, 34, Ub, Pb ? 80 : Ib, Pb ? "center" : "right"), db(pb ? String(ub.name).slice(0, 64) : "Player", Eb, Bb, 34, Ub, yb);
              const Lb = Yb.format(ub.value);
              db(bb.measureText(Lb).width > 304 ? ub.value.toExponential(6) : Lb, 992, Bb, 34, Ub, 304, "right")
            };
          if (xb)
            for (const [Bb, Ob] of Db.entries()) kb(Ob, eb[Bb], 208 + (Bb + .5) * Vb, Bb % 2 === 0);
          else {
            const bb = "error" === Zb.status,
              ub = bb ? "Couldn't load leaderboard" : "ready" === Zb.status ? "No scores yet" : "Loading leaderboard\u2026",
              hb = bb ? "Trying again shortly" : "ready" === Zb.status ? "Be the first on the board!" : "Fetching the top players",
              Bb = (208 + Fb) / 2;
            db(ub, 512, Bb - 28, 40, bb ? Ob.I.redUiText : Kb, 960, "center"), db(hb, 512, Bb + 27, 30, Wb, 960, "center")
          }
          const Tb = Fb + Sb * Vb / 2;
          if (null === Mb) rb(Tb);
          else {
            const ub = null === ib ? 0 : ib.tied - 1,
              hb = `YOUR RANK #${Yb.format(Mb)}${null===ib?"":` of ${Yb.format(ib.total)}`}`;
            bb.font = "bold 36px 'Jetbrains Mono', monospace";
            const Bb = Math.max(20, Math.min(36, Math.floor(34560 / bb.measureText(hb).width)));
            db(hb, 512, Tb - (ub > 0 ? 15 : 0), Bb, Cb, 960, "center"), ub > 0 && db(`Tied with ${Yb.format(ub)} other${1===ub?"":"s"}`, 512, Tb + 24, 24, Wb, 960, "center")
          }
          if (null === Xb) return;
          const cb = fb + Lb * Vb / 2;
          if (gb) db(`You're in the top ${Bb.k}!`, 512, cb, 40, Cb, 960, "center");
          else if (0 === zb.length) db("You're not on this board yet", 512, cb, 34, Wb, 960, "center");
          else
            for (const [Bb, Ob] of zb.entries()) kb(Ob, Nb[Bb], fb + (Bb + .5) * Vb, Bb % 2 === 0)
        }(bb, ab, Hb, Ub.layoutHeight)
    }

    function ob(bb, ub) {
      return Array.isArray(bb) ? bb.slice(0, ub).filter((bb => bb && Number.isFinite(bb.rank) && Number.isFinite(bb.value))) : []
    }

    function Ab(bb, ub) {
      const hb = [];
      let Bb = !1;
      return bb.forEach(((Ob, Gb) => {
        if (null !== ub && Ob.value === ub.value) return void hb.push(ub.rank);
        const Ub = Gb > 0 && Ob.value === bb[Gb - 1].value;
        Ub || (Bb = 0 === Gb && 1 !== Ob.rank), hb.push(Ub && !Bb ? hb[Gb - 1] : Ob.rank)
      })), hb
    }
  },
  38491: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ob,
      e: () => Gb
    });
    const Bb = 32;

    function Ob(bb) {
      return Array.from(bb).length
    }

    function Gb(bb) {
      const ub = [""];
      let hb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Ob = "";
      const Gb = () => {
        ub.push(""), hb = 0, Ob = ""
      };
      for (const Ub of bb.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(Ub)) Gb();
        else if (/^\s+$/.test(Ub)) Ob += Ub;
      else if (Ub.length > 0) {
        const bb = Array.from(Ub);
        hb > 0 && hb + Ob.length + bb.length > Bb && Gb(), ub[ub.length - 1] += Ob, hb += Ob.length, Ob = "";
        for (const Ob of bb) hb >= Bb && Gb(), ub[ub.length - 1] += Ob, hb++
      }
      return ub[ub.length - 1] += Ob, ub
    }
  },
  42687: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      WasmPreviewHost: () => ru,
      pageBuiltInAnimationPack: () => wb,
      pagePreviews: () => hu,
      previewModule: () => fb
    });
    var Bb = hb(2688),
      Ob = hb(595);
    const Gb = "[bloxd-wasm-client]";

    function Ub(bb) {
      const ub = {
        wasm: "unknown",
        client: String(Ob.b)
      };
      try {
        var hb;
        ub.wasm = null !== (hb = null === bb || void 0 === bb ? void 0 : bb.OH()) && void 0 !== hb ? hb : ub.wasm
      } catch {}
      return ub
    }
    async function Lb(bb) {
      if (bb.length < 2 || 31 !== bb[0] || 139 !== bb[1]) return bb;
      if ("undefined" === typeof DecompressionStream) {
        const {
          ungzip: ub
        } = await Promise.resolve().then((() => hb(2641)));
        return ub(bb)
      }
      const ub = new Blob([bb]).stream().pipeThrough(new DecompressionStream("gzip"));
      return new Uint8Array(await new Response(ub).arrayBuffer())
    }

    function Yb(bb, ub, Bb, Ob) {
      Promise.resolve().then((() => hb(40369))).then((hb => {
        let {
          reportDataLoadFailure: Gb
        } = hb;
        Gb(bb, ub, Bb, Ob)
      }), (ub => {
        console.warn(`${Gb} ${bb} didn't load, and the report couldn't be sent`, Bb.error, ub)
      }))
    }
    const Sb = [3e4, 12e4, 3e5];
    class ab {
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
        const ub = Ub(bb),
          hb = await async function(bb, ub) {
            let hb;
            try {
              hb = await bb()
            } catch (Bb) {
              return {
                stage: "fetch",
                error: Bb
              }
            }
            try {
              return ub(hb) ? null : {
                stage: "decode",
                error: null
              }
            } catch (Bb) {
              return {
                stage: "decode",
                error: Bb
              }
            }
          }((() => this.deps.fetch()), (ub => {
            const hb = bb.lGb(ub);
            return hb && this.resolveSet(ub), hb
          }));
        if (null !== hb) {
          if ("fetch" === hb.stage) {
            this.loading = null;
            const ub = Sb[this.retries++];
            void 0 !== ub && this.deps.later((() => {
              this.provide(bb)
            }), ub)
          }
          this.reported || (this.reported = !0, this.deps.onFailed(hb, ub))
        }
      }
    }
    let Hb = null;

    function wb() {
      return Hb ??= new ab({
        fetch: async () => Lb(await (0, Bb.G)(Zb(), {
          priority: "low"
        })),
        onFailed: (bb, ub) => {
          Yb("builtInAnimations", Zb(), bb, ub)
        },
        later: (bb, ub) => {
          setTimeout(bb, ub)
        }
      }), Hb
    }

    function Zb() {
      return hb(42690)
    }
    var Xb = hb(2683),
      pb = hb(35948),
      ob = hb(40198),
      Ab = hb(1103),
      lb = hb(290),
      Kb = hb(599),
      Wb = hb(40212),
      Cb = hb(40435),
      db = (hb(40238), hb(40385)),
      rb = hb(40391),
      jb = hb(40398),
      nb = hb(40230),
      Db = hb(40461),
      xb = hb(40465),
      zb = hb(40256),
      gb = hb(40335),
      ib = hb(40338),
      vb = hb(40452),
      tb = hb(42006),
      Jb = hb(35925),
      eb = hb(3480);
    const Nb = "[bloxd-previews]",
      sb = 4e5,
      Mb = 0,
      mb = 1,
      Ib = 2,
      Pb = 1,
      qb = 2,
      Eb = 3,
      yb = 0,
      Vb = 1,
      Fb = 2;

    function fb(bb) {
      const ub = bb,
        hb = (0, Wb.J)(bb),
        Bb = (0, Wb.l)(bb);
      return null !== hb && null !== Bb && "function" === typeof ub.pGb && "function" === typeof ub.oGb && "function" === typeof ub.AGb ? ub : null
    }

    function kb(bb, ub, hb) {
      let [Bb, Ob] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [bb, ub], Gb = Math.min(Number.isFinite(hb) && hb > 0 ? hb : 1, 2);
      const Ub = Math.max(0, Bb, bb) * Math.max(0, Ob, ub) * Gb * Gb;
      return Ub > sb && (Gb *= Math.sqrt(sb / Ub)), [Math.max(1, Math.floor(Math.max(0, bb) * Gb)), Math.max(1, Math.floor(Math.max(0, ub) * Gb))]
    }

    function Tb() {
      return hb(42692)
    }
    async function cb(bb, ub) {
      "lost" === bb && (0, zb.u)();
      const Bb = await (0, zb.K)();
      if (null === Bb || (0, Wb.p)(Bb) || (0, zb.b)()) return;
      const Ob = "webgpu" === Bb.backend;
      if (!Ob && "lost" !== bb) return;
      const Gb = Ob ? (0, Wb.Q)(bb) : null;
      if (null !== Gb) {
        const hb = `WebGPU failed at home (${bb}${void 0===ub?"":`: ${ub instanceof Error?ub.message:(0,Jb.l)(ub)}`}) and ${Gb}`;
        return console.warn(`${Nb} ${hb}: the previews stop`, null !== ub && void 0 !== ub ? ub : ""), void(0, zb.p)(hb)
      }
      Ob || (0, Kb.g)(), (0, zb.l)();
      try {
        await async function(bb, ub, Bb) {
          var Ob;
          let {
            backend: Gb,
            adapter: Lb
          } = bb;
          const Yb = (0, Xb.M)(),
            {
              flushCrashReports: Sb,
              reportRenderReload: ab
            } = await Promise.resolve().then((() => hb(40369)));
          ab(Gb, "start_failed" === ub ? 0 : 1, Ub(Yb ? (0, Xb.B)() : null), {
            cause: ub,
            error: "lost" === ub && null !== (Ob = (0, Wb.X)(Yb ? (0, Wb.J)((0, Xb.B)()) : null)) && void 0 !== Ob ? Ob : Bb,
            context: {
              adapter: Lb,
              boundAtMs: "start_failed" === ub ? null : (0, zb.J)(),
              indirectHangs: (0, zb.y)()
            }
          }), await Sb(gb.d)
        }(Bb, bb, ub)
      } catch (Lb) {
        console.warn(`${Nb} ${Bb.backend} failed at home (${bb}), and its report couldn't be sent`, Lb)
      }(0, gb.i)()
    }
    async function Qb() {
      if (!(0, Xb.M)()) {
        const bb = await (0, zb.K)();
        if (null === bb || (0, Wb.p)(bb)) return null;
        if (await (0, pb.k)(await bb.load(), ob.g), !(0, Xb.M)()) return null
      }
      return fb((0, Xb.B)())
    }
    class Rb {
      constructor(bb, ub, hb, Bb, Ob, Gb) {
        this.page = bb, this.host = ub, this.id = hb, this.canvas = Bb, this.size = Ob, this.models = void 0, this.images = void 0, this.write = void 0, this.outcomes = [], this.closed = !1, this.quiet = 0, this.settled = [];
        const Ub = {
            ...Gb.images,
            glbUrl: bb => {
              var ub;
              return null !== (ub = this.models.drawnUrl(bb)) && void 0 !== ub ? ub : Gb.images.glbUrl(bb)
            }
          },
          Lb = ub => bb.modelFile(ub);
        this.images = new Cb.c(Ub, (bb => {
          console.warn(`${Nb} image ${bb.key.kind}:${bb.key.index}:${bb.key.word} failed`, bb.error)
        }), {
          fetchFile: Lb,
          fetchImage: ub => bb.imageFile(ub)
        }), bb.startModels(), this.models = new db.e(Gb.files, ((ub, hb) => bb.buildModel(ub, hb)), (bb => {
          console.warn(`${Nb} model file ${bb.file} (${bb.url}) failed`, bb.error)
        }), {
          fetchFile: Lb,
          onWritten: (bb, ub) => {
            this.images.glbWritten(bb, ub)
          },
          onTaken: (bb, ub) => {
            this.images.glbTaken(bb, ub)
          }
        }), this.write = (bb, ub, hb) => {
          if (this.closed) return !0;
          if (bb === db.b) {
            const bb = new DataView(hb.buffer, hb.byteOffset, jb.b),
              Bb = bb.getUint32(0, !0),
              Ob = bb.getUint32(jb.f, !0),
              Gb = this.page.hostCall(Fb, (() => this.host.WUb(this.id, Bb, ub, hb.subarray(jb.b))));
            return this.outcomes.push([Ob, Gb]), !0
          }
          return bb === Cb.b && (this.page.hostCall(void 0, (() => {
            this.host.dUb(this.id, hb)
          })), !0)
        }
      }
      get isClosed() {
        return this.closed
      }
      get isStopped() {
        return this.page.isStopped
      }
      resize(bb, ub, hb) {
        if (this.closed) return;
        const [Bb, Ob] = kb(bb, ub, this.page.dpr(), hb);
        Bb === this.size[0] && Ob === this.size[1] || (this.size = [Bb, Ob], this.page.hostCall(void 0, (() => {
          this.host.resize(this.id, Bb, Ob)
        })))
      }
      setMob(bb, ub, hb, Bb) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.xUb(this.id, bb, ub, hb, Bb))))
      }
      setPet(bb, ub, hb, Bb) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.gUb(this.id, bb, ub, hb, Bb))))
      }
      setPlayer(bb, ub, hb) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.jUb(this.id, bb, ub, hb))))
      }
      setFigure(bb, ub, hb, Bb) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.nUb(this.id, bb, ub, hb, Bb))))
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
          alpha: ub,
          beta: hb,
          radius: Bb
        } = bb;
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.zUb(this.id, ub, hb, Bb)
        }))
      }
      untilSettled() {
        return this.closed || this.page.isStopped ? Promise.resolve() : (this.quiet = 0, new Promise((bb => {
          this.settled.push(bb)
        })))
      }
      packChanged() {
        this.quiet = 0, this.models.refresh(), (0, Db.j)(this.images)
      }
      feed() {
        this.models.drain(this.write);
        for (const [bb, ub] of this.outcomes) {
          const hb = ub === yb ? [] : [ub === Vb ? bb : (bb | db.d) >>> 0];
          this.models.taken(bb, hb)
        }
        this.outcomes.length = 0, this.images.drain(this.write)
      }
      collect(bb) {
        let ub = !1;
        if (bb) {
          const bb = this.host.tUb(this.id);
          for (const ub of bb) this.models.request(ub);
          const hb = this.host.vUb(this.id);
          hb.length > 0 && this.images.onEvent(hb), ub = bb.length > 0 || hb.length > 0
        }
        const hb = this.page.modelsUnavailable ? 0 : this.models.asking + this.models.unanswered,
          Bb = ub || hb > 0 || this.images.waiting > 0 || this.images.inFlight > 0;
        this.quiet = Bb ? 0 : this.quiet + 1, this.quiet >= 3 && this.resolveSettled()
      }
      close() {
        this.closed || (this.closed = !0, this.page.closePreview(this), this.resolveSettled())
      }
      abandon() {
        this.resolveSettled()
      }
      dispose(bb) {
        this.page.hostCall(void 0, (() => {
          const ub = this.host.close(this.id);
          ub.length > 0 && this.images.onEvent(ub), this.page.isTrapped || bb.AGb(this.id)
        })), this.images.dispose(), this.canvas.remove()
      }
      resolveSettled() {
        const bb = this.settled;
        this.settled = [];
        for (const ub of bb) ub()
      }
    }
    class bu {
      constructor(bb) {
        this.deps = bb, this.module = null, this.host = null, this.opening = null, this.pageCanvas = null, this.samples = 1, this.binding = null, this.sessionEnds = 0, this.lastEndReturned = !0, this.previews = new Map, this.nextId = 1, this.frameId = null, this.stopped = !1, this.loggedErrors = new Set, this.modelsListener = {
          onUnavailable: bb => {
            this.modelsFailed(bb)
          },
          onDecoderFailed: bb => {
            this.loggedErrors.has("modelDecoder") || (this.loggedErrors.add("modelDecoder"), console.warn(`${Nb} the Draco decoder didn't load: models waiting on it won't draw`, bb))
          },
          onWorkerLost: bb => {
            this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${Nb} a model worker was lost: ${bb}`))
          },
          onModuleRetry: () => {}
        }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.vZ = {
          setShaderPack: (bb, ub, hb, Bb, Ob) => (this.shaderPackArgs = [bb, ub, hb, Bb, Ob], this.handOverShaderPack(), !0)
        }, this.frame = bb => {
          this.frameId = null;
          const ub = this.host;
          if (null !== ub && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped) try {
            this.drawFrame(ub, bb)
          } catch (hb) {
            if (!this.stopIfTrapped(hb) && (this.stop(), (0, Wb.s)(hb))) return void this.deps.onRenderFailed("frames_refused", hb);
            console.warn(`${Nb} the previews stopped: their frame threw`, hb)
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
        var bb, ub;
        return null !== (bb = null === (ub = this.host) || void 0 === ub ? void 0 : ub.attached()) && void 0 !== bb && bb
      }
      get open() {
        return this.previews.size
      }
      get frameCostMs() {
        return 0 === this.costs.length ? 0 : this.costs.reduce(((bb, ub) => bb + ub), 0) / this.costs.length
      }
      async bindSession(bb, ub, hb) {
        const Bb = this.binding,
          Ob = this.sessionEnds;
        try {
          const Gb = this.hostOf(bb);
          if (!Gb.CUb()) {
            const ub = (0, ib.f)().sampleCount,
              Ub = await hb(ub);
            if (this.sessionEnds !== Ob) return this.keepRendererOfEndedSession(bb, Gb, Ub, ub, Bb), ub;
            if (!Gb.UUb(Ub)) throw new Error("the page has a renderer already");
            (0, zb.s)(performance.now()), this.samples = ub, (0, vb.d)((0, Wb.l)(bb))
          }
          if (!Gb.attach(ub)) throw new Error("the page's renderer is lent to another session");
          return this.samples
        } finally {
          this.binding === Bb && this.endBinding()
        }
      }
      keepRendererOfEndedSession(bb, ub, hb, Bb, Ob) {
        if (!this.lastEndReturned || null !== this.binding && this.binding !== Ob) try {
          hb.free()
        } catch (Gb) {
          console.warn(`${Nb} an ended session's renderer didn't free`, Gb)
        } else ub.UUb(hb) && ((0, zb.s)(performance.now()), this.samples = Bb, (0, vb.d)(this.registryOf(bb)))
      }
      async beginSession() {
        var bb;
        let ub = () => {};
        const hb = new Promise((bb => {
          ub = bb
        }));
        this.binding = {
          done: hb,
          release: ub
        }, await (null === (bb = this.opening) || void 0 === bb ? void 0 : bb.catch((() => null)));
        const Bb = this.pageCanvas;
        return this.pageCanvas = null, Bb
      }
      endSession(bb) {
        var ub, hb;
        if (this.sessionEnds++, this.lastEndReturned = bb, this.endBinding(), bb) {
          try {
            var Bb;
            null === (Bb = this.host) || void 0 === Bb || Bb.detach()
          } catch (Ob) {
            return void console.warn(`${Nb} the session's core kept the page's renderer`, Ob)
          }!0 === (null === (ub = this.host) || void 0 === ub ? void 0 : ub.attached()) && console.warn(`${Nb} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (hb = this.host) || void 0 === hb ? void 0 : hb.CUb()) && (0, vb.d)(this.registryOf(this.module))
        }
      }
      endBinding() {
        var bb;
        null === (bb = this.binding) || void 0 === bb || bb.release(), this.binding = null
      }
      async openPreview(bb, ub, hb, Bb) {
        const Ob = await this.renderingHost(),
          Gb = this.module;
        if (null === Ob || null === Gb) throw new Error("this page can't draw previews: it has no renderer build");
        if (this.animations ??= this.loadAnimations(Ob), this.deps.pack.wanted(), this.isStopped) throw new Error("the previews stopped");
        this.guarded((() => {
          this.deps.provideBuiltInAnimationPack(Gb)
        }));
        const Ub = this.nextId++,
          Lb = this.deps.createCanvas(),
          [Yb, Sb] = kb(ub, hb, this.deps.dpr(), Bb);
        Lb.width = Yb, Lb.height = Sb;
        if (!this.guarded((() => (Gb.oGb(Ub, Lb), Ob.open(Ub, Yb, Sb, bb))))) throw this.hostCall(void 0, (() => {
          Gb.AGb(Ub)
        })), new Error("the page's renderer is lent to a session that is running");
        this.restartModelsIfFailed();
        const ab = new Rb(this, Ob, Ub, Lb, [Yb, Sb], this.deps);
        return this.previews.set(Ub, ab), this.startFrames(), ab
      }
      prefetch() {
        if (this.prefetched || this.isStopped || (0, zb.b)() || null !== (0, zb.H)()) return;
        this.prefetched = !0;
        (null === this.module ? this.loadModule() : Promise.resolve(this.module)).then((bb => {
          null === bb || this.isStopped || (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles())
        }), (() => {}))
      }
      modelFile(bb) {
        return this.prefetchedOr(bb, this.deps.fetchModel)
      }
      imageFile(bb) {
        return this.prefetchedOr(bb, Bb.G)
      }
      prefetchedOr(bb, ub) {
        const hb = this.prefetchedFiles.get(bb);
        return void 0 === hb ? ub(bb) : hb.catch((() => ub(bb)))
      }
      async prefetchPlayerFiles() {
        const bb = this.deps.playerFile().then((bb => this.deps.files.url(bb))),
          ub = await Promise.all([bb, this.deps.images.lifeformAtlasUrl(Db.d)]).catch((() => null));
        if (null === ub) return;
        const [hb, Bb] = ub, Ob = (bb, ub) => {
          if (null === bb) return;
          const hb = ub(bb);
          this.prefetchedFiles.set(bb, hb), hb.catch((() => {
            this.prefetchedFiles.delete(bb)
          }))
        };
        Ob(hb, (bb => this.modelFile(bb))), Ob(Bb, (bb => this.imageFile(bb)))
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
      buildModel(bb, ub) {
        return this.startModels(), this.models.then((hb => hb(bb, ub))).then((bb => this.unavailable ? new Promise((() => {})) : bb))
      }
      restartModelsIfFailed() {
        this.unavailable && !this.modelsRestarted && 0 === this.previews.size && (this.modelsRestarted = !0, this.models = null, this.unavailable = !1, this.startModels())
      }
      modelsFailed(bb) {
        this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${Nb} the model workers didn't start: models won't draw in the previews`, bb))
      }
      called(bb) {
        return 0 !== bb && this.logError(bb, 0), bb
      }
      closePreview(bb) {
        this.previews.delete(bb.id), null !== this.module && bb.dispose(this.module), 0 === this.previews.size && null !== this.frameId && (this.deps.cancelFrame(this.frameId), this.frameId = null)
      }
      hostOf(bb) {
        if (null !== this.module && this.module !== bb) throw new Error("a second renderer module on one page");
        return this.module = bb, null === this.host && (this.host = this.guarded((() => new bb.pGb)), this.tellInGame(), this.handOverShaderPack()), this.host
      }
      tellInGame() {
        const {
          host: bb
        } = this;
        null !== bb && this.outsideCall("the game's start or end", (() => {
          bb.DUb(this.deps.game.inGame())
        }))
      }
      handOverShaderPack() {
        const {
          host: bb,
          shaderPackArgs: ub
        } = this;
        null !== bb && null !== ub && this.outsideCall("the shader pack's hand-over", (() => {
          bb.oBb(...ub) || console.warn(`${Nb} the host refused the shader pack: previews draw without it at home`)
        }))
      }
      outsideCall(bb, ub) {
        try {
          this.hostCall(void 0, ub)
        } catch (hb) {
          this.stop(), console.warn(`${Nb} the previews stopped: ${bb} threw`, hb)
        }
      }
      async loadAnimations(bb) {
        const ub = Ub(null),
          hb = this.module;
        try {
          ub.wasm = null === hb ? ub.wasm : this.hostCall(ub.wasm, (() => hb.OH()))
        } catch {}
        let Bb, Ob;
        try {
          Bb = await this.fetchAnimationTable()
        } catch (Gb) {
          return void this.deps.onAnimationsFailed({
            stage: "fetch",
            error: Gb
          }, ub)
        }
        if (!this.settleIfTrapped()) {
          try {
            Ob = bb.rUb(Bb)
          } catch (Gb) {
            if (this.stopIfTrapped(Gb)) return;
            return void this.deps.onAnimationsFailed({
              stage: "decode",
              error: Gb
            }, ub)
          }
          Ob || this.deps.onAnimationsFailed({
            stage: "decode",
            error: null
          }, ub)
        }
      }
      async renderingHost() {
        if (null !== this.binding && await this.binding.done, this.settleIfTrapped()) return null;
        const bb = this.host;
        return null !== bb && this.guarded((() => bb.CUb())) ? bb : (this.opening ??= this.openAtHome().finally((() => {
          this.opening = null
        })), this.opening)
      }
      async openAtHome() {
        var bb;
        const ub = null !== (bb = this.module) && void 0 !== bb ? bb : await this.loadModule();
        if (null === ub) return null;
        const hb = this.hostOf(ub),
          Bb = () => this.guarded((() => hb.CUb()));
        if (Bb()) return hb;
        if (null !== (0, zb.H)() || (0, zb.b)()) return null;
        const Ob = this.deps.createCanvas();
        Ob.width = 1, Ob.height = 1;
        const Gb = await this.deps.openExtras();
        if (this.settleIfTrapped()) return null;
        const Ub = (0, ib.f)().sampleCount;
        let Lb;
        try {
          Lb = await (0, Wb.y)(ub, "previewRenderer", Ob, Ub, tb.e, Gb)
        } catch (Yb) {
          throw Yb instanceof nb.c ? this.stopForTrap(Yb) : (0, Wb.w)(Yb) && await this.deps.onRenderFailed("start_failed", Yb), Yb
        }
        return this.guarded((() => hb.UUb(Lb))) ? ((0, zb.s)(performance.now()), this.samples = Ub, this.pageCanvas = Ob, (0, vb.d)(this.registryOf(ub)), hb) : Bb() ? hb : null
      }
      startFrames() {
        null !== this.frameId || this.isStopped || (this.frameId = this.deps.requestFrame(this.frame))
      }
      drawFrame(bb, ub) {
        for (const Ub of this.previews.values()) Ub.feed();
        if (this.stopped) return;
        const hb = this.deps.now(),
          Bb = bb.frame(ub);
        this.costs.push(this.deps.now() - hb), this.costs.length > 120 && this.costs.shift();
        const Ob = 0 !== (256 & Bb),
          Gb = 255 & Bb;
        for (const Ub of this.previews.values()) {
          if (this.stopped) return;
          Ub.collect(Ob)
        }
        if (!this.stopped) {
          if (Ob) {
            const ub = bb.iUb();
            for (let bb = 0; bb + 1 < ub.length; bb += 2) this.logError(ub[bb], ub[bb + 1])
          }
          if (Gb === Pb) return this.stop(), void this.deps.onRenderFailed("lost");
          if (Gb === qb) return this.stop(), void this.deps.onFatal(bb.lUb(), bb.KUb());
          if (Gb === Eb) return this.stop(), void console.warn(`${Nb} the previews stopped: the page's renderer went with its session`);
          (0, lb.c)(ub), this.startFrames()
        }
      }
      get isStopped() {
        return this.stopped || this.isTrapped
      }
      get isTrapped() {
        return null !== this.module && ((0, nb.i)(this.module) || "failed" === (0, Xb.z)())
      }
      hostCall(bb, ub) {
        if (this.settleIfTrapped()) return bb;
        try {
          return ub()
        } catch (hb) {
          if (this.stopIfTrapped(hb)) return bb;
          throw hb
        }
      }
      guarded(bb) {
        if (this.settleIfTrapped()) throw new Error("the previews stopped: their module trapped");
        try {
          return bb()
        } catch (ub) {
          throw this.stopIfTrapped(ub), ub
        }
      }
      registryOf(bb) {
        return {
          uBb: (ub, hb) => {
            this.hostCall(void 0, (() => {
              bb.uBb(ub, hb)
            }))
          },
          hBb: ub => {
            this.hostCall(void 0, (() => {
              bb.hBb(ub)
            }))
          }
        }
      }
      settleIfTrapped() {
        return !!this.isTrapped && (this.stopped || (this.stop(), (0, vb.d)(null)), !0)
      }
      stopIfTrapped(bb) {
        return !(null === this.module || !(0, nb.k)(this.module, bb)) && (this.stopForTrap(bb), !0)
      }
      stopForTrap(bb) {
        this.stop(), (0, vb.d)(null), (0, eb.d)("previews", bb)
      }
      stop() {
        this.stopped = !0;
        for (const bb of this.previews.values()) bb.abandon()
      }
      logError(bb, ub) {
        const hb = `${bb}:${ub}`;
        this.loggedErrors.has(hb) || (this.loggedErrors.add(hb), console.warn(`${Nb} error ${bb} (detail ${ub})`))
      }
    }
    let uu = null;

    function hu() {
      return uu ??= new bu(function() {
        const bb = (0, rb.u)(Ab.clientSideServerUrls.staticUrl, {
          packUrl: bb => {
            var ub, hb;
            return null !== (ub = null === (hb = Db.f.current) || void 0 === hb ? void 0 : hb.modelUrl(bb)) && void 0 !== ub ? ub : null
          }
        });
        return {
          loadModule: Qb,
          startModels: async bb => {
            const {
              pageModelPool: ub
            } = await hb.e(42).then((() => hb(42760))), {
              pool: Bb
            } = ub(bb);
            return (bb, ub) => Bb.build(bb, ub)
          },
          fetchAnimations: async () => Lb(await (0, Bb.G)(Tb())),
          playerFile: async () => (await (0, rb.q)()).PLAYER_FILE,
          onAnimationsFailed: (bb, ub) => {
            Yb("previewAnimations", Tb(), bb, ub)
          },
          provideBuiltInAnimationPack: bb => {
            wb().provide(bb)
          },
          openExtras: zb.A,
          files: bb,
          images: (0, Db.m)((0, Cb.k)(bb.url), (() => Db.f.current)),
          pack: Db.f,
          game: xb.e,
          fetchModel: bb => (0, rb.j)(bb),
          createCanvas: () => document.createElement("canvas"),
          dpr: () => window.devicePixelRatio,
          now: () => performance.now(),
          requestFrame: bb => requestAnimationFrame(bb),
          cancelFrame: bb => {
            cancelAnimationFrame(bb)
          },
          onRenderFailed: cb,
          onFatal: (bb, ub) => {
            console.error(`${Nb} the previews stopped: renderer error ${bb} (detail ${ub})`)
          }
        }
      }()), uu
    }
    var Bu = hb(571),
      Ou = hb(38250),
      Gu = hb(3063);
    const Uu = {
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
    const Lu = "[bloxd-previews]",
      Yu = new Uint32Array(5);

    function Su(bb) {
      return Bu.i.indexOf(bb)
    }
    const au = new WeakSet;

    function Hu(bb) {
      const ub = (0, Ou.e)(bb),
        hb = null === ub ? -1 : wu(ub);
      return -1 !== hb ? hb : (au.has(bb) || (au.add(bb), console.warn(`${Lu} an animation the previews' table lacks: the mob idles instead`)), -1)
    }

    function wu(bb) {
      var ub;
      return null !== (ub = Uu[bb]) && void 0 !== ub ? ub : -1
    }

    function Zu(bb, ub) {
      const {
        canvas: hb
      } = ub;
      hb.style.width = "100%", hb.style.height = "100%", hb.style.display = "block", bb.appendChild(hb)
    }

    function Xu(bb) {
      const ub = bb.getBoundingClientRect();
      return [ub.width, ub.height]
    }
    class pu {
      constructor(bb, ub) {
        this.preview = bb, this.showView = ub
      }
      show(bb) {
        this.showView(this.preview, bb)
      }
      resize(bb, ub) {
        this.preview.resize(bb, ub)
      }
      close() {
        this.preview.close()
      }
    }
    class ou {
      constructor(bb) {
        this.preview = bb, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.detachControls = void 0, this.detachControls = function(bb) {
          const {
            canvas: ub
          } = bb;
          let hb = null;
          const Bb = bb => {
              var Bb;
              hb = {
                pointer: bb.pointerId,
                x: bb.clientX,
                y: bb.clientY
              }, null === (Bb = ub.setPointerCapture) || void 0 === Bb || Bb.call(ub, bb.pointerId)
            },
            Ob = ub => {
              var Bb;
              const Ob = bb.orbit;
              if ((null === (Bb = hb) || void 0 === Bb ? void 0 : Bb.pointer) !== ub.pointerId || null === Ob) return;
              const Gb = ub.clientX - hb.x,
                Ub = ub.clientY - hb.y;
              hb = {
                ...hb,
                x: ub.clientX,
                y: ub.clientY
              }, bb.setOrbit({
                alpha: Ob.alpha - .01 * Gb,
                beta: Math.min(Math.PI - .01, Math.max(.01, Ob.beta - .01 * Ub)),
                radius: Ob.radius
              })
            },
            Gb = bb => {
              var ub;
              (null === (ub = hb) || void 0 === ub ? void 0 : ub.pointer) === bb.pointerId && (hb = null)
            },
            Ub = ub => {
              const hb = bb.orbit;
              if (null === hb) return;
              ub.preventDefault();
              const Bb = ub.deltaY * (ub.deltaMode === WheelEvent.DOM_DELTA_LINE ? 40 : ub.deltaMode === WheelEvent.DOM_DELTA_PAGE ? 800 : 1),
                Ob = Math.min(100, Math.max(5, hb.radius + .08 * Bb));
              bb.setOrbit({
                ...hb,
                radius: Ob
              })
            };
          return ub.style.touchAction = "none", ub.addEventListener("pointerdown", Bb), ub.addEventListener("pointermove", Ob), ub.addEventListener("pointerup", Gb), ub.addEventListener("pointercancel", Gb), ub.addEventListener("wheel", Ub, {
            passive: !1
          }), () => {
            ub.removeEventListener("pointerdown", Bb), ub.removeEventListener("pointermove", Ob), ub.removeEventListener("pointerup", Gb), ub.removeEventListener("pointercancel", Gb), ub.removeEventListener("wheel", Ub)
          }
        }(bb), this.dev = {
          canvas: () => bb.canvas,
          isolateHead: () => {
            console.warn(`${Lu} isolateHead: noa's character preview only`)
          }
        }, this.apply(), this.ready = bb.untilSettled().then((() => {
          if (bb.isStopped) throw new Error(`${Lu} the previews stopped before the character drew`);
          this.built = !0
        }))
      }
      isReady() {
        return this.built && !this.preview.isClosed
      }
      setCosmetic(bb, ub) {
        this.cosmetics[bb] = ub, this.apply()
      }
      playEmote(bb) {
        null === bb || bb !== this.emote ? (this.emote = bb, this.apply()) : this.preview.replay()
      }
      untilDrawn(bb) {
        return this.preview.untilSettled()
      }
      setOrbit(bb) {
        let {
          yaw: ub,
          pitch: hb,
          radius: Bb
        } = bb;
        const Ob = this.preview.orbit;
        null !== Ob && this.preview.setOrbit({
          alpha: ub,
          beta: hb,
          radius: null !== Bb && void 0 !== Bb ? Bb : Ob.radius
        })
      }
      resetCamera() {}
      resize(bb, ub) {
        this.preview.resize(bb, ub)
      }
      close() {
        this.detachControls(), this.preview.close()
      }
      apply() {
        var bb;
        this.preview.setPlayer(JSON.stringify(this.cosmetics), Yu, null === (bb = this.emote) ? -1 : wu(bb))
      }
    }

    function Au(bb, ub) {
      let {
        mobType: hb,
        variation: Bb,
        animation: Ob
      } = ub;
      bb.setMob(Su(hb), null !== Bb && void 0 !== Bb ? Bb : "", 1, Hu(Ob))
    }

    function lu(bb, ub) {
      let {
        mobType: hb,
        variation: Bb,
        metaInfo: Ob,
        tamed: Gb
      } = ub;
      bb.setPet(Su(hb), Bb, Ob, Gb)
    }
    const Ku = {
      aimed: .533 / 1.15 * 1.1,
      ready: .16 / .85 * 1.1
    };
    class Wu {
      constructor(bb, ub, hb, Bb) {
        this.preview = null, this.closed = !1, this.figure = null, this.shown = !1, this.order = "", this.span = {
          left: 0,
          width: 0
        }, this.lineup = [0, 0], this.given = null, this.loaded = !1, bb(hb.width, Bb[1], Bb).then((bb => {
          if (this.closed) return void bb.close();
          const {
            style: hb
          } = bb.canvas;
          hb.position = "absolute", hb.top = "0", hb.visibility = "hidden", Zu(ub, bb), this.preview = bb, this.apply()
        })).catch((bb => {
          console.error(`${Lu} couldn't open a lineup figure`, bb)
        }))
      }
      update(bb, ub, hb, Bb, Ob) {
        this.figure = bb, this.shown = ub, this.order = hb, this.span = Bb, this.lineup = Ob, this.apply()
      }
      close() {
        var bb;
        this.closed = !0, null === (bb = this.preview) || void 0 === bb || bb.close(), this.preview = null
      }
      apply() {
        const {
          preview: bb,
          figure: ub,
          lineup: hb
        } = this;
        if (null === bb || null === ub) return;
        if (this.given !== ub) {
          var Bb;
          this.given = ub, this.loaded = !1;
          const hb = null === ub.bC ? 0 : null !== (Bb = (0, Gu.e)(ub.bC)) && void 0 !== Bb ? Bb : 0;
          bb.setFigure(function(bb) {
            return JSON.stringify(Object.fromEntries(bb.cosmetics))
          }(ub), hb, Hu(ub.animation), ub.size), bb.untilSettled().then((() => {
            this.given === ub && (this.loaded = !0, this.apply())
          }))
        }
        const {
          left: Ob,
          width: Gb
        } = this.span;
        bb.resize(Gb, hb[1], hb);
        const {
          style: Ub
        } = bb.canvas;
        Ub.left = `${Ob}px`, Ub.width = `${Gb}px`, Ub.zIndex = this.order, Ub.visibility = this.shown && this.loaded ? "visible" : "hidden"
      }
    }
    class Cu {
      constructor(bb, ub) {
        this.open = ub, this.layer = void 0, this.figures = [], this.view = {
          figures: [],
          shown: []
        }, this.size = void 0, this.size = Xu(bb), this.layer = document.createElement("div");
        const {
          style: hb
        } = this.layer;
        hb.position = "relative", hb.isolation = "isolate", hb.overflow = "hidden", hb.width = "100%", hb.height = "100%", hb.pointerEvents = "none", bb.appendChild(this.layer)
      }
      show(bb) {
        this.view = bb, this.place()
      }
      resize(bb, ub) {
        this.size = [bb, ub], this.place()
      }
      close() {
        for (const bb of this.figures) bb.close();
        this.figures = [], this.layer.remove()
      }
      place() {
        const {
          figures: bb,
          shown: ub
        } = this.view;
        for (const Bb of this.figures.splice(bb.length)) Bb.close();
        const {
          size: hb
        } = this;
        bb.forEach(((Bb, Ob) => {
          var Gb;
          const Ub = function(bb, ub, hb, Bb) {
            let [Ob, Gb] = Bb;
            const Ub = (bb + .5) * Ob / ub,
              Lb = Math.min(Math.max(Ob / ub, 2 * hb * Gb), 2 * Math.max(Ub, Ob - Ub));
            return {
              left: Ub - Lb / 2,
              width: Lb
            }
          }(Ob, bb.length, function(bb) {
            let {
              animation: ub,
              size: hb
            } = bb;
            const {
              aimed: Bb,
              ready: Ob
            } = Ku;
            return (Hu(ub) === Uu.gunAimed ? Bb : Ob) * hb
          }(Bb), hb);
          this.figures[Ob] ??= new Wu(this.open, this.layer, Ub, hb), this.figures[Ob].update(Bb, null !== (Gb = ub[Ob]) && void 0 !== Gb && Gb, function(bb, ub) {
            return String(Math.round(1e3 * bb) + ub)
          }(Bb.size, Ob), Ub, hb)
        }))
      }
    }
    const du = {
      player: mb,
      store: Ib
    };
    class ru {
      constructor(bb) {
        this.page = bb
      }
      async openMob(bb) {
        return new pu(await this.open(bb, Mb), Au)
      }
      async openPet(bb) {
        return new pu(await this.open(bb, Mb), lu)
      }
      openMobLineup(bb) {
        return new Cu(bb, ((bb, ub, hb) => this.page.openPreview(Mb, bb, ub, hb)))
      }
      async openCharacter(bb, ub) {
        return new ou(await this.open(bb, du[ub]))
      }
      async open(bb, ub) {
        const [hb, Bb] = Xu(bb), Ob = await this.page.openPreview(ub, hb, Bb);
        return Zu(bb, Ob), Ob
      }
    }
  },
  36377: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Bb,
      h: () => Ob,
      i: () => wb,
      j: () => ob,
      m: () => ab,
      n: () => lb,
      o: () => Yb,
      p: () => Sb,
      r: () => Zb,
      t: () => Xb,
      w: () => pb,
      z: () => Ab
    });
    const Bb = [{
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

    function Ob(bb, ub) {
      const {
        numLines: hb,
        charsPerLine: Ob
      } = Bb[ub];
      return Kb(bb, hb, Ob, !1)
    }
    const Gb = 7 / 8,
      Ub = .25,
      Lb = 8;

    function Yb(bb, ub) {
      return {
        width: Math.min(bb, Lb) - 2 * Ub,
        height: Math.min(ub, Lb) - 2 * Ub
      }
    }

    function Sb(bb, ub, hb) {
      const Ob = Yb(bb, ub),
        {
          numLines: Ub,
          charsPerLine: Lb
        } = Bb[hb];
      return {
        numLines: Math.max(1, Math.floor(Ub / Gb * Ob.height)),
        charsPerLine: Math.max(1, Math.floor(Lb * Ob.width))
      }
    }

    function ab(bb, ub, hb, Bb) {
      const {
        numLines: Ob,
        charsPerLine: Gb
      } = Sb(hb, Bb, ub);
      return Kb(bb, Ob, Gb, !1)
    }
    const Hb = 32e3;

    function wb(bb) {
      return bb.slice(0, Hb)
    }
    const Zb = 512e3,
      Xb = 64,
      pb = Zb;

    function ob(bb, ub) {
      const hb = Math.max(0, pb - ub),
        Bb = Math.min(Zb, hb);
      return bb.slice(0, Bb)
    }
    const Ab = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      WS: {
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

    function lb(bb, ub) {
      const {
        numLines: hb,
        charsPerLine: Bb
      } = Ab[ub];
      return Kb(bb, hb, Bb, !1)
    }

    function Kb(bb, ub, hb, Bb, Ob) {
      (Ob || Bb) && (bb = bb.slice(0, null !== Ob && void 0 !== Ob ? Ob : ub * hb));
      const Gb = bb.split("\n");
      if (Gb.length > ub && Gb.splice(ub, Gb.length - ub), !Bb)
        for (let Ub = 0; Ub < Gb.length; Ub++) {
          const bb = Gb[Ub];
          bb.length > hb && (Gb[Ub] = bb.substring(0, hb), Gb.length < ub && Gb.splice(Ub + 1, 0, bb.substring(hb)))
        }
      return Gb.join("\n")
    }
  },
  42690: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/builtInAnimations.anim.38e056f49512e10b7206.gz"
  },
  42692: (bb, ub, hb) => {
    bb.exports = hb.p + "static/media/previewAnimations.dat.24d2343c38c8f9b3fb85.gz"
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);