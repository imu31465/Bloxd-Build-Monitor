export const id = 52;
export const ids = [52];
export const modules = {
  37623: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => UJ,
      c: () => eJ
    });
    const FJ = new WeakMap;

    function UJ(JJ, cJ) {
      return FJ.set(JJ, cJ), JJ
    }

    function eJ(JJ) {
      var cJ;
      return null !== (cJ = FJ.get(JJ)) && void 0 !== cJ ? cJ : null
    }
  },
  37639: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => AJ
    });
    var FJ = ZJ(1122);

    function UJ(JJ) {
      const cJ = /(\d*\.?\d+)px/.exec(JJ);
      return cJ ? Number(cJ[1]) : null
    }

    function eJ(JJ) {
      return JJ.split(/[\s,]+/).pop()
    }
    let XJ = !1;
    const AJ = {
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
      drawText: function(JJ, cJ, FJ, AJ, qJ, jJ) {
        if (qJ <= 0 || jJ <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: YJ,
          fontVariant: hJ,
          fontWeight: DJ,
          fontSize: sJ,
          font: nJ
        } = this, GJ = [YJ, hJ, DJ, `${sJ}px`, nJ].filter(Boolean).join(" "), fJ = [
          [DJ, `${sJ}px`, eJ(nJ)].filter(Boolean).join(" "), `${sJ}px sans-serif`
        ], xJ = JJ.font, rJ = function(JJ, cJ, ZJ) {
          for (const FJ of cJ) {
            JJ.font = FJ;
            const cJ = UJ(JJ.font),
              XJ = eJ(FJ);
            if (null !== cJ && Math.abs(cJ - ZJ) <= .5 && JJ.font.toLowerCase().includes(XJ.toLowerCase())) return FJ
          }
          return null
        }(JJ, [GJ, ...fJ], sJ);
        rJ !== GJ && function(JJ, cJ, FJ) {
          XJ || (XJ = !0, Promise.resolve().then((() => ZJ(957))).then((ZJ => {
            let {
              MG: UJ
            } = ZJ;
            UJ(new Error("A canvas didn't take canvasTxt's font"), {
              font: JJ,
              ys: cJ,
              drawnWith: null !== FJ && void 0 !== FJ ? FJ : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(GJ, xJ, rJ);
        const vJ = UJ(JJ.font);
        if (null === rJ && null !== vJ && vJ > 0) {
          const ZJ = sJ / vJ;
          JJ.save();
          try {
            return JJ.scale(ZJ, ZJ), {
              height: this.drawLines(JJ, cJ, FJ / ZJ, AJ / ZJ, qJ / ZJ, jJ / ZJ, vJ).height * ZJ
            }
          } finally {
            JJ.restore()
          }
        }
        return this.drawLines(JJ, cJ, FJ, AJ, qJ, jJ, sJ)
      },
      drawLines: function(JJ, cJ, ZJ, UJ, eJ, XJ, AJ) {
        const qJ = ZJ + eJ,
          jJ = UJ + XJ;
        let YJ, hJ = UJ + XJ / 2 + AJ / 2;
        "right" === this.align ? (YJ = qJ, JJ.textAlign = "right") : "left" === this.align ? (YJ = ZJ, JJ.textAlign = "left") : (YJ = ZJ + eJ / 2, JJ.textAlign = "center");
        for (const FJ of cJ) {
          JJ.measureText(FJ).width >= eJ && (cJ = cJ.replace(FJ, ""))
        }
        cJ = (0, FJ.V)(cJ);
        const DJ = [],
          sJ = cJ.split("\n"),
          nJ = this.justify ? JJ.measureText("\u200a").width : 0;
        sJ.forEach((cJ => {
          let ZJ = JJ.measureText(cJ).width;
          if (ZJ <= eJ) DJ.push(cJ);
          else {
            let FJ = cJ;
            const UJ = eJ;
            let XJ, AJ, qJ;
            for (ZJ = JJ.measureText(FJ).width; ZJ > UJ;) {
              for (XJ = 0, AJ = 0, qJ = ""; AJ < UJ;) XJ++, qJ = FJ.substr(0, XJ), AJ = JJ.measureText(qJ).width;
              XJ--, qJ = qJ.substr(0, XJ);
              const cJ = XJ;
              if (" " !== FJ.substr(XJ, 1)) {
                for (;
                  " " !== FJ.substr(XJ, 1) && 0 !== XJ;) XJ--;
                0 === XJ && (XJ = cJ), qJ = FJ.substr(0, XJ)
              }
              qJ = this.justify ? this.justifyLine(JJ, qJ, nJ, "\u200a", eJ) : qJ, FJ = FJ.substr(XJ), ZJ = JJ.measureText(FJ).width, DJ.push(qJ)
            }
            ZJ > 0 && DJ.push(FJ)
          }
        }));
        const GJ = this.lineHeight ? this.lineHeight : this.getTextHeight(JJ, cJ),
          fJ = GJ * (DJ.length - 1),
          xJ = fJ / 2;
        let rJ = UJ;
        "top" === this.vAlign ? hJ = UJ + AJ : "bottom" === this.vAlign ? (hJ = jJ - fJ, rJ = jJ) : (rJ = UJ + XJ / 2, hJ -= xJ), DJ.forEach((cJ => {
          cJ = cJ.trim(), JJ.fillText(cJ, YJ, hJ), hJ += GJ
        })), this.debug && (JJ.lineWidth = 3, JJ.strokeStyle = "#00909e", JJ.strokeRect(ZJ, UJ, eJ, XJ), JJ.lineWidth = 2, JJ.strokeStyle = "#f6d743", JJ.beginPath(), JJ.moveTo(YJ, UJ), JJ.lineTo(YJ, jJ), JJ.stroke(), JJ.strokeStyle = "#ff6363", JJ.beginPath(), JJ.moveTo(ZJ, rJ), JJ.lineTo(qJ, rJ), JJ.stroke());
        return {
          height: fJ + GJ
        }
      },
      getTextHeight: function(JJ, cJ) {
        const ZJ = JJ.textBaseline;
        JJ.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: FJ
        } = JJ.measureText(cJ);
        return JJ.textBaseline = ZJ, FJ
      },
      justifyLine: function(JJ, cJ, ZJ, FJ, UJ) {
        const eJ = cJ.trim(),
          XJ = JJ.measureText(eJ).width,
          AJ = eJ.split(/\s+/).length - 1,
          qJ = Math.floor((UJ - XJ) / ZJ);
        if (AJ <= 0 || qJ <= 0) return eJ;
        const jJ = Math.floor(qJ / AJ);
        let YJ = qJ - AJ * jJ,
          hJ = [];
        for (let DJ = 0; DJ < jJ; DJ++) hJ.push(FJ);
        hJ = hJ.join("");
        return eJ.replace(/\s+/g, (JJ => {
          const cJ = YJ > 0 ? hJ + FJ : hJ;
          return YJ--, JJ + cJ
        }))
      }
    }
  },
  37642: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => GJ,
      d: () => nJ,
      h: () => DJ,
      k: () => YJ,
      o: () => hJ
    });
    var FJ = ZJ(3726),
      UJ = ZJ(235);
    const eJ = 1024,
      XJ = 1536,
      AJ = 2 * FJ.k + 1,
      qJ = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      jJ = 1.5;

    function YJ(JJ, cJ, ZJ) {
      if ("string" !== typeof JJ) return cJ;
      try {
        const ZJ = JSON.parse(JJ);
        return ZJ && "object" === typeof ZJ ? ZJ : cJ
      } catch (FJ) {
        return void 0 !== ZJ && console.error(`Couldn't parse ${ZJ}`, FJ), cJ
      }
    }

    function hJ(JJ) {
      return YJ(JJ, null, "a leaderboard's rows")
    }

    function DJ(JJ, cJ) {
      var ZJ, FJ;
      return null !== cJ && void 0 !== cJ ? cJ : {
        status: null !== (ZJ = JJ.status) && void 0 !== ZJ ? ZJ : "loading",
        entries: null !== (FJ = JJ.entries) && void 0 !== FJ ? FJ : []
      }
    }

    function sJ(JJ, cJ) {
      return "number" === typeof JJ && Number.isFinite(JJ) && JJ > 0 ? JJ : cJ
    }

    function nJ(JJ, cJ) {
      const ZJ = sJ(JJ.size, 1);
      let FJ = sJ(JJ.width, sJ(2.5 * ZJ, 2.5)),
        UJ = sJ(JJ.height, sJ(3.75 * ZJ, 3.75));
      Number.isFinite(eJ * UJ / FJ) && Number.isFinite(XJ * FJ / UJ) || (FJ = 2.5, UJ = 3.75);
      const AJ = UJ / FJ,
        qJ = Math.max(1, Math.min(eJ, cJ / AJ));
      return {
        width: FJ,
        height: UJ,
        layoutWidth: Math.max(eJ, XJ / AJ),
        layoutHeight: Math.max(XJ, eJ * AJ),
        pixelWidth: Math.round(qJ),
        pixelHeight: Math.round(Math.max(1, Math.min(cJ, qJ * AJ)))
      }
    }

    function GJ(JJ, cJ, ZJ, XJ, YJ, hJ) {
      JJ.setTransform(1, 0, 0, 1, 0, 0), JJ.fillStyle = UJ.D.defaultNameTagBackground, JJ.fillRect(0, 0, cJ, ZJ), JJ.scale(cJ / XJ.layoutWidth, ZJ / XJ.layoutHeight), JJ.translate((XJ.layoutWidth - eJ) / 2, 0),
        function(JJ, cJ, ZJ, eJ) {
          var XJ, YJ, hJ, DJ;
          const {
            top: sJ,
            around: nJ,
            showPlayerText: GJ,
            localPlayerDbId: rJ
          } = ZJ, {
            whiteUiText: vJ,
            grayUiText: mJ,
            yellowUiText: QJ
          } = UJ.D;
          JJ.textBaseline = "middle";
          const EJ = function(cJ, ZJ, FJ, UJ, eJ, XJ) {
              let AJ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              JJ.font = `bold ${UJ}px 'Jetbrains Mono', monospace`, JJ.fillStyle = eJ, JJ.textAlign = AJ;
              let qJ = cJ.replace(/[\r\n\t]/g, " ");
              if (JJ.measureText(qJ).width > XJ) {
                for (; qJ.length > 0 && JJ.measureText(`${qJ}\u2026`).width > XJ;) qJ = qJ.slice(0, -1);
                qJ += "\u2026"
              }
              JJ.fillText(qJ, ZJ, FJ)
            },
            VJ = cJ => {
              JJ.fillStyle = vJ, JJ.globalAlpha = .15, JJ.fillRect(24, cJ, 976, 2), JJ.globalAlpha = 1
            },
            KJ = null === rJ ? null : (0, UJ.fc)(rJ),
            yJ = JJ => null !== KJ && JJ.playerHash === KJ,
            SJ = fJ(sJ.entries, FJ.n),
            IJ = "ready" === sJ.status && SJ.length > 0,
            MJ = null === nJ ? [] : fJ(nJ.entries, AJ),
            bJ = SJ.some(yJ),
            wJ = null === nJ ? null : function(JJ) {
              const cJ = JJ;
              if (!cJ || !Number.isFinite(cJ.rank) || !Number.isFinite(cJ.tied) || !Number.isFinite(cJ.total)) return null;
              return cJ
            }(nJ.standing),
            WJ = MJ.find(yJ),
            gJ = SJ.find(yJ),
            HJ = null === wJ || void 0 === WJ ? null : {
              value: WJ.value,
              rank: wJ.rank
            },
            PJ = xJ(SJ, void 0 === gJ || gJ.value === (null === HJ || void 0 === HJ ? void 0 : HJ.value) ? HJ : null),
            kJ = xJ(MJ, HJ),
            pJ = (JJ, cJ) => {
              const ZJ = JJ.findIndex(yJ);
              return ZJ >= 0 ? cJ[ZJ] : null
            },
            dJ = null !== (XJ = null !== (YJ = null === wJ || void 0 === wJ ? void 0 : wJ.rank) && void 0 !== YJ ? YJ : pJ(MJ, kJ)) && void 0 !== XJ ? XJ : pJ(SJ, PJ);
          JJ.font = "bold 34px 'Jetbrains Mono', monospace";
          const zJ = [...IJ ? PJ : [], ...bJ ? [] : kJ],
            NJ = Math.min(280, Math.max(0, ...zJ.map((cJ => JJ.measureText(qJ.format(cJ)).width)))),
            OJ = NJ <= 80,
            TJ = OJ ? 80 : 32 + NJ,
            CJ = OJ ? 148 : TJ + 28,
            uJ = 660 - CJ;
          EJ(`TOP ${FJ.n}  /  ALL TIME`, 24, 52, 28, mJ, 976), EJ(GJ ? String(null !== (hJ = cJ.title) && void 0 !== hJ ? hJ : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, vJ, 976), EJ("RANK", 32, 174, 28, mJ, CJ - 40), EJ("PLAYER", CJ, 174, 28, mJ, uJ), EJ(GJ ? String(null !== (DJ = cJ.scoreLabel) && void 0 !== DJ ? DJ : "Score").slice(0, 24) : "Score", 992, 174, 28, mJ, 304, "right"), VJ(202);
          const iJ = (eJ - 232) / (FJ.n + jJ + AJ),
            RJ = 208 + FJ.n * iJ,
            LJ = RJ + jJ * iJ,
            aJ = (cJ, ZJ, FJ, UJ) => {
              const eJ = yJ(cJ);
              JJ.fillStyle = eJ ? QJ : vJ, JJ.globalAlpha = eJ ? .15 : UJ ? .035 : 0, JJ.fillRect(24, FJ - iJ / 2 + 1, 976, iJ - 2), JJ.globalAlpha = 1;
              const XJ = eJ ? QJ : vJ;
              EJ(qJ.format(ZJ), TJ, FJ, 34, XJ, OJ ? 80 : NJ, OJ ? "center" : "right"), EJ(GJ ? String(cJ.name).slice(0, 64) : "Player", CJ, FJ, 34, XJ, uJ);
              const AJ = qJ.format(cJ.value);
              EJ(JJ.measureText(AJ).width > 304 ? cJ.value.toExponential(6) : AJ, 992, FJ, 34, XJ, 304, "right")
            };
          if (IJ)
            for (const [FJ, UJ] of SJ.entries()) aJ(UJ, PJ[FJ], 208 + (FJ + .5) * iJ, FJ % 2 === 0);
          else {
            const JJ = "error" === sJ.status,
              cJ = JJ ? "Couldn't load leaderboard" : "ready" === sJ.status ? "No scores yet" : "Loading leaderboard\u2026",
              ZJ = JJ ? "Trying again shortly" : "ready" === sJ.status ? "Be the first on the board!" : "Fetching the top players",
              FJ = (208 + RJ) / 2;
            EJ(cJ, 512, FJ - 28, 40, JJ ? UJ.D.redUiText : vJ, 960, "center"), EJ(ZJ, 512, FJ + 27, 30, mJ, 960, "center")
          }
          const BJ = RJ + jJ * iJ / 2;
          if (null === dJ) VJ(BJ);
          else {
            const cJ = null === wJ ? 0 : wJ.tied - 1,
              ZJ = `YOUR RANK #${qJ.format(dJ)}${null===wJ?"":` of ${qJ.format(wJ.total)}`}`;
            JJ.font = "bold 36px 'Jetbrains Mono', monospace";
            const FJ = Math.max(20, Math.min(36, Math.floor(34560 / JJ.measureText(ZJ).width)));
            EJ(ZJ, 512, BJ - (cJ > 0 ? 15 : 0), FJ, QJ, 960, "center"), cJ > 0 && EJ(`Tied with ${qJ.format(cJ)} other${1===cJ?"":"s"}`, 512, BJ + 24, 24, mJ, 960, "center")
          }
          if (null === nJ) return;
          const tJ = LJ + AJ * iJ / 2;
          if (bJ) EJ(`You're in the top ${FJ.n}!`, 512, tJ, 40, QJ, 960, "center");
          else if (0 === MJ.length) EJ("You're not on this board yet", 512, tJ, 34, mJ, 960, "center");
          else
            for (const [FJ, UJ] of MJ.entries()) aJ(UJ, kJ[FJ], LJ + (FJ + .5) * iJ, FJ % 2 === 0)
        }(JJ, YJ, hJ, XJ.layoutHeight)
    }

    function fJ(JJ, cJ) {
      return Array.isArray(JJ) ? JJ.slice(0, cJ).filter((JJ => JJ && Number.isFinite(JJ.rank) && Number.isFinite(JJ.value))) : []
    }

    function xJ(JJ, cJ) {
      const ZJ = [];
      let FJ = !1;
      return JJ.forEach(((UJ, eJ) => {
        if (null !== cJ && UJ.value === cJ.value) return void ZJ.push(cJ.rank);
        const XJ = eJ > 0 && UJ.value === JJ[eJ - 1].value;
        XJ || (FJ = 0 === eJ && 1 !== UJ.rank), ZJ.push(XJ && !FJ ? ZJ[eJ - 1] : UJ.rank)
      })), ZJ
    }
  },
  37818: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => UJ,
      g: () => eJ
    });
    const FJ = 32;

    function UJ(JJ) {
      return Array.from(JJ).length
    }

    function eJ(JJ) {
      const cJ = [""];
      let ZJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        UJ = "";
      const eJ = () => {
        cJ.push(""), ZJ = 0, UJ = ""
      };
      for (const XJ of JJ.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(XJ)) eJ();
        else if (/^\s+$/.test(XJ)) UJ += XJ;
      else if (XJ.length > 0) {
        const JJ = Array.from(XJ);
        ZJ > 0 && ZJ + UJ.length + JJ.length > FJ && eJ(), cJ[cJ.length - 1] += UJ, ZJ += UJ.length, UJ = "";
        for (const UJ of JJ) ZJ >= FJ && eJ(), cJ[cJ.length - 1] += UJ, ZJ++
      }
      return cJ[cJ.length - 1] += UJ, cJ
    }
  },
  41953: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      WasmPreviewHost: () => Qc,
      pageBuiltInAnimationPack: () => DJ,
      pagePreviews: () => Jc,
      previewModule: () => iJ
    });
    var FJ = ZJ(3183),
      UJ = ZJ(538);
    const eJ = "[bloxd-wasm-client]";

    function XJ(JJ) {
      const cJ = {
        wasm: "unknown",
        client: String(UJ.b)
      };
      try {
        var ZJ;
        cJ.wasm = null !== (ZJ = null === JJ || void 0 === JJ ? void 0 : JJ.eh()) && void 0 !== ZJ ? ZJ : cJ.wasm
      } catch {}
      return cJ
    }
    async function AJ(JJ) {
      if (JJ.length < 2 || 31 !== JJ[0] || 139 !== JJ[1]) return JJ;
      if ("undefined" === typeof DecompressionStream) {
        const {
          ungzip: cJ
        } = await ZJ.e(206).then((() => ZJ(35985)));
        return cJ(JJ)
      }
      const cJ = new Blob([JJ]).stream().pipeThrough(new DecompressionStream("gzip"));
      return new Uint8Array(await new Response(cJ).arrayBuffer())
    }

    function qJ(JJ, cJ, FJ, UJ) {
      Promise.resolve().then((() => ZJ(39705))).then((ZJ => {
        let {
          reportDataLoadFailure: eJ
        } = ZJ;
        eJ(JJ, cJ, FJ, UJ)
      }), (cJ => {
        console.warn(`${eJ} ${JJ} didn't load, and the report couldn't be sent`, FJ.error, cJ)
      }))
    }
    const jJ = [3e4, 12e4, 3e5];
    class YJ {
      constructor(JJ) {
        this.deps = JJ, this.loading = null, this.reported = !1, this.retries = 0, this.resolveSet = () => {}, this.set = new Promise((JJ => {
          this.resolveSet = JJ
        }))
      }
      provide(JJ) {
        return this.loading ??= this.load(JJ), this.loading
      }
      whenSet() {
        return this.set
      }
      async load(JJ) {
        const cJ = XJ(JJ),
          ZJ = await async function(JJ, cJ) {
            let ZJ;
            try {
              ZJ = await JJ()
            } catch (FJ) {
              return {
                stage: "fetch",
                error: FJ
              }
            }
            try {
              return cJ(ZJ) ? null : {
                stage: "decode",
                error: null
              }
            } catch (FJ) {
              return {
                stage: "decode",
                error: FJ
              }
            }
          }((() => this.deps.fetch()), (cJ => {
            const ZJ = JJ.UeJ(cJ);
            return ZJ && this.resolveSet(cJ), ZJ
          }));
        if (null !== ZJ) {
          if ("fetch" === ZJ.stage) {
            this.loading = null;
            const cJ = jJ[this.retries++];
            void 0 !== cJ && this.deps.later((() => {
              this.provide(JJ)
            }), cJ)
          }
          this.reported || (this.reported = !0, this.deps.onFailed(ZJ, cJ))
        }
      }
    }
    let hJ = null;

    function DJ() {
      return hJ ??= new YJ({
        fetch: async () => AJ(await (0, FJ.L)(sJ(), {
          priority: "low"
        })),
        onFailed: (JJ, cJ) => {
          qJ("builtInAnimations", sJ(), JJ, cJ)
        },
        later: (JJ, cJ) => {
          setTimeout(JJ, cJ)
        }
      }), hJ
    }

    function sJ() {
      return ZJ(41955)
    }
    var nJ = ZJ(3178),
      GJ = ZJ(35441),
      fJ = ZJ(39516),
      xJ = ZJ(1098),
      rJ = ZJ(225),
      vJ = ZJ(39529),
      mJ = ZJ(39789),
      QJ = ZJ(39730),
      EJ = ZJ(39732),
      VJ = ZJ(39741),
      KJ = ZJ(39537),
      yJ = ZJ(39803),
      SJ = ZJ(39806),
      IJ = ZJ(39555),
      MJ = ZJ(39655),
      bJ = ZJ(39767),
      wJ = ZJ(39798),
      WJ = ZJ(41242),
      gJ = ZJ(39543);
    const HJ = "[bloxd-previews]",
      PJ = 4e5,
      kJ = 0,
      pJ = 1,
      dJ = 2,
      zJ = 1,
      NJ = 2,
      OJ = 3,
      TJ = 0,
      CJ = 1,
      uJ = 2;

    function iJ(JJ) {
      const cJ = JJ,
        ZJ = (0, vJ.R)(JJ),
        FJ = (0, vJ.r)(JJ);
      return null !== ZJ && null !== FJ && "function" === typeof cJ.ceJ && "function" === typeof cJ.ZeJ && "function" === typeof cJ.FeJ ? cJ : null
    }

    function RJ(JJ, cJ, ZJ) {
      let [FJ, UJ] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [JJ, cJ], eJ = Math.min(Number.isFinite(ZJ) && ZJ > 0 ? ZJ : 1, 2);
      const XJ = Math.max(0, FJ, JJ) * Math.max(0, UJ, cJ) * eJ * eJ;
      return XJ > PJ && (eJ *= Math.sqrt(PJ / XJ)), [Math.max(1, Math.floor(Math.max(0, JJ) * eJ)), Math.max(1, Math.floor(Math.max(0, cJ) * eJ))]
    }

    function LJ() {
      return ZJ(41959)
    }
    async function aJ(JJ, cJ) {
      "lost" === JJ && (0, IJ.v)();
      const FJ = await (0, IJ.O)();
      if (null === FJ || (0, vJ.t)(FJ) || (0, IJ.e)()) return;
      const UJ = "webgpu" === FJ.backend;
      if (!UJ && "lost" !== JJ) return;
      const eJ = UJ ? (0, vJ.X)(JJ) : null;
      if (null !== eJ) {
        const ZJ = `WebGPU failed at home (${JJ}${void 0===cJ?"":`: ${cJ instanceof Error?cJ.message:(0,gJ.d)(cJ)}`}) and ${eJ}`;
        return console.warn(`${HJ} ${ZJ}: the previews stop`, null !== cJ && void 0 !== cJ ? cJ : ""), void(0, IJ.t)(ZJ)
      }(0, IJ.q)();
      try {
        await async function(JJ, cJ, FJ) {
          var UJ;
          let {
            backend: eJ,
            adapter: AJ
          } = JJ;
          const qJ = (0, nJ.P)(),
            {
              flushCrashReports: jJ,
              reportRenderReload: YJ
            } = await Promise.resolve().then((() => ZJ(39705)));
          YJ(eJ, "start_failed" === cJ ? 0 : 1, XJ(qJ ? (0, nJ.C)() : null), {
            cause: cJ,
            error: "lost" === cJ && null !== (UJ = (0, vJ.ab)(qJ ? (0, vJ.R)((0, nJ.C)()) : null)) && void 0 !== UJ ? UJ : FJ,
            context: {
              adapter: AJ,
              boundAtMs: "start_failed" === cJ ? null : (0, IJ.K)(),
              indirectHangs: (0, IJ.z)()
            }
          }), await jJ(MJ.e)
        }(FJ, JJ, cJ)
      } catch (AJ) {
        console.warn(`${HJ} ${FJ.backend} failed at home (${JJ}), and its report couldn't be sent`, AJ)
      }(0, MJ.o)()
    }
    async function BJ() {
      if (!(0, nJ.P)()) {
        const JJ = await (0, IJ.O)();
        if (null === JJ || (0, vJ.t)(JJ)) return null;
        if (await (0, GJ.i)(await JJ.load(), fJ.g), !(0, nJ.P)()) return null
      }
      return iJ((0, nJ.C)())
    }
    class tJ {
      constructor(JJ, cJ, ZJ, FJ, UJ, eJ) {
        this.page = JJ, this.host = cJ, this.id = ZJ, this.canvas = FJ, this.size = UJ, this.models = void 0, this.images = void 0, this.write = void 0, this.outcomes = [], this.closed = !1, this.quiet = 0, this.settled = [];
        const XJ = {
            ...eJ.images,
            glbUrl: JJ => {
              var cJ;
              return null !== (cJ = this.models.drawnUrl(JJ)) && void 0 !== cJ ? cJ : eJ.images.glbUrl(JJ)
            }
          },
          AJ = cJ => JJ.modelFile(cJ);
        this.images = new mJ.f(XJ, (JJ => {
          console.warn(`${HJ} image ${JJ.key.kind}:${JJ.key.index}:${JJ.key.word} failed`, JJ.error)
        }), {
          fetchFile: AJ,
          fetchImage: cJ => JJ.imageFile(cJ)
        }), JJ.startModels(), this.models = new QJ.i(eJ.files, ((cJ, ZJ) => JJ.buildModel(cJ, ZJ)), (JJ => {
          console.warn(`${HJ} model file ${JJ.file} (${JJ.url}) failed`, JJ.error)
        }), {
          fetchFile: AJ,
          onWritten: (JJ, cJ) => {
            this.images.glbWritten(JJ, cJ)
          },
          onTaken: (JJ, cJ) => {
            this.images.glbTaken(JJ, cJ)
          }
        }), this.write = (JJ, cJ, ZJ) => {
          if (this.closed) return !0;
          if (JJ === QJ.d) {
            const JJ = new DataView(ZJ.buffer, ZJ.byteOffset, VJ.b),
              FJ = JJ.getUint32(0, !0),
              UJ = JJ.getUint32(VJ.e, !0),
              eJ = this.page.hostCall(uJ, (() => this.host.AXJ(this.id, FJ, cJ, ZJ.subarray(VJ.b))));
            return this.outcomes.push([UJ, eJ]), !0
          }
          return JJ === mJ.e && (this.page.hostCall(void 0, (() => {
            this.host.jXJ(this.id, ZJ)
          })), !0)
        }
      }
      get isClosed() {
        return this.closed
      }
      get isStopped() {
        return this.page.isStopped
      }
      resize(JJ, cJ, ZJ) {
        if (this.closed) return;
        const [FJ, UJ] = RJ(JJ, cJ, this.page.dpr(), ZJ);
        FJ === this.size[0] && UJ === this.size[1] || (this.size = [FJ, UJ], this.page.hostCall(void 0, (() => {
          this.host.resize(this.id, FJ, UJ)
        })))
      }
      setMob(JJ, cJ, ZJ, FJ) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.nXJ(this.id, JJ, cJ, ZJ, FJ))))
      }
      setPet(JJ, cJ, ZJ, FJ) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.fXJ(this.id, JJ, cJ, ZJ, FJ))))
      }
      setPlayer(JJ, cJ, ZJ) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.hXJ(this.id, JJ, cJ, ZJ))))
      }
      setFigure(JJ, cJ, ZJ, FJ) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.DXJ(this.id, JJ, cJ, ZJ, FJ))))
      }
      replay() {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.replay(this.id))))
      }
      get orbit() {
        if (this.closed) return null;
        const JJ = this.page.hostCall(null, (() => this.host.orbit(this.id)));
        return null === JJ || JJ.length < 3 ? null : {
          alpha: JJ[0],
          beta: JJ[1],
          radius: JJ[2]
        }
      }
      setOrbit(JJ) {
        let {
          alpha: cJ,
          beta: ZJ,
          radius: FJ
        } = JJ;
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.GXJ(this.id, cJ, ZJ, FJ)
        }))
      }
      untilSettled() {
        return this.closed || this.page.isStopped ? Promise.resolve() : (this.quiet = 0, new Promise((JJ => {
          this.settled.push(JJ)
        })))
      }
      packChanged() {
        this.quiet = 0, this.models.refresh(), (0, yJ.g)(this.images)
      }
      feed() {
        this.models.drain(this.write);
        for (const [JJ, cJ] of this.outcomes) {
          const ZJ = cJ === TJ ? [] : [cJ === CJ ? JJ : (JJ | QJ.g) >>> 0];
          this.models.taken(JJ, ZJ)
        }
        this.outcomes.length = 0, this.images.drain(this.write)
      }
      collect(JJ) {
        let cJ = !1;
        if (JJ) {
          const JJ = this.host.vXJ(this.id);
          for (const cJ of JJ) this.models.request(cJ);
          const ZJ = this.host.rXJ(this.id);
          ZJ.length > 0 && this.images.onEvent(ZJ), cJ = JJ.length > 0 || ZJ.length > 0
        }
        const ZJ = this.page.modelsUnavailable ? 0 : this.models.asking + this.models.unanswered,
          FJ = cJ || ZJ > 0 || this.images.waiting > 0 || this.images.inFlight > 0;
        this.quiet = FJ ? 0 : this.quiet + 1, this.quiet >= 3 && this.resolveSettled()
      }
      close() {
        this.closed || (this.closed = !0, this.page.closePreview(this), this.resolveSettled())
      }
      abandon() {
        this.resolveSettled()
      }
      dispose(JJ) {
        this.page.hostCall(void 0, (() => {
          const cJ = this.host.close(this.id);
          cJ.length > 0 && this.images.onEvent(cJ), this.page.isTrapped || JJ.FeJ(this.id)
        })), this.images.dispose(), this.canvas.remove()
      }
      resolveSettled() {
        const JJ = this.settled;
        this.settled = [];
        for (const cJ of JJ) cJ()
      }
    }
    class oJ {
      constructor(JJ) {
        this.deps = JJ, this.module = null, this.host = null, this.opening = null, this.pageCanvas = null, this.samples = 1, this.binding = null, this.sessionEnds = 0, this.lastEndReturned = !0, this.previews = new Map, this.nextId = 1, this.frameId = null, this.stopped = !1, this.loggedErrors = new Set, this.modelsListener = {
          onUnavailable: JJ => {
            this.modelsFailed(JJ)
          },
          onDecoderFailed: JJ => {
            this.loggedErrors.has("modelDecoder") || (this.loggedErrors.add("modelDecoder"), console.warn(`${HJ} the Draco decoder didn't load: models waiting on it won't draw`, JJ))
          },
          onWorkerLost: JJ => {
            this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${HJ} a model worker was lost: ${JJ}`))
          }
        }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.Jn = {
          setShaderPack: (JJ, cJ, ZJ, FJ, UJ) => (this.shaderPackArgs = [JJ, cJ, ZJ, FJ, UJ], this.handOverShaderPack(), !0)
        }, this.frame = JJ => {
          this.frameId = null;
          const cJ = this.host;
          if (null !== cJ && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped) try {
            this.drawFrame(cJ, JJ)
          } catch (ZJ) {
            if (!this.stopIfTrapped(ZJ) && (this.stop(), (0, vJ.x)(ZJ))) return void this.deps.onRenderFailed("frames_refused", ZJ);
            console.warn(`${HJ} the previews stopped: their frame threw`, ZJ)
          }
        }, JJ.pack.onChange((() => {
          this.packChanged()
        })), JJ.game.onGameChange((() => {
          this.tellInGame()
        }))
      }
      packChanged() {
        if (!this.stopped)
          for (const JJ of this.previews.values()) JJ.packChanged()
      }
      dpr() {
        return this.deps.dpr()
      }
      get sessionBound() {
        var JJ, cJ;
        return null !== (JJ = null === (cJ = this.host) || void 0 === cJ ? void 0 : cJ.attached()) && void 0 !== JJ && JJ
      }
      get open() {
        return this.previews.size
      }
      get frameCostMs() {
        return 0 === this.costs.length ? 0 : this.costs.reduce(((JJ, cJ) => JJ + cJ), 0) / this.costs.length
      }
      async bindSession(JJ, cJ, ZJ) {
        const FJ = this.binding,
          UJ = this.sessionEnds;
        try {
          const eJ = this.hostOf(JJ);
          if (!eJ.qXJ()) {
            const cJ = (0, bJ.i)().sampleCount,
              XJ = await ZJ(cJ);
            if (this.sessionEnds !== UJ) return this.keepRendererOfEndedSession(JJ, eJ, XJ, cJ, FJ), cJ;
            if (!eJ.ReJ(XJ)) throw new Error("the page has a renderer already");
            (0, IJ.u)(performance.now()), this.samples = cJ, (0, wJ.e)((0, vJ.r)(JJ))
          }
          if (!eJ.attach(cJ)) throw new Error("the page's renderer is lent to another session");
          return this.samples
        } finally {
          this.binding === FJ && this.endBinding()
        }
      }
      keepRendererOfEndedSession(JJ, cJ, ZJ, FJ, UJ) {
        if (!this.lastEndReturned || null !== this.binding && this.binding !== UJ) try {
          ZJ.free()
        } catch (eJ) {
          console.warn(`${HJ} an ended session's renderer didn't free`, eJ)
        } else cJ.ReJ(ZJ) && ((0, IJ.u)(performance.now()), this.samples = FJ, (0, wJ.e)(this.registryOf(JJ)))
      }
      async beginSession() {
        var JJ;
        let cJ = () => {};
        const ZJ = new Promise((JJ => {
          cJ = JJ
        }));
        this.binding = {
          done: ZJ,
          release: cJ
        }, await (null === (JJ = this.opening) || void 0 === JJ ? void 0 : JJ.catch((() => null)));
        const FJ = this.pageCanvas;
        return this.pageCanvas = null, FJ
      }
      endSession(JJ) {
        var cJ, ZJ;
        if (this.sessionEnds++, this.lastEndReturned = JJ, this.endBinding(), JJ) {
          try {
            var FJ;
            null === (FJ = this.host) || void 0 === FJ || FJ.detach()
          } catch (UJ) {
            return void console.warn(`${HJ} the session's core kept the page's renderer`, UJ)
          }!0 === (null === (cJ = this.host) || void 0 === cJ ? void 0 : cJ.attached()) && console.warn(`${HJ} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (ZJ = this.host) || void 0 === ZJ ? void 0 : ZJ.qXJ()) && (0, wJ.e)(this.registryOf(this.module))
        }
      }
      endBinding() {
        var JJ;
        null === (JJ = this.binding) || void 0 === JJ || JJ.release(), this.binding = null
      }
      async openPreview(JJ, cJ, ZJ, FJ) {
        const UJ = await this.renderingHost(),
          eJ = this.module;
        if (null === UJ || null === eJ) throw new Error("this page can't draw previews: it has no renderer build");
        if (this.animations ??= this.loadAnimations(UJ), this.deps.pack.wanted(), this.isStopped) throw new Error("the previews stopped");
        this.guarded((() => {
          this.deps.provideBuiltInAnimationPack(eJ)
        }));
        const XJ = this.nextId++,
          AJ = this.deps.createCanvas(),
          [qJ, jJ] = RJ(cJ, ZJ, this.deps.dpr(), FJ);
        AJ.width = qJ, AJ.height = jJ;
        if (!this.guarded((() => (eJ.ZeJ(XJ, AJ), UJ.open(XJ, qJ, jJ, JJ))))) throw this.hostCall(void 0, (() => {
          eJ.FeJ(XJ)
        })), new Error("the page's renderer is lent to a session that is running");
        this.restartModelsIfFailed();
        const YJ = new tJ(this, UJ, XJ, AJ, [qJ, jJ], this.deps);
        return this.previews.set(XJ, YJ), this.startFrames(), YJ
      }
      prefetch() {
        if (this.prefetched || this.isStopped || (0, IJ.e)() || null !== (0, IJ.H)()) return;
        this.prefetched = !0;
        (null === this.module ? this.loadModule() : Promise.resolve(this.module)).then((JJ => {
          null === JJ || this.isStopped || (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles())
        }), (() => {}))
      }
      modelFile(JJ) {
        return this.prefetchedOr(JJ, this.deps.fetchModel)
      }
      imageFile(JJ) {
        return this.prefetchedOr(JJ, FJ.L)
      }
      prefetchedOr(JJ, cJ) {
        const ZJ = this.prefetchedFiles.get(JJ);
        return void 0 === ZJ ? cJ(JJ) : ZJ.catch((() => cJ(JJ)))
      }
      async prefetchPlayerFiles() {
        const JJ = this.deps.playerFile().then((JJ => this.deps.files.url(JJ))),
          cJ = await Promise.all([JJ, this.deps.images.lifeformAtlasUrl(yJ.b)]).catch((() => null));
        if (null === cJ) return;
        const [ZJ, FJ] = cJ, UJ = (JJ, cJ) => {
          if (null === JJ) return;
          const ZJ = cJ(JJ);
          this.prefetchedFiles.set(JJ, ZJ), ZJ.catch((() => {
            this.prefetchedFiles.delete(JJ)
          }))
        };
        UJ(ZJ, (JJ => this.modelFile(JJ))), UJ(FJ, (JJ => this.imageFile(JJ)))
      }
      loadModule() {
        return this.moduleLoad ??= this.deps.loadModule().then((JJ => (null === JJ && (this.moduleLoad = null), JJ)), (JJ => {
          throw this.moduleLoad = null, JJ
        })), this.moduleLoad
      }
      fetchAnimationTable() {
        return this.animationTable ??= this.deps.fetchAnimations().catch((JJ => {
          throw this.animationTable = null, JJ
        })), this.animationTable
      }
      get modelsUnavailable() {
        return this.unavailable
      }
      startModels() {
        this.models ??= this.deps.startModels(this.modelsListener).catch((JJ => (this.modelsFailed(JJ), () => new Promise((() => {})))))
      }
      buildModel(JJ, cJ) {
        return this.startModels(), this.models.then((ZJ => ZJ(JJ, cJ))).then((JJ => this.unavailable ? new Promise((() => {})) : JJ))
      }
      restartModelsIfFailed() {
        this.unavailable && !this.modelsRestarted && 0 === this.previews.size && (this.modelsRestarted = !0, this.models = null, this.unavailable = !1, this.startModels())
      }
      modelsFailed(JJ) {
        this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${HJ} the model workers didn't start: models won't draw in the previews`, JJ))
      }
      called(JJ) {
        return 0 !== JJ && this.logError(JJ, 0), JJ
      }
      closePreview(JJ) {
        this.previews.delete(JJ.id), null !== this.module && JJ.dispose(this.module), 0 === this.previews.size && null !== this.frameId && (this.deps.cancelFrame(this.frameId), this.frameId = null)
      }
      hostOf(JJ) {
        if (null !== this.module && this.module !== JJ) throw new Error("a second renderer module on one page");
        return this.module = JJ, null === this.host && (this.host = this.guarded((() => new JJ.ceJ)), this.tellInGame(), this.handOverShaderPack()), this.host
      }
      tellInGame() {
        const {
          host: JJ
        } = this;
        null !== JJ && this.outsideCall("the game's start or end", (() => {
          JJ.sXJ(this.deps.game.inGame())
        }))
      }
      handOverShaderPack() {
        const {
          host: JJ,
          shaderPackArgs: cJ
        } = this;
        null !== JJ && null !== cJ && this.outsideCall("the shader pack's hand-over", (() => {
          JJ.BFJ(...cJ) || console.warn(`${HJ} the host refused the shader pack: previews draw without it at home`)
        }))
      }
      outsideCall(JJ, cJ) {
        try {
          this.hostCall(void 0, cJ)
        } catch (ZJ) {
          this.stop(), console.warn(`${HJ} the previews stopped: ${JJ} threw`, ZJ)
        }
      }
      async loadAnimations(JJ) {
        const cJ = XJ(null),
          ZJ = this.module;
        try {
          cJ.wasm = null === ZJ ? cJ.wasm : this.hostCall(cJ.wasm, (() => ZJ.eh()))
        } catch {}
        let FJ, UJ;
        try {
          FJ = await this.fetchAnimationTable()
        } catch (eJ) {
          return void this.deps.onAnimationsFailed({
            stage: "fetch",
            error: eJ
          }, cJ)
        }
        if (!this.settleIfTrapped()) {
          try {
            UJ = JJ.YXJ(FJ)
          } catch (eJ) {
            if (this.stopIfTrapped(eJ)) return;
            return void this.deps.onAnimationsFailed({
              stage: "decode",
              error: eJ
            }, cJ)
          }
          UJ || this.deps.onAnimationsFailed({
            stage: "decode",
            error: null
          }, cJ)
        }
      }
      async renderingHost() {
        if (null !== this.binding && await this.binding.done, this.settleIfTrapped()) return null;
        const JJ = this.host;
        return null !== JJ && this.guarded((() => JJ.qXJ())) ? JJ : (this.opening ??= this.openAtHome().finally((() => {
          this.opening = null
        })), this.opening)
      }
      async openAtHome() {
        var JJ;
        const cJ = null !== (JJ = this.module) && void 0 !== JJ ? JJ : await this.loadModule();
        if (null === cJ) return null;
        const ZJ = this.hostOf(cJ),
          FJ = () => this.guarded((() => ZJ.qXJ()));
        if (FJ()) return ZJ;
        if (null !== (0, IJ.H)() || (0, IJ.e)()) return null;
        const UJ = this.deps.createCanvas();
        UJ.width = 1, UJ.height = 1;
        const eJ = await this.deps.openExtras();
        if (this.settleIfTrapped()) return null;
        const XJ = (0, bJ.i)().sampleCount;
        let AJ;
        try {
          AJ = await (0, vJ.A)(cJ, "previewRenderer", UJ, XJ, WJ.c, eJ)
        } catch (qJ) {
          throw qJ instanceof KJ.d ? this.stopForTrap(qJ) : (0, vJ.z)(qJ) && await this.deps.onRenderFailed("start_failed", qJ), qJ
        }
        return this.guarded((() => ZJ.ReJ(AJ))) ? ((0, IJ.u)(performance.now()), this.samples = XJ, this.pageCanvas = UJ, (0, wJ.e)(this.registryOf(cJ)), ZJ) : FJ() ? ZJ : null
      }
      startFrames() {
        null !== this.frameId || this.isStopped || (this.frameId = this.deps.requestFrame(this.frame))
      }
      drawFrame(JJ, cJ) {
        for (const XJ of this.previews.values()) XJ.feed();
        if (this.stopped) return;
        const ZJ = this.deps.now(),
          FJ = JJ.frame(cJ);
        this.costs.push(this.deps.now() - ZJ), this.costs.length > 120 && this.costs.shift();
        const UJ = 0 !== (256 & FJ),
          eJ = 255 & FJ;
        for (const XJ of this.previews.values()) {
          if (this.stopped) return;
          XJ.collect(UJ)
        }
        if (!this.stopped) {
          if (UJ) {
            const cJ = JJ.xXJ();
            for (let JJ = 0; JJ + 1 < cJ.length; JJ += 2) this.logError(cJ[JJ], cJ[JJ + 1])
          }
          if (eJ === zJ) return this.stop(), void this.deps.onRenderFailed("lost");
          if (eJ === NJ) return this.stop(), void this.deps.onFatal(JJ.eXJ(), JJ.XXJ());
          if (eJ === OJ) return this.stop(), void console.warn(`${HJ} the previews stopped: the page's renderer went with its session`);
          (0, rJ.c)(cJ), this.startFrames()
        }
      }
      get isStopped() {
        return this.stopped || this.isTrapped
      }
      get isTrapped() {
        return null !== this.module && ((0, KJ.k)(this.module) || "failed" === (0, nJ.B)())
      }
      hostCall(JJ, cJ) {
        if (this.settleIfTrapped()) return JJ;
        try {
          return cJ()
        } catch (ZJ) {
          if (this.stopIfTrapped(ZJ)) return JJ;
          throw ZJ
        }
      }
      guarded(JJ) {
        if (this.settleIfTrapped()) throw new Error("the previews stopped: their module trapped");
        try {
          return JJ()
        } catch (cJ) {
          throw this.stopIfTrapped(cJ), cJ
        }
      }
      registryOf(JJ) {
        return {
          dZJ: (cJ, ZJ) => {
            this.hostCall(void 0, (() => {
              JJ.dZJ(cJ, ZJ)
            }))
          },
          zZJ: cJ => {
            this.hostCall(void 0, (() => {
              JJ.zZJ(cJ)
            }))
          }
        }
      }
      settleIfTrapped() {
        return !!this.isTrapped && (this.stopped || (this.stop(), (0, wJ.e)(null)), !0)
      }
      stopIfTrapped(JJ) {
        return !(null === this.module || !(0, KJ.m)(this.module, JJ)) && (this.stopForTrap(JJ), !0)
      }
      stopForTrap(JJ) {
        this.stop(), (0, wJ.e)(null), (0, nJ.Q)(JJ)
      }
      stop() {
        this.stopped = !0;
        for (const JJ of this.previews.values()) JJ.abandon()
      }
      logError(JJ, cJ) {
        const ZJ = `${JJ}:${cJ}`;
        this.loggedErrors.has(ZJ) || (this.loggedErrors.add(ZJ), console.warn(`${HJ} error ${JJ} (detail ${cJ})`))
      }
    }
    let lJ = null;

    function Jc() {
      return lJ ??= new oJ(function() {
        const JJ = (0, EJ.m)(xJ.clientSideServerUrls.staticUrl, {
          packUrl: JJ => {
            var cJ, ZJ;
            return null !== (cJ = null === (ZJ = yJ.c.current) || void 0 === ZJ ? void 0 : ZJ.modelUrl(JJ)) && void 0 !== cJ ? cJ : null
          }
        });
        return {
          loadModule: BJ,
          startModels: async JJ => {
            const {
              pageModelPool: cJ
            } = await ZJ.e(39).then((() => ZJ(42027))), {
              pool: FJ
            } = cJ(JJ);
            return (JJ, cJ) => FJ.build(JJ, cJ)
          },
          fetchAnimations: async () => AJ(await (0, FJ.L)(LJ())),
          playerFile: async () => (await (0, EJ.j)()).PLAYER_FILE,
          onAnimationsFailed: (JJ, cJ) => {
            qJ("previewAnimations", LJ(), JJ, cJ)
          },
          provideBuiltInAnimationPack: JJ => {
            DJ().provide(JJ)
          },
          openExtras: IJ.C,
          files: JJ,
          images: (0, yJ.i)((0, mJ.k)(JJ.url), (() => yJ.c.current)),
          pack: yJ.c,
          game: SJ.d,
          fetchModel: JJ => (0, EJ.d)(JJ),
          createCanvas: () => document.createElement("canvas"),
          dpr: () => window.devicePixelRatio,
          now: () => performance.now(),
          requestFrame: JJ => requestAnimationFrame(JJ),
          cancelFrame: JJ => {
            cancelAnimationFrame(JJ)
          },
          onRenderFailed: aJ,
          onFatal: (JJ, cJ) => {
            console.error(`${HJ} the previews stopped: renderer error ${JJ} (detail ${cJ})`)
          }
        }
      }()), lJ
    }
    var cc = ZJ(523),
      Zc = ZJ(37623),
      Fc = ZJ(2778);
    const Uc = {
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
    const ec = "[bloxd-previews]",
      Xc = new Uint32Array(5);

    function Ac(JJ) {
      return cc.p.indexOf(JJ)
    }
    const qc = new WeakSet;

    function jc(JJ) {
      const cJ = (0, Zc.c)(JJ),
        ZJ = null === cJ ? -1 : Yc(cJ);
      return -1 !== ZJ ? ZJ : (qc.has(JJ) || (qc.add(JJ), console.warn(`${ec} an animation the previews' table lacks: the mob idles instead`)), -1)
    }

    function Yc(JJ) {
      var cJ;
      return null !== (cJ = Uc[JJ]) && void 0 !== cJ ? cJ : -1
    }

    function hc(JJ, cJ) {
      const {
        canvas: ZJ
      } = cJ;
      ZJ.style.width = "100%", ZJ.style.height = "100%", ZJ.style.display = "block", JJ.appendChild(ZJ)
    }

    function Dc(JJ) {
      const cJ = JJ.getBoundingClientRect();
      return [cJ.width, cJ.height]
    }
    class sc {
      constructor(JJ, cJ) {
        this.preview = JJ, this.showView = cJ
      }
      show(JJ) {
        this.showView(this.preview, JJ)
      }
      resize(JJ, cJ) {
        this.preview.resize(JJ, cJ)
      }
      close() {
        this.preview.close()
      }
    }
    class nc {
      constructor(JJ) {
        this.preview = JJ, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.detachControls = void 0, this.detachControls = function(JJ) {
          const {
            canvas: cJ
          } = JJ;
          let ZJ = null;
          const FJ = JJ => {
              var FJ;
              ZJ = {
                pointer: JJ.pointerId,
                x: JJ.clientX,
                y: JJ.clientY
              }, null === (FJ = cJ.setPointerCapture) || void 0 === FJ || FJ.call(cJ, JJ.pointerId)
            },
            UJ = cJ => {
              var FJ;
              const UJ = JJ.orbit;
              if ((null === (FJ = ZJ) || void 0 === FJ ? void 0 : FJ.pointer) !== cJ.pointerId || null === UJ) return;
              const eJ = cJ.clientX - ZJ.x,
                XJ = cJ.clientY - ZJ.y;
              ZJ = {
                ...ZJ,
                x: cJ.clientX,
                y: cJ.clientY
              }, JJ.setOrbit({
                alpha: UJ.alpha - .01 * eJ,
                beta: Math.min(Math.PI - .01, Math.max(.01, UJ.beta - .01 * XJ)),
                radius: UJ.radius
              })
            },
            eJ = JJ => {
              var cJ;
              (null === (cJ = ZJ) || void 0 === cJ ? void 0 : cJ.pointer) === JJ.pointerId && (ZJ = null)
            },
            XJ = cJ => {
              const ZJ = JJ.orbit;
              if (null === ZJ) return;
              cJ.preventDefault();
              const FJ = cJ.deltaY * (cJ.deltaMode === WheelEvent.DOM_DELTA_LINE ? 40 : cJ.deltaMode === WheelEvent.DOM_DELTA_PAGE ? 800 : 1),
                UJ = Math.min(100, Math.max(5, ZJ.radius + .08 * FJ));
              JJ.setOrbit({
                ...ZJ,
                radius: UJ
              })
            };
          return cJ.style.touchAction = "none", cJ.addEventListener("pointerdown", FJ), cJ.addEventListener("pointermove", UJ), cJ.addEventListener("pointerup", eJ), cJ.addEventListener("pointercancel", eJ), cJ.addEventListener("wheel", XJ, {
            passive: !1
          }), () => {
            cJ.removeEventListener("pointerdown", FJ), cJ.removeEventListener("pointermove", UJ), cJ.removeEventListener("pointerup", eJ), cJ.removeEventListener("pointercancel", eJ), cJ.removeEventListener("wheel", XJ)
          }
        }(JJ), this.dev = {
          setCamera: cJ => {
            let {
              yaw: ZJ,
              pitch: FJ,
              radius: UJ,
              target: eJ
            } = cJ;
            eJ && console.warn(`${ec} setCamera: target is noa's character preview only`);
            const XJ = JJ.orbit;
            null !== XJ && JJ.setOrbit({
              alpha: ZJ,
              beta: FJ,
              radius: null !== UJ && void 0 !== UJ ? UJ : XJ.radius
            })
          },
          canvas: () => JJ.canvas,
          isolateHead: () => {
            console.warn(`${ec} isolateHead: noa's character preview only`)
          }
        }, this.apply(), this.ready = JJ.untilSettled().then((() => {
          if (JJ.isStopped) throw new Error(`${ec} the previews stopped before the character drew`);
          this.built = !0
        }))
      }
      isReady() {
        return this.built && !this.preview.isClosed
      }
      setCosmetic(JJ, cJ) {
        this.cosmetics[JJ] = cJ, this.apply()
      }
      playEmote(JJ) {
        null === JJ || JJ !== this.emote ? (this.emote = JJ, this.apply()) : this.preview.replay()
      }
      untilDrawn(JJ) {
        return this.preview.untilSettled()
      }
      resetCamera() {}
      resize(JJ, cJ) {
        this.preview.resize(JJ, cJ)
      }
      close() {
        this.detachControls(), this.preview.close()
      }
      apply() {
        var JJ;
        this.preview.setPlayer(JSON.stringify(this.cosmetics), Xc, null === (JJ = this.emote) ? -1 : Yc(JJ))
      }
    }

    function Gc(JJ, cJ) {
      let {
        mobType: ZJ,
        variation: FJ,
        animation: UJ
      } = cJ;
      JJ.setMob(Ac(ZJ), null !== FJ && void 0 !== FJ ? FJ : "", 1, jc(UJ))
    }

    function fc(JJ, cJ) {
      let {
        mobType: ZJ,
        variation: FJ,
        metaInfo: UJ,
        tamed: eJ
      } = cJ;
      JJ.setPet(Ac(ZJ), FJ, UJ, eJ)
    }
    const xc = {
      aimed: .533 / 1.15 * 1.1,
      ready: .16 / .85 * 1.1
    };
    class rc {
      constructor(JJ, cJ, ZJ, FJ) {
        this.preview = null, this.closed = !1, this.figure = null, this.shown = !1, this.order = "", this.span = {
          left: 0,
          width: 0
        }, this.lineup = [0, 0], this.given = null, this.loaded = !1, JJ(ZJ.width, FJ[1], FJ).then((JJ => {
          if (this.closed) return void JJ.close();
          const {
            style: ZJ
          } = JJ.canvas;
          ZJ.position = "absolute", ZJ.top = "0", ZJ.visibility = "hidden", hc(cJ, JJ), this.preview = JJ, this.apply()
        })).catch((JJ => {
          console.error(`${ec} couldn't open a lineup figure`, JJ)
        }))
      }
      update(JJ, cJ, ZJ, FJ, UJ) {
        this.figure = JJ, this.shown = cJ, this.order = ZJ, this.span = FJ, this.lineup = UJ, this.apply()
      }
      close() {
        var JJ;
        this.closed = !0, null === (JJ = this.preview) || void 0 === JJ || JJ.close(), this.preview = null
      }
      apply() {
        const {
          preview: JJ,
          figure: cJ,
          lineup: ZJ
        } = this;
        if (null === JJ || null === cJ) return;
        if (this.given !== cJ) {
          var FJ;
          this.given = cJ, this.loaded = !1;
          const ZJ = null === cJ.cV ? 0 : null !== (FJ = (0, Fc.c)(cJ.cV)) && void 0 !== FJ ? FJ : 0;
          JJ.setFigure(function(JJ) {
            return JSON.stringify(Object.fromEntries(JJ.cosmetics))
          }(cJ), ZJ, jc(cJ.animation), cJ.size), JJ.untilSettled().then((() => {
            this.given === cJ && (this.loaded = !0, this.apply())
          }))
        }
        const {
          left: UJ,
          width: eJ
        } = this.span;
        JJ.resize(eJ, ZJ[1], ZJ);
        const {
          style: XJ
        } = JJ.canvas;
        XJ.left = `${UJ}px`, XJ.width = `${eJ}px`, XJ.zIndex = this.order, XJ.visibility = this.shown && this.loaded ? "visible" : "hidden"
      }
    }
    class vc {
      constructor(JJ, cJ) {
        this.open = cJ, this.layer = void 0, this.figures = [], this.view = {
          figures: [],
          shown: []
        }, this.size = void 0, this.size = Dc(JJ), this.layer = document.createElement("div");
        const {
          style: ZJ
        } = this.layer;
        ZJ.position = "relative", ZJ.isolation = "isolate", ZJ.overflow = "hidden", ZJ.width = "100%", ZJ.height = "100%", ZJ.pointerEvents = "none", JJ.appendChild(this.layer)
      }
      show(JJ) {
        this.view = JJ, this.place()
      }
      resize(JJ, cJ) {
        this.size = [JJ, cJ], this.place()
      }
      close() {
        for (const JJ of this.figures) JJ.close();
        this.figures = [], this.layer.remove()
      }
      place() {
        const {
          figures: JJ,
          shown: cJ
        } = this.view;
        for (const FJ of this.figures.splice(JJ.length)) FJ.close();
        const {
          size: ZJ
        } = this;
        JJ.forEach(((FJ, UJ) => {
          var eJ;
          const XJ = function(JJ, cJ, ZJ, FJ) {
            let [UJ, eJ] = FJ;
            const XJ = (JJ + .5) * UJ / cJ,
              AJ = Math.min(Math.max(UJ / cJ, 2 * ZJ * eJ), 2 * Math.max(XJ, UJ - XJ));
            return {
              left: XJ - AJ / 2,
              width: AJ
            }
          }(UJ, JJ.length, function(JJ) {
            let {
              animation: cJ,
              size: ZJ
            } = JJ;
            const {
              aimed: FJ,
              ready: UJ
            } = xc;
            return (jc(cJ) === Uc.gunAimed ? FJ : UJ) * ZJ
          }(FJ), ZJ);
          this.figures[UJ] ??= new rc(this.open, this.layer, XJ, ZJ), this.figures[UJ].update(FJ, null !== (eJ = cJ[UJ]) && void 0 !== eJ && eJ, function(JJ, cJ) {
            return String(Math.round(1e3 * JJ) + cJ)
          }(FJ.size, UJ), XJ, ZJ)
        }))
      }
    }
    const mc = {
      player: pJ,
      store: dJ
    };
    class Qc {
      constructor(JJ) {
        this.page = JJ
      }
      async openMob(JJ) {
        return new sc(await this.open(JJ, kJ), Gc)
      }
      async openPet(JJ) {
        return new sc(await this.open(JJ, kJ), fc)
      }
      openMobLineup(JJ) {
        return new vc(JJ, ((JJ, cJ, ZJ) => this.page.openPreview(kJ, JJ, cJ, ZJ)))
      }
      async openCharacter(JJ, cJ) {
        return new nc(await this.open(JJ, mc[cJ]))
      }
      async open(JJ, cJ) {
        const [ZJ, FJ] = Dc(JJ), UJ = await this.page.openPreview(cJ, ZJ, FJ);
        return hc(JJ, UJ), UJ
      }
    }
  },
  35781: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      A: () => nJ,
      C: () => GJ,
      F: () => xJ,
      c: () => FJ,
      e: () => UJ,
      f: () => DJ,
      j: () => fJ,
      n: () => YJ,
      o: () => rJ,
      q: () => qJ,
      s: () => jJ,
      w: () => sJ
    });
    const FJ = [{
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

    function UJ(JJ, cJ) {
      const {
        numLines: ZJ,
        charsPerLine: UJ
      } = FJ[cJ];
      return vJ(JJ, ZJ, UJ, !1)
    }
    const eJ = 7 / 8,
      XJ = .25,
      AJ = 8;

    function qJ(JJ, cJ) {
      return {
        width: Math.min(JJ, AJ) - 2 * XJ,
        height: Math.min(cJ, AJ) - 2 * XJ
      }
    }

    function jJ(JJ, cJ, ZJ) {
      const UJ = qJ(JJ, cJ),
        {
          numLines: XJ,
          charsPerLine: AJ
        } = FJ[ZJ];
      return {
        numLines: Math.max(1, Math.floor(XJ / eJ * UJ.height)),
        charsPerLine: Math.max(1, Math.floor(AJ * UJ.width))
      }
    }

    function YJ(JJ, cJ, ZJ, FJ) {
      const {
        numLines: UJ,
        charsPerLine: eJ
      } = jJ(ZJ, FJ, cJ);
      return vJ(JJ, UJ, eJ, !1)
    }
    const hJ = 32e3;

    function DJ(JJ) {
      return JJ.slice(0, hJ)
    }
    const sJ = 512e3,
      nJ = 64,
      GJ = sJ;

    function fJ(JJ, cJ) {
      const ZJ = Math.max(0, GJ - cJ),
        FJ = Math.min(sJ, ZJ);
      return JJ.slice(0, FJ)
    }
    const xJ = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      sY: {
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

    function rJ(JJ, cJ) {
      const {
        numLines: ZJ,
        charsPerLine: FJ
      } = xJ[cJ];
      return vJ(JJ, ZJ, FJ, !1)
    }

    function vJ(JJ, cJ, ZJ, FJ, UJ) {
      (UJ || FJ) && (JJ = JJ.slice(0, null !== UJ && void 0 !== UJ ? UJ : cJ * ZJ));
      const eJ = JJ.split("\n");
      if (eJ.length > cJ && eJ.splice(cJ, eJ.length - cJ), !FJ)
        for (let XJ = 0; XJ < eJ.length; XJ++) {
          const JJ = eJ[XJ];
          JJ.length > ZJ && (eJ[XJ] = JJ.substring(0, ZJ), eJ.length < cJ && eJ.splice(XJ + 1, 0, JJ.substring(ZJ)))
        }
      return eJ.join("\n")
    }
  },
  41955: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/builtInAnimations.anim.36d8b13aae7e273ec8e8.gz"
  },
  41959: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/previewAnimations.dat.24d2343c38c8f9b3fb85.gz"
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);