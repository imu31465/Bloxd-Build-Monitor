export const id = 243;
export const ids = [243];
export const modules = {
  37444: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => LW,
      e: () => PW
    });
    var mW = OW(4459);
    let EW = null,
      NW = null;

    function PW() {
      return NW ??= OW.e(241).then((() => OW(37314))).then((WW => {
        let {
          ITEM_SPRITES: iW,
          ITEM_SPRITES_WITHOUT_FILE: OW,
          ITEM_FILES_WITHOUT_SPRITE: NW
        } = WW;
        EW = function(WW, iW, OW) {
          const EW = new Set,
            NW = (0, mW.w)(iW);
          let PW = 0;
          for (const [mW, LW] of WW.entries()) mW === NW[PW] ? PW++ : EW.add(LW);
          if ("" !== OW)
            for (const LW of OW.split(mW.s)) EW.add(LW);
          return EW
        }(iW.split(mW.s), OW, NW)
      }), (WW => {
        throw NW = null, WW
      })), NW
    }

    function LW(WW) {
      var iW, OW;
      return null !== (iW = null === (OW = EW) || void 0 === OW ? void 0 : OW.has(WW)) && void 0 !== iW && iW
    }
  },
  37436: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => tW,
      d: () => cW,
      f: () => LW,
      i: () => wW
    });
    var mW = OW(2047);
    let EW = null,
      NW = 0;
    const PW = new Set;

    function LW() {
      return EW
    }

    function cW() {
      return NW
    }

    function wW(WW) {
      EW = WW, NW++, (0, mW.b)();
      for (const iW of PW) iW()
    }

    function tW(WW) {
      PW.add(WW)
    }
  },
  37441: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => PW,
      d: () => LW
    });
    var mW = OW(37444);
    let EW = null,
      NW = null;

    function PW() {
      return EW ??= OW.e(74).then((() => OW(42663))).catch((WW => {
        throw EW = null, WW
      })), EW
    }

    function LW() {
      return NW ??= Promise.all([PW(), (0, mW.e)()]).then((WW => {
        let [iW] = WW;
        return iW
      }), (WW => {
        throw NW = null, WW
      })), NW
    }
  },
  37360: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => SW
    });
    var mW = OW(5185),
      EW = OW(1259),
      NW = OW(625),
      PW = OW(2138),
      LW = OW(37369),
      cW = OW(37353);
    const wW = 10,
      tW = 3,
      ZW = 3,
      xW = [{
        healthFraction: .25,
        colour: "#ff0000"
      }, {
        healthFraction: .5,
        colour: "#ffaa00"
      }, {
        healthFraction: 1,
        colour: "#00ff00"
      }],
      lW = 64,
      AW = 69,
      bW = {
        icon: PW.e,
        mainRGB: "transparent",
        chatTag: [],
        nameTag: {
          iconRGB: "#f38ab6",
          iconShadowRGB: "black"
        },
        visible: !0
      };

    function jW(WW) {
      return "object" !== typeof WW || null === WW || Array.isArray(WW) ? void 0 : WW
    }
    const UW = new Set(mW.c);

    function kW(WW, iW) {
      return "string" === typeof WW ? (0, cW.r)(WW, iW) : iW
    }

    function sW(WW) {
      return kW(WW.width, tW)
    }

    function MW(WW, iW) {
      var OW;
      const mW = null !== (OW = WW.applyTo) && void 0 !== OW ? OW : "both";
      return "both" === mW || mW === iW
    }

    function KW(WW) {
      const iW = sW(WW);
      return "glow" === WW.style ? iW * ZW : Math.ceil(iW / 2) + 1
    }

    function SW(WW, iW, OW) {
      var mW, PW;
      const tW = null !== (mW = jW(WW.info)) && void 0 !== mW ? mW : {},
        SW = "string" === typeof WW.name ? WW.name : "",
        YW = tW.subtitle;
      if (Array.isArray(tW.content) && 0 === tW.content.length && !(Array.isArray(YW) && YW.length > 0)) return null;
      const yW = "number" === typeof WW.hideNameSeed ? WW.hideNameSeed : null,
        TW = "" === SW || !0 === WW.mesh ? SW : (0, EW.b)(SW, !OW.canSeeRealPlayerNames, yW);
      if (!TW && !tW.content) return null;
      const JW = "string" === typeof WW.colour ? WW.colour : "default",
        hW = Object.hasOwn(NW.C, JW) ? NW.C[JW] : void 0,
        HW = tW.content ? (0, cW.h)(tW.content, cW.c.DEFAULT_FONT_SIZE, OW, hW) : [{
          kind: "text",
          text: TW,
          size: cW.c.DEFAULT_FONT_SIZE,
          colour: hW
        }],
        nW = [],
        uW = "boolean" === typeof WW.player ? WW.player : Array.isArray(WW.ranks),
        oW = uW ? (0, LW.k)(tW.backgroundColor) : null;
      oW && nW.push({
        kind: "rank",
        rank: oW
      });
      for (const EW of Array.isArray(WW.ranks) ? WW.ranks : []) {
        const WW = (0, cW.s)(EW);
        null !== WW && void 0 !== WW && WW.nameTag && WW.visible && nW.push({
          kind: "rank",
          rank: WW
        })
      }
      nW.push(...HW), uW && "" !== SW && OW.isFriend(SW) && nW.push({
        kind: "rank",
        rank: bW
      }), "number" === typeof WW.TP && nW.push({
        kind: "text",
        text: ` ${WW.TP}m`,
        size: cW.c.DEFAULT_FONT_SIZE,
        colour: "#cef3ff"
      });
      const dW = YW ? (0, cW.h)(YW, cW.c.DEFAULT_SUBTITLE_FONT_SIZE, OW) : null,
        eW = "string" === typeof tW.backgroundColor ? tW.backgroundColor : "#22283b",
        vW = "string" === typeof tW.subtitleBackgroundColor ? tW.subtitleBackgroundColor : "#1a1e2d",
        gW = jW(tW.healthbar),
        DW = jW(tW.border),
        VW = Array.isArray(WW.effects) ? WW.effects.filter((WW => "string" === typeof WW && UW.has(WW))) : [],
        pW = "number" === typeof WW.health ? Math.max(0, Math.min(1, WW.health)) : null,
        fW = (0, cW.d)(nW, iW, OW),
        CW = (0, cW.d)(null !== dW && void 0 !== dW ? dW : [], iW, OW),
        XW = {
          width: cW.c.EFFECT_ICON_SIZE * VW.length,
          height: VW.length > 0 ? cW.c.EFFECT_ICON_SIZE : 0
        },
        BW = DW && MW(DW, "nametag") ? KW(DW) : 0,
        qW = kW(null === gW || void 0 === gW ? void 0 : gW.height, wW),
        RW = DW && MW(DW, "healthbar") ? KW(DW) : 0,
        GW = "never" === (null !== (PW = null === gW || void 0 === gW ? void 0 : gW.display) && void 0 !== PW ? PW : "onDamage") ? 0 : qW + RW,
        IW = Math.max(XW.height, BW),
        aW = Math.max(cW.c.VERTICAL_PADDING, GW, BW);
      let rW = Math.max(fW.width, CW.width, XW.width);
      if (DW) {
        const WW = KW(DW) + cW.c.HORIZONTAL_PADDING / 2;
        rW = Math.max(rW, Math.max(fW.width, CW.width) + cW.c.HORIZONTAL_PADDING + 2 * WW)
      }
      const zW = fW.height + CW.height + IW + aW,
        FW = fW.width + cW.c.HORIZONTAL_PADDING,
        QW = CW.width + cW.c.HORIZONTAL_PADDING,
        Wi = Math.max(FW, QW),
        ii = (rW - Wi) / 2,
        Oi = Math.max(XW.height, BW);
      return {
        width: rW,
        height: zW,
        draw: WW => {
          const iW = [];
          if (WW.fillStyle = eW, WW.fillRect(ii, Oi, Wi, fW.height), (0, cW.p)(nW, (rW - FW) / 2 + cW.c.HORIZONTAL_PADDING / 2, Oi, fW.height, WW, OW, iW), dW) {
            const mW = Oi + fW.height;
            WW.fillStyle = vW, WW.fillRect(ii, mW, Wi, CW.height), (0, cW.p)(dW, (rW - QW) / 2 + cW.c.HORIZONTAL_PADDING / 2, mW, CW.height, WW, OW, iW)
          }
          let mW = null;
          if (null !== pW) {
            const iW = zW - qW - RW;
            null !== gW && void 0 !== gW && gW.backgroundColour && (WW.fillStyle = gW.backgroundColour, WW.fillRect(ii, iW, Wi, qW)), WW.fillStyle = function(WW, iW) {
              const OW = null === WW || void 0 === WW ? void 0 : WW.foregroundColour;
              if ("string" === typeof OW) return OW;
              const mW = [...Array.isArray(OW) && OW.length > 0 ? OW : xW].sort(((WW, iW) => WW.healthFraction - iW.healthFraction)),
                EW = mW.find((WW => iW <= WW.healthFraction));
              return (null !== EW && void 0 !== EW ? EW : mW[mW.length - 1]).colour
            }(gW, pW), WW.fillRect(ii, iW, Math.round(Wi * pW), qW), mW = {
              x: ii,
              y: iW,
              width: Wi,
              height: qW
            }
          }
          if (DW) {
            const iW = [];
            MW(DW, "nametag") && iW.push({
              x: ii,
              y: Oi,
              width: Wi,
              height: fW.height + (dW ? CW.height : 0)
            }), mW && MW(DW, "healthbar") && iW.push(mW), iW.length > 0 && function(WW, iW, OW) {
              const mW = sW(iW),
                EW = mW / 2,
                NW = WW => WW.width > 0 && WW.height > 0,
                PW = OW.map((WW => ({
                  x: WW.x + EW,
                  y: WW.y + EW,
                  width: WW.width - mW,
                  height: WW.height - mW
                }))).filter(NW);
              if (0 === PW.length) return;
              const LW = iW => {
                const OW = iW.filter(NW);
                if (0 !== OW.length) {
                  WW.beginPath();
                  for (const iW of OW) WW.rect(iW.x, iW.y, iW.width, iW.height);
                  WW.stroke()
                }
              };
              if (WW.save(), WW.strokeStyle = iW.colour, WW.lineWidth = mW, WW.lineJoin = "round", "glow" === iW.style) WW.shadowColor = iW.colour, WW.shadowBlur = mW * ZW, LW(PW), LW(PW);
              else if ("double" === iW.style) {
                LW(PW);
                const WW = mW + 2;
                LW(PW.map((iW => ({
                  x: iW.x + WW,
                  y: iW.y + WW,
                  width: iW.width - 2 * WW,
                  height: iW.height - 2 * WW
                }))))
              } else LW(PW);
              WW.restore()
            }(WW, DW, iW)
          }(0, cW.k)(iW, WW);
          for (let EW = 0; EW < VW.length; EW++) {
            const iW = OW.effectImage(VW[EW]);
            iW && (WW.imageSmoothingEnabled = !1, WW.drawImage(iW, 5 + AW * EW, 5, lW, lW))
          }
        }
      }
    }
  },
  37353: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => NW,
      d: () => kW,
      h: () => lW,
      k: () => KW,
      n: () => MW,
      p: () => sW,
      r: () => wW,
      s: () => ZW
    });
    var mW = OW(625),
      EW = OW(327);
    const NW = {
        DEFAULT_FONT_SIZE: 47,
        DEFAULT_SUBTITLE_FONT_SIZE: 30,
        HORIZONTAL_PADDING: 30,
        VERTICAL_PADDING: 22,
        TEXT_SHADOW_WIDTH: 2,
        LINE_SPACING: 8,
        EFFECT_ICON_SIZE: 70
      },
      PW = 41;

    function LW(WW) {
      return `bolder ${WW}px 'Jetbrains Mono'`
    }

    function cW(WW) {
      return "object" === typeof WW && null !== WW
    }

    function wW(WW, iW) {
      const OW = "number" === typeof WW ? WW : "string" === typeof WW ? Number(WW.replace("px", "")) : NaN;
      return Number.isFinite(OW) && OW > 0 ? OW : iW
    }

    function tW(WW) {
      return cW(WW) ? WW : void 0
    }

    function ZW(WW) {
      const iW = "number" === typeof WW ? mW.E[WW] : WW;
      return "string" === typeof iW && Object.hasOwn(mW.p, iW) ? mW.p[iW] : void 0
    }

    function xW(WW, iW) {
      return "string" === typeof WW ? WW : cW(WW) ? "string" === typeof WW.translationKey ? iW.translate(WW.translationKey, WW.params).map((WW => "string" === typeof WW ? WW : WW.icon)).join("") : "string" === typeof WW.entityName ? iW.shownPlayerName(WW.entityName) : "" : void 0 === WW || null === WW ? "" : String(WW)
    }

    function lW(WW, iW, OW, mW) {
      if (!Array.isArray(WW)) return [];
      const PW = [];
      for (const AW of WW) {
        var LW, ZW;
        if (cW(AW) && "chatTag" in AW) {
          PW.push({
            kind: "rank",
            rank: AW
          });
          continue
        }
        if (cW(AW) && "icon" in AW && !("mainRGB" in AW)) {
          var lW;
          PW.push({
            kind: "icon",
            icon: String(AW.icon),
            size: wW(null === (lW = tW(AW.style)) || void 0 === lW ? void 0 : lW.fontSize, NW.DEFAULT_FONT_SIZE)
          });
          continue
        }
        if (cW(AW) && (0, EW.Cb)(AW)) {
          PW.push({
            kind: "text",
            text: "",
            size: iW,
            colour: mW
          });
          continue
        }
        let WW, bW;
        cW(AW) && (0, EW.yb)(AW) ? (WW = OW.keyBindingText(String(AW.action)), bW = tW(AW.style)) : cW(AW) && "str" in AW ? (WW = AW.str, bW = tW(AW.style)) : WW = AW;
        const jW = wW(null === (LW = bW) || void 0 === LW ? void 0 : LW.fontSize, iW),
          UW = null !== (ZW = (0, EW.cc)(bW)) && void 0 !== ZW ? ZW : mW;
        if (cW(WW) && "string" === typeof WW.translationKey) {
          const iW = OW.translate(WW.translationKey, WW.params);
          if (iW.some((WW => "string" !== typeof WW))) {
            for (const WW of iW) PW.push("string" === typeof WW ? {
              kind: "text",
              text: WW,
              size: jW,
              colour: UW
            } : {
              kind: "icon",
              icon: WW.icon,
              size: jW
            });
            continue
          }
        }
        PW.push({
          kind: "text",
          text: xW(WW, OW),
          size: jW,
          colour: UW
        })
      }
      return PW
    }

    function AW(WW) {
      return void 0 !== WW && "rank" !== WW.kind
    }

    function bW(WW, iW) {
      const OW = AW(WW),
        mW = AW(iW);
      return void 0 === WW && !mW || !OW && void 0 === iW ? 0 : OW !== mW ? .5 * NW.HORIZONTAL_PADDING : 0
    }

    function jW(WW) {
      return "rank" === WW.kind ? NW.DEFAULT_FONT_SIZE : WW.size
    }

    function UW(WW, iW, OW) {
      return "icon" === WW.kind ? WW.size : "rank" === WW.kind ? function(WW, iW) {
        const OW = iW.rankIcon(WW.rank.icon);
        return OW ? PW * (OW.width / OW.height) : PW
      }(WW, OW) + NW.HORIZONTAL_PADDING : (OW.glyphsShown(WW.text), iW.font = LW(WW.size), iW.measureText(WW.text).width)
    }

    function kW(WW, iW, OW) {
      if (0 === WW.length) return {
        width: 0,
        height: 0,
        sizes: []
      };
      let mW = 0;
      for (const NW of WW) mW = Math.max(mW, jW(NW));
      const EW = [];
      let PW = bW(void 0, WW[0]);
      for (let NW = 0; NW < WW.length; NW++) {
        const mW = PW;
        PW += UW(WW[NW], iW, OW), PW += bW(WW[NW], WW[NW + 1]), EW.push({
          x: mW,
          width: PW - mW
        })
      }
      return {
        width: PW,
        height: mW + NW.VERTICAL_PADDING,
        sizes: EW
      }
    }

    function sW(WW, iW, OW, mW, EW, NW, PW) {
      iW += bW(void 0, WW[0]);
      for (let LW = 0; LW < WW.length; LW++) {
        const cW = MW(WW[LW], iW, OW, mW, EW, NW, PW);
        iW += 0 === cW ? 0 : cW + bW(WW[LW], WW[LW + 1])
      }
    }

    function MW(WW, iW, OW, mW, EW, cW, wW, tW) {
      var ZW;
      if ("icon" === WW.kind) {
        const mW = cW.iconImage(WW.icon);
        return mW && wW.push({
          image: mW,
          x: iW,
          y: OW + NW.VERTICAL_PADDING / 2,
          size: WW.size
        }), WW.size
      }
      if ("rank" === WW.kind) {
        const LW = null !== tW && void 0 !== tW ? tW : UW(WW, EW, cW);
        return function(WW, iW, OW, mW, EW, LW, cW) {
          var wW, tW;
          const {
            rank: ZW
          } = WW;
          LW.fillStyle = ZW.mainRGB, LW.fillRect(iW, OW, mW, EW);
          const xW = cW.rankIcon(ZW.icon);
          if (!xW) return;
          const lW = PW / xW.height,
            AW = iW + (mW - xW.width * lW) / 2,
            bW = OW + (EW - PW) / 2,
            jW = new Path2D(xW.path),
            UW = NW.TEXT_SHADOW_WIDTH,
            kW = (null === (wW = ZW.nameTag) || void 0 === wW ? void 0 : wW.iconShadowRGB) || "black";
          for (const NW of [-1, 1])
            for (const WW of [-1, 1]) SW(LW, jW, AW + UW * NW, bW + UW * WW, lW, kW);
          SW(LW, jW, AW, bW, lW, (null === (tW = ZW.nameTag) || void 0 === tW ? void 0 : tW.iconRGB) || "white")
        }(WW, iW, OW, LW, mW, EW, cW), LW
      }
      if (0 === WW.text.length) return 0;
      const xW = LW(WW.size);
      EW.font = xW;
      const lW = null !== tW && void 0 !== tW ? tW : EW.measureText(WW.text).width;
      return function(WW, iW, OW, mW, EW, PW) {
        const LW = NW.TEXT_SHADOW_WIDTH;
        PW.font = mW, PW.fillStyle = "black";
        for (const NW of [-1, 1])
          for (const mW of [-1, 1]) PW.fillText(WW, iW + LW * NW, OW + LW * mW);
        PW.fillStyle = EW, PW.fillText(WW, iW, OW)
      }(WW.text, iW, OW + mW - NW.VERTICAL_PADDING + 5, xW, null !== (ZW = WW.colour) && void 0 !== ZW ? ZW : "white", EW), lW
    }

    function KW(WW, iW) {
      for (const {
          image: OW,
          x: mW,
          y: EW,
          size: NW
        }
        of WW) iW.imageSmoothingEnabled = !1, iW.drawImage(OW, mW, EW, NW, NW)
    }

    function SW(WW, iW, OW, mW, EW, NW) {
      WW.save(), WW.translate(OW, mW), WW.scale(EW, EW), WW.fillStyle = NW, WW.fill(iW), WW.restore()
    }
  },
  37432: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => aW,
      h: () => ii,
      i: () => BW,
      k: () => RW,
      m: () => GW,
      o: () => IW,
      p: () => Ei,
      q: () => qW,
      t: () => CW
    });
    var mW = OW(5185),
      EW = OW(5199),
      NW = OW(35231),
      PW = OW(4454),
      LW = OW(4448),
      cW = OW(1407),
      wW = OW(37343),
      tW = OW(100),
      ZW = OW(1255),
      xW = OW(37369),
      lW = OW(37436),
      AW = OW(37441),
      bW = OW(9346),
      jW = OW(8740),
      UW = OW(8942),
      kW = OW(9046),
      sW = OW(9208),
      MW = OW(9225);
    const KW = {
      youtube: bW.h,
      "person-military-pointing": jW.h,
      sparkle: UW.c,
      user: kW.i,
      wrench: sW.d,
      zap: MW.d,
      ...xW.e
    };

    function SW(WW) {
      const [iW, OW, , , mW] = WW.icon;
      return {
        width: iW,
        height: OW,
        path: "string" === typeof mW ? mW : mW.join(" ")
      }
    }
    const YW = new Map(Object.entries(KW).map((WW => {
      let [iW, OW] = WW;
      return [iW, SW(OW)]
    })));
    let yW = !1;
    const TW = new Set;
    var JW = OW(37446);
    const hW = "Jetbrains Mono",
      HW = "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2190-2193,U+2212,U+2215,U+2248,U+26A1,U+2713,U+FEFF,U+FFFD",
      nW = "U+0100-0130,U+0132-0151,U+0154-017F,U+018F-0190,U+0192,U+019B,U+01A0-01A1,U+01AF-01B0,U+01CD-01CE,U+01D0,U+01D2,U+01D4,U+01D6,U+01D8,U+01DA,U+01DC,U+01E6-01E7,U+01EA-01EB,U+01F4-01F5,U+01FC-01FF,U+0218-021B,U+0232-0233,U+0237,U+0259,U+02B9-02BA,U+02C7,U+02C9,U+02D8-02D9,U+02DB,U+02DD,U+02F3,U+02F7,U+0300-0303,U+0306-0307,U+0309-030C,U+030F,U+0312,U+031B,U+0323,U+0325-0328,U+0336-0338,U+0374-0375,U+037E,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03CF,U+03D5-03D7,U+0401-040C,U+040E-044F,U+0451-045C,U+045E-045F,U+0490-0493,U+049A-049B,U+04A2-04A3,U+04AE-04B1,U+04B6-04B7,U+04BA-04BB,U+04D8-04D9,U+04DC-04DF,U+04E4-04E9,U+04F4-04F5,U+0AEA,U+1E80-1E85,U+1E9E,U+1EA0-1EF9,U+2070,U+2074-207A,U+207C,U+2080-2089,U+20AB,U+20AE,U+20B4,U+20BD,U+20BF,U+2102,U+210D,U+2113,U+2115-2116,U+2119-211A,U+211D,U+2124,U+212E,U+2140,U+218A-218B,U+2194-2199,U+219D-219E,U+21A0,U+21A2-21A3,U+21A5-21A7,U+21A9-21AA,U+21AD,U+21BE,U+21C9,U+21D0-21D4,U+21DB,U+21DE-21DF,U+21E5,U+21E7-21E8,U+21EA,U+2200-220C,U+220E-2211,U+2213,U+2218-221A,U+221E,U+2223-2225,U+2227-222B,U+2234-2239,U+223C,U+223E,U+2243,U+2245,U+2247,U+2249,U+224B,U+224D,U+2254,U+2257,U+225F-2265,U+226A-2273,U+227A-227C,U+2282-2289,U+228E-2299,U+229B-22A5,U+22B4,U+22B8,U+22BB-22BD,U+22C2-22C4,U+22C6,U+22C8-22CA,U+22CE,U+22D0,U+22E2,U+22EE-22F1,U+2302-2305,U+2308-230B,U+2318,U+231C-231F,U+2324-2326,U+2328,U+232B,U+2336-237A,U+2389-238B,U+2395,U+239B-23AD,U+23CE,U+23FB-23FE,U+2400-2421,U+2423-2424,U+2500-25A1,U+25AA-25AB,U+25B2-25CC,U+25CE-25CF,U+25D4-25D5,U+25E6-25EB,U+25EF,U+25F6,U+266D,U+266F,U+2687,U+26A0,U+2715,U+2717,U+2736,U+276E-2771,U+2794,U+279C-279E,U+27C5-27C6,U+27DC,U+27E6-27EB,U+27F5-27F7,U+2916,U+294A,U+2987-2988,U+2A00,U+2A05-2A06,U+2B58,U+E0A0-E0A2,U+E0B0-E0B3,U+FE62,U+FF5B,U+FF5D,U+16910,U+1D538-1D539,U+1D53B-1D53E,U+1D540-1D544,U+1D546,U+1D54A-1D550,U+1D552-1D56B";

    function uW(WW) {
      return WW.split(",").map((WW => {
        const [iW, OW = iW] = WW.slice(2).split("-");
        return [parseInt(iW, 16), parseInt(OW, 16)]
      }))
    }
    const oW = {
        latin: uW(HW),
        rest: uW(nW)
      },
      dW = new RegExp(`[${oW.rest.map((WW=>{let[iW,OW]=WW;return`\\u{${iW.toString(16)}}-\\u{${OW.toString(16)}}`})).join("")}]`, "u");

    function eW(WW) {
      return iW => {
        console.warn(`[bloxd-wasm-client] the text font's ${WW} file did not load`, iW)
      }
    }
    const vW = 397,
      gW = 1,
      DW = {
        translate: WW => [WW],
        keyBindingText: WW => WW,
        isFriend: () => !1,
        hiddenNames: {},
        loadsFontRest: !1
      };
    let VW = null,
      pW = 0,
      fW = "none";

    function CW() {
      return pW
    }
    const XW = new Set;

    function BW(WW) {
      return XW.add(WW), () => {
        XW.delete(WW)
      }
    }

    function qW() {
      pW++, !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0] ? fW = "all" : "none" === fW && (fW = "notBoards");
      for (const WW of XW) WW()
    }(0, xW.o)((() => {
      qW(!1)
    })), (0, cW.u)((() => {
      (function() {
        const WW = yW;
        return yW = !1, WW
      })() && qW(!1)
    }));
    const RW = new class {
      constructor(WW) {
        this.loaded = WW, this.latin = null, this.rest = null, this.restWanted = !1
      }
      load() {
        if (null === this.latin) {
          this.latin = new FontFace(hW, `url(${(0,JW.d)()}) format("woff2")`, {
            unicodeRange: HW
          }).load().then((WW => {
            document.fonts.add(WW), this.loaded()
          }), eW("Latin"));
          const WW = new FontFace(hW, `url(${(0,JW.h)()}) format("woff2")`, {
            unicodeRange: nW,
            display: "swap"
          });
          document.fonts.add(WW), WW.loaded.then((() => {
            this.loaded()
          }), eW("rest")), this.rest = WW, this.restWanted && WW.load()
        }
        return this.latin
      }
      loadRest() {
        var WW;
        this.restWanted || (this.restWanted = !0, null === (WW = this.rest) || void 0 === WW || WW.load())
      }
      async untilLoadedFor(WW) {
        await this.load(), this.loadFor(WW), await document.fonts.load(`16px '${hW}'`, WW).catch((iW => {
          console.warn("[bloxd-wasm-client] the text font did not load for", WW, iW)
        }))
      }
      loadFor(WW) {
        !this.restWanted && dW.test(WW) && this.loadRest()
      }
    }(qW);

    function GW(WW) {
      Object.assign(DW, WW), DW.loadsFontRest && RW.loadRest(), qW(!1)
    }

    function IW(WW) {
      WW !== VW && (VW = WW, qW())
    }

    function aW(WW) {
      if ("none" === fW || null === WW) return;
      WW(vW, "all" === fW ? 0 : gW, new Uint8Array(0)) && (fW = "none")
    }
    const rW = new Map,
      zW = new Map;

    function FW(WW, iW, OW) {
      var mW;
      const EW = OW ? `${WW}#${OW.join(",")}` : WW,
        NW = rW.get(EW);
      if (NW) return NW.image;
      const PW = {
        image: null !== (mW = zW.get(EW)) && void 0 !== mW ? mW : null
      };
      return rW.set(EW, PW), iW().then((async WW => {
        if (null === WW) return null;
        const iW = new Image;
        iW.crossOrigin = "anonymous", iW.src = WW, await iW.decode();
        const mW = await createImageBitmap(iW);
        if (!OW) return mW;
        try {
          return function(WW, iW) {
            let [OW, mW, EW] = iW;
            const NW = (0, wW.g)(WW.width, WW.height),
              {
                canvas: PW
              } = NW;
            return NW.drawImage(WW, 0, 0), NW.globalCompositeOperation = "multiply", NW.fillStyle = `rgb(${OW}, ${mW}, ${EW})`, NW.fillRect(0, 0, PW.width, PW.height), NW.globalCompositeOperation = "destination-in", NW.drawImage(WW, 0, 0), PW
          }(mW, OW)
        } finally {
          mW.close()
        }
      })).then((WW => {
        rW.get(EW) === PW && zW.delete(EW), WW !== PW.image && (PW.image = WW, qW(!1))
      }), (iW => {
        console.warn(`[bloxd-wasm-client] text icon ${WW} did not load`, iW), rW.get(EW) === PW && (rW.delete(EW), zW.delete(EW), null !== PW.image && qW(!1))
      })), PW.image
    }(0, lW.b)((() => {
      zW.clear();
      for (const [WW, {
          image: iW
        }] of rW) null !== iW && zW.set(WW, iW);
      rW.clear(), qW(!1)
    }));
    const QW = new Set(mW.c),
      Wi = new Set(["CubeBlock", "SlabBlock", "StairsBlock"]);

    function ii() {
      (0, AW.d)().catch((() => {}))
    }

    function Oi(WW) {
      return QW.has(WW) ? FW(`icon:${WW}`, (async () => {
        var iW, OW;
        return null !== (iW = null === (OW = (0, lW.f)()) || void 0 === OW ? void 0 : OW.textureUrl(WW)) && void 0 !== iW ? iW : (await (0, AW.c)()).ingameIconUrl(WW)
      })) : null
    }
    let mi = "unasked";
    const Ei = {
      get canSeeRealPlayerNames() {
        return tW.featureFlags.canSeeRealPlayerNames
      },
      get canSeePlayerWrittenText() {
        return tW.featureFlags.canSeePlayerWrittenText
      },
      get localPlayerDbId() {
        return VW
      },
      shownPlayerName: WW => (0, ZW.g)(WW, DW.hiddenNames),
      translate: (WW, iW) => {
        const OW = "object" === typeof iW && null !== iW ? iW : void 0;
        return DW.translate(WW, (0, ZW.j)(OW, DW.hiddenNames))
      },
      keyBindingText: WW => DW.keyBindingText(WW),
      isFriend: WW => DW.isFriend(WW, DW.hiddenNames),
      iconImage: function(WW) {
        if (QW.has(WW)) return Oi(WW);
        if ("unasked" === mi && (mi = "loading", (0, LW.f)().then((() => {
            mi = "in", qW(!1)
          }), (WW => {
            mi = "failed", console.warn("[bloxd-wasm-client] the item sprite table did not load, so text item icons stay blank", WW)
          }))), "in" !== mi) return null;
        const iW = (0, PW.b)(WW),
          OW = void 0 === iW ? void 0 : (0, NW.itemTypeNameOf)(iW);
        if ("Gun" === OW) return null;
        const mW = (0, LW.b)(WW),
          cW = void 0 !== OW && Wi.has(OW);
        if (cW && void 0 === mW) return null;
        const wW = void 0 !== iW && "GrayscaleArmour" === (0, NW.itemTypeOf)(iW) || Object.hasOwn(EW.b, WW),
          tW = null !== mW && void 0 !== mW ? mW : WW;
        return FW(cW ? `block:${tW}` : `item:${tW}`, (async () => {
          var WW, iW;
          const OW = (0, lW.f)(),
            mW = await (0, AW.d)();
          return null !== (WW = null !== (iW = null === OW || void 0 === OW ? void 0 : OW.textureUrl(tW)) && void 0 !== iW ? iW : mW.itemSpriteUrl(tW)) && void 0 !== WW ? WW : cW ? null : mW.notFoundUrl()
        }), wW ? (0, EW.c)(WW) : void 0)
      },
      effectImage: Oi,
      rankIcon: function(WW) {
        const iW = YW.get(WW);
        if (iW) return iW;
        const OW = (0, cW.f)(WW, (0, cW.m)(WW));
        if (!OW) return (0, cW.j)("brands") && (0, cW.j)("solid") ? TW.has(WW) || (TW.add(WW), console.warn(`[bloxd-wasm-client] unknown rank icon "${WW}": not in the bundled Font Awesome subset, so its tag draws no icon`)) : yW = !0, null;
        const mW = SW(OW);
        return YW.set(WW, mW), mW
      },
      glyphsShown: WW => {
        RW.loadFor(WW)
      }
    }
  },
  37336: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => jW,
      h: () => fW,
      i: () => nW,
      l: () => dW
    });
    var mW = OW(37423),
      EW = OW(37343),
      NW = OW(37348),
      PW = OW(37353);

    function LW(WW, iW, OW) {
      const mW = "object" === typeof WW && null !== WW ? WW : {},
        EW = function(WW, iW, OW) {
          if (!Array.isArray(WW) || 0 === WW.length) return [];
          const mW = [{
            width: 0,
            height: 0,
            y: 0,
            items: []
          }];
          for (const LW of (0, PW.h)(WW, PW.c.DEFAULT_FONT_SIZE, OW)) {
            if ("text" !== LW.kind) {
              mW[mW.length - 1].items.push({
                content: LW,
                chars: 1,
                size: {
                  x: 0,
                  width: 0
                }
              });
              continue
            }
            if (0 === LW.text.length) continue;
            const WW = mW[mW.length - 1].items.reduce(((WW, iW) => WW + ("text" === iW.content.kind ? (0, NW.d)(iW.content.text) : iW.chars)), 0);
            (0, NW.f)(LW.text, WW).forEach(((WW, iW) => {
              iW > 0 && mW.push({
                width: 0,
                height: 0,
                y: 0,
                items: []
              }), WW.length > 0 && mW[mW.length - 1].items.push({
                content: {
                  ...LW,
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
          let EW = PW.c.VERTICAL_PADDING / 2;
          for (const NW of mW) {
            if (0 === NW.items.length) continue;
            const {
              width: WW,
              height: mW,
              sizes: LW
            } = (0, PW.d)(NW.items.map((WW => WW.content)), iW, OW);
            NW.items.forEach(((WW, iW) => {
              WW.size = LW[iW]
            })), NW.width = WW, NW.height = mW, NW.y = EW, EW += mW + PW.c.LINE_SPACING
          }
          return mW
        }(mW.content, iW, OW);
      let LW = 0,
        cW = PW.c.VERTICAL_PADDING,
        wW = 0;
      for (const NW of EW) {
        LW = Math.max(LW, NW.width + 2 * PW.c.HORIZONTAL_PADDING), cW += NW.height + PW.c.LINE_SPACING;
        for (const WW of NW.items) wW += WW.chars
      }
      const tW = "string" === typeof mW.backgroundColor ? mW.backgroundColor : "#22283b";
      return {
        width: LW,
        height: cW,
        chars: wW,
        draw: (WW, iW) => {
          const mW = [];
          if (WW.fillStyle = tW, WW.fillRect(0, 0, LW, cW), null === iW)
            for (const NW of EW) NW.items.length > 0 && (0, PW.p)(NW.items.map((WW => WW.content)), 0, NW.y, NW.height, WW, OW, mW);
          else {
            let NW = 0;
            for (const LW of EW)
              for (const EW of LW.items) {
                if (NW >= iW) break;
                const cW = "text" === EW.content.kind ? {
                  ...EW.content,
                  text: EW.content.text.substring(0, iW - NW)
                } : EW.content;
                (0, PW.n)(cW, EW.size.x, LW.y, LW.height, WW, OW, mW, EW.size.width), NW += EW.chars
              }
          }(0, PW.k)(mW, WW)
        }
      }
    }
    var cW = OW(37360),
      wW = OW(37415);
    const tW = 256,
      ZW = 1024,
      xW = {
        width: 1,
        height: 7 / 8
      };
    var lW = OW(37425);
    const AW = {
      leaderboard: ""
    };
    var bW = OW(37432);
    const jW = {
        Nametag: 1,
        MultilineText: 2,
        Board: 3,
        Leaderboard: 4
      },
      UW = 2048,
      kW = 256,
      sW = 10,
      MW = 4,
      KW = 65536,
      SW = new TextDecoder;
    let YW = bW.p,
      yW = -1;
    const TW = new Map,
      JW = new Map;
    let hW = 0;
    const HW = new TextEncoder;

    function nW(WW, iW) {
      const OW = HW.encode(JSON.stringify(iW)),
        mW = new Uint8Array(OW.length + 1);
      return mW[0] = WW, mW.set(OW, 1), mW
    }
    const uW = {
        name: "Ag",
        info: null,
        colour: "default",
        ranks: [],
        effects: [],
        health: .5,
        TP: null,
        hideNameSeed: null
      },
      oW = [nW(jW.Nametag, uW), nW(jW.Nametag, {
        ...uW,
        info: {
          content: [{
            str: "Ag"
          }],
          subtitle: ["Ag"]
        }
      }), nW(jW.MultilineText, {
        box: {
          content: ["Ag"]
        },
        shown: null
      }), ...mW.d.map(((WW, iW) => nW(jW.Board, {
        shared: {
          text: "Ag",
          textSize: iW
        },
        w: 0,
        h: 0
      })))];

    function dW(WW) {
      bW.k.load().then((() => {
        if (WW()) return;
        const iW = (0, EW.g)(1, 1, {
          willReadFrequently: !0
        });
        var OW;
        iW && (OW = iW.canvas, oW.map((WW => fW(WW, OW))))
      }))
    }
    let eW = bW.t;

    function vW() {
      TW.clear(), JW.clear()
    }

    function gW(WW, iW) {
      const OW = WW.get(iW);
      return void 0 !== OW && (WW.delete(iW), WW.set(iW, OW)), OW
    }

    function DW(WW, iW, OW) {
      WW.set(iW, OW), WW.size > kW && WW.delete(WW.keys().next().value)
    }

    function VW(WW, iW, OW) {
      if (WW === jW.Nametag) {
        let WW = gW(TW, iW);
        return void 0 === WW && (WW = (0, cW.e)(JSON.parse(iW), OW, YW), DW(TW, iW, WW)), WW
      }
      if (WW === jW.MultilineText) {
        var EW;
        const WW = JSON.parse(iW),
          mW = JSON.stringify(null !== (EW = WW.box) && void 0 !== EW ? EW : null),
          NW = "number" === typeof WW.shown ? WW.shown : null;
        let PW = gW(JW, mW);
        void 0 === PW && (PW = LW(WW.box, OW, YW), DW(JW, mW, PW));
        const cW = null === NW ? null : Math.min(Math.max(0, Math.floor(NW)), PW.chars),
          wW = PW;
        return {
          width: wW.width,
          height: wW.height,
          draw: WW => {
            wW.draw(WW, cW)
          }
        }
      }
      if (WW === jW.Board) return function(WW, iW) {
        var OW;
        if (!iW.canSeePlayerWrittenText) return null;
        const {
          shared: EW,
          w: NW = 0,
          h: PW = 0
        } = WW, LW = !NW;
        let cW;
        if (LW) {
          var lW, AW;
          cW = null !== (lW = null === EW || void 0 === EW || null === (AW = EW.text) || void 0 === AW ? void 0 : AW.toString()) && void 0 !== lW ? lW : ""
        } else {
          if ("string" !== typeof(null === EW || void 0 === EW ? void 0 : EW.text)) return null;
          cW = EW.text
        }
        if ("" === cW.trim()) return null;
        const bW = null !== (OW = null === EW || void 0 === EW ? void 0 : EW.textSize) && void 0 !== OW ? OW : 0,
          jW = mW.d[bW].ingameFontSize;
        let UW = xW,
          kW = tW;
        LW || (cW = (0, mW.s)(cW, bW, NW, PW), UW = (0, mW.x)(NW, PW), kW = Math.min(tW, ZW / Math.max(UW.width, UW.height)));
        const sW = Math.round(kW * UW.width),
          MW = Math.round(kW * UW.height),
          KW = kW / tW;
        return {
          width: sW,
          height: MW,
          draw: WW => {
            wW.c.fontSize = jW * KW, wW.c.fontWeight = "bold", wW.c.font = "'Jetbrains Mono', monospace", wW.c.drawText(WW, cW, 0, (-10 - 7 * bW) * KW, sW, MW)
          }
        }
      }(JSON.parse(iW), YW);
      if (WW === jW.Leaderboard) return function(WW, iW, OW) {
        var mW;
        const EW = (0, lW.g)(WW.opts, AW),
          NW = (0, lW.c)(EW, OW),
          PW = {
            top: (0, lW.d)(EW, (0, lW.k)(WW.top)),
            around: null !== (mW = WW.around) && void 0 !== mW ? mW : null,
            showPlayerText: iW.canSeePlayerWrittenText,
            localPlayerDbId: iW.localPlayerDbId
          };
        return {
          width: NW.pixelWidth,
          height: NW.pixelHeight,
          draw: WW => {
            const {
              a: iW,
              d: OW
            } = WW.getTransform();
            (0, lW.b)(WW, Math.round(NW.pixelWidth * iW), Math.round(NW.pixelHeight * OW), NW, EW, PW)
          }
        }
      }(JSON.parse(iW), YW, UW);
      throw new Error(`unknown text plane kind ${WW}`)
    }
    const pW = 2 ** Math.floor(Math.log2(UW));

    function fW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      try {
        if (WW.length < 2) return [0, 0];
        const NW = (0, EW.c)(iW);
        if (!NW) return [0, 0];
        const PW = eW();
        PW !== yW && (yW = PW, vW());
        const [LW] = WW, cW = SW.decode(WW.subarray(1));
        let wW;
        LW !== jW.Board && LW !== jW.Leaderboard || !YW.canSeePlayerWrittenText || YW.glyphsShown(cW), NW.save();
        try {
          wW = VW(LW, cW, NW)
        } finally {
          NW.restore()
        }
        if (null === wW || !(wW.width > 0 && wW.height > 0)) return [0, 0];
        const tW = Math.min(1, UW / wW.width, UW / wW.height),
          ZW = WW => mW ? function(WW) {
            const iW = 2 ** Math.ceil(Math.log2(WW));
            return Math.min(pW, iW - WW > WW - iW / 2 ? iW / 2 : iW)
          }(WW) : Math.min(UW, Math.ceil(WW * tW)),
          [xW, lW] = [ZW(wW.width), ZW(wW.height)];
        ! function(WW, iW, OW, mW, EW) {
          const NW = Math.max(WW.width, OW),
            PW = Math.max(WW.height, mW),
            LW = EW || NW * PW > Math.max(MW * OW * mW, KW),
            [cW, wW] = LW ? [OW, mW] : [NW, PW];
          cW === WW.width && wW === WW.height ? iW.clearRect(0, 0, cW, wW) : (WW.width = cW, WW.height = wW)
        }(iW, NW, xW, lW, OW), NW.save();
        try {
          const [WW, iW] = mW ? [xW / wW.width, lW / wW.height] : [tW, tW];
          1 === WW && 1 === iW || NW.scale(WW, iW), wW.draw(NW)
        } finally {
          NW.restore()
        }
        return [xW, lW]
      } catch (NW) {
        ! function(WW, iW) {
          hW < sW && (hW++, console.warn(`[bloxd-wasm-client] ${WW}`, iW))
        }("could not raster a text plane", NW);
        try {
          iW.width = 1
        } catch {}
        return [0, 0]
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);