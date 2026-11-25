export const id = 60;
export const ids = [60];
export const modules = {
  39061: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => SG,
      d: () => LG
    });
    const wG = new WeakMap;

    function SG(GG, bG) {
      return wG.set(GG, bG), GG
    }

    function LG(GG) {
      var bG;
      return null !== (bG = wG.get(GG)) && void 0 !== bG ? bG : null
    }
  },
  39075: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => kG
    });
    var wG = ZG(1177);

    function SG(GG) {
      const bG = /(\d*\.?\d+)px/.exec(GG);
      return bG ? Number(bG[1]) : null
    }

    function LG(GG) {
      return GG.split(/[\s,]+/).pop()
    }
    let yG = !1;
    const kG = {
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
      drawText: function(GG, bG, wG, kG, UG, YG) {
        if (UG <= 0 || YG <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: VG,
          fontVariant: pG,
          fontWeight: fG,
          fontSize: QG,
          font: KG
        } = this, hG = [VG, pG, fG, `${QG}px`, KG].filter(Boolean).join(" "), dG = [
          [fG, `${QG}px`, LG(KG)].filter(Boolean).join(" "), `${QG}px sans-serif`
        ], JG = GG.font, rG = function(GG, bG, ZG) {
          for (const wG of bG) {
            GG.font = wG;
            const bG = SG(GG.font),
              yG = LG(wG);
            if (null !== bG && Math.abs(bG - ZG) <= .5 && GG.font.toLowerCase().includes(yG.toLowerCase())) return wG
          }
          return null
        }(GG, [hG, ...dG], QG);
        rG !== hG && function(GG, bG, wG) {
          yG || (yG = !0, Promise.resolve().then((() => ZG(1032))).then((ZG => {
            let {
              rh: SG
            } = ZG;
            SG(new Error("A canvas didn't take canvasTxt's font"), {
              font: GG,
              vQ: bG,
              drawnWith: null !== wG && void 0 !== wG ? wG : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(hG, JG, rG);
        const zG = SG(GG.font);
        if (null === rG && null !== zG && zG > 0) {
          const ZG = QG / zG;
          GG.save();
          try {
            return GG.scale(ZG, ZG), {
              height: this.drawLines(GG, bG, wG / ZG, kG / ZG, UG / ZG, YG / ZG, zG).height * ZG
            }
          } finally {
            GG.restore()
          }
        }
        return this.drawLines(GG, bG, wG, kG, UG, YG, QG)
      },
      drawLines: function(GG, bG, ZG, SG, LG, yG, kG) {
        const UG = ZG + LG,
          YG = SG + yG;
        let VG, pG = SG + yG / 2 + kG / 2;
        "right" === this.align ? (VG = UG, GG.textAlign = "right") : "left" === this.align ? (VG = ZG, GG.textAlign = "left") : (VG = ZG + LG / 2, GG.textAlign = "center");
        for (const wG of bG) {
          GG.measureText(wG).width >= LG && (bG = bG.replace(wG, ""))
        }
        bG = (0, wG.R)(bG);
        const fG = [],
          QG = bG.split("\n"),
          KG = this.justify ? GG.measureText("\u200a").width : 0;
        QG.forEach((bG => {
          let ZG = GG.measureText(bG).width;
          if (ZG <= LG) fG.push(bG);
          else {
            let wG = bG;
            const SG = LG;
            let yG, kG, UG;
            for (ZG = GG.measureText(wG).width; ZG > SG;) {
              for (yG = 0, kG = 0, UG = ""; kG < SG;) yG++, UG = wG.substr(0, yG), kG = GG.measureText(UG).width;
              yG--, UG = UG.substr(0, yG);
              const bG = yG;
              if (" " !== wG.substr(yG, 1)) {
                for (;
                  " " !== wG.substr(yG, 1) && 0 !== yG;) yG--;
                0 === yG && (yG = bG), UG = wG.substr(0, yG)
              }
              UG = this.justify ? this.justifyLine(GG, UG, KG, "\u200a", LG) : UG, wG = wG.substr(yG), ZG = GG.measureText(wG).width, fG.push(UG)
            }
            ZG > 0 && fG.push(wG)
          }
        }));
        const hG = this.lineHeight ? this.lineHeight : this.getTextHeight(GG, bG),
          dG = hG * (fG.length - 1),
          JG = dG / 2;
        let rG = SG;
        "top" === this.vAlign ? pG = SG + kG : "bottom" === this.vAlign ? (pG = YG - dG, rG = YG) : (rG = SG + yG / 2, pG -= JG), fG.forEach((bG => {
          bG = bG.trim(), GG.fillText(bG, VG, pG), pG += hG
        })), this.debug && (GG.lineWidth = 3, GG.strokeStyle = "#00909e", GG.strokeRect(ZG, SG, LG, yG), GG.lineWidth = 2, GG.strokeStyle = "#f6d743", GG.beginPath(), GG.moveTo(VG, SG), GG.lineTo(VG, YG), GG.stroke(), GG.strokeStyle = "#ff6363", GG.beginPath(), GG.moveTo(ZG, rG), GG.lineTo(UG, rG), GG.stroke());
        return {
          height: dG + hG
        }
      },
      getTextHeight: function(GG, bG) {
        const ZG = GG.textBaseline;
        GG.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: wG
        } = GG.measureText(bG);
        return GG.textBaseline = ZG, wG
      },
      justifyLine: function(GG, bG, ZG, wG, SG) {
        const LG = bG.trim(),
          yG = GG.measureText(LG).width,
          kG = LG.split(/\s+/).length - 1,
          UG = Math.floor((SG - yG) / ZG);
        if (kG <= 0 || UG <= 0) return LG;
        const YG = Math.floor(UG / kG);
        let VG = UG - kG * YG,
          pG = [];
        for (let fG = 0; fG < YG; fG++) pG.push(wG);
        pG = pG.join("");
        return LG.replace(/\s+/g, (GG => {
          const bG = VG > 0 ? pG + wG : pG;
          return VG--, GG + bG
        }))
      }
    }
  },
  39080: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => hG,
      f: () => KG,
      g: () => fG,
      h: () => VG,
      i: () => pG
    });
    var wG = ZG(4255),
      SG = ZG(352);
    const LG = 1024,
      yG = 1536,
      kG = 2 * wG.h + 1,
      UG = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      YG = 1.5;

    function VG(GG, bG, ZG) {
      if ("string" !== typeof GG) return bG;
      try {
        const ZG = JSON.parse(GG);
        return ZG && "object" === typeof ZG ? ZG : bG
      } catch (wG) {
        return void 0 !== ZG && console.error(`Couldn't parse ${ZG}`, wG), bG
      }
    }

    function pG(GG) {
      return VG(GG, null, "a leaderboard's rows")
    }

    function fG(GG, bG) {
      var ZG, wG;
      return null !== bG && void 0 !== bG ? bG : {
        status: null !== (ZG = GG.status) && void 0 !== ZG ? ZG : "loading",
        entries: null !== (wG = GG.entries) && void 0 !== wG ? wG : []
      }
    }

    function QG(GG, bG) {
      return "number" === typeof GG && Number.isFinite(GG) && GG > 0 ? GG : bG
    }

    function KG(GG, bG) {
      const ZG = QG(GG.size, 1);
      let wG = QG(GG.width, QG(2.5 * ZG, 2.5)),
        SG = QG(GG.height, QG(3.75 * ZG, 3.75));
      Number.isFinite(LG * SG / wG) && Number.isFinite(yG * wG / SG) || (wG = 2.5, SG = 3.75);
      const kG = SG / wG,
        UG = Math.max(1, Math.min(LG, bG / kG));
      return {
        width: wG,
        height: SG,
        layoutWidth: Math.max(LG, yG / kG),
        layoutHeight: Math.max(yG, LG * kG),
        pixelWidth: Math.round(UG),
        pixelHeight: Math.round(Math.max(1, Math.min(bG, UG * kG)))
      }
    }

    function hG(GG, bG, ZG, yG, VG, pG) {
      GG.setTransform(1, 0, 0, 1, 0, 0), GG.fillStyle = SG.O.defaultNameTagBackground, GG.fillRect(0, 0, bG, ZG), GG.scale(bG / yG.layoutWidth, ZG / yG.layoutHeight), GG.translate((yG.layoutWidth - LG) / 2, 0),
        function(GG, bG, ZG, LG) {
          var yG, VG, pG, fG;
          const {
            top: QG,
            around: KG,
            showPlayerText: hG,
            localPlayerDbId: rG
          } = ZG, {
            whiteUiText: zG,
            grayUiText: EG,
            yellowUiText: oG
          } = SG.O;
          GG.textBaseline = "middle";
          const XG = function(bG, ZG, wG, SG, LG, yG) {
              let kG = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              GG.font = `bold ${SG}px 'Jetbrains Mono', monospace`, GG.fillStyle = LG, GG.textAlign = kG;
              let UG = bG.replace(/[\r\n\t]/g, " ");
              if (GG.measureText(UG).width > yG) {
                for (; UG.length > 0 && GG.measureText(`${UG}\u2026`).width > yG;) UG = UG.slice(0, -1);
                UG += "\u2026"
              }
              GG.fillText(UG, ZG, wG)
            },
            uG = bG => {
              GG.fillStyle = zG, GG.globalAlpha = .15, GG.fillRect(24, bG, 976, 2), GG.globalAlpha = 1
            },
            iG = null === rG ? null : (0, SG.uc)(rG),
            CG = GG => null !== iG && GG.playerHash === iG,
            WG = dG(QG.entries, wG.l),
            mG = "ready" === QG.status && WG.length > 0,
            IG = null === KG ? [] : dG(KG.entries, kG),
            FG = WG.some(CG),
            vG = null === KG ? null : function(GG) {
              const bG = GG;
              if (!bG || !Number.isFinite(bG.rank) || !Number.isFinite(bG.tied) || !Number.isFinite(bG.total)) return null;
              return bG
            }(KG.standing),
            aG = IG.find(CG),
            cG = WG.find(CG),
            lG = null === vG || void 0 === aG ? null : {
              value: aG.value,
              rank: vG.rank
            },
            jG = JG(WG, void 0 === cG || cG.value === (null === lG || void 0 === lG ? void 0 : lG.value) ? lG : null),
            PG = JG(IG, lG),
            MG = (GG, bG) => {
              const ZG = GG.findIndex(CG);
              return ZG >= 0 ? bG[ZG] : null
            },
            AG = null !== (yG = null !== (VG = null === vG || void 0 === vG ? void 0 : vG.rank) && void 0 !== VG ? VG : MG(IG, PG)) && void 0 !== yG ? yG : MG(WG, jG);
          GG.font = "bold 34px 'Jetbrains Mono', monospace";
          const sG = [...mG ? jG : [], ...FG ? [] : PG],
            qG = Math.min(280, Math.max(0, ...sG.map((bG => GG.measureText(UG.format(bG)).width)))),
            nG = qG <= 80,
            gG = nG ? 80 : 32 + qG,
            eG = nG ? 148 : gG + 28,
            RG = 660 - eG;
          XG(`TOP ${wG.l}  /  ALL TIME`, 24, 52, 28, EG, 976), XG(hG ? String(null !== (pG = bG.title) && void 0 !== pG ? pG : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, zG, 976), XG("RANK", 32, 174, 28, EG, eG - 40), XG("PLAYER", eG, 174, 28, EG, RG), XG(hG ? String(null !== (fG = bG.scoreLabel) && void 0 !== fG ? fG : "Score").slice(0, 24) : "Score", 992, 174, 28, EG, 304, "right"), uG(202);
          const TG = (LG - 232) / (wG.l + YG + kG),
            HG = 208 + wG.l * TG,
            tG = HG + YG * TG,
            DG = (bG, ZG, wG, SG) => {
              const LG = CG(bG);
              GG.fillStyle = LG ? oG : zG, GG.globalAlpha = LG ? .15 : SG ? .035 : 0, GG.fillRect(24, wG - TG / 2 + 1, 976, TG - 2), GG.globalAlpha = 1;
              const yG = LG ? oG : zG;
              XG(UG.format(ZG), gG, wG, 34, yG, nG ? 80 : qG, nG ? "center" : "right"), XG(hG ? String(bG.name).slice(0, 64) : "Player", eG, wG, 34, yG, RG);
              const kG = UG.format(bG.value);
              XG(GG.measureText(kG).width > 304 ? bG.value.toExponential(6) : kG, 992, wG, 34, yG, 304, "right")
            };
          if (mG)
            for (const [wG, SG] of WG.entries()) DG(SG, jG[wG], 208 + (wG + .5) * TG, wG % 2 === 0);
          else {
            const GG = "error" === QG.status,
              bG = GG ? "Couldn't load leaderboard" : "ready" === QG.status ? "No scores yet" : "Loading leaderboard\u2026",
              ZG = GG ? "Trying again shortly" : "ready" === QG.status ? "Be the first on the board!" : "Fetching the top players",
              wG = (208 + HG) / 2;
            XG(bG, 512, wG - 28, 40, GG ? SG.O.redUiText : zG, 960, "center"), XG(ZG, 512, wG + 27, 30, EG, 960, "center")
          }
          const NG = HG + YG * TG / 2;
          if (null === AG) uG(NG);
          else {
            const bG = null === vG ? 0 : vG.tied - 1,
              ZG = `YOUR RANK #${UG.format(AG)}${null===vG?"":` of ${UG.format(vG.total)}`}`;
            GG.font = "bold 36px 'Jetbrains Mono', monospace";
            const wG = Math.max(20, Math.min(36, Math.floor(34560 / GG.measureText(ZG).width)));
            XG(ZG, 512, NG - (bG > 0 ? 15 : 0), wG, oG, 960, "center"), bG > 0 && XG(`Tied with ${UG.format(bG)} other${1===bG?"":"s"}`, 512, NG + 24, 24, EG, 960, "center")
          }
          if (null === KG) return;
          const OG = tG + kG * TG / 2;
          if (FG) XG(`You're in the top ${wG.l}!`, 512, OG, 40, oG, 960, "center");
          else if (0 === IG.length) XG("You're not on this board yet", 512, OG, 34, EG, 960, "center");
          else
            for (const [wG, SG] of IG.entries()) DG(SG, PG[wG], tG + (wG + .5) * TG, wG % 2 === 0)
        }(GG, VG, pG, yG.layoutHeight)
    }

    function dG(GG, bG) {
      return Array.isArray(GG) ? GG.slice(0, bG).filter((GG => GG && Number.isFinite(GG.rank) && Number.isFinite(GG.value))) : []
    }

    function JG(GG, bG) {
      const ZG = [];
      let wG = !1;
      return GG.forEach(((SG, LG) => {
        if (null !== bG && SG.value === bG.value) return void ZG.push(bG.rank);
        const yG = LG > 0 && SG.value === GG[LG - 1].value;
        yG || (wG = 0 === LG && 1 !== SG.rank), ZG.push(yG && !wG ? ZG[LG - 1] : SG.rank)
      })), ZG
    }
  },
  39262: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => SG,
      c: () => LG
    });
    const wG = 32;

    function SG(GG) {
      return Array.from(GG).length
    }

    function LG(GG) {
      const bG = [""];
      let ZG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        SG = "";
      const LG = () => {
        bG.push(""), ZG = 0, SG = ""
      };
      for (const yG of GG.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(yG)) LG();
        else if (/^\s+$/.test(yG)) SG += yG;
      else if (yG.length > 0) {
        const GG = Array.from(yG);
        ZG > 0 && ZG + SG.length + GG.length > wG && LG(), bG[bG.length - 1] += SG, ZG += SG.length, SG = "";
        for (const SG of GG) ZG >= wG && LG(), bG[bG.length - 1] += SG, ZG++
      }
      return bG[bG.length - 1] += SG, bG
    }
  },
  51399: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      WasmPreviewHost: () => mb,
      pageBuiltInAnimationPack: () => fG,
      pagePreviews: () => yb,
      previewModule: () => OG
    });
    var wG = ZG(2872),
      SG = ZG(612);
    const LG = "[bloxd-wasm-client]";

    function yG(GG) {
      const bG = {
        wasm: "unknown",
        client: String(SG.e)
      };
      try {
        var ZG;
        bG.wasm = null !== (ZG = null === GG || void 0 === GG ? void 0 : GG.hp()) && void 0 !== ZG ? ZG : bG.wasm
      } catch {}
      return bG
    }
    async function kG(GG) {
      if (GG.length < 2 || 31 !== GG[0] || 139 !== GG[1]) return GG;
      if ("undefined" === typeof DecompressionStream) {
        const {
          ungzip: bG
        } = await Promise.resolve().then((() => ZG(2815)));
        return bG(GG)
      }
      const bG = new Blob([GG]).stream().pipeThrough(new DecompressionStream("gzip"));
      return new Uint8Array(await new Response(bG).arrayBuffer())
    }

    function UG(GG, bG, wG, SG) {
      Promise.resolve().then((() => ZG(41122))).then((ZG => {
        let {
          reportDataLoadFailure: LG
        } = ZG;
        LG(GG, bG, wG, SG)
      }), (bG => {
        console.warn(`${LG} ${GG} didn't load, and the report couldn't be sent`, wG.error, bG)
      }))
    }
    const YG = [3e4, 12e4, 3e5];
    class VG {
      constructor(GG) {
        this.deps = GG, this.loading = null, this.reported = !1, this.retries = 0, this.resolveSet = () => {}, this.set = new Promise((GG => {
          this.resolveSet = GG
        }))
      }
      provide(GG) {
        return this.loading ??= this.load(GG), this.loading
      }
      whenSet() {
        return this.set
      }
      async load(GG) {
        const bG = yG(GG),
          ZG = await async function(GG, bG) {
            let ZG;
            try {
              ZG = await GG()
            } catch (wG) {
              return {
                stage: "fetch",
                error: wG
              }
            }
            try {
              return bG(ZG) ? null : {
                stage: "decode",
                error: null
              }
            } catch (wG) {
              return {
                stage: "decode",
                error: wG
              }
            }
          }((() => this.deps.fetch()), (bG => {
            const ZG = GG.cLG(bG);
            return ZG && this.resolveSet(bG), ZG
          }));
        if (null !== ZG) {
          if ("fetch" === ZG.stage) {
            this.loading = null;
            const bG = YG[this.retries++];
            void 0 !== bG && this.deps.later((() => {
              this.provide(GG)
            }), bG)
          }
          this.reported || (this.reported = !0, this.deps.onFailed(ZG, bG))
        }
      }
    }
    let pG = null;

    function fG() {
      return pG ??= new VG({
        fetch: async () => kG(await (0, wG.K)(QG(), {
          priority: "low"
        })),
        onFailed: (GG, bG) => {
          UG("builtInAnimations", QG(), GG, bG)
        },
        later: (GG, bG) => {
          setTimeout(GG, bG)
        }
      }), pG
    }

    function QG() {
      return ZG(51407)
    }
    var KG = ZG(2868),
      hG = ZG(1163),
      dG = ZG(326),
      JG = ZG(318),
      rG = ZG(631),
      zG = ZG(4810),
      EG = ZG(41100),
      oG = ZG(41115),
      XG = ZG(41333),
      uG = (ZG(41150), ZG(41170)),
      iG = ZG(41175),
      CG = ZG(41182),
      WG = ZG(41112),
      mG = ZG(41352),
      IG = ZG(41359),
      FG = ZG(41092),
      vG = ZG(41374),
      aG = ZG(41226),
      cG = ZG(41214),
      lG = ZG(41271),
      jG = ZG(41340),
      PG = ZG(43031),
      MG = ZG(36606),
      AG = ZG(3711);
    const sG = "[bloxd-previews]",
      qG = 4e5,
      nG = 0,
      gG = 1,
      eG = 2,
      RG = 1,
      TG = 2,
      HG = 3,
      tG = 0,
      DG = 1,
      NG = 2;

    function OG(GG) {
      const bG = GG,
        ZG = (0, EG.P)(GG),
        wG = (0, EG.m)(GG);
      return null !== ZG && null !== wG && "function" === typeof bG.FLG && "function" === typeof bG.vLG && "function" === typeof bG.aLG ? bG : null
    }

    function xG(GG, bG, ZG) {
      let [wG, SG] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [GG, bG], LG = Math.min(Number.isFinite(ZG) && ZG > 0 ? ZG : 1, 2);
      const yG = Math.max(0, wG, GG) * Math.max(0, SG, bG) * LG * LG;
      return yG > qG && (LG *= Math.sqrt(qG / yG)), [Math.max(1, Math.floor(Math.max(0, GG) * LG)), Math.max(1, Math.floor(Math.max(0, bG) * LG))]
    }

    function BG() {
      return ZG(51413)
    }
    async function Gb(GG, bG, wG) {
      var SG;
      let LG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      "lost" === GG && (0, FG.u)();
      const kG = await (0, FG.N)();
      if (null === kG || (0, EG.q)(kG) || (0, FG.c)()) return;
      const UG = "webgpu" === kG.backend;
      if (!UG && "lost" !== GG) return;
      const YG = UG && (0, JG.r)(kG.adapter, null !== wG && void 0 !== wG ? wG : null, "lost" === GG, LG),
        VG = null !== (SG = "lost" === GG ? (0, oG.j)((0, KG.S)() ? (0, EG.P)((0, KG.G)()) : null) : void 0) && void 0 !== SG ? SG : bG,
        pG = UG ? (0, EG._)(GG, void 0, (0, oG.e)(VG)) : null;
      if (null === pG) {
        UG || (0, rG.u)(), (0, FG.m)();
        try {
          await async function(GG, bG, wG, SG, LG) {
            let {
              restoreLost: kG,
              adapterRemembered: UG
            } = LG;
            const YG = (0, KG.S)(),
              {
                flushCrashReports: VG,
                reportRenderReload: pG
              } = await Promise.resolve().then((() => ZG(41122)));
            pG(GG.backend, SG, yG(YG ? (0, KG.G)() : null), {
              from: "home",
              cause: bG,
              restoreLost: kG,
              adapterRemembered: UG,
              ...bb(GG, bG, wG)
            }), await VG(aG.e)
          }(kG, GG, VG, null !== wG && void 0 !== wG ? wG : "start_failed" === GG ? 0 : 1, {
            restoreLost: LG,
            adapterRemembered: YG
          })
        } catch (QG) {
          console.warn(`${sG} ${kG.backend} failed at home (${GG}), and its report couldn't be sent`, QG)
        }(0, aG.i)()
      } else {
        var fG;
        const bG = bb(kG, GG, VG),
          wG = `WebGPU failed at home (${GG}${void 0===bG.error?"":`: ${bG.error instanceof Error?bG.error.message:(0,MG.h)(bG.error)}`}) and ${pG}`;
        console.warn(`${sG} ${wG}: the previews stop`, null !== (fG = bG.error) && void 0 !== fG ? fG : ""), (0, FG.n)(wG);
        try {
          const {
            countRenderLost: wG
          } = await Promise.resolve().then((() => ZG(41122)));
          wG(GG, bG.error, bG.context)
        } catch (hG) {
          console.warn(`${sG} WebGPU failed at home (${GG}), and its count couldn't be sent`, hG)
        }
      }
    }

    function bb(GG, bG, ZG) {
      let {
        adapter: wG
      } = GG;
      return {
        error: ZG,
        context: {
          adapter: wG,
          boundAtMs: "start_failed" === bG ? null : (0, FG.K)(),
          indirectHangs: (0, FG.y)(),
          restoresSkipped: (0, FG.L)()
        }
      }
    }
    async function Zb() {
      if (!(0, KG.S)()) {
        const GG = await (0, FG.N)();
        if (null === GG || (0, EG.q)(GG)) return null;
        if (await (0, vG.d)(await GG.load()), !(0, KG.S)()) return null
      }
      return OG((0, KG.G)())
    }
    class wb {
      constructor(GG, bG, ZG, wG, SG, LG) {
        this.page = GG, this.host = bG, this.id = ZG, this.canvas = wG, this.size = SG, this.models = void 0, this.images = void 0, this.write = void 0, this.outcomes = [], this.closed = !1, this.quiet = 0, this.settled = [];
        const yG = {
            ...LG.images,
            glbUrl: GG => {
              var bG;
              return null !== (bG = this.models.drawnUrl(GG)) && void 0 !== bG ? bG : LG.images.glbUrl(GG)
            }
          },
          kG = bG => GG.modelFile(bG);
        this.images = new XG.e(yG, (GG => {
          console.warn(`${sG} image ${GG.key.kind}:${GG.key.index}:${GG.key.word} failed`, GG.error)
        }), {
          fetchFile: kG,
          fetchImage: bG => GG.imageFile(bG)
        }), GG.startModels(), this.models = new uG.g(LG.files, ((bG, ZG) => GG.buildModel(bG, ZG)), (GG => {
          console.warn(`${sG} model file ${GG.file} (${GG.url}) failed`, GG.error)
        }), {
          fetchFile: kG,
          onWritten: (GG, bG) => {
            this.images.glbWritten(GG, bG)
          },
          onTaken: (GG, bG) => {
            this.images.glbTaken(GG, bG)
          }
        }), this.write = (GG, bG, ZG) => {
          if (this.closed) return !0;
          if (GG === uG.b) {
            const GG = new DataView(ZG.buffer, ZG.byteOffset, CG.b),
              wG = GG.getUint32(0, !0),
              SG = GG.getUint32(CG.f, !0),
              LG = this.page.hostCall(NG, (() => this.host.MyG(this.id, wG, bG, ZG.subarray(CG.b))));
            return this.outcomes.push([SG, LG]), !0
          }
          return GG === XG.d && (this.page.hostCall(void 0, (() => {
            this.host.syG(this.id, ZG)
          })), !0)
        }
      }
      get isClosed() {
        return this.closed
      }
      get isStopped() {
        return this.page.isStopped
      }
      resize(GG, bG, ZG) {
        if (this.closed) return;
        const [wG, SG] = xG(GG, bG, this.page.dpr(), ZG);
        wG === this.size[0] && SG === this.size[1] || (this.size = [wG, SG], this.page.hostCall(void 0, (() => {
          this.host.resize(this.id, wG, SG)
        })))
      }
      setMob(GG, bG, ZG, wG) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.RyG(this.id, GG, bG, ZG, wG))))
      }
      setPet(GG, bG, ZG, wG) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.tyG(this.id, GG, bG, ZG, wG))))
      }
      setPlayer(GG, bG, ZG) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.nyG(this.id, GG, bG, ZG))))
      }
      setFigure(GG, bG, ZG, wG) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.gyG(this.id, GG, bG, ZG, wG))))
      }
      replay() {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.replay(this.id))))
      }
      get orbit() {
        if (this.closed) return null;
        const GG = this.page.hostCall(null, (() => this.host.orbit(this.id)));
        return null === GG || GG.length < 3 ? null : {
          alpha: GG[0],
          beta: GG[1],
          radius: GG[2]
        }
      }
      setOrbit(GG) {
        let {
          alpha: bG,
          beta: ZG,
          radius: wG
        } = GG;
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.TyG(this.id, bG, ZG, wG)
        }))
      }
      untilSettled() {
        return this.closed || this.page.isStopped ? Promise.resolve() : (this.quiet = 0, new Promise((GG => {
          this.settled.push(GG)
        })))
      }
      packChanged() {
        this.quiet = 0, this.models.refresh(), (0, mG.i)(this.images)
      }
      feed() {
        this.models.drain(this.write);
        for (const [GG, bG] of this.outcomes) {
          const ZG = bG === tG ? [] : [bG === DG ? GG : (GG | uG.f) >>> 0];
          this.models.taken(GG, ZG)
        }
        this.outcomes.length = 0, this.images.drain(this.write)
      }
      collect(GG) {
        let bG = !1;
        if (GG) {
          const GG = this.host.OyG(this.id);
          for (const bG of GG) this.models.request(bG);
          const ZG = this.host.NyG(this.id);
          ZG.length > 0 && this.images.onEvent(ZG), bG = GG.length > 0 || ZG.length > 0
        }
        const ZG = this.page.modelsUnavailable ? 0 : this.models.asking + this.models.unanswered,
          wG = bG || ZG > 0 || this.images.waiting > 0 || this.images.inFlight > 0;
        this.quiet = wG ? 0 : this.quiet + 1, this.quiet >= 3 && this.resolveSettled()
      }
      close() {
        this.closed || (this.closed = !0, this.page.closePreview(this), this.resolveSettled())
      }
      abandon() {
        this.resolveSettled()
      }
      dispose(GG) {
        this.page.hostCall(void 0, (() => {
          const bG = this.host.close(this.id);
          bG.length > 0 && this.images.onEvent(bG), this.page.isTrapped || GG.aLG(this.id)
        })), this.images.dispose(), this.canvas.remove()
      }
      resolveSettled() {
        const GG = this.settled;
        this.settled = [];
        for (const bG of GG) bG()
      }
    }
    class Sb {
      constructor(GG) {
        this.deps = GG, this.module = null, this.host = null, this.opening = null, this.pageCanvas = null, this.samples = 1, this.binding = null, this.sessionEnds = 0, this.lastEndReturned = !0, this.previews = new Map, this.nextId = 1, this.frameId = null, this.stopped = !1, this.loggedErrors = new Set, this.modelsListener = {
          onUnavailable: GG => {
            this.modelsFailed(GG)
          },
          onDecoderFailed: GG => {
            this.loggedErrors.has("modelDecoder") || (this.loggedErrors.add("modelDecoder"), console.warn(`${sG} the Draco decoder didn't load: models waiting on it won't draw`, GG))
          },
          onWorkerLost: GG => {
            this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${sG} a model worker was lost: ${GG}`))
          },
          onModuleRetry: () => {}
        }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.OQ = {
          setShaderPack: (GG, bG, ZG, wG, SG) => (this.shaderPackArgs = [GG, bG, ZG, wG, SG], this.handOverShaderPack(), !0)
        }, this.frame = GG => {
          this.frameId = null;
          const bG = this.host;
          if (null !== bG && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped) try {
            this.drawFrame(bG, GG)
          } catch (ZG) {
            if (!this.stopIfTrapped(ZG) && (this.stop(), (0, EG.r)(ZG))) return void this.deps.onRenderFailed("frames_refused", ZG);
            console.warn(`${sG} the previews stopped: their frame threw`, ZG)
          }
        }, GG.pack.onChange((() => {
          this.packChanged()
        })), GG.game.onGameChange((() => {
          this.tellInGame()
        }))
      }
      packChanged() {
        if (!this.stopped)
          for (const GG of this.previews.values()) GG.packChanged()
      }
      dpr() {
        return this.deps.dpr()
      }
      get sessionBound() {
        var GG, bG;
        return null !== (GG = null === (bG = this.host) || void 0 === bG ? void 0 : bG.attached()) && void 0 !== GG && GG
      }
      get open() {
        return this.previews.size
      }
      get frameCostMs() {
        return 0 === this.costs.length ? 0 : this.costs.reduce(((GG, bG) => GG + bG), 0) / this.costs.length
      }
      async bindSession(GG, bG, ZG) {
        const wG = this.binding,
          SG = this.sessionEnds;
        try {
          const LG = this.hostOf(GG);
          if (!LG.AyG()) {
            const bG = (0, lG.d)().sampleCount,
              yG = await ZG(bG);
            if (this.sessionEnds !== SG) return this.keepRendererOfEndedSession(GG, LG, yG, bG, wG), bG;
            if (!LG.oyG(yG)) throw new Error("the page has a renderer already");
            (0, FG.q)(performance.now()), this.samples = bG, (0, jG.f)((0, EG.m)(GG))
          }
          if (!LG.attach(bG)) throw new Error("the page's renderer is lent to another session");
          return this.samples
        } finally {
          this.binding === wG && this.endBinding()
        }
      }
      keepRendererOfEndedSession(GG, bG, ZG, wG, SG) {
        if (!this.lastEndReturned || null !== this.binding && this.binding !== SG) try {
          ZG.free()
        } catch (LG) {
          console.warn(`${sG} an ended session's renderer didn't free`, LG)
        } else bG.oyG(ZG) && ((0, FG.q)(performance.now()), this.samples = wG, (0, jG.f)(this.registryOf(GG)))
      }
      async beginSession() {
        var GG;
        let bG = () => {};
        const ZG = new Promise((GG => {
          bG = GG
        }));
        this.binding = {
          done: ZG,
          release: bG
        }, await (null === (GG = this.opening) || void 0 === GG ? void 0 : GG.catch((() => null)));
        const wG = this.pageCanvas;
        return this.pageCanvas = null, wG
      }
      endSession(GG) {
        var bG, ZG;
        if (this.sessionEnds++, this.lastEndReturned = GG, this.endBinding(), GG) {
          try {
            var wG;
            null === (wG = this.host) || void 0 === wG || wG.detach()
          } catch (SG) {
            return void console.warn(`${sG} the session's core kept the page's renderer`, SG)
          }!0 === (null === (bG = this.host) || void 0 === bG ? void 0 : bG.attached()) && console.warn(`${sG} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (ZG = this.host) || void 0 === ZG ? void 0 : ZG.AyG()) && (0, jG.f)(this.registryOf(this.module))
        }
      }
      endBinding() {
        var GG;
        null === (GG = this.binding) || void 0 === GG || GG.release(), this.binding = null
      }
      async openPreview(GG, bG, ZG, wG) {
        const SG = await this.renderingHost(),
          LG = this.module;
        if (null === SG || null === LG) throw new Error("this page can't draw previews: it has no renderer build");
        if (this.animations ??= this.loadAnimations(SG), this.deps.pack.wanted(), this.isStopped) throw new Error("the previews stopped");
        this.guarded((() => {
          this.deps.provideBuiltInAnimationPack(LG)
        }));
        const yG = this.nextId++,
          kG = this.deps.createCanvas(),
          [UG, YG] = xG(bG, ZG, this.deps.dpr(), wG);
        kG.width = UG, kG.height = YG;
        if (!this.guarded((() => (LG.vLG(yG, kG), SG.open(yG, UG, YG, GG))))) throw this.hostCall(void 0, (() => {
          LG.aLG(yG)
        })), new Error("the page's renderer is lent to a session that is running");
        this.restartModelsIfFailed();
        const VG = new wb(this, SG, yG, kG, [UG, YG], this.deps);
        return this.previews.set(yG, VG), this.startFrames(), VG
      }
      prefetch() {
        if (this.prefetched || this.isStopped || (0, FG.c)() || null !== (0, FG.I)()) return;
        this.prefetched = !0;
        (null === this.module ? this.loadModule() : Promise.resolve(this.module)).then((GG => {
          null === GG || this.isStopped || (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles())
        }), (() => {}))
      }
      modelFile(GG) {
        return this.prefetchedOr(GG, this.deps.fetchModel)
      }
      imageFile(GG) {
        return this.prefetchedOr(GG, wG.K)
      }
      prefetchedOr(GG, bG) {
        const ZG = this.prefetchedFiles.get(GG);
        return void 0 === ZG ? bG(GG) : ZG.catch((() => bG(GG)))
      }
      async prefetchPlayerFiles() {
        const GG = this.deps.playerFile().then((GG => this.deps.files.url(GG))),
          bG = await Promise.all([GG, this.deps.images.lifeformAtlasUrl(mG.b)]).catch((() => null));
        if (null === bG) return;
        const [ZG, wG] = bG, SG = (GG, bG) => {
          if (null === GG) return;
          const ZG = bG(GG);
          this.prefetchedFiles.set(GG, ZG), ZG.catch((() => {
            this.prefetchedFiles.delete(GG)
          }))
        };
        SG(ZG, (GG => this.modelFile(GG))), SG(wG, (GG => this.imageFile(GG)))
      }
      loadModule() {
        return this.moduleLoad ??= this.deps.loadModule().then((GG => (null === GG && (this.moduleLoad = null), GG)), (GG => {
          throw this.moduleLoad = null, GG
        })), this.moduleLoad
      }
      fetchAnimationTable() {
        return this.animationTable ??= this.deps.fetchAnimations().catch((GG => {
          throw this.animationTable = null, GG
        })), this.animationTable
      }
      get modelsUnavailable() {
        return this.unavailable
      }
      startModels() {
        this.models ??= this.deps.startModels(this.modelsListener).catch((GG => (this.modelsFailed(GG), () => new Promise((() => {})))))
      }
      buildModel(GG, bG) {
        return this.startModels(), this.models.then((ZG => ZG(GG, bG))).then((GG => this.unavailable ? new Promise((() => {})) : GG))
      }
      restartModelsIfFailed() {
        this.unavailable && !this.modelsRestarted && 0 === this.previews.size && (this.modelsRestarted = !0, this.models = null, this.unavailable = !1, this.startModels())
      }
      modelsFailed(GG) {
        this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${sG} the model workers didn't start: models won't draw in the previews`, GG))
      }
      called(GG) {
        return 0 !== GG && this.logError(GG, 0), GG
      }
      closePreview(GG) {
        this.previews.delete(GG.id), null !== this.module && GG.dispose(this.module), 0 === this.previews.size && null !== this.frameId && (this.deps.cancelFrame(this.frameId), this.frameId = null)
      }
      hostOf(GG) {
        if (null !== this.module && this.module !== GG) throw new Error("a second renderer module on one page");
        return this.module = GG, null === this.host && (this.host = this.guarded((() => new GG.FLG)), this.tellInGame(), this.handOverShaderPack()), this.host
      }
      tellInGame() {
        const {
          host: GG
        } = this;
        null !== GG && this.outsideCall("the game's start or end", (() => {
          GG.eyG(this.deps.game.inGame())
        }))
      }
      handOverShaderPack() {
        const {
          host: GG,
          shaderPackArgs: bG
        } = this;
        null !== GG && null !== bG && this.outsideCall("the shader pack's hand-over", (() => {
          GG.vwG(...bG) || console.warn(`${sG} the host refused the shader pack: previews draw without it at home`)
        }))
      }
      outsideCall(GG, bG) {
        try {
          this.hostCall(void 0, bG)
        } catch (ZG) {
          this.stop(), console.warn(`${sG} the previews stopped: ${GG} threw`, ZG)
        }
      }
      async loadAnimations(GG) {
        const bG = yG(null),
          ZG = this.module;
        try {
          bG.wasm = null === ZG ? bG.wasm : this.hostCall(bG.wasm, (() => ZG.hp()))
        } catch {}
        let wG, SG;
        try {
          wG = await this.fetchAnimationTable()
        } catch (LG) {
          return void this.deps.onAnimationsFailed({
            stage: "fetch",
            error: LG
          }, bG)
        }
        if (!this.settleIfTrapped()) {
          try {
            SG = GG.qyG(wG)
          } catch (LG) {
            if (this.stopIfTrapped(LG)) return;
            return void this.deps.onAnimationsFailed({
              stage: "decode",
              error: LG
            }, bG)
          }
          SG || this.deps.onAnimationsFailed({
            stage: "decode",
            error: null
          }, bG)
        }
      }
      async renderingHost() {
        if (null !== this.binding && await this.binding.done, this.settleIfTrapped()) return null;
        const GG = this.host;
        return null !== GG && this.guarded((() => GG.AyG())) ? GG : (this.opening ??= this.openAtHome().finally((() => {
          this.opening = null
        })), this.opening)
      }
      async openAtHome() {
        var GG;
        const bG = null !== (GG = this.module) && void 0 !== GG ? GG : await this.loadModule();
        if (null === bG) return null;
        const ZG = this.hostOf(bG),
          wG = () => this.guarded((() => ZG.AyG()));
        if (wG()) return ZG;
        if (null !== (0, FG.I)() || (0, FG.c)()) return null;
        const SG = this.deps.createCanvas();
        SG.width = 1, SG.height = 1;
        const LG = await this.deps.openExtras();
        if (this.settleIfTrapped()) return null;
        const yG = (0, lG.d)().sampleCount;
        let kG;
        try {
          kG = await (0, EG.w)(bG, "previewRenderer", SG, yG, PG.b, LG)
        } catch (UG) {
          throw UG instanceof WG.e ? this.stopForTrap(UG) : (0, EG.v)(UG) && await this.deps.onRenderFailed("start_failed", UG), UG
        }
        return this.guarded((() => ZG.oyG(kG))) ? ((0, FG.q)(performance.now()), this.samples = yG, this.pageCanvas = SG, (0, jG.f)(this.registryOf(bG)), ZG) : wG() ? ZG : null
      }
      startFrames() {
        null !== this.frameId || this.isStopped || (this.frameId = this.deps.requestFrame(this.frame))
      }
      drawFrame(GG, bG) {
        for (const yG of this.previews.values()) yG.feed();
        if (this.stopped) return;
        const ZG = this.deps.now(),
          wG = GG.frame(bG);
        this.costs.push(this.deps.now() - ZG), this.costs.length > 120 && this.costs.shift();
        const SG = 0 !== (256 & wG),
          LG = 255 & wG;
        for (const yG of this.previews.values()) {
          if (this.stopped) return;
          yG.collect(SG)
        }
        if (!this.stopped) {
          if (0 !== (512 & wG) && this.deps.onDrew(), SG) {
            const bG = GG.DyG();
            for (let GG = 0; GG + 1 < bG.length; GG += 2) bG[GG] === zG.R.RenderDeviceLost && this.deps.onDeviceLost(), this.logError(bG[GG], bG[GG + 1])
          }
          if (LG !== RG) {
            if (LG === TG) return this.stop(), void this.deps.onFatal(GG.lyG(), GG.jyG());
            if (LG === HG) return this.stop(), void console.warn(`${sG} the previews stopped: the page's renderer went with its session`);
            (0, dG.c)(bG), this.startFrames()
          } else {
            const bG = GG.PyG();
            this.stop();
            const ZG = bG[2] === zG.ed.PIPELINE_FAILED ? "pipeline_failed" : "lost";
            this.deps.onRenderFailed(ZG, void 0, bG[1], bG[2] === zG.ed.RESTORE_LOST)
          }
        }
      }
      get isStopped() {
        return this.stopped || this.isTrapped
      }
      get isTrapped() {
        return null !== this.module && ((0, WG.k)(this.module) || "failed" === (0, KG.C)())
      }
      hostCall(GG, bG) {
        if (this.settleIfTrapped()) return GG;
        try {
          return bG()
        } catch (ZG) {
          if (this.stopIfTrapped(ZG)) return GG;
          throw ZG
        }
      }
      guarded(GG) {
        if (this.settleIfTrapped()) throw new Error("the previews stopped: their module trapped");
        try {
          return GG()
        } catch (bG) {
          throw this.stopIfTrapped(bG), bG
        }
      }
      registryOf(GG) {
        return {
          dwG: (bG, ZG) => {
            this.hostCall(void 0, (() => {
              GG.dwG(bG, ZG)
            }))
          },
          JwG: bG => {
            this.hostCall(void 0, (() => {
              GG.JwG(bG)
            }))
          }
        }
      }
      settleIfTrapped() {
        return !!this.isTrapped && (this.stopped || (this.stop(), (0, jG.f)(null)), !0)
      }
      stopIfTrapped(GG) {
        return !(null === this.module || !(0, WG.m)(this.module, GG)) && (this.stopForTrap(GG), !0)
      }
      stopForTrap(GG) {
        this.stop(), (0, jG.f)(null), (0, AG.g)("previews", GG)
      }
      stop() {
        this.stopped = !0;
        for (const GG of this.previews.values()) GG.abandon()
      }
      logError(GG, bG) {
        const ZG = `${GG}:${bG}`;
        this.loggedErrors.has(ZG) || (this.loggedErrors.add(ZG), console.warn(`${sG} error ${GG} (detail ${bG})`))
      }
    }
    let Lb = null;

    function yb() {
      return Lb ??= new Sb(function() {
        const GG = (0, iG.r)(hG.clientSideServerUrls.staticUrl, {
          packUrl: GG => {
            var bG, ZG;
            return null !== (bG = null === (ZG = mG.e.current) || void 0 === ZG ? void 0 : ZG.modelUrl(GG)) && void 0 !== bG ? bG : null
          }
        });
        return {
          loadModule: Zb,
          startModels: async GG => {
            const {
              pageModelPool: bG
            } = await ZG.e(43).then((() => ZG(51469))), {
              pool: wG
            } = bG(GG);
            return (GG, bG) => wG.build(GG, bG)
          },
          fetchAnimations: async () => kG(await (0, wG.K)(BG())),
          playerFile: async () => (await (0, iG.o)()).PLAYER_FILE,
          onAnimationsFailed: (GG, bG) => {
            UG("previewAnimations", BG(), GG, bG)
          },
          provideBuiltInAnimationPack: GG => {
            fG().provide(GG)
          },
          openExtras: FG.C,
          files: GG,
          images: (0, mG.l)((0, XG.k)(GG.url), (() => mG.e.current)),
          pack: mG.e,
          game: IG.e,
          fetchModel: GG => (0, iG.g)(GG),
          createCanvas: () => document.createElement("canvas"),
          dpr: () => window.devicePixelRatio,
          now: () => performance.now(),
          requestFrame: GG => requestAnimationFrame(GG),
          cancelFrame: GG => {
            cancelAnimationFrame(GG)
          },
          onRenderFailed: Gb,
          onFatal: (GG, bG) => {
            console.error(`${sG} the previews stopped: renderer error ${GG} (detail ${bG})`)
          },
          onDeviceLost: () => {
            (0, FG.E)() === cG.c.webgpu && ((0, oG.f)((0, KG.S)() ? (0, EG.P)((0, KG.G)()) : null), JG.P.lost())
          },
          onDrew: () => {
            JG.P.drew()
          }
        }
      }()), Lb
    }
    var kb = ZG(589),
      Ub = ZG(39061),
      Yb = ZG(3267);
    const Vb = {
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
    const pb = "[bloxd-previews]",
      fb = new Uint32Array(5);

    function Qb(GG) {
      return kb.m.indexOf(GG)
    }
    const Kb = new WeakSet;

    function hb(GG) {
      const bG = (0, Ub.d)(GG),
        ZG = null === bG ? -1 : db(bG);
      return -1 !== ZG ? ZG : (Kb.has(GG) || (Kb.add(GG), console.warn(`${pb} an animation the previews' table lacks: the mob idles instead`)), -1)
    }

    function db(GG) {
      var bG;
      return null !== (bG = Vb[GG]) && void 0 !== bG ? bG : -1
    }

    function Jb(GG, bG) {
      const {
        canvas: ZG
      } = bG;
      ZG.style.width = "100%", ZG.style.height = "100%", ZG.style.display = "block", GG.appendChild(ZG)
    }

    function rb(GG) {
      const bG = GG.getBoundingClientRect();
      return [bG.width, bG.height]
    }
    class zb {
      constructor(GG, bG) {
        this.preview = GG, this.showView = bG
      }
      show(GG) {
        this.showView(this.preview, GG)
      }
      resize(GG, bG) {
        this.preview.resize(GG, bG)
      }
      close() {
        this.preview.close()
      }
    }
    class Eb {
      constructor(GG) {
        this.preview = GG, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.detachControls = void 0, this.detachControls = function(GG) {
          const {
            canvas: bG
          } = GG;
          let ZG = null;
          const wG = GG => {
              var wG;
              ZG = {
                pointer: GG.pointerId,
                x: GG.clientX,
                y: GG.clientY
              }, null === (wG = bG.setPointerCapture) || void 0 === wG || wG.call(bG, GG.pointerId)
            },
            SG = bG => {
              var wG;
              const SG = GG.orbit;
              if ((null === (wG = ZG) || void 0 === wG ? void 0 : wG.pointer) !== bG.pointerId || null === SG) return;
              const LG = bG.clientX - ZG.x,
                yG = bG.clientY - ZG.y;
              ZG = {
                ...ZG,
                x: bG.clientX,
                y: bG.clientY
              }, GG.setOrbit({
                alpha: SG.alpha - .01 * LG,
                beta: Math.min(Math.PI - .01, Math.max(.01, SG.beta - .01 * yG)),
                radius: SG.radius
              })
            },
            LG = GG => {
              var bG;
              (null === (bG = ZG) || void 0 === bG ? void 0 : bG.pointer) === GG.pointerId && (ZG = null)
            },
            yG = bG => {
              const ZG = GG.orbit;
              if (null === ZG) return;
              bG.preventDefault();
              const wG = bG.deltaY * (bG.deltaMode === WheelEvent.DOM_DELTA_LINE ? 40 : bG.deltaMode === WheelEvent.DOM_DELTA_PAGE ? 800 : 1),
                SG = Math.min(100, Math.max(5, ZG.radius + .08 * wG));
              GG.setOrbit({
                ...ZG,
                radius: SG
              })
            };
          return bG.style.touchAction = "none", bG.addEventListener("pointerdown", wG), bG.addEventListener("pointermove", SG), bG.addEventListener("pointerup", LG), bG.addEventListener("pointercancel", LG), bG.addEventListener("wheel", yG, {
            passive: !1
          }), () => {
            bG.removeEventListener("pointerdown", wG), bG.removeEventListener("pointermove", SG), bG.removeEventListener("pointerup", LG), bG.removeEventListener("pointercancel", LG), bG.removeEventListener("wheel", yG)
          }
        }(GG), this.dev = {
          canvas: () => GG.canvas,
          isolateHead: () => {
            console.warn(`${pb} isolateHead: noa's character preview only`)
          }
        }, this.apply(), this.ready = GG.untilSettled().then((() => {
          if (GG.isStopped) throw new Error(`${pb} the previews stopped before the character drew`);
          this.built = !0
        }))
      }
      isReady() {
        return this.built && !this.preview.isClosed
      }
      setCosmetic(GG, bG) {
        this.cosmetics[GG] = bG, this.apply()
      }
      playEmote(GG) {
        null === GG || GG !== this.emote ? (this.emote = GG, this.apply()) : this.preview.replay()
      }
      untilDrawn(GG) {
        return this.preview.untilSettled()
      }
      setOrbit(GG) {
        let {
          yaw: bG,
          pitch: ZG,
          radius: wG
        } = GG;
        const SG = this.preview.orbit;
        null !== SG && this.preview.setOrbit({
          alpha: bG,
          beta: ZG,
          radius: null !== wG && void 0 !== wG ? wG : SG.radius
        })
      }
      resetCamera() {}
      resize(GG, bG) {
        this.preview.resize(GG, bG)
      }
      close() {
        this.detachControls(), this.preview.close()
      }
      apply() {
        var GG;
        this.preview.setPlayer(JSON.stringify(this.cosmetics), fb, null === (GG = this.emote) ? -1 : db(GG))
      }
    }

    function ob(GG, bG) {
      let {
        mobType: ZG,
        variation: wG,
        animation: SG
      } = bG;
      GG.setMob(Qb(ZG), null !== wG && void 0 !== wG ? wG : "", 1, hb(SG))
    }

    function Xb(GG, bG) {
      let {
        mobType: ZG,
        variation: wG,
        metaInfo: SG,
        tamed: LG
      } = bG;
      GG.setPet(Qb(ZG), wG, SG, LG)
    }
    const ub = {
      aimed: .533 / 1.15 * 1.1,
      ready: .16 / .85 * 1.1
    };
    class ib {
      constructor(GG, bG, ZG, wG) {
        this.preview = null, this.closed = !1, this.figure = null, this.shown = !1, this.order = "", this.span = {
          left: 0,
          width: 0
        }, this.lineup = [0, 0], this.given = null, this.loaded = !1, GG(ZG.width, wG[1], wG).then((GG => {
          if (this.closed) return void GG.close();
          const {
            style: ZG
          } = GG.canvas;
          ZG.position = "absolute", ZG.top = "0", ZG.visibility = "hidden", Jb(bG, GG), this.preview = GG, this.apply()
        })).catch((GG => {
          console.error(`${pb} couldn't open a lineup figure`, GG)
        }))
      }
      update(GG, bG, ZG, wG, SG) {
        this.figure = GG, this.shown = bG, this.order = ZG, this.span = wG, this.lineup = SG, this.apply()
      }
      close() {
        var GG;
        this.closed = !0, null === (GG = this.preview) || void 0 === GG || GG.close(), this.preview = null
      }
      apply() {
        const {
          preview: GG,
          figure: bG,
          lineup: ZG
        } = this;
        if (null === GG || null === bG) return;
        if (this.given !== bG) {
          var wG;
          this.given = bG, this.loaded = !1;
          const ZG = null === bG.qE ? 0 : null !== (wG = (0, Yb.c)(bG.qE)) && void 0 !== wG ? wG : 0;
          GG.setFigure(function(GG) {
            return JSON.stringify(Object.fromEntries(GG.cosmetics))
          }(bG), ZG, hb(bG.animation), bG.size), GG.untilSettled().then((() => {
            this.given === bG && (this.loaded = !0, this.apply())
          }))
        }
        const {
          left: SG,
          width: LG
        } = this.span;
        GG.resize(LG, ZG[1], ZG);
        const {
          style: yG
        } = GG.canvas;
        yG.left = `${SG}px`, yG.width = `${LG}px`, yG.zIndex = this.order, yG.visibility = this.shown && this.loaded ? "visible" : "hidden"
      }
    }
    class Cb {
      constructor(GG, bG) {
        this.open = bG, this.layer = void 0, this.figures = [], this.view = {
          figures: [],
          shown: []
        }, this.size = void 0, this.size = rb(GG), this.layer = document.createElement("div");
        const {
          style: ZG
        } = this.layer;
        ZG.position = "relative", ZG.isolation = "isolate", ZG.overflow = "hidden", ZG.width = "100%", ZG.height = "100%", ZG.pointerEvents = "none", GG.appendChild(this.layer)
      }
      show(GG) {
        this.view = GG, this.place()
      }
      resize(GG, bG) {
        this.size = [GG, bG], this.place()
      }
      close() {
        for (const GG of this.figures) GG.close();
        this.figures = [], this.layer.remove()
      }
      place() {
        const {
          figures: GG,
          shown: bG
        } = this.view;
        for (const wG of this.figures.splice(GG.length)) wG.close();
        const {
          size: ZG
        } = this;
        GG.forEach(((wG, SG) => {
          var LG;
          const yG = function(GG, bG, ZG, wG) {
            let [SG, LG] = wG;
            const yG = (GG + .5) * SG / bG,
              kG = Math.min(Math.max(SG / bG, 2 * ZG * LG), 2 * Math.max(yG, SG - yG));
            return {
              left: yG - kG / 2,
              width: kG
            }
          }(SG, GG.length, function(GG) {
            let {
              animation: bG,
              size: ZG
            } = GG;
            const {
              aimed: wG,
              ready: SG
            } = ub;
            return (hb(bG) === Vb.gunAimed ? wG : SG) * ZG
          }(wG), ZG);
          this.figures[SG] ??= new ib(this.open, this.layer, yG, ZG), this.figures[SG].update(wG, null !== (LG = bG[SG]) && void 0 !== LG && LG, function(GG, bG) {
            return String(Math.round(1e3 * GG) + bG)
          }(wG.size, SG), yG, ZG)
        }))
      }
    }
    const Wb = {
      player: gG,
      store: eG
    };
    class mb {
      constructor(GG) {
        this.page = GG
      }
      async openMob(GG) {
        return new zb(await this.open(GG, nG), ob)
      }
      async openPet(GG) {
        return new zb(await this.open(GG, nG), Xb)
      }
      openMobLineup(GG) {
        return new Cb(GG, ((GG, bG, ZG) => this.page.openPreview(nG, GG, bG, ZG)))
      }
      async openCharacter(GG, bG) {
        return new Eb(await this.open(GG, Wb[bG]))
      }
      async open(GG, bG) {
        const [ZG, wG] = rb(GG), SG = await this.page.openPreview(bG, ZG, wG);
        return Jb(GG, SG), SG
      }
    }
  },
  37097: (GG, bG, ZG) => {
    ZG.d(bG, {
      B: () => QG,
      E: () => KG,
      H: () => hG,
      J: () => JG,
      c: () => wG,
      e: () => SG,
      i: () => fG,
      m: () => dG,
      q: () => VG,
      u: () => rG,
      v: () => UG,
      y: () => YG
    });
    const wG = [{
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

    function SG(GG, bG) {
      const {
        numLines: ZG,
        charsPerLine: SG
      } = wG[bG];
      return zG(GG, ZG, SG, !1)
    }
    const LG = 7 / 8,
      yG = .25,
      kG = 8;

    function UG(GG, bG) {
      return {
        width: Math.min(GG, kG) - 2 * yG,
        height: Math.min(bG, kG) - 2 * yG
      }
    }

    function YG(GG, bG, ZG) {
      const SG = UG(GG, bG),
        {
          numLines: yG,
          charsPerLine: kG
        } = wG[ZG];
      return {
        numLines: Math.max(1, Math.floor(yG / LG * SG.height)),
        charsPerLine: Math.max(1, Math.floor(kG * SG.width))
      }
    }

    function VG(GG, bG, ZG, wG) {
      const {
        numLines: SG,
        charsPerLine: LG
      } = YG(ZG, wG, bG);
      return zG(GG, SG, LG, !1)
    }
    const pG = 32e3;

    function fG(GG) {
      return GG.slice(0, pG)
    }
    const QG = 512e3,
      KG = 64,
      hG = QG;

    function dG(GG, bG) {
      const ZG = Math.max(0, hG - bG),
        wG = Math.min(QG, ZG);
      return GG.slice(0, wG)
    }
    const JG = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      Ny: {
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

    function rG(GG, bG) {
      const {
        numLines: ZG,
        charsPerLine: wG
      } = JG[bG];
      return zG(GG, ZG, wG, !1)
    }

    function zG(GG, bG, ZG, wG, SG) {
      (SG || wG) && (GG = GG.slice(0, null !== SG && void 0 !== SG ? SG : bG * ZG));
      const LG = GG.split("\n");
      if (LG.length > bG && LG.splice(bG, LG.length - bG), !wG)
        for (let yG = 0; yG < LG.length; yG++) {
          const GG = LG[yG];
          GG.length > ZG && (LG[yG] = GG.substring(0, ZG), LG.length < bG && LG.splice(yG + 1, 0, GG.substring(ZG)))
        }
      return LG.join("\n")
    }
  },
  51407: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/builtInAnimations.anim.38e056f49512e10b7206.gz"
  },
  51413: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/previewAnimations.dat.24d2343c38c8f9b3fb85.gz"
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);