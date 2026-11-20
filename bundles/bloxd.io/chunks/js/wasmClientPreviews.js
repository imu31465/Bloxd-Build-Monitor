export const id = 57;
export const ids = [57];
export const modules = {
  38164: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Sv,
      d: () => ev
    });
    const hv = new WeakMap;

    function Sv(vv, zv) {
      return hv.set(vv, zv), vv
    }

    function ev(vv) {
      var zv;
      return null !== (zv = hv.get(vv)) && void 0 !== zv ? zv : null
    }
  },
  38189: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => pv
    });
    var hv = Pv(1209);

    function Sv(vv) {
      const zv = /(\d*\.?\d+)px/.exec(vv);
      return zv ? Number(zv[1]) : null
    }

    function ev(vv) {
      return vv.split(/[\s,]+/).pop()
    }
    let gv = !1;
    const pv = {
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
      drawText: function(vv, zv, hv, pv, dv, Nv) {
        if (dv <= 0 || Nv <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: lv,
          fontVariant: Tv,
          fontWeight: Wv,
          fontSize: wv,
          font: av
        } = this, sv = [lv, Tv, Wv, `${wv}px`, av].filter(Boolean).join(" "), Cv = [
          [Wv, `${wv}px`, ev(av)].filter(Boolean).join(" "), `${wv}px sans-serif`
        ], iv = vv.font, cv = function(vv, zv, Pv) {
          for (const hv of zv) {
            vv.font = hv;
            const zv = Sv(vv.font),
              gv = ev(hv);
            if (null !== zv && Math.abs(zv - Pv) <= .5 && vv.font.toLowerCase().includes(gv.toLowerCase())) return hv
          }
          return null
        }(vv, [sv, ...Cv], wv);
        cv !== sv && function(vv, zv, hv) {
          gv || (gv = !0, Promise.resolve().then((() => Pv(1056))).then((Pv => {
            let {
              ws: Sv
            } = Pv;
            Sv(new Error("A canvas didn't take canvasTxt's font"), {
              font: vv,
              Yw: zv,
              drawnWith: null !== hv && void 0 !== hv ? hv : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(sv, iv, cv);
        const Gv = Sv(vv.font);
        if (null === cv && null !== Gv && Gv > 0) {
          const Pv = wv / Gv;
          vv.save();
          try {
            return vv.scale(Pv, Pv), {
              height: this.drawLines(vv, zv, hv / Pv, pv / Pv, dv / Pv, Nv / Pv, Gv).height * Pv
            }
          } finally {
            vv.restore()
          }
        }
        return this.drawLines(vv, zv, hv, pv, dv, Nv, wv)
      },
      drawLines: function(vv, zv, Pv, Sv, ev, gv, pv) {
        const dv = Pv + ev,
          Nv = Sv + gv;
        let lv, Tv = Sv + gv / 2 + pv / 2;
        "right" === this.align ? (lv = dv, vv.textAlign = "right") : "left" === this.align ? (lv = Pv, vv.textAlign = "left") : (lv = Pv + ev / 2, vv.textAlign = "center");
        for (const hv of zv) {
          vv.measureText(hv).width >= ev && (zv = zv.replace(hv, ""))
        }
        zv = (0, hv.Y)(zv);
        const Wv = [],
          wv = zv.split("\n"),
          av = this.justify ? vv.measureText("\u200a").width : 0;
        wv.forEach((zv => {
          let Pv = vv.measureText(zv).width;
          if (Pv <= ev) Wv.push(zv);
          else {
            let hv = zv;
            const Sv = ev;
            let gv, pv, dv;
            for (Pv = vv.measureText(hv).width; Pv > Sv;) {
              for (gv = 0, pv = 0, dv = ""; pv < Sv;) gv++, dv = hv.substr(0, gv), pv = vv.measureText(dv).width;
              gv--, dv = dv.substr(0, gv);
              const zv = gv;
              if (" " !== hv.substr(gv, 1)) {
                for (;
                  " " !== hv.substr(gv, 1) && 0 !== gv;) gv--;
                0 === gv && (gv = zv), dv = hv.substr(0, gv)
              }
              dv = this.justify ? this.justifyLine(vv, dv, av, "\u200a", ev) : dv, hv = hv.substr(gv), Pv = vv.measureText(hv).width, Wv.push(dv)
            }
            Pv > 0 && Wv.push(hv)
          }
        }));
        const sv = this.lineHeight ? this.lineHeight : this.getTextHeight(vv, zv),
          Cv = sv * (Wv.length - 1),
          iv = Cv / 2;
        let cv = Sv;
        "top" === this.vAlign ? Tv = Sv + pv : "bottom" === this.vAlign ? (Tv = Nv - Cv, cv = Nv) : (cv = Sv + gv / 2, Tv -= iv), Wv.forEach((zv => {
          zv = zv.trim(), vv.fillText(zv, lv, Tv), Tv += sv
        })), this.debug && (vv.lineWidth = 3, vv.strokeStyle = "#00909e", vv.strokeRect(Pv, Sv, ev, gv), vv.lineWidth = 2, vv.strokeStyle = "#f6d743", vv.beginPath(), vv.moveTo(lv, Sv), vv.lineTo(lv, Nv), vv.stroke(), vv.strokeStyle = "#ff6363", vv.beginPath(), vv.moveTo(Pv, cv), vv.lineTo(dv, cv), vv.stroke());
        return {
          height: Cv + sv
        }
      },
      getTextHeight: function(vv, zv) {
        const Pv = vv.textBaseline;
        vv.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: hv
        } = vv.measureText(zv);
        return vv.textBaseline = Pv, hv
      },
      justifyLine: function(vv, zv, Pv, hv, Sv) {
        const ev = zv.trim(),
          gv = vv.measureText(ev).width,
          pv = ev.split(/\s+/).length - 1,
          dv = Math.floor((Sv - gv) / Pv);
        if (pv <= 0 || dv <= 0) return ev;
        const Nv = Math.floor(dv / pv);
        let lv = dv - pv * Nv,
          Tv = [];
        for (let Wv = 0; Wv < Nv; Wv++) Tv.push(hv);
        Tv = Tv.join("");
        return ev.replace(/\s+/g, (vv => {
          const zv = lv > 0 ? Tv + hv : Tv;
          return lv--, vv + zv
        }))
      }
    }
  },
  38194: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => sv,
      f: () => av,
      g: () => Wv,
      i: () => lv,
      m: () => Tv
    });
    var hv = Pv(4019),
      Sv = Pv(312);
    const ev = 1024,
      gv = 1536,
      pv = 2 * hv.j + 1,
      dv = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      Nv = 1.5;

    function lv(vv, zv, Pv) {
      if ("string" !== typeof vv) return zv;
      try {
        const Pv = JSON.parse(vv);
        return Pv && "object" === typeof Pv ? Pv : zv
      } catch (hv) {
        return void 0 !== Pv && console.error(`Couldn't parse ${Pv}`, hv), zv
      }
    }

    function Tv(vv) {
      return lv(vv, null, "a leaderboard's rows")
    }

    function Wv(vv, zv) {
      var Pv, hv;
      return null !== zv && void 0 !== zv ? zv : {
        status: null !== (Pv = vv.status) && void 0 !== Pv ? Pv : "loading",
        entries: null !== (hv = vv.entries) && void 0 !== hv ? hv : []
      }
    }

    function wv(vv, zv) {
      return "number" === typeof vv && Number.isFinite(vv) && vv > 0 ? vv : zv
    }

    function av(vv, zv) {
      const Pv = wv(vv.size, 1);
      let hv = wv(vv.width, wv(2.5 * Pv, 2.5)),
        Sv = wv(vv.height, wv(3.75 * Pv, 3.75));
      Number.isFinite(ev * Sv / hv) && Number.isFinite(gv * hv / Sv) || (hv = 2.5, Sv = 3.75);
      const pv = Sv / hv,
        dv = Math.max(1, Math.min(ev, zv / pv));
      return {
        width: hv,
        height: Sv,
        layoutWidth: Math.max(ev, gv / pv),
        layoutHeight: Math.max(gv, ev * pv),
        pixelWidth: Math.round(dv),
        pixelHeight: Math.round(Math.max(1, Math.min(zv, dv * pv)))
      }
    }

    function sv(vv, zv, Pv, gv, lv, Tv) {
      vv.setTransform(1, 0, 0, 1, 0, 0), vv.fillStyle = Sv.L.defaultNameTagBackground, vv.fillRect(0, 0, zv, Pv), vv.scale(zv / gv.layoutWidth, Pv / gv.layoutHeight), vv.translate((gv.layoutWidth - ev) / 2, 0),
        function(vv, zv, Pv, ev) {
          var gv, lv, Tv, Wv;
          const {
            top: wv,
            around: av,
            showPlayerText: sv,
            localPlayerDbId: cv
          } = Pv, {
            whiteUiText: Gv,
            grayUiText: mv,
            yellowUiText: jv
          } = Sv.L;
          vv.textBaseline = "middle";
          const fv = function(zv, Pv, hv, Sv, ev, gv) {
              let pv = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              vv.font = `bold ${Sv}px 'Jetbrains Mono', monospace`, vv.fillStyle = ev, vv.textAlign = pv;
              let dv = zv.replace(/[\r\n\t]/g, " ");
              if (vv.measureText(dv).width > gv) {
                for (; dv.length > 0 && vv.measureText(`${dv}\u2026`).width > gv;) dv = dv.slice(0, -1);
                dv += "\u2026"
              }
              vv.fillText(dv, Pv, hv)
            },
            Fv = zv => {
              vv.fillStyle = Gv, vv.globalAlpha = .15, vv.fillRect(24, zv, 976, 2), vv.globalAlpha = 1
            },
            Yv = null === cv ? null : (0, Sv.hc)(cv),
            nv = vv => null !== Yv && vv.playerHash === Yv,
            Ov = Cv(wv.entries, hv.k),
            Dv = "ready" === wv.status && Ov.length > 0,
            Kv = null === av ? [] : Cv(av.entries, pv),
            Vv = Ov.some(nv),
            Uv = null === av ? null : function(vv) {
              const zv = vv;
              if (!zv || !Number.isFinite(zv.rank) || !Number.isFinite(zv.tied) || !Number.isFinite(zv.total)) return null;
              return zv
            }(av.standing),
            Rv = Kv.find(nv),
            xv = Ov.find(nv),
            tv = null === Uv || void 0 === Rv ? null : {
              value: Rv.value,
              rank: Uv.rank
            },
            qv = iv(Ov, void 0 === xv || xv.value === (null === tv || void 0 === tv ? void 0 : tv.value) ? tv : null),
            Iv = iv(Kv, tv),
            Qv = (vv, zv) => {
              const Pv = vv.findIndex(nv);
              return Pv >= 0 ? zv[Pv] : null
            },
            Zv = null !== (gv = null !== (lv = null === Uv || void 0 === Uv ? void 0 : Uv.rank) && void 0 !== lv ? lv : Qv(Kv, Iv)) && void 0 !== gv ? gv : Qv(Ov, qv);
          vv.font = "bold 34px 'Jetbrains Mono', monospace";
          const Av = [...Dv ? qv : [], ...Vv ? [] : Iv],
            Lv = Math.min(280, Math.max(0, ...Av.map((zv => vv.measureText(dv.format(zv)).width)))),
            Hv = Lv <= 80,
            Mv = Hv ? 80 : 32 + Lv,
            yv = Hv ? 148 : Mv + 28,
            Bv = 660 - yv;
          fv(`TOP ${hv.k}  /  ALL TIME`, 24, 52, 28, mv, 976), fv(sv ? String(null !== (Tv = zv.title) && void 0 !== Tv ? Tv : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, Gv, 976), fv("RANK", 32, 174, 28, mv, yv - 40), fv("PLAYER", yv, 174, 28, mv, Bv), fv(sv ? String(null !== (Wv = zv.scoreLabel) && void 0 !== Wv ? Wv : "Score").slice(0, 24) : "Score", 992, 174, 28, mv, 304, "right"), Fv(202);
          const Jv = (ev - 232) / (hv.k + Nv + pv),
            Ev = 208 + hv.k * Jv,
            ov = Ev + Nv * Jv,
            bv = (zv, Pv, hv, Sv) => {
              const ev = nv(zv);
              vv.fillStyle = ev ? jv : Gv, vv.globalAlpha = ev ? .15 : Sv ? .035 : 0, vv.fillRect(24, hv - Jv / 2 + 1, 976, Jv - 2), vv.globalAlpha = 1;
              const gv = ev ? jv : Gv;
              fv(dv.format(Pv), Mv, hv, 34, gv, Hv ? 80 : Lv, Hv ? "center" : "right"), fv(sv ? String(zv.name).slice(0, 64) : "Player", yv, hv, 34, gv, Bv);
              const pv = dv.format(zv.value);
              fv(vv.measureText(pv).width > 304 ? zv.value.toExponential(6) : pv, 992, hv, 34, gv, 304, "right")
            };
          if (Dv)
            for (const [hv, Sv] of Ov.entries()) bv(Sv, qv[hv], 208 + (hv + .5) * Jv, hv % 2 === 0);
          else {
            const vv = "error" === wv.status,
              zv = vv ? "Couldn't load leaderboard" : "ready" === wv.status ? "No scores yet" : "Loading leaderboard\u2026",
              Pv = vv ? "Trying again shortly" : "ready" === wv.status ? "Be the first on the board!" : "Fetching the top players",
              hv = (208 + Ev) / 2;
            fv(zv, 512, hv - 28, 40, vv ? Sv.L.redUiText : Gv, 960, "center"), fv(Pv, 512, hv + 27, 30, mv, 960, "center")
          }
          const rv = Ev + Nv * Jv / 2;
          if (null === Zv) Fv(rv);
          else {
            const zv = null === Uv ? 0 : Uv.tied - 1,
              Pv = `YOUR RANK #${dv.format(Zv)}${null===Uv?"":` of ${dv.format(Uv.total)}`}`;
            vv.font = "bold 36px 'Jetbrains Mono', monospace";
            const hv = Math.max(20, Math.min(36, Math.floor(34560 / vv.measureText(Pv).width)));
            fv(Pv, 512, rv - (zv > 0 ? 15 : 0), hv, jv, 960, "center"), zv > 0 && fv(`Tied with ${dv.format(zv)} other${1===zv?"":"s"}`, 512, rv + 24, 24, mv, 960, "center")
          }
          if (null === av) return;
          const kv = ov + pv * Jv / 2;
          if (Vv) fv(`You're in the top ${hv.k}!`, 512, kv, 40, jv, 960, "center");
          else if (0 === Kv.length) fv("You're not on this board yet", 512, kv, 34, mv, 960, "center");
          else
            for (const [hv, Sv] of Kv.entries()) bv(Sv, Iv[hv], ov + (hv + .5) * Jv, hv % 2 === 0)
        }(vv, lv, Tv, gv.layoutHeight)
    }

    function Cv(vv, zv) {
      return Array.isArray(vv) ? vv.slice(0, zv).filter((vv => vv && Number.isFinite(vv.rank) && Number.isFinite(vv.value))) : []
    }

    function iv(vv, zv) {
      const Pv = [];
      let hv = !1;
      return vv.forEach(((Sv, ev) => {
        if (null !== zv && Sv.value === zv.value) return void Pv.push(zv.rank);
        const gv = ev > 0 && Sv.value === vv[ev - 1].value;
        gv || (hv = 0 === ev && 1 !== Sv.rank), Pv.push(gv && !hv ? Pv[ev - 1] : Sv.rank)
      })), Pv
    }
  },
  38398: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Sv,
      g: () => ev
    });
    const hv = 32;

    function Sv(vv) {
      return Array.from(vv).length
    }

    function ev(vv) {
      const zv = [""];
      let Pv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Sv = "";
      const ev = () => {
        zv.push(""), Pv = 0, Sv = ""
      };
      for (const gv of vv.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(gv)) ev();
        else if (/^\s+$/.test(gv)) Sv += gv;
      else if (gv.length > 0) {
        const vv = Array.from(gv);
        Pv > 0 && Pv + Sv.length + vv.length > hv && ev(), zv[zv.length - 1] += Sv, Pv += Sv.length, Sv = "";
        for (const Sv of vv) Pv >= hv && ev(), zv[zv.length - 1] += Sv, Pv++
      }
      return zv[zv.length - 1] += Sv, zv
    }
  },
  42672: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      WasmPreviewHost: () => Fz,
      pageBuiltInAnimationPack: () => Wv,
      pagePreviews: () => Pz,
      previewModule: () => ov
    });
    var hv = Pv(3473),
      Sv = Pv(628);
    const ev = "[bloxd-wasm-client]";

    function gv(vv) {
      const zv = {
        wasm: "unknown",
        client: String(Sv.c)
      };
      try {
        var Pv;
        zv.wasm = null !== (Pv = null === vv || void 0 === vv ? void 0 : vv.CT()) && void 0 !== Pv ? Pv : zv.wasm
      } catch {}
      return zv
    }
    async function pv(vv) {
      if (vv.length < 2 || 31 !== vv[0] || 139 !== vv[1]) return vv;
      if ("undefined" === typeof DecompressionStream) {
        const {
          ungzip: zv
        } = await Pv.e(219).then((() => Pv(36480)));
        return zv(vv)
      }
      const zv = new Blob([vv]).stream().pipeThrough(new DecompressionStream("gzip"));
      return new Uint8Array(await new Response(zv).arrayBuffer())
    }

    function dv(vv, zv, hv, Sv) {
      Promise.resolve().then((() => Pv(40235))).then((Pv => {
        let {
          reportDataLoadFailure: ev
        } = Pv;
        ev(vv, zv, hv, Sv)
      }), (zv => {
        console.warn(`${ev} ${vv} didn't load, and the report couldn't be sent`, hv.error, zv)
      }))
    }
    const Nv = [3e4, 12e4, 3e5];
    class lv {
      constructor(vv) {
        this.deps = vv, this.loading = null, this.reported = !1, this.retries = 0, this.resolveSet = () => {}, this.set = new Promise((vv => {
          this.resolveSet = vv
        }))
      }
      provide(vv) {
        return this.loading ??= this.load(vv), this.loading
      }
      whenSet() {
        return this.set
      }
      async load(vv) {
        const zv = gv(vv),
          Pv = await async function(vv, zv) {
            let Pv;
            try {
              Pv = await vv()
            } catch (hv) {
              return {
                stage: "fetch",
                error: hv
              }
            }
            try {
              return zv(Pv) ? null : {
                stage: "decode",
                error: null
              }
            } catch (hv) {
              return {
                stage: "decode",
                error: hv
              }
            }
          }((() => this.deps.fetch()), (zv => {
            const Pv = vv.sSv(zv);
            return Pv && this.resolveSet(zv), Pv
          }));
        if (null !== Pv) {
          if ("fetch" === Pv.stage) {
            this.loading = null;
            const zv = Nv[this.retries++];
            void 0 !== zv && this.deps.later((() => {
              this.provide(vv)
            }), zv)
          }
          this.reported || (this.reported = !0, this.deps.onFailed(Pv, zv))
        }
      }
    }
    let Tv = null;

    function Wv() {
      return Tv ??= new lv({
        fetch: async () => pv(await (0, hv.I)(wv(), {
          priority: "low"
        })),
        onFailed: (vv, zv) => {
          dv("builtInAnimations", wv(), vv, zv)
        },
        later: (vv, zv) => {
          setTimeout(vv, zv)
        }
      }), Tv
    }

    function wv() {
      return Pv(42674)
    }
    var av = Pv(3466),
      sv = Pv(35885),
      Cv = Pv(40065),
      iv = Pv(1184),
      cv = Pv(295),
      Gv = Pv(635),
      mv = Pv(40078),
      jv = Pv(40309),
      fv = (Pv(40096), Pv(40250)),
      Fv = Pv(40256),
      Yv = Pv(40265),
      nv = Pv(40087),
      Ov = Pv(40332),
      Dv = Pv(40334),
      Kv = Pv(40112),
      Vv = Pv(40192),
      Uv = Pv(40194),
      Rv = Pv(40324),
      xv = Pv(41905),
      tv = Pv(35852),
      qv = Pv(3459);
    const Iv = "[bloxd-previews]",
      Qv = 4e5,
      Zv = 0,
      Av = 1,
      Lv = 2,
      Hv = 1,
      Mv = 2,
      yv = 3,
      Bv = 0,
      Jv = 1,
      Ev = 2;

    function ov(vv) {
      const zv = vv,
        Pv = (0, mv.G)(vv),
        hv = (0, mv.n)(vv);
      return null !== Pv && null !== hv && "function" === typeof zv.WSv && "function" === typeof zv.wSv && "function" === typeof zv.aSv ? zv : null
    }

    function bv(vv, zv, Pv) {
      let [hv, Sv] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [vv, zv], ev = Math.min(Number.isFinite(Pv) && Pv > 0 ? Pv : 1, 2);
      const gv = Math.max(0, hv, vv) * Math.max(0, Sv, zv) * ev * ev;
      return gv > Qv && (ev *= Math.sqrt(Qv / gv)), [Math.max(1, Math.floor(Math.max(0, vv) * ev)), Math.max(1, Math.floor(Math.max(0, zv) * ev))]
    }

    function rv() {
      return Pv(42681)
    }
    async function kv(vv, zv) {
      "lost" === vv && (0, Kv.q)();
      const hv = await (0, Kv.I)();
      if (null === hv || (0, mv.o)(hv) || (0, Kv.c)()) return;
      const Sv = "webgpu" === hv.backend;
      if (!Sv && "lost" !== vv) return;
      const ev = Sv ? (0, mv.N)(vv) : null;
      if (null !== ev) {
        const Pv = `WebGPU failed at home (${vv}${void 0===zv?"":`: ${zv instanceof Error?zv.message:(0,tv.j)(zv)}`}) and ${ev}`;
        return console.warn(`${Iv} ${Pv}: the previews stop`, null !== zv && void 0 !== zv ? zv : ""), void(0, Kv.k)(Pv)
      }
      Sv || (0, Gv.n)(), (0, Kv.j)();
      try {
        await async function(vv, zv, hv) {
          var Sv;
          let {
            backend: ev,
            adapter: pv
          } = vv;
          const dv = (0, av.O)(),
            {
              flushCrashReports: Nv,
              reportRenderReload: lv
            } = await Promise.resolve().then((() => Pv(40235)));
          lv(ev, "start_failed" === zv ? 0 : 1, gv(dv ? (0, av.C)() : null), {
            cause: zv,
            error: "lost" === zv && null !== (Sv = (0, mv.S)(dv ? (0, mv.G)((0, av.C)()) : null)) && void 0 !== Sv ? Sv : hv,
            context: {
              adapter: pv,
              boundAtMs: "start_failed" === zv ? null : (0, Kv.H)(),
              indirectHangs: (0, Kv.u)()
            }
          }), await Nv(Vv.e)
        }(hv, vv, zv)
      } catch (pv) {
        console.warn(`${Iv} ${hv.backend} failed at home (${vv}), and its report couldn't be sent`, pv)
      }(0, Vv.j)()
    }
    async function Xv() {
      if (!(0, av.O)()) {
        const vv = await (0, Kv.I)();
        if (null === vv || (0, mv.o)(vv)) return null;
        if (await (0, sv.j)(await vv.load(), Cv.e), !(0, av.O)()) return null
      }
      return ov((0, av.C)())
    }
    class uv {
      constructor(vv, zv, Pv, hv, Sv, ev) {
        this.page = vv, this.host = zv, this.id = Pv, this.canvas = hv, this.size = Sv, this.models = void 0, this.images = void 0, this.write = void 0, this.outcomes = [], this.closed = !1, this.quiet = 0, this.settled = [];
        const gv = {
            ...ev.images,
            glbUrl: vv => {
              var zv;
              return null !== (zv = this.models.drawnUrl(vv)) && void 0 !== zv ? zv : ev.images.glbUrl(vv)
            }
          },
          pv = zv => vv.modelFile(zv);
        this.images = new jv.f(gv, (vv => {
          console.warn(`${Iv} image ${vv.key.kind}:${vv.key.index}:${vv.key.word} failed`, vv.error)
        }), {
          fetchFile: pv,
          fetchImage: zv => vv.imageFile(zv)
        }), vv.startModels(), this.models = new fv.i(ev.files, ((zv, Pv) => vv.buildModel(zv, Pv)), (vv => {
          console.warn(`${Iv} model file ${vv.file} (${vv.url}) failed`, vv.error)
        }), {
          fetchFile: pv,
          onWritten: (vv, zv) => {
            this.images.glbWritten(vv, zv)
          },
          onTaken: (vv, zv) => {
            this.images.glbTaken(vv, zv)
          }
        }), this.write = (vv, zv, Pv) => {
          if (this.closed) return !0;
          if (vv === fv.b) {
            const vv = new DataView(Pv.buffer, Pv.byteOffset, Yv.c),
              hv = vv.getUint32(0, !0),
              Sv = vv.getUint32(Yv.f, !0),
              ev = this.page.hostCall(Ev, (() => this.host.jev(this.id, hv, zv, Pv.subarray(Yv.c))));
            return this.outcomes.push([Sv, ev]), !0
          }
          return vv === jv.d && (this.page.hostCall(void 0, (() => {
            this.host.Fev(this.id, Pv)
          })), !0)
        }
      }
      get isClosed() {
        return this.closed
      }
      get isStopped() {
        return this.page.isStopped
      }
      resize(vv, zv, Pv) {
        if (this.closed) return;
        const [hv, Sv] = bv(vv, zv, this.page.dpr(), Pv);
        hv === this.size[0] && Sv === this.size[1] || (this.size = [hv, Sv], this.page.hostCall(void 0, (() => {
          this.host.resize(this.id, hv, Sv)
        })))
      }
      setMob(vv, zv, Pv, hv) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.Rev(this.id, vv, zv, Pv, hv))))
      }
      setPet(vv, zv, Pv, hv) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.tev(this.id, vv, zv, Pv, hv))))
      }
      setPlayer(vv, zv, Pv) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.Oev(this.id, vv, zv, Pv))))
      }
      setFigure(vv, zv, Pv, hv) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.Kev(this.id, vv, zv, Pv, hv))))
      }
      replay() {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.replay(this.id))))
      }
      get orbit() {
        if (this.closed) return null;
        const vv = this.page.hostCall(null, (() => this.host.orbit(this.id)));
        return null === vv || vv.length < 3 ? null : {
          alpha: vv[0],
          beta: vv[1],
          radius: vv[2]
        }
      }
      setOrbit(vv) {
        let {
          alpha: zv,
          beta: Pv,
          radius: hv
        } = vv;
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.xev(this.id, zv, Pv, hv)
        }))
      }
      untilSettled() {
        return this.closed || this.page.isStopped ? Promise.resolve() : (this.quiet = 0, new Promise((vv => {
          this.settled.push(vv)
        })))
      }
      packChanged() {
        this.quiet = 0, this.models.refresh(), (0, Ov.k)(this.images)
      }
      feed() {
        this.models.drain(this.write);
        for (const [vv, zv] of this.outcomes) {
          const Pv = zv === Bv ? [] : [zv === Jv ? vv : (vv | fv.f) >>> 0];
          this.models.taken(vv, Pv)
        }
        this.outcomes.length = 0, this.images.drain(this.write)
      }
      collect(vv) {
        let zv = !1;
        if (vv) {
          const vv = this.host.Qev(this.id);
          for (const zv of vv) this.models.request(zv);
          const Pv = this.host.Iev(this.id);
          Pv.length > 0 && this.images.onEvent(Pv), zv = vv.length > 0 || Pv.length > 0
        }
        const Pv = this.page.modelsUnavailable ? 0 : this.models.asking + this.models.unanswered,
          hv = zv || Pv > 0 || this.images.waiting > 0 || this.images.inFlight > 0;
        this.quiet = hv ? 0 : this.quiet + 1, this.quiet >= 3 && this.resolveSettled()
      }
      close() {
        this.closed || (this.closed = !0, this.page.closePreview(this), this.resolveSettled())
      }
      abandon() {
        this.resolveSettled()
      }
      dispose(vv) {
        this.page.hostCall(void 0, (() => {
          const zv = this.host.close(this.id);
          zv.length > 0 && this.images.onEvent(zv), this.page.isTrapped || vv.aSv(this.id)
        })), this.images.dispose(), this.canvas.remove()
      }
      resolveSettled() {
        const vv = this.settled;
        this.settled = [];
        for (const zv of vv) zv()
      }
    }
    class vz {
      constructor(vv) {
        this.deps = vv, this.module = null, this.host = null, this.opening = null, this.pageCanvas = null, this.samples = 1, this.binding = null, this.sessionEnds = 0, this.lastEndReturned = !0, this.previews = new Map, this.nextId = 1, this.frameId = null, this.stopped = !1, this.loggedErrors = new Set, this.modelsListener = {
          onUnavailable: vv => {
            this.modelsFailed(vv)
          },
          onDecoderFailed: vv => {
            this.loggedErrors.has("modelDecoder") || (this.loggedErrors.add("modelDecoder"), console.warn(`${Iv} the Draco decoder didn't load: models waiting on it won't draw`, vv))
          },
          onWorkerLost: vv => {
            this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${Iv} a model worker was lost: ${vv}`))
          },
          onModuleRetry: () => {}
        }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.Bw = {
          setShaderPack: (vv, zv, Pv, hv, Sv) => (this.shaderPackArgs = [vv, zv, Pv, hv, Sv], this.handOverShaderPack(), !0)
        }, this.frame = vv => {
          this.frameId = null;
          const zv = this.host;
          if (null !== zv && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped) try {
            this.drawFrame(zv, vv)
          } catch (Pv) {
            if (!this.stopIfTrapped(Pv) && (this.stop(), (0, mv.s)(Pv))) return void this.deps.onRenderFailed("frames_refused", Pv);
            console.warn(`${Iv} the previews stopped: their frame threw`, Pv)
          }
        }, vv.pack.onChange((() => {
          this.packChanged()
        })), vv.game.onGameChange((() => {
          this.tellInGame()
        }))
      }
      packChanged() {
        if (!this.stopped)
          for (const vv of this.previews.values()) vv.packChanged()
      }
      dpr() {
        return this.deps.dpr()
      }
      get sessionBound() {
        var vv, zv;
        return null !== (vv = null === (zv = this.host) || void 0 === zv ? void 0 : zv.attached()) && void 0 !== vv && vv
      }
      get open() {
        return this.previews.size
      }
      get frameCostMs() {
        return 0 === this.costs.length ? 0 : this.costs.reduce(((vv, zv) => vv + zv), 0) / this.costs.length
      }
      async bindSession(vv, zv, Pv) {
        const hv = this.binding,
          Sv = this.sessionEnds;
        try {
          const ev = this.hostOf(vv);
          if (!ev.fev()) {
            const zv = (0, Uv.g)().sampleCount,
              gv = await Pv(zv);
            if (this.sessionEnds !== Sv) return this.keepRendererOfEndedSession(vv, ev, gv, zv, hv), zv;
            if (!ev.hev(gv)) throw new Error("the page has a renderer already");
            (0, Kv.o)(performance.now()), this.samples = zv, (0, Rv.g)((0, mv.n)(vv))
          }
          if (!ev.attach(zv)) throw new Error("the page's renderer is lent to another session");
          return this.samples
        } finally {
          this.binding === hv && this.endBinding()
        }
      }
      keepRendererOfEndedSession(vv, zv, Pv, hv, Sv) {
        if (!this.lastEndReturned || null !== this.binding && this.binding !== Sv) try {
          Pv.free()
        } catch (ev) {
          console.warn(`${Iv} an ended session's renderer didn't free`, ev)
        } else zv.hev(Pv) && ((0, Kv.o)(performance.now()), this.samples = hv, (0, Rv.g)(this.registryOf(vv)))
      }
      async beginSession() {
        var vv;
        let zv = () => {};
        const Pv = new Promise((vv => {
          zv = vv
        }));
        this.binding = {
          done: Pv,
          release: zv
        }, await (null === (vv = this.opening) || void 0 === vv ? void 0 : vv.catch((() => null)));
        const hv = this.pageCanvas;
        return this.pageCanvas = null, hv
      }
      endSession(vv) {
        var zv, Pv;
        if (this.sessionEnds++, this.lastEndReturned = vv, this.endBinding(), vv) {
          try {
            var hv;
            null === (hv = this.host) || void 0 === hv || hv.detach()
          } catch (Sv) {
            return void console.warn(`${Iv} the session's core kept the page's renderer`, Sv)
          }!0 === (null === (zv = this.host) || void 0 === zv ? void 0 : zv.attached()) && console.warn(`${Iv} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (Pv = this.host) || void 0 === Pv ? void 0 : Pv.fev()) && (0, Rv.g)(this.registryOf(this.module))
        }
      }
      endBinding() {
        var vv;
        null === (vv = this.binding) || void 0 === vv || vv.release(), this.binding = null
      }
      async openPreview(vv, zv, Pv, hv) {
        const Sv = await this.renderingHost(),
          ev = this.module;
        if (null === Sv || null === ev) throw new Error("this page can't draw previews: it has no renderer build");
        if (this.animations ??= this.loadAnimations(Sv), this.deps.pack.wanted(), this.isStopped) throw new Error("the previews stopped");
        this.guarded((() => {
          this.deps.provideBuiltInAnimationPack(ev)
        }));
        const gv = this.nextId++,
          pv = this.deps.createCanvas(),
          [dv, Nv] = bv(zv, Pv, this.deps.dpr(), hv);
        pv.width = dv, pv.height = Nv;
        if (!this.guarded((() => (ev.wSv(gv, pv), Sv.open(gv, dv, Nv, vv))))) throw this.hostCall(void 0, (() => {
          ev.aSv(gv)
        })), new Error("the page's renderer is lent to a session that is running");
        this.restartModelsIfFailed();
        const lv = new uv(this, Sv, gv, pv, [dv, Nv], this.deps);
        return this.previews.set(gv, lv), this.startFrames(), lv
      }
      prefetch() {
        if (this.prefetched || this.isStopped || (0, Kv.c)() || null !== (0, Kv.E)()) return;
        this.prefetched = !0;
        (null === this.module ? this.loadModule() : Promise.resolve(this.module)).then((vv => {
          null === vv || this.isStopped || (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles())
        }), (() => {}))
      }
      modelFile(vv) {
        return this.prefetchedOr(vv, this.deps.fetchModel)
      }
      imageFile(vv) {
        return this.prefetchedOr(vv, hv.I)
      }
      prefetchedOr(vv, zv) {
        const Pv = this.prefetchedFiles.get(vv);
        return void 0 === Pv ? zv(vv) : Pv.catch((() => zv(vv)))
      }
      async prefetchPlayerFiles() {
        const vv = this.deps.playerFile().then((vv => this.deps.files.url(vv))),
          zv = await Promise.all([vv, this.deps.images.lifeformAtlasUrl(Ov.e)]).catch((() => null));
        if (null === zv) return;
        const [Pv, hv] = zv, Sv = (vv, zv) => {
          if (null === vv) return;
          const Pv = zv(vv);
          this.prefetchedFiles.set(vv, Pv), Pv.catch((() => {
            this.prefetchedFiles.delete(vv)
          }))
        };
        Sv(Pv, (vv => this.modelFile(vv))), Sv(hv, (vv => this.imageFile(vv)))
      }
      loadModule() {
        return this.moduleLoad ??= this.deps.loadModule().then((vv => (null === vv && (this.moduleLoad = null), vv)), (vv => {
          throw this.moduleLoad = null, vv
        })), this.moduleLoad
      }
      fetchAnimationTable() {
        return this.animationTable ??= this.deps.fetchAnimations().catch((vv => {
          throw this.animationTable = null, vv
        })), this.animationTable
      }
      get modelsUnavailable() {
        return this.unavailable
      }
      startModels() {
        this.models ??= this.deps.startModels(this.modelsListener).catch((vv => (this.modelsFailed(vv), () => new Promise((() => {})))))
      }
      buildModel(vv, zv) {
        return this.startModels(), this.models.then((Pv => Pv(vv, zv))).then((vv => this.unavailable ? new Promise((() => {})) : vv))
      }
      restartModelsIfFailed() {
        this.unavailable && !this.modelsRestarted && 0 === this.previews.size && (this.modelsRestarted = !0, this.models = null, this.unavailable = !1, this.startModels())
      }
      modelsFailed(vv) {
        this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${Iv} the model workers didn't start: models won't draw in the previews`, vv))
      }
      called(vv) {
        return 0 !== vv && this.logError(vv, 0), vv
      }
      closePreview(vv) {
        this.previews.delete(vv.id), null !== this.module && vv.dispose(this.module), 0 === this.previews.size && null !== this.frameId && (this.deps.cancelFrame(this.frameId), this.frameId = null)
      }
      hostOf(vv) {
        if (null !== this.module && this.module !== vv) throw new Error("a second renderer module on one page");
        return this.module = vv, null === this.host && (this.host = this.guarded((() => new vv.WSv)), this.tellInGame(), this.handOverShaderPack()), this.host
      }
      tellInGame() {
        const {
          host: vv
        } = this;
        null !== vv && this.outsideCall("the game's start or end", (() => {
          vv.Vev(this.deps.game.inGame())
        }))
      }
      handOverShaderPack() {
        const {
          host: vv,
          shaderPackArgs: zv
        } = this;
        null !== vv && null !== zv && this.outsideCall("the shader pack's hand-over", (() => {
          vv.lPv(...zv) || console.warn(`${Iv} the host refused the shader pack: previews draw without it at home`)
        }))
      }
      outsideCall(vv, zv) {
        try {
          this.hostCall(void 0, zv)
        } catch (Pv) {
          this.stop(), console.warn(`${Iv} the previews stopped: ${vv} threw`, Pv)
        }
      }
      async loadAnimations(vv) {
        const zv = gv(null),
          Pv = this.module;
        try {
          zv.wasm = null === Pv ? zv.wasm : this.hostCall(zv.wasm, (() => Pv.CT()))
        } catch {}
        let hv, Sv;
        try {
          hv = await this.fetchAnimationTable()
        } catch (ev) {
          return void this.deps.onAnimationsFailed({
            stage: "fetch",
            error: ev
          }, zv)
        }
        if (!this.settleIfTrapped()) {
          try {
            Sv = vv.nev(hv)
          } catch (ev) {
            if (this.stopIfTrapped(ev)) return;
            return void this.deps.onAnimationsFailed({
              stage: "decode",
              error: ev
            }, zv)
          }
          Sv || this.deps.onAnimationsFailed({
            stage: "decode",
            error: null
          }, zv)
        }
      }
      async renderingHost() {
        if (null !== this.binding && await this.binding.done, this.settleIfTrapped()) return null;
        const vv = this.host;
        return null !== vv && this.guarded((() => vv.fev())) ? vv : (this.opening ??= this.openAtHome().finally((() => {
          this.opening = null
        })), this.opening)
      }
      async openAtHome() {
        var vv;
        const zv = null !== (vv = this.module) && void 0 !== vv ? vv : await this.loadModule();
        if (null === zv) return null;
        const Pv = this.hostOf(zv),
          hv = () => this.guarded((() => Pv.fev()));
        if (hv()) return Pv;
        if (null !== (0, Kv.E)() || (0, Kv.c)()) return null;
        const Sv = this.deps.createCanvas();
        Sv.width = 1, Sv.height = 1;
        const ev = await this.deps.openExtras();
        if (this.settleIfTrapped()) return null;
        const gv = (0, Uv.g)().sampleCount;
        let pv;
        try {
          pv = await (0, mv.A)(zv, "previewRenderer", Sv, gv, xv.b, ev)
        } catch (dv) {
          throw dv instanceof nv.d ? this.stopForTrap(dv) : (0, mv.w)(dv) && await this.deps.onRenderFailed("start_failed", dv), dv
        }
        return this.guarded((() => Pv.hev(pv))) ? ((0, Kv.o)(performance.now()), this.samples = gv, this.pageCanvas = Sv, (0, Rv.g)(this.registryOf(zv)), Pv) : hv() ? Pv : null
      }
      startFrames() {
        null !== this.frameId || this.isStopped || (this.frameId = this.deps.requestFrame(this.frame))
      }
      drawFrame(vv, zv) {
        for (const gv of this.previews.values()) gv.feed();
        if (this.stopped) return;
        const Pv = this.deps.now(),
          hv = vv.frame(zv);
        this.costs.push(this.deps.now() - Pv), this.costs.length > 120 && this.costs.shift();
        const Sv = 0 !== (256 & hv),
          ev = 255 & hv;
        for (const gv of this.previews.values()) {
          if (this.stopped) return;
          gv.collect(Sv)
        }
        if (!this.stopped) {
          if (Sv) {
            const zv = vv.qev();
            for (let vv = 0; vv + 1 < zv.length; vv += 2) this.logError(zv[vv], zv[vv + 1])
          }
          if (ev === Hv) return this.stop(), void this.deps.onRenderFailed("lost");
          if (ev === Mv) return this.stop(), void this.deps.onFatal(vv.Gev(), vv.mev());
          if (ev === yv) return this.stop(), void console.warn(`${Iv} the previews stopped: the page's renderer went with its session`);
          (0, cv.b)(zv), this.startFrames()
        }
      }
      get isStopped() {
        return this.stopped || this.isTrapped
      }
      get isTrapped() {
        return null !== this.module && ((0, nv.j)(this.module) || "failed" === (0, av.z)())
      }
      hostCall(vv, zv) {
        if (this.settleIfTrapped()) return vv;
        try {
          return zv()
        } catch (Pv) {
          if (this.stopIfTrapped(Pv)) return vv;
          throw Pv
        }
      }
      guarded(vv) {
        if (this.settleIfTrapped()) throw new Error("the previews stopped: their module trapped");
        try {
          return vv()
        } catch (zv) {
          throw this.stopIfTrapped(zv), zv
        }
      }
      registryOf(vv) {
        return {
          bzv: (zv, Pv) => {
            this.hostCall(void 0, (() => {
              vv.bzv(zv, Pv)
            }))
          },
          rzv: zv => {
            this.hostCall(void 0, (() => {
              vv.rzv(zv)
            }))
          }
        }
      }
      settleIfTrapped() {
        return !!this.isTrapped && (this.stopped || (this.stop(), (0, Rv.g)(null)), !0)
      }
      stopIfTrapped(vv) {
        return !(null === this.module || !(0, nv.k)(this.module, vv)) && (this.stopForTrap(vv), !0)
      }
      stopForTrap(vv) {
        this.stop(), (0, Rv.g)(null), (0, qv.f)("previews", vv)
      }
      stop() {
        this.stopped = !0;
        for (const vv of this.previews.values()) vv.abandon()
      }
      logError(vv, zv) {
        const Pv = `${vv}:${zv}`;
        this.loggedErrors.has(Pv) || (this.loggedErrors.add(Pv), console.warn(`${Iv} error ${vv} (detail ${zv})`))
      }
    }
    let zz = null;

    function Pz() {
      return zz ??= new vz(function() {
        const vv = (0, Fv.n)(iv.clientSideServerUrls.staticUrl, {
          packUrl: vv => {
            var zv, Pv;
            return null !== (zv = null === (Pv = Ov.g.current) || void 0 === Pv ? void 0 : Pv.modelUrl(vv)) && void 0 !== zv ? zv : null
          }
        });
        return {
          loadModule: Xv,
          startModels: async vv => {
            const {
              pageModelPool: zv
            } = await Pv.e(42).then((() => Pv(42755))), {
              pool: hv
            } = zv(vv);
            return (vv, zv) => hv.build(vv, zv)
          },
          fetchAnimations: async () => pv(await (0, hv.I)(rv())),
          playerFile: async () => (await (0, Fv.m)()).PLAYER_FILE,
          onAnimationsFailed: (vv, zv) => {
            dv("previewAnimations", rv(), vv, zv)
          },
          provideBuiltInAnimationPack: vv => {
            Wv().provide(vv)
          },
          openExtras: Kv.w,
          files: vv,
          images: (0, Ov.n)((0, jv.o)(vv.url), (() => Ov.g.current)),
          pack: Ov.g,
          game: Dv.e,
          fetchModel: vv => (0, Fv.g)(vv),
          createCanvas: () => document.createElement("canvas"),
          dpr: () => window.devicePixelRatio,
          now: () => performance.now(),
          requestFrame: vv => requestAnimationFrame(vv),
          cancelFrame: vv => {
            cancelAnimationFrame(vv)
          },
          onRenderFailed: kv,
          onFatal: (vv, zv) => {
            console.error(`${Iv} the previews stopped: renderer error ${vv} (detail ${zv})`)
          }
        }
      }()), zz
    }
    var hz = Pv(609),
      Sz = Pv(38164),
      ez = Pv(3037);
    const gz = {
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
    const pz = "[bloxd-previews]",
      dz = new Uint32Array(5);

    function Nz(vv) {
      return hz.i.indexOf(vv)
    }
    const lz = new WeakSet;

    function Tz(vv) {
      const zv = (0, Sz.d)(vv),
        Pv = null === zv ? -1 : Wz(zv);
      return -1 !== Pv ? Pv : (lz.has(vv) || (lz.add(vv), console.warn(`${pz} an animation the previews' table lacks: the mob idles instead`)), -1)
    }

    function Wz(vv) {
      var zv;
      return null !== (zv = gz[vv]) && void 0 !== zv ? zv : -1
    }

    function wz(vv, zv) {
      const {
        canvas: Pv
      } = zv;
      Pv.style.width = "100%", Pv.style.height = "100%", Pv.style.display = "block", vv.appendChild(Pv)
    }

    function az(vv) {
      const zv = vv.getBoundingClientRect();
      return [zv.width, zv.height]
    }
    class sz {
      constructor(vv, zv) {
        this.preview = vv, this.showView = zv
      }
      show(vv) {
        this.showView(this.preview, vv)
      }
      resize(vv, zv) {
        this.preview.resize(vv, zv)
      }
      close() {
        this.preview.close()
      }
    }
    class Cz {
      constructor(vv) {
        this.preview = vv, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.detachControls = void 0, this.detachControls = function(vv) {
          const {
            canvas: zv
          } = vv;
          let Pv = null;
          const hv = vv => {
              var hv;
              Pv = {
                pointer: vv.pointerId,
                x: vv.clientX,
                y: vv.clientY
              }, null === (hv = zv.setPointerCapture) || void 0 === hv || hv.call(zv, vv.pointerId)
            },
            Sv = zv => {
              var hv;
              const Sv = vv.orbit;
              if ((null === (hv = Pv) || void 0 === hv ? void 0 : hv.pointer) !== zv.pointerId || null === Sv) return;
              const ev = zv.clientX - Pv.x,
                gv = zv.clientY - Pv.y;
              Pv = {
                ...Pv,
                x: zv.clientX,
                y: zv.clientY
              }, vv.setOrbit({
                alpha: Sv.alpha - .01 * ev,
                beta: Math.min(Math.PI - .01, Math.max(.01, Sv.beta - .01 * gv)),
                radius: Sv.radius
              })
            },
            ev = vv => {
              var zv;
              (null === (zv = Pv) || void 0 === zv ? void 0 : zv.pointer) === vv.pointerId && (Pv = null)
            },
            gv = zv => {
              const Pv = vv.orbit;
              if (null === Pv) return;
              zv.preventDefault();
              const hv = zv.deltaY * (zv.deltaMode === WheelEvent.DOM_DELTA_LINE ? 40 : zv.deltaMode === WheelEvent.DOM_DELTA_PAGE ? 800 : 1),
                Sv = Math.min(100, Math.max(5, Pv.radius + .08 * hv));
              vv.setOrbit({
                ...Pv,
                radius: Sv
              })
            };
          return zv.style.touchAction = "none", zv.addEventListener("pointerdown", hv), zv.addEventListener("pointermove", Sv), zv.addEventListener("pointerup", ev), zv.addEventListener("pointercancel", ev), zv.addEventListener("wheel", gv, {
            passive: !1
          }), () => {
            zv.removeEventListener("pointerdown", hv), zv.removeEventListener("pointermove", Sv), zv.removeEventListener("pointerup", ev), zv.removeEventListener("pointercancel", ev), zv.removeEventListener("wheel", gv)
          }
        }(vv), this.dev = {
          canvas: () => vv.canvas,
          isolateHead: () => {
            console.warn(`${pz} isolateHead: noa's character preview only`)
          }
        }, this.apply(), this.ready = vv.untilSettled().then((() => {
          if (vv.isStopped) throw new Error(`${pz} the previews stopped before the character drew`);
          this.built = !0
        }))
      }
      isReady() {
        return this.built && !this.preview.isClosed
      }
      setCosmetic(vv, zv) {
        this.cosmetics[vv] = zv, this.apply()
      }
      playEmote(vv) {
        null === vv || vv !== this.emote ? (this.emote = vv, this.apply()) : this.preview.replay()
      }
      untilDrawn(vv) {
        return this.preview.untilSettled()
      }
      setOrbit(vv) {
        let {
          yaw: zv,
          pitch: Pv,
          radius: hv
        } = vv;
        const Sv = this.preview.orbit;
        null !== Sv && this.preview.setOrbit({
          alpha: zv,
          beta: Pv,
          radius: null !== hv && void 0 !== hv ? hv : Sv.radius
        })
      }
      resetCamera() {}
      resize(vv, zv) {
        this.preview.resize(vv, zv)
      }
      close() {
        this.detachControls(), this.preview.close()
      }
      apply() {
        var vv;
        this.preview.setPlayer(JSON.stringify(this.cosmetics), dz, null === (vv = this.emote) ? -1 : Wz(vv))
      }
    }

    function iz(vv, zv) {
      let {
        mobType: Pv,
        variation: hv,
        animation: Sv
      } = zv;
      vv.setMob(Nz(Pv), null !== hv && void 0 !== hv ? hv : "", 1, Tz(Sv))
    }

    function cz(vv, zv) {
      let {
        mobType: Pv,
        variation: hv,
        metaInfo: Sv,
        tamed: ev
      } = zv;
      vv.setPet(Nz(Pv), hv, Sv, ev)
    }
    const Gz = {
      aimed: .533 / 1.15 * 1.1,
      ready: .16 / .85 * 1.1
    };
    class mz {
      constructor(vv, zv, Pv, hv) {
        this.preview = null, this.closed = !1, this.figure = null, this.shown = !1, this.order = "", this.span = {
          left: 0,
          width: 0
        }, this.lineup = [0, 0], this.given = null, this.loaded = !1, vv(Pv.width, hv[1], hv).then((vv => {
          if (this.closed) return void vv.close();
          const {
            style: Pv
          } = vv.canvas;
          Pv.position = "absolute", Pv.top = "0", Pv.visibility = "hidden", wz(zv, vv), this.preview = vv, this.apply()
        })).catch((vv => {
          console.error(`${pz} couldn't open a lineup figure`, vv)
        }))
      }
      update(vv, zv, Pv, hv, Sv) {
        this.figure = vv, this.shown = zv, this.order = Pv, this.span = hv, this.lineup = Sv, this.apply()
      }
      close() {
        var vv;
        this.closed = !0, null === (vv = this.preview) || void 0 === vv || vv.close(), this.preview = null
      }
      apply() {
        const {
          preview: vv,
          figure: zv,
          lineup: Pv
        } = this;
        if (null === vv || null === zv) return;
        if (this.given !== zv) {
          var hv;
          this.given = zv, this.loaded = !1;
          const Pv = null === zv.YF ? 0 : null !== (hv = (0, ez.c)(zv.YF)) && void 0 !== hv ? hv : 0;
          vv.setFigure(function(vv) {
            return JSON.stringify(Object.fromEntries(vv.cosmetics))
          }(zv), Pv, Tz(zv.animation), zv.size), vv.untilSettled().then((() => {
            this.given === zv && (this.loaded = !0, this.apply())
          }))
        }
        const {
          left: Sv,
          width: ev
        } = this.span;
        vv.resize(ev, Pv[1], Pv);
        const {
          style: gv
        } = vv.canvas;
        gv.left = `${Sv}px`, gv.width = `${ev}px`, gv.zIndex = this.order, gv.visibility = this.shown && this.loaded ? "visible" : "hidden"
      }
    }
    class jz {
      constructor(vv, zv) {
        this.open = zv, this.layer = void 0, this.figures = [], this.view = {
          figures: [],
          shown: []
        }, this.size = void 0, this.size = az(vv), this.layer = document.createElement("div");
        const {
          style: Pv
        } = this.layer;
        Pv.position = "relative", Pv.isolation = "isolate", Pv.overflow = "hidden", Pv.width = "100%", Pv.height = "100%", Pv.pointerEvents = "none", vv.appendChild(this.layer)
      }
      show(vv) {
        this.view = vv, this.place()
      }
      resize(vv, zv) {
        this.size = [vv, zv], this.place()
      }
      close() {
        for (const vv of this.figures) vv.close();
        this.figures = [], this.layer.remove()
      }
      place() {
        const {
          figures: vv,
          shown: zv
        } = this.view;
        for (const hv of this.figures.splice(vv.length)) hv.close();
        const {
          size: Pv
        } = this;
        vv.forEach(((hv, Sv) => {
          var ev;
          const gv = function(vv, zv, Pv, hv) {
            let [Sv, ev] = hv;
            const gv = (vv + .5) * Sv / zv,
              pv = Math.min(Math.max(Sv / zv, 2 * Pv * ev), 2 * Math.max(gv, Sv - gv));
            return {
              left: gv - pv / 2,
              width: pv
            }
          }(Sv, vv.length, function(vv) {
            let {
              animation: zv,
              size: Pv
            } = vv;
            const {
              aimed: hv,
              ready: Sv
            } = Gz;
            return (Tz(zv) === gz.gunAimed ? hv : Sv) * Pv
          }(hv), Pv);
          this.figures[Sv] ??= new mz(this.open, this.layer, gv, Pv), this.figures[Sv].update(hv, null !== (ev = zv[Sv]) && void 0 !== ev && ev, function(vv, zv) {
            return String(Math.round(1e3 * vv) + zv)
          }(hv.size, Sv), gv, Pv)
        }))
      }
    }
    const fz = {
      player: Av,
      store: Lv
    };
    class Fz {
      constructor(vv) {
        this.page = vv
      }
      async openMob(vv) {
        return new sz(await this.open(vv, Zv), iz)
      }
      async openPet(vv) {
        return new sz(await this.open(vv, Zv), cz)
      }
      openMobLineup(vv) {
        return new jz(vv, ((vv, zv, Pv) => this.page.openPreview(Zv, vv, zv, Pv)))
      }
      async openCharacter(vv, zv) {
        return new Cz(await this.open(vv, fz[zv]))
      }
      async open(vv, zv) {
        const [Pv, hv] = az(vv), Sv = await this.page.openPreview(zv, Pv, hv);
        return wz(vv, Sv), Sv
      }
    }
  },
  36266: (vv, zv, Pv) => {
    Pv.d(zv, {
      B: () => sv,
      E: () => iv,
      c: () => hv,
      d: () => Sv,
      h: () => Wv,
      l: () => Cv,
      m: () => lv,
      q: () => cv,
      r: () => dv,
      v: () => Nv,
      y: () => wv,
      z: () => av
    });
    const hv = [{
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

    function Sv(vv, zv) {
      const {
        numLines: Pv,
        charsPerLine: Sv
      } = hv[zv];
      return Gv(vv, Pv, Sv, !1)
    }
    const ev = 7 / 8,
      gv = .25,
      pv = 8;

    function dv(vv, zv) {
      return {
        width: Math.min(vv, pv) - 2 * gv,
        height: Math.min(zv, pv) - 2 * gv
      }
    }

    function Nv(vv, zv, Pv) {
      const Sv = dv(vv, zv),
        {
          numLines: gv,
          charsPerLine: pv
        } = hv[Pv];
      return {
        numLines: Math.max(1, Math.floor(gv / ev * Sv.height)),
        charsPerLine: Math.max(1, Math.floor(pv * Sv.width))
      }
    }

    function lv(vv, zv, Pv, hv) {
      const {
        numLines: Sv,
        charsPerLine: ev
      } = Nv(Pv, hv, zv);
      return Gv(vv, Sv, ev, !1)
    }
    const Tv = 32e3;

    function Wv(vv) {
      return vv.slice(0, Tv)
    }
    const wv = 512e3,
      av = 64,
      sv = wv;

    function Cv(vv, zv) {
      const Pv = Math.max(0, sv - zv),
        hv = Math.min(wv, Pv);
      return vv.slice(0, hv)
    }
    const iv = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      el: {
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

    function cv(vv, zv) {
      const {
        numLines: Pv,
        charsPerLine: hv
      } = iv[zv];
      return Gv(vv, Pv, hv, !1)
    }

    function Gv(vv, zv, Pv, hv, Sv) {
      (Sv || hv) && (vv = vv.slice(0, null !== Sv && void 0 !== Sv ? Sv : zv * Pv));
      const ev = vv.split("\n");
      if (ev.length > zv && ev.splice(zv, ev.length - zv), !hv)
        for (let gv = 0; gv < ev.length; gv++) {
          const vv = ev[gv];
          vv.length > Pv && (ev[gv] = vv.substring(0, Pv), ev.length < zv && ev.splice(gv + 1, 0, vv.substring(Pv)))
        }
      return ev.join("\n")
    }
  },
  42674: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/builtInAnimations.anim.38e056f49512e10b7206.gz"
  },
  42681: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/previewAnimations.dat.24d2343c38c8f9b3fb85.gz"
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);