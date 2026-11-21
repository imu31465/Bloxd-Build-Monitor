export const id = 57;
export const ids = [57];
export const modules = {
  38164: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => qQ,
      f: () => oQ
    });
    const LQ = new WeakMap;

    function qQ(QQ, FQ) {
      return LQ.set(QQ, FQ), QQ
    }

    function oQ(QQ) {
      var FQ;
      return null !== (FQ = LQ.get(QQ)) && void 0 !== FQ ? FQ : null
    }
  },
  38183: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => kQ
    });
    var LQ = wQ(1237);

    function qQ(QQ) {
      const FQ = /(\d*\.?\d+)px/.exec(QQ);
      return FQ ? Number(FQ[1]) : null
    }

    function oQ(QQ) {
      return QQ.split(/[\s,]+/).pop()
    }
    let DQ = !1;
    const kQ = {
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
      drawText: function(QQ, FQ, LQ, kQ, vQ, mQ) {
        if (vQ <= 0 || mQ <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: uQ,
          fontVariant: HQ,
          fontWeight: bQ,
          fontSize: YQ,
          font: xQ
        } = this, AQ = [uQ, HQ, bQ, `${YQ}px`, xQ].filter(Boolean).join(" "), tQ = [
          [bQ, `${YQ}px`, oQ(xQ)].filter(Boolean).join(" "), `${YQ}px sans-serif`
        ], eQ = QQ.font, MQ = function(QQ, FQ, wQ) {
          for (const LQ of FQ) {
            QQ.font = LQ;
            const FQ = qQ(QQ.font),
              DQ = oQ(LQ);
            if (null !== FQ && Math.abs(FQ - wQ) <= .5 && QQ.font.toLowerCase().includes(DQ.toLowerCase())) return LQ
          }
          return null
        }(QQ, [AQ, ...tQ], YQ);
        MQ !== AQ && function(QQ, FQ, LQ) {
          DQ || (DQ = !0, Promise.resolve().then((() => wQ(1087))).then((wQ => {
            let {
              pA: qQ
            } = wQ;
            qQ(new Error("A canvas didn't take canvasTxt's font"), {
              font: QQ,
              iY: FQ,
              drawnWith: null !== LQ && void 0 !== LQ ? LQ : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(AQ, eQ, MQ);
        const GQ = qQ(QQ.font);
        if (null === MQ && null !== GQ && GQ > 0) {
          const wQ = YQ / GQ;
          QQ.save();
          try {
            return QQ.scale(wQ, wQ), {
              height: this.drawLines(QQ, FQ, LQ / wQ, kQ / wQ, vQ / wQ, mQ / wQ, GQ).height * wQ
            }
          } finally {
            QQ.restore()
          }
        }
        return this.drawLines(QQ, FQ, LQ, kQ, vQ, mQ, YQ)
      },
      drawLines: function(QQ, FQ, wQ, qQ, oQ, DQ, kQ) {
        const vQ = wQ + oQ,
          mQ = qQ + DQ;
        let uQ, HQ = qQ + DQ / 2 + kQ / 2;
        "right" === this.align ? (uQ = vQ, QQ.textAlign = "right") : "left" === this.align ? (uQ = wQ, QQ.textAlign = "left") : (uQ = wQ + oQ / 2, QQ.textAlign = "center");
        for (const LQ of FQ) {
          QQ.measureText(LQ).width >= oQ && (FQ = FQ.replace(LQ, ""))
        }
        FQ = (0, LQ.Z)(FQ);
        const bQ = [],
          YQ = FQ.split("\n"),
          xQ = this.justify ? QQ.measureText("\u200a").width : 0;
        YQ.forEach((FQ => {
          let wQ = QQ.measureText(FQ).width;
          if (wQ <= oQ) bQ.push(FQ);
          else {
            let LQ = FQ;
            const qQ = oQ;
            let DQ, kQ, vQ;
            for (wQ = QQ.measureText(LQ).width; wQ > qQ;) {
              for (DQ = 0, kQ = 0, vQ = ""; kQ < qQ;) DQ++, vQ = LQ.substr(0, DQ), kQ = QQ.measureText(vQ).width;
              DQ--, vQ = vQ.substr(0, DQ);
              const FQ = DQ;
              if (" " !== LQ.substr(DQ, 1)) {
                for (;
                  " " !== LQ.substr(DQ, 1) && 0 !== DQ;) DQ--;
                0 === DQ && (DQ = FQ), vQ = LQ.substr(0, DQ)
              }
              vQ = this.justify ? this.justifyLine(QQ, vQ, xQ, "\u200a", oQ) : vQ, LQ = LQ.substr(DQ), wQ = QQ.measureText(LQ).width, bQ.push(vQ)
            }
            wQ > 0 && bQ.push(LQ)
          }
        }));
        const AQ = this.lineHeight ? this.lineHeight : this.getTextHeight(QQ, FQ),
          tQ = AQ * (bQ.length - 1),
          eQ = tQ / 2;
        let MQ = qQ;
        "top" === this.vAlign ? HQ = qQ + kQ : "bottom" === this.vAlign ? (HQ = mQ - tQ, MQ = mQ) : (MQ = qQ + DQ / 2, HQ -= eQ), bQ.forEach((FQ => {
          FQ = FQ.trim(), QQ.fillText(FQ, uQ, HQ), HQ += AQ
        })), this.debug && (QQ.lineWidth = 3, QQ.strokeStyle = "#00909e", QQ.strokeRect(wQ, qQ, oQ, DQ), QQ.lineWidth = 2, QQ.strokeStyle = "#f6d743", QQ.beginPath(), QQ.moveTo(uQ, qQ), QQ.lineTo(uQ, mQ), QQ.stroke(), QQ.strokeStyle = "#ff6363", QQ.beginPath(), QQ.moveTo(wQ, MQ), QQ.lineTo(vQ, MQ), QQ.stroke());
        return {
          height: tQ + AQ
        }
      },
      getTextHeight: function(QQ, FQ) {
        const wQ = QQ.textBaseline;
        QQ.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: LQ
        } = QQ.measureText(FQ);
        return QQ.textBaseline = wQ, LQ
      },
      justifyLine: function(QQ, FQ, wQ, LQ, qQ) {
        const oQ = FQ.trim(),
          DQ = QQ.measureText(oQ).width,
          kQ = oQ.split(/\s+/).length - 1,
          vQ = Math.floor((qQ - DQ) / wQ);
        if (kQ <= 0 || vQ <= 0) return oQ;
        const mQ = Math.floor(vQ / kQ);
        let uQ = vQ - kQ * mQ,
          HQ = [];
        for (let bQ = 0; bQ < mQ; bQ++) HQ.push(LQ);
        HQ = HQ.join("");
        return oQ.replace(/\s+/g, (QQ => {
          const FQ = uQ > 0 ? HQ + LQ : HQ;
          return uQ--, QQ + FQ
        }))
      }
    }
  },
  38188: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => AQ,
      d: () => xQ,
      h: () => bQ,
      k: () => uQ,
      l: () => HQ
    });
    var LQ = wQ(4119),
      qQ = wQ(317);
    const oQ = 1024,
      DQ = 1536,
      kQ = 2 * LQ.k + 1,
      vQ = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      mQ = 1.5;

    function uQ(QQ, FQ, wQ) {
      if ("string" !== typeof QQ) return FQ;
      try {
        const wQ = JSON.parse(QQ);
        return wQ && "object" === typeof wQ ? wQ : FQ
      } catch (LQ) {
        return void 0 !== wQ && console.error(`Couldn't parse ${wQ}`, LQ), FQ
      }
    }

    function HQ(QQ) {
      return uQ(QQ, null, "a leaderboard's rows")
    }

    function bQ(QQ, FQ) {
      var wQ, LQ;
      return null !== FQ && void 0 !== FQ ? FQ : {
        status: null !== (wQ = QQ.status) && void 0 !== wQ ? wQ : "loading",
        entries: null !== (LQ = QQ.entries) && void 0 !== LQ ? LQ : []
      }
    }

    function YQ(QQ, FQ) {
      return "number" === typeof QQ && Number.isFinite(QQ) && QQ > 0 ? QQ : FQ
    }

    function xQ(QQ, FQ) {
      const wQ = YQ(QQ.size, 1);
      let LQ = YQ(QQ.width, YQ(2.5 * wQ, 2.5)),
        qQ = YQ(QQ.height, YQ(3.75 * wQ, 3.75));
      Number.isFinite(oQ * qQ / LQ) && Number.isFinite(DQ * LQ / qQ) || (LQ = 2.5, qQ = 3.75);
      const kQ = qQ / LQ,
        vQ = Math.max(1, Math.min(oQ, FQ / kQ));
      return {
        width: LQ,
        height: qQ,
        layoutWidth: Math.max(oQ, DQ / kQ),
        layoutHeight: Math.max(DQ, oQ * kQ),
        pixelWidth: Math.round(vQ),
        pixelHeight: Math.round(Math.max(1, Math.min(FQ, vQ * kQ)))
      }
    }

    function AQ(QQ, FQ, wQ, DQ, uQ, HQ) {
      QQ.setTransform(1, 0, 0, 1, 0, 0), QQ.fillStyle = qQ.K.defaultNameTagBackground, QQ.fillRect(0, 0, FQ, wQ), QQ.scale(FQ / DQ.layoutWidth, wQ / DQ.layoutHeight), QQ.translate((DQ.layoutWidth - oQ) / 2, 0),
        function(QQ, FQ, wQ, oQ) {
          var DQ, uQ, HQ, bQ;
          const {
            top: YQ,
            around: xQ,
            showPlayerText: AQ,
            localPlayerDbId: MQ
          } = wQ, {
            whiteUiText: GQ,
            grayUiText: pQ,
            yellowUiText: cQ
          } = qQ.K;
          QQ.textBaseline = "middle";
          const CQ = function(FQ, wQ, LQ, qQ, oQ, DQ) {
              let kQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              QQ.font = `bold ${qQ}px 'Jetbrains Mono', monospace`, QQ.fillStyle = oQ, QQ.textAlign = kQ;
              let vQ = FQ.replace(/[\r\n\t]/g, " ");
              if (QQ.measureText(vQ).width > DQ) {
                for (; vQ.length > 0 && QQ.measureText(`${vQ}\u2026`).width > DQ;) vQ = vQ.slice(0, -1);
                vQ += "\u2026"
              }
              QQ.fillText(vQ, wQ, LQ)
            },
            SQ = FQ => {
              QQ.fillStyle = GQ, QQ.globalAlpha = .15, QQ.fillRect(24, FQ, 976, 2), QQ.globalAlpha = 1
            },
            iQ = null === MQ ? null : (0, qQ.pc)(MQ),
            WQ = QQ => null !== iQ && QQ.playerHash === iQ,
            RQ = tQ(YQ.entries, LQ.o),
            OQ = "ready" === YQ.status && RQ.length > 0,
            sQ = null === xQ ? [] : tQ(xQ.entries, kQ),
            rQ = RQ.some(WQ),
            IQ = null === xQ ? null : function(QQ) {
              const FQ = QQ;
              if (!FQ || !Number.isFinite(FQ.rank) || !Number.isFinite(FQ.tied) || !Number.isFinite(FQ.total)) return null;
              return FQ
            }(xQ.standing),
            UQ = sQ.find(WQ),
            NQ = RQ.find(WQ),
            TQ = null === IQ || void 0 === UQ ? null : {
              value: UQ.value,
              rank: IQ.rank
            },
            KQ = eQ(RQ, void 0 === NQ || NQ.value === (null === TQ || void 0 === TQ ? void 0 : TQ.value) ? TQ : null),
            zQ = eQ(sQ, TQ),
            lQ = (QQ, FQ) => {
              const wQ = QQ.findIndex(WQ);
              return wQ >= 0 ? FQ[wQ] : null
            },
            jQ = null !== (DQ = null !== (uQ = null === IQ || void 0 === IQ ? void 0 : IQ.rank) && void 0 !== uQ ? uQ : lQ(sQ, zQ)) && void 0 !== DQ ? DQ : lQ(RQ, KQ);
          QQ.font = "bold 34px 'Jetbrains Mono', monospace";
          const aQ = [...OQ ? KQ : [], ...rQ ? [] : zQ],
            XQ = Math.min(280, Math.max(0, ...aQ.map((FQ => QQ.measureText(vQ.format(FQ)).width)))),
            fQ = XQ <= 80,
            VQ = fQ ? 80 : 32 + XQ,
            hQ = fQ ? 148 : VQ + 28,
            JQ = 660 - hQ;
          CQ(`TOP ${LQ.o}  /  ALL TIME`, 24, 52, 28, pQ, 976), CQ(AQ ? String(null !== (HQ = FQ.title) && void 0 !== HQ ? HQ : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, GQ, 976), CQ("RANK", 32, 174, 28, pQ, hQ - 40), CQ("PLAYER", hQ, 174, 28, pQ, JQ), CQ(AQ ? String(null !== (bQ = FQ.scoreLabel) && void 0 !== bQ ? bQ : "Score").slice(0, 24) : "Score", 992, 174, 28, pQ, 304, "right"), SQ(202);
          const EQ = (oQ - 232) / (LQ.o + mQ + kQ),
            nQ = 208 + LQ.o * EQ,
            gQ = nQ + mQ * EQ,
            PQ = (FQ, wQ, LQ, qQ) => {
              const oQ = WQ(FQ);
              QQ.fillStyle = oQ ? cQ : GQ, QQ.globalAlpha = oQ ? .15 : qQ ? .035 : 0, QQ.fillRect(24, LQ - EQ / 2 + 1, 976, EQ - 2), QQ.globalAlpha = 1;
              const DQ = oQ ? cQ : GQ;
              CQ(vQ.format(wQ), VQ, LQ, 34, DQ, fQ ? 80 : XQ, fQ ? "center" : "right"), CQ(AQ ? String(FQ.name).slice(0, 64) : "Player", hQ, LQ, 34, DQ, JQ);
              const kQ = vQ.format(FQ.value);
              CQ(QQ.measureText(kQ).width > 304 ? FQ.value.toExponential(6) : kQ, 992, LQ, 34, DQ, 304, "right")
            };
          if (OQ)
            for (const [LQ, qQ] of RQ.entries()) PQ(qQ, KQ[LQ], 208 + (LQ + .5) * EQ, LQ % 2 === 0);
          else {
            const QQ = "error" === YQ.status,
              FQ = QQ ? "Couldn't load leaderboard" : "ready" === YQ.status ? "No scores yet" : "Loading leaderboard\u2026",
              wQ = QQ ? "Trying again shortly" : "ready" === YQ.status ? "Be the first on the board!" : "Fetching the top players",
              LQ = (208 + nQ) / 2;
            CQ(FQ, 512, LQ - 28, 40, QQ ? qQ.K.redUiText : GQ, 960, "center"), CQ(wQ, 512, LQ + 27, 30, pQ, 960, "center")
          }
          const ZQ = nQ + mQ * EQ / 2;
          if (null === jQ) SQ(ZQ);
          else {
            const FQ = null === IQ ? 0 : IQ.tied - 1,
              wQ = `YOUR RANK #${vQ.format(jQ)}${null===IQ?"":` of ${vQ.format(IQ.total)}`}`;
            QQ.font = "bold 36px 'Jetbrains Mono', monospace";
            const LQ = Math.max(20, Math.min(36, Math.floor(34560 / QQ.measureText(wQ).width)));
            CQ(wQ, 512, ZQ - (FQ > 0 ? 15 : 0), LQ, cQ, 960, "center"), FQ > 0 && CQ(`Tied with ${vQ.format(FQ)} other${1===FQ?"":"s"}`, 512, ZQ + 24, 24, pQ, 960, "center")
          }
          if (null === xQ) return;
          const yQ = gQ + kQ * EQ / 2;
          if (rQ) CQ(`You're in the top ${LQ.o}!`, 512, yQ, 40, cQ, 960, "center");
          else if (0 === sQ.length) CQ("You're not on this board yet", 512, yQ, 34, pQ, 960, "center");
          else
            for (const [LQ, qQ] of sQ.entries()) PQ(qQ, zQ[LQ], gQ + (LQ + .5) * EQ, LQ % 2 === 0)
        }(QQ, uQ, HQ, DQ.layoutHeight)
    }

    function tQ(QQ, FQ) {
      return Array.isArray(QQ) ? QQ.slice(0, FQ).filter((QQ => QQ && Number.isFinite(QQ.rank) && Number.isFinite(QQ.value))) : []
    }

    function eQ(QQ, FQ) {
      const wQ = [];
      let LQ = !1;
      return QQ.forEach(((qQ, oQ) => {
        if (null !== FQ && qQ.value === FQ.value) return void wQ.push(FQ.rank);
        const DQ = oQ > 0 && qQ.value === QQ[oQ - 1].value;
        DQ || (LQ = 0 === oQ && 1 !== qQ.rank), wQ.push(DQ && !LQ ? wQ[oQ - 1] : qQ.rank)
      })), wQ
    }
  },
  38395: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => qQ,
      c: () => oQ
    });
    const LQ = 32;

    function qQ(QQ) {
      return Array.from(QQ).length
    }

    function oQ(QQ) {
      const FQ = [""];
      let wQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        qQ = "";
      const oQ = () => {
        FQ.push(""), wQ = 0, qQ = ""
      };
      for (const DQ of QQ.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(DQ)) oQ();
        else if (/^\s+$/.test(DQ)) qQ += DQ;
      else if (DQ.length > 0) {
        const QQ = Array.from(DQ);
        wQ > 0 && wQ + qQ.length + QQ.length > LQ && oQ(), FQ[FQ.length - 1] += qQ, wQ += qQ.length, qQ = "";
        for (const qQ of QQ) wQ >= LQ && oQ(), FQ[FQ.length - 1] += qQ, wQ++
      }
      return FQ[FQ.length - 1] += qQ, FQ
    }
  },
  42687: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      WasmPreviewHost: () => SF,
      pageBuiltInAnimationPack: () => bQ,
      pagePreviews: () => wF,
      previewModule: () => gQ
    });
    var LQ = wQ(2811),
      qQ = wQ(626);
    const oQ = "[bloxd-wasm-client]";

    function DQ(QQ) {
      const FQ = {
        wasm: "unknown",
        client: String(qQ.b)
      };
      try {
        var wQ;
        FQ.wasm = null !== (wQ = null === QQ || void 0 === QQ ? void 0 : QQ.AH()) && void 0 !== wQ ? wQ : FQ.wasm
      } catch {}
      return FQ
    }
    async function kQ(QQ) {
      if (QQ.length < 2 || 31 !== QQ[0] || 139 !== QQ[1]) return QQ;
      if ("undefined" === typeof DecompressionStream) {
        const {
          ungzip: FQ
        } = await Promise.resolve().then((() => wQ(2766)));
        return FQ(QQ)
      }
      const FQ = new Blob([QQ]).stream().pipeThrough(new DecompressionStream("gzip"));
      return new Uint8Array(await new Response(FQ).arrayBuffer())
    }

    function vQ(QQ, FQ, LQ, qQ) {
      Promise.resolve().then((() => wQ(40369))).then((wQ => {
        let {
          reportDataLoadFailure: oQ
        } = wQ;
        oQ(QQ, FQ, LQ, qQ)
      }), (FQ => {
        console.warn(`${oQ} ${QQ} didn't load, and the report couldn't be sent`, LQ.error, FQ)
      }))
    }
    const mQ = [3e4, 12e4, 3e5];
    class uQ {
      constructor(QQ) {
        this.deps = QQ, this.loading = null, this.reported = !1, this.retries = 0, this.resolveSet = () => {}, this.set = new Promise((QQ => {
          this.resolveSet = QQ
        }))
      }
      provide(QQ) {
        return this.loading ??= this.load(QQ), this.loading
      }
      whenSet() {
        return this.set
      }
      async load(QQ) {
        const FQ = DQ(QQ),
          wQ = await async function(QQ, FQ) {
            let wQ;
            try {
              wQ = await QQ()
            } catch (LQ) {
              return {
                stage: "fetch",
                error: LQ
              }
            }
            try {
              return FQ(wQ) ? null : {
                stage: "decode",
                error: null
              }
            } catch (LQ) {
              return {
                stage: "decode",
                error: LQ
              }
            }
          }((() => this.deps.fetch()), (FQ => {
            const wQ = QQ.ToQ(FQ);
            return wQ && this.resolveSet(FQ), wQ
          }));
        if (null !== wQ) {
          if ("fetch" === wQ.stage) {
            this.loading = null;
            const FQ = mQ[this.retries++];
            void 0 !== FQ && this.deps.later((() => {
              this.provide(QQ)
            }), FQ)
          }
          this.reported || (this.reported = !0, this.deps.onFailed(wQ, FQ))
        }
      }
    }
    let HQ = null;

    function bQ() {
      return HQ ??= new uQ({
        fetch: async () => kQ(await (0, LQ.T)(YQ(), {
          priority: "low"
        })),
        onFailed: (QQ, FQ) => {
          vQ("builtInAnimations", YQ(), QQ, FQ)
        },
        later: (QQ, FQ) => {
          setTimeout(QQ, FQ)
        }
      }), HQ
    }

    function YQ() {
      return wQ(42690)
    }
    var xQ = wQ(2809),
      AQ = wQ(35962),
      tQ = wQ(40201),
      eQ = wQ(1213),
      MQ = wQ(299),
      GQ = wQ(634),
      pQ = wQ(40222),
      cQ = wQ(40426),
      CQ = (wQ(40229), wQ(40380)),
      SQ = wQ(40385),
      iQ = wQ(40388),
      WQ = wQ(40226),
      RQ = wQ(40436),
      OQ = wQ(40443),
      sQ = wQ(40242),
      rQ = wQ(40325),
      IQ = wQ(40332),
      UQ = wQ(40430),
      NQ = wQ(41970),
      TQ = wQ(35943),
      KQ = wQ(3583);
    const zQ = "[bloxd-previews]",
      lQ = 4e5,
      jQ = 0,
      aQ = 1,
      XQ = 2,
      fQ = 1,
      VQ = 2,
      hQ = 3,
      JQ = 0,
      EQ = 1,
      nQ = 2;

    function gQ(QQ) {
      const FQ = QQ,
        wQ = (0, pQ.J)(QQ),
        LQ = (0, pQ.l)(QQ);
      return null !== wQ && null !== LQ && "function" === typeof FQ.IoQ && "function" === typeof FQ.UoQ && "function" === typeof FQ.NoQ ? FQ : null
    }

    function PQ(QQ, FQ, wQ) {
      let [LQ, qQ] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [QQ, FQ], oQ = Math.min(Number.isFinite(wQ) && wQ > 0 ? wQ : 1, 2);
      const DQ = Math.max(0, LQ, QQ) * Math.max(0, qQ, FQ) * oQ * oQ;
      return DQ > lQ && (oQ *= Math.sqrt(lQ / DQ)), [Math.max(1, Math.floor(Math.max(0, QQ) * oQ)), Math.max(1, Math.floor(Math.max(0, FQ) * oQ))]
    }

    function ZQ() {
      return wQ(42698)
    }
    async function yQ(QQ, FQ) {
      "lost" === QQ && (0, sQ.w)();
      const LQ = await (0, sQ.M)();
      if (null === LQ || (0, pQ.p)(LQ) || (0, sQ.c)()) return;
      const qQ = "webgpu" === LQ.backend;
      if (!qQ && "lost" !== QQ) return;
      const oQ = qQ ? (0, pQ.Q)(QQ) : null;
      if (null !== oQ) {
        const wQ = `WebGPU failed at home (${QQ}${void 0===FQ?"":`: ${FQ instanceof Error?FQ.message:(0,TQ.k)(FQ)}`}) and ${oQ}`;
        return console.warn(`${zQ} ${wQ}: the previews stop`, null !== FQ && void 0 !== FQ ? FQ : ""), void(0, sQ.q)(wQ)
      }
      qQ || (0, GQ.k)(), (0, sQ.p)();
      try {
        await async function(QQ, FQ, LQ) {
          var qQ;
          let {
            backend: oQ,
            adapter: kQ
          } = QQ;
          const vQ = (0, xQ.I)(),
            {
              flushCrashReports: mQ,
              reportRenderReload: uQ
            } = await Promise.resolve().then((() => wQ(40369)));
          uQ(oQ, "start_failed" === FQ ? 0 : 1, DQ(vQ ? (0, xQ.B)() : null), {
            cause: FQ,
            error: "lost" === FQ && null !== (qQ = (0, pQ.U)(vQ ? (0, pQ.J)((0, xQ.B)()) : null)) && void 0 !== qQ ? qQ : LQ,
            context: {
              adapter: kQ,
              boundAtMs: "start_failed" === FQ ? null : (0, sQ.J)(),
              indirectHangs: (0, sQ.z)()
            }
          }), await mQ(rQ.c)
        }(LQ, QQ, FQ)
      } catch (kQ) {
        console.warn(`${zQ} ${LQ.backend} failed at home (${QQ}), and its report couldn't be sent`, kQ)
      }(0, rQ.i)()
    }
    async function BQ() {
      if (!(0, xQ.I)()) {
        const QQ = await (0, sQ.M)();
        if (null === QQ || (0, pQ.p)(QQ)) return null;
        if (await (0, AQ.l)(await QQ.load(), tQ.e), !(0, xQ.I)()) return null
      }
      return gQ((0, xQ.B)())
    }
    class dQ {
      constructor(QQ, FQ, wQ, LQ, qQ, oQ) {
        this.page = QQ, this.host = FQ, this.id = wQ, this.canvas = LQ, this.size = qQ, this.models = void 0, this.images = void 0, this.write = void 0, this.outcomes = [], this.closed = !1, this.quiet = 0, this.settled = [];
        const DQ = {
            ...oQ.images,
            glbUrl: QQ => {
              var FQ;
              return null !== (FQ = this.models.drawnUrl(QQ)) && void 0 !== FQ ? FQ : oQ.images.glbUrl(QQ)
            }
          },
          kQ = FQ => QQ.modelFile(FQ);
        this.images = new cQ.c(DQ, (QQ => {
          console.warn(`${zQ} image ${QQ.key.kind}:${QQ.key.index}:${QQ.key.word} failed`, QQ.error)
        }), {
          fetchFile: kQ,
          fetchImage: FQ => QQ.imageFile(FQ)
        }), QQ.startModels(), this.models = new CQ.h(oQ.files, ((FQ, wQ) => QQ.buildModel(FQ, wQ)), (QQ => {
          console.warn(`${zQ} model file ${QQ.file} (${QQ.url}) failed`, QQ.error)
        }), {
          fetchFile: kQ,
          onWritten: (QQ, FQ) => {
            this.images.glbWritten(QQ, FQ)
          },
          onTaken: (QQ, FQ) => {
            this.images.glbTaken(QQ, FQ)
          }
        }), this.write = (QQ, FQ, wQ) => {
          if (this.closed) return !0;
          if (QQ === CQ.b) {
            const QQ = new DataView(wQ.buffer, wQ.byteOffset, iQ.b),
              LQ = QQ.getUint32(0, !0),
              qQ = QQ.getUint32(iQ.f, !0),
              oQ = this.page.hostCall(nQ, (() => this.host.aDQ(this.id, LQ, FQ, wQ.subarray(iQ.b))));
            return this.outcomes.push([qQ, oQ]), !0
          }
          return QQ === cQ.b && (this.page.hostCall(void 0, (() => {
            this.host.fDQ(this.id, wQ)
          })), !0)
        }
      }
      get isClosed() {
        return this.closed
      }
      get isStopped() {
        return this.page.isStopped
      }
      resize(QQ, FQ, wQ) {
        if (this.closed) return;
        const [LQ, qQ] = PQ(QQ, FQ, this.page.dpr(), wQ);
        LQ === this.size[0] && qQ === this.size[1] || (this.size = [LQ, qQ], this.page.hostCall(void 0, (() => {
          this.host.resize(this.id, LQ, qQ)
        })))
      }
      setMob(QQ, FQ, wQ, LQ) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.nDQ(this.id, QQ, FQ, wQ, LQ))))
      }
      setPet(QQ, FQ, wQ, LQ) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.ZDQ(this.id, QQ, FQ, wQ, LQ))))
      }
      setPlayer(QQ, FQ, wQ) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.hDQ(this.id, QQ, FQ, wQ))))
      }
      setFigure(QQ, FQ, wQ, LQ) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.JDQ(this.id, QQ, FQ, wQ, LQ))))
      }
      replay() {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.replay(this.id))))
      }
      get orbit() {
        if (this.closed) return null;
        const QQ = this.page.hostCall(null, (() => this.host.orbit(this.id)));
        return null === QQ || QQ.length < 3 ? null : {
          alpha: QQ[0],
          beta: QQ[1],
          radius: QQ[2]
        }
      }
      setOrbit(QQ) {
        let {
          alpha: FQ,
          beta: wQ,
          radius: LQ
        } = QQ;
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.PDQ(this.id, FQ, wQ, LQ)
        }))
      }
      untilSettled() {
        return this.closed || this.page.isStopped ? Promise.resolve() : (this.quiet = 0, new Promise((QQ => {
          this.settled.push(QQ)
        })))
      }
      packChanged() {
        this.quiet = 0, this.models.refresh(), (0, RQ.f)(this.images)
      }
      feed() {
        this.models.drain(this.write);
        for (const [QQ, FQ] of this.outcomes) {
          const wQ = FQ === JQ ? [] : [FQ === EQ ? QQ : (QQ | CQ.e) >>> 0];
          this.models.taken(QQ, wQ)
        }
        this.outcomes.length = 0, this.images.drain(this.write)
      }
      collect(QQ) {
        let FQ = !1;
        if (QQ) {
          const QQ = this.host.dDQ(this.id);
          for (const FQ of QQ) this.models.request(FQ);
          const wQ = this.host.BDQ(this.id);
          wQ.length > 0 && this.images.onEvent(wQ), FQ = QQ.length > 0 || wQ.length > 0
        }
        const wQ = this.page.modelsUnavailable ? 0 : this.models.asking + this.models.unanswered,
          LQ = FQ || wQ > 0 || this.images.waiting > 0 || this.images.inFlight > 0;
        this.quiet = LQ ? 0 : this.quiet + 1, this.quiet >= 3 && this.resolveSettled()
      }
      close() {
        this.closed || (this.closed = !0, this.page.closePreview(this), this.resolveSettled())
      }
      abandon() {
        this.resolveSettled()
      }
      dispose(QQ) {
        this.page.hostCall(void 0, (() => {
          const FQ = this.host.close(this.id);
          FQ.length > 0 && this.images.onEvent(FQ), this.page.isTrapped || QQ.NoQ(this.id)
        })), this.images.dispose(), this.canvas.remove()
      }
      resolveSettled() {
        const QQ = this.settled;
        this.settled = [];
        for (const FQ of QQ) FQ()
      }
    }
    class QF {
      constructor(QQ) {
        this.deps = QQ, this.module = null, this.host = null, this.opening = null, this.pageCanvas = null, this.samples = 1, this.binding = null, this.sessionEnds = 0, this.lastEndReturned = !0, this.previews = new Map, this.nextId = 1, this.frameId = null, this.stopped = !1, this.loggedErrors = new Set, this.modelsListener = {
          onUnavailable: QQ => {
            this.modelsFailed(QQ)
          },
          onDecoderFailed: QQ => {
            this.loggedErrors.has("modelDecoder") || (this.loggedErrors.add("modelDecoder"), console.warn(`${zQ} the Draco decoder didn't load: models waiting on it won't draw`, QQ))
          },
          onWorkerLost: QQ => {
            this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${zQ} a model worker was lost: ${QQ}`))
          },
          onModuleRetry: () => {}
        }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.JY = {
          setShaderPack: (QQ, FQ, wQ, LQ, qQ) => (this.shaderPackArgs = [QQ, FQ, wQ, LQ, qQ], this.handOverShaderPack(), !0)
        }, this.frame = QQ => {
          this.frameId = null;
          const FQ = this.host;
          if (null !== FQ && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped) try {
            this.drawFrame(FQ, QQ)
          } catch (wQ) {
            if (!this.stopIfTrapped(wQ) && (this.stop(), (0, pQ.t)(wQ))) return void this.deps.onRenderFailed("frames_refused", wQ);
            console.warn(`${zQ} the previews stopped: their frame threw`, wQ)
          }
        }, QQ.pack.onChange((() => {
          this.packChanged()
        })), QQ.game.onGameChange((() => {
          this.tellInGame()
        }))
      }
      packChanged() {
        if (!this.stopped)
          for (const QQ of this.previews.values()) QQ.packChanged()
      }
      dpr() {
        return this.deps.dpr()
      }
      get sessionBound() {
        var QQ, FQ;
        return null !== (QQ = null === (FQ = this.host) || void 0 === FQ ? void 0 : FQ.attached()) && void 0 !== QQ && QQ
      }
      get open() {
        return this.previews.size
      }
      get frameCostMs() {
        return 0 === this.costs.length ? 0 : this.costs.reduce(((QQ, FQ) => QQ + FQ), 0) / this.costs.length
      }
      async bindSession(QQ, FQ, wQ) {
        const LQ = this.binding,
          qQ = this.sessionEnds;
        try {
          const oQ = this.hostOf(QQ);
          if (!oQ.XDQ()) {
            const FQ = (0, IQ.f)().sampleCount,
              DQ = await wQ(FQ);
            if (this.sessionEnds !== qQ) return this.keepRendererOfEndedSession(QQ, oQ, DQ, FQ, LQ), FQ;
            if (!oQ.SDQ(DQ)) throw new Error("the page has a renderer already");
            (0, sQ.s)(performance.now()), this.samples = FQ, (0, UQ.c)((0, pQ.l)(QQ))
          }
          if (!oQ.attach(FQ)) throw new Error("the page's renderer is lent to another session");
          return this.samples
        } finally {
          this.binding === LQ && this.endBinding()
        }
      }
      keepRendererOfEndedSession(QQ, FQ, wQ, LQ, qQ) {
        if (!this.lastEndReturned || null !== this.binding && this.binding !== qQ) try {
          wQ.free()
        } catch (oQ) {
          console.warn(`${zQ} an ended session's renderer didn't free`, oQ)
        } else FQ.SDQ(wQ) && ((0, sQ.s)(performance.now()), this.samples = LQ, (0, UQ.c)(this.registryOf(QQ)))
      }
      async beginSession() {
        var QQ;
        let FQ = () => {};
        const wQ = new Promise((QQ => {
          FQ = QQ
        }));
        this.binding = {
          done: wQ,
          release: FQ
        }, await (null === (QQ = this.opening) || void 0 === QQ ? void 0 : QQ.catch((() => null)));
        const LQ = this.pageCanvas;
        return this.pageCanvas = null, LQ
      }
      endSession(QQ) {
        var FQ, wQ;
        if (this.sessionEnds++, this.lastEndReturned = QQ, this.endBinding(), QQ) {
          try {
            var LQ;
            null === (LQ = this.host) || void 0 === LQ || LQ.detach()
          } catch (qQ) {
            return void console.warn(`${zQ} the session's core kept the page's renderer`, qQ)
          }!0 === (null === (FQ = this.host) || void 0 === FQ ? void 0 : FQ.attached()) && console.warn(`${zQ} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (wQ = this.host) || void 0 === wQ ? void 0 : wQ.XDQ()) && (0, UQ.c)(this.registryOf(this.module))
        }
      }
      endBinding() {
        var QQ;
        null === (QQ = this.binding) || void 0 === QQ || QQ.release(), this.binding = null
      }
      async openPreview(QQ, FQ, wQ, LQ) {
        const qQ = await this.renderingHost(),
          oQ = this.module;
        if (null === qQ || null === oQ) throw new Error("this page can't draw previews: it has no renderer build");
        if (this.animations ??= this.loadAnimations(qQ), this.deps.pack.wanted(), this.isStopped) throw new Error("the previews stopped");
        this.guarded((() => {
          this.deps.provideBuiltInAnimationPack(oQ)
        }));
        const DQ = this.nextId++,
          kQ = this.deps.createCanvas(),
          [vQ, mQ] = PQ(FQ, wQ, this.deps.dpr(), LQ);
        kQ.width = vQ, kQ.height = mQ;
        if (!this.guarded((() => (oQ.UoQ(DQ, kQ), qQ.open(DQ, vQ, mQ, QQ))))) throw this.hostCall(void 0, (() => {
          oQ.NoQ(DQ)
        })), new Error("the page's renderer is lent to a session that is running");
        this.restartModelsIfFailed();
        const uQ = new dQ(this, qQ, DQ, kQ, [vQ, mQ], this.deps);
        return this.previews.set(DQ, uQ), this.startFrames(), uQ
      }
      prefetch() {
        if (this.prefetched || this.isStopped || (0, sQ.c)() || null !== (0, sQ.G)()) return;
        this.prefetched = !0;
        (null === this.module ? this.loadModule() : Promise.resolve(this.module)).then((QQ => {
          null === QQ || this.isStopped || (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles())
        }), (() => {}))
      }
      modelFile(QQ) {
        return this.prefetchedOr(QQ, this.deps.fetchModel)
      }
      imageFile(QQ) {
        return this.prefetchedOr(QQ, LQ.T)
      }
      prefetchedOr(QQ, FQ) {
        const wQ = this.prefetchedFiles.get(QQ);
        return void 0 === wQ ? FQ(QQ) : wQ.catch((() => FQ(QQ)))
      }
      async prefetchPlayerFiles() {
        const QQ = this.deps.playerFile().then((QQ => this.deps.files.url(QQ))),
          FQ = await Promise.all([QQ, this.deps.images.lifeformAtlasUrl(RQ.c)]).catch((() => null));
        if (null === FQ) return;
        const [wQ, LQ] = FQ, qQ = (QQ, FQ) => {
          if (null === QQ) return;
          const wQ = FQ(QQ);
          this.prefetchedFiles.set(QQ, wQ), wQ.catch((() => {
            this.prefetchedFiles.delete(QQ)
          }))
        };
        qQ(wQ, (QQ => this.modelFile(QQ))), qQ(LQ, (QQ => this.imageFile(QQ)))
      }
      loadModule() {
        return this.moduleLoad ??= this.deps.loadModule().then((QQ => (null === QQ && (this.moduleLoad = null), QQ)), (QQ => {
          throw this.moduleLoad = null, QQ
        })), this.moduleLoad
      }
      fetchAnimationTable() {
        return this.animationTable ??= this.deps.fetchAnimations().catch((QQ => {
          throw this.animationTable = null, QQ
        })), this.animationTable
      }
      get modelsUnavailable() {
        return this.unavailable
      }
      startModels() {
        this.models ??= this.deps.startModels(this.modelsListener).catch((QQ => (this.modelsFailed(QQ), () => new Promise((() => {})))))
      }
      buildModel(QQ, FQ) {
        return this.startModels(), this.models.then((wQ => wQ(QQ, FQ))).then((QQ => this.unavailable ? new Promise((() => {})) : QQ))
      }
      restartModelsIfFailed() {
        this.unavailable && !this.modelsRestarted && 0 === this.previews.size && (this.modelsRestarted = !0, this.models = null, this.unavailable = !1, this.startModels())
      }
      modelsFailed(QQ) {
        this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${zQ} the model workers didn't start: models won't draw in the previews`, QQ))
      }
      called(QQ) {
        return 0 !== QQ && this.logError(QQ, 0), QQ
      }
      closePreview(QQ) {
        this.previews.delete(QQ.id), null !== this.module && QQ.dispose(this.module), 0 === this.previews.size && null !== this.frameId && (this.deps.cancelFrame(this.frameId), this.frameId = null)
      }
      hostOf(QQ) {
        if (null !== this.module && this.module !== QQ) throw new Error("a second renderer module on one page");
        return this.module = QQ, null === this.host && (this.host = this.guarded((() => new QQ.IoQ)), this.tellInGame(), this.handOverShaderPack()), this.host
      }
      tellInGame() {
        const {
          host: QQ
        } = this;
        null !== QQ && this.outsideCall("the game's start or end", (() => {
          QQ.EDQ(this.deps.game.inGame())
        }))
      }
      handOverShaderPack() {
        const {
          host: QQ,
          shaderPackArgs: FQ
        } = this;
        null !== QQ && null !== FQ && this.outsideCall("the shader pack's hand-over", (() => {
          QQ.rLQ(...FQ) || console.warn(`${zQ} the host refused the shader pack: previews draw without it at home`)
        }))
      }
      outsideCall(QQ, FQ) {
        try {
          this.hostCall(void 0, FQ)
        } catch (wQ) {
          this.stop(), console.warn(`${zQ} the previews stopped: ${QQ} threw`, wQ)
        }
      }
      async loadAnimations(QQ) {
        const FQ = DQ(null),
          wQ = this.module;
        try {
          FQ.wasm = null === wQ ? FQ.wasm : this.hostCall(FQ.wasm, (() => wQ.AH()))
        } catch {}
        let LQ, qQ;
        try {
          LQ = await this.fetchAnimationTable()
        } catch (oQ) {
          return void this.deps.onAnimationsFailed({
            stage: "fetch",
            error: oQ
          }, FQ)
        }
        if (!this.settleIfTrapped()) {
          try {
            qQ = QQ.VDQ(LQ)
          } catch (oQ) {
            if (this.stopIfTrapped(oQ)) return;
            return void this.deps.onAnimationsFailed({
              stage: "decode",
              error: oQ
            }, FQ)
          }
          qQ || this.deps.onAnimationsFailed({
            stage: "decode",
            error: null
          }, FQ)
        }
      }
      async renderingHost() {
        if (null !== this.binding && await this.binding.done, this.settleIfTrapped()) return null;
        const QQ = this.host;
        return null !== QQ && this.guarded((() => QQ.XDQ())) ? QQ : (this.opening ??= this.openAtHome().finally((() => {
          this.opening = null
        })), this.opening)
      }
      async openAtHome() {
        var QQ;
        const FQ = null !== (QQ = this.module) && void 0 !== QQ ? QQ : await this.loadModule();
        if (null === FQ) return null;
        const wQ = this.hostOf(FQ),
          LQ = () => this.guarded((() => wQ.XDQ()));
        if (LQ()) return wQ;
        if (null !== (0, sQ.G)() || (0, sQ.c)()) return null;
        const qQ = this.deps.createCanvas();
        qQ.width = 1, qQ.height = 1;
        const oQ = await this.deps.openExtras();
        if (this.settleIfTrapped()) return null;
        const DQ = (0, IQ.f)().sampleCount;
        let kQ;
        try {
          kQ = await (0, pQ.w)(FQ, "previewRenderer", qQ, DQ, NQ.e, oQ)
        } catch (vQ) {
          throw vQ instanceof WQ.b ? this.stopForTrap(vQ) : (0, pQ.v)(vQ) && await this.deps.onRenderFailed("start_failed", vQ), vQ
        }
        return this.guarded((() => wQ.SDQ(kQ))) ? ((0, sQ.s)(performance.now()), this.samples = DQ, this.pageCanvas = qQ, (0, UQ.c)(this.registryOf(FQ)), wQ) : LQ() ? wQ : null
      }
      startFrames() {
        null !== this.frameId || this.isStopped || (this.frameId = this.deps.requestFrame(this.frame))
      }
      drawFrame(QQ, FQ) {
        for (const DQ of this.previews.values()) DQ.feed();
        if (this.stopped) return;
        const wQ = this.deps.now(),
          LQ = QQ.frame(FQ);
        this.costs.push(this.deps.now() - wQ), this.costs.length > 120 && this.costs.shift();
        const qQ = 0 !== (256 & LQ),
          oQ = 255 & LQ;
        for (const DQ of this.previews.values()) {
          if (this.stopped) return;
          DQ.collect(qQ)
        }
        if (!this.stopped) {
          if (qQ) {
            const FQ = QQ.yDQ();
            for (let QQ = 0; QQ + 1 < FQ.length; QQ += 2) this.logError(FQ[QQ], FQ[QQ + 1])
          }
          if (oQ === fQ) return this.stop(), void this.deps.onRenderFailed("lost");
          if (oQ === VQ) return this.stop(), void this.deps.onFatal(QQ.lDQ(), QQ.jDQ());
          if (oQ === hQ) return this.stop(), void console.warn(`${zQ} the previews stopped: the page's renderer went with its session`);
          (0, MQ.b)(FQ), this.startFrames()
        }
      }
      get isStopped() {
        return this.stopped || this.isTrapped
      }
      get isTrapped() {
        return null !== this.module && ((0, WQ.g)(this.module) || "failed" === (0, xQ.z)())
      }
      hostCall(QQ, FQ) {
        if (this.settleIfTrapped()) return QQ;
        try {
          return FQ()
        } catch (wQ) {
          if (this.stopIfTrapped(wQ)) return QQ;
          throw wQ
        }
      }
      guarded(QQ) {
        if (this.settleIfTrapped()) throw new Error("the previews stopped: their module trapped");
        try {
          return QQ()
        } catch (FQ) {
          throw this.stopIfTrapped(FQ), FQ
        }
      }
      registryOf(QQ) {
        return {
          bLQ: (FQ, wQ) => {
            this.hostCall(void 0, (() => {
              QQ.bLQ(FQ, wQ)
            }))
          },
          YLQ: FQ => {
            this.hostCall(void 0, (() => {
              QQ.YLQ(FQ)
            }))
          }
        }
      }
      settleIfTrapped() {
        return !!this.isTrapped && (this.stopped || (this.stop(), (0, UQ.c)(null)), !0)
      }
      stopIfTrapped(QQ) {
        return !(null === this.module || !(0, WQ.j)(this.module, QQ)) && (this.stopForTrap(QQ), !0)
      }
      stopForTrap(QQ) {
        this.stop(), (0, UQ.c)(null), (0, KQ.g)("previews", QQ)
      }
      stop() {
        this.stopped = !0;
        for (const QQ of this.previews.values()) QQ.abandon()
      }
      logError(QQ, FQ) {
        const wQ = `${QQ}:${FQ}`;
        this.loggedErrors.has(wQ) || (this.loggedErrors.add(wQ), console.warn(`${zQ} error ${QQ} (detail ${FQ})`))
      }
    }
    let FF = null;

    function wF() {
      return FF ??= new QF(function() {
        const QQ = (0, SQ.r)(eQ.clientSideServerUrls.staticUrl, {
          packUrl: QQ => {
            var FQ, wQ;
            return null !== (FQ = null === (wQ = RQ.e.current) || void 0 === wQ ? void 0 : wQ.modelUrl(QQ)) && void 0 !== FQ ? FQ : null
          }
        });
        return {
          loadModule: BQ,
          startModels: async QQ => {
            const {
              pageModelPool: FQ
            } = await wQ.e(42).then((() => wQ(42779))), {
              pool: LQ
            } = FQ(QQ);
            return (QQ, FQ) => LQ.build(QQ, FQ)
          },
          fetchAnimations: async () => kQ(await (0, LQ.T)(ZQ())),
          playerFile: async () => (await (0, SQ.o)()).PLAYER_FILE,
          onAnimationsFailed: (QQ, FQ) => {
            vQ("previewAnimations", ZQ(), QQ, FQ)
          },
          provideBuiltInAnimationPack: QQ => {
            bQ().provide(QQ)
          },
          openExtras: sQ.A,
          files: QQ,
          images: (0, RQ.h)((0, cQ.o)(QQ.url), (() => RQ.e.current)),
          pack: RQ.e,
          game: OQ.d,
          fetchModel: QQ => (0, SQ.j)(QQ),
          createCanvas: () => document.createElement("canvas"),
          dpr: () => window.devicePixelRatio,
          now: () => performance.now(),
          requestFrame: QQ => requestAnimationFrame(QQ),
          cancelFrame: QQ => {
            cancelAnimationFrame(QQ)
          },
          onRenderFailed: yQ,
          onFatal: (QQ, FQ) => {
            console.error(`${zQ} the previews stopped: renderer error ${QQ} (detail ${FQ})`)
          }
        }
      }()), FF
    }
    var LF = wQ(609),
      qF = wQ(38164),
      oF = wQ(3149);
    const DF = {
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
    const kF = "[bloxd-previews]",
      vF = new Uint32Array(5);

    function mF(QQ) {
      return LF.l.indexOf(QQ)
    }
    const uF = new WeakSet;

    function HF(QQ) {
      const FQ = (0, qF.f)(QQ),
        wQ = null === FQ ? -1 : bF(FQ);
      return -1 !== wQ ? wQ : (uF.has(QQ) || (uF.add(QQ), console.warn(`${kF} an animation the previews' table lacks: the mob idles instead`)), -1)
    }

    function bF(QQ) {
      var FQ;
      return null !== (FQ = DF[QQ]) && void 0 !== FQ ? FQ : -1
    }

    function YF(QQ, FQ) {
      const {
        canvas: wQ
      } = FQ;
      wQ.style.width = "100%", wQ.style.height = "100%", wQ.style.display = "block", QQ.appendChild(wQ)
    }

    function xF(QQ) {
      const FQ = QQ.getBoundingClientRect();
      return [FQ.width, FQ.height]
    }
    class AF {
      constructor(QQ, FQ) {
        this.preview = QQ, this.showView = FQ
      }
      show(QQ) {
        this.showView(this.preview, QQ)
      }
      resize(QQ, FQ) {
        this.preview.resize(QQ, FQ)
      }
      close() {
        this.preview.close()
      }
    }
    class tF {
      constructor(QQ) {
        this.preview = QQ, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.detachControls = void 0, this.detachControls = function(QQ) {
          const {
            canvas: FQ
          } = QQ;
          let wQ = null;
          const LQ = QQ => {
              var LQ;
              wQ = {
                pointer: QQ.pointerId,
                x: QQ.clientX,
                y: QQ.clientY
              }, null === (LQ = FQ.setPointerCapture) || void 0 === LQ || LQ.call(FQ, QQ.pointerId)
            },
            qQ = FQ => {
              var LQ;
              const qQ = QQ.orbit;
              if ((null === (LQ = wQ) || void 0 === LQ ? void 0 : LQ.pointer) !== FQ.pointerId || null === qQ) return;
              const oQ = FQ.clientX - wQ.x,
                DQ = FQ.clientY - wQ.y;
              wQ = {
                ...wQ,
                x: FQ.clientX,
                y: FQ.clientY
              }, QQ.setOrbit({
                alpha: qQ.alpha - .01 * oQ,
                beta: Math.min(Math.PI - .01, Math.max(.01, qQ.beta - .01 * DQ)),
                radius: qQ.radius
              })
            },
            oQ = QQ => {
              var FQ;
              (null === (FQ = wQ) || void 0 === FQ ? void 0 : FQ.pointer) === QQ.pointerId && (wQ = null)
            },
            DQ = FQ => {
              const wQ = QQ.orbit;
              if (null === wQ) return;
              FQ.preventDefault();
              const LQ = FQ.deltaY * (FQ.deltaMode === WheelEvent.DOM_DELTA_LINE ? 40 : FQ.deltaMode === WheelEvent.DOM_DELTA_PAGE ? 800 : 1),
                qQ = Math.min(100, Math.max(5, wQ.radius + .08 * LQ));
              QQ.setOrbit({
                ...wQ,
                radius: qQ
              })
            };
          return FQ.style.touchAction = "none", FQ.addEventListener("pointerdown", LQ), FQ.addEventListener("pointermove", qQ), FQ.addEventListener("pointerup", oQ), FQ.addEventListener("pointercancel", oQ), FQ.addEventListener("wheel", DQ, {
            passive: !1
          }), () => {
            FQ.removeEventListener("pointerdown", LQ), FQ.removeEventListener("pointermove", qQ), FQ.removeEventListener("pointerup", oQ), FQ.removeEventListener("pointercancel", oQ), FQ.removeEventListener("wheel", DQ)
          }
        }(QQ), this.dev = {
          canvas: () => QQ.canvas,
          isolateHead: () => {
            console.warn(`${kF} isolateHead: noa's character preview only`)
          }
        }, this.apply(), this.ready = QQ.untilSettled().then((() => {
          if (QQ.isStopped) throw new Error(`${kF} the previews stopped before the character drew`);
          this.built = !0
        }))
      }
      isReady() {
        return this.built && !this.preview.isClosed
      }
      setCosmetic(QQ, FQ) {
        this.cosmetics[QQ] = FQ, this.apply()
      }
      playEmote(QQ) {
        null === QQ || QQ !== this.emote ? (this.emote = QQ, this.apply()) : this.preview.replay()
      }
      untilDrawn(QQ) {
        return this.preview.untilSettled()
      }
      setOrbit(QQ) {
        let {
          yaw: FQ,
          pitch: wQ,
          radius: LQ
        } = QQ;
        const qQ = this.preview.orbit;
        null !== qQ && this.preview.setOrbit({
          alpha: FQ,
          beta: wQ,
          radius: null !== LQ && void 0 !== LQ ? LQ : qQ.radius
        })
      }
      resetCamera() {}
      resize(QQ, FQ) {
        this.preview.resize(QQ, FQ)
      }
      close() {
        this.detachControls(), this.preview.close()
      }
      apply() {
        var QQ;
        this.preview.setPlayer(JSON.stringify(this.cosmetics), vF, null === (QQ = this.emote) ? -1 : bF(QQ))
      }
    }

    function eF(QQ, FQ) {
      let {
        mobType: wQ,
        variation: LQ,
        animation: qQ
      } = FQ;
      QQ.setMob(mF(wQ), null !== LQ && void 0 !== LQ ? LQ : "", 1, HF(qQ))
    }

    function MF(QQ, FQ) {
      let {
        mobType: wQ,
        variation: LQ,
        metaInfo: qQ,
        tamed: oQ
      } = FQ;
      QQ.setPet(mF(wQ), LQ, qQ, oQ)
    }
    const GF = {
      aimed: .533 / 1.15 * 1.1,
      ready: .16 / .85 * 1.1
    };
    class pF {
      constructor(QQ, FQ, wQ, LQ) {
        this.preview = null, this.closed = !1, this.figure = null, this.shown = !1, this.order = "", this.span = {
          left: 0,
          width: 0
        }, this.lineup = [0, 0], this.given = null, this.loaded = !1, QQ(wQ.width, LQ[1], LQ).then((QQ => {
          if (this.closed) return void QQ.close();
          const {
            style: wQ
          } = QQ.canvas;
          wQ.position = "absolute", wQ.top = "0", wQ.visibility = "hidden", YF(FQ, QQ), this.preview = QQ, this.apply()
        })).catch((QQ => {
          console.error(`${kF} couldn't open a lineup figure`, QQ)
        }))
      }
      update(QQ, FQ, wQ, LQ, qQ) {
        this.figure = QQ, this.shown = FQ, this.order = wQ, this.span = LQ, this.lineup = qQ, this.apply()
      }
      close() {
        var QQ;
        this.closed = !0, null === (QQ = this.preview) || void 0 === QQ || QQ.close(), this.preview = null
      }
      apply() {
        const {
          preview: QQ,
          figure: FQ,
          lineup: wQ
        } = this;
        if (null === QQ || null === FQ) return;
        if (this.given !== FQ) {
          var LQ;
          this.given = FQ, this.loaded = !1;
          const wQ = null === FQ.nC ? 0 : null !== (LQ = (0, oF.c)(FQ.nC)) && void 0 !== LQ ? LQ : 0;
          QQ.setFigure(function(QQ) {
            return JSON.stringify(Object.fromEntries(QQ.cosmetics))
          }(FQ), wQ, HF(FQ.animation), FQ.size), QQ.untilSettled().then((() => {
            this.given === FQ && (this.loaded = !0, this.apply())
          }))
        }
        const {
          left: qQ,
          width: oQ
        } = this.span;
        QQ.resize(oQ, wQ[1], wQ);
        const {
          style: DQ
        } = QQ.canvas;
        DQ.left = `${qQ}px`, DQ.width = `${oQ}px`, DQ.zIndex = this.order, DQ.visibility = this.shown && this.loaded ? "visible" : "hidden"
      }
    }
    class cF {
      constructor(QQ, FQ) {
        this.open = FQ, this.layer = void 0, this.figures = [], this.view = {
          figures: [],
          shown: []
        }, this.size = void 0, this.size = xF(QQ), this.layer = document.createElement("div");
        const {
          style: wQ
        } = this.layer;
        wQ.position = "relative", wQ.isolation = "isolate", wQ.overflow = "hidden", wQ.width = "100%", wQ.height = "100%", wQ.pointerEvents = "none", QQ.appendChild(this.layer)
      }
      show(QQ) {
        this.view = QQ, this.place()
      }
      resize(QQ, FQ) {
        this.size = [QQ, FQ], this.place()
      }
      close() {
        for (const QQ of this.figures) QQ.close();
        this.figures = [], this.layer.remove()
      }
      place() {
        const {
          figures: QQ,
          shown: FQ
        } = this.view;
        for (const LQ of this.figures.splice(QQ.length)) LQ.close();
        const {
          size: wQ
        } = this;
        QQ.forEach(((LQ, qQ) => {
          var oQ;
          const DQ = function(QQ, FQ, wQ, LQ) {
            let [qQ, oQ] = LQ;
            const DQ = (QQ + .5) * qQ / FQ,
              kQ = Math.min(Math.max(qQ / FQ, 2 * wQ * oQ), 2 * Math.max(DQ, qQ - DQ));
            return {
              left: DQ - kQ / 2,
              width: kQ
            }
          }(qQ, QQ.length, function(QQ) {
            let {
              animation: FQ,
              size: wQ
            } = QQ;
            const {
              aimed: LQ,
              ready: qQ
            } = GF;
            return (HF(FQ) === DF.gunAimed ? LQ : qQ) * wQ
          }(LQ), wQ);
          this.figures[qQ] ??= new pF(this.open, this.layer, DQ, wQ), this.figures[qQ].update(LQ, null !== (oQ = FQ[qQ]) && void 0 !== oQ && oQ, function(QQ, FQ) {
            return String(Math.round(1e3 * QQ) + FQ)
          }(LQ.size, qQ), DQ, wQ)
        }))
      }
    }
    const CF = {
      player: aQ,
      store: XQ
    };
    class SF {
      constructor(QQ) {
        this.page = QQ
      }
      async openMob(QQ) {
        return new AF(await this.open(QQ, jQ), eF)
      }
      async openPet(QQ) {
        return new AF(await this.open(QQ, jQ), MF)
      }
      openMobLineup(QQ) {
        return new cF(QQ, ((QQ, FQ, wQ) => this.page.openPreview(jQ, QQ, FQ, wQ)))
      }
      async openCharacter(QQ, FQ) {
        return new tF(await this.open(QQ, CF[FQ]))
      }
      async open(QQ, FQ) {
        const [wQ, LQ] = xF(QQ), qQ = await this.page.openPreview(FQ, wQ, LQ);
        return YF(QQ, qQ), qQ
      }
    }
  },
  36378: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      D: () => AQ,
      H: () => eQ,
      e: () => LQ,
      g: () => qQ,
      i: () => bQ,
      l: () => tQ,
      o: () => uQ,
      p: () => MQ,
      s: () => vQ,
      v: () => mQ,
      y: () => YQ,
      z: () => xQ
    });
    const LQ = [{
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

    function qQ(QQ, FQ) {
      const {
        numLines: wQ,
        charsPerLine: qQ
      } = LQ[FQ];
      return GQ(QQ, wQ, qQ, !1)
    }
    const oQ = 7 / 8,
      DQ = .25,
      kQ = 8;

    function vQ(QQ, FQ) {
      return {
        width: Math.min(QQ, kQ) - 2 * DQ,
        height: Math.min(FQ, kQ) - 2 * DQ
      }
    }

    function mQ(QQ, FQ, wQ) {
      const qQ = vQ(QQ, FQ),
        {
          numLines: DQ,
          charsPerLine: kQ
        } = LQ[wQ];
      return {
        numLines: Math.max(1, Math.floor(DQ / oQ * qQ.height)),
        charsPerLine: Math.max(1, Math.floor(kQ * qQ.width))
      }
    }

    function uQ(QQ, FQ, wQ, LQ) {
      const {
        numLines: qQ,
        charsPerLine: oQ
      } = mQ(wQ, LQ, FQ);
      return GQ(QQ, qQ, oQ, !1)
    }
    const HQ = 32e3;

    function bQ(QQ) {
      return QQ.slice(0, HQ)
    }
    const YQ = 512e3,
      xQ = 64,
      AQ = YQ;

    function tQ(QQ, FQ) {
      const wQ = Math.max(0, AQ - FQ),
        LQ = Math.min(YQ, wQ);
      return QQ.slice(0, LQ)
    }
    const eQ = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      Tm: {
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

    function MQ(QQ, FQ) {
      const {
        numLines: wQ,
        charsPerLine: LQ
      } = eQ[FQ];
      return GQ(QQ, wQ, LQ, !1)
    }

    function GQ(QQ, FQ, wQ, LQ, qQ) {
      (qQ || LQ) && (QQ = QQ.slice(0, null !== qQ && void 0 !== qQ ? qQ : FQ * wQ));
      const oQ = QQ.split("\n");
      if (oQ.length > FQ && oQ.splice(FQ, oQ.length - FQ), !LQ)
        for (let DQ = 0; DQ < oQ.length; DQ++) {
          const QQ = oQ[DQ];
          QQ.length > wQ && (oQ[DQ] = QQ.substring(0, wQ), oQ.length < FQ && oQ.splice(DQ + 1, 0, QQ.substring(wQ)))
        }
      return oQ.join("\n")
    }
  },
  42690: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/builtInAnimations.anim.38e056f49512e10b7206.gz"
  },
  42698: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/previewAnimations.dat.24d2343c38c8f9b3fb85.gz"
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);