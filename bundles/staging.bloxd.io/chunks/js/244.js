export const id = 244;
export const ids = [244];
export const modules = {
  37539: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => gb,
      h: () => Vb
    });
    var eb = Mb(4662);
    let Hb = null,
      pb = null;

    function Vb() {
      return pb ??= Mb.e(242).then((() => Mb(37441))).then((bb => {
        let {
          ITEM_SPRITES: wb,
          ITEM_SPRITES_WITHOUT_FILE: Mb,
          ITEM_FILES_WITHOUT_SPRITE: pb
        } = bb;
        Hb = function(bb, wb, Mb) {
          const Hb = new Set,
            pb = (0, eb.z)(wb);
          let Vb = 0;
          for (const [eb, gb] of bb.entries()) eb === pb[Vb] ? Vb++ : Hb.add(gb);
          if ("" !== Mb)
            for (const gb of Mb.split(eb.v)) Hb.add(gb);
          return Hb
        }(wb.split(eb.v), Mb, pb)
      }), (bb => {
        throw pb = null, bb
      })), pb
    }

    function gb(bb) {
      var wb, Mb;
      return null !== (wb = null === (Mb = Hb) || void 0 === Mb ? void 0 : Mb.has(bb)) && void 0 !== wb && wb
    }
  },
  37530: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Ib,
      f: () => lb,
      h: () => gb,
      l: () => Lb
    });
    var eb = Mb(2150);
    let Hb = null,
      pb = 0;
    const Vb = new Set;

    function gb() {
      return Hb
    }

    function lb() {
      return pb
    }

    function Lb(bb) {
      Hb = bb, pb++, (0, eb.d)();
      for (const wb of Vb) wb()
    }

    function Ib(bb) {
      Vb.add(bb)
    }
  },
  37534: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Vb,
      g: () => gb
    });
    var eb = Mb(37539);
    let Hb = null,
      pb = null;

    function Vb() {
      return Hb ??= Mb.e(74).then((() => Mb(42864))).catch((bb => {
        throw Hb = null, bb
      })), Hb
    }

    function gb() {
      return pb ??= Promise.all([Vb(), (0, eb.h)()]).then((bb => {
        let [wb] = bb;
        return wb
      }), (bb => {
        throw pb = null, bb
      })), pb
    }
  },
  37469: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Xb
    });
    var eb = Mb(5315),
      Hb = Mb(1333),
      pb = Mb(644),
      Vb = Mb(2228),
      gb = Mb(37471),
      lb = Mb(37464);
    const Lb = 10,
      Ib = 3,
      Ob = 3,
      Ub = [{
        healthFraction: .25,
        colour: "#ff0000"
      }, {
        healthFraction: .5,
        colour: "#ffaa00"
      }, {
        healthFraction: 1,
        colour: "#00ff00"
      }],
      tb = 64,
      Cb = 69,
      Eb = {
        icon: Vb.c,
        mainRGB: "transparent",
        chatTag: [],
        nameTag: {
          iconRGB: "#f38ab6",
          iconShadowRGB: "black"
        },
        visible: !0
      };

    function Fb(bb) {
      return "object" !== typeof bb || null === bb || Array.isArray(bb) ? void 0 : bb
    }
    const Bb = new Set(eb.d);

    function sb(bb, wb) {
      return "string" === typeof bb ? (0, lb.p)(bb, wb) : wb
    }

    function mb(bb) {
      return sb(bb.width, Ib)
    }

    function hb(bb, wb) {
      var Mb;
      const eb = null !== (Mb = bb.applyTo) && void 0 !== Mb ? Mb : "both";
      return "both" === eb || eb === wb
    }

    function zb(bb) {
      const wb = mb(bb);
      return "glow" === bb.style ? wb * Ob : Math.ceil(wb / 2) + 1
    }

    function Xb(bb, wb, Mb) {
      var eb, Vb;
      const Ib = null !== (eb = Fb(bb.info)) && void 0 !== eb ? eb : {},
        Xb = "string" === typeof bb.name ? bb.name : "",
        xb = Ib.subtitle;
      if (Array.isArray(Ib.content) && 0 === Ib.content.length && !(Array.isArray(xb) && xb.length > 0)) return null;
      const jb = "number" === typeof bb.hideNameSeed ? bb.hideNameSeed : null,
        Kb = "" === Xb || !0 === bb.mesh ? Xb : (0, Hb.b)(Xb, !Mb.canSeeRealPlayerNames, jb);
      if (!Kb && !Ib.content) return null;
      const rb = "string" === typeof bb.colour ? bb.colour : "default",
        Rb = Object.hasOwn(pb.v, rb) ? pb.v[rb] : void 0,
        Db = Ib.content ? (0, lb.h)(Ib.content, lb.b.DEFAULT_FONT_SIZE, Mb, Rb) : [{
          kind: "text",
          text: Kb,
          size: lb.b.DEFAULT_FONT_SIZE,
          colour: Rb
        }],
        cb = [],
        Yb = "boolean" === typeof bb.player ? bb.player : Array.isArray(bb.ranks),
        Zb = Yb ? (0, gb.h)(Ib.backgroundColor) : null;
      Zb && cb.push({
        kind: "rank",
        rank: Zb
      });
      for (const Hb of Array.isArray(bb.ranks) ? bb.ranks : []) {
        const bb = (0, lb.q)(Hb);
        null !== bb && void 0 !== bb && bb.nameTag && bb.visible && cb.push({
          kind: "rank",
          rank: bb
        })
      }
      cb.push(...Db), Yb && "" !== Xb && Mb.isFriend(Xb) && cb.push({
        kind: "rank",
        rank: Eb
      }), "number" === typeof bb.DV && cb.push({
        kind: "text",
        text: ` ${bb.DV}m`,
        size: lb.b.DEFAULT_FONT_SIZE,
        colour: "#cef3ff"
      });
      const fb = xb ? (0, lb.h)(xb, lb.b.DEFAULT_SUBTITLE_FONT_SIZE, Mb) : null,
        Ab = "string" === typeof Ib.backgroundColor ? Ib.backgroundColor : "#22283b",
        Wb = "string" === typeof Ib.subtitleBackgroundColor ? Ib.subtitleBackgroundColor : "#1a1e2d",
        Jb = Fb(Ib.healthbar),
        Sb = Fb(Ib.border),
        Nb = Array.isArray(bb.effects) ? bb.effects.filter((bb => "string" === typeof bb && Bb.has(bb))) : [],
        vb = "number" === typeof bb.health ? Math.max(0, Math.min(1, bb.health)) : null,
        Qb = (0, lb.d)(cb, wb, Mb),
        Gb = (0, lb.d)(null !== fb && void 0 !== fb ? fb : [], wb, Mb),
        qb = {
          width: lb.b.EFFECT_ICON_SIZE * Nb.length,
          height: Nb.length > 0 ? lb.b.EFFECT_ICON_SIZE : 0
        },
        ab = Sb && hb(Sb, "nametag") ? zb(Sb) : 0,
        ib = sb(null === Jb || void 0 === Jb ? void 0 : Jb.height, Lb),
        ub = Sb && hb(Sb, "healthbar") ? zb(Sb) : 0,
        db = "never" === (null !== (Vb = null === Jb || void 0 === Jb ? void 0 : Jb.display) && void 0 !== Vb ? Vb : "onDamage") ? 0 : ib + ub,
        Pb = Math.max(qb.height, ab),
        nb = Math.max(lb.b.VERTICAL_PADDING, db, ab);
      let yb = Math.max(Qb.width, Gb.width, qb.width);
      if (Sb) {
        const bb = zb(Sb) + lb.b.HORIZONTAL_PADDING / 2;
        yb = Math.max(yb, Math.max(Qb.width, Gb.width) + lb.b.HORIZONTAL_PADDING + 2 * bb)
      }
      const ob = Qb.height + Gb.height + Pb + nb,
        Tb = Qb.width + lb.b.HORIZONTAL_PADDING,
        kb = Gb.width + lb.b.HORIZONTAL_PADDING,
        bw = Math.max(Tb, kb),
        ww = (yb - bw) / 2,
        Mw = Math.max(qb.height, ab);
      return {
        width: yb,
        height: ob,
        draw: bb => {
          const wb = [];
          if (bb.fillStyle = Ab, bb.fillRect(ww, Mw, bw, Qb.height), (0, lb.m)(cb, (yb - Tb) / 2 + lb.b.HORIZONTAL_PADDING / 2, Mw, Qb.height, bb, Mb, wb), fb) {
            const eb = Mw + Qb.height;
            bb.fillStyle = Wb, bb.fillRect(ww, eb, bw, Gb.height), (0, lb.m)(fb, (yb - kb) / 2 + lb.b.HORIZONTAL_PADDING / 2, eb, Gb.height, bb, Mb, wb)
          }
          let eb = null;
          if (null !== vb) {
            const wb = ob - ib - ub;
            null !== Jb && void 0 !== Jb && Jb.backgroundColour && (bb.fillStyle = Jb.backgroundColour, bb.fillRect(ww, wb, bw, ib)), bb.fillStyle = function(bb, wb) {
              const Mb = null === bb || void 0 === bb ? void 0 : bb.foregroundColour;
              if ("string" === typeof Mb) return Mb;
              const eb = [...Array.isArray(Mb) && Mb.length > 0 ? Mb : Ub].sort(((bb, wb) => bb.healthFraction - wb.healthFraction)),
                Hb = eb.find((bb => wb <= bb.healthFraction));
              return (null !== Hb && void 0 !== Hb ? Hb : eb[eb.length - 1]).colour
            }(Jb, vb), bb.fillRect(ww, wb, Math.round(bw * vb), ib), eb = {
              x: ww,
              y: wb,
              width: bw,
              height: ib
            }
          }
          if (Sb) {
            const wb = [];
            hb(Sb, "nametag") && wb.push({
              x: ww,
              y: Mw,
              width: bw,
              height: Qb.height + (fb ? Gb.height : 0)
            }), eb && hb(Sb, "healthbar") && wb.push(eb), wb.length > 0 && function(bb, wb, Mb) {
              const eb = mb(wb),
                Hb = eb / 2,
                pb = bb => bb.width > 0 && bb.height > 0,
                Vb = Mb.map((bb => ({
                  x: bb.x + Hb,
                  y: bb.y + Hb,
                  width: bb.width - eb,
                  height: bb.height - eb
                }))).filter(pb);
              if (0 === Vb.length) return;
              const gb = wb => {
                const Mb = wb.filter(pb);
                if (0 !== Mb.length) {
                  bb.beginPath();
                  for (const wb of Mb) bb.rect(wb.x, wb.y, wb.width, wb.height);
                  bb.stroke()
                }
              };
              if (bb.save(), bb.strokeStyle = wb.colour, bb.lineWidth = eb, bb.lineJoin = "round", "glow" === wb.style) bb.shadowColor = wb.colour, bb.shadowBlur = eb * Ob, gb(Vb), gb(Vb);
              else if ("double" === wb.style) {
                gb(Vb);
                const bb = eb + 2;
                gb(Vb.map((wb => ({
                  x: wb.x + bb,
                  y: wb.y + bb,
                  width: wb.width - 2 * bb,
                  height: wb.height - 2 * bb
                }))))
              } else gb(Vb);
              bb.restore()
            }(bb, Sb, wb)
          }(0, lb.j)(wb, bb);
          for (let Hb = 0; Hb < Nb.length; Hb++) {
            const wb = Mb.effectImage(Nb[Hb]);
            wb && (bb.imageSmoothingEnabled = !1, bb.drawImage(wb, 5 + Cb * Hb, 5, tb, tb))
          }
        }
      }
    }
  },
  37464: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => pb,
      d: () => sb,
      h: () => tb,
      j: () => zb,
      k: () => hb,
      m: () => mb,
      p: () => Lb,
      q: () => Ob
    });
    var eb = Mb(644),
      Hb = Mb(366);
    const pb = {
        DEFAULT_FONT_SIZE: 47,
        DEFAULT_SUBTITLE_FONT_SIZE: 30,
        HORIZONTAL_PADDING: 30,
        VERTICAL_PADDING: 22,
        TEXT_SHADOW_WIDTH: 2,
        LINE_SPACING: 8,
        EFFECT_ICON_SIZE: 70
      },
      Vb = 41;

    function gb(bb) {
      return `bolder ${bb}px 'Jetbrains Mono'`
    }

    function lb(bb) {
      return "object" === typeof bb && null !== bb
    }

    function Lb(bb, wb) {
      const Mb = "number" === typeof bb ? bb : "string" === typeof bb ? Number(bb.replace("px", "")) : NaN;
      return Number.isFinite(Mb) && Mb > 0 ? Mb : wb
    }

    function Ib(bb) {
      return lb(bb) ? bb : void 0
    }

    function Ob(bb) {
      const wb = "number" === typeof bb ? eb.x[bb] : bb;
      return "string" === typeof wb && Object.hasOwn(eb.l, wb) ? eb.l[wb] : void 0
    }

    function Ub(bb, wb) {
      return "string" === typeof bb ? bb : lb(bb) ? "string" === typeof bb.translationKey ? wb.translate(bb.translationKey, bb.params).map((bb => "string" === typeof bb ? bb : bb.icon)).join("") : "string" === typeof bb.entityName ? wb.shownPlayerName(bb.entityName) : "" : void 0 === bb || null === bb ? "" : String(bb)
    }

    function tb(bb, wb, Mb, eb) {
      if (!Array.isArray(bb)) return [];
      const Vb = [];
      for (const Cb of bb) {
        var gb, Ob;
        if (lb(Cb) && "chatTag" in Cb) {
          Vb.push({
            kind: "rank",
            rank: Cb
          });
          continue
        }
        if (lb(Cb) && "icon" in Cb && !("mainRGB" in Cb)) {
          var tb;
          Vb.push({
            kind: "icon",
            icon: String(Cb.icon),
            size: Lb(null === (tb = Ib(Cb.style)) || void 0 === tb ? void 0 : tb.fontSize, pb.DEFAULT_FONT_SIZE)
          });
          continue
        }
        if (lb(Cb) && (0, Hb.xb)(Cb)) {
          Vb.push({
            kind: "text",
            text: "",
            size: wb,
            colour: eb
          });
          continue
        }
        let bb, Eb;
        lb(Cb) && (0, Hb.tb)(Cb) ? (bb = Mb.keyBindingText(String(Cb.action)), Eb = Ib(Cb.style)) : lb(Cb) && "str" in Cb ? (bb = Cb.str, Eb = Ib(Cb.style)) : bb = Cb;
        const Fb = Lb(null === (gb = Eb) || void 0 === gb ? void 0 : gb.fontSize, wb),
          Bb = null !== (Ob = (0, Hb._b)(Eb)) && void 0 !== Ob ? Ob : eb;
        if (lb(bb) && "string" === typeof bb.translationKey) {
          const wb = Mb.translate(bb.translationKey, bb.params);
          if (wb.some((bb => "string" !== typeof bb))) {
            for (const bb of wb) Vb.push("string" === typeof bb ? {
              kind: "text",
              text: bb,
              size: Fb,
              colour: Bb
            } : {
              kind: "icon",
              icon: bb.icon,
              size: Fb
            });
            continue
          }
        }
        Vb.push({
          kind: "text",
          text: Ub(bb, Mb),
          size: Fb,
          colour: Bb
        })
      }
      return Vb
    }

    function Cb(bb) {
      return void 0 !== bb && "rank" !== bb.kind
    }

    function Eb(bb, wb) {
      const Mb = Cb(bb),
        eb = Cb(wb);
      return void 0 === bb && !eb || !Mb && void 0 === wb ? 0 : Mb !== eb ? .5 * pb.HORIZONTAL_PADDING : 0
    }

    function Fb(bb) {
      return "rank" === bb.kind ? pb.DEFAULT_FONT_SIZE : bb.size
    }

    function Bb(bb, wb, Mb) {
      return "icon" === bb.kind ? bb.size : "rank" === bb.kind ? function(bb, wb) {
        const Mb = wb.rankIcon(bb.rank.icon);
        return Mb ? Vb * (Mb.width / Mb.height) : Vb
      }(bb, Mb) + pb.HORIZONTAL_PADDING : (Mb.glyphsShown(bb.text), wb.font = gb(bb.size), wb.measureText(bb.text).width)
    }

    function sb(bb, wb, Mb) {
      if (0 === bb.length) return {
        width: 0,
        height: 0,
        sizes: []
      };
      let eb = 0;
      for (const pb of bb) eb = Math.max(eb, Fb(pb));
      const Hb = [];
      let Vb = Eb(void 0, bb[0]);
      for (let pb = 0; pb < bb.length; pb++) {
        const eb = Vb;
        Vb += Bb(bb[pb], wb, Mb), Vb += Eb(bb[pb], bb[pb + 1]), Hb.push({
          x: eb,
          width: Vb - eb
        })
      }
      return {
        width: Vb,
        height: eb + pb.VERTICAL_PADDING,
        sizes: Hb
      }
    }

    function mb(bb, wb, Mb, eb, Hb, pb, Vb) {
      wb += Eb(void 0, bb[0]);
      for (let gb = 0; gb < bb.length; gb++) {
        const lb = hb(bb[gb], wb, Mb, eb, Hb, pb, Vb);
        wb += 0 === lb ? 0 : lb + Eb(bb[gb], bb[gb + 1])
      }
    }

    function hb(bb, wb, Mb, eb, Hb, lb, Lb, Ib) {
      var Ob;
      if ("icon" === bb.kind) {
        const eb = lb.iconImage(bb.icon);
        return eb && Lb.push({
          image: eb,
          x: wb,
          y: Mb + pb.VERTICAL_PADDING / 2,
          size: bb.size
        }), bb.size
      }
      if ("rank" === bb.kind) {
        const gb = null !== Ib && void 0 !== Ib ? Ib : Bb(bb, Hb, lb);
        return function(bb, wb, Mb, eb, Hb, gb, lb) {
          var Lb, Ib;
          const {
            rank: Ob
          } = bb;
          gb.fillStyle = Ob.mainRGB, gb.fillRect(wb, Mb, eb, Hb);
          const Ub = lb.rankIcon(Ob.icon);
          if (!Ub) return;
          const tb = Vb / Ub.height,
            Cb = wb + (eb - Ub.width * tb) / 2,
            Eb = Mb + (Hb - Vb) / 2,
            Fb = new Path2D(Ub.path),
            Bb = pb.TEXT_SHADOW_WIDTH,
            sb = (null === (Lb = Ob.nameTag) || void 0 === Lb ? void 0 : Lb.iconShadowRGB) || "black";
          for (const pb of [-1, 1])
            for (const bb of [-1, 1]) Xb(gb, Fb, Cb + Bb * pb, Eb + Bb * bb, tb, sb);
          Xb(gb, Fb, Cb, Eb, tb, (null === (Ib = Ob.nameTag) || void 0 === Ib ? void 0 : Ib.iconRGB) || "white")
        }(bb, wb, Mb, gb, eb, Hb, lb), gb
      }
      if (0 === bb.text.length) return 0;
      const Ub = gb(bb.size);
      Hb.font = Ub;
      const tb = null !== Ib && void 0 !== Ib ? Ib : Hb.measureText(bb.text).width;
      return function(bb, wb, Mb, eb, Hb, Vb) {
        const gb = pb.TEXT_SHADOW_WIDTH;
        Vb.font = eb, Vb.fillStyle = "black";
        for (const pb of [-1, 1])
          for (const eb of [-1, 1]) Vb.fillText(bb, wb + gb * pb, Mb + gb * eb);
        Vb.fillStyle = Hb, Vb.fillText(bb, wb, Mb)
      }(bb.text, wb, Mb + eb - pb.VERTICAL_PADDING + 5, Ub, null !== (Ob = bb.colour) && void 0 !== Ob ? Ob : "white", Hb), tb
    }

    function zb(bb, wb) {
      for (const {
          image: Mb,
          x: eb,
          y: Hb,
          size: pb
        }
        of bb) wb.imageSmoothingEnabled = !1, wb.drawImage(Mb, eb, Hb, pb, pb)
    }

    function Xb(bb, wb, Mb, eb, Hb, pb) {
      bb.save(), bb.translate(Mb, eb), bb.scale(Hb, Hb), bb.fillStyle = pb, bb.fill(wb), bb.restore()
    }
  },
  37528: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => nb,
      e: () => ww,
      i: () => ab,
      k: () => ub,
      n: () => db,
      r: () => Pb,
      t: () => Hw,
      x: () => ib,
      B: () => Gb
    });
    var eb = Mb(5315),
      Hb = Mb(5331),
      pb = Mb(35334),
      Vb = Mb(4659),
      gb = Mb(4653),
      lb = Mb(1499),
      Lb = Mb(37455),
      Ib = Mb(110),
      Ob = Mb(1329),
      Ub = Mb(37471),
      tb = Mb(37530),
      Cb = Mb(37534),
      Eb = Mb(9503),
      Fb = Mb(8894),
      Bb = Mb(9076),
      sb = Mb(9190),
      mb = Mb(9344),
      hb = Mb(9364);
    const zb = {
      youtube: Eb.i,
      "person-military-pointing": Fb.f,
      sparkle: Bb.f,
      user: sb.e,
      wrench: mb.g,
      zap: hb.d,
      ...Ub.d
    };

    function Xb(bb) {
      const [wb, Mb, , , eb] = bb.icon;
      return {
        width: wb,
        height: Mb,
        path: "string" === typeof eb ? eb : eb.join(" ")
      }
    }
    const xb = new Map(Object.entries(zb).map((bb => {
      let [wb, Mb] = bb;
      return [wb, Xb(Mb)]
    })));
    let jb = !1;
    const Kb = new Set;
    var rb = Mb(37544);
    const Rb = "Jetbrains Mono",
      Db = "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2190-2193,U+2212,U+2215,U+2248,U+26A1,U+2713,U+FEFF,U+FFFD",
      cb = "U+0100-0130,U+0132-0151,U+0154-017F,U+018F-0190,U+0192,U+019B,U+01A0-01A1,U+01AF-01B0,U+01CD-01CE,U+01D0,U+01D2,U+01D4,U+01D6,U+01D8,U+01DA,U+01DC,U+01E6-01E7,U+01EA-01EB,U+01F4-01F5,U+01FC-01FF,U+0218-021B,U+0232-0233,U+0237,U+0259,U+02B9-02BA,U+02C7,U+02C9,U+02D8-02D9,U+02DB,U+02DD,U+02F3,U+02F7,U+0300-0303,U+0306-0307,U+0309-030C,U+030F,U+0312,U+031B,U+0323,U+0325-0328,U+0336-0338,U+0374-0375,U+037E,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03CF,U+03D5-03D7,U+0401-040C,U+040E-044F,U+0451-045C,U+045E-045F,U+0490-0493,U+049A-049B,U+04A2-04A3,U+04AE-04B1,U+04B6-04B7,U+04BA-04BB,U+04D8-04D9,U+04DC-04DF,U+04E4-04E9,U+04F4-04F5,U+0AEA,U+1E80-1E85,U+1E9E,U+1EA0-1EF9,U+2070,U+2074-207A,U+207C,U+2080-2089,U+20AB,U+20AE,U+20B4,U+20BD,U+20BF,U+2102,U+210D,U+2113,U+2115-2116,U+2119-211A,U+211D,U+2124,U+212E,U+2140,U+218A-218B,U+2194-2199,U+219D-219E,U+21A0,U+21A2-21A3,U+21A5-21A7,U+21A9-21AA,U+21AD,U+21BE,U+21C9,U+21D0-21D4,U+21DB,U+21DE-21DF,U+21E5,U+21E7-21E8,U+21EA,U+2200-220C,U+220E-2211,U+2213,U+2218-221A,U+221E,U+2223-2225,U+2227-222B,U+2234-2239,U+223C,U+223E,U+2243,U+2245,U+2247,U+2249,U+224B,U+224D,U+2254,U+2257,U+225F-2265,U+226A-2273,U+227A-227C,U+2282-2289,U+228E-2299,U+229B-22A5,U+22B4,U+22B8,U+22BB-22BD,U+22C2-22C4,U+22C6,U+22C8-22CA,U+22CE,U+22D0,U+22E2,U+22EE-22F1,U+2302-2305,U+2308-230B,U+2318,U+231C-231F,U+2324-2326,U+2328,U+232B,U+2336-237A,U+2389-238B,U+2395,U+239B-23AD,U+23CE,U+23FB-23FE,U+2400-2421,U+2423-2424,U+2500-25A1,U+25AA-25AB,U+25B2-25CC,U+25CE-25CF,U+25D4-25D5,U+25E6-25EB,U+25EF,U+25F6,U+266D,U+266F,U+2687,U+26A0,U+2715,U+2717,U+2736,U+276E-2771,U+2794,U+279C-279E,U+27C5-27C6,U+27DC,U+27E6-27EB,U+27F5-27F7,U+2916,U+294A,U+2987-2988,U+2A00,U+2A05-2A06,U+2B58,U+E0A0-E0A2,U+E0B0-E0B3,U+FE62,U+FF5B,U+FF5D,U+16910,U+1D538-1D539,U+1D53B-1D53E,U+1D540-1D544,U+1D546,U+1D54A-1D550,U+1D552-1D56B";

    function Yb(bb) {
      return bb.split(",").map((bb => {
        const [wb, Mb = wb] = bb.slice(2).split("-");
        return [parseInt(wb, 16), parseInt(Mb, 16)]
      }))
    }
    const Zb = {
        latin: Yb(Db),
        rest: Yb(cb)
      },
      fb = new RegExp(`[${Zb.rest.map((bb=>{let[wb,Mb]=bb;return`\\u{${wb.toString(16)}}-\\u{${Mb.toString(16)}}`})).join("")}]`, "u");

    function Ab(bb) {
      return wb => {
        console.warn(`[bloxd-wasm-client] the text font's ${bb} file did not load`, wb)
      }
    }
    const Wb = 397,
      Jb = 1,
      Sb = {
        translate: bb => [bb],
        keyBindingText: bb => bb,
        isFriend: () => !1,
        hiddenNames: {},
        loadsFontRest: !1
      };
    let Nb = null,
      vb = 0,
      Qb = "none";

    function Gb() {
      return vb
    }
    const qb = new Set;

    function ab(bb) {
      return qb.add(bb), () => {
        qb.delete(bb)
      }
    }

    function ib() {
      vb++, !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0] ? Qb = "all" : "none" === Qb && (Qb = "notBoards");
      for (const bb of qb) bb()
    }(0, Ub.j)((() => {
      ib(!1)
    })), (0, lb.p)((() => {
      (function() {
        const bb = jb;
        return jb = !1, bb
      })() && ib(!1)
    }));
    const ub = new class {
      constructor(bb) {
        this.loaded = bb, this.latin = null, this.rest = null, this.restWanted = !1
      }
      load() {
        if (null === this.latin) {
          this.latin = new FontFace(Rb, `url(${(0,rb.e)()}) format("woff2")`, {
            unicodeRange: Db
          }).load().then((bb => {
            document.fonts.add(bb), this.loaded()
          }), Ab("Latin"));
          const bb = new FontFace(Rb, `url(${(0,rb.f)()}) format("woff2")`, {
            unicodeRange: cb,
            display: "swap"
          });
          document.fonts.add(bb), bb.loaded.then((() => {
            this.loaded()
          }), Ab("rest")), this.rest = bb, this.restWanted && bb.load()
        }
        return this.latin
      }
      loadRest() {
        var bb;
        this.restWanted || (this.restWanted = !0, null === (bb = this.rest) || void 0 === bb || bb.load())
      }
      async untilLoadedFor(bb) {
        await this.load(), this.loadFor(bb), await document.fonts.load(`16px '${Rb}'`, bb).catch((wb => {
          console.warn("[bloxd-wasm-client] the text font did not load for", bb, wb)
        }))
      }
      loadFor(bb) {
        !this.restWanted && fb.test(bb) && this.loadRest()
      }
    }(ib);

    function db(bb) {
      Object.assign(Sb, bb), Sb.loadsFontRest && ub.loadRest(), ib(!1)
    }

    function Pb(bb) {
      bb !== Nb && (Nb = bb, ib())
    }

    function nb(bb) {
      if ("none" === Qb || null === bb) return;
      bb(Wb, "all" === Qb ? 0 : Jb, new Uint8Array(0)) && (Qb = "none")
    }
    const yb = new Map,
      ob = new Map;

    function Tb(bb, wb, Mb) {
      var eb;
      const Hb = Mb ? `${bb}#${Mb.join(",")}` : bb,
        pb = yb.get(Hb);
      if (pb) return pb.image;
      const Vb = {
        image: null !== (eb = ob.get(Hb)) && void 0 !== eb ? eb : null
      };
      return yb.set(Hb, Vb), wb().then((async bb => {
        if (null === bb) return null;
        const wb = new Image;
        wb.crossOrigin = "anonymous", wb.src = bb, await wb.decode();
        const eb = await createImageBitmap(wb);
        if (!Mb) return eb;
        try {
          return function(bb, wb) {
            let [Mb, eb, Hb] = wb;
            const pb = (0, Lb.g)(bb.width, bb.height),
              {
                canvas: Vb
              } = pb;
            return pb.drawImage(bb, 0, 0), pb.globalCompositeOperation = "multiply", pb.fillStyle = `rgb(${Mb}, ${eb}, ${Hb})`, pb.fillRect(0, 0, Vb.width, Vb.height), pb.globalCompositeOperation = "destination-in", pb.drawImage(bb, 0, 0), Vb
          }(eb, Mb)
        } finally {
          eb.close()
        }
      })).then((bb => {
        yb.get(Hb) === Vb && ob.delete(Hb), bb !== Vb.image && (Vb.image = bb, ib(!1))
      }), (wb => {
        console.warn(`[bloxd-wasm-client] text icon ${bb} did not load`, wb), yb.get(Hb) === Vb && (yb.delete(Hb), ob.delete(Hb), null !== Vb.image && ib(!1))
      })), Vb.image
    }(0, tb.c)((() => {
      ob.clear();
      for (const [bb, {
          image: wb
        }] of yb) null !== wb && ob.set(bb, wb);
      yb.clear(), ib(!1)
    }));
    const kb = new Set(eb.d),
      bw = new Set(["CubeBlock", "SlabBlock", "StairsBlock"]);

    function ww() {
      (0, Cb.g)().catch((() => {}))
    }

    function Mw(bb) {
      return kb.has(bb) ? Tb(`icon:${bb}`, (async () => {
        var wb, Mb;
        return null !== (wb = null === (Mb = (0, tb.h)()) || void 0 === Mb ? void 0 : Mb.textureUrl(bb)) && void 0 !== wb ? wb : (await (0, Cb.c)()).ingameIconUrl(bb)
      })) : null
    }
    let ew = "unasked";
    const Hw = {
      get canSeeRealPlayerNames() {
        return Ib.featureFlags.canSeeRealPlayerNames
      },
      get canSeePlayerWrittenText() {
        return Ib.featureFlags.canSeePlayerWrittenText
      },
      get localPlayerDbId() {
        return Nb
      },
      shownPlayerName: bb => (0, Ob.c)(bb, Sb.hiddenNames),
      translate: (bb, wb) => {
        const Mb = "object" === typeof wb && null !== wb ? wb : void 0;
        return Sb.translate(bb, (0, Ob.g)(Mb, Sb.hiddenNames))
      },
      keyBindingText: bb => Sb.keyBindingText(bb),
      isFriend: bb => Sb.isFriend(bb, Sb.hiddenNames),
      iconImage: function(bb) {
        if (kb.has(bb)) return Mw(bb);
        if ("unasked" === ew && (ew = "loading", (0, gb.f)().then((() => {
            ew = "in", ib(!1)
          }), (bb => {
            ew = "failed", console.warn("[bloxd-wasm-client] the item sprite table did not load, so text item icons stay blank", bb)
          }))), "in" !== ew) return null;
        const wb = (0, Vb.c)(bb),
          Mb = void 0 === wb ? void 0 : (0, pb.itemTypeNameOf)(wb);
        if ("Gun" === Mb) return null;
        const eb = (0, gb.e)(bb),
          lb = void 0 !== Mb && bw.has(Mb);
        if (lb && void 0 === eb) return null;
        const Lb = void 0 !== wb && "GrayscaleArmour" === (0, pb.itemTypeOf)(wb) || Object.hasOwn(Hb.b, bb),
          Ib = null !== eb && void 0 !== eb ? eb : bb;
        return Tb(lb ? `block:${Ib}` : `item:${Ib}`, (async () => {
          var bb, wb;
          const Mb = (0, tb.h)(),
            eb = await (0, Cb.g)();
          return null !== (bb = null !== (wb = null === Mb || void 0 === Mb ? void 0 : Mb.textureUrl(Ib)) && void 0 !== wb ? wb : eb.itemSpriteUrl(Ib)) && void 0 !== bb ? bb : lb ? null : eb.notFoundUrl()
        }), Lb ? (0, Hb.c)(bb) : void 0)
      },
      effectImage: Mw,
      rankIcon: function(bb) {
        const wb = xb.get(bb);
        if (wb) return wb;
        const Mb = (0, lb.f)(bb, (0, lb.j)(bb));
        if (!Mb) return (0, lb.i)("brands") && (0, lb.i)("solid") ? Kb.has(bb) || (Kb.add(bb), console.warn(`[bloxd-wasm-client] unknown rank icon "${bb}": not in the bundled Font Awesome subset, so its tag draws no icon`)) : jb = !0, null;
        const eb = Xb(Mb);
        return xb.set(bb, eb), eb
      },
      glyphsShown: bb => {
        ub.loadFor(bb)
      }
    }
  },
  37452: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Fb,
      g: () => Qb,
      j: () => cb,
      l: () => fb
    });
    var eb = Mb(37519),
      Hb = Mb(37455),
      pb = Mb(37457),
      Vb = Mb(37464);

    function gb(bb, wb, Mb) {
      const eb = "object" === typeof bb && null !== bb ? bb : {},
        Hb = function(bb, wb, Mb) {
          if (!Array.isArray(bb) || 0 === bb.length) return [];
          const eb = [{
            width: 0,
            height: 0,
            y: 0,
            items: []
          }];
          for (const gb of (0, Vb.h)(bb, Vb.b.DEFAULT_FONT_SIZE, Mb)) {
            if ("text" !== gb.kind) {
              eb[eb.length - 1].items.push({
                content: gb,
                chars: 1,
                size: {
                  x: 0,
                  width: 0
                }
              });
              continue
            }
            if (0 === gb.text.length) continue;
            const bb = eb[eb.length - 1].items.reduce(((bb, wb) => bb + ("text" === wb.content.kind ? (0, pb.c)(wb.content.text) : wb.chars)), 0);
            (0, pb.e)(gb.text, bb).forEach(((bb, wb) => {
              wb > 0 && eb.push({
                width: 0,
                height: 0,
                y: 0,
                items: []
              }), bb.length > 0 && eb[eb.length - 1].items.push({
                content: {
                  ...gb,
                  text: bb
                },
                chars: bb.length,
                size: {
                  x: 0,
                  width: 0
                }
              })
            }))
          }
          let Hb = Vb.b.VERTICAL_PADDING / 2;
          for (const pb of eb) {
            if (0 === pb.items.length) continue;
            const {
              width: bb,
              height: eb,
              sizes: gb
            } = (0, Vb.d)(pb.items.map((bb => bb.content)), wb, Mb);
            pb.items.forEach(((bb, wb) => {
              bb.size = gb[wb]
            })), pb.width = bb, pb.height = eb, pb.y = Hb, Hb += eb + Vb.b.LINE_SPACING
          }
          return eb
        }(eb.content, wb, Mb);
      let gb = 0,
        lb = Vb.b.VERTICAL_PADDING,
        Lb = 0;
      for (const pb of Hb) {
        gb = Math.max(gb, pb.width + 2 * Vb.b.HORIZONTAL_PADDING), lb += pb.height + Vb.b.LINE_SPACING;
        for (const bb of pb.items) Lb += bb.chars
      }
      const Ib = "string" === typeof eb.backgroundColor ? eb.backgroundColor : "#22283b";
      return {
        width: gb,
        height: lb,
        chars: Lb,
        draw: (bb, wb) => {
          const eb = [];
          if (bb.fillStyle = Ib, bb.fillRect(0, 0, gb, lb), null === wb)
            for (const pb of Hb) pb.items.length > 0 && (0, Vb.m)(pb.items.map((bb => bb.content)), 0, pb.y, pb.height, bb, Mb, eb);
          else {
            let pb = 0;
            for (const gb of Hb)
              for (const Hb of gb.items) {
                if (pb >= wb) break;
                const lb = "text" === Hb.content.kind ? {
                  ...Hb.content,
                  text: Hb.content.text.substring(0, wb - pb)
                } : Hb.content;
                (0, Vb.k)(lb, Hb.size.x, gb.y, gb.height, bb, Mb, eb, Hb.size.width), pb += Hb.chars
              }
          }(0, Vb.j)(eb, bb)
        }
      }
    }
    var lb = Mb(37469),
      Lb = Mb(37512);
    const Ib = 256,
      Ob = 1024,
      Ub = {
        width: 1,
        height: 7 / 8
      };
    var tb = Mb(37523);
    const Cb = {
      leaderboard: ""
    };
    var Eb = Mb(37528);
    const Fb = {
        Nametag: 1,
        MultilineText: 2,
        Board: 3,
        Leaderboard: 4
      },
      Bb = 2048,
      sb = 256,
      mb = 10,
      hb = 4,
      zb = 65536,
      Xb = new TextDecoder;
    let xb = Eb.t,
      jb = -1;
    const Kb = new Map,
      rb = new Map;
    let Rb = 0;
    const Db = new TextEncoder;

    function cb(bb, wb) {
      const Mb = Db.encode(JSON.stringify(wb)),
        eb = new Uint8Array(Mb.length + 1);
      return eb[0] = bb, eb.set(Mb, 1), eb
    }
    const Yb = {
        name: "Ag",
        info: null,
        colour: "default",
        ranks: [],
        effects: [],
        health: .5,
        DV: null,
        hideNameSeed: null
      },
      Zb = [cb(Fb.Nametag, Yb), cb(Fb.Nametag, {
        ...Yb,
        info: {
          content: [{
            str: "Ag"
          }],
          subtitle: ["Ag"]
        }
      }), cb(Fb.MultilineText, {
        box: {
          content: ["Ag"]
        },
        shown: null
      }), ...eb.e.map(((bb, wb) => cb(Fb.Board, {
        shared: {
          text: "Ag",
          textSize: wb
        },
        w: 0,
        h: 0
      })))];

    function fb(bb) {
      Eb.k.load().then((() => {
        if (bb()) return;
        const wb = (0, Hb.g)(1, 1, {
          willReadFrequently: !0
        });
        var Mb;
        wb && (Mb = wb.canvas, Zb.map((bb => Qb(bb, Mb))))
      }))
    }
    let Ab = Eb.B;

    function Wb() {
      Kb.clear(), rb.clear()
    }

    function Jb(bb, wb) {
      const Mb = bb.get(wb);
      return void 0 !== Mb && (bb.delete(wb), bb.set(wb, Mb)), Mb
    }

    function Sb(bb, wb, Mb) {
      bb.set(wb, Mb), bb.size > sb && bb.delete(bb.keys().next().value)
    }

    function Nb(bb, wb, Mb) {
      if (bb === Fb.Nametag) {
        let bb = Jb(Kb, wb);
        return void 0 === bb && (bb = (0, lb.d)(JSON.parse(wb), Mb, xb), Sb(Kb, wb, bb)), bb
      }
      if (bb === Fb.MultilineText) {
        var Hb;
        const bb = JSON.parse(wb),
          eb = JSON.stringify(null !== (Hb = bb.box) && void 0 !== Hb ? Hb : null),
          pb = "number" === typeof bb.shown ? bb.shown : null;
        let Vb = Jb(rb, eb);
        void 0 === Vb && (Vb = gb(bb.box, Mb, xb), Sb(rb, eb, Vb));
        const lb = null === pb ? null : Math.min(Math.max(0, Math.floor(pb)), Vb.chars),
          Lb = Vb;
        return {
          width: Lb.width,
          height: Lb.height,
          draw: bb => {
            Lb.draw(bb, lb)
          }
        }
      }
      if (bb === Fb.Board) return function(bb, wb) {
        var Mb;
        if (!wb.canSeePlayerWrittenText) return null;
        const {
          shared: Hb,
          w: pb = 0,
          h: Vb = 0
        } = bb, gb = !pb;
        let lb;
        if (gb) {
          var tb, Cb;
          lb = null !== (tb = null === Hb || void 0 === Hb || null === (Cb = Hb.text) || void 0 === Cb ? void 0 : Cb.toString()) && void 0 !== tb ? tb : ""
        } else {
          if ("string" !== typeof(null === Hb || void 0 === Hb ? void 0 : Hb.text)) return null;
          lb = Hb.text
        }
        if ("" === lb.trim()) return null;
        const Eb = null !== (Mb = null === Hb || void 0 === Hb ? void 0 : Hb.textSize) && void 0 !== Mb ? Mb : 0,
          Fb = eb.e[Eb].ingameFontSize;
        let Bb = Ub,
          sb = Ib;
        gb || (lb = (0, eb.u)(lb, Eb, pb, Vb), Bb = (0, eb.A)(pb, Vb), sb = Math.min(Ib, Ob / Math.max(Bb.width, Bb.height)));
        const mb = Math.round(sb * Bb.width),
          hb = Math.round(sb * Bb.height),
          zb = sb / Ib;
        return {
          width: mb,
          height: hb,
          draw: bb => {
            Lb.b.fontSize = Fb * zb, Lb.b.fontWeight = "bold", Lb.b.font = "'Jetbrains Mono', monospace", Lb.b.drawText(bb, lb, 0, (-10 - 7 * Eb) * zb, mb, hb)
          }
        }
      }(JSON.parse(wb), xb);
      if (bb === Fb.Leaderboard) return function(bb, wb, Mb) {
        var eb;
        const Hb = (0, tb.j)(bb.opts, Cb),
          pb = (0, tb.f)(Hb, Mb),
          Vb = {
            top: (0, tb.i)(Hb, (0, tb.k)(bb.top)),
            around: null !== (eb = bb.around) && void 0 !== eb ? eb : null,
            showPlayerText: wb.canSeePlayerWrittenText,
            localPlayerDbId: wb.localPlayerDbId
          };
        return {
          width: pb.pixelWidth,
          height: pb.pixelHeight,
          draw: bb => {
            const {
              a: wb,
              d: Mb
            } = bb.getTransform();
            (0, tb.e)(bb, Math.round(pb.pixelWidth * wb), Math.round(pb.pixelHeight * Mb), pb, Hb, Vb)
          }
        }
      }(JSON.parse(wb), xb, Bb);
      throw new Error(`unknown text plane kind ${bb}`)
    }
    const vb = 2 ** Math.floor(Math.log2(Bb));

    function Qb(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      try {
        if (bb.length < 2) return [0, 0];
        const pb = (0, Hb.d)(wb);
        if (!pb) return [0, 0];
        const Vb = Ab();
        Vb !== jb && (jb = Vb, Wb());
        const [gb] = bb, lb = Xb.decode(bb.subarray(1));
        let Lb;
        gb !== Fb.Board && gb !== Fb.Leaderboard || !xb.canSeePlayerWrittenText || xb.glyphsShown(lb), pb.save();
        try {
          Lb = Nb(gb, lb, pb)
        } finally {
          pb.restore()
        }
        if (null === Lb || !(Lb.width > 0 && Lb.height > 0)) return [0, 0];
        const Ib = Math.min(1, Bb / Lb.width, Bb / Lb.height),
          Ob = bb => eb ? function(bb) {
            const wb = 2 ** Math.ceil(Math.log2(bb));
            return Math.min(vb, wb - bb > bb - wb / 2 ? wb / 2 : wb)
          }(bb) : Math.min(Bb, Math.ceil(bb * Ib)),
          [Ub, tb] = [Ob(Lb.width), Ob(Lb.height)];
        ! function(bb, wb, Mb, eb, Hb) {
          const pb = Math.max(bb.width, Mb),
            Vb = Math.max(bb.height, eb),
            gb = Hb || pb * Vb > Math.max(hb * Mb * eb, zb),
            [lb, Lb] = gb ? [Mb, eb] : [pb, Vb];
          lb === bb.width && Lb === bb.height ? wb.clearRect(0, 0, lb, Lb) : (bb.width = lb, bb.height = Lb)
        }(wb, pb, Ub, tb, Mb), pb.save();
        try {
          const [bb, wb] = eb ? [Ub / Lb.width, tb / Lb.height] : [Ib, Ib];
          1 === bb && 1 === wb || pb.scale(bb, wb), Lb.draw(pb)
        } finally {
          pb.restore()
        }
        return [Ub, tb]
      } catch (pb) {
        ! function(bb, wb) {
          Rb < mb && (Rb++, console.warn(`[bloxd-wasm-client] ${bb}`, wb))
        }("could not raster a text plane", pb);
        try {
          wb.width = 1
        } catch {}
        return [0, 0]
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);