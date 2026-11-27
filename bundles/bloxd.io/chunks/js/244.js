export const id = 244;
export const ids = [244];
export const modules = {
  37743: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Ir,
      e: () => jr
    });
    var Zr = Qr(4494);
    let Wr = null,
      ar = null;

    function jr() {
      return ar ??= Qr.e(242).then((() => Qr(37580))).then((rr => {
        let {
          ITEM_SPRITES: Sr,
          ITEM_SPRITES_WITHOUT_FILE: Qr,
          ITEM_FILES_WITHOUT_SPRITE: ar
        } = rr;
        Wr = function(rr, Sr, Qr) {
          const Wr = new Set,
            ar = (0, Zr.t)(Sr);
          let jr = 0;
          for (const [Zr, Ir] of rr.entries()) Zr === ar[jr] ? jr++ : Wr.add(Ir);
          if ("" !== Qr)
            for (const Ir of Qr.split(Zr.r)) Wr.add(Ir);
          return Wr
        }(Sr.split(Zr.r), Qr, ar)
      }), (rr => {
        throw ar = null, rr
      })), ar
    }

    function Ir(rr) {
      var Sr, Qr;
      return null !== (Sr = null === (Qr = Wr) || void 0 === Qr ? void 0 : Qr.has(rr)) && void 0 !== Sr && Sr
    }
  },
  37726: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => pr,
      g: () => fr,
      j: () => Ir,
      k: () => Er
    });
    var Zr = Qr(2098);
    let Wr = null,
      ar = 0;
    const jr = new Set;

    function Ir() {
      return Wr
    }

    function fr() {
      return ar
    }

    function Er(rr) {
      Wr = rr, ar++, (0, Zr.b)();
      for (const Sr of jr) Sr()
    }

    function pr(rr) {
      jr.add(rr)
    }
  },
  37734: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr,
      g: () => Ir
    });
    var Zr = Qr(37743);
    let Wr = null,
      ar = null;

    function jr() {
      return Wr ??= Qr.e(74).then((() => Qr(43057))).catch((rr => {
        throw Wr = null, rr
      })), Wr
    }

    function Ir() {
      return ar ??= Promise.all([jr(), (0, Zr.e)()]).then((rr => {
        let [Sr] = rr;
        return Sr
      }), (rr => {
        throw ar = null, rr
      })), ar
    }
  },
  37635: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => yr
    });
    var Zr = Qr(5223),
      Wr = Qr(1321),
      ar = Qr(672),
      jr = Qr(2179),
      Ir = Qr(37642),
      fr = Qr(37630);
    const Er = 10,
      pr = 3,
      xr = 3,
      mr = [{
        healthFraction: .25,
        colour: "#ff0000"
      }, {
        healthFraction: .5,
        colour: "#ffaa00"
      }, {
        healthFraction: 1,
        colour: "#00ff00"
      }],
      Nr = 64,
      Ur = 69,
      tr = {
        icon: jr.b,
        mainRGB: "transparent",
        chatTag: [],
        nameTag: {
          iconRGB: "#f38ab6",
          iconShadowRGB: "black"
        },
        visible: !0
      };

    function hr(rr) {
      return "object" !== typeof rr || null === rr || Array.isArray(rr) ? void 0 : rr
    }
    const zr = new Set(Zr.b);

    function Yr(rr, Sr) {
      return "string" === typeof rr ? (0, fr.u)(rr, Sr) : Sr
    }

    function nr(rr) {
      return Yr(rr.width, pr)
    }

    function er(rr, Sr) {
      var Qr;
      const Zr = null !== (Qr = rr.applyTo) && void 0 !== Qr ? Qr : "both";
      return "both" === Zr || Zr === Sr
    }

    function Kr(rr) {
      const Sr = nr(rr);
      return "glow" === rr.style ? Sr * xr : Math.ceil(Sr / 2) + 1
    }

    function yr(rr, Sr, Qr) {
      var Zr, jr;
      const pr = null !== (Zr = hr(rr.info)) && void 0 !== Zr ? Zr : {},
        yr = "string" === typeof rr.name ? rr.name : "",
        Br = pr.subtitle;
      if (Array.isArray(pr.content) && 0 === pr.content.length && !(Array.isArray(Br) && Br.length > 0)) return null;
      const Tr = "number" === typeof rr.hideNameSeed ? rr.hideNameSeed : null,
        vr = "" === yr || !0 === rr.mesh ? yr : (0, Wr.e)(yr, !Qr.canSeeRealPlayerNames, Tr);
      if (!vr && !pr.content) return null;
      const Or = "string" === typeof rr.colour ? rr.colour : "default",
        Lr = Object.hasOwn(ar.r, Or) ? ar.r[Or] : void 0,
        lr = pr.content ? (0, fr.i)(pr.content, fr.d.DEFAULT_FONT_SIZE, Qr, Lr) : [{
          kind: "text",
          text: vr,
          size: fr.d.DEFAULT_FONT_SIZE,
          colour: Lr
        }],
        Xr = [],
        Pr = "boolean" === typeof rr.player ? rr.player : Array.isArray(rr.ranks),
        Hr = Pr ? (0, Ir.i)(pr.backgroundColor) : null;
      Hr && Xr.push({
        kind: "rank",
        rank: Hr
      });
      for (const Wr of Array.isArray(rr.ranks) ? rr.ranks : []) {
        const rr = (0, fr.y)(Wr);
        null !== rr && void 0 !== rr && rr.nameTag && rr.visible && Xr.push({
          kind: "rank",
          rank: rr
        })
      }
      Xr.push(...lr), Pr && "" !== yr && Qr.isFriend(yr) && Xr.push({
        kind: "rank",
        rank: tr
      }), "number" === typeof rr.Oj && Xr.push({
        kind: "text",
        text: ` ${rr.Oj}m`,
        size: fr.d.DEFAULT_FONT_SIZE,
        colour: "#cef3ff"
      });
      const qr = Br ? (0, fr.i)(Br, fr.d.DEFAULT_SUBTITLE_FONT_SIZE, Qr) : null,
        Rr = "string" === typeof pr.backgroundColor ? pr.backgroundColor : "#22283b",
        gr = "string" === typeof pr.subtitleBackgroundColor ? pr.subtitleBackgroundColor : "#1a1e2d",
        Cr = hr(pr.healthbar),
        Mr = hr(pr.border),
        Gr = Array.isArray(rr.effects) ? rr.effects.filter((rr => "string" === typeof rr && zr.has(rr))) : [],
        kr = "number" === typeof rr.health ? Math.max(0, Math.min(1, rr.health)) : null,
        Ar = (0, fr.g)(Xr, Sr, Qr),
        Vr = (0, fr.g)(null !== qr && void 0 !== qr ? qr : [], Sr, Qr),
        ir = {
          width: fr.d.EFFECT_ICON_SIZE * Gr.length,
          height: Gr.length > 0 ? fr.d.EFFECT_ICON_SIZE : 0
        },
        wr = Mr && er(Mr, "nametag") ? Kr(Mr) : 0,
        cr = Yr(null === Cr || void 0 === Cr ? void 0 : Cr.height, Er),
        Fr = Mr && er(Mr, "healthbar") ? Kr(Mr) : 0,
        or = "never" === (null !== (jr = null === Cr || void 0 === Cr ? void 0 : Cr.display) && void 0 !== jr ? jr : "onDamage") ? 0 : cr + Fr,
        br = Math.max(ir.height, wr),
        Jr = Math.max(fr.d.VERTICAL_PADDING, or, wr);
      let Dr = Math.max(Ar.width, Vr.width, ir.width);
      if (Mr) {
        const rr = Kr(Mr) + fr.d.HORIZONTAL_PADDING / 2;
        Dr = Math.max(Dr, Math.max(Ar.width, Vr.width) + fr.d.HORIZONTAL_PADDING + 2 * rr)
      }
      const dr = Ar.height + Vr.height + br + Jr,
        sr = Ar.width + fr.d.HORIZONTAL_PADDING,
        ur = Vr.width + fr.d.HORIZONTAL_PADDING,
        rS = Math.max(sr, ur),
        SS = (Dr - rS) / 2,
        QS = Math.max(ir.height, wr);
      return {
        width: Dr,
        height: dr,
        draw: rr => {
          const Sr = [];
          if (rr.fillStyle = Rr, rr.fillRect(SS, QS, rS, Ar.height), (0, fr.s)(Xr, (Dr - sr) / 2 + fr.d.HORIZONTAL_PADDING / 2, QS, Ar.height, rr, Qr, Sr), qr) {
            const Zr = QS + Ar.height;
            rr.fillStyle = gr, rr.fillRect(SS, Zr, rS, Vr.height), (0, fr.s)(qr, (Dr - ur) / 2 + fr.d.HORIZONTAL_PADDING / 2, Zr, Vr.height, rr, Qr, Sr)
          }
          let Zr = null;
          if (null !== kr) {
            const Sr = dr - cr - Fr;
            null !== Cr && void 0 !== Cr && Cr.backgroundColour && (rr.fillStyle = Cr.backgroundColour, rr.fillRect(SS, Sr, rS, cr)), rr.fillStyle = function(rr, Sr) {
              const Qr = null === rr || void 0 === rr ? void 0 : rr.foregroundColour;
              if ("string" === typeof Qr) return Qr;
              const Zr = [...Array.isArray(Qr) && Qr.length > 0 ? Qr : mr].sort(((rr, Sr) => rr.healthFraction - Sr.healthFraction)),
                Wr = Zr.find((rr => Sr <= rr.healthFraction));
              return (null !== Wr && void 0 !== Wr ? Wr : Zr[Zr.length - 1]).colour
            }(Cr, kr), rr.fillRect(SS, Sr, Math.round(rS * kr), cr), Zr = {
              x: SS,
              y: Sr,
              width: rS,
              height: cr
            }
          }
          if (Mr) {
            const Sr = [];
            er(Mr, "nametag") && Sr.push({
              x: SS,
              y: QS,
              width: rS,
              height: Ar.height + (qr ? Vr.height : 0)
            }), Zr && er(Mr, "healthbar") && Sr.push(Zr), Sr.length > 0 && function(rr, Sr, Qr) {
              const Zr = nr(Sr),
                Wr = Zr / 2,
                ar = rr => rr.width > 0 && rr.height > 0,
                jr = Qr.map((rr => ({
                  x: rr.x + Wr,
                  y: rr.y + Wr,
                  width: rr.width - Zr,
                  height: rr.height - Zr
                }))).filter(ar);
              if (0 === jr.length) return;
              const Ir = Sr => {
                const Qr = Sr.filter(ar);
                if (0 !== Qr.length) {
                  rr.beginPath();
                  for (const Sr of Qr) rr.rect(Sr.x, Sr.y, Sr.width, Sr.height);
                  rr.stroke()
                }
              };
              if (rr.save(), rr.strokeStyle = Sr.colour, rr.lineWidth = Zr, rr.lineJoin = "round", "glow" === Sr.style) rr.shadowColor = Sr.colour, rr.shadowBlur = Zr * xr, Ir(jr), Ir(jr);
              else if ("double" === Sr.style) {
                Ir(jr);
                const rr = Zr + 2;
                Ir(jr.map((Sr => ({
                  x: Sr.x + rr,
                  y: Sr.y + rr,
                  width: Sr.width - 2 * rr,
                  height: Sr.height - 2 * rr
                }))))
              } else Ir(jr);
              rr.restore()
            }(rr, Mr, Sr)
          }(0, fr.m)(Sr, rr);
          for (let Wr = 0; Wr < Gr.length; Wr++) {
            const Sr = Qr.effectImage(Gr[Wr]);
            Sr && (rr.imageSmoothingEnabled = !1, rr.drawImage(Sr, 5 + Ur * Wr, 5, Nr, Nr))
          }
        }
      }
    }
  },
  37630: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => ar,
      g: () => Yr,
      i: () => Nr,
      m: () => Kr,
      q: () => er,
      s: () => nr,
      u: () => Er,
      y: () => xr
    });
    var Zr = Qr(672),
      Wr = Qr(360);
    const ar = {
        DEFAULT_FONT_SIZE: 47,
        DEFAULT_SUBTITLE_FONT_SIZE: 30,
        HORIZONTAL_PADDING: 30,
        VERTICAL_PADDING: 22,
        TEXT_SHADOW_WIDTH: 2,
        LINE_SPACING: 8,
        EFFECT_ICON_SIZE: 70
      },
      jr = 41;

    function Ir(rr) {
      return `bolder ${rr}px 'Jetbrains Mono'`
    }

    function fr(rr) {
      return "object" === typeof rr && null !== rr
    }

    function Er(rr, Sr) {
      const Qr = "number" === typeof rr ? rr : "string" === typeof rr ? Number(rr.replace("px", "")) : NaN;
      return Number.isFinite(Qr) && Qr > 0 ? Qr : Sr
    }

    function pr(rr) {
      return fr(rr) ? rr : void 0
    }

    function xr(rr) {
      const Sr = "number" === typeof rr ? Zr.v[rr] : rr;
      return "string" === typeof Sr && Object.hasOwn(Zr.k, Sr) ? Zr.k[Sr] : void 0
    }

    function mr(rr, Sr) {
      return "string" === typeof rr ? rr : fr(rr) ? "string" === typeof rr.translationKey ? Sr.translate(rr.translationKey, rr.params).map((rr => "string" === typeof rr ? rr : rr.icon)).join("") : "string" === typeof rr.entityName ? Sr.shownPlayerName(rr.entityName) : "" : void 0 === rr || null === rr ? "" : String(rr)
    }

    function Nr(rr, Sr, Qr, Zr) {
      if (!Array.isArray(rr)) return [];
      const jr = [];
      for (const Ur of rr) {
        var Ir, xr;
        if (fr(Ur) && "chatTag" in Ur) {
          jr.push({
            kind: "rank",
            rank: Ur
          });
          continue
        }
        if (fr(Ur) && "icon" in Ur && !("mainRGB" in Ur)) {
          var Nr;
          jr.push({
            kind: "icon",
            icon: String(Ur.icon),
            size: Er(null === (Nr = pr(Ur.style)) || void 0 === Nr ? void 0 : Nr.fontSize, ar.DEFAULT_FONT_SIZE)
          });
          continue
        }
        if (fr(Ur) && (0, Wr.xb)(Ur)) {
          jr.push({
            kind: "text",
            text: "",
            size: Sr,
            colour: Zr
          });
          continue
        }
        let rr, tr;
        fr(Ur) && (0, Wr.wb)(Ur) ? (rr = Qr.keyBindingText(String(Ur.action)), tr = pr(Ur.style)) : fr(Ur) && "str" in Ur ? (rr = Ur.str, tr = pr(Ur.style)) : rr = Ur;
        const hr = Er(null === (Ir = tr) || void 0 === Ir ? void 0 : Ir.fontSize, Sr),
          zr = null !== (xr = (0, Wr._b)(tr)) && void 0 !== xr ? xr : Zr;
        if (fr(rr) && "string" === typeof rr.translationKey) {
          const Sr = Qr.translate(rr.translationKey, rr.params);
          if (Sr.some((rr => "string" !== typeof rr))) {
            for (const rr of Sr) jr.push("string" === typeof rr ? {
              kind: "text",
              text: rr,
              size: hr,
              colour: zr
            } : {
              kind: "icon",
              icon: rr.icon,
              size: hr
            });
            continue
          }
        }
        jr.push({
          kind: "text",
          text: mr(rr, Qr),
          size: hr,
          colour: zr
        })
      }
      return jr
    }

    function Ur(rr) {
      return void 0 !== rr && "rank" !== rr.kind
    }

    function tr(rr, Sr) {
      const Qr = Ur(rr),
        Zr = Ur(Sr);
      return void 0 === rr && !Zr || !Qr && void 0 === Sr ? 0 : Qr !== Zr ? .5 * ar.HORIZONTAL_PADDING : 0
    }

    function hr(rr) {
      return "rank" === rr.kind ? ar.DEFAULT_FONT_SIZE : rr.size
    }

    function zr(rr, Sr, Qr) {
      return "icon" === rr.kind ? rr.size : "rank" === rr.kind ? function(rr, Sr) {
        const Qr = Sr.rankIcon(rr.rank.icon);
        return Qr ? jr * (Qr.width / Qr.height) : jr
      }(rr, Qr) + ar.HORIZONTAL_PADDING : (Qr.glyphsShown(rr.text), Sr.font = Ir(rr.size), Sr.measureText(rr.text).width)
    }

    function Yr(rr, Sr, Qr) {
      if (0 === rr.length) return {
        width: 0,
        height: 0,
        sizes: []
      };
      let Zr = 0;
      for (const ar of rr) Zr = Math.max(Zr, hr(ar));
      const Wr = [];
      let jr = tr(void 0, rr[0]);
      for (let ar = 0; ar < rr.length; ar++) {
        const Zr = jr;
        jr += zr(rr[ar], Sr, Qr), jr += tr(rr[ar], rr[ar + 1]), Wr.push({
          x: Zr,
          width: jr - Zr
        })
      }
      return {
        width: jr,
        height: Zr + ar.VERTICAL_PADDING,
        sizes: Wr
      }
    }

    function nr(rr, Sr, Qr, Zr, Wr, ar, jr) {
      Sr += tr(void 0, rr[0]);
      for (let Ir = 0; Ir < rr.length; Ir++) {
        const fr = er(rr[Ir], Sr, Qr, Zr, Wr, ar, jr);
        Sr += 0 === fr ? 0 : fr + tr(rr[Ir], rr[Ir + 1])
      }
    }

    function er(rr, Sr, Qr, Zr, Wr, fr, Er, pr) {
      var xr;
      if ("icon" === rr.kind) {
        const Zr = fr.iconImage(rr.icon);
        return Zr && Er.push({
          image: Zr,
          x: Sr,
          y: Qr + ar.VERTICAL_PADDING / 2,
          size: rr.size
        }), rr.size
      }
      if ("rank" === rr.kind) {
        const Ir = null !== pr && void 0 !== pr ? pr : zr(rr, Wr, fr);
        return function(rr, Sr, Qr, Zr, Wr, Ir, fr) {
          var Er, pr;
          const {
            rank: xr
          } = rr;
          Ir.fillStyle = xr.mainRGB, Ir.fillRect(Sr, Qr, Zr, Wr);
          const mr = fr.rankIcon(xr.icon);
          if (!mr) return;
          const Nr = jr / mr.height,
            Ur = Sr + (Zr - mr.width * Nr) / 2,
            tr = Qr + (Wr - jr) / 2,
            hr = new Path2D(mr.path),
            zr = ar.TEXT_SHADOW_WIDTH,
            Yr = (null === (Er = xr.nameTag) || void 0 === Er ? void 0 : Er.iconShadowRGB) || "black";
          for (const ar of [-1, 1])
            for (const rr of [-1, 1]) yr(Ir, hr, Ur + zr * ar, tr + zr * rr, Nr, Yr);
          yr(Ir, hr, Ur, tr, Nr, (null === (pr = xr.nameTag) || void 0 === pr ? void 0 : pr.iconRGB) || "white")
        }(rr, Sr, Qr, Ir, Zr, Wr, fr), Ir
      }
      if (0 === rr.text.length) return 0;
      const mr = Ir(rr.size);
      Wr.font = mr;
      const Nr = null !== pr && void 0 !== pr ? pr : Wr.measureText(rr.text).width;
      return function(rr, Sr, Qr, Zr, Wr, jr) {
        const Ir = ar.TEXT_SHADOW_WIDTH;
        jr.font = Zr, jr.fillStyle = "black";
        for (const ar of [-1, 1])
          for (const Zr of [-1, 1]) jr.fillText(rr, Sr + Ir * ar, Qr + Ir * Zr);
        jr.fillStyle = Wr, jr.fillText(rr, Sr, Qr)
      }(rr.text, Sr, Qr + Zr - ar.VERTICAL_PADDING + 5, mr, null !== (xr = rr.colour) && void 0 !== xr ? xr : "white", Wr), Nr
    }

    function Kr(rr, Sr) {
      for (const {
          image: Qr,
          x: Zr,
          y: Wr,
          size: ar
        }
        of rr) Sr.imageSmoothingEnabled = !1, Sr.drawImage(Qr, Zr, Wr, ar, ar)
    }

    function yr(rr, Sr, Qr, Zr, Wr, ar) {
      rr.save(), rr.translate(Qr, Zr), rr.scale(Wr, Wr), rr.fillStyle = ar, rr.fill(Sr), rr.restore()
    }
  },
  37718: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Jr,
      e: () => SS,
      f: () => wr,
      i: () => Fr,
      k: () => or,
      l: () => br,
      p: () => WS,
      t: () => cr,
      u: () => Vr
    });
    var Zr = Qr(5223),
      Wr = Qr(5249),
      ar = Qr(35472),
      jr = Qr(4489),
      Ir = Qr(4485),
      fr = Qr(1469),
      Er = Qr(37613),
      pr = Qr(109),
      xr = Qr(1317),
      mr = Qr(37642),
      Nr = Qr(37726),
      Ur = Qr(37734),
      tr = Qr(9282),
      hr = Qr(8734),
      zr = Qr(8927),
      Yr = Qr(9019),
      nr = Qr(9159),
      er = Qr(9172);
    const Kr = {
      youtube: tr.c,
      "person-military-pointing": hr.i,
      sparkle: zr.f,
      user: Yr.f,
      wrench: nr.g,
      zap: er.g,
      ...mr.d
    };

    function yr(rr) {
      const [Sr, Qr, , , Zr] = rr.icon;
      return {
        width: Sr,
        height: Qr,
        path: "string" === typeof Zr ? Zr : Zr.join(" ")
      }
    }
    const Br = new Map(Object.entries(Kr).map((rr => {
      let [Sr, Qr] = rr;
      return [Sr, yr(Qr)]
    })));
    let Tr = !1;
    const vr = new Set;
    var Or = Qr(37748);
    const Lr = "Jetbrains Mono",
      lr = "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2190-2193,U+2212,U+2215,U+2248,U+26A1,U+2713,U+FEFF,U+FFFD",
      Xr = "U+0100-0130,U+0132-0151,U+0154-017F,U+018F-0190,U+0192,U+019B,U+01A0-01A1,U+01AF-01B0,U+01CD-01CE,U+01D0,U+01D2,U+01D4,U+01D6,U+01D8,U+01DA,U+01DC,U+01E6-01E7,U+01EA-01EB,U+01F4-01F5,U+01FC-01FF,U+0218-021B,U+0232-0233,U+0237,U+0259,U+02B9-02BA,U+02C7,U+02C9,U+02D8-02D9,U+02DB,U+02DD,U+02F3,U+02F7,U+0300-0303,U+0306-0307,U+0309-030C,U+030F,U+0312,U+031B,U+0323,U+0325-0328,U+0336-0338,U+0374-0375,U+037E,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03CF,U+03D5-03D7,U+0401-040C,U+040E-044F,U+0451-045C,U+045E-045F,U+0490-0493,U+049A-049B,U+04A2-04A3,U+04AE-04B1,U+04B6-04B7,U+04BA-04BB,U+04D8-04D9,U+04DC-04DF,U+04E4-04E9,U+04F4-04F5,U+0AEA,U+1E80-1E85,U+1E9E,U+1EA0-1EF9,U+2070,U+2074-207A,U+207C,U+2080-2089,U+20AB,U+20AE,U+20B4,U+20BD,U+20BF,U+2102,U+210D,U+2113,U+2115-2116,U+2119-211A,U+211D,U+2124,U+212E,U+2140,U+218A-218B,U+2194-2199,U+219D-219E,U+21A0,U+21A2-21A3,U+21A5-21A7,U+21A9-21AA,U+21AD,U+21BE,U+21C9,U+21D0-21D4,U+21DB,U+21DE-21DF,U+21E5,U+21E7-21E8,U+21EA,U+2200-220C,U+220E-2211,U+2213,U+2218-221A,U+221E,U+2223-2225,U+2227-222B,U+2234-2239,U+223C,U+223E,U+2243,U+2245,U+2247,U+2249,U+224B,U+224D,U+2254,U+2257,U+225F-2265,U+226A-2273,U+227A-227C,U+2282-2289,U+228E-2299,U+229B-22A5,U+22B4,U+22B8,U+22BB-22BD,U+22C2-22C4,U+22C6,U+22C8-22CA,U+22CE,U+22D0,U+22E2,U+22EE-22F1,U+2302-2305,U+2308-230B,U+2318,U+231C-231F,U+2324-2326,U+2328,U+232B,U+2336-237A,U+2389-238B,U+2395,U+239B-23AD,U+23CE,U+23FB-23FE,U+2400-2421,U+2423-2424,U+2500-25A1,U+25AA-25AB,U+25B2-25CC,U+25CE-25CF,U+25D4-25D5,U+25E6-25EB,U+25EF,U+25F6,U+266D,U+266F,U+2687,U+26A0,U+2715,U+2717,U+2736,U+276E-2771,U+2794,U+279C-279E,U+27C5-27C6,U+27DC,U+27E6-27EB,U+27F5-27F7,U+2916,U+294A,U+2987-2988,U+2A00,U+2A05-2A06,U+2B58,U+E0A0-E0A2,U+E0B0-E0B3,U+FE62,U+FF5B,U+FF5D,U+16910,U+1D538-1D539,U+1D53B-1D53E,U+1D540-1D544,U+1D546,U+1D54A-1D550,U+1D552-1D56B";

    function Pr(rr) {
      return rr.split(",").map((rr => {
        const [Sr, Qr = Sr] = rr.slice(2).split("-");
        return [parseInt(Sr, 16), parseInt(Qr, 16)]
      }))
    }
    const Hr = {
        latin: Pr(lr),
        rest: Pr(Xr)
      },
      qr = new RegExp(`[${Hr.rest.map((rr=>{let[Sr,Qr]=rr;return`\\u{${Sr.toString(16)}}-\\u{${Qr.toString(16)}}`})).join("")}]`, "u");

    function Rr(rr) {
      return Sr => {
        console.warn(`[bloxd-wasm-client] the text font's ${rr} file did not load`, Sr)
      }
    }
    const gr = 397,
      Cr = 1,
      Mr = {
        translate: rr => [rr],
        keyBindingText: rr => rr,
        isFriend: () => !1,
        hiddenNames: {},
        loadsFontRest: !1
      };
    let Gr = null,
      kr = 0,
      Ar = "none";

    function Vr() {
      return kr
    }
    const ir = new Set;

    function wr(rr) {
      return ir.add(rr), () => {
        ir.delete(rr)
      }
    }

    function cr() {
      kr++, !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0] ? Ar = "all" : "none" === Ar && (Ar = "notBoards");
      for (const rr of ir) rr()
    }(0, mr.m)((() => {
      cr(!1)
    })), (0, fr.s)((() => {
      (function() {
        const rr = Tr;
        return Tr = !1, rr
      })() && cr(!1)
    }));
    const Fr = new class {
      constructor(rr) {
        this.loaded = rr, this.latin = null, this.rest = null, this.restWanted = !1
      }
      load() {
        if (null === this.latin) {
          this.latin = new FontFace(Lr, `url(${(0,Or.c)()}) format("woff2")`, {
            unicodeRange: lr
          }).load().then((rr => {
            document.fonts.add(rr), this.loaded()
          }), Rr("Latin"));
          const rr = new FontFace(Lr, `url(${(0,Or.e)()}) format("woff2")`, {
            unicodeRange: Xr,
            display: "swap"
          });
          document.fonts.add(rr), rr.loaded.then((() => {
            this.loaded()
          }), Rr("rest")), this.rest = rr, this.restWanted && rr.load()
        }
        return this.latin
      }
      loadRest() {
        var rr;
        this.restWanted || (this.restWanted = !0, null === (rr = this.rest) || void 0 === rr || rr.load())
      }
      async untilLoadedFor(rr) {
        await this.load(), this.loadFor(rr), await document.fonts.load(`16px '${Lr}'`, rr).catch((Sr => {
          console.warn("[bloxd-wasm-client] the text font did not load for", rr, Sr)
        }))
      }
      loadFor(rr) {
        !this.restWanted && qr.test(rr) && this.loadRest()
      }
    }(cr);

    function or(rr) {
      Object.assign(Mr, rr), Mr.loadsFontRest && Fr.loadRest(), cr(!1)
    }

    function br(rr) {
      rr !== Gr && (Gr = rr, cr())
    }

    function Jr(rr) {
      if ("none" === Ar || null === rr) return;
      rr(gr, "all" === Ar ? 0 : Cr, new Uint8Array(0)) && (Ar = "none")
    }
    const Dr = new Map,
      dr = new Map;

    function sr(rr, Sr, Qr) {
      var Zr;
      const Wr = Qr ? `${rr}#${Qr.join(",")}` : rr,
        ar = Dr.get(Wr);
      if (ar) return ar.image;
      const jr = {
        image: null !== (Zr = dr.get(Wr)) && void 0 !== Zr ? Zr : null
      };
      return Dr.set(Wr, jr), Sr().then((async rr => {
        if (null === rr) return null;
        const Sr = new Image;
        Sr.crossOrigin = "anonymous", Sr.src = rr, await Sr.decode();
        const Zr = await createImageBitmap(Sr);
        if (!Qr) return Zr;
        try {
          return function(rr, Sr) {
            let [Qr, Zr, Wr] = Sr;
            const ar = (0, Er.g)(rr.width, rr.height),
              {
                canvas: jr
              } = ar;
            return ar.drawImage(rr, 0, 0), ar.globalCompositeOperation = "multiply", ar.fillStyle = `rgb(${Qr}, ${Zr}, ${Wr})`, ar.fillRect(0, 0, jr.width, jr.height), ar.globalCompositeOperation = "destination-in", ar.drawImage(rr, 0, 0), jr
          }(Zr, Qr)
        } finally {
          Zr.close()
        }
      })).then((rr => {
        Dr.get(Wr) === jr && dr.delete(Wr), rr !== jr.image && (jr.image = rr, cr(!1))
      }), (Sr => {
        console.warn(`[bloxd-wasm-client] text icon ${rr} did not load`, Sr), Dr.get(Wr) === jr && (Dr.delete(Wr), dr.delete(Wr), null !== jr.image && cr(!1))
      })), jr.image
    }(0, Nr.d)((() => {
      dr.clear();
      for (const [rr, {
          image: Sr
        }] of Dr) null !== Sr && dr.set(rr, Sr);
      Dr.clear(), cr(!1)
    }));
    const ur = new Set(Zr.b),
      rS = new Set(["CubeBlock", "SlabBlock", "StairsBlock"]);

    function SS() {
      (0, Ur.g)().catch((() => {}))
    }

    function QS(rr) {
      return ur.has(rr) ? sr(`icon:${rr}`, (async () => {
        var Sr, Qr;
        return null !== (Sr = null === (Qr = (0, Nr.j)()) || void 0 === Qr ? void 0 : Qr.textureUrl(rr)) && void 0 !== Sr ? Sr : (await (0, Ur.c)()).ingameIconUrl(rr)
      })) : null
    }
    let ZS = "unasked";
    const WS = {
      get canSeeRealPlayerNames() {
        return pr.featureFlags.canSeeRealPlayerNames
      },
      get canSeePlayerWrittenText() {
        return pr.featureFlags.canSeePlayerWrittenText
      },
      get localPlayerDbId() {
        return Gr
      },
      shownPlayerName: rr => (0, xr.c)(rr, Mr.hiddenNames),
      translate: (rr, Sr) => {
        const Qr = "object" === typeof Sr && null !== Sr ? Sr : void 0;
        return Mr.translate(rr, (0, xr.e)(Qr, Mr.hiddenNames))
      },
      keyBindingText: rr => Mr.keyBindingText(rr),
      isFriend: rr => Mr.isFriend(rr, Mr.hiddenNames),
      iconImage: function(rr) {
        if (ur.has(rr)) return QS(rr);
        if ("unasked" === ZS && (ZS = "loading", (0, Ir.h)().then((() => {
            ZS = "in", cr(!1)
          }), (rr => {
            ZS = "failed", console.warn("[bloxd-wasm-client] the item sprite table did not load, so text item icons stay blank", rr)
          }))), "in" !== ZS) return null;
        const Sr = (0, jr.e)(rr),
          Qr = void 0 === Sr ? void 0 : (0, ar.itemTypeNameOf)(Sr);
        if ("Gun" === Qr) return null;
        const Zr = (0, Ir.d)(rr),
          fr = void 0 !== Qr && rS.has(Qr);
        if (fr && void 0 === Zr) return null;
        const Er = void 0 !== Sr && "GrayscaleArmour" === (0, ar.itemTypeOf)(Sr) || Object.hasOwn(Wr.c, rr),
          pr = null !== Zr && void 0 !== Zr ? Zr : rr;
        return sr(fr ? `block:${pr}` : `item:${pr}`, (async () => {
          var rr, Sr;
          const Qr = (0, Nr.j)(),
            Zr = await (0, Ur.g)();
          return null !== (rr = null !== (Sr = null === Qr || void 0 === Qr ? void 0 : Qr.textureUrl(pr)) && void 0 !== Sr ? Sr : Zr.itemSpriteUrl(pr)) && void 0 !== rr ? rr : fr ? null : Zr.notFoundUrl()
        }), Er ? (0, Wr.e)(rr) : void 0)
      },
      effectImage: QS,
      rankIcon: function(rr) {
        const Sr = Br.get(rr);
        if (Sr) return Sr;
        const Qr = (0, fr.f)(rr, (0, fr.k)(rr));
        if (!Qr) return (0, fr.i)("brands") && (0, fr.i)("solid") ? vr.has(rr) || (vr.add(rr), console.warn(`[bloxd-wasm-client] unknown rank icon "${rr}": not in the bundled Font Awesome subset, so its tag draws no icon`)) : Tr = !0, null;
        const Zr = yr(Qr);
        return Br.set(rr, Zr), Zr
      },
      glyphsShown: rr => {
        Fr.loadFor(rr)
      }
    }
  },
  37604: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => hr,
      i: () => Ar,
      j: () => Xr,
      k: () => qr
    });
    var Zr = Qr(37701),
      Wr = Qr(37613),
      ar = Qr(37622),
      jr = Qr(37630);

    function Ir(rr, Sr, Qr) {
      const Zr = "object" === typeof rr && null !== rr ? rr : {},
        Wr = function(rr, Sr, Qr) {
          if (!Array.isArray(rr) || 0 === rr.length) return [];
          const Zr = [{
            width: 0,
            height: 0,
            y: 0,
            items: []
          }];
          for (const Ir of (0, jr.i)(rr, jr.d.DEFAULT_FONT_SIZE, Qr)) {
            if ("text" !== Ir.kind) {
              Zr[Zr.length - 1].items.push({
                content: Ir,
                chars: 1,
                size: {
                  x: 0,
                  width: 0
                }
              });
              continue
            }
            if (0 === Ir.text.length) continue;
            const rr = Zr[Zr.length - 1].items.reduce(((rr, Sr) => rr + ("text" === Sr.content.kind ? (0, ar.c)(Sr.content.text) : Sr.chars)), 0);
            (0, ar.f)(Ir.text, rr).forEach(((rr, Sr) => {
              Sr > 0 && Zr.push({
                width: 0,
                height: 0,
                y: 0,
                items: []
              }), rr.length > 0 && Zr[Zr.length - 1].items.push({
                content: {
                  ...Ir,
                  text: rr
                },
                chars: rr.length,
                size: {
                  x: 0,
                  width: 0
                }
              })
            }))
          }
          let Wr = jr.d.VERTICAL_PADDING / 2;
          for (const ar of Zr) {
            if (0 === ar.items.length) continue;
            const {
              width: rr,
              height: Zr,
              sizes: Ir
            } = (0, jr.g)(ar.items.map((rr => rr.content)), Sr, Qr);
            ar.items.forEach(((rr, Sr) => {
              rr.size = Ir[Sr]
            })), ar.width = rr, ar.height = Zr, ar.y = Wr, Wr += Zr + jr.d.LINE_SPACING
          }
          return Zr
        }(Zr.content, Sr, Qr);
      let Ir = 0,
        fr = jr.d.VERTICAL_PADDING,
        Er = 0;
      for (const ar of Wr) {
        Ir = Math.max(Ir, ar.width + 2 * jr.d.HORIZONTAL_PADDING), fr += ar.height + jr.d.LINE_SPACING;
        for (const rr of ar.items) Er += rr.chars
      }
      const pr = "string" === typeof Zr.backgroundColor ? Zr.backgroundColor : "#22283b";
      return {
        width: Ir,
        height: fr,
        chars: Er,
        draw: (rr, Sr) => {
          const Zr = [];
          if (rr.fillStyle = pr, rr.fillRect(0, 0, Ir, fr), null === Sr)
            for (const ar of Wr) ar.items.length > 0 && (0, jr.s)(ar.items.map((rr => rr.content)), 0, ar.y, ar.height, rr, Qr, Zr);
          else {
            let ar = 0;
            for (const Ir of Wr)
              for (const Wr of Ir.items) {
                if (ar >= Sr) break;
                const fr = "text" === Wr.content.kind ? {
                  ...Wr.content,
                  text: Wr.content.text.substring(0, Sr - ar)
                } : Wr.content;
                (0, jr.q)(fr, Wr.size.x, Ir.y, Ir.height, rr, Qr, Zr, Wr.size.width), ar += Wr.chars
              }
          }(0, jr.m)(Zr, rr)
        }
      }
    }
    var fr = Qr(37635),
      Er = Qr(37699);
    const pr = 256,
      xr = 1024,
      mr = {
        width: 1,
        height: 7 / 8
      };
    var Nr = Qr(37710);
    const Ur = {
      leaderboard: ""
    };
    var tr = Qr(37718);
    const hr = {
        Nametag: 1,
        MultilineText: 2,
        Board: 3,
        Leaderboard: 4
      },
      zr = 2048,
      Yr = 256,
      nr = 10,
      er = 4,
      Kr = 65536,
      yr = new TextDecoder;
    let Br = tr.p,
      Tr = -1;
    const vr = new Map,
      Or = new Map;
    let Lr = 0;
    const lr = new TextEncoder;

    function Xr(rr, Sr) {
      const Qr = lr.encode(JSON.stringify(Sr)),
        Zr = new Uint8Array(Qr.length + 1);
      return Zr[0] = rr, Zr.set(Qr, 1), Zr
    }
    const Pr = {
        name: "Ag",
        info: null,
        colour: "default",
        ranks: [],
        effects: [],
        health: .5,
        Oj: null,
        hideNameSeed: null
      },
      Hr = [Xr(hr.Nametag, Pr), Xr(hr.Nametag, {
        ...Pr,
        info: {
          content: [{
            str: "Ag"
          }],
          subtitle: ["Ag"]
        }
      }), Xr(hr.MultilineText, {
        box: {
          content: ["Ag"]
        },
        shown: null
      }), ...Zr.c.map(((rr, Sr) => Xr(hr.Board, {
        shared: {
          text: "Ag",
          textSize: Sr
        },
        w: 0,
        h: 0
      })))];

    function qr(rr) {
      tr.i.load().then((() => {
        if (rr()) return;
        const Sr = (0, Wr.g)(1, 1, {
          willReadFrequently: !0
        });
        var Qr;
        Sr && (Qr = Sr.canvas, Hr.map((rr => Ar(rr, Qr))))
      }))
    }
    let Rr = tr.u;

    function gr() {
      vr.clear(), Or.clear()
    }

    function Cr(rr, Sr) {
      const Qr = rr.get(Sr);
      return void 0 !== Qr && (rr.delete(Sr), rr.set(Sr, Qr)), Qr
    }

    function Mr(rr, Sr, Qr) {
      rr.set(Sr, Qr), rr.size > Yr && rr.delete(rr.keys().next().value)
    }

    function Gr(rr, Sr, Qr) {
      if (rr === hr.Nametag) {
        let rr = Cr(vr, Sr);
        return void 0 === rr && (rr = (0, fr.c)(JSON.parse(Sr), Qr, Br), Mr(vr, Sr, rr)), rr
      }
      if (rr === hr.MultilineText) {
        var Wr;
        const rr = JSON.parse(Sr),
          Zr = JSON.stringify(null !== (Wr = rr.box) && void 0 !== Wr ? Wr : null),
          ar = "number" === typeof rr.shown ? rr.shown : null;
        let jr = Cr(Or, Zr);
        void 0 === jr && (jr = Ir(rr.box, Qr, Br), Mr(Or, Zr, jr));
        const fr = null === ar ? null : Math.min(Math.max(0, Math.floor(ar)), jr.chars),
          Er = jr;
        return {
          width: Er.width,
          height: Er.height,
          draw: rr => {
            Er.draw(rr, fr)
          }
        }
      }
      if (rr === hr.Board) return function(rr, Sr) {
        var Qr;
        if (!Sr.canSeePlayerWrittenText) return null;
        const {
          shared: Wr,
          w: ar = 0,
          h: jr = 0
        } = rr, Ir = !ar;
        let fr;
        if (Ir) {
          var Nr, Ur;
          fr = null !== (Nr = null === Wr || void 0 === Wr || null === (Ur = Wr.text) || void 0 === Ur ? void 0 : Ur.toString()) && void 0 !== Nr ? Nr : ""
        } else {
          if ("string" !== typeof(null === Wr || void 0 === Wr ? void 0 : Wr.text)) return null;
          fr = Wr.text
        }
        if ("" === fr.trim()) return null;
        const tr = null !== (Qr = null === Wr || void 0 === Wr ? void 0 : Wr.textSize) && void 0 !== Qr ? Qr : 0,
          hr = Zr.c[tr].ingameFontSize;
        let zr = mr,
          Yr = pr;
        Ir || (fr = (0, Zr.n)(fr, tr, ar, jr), zr = (0, Zr.t)(ar, jr), Yr = Math.min(pr, xr / Math.max(zr.width, zr.height)));
        const nr = Math.round(Yr * zr.width),
          er = Math.round(Yr * zr.height),
          Kr = Yr / pr;
        return {
          width: nr,
          height: er,
          draw: rr => {
            Er.d.fontSize = hr * Kr, Er.d.fontWeight = "bold", Er.d.font = "'Jetbrains Mono', monospace", Er.d.drawText(rr, fr, 0, (-10 - 7 * tr) * Kr, nr, er)
          }
        }
      }(JSON.parse(Sr), Br);
      if (rr === hr.Leaderboard) return function(rr, Sr, Qr) {
        var Zr;
        const Wr = (0, Nr.i)(rr.opts, Ur),
          ar = (0, Nr.f)(Wr, Qr),
          jr = {
            top: (0, Nr.h)(Wr, (0, Nr.j)(rr.top)),
            around: null !== (Zr = rr.around) && void 0 !== Zr ? Zr : null,
            showPlayerText: Sr.canSeePlayerWrittenText,
            localPlayerDbId: Sr.localPlayerDbId
          };
        return {
          width: ar.pixelWidth,
          height: ar.pixelHeight,
          draw: rr => {
            const {
              a: Sr,
              d: Qr
            } = rr.getTransform();
            (0, Nr.d)(rr, Math.round(ar.pixelWidth * Sr), Math.round(ar.pixelHeight * Qr), ar, Wr, jr)
          }
        }
      }(JSON.parse(Sr), Br, zr);
      throw new Error(`unknown text plane kind ${rr}`)
    }
    const kr = 2 ** Math.floor(Math.log2(zr));

    function Ar(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      try {
        if (rr.length < 2) return [0, 0];
        const ar = (0, Wr.d)(Sr);
        if (!ar) return [0, 0];
        const jr = Rr();
        jr !== Tr && (Tr = jr, gr());
        const [Ir] = rr, fr = yr.decode(rr.subarray(1));
        let Er;
        Ir !== hr.Board && Ir !== hr.Leaderboard || !Br.canSeePlayerWrittenText || Br.glyphsShown(fr), ar.save();
        try {
          Er = Gr(Ir, fr, ar)
        } finally {
          ar.restore()
        }
        if (null === Er || !(Er.width > 0 && Er.height > 0)) return [0, 0];
        const pr = Math.min(1, zr / Er.width, zr / Er.height),
          xr = rr => Zr ? function(rr) {
            const Sr = 2 ** Math.ceil(Math.log2(rr));
            return Math.min(kr, Sr - rr > rr - Sr / 2 ? Sr / 2 : Sr)
          }(rr) : Math.min(zr, Math.ceil(rr * pr)),
          [mr, Nr] = [xr(Er.width), xr(Er.height)];
        ! function(rr, Sr, Qr, Zr, Wr) {
          const ar = Math.max(rr.width, Qr),
            jr = Math.max(rr.height, Zr),
            Ir = Wr || ar * jr > Math.max(er * Qr * Zr, Kr),
            [fr, Er] = Ir ? [Qr, Zr] : [ar, jr];
          fr === rr.width && Er === rr.height ? Sr.clearRect(0, 0, fr, Er) : (rr.width = fr, rr.height = Er)
        }(Sr, ar, mr, Nr, Qr), ar.save();
        try {
          const [rr, Sr] = Zr ? [mr / Er.width, Nr / Er.height] : [pr, pr];
          1 === rr && 1 === Sr || ar.scale(rr, Sr), Er.draw(ar)
        } finally {
          ar.restore()
        }
        return [mr, Nr]
      } catch (ar) {
        ! function(rr, Sr) {
          Lr < nr && (Lr++, console.warn(`[bloxd-wasm-client] ${rr}`, Sr))
        }("could not raster a text plane", ar);
        try {
          Sr.width = 1
        } catch {}
        return [0, 0]
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);