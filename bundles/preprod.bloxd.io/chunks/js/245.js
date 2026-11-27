export const id = 245;
export const ids = [245];
export const modules = {
  37415: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => LW
    });
    var mW = OW(1217);

    function EW(WW) {
      const iW = /(\d*\.?\d+)px/.exec(WW);
      return iW ? Number(iW[1]) : null
    }

    function NW(WW) {
      return WW.split(/[\s,]+/).pop()
    }
    let PW = !1;
    const LW = {
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
      drawText: function(WW, iW, mW, LW, cW, wW) {
        if (cW <= 0 || wW <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: tW,
          fontVariant: ZW,
          fontWeight: xW,
          fontSize: lW,
          font: AW
        } = this, bW = [tW, ZW, xW, `${lW}px`, AW].filter(Boolean).join(" "), jW = [
          [xW, `${lW}px`, NW(AW)].filter(Boolean).join(" "), `${lW}px sans-serif`
        ], UW = WW.font, kW = function(WW, iW, OW) {
          for (const mW of iW) {
            WW.font = mW;
            const iW = EW(WW.font),
              PW = NW(mW);
            if (null !== iW && Math.abs(iW - OW) <= .5 && WW.font.toLowerCase().includes(PW.toLowerCase())) return mW
          }
          return null
        }(WW, [bW, ...jW], lW);
        kW !== bW && function(WW, iW, mW) {
          PW || (PW = !0, Promise.resolve().then((() => OW(1303))).then((OW => {
            let {
              ub: EW
            } = OW;
            EW(new Error("A canvas didn't take canvasTxt's font"), {
              font: WW,
              EZ: iW,
              drawnWith: null !== mW && void 0 !== mW ? mW : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(bW, UW, kW);
        const sW = EW(WW.font);
        if (null === kW && null !== sW && sW > 0) {
          const OW = lW / sW;
          WW.save();
          try {
            return WW.scale(OW, OW), {
              height: this.drawLines(WW, iW, mW / OW, LW / OW, cW / OW, wW / OW, sW).height * OW
            }
          } finally {
            WW.restore()
          }
        }
        return this.drawLines(WW, iW, mW, LW, cW, wW, lW)
      },
      drawLines: function(WW, iW, OW, EW, NW, PW, LW) {
        const cW = OW + NW,
          wW = EW + PW;
        let tW, ZW = EW + PW / 2 + LW / 2;
        "right" === this.align ? (tW = cW, WW.textAlign = "right") : "left" === this.align ? (tW = OW, WW.textAlign = "left") : (tW = OW + NW / 2, WW.textAlign = "center");
        for (const mW of iW) {
          WW.measureText(mW).width >= NW && (iW = iW.replace(mW, ""))
        }
        iW = (0, mW.Z)(iW);
        const xW = [],
          lW = iW.split("\n"),
          AW = this.justify ? WW.measureText("\u200a").width : 0;
        lW.forEach((iW => {
          let OW = WW.measureText(iW).width;
          if (OW <= NW) xW.push(iW);
          else {
            let mW = iW;
            const EW = NW;
            let PW, LW, cW;
            for (OW = WW.measureText(mW).width; OW > EW;) {
              for (PW = 0, LW = 0, cW = ""; LW < EW;) PW++, cW = mW.substr(0, PW), LW = WW.measureText(cW).width;
              PW--, cW = cW.substr(0, PW);
              const iW = PW;
              if (" " !== mW.substr(PW, 1)) {
                for (;
                  " " !== mW.substr(PW, 1) && 0 !== PW;) PW--;
                0 === PW && (PW = iW), cW = mW.substr(0, PW)
              }
              cW = this.justify ? this.justifyLine(WW, cW, AW, "\u200a", NW) : cW, mW = mW.substr(PW), OW = WW.measureText(mW).width, xW.push(cW)
            }
            OW > 0 && xW.push(mW)
          }
        }));
        const bW = this.lineHeight ? this.lineHeight : this.getTextHeight(WW, iW),
          jW = bW * (xW.length - 1),
          UW = jW / 2;
        let kW = EW;
        "top" === this.vAlign ? ZW = EW + LW : "bottom" === this.vAlign ? (ZW = wW - jW, kW = wW) : (kW = EW + PW / 2, ZW -= UW), xW.forEach((iW => {
          iW = iW.trim(), WW.fillText(iW, tW, ZW), ZW += bW
        })), this.debug && (WW.lineWidth = 3, WW.strokeStyle = "#00909e", WW.strokeRect(OW, EW, NW, PW), WW.lineWidth = 2, WW.strokeStyle = "#f6d743", WW.beginPath(), WW.moveTo(tW, EW), WW.lineTo(tW, wW), WW.stroke(), WW.strokeStyle = "#ff6363", WW.beginPath(), WW.moveTo(OW, kW), WW.lineTo(cW, kW), WW.stroke());
        return {
          height: jW + bW
        }
      },
      getTextHeight: function(WW, iW) {
        const OW = WW.textBaseline;
        WW.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: mW
        } = WW.measureText(iW);
        return WW.textBaseline = OW, mW
      },
      justifyLine: function(WW, iW, OW, mW, EW) {
        const NW = iW.trim(),
          PW = WW.measureText(NW).width,
          LW = NW.split(/\s+/).length - 1,
          cW = Math.floor((EW - PW) / OW);
        if (LW <= 0 || cW <= 0) return NW;
        const wW = Math.floor(cW / LW);
        let tW = cW - LW * wW,
          ZW = [];
        for (let xW = 0; xW < wW; xW++) ZW.push(mW);
        ZW = ZW.join("");
        return NW.replace(/\s+/g, (WW => {
          const iW = tW > 0 ? ZW + mW : ZW;
          return tW--, WW + iW
        }))
      }
    }
  },
  37425: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => bW,
      c: () => AW,
      d: () => xW,
      g: () => tW,
      k: () => ZW
    });
    var mW = OW(2937),
      EW = OW(344);
    const NW = 1024,
      PW = 1536,
      LW = 2 * mW.l + 1,
      cW = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      wW = 1.5;

    function tW(WW, iW, OW) {
      if ("string" !== typeof WW) return iW;
      try {
        const OW = JSON.parse(WW);
        return OW && "object" === typeof OW ? OW : iW
      } catch (mW) {
        return void 0 !== OW && console.error(`Couldn't parse ${OW}`, mW), iW
      }
    }

    function ZW(WW) {
      return tW(WW, null, "a leaderboard's rows")
    }

    function xW(WW, iW) {
      var OW, mW;
      return null !== iW && void 0 !== iW ? iW : {
        status: null !== (OW = WW.status) && void 0 !== OW ? OW : "loading",
        entries: null !== (mW = WW.entries) && void 0 !== mW ? mW : []
      }
    }

    function lW(WW, iW) {
      return "number" === typeof WW && Number.isFinite(WW) && WW > 0 ? WW : iW
    }

    function AW(WW, iW) {
      const OW = lW(WW.size, 1);
      let mW = lW(WW.width, lW(2.5 * OW, 2.5)),
        EW = lW(WW.height, lW(3.75 * OW, 3.75));
      Number.isFinite(NW * EW / mW) && Number.isFinite(PW * mW / EW) || (mW = 2.5, EW = 3.75);
      const LW = EW / mW,
        cW = Math.max(1, Math.min(NW, iW / LW));
      return {
        width: mW,
        height: EW,
        layoutWidth: Math.max(NW, PW / LW),
        layoutHeight: Math.max(PW, NW * LW),
        pixelWidth: Math.round(cW),
        pixelHeight: Math.round(Math.max(1, Math.min(iW, cW * LW)))
      }
    }

    function bW(WW, iW, OW, PW, tW, ZW) {
      WW.setTransform(1, 0, 0, 1, 0, 0), WW.fillStyle = EW.M.defaultNameTagBackground, WW.fillRect(0, 0, iW, OW), WW.scale(iW / PW.layoutWidth, OW / PW.layoutHeight), WW.translate((PW.layoutWidth - NW) / 2, 0),
        function(WW, iW, OW, NW) {
          var PW, tW, ZW, xW;
          const {
            top: lW,
            around: AW,
            showPlayerText: bW,
            localPlayerDbId: kW
          } = OW, {
            whiteUiText: sW,
            grayUiText: MW,
            yellowUiText: KW
          } = EW.M;
          WW.textBaseline = "middle";
          const SW = function(iW, OW, mW, EW, NW, PW) {
              let LW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              WW.font = `bold ${EW}px 'Jetbrains Mono', monospace`, WW.fillStyle = NW, WW.textAlign = LW;
              let cW = iW.replace(/[\r\n\t]/g, " ");
              if (WW.measureText(cW).width > PW) {
                for (; cW.length > 0 && WW.measureText(`${cW}\u2026`).width > PW;) cW = cW.slice(0, -1);
                cW += "\u2026"
              }
              WW.fillText(cW, OW, mW)
            },
            YW = iW => {
              WW.fillStyle = sW, WW.globalAlpha = .15, WW.fillRect(24, iW, 976, 2), WW.globalAlpha = 1
            },
            yW = null === kW ? null : (0, EW.jc)(kW),
            TW = WW => null !== yW && WW.playerHash === yW,
            JW = jW(lW.entries, mW.n),
            hW = "ready" === lW.status && JW.length > 0,
            HW = null === AW ? [] : jW(AW.entries, LW),
            nW = JW.some(TW),
            uW = null === AW ? null : function(WW) {
              const iW = WW;
              if (!iW || !Number.isFinite(iW.rank) || !Number.isFinite(iW.tied) || !Number.isFinite(iW.total)) return null;
              return iW
            }(AW.standing),
            oW = HW.find(TW),
            dW = JW.find(TW),
            eW = null === uW || void 0 === oW ? null : {
              value: oW.value,
              rank: uW.rank
            },
            vW = UW(JW, void 0 === dW || dW.value === (null === eW || void 0 === eW ? void 0 : eW.value) ? eW : null),
            gW = UW(HW, eW),
            DW = (WW, iW) => {
              const OW = WW.findIndex(TW);
              return OW >= 0 ? iW[OW] : null
            },
            VW = null !== (PW = null !== (tW = null === uW || void 0 === uW ? void 0 : uW.rank) && void 0 !== tW ? tW : DW(HW, gW)) && void 0 !== PW ? PW : DW(JW, vW);
          WW.font = "bold 34px 'Jetbrains Mono', monospace";
          const pW = [...hW ? vW : [], ...nW ? [] : gW],
            fW = Math.min(280, Math.max(0, ...pW.map((iW => WW.measureText(cW.format(iW)).width)))),
            CW = fW <= 80,
            XW = CW ? 80 : 32 + fW,
            BW = CW ? 148 : XW + 28,
            qW = 660 - BW;
          SW(`TOP ${mW.n}  /  ALL TIME`, 24, 52, 28, MW, 976), SW(bW ? String(null !== (ZW = iW.title) && void 0 !== ZW ? ZW : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, sW, 976), SW("RANK", 32, 174, 28, MW, BW - 40), SW("PLAYER", BW, 174, 28, MW, qW), SW(bW ? String(null !== (xW = iW.scoreLabel) && void 0 !== xW ? xW : "Score").slice(0, 24) : "Score", 992, 174, 28, MW, 304, "right"), YW(202);
          const RW = (NW - 232) / (mW.n + wW + LW),
            GW = 208 + mW.n * RW,
            IW = GW + wW * RW,
            aW = (iW, OW, mW, EW) => {
              const NW = TW(iW);
              WW.fillStyle = NW ? KW : sW, WW.globalAlpha = NW ? .15 : EW ? .035 : 0, WW.fillRect(24, mW - RW / 2 + 1, 976, RW - 2), WW.globalAlpha = 1;
              const PW = NW ? KW : sW;
              SW(cW.format(OW), XW, mW, 34, PW, CW ? 80 : fW, CW ? "center" : "right"), SW(bW ? String(iW.name).slice(0, 64) : "Player", BW, mW, 34, PW, qW);
              const LW = cW.format(iW.value);
              SW(WW.measureText(LW).width > 304 ? iW.value.toExponential(6) : LW, 992, mW, 34, PW, 304, "right")
            };
          if (hW)
            for (const [mW, EW] of JW.entries()) aW(EW, vW[mW], 208 + (mW + .5) * RW, mW % 2 === 0);
          else {
            const WW = "error" === lW.status,
              iW = WW ? "Couldn't load leaderboard" : "ready" === lW.status ? "No scores yet" : "Loading leaderboard\u2026",
              OW = WW ? "Trying again shortly" : "ready" === lW.status ? "Be the first on the board!" : "Fetching the top players",
              mW = (208 + GW) / 2;
            SW(iW, 512, mW - 28, 40, WW ? EW.M.redUiText : sW, 960, "center"), SW(OW, 512, mW + 27, 30, MW, 960, "center")
          }
          const rW = GW + wW * RW / 2;
          if (null === VW) YW(rW);
          else {
            const iW = null === uW ? 0 : uW.tied - 1,
              OW = `YOUR RANK #${cW.format(VW)}${null===uW?"":` of ${cW.format(uW.total)}`}`;
            WW.font = "bold 36px 'Jetbrains Mono', monospace";
            const mW = Math.max(20, Math.min(36, Math.floor(34560 / WW.measureText(OW).width)));
            SW(OW, 512, rW - (iW > 0 ? 15 : 0), mW, KW, 960, "center"), iW > 0 && SW(`Tied with ${cW.format(iW)} other${1===iW?"":"s"}`, 512, rW + 24, 24, MW, 960, "center")
          }
          if (null === AW) return;
          const zW = IW + LW * RW / 2;
          if (nW) SW(`You're in the top ${mW.n}!`, 512, zW, 40, KW, 960, "center");
          else if (0 === HW.length) SW("You're not on this board yet", 512, zW, 34, MW, 960, "center");
          else
            for (const [mW, EW] of HW.entries()) aW(EW, gW[mW], IW + (mW + .5) * RW, mW % 2 === 0)
        }(WW, tW, ZW, PW.layoutHeight)
    }

    function jW(WW, iW) {
      return Array.isArray(WW) ? WW.slice(0, iW).filter((WW => WW && Number.isFinite(WW.rank) && Number.isFinite(WW.value))) : []
    }

    function UW(WW, iW) {
      const OW = [];
      let mW = !1;
      return WW.forEach(((EW, NW) => {
        if (null !== iW && EW.value === iW.value) return void OW.push(iW.rank);
        const PW = NW > 0 && EW.value === WW[NW - 1].value;
        PW || (mW = 0 === NW && 1 !== EW.rank), OW.push(PW && !mW ? OW[NW - 1] : EW.rank)
      })), OW
    }
  },
  37348: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => EW,
      f: () => NW
    });
    const mW = 32;

    function EW(WW) {
      return Array.from(WW).length
    }

    function NW(WW) {
      const iW = [""];
      let OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        EW = "";
      const NW = () => {
        iW.push(""), OW = 0, EW = ""
      };
      for (const PW of WW.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(PW)) NW();
        else if (/^\s+$/.test(PW)) EW += PW;
      else if (PW.length > 0) {
        const WW = Array.from(PW);
        OW > 0 && OW + EW.length + WW.length > mW && NW(), iW[iW.length - 1] += EW, OW += EW.length, EW = "";
        for (const EW of WW) OW >= mW && NW(), iW[iW.length - 1] += EW, OW++
      }
      return iW[iW.length - 1] += EW, iW
    }
  },
  37369: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => SW,
      h: () => hW,
      k: () => HW,
      o: () => nW
    });
    var mW = OW(37371),
      EW = OW(7912),
      NW = OW(7998),
      PW = OW(37373),
      LW = OW(37375),
      cW = OW(37380),
      wW = OW(8308),
      tW = OW(8437),
      ZW = OW(37383),
      xW = OW(8647),
      lW = OW(7787),
      AW = OW(8930),
      bW = OW(37389),
      jW = OW(37398),
      UW = OW(8956),
      kW = OW(37403),
      sW = OW(37410),
      MW = OW(344);
    const KW = {
        redTeam: NW.d,
        blueTeam: jW.f,
        greenTeam: sW.g,
        yellowTeam: UW.f,
        cyanTeam: cW.e,
        whiteTeam: lW.faPlus,
        pinkTeam: tW.h,
        grayTeam: ZW.f,
        blackTeam: bW.g,
        orangeTeam: kW.g,
        lilacTeam: PW.f,
        purpleTeam: xW.f,
        magentaTeam: LW.g,
        brownTeam: mW.i,
        limeTeam: EW.faBolt,
        lightGrayTeam: wW.d,
        lightBlueTeam: AW.f
      },
      SW = Object.fromEntries(Object.values(KW).map((WW => [YW(WW), WW])));

    function YW(WW) {
      return `team-${WW.iconName}`
    }
    const yW = new Map;
    for (const [uW, oW] of Object.entries(KW)) {
      const WW = YW(oW),
        iW = MW.M[uW];
      iW && yW.set(iW.toLowerCase(), {
        icon: WW,
        mainRGB: "transparent",
        chatTag: [],
        nameTag: {
          iconRGB: "white",
          iconShadowRGB: "black"
        },
        visible: !0
      })
    }
    let TW = !1;
    const JW = new Set;

    function hW(WW) {
      if (WW !== TW) {
        TW = WW;
        for (const WW of JW) WW()
      }
    }

    function HW(WW) {
      var iW;
      return "string" === typeof WW && TW && null !== (iW = yW.get(WW.toLowerCase())) && void 0 !== iW ? iW : null
    }

    function nW(WW) {
      return JW.add(WW), () => {
        JW.delete(WW)
      }
    }
  },
  37423: (WW, iW, OW) => {
    OW.d(iW, {
      A: () => ZW,
      B: () => bW,
      D: () => jW,
      F: () => UW,
      G: () => sW,
      d: () => EW,
      g: () => lW,
      k: () => PW,
      m: () => AW,
      o: () => kW,
      s: () => xW,
      t: () => MW,
      u: () => NW,
      x: () => tW
    });
    var mW = OW(2012);
    const EW = [{
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

    function NW(WW) {
      return (0, mW.r)(WW.toWellFormed().replace(/\uFFFD+/g, "\ufffd"))
    }

    function PW(WW, iW) {
      const {
        numLines: OW,
        charsPerLine: mW
      } = EW[iW];
      return KW(WW, OW, mW, !1)
    }
    const LW = 7 / 8,
      cW = .25,
      wW = 8;

    function tW(WW, iW) {
      return {
        width: Math.min(WW, wW) - 2 * cW,
        height: Math.min(iW, wW) - 2 * cW
      }
    }

    function ZW(WW, iW, OW) {
      const mW = tW(WW, iW),
        {
          numLines: NW,
          charsPerLine: PW
        } = EW[OW];
      return {
        numLines: Math.max(1, Math.floor(NW / LW * mW.height)),
        charsPerLine: Math.max(1, Math.floor(PW * mW.width))
      }
    }

    function xW(WW, iW, OW, mW) {
      const {
        numLines: EW,
        charsPerLine: NW
      } = ZW(OW, mW, iW);
      return KW(WW, EW, NW, !1)
    }
    const lW = 32e3;

    function AW(WW) {
      return WW.slice(0, lW)
    }
    const bW = 512e3,
      jW = 64,
      UW = bW;

    function kW(WW, iW) {
      const OW = Math.max(0, UW - iW),
        mW = Math.min(bW, OW);
      return WW.slice(0, mW)
    }
    const sW = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      kt: {
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

    function MW(WW, iW) {
      const {
        numLines: OW,
        charsPerLine: mW
      } = sW[iW];
      return KW(WW, OW, mW, !1)
    }

    function KW(WW, iW, OW, mW, EW) {
      (EW || mW) && (WW = WW.slice(0, null !== EW && void 0 !== EW ? EW : iW * OW));
      const NW = WW.split("\n");
      if (NW.length > iW && NW.splice(iW, NW.length - iW), !mW)
        for (let PW = 0; PW < NW.length; PW++) {
          const WW = NW[PW];
          WW.length > OW && (NW[PW] = WW.substring(0, OW), NW.length < iW && NW.splice(PW + 1, 0, WW.substring(OW)))
        }
      return NW.join("\n")
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);