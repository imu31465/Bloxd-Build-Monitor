export const id = 244;
export const ids = [244];
export const modules = {
  37846: (dd, Od, md) => {
    md.d(Od, {
      b: () => Kd,
      e: () => Xd
    });
    var Wd = md(4515);
    let Fd = null,
      Rd = null;

    function Xd() {
      return Rd ??= md.e(242).then((() => md(37698))).then((dd => {
        let {
          ITEM_SPRITES: Od,
          ITEM_SPRITES_WITHOUT_FILE: md,
          ITEM_FILES_WITHOUT_SPRITE: Rd
        } = dd;
        Fd = function(dd, Od, md) {
          const Fd = new Set,
            Rd = (0, Wd.C)(Od);
          let Xd = 0;
          for (const [Wd, Kd] of dd.entries()) Wd === Rd[Xd] ? Xd++ : Fd.add(Kd);
          if ("" !== md)
            for (const Kd of md.split(Wd.v)) Fd.add(Kd);
          return Fd
        }(Od.split(Wd.v), md, Rd)
      }), (dd => {
        throw Rd = null, dd
      })), Rd
    }

    function Kd(dd) {
      var Od, md;
      return null !== (Od = null === (md = Fd) || void 0 === md ? void 0 : md.has(dd)) && void 0 !== Od && Od
    }
  },
  37837: (dd, Od, md) => {
    md.d(Od, {
      c: () => Qd,
      e: () => hd,
      i: () => Kd,
      j: () => vd
    });
    var Wd = md(2100);
    let Fd = null,
      Rd = 0;
    const Xd = new Set;

    function Kd() {
      return Fd
    }

    function hd() {
      return Rd
    }

    function vd(dd) {
      Fd = dd, Rd++, (0, Wd.d)();
      for (const Od of Xd) Od()
    }

    function Qd(dd) {
      Xd.add(dd)
    }
  },
  37839: (dd, Od, md) => {
    md.d(Od, {
      b: () => Xd,
      d: () => Kd
    });
    var Wd = md(37846);
    let Fd = null,
      Rd = null;

    function Xd() {
      return Fd ??= md.e(74).then((() => md(43159))).catch((dd => {
        throw Fd = null, dd
      })), Fd
    }

    function Kd() {
      return Rd ??= Promise.all([Xd(), (0, Wd.e)()]).then((dd => {
        let [Od] = dd;
        return Od
      }), (dd => {
        throw Rd = null, dd
      })), Rd
    }
  },
  37746: (dd, Od, md) => {
    md.d(Od, {
      d: () => wd
    });
    var Wd = md(5134),
      Fd = md(1322),
      Rd = md(689),
      Xd = md(2178),
      Kd = md(37755),
      hd = md(37740);
    const vd = 10,
      Qd = 3,
      td = 3,
      od = [{
        healthFraction: .25,
        colour: "#ff0000"
      }, {
        healthFraction: .5,
        colour: "#ffaa00"
      }, {
        healthFraction: 1,
        colour: "#00ff00"
      }],
      Nd = 64,
      qd = 69,
      Hd = {
        icon: Xd.e,
        mainRGB: "transparent",
        chatTag: [],
        nameTag: {
          iconRGB: "#f38ab6",
          iconShadowRGB: "black"
        },
        visible: !0
      };

    function yd(dd) {
      return "object" !== typeof dd || null === dd || Array.isArray(dd) ? void 0 : dd
    }
    const bd = new Set(Wd.e);

    function Td(dd, Od) {
      return "string" === typeof dd ? (0, hd.s)(dd, Od) : Od
    }

    function pd(dd) {
      return Td(dd.width, Qd)
    }

    function Yd(dd, Od) {
      var md;
      const Wd = null !== (md = dd.applyTo) && void 0 !== md ? md : "both";
      return "both" === Wd || Wd === Od
    }

    function gd(dd) {
      const Od = pd(dd);
      return "glow" === dd.style ? Od * td : Math.ceil(Od / 2) + 1
    }

    function wd(dd, Od, md) {
      var Wd, Xd;
      const Qd = null !== (Wd = yd(dd.info)) && void 0 !== Wd ? Wd : {},
        wd = "string" === typeof dd.name ? dd.name : "",
        Ed = Qd.subtitle;
      if (Array.isArray(Qd.content) && 0 === Qd.content.length && !(Array.isArray(Ed) && Ed.length > 0)) return null;
      const Jd = "number" === typeof dd.hideNameSeed ? dd.hideNameSeed : null,
        Ud = "" === wd || !0 === dd.mesh ? wd : (0, Fd.b)(wd, !md.canSeeRealPlayerNames, Jd);
      if (!Ud && !Qd.content) return null;
      const xd = "string" === typeof dd.colour ? dd.colour : "default",
        Bd = Object.hasOwn(Rd.q, xd) ? Rd.q[xd] : void 0,
        Sd = Qd.content ? (0, hd.i)(Qd.content, hd.c.DEFAULT_FONT_SIZE, md, Bd) : [{
          kind: "text",
          text: Ud,
          size: hd.c.DEFAULT_FONT_SIZE,
          colour: Bd
        }],
        sd = [],
        ud = "boolean" === typeof dd.player ? dd.player : Array.isArray(dd.ranks),
        Vd = ud ? (0, Kd.i)(Qd.backgroundColor) : null;
      Vd && sd.push({
        kind: "rank",
        rank: Vd
      });
      for (const Fd of Array.isArray(dd.ranks) ? dd.ranks : []) {
        const dd = (0, hd.t)(Fd);
        null !== dd && void 0 !== dd && dd.nameTag && dd.visible && sd.push({
          kind: "rank",
          rank: dd
        })
      }
      sd.push(...Sd), ud && "" !== wd && md.isFriend(wd) && sd.push({
        kind: "rank",
        rank: Hd
      }), "number" === typeof dd.UX && sd.push({
        kind: "text",
        text: ` ${dd.UX}m`,
        size: hd.c.DEFAULT_FONT_SIZE,
        colour: "#cef3ff"
      });
      const Ad = Ed ? (0, hd.i)(Ed, hd.c.DEFAULT_SUBTITLE_FONT_SIZE, md) : null,
        rd = "string" === typeof Qd.backgroundColor ? Qd.backgroundColor : "#22283b",
        Gd = "string" === typeof Qd.subtitleBackgroundColor ? Qd.subtitleBackgroundColor : "#1a1e2d",
        nd = yd(Qd.healthbar),
        Ld = yd(Qd.border),
        Pd = Array.isArray(dd.effects) ? dd.effects.filter((dd => "string" === typeof dd && bd.has(dd))) : [],
        zd = "number" === typeof dd.health ? Math.max(0, Math.min(1, dd.health)) : null,
        cd = (0, hd.e)(sd, Od, md),
        jd = (0, hd.e)(null !== Ad && void 0 !== Ad ? Ad : [], Od, md),
        Dd = {
          width: hd.c.EFFECT_ICON_SIZE * Pd.length,
          height: Pd.length > 0 ? hd.c.EFFECT_ICON_SIZE : 0
        },
        ed = Ld && Yd(Ld, "nametag") ? gd(Ld) : 0,
        Id = Td(null === nd || void 0 === nd ? void 0 : nd.height, vd),
        ld = Ld && Yd(Ld, "healthbar") ? gd(Ld) : 0,
        Cd = "never" === (null !== (Xd = null === nd || void 0 === nd ? void 0 : nd.display) && void 0 !== Xd ? Xd : "onDamage") ? 0 : Id + ld,
        Zd = Math.max(Dd.height, ed),
        kd = Math.max(hd.c.VERTICAL_PADDING, Cd, ed);
      let fd = Math.max(cd.width, jd.width, Dd.width);
      if (Ld) {
        const dd = gd(Ld) + hd.c.HORIZONTAL_PADDING / 2;
        fd = Math.max(fd, Math.max(cd.width, jd.width) + hd.c.HORIZONTAL_PADDING + 2 * dd)
      }
      const Md = cd.height + jd.height + Zd + kd,
        dO = cd.width + hd.c.HORIZONTAL_PADDING,
        OO = jd.width + hd.c.HORIZONTAL_PADDING,
        mO = Math.max(dO, OO),
        WO = (fd - mO) / 2,
        FO = Math.max(Dd.height, ed);
      return {
        width: fd,
        height: Md,
        draw: dd => {
          const Od = [];
          if (dd.fillStyle = rd, dd.fillRect(WO, FO, mO, cd.height), (0, hd.p)(sd, (fd - dO) / 2 + hd.c.HORIZONTAL_PADDING / 2, FO, cd.height, dd, md, Od), Ad) {
            const Wd = FO + cd.height;
            dd.fillStyle = Gd, dd.fillRect(WO, Wd, mO, jd.height), (0, hd.p)(Ad, (fd - OO) / 2 + hd.c.HORIZONTAL_PADDING / 2, Wd, jd.height, dd, md, Od)
          }
          let Wd = null;
          if (null !== zd) {
            const Od = Md - Id - ld;
            null !== nd && void 0 !== nd && nd.backgroundColour && (dd.fillStyle = nd.backgroundColour, dd.fillRect(WO, Od, mO, Id)), dd.fillStyle = function(dd, Od) {
              const md = null === dd || void 0 === dd ? void 0 : dd.foregroundColour;
              if ("string" === typeof md) return md;
              const Wd = [...Array.isArray(md) && md.length > 0 ? md : od].sort(((dd, Od) => dd.healthFraction - Od.healthFraction)),
                Fd = Wd.find((dd => Od <= dd.healthFraction));
              return (null !== Fd && void 0 !== Fd ? Fd : Wd[Wd.length - 1]).colour
            }(nd, zd), dd.fillRect(WO, Od, Math.round(mO * zd), Id), Wd = {
              x: WO,
              y: Od,
              width: mO,
              height: Id
            }
          }
          if (Ld) {
            const Od = [];
            Yd(Ld, "nametag") && Od.push({
              x: WO,
              y: FO,
              width: mO,
              height: cd.height + (Ad ? jd.height : 0)
            }), Wd && Yd(Ld, "healthbar") && Od.push(Wd), Od.length > 0 && function(dd, Od, md) {
              const Wd = pd(Od),
                Fd = Wd / 2,
                Rd = dd => dd.width > 0 && dd.height > 0,
                Xd = md.map((dd => ({
                  x: dd.x + Fd,
                  y: dd.y + Fd,
                  width: dd.width - Wd,
                  height: dd.height - Wd
                }))).filter(Rd);
              if (0 === Xd.length) return;
              const Kd = Od => {
                const md = Od.filter(Rd);
                if (0 !== md.length) {
                  dd.beginPath();
                  for (const Od of md) dd.rect(Od.x, Od.y, Od.width, Od.height);
                  dd.stroke()
                }
              };
              if (dd.save(), dd.strokeStyle = Od.colour, dd.lineWidth = Wd, dd.lineJoin = "round", "glow" === Od.style) dd.shadowColor = Od.colour, dd.shadowBlur = Wd * td, Kd(Xd), Kd(Xd);
              else if ("double" === Od.style) {
                Kd(Xd);
                const dd = Wd + 2;
                Kd(Xd.map((Od => ({
                  x: Od.x + dd,
                  y: Od.y + dd,
                  width: Od.width - 2 * dd,
                  height: Od.height - 2 * dd
                }))))
              } else Kd(Xd);
              dd.restore()
            }(dd, Ld, Od)
          }(0, hd.k)(Od, dd);
          for (let Fd = 0; Fd < Pd.length; Fd++) {
            const Od = md.effectImage(Pd[Fd]);
            Od && (dd.imageSmoothingEnabled = !1, dd.drawImage(Od, 5 + qd * Fd, 5, Nd, Nd))
          }
        }
      }
    }
  },
  37740: (dd, Od, md) => {
    md.d(Od, {
      c: () => Rd,
      e: () => Td,
      i: () => Nd,
      k: () => gd,
      m: () => Yd,
      p: () => pd,
      s: () => vd,
      t: () => td
    });
    var Wd = md(689),
      Fd = md(387);
    const Rd = {
        DEFAULT_FONT_SIZE: 47,
        DEFAULT_SUBTITLE_FONT_SIZE: 30,
        HORIZONTAL_PADDING: 30,
        VERTICAL_PADDING: 22,
        TEXT_SHADOW_WIDTH: 2,
        LINE_SPACING: 8,
        EFFECT_ICON_SIZE: 70
      },
      Xd = 41;

    function Kd(dd) {
      return `bolder ${dd}px 'Jetbrains Mono'`
    }

    function hd(dd) {
      return "object" === typeof dd && null !== dd
    }

    function vd(dd, Od) {
      const md = "number" === typeof dd ? dd : "string" === typeof dd ? Number(dd.replace("px", "")) : NaN;
      return Number.isFinite(md) && md > 0 ? md : Od
    }

    function Qd(dd) {
      return hd(dd) ? dd : void 0
    }

    function td(dd) {
      const Od = "number" === typeof dd ? Wd.r[dd] : dd;
      return "string" === typeof Od && Object.hasOwn(Wd.l, Od) ? Wd.l[Od] : void 0
    }

    function od(dd, Od) {
      return "string" === typeof dd ? dd : hd(dd) ? "string" === typeof dd.translationKey ? Od.translate(dd.translationKey, dd.params).map((dd => "string" === typeof dd ? dd : dd.icon)).join("") : "string" === typeof dd.entityName ? Od.shownPlayerName(dd.entityName) : "" : void 0 === dd || null === dd ? "" : String(dd)
    }

    function Nd(dd, Od, md, Wd) {
      if (!Array.isArray(dd)) return [];
      const Xd = [];
      for (const qd of dd) {
        var Kd, td;
        if (hd(qd) && "chatTag" in qd) {
          Xd.push({
            kind: "rank",
            rank: qd
          });
          continue
        }
        if (hd(qd) && "icon" in qd && !("mainRGB" in qd)) {
          var Nd;
          Xd.push({
            kind: "icon",
            icon: String(qd.icon),
            size: vd(null === (Nd = Qd(qd.style)) || void 0 === Nd ? void 0 : Nd.fontSize, Rd.DEFAULT_FONT_SIZE)
          });
          continue
        }
        if (hd(qd) && (0, Fd.wb)(qd)) {
          Xd.push({
            kind: "text",
            text: "",
            size: Od,
            colour: Wd
          });
          continue
        }
        let dd, Hd;
        hd(qd) && (0, Fd.sb)(qd) ? (dd = md.keyBindingText(String(qd.action)), Hd = Qd(qd.style)) : hd(qd) && "str" in qd ? (dd = qd.str, Hd = Qd(qd.style)) : dd = qd;
        const yd = vd(null === (Kd = Hd) || void 0 === Kd ? void 0 : Kd.fontSize, Od),
          bd = null !== (td = (0, Fd.Yb)(Hd)) && void 0 !== td ? td : Wd;
        if (hd(dd) && "string" === typeof dd.translationKey) {
          const Od = md.translate(dd.translationKey, dd.params);
          if (Od.some((dd => "string" !== typeof dd))) {
            for (const dd of Od) Xd.push("string" === typeof dd ? {
              kind: "text",
              text: dd,
              size: yd,
              colour: bd
            } : {
              kind: "icon",
              icon: dd.icon,
              size: yd
            });
            continue
          }
        }
        Xd.push({
          kind: "text",
          text: od(dd, md),
          size: yd,
          colour: bd
        })
      }
      return Xd
    }

    function qd(dd) {
      return void 0 !== dd && "rank" !== dd.kind
    }

    function Hd(dd, Od) {
      const md = qd(dd),
        Wd = qd(Od);
      return void 0 === dd && !Wd || !md && void 0 === Od ? 0 : md !== Wd ? .5 * Rd.HORIZONTAL_PADDING : 0
    }

    function yd(dd) {
      return "rank" === dd.kind ? Rd.DEFAULT_FONT_SIZE : dd.size
    }

    function bd(dd, Od, md) {
      return "icon" === dd.kind ? dd.size : "rank" === dd.kind ? function(dd, Od) {
        const md = Od.rankIcon(dd.rank.icon);
        return md ? Xd * (md.width / md.height) : Xd
      }(dd, md) + Rd.HORIZONTAL_PADDING : (md.glyphsShown(dd.text), Od.font = Kd(dd.size), Od.measureText(dd.text).width)
    }

    function Td(dd, Od, md) {
      if (0 === dd.length) return {
        width: 0,
        height: 0,
        sizes: []
      };
      let Wd = 0;
      for (const Rd of dd) Wd = Math.max(Wd, yd(Rd));
      const Fd = [];
      let Xd = Hd(void 0, dd[0]);
      for (let Rd = 0; Rd < dd.length; Rd++) {
        const Wd = Xd;
        Xd += bd(dd[Rd], Od, md), Xd += Hd(dd[Rd], dd[Rd + 1]), Fd.push({
          x: Wd,
          width: Xd - Wd
        })
      }
      return {
        width: Xd,
        height: Wd + Rd.VERTICAL_PADDING,
        sizes: Fd
      }
    }

    function pd(dd, Od, md, Wd, Fd, Rd, Xd) {
      Od += Hd(void 0, dd[0]);
      for (let Kd = 0; Kd < dd.length; Kd++) {
        const hd = Yd(dd[Kd], Od, md, Wd, Fd, Rd, Xd);
        Od += 0 === hd ? 0 : hd + Hd(dd[Kd], dd[Kd + 1])
      }
    }

    function Yd(dd, Od, md, Wd, Fd, hd, vd, Qd) {
      var td;
      if ("icon" === dd.kind) {
        const Wd = hd.iconImage(dd.icon);
        return Wd && vd.push({
          image: Wd,
          x: Od,
          y: md + Rd.VERTICAL_PADDING / 2,
          size: dd.size
        }), dd.size
      }
      if ("rank" === dd.kind) {
        const Kd = null !== Qd && void 0 !== Qd ? Qd : bd(dd, Fd, hd);
        return function(dd, Od, md, Wd, Fd, Kd, hd) {
          var vd, Qd;
          const {
            rank: td
          } = dd;
          Kd.fillStyle = td.mainRGB, Kd.fillRect(Od, md, Wd, Fd);
          const od = hd.rankIcon(td.icon);
          if (!od) return;
          const Nd = Xd / od.height,
            qd = Od + (Wd - od.width * Nd) / 2,
            Hd = md + (Fd - Xd) / 2,
            yd = new Path2D(od.path),
            bd = Rd.TEXT_SHADOW_WIDTH,
            Td = (null === (vd = td.nameTag) || void 0 === vd ? void 0 : vd.iconShadowRGB) || "black";
          for (const Rd of [-1, 1])
            for (const dd of [-1, 1]) wd(Kd, yd, qd + bd * Rd, Hd + bd * dd, Nd, Td);
          wd(Kd, yd, qd, Hd, Nd, (null === (Qd = td.nameTag) || void 0 === Qd ? void 0 : Qd.iconRGB) || "white")
        }(dd, Od, md, Kd, Wd, Fd, hd), Kd
      }
      if (0 === dd.text.length) return 0;
      const od = Kd(dd.size);
      Fd.font = od;
      const Nd = null !== Qd && void 0 !== Qd ? Qd : Fd.measureText(dd.text).width;
      return function(dd, Od, md, Wd, Fd, Xd) {
        const Kd = Rd.TEXT_SHADOW_WIDTH;
        Xd.font = Wd, Xd.fillStyle = "black";
        for (const Rd of [-1, 1])
          for (const Wd of [-1, 1]) Xd.fillText(dd, Od + Kd * Rd, md + Kd * Wd);
        Xd.fillStyle = Fd, Xd.fillText(dd, Od, md)
      }(dd.text, Od, md + Wd - Rd.VERTICAL_PADDING + 5, od, null !== (td = dd.colour) && void 0 !== td ? td : "white", Fd), Nd
    }

    function gd(dd, Od) {
      for (const {
          image: md,
          x: Wd,
          y: Fd,
          size: Rd
        }
        of dd) Od.imageSmoothingEnabled = !1, Od.drawImage(md, Wd, Fd, Rd, Rd)
    }

    function wd(dd, Od, md, Wd, Fd, Rd) {
      dd.save(), dd.translate(md, Wd), dd.scale(Fd, Fd), dd.fillStyle = Rd, dd.fill(Od), dd.restore()
    }
  },
  37829: (dd, Od, md) => {
    md.d(Od, {
      d: () => kd,
      h: () => WO,
      i: () => ed,
      j: () => ld,
      l: () => Cd,
      n: () => Zd,
      o: () => XO,
      r: () => Id,
      u: () => jd
    });
    var Wd = md(5134),
      Fd = md(5155),
      Rd = md(35549),
      Xd = md(4509),
      Kd = md(4502),
      hd = md(1455),
      vd = md(37729),
      Qd = md(107),
      td = md(1315),
      od = md(37755),
      Nd = md(37837),
      qd = md(37839),
      Hd = md(9278),
      yd = md(8672),
      bd = md(8854),
      Td = md(8980),
      pd = md(9116),
      Yd = md(9133);
    const gd = {
      youtube: Hd.g,
      "person-military-pointing": yd.d,
      sparkle: bd.c,
      user: Td.i,
      wrench: pd.h,
      zap: Yd.f,
      ...od.d
    };

    function wd(dd) {
      const [Od, md, , , Wd] = dd.icon;
      return {
        width: Od,
        height: md,
        path: "string" === typeof Wd ? Wd : Wd.join(" ")
      }
    }
    const Ed = new Map(Object.entries(gd).map((dd => {
      let [Od, md] = dd;
      return [Od, wd(md)]
    })));
    let Jd = !1;
    const Ud = new Set;
    var xd = md(37851);
    const Bd = "Jetbrains Mono",
      Sd = "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2190-2193,U+2212,U+2215,U+2248,U+26A1,U+2713,U+FEFF,U+FFFD",
      sd = "U+0100-0130,U+0132-0151,U+0154-017F,U+018F-0190,U+0192,U+019B,U+01A0-01A1,U+01AF-01B0,U+01CD-01CE,U+01D0,U+01D2,U+01D4,U+01D6,U+01D8,U+01DA,U+01DC,U+01E6-01E7,U+01EA-01EB,U+01F4-01F5,U+01FC-01FF,U+0218-021B,U+0232-0233,U+0237,U+0259,U+02B9-02BA,U+02C7,U+02C9,U+02D8-02D9,U+02DB,U+02DD,U+02F3,U+02F7,U+0300-0303,U+0306-0307,U+0309-030C,U+030F,U+0312,U+031B,U+0323,U+0325-0328,U+0336-0338,U+0374-0375,U+037E,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03CF,U+03D5-03D7,U+0401-040C,U+040E-044F,U+0451-045C,U+045E-045F,U+0490-0493,U+049A-049B,U+04A2-04A3,U+04AE-04B1,U+04B6-04B7,U+04BA-04BB,U+04D8-04D9,U+04DC-04DF,U+04E4-04E9,U+04F4-04F5,U+0AEA,U+1E80-1E85,U+1E9E,U+1EA0-1EF9,U+2070,U+2074-207A,U+207C,U+2080-2089,U+20AB,U+20AE,U+20B4,U+20BD,U+20BF,U+2102,U+210D,U+2113,U+2115-2116,U+2119-211A,U+211D,U+2124,U+212E,U+2140,U+218A-218B,U+2194-2199,U+219D-219E,U+21A0,U+21A2-21A3,U+21A5-21A7,U+21A9-21AA,U+21AD,U+21BE,U+21C9,U+21D0-21D4,U+21DB,U+21DE-21DF,U+21E5,U+21E7-21E8,U+21EA,U+2200-220C,U+220E-2211,U+2213,U+2218-221A,U+221E,U+2223-2225,U+2227-222B,U+2234-2239,U+223C,U+223E,U+2243,U+2245,U+2247,U+2249,U+224B,U+224D,U+2254,U+2257,U+225F-2265,U+226A-2273,U+227A-227C,U+2282-2289,U+228E-2299,U+229B-22A5,U+22B4,U+22B8,U+22BB-22BD,U+22C2-22C4,U+22C6,U+22C8-22CA,U+22CE,U+22D0,U+22E2,U+22EE-22F1,U+2302-2305,U+2308-230B,U+2318,U+231C-231F,U+2324-2326,U+2328,U+232B,U+2336-237A,U+2389-238B,U+2395,U+239B-23AD,U+23CE,U+23FB-23FE,U+2400-2421,U+2423-2424,U+2500-25A1,U+25AA-25AB,U+25B2-25CC,U+25CE-25CF,U+25D4-25D5,U+25E6-25EB,U+25EF,U+25F6,U+266D,U+266F,U+2687,U+26A0,U+2715,U+2717,U+2736,U+276E-2771,U+2794,U+279C-279E,U+27C5-27C6,U+27DC,U+27E6-27EB,U+27F5-27F7,U+2916,U+294A,U+2987-2988,U+2A00,U+2A05-2A06,U+2B58,U+E0A0-E0A2,U+E0B0-E0B3,U+FE62,U+FF5B,U+FF5D,U+16910,U+1D538-1D539,U+1D53B-1D53E,U+1D540-1D544,U+1D546,U+1D54A-1D550,U+1D552-1D56B";

    function ud(dd) {
      return dd.split(",").map((dd => {
        const [Od, md = Od] = dd.slice(2).split("-");
        return [parseInt(Od, 16), parseInt(md, 16)]
      }))
    }
    const Vd = {
        latin: ud(Sd),
        rest: ud(sd)
      },
      Ad = new RegExp(`[${Vd.rest.map((dd=>{let[Od,md]=dd;return`\\u{${Od.toString(16)}}-\\u{${md.toString(16)}}`})).join("")}]`, "u");

    function rd(dd) {
      return Od => {
        console.warn(`[bloxd-wasm-client] the text font's ${dd} file did not load`, Od)
      }
    }
    const Gd = 397,
      nd = 1,
      Ld = {
        translate: dd => [dd],
        keyBindingText: dd => dd,
        isFriend: () => !1,
        hiddenNames: {},
        loadsFontRest: !1
      };
    let Pd = null,
      zd = 0,
      cd = "none";

    function jd() {
      return zd
    }
    const Dd = new Set;

    function ed(dd) {
      return Dd.add(dd), () => {
        Dd.delete(dd)
      }
    }

    function Id() {
      zd++, !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0] ? cd = "all" : "none" === cd && (cd = "notBoards");
      for (const dd of Dd) dd()
    }(0, od.m)((() => {
      Id(!1)
    })), (0, hd.n)((() => {
      (function() {
        const dd = Jd;
        return Jd = !1, dd
      })() && Id(!1)
    }));
    const ld = new class {
      constructor(dd) {
        this.loaded = dd, this.latin = null, this.rest = null, this.restWanted = !1
      }
      load() {
        if (null === this.latin) {
          this.latin = new FontFace(Bd, `url(${(0,xd.d)()}) format("woff2")`, {
            unicodeRange: Sd
          }).load().then((dd => {
            document.fonts.add(dd), this.loaded()
          }), rd("Latin"));
          const dd = new FontFace(Bd, `url(${(0,xd.f)()}) format("woff2")`, {
            unicodeRange: sd,
            display: "swap"
          });
          document.fonts.add(dd), dd.loaded.then((() => {
            this.loaded()
          }), rd("rest")), this.rest = dd, this.restWanted && dd.load()
        }
        return this.latin
      }
      loadRest() {
        var dd;
        this.restWanted || (this.restWanted = !0, null === (dd = this.rest) || void 0 === dd || dd.load())
      }
      async untilLoadedFor(dd) {
        await this.load(), this.loadFor(dd), await document.fonts.load(`16px '${Bd}'`, dd).catch((Od => {
          console.warn("[bloxd-wasm-client] the text font did not load for", dd, Od)
        }))
      }
      loadFor(dd) {
        !this.restWanted && Ad.test(dd) && this.loadRest()
      }
    }(Id);

    function Cd(dd) {
      Object.assign(Ld, dd), Ld.loadsFontRest && ld.loadRest(), Id(!1)
    }

    function Zd(dd) {
      dd !== Pd && (Pd = dd, Id())
    }

    function kd(dd) {
      if ("none" === cd || null === dd) return;
      dd(Gd, "all" === cd ? 0 : nd, new Uint8Array(0)) && (cd = "none")
    }
    const fd = new Map,
      Md = new Map;

    function dO(dd, Od, md) {
      var Wd;
      const Fd = md ? `${dd}#${md.join(",")}` : dd,
        Rd = fd.get(Fd);
      if (Rd) return Rd.image;
      const Xd = {
        image: null !== (Wd = Md.get(Fd)) && void 0 !== Wd ? Wd : null
      };
      return fd.set(Fd, Xd), Od().then((async dd => {
        if (null === dd) return null;
        const Od = new Image;
        Od.crossOrigin = "anonymous", Od.src = dd, await Od.decode();
        const Wd = await createImageBitmap(Od);
        if (!md) return Wd;
        try {
          return function(dd, Od) {
            let [md, Wd, Fd] = Od;
            const Rd = (0, vd.i)(dd.width, dd.height),
              {
                canvas: Xd
              } = Rd;
            return Rd.drawImage(dd, 0, 0), Rd.globalCompositeOperation = "multiply", Rd.fillStyle = `rgb(${md}, ${Wd}, ${Fd})`, Rd.fillRect(0, 0, Xd.width, Xd.height), Rd.globalCompositeOperation = "destination-in", Rd.drawImage(dd, 0, 0), Xd
          }(Wd, md)
        } finally {
          Wd.close()
        }
      })).then((dd => {
        fd.get(Fd) === Xd && Md.delete(Fd), dd !== Xd.image && (Xd.image = dd, Id(!1))
      }), (Od => {
        console.warn(`[bloxd-wasm-client] text icon ${dd} did not load`, Od), fd.get(Fd) === Xd && (fd.delete(Fd), Md.delete(Fd), null !== Xd.image && Id(!1))
      })), Xd.image
    }(0, Nd.c)((() => {
      Md.clear();
      for (const [dd, {
          image: Od
        }] of fd) null !== Od && Md.set(dd, Od);
      fd.clear(), Id(!1)
    }));
    const OO = new Set(Wd.e),
      mO = new Set(["CubeBlock", "SlabBlock", "StairsBlock"]);

    function WO() {
      (0, qd.d)().catch((() => {}))
    }

    function FO(dd) {
      return OO.has(dd) ? dO(`icon:${dd}`, (async () => {
        var Od, md;
        return null !== (Od = null === (md = (0, Nd.i)()) || void 0 === md ? void 0 : md.textureUrl(dd)) && void 0 !== Od ? Od : (await (0, qd.b)()).ingameIconUrl(dd)
      })) : null
    }
    let RO = "unasked";
    const XO = {
      get canSeeRealPlayerNames() {
        return Qd.featureFlags.canSeeRealPlayerNames
      },
      get canSeePlayerWrittenText() {
        return Qd.featureFlags.canSeePlayerWrittenText
      },
      get localPlayerDbId() {
        return Pd
      },
      shownPlayerName: dd => (0, td.e)(dd, Ld.hiddenNames),
      translate: (dd, Od) => {
        const md = "object" === typeof Od && null !== Od ? Od : void 0;
        return Ld.translate(dd, (0, td.g)(md, Ld.hiddenNames))
      },
      keyBindingText: dd => Ld.keyBindingText(dd),
      isFriend: dd => Ld.isFriend(dd, Ld.hiddenNames),
      iconImage: function(dd) {
        if (OO.has(dd)) return FO(dd);
        if ("unasked" === RO && (RO = "loading", (0, Kd.d)().then((() => {
            RO = "in", Id(!1)
          }), (dd => {
            RO = "failed", console.warn("[bloxd-wasm-client] the item sprite table did not load, so text item icons stay blank", dd)
          }))), "in" !== RO) return null;
        const Od = (0, Xd.d)(dd),
          md = void 0 === Od ? void 0 : (0, Rd.itemTypeNameOf)(Od);
        if ("Gun" === md) return null;
        const Wd = (0, Kd.c)(dd),
          hd = void 0 !== md && mO.has(md);
        if (hd && void 0 === Wd) return null;
        const vd = void 0 !== Od && "GrayscaleArmour" === (0, Rd.itemTypeOf)(Od) || Object.hasOwn(Fd.b, dd),
          Qd = null !== Wd && void 0 !== Wd ? Wd : dd;
        return dO(hd ? `block:${Qd}` : `item:${Qd}`, (async () => {
          var dd, Od;
          const md = (0, Nd.i)(),
            Wd = await (0, qd.d)();
          return null !== (dd = null !== (Od = null === md || void 0 === md ? void 0 : md.textureUrl(Qd)) && void 0 !== Od ? Od : Wd.itemSpriteUrl(Qd)) && void 0 !== dd ? dd : hd ? null : Wd.notFoundUrl()
        }), vd ? (0, Fd.c)(dd) : void 0)
      },
      effectImage: FO,
      rankIcon: function(dd) {
        const Od = Ed.get(dd);
        if (Od) return Od;
        const md = (0, hd.e)(dd, (0, hd.k)(dd));
        if (!md) return (0, hd.h)("brands") && (0, hd.h)("solid") ? Ud.has(dd) || (Ud.add(dd), console.warn(`[bloxd-wasm-client] unknown rank icon "${dd}": not in the bundled Font Awesome subset, so its tag draws no icon`)) : Jd = !0, null;
        const Wd = wd(md);
        return Ed.set(dd, Wd), Wd
      },
      glyphsShown: dd => {
        ld.loadFor(dd)
      }
    }
  },
  37722: (dd, Od, md) => {
    md.d(Od, {
      e: () => yd,
      g: () => cd,
      i: () => sd,
      k: () => Ad
    });
    var Wd = md(37819),
      Fd = md(37729),
      Rd = md(37736),
      Xd = md(37740);

    function Kd(dd, Od, md) {
      const Wd = "object" === typeof dd && null !== dd ? dd : {},
        Fd = function(dd, Od, md) {
          if (!Array.isArray(dd) || 0 === dd.length) return [];
          const Wd = [{
            width: 0,
            height: 0,
            y: 0,
            items: []
          }];
          for (const Kd of (0, Xd.i)(dd, Xd.c.DEFAULT_FONT_SIZE, md)) {
            if ("text" !== Kd.kind) {
              Wd[Wd.length - 1].items.push({
                content: Kd,
                chars: 1,
                size: {
                  x: 0,
                  width: 0
                }
              });
              continue
            }
            if (0 === Kd.text.length) continue;
            const dd = Wd[Wd.length - 1].items.reduce(((dd, Od) => dd + ("text" === Od.content.kind ? (0, Rd.c)(Od.content.text) : Od.chars)), 0);
            (0, Rd.f)(Kd.text, dd).forEach(((dd, Od) => {
              Od > 0 && Wd.push({
                width: 0,
                height: 0,
                y: 0,
                items: []
              }), dd.length > 0 && Wd[Wd.length - 1].items.push({
                content: {
                  ...Kd,
                  text: dd
                },
                chars: dd.length,
                size: {
                  x: 0,
                  width: 0
                }
              })
            }))
          }
          let Fd = Xd.c.VERTICAL_PADDING / 2;
          for (const Rd of Wd) {
            if (0 === Rd.items.length) continue;
            const {
              width: dd,
              height: Wd,
              sizes: Kd
            } = (0, Xd.e)(Rd.items.map((dd => dd.content)), Od, md);
            Rd.items.forEach(((dd, Od) => {
              dd.size = Kd[Od]
            })), Rd.width = dd, Rd.height = Wd, Rd.y = Fd, Fd += Wd + Xd.c.LINE_SPACING
          }
          return Wd
        }(Wd.content, Od, md);
      let Kd = 0,
        hd = Xd.c.VERTICAL_PADDING,
        vd = 0;
      for (const Rd of Fd) {
        Kd = Math.max(Kd, Rd.width + 2 * Xd.c.HORIZONTAL_PADDING), hd += Rd.height + Xd.c.LINE_SPACING;
        for (const dd of Rd.items) vd += dd.chars
      }
      const Qd = "string" === typeof Wd.backgroundColor ? Wd.backgroundColor : "#22283b";
      return {
        width: Kd,
        height: hd,
        chars: vd,
        draw: (dd, Od) => {
          const Wd = [];
          if (dd.fillStyle = Qd, dd.fillRect(0, 0, Kd, hd), null === Od)
            for (const Rd of Fd) Rd.items.length > 0 && (0, Xd.p)(Rd.items.map((dd => dd.content)), 0, Rd.y, Rd.height, dd, md, Wd);
          else {
            let Rd = 0;
            for (const Kd of Fd)
              for (const Fd of Kd.items) {
                if (Rd >= Od) break;
                const hd = "text" === Fd.content.kind ? {
                  ...Fd.content,
                  text: Fd.content.text.substring(0, Od - Rd)
                } : Fd.content;
                (0, Xd.m)(hd, Fd.size.x, Kd.y, Kd.height, dd, md, Wd, Fd.size.width), Rd += Fd.chars
              }
          }(0, Xd.k)(Wd, dd)
        }
      }
    }
    var hd = md(37746),
      vd = md(37810);
    const Qd = 256,
      td = 1024,
      od = {
        width: 1,
        height: 7 / 8
      };
    var Nd = md(37825);
    const qd = {
      leaderboard: ""
    };
    var Hd = md(37829);
    const yd = {
        Nametag: 1,
        MultilineText: 2,
        Board: 3,
        Leaderboard: 4
      },
      bd = 2048,
      Td = 256,
      pd = 10,
      Yd = 4,
      gd = 65536,
      wd = new TextDecoder;
    let Ed = Hd.o,
      Jd = -1;
    const Ud = new Map,
      xd = new Map;
    let Bd = 0;
    const Sd = new TextEncoder;

    function sd(dd, Od) {
      const md = Sd.encode(JSON.stringify(Od)),
        Wd = new Uint8Array(md.length + 1);
      return Wd[0] = dd, Wd.set(md, 1), Wd
    }
    const ud = {
        name: "Ag",
        info: null,
        colour: "default",
        ranks: [],
        effects: [],
        health: .5,
        UX: null,
        hideNameSeed: null
      },
      Vd = [sd(yd.Nametag, ud), sd(yd.Nametag, {
        ...ud,
        info: {
          content: [{
            str: "Ag"
          }],
          subtitle: ["Ag"]
        }
      }), sd(yd.MultilineText, {
        box: {
          content: ["Ag"]
        },
        shown: null
      }), ...Wd.c.map(((dd, Od) => sd(yd.Board, {
        shared: {
          text: "Ag",
          textSize: Od
        },
        w: 0,
        h: 0
      })))];

    function Ad(dd) {
      Hd.j.load().then((() => {
        if (dd()) return;
        const Od = (0, Fd.i)(1, 1, {
          willReadFrequently: !0
        });
        var md;
        Od && (md = Od.canvas, Vd.map((dd => cd(dd, md))))
      }))
    }
    let rd = Hd.u;

    function Gd() {
      Ud.clear(), xd.clear()
    }

    function nd(dd, Od) {
      const md = dd.get(Od);
      return void 0 !== md && (dd.delete(Od), dd.set(Od, md)), md
    }

    function Ld(dd, Od, md) {
      dd.set(Od, md), dd.size > Td && dd.delete(dd.keys().next().value)
    }

    function Pd(dd, Od, md) {
      if (dd === yd.Nametag) {
        let dd = nd(Ud, Od);
        return void 0 === dd && (dd = (0, hd.d)(JSON.parse(Od), md, Ed), Ld(Ud, Od, dd)), dd
      }
      if (dd === yd.MultilineText) {
        var Fd;
        const dd = JSON.parse(Od),
          Wd = JSON.stringify(null !== (Fd = dd.box) && void 0 !== Fd ? Fd : null),
          Rd = "number" === typeof dd.shown ? dd.shown : null;
        let Xd = nd(xd, Wd);
        void 0 === Xd && (Xd = Kd(dd.box, md, Ed), Ld(xd, Wd, Xd));
        const hd = null === Rd ? null : Math.min(Math.max(0, Math.floor(Rd)), Xd.chars),
          vd = Xd;
        return {
          width: vd.width,
          height: vd.height,
          draw: dd => {
            vd.draw(dd, hd)
          }
        }
      }
      if (dd === yd.Board) return function(dd, Od) {
        var md;
        if (!Od.canSeePlayerWrittenText) return null;
        const {
          shared: Fd,
          w: Rd = 0,
          h: Xd = 0
        } = dd, Kd = !Rd;
        let hd;
        if (Kd) {
          var Nd, qd;
          hd = null !== (Nd = null === Fd || void 0 === Fd || null === (qd = Fd.text) || void 0 === qd ? void 0 : qd.toString()) && void 0 !== Nd ? Nd : ""
        } else {
          if ("string" !== typeof(null === Fd || void 0 === Fd ? void 0 : Fd.text)) return null;
          hd = Fd.text
        }
        if ("" === hd.trim()) return null;
        const Hd = null !== (md = null === Fd || void 0 === Fd ? void 0 : Fd.textSize) && void 0 !== md ? md : 0,
          yd = Wd.c[Hd].ingameFontSize;
        let bd = od,
          Td = Qd;
        Kd || (hd = (0, Wd.p)(hd, Hd, Rd, Xd), bd = (0, Wd.z)(Rd, Xd), Td = Math.min(Qd, td / Math.max(bd.width, bd.height)));
        const pd = Math.round(Td * bd.width),
          Yd = Math.round(Td * bd.height),
          gd = Td / Qd;
        return {
          width: pd,
          height: Yd,
          draw: dd => {
            vd.c.fontSize = yd * gd, vd.c.fontWeight = "bold", vd.c.font = "'Jetbrains Mono', monospace", vd.c.drawText(dd, hd, 0, (-10 - 7 * Hd) * gd, pd, Yd)
          }
        }
      }(JSON.parse(Od), Ed);
      if (dd === yd.Leaderboard) return function(dd, Od, md) {
        var Wd;
        const Fd = (0, Nd.j)(dd.opts, qd),
          Rd = (0, Nd.e)(Fd, md),
          Xd = {
            top: (0, Nd.i)(Fd, (0, Nd.m)(dd.top)),
            around: null !== (Wd = dd.around) && void 0 !== Wd ? Wd : null,
            showPlayerText: Od.canSeePlayerWrittenText,
            localPlayerDbId: Od.localPlayerDbId
          };
        return {
          width: Rd.pixelWidth,
          height: Rd.pixelHeight,
          draw: dd => {
            const {
              a: Od,
              d: md
            } = dd.getTransform();
            (0, Nd.b)(dd, Math.round(Rd.pixelWidth * Od), Math.round(Rd.pixelHeight * md), Rd, Fd, Xd)
          }
        }
      }(JSON.parse(Od), Ed, bd);
      throw new Error(`unknown text plane kind ${dd}`)
    }
    const zd = 2 ** Math.floor(Math.log2(bd));

    function cd(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Wd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      try {
        if (dd.length < 2) return [0, 0];
        const Rd = (0, Fd.e)(Od);
        if (!Rd) return [0, 0];
        const Xd = rd();
        Xd !== Jd && (Jd = Xd, Gd());
        const [Kd] = dd, hd = wd.decode(dd.subarray(1));
        let vd;
        Kd !== yd.Board && Kd !== yd.Leaderboard || !Ed.canSeePlayerWrittenText || Ed.glyphsShown(hd), Rd.save();
        try {
          vd = Pd(Kd, hd, Rd)
        } finally {
          Rd.restore()
        }
        if (null === vd || !(vd.width > 0 && vd.height > 0)) return [0, 0];
        const Qd = Math.min(1, bd / vd.width, bd / vd.height),
          td = dd => Wd ? function(dd) {
            const Od = 2 ** Math.ceil(Math.log2(dd));
            return Math.min(zd, Od - dd > dd - Od / 2 ? Od / 2 : Od)
          }(dd) : Math.min(bd, Math.ceil(dd * Qd)),
          [od, Nd] = [td(vd.width), td(vd.height)];
        ! function(dd, Od, md, Wd, Fd) {
          const Rd = Math.max(dd.width, md),
            Xd = Math.max(dd.height, Wd),
            Kd = Fd || Rd * Xd > Math.max(Yd * md * Wd, gd),
            [hd, vd] = Kd ? [md, Wd] : [Rd, Xd];
          hd === dd.width && vd === dd.height ? Od.clearRect(0, 0, hd, vd) : (dd.width = hd, dd.height = vd)
        }(Od, Rd, od, Nd, md), Rd.save();
        try {
          const [dd, Od] = Wd ? [od / vd.width, Nd / vd.height] : [Qd, Qd];
          1 === dd && 1 === Od || Rd.scale(dd, Od), vd.draw(Rd)
        } finally {
          Rd.restore()
        }
        return [od, Nd]
      } catch (Rd) {
        ! function(dd, Od) {
          Bd < pd && (Bd++, console.warn(`[bloxd-wasm-client] ${dd}`, Od))
        }("could not raster a text plane", Rd);
        try {
          Od.width = 1
        } catch {}
        return [0, 0]
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);