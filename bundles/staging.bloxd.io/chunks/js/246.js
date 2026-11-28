export const id = 246;
export const ids = [246];
export const modules = {
  37512: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => gb
    });
    var eb = Mb(1301);

    function Hb(bb) {
      const wb = /(\d*\.?\d+)px/.exec(bb);
      return wb ? Number(wb[1]) : null
    }

    function pb(bb) {
      return bb.split(/[\s,]+/).pop()
    }
    let Vb = !1;
    const gb = {
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
      drawText: function(bb, wb, eb, gb, lb, Lb) {
        if (lb <= 0 || Lb <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: Ib,
          fontVariant: Ob,
          fontWeight: Ub,
          fontSize: tb,
          font: Cb
        } = this, Eb = [Ib, Ob, Ub, `${tb}px`, Cb].filter(Boolean).join(" "), Fb = [
          [Ub, `${tb}px`, pb(Cb)].filter(Boolean).join(" "), `${tb}px sans-serif`
        ], Bb = bb.font, sb = function(bb, wb, Mb) {
          for (const eb of wb) {
            bb.font = eb;
            const wb = Hb(bb.font),
              Vb = pb(eb);
            if (null !== wb && Math.abs(wb - Mb) <= .5 && bb.font.toLowerCase().includes(Vb.toLowerCase())) return eb
          }
          return null
        }(bb, [Eb, ...Fb], tb);
        sb !== Eb && function(bb, wb, eb) {
          Vb || (Vb = !0, Promise.resolve().then((() => Mb(1400))).then((Mb => {
            let {
              mE: Hb
            } = Mb;
            Hb(new Error("A canvas didn't take canvasTxt's font"), {
              font: bb,
              nI: wb,
              drawnWith: null !== eb && void 0 !== eb ? eb : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(Eb, Bb, sb);
        const mb = Hb(bb.font);
        if (null === sb && null !== mb && mb > 0) {
          const Mb = tb / mb;
          bb.save();
          try {
            return bb.scale(Mb, Mb), {
              height: this.drawLines(bb, wb, eb / Mb, gb / Mb, lb / Mb, Lb / Mb, mb).height * Mb
            }
          } finally {
            bb.restore()
          }
        }
        return this.drawLines(bb, wb, eb, gb, lb, Lb, tb)
      },
      drawLines: function(bb, wb, Mb, Hb, pb, Vb, gb) {
        const lb = Mb + pb,
          Lb = Hb + Vb;
        let Ib, Ob = Hb + Vb / 2 + gb / 2;
        "right" === this.align ? (Ib = lb, bb.textAlign = "right") : "left" === this.align ? (Ib = Mb, bb.textAlign = "left") : (Ib = Mb + pb / 2, bb.textAlign = "center");
        for (const eb of wb) {
          bb.measureText(eb).width >= pb && (wb = wb.replace(eb, ""))
        }
        wb = (0, eb.O)(wb);
        const Ub = [],
          tb = wb.split("\n"),
          Cb = this.justify ? bb.measureText("\u200a").width : 0;
        tb.forEach((wb => {
          let Mb = bb.measureText(wb).width;
          if (Mb <= pb) Ub.push(wb);
          else {
            let eb = wb;
            const Hb = pb;
            let Vb, gb, lb;
            for (Mb = bb.measureText(eb).width; Mb > Hb;) {
              for (Vb = 0, gb = 0, lb = ""; gb < Hb;) Vb++, lb = eb.substr(0, Vb), gb = bb.measureText(lb).width;
              Vb--, lb = lb.substr(0, Vb);
              const wb = Vb;
              if (" " !== eb.substr(Vb, 1)) {
                for (;
                  " " !== eb.substr(Vb, 1) && 0 !== Vb;) Vb--;
                0 === Vb && (Vb = wb), lb = eb.substr(0, Vb)
              }
              lb = this.justify ? this.justifyLine(bb, lb, Cb, "\u200a", pb) : lb, eb = eb.substr(Vb), Mb = bb.measureText(eb).width, Ub.push(lb)
            }
            Mb > 0 && Ub.push(eb)
          }
        }));
        const Eb = this.lineHeight ? this.lineHeight : this.getTextHeight(bb, wb),
          Fb = Eb * (Ub.length - 1),
          Bb = Fb / 2;
        let sb = Hb;
        "top" === this.vAlign ? Ob = Hb + gb : "bottom" === this.vAlign ? (Ob = Lb - Fb, sb = Lb) : (sb = Hb + Vb / 2, Ob -= Bb), Ub.forEach((wb => {
          wb = wb.trim(), bb.fillText(wb, Ib, Ob), Ob += Eb
        })), this.debug && (bb.lineWidth = 3, bb.strokeStyle = "#00909e", bb.strokeRect(Mb, Hb, pb, Vb), bb.lineWidth = 2, bb.strokeStyle = "#f6d743", bb.beginPath(), bb.moveTo(Ib, Hb), bb.lineTo(Ib, Lb), bb.stroke(), bb.strokeStyle = "#ff6363", bb.beginPath(), bb.moveTo(Mb, sb), bb.lineTo(lb, sb), bb.stroke());
        return {
          height: Fb + Eb
        }
      },
      getTextHeight: function(bb, wb) {
        const Mb = bb.textBaseline;
        bb.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: eb
        } = bb.measureText(wb);
        return bb.textBaseline = Mb, eb
      },
      justifyLine: function(bb, wb, Mb, eb, Hb) {
        const pb = wb.trim(),
          Vb = bb.measureText(pb).width,
          gb = pb.split(/\s+/).length - 1,
          lb = Math.floor((Hb - Vb) / Mb);
        if (gb <= 0 || lb <= 0) return pb;
        const Lb = Math.floor(lb / gb);
        let Ib = lb - gb * Lb,
          Ob = [];
        for (let Ub = 0; Ub < Lb; Ub++) Ob.push(eb);
        Ob = Ob.join("");
        return pb.replace(/\s+/g, (bb => {
          const wb = Ib > 0 ? Ob + eb : Ob;
          return Ib--, bb + wb
        }))
      }
    }
  },
  37523: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Eb,
      f: () => Cb,
      i: () => Ub,
      j: () => Ib,
      k: () => Ob
    });
    var eb = Mb(3059),
      Hb = Mb(382);
    const pb = 1024,
      Vb = 1536,
      gb = 2 * eb.j + 1,
      lb = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      Lb = 1.5;

    function Ib(bb, wb, Mb) {
      if ("string" !== typeof bb) return wb;
      try {
        const Mb = JSON.parse(bb);
        return Mb && "object" === typeof Mb ? Mb : wb
      } catch (eb) {
        return void 0 !== Mb && console.error(`Couldn't parse ${Mb}`, eb), wb
      }
    }

    function Ob(bb) {
      return Ib(bb, null, "a leaderboard's rows")
    }

    function Ub(bb, wb) {
      var Mb, eb;
      return null !== wb && void 0 !== wb ? wb : {
        status: null !== (Mb = bb.status) && void 0 !== Mb ? Mb : "loading",
        entries: null !== (eb = bb.entries) && void 0 !== eb ? eb : []
      }
    }

    function tb(bb, wb) {
      return "number" === typeof bb && Number.isFinite(bb) && bb > 0 ? bb : wb
    }

    function Cb(bb, wb) {
      const Mb = tb(bb.size, 1);
      let eb = tb(bb.width, tb(2.5 * Mb, 2.5)),
        Hb = tb(bb.height, tb(3.75 * Mb, 3.75));
      Number.isFinite(pb * Hb / eb) && Number.isFinite(Vb * eb / Hb) || (eb = 2.5, Hb = 3.75);
      const gb = Hb / eb,
        lb = Math.max(1, Math.min(pb, wb / gb));
      return {
        width: eb,
        height: Hb,
        layoutWidth: Math.max(pb, Vb / gb),
        layoutHeight: Math.max(Vb, pb * gb),
        pixelWidth: Math.round(lb),
        pixelHeight: Math.round(Math.max(1, Math.min(wb, lb * gb)))
      }
    }

    function Eb(bb, wb, Mb, Vb, Ib, Ob) {
      bb.setTransform(1, 0, 0, 1, 0, 0), bb.fillStyle = Hb.O.defaultNameTagBackground, bb.fillRect(0, 0, wb, Mb), bb.scale(wb / Vb.layoutWidth, Mb / Vb.layoutHeight), bb.translate((Vb.layoutWidth - pb) / 2, 0),
        function(bb, wb, Mb, pb) {
          var Vb, Ib, Ob, Ub;
          const {
            top: tb,
            around: Cb,
            showPlayerText: Eb,
            localPlayerDbId: sb
          } = Mb, {
            whiteUiText: mb,
            grayUiText: hb,
            yellowUiText: zb
          } = Hb.O;
          bb.textBaseline = "middle";
          const Xb = function(wb, Mb, eb, Hb, pb, Vb) {
              let gb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              bb.font = `bold ${Hb}px 'Jetbrains Mono', monospace`, bb.fillStyle = pb, bb.textAlign = gb;
              let lb = wb.replace(/[\r\n\t]/g, " ");
              if (bb.measureText(lb).width > Vb) {
                for (; lb.length > 0 && bb.measureText(`${lb}\u2026`).width > Vb;) lb = lb.slice(0, -1);
                lb += "\u2026"
              }
              bb.fillText(lb, Mb, eb)
            },
            xb = wb => {
              bb.fillStyle = mb, bb.globalAlpha = .15, bb.fillRect(24, wb, 976, 2), bb.globalAlpha = 1
            },
            jb = null === sb ? null : (0, Hb.xc)(sb),
            Kb = bb => null !== jb && bb.playerHash === jb,
            rb = Fb(tb.entries, eb.m),
            Rb = "ready" === tb.status && rb.length > 0,
            Db = null === Cb ? [] : Fb(Cb.entries, gb),
            cb = rb.some(Kb),
            Yb = null === Cb ? null : function(bb) {
              const wb = bb;
              if (!wb || !Number.isFinite(wb.rank) || !Number.isFinite(wb.tied) || !Number.isFinite(wb.total)) return null;
              return wb
            }(Cb.standing),
            Zb = Db.find(Kb),
            fb = rb.find(Kb),
            Ab = null === Yb || void 0 === Zb ? null : {
              value: Zb.value,
              rank: Yb.rank
            },
            Wb = Bb(rb, void 0 === fb || fb.value === (null === Ab || void 0 === Ab ? void 0 : Ab.value) ? Ab : null),
            Jb = Bb(Db, Ab),
            Sb = (bb, wb) => {
              const Mb = bb.findIndex(Kb);
              return Mb >= 0 ? wb[Mb] : null
            },
            Nb = null !== (Vb = null !== (Ib = null === Yb || void 0 === Yb ? void 0 : Yb.rank) && void 0 !== Ib ? Ib : Sb(Db, Jb)) && void 0 !== Vb ? Vb : Sb(rb, Wb);
          bb.font = "bold 34px 'Jetbrains Mono', monospace";
          const vb = [...Rb ? Wb : [], ...cb ? [] : Jb],
            Qb = Math.min(280, Math.max(0, ...vb.map((wb => bb.measureText(lb.format(wb)).width)))),
            Gb = Qb <= 80,
            qb = Gb ? 80 : 32 + Qb,
            ab = Gb ? 148 : qb + 28,
            ib = 660 - ab;
          Xb(`TOP ${eb.m}  /  ALL TIME`, 24, 52, 28, hb, 976), Xb(Eb ? String(null !== (Ob = wb.title) && void 0 !== Ob ? Ob : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, mb, 976), Xb("RANK", 32, 174, 28, hb, ab - 40), Xb("PLAYER", ab, 174, 28, hb, ib), Xb(Eb ? String(null !== (Ub = wb.scoreLabel) && void 0 !== Ub ? Ub : "Score").slice(0, 24) : "Score", 992, 174, 28, hb, 304, "right"), xb(202);
          const ub = (pb - 232) / (eb.m + Lb + gb),
            db = 208 + eb.m * ub,
            Pb = db + Lb * ub,
            nb = (wb, Mb, eb, Hb) => {
              const pb = Kb(wb);
              bb.fillStyle = pb ? zb : mb, bb.globalAlpha = pb ? .15 : Hb ? .035 : 0, bb.fillRect(24, eb - ub / 2 + 1, 976, ub - 2), bb.globalAlpha = 1;
              const Vb = pb ? zb : mb;
              Xb(lb.format(Mb), qb, eb, 34, Vb, Gb ? 80 : Qb, Gb ? "center" : "right"), Xb(Eb ? String(wb.name).slice(0, 64) : "Player", ab, eb, 34, Vb, ib);
              const gb = lb.format(wb.value);
              Xb(bb.measureText(gb).width > 304 ? wb.value.toExponential(6) : gb, 992, eb, 34, Vb, 304, "right")
            };
          if (Rb)
            for (const [eb, Hb] of rb.entries()) nb(Hb, Wb[eb], 208 + (eb + .5) * ub, eb % 2 === 0);
          else {
            const bb = "error" === tb.status,
              wb = bb ? "Couldn't load leaderboard" : "ready" === tb.status ? "No scores yet" : "Loading leaderboard\u2026",
              Mb = bb ? "Trying again shortly" : "ready" === tb.status ? "Be the first on the board!" : "Fetching the top players",
              eb = (208 + db) / 2;
            Xb(wb, 512, eb - 28, 40, bb ? Hb.O.redUiText : mb, 960, "center"), Xb(Mb, 512, eb + 27, 30, hb, 960, "center")
          }
          const yb = db + Lb * ub / 2;
          if (null === Nb) xb(yb);
          else {
            const wb = null === Yb ? 0 : Yb.tied - 1,
              Mb = `YOUR RANK #${lb.format(Nb)}${null===Yb?"":` of ${lb.format(Yb.total)}`}`;
            bb.font = "bold 36px 'Jetbrains Mono', monospace";
            const eb = Math.max(20, Math.min(36, Math.floor(34560 / bb.measureText(Mb).width)));
            Xb(Mb, 512, yb - (wb > 0 ? 15 : 0), eb, zb, 960, "center"), wb > 0 && Xb(`Tied with ${lb.format(wb)} other${1===wb?"":"s"}`, 512, yb + 24, 24, hb, 960, "center")
          }
          if (null === Cb) return;
          const ob = Pb + gb * ub / 2;
          if (cb) Xb(`You're in the top ${eb.m}!`, 512, ob, 40, zb, 960, "center");
          else if (0 === Db.length) Xb("You're not on this board yet", 512, ob, 34, hb, 960, "center");
          else
            for (const [eb, Hb] of Db.entries()) nb(Hb, Jb[eb], Pb + (eb + .5) * ub, eb % 2 === 0)
        }(bb, Ib, Ob, Vb.layoutHeight)
    }

    function Fb(bb, wb) {
      return Array.isArray(bb) ? bb.slice(0, wb).filter((bb => bb && Number.isFinite(bb.rank) && Number.isFinite(bb.value))) : []
    }

    function Bb(bb, wb) {
      const Mb = [];
      let eb = !1;
      return bb.forEach(((Hb, pb) => {
        if (null !== wb && Hb.value === wb.value) return void Mb.push(wb.rank);
        const Vb = pb > 0 && Hb.value === bb[pb - 1].value;
        Vb || (eb = 0 === pb && 1 !== Hb.rank), Mb.push(Vb && !eb ? Mb[pb - 1] : Hb.rank)
      })), Mb
    }
  },
  37457: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Hb,
      e: () => pb
    });
    const eb = 32;

    function Hb(bb) {
      return Array.from(bb).length
    }

    function pb(bb) {
      const wb = [""];
      let Mb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Hb = "";
      const pb = () => {
        wb.push(""), Mb = 0, Hb = ""
      };
      for (const Vb of bb.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(Vb)) pb();
        else if (/^\s+$/.test(Vb)) Hb += Vb;
      else if (Vb.length > 0) {
        const bb = Array.from(Vb);
        Mb > 0 && Mb + Hb.length + bb.length > eb && pb(), wb[wb.length - 1] += Hb, Mb += Hb.length, Hb = "";
        for (const Hb of bb) Mb >= eb && pb(), wb[wb.length - 1] += Hb, Mb++
      }
      return wb[wb.length - 1] += Hb, wb
    }
  },
  37471: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Xb,
      e: () => Rb,
      h: () => Db,
      j: () => cb
    });
    var eb = Mb(37475),
      Hb = Mb(8107),
      pb = Mb(8175),
      Vb = Mb(37478),
      gb = Mb(37480),
      lb = Mb(37486),
      Lb = Mb(8465),
      Ib = Mb(8583),
      Ob = Mb(37490),
      Ub = Mb(8793),
      tb = Mb(7982),
      Cb = Mb(9065),
      Eb = Mb(37496),
      Fb = Mb(37503),
      Bb = Mb(9091),
      sb = Mb(37507),
      mb = Mb(37509),
      hb = Mb(382);
    const zb = {
        redTeam: pb.c,
        blueTeam: Fb.h,
        greenTeam: mb.e,
        yellowTeam: Bb.d,
        cyanTeam: lb.g,
        whiteTeam: tb.faPlus,
        pinkTeam: Ib.g,
        grayTeam: Ob.d,
        blackTeam: Eb.e,
        orangeTeam: sb.h,
        lilacTeam: Vb.d,
        purpleTeam: Ub.g,
        magentaTeam: gb.f,
        brownTeam: eb.f,
        limeTeam: Hb.faBolt,
        lightGrayTeam: Lb.e,
        lightBlueTeam: Cb.d
      },
      Xb = Object.fromEntries(Object.values(zb).map((bb => [xb(bb), bb])));

    function xb(bb) {
      return `team-${bb.iconName}`
    }
    const jb = new Map;
    for (const [Yb, Zb] of Object.entries(zb)) {
      const bb = xb(Zb),
        wb = hb.O[Yb];
      wb && jb.set(wb.toLowerCase(), {
        icon: bb,
        mainRGB: "transparent",
        chatTag: [],
        nameTag: {
          iconRGB: "white",
          iconShadowRGB: "black"
        },
        visible: !0
      })
    }
    let Kb = !1;
    const rb = new Set;

    function Rb(bb) {
      if (bb !== Kb) {
        Kb = bb;
        for (const bb of rb) bb()
      }
    }

    function Db(bb) {
      var wb;
      return "string" === typeof bb && Kb && null !== (wb = jb.get(bb.toLowerCase())) && void 0 !== wb ? wb : null
    }

    function cb(bb) {
      return rb.add(bb), () => {
        rb.delete(bb)
      }
    }
  },
  37519: (bb, wb, Mb) => {
    Mb.d(wb, {
      A: () => Ib,
      E: () => Ob,
      F: () => Eb,
      J: () => Fb,
      N: () => Bb,
      P: () => mb,
      e: () => Hb,
      f: () => tb,
      j: () => Vb,
      n: () => Cb,
      q: () => sb,
      u: () => Ub,
      w: () => hb,
      z: () => pb
    });
    var eb = Mb(2107);
    const Hb = [{
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

    function pb(bb) {
      return (0, eb.w)(bb.toWellFormed().replace(/\uFFFD+/g, "\ufffd"))
    }

    function Vb(bb, wb) {
      const {
        numLines: Mb,
        charsPerLine: eb
      } = Hb[wb];
      return zb(bb, Mb, eb, !1)
    }
    const gb = 7 / 8,
      lb = .25,
      Lb = 8;

    function Ib(bb, wb) {
      return {
        width: Math.min(bb, Lb) - 2 * lb,
        height: Math.min(wb, Lb) - 2 * lb
      }
    }

    function Ob(bb, wb, Mb) {
      const eb = Ib(bb, wb),
        {
          numLines: pb,
          charsPerLine: Vb
        } = Hb[Mb];
      return {
        numLines: Math.max(1, Math.floor(pb / gb * eb.height)),
        charsPerLine: Math.max(1, Math.floor(Vb * eb.width))
      }
    }

    function Ub(bb, wb, Mb, eb) {
      const {
        numLines: Hb,
        charsPerLine: pb
      } = Ob(Mb, eb, wb);
      return zb(bb, Hb, pb, !1)
    }
    const tb = 32e3;

    function Cb(bb) {
      return bb.slice(0, tb)
    }
    const Eb = 512e3,
      Fb = 64,
      Bb = Eb;

    function sb(bb, wb) {
      const Mb = Math.max(0, Bb - wb),
        eb = Math.min(Eb, Mb);
      return bb.slice(0, eb)
    }
    const mb = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      UI: {
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

    function hb(bb, wb) {
      const {
        numLines: Mb,
        charsPerLine: eb
      } = mb[wb];
      return zb(bb, Mb, eb, !1)
    }

    function zb(bb, wb, Mb, eb, Hb) {
      (Hb || eb) && (bb = bb.slice(0, null !== Hb && void 0 !== Hb ? Hb : wb * Mb));
      const pb = bb.split("\n");
      if (pb.length > wb && pb.splice(wb, pb.length - wb), !eb)
        for (let Vb = 0; Vb < pb.length; Vb++) {
          const bb = pb[Vb];
          bb.length > Mb && (pb[Vb] = bb.substring(0, Mb), pb.length < wb && pb.splice(Vb + 1, 0, bb.substring(Mb)))
        }
      return pb.join("\n")
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);