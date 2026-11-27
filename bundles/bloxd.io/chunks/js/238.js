export const id = 238;
export const ids = [238];
export const modules = {
  37066: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ue
    });
    var ye = He(1169);

    function be(ee) {
      const ie = /(\d*\.?\d+)px/.exec(ee);
      return ie ? Number(ie[1]) : null
    }

    function Me(ee) {
      return ee.split(/[\s,]+/).pop()
    }
    let Ke = !1;
    const Ue = {
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
      drawText: function(ee, ie, ye, Ue, Fe, Je) {
        if (Fe <= 0 || Je <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: oe,
          fontVariant: Re,
          fontWeight: ke,
          fontSize: qe,
          font: fe
        } = this, Te = [oe, Re, ke, `${qe}px`, fe].filter(Boolean).join(" "), pe = [
          [ke, `${qe}px`, Me(fe)].filter(Boolean).join(" "), `${qe}px sans-serif`
        ], Xe = ee.font, ze = function(ee, ie, He) {
          for (const ye of ie) {
            ee.font = ye;
            const ie = be(ee.font),
              Ke = Me(ye);
            if (null !== ie && Math.abs(ie - He) <= .5 && ee.font.toLowerCase().includes(Ke.toLowerCase())) return ye
          }
          return null
        }(ee, [Te, ...pe], qe);
        ze !== Te && function(ee, ie, ye) {
          Ke || (Ke = !0, Promise.resolve().then((() => He(1268))).then((He => {
            let {
              vT: be
            } = He;
            be(new Error("A canvas didn't take canvasTxt's font"), {
              font: ee,
              KR: ie,
              drawnWith: null !== ye && void 0 !== ye ? ye : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(Te, Xe, ze);
        const Be = be(ee.font);
        if (null === ze && null !== Be && Be > 0) {
          const He = qe / Be;
          ee.save();
          try {
            return ee.scale(He, He), {
              height: this.drawLines(ee, ie, ye / He, Ue / He, Fe / He, Je / He, Be).height * He
            }
          } finally {
            ee.restore()
          }
        }
        return this.drawLines(ee, ie, ye, Ue, Fe, Je, qe)
      },
      drawLines: function(ee, ie, He, be, Me, Ke, Ue) {
        const Fe = He + Me,
          Je = be + Ke;
        let oe, Re = be + Ke / 2 + Ue / 2;
        "right" === this.align ? (oe = Fe, ee.textAlign = "right") : "left" === this.align ? (oe = He, ee.textAlign = "left") : (oe = He + Me / 2, ee.textAlign = "center");
        for (const ye of ie) {
          ee.measureText(ye).width >= Me && (ie = ie.replace(ye, ""))
        }
        ie = (0, ye.R)(ie);
        const ke = [],
          qe = ie.split("\n"),
          fe = this.justify ? ee.measureText("\u200a").width : 0;
        qe.forEach((ie => {
          let He = ee.measureText(ie).width;
          if (He <= Me) ke.push(ie);
          else {
            let ye = ie;
            const be = Me;
            let Ke, Ue, Fe;
            for (He = ee.measureText(ye).width; He > be;) {
              for (Ke = 0, Ue = 0, Fe = ""; Ue < be;) Ke++, Fe = ye.substr(0, Ke), Ue = ee.measureText(Fe).width;
              Ke--, Fe = Fe.substr(0, Ke);
              const ie = Ke;
              if (" " !== ye.substr(Ke, 1)) {
                for (;
                  " " !== ye.substr(Ke, 1) && 0 !== Ke;) Ke--;
                0 === Ke && (Ke = ie), Fe = ye.substr(0, Ke)
              }
              Fe = this.justify ? this.justifyLine(ee, Fe, fe, "\u200a", Me) : Fe, ye = ye.substr(Ke), He = ee.measureText(ye).width, ke.push(Fe)
            }
            He > 0 && ke.push(ye)
          }
        }));
        const Te = this.lineHeight ? this.lineHeight : this.getTextHeight(ee, ie),
          pe = Te * (ke.length - 1),
          Xe = pe / 2;
        let ze = be;
        "top" === this.vAlign ? Re = be + Ue : "bottom" === this.vAlign ? (Re = Je - pe, ze = Je) : (ze = be + Ke / 2, Re -= Xe), ke.forEach((ie => {
          ie = ie.trim(), ee.fillText(ie, oe, Re), Re += Te
        })), this.debug && (ee.lineWidth = 3, ee.strokeStyle = "#00909e", ee.strokeRect(He, be, Me, Ke), ee.lineWidth = 2, ee.strokeStyle = "#f6d743", ee.beginPath(), ee.moveTo(oe, be), ee.lineTo(oe, Je), ee.stroke(), ee.strokeStyle = "#ff6363", ee.beginPath(), ee.moveTo(He, ze), ee.lineTo(Fe, ze), ee.stroke());
        return {
          height: pe + Te
        }
      },
      getTextHeight: function(ee, ie) {
        const He = ee.textBaseline;
        ee.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: ye
        } = ee.measureText(ie);
        return ee.textBaseline = He, ye
      },
      justifyLine: function(ee, ie, He, ye, be) {
        const Me = ie.trim(),
          Ke = ee.measureText(Me).width,
          Ue = Me.split(/\s+/).length - 1,
          Fe = Math.floor((be - Ke) / He);
        if (Ue <= 0 || Fe <= 0) return Me;
        const Je = Math.floor(Fe / Ue);
        let oe = Fe - Ue * Je,
          Re = [];
        for (let ke = 0; ke < Je; ke++) Re.push(ye);
        Re = Re.join("");
        return Me.replace(/\s+/g, (ee => {
          const ie = oe > 0 ? Re + ye : Re;
          return oe--, ee + ie
        }))
      }
    }
  },
  37076: (ee, ie, He) => {
    He.d(ie, {
      d: () => Te,
      f: () => fe,
      g: () => ke,
      k: () => oe,
      m: () => Re
    });
    var ye = He(4598),
      be = He(347);
    const Me = 1024,
      Ke = 1536,
      Ue = 2 * ye.m + 1,
      Fe = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      Je = 1.5;

    function oe(ee, ie, He) {
      if ("string" !== typeof ee) return ie;
      try {
        const He = JSON.parse(ee);
        return He && "object" === typeof He ? He : ie
      } catch (ye) {
        return void 0 !== He && console.error(`Couldn't parse ${He}`, ye), ie
      }
    }

    function Re(ee) {
      return oe(ee, null, "a leaderboard's rows")
    }

    function ke(ee, ie) {
      var He, ye;
      return null !== ie && void 0 !== ie ? ie : {
        status: null !== (He = ee.status) && void 0 !== He ? He : "loading",
        entries: null !== (ye = ee.entries) && void 0 !== ye ? ye : []
      }
    }

    function qe(ee, ie) {
      return "number" === typeof ee && Number.isFinite(ee) && ee > 0 ? ee : ie
    }

    function fe(ee, ie) {
      const He = qe(ee.size, 1);
      let ye = qe(ee.width, qe(2.5 * He, 2.5)),
        be = qe(ee.height, qe(3.75 * He, 3.75));
      Number.isFinite(Me * be / ye) && Number.isFinite(Ke * ye / be) || (ye = 2.5, be = 3.75);
      const Ue = be / ye,
        Fe = Math.max(1, Math.min(Me, ie / Ue));
      return {
        width: ye,
        height: be,
        layoutWidth: Math.max(Me, Ke / Ue),
        layoutHeight: Math.max(Ke, Me * Ue),
        pixelWidth: Math.round(Fe),
        pixelHeight: Math.round(Math.max(1, Math.min(ie, Fe * Ue)))
      }
    }

    function Te(ee, ie, He, Ke, oe, Re) {
      ee.setTransform(1, 0, 0, 1, 0, 0), ee.fillStyle = be.L.defaultNameTagBackground, ee.fillRect(0, 0, ie, He), ee.scale(ie / Ke.layoutWidth, He / Ke.layoutHeight), ee.translate((Ke.layoutWidth - Me) / 2, 0),
        function(ee, ie, He, Me) {
          var Ke, oe, Re, ke;
          const {
            top: qe,
            around: fe,
            showPlayerText: Te,
            localPlayerDbId: ze
          } = He, {
            whiteUiText: Be,
            grayUiText: Ee,
            yellowUiText: ge
          } = be.L;
          ee.textBaseline = "middle";
          const Oe = function(ie, He, ye, be, Me, Ke) {
              let Ue = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              ee.font = `bold ${be}px 'Jetbrains Mono', monospace`, ee.fillStyle = Me, ee.textAlign = Ue;
              let Fe = ie.replace(/[\r\n\t]/g, " ");
              if (ee.measureText(Fe).width > Ke) {
                for (; Fe.length > 0 && ee.measureText(`${Fe}\u2026`).width > Ke;) Fe = Fe.slice(0, -1);
                Fe += "\u2026"
              }
              ee.fillText(Fe, He, ye)
            },
            de = ie => {
              ee.fillStyle = Be, ee.globalAlpha = .15, ee.fillRect(24, ie, 976, 2), ee.globalAlpha = 1
            },
            We = null === ze ? null : (0, be.oc)(ze),
            te = ee => null !== We && ee.playerHash === We,
            Ze = pe(qe.entries, ye.o),
            we = "ready" === qe.status && Ze.length > 0,
            De = null === fe ? [] : pe(fe.entries, Ue),
            Pe = Ze.some(te),
            Ae = null === fe ? null : function(ee) {
              const ie = ee;
              if (!ie || !Number.isFinite(ie.rank) || !Number.isFinite(ie.tied) || !Number.isFinite(ie.total)) return null;
              return ie
            }(fe.standing),
            Ye = De.find(te),
            Ve = Ze.find(te),
            ae = null === Ae || void 0 === Ye ? null : {
              value: Ye.value,
              rank: Ae.rank
            },
            ce = Xe(Ze, void 0 === Ve || Ve.value === (null === ae || void 0 === ae ? void 0 : ae.value) ? ae : null),
            xe = Xe(De, ae),
            Le = (ee, ie) => {
              const He = ee.findIndex(te);
              return He >= 0 ? ie[He] : null
            },
            Ce = null !== (Ke = null !== (oe = null === Ae || void 0 === Ae ? void 0 : Ae.rank) && void 0 !== oe ? oe : Le(De, xe)) && void 0 !== Ke ? Ke : Le(Ze, ce);
          ee.font = "bold 34px 'Jetbrains Mono', monospace";
          const ve = [...we ? ce : [], ...Pe ? [] : xe],
            ue = Math.min(280, Math.max(0, ...ve.map((ie => ee.measureText(Fe.format(ie)).width)))),
            me = ue <= 80,
            le = me ? 80 : 32 + ue,
            Se = me ? 148 : le + 28,
            ne = 660 - Se;
          Oe(`TOP ${ye.o}  /  ALL TIME`, 24, 52, 28, Ee, 976), Oe(Te ? String(null !== (Re = ie.title) && void 0 !== Re ? Re : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, Be, 976), Oe("RANK", 32, 174, 28, Ee, Se - 40), Oe("PLAYER", Se, 174, 28, Ee, ne), Oe(Te ? String(null !== (ke = ie.scoreLabel) && void 0 !== ke ? ke : "Score").slice(0, 24) : "Score", 992, 174, 28, Ee, 304, "right"), de(202);
          const je = (Me - 232) / (ye.o + Je + Ue),
            se = 208 + ye.o * je,
            Ie = se + Je * je,
            he = (ie, He, ye, be) => {
              const Me = te(ie);
              ee.fillStyle = Me ? ge : Be, ee.globalAlpha = Me ? .15 : be ? .035 : 0, ee.fillRect(24, ye - je / 2 + 1, 976, je - 2), ee.globalAlpha = 1;
              const Ke = Me ? ge : Be;
              Oe(Fe.format(He), le, ye, 34, Ke, me ? 80 : ue, me ? "center" : "right"), Oe(Te ? String(ie.name).slice(0, 64) : "Player", Se, ye, 34, Ke, ne);
              const Ue = Fe.format(ie.value);
              Oe(ee.measureText(Ue).width > 304 ? ie.value.toExponential(6) : Ue, 992, ye, 34, Ke, 304, "right")
            };
          if (we)
            for (const [ye, be] of Ze.entries()) he(be, ce[ye], 208 + (ye + .5) * je, ye % 2 === 0);
          else {
            const ee = "error" === qe.status,
              ie = ee ? "Couldn't load leaderboard" : "ready" === qe.status ? "No scores yet" : "Loading leaderboard\u2026",
              He = ee ? "Trying again shortly" : "ready" === qe.status ? "Be the first on the board!" : "Fetching the top players",
              ye = (208 + se) / 2;
            Oe(ie, 512, ye - 28, 40, ee ? be.L.redUiText : Be, 960, "center"), Oe(He, 512, ye + 27, 30, Ee, 960, "center")
          }
          const Ne = se + Je * je / 2;
          if (null === Ce) de(Ne);
          else {
            const ie = null === Ae ? 0 : Ae.tied - 1,
              He = `YOUR RANK #${Fe.format(Ce)}${null===Ae?"":` of ${Fe.format(Ae.total)}`}`;
            ee.font = "bold 36px 'Jetbrains Mono', monospace";
            const ye = Math.max(20, Math.min(36, Math.floor(34560 / ee.measureText(He).width)));
            Oe(He, 512, Ne - (ie > 0 ? 15 : 0), ye, ge, 960, "center"), ie > 0 && Oe(`Tied with ${Fe.format(ie)} other${1===ie?"":"s"}`, 512, Ne + 24, 24, Ee, 960, "center")
          }
          if (null === fe) return;
          const Ge = Ie + Ue * je / 2;
          if (Pe) Oe(`You're in the top ${ye.o}!`, 512, Ge, 40, ge, 960, "center");
          else if (0 === De.length) Oe("You're not on this board yet", 512, Ge, 34, Ee, 960, "center");
          else
            for (const [ye, be] of De.entries()) he(be, xe[ye], Ie + (ye + .5) * je, ye % 2 === 0)
        }(ee, oe, Re, Ke.layoutHeight)
    }

    function pe(ee, ie) {
      return Array.isArray(ee) ? ee.slice(0, ie).filter((ee => ee && Number.isFinite(ee.rank) && Number.isFinite(ee.value))) : []
    }

    function Xe(ee, ie) {
      const He = [];
      let ye = !1;
      return ee.forEach(((be, Me) => {
        if (null !== ie && be.value === ie.value) return void He.push(ie.rank);
        const Ke = Me > 0 && be.value === ee[Me - 1].value;
        Ke || (ye = 0 === Me && 1 !== be.rank), He.push(Ke && !ye ? He[Me - 1] : be.rank)
      })), He
    }
  },
  37058: (ee, ie, He) => {
    He.d(ie, {
      e: () => be,
      i: () => Me
    });
    const ye = 32;

    function be(ee) {
      return Array.from(ee).length
    }

    function Me(ee) {
      const ie = [""];
      let He = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        be = "";
      const Me = () => {
        ie.push(""), He = 0, be = ""
      };
      for (const Ke of ee.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(Ke)) Me();
        else if (/^\s+$/.test(Ke)) be += Ke;
      else if (Ke.length > 0) {
        const ee = Array.from(Ke);
        He > 0 && He + be.length + ee.length > ye && Me(), ie[ie.length - 1] += be, He += be.length, be = "";
        for (const be of ee) He >= ye && Me(), ie[ie.length - 1] += be, He++
      }
      return ie[ie.length - 1] += be, ie
    }
  },
  37068: (ee, ie, He) => {
    He.d(ie, {
      D: () => fe,
      E: () => Te,
      G: () => Xe,
      d: () => ye,
      g: () => Re,
      h: () => be,
      i: () => ke,
      j: () => pe,
      n: () => oe,
      r: () => ze,
      v: () => Fe,
      y: () => Je,
      z: () => qe
    });
    const ye = [{
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

    function be(ee, ie) {
      const {
        numLines: He,
        charsPerLine: be
      } = ye[ie];
      return Be(ee, He, be, !1)
    }
    const Me = 7 / 8,
      Ke = .25,
      Ue = 8;

    function Fe(ee, ie) {
      return {
        width: Math.min(ee, Ue) - 2 * Ke,
        height: Math.min(ie, Ue) - 2 * Ke
      }
    }

    function Je(ee, ie, He) {
      const be = Fe(ee, ie),
        {
          numLines: Ke,
          charsPerLine: Ue
        } = ye[He];
      return {
        numLines: Math.max(1, Math.floor(Ke / Me * be.height)),
        charsPerLine: Math.max(1, Math.floor(Ue * be.width))
      }
    }

    function oe(ee, ie, He, ye) {
      const {
        numLines: be,
        charsPerLine: Me
      } = Je(He, ye, ie);
      return Be(ee, be, Me, !1)
    }
    const Re = 32e3;

    function ke(ee) {
      return ee.slice(0, Re)
    }
    const qe = 512e3,
      fe = 64,
      Te = qe;

    function pe(ee, ie) {
      const He = Math.max(0, Te - ie),
        ye = Math.min(qe, He);
      return ee.slice(0, ye)
    }
    const Xe = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      EJ: {
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

    function ze(ee, ie) {
      const {
        numLines: He,
        charsPerLine: ye
      } = Xe[ie];
      return Be(ee, He, ye, !1)
    }

    function Be(ee, ie, He, ye, be) {
      (be || ye) && (ee = ee.slice(0, null !== be && void 0 !== be ? be : ie * He));
      const Me = ee.split("\n");
      if (Me.length > ie && Me.splice(ie, Me.length - ie), !ye)
        for (let Ke = 0; Ke < Me.length; Ke++) {
          const ee = Me[Ke];
          ee.length > He && (Me[Ke] = ee.substring(0, He), Me.length < ie && Me.splice(Ke + 1, 0, ee.substring(He)))
        }
      return Me.join("\n")
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);