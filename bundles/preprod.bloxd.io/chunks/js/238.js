export const id = 238;
export const ids = [238];
export const modules = {
  37139: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => tH
    });
    var AH = LH(1168);

    function rH(HH) {
      const BH = /(\d*\.?\d+)px/.exec(HH);
      return BH ? Number(BH[1]) : null
    }

    function SH(HH) {
      return HH.split(/[\s,]+/).pop()
    }
    let hH = !1;
    const tH = {
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
      drawText: function(HH, BH, AH, tH, zH, CH) {
        if (zH <= 0 || CH <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: EH,
          fontVariant: XH,
          fontWeight: GH,
          fontSize: YH,
          font: uH
        } = this, QH = [EH, XH, GH, `${YH}px`, uH].filter(Boolean).join(" "), WH = [
          [GH, `${YH}px`, SH(uH)].filter(Boolean).join(" "), `${YH}px sans-serif`
        ], MH = HH.font, xH = function(HH, BH, LH) {
          for (const AH of BH) {
            HH.font = AH;
            const BH = rH(HH.font),
              hH = SH(AH);
            if (null !== BH && Math.abs(BH - LH) <= .5 && HH.font.toLowerCase().includes(hH.toLowerCase())) return AH
          }
          return null
        }(HH, [QH, ...WH], YH);
        xH !== QH && function(HH, BH, AH) {
          hH || (hH = !0, Promise.resolve().then((() => LH(1260))).then((LH => {
            let {
              TQ: rH
            } = LH;
            rH(new Error("A canvas didn't take canvasTxt's font"), {
              font: HH,
              hX: BH,
              drawnWith: null !== AH && void 0 !== AH ? AH : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(QH, MH, xH);
        const vH = rH(HH.font);
        if (null === xH && null !== vH && vH > 0) {
          const LH = YH / vH;
          HH.save();
          try {
            return HH.scale(LH, LH), {
              height: this.drawLines(HH, BH, AH / LH, tH / LH, zH / LH, CH / LH, vH).height * LH
            }
          } finally {
            HH.restore()
          }
        }
        return this.drawLines(HH, BH, AH, tH, zH, CH, YH)
      },
      drawLines: function(HH, BH, LH, rH, SH, hH, tH) {
        const zH = LH + SH,
          CH = rH + hH;
        let EH, XH = rH + hH / 2 + tH / 2;
        "right" === this.align ? (EH = zH, HH.textAlign = "right") : "left" === this.align ? (EH = LH, HH.textAlign = "left") : (EH = LH + SH / 2, HH.textAlign = "center");
        for (const AH of BH) {
          HH.measureText(AH).width >= SH && (BH = BH.replace(AH, ""))
        }
        BH = (0, AH.X)(BH);
        const GH = [],
          YH = BH.split("\n"),
          uH = this.justify ? HH.measureText("\u200a").width : 0;
        YH.forEach((BH => {
          let LH = HH.measureText(BH).width;
          if (LH <= SH) GH.push(BH);
          else {
            let AH = BH;
            const rH = SH;
            let hH, tH, zH;
            for (LH = HH.measureText(AH).width; LH > rH;) {
              for (hH = 0, tH = 0, zH = ""; tH < rH;) hH++, zH = AH.substr(0, hH), tH = HH.measureText(zH).width;
              hH--, zH = zH.substr(0, hH);
              const BH = hH;
              if (" " !== AH.substr(hH, 1)) {
                for (;
                  " " !== AH.substr(hH, 1) && 0 !== hH;) hH--;
                0 === hH && (hH = BH), zH = AH.substr(0, hH)
              }
              zH = this.justify ? this.justifyLine(HH, zH, uH, "\u200a", SH) : zH, AH = AH.substr(hH), LH = HH.measureText(AH).width, GH.push(zH)
            }
            LH > 0 && GH.push(AH)
          }
        }));
        const QH = this.lineHeight ? this.lineHeight : this.getTextHeight(HH, BH),
          WH = QH * (GH.length - 1),
          MH = WH / 2;
        let xH = rH;
        "top" === this.vAlign ? XH = rH + tH : "bottom" === this.vAlign ? (XH = CH - WH, xH = CH) : (xH = rH + hH / 2, XH -= MH), GH.forEach((BH => {
          BH = BH.trim(), HH.fillText(BH, EH, XH), XH += QH
        })), this.debug && (HH.lineWidth = 3, HH.strokeStyle = "#00909e", HH.strokeRect(LH, rH, SH, hH), HH.lineWidth = 2, HH.strokeStyle = "#f6d743", HH.beginPath(), HH.moveTo(EH, rH), HH.lineTo(EH, CH), HH.stroke(), HH.strokeStyle = "#ff6363", HH.beginPath(), HH.moveTo(LH, xH), HH.lineTo(zH, xH), HH.stroke());
        return {
          height: WH + QH
        }
      },
      getTextHeight: function(HH, BH) {
        const LH = HH.textBaseline;
        HH.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: AH
        } = HH.measureText(BH);
        return HH.textBaseline = LH, AH
      },
      justifyLine: function(HH, BH, LH, AH, rH) {
        const SH = BH.trim(),
          hH = HH.measureText(SH).width,
          tH = SH.split(/\s+/).length - 1,
          zH = Math.floor((rH - hH) / LH);
        if (tH <= 0 || zH <= 0) return SH;
        const CH = Math.floor(zH / tH);
        let EH = zH - tH * CH,
          XH = [];
        for (let GH = 0; GH < CH; GH++) XH.push(AH);
        XH = XH.join("");
        return SH.replace(/\s+/g, (HH => {
          const BH = EH > 0 ? XH + AH : XH;
          return EH--, HH + BH
        }))
      }
    }
  },
  37149: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => QH,
      d: () => uH,
      e: () => GH,
      f: () => EH,
      g: () => XH
    });
    var AH = LH(4617),
      rH = LH(317);
    const SH = 1024,
      hH = 1536,
      tH = 2 * AH.m + 1,
      zH = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      CH = 1.5;

    function EH(HH, BH, LH) {
      if ("string" !== typeof HH) return BH;
      try {
        const LH = JSON.parse(HH);
        return LH && "object" === typeof LH ? LH : BH
      } catch (AH) {
        return void 0 !== LH && console.error(`Couldn't parse ${LH}`, AH), BH
      }
    }

    function XH(HH) {
      return EH(HH, null, "a leaderboard's rows")
    }

    function GH(HH, BH) {
      var LH, AH;
      return null !== BH && void 0 !== BH ? BH : {
        status: null !== (LH = HH.status) && void 0 !== LH ? LH : "loading",
        entries: null !== (AH = HH.entries) && void 0 !== AH ? AH : []
      }
    }

    function YH(HH, BH) {
      return "number" === typeof HH && Number.isFinite(HH) && HH > 0 ? HH : BH
    }

    function uH(HH, BH) {
      const LH = YH(HH.size, 1);
      let AH = YH(HH.width, YH(2.5 * LH, 2.5)),
        rH = YH(HH.height, YH(3.75 * LH, 3.75));
      Number.isFinite(SH * rH / AH) && Number.isFinite(hH * AH / rH) || (AH = 2.5, rH = 3.75);
      const tH = rH / AH,
        zH = Math.max(1, Math.min(SH, BH / tH));
      return {
        width: AH,
        height: rH,
        layoutWidth: Math.max(SH, hH / tH),
        layoutHeight: Math.max(hH, SH * tH),
        pixelWidth: Math.round(zH),
        pixelHeight: Math.round(Math.max(1, Math.min(BH, zH * tH)))
      }
    }

    function QH(HH, BH, LH, hH, EH, XH) {
      HH.setTransform(1, 0, 0, 1, 0, 0), HH.fillStyle = rH.K.defaultNameTagBackground, HH.fillRect(0, 0, BH, LH), HH.scale(BH / hH.layoutWidth, LH / hH.layoutHeight), HH.translate((hH.layoutWidth - SH) / 2, 0),
        function(HH, BH, LH, SH) {
          var hH, EH, XH, GH;
          const {
            top: YH,
            around: uH,
            showPlayerText: QH,
            localPlayerDbId: xH
          } = LH, {
            whiteUiText: vH,
            grayUiText: PH,
            yellowUiText: TH
          } = rH.K;
          HH.textBaseline = "middle";
          const UH = function(BH, LH, AH, rH, SH, hH) {
              let tH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              HH.font = `bold ${rH}px 'Jetbrains Mono', monospace`, HH.fillStyle = SH, HH.textAlign = tH;
              let zH = BH.replace(/[\r\n\t]/g, " ");
              if (HH.measureText(zH).width > hH) {
                for (; zH.length > 0 && HH.measureText(`${zH}\u2026`).width > hH;) zH = zH.slice(0, -1);
                zH += "\u2026"
              }
              HH.fillText(zH, LH, AH)
            },
            VH = BH => {
              HH.fillStyle = vH, HH.globalAlpha = .15, HH.fillRect(24, BH, 976, 2), HH.globalAlpha = 1
            },
            OH = null === xH ? null : (0, rH.rc)(xH),
            bH = HH => null !== OH && HH.playerHash === OH,
            kH = WH(YH.entries, AH.o),
            mH = "ready" === YH.status && kH.length > 0,
            oH = null === uH ? [] : WH(uH.entries, tH),
            IH = kH.some(bH),
            fH = null === uH ? null : function(HH) {
              const BH = HH;
              if (!BH || !Number.isFinite(BH.rank) || !Number.isFinite(BH.tied) || !Number.isFinite(BH.total)) return null;
              return BH
            }(uH.standing),
            lH = oH.find(bH),
            KH = kH.find(bH),
            cH = null === fH || void 0 === lH ? null : {
              value: lH.value,
              rank: fH.rank
            },
            eH = MH(kH, void 0 === KH || KH.value === (null === cH || void 0 === cH ? void 0 : cH.value) ? cH : null),
            qH = MH(oH, cH),
            gH = (HH, BH) => {
              const LH = HH.findIndex(bH);
              return LH >= 0 ? BH[LH] : null
            },
            NH = null !== (hH = null !== (EH = null === fH || void 0 === fH ? void 0 : fH.rank) && void 0 !== EH ? EH : gH(oH, qH)) && void 0 !== hH ? hH : gH(kH, eH);
          HH.font = "bold 34px 'Jetbrains Mono', monospace";
          const RH = [...mH ? eH : [], ...IH ? [] : qH],
            jH = Math.min(280, Math.max(0, ...RH.map((BH => HH.measureText(zH.format(BH)).width)))),
            nH = jH <= 80,
            FH = nH ? 80 : 32 + jH,
            DH = nH ? 148 : FH + 28,
            wH = 660 - DH;
          UH(`TOP ${AH.o}  /  ALL TIME`, 24, 52, 28, PH, 976), UH(QH ? String(null !== (XH = BH.title) && void 0 !== XH ? XH : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, vH, 976), UH("RANK", 32, 174, 28, PH, DH - 40), UH("PLAYER", DH, 174, 28, PH, wH), UH(QH ? String(null !== (GH = BH.scoreLabel) && void 0 !== GH ? GH : "Score").slice(0, 24) : "Score", 992, 174, 28, PH, 304, "right"), VH(202);
          const ZH = (SH - 232) / (AH.o + CH + tH),
            dH = 208 + AH.o * ZH,
            aH = dH + CH * ZH,
            sH = (BH, LH, AH, rH) => {
              const SH = bH(BH);
              HH.fillStyle = SH ? TH : vH, HH.globalAlpha = SH ? .15 : rH ? .035 : 0, HH.fillRect(24, AH - ZH / 2 + 1, 976, ZH - 2), HH.globalAlpha = 1;
              const hH = SH ? TH : vH;
              UH(zH.format(LH), FH, AH, 34, hH, nH ? 80 : jH, nH ? "center" : "right"), UH(QH ? String(BH.name).slice(0, 64) : "Player", DH, AH, 34, hH, wH);
              const tH = zH.format(BH.value);
              UH(HH.measureText(tH).width > 304 ? BH.value.toExponential(6) : tH, 992, AH, 34, hH, 304, "right")
            };
          if (mH)
            for (const [AH, rH] of kH.entries()) sH(rH, eH[AH], 208 + (AH + .5) * ZH, AH % 2 === 0);
          else {
            const HH = "error" === YH.status,
              BH = HH ? "Couldn't load leaderboard" : "ready" === YH.status ? "No scores yet" : "Loading leaderboard\u2026",
              LH = HH ? "Trying again shortly" : "ready" === YH.status ? "Be the first on the board!" : "Fetching the top players",
              AH = (208 + dH) / 2;
            UH(BH, 512, AH - 28, 40, HH ? rH.K.redUiText : vH, 960, "center"), UH(LH, 512, AH + 27, 30, PH, 960, "center")
          }
          const JH = dH + CH * ZH / 2;
          if (null === NH) VH(JH);
          else {
            const BH = null === fH ? 0 : fH.tied - 1,
              LH = `YOUR RANK #${zH.format(NH)}${null===fH?"":` of ${zH.format(fH.total)}`}`;
            HH.font = "bold 36px 'Jetbrains Mono', monospace";
            const AH = Math.max(20, Math.min(36, Math.floor(34560 / HH.measureText(LH).width)));
            UH(LH, 512, JH - (BH > 0 ? 15 : 0), AH, TH, 960, "center"), BH > 0 && UH(`Tied with ${zH.format(BH)} other${1===BH?"":"s"}`, 512, JH + 24, 24, PH, 960, "center")
          }
          if (null === uH) return;
          const iH = aH + tH * ZH / 2;
          if (IH) UH(`You're in the top ${AH.o}!`, 512, iH, 40, TH, 960, "center");
          else if (0 === oH.length) UH("You're not on this board yet", 512, iH, 34, PH, 960, "center");
          else
            for (const [AH, rH] of oH.entries()) sH(rH, qH[AH], aH + (AH + .5) * ZH, AH % 2 === 0)
        }(HH, EH, XH, hH.layoutHeight)
    }

    function WH(HH, BH) {
      return Array.isArray(HH) ? HH.slice(0, BH).filter((HH => HH && Number.isFinite(HH.rank) && Number.isFinite(HH.value))) : []
    }

    function MH(HH, BH) {
      const LH = [];
      let AH = !1;
      return HH.forEach(((rH, SH) => {
        if (null !== BH && rH.value === BH.value) return void LH.push(BH.rank);
        const hH = SH > 0 && rH.value === HH[SH - 1].value;
        hH || (AH = 0 === SH && 1 !== rH.rank), LH.push(hH && !AH ? LH[SH - 1] : rH.rank)
      })), LH
    }
  },
  37120: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => rH,
      e: () => SH
    });
    const AH = 32;

    function rH(HH) {
      return Array.from(HH).length
    }

    function SH(HH) {
      const BH = [""];
      let LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        rH = "";
      const SH = () => {
        BH.push(""), LH = 0, rH = ""
      };
      for (const hH of HH.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(hH)) SH();
        else if (/^\s+$/.test(hH)) rH += hH;
      else if (hH.length > 0) {
        const HH = Array.from(hH);
        LH > 0 && LH + rH.length + HH.length > AH && SH(), BH[BH.length - 1] += rH, LH += rH.length, rH = "";
        for (const rH of HH) LH >= AH && SH(), BH[BH.length - 1] += rH, LH++
      }
      return BH[BH.length - 1] += rH, BH
    }
  },
  37146: (HH, BH, LH) => {
    LH.d(BH, {
      C: () => uH,
      E: () => QH,
      F: () => MH,
      c: () => AH,
      e: () => XH,
      g: () => rH,
      h: () => GH,
      l: () => WH,
      n: () => EH,
      r: () => xH,
      u: () => zH,
      y: () => CH,
      z: () => YH
    });
    const AH = [{
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

    function rH(HH, BH) {
      const {
        numLines: LH,
        charsPerLine: rH
      } = AH[BH];
      return vH(HH, LH, rH, !1)
    }
    const SH = 7 / 8,
      hH = .25,
      tH = 8;

    function zH(HH, BH) {
      return {
        width: Math.min(HH, tH) - 2 * hH,
        height: Math.min(BH, tH) - 2 * hH
      }
    }

    function CH(HH, BH, LH) {
      const rH = zH(HH, BH),
        {
          numLines: hH,
          charsPerLine: tH
        } = AH[LH];
      return {
        numLines: Math.max(1, Math.floor(hH / SH * rH.height)),
        charsPerLine: Math.max(1, Math.floor(tH * rH.width))
      }
    }

    function EH(HH, BH, LH, AH) {
      const {
        numLines: rH,
        charsPerLine: SH
      } = CH(LH, AH, BH);
      return vH(HH, rH, SH, !1)
    }
    const XH = 32e3;

    function GH(HH) {
      return HH.slice(0, XH)
    }
    const YH = 512e3,
      uH = 64,
      QH = YH;

    function WH(HH, BH) {
      const LH = Math.max(0, QH - BH),
        AH = Math.min(YH, LH);
      return HH.slice(0, AH)
    }
    const MH = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      qh: {
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

    function xH(HH, BH) {
      const {
        numLines: LH,
        charsPerLine: AH
      } = MH[BH];
      return vH(HH, LH, AH, !1)
    }

    function vH(HH, BH, LH, AH, rH) {
      (rH || AH) && (HH = HH.slice(0, null !== rH && void 0 !== rH ? rH : BH * LH));
      const SH = HH.split("\n");
      if (SH.length > BH && SH.splice(BH, SH.length - BH), !AH)
        for (let hH = 0; hH < SH.length; hH++) {
          const HH = SH[hH];
          HH.length > LH && (SH[hH] = HH.substring(0, LH), SH.length < BH && SH.splice(hH + 1, 0, HH.substring(LH)))
        }
      return SH.join("\n")
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);