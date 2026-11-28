export const id = 246;
export const ids = [246];
export const modules = {
  37810: (dd, Od, md) => {
    md.d(Od, {
      c: () => Kd
    });
    var Wd = md(1286);

    function Fd(dd) {
      const Od = /(\d*\.?\d+)px/.exec(dd);
      return Od ? Number(Od[1]) : null
    }

    function Rd(dd) {
      return dd.split(/[\s,]+/).pop()
    }
    let Xd = !1;
    const Kd = {
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
      drawText: function(dd, Od, Wd, Kd, hd, vd) {
        if (hd <= 0 || vd <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: Qd,
          fontVariant: td,
          fontWeight: od,
          fontSize: Nd,
          font: qd
        } = this, Hd = [Qd, td, od, `${Nd}px`, qd].filter(Boolean).join(" "), yd = [
          [od, `${Nd}px`, Rd(qd)].filter(Boolean).join(" "), `${Nd}px sans-serif`
        ], bd = dd.font, Td = function(dd, Od, md) {
          for (const Wd of Od) {
            dd.font = Wd;
            const Od = Fd(dd.font),
              Xd = Rd(Wd);
            if (null !== Od && Math.abs(Od - md) <= .5 && dd.font.toLowerCase().includes(Xd.toLowerCase())) return Wd
          }
          return null
        }(dd, [Hd, ...yd], Nd);
        Td !== Hd && function(dd, Od, Wd) {
          Xd || (Xd = !0, Promise.resolve().then((() => md(1368))).then((md => {
            let {
              rH: Fd
            } = md;
            Fd(new Error("A canvas didn't take canvasTxt's font"), {
              font: dd,
              kQ: Od,
              drawnWith: null !== Wd && void 0 !== Wd ? Wd : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(Hd, bd, Td);
        const pd = Fd(dd.font);
        if (null === Td && null !== pd && pd > 0) {
          const md = Nd / pd;
          dd.save();
          try {
            return dd.scale(md, md), {
              height: this.drawLines(dd, Od, Wd / md, Kd / md, hd / md, vd / md, pd).height * md
            }
          } finally {
            dd.restore()
          }
        }
        return this.drawLines(dd, Od, Wd, Kd, hd, vd, Nd)
      },
      drawLines: function(dd, Od, md, Fd, Rd, Xd, Kd) {
        const hd = md + Rd,
          vd = Fd + Xd;
        let Qd, td = Fd + Xd / 2 + Kd / 2;
        "right" === this.align ? (Qd = hd, dd.textAlign = "right") : "left" === this.align ? (Qd = md, dd.textAlign = "left") : (Qd = md + Rd / 2, dd.textAlign = "center");
        for (const Wd of Od) {
          dd.measureText(Wd).width >= Rd && (Od = Od.replace(Wd, ""))
        }
        Od = (0, Wd.O)(Od);
        const od = [],
          Nd = Od.split("\n"),
          qd = this.justify ? dd.measureText("\u200a").width : 0;
        Nd.forEach((Od => {
          let md = dd.measureText(Od).width;
          if (md <= Rd) od.push(Od);
          else {
            let Wd = Od;
            const Fd = Rd;
            let Xd, Kd, hd;
            for (md = dd.measureText(Wd).width; md > Fd;) {
              for (Xd = 0, Kd = 0, hd = ""; Kd < Fd;) Xd++, hd = Wd.substr(0, Xd), Kd = dd.measureText(hd).width;
              Xd--, hd = hd.substr(0, Xd);
              const Od = Xd;
              if (" " !== Wd.substr(Xd, 1)) {
                for (;
                  " " !== Wd.substr(Xd, 1) && 0 !== Xd;) Xd--;
                0 === Xd && (Xd = Od), hd = Wd.substr(0, Xd)
              }
              hd = this.justify ? this.justifyLine(dd, hd, qd, "\u200a", Rd) : hd, Wd = Wd.substr(Xd), md = dd.measureText(Wd).width, od.push(hd)
            }
            md > 0 && od.push(Wd)
          }
        }));
        const Hd = this.lineHeight ? this.lineHeight : this.getTextHeight(dd, Od),
          yd = Hd * (od.length - 1),
          bd = yd / 2;
        let Td = Fd;
        "top" === this.vAlign ? td = Fd + Kd : "bottom" === this.vAlign ? (td = vd - yd, Td = vd) : (Td = Fd + Xd / 2, td -= bd), od.forEach((Od => {
          Od = Od.trim(), dd.fillText(Od, Qd, td), td += Hd
        })), this.debug && (dd.lineWidth = 3, dd.strokeStyle = "#00909e", dd.strokeRect(md, Fd, Rd, Xd), dd.lineWidth = 2, dd.strokeStyle = "#f6d743", dd.beginPath(), dd.moveTo(Qd, Fd), dd.lineTo(Qd, vd), dd.stroke(), dd.strokeStyle = "#ff6363", dd.beginPath(), dd.moveTo(md, Td), dd.lineTo(hd, Td), dd.stroke());
        return {
          height: yd + Hd
        }
      },
      getTextHeight: function(dd, Od) {
        const md = dd.textBaseline;
        dd.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: Wd
        } = dd.measureText(Od);
        return dd.textBaseline = md, Wd
      },
      justifyLine: function(dd, Od, md, Wd, Fd) {
        const Rd = Od.trim(),
          Xd = dd.measureText(Rd).width,
          Kd = Rd.split(/\s+/).length - 1,
          hd = Math.floor((Fd - Xd) / md);
        if (Kd <= 0 || hd <= 0) return Rd;
        const vd = Math.floor(hd / Kd);
        let Qd = hd - Kd * vd,
          td = [];
        for (let od = 0; od < vd; od++) td.push(Wd);
        td = td.join("");
        return Rd.replace(/\s+/g, (dd => {
          const Od = Qd > 0 ? td + Wd : td;
          return Qd--, dd + Od
        }))
      }
    }
  },
  37825: (dd, Od, md) => {
    md.d(Od, {
      b: () => Hd,
      e: () => qd,
      i: () => od,
      j: () => Qd,
      m: () => td
    });
    var Wd = md(2991),
      Fd = md(405);
    const Rd = 1024,
      Xd = 1536,
      Kd = 2 * Wd.o + 1,
      hd = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      vd = 1.5;

    function Qd(dd, Od, md) {
      if ("string" !== typeof dd) return Od;
      try {
        const md = JSON.parse(dd);
        return md && "object" === typeof md ? md : Od
      } catch (Wd) {
        return void 0 !== md && console.error(`Couldn't parse ${md}`, Wd), Od
      }
    }

    function td(dd) {
      return Qd(dd, null, "a leaderboard's rows")
    }

    function od(dd, Od) {
      var md, Wd;
      return null !== Od && void 0 !== Od ? Od : {
        status: null !== (md = dd.status) && void 0 !== md ? md : "loading",
        entries: null !== (Wd = dd.entries) && void 0 !== Wd ? Wd : []
      }
    }

    function Nd(dd, Od) {
      return "number" === typeof dd && Number.isFinite(dd) && dd > 0 ? dd : Od
    }

    function qd(dd, Od) {
      const md = Nd(dd.size, 1);
      let Wd = Nd(dd.width, Nd(2.5 * md, 2.5)),
        Fd = Nd(dd.height, Nd(3.75 * md, 3.75));
      Number.isFinite(Rd * Fd / Wd) && Number.isFinite(Xd * Wd / Fd) || (Wd = 2.5, Fd = 3.75);
      const Kd = Fd / Wd,
        hd = Math.max(1, Math.min(Rd, Od / Kd));
      return {
        width: Wd,
        height: Fd,
        layoutWidth: Math.max(Rd, Xd / Kd),
        layoutHeight: Math.max(Xd, Rd * Kd),
        pixelWidth: Math.round(hd),
        pixelHeight: Math.round(Math.max(1, Math.min(Od, hd * Kd)))
      }
    }

    function Hd(dd, Od, md, Xd, Qd, td) {
      dd.setTransform(1, 0, 0, 1, 0, 0), dd.fillStyle = Fd.E.defaultNameTagBackground, dd.fillRect(0, 0, Od, md), dd.scale(Od / Xd.layoutWidth, md / Xd.layoutHeight), dd.translate((Xd.layoutWidth - Rd) / 2, 0),
        function(dd, Od, md, Rd) {
          var Xd, Qd, td, od;
          const {
            top: Nd,
            around: qd,
            showPlayerText: Hd,
            localPlayerDbId: Td
          } = md, {
            whiteUiText: pd,
            grayUiText: Yd,
            yellowUiText: gd
          } = Fd.E;
          dd.textBaseline = "middle";
          const wd = function(Od, md, Wd, Fd, Rd, Xd) {
              let Kd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              dd.font = `bold ${Fd}px 'Jetbrains Mono', monospace`, dd.fillStyle = Rd, dd.textAlign = Kd;
              let hd = Od.replace(/[\r\n\t]/g, " ");
              if (dd.measureText(hd).width > Xd) {
                for (; hd.length > 0 && dd.measureText(`${hd}\u2026`).width > Xd;) hd = hd.slice(0, -1);
                hd += "\u2026"
              }
              dd.fillText(hd, md, Wd)
            },
            Ed = Od => {
              dd.fillStyle = pd, dd.globalAlpha = .15, dd.fillRect(24, Od, 976, 2), dd.globalAlpha = 1
            },
            Jd = null === Td ? null : (0, Fd.ic)(Td),
            Ud = dd => null !== Jd && dd.playerHash === Jd,
            xd = yd(Nd.entries, Wd.r),
            Bd = "ready" === Nd.status && xd.length > 0,
            Sd = null === qd ? [] : yd(qd.entries, Kd),
            sd = xd.some(Ud),
            ud = null === qd ? null : function(dd) {
              const Od = dd;
              if (!Od || !Number.isFinite(Od.rank) || !Number.isFinite(Od.tied) || !Number.isFinite(Od.total)) return null;
              return Od
            }(qd.standing),
            Vd = Sd.find(Ud),
            Ad = xd.find(Ud),
            rd = null === ud || void 0 === Vd ? null : {
              value: Vd.value,
              rank: ud.rank
            },
            Gd = bd(xd, void 0 === Ad || Ad.value === (null === rd || void 0 === rd ? void 0 : rd.value) ? rd : null),
            nd = bd(Sd, rd),
            Ld = (dd, Od) => {
              const md = dd.findIndex(Ud);
              return md >= 0 ? Od[md] : null
            },
            Pd = null !== (Xd = null !== (Qd = null === ud || void 0 === ud ? void 0 : ud.rank) && void 0 !== Qd ? Qd : Ld(Sd, nd)) && void 0 !== Xd ? Xd : Ld(xd, Gd);
          dd.font = "bold 34px 'Jetbrains Mono', monospace";
          const zd = [...Bd ? Gd : [], ...sd ? [] : nd],
            cd = Math.min(280, Math.max(0, ...zd.map((Od => dd.measureText(hd.format(Od)).width)))),
            jd = cd <= 80,
            Dd = jd ? 80 : 32 + cd,
            ed = jd ? 148 : Dd + 28,
            Id = 660 - ed;
          wd(`TOP ${Wd.r}  /  ALL TIME`, 24, 52, 28, Yd, 976), wd(Hd ? String(null !== (td = Od.title) && void 0 !== td ? td : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, pd, 976), wd("RANK", 32, 174, 28, Yd, ed - 40), wd("PLAYER", ed, 174, 28, Yd, Id), wd(Hd ? String(null !== (od = Od.scoreLabel) && void 0 !== od ? od : "Score").slice(0, 24) : "Score", 992, 174, 28, Yd, 304, "right"), Ed(202);
          const ld = (Rd - 232) / (Wd.r + vd + Kd),
            Cd = 208 + Wd.r * ld,
            Zd = Cd + vd * ld,
            kd = (Od, md, Wd, Fd) => {
              const Rd = Ud(Od);
              dd.fillStyle = Rd ? gd : pd, dd.globalAlpha = Rd ? .15 : Fd ? .035 : 0, dd.fillRect(24, Wd - ld / 2 + 1, 976, ld - 2), dd.globalAlpha = 1;
              const Xd = Rd ? gd : pd;
              wd(hd.format(md), Dd, Wd, 34, Xd, jd ? 80 : cd, jd ? "center" : "right"), wd(Hd ? String(Od.name).slice(0, 64) : "Player", ed, Wd, 34, Xd, Id);
              const Kd = hd.format(Od.value);
              wd(dd.measureText(Kd).width > 304 ? Od.value.toExponential(6) : Kd, 992, Wd, 34, Xd, 304, "right")
            };
          if (Bd)
            for (const [Wd, Fd] of xd.entries()) kd(Fd, Gd[Wd], 208 + (Wd + .5) * ld, Wd % 2 === 0);
          else {
            const dd = "error" === Nd.status,
              Od = dd ? "Couldn't load leaderboard" : "ready" === Nd.status ? "No scores yet" : "Loading leaderboard\u2026",
              md = dd ? "Trying again shortly" : "ready" === Nd.status ? "Be the first on the board!" : "Fetching the top players",
              Wd = (208 + Cd) / 2;
            wd(Od, 512, Wd - 28, 40, dd ? Fd.E.redUiText : pd, 960, "center"), wd(md, 512, Wd + 27, 30, Yd, 960, "center")
          }
          const fd = Cd + vd * ld / 2;
          if (null === Pd) Ed(fd);
          else {
            const Od = null === ud ? 0 : ud.tied - 1,
              md = `YOUR RANK #${hd.format(Pd)}${null===ud?"":` of ${hd.format(ud.total)}`}`;
            dd.font = "bold 36px 'Jetbrains Mono', monospace";
            const Wd = Math.max(20, Math.min(36, Math.floor(34560 / dd.measureText(md).width)));
            wd(md, 512, fd - (Od > 0 ? 15 : 0), Wd, gd, 960, "center"), Od > 0 && wd(`Tied with ${hd.format(Od)} other${1===Od?"":"s"}`, 512, fd + 24, 24, Yd, 960, "center")
          }
          if (null === qd) return;
          const Md = Zd + Kd * ld / 2;
          if (sd) wd(`You're in the top ${Wd.r}!`, 512, Md, 40, gd, 960, "center");
          else if (0 === Sd.length) wd("You're not on this board yet", 512, Md, 34, Yd, 960, "center");
          else
            for (const [Wd, Fd] of Sd.entries()) kd(Fd, nd[Wd], Zd + (Wd + .5) * ld, Wd % 2 === 0)
        }(dd, Qd, td, Xd.layoutHeight)
    }

    function yd(dd, Od) {
      return Array.isArray(dd) ? dd.slice(0, Od).filter((dd => dd && Number.isFinite(dd.rank) && Number.isFinite(dd.value))) : []
    }

    function bd(dd, Od) {
      const md = [];
      let Wd = !1;
      return dd.forEach(((Fd, Rd) => {
        if (null !== Od && Fd.value === Od.value) return void md.push(Od.rank);
        const Xd = Rd > 0 && Fd.value === dd[Rd - 1].value;
        Xd || (Wd = 0 === Rd && 1 !== Fd.rank), md.push(Xd && !Wd ? md[Rd - 1] : Fd.rank)
      })), md
    }
  },
  37736: (dd, Od, md) => {
    md.d(Od, {
      c: () => Fd,
      f: () => Rd
    });
    const Wd = 32;

    function Fd(dd) {
      return Array.from(dd).length
    }

    function Rd(dd) {
      const Od = [""];
      let md = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Fd = "";
      const Rd = () => {
        Od.push(""), md = 0, Fd = ""
      };
      for (const Xd of dd.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(Xd)) Rd();
        else if (/^\s+$/.test(Xd)) Fd += Xd;
      else if (Xd.length > 0) {
        const dd = Array.from(Xd);
        md > 0 && md + Fd.length + dd.length > Wd && Rd(), Od[Od.length - 1] += Fd, md += Fd.length, Fd = "";
        for (const Fd of dd) md >= Wd && Rd(), Od[Od.length - 1] += Fd, md++
      }
      return Od[Od.length - 1] += Fd, Od
    }
  },
  37755: (dd, Od, md) => {
    md.d(Od, {
      d: () => wd,
      e: () => Bd,
      i: () => Sd,
      m: () => sd
    });
    var Wd = md(37763),
      Fd = md(7874),
      Rd = md(7953),
      Xd = md(37765),
      Kd = md(37772),
      hd = md(37775),
      vd = md(8286),
      Qd = md(8407),
      td = md(37784),
      od = md(8587),
      Nd = md(7723),
      qd = md(8838),
      Hd = md(37787),
      yd = md(37789),
      bd = md(8874),
      Td = md(37796),
      pd = md(37801),
      Yd = md(405);
    const gd = {
        redTeam: Rd.e,
        blueTeam: yd.d,
        greenTeam: pd.f,
        yellowTeam: bd.c,
        cyanTeam: hd.e,
        whiteTeam: Nd.faPlus,
        pinkTeam: Qd.e,
        grayTeam: td.f,
        blackTeam: Hd.d,
        orangeTeam: Td.f,
        lilacTeam: Xd.h,
        purpleTeam: od.g,
        magentaTeam: Kd.h,
        brownTeam: Wd.g,
        limeTeam: Fd.faBolt,
        lightGrayTeam: vd.g,
        lightBlueTeam: qd.e
      },
      wd = Object.fromEntries(Object.values(gd).map((dd => [Ed(dd), dd])));

    function Ed(dd) {
      return `team-${dd.iconName}`
    }
    const Jd = new Map;
    for (const [ud, Vd] of Object.entries(gd)) {
      const dd = Ed(Vd),
        Od = Yd.E[ud];
      Od && Jd.set(Od.toLowerCase(), {
        icon: dd,
        mainRGB: "transparent",
        chatTag: [],
        nameTag: {
          iconRGB: "white",
          iconShadowRGB: "black"
        },
        visible: !0
      })
    }
    let Ud = !1;
    const xd = new Set;

    function Bd(dd) {
      if (dd !== Ud) {
        Ud = dd;
        for (const dd of xd) dd()
      }
    }

    function Sd(dd) {
      var Od;
      return "string" === typeof dd && Ud && null !== (Od = Jd.get(dd.toLowerCase())) && void 0 !== Od ? Od : null
    }

    function sd(dd) {
      return xd.add(dd), () => {
        xd.delete(dd)
      }
    }
  },
  37819: (dd, Od, md) => {
    md.d(Od, {
      A: () => td,
      E: () => Hd,
      F: () => yd,
      J: () => bd,
      K: () => pd,
      c: () => Fd,
      f: () => Nd,
      g: () => Xd,
      k: () => qd,
      o: () => Td,
      p: () => od,
      t: () => Yd,
      w: () => Rd,
      z: () => Qd
    });
    var Wd = md(2057);
    const Fd = [{
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

    function Rd(dd) {
      return (0, Wd.v)(dd.toWellFormed().replace(/\uFFFD+/g, "\ufffd"))
    }

    function Xd(dd, Od) {
      const {
        numLines: md,
        charsPerLine: Wd
      } = Fd[Od];
      return gd(dd, md, Wd, !1)
    }
    const Kd = 7 / 8,
      hd = .25,
      vd = 8;

    function Qd(dd, Od) {
      return {
        width: Math.min(dd, vd) - 2 * hd,
        height: Math.min(Od, vd) - 2 * hd
      }
    }

    function td(dd, Od, md) {
      const Wd = Qd(dd, Od),
        {
          numLines: Rd,
          charsPerLine: Xd
        } = Fd[md];
      return {
        numLines: Math.max(1, Math.floor(Rd / Kd * Wd.height)),
        charsPerLine: Math.max(1, Math.floor(Xd * Wd.width))
      }
    }

    function od(dd, Od, md, Wd) {
      const {
        numLines: Fd,
        charsPerLine: Rd
      } = td(md, Wd, Od);
      return gd(dd, Fd, Rd, !1)
    }
    const Nd = 32e3;

    function qd(dd) {
      return dd.slice(0, Nd)
    }
    const Hd = 512e3,
      yd = 64,
      bd = Hd;

    function Td(dd, Od) {
      const md = Math.max(0, bd - Od),
        Wd = Math.min(Hd, md);
      return dd.slice(0, Wd)
    }
    const pd = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      NQ: {
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

    function Yd(dd, Od) {
      const {
        numLines: md,
        charsPerLine: Wd
      } = pd[Od];
      return gd(dd, md, Wd, !1)
    }

    function gd(dd, Od, md, Wd, Fd) {
      (Fd || Wd) && (dd = dd.slice(0, null !== Fd && void 0 !== Fd ? Fd : Od * md));
      const Rd = dd.split("\n");
      if (Rd.length > Od && Rd.splice(Od, Rd.length - Od), !Wd)
        for (let Xd = 0; Xd < Rd.length; Xd++) {
          const dd = Rd[Xd];
          dd.length > md && (Rd[Xd] = dd.substring(0, md), Rd.length < Od && Rd.splice(Xd + 1, 0, dd.substring(md)))
        }
      return Rd.join("\n")
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);