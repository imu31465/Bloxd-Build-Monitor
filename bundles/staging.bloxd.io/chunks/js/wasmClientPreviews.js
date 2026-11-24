export const id = 60;
export const ids = [60];
export const modules = {
  38677: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => JB,
      f: () => oB
    });
    const TB = new WeakMap;

    function JB(BB, IB) {
      return TB.set(BB, IB), BB
    }

    function oB(BB) {
      var IB;
      return null !== (IB = TB.get(BB)) && void 0 !== IB ? IB : null
    }
  },
  38696: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => vB
    });
    var TB = ZB(1281);

    function JB(BB) {
      const IB = /(\d*\.?\d+)px/.exec(BB);
      return IB ? Number(IB[1]) : null
    }

    function oB(BB) {
      return BB.split(/[\s,]+/).pop()
    }
    let GB = !1;
    const vB = {
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
      drawText: function(BB, IB, TB, vB, kB, cB) {
        if (kB <= 0 || cB <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: nB,
          fontVariant: hB,
          fontWeight: zB,
          fontSize: FB,
          font: NB
        } = this, gB = [nB, hB, zB, `${FB}px`, NB].filter(Boolean).join(" "), qB = [
          [zB, `${FB}px`, oB(NB)].filter(Boolean).join(" "), `${FB}px sans-serif`
        ], yB = BB.font, UB = function(BB, IB, ZB) {
          for (const TB of IB) {
            BB.font = TB;
            const IB = JB(BB.font),
              GB = oB(TB);
            if (null !== IB && Math.abs(IB - ZB) <= .5 && BB.font.toLowerCase().includes(GB.toLowerCase())) return TB
          }
          return null
        }(BB, [gB, ...qB], FB);
        UB !== gB && function(BB, IB, TB) {
          GB || (GB = !0, Promise.resolve().then((() => ZB(1125))).then((ZB => {
            let {
              Og: JB
            } = ZB;
            JB(new Error("A canvas didn't take canvasTxt's font"), {
              font: BB,
              XF: IB,
              drawnWith: null !== TB && void 0 !== TB ? TB : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(gB, yB, UB);
        const WB = JB(BB.font);
        if (null === UB && null !== WB && WB > 0) {
          const ZB = FB / WB;
          BB.save();
          try {
            return BB.scale(ZB, ZB), {
              height: this.drawLines(BB, IB, TB / ZB, vB / ZB, kB / ZB, cB / ZB, WB).height * ZB
            }
          } finally {
            BB.restore()
          }
        }
        return this.drawLines(BB, IB, TB, vB, kB, cB, FB)
      },
      drawLines: function(BB, IB, ZB, JB, oB, GB, vB) {
        const kB = ZB + oB,
          cB = JB + GB;
        let nB, hB = JB + GB / 2 + vB / 2;
        "right" === this.align ? (nB = kB, BB.textAlign = "right") : "left" === this.align ? (nB = ZB, BB.textAlign = "left") : (nB = ZB + oB / 2, BB.textAlign = "center");
        for (const TB of IB) {
          BB.measureText(TB).width >= oB && (IB = IB.replace(TB, ""))
        }
        IB = (0, TB.N)(IB);
        const zB = [],
          FB = IB.split("\n"),
          NB = this.justify ? BB.measureText("\u200a").width : 0;
        FB.forEach((IB => {
          let ZB = BB.measureText(IB).width;
          if (ZB <= oB) zB.push(IB);
          else {
            let TB = IB;
            const JB = oB;
            let GB, vB, kB;
            for (ZB = BB.measureText(TB).width; ZB > JB;) {
              for (GB = 0, vB = 0, kB = ""; vB < JB;) GB++, kB = TB.substr(0, GB), vB = BB.measureText(kB).width;
              GB--, kB = kB.substr(0, GB);
              const IB = GB;
              if (" " !== TB.substr(GB, 1)) {
                for (;
                  " " !== TB.substr(GB, 1) && 0 !== GB;) GB--;
                0 === GB && (GB = IB), kB = TB.substr(0, GB)
              }
              kB = this.justify ? this.justifyLine(BB, kB, NB, "\u200a", oB) : kB, TB = TB.substr(GB), ZB = BB.measureText(TB).width, zB.push(kB)
            }
            ZB > 0 && zB.push(TB)
          }
        }));
        const gB = this.lineHeight ? this.lineHeight : this.getTextHeight(BB, IB),
          qB = gB * (zB.length - 1),
          yB = qB / 2;
        let UB = JB;
        "top" === this.vAlign ? hB = JB + vB : "bottom" === this.vAlign ? (hB = cB - qB, UB = cB) : (UB = JB + GB / 2, hB -= yB), zB.forEach((IB => {
          IB = IB.trim(), BB.fillText(IB, nB, hB), hB += gB
        })), this.debug && (BB.lineWidth = 3, BB.strokeStyle = "#00909e", BB.strokeRect(ZB, JB, oB, GB), BB.lineWidth = 2, BB.strokeStyle = "#f6d743", BB.beginPath(), BB.moveTo(nB, JB), BB.lineTo(nB, cB), BB.stroke(), BB.strokeStyle = "#ff6363", BB.beginPath(), BB.moveTo(ZB, UB), BB.lineTo(kB, UB), BB.stroke());
        return {
          height: qB + gB
        }
      },
      getTextHeight: function(BB, IB) {
        const ZB = BB.textBaseline;
        BB.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: TB
        } = BB.measureText(IB);
        return BB.textBaseline = ZB, TB
      },
      justifyLine: function(BB, IB, ZB, TB, JB) {
        const oB = IB.trim(),
          GB = BB.measureText(oB).width,
          vB = oB.split(/\s+/).length - 1,
          kB = Math.floor((JB - GB) / ZB);
        if (vB <= 0 || kB <= 0) return oB;
        const cB = Math.floor(kB / vB);
        let nB = kB - vB * cB,
          hB = [];
        for (let zB = 0; zB < cB; zB++) hB.push(TB);
        hB = hB.join("");
        return oB.replace(/\s+/g, (BB => {
          const IB = nB > 0 ? hB + TB : hB;
          return nB--, BB + IB
        }))
      }
    }
  },
  38703: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => gB,
      e: () => NB,
      h: () => zB,
      l: () => nB,
      m: () => hB
    });
    var TB = ZB(4416),
      JB = ZB(360);
    const oB = 1024,
      GB = 1536,
      vB = 2 * TB.k + 1,
      kB = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      cB = 1.5;

    function nB(BB, IB, ZB) {
      if ("string" !== typeof BB) return IB;
      try {
        const ZB = JSON.parse(BB);
        return ZB && "object" === typeof ZB ? ZB : IB
      } catch (TB) {
        return void 0 !== ZB && console.error(`Couldn't parse ${ZB}`, TB), IB
      }
    }

    function hB(BB) {
      return nB(BB, null, "a leaderboard's rows")
    }

    function zB(BB, IB) {
      var ZB, TB;
      return null !== IB && void 0 !== IB ? IB : {
        status: null !== (ZB = BB.status) && void 0 !== ZB ? ZB : "loading",
        entries: null !== (TB = BB.entries) && void 0 !== TB ? TB : []
      }
    }

    function FB(BB, IB) {
      return "number" === typeof BB && Number.isFinite(BB) && BB > 0 ? BB : IB
    }

    function NB(BB, IB) {
      const ZB = FB(BB.size, 1);
      let TB = FB(BB.width, FB(2.5 * ZB, 2.5)),
        JB = FB(BB.height, FB(3.75 * ZB, 3.75));
      Number.isFinite(oB * JB / TB) && Number.isFinite(GB * TB / JB) || (TB = 2.5, JB = 3.75);
      const vB = JB / TB,
        kB = Math.max(1, Math.min(oB, IB / vB));
      return {
        width: TB,
        height: JB,
        layoutWidth: Math.max(oB, GB / vB),
        layoutHeight: Math.max(GB, oB * vB),
        pixelWidth: Math.round(kB),
        pixelHeight: Math.round(Math.max(1, Math.min(IB, kB * vB)))
      }
    }

    function gB(BB, IB, ZB, GB, nB, hB) {
      BB.setTransform(1, 0, 0, 1, 0, 0), BB.fillStyle = JB.P.defaultNameTagBackground, BB.fillRect(0, 0, IB, ZB), BB.scale(IB / GB.layoutWidth, ZB / GB.layoutHeight), BB.translate((GB.layoutWidth - oB) / 2, 0),
        function(BB, IB, ZB, oB) {
          var GB, nB, hB, zB;
          const {
            top: FB,
            around: NB,
            showPlayerText: gB,
            localPlayerDbId: UB
          } = ZB, {
            whiteUiText: WB,
            grayUiText: dB,
            yellowUiText: CB
          } = JB.P;
          BB.textBaseline = "middle";
          const QB = function(IB, ZB, TB, JB, oB, GB) {
              let vB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              BB.font = `bold ${JB}px 'Jetbrains Mono', monospace`, BB.fillStyle = oB, BB.textAlign = vB;
              let kB = IB.replace(/[\r\n\t]/g, " ");
              if (BB.measureText(kB).width > GB) {
                for (; kB.length > 0 && BB.measureText(`${kB}\u2026`).width > GB;) kB = kB.slice(0, -1);
                kB += "\u2026"
              }
              BB.fillText(kB, ZB, TB)
            },
            sB = IB => {
              BB.fillStyle = WB, BB.globalAlpha = .15, BB.fillRect(24, IB, 976, 2), BB.globalAlpha = 1
            },
            wB = null === UB ? null : (0, JB.nc)(UB),
            OB = BB => null !== wB && BB.playerHash === wB,
            YB = qB(FB.entries, TB.n),
            iB = "ready" === FB.status && YB.length > 0,
            pB = null === NB ? [] : qB(NB.entries, vB),
            aB = YB.some(OB),
            HB = null === NB ? null : function(BB) {
              const IB = BB;
              if (!IB || !Number.isFinite(IB.rank) || !Number.isFinite(IB.tied) || !Number.isFinite(IB.total)) return null;
              return IB
            }(NB.standing),
            MB = pB.find(OB),
            jB = YB.find(OB),
            PB = null === HB || void 0 === MB ? null : {
              value: MB.value,
              rank: HB.rank
            },
            RB = yB(YB, void 0 === jB || jB.value === (null === PB || void 0 === PB ? void 0 : PB.value) ? PB : null),
            rB = yB(pB, PB),
            mB = (BB, IB) => {
              const ZB = BB.findIndex(OB);
              return ZB >= 0 ? IB[ZB] : null
            },
            XB = null !== (GB = null !== (nB = null === HB || void 0 === HB ? void 0 : HB.rank) && void 0 !== nB ? nB : mB(pB, rB)) && void 0 !== GB ? GB : mB(YB, RB);
          BB.font = "bold 34px 'Jetbrains Mono', monospace";
          const LB = [...iB ? RB : [], ...aB ? [] : rB],
            eB = Math.min(280, Math.max(0, ...LB.map((IB => BB.measureText(kB.format(IB)).width)))),
            uB = eB <= 80,
            fB = uB ? 80 : 32 + eB,
            lB = uB ? 148 : fB + 28,
            AB = 660 - lB;
          QB(`TOP ${TB.n}  /  ALL TIME`, 24, 52, 28, dB, 976), QB(gB ? String(null !== (hB = IB.title) && void 0 !== hB ? hB : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, WB, 976), QB("RANK", 32, 174, 28, dB, lB - 40), QB("PLAYER", lB, 174, 28, dB, AB), QB(gB ? String(null !== (zB = IB.scoreLabel) && void 0 !== zB ? zB : "Score").slice(0, 24) : "Score", 992, 174, 28, dB, 304, "right"), sB(202);
          const tB = (oB - 232) / (TB.n + cB + vB),
            bB = 208 + TB.n * tB,
            xB = bB + cB * tB,
            EB = (IB, ZB, TB, JB) => {
              const oB = OB(IB);
              BB.fillStyle = oB ? CB : WB, BB.globalAlpha = oB ? .15 : JB ? .035 : 0, BB.fillRect(24, TB - tB / 2 + 1, 976, tB - 2), BB.globalAlpha = 1;
              const GB = oB ? CB : WB;
              QB(kB.format(ZB), fB, TB, 34, GB, uB ? 80 : eB, uB ? "center" : "right"), QB(gB ? String(IB.name).slice(0, 64) : "Player", lB, TB, 34, GB, AB);
              const vB = kB.format(IB.value);
              QB(BB.measureText(vB).width > 304 ? IB.value.toExponential(6) : vB, 992, TB, 34, GB, 304, "right")
            };
          if (iB)
            for (const [TB, JB] of YB.entries()) EB(JB, RB[TB], 208 + (TB + .5) * tB, TB % 2 === 0);
          else {
            const BB = "error" === FB.status,
              IB = BB ? "Couldn't load leaderboard" : "ready" === FB.status ? "No scores yet" : "Loading leaderboard\u2026",
              ZB = BB ? "Trying again shortly" : "ready" === FB.status ? "Be the first on the board!" : "Fetching the top players",
              TB = (208 + bB) / 2;
            QB(IB, 512, TB - 28, 40, BB ? JB.P.redUiText : WB, 960, "center"), QB(ZB, 512, TB + 27, 30, dB, 960, "center")
          }
          const DB = bB + cB * tB / 2;
          if (null === XB) sB(DB);
          else {
            const IB = null === HB ? 0 : HB.tied - 1,
              ZB = `YOUR RANK #${kB.format(XB)}${null===HB?"":` of ${kB.format(HB.total)}`}`;
            BB.font = "bold 36px 'Jetbrains Mono', monospace";
            const TB = Math.max(20, Math.min(36, Math.floor(34560 / BB.measureText(ZB).width)));
            QB(ZB, 512, DB - (IB > 0 ? 15 : 0), TB, CB, 960, "center"), IB > 0 && QB(`Tied with ${kB.format(IB)} other${1===IB?"":"s"}`, 512, DB + 24, 24, dB, 960, "center")
          }
          if (null === NB) return;
          const KB = xB + vB * tB / 2;
          if (aB) QB(`You're in the top ${TB.n}!`, 512, KB, 40, CB, 960, "center");
          else if (0 === pB.length) QB("You're not on this board yet", 512, KB, 34, dB, 960, "center");
          else
            for (const [TB, JB] of pB.entries()) EB(JB, rB[TB], xB + (TB + .5) * tB, TB % 2 === 0)
        }(BB, nB, hB, GB.layoutHeight)
    }

    function qB(BB, IB) {
      return Array.isArray(BB) ? BB.slice(0, IB).filter((BB => BB && Number.isFinite(BB.rank) && Number.isFinite(BB.value))) : []
    }

    function yB(BB, IB) {
      const ZB = [];
      let TB = !1;
      return BB.forEach(((JB, oB) => {
        if (null !== IB && JB.value === IB.value) return void ZB.push(IB.rank);
        const GB = oB > 0 && JB.value === BB[oB - 1].value;
        GB || (TB = 0 === oB && 1 !== JB.rank), ZB.push(GB && !TB ? ZB[oB - 1] : JB.rank)
      })), ZB
    }
  },
  38926: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => JB,
      f: () => oB
    });
    const TB = 32;

    function JB(BB) {
      return Array.from(BB).length
    }

    function oB(BB) {
      const IB = [""];
      let ZB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        JB = "";
      const oB = () => {
        IB.push(""), ZB = 0, JB = ""
      };
      for (const GB of BB.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(GB)) oB();
        else if (/^\s+$/.test(GB)) JB += GB;
      else if (GB.length > 0) {
        const BB = Array.from(GB);
        ZB > 0 && ZB + JB.length + BB.length > TB && oB(), IB[IB.length - 1] += JB, ZB += JB.length, JB = "";
        for (const JB of BB) ZB >= TB && oB(), IB[IB.length - 1] += JB, ZB++
      }
      return IB[IB.length - 1] += JB, IB
    }
  },
  51044: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      WasmPreviewHost: () => iI,
      pageBuiltInAnimationPack: () => zB,
      pagePreviews: () => GI,
      previewModule: () => KB
    });
    var TB = ZB(3043),
      JB = ZB(671);
    const oB = "[bloxd-wasm-client]";

    function GB(BB) {
      const IB = {
        wasm: "unknown",
        client: String(JB.b)
      };
      try {
        var ZB;
        IB.wasm = null !== (ZB = null === BB || void 0 === BB ? void 0 : BB.Yh()) && void 0 !== ZB ? ZB : IB.wasm
      } catch {}
      return IB
    }
    async function vB(BB) {
      if (BB.length < 2 || 31 !== BB[0] || 139 !== BB[1]) return BB;
      if ("undefined" === typeof DecompressionStream) {
        const {
          ungzip: IB
        } = await Promise.resolve().then((() => ZB(2984)));
        return IB(BB)
      }
      const IB = new Blob([BB]).stream().pipeThrough(new DecompressionStream("gzip"));
      return new Uint8Array(await new Response(IB).arrayBuffer())
    }

    function kB(BB, IB, TB, JB) {
      Promise.resolve().then((() => ZB(40784))).then((ZB => {
        let {
          reportDataLoadFailure: oB
        } = ZB;
        oB(BB, IB, TB, JB)
      }), (IB => {
        console.warn(`${oB} ${BB} didn't load, and the report couldn't be sent`, TB.error, IB)
      }))
    }
    const cB = [3e4, 12e4, 3e5];
    class nB {
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
        const IB = GB(BB),
          ZB = await async function(BB, IB) {
            let ZB;
            try {
              ZB = await BB()
            } catch (TB) {
              return {
                stage: "fetch",
                error: TB
              }
            }
            try {
              return IB(ZB) ? null : {
                stage: "decode",
                error: null
              }
            } catch (TB) {
              return {
                stage: "decode",
                error: TB
              }
            }
          }((() => this.deps.fetch()), (IB => {
            const ZB = BB.roB(IB);
            return ZB && this.resolveSet(IB), ZB
          }));
        if (null !== ZB) {
          if ("fetch" === ZB.stage) {
            this.loading = null;
            const IB = cB[this.retries++];
            void 0 !== IB && this.deps.later((() => {
              this.provide(BB)
            }), IB)
          }
          this.reported || (this.reported = !0, this.deps.onFailed(ZB, IB))
        }
      }
    }
    let hB = null;

    function zB() {
      return hB ??= new nB({
        fetch: async () => vB(await (0, TB.K)(FB(), {
          priority: "low"
        })),
        onFailed: (BB, IB) => {
          kB("builtInAnimations", FB(), BB, IB)
        },
        later: (BB, IB) => {
          setTimeout(BB, IB)
        }
      }), hB
    }

    function FB() {
      return ZB(51050)
    }
    var NB = ZB(3036),
      gB = ZB(1258),
      qB = ZB(339),
      yB = ZB(331),
      UB = ZB(684),
      WB = ZB(4969),
      dB = ZB(40759),
      CB = ZB(40771),
      QB = ZB(40965),
      sB = (ZB(40804), ZB(40821)),
      wB = ZB(40829),
      OB = ZB(40834),
      YB = ZB(40768),
      iB = ZB(40976),
      pB = ZB(40983),
      aB = ZB(40751),
      HB = ZB(41008),
      MB = ZB(40870),
      jB = ZB(40860),
      PB = ZB(40906),
      RB = ZB(40971),
      rB = ZB(42585),
      mB = ZB(36297),
      XB = ZB(3875);
    const LB = "[bloxd-previews]",
      eB = 4e5,
      uB = 0,
      fB = 1,
      lB = 2,
      AB = 1,
      tB = 2,
      bB = 3,
      xB = 0,
      EB = 1,
      DB = 2;

    function KB(BB) {
      const IB = BB,
        ZB = (0, dB.Q)(BB),
        TB = (0, dB.l)(BB);
      return null !== ZB && null !== TB && "function" === typeof IB.joB && "function" === typeof IB.PoB && "function" === typeof IB.RoB ? IB : null
    }

    function VB(BB, IB, ZB) {
      let [TB, JB] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [BB, IB], oB = Math.min(Number.isFinite(ZB) && ZB > 0 ? ZB : 1, 2);
      const GB = Math.max(0, TB, BB) * Math.max(0, JB, IB) * oB * oB;
      return GB > eB && (oB *= Math.sqrt(eB / GB)), [Math.max(1, Math.floor(Math.max(0, BB) * oB)), Math.max(1, Math.floor(Math.max(0, IB) * oB))]
    }

    function SB() {
      return ZB(51057)
    }
    async function BI(BB, IB, TB) {
      var JB;
      let oB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      "lost" === BB && (0, aB.x)();
      const vB = await (0, aB.T)();
      if (null === vB || (0, dB.o)(vB) || (0, aB.e)()) return;
      const kB = "webgpu" === vB.backend;
      if (!kB && "lost" !== BB) return;
      const cB = kB && (0, yB.q)(vB.adapter, null !== TB && void 0 !== TB ? TB : null, "lost" === BB, oB),
        nB = null !== (JB = "lost" === BB ? (0, CB.i)((0, NB.M)() ? (0, dB.Q)((0, NB.x)()) : null) : void 0) && void 0 !== JB ? JB : IB,
        hB = kB ? (0, dB.$)(BB, void 0, (0, CB.c)(nB)) : null;
      if (null === hB) {
        kB || (0, UB.q)(), (0, aB.o)();
        try {
          await async function(BB, IB, TB, JB, oB) {
            let {
              restoreLost: vB,
              adapterRemembered: kB
            } = oB;
            const cB = (0, NB.M)(),
              {
                flushCrashReports: nB,
                reportRenderReload: hB
              } = await Promise.resolve().then((() => ZB(40784)));
            hB(BB.backend, JB, GB(cB ? (0, NB.x)() : null), {
              from: "home",
              cause: IB,
              restoreLost: vB,
              adapterRemembered: kB,
              ...II(BB, IB, TB)
            }), await nB(MB.e)
          }(vB, BB, nB, null !== TB && void 0 !== TB ? TB : "start_failed" === BB ? 0 : 1, {
            restoreLost: oB,
            adapterRemembered: cB
          })
        } catch (FB) {
          console.warn(`${LB} ${vB.backend} failed at home (${BB}), and its report couldn't be sent`, FB)
        }(0, MB.p)()
      } else {
        var zB;
        const IB = II(vB, BB, nB),
          TB = `WebGPU failed at home (${BB}${void 0===IB.error?"":`: ${IB.error instanceof Error?IB.error.message:(0,mB.k)(IB.error)}`}) and ${hB}`;
        console.warn(`${LB} ${TB}: the previews stop`, null !== (zB = IB.error) && void 0 !== zB ? zB : ""), (0, aB.s)(TB);
        try {
          const {
            countRenderLost: TB
          } = await Promise.resolve().then((() => ZB(40784)));
          TB(BB, IB.error, IB.context)
        } catch (gB) {
          console.warn(`${LB} WebGPU failed at home (${BB}), and its count couldn't be sent`, gB)
        }
      }
    }

    function II(BB, IB, ZB) {
      let {
        adapter: TB
      } = BB;
      return {
        error: ZB,
        context: {
          adapter: TB,
          boundAtMs: "start_failed" === IB ? null : (0, aB.M)(),
          indirectHangs: (0, aB.B)(),
          restoresSkipped: (0, aB.P)()
        }
      }
    }
    async function ZI() {
      if (!(0, NB.M)()) {
        const BB = await (0, aB.T)();
        if (null === BB || (0, dB.o)(BB)) return null;
        if (await (0, HB.b)(await BB.load()), !(0, NB.M)()) return null
      }
      return KB((0, NB.x)())
    }
    class TI {
      constructor(BB, IB, ZB, TB, JB, oB) {
        this.page = BB, this.host = IB, this.id = ZB, this.canvas = TB, this.size = JB, this.models = void 0, this.images = void 0, this.write = void 0, this.outcomes = [], this.closed = !1, this.quiet = 0, this.settled = [];
        const GB = {
            ...oB.images,
            glbUrl: BB => {
              var IB;
              return null !== (IB = this.models.drawnUrl(BB)) && void 0 !== IB ? IB : oB.images.glbUrl(BB)
            }
          },
          vB = IB => BB.modelFile(IB);
        this.images = new QB.h(GB, (BB => {
          console.warn(`${LB} image ${BB.key.kind}:${BB.key.index}:${BB.key.word} failed`, BB.error)
        }), {
          fetchFile: vB,
          fetchImage: IB => BB.imageFile(IB)
        }), BB.startModels(), this.models = new sB.f(oB.files, ((IB, ZB) => BB.buildModel(IB, ZB)), (BB => {
          console.warn(`${LB} model file ${BB.file} (${BB.url}) failed`, BB.error)
        }), {
          fetchFile: vB,
          onWritten: (BB, IB) => {
            this.images.glbWritten(BB, IB)
          },
          onTaken: (BB, IB) => {
            this.images.glbTaken(BB, IB)
          }
        }), this.write = (BB, IB, ZB) => {
          if (this.closed) return !0;
          if (BB === sB.b) {
            const BB = new DataView(ZB.buffer, ZB.byteOffset, OB.c),
              TB = BB.getUint32(0, !0),
              JB = BB.getUint32(OB.f, !0),
              oB = this.page.hostCall(DB, (() => this.host.AGB(this.id, TB, IB, ZB.subarray(OB.c))));
            return this.outcomes.push([JB, oB]), !0
          }
          return BB === QB.e && (this.page.hostCall(void 0, (() => {
            this.host.xGB(this.id, ZB)
          })), !0)
        }
      }
      get isClosed() {
        return this.closed
      }
      get isStopped() {
        return this.page.isStopped
      }
      resize(BB, IB, ZB) {
        if (this.closed) return;
        const [TB, JB] = VB(BB, IB, this.page.dpr(), ZB);
        TB === this.size[0] && JB === this.size[1] || (this.size = [TB, JB], this.page.hostCall(void 0, (() => {
          this.host.resize(this.id, TB, JB)
        })))
      }
      setMob(BB, IB, ZB, TB) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.SGB(this.id, BB, IB, ZB, TB))))
      }
      setPet(BB, IB, ZB, TB) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.IvB(this.id, BB, IB, ZB, TB))))
      }
      setPlayer(BB, IB, ZB) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.DGB(this.id, BB, IB, ZB))))
      }
      setFigure(BB, IB, ZB, TB) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.KGB(this.id, BB, IB, ZB, TB))))
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
          alpha: IB,
          beta: ZB,
          radius: TB
        } = BB;
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.BvB(this.id, IB, ZB, TB)
        }))
      }
      untilSettled() {
        return this.closed || this.page.isStopped ? Promise.resolve() : (this.quiet = 0, new Promise((BB => {
          this.settled.push(BB)
        })))
      }
      packChanged() {
        this.quiet = 0, this.models.refresh(), (0, iB.j)(this.images)
      }
      feed() {
        this.models.drain(this.write);
        for (const [BB, IB] of this.outcomes) {
          const ZB = IB === xB ? [] : [IB === EB ? BB : (BB | sB.e) >>> 0];
          this.models.taken(BB, ZB)
        }
        this.outcomes.length = 0, this.images.drain(this.write)
      }
      collect(BB) {
        let IB = !1;
        if (BB) {
          const BB = this.host.JvB(this.id);
          for (const IB of BB) this.models.request(IB);
          const ZB = this.host.TvB(this.id);
          ZB.length > 0 && this.images.onEvent(ZB), IB = BB.length > 0 || ZB.length > 0
        }
        const ZB = this.page.modelsUnavailable ? 0 : this.models.asking + this.models.unanswered,
          TB = IB || ZB > 0 || this.images.waiting > 0 || this.images.inFlight > 0;
        this.quiet = TB ? 0 : this.quiet + 1, this.quiet >= 3 && this.resolveSettled()
      }
      close() {
        this.closed || (this.closed = !0, this.page.closePreview(this), this.resolveSettled())
      }
      abandon() {
        this.resolveSettled()
      }
      dispose(BB) {
        this.page.hostCall(void 0, (() => {
          const IB = this.host.close(this.id);
          IB.length > 0 && this.images.onEvent(IB), this.page.isTrapped || BB.RoB(this.id)
        })), this.images.dispose(), this.canvas.remove()
      }
      resolveSettled() {
        const BB = this.settled;
        this.settled = [];
        for (const IB of BB) IB()
      }
    }
    class JI {
      constructor(BB) {
        this.deps = BB, this.module = null, this.host = null, this.opening = null, this.pageCanvas = null, this.samples = 1, this.binding = null, this.sessionEnds = 0, this.lastEndReturned = !0, this.previews = new Map, this.nextId = 1, this.frameId = null, this.stopped = !1, this.loggedErrors = new Set, this.modelsListener = {
          onUnavailable: BB => {
            this.modelsFailed(BB)
          },
          onDecoderFailed: BB => {
            this.loggedErrors.has("modelDecoder") || (this.loggedErrors.add("modelDecoder"), console.warn(`${LB} the Draco decoder didn't load: models waiting on it won't draw`, BB))
          },
          onWorkerLost: BB => {
            this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${LB} a model worker was lost: ${BB}`))
          },
          onModuleRetry: () => {}
        }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.oN = {
          setShaderPack: (BB, IB, ZB, TB, JB) => (this.shaderPackArgs = [BB, IB, ZB, TB, JB], this.handOverShaderPack(), !0)
        }, this.frame = BB => {
          this.frameId = null;
          const IB = this.host;
          if (null !== IB && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped) try {
            this.drawFrame(IB, BB)
          } catch (ZB) {
            if (!this.stopIfTrapped(ZB) && (this.stop(), (0, dB.p)(ZB))) return void this.deps.onRenderFailed("frames_refused", ZB);
            console.warn(`${LB} the previews stopped: their frame threw`, ZB)
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
        var BB, IB;
        return null !== (BB = null === (IB = this.host) || void 0 === IB ? void 0 : IB.attached()) && void 0 !== BB && BB
      }
      get open() {
        return this.previews.size
      }
      get frameCostMs() {
        return 0 === this.costs.length ? 0 : this.costs.reduce(((BB, IB) => BB + IB), 0) / this.costs.length
      }
      async bindSession(BB, IB, ZB) {
        const TB = this.binding,
          JB = this.sessionEnds;
        try {
          const oB = this.hostOf(BB);
          if (!oB.tGB()) {
            const IB = (0, PB.c)().sampleCount,
              GB = await ZB(IB);
            if (this.sessionEnds !== JB) return this.keepRendererOfEndedSession(BB, oB, GB, IB, TB), IB;
            if (!oB.iGB(GB)) throw new Error("the page has a renderer already");
            (0, aB.w)(performance.now()), this.samples = IB, (0, RB.g)((0, dB.l)(BB))
          }
          if (!oB.attach(IB)) throw new Error("the page's renderer is lent to another session");
          return this.samples
        } finally {
          this.binding === TB && this.endBinding()
        }
      }
      keepRendererOfEndedSession(BB, IB, ZB, TB, JB) {
        if (!this.lastEndReturned || null !== this.binding && this.binding !== JB) try {
          ZB.free()
        } catch (oB) {
          console.warn(`${LB} an ended session's renderer didn't free`, oB)
        } else IB.iGB(ZB) && ((0, aB.w)(performance.now()), this.samples = TB, (0, RB.g)(this.registryOf(BB)))
      }
      async beginSession() {
        var BB;
        let IB = () => {};
        const ZB = new Promise((BB => {
          IB = BB
        }));
        this.binding = {
          done: ZB,
          release: IB
        }, await (null === (BB = this.opening) || void 0 === BB ? void 0 : BB.catch((() => null)));
        const TB = this.pageCanvas;
        return this.pageCanvas = null, TB
      }
      endSession(BB) {
        var IB, ZB;
        if (this.sessionEnds++, this.lastEndReturned = BB, this.endBinding(), BB) {
          try {
            var TB;
            null === (TB = this.host) || void 0 === TB || TB.detach()
          } catch (JB) {
            return void console.warn(`${LB} the session's core kept the page's renderer`, JB)
          }!0 === (null === (IB = this.host) || void 0 === IB ? void 0 : IB.attached()) && console.warn(`${LB} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (ZB = this.host) || void 0 === ZB ? void 0 : ZB.tGB()) && (0, RB.g)(this.registryOf(this.module))
        }
      }
      endBinding() {
        var BB;
        null === (BB = this.binding) || void 0 === BB || BB.release(), this.binding = null
      }
      async openPreview(BB, IB, ZB, TB) {
        const JB = await this.renderingHost(),
          oB = this.module;
        if (null === JB || null === oB) throw new Error("this page can't draw previews: it has no renderer build");
        if (this.animations ??= this.loadAnimations(JB), this.deps.pack.wanted(), this.isStopped) throw new Error("the previews stopped");
        this.guarded((() => {
          this.deps.provideBuiltInAnimationPack(oB)
        }));
        const GB = this.nextId++,
          vB = this.deps.createCanvas(),
          [kB, cB] = VB(IB, ZB, this.deps.dpr(), TB);
        vB.width = kB, vB.height = cB;
        if (!this.guarded((() => (oB.PoB(GB, vB), JB.open(GB, kB, cB, BB))))) throw this.hostCall(void 0, (() => {
          oB.RoB(GB)
        })), new Error("the page's renderer is lent to a session that is running");
        this.restartModelsIfFailed();
        const nB = new TI(this, JB, GB, vB, [kB, cB], this.deps);
        return this.previews.set(GB, nB), this.startFrames(), nB
      }
      prefetch() {
        if (this.prefetched || this.isStopped || (0, aB.e)() || null !== (0, aB.L)()) return;
        this.prefetched = !0;
        (null === this.module ? this.loadModule() : Promise.resolve(this.module)).then((BB => {
          null === BB || this.isStopped || (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles())
        }), (() => {}))
      }
      modelFile(BB) {
        return this.prefetchedOr(BB, this.deps.fetchModel)
      }
      imageFile(BB) {
        return this.prefetchedOr(BB, TB.K)
      }
      prefetchedOr(BB, IB) {
        const ZB = this.prefetchedFiles.get(BB);
        return void 0 === ZB ? IB(BB) : ZB.catch((() => IB(BB)))
      }
      async prefetchPlayerFiles() {
        const BB = this.deps.playerFile().then((BB => this.deps.files.url(BB))),
          IB = await Promise.all([BB, this.deps.images.lifeformAtlasUrl(iB.e)]).catch((() => null));
        if (null === IB) return;
        const [ZB, TB] = IB, JB = (BB, IB) => {
          if (null === BB) return;
          const ZB = IB(BB);
          this.prefetchedFiles.set(BB, ZB), ZB.catch((() => {
            this.prefetchedFiles.delete(BB)
          }))
        };
        JB(ZB, (BB => this.modelFile(BB))), JB(TB, (BB => this.imageFile(BB)))
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
      buildModel(BB, IB) {
        return this.startModels(), this.models.then((ZB => ZB(BB, IB))).then((BB => this.unavailable ? new Promise((() => {})) : BB))
      }
      restartModelsIfFailed() {
        this.unavailable && !this.modelsRestarted && 0 === this.previews.size && (this.modelsRestarted = !0, this.models = null, this.unavailable = !1, this.startModels())
      }
      modelsFailed(BB) {
        this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${LB} the model workers didn't start: models won't draw in the previews`, BB))
      }
      called(BB) {
        return 0 !== BB && this.logError(BB, 0), BB
      }
      closePreview(BB) {
        this.previews.delete(BB.id), null !== this.module && BB.dispose(this.module), 0 === this.previews.size && null !== this.frameId && (this.deps.cancelFrame(this.frameId), this.frameId = null)
      }
      hostOf(BB) {
        if (null !== this.module && this.module !== BB) throw new Error("a second renderer module on one page");
        return this.module = BB, null === this.host && (this.host = this.guarded((() => new BB.joB)), this.tellInGame(), this.handOverShaderPack()), this.host
      }
      tellInGame() {
        const {
          host: BB
        } = this;
        null !== BB && this.outsideCall("the game's start or end", (() => {
          BB.VGB(this.deps.game.inGame())
        }))
      }
      handOverShaderPack() {
        const {
          host: BB,
          shaderPackArgs: IB
        } = this;
        null !== BB && null !== IB && this.outsideCall("the shader pack's hand-over", (() => {
          BB.PTB(...IB) || console.warn(`${LB} the host refused the shader pack: previews draw without it at home`)
        }))
      }
      outsideCall(BB, IB) {
        try {
          this.hostCall(void 0, IB)
        } catch (ZB) {
          this.stop(), console.warn(`${LB} the previews stopped: ${BB} threw`, ZB)
        }
      }
      async loadAnimations(BB) {
        const IB = GB(null),
          ZB = this.module;
        try {
          IB.wasm = null === ZB ? IB.wasm : this.hostCall(IB.wasm, (() => ZB.Yh()))
        } catch {}
        let TB, JB;
        try {
          TB = await this.fetchAnimationTable()
        } catch (oB) {
          return void this.deps.onAnimationsFailed({
            stage: "fetch",
            error: oB
          }, IB)
        }
        if (!this.settleIfTrapped()) {
          try {
            JB = BB.EGB(TB)
          } catch (oB) {
            if (this.stopIfTrapped(oB)) return;
            return void this.deps.onAnimationsFailed({
              stage: "decode",
              error: oB
            }, IB)
          }
          JB || this.deps.onAnimationsFailed({
            stage: "decode",
            error: null
          }, IB)
        }
      }
      async renderingHost() {
        if (null !== this.binding && await this.binding.done, this.settleIfTrapped()) return null;
        const BB = this.host;
        return null !== BB && this.guarded((() => BB.tGB())) ? BB : (this.opening ??= this.openAtHome().finally((() => {
          this.opening = null
        })), this.opening)
      }
      async openAtHome() {
        var BB;
        const IB = null !== (BB = this.module) && void 0 !== BB ? BB : await this.loadModule();
        if (null === IB) return null;
        const ZB = this.hostOf(IB),
          TB = () => this.guarded((() => ZB.tGB()));
        if (TB()) return ZB;
        if (null !== (0, aB.L)() || (0, aB.e)()) return null;
        const JB = this.deps.createCanvas();
        JB.width = 1, JB.height = 1;
        const oB = await this.deps.openExtras();
        if (this.settleIfTrapped()) return null;
        const GB = (0, PB.c)().sampleCount;
        let vB;
        try {
          vB = await (0, dB.v)(IB, "previewRenderer", JB, GB, rB.c, oB)
        } catch (kB) {
          throw kB instanceof YB.b ? this.stopForTrap(kB) : (0, dB.t)(kB) && await this.deps.onRenderFailed("start_failed", kB), kB
        }
        return this.guarded((() => ZB.iGB(vB))) ? ((0, aB.w)(performance.now()), this.samples = GB, this.pageCanvas = JB, (0, RB.g)(this.registryOf(IB)), ZB) : TB() ? ZB : null
      }
      startFrames() {
        null !== this.frameId || this.isStopped || (this.frameId = this.deps.requestFrame(this.frame))
      }
      drawFrame(BB, IB) {
        for (const GB of this.previews.values()) GB.feed();
        if (this.stopped) return;
        const ZB = this.deps.now(),
          TB = BB.frame(IB);
        this.costs.push(this.deps.now() - ZB), this.costs.length > 120 && this.costs.shift();
        const JB = 0 !== (256 & TB),
          oB = 255 & TB;
        for (const GB of this.previews.values()) {
          if (this.stopped) return;
          GB.collect(JB)
        }
        if (!this.stopped) {
          if (0 !== (512 & TB) && this.deps.onDrew(), JB) {
            const IB = BB.ZvB();
            for (let BB = 0; BB + 1 < IB.length; BB += 2) IB[BB] === WB.K.RenderDeviceLost && this.deps.onDeviceLost(), this.logError(IB[BB], IB[BB + 1])
          }
          if (oB !== AB) {
            if (oB === tB) return this.stop(), void this.deps.onFatal(BB.uGB(), BB.fGB());
            if (oB === bB) return this.stop(), void console.warn(`${LB} the previews stopped: the page's renderer went with its session`);
            (0, qB.e)(IB), this.startFrames()
          } else {
            const IB = BB.lGB();
            this.stop();
            const ZB = IB[2] === WB.ed.PIPELINE_FAILED ? "pipeline_failed" : "lost";
            this.deps.onRenderFailed(ZB, void 0, IB[1], IB[2] === WB.ed.RESTORE_LOST)
          }
        }
      }
      get isStopped() {
        return this.stopped || this.isTrapped
      }
      get isTrapped() {
        return null !== this.module && ((0, YB.f)(this.module) || "failed" === (0, NB.u)())
      }
      hostCall(BB, IB) {
        if (this.settleIfTrapped()) return BB;
        try {
          return IB()
        } catch (ZB) {
          if (this.stopIfTrapped(ZB)) return BB;
          throw ZB
        }
      }
      guarded(BB) {
        if (this.settleIfTrapped()) throw new Error("the previews stopped: their module trapped");
        try {
          return BB()
        } catch (IB) {
          throw this.stopIfTrapped(IB), IB
        }
      }
      registryOf(BB) {
        return {
          WTB: (IB, ZB) => {
            this.hostCall(void 0, (() => {
              BB.WTB(IB, ZB)
            }))
          },
          dTB: IB => {
            this.hostCall(void 0, (() => {
              BB.dTB(IB)
            }))
          }
        }
      }
      settleIfTrapped() {
        return !!this.isTrapped && (this.stopped || (this.stop(), (0, RB.g)(null)), !0)
      }
      stopIfTrapped(BB) {
        return !(null === this.module || !(0, YB.h)(this.module, BB)) && (this.stopForTrap(BB), !0)
      }
      stopForTrap(BB) {
        this.stop(), (0, RB.g)(null), (0, XB.f)("previews", BB)
      }
      stop() {
        this.stopped = !0;
        for (const BB of this.previews.values()) BB.abandon()
      }
      logError(BB, IB) {
        const ZB = `${BB}:${IB}`;
        this.loggedErrors.has(ZB) || (this.loggedErrors.add(ZB), console.warn(`${LB} error ${BB} (detail ${IB})`))
      }
    }
    let oI = null;

    function GI() {
      return oI ??= new JI(function() {
        const BB = (0, wB.q)(gB.clientSideServerUrls.staticUrl, {
          packUrl: BB => {
            var IB, ZB;
            return null !== (IB = null === (ZB = iB.f.current) || void 0 === ZB ? void 0 : ZB.modelUrl(BB)) && void 0 !== IB ? IB : null
          }
        });
        return {
          loadModule: ZI,
          startModels: async BB => {
            const {
              pageModelPool: IB
            } = await ZB.e(43).then((() => ZB(51116))), {
              pool: TB
            } = IB(BB);
            return (BB, IB) => TB.build(BB, IB)
          },
          fetchAnimations: async () => vB(await (0, TB.K)(SB())),
          playerFile: async () => (await (0, wB.m)()).PLAYER_FILE,
          onAnimationsFailed: (BB, IB) => {
            kB("previewAnimations", SB(), BB, IB)
          },
          provideBuiltInAnimationPack: BB => {
            zB().provide(BB)
          },
          openExtras: aB.E,
          files: BB,
          images: (0, iB.n)((0, QB.l)(BB.url), (() => iB.f.current)),
          pack: iB.f,
          game: pB.b,
          fetchModel: BB => (0, wB.i)(BB),
          createCanvas: () => document.createElement("canvas"),
          dpr: () => window.devicePixelRatio,
          now: () => performance.now(),
          requestFrame: BB => requestAnimationFrame(BB),
          cancelFrame: BB => {
            cancelAnimationFrame(BB)
          },
          onRenderFailed: BI,
          onFatal: (BB, IB) => {
            console.error(`${LB} the previews stopped: renderer error ${BB} (detail ${IB})`)
          },
          onDeviceLost: () => {
            (0, aB.I)() === jB.b.webgpu && ((0, CB.e)((0, NB.M)() ? (0, dB.Q)((0, NB.x)()) : null), yB.H.lost())
          },
          onDrew: () => {
            yB.H.drew()
          }
        }
      }()), oI
    }
    var vI = ZB(655),
      kI = ZB(38677),
      cI = ZB(3461);
    const nI = {
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
    const hI = "[bloxd-previews]",
      zI = new Uint32Array(5);

    function FI(BB) {
      return vI.i.indexOf(BB)
    }
    const NI = new WeakSet;

    function gI(BB) {
      const IB = (0, kI.f)(BB),
        ZB = null === IB ? -1 : qI(IB);
      return -1 !== ZB ? ZB : (NI.has(BB) || (NI.add(BB), console.warn(`${hI} an animation the previews' table lacks: the mob idles instead`)), -1)
    }

    function qI(BB) {
      var IB;
      return null !== (IB = nI[BB]) && void 0 !== IB ? IB : -1
    }

    function yI(BB, IB) {
      const {
        canvas: ZB
      } = IB;
      ZB.style.width = "100%", ZB.style.height = "100%", ZB.style.display = "block", BB.appendChild(ZB)
    }

    function UI(BB) {
      const IB = BB.getBoundingClientRect();
      return [IB.width, IB.height]
    }
    class WI {
      constructor(BB, IB) {
        this.preview = BB, this.showView = IB
      }
      show(BB) {
        this.showView(this.preview, BB)
      }
      resize(BB, IB) {
        this.preview.resize(BB, IB)
      }
      close() {
        this.preview.close()
      }
    }
    class dI {
      constructor(BB) {
        this.preview = BB, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.detachControls = void 0, this.detachControls = function(BB) {
          const {
            canvas: IB
          } = BB;
          let ZB = null;
          const TB = BB => {
              var TB;
              ZB = {
                pointer: BB.pointerId,
                x: BB.clientX,
                y: BB.clientY
              }, null === (TB = IB.setPointerCapture) || void 0 === TB || TB.call(IB, BB.pointerId)
            },
            JB = IB => {
              var TB;
              const JB = BB.orbit;
              if ((null === (TB = ZB) || void 0 === TB ? void 0 : TB.pointer) !== IB.pointerId || null === JB) return;
              const oB = IB.clientX - ZB.x,
                GB = IB.clientY - ZB.y;
              ZB = {
                ...ZB,
                x: IB.clientX,
                y: IB.clientY
              }, BB.setOrbit({
                alpha: JB.alpha - .01 * oB,
                beta: Math.min(Math.PI - .01, Math.max(.01, JB.beta - .01 * GB)),
                radius: JB.radius
              })
            },
            oB = BB => {
              var IB;
              (null === (IB = ZB) || void 0 === IB ? void 0 : IB.pointer) === BB.pointerId && (ZB = null)
            },
            GB = IB => {
              const ZB = BB.orbit;
              if (null === ZB) return;
              IB.preventDefault();
              const TB = IB.deltaY * (IB.deltaMode === WheelEvent.DOM_DELTA_LINE ? 40 : IB.deltaMode === WheelEvent.DOM_DELTA_PAGE ? 800 : 1),
                JB = Math.min(100, Math.max(5, ZB.radius + .08 * TB));
              BB.setOrbit({
                ...ZB,
                radius: JB
              })
            };
          return IB.style.touchAction = "none", IB.addEventListener("pointerdown", TB), IB.addEventListener("pointermove", JB), IB.addEventListener("pointerup", oB), IB.addEventListener("pointercancel", oB), IB.addEventListener("wheel", GB, {
            passive: !1
          }), () => {
            IB.removeEventListener("pointerdown", TB), IB.removeEventListener("pointermove", JB), IB.removeEventListener("pointerup", oB), IB.removeEventListener("pointercancel", oB), IB.removeEventListener("wheel", GB)
          }
        }(BB), this.dev = {
          canvas: () => BB.canvas,
          isolateHead: () => {
            console.warn(`${hI} isolateHead: noa's character preview only`)
          }
        }, this.apply(), this.ready = BB.untilSettled().then((() => {
          if (BB.isStopped) throw new Error(`${hI} the previews stopped before the character drew`);
          this.built = !0
        }))
      }
      isReady() {
        return this.built && !this.preview.isClosed
      }
      setCosmetic(BB, IB) {
        this.cosmetics[BB] = IB, this.apply()
      }
      playEmote(BB) {
        null === BB || BB !== this.emote ? (this.emote = BB, this.apply()) : this.preview.replay()
      }
      untilDrawn(BB) {
        return this.preview.untilSettled()
      }
      setOrbit(BB) {
        let {
          yaw: IB,
          pitch: ZB,
          radius: TB
        } = BB;
        const JB = this.preview.orbit;
        null !== JB && this.preview.setOrbit({
          alpha: IB,
          beta: ZB,
          radius: null !== TB && void 0 !== TB ? TB : JB.radius
        })
      }
      resetCamera() {}
      resize(BB, IB) {
        this.preview.resize(BB, IB)
      }
      close() {
        this.detachControls(), this.preview.close()
      }
      apply() {
        var BB;
        this.preview.setPlayer(JSON.stringify(this.cosmetics), zI, null === (BB = this.emote) ? -1 : qI(BB))
      }
    }

    function CI(BB, IB) {
      let {
        mobType: ZB,
        variation: TB,
        animation: JB
      } = IB;
      BB.setMob(FI(ZB), null !== TB && void 0 !== TB ? TB : "", 1, gI(JB))
    }

    function QI(BB, IB) {
      let {
        mobType: ZB,
        variation: TB,
        metaInfo: JB,
        tamed: oB
      } = IB;
      BB.setPet(FI(ZB), TB, JB, oB)
    }
    const sI = {
      aimed: .533 / 1.15 * 1.1,
      ready: .16 / .85 * 1.1
    };
    class wI {
      constructor(BB, IB, ZB, TB) {
        this.preview = null, this.closed = !1, this.figure = null, this.shown = !1, this.order = "", this.span = {
          left: 0,
          width: 0
        }, this.lineup = [0, 0], this.given = null, this.loaded = !1, BB(ZB.width, TB[1], TB).then((BB => {
          if (this.closed) return void BB.close();
          const {
            style: ZB
          } = BB.canvas;
          ZB.position = "absolute", ZB.top = "0", ZB.visibility = "hidden", yI(IB, BB), this.preview = BB, this.apply()
        })).catch((BB => {
          console.error(`${hI} couldn't open a lineup figure`, BB)
        }))
      }
      update(BB, IB, ZB, TB, JB) {
        this.figure = BB, this.shown = IB, this.order = ZB, this.span = TB, this.lineup = JB, this.apply()
      }
      close() {
        var BB;
        this.closed = !0, null === (BB = this.preview) || void 0 === BB || BB.close(), this.preview = null
      }
      apply() {
        const {
          preview: BB,
          figure: IB,
          lineup: ZB
        } = this;
        if (null === BB || null === IB) return;
        if (this.given !== IB) {
          var TB;
          this.given = IB, this.loaded = !1;
          const ZB = null === IB.JC ? 0 : null !== (TB = (0, cI.c)(IB.JC)) && void 0 !== TB ? TB : 0;
          BB.setFigure(function(BB) {
            return JSON.stringify(Object.fromEntries(BB.cosmetics))
          }(IB), ZB, gI(IB.animation), IB.size), BB.untilSettled().then((() => {
            this.given === IB && (this.loaded = !0, this.apply())
          }))
        }
        const {
          left: JB,
          width: oB
        } = this.span;
        BB.resize(oB, ZB[1], ZB);
        const {
          style: GB
        } = BB.canvas;
        GB.left = `${JB}px`, GB.width = `${oB}px`, GB.zIndex = this.order, GB.visibility = this.shown && this.loaded ? "visible" : "hidden"
      }
    }
    class OI {
      constructor(BB, IB) {
        this.open = IB, this.layer = void 0, this.figures = [], this.view = {
          figures: [],
          shown: []
        }, this.size = void 0, this.size = UI(BB), this.layer = document.createElement("div");
        const {
          style: ZB
        } = this.layer;
        ZB.position = "relative", ZB.isolation = "isolate", ZB.overflow = "hidden", ZB.width = "100%", ZB.height = "100%", ZB.pointerEvents = "none", BB.appendChild(this.layer)
      }
      show(BB) {
        this.view = BB, this.place()
      }
      resize(BB, IB) {
        this.size = [BB, IB], this.place()
      }
      close() {
        for (const BB of this.figures) BB.close();
        this.figures = [], this.layer.remove()
      }
      place() {
        const {
          figures: BB,
          shown: IB
        } = this.view;
        for (const TB of this.figures.splice(BB.length)) TB.close();
        const {
          size: ZB
        } = this;
        BB.forEach(((TB, JB) => {
          var oB;
          const GB = function(BB, IB, ZB, TB) {
            let [JB, oB] = TB;
            const GB = (BB + .5) * JB / IB,
              vB = Math.min(Math.max(JB / IB, 2 * ZB * oB), 2 * Math.max(GB, JB - GB));
            return {
              left: GB - vB / 2,
              width: vB
            }
          }(JB, BB.length, function(BB) {
            let {
              animation: IB,
              size: ZB
            } = BB;
            const {
              aimed: TB,
              ready: JB
            } = sI;
            return (gI(IB) === nI.gunAimed ? TB : JB) * ZB
          }(TB), ZB);
          this.figures[JB] ??= new wI(this.open, this.layer, GB, ZB), this.figures[JB].update(TB, null !== (oB = IB[JB]) && void 0 !== oB && oB, function(BB, IB) {
            return String(Math.round(1e3 * BB) + IB)
          }(TB.size, JB), GB, ZB)
        }))
      }
    }
    const YI = {
      player: fB,
      store: lB
    };
    class iI {
      constructor(BB) {
        this.page = BB
      }
      async openMob(BB) {
        return new WI(await this.open(BB, uB), CI)
      }
      async openPet(BB) {
        return new WI(await this.open(BB, uB), QI)
      }
      openMobLineup(BB) {
        return new OI(BB, ((BB, IB, ZB) => this.page.openPreview(uB, BB, IB, ZB)))
      }
      async openCharacter(BB, IB) {
        return new dI(await this.open(BB, YI[IB]))
      }
      async open(BB, IB) {
        const [ZB, TB] = UI(BB), JB = await this.page.openPreview(IB, ZB, TB);
        return yI(BB, JB), JB
      }
    }
  },
  36771: (BB, IB, ZB) => {
    ZB.d(IB, {
      A: () => FB,
      B: () => NB,
      C: () => gB,
      G: () => yB,
      d: () => TB,
      g: () => JB,
      k: () => zB,
      l: () => qB,
      o: () => nB,
      q: () => UB,
      u: () => kB,
      y: () => cB
    });
    const TB = [{
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

    function JB(BB, IB) {
      const {
        numLines: ZB,
        charsPerLine: JB
      } = TB[IB];
      return WB(BB, ZB, JB, !1)
    }
    const oB = 7 / 8,
      GB = .25,
      vB = 8;

    function kB(BB, IB) {
      return {
        width: Math.min(BB, vB) - 2 * GB,
        height: Math.min(IB, vB) - 2 * GB
      }
    }

    function cB(BB, IB, ZB) {
      const JB = kB(BB, IB),
        {
          numLines: GB,
          charsPerLine: vB
        } = TB[ZB];
      return {
        numLines: Math.max(1, Math.floor(GB / oB * JB.height)),
        charsPerLine: Math.max(1, Math.floor(vB * JB.width))
      }
    }

    function nB(BB, IB, ZB, TB) {
      const {
        numLines: JB,
        charsPerLine: oB
      } = cB(ZB, TB, IB);
      return WB(BB, JB, oB, !1)
    }
    const hB = 32e3;

    function zB(BB) {
      return BB.slice(0, hB)
    }
    const FB = 512e3,
      NB = 64,
      gB = FB;

    function qB(BB, IB) {
      const ZB = Math.max(0, gB - IB),
        TB = Math.min(FB, ZB);
      return BB.slice(0, TB)
    }
    const yB = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      xG: {
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

    function UB(BB, IB) {
      const {
        numLines: ZB,
        charsPerLine: TB
      } = yB[IB];
      return WB(BB, ZB, TB, !1)
    }

    function WB(BB, IB, ZB, TB, JB) {
      (JB || TB) && (BB = BB.slice(0, null !== JB && void 0 !== JB ? JB : IB * ZB));
      const oB = BB.split("\n");
      if (oB.length > IB && oB.splice(IB, oB.length - IB), !TB)
        for (let GB = 0; GB < oB.length; GB++) {
          const BB = oB[GB];
          BB.length > ZB && (oB[GB] = BB.substring(0, ZB), oB.length < IB && oB.splice(GB + 1, 0, BB.substring(ZB)))
        }
      return oB.join("\n")
    }
  },
  51050: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/builtInAnimations.anim.38e056f49512e10b7206.gz"
  },
  51057: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/previewAnimations.dat.24d2343c38c8f9b3fb85.gz"
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);