export const id = 246;
export const ids = [246];
export const modules = {
  37699: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Ir
    });
    var Zr = Qr(1279);

    function Wr(rr) {
      const Sr = /(\d*\.?\d+)px/.exec(rr);
      return Sr ? Number(Sr[1]) : null
    }

    function ar(rr) {
      return rr.split(/[\s,]+/).pop()
    }
    let jr = !1;
    const Ir = {
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
      drawText: function(rr, Sr, Zr, Ir, fr, Er) {
        if (fr <= 0 || Er <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: pr,
          fontVariant: xr,
          fontWeight: mr,
          fontSize: Nr,
          font: Ur
        } = this, tr = [pr, xr, mr, `${Nr}px`, Ur].filter(Boolean).join(" "), hr = [
          [mr, `${Nr}px`, ar(Ur)].filter(Boolean).join(" "), `${Nr}px sans-serif`
        ], zr = rr.font, Yr = function(rr, Sr, Qr) {
          for (const Zr of Sr) {
            rr.font = Zr;
            const Sr = Wr(rr.font),
              jr = ar(Zr);
            if (null !== Sr && Math.abs(Sr - Qr) <= .5 && rr.font.toLowerCase().includes(jr.toLowerCase())) return Zr
          }
          return null
        }(rr, [tr, ...hr], Nr);
        Yr !== tr && function(rr, Sr, Zr) {
          jr || (jr = !0, Promise.resolve().then((() => Qr(1371))).then((Qr => {
            let {
              Pt: Wr
            } = Qr;
            Wr(new Error("A canvas didn't take canvasTxt's font"), {
              font: rr,
              sp: Sr,
              drawnWith: null !== Zr && void 0 !== Zr ? Zr : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(tr, zr, Yr);
        const nr = Wr(rr.font);
        if (null === Yr && null !== nr && nr > 0) {
          const Qr = Nr / nr;
          rr.save();
          try {
            return rr.scale(Qr, Qr), {
              height: this.drawLines(rr, Sr, Zr / Qr, Ir / Qr, fr / Qr, Er / Qr, nr).height * Qr
            }
          } finally {
            rr.restore()
          }
        }
        return this.drawLines(rr, Sr, Zr, Ir, fr, Er, Nr)
      },
      drawLines: function(rr, Sr, Qr, Wr, ar, jr, Ir) {
        const fr = Qr + ar,
          Er = Wr + jr;
        let pr, xr = Wr + jr / 2 + Ir / 2;
        "right" === this.align ? (pr = fr, rr.textAlign = "right") : "left" === this.align ? (pr = Qr, rr.textAlign = "left") : (pr = Qr + ar / 2, rr.textAlign = "center");
        for (const Zr of Sr) {
          rr.measureText(Zr).width >= ar && (Sr = Sr.replace(Zr, ""))
        }
        Sr = (0, Zr.W)(Sr);
        const mr = [],
          Nr = Sr.split("\n"),
          Ur = this.justify ? rr.measureText("\u200a").width : 0;
        Nr.forEach((Sr => {
          let Qr = rr.measureText(Sr).width;
          if (Qr <= ar) mr.push(Sr);
          else {
            let Zr = Sr;
            const Wr = ar;
            let jr, Ir, fr;
            for (Qr = rr.measureText(Zr).width; Qr > Wr;) {
              for (jr = 0, Ir = 0, fr = ""; Ir < Wr;) jr++, fr = Zr.substr(0, jr), Ir = rr.measureText(fr).width;
              jr--, fr = fr.substr(0, jr);
              const Sr = jr;
              if (" " !== Zr.substr(jr, 1)) {
                for (;
                  " " !== Zr.substr(jr, 1) && 0 !== jr;) jr--;
                0 === jr && (jr = Sr), fr = Zr.substr(0, jr)
              }
              fr = this.justify ? this.justifyLine(rr, fr, Ur, "\u200a", ar) : fr, Zr = Zr.substr(jr), Qr = rr.measureText(Zr).width, mr.push(fr)
            }
            Qr > 0 && mr.push(Zr)
          }
        }));
        const tr = this.lineHeight ? this.lineHeight : this.getTextHeight(rr, Sr),
          hr = tr * (mr.length - 1),
          zr = hr / 2;
        let Yr = Wr;
        "top" === this.vAlign ? xr = Wr + Ir : "bottom" === this.vAlign ? (xr = Er - hr, Yr = Er) : (Yr = Wr + jr / 2, xr -= zr), mr.forEach((Sr => {
          Sr = Sr.trim(), rr.fillText(Sr, pr, xr), xr += tr
        })), this.debug && (rr.lineWidth = 3, rr.strokeStyle = "#00909e", rr.strokeRect(Qr, Wr, ar, jr), rr.lineWidth = 2, rr.strokeStyle = "#f6d743", rr.beginPath(), rr.moveTo(pr, Wr), rr.lineTo(pr, Er), rr.stroke(), rr.strokeStyle = "#ff6363", rr.beginPath(), rr.moveTo(Qr, Yr), rr.lineTo(fr, Yr), rr.stroke());
        return {
          height: hr + tr
        }
      },
      getTextHeight: function(rr, Sr) {
        const Qr = rr.textBaseline;
        rr.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: Zr
        } = rr.measureText(Sr);
        return rr.textBaseline = Qr, Zr
      },
      justifyLine: function(rr, Sr, Qr, Zr, Wr) {
        const ar = Sr.trim(),
          jr = rr.measureText(ar).width,
          Ir = ar.split(/\s+/).length - 1,
          fr = Math.floor((Wr - jr) / Qr);
        if (Ir <= 0 || fr <= 0) return ar;
        const Er = Math.floor(fr / Ir);
        let pr = fr - Ir * Er,
          xr = [];
        for (let mr = 0; mr < Er; mr++) xr.push(Zr);
        xr = xr.join("");
        return ar.replace(/\s+/g, (rr => {
          const Sr = pr > 0 ? xr + Zr : xr;
          return pr--, rr + Sr
        }))
      }
    }
  },
  37710: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => tr,
      f: () => Ur,
      h: () => mr,
      i: () => pr,
      j: () => xr
    });
    var Zr = Qr(2984),
      Wr = Qr(379);
    const ar = 1024,
      jr = 1536,
      Ir = 2 * Zr.i + 1,
      fr = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      Er = 1.5;

    function pr(rr, Sr, Qr) {
      if ("string" !== typeof rr) return Sr;
      try {
        const Qr = JSON.parse(rr);
        return Qr && "object" === typeof Qr ? Qr : Sr
      } catch (Zr) {
        return void 0 !== Qr && console.error(`Couldn't parse ${Qr}`, Zr), Sr
      }
    }

    function xr(rr) {
      return pr(rr, null, "a leaderboard's rows")
    }

    function mr(rr, Sr) {
      var Qr, Zr;
      return null !== Sr && void 0 !== Sr ? Sr : {
        status: null !== (Qr = rr.status) && void 0 !== Qr ? Qr : "loading",
        entries: null !== (Zr = rr.entries) && void 0 !== Zr ? Zr : []
      }
    }

    function Nr(rr, Sr) {
      return "number" === typeof rr && Number.isFinite(rr) && rr > 0 ? rr : Sr
    }

    function Ur(rr, Sr) {
      const Qr = Nr(rr.size, 1);
      let Zr = Nr(rr.width, Nr(2.5 * Qr, 2.5)),
        Wr = Nr(rr.height, Nr(3.75 * Qr, 3.75));
      Number.isFinite(ar * Wr / Zr) && Number.isFinite(jr * Zr / Wr) || (Zr = 2.5, Wr = 3.75);
      const Ir = Wr / Zr,
        fr = Math.max(1, Math.min(ar, Sr / Ir));
      return {
        width: Zr,
        height: Wr,
        layoutWidth: Math.max(ar, jr / Ir),
        layoutHeight: Math.max(jr, ar * Ir),
        pixelWidth: Math.round(fr),
        pixelHeight: Math.round(Math.max(1, Math.min(Sr, fr * Ir)))
      }
    }

    function tr(rr, Sr, Qr, jr, pr, xr) {
      rr.setTransform(1, 0, 0, 1, 0, 0), rr.fillStyle = Wr.K.defaultNameTagBackground, rr.fillRect(0, 0, Sr, Qr), rr.scale(Sr / jr.layoutWidth, Qr / jr.layoutHeight), rr.translate((jr.layoutWidth - ar) / 2, 0),
        function(rr, Sr, Qr, ar) {
          var jr, pr, xr, mr;
          const {
            top: Nr,
            around: Ur,
            showPlayerText: tr,
            localPlayerDbId: Yr
          } = Qr, {
            whiteUiText: nr,
            grayUiText: er,
            yellowUiText: Kr
          } = Wr.K;
          rr.textBaseline = "middle";
          const yr = function(Sr, Qr, Zr, Wr, ar, jr) {
              let Ir = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              rr.font = `bold ${Wr}px 'Jetbrains Mono', monospace`, rr.fillStyle = ar, rr.textAlign = Ir;
              let fr = Sr.replace(/[\r\n\t]/g, " ");
              if (rr.measureText(fr).width > jr) {
                for (; fr.length > 0 && rr.measureText(`${fr}\u2026`).width > jr;) fr = fr.slice(0, -1);
                fr += "\u2026"
              }
              rr.fillText(fr, Qr, Zr)
            },
            Br = Sr => {
              rr.fillStyle = nr, rr.globalAlpha = .15, rr.fillRect(24, Sr, 976, 2), rr.globalAlpha = 1
            },
            Tr = null === Yr ? null : (0, Wr.kc)(Yr),
            vr = rr => null !== Tr && rr.playerHash === Tr,
            Or = hr(Nr.entries, Zr.l),
            Lr = "ready" === Nr.status && Or.length > 0,
            lr = null === Ur ? [] : hr(Ur.entries, Ir),
            Xr = Or.some(vr),
            Pr = null === Ur ? null : function(rr) {
              const Sr = rr;
              if (!Sr || !Number.isFinite(Sr.rank) || !Number.isFinite(Sr.tied) || !Number.isFinite(Sr.total)) return null;
              return Sr
            }(Ur.standing),
            Hr = lr.find(vr),
            qr = Or.find(vr),
            Rr = null === Pr || void 0 === Hr ? null : {
              value: Hr.value,
              rank: Pr.rank
            },
            gr = zr(Or, void 0 === qr || qr.value === (null === Rr || void 0 === Rr ? void 0 : Rr.value) ? Rr : null),
            Cr = zr(lr, Rr),
            Mr = (rr, Sr) => {
              const Qr = rr.findIndex(vr);
              return Qr >= 0 ? Sr[Qr] : null
            },
            Gr = null !== (jr = null !== (pr = null === Pr || void 0 === Pr ? void 0 : Pr.rank) && void 0 !== pr ? pr : Mr(lr, Cr)) && void 0 !== jr ? jr : Mr(Or, gr);
          rr.font = "bold 34px 'Jetbrains Mono', monospace";
          const kr = [...Lr ? gr : [], ...Xr ? [] : Cr],
            Ar = Math.min(280, Math.max(0, ...kr.map((Sr => rr.measureText(fr.format(Sr)).width)))),
            Vr = Ar <= 80,
            ir = Vr ? 80 : 32 + Ar,
            wr = Vr ? 148 : ir + 28,
            cr = 660 - wr;
          yr(`TOP ${Zr.l}  /  ALL TIME`, 24, 52, 28, er, 976), yr(tr ? String(null !== (xr = Sr.title) && void 0 !== xr ? xr : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, nr, 976), yr("RANK", 32, 174, 28, er, wr - 40), yr("PLAYER", wr, 174, 28, er, cr), yr(tr ? String(null !== (mr = Sr.scoreLabel) && void 0 !== mr ? mr : "Score").slice(0, 24) : "Score", 992, 174, 28, er, 304, "right"), Br(202);
          const Fr = (ar - 232) / (Zr.l + Er + Ir),
            or = 208 + Zr.l * Fr,
            br = or + Er * Fr,
            Jr = (Sr, Qr, Zr, Wr) => {
              const ar = vr(Sr);
              rr.fillStyle = ar ? Kr : nr, rr.globalAlpha = ar ? .15 : Wr ? .035 : 0, rr.fillRect(24, Zr - Fr / 2 + 1, 976, Fr - 2), rr.globalAlpha = 1;
              const jr = ar ? Kr : nr;
              yr(fr.format(Qr), ir, Zr, 34, jr, Vr ? 80 : Ar, Vr ? "center" : "right"), yr(tr ? String(Sr.name).slice(0, 64) : "Player", wr, Zr, 34, jr, cr);
              const Ir = fr.format(Sr.value);
              yr(rr.measureText(Ir).width > 304 ? Sr.value.toExponential(6) : Ir, 992, Zr, 34, jr, 304, "right")
            };
          if (Lr)
            for (const [Zr, Wr] of Or.entries()) Jr(Wr, gr[Zr], 208 + (Zr + .5) * Fr, Zr % 2 === 0);
          else {
            const rr = "error" === Nr.status,
              Sr = rr ? "Couldn't load leaderboard" : "ready" === Nr.status ? "No scores yet" : "Loading leaderboard\u2026",
              Qr = rr ? "Trying again shortly" : "ready" === Nr.status ? "Be the first on the board!" : "Fetching the top players",
              Zr = (208 + or) / 2;
            yr(Sr, 512, Zr - 28, 40, rr ? Wr.K.redUiText : nr, 960, "center"), yr(Qr, 512, Zr + 27, 30, er, 960, "center")
          }
          const Dr = or + Er * Fr / 2;
          if (null === Gr) Br(Dr);
          else {
            const Sr = null === Pr ? 0 : Pr.tied - 1,
              Qr = `YOUR RANK #${fr.format(Gr)}${null===Pr?"":` of ${fr.format(Pr.total)}`}`;
            rr.font = "bold 36px 'Jetbrains Mono', monospace";
            const Zr = Math.max(20, Math.min(36, Math.floor(34560 / rr.measureText(Qr).width)));
            yr(Qr, 512, Dr - (Sr > 0 ? 15 : 0), Zr, Kr, 960, "center"), Sr > 0 && yr(`Tied with ${fr.format(Sr)} other${1===Sr?"":"s"}`, 512, Dr + 24, 24, er, 960, "center")
          }
          if (null === Ur) return;
          const dr = br + Ir * Fr / 2;
          if (Xr) yr(`You're in the top ${Zr.l}!`, 512, dr, 40, Kr, 960, "center");
          else if (0 === lr.length) yr("You're not on this board yet", 512, dr, 34, er, 960, "center");
          else
            for (const [Zr, Wr] of lr.entries()) Jr(Wr, Cr[Zr], br + (Zr + .5) * Fr, Zr % 2 === 0)
        }(rr, pr, xr, jr.layoutHeight)
    }

    function hr(rr, Sr) {
      return Array.isArray(rr) ? rr.slice(0, Sr).filter((rr => rr && Number.isFinite(rr.rank) && Number.isFinite(rr.value))) : []
    }

    function zr(rr, Sr) {
      const Qr = [];
      let Zr = !1;
      return rr.forEach(((Wr, ar) => {
        if (null !== Sr && Wr.value === Sr.value) return void Qr.push(Sr.rank);
        const jr = ar > 0 && Wr.value === rr[ar - 1].value;
        jr || (Zr = 0 === ar && 1 !== Wr.rank), Qr.push(jr && !Zr ? Qr[ar - 1] : Wr.rank)
      })), Qr
    }
  },
  37622: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Wr,
      f: () => ar
    });
    const Zr = 32;

    function Wr(rr) {
      return Array.from(rr).length
    }

    function ar(rr) {
      const Sr = [""];
      let Qr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Wr = "";
      const ar = () => {
        Sr.push(""), Qr = 0, Wr = ""
      };
      for (const jr of rr.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(jr)) ar();
        else if (/^\s+$/.test(jr)) Wr += jr;
      else if (jr.length > 0) {
        const rr = Array.from(jr);
        Qr > 0 && Qr + Wr.length + rr.length > Zr && ar(), Sr[Sr.length - 1] += Wr, Qr += Wr.length, Wr = "";
        for (const Wr of rr) Qr >= Zr && ar(), Sr[Sr.length - 1] += Wr, Qr++
      }
      return Sr[Sr.length - 1] += Wr, Sr
    }
  },
  37642: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => yr,
      g: () => Lr,
      i: () => lr,
      m: () => Xr
    });
    var Zr = Qr(37644),
      Wr = Qr(7878),
      ar = Qr(7947),
      jr = Qr(37653),
      Ir = Qr(37661),
      fr = Qr(37667),
      Er = Qr(8285),
      pr = Qr(8418),
      xr = Qr(37671),
      mr = Qr(8637),
      Nr = Qr(7733),
      Ur = Qr(8913),
      tr = Qr(37679),
      hr = Qr(37684),
      zr = Qr(8942),
      Yr = Qr(37689),
      nr = Qr(37697),
      er = Qr(379);
    const Kr = {
        redTeam: ar.h,
        blueTeam: hr.c,
        greenTeam: nr.f,
        yellowTeam: zr.g,
        cyanTeam: fr.e,
        whiteTeam: Nr.faPlus,
        pinkTeam: pr.d,
        grayTeam: xr.c,
        blackTeam: tr.d,
        orangeTeam: Yr.g,
        lilacTeam: jr.f,
        purpleTeam: mr.c,
        magentaTeam: Ir.f,
        brownTeam: Zr.d,
        limeTeam: Wr.faBolt,
        lightGrayTeam: Er.f,
        lightBlueTeam: Ur.g
      },
      yr = Object.fromEntries(Object.values(Kr).map((rr => [Br(rr), rr])));

    function Br(rr) {
      return `team-${rr.iconName}`
    }
    const Tr = new Map;
    for (const [Pr, Hr] of Object.entries(Kr)) {
      const rr = Br(Hr),
        Sr = er.K[Pr];
      Sr && Tr.set(Sr.toLowerCase(), {
        icon: rr,
        mainRGB: "transparent",
        chatTag: [],
        nameTag: {
          iconRGB: "white",
          iconShadowRGB: "black"
        },
        visible: !0
      })
    }
    let vr = !1;
    const Or = new Set;

    function Lr(rr) {
      if (rr !== vr) {
        vr = rr;
        for (const rr of Or) rr()
      }
    }

    function lr(rr) {
      var Sr;
      return "string" === typeof rr && vr && null !== (Sr = Tr.get(rr.toLowerCase())) && void 0 !== Sr ? Sr : null
    }

    function Xr(rr) {
      return Or.add(rr), () => {
        Or.delete(rr)
      }
    }
  },
  37701: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      B: () => zr,
      D: () => nr,
      c: () => Wr,
      e: () => Nr,
      g: () => jr,
      h: () => Ur,
      k: () => Yr,
      n: () => mr,
      r: () => er,
      s: () => ar,
      t: () => pr,
      u: () => xr,
      x: () => tr,
      z: () => hr
    });
    var Zr = Qr(2049);
    const Wr = [{
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

    function ar(rr) {
      return (0, Zr.r)(rr.toWellFormed().replace(/\uFFFD+/g, "\ufffd"))
    }

    function jr(rr, Sr) {
      const {
        numLines: Qr,
        charsPerLine: Zr
      } = Wr[Sr];
      return Kr(rr, Qr, Zr, !1)
    }
    const Ir = 7 / 8,
      fr = .25,
      Er = 8;

    function pr(rr, Sr) {
      return {
        width: Math.min(rr, Er) - 2 * fr,
        height: Math.min(Sr, Er) - 2 * fr
      }
    }

    function xr(rr, Sr, Qr) {
      const Zr = pr(rr, Sr),
        {
          numLines: ar,
          charsPerLine: jr
        } = Wr[Qr];
      return {
        numLines: Math.max(1, Math.floor(ar / Ir * Zr.height)),
        charsPerLine: Math.max(1, Math.floor(jr * Zr.width))
      }
    }

    function mr(rr, Sr, Qr, Zr) {
      const {
        numLines: Wr,
        charsPerLine: ar
      } = xr(Qr, Zr, Sr);
      return Kr(rr, Wr, ar, !1)
    }
    const Nr = 32e3;

    function Ur(rr) {
      return rr.slice(0, Nr)
    }
    const tr = 512e3,
      hr = 64,
      zr = tr;

    function Yr(rr, Sr) {
      const Qr = Math.max(0, zr - Sr),
        Zr = Math.min(tr, Qr);
      return rr.slice(0, Zr)
    }
    const nr = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      Up: {
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

    function er(rr, Sr) {
      const {
        numLines: Qr,
        charsPerLine: Zr
      } = nr[Sr];
      return Kr(rr, Qr, Zr, !1)
    }

    function Kr(rr, Sr, Qr, Zr, Wr) {
      (Wr || Zr) && (rr = rr.slice(0, null !== Wr && void 0 !== Wr ? Wr : Sr * Qr));
      const ar = rr.split("\n");
      if (ar.length > Sr && ar.splice(Sr, ar.length - Sr), !Zr)
        for (let jr = 0; jr < ar.length; jr++) {
          const rr = ar[jr];
          rr.length > Qr && (ar[jr] = rr.substring(0, Qr), ar.length < Sr && ar.splice(jr + 1, 0, rr.substring(Qr)))
        }
      return ar.join("\n")
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);