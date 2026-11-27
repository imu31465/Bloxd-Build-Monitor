export const id = 243;
export const ids = [243];
export const modules = {
  37357: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => qR,
      h: () => ZR
    });
    var yR = GR(4563);
    let tR = null,
      uR = null;

    function ZR() {
      return uR ??= GR.e(241).then((() => GR(37221))).then((RR => {
        let {
          ITEM_SPRITES: JR,
          ITEM_SPRITES_WITHOUT_FILE: GR,
          ITEM_FILES_WITHOUT_SPRITE: uR
        } = RR;
        tR = function(RR, JR, GR) {
          const tR = new Set,
            uR = (0, yR.u)(JR);
          let ZR = 0;
          for (const [yR, qR] of RR.entries()) yR === uR[ZR] ? ZR++ : tR.add(qR);
          if ("" !== GR)
            for (const qR of GR.split(yR.r)) tR.add(qR);
          return tR
        }(JR.split(yR.r), GR, uR)
      }), (RR => {
        throw uR = null, RR
      })), uR
    }

    function qR(RR) {
      var JR, GR;
      return null !== (JR = null === (GR = tR) || void 0 === GR ? void 0 : GR.has(RR)) && void 0 !== JR && JR
    }
  },
  37346: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => VR,
      f: () => iR,
      g: () => qR,
      j: () => fR
    });
    var yR = GR(2144);
    let tR = null,
      uR = 0;
    const ZR = new Set;

    function qR() {
      return tR
    }

    function iR() {
      return uR
    }

    function fR(RR) {
      tR = RR, uR++, (0, yR.e)();
      for (const JR of ZR) JR()
    }

    function VR(RR) {
      ZR.add(RR)
    }
  },
  37353: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => ZR,
      e: () => qR
    });
    var yR = GR(37357);
    let tR = null,
      uR = null;

    function ZR() {
      return tR ??= GR.e(74).then((() => GR(42743))).catch((RR => {
        throw tR = null, RR
      })), tR
    }

    function qR() {
      return uR ??= Promise.all([ZR(), (0, yR.h)()]).then((RR => {
        let [JR] = RR;
        return JR
      }), (RR => {
        throw uR = null, RR
      })), uR
    }
  },
  37272: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => XR
    });
    var yR = GR(5281),
      tR = GR(1359),
      uR = GR(656),
      ZR = GR(2242),
      qR = GR(37278),
      iR = GR(37266);
    const fR = 10,
      VR = 3,
      KR = 3,
      wR = [{
        healthFraction: .25,
        colour: "#ff0000"
      }, {
        healthFraction: .5,
        colour: "#ffaa00"
      }, {
        healthFraction: 1,
        colour: "#00ff00"
      }],
      rR = 64,
      eR = 69,
      aR = {
        icon: ZR.b,
        mainRGB: "transparent",
        chatTag: [],
        nameTag: {
          iconRGB: "#f38ab6",
          iconShadowRGB: "black"
        },
        visible: !0
      };

    function LR(RR) {
      return "object" !== typeof RR || null === RR || Array.isArray(RR) ? void 0 : RR
    }
    const nR = new Set(yR.c);

    function UR(RR, JR) {
      return "string" === typeof RR ? (0, iR.m)(RR, JR) : JR
    }

    function WR(RR) {
      return UR(RR.width, VR)
    }

    function AR(RR, JR) {
      var GR;
      const yR = null !== (GR = RR.applyTo) && void 0 !== GR ? GR : "both";
      return "both" === yR || yR === JR
    }

    function CR(RR) {
      const JR = WR(RR);
      return "glow" === RR.style ? JR * KR : Math.ceil(JR / 2) + 1
    }

    function XR(RR, JR, GR) {
      var yR, ZR;
      const VR = null !== (yR = LR(RR.info)) && void 0 !== yR ? yR : {},
        XR = "string" === typeof RR.name ? RR.name : "",
        MR = VR.subtitle;
      if (Array.isArray(VR.content) && 0 === VR.content.length && !(Array.isArray(MR) && MR.length > 0)) return null;
      const BR = "number" === typeof RR.hideNameSeed ? RR.hideNameSeed : null,
        lR = "" === XR || !0 === RR.mesh ? XR : (0, tR.e)(XR, !GR.canSeeRealPlayerNames, BR);
      if (!lR && !VR.content) return null;
      const pR = "string" === typeof RR.colour ? RR.colour : "default",
        gR = Object.hasOwn(uR.v, pR) ? uR.v[pR] : void 0,
        bR = VR.content ? (0, iR.h)(VR.content, iR.c.DEFAULT_FONT_SIZE, GR, gR) : [{
          kind: "text",
          text: lR,
          size: iR.c.DEFAULT_FONT_SIZE,
          colour: gR
        }],
        vR = [],
        OR = "boolean" === typeof RR.player ? RR.player : Array.isArray(RR.ranks),
        xR = OR ? (0, qR.i)(VR.backgroundColor) : null;
      xR && vR.push({
        kind: "rank",
        rank: xR
      });
      for (const tR of Array.isArray(RR.ranks) ? RR.ranks : []) {
        const RR = (0, iR.p)(tR);
        null !== RR && void 0 !== RR && RR.nameTag && RR.visible && vR.push({
          kind: "rank",
          rank: RR
        })
      }
      vR.push(...bR), OR && "" !== XR && GR.isFriend(XR) && vR.push({
        kind: "rank",
        rank: aR
      }), "number" === typeof RR.xZ && vR.push({
        kind: "text",
        text: ` ${RR.xZ}m`,
        size: iR.c.DEFAULT_FONT_SIZE,
        colour: "#cef3ff"
      });
      const NR = MR ? (0, iR.h)(MR, iR.c.DEFAULT_SUBTITLE_FONT_SIZE, GR) : null,
        DR = "string" === typeof VR.backgroundColor ? VR.backgroundColor : "#22283b",
        HR = "string" === typeof VR.subtitleBackgroundColor ? VR.subtitleBackgroundColor : "#1a1e2d",
        oR = LR(VR.healthbar),
        cR = LR(VR.border),
        PR = Array.isArray(RR.effects) ? RR.effects.filter((RR => "string" === typeof RR && nR.has(RR))) : [],
        IR = "number" === typeof RR.health ? Math.max(0, Math.min(1, RR.health)) : null,
        mR = (0, iR.g)(vR, JR, GR),
        zR = (0, iR.g)(null !== NR && void 0 !== NR ? NR : [], JR, GR),
        SR = {
          width: iR.c.EFFECT_ICON_SIZE * PR.length,
          height: PR.length > 0 ? iR.c.EFFECT_ICON_SIZE : 0
        },
        jR = cR && AR(cR, "nametag") ? CR(cR) : 0,
        dR = UR(null === oR || void 0 === oR ? void 0 : oR.height, fR),
        ER = cR && AR(cR, "healthbar") ? CR(cR) : 0,
        YR = "never" === (null !== (ZR = null === oR || void 0 === oR ? void 0 : oR.display) && void 0 !== ZR ? ZR : "onDamage") ? 0 : dR + ER,
        kR = Math.max(SR.height, jR),
        QR = Math.max(iR.c.VERTICAL_PADDING, YR, jR);
      let FR = Math.max(mR.width, zR.width, SR.width);
      if (cR) {
        const RR = CR(cR) + iR.c.HORIZONTAL_PADDING / 2;
        FR = Math.max(FR, Math.max(mR.width, zR.width) + iR.c.HORIZONTAL_PADDING + 2 * RR)
      }
      const TR = mR.height + zR.height + kR + QR,
        sR = mR.width + iR.c.HORIZONTAL_PADDING,
        hR = zR.width + iR.c.HORIZONTAL_PADDING,
        RJ = Math.max(sR, hR),
        JJ = (FR - RJ) / 2,
        GJ = Math.max(SR.height, jR);
      return {
        width: FR,
        height: TR,
        draw: RR => {
          const JR = [];
          if (RR.fillStyle = DR, RR.fillRect(JJ, GJ, RJ, mR.height), (0, iR.l)(vR, (FR - sR) / 2 + iR.c.HORIZONTAL_PADDING / 2, GJ, mR.height, RR, GR, JR), NR) {
            const yR = GJ + mR.height;
            RR.fillStyle = HR, RR.fillRect(JJ, yR, RJ, zR.height), (0, iR.l)(NR, (FR - hR) / 2 + iR.c.HORIZONTAL_PADDING / 2, yR, zR.height, RR, GR, JR)
          }
          let yR = null;
          if (null !== IR) {
            const JR = TR - dR - ER;
            null !== oR && void 0 !== oR && oR.backgroundColour && (RR.fillStyle = oR.backgroundColour, RR.fillRect(JJ, JR, RJ, dR)), RR.fillStyle = function(RR, JR) {
              const GR = null === RR || void 0 === RR ? void 0 : RR.foregroundColour;
              if ("string" === typeof GR) return GR;
              const yR = [...Array.isArray(GR) && GR.length > 0 ? GR : wR].sort(((RR, JR) => RR.healthFraction - JR.healthFraction)),
                tR = yR.find((RR => JR <= RR.healthFraction));
              return (null !== tR && void 0 !== tR ? tR : yR[yR.length - 1]).colour
            }(oR, IR), RR.fillRect(JJ, JR, Math.round(RJ * IR), dR), yR = {
              x: JJ,
              y: JR,
              width: RJ,
              height: dR
            }
          }
          if (cR) {
            const JR = [];
            AR(cR, "nametag") && JR.push({
              x: JJ,
              y: GJ,
              width: RJ,
              height: mR.height + (NR ? zR.height : 0)
            }), yR && AR(cR, "healthbar") && JR.push(yR), JR.length > 0 && function(RR, JR, GR) {
              const yR = WR(JR),
                tR = yR / 2,
                uR = RR => RR.width > 0 && RR.height > 0,
                ZR = GR.map((RR => ({
                  x: RR.x + tR,
                  y: RR.y + tR,
                  width: RR.width - yR,
                  height: RR.height - yR
                }))).filter(uR);
              if (0 === ZR.length) return;
              const qR = JR => {
                const GR = JR.filter(uR);
                if (0 !== GR.length) {
                  RR.beginPath();
                  for (const JR of GR) RR.rect(JR.x, JR.y, JR.width, JR.height);
                  RR.stroke()
                }
              };
              if (RR.save(), RR.strokeStyle = JR.colour, RR.lineWidth = yR, RR.lineJoin = "round", "glow" === JR.style) RR.shadowColor = JR.colour, RR.shadowBlur = yR * KR, qR(ZR), qR(ZR);
              else if ("double" === JR.style) {
                qR(ZR);
                const RR = yR + 2;
                qR(ZR.map((JR => ({
                  x: JR.x + RR,
                  y: JR.y + RR,
                  width: JR.width - 2 * RR,
                  height: JR.height - 2 * RR
                }))))
              } else qR(ZR);
              RR.restore()
            }(RR, cR, JR)
          }(0, iR.j)(JR, RR);
          for (let tR = 0; tR < PR.length; tR++) {
            const JR = GR.effectImage(PR[tR]);
            JR && (RR.imageSmoothingEnabled = !1, RR.drawImage(JR, 5 + eR * tR, 5, rR, rR))
          }
        }
      }
    }
  },
  37266: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => uR,
      g: () => UR,
      h: () => rR,
      j: () => CR,
      k: () => AR,
      l: () => WR,
      m: () => fR,
      p: () => KR
    });
    var yR = GR(656),
      tR = GR(359);
    const uR = {
        DEFAULT_FONT_SIZE: 47,
        DEFAULT_SUBTITLE_FONT_SIZE: 30,
        HORIZONTAL_PADDING: 30,
        VERTICAL_PADDING: 22,
        TEXT_SHADOW_WIDTH: 2,
        LINE_SPACING: 8,
        EFFECT_ICON_SIZE: 70
      },
      ZR = 41;

    function qR(RR) {
      return `bolder ${RR}px 'Jetbrains Mono'`
    }

    function iR(RR) {
      return "object" === typeof RR && null !== RR
    }

    function fR(RR, JR) {
      const GR = "number" === typeof RR ? RR : "string" === typeof RR ? Number(RR.replace("px", "")) : NaN;
      return Number.isFinite(GR) && GR > 0 ? GR : JR
    }

    function VR(RR) {
      return iR(RR) ? RR : void 0
    }

    function KR(RR) {
      const JR = "number" === typeof RR ? yR.z[RR] : RR;
      return "string" === typeof JR && Object.hasOwn(yR.n, JR) ? yR.n[JR] : void 0
    }

    function wR(RR, JR) {
      return "string" === typeof RR ? RR : iR(RR) ? "string" === typeof RR.translationKey ? JR.translate(RR.translationKey, RR.params).map((RR => "string" === typeof RR ? RR : RR.icon)).join("") : "string" === typeof RR.entityName ? JR.shownPlayerName(RR.entityName) : "" : void 0 === RR || null === RR ? "" : String(RR)
    }

    function rR(RR, JR, GR, yR) {
      if (!Array.isArray(RR)) return [];
      const ZR = [];
      for (const eR of RR) {
        var qR, KR;
        if (iR(eR) && "chatTag" in eR) {
          ZR.push({
            kind: "rank",
            rank: eR
          });
          continue
        }
        if (iR(eR) && "icon" in eR && !("mainRGB" in eR)) {
          var rR;
          ZR.push({
            kind: "icon",
            icon: String(eR.icon),
            size: fR(null === (rR = VR(eR.style)) || void 0 === rR ? void 0 : rR.fontSize, uR.DEFAULT_FONT_SIZE)
          });
          continue
        }
        if (iR(eR) && (0, tR.sb)(eR)) {
          ZR.push({
            kind: "text",
            text: "",
            size: JR,
            colour: yR
          });
          continue
        }
        let RR, aR;
        iR(eR) && (0, tR.rb)(eR) ? (RR = GR.keyBindingText(String(eR.action)), aR = VR(eR.style)) : iR(eR) && "str" in eR ? (RR = eR.str, aR = VR(eR.style)) : RR = eR;
        const LR = fR(null === (qR = aR) || void 0 === qR ? void 0 : qR.fontSize, JR),
          nR = null !== (KR = (0, tR.Zb)(aR)) && void 0 !== KR ? KR : yR;
        if (iR(RR) && "string" === typeof RR.translationKey) {
          const JR = GR.translate(RR.translationKey, RR.params);
          if (JR.some((RR => "string" !== typeof RR))) {
            for (const RR of JR) ZR.push("string" === typeof RR ? {
              kind: "text",
              text: RR,
              size: LR,
              colour: nR
            } : {
              kind: "icon",
              icon: RR.icon,
              size: LR
            });
            continue
          }
        }
        ZR.push({
          kind: "text",
          text: wR(RR, GR),
          size: LR,
          colour: nR
        })
      }
      return ZR
    }

    function eR(RR) {
      return void 0 !== RR && "rank" !== RR.kind
    }

    function aR(RR, JR) {
      const GR = eR(RR),
        yR = eR(JR);
      return void 0 === RR && !yR || !GR && void 0 === JR ? 0 : GR !== yR ? .5 * uR.HORIZONTAL_PADDING : 0
    }

    function LR(RR) {
      return "rank" === RR.kind ? uR.DEFAULT_FONT_SIZE : RR.size
    }

    function nR(RR, JR, GR) {
      return "icon" === RR.kind ? RR.size : "rank" === RR.kind ? function(RR, JR) {
        const GR = JR.rankIcon(RR.rank.icon);
        return GR ? ZR * (GR.width / GR.height) : ZR
      }(RR, GR) + uR.HORIZONTAL_PADDING : (GR.glyphsShown(RR.text), JR.font = qR(RR.size), JR.measureText(RR.text).width)
    }

    function UR(RR, JR, GR) {
      if (0 === RR.length) return {
        width: 0,
        height: 0,
        sizes: []
      };
      let yR = 0;
      for (const uR of RR) yR = Math.max(yR, LR(uR));
      const tR = [];
      let ZR = aR(void 0, RR[0]);
      for (let uR = 0; uR < RR.length; uR++) {
        const yR = ZR;
        ZR += nR(RR[uR], JR, GR), ZR += aR(RR[uR], RR[uR + 1]), tR.push({
          x: yR,
          width: ZR - yR
        })
      }
      return {
        width: ZR,
        height: yR + uR.VERTICAL_PADDING,
        sizes: tR
      }
    }

    function WR(RR, JR, GR, yR, tR, uR, ZR) {
      JR += aR(void 0, RR[0]);
      for (let qR = 0; qR < RR.length; qR++) {
        const iR = AR(RR[qR], JR, GR, yR, tR, uR, ZR);
        JR += 0 === iR ? 0 : iR + aR(RR[qR], RR[qR + 1])
      }
    }

    function AR(RR, JR, GR, yR, tR, iR, fR, VR) {
      var KR;
      if ("icon" === RR.kind) {
        const yR = iR.iconImage(RR.icon);
        return yR && fR.push({
          image: yR,
          x: JR,
          y: GR + uR.VERTICAL_PADDING / 2,
          size: RR.size
        }), RR.size
      }
      if ("rank" === RR.kind) {
        const qR = null !== VR && void 0 !== VR ? VR : nR(RR, tR, iR);
        return function(RR, JR, GR, yR, tR, qR, iR) {
          var fR, VR;
          const {
            rank: KR
          } = RR;
          qR.fillStyle = KR.mainRGB, qR.fillRect(JR, GR, yR, tR);
          const wR = iR.rankIcon(KR.icon);
          if (!wR) return;
          const rR = ZR / wR.height,
            eR = JR + (yR - wR.width * rR) / 2,
            aR = GR + (tR - ZR) / 2,
            LR = new Path2D(wR.path),
            nR = uR.TEXT_SHADOW_WIDTH,
            UR = (null === (fR = KR.nameTag) || void 0 === fR ? void 0 : fR.iconShadowRGB) || "black";
          for (const uR of [-1, 1])
            for (const RR of [-1, 1]) XR(qR, LR, eR + nR * uR, aR + nR * RR, rR, UR);
          XR(qR, LR, eR, aR, rR, (null === (VR = KR.nameTag) || void 0 === VR ? void 0 : VR.iconRGB) || "white")
        }(RR, JR, GR, qR, yR, tR, iR), qR
      }
      if (0 === RR.text.length) return 0;
      const wR = qR(RR.size);
      tR.font = wR;
      const rR = null !== VR && void 0 !== VR ? VR : tR.measureText(RR.text).width;
      return function(RR, JR, GR, yR, tR, ZR) {
        const qR = uR.TEXT_SHADOW_WIDTH;
        ZR.font = yR, ZR.fillStyle = "black";
        for (const uR of [-1, 1])
          for (const yR of [-1, 1]) ZR.fillText(RR, JR + qR * uR, GR + qR * yR);
        ZR.fillStyle = tR, ZR.fillText(RR, JR, GR)
      }(RR.text, JR, GR + yR - uR.VERTICAL_PADDING + 5, wR, null !== (KR = RR.colour) && void 0 !== KR ? KR : "white", tR), rR
    }

    function CR(RR, JR) {
      for (const {
          image: GR,
          x: yR,
          y: tR,
          size: uR
        }
        of RR) JR.imageSmoothingEnabled = !1, JR.drawImage(GR, yR, tR, uR, uR)
    }

    function XR(RR, JR, GR, yR, tR, uR) {
      RR.save(), RR.translate(GR, yR), RR.scale(tR, tR), RR.fillStyle = uR, RR.fill(JR), RR.restore()
    }
  },
  37341: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => QR,
      f: () => JJ,
      h: () => jR,
      i: () => ER,
      l: () => YR,
      m: () => kR,
      n: () => tJ,
      q: () => dR,
      r: () => zR
    });
    var yR = GR(5281),
      tR = GR(5303),
      uR = GR(35162),
      ZR = GR(4555),
      qR = GR(4546),
      iR = GR(1485),
      fR = GR(37256),
      VR = GR(103),
      KR = GR(1351),
      wR = GR(37278),
      rR = GR(37346),
      eR = GR(37353),
      aR = GR(9468),
      LR = GR(8872),
      nR = GR(9056),
      UR = GR(9180),
      WR = GR(9323),
      AR = GR(9338);
    const CR = {
      youtube: aR.f,
      "person-military-pointing": LR.g,
      sparkle: nR.f,
      user: UR.c,
      wrench: WR.d,
      zap: AR.f,
      ...wR.c
    };

    function XR(RR) {
      const [JR, GR, , , yR] = RR.icon;
      return {
        width: JR,
        height: GR,
        path: "string" === typeof yR ? yR : yR.join(" ")
      }
    }
    const MR = new Map(Object.entries(CR).map((RR => {
      let [JR, GR] = RR;
      return [JR, XR(GR)]
    })));
    let BR = !1;
    const lR = new Set;
    var pR = GR(37362);
    const gR = "Jetbrains Mono",
      bR = "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2190-2193,U+2212,U+2215,U+2248,U+26A1,U+2713,U+FEFF,U+FFFD",
      vR = "U+0100-0130,U+0132-0151,U+0154-017F,U+018F-0190,U+0192,U+019B,U+01A0-01A1,U+01AF-01B0,U+01CD-01CE,U+01D0,U+01D2,U+01D4,U+01D6,U+01D8,U+01DA,U+01DC,U+01E6-01E7,U+01EA-01EB,U+01F4-01F5,U+01FC-01FF,U+0218-021B,U+0232-0233,U+0237,U+0259,U+02B9-02BA,U+02C7,U+02C9,U+02D8-02D9,U+02DB,U+02DD,U+02F3,U+02F7,U+0300-0303,U+0306-0307,U+0309-030C,U+030F,U+0312,U+031B,U+0323,U+0325-0328,U+0336-0338,U+0374-0375,U+037E,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03CF,U+03D5-03D7,U+0401-040C,U+040E-044F,U+0451-045C,U+045E-045F,U+0490-0493,U+049A-049B,U+04A2-04A3,U+04AE-04B1,U+04B6-04B7,U+04BA-04BB,U+04D8-04D9,U+04DC-04DF,U+04E4-04E9,U+04F4-04F5,U+0AEA,U+1E80-1E85,U+1E9E,U+1EA0-1EF9,U+2070,U+2074-207A,U+207C,U+2080-2089,U+20AB,U+20AE,U+20B4,U+20BD,U+20BF,U+2102,U+210D,U+2113,U+2115-2116,U+2119-211A,U+211D,U+2124,U+212E,U+2140,U+218A-218B,U+2194-2199,U+219D-219E,U+21A0,U+21A2-21A3,U+21A5-21A7,U+21A9-21AA,U+21AD,U+21BE,U+21C9,U+21D0-21D4,U+21DB,U+21DE-21DF,U+21E5,U+21E7-21E8,U+21EA,U+2200-220C,U+220E-2211,U+2213,U+2218-221A,U+221E,U+2223-2225,U+2227-222B,U+2234-2239,U+223C,U+223E,U+2243,U+2245,U+2247,U+2249,U+224B,U+224D,U+2254,U+2257,U+225F-2265,U+226A-2273,U+227A-227C,U+2282-2289,U+228E-2299,U+229B-22A5,U+22B4,U+22B8,U+22BB-22BD,U+22C2-22C4,U+22C6,U+22C8-22CA,U+22CE,U+22D0,U+22E2,U+22EE-22F1,U+2302-2305,U+2308-230B,U+2318,U+231C-231F,U+2324-2326,U+2328,U+232B,U+2336-237A,U+2389-238B,U+2395,U+239B-23AD,U+23CE,U+23FB-23FE,U+2400-2421,U+2423-2424,U+2500-25A1,U+25AA-25AB,U+25B2-25CC,U+25CE-25CF,U+25D4-25D5,U+25E6-25EB,U+25EF,U+25F6,U+266D,U+266F,U+2687,U+26A0,U+2715,U+2717,U+2736,U+276E-2771,U+2794,U+279C-279E,U+27C5-27C6,U+27DC,U+27E6-27EB,U+27F5-27F7,U+2916,U+294A,U+2987-2988,U+2A00,U+2A05-2A06,U+2B58,U+E0A0-E0A2,U+E0B0-E0B3,U+FE62,U+FF5B,U+FF5D,U+16910,U+1D538-1D539,U+1D53B-1D53E,U+1D540-1D544,U+1D546,U+1D54A-1D550,U+1D552-1D56B";

    function OR(RR) {
      return RR.split(",").map((RR => {
        const [JR, GR = JR] = RR.slice(2).split("-");
        return [parseInt(JR, 16), parseInt(GR, 16)]
      }))
    }
    const xR = {
        latin: OR(bR),
        rest: OR(vR)
      },
      NR = new RegExp(`[${xR.rest.map((RR=>{let[JR,GR]=RR;return`\\u{${JR.toString(16)}}-\\u{${GR.toString(16)}}`})).join("")}]`, "u");

    function DR(RR) {
      return JR => {
        console.warn(`[bloxd-wasm-client] the text font's ${RR} file did not load`, JR)
      }
    }
    const HR = 397,
      oR = 1,
      cR = {
        translate: RR => [RR],
        keyBindingText: RR => RR,
        isFriend: () => !1,
        hiddenNames: {},
        loadsFontRest: !1
      };
    let PR = null,
      IR = 0,
      mR = "none";

    function zR() {
      return IR
    }
    const SR = new Set;

    function jR(RR) {
      return SR.add(RR), () => {
        SR.delete(RR)
      }
    }

    function dR() {
      IR++, !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0] ? mR = "all" : "none" === mR && (mR = "notBoards");
      for (const RR of SR) RR()
    }(0, wR.m)((() => {
      dR(!1)
    })), (0, iR.t)((() => {
      (function() {
        const RR = BR;
        return BR = !1, RR
      })() && dR(!1)
    }));
    const ER = new class {
      constructor(RR) {
        this.loaded = RR, this.latin = null, this.rest = null, this.restWanted = !1
      }
      load() {
        if (null === this.latin) {
          this.latin = new FontFace(gR, `url(${(0,pR.f)()}) format("woff2")`, {
            unicodeRange: bR
          }).load().then((RR => {
            document.fonts.add(RR), this.loaded()
          }), DR("Latin"));
          const RR = new FontFace(gR, `url(${(0,pR.j)()}) format("woff2")`, {
            unicodeRange: vR,
            display: "swap"
          });
          document.fonts.add(RR), RR.loaded.then((() => {
            this.loaded()
          }), DR("rest")), this.rest = RR, this.restWanted && RR.load()
        }
        return this.latin
      }
      loadRest() {
        var RR;
        this.restWanted || (this.restWanted = !0, null === (RR = this.rest) || void 0 === RR || RR.load())
      }
      async untilLoadedFor(RR) {
        await this.load(), this.loadFor(RR), await document.fonts.load(`16px '${gR}'`, RR).catch((JR => {
          console.warn("[bloxd-wasm-client] the text font did not load for", RR, JR)
        }))
      }
      loadFor(RR) {
        !this.restWanted && NR.test(RR) && this.loadRest()
      }
    }(dR);

    function YR(RR) {
      Object.assign(cR, RR), cR.loadsFontRest && ER.loadRest(), dR(!1)
    }

    function kR(RR) {
      RR !== PR && (PR = RR, dR())
    }

    function QR(RR) {
      if ("none" === mR || null === RR) return;
      RR(HR, "all" === mR ? 0 : oR, new Uint8Array(0)) && (mR = "none")
    }
    const FR = new Map,
      TR = new Map;

    function sR(RR, JR, GR) {
      var yR;
      const tR = GR ? `${RR}#${GR.join(",")}` : RR,
        uR = FR.get(tR);
      if (uR) return uR.image;
      const ZR = {
        image: null !== (yR = TR.get(tR)) && void 0 !== yR ? yR : null
      };
      return FR.set(tR, ZR), JR().then((async RR => {
        if (null === RR) return null;
        const JR = new Image;
        JR.crossOrigin = "anonymous", JR.src = RR, await JR.decode();
        const yR = await createImageBitmap(JR);
        if (!GR) return yR;
        try {
          return function(RR, JR) {
            let [GR, yR, tR] = JR;
            const uR = (0, fR.e)(RR.width, RR.height),
              {
                canvas: ZR
              } = uR;
            return uR.drawImage(RR, 0, 0), uR.globalCompositeOperation = "multiply", uR.fillStyle = `rgb(${GR}, ${yR}, ${tR})`, uR.fillRect(0, 0, ZR.width, ZR.height), uR.globalCompositeOperation = "destination-in", uR.drawImage(RR, 0, 0), ZR
          }(yR, GR)
        } finally {
          yR.close()
        }
      })).then((RR => {
        FR.get(tR) === ZR && TR.delete(tR), RR !== ZR.image && (ZR.image = RR, dR(!1))
      }), (JR => {
        console.warn(`[bloxd-wasm-client] text icon ${RR} did not load`, JR), FR.get(tR) === ZR && (FR.delete(tR), TR.delete(tR), null !== ZR.image && dR(!1))
      })), ZR.image
    }(0, rR.e)((() => {
      TR.clear();
      for (const [RR, {
          image: JR
        }] of FR) null !== JR && TR.set(RR, JR);
      FR.clear(), dR(!1)
    }));
    const hR = new Set(yR.c),
      RJ = new Set(["CubeBlock", "SlabBlock", "StairsBlock"]);

    function JJ() {
      (0, eR.e)().catch((() => {}))
    }

    function GJ(RR) {
      return hR.has(RR) ? sR(`icon:${RR}`, (async () => {
        var JR, GR;
        return null !== (JR = null === (GR = (0, rR.g)()) || void 0 === GR ? void 0 : GR.textureUrl(RR)) && void 0 !== JR ? JR : (await (0, eR.d)()).ingameIconUrl(RR)
      })) : null
    }
    let yJ = "unasked";
    const tJ = {
      get canSeeRealPlayerNames() {
        return VR.featureFlags.canSeeRealPlayerNames
      },
      get canSeePlayerWrittenText() {
        return VR.featureFlags.canSeePlayerWrittenText
      },
      get localPlayerDbId() {
        return PR
      },
      shownPlayerName: RR => (0, KR.e)(RR, cR.hiddenNames),
      translate: (RR, JR) => {
        const GR = "object" === typeof JR && null !== JR ? JR : void 0;
        return cR.translate(RR, (0, KR.f)(GR, cR.hiddenNames))
      },
      keyBindingText: RR => cR.keyBindingText(RR),
      isFriend: RR => cR.isFriend(RR, cR.hiddenNames),
      iconImage: function(RR) {
        if (hR.has(RR)) return GJ(RR);
        if ("unasked" === yJ && (yJ = "loading", (0, qR.d)().then((() => {
            yJ = "in", dR(!1)
          }), (RR => {
            yJ = "failed", console.warn("[bloxd-wasm-client] the item sprite table did not load, so text item icons stay blank", RR)
          }))), "in" !== yJ) return null;
        const JR = (0, ZR.b)(RR),
          GR = void 0 === JR ? void 0 : (0, uR.itemTypeNameOf)(JR);
        if ("Gun" === GR) return null;
        const yR = (0, qR.c)(RR),
          iR = void 0 !== GR && RJ.has(GR);
        if (iR && void 0 === yR) return null;
        const fR = void 0 !== JR && "GrayscaleArmour" === (0, uR.itemTypeOf)(JR) || Object.hasOwn(tR.d, RR),
          VR = null !== yR && void 0 !== yR ? yR : RR;
        return sR(iR ? `block:${VR}` : `item:${VR}`, (async () => {
          var RR, JR;
          const GR = (0, rR.g)(),
            yR = await (0, eR.e)();
          return null !== (RR = null !== (JR = null === GR || void 0 === GR ? void 0 : GR.textureUrl(VR)) && void 0 !== JR ? JR : yR.itemSpriteUrl(VR)) && void 0 !== RR ? RR : iR ? null : yR.notFoundUrl()
        }), fR ? (0, tR.f)(RR) : void 0)
      },
      effectImage: GJ,
      rankIcon: function(RR) {
        const JR = MR.get(RR);
        if (JR) return JR;
        const GR = (0, iR.e)(RR, (0, iR.l)(RR));
        if (!GR) return (0, iR.h)("brands") && (0, iR.h)("solid") ? lR.has(RR) || (lR.add(RR), console.warn(`[bloxd-wasm-client] unknown rank icon "${RR}": not in the bundled Font Awesome subset, so its tag draws no icon`)) : BR = !0, null;
        const yR = XR(GR);
        return MR.set(RR, yR), yR
      },
      glyphsShown: RR => {
        ER.loadFor(RR)
      }
    }
  },
  37247: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => LR,
      f: () => mR,
      h: () => vR,
      i: () => NR
    });
    var yR = GR(37329),
      tR = GR(37256),
      uR = GR(37262),
      ZR = GR(37266);

    function qR(RR, JR, GR) {
      const yR = "object" === typeof RR && null !== RR ? RR : {},
        tR = function(RR, JR, GR) {
          if (!Array.isArray(RR) || 0 === RR.length) return [];
          const yR = [{
            width: 0,
            height: 0,
            y: 0,
            items: []
          }];
          for (const qR of (0, ZR.h)(RR, ZR.c.DEFAULT_FONT_SIZE, GR)) {
            if ("text" !== qR.kind) {
              yR[yR.length - 1].items.push({
                content: qR,
                chars: 1,
                size: {
                  x: 0,
                  width: 0
                }
              });
              continue
            }
            if (0 === qR.text.length) continue;
            const RR = yR[yR.length - 1].items.reduce(((RR, JR) => RR + ("text" === JR.content.kind ? (0, uR.d)(JR.content.text) : JR.chars)), 0);
            (0, uR.h)(qR.text, RR).forEach(((RR, JR) => {
              JR > 0 && yR.push({
                width: 0,
                height: 0,
                y: 0,
                items: []
              }), RR.length > 0 && yR[yR.length - 1].items.push({
                content: {
                  ...qR,
                  text: RR
                },
                chars: RR.length,
                size: {
                  x: 0,
                  width: 0
                }
              })
            }))
          }
          let tR = ZR.c.VERTICAL_PADDING / 2;
          for (const uR of yR) {
            if (0 === uR.items.length) continue;
            const {
              width: RR,
              height: yR,
              sizes: qR
            } = (0, ZR.g)(uR.items.map((RR => RR.content)), JR, GR);
            uR.items.forEach(((RR, JR) => {
              RR.size = qR[JR]
            })), uR.width = RR, uR.height = yR, uR.y = tR, tR += yR + ZR.c.LINE_SPACING
          }
          return yR
        }(yR.content, JR, GR);
      let qR = 0,
        iR = ZR.c.VERTICAL_PADDING,
        fR = 0;
      for (const uR of tR) {
        qR = Math.max(qR, uR.width + 2 * ZR.c.HORIZONTAL_PADDING), iR += uR.height + ZR.c.LINE_SPACING;
        for (const RR of uR.items) fR += RR.chars
      }
      const VR = "string" === typeof yR.backgroundColor ? yR.backgroundColor : "#22283b";
      return {
        width: qR,
        height: iR,
        chars: fR,
        draw: (RR, JR) => {
          const yR = [];
          if (RR.fillStyle = VR, RR.fillRect(0, 0, qR, iR), null === JR)
            for (const uR of tR) uR.items.length > 0 && (0, ZR.l)(uR.items.map((RR => RR.content)), 0, uR.y, uR.height, RR, GR, yR);
          else {
            let uR = 0;
            for (const qR of tR)
              for (const tR of qR.items) {
                if (uR >= JR) break;
                const iR = "text" === tR.content.kind ? {
                  ...tR.content,
                  text: tR.content.text.substring(0, JR - uR)
                } : tR.content;
                (0, ZR.k)(iR, tR.size.x, qR.y, qR.height, RR, GR, yR, tR.size.width), uR += tR.chars
              }
          }(0, ZR.j)(yR, RR)
        }
      }
    }
    var iR = GR(37272),
      fR = GR(37325);
    const VR = 256,
      KR = 1024,
      wR = {
        width: 1,
        height: 7 / 8
      };
    var rR = GR(37338);
    const eR = {
      leaderboard: ""
    };
    var aR = GR(37341);
    const LR = {
        Nametag: 1,
        MultilineText: 2,
        Board: 3,
        Leaderboard: 4
      },
      nR = 2048,
      UR = 256,
      WR = 10,
      AR = 4,
      CR = 65536,
      XR = new TextDecoder;
    let MR = aR.n,
      BR = -1;
    const lR = new Map,
      pR = new Map;
    let gR = 0;
    const bR = new TextEncoder;

    function vR(RR, JR) {
      const GR = bR.encode(JSON.stringify(JR)),
        yR = new Uint8Array(GR.length + 1);
      return yR[0] = RR, yR.set(GR, 1), yR
    }
    const OR = {
        name: "Ag",
        info: null,
        colour: "default",
        ranks: [],
        effects: [],
        health: .5,
        xZ: null,
        hideNameSeed: null
      },
      xR = [vR(LR.Nametag, OR), vR(LR.Nametag, {
        ...OR,
        info: {
          content: [{
            str: "Ag"
          }],
          subtitle: ["Ag"]
        }
      }), vR(LR.MultilineText, {
        box: {
          content: ["Ag"]
        },
        shown: null
      }), ...yR.d.map(((RR, JR) => vR(LR.Board, {
        shared: {
          text: "Ag",
          textSize: JR
        },
        w: 0,
        h: 0
      })))];

    function NR(RR) {
      aR.i.load().then((() => {
        if (RR()) return;
        const JR = (0, tR.e)(1, 1, {
          willReadFrequently: !0
        });
        var GR;
        JR && (GR = JR.canvas, xR.map((RR => mR(RR, GR))))
      }))
    }
    let DR = aR.r;

    function HR() {
      lR.clear(), pR.clear()
    }

    function oR(RR, JR) {
      const GR = RR.get(JR);
      return void 0 !== GR && (RR.delete(JR), RR.set(JR, GR)), GR
    }

    function cR(RR, JR, GR) {
      RR.set(JR, GR), RR.size > UR && RR.delete(RR.keys().next().value)
    }

    function PR(RR, JR, GR) {
      if (RR === LR.Nametag) {
        let RR = oR(lR, JR);
        return void 0 === RR && (RR = (0, iR.e)(JSON.parse(JR), GR, MR), cR(lR, JR, RR)), RR
      }
      if (RR === LR.MultilineText) {
        var tR;
        const RR = JSON.parse(JR),
          yR = JSON.stringify(null !== (tR = RR.box) && void 0 !== tR ? tR : null),
          uR = "number" === typeof RR.shown ? RR.shown : null;
        let ZR = oR(pR, yR);
        void 0 === ZR && (ZR = qR(RR.box, GR, MR), cR(pR, yR, ZR));
        const iR = null === uR ? null : Math.min(Math.max(0, Math.floor(uR)), ZR.chars),
          fR = ZR;
        return {
          width: fR.width,
          height: fR.height,
          draw: RR => {
            fR.draw(RR, iR)
          }
        }
      }
      if (RR === LR.Board) return function(RR, JR) {
        var GR;
        if (!JR.canSeePlayerWrittenText) return null;
        const {
          shared: tR,
          w: uR = 0,
          h: ZR = 0
        } = RR, qR = !uR;
        let iR;
        if (qR) {
          var rR, eR;
          iR = null !== (rR = null === tR || void 0 === tR || null === (eR = tR.text) || void 0 === eR ? void 0 : eR.toString()) && void 0 !== rR ? rR : ""
        } else {
          if ("string" !== typeof(null === tR || void 0 === tR ? void 0 : tR.text)) return null;
          iR = tR.text
        }
        if ("" === iR.trim()) return null;
        const aR = null !== (GR = null === tR || void 0 === tR ? void 0 : tR.textSize) && void 0 !== GR ? GR : 0,
          LR = yR.d[aR].ingameFontSize;
        let nR = wR,
          UR = VR;
        qR || (iR = (0, yR.o)(iR, aR, uR, ZR), nR = (0, yR.s)(uR, ZR), UR = Math.min(VR, KR / Math.max(nR.width, nR.height)));
        const WR = Math.round(UR * nR.width),
          AR = Math.round(UR * nR.height),
          CR = UR / VR;
        return {
          width: WR,
          height: AR,
          draw: RR => {
            fR.d.fontSize = LR * CR, fR.d.fontWeight = "bold", fR.d.font = "'Jetbrains Mono', monospace", fR.d.drawText(RR, iR, 0, (-10 - 7 * aR) * CR, WR, AR)
          }
        }
      }(JSON.parse(JR), MR);
      if (RR === LR.Leaderboard) return function(RR, JR, GR) {
        var yR;
        const tR = (0, rR.n)(RR.opts, eR),
          uR = (0, rR.i)(tR, GR),
          ZR = {
            top: (0, rR.k)(tR, (0, rR.r)(RR.top)),
            around: null !== (yR = RR.around) && void 0 !== yR ? yR : null,
            showPlayerText: JR.canSeePlayerWrittenText,
            localPlayerDbId: JR.localPlayerDbId
          };
        return {
          width: uR.pixelWidth,
          height: uR.pixelHeight,
          draw: RR => {
            const {
              a: JR,
              d: GR
            } = RR.getTransform();
            (0, rR.e)(RR, Math.round(uR.pixelWidth * JR), Math.round(uR.pixelHeight * GR), uR, tR, ZR)
          }
        }
      }(JSON.parse(JR), MR, nR);
      throw new Error(`unknown text plane kind ${RR}`)
    }
    const IR = 2 ** Math.floor(Math.log2(nR));

    function mR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      try {
        if (RR.length < 2) return [0, 0];
        const uR = (0, tR.c)(JR);
        if (!uR) return [0, 0];
        const ZR = DR();
        ZR !== BR && (BR = ZR, HR());
        const [qR] = RR, iR = XR.decode(RR.subarray(1));
        let fR;
        qR !== LR.Board && qR !== LR.Leaderboard || !MR.canSeePlayerWrittenText || MR.glyphsShown(iR), uR.save();
        try {
          fR = PR(qR, iR, uR)
        } finally {
          uR.restore()
        }
        if (null === fR || !(fR.width > 0 && fR.height > 0)) return [0, 0];
        const VR = Math.min(1, nR / fR.width, nR / fR.height),
          KR = RR => yR ? function(RR) {
            const JR = 2 ** Math.ceil(Math.log2(RR));
            return Math.min(IR, JR - RR > RR - JR / 2 ? JR / 2 : JR)
          }(RR) : Math.min(nR, Math.ceil(RR * VR)),
          [wR, rR] = [KR(fR.width), KR(fR.height)];
        ! function(RR, JR, GR, yR, tR) {
          const uR = Math.max(RR.width, GR),
            ZR = Math.max(RR.height, yR),
            qR = tR || uR * ZR > Math.max(AR * GR * yR, CR),
            [iR, fR] = qR ? [GR, yR] : [uR, ZR];
          iR === RR.width && fR === RR.height ? JR.clearRect(0, 0, iR, fR) : (RR.width = iR, RR.height = fR)
        }(JR, uR, wR, rR, GR), uR.save();
        try {
          const [RR, JR] = yR ? [wR / fR.width, rR / fR.height] : [VR, VR];
          1 === RR && 1 === JR || uR.scale(RR, JR), fR.draw(uR)
        } finally {
          uR.restore()
        }
        return [wR, rR]
      } catch (uR) {
        ! function(RR, JR) {
          gR < WR && (gR++, console.warn(`[bloxd-wasm-client] ${RR}`, JR))
        }("could not raster a text plane", uR);
        try {
          JR.width = 1
        } catch {}
        return [0, 0]
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);