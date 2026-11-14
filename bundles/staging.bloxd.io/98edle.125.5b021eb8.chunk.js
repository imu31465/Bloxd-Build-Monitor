export const id = 125;
export const ids = [125];
export const modules = {
  38262: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => bR,
      g: () => AW
    });
    var wW = MW(2415);
    let CW = null,
      zR = null;

    function AW() {
      return zR ??= MW.e(188).then((() => MW(34645))).then((WW => {
        let {
          ITEM_SPRITES: RW,
          ITEM_SPRITES_WITHOUT_FILE: MW,
          ITEM_FILES_WITHOUT_SPRITE: zR
        } = WW;
        CW = function(WW, RW, MW) {
          const CW = new Set,
            zR = (0, wW.y)(RW);
          let AW = 0;
          for (const [wW, bR] of WW.entries()) wW === zR[AW] ? AW++ : CW.add(bR);
          if ("" !== MW)
            for (const bR of MW.split(wW.s)) CW.add(bR);
          return CW
        }(RW.split(wW.s), MW, zR)
      }), (WW => {
        throw zR = null, WW
      })), zR
    }

    function bR(WW) {
      var RW, MW;
      return null !== (RW = null === (MW = CW) || void 0 === MW ? void 0 : MW.has(WW)) && void 0 !== RW && RW
    }
  },
  36698: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => bR
    });
    var wW = MW(1053);

    function CW(WW) {
      const RW = /(\d*\.?\d+)px/.exec(WW);
      return RW ? Number(RW[1]) : null
    }

    function zR(WW) {
      return WW.split(/[\s,]+/).pop()
    }
    let AW = !1;
    const bR = {
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
      drawText: function(WW, RW, wW, bR, yR, NW) {
        if (yR <= 0 || NW <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: eW,
          fontVariant: BW,
          fontWeight: tR,
          fontSize: TW,
          font: gR
        } = this, iR = [eW, BW, tR, `${TW}px`, gR].filter(Boolean).join(" "), YW = [
          [tR, `${TW}px`, zR(gR)].filter(Boolean).join(" "), `${TW}px sans-serif`
        ], JW = WW.font, PW = function(WW, RW, MW) {
          for (const wW of RW) {
            WW.font = wW;
            const RW = CW(WW.font),
              AW = zR(wW);
            if (null !== RW && Math.abs(RW - MW) <= .5 && WW.font.toLowerCase().includes(AW.toLowerCase())) return wW
          }
          return null
        }(WW, [iR, ...YW], TW);
        PW !== iR && function(WW, RW, wW) {
          AW || (AW = !0, Promise.resolve().then((() => MW(920))).then((MW => {
            let {
              jz: CW
            } = MW;
            CW(new Error("A canvas didn't take canvasTxt's font"), {
              font: WW,
              kept: RW,
              drawnWith: null !== wW && void 0 !== wW ? wW : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(iR, JW, PW);
        const IW = CW(WW.font);
        if (null === PW && null !== IW && IW > 0) {
          const MW = TW / IW;
          WW.save();
          try {
            return WW.scale(MW, MW), {
              height: this.drawLines(WW, RW, wW / MW, bR / MW, yR / MW, NW / MW, IW).height * MW
            }
          } finally {
            WW.restore()
          }
        }
        return this.drawLines(WW, RW, wW, bR, yR, NW, TW)
      },
      drawLines: function(WW, RW, MW, CW, zR, AW, bR) {
        const yR = MW + zR,
          NW = CW + AW;
        let eW, BW = CW + AW / 2 + bR / 2;
        "right" === this.align ? (eW = yR, WW.textAlign = "right") : "left" === this.align ? (eW = MW, WW.textAlign = "left") : (eW = MW + zR / 2, WW.textAlign = "center");
        for (const wW of RW) {
          WW.measureText(wW).width >= zR && (RW = RW.replace(wW, ""))
        }
        RW = (0, wW.M)(RW);
        const tR = [],
          TW = RW.split("\n"),
          gR = this.justify ? WW.measureText("\u200a").width : 0;
        TW.forEach((RW => {
          let MW = WW.measureText(RW).width;
          if (MW <= zR) tR.push(RW);
          else {
            let wW = RW;
            const CW = zR;
            let AW, bR, yR;
            for (MW = WW.measureText(wW).width; MW > CW;) {
              for (AW = 0, bR = 0, yR = ""; bR < CW;) AW++, yR = wW.substr(0, AW), bR = WW.measureText(yR).width;
              AW--, yR = yR.substr(0, AW);
              const RW = AW;
              if (" " !== wW.substr(AW, 1)) {
                for (;
                  " " !== wW.substr(AW, 1) && 0 !== AW;) AW--;
                0 === AW && (AW = RW), yR = wW.substr(0, AW)
              }
              yR = this.justify ? this.justifyLine(WW, yR, gR, "\u200a", zR) : yR, wW = wW.substr(AW), MW = WW.measureText(wW).width, tR.push(yR)
            }
            MW > 0 && tR.push(wW)
          }
        }));
        const iR = this.lineHeight ? this.lineHeight : this.getTextHeight(WW, RW),
          YW = iR * (tR.length - 1),
          JW = YW / 2;
        let PW = CW;
        "top" === this.vAlign ? BW = CW + bR : "bottom" === this.vAlign ? (BW = NW - YW, PW = NW) : (PW = CW + AW / 2, BW -= JW), tR.forEach((RW => {
          RW = RW.trim(), WW.fillText(RW, eW, BW), BW += iR
        })), this.debug && (WW.lineWidth = 3, WW.strokeStyle = "#00909e", WW.strokeRect(MW, CW, zR, AW), WW.lineWidth = 2, WW.strokeStyle = "#f6d743", WW.beginPath(), WW.moveTo(eW, CW), WW.lineTo(eW, NW), WW.stroke(), WW.strokeStyle = "#ff6363", WW.beginPath(), WW.moveTo(MW, PW), WW.lineTo(yR, PW), WW.stroke());
        return {
          height: YW + iR
        }
      },
      getTextHeight: function(WW, RW) {
        const MW = WW.textBaseline;
        WW.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: wW
        } = WW.measureText(RW);
        return WW.textBaseline = MW, wW
      },
      justifyLine: function(WW, RW, MW, wW, CW) {
        const zR = RW.trim(),
          AW = WW.measureText(zR).width,
          bR = zR.split(/\s+/).length - 1,
          yR = Math.floor((CW - AW) / MW);
        if (bR <= 0 || yR <= 0) return zR;
        const NW = Math.floor(yR / bR);
        let eW = yR - bR * NW,
          BW = [];
        for (let tR = 0; tR < NW; tR++) BW.push(wW);
        BW = BW.join("");
        return zR.replace(/\s+/g, (WW => {
          const RW = eW > 0 ? BW + wW : BW;
          return eW--, WW + RW
        }))
      }
    }
  },
  36704: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => iR,
      g: () => gR,
      k: () => tR,
      n: () => eW,
      o: () => BW
    });
    var wW = MW(3357),
      CW = MW(284);
    const zR = 1024,
      AW = 1536,
      bR = 2 * wW.m + 1,
      yR = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      NW = 1.5;

    function eW(WW, RW, MW) {
      if ("string" !== typeof WW) return RW;
      try {
        const MW = JSON.parse(WW);
        return MW && "object" === typeof MW ? MW : RW
      } catch (wW) {
        return void 0 !== MW && console.error(`Couldn't parse ${MW}`, wW), RW
      }
    }

    function BW(WW) {
      return eW(WW, null, "a leaderboard's rows")
    }

    function tR(WW, RW) {
      var MW, wW;
      return null !== RW && void 0 !== RW ? RW : {
        status: null !== (MW = WW.status) && void 0 !== MW ? MW : "loading",
        entries: null !== (wW = WW.entries) && void 0 !== wW ? wW : []
      }
    }

    function TW(WW, RW) {
      return "number" === typeof WW && Number.isFinite(WW) && WW > 0 ? WW : RW
    }

    function gR(WW, RW) {
      const MW = TW(WW.size, 1);
      let wW = TW(WW.width, TW(2.5 * MW, 2.5)),
        CW = TW(WW.height, TW(3.75 * MW, 3.75));
      Number.isFinite(zR * CW / wW) && Number.isFinite(AW * wW / CW) || (wW = 2.5, CW = 3.75);
      const bR = CW / wW,
        yR = Math.max(1, Math.min(zR, RW / bR));
      return {
        width: wW,
        height: CW,
        layoutWidth: Math.max(zR, AW / bR),
        layoutHeight: Math.max(AW, zR * bR),
        pixelWidth: Math.round(yR),
        pixelHeight: Math.round(Math.max(1, Math.min(RW, yR * bR)))
      }
    }

    function iR(WW, RW, MW, AW, eW, BW) {
      WW.setTransform(1, 0, 0, 1, 0, 0), WW.fillStyle = CW.G.defaultNameTagBackground, WW.fillRect(0, 0, RW, MW), WW.scale(RW / AW.layoutWidth, MW / AW.layoutHeight), WW.translate((AW.layoutWidth - zR) / 2, 0),
        function(WW, RW, MW, zR) {
          var AW, eW, BW, tR;
          const {
            top: TW,
            around: gR,
            showPlayerText: iR,
            localPlayerDbId: PW
          } = MW, {
            whiteUiText: IW,
            grayUiText: oW,
            yellowUiText: lW
          } = CW.G;
          WW.textBaseline = "middle";
          const FW = function(RW, MW, wW, CW, zR, AW) {
              let bR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              WW.font = `bold ${CW}px 'Jetbrains Mono', monospace`, WW.fillStyle = zR, WW.textAlign = bR;
              let yR = RW.replace(/[\r\n\t]/g, " ");
              if (WW.measureText(yR).width > AW) {
                for (; yR.length > 0 && WW.measureText(`${yR}\u2026`).width > AW;) yR = yR.slice(0, -1);
                yR += "\u2026"
              }
              WW.fillText(yR, MW, wW)
            },
            fW = RW => {
              WW.fillStyle = IW, WW.globalAlpha = .15, WW.fillRect(24, RW, 976, 2), WW.globalAlpha = 1
            },
            QW = null === PW ? null : (0, CW.rc)(PW),
            rR = WW => null !== QW && WW.playerHash === QW,
            cR = YW(TW.entries, wW.n),
            XW = "ready" === TW.status && cR.length > 0,
            jR = null === gR ? [] : YW(gR.entries, bR),
            kR = cR.some(rR),
            aR = null === gR ? null : function(WW) {
              const RW = WW;
              if (!RW || !Number.isFinite(RW.rank) || !Number.isFinite(RW.tied) || !Number.isFinite(RW.total)) return null;
              return RW
            }(gR.standing),
            sW = jR.find(rR),
            dW = cR.find(rR),
            pW = null === aR || void 0 === sW ? null : {
              value: sW.value,
              rank: aR.rank
            },
            hW = JW(cR, void 0 === dW || dW.value === (null === pW || void 0 === pW ? void 0 : pW.value) ? pW : null),
            UW = JW(jR, pW),
            EW = (WW, RW) => {
              const MW = WW.findIndex(rR);
              return MW >= 0 ? RW[MW] : null
            },
            VW = null !== (AW = null !== (eW = null === aR || void 0 === aR ? void 0 : aR.rank) && void 0 !== eW ? eW : EW(jR, UW)) && void 0 !== AW ? AW : EW(cR, hW);
          WW.font = "bold 34px 'Jetbrains Mono', monospace";
          const mR = [...XW ? hW : [], ...kR ? [] : UW],
            xR = Math.min(280, Math.max(0, ...mR.map((RW => WW.measureText(yR.format(RW)).width)))),
            vR = xR <= 80,
            KW = vR ? 80 : 32 + xR,
            uW = vR ? 148 : KW + 28,
            OW = 660 - uW;
          FW(`TOP ${wW.n}  /  ALL TIME`, 24, 52, 28, oW, 976), FW(iR ? String(null !== (BW = RW.title) && void 0 !== BW ? BW : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, IW, 976), FW("RANK", 32, 174, 28, oW, uW - 40), FW("PLAYER", uW, 174, 28, oW, OW), FW(iR ? String(null !== (tR = RW.scoreLabel) && void 0 !== tR ? tR : "Score").slice(0, 24) : "Score", 992, 174, 28, oW, 304, "right"), fW(202);
          const nW = (zR - 232) / (wW.n + NW + bR),
            GW = 208 + wW.n * nW,
            LW = GW + NW * nW,
            HW = (RW, MW, wW, CW) => {
              const zR = rR(RW);
              WW.fillStyle = zR ? lW : IW, WW.globalAlpha = zR ? .15 : CW ? .035 : 0, WW.fillRect(24, wW - nW / 2 + 1, 976, nW - 2), WW.globalAlpha = 1;
              const AW = zR ? lW : IW;
              FW(yR.format(MW), KW, wW, 34, AW, vR ? 80 : xR, vR ? "center" : "right"), FW(iR ? String(RW.name).slice(0, 64) : "Player", uW, wW, 34, AW, OW);
              const bR = yR.format(RW.value);
              FW(WW.measureText(bR).width > 304 ? RW.value.toExponential(6) : bR, 992, wW, 34, AW, 304, "right")
            };
          if (XW)
            for (const [wW, CW] of cR.entries()) HW(CW, hW[wW], 208 + (wW + .5) * nW, wW % 2 === 0);
          else {
            const WW = "error" === TW.status,
              RW = WW ? "Couldn't load leaderboard" : "ready" === TW.status ? "No scores yet" : "Loading leaderboard\u2026",
              MW = WW ? "Trying again shortly" : "ready" === TW.status ? "Be the first on the board!" : "Fetching the top players",
              wW = (208 + GW) / 2;
            FW(RW, 512, wW - 28, 40, WW ? CW.G.redUiText : IW, 960, "center"), FW(MW, 512, wW + 27, 30, oW, 960, "center")
          }
          const DW = GW + NW * nW / 2;
          if (null === VW) fW(DW);
          else {
            const RW = null === aR ? 0 : aR.tied - 1,
              MW = `YOUR RANK #${yR.format(VW)}${null===aR?"":` of ${yR.format(aR.total)}`}`;
            WW.font = "bold 36px 'Jetbrains Mono', monospace";
            const wW = Math.max(20, Math.min(36, Math.floor(34560 / WW.measureText(MW).width)));
            FW(MW, 512, DW - (RW > 0 ? 15 : 0), wW, lW, 960, "center"), RW > 0 && FW(`Tied with ${yR.format(RW)} other${1===RW?"":"s"}`, 512, DW + 24, 24, oW, 960, "center")
          }
          if (null === gR) return;
          const qR = LW + bR * nW / 2;
          if (kR) FW(`You're in the top ${wW.n}!`, 512, qR, 40, lW, 960, "center");
          else if (0 === jR.length) FW("You're not on this board yet", 512, qR, 34, oW, 960, "center");
          else
            for (const [wW, CW] of jR.entries()) HW(CW, UW[wW], LW + (wW + .5) * nW, wW % 2 === 0)
        }(WW, eW, BW, AW.layoutHeight)
    }

    function YW(WW, RW) {
      return Array.isArray(WW) ? WW.slice(0, RW).filter((WW => WW && Number.isFinite(WW.rank) && Number.isFinite(WW.value))) : []
    }

    function JW(WW, RW) {
      const MW = [];
      let wW = !1;
      return WW.forEach(((CW, zR) => {
        if (null !== RW && CW.value === RW.value) return void MW.push(RW.rank);
        const AW = zR > 0 && CW.value === WW[zR - 1].value;
        AW || (wW = 0 === zR && 1 !== CW.rank), MW.push(AW && !wW ? MW[zR - 1] : CW.rank)
      })), MW
    }
  },
  36889: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => CW,
      e: () => zR
    });
    const wW = 32;

    function CW(WW) {
      return Array.from(WW).length
    }

    function zR(WW) {
      const RW = [""];
      let MW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        CW = "";
      const zR = () => {
        RW.push(""), MW = 0, CW = ""
      };
      for (const AW of WW.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(AW)) zR();
        else if (/^\s+$/.test(AW)) CW += AW;
      else if (AW.length > 0) {
        const WW = Array.from(AW);
        MW > 0 && MW + CW.length + WW.length > wW && zR(), RW[RW.length - 1] += CW, MW += CW.length, CW = "";
        for (const CW of WW) MW >= wW && zR(), RW[RW.length - 1] += CW, MW++
      }
      return RW[RW.length - 1] += CW, RW
    }
  },
  38256: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => AW,
      e: () => bR
    });
    var wW = MW(38262);
    let CW = null,
      zR = null;

    function AW() {
      return CW ??= MW.e(50).then((() => MW(40059))).catch((WW => {
        throw CW = null, WW
      })), CW
    }

    function bR() {
      return zR ??= Promise.all([AW(), (0, wW.g)()]).then((WW => {
        let [RW] = WW;
        return RW
      }), (WW => {
        throw zR = null, WW
      })), zR
    }
  },
  40025: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => sW,
      f: () => KW,
      g: () => EW,
      j: () => kR,
      l: () => aR,
      n: () => xR,
      q: () => jR,
      s: () => XW
    });
    var wW = MW(3515),
      CW = MW(3536),
      zR = MW(34920),
      AW = MW(2410),
      bR = MW(2405),
      yR = MW(38450),
      NW = MW(116),
      eW = MW(1090),
      BW = MW(38256),
      tR = MW(6984),
      TW = MW(6479),
      gR = MW(6617),
      iR = MW(6712),
      YW = MW(6839),
      JW = MW(6847);
    const PW = {
        youtube: tR.e,
        "person-military-pointing": TW.d,
        sparkle: gR.h,
        user: iR.c,
        wrench: YW.f,
        zap: JW.g
      },
      IW = new Map(Object.entries(PW).map((WW => {
        let [RW, MW] = WW;
        const [wW, CW, , , zR] = MW.icon;
        return [RW, {
          width: wW,
          height: CW,
          path: "string" === typeof zR ? zR : zR.join(" ")
        }]
      })));
    var oW = MW(38338);
    const lW = 397,
      FW = 1,
      fW = {
        translate: WW => [WW],
        keyBindingText: WW => WW,
        isFriend: () => !1,
        hiddenNames: {}
      };
    let QW = null,
      rR = 0,
      cR = "none";

    function XW() {
      return rR
    }

    function jR() {
      rR++, !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0] ? cR = "all" : "none" === cR && (cR = "notBoards")
    }

    function kR(WW) {
      Object.assign(fW, WW), jR(!1)
    }

    function aR(WW) {
      WW !== QW && (QW = WW, jR())
    }

    function sW(WW) {
      if ("none" === cR || null === WW) return;
      WW(lW, "all" === cR ? 0 : FW, new Uint8Array(0)) && (cR = "none")
    }
    const dW = new Map;

    function pW(WW, RW, MW) {
      const wW = MW ? `${WW}#${MW.join(",")}` : WW,
        CW = dW.get(wW);
      if (CW) return CW.image;
      const zR = {
        image: null
      };
      return dW.set(wW, zR), RW().then((async WW => {
        if (null === WW) return null;
        const RW = new Image;
        RW.crossOrigin = "anonymous", RW.src = WW, await RW.decode();
        const wW = await createImageBitmap(RW);
        if (!MW) return wW;
        try {
          return function(WW, RW) {
            let [MW, wW, CW] = RW;
            const zR = (0, yR.h)(WW.width, WW.height),
              {
                canvas: AW
              } = zR;
            return zR.drawImage(WW, 0, 0), zR.globalCompositeOperation = "multiply", zR.fillStyle = `rgb(${MW}, ${wW}, ${CW})`, zR.fillRect(0, 0, AW.width, AW.height), zR.globalCompositeOperation = "destination-in", zR.drawImage(WW, 0, 0), AW
          }(wW, MW)
        } finally {
          wW.close()
        }
      })).then((WW => {
        null !== WW && (zR.image = WW, jR(!1))
      }), (RW => {
        console.warn(`[bloxd-wasm-client] text icon ${WW} did not load`, RW), dW.get(wW) === zR && dW.delete(wW)
      })), null
    }
    const hW = new Set(wW.e),
      UW = new Set(["CubeBlock", "SlabBlock", "StairsBlock"]);

    function EW() {
      (0, BW.e)().catch((() => {}))
    }

    function VW(WW) {
      return hW.has(WW) ? pW(`icon:${WW}`, (async () => (await (0, BW.d)()).ingameIconUrl(WW))) : null
    }
    let mR = "unasked";
    const xR = {
      get canSeeRealPlayerNames() {
        return NW.featureFlags.canSeeRealPlayerNames
      },
      get canSeePlayerWrittenText() {
        return NW.featureFlags.canSeePlayerWrittenText
      },
      get localPlayerDbId() {
        return QW
      },
      shownPlayerName: WW => (0, eW.f)(WW, fW.hiddenNames),
      translate: (WW, RW) => {
        const MW = "object" === typeof RW && null !== RW ? RW : void 0;
        return fW.translate(WW, (0, eW.j)(MW, fW.hiddenNames))
      },
      keyBindingText: WW => fW.keyBindingText(WW),
      isFriend: WW => fW.isFriend(WW, fW.hiddenNames),
      iconImage: function(WW) {
        if (hW.has(WW)) return VW(WW);
        if ("unasked" === mR && (mR = "loading", (0, bR.d)().then((() => {
            mR = "in", jR(!1)
          }), (WW => {
            mR = "failed", console.warn("[bloxd-wasm-client] the item sprite table did not load, so text item icons stay blank", WW)
          }))), "in" !== mR) return null;
        const RW = (0, AW.e)(WW),
          MW = void 0 === RW ? void 0 : (0, zR.itemTypeNameOf)(RW);
        if ("Gun" === MW) return null;
        const wW = (0, bR.c)(WW),
          yR = void 0 !== MW && UW.has(MW);
        if (yR && void 0 === wW) return null;
        const NW = void 0 !== RW && "GrayscaleArmour" === (0, zR.itemTypeOf)(RW) || Object.hasOwn(CW.b, WW),
          eW = null !== wW && void 0 !== wW ? wW : WW;
        return pW(yR ? `block:${eW}` : `item:${eW}`, (async () => {
          var WW;
          const RW = await (0, BW.e)();
          return null !== (WW = RW.itemSpriteUrl(eW)) && void 0 !== WW ? WW : yR ? null : RW.notFoundUrl()
        }), NW ? (0, CW.d)(WW) : void 0)
      },
      effectImage: VW,
      rankIcon: function(WW) {
        var RW;
        return null !== (RW = IW.get(WW)) && void 0 !== RW ? RW : null
      }
    };
    let vR = null;

    function KW() {
      return vR ??= new FontFace("Jetbrains Mono", `url(${(0,oW.e)()}) format("woff2")`).load().then((WW => {
        document.fonts.add(WW), jR()
      }), (WW => {
        console.warn("[bloxd-wasm-client] the text font did not load", WW)
      })), vR
    }
  },
  38338: (WW, RW, MW) => {
    function wW() {
      return MW(38341)
    }
    MW.d(RW, {
      e: () => wW
    })
  },
  40019: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => FR,
      c: () => iM
    });
    var wW = MW(34950),
      CW = MW(38450),
      zR = MW(36889),
      AW = MW(540),
      bR = MW(232);
    const yR = {
        DEFAULT_FONT_SIZE: 47,
        DEFAULT_SUBTITLE_FONT_SIZE: 30,
        HORIZONTAL_PADDING: 30,
        VERTICAL_PADDING: 22,
        TEXT_SHADOW_WIDTH: 2,
        LINE_SPACING: 8,
        EFFECT_ICON_SIZE: 70
      },
      NW = 41;

    function eW(WW) {
      return `bolder ${WW}px 'Jetbrains Mono'`
    }

    function BW(WW) {
      return "object" === typeof WW && null !== WW
    }

    function tR(WW, RW) {
      const MW = "number" === typeof WW ? WW : "string" === typeof WW ? Number(WW.replace("px", "")) : NaN;
      return Number.isFinite(MW) && MW > 0 ? MW : RW
    }

    function TW(WW) {
      return BW(WW) ? WW : void 0
    }

    function gR(WW) {
      const RW = "number" === typeof WW ? AW.t[WW] : WW;
      return "string" === typeof RW && Object.hasOwn(AW.l, RW) ? AW.l[RW] : void 0
    }

    function iR(WW, RW) {
      return "string" === typeof WW ? WW : BW(WW) ? "string" === typeof WW.translationKey ? RW.translate(WW.translationKey, WW.params).map((WW => "string" === typeof WW ? WW : WW.icon)).join("") : "string" === typeof WW.entityName ? RW.shownPlayerName(WW.entityName) : "" : void 0 === WW || null === WW ? "" : String(WW)
    }

    function YW(WW, RW, MW, wW) {
      if (!Array.isArray(WW)) return [];
      const CW = [];
      for (const eW of WW) {
        var zR, AW;
        if (BW(eW) && "chatTag" in eW) {
          CW.push({
            kind: "rank",
            rank: eW
          });
          continue
        }
        if (BW(eW) && "icon" in eW && !("mainRGB" in eW)) {
          var NW;
          CW.push({
            kind: "icon",
            icon: String(eW.icon),
            size: tR(null === (NW = TW(eW.style)) || void 0 === NW ? void 0 : NW.fontSize, yR.DEFAULT_FONT_SIZE)
          });
          continue
        }
        if (BW(eW) && (0, bR.sb)(eW)) {
          CW.push({
            kind: "text",
            text: "",
            size: RW,
            colour: wW
          });
          continue
        }
        let WW, gR;
        BW(eW) && (0, bR.qb)(eW) ? (WW = MW.keyBindingText(String(eW.action)), gR = TW(eW.style)) : BW(eW) && "str" in eW ? (WW = eW.str, gR = TW(eW.style)) : WW = eW;
        const YW = tR(null === (zR = gR) || void 0 === zR ? void 0 : zR.fontSize, RW),
          JW = null !== (AW = (0, bR.Lb)(gR)) && void 0 !== AW ? AW : wW;
        if (BW(WW) && "string" === typeof WW.translationKey) {
          const RW = MW.translate(WW.translationKey, WW.params);
          if (RW.some((WW => "string" !== typeof WW))) {
            for (const WW of RW) CW.push("string" === typeof WW ? {
              kind: "text",
              text: WW,
              size: YW,
              colour: JW
            } : {
              kind: "icon",
              icon: WW.icon,
              size: YW
            });
            continue
          }
        }
        CW.push({
          kind: "text",
          text: iR(WW, MW),
          size: YW,
          colour: JW
        })
      }
      return CW
    }

    function JW(WW) {
      return void 0 !== WW && "rank" !== WW.kind
    }

    function PW(WW, RW) {
      const MW = JW(WW),
        wW = JW(RW);
      return void 0 === WW && !wW || !MW && void 0 === RW ? 0 : MW !== wW ? .5 * yR.HORIZONTAL_PADDING : 0
    }

    function IW(WW) {
      return "rank" === WW.kind ? yR.DEFAULT_FONT_SIZE : WW.size
    }

    function oW(WW, RW, MW) {
      return "icon" === WW.kind ? WW.size : "rank" === WW.kind ? function(WW, RW) {
        const MW = RW.rankIcon(WW.rank.icon);
        return MW ? NW * (MW.width / MW.height) : NW
      }(WW, MW) + yR.HORIZONTAL_PADDING : (RW.font = eW(WW.size), RW.measureText(WW.text).width)
    }

    function lW(WW, RW, MW) {
      if (0 === WW.length) return {
        width: 0,
        height: 0,
        sizes: []
      };
      let wW = 0;
      for (const AW of WW) wW = Math.max(wW, IW(AW));
      const CW = [];
      let zR = PW(void 0, WW[0]);
      for (let AW = 0; AW < WW.length; AW++) {
        const wW = zR;
        zR += oW(WW[AW], RW, MW), zR += PW(WW[AW], WW[AW + 1]), CW.push({
          x: wW,
          width: zR - wW
        })
      }
      return {
        width: zR,
        height: wW + yR.VERTICAL_PADDING,
        sizes: CW
      }
    }

    function FW(WW, RW, MW, wW, CW, zR, AW) {
      RW += PW(void 0, WW[0]);
      for (let bR = 0; bR < WW.length; bR++) {
        const yR = fW(WW[bR], RW, MW, wW, CW, zR, AW);
        RW += 0 === yR ? 0 : yR + PW(WW[bR], WW[bR + 1])
      }
    }

    function fW(WW, RW, MW, wW, CW, zR, AW, bR) {
      var BW;
      if ("icon" === WW.kind) {
        const wW = zR.iconImage(WW.icon);
        return wW && AW.push({
          image: wW,
          x: RW,
          y: MW + yR.VERTICAL_PADDING / 2,
          size: WW.size
        }), WW.size
      }
      if ("rank" === WW.kind) {
        const AW = null !== bR && void 0 !== bR ? bR : oW(WW, CW, zR);
        return function(WW, RW, MW, wW, CW, zR, AW) {
          var bR, eW;
          const {
            rank: BW
          } = WW;
          zR.fillStyle = BW.mainRGB, zR.fillRect(RW, MW, wW, CW);
          const tR = AW.rankIcon(BW.icon);
          if (!tR) return;
          const TW = NW / tR.height,
            gR = RW + (wW - tR.width * TW) / 2,
            iR = MW + (CW - NW) / 2,
            YW = new Path2D(tR.path),
            JW = yR.TEXT_SHADOW_WIDTH,
            PW = (null === (bR = BW.nameTag) || void 0 === bR ? void 0 : bR.iconShadowRGB) || "black";
          for (const yR of [-1, 1])
            for (const WW of [-1, 1]) rR(zR, YW, gR + JW * yR, iR + JW * WW, TW, PW);
          rR(zR, YW, gR, iR, TW, (null === (eW = BW.nameTag) || void 0 === eW ? void 0 : eW.iconRGB) || "white")
        }(WW, RW, MW, AW, wW, CW, zR), AW
      }
      if (0 === WW.text.length) return 0;
      const tR = eW(WW.size);
      CW.font = tR;
      const TW = null !== bR && void 0 !== bR ? bR : CW.measureText(WW.text).width;
      return function(WW, RW, MW, wW, CW, zR) {
        const AW = yR.TEXT_SHADOW_WIDTH;
        zR.font = wW, zR.fillStyle = "black";
        for (const bR of [-1, 1])
          for (const wW of [-1, 1]) zR.fillText(WW, RW + AW * bR, MW + AW * wW);
        zR.fillStyle = CW, zR.fillText(WW, RW, MW)
      }(WW.text, RW, MW + wW - yR.VERTICAL_PADDING + 5, tR, null !== (BW = WW.colour) && void 0 !== BW ? BW : "white", CW), TW
    }

    function QW(WW, RW) {
      for (const {
          image: MW,
          x: wW,
          y: CW,
          size: zR
        }
        of WW) RW.imageSmoothingEnabled = !1, RW.drawImage(MW, wW, CW, zR, zR)
    }

    function rR(WW, RW, MW, wW, CW, zR) {
      WW.save(), WW.translate(MW, wW), WW.scale(CW, CW), WW.fillStyle = zR, WW.fill(RW), WW.restore()
    }

    function cR(WW, RW, MW) {
      const wW = "object" === typeof WW && null !== WW ? WW : {},
        CW = function(WW, RW, MW) {
          if (!Array.isArray(WW) || 0 === WW.length) return [];
          const wW = [{
            width: 0,
            height: 0,
            y: 0,
            items: []
          }];
          for (const AW of YW(WW, yR.DEFAULT_FONT_SIZE, MW)) {
            if ("text" !== AW.kind) {
              wW[wW.length - 1].items.push({
                content: AW,
                chars: 1,
                size: {
                  x: 0,
                  width: 0
                }
              });
              continue
            }
            if (0 === AW.text.length) continue;
            const WW = wW[wW.length - 1].items.reduce(((WW, RW) => WW + ("text" === RW.content.kind ? (0, zR.c)(RW.content.text) : RW.chars)), 0);
            (0, zR.e)(AW.text, WW).forEach(((WW, RW) => {
              RW > 0 && wW.push({
                width: 0,
                height: 0,
                y: 0,
                items: []
              }), WW.length > 0 && wW[wW.length - 1].items.push({
                content: {
                  ...AW,
                  text: WW
                },
                chars: WW.length,
                size: {
                  x: 0,
                  width: 0
                }
              })
            }))
          }
          let CW = yR.VERTICAL_PADDING / 2;
          for (const zR of wW) {
            if (0 === zR.items.length) continue;
            const {
              width: WW,
              height: wW,
              sizes: AW
            } = lW(zR.items.map((WW => WW.content)), RW, MW);
            zR.items.forEach(((WW, RW) => {
              WW.size = AW[RW]
            })), zR.width = WW, zR.height = wW, zR.y = CW, CW += wW + yR.LINE_SPACING
          }
          return wW
        }(wW.content, RW, MW);
      let AW = 0,
        bR = yR.VERTICAL_PADDING,
        NW = 0;
      for (const zR of CW) {
        AW = Math.max(AW, zR.width + 2 * yR.HORIZONTAL_PADDING), bR += zR.height + yR.LINE_SPACING;
        for (const WW of zR.items) NW += WW.chars
      }
      const eW = "string" === typeof wW.backgroundColor ? wW.backgroundColor : "#22283b";
      return {
        width: AW,
        height: bR,
        chars: NW,
        draw: (WW, RW) => {
          const wW = [];
          if (WW.fillStyle = eW, WW.fillRect(0, 0, AW, bR), null === RW)
            for (const zR of CW) zR.items.length > 0 && FW(zR.items.map((WW => WW.content)), 0, zR.y, zR.height, WW, MW, wW);
          else {
            let zR = 0;
            for (const AW of CW)
              for (const CW of AW.items) {
                if (zR >= RW) break;
                fW("text" === CW.content.kind ? {
                  ...CW.content,
                  text: CW.content.text.substring(0, RW - zR)
                } : CW.content, CW.size.x, AW.y, AW.height, WW, MW, wW, CW.size.width), zR += CW.chars
              }
          }
          QW(wW, WW)
        }
      }
    }
    var XW = MW(3515),
      jR = MW(1099),
      kR = MW(1624);
    const aR = 10,
      sW = 3,
      dW = 3,
      pW = [{
        healthFraction: .25,
        colour: "#ff0000"
      }, {
        healthFraction: .5,
        colour: "#ffaa00"
      }, {
        healthFraction: 1,
        colour: "#00ff00"
      }],
      hW = 64,
      UW = 69,
      EW = {
        icon: kR.d,
        mainRGB: "transparent",
        chatTag: [],
        nameTag: {
          iconRGB: "#f38ab6",
          iconShadowRGB: "black"
        },
        visible: !0
      };

    function VW(WW) {
      return "object" !== typeof WW || null === WW || Array.isArray(WW) ? void 0 : WW
    }
    const mR = new Set(XW.e);

    function xR(WW, RW) {
      return "string" === typeof WW ? tR(WW, RW) : RW
    }

    function vR(WW) {
      return xR(WW.width, sW)
    }

    function KW(WW, RW) {
      var MW;
      const wW = null !== (MW = WW.applyTo) && void 0 !== MW ? MW : "both";
      return "both" === wW || wW === RW
    }

    function uW(WW) {
      const RW = vR(WW);
      return "glow" === WW.style ? RW * dW : Math.ceil(RW / 2) + 1
    }

    function OW(WW, RW, MW) {
      var wW, CW;
      const zR = null !== (wW = VW(WW.info)) && void 0 !== wW ? wW : {},
        bR = "string" === typeof WW.name ? WW.name : "",
        NW = zR.subtitle;
      if (Array.isArray(zR.content) && 0 === zR.content.length && !(Array.isArray(NW) && NW.length > 0)) return null;
      const eW = "number" === typeof WW.hideNameSeed ? WW.hideNameSeed : null,
        BW = "" === bR || !0 === WW.mesh ? bR : (0, jR.d)(bR, !MW.canSeeRealPlayerNames, eW);
      if (!BW && !zR.content) return null;
      const tR = "string" === typeof WW.colour ? WW.colour : "default",
        TW = Object.hasOwn(AW.r, tR) ? AW.r[tR] : void 0,
        iR = zR.content ? YW(zR.content, yR.DEFAULT_FONT_SIZE, MW, TW) : [{
          kind: "text",
          text: BW,
          size: yR.DEFAULT_FONT_SIZE,
          colour: TW
        }],
        JW = [];
      for (const AW of Array.isArray(WW.ranks) ? WW.ranks : []) {
        const WW = gR(AW);
        null !== WW && void 0 !== WW && WW.nameTag && WW.visible && JW.push({
          kind: "rank",
          rank: WW
        })
      }
      JW.push(...iR);
      ("boolean" === typeof WW.player ? WW.player : Array.isArray(WW.ranks)) && "" !== bR && MW.isFriend(bR) && JW.push({
        kind: "rank",
        rank: EW
      }), "number" === typeof WW.WW && JW.push({
        kind: "text",
        text: ` ${WW.WW}m`,
        size: yR.DEFAULT_FONT_SIZE,
        colour: "#cef3ff"
      });
      const PW = NW ? YW(NW, yR.DEFAULT_SUBTITLE_FONT_SIZE, MW) : null,
        IW = "string" === typeof zR.backgroundColor ? zR.backgroundColor : "#22283b",
        oW = "string" === typeof zR.subtitleBackgroundColor ? zR.subtitleBackgroundColor : "#1a1e2d",
        fW = VW(zR.healthbar),
        rR = VW(zR.border),
        cR = Array.isArray(WW.effects) ? WW.effects.filter((WW => "string" === typeof WW && mR.has(WW))) : [],
        XW = "number" === typeof WW.health ? Math.max(0, Math.min(1, WW.health)) : null,
        kR = lW(JW, RW, MW),
        sW = lW(null !== PW && void 0 !== PW ? PW : [], RW, MW),
        OW = {
          width: yR.EFFECT_ICON_SIZE * cR.length,
          height: cR.length > 0 ? yR.EFFECT_ICON_SIZE : 0
        },
        nW = rR && KW(rR, "nametag") ? uW(rR) : 0,
        GW = xR(null === fW || void 0 === fW ? void 0 : fW.height, aR),
        LW = rR && KW(rR, "healthbar") ? uW(rR) : 0,
        HW = "never" === (null !== (CW = null === fW || void 0 === fW ? void 0 : fW.display) && void 0 !== CW ? CW : "onDamage") ? 0 : GW + LW,
        DW = Math.max(OW.height, nW),
        qR = Math.max(yR.VERTICAL_PADDING, HW, nW);
      let ZW = Math.max(kR.width, sW.width, OW.width);
      if (rR) {
        const WW = uW(rR) + yR.HORIZONTAL_PADDING / 2;
        ZW = Math.max(ZW, Math.max(kR.width, sW.width) + yR.HORIZONTAL_PADDING + 2 * WW)
      }
      const SW = kR.height + sW.height + DW + qR,
        WR = kR.width + yR.HORIZONTAL_PADDING,
        RR = sW.width + yR.HORIZONTAL_PADDING,
        MR = Math.max(WR, RR),
        wR = (ZW - MR) / 2,
        CR = Math.max(OW.height, nW);
      return {
        width: ZW,
        height: SW,
        draw: WW => {
          const RW = [];
          if (WW.fillStyle = IW, WW.fillRect(wR, CR, MR, kR.height), FW(JW, (ZW - WR) / 2 + yR.HORIZONTAL_PADDING / 2, CR, kR.height, WW, MW, RW), PW) {
            const wW = CR + kR.height;
            WW.fillStyle = oW, WW.fillRect(wR, wW, MR, sW.height), FW(PW, (ZW - RR) / 2 + yR.HORIZONTAL_PADDING / 2, wW, sW.height, WW, MW, RW)
          }
          let wW = null;
          if (null !== XW) {
            const RW = SW - GW - LW;
            null !== fW && void 0 !== fW && fW.backgroundColour && (WW.fillStyle = fW.backgroundColour, WW.fillRect(wR, RW, MR, GW)), WW.fillStyle = function(WW, RW) {
              const MW = null === WW || void 0 === WW ? void 0 : WW.foregroundColour;
              if ("string" === typeof MW) return MW;
              const wW = [...Array.isArray(MW) && MW.length > 0 ? MW : pW].sort(((WW, RW) => WW.healthFraction - RW.healthFraction)),
                CW = wW.find((WW => RW <= WW.healthFraction));
              return (null !== CW && void 0 !== CW ? CW : wW[wW.length - 1]).colour
            }(fW, XW), WW.fillRect(wR, RW, Math.round(MR * XW), GW), wW = {
              x: wR,
              y: RW,
              width: MR,
              height: GW
            }
          }
          if (rR) {
            const RW = [];
            KW(rR, "nametag") && RW.push({
              x: wR,
              y: CR,
              width: MR,
              height: kR.height + (PW ? sW.height : 0)
            }), wW && KW(rR, "healthbar") && RW.push(wW), RW.length > 0 && function(WW, RW, MW) {
              const wW = vR(RW),
                CW = wW / 2,
                zR = WW => WW.width > 0 && WW.height > 0,
                AW = MW.map((WW => ({
                  x: WW.x + CW,
                  y: WW.y + CW,
                  width: WW.width - wW,
                  height: WW.height - wW
                }))).filter(zR);
              if (0 === AW.length) return;
              const bR = RW => {
                const MW = RW.filter(zR);
                if (0 !== MW.length) {
                  WW.beginPath();
                  for (const RW of MW) WW.rect(RW.x, RW.y, RW.width, RW.height);
                  WW.stroke()
                }
              };
              if (WW.save(), WW.strokeStyle = RW.colour, WW.lineWidth = wW, WW.lineJoin = "round", "glow" === RW.style) WW.shadowColor = RW.colour, WW.shadowBlur = wW * dW, bR(AW), bR(AW);
              else if ("double" === RW.style) {
                bR(AW);
                const WW = wW + 2;
                bR(AW.map((RW => ({
                  x: RW.x + WW,
                  y: RW.y + WW,
                  width: RW.width - 2 * WW,
                  height: RW.height - 2 * WW
                }))))
              } else bR(AW);
              WW.restore()
            }(WW, rR, RW)
          }
          QW(RW, WW);
          for (let CW = 0; CW < cR.length; CW++) {
            const RW = MW.effectImage(cR[CW]);
            RW && (WW.imageSmoothingEnabled = !1, WW.drawImage(RW, 5 + UW * CW, 5, hW, hW))
          }
        }
      }
    }
    var nW = MW(36698);
    const GW = 256,
      LW = 1024,
      HW = {
        width: 1,
        height: 7 / 8
      };
    var DW = MW(36704);
    const qR = {
      leaderboard: ""
    };
    var ZW = MW(40025);
    const SW = {
        Nametag: 1,
        MultilineText: 2,
        Board: 3,
        Leaderboard: 4
      },
      WR = 2048,
      RR = 256,
      MR = 10,
      wR = 4,
      CR = 65536,
      zM = new TextDecoder;
    let AR = ZW.n,
      bM = -1;
    const yM = new Map,
      NR = new Map;
    let eR = 0;
    const BR = new TextEncoder;

    function tM(WW, RW) {
      const MW = BR.encode(JSON.stringify(RW)),
        wW = new Uint8Array(MW.length + 1);
      return wW[0] = WW, wW.set(MW, 1), wW
    }
    const TR = {
        name: "Ag",
        info: null,
        colour: "default",
        ranks: [],
        effects: [],
        health: .5,
        WW: null,
        hideNameSeed: null
      },
      gM = [tM(SW.Nametag, TR), tM(SW.Nametag, {
        ...TR,
        info: {
          content: [{
            str: "Ag"
          }],
          subtitle: ["Ag"]
        }
      }), tM(SW.MultilineText, {
        box: {
          content: ["Ag"]
        },
        shown: null
      }), ...wW.d.map(((WW, RW) => tM(SW.Board, {
        shared: {
          text: "Ag",
          textSize: RW
        },
        w: 0,
        h: 0
      })))];

    function iM(WW) {
      (0, ZW.f)().then((() => {
        if (WW()) return;
        const RW = (0, CW.h)(1, 1, {
          willReadFrequently: !0
        });
        var MW;
        RW && (MW = RW.canvas, gM.map((WW => FR(WW, MW))))
      }))
    }
    let YR = ZW.s;

    function JR() {
      yM.clear(), NR.clear()
    }

    function PR(WW, RW) {
      const MW = WW.get(RW);
      return void 0 !== MW && (WW.delete(RW), WW.set(RW, MW)), MW
    }

    function IR(WW, RW, MW) {
      WW.set(RW, MW), WW.size > RR && WW.delete(WW.keys().next().value)
    }

    function oR(WW, RW, MW) {
      if (WW === SW.Nametag) {
        let WW = PR(yM, RW);
        return void 0 === WW && (WW = OW(JSON.parse(RW), MW, AR), IR(yM, RW, WW)), WW
      }
      if (WW === SW.MultilineText) {
        var CW;
        const WW = JSON.parse(RW),
          wW = JSON.stringify(null !== (CW = WW.box) && void 0 !== CW ? CW : null),
          zR = "number" === typeof WW.shown ? WW.shown : null;
        let AW = PR(NR, wW);
        void 0 === AW && (AW = cR(WW.box, MW, AR), IR(NR, wW, AW));
        const bR = null === zR ? null : Math.min(Math.max(0, Math.floor(zR)), AW.chars),
          yR = AW;
        return {
          width: yR.width,
          height: yR.height,
          draw: WW => {
            yR.draw(WW, bR)
          }
        }
      }
      if (WW === SW.Board) return function(WW, RW) {
        var MW;
        if (!RW.canSeePlayerWrittenText) return null;
        const {
          shared: CW,
          w: zR = 0,
          h: AW = 0
        } = WW, bR = !zR;
        let yR;
        if (bR) {
          var NW, eW;
          yR = null !== (NW = null === CW || void 0 === CW || null === (eW = CW.text) || void 0 === eW ? void 0 : eW.toString()) && void 0 !== NW ? NW : ""
        } else {
          if ("string" !== typeof(null === CW || void 0 === CW ? void 0 : CW.text)) return null;
          yR = CW.text
        }
        if ("" === yR.trim()) return null;
        const BW = null !== (MW = null === CW || void 0 === CW ? void 0 : CW.textSize) && void 0 !== MW ? MW : 0,
          tR = wW.d[BW].ingameFontSize;
        let TW = HW,
          gR = GW;
        bR || (yR = (0, wW.s)(yR, BW, zR, AW), TW = (0, wW.x)(zR, AW), gR = Math.min(GW, LW / Math.max(TW.width, TW.height)));
        const iR = Math.round(gR * TW.width),
          YW = Math.round(gR * TW.height),
          JW = gR / GW;
        return {
          width: iR,
          height: YW,
          draw: WW => {
            nW.d.fontSize = tR * JW, nW.d.fontWeight = "bold", nW.d.font = "'Jetbrains Mono', monospace", nW.d.drawText(WW, yR, 0, (-10 - 7 * BW) * JW, iR, YW)
          }
        }
      }(JSON.parse(RW), AR);
      if (WW === SW.Leaderboard) return function(WW, RW, MW) {
        var wW;
        const CW = (0, DW.n)(WW.opts, qR),
          zR = (0, DW.g)(CW, MW),
          AW = {
            top: (0, DW.k)(CW, (0, DW.o)(WW.top)),
            around: null !== (wW = WW.around) && void 0 !== wW ? wW : null,
            showPlayerText: RW.canSeePlayerWrittenText,
            localPlayerDbId: RW.localPlayerDbId
          };
        return {
          width: zR.pixelWidth,
          height: zR.pixelHeight,
          draw: WW => {
            const {
              a: RW,
              d: MW
            } = WW.getTransform();
            (0, DW.c)(WW, Math.round(zR.pixelWidth * RW), Math.round(zR.pixelHeight * MW), zR, CW, AW)
          }
        }
      }(JSON.parse(RW), AR, WR);
      throw new Error(`unknown text plane kind ${WW}`)
    }
    const lR = 2 ** Math.floor(Math.log2(WR));

    function FR(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        wW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      try {
        if (WW.length < 2) return [0, 0];
        const zR = (0, CW.e)(RW);
        if (!zR) return [0, 0];
        const AW = YR();
        let bR;
        AW !== bM && (bM = AW, JR()), zR.save();
        try {
          bR = oR(WW[0], zM.decode(WW.subarray(1)), zR)
        } finally {
          zR.restore()
        }
        if (null === bR || !(bR.width > 0 && bR.height > 0)) return [0, 0];
        const yR = Math.min(1, WR / bR.width, WR / bR.height),
          NW = WW => wW ? function(WW) {
            const RW = 2 ** Math.ceil(Math.log2(WW));
            return Math.min(lR, RW - WW > WW - RW / 2 ? RW / 2 : RW)
          }(WW) : Math.min(WR, Math.ceil(WW * yR)),
          [eW, BW] = [NW(bR.width), NW(bR.height)];
        ! function(WW, RW, MW, wW, CW) {
          const zR = Math.max(WW.width, MW),
            AW = Math.max(WW.height, wW),
            bR = CW || zR * AW > Math.max(wR * MW * wW, CR),
            [yR, NW] = bR ? [MW, wW] : [zR, AW];
          yR === WW.width && NW === WW.height ? RW.clearRect(0, 0, yR, NW) : (WW.width = yR, WW.height = NW)
        }(RW, zR, eW, BW, MW), zR.save();
        try {
          const [WW, RW] = wW ? [eW / bR.width, BW / bR.height] : [yR, yR];
          1 === WW && 1 === RW || zR.scale(WW, RW), bR.draw(zR)
        } finally {
          zR.restore()
        }
        return [eW, BW]
      } catch (zR) {
        ! function(WW, RW) {
          eR < MR && (eR++, console.warn(`[bloxd-wasm-client] ${WW}`, RW))
        }("could not raster a text plane", zR);
        try {
          RW.width = 1
        } catch {}
        return [0, 0]
      }
    }
  },
  6984: (WW, RW) => {
    var MW = "youtube",
      wW = [61802],
      CW = "f167",
      zR = "M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6l0-162.4 142.7 81.2-142.7 81.2z";
    RW.b = {
      prefix: "fab",
      iconName: MW,
      icon: [576, 512, wW, CW, zR]
    }, RW.e = RW.b
  },
  5837: (WW, RW) => {
    Object.defineProperty(RW, "__esModule", {
      value: !0
    });
    var MW = "bolt",
      wW = [9889, "zap"],
      CW = "f0e7",
      zR = "M338.8-9.9c11.9 8.6 16.3 24.2 10.9 37.8L271.3 224 416 224c13.5 0 25.5 8.4 30.1 21.1s.7 26.9-9.6 35.5l-288 240c-11.3 9.4-27.4 9.9-39.3 1.3s-16.3-24.2-10.9-37.8L176.7 288 32 288c-13.5 0-25.5-8.4-30.1-21.1s-.7-26.9 9.6-35.5l288-240c11.3-9.4 27.4-9.9 39.3-1.3z";
    RW.definition = {
      prefix: "fas",
      iconName: MW,
      icon: [448, 512, wW, CW, zR]
    }, RW.faBolt = RW.definition, RW.prefix = "fas", RW.iconName = MW, RW.width = 448, RW.height = 512, RW.ligatures = wW, RW.unicode = CW, RW.svgPathData = zR, RW.aliases = wW
  },
  6479: (WW, RW) => {
    var MW = "person-military-pointing",
      wW = [],
      CW = "e54a",
      zR = "M214.9 14.1C202 15.2 192 26 192 39 192 52.8 203.2 64 217 64l151 0c8.8 0 16-7.2 16-16l0-30.6C384 8 376 .7 366.7 1.4L214.9 14.1zM208 112c0 44.2 35.8 80 80 80s80-35.8 80-80c0-5.5-.6-10.8-1.6-16L209.6 96c-1 5.2-1.6 10.5-1.6 16zM40 224c-22.1 0-40 17.9-40 40s17.9 40 40 40l152 0 0 89.4 162.8-162.8c-13.3-4.3-27.3-6.5-41.6-6.5L40 224zm345.7 20.9l-171.1 171.1 169.4 0 0-46.3 53.6 90.6c11.2 19 35.8 25.3 54.8 14.1s25.3-35.8 14.1-54.8L430.3 290.8c-11.2-19-26.6-34.5-44.6-45.9zM192 448l0 32c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-32-192 0z";
    RW.c = {
      prefix: "fas",
      iconName: MW,
      icon: [512, 512, wW, CW, zR]
    }, RW.d = RW.c
  },
  6617: (WW, RW) => {
    var MW = "sparkle",
      wW = [],
      CW = "e5d6",
      zR = "M278.5 15.6C275 6.2 266 0 256 0s-19 6.2-22.5 15.6L174.2 174.2 15.6 233.5C6.2 237 0 246 0 256s6.2 19 15.6 22.5l158.6 59.4 59.4 158.6C237 505.8 246 512 256 512s19-6.2 22.5-15.6l59.4-158.6 158.6-59.4C505.8 275 512 266 512 256s-6.2-19-15.6-22.5L337.8 174.2 278.5 15.6z";
    RW.e = {
      prefix: "fas",
      iconName: MW,
      icon: [512, 512, wW, CW, zR]
    }, RW.h = RW.e
  },
  6712: (WW, RW) => {
    var MW = "user",
      wW = [128100, 62144, 62470, "user-alt", "user-large"],
      CW = "f007",
      zR = "M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z";
    RW.b = {
      prefix: "fas",
      iconName: MW,
      icon: [448, 512, wW, CW, zR]
    }, RW.c = RW.b
  },
  6839: (WW, RW) => {
    var MW = "wrench",
      wW = [128295],
      CW = "f0ad",
      zR = "M509.4 98.6c7.6-7.6 20.3-5.7 24.1 4.3 6.8 17.7 10.5 37 10.5 57.1 0 88.4-71.6 160-160 160-17.5 0-34.4-2.8-50.2-8L146.9 498.9c-28.1 28.1-73.7 28.1-101.8 0s-28.1-73.7 0-101.8L232 210.2c-5.2-15.8-8-32.6-8-50.2 0-88.4 71.6-160 160-160 20.1 0 39.4 3.7 57.1 10.5 10 3.8 11.8 16.5 4.3 24.1l-88.7 88.7c-3 3-4.7 7.1-4.7 11.3l0 41.4c0 8.8 7.2 16 16 16l41.4 0c4.2 0 8.3-1.7 11.3-4.7l88.7-88.7z";
    RW.e = {
      prefix: "fas",
      iconName: MW,
      icon: [576, 512, wW, CW, zR]
    }, RW.f = RW.e
  },
  6847: (WW, RW, MW) => {
    var wW = MW(5837);
    RW.c = {
      prefix: wW.prefix,
      iconName: wW.iconName,
      icon: [wW.width, wW.height, wW.aliases, wW.unicode, wW.svgPathData]
    }, RW.g = RW.c, wW.prefix, wW.iconName, wW.width, wW.height, wW.aliases, wW.unicode, wW.svgPathData, wW.aliases
  },
  38341: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/JetBrainsMonoNL-ExtraBold.e920f8e3b489009b4837.woff2"
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);