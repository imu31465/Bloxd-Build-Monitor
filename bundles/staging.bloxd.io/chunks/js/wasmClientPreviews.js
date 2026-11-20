export const id = 57;
export const ids = [57];
export const modules = {
  38478: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => MT,
      f: () => KT
    });
    const lT = new WeakMap;

    function MT(TT, kT) {
      return lT.set(TT, kT), TT
    }

    function KT(TT) {
      var kT;
      return null !== (kT = lT.get(TT)) && void 0 !== kT ? kT : null
    }
  },
  38497: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => yT
    });
    var lT = cT(1226);

    function MT(TT) {
      const kT = /(\d*\.?\d+)px/.exec(TT);
      return kT ? Number(kT[1]) : null
    }

    function KT(TT) {
      return TT.split(/[\s,]+/).pop()
    }
    let OT = !1;
    const yT = {
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
      drawText: function(TT, kT, lT, yT, fT, xT) {
        if (fT <= 0 || xT <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: IT,
          fontVariant: AT,
          fontWeight: CT,
          fontSize: jT,
          font: vT
        } = this, tT = [IT, AT, CT, `${jT}px`, vT].filter(Boolean).join(" "), hT = [
          [CT, `${jT}px`, KT(vT)].filter(Boolean).join(" "), `${jT}px sans-serif`
        ], NT = TT.font, QT = function(TT, kT, cT) {
          for (const lT of kT) {
            TT.font = lT;
            const kT = MT(TT.font),
              OT = KT(lT);
            if (null !== kT && Math.abs(kT - cT) <= .5 && TT.font.toLowerCase().includes(OT.toLowerCase())) return lT
          }
          return null
        }(TT, [tT, ...hT], jT);
        QT !== tT && function(TT, kT, lT) {
          OT || (OT = !0, Promise.resolve().then((() => cT(1082))).then((cT => {
            let {
              vt: MT
            } = cT;
            MT(new Error("A canvas didn't take canvasTxt's font"), {
              font: TT,
              wj: kT,
              drawnWith: null !== lT && void 0 !== lT ? lT : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(tT, NT, QT);
        const ST = MT(TT.font);
        if (null === QT && null !== ST && ST > 0) {
          const cT = jT / ST;
          TT.save();
          try {
            return TT.scale(cT, cT), {
              height: this.drawLines(TT, kT, lT / cT, yT / cT, fT / cT, xT / cT, ST).height * cT
            }
          } finally {
            TT.restore()
          }
        }
        return this.drawLines(TT, kT, lT, yT, fT, xT, jT)
      },
      drawLines: function(TT, kT, cT, MT, KT, OT, yT) {
        const fT = cT + KT,
          xT = MT + OT;
        let IT, AT = MT + OT / 2 + yT / 2;
        "right" === this.align ? (IT = fT, TT.textAlign = "right") : "left" === this.align ? (IT = cT, TT.textAlign = "left") : (IT = cT + KT / 2, TT.textAlign = "center");
        for (const lT of kT) {
          TT.measureText(lT).width >= KT && (kT = kT.replace(lT, ""))
        }
        kT = (0, lT.T)(kT);
        const CT = [],
          jT = kT.split("\n"),
          vT = this.justify ? TT.measureText("\u200a").width : 0;
        jT.forEach((kT => {
          let cT = TT.measureText(kT).width;
          if (cT <= KT) CT.push(kT);
          else {
            let lT = kT;
            const MT = KT;
            let OT, yT, fT;
            for (cT = TT.measureText(lT).width; cT > MT;) {
              for (OT = 0, yT = 0, fT = ""; yT < MT;) OT++, fT = lT.substr(0, OT), yT = TT.measureText(fT).width;
              OT--, fT = fT.substr(0, OT);
              const kT = OT;
              if (" " !== lT.substr(OT, 1)) {
                for (;
                  " " !== lT.substr(OT, 1) && 0 !== OT;) OT--;
                0 === OT && (OT = kT), fT = lT.substr(0, OT)
              }
              fT = this.justify ? this.justifyLine(TT, fT, vT, "\u200a", KT) : fT, lT = lT.substr(OT), cT = TT.measureText(lT).width, CT.push(fT)
            }
            cT > 0 && CT.push(lT)
          }
        }));
        const tT = this.lineHeight ? this.lineHeight : this.getTextHeight(TT, kT),
          hT = tT * (CT.length - 1),
          NT = hT / 2;
        let QT = MT;
        "top" === this.vAlign ? AT = MT + yT : "bottom" === this.vAlign ? (AT = xT - hT, QT = xT) : (QT = MT + OT / 2, AT -= NT), CT.forEach((kT => {
          kT = kT.trim(), TT.fillText(kT, IT, AT), AT += tT
        })), this.debug && (TT.lineWidth = 3, TT.strokeStyle = "#00909e", TT.strokeRect(cT, MT, KT, OT), TT.lineWidth = 2, TT.strokeStyle = "#f6d743", TT.beginPath(), TT.moveTo(IT, MT), TT.lineTo(IT, xT), TT.stroke(), TT.strokeStyle = "#ff6363", TT.beginPath(), TT.moveTo(cT, QT), TT.lineTo(fT, QT), TT.stroke());
        return {
          height: hT + tT
        }
      },
      getTextHeight: function(TT, kT) {
        const cT = TT.textBaseline;
        TT.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: lT
        } = TT.measureText(kT);
        return TT.textBaseline = cT, lT
      },
      justifyLine: function(TT, kT, cT, lT, MT) {
        const KT = kT.trim(),
          OT = TT.measureText(KT).width,
          yT = KT.split(/\s+/).length - 1,
          fT = Math.floor((MT - OT) / cT);
        if (yT <= 0 || fT <= 0) return KT;
        const xT = Math.floor(fT / yT);
        let IT = fT - yT * xT,
          AT = [];
        for (let CT = 0; CT < xT; CT++) AT.push(lT);
        AT = AT.join("");
        return KT.replace(/\s+/g, (TT => {
          const kT = IT > 0 ? AT + lT : AT;
          return IT--, TT + kT
        }))
      }
    }
  },
  38503: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => tT,
      e: () => vT,
      h: () => CT,
      k: () => IT,
      o: () => AT
    });
    var lT = cT(4235),
      MT = cT(339);
    const KT = 1024,
      OT = 1536,
      yT = 2 * lT.j + 1,
      fT = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      xT = 1.5;

    function IT(TT, kT, cT) {
      if ("string" !== typeof TT) return kT;
      try {
        const cT = JSON.parse(TT);
        return cT && "object" === typeof cT ? cT : kT
      } catch (lT) {
        return void 0 !== cT && console.error(`Couldn't parse ${cT}`, lT), kT
      }
    }

    function AT(TT) {
      return IT(TT, null, "a leaderboard's rows")
    }

    function CT(TT, kT) {
      var cT, lT;
      return null !== kT && void 0 !== kT ? kT : {
        status: null !== (cT = TT.status) && void 0 !== cT ? cT : "loading",
        entries: null !== (lT = TT.entries) && void 0 !== lT ? lT : []
      }
    }

    function jT(TT, kT) {
      return "number" === typeof TT && Number.isFinite(TT) && TT > 0 ? TT : kT
    }

    function vT(TT, kT) {
      const cT = jT(TT.size, 1);
      let lT = jT(TT.width, jT(2.5 * cT, 2.5)),
        MT = jT(TT.height, jT(3.75 * cT, 3.75));
      Number.isFinite(KT * MT / lT) && Number.isFinite(OT * lT / MT) || (lT = 2.5, MT = 3.75);
      const yT = MT / lT,
        fT = Math.max(1, Math.min(KT, kT / yT));
      return {
        width: lT,
        height: MT,
        layoutWidth: Math.max(KT, OT / yT),
        layoutHeight: Math.max(OT, KT * yT),
        pixelWidth: Math.round(fT),
        pixelHeight: Math.round(Math.max(1, Math.min(kT, fT * yT)))
      }
    }

    function tT(TT, kT, cT, OT, IT, AT) {
      TT.setTransform(1, 0, 0, 1, 0, 0), TT.fillStyle = MT.H.defaultNameTagBackground, TT.fillRect(0, 0, kT, cT), TT.scale(kT / OT.layoutWidth, cT / OT.layoutHeight), TT.translate((OT.layoutWidth - KT) / 2, 0),
        function(TT, kT, cT, KT) {
          var OT, IT, AT, CT;
          const {
            top: jT,
            around: vT,
            showPlayerText: tT,
            localPlayerDbId: QT
          } = cT, {
            whiteUiText: ST,
            grayUiText: DT,
            yellowUiText: aT
          } = MT.H;
          TT.textBaseline = "middle";
          const FT = function(kT, cT, lT, MT, KT, OT) {
              let yT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              TT.font = `bold ${MT}px 'Jetbrains Mono', monospace`, TT.fillStyle = KT, TT.textAlign = yT;
              let fT = kT.replace(/[\r\n\t]/g, " ");
              if (TT.measureText(fT).width > OT) {
                for (; fT.length > 0 && TT.measureText(`${fT}\u2026`).width > OT;) fT = fT.slice(0, -1);
                fT += "\u2026"
              }
              TT.fillText(fT, cT, lT)
            },
            rT = kT => {
              TT.fillStyle = ST, TT.globalAlpha = .15, TT.fillRect(24, kT, 976, 2), TT.globalAlpha = 1
            },
            PT = null === QT ? null : (0, MT.hc)(QT),
            wT = TT => null !== PT && TT.playerHash === PT,
            mT = hT(jT.entries, lT.l),
            bT = "ready" === jT.status && mT.length > 0,
            zT = null === vT ? [] : hT(vT.entries, yT),
            JT = mT.some(wT),
            oT = null === vT ? null : function(TT) {
              const kT = TT;
              if (!kT || !Number.isFinite(kT.rank) || !Number.isFinite(kT.tied) || !Number.isFinite(kT.total)) return null;
              return kT
            }(vT.standing),
            HT = zT.find(wT),
            eT = mT.find(wT),
            GT = null === oT || void 0 === HT ? null : {
              value: HT.value,
              rank: oT.rank
            },
            VT = NT(mT, void 0 === eT || eT.value === (null === GT || void 0 === GT ? void 0 : GT.value) ? GT : null),
            ET = NT(zT, GT),
            ZT = (TT, kT) => {
              const cT = TT.findIndex(wT);
              return cT >= 0 ? kT[cT] : null
            },
            uT = null !== (OT = null !== (IT = null === oT || void 0 === oT ? void 0 : oT.rank) && void 0 !== IT ? IT : ZT(zT, ET)) && void 0 !== OT ? OT : ZT(mT, VT);
          TT.font = "bold 34px 'Jetbrains Mono', monospace";
          const XT = [...bT ? VT : [], ...JT ? [] : ET],
            dT = Math.min(280, Math.max(0, ...XT.map((kT => TT.measureText(fT.format(kT)).width)))),
            LT = dT <= 80,
            RT = LT ? 80 : 32 + dT,
            gT = LT ? 148 : RT + 28,
            UT = 660 - gT;
          FT(`TOP ${lT.l}  /  ALL TIME`, 24, 52, 28, DT, 976), FT(tT ? String(null !== (AT = kT.title) && void 0 !== AT ? AT : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, ST, 976), FT("RANK", 32, 174, 28, DT, gT - 40), FT("PLAYER", gT, 174, 28, DT, UT), FT(tT ? String(null !== (CT = kT.scoreLabel) && void 0 !== CT ? CT : "Score").slice(0, 24) : "Score", 992, 174, 28, DT, 304, "right"), rT(202);
          const YT = (KT - 232) / (lT.l + xT + yT),
            BT = 208 + lT.l * YT,
            WT = BT + xT * YT,
            nT = (kT, cT, lT, MT) => {
              const KT = wT(kT);
              TT.fillStyle = KT ? aT : ST, TT.globalAlpha = KT ? .15 : MT ? .035 : 0, TT.fillRect(24, lT - YT / 2 + 1, 976, YT - 2), TT.globalAlpha = 1;
              const OT = KT ? aT : ST;
              FT(fT.format(cT), RT, lT, 34, OT, LT ? 80 : dT, LT ? "center" : "right"), FT(tT ? String(kT.name).slice(0, 64) : "Player", gT, lT, 34, OT, UT);
              const yT = fT.format(kT.value);
              FT(TT.measureText(yT).width > 304 ? kT.value.toExponential(6) : yT, 992, lT, 34, OT, 304, "right")
            };
          if (bT)
            for (const [lT, MT] of mT.entries()) nT(MT, VT[lT], 208 + (lT + .5) * YT, lT % 2 === 0);
          else {
            const TT = "error" === jT.status,
              kT = TT ? "Couldn't load leaderboard" : "ready" === jT.status ? "No scores yet" : "Loading leaderboard\u2026",
              cT = TT ? "Trying again shortly" : "ready" === jT.status ? "Be the first on the board!" : "Fetching the top players",
              lT = (208 + BT) / 2;
            FT(kT, 512, lT - 28, 40, TT ? MT.H.redUiText : ST, 960, "center"), FT(cT, 512, lT + 27, 30, DT, 960, "center")
          }
          const pT = BT + xT * YT / 2;
          if (null === uT) rT(pT);
          else {
            const kT = null === oT ? 0 : oT.tied - 1,
              cT = `YOUR RANK #${fT.format(uT)}${null===oT?"":` of ${fT.format(oT.total)}`}`;
            TT.font = "bold 36px 'Jetbrains Mono', monospace";
            const lT = Math.max(20, Math.min(36, Math.floor(34560 / TT.measureText(cT).width)));
            FT(cT, 512, pT - (kT > 0 ? 15 : 0), lT, aT, 960, "center"), kT > 0 && FT(`Tied with ${fT.format(kT)} other${1===kT?"":"s"}`, 512, pT + 24, 24, DT, 960, "center")
          }
          if (null === vT) return;
          const iT = WT + yT * YT / 2;
          if (JT) FT(`You're in the top ${lT.l}!`, 512, iT, 40, aT, 960, "center");
          else if (0 === zT.length) FT("You're not on this board yet", 512, iT, 34, DT, 960, "center");
          else
            for (const [lT, MT] of zT.entries()) nT(MT, ET[lT], WT + (lT + .5) * YT, lT % 2 === 0)
        }(TT, IT, AT, OT.layoutHeight)
    }

    function hT(TT, kT) {
      return Array.isArray(TT) ? TT.slice(0, kT).filter((TT => TT && Number.isFinite(TT.rank) && Number.isFinite(TT.value))) : []
    }

    function NT(TT, kT) {
      const cT = [];
      let lT = !1;
      return TT.forEach(((MT, KT) => {
        if (null !== kT && MT.value === kT.value) return void cT.push(kT.rank);
        const OT = KT > 0 && MT.value === TT[KT - 1].value;
        OT || (lT = 0 === KT && 1 !== MT.rank), cT.push(OT && !lT ? cT[KT - 1] : MT.rank)
      })), cT
    }
  },
  38698: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => MT,
      f: () => KT
    });
    const lT = 32;

    function MT(TT) {
      return Array.from(TT).length
    }

    function KT(TT) {
      const kT = [""];
      let cT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        MT = "";
      const KT = () => {
        kT.push(""), cT = 0, MT = ""
      };
      for (const OT of TT.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(OT)) KT();
        else if (/^\s+$/.test(OT)) MT += OT;
      else if (OT.length > 0) {
        const TT = Array.from(OT);
        cT > 0 && cT + MT.length + TT.length > lT && KT(), kT[kT.length - 1] += MT, cT += MT.length, MT = "";
        for (const MT of TT) cT >= lT && KT(), kT[kT.length - 1] += MT, cT++
      }
      return kT[kT.length - 1] += MT, kT
    }
  },
  42778: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      WasmPreviewHost: () => rk,
      pageBuiltInAnimationPack: () => CT,
      pagePreviews: () => ck,
      previewModule: () => WT
    });
    var lT = cT(3684),
      MT = cT(623);
    const KT = "[bloxd-wasm-client]";

    function OT(TT) {
      const kT = {
        wasm: "unknown",
        client: String(MT.d)
      };
      try {
        var cT;
        kT.wasm = null !== (cT = null === TT || void 0 === TT ? void 0 : TT.NA()) && void 0 !== cT ? cT : kT.wasm
      } catch {}
      return kT
    }
    async function yT(TT) {
      if (TT.length < 2 || 31 !== TT[0] || 139 !== TT[1]) return TT;
      if ("undefined" === typeof DecompressionStream) {
        const {
          ungzip: kT
        } = await cT.e(219).then((() => cT(36790)));
        return kT(TT)
      }
      const kT = new Blob([TT]).stream().pipeThrough(new DecompressionStream("gzip"));
      return new Uint8Array(await new Response(kT).arrayBuffer())
    }

    function fT(TT, kT, lT, MT) {
      Promise.resolve().then((() => cT(40557))).then((cT => {
        let {
          reportDataLoadFailure: KT
        } = cT;
        KT(TT, kT, lT, MT)
      }), (kT => {
        console.warn(`${KT} ${TT} didn't load, and the report couldn't be sent`, lT.error, kT)
      }))
    }
    const xT = [3e4, 12e4, 3e5];
    class IT {
      constructor(TT) {
        this.deps = TT, this.loading = null, this.reported = !1, this.retries = 0, this.resolveSet = () => {}, this.set = new Promise((TT => {
          this.resolveSet = TT
        }))
      }
      provide(TT) {
        return this.loading ??= this.load(TT), this.loading
      }
      whenSet() {
        return this.set
      }
      async load(TT) {
        const kT = OT(TT),
          cT = await async function(TT, kT) {
            let cT;
            try {
              cT = await TT()
            } catch (lT) {
              return {
                stage: "fetch",
                error: lT
              }
            }
            try {
              return kT(cT) ? null : {
                stage: "decode",
                error: null
              }
            } catch (lT) {
              return {
                stage: "decode",
                error: lT
              }
            }
          }((() => this.deps.fetch()), (kT => {
            const cT = TT.oMT(kT);
            return cT && this.resolveSet(kT), cT
          }));
        if (null !== cT) {
          if ("fetch" === cT.stage) {
            this.loading = null;
            const kT = xT[this.retries++];
            void 0 !== kT && this.deps.later((() => {
              this.provide(TT)
            }), kT)
          }
          this.reported || (this.reported = !0, this.deps.onFailed(cT, kT))
        }
      }
    }
    let AT = null;

    function CT() {
      return AT ??= new IT({
        fetch: async () => yT(await (0, lT.N)(jT(), {
          priority: "low"
        })),
        onFailed: (TT, kT) => {
          fT("builtInAnimations", jT(), TT, kT)
        },
        later: (TT, kT) => {
          setTimeout(TT, kT)
        }
      }), AT
    }

    function jT() {
      return cT(42786)
    }
    var vT = cT(3679),
      tT = cT(36113),
      hT = cT(40409),
      NT = cT(1202),
      QT = cT(326),
      ST = cT(636),
      DT = cT(40426),
      aT = cT(40631),
      FT = (cT(40443), cT(40577)),
      rT = cT(40583),
      PT = cT(40590),
      wT = cT(40440),
      mT = cT(40649),
      bT = cT(40653),
      zT = cT(40461),
      JT = cT(40526),
      oT = cT(40528),
      HT = cT(40644),
      eT = cT(42133),
      GT = cT(36089),
      VT = cT(3673);
    const ET = "[bloxd-previews]",
      ZT = 4e5,
      uT = 0,
      XT = 1,
      dT = 2,
      LT = 1,
      RT = 2,
      gT = 3,
      UT = 0,
      YT = 1,
      BT = 2;

    function WT(TT) {
      const kT = TT,
        cT = (0, DT.D)(TT),
        lT = (0, DT.i)(TT);
      return null !== cT && null !== lT && "function" === typeof kT.bMT && "function" === typeof kT.zMT && "function" === typeof kT.JMT ? kT : null
    }

    function nT(TT, kT, cT) {
      let [lT, MT] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [TT, kT], KT = Math.min(Number.isFinite(cT) && cT > 0 ? cT : 1, 2);
      const OT = Math.max(0, lT, TT) * Math.max(0, MT, kT) * KT * KT;
      return OT > ZT && (KT *= Math.sqrt(ZT / OT)), [Math.max(1, Math.floor(Math.max(0, TT) * KT)), Math.max(1, Math.floor(Math.max(0, kT) * KT))]
    }

    function pT() {
      return cT(42789)
    }
    async function iT(TT, kT) {
      "lost" === TT && (0, zT.F)();
      const lT = await (0, zT.Y)();
      if (null === lT || (0, DT.l)(lT) || (0, zT.e)()) return;
      const MT = "webgpu" === lT.backend;
      if (!MT && "lost" !== TT) return;
      const KT = MT ? (0, DT.L)(TT) : null;
      if (null !== KT) {
        const cT = `WebGPU failed at home (${TT}${void 0===kT?"":`: ${kT instanceof Error?kT.message:(0,GT.k)(kT)}`}) and ${KT}`;
        return console.warn(`${ET} ${cT}: the previews stop`, null !== kT && void 0 !== kT ? kT : ""), void(0, zT.y)(cT)
      }
      MT || (0, ST.o)(), (0, zT.v)();
      try {
        await async function(TT, kT, lT) {
          var MT;
          let {
            backend: KT,
            adapter: yT
          } = TT;
          const fT = (0, vT.K)(),
            {
              flushCrashReports: xT,
              reportRenderReload: IT
            } = await Promise.resolve().then((() => cT(40557)));
          IT(KT, "start_failed" === kT ? 0 : 1, OT(fT ? (0, vT.x)() : null), {
            cause: kT,
            error: "lost" === kT && null !== (MT = (0, DT.R)(fT ? (0, DT.D)((0, vT.x)()) : null)) && void 0 !== MT ? MT : lT,
            context: {
              adapter: yT,
              boundAtMs: "start_failed" === kT ? null : (0, zT.V)(),
              indirectHangs: (0, zT.H)()
            }
          }), await xT(JT.b)
        }(lT, TT, kT)
      } catch (yT) {
        console.warn(`${ET} ${lT.backend} failed at home (${TT}), and its report couldn't be sent`, yT)
      }(0, JT.f)()
    }
    async function qT() {
      if (!(0, vT.K)()) {
        const TT = await (0, zT.Y)();
        if (null === TT || (0, DT.l)(TT)) return null;
        if (await (0, tT.h)(await TT.load(), hT.f), !(0, vT.K)()) return null
      }
      return WT((0, vT.x)())
    }
    class sT {
      constructor(TT, kT, cT, lT, MT, KT) {
        this.page = TT, this.host = kT, this.id = cT, this.canvas = lT, this.size = MT, this.models = void 0, this.images = void 0, this.write = void 0, this.outcomes = [], this.closed = !1, this.quiet = 0, this.settled = [];
        const OT = {
            ...KT.images,
            glbUrl: TT => {
              var kT;
              return null !== (kT = this.models.drawnUrl(TT)) && void 0 !== kT ? kT : KT.images.glbUrl(TT)
            }
          },
          yT = kT => TT.modelFile(kT);
        this.images = new aT.f(OT, (TT => {
          console.warn(`${ET} image ${TT.key.kind}:${TT.key.index}:${TT.key.word} failed`, TT.error)
        }), {
          fetchFile: yT,
          fetchImage: kT => TT.imageFile(kT)
        }), TT.startModels(), this.models = new FT.i(KT.files, ((kT, cT) => TT.buildModel(kT, cT)), (TT => {
          console.warn(`${ET} model file ${TT.file} (${TT.url}) failed`, TT.error)
        }), {
          fetchFile: yT,
          onWritten: (TT, kT) => {
            this.images.glbWritten(TT, kT)
          },
          onTaken: (TT, kT) => {
            this.images.glbTaken(TT, kT)
          }
        }), this.write = (TT, kT, cT) => {
          if (this.closed) return !0;
          if (TT === FT.e) {
            const TT = new DataView(cT.buffer, cT.byteOffset, PT.e),
              lT = TT.getUint32(0, !0),
              MT = TT.getUint32(PT.h, !0),
              KT = this.page.hostCall(BT, (() => this.host.VKT(this.id, lT, kT, cT.subarray(PT.e))));
            return this.outcomes.push([MT, KT]), !0
          }
          return TT === aT.e && (this.page.hostCall(void 0, (() => {
            this.host.ZKT(this.id, cT)
          })), !0)
        }
      }
      get isClosed() {
        return this.closed
      }
      get isStopped() {
        return this.page.isStopped
      }
      resize(TT, kT, cT) {
        if (this.closed) return;
        const [lT, MT] = nT(TT, kT, this.page.dpr(), cT);
        lT === this.size[0] && MT === this.size[1] || (this.size = [lT, MT], this.page.hostCall(void 0, (() => {
          this.host.resize(this.id, lT, MT)
        })))
      }
      setMob(TT, kT, cT, lT) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.RKT(this.id, TT, kT, cT, lT))))
      }
      setPet(TT, kT, cT, lT) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.UKT(this.id, TT, kT, cT, lT))))
      }
      setPlayer(TT, kT, cT) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.XKT(this.id, TT, kT, cT))))
      }
      setFigure(TT, kT, cT, lT) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.dKT(this.id, TT, kT, cT, lT))))
      }
      replay() {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.replay(this.id))))
      }
      get orbit() {
        if (this.closed) return null;
        const TT = this.page.hostCall(null, (() => this.host.orbit(this.id)));
        return null === TT || TT.length < 3 ? null : {
          alpha: TT[0],
          beta: TT[1],
          radius: TT[2]
        }
      }
      setOrbit(TT) {
        let {
          alpha: kT,
          beta: cT,
          radius: lT
        } = TT;
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.gKT(this.id, kT, cT, lT)
        }))
      }
      untilSettled() {
        return this.closed || this.page.isStopped ? Promise.resolve() : (this.quiet = 0, new Promise((TT => {
          this.settled.push(TT)
        })))
      }
      packChanged() {
        this.quiet = 0, this.models.refresh(), (0, mT.h)(this.images)
      }
      feed() {
        this.models.drain(this.write);
        for (const [TT, kT] of this.outcomes) {
          const cT = kT === UT ? [] : [kT === YT ? TT : (TT | FT.h) >>> 0];
          this.models.taken(TT, cT)
        }
        this.outcomes.length = 0, this.images.drain(this.write)
      }
      collect(TT) {
        let kT = !1;
        if (TT) {
          const TT = this.host.WKT(this.id);
          for (const kT of TT) this.models.request(kT);
          const cT = this.host.BKT(this.id);
          cT.length > 0 && this.images.onEvent(cT), kT = TT.length > 0 || cT.length > 0
        }
        const cT = this.page.modelsUnavailable ? 0 : this.models.asking + this.models.unanswered,
          lT = kT || cT > 0 || this.images.waiting > 0 || this.images.inFlight > 0;
        this.quiet = lT ? 0 : this.quiet + 1, this.quiet >= 3 && this.resolveSettled()
      }
      close() {
        this.closed || (this.closed = !0, this.page.closePreview(this), this.resolveSettled())
      }
      abandon() {
        this.resolveSettled()
      }
      dispose(TT) {
        this.page.hostCall(void 0, (() => {
          const kT = this.host.close(this.id);
          kT.length > 0 && this.images.onEvent(kT), this.page.isTrapped || TT.JMT(this.id)
        })), this.images.dispose(), this.canvas.remove()
      }
      resolveSettled() {
        const TT = this.settled;
        this.settled = [];
        for (const kT of TT) kT()
      }
    }
    class Tk {
      constructor(TT) {
        this.deps = TT, this.module = null, this.host = null, this.opening = null, this.pageCanvas = null, this.samples = 1, this.binding = null, this.sessionEnds = 0, this.lastEndReturned = !0, this.previews = new Map, this.nextId = 1, this.frameId = null, this.stopped = !1, this.loggedErrors = new Set, this.modelsListener = {
          onUnavailable: TT => {
            this.modelsFailed(TT)
          },
          onDecoderFailed: TT => {
            this.loggedErrors.has("modelDecoder") || (this.loggedErrors.add("modelDecoder"), console.warn(`${ET} the Draco decoder didn't load: models waiting on it won't draw`, TT))
          },
          onWorkerLost: TT => {
            this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${ET} a model worker was lost: ${TT}`))
          },
          onModuleRetry: () => {}
        }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.Bj = {
          setShaderPack: (TT, kT, cT, lT, MT) => (this.shaderPackArgs = [TT, kT, cT, lT, MT], this.handOverShaderPack(), !0)
        }, this.frame = TT => {
          this.frameId = null;
          const kT = this.host;
          if (null !== kT && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped) try {
            this.drawFrame(kT, TT)
          } catch (cT) {
            if (!this.stopIfTrapped(cT) && (this.stop(), (0, DT.o)(cT))) return void this.deps.onRenderFailed("frames_refused", cT);
            console.warn(`${ET} the previews stopped: their frame threw`, cT)
          }
        }, TT.pack.onChange((() => {
          this.packChanged()
        })), TT.game.onGameChange((() => {
          this.tellInGame()
        }))
      }
      packChanged() {
        if (!this.stopped)
          for (const TT of this.previews.values()) TT.packChanged()
      }
      dpr() {
        return this.deps.dpr()
      }
      get sessionBound() {
        var TT, kT;
        return null !== (TT = null === (kT = this.host) || void 0 === kT ? void 0 : kT.attached()) && void 0 !== TT && TT
      }
      get open() {
        return this.previews.size
      }
      get frameCostMs() {
        return 0 === this.costs.length ? 0 : this.costs.reduce(((TT, kT) => TT + kT), 0) / this.costs.length
      }
      async bindSession(TT, kT, cT) {
        const lT = this.binding,
          MT = this.sessionEnds;
        try {
          const KT = this.hostOf(TT);
          if (!KT.EKT()) {
            const kT = (0, oT.i)().sampleCount,
              OT = await cT(kT);
            if (this.sessionEnds !== MT) return this.keepRendererOfEndedSession(TT, KT, OT, kT, lT), kT;
            if (!KT.DKT(OT)) throw new Error("the page has a renderer already");
            (0, zT.C)(performance.now()), this.samples = kT, (0, HT.g)((0, DT.i)(TT))
          }
          if (!KT.attach(kT)) throw new Error("the page's renderer is lent to another session");
          return this.samples
        } finally {
          this.binding === lT && this.endBinding()
        }
      }
      keepRendererOfEndedSession(TT, kT, cT, lT, MT) {
        if (!this.lastEndReturned || null !== this.binding && this.binding !== MT) try {
          cT.free()
        } catch (KT) {
          console.warn(`${ET} an ended session's renderer didn't free`, KT)
        } else kT.DKT(cT) && ((0, zT.C)(performance.now()), this.samples = lT, (0, HT.g)(this.registryOf(TT)))
      }
      async beginSession() {
        var TT;
        let kT = () => {};
        const cT = new Promise((TT => {
          kT = TT
        }));
        this.binding = {
          done: cT,
          release: kT
        }, await (null === (TT = this.opening) || void 0 === TT ? void 0 : TT.catch((() => null)));
        const lT = this.pageCanvas;
        return this.pageCanvas = null, lT
      }
      endSession(TT) {
        var kT, cT;
        if (this.sessionEnds++, this.lastEndReturned = TT, this.endBinding(), TT) {
          try {
            var lT;
            null === (lT = this.host) || void 0 === lT || lT.detach()
          } catch (MT) {
            return void console.warn(`${ET} the session's core kept the page's renderer`, MT)
          }!0 === (null === (kT = this.host) || void 0 === kT ? void 0 : kT.attached()) && console.warn(`${ET} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (cT = this.host) || void 0 === cT ? void 0 : cT.EKT()) && (0, HT.g)(this.registryOf(this.module))
        }
      }
      endBinding() {
        var TT;
        null === (TT = this.binding) || void 0 === TT || TT.release(), this.binding = null
      }
      async openPreview(TT, kT, cT, lT) {
        const MT = await this.renderingHost(),
          KT = this.module;
        if (null === MT || null === KT) throw new Error("this page can't draw previews: it has no renderer build");
        if (this.animations ??= this.loadAnimations(MT), this.deps.pack.wanted(), this.isStopped) throw new Error("the previews stopped");
        this.guarded((() => {
          this.deps.provideBuiltInAnimationPack(KT)
        }));
        const OT = this.nextId++,
          yT = this.deps.createCanvas(),
          [fT, xT] = nT(kT, cT, this.deps.dpr(), lT);
        yT.width = fT, yT.height = xT;
        if (!this.guarded((() => (KT.zMT(OT, yT), MT.open(OT, fT, xT, TT))))) throw this.hostCall(void 0, (() => {
          KT.JMT(OT)
        })), new Error("the page's renderer is lent to a session that is running");
        this.restartModelsIfFailed();
        const IT = new sT(this, MT, OT, yT, [fT, xT], this.deps);
        return this.previews.set(OT, IT), this.startFrames(), IT
      }
      prefetch() {
        if (this.prefetched || this.isStopped || (0, zT.e)() || null !== (0, zT.S)()) return;
        this.prefetched = !0;
        (null === this.module ? this.loadModule() : Promise.resolve(this.module)).then((TT => {
          null === TT || this.isStopped || (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles())
        }), (() => {}))
      }
      modelFile(TT) {
        return this.prefetchedOr(TT, this.deps.fetchModel)
      }
      imageFile(TT) {
        return this.prefetchedOr(TT, lT.N)
      }
      prefetchedOr(TT, kT) {
        const cT = this.prefetchedFiles.get(TT);
        return void 0 === cT ? kT(TT) : cT.catch((() => kT(TT)))
      }
      async prefetchPlayerFiles() {
        const TT = this.deps.playerFile().then((TT => this.deps.files.url(TT))),
          kT = await Promise.all([TT, this.deps.images.lifeformAtlasUrl(mT.e)]).catch((() => null));
        if (null === kT) return;
        const [cT, lT] = kT, MT = (TT, kT) => {
          if (null === TT) return;
          const cT = kT(TT);
          this.prefetchedFiles.set(TT, cT), cT.catch((() => {
            this.prefetchedFiles.delete(TT)
          }))
        };
        MT(cT, (TT => this.modelFile(TT))), MT(lT, (TT => this.imageFile(TT)))
      }
      loadModule() {
        return this.moduleLoad ??= this.deps.loadModule().then((TT => (null === TT && (this.moduleLoad = null), TT)), (TT => {
          throw this.moduleLoad = null, TT
        })), this.moduleLoad
      }
      fetchAnimationTable() {
        return this.animationTable ??= this.deps.fetchAnimations().catch((TT => {
          throw this.animationTable = null, TT
        })), this.animationTable
      }
      get modelsUnavailable() {
        return this.unavailable
      }
      startModels() {
        this.models ??= this.deps.startModels(this.modelsListener).catch((TT => (this.modelsFailed(TT), () => new Promise((() => {})))))
      }
      buildModel(TT, kT) {
        return this.startModels(), this.models.then((cT => cT(TT, kT))).then((TT => this.unavailable ? new Promise((() => {})) : TT))
      }
      restartModelsIfFailed() {
        this.unavailable && !this.modelsRestarted && 0 === this.previews.size && (this.modelsRestarted = !0, this.models = null, this.unavailable = !1, this.startModels())
      }
      modelsFailed(TT) {
        this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${ET} the model workers didn't start: models won't draw in the previews`, TT))
      }
      called(TT) {
        return 0 !== TT && this.logError(TT, 0), TT
      }
      closePreview(TT) {
        this.previews.delete(TT.id), null !== this.module && TT.dispose(this.module), 0 === this.previews.size && null !== this.frameId && (this.deps.cancelFrame(this.frameId), this.frameId = null)
      }
      hostOf(TT) {
        if (null !== this.module && this.module !== TT) throw new Error("a second renderer module on one page");
        return this.module = TT, null === this.host && (this.host = this.guarded((() => new TT.bMT)), this.tellInGame(), this.handOverShaderPack()), this.host
      }
      tellInGame() {
        const {
          host: TT
        } = this;
        null !== TT && this.outsideCall("the game's start or end", (() => {
          TT.LKT(this.deps.game.inGame())
        }))
      }
      handOverShaderPack() {
        const {
          host: TT,
          shaderPackArgs: kT
        } = this;
        null !== TT && null !== kT && this.outsideCall("the shader pack's hand-over", (() => {
          TT.PcT(...kT) || console.warn(`${ET} the host refused the shader pack: previews draw without it at home`)
        }))
      }
      outsideCall(TT, kT) {
        try {
          this.hostCall(void 0, kT)
        } catch (cT) {
          this.stop(), console.warn(`${ET} the previews stopped: ${TT} threw`, cT)
        }
      }
      async loadAnimations(TT) {
        const kT = OT(null),
          cT = this.module;
        try {
          kT.wasm = null === cT ? kT.wasm : this.hostCall(kT.wasm, (() => cT.NA()))
        } catch {}
        let lT, MT;
        try {
          lT = await this.fetchAnimationTable()
        } catch (KT) {
          return void this.deps.onAnimationsFailed({
            stage: "fetch",
            error: KT
          }, kT)
        }
        if (!this.settleIfTrapped()) {
          try {
            MT = TT.uKT(lT)
          } catch (KT) {
            if (this.stopIfTrapped(KT)) return;
            return void this.deps.onAnimationsFailed({
              stage: "decode",
              error: KT
            }, kT)
          }
          MT || this.deps.onAnimationsFailed({
            stage: "decode",
            error: null
          }, kT)
        }
      }
      async renderingHost() {
        if (null !== this.binding && await this.binding.done, this.settleIfTrapped()) return null;
        const TT = this.host;
        return null !== TT && this.guarded((() => TT.EKT())) ? TT : (this.opening ??= this.openAtHome().finally((() => {
          this.opening = null
        })), this.opening)
      }
      async openAtHome() {
        var TT;
        const kT = null !== (TT = this.module) && void 0 !== TT ? TT : await this.loadModule();
        if (null === kT) return null;
        const cT = this.hostOf(kT),
          lT = () => this.guarded((() => cT.EKT()));
        if (lT()) return cT;
        if (null !== (0, zT.S)() || (0, zT.e)()) return null;
        const MT = this.deps.createCanvas();
        MT.width = 1, MT.height = 1;
        const KT = await this.deps.openExtras();
        if (this.settleIfTrapped()) return null;
        const OT = (0, oT.i)().sampleCount;
        let yT;
        try {
          yT = await (0, DT.s)(kT, "previewRenderer", MT, OT, eT.e, KT)
        } catch (fT) {
          throw fT instanceof wT.d ? this.stopForTrap(fT) : (0, DT.q)(fT) && await this.deps.onRenderFailed("start_failed", fT), fT
        }
        return this.guarded((() => cT.DKT(yT))) ? ((0, zT.C)(performance.now()), this.samples = OT, this.pageCanvas = MT, (0, HT.g)(this.registryOf(kT)), cT) : lT() ? cT : null
      }
      startFrames() {
        null !== this.frameId || this.isStopped || (this.frameId = this.deps.requestFrame(this.frame))
      }
      drawFrame(TT, kT) {
        for (const OT of this.previews.values()) OT.feed();
        if (this.stopped) return;
        const cT = this.deps.now(),
          lT = TT.frame(kT);
        this.costs.push(this.deps.now() - cT), this.costs.length > 120 && this.costs.shift();
        const MT = 0 !== (256 & lT),
          KT = 255 & lT;
        for (const OT of this.previews.values()) {
          if (this.stopped) return;
          OT.collect(MT)
        }
        if (!this.stopped) {
          if (MT) {
            const kT = TT.YKT();
            for (let TT = 0; TT + 1 < kT.length; TT += 2) this.logError(kT[TT], kT[TT + 1])
          }
          if (KT === LT) return this.stop(), void this.deps.onRenderFailed("lost");
          if (KT === RT) return this.stop(), void this.deps.onFatal(TT.eKT(), TT.GKT());
          if (KT === gT) return this.stop(), void console.warn(`${ET} the previews stopped: the page's renderer went with its session`);
          (0, QT.b)(kT), this.startFrames()
        }
      }
      get isStopped() {
        return this.stopped || this.isTrapped
      }
      get isTrapped() {
        return null !== this.module && ((0, wT.i)(this.module) || "failed" === (0, vT.w)())
      }
      hostCall(TT, kT) {
        if (this.settleIfTrapped()) return TT;
        try {
          return kT()
        } catch (cT) {
          if (this.stopIfTrapped(cT)) return TT;
          throw cT
        }
      }
      guarded(TT) {
        if (this.settleIfTrapped()) throw new Error("the previews stopped: their module trapped");
        try {
          return TT()
        } catch (kT) {
          throw this.stopIfTrapped(kT), kT
        }
      }
      registryOf(TT) {
        return {
          xcT: (kT, cT) => {
            this.hostCall(void 0, (() => {
              TT.xcT(kT, cT)
            }))
          },
          IcT: kT => {
            this.hostCall(void 0, (() => {
              TT.IcT(kT)
            }))
          }
        }
      }
      settleIfTrapped() {
        return !!this.isTrapped && (this.stopped || (this.stop(), (0, HT.g)(null)), !0)
      }
      stopIfTrapped(TT) {
        return !(null === this.module || !(0, wT.m)(this.module, TT)) && (this.stopForTrap(TT), !0)
      }
      stopForTrap(TT) {
        this.stop(), (0, HT.g)(null), (0, VT.g)("previews", TT)
      }
      stop() {
        this.stopped = !0;
        for (const TT of this.previews.values()) TT.abandon()
      }
      logError(TT, kT) {
        const cT = `${TT}:${kT}`;
        this.loggedErrors.has(cT) || (this.loggedErrors.add(cT), console.warn(`${ET} error ${TT} (detail ${kT})`))
      }
    }
    let kk = null;

    function ck() {
      return kk ??= new Tk(function() {
        const TT = (0, rT.q)(NT.clientSideServerUrls.staticUrl, {
          packUrl: TT => {
            var kT, cT;
            return null !== (kT = null === (cT = mT.f.current) || void 0 === cT ? void 0 : cT.modelUrl(TT)) && void 0 !== kT ? kT : null
          }
        });
        return {
          loadModule: qT,
          startModels: async TT => {
            const {
              pageModelPool: kT
            } = await cT.e(42).then((() => cT(42867))), {
              pool: lT
            } = kT(TT);
            return (TT, kT) => lT.build(TT, kT)
          },
          fetchAnimations: async () => yT(await (0, lT.N)(pT())),
          playerFile: async () => (await (0, rT.p)()).PLAYER_FILE,
          onAnimationsFailed: (TT, kT) => {
            fT("previewAnimations", pT(), TT, kT)
          },
          provideBuiltInAnimationPack: TT => {
            CT().provide(TT)
          },
          openExtras: zT.K,
          files: TT,
          images: (0, mT.j)((0, aT.n)(TT.url), (() => mT.f.current)),
          pack: mT.f,
          game: bT.d,
          fetchModel: TT => (0, rT.h)(TT),
          createCanvas: () => document.createElement("canvas"),
          dpr: () => window.devicePixelRatio,
          now: () => performance.now(),
          requestFrame: TT => requestAnimationFrame(TT),
          cancelFrame: TT => {
            cancelAnimationFrame(TT)
          },
          onRenderFailed: iT,
          onFatal: (TT, kT) => {
            console.error(`${ET} the previews stopped: renderer error ${TT} (detail ${kT})`)
          }
        }
      }()), kk
    }
    var lk = cT(606),
      Mk = cT(38478),
      Kk = cT(3214);
    const Ok = {
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
    const yk = "[bloxd-previews]",
      fk = new Uint32Array(5);

    function xk(TT) {
      return lk.i.indexOf(TT)
    }
    const Ik = new WeakSet;

    function Ak(TT) {
      const kT = (0, Mk.f)(TT),
        cT = null === kT ? -1 : Ck(kT);
      return -1 !== cT ? cT : (Ik.has(TT) || (Ik.add(TT), console.warn(`${yk} an animation the previews' table lacks: the mob idles instead`)), -1)
    }

    function Ck(TT) {
      var kT;
      return null !== (kT = Ok[TT]) && void 0 !== kT ? kT : -1
    }

    function jk(TT, kT) {
      const {
        canvas: cT
      } = kT;
      cT.style.width = "100%", cT.style.height = "100%", cT.style.display = "block", TT.appendChild(cT)
    }

    function vk(TT) {
      const kT = TT.getBoundingClientRect();
      return [kT.width, kT.height]
    }
    class tk {
      constructor(TT, kT) {
        this.preview = TT, this.showView = kT
      }
      show(TT) {
        this.showView(this.preview, TT)
      }
      resize(TT, kT) {
        this.preview.resize(TT, kT)
      }
      close() {
        this.preview.close()
      }
    }
    class hk {
      constructor(TT) {
        this.preview = TT, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.detachControls = void 0, this.detachControls = function(TT) {
          const {
            canvas: kT
          } = TT;
          let cT = null;
          const lT = TT => {
              var lT;
              cT = {
                pointer: TT.pointerId,
                x: TT.clientX,
                y: TT.clientY
              }, null === (lT = kT.setPointerCapture) || void 0 === lT || lT.call(kT, TT.pointerId)
            },
            MT = kT => {
              var lT;
              const MT = TT.orbit;
              if ((null === (lT = cT) || void 0 === lT ? void 0 : lT.pointer) !== kT.pointerId || null === MT) return;
              const KT = kT.clientX - cT.x,
                OT = kT.clientY - cT.y;
              cT = {
                ...cT,
                x: kT.clientX,
                y: kT.clientY
              }, TT.setOrbit({
                alpha: MT.alpha - .01 * KT,
                beta: Math.min(Math.PI - .01, Math.max(.01, MT.beta - .01 * OT)),
                radius: MT.radius
              })
            },
            KT = TT => {
              var kT;
              (null === (kT = cT) || void 0 === kT ? void 0 : kT.pointer) === TT.pointerId && (cT = null)
            },
            OT = kT => {
              const cT = TT.orbit;
              if (null === cT) return;
              kT.preventDefault();
              const lT = kT.deltaY * (kT.deltaMode === WheelEvent.DOM_DELTA_LINE ? 40 : kT.deltaMode === WheelEvent.DOM_DELTA_PAGE ? 800 : 1),
                MT = Math.min(100, Math.max(5, cT.radius + .08 * lT));
              TT.setOrbit({
                ...cT,
                radius: MT
              })
            };
          return kT.style.touchAction = "none", kT.addEventListener("pointerdown", lT), kT.addEventListener("pointermove", MT), kT.addEventListener("pointerup", KT), kT.addEventListener("pointercancel", KT), kT.addEventListener("wheel", OT, {
            passive: !1
          }), () => {
            kT.removeEventListener("pointerdown", lT), kT.removeEventListener("pointermove", MT), kT.removeEventListener("pointerup", KT), kT.removeEventListener("pointercancel", KT), kT.removeEventListener("wheel", OT)
          }
        }(TT), this.dev = {
          canvas: () => TT.canvas,
          isolateHead: () => {
            console.warn(`${yk} isolateHead: noa's character preview only`)
          }
        }, this.apply(), this.ready = TT.untilSettled().then((() => {
          if (TT.isStopped) throw new Error(`${yk} the previews stopped before the character drew`);
          this.built = !0
        }))
      }
      isReady() {
        return this.built && !this.preview.isClosed
      }
      setCosmetic(TT, kT) {
        this.cosmetics[TT] = kT, this.apply()
      }
      playEmote(TT) {
        null === TT || TT !== this.emote ? (this.emote = TT, this.apply()) : this.preview.replay()
      }
      untilDrawn(TT) {
        return this.preview.untilSettled()
      }
      setOrbit(TT) {
        let {
          yaw: kT,
          pitch: cT,
          radius: lT
        } = TT;
        const MT = this.preview.orbit;
        null !== MT && this.preview.setOrbit({
          alpha: kT,
          beta: cT,
          radius: null !== lT && void 0 !== lT ? lT : MT.radius
        })
      }
      resetCamera() {}
      resize(TT, kT) {
        this.preview.resize(TT, kT)
      }
      close() {
        this.detachControls(), this.preview.close()
      }
      apply() {
        var TT;
        this.preview.setPlayer(JSON.stringify(this.cosmetics), fk, null === (TT = this.emote) ? -1 : Ck(TT))
      }
    }

    function Nk(TT, kT) {
      let {
        mobType: cT,
        variation: lT,
        animation: MT
      } = kT;
      TT.setMob(xk(cT), null !== lT && void 0 !== lT ? lT : "", 1, Ak(MT))
    }

    function Qk(TT, kT) {
      let {
        mobType: cT,
        variation: lT,
        metaInfo: MT,
        tamed: KT
      } = kT;
      TT.setPet(xk(cT), lT, MT, KT)
    }
    const Sk = {
      aimed: .533 / 1.15 * 1.1,
      ready: .16 / .85 * 1.1
    };
    class Dk {
      constructor(TT, kT, cT, lT) {
        this.preview = null, this.closed = !1, this.figure = null, this.shown = !1, this.order = "", this.span = {
          left: 0,
          width: 0
        }, this.lineup = [0, 0], this.given = null, this.loaded = !1, TT(cT.width, lT[1], lT).then((TT => {
          if (this.closed) return void TT.close();
          const {
            style: cT
          } = TT.canvas;
          cT.position = "absolute", cT.top = "0", cT.visibility = "hidden", jk(kT, TT), this.preview = TT, this.apply()
        })).catch((TT => {
          console.error(`${yk} couldn't open a lineup figure`, TT)
        }))
      }
      update(TT, kT, cT, lT, MT) {
        this.figure = TT, this.shown = kT, this.order = cT, this.span = lT, this.lineup = MT, this.apply()
      }
      close() {
        var TT;
        this.closed = !0, null === (TT = this.preview) || void 0 === TT || TT.close(), this.preview = null
      }
      apply() {
        const {
          preview: TT,
          figure: kT,
          lineup: cT
        } = this;
        if (null === TT || null === kT) return;
        if (this.given !== kT) {
          var lT;
          this.given = kT, this.loaded = !1;
          const cT = null === kT.Gw ? 0 : null !== (lT = (0, Kk.e)(kT.Gw)) && void 0 !== lT ? lT : 0;
          TT.setFigure(function(TT) {
            return JSON.stringify(Object.fromEntries(TT.cosmetics))
          }(kT), cT, Ak(kT.animation), kT.size), TT.untilSettled().then((() => {
            this.given === kT && (this.loaded = !0, this.apply())
          }))
        }
        const {
          left: MT,
          width: KT
        } = this.span;
        TT.resize(KT, cT[1], cT);
        const {
          style: OT
        } = TT.canvas;
        OT.left = `${MT}px`, OT.width = `${KT}px`, OT.zIndex = this.order, OT.visibility = this.shown && this.loaded ? "visible" : "hidden"
      }
    }
    class ak {
      constructor(TT, kT) {
        this.open = kT, this.layer = void 0, this.figures = [], this.view = {
          figures: [],
          shown: []
        }, this.size = void 0, this.size = vk(TT), this.layer = document.createElement("div");
        const {
          style: cT
        } = this.layer;
        cT.position = "relative", cT.isolation = "isolate", cT.overflow = "hidden", cT.width = "100%", cT.height = "100%", cT.pointerEvents = "none", TT.appendChild(this.layer)
      }
      show(TT) {
        this.view = TT, this.place()
      }
      resize(TT, kT) {
        this.size = [TT, kT], this.place()
      }
      close() {
        for (const TT of this.figures) TT.close();
        this.figures = [], this.layer.remove()
      }
      place() {
        const {
          figures: TT,
          shown: kT
        } = this.view;
        for (const lT of this.figures.splice(TT.length)) lT.close();
        const {
          size: cT
        } = this;
        TT.forEach(((lT, MT) => {
          var KT;
          const OT = function(TT, kT, cT, lT) {
            let [MT, KT] = lT;
            const OT = (TT + .5) * MT / kT,
              yT = Math.min(Math.max(MT / kT, 2 * cT * KT), 2 * Math.max(OT, MT - OT));
            return {
              left: OT - yT / 2,
              width: yT
            }
          }(MT, TT.length, function(TT) {
            let {
              animation: kT,
              size: cT
            } = TT;
            const {
              aimed: lT,
              ready: MT
            } = Sk;
            return (Ak(kT) === Ok.gunAimed ? lT : MT) * cT
          }(lT), cT);
          this.figures[MT] ??= new Dk(this.open, this.layer, OT, cT), this.figures[MT].update(lT, null !== (KT = kT[MT]) && void 0 !== KT && KT, function(TT, kT) {
            return String(Math.round(1e3 * TT) + kT)
          }(lT.size, MT), OT, cT)
        }))
      }
    }
    const Fk = {
      player: XT,
      store: dT
    };
    class rk {
      constructor(TT) {
        this.page = TT
      }
      async openMob(TT) {
        return new tk(await this.open(TT, uT), Nk)
      }
      async openPet(TT) {
        return new tk(await this.open(TT, uT), Qk)
      }
      openMobLineup(TT) {
        return new ak(TT, ((TT, kT, cT) => this.page.openPreview(uT, TT, kT, cT)))
      }
      async openCharacter(TT, kT) {
        return new hk(await this.open(TT, Fk[kT]))
      }
      async open(TT, kT) {
        const [cT, lT] = vk(TT), MT = await this.page.openPreview(kT, cT, lT);
        return jk(TT, MT), MT
      }
    }
  },
  36571: (TT, kT, cT) => {
    cT.d(kT, {
      A: () => NT,
      c: () => lT,
      e: () => MT,
      i: () => CT,
      j: () => hT,
      k: () => IT,
      l: () => QT,
      p: () => fT,
      q: () => xT,
      t: () => jT,
      u: () => vT,
      y: () => tT
    });
    const lT = [{
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

    function MT(TT, kT) {
      const {
        numLines: cT,
        charsPerLine: MT
      } = lT[kT];
      return ST(TT, cT, MT, !1)
    }
    const KT = 7 / 8,
      OT = .25,
      yT = 8;

    function fT(TT, kT) {
      return {
        width: Math.min(TT, yT) - 2 * OT,
        height: Math.min(kT, yT) - 2 * OT
      }
    }

    function xT(TT, kT, cT) {
      const MT = fT(TT, kT),
        {
          numLines: OT,
          charsPerLine: yT
        } = lT[cT];
      return {
        numLines: Math.max(1, Math.floor(OT / KT * MT.height)),
        charsPerLine: Math.max(1, Math.floor(yT * MT.width))
      }
    }

    function IT(TT, kT, cT, lT) {
      const {
        numLines: MT,
        charsPerLine: KT
      } = xT(cT, lT, kT);
      return ST(TT, MT, KT, !1)
    }
    const AT = 32e3;

    function CT(TT) {
      return TT.slice(0, AT)
    }
    const jT = 512e3,
      vT = 64,
      tT = jT;

    function hT(TT, kT) {
      const cT = Math.max(0, tT - kT),
        lT = Math.min(jT, cT);
      return TT.slice(0, lT)
    }
    const NT = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      KI: {
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

    function QT(TT, kT) {
      const {
        numLines: cT,
        charsPerLine: lT
      } = NT[kT];
      return ST(TT, cT, lT, !1)
    }

    function ST(TT, kT, cT, lT, MT) {
      (MT || lT) && (TT = TT.slice(0, null !== MT && void 0 !== MT ? MT : kT * cT));
      const KT = TT.split("\n");
      if (KT.length > kT && KT.splice(kT, KT.length - kT), !lT)
        for (let OT = 0; OT < KT.length; OT++) {
          const TT = KT[OT];
          TT.length > cT && (KT[OT] = TT.substring(0, cT), KT.length < kT && KT.splice(OT + 1, 0, TT.substring(cT)))
        }
      return KT.join("\n")
    }
  },
  42786: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/builtInAnimations.anim.38e056f49512e10b7206.gz"
  },
  42789: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/previewAnimations.dat.24d2343c38c8f9b3fb85.gz"
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);