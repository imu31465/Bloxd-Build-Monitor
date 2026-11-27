export const id = 245;
export const ids = [245];
export const modules = {
  37325: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => qR
    });
    var yR = GR(1317);

    function tR(RR) {
      const JR = /(\d*\.?\d+)px/.exec(RR);
      return JR ? Number(JR[1]) : null
    }

    function uR(RR) {
      return RR.split(/[\s,]+/).pop()
    }
    let ZR = !1;
    const qR = {
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
      drawText: function(RR, JR, yR, qR, iR, fR) {
        if (iR <= 0 || fR <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: VR,
          fontVariant: KR,
          fontWeight: wR,
          fontSize: rR,
          font: eR
        } = this, aR = [VR, KR, wR, `${rR}px`, eR].filter(Boolean).join(" "), LR = [
          [wR, `${rR}px`, uR(eR)].filter(Boolean).join(" "), `${rR}px sans-serif`
        ], nR = RR.font, UR = function(RR, JR, GR) {
          for (const yR of JR) {
            RR.font = yR;
            const JR = tR(RR.font),
              ZR = uR(yR);
            if (null !== JR && Math.abs(JR - GR) <= .5 && RR.font.toLowerCase().includes(ZR.toLowerCase())) return yR
          }
          return null
        }(RR, [aR, ...LR], rR);
        UR !== aR && function(RR, JR, yR) {
          ZR || (ZR = !0, Promise.resolve().then((() => GR(1406))).then((GR => {
            let {
              ma: tR
            } = GR;
            tR(new Error("A canvas didn't take canvasTxt's font"), {
              font: RR,
              tK: JR,
              drawnWith: null !== yR && void 0 !== yR ? yR : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(aR, nR, UR);
        const WR = tR(RR.font);
        if (null === UR && null !== WR && WR > 0) {
          const GR = rR / WR;
          RR.save();
          try {
            return RR.scale(GR, GR), {
              height: this.drawLines(RR, JR, yR / GR, qR / GR, iR / GR, fR / GR, WR).height * GR
            }
          } finally {
            RR.restore()
          }
        }
        return this.drawLines(RR, JR, yR, qR, iR, fR, rR)
      },
      drawLines: function(RR, JR, GR, tR, uR, ZR, qR) {
        const iR = GR + uR,
          fR = tR + ZR;
        let VR, KR = tR + ZR / 2 + qR / 2;
        "right" === this.align ? (VR = iR, RR.textAlign = "right") : "left" === this.align ? (VR = GR, RR.textAlign = "left") : (VR = GR + uR / 2, RR.textAlign = "center");
        for (const yR of JR) {
          RR.measureText(yR).width >= uR && (JR = JR.replace(yR, ""))
        }
        JR = (0, yR.N)(JR);
        const wR = [],
          rR = JR.split("\n"),
          eR = this.justify ? RR.measureText("\u200a").width : 0;
        rR.forEach((JR => {
          let GR = RR.measureText(JR).width;
          if (GR <= uR) wR.push(JR);
          else {
            let yR = JR;
            const tR = uR;
            let ZR, qR, iR;
            for (GR = RR.measureText(yR).width; GR > tR;) {
              for (ZR = 0, qR = 0, iR = ""; qR < tR;) ZR++, iR = yR.substr(0, ZR), qR = RR.measureText(iR).width;
              ZR--, iR = iR.substr(0, ZR);
              const JR = ZR;
              if (" " !== yR.substr(ZR, 1)) {
                for (;
                  " " !== yR.substr(ZR, 1) && 0 !== ZR;) ZR--;
                0 === ZR && (ZR = JR), iR = yR.substr(0, ZR)
              }
              iR = this.justify ? this.justifyLine(RR, iR, eR, "\u200a", uR) : iR, yR = yR.substr(ZR), GR = RR.measureText(yR).width, wR.push(iR)
            }
            GR > 0 && wR.push(yR)
          }
        }));
        const aR = this.lineHeight ? this.lineHeight : this.getTextHeight(RR, JR),
          LR = aR * (wR.length - 1),
          nR = LR / 2;
        let UR = tR;
        "top" === this.vAlign ? KR = tR + qR : "bottom" === this.vAlign ? (KR = fR - LR, UR = fR) : (UR = tR + ZR / 2, KR -= nR), wR.forEach((JR => {
          JR = JR.trim(), RR.fillText(JR, VR, KR), KR += aR
        })), this.debug && (RR.lineWidth = 3, RR.strokeStyle = "#00909e", RR.strokeRect(GR, tR, uR, ZR), RR.lineWidth = 2, RR.strokeStyle = "#f6d743", RR.beginPath(), RR.moveTo(VR, tR), RR.lineTo(VR, fR), RR.stroke(), RR.strokeStyle = "#ff6363", RR.beginPath(), RR.moveTo(GR, UR), RR.lineTo(iR, UR), RR.stroke());
        return {
          height: LR + aR
        }
      },
      getTextHeight: function(RR, JR) {
        const GR = RR.textBaseline;
        RR.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: yR
        } = RR.measureText(JR);
        return RR.textBaseline = GR, yR
      },
      justifyLine: function(RR, JR, GR, yR, tR) {
        const uR = JR.trim(),
          ZR = RR.measureText(uR).width,
          qR = uR.split(/\s+/).length - 1,
          iR = Math.floor((tR - ZR) / GR);
        if (qR <= 0 || iR <= 0) return uR;
        const fR = Math.floor(iR / qR);
        let VR = iR - qR * fR,
          KR = [];
        for (let wR = 0; wR < fR; wR++) KR.push(yR);
        KR = KR.join("");
        return uR.replace(/\s+/g, (RR => {
          const JR = VR > 0 ? KR + yR : KR;
          return VR--, RR + JR
        }))
      }
    }
  },
  37338: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => aR,
      i: () => eR,
      k: () => wR,
      n: () => VR,
      r: () => KR
    });
    var yR = GR(3017),
      tR = GR(377);
    const uR = 1024,
      ZR = 1536,
      qR = 2 * yR.h + 1,
      iR = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      fR = 1.5;

    function VR(RR, JR, GR) {
      if ("string" !== typeof RR) return JR;
      try {
        const GR = JSON.parse(RR);
        return GR && "object" === typeof GR ? GR : JR
      } catch (yR) {
        return void 0 !== GR && console.error(`Couldn't parse ${GR}`, yR), JR
      }
    }

    function KR(RR) {
      return VR(RR, null, "a leaderboard's rows")
    }

    function wR(RR, JR) {
      var GR, yR;
      return null !== JR && void 0 !== JR ? JR : {
        status: null !== (GR = RR.status) && void 0 !== GR ? GR : "loading",
        entries: null !== (yR = RR.entries) && void 0 !== yR ? yR : []
      }
    }

    function rR(RR, JR) {
      return "number" === typeof RR && Number.isFinite(RR) && RR > 0 ? RR : JR
    }

    function eR(RR, JR) {
      const GR = rR(RR.size, 1);
      let yR = rR(RR.width, rR(2.5 * GR, 2.5)),
        tR = rR(RR.height, rR(3.75 * GR, 3.75));
      Number.isFinite(uR * tR / yR) && Number.isFinite(ZR * yR / tR) || (yR = 2.5, tR = 3.75);
      const qR = tR / yR,
        iR = Math.max(1, Math.min(uR, JR / qR));
      return {
        width: yR,
        height: tR,
        layoutWidth: Math.max(uR, ZR / qR),
        layoutHeight: Math.max(ZR, uR * qR),
        pixelWidth: Math.round(iR),
        pixelHeight: Math.round(Math.max(1, Math.min(JR, iR * qR)))
      }
    }

    function aR(RR, JR, GR, ZR, VR, KR) {
      RR.setTransform(1, 0, 0, 1, 0, 0), RR.fillStyle = tR.C.defaultNameTagBackground, RR.fillRect(0, 0, JR, GR), RR.scale(JR / ZR.layoutWidth, GR / ZR.layoutHeight), RR.translate((ZR.layoutWidth - uR) / 2, 0),
        function(RR, JR, GR, uR) {
          var ZR, VR, KR, wR;
          const {
            top: rR,
            around: eR,
            showPlayerText: aR,
            localPlayerDbId: UR
          } = GR, {
            whiteUiText: WR,
            grayUiText: AR,
            yellowUiText: CR
          } = tR.C;
          RR.textBaseline = "middle";
          const XR = function(JR, GR, yR, tR, uR, ZR) {
              let qR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              RR.font = `bold ${tR}px 'Jetbrains Mono', monospace`, RR.fillStyle = uR, RR.textAlign = qR;
              let iR = JR.replace(/[\r\n\t]/g, " ");
              if (RR.measureText(iR).width > ZR) {
                for (; iR.length > 0 && RR.measureText(`${iR}\u2026`).width > ZR;) iR = iR.slice(0, -1);
                iR += "\u2026"
              }
              RR.fillText(iR, GR, yR)
            },
            MR = JR => {
              RR.fillStyle = WR, RR.globalAlpha = .15, RR.fillRect(24, JR, 976, 2), RR.globalAlpha = 1
            },
            BR = null === UR ? null : (0, tR.oc)(UR),
            lR = RR => null !== BR && RR.playerHash === BR,
            pR = LR(rR.entries, yR.k),
            gR = "ready" === rR.status && pR.length > 0,
            bR = null === eR ? [] : LR(eR.entries, qR),
            vR = pR.some(lR),
            OR = null === eR ? null : function(RR) {
              const JR = RR;
              if (!JR || !Number.isFinite(JR.rank) || !Number.isFinite(JR.tied) || !Number.isFinite(JR.total)) return null;
              return JR
            }(eR.standing),
            xR = bR.find(lR),
            NR = pR.find(lR),
            DR = null === OR || void 0 === xR ? null : {
              value: xR.value,
              rank: OR.rank
            },
            HR = nR(pR, void 0 === NR || NR.value === (null === DR || void 0 === DR ? void 0 : DR.value) ? DR : null),
            oR = nR(bR, DR),
            cR = (RR, JR) => {
              const GR = RR.findIndex(lR);
              return GR >= 0 ? JR[GR] : null
            },
            PR = null !== (ZR = null !== (VR = null === OR || void 0 === OR ? void 0 : OR.rank) && void 0 !== VR ? VR : cR(bR, oR)) && void 0 !== ZR ? ZR : cR(pR, HR);
          RR.font = "bold 34px 'Jetbrains Mono', monospace";
          const IR = [...gR ? HR : [], ...vR ? [] : oR],
            mR = Math.min(280, Math.max(0, ...IR.map((JR => RR.measureText(iR.format(JR)).width)))),
            zR = mR <= 80,
            SR = zR ? 80 : 32 + mR,
            jR = zR ? 148 : SR + 28,
            dR = 660 - jR;
          XR(`TOP ${yR.k}  /  ALL TIME`, 24, 52, 28, AR, 976), XR(aR ? String(null !== (KR = JR.title) && void 0 !== KR ? KR : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, WR, 976), XR("RANK", 32, 174, 28, AR, jR - 40), XR("PLAYER", jR, 174, 28, AR, dR), XR(aR ? String(null !== (wR = JR.scoreLabel) && void 0 !== wR ? wR : "Score").slice(0, 24) : "Score", 992, 174, 28, AR, 304, "right"), MR(202);
          const ER = (uR - 232) / (yR.k + fR + qR),
            YR = 208 + yR.k * ER,
            kR = YR + fR * ER,
            QR = (JR, GR, yR, tR) => {
              const uR = lR(JR);
              RR.fillStyle = uR ? CR : WR, RR.globalAlpha = uR ? .15 : tR ? .035 : 0, RR.fillRect(24, yR - ER / 2 + 1, 976, ER - 2), RR.globalAlpha = 1;
              const ZR = uR ? CR : WR;
              XR(iR.format(GR), SR, yR, 34, ZR, zR ? 80 : mR, zR ? "center" : "right"), XR(aR ? String(JR.name).slice(0, 64) : "Player", jR, yR, 34, ZR, dR);
              const qR = iR.format(JR.value);
              XR(RR.measureText(qR).width > 304 ? JR.value.toExponential(6) : qR, 992, yR, 34, ZR, 304, "right")
            };
          if (gR)
            for (const [yR, tR] of pR.entries()) QR(tR, HR[yR], 208 + (yR + .5) * ER, yR % 2 === 0);
          else {
            const RR = "error" === rR.status,
              JR = RR ? "Couldn't load leaderboard" : "ready" === rR.status ? "No scores yet" : "Loading leaderboard\u2026",
              GR = RR ? "Trying again shortly" : "ready" === rR.status ? "Be the first on the board!" : "Fetching the top players",
              yR = (208 + YR) / 2;
            XR(JR, 512, yR - 28, 40, RR ? tR.C.redUiText : WR, 960, "center"), XR(GR, 512, yR + 27, 30, AR, 960, "center")
          }
          const FR = YR + fR * ER / 2;
          if (null === PR) MR(FR);
          else {
            const JR = null === OR ? 0 : OR.tied - 1,
              GR = `YOUR RANK #${iR.format(PR)}${null===OR?"":` of ${iR.format(OR.total)}`}`;
            RR.font = "bold 36px 'Jetbrains Mono', monospace";
            const yR = Math.max(20, Math.min(36, Math.floor(34560 / RR.measureText(GR).width)));
            XR(GR, 512, FR - (JR > 0 ? 15 : 0), yR, CR, 960, "center"), JR > 0 && XR(`Tied with ${iR.format(JR)} other${1===JR?"":"s"}`, 512, FR + 24, 24, AR, 960, "center")
          }
          if (null === eR) return;
          const TR = kR + qR * ER / 2;
          if (vR) XR(`You're in the top ${yR.k}!`, 512, TR, 40, CR, 960, "center");
          else if (0 === bR.length) XR("You're not on this board yet", 512, TR, 34, AR, 960, "center");
          else
            for (const [yR, tR] of bR.entries()) QR(tR, oR[yR], kR + (yR + .5) * ER, yR % 2 === 0)
        }(RR, VR, KR, ZR.layoutHeight)
    }

    function LR(RR, JR) {
      return Array.isArray(RR) ? RR.slice(0, JR).filter((RR => RR && Number.isFinite(RR.rank) && Number.isFinite(RR.value))) : []
    }

    function nR(RR, JR) {
      const GR = [];
      let yR = !1;
      return RR.forEach(((tR, uR) => {
        if (null !== JR && tR.value === JR.value) return void GR.push(JR.rank);
        const ZR = uR > 0 && tR.value === RR[uR - 1].value;
        ZR || (yR = 0 === uR && 1 !== tR.rank), GR.push(ZR && !yR ? GR[uR - 1] : tR.rank)
      })), GR
    }
  },
  37262: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => tR,
      h: () => uR
    });
    const yR = 32;

    function tR(RR) {
      return Array.from(RR).length
    }

    function uR(RR) {
      const JR = [""];
      let GR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        tR = "";
      const uR = () => {
        JR.push(""), GR = 0, tR = ""
      };
      for (const ZR of RR.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(ZR)) uR();
        else if (/^\s+$/.test(ZR)) tR += ZR;
      else if (ZR.length > 0) {
        const RR = Array.from(ZR);
        GR > 0 && GR + tR.length + RR.length > yR && uR(), JR[JR.length - 1] += tR, GR += tR.length, tR = "";
        for (const tR of RR) GR >= yR && uR(), JR[JR.length - 1] += tR, GR++
      }
      return JR[JR.length - 1] += tR, JR
    }
  },
  37278: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => XR,
      e: () => gR,
      i: () => bR,
      m: () => vR
    });
    var yR = GR(37287),
      tR = GR(8059),
      uR = GR(8132),
      ZR = GR(37293),
      qR = GR(37298),
      iR = GR(37301),
      fR = GR(8461),
      VR = GR(8583),
      KR = GR(37303),
      wR = GR(8784),
      rR = GR(7934),
      eR = GR(9048),
      aR = GR(37309),
      LR = GR(37312),
      nR = GR(9074),
      UR = GR(37314),
      WR = GR(37323),
      AR = GR(377);
    const CR = {
        redTeam: uR.c,
        blueTeam: LR.g,
        greenTeam: WR.f,
        yellowTeam: nR.f,
        cyanTeam: iR.f,
        whiteTeam: rR.faPlus,
        pinkTeam: VR.d,
        grayTeam: KR.e,
        blackTeam: aR.h,
        orangeTeam: UR.h,
        lilacTeam: ZR.e,
        purpleTeam: wR.f,
        magentaTeam: qR.e,
        brownTeam: yR.g,
        limeTeam: tR.faBolt,
        lightGrayTeam: fR.h,
        lightBlueTeam: eR.h
      },
      XR = Object.fromEntries(Object.values(CR).map((RR => [MR(RR), RR])));

    function MR(RR) {
      return `team-${RR.iconName}`
    }
    const BR = new Map;
    for (const [OR, xR] of Object.entries(CR)) {
      const RR = MR(xR),
        JR = AR.C[OR];
      JR && BR.set(JR.toLowerCase(), {
        icon: RR,
        mainRGB: "transparent",
        chatTag: [],
        nameTag: {
          iconRGB: "white",
          iconShadowRGB: "black"
        },
        visible: !0
      })
    }
    let lR = !1;
    const pR = new Set;

    function gR(RR) {
      if (RR !== lR) {
        lR = RR;
        for (const RR of pR) RR()
      }
    }

    function bR(RR) {
      var JR;
      return "string" === typeof RR && lR && null !== (JR = BR.get(RR.toLowerCase())) && void 0 !== JR ? JR : null
    }

    function vR(RR) {
      return pR.add(RR), () => {
        pR.delete(RR)
      }
    }
  },
  37329: (RR, JR, GR) => {
    GR.d(JR, {
      A: () => nR,
      E: () => WR,
      d: () => tR,
      g: () => rR,
      i: () => ZR,
      k: () => eR,
      n: () => UR,
      o: () => wR,
      p: () => AR,
      r: () => uR,
      s: () => VR,
      t: () => KR,
      u: () => aR,
      w: () => LR
    });
    var yR = GR(2102);
    const tR = [{
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

    function uR(RR) {
      return (0, yR.q)(RR.toWellFormed().replace(/\uFFFD+/g, "\ufffd"))
    }

    function ZR(RR, JR) {
      const {
        numLines: GR,
        charsPerLine: yR
      } = tR[JR];
      return CR(RR, GR, yR, !1)
    }
    const qR = 7 / 8,
      iR = .25,
      fR = 8;

    function VR(RR, JR) {
      return {
        width: Math.min(RR, fR) - 2 * iR,
        height: Math.min(JR, fR) - 2 * iR
      }
    }

    function KR(RR, JR, GR) {
      const yR = VR(RR, JR),
        {
          numLines: uR,
          charsPerLine: ZR
        } = tR[GR];
      return {
        numLines: Math.max(1, Math.floor(uR / qR * yR.height)),
        charsPerLine: Math.max(1, Math.floor(ZR * yR.width))
      }
    }

    function wR(RR, JR, GR, yR) {
      const {
        numLines: tR,
        charsPerLine: uR
      } = KR(GR, yR, JR);
      return CR(RR, tR, uR, !1)
    }
    const rR = 32e3;

    function eR(RR) {
      return RR.slice(0, rR)
    }
    const aR = 512e3,
      LR = 64,
      nR = aR;

    function UR(RR, JR) {
      const GR = Math.max(0, nR - JR),
        yR = Math.min(aR, GR);
      return RR.slice(0, yR)
    }
    const WR = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      XV: {
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

    function AR(RR, JR) {
      const {
        numLines: GR,
        charsPerLine: yR
      } = WR[JR];
      return CR(RR, GR, yR, !1)
    }

    function CR(RR, JR, GR, yR, tR) {
      (tR || yR) && (RR = RR.slice(0, null !== tR && void 0 !== tR ? tR : JR * GR));
      const uR = RR.split("\n");
      if (uR.length > JR && uR.splice(JR, uR.length - JR), !yR)
        for (let ZR = 0; ZR < uR.length; ZR++) {
          const RR = uR[ZR];
          RR.length > GR && (uR[ZR] = RR.substring(0, GR), uR.length < JR && uR.splice(ZR + 1, 0, RR.substring(GR)))
        }
      return uR.join("\n")
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);