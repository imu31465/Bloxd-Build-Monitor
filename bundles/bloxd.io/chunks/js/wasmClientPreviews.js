export const id = 56;
export const ids = [56];
export const modules = {
  38186: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => pU,
      e: () => EU
    });
    const tU = new WeakMap;

    function pU(UU, RU) {
      return tU.set(UU, RU), UU
    }

    function EU(UU) {
      var RU;
      return null !== (RU = tU.get(UU)) && void 0 !== RU ? RU : null
    }
  },
  38210: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => TU
    });
    var tU = gU(1217);

    function pU(UU) {
      const RU = /(\d*\.?\d+)px/.exec(UU);
      return RU ? Number(RU[1]) : null
    }

    function EU(UU) {
      return UU.split(/[\s,]+/).pop()
    }
    let PU = !1;
    const TU = {
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
      drawText: function(UU, RU, tU, TU, qU, KU) {
        if (qU <= 0 || KU <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: cU,
          fontVariant: GU,
          fontWeight: jU,
          fontSize: uU,
          font: CU
        } = this, hU = [cU, GU, jU, `${uU}px`, CU].filter(Boolean).join(" "), QU = [
          [jU, `${uU}px`, EU(CU)].filter(Boolean).join(" "), `${uU}px sans-serif`
        ], eU = UU.font, WU = function(UU, RU, gU) {
          for (const tU of RU) {
            UU.font = tU;
            const RU = pU(UU.font),
              PU = EU(tU);
            if (null !== RU && Math.abs(RU - gU) <= .5 && UU.font.toLowerCase().includes(PU.toLowerCase())) return tU
          }
          return null
        }(UU, [hU, ...QU], uU);
        WU !== hU && function(UU, RU, tU) {
          PU || (PU = !0, Promise.resolve().then((() => gU(1064))).then((gU => {
            let {
              Kh: pU
            } = gU;
            pU(new Error("A canvas didn't take canvasTxt's font"), {
              font: UU,
              xu: RU,
              drawnWith: null !== tU && void 0 !== tU ? tU : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(hU, eU, WU);
        const fU = pU(UU.font);
        if (null === WU && null !== fU && fU > 0) {
          const gU = uU / fU;
          UU.save();
          try {
            return UU.scale(gU, gU), {
              height: this.drawLines(UU, RU, tU / gU, TU / gU, qU / gU, KU / gU, fU).height * gU
            }
          } finally {
            UU.restore()
          }
        }
        return this.drawLines(UU, RU, tU, TU, qU, KU, uU)
      },
      drawLines: function(UU, RU, gU, pU, EU, PU, TU) {
        const qU = gU + EU,
          KU = pU + PU;
        let cU, GU = pU + PU / 2 + TU / 2;
        "right" === this.align ? (cU = qU, UU.textAlign = "right") : "left" === this.align ? (cU = gU, UU.textAlign = "left") : (cU = gU + EU / 2, UU.textAlign = "center");
        for (const tU of RU) {
          UU.measureText(tU).width >= EU && (RU = RU.replace(tU, ""))
        }
        RU = (0, tU.T)(RU);
        const jU = [],
          uU = RU.split("\n"),
          CU = this.justify ? UU.measureText("\u200a").width : 0;
        uU.forEach((RU => {
          let gU = UU.measureText(RU).width;
          if (gU <= EU) jU.push(RU);
          else {
            let tU = RU;
            const pU = EU;
            let PU, TU, qU;
            for (gU = UU.measureText(tU).width; gU > pU;) {
              for (PU = 0, TU = 0, qU = ""; TU < pU;) PU++, qU = tU.substr(0, PU), TU = UU.measureText(qU).width;
              PU--, qU = qU.substr(0, PU);
              const RU = PU;
              if (" " !== tU.substr(PU, 1)) {
                for (;
                  " " !== tU.substr(PU, 1) && 0 !== PU;) PU--;
                0 === PU && (PU = RU), qU = tU.substr(0, PU)
              }
              qU = this.justify ? this.justifyLine(UU, qU, CU, "\u200a", EU) : qU, tU = tU.substr(PU), gU = UU.measureText(tU).width, jU.push(qU)
            }
            gU > 0 && jU.push(tU)
          }
        }));
        const hU = this.lineHeight ? this.lineHeight : this.getTextHeight(UU, RU),
          QU = hU * (jU.length - 1),
          eU = QU / 2;
        let WU = pU;
        "top" === this.vAlign ? GU = pU + TU : "bottom" === this.vAlign ? (GU = KU - QU, WU = KU) : (WU = pU + PU / 2, GU -= eU), jU.forEach((RU => {
          RU = RU.trim(), UU.fillText(RU, cU, GU), GU += hU
        })), this.debug && (UU.lineWidth = 3, UU.strokeStyle = "#00909e", UU.strokeRect(gU, pU, EU, PU), UU.lineWidth = 2, UU.strokeStyle = "#f6d743", UU.beginPath(), UU.moveTo(cU, pU), UU.lineTo(cU, KU), UU.stroke(), UU.strokeStyle = "#ff6363", UU.beginPath(), UU.moveTo(gU, WU), UU.lineTo(qU, WU), UU.stroke());
        return {
          height: QU + hU
        }
      },
      getTextHeight: function(UU, RU) {
        const gU = UU.textBaseline;
        UU.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: tU
        } = UU.measureText(RU);
        return UU.textBaseline = gU, tU
      },
      justifyLine: function(UU, RU, gU, tU, pU) {
        const EU = RU.trim(),
          PU = UU.measureText(EU).width,
          TU = EU.split(/\s+/).length - 1,
          qU = Math.floor((pU - PU) / gU);
        if (TU <= 0 || qU <= 0) return EU;
        const KU = Math.floor(qU / TU);
        let cU = qU - TU * KU,
          GU = [];
        for (let jU = 0; jU < KU; jU++) GU.push(tU);
        GU = GU.join("");
        return EU.replace(/\s+/g, (UU => {
          const RU = cU > 0 ? GU + tU : GU;
          return cU--, UU + RU
        }))
      }
    }
  },
  38219: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => hU,
      f: () => CU,
      g: () => jU,
      k: () => cU,
      o: () => GU
    });
    var tU = gU(3937),
      pU = gU(311);
    const EU = 1024,
      PU = 1536,
      TU = 2 * tU.m + 1,
      qU = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      KU = 1.5;

    function cU(UU, RU, gU) {
      if ("string" !== typeof UU) return RU;
      try {
        const gU = JSON.parse(UU);
        return gU && "object" === typeof gU ? gU : RU
      } catch (tU) {
        return void 0 !== gU && console.error(`Couldn't parse ${gU}`, tU), RU
      }
    }

    function GU(UU) {
      return cU(UU, null, "a leaderboard's rows")
    }

    function jU(UU, RU) {
      var gU, tU;
      return null !== RU && void 0 !== RU ? RU : {
        status: null !== (gU = UU.status) && void 0 !== gU ? gU : "loading",
        entries: null !== (tU = UU.entries) && void 0 !== tU ? tU : []
      }
    }

    function uU(UU, RU) {
      return "number" === typeof UU && Number.isFinite(UU) && UU > 0 ? UU : RU
    }

    function CU(UU, RU) {
      const gU = uU(UU.size, 1);
      let tU = uU(UU.width, uU(2.5 * gU, 2.5)),
        pU = uU(UU.height, uU(3.75 * gU, 3.75));
      Number.isFinite(EU * pU / tU) && Number.isFinite(PU * tU / pU) || (tU = 2.5, pU = 3.75);
      const TU = pU / tU,
        qU = Math.max(1, Math.min(EU, RU / TU));
      return {
        width: tU,
        height: pU,
        layoutWidth: Math.max(EU, PU / TU),
        layoutHeight: Math.max(PU, EU * TU),
        pixelWidth: Math.round(qU),
        pixelHeight: Math.round(Math.max(1, Math.min(RU, qU * TU)))
      }
    }

    function hU(UU, RU, gU, PU, cU, GU) {
      UU.setTransform(1, 0, 0, 1, 0, 0), UU.fillStyle = pU.N.defaultNameTagBackground, UU.fillRect(0, 0, RU, gU), UU.scale(RU / PU.layoutWidth, gU / PU.layoutHeight), UU.translate((PU.layoutWidth - EU) / 2, 0),
        function(UU, RU, gU, EU) {
          var PU, cU, GU, jU;
          const {
            top: uU,
            around: CU,
            showPlayerText: hU,
            localPlayerDbId: WU
          } = gU, {
            whiteUiText: fU,
            grayUiText: xU,
            yellowUiText: mU
          } = pU.N;
          UU.textBaseline = "middle";
          const IU = function(RU, gU, tU, pU, EU, PU) {
              let TU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              UU.font = `bold ${pU}px 'Jetbrains Mono', monospace`, UU.fillStyle = EU, UU.textAlign = TU;
              let qU = RU.replace(/[\r\n\t]/g, " ");
              if (UU.measureText(qU).width > PU) {
                for (; qU.length > 0 && UU.measureText(`${qU}\u2026`).width > PU;) qU = qU.slice(0, -1);
                qU += "\u2026"
              }
              UU.fillText(qU, gU, tU)
            },
            JU = RU => {
              UU.fillStyle = fU, UU.globalAlpha = .15, UU.fillRect(24, RU, 976, 2), UU.globalAlpha = 1
            },
            wU = null === WU ? null : (0, pU.pc)(WU),
            nU = UU => null !== wU && UU.playerHash === wU,
            bU = QU(uU.entries, tU.p),
            oU = "ready" === uU.status && bU.length > 0,
            ZU = null === CU ? [] : QU(CU.entries, TU),
            aU = bU.some(nU),
            YU = null === CU ? null : function(UU) {
              const RU = UU;
              if (!RU || !Number.isFinite(RU.rank) || !Number.isFinite(RU.tied) || !Number.isFinite(RU.total)) return null;
              return RU
            }(CU.standing),
            BU = ZU.find(nU),
            VU = bU.find(nU),
            rU = null === YU || void 0 === BU ? null : {
              value: BU.value,
              rank: YU.rank
            },
            XU = eU(bU, void 0 === VU || VU.value === (null === rU || void 0 === rU ? void 0 : rU.value) ? rU : null),
            vU = eU(ZU, rU),
            dU = (UU, RU) => {
              const gU = UU.findIndex(nU);
              return gU >= 0 ? RU[gU] : null
            },
            HU = null !== (PU = null !== (cU = null === YU || void 0 === YU ? void 0 : YU.rank) && void 0 !== cU ? cU : dU(ZU, vU)) && void 0 !== PU ? PU : dU(bU, XU);
          UU.font = "bold 34px 'Jetbrains Mono', monospace";
          const SU = [...oU ? XU : [], ...aU ? [] : vU],
            sU = Math.min(280, Math.max(0, ...SU.map((RU => UU.measureText(qU.format(RU)).width)))),
            yU = sU <= 80,
            kU = yU ? 80 : 32 + sU,
            FU = yU ? 148 : kU + 28,
            iU = 660 - FU;
          IU(`TOP ${tU.p}  /  ALL TIME`, 24, 52, 28, xU, 976), IU(hU ? String(null !== (GU = RU.title) && void 0 !== GU ? GU : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, fU, 976), IU("RANK", 32, 174, 28, xU, FU - 40), IU("PLAYER", FU, 174, 28, xU, iU), IU(hU ? String(null !== (jU = RU.scoreLabel) && void 0 !== jU ? jU : "Score").slice(0, 24) : "Score", 992, 174, 28, xU, 304, "right"), JU(202);
          const AU = (EU - 232) / (tU.p + KU + TU),
            zU = 208 + tU.p * AU,
            MU = zU + KU * AU,
            DU = (RU, gU, tU, pU) => {
              const EU = nU(RU);
              UU.fillStyle = EU ? mU : fU, UU.globalAlpha = EU ? .15 : pU ? .035 : 0, UU.fillRect(24, tU - AU / 2 + 1, 976, AU - 2), UU.globalAlpha = 1;
              const PU = EU ? mU : fU;
              IU(qU.format(gU), kU, tU, 34, PU, yU ? 80 : sU, yU ? "center" : "right"), IU(hU ? String(RU.name).slice(0, 64) : "Player", FU, tU, 34, PU, iU);
              const TU = qU.format(RU.value);
              IU(UU.measureText(TU).width > 304 ? RU.value.toExponential(6) : TU, 992, tU, 34, PU, 304, "right")
            };
          if (oU)
            for (const [tU, pU] of bU.entries()) DU(pU, XU[tU], 208 + (tU + .5) * AU, tU % 2 === 0);
          else {
            const UU = "error" === uU.status,
              RU = UU ? "Couldn't load leaderboard" : "ready" === uU.status ? "No scores yet" : "Loading leaderboard\u2026",
              gU = UU ? "Trying again shortly" : "ready" === uU.status ? "Be the first on the board!" : "Fetching the top players",
              tU = (208 + zU) / 2;
            IU(RU, 512, tU - 28, 40, UU ? pU.N.redUiText : fU, 960, "center"), IU(gU, 512, tU + 27, 30, xU, 960, "center")
          }
          const LU = zU + KU * AU / 2;
          if (null === HU) JU(LU);
          else {
            const RU = null === YU ? 0 : YU.tied - 1,
              gU = `YOUR RANK #${qU.format(HU)}${null===YU?"":` of ${qU.format(YU.total)}`}`;
            UU.font = "bold 36px 'Jetbrains Mono', monospace";
            const tU = Math.max(20, Math.min(36, Math.floor(34560 / UU.measureText(gU).width)));
            IU(gU, 512, LU - (RU > 0 ? 15 : 0), tU, mU, 960, "center"), RU > 0 && IU(`Tied with ${qU.format(RU)} other${1===RU?"":"s"}`, 512, LU + 24, 24, xU, 960, "center")
          }
          if (null === CU) return;
          const NU = MU + TU * AU / 2;
          if (aU) IU(`You're in the top ${tU.p}!`, 512, NU, 40, mU, 960, "center");
          else if (0 === ZU.length) IU("You're not on this board yet", 512, NU, 34, xU, 960, "center");
          else
            for (const [tU, pU] of ZU.entries()) DU(pU, vU[tU], MU + (tU + .5) * AU, tU % 2 === 0)
        }(UU, cU, GU, PU.layoutHeight)
    }

    function QU(UU, RU) {
      return Array.isArray(UU) ? UU.slice(0, RU).filter((UU => UU && Number.isFinite(UU.rank) && Number.isFinite(UU.value))) : []
    }

    function eU(UU, RU) {
      const gU = [];
      let tU = !1;
      return UU.forEach(((pU, EU) => {
        if (null !== RU && pU.value === RU.value) return void gU.push(RU.rank);
        const PU = EU > 0 && pU.value === UU[EU - 1].value;
        PU || (tU = 0 === EU && 1 !== pU.rank), gU.push(PU && !tU ? gU[EU - 1] : pU.rank)
      })), gU
    }
  },
  38425: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => pU,
      f: () => EU
    });
    const tU = 32;

    function pU(UU) {
      return Array.from(UU).length
    }

    function EU(UU) {
      const RU = [""];
      let gU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        pU = "";
      const EU = () => {
        RU.push(""), gU = 0, pU = ""
      };
      for (const PU of UU.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(PU)) EU();
        else if (/^\s+$/.test(PU)) pU += PU;
      else if (PU.length > 0) {
        const UU = Array.from(PU);
        gU > 0 && gU + pU.length + UU.length > tU && EU(), RU[RU.length - 1] += pU, gU += pU.length, pU = "";
        for (const pU of UU) gU >= tU && EU(), RU[RU.length - 1] += pU, gU++
      }
      return RU[RU.length - 1] += pU, RU
    }
  },
  42614: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      WasmPreviewHost: () => mR,
      pageBuiltInAnimationPack: () => jU,
      pagePreviews: () => UR,
      previewModule: () => AU
    });
    var tU = gU(3377),
      pU = gU(587);
    const EU = "[bloxd-wasm-client]";

    function PU(UU) {
      const RU = {
        wasm: "unknown",
        client: String(pU.d)
      };
      try {
        var gU;
        RU.wasm = null !== (gU = null === UU || void 0 === UU ? void 0 : UU.jG()) && void 0 !== gU ? gU : RU.wasm
      } catch {}
      return RU
    }
    async function TU(UU) {
      if (UU.length < 2 || 31 !== UU[0] || 139 !== UU[1]) return UU;
      if ("undefined" === typeof DecompressionStream) {
        const {
          ungzip: RU
        } = await gU.e(218).then((() => gU(36497)));
        return RU(UU)
      }
      const RU = new Blob([UU]).stream().pipeThrough(new DecompressionStream("gzip"));
      return new Uint8Array(await new Response(RU).arrayBuffer())
    }

    function qU(UU, RU, tU, pU) {
      Promise.resolve().then((() => gU(40319))).then((gU => {
        let {
          reportDataLoadFailure: EU
        } = gU;
        EU(UU, RU, tU, pU)
      }), (RU => {
        console.warn(`${EU} ${UU} didn't load, and the report couldn't be sent`, tU.error, RU)
      }))
    }
    const KU = [3e4, 12e4, 3e5];
    class cU {
      constructor(UU) {
        this.deps = UU, this.loading = null, this.reported = !1, this.retries = 0, this.resolveSet = () => {}, this.set = new Promise((UU => {
          this.resolveSet = UU
        }))
      }
      provide(UU) {
        return this.loading ??= this.load(UU), this.loading
      }
      whenSet() {
        return this.set
      }
      async load(UU) {
        const RU = PU(UU),
          gU = await async function(UU, RU) {
            let gU;
            try {
              gU = await UU()
            } catch (tU) {
              return {
                stage: "fetch",
                error: tU
              }
            }
            try {
              return RU(gU) ? null : {
                stage: "decode",
                error: null
              }
            } catch (tU) {
              return {
                stage: "decode",
                error: tU
              }
            }
          }((() => this.deps.fetch()), (RU => {
            const gU = UU.ApU(RU);
            return gU && this.resolveSet(RU), gU
          }));
        if (null !== gU) {
          if ("fetch" === gU.stage) {
            this.loading = null;
            const RU = KU[this.retries++];
            void 0 !== RU && this.deps.later((() => {
              this.provide(UU)
            }), RU)
          }
          this.reported || (this.reported = !0, this.deps.onFailed(gU, RU))
        }
      }
    }
    let GU = null;

    function jU() {
      return GU ??= new cU({
        fetch: async () => TU(await (0, tU.H)(uU(), {
          priority: "low"
        })),
        onFailed: (UU, RU) => {
          qU("builtInAnimations", uU(), UU, RU)
        },
        later: (UU, RU) => {
          setTimeout(UU, RU)
        }
      }), GU
    }

    function uU() {
      return gU(42623)
    }
    var CU = gU(3372),
      hU = gU(35912),
      QU = gU(40150),
      eU = gU(1196),
      WU = gU(291),
      fU = gU(40166),
      xU = gU(40402),
      mU = (gU(40186), gU(40345)),
      IU = gU(40352),
      JU = gU(40358),
      wU = gU(40177),
      nU = gU(40421),
      bU = gU(40425),
      oU = gU(40201),
      ZU = gU(40285),
      aU = gU(40291),
      YU = gU(40415),
      BU = gU(41930),
      VU = gU(35889);
    const rU = "[bloxd-previews]",
      XU = 4e5,
      vU = 0,
      dU = 1,
      HU = 2,
      SU = 1,
      sU = 2,
      yU = 3,
      kU = 0,
      FU = 1,
      iU = 2;

    function AU(UU) {
      const RU = UU,
        gU = (0, fU.E)(UU),
        tU = (0, fU.h)(UU);
      return null !== gU && null !== tU && "function" === typeof RU.kpU && "function" === typeof RU.FpU && "function" === typeof RU.ipU ? RU : null
    }

    function zU(UU, RU, gU) {
      let [tU, pU] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [UU, RU], EU = Math.min(Number.isFinite(gU) && gU > 0 ? gU : 1, 2);
      const PU = Math.max(0, tU, UU) * Math.max(0, pU, RU) * EU * EU;
      return PU > XU && (EU *= Math.sqrt(XU / PU)), [Math.max(1, Math.floor(Math.max(0, UU) * EU)), Math.max(1, Math.floor(Math.max(0, RU) * EU))]
    }

    function MU() {
      return gU(42625)
    }
    async function DU(UU, RU) {
      "lost" === UU && (0, oU.z)();
      const tU = await (0, oU.P)();
      if (null === tU || (0, fU.k)(tU) || (0, oU.b)()) return;
      const pU = "webgpu" === tU.backend;
      if (!pU && "lost" !== UU) return;
      const EU = pU ? (0, fU.M)(UU) : null;
      if (null !== EU) {
        const gU = `WebGPU failed at home (${UU}${void 0===RU?"":`: ${RU instanceof Error?RU.message:(0,VU.j)(RU)}`}) and ${EU}`;
        return console.warn(`${rU} ${gU}: the previews stop`, null !== RU && void 0 !== RU ? RU : ""), void(0, oU.r)(gU)
      }(0, oU.o)();
      try {
        await async function(UU, RU, tU) {
          var pU;
          let {
            backend: EU,
            adapter: TU
          } = UU;
          const qU = (0, CU.L)(),
            {
              flushCrashReports: KU,
              reportRenderReload: cU
            } = await Promise.resolve().then((() => gU(40319)));
          cU(EU, "start_failed" === RU ? 0 : 1, PU(qU ? (0, CU.A)() : null), {
            cause: RU,
            error: "lost" === RU && null !== (pU = (0, fU.S)(qU ? (0, fU.E)((0, CU.A)()) : null)) && void 0 !== pU ? pU : tU,
            context: {
              adapter: TU,
              boundAtMs: "start_failed" === RU ? null : (0, oU.L)(),
              indirectHangs: (0, oU.A)()
            }
          }), await KU(ZU.b)
        }(tU, UU, RU)
      } catch (TU) {
        console.warn(`${rU} ${tU.backend} failed at home (${UU}), and its report couldn't be sent`, TU)
      }(0, ZU.j)()
    }
    async function LU() {
      if (!(0, CU.L)()) {
        const UU = await (0, oU.P)();
        if (null === UU || (0, fU.k)(UU)) return null;
        if (await (0, hU.f)(await UU.load(), QU.d), !(0, CU.L)()) return null
      }
      return AU((0, CU.A)())
    }
    class NU {
      constructor(UU, RU, gU, tU, pU, EU) {
        this.page = UU, this.host = RU, this.id = gU, this.canvas = tU, this.size = pU, this.models = void 0, this.images = void 0, this.write = void 0, this.outcomes = [], this.closed = !1, this.quiet = 0, this.settled = [];
        const PU = {
            ...EU.images,
            glbUrl: UU => {
              var RU;
              return null !== (RU = this.models.drawnUrl(UU)) && void 0 !== RU ? RU : EU.images.glbUrl(UU)
            }
          },
          TU = RU => UU.modelFile(RU);
        this.images = new xU.f(PU, (UU => {
          console.warn(`${rU} image ${UU.key.kind}:${UU.key.index}:${UU.key.word} failed`, UU.error)
        }), {
          fetchFile: TU,
          fetchImage: RU => UU.imageFile(RU)
        }), UU.startModels(), this.models = new mU.h(EU.files, ((RU, gU) => UU.buildModel(RU, gU)), (UU => {
          console.warn(`${rU} model file ${UU.file} (${UU.url}) failed`, UU.error)
        }), {
          fetchFile: TU,
          onWritten: (UU, RU) => {
            this.images.glbWritten(UU, RU)
          },
          onTaken: (UU, RU) => {
            this.images.glbTaken(UU, RU)
          }
        }), this.write = (UU, RU, gU) => {
          if (this.closed) return !0;
          if (UU === mU.e) {
            const UU = new DataView(gU.buffer, gU.byteOffset, JU.e),
              tU = UU.getUint32(0, !0),
              pU = UU.getUint32(JU.g, !0),
              EU = this.page.hostCall(iU, (() => this.host.MEU(this.id, tU, RU, gU.subarray(JU.e))));
            return this.outcomes.push([pU, EU]), !0
          }
          return UU === xU.b && (this.page.hostCall(void 0, (() => {
            this.host.LEU(this.id, gU)
          })), !0)
        }
      }
      get isClosed() {
        return this.closed
      }
      get isStopped() {
        return this.page.isStopped
      }
      resize(UU, RU, gU) {
        if (this.closed) return;
        const [tU, pU] = zU(UU, RU, this.page.dpr(), gU);
        tU === this.size[0] && pU === this.size[1] || (this.size = [tU, pU], this.page.hostCall(void 0, (() => {
          this.host.resize(this.id, tU, pU)
        })))
      }
      setMob(UU, RU, gU, tU) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.RPU(this.id, UU, RU, gU, tU))))
      }
      setPet(UU, RU, gU, tU) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.tPU(this.id, UU, RU, gU, tU))))
      }
      setPlayer(UU, RU, gU) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.lEU(this.id, UU, RU, gU))))
      }
      setFigure(UU, RU, gU, tU) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.OEU(this.id, UU, RU, gU, tU))))
      }
      replay() {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.replay(this.id))))
      }
      get orbit() {
        if (this.closed) return null;
        const UU = this.page.hostCall(null, (() => this.host.orbit(this.id)));
        return null === UU || UU.length < 3 ? null : {
          alpha: UU[0],
          beta: UU[1],
          radius: UU[2]
        }
      }
      setOrbit(UU) {
        let {
          alpha: RU,
          beta: gU,
          radius: tU
        } = UU;
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.gPU(this.id, RU, gU, tU)
        }))
      }
      untilSettled() {
        return this.closed || this.page.isStopped ? Promise.resolve() : (this.quiet = 0, new Promise((UU => {
          this.settled.push(UU)
        })))
      }
      packChanged() {
        this.quiet = 0, this.models.refresh(), (0, nU.e)(this.images)
      }
      feed() {
        this.models.drain(this.write);
        for (const [UU, RU] of this.outcomes) {
          const gU = RU === kU ? [] : [RU === FU ? UU : (UU | mU.g) >>> 0];
          this.models.taken(UU, gU)
        }
        this.outcomes.length = 0, this.images.drain(this.write)
      }
      collect(UU) {
        let RU = !1;
        if (UU) {
          const UU = this.host.PPU(this.id);
          for (const RU of UU) this.models.request(RU);
          const gU = this.host.EPU(this.id);
          gU.length > 0 && this.images.onEvent(gU), RU = UU.length > 0 || gU.length > 0
        }
        const gU = this.page.modelsUnavailable ? 0 : this.models.asking + this.models.unanswered,
          tU = RU || gU > 0 || this.images.waiting > 0 || this.images.inFlight > 0;
        this.quiet = tU ? 0 : this.quiet + 1, this.quiet >= 3 && this.resolveSettled()
      }
      close() {
        this.closed || (this.closed = !0, this.page.closePreview(this), this.resolveSettled())
      }
      abandon() {
        this.resolveSettled()
      }
      dispose(UU) {
        this.page.hostCall(void 0, (() => {
          const RU = this.host.close(this.id);
          RU.length > 0 && this.images.onEvent(RU), this.page.isTrapped || UU.ipU(this.id)
        })), this.images.dispose(), this.canvas.remove()
      }
      resolveSettled() {
        const UU = this.settled;
        this.settled = [];
        for (const RU of UU) RU()
      }
    }
    class lU {
      constructor(UU) {
        this.deps = UU, this.module = null, this.host = null, this.opening = null, this.pageCanvas = null, this.samples = 1, this.binding = null, this.sessionEnds = 0, this.lastEndReturned = !0, this.previews = new Map, this.nextId = 1, this.frameId = null, this.stopped = !1, this.loggedErrors = new Set, this.modelsListener = {
          onUnavailable: UU => {
            this.modelsFailed(UU)
          },
          onDecoderFailed: UU => {
            this.loggedErrors.has("modelDecoder") || (this.loggedErrors.add("modelDecoder"), console.warn(`${rU} the Draco decoder didn't load: models waiting on it won't draw`, UU))
          },
          onWorkerLost: UU => {
            this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${rU} a model worker was lost: ${UU}`))
          },
          onModuleRetry: () => {}
        }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.Fu = {
          setShaderPack: (UU, RU, gU, tU, pU) => (this.shaderPackArgs = [UU, RU, gU, tU, pU], this.handOverShaderPack(), !0)
        }, this.frame = UU => {
          this.frameId = null;
          const RU = this.host;
          if (null !== RU && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped) try {
            this.drawFrame(RU, UU)
          } catch (gU) {
            if (!this.stopIfTrapped(gU) && (this.stop(), (0, fU.o)(gU))) return void this.deps.onRenderFailed("frames_refused", gU);
            console.warn(`${rU} the previews stopped: their frame threw`, gU)
          }
        }, UU.pack.onChange((() => {
          this.packChanged()
        })), UU.game.onGameChange((() => {
          this.tellInGame()
        }))
      }
      packChanged() {
        if (!this.stopped)
          for (const UU of this.previews.values()) UU.packChanged()
      }
      dpr() {
        return this.deps.dpr()
      }
      get sessionBound() {
        var UU, RU;
        return null !== (UU = null === (RU = this.host) || void 0 === RU ? void 0 : RU.attached()) && void 0 !== UU && UU
      }
      get open() {
        return this.previews.size
      }
      get frameCostMs() {
        return 0 === this.costs.length ? 0 : this.costs.reduce(((UU, RU) => UU + RU), 0) / this.costs.length
      }
      async bindSession(UU, RU, gU) {
        const tU = this.binding,
          pU = this.sessionEnds;
        try {
          const EU = this.hostOf(UU);
          if (!EU.DEU()) {
            const RU = (0, aU.f)().sampleCount,
              PU = await gU(RU);
            if (this.sessionEnds !== pU) return this.keepRendererOfEndedSession(UU, EU, PU, RU, tU), RU;
            if (!EU.VEU(PU)) throw new Error("the page has a renderer already");
            (0, oU.v)(performance.now()), this.samples = RU, (0, YU.c)((0, fU.h)(UU))
          }
          if (!EU.attach(RU)) throw new Error("the page's renderer is lent to another session");
          return this.samples
        } finally {
          this.binding === tU && this.endBinding()
        }
      }
      keepRendererOfEndedSession(UU, RU, gU, tU, pU) {
        if (!this.lastEndReturned || null !== this.binding && this.binding !== pU) try {
          gU.free()
        } catch (EU) {
          console.warn(`${rU} an ended session's renderer didn't free`, EU)
        } else RU.VEU(gU) && ((0, oU.v)(performance.now()), this.samples = tU, (0, YU.c)(this.registryOf(UU)))
      }
      async beginSession() {
        var UU;
        let RU = () => {};
        const gU = new Promise((UU => {
          RU = UU
        }));
        this.binding = {
          done: gU,
          release: RU
        }, await (null === (UU = this.opening) || void 0 === UU ? void 0 : UU.catch((() => null)));
        const tU = this.pageCanvas;
        return this.pageCanvas = null, tU
      }
      endSession(UU) {
        var RU, gU;
        if (this.sessionEnds++, this.lastEndReturned = UU, this.endBinding(), UU) {
          try {
            var tU;
            null === (tU = this.host) || void 0 === tU || tU.detach()
          } catch (pU) {
            return void console.warn(`${rU} the session's core kept the page's renderer`, pU)
          }!0 === (null === (RU = this.host) || void 0 === RU ? void 0 : RU.attached()) && console.warn(`${rU} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (gU = this.host) || void 0 === gU ? void 0 : gU.DEU()) && (0, YU.c)(this.registryOf(this.module))
        }
      }
      endBinding() {
        var UU;
        null === (UU = this.binding) || void 0 === UU || UU.release(), this.binding = null
      }
      async openPreview(UU, RU, gU, tU) {
        const pU = await this.renderingHost(),
          EU = this.module;
        if (null === pU || null === EU) throw new Error("this page can't draw previews: it has no renderer build");
        if (this.animations ??= this.loadAnimations(pU), this.deps.pack.wanted(), this.isStopped) throw new Error("the previews stopped");
        this.guarded((() => {
          this.deps.provideBuiltInAnimationPack(EU)
        }));
        const PU = this.nextId++,
          TU = this.deps.createCanvas(),
          [qU, KU] = zU(RU, gU, this.deps.dpr(), tU);
        TU.width = qU, TU.height = KU;
        if (!this.guarded((() => (EU.FpU(PU, TU), pU.open(PU, qU, KU, UU))))) throw this.hostCall(void 0, (() => {
          EU.ipU(PU)
        })), new Error("the page's renderer is lent to a session that is running");
        this.restartModelsIfFailed();
        const cU = new NU(this, pU, PU, TU, [qU, KU], this.deps);
        return this.previews.set(PU, cU), this.startFrames(), cU
      }
      prefetch() {
        if (this.prefetched || this.isStopped || (0, oU.b)() || null !== (0, oU.I)()) return;
        this.prefetched = !0;
        (null === this.module ? this.loadModule() : Promise.resolve(this.module)).then((UU => {
          null === UU || this.isStopped || (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles())
        }), (() => {}))
      }
      modelFile(UU) {
        return this.prefetchedOr(UU, this.deps.fetchModel)
      }
      imageFile(UU) {
        return this.prefetchedOr(UU, tU.H)
      }
      prefetchedOr(UU, RU) {
        const gU = this.prefetchedFiles.get(UU);
        return void 0 === gU ? RU(UU) : gU.catch((() => RU(UU)))
      }
      async prefetchPlayerFiles() {
        const UU = this.deps.playerFile().then((UU => this.deps.files.url(UU))),
          RU = await Promise.all([UU, this.deps.images.lifeformAtlasUrl(nU.c)]).catch((() => null));
        if (null === RU) return;
        const [gU, tU] = RU, pU = (UU, RU) => {
          if (null === UU) return;
          const gU = RU(UU);
          this.prefetchedFiles.set(UU, gU), gU.catch((() => {
            this.prefetchedFiles.delete(UU)
          }))
        };
        pU(gU, (UU => this.modelFile(UU))), pU(tU, (UU => this.imageFile(UU)))
      }
      loadModule() {
        return this.moduleLoad ??= this.deps.loadModule().then((UU => (null === UU && (this.moduleLoad = null), UU)), (UU => {
          throw this.moduleLoad = null, UU
        })), this.moduleLoad
      }
      fetchAnimationTable() {
        return this.animationTable ??= this.deps.fetchAnimations().catch((UU => {
          throw this.animationTable = null, UU
        })), this.animationTable
      }
      get modelsUnavailable() {
        return this.unavailable
      }
      startModels() {
        this.models ??= this.deps.startModels(this.modelsListener).catch((UU => (this.modelsFailed(UU), () => new Promise((() => {})))))
      }
      buildModel(UU, RU) {
        return this.startModels(), this.models.then((gU => gU(UU, RU))).then((UU => this.unavailable ? new Promise((() => {})) : UU))
      }
      restartModelsIfFailed() {
        this.unavailable && !this.modelsRestarted && 0 === this.previews.size && (this.modelsRestarted = !0, this.models = null, this.unavailable = !1, this.startModels())
      }
      modelsFailed(UU) {
        this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${rU} the model workers didn't start: models won't draw in the previews`, UU))
      }
      called(UU) {
        return 0 !== UU && this.logError(UU, 0), UU
      }
      closePreview(UU) {
        this.previews.delete(UU.id), null !== this.module && UU.dispose(this.module), 0 === this.previews.size && null !== this.frameId && (this.deps.cancelFrame(this.frameId), this.frameId = null)
      }
      hostOf(UU) {
        if (null !== this.module && this.module !== UU) throw new Error("a second renderer module on one page");
        return this.module = UU, null === this.host && (this.host = this.guarded((() => new UU.kpU)), this.tellInGame(), this.handOverShaderPack()), this.host
      }
      tellInGame() {
        const {
          host: UU
        } = this;
        null !== UU && this.outsideCall("the game's start or end", (() => {
          UU.UPU(this.deps.game.inGame())
        }))
      }
      handOverShaderPack() {
        const {
          host: UU,
          shaderPackArgs: RU
        } = this;
        null !== UU && null !== RU && this.outsideCall("the shader pack's hand-over", (() => {
          UU.SgU(...RU) || console.warn(`${rU} the host refused the shader pack: previews draw without it at home`)
        }))
      }
      outsideCall(UU, RU) {
        try {
          this.hostCall(void 0, RU)
        } catch (gU) {
          this.stop(), console.warn(`${rU} the previews stopped: ${UU} threw`, gU)
        }
      }
      async loadAnimations(UU) {
        const RU = PU(null),
          gU = this.module;
        try {
          RU.wasm = null === gU ? RU.wasm : this.hostCall(RU.wasm, (() => gU.jG()))
        } catch {}
        let tU, pU;
        try {
          tU = await this.fetchAnimationTable()
        } catch (EU) {
          return void this.deps.onAnimationsFailed({
            stage: "fetch",
            error: EU
          }, RU)
        }
        if (!this.settleIfTrapped()) {
          try {
            pU = UU.NEU(tU)
          } catch (EU) {
            if (this.stopIfTrapped(EU)) return;
            return void this.deps.onAnimationsFailed({
              stage: "decode",
              error: EU
            }, RU)
          }
          pU || this.deps.onAnimationsFailed({
            stage: "decode",
            error: null
          }, RU)
        }
      }
      async renderingHost() {
        if (null !== this.binding && await this.binding.done, this.settleIfTrapped()) return null;
        const UU = this.host;
        return null !== UU && this.guarded((() => UU.DEU())) ? UU : (this.opening ??= this.openAtHome().finally((() => {
          this.opening = null
        })), this.opening)
      }
      async openAtHome() {
        var UU;
        const RU = null !== (UU = this.module) && void 0 !== UU ? UU : await this.loadModule();
        if (null === RU) return null;
        const gU = this.hostOf(RU),
          tU = () => this.guarded((() => gU.DEU()));
        if (tU()) return gU;
        if (null !== (0, oU.I)() || (0, oU.b)()) return null;
        const pU = this.deps.createCanvas();
        pU.width = 1, pU.height = 1;
        const EU = await this.deps.openExtras();
        if (this.settleIfTrapped()) return null;
        const PU = (0, aU.f)().sampleCount;
        let TU;
        try {
          TU = await (0, fU.t)(RU, "previewRenderer", pU, PU, BU.e, EU)
        } catch (qU) {
          throw qU instanceof wU.d ? this.stopForTrap(qU) : (0, fU.q)(qU) && await this.deps.onRenderFailed("start_failed", qU), qU
        }
        return this.guarded((() => gU.VEU(TU))) ? ((0, oU.v)(performance.now()), this.samples = PU, this.pageCanvas = pU, (0, YU.c)(this.registryOf(RU)), gU) : tU() ? gU : null
      }
      startFrames() {
        null !== this.frameId || this.isStopped || (this.frameId = this.deps.requestFrame(this.frame))
      }
      drawFrame(UU, RU) {
        for (const PU of this.previews.values()) PU.feed();
        if (this.stopped) return;
        const gU = this.deps.now(),
          tU = UU.frame(RU);
        this.costs.push(this.deps.now() - gU), this.costs.length > 120 && this.costs.shift();
        const pU = 0 !== (256 & tU),
          EU = 255 & tU;
        for (const PU of this.previews.values()) {
          if (this.stopped) return;
          PU.collect(pU)
        }
        if (!this.stopped) {
          if (pU) {
            const RU = UU.pPU();
            for (let UU = 0; UU + 1 < RU.length; UU += 2) this.logError(RU[UU], RU[UU + 1])
          }
          if (EU === SU) return this.stop(), void this.deps.onRenderFailed("lost");
          if (EU === sU) return this.stop(), void this.deps.onFatal(UU.AEU(), UU.zEU());
          if (EU === yU) return this.stop(), void console.warn(`${rU} the previews stopped: the page's renderer went with its session`);
          (0, WU.e)(RU), this.startFrames()
        }
      }
      get isStopped() {
        return this.stopped || this.isTrapped
      }
      get isTrapped() {
        return null !== this.module && ((0, wU.j)(this.module) || "failed" === (0, CU.y)())
      }
      hostCall(UU, RU) {
        if (this.settleIfTrapped()) return UU;
        try {
          return RU()
        } catch (gU) {
          if (this.stopIfTrapped(gU)) return UU;
          throw gU
        }
      }
      guarded(UU) {
        if (this.settleIfTrapped()) throw new Error("the previews stopped: their module trapped");
        try {
          return UU()
        } catch (RU) {
          throw this.stopIfTrapped(RU), RU
        }
      }
      registryOf(UU) {
        return {
          JgU: (RU, gU) => {
            this.hostCall(void 0, (() => {
              UU.JgU(RU, gU)
            }))
          },
          wgU: RU => {
            this.hostCall(void 0, (() => {
              UU.wgU(RU)
            }))
          }
        }
      }
      settleIfTrapped() {
        return !!this.isTrapped && (this.stopped || (this.stop(), (0, YU.c)(null)), !0)
      }
      stopIfTrapped(UU) {
        return !(null === this.module || !(0, wU.k)(this.module, UU)) && (this.stopForTrap(UU), !0)
      }
      stopForTrap(UU) {
        this.stop(), (0, YU.c)(null), (0, CU.M)(UU)
      }
      stop() {
        this.stopped = !0;
        for (const UU of this.previews.values()) UU.abandon()
      }
      logError(UU, RU) {
        const gU = `${UU}:${RU}`;
        this.loggedErrors.has(gU) || (this.loggedErrors.add(gU), console.warn(`${rU} error ${UU} (detail ${RU})`))
      }
    }
    let OU = null;

    function UR() {
      return OU ??= new lU(function() {
        const UU = (0, IU.o)(eU.clientSideServerUrls.staticUrl, {
          packUrl: UU => {
            var RU, gU;
            return null !== (RU = null === (gU = nU.d.current) || void 0 === gU ? void 0 : gU.modelUrl(UU)) && void 0 !== RU ? RU : null
          }
        });
        return {
          loadModule: LU,
          startModels: async UU => {
            const {
              pageModelPool: RU
            } = await gU.e(42).then((() => gU(42680))), {
              pool: tU
            } = RU(UU);
            return (UU, RU) => tU.build(UU, RU)
          },
          fetchAnimations: async () => TU(await (0, tU.H)(MU())),
          playerFile: async () => (await (0, IU.l)()).PLAYER_FILE,
          onAnimationsFailed: (UU, RU) => {
            qU("previewAnimations", MU(), UU, RU)
          },
          provideBuiltInAnimationPack: UU => {
            jU().provide(UU)
          },
          openExtras: oU.D,
          files: UU,
          images: (0, nU.i)((0, xU.n)(UU.url), (() => nU.d.current)),
          pack: nU.d,
          game: bU.b,
          fetchModel: UU => (0, IU.h)(UU),
          createCanvas: () => document.createElement("canvas"),
          dpr: () => window.devicePixelRatio,
          now: () => performance.now(),
          requestFrame: UU => requestAnimationFrame(UU),
          cancelFrame: UU => {
            cancelAnimationFrame(UU)
          },
          onRenderFailed: DU,
          onFatal: (UU, RU) => {
            console.error(`${rU} the previews stopped: renderer error ${UU} (detail ${RU})`)
          }
        }
      }()), OU
    }
    var RR = gU(567),
      gR = gU(38186),
      tR = gU(2969);
    const pR = {
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
    const ER = "[bloxd-previews]",
      PR = new Uint32Array(5);

    function TR(UU) {
      return RR.m.indexOf(UU)
    }
    const qR = new WeakSet;

    function KR(UU) {
      const RU = (0, gR.e)(UU),
        gU = null === RU ? -1 : cR(RU);
      return -1 !== gU ? gU : (qR.has(UU) || (qR.add(UU), console.warn(`${ER} an animation the previews' table lacks: the mob idles instead`)), -1)
    }

    function cR(UU) {
      var RU;
      return null !== (RU = pR[UU]) && void 0 !== RU ? RU : -1
    }

    function GR(UU, RU) {
      const {
        canvas: gU
      } = RU;
      gU.style.width = "100%", gU.style.height = "100%", gU.style.display = "block", UU.appendChild(gU)
    }

    function jR(UU) {
      const RU = UU.getBoundingClientRect();
      return [RU.width, RU.height]
    }
    class uR {
      constructor(UU, RU) {
        this.preview = UU, this.showView = RU
      }
      show(UU) {
        this.showView(this.preview, UU)
      }
      resize(UU, RU) {
        this.preview.resize(UU, RU)
      }
      close() {
        this.preview.close()
      }
    }
    class CR {
      constructor(UU) {
        this.preview = UU, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.detachControls = void 0, this.detachControls = function(UU) {
          const {
            canvas: RU
          } = UU;
          let gU = null;
          const tU = UU => {
              var tU;
              gU = {
                pointer: UU.pointerId,
                x: UU.clientX,
                y: UU.clientY
              }, null === (tU = RU.setPointerCapture) || void 0 === tU || tU.call(RU, UU.pointerId)
            },
            pU = RU => {
              var tU;
              const pU = UU.orbit;
              if ((null === (tU = gU) || void 0 === tU ? void 0 : tU.pointer) !== RU.pointerId || null === pU) return;
              const EU = RU.clientX - gU.x,
                PU = RU.clientY - gU.y;
              gU = {
                ...gU,
                x: RU.clientX,
                y: RU.clientY
              }, UU.setOrbit({
                alpha: pU.alpha - .01 * EU,
                beta: Math.min(Math.PI - .01, Math.max(.01, pU.beta - .01 * PU)),
                radius: pU.radius
              })
            },
            EU = UU => {
              var RU;
              (null === (RU = gU) || void 0 === RU ? void 0 : RU.pointer) === UU.pointerId && (gU = null)
            },
            PU = RU => {
              const gU = UU.orbit;
              if (null === gU) return;
              RU.preventDefault();
              const tU = RU.deltaY * (RU.deltaMode === WheelEvent.DOM_DELTA_LINE ? 40 : RU.deltaMode === WheelEvent.DOM_DELTA_PAGE ? 800 : 1),
                pU = Math.min(100, Math.max(5, gU.radius + .08 * tU));
              UU.setOrbit({
                ...gU,
                radius: pU
              })
            };
          return RU.style.touchAction = "none", RU.addEventListener("pointerdown", tU), RU.addEventListener("pointermove", pU), RU.addEventListener("pointerup", EU), RU.addEventListener("pointercancel", EU), RU.addEventListener("wheel", PU, {
            passive: !1
          }), () => {
            RU.removeEventListener("pointerdown", tU), RU.removeEventListener("pointermove", pU), RU.removeEventListener("pointerup", EU), RU.removeEventListener("pointercancel", EU), RU.removeEventListener("wheel", PU)
          }
        }(UU), this.dev = {
          canvas: () => UU.canvas,
          isolateHead: () => {
            console.warn(`${ER} isolateHead: noa's character preview only`)
          }
        }, this.apply(), this.ready = UU.untilSettled().then((() => {
          if (UU.isStopped) throw new Error(`${ER} the previews stopped before the character drew`);
          this.built = !0
        }))
      }
      isReady() {
        return this.built && !this.preview.isClosed
      }
      setCosmetic(UU, RU) {
        this.cosmetics[UU] = RU, this.apply()
      }
      playEmote(UU) {
        null === UU || UU !== this.emote ? (this.emote = UU, this.apply()) : this.preview.replay()
      }
      untilDrawn(UU) {
        return this.preview.untilSettled()
      }
      setOrbit(UU) {
        let {
          yaw: RU,
          pitch: gU,
          radius: tU
        } = UU;
        const pU = this.preview.orbit;
        null !== pU && this.preview.setOrbit({
          alpha: RU,
          beta: gU,
          radius: null !== tU && void 0 !== tU ? tU : pU.radius
        })
      }
      resetCamera() {}
      resize(UU, RU) {
        this.preview.resize(UU, RU)
      }
      close() {
        this.detachControls(), this.preview.close()
      }
      apply() {
        var UU;
        this.preview.setPlayer(JSON.stringify(this.cosmetics), PR, null === (UU = this.emote) ? -1 : cR(UU))
      }
    }

    function hR(UU, RU) {
      let {
        mobType: gU,
        variation: tU,
        animation: pU
      } = RU;
      UU.setMob(TR(gU), null !== tU && void 0 !== tU ? tU : "", 1, KR(pU))
    }

    function QR(UU, RU) {
      let {
        mobType: gU,
        variation: tU,
        metaInfo: pU,
        tamed: EU
      } = RU;
      UU.setPet(TR(gU), tU, pU, EU)
    }
    const eR = {
      aimed: .533 / 1.15 * 1.1,
      ready: .16 / .85 * 1.1
    };
    class WR {
      constructor(UU, RU, gU, tU) {
        this.preview = null, this.closed = !1, this.figure = null, this.shown = !1, this.order = "", this.span = {
          left: 0,
          width: 0
        }, this.lineup = [0, 0], this.given = null, this.loaded = !1, UU(gU.width, tU[1], tU).then((UU => {
          if (this.closed) return void UU.close();
          const {
            style: gU
          } = UU.canvas;
          gU.position = "absolute", gU.top = "0", gU.visibility = "hidden", GR(RU, UU), this.preview = UU, this.apply()
        })).catch((UU => {
          console.error(`${ER} couldn't open a lineup figure`, UU)
        }))
      }
      update(UU, RU, gU, tU, pU) {
        this.figure = UU, this.shown = RU, this.order = gU, this.span = tU, this.lineup = pU, this.apply()
      }
      close() {
        var UU;
        this.closed = !0, null === (UU = this.preview) || void 0 === UU || UU.close(), this.preview = null
      }
      apply() {
        const {
          preview: UU,
          figure: RU,
          lineup: gU
        } = this;
        if (null === UU || null === RU) return;
        if (this.given !== RU) {
          var tU;
          this.given = RU, this.loaded = !1;
          const gU = null === RU.yI ? 0 : null !== (tU = (0, tR.c)(RU.yI)) && void 0 !== tU ? tU : 0;
          UU.setFigure(function(UU) {
            return JSON.stringify(Object.fromEntries(UU.cosmetics))
          }(RU), gU, KR(RU.animation), RU.size), UU.untilSettled().then((() => {
            this.given === RU && (this.loaded = !0, this.apply())
          }))
        }
        const {
          left: pU,
          width: EU
        } = this.span;
        UU.resize(EU, gU[1], gU);
        const {
          style: PU
        } = UU.canvas;
        PU.left = `${pU}px`, PU.width = `${EU}px`, PU.zIndex = this.order, PU.visibility = this.shown && this.loaded ? "visible" : "hidden"
      }
    }
    class fR {
      constructor(UU, RU) {
        this.open = RU, this.layer = void 0, this.figures = [], this.view = {
          figures: [],
          shown: []
        }, this.size = void 0, this.size = jR(UU), this.layer = document.createElement("div");
        const {
          style: gU
        } = this.layer;
        gU.position = "relative", gU.isolation = "isolate", gU.overflow = "hidden", gU.width = "100%", gU.height = "100%", gU.pointerEvents = "none", UU.appendChild(this.layer)
      }
      show(UU) {
        this.view = UU, this.place()
      }
      resize(UU, RU) {
        this.size = [UU, RU], this.place()
      }
      close() {
        for (const UU of this.figures) UU.close();
        this.figures = [], this.layer.remove()
      }
      place() {
        const {
          figures: UU,
          shown: RU
        } = this.view;
        for (const tU of this.figures.splice(UU.length)) tU.close();
        const {
          size: gU
        } = this;
        UU.forEach(((tU, pU) => {
          var EU;
          const PU = function(UU, RU, gU, tU) {
            let [pU, EU] = tU;
            const PU = (UU + .5) * pU / RU,
              TU = Math.min(Math.max(pU / RU, 2 * gU * EU), 2 * Math.max(PU, pU - PU));
            return {
              left: PU - TU / 2,
              width: TU
            }
          }(pU, UU.length, function(UU) {
            let {
              animation: RU,
              size: gU
            } = UU;
            const {
              aimed: tU,
              ready: pU
            } = eR;
            return (KR(RU) === pR.gunAimed ? tU : pU) * gU
          }(tU), gU);
          this.figures[pU] ??= new WR(this.open, this.layer, PU, gU), this.figures[pU].update(tU, null !== (EU = RU[pU]) && void 0 !== EU && EU, function(UU, RU) {
            return String(Math.round(1e3 * UU) + RU)
          }(tU.size, pU), PU, gU)
        }))
      }
    }
    const xR = {
      player: dU,
      store: HU
    };
    class mR {
      constructor(UU) {
        this.page = UU
      }
      async openMob(UU) {
        return new uR(await this.open(UU, vU), hR)
      }
      async openPet(UU) {
        return new uR(await this.open(UU, vU), QR)
      }
      openMobLineup(UU) {
        return new fR(UU, ((UU, RU, gU) => this.page.openPreview(vU, UU, RU, gU)))
      }
      async openCharacter(UU, RU) {
        return new CR(await this.open(UU, xR[RU]))
      }
      async open(UU, RU) {
        const [gU, tU] = jR(UU), pU = await this.page.openPreview(RU, gU, tU);
        return GR(UU, pU), pU
      }
    }
  },
  36299: (UU, RU, gU) => {
    gU.d(RU, {
      B: () => hU,
      F: () => eU,
      e: () => tU,
      f: () => pU,
      h: () => jU,
      k: () => QU,
      l: () => cU,
      p: () => WU,
      r: () => qU,
      u: () => KU,
      w: () => uU,
      y: () => CU
    });
    const tU = [{
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

    function pU(UU, RU) {
      const {
        numLines: gU,
        charsPerLine: pU
      } = tU[RU];
      return fU(UU, gU, pU, !1)
    }
    const EU = 7 / 8,
      PU = .25,
      TU = 8;

    function qU(UU, RU) {
      return {
        width: Math.min(UU, TU) - 2 * PU,
        height: Math.min(RU, TU) - 2 * PU
      }
    }

    function KU(UU, RU, gU) {
      const pU = qU(UU, RU),
        {
          numLines: PU,
          charsPerLine: TU
        } = tU[gU];
      return {
        numLines: Math.max(1, Math.floor(PU / EU * pU.height)),
        charsPerLine: Math.max(1, Math.floor(TU * pU.width))
      }
    }

    function cU(UU, RU, gU, tU) {
      const {
        numLines: pU,
        charsPerLine: EU
      } = KU(gU, tU, RU);
      return fU(UU, pU, EU, !1)
    }
    const GU = 32e3;

    function jU(UU) {
      return UU.slice(0, GU)
    }
    const uU = 512e3,
      CU = 64,
      hU = uU;

    function QU(UU, RU) {
      const gU = Math.max(0, hU - RU),
        tU = Math.min(uU, gU);
      return UU.slice(0, tU)
    }
    const eU = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      hT: {
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

    function WU(UU, RU) {
      const {
        numLines: gU,
        charsPerLine: tU
      } = eU[RU];
      return fU(UU, gU, tU, !1)
    }

    function fU(UU, RU, gU, tU, pU) {
      (pU || tU) && (UU = UU.slice(0, null !== pU && void 0 !== pU ? pU : RU * gU));
      const EU = UU.split("\n");
      if (EU.length > RU && EU.splice(RU, EU.length - RU), !tU)
        for (let PU = 0; PU < EU.length; PU++) {
          const UU = EU[PU];
          UU.length > gU && (EU[PU] = UU.substring(0, gU), EU.length < RU && EU.splice(PU + 1, 0, UU.substring(gU)))
        }
      return EU.join("\n")
    }
  },
  42623: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/builtInAnimations.anim.38e056f49512e10b7206.gz"
  },
  42625: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/previewAnimations.dat.24d2343c38c8f9b3fb85.gz"
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);