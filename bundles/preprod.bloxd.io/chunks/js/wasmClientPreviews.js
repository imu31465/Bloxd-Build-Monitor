export const id = 62;
export const ids = [62];
export const modules = {
  38918: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => qQ,
      f: () => TQ
    });
    const wQ = new WeakMap;

    function qQ(QQ, WQ) {
      return wQ.set(QQ, WQ), QQ
    }

    function TQ(QQ) {
      var WQ;
      return null !== (WQ = wQ.get(QQ)) && void 0 !== WQ ? WQ : null
    }
  },
  38936: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => sQ
    });
    var wQ = XQ(1257);

    function qQ(QQ) {
      const WQ = /(\d*\.?\d+)px/.exec(QQ);
      return WQ ? Number(WQ[1]) : null
    }

    function TQ(QQ) {
      return QQ.split(/[\s,]+/).pop()
    }
    let zQ = !1;
    const sQ = {
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
      drawText: function(QQ, WQ, wQ, sQ, FQ, PQ) {
        if (FQ <= 0 || PQ <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: gQ,
          fontVariant: JQ,
          fontWeight: rQ,
          fontSize: IQ,
          font: jQ
        } = this, BQ = [gQ, JQ, rQ, `${IQ}px`, jQ].filter(Boolean).join(" "), yQ = [
          [rQ, `${IQ}px`, TQ(jQ)].filter(Boolean).join(" "), `${IQ}px sans-serif`
        ], VQ = QQ.font, DQ = function(QQ, WQ, XQ) {
          for (const wQ of WQ) {
            QQ.font = wQ;
            const WQ = qQ(QQ.font),
              zQ = TQ(wQ);
            if (null !== WQ && Math.abs(WQ - XQ) <= .5 && QQ.font.toLowerCase().includes(zQ.toLowerCase())) return wQ
          }
          return null
        }(QQ, [BQ, ...yQ], IQ);
        DQ !== BQ && function(QQ, WQ, wQ) {
          zQ || (zQ = !0, Promise.resolve().then((() => XQ(1109))).then((XQ => {
            let {
              jB: qQ
            } = XQ;
            qQ(new Error("A canvas didn't take canvasTxt's font"), {
              font: QQ,
              HI: WQ,
              drawnWith: null !== wQ && void 0 !== wQ ? wQ : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(BQ, VQ, DQ);
        const pQ = qQ(QQ.font);
        if (null === DQ && null !== pQ && pQ > 0) {
          const XQ = IQ / pQ;
          QQ.save();
          try {
            return QQ.scale(XQ, XQ), {
              height: this.drawLines(QQ, WQ, wQ / XQ, sQ / XQ, FQ / XQ, PQ / XQ, pQ).height * XQ
            }
          } finally {
            QQ.restore()
          }
        }
        return this.drawLines(QQ, WQ, wQ, sQ, FQ, PQ, IQ)
      },
      drawLines: function(QQ, WQ, XQ, qQ, TQ, zQ, sQ) {
        const FQ = XQ + TQ,
          PQ = qQ + zQ;
        let gQ, JQ = qQ + zQ / 2 + sQ / 2;
        "right" === this.align ? (gQ = FQ, QQ.textAlign = "right") : "left" === this.align ? (gQ = XQ, QQ.textAlign = "left") : (gQ = XQ + TQ / 2, QQ.textAlign = "center");
        for (const wQ of WQ) {
          QQ.measureText(wQ).width >= TQ && (WQ = WQ.replace(wQ, ""))
        }
        WQ = (0, wQ.P)(WQ);
        const rQ = [],
          IQ = WQ.split("\n"),
          jQ = this.justify ? QQ.measureText("\u200a").width : 0;
        IQ.forEach((WQ => {
          let XQ = QQ.measureText(WQ).width;
          if (XQ <= TQ) rQ.push(WQ);
          else {
            let wQ = WQ;
            const qQ = TQ;
            let zQ, sQ, FQ;
            for (XQ = QQ.measureText(wQ).width; XQ > qQ;) {
              for (zQ = 0, sQ = 0, FQ = ""; sQ < qQ;) zQ++, FQ = wQ.substr(0, zQ), sQ = QQ.measureText(FQ).width;
              zQ--, FQ = FQ.substr(0, zQ);
              const WQ = zQ;
              if (" " !== wQ.substr(zQ, 1)) {
                for (;
                  " " !== wQ.substr(zQ, 1) && 0 !== zQ;) zQ--;
                0 === zQ && (zQ = WQ), FQ = wQ.substr(0, zQ)
              }
              FQ = this.justify ? this.justifyLine(QQ, FQ, jQ, "\u200a", TQ) : FQ, wQ = wQ.substr(zQ), XQ = QQ.measureText(wQ).width, rQ.push(FQ)
            }
            XQ > 0 && rQ.push(wQ)
          }
        }));
        const BQ = this.lineHeight ? this.lineHeight : this.getTextHeight(QQ, WQ),
          yQ = BQ * (rQ.length - 1),
          VQ = yQ / 2;
        let DQ = qQ;
        "top" === this.vAlign ? JQ = qQ + sQ : "bottom" === this.vAlign ? (JQ = PQ - yQ, DQ = PQ) : (DQ = qQ + zQ / 2, JQ -= VQ), rQ.forEach((WQ => {
          WQ = WQ.trim(), QQ.fillText(WQ, gQ, JQ), JQ += BQ
        })), this.debug && (QQ.lineWidth = 3, QQ.strokeStyle = "#00909e", QQ.strokeRect(XQ, qQ, TQ, zQ), QQ.lineWidth = 2, QQ.strokeStyle = "#f6d743", QQ.beginPath(), QQ.moveTo(gQ, qQ), QQ.lineTo(gQ, PQ), QQ.stroke(), QQ.strokeStyle = "#ff6363", QQ.beginPath(), QQ.moveTo(XQ, DQ), QQ.lineTo(FQ, DQ), QQ.stroke());
        return {
          height: yQ + BQ
        }
      },
      getTextHeight: function(QQ, WQ) {
        const XQ = QQ.textBaseline;
        QQ.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: wQ
        } = QQ.measureText(WQ);
        return QQ.textBaseline = XQ, wQ
      },
      justifyLine: function(QQ, WQ, XQ, wQ, qQ) {
        const TQ = WQ.trim(),
          zQ = QQ.measureText(TQ).width,
          sQ = TQ.split(/\s+/).length - 1,
          FQ = Math.floor((qQ - zQ) / XQ);
        if (sQ <= 0 || FQ <= 0) return TQ;
        const PQ = Math.floor(FQ / sQ);
        let gQ = FQ - sQ * PQ,
          JQ = [];
        for (let rQ = 0; rQ < PQ; rQ++) JQ.push(wQ);
        JQ = JQ.join("");
        return TQ.replace(/\s+/g, (QQ => {
          const WQ = gQ > 0 ? JQ + wQ : JQ;
          return gQ--, QQ + WQ
        }))
      }
    }
  },
  38942: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => BQ,
      d: () => jQ,
      e: () => rQ,
      i: () => gQ,
      l: () => JQ
    });
    var wQ = XQ(4534),
      qQ = XQ(402);
    const TQ = 1024,
      zQ = 1536,
      sQ = 2 * wQ.i + 1,
      FQ = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      PQ = 1.5;

    function gQ(QQ, WQ, XQ) {
      if ("string" !== typeof QQ) return WQ;
      try {
        const XQ = JSON.parse(QQ);
        return XQ && "object" === typeof XQ ? XQ : WQ
      } catch (wQ) {
        return void 0 !== XQ && console.error(`Couldn't parse ${XQ}`, wQ), WQ
      }
    }

    function JQ(QQ) {
      return gQ(QQ, null, "a leaderboard's rows")
    }

    function rQ(QQ, WQ) {
      var XQ, wQ;
      return null !== WQ && void 0 !== WQ ? WQ : {
        status: null !== (XQ = QQ.status) && void 0 !== XQ ? XQ : "loading",
        entries: null !== (wQ = QQ.entries) && void 0 !== wQ ? wQ : []
      }
    }

    function IQ(QQ, WQ) {
      return "number" === typeof QQ && Number.isFinite(QQ) && QQ > 0 ? QQ : WQ
    }

    function jQ(QQ, WQ) {
      const XQ = IQ(QQ.size, 1);
      let wQ = IQ(QQ.width, IQ(2.5 * XQ, 2.5)),
        qQ = IQ(QQ.height, IQ(3.75 * XQ, 3.75));
      Number.isFinite(TQ * qQ / wQ) && Number.isFinite(zQ * wQ / qQ) || (wQ = 2.5, qQ = 3.75);
      const sQ = qQ / wQ,
        FQ = Math.max(1, Math.min(TQ, WQ / sQ));
      return {
        width: wQ,
        height: qQ,
        layoutWidth: Math.max(TQ, zQ / sQ),
        layoutHeight: Math.max(zQ, TQ * sQ),
        pixelWidth: Math.round(FQ),
        pixelHeight: Math.round(Math.max(1, Math.min(WQ, FQ * sQ)))
      }
    }

    function BQ(QQ, WQ, XQ, zQ, gQ, JQ) {
      QQ.setTransform(1, 0, 0, 1, 0, 0), QQ.fillStyle = qQ.N.defaultNameTagBackground, QQ.fillRect(0, 0, WQ, XQ), QQ.scale(WQ / zQ.layoutWidth, XQ / zQ.layoutHeight), QQ.translate((zQ.layoutWidth - TQ) / 2, 0),
        function(QQ, WQ, XQ, TQ) {
          var zQ, gQ, JQ, rQ;
          const {
            top: IQ,
            around: jQ,
            showPlayerText: BQ,
            localPlayerDbId: DQ
          } = XQ, {
            whiteUiText: pQ,
            grayUiText: GQ,
            yellowUiText: UQ
          } = qQ.N;
          QQ.textBaseline = "middle";
          const bQ = function(WQ, XQ, wQ, qQ, TQ, zQ) {
              let sQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              QQ.font = `bold ${qQ}px 'Jetbrains Mono', monospace`, QQ.fillStyle = TQ, QQ.textAlign = sQ;
              let FQ = WQ.replace(/[\r\n\t]/g, " ");
              if (QQ.measureText(FQ).width > zQ) {
                for (; FQ.length > 0 && QQ.measureText(`${FQ}\u2026`).width > zQ;) FQ = FQ.slice(0, -1);
                FQ += "\u2026"
              }
              QQ.fillText(FQ, XQ, wQ)
            },
            vQ = WQ => {
              QQ.fillStyle = pQ, QQ.globalAlpha = .15, QQ.fillRect(24, WQ, 976, 2), QQ.globalAlpha = 1
            },
            dQ = null === DQ ? null : (0, qQ.kc)(DQ),
            HQ = QQ => null !== dQ && QQ.playerHash === dQ,
            aQ = yQ(IQ.entries, wQ.j),
            lQ = "ready" === IQ.status && aQ.length > 0,
            hQ = null === jQ ? [] : yQ(jQ.entries, sQ),
            iQ = aQ.some(HQ),
            cQ = null === jQ ? null : function(QQ) {
              const WQ = QQ;
              if (!WQ || !Number.isFinite(WQ.rank) || !Number.isFinite(WQ.tied) || !Number.isFinite(WQ.total)) return null;
              return WQ
            }(jQ.standing),
            AQ = hQ.find(HQ),
            RQ = aQ.find(HQ),
            EQ = null === cQ || void 0 === AQ ? null : {
              value: AQ.value,
              rank: cQ.rank
            },
            CQ = VQ(aQ, void 0 === RQ || RQ.value === (null === EQ || void 0 === EQ ? void 0 : EQ.value) ? EQ : null),
            uQ = VQ(hQ, EQ),
            LQ = (QQ, WQ) => {
              const XQ = QQ.findIndex(HQ);
              return XQ >= 0 ? WQ[XQ] : null
            },
            kQ = null !== (zQ = null !== (gQ = null === cQ || void 0 === cQ ? void 0 : cQ.rank) && void 0 !== gQ ? gQ : LQ(hQ, uQ)) && void 0 !== zQ ? zQ : LQ(aQ, CQ);
          QQ.font = "bold 34px 'Jetbrains Mono', monospace";
          const fQ = [...lQ ? CQ : [], ...iQ ? [] : uQ],
            SQ = Math.min(280, Math.max(0, ...fQ.map((WQ => QQ.measureText(FQ.format(WQ)).width)))),
            tQ = SQ <= 80,
            oQ = tQ ? 80 : 32 + SQ,
            eQ = tQ ? 148 : oQ + 28,
            nQ = 660 - eQ;
          bQ(`TOP ${wQ.j}  /  ALL TIME`, 24, 52, 28, GQ, 976), bQ(BQ ? String(null !== (JQ = WQ.title) && void 0 !== JQ ? JQ : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, pQ, 976), bQ("RANK", 32, 174, 28, GQ, eQ - 40), bQ("PLAYER", eQ, 174, 28, GQ, nQ), bQ(BQ ? String(null !== (rQ = WQ.scoreLabel) && void 0 !== rQ ? rQ : "Score").slice(0, 24) : "Score", 992, 174, 28, GQ, 304, "right"), vQ(202);
          const xQ = (TQ - 232) / (wQ.j + PQ + sQ),
            YQ = 208 + wQ.j * xQ,
            NQ = YQ + PQ * xQ,
            ZQ = (WQ, XQ, wQ, qQ) => {
              const TQ = HQ(WQ);
              QQ.fillStyle = TQ ? UQ : pQ, QQ.globalAlpha = TQ ? .15 : qQ ? .035 : 0, QQ.fillRect(24, wQ - xQ / 2 + 1, 976, xQ - 2), QQ.globalAlpha = 1;
              const zQ = TQ ? UQ : pQ;
              bQ(FQ.format(XQ), oQ, wQ, 34, zQ, tQ ? 80 : SQ, tQ ? "center" : "right"), bQ(BQ ? String(WQ.name).slice(0, 64) : "Player", eQ, wQ, 34, zQ, nQ);
              const sQ = FQ.format(WQ.value);
              bQ(QQ.measureText(sQ).width > 304 ? WQ.value.toExponential(6) : sQ, 992, wQ, 34, zQ, 304, "right")
            };
          if (lQ)
            for (const [wQ, qQ] of aQ.entries()) ZQ(qQ, CQ[wQ], 208 + (wQ + .5) * xQ, wQ % 2 === 0);
          else {
            const QQ = "error" === IQ.status,
              WQ = QQ ? "Couldn't load leaderboard" : "ready" === IQ.status ? "No scores yet" : "Loading leaderboard\u2026",
              XQ = QQ ? "Trying again shortly" : "ready" === IQ.status ? "Be the first on the board!" : "Fetching the top players",
              wQ = (208 + YQ) / 2;
            bQ(WQ, 512, wQ - 28, 40, QQ ? qQ.N.redUiText : pQ, 960, "center"), bQ(XQ, 512, wQ + 27, 30, GQ, 960, "center")
          }
          const OQ = YQ + PQ * xQ / 2;
          if (null === kQ) vQ(OQ);
          else {
            const WQ = null === cQ ? 0 : cQ.tied - 1,
              XQ = `YOUR RANK #${FQ.format(kQ)}${null===cQ?"":` of ${FQ.format(cQ.total)}`}`;
            QQ.font = "bold 36px 'Jetbrains Mono', monospace";
            const wQ = Math.max(20, Math.min(36, Math.floor(34560 / QQ.measureText(XQ).width)));
            bQ(XQ, 512, OQ - (WQ > 0 ? 15 : 0), wQ, UQ, 960, "center"), WQ > 0 && bQ(`Tied with ${FQ.format(WQ)} other${1===WQ?"":"s"}`, 512, OQ + 24, 24, GQ, 960, "center")
          }
          if (null === jQ) return;
          const KQ = NQ + sQ * xQ / 2;
          if (iQ) bQ(`You're in the top ${wQ.j}!`, 512, KQ, 40, UQ, 960, "center");
          else if (0 === hQ.length) bQ("You're not on this board yet", 512, KQ, 34, GQ, 960, "center");
          else
            for (const [wQ, qQ] of hQ.entries()) ZQ(qQ, uQ[wQ], NQ + (wQ + .5) * xQ, wQ % 2 === 0)
        }(QQ, gQ, JQ, zQ.layoutHeight)
    }

    function yQ(QQ, WQ) {
      return Array.isArray(QQ) ? QQ.slice(0, WQ).filter((QQ => QQ && Number.isFinite(QQ.rank) && Number.isFinite(QQ.value))) : []
    }

    function VQ(QQ, WQ) {
      const XQ = [];
      let wQ = !1;
      return QQ.forEach(((qQ, TQ) => {
        if (null !== WQ && qQ.value === WQ.value) return void XQ.push(WQ.rank);
        const zQ = TQ > 0 && qQ.value === QQ[TQ - 1].value;
        zQ || (wQ = 0 === TQ && 1 !== qQ.rank), XQ.push(zQ && !wQ ? XQ[TQ - 1] : qQ.rank)
      })), XQ
    }
  },
  39143: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => qQ,
      e: () => TQ
    });
    const wQ = 32;

    function qQ(QQ) {
      return Array.from(QQ).length
    }

    function TQ(QQ) {
      const WQ = [""];
      let XQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        qQ = "";
      const TQ = () => {
        WQ.push(""), XQ = 0, qQ = ""
      };
      for (const zQ of QQ.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(zQ)) TQ();
        else if (/^\s+$/.test(zQ)) qQ += zQ;
      else if (zQ.length > 0) {
        const QQ = Array.from(zQ);
        XQ > 0 && XQ + qQ.length + QQ.length > wQ && TQ(), WQ[WQ.length - 1] += qQ, XQ += qQ.length, qQ = "";
        for (const qQ of QQ) XQ >= wQ && TQ(), WQ[WQ.length - 1] += qQ, XQ++
      }
      return WQ[WQ.length - 1] += qQ, WQ
    }
  },
  41409: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => TQ
    });
    const wQ = 4e5,
      qQ = 2;

    function TQ(QQ, WQ, XQ) {
      let [TQ, zQ] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [QQ, WQ], sQ = Math.min(Number.isFinite(XQ) && XQ > 0 ? XQ : 1, qQ);
      const FQ = Math.max(0, TQ, QQ) * Math.max(0, zQ, WQ) * sQ * sQ;
      return FQ > wQ && (sQ *= Math.sqrt(wQ / FQ)), [Math.max(1, Math.floor(Math.max(0, QQ) * sQ)), Math.max(1, Math.floor(Math.max(0, WQ) * sQ))]
    }
  },
  51202: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      WasmPreviewHost: () => aW,
      pageBuiltInAnimationPack: () => rQ,
      pagePreviews: () => TW,
      previewModule: () => KQ
    });
    var wQ = XQ(3110),
      qQ = XQ(670);
    const TQ = "[bloxd-wasm-client]";

    function zQ(QQ) {
      const WQ = {
        wasm: "unknown",
        client: String(qQ.c)
      };
      try {
        var XQ;
        WQ.wasm = null !== (XQ = null === QQ || void 0 === QQ ? void 0 : QQ.IJ()) && void 0 !== XQ ? XQ : WQ.wasm
      } catch {}
      return WQ
    }
    async function sQ(QQ) {
      if (QQ.length < 2 || 31 !== QQ[0] || 139 !== QQ[1]) return QQ;
      if ("undefined" === typeof DecompressionStream) {
        const {
          ungzip: WQ
        } = await Promise.resolve().then((() => XQ(3059)));
        return WQ(QQ)
      }
      const WQ = new Blob([QQ]).stream().pipeThrough(new DecompressionStream("gzip"));
      return new Uint8Array(await new Response(WQ).arrayBuffer())
    }

    function FQ(QQ, WQ, wQ, qQ) {
      Promise.resolve().then((() => XQ(40963))).then((XQ => {
        let {
          reportDataLoadFailure: TQ
        } = XQ;
        TQ(QQ, WQ, wQ, qQ)
      }), (WQ => {
        console.warn(`${TQ} ${QQ} didn't load, and the report couldn't be sent`, wQ.error, WQ)
      }))
    }
    const PQ = [3e4, 12e4, 3e5];
    class gQ {
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
        const WQ = zQ(QQ),
          XQ = await async function(QQ, WQ) {
            let XQ;
            try {
              XQ = await QQ()
            } catch (wQ) {
              return {
                stage: "fetch",
                error: wQ
              }
            }
            try {
              return WQ(XQ) ? null : {
                stage: "decode",
                error: null
              }
            } catch (wQ) {
              return {
                stage: "decode",
                error: wQ
              }
            }
          }((() => this.deps.fetch()), (WQ => {
            const XQ = QQ.fTQ(WQ);
            return XQ && this.resolveSet(WQ), XQ
          }));
        if (null !== XQ) {
          if ("fetch" === XQ.stage) {
            this.loading = null;
            const WQ = PQ[this.retries++];
            void 0 !== WQ && this.deps.later((() => {
              this.provide(QQ)
            }), WQ)
          }
          this.reported || (this.reported = !0, this.deps.onFailed(XQ, WQ))
        }
      }
    }
    let JQ = null;

    function rQ() {
      return JQ ??= new gQ({
        fetch: async () => sQ(await (0, wQ.K)(IQ(), {
          priority: "low"
        })),
        onFailed: (QQ, WQ) => {
          FQ("builtInAnimations", IQ(), QQ, WQ)
        },
        later: (QQ, WQ) => {
          setTimeout(QQ, WQ)
        }
      }), JQ
    }

    function IQ() {
      return XQ(51207)
    }
    var jQ = XQ(3107),
      BQ = XQ(1238),
      yQ = XQ(374),
      VQ = XQ(367),
      DQ = XQ(691),
      pQ = XQ(5134),
      GQ = XQ(40930),
      UQ = XQ(40954),
      bQ = XQ(41150),
      vQ = (XQ(40991), XQ(41002)),
      dQ = XQ(41010),
      HQ = XQ(41012),
      aQ = XQ(40943),
      lQ = XQ(41172),
      hQ = XQ(41175),
      iQ = XQ(40928),
      cQ = XQ(41186),
      AQ = XQ(41054),
      RQ = XQ(41039),
      EQ = XQ(41102),
      CQ = XQ(41164),
      uQ = XQ(42871),
      LQ = XQ(36568),
      kQ = XQ(3933),
      fQ = XQ(41409);
    const SQ = "[bloxd-previews]",
      tQ = 0,
      oQ = 1,
      eQ = 2,
      nQ = 1,
      xQ = 2,
      YQ = 3,
      NQ = 0,
      ZQ = 1,
      OQ = 2;

    function KQ(QQ) {
      const WQ = QQ,
        XQ = (0, GQ.P)(QQ),
        wQ = (0, GQ.k)(QQ);
      return null !== XQ && null !== wQ && "function" === typeof WQ.CTQ && "function" === typeof WQ.uTQ && "function" === typeof WQ.kTQ ? WQ : null
    }

    function mQ() {
      return XQ(51209)
    }
    async function MQ(QQ, WQ, wQ) {
      var qQ;
      let TQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      "lost" === QQ && (0, iQ.w)();
      const sQ = await (0, iQ.J)();
      if (null === sQ || (0, GQ.n)(sQ) || (0, iQ.b)()) return;
      const FQ = "webgpu" === sQ.backend;
      if (!FQ && "lost" !== QQ) return;
      const PQ = FQ && (0, VQ.p)(sQ.adapter, null !== wQ && void 0 !== wQ ? wQ : null, "lost" === QQ, TQ),
        gQ = null !== (qQ = "lost" === QQ ? (0, UQ.j)((0, jQ.O)() ? (0, GQ.P)((0, jQ.B)()) : null) : void 0) && void 0 !== qQ ? qQ : WQ,
        JQ = FQ ? (0, GQ.$)(QQ, void 0, (0, UQ.d)(gQ)) : null;
      if (null === JQ) {
        FQ || (0, DQ.o)(), (0, iQ.q)();
        try {
          await async function(QQ, WQ, wQ, qQ, TQ) {
            let {
              restoreLost: sQ,
              adapterRemembered: FQ
            } = TQ;
            const PQ = (0, jQ.O)(),
              {
                flushCrashReports: gQ,
                reportRenderReload: JQ
              } = await Promise.resolve().then((() => XQ(40963)));
            JQ(QQ.backend, qQ, zQ(PQ ? (0, jQ.B)() : null), {
              from: "home",
              cause: WQ,
              restoreLost: sQ,
              adapterRemembered: FQ,
              ...QW(QQ, WQ, wQ)
            }), await gQ(AQ.c)
          }(sQ, QQ, gQ, null !== wQ && void 0 !== wQ ? wQ : "start_failed" === QQ ? 0 : 1, {
            restoreLost: TQ,
            adapterRemembered: PQ
          })
        } catch (IQ) {
          console.warn(`${SQ} ${sQ.backend} failed at home (${QQ}), and its report couldn't be sent`, IQ)
        }(0, AQ.j)()
      } else {
        var rQ;
        const WQ = QW(sQ, QQ, gQ),
          wQ = `WebGPU failed at home (${QQ}${void 0===WQ.error?"":`: ${WQ.error instanceof Error?WQ.error.message:(0,LQ.j)(WQ.error)}`}) and ${JQ}`;
        console.warn(`${SQ} ${wQ}: the previews stop`, null !== (rQ = WQ.error) && void 0 !== rQ ? rQ : ""), (0, iQ.s)(wQ);
        try {
          const {
            countRenderLost: wQ
          } = await Promise.resolve().then((() => XQ(40963)));
          wQ(QQ, WQ.error, WQ.context)
        } catch (BQ) {
          console.warn(`${SQ} WebGPU failed at home (${QQ}), and its count couldn't be sent`, BQ)
        }
      }
    }

    function QW(QQ, WQ, XQ) {
      let {
        adapter: wQ
      } = QQ;
      return {
        error: XQ,
        context: {
          adapter: wQ,
          boundAtMs: "start_failed" === WQ ? null : (0, iQ.G)(),
          indirectHangs: (0, iQ.y)(),
          restoresSkipped: (0, iQ.I)()
        }
      }
    }
    async function WW() {
      if (!(0, jQ.O)()) {
        const QQ = await (0, iQ.J)();
        if (null === QQ || (0, GQ.n)(QQ)) return null;
        if (await (0, cQ.e)(await QQ.load()), !(0, jQ.O)()) return null
      }
      return KQ((0, jQ.B)())
    }
    class XW {
      constructor(QQ, WQ, XQ, wQ, qQ, TQ) {
        this.page = QQ, this.host = WQ, this.id = XQ, this.canvas = wQ, this.size = qQ, this.models = void 0, this.images = void 0, this.write = void 0, this.outcomes = [], this.closed = !1, this.quiet = 0, this.settled = [];
        const zQ = {
            ...TQ.images,
            glbUrl: QQ => {
              var WQ;
              return null !== (WQ = this.models.drawnUrl(QQ)) && void 0 !== WQ ? WQ : TQ.images.glbUrl(QQ)
            }
          },
          sQ = WQ => QQ.modelFile(WQ);
        this.images = new bQ.h(zQ, (QQ => {
          console.warn(`${SQ} image ${QQ.key.kind}:${QQ.key.index}:${QQ.key.word} failed`, QQ.error)
        }), {
          fetchFile: sQ,
          fetchImage: WQ => QQ.imageFile(WQ)
        }), QQ.startModels(), this.models = new vQ.i(TQ.files, ((WQ, XQ) => QQ.buildModel(WQ, XQ)), (QQ => {
          console.warn(`${SQ} model file ${QQ.file} (${QQ.url}) failed`, QQ.error)
        }), {
          fetchFile: sQ,
          onWritten: (QQ, WQ) => {
            this.images.glbWritten(QQ, WQ)
          },
          onTaken: (QQ, WQ) => {
            this.images.glbTaken(QQ, WQ)
          }
        }), this.write = (QQ, WQ, XQ) => {
          if (this.closed) return !0;
          if (QQ === vQ.e) {
            const QQ = new DataView(XQ.buffer, XQ.byteOffset, HQ.e),
              wQ = QQ.getUint32(0, !0),
              qQ = QQ.getUint32(HQ.g, !0),
              TQ = this.page.hostCall(OQ, (() => this.host.YzQ(this.id, wQ, WQ, XQ.subarray(HQ.e))));
            return this.outcomes.push([qQ, TQ]), !0
          }
          return QQ === bQ.d && (this.page.hostCall(void 0, (() => {
            this.host.ZzQ(this.id, XQ)
          })), !0)
        }
      }
      get isClosed() {
        return this.closed
      }
      get isStopped() {
        return this.page.isStopped
      }
      resize(QQ, WQ, XQ) {
        if (this.closed) return;
        const [wQ, qQ] = (0, fQ.e)(QQ, WQ, this.page.dpr(), XQ);
        wQ === this.size[0] && qQ === this.size[1] || (this.size = [wQ, qQ], this.page.hostCall(void 0, (() => {
          this.host.resize(this.id, wQ, qQ)
        })))
      }
      setMob(QQ, WQ, XQ, wQ) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.QsQ(this.id, QQ, WQ, XQ, wQ))))
      }
      setPet(QQ, WQ, XQ, wQ) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.XsQ(this.id, QQ, WQ, XQ, wQ))))
      }
      setPlayer(QQ, WQ, XQ) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.KzQ(this.id, QQ, WQ, XQ))))
      }
      setFigure(QQ, WQ, XQ, wQ) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.mzQ(this.id, QQ, WQ, XQ, wQ))))
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
          alpha: WQ,
          beta: XQ,
          radius: wQ
        } = QQ;
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.WsQ(this.id, WQ, XQ, wQ)
        }))
      }
      untilSettled() {
        return this.closed || this.page.isStopped ? Promise.resolve() : (this.quiet = 0, new Promise((QQ => {
          this.settled.push(QQ)
        })))
      }
      packChanged() {
        this.quiet = 0, this.models.refresh(), (0, lQ.h)(this.images)
      }
      feed() {
        this.models.drain(this.write);
        for (const [QQ, WQ] of this.outcomes) {
          const XQ = WQ === NQ ? [] : [WQ === ZQ ? QQ : (QQ | vQ.h) >>> 0];
          this.models.taken(QQ, XQ)
        }
        this.outcomes.length = 0, this.images.drain(this.write)
      }
      collect(QQ) {
        let WQ = !1;
        if (QQ) {
          const QQ = this.host.TsQ(this.id);
          for (const WQ of QQ) this.models.request(WQ);
          const XQ = this.host.qsQ(this.id);
          XQ.length > 0 && this.images.onEvent(XQ), WQ = QQ.length > 0 || XQ.length > 0
        }
        const XQ = this.page.modelsUnavailable ? 0 : this.models.asking + this.models.unanswered,
          wQ = WQ || XQ > 0 || this.images.waiting > 0 || this.images.inFlight > 0;
        this.quiet = wQ ? 0 : this.quiet + 1, this.quiet >= 3 && this.resolveSettled()
      }
      close() {
        this.closed || (this.closed = !0, this.page.closePreview(this), this.resolveSettled())
      }
      abandon() {
        this.resolveSettled()
      }
      dispose(QQ) {
        this.page.hostCall(void 0, (() => {
          const WQ = this.host.close(this.id);
          WQ.length > 0 && this.images.onEvent(WQ), this.page.isTrapped || QQ.kTQ(this.id)
        })), this.images.dispose(), this.canvas.remove()
      }
      resolveSettled() {
        const QQ = this.settled;
        this.settled = [];
        for (const WQ of QQ) WQ()
      }
    }
    class wW {
      constructor(QQ) {
        this.deps = QQ, this.module = null, this.host = null, this.opening = null, this.pageCanvas = null, this.samples = 1, this.binding = null, this.sessionEnds = 0, this.lastEndReturned = !0, this.previews = new Map, this.nextId = 1, this.frameId = null, this.stopped = !1, this.loggedErrors = new Set, this.modelsListener = {
          onUnavailable: QQ => {
            this.modelsFailed(QQ)
          },
          onDecoderFailed: QQ => {
            this.loggedErrors.has("modelDecoder") || (this.loggedErrors.add("modelDecoder"), console.warn(`${SQ} the Draco decoder didn't load: models waiting on it won't draw`, QQ))
          },
          onWorkerLost: QQ => {
            this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${SQ} a model worker was lost: ${QQ}`))
          },
          onModuleRetry: () => {}
        }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.xI = {
          setShaderPack: (QQ, WQ, XQ, wQ, qQ) => (this.shaderPackArgs = [QQ, WQ, XQ, wQ, qQ], this.handOverShaderPack(), !0)
        }, this.frame = QQ => {
          this.frameId = null;
          const WQ = this.host;
          if (null !== WQ && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped) try {
            this.drawFrame(WQ, QQ)
          } catch (XQ) {
            if (!this.stopIfTrapped(XQ) && (this.stop(), (0, GQ.o)(XQ))) return void this.deps.onRenderFailed("frames_refused", XQ);
            console.warn(`${SQ} the previews stopped: their frame threw`, XQ)
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
        var QQ, WQ;
        return null !== (QQ = null === (WQ = this.host) || void 0 === WQ ? void 0 : WQ.attached()) && void 0 !== QQ && QQ
      }
      get open() {
        return this.previews.size
      }
      get frameCostMs() {
        return 0 === this.costs.length ? 0 : this.costs.reduce(((QQ, WQ) => QQ + WQ), 0) / this.costs.length
      }
      async bindSession(QQ, WQ, XQ) {
        const wQ = this.binding,
          qQ = this.sessionEnds;
        try {
          const TQ = this.hostOf(QQ);
          if (!TQ.NzQ()) {
            const WQ = (0, EQ.f)().sampleCount,
              zQ = await XQ(WQ);
            if (this.sessionEnds !== qQ) return this.keepRendererOfEndedSession(QQ, TQ, zQ, WQ, wQ), WQ;
            if (!TQ.hzQ(zQ)) throw new Error("the page has a renderer already");
            (0, iQ.u)(performance.now()), this.samples = WQ, (0, CQ.g)((0, GQ.k)(QQ))
          }
          if (!TQ.attach(WQ)) throw new Error("the page's renderer is lent to another session");
          return this.samples
        } finally {
          this.binding === wQ && this.endBinding()
        }
      }
      keepRendererOfEndedSession(QQ, WQ, XQ, wQ, qQ) {
        if (!this.lastEndReturned || null !== this.binding && this.binding !== qQ) try {
          XQ.free()
        } catch (TQ) {
          console.warn(`${SQ} an ended session's renderer didn't free`, TQ)
        } else WQ.hzQ(XQ) && ((0, iQ.u)(performance.now()), this.samples = wQ, (0, CQ.g)(this.registryOf(QQ)))
      }
      async beginSession() {
        var QQ;
        let WQ = () => {};
        const XQ = new Promise((QQ => {
          WQ = QQ
        }));
        this.binding = {
          done: XQ,
          release: WQ
        }, await (null === (QQ = this.opening) || void 0 === QQ ? void 0 : QQ.catch((() => null)));
        const wQ = this.pageCanvas;
        return this.pageCanvas = null, wQ
      }
      endSession(QQ) {
        var WQ, XQ;
        if (this.sessionEnds++, this.lastEndReturned = QQ, this.endBinding(), QQ) {
          try {
            var wQ;
            null === (wQ = this.host) || void 0 === wQ || wQ.detach()
          } catch (qQ) {
            return void console.warn(`${SQ} the session's core kept the page's renderer`, qQ)
          }!0 === (null === (WQ = this.host) || void 0 === WQ ? void 0 : WQ.attached()) && console.warn(`${SQ} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (XQ = this.host) || void 0 === XQ ? void 0 : XQ.NzQ()) && (0, CQ.g)(this.registryOf(this.module))
        }
      }
      endBinding() {
        var QQ;
        null === (QQ = this.binding) || void 0 === QQ || QQ.release(), this.binding = null
      }
      async openPreview(QQ, WQ, XQ, wQ) {
        const qQ = await this.renderingHost(),
          TQ = this.module;
        if (null === qQ || null === TQ) throw new Error("this page can't draw previews: it has no renderer build");
        if (this.animations ??= this.loadAnimations(qQ), this.deps.pack.wanted(), this.isStopped) throw new Error("the previews stopped");
        this.guarded((() => {
          this.deps.provideBuiltInAnimationPack(TQ)
        }));
        const zQ = this.nextId++,
          sQ = this.deps.createCanvas(),
          [FQ, PQ] = (0, fQ.e)(WQ, XQ, this.deps.dpr(), wQ);
        sQ.width = FQ, sQ.height = PQ;
        if (!this.guarded((() => (TQ.uTQ(zQ, sQ), qQ.open(zQ, FQ, PQ, QQ))))) throw this.hostCall(void 0, (() => {
          TQ.kTQ(zQ)
        })), new Error("the page's renderer is lent to a session that is running");
        this.restartModelsIfFailed();
        const gQ = new XW(this, qQ, zQ, sQ, [FQ, PQ], this.deps);
        return this.previews.set(zQ, gQ), this.startFrames(), gQ
      }
      prefetch() {
        if (this.prefetched || this.isStopped || (0, iQ.b)() || null !== (0, iQ.D)()) return;
        this.prefetched = !0;
        (null === this.module ? this.loadModule() : Promise.resolve(this.module)).then((QQ => {
          null === QQ || this.isStopped || (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles())
        }), (() => {}))
      }
      modelFile(QQ) {
        return this.prefetchedOr(QQ, this.deps.fetchModel)
      }
      imageFile(QQ) {
        return this.prefetchedOr(QQ, wQ.K)
      }
      prefetchedOr(QQ, WQ) {
        const XQ = this.prefetchedFiles.get(QQ);
        return void 0 === XQ ? WQ(QQ) : XQ.catch((() => WQ(QQ)))
      }
      async prefetchPlayerFiles() {
        const QQ = this.deps.playerFile().then((QQ => this.deps.files.url(QQ))),
          WQ = await Promise.all([QQ, this.deps.images.lifeformAtlasUrl(lQ.c)]).catch((() => null));
        if (null === WQ) return;
        const [XQ, wQ] = WQ, qQ = (QQ, WQ) => {
          if (null === QQ) return;
          const XQ = WQ(QQ);
          this.prefetchedFiles.set(QQ, XQ), XQ.catch((() => {
            this.prefetchedFiles.delete(QQ)
          }))
        };
        qQ(XQ, (QQ => this.modelFile(QQ))), qQ(wQ, (QQ => this.imageFile(QQ)))
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
      buildModel(QQ, WQ) {
        return this.startModels(), this.models.then((XQ => XQ(QQ, WQ))).then((QQ => this.unavailable ? new Promise((() => {})) : QQ))
      }
      restartModelsIfFailed() {
        this.unavailable && !this.modelsRestarted && 0 === this.previews.size && (this.modelsRestarted = !0, this.models = null, this.unavailable = !1, this.startModels())
      }
      modelsFailed(QQ) {
        this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${SQ} the model workers didn't start: models won't draw in the previews`, QQ))
      }
      called(QQ) {
        return 0 !== QQ && this.logError(QQ, 0), QQ
      }
      closePreview(QQ) {
        this.previews.delete(QQ.id), null !== this.module && QQ.dispose(this.module), 0 === this.previews.size && null !== this.frameId && (this.deps.cancelFrame(this.frameId), this.frameId = null)
      }
      hostOf(QQ) {
        if (null !== this.module && this.module !== QQ) throw new Error("a second renderer module on one page");
        return this.module = QQ, null === this.host && (this.host = this.guarded((() => new QQ.CTQ)), this.tellInGame(), this.handOverShaderPack()), this.host
      }
      tellInGame() {
        const {
          host: QQ
        } = this;
        null !== QQ && this.outsideCall("the game's start or end", (() => {
          QQ.MzQ(this.deps.game.inGame())
        }))
      }
      handOverShaderPack() {
        const {
          host: QQ,
          shaderPackArgs: WQ
        } = this;
        null !== QQ && null !== WQ && this.outsideCall("the shader pack's hand-over", (() => {
          QQ.iwQ(...WQ) || console.warn(`${SQ} the host refused the shader pack: previews draw without it at home`)
        }))
      }
      outsideCall(QQ, WQ) {
        try {
          this.hostCall(void 0, WQ)
        } catch (XQ) {
          this.stop(), console.warn(`${SQ} the previews stopped: ${QQ} threw`, XQ)
        }
      }
      async loadAnimations(QQ) {
        const WQ = zQ(null),
          XQ = this.module;
        try {
          WQ.wasm = null === XQ ? WQ.wasm : this.hostCall(WQ.wasm, (() => XQ.IJ()))
        } catch {}
        let wQ, qQ;
        try {
          wQ = await this.fetchAnimationTable()
        } catch (TQ) {
          return void this.deps.onAnimationsFailed({
            stage: "fetch",
            error: TQ
          }, WQ)
        }
        if (!this.settleIfTrapped()) {
          try {
            qQ = QQ.OzQ(wQ)
          } catch (TQ) {
            if (this.stopIfTrapped(TQ)) return;
            return void this.deps.onAnimationsFailed({
              stage: "decode",
              error: TQ
            }, WQ)
          }
          qQ || this.deps.onAnimationsFailed({
            stage: "decode",
            error: null
          }, WQ)
        }
      }
      async renderingHost() {
        if (null !== this.binding && await this.binding.done, this.settleIfTrapped()) return null;
        const QQ = this.host;
        return null !== QQ && this.guarded((() => QQ.NzQ())) ? QQ : (this.opening ??= this.openAtHome().finally((() => {
          this.opening = null
        })), this.opening)
      }
      async openAtHome() {
        var QQ;
        const WQ = null !== (QQ = this.module) && void 0 !== QQ ? QQ : await this.loadModule();
        if (null === WQ) return null;
        const XQ = this.hostOf(WQ),
          wQ = () => this.guarded((() => XQ.NzQ()));
        if (wQ()) return XQ;
        if (null !== (0, iQ.D)() || (0, iQ.b)()) return null;
        const qQ = this.deps.createCanvas();
        qQ.width = 1, qQ.height = 1;
        const TQ = await this.deps.openExtras();
        if (this.settleIfTrapped()) return null;
        const zQ = (0, EQ.f)().sampleCount;
        let sQ;
        try {
          sQ = await (0, GQ.r)(WQ, "previewRenderer", qQ, zQ, uQ.d, TQ)
        } catch (FQ) {
          throw FQ instanceof aQ.e ? this.stopForTrap(FQ) : (0, GQ.p)(FQ) && await this.deps.onRenderFailed("start_failed", FQ), FQ
        }
        return this.guarded((() => XQ.hzQ(sQ))) ? ((0, iQ.u)(performance.now()), this.samples = zQ, this.pageCanvas = qQ, (0, CQ.g)(this.registryOf(WQ)), XQ) : wQ() ? XQ : null
      }
      startFrames() {
        null !== this.frameId || this.isStopped || (this.frameId = this.deps.requestFrame(this.frame))
      }
      drawFrame(QQ, WQ) {
        for (const zQ of this.previews.values()) zQ.feed();
        if (this.stopped) return;
        const XQ = this.deps.now(),
          wQ = QQ.frame(WQ);
        this.costs.push(this.deps.now() - XQ), this.costs.length > 120 && this.costs.shift();
        const qQ = 0 !== (256 & wQ),
          TQ = 255 & wQ;
        for (const zQ of this.previews.values()) {
          if (this.stopped) return;
          zQ.collect(qQ)
        }
        if (!this.stopped) {
          if (0 !== (512 & wQ) && this.deps.onDrew(), qQ) {
            const WQ = QQ.wsQ();
            for (let QQ = 0; QQ + 1 < WQ.length; QQ += 2) WQ[QQ] === pQ.K.RenderDeviceLost && this.deps.onDeviceLost(), this.logError(WQ[QQ], WQ[QQ + 1])
          }
          if (TQ !== nQ) {
            if (TQ === xQ) return this.stop(), void this.deps.onFatal(QQ.ozQ(), QQ.ezQ());
            if (TQ === YQ) return this.stop(), void console.warn(`${SQ} the previews stopped: the page's renderer went with its session`);
            (0, yQ.d)(WQ), this.startFrames()
          } else {
            const WQ = QQ.xzQ();
            this.stop();
            const XQ = WQ[2] === pQ.cd.PIPELINE_FAILED ? "pipeline_failed" : "lost";
            this.deps.onRenderFailed(XQ, void 0, WQ[1], WQ[2] === pQ.cd.RESTORE_LOST)
          }
        }
      }
      get isStopped() {
        return this.stopped || this.isTrapped
      }
      get isTrapped() {
        return null !== this.module && ((0, aQ.m)(this.module) || "failed" === (0, jQ.z)())
      }
      hostCall(QQ, WQ) {
        if (this.settleIfTrapped()) return QQ;
        try {
          return WQ()
        } catch (XQ) {
          if (this.stopIfTrapped(XQ)) return QQ;
          throw XQ
        }
      }
      guarded(QQ) {
        if (this.settleIfTrapped()) throw new Error("the previews stopped: their module trapped");
        try {
          return QQ()
        } catch (WQ) {
          throw this.stopIfTrapped(WQ), WQ
        }
      }
      registryOf(QQ) {
        return {
          jwQ: (WQ, XQ) => {
            this.hostCall(void 0, (() => {
              QQ.jwQ(WQ, XQ)
            }))
          },
          BwQ: WQ => {
            this.hostCall(void 0, (() => {
              QQ.BwQ(WQ)
            }))
          }
        }
      }
      settleIfTrapped() {
        return !!this.isTrapped && (this.stopped || (this.stop(), (0, CQ.g)(null)), !0)
      }
      stopIfTrapped(QQ) {
        return !(null === this.module || !(0, aQ.q)(this.module, QQ)) && (this.stopForTrap(QQ), !0)
      }
      stopForTrap(QQ) {
        this.stop(), (0, CQ.g)(null), (0, kQ.e)("previews", QQ)
      }
      stop() {
        this.stopped = !0;
        for (const QQ of this.previews.values()) QQ.abandon()
      }
      logError(QQ, WQ) {
        const XQ = `${QQ}:${WQ}`;
        this.loggedErrors.has(XQ) || (this.loggedErrors.add(XQ), console.warn(`${SQ} error ${QQ} (detail ${WQ})`))
      }
    }
    let qW = null;

    function TW() {
      return qW ??= new wW(function() {
        const QQ = (0, dQ.p)(BQ.clientSideServerUrls.staticUrl, {
          packUrl: QQ => {
            var WQ, XQ;
            return null !== (WQ = null === (XQ = lQ.d.current) || void 0 === XQ ? void 0 : XQ.modelUrl(QQ)) && void 0 !== WQ ? WQ : null
          }
        });
        return {
          loadModule: WW,
          startModels: async QQ => {
            const {
              pageModelPool: WQ
            } = await XQ.e(45).then((() => XQ(51279))), {
              pool: wQ
            } = WQ(QQ);
            return (QQ, WQ) => wQ.build(QQ, WQ)
          },
          fetchAnimations: async () => sQ(await (0, wQ.K)(mQ())),
          playerFile: async () => (await (0, dQ.o)()).PLAYER_FILE,
          onAnimationsFailed: (QQ, WQ) => {
            FQ("previewAnimations", mQ(), QQ, WQ)
          },
          provideBuiltInAnimationPack: QQ => {
            rQ().provide(QQ)
          },
          openExtras: iQ.z,
          files: QQ,
          images: (0, lQ.i)((0, bQ.r)(QQ.url), (() => lQ.d.current)),
          pack: lQ.d,
          game: hQ.b,
          fetchModel: QQ => (0, dQ.i)(QQ),
          createCanvas: () => document.createElement("canvas"),
          dpr: () => window.devicePixelRatio,
          now: () => performance.now(),
          requestFrame: QQ => requestAnimationFrame(QQ),
          cancelFrame: QQ => {
            cancelAnimationFrame(QQ)
          },
          onRenderFailed: MQ,
          onFatal: (QQ, WQ) => {
            console.error(`${SQ} the previews stopped: renderer error ${QQ} (detail ${WQ})`)
          },
          onDeviceLost: () => {
            (0, iQ.B)() === RQ.e.webgpu && ((0, UQ.h)((0, jQ.O)() ? (0, GQ.P)((0, jQ.B)()) : null), VQ.C.lost())
          },
          onDrew: () => {
            VQ.C.drew()
          }
        }
      }()), qW
    }
    var zW = XQ(651),
      sW = XQ(38918),
      FW = XQ(3555);
    const PW = {
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
    const gW = "[bloxd-previews]",
      JW = new Uint32Array(5);

    function rW(QQ) {
      return zW.i.indexOf(QQ)
    }
    const IW = new WeakSet;

    function jW(QQ) {
      const WQ = (0, sW.f)(QQ),
        XQ = null === WQ ? -1 : BW(WQ);
      return -1 !== XQ ? XQ : (IW.has(QQ) || (IW.add(QQ), console.warn(`${gW} an animation the previews' table lacks: the mob idles instead`)), -1)
    }

    function BW(QQ) {
      var WQ;
      return null !== (WQ = PW[QQ]) && void 0 !== WQ ? WQ : -1
    }

    function yW(QQ, WQ) {
      const {
        canvas: XQ
      } = WQ;
      XQ.style.width = "100%", XQ.style.height = "100%", XQ.style.display = "block", QQ.appendChild(XQ)
    }

    function VW(QQ) {
      const WQ = QQ.getBoundingClientRect();
      return [WQ.width, WQ.height]
    }
    class DW {
      constructor(QQ, WQ) {
        this.preview = QQ, this.showView = WQ
      }
      show(QQ) {
        this.showView(this.preview, QQ)
      }
      resize(QQ, WQ) {
        this.preview.resize(QQ, WQ)
      }
      close() {
        this.preview.close()
      }
    }
    class pW {
      constructor(QQ) {
        this.preview = QQ, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.detachControls = void 0, this.detachControls = function(QQ) {
          const {
            canvas: WQ
          } = QQ;
          let XQ = null;
          const wQ = QQ => {
              var wQ;
              XQ = {
                pointer: QQ.pointerId,
                x: QQ.clientX,
                y: QQ.clientY
              }, null === (wQ = WQ.setPointerCapture) || void 0 === wQ || wQ.call(WQ, QQ.pointerId)
            },
            qQ = WQ => {
              var wQ;
              const qQ = QQ.orbit;
              if ((null === (wQ = XQ) || void 0 === wQ ? void 0 : wQ.pointer) !== WQ.pointerId || null === qQ) return;
              const TQ = WQ.clientX - XQ.x,
                zQ = WQ.clientY - XQ.y;
              XQ = {
                ...XQ,
                x: WQ.clientX,
                y: WQ.clientY
              }, QQ.setOrbit({
                alpha: qQ.alpha - .01 * TQ,
                beta: Math.min(Math.PI - .01, Math.max(.01, qQ.beta - .01 * zQ)),
                radius: qQ.radius
              })
            },
            TQ = QQ => {
              var WQ;
              (null === (WQ = XQ) || void 0 === WQ ? void 0 : WQ.pointer) === QQ.pointerId && (XQ = null)
            },
            zQ = WQ => {
              const XQ = QQ.orbit;
              if (null === XQ) return;
              WQ.preventDefault();
              const wQ = WQ.deltaY * (WQ.deltaMode === WheelEvent.DOM_DELTA_LINE ? 40 : WQ.deltaMode === WheelEvent.DOM_DELTA_PAGE ? 800 : 1),
                qQ = Math.min(100, Math.max(5, XQ.radius + .08 * wQ));
              QQ.setOrbit({
                ...XQ,
                radius: qQ
              })
            };
          return WQ.style.touchAction = "none", WQ.addEventListener("pointerdown", wQ), WQ.addEventListener("pointermove", qQ), WQ.addEventListener("pointerup", TQ), WQ.addEventListener("pointercancel", TQ), WQ.addEventListener("wheel", zQ, {
            passive: !1
          }), () => {
            WQ.removeEventListener("pointerdown", wQ), WQ.removeEventListener("pointermove", qQ), WQ.removeEventListener("pointerup", TQ), WQ.removeEventListener("pointercancel", TQ), WQ.removeEventListener("wheel", zQ)
          }
        }(QQ), this.dev = {
          canvas: () => QQ.canvas,
          isolateHead: () => {
            console.warn(`${gW} isolateHead: noa's character preview only`)
          }
        }, this.apply(), this.ready = QQ.untilSettled().then((() => {
          if (QQ.isStopped) throw new Error(`${gW} the previews stopped before the character drew`);
          this.built = !0
        }))
      }
      isReady() {
        return this.built && !this.preview.isClosed
      }
      setCosmetic(QQ, WQ) {
        this.cosmetics[QQ] = WQ, this.apply()
      }
      playEmote(QQ) {
        null === QQ || QQ !== this.emote ? (this.emote = QQ, this.apply()) : this.preview.replay()
      }
      untilDrawn(QQ) {
        return this.preview.untilSettled()
      }
      setOrbit(QQ) {
        let {
          yaw: WQ,
          pitch: XQ,
          radius: wQ
        } = QQ;
        const qQ = this.preview.orbit;
        null !== qQ && this.preview.setOrbit({
          alpha: WQ,
          beta: XQ,
          radius: null !== wQ && void 0 !== wQ ? wQ : qQ.radius
        })
      }
      resetCamera() {}
      resize(QQ, WQ) {
        this.preview.resize(QQ, WQ)
      }
      close() {
        this.detachControls(), this.preview.close()
      }
      apply() {
        var QQ;
        this.preview.setPlayer(JSON.stringify(this.cosmetics), JW, null === (QQ = this.emote) ? -1 : BW(QQ))
      }
    }

    function GW(QQ, WQ) {
      let {
        mobType: XQ,
        variation: wQ,
        animation: qQ
      } = WQ;
      QQ.setMob(rW(XQ), null !== wQ && void 0 !== wQ ? wQ : "", 1, jW(qQ))
    }

    function UW(QQ, WQ) {
      let {
        mobType: XQ,
        variation: wQ,
        metaInfo: qQ,
        tamed: TQ
      } = WQ;
      QQ.setPet(rW(XQ), wQ, qQ, TQ)
    }
    const bW = {
      aimed: .533 / 1.15 * 1.1,
      ready: .16 / .85 * 1.1
    };
    class vW {
      constructor(QQ, WQ, XQ, wQ) {
        this.preview = null, this.closed = !1, this.figure = null, this.shown = !1, this.order = "", this.span = {
          left: 0,
          width: 0
        }, this.lineup = [0, 0], this.given = null, this.loaded = !1, QQ(XQ.width, wQ[1], wQ).then((QQ => {
          if (this.closed) return void QQ.close();
          const {
            style: XQ
          } = QQ.canvas;
          XQ.position = "absolute", XQ.top = "0", XQ.visibility = "hidden", yW(WQ, QQ), this.preview = QQ, this.apply()
        })).catch((QQ => {
          console.error(`${gW} couldn't open a lineup figure`, QQ)
        }))
      }
      update(QQ, WQ, XQ, wQ, qQ) {
        this.figure = QQ, this.shown = WQ, this.order = XQ, this.span = wQ, this.lineup = qQ, this.apply()
      }
      close() {
        var QQ;
        this.closed = !0, null === (QQ = this.preview) || void 0 === QQ || QQ.close(), this.preview = null
      }
      apply() {
        const {
          preview: QQ,
          figure: WQ,
          lineup: XQ
        } = this;
        if (null === QQ || null === WQ) return;
        if (this.given !== WQ) {
          var wQ;
          this.given = WQ, this.loaded = !1;
          const XQ = null === WQ.Qp ? 0 : null !== (wQ = (0, FW.c)(WQ.Qp)) && void 0 !== wQ ? wQ : 0;
          QQ.setFigure(function(QQ) {
            return JSON.stringify(Object.fromEntries(QQ.cosmetics))
          }(WQ), XQ, jW(WQ.animation), WQ.size), QQ.untilSettled().then((() => {
            this.given === WQ && (this.loaded = !0, this.apply())
          }))
        }
        const {
          left: qQ,
          width: TQ
        } = this.span;
        QQ.resize(TQ, XQ[1], XQ);
        const {
          style: zQ
        } = QQ.canvas;
        zQ.left = `${qQ}px`, zQ.width = `${TQ}px`, zQ.zIndex = this.order, zQ.visibility = this.shown && this.loaded ? "visible" : "hidden"
      }
    }
    class dW {
      constructor(QQ, WQ) {
        this.open = WQ, this.layer = void 0, this.figures = [], this.view = {
          figures: [],
          shown: []
        }, this.size = void 0, this.size = VW(QQ), this.layer = document.createElement("div");
        const {
          style: XQ
        } = this.layer;
        XQ.position = "relative", XQ.isolation = "isolate", XQ.overflow = "hidden", XQ.width = "100%", XQ.height = "100%", XQ.pointerEvents = "none", QQ.appendChild(this.layer)
      }
      show(QQ) {
        this.view = QQ, this.place()
      }
      resize(QQ, WQ) {
        this.size = [QQ, WQ], this.place()
      }
      close() {
        for (const QQ of this.figures) QQ.close();
        this.figures = [], this.layer.remove()
      }
      place() {
        const {
          figures: QQ,
          shown: WQ
        } = this.view;
        for (const wQ of this.figures.splice(QQ.length)) wQ.close();
        const {
          size: XQ
        } = this;
        QQ.forEach(((wQ, qQ) => {
          var TQ;
          const zQ = function(QQ, WQ, XQ, wQ) {
            let [qQ, TQ] = wQ;
            const zQ = (QQ + .5) * qQ / WQ,
              sQ = Math.min(Math.max(qQ / WQ, 2 * XQ * TQ), 2 * Math.max(zQ, qQ - zQ));
            return {
              left: zQ - sQ / 2,
              width: sQ
            }
          }(qQ, QQ.length, function(QQ) {
            let {
              animation: WQ,
              size: XQ
            } = QQ;
            const {
              aimed: wQ,
              ready: qQ
            } = bW;
            return (jW(WQ) === PW.gunAimed ? wQ : qQ) * XQ
          }(wQ), XQ);
          this.figures[qQ] ??= new vW(this.open, this.layer, zQ, XQ), this.figures[qQ].update(wQ, null !== (TQ = WQ[qQ]) && void 0 !== TQ && TQ, function(QQ, WQ) {
            return String(Math.round(1e3 * QQ) + WQ)
          }(wQ.size, qQ), zQ, XQ)
        }))
      }
    }
    const HW = {
      player: oQ,
      store: eQ
    };
    class aW {
      constructor(QQ) {
        this.page = QQ
      }
      async openMob(QQ) {
        return new DW(await this.open(QQ, tQ), GW)
      }
      async openPet(QQ) {
        return new DW(await this.open(QQ, tQ), UW)
      }
      openMobLineup(QQ) {
        return new dW(QQ, ((QQ, WQ, XQ) => this.page.openPreview(tQ, QQ, WQ, XQ)))
      }
      async openCharacter(QQ, WQ) {
        return new pW(await this.open(QQ, HW[WQ]))
      }
      async open(QQ, WQ) {
        const [XQ, wQ] = VW(QQ), qQ = await this.page.openPreview(WQ, XQ, wQ);
        return yW(QQ, qQ), qQ
      }
    }
  },
  37041: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      C: () => IQ,
      D: () => jQ,
      E: () => BQ,
      I: () => VQ,
      e: () => wQ,
      g: () => qQ,
      j: () => rQ,
      m: () => yQ,
      q: () => gQ,
      u: () => DQ,
      v: () => FQ,
      z: () => PQ
    });
    const wQ = [{
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

    function qQ(QQ, WQ) {
      const {
        numLines: XQ,
        charsPerLine: qQ
      } = wQ[WQ];
      return pQ(QQ, XQ, qQ, !1)
    }
    const TQ = 7 / 8,
      zQ = .25,
      sQ = 8;

    function FQ(QQ, WQ) {
      return {
        width: Math.min(QQ, sQ) - 2 * zQ,
        height: Math.min(WQ, sQ) - 2 * zQ
      }
    }

    function PQ(QQ, WQ, XQ) {
      const qQ = FQ(QQ, WQ),
        {
          numLines: zQ,
          charsPerLine: sQ
        } = wQ[XQ];
      return {
        numLines: Math.max(1, Math.floor(zQ / TQ * qQ.height)),
        charsPerLine: Math.max(1, Math.floor(sQ * qQ.width))
      }
    }

    function gQ(QQ, WQ, XQ, wQ) {
      const {
        numLines: qQ,
        charsPerLine: TQ
      } = PQ(XQ, wQ, WQ);
      return pQ(QQ, qQ, TQ, !1)
    }
    const JQ = 32e3;

    function rQ(QQ) {
      return QQ.slice(0, JQ)
    }
    const IQ = 512e3,
      jQ = 64,
      BQ = IQ;

    function yQ(QQ, WQ) {
      const XQ = Math.max(0, BQ - WQ),
        wQ = Math.min(IQ, XQ);
      return QQ.slice(0, wQ)
    }
    const VQ = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      fz: {
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

    function DQ(QQ, WQ) {
      const {
        numLines: XQ,
        charsPerLine: wQ
      } = VQ[WQ];
      return pQ(QQ, XQ, wQ, !1)
    }

    function pQ(QQ, WQ, XQ, wQ, qQ) {
      (qQ || wQ) && (QQ = QQ.slice(0, null !== qQ && void 0 !== qQ ? qQ : WQ * XQ));
      const TQ = QQ.split("\n");
      if (TQ.length > WQ && TQ.splice(WQ, TQ.length - WQ), !wQ)
        for (let zQ = 0; zQ < TQ.length; zQ++) {
          const QQ = TQ[zQ];
          QQ.length > XQ && (TQ[zQ] = QQ.substring(0, XQ), TQ.length < WQ && TQ.splice(zQ + 1, 0, QQ.substring(XQ)))
        }
      return TQ.join("\n")
    }
  },
  51207: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/builtInAnimations.anim.38e056f49512e10b7206.gz"
  },
  51209: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/previewAnimations.dat.24d2343c38c8f9b3fb85.gz"
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);