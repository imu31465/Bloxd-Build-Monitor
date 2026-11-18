export const id = 52;
export const ids = [52];
export const modules = {
  37598: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => yB,
      c: () => pB
    });
    const VB = new WeakMap;

    function yB(BB, TB) {
      return VB.set(BB, TB), BB
    }

    function pB(BB) {
      var TB;
      return null !== (TB = VB.get(BB)) && void 0 !== TB ? TB : null
    }
  },
  37629: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => JB
    });
    var VB = dB(1105);

    function yB(BB) {
      const TB = /(\d*\.?\d+)px/.exec(BB);
      return TB ? Number(TB[1]) : null
    }

    function pB(BB) {
      return BB.split(/[\s,]+/).pop()
    }
    let lB = !1;
    const JB = {
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
      drawText: function(BB, TB, VB, JB, YB, gB) {
        if (YB <= 0 || gB <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: oB,
          fontVariant: kB,
          fontWeight: LB,
          fontSize: OB,
          font: DB
        } = this, uB = [oB, kB, LB, `${OB}px`, DB].filter(Boolean).join(" "), HB = [
          [LB, `${OB}px`, pB(DB)].filter(Boolean).join(" "), `${OB}px sans-serif`
        ], EB = BB.font, vB = function(BB, TB, dB) {
          for (const VB of TB) {
            BB.font = VB;
            const TB = yB(BB.font),
              lB = pB(VB);
            if (null !== TB && Math.abs(TB - dB) <= .5 && BB.font.toLowerCase().includes(lB.toLowerCase())) return VB
          }
          return null
        }(BB, [uB, ...HB], OB);
        vB !== uB && function(BB, TB, VB) {
          lB || (lB = !0, Promise.resolve().then((() => dB(955))).then((dB => {
            let {
              wu: yB
            } = dB;
            yB(new Error("A canvas didn't take canvasTxt's font"), {
              font: BB,
              RO: TB,
              drawnWith: null !== VB && void 0 !== VB ? VB : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(uB, EB, vB);
        const mB = yB(BB.font);
        if (null === vB && null !== mB && mB > 0) {
          const dB = OB / mB;
          BB.save();
          try {
            return BB.scale(dB, dB), {
              height: this.drawLines(BB, TB, VB / dB, JB / dB, YB / dB, gB / dB, mB).height * dB
            }
          } finally {
            BB.restore()
          }
        }
        return this.drawLines(BB, TB, VB, JB, YB, gB, OB)
      },
      drawLines: function(BB, TB, dB, yB, pB, lB, JB) {
        const YB = dB + pB,
          gB = yB + lB;
        let oB, kB = yB + lB / 2 + JB / 2;
        "right" === this.align ? (oB = YB, BB.textAlign = "right") : "left" === this.align ? (oB = dB, BB.textAlign = "left") : (oB = dB + pB / 2, BB.textAlign = "center");
        for (const VB of TB) {
          BB.measureText(VB).width >= pB && (TB = TB.replace(VB, ""))
        }
        TB = (0, VB.V)(TB);
        const LB = [],
          OB = TB.split("\n"),
          DB = this.justify ? BB.measureText("\u200a").width : 0;
        OB.forEach((TB => {
          let dB = BB.measureText(TB).width;
          if (dB <= pB) LB.push(TB);
          else {
            let VB = TB;
            const yB = pB;
            let lB, JB, YB;
            for (dB = BB.measureText(VB).width; dB > yB;) {
              for (lB = 0, JB = 0, YB = ""; JB < yB;) lB++, YB = VB.substr(0, lB), JB = BB.measureText(YB).width;
              lB--, YB = YB.substr(0, lB);
              const TB = lB;
              if (" " !== VB.substr(lB, 1)) {
                for (;
                  " " !== VB.substr(lB, 1) && 0 !== lB;) lB--;
                0 === lB && (lB = TB), YB = VB.substr(0, lB)
              }
              YB = this.justify ? this.justifyLine(BB, YB, DB, "\u200a", pB) : YB, VB = VB.substr(lB), dB = BB.measureText(VB).width, LB.push(YB)
            }
            dB > 0 && LB.push(VB)
          }
        }));
        const uB = this.lineHeight ? this.lineHeight : this.getTextHeight(BB, TB),
          HB = uB * (LB.length - 1),
          EB = HB / 2;
        let vB = yB;
        "top" === this.vAlign ? kB = yB + JB : "bottom" === this.vAlign ? (kB = gB - HB, vB = gB) : (vB = yB + lB / 2, kB -= EB), LB.forEach((TB => {
          TB = TB.trim(), BB.fillText(TB, oB, kB), kB += uB
        })), this.debug && (BB.lineWidth = 3, BB.strokeStyle = "#00909e", BB.strokeRect(dB, yB, pB, lB), BB.lineWidth = 2, BB.strokeStyle = "#f6d743", BB.beginPath(), BB.moveTo(oB, yB), BB.lineTo(oB, gB), BB.stroke(), BB.strokeStyle = "#ff6363", BB.beginPath(), BB.moveTo(dB, vB), BB.lineTo(YB, vB), BB.stroke());
        return {
          height: HB + uB
        }
      },
      getTextHeight: function(BB, TB) {
        const dB = BB.textBaseline;
        BB.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: VB
        } = BB.measureText(TB);
        return BB.textBaseline = dB, VB
      },
      justifyLine: function(BB, TB, dB, VB, yB) {
        const pB = TB.trim(),
          lB = BB.measureText(pB).width,
          JB = pB.split(/\s+/).length - 1,
          YB = Math.floor((yB - lB) / dB);
        if (JB <= 0 || YB <= 0) return pB;
        const gB = Math.floor(YB / JB);
        let oB = YB - JB * gB,
          kB = [];
        for (let LB = 0; LB < gB; LB++) kB.push(VB);
        kB = kB.join("");
        return pB.replace(/\s+/g, (BB => {
          const TB = oB > 0 ? kB + VB : kB;
          return oB--, BB + TB
        }))
      }
    }
  },
  37636: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => uB,
      g: () => DB,
      h: () => LB,
      k: () => oB,
      o: () => kB
    });
    var VB = dB(3716),
      yB = dB(279);
    const pB = 1024,
      lB = 1536,
      JB = 2 * VB.k + 1,
      YB = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      gB = 1.5;

    function oB(BB, TB, dB) {
      if ("string" !== typeof BB) return TB;
      try {
        const dB = JSON.parse(BB);
        return dB && "object" === typeof dB ? dB : TB
      } catch (VB) {
        return void 0 !== dB && console.error(`Couldn't parse ${dB}`, VB), TB
      }
    }

    function kB(BB) {
      return oB(BB, null, "a leaderboard's rows")
    }

    function LB(BB, TB) {
      var dB, VB;
      return null !== TB && void 0 !== TB ? TB : {
        status: null !== (dB = BB.status) && void 0 !== dB ? dB : "loading",
        entries: null !== (VB = BB.entries) && void 0 !== VB ? VB : []
      }
    }

    function OB(BB, TB) {
      return "number" === typeof BB && Number.isFinite(BB) && BB > 0 ? BB : TB
    }

    function DB(BB, TB) {
      const dB = OB(BB.size, 1);
      let VB = OB(BB.width, OB(2.5 * dB, 2.5)),
        yB = OB(BB.height, OB(3.75 * dB, 3.75));
      Number.isFinite(pB * yB / VB) && Number.isFinite(lB * VB / yB) || (VB = 2.5, yB = 3.75);
      const JB = yB / VB,
        YB = Math.max(1, Math.min(pB, TB / JB));
      return {
        width: VB,
        height: yB,
        layoutWidth: Math.max(pB, lB / JB),
        layoutHeight: Math.max(lB, pB * JB),
        pixelWidth: Math.round(YB),
        pixelHeight: Math.round(Math.max(1, Math.min(TB, YB * JB)))
      }
    }

    function uB(BB, TB, dB, lB, oB, kB) {
      BB.setTransform(1, 0, 0, 1, 0, 0), BB.fillStyle = yB.L.defaultNameTagBackground, BB.fillRect(0, 0, TB, dB), BB.scale(TB / lB.layoutWidth, dB / lB.layoutHeight), BB.translate((lB.layoutWidth - pB) / 2, 0),
        function(BB, TB, dB, pB) {
          var lB, oB, kB, LB;
          const {
            top: OB,
            around: DB,
            showPlayerText: uB,
            localPlayerDbId: vB
          } = dB, {
            whiteUiText: mB,
            grayUiText: iB,
            yellowUiText: NB
          } = yB.L;
          BB.textBaseline = "middle";
          const tB = function(TB, dB, VB, yB, pB, lB) {
              let JB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              BB.font = `bold ${yB}px 'Jetbrains Mono', monospace`, BB.fillStyle = pB, BB.textAlign = JB;
              let YB = TB.replace(/[\r\n\t]/g, " ");
              if (BB.measureText(YB).width > lB) {
                for (; YB.length > 0 && BB.measureText(`${YB}\u2026`).width > lB;) YB = YB.slice(0, -1);
                YB += "\u2026"
              }
              BB.fillText(YB, dB, VB)
            },
            fB = TB => {
              BB.fillStyle = mB, BB.globalAlpha = .15, BB.fillRect(24, TB, 976, 2), BB.globalAlpha = 1
            },
            sB = null === vB ? null : (0, yB.tc)(vB),
            MB = BB => null !== sB && BB.playerHash === sB,
            zB = HB(OB.entries, VB.o),
            wB = "ready" === OB.status && zB.length > 0,
            UB = null === DB ? [] : HB(DB.entries, JB),
            FB = zB.some(MB),
            KB = null === DB ? null : function(BB) {
              const TB = BB;
              if (!TB || !Number.isFinite(TB.rank) || !Number.isFinite(TB.tied) || !Number.isFinite(TB.total)) return null;
              return TB
            }(DB.standing),
            rB = UB.find(MB),
            IB = zB.find(MB),
            cB = null === KB || void 0 === rB ? null : {
              value: rB.value,
              rank: KB.rank
            },
            SB = EB(zB, void 0 === IB || IB.value === (null === cB || void 0 === cB ? void 0 : cB.value) ? cB : null),
            PB = EB(UB, cB),
            QB = (BB, TB) => {
              const dB = BB.findIndex(MB);
              return dB >= 0 ? TB[dB] : null
            },
            RB = null !== (lB = null !== (oB = null === KB || void 0 === KB ? void 0 : KB.rank) && void 0 !== oB ? oB : QB(UB, PB)) && void 0 !== lB ? lB : QB(zB, SB);
          BB.font = "bold 34px 'Jetbrains Mono', monospace";
          const aB = [...wB ? SB : [], ...FB ? [] : PB],
            ZB = Math.min(280, Math.max(0, ...aB.map((TB => BB.measureText(YB.format(TB)).width)))),
            XB = ZB <= 80,
            WB = XB ? 80 : 32 + ZB,
            hB = XB ? 148 : WB + 28,
            CB = 660 - hB;
          tB(`TOP ${VB.o}  /  ALL TIME`, 24, 52, 28, iB, 976), tB(uB ? String(null !== (kB = TB.title) && void 0 !== kB ? kB : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, mB, 976), tB("RANK", 32, 174, 28, iB, hB - 40), tB("PLAYER", hB, 174, 28, iB, CB), tB(uB ? String(null !== (LB = TB.scoreLabel) && void 0 !== LB ? LB : "Score").slice(0, 24) : "Score", 992, 174, 28, iB, 304, "right"), fB(202);
          const GB = (pB - 232) / (VB.o + gB + JB),
            qB = 208 + VB.o * GB,
            xB = qB + gB * GB,
            jB = (TB, dB, VB, yB) => {
              const pB = MB(TB);
              BB.fillStyle = pB ? NB : mB, BB.globalAlpha = pB ? .15 : yB ? .035 : 0, BB.fillRect(24, VB - GB / 2 + 1, 976, GB - 2), BB.globalAlpha = 1;
              const lB = pB ? NB : mB;
              tB(YB.format(dB), WB, VB, 34, lB, XB ? 80 : ZB, XB ? "center" : "right"), tB(uB ? String(TB.name).slice(0, 64) : "Player", hB, VB, 34, lB, CB);
              const JB = YB.format(TB.value);
              tB(BB.measureText(JB).width > 304 ? TB.value.toExponential(6) : JB, 992, VB, 34, lB, 304, "right")
            };
          if (wB)
            for (const [VB, yB] of zB.entries()) jB(yB, SB[VB], 208 + (VB + .5) * GB, VB % 2 === 0);
          else {
            const BB = "error" === OB.status,
              TB = BB ? "Couldn't load leaderboard" : "ready" === OB.status ? "No scores yet" : "Loading leaderboard\u2026",
              dB = BB ? "Trying again shortly" : "ready" === OB.status ? "Be the first on the board!" : "Fetching the top players",
              VB = (208 + qB) / 2;
            tB(TB, 512, VB - 28, 40, BB ? yB.L.redUiText : mB, 960, "center"), tB(dB, 512, VB + 27, 30, iB, 960, "center")
          }
          const AB = qB + gB * GB / 2;
          if (null === RB) fB(AB);
          else {
            const TB = null === KB ? 0 : KB.tied - 1,
              dB = `YOUR RANK #${YB.format(RB)}${null===KB?"":` of ${YB.format(KB.total)}`}`;
            BB.font = "bold 36px 'Jetbrains Mono', monospace";
            const VB = Math.max(20, Math.min(36, Math.floor(34560 / BB.measureText(dB).width)));
            tB(dB, 512, AB - (TB > 0 ? 15 : 0), VB, NB, 960, "center"), TB > 0 && tB(`Tied with ${YB.format(TB)} other${1===TB?"":"s"}`, 512, AB + 24, 24, iB, 960, "center")
          }
          if (null === DB) return;
          const bB = xB + JB * GB / 2;
          if (FB) tB(`You're in the top ${VB.o}!`, 512, bB, 40, NB, 960, "center");
          else if (0 === UB.length) tB("You're not on this board yet", 512, bB, 34, iB, 960, "center");
          else
            for (const [VB, yB] of UB.entries()) jB(yB, PB[VB], xB + (VB + .5) * GB, VB % 2 === 0)
        }(BB, oB, kB, lB.layoutHeight)
    }

    function HB(BB, TB) {
      return Array.isArray(BB) ? BB.slice(0, TB).filter((BB => BB && Number.isFinite(BB.rank) && Number.isFinite(BB.value))) : []
    }

    function EB(BB, TB) {
      const dB = [];
      let VB = !1;
      return BB.forEach(((yB, pB) => {
        if (null !== TB && yB.value === TB.value) return void dB.push(TB.rank);
        const lB = pB > 0 && yB.value === BB[pB - 1].value;
        lB || (VB = 0 === pB && 1 !== yB.rank), dB.push(lB && !VB ? dB[pB - 1] : yB.rank)
      })), dB
    }
  },
  37829: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => yB,
      e: () => pB
    });
    const VB = 32;

    function yB(BB) {
      return Array.from(BB).length
    }

    function pB(BB) {
      const TB = [""];
      let dB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        yB = "";
      const pB = () => {
        TB.push(""), dB = 0, yB = ""
      };
      for (const lB of BB.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(lB)) pB();
        else if (/^\s+$/.test(lB)) yB += lB;
      else if (lB.length > 0) {
        const BB = Array.from(lB);
        dB > 0 && dB + yB.length + BB.length > VB && pB(), TB[TB.length - 1] += yB, dB += yB.length, yB = "";
        for (const yB of BB) dB >= VB && pB(), TB[TB.length - 1] += yB, dB++
      }
      return TB[TB.length - 1] += yB, TB
    }
  },
  42006: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      WasmPreviewHost: () => NT,
      pageBuiltInAnimationPack: () => LB,
      pagePreviews: () => BT,
      previewModule: () => GB
    });
    var VB = dB(3216),
      yB = dB(581);
    const pB = "[bloxd-wasm-client]";

    function lB(BB) {
      const TB = {
        wasm: "unknown",
        client: String(yB.b)
      };
      try {
        var dB;
        TB.wasm = null !== (dB = null === BB || void 0 === BB ? void 0 : BB.wk()) && void 0 !== dB ? dB : TB.wasm
      } catch {}
      return TB
    }
    async function JB(BB) {
      if (BB.length < 2 || 31 !== BB[0] || 139 !== BB[1]) return BB;
      if ("undefined" === typeof DecompressionStream) {
        const {
          ungzip: TB
        } = await dB.e(206).then((() => dB(35927)));
        return TB(BB)
      }
      const TB = new Blob([BB]).stream().pipeThrough(new DecompressionStream("gzip"));
      return new Uint8Array(await new Response(TB).arrayBuffer())
    }

    function YB(BB, TB, VB, yB) {
      Promise.resolve().then((() => dB(39676))).then((dB => {
        let {
          reportDataLoadFailure: pB
        } = dB;
        pB(BB, TB, VB, yB)
      }), (TB => {
        console.warn(`${pB} ${BB} didn't load, and the report couldn't be sent`, VB.error, TB)
      }))
    }
    const gB = [3e4, 12e4, 3e5];
    class oB {
      constructor(BB) {
        this.deps = BB, this.loading = null, this.reported = !1, this.retries = 0, this.resolveSet = () => {}, this.set = new Promise((BB => {
          this.resolveSet = BB
        }))
      }
      provide(BB) {
        return this.loading ??= this.load(BB), this.loading
      }
      whenSet() {
        return this.set
      }
      async load(BB) {
        const TB = lB(BB),
          dB = await async function(BB, TB) {
            let dB;
            try {
              dB = await BB()
            } catch (VB) {
              return {
                stage: "fetch",
                error: VB
              }
            }
            try {
              return TB(dB) ? null : {
                stage: "decode",
                error: null
              }
            } catch (VB) {
              return {
                stage: "decode",
                error: VB
              }
            }
          }((() => this.deps.fetch()), (TB => {
            const dB = BB.cpB(TB);
            return dB && this.resolveSet(TB), dB
          }));
        if (null !== dB) {
          if ("fetch" === dB.stage) {
            this.loading = null;
            const TB = gB[this.retries++];
            void 0 !== TB && this.deps.later((() => {
              this.provide(BB)
            }), TB)
          }
          this.reported || (this.reported = !0, this.deps.onFailed(dB, TB))
        }
      }
    }
    let kB = null;

    function LB() {
      return kB ??= new oB({
        fetch: async () => JB(await (0, VB.K)(OB(), {
          priority: "low"
        })),
        onFailed: (BB, TB) => {
          YB("builtInAnimations", OB(), BB, TB)
        },
        later: (BB, TB) => {
          setTimeout(BB, TB)
        }
      }), kB
    }

    function OB() {
      return dB(42010)
    }
    var DB = dB(3211),
      uB = dB(35348),
      HB = dB(39481),
      EB = dB(1089),
      vB = dB(262),
      mB = dB(39499),
      iB = dB(39751),
      NB = dB(39695),
      tB = dB(39703),
      fB = dB(39707),
      sB = dB(39514),
      MB = dB(39756),
      zB = dB(39760),
      wB = dB(39527),
      UB = dB(39630),
      FB = dB(39740),
      KB = dB(39753),
      rB = dB(41278),
      IB = dB(39517);
    const cB = "[bloxd-previews]",
      SB = 4e5,
      PB = 0,
      QB = 1,
      RB = 2,
      aB = 1,
      ZB = 2,
      XB = 3,
      WB = 0,
      hB = 1,
      CB = 2;

    function GB(BB) {
      const TB = BB,
        dB = (0, mB.Z)(BB),
        VB = (0, mB.y)(BB);
      return null !== dB && null !== VB && "function" === typeof TB.KpB && "function" === typeof TB.rpB && "function" === typeof TB.IpB ? TB : null
    }

    function qB(BB, TB, dB) {
      let [VB, yB] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [BB, TB], pB = Math.min(Number.isFinite(dB) && dB > 0 ? dB : 1, 2);
      const lB = Math.max(0, VB, BB) * Math.max(0, yB, TB) * pB * pB;
      return lB > SB && (pB *= Math.sqrt(SB / lB)), [Math.max(1, Math.floor(Math.max(0, BB) * pB)), Math.max(1, Math.floor(Math.max(0, TB) * pB))]
    }

    function xB() {
      return dB(42015)
    }
    async function jB(BB, TB) {
      "lost" === BB && (0, wB.z)();
      const VB = await (0, wB.L)();
      if (null === VB || (0, mB.C)(VB) || (0, wB.c)()) return;
      const yB = "webgpu" === VB.backend;
      if (!yB && "lost" !== BB) return;
      const pB = yB ? (0, mB.fb)(BB) : null;
      if (null !== pB) {
        const dB = `WebGPU failed at home (${BB}${void 0===TB?"":`: ${TB instanceof Error?TB.message:(0,IB.f)(TB)}`}) and ${pB}`;
        return console.warn(`${cB} ${dB}: the previews stop`, null !== TB && void 0 !== TB ? TB : ""), void(0, wB.u)(dB)
      }(0, wB.q)();
      try {
        await async function(BB, TB, VB) {
          var yB;
          let {
            backend: pB,
            adapter: JB
          } = BB;
          const YB = (0, DB.R)(),
            {
              flushCrashReports: gB,
              reportRenderReload: oB
            } = await Promise.resolve().then((() => dB(39676)));
          oB(pB, "start_failed" === TB ? 0 : 1, lB(YB ? (0, DB.E)() : null), {
            cause: TB,
            error: "lost" === TB && null !== (yB = (0, mB.lb)(YB ? (0, mB.Z)((0, DB.E)()) : null)) && void 0 !== yB ? yB : VB,
            context: {
              adapter: JB,
              boundAtMs: "start_failed" === TB ? null : (0, wB.J)(),
              indirectHangs: (0, wB.B)()
            }
          }), await gB(UB.b)
        }(VB, BB, TB)
      } catch (JB) {
        console.warn(`${cB} ${VB.backend} failed at home (${BB}), and its report couldn't be sent`, JB)
      }(0, UB.i)()
    }
    async function AB() {
      if (!(0, DB.R)()) {
        const BB = await (0, wB.L)();
        if (null === BB || (0, mB.C)(BB)) return null;
        if (await (0, uB.h)(await BB.load(), HB.i), !(0, DB.R)()) return null
      }
      return GB((0, DB.E)())
    }
    class bB {
      constructor(BB, TB, dB, VB, yB, pB) {
        this.page = BB, this.host = TB, this.id = dB, this.canvas = VB, this.size = yB, this.models = void 0, this.images = void 0, this.write = void 0, this.outcomes = [], this.closed = !1, this.quiet = 0, this.settled = [];
        const lB = {
            ...pB.images,
            glbUrl: BB => {
              var TB;
              return null !== (TB = this.models.drawnUrl(BB)) && void 0 !== TB ? TB : pB.images.glbUrl(BB)
            }
          },
          JB = TB => BB.modelFile(TB);
        this.images = new iB.d(lB, (BB => {
          console.warn(`${cB} image ${BB.key.kind}:${BB.key.index}:${BB.key.word} failed`, BB.error)
        }), {
          fetchFile: JB,
          fetchImage: TB => BB.imageFile(TB)
        }), BB.startModels(), this.models = new NB.g(pB.files, ((TB, dB) => BB.buildModel(TB, dB)), (BB => {
          console.warn(`${cB} model file ${BB.file} (${BB.url}) failed`, BB.error)
        }), {
          fetchFile: JB,
          onWritten: (BB, TB) => {
            this.images.glbWritten(BB, TB)
          },
          onTaken: (BB, TB) => {
            this.images.glbTaken(BB, TB)
          }
        }), this.write = (BB, TB, dB) => {
          if (this.closed) return !0;
          if (BB === NB.e) {
            const BB = new DataView(dB.buffer, dB.byteOffset, fB.b),
              VB = BB.getUint32(0, !0),
              yB = BB.getUint32(fB.c, !0),
              pB = this.page.hostCall(CB, (() => this.host.RlB(this.id, VB, TB, dB.subarray(fB.b))));
            return this.outcomes.push([yB, pB]), !0
          }
          return BB === iB.c && (this.page.hostCall(void 0, (() => {
            this.host.ZlB(this.id, dB)
          })), !0)
        }
      }
      get isClosed() {
        return this.closed
      }
      get isStopped() {
        return this.page.isStopped
      }
      resize(BB, TB, dB) {
        if (this.closed) return;
        const [VB, yB] = qB(BB, TB, this.page.dpr(), dB);
        VB === this.size[0] && yB === this.size[1] || (this.size = [VB, yB], this.page.hostCall(void 0, (() => {
          this.host.resize(this.id, VB, yB)
        })))
      }
      setMob(BB, TB, dB, VB) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.GlB(this.id, BB, TB, dB, VB))))
      }
      setPet(BB, TB, dB, VB) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.xlB(this.id, BB, TB, dB, VB))))
      }
      setPlayer(BB, TB, dB) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.WlB(this.id, BB, TB, dB))))
      }
      setFigure(BB, TB, dB, VB) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.hlB(this.id, BB, TB, dB, VB))))
      }
      replay() {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.replay(this.id))))
      }
      get orbit() {
        if (this.closed) return null;
        const BB = this.page.hostCall(null, (() => this.host.orbit(this.id)));
        return null === BB || BB.length < 3 ? null : {
          alpha: BB[0],
          beta: BB[1],
          radius: BB[2]
        }
      }
      setOrbit(BB) {
        let {
          alpha: TB,
          beta: dB,
          radius: VB
        } = BB;
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.qlB(this.id, TB, dB, VB)
        }))
      }
      untilSettled() {
        return this.closed || this.page.isStopped ? Promise.resolve() : (this.quiet = 0, new Promise((BB => {
          this.settled.push(BB)
        })))
      }
      packChanged() {
        this.quiet = 0, this.models.refresh(), (0, MB.h)(this.images)
      }
      feed() {
        this.models.drain(this.write);
        for (const [BB, TB] of this.outcomes) {
          const dB = TB === WB ? [] : [TB === hB ? BB : (BB | NB.f) >>> 0];
          this.models.taken(BB, dB)
        }
        this.outcomes.length = 0, this.images.drain(this.write)
      }
      collect(BB) {
        let TB = !1;
        if (BB) {
          const BB = this.host.blB(this.id);
          for (const TB of BB) this.models.request(TB);
          const dB = this.host.AlB(this.id);
          dB.length > 0 && this.images.onEvent(dB), TB = BB.length > 0 || dB.length > 0
        }
        const dB = this.page.modelsUnavailable ? 0 : this.models.asking + this.models.unanswered,
          VB = TB || dB > 0 || this.images.waiting > 0 || this.images.inFlight > 0;
        this.quiet = VB ? 0 : this.quiet + 1, this.quiet >= 3 && this.resolveSettled()
      }
      close() {
        this.closed || (this.closed = !0, this.page.closePreview(this), this.resolveSettled())
      }
      abandon() {
        this.resolveSettled()
      }
      dispose(BB) {
        this.page.hostCall(void 0, (() => {
          const TB = this.host.close(this.id);
          TB.length > 0 && this.images.onEvent(TB), this.page.isTrapped || BB.IpB(this.id)
        })), this.images.dispose(), this.canvas.remove()
      }
      resolveSettled() {
        const BB = this.settled;
        this.settled = [];
        for (const TB of BB) TB()
      }
    }
    class nB {
      constructor(BB) {
        this.deps = BB, this.module = null, this.host = null, this.opening = null, this.pageCanvas = null, this.samples = 1, this.binding = null, this.sessionEnds = 0, this.lastEndReturned = !0, this.previews = new Map, this.nextId = 1, this.frameId = null, this.stopped = !1, this.loggedErrors = new Set, this.modelsListener = {
          onUnavailable: BB => {
            this.modelsFailed(BB)
          },
          onDecoderFailed: BB => {
            this.loggedErrors.has("modelDecoder") || (this.loggedErrors.add("modelDecoder"), console.warn(`${cB} the Draco decoder didn't load: models waiting on it won't draw`, BB))
          },
          onWorkerLost: BB => {
            this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${cB} a model worker was lost: ${BB}`))
          }
        }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.pD = {
          setShaderPack: (BB, TB, dB, VB, yB) => (this.shaderPackArgs = [BB, TB, dB, VB, yB], this.handOverShaderPack(), !0)
        }, this.frame = BB => {
          this.frameId = null;
          const TB = this.host;
          if (null !== TB && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped) try {
            this.drawFrame(TB, BB)
          } catch (dB) {
            if (!this.stopIfTrapped(dB) && (this.stop(), (0, mB.G)(dB))) return void this.deps.onRenderFailed("frames_refused", dB);
            console.warn(`${cB} the previews stopped: their frame threw`, dB)
          }
        }, BB.pack.onChange((() => {
          this.packChanged()
        })), BB.game.onGameChange((() => {
          this.tellInGame()
        }))
      }
      packChanged() {
        if (!this.stopped)
          for (const BB of this.previews.values()) BB.packChanged()
      }
      dpr() {
        return this.deps.dpr()
      }
      get sessionBound() {
        var BB, TB;
        return null !== (BB = null === (TB = this.host) || void 0 === TB ? void 0 : TB.attached()) && void 0 !== BB && BB
      }
      get open() {
        return this.previews.size
      }
      get frameCostMs() {
        return 0 === this.costs.length ? 0 : this.costs.reduce(((BB, TB) => BB + TB), 0) / this.costs.length
      }
      async bindSession(BB, TB, dB) {
        const VB = this.binding,
          yB = this.sessionEnds;
        try {
          const pB = this.hostOf(BB);
          if (!pB.alB()) {
            const TB = (0, FB.f)().sampleCount,
              lB = await dB(TB);
            if (this.sessionEnds !== yB) return this.keepRendererOfEndedSession(BB, pB, lB, TB, VB), TB;
            if (!pB.flB(lB)) throw new Error("the page has a renderer already");
            (0, wB.w)(performance.now()), this.samples = TB, (0, KB.e)((0, mB.y)(BB))
          }
          if (!pB.attach(TB)) throw new Error("the page's renderer is lent to another session");
          return this.samples
        } finally {
          this.binding === VB && this.endBinding()
        }
      }
      keepRendererOfEndedSession(BB, TB, dB, VB, yB) {
        if (!this.lastEndReturned || null !== this.binding && this.binding !== yB) try {
          dB.free()
        } catch (pB) {
          console.warn(`${cB} an ended session's renderer didn't free`, pB)
        } else TB.flB(dB) && ((0, wB.w)(performance.now()), this.samples = VB, (0, KB.e)(this.registryOf(BB)))
      }
      async beginSession() {
        var BB;
        let TB = () => {};
        const dB = new Promise((BB => {
          TB = BB
        }));
        this.binding = {
          done: dB,
          release: TB
        }, await (null === (BB = this.opening) || void 0 === BB ? void 0 : BB.catch((() => null)));
        const VB = this.pageCanvas;
        return this.pageCanvas = null, VB
      }
      endSession(BB) {
        var TB, dB;
        if (this.sessionEnds++, this.lastEndReturned = BB, this.endBinding(), BB) {
          try {
            var VB;
            null === (VB = this.host) || void 0 === VB || VB.detach()
          } catch (yB) {
            return void console.warn(`${cB} the session's core kept the page's renderer`, yB)
          }!0 === (null === (TB = this.host) || void 0 === TB ? void 0 : TB.attached()) && console.warn(`${cB} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (dB = this.host) || void 0 === dB ? void 0 : dB.alB()) && (0, KB.e)(this.registryOf(this.module))
        }
      }
      endBinding() {
        var BB;
        null === (BB = this.binding) || void 0 === BB || BB.release(), this.binding = null
      }
      async openPreview(BB, TB, dB, VB) {
        const yB = await this.renderingHost(),
          pB = this.module;
        if (null === yB || null === pB) throw new Error("this page can't draw previews: it has no renderer build");
        if (this.animations ??= this.loadAnimations(yB), this.deps.pack.wanted(), this.isStopped) throw new Error("the previews stopped");
        this.guarded((() => {
          this.deps.provideBuiltInAnimationPack(pB)
        }));
        const lB = this.nextId++,
          JB = this.deps.createCanvas(),
          [YB, gB] = qB(TB, dB, this.deps.dpr(), VB);
        JB.width = YB, JB.height = gB;
        if (!this.guarded((() => (pB.rpB(lB, JB), yB.open(lB, YB, gB, BB))))) throw this.hostCall(void 0, (() => {
          pB.IpB(lB)
        })), new Error("the page's renderer is lent to a session that is running");
        this.restartModelsIfFailed();
        const oB = new bB(this, yB, lB, JB, [YB, gB], this.deps);
        return this.previews.set(lB, oB), this.startFrames(), oB
      }
      prefetch() {
        if (this.prefetched || this.isStopped || (0, wB.c)() || null !== (0, wB.H)()) return;
        this.prefetched = !0;
        (null === this.module ? this.loadModule() : Promise.resolve(this.module)).then((BB => {
          null === BB || this.isStopped || (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles())
        }), (() => {}))
      }
      modelFile(BB) {
        return this.prefetchedOr(BB, this.deps.fetchModel)
      }
      imageFile(BB) {
        return this.prefetchedOr(BB, VB.K)
      }
      prefetchedOr(BB, TB) {
        const dB = this.prefetchedFiles.get(BB);
        return void 0 === dB ? TB(BB) : dB.catch((() => TB(BB)))
      }
      async prefetchPlayerFiles() {
        const BB = this.deps.playerFile().then((BB => this.deps.files.url(BB))),
          TB = await Promise.all([BB, this.deps.images.lifeformAtlasUrl(MB.d)]).catch((() => null));
        if (null === TB) return;
        const [dB, VB] = TB, yB = (BB, TB) => {
          if (null === BB) return;
          const dB = TB(BB);
          this.prefetchedFiles.set(BB, dB), dB.catch((() => {
            this.prefetchedFiles.delete(BB)
          }))
        };
        yB(dB, (BB => this.modelFile(BB))), yB(VB, (BB => this.imageFile(BB)))
      }
      loadModule() {
        return this.moduleLoad ??= this.deps.loadModule().then((BB => (null === BB && (this.moduleLoad = null), BB)), (BB => {
          throw this.moduleLoad = null, BB
        })), this.moduleLoad
      }
      fetchAnimationTable() {
        return this.animationTable ??= this.deps.fetchAnimations().catch((BB => {
          throw this.animationTable = null, BB
        })), this.animationTable
      }
      get modelsUnavailable() {
        return this.unavailable
      }
      startModels() {
        this.models ??= this.deps.startModels(this.modelsListener).catch((BB => (this.modelsFailed(BB), () => new Promise((() => {})))))
      }
      buildModel(BB, TB) {
        return this.startModels(), this.models.then((dB => dB(BB, TB))).then((BB => this.unavailable ? new Promise((() => {})) : BB))
      }
      restartModelsIfFailed() {
        this.unavailable && !this.modelsRestarted && 0 === this.previews.size && (this.modelsRestarted = !0, this.models = null, this.unavailable = !1, this.startModels())
      }
      modelsFailed(BB) {
        this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${cB} the model workers didn't start: models won't draw in the previews`, BB))
      }
      called(BB) {
        return 0 !== BB && this.logError(BB, 0), BB
      }
      closePreview(BB) {
        this.previews.delete(BB.id), null !== this.module && BB.dispose(this.module), 0 === this.previews.size && null !== this.frameId && (this.deps.cancelFrame(this.frameId), this.frameId = null)
      }
      hostOf(BB) {
        if (null !== this.module && this.module !== BB) throw new Error("a second renderer module on one page");
        return this.module = BB, null === this.host && (this.host = this.guarded((() => new BB.KpB)), this.tellInGame(), this.handOverShaderPack()), this.host
      }
      tellInGame() {
        const {
          host: BB
        } = this;
        null !== BB && this.outsideCall("the game's start or end", (() => {
          BB.ClB(this.deps.game.inGame())
        }))
      }
      handOverShaderPack() {
        const {
          host: BB,
          shaderPackArgs: TB
        } = this;
        null !== BB && null !== TB && this.outsideCall("the shader pack's hand-over", (() => {
          BB.syB(...TB) || console.warn(`${cB} the host refused the shader pack: previews draw without it at home`)
        }))
      }
      outsideCall(BB, TB) {
        try {
          this.hostCall(void 0, TB)
        } catch (dB) {
          this.stop(), console.warn(`${cB} the previews stopped: ${BB} threw`, dB)
        }
      }
      async loadAnimations(BB) {
        const TB = lB(null),
          dB = this.module;
        try {
          TB.wasm = null === dB ? TB.wasm : this.hostCall(TB.wasm, (() => dB.wk()))
        } catch {}
        let VB, yB;
        try {
          VB = await this.fetchAnimationTable()
        } catch (pB) {
          return void this.deps.onAnimationsFailed({
            stage: "fetch",
            error: pB
          }, TB)
        }
        if (!this.settleIfTrapped()) {
          try {
            yB = BB.XlB(VB)
          } catch (pB) {
            if (this.stopIfTrapped(pB)) return;
            return void this.deps.onAnimationsFailed({
              stage: "decode",
              error: pB
            }, TB)
          }
          yB || this.deps.onAnimationsFailed({
            stage: "decode",
            error: null
          }, TB)
        }
      }
      async renderingHost() {
        if (null !== this.binding && await this.binding.done, this.settleIfTrapped()) return null;
        const BB = this.host;
        return null !== BB && this.guarded((() => BB.alB())) ? BB : (this.opening ??= this.openAtHome().finally((() => {
          this.opening = null
        })), this.opening)
      }
      async openAtHome() {
        var BB;
        const TB = null !== (BB = this.module) && void 0 !== BB ? BB : await this.loadModule();
        if (null === TB) return null;
        const dB = this.hostOf(TB),
          VB = () => this.guarded((() => dB.alB()));
        if (VB()) return dB;
        if (null !== (0, wB.H)() || (0, wB.c)()) return null;
        const yB = this.deps.createCanvas();
        yB.width = 1, yB.height = 1;
        const pB = await this.deps.openExtras();
        if (this.settleIfTrapped()) return null;
        const lB = (0, FB.f)().sampleCount;
        let JB;
        try {
          JB = await (0, mB.K)(TB, "previewRenderer", yB, lB, rB.d, pB)
        } catch (YB) {
          throw YB instanceof sB.d ? this.stopForTrap(YB) : (0, mB.I)(YB) && await this.deps.onRenderFailed("start_failed", YB), YB
        }
        return this.guarded((() => dB.flB(JB))) ? ((0, wB.w)(performance.now()), this.samples = lB, this.pageCanvas = yB, (0, KB.e)(this.registryOf(TB)), dB) : VB() ? dB : null
      }
      startFrames() {
        null !== this.frameId || this.isStopped || (this.frameId = this.deps.requestFrame(this.frame))
      }
      drawFrame(BB, TB) {
        for (const lB of this.previews.values()) lB.feed();
        if (this.stopped) return;
        const dB = this.deps.now(),
          VB = BB.frame(TB);
        this.costs.push(this.deps.now() - dB), this.costs.length > 120 && this.costs.shift();
        const yB = 0 !== (256 & VB),
          pB = 255 & VB;
        for (const lB of this.previews.values()) {
          if (this.stopped) return;
          lB.collect(yB)
        }
        if (!this.stopped) {
          if (yB) {
            const TB = BB.jlB();
            for (let BB = 0; BB + 1 < TB.length; BB += 2) this.logError(TB[BB], TB[BB + 1])
          }
          if (pB === aB) return this.stop(), void this.deps.onRenderFailed("lost");
          if (pB === ZB) return this.stop(), void this.deps.onFatal(BB.PlB(), BB.QlB());
          if (pB === XB) return this.stop(), void console.warn(`${cB} the previews stopped: the page's renderer went with its session`);
          (0, vB.e)(TB), this.startFrames()
        }
      }
      get isStopped() {
        return this.stopped || this.isTrapped
      }
      get isTrapped() {
        return null !== this.module && ((0, sB.i)(this.module) || "failed" === (0, DB.C)())
      }
      hostCall(BB, TB) {
        if (this.settleIfTrapped()) return BB;
        try {
          return TB()
        } catch (dB) {
          if (this.stopIfTrapped(dB)) return BB;
          throw dB
        }
      }
      guarded(BB) {
        if (this.settleIfTrapped()) throw new Error("the previews stopped: their module trapped");
        try {
          return BB()
        } catch (TB) {
          throw this.stopIfTrapped(TB), TB
        }
      }
      registryOf(BB) {
        return {
          DVB: (TB, dB) => {
            this.hostCall(void 0, (() => {
              BB.DVB(TB, dB)
            }))
          },
          uVB: TB => {
            this.hostCall(void 0, (() => {
              BB.uVB(TB)
            }))
          }
        }
      }
      settleIfTrapped() {
        return !!this.isTrapped && (this.stopped || (this.stop(), (0, KB.e)(null)), !0)
      }
      stopIfTrapped(BB) {
        return !(null === this.module || !(0, sB.l)(this.module, BB)) && (this.stopForTrap(BB), !0)
      }
      stopForTrap(BB) {
        this.stop(), (0, KB.e)(null), (0, DB.S)(BB)
      }
      stop() {
        this.stopped = !0;
        for (const BB of this.previews.values()) BB.abandon()
      }
      logError(BB, TB) {
        const dB = `${BB}:${TB}`;
        this.loggedErrors.has(dB) || (this.loggedErrors.add(dB), console.warn(`${cB} error ${BB} (detail ${TB})`))
      }
    }
    let eB = null;

    function BT() {
      return eB ??= new nB(function() {
        const BB = (0, tB.r)(EB.clientSideServerUrls.staticUrl, {
          packUrl: BB => {
            var TB, dB;
            return null !== (TB = null === (dB = MB.f.current) || void 0 === dB ? void 0 : dB.modelUrl(BB)) && void 0 !== TB ? TB : null
          }
        });
        return {
          loadModule: AB,
          startModels: async BB => {
            const {
              pageModelPool: TB
            } = await dB.e(39).then((() => dB(42074))), {
              pool: VB
            } = TB(BB);
            return (BB, TB) => VB.build(BB, TB)
          },
          fetchAnimations: async () => JB(await (0, VB.K)(xB())),
          playerFile: async () => (await (0, tB.n)()).PLAYER_FILE,
          onAnimationsFailed: (BB, TB) => {
            YB("previewAnimations", xB(), BB, TB)
          },
          provideBuiltInAnimationPack: BB => {
            LB().provide(BB)
          },
          openExtras: wB.E,
          files: BB,
          images: (0, MB.i)((0, iB.m)(BB.url), (() => MB.f.current)),
          pack: MB.f,
          game: zB.e,
          fetchModel: BB => (0, tB.k)(BB),
          createCanvas: () => document.createElement("canvas"),
          dpr: () => window.devicePixelRatio,
          now: () => performance.now(),
          requestFrame: BB => requestAnimationFrame(BB),
          cancelFrame: BB => {
            cancelAnimationFrame(BB)
          },
          onRenderFailed: jB,
          onFatal: (BB, TB) => {
            console.error(`${cB} the previews stopped: renderer error ${BB} (detail ${TB})`)
          }
        }
      }()), eB
    }
    var TT = dB(560),
      dT = dB(37598),
      VT = dB(2760);
    const yT = {
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
    const pT = "[bloxd-previews]",
      lT = new Uint32Array(5);

    function JT(BB) {
      return TT.l.indexOf(BB)
    }
    const YT = new WeakSet;

    function gT(BB) {
      const TB = (0, dT.c)(BB),
        dB = null === TB ? -1 : oT(TB);
      return -1 !== dB ? dB : (YT.has(BB) || (YT.add(BB), console.warn(`${pT} an animation the previews' table lacks: the mob idles instead`)), -1)
    }

    function oT(BB) {
      var TB;
      return null !== (TB = yT[BB]) && void 0 !== TB ? TB : -1
    }

    function kT(BB, TB) {
      const {
        canvas: dB
      } = TB;
      dB.style.width = "100%", dB.style.height = "100%", dB.style.display = "block", BB.appendChild(dB)
    }

    function LT(BB) {
      const TB = BB.getBoundingClientRect();
      return [TB.width, TB.height]
    }
    class OT {
      constructor(BB, TB) {
        this.preview = BB, this.showView = TB
      }
      show(BB) {
        this.showView(this.preview, BB)
      }
      resize(BB, TB) {
        this.preview.resize(BB, TB)
      }
      close() {
        this.preview.close()
      }
    }
    class DT {
      constructor(BB) {
        this.preview = BB, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.detachControls = void 0, this.detachControls = function(BB) {
          const {
            canvas: TB
          } = BB;
          let dB = null;
          const VB = BB => {
              var VB;
              dB = {
                pointer: BB.pointerId,
                x: BB.clientX,
                y: BB.clientY
              }, null === (VB = TB.setPointerCapture) || void 0 === VB || VB.call(TB, BB.pointerId)
            },
            yB = TB => {
              var VB;
              const yB = BB.orbit;
              if ((null === (VB = dB) || void 0 === VB ? void 0 : VB.pointer) !== TB.pointerId || null === yB) return;
              const pB = TB.clientX - dB.x,
                lB = TB.clientY - dB.y;
              dB = {
                ...dB,
                x: TB.clientX,
                y: TB.clientY
              }, BB.setOrbit({
                alpha: yB.alpha - .01 * pB,
                beta: Math.min(Math.PI - .01, Math.max(.01, yB.beta - .01 * lB)),
                radius: yB.radius
              })
            },
            pB = BB => {
              var TB;
              (null === (TB = dB) || void 0 === TB ? void 0 : TB.pointer) === BB.pointerId && (dB = null)
            },
            lB = TB => {
              const dB = BB.orbit;
              if (null === dB) return;
              TB.preventDefault();
              const VB = TB.deltaY * (TB.deltaMode === WheelEvent.DOM_DELTA_LINE ? 40 : TB.deltaMode === WheelEvent.DOM_DELTA_PAGE ? 800 : 1),
                yB = Math.min(100, Math.max(5, dB.radius + .08 * VB));
              BB.setOrbit({
                ...dB,
                radius: yB
              })
            };
          return TB.style.touchAction = "none", TB.addEventListener("pointerdown", VB), TB.addEventListener("pointermove", yB), TB.addEventListener("pointerup", pB), TB.addEventListener("pointercancel", pB), TB.addEventListener("wheel", lB, {
            passive: !1
          }), () => {
            TB.removeEventListener("pointerdown", VB), TB.removeEventListener("pointermove", yB), TB.removeEventListener("pointerup", pB), TB.removeEventListener("pointercancel", pB), TB.removeEventListener("wheel", lB)
          }
        }(BB), this.dev = {
          setCamera: TB => {
            let {
              yaw: dB,
              pitch: VB,
              radius: yB,
              target: pB
            } = TB;
            pB && console.warn(`${pT} setCamera: target is noa's character preview only`);
            const lB = BB.orbit;
            null !== lB && BB.setOrbit({
              alpha: dB,
              beta: VB,
              radius: null !== yB && void 0 !== yB ? yB : lB.radius
            })
          },
          canvas: () => BB.canvas,
          isolateHead: () => {
            console.warn(`${pT} isolateHead: noa's character preview only`)
          }
        }, this.apply(), this.ready = BB.untilSettled().then((() => {
          if (BB.isStopped) throw new Error(`${pT} the previews stopped before the character drew`);
          this.built = !0
        }))
      }
      isReady() {
        return this.built && !this.preview.isClosed
      }
      setCosmetic(BB, TB) {
        this.cosmetics[BB] = TB, this.apply()
      }
      playEmote(BB) {
        null === BB || BB !== this.emote ? (this.emote = BB, this.apply()) : this.preview.replay()
      }
      untilDrawn(BB) {
        return this.preview.untilSettled()
      }
      resetCamera() {}
      resize(BB, TB) {
        this.preview.resize(BB, TB)
      }
      close() {
        this.detachControls(), this.preview.close()
      }
      apply() {
        var BB;
        this.preview.setPlayer(JSON.stringify(this.cosmetics), lT, null === (BB = this.emote) ? -1 : oT(BB))
      }
    }

    function uT(BB, TB) {
      let {
        mobType: dB,
        variation: VB,
        animation: yB
      } = TB;
      BB.setMob(JT(dB), null !== VB && void 0 !== VB ? VB : "", 1, gT(yB))
    }

    function HT(BB, TB) {
      let {
        mobType: dB,
        variation: VB,
        metaInfo: yB,
        tamed: pB
      } = TB;
      BB.setPet(JT(dB), VB, yB, pB)
    }
    const ET = {
      aimed: .533 / 1.15 * 1.1,
      ready: .16 / .85 * 1.1
    };
    class vT {
      constructor(BB, TB, dB, VB) {
        this.preview = null, this.closed = !1, this.figure = null, this.shown = !1, this.order = "", this.span = {
          left: 0,
          width: 0
        }, this.lineup = [0, 0], this.given = null, this.loaded = !1, BB(dB.width, VB[1], VB).then((BB => {
          if (this.closed) return void BB.close();
          const {
            style: dB
          } = BB.canvas;
          dB.position = "absolute", dB.top = "0", dB.visibility = "hidden", kT(TB, BB), this.preview = BB, this.apply()
        })).catch((BB => {
          console.error(`${pT} couldn't open a lineup figure`, BB)
        }))
      }
      update(BB, TB, dB, VB, yB) {
        this.figure = BB, this.shown = TB, this.order = dB, this.span = VB, this.lineup = yB, this.apply()
      }
      close() {
        var BB;
        this.closed = !0, null === (BB = this.preview) || void 0 === BB || BB.close(), this.preview = null
      }
      apply() {
        const {
          preview: BB,
          figure: TB,
          lineup: dB
        } = this;
        if (null === BB || null === TB) return;
        if (this.given !== TB) {
          var VB;
          this.given = TB, this.loaded = !1;
          const dB = null === TB.mN ? 0 : null !== (VB = (0, VT.b)(TB.mN)) && void 0 !== VB ? VB : 0;
          BB.setFigure(function(BB) {
            return JSON.stringify(Object.fromEntries(BB.cosmetics))
          }(TB), dB, gT(TB.animation), TB.size), BB.untilSettled().then((() => {
            this.given === TB && (this.loaded = !0, this.apply())
          }))
        }
        const {
          left: yB,
          width: pB
        } = this.span;
        BB.resize(pB, dB[1], dB);
        const {
          style: lB
        } = BB.canvas;
        lB.left = `${yB}px`, lB.width = `${pB}px`, lB.zIndex = this.order, lB.visibility = this.shown && this.loaded ? "visible" : "hidden"
      }
    }
    class mT {
      constructor(BB, TB) {
        this.open = TB, this.layer = void 0, this.figures = [], this.view = {
          figures: [],
          shown: []
        }, this.size = void 0, this.size = LT(BB), this.layer = document.createElement("div");
        const {
          style: dB
        } = this.layer;
        dB.position = "relative", dB.isolation = "isolate", dB.overflow = "hidden", dB.width = "100%", dB.height = "100%", dB.pointerEvents = "none", BB.appendChild(this.layer)
      }
      show(BB) {
        this.view = BB, this.place()
      }
      resize(BB, TB) {
        this.size = [BB, TB], this.place()
      }
      close() {
        for (const BB of this.figures) BB.close();
        this.figures = [], this.layer.remove()
      }
      place() {
        const {
          figures: BB,
          shown: TB
        } = this.view;
        for (const VB of this.figures.splice(BB.length)) VB.close();
        const {
          size: dB
        } = this;
        BB.forEach(((VB, yB) => {
          var pB;
          const lB = function(BB, TB, dB, VB) {
            let [yB, pB] = VB;
            const lB = (BB + .5) * yB / TB,
              JB = Math.min(Math.max(yB / TB, 2 * dB * pB), 2 * Math.max(lB, yB - lB));
            return {
              left: lB - JB / 2,
              width: JB
            }
          }(yB, BB.length, function(BB) {
            let {
              animation: TB,
              size: dB
            } = BB;
            const {
              aimed: VB,
              ready: yB
            } = ET;
            return (gT(TB) === yT.gunAimed ? VB : yB) * dB
          }(VB), dB);
          this.figures[yB] ??= new vT(this.open, this.layer, lB, dB), this.figures[yB].update(VB, null !== (pB = TB[yB]) && void 0 !== pB && pB, function(BB, TB) {
            return String(Math.round(1e3 * BB) + TB)
          }(VB.size, yB), lB, dB)
        }))
      }
    }
    const iT = {
      player: QB,
      store: RB
    };
    class NT {
      constructor(BB) {
        this.page = BB
      }
      async openMob(BB) {
        return new OT(await this.open(BB, PB), uT)
      }
      async openPet(BB) {
        return new OT(await this.open(BB, PB), HT)
      }
      openMobLineup(BB) {
        return new mT(BB, ((BB, TB, dB) => this.page.openPreview(PB, BB, TB, dB)))
      }
      async openCharacter(BB, TB) {
        return new DT(await this.open(BB, iT[TB]))
      }
      async open(BB, TB) {
        const [dB, VB] = LT(BB), yB = await this.page.openPreview(TB, dB, VB);
        return kT(BB, yB), yB
      }
    }
  },
  35721: (BB, TB, dB) => {
    dB.d(TB, {
      B: () => uB,
      E: () => EB,
      d: () => VB,
      e: () => yB,
      g: () => LB,
      i: () => HB,
      l: () => oB,
      m: () => vB,
      q: () => YB,
      t: () => gB,
      w: () => OB,
      z: () => DB
    });
    const VB = [{
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

    function yB(BB, TB) {
      const {
        numLines: dB,
        charsPerLine: yB
      } = VB[TB];
      return mB(BB, dB, yB, !1)
    }
    const pB = 7 / 8,
      lB = .25,
      JB = 8;

    function YB(BB, TB) {
      return {
        width: Math.min(BB, JB) - 2 * lB,
        height: Math.min(TB, JB) - 2 * lB
      }
    }

    function gB(BB, TB, dB) {
      const yB = YB(BB, TB),
        {
          numLines: lB,
          charsPerLine: JB
        } = VB[dB];
      return {
        numLines: Math.max(1, Math.floor(lB / pB * yB.height)),
        charsPerLine: Math.max(1, Math.floor(JB * yB.width))
      }
    }

    function oB(BB, TB, dB, VB) {
      const {
        numLines: yB,
        charsPerLine: pB
      } = gB(dB, VB, TB);
      return mB(BB, yB, pB, !1)
    }
    const kB = 32e3;

    function LB(BB) {
      return BB.slice(0, kB)
    }
    const OB = 512e3,
      DB = 64,
      uB = OB;

    function HB(BB, TB) {
      const dB = Math.max(0, uB - TB),
        VB = Math.min(OB, dB);
      return BB.slice(0, VB)
    }
    const EB = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      Cg: {
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

    function vB(BB, TB) {
      const {
        numLines: dB,
        charsPerLine: VB
      } = EB[TB];
      return mB(BB, dB, VB, !1)
    }

    function mB(BB, TB, dB, VB, yB) {
      (yB || VB) && (BB = BB.slice(0, null !== yB && void 0 !== yB ? yB : TB * dB));
      const pB = BB.split("\n");
      if (pB.length > TB && pB.splice(TB, pB.length - TB), !VB)
        for (let lB = 0; lB < pB.length; lB++) {
          const BB = pB[lB];
          BB.length > dB && (pB[lB] = BB.substring(0, dB), pB.length < TB && pB.splice(lB + 1, 0, BB.substring(dB)))
        }
      return pB.join("\n")
    }
  },
  42010: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/builtInAnimations.anim.36d8b13aae7e273ec8e8.gz"
  },
  42015: (BB, TB, dB) => {
    BB.exports = dB.p + "static/media/previewAnimations.dat.24d2343c38c8f9b3fb85.gz"
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);