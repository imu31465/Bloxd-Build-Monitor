export const id = 56;
export const ids = [56];
export const modules = {
  37629: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => zT,
      g: () => kT
    });
    const iT = new WeakMap;

    function zT(TT, oT) {
      return iT.set(TT, oT), TT
    }

    function kT(TT) {
      var oT;
      return null !== (oT = iT.get(TT)) && void 0 !== oT ? oT : null
    }
  },
  37648: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => XT
    });
    var iT = IT(1193);

    function zT(TT) {
      const oT = /(\d*\.?\d+)px/.exec(TT);
      return oT ? Number(oT[1]) : null
    }

    function kT(TT) {
      return TT.split(/[\s,]+/).pop()
    }
    let WT = !1;
    const XT = {
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
      drawText: function(TT, oT, iT, XT, BT, FT) {
        if (BT <= 0 || FT <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: ST,
          fontVariant: DT,
          fontWeight: LT,
          fontSize: xT,
          font: cT
        } = this, KT = [ST, DT, LT, `${xT}px`, cT].filter(Boolean).join(" "), MT = [
          [LT, `${xT}px`, kT(cT)].filter(Boolean).join(" "), `${xT}px sans-serif`
        ], rT = TT.font, AT = function(TT, oT, IT) {
          for (const iT of oT) {
            TT.font = iT;
            const oT = zT(TT.font),
              WT = kT(iT);
            if (null !== oT && Math.abs(oT - IT) <= .5 && TT.font.toLowerCase().includes(WT.toLowerCase())) return iT
          }
          return null
        }(TT, [KT, ...MT], xT);
        AT !== KT && function(TT, oT, iT) {
          WT || (WT = !0, Promise.resolve().then((() => IT(1071))).then((IT => {
            let {
              JK: zT
            } = IT;
            zT(new Error("A canvas didn't take canvasTxt's font"), {
              font: TT,
              qx: oT,
              drawnWith: null !== iT && void 0 !== iT ? iT : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(KT, rT, AT);
        const gT = zT(TT.font);
        if (null === AT && null !== gT && gT > 0) {
          const IT = xT / gT;
          TT.save();
          try {
            return TT.scale(IT, IT), {
              height: this.drawLines(TT, oT, iT / IT, XT / IT, BT / IT, FT / IT, gT).height * IT
            }
          } finally {
            TT.restore()
          }
        }
        return this.drawLines(TT, oT, iT, XT, BT, FT, xT)
      },
      drawLines: function(TT, oT, IT, zT, kT, WT, XT) {
        const BT = IT + kT,
          FT = zT + WT;
        let ST, DT = zT + WT / 2 + XT / 2;
        "right" === this.align ? (ST = BT, TT.textAlign = "right") : "left" === this.align ? (ST = IT, TT.textAlign = "left") : (ST = IT + kT / 2, TT.textAlign = "center");
        for (const iT of oT) {
          TT.measureText(iT).width >= kT && (oT = oT.replace(iT, ""))
        }
        oT = (0, iT.U)(oT);
        const LT = [],
          xT = oT.split("\n"),
          cT = this.justify ? TT.measureText("\u200a").width : 0;
        xT.forEach((oT => {
          let IT = TT.measureText(oT).width;
          if (IT <= kT) LT.push(oT);
          else {
            let iT = oT;
            const zT = kT;
            let WT, XT, BT;
            for (IT = TT.measureText(iT).width; IT > zT;) {
              for (WT = 0, XT = 0, BT = ""; XT < zT;) WT++, BT = iT.substr(0, WT), XT = TT.measureText(BT).width;
              WT--, BT = BT.substr(0, WT);
              const oT = WT;
              if (" " !== iT.substr(WT, 1)) {
                for (;
                  " " !== iT.substr(WT, 1) && 0 !== WT;) WT--;
                0 === WT && (WT = oT), BT = iT.substr(0, WT)
              }
              BT = this.justify ? this.justifyLine(TT, BT, cT, "\u200a", kT) : BT, iT = iT.substr(WT), IT = TT.measureText(iT).width, LT.push(BT)
            }
            IT > 0 && LT.push(iT)
          }
        }));
        const KT = this.lineHeight ? this.lineHeight : this.getTextHeight(TT, oT),
          MT = KT * (LT.length - 1),
          rT = MT / 2;
        let AT = zT;
        "top" === this.vAlign ? DT = zT + XT : "bottom" === this.vAlign ? (DT = FT - MT, AT = FT) : (AT = zT + WT / 2, DT -= rT), LT.forEach((oT => {
          oT = oT.trim(), TT.fillText(oT, ST, DT), DT += KT
        })), this.debug && (TT.lineWidth = 3, TT.strokeStyle = "#00909e", TT.strokeRect(IT, zT, kT, WT), TT.lineWidth = 2, TT.strokeStyle = "#f6d743", TT.beginPath(), TT.moveTo(ST, zT), TT.lineTo(ST, FT), TT.stroke(), TT.strokeStyle = "#ff6363", TT.beginPath(), TT.moveTo(IT, AT), TT.lineTo(BT, AT), TT.stroke());
        return {
          height: MT + KT
        }
      },
      getTextHeight: function(TT, oT) {
        const IT = TT.textBaseline;
        TT.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: iT
        } = TT.measureText(oT);
        return TT.textBaseline = IT, iT
      },
      justifyLine: function(TT, oT, IT, iT, zT) {
        const kT = oT.trim(),
          WT = TT.measureText(kT).width,
          XT = kT.split(/\s+/).length - 1,
          BT = Math.floor((zT - WT) / IT);
        if (XT <= 0 || BT <= 0) return kT;
        const FT = Math.floor(BT / XT);
        let ST = BT - XT * FT,
          DT = [];
        for (let LT = 0; LT < FT; LT++) DT.push(iT);
        DT = DT.join("");
        return kT.replace(/\s+/g, (TT => {
          const oT = ST > 0 ? DT + iT : DT;
          return ST--, TT + oT
        }))
      }
    }
  },
  37654: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => KT,
      f: () => cT,
      j: () => LT,
      m: () => ST,
      q: () => DT
    });
    var iT = IT(3811),
      zT = IT(314);
    const kT = 1024,
      WT = 1536,
      XT = 2 * iT.p + 1,
      BT = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      FT = 1.5;

    function ST(TT, oT, IT) {
      if ("string" !== typeof TT) return oT;
      try {
        const IT = JSON.parse(TT);
        return IT && "object" === typeof IT ? IT : oT
      } catch (iT) {
        return void 0 !== IT && console.error(`Couldn't parse ${IT}`, iT), oT
      }
    }

    function DT(TT) {
      return ST(TT, null, "a leaderboard's rows")
    }

    function LT(TT, oT) {
      var IT, iT;
      return null !== oT && void 0 !== oT ? oT : {
        status: null !== (IT = TT.status) && void 0 !== IT ? IT : "loading",
        entries: null !== (iT = TT.entries) && void 0 !== iT ? iT : []
      }
    }

    function xT(TT, oT) {
      return "number" === typeof TT && Number.isFinite(TT) && TT > 0 ? TT : oT
    }

    function cT(TT, oT) {
      const IT = xT(TT.size, 1);
      let iT = xT(TT.width, xT(2.5 * IT, 2.5)),
        zT = xT(TT.height, xT(3.75 * IT, 3.75));
      Number.isFinite(kT * zT / iT) && Number.isFinite(WT * iT / zT) || (iT = 2.5, zT = 3.75);
      const XT = zT / iT,
        BT = Math.max(1, Math.min(kT, oT / XT));
      return {
        width: iT,
        height: zT,
        layoutWidth: Math.max(kT, WT / XT),
        layoutHeight: Math.max(WT, kT * XT),
        pixelWidth: Math.round(BT),
        pixelHeight: Math.round(Math.max(1, Math.min(oT, BT * XT)))
      }
    }

    function KT(TT, oT, IT, WT, ST, DT) {
      TT.setTransform(1, 0, 0, 1, 0, 0), TT.fillStyle = zT.L.defaultNameTagBackground, TT.fillRect(0, 0, oT, IT), TT.scale(oT / WT.layoutWidth, IT / WT.layoutHeight), TT.translate((WT.layoutWidth - kT) / 2, 0),
        function(TT, oT, IT, kT) {
          var WT, ST, DT, LT;
          const {
            top: xT,
            around: cT,
            showPlayerText: KT,
            localPlayerDbId: AT
          } = IT, {
            whiteUiText: gT,
            grayUiText: hT,
            yellowUiText: wT
          } = zT.L;
          TT.textBaseline = "middle";
          const mT = function(oT, IT, iT, zT, kT, WT) {
              let XT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              TT.font = `bold ${zT}px 'Jetbrains Mono', monospace`, TT.fillStyle = kT, TT.textAlign = XT;
              let BT = oT.replace(/[\r\n\t]/g, " ");
              if (TT.measureText(BT).width > WT) {
                for (; BT.length > 0 && TT.measureText(`${BT}\u2026`).width > WT;) BT = BT.slice(0, -1);
                BT += "\u2026"
              }
              TT.fillText(BT, IT, iT)
            },
            eT = oT => {
              TT.fillStyle = gT, TT.globalAlpha = .15, TT.fillRect(24, oT, 976, 2), TT.globalAlpha = 1
            },
            RT = null === AT ? null : (0, zT._b)(AT),
            uT = TT => null !== RT && TT.playerHash === RT,
            vT = MT(xT.entries, iT.q),
            ET = "ready" === xT.status && vT.length > 0,
            fT = null === cT ? [] : MT(cT.entries, XT),
            CT = vT.some(uT),
            jT = null === cT ? null : function(TT) {
              const oT = TT;
              if (!oT || !Number.isFinite(oT.rank) || !Number.isFinite(oT.tied) || !Number.isFinite(oT.total)) return null;
              return oT
            }(cT.standing),
            JT = fT.find(uT),
            UT = vT.find(uT),
            aT = null === jT || void 0 === JT ? null : {
              value: JT.value,
              rank: jT.rank
            },
            YT = rT(vT, void 0 === UT || UT.value === (null === aT || void 0 === aT ? void 0 : aT.value) ? aT : null),
            QT = rT(fT, aT),
            OT = (TT, oT) => {
              const IT = TT.findIndex(uT);
              return IT >= 0 ? oT[IT] : null
            },
            HT = null !== (WT = null !== (ST = null === jT || void 0 === jT ? void 0 : jT.rank) && void 0 !== ST ? ST : OT(fT, QT)) && void 0 !== WT ? WT : OT(vT, YT);
          TT.font = "bold 34px 'Jetbrains Mono', monospace";
          const nT = [...ET ? YT : [], ...CT ? [] : QT],
            qT = Math.min(280, Math.max(0, ...nT.map((oT => TT.measureText(BT.format(oT)).width)))),
            ZT = qT <= 80,
            lT = ZT ? 80 : 32 + qT,
            sT = ZT ? 148 : lT + 28,
            tT = 660 - sT;
          mT(`TOP ${iT.q}  /  ALL TIME`, 24, 52, 28, hT, 976), mT(KT ? String(null !== (DT = oT.title) && void 0 !== DT ? DT : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, gT, 976), mT("RANK", 32, 174, 28, hT, sT - 40), mT("PLAYER", sT, 174, 28, hT, tT), mT(KT ? String(null !== (LT = oT.scoreLabel) && void 0 !== LT ? LT : "Score").slice(0, 24) : "Score", 992, 174, 28, hT, 304, "right"), eT(202);
          const GT = (kT - 232) / (iT.q + FT + XT),
            pT = 208 + iT.q * GT,
            bT = pT + FT * GT,
            yT = (oT, IT, iT, zT) => {
              const kT = uT(oT);
              TT.fillStyle = kT ? wT : gT, TT.globalAlpha = kT ? .15 : zT ? .035 : 0, TT.fillRect(24, iT - GT / 2 + 1, 976, GT - 2), TT.globalAlpha = 1;
              const WT = kT ? wT : gT;
              mT(BT.format(IT), lT, iT, 34, WT, ZT ? 80 : qT, ZT ? "center" : "right"), mT(KT ? String(oT.name).slice(0, 64) : "Player", sT, iT, 34, WT, tT);
              const XT = BT.format(oT.value);
              mT(TT.measureText(XT).width > 304 ? oT.value.toExponential(6) : XT, 992, iT, 34, WT, 304, "right")
            };
          if (ET)
            for (const [iT, zT] of vT.entries()) yT(zT, YT[iT], 208 + (iT + .5) * GT, iT % 2 === 0);
          else {
            const TT = "error" === xT.status,
              oT = TT ? "Couldn't load leaderboard" : "ready" === xT.status ? "No scores yet" : "Loading leaderboard\u2026",
              IT = TT ? "Trying again shortly" : "ready" === xT.status ? "Be the first on the board!" : "Fetching the top players",
              iT = (208 + pT) / 2;
            mT(oT, 512, iT - 28, 40, TT ? zT.L.redUiText : gT, 960, "center"), mT(IT, 512, iT + 27, 30, hT, 960, "center")
          }
          const NT = pT + FT * GT / 2;
          if (null === HT) eT(NT);
          else {
            const oT = null === jT ? 0 : jT.tied - 1,
              IT = `YOUR RANK #${BT.format(HT)}${null===jT?"":` of ${BT.format(jT.total)}`}`;
            TT.font = "bold 36px 'Jetbrains Mono', monospace";
            const iT = Math.max(20, Math.min(36, Math.floor(34560 / TT.measureText(IT).width)));
            mT(IT, 512, NT - (oT > 0 ? 15 : 0), iT, wT, 960, "center"), oT > 0 && mT(`Tied with ${BT.format(oT)} other${1===oT?"":"s"}`, 512, NT + 24, 24, hT, 960, "center")
          }
          if (null === cT) return;
          const PT = bT + XT * GT / 2;
          if (CT) mT(`You're in the top ${iT.q}!`, 512, PT, 40, wT, 960, "center");
          else if (0 === fT.length) mT("You're not on this board yet", 512, PT, 34, hT, 960, "center");
          else
            for (const [iT, zT] of fT.entries()) yT(zT, QT[iT], bT + (iT + .5) * GT, iT % 2 === 0)
        }(TT, ST, DT, WT.layoutHeight)
    }

    function MT(TT, oT) {
      return Array.isArray(TT) ? TT.slice(0, oT).filter((TT => TT && Number.isFinite(TT.rank) && Number.isFinite(TT.value))) : []
    }

    function rT(TT, oT) {
      const IT = [];
      let iT = !1;
      return TT.forEach(((zT, kT) => {
        if (null !== oT && zT.value === oT.value) return void IT.push(oT.rank);
        const WT = kT > 0 && zT.value === TT[kT - 1].value;
        WT || (iT = 0 === kT && 1 !== zT.rank), IT.push(WT && !iT ? IT[kT - 1] : zT.rank)
      })), IT
    }
  },
  37844: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => zT,
      e: () => kT
    });
    const iT = 32;

    function zT(TT) {
      return Array.from(TT).length
    }

    function kT(TT) {
      const oT = [""];
      let IT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        zT = "";
      const kT = () => {
        oT.push(""), IT = 0, zT = ""
      };
      for (const WT of TT.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(WT)) kT();
        else if (/^\s+$/.test(WT)) zT += WT;
      else if (WT.length > 0) {
        const TT = Array.from(WT);
        IT > 0 && IT + zT.length + TT.length > iT && kT(), oT[oT.length - 1] += zT, IT += zT.length, zT = "";
        for (const zT of TT) IT >= iT && kT(), oT[oT.length - 1] += zT, IT++
      }
      return oT[oT.length - 1] += zT, oT
    }
  },
  42097: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      WasmPreviewHost: () => wo,
      pageBuiltInAnimationPack: () => LT,
      pagePreviews: () => To,
      previewModule: () => GT
    });
    var iT = IT(3280),
      zT = IT(623);
    const kT = "[bloxd-wasm-client]";

    function WT(TT) {
      const oT = {
        wasm: "unknown",
        client: String(zT.c)
      };
      try {
        var IT;
        oT.wasm = null !== (IT = null === TT || void 0 === TT ? void 0 : TT.uD()) && void 0 !== IT ? IT : oT.wasm
      } catch {}
      return oT
    }
    async function XT(TT) {
      if (TT.length < 2 || 31 !== TT[0] || 139 !== TT[1]) return TT;
      if ("undefined" === typeof DecompressionStream) {
        const {
          ungzip: oT
        } = await IT.e(214).then((() => IT(35928)));
        return oT(TT)
      }
      const oT = new Blob([TT]).stream().pipeThrough(new DecompressionStream("gzip"));
      return new Uint8Array(await new Response(oT).arrayBuffer())
    }

    function BT(TT, oT, iT, zT) {
      Promise.resolve().then((() => IT(39745))).then((IT => {
        let {
          reportDataLoadFailure: kT
        } = IT;
        kT(TT, oT, iT, zT)
      }), (oT => {
        console.warn(`${kT} ${TT} didn't load, and the report couldn't be sent`, iT.error, oT)
      }))
    }
    const FT = [3e4, 12e4, 3e5];
    class ST {
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
        const oT = WT(TT),
          IT = await async function(TT, oT) {
            let IT;
            try {
              IT = await TT()
            } catch (iT) {
              return {
                stage: "fetch",
                error: iT
              }
            }
            try {
              return oT(IT) ? null : {
                stage: "decode",
                error: null
              }
            } catch (iT) {
              return {
                stage: "decode",
                error: iT
              }
            }
          }((() => this.deps.fetch()), (oT => {
            const IT = TT.ikT(oT);
            return IT && this.resolveSet(oT), IT
          }));
        if (null !== IT) {
          if ("fetch" === IT.stage) {
            this.loading = null;
            const oT = FT[this.retries++];
            void 0 !== oT && this.deps.later((() => {
              this.provide(TT)
            }), oT)
          }
          this.reported || (this.reported = !0, this.deps.onFailed(IT, oT))
        }
      }
    }
    let DT = null;

    function LT() {
      return DT ??= new ST({
        fetch: async () => XT(await (0, iT.K)(xT(), {
          priority: "low"
        })),
        onFailed: (TT, oT) => {
          BT("builtInAnimations", xT(), TT, oT)
        },
        later: (TT, oT) => {
          setTimeout(TT, oT)
        }
      }), DT
    }

    function xT() {
      return IT(42100)
    }
    var cT = IT(3276),
      KT = IT(35343),
      MT = IT(39553),
      rT = IT(1183),
      AT = IT(303),
      gT = IT(39567),
      hT = IT(39803),
      wT = (IT(39581), IT(39760)),
      mT = IT(39762),
      eT = IT(39768),
      RT = IT(39577),
      uT = IT(39815),
      vT = IT(39819),
      ET = IT(39593),
      fT = IT(39694),
      CT = IT(39697),
      jT = IT(39807),
      JT = IT(41388),
      UT = IT(39579);
    const aT = "[bloxd-previews]",
      YT = 4e5,
      QT = 0,
      OT = 1,
      HT = 2,
      nT = 1,
      qT = 2,
      ZT = 3,
      lT = 0,
      sT = 1,
      tT = 2;

    function GT(TT) {
      const oT = TT,
        IT = (0, gT.I)(TT),
        iT = (0, gT.n)(TT);
      return null !== IT && null !== iT && "function" === typeof oT.TkT && "function" === typeof oT.okT && "function" === typeof oT.IkT ? oT : null
    }

    function pT(TT, oT, IT) {
      let [iT, zT] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [TT, oT], kT = Math.min(Number.isFinite(IT) && IT > 0 ? IT : 1, 2);
      const WT = Math.max(0, iT, TT) * Math.max(0, zT, oT) * kT * kT;
      return WT > YT && (kT *= Math.sqrt(YT / WT)), [Math.max(1, Math.floor(Math.max(0, TT) * kT)), Math.max(1, Math.floor(Math.max(0, oT) * kT))]
    }

    function bT() {
      return IT(42105)
    }
    async function yT(TT, oT) {
      "lost" === TT && (0, ET.s)();
      const iT = await (0, ET.F)();
      if (null === iT || (0, gT.r)(iT) || (0, ET.d)()) return;
      const zT = "webgpu" === iT.backend;
      if (!zT && "lost" !== TT) return;
      const kT = zT ? (0, gT.M)(TT) : null;
      if (null !== kT) {
        const IT = `WebGPU failed at home (${TT}${void 0===oT?"":`: ${oT instanceof Error?oT.message:(0,UT.h)(oT)}`}) and ${kT}`;
        return console.warn(`${aT} ${IT}: the previews stop`, null !== oT && void 0 !== oT ? oT : ""), void(0, ET.o)(IT)
      }(0, ET.n)();
      try {
        await async function(TT, oT, iT) {
          var zT;
          let {
            backend: kT,
            adapter: XT
          } = TT;
          const BT = (0, cT.L)(),
            {
              flushCrashReports: FT,
              reportRenderReload: ST
            } = await Promise.resolve().then((() => IT(39745)));
          ST(kT, "start_failed" === oT ? 0 : 1, WT(BT ? (0, cT.z)() : null), {
            cause: oT,
            error: "lost" === oT && null !== (zT = (0, gT.R)(BT ? (0, gT.I)((0, cT.z)()) : null)) && void 0 !== zT ? zT : iT,
            context: {
              adapter: XT,
              boundAtMs: "start_failed" === oT ? null : (0, ET.E)(),
              indirectHangs: (0, ET.u)()
            }
          }), await FT(fT.b)
        }(iT, TT, oT)
      } catch (XT) {
        console.warn(`${aT} ${iT.backend} failed at home (${TT}), and its report couldn't be sent`, XT)
      }(0, fT.j)()
    }
    async function NT() {
      if (!(0, cT.L)()) {
        const TT = await (0, ET.F)();
        if (null === TT || (0, gT.r)(TT)) return null;
        if (await (0, KT.h)(await TT.load(), MT.c), !(0, cT.L)()) return null
      }
      return GT((0, cT.z)())
    }
    class PT {
      constructor(TT, oT, IT, iT, zT, kT) {
        this.page = TT, this.host = oT, this.id = IT, this.canvas = iT, this.size = zT, this.models = void 0, this.images = void 0, this.write = void 0, this.outcomes = [], this.closed = !1, this.quiet = 0, this.settled = [];
        const WT = {
            ...kT.images,
            glbUrl: TT => {
              var oT;
              return null !== (oT = this.models.drawnUrl(TT)) && void 0 !== oT ? oT : kT.images.glbUrl(TT)
            }
          },
          XT = oT => TT.modelFile(oT);
        this.images = new hT.f(WT, (TT => {
          console.warn(`${aT} image ${TT.key.kind}:${TT.key.index}:${TT.key.word} failed`, TT.error)
        }), {
          fetchFile: XT,
          fetchImage: oT => TT.imageFile(oT)
        }), TT.startModels(), this.models = new wT.g(kT.files, ((oT, IT) => TT.buildModel(oT, IT)), (TT => {
          console.warn(`${aT} model file ${TT.file} (${TT.url}) failed`, TT.error)
        }), {
          fetchFile: XT,
          onWritten: (TT, oT) => {
            this.images.glbWritten(TT, oT)
          },
          onTaken: (TT, oT) => {
            this.images.glbTaken(TT, oT)
          }
        }), this.write = (TT, oT, IT) => {
          if (this.closed) return !0;
          if (TT === wT.c) {
            const TT = new DataView(IT.buffer, IT.byteOffset, eT.e),
              iT = TT.getUint32(0, !0),
              zT = TT.getUint32(eT.h, !0),
              kT = this.page.hostCall(tT, (() => this.host.WWT(this.id, iT, oT, IT.subarray(eT.e))));
            return this.outcomes.push([zT, kT]), !0
          }
          return TT === hT.e && (this.page.hostCall(void 0, (() => {
            this.host.BWT(this.id, IT)
          })), !0)
        }
      }
      get isClosed() {
        return this.closed
      }
      get isStopped() {
        return this.page.isStopped
      }
      resize(TT, oT, IT) {
        if (this.closed) return;
        const [iT, zT] = pT(TT, oT, this.page.dpr(), IT);
        iT === this.size[0] && zT === this.size[1] || (this.size = [iT, zT], this.page.hostCall(void 0, (() => {
          this.host.resize(this.id, iT, zT)
        })))
      }
      setMob(TT, oT, IT, iT) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.xWT(this.id, TT, oT, IT, iT))))
      }
      setPet(TT, oT, IT, iT) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.KWT(this.id, TT, oT, IT, iT))))
      }
      setPlayer(TT, oT, IT) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.SWT(this.id, TT, oT, IT))))
      }
      setFigure(TT, oT, IT, iT) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.DWT(this.id, TT, oT, IT, iT))))
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
          alpha: oT,
          beta: IT,
          radius: iT
        } = TT;
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.cWT(this.id, oT, IT, iT)
        }))
      }
      untilSettled() {
        return this.closed || this.page.isStopped ? Promise.resolve() : (this.quiet = 0, new Promise((TT => {
          this.settled.push(TT)
        })))
      }
      packChanged() {
        this.quiet = 0, this.models.refresh(), (0, uT.g)(this.images)
      }
      feed() {
        this.models.drain(this.write);
        for (const [TT, oT] of this.outcomes) {
          const IT = oT === lT ? [] : [oT === sT ? TT : (TT | wT.e) >>> 0];
          this.models.taken(TT, IT)
        }
        this.outcomes.length = 0, this.images.drain(this.write)
      }
      collect(TT) {
        let oT = !1;
        if (TT) {
          const TT = this.host.AWT(this.id);
          for (const oT of TT) this.models.request(oT);
          const IT = this.host.rWT(this.id);
          IT.length > 0 && this.images.onEvent(IT), oT = TT.length > 0 || IT.length > 0
        }
        const IT = this.page.modelsUnavailable ? 0 : this.models.asking + this.models.unanswered,
          iT = oT || IT > 0 || this.images.waiting > 0 || this.images.inFlight > 0;
        this.quiet = iT ? 0 : this.quiet + 1, this.quiet >= 3 && this.resolveSettled()
      }
      close() {
        this.closed || (this.closed = !0, this.page.closePreview(this), this.resolveSettled())
      }
      abandon() {
        this.resolveSettled()
      }
      dispose(TT) {
        this.page.hostCall(void 0, (() => {
          const oT = this.host.close(this.id);
          oT.length > 0 && this.images.onEvent(oT), this.page.isTrapped || TT.IkT(this.id)
        })), this.images.dispose(), this.canvas.remove()
      }
      resolveSettled() {
        const TT = this.settled;
        this.settled = [];
        for (const oT of TT) oT()
      }
    }
    class dT {
      constructor(TT) {
        this.deps = TT, this.module = null, this.host = null, this.opening = null, this.pageCanvas = null, this.samples = 1, this.binding = null, this.sessionEnds = 0, this.lastEndReturned = !0, this.previews = new Map, this.nextId = 1, this.frameId = null, this.stopped = !1, this.loggedErrors = new Set, this.modelsListener = {
          onUnavailable: TT => {
            this.modelsFailed(TT)
          },
          onDecoderFailed: TT => {
            this.loggedErrors.has("modelDecoder") || (this.loggedErrors.add("modelDecoder"), console.warn(`${aT} the Draco decoder didn't load: models waiting on it won't draw`, TT))
          },
          onWorkerLost: TT => {
            this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${aT} a model worker was lost: ${TT}`))
          },
          onModuleRetry: () => {}
        }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.Fc = {
          setShaderPack: (TT, oT, IT, iT, zT) => (this.shaderPackArgs = [TT, oT, IT, iT, zT], this.handOverShaderPack(), !0)
        }, this.frame = TT => {
          this.frameId = null;
          const oT = this.host;
          if (null !== oT && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped) try {
            this.drawFrame(oT, TT)
          } catch (IT) {
            if (!this.stopIfTrapped(IT) && (this.stop(), (0, gT.s)(IT))) return void this.deps.onRenderFailed("frames_refused", IT);
            console.warn(`${aT} the previews stopped: their frame threw`, IT)
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
        var TT, oT;
        return null !== (TT = null === (oT = this.host) || void 0 === oT ? void 0 : oT.attached()) && void 0 !== TT && TT
      }
      get open() {
        return this.previews.size
      }
      get frameCostMs() {
        return 0 === this.costs.length ? 0 : this.costs.reduce(((TT, oT) => TT + oT), 0) / this.costs.length
      }
      async bindSession(TT, oT, IT) {
        const iT = this.binding,
          zT = this.sessionEnds;
        try {
          const kT = this.hostOf(TT);
          if (!kT.XWT()) {
            const oT = (0, CT.g)().sampleCount,
              WT = await IT(oT);
            if (this.sessionEnds !== zT) return this.keepRendererOfEndedSession(TT, kT, WT, oT, iT), oT;
            if (!kT.GkT(WT)) throw new Error("the page has a renderer already");
            (0, ET.p)(performance.now()), this.samples = oT, (0, jT.c)((0, gT.n)(TT))
          }
          if (!kT.attach(oT)) throw new Error("the page's renderer is lent to another session");
          return this.samples
        } finally {
          this.binding === iT && this.endBinding()
        }
      }
      keepRendererOfEndedSession(TT, oT, IT, iT, zT) {
        if (!this.lastEndReturned || null !== this.binding && this.binding !== zT) try {
          IT.free()
        } catch (kT) {
          console.warn(`${aT} an ended session's renderer didn't free`, kT)
        } else oT.GkT(IT) && ((0, ET.p)(performance.now()), this.samples = iT, (0, jT.c)(this.registryOf(TT)))
      }
      async beginSession() {
        var TT;
        let oT = () => {};
        const IT = new Promise((TT => {
          oT = TT
        }));
        this.binding = {
          done: IT,
          release: oT
        }, await (null === (TT = this.opening) || void 0 === TT ? void 0 : TT.catch((() => null)));
        const iT = this.pageCanvas;
        return this.pageCanvas = null, iT
      }
      endSession(TT) {
        var oT, IT;
        if (this.sessionEnds++, this.lastEndReturned = TT, this.endBinding(), TT) {
          try {
            var iT;
            null === (iT = this.host) || void 0 === iT || iT.detach()
          } catch (zT) {
            return void console.warn(`${aT} the session's core kept the page's renderer`, zT)
          }!0 === (null === (oT = this.host) || void 0 === oT ? void 0 : oT.attached()) && console.warn(`${aT} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (IT = this.host) || void 0 === IT ? void 0 : IT.XWT()) && (0, jT.c)(this.registryOf(this.module))
        }
      }
      endBinding() {
        var TT;
        null === (TT = this.binding) || void 0 === TT || TT.release(), this.binding = null
      }
      async openPreview(TT, oT, IT, iT) {
        const zT = await this.renderingHost(),
          kT = this.module;
        if (null === zT || null === kT) throw new Error("this page can't draw previews: it has no renderer build");
        if (this.animations ??= this.loadAnimations(zT), this.deps.pack.wanted(), this.isStopped) throw new Error("the previews stopped");
        this.guarded((() => {
          this.deps.provideBuiltInAnimationPack(kT)
        }));
        const WT = this.nextId++,
          XT = this.deps.createCanvas(),
          [BT, FT] = pT(oT, IT, this.deps.dpr(), iT);
        XT.width = BT, XT.height = FT;
        if (!this.guarded((() => (kT.okT(WT, XT), zT.open(WT, BT, FT, TT))))) throw this.hostCall(void 0, (() => {
          kT.IkT(WT)
        })), new Error("the page's renderer is lent to a session that is running");
        this.restartModelsIfFailed();
        const ST = new PT(this, zT, WT, XT, [BT, FT], this.deps);
        return this.previews.set(WT, ST), this.startFrames(), ST
      }
      prefetch() {
        if (this.prefetched || this.isStopped || (0, ET.d)() || null !== (0, ET.A)()) return;
        this.prefetched = !0;
        (null === this.module ? this.loadModule() : Promise.resolve(this.module)).then((TT => {
          null === TT || this.isStopped || (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles())
        }), (() => {}))
      }
      modelFile(TT) {
        return this.prefetchedOr(TT, this.deps.fetchModel)
      }
      imageFile(TT) {
        return this.prefetchedOr(TT, iT.K)
      }
      prefetchedOr(TT, oT) {
        const IT = this.prefetchedFiles.get(TT);
        return void 0 === IT ? oT(TT) : IT.catch((() => oT(TT)))
      }
      async prefetchPlayerFiles() {
        const TT = this.deps.playerFile().then((TT => this.deps.files.url(TT))),
          oT = await Promise.all([TT, this.deps.images.lifeformAtlasUrl(uT.d)]).catch((() => null));
        if (null === oT) return;
        const [IT, iT] = oT, zT = (TT, oT) => {
          if (null === TT) return;
          const IT = oT(TT);
          this.prefetchedFiles.set(TT, IT), IT.catch((() => {
            this.prefetchedFiles.delete(TT)
          }))
        };
        zT(IT, (TT => this.modelFile(TT))), zT(iT, (TT => this.imageFile(TT)))
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
      buildModel(TT, oT) {
        return this.startModels(), this.models.then((IT => IT(TT, oT))).then((TT => this.unavailable ? new Promise((() => {})) : TT))
      }
      restartModelsIfFailed() {
        this.unavailable && !this.modelsRestarted && 0 === this.previews.size && (this.modelsRestarted = !0, this.models = null, this.unavailable = !1, this.startModels())
      }
      modelsFailed(TT) {
        this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${aT} the model workers didn't start: models won't draw in the previews`, TT))
      }
      called(TT) {
        return 0 !== TT && this.logError(TT, 0), TT
      }
      closePreview(TT) {
        this.previews.delete(TT.id), null !== this.module && TT.dispose(this.module), 0 === this.previews.size && null !== this.frameId && (this.deps.cancelFrame(this.frameId), this.frameId = null)
      }
      hostOf(TT) {
        if (null !== this.module && this.module !== TT) throw new Error("a second renderer module on one page");
        return this.module = TT, null === this.host && (this.host = this.guarded((() => new TT.TkT)), this.tellInGame(), this.handOverShaderPack()), this.host
      }
      tellInGame() {
        const {
          host: TT
        } = this;
        null !== TT && this.outsideCall("the game's start or end", (() => {
          TT.LWT(this.deps.game.inGame())
        }))
      }
      handOverShaderPack() {
        const {
          host: TT,
          shaderPackArgs: oT
        } = this;
        null !== TT && null !== oT && this.outsideCall("the shader pack's hand-over", (() => {
          TT.ZIT(...oT) || console.warn(`${aT} the host refused the shader pack: previews draw without it at home`)
        }))
      }
      outsideCall(TT, oT) {
        try {
          this.hostCall(void 0, oT)
        } catch (IT) {
          this.stop(), console.warn(`${aT} the previews stopped: ${TT} threw`, IT)
        }
      }
      async loadAnimations(TT) {
        const oT = WT(null),
          IT = this.module;
        try {
          oT.wasm = null === IT ? oT.wasm : this.hostCall(oT.wasm, (() => IT.uD()))
        } catch {}
        let iT, zT;
        try {
          iT = await this.fetchAnimationTable()
        } catch (kT) {
          return void this.deps.onAnimationsFailed({
            stage: "fetch",
            error: kT
          }, oT)
        }
        if (!this.settleIfTrapped()) {
          try {
            zT = TT.FWT(iT)
          } catch (kT) {
            if (this.stopIfTrapped(kT)) return;
            return void this.deps.onAnimationsFailed({
              stage: "decode",
              error: kT
            }, oT)
          }
          zT || this.deps.onAnimationsFailed({
            stage: "decode",
            error: null
          }, oT)
        }
      }
      async renderingHost() {
        if (null !== this.binding && await this.binding.done, this.settleIfTrapped()) return null;
        const TT = this.host;
        return null !== TT && this.guarded((() => TT.XWT())) ? TT : (this.opening ??= this.openAtHome().finally((() => {
          this.opening = null
        })), this.opening)
      }
      async openAtHome() {
        var TT;
        const oT = null !== (TT = this.module) && void 0 !== TT ? TT : await this.loadModule();
        if (null === oT) return null;
        const IT = this.hostOf(oT),
          iT = () => this.guarded((() => IT.XWT()));
        if (iT()) return IT;
        if (null !== (0, ET.A)() || (0, ET.d)()) return null;
        const zT = this.deps.createCanvas();
        zT.width = 1, zT.height = 1;
        const kT = await this.deps.openExtras();
        if (this.settleIfTrapped()) return null;
        const WT = (0, CT.g)().sampleCount;
        let XT;
        try {
          XT = await (0, gT.x)(oT, "previewRenderer", zT, WT, JT.c, kT)
        } catch (BT) {
          throw BT instanceof RT.d ? this.stopForTrap(BT) : (0, gT.u)(BT) && await this.deps.onRenderFailed("start_failed", BT), BT
        }
        return this.guarded((() => IT.GkT(XT))) ? ((0, ET.p)(performance.now()), this.samples = WT, this.pageCanvas = zT, (0, jT.c)(this.registryOf(oT)), IT) : iT() ? IT : null
      }
      startFrames() {
        null !== this.frameId || this.isStopped || (this.frameId = this.deps.requestFrame(this.frame))
      }
      drawFrame(TT, oT) {
        for (const WT of this.previews.values()) WT.feed();
        if (this.stopped) return;
        const IT = this.deps.now(),
          iT = TT.frame(oT);
        this.costs.push(this.deps.now() - IT), this.costs.length > 120 && this.costs.shift();
        const zT = 0 !== (256 & iT),
          kT = 255 & iT;
        for (const WT of this.previews.values()) {
          if (this.stopped) return;
          WT.collect(zT)
        }
        if (!this.stopped) {
          if (zT) {
            const oT = TT.MWT();
            for (let TT = 0; TT + 1 < oT.length; TT += 2) this.logError(oT[TT], oT[TT + 1])
          }
          if (kT === nT) return this.stop(), void this.deps.onRenderFailed("lost");
          if (kT === qT) return this.stop(), void this.deps.onFatal(TT.zWT(), TT.kWT());
          if (kT === ZT) return this.stop(), void console.warn(`${aT} the previews stopped: the page's renderer went with its session`);
          (0, AT.e)(oT), this.startFrames()
        }
      }
      get isStopped() {
        return this.stopped || this.isTrapped
      }
      get isTrapped() {
        return null !== this.module && ((0, RT.i)(this.module) || "failed" === (0, cT.w)())
      }
      hostCall(TT, oT) {
        if (this.settleIfTrapped()) return TT;
        try {
          return oT()
        } catch (IT) {
          if (this.stopIfTrapped(IT)) return TT;
          throw IT
        }
      }
      guarded(TT) {
        if (this.settleIfTrapped()) throw new Error("the previews stopped: their module trapped");
        try {
          return TT()
        } catch (oT) {
          throw this.stopIfTrapped(oT), oT
        }
      }
      registryOf(TT) {
        return {
          CIT: (oT, IT) => {
            this.hostCall(void 0, (() => {
              TT.CIT(oT, IT)
            }))
          },
          jIT: oT => {
            this.hostCall(void 0, (() => {
              TT.jIT(oT)
            }))
          }
        }
      }
      settleIfTrapped() {
        return !!this.isTrapped && (this.stopped || (this.stop(), (0, jT.c)(null)), !0)
      }
      stopIfTrapped(TT) {
        return !(null === this.module || !(0, RT.m)(this.module, TT)) && (this.stopForTrap(TT), !0)
      }
      stopForTrap(TT) {
        this.stop(), (0, jT.c)(null), (0, cT.N)(TT)
      }
      stop() {
        this.stopped = !0;
        for (const TT of this.previews.values()) TT.abandon()
      }
      logError(TT, oT) {
        const IT = `${TT}:${oT}`;
        this.loggedErrors.has(IT) || (this.loggedErrors.add(IT), console.warn(`${aT} error ${TT} (detail ${oT})`))
      }
    }
    let VT = null;

    function To() {
      return VT ??= new dT(function() {
        const TT = (0, mT.t)(rT.clientSideServerUrls.staticUrl, {
          packUrl: TT => {
            var oT, IT;
            return null !== (oT = null === (IT = uT.f.current) || void 0 === IT ? void 0 : IT.modelUrl(TT)) && void 0 !== oT ? oT : null
          }
        });
        return {
          loadModule: NT,
          startModels: async TT => {
            const {
              pageModelPool: oT
            } = await IT.e(42).then((() => IT(42162))), {
              pool: iT
            } = oT(TT);
            return (TT, oT) => iT.build(TT, oT)
          },
          fetchAnimations: async () => XT(await (0, iT.K)(bT())),
          playerFile: async () => (await (0, mT.p)()).PLAYER_FILE,
          onAnimationsFailed: (TT, oT) => {
            BT("previewAnimations", bT(), TT, oT)
          },
          provideBuiltInAnimationPack: TT => {
            LT().provide(TT)
          },
          openExtras: ET.x,
          files: TT,
          images: (0, uT.k)((0, hT.n)(TT.url), (() => uT.f.current)),
          pack: uT.f,
          game: vT.e,
          fetchModel: TT => (0, mT.j)(TT),
          createCanvas: () => document.createElement("canvas"),
          dpr: () => window.devicePixelRatio,
          now: () => performance.now(),
          requestFrame: TT => requestAnimationFrame(TT),
          cancelFrame: TT => {
            cancelAnimationFrame(TT)
          },
          onRenderFailed: yT,
          onFatal: (TT, oT) => {
            console.error(`${aT} the previews stopped: renderer error ${TT} (detail ${oT})`)
          }
        }
      }()), VT
    }
    var oo = IT(601),
      Io = IT(37629),
      io = IT(2844);
    const zo = {
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
    const ko = "[bloxd-previews]",
      Wo = new Uint32Array(5);

    function Xo(TT) {
      return oo.h.indexOf(TT)
    }
    const Bo = new WeakSet;

    function Fo(TT) {
      const oT = (0, Io.g)(TT),
        IT = null === oT ? -1 : So(oT);
      return -1 !== IT ? IT : (Bo.has(TT) || (Bo.add(TT), console.warn(`${ko} an animation the previews' table lacks: the mob idles instead`)), -1)
    }

    function So(TT) {
      var oT;
      return null !== (oT = zo[TT]) && void 0 !== oT ? oT : -1
    }

    function Do(TT, oT) {
      const {
        canvas: IT
      } = oT;
      IT.style.width = "100%", IT.style.height = "100%", IT.style.display = "block", TT.appendChild(IT)
    }

    function Lo(TT) {
      const oT = TT.getBoundingClientRect();
      return [oT.width, oT.height]
    }
    class xo {
      constructor(TT, oT) {
        this.preview = TT, this.showView = oT
      }
      show(TT) {
        this.showView(this.preview, TT)
      }
      resize(TT, oT) {
        this.preview.resize(TT, oT)
      }
      close() {
        this.preview.close()
      }
    }
    class co {
      constructor(TT) {
        this.preview = TT, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.detachControls = void 0, this.detachControls = function(TT) {
          const {
            canvas: oT
          } = TT;
          let IT = null;
          const iT = TT => {
              var iT;
              IT = {
                pointer: TT.pointerId,
                x: TT.clientX,
                y: TT.clientY
              }, null === (iT = oT.setPointerCapture) || void 0 === iT || iT.call(oT, TT.pointerId)
            },
            zT = oT => {
              var iT;
              const zT = TT.orbit;
              if ((null === (iT = IT) || void 0 === iT ? void 0 : iT.pointer) !== oT.pointerId || null === zT) return;
              const kT = oT.clientX - IT.x,
                WT = oT.clientY - IT.y;
              IT = {
                ...IT,
                x: oT.clientX,
                y: oT.clientY
              }, TT.setOrbit({
                alpha: zT.alpha - .01 * kT,
                beta: Math.min(Math.PI - .01, Math.max(.01, zT.beta - .01 * WT)),
                radius: zT.radius
              })
            },
            kT = TT => {
              var oT;
              (null === (oT = IT) || void 0 === oT ? void 0 : oT.pointer) === TT.pointerId && (IT = null)
            },
            WT = oT => {
              const IT = TT.orbit;
              if (null === IT) return;
              oT.preventDefault();
              const iT = oT.deltaY * (oT.deltaMode === WheelEvent.DOM_DELTA_LINE ? 40 : oT.deltaMode === WheelEvent.DOM_DELTA_PAGE ? 800 : 1),
                zT = Math.min(100, Math.max(5, IT.radius + .08 * iT));
              TT.setOrbit({
                ...IT,
                radius: zT
              })
            };
          return oT.style.touchAction = "none", oT.addEventListener("pointerdown", iT), oT.addEventListener("pointermove", zT), oT.addEventListener("pointerup", kT), oT.addEventListener("pointercancel", kT), oT.addEventListener("wheel", WT, {
            passive: !1
          }), () => {
            oT.removeEventListener("pointerdown", iT), oT.removeEventListener("pointermove", zT), oT.removeEventListener("pointerup", kT), oT.removeEventListener("pointercancel", kT), oT.removeEventListener("wheel", WT)
          }
        }(TT), this.dev = {
          setCamera: oT => {
            let {
              yaw: IT,
              pitch: iT,
              radius: zT,
              target: kT
            } = oT;
            kT && console.warn(`${ko} setCamera: target is noa's character preview only`);
            const WT = TT.orbit;
            null !== WT && TT.setOrbit({
              alpha: IT,
              beta: iT,
              radius: null !== zT && void 0 !== zT ? zT : WT.radius
            })
          },
          canvas: () => TT.canvas,
          isolateHead: () => {
            console.warn(`${ko} isolateHead: noa's character preview only`)
          }
        }, this.apply(), this.ready = TT.untilSettled().then((() => {
          if (TT.isStopped) throw new Error(`${ko} the previews stopped before the character drew`);
          this.built = !0
        }))
      }
      isReady() {
        return this.built && !this.preview.isClosed
      }
      setCosmetic(TT, oT) {
        this.cosmetics[TT] = oT, this.apply()
      }
      playEmote(TT) {
        null === TT || TT !== this.emote ? (this.emote = TT, this.apply()) : this.preview.replay()
      }
      untilDrawn(TT) {
        return this.preview.untilSettled()
      }
      resetCamera() {}
      resize(TT, oT) {
        this.preview.resize(TT, oT)
      }
      close() {
        this.detachControls(), this.preview.close()
      }
      apply() {
        var TT;
        this.preview.setPlayer(JSON.stringify(this.cosmetics), Wo, null === (TT = this.emote) ? -1 : So(TT))
      }
    }

    function Ko(TT, oT) {
      let {
        mobType: IT,
        variation: iT,
        animation: zT
      } = oT;
      TT.setMob(Xo(IT), null !== iT && void 0 !== iT ? iT : "", 1, Fo(zT))
    }

    function Mo(TT, oT) {
      let {
        mobType: IT,
        variation: iT,
        metaInfo: zT,
        tamed: kT
      } = oT;
      TT.setPet(Xo(IT), iT, zT, kT)
    }
    const ro = {
      aimed: .533 / 1.15 * 1.1,
      ready: .16 / .85 * 1.1
    };
    class Ao {
      constructor(TT, oT, IT, iT) {
        this.preview = null, this.closed = !1, this.figure = null, this.shown = !1, this.order = "", this.span = {
          left: 0,
          width: 0
        }, this.lineup = [0, 0], this.given = null, this.loaded = !1, TT(IT.width, iT[1], iT).then((TT => {
          if (this.closed) return void TT.close();
          const {
            style: IT
          } = TT.canvas;
          IT.position = "absolute", IT.top = "0", IT.visibility = "hidden", Do(oT, TT), this.preview = TT, this.apply()
        })).catch((TT => {
          console.error(`${ko} couldn't open a lineup figure`, TT)
        }))
      }
      update(TT, oT, IT, iT, zT) {
        this.figure = TT, this.shown = oT, this.order = IT, this.span = iT, this.lineup = zT, this.apply()
      }
      close() {
        var TT;
        this.closed = !0, null === (TT = this.preview) || void 0 === TT || TT.close(), this.preview = null
      }
      apply() {
        const {
          preview: TT,
          figure: oT,
          lineup: IT
        } = this;
        if (null === TT || null === oT) return;
        if (this.given !== oT) {
          var iT;
          this.given = oT, this.loaded = !1;
          const IT = null === oT.Tu ? 0 : null !== (iT = (0, io.d)(oT.Tu)) && void 0 !== iT ? iT : 0;
          TT.setFigure(function(TT) {
            return JSON.stringify(Object.fromEntries(TT.cosmetics))
          }(oT), IT, Fo(oT.animation), oT.size), TT.untilSettled().then((() => {
            this.given === oT && (this.loaded = !0, this.apply())
          }))
        }
        const {
          left: zT,
          width: kT
        } = this.span;
        TT.resize(kT, IT[1], IT);
        const {
          style: WT
        } = TT.canvas;
        WT.left = `${zT}px`, WT.width = `${kT}px`, WT.zIndex = this.order, WT.visibility = this.shown && this.loaded ? "visible" : "hidden"
      }
    }
    class go {
      constructor(TT, oT) {
        this.open = oT, this.layer = void 0, this.figures = [], this.view = {
          figures: [],
          shown: []
        }, this.size = void 0, this.size = Lo(TT), this.layer = document.createElement("div");
        const {
          style: IT
        } = this.layer;
        IT.position = "relative", IT.isolation = "isolate", IT.overflow = "hidden", IT.width = "100%", IT.height = "100%", IT.pointerEvents = "none", TT.appendChild(this.layer)
      }
      show(TT) {
        this.view = TT, this.place()
      }
      resize(TT, oT) {
        this.size = [TT, oT], this.place()
      }
      close() {
        for (const TT of this.figures) TT.close();
        this.figures = [], this.layer.remove()
      }
      place() {
        const {
          figures: TT,
          shown: oT
        } = this.view;
        for (const iT of this.figures.splice(TT.length)) iT.close();
        const {
          size: IT
        } = this;
        TT.forEach(((iT, zT) => {
          var kT;
          const WT = function(TT, oT, IT, iT) {
            let [zT, kT] = iT;
            const WT = (TT + .5) * zT / oT,
              XT = Math.min(Math.max(zT / oT, 2 * IT * kT), 2 * Math.max(WT, zT - WT));
            return {
              left: WT - XT / 2,
              width: XT
            }
          }(zT, TT.length, function(TT) {
            let {
              animation: oT,
              size: IT
            } = TT;
            const {
              aimed: iT,
              ready: zT
            } = ro;
            return (Fo(oT) === zo.gunAimed ? iT : zT) * IT
          }(iT), IT);
          this.figures[zT] ??= new Ao(this.open, this.layer, WT, IT), this.figures[zT].update(iT, null !== (kT = oT[zT]) && void 0 !== kT && kT, function(TT, oT) {
            return String(Math.round(1e3 * TT) + oT)
          }(iT.size, zT), WT, IT)
        }))
      }
    }
    const ho = {
      player: OT,
      store: HT
    };
    class wo {
      constructor(TT) {
        this.page = TT
      }
      async openMob(TT) {
        return new xo(await this.open(TT, QT), Ko)
      }
      async openPet(TT) {
        return new xo(await this.open(TT, QT), Mo)
      }
      openMobLineup(TT) {
        return new go(TT, ((TT, oT, IT) => this.page.openPreview(QT, TT, oT, IT)))
      }
      async openCharacter(TT, oT) {
        return new co(await this.open(TT, ho[oT]))
      }
      async open(TT, oT) {
        const [IT, iT] = Lo(TT), zT = await this.page.openPreview(oT, IT, iT);
        return Do(TT, zT), zT
      }
    }
  },
  35704: (TT, oT, IT) => {
    IT.d(oT, {
      A: () => rT,
      b: () => iT,
      e: () => zT,
      f: () => LT,
      h: () => MT,
      k: () => ST,
      m: () => AT,
      n: () => BT,
      p: () => FT,
      t: () => xT,
      x: () => cT,
      y: () => KT
    });
    const iT = [{
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

    function zT(TT, oT) {
      const {
        numLines: IT,
        charsPerLine: zT
      } = iT[oT];
      return gT(TT, IT, zT, !1)
    }
    const kT = 7 / 8,
      WT = .25,
      XT = 8;

    function BT(TT, oT) {
      return {
        width: Math.min(TT, XT) - 2 * WT,
        height: Math.min(oT, XT) - 2 * WT
      }
    }

    function FT(TT, oT, IT) {
      const zT = BT(TT, oT),
        {
          numLines: WT,
          charsPerLine: XT
        } = iT[IT];
      return {
        numLines: Math.max(1, Math.floor(WT / kT * zT.height)),
        charsPerLine: Math.max(1, Math.floor(XT * zT.width))
      }
    }

    function ST(TT, oT, IT, iT) {
      const {
        numLines: zT,
        charsPerLine: kT
      } = FT(IT, iT, oT);
      return gT(TT, zT, kT, !1)
    }
    const DT = 32e3;

    function LT(TT) {
      return TT.slice(0, DT)
    }
    const xT = 512e3,
      cT = 64,
      KT = xT;

    function MT(TT, oT) {
      const IT = Math.max(0, KT - oT),
        iT = Math.min(xT, IT);
      return TT.slice(0, iT)
    }
    const rT = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      gX: {
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

    function AT(TT, oT) {
      const {
        numLines: IT,
        charsPerLine: iT
      } = rT[oT];
      return gT(TT, IT, iT, !1)
    }

    function gT(TT, oT, IT, iT, zT) {
      (zT || iT) && (TT = TT.slice(0, null !== zT && void 0 !== zT ? zT : oT * IT));
      const kT = TT.split("\n");
      if (kT.length > oT && kT.splice(oT, kT.length - oT), !iT)
        for (let WT = 0; WT < kT.length; WT++) {
          const TT = kT[WT];
          TT.length > IT && (kT[WT] = TT.substring(0, IT), kT.length < oT && kT.splice(WT + 1, 0, TT.substring(IT)))
        }
      return kT.join("\n")
    }
  },
  42100: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/builtInAnimations.anim.36d8b13aae7e273ec8e8.gz"
  },
  42105: (TT, oT, IT) => {
    TT.exports = IT.p + "static/media/previewAnimations.dat.24d2343c38c8f9b3fb85.gz"
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);