export const id = 128;
export const ids = [128];
export const modules = {
  38765: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => sc,
      i: () => uc
    });
    var Vc = nc(2451);
    let Ic = null,
      rB = null;

    function uc() {
      return rB ??= nc.e(191).then((() => nc(35055))).then((cB => {
        let {
          ITEM_SPRITES: Bc,
          ITEM_SPRITES_WITHOUT_FILE: nc,
          ITEM_FILES_WITHOUT_SPRITE: rB
        } = cB;
        Ic = function(cB, Bc, nc) {
          const Ic = new Set,
            rB = (0, Vc.B)(Bc);
          let uc = 0;
          for (const [Vc, sc] of cB.entries()) Vc === rB[uc] ? uc++ : Ic.add(sc);
          if ("" !== nc)
            for (const sc of nc.split(Vc.t)) Ic.add(sc);
          return Ic
        }(Bc.split(Vc.t), nc, rB)
      }), (cB => {
        throw rB = null, cB
      })), rB
    }

    function sc(cB) {
      var Bc, nc;
      return null !== (Bc = null === (nc = Ic) || void 0 === nc ? void 0 : nc.has(cB)) && void 0 !== Bc && Bc
    }
  },
  37163: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => sc
    });
    var Vc = nc(1090);

    function Ic(cB) {
      const Bc = /(\d*\.?\d+)px/.exec(cB);
      return Bc ? Number(Bc[1]) : null
    }

    function rB(cB) {
      return cB.split(/[\s,]+/).pop()
    }
    let uc = !1;
    const sc = {
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
      drawText: function(cB, Bc, Vc, sc, Mc, Pc) {
        if (Mc <= 0 || Pc <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: qB,
          fontVariant: Oc,
          fontWeight: Tc,
          fontSize: fc,
          font: mB
        } = this, ec = [qB, Oc, Tc, `${fc}px`, mB].filter(Boolean).join(" "), tB = [
          [Tc, `${fc}px`, rB(mB)].filter(Boolean).join(" "), `${fc}px sans-serif`
        ], Sc = cB.font, yB = function(cB, Bc, nc) {
          for (const Vc of Bc) {
            cB.font = Vc;
            const Bc = Ic(cB.font),
              uc = rB(Vc);
            if (null !== Bc && Math.abs(Bc - nc) <= .5 && cB.font.toLowerCase().includes(uc.toLowerCase())) return Vc
          }
          return null
        }(cB, [ec, ...tB], fc);
        yB !== ec && function(cB, Bc, Vc) {
          uc || (uc = !0, Promise.resolve().then((() => nc(938))).then((nc => {
            let {
              wI: Ic
            } = nc;
            Ic(new Error("A canvas didn't take canvasTxt's font"), {
              font: cB,
              kept: Bc,
              drawnWith: null !== Vc && void 0 !== Vc ? Vc : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(ec, Sc, yB);
        const zB = Ic(cB.font);
        if (null === yB && null !== zB && zB > 0) {
          const nc = fc / zB;
          cB.save();
          try {
            return cB.scale(nc, nc), {
              height: this.drawLines(cB, Bc, Vc / nc, sc / nc, Mc / nc, Pc / nc, zB).height * nc
            }
          } finally {
            cB.restore()
          }
        }
        return this.drawLines(cB, Bc, Vc, sc, Mc, Pc, fc)
      },
      drawLines: function(cB, Bc, nc, Ic, rB, uc, sc) {
        const Mc = nc + rB,
          Pc = Ic + uc;
        let qB, Oc = Ic + uc / 2 + sc / 2;
        "right" === this.align ? (qB = Mc, cB.textAlign = "right") : "left" === this.align ? (qB = nc, cB.textAlign = "left") : (qB = nc + rB / 2, cB.textAlign = "center");
        for (const Vc of Bc) {
          cB.measureText(Vc).width >= rB && (Bc = Bc.replace(Vc, ""))
        }
        Bc = (0, Vc.P)(Bc);
        const Tc = [],
          fc = Bc.split("\n"),
          mB = this.justify ? cB.measureText("\u200a").width : 0;
        fc.forEach((Bc => {
          let nc = cB.measureText(Bc).width;
          if (nc <= rB) Tc.push(Bc);
          else {
            let Vc = Bc;
            const Ic = rB;
            let uc, sc, Mc;
            for (nc = cB.measureText(Vc).width; nc > Ic;) {
              for (uc = 0, sc = 0, Mc = ""; sc < Ic;) uc++, Mc = Vc.substr(0, uc), sc = cB.measureText(Mc).width;
              uc--, Mc = Mc.substr(0, uc);
              const Bc = uc;
              if (" " !== Vc.substr(uc, 1)) {
                for (;
                  " " !== Vc.substr(uc, 1) && 0 !== uc;) uc--;
                0 === uc && (uc = Bc), Mc = Vc.substr(0, uc)
              }
              Mc = this.justify ? this.justifyLine(cB, Mc, mB, "\u200a", rB) : Mc, Vc = Vc.substr(uc), nc = cB.measureText(Vc).width, Tc.push(Mc)
            }
            nc > 0 && Tc.push(Vc)
          }
        }));
        const ec = this.lineHeight ? this.lineHeight : this.getTextHeight(cB, Bc),
          tB = ec * (Tc.length - 1),
          Sc = tB / 2;
        let yB = Ic;
        "top" === this.vAlign ? Oc = Ic + sc : "bottom" === this.vAlign ? (Oc = Pc - tB, yB = Pc) : (yB = Ic + uc / 2, Oc -= Sc), Tc.forEach((Bc => {
          Bc = Bc.trim(), cB.fillText(Bc, qB, Oc), Oc += ec
        })), this.debug && (cB.lineWidth = 3, cB.strokeStyle = "#00909e", cB.strokeRect(nc, Ic, rB, uc), cB.lineWidth = 2, cB.strokeStyle = "#f6d743", cB.beginPath(), cB.moveTo(qB, Ic), cB.lineTo(qB, Pc), cB.stroke(), cB.strokeStyle = "#ff6363", cB.beginPath(), cB.moveTo(nc, yB), cB.lineTo(Mc, yB), cB.stroke());
        return {
          height: tB + ec
        }
      },
      getTextHeight: function(cB, Bc) {
        const nc = cB.textBaseline;
        cB.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: Vc
        } = cB.measureText(Bc);
        return cB.textBaseline = nc, Vc
      },
      justifyLine: function(cB, Bc, nc, Vc, Ic) {
        const rB = Bc.trim(),
          uc = cB.measureText(rB).width,
          sc = rB.split(/\s+/).length - 1,
          Mc = Math.floor((Ic - uc) / nc);
        if (sc <= 0 || Mc <= 0) return rB;
        const Pc = Math.floor(Mc / sc);
        let qB = Mc - sc * Pc,
          Oc = [];
        for (let Tc = 0; Tc < Pc; Tc++) Oc.push(Vc);
        Oc = Oc.join("");
        return rB.replace(/\s+/g, (cB => {
          const Bc = qB > 0 ? Oc + Vc : Oc;
          return qB--, cB + Bc
        }))
      }
    }
  },
  37167: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => ec,
      h: () => mB,
      l: () => Tc,
      n: () => qB,
      o: () => Oc
    });
    var Vc = nc(3441),
      Ic = nc(302);
    const rB = 1024,
      uc = 1536,
      sc = 2 * Vc.j + 1,
      Mc = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      Pc = 1.5;

    function qB(cB, Bc, nc) {
      if ("string" !== typeof cB) return Bc;
      try {
        const nc = JSON.parse(cB);
        return nc && "object" === typeof nc ? nc : Bc
      } catch (Vc) {
        return void 0 !== nc && console.error(`Couldn't parse ${nc}`, Vc), Bc
      }
    }

    function Oc(cB) {
      return qB(cB, null, "a leaderboard's rows")
    }

    function Tc(cB, Bc) {
      var nc, Vc;
      return null !== Bc && void 0 !== Bc ? Bc : {
        status: null !== (nc = cB.status) && void 0 !== nc ? nc : "loading",
        entries: null !== (Vc = cB.entries) && void 0 !== Vc ? Vc : []
      }
    }

    function fc(cB, Bc) {
      return "number" === typeof cB && Number.isFinite(cB) && cB > 0 ? cB : Bc
    }

    function mB(cB, Bc) {
      const nc = fc(cB.size, 1);
      let Vc = fc(cB.width, fc(2.5 * nc, 2.5)),
        Ic = fc(cB.height, fc(3.75 * nc, 3.75));
      Number.isFinite(rB * Ic / Vc) && Number.isFinite(uc * Vc / Ic) || (Vc = 2.5, Ic = 3.75);
      const sc = Ic / Vc,
        Mc = Math.max(1, Math.min(rB, Bc / sc));
      return {
        width: Vc,
        height: Ic,
        layoutWidth: Math.max(rB, uc / sc),
        layoutHeight: Math.max(uc, rB * sc),
        pixelWidth: Math.round(Mc),
        pixelHeight: Math.round(Math.max(1, Math.min(Bc, Mc * sc)))
      }
    }

    function ec(cB, Bc, nc, uc, qB, Oc) {
      cB.setTransform(1, 0, 0, 1, 0, 0), cB.fillStyle = Ic.C.defaultNameTagBackground, cB.fillRect(0, 0, Bc, nc), cB.scale(Bc / uc.layoutWidth, nc / uc.layoutHeight), cB.translate((uc.layoutWidth - rB) / 2, 0),
        function(cB, Bc, nc, rB) {
          var uc, qB, Oc, Tc;
          const {
            top: fc,
            around: mB,
            showPlayerText: ec,
            localPlayerDbId: yB
          } = nc, {
            whiteUiText: zB,
            grayUiText: pc,
            yellowUiText: hc
          } = Ic.C;
          cB.textBaseline = "middle";
          const aB = function(Bc, nc, Vc, Ic, rB, uc) {
              let sc = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              cB.font = `bold ${Ic}px 'Jetbrains Mono', monospace`, cB.fillStyle = rB, cB.textAlign = sc;
              let Mc = Bc.replace(/[\r\n\t]/g, " ");
              if (cB.measureText(Mc).width > uc) {
                for (; Mc.length > 0 && cB.measureText(`${Mc}\u2026`).width > uc;) Mc = Mc.slice(0, -1);
                Mc += "\u2026"
              }
              cB.fillText(Mc, nc, Vc)
            },
            lc = Bc => {
              cB.fillStyle = zB, cB.globalAlpha = .15, cB.fillRect(24, Bc, 976, 2), cB.globalAlpha = 1
            },
            Yc = null === yB ? null : (0, Ic.Xb)(yB),
            Lc = cB => null !== Yc && cB.playerHash === Yc,
            gB = tB(fc.entries, Vc.k),
            Uc = "ready" === fc.status && gB.length > 0,
            bB = null === mB ? [] : tB(mB.entries, sc),
            Zc = gB.some(Lc),
            Qc = null === mB ? null : function(cB) {
              const Bc = cB;
              if (!Bc || !Number.isFinite(Bc.rank) || !Number.isFinite(Bc.tied) || !Number.isFinite(Bc.total)) return null;
              return Bc
            }(mB.standing),
            Cc = bB.find(Lc),
            vB = gB.find(Lc),
            Dc = null === Qc || void 0 === Cc ? null : {
              value: Cc.value,
              rank: Qc.rank
            },
            Nc = Sc(gB, void 0 === vB || vB.value === (null === Dc || void 0 === Dc ? void 0 : Dc.value) ? Dc : null),
            Ec = Sc(bB, Dc),
            oc = (cB, Bc) => {
              const nc = cB.findIndex(Lc);
              return nc >= 0 ? Bc[nc] : null
            },
            Wc = null !== (uc = null !== (qB = null === Qc || void 0 === Qc ? void 0 : Qc.rank) && void 0 !== qB ? qB : oc(bB, Ec)) && void 0 !== uc ? uc : oc(gB, Nc);
          cB.font = "bold 34px 'Jetbrains Mono', monospace";
          const wc = [...Uc ? Nc : [], ...Zc ? [] : Ec],
            kB = Math.min(280, Math.max(0, ...wc.map((Bc => cB.measureText(Mc.format(Bc)).width)))),
            Xc = kB <= 80,
            Hc = Xc ? 80 : 32 + kB,
            Fc = Xc ? 148 : Hc + 28,
            Jc = 660 - Fc;
          aB(`TOP ${Vc.k}  /  ALL TIME`, 24, 52, 28, pc, 976), aB(ec ? String(null !== (Oc = Bc.title) && void 0 !== Oc ? Oc : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, zB, 976), aB("RANK", 32, 174, 28, pc, Fc - 40), aB("PLAYER", Fc, 174, 28, pc, Jc), aB(ec ? String(null !== (Tc = Bc.scoreLabel) && void 0 !== Tc ? Tc : "Score").slice(0, 24) : "Score", 992, 174, 28, pc, 304, "right"), lc(202);
          const jB = (rB - 232) / (Vc.k + Pc + sc),
            Rc = 208 + Vc.k * jB,
            iB = Rc + Pc * jB,
            Kc = (Bc, nc, Vc, Ic) => {
              const rB = Lc(Bc);
              cB.fillStyle = rB ? hc : zB, cB.globalAlpha = rB ? .15 : Ic ? .035 : 0, cB.fillRect(24, Vc - jB / 2 + 1, 976, jB - 2), cB.globalAlpha = 1;
              const uc = rB ? hc : zB;
              aB(Mc.format(nc), Hc, Vc, 34, uc, Xc ? 80 : kB, Xc ? "center" : "right"), aB(ec ? String(Bc.name).slice(0, 64) : "Player", Fc, Vc, 34, uc, Jc);
              const sc = Mc.format(Bc.value);
              aB(cB.measureText(sc).width > 304 ? Bc.value.toExponential(6) : sc, 992, Vc, 34, uc, 304, "right")
            };
          if (Uc)
            for (const [Vc, Ic] of gB.entries()) Kc(Ic, Nc[Vc], 208 + (Vc + .5) * jB, Vc % 2 === 0);
          else {
            const cB = "error" === fc.status,
              Bc = cB ? "Couldn't load leaderboard" : "ready" === fc.status ? "No scores yet" : "Loading leaderboard\u2026",
              nc = cB ? "Trying again shortly" : "ready" === fc.status ? "Be the first on the board!" : "Fetching the top players",
              Vc = (208 + Rc) / 2;
            aB(Bc, 512, Vc - 28, 40, cB ? Ic.C.redUiText : zB, 960, "center"), aB(nc, 512, Vc + 27, 30, pc, 960, "center")
          }
          const xB = Rc + Pc * jB / 2;
          if (null === Wc) lc(xB);
          else {
            const Bc = null === Qc ? 0 : Qc.tied - 1,
              nc = `YOUR RANK #${Mc.format(Wc)}${null===Qc?"":` of ${Mc.format(Qc.total)}`}`;
            cB.font = "bold 36px 'Jetbrains Mono', monospace";
            const Vc = Math.max(20, Math.min(36, Math.floor(34560 / cB.measureText(nc).width)));
            aB(nc, 512, xB - (Bc > 0 ? 15 : 0), Vc, hc, 960, "center"), Bc > 0 && aB(`Tied with ${Mc.format(Bc)} other${1===Bc?"":"s"}`, 512, xB + 24, 24, pc, 960, "center")
          }
          if (null === mB) return;
          const dc = iB + sc * jB / 2;
          if (Zc) aB(`You're in the top ${Vc.k}!`, 512, dc, 40, hc, 960, "center");
          else if (0 === bB.length) aB("You're not on this board yet", 512, dc, 34, pc, 960, "center");
          else
            for (const [Vc, Ic] of bB.entries()) Kc(Ic, Ec[Vc], iB + (Vc + .5) * jB, Vc % 2 === 0)
        }(cB, qB, Oc, uc.layoutHeight)
    }

    function tB(cB, Bc) {
      return Array.isArray(cB) ? cB.slice(0, Bc).filter((cB => cB && Number.isFinite(cB.rank) && Number.isFinite(cB.value))) : []
    }

    function Sc(cB, Bc) {
      const nc = [];
      let Vc = !1;
      return cB.forEach(((Ic, rB) => {
        if (null !== Bc && Ic.value === Bc.value) return void nc.push(Bc.rank);
        const uc = rB > 0 && Ic.value === cB[rB - 1].value;
        uc || (Vc = 0 === rB && 1 !== Ic.rank), nc.push(uc && !Vc ? nc[rB - 1] : Ic.rank)
      })), nc
    }
  },
  37371: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Ic,
      h: () => rB
    });
    const Vc = 32;

    function Ic(cB) {
      return Array.from(cB).length
    }

    function rB(cB) {
      const Bc = [""];
      let nc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Ic = "";
      const rB = () => {
        Bc.push(""), nc = 0, Ic = ""
      };
      for (const uc of cB.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(uc)) rB();
        else if (/^\s+$/.test(uc)) Ic += uc;
      else if (uc.length > 0) {
        const cB = Array.from(uc);
        nc > 0 && nc + Ic.length + cB.length > Vc && rB(), Bc[Bc.length - 1] += Ic, nc += Ic.length, Ic = "";
        for (const Ic of cB) nc >= Vc && rB(), Bc[Bc.length - 1] += Ic, nc++
      }
      return Bc[Bc.length - 1] += Ic, Bc
    }
  },
  38763: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => uc,
      c: () => sc
    });
    var Vc = nc(38765);
    let Ic = null,
      rB = null;

    function uc() {
      return Ic ??= nc.e(51).then((() => nc(40586))).catch((cB => {
        throw Ic = null, cB
      })), Ic
    }

    function sc() {
      return rB ??= Promise.all([uc(), (0, Vc.i)()]).then((cB => {
        let [Bc] = cB;
        return Bc
      }), (cB => {
        throw rB = null, cB
      })), rB
    }
  },
  40540: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Cc,
      c: () => Hc,
      g: () => oc,
      j: () => Zc,
      k: () => Qc,
      n: () => kB,
      p: () => bB,
      q: () => Uc
    });
    var Vc = nc(3594),
      Ic = nc(3615),
      rB = nc(35325),
      uc = nc(2444),
      sc = nc(2438),
      Mc = nc(38950),
      Pc = nc(107),
      qB = nc(1125),
      Oc = nc(38763),
      Tc = nc(6945),
      fc = nc(6467),
      mB = nc(6587),
      ec = nc(6672),
      tB = nc(6791),
      Sc = nc(6811);
    const yB = {
        youtube: Tc.h,
        "person-military-pointing": fc.c,
        sparkle: mB.f,
        user: ec.g,
        wrench: tB.i,
        zap: Sc.f
      },
      zB = new Map(Object.entries(yB).map((cB => {
        let [Bc, nc] = cB;
        const [Vc, Ic, , , rB] = nc.icon;
        return [Bc, {
          width: Vc,
          height: Ic,
          path: "string" === typeof rB ? rB : rB.join(" ")
        }]
      })));
    var pc = nc(38827);
    const hc = 397,
      aB = 1,
      lc = {
        translate: cB => [cB],
        keyBindingText: cB => cB,
        isFriend: () => !1,
        hiddenNames: {}
      };
    let Yc = null,
      Lc = 0,
      gB = "none";

    function Uc() {
      return Lc
    }

    function bB() {
      Lc++, !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0] ? gB = "all" : "none" === gB && (gB = "notBoards")
    }

    function Zc(cB) {
      Object.assign(lc, cB), bB(!1)
    }

    function Qc(cB) {
      cB !== Yc && (Yc = cB, bB())
    }

    function Cc(cB) {
      if ("none" === gB || null === cB) return;
      cB(hc, "all" === gB ? 0 : aB, new Uint8Array(0)) && (gB = "none")
    }
    const vB = new Map;

    function Dc(cB, Bc, nc) {
      const Vc = nc ? `${cB}#${nc.join(",")}` : cB,
        Ic = vB.get(Vc);
      if (Ic) return Ic.image;
      const rB = {
        image: null
      };
      return vB.set(Vc, rB), Bc().then((async cB => {
        if (null === cB) return null;
        const Bc = new Image;
        Bc.crossOrigin = "anonymous", Bc.src = cB, await Bc.decode();
        const Vc = await createImageBitmap(Bc);
        if (!nc) return Vc;
        try {
          return function(cB, Bc) {
            let [nc, Vc, Ic] = Bc;
            const rB = (0, Mc.f)(cB.width, cB.height),
              {
                canvas: uc
              } = rB;
            return rB.drawImage(cB, 0, 0), rB.globalCompositeOperation = "multiply", rB.fillStyle = `rgb(${nc}, ${Vc}, ${Ic})`, rB.fillRect(0, 0, uc.width, uc.height), rB.globalCompositeOperation = "destination-in", rB.drawImage(cB, 0, 0), uc
          }(Vc, nc)
        } finally {
          Vc.close()
        }
      })).then((cB => {
        null !== cB && (rB.image = cB, bB(!1))
      }), (Bc => {
        console.warn(`[bloxd-wasm-client] text icon ${cB} did not load`, Bc), vB.get(Vc) === rB && vB.delete(Vc)
      })), null
    }
    const Nc = new Set(Vc.b),
      Ec = new Set(["CubeBlock", "SlabBlock", "StairsBlock"]);

    function oc() {
      (0, Oc.c)().catch((() => {}))
    }

    function Wc(cB) {
      return Nc.has(cB) ? Dc(`icon:${cB}`, (async () => (await (0, Oc.b)()).ingameIconUrl(cB))) : null
    }
    let wc = "unasked";
    const kB = {
      get canSeeRealPlayerNames() {
        return Pc.featureFlags.canSeeRealPlayerNames
      },
      get canSeePlayerWrittenText() {
        return Pc.featureFlags.canSeePlayerWrittenText
      },
      get localPlayerDbId() {
        return Yc
      },
      shownPlayerName: cB => (0, qB.g)(cB, lc.hiddenNames),
      translate: (cB, Bc) => {
        const nc = "object" === typeof Bc && null !== Bc ? Bc : void 0;
        return lc.translate(cB, (0, qB.i)(nc, lc.hiddenNames))
      },
      keyBindingText: cB => lc.keyBindingText(cB),
      isFriend: cB => lc.isFriend(cB, lc.hiddenNames),
      iconImage: function(cB) {
        if (Nc.has(cB)) return Wc(cB);
        if ("unasked" === wc && (wc = "loading", (0, sc.g)().then((() => {
            wc = "in", bB(!1)
          }), (cB => {
            wc = "failed", console.warn("[bloxd-wasm-client] the item sprite table did not load, so text item icons stay blank", cB)
          }))), "in" !== wc) return null;
        const Bc = (0, uc.e)(cB),
          nc = void 0 === Bc ? void 0 : (0, rB.itemTypeNameOf)(Bc);
        if ("Gun" === nc) return null;
        const Vc = (0, sc.d)(cB),
          Mc = void 0 !== nc && Ec.has(nc);
        if (Mc && void 0 === Vc) return null;
        const Pc = void 0 !== Bc && "GrayscaleArmour" === (0, rB.itemTypeOf)(Bc) || Object.hasOwn(Ic.e, cB),
          qB = null !== Vc && void 0 !== Vc ? Vc : cB;
        return Dc(Mc ? `block:${qB}` : `item:${qB}`, (async () => {
          var cB;
          const Bc = await (0, Oc.c)();
          return null !== (cB = Bc.itemSpriteUrl(qB)) && void 0 !== cB ? cB : Mc ? null : Bc.notFoundUrl()
        }), Pc ? (0, Ic.f)(cB) : void 0)
      },
      effectImage: Wc,
      rankIcon: function(cB) {
        var Bc;
        return null !== (Bc = zB.get(cB)) && void 0 !== Bc ? Bc : null
      }
    };
    let Xc = null;

    function Hc() {
      return Xc ??= new FontFace("Jetbrains Mono", `url(${(0,pc.d)()}) format("woff2")`).load().then((cB => {
        document.fonts.add(cB), bB()
      }), (cB => {
        console.warn("[bloxd-wasm-client] the text font did not load", cB)
      })), Xc
    }
  },
  38827: (cB, Bc, nc) => {
    function Vc() {
      return nc(38831)
    }
    nc.d(Bc, {
      d: () => Vc
    })
  },
  40535: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => an,
      i: () => eB
    });
    var Vc = nc(35361),
      Ic = nc(38950),
      rB = nc(37371),
      uc = nc(550),
      sc = nc(244);
    const Mc = {
        DEFAULT_FONT_SIZE: 47,
        DEFAULT_SUBTITLE_FONT_SIZE: 30,
        HORIZONTAL_PADDING: 30,
        VERTICAL_PADDING: 22,
        TEXT_SHADOW_WIDTH: 2,
        LINE_SPACING: 8,
        EFFECT_ICON_SIZE: 70
      },
      Pc = 41;

    function qB(cB) {
      return `bolder ${cB}px 'Jetbrains Mono'`
    }

    function Oc(cB) {
      return "object" === typeof cB && null !== cB
    }

    function Tc(cB, Bc) {
      const nc = "number" === typeof cB ? cB : "string" === typeof cB ? Number(cB.replace("px", "")) : NaN;
      return Number.isFinite(nc) && nc > 0 ? nc : Bc
    }

    function fc(cB) {
      return Oc(cB) ? cB : void 0
    }

    function mB(cB) {
      const Bc = "number" === typeof cB ? uc.p[cB] : cB;
      return "string" === typeof Bc && Object.hasOwn(uc.g, Bc) ? uc.g[Bc] : void 0
    }

    function ec(cB, Bc) {
      return "string" === typeof cB ? cB : Oc(cB) ? "string" === typeof cB.translationKey ? Bc.translate(cB.translationKey, cB.params).map((cB => "string" === typeof cB ? cB : cB.icon)).join("") : "string" === typeof cB.entityName ? Bc.shownPlayerName(cB.entityName) : "" : void 0 === cB || null === cB ? "" : String(cB)
    }

    function tB(cB, Bc, nc, Vc) {
      if (!Array.isArray(cB)) return [];
      const Ic = [];
      for (const qB of cB) {
        var rB, uc;
        if (Oc(qB) && "chatTag" in qB) {
          Ic.push({
            kind: "rank",
            rank: qB
          });
          continue
        }
        if (Oc(qB) && "icon" in qB && !("mainRGB" in qB)) {
          var Pc;
          Ic.push({
            kind: "icon",
            icon: String(qB.icon),
            size: Tc(null === (Pc = fc(qB.style)) || void 0 === Pc ? void 0 : Pc.fontSize, Mc.DEFAULT_FONT_SIZE)
          });
          continue
        }
        if (Oc(qB) && (0, sc.sb)(qB)) {
          Ic.push({
            kind: "text",
            text: "",
            size: Bc,
            colour: Vc
          });
          continue
        }
        let cB, mB;
        Oc(qB) && (0, sc.rb)(qB) ? (cB = nc.keyBindingText(String(qB.action)), mB = fc(qB.style)) : Oc(qB) && "str" in qB ? (cB = qB.str, mB = fc(qB.style)) : cB = qB;
        const tB = Tc(null === (rB = mB) || void 0 === rB ? void 0 : rB.fontSize, Bc),
          Sc = null !== (uc = (0, sc.Sb)(mB)) && void 0 !== uc ? uc : Vc;
        if (Oc(cB) && "string" === typeof cB.translationKey) {
          const Bc = nc.translate(cB.translationKey, cB.params);
          if (Bc.some((cB => "string" !== typeof cB))) {
            for (const cB of Bc) Ic.push("string" === typeof cB ? {
              kind: "text",
              text: cB,
              size: tB,
              colour: Sc
            } : {
              kind: "icon",
              icon: cB.icon,
              size: tB
            });
            continue
          }
        }
        Ic.push({
          kind: "text",
          text: ec(cB, nc),
          size: tB,
          colour: Sc
        })
      }
      return Ic
    }

    function Sc(cB) {
      return void 0 !== cB && "rank" !== cB.kind
    }

    function yB(cB, Bc) {
      const nc = Sc(cB),
        Vc = Sc(Bc);
      return void 0 === cB && !Vc || !nc && void 0 === Bc ? 0 : nc !== Vc ? .5 * Mc.HORIZONTAL_PADDING : 0
    }

    function zB(cB) {
      return "rank" === cB.kind ? Mc.DEFAULT_FONT_SIZE : cB.size
    }

    function pc(cB, Bc, nc) {
      return "icon" === cB.kind ? cB.size : "rank" === cB.kind ? function(cB, Bc) {
        const nc = Bc.rankIcon(cB.rank.icon);
        return nc ? Pc * (nc.width / nc.height) : Pc
      }(cB, nc) + Mc.HORIZONTAL_PADDING : (Bc.font = qB(cB.size), Bc.measureText(cB.text).width)
    }

    function hc(cB, Bc, nc) {
      if (0 === cB.length) return {
        width: 0,
        height: 0,
        sizes: []
      };
      let Vc = 0;
      for (const uc of cB) Vc = Math.max(Vc, zB(uc));
      const Ic = [];
      let rB = yB(void 0, cB[0]);
      for (let uc = 0; uc < cB.length; uc++) {
        const Vc = rB;
        rB += pc(cB[uc], Bc, nc), rB += yB(cB[uc], cB[uc + 1]), Ic.push({
          x: Vc,
          width: rB - Vc
        })
      }
      return {
        width: rB,
        height: Vc + Mc.VERTICAL_PADDING,
        sizes: Ic
      }
    }

    function aB(cB, Bc, nc, Vc, Ic, rB, uc) {
      Bc += yB(void 0, cB[0]);
      for (let sc = 0; sc < cB.length; sc++) {
        const Mc = lc(cB[sc], Bc, nc, Vc, Ic, rB, uc);
        Bc += 0 === Mc ? 0 : Mc + yB(cB[sc], cB[sc + 1])
      }
    }

    function lc(cB, Bc, nc, Vc, Ic, rB, uc, sc) {
      var Oc;
      if ("icon" === cB.kind) {
        const Vc = rB.iconImage(cB.icon);
        return Vc && uc.push({
          image: Vc,
          x: Bc,
          y: nc + Mc.VERTICAL_PADDING / 2,
          size: cB.size
        }), cB.size
      }
      if ("rank" === cB.kind) {
        const uc = null !== sc && void 0 !== sc ? sc : pc(cB, Ic, rB);
        return function(cB, Bc, nc, Vc, Ic, rB, uc) {
          var sc, qB;
          const {
            rank: Oc
          } = cB;
          rB.fillStyle = Oc.mainRGB, rB.fillRect(Bc, nc, Vc, Ic);
          const Tc = uc.rankIcon(Oc.icon);
          if (!Tc) return;
          const fc = Pc / Tc.height,
            mB = Bc + (Vc - Tc.width * fc) / 2,
            ec = nc + (Ic - Pc) / 2,
            tB = new Path2D(Tc.path),
            Sc = Mc.TEXT_SHADOW_WIDTH,
            yB = (null === (sc = Oc.nameTag) || void 0 === sc ? void 0 : sc.iconShadowRGB) || "black";
          for (const Mc of [-1, 1])
            for (const cB of [-1, 1]) Lc(rB, tB, mB + Sc * Mc, ec + Sc * cB, fc, yB);
          Lc(rB, tB, mB, ec, fc, (null === (qB = Oc.nameTag) || void 0 === qB ? void 0 : qB.iconRGB) || "white")
        }(cB, Bc, nc, uc, Vc, Ic, rB), uc
      }
      if (0 === cB.text.length) return 0;
      const Tc = qB(cB.size);
      Ic.font = Tc;
      const fc = null !== sc && void 0 !== sc ? sc : Ic.measureText(cB.text).width;
      return function(cB, Bc, nc, Vc, Ic, rB) {
        const uc = Mc.TEXT_SHADOW_WIDTH;
        rB.font = Vc, rB.fillStyle = "black";
        for (const sc of [-1, 1])
          for (const Vc of [-1, 1]) rB.fillText(cB, Bc + uc * sc, nc + uc * Vc);
        rB.fillStyle = Ic, rB.fillText(cB, Bc, nc)
      }(cB.text, Bc, nc + Vc - Mc.VERTICAL_PADDING + 5, Tc, null !== (Oc = cB.colour) && void 0 !== Oc ? Oc : "white", Ic), fc
    }

    function Yc(cB, Bc) {
      for (const {
          image: nc,
          x: Vc,
          y: Ic,
          size: rB
        }
        of cB) Bc.imageSmoothingEnabled = !1, Bc.drawImage(nc, Vc, Ic, rB, rB)
    }

    function Lc(cB, Bc, nc, Vc, Ic, rB) {
      cB.save(), cB.translate(nc, Vc), cB.scale(Ic, Ic), cB.fillStyle = rB, cB.fill(Bc), cB.restore()
    }

    function gB(cB, Bc, nc) {
      const Vc = "object" === typeof cB && null !== cB ? cB : {},
        Ic = function(cB, Bc, nc) {
          if (!Array.isArray(cB) || 0 === cB.length) return [];
          const Vc = [{
            width: 0,
            height: 0,
            y: 0,
            items: []
          }];
          for (const uc of tB(cB, Mc.DEFAULT_FONT_SIZE, nc)) {
            if ("text" !== uc.kind) {
              Vc[Vc.length - 1].items.push({
                content: uc,
                chars: 1,
                size: {
                  x: 0,
                  width: 0
                }
              });
              continue
            }
            if (0 === uc.text.length) continue;
            const cB = Vc[Vc.length - 1].items.reduce(((cB, Bc) => cB + ("text" === Bc.content.kind ? (0, rB.e)(Bc.content.text) : Bc.chars)), 0);
            (0, rB.h)(uc.text, cB).forEach(((cB, Bc) => {
              Bc > 0 && Vc.push({
                width: 0,
                height: 0,
                y: 0,
                items: []
              }), cB.length > 0 && Vc[Vc.length - 1].items.push({
                content: {
                  ...uc,
                  text: cB
                },
                chars: cB.length,
                size: {
                  x: 0,
                  width: 0
                }
              })
            }))
          }
          let Ic = Mc.VERTICAL_PADDING / 2;
          for (const rB of Vc) {
            if (0 === rB.items.length) continue;
            const {
              width: cB,
              height: Vc,
              sizes: uc
            } = hc(rB.items.map((cB => cB.content)), Bc, nc);
            rB.items.forEach(((cB, Bc) => {
              cB.size = uc[Bc]
            })), rB.width = cB, rB.height = Vc, rB.y = Ic, Ic += Vc + Mc.LINE_SPACING
          }
          return Vc
        }(Vc.content, Bc, nc);
      let uc = 0,
        sc = Mc.VERTICAL_PADDING,
        Pc = 0;
      for (const rB of Ic) {
        uc = Math.max(uc, rB.width + 2 * Mc.HORIZONTAL_PADDING), sc += rB.height + Mc.LINE_SPACING;
        for (const cB of rB.items) Pc += cB.chars
      }
      const qB = "string" === typeof Vc.backgroundColor ? Vc.backgroundColor : "#22283b";
      return {
        width: uc,
        height: sc,
        chars: Pc,
        draw: (cB, Bc) => {
          const Vc = [];
          if (cB.fillStyle = qB, cB.fillRect(0, 0, uc, sc), null === Bc)
            for (const rB of Ic) rB.items.length > 0 && aB(rB.items.map((cB => cB.content)), 0, rB.y, rB.height, cB, nc, Vc);
          else {
            let rB = 0;
            for (const uc of Ic)
              for (const Ic of uc.items) {
                if (rB >= Bc) break;
                lc("text" === Ic.content.kind ? {
                  ...Ic.content,
                  text: Ic.content.text.substring(0, Bc - rB)
                } : Ic.content, Ic.size.x, uc.y, uc.height, cB, nc, Vc, Ic.size.width), rB += Ic.chars
              }
          }
          Yc(Vc, cB)
        }
      }
    }
    var Uc = nc(3594),
      bB = nc(1128),
      Zc = nc(1665);
    const Qc = 10,
      Cc = 3,
      vB = 3,
      Dc = [{
        healthFraction: .25,
        colour: "#ff0000"
      }, {
        healthFraction: .5,
        colour: "#ffaa00"
      }, {
        healthFraction: 1,
        colour: "#00ff00"
      }],
      Nc = 64,
      Ec = 69,
      oc = {
        icon: Zc.d,
        mainRGB: "transparent",
        chatTag: [],
        nameTag: {
          iconRGB: "#f38ab6",
          iconShadowRGB: "black"
        },
        visible: !0
      };

    function Wc(cB) {
      return "object" !== typeof cB || null === cB || Array.isArray(cB) ? void 0 : cB
    }
    const wc = new Set(Uc.b);

    function kB(cB, Bc) {
      return "string" === typeof cB ? Tc(cB, Bc) : Bc
    }

    function Xc(cB) {
      return kB(cB.width, Cc)
    }

    function Hc(cB, Bc) {
      var nc;
      const Vc = null !== (nc = cB.applyTo) && void 0 !== nc ? nc : "both";
      return "both" === Vc || Vc === Bc
    }

    function Fc(cB) {
      const Bc = Xc(cB);
      return "glow" === cB.style ? Bc * vB : Math.ceil(Bc / 2) + 1
    }

    function Jc(cB, Bc, nc) {
      var Vc, Ic;
      const rB = null !== (Vc = Wc(cB.info)) && void 0 !== Vc ? Vc : {},
        sc = "string" === typeof cB.name ? cB.name : "",
        Pc = rB.subtitle;
      if (Array.isArray(rB.content) && 0 === rB.content.length && !(Array.isArray(Pc) && Pc.length > 0)) return null;
      const qB = "number" === typeof cB.hideNameSeed ? cB.hideNameSeed : null,
        Oc = "" === sc || !0 === cB.mesh ? sc : (0, bB.d)(sc, !nc.canSeeRealPlayerNames, qB);
      if (!Oc && !rB.content) return null;
      const Tc = "string" === typeof cB.colour ? cB.colour : "default",
        fc = Object.hasOwn(uc.o, Tc) ? uc.o[Tc] : void 0,
        ec = rB.content ? tB(rB.content, Mc.DEFAULT_FONT_SIZE, nc, fc) : [{
          kind: "text",
          text: Oc,
          size: Mc.DEFAULT_FONT_SIZE,
          colour: fc
        }],
        Sc = [];
      for (const uc of Array.isArray(cB.ranks) ? cB.ranks : []) {
        const cB = mB(uc);
        null !== cB && void 0 !== cB && cB.nameTag && cB.visible && Sc.push({
          kind: "rank",
          rank: cB
        })
      }
      Sc.push(...ec);
      ("boolean" === typeof cB.player ? cB.player : Array.isArray(cB.ranks)) && "" !== sc && nc.isFriend(sc) && Sc.push({
        kind: "rank",
        rank: oc
      }), "number" === typeof cB.cB && Sc.push({
        kind: "text",
        text: ` ${cB.cB}m`,
        size: Mc.DEFAULT_FONT_SIZE,
        colour: "#cef3ff"
      });
      const yB = Pc ? tB(Pc, Mc.DEFAULT_SUBTITLE_FONT_SIZE, nc) : null,
        zB = "string" === typeof rB.backgroundColor ? rB.backgroundColor : "#22283b",
        pc = "string" === typeof rB.subtitleBackgroundColor ? rB.subtitleBackgroundColor : "#1a1e2d",
        lc = Wc(rB.healthbar),
        Lc = Wc(rB.border),
        gB = Array.isArray(cB.effects) ? cB.effects.filter((cB => "string" === typeof cB && wc.has(cB))) : [],
        Uc = "number" === typeof cB.health ? Math.max(0, Math.min(1, cB.health)) : null,
        Zc = hc(Sc, Bc, nc),
        Cc = hc(null !== yB && void 0 !== yB ? yB : [], Bc, nc),
        Jc = {
          width: Mc.EFFECT_ICON_SIZE * gB.length,
          height: gB.length > 0 ? Mc.EFFECT_ICON_SIZE : 0
        },
        jB = Lc && Hc(Lc, "nametag") ? Fc(Lc) : 0,
        Rc = kB(null === lc || void 0 === lc ? void 0 : lc.height, Qc),
        iB = Lc && Hc(Lc, "healthbar") ? Fc(Lc) : 0,
        Kc = "never" === (null !== (Ic = null === lc || void 0 === lc ? void 0 : lc.display) && void 0 !== Ic ? Ic : "onDamage") ? 0 : Rc + iB,
        xB = Math.max(Jc.height, jB),
        dc = Math.max(Mc.VERTICAL_PADDING, Kc, jB);
      let Ac = Math.max(Zc.width, Cc.width, Jc.width);
      if (Lc) {
        const cB = Fc(Lc) + Mc.HORIZONTAL_PADDING / 2;
        Ac = Math.max(Ac, Math.max(Zc.width, Cc.width) + Mc.HORIZONTAL_PADDING + 2 * cB)
      }
      const Gc = Zc.height + Cc.height + xB + dc,
        cn = Zc.width + Mc.HORIZONTAL_PADDING,
        BB = Cc.width + Mc.HORIZONTAL_PADDING,
        nB = Math.max(cn, BB),
        VB = (Ac - nB) / 2,
        IB = Math.max(Jc.height, jB);
      return {
        width: Ac,
        height: Gc,
        draw: cB => {
          const Bc = [];
          if (cB.fillStyle = zB, cB.fillRect(VB, IB, nB, Zc.height), aB(Sc, (Ac - cn) / 2 + Mc.HORIZONTAL_PADDING / 2, IB, Zc.height, cB, nc, Bc), yB) {
            const Vc = IB + Zc.height;
            cB.fillStyle = pc, cB.fillRect(VB, Vc, nB, Cc.height), aB(yB, (Ac - BB) / 2 + Mc.HORIZONTAL_PADDING / 2, Vc, Cc.height, cB, nc, Bc)
          }
          let Vc = null;
          if (null !== Uc) {
            const Bc = Gc - Rc - iB;
            null !== lc && void 0 !== lc && lc.backgroundColour && (cB.fillStyle = lc.backgroundColour, cB.fillRect(VB, Bc, nB, Rc)), cB.fillStyle = function(cB, Bc) {
              const nc = null === cB || void 0 === cB ? void 0 : cB.foregroundColour;
              if ("string" === typeof nc) return nc;
              const Vc = [...Array.isArray(nc) && nc.length > 0 ? nc : Dc].sort(((cB, Bc) => cB.healthFraction - Bc.healthFraction)),
                Ic = Vc.find((cB => Bc <= cB.healthFraction));
              return (null !== Ic && void 0 !== Ic ? Ic : Vc[Vc.length - 1]).colour
            }(lc, Uc), cB.fillRect(VB, Bc, Math.round(nB * Uc), Rc), Vc = {
              x: VB,
              y: Bc,
              width: nB,
              height: Rc
            }
          }
          if (Lc) {
            const Bc = [];
            Hc(Lc, "nametag") && Bc.push({
              x: VB,
              y: IB,
              width: nB,
              height: Zc.height + (yB ? Cc.height : 0)
            }), Vc && Hc(Lc, "healthbar") && Bc.push(Vc), Bc.length > 0 && function(cB, Bc, nc) {
              const Vc = Xc(Bc),
                Ic = Vc / 2,
                rB = cB => cB.width > 0 && cB.height > 0,
                uc = nc.map((cB => ({
                  x: cB.x + Ic,
                  y: cB.y + Ic,
                  width: cB.width - Vc,
                  height: cB.height - Vc
                }))).filter(rB);
              if (0 === uc.length) return;
              const sc = Bc => {
                const nc = Bc.filter(rB);
                if (0 !== nc.length) {
                  cB.beginPath();
                  for (const Bc of nc) cB.rect(Bc.x, Bc.y, Bc.width, Bc.height);
                  cB.stroke()
                }
              };
              if (cB.save(), cB.strokeStyle = Bc.colour, cB.lineWidth = Vc, cB.lineJoin = "round", "glow" === Bc.style) cB.shadowColor = Bc.colour, cB.shadowBlur = Vc * vB, sc(uc), sc(uc);
              else if ("double" === Bc.style) {
                sc(uc);
                const cB = Vc + 2;
                sc(uc.map((Bc => ({
                  x: Bc.x + cB,
                  y: Bc.y + cB,
                  width: Bc.width - 2 * cB,
                  height: Bc.height - 2 * cB
                }))))
              } else sc(uc);
              cB.restore()
            }(cB, Lc, Bc)
          }
          Yc(Bc, cB);
          for (let Ic = 0; Ic < gB.length; Ic++) {
            const Bc = nc.effectImage(gB[Ic]);
            Bc && (cB.imageSmoothingEnabled = !1, cB.drawImage(Bc, 5 + Ec * Ic, 5, Nc, Nc))
          }
        }
      }
    }
    var jB = nc(37163);
    const Rc = 256,
      iB = 1024,
      Kc = {
        width: 1,
        height: 7 / 8
      };
    var xB = nc(37167);
    const dc = {
      leaderboard: ""
    };
    var Ac = nc(40540);
    const Gc = {
        Nametag: 1,
        MultilineText: 2,
        Board: 3,
        Leaderboard: 4
      },
      cn = 2048,
      BB = 256,
      nB = 10,
      VB = 4,
      IB = 65536,
      rn = new TextDecoder;
    let uB = Ac.n,
      sB = -1;
    const MB = new Map,
      PB = new Map;
    let qn = 0;
    const OB = new TextEncoder;

    function TB(cB, Bc) {
      const nc = OB.encode(JSON.stringify(Bc)),
        Vc = new Uint8Array(nc.length + 1);
      return Vc[0] = cB, Vc.set(nc, 1), Vc
    }
    const fB = {
        name: "Ag",
        info: null,
        colour: "default",
        ranks: [],
        effects: [],
        health: .5,
        cB: null,
        hideNameSeed: null
      },
      mn = [TB(Gc.Nametag, fB), TB(Gc.Nametag, {
        ...fB,
        info: {
          content: [{
            str: "Ag"
          }],
          subtitle: ["Ag"]
        }
      }), TB(Gc.MultilineText, {
        box: {
          content: ["Ag"]
        },
        shown: null
      }), ...Vc.d.map(((cB, Bc) => TB(Gc.Board, {
        shared: {
          text: "Ag",
          textSize: Bc
        },
        w: 0,
        h: 0
      })))];

    function eB(cB) {
      (0, Ac.c)().then((() => {
        if (cB()) return;
        const Bc = (0, Ic.f)(1, 1, {
          willReadFrequently: !0
        });
        var nc;
        Bc && (nc = Bc.canvas, mn.map((cB => an(cB, nc))))
      }))
    }
    let tn = Ac.q;

    function SB() {
      MB.clear(), PB.clear()
    }

    function yn(cB, Bc) {
      const nc = cB.get(Bc);
      return void 0 !== nc && (cB.delete(Bc), cB.set(Bc, nc)), nc
    }

    function zn(cB, Bc, nc) {
      cB.set(Bc, nc), cB.size > BB && cB.delete(cB.keys().next().value)
    }

    function pB(cB, Bc, nc) {
      if (cB === Gc.Nametag) {
        let cB = yn(MB, Bc);
        return void 0 === cB && (cB = Jc(JSON.parse(Bc), nc, uB), zn(MB, Bc, cB)), cB
      }
      if (cB === Gc.MultilineText) {
        var Ic;
        const cB = JSON.parse(Bc),
          Vc = JSON.stringify(null !== (Ic = cB.box) && void 0 !== Ic ? Ic : null),
          rB = "number" === typeof cB.shown ? cB.shown : null;
        let uc = yn(PB, Vc);
        void 0 === uc && (uc = gB(cB.box, nc, uB), zn(PB, Vc, uc));
        const sc = null === rB ? null : Math.min(Math.max(0, Math.floor(rB)), uc.chars),
          Mc = uc;
        return {
          width: Mc.width,
          height: Mc.height,
          draw: cB => {
            Mc.draw(cB, sc)
          }
        }
      }
      if (cB === Gc.Board) return function(cB, Bc) {
        var nc;
        if (!Bc.canSeePlayerWrittenText) return null;
        const {
          shared: Ic,
          w: rB = 0,
          h: uc = 0
        } = cB, sc = !rB;
        let Mc;
        if (sc) {
          var Pc, qB;
          Mc = null !== (Pc = null === Ic || void 0 === Ic || null === (qB = Ic.text) || void 0 === qB ? void 0 : qB.toString()) && void 0 !== Pc ? Pc : ""
        } else {
          if ("string" !== typeof(null === Ic || void 0 === Ic ? void 0 : Ic.text)) return null;
          Mc = Ic.text
        }
        if ("" === Mc.trim()) return null;
        const Oc = null !== (nc = null === Ic || void 0 === Ic ? void 0 : Ic.textSize) && void 0 !== nc ? nc : 0,
          Tc = Vc.d[Oc].ingameFontSize;
        let fc = Kc,
          mB = Rc;
        sc || (Mc = (0, Vc.j)(Mc, Oc, rB, uc), fc = (0, Vc.o)(rB, uc), mB = Math.min(Rc, iB / Math.max(fc.width, fc.height)));
        const ec = Math.round(mB * fc.width),
          tB = Math.round(mB * fc.height),
          Sc = mB / Rc;
        return {
          width: ec,
          height: tB,
          draw: cB => {
            jB.b.fontSize = Tc * Sc, jB.b.fontWeight = "bold", jB.b.font = "'Jetbrains Mono', monospace", jB.b.drawText(cB, Mc, 0, (-10 - 7 * Oc) * Sc, ec, tB)
          }
        }
      }(JSON.parse(Bc), uB);
      if (cB === Gc.Leaderboard) return function(cB, Bc, nc) {
        var Vc;
        const Ic = (0, xB.n)(cB.opts, dc),
          rB = (0, xB.h)(Ic, nc),
          uc = {
            top: (0, xB.l)(Ic, (0, xB.o)(cB.top)),
            around: null !== (Vc = cB.around) && void 0 !== Vc ? Vc : null,
            showPlayerText: Bc.canSeePlayerWrittenText,
            localPlayerDbId: Bc.localPlayerDbId
          };
        return {
          width: rB.pixelWidth,
          height: rB.pixelHeight,
          draw: cB => {
            const {
              a: Bc,
              d: nc
            } = cB.getTransform();
            (0, xB.d)(cB, Math.round(rB.pixelWidth * Bc), Math.round(rB.pixelHeight * nc), rB, Ic, uc)
          }
        }
      }(JSON.parse(Bc), uB, cn);
      throw new Error(`unknown text plane kind ${cB}`)
    }
    const hB = 2 ** Math.floor(Math.log2(cn));

    function an(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Vc = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      try {
        if (cB.length < 2) return [0, 0];
        const rB = (0, Ic.b)(Bc);
        if (!rB) return [0, 0];
        const uc = tn();
        let sc;
        uc !== sB && (sB = uc, SB()), rB.save();
        try {
          sc = pB(cB[0], rn.decode(cB.subarray(1)), rB)
        } finally {
          rB.restore()
        }
        if (null === sc || !(sc.width > 0 && sc.height > 0)) return [0, 0];
        const Mc = Math.min(1, cn / sc.width, cn / sc.height),
          Pc = cB => Vc ? function(cB) {
            const Bc = 2 ** Math.ceil(Math.log2(cB));
            return Math.min(hB, Bc - cB > cB - Bc / 2 ? Bc / 2 : Bc)
          }(cB) : Math.min(cn, Math.ceil(cB * Mc)),
          [qB, Oc] = [Pc(sc.width), Pc(sc.height)];
        ! function(cB, Bc, nc, Vc, Ic) {
          const rB = Math.max(cB.width, nc),
            uc = Math.max(cB.height, Vc),
            sc = Ic || rB * uc > Math.max(VB * nc * Vc, IB),
            [Mc, Pc] = sc ? [nc, Vc] : [rB, uc];
          Mc === cB.width && Pc === cB.height ? Bc.clearRect(0, 0, Mc, Pc) : (cB.width = Mc, cB.height = Pc)
        }(Bc, rB, qB, Oc, nc), rB.save();
        try {
          const [cB, Bc] = Vc ? [qB / sc.width, Oc / sc.height] : [Mc, Mc];
          1 === cB && 1 === Bc || rB.scale(cB, Bc), sc.draw(rB)
        } finally {
          rB.restore()
        }
        return [qB, Oc]
      } catch (rB) {
        ! function(cB, Bc) {
          qn < nB && (qn++, console.warn(`[bloxd-wasm-client] ${cB}`, Bc))
        }("could not raster a text plane", rB);
        try {
          Bc.width = 1
        } catch {}
        return [0, 0]
      }
    }
  },
  6945: (cB, Bc) => {
    var nc = "youtube",
      Vc = [61802],
      Ic = "f167",
      rB = "M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6l0-162.4 142.7 81.2-142.7 81.2z";
    Bc.e = {
      prefix: "fab",
      iconName: nc,
      icon: [576, 512, Vc, Ic, rB]
    }, Bc.h = Bc.e
  },
  5796: (cB, Bc) => {
    Object.defineProperty(Bc, "__esModule", {
      value: !0
    });
    var nc = "bolt",
      Vc = [9889, "zap"],
      Ic = "f0e7",
      rB = "M338.8-9.9c11.9 8.6 16.3 24.2 10.9 37.8L271.3 224 416 224c13.5 0 25.5 8.4 30.1 21.1s.7 26.9-9.6 35.5l-288 240c-11.3 9.4-27.4 9.9-39.3 1.3s-16.3-24.2-10.9-37.8L176.7 288 32 288c-13.5 0-25.5-8.4-30.1-21.1s-.7-26.9 9.6-35.5l288-240c11.3-9.4 27.4-9.9 39.3-1.3z";
    Bc.definition = {
      prefix: "fas",
      iconName: nc,
      icon: [448, 512, Vc, Ic, rB]
    }, Bc.faBolt = Bc.definition, Bc.prefix = "fas", Bc.iconName = nc, Bc.width = 448, Bc.height = 512, Bc.ligatures = Vc, Bc.unicode = Ic, Bc.svgPathData = rB, Bc.aliases = Vc
  },
  6467: (cB, Bc) => {
    var nc = "person-military-pointing",
      Vc = [],
      Ic = "e54a",
      rB = "M214.9 14.1C202 15.2 192 26 192 39 192 52.8 203.2 64 217 64l151 0c8.8 0 16-7.2 16-16l0-30.6C384 8 376 .7 366.7 1.4L214.9 14.1zM208 112c0 44.2 35.8 80 80 80s80-35.8 80-80c0-5.5-.6-10.8-1.6-16L209.6 96c-1 5.2-1.6 10.5-1.6 16zM40 224c-22.1 0-40 17.9-40 40s17.9 40 40 40l152 0 0 89.4 162.8-162.8c-13.3-4.3-27.3-6.5-41.6-6.5L40 224zm345.7 20.9l-171.1 171.1 169.4 0 0-46.3 53.6 90.6c11.2 19 35.8 25.3 54.8 14.1s25.3-35.8 14.1-54.8L430.3 290.8c-11.2-19-26.6-34.5-44.6-45.9zM192 448l0 32c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-32-192 0z";
    Bc.b = {
      prefix: "fas",
      iconName: nc,
      icon: [512, 512, Vc, Ic, rB]
    }, Bc.c = Bc.b
  },
  6587: (cB, Bc) => {
    var nc = "sparkle",
      Vc = [],
      Ic = "e5d6",
      rB = "M278.5 15.6C275 6.2 266 0 256 0s-19 6.2-22.5 15.6L174.2 174.2 15.6 233.5C6.2 237 0 246 0 256s6.2 19 15.6 22.5l158.6 59.4 59.4 158.6C237 505.8 246 512 256 512s19-6.2 22.5-15.6l59.4-158.6 158.6-59.4C505.8 275 512 266 512 256s-6.2-19-15.6-22.5L337.8 174.2 278.5 15.6z";
    Bc.c = {
      prefix: "fas",
      iconName: nc,
      icon: [512, 512, Vc, Ic, rB]
    }, Bc.f = Bc.c
  },
  6672: (cB, Bc) => {
    var nc = "user",
      Vc = [128100, 62144, 62470, "user-alt", "user-large"],
      Ic = "f007",
      rB = "M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z";
    Bc.c = {
      prefix: "fas",
      iconName: nc,
      icon: [448, 512, Vc, Ic, rB]
    }, Bc.g = Bc.c
  },
  6791: (cB, Bc) => {
    var nc = "wrench",
      Vc = [128295],
      Ic = "f0ad",
      rB = "M509.4 98.6c7.6-7.6 20.3-5.7 24.1 4.3 6.8 17.7 10.5 37 10.5 57.1 0 88.4-71.6 160-160 160-17.5 0-34.4-2.8-50.2-8L146.9 498.9c-28.1 28.1-73.7 28.1-101.8 0s-28.1-73.7 0-101.8L232 210.2c-5.2-15.8-8-32.6-8-50.2 0-88.4 71.6-160 160-160 20.1 0 39.4 3.7 57.1 10.5 10 3.8 11.8 16.5 4.3 24.1l-88.7 88.7c-3 3-4.7 7.1-4.7 11.3l0 41.4c0 8.8 7.2 16 16 16l41.4 0c4.2 0 8.3-1.7 11.3-4.7l88.7-88.7z";
    Bc.e = {
      prefix: "fas",
      iconName: nc,
      icon: [576, 512, Vc, Ic, rB]
    }, Bc.i = Bc.e
  },
  6811: (cB, Bc, nc) => {
    var Vc = nc(5796);
    Bc.b = {
      prefix: Vc.prefix,
      iconName: Vc.iconName,
      icon: [Vc.width, Vc.height, Vc.aliases, Vc.unicode, Vc.svgPathData]
    }, Bc.f = Bc.b, Vc.prefix, Vc.iconName, Vc.width, Vc.height, Vc.aliases, Vc.unicode, Vc.svgPathData, Vc.aliases
  },
  38831: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/JetBrainsMonoNL-ExtraBold.e920f8e3b489009b4837.woff2"
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);