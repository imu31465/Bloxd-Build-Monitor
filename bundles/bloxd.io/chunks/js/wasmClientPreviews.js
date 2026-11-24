export const id = 60;
export const ids = [60];
export const modules = {
  38762: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => zT,
      f: () => MT
    });
    const WT = new WeakMap;

    function zT(TT, UT) {
      return WT.set(TT, UT), TT
    }

    function MT(TT) {
      var UT;
      return null !== (UT = WT.get(TT)) && void 0 !== UT ? UT : null
    }
  },
  38782: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => nT
    });
    var WT = mT(1321);

    function zT(TT) {
      const UT = /(\d*\.?\d+)px/.exec(TT);
      return UT ? Number(UT[1]) : null
    }

    function MT(TT) {
      return TT.split(/[\s,]+/).pop()
    }
    let gT = !1;
    const nT = {
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
      drawText: function(TT, UT, WT, nT, HT, kT) {
        if (HT <= 0 || kT <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: jT,
          fontVariant: lT,
          fontWeight: LT,
          fontSize: pT,
          font: BT
        } = this, ZT = [jT, lT, LT, `${pT}px`, BT].filter(Boolean).join(" "), cT = [
          [LT, `${pT}px`, MT(BT)].filter(Boolean).join(" "), `${pT}px sans-serif`
        ], vT = TT.font, fT = function(TT, UT, mT) {
          for (const WT of UT) {
            TT.font = WT;
            const UT = zT(TT.font),
              gT = MT(WT);
            if (null !== UT && Math.abs(UT - mT) <= .5 && TT.font.toLowerCase().includes(gT.toLowerCase())) return WT
          }
          return null
        }(TT, [ZT, ...cT], pT);
        fT !== ZT && function(TT, UT, WT) {
          gT || (gT = !0, Promise.resolve().then((() => mT(1153))).then((mT => {
            let {
              cZ: zT
            } = mT;
            zT(new Error("A canvas didn't take canvasTxt's font"), {
              font: TT,
              Jp: UT,
              drawnWith: null !== WT && void 0 !== WT ? WT : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(ZT, vT, fT);
        const qT = zT(TT.font);
        if (null === fT && null !== qT && qT > 0) {
          const mT = pT / qT;
          TT.save();
          try {
            return TT.scale(mT, mT), {
              height: this.drawLines(TT, UT, WT / mT, nT / mT, HT / mT, kT / mT, qT).height * mT
            }
          } finally {
            TT.restore()
          }
        }
        return this.drawLines(TT, UT, WT, nT, HT, kT, pT)
      },
      drawLines: function(TT, UT, mT, zT, MT, gT, nT) {
        const HT = mT + MT,
          kT = zT + gT;
        let jT, lT = zT + gT / 2 + nT / 2;
        "right" === this.align ? (jT = HT, TT.textAlign = "right") : "left" === this.align ? (jT = mT, TT.textAlign = "left") : (jT = mT + MT / 2, TT.textAlign = "center");
        for (const WT of UT) {
          TT.measureText(WT).width >= MT && (UT = UT.replace(WT, ""))
        }
        UT = (0, WT.Z)(UT);
        const LT = [],
          pT = UT.split("\n"),
          BT = this.justify ? TT.measureText("\u200a").width : 0;
        pT.forEach((UT => {
          let mT = TT.measureText(UT).width;
          if (mT <= MT) LT.push(UT);
          else {
            let WT = UT;
            const zT = MT;
            let gT, nT, HT;
            for (mT = TT.measureText(WT).width; mT > zT;) {
              for (gT = 0, nT = 0, HT = ""; nT < zT;) gT++, HT = WT.substr(0, gT), nT = TT.measureText(HT).width;
              gT--, HT = HT.substr(0, gT);
              const UT = gT;
              if (" " !== WT.substr(gT, 1)) {
                for (;
                  " " !== WT.substr(gT, 1) && 0 !== gT;) gT--;
                0 === gT && (gT = UT), HT = WT.substr(0, gT)
              }
              HT = this.justify ? this.justifyLine(TT, HT, BT, "\u200a", MT) : HT, WT = WT.substr(gT), mT = TT.measureText(WT).width, LT.push(HT)
            }
            mT > 0 && LT.push(WT)
          }
        }));
        const ZT = this.lineHeight ? this.lineHeight : this.getTextHeight(TT, UT),
          cT = ZT * (LT.length - 1),
          vT = cT / 2;
        let fT = zT;
        "top" === this.vAlign ? lT = zT + nT : "bottom" === this.vAlign ? (lT = kT - cT, fT = kT) : (fT = zT + gT / 2, lT -= vT), LT.forEach((UT => {
          UT = UT.trim(), TT.fillText(UT, jT, lT), lT += ZT
        })), this.debug && (TT.lineWidth = 3, TT.strokeStyle = "#00909e", TT.strokeRect(mT, zT, MT, gT), TT.lineWidth = 2, TT.strokeStyle = "#f6d743", TT.beginPath(), TT.moveTo(jT, zT), TT.lineTo(jT, kT), TT.stroke(), TT.strokeStyle = "#ff6363", TT.beginPath(), TT.moveTo(mT, fT), TT.lineTo(HT, fT), TT.stroke());
        return {
          height: cT + ZT
        }
      },
      getTextHeight: function(TT, UT) {
        const mT = TT.textBaseline;
        TT.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: WT
        } = TT.measureText(UT);
        return TT.textBaseline = mT, WT
      },
      justifyLine: function(TT, UT, mT, WT, zT) {
        const MT = UT.trim(),
          gT = TT.measureText(MT).width,
          nT = MT.split(/\s+/).length - 1,
          HT = Math.floor((zT - gT) / mT);
        if (nT <= 0 || HT <= 0) return MT;
        const kT = Math.floor(HT / nT);
        let jT = HT - nT * kT,
          lT = [];
        for (let LT = 0; LT < kT; LT++) lT.push(WT);
        lT = lT.join("");
        return MT.replace(/\s+/g, (TT => {
          const UT = jT > 0 ? lT + WT : lT;
          return jT--, TT + UT
        }))
      }
    }
  },
  38788: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => ZT,
      e: () => BT,
      g: () => LT,
      j: () => jT,
      k: () => lT
    });
    var WT = mT(4328),
      zT = mT(366);
    const MT = 1024,
      gT = 1536,
      nT = 2 * WT.i + 1,
      HT = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      kT = 1.5;

    function jT(TT, UT, mT) {
      if ("string" !== typeof TT) return UT;
      try {
        const mT = JSON.parse(TT);
        return mT && "object" === typeof mT ? mT : UT
      } catch (WT) {
        return void 0 !== mT && console.error(`Couldn't parse ${mT}`, WT), UT
      }
    }

    function lT(TT) {
      return jT(TT, null, "a leaderboard's rows")
    }

    function LT(TT, UT) {
      var mT, WT;
      return null !== UT && void 0 !== UT ? UT : {
        status: null !== (mT = TT.status) && void 0 !== mT ? mT : "loading",
        entries: null !== (WT = TT.entries) && void 0 !== WT ? WT : []
      }
    }

    function pT(TT, UT) {
      return "number" === typeof TT && Number.isFinite(TT) && TT > 0 ? TT : UT
    }

    function BT(TT, UT) {
      const mT = pT(TT.size, 1);
      let WT = pT(TT.width, pT(2.5 * mT, 2.5)),
        zT = pT(TT.height, pT(3.75 * mT, 3.75));
      Number.isFinite(MT * zT / WT) && Number.isFinite(gT * WT / zT) || (WT = 2.5, zT = 3.75);
      const nT = zT / WT,
        HT = Math.max(1, Math.min(MT, UT / nT));
      return {
        width: WT,
        height: zT,
        layoutWidth: Math.max(MT, gT / nT),
        layoutHeight: Math.max(gT, MT * nT),
        pixelWidth: Math.round(HT),
        pixelHeight: Math.round(Math.max(1, Math.min(UT, HT * nT)))
      }
    }

    function ZT(TT, UT, mT, gT, jT, lT) {
      TT.setTransform(1, 0, 0, 1, 0, 0), TT.fillStyle = zT.R.defaultNameTagBackground, TT.fillRect(0, 0, UT, mT), TT.scale(UT / gT.layoutWidth, mT / gT.layoutHeight), TT.translate((gT.layoutWidth - MT) / 2, 0),
        function(TT, UT, mT, MT) {
          var gT, jT, lT, LT;
          const {
            top: pT,
            around: BT,
            showPlayerText: ZT,
            localPlayerDbId: fT
          } = mT, {
            whiteUiText: qT,
            grayUiText: iT,
            yellowUiText: bT
          } = zT.R;
          TT.textBaseline = "middle";
          const OT = function(UT, mT, WT, zT, MT, gT) {
              let nT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              TT.font = `bold ${zT}px 'Jetbrains Mono', monospace`, TT.fillStyle = MT, TT.textAlign = nT;
              let HT = UT.replace(/[\r\n\t]/g, " ");
              if (TT.measureText(HT).width > gT) {
                for (; HT.length > 0 && TT.measureText(`${HT}\u2026`).width > gT;) HT = HT.slice(0, -1);
                HT += "\u2026"
              }
              TT.fillText(HT, mT, WT)
            },
            eT = UT => {
              TT.fillStyle = qT, TT.globalAlpha = .15, TT.fillRect(24, UT, 976, 2), TT.globalAlpha = 1
            },
            YT = null === fT ? null : (0, zT.Fc)(fT),
            JT = TT => null !== YT && TT.playerHash === YT,
            xT = cT(pT.entries, WT.k),
            dT = "ready" === pT.status && xT.length > 0,
            wT = null === BT ? [] : cT(BT.entries, nT),
            tT = xT.some(JT),
            aT = null === BT ? null : function(TT) {
              const UT = TT;
              if (!UT || !Number.isFinite(UT.rank) || !Number.isFinite(UT.tied) || !Number.isFinite(UT.total)) return null;
              return UT
            }(BT.standing),
            yT = wT.find(JT),
            XT = xT.find(JT),
            IT = null === aT || void 0 === yT ? null : {
              value: yT.value,
              rank: aT.rank
            },
            QT = vT(xT, void 0 === XT || XT.value === (null === IT || void 0 === IT ? void 0 : IT.value) ? IT : null),
            sT = vT(wT, IT),
            FT = (TT, UT) => {
              const mT = TT.findIndex(JT);
              return mT >= 0 ? UT[mT] : null
            },
            PT = null !== (gT = null !== (jT = null === aT || void 0 === aT ? void 0 : aT.rank) && void 0 !== jT ? jT : FT(wT, sT)) && void 0 !== gT ? gT : FT(xT, QT);
          TT.font = "bold 34px 'Jetbrains Mono', monospace";
          const VT = [...dT ? QT : [], ...tT ? [] : sT],
            uT = Math.min(280, Math.max(0, ...VT.map((UT => TT.measureText(HT.format(UT)).width)))),
            CT = uT <= 80,
            rT = CT ? 80 : 32 + uT,
            KT = CT ? 148 : rT + 28,
            ST = 660 - KT;
          OT(`TOP ${WT.k}  /  ALL TIME`, 24, 52, 28, iT, 976), OT(ZT ? String(null !== (lT = UT.title) && void 0 !== lT ? lT : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, qT, 976), OT("RANK", 32, 174, 28, iT, KT - 40), OT("PLAYER", KT, 174, 28, iT, ST), OT(ZT ? String(null !== (LT = UT.scoreLabel) && void 0 !== LT ? LT : "Score").slice(0, 24) : "Score", 992, 174, 28, iT, 304, "right"), eT(202);
          const GT = (MT - 232) / (WT.k + kT + nT),
            NT = 208 + WT.k * GT,
            ET = NT + kT * GT,
            hT = (UT, mT, WT, zT) => {
              const MT = JT(UT);
              TT.fillStyle = MT ? bT : qT, TT.globalAlpha = MT ? .15 : zT ? .035 : 0, TT.fillRect(24, WT - GT / 2 + 1, 976, GT - 2), TT.globalAlpha = 1;
              const gT = MT ? bT : qT;
              OT(HT.format(mT), rT, WT, 34, gT, CT ? 80 : uT, CT ? "center" : "right"), OT(ZT ? String(UT.name).slice(0, 64) : "Player", KT, WT, 34, gT, ST);
              const nT = HT.format(UT.value);
              OT(TT.measureText(nT).width > 304 ? UT.value.toExponential(6) : nT, 992, WT, 34, gT, 304, "right")
            };
          if (dT)
            for (const [WT, zT] of xT.entries()) hT(zT, QT[WT], 208 + (WT + .5) * GT, WT % 2 === 0);
          else {
            const TT = "error" === pT.status,
              UT = TT ? "Couldn't load leaderboard" : "ready" === pT.status ? "No scores yet" : "Loading leaderboard\u2026",
              mT = TT ? "Trying again shortly" : "ready" === pT.status ? "Be the first on the board!" : "Fetching the top players",
              WT = (208 + NT) / 2;
            OT(UT, 512, WT - 28, 40, TT ? zT.R.redUiText : qT, 960, "center"), OT(mT, 512, WT + 27, 30, iT, 960, "center")
          }
          const DT = NT + kT * GT / 2;
          if (null === PT) eT(DT);
          else {
            const UT = null === aT ? 0 : aT.tied - 1,
              mT = `YOUR RANK #${HT.format(PT)}${null===aT?"":` of ${HT.format(aT.total)}`}`;
            TT.font = "bold 36px 'Jetbrains Mono', monospace";
            const WT = Math.max(20, Math.min(36, Math.floor(34560 / TT.measureText(mT).width)));
            OT(mT, 512, DT - (UT > 0 ? 15 : 0), WT, bT, 960, "center"), UT > 0 && OT(`Tied with ${HT.format(UT)} other${1===UT?"":"s"}`, 512, DT + 24, 24, iT, 960, "center")
          }
          if (null === BT) return;
          const oT = ET + nT * GT / 2;
          if (tT) OT(`You're in the top ${WT.k}!`, 512, oT, 40, bT, 960, "center");
          else if (0 === wT.length) OT("You're not on this board yet", 512, oT, 34, iT, 960, "center");
          else
            for (const [WT, zT] of wT.entries()) hT(zT, sT[WT], ET + (WT + .5) * GT, WT % 2 === 0)
        }(TT, jT, lT, gT.layoutHeight)
    }

    function cT(TT, UT) {
      return Array.isArray(TT) ? TT.slice(0, UT).filter((TT => TT && Number.isFinite(TT.rank) && Number.isFinite(TT.value))) : []
    }

    function vT(TT, UT) {
      const mT = [];
      let WT = !1;
      return TT.forEach(((zT, MT) => {
        if (null !== UT && zT.value === UT.value) return void mT.push(UT.rank);
        const gT = MT > 0 && zT.value === TT[MT - 1].value;
        gT || (WT = 0 === MT && 1 !== zT.rank), mT.push(gT && !WT ? mT[MT - 1] : zT.rank)
      })), mT
    }
  },
  38992: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => zT,
      g: () => MT
    });
    const WT = 32;

    function zT(TT) {
      return Array.from(TT).length
    }

    function MT(TT) {
      const UT = [""];
      let mT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        zT = "";
      const MT = () => {
        UT.push(""), mT = 0, zT = ""
      };
      for (const gT of TT.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(gT)) MT();
        else if (/^\s+$/.test(gT)) zT += gT;
      else if (gT.length > 0) {
        const TT = Array.from(gT);
        mT > 0 && mT + zT.length + TT.length > WT && MT(), UT[UT.length - 1] += zT, mT += zT.length, zT = "";
        for (const zT of TT) mT >= WT && MT(), UT[UT.length - 1] += zT, mT++
      }
      return UT[UT.length - 1] += zT, UT
    }
  },
  51100: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      WasmPreviewHost: () => dU,
      pageBuiltInAnimationPack: () => LT,
      pagePreviews: () => gU,
      previewModule: () => oT
    });
    var WT = mT(3001),
      zT = mT(662);
    const MT = "[bloxd-wasm-client]";

    function gT(TT) {
      const UT = {
        wasm: "unknown",
        client: String(zT.d)
      };
      try {
        var mT;
        UT.wasm = null !== (mT = null === TT || void 0 === TT ? void 0 : TT.Zl()) && void 0 !== mT ? mT : UT.wasm
      } catch {}
      return UT
    }
    async function nT(TT) {
      if (TT.length < 2 || 31 !== TT[0] || 139 !== TT[1]) return TT;
      if ("undefined" === typeof DecompressionStream) {
        const {
          ungzip: UT
        } = await Promise.resolve().then((() => mT(2943)));
        return UT(TT)
      }
      const UT = new Blob([TT]).stream().pipeThrough(new DecompressionStream("gzip"));
      return new Uint8Array(await new Response(UT).arrayBuffer())
    }

    function HT(TT, UT, WT, zT) {
      Promise.resolve().then((() => mT(40887))).then((mT => {
        let {
          reportDataLoadFailure: MT
        } = mT;
        MT(TT, UT, WT, zT)
      }), (UT => {
        console.warn(`${MT} ${TT} didn't load, and the report couldn't be sent`, WT.error, UT)
      }))
    }
    const kT = [3e4, 12e4, 3e5];
    class jT {
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
        const UT = gT(TT),
          mT = await async function(TT, UT) {
            let mT;
            try {
              mT = await TT()
            } catch (WT) {
              return {
                stage: "fetch",
                error: WT
              }
            }
            try {
              return UT(mT) ? null : {
                stage: "decode",
                error: null
              }
            } catch (WT) {
              return {
                stage: "decode",
                error: WT
              }
            }
          }((() => this.deps.fetch()), (UT => {
            const mT = TT.yMT(UT);
            return mT && this.resolveSet(UT), mT
          }));
        if (null !== mT) {
          if ("fetch" === mT.stage) {
            this.loading = null;
            const UT = kT[this.retries++];
            void 0 !== UT && this.deps.later((() => {
              this.provide(TT)
            }), UT)
          }
          this.reported || (this.reported = !0, this.deps.onFailed(mT, UT))
        }
      }
    }
    let lT = null;

    function LT() {
      return lT ??= new jT({
        fetch: async () => nT(await (0, WT.M)(pT(), {
          priority: "low"
        })),
        onFailed: (TT, UT) => {
          HT("builtInAnimations", pT(), TT, UT)
        },
        later: (TT, UT) => {
          setTimeout(TT, UT)
        }
      }), lT
    }

    function pT() {
      return mT(51106)
    }
    var BT = mT(2992),
      ZT = mT(1302),
      cT = mT(344),
      vT = mT(340),
      fT = mT(681),
      qT = mT(4895),
      iT = mT(40860),
      bT = mT(40879),
      OT = mT(41066),
      eT = (mT(40912), mT(40926)),
      YT = mT(40929),
      JT = mT(40935),
      xT = mT(40871),
      dT = mT(41093),
      wT = mT(41096),
      tT = mT(40855),
      aT = mT(41117),
      yT = mT(40987),
      XT = mT(40975),
      IT = mT(41025),
      QT = mT(41080),
      sT = mT(42755),
      FT = mT(36358),
      PT = mT(3800);
    const VT = "[bloxd-previews]",
      uT = 4e5,
      CT = 0,
      rT = 1,
      KT = 2,
      ST = 1,
      GT = 2,
      NT = 3,
      ET = 0,
      hT = 1,
      DT = 2;

    function oT(TT) {
      const UT = TT,
        mT = (0, iT.O)(TT),
        WT = (0, iT.k)(TT);
      return null !== mT && null !== WT && "function" === typeof UT.wMT && "function" === typeof UT.tMT && "function" === typeof UT.aMT ? UT : null
    }

    function AT(TT, UT, mT) {
      let [WT, zT] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [TT, UT], MT = Math.min(Number.isFinite(mT) && mT > 0 ? mT : 1, 2);
      const gT = Math.max(0, WT, TT) * Math.max(0, zT, UT) * MT * MT;
      return gT > uT && (MT *= Math.sqrt(uT / gT)), [Math.max(1, Math.floor(Math.max(0, TT) * MT)), Math.max(1, Math.floor(Math.max(0, UT) * MT))]
    }

    function RT() {
      return mT(51114)
    }
    async function TU(TT, UT, WT) {
      var zT;
      let MT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      "lost" === TT && (0, tT.x)();
      const nT = await (0, tT.R)();
      if (null === nT || (0, iT.n)(nT) || (0, tT.d)()) return;
      const HT = "webgpu" === nT.backend;
      if (!HT && "lost" !== TT) return;
      const kT = HT && (0, vT.j)(nT.adapter, null !== WT && void 0 !== WT ? WT : null, "lost" === TT, MT),
        jT = null !== (zT = "lost" === TT ? (0, bT.j)((0, BT.Q)() ? (0, iT.O)((0, BT.C)()) : null) : void 0) && void 0 !== zT ? zT : UT,
        lT = HT ? (0, iT.$)(TT, void 0, (0, bT.c)(jT)) : null;
      if (null === lT) {
        HT || (0, fT.u)(), (0, tT.r)();
        try {
          await async function(TT, UT, WT, zT, MT) {
            let {
              restoreLost: nT,
              adapterRemembered: HT
            } = MT;
            const kT = (0, BT.Q)(),
              {
                flushCrashReports: jT,
                reportRenderReload: lT
              } = await Promise.resolve().then((() => mT(40887)));
            lT(TT.backend, zT, gT(kT ? (0, BT.C)() : null), {
              from: "home",
              cause: UT,
              restoreLost: nT,
              adapterRemembered: HT,
              ...UU(TT, UT, WT)
            }), await jT(yT.c)
          }(nT, TT, jT, null !== WT && void 0 !== WT ? WT : "start_failed" === TT ? 0 : 1, {
            restoreLost: MT,
            adapterRemembered: kT
          })
        } catch (pT) {
          console.warn(`${VT} ${nT.backend} failed at home (${TT}), and its report couldn't be sent`, pT)
        }(0, yT.k)()
      } else {
        var LT;
        const UT = UU(nT, TT, jT),
          WT = `WebGPU failed at home (${TT}${void 0===UT.error?"":`: ${UT.error instanceof Error?UT.error.message:(0,FT.k)(UT.error)}`}) and ${lT}`;
        console.warn(`${VT} ${WT}: the previews stop`, null !== (LT = UT.error) && void 0 !== LT ? LT : ""), (0, tT.s)(WT);
        try {
          const {
            countRenderLost: WT
          } = await Promise.resolve().then((() => mT(40887)));
          WT(TT, UT.error, UT.context)
        } catch (ZT) {
          console.warn(`${VT} WebGPU failed at home (${TT}), and its count couldn't be sent`, ZT)
        }
      }
    }

    function UU(TT, UT, mT) {
      let {
        adapter: WT
      } = TT;
      return {
        error: mT,
        context: {
          adapter: WT,
          boundAtMs: "start_failed" === UT ? null : (0, tT.L)(),
          indirectHangs: (0, tT.A)(),
          restoresSkipped: (0, tT.O)()
        }
      }
    }
    async function mU() {
      if (!(0, BT.Q)()) {
        const TT = await (0, tT.R)();
        if (null === TT || (0, iT.n)(TT)) return null;
        if (await (0, aT.d)(await TT.load()), !(0, BT.Q)()) return null
      }
      return oT((0, BT.C)())
    }
    class WU {
      constructor(TT, UT, mT, WT, zT, MT) {
        this.page = TT, this.host = UT, this.id = mT, this.canvas = WT, this.size = zT, this.models = void 0, this.images = void 0, this.write = void 0, this.outcomes = [], this.closed = !1, this.quiet = 0, this.settled = [];
        const gT = {
            ...MT.images,
            glbUrl: TT => {
              var UT;
              return null !== (UT = this.models.drawnUrl(TT)) && void 0 !== UT ? UT : MT.images.glbUrl(TT)
            }
          },
          nT = UT => TT.modelFile(UT);
        this.images = new OT.h(gT, (TT => {
          console.warn(`${VT} image ${TT.key.kind}:${TT.key.index}:${TT.key.word} failed`, TT.error)
        }), {
          fetchFile: nT,
          fetchImage: UT => TT.imageFile(UT)
        }), TT.startModels(), this.models = new eT.g(MT.files, ((UT, mT) => TT.buildModel(UT, mT)), (TT => {
          console.warn(`${VT} model file ${TT.file} (${TT.url}) failed`, TT.error)
        }), {
          fetchFile: nT,
          onWritten: (TT, UT) => {
            this.images.glbWritten(TT, UT)
          },
          onTaken: (TT, UT) => {
            this.images.glbTaken(TT, UT)
          }
        }), this.write = (TT, UT, mT) => {
          if (this.closed) return !0;
          if (TT === eT.d) {
            const TT = new DataView(mT.buffer, mT.byteOffset, JT.c),
              WT = TT.getUint32(0, !0),
              zT = TT.getUint32(JT.f, !0),
              MT = this.page.hostCall(DT, (() => this.host.PgT(this.id, WT, UT, mT.subarray(JT.c))));
            return this.outcomes.push([zT, MT]), !0
          }
          return TT === OT.d && (this.page.hostCall(void 0, (() => {
            this.host.ugT(this.id, mT)
          })), !0)
        }
      }
      get isClosed() {
        return this.closed
      }
      get isStopped() {
        return this.page.isStopped
      }
      resize(TT, UT, mT) {
        if (this.closed) return;
        const [WT, zT] = AT(TT, UT, this.page.dpr(), mT);
        WT === this.size[0] && zT === this.size[1] || (this.size = [WT, zT], this.page.hostCall(void 0, (() => {
          this.host.resize(this.id, WT, zT)
        })))
      }
      setMob(TT, UT, mT, WT) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.GgT(this.id, TT, UT, mT, WT))))
      }
      setPet(TT, UT, mT, WT) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.EgT(this.id, TT, UT, mT, WT))))
      }
      setPlayer(TT, UT, mT) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.rgT(this.id, TT, UT, mT))))
      }
      setFigure(TT, UT, mT, WT) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.KgT(this.id, TT, UT, mT, WT))))
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
          alpha: UT,
          beta: mT,
          radius: WT
        } = TT;
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.NgT(this.id, UT, mT, WT)
        }))
      }
      untilSettled() {
        return this.closed || this.page.isStopped ? Promise.resolve() : (this.quiet = 0, new Promise((TT => {
          this.settled.push(TT)
        })))
      }
      packChanged() {
        this.quiet = 0, this.models.refresh(), (0, dT.h)(this.images)
      }
      feed() {
        this.models.drain(this.write);
        for (const [TT, UT] of this.outcomes) {
          const mT = UT === ET ? [] : [UT === hT ? TT : (TT | eT.f) >>> 0];
          this.models.taken(TT, mT)
        }
        this.outcomes.length = 0, this.images.drain(this.write)
      }
      collect(TT) {
        let UT = !1;
        if (TT) {
          const TT = this.host.ogT(this.id);
          for (const UT of TT) this.models.request(UT);
          const mT = this.host.DgT(this.id);
          mT.length > 0 && this.images.onEvent(mT), UT = TT.length > 0 || mT.length > 0
        }
        const mT = this.page.modelsUnavailable ? 0 : this.models.asking + this.models.unanswered,
          WT = UT || mT > 0 || this.images.waiting > 0 || this.images.inFlight > 0;
        this.quiet = WT ? 0 : this.quiet + 1, this.quiet >= 3 && this.resolveSettled()
      }
      close() {
        this.closed || (this.closed = !0, this.page.closePreview(this), this.resolveSettled())
      }
      abandon() {
        this.resolveSettled()
      }
      dispose(TT) {
        this.page.hostCall(void 0, (() => {
          const UT = this.host.close(this.id);
          UT.length > 0 && this.images.onEvent(UT), this.page.isTrapped || TT.aMT(this.id)
        })), this.images.dispose(), this.canvas.remove()
      }
      resolveSettled() {
        const TT = this.settled;
        this.settled = [];
        for (const UT of TT) UT()
      }
    }
    class zU {
      constructor(TT) {
        this.deps = TT, this.module = null, this.host = null, this.opening = null, this.pageCanvas = null, this.samples = 1, this.binding = null, this.sessionEnds = 0, this.lastEndReturned = !0, this.previews = new Map, this.nextId = 1, this.frameId = null, this.stopped = !1, this.loggedErrors = new Set, this.modelsListener = {
          onUnavailable: TT => {
            this.modelsFailed(TT)
          },
          onDecoderFailed: TT => {
            this.loggedErrors.has("modelDecoder") || (this.loggedErrors.add("modelDecoder"), console.warn(`${VT} the Draco decoder didn't load: models waiting on it won't draw`, TT))
          },
          onWorkerLost: TT => {
            this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${VT} a model worker was lost: ${TT}`))
          },
          onModuleRetry: () => {}
        }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.Np = {
          setShaderPack: (TT, UT, mT, WT, zT) => (this.shaderPackArgs = [TT, UT, mT, WT, zT], this.handOverShaderPack(), !0)
        }, this.frame = TT => {
          this.frameId = null;
          const UT = this.host;
          if (null !== UT && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped) try {
            this.drawFrame(UT, TT)
          } catch (mT) {
            if (!this.stopIfTrapped(mT) && (this.stop(), (0, iT.p)(mT))) return void this.deps.onRenderFailed("frames_refused", mT);
            console.warn(`${VT} the previews stopped: their frame threw`, mT)
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
        var TT, UT;
        return null !== (TT = null === (UT = this.host) || void 0 === UT ? void 0 : UT.attached()) && void 0 !== TT && TT
      }
      get open() {
        return this.previews.size
      }
      get frameCostMs() {
        return 0 === this.costs.length ? 0 : this.costs.reduce(((TT, UT) => TT + UT), 0) / this.costs.length
      }
      async bindSession(TT, UT, mT) {
        const WT = this.binding,
          zT = this.sessionEnds;
        try {
          const MT = this.hostOf(TT);
          if (!MT.VgT()) {
            const UT = (0, IT.f)().sampleCount,
              gT = await mT(UT);
            if (this.sessionEnds !== zT) return this.keepRendererOfEndedSession(TT, MT, gT, UT, WT), UT;
            if (!MT.OgT(gT)) throw new Error("the page has a renderer already");
            (0, tT.w)(performance.now()), this.samples = UT, (0, QT.h)((0, iT.k)(TT))
          }
          if (!MT.attach(UT)) throw new Error("the page's renderer is lent to another session");
          return this.samples
        } finally {
          this.binding === WT && this.endBinding()
        }
      }
      keepRendererOfEndedSession(TT, UT, mT, WT, zT) {
        if (!this.lastEndReturned || null !== this.binding && this.binding !== zT) try {
          mT.free()
        } catch (MT) {
          console.warn(`${VT} an ended session's renderer didn't free`, MT)
        } else UT.OgT(mT) && ((0, tT.w)(performance.now()), this.samples = WT, (0, QT.h)(this.registryOf(TT)))
      }
      async beginSession() {
        var TT;
        let UT = () => {};
        const mT = new Promise((TT => {
          UT = TT
        }));
        this.binding = {
          done: mT,
          release: UT
        }, await (null === (TT = this.opening) || void 0 === TT ? void 0 : TT.catch((() => null)));
        const WT = this.pageCanvas;
        return this.pageCanvas = null, WT
      }
      endSession(TT) {
        var UT, mT;
        if (this.sessionEnds++, this.lastEndReturned = TT, this.endBinding(), TT) {
          try {
            var WT;
            null === (WT = this.host) || void 0 === WT || WT.detach()
          } catch (zT) {
            return void console.warn(`${VT} the session's core kept the page's renderer`, zT)
          }!0 === (null === (UT = this.host) || void 0 === UT ? void 0 : UT.attached()) && console.warn(`${VT} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (mT = this.host) || void 0 === mT ? void 0 : mT.VgT()) && (0, QT.h)(this.registryOf(this.module))
        }
      }
      endBinding() {
        var TT;
        null === (TT = this.binding) || void 0 === TT || TT.release(), this.binding = null
      }
      async openPreview(TT, UT, mT, WT) {
        const zT = await this.renderingHost(),
          MT = this.module;
        if (null === zT || null === MT) throw new Error("this page can't draw previews: it has no renderer build");
        if (this.animations ??= this.loadAnimations(zT), this.deps.pack.wanted(), this.isStopped) throw new Error("the previews stopped");
        this.guarded((() => {
          this.deps.provideBuiltInAnimationPack(MT)
        }));
        const gT = this.nextId++,
          nT = this.deps.createCanvas(),
          [HT, kT] = AT(UT, mT, this.deps.dpr(), WT);
        nT.width = HT, nT.height = kT;
        if (!this.guarded((() => (MT.tMT(gT, nT), zT.open(gT, HT, kT, TT))))) throw this.hostCall(void 0, (() => {
          MT.aMT(gT)
        })), new Error("the page's renderer is lent to a session that is running");
        this.restartModelsIfFailed();
        const jT = new WU(this, zT, gT, nT, [HT, kT], this.deps);
        return this.previews.set(gT, jT), this.startFrames(), jT
      }
      prefetch() {
        if (this.prefetched || this.isStopped || (0, tT.d)() || null !== (0, tT.J)()) return;
        this.prefetched = !0;
        (null === this.module ? this.loadModule() : Promise.resolve(this.module)).then((TT => {
          null === TT || this.isStopped || (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles())
        }), (() => {}))
      }
      modelFile(TT) {
        return this.prefetchedOr(TT, this.deps.fetchModel)
      }
      imageFile(TT) {
        return this.prefetchedOr(TT, WT.M)
      }
      prefetchedOr(TT, UT) {
        const mT = this.prefetchedFiles.get(TT);
        return void 0 === mT ? UT(TT) : mT.catch((() => UT(TT)))
      }
      async prefetchPlayerFiles() {
        const TT = this.deps.playerFile().then((TT => this.deps.files.url(TT))),
          UT = await Promise.all([TT, this.deps.images.lifeformAtlasUrl(dT.c)]).catch((() => null));
        if (null === UT) return;
        const [mT, WT] = UT, zT = (TT, UT) => {
          if (null === TT) return;
          const mT = UT(TT);
          this.prefetchedFiles.set(TT, mT), mT.catch((() => {
            this.prefetchedFiles.delete(TT)
          }))
        };
        zT(mT, (TT => this.modelFile(TT))), zT(WT, (TT => this.imageFile(TT)))
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
      buildModel(TT, UT) {
        return this.startModels(), this.models.then((mT => mT(TT, UT))).then((TT => this.unavailable ? new Promise((() => {})) : TT))
      }
      restartModelsIfFailed() {
        this.unavailable && !this.modelsRestarted && 0 === this.previews.size && (this.modelsRestarted = !0, this.models = null, this.unavailable = !1, this.startModels())
      }
      modelsFailed(TT) {
        this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${VT} the model workers didn't start: models won't draw in the previews`, TT))
      }
      called(TT) {
        return 0 !== TT && this.logError(TT, 0), TT
      }
      closePreview(TT) {
        this.previews.delete(TT.id), null !== this.module && TT.dispose(this.module), 0 === this.previews.size && null !== this.frameId && (this.deps.cancelFrame(this.frameId), this.frameId = null)
      }
      hostOf(TT) {
        if (null !== this.module && this.module !== TT) throw new Error("a second renderer module on one page");
        return this.module = TT, null === this.host && (this.host = this.guarded((() => new TT.wMT)), this.tellInGame(), this.handOverShaderPack()), this.host
      }
      tellInGame() {
        const {
          host: TT
        } = this;
        null !== TT && this.outsideCall("the game's start or end", (() => {
          TT.SgT(this.deps.game.inGame())
        }))
      }
      handOverShaderPack() {
        const {
          host: TT,
          shaderPackArgs: UT
        } = this;
        null !== TT && null !== UT && this.outsideCall("the shader pack's hand-over", (() => {
          TT.qWT(...UT) || console.warn(`${VT} the host refused the shader pack: previews draw without it at home`)
        }))
      }
      outsideCall(TT, UT) {
        try {
          this.hostCall(void 0, UT)
        } catch (mT) {
          this.stop(), console.warn(`${VT} the previews stopped: ${TT} threw`, mT)
        }
      }
      async loadAnimations(TT) {
        const UT = gT(null),
          mT = this.module;
        try {
          UT.wasm = null === mT ? UT.wasm : this.hostCall(UT.wasm, (() => mT.Zl()))
        } catch {}
        let WT, zT;
        try {
          WT = await this.fetchAnimationTable()
        } catch (MT) {
          return void this.deps.onAnimationsFailed({
            stage: "fetch",
            error: MT
          }, UT)
        }
        if (!this.settleIfTrapped()) {
          try {
            zT = TT.CgT(WT)
          } catch (MT) {
            if (this.stopIfTrapped(MT)) return;
            return void this.deps.onAnimationsFailed({
              stage: "decode",
              error: MT
            }, UT)
          }
          zT || this.deps.onAnimationsFailed({
            stage: "decode",
            error: null
          }, UT)
        }
      }
      async renderingHost() {
        if (null !== this.binding && await this.binding.done, this.settleIfTrapped()) return null;
        const TT = this.host;
        return null !== TT && this.guarded((() => TT.VgT())) ? TT : (this.opening ??= this.openAtHome().finally((() => {
          this.opening = null
        })), this.opening)
      }
      async openAtHome() {
        var TT;
        const UT = null !== (TT = this.module) && void 0 !== TT ? TT : await this.loadModule();
        if (null === UT) return null;
        const mT = this.hostOf(UT),
          WT = () => this.guarded((() => mT.VgT()));
        if (WT()) return mT;
        if (null !== (0, tT.J)() || (0, tT.d)()) return null;
        const zT = this.deps.createCanvas();
        zT.width = 1, zT.height = 1;
        const MT = await this.deps.openExtras();
        if (this.settleIfTrapped()) return null;
        const gT = (0, IT.f)().sampleCount;
        let nT;
        try {
          nT = await (0, iT.u)(UT, "previewRenderer", zT, gT, sT.b, MT)
        } catch (HT) {
          throw HT instanceof xT.b ? this.stopForTrap(HT) : (0, iT.s)(HT) && await this.deps.onRenderFailed("start_failed", HT), HT
        }
        return this.guarded((() => mT.OgT(nT))) ? ((0, tT.w)(performance.now()), this.samples = gT, this.pageCanvas = zT, (0, QT.h)(this.registryOf(UT)), mT) : WT() ? mT : null
      }
      startFrames() {
        null !== this.frameId || this.isStopped || (this.frameId = this.deps.requestFrame(this.frame))
      }
      drawFrame(TT, UT) {
        for (const gT of this.previews.values()) gT.feed();
        if (this.stopped) return;
        const mT = this.deps.now(),
          WT = TT.frame(UT);
        this.costs.push(this.deps.now() - mT), this.costs.length > 120 && this.costs.shift();
        const zT = 0 !== (256 & WT),
          MT = 255 & WT;
        for (const gT of this.previews.values()) {
          if (this.stopped) return;
          gT.collect(zT)
        }
        if (!this.stopped) {
          if (0 !== (512 & WT) && this.deps.onDrew(), zT) {
            const UT = TT.hgT();
            for (let TT = 0; TT + 1 < UT.length; TT += 2) UT[TT] === qT.S.RenderDeviceLost && this.deps.onDeviceLost(), this.logError(UT[TT], UT[TT + 1])
          }
          if (MT !== ST) {
            if (MT === GT) return this.stop(), void this.deps.onFatal(TT.QgT(), TT.sgT());
            if (MT === NT) return this.stop(), void console.warn(`${VT} the previews stopped: the page's renderer went with its session`);
            (0, cT.d)(UT), this.startFrames()
          } else {
            const UT = TT.FgT();
            this.stop();
            const mT = UT[2] === qT._c.PIPELINE_FAILED ? "pipeline_failed" : "lost";
            this.deps.onRenderFailed(mT, void 0, UT[1], UT[2] === qT._c.RESTORE_LOST)
          }
        }
      }
      get isStopped() {
        return this.stopped || this.isTrapped
      }
      get isTrapped() {
        return null !== this.module && ((0, xT.g)(this.module) || "failed" === (0, BT.A)())
      }
      hostCall(TT, UT) {
        if (this.settleIfTrapped()) return TT;
        try {
          return UT()
        } catch (mT) {
          if (this.stopIfTrapped(mT)) return TT;
          throw mT
        }
      }
      guarded(TT) {
        if (this.settleIfTrapped()) throw new Error("the previews stopped: their module trapped");
        try {
          return TT()
        } catch (UT) {
          throw this.stopIfTrapped(UT), UT
        }
      }
      registryOf(TT) {
        return {
          MWT: (UT, mT) => {
            this.hostCall(void 0, (() => {
              TT.MWT(UT, mT)
            }))
          },
          gWT: UT => {
            this.hostCall(void 0, (() => {
              TT.gWT(UT)
            }))
          }
        }
      }
      settleIfTrapped() {
        return !!this.isTrapped && (this.stopped || (this.stop(), (0, QT.h)(null)), !0)
      }
      stopIfTrapped(TT) {
        return !(null === this.module || !(0, xT.i)(this.module, TT)) && (this.stopForTrap(TT), !0)
      }
      stopForTrap(TT) {
        this.stop(), (0, QT.h)(null), (0, PT.d)("previews", TT)
      }
      stop() {
        this.stopped = !0;
        for (const TT of this.previews.values()) TT.abandon()
      }
      logError(TT, UT) {
        const mT = `${TT}:${UT}`;
        this.loggedErrors.has(mT) || (this.loggedErrors.add(mT), console.warn(`${VT} error ${TT} (detail ${UT})`))
      }
    }
    let MU = null;

    function gU() {
      return MU ??= new zU(function() {
        const TT = (0, YT.s)(ZT.clientSideServerUrls.staticUrl, {
          packUrl: TT => {
            var UT, mT;
            return null !== (UT = null === (mT = dT.e.current) || void 0 === mT ? void 0 : mT.modelUrl(TT)) && void 0 !== UT ? UT : null
          }
        });
        return {
          loadModule: mU,
          startModels: async TT => {
            const {
              pageModelPool: UT
            } = await mT.e(43).then((() => mT(51172))), {
              pool: WT
            } = UT(TT);
            return (TT, UT) => WT.build(TT, UT)
          },
          fetchAnimations: async () => nT(await (0, WT.M)(RT())),
          playerFile: async () => (await (0, YT.q)()).PLAYER_FILE,
          onAnimationsFailed: (TT, UT) => {
            HT("previewAnimations", RT(), TT, UT)
          },
          provideBuiltInAnimationPack: TT => {
            LT().provide(TT)
          },
          openExtras: tT.C,
          files: TT,
          images: (0, dT.l)((0, OT.r)(TT.url), (() => dT.e.current)),
          pack: dT.e,
          game: wT.c,
          fetchModel: TT => (0, YT.j)(TT),
          createCanvas: () => document.createElement("canvas"),
          dpr: () => window.devicePixelRatio,
          now: () => performance.now(),
          requestFrame: TT => requestAnimationFrame(TT),
          cancelFrame: TT => {
            cancelAnimationFrame(TT)
          },
          onRenderFailed: TU,
          onFatal: (TT, UT) => {
            console.error(`${VT} the previews stopped: renderer error ${TT} (detail ${UT})`)
          },
          onDeviceLost: () => {
            (0, tT.F)() === XT.e.webgpu && ((0, bT.e)((0, BT.Q)() ? (0, iT.O)((0, BT.C)()) : null), vT.y.lost())
          },
          onDrew: () => {
            vT.y.drew()
          }
        }
      }()), MU
    }
    var nU = mT(643),
      HU = mT(38762),
      kU = mT(3411);
    const jU = {
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
    const lU = "[bloxd-previews]",
      LU = new Uint32Array(5);

    function pU(TT) {
      return nU.j.indexOf(TT)
    }
    const BU = new WeakSet;

    function ZU(TT) {
      const UT = (0, HU.f)(TT),
        mT = null === UT ? -1 : cU(UT);
      return -1 !== mT ? mT : (BU.has(TT) || (BU.add(TT), console.warn(`${lU} an animation the previews' table lacks: the mob idles instead`)), -1)
    }

    function cU(TT) {
      var UT;
      return null !== (UT = jU[TT]) && void 0 !== UT ? UT : -1
    }

    function vU(TT, UT) {
      const {
        canvas: mT
      } = UT;
      mT.style.width = "100%", mT.style.height = "100%", mT.style.display = "block", TT.appendChild(mT)
    }

    function fU(TT) {
      const UT = TT.getBoundingClientRect();
      return [UT.width, UT.height]
    }
    class qU {
      constructor(TT, UT) {
        this.preview = TT, this.showView = UT
      }
      show(TT) {
        this.showView(this.preview, TT)
      }
      resize(TT, UT) {
        this.preview.resize(TT, UT)
      }
      close() {
        this.preview.close()
      }
    }
    class iU {
      constructor(TT) {
        this.preview = TT, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.detachControls = void 0, this.detachControls = function(TT) {
          const {
            canvas: UT
          } = TT;
          let mT = null;
          const WT = TT => {
              var WT;
              mT = {
                pointer: TT.pointerId,
                x: TT.clientX,
                y: TT.clientY
              }, null === (WT = UT.setPointerCapture) || void 0 === WT || WT.call(UT, TT.pointerId)
            },
            zT = UT => {
              var WT;
              const zT = TT.orbit;
              if ((null === (WT = mT) || void 0 === WT ? void 0 : WT.pointer) !== UT.pointerId || null === zT) return;
              const MT = UT.clientX - mT.x,
                gT = UT.clientY - mT.y;
              mT = {
                ...mT,
                x: UT.clientX,
                y: UT.clientY
              }, TT.setOrbit({
                alpha: zT.alpha - .01 * MT,
                beta: Math.min(Math.PI - .01, Math.max(.01, zT.beta - .01 * gT)),
                radius: zT.radius
              })
            },
            MT = TT => {
              var UT;
              (null === (UT = mT) || void 0 === UT ? void 0 : UT.pointer) === TT.pointerId && (mT = null)
            },
            gT = UT => {
              const mT = TT.orbit;
              if (null === mT) return;
              UT.preventDefault();
              const WT = UT.deltaY * (UT.deltaMode === WheelEvent.DOM_DELTA_LINE ? 40 : UT.deltaMode === WheelEvent.DOM_DELTA_PAGE ? 800 : 1),
                zT = Math.min(100, Math.max(5, mT.radius + .08 * WT));
              TT.setOrbit({
                ...mT,
                radius: zT
              })
            };
          return UT.style.touchAction = "none", UT.addEventListener("pointerdown", WT), UT.addEventListener("pointermove", zT), UT.addEventListener("pointerup", MT), UT.addEventListener("pointercancel", MT), UT.addEventListener("wheel", gT, {
            passive: !1
          }), () => {
            UT.removeEventListener("pointerdown", WT), UT.removeEventListener("pointermove", zT), UT.removeEventListener("pointerup", MT), UT.removeEventListener("pointercancel", MT), UT.removeEventListener("wheel", gT)
          }
        }(TT), this.dev = {
          canvas: () => TT.canvas,
          isolateHead: () => {
            console.warn(`${lU} isolateHead: noa's character preview only`)
          }
        }, this.apply(), this.ready = TT.untilSettled().then((() => {
          if (TT.isStopped) throw new Error(`${lU} the previews stopped before the character drew`);
          this.built = !0
        }))
      }
      isReady() {
        return this.built && !this.preview.isClosed
      }
      setCosmetic(TT, UT) {
        this.cosmetics[TT] = UT, this.apply()
      }
      playEmote(TT) {
        null === TT || TT !== this.emote ? (this.emote = TT, this.apply()) : this.preview.replay()
      }
      untilDrawn(TT) {
        return this.preview.untilSettled()
      }
      setOrbit(TT) {
        let {
          yaw: UT,
          pitch: mT,
          radius: WT
        } = TT;
        const zT = this.preview.orbit;
        null !== zT && this.preview.setOrbit({
          alpha: UT,
          beta: mT,
          radius: null !== WT && void 0 !== WT ? WT : zT.radius
        })
      }
      resetCamera() {}
      resize(TT, UT) {
        this.preview.resize(TT, UT)
      }
      close() {
        this.detachControls(), this.preview.close()
      }
      apply() {
        var TT;
        this.preview.setPlayer(JSON.stringify(this.cosmetics), LU, null === (TT = this.emote) ? -1 : cU(TT))
      }
    }

    function bU(TT, UT) {
      let {
        mobType: mT,
        variation: WT,
        animation: zT
      } = UT;
      TT.setMob(pU(mT), null !== WT && void 0 !== WT ? WT : "", 1, ZU(zT))
    }

    function OU(TT, UT) {
      let {
        mobType: mT,
        variation: WT,
        metaInfo: zT,
        tamed: MT
      } = UT;
      TT.setPet(pU(mT), WT, zT, MT)
    }
    const eU = {
      aimed: .533 / 1.15 * 1.1,
      ready: .16 / .85 * 1.1
    };
    class YU {
      constructor(TT, UT, mT, WT) {
        this.preview = null, this.closed = !1, this.figure = null, this.shown = !1, this.order = "", this.span = {
          left: 0,
          width: 0
        }, this.lineup = [0, 0], this.given = null, this.loaded = !1, TT(mT.width, WT[1], WT).then((TT => {
          if (this.closed) return void TT.close();
          const {
            style: mT
          } = TT.canvas;
          mT.position = "absolute", mT.top = "0", mT.visibility = "hidden", vU(UT, TT), this.preview = TT, this.apply()
        })).catch((TT => {
          console.error(`${lU} couldn't open a lineup figure`, TT)
        }))
      }
      update(TT, UT, mT, WT, zT) {
        this.figure = TT, this.shown = UT, this.order = mT, this.span = WT, this.lineup = zT, this.apply()
      }
      close() {
        var TT;
        this.closed = !0, null === (TT = this.preview) || void 0 === TT || TT.close(), this.preview = null
      }
      apply() {
        const {
          preview: TT,
          figure: UT,
          lineup: mT
        } = this;
        if (null === TT || null === UT) return;
        if (this.given !== UT) {
          var WT;
          this.given = UT, this.loaded = !1;
          const mT = null === UT.AY ? 0 : null !== (WT = (0, kU.c)(UT.AY)) && void 0 !== WT ? WT : 0;
          TT.setFigure(function(TT) {
            return JSON.stringify(Object.fromEntries(TT.cosmetics))
          }(UT), mT, ZU(UT.animation), UT.size), TT.untilSettled().then((() => {
            this.given === UT && (this.loaded = !0, this.apply())
          }))
        }
        const {
          left: zT,
          width: MT
        } = this.span;
        TT.resize(MT, mT[1], mT);
        const {
          style: gT
        } = TT.canvas;
        gT.left = `${zT}px`, gT.width = `${MT}px`, gT.zIndex = this.order, gT.visibility = this.shown && this.loaded ? "visible" : "hidden"
      }
    }
    class JU {
      constructor(TT, UT) {
        this.open = UT, this.layer = void 0, this.figures = [], this.view = {
          figures: [],
          shown: []
        }, this.size = void 0, this.size = fU(TT), this.layer = document.createElement("div");
        const {
          style: mT
        } = this.layer;
        mT.position = "relative", mT.isolation = "isolate", mT.overflow = "hidden", mT.width = "100%", mT.height = "100%", mT.pointerEvents = "none", TT.appendChild(this.layer)
      }
      show(TT) {
        this.view = TT, this.place()
      }
      resize(TT, UT) {
        this.size = [TT, UT], this.place()
      }
      close() {
        for (const TT of this.figures) TT.close();
        this.figures = [], this.layer.remove()
      }
      place() {
        const {
          figures: TT,
          shown: UT
        } = this.view;
        for (const WT of this.figures.splice(TT.length)) WT.close();
        const {
          size: mT
        } = this;
        TT.forEach(((WT, zT) => {
          var MT;
          const gT = function(TT, UT, mT, WT) {
            let [zT, MT] = WT;
            const gT = (TT + .5) * zT / UT,
              nT = Math.min(Math.max(zT / UT, 2 * mT * MT), 2 * Math.max(gT, zT - gT));
            return {
              left: gT - nT / 2,
              width: nT
            }
          }(zT, TT.length, function(TT) {
            let {
              animation: UT,
              size: mT
            } = TT;
            const {
              aimed: WT,
              ready: zT
            } = eU;
            return (ZU(UT) === jU.gunAimed ? WT : zT) * mT
          }(WT), mT);
          this.figures[zT] ??= new YU(this.open, this.layer, gT, mT), this.figures[zT].update(WT, null !== (MT = UT[zT]) && void 0 !== MT && MT, function(TT, UT) {
            return String(Math.round(1e3 * TT) + UT)
          }(WT.size, zT), gT, mT)
        }))
      }
    }
    const xU = {
      player: rT,
      store: KT
    };
    class dU {
      constructor(TT) {
        this.page = TT
      }
      async openMob(TT) {
        return new qU(await this.open(TT, CT), bU)
      }
      async openPet(TT) {
        return new qU(await this.open(TT, CT), OU)
      }
      openMobLineup(TT) {
        return new JU(TT, ((TT, UT, mT) => this.page.openPreview(CT, TT, UT, mT)))
      }
      async openCharacter(TT, UT) {
        return new iU(await this.open(TT, xU[UT]))
      }
      async open(TT, UT) {
        const [mT, WT] = fU(TT), zT = await this.page.openPreview(UT, mT, WT);
        return vU(TT, zT), zT
      }
    }
  },
  36843: (TT, UT, mT) => {
    mT.d(UT, {
      A: () => ZT,
      B: () => vT,
      b: () => WT,
      e: () => zT,
      i: () => LT,
      j: () => cT,
      m: () => jT,
      q: () => fT,
      s: () => HT,
      u: () => kT,
      w: () => pT,
      z: () => BT
    });
    const WT = [{
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

    function zT(TT, UT) {
      const {
        numLines: mT,
        charsPerLine: zT
      } = WT[UT];
      return qT(TT, mT, zT, !1)
    }
    const MT = 7 / 8,
      gT = .25,
      nT = 8;

    function HT(TT, UT) {
      return {
        width: Math.min(TT, nT) - 2 * gT,
        height: Math.min(UT, nT) - 2 * gT
      }
    }

    function kT(TT, UT, mT) {
      const zT = HT(TT, UT),
        {
          numLines: gT,
          charsPerLine: nT
        } = WT[mT];
      return {
        numLines: Math.max(1, Math.floor(gT / MT * zT.height)),
        charsPerLine: Math.max(1, Math.floor(nT * zT.width))
      }
    }

    function jT(TT, UT, mT, WT) {
      const {
        numLines: zT,
        charsPerLine: MT
      } = kT(mT, WT, UT);
      return qT(TT, zT, MT, !1)
    }
    const lT = 32e3;

    function LT(TT) {
      return TT.slice(0, lT)
    }
    const pT = 512e3,
      BT = 64,
      ZT = pT;

    function cT(TT, UT) {
      const mT = Math.max(0, ZT - UT),
        WT = Math.min(pT, mT);
      return TT.slice(0, WT)
    }
    const vT = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      rg: {
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

    function fT(TT, UT) {
      const {
        numLines: mT,
        charsPerLine: WT
      } = vT[UT];
      return qT(TT, mT, WT, !1)
    }

    function qT(TT, UT, mT, WT, zT) {
      (zT || WT) && (TT = TT.slice(0, null !== zT && void 0 !== zT ? zT : UT * mT));
      const MT = TT.split("\n");
      if (MT.length > UT && MT.splice(UT, MT.length - UT), !WT)
        for (let gT = 0; gT < MT.length; gT++) {
          const TT = MT[gT];
          TT.length > mT && (MT[gT] = TT.substring(0, mT), MT.length < UT && MT.splice(gT + 1, 0, TT.substring(mT)))
        }
      return MT.join("\n")
    }
  },
  51106: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/builtInAnimations.anim.38e056f49512e10b7206.gz"
  },
  51114: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/previewAnimations.dat.24d2343c38c8f9b3fb85.gz"
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);