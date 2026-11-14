export const id = 75;
export const ids = [75];
export const modules = {
  39433: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      WorldCodeAiPanel: () => IO,
      default: () => rT
    });
    var Vc = nc(73),
      Ic = nc(912),
      rB = nc.n(Ic),
      uc = nc(957);

    function sc(cB) {
      let {
        title: Bc,
        children: nc,
        isCalm: Ic = !1,
        isElsewhere: sc = !1,
        defaultOpen: Mc = !1,
        isOpen: Pc,
        onToggle: qB,
        className: Oc
      } = cB;
      const [Tc, fc] = (0, Vc.useState)(Mc), mB = null !== Pc && void 0 !== Pc ? Pc : Tc;
      return (0, uc.jsxs)("div", {
        className: rB()("WorldCodeAiLog", Ic && "WorldCodeAiLog-calm", sc && "WorldCodeAiLog-elsewhere", mB && "WorldCodeAiLog-open", Oc),
        children: [(0, uc.jsxs)("button", {
          className: "WorldCodeAiLogToggle",
          "aria-expanded": mB,
          onClick: () => {
            void 0 === Pc && fc(!mB), null === qB || void 0 === qB || qB(!mB)
          },
          children: [(0, uc.jsx)("span", {
            className: "WorldCodeAiLogChevron",
            "aria-hidden": "true",
            children: mB ? "\u25be" : "\u25b8"
          }), Bc]
        }), mB && (0, uc.jsx)("div", {
          className: "WorldCodeAiLogBody",
          children: nc
        })]
      })
    }
    var Mc = nc(1566),
      Pc = nc(5477),
      qB = nc(1255),
      Oc = nc(926),
      Tc = nc(3795),
      fc = nc(35516),
      mB = nc(1406),
      ec = nc(3874),
      tB = nc(5468);
    const Sc = new URL(mB.b).host;

    function yB(cB) {
      const Bc = cB.trim();
      let nc;
      try {
        const cB = /^docs\//i.test(Bc) ? `${mB.b}/` : `${mB.b}/docs/`,
          Vc = Bc.toLowerCase().replace(/^www\./, "").startsWith(`${Sc}/`);
        nc = new URL(Vc ? `https://${Bc}` : Bc, cB)
      } catch {
        return null
      }
      if ("https:" !== nc.protocol && "http:" !== nc.protocol || nc.host !== Sc && nc.host !== `www.${Sc}`) return null;
      const Vc = nc.pathname.toLowerCase();
      return zB(Vc) || null !== (0, ec.C)(Vc) ? Vc : (0, ec.z)(Vc)
    }

    function zB(cB) {
      return cB === ec.g || cB === ec.m
    }

    function pc(cB) {
      const Bc = yB(cB);
      return null === Bc ? cB : `${mB.b}${Bc}`
    }
    var hc = nc(626),
      aB = nc(39363),
      lc = nc.n(aB);

    function Yc(cB) {
      const Bc = [];
      let nc = 0;
      return cB.split("\n").forEach(((cB, Vc) => {
        Bc.push({
          text: cB,
          from: nc,
          index: Vc
        }), nc += cB.length + 1
      })), Bc
    }

    function Lc(cB) {
      return cB.replace(/^\s*\/\/.*$/, "").replace(/\s+/g, "").replace(/['`]/g, '"').replace(/[;,]+$/, "")
    }

    function gB(cB, Bc, nc) {
      if (0 === Bc.length) return null;
      let Vc = null;
      for (let Ic = 0; Ic + Bc.length <= cB.length; Ic++) {
        if (Bc.every(((Bc, Vc) => nc(cB[Ic + Vc].text) === Bc))) {
          if (Vc) return {
            ...Vc,
            isOnly: !1
          };
          const nc = cB[Ic + Bc.length - 1];
          Vc = {
            from: cB[Ic].from,
            to: nc.from + nc.text.length
          }
        }
      }
      return Vc ? {
        ...Vc,
        isOnly: !0
      } : null
    }

    function Uc(cB, Bc) {
      if ("" === Bc.trim()) return null;
      const nc = Yc(cB),
        Vc = function(cB) {
          return cB.split("\n").map((cB => cB.trim())).filter(((cB, Bc, nc) => "" !== cB || Bc > 0 && Bc < nc.length - 1))
        }(Bc),
        Ic = gB(nc, Vc, (cB => cB.trim()));
      if (null !== Ic) return {
        from: Ic.from,
        to: Ic.to,
        isLoose: !Ic.isOnly
      };
      const rB = cB => cB.trim().replace(/;+$/, ""),
        uc = gB(nc, Vc.map(rB), rB);
      if (null !== uc) {
        const nc = cB.indexOf(Bc),
          Vc = -1 !== nc && (nc < uc.from || nc >= uc.to);
        return {
          from: uc.from,
          to: uc.to,
          isLoose: !uc.isOnly || Vc
        }
      }
      const sc = cB.indexOf(Bc);
      if (-1 !== sc) {
        var Mc, Pc, qB;
        const nc = /\w/.test(Bc[0]) && /\w/.test(null !== (Mc = cB[sc - 1]) && void 0 !== Mc ? Mc : "") || /\w/.test(null !== (Pc = Bc.at(-1)) && void 0 !== Pc ? Pc : "") && /\w/.test(null !== (qB = cB[sc + Bc.length]) && void 0 !== qB ? qB : "");
        return {
          from: sc,
          to: sc + Bc.length,
          isLoose: nc || -1 !== cB.indexOf(Bc, sc + 1)
        }
      }
      const Oc = Bc.split("\n").map(Lc).filter(Boolean),
        Tc = gB(nc.filter((cB => "" !== Lc(cB.text))), Oc, Lc);
      return null === Tc ? null : {
        from: Tc.from,
        to: Tc.to,
        isLoose: !0
      }
    }

    function bB(cB) {
      var Bc, nc;
      return null !== (Bc = null === (nc = /^[ \t]*/.exec(cB)) || void 0 === nc ? void 0 : nc[0]) && void 0 !== Bc ? Bc : ""
    }

    function Zc(cB, Bc, nc, Vc) {
      if (Bc.from > 0 && "\n" !== cB[Bc.from - 1]) return Vc;
      const Ic = cB.slice(Bc.from, Bc.to).split("\n").filter((cB => "" !== cB.trim())),
        rB = nc.split("\n").filter((cB => "" !== cB.trim()));
      if (0 === Ic.length || 0 === rB.length) return Vc;
      const uc = bB(Ic[0]),
        sc = bB(rB[0]);
      if (uc === sc) return Vc;
      const Mc = rB.length > 1 && rB.length === Ic.length && rB.slice(1).every(((cB, Bc) => bB(cB) === bB(Ic[Bc + 1]))),
        Pc = Vc.split("\n"),
        qB = Pc.findIndex((cB => "" !== cB.trim()));
      if (-1 === qB || bB(Pc[qB]) === uc) return Vc;
      let Oc = !1;
      return Pc.map(((cB, Bc) => {
        var nc, Vc;
        const Ic = Oc;
        return (null !== (nc = null === (Vc = cB.replace(/\\`/g, "").match(/`/g)) || void 0 === Vc ? void 0 : Vc.length) && void 0 !== nc ? nc : 0) % 2 === 1 && (Oc = !Oc), Ic || Mc && Bc !== qB ? cB : function(cB, Bc, nc) {
          if ("" === cB.trim()) return cB;
          const Vc = bB(cB);
          return Vc.startsWith(Bc) ? nc + cB.slice(Bc.length) : Bc.startsWith(Vc) ? nc.slice(0, Math.max(0, nc.length - (Bc.length - Vc.length))) + cB.trimStart() : cB
        }(cB, sc, uc)
      })).join("\n")
    }

    function Qc(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const Vc = new Map;
      for (const sc of cB.split("\n")) {
        const cB = sc.trim(),
          Bc = cB.replace(/;$/, "");
        "" === Bc || cB.endsWith(";") || Vc.has(Bc) || Vc.set(Bc, cB)
      }
      const Ic = Bc.split("\n");
      let rB = !1;
      const uc = Ic.map(((cB, Bc) => {
        var uc, sc, Mc;
        const Pc = rB;
        (null !== (uc = null === (sc = cB.replace(/\\`/g, "").match(/`/g)) || void 0 === sc ? void 0 : sc.length) && void 0 !== uc ? uc : 0) % 2 === 1 && (rB = !rB);
        const qB = cB.trim(),
          Oc = Vc.get(qB.replace(/;$/, ""));
        if (void 0 === Oc || Oc === qB || Pc || rB) return cB;
        const Tc = null !== (Mc = Ic.slice(Bc + 1).find((cB => "" !== cB.trim()))) && void 0 !== Mc ? Mc : nc;
        return /^(?:[([`+-]|\/(?![/*]))/.test(Tc.trim()) ? cB : cB.slice(0, cB.length - cB.trimStart().length) + Oc
      })).join("\n");
      return uc.trim() === cB.trim() && Bc.trim() !== cB.trim() ? Bc : uc
    }

    function Cc(cB) {
      var Bc;
      return null !== (Bc = cB.split("\n").find((cB => "" !== cB.trim()))) && void 0 !== Bc ? Bc : ""
    }

    function vB(cB, Bc) {
      if (cB === Bc) return 1;
      if (cB.length < 2 || Bc.length < 2) return 0;
      const nc = new Map;
      for (let uc = 0; uc < cB.length - 1; uc++) {
        var Vc;
        const Bc = cB.slice(uc, uc + 2);
        nc.set(Bc, (null !== (Vc = nc.get(Bc)) && void 0 !== Vc ? Vc : 0) + 1)
      }
      let Ic = 0;
      for (let uc = 0; uc < Bc.length - 1; uc++) {
        var rB;
        const cB = Bc.slice(uc, uc + 2),
          Vc = null !== (rB = nc.get(cB)) && void 0 !== rB ? rB : 0;
        Vc > 0 && (nc.set(cB, Vc - 1), Ic++)
      }
      return 2 * Ic / (cB.length + Bc.length - 2)
    }

    function Dc(cB, Bc) {
      const nc = Bc.split("\n").map(Lc).filter(Boolean),
        Vc = Yc(cB).filter((cB => "" !== Lc(cB.text)));
      if (0 === nc.length || 0 === Vc.length) return null;
      const Ic = Math.min(nc.length, Vc.length);
      let rB = null;
      for (let sc = 0; sc + Ic <= Vc.length; sc++) {
        let cB = 0;
        for (let Bc = 0; Bc < Ic; Bc++) cB += vB(Lc(Vc[sc + Bc].text), nc[Bc]);
        cB /= nc.length, (null === rB || cB > rB.score) && (rB = {
          start: sc,
          score: cB
        })
      }
      if (null === rB || rB.score < .5) return null;
      const uc = Vc.slice(rB.start, rB.start + Ic);
      return {
        line: uc[0].index + 1,
        lastLine: uc[uc.length - 1].index + 1,
        text: uc.map((cB => cB.text.trim())).join("\n")
      }
    }

    function Nc(cB) {
      return lc().isFunctionExpression(cB) || lc().isArrowFunction(cB)
    }

    function Ec(cB) {
      return lc().isExpressionStatement(cB) && lc().isBinaryExpression(cB.expression) && lc().isPropertyAccessExpression(cB.expression.left) && ! function(cB) {
        return lc().isIdentifier(cB) && ("globalThis" === cB.text || "window" === cB.text || "self" === cB.text)
      }(cB.expression.left.expression)
    }

    function oc(cB, Bc, nc) {
      let Vc = nc;
      for (const rB of (null !== (Ic = lc().getLeadingCommentRanges(cB, Bc.getFullStart())) && void 0 !== Ic ? Ic : []).reverse()) {
        var Ic;
        if (/\n[^\S\n]*\n/.test(cB.slice(rB.end, Vc))) break;
        Vc = rB.pos
      }
      return Vc
    }

    function Wc(cB) {
      var Bc;
      const {
        parseDiagnostics: nc
      } = cB;
      return (null !== (Bc = null === nc || void 0 === nc ? void 0 : nc.length) && void 0 !== Bc ? Bc : 0) > 0
    }

    function wc(cB) {
      const Bc = lc().createSourceFile("worldCode.js", cB, lc().ScriptTarget.Latest, !1, lc().ScriptKind.JS),
        nc = [],
        Vc = (Ic, rB) => {
          const uc = function(cB) {
            var Bc, nc;
            if (lc().isFunctionDeclaration(cB)) return null !== (Bc = null === (nc = cB.name) || void 0 === nc ? void 0 : nc.text) && void 0 !== Bc ? Bc : null;
            if (lc().isVariableStatement(cB) && 1 === cB.declarationList.declarations.length) {
              const Bc = cB.declarationList.declarations[0];
              return lc().isIdentifier(Bc.name) && Bc.initializer && Nc(Bc.initializer) ? Bc.name.text : null
            }
            if (lc().isExpressionStatement(cB) && lc().isBinaryExpression(cB.expression) && cB.expression.operatorToken.kind === lc().SyntaxKind.EqualsToken && Nc(cB.expression.right)) {
              const Bc = cB.expression.left;
              return lc().isIdentifier(Bc) ? Bc.text : lc().isPropertyAccessExpression(Bc) ? Bc.name.text : null
            }
            return null
          }(Ic);
          if (null !== uc) {
            const Vc = Ic.getStart(Bc);
            nc.push({
              name: uc,
              from: Vc,
              to: Ic.getEnd(),
              commentFrom: oc(cB, Ic, Vc),
              topLevel: rB,
              isProperty: Ec(Ic)
            })
          }
          lc().forEachChild(Ic, (cB => {
            Vc(cB, !1)
          }))
        };
      for (const Ic of Bc.statements) Vc(Ic, !0);
      return {
        functions: nc,
        hasErrors: Wc(Bc)
      }
    }

    function kB(cB) {
      return wc(cB).functions
    }

    function Xc(cB) {
      return cB.trim().replace(/^(?:callback:|function\s+)/, "").replace(/\s*\(.*$/s, "").trim()
    }

    function Hc(cB, Bc) {
      var nc;
      const Vc = cB.filter((cB => cB.name === Bc)),
        Ic = Vc.filter((cB => !cB.isProperty)),
        rB = Ic.length > 0 ? Ic : Vc;
      return null !== (nc = rB.find((cB => cB.topLevel))) && void 0 !== nc ? nc : rB[0]
    }

    function Fc(cB, Bc) {
      return "" === cB.trim() ? `${Bc.trim()}\n` : `${cB.replace(/\s*$/,"")}\n\n${Bc.trim()}\n`
    }

    function Jc(cB, Bc, nc) {
      var Vc, Ic;
      const rB = wc(cB),
        {
          functions: uc
        } = rB,
        sc = kB(nc),
        Mc = null !== (Vc = sc.find((cB => cB.topLevel && !cB.isProperty))) && void 0 !== Vc ? Vc : sc.find((cB => cB.topLevel)),
        Pc = Xc(Bc),
        qB = Mc ? Hc(uc, Mc.name) : void 0,
        Oc = null !== (Ic = void 0 !== qB && !sc.some((cB => cB.topLevel && cB.name === Pc)) ? qB : Hc(uc, Pc)) && void 0 !== Ic ? Ic : qB;
      return Oc ? jB(cB, rB, Oc, sc, nc) : Fc(cB, nc)
    }

    function jB(cB, Bc, nc, Vc, Ic) {
      let {
        functions: rB,
        hasErrors: uc
      } = Bc;
      const sc = rB.some((cB => cB.from > nc.from && cB.to <= nc.to && !Vc.some((Bc => Bc.name === cB.name))));
      if (uc && sc) return null;
      const Mc = /^\s*(?:\/\/|\/\*)/.test(Ic) ? nc.commentFrom : nc.from;
      return cB.slice(0, Mc) + Qc(cB.slice(Mc, nc.to), Ic.trim(), Cc(cB.slice(nc.to))) + cB.slice(nc.to)
    }

    function Rc(cB, Bc, nc, Vc, Ic) {
      const rB = Vc.trim();
      if (rB.includes("\n") || !rB.endsWith("{")) return null;
      const uc = wc(cB),
        sc = uc.functions.find((Vc => Vc.topLevel && iB(cB, Vc.from) <= Bc && nc < Vc.to && !cB.slice(Vc.from, nc).includes("\n"))),
        Mc = wc(Ic),
        Pc = Mc.functions.filter((cB => cB.topLevel)),
        qB = !Mc.hasErrors && (1 === Pc.length || Pc.some((cB => cB.name === (null === sc || void 0 === sc ? void 0 : sc.name)))),
        Oc = 1 === Pc.length && Pc[0].name !== (null === sc || void 0 === sc ? void 0 : sc.name) ? Pc[0].name : void 0,
        Tc = void 0 === Oc ? void 0 : uc.functions.find((cB => cB.topLevel && cB.name === Oc));
      return sc && qB ? jB(cB, uc, null !== Tc && void 0 !== Tc ? Tc : sc, Mc.functions, Ic) : function(cB, Bc, nc, Vc, Ic) {
        const rB = lc().createSourceFile("worldCode.js", cB, lc().ScriptTarget.Latest, !0, lc().ScriptKind.JS),
          uc = rB.statements.find((Vc => {
            const Ic = Vc.getStart(rB);
            return iB(cB, Ic) <= Bc && nc < Vc.getEnd() && !cB.slice(Ic, nc).includes("\n")
          })),
          sc = lc().createSourceFile("replace.js", Ic.trim(), lc().ScriptTarget.Latest, !0, lc().ScriptKind.JS),
          Mc = 1 === sc.statements.length ? sc.statements[0] : void 0;
        if (!uc || !Mc || Wc(sc) || Mc.kind !== uc.kind || !Mc.getText(sc).startsWith(Vc)) return null;
        const Pc = uc.getStart(rB);
        return cB.slice(0, Pc) + Ic.trim() + cB.slice(uc.getEnd())
      }(cB, Bc, nc, rB, Ic)
    }

    function iB(cB, Bc) {
      let nc = Bc;
      for (; nc > 0 && (" " === cB[nc - 1] || "\t" === cB[nc - 1]);) nc--;
      return 0 === nc || "\n" === cB[nc - 1] ? nc : Bc
    }

    function Kc(cB, Bc, nc) {
      const Vc = Bc.trim().toLowerCase();
      if ("" !== cB.trim() && ("top" === Vc || "start" === Vc)) return `${nc.trim()}\n\n${cB.replace(/^\s+/,"")}`;
      const Ic = "end" === Vc ? void 0 : Hc(kB(cB), Xc(Bc));
      return Ic ? `${cB.slice(0,Ic.to)}\n\n${nc.trim()}${cB.slice(Ic.to)}` : Fc(cB, nc)
    }

    function xB(cB) {
      return [...new Set(kB(cB).filter((cB => cB.topLevel)).map((cB => cB.name)))]
    }
    const dc = 120,
      Ac = /\b(?:my|his|her|their)\s+(?:real\s+|full\s+|first\s+|last\s+)?(?:name|age|school|address|email|phone|birthday)\b|\b(?:i am|i'm)\s+\d+\b|\b\d+\s+years?\s+old\b|\be-?mail\b|\bphone number\b|\bpassword\b|\bwhere (?:i|we) live\b/i;

    function Gc(cB) {
      let Bc = cB.replace(/\s+/g, " ").trim();
      if ("" === Bc || Ac.test(Bc)) return null;
      if (Bc.length > dc) {
        const cB = Bc.slice(0, dc);
        Bc = `${cB.slice(0,Math.max(cB.lastIndexOf(" "),60)).trimEnd()}\u2026`
      }
      return Bc.charAt(0).toUpperCase() + Bc.slice(1)
    }
    const cn = /(?:===?\s*|\bcase\s+|startsWith\(\s*)["'`]\/?([a-zA-Z][\w-]{0,20})/g;

    function BB(cB) {
      var Bc, nc;
      const Vc = null === (Bc = /\(([^)]*)\)/.exec(cB)) || void 0 === Bc || null === (nc = Bc[1].split(",")[1]) || void 0 === nc ? void 0 : nc.trim();
      return Vc && /^[A-Za-z_$][\w$]*$/.test(Vc) ? [...cB.matchAll(/\b([A-Za-z_$][\w$]*)\s*\(([^()]*)\)/g)].flatMap((cB => cB[2].split(",").some((cB => cB.trim() === Vc)) ? [cB[1]] : [])) : []
    }

    function nB(cB, Bc) {
      const nc = new Set,
        Vc = new Set,
        Ic = new Set,
        rB = Object.values(cB).map((cB => {
          const Bc = kB(cB),
            nc = Bc.filter((cB => "playerCommand" === cB.name)).map((Bc => cB.slice(Bc.from, Bc.to)));
          return {
            text: cB,
            found: Bc,
            own: nc
          }
        })),
        uc = new Set(rB.flatMap((cB => {
          let {
            own: Bc
          } = cB;
          return Bc.flatMap(BB)
        })));
      for (const {
          text: Mc,
          found: Pc,
          own: qB
        }
        of rB) {
        for (const Ic of xB(Mc)) Bc.has(Ic) ? nc.add(Ic) : Vc.add(Ic);
        const cB = [...qB, ...Pc.filter((cB => "playerCommand" !== cB.name && uc.has(cB.name))).map((cB => Mc.slice(cB.from, cB.to)))],
          rB = cB.length > 0 || !/\bplayerCommand\b/.test(Mc) ? cB : [Mc];
        for (const Bc of rB)
          for (const cB of Bc.matchAll(cn)) Ic.add(`/${cB[1].split(/\s/)[0]}`)
      }
      const sc = cB => [...cB].slice(0, 12);
      return {
        callbacks: sc(nc),
        commands: sc(Ic),
        functions: sc(Vc)
      }
    }
    const VB = {
      onPlayerJoin: "When a player joins",
      onPlayerLeave: "When a player leaves",
      onPlayerChat: "When a player chats",
      playerCommand: "When a player types a /command",
      cn: "Runs all the time",
      onPlayerJump: "When a player jumps",
      onPlayerClick: "When a player clicks",
      onPlayerAttack: "When a player attacks",
      onPlayerChangeBlock: "When a player changes a block",
      onPlayerAttemptChangeBlock: "Before a player changes a block",
      onPlayerDamagingOtherPlayer: "When a player hits another player",
      onPlayerKilledOtherPlayer: "When a player defeats another player",
      onPlayerDamagingMob: "When a player hits a mob",
      onPlayerKilledMob: "When a player defeats a mob",
      onMobDamagingPlayer: "When a mob hits a player",
      onMobKilledPlayer: "When a mob defeats a player",
      onRespawnRequest: "When a player respawns",
      onPlayerPickedUpItem: "When a player picks something up",
      onPlayerDropItem: "When a player drops something",
      onPlayerBoughtShopItem: "When a player buys from the shop",
      onPlayerCraft: "When a player crafts",
      onPlayerOpenedChest: "When a player opens a chest",
      onPlayerSelectInventorySlot: "When a player picks a hotbar slot",
      onBlockStand: "While a player stands on a block",
      onPlayerPressedButton: "When a player presses a button",
      onWorldChangeBlock: "When a block changes",
      onClose: "When the game closes",
      doPeriodicSave: "When the game saves"
    };

    function IB(cB) {
      const Bc = VB[cB];
      if (Bc) return Bc;
      return `When: ${cB.replace(/^on/,"").replace(/([a-z])([A-Z])/g,"$1 $2").toLowerCase()}`
    }

    function rn(cB) {
      return Array.isArray(cB) && cB.every((cB => "string" === typeof cB))
    }
    const uB = /\b(?:game|minigame|tycoon|rpg|simulator|obby|shop|store|upgrades?|levels?|rounds?|teams?|quests?|leaderboards?|lobby|economy|inventory|bosse?s?|waves?|missions?)\b/gi,
      sB = /,|\band\b|\bthen\b|\bplus\b|\bwith\b|\balso\b/gi;

    function MB(cB) {
      var Bc, nc;
      const Vc = cB.trim().split(/\s+/).length,
        Ic = new Set((null !== (Bc = cB.match(uB)) && void 0 !== Bc ? Bc : []).map((cB => cB.toLowerCase().replace(/s$/, "")))).size,
        rB = (null !== (nc = cB.match(sB)) && void 0 !== nc ? nc : []).length;
      return Ic >= 2 && rB >= 2 || Vc >= 30 && rB >= 3
    }

    function PB(cB) {
      const Bc = cB.split(/\n|\|/).map((cB => cB.replace(/^\s*(?:[-*\u2022]|\d+[.)]|step\s*\d+[:.)]?)\s*/i, "").replace(/\s+/g, " ").trim())).filter((cB => "" !== cB)).slice(0, 5).map((cB => cB.length > 90 ? `${cB.slice(0,89).trimEnd()}\u2026` : cB));
      return Bc.length >= 2 ? Bc : []
    }
    var qn = nc(3914);

    function OB(cB) {
      return cB.replace(/^on/, "").replace(/^player/i, "").toLowerCase()
    }

    function TB(cB) {
      const Bc = new Set;
      for (const nc of cB.matchAll(/^(?:async\s+)?function\s+([A-Za-z_$][\w$]*)\s*\(/gm)) Bc.add(nc[1]);
      for (const nc of cB.matchAll(/^([A-Za-z_$][\w$]*)\s*=\s*(?:async\s+)?(?:function\b|\([^)]*\)\s*=>|[A-Za-z_$][\w$]*\s*=>)/gm)) Bc.add(nc[1]);
      return [...Bc]
    }

    function fB(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const Vc = new Set(Bc),
        Ic = new Map;
      for (const Oc of Bc) {
        var rB;
        const cB = OB(Oc);
        Ic.set(cB, [...null !== (rB = Ic.get(cB)) && void 0 !== rB ? rB : [], Oc])
      }
      const uc = TB(cB),
        sc = new Set(TB(nc)),
        Mc = [];
      let Pc = cB;
      for (const Oc of uc) {
        var qB;
        if (Vc.has(Oc) || sc.has(Oc) || !/^(on|player)[A-Z]/.test(Oc)) continue;
        const cB = null !== (qB = Ic.get(OB(Oc))) && void 0 !== qB ? qB : [];
        1 !== cB.length || uc.includes(cB[0]) || (Pc = (0, qn.v)(Pc, new RegExp(`${Oc}(?![\\w$])`, "g"), qn.l, (() => cB[0])), Mc.push({
          from: Oc,
          to: cB[0]
        }))
      }
      return {
        code: Pc,
        renames: Mc
      }
    }
    const mn = {
        functions: "api",
        callbacks: "callback",
        "client options": "clientOption"
      },
      eB = Object.keys(mn).map((cB => `"${cB}"`)).join(", ").replace(/, ([^,]*)$/, " or $1"),
      tn = {
        type: "string",
        description: "A few plain words for the creator on what this change does, under 80 characters"
      },
      SB = {
        readOnlyHint: !0,
        destructiveHint: !1,
        idempotentHint: !0,
        openWorldHint: !1
      },
      yn = [{
        name: "write_file",
        title: "Write a file",
        description: "Replaces a file with new code, or makes a new file",
        inputSchema: {
          type: "object",
          properties: {
            path: {
              type: "string",
              description: "The file's path, e.g. index.js"
            },
            why: tn,
            content: {
              type: "string",
              description: "The whole new file"
            }
          },
          required: ["path", "content"]
        },
        annotations: {
          readOnlyHint: !1,
          destructiveHint: !0,
          idempotentHint: !0,
          openWorldHint: !1
        }
      }, {
        name: "edit_file",
        title: "Change part of a file",
        description: "Changes one part of a file: the lines in search become the lines in replace",
        inputSchema: {
          type: "object",
          properties: {
            path: {
              type: "string",
              description: "The file's path, e.g. index.js"
            },
            why: tn,
            search: {
              type: "string",
              description: "Lines to find, copied exactly from the current file"
            },
            replace: {
              type: "string",
              description: "Lines to put instead"
            }
          },
          required: ["path", "search", "replace"]
        },
        annotations: {
          readOnlyHint: !1,
          destructiveHint: !0,
          idempotentHint: !1,
          openWorldHint: !1
        }
      }, {
        name: "replace_function",
        title: "Replace a function",
        description: "Replaces one whole function or callback, found by its name, with new code; adds it at the end when the file has none by that name",
        inputSchema: {
          type: "object",
          properties: {
            path: {
              type: "string",
              description: "The file's path, e.g. index.js"
            },
            name: {
              type: "string",
              description: "The function's or callback's name, e.g. onPlayerJoin"
            },
            why: tn,
            code: {
              type: "string",
              description: "The whole new function"
            }
          },
          required: ["path", "name", "code"]
        },
        annotations: {
          readOnlyHint: !1,
          destructiveHint: !0,
          idempotentHint: !0,
          openWorldHint: !1
        }
      }, {
        name: "insert_code",
        title: "Add new code",
        description: "Adds new code to a file without changing any code already there",
        inputSchema: {
          type: "object",
          properties: {
            path: {
              type: "string",
              description: "The file's path, e.g. index.js"
            },
            after: {
              type: "string",
              description: 'Where it goes: "top", "end", or the name of the function to put it after'
            },
            why: tn,
            code: {
              type: "string",
              description: "Only the new code"
            }
          },
          required: ["path", "after", "code"]
        },
        annotations: {
          readOnlyHint: !1,
          destructiveHint: !1,
          idempotentHint: !1,
          openWorldHint: !1
        }
      }, {
        name: "use_prefab",
        title: "Use a ready-made game",
        description: "Puts a prefab (ready-made, tested code for a game or a feature) into a file, with its settings filled in. The code goes in by itself and fits around the code already there",
        inputSchema: {
          type: "object",
          properties: {
            name: {
              type: "string",
              description: "The prefab's name, e.g. parkour"
            },
            settings: {
              type: "string",
              description: 'The settings to change, one per line as key: value, e.g. finishBlock: "Block of Gold"'
            },
            path: {
              type: "string",
              description: "The file's path, e.g. index.js"
            },
            why: tn
          },
          required: ["name"]
        },
        annotations: {
          readOnlyHint: !1,
          destructiveHint: !1,
          idempotentHint: !0,
          openWorldHint: !1
        }
      }, {
        name: "add_world_code",
        title: "Add to World Code",
        description: "For a code block: the part of the request that needs World Code, which the creator adds there",
        inputSchema: {
          type: "object",
          properties: {
            code: {
              type: "string",
              description: "Only the World Code to add"
            }
          },
          required: ["code"]
        },
        annotations: {
          readOnlyHint: !1,
          destructiveHint: !1,
          idempotentHint: !0,
          openWorldHint: !1
        }
      }, {
        name: "edit_code_in_place",
        title: "Change my code now",
        description: "Changes one part of the code open in the editor straight away, as the Apply button does: the lines in search become the lines in replace",
        inputSchema: {
          type: "object",
          properties: {
            why: tn,
            search: {
              type: "string",
              description: "Lines to find, copied exactly from the open code"
            },
            replace: {
              type: "string",
              description: "Lines to put instead"
            }
          },
          required: ["search", "replace"]
        },
        annotations: {
          readOnlyHint: !1,
          destructiveHint: !0,
          idempotentHint: !1,
          openWorldHint: !1
        },
        _meta: {
          appliesAtOnce: !0
        }
      }, {
        name: "export_game",
        title: "Save my game",
        description: "Saves the world and its code as the creator's custom game, by sending //export in chat. Only this call saves: an answer that says it saved without it saves nothing",
        inputSchema: {
          type: "object",
          properties: {},
          required: []
        },
        annotations: {
          readOnlyHint: !1,
          destructiveHint: !1,
          idempotentHint: !0,
          openWorldHint: !1
        }
      }, {
        name: "switch_to_world_code",
        title: "Go to World Code",
        description: "For a code block: closes it and opens World Code, with a request waiting in World Code's AI Helper",
        inputSchema: {
          type: "object",
          properties: {
            request: {
              type: "string",
              description: "What to ask there; left out, it asks to add the answer's World Code part"
            }
          },
          required: []
        },
        annotations: {
          readOnlyHint: !1,
          destructiveHint: !1,
          idempotentHint: !0,
          openWorldHint: !1
        }
      }, {
        name: "ask_creator",
        title: "Ask you a question",
        description: "Asks the creator one multiple-choice question instead of changing code, only when the request is too unclear to build anything sensible. Never asks for personal details",
        inputSchema: {
          type: "object",
          properties: {
            question: {
              type: "string",
              description: "One short question"
            },
            choices: {
              type: "string",
              description: "2 to 4 short answers, one per line"
            },
            allow_other: {
              type: "string",
              description: '"true" to let them type their own answer too, "false" if the choices are all there is'
            }
          },
          required: ["question", "choices"]
        },
        annotations: {
          readOnlyHint: !0,
          destructiveHint: !1,
          idempotentHint: !0,
          openWorldHint: !1
        }
      }, {
        name: "plan",
        title: "Plan a big request in steps",
        description: "Splits a big request into 2 to 5 small steps instead of building it all at once. The creator builds and tries them one at a time. Writes no code: never in the same answer as a change",
        inputSchema: {
          type: "object",
          properties: {
            steps: {
              type: "string",
              description: "2 to 5 short steps, one per line, each small enough to build and try on its own"
            }
          },
          required: ["steps"]
        },
        annotations: {
          readOnlyHint: !0,
          destructiveHint: !1,
          idempotentHint: !0,
          openWorldHint: !1
        }
      }, {
        name: "remember",
        title: "Remember something about your game",
        description: "Suggests one short note about the creator's game (its idea, rules, or names in it) to keep in AI notes, which goes with every later request. The creator says yes or no before it is kept. Never personal details",
        inputSchema: {
          type: "object",
          properties: {
            note: {
              type: "string",
              description: "One short sentence about the game, under 120 characters"
            }
          },
          required: ["note"]
        },
        annotations: {
          readOnlyHint: !1,
          destructiveHint: !1,
          idempotentHint: !0,
          openWorldHint: !1
        }
      }, {
        name: "view_file",
        title: "Look at a file",
        description: "Shows the whole code of one of the creator's files, from the list of their files. Look at a file before changing it",
        inputSchema: {
          type: "object",
          properties: {
            path: {
              type: "string",
              description: "The file's path, e.g. shop.js"
            }
          },
          required: ["path"]
        },
        annotations: SB,
        _meta: {
          isLookup: !0
        }
      }, {
        name: "view_world_code",
        title: "Look at World Code",
        description: "For a code block: shows every World Code file, so the answer can change World Code itself",
        inputSchema: {
          type: "object",
          properties: {},
          required: []
        },
        annotations: SB,
        _meta: {
          isLookup: !0
        }
      }, {
        name: "view_chunk",
        title: "Look at blocks in the world",
        description: "Shows the blocks in one 32 by 32 by 32 chunk of the world, layer by layer, and where the player is. Only chunks near the player can be seen",
        inputSchema: {
          type: "object",
          properties: {
            position: {
              type: "string",
              description: 'Any "x y z" in the chunk; left out, the chunk the player is in'
            }
          },
          required: []
        },
        annotations: SB,
        _meta: {
          isLookup: !0
        }
      }, {
        name: "view_game_state",
        title: "Look at the game",
        description: "Shows what the creator sees in their world now: where they stand, their health, creative mode, what they hold and their inventory, and the players and mobs near them",
        inputSchema: {
          type: "object",
          properties: {},
          required: []
        },
        annotations: SB,
        _meta: {
          isLookup: !0
        }
      }, {
        name: "fetch_url",
        title: "Read a docs page",
        description: `Reads a page of Bloxd's docs as Markdown. ${ec.j} lists every page with its link; then read the page, or the part of a long page, you need`,
        inputSchema: {
          type: "object",
          properties: {
            url: {
              type: "string",
              description: `${ec.j}, or a page it links to`
            }
          },
          required: ["url"]
        },
        annotations: SB,
        _meta: {
          isLookup: !0
        }
      }, {
        name: "get_docs",
        title: "Read the docs",
        description: "Lists every api method, callback or client option, a line each, or shows the full docs of one of them: its arguments, what it returns and an example",
        inputSchema: {
          type: "object",
          properties: {
            list: {
              type: "string",
              description: `${eB}, to list every one of them`
            },
            name: {
              type: "string",
              description: "One exact name to show in full, e.g. setClientOption, onPlayerJoin or RightInfoText"
            }
          },
          required: []
        },
        annotations: SB,
        _meta: {
          isLookup: !0
        }
      }, {
        name: "find_names",
        title: "Look up block and item names",
        description: "Finds the exact block, item and mob names that match some words",
        inputSchema: {
          type: "object",
          properties: {
            words: {
              type: "string",
              description: "A few words, e.g. gold sword"
            }
          },
          required: ["words"]
        },
        annotations: SB,
        _meta: {
          isLookup: !0
        }
      }, {
        name: "list_prefabs",
        title: "Look at ready-made games",
        description: "Lists the prefabs (ready-made games and features) of one kind of game, with their settings, and the ready-made functions for it",
        inputSchema: {
          type: "object",
          properties: {
            category: {
              type: "string",
              description: "The kind of game, e.g. pvp; left out, every prefab"
            }
          },
          required: []
        },
        annotations: SB,
        _meta: {
          isLookup: !0
        }
      }, {
        name: "view_prefab",
        title: "Look at a ready-made game",
        description: "Shows one prefab in full: how it plays, every setting with its default, and the functions to replace by name to change it",
        inputSchema: {
          type: "object",
          properties: {
            name: {
              type: "string",
              description: "The prefab's name, e.g. parkour"
            }
          },
          required: ["name"]
        },
        annotations: SB,
        _meta: {
          isLookup: !0
        }
      }, {
        name: "view_errors",
        title: "Look at errors",
        description: "Shows every error their world showed recently, not only the newest few",
        inputSchema: {
          type: "object",
          properties: {},
          required: []
        },
        annotations: SB,
        _meta: {
          isLookup: !0
        }
      }];

    function zn(cB) {
      var Bc;
      return !0 === (null === (Bc = pB(cB)._meta) || void 0 === Bc ? void 0 : Bc.isLookup)
    }

    function pB(cB) {
      const Bc = yn.find((Bc => Bc.name === cB));
      if (!Bc) throw new Error(`No AI Helper tool ${cB}`);
      return Bc
    }
    const hB = /^(?=[\s\S]{200})[^\n]*(?:\\n[^\n]*){3}$/,
      an = new Set(["content", "code"]);

    function lB(cB) {
      const Bc = "string" === typeof cB ? cB.split(/[./:]/).pop() : void 0;
      return function(cB) {
        return yn.some((Bc => Bc.name === cB))
      }(Bc) ? Bc : null
    }

    function YB(cB, Bc) {
      return nc => {
        const Vc = [];
        for (const rB of nc.matchAll(cB)) {
          const cB = lB(rB[1]);
          if (null === cB) continue;
          const nc = {};
          for (const Vc of rB[2].matchAll(Bc)) {
            var Ic;
            nc[null !== (Ic = Vc[1]) && void 0 !== Ic ? Ic : Vc[2]] = Vc[3]
          }
          Vc.push({
            call: {
              name: cB,
              args: nc,
              source: rB[0]
            },
            index: rB.index
          })
        }
        return Vc
      }
    }

    function LB(cB) {
      return cB.replace(/\\(["\\nt])/g, ((cB, Bc) => "n" === Bc ? "\n" : "t" === Bc ? "\t" : Bc))
    }

    function gn(cB) {
      let Bc = null !== cB && void 0 !== cB ? cB : {};
      if ("string" === typeof Bc) try {
        Bc = JSON.parse("" === Bc ? "{}" : Bc)
      } catch {
        return null
      }
      if ("object" !== typeof Bc || null === Bc) return null;
      const nc = {};
      for (const [Vc, Ic] of Object.entries(Bc)) "string" === typeof Ic ? nc[Vc] = an.has(Vc) && hB.test(Ic) && !Ic.includes("\n") ? LB(Ic) : Ic : "boolean" === typeof Ic || "number" === typeof Ic ? nc[Vc] = String(Ic) : "object" !== typeof Ic || null === Ic || Array.isArray(Ic) ? Array.isArray(Ic) && Ic.every((cB => "string" === typeof cB)) && (nc[Vc] = Ic.join("\n")) : nc[Vc] = JSON.stringify(Ic);
      return nc
    }

    function UB(cB, Bc) {
      let nc = 0,
        Vc = !1;
      for (let Ic = Bc; Ic < cB.length; Ic++) {
        const Bc = cB[Ic];
        if (Vc) "\\" === Bc ? Ic++ : '"' === Bc && (Vc = !1);
        else if ('"' === Bc) Vc = !0;
        else if ("{" === Bc) nc++;
        else if ("}" === Bc && (nc--, 0 === nc)) return Ic + 1
      }
      return null
    }

    function bn(cB, Bc) {
      let nc = cB;
      for (const {
          call: Vc,
          index: Ic
        }
        of Bc) nc = nc.slice(0, Ic) + " ".repeat(Vc.source.length) + nc.slice(Ic + Vc.source.length);
      return nc
    }
    const ZB = new RegExp(`\\b(${yn.map((cB=>cB.name)).join("|")})\\s*\\(\\s*(?=\\{)`, "g");
    const QB = {
        formatCall: (cB, Bc) => {
          const nc = Object.fromEntries(Object.entries(Bc).filter((cB => {
            let [, Bc] = cB;
            return void 0 !== Bc
          })));
          return `${cB}(${JSON.stringify(nc)})`
        },
        declareTools: cB => cB,
        callStyle: "Make each call with function calling, its code in full: never write a call, or the code it carries, in your answer's words or in a code fence.",
        fileResult: (cB, Bc, nc) => `<file path="${cB}"${nc?' open_in_editor="true"':""}>\n${Bc}\n</file>`,
        editFailure: (cB, Bc) => `${cB} failed: ${Bc}`,
        lookupResult: (cB, Bc, nc) => `${cB} ${Bc}:\n${nc}`
      },
      CB = /(?:<\|start\|>\s*assistant\s*)?<\|channel\|>[^<{]*?\bto=([\w./:-]+)[^{]*?(?=\{)/g;

    function vn(cB) {
      const Bc = [];
      for (const Ic of cB.matchAll(CB)) {
        const rB = lB(Ic[1]),
          uc = Ic.index + Ic[0].length,
          sc = UB(cB, uc),
          Mc = null === sc ? null : gn(cB.slice(uc, sc));
        if (null !== rB && null !== sc && null !== Mc) {
          var nc, Vc;
          const uc = null !== (nc = null === (Vc = cB.slice(sc).match(/^\s*<\|call\|>/)) || void 0 === Vc ? void 0 : Vc[0]) && void 0 !== nc ? nc : "";
          Bc.push({
            call: {
              name: rB,
              args: Mc,
              source: cB.slice(Ic.index, sc + uc.length)
            },
            index: Ic.index
          })
        }
      }
      return Bc
    }

    function DB(cB) {
      var Bc, nc, Vc, Ic;
      let rB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      if ("object" !== typeof cB || null === cB) return [];
      const uc = cB;
      if (Array.isArray(uc.tool_calls)) return uc.tool_calls.flatMap((cB => DB(cB, !0)));
      if (void 0 !== uc.tool_call) return DB(uc.tool_call, !0);
      if (void 0 !== uc.function) return DB(uc.function, !0);
      const sc = lB(uc.tool);
      if (null !== sc && void 0 === uc.arguments && void 0 === uc.args) {
        const {
          tool: cB,
          ...Bc
        } = uc, nc = gn(Bc);
        return null === nc ? [] : [{
          name: sc,
          args: nc
        }]
      }
      const Mc = null !== (Bc = null !== (nc = null !== (Vc = null !== (Ic = uc.arguments) && void 0 !== Ic ? Ic : uc.params) && void 0 !== Vc ? Vc : uc.param) && void 0 !== nc ? nc : uc.args) && void 0 !== Bc ? Bc : uc.input;
      if (!rB && void 0 === Mc) return [];
      const Pc = lB(uc.name),
        qB = gn(Mc);
      return null === Pc || null === qB ? [] : [{
        name: Pc,
        args: qB
      }]
    }

    function NB(cB) {
      const Bc = [];
      let nc = cB.indexOf("{");
      for (; - 1 !== nc;) {
        const Vc = UB(cB, nc);
        let Ic = [];
        if (null !== Vc) try {
          Ic = DB(JSON.parse(cB.slice(nc, Vc)))
        } catch {}
        if (null !== Vc && Ic.length > 0) {
          const rB = cB.slice(nc, Vc);
          Bc.push(...Ic.map((cB => ({
            call: {
              ...cB,
              source: rB
            },
            index: nc
          })))), nc = cB.indexOf("{", Vc)
        } else nc = cB.indexOf("{", nc + 1)
      }
      return Bc
    }

    function EB(cB) {
      if (Array.isArray(cB)) return `[${cB.map(EB).join(", ")}]`;
      if ("object" === typeof cB && null !== cB) {
        return `{${Object.entries(cB).map((cB=>{let[Bc,nc]=cB;return`${JSON.stringify(Bc)}: ${EB(nc)}`})).join(", ")}}`
      }
      return JSON.stringify(cB)
    }
    const oB = {
        formatCall: (cB, Bc) => `<tool_call>\n<function=${cB}>\n${Object.entries(Bc).flatMap((cB=>{let[Bc,nc]=cB;return void 0===nc?[]:[`<parameter=${Bc}>\n${nc}\n</parameter>\n`]})).join("")}</function>\n</tool_call>`,
        declareTools: (cB, Bc, nc) => nc || 0 === Bc.length ? cB : `${function(cB){return`# Tools\n\nYou have access to the following functions:\n\n<tools>${cB.map((cB=>`\n${EB({type:"function",function:{name:cB.name,description:cB.description,parameters:cB.inputSchema}})}`)).join("")}\n</tools>\n\nIf you choose to call a function ONLY reply in the following format with NO suffix:\n\n<tool_call>\n<function=example_function_name>\n<parameter=example_parameter_1>\nvalue_1\n</parameter>\n<parameter=example_parameter_2>\nThis is the value for the second parameter\nthat can span\nmultiple lines\n</parameter>\n</function>\n</tool_call>\n\n<IMPORTANT>\nReminder:\n- Function calls MUST follow the specified format: an inner <function=...></function> block must be nested within <tool_call></tool_call> XML tags\n- Required parameters MUST be specified\n- You may provide optional reasoning for your function call in natural language BEFORE the function call, but NOT after\n- If there is no function call available, answer the question like normal with your current knowledge and do not tell the user about function calls\n</IMPORTANT>`}(Bc)}\n\n${cB}`,
        callStyle: "Write each call in your answer as a <tool_call> holding a <function=name> block with a <parameter=name> for each argument, the code inside as it is, not escaped and in full: never as JSON or inside a code fence.",
        fileResult: (cB, Bc, nc) => `<tool_response>\nview_file ${cB}${nc?" (open in the editor)":""}:\n${Bc}\n</tool_response>`,
        editFailure: (cB, Bc) => `<tool_response>\nError: ${Bc}\n</tool_response>`,
        lookupResult: (cB, Bc, nc) => `<tool_response>\n${cB} ${Bc}:\n${nc}\n</tool_response>`
      },
      WB = YB(/(?:<tool_call>\s*)?<function=([\w.:/-]+)>((?:(?!<tool_call\b|<function=)[\s\S])*?(?:<\/parameter>(?=\s*(?:<tool_call\b|<function=|$))|(?=<\/function>|<\/tool_call>)))(?:<\/function>(?:\s*<\/tool_call>)?|<\/tool_call>|\s*(?=<tool_call\b|<function=|$))/g, /<parameter(?:=([\w-]+)|\s+name\s*=\s*"([^"]+)")\s*>\n?([\s\S]*?)(?:\n?<\/parameter>|(?=<parameter[=\s])|\n?$)/g),
      wB = new Set(["path", "why", "name", "after", "question", "allow_other", "note"]),
      kn = {
        formatCall: (cB, Bc) => `<tool_call name="${cB}">\n${Object.entries(Bc).flatMap((cB=>{let[Bc,nc]=cB;return void 0===nc?[]:[`<param name="${Bc}">${wB.has(Bc)?nc:`\n${nc}\n`}</param>\n`]})).join("")}</tool_call>`,
        declareTools: cB => cB,
        callStyle: "Write each call in your answer as a <tool_call> with a <param> for each argument, the code inside as it is, not escaped and in full: never as JSON, a function call or inside a code fence.",
        fileResult: (cB, Bc, nc) => `<tool_result name="view_file" path="${cB}"${nc?' open_in_editor="true"':""}>\n${Bc}\n</tool_result>`,
        editFailure: (cB, Bc) => `<tool_result name="${cB}" is_error="true">\n${Bc}\n</tool_result>`,
        lookupResult: (cB, Bc, nc) => `<tool_result name="${cB}" about="${Bc.replace(/"/g,"'")}">\n${nc}\n</tool_result>`
      },
      XB = YB(/<tool_call\s+name\s*=\s*"([^"]+)"\s*>((?:(?!<tool_call\b)[\s\S])*?(?:<\/param(?:eter)?>(?=\s*(?:<tool_call\b|$))|(?=<\/(?:tool_call|invoke|function)>)))(?:<\/(?:tool_call|invoke|function)>|\s*(?=<tool_call\b|$))/g, /<param(?:eter)?(?:\s+name\s*=\s*"([^"]+)"|=([\w-]+))\s*>\n?([\s\S]*?)\n?<\/param(?:eter)?>/g),
      HB = {
        simple: kn,
        qwenXml: oB,
        deepseek: QB
      },
      FB = {
        simple: XB,
        qwenXml: WB,
        deepseek: function(cB) {
          const Bc = [];
          for (const sc of cB.matchAll(ZB)) {
            var nc, Vc, Ic, rB, uc;
            const Mc = lB(sc[1]),
              Pc = sc.index + sc[0].length,
              qB = UB(cB, Pc);
            if (null === Mc || null === qB || (null !== (nc = null === (Vc = Bc.at(-1)) || void 0 === Vc ? void 0 : Vc.index) && void 0 !== nc ? nc : -1) + (null !== (Ic = null === (rB = Bc.at(-1)) || void 0 === rB ? void 0 : rB.call.source.length) && void 0 !== Ic ? Ic : 0) > sc.index) continue;
            const Oc = gn(cB.slice(Pc, qB));
            if (null === Oc) continue;
            const Tc = /^\s*\)/.exec(cB.slice(qB)),
              fc = cB.slice(sc.index, qB + (null !== (uc = null === Tc || void 0 === Tc ? void 0 : Tc[0].length) && void 0 !== uc ? uc : 0));
            Bc.push({
              call: {
                name: Mc,
                args: Oc,
                source: fc
              },
              index: sc.index
            })
          }
          return Bc
        }
      },
      JB = ["simple", "qwenXml"];

    function jn(cB) {
      return "deepseek" === cB ? "simple" : cB
    }
    const RB = /<\|[a-z_]+\|>/g,
      KB = /^[ \t]*`{1,2}[ \t]*$/gm,
      xn = /^[ \t]*<\/(?:tool_call|invoke|function|param(?:eter)?)>[ \t]*$/gm,
      dB = /^[ \t]*(?:Wait|Oops|Hmm)\b[^\n]*\b(?:redo|re-do|the format|let me (?:fix|try|rewrite|write) (?:that|it|this))\b[^\n]*$/gim,
      AB = /```[\w-]*/g,
      GB = /^[\s[\],]*$/,
      cV = {
        use_prefab: 0,
        add_world_code: 1,
        write_file: 2,
        edit_file: 3,
        replace_function: 4,
        insert_code: 5,
        edit_code_in_place: 6,
        export_game: 7,
        switch_to_world_code: 8,
        ask_creator: 9,
        plan: 10,
        remember: 11,
        view_file: 12,
        view_world_code: 13,
        view_chunk: 14,
        view_game_state: 15,
        fetch_url: 16,
        get_docs: 17,
        find_names: 18,
        view_errors: 19,
        list_prefabs: 20,
        view_prefab: 21
      };

    function Bn(cB) {
      return pB(cB.name).inputSchema.required.every((Bc => void 0 !== cB.args[Bc]))
    }

    function nn(cB, Bc) {
      const nc = lB(cB),
        Vc = gn(Bc);
      return null === nc || null === Vc ? null : {
        name: nc,
        args: Vc
      }
    }

    function Vn(cB, Bc) {
      const nc = [];
      for (const Vc of function(cB) {
          const Bc = jn(cB),
            nc = JB.filter((cB => cB !== Bc));
          return [FB[Bc], ...cB === Bc ? [] : [FB[cB]], ...nc.map((cB => FB[cB])), vn, NB]
        }(Bc)) nc.push(...Vc(bn(cB, nc)));
      return nc.map((cB => {
        let {
          call: Bc
        } = cB;
        return Bc
      }))
    }

    function In(cB, Bc) {
      return Vn(cB, Bc).sort(((cB, Bc) => cV[cB.name] - cV[Bc.name]))
    }

    function rV(cB) {
      return function(cB) {
        const Bc = [...cB.matchAll(AB)],
          nc = [];
        let Vc = 0;
        for (; Vc < Bc.length;) {
          const Ic = Bc[Vc],
            rB = Bc.at(Vc + 1);
          void 0 !== rB && "```" === rB[0] ? (GB.test(cB.slice(Ic.index + Ic[0].length, rB.index)) && nc.push({
            from: Ic.index,
            to: rB.index + rB[0].length
          }), Vc += 2) : (nc.push({
            from: Ic.index,
            to: Ic.index + Ic[0].length
          }), Vc++)
        }
        let Ic = cB;
        for (const {
            from: rB,
            to: uc
          }
          of nc.reverse()) Ic = Ic.slice(0, rB) + Ic.slice(uc);
        return Ic
      }(cB.replace(RB, "").replace(KB, "").replace(xn, "").replace(dB, ""))
    }

    function un(cB) {
      return /^(?:on[A-Z]\w*|tick|playerCommand)$/.test(cB)
    }
    const sn = new Set(["cn", "onPlayerJoin", "onPlayerLeave", "onMobDespawned", "onBlockStand", "onBlockStandStart", "onBlockStandStop", "onPlayerJump", "onPlayerSelectInventorySlot", "onEntityCollision", "onChunkLoaded", "onClose"]),
      Mn = {
        playerCommand: {
          stopsWhen: cB => `${cB} !== undefined && ${cB} !== false`,
          passedOn: !1
        },
        onPlayerChat: {
          stopsWhen: cB => `${cB} === false || ${cB} === null`,
          passedOn: !0
        },
        onPlayerDamagingOtherPlayer: {
          stopsWhen: cB => `${cB} === "preventDamage"`,
          passedOn: !0
        }
      };

    function Pn(cB) {
      var Bc;
      const nc = lc().createSourceFile("worldCode.js", cB, lc().ScriptTarget.Latest, !0, lc().ScriptKind.JS),
        {
          parseDiagnostics: Vc
        } = nc;
      return {
        file: nc,
        hasErrors: (null !== (Bc = null === Vc || void 0 === Vc ? void 0 : Vc.length) && void 0 !== Bc ? Bc : 0) > 0
      }
    }

    function qV(cB) {
      return void 0 !== cB && (lc().isFunctionExpression(cB) || lc().isArrowFunction(cB))
    }

    function On(cB) {
      if (lc().isFunctionDeclaration(cB) && cB.name) return {
        mI: cB,
        nameNode: cB.name
      };
      if (lc().isVariableStatement(cB) && 1 === cB.declarationList.declarations.length) {
        const Bc = cB.declarationList.declarations[0],
          nc = Bc.initializer && Tn(Bc.initializer);
        if (lc().isIdentifier(Bc.name) && qV(nc)) return {
          mI: nc,
          nameNode: Bc.name
        }
      }
      const Bc = fn(cB),
        nc = Bc && Tn(Bc.value);
      return Bc && qV(nc) ? {
        mI: nc,
        nameNode: Bc.name
      } : null
    }

    function Tn(cB) {
      return lc().isParenthesizedExpression(cB) ? Tn(cB.expression) : cB
    }

    function fn(cB) {
      return lc().isExpressionStatement(cB) && lc().isBinaryExpression(cB.expression) && cB.expression.operatorToken.kind === lc().SyntaxKind.EqualsToken && lc().isIdentifier(cB.expression.left) ? {
        name: cB.expression.left,
        value: cB.expression.right
      } : null
    }

    function mV(cB) {
      return lc().isIdentifier(cB) ? [cB.text] : cB.elements.flatMap((cB => lc().isOmittedExpression(cB) ? [] : mV(cB.name)))
    }

    function en(cB) {
      if (!lc().isVariableStatement(cB)) return null;
      const Bc = cB.declarationList.declarations.find((cB => lc().isIdentifier(cB.name) && "CONFIG" === cB.name.text));
      return null !== Bc && void 0 !== Bc && Bc.initializer && lc().isObjectLiteralExpression(Bc.initializer) ? Bc.initializer : null
    }

    function tV(cB, Bc) {
      return Bc.statements.map((nc => {
        var Vc;
        const Ic = function(cB, Bc, nc) {
            let Vc = nc.getStart(Bc);
            for (const rB of (null !== (Ic = lc().getLeadingCommentRanges(cB, nc.getFullStart())) && void 0 !== Ic ? Ic : []).reverse()) {
              var Ic;
              if (/\n[^\S\n]*\n/.test(cB.slice(rB.end, Vc))) break;
              Vc = rB.pos
            }
            return Vc
          }(cB, Bc, nc),
          rB = On(nc);
        if (null !== rB && void 0 !== rB && rB.nameNode) {
          const cB = rB.nameNode.text;
          return {
            kind: un(cB) ? "callback" : "function",
            names: [cB],
            from: Ic,
            to: nc.getEnd(),
            node: nc
          }
        }
        const uc = lc().isVariableStatement(nc) ? nc.declarationList.declarations.flatMap((cB => mV(cB.name))) : [];
        if (en(nc)) {
          return {
            kind: "config",
            names: ["CONFIG", ...uc.filter((cB => "CONFIG" !== cB))],
            from: Ic,
            to: nc.getEnd(),
            node: nc
          }
        }
        if (lc().isVariableStatement(nc)) return {
          kind: "variable",
          names: uc,
          from: Ic,
          to: nc.getEnd(),
          node: nc
        };
        if (lc().isClassDeclaration(nc) && nc.name) return {
          kind: "function",
          names: [nc.name.text],
          from: Ic,
          to: nc.getEnd(),
          node: nc
        };
        const sc = null === (Vc = fn(nc)) || void 0 === Vc ? void 0 : Vc.name.text;
        return {
          kind: "other",
          names: void 0 !== sc && un(sc) ? [sc] : [],
          from: Ic,
          to: nc.getEnd(),
          node: nc
        }
      }))
    }

    function Sn(cB) {
      if (!lc().isPropertyAssignment(cB) && !lc().isShorthandPropertyAssignment(cB)) return null;
      const Bc = cB.name;
      return lc().isIdentifier(Bc) || lc().isStringLiteral(Bc) ? Bc.text : null
    }

    function yV(cB, Bc) {
      return cB.lastIndexOf("\n", Bc - 1) + 1
    }

    function zV(cB, Bc) {
      var nc, Vc;
      const Ic = cB.slice(yV(cB, Bc), Bc);
      return /^\s*$/.test(Ic) ? Ic : `${null!==(nc=null===(Vc=/^\s*/.exec(Ic))||void 0===Vc?void 0:Vc[0])&&void 0!==nc?nc:""}\t`
    }

    function pn(cB, Bc, nc) {
      const Vc = cB.slice(yV(cB, Bc.getStart(nc)), function(cB, Bc) {
          const nc = cB.indexOf("\n", Bc);
          return -1 === nc ? cB.length : nc
        }(cB, Bc.getEnd())),
        Ic = Vc.trim(),
        rB = /^[\w$"']+\s*:/.test(Ic) && "" === cB.slice(yV(cB, Bc.getStart(nc)), Bc.getStart(nc)).trim() ? Vc.replace(/^\s*/, "\t") : `\t${Bc.getText(nc)},`;
      return /,\s*(?:\/\/.*)?$/.test(rB) ? rB : rB.replace(/(\s*(?:\/\/.*)?)$/, ",$1")
    }

    function hn(cB, Bc) {
      let nc = cB;
      for (const Vc of [...Bc].sort(((cB, Bc) => Bc.from - cB.from))) nc = nc.slice(0, Vc.from) + Vc.text + nc.slice(Vc.to);
      return nc
    }

    function aV(cB) {
      return cB.charAt(0).toUpperCase() + cB.slice(1)
    }

    function lnc(cB) {
      return cB.replace(/[^A-Za-z0-9]+(.)?/g, ((cB, Bc) => Bc ? Bc.toUpperCase() : ""))
    }

    function Yn(cB, Bc) {
      var nc, Vc;
      const Ic = cB.filter((cB => cB.names.includes(Bc))),
        rB = Ic.filter((cB => !lc().isFunctionDeclaration(cB.node) && function(cB, Bc) {
          return !lc().isVariableStatement(cB) || cB.declarationList.declarations.some((cB => void 0 !== cB.initializer && mV(cB.name).includes(Bc)))
        }(cB.node, Bc))),
        uc = null !== (nc = rB[rB.length - 1]) && void 0 !== nc ? nc : Ic[Ic.length - 1];
      if ("callback" === (null === uc || void 0 === uc ? void 0 : uc.kind)) return On(uc.node);
      const sc = "other" === (null === uc || void 0 === uc ? void 0 : uc.kind) ? null === (Vc = fn(uc.node)) || void 0 === Vc ? void 0 : Vc.value : void 0;
      if (!sc || !lc().isIdentifier(sc)) return null;
      const Mc = cB.filter((cB => {
          var Bc;
          const nc = null === (Bc = fn(cB.node)) || void 0 === Bc ? void 0 : Bc.value;
          return void 0 !== nc && lc().isIdentifier(nc) && nc.text === sc.text
        })),
        Pc = cB.filter((cB => cB.names.includes(sc.text))),
        qB = 1 === Pc.length && "function" === Pc[0].kind ? On(Pc[0].node) : null;
      return 1 === Mc.length ? qB : null
    }

    function Ln(cB) {
      return cB.parameters.map((cB => lc().isIdentifier(cB.name) ? cB.name.text : null))
    }

    function gV(cB, Bc, nc, Vc, Ic, rB, uc) {
      var sc;
      let Mc = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const {
        mI: Pc
      } = nc, qB = Pc.body;
      if (!qB) return [];
      const Oc = [],
        Tc = Ln(Pc),
        fc = [],
        mB = new Set([...Tc.filter((cB => null !== cB)), ...Zn(qB)]),
        ec = (cB, Bc) => {
          let nc = cB;
          for (let Vc = Bc; mB.has(nc); Vc++) nc = `${cB}${Vc}`;
          return mB.add(nc), nc
        },
        tB = [];
      for (const [lc, Uc] of rB.entries()) {
        var Sc;
        const cB = Tc[lc];
        if (void 0 !== cB && null !== (Sc = Pc.parameters[lc]) && void 0 !== Sc && Sc.dotDotDotToken) {
          fc.push(null === cB ? "undefined" : `...${cB}`);
          break
        }
        if (void 0 !== cB) {
          fc.push(null !== cB && void 0 !== cB ? cB : "undefined");
          continue
        }
        const Bc = ec(Uc, lc);
        tB.push(Bc), fc.push(Bc)
      }
      if (tB.length > 0) {
        const cB = Pc.getChildren(Bc).find((cB => cB.kind === lc().SyntaxKind.CloseParenToken)),
          nc = cB ? cB.getStart(Bc) : -1;
        if (-1 === nc) {
          const cB = Pc.parameters[0];
          if (!cB) return [];
          Oc.push({
            from: cB.getStart(Bc),
            to: cB.getEnd(),
            text: `(${[cB.getText(Bc),...tB].join(", ")})`
          })
        } else {
          const cB = Pc.parameters.hasTrailingComma ? " " : Pc.parameters.length > 0 ? ", " : "";
          Oc.push({
            from: nc,
            to: nc,
            text: `${cB}${tB.join(", ")}`
          })
        }
      }
      const yB = `${Ic}(${fc.join(", ")})`,
        zB = ec(`${lnc(uc)}Result`, 2),
        pc = Mn[Vc],
        hc = sn.has(Vc) ? [yB] : pc ? [`const ${zB} = ${yB}`, `if (${pc.stopsWhen(zB)}) return ${zB}`] : [`const ${zB} = ${yB}`],
        aB = !sn.has(Vc) && (null === (sc = null === pc || void 0 === pc ? void 0 : pc.passedOn) || void 0 === sc || sc);
      if (aB && lc().isBlock(qB)) {
        const nc = function(cB, Bc) {
            const nc = new Set;
            for (const Vc of cB.statements) {
              const cB = lc().isVariableStatement(Vc) ? Vc.declarationList.declarations[0] : void 0;
              cB && lc().isIdentifier(cB.name) && cB.initializer && Un(cB.initializer, Bc) && nc.add(cB.name.text)
            }
            return nc
          }(qB, Vc),
          Ic = cB => {
            if (!lc().isFunctionLike(cB) && ! function(cB, Bc, nc) {
                if (!lc().isIfStatement(cB) || !lc().isReturnStatement(cB.thenStatement) || !cB.thenStatement.expression) return !1;
                const Vc = cB.thenStatement.expression;
                return lc().isIdentifier(Vc) && Bc.has(Vc.text) && cB.expression.getText(nc).startsWith(`${Vc.text} `)
              }(cB, nc, Bc)) {
              if (lc().isReturnStatement(cB) && !cB.expression) Oc.push({
                from: cB.getStart(Bc),
                to: cB.getEnd(),
                text: `return ${zB}`
              });
              else if (lc().isReturnStatement(cB) && cB.expression) {
                const Vc = bV(cB.expression, nc);
                Vc && Oc.push({
                  from: Vc.getStart(Bc),
                  to: Vc.getEnd(),
                  text: `${Vc.text} !== undefined ? ${Vc.text} : ${zB}`
                })
              }
              lc().forEachChild(cB, Ic)
            }
          };
        qB.statements.forEach(Ic);
        const rB = qB.statements[qB.statements.length - 1];
        if (!rB || !lc().isReturnStatement(rB) && !lc().isThrowStatement(rB)) {
          const nc = qB.getEnd() - 1,
            Vc = rB ? zV(cB, rB.getStart(Bc)) : `${cB.slice(yV(cB,Pc.getStart(Bc)),Pc.getStart(Bc)).replace(/\S.*$/,"")}\t`,
            Ic = cB.slice(yV(cB, nc), nc),
            uc = /^\s*$/.test(Ic) ? `${Vc}return ${zB}\n${Ic}` : `\n${Vc}return ${zB}\n`;
          Oc.push({
            from: /^\s*$/.test(Ic) ? yV(cB, nc) : nc,
            to: nc,
            text: uc
          })
        }
      }
      const Yc = lc().isBlock(qB) ? [...qB.statements] : [],
        Lc = Yc.findIndex((cB => ! function(cB, Bc) {
          return lc().isExpressionStatement(cB) && Un(cB.expression, Bc)
        }(cB, Vc))),
        gB = Yc[(-1 === Lc ? Yc.length : Lc) - 1];
      if (Mc && sn.has(Vc) && gB) Oc.push({
        from: gB.getEnd(),
        to: gB.getEnd(),
        text: `\n${zV(cB,gB.getStart(Bc))}${yB}`
      });
      else if (lc().isBlock(qB)) {
        const nc = qB.statements[0],
          Vc = nc ? zV(cB, nc.getStart(Bc)) : `${cB.slice(yV(cB,Pc.getStart(Bc)),Pc.getStart(Bc)).replace(/\S.*$/,"")}\t`,
          Ic = qB.getStart(Bc) + 1,
          rB = void 0 !== nc && !cB.slice(Ic, nc.getStart(Bc)).includes("\n");
        Oc.push({
          from: Ic,
          to: rB ? nc.getStart(Bc) : Ic,
          text: `\n${hc.map((cB=>`${Vc}${cB}`)).join("\n")}${nc?rB?`\n${Vc}`:"":"\n"}`
        })
      } else {
        const nc = cB.slice(yV(cB, Pc.getStart(Bc)), Pc.getStart(Bc)).replace(/\S.*$/, ""),
          Vc = ec("ownResult", 2),
          Ic = aB ? [`const ${Vc} = ${qB.getText(Bc)}`, `return ${Vc} !== undefined ? ${Vc} : ${zB}`] : [`return ${qB.getText(Bc)}`];
        Oc.push({
          from: qB.getStart(Bc),
          to: qB.getEnd(),
          text: `{\n${[...hc,...Ic].map((cB=>`${nc}\t${cB}`)).join("\n")}\n${nc}}`
        })
      }
      return Oc
    }

    function Un(cB, Bc) {
      return lc().isCallExpression(cB) && lc().isIdentifier(cB.expression) && cB.expression.text.endsWith(aV(Bc)) && cB.expression.text !== aV(Bc)
    }

    function bV(cB, Bc) {
      return lc().isIdentifier(cB) ? Bc.has(cB.text) ? cB : null : lc().isConditionalExpression(cB) ? bV(cB.whenFalse, Bc) : null
    }

    function Zn(cB) {
      const Bc = [],
        nc = cB => {
          lc().isIdentifier(cB) && Bc.push(cB.text), lc().forEachChild(cB, nc)
        };
      return nc(cB), Bc
    }

    function Qn(cB, Bc, nc) {
      var Vc, Ic;
      return (0, qn.e)(null !== (Vc = null === (Ic = cB.body) || void 0 === Ic ? void 0 : Ic.getText(Bc)) && void 0 !== Vc ? Vc : "", new RegExp(`${nc}\\s*\\(`), qn.l).length > 0
    }

    function Cn(cB, Bc, nc) {
      var Vc;
      const {
        owner: Ic,
        heading: rB
      } = nc, uc = null !== (Vc = nc.overrides) && void 0 !== Vc ? Vc : new Set;
      if ("" === cB.trim() && !0 !== nc.chainCallbacks) {
        const cB = `${rB?`${rB}\n`:""}${Bc.trim()}\n`,
          {
            file: nc,
            hasErrors: Vc
          } = Pn(cB);
        if (Vc) return null;
        const Ic = tV(cB, nc);
        return {
          text: cB,
          added: Ic.flatMap((cB => "config" === cB.kind ? [] : cB.names)),
          chained: [],
          settings: Ic.flatMap((cB => {
            var Bc;
            const nc = "config" === cB.kind ? en(cB.node) : null;
            return (null !== (Bc = null === nc || void 0 === nc ? void 0 : nc.properties) && void 0 !== Bc ? Bc : []).flatMap((cB => {
              const Bc = Sn(cB);
              return null === Bc ? [] : [Bc]
            }))
          }))
        }
      }
      const sc = Pn(cB),
        Mc = Pn(Bc);
      if (sc.hasErrors || Mc.hasErrors) return null;
      const Pc = tV(cB, sc.file),
        qB = tV(Bc, Mc.file),
        Oc = new Set(Pc.flatMap((cB => cB.names))),
        Tc = new Set(Oc),
        fc = [],
        mB = [],
        ec = [],
        tB = [];
      let Sc = [];
      const yB = qB.find((cB => "config" === cB.kind)),
        zB = Pc.find((cB => "config" === cB.kind));
      if (yB) {
        const nc = en(yB.node),
          Vc = zB ? en(zB.node) : null;
        if (nc && Vc) {
          const Ic = function(cB, Bc, nc, Vc, Ic, rB, uc) {
            const sc = new Map;
            for (const zB of nc.properties) {
              const cB = Sn(zB);
              null !== cB && sc.set(cB, zB)
            }
            const Mc = [],
              Pc = [],
              qB = [],
              Oc = new Map;
            for (const zB of rB.properties) {
              const cB = Sn(zB);
              if (null === cB) continue;
              const nc = sc.get(cB);
              if (nc) {
                if (uc.has(cB) && lc().isPropertyAssignment(nc) && lc().isPropertyAssignment(zB)) {
                  const Vc = zB.initializer.getText(Ic);
                  nc.initializer.getText(Bc) !== Vc && (Mc.push({
                    from: nc.initializer.getStart(Bc),
                    to: nc.initializer.getEnd(),
                    text: Vc
                  }), Oc.set(nc, Vc), Pc.push(cB))
                }
              } else qB.push(pn(Vc, zB, Ic)), Pc.push(cB)
            }
            if (0 === qB.length) return {
              edits: Mc,
              settings: Pc
            };
            const Tc = nc.getEnd() - 1,
              fc = nc.properties[nc.properties.length - 1];
            if (!cB.slice(nc.getStart(Bc), Tc).includes("\n")) {
              const cB = nc.properties.map((cB => {
                const nc = Oc.get(cB);
                return lc().isPropertyAssignment(cB) && void 0 !== nc ? `\t${cB.name.getText(Bc)}: ${nc},` : `\t${cB.getText(Bc)},`
              }));
              return {
                edits: [{
                  from: nc.getStart(Bc),
                  to: nc.getEnd(),
                  text: `{\n${[...cB,...qB].join("\n")}\n}`
                }],
                settings: Pc
              }
            }
            const mB = void 0 !== fc && !nc.properties.hasTrailingComma,
              ec = yV(cB, Tc),
              tB = cB.slice(ec, Tc);
            if ("" === tB.trim()) return mB && Mc.push({
              from: fc.getEnd(),
              to: fc.getEnd(),
              text: ","
            }), Mc.push({
              from: ec,
              to: ec,
              text: `${qB.join("\n")}\n`
            }), {
              edits: Mc,
              settings: Pc
            };
            const Sc = ec + tB.trimEnd().length,
              yB = mB && fc.getEnd() === Sc;
            return mB && !yB && Mc.push({
              from: fc.getEnd(),
              to: fc.getEnd(),
              text: ","
            }), Mc.push({
              from: Sc,
              to: Tc,
              text: `${yB?",":""}\n${qB.join("\n")}\n`
            }), {
              edits: Mc,
              settings: Pc
            }
          }(cB, sc.file, Vc, Bc, Mc.file, nc, uc);
          fc.push(...Ic.edits), Sc = Ic.settings
        } else if (nc) {
          if (Tc.has("CONFIG")) return null;
          const Vc = function(cB, Bc) {
              const nc = Bc.statements[0];
              return nc ? yV(cB, nc.getStart(Bc)) : cB.length
            }(cB, sc.file),
            Ic = Vc > 0 && "\n" !== cB[Vc - 1] ? "\n" : "";
          fc.push({
            from: Vc,
            to: Vc,
            text: `${Ic}${Bc.slice(yB.from,yB.to)}\n\n`
          }), Sc = nc.properties.flatMap((cB => {
            const Bc = Sn(cB);
            return null === Bc ? [] : [Bc]
          }))
        }
      }
      const pc = [],
        hc = (cB, nc) => {
          const Vc = pc[pc.length - 1],
            Ic = void 0 !== Vc && Vc >= 0 && Vc === nc - 1 && !/\n[^\S\n]*\n/.test(Bc.slice(qB[Vc].to, qB[nc].from)) ? "\n" : "\n\n";
          mB.push(0 === mB.length ? cB : `${Ic}${cB}`), pc.push(nc)
        };
      for (const [lc, Yc] of qB.entries()) {
        if ("config" === Yc.kind) continue;
        const Vc = Bc.slice(Yc.from, Yc.to);
        if ("callback" === Yc.kind) {
          const Bc = Yc.names[0],
            rB = Yn(Pc, Bc);
          if (!rB && Oc.has(Bc)) {
            if (!0 === nc.chainCallbacks) continue;
            return null
          }
          if (!rB && !0 !== nc.chainCallbacks) {
            Tc.has(Bc) || (hc(Vc, lc), ec.push(Bc), Tc.add(Bc));
            continue
          }
          const uc = `${lnc(Ic)}${aV(Bc)}`,
            qB = On(Yc.node);
          if (null === qB || void 0 === qB || !qB.nameNode) continue;
          if (!Tc.has(uc)) {
            const cB = qB.nameNode.getStart(Mc.file) - Yc.from,
              Bc = qB.nameNode.getEnd() - Yc.from;
            hc(Vc.slice(0, cB) + uc + Vc.slice(Bc), lc), ec.push(uc), Tc.add(uc)
          }
          const mB = Ln(qB.mI).map(((cB, Bc) => null !== cB && void 0 !== cB ? cB : `arg${Bc}`));
          if (!rB) {
            const cB = `${uc}(${mB.join(", ")})`,
              nc = `${lnc(Ic)}Result`;
            hc(`function ${Bc}(${mB.join(", ")}) {\n\t${sn.has(Bc)?cB:`const ${nc} = ${cB}\n\treturn ${nc}`}\n}`, -1), ec.push(Bc), Tc.add(Bc);
            continue
          }
          Qn(rB.mI, sc.file, uc) || (fc.push(...gV(cB, sc.file, rB, Bc, uc, mB, Ic, !0 === nc.runsLast)), tB.push(Bc));
          continue
        }
        const rB = Yc.names.filter((cB => !Tc.has(cB)));
        if ("other" === Yc.kind || Yc.names.length > 0 && rB.length === Yc.names.length) {
          hc(Vc, lc), ec.push(...rB);
          for (const cB of rB) Tc.add(cB)
        }
      }
      let aB = hn(cB, fc);
      if (mB.length > 0) {
        const cB = aB.replace(/\s*$/, "");
        aB = `${""===cB?"":`${cB}\n\n`}${rB?`${rB}\n`:""}${mB.join("")}\n`
      }
      return Pn(aB).hasErrors ? null : {
        text: aB,
        added: ec,
        chained: tB,
        settings: Sc
      }
    }

    function vV(cB) {
      const {
        file: Bc
      } = Pn(cB);
      return new Set(tV(cB, Bc).flatMap((cB => cB.names)))
    }

    function Dn(cB) {
      const {
        file: Bc
      } = Pn(cB), nc = new Set, Vc = cB => {
        lc().isCallExpression(cB) && lc().isIdentifier(cB.expression) && nc.add(cB.expression.text), lc().forEachChild(cB, Vc)
      };
      return Vc(Bc), nc
    }

    function Nn(cB) {
      return !Pn(cB).hasErrors
    }

    function En(cB) {
      return Pn(cB).file
    }

    function onc(cB) {
      return {
        from: cB.getFullStart(),
        to: cB.getEnd()
      }
    }

    function Wn(cB) {
      if (!/\buse_?prefab\s*\(/i.test(cB)) return {
        code: cB,
        calls: []
      };
      const Bc = En(cB),
        nc = function(cB) {
          const Bc = new Map;
          for (const nc of cB.statements)
            if (lc().isVariableStatement(nc))
              for (const cB of nc.declarationList.declarations)
                if (lc().isIdentifier(cB.name) && "CONFIG" === cB.name.text && cB.initializer && lc().isObjectLiteralExpression(cB.initializer))
                  for (const nc of cB.initializer.properties) lc().isPropertyAssignment(nc) && (lc().isIdentifier(nc.name) || lc().isStringLiteral(nc.name)) && Bc.set(nc.name.text, nc.initializer.getText());
          return Bc
        }(Bc),
        Vc = [],
        Ic = [],
        rB = cB => {
          var Bc;
          return lc().isPropertyAccessExpression(cB) && lc().isIdentifier(cB.expression) && "CONFIG" === cB.expression.text && null !== (Bc = nc.get(cB.name.text)) && void 0 !== Bc ? Bc : cB.getText()
        },
        uc = cB => cB && (lc().isStringLiteral(cB) || lc().isNoSubstitutionTemplateLiteral(cB)) ? cB.text : cB && lc().isObjectLiteralExpression(cB) ? cB.properties.flatMap((cB => lc().isPropertyAssignment(cB) && (lc().isIdentifier(cB.name) || lc().isStringLiteral(cB.name)) ? [`${cB.name.text}: ${rB(cB.initializer)}`] : lc().isShorthandPropertyAssignment(cB) && nc.has(cB.name.text) ? [`${cB.name.text}: ${nc.get(cB.name.text)}`] : [])).join("\n") : "";
      for (const sc of Bc.statements) {
        const cB = lc().isExpressionStatement(sc) ? sc.expression : null;
        if (!cB || !lc().isCallExpression(cB) || !lc().isIdentifier(cB.expression) || !/^use_?prefab$/i.test(cB.expression.text)) continue;
        const [Bc, nc] = cB.arguments;
        if (Bc && (lc().isStringLiteral(Bc) || lc().isNoSubstitutionTemplateLiteral(Bc))) Vc.push({
          name: Bc.text,
          settings: uc(nc)
        });
        else {
          if (!Bc || !lc().isObjectLiteralExpression(Bc)) continue;
          {
            const cB = cB => {
                var nc;
                return null === (nc = Bc.properties.find((Bc => lc().isPropertyAssignment(Bc) && lc().isIdentifier(Bc.name) && Bc.name.text === cB))) || void 0 === nc ? void 0 : nc.initializer
              },
              nc = cB("name");
            nc && lc().isStringLiteral(nc) && Vc.push({
              name: nc.text,
              settings: uc(cB("settings"))
            })
          }
        }
        Ic.push({
          ...onc(sc),
          text: ""
        })
      }
      return {
        code: hn(cB, Ic),
        calls: Vc
      }
    }

    function wn(cB) {
      if (!/=\s*(?:on[A-Z]\w*|tick|playerCommand)\b/.test(cB)) return cB;
      const Bc = En(cB),
        nc = new Set(Bc.statements.flatMap((cB => lc().isFunctionDeclaration(cB) && cB.name ? [cB.name.text] : []))),
        Vc = [];
      for (const Ic of Bc.statements)
        if (lc().isExpressionStatement(Ic) && lc().isBinaryExpression(Ic.expression) && Ic.expression.operatorToken.kind === lc().SyntaxKind.EqualsToken && lc().isIdentifier(Ic.expression.left) && nc.add(Ic.expression.left.text), lc().isVariableStatement(Ic))
          for (const cB of Ic.declarationList.declarations) {
            const Bc = cB.initializer;
            Bc && lc().isIdentifier(Bc) && un(Bc.text) && !nc.has(Bc.text) && Vc.push({
              from: Bc.getStart(),
              to: Bc.getEnd(),
              text: "function () {}"
            }), Bc && lc().isIdentifier(cB.name) && nc.add(cB.name.text)
          }
      return hn(cB, Vc)
    }

    function kV(cB, Bc) {
      if (!cB.includes("api.setBlockRect(")) return cB;
      const nc = En(cB);
      if (nc.statements.some((cB => {
          var Bc;
          return lc().isFunctionDeclaration(cB) && "fillBox" === (null === (Bc = cB.name) || void 0 === Bc ? void 0 : Bc.text) && 3 !== cB.parameters.length
        }))) return cB;
      const Vc = [],
        Ic = cB => {
          var nc;
          lc().isFunctionDeclaration(cB) && "fillBox" === (null === (nc = cB.name) || void 0 === nc ? void 0 : nc.text) || (lc().isCallExpression(cB) && lc().isPropertyAccessExpression(cB.expression) && lc().isIdentifier(cB.expression.expression) && "api" === cB.expression.expression.text && "setBlockRect" === cB.expression.name.text && 3 === cB.arguments.length && !Bc.includes(cB.getText()) && Vc.push({
            from: cB.expression.getStart(),
            to: cB.expression.getEnd(),
            text: "fillBox"
          }), lc().forEachChild(cB, Ic))
        };
      return Ic(nc), hn(cB, Vc)
    }
    const Xn = [{
        name: "parkour",
        kind: "game",
        title: "Parkour / obby",
        category: "parkour",
        summary: "A course to the finish, built for you in stages that get harder (or your own course): checkpoint blocks save progress, falling or kill blocks send you back, your time is shown and the best one saved",
        keywords: ["parkour", "parkor", "obby", "obbie", "obby that gets harder", "checkpoint", "checkpoints", "course", "jumps", "finish", "speedrun", "kill brick", "killbrick", "tower", "tower of hell", "climb", "stage", "stages", "gets harder", "difficulty"],
        howItPlays: 'With buildCourse (the default) the game builds its own course on the first join: a line of platforms going east from startPosition (or, with courseShape "tower", a climb spiralling up around startPosition, a block higher every jump) in `stages` stages of `jumpsPerStage` jumps, a checkpointBlock pad at the start of each stage and the finishBlock at the end. Stage 1 is easy (1-block gaps, flat, wide platforms); every stage after has bigger gaps, small rises and drops and narrower platforms, never a jump a player can\'t make. With buildCourse false it uses a course the creator built. Players start at startPosition and race to a finishBlock. Standing on a checkpointBlock saves their spot (the sidebar shows Stage n/N); falling below fallY or standing on one of killBlocks sends them back to it (or to the start, with killSendsToStart), as does dying. Reaching the finish shows their time to everyone, gives rewardCoins and saves their best time. /restart starts them again.',
        settings: [{
          key: "startPosition",
          kind: "position",
          value: "[0, 10, 0]",
          about: "where players start, and go back to with /restart; a built course starts here"
        }, {
          key: "buildCourse",
          kind: "boolean",
          value: "true",
          about: "true: the game builds its own course from startPosition; false: you build the course yourself"
        }, {
          key: "courseShape",
          kind: "string",
          value: '"line"',
          about: '"line": the built course goes east from the start; "tower": it climbs, spiralling up around the start (tower obby, rising lava)'
        }, {
          key: "stages",
          kind: "number",
          value: "10",
          about: "how many stages the built course has, each harder than the one before (1 to 50)"
        }, {
          key: "jumpsPerStage",
          kind: "number",
          value: "5",
          about: "how many jumps in each stage of the built course (1 to 20)"
        }, {
          key: "courseBlock",
          kind: "block",
          value: '"Stone"',
          about: "the block the built course's platforms are made of"
        }, {
          key: "checkpointBlock",
          kind: "block",
          value: '"Block of Gold"',
          about: "standing on this block saves a player's progress; the built course has one at each stage's start"
        }, {
          key: "finishBlock",
          kind: "block",
          value: '"Block of Diamond"',
          about: "standing on this block finishes the course; the built course ends with it"
        }, {
          key: "killBlocks",
          kind: "list",
          names: "block",
          value: '["Lava", "Red Concrete"]',
          about: "standing on any of these sends a player back to their checkpoint"
        }, {
          key: "killSendsToStart",
          kind: "boolean",
          value: "false",
          about: "true: a kill block sends a player back to the start (starting their time again), not their checkpoint"
        }, {
          key: "fallY",
          kind: "number",
          value: "-10",
          about: "falling below this height sends a player back to their checkpoint"
        }, {
          key: "rewardCoins",
          kind: "number",
          value: "10",
          about: "coins for finishing (0 for none)"
        }],
        code: '// Parkour: race from the start to the finish block. A checkpoint block saves your progress; falling, a kill block or\n// dying sends you back to it. /restart starts again. With CONFIG.buildCourse the game builds the course itself, in\n// stages that get harder.\nconst checkpoints = {}\nconst checkpointCounts = {}\nlet courseStarted = false\nlet coursePlan = []\n\nfunction onPlayerJoin(playerId) {\n\tif (CONFIG.buildCourse && !courseStarted) {\n\t\tcourseStarted = true\n\t\tcoursePlan = planCourse()\n\t\tconst start = CONFIG.startPosition\n\t\twhenWorldLoaded([start[0], start[1] - 1, start[2]], () => placeCourse(coursePlan))\n\t}\n\tsendToStart(playerId)\n\tapi.sendMessage(playerId, "Reach the " + CONFIG.finishBlock + "! Stand on " + CONFIG.checkpointBlock + " to save your progress. Type /restart to start again.", { color: "aqua" })\n}\n\nfunction stageCount() {\n\treturn Math.max(1, Math.min(50, Math.floor(CONFIG.stages)))\n}\n\n// The course as a list of parts { from, to, block, stage, pad }, going east from startPosition. A jump is never\n// longer than players can make: a gap of 3 blocks on the flat or down, 2 going up. Stages get harder: bigger gaps,\n// small rises and drops, narrower and shorter platforms. Change this to change the course\'s shape.\nfunction planCourse() {\n\tconst start = CONFIG.startPosition.map(Math.floor)\n\tif (CONFIG.courseShape === "tower") {\n\t\treturn planTower(start)\n\t}\n\tconst rises = [1, 0, 1, -1, 0, -1, 1, 1, -1, -1]\n\tconst stages = stageCount()\n\tconst jumps = Math.max(1, Math.min(20, Math.floor(CONFIG.jumpsPerStage)))\n\tconst parts = []\n\tlet y = start[1] - 1\n\tlet end = 0 // the east end of the last part, counted from the start\n\tfunction add(first, length, wide, block, stage, pad) {\n\t\tend = first + length - 1\n\t\tparts.push({ from: [start[0] + first, y, start[2] - wide], to: [start[0] + end, y, start[2] + wide], block: block, stage: stage, pad: pad })\n\t}\n\tlet count = 0\n\tfor (let stage = 1; stage <= stages; stage++) {\n\t\tconst hard = stages > 1 ? (stage - 1) / (stages - 1) : 0\n\t\tfor (let jump = 0; jump <= jumps; jump++) {\n\t\t\tconst pad = jump === 0\n\t\t\tif (stage === 1 && pad) {\n\t\t\t\tadd(-1, 3, 1, CONFIG.checkpointBlock, 1, true)\n\t\t\t\tcontinue\n\t\t\t}\n\t\t\tconst wanted = hard < 0.2 ? 0 : rises[count % rises.length]\n\t\t\tconst rise = y + wanted < start[1] - 3 ? 0 : wanted\n\t\t\tlet gap = count % 2 === 0 ? 1 + Math.round(hard * 2) : Math.max(1, Math.round(hard * 2))\n\t\t\tgap = Math.min(gap, rise > 0 ? 2 : 3)\n\t\t\tcount++\n\t\t\ty += rise\n\t\t\tif (pad) {\n\t\t\t\tadd(end + gap + 1, 3, 1, CONFIG.checkpointBlock, stage, true)\n\t\t\t} else {\n\t\t\t\tadd(end + gap + 1, hard < 0.7 ? 2 : 1, hard < 0.5 ? 1 : 0, CONFIG.courseBlock, stage, false)\n\t\t\t}\n\t\t}\n\t}\n\tadd(end + 3, 3, 1, CONFIG.finishBlock, stages, false)\n\treturn parts\n}\n\n// The tower: platforms on a 9 by 9 square ring with the start at a corner, each one a block higher than the last, with\n// gaps of 1 to 2 blocks (the most a jump up can clear), smaller platforms as the stages go up\nfunction planTower(start) {\n\tconst side = 8\n\tconst stages = stageCount()\n\tconst jumps = Math.max(1, Math.min(20, Math.floor(CONFIG.jumpsPerStage)))\n\tconst parts = []\n\tlet along = 0 // how far round the ring\n\tlet y = start[1] - 1\n\tlet wide = 1\n\tlet last = [0, 0]\n\tfunction ringSpot(at) {\n\t\tconst offset = at % side\n\t\tconst edge = Math.floor(at / side) % 4\n\t\treturn edge === 0 ? [offset, 0] : edge === 1 ? [side, offset] : edge === 2 ? [side - offset, side] : [0, side - offset]\n\t}\n\tfunction add(width, block, stage, pad) {\n\t\tconst spot = ringSpot(along)\n\t\tparts.push({ from: [start[0] + spot[0] - width, y, start[2] + spot[1] - width], to: [start[0] + spot[0] + width, y, start[2] + spot[1] + width], block: block, stage: stage, pad: pad })\n\t\twide = width\n\t\tlast = spot\n\t}\n\t// Goes round the ring until the next platform is gap blocks from the last one, edge to edge (less far round at corners)\n\tfunction moveOn(gap, width) {\n\t\tlet spot\n\t\tdo {\n\t\t\talong++\n\t\t\tspot = ringSpot(along)\n\t\t} while (Math.max(Math.abs(spot[0] - last[0]), Math.abs(spot[1] - last[1])) - wide - width - 1 < gap)\n\t}\n\tadd(1, CONFIG.checkpointBlock, 1, true)\n\tfor (let stage = 1; stage <= stages; stage++) {\n\t\tconst hard = stages > 1 ? (stage - 1) / (stages - 1) : 0\n\t\tfor (let jump = stage === 1 ? 1 : 0; jump <= jumps; jump++) {\n\t\t\tconst pad = jump === 0\n\t\t\tconst width = pad || hard < 0.5 ? 1 : 0\n\t\t\tconst gap = hard < 0.3 ? 1 : 2\n\t\t\tmoveOn(gap, width)\n\t\t\ty += 1\n\t\t\tadd(width, pad ? CONFIG.checkpointBlock : CONFIG.courseBlock, stage, pad)\n\t\t}\n\t}\n\tmoveOn(2, 1)\n\ty += 1\n\tadd(1, CONFIG.finishBlock, stages, false)\n\treturn parts\n}\n\nfunction placeCourse(parts) {\n\tif (!courseHasRoom(parts)) {\n\t\tapi.broadcastMessage("The parkour course wasn\'t built: there are blocks where it goes, " + (CONFIG.courseShape === "tower" ? "around and above" : "east of") + " the start. Move startPosition to open sky, or set buildCourse to false to use your own course.", { color: "orange" })\n\t\treturn\n\t}\n\tfor (const part of parts) {\n\t\tfillBox(part.from, part.to, part.block)\n\t}\n}\n\n// Whether only air (or the course, built before) is where the course goes, so it never builds over the creator\'s blocks\nfunction courseHasRoom(parts) {\n\tconst open = ["Air", "Unloaded", CONFIG.courseBlock, CONFIG.checkpointBlock, CONFIG.finishBlock]\n\tfor (const part of parts) {\n\t\tfor (let x = part.from[0]; x <= part.to[0]; x++) {\n\t\t\tfor (let y = part.from[1]; y <= part.to[1]; y++) {\n\t\t\t\tfor (let z = part.from[2]; z <= part.to[2]; z++) {\n\t\t\t\t\tif (!open.includes(api.getBlock(x, y, z))) {\n\t\t\t\t\t\treturn false\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\treturn true\n}\n\nfunction padAt(x, y, z) {\n\treturn coursePlan.find((part) => part.pad && y === part.from[1] && x >= part.from[0] && x <= part.to[0] && z >= part.from[2] && z <= part.to[2])\n}\n\nfunction sendToStart(playerId) {\n\tdelete checkpoints[playerId]\n\tcheckpointCounts[playerId] = 0\n\tapi.setPosition(playerId, CONFIG.startPosition[0], CONFIG.startPosition[1], CONFIG.startPosition[2])\n\tstartStopwatch(playerId)\n\tif (CONFIG.buildCourse) {\n\t\tsetSidebar(playerId, "Stage", "1/" + stageCount())\n\t} else {\n\t\tsetSidebar(playerId, "Checkpoint", "Start")\n\t}\n}\n\nfunction sendToCheckpoint(playerId) {\n\tconst spot = checkpoints[playerId] || CONFIG.startPosition\n\tapi.setPosition(playerId, spot[0], spot[1], spot[2])\n}\n\nfunction reachCheckpoint(playerId, x, y, z) {\n\tconst pad = padAt(x, y, z)\n\tconst spot = pad ? [(pad.from[0] + pad.to[0]) / 2 + 0.5, y + 1, (pad.from[2] + pad.to[2]) / 2 + 0.5] : [x + 0.5, y + 1, z + 0.5]\n\tconst old = checkpoints[playerId]\n\tif (old && old[0] === spot[0] && old[1] === spot[1] && old[2] === spot[2]) {\n\t\treturn\n\t}\n\tcheckpoints[playerId] = spot\n\tif (pad) {\n\t\tsetSidebar(playerId, "Stage", pad.stage + "/" + stageCount())\n\t\tif (pad.stage > 1) {\n\t\t\tapi.sendMessage(playerId, "Stage " + pad.stage + " - checkpoint saved!", { color: "lime" })\n\t\t}\n\t\treturn\n\t}\n\tcheckpointCounts[playerId] = (checkpointCounts[playerId] || 0) + 1\n\tsetSidebar(playerId, "Checkpoint", checkpointCounts[playerId])\n\tapi.sendMessage(playerId, "Checkpoint saved!", { color: "lime" })\n}\n\nfunction finishCourse(playerId) {\n\tconst seconds = stopStopwatch(playerId)\n\tif (seconds === null) {\n\t\treturn\n\t}\n\tannounce(api.getEntityName(playerId) + " finished in " + formatTime(seconds) + "!", "lime")\n\tif (CONFIG.rewardCoins > 0) {\n\t\taddCoins(playerId, CONFIG.rewardCoins)\n\t}\n\tconst best = getSaved(playerId, "parkourBest", null)\n\tif (best === null || seconds < best) {\n\t\tsetSaved(playerId, "parkourBest", seconds)\n\t\tapi.sendMessage(playerId, "New best time!", { color: "gold" })\n\t}\n\tsetSidebar(playerId, "Best", formatTime(getSaved(playerId, "parkourBest", seconds)))\n}\n\nfunction onBlockStandStart(playerId, x, y, z, blockName) {\n\tif (blockName === CONFIG.checkpointBlock) {\n\t\treachCheckpoint(playerId, x, y, z)\n\t} else if (blockName === CONFIG.finishBlock) {\n\t\tfinishCourse(playerId)\n\t} else if (CONFIG.killBlocks.includes(blockName) && CONFIG.killSendsToStart) {\n\t\tapi.sendMessage(playerId, "Ouch! Back to the start.", { color: "red" })\n\t\tsendToStart(playerId)\n\t} else if (CONFIG.killBlocks.includes(blockName)) {\n\t\tapi.sendMessage(playerId, "Ouch! Back to your checkpoint.", { color: "red" })\n\t\tsendToCheckpoint(playerId)\n\t}\n}\n\nfunction tick(ms) {\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tif (api.getPosition(playerId)[1] < CONFIG.fallY) {\n\t\t\tsendToCheckpoint(playerId)\n\t\t}\n\t}\n}\n\nfunction onRespawnRequest(playerId) {\n\treturn checkpoints[playerId] || CONFIG.startPosition\n}\n\nfunction playerCommand(playerId, command) {\n\tif (command.trim().toLowerCase() === "restart") {\n\t\tsendToStart(playerId)\n\t\treturn true\n\t}\n\treturn false\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete checkpoints[playerId]\n\tdelete checkpointCounts[playerId]\n}',
        changeable: [{
          name: "finishCourse",
          about: "what happens when a player reaches the finish: the message, the reward, the best time"
        }, {
          name: "reachCheckpoint",
          about: "what happens when a player stands on a checkpoint"
        }, {
          name: "planCourse",
          about: "the shape of the built course: a list of parts { from, to, block, stage, pad } - gaps, heights, widths, what each stage is like"
        }, {
          name: "placeCourse",
          about: "how the built course's parts are put into the world (default: fillBox of each part)"
        }],
        setup: 'Nothing, with buildCourse: the game builds the course east from startPosition, or up around it with courseShape "tower" (put startPosition in open sky: it won\'t build over blocks). If you build your own course, set buildCourse false and put the start at startPosition, checkpoint blocks along the way and the finish block at the end.'
      }, {
        name: "pvpArena",
        kind: "game",
        title: "Kit PvP arena",
        category: "pvp",
        summary: "Free-for-all fighting: everyone gets a kit, kills give score and coins, kill streaks are announced and the first to enough kills wins the round",
        keywords: ["pvp", "kitpvp", "kit pvp", "kit", "arena", "pvp arena", "ffa", "free for all", "duels", "duel", "fight", "fighting", "combat", "kill", "kills", "killstreak", "battle", "sword fight", "pvp game", "pvparena", "pvb"],
        howItPlays: "Every player gets kitItems when they join and each time they respawn, and appears at a random spot up to arenaRadius blocks from arenaCenter. Each kill gives a point of score (shown on the leaderboard) and killCoins, and heals the killer if healOnKill is on. Kill streaks of 3, 5, 10... are announced to everyone. The first player to killsToWin kills wins the round: it is announced, scores reset, and everyone starts again with a fresh kit.",
        settings: [{
          key: "arenaCenter",
          kind: "position",
          value: "[0, 10, 0]",
          about: "the middle of the arena, where players appear around"
        }, {
          key: "arenaRadius",
          kind: "number",
          value: "10",
          about: "how far from arenaCenter players can appear, in blocks"
        }, {
          key: "kitItems",
          kind: "list",
          names: "item",
          value: '[["Iron Sword", 1], ["Wood Bow", 1], ["Arrow", 16], ["Bread", 5]]',
          about: "the items each player gets on joining and respawning, as [item, amount]"
        }, {
          key: "killsToWin",
          kind: "number",
          value: "10",
          about: "kills a player needs to win the round"
        }, {
          key: "killCoins",
          kind: "number",
          value: "5",
          about: "coins for each kill (0 for none)"
        }, {
          key: "healOnKill",
          kind: "boolean",
          value: "true",
          about: "true: a player gets full health after a kill"
        }, {
          key: "scoreName",
          kind: "string",
          value: '"Kills"',
          about: "what the score is called on the leaderboard"
        }],
        code: '// Kit PvP arena: everyone fights everyone. You get a kit when you join and when you respawn, each kill gives you a\n// point and coins, and the first to CONFIG.killsToWin kills wins the round.\nconst streaks = {}\n\nfunction onPlayerJoin(playerId) {\n\tstreaks[playerId] = 0\n\tsendIntoArena(playerId)\n\tapi.sendMessage(playerId, "Fight! First to " + CONFIG.killsToWin + " kills wins the round.", { color: "aqua" })\n}\n\nfunction sendIntoArena(playerId) {\n\tconst spot = randomSpot(CONFIG.arenaCenter, CONFIG.arenaRadius)\n\tapi.setPosition(playerId, spot[0], spot[1], spot[2])\n\tgiveKit(playerId, CONFIG.kitItems)\n\thealFully(playerId)\n}\n\nfunction onPlayerKilledOtherPlayer(attackingPlayer, killedPlayer, damageDealt, withItem) {\n\tif (attackingPlayer !== killedPlayer) {\n\t\trewardKill(attackingPlayer, killedPlayer)\n\t}\n\t// The kit comes back on respawn, so it isn\'t dropped\n\treturn "keepInventory"\n}\n\nfunction rewardKill(attackingPlayer, killedPlayer) {\n\tconst kills = addScore(attackingPlayer, 1)\n\tstreaks[attackingPlayer] = (streaks[attackingPlayer] || 0) + 1\n\tif (CONFIG.killCoins > 0) {\n\t\taddCoins(attackingPlayer, CONFIG.killCoins)\n\t}\n\tif (CONFIG.healOnKill) {\n\t\thealFully(attackingPlayer)\n\t}\n\tapi.sendMessage(attackingPlayer, "You beat " + api.getEntityName(killedPlayer) + "! Kills: " + kills, { color: "lime" })\n\tannounceStreak(attackingPlayer, streaks[attackingPlayer])\n\tif (kills >= CONFIG.killsToWin) {\n\t\twinRound(attackingPlayer)\n\t}\n}\n\nfunction announceStreak(playerId, streak) {\n\tif (streak === 3 || (streak >= 5 && streak % 5 === 0)) {\n\t\tapi.broadcastMessage(api.getEntityName(playerId) + " is on a " + streak + " kill streak!", { color: "orange" })\n\t}\n}\n\nfunction winRound(winner) {\n\tannounce(api.getEntityName(winner) + " wins the round with " + getScore(winner) + " kills!", "gold")\n\tresetScores()\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tstreaks[playerId] = 0\n\t\tif (api.isAlive(playerId)) {\n\t\t\tsendIntoArena(playerId)\n\t\t}\n\t}\n}\n\nfunction onRespawnRequest(playerId) {\n\t// A death ends the streak\n\tstreaks[playerId] = 0\n\t// Called before the player is back: the new kit is ready when they are\n\tgiveKit(playerId, CONFIG.kitItems)\n\treturn randomSpot(CONFIG.arenaCenter, CONFIG.arenaRadius)\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete streaks[playerId]\n}',
        changeable: [{
          name: "rewardKill",
          about: "what a kill gives: the score, coins, healing and message"
        }, {
          name: "announceStreak",
          about: "which kill streaks are announced and how"
        }, {
          name: "winRound",
          about: "what happens when a player reaches killsToWin: the message and the reset"
        }],
        setup: "Build an arena around arenaCenter with a floor at its height, and turn PvP on in your world settings."
      }, {
        name: "zombieWaves",
        kind: "game",
        title: "Zombie waves",
        category: "survival",
        summary: "Survive waves of mobs that get bigger every wave, with a short break between them and coins for every mob killed",
        keywords: ["dungeon", "zombie", "zombies", "zombi", "zombies waves", "waves", "wave", "horde", "hordes", "survive", "survival", "mob arena", "mob waves", "cod zombies", "undead", "defend"],
        howItPlays: "Players fight waves of mobType around spawnCenter. Wave 1 has firstWaveSize mobs and every wave after has extraPerWave more. When a wave is cleared there is a break of waveBreakSeconds with a countdown before the next. Every mob killed gives coinsPerKill coins. The wave and mobs left show on the sidebar. If every player is dead at the same time it is game over; clearing maxWaves wins. Then a new game starts.",
        settings: [{
          key: "spawnCenter",
          kind: "position",
          value: "[0, 10, 0]",
          about: "where players start and mobs spawn around"
        }, {
          key: "mobType",
          kind: "mob",
          value: '"Draugr Zombie"',
          about: "the mob every wave is made of"
        }, {
          key: "firstWaveSize",
          kind: "number",
          value: "3",
          about: "how many mobs come in wave 1"
        }, {
          key: "extraPerWave",
          kind: "number",
          value: "2",
          about: "how many more mobs each wave has than the one before"
        }, {
          key: "spawnSpread",
          kind: "number",
          value: "10",
          about: "how far from spawnCenter mobs can spawn, in blocks"
        }, {
          key: "waveBreakSeconds",
          kind: "number",
          value: "10",
          about: "the break before each wave, in seconds"
        }, {
          key: "coinsPerKill",
          kind: "number",
          value: "5",
          about: "coins for each mob a player kills (0 for none)"
        }, {
          key: "maxWaves",
          kind: "number",
          value: "10",
          about: "clearing this many waves wins the game (0: waves never end)"
        }],
        code: '// Zombie waves: mobs come in waves around spawnCenter, each wave bigger than the last. Kill them for coins and get\n// ready in the break between waves. If every player is dead at once it\'s game over; clear maxWaves to win.\nlet wave = 0\nlet wavePhase = "waiting" // waiting, break, fighting, over\nconst waveMobIds = {}\nlet lastShown = ""\n\nfunction onPlayerJoin(playerId) {\n\tapi.setPosition(playerId, CONFIG.spawnCenter[0], CONFIG.spawnCenter[1], CONFIG.spawnCenter[2])\n\tapi.sendMessage(playerId, "Survive the waves of " + CONFIG.mobType + "s! Every kill gives you coins.", { color: "aqua" })\n\tshowWave(playerId)\n\tif (wavePhase === "waiting") {\n\t\tstartBreak()\n\t}\n}\n\nfunction showWave(playerId) {\n\tsetSidebar(playerId, "Wave", wave)\n\tsetSidebar(playerId, "Mobs left", wavePhase === "fighting" ? mobsAlive() : 0)\n}\n\nfunction waveSize(number) {\n\treturn CONFIG.firstWaveSize + (number - 1) * CONFIG.extraPerWave\n}\n\nfunction startBreak() {\n\twavePhase = "break"\n\tannounce("Wave " + (wave + 1) + " is coming! Get ready!", "yellow")\n\tstartCountdown(CONFIG.waveBreakSeconds, startNextWave)\n}\n\nfunction startNextWave() {\n\tconst ids = spawnMobs(CONFIG.mobType, waveSize(wave + 1), CONFIG.spawnCenter, CONFIG.spawnSpread)\n\tif (ids.length === 0) {\n\t\t// The wave isn\'t used up: it is tried again when a player next joins\n\t\twavePhase = "waiting"\n\t\tannounce("No mobs could spawn! Turn on mob spawning in your world settings.", "red")\n\t\treturn\n\t}\n\twave++\n\tfor (const mobId of ids) {\n\t\twaveMobIds[mobId] = true\n\t}\n\twavePhase = "fighting"\n\tannounce("Wave " + wave + ": " + ids.length + " " + CONFIG.mobType + "s!", "orange")\n}\n\nfunction rewardKill(playerId) {\n\tif (CONFIG.coinsPerKill > 0) {\n\t\taddCoins(playerId, CONFIG.coinsPerKill)\n\t}\n}\n\nfunction onPlayerKilledMob(playerId, mobId) {\n\tif (waveMobIds[mobId]) {\n\t\tdelete waveMobIds[mobId]\n\t\trewardKill(playerId)\n\t}\n}\n\nfunction endGame(won) {\n\twavePhase = "over"\n\tcancelCountdown()\n\tremoveAllMobs()\n\tif (won) {\n\t\tannounce("You survived all " + CONFIG.maxWaves + " waves! You win!", "lime")\n\t} else {\n\t\tannounce("Game over! You made it to wave " + wave + ".", "red")\n\t}\n\trunLater(8, newGame)\n}\n\nfunction newGame() {\n\tif (wavePhase !== "over") {\n\t\treturn\n\t}\n\twave = 0\n\tfor (const mobId in waveMobIds) {\n\t\tdelete waveMobIds[mobId]\n\t}\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tif (api.isAlive(playerId)) {\n\t\t\tapi.setPosition(playerId, CONFIG.spawnCenter[0], CONFIG.spawnCenter[1], CONFIG.spawnCenter[2])\n\t\t} else {\n\t\t\tapi.forceRespawn(playerId, CONFIG.spawnCenter)\n\t\t}\n\t\thealFully(playerId)\n\t\tshowWave(playerId)\n\t}\n\twavePhase = "waiting"\n\tif (api.getPlayerIds().length > 0) {\n\t\tstartBreak()\n\t}\n}\n\nfunction tick(ms) {\n\tconst players = api.getPlayerIds()\n\tif (wavePhase !== "break" && wavePhase !== "fighting") {\n\t\treturn\n\t}\n\tif (players.length > 0 && players.every((playerId) => !api.isAlive(playerId))) {\n\t\tendGame(false)\n\t\treturn\n\t}\n\tif (wavePhase === "fighting" && mobsAlive() === 0) {\n\t\tif (CONFIG.maxWaves > 0 && wave >= CONFIG.maxWaves) {\n\t\t\tendGame(true)\n\t\t} else {\n\t\t\tstartBreak()\n\t\t}\n\t}\n\tconst shown = wave + " " + wavePhase + " " + mobsAlive()\n\tif (shown !== lastShown) {\n\t\tlastShown = shown\n\t\tfor (const playerId of players) {\n\t\t\tshowWave(playerId)\n\t\t}\n\t}\n}\n\nfunction onRespawnRequest(playerId) {\n\treturn CONFIG.spawnCenter\n}\n\nfunction onPlayerLeave(playerId) {\n\t// The last player left: everything stops until someone joins\n\tif (api.getPlayerIds().filter((id) => id !== playerId).length === 0) {\n\t\tcancelCountdown()\n\t\tremoveAllMobs()\n\t\twave = 0\n\t\twavePhase = "waiting"\n\t}\n}',
        changeable: [{
          name: "rewardKill",
          about: "what a player gets for killing a wave mob: coins, an item, a score"
        }, {
          name: "waveSize",
          about: "how many mobs a wave has, from its number"
        }, {
          name: "endGame",
          about: "what happens when everyone is dead (won is false) or every wave is cleared (won is true)"
        }],
        setup: "Turn on mob spawning in your world settings and build an arena around spawnCenter for the mobs to come at you in."
      }, {
        name: "bedwars",
        kind: "game",
        title: "Bed Wars",
        category: "teams",
        summary: "Teams each guard a bed: while it stands they come back after dying; break the other beds, knock everyone out, and the last team left wins",
        keywords: ["eggwars", "egg wars", "bedwars", "bed wars", "bedwar", "bed war", "bedwards", "beds", "bed", "break the bed", "protect the bed", "team", "teams", "generator", "islands"],
        howItPlays: "Rounds: once enough players are in, a countdown runs, the players are split into teams (teamNames), each team's bed (bedBlocks) is placed at its bedPositions and everyone goes to their team's spawn (teamSpawns) with startItems. While a team's bed stands, its players come back at their spawn after dying. Breaking another team's bed tells everyone; a team can't break its own. A player whose bed is gone is out when they die and watches as a spectator. Every generatorSeconds, each player still in gets resourceAmount of resourceItem straight into their inventory. The last team with players left wins; teammates can't hurt each other.",
        settings: [{
          key: "teamNames",
          kind: "list",
          value: '["Red", "Blue"]',
          about: "the teams, 2 to 4 of them"
        }, {
          key: "teamSpawns",
          kind: "list",
          value: "[[-20, 10, 0], [20, 10, 0]]",
          about: "where each team starts and comes back, one [x, y, z] per team in the same order as teamNames"
        }, {
          key: "bedPositions",
          kind: "list",
          value: "[[-25, 10, 0], [25, 10, 0]]",
          about: "where each team's bed is placed, one [x, y, z] per team in the same order as teamNames"
        }, {
          key: "bedBlocks",
          kind: "list",
          names: "block",
          value: '["Red Bed", "Blue Bed"]',
          about: "the bed block of each team, in the same order as teamNames"
        }, {
          key: "startItems",
          kind: "list",
          names: "item",
          value: '[["Wood Sword", 1], ["White Wool", 16]]',
          about: "what each player gets at the start, and again after coming back: [item, amount] pairs"
        }, {
          key: "resourceItem",
          kind: "item",
          value: '"White Wool"',
          about: "what the generator gives each player still in"
        }, {
          key: "resourceAmount",
          kind: "number",
          value: "4",
          about: "how many of resourceItem the generator gives each time"
        }, {
          key: "generatorSeconds",
          kind: "number",
          value: "10",
          about: "how often the generator gives resourceItem, in seconds"
        }, {
          key: "roundSeconds",
          kind: "number",
          value: "600",
          about: "longest a round lasts, in seconds (0: no limit)"
        }],
        code: '// Bed Wars: every team has a bed. While your bed stands, you come back at your team\'s spawn after dying. Break the\n// other teams\' beds (not your own!) so they can\'t come back, then knock them out. The last team left wins.\nconst bedsStanding = {}\nlet generatorTimer = null\n\nfunction onPlayerJoin(playerId) {\n\tjoinSmallestTeam(playerId)\n\tif (isRoundRunning()) {\n\t\teliminate(playerId)\n\t\tapi.sendMessage(playerId, "A round is on: watch this one, you\'ll play in the next!", { color: "yellow" })\n\t\treturn\n\t}\n\tapi.setPlayerGamemode(playerId, "survival")\n\tsendToSpawn(playerId)\n\tapi.sendMessage(playerId, "Welcome to Bed Wars! Protect your bed and break the others.", { color: "aqua" })\n}\n\nfunction teamSpawn(team) {\n\treturn CONFIG.teamSpawns[CONFIG.teamNames.indexOf(team)] || CONFIG.teamSpawns[0]\n}\n\nfunction teamBed(team) {\n\tconst bed = CONFIG.bedPositions[CONFIG.teamNames.indexOf(team)] || CONFIG.bedPositions[0]\n\treturn [Math.floor(bed[0]), Math.floor(bed[1]), Math.floor(bed[2])]\n}\n\nfunction sendToSpawn(playerId) {\n\tconst spot = teamSpawn(getTeam(playerId))\n\tapi.setPosition(playerId, spot[0], spot[1], spot[2])\n}\n\nfunction beginRound() {\n\tbringEveryoneBack()\n\tevenTeams()\n\tCONFIG.teamNames.forEach((team, index) => {\n\t\tconst bed = teamBed(team)\n\t\tbedsStanding[team] = teamMembers(team).length > 0\n\t\tif (bedsStanding[team]) {\n\t\t\tapi.setBlock(bed[0], bed[1], bed[2], CONFIG.bedBlocks[index] || CONFIG.bedBlocks[0])\n\t\t}\n\t})\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tif (!api.isAlive(playerId)) {\n\t\t\tapi.forceRespawn(playerId, teamSpawn(getTeam(playerId)))\n\t\t}\n\t\tsendToSpawn(playerId)\n\t\thealFully(playerId)\n\t\tgiveKit(playerId, CONFIG.startItems)\n\t}\n\tgeneratorTimer = repeatEvery(CONFIG.generatorSeconds, runGenerators)\n\tannounce("Protect your bed and break the others!", "aqua")\n}\n\n// After players leave, one team can be much bigger: move players from the biggest team until the teams are even\nfunction evenTeams() {\n\tfor (let i = 0; i < api.getPlayerIds().length; i++) {\n\t\tconst sizes = CONFIG.teamNames.map((team) => teamMembers(team).length)\n\t\tif (Math.max(...sizes) - Math.min(...sizes) <= 1) {\n\t\t\treturn\n\t\t}\n\t\tconst biggest = CONFIG.teamNames[sizes.indexOf(Math.max(...sizes))]\n\t\tjoinSmallestTeam(teamMembers(biggest)[0])\n\t}\n}\n\nfunction finishRound() {\n\tcancelTimer(generatorTimer)\n\t// Those knocked out play again, waiting at their spawn for the next round\n\tconst left = playersLeft()\n\tconst out = api.getPlayerIds().filter((playerId) => !left.includes(playerId))\n\tbringEveryoneBack()\n\tfor (const playerId of out) {\n\t\tif (api.isAlive(playerId)) {\n\t\t\tsendToSpawn(playerId)\n\t\t}\n\t}\n}\n\n// Gives every player still in the round their team generator\'s items\nfunction runGenerators() {\n\tfor (const playerId of playersLeft()) {\n\t\tif (getTeam(playerId) !== null && api.isAlive(playerId)) {\n\t\t\tapi.giveItem(playerId, CONFIG.resourceItem, CONFIG.resourceAmount)\n\t\t}\n\t}\n}\n\n// The team whose bed is at (or right next to) x, y, z, or null\nfunction bedOwnerAt(x, y, z) {\n\tfor (const team of CONFIG.teamNames) {\n\t\tconst bed = teamBed(team)\n\t\tif (Math.abs(x - bed[0]) <= 1 && y === bed[1] && Math.abs(z - bed[2]) <= 1) {\n\t\t\treturn team\n\t\t}\n\t}\n\treturn null\n}\n\n// A bed\'s foot ("Red Bed") or head ("_Red Bed Head"), not Bedrock\nfunction isBedBlock(block) {\n\treturn / Bed( Head)?$/.test(block)\n}\n\nfunction onPlayerAttemptChangeBlock(playerId, x, y, z, fromBlock, toBlock) {\n\tconst team = isBedBlock(fromBlock) ? bedOwnerAt(x, y, z) : null\n\tif (team === null) {\n\t\treturn\n\t}\n\tif (!isRoundRunning()) {\n\t\treturn "preventChange"\n\t}\n\tif (team === getTeam(playerId)) {\n\t\tapi.sendMessage(playerId, "That\'s your own bed! Protect it.", { color: "red" })\n\t\treturn "preventChange"\n\t}\n}\n\nfunction onPlayerChangeBlock(playerId, x, y, z, fromBlock, toBlock) {\n\tconst team = isBedBlock(fromBlock) ? bedOwnerAt(x, y, z) : null\n\tif (team !== null && bedsStanding[team] && isRoundRunning()) {\n\t\tbedsStanding[team] = false\n\t\tannounce(api.getEntityName(playerId) + " broke team " + team + "\'s bed!", "red")\n\t\tfor (const member of teamMembers(team)) {\n\t\t\tapi.sendMessage(member, "Your bed is gone! If you die now, you\'re out.", { color: "red" })\n\t\t}\n\t}\n}\n\nfunction onPlayerDamagingOtherPlayer(attackingPlayer, damagedPlayer) {\n\tif (!isRoundRunning() || sameTeam(attackingPlayer, damagedPlayer)) {\n\t\treturn "preventDamage"\n\t}\n}\n\nfunction onRespawnRequest(playerId) {\n\tif (isRoundRunning() && playersLeft().includes(playerId)) {\n\t\trunLater(0.5, () => {\n\t\t\tgiveKit(playerId, CONFIG.startItems)\n\t\t})\n\t}\n\treturn teamSpawn(getTeam(playerId))\n}\n\nfunction tick(ms) {\n\tif (!isRoundRunning()) {\n\t\treturn\n\t}\n\t// A player who died with their bed gone is out\n\tfor (const playerId of playersLeft()) {\n\t\tif (!api.isAlive(playerId) && !bedsStanding[getTeam(playerId)]) {\n\t\t\teliminate(playerId)\n\t\t\tannounce(api.getEntityName(playerId) + " is out!", "red")\n\t\t}\n\t}\n\t// Players leaving or being knocked out can leave one team\n\tconst teamsLeft = []\n\tfor (const playerId of playersLeft()) {\n\t\tconst team = getTeam(playerId)\n\t\tif (team !== null && !teamsLeft.includes(team)) {\n\t\t\tteamsLeft.push(team)\n\t\t}\n\t}\n\tif (teamsLeft.length === 1) {\n\t\tteamWins(teamsLeft[0])\n\t} else if (teamsLeft.length === 0) {\n\t\tendRound("Nobody is left! Nobody wins.")\n\t}\n}\n\nfunction teamWins(team) {\n\tendRound("Team " + team + " wins!")\n}',
        changeable: [{
          name: "teamWins",
          about: "what happens when a team wins: the message, rewards for its players"
        }, {
          name: "runGenerators",
          about: "what the generator gives each player still in, every generatorSeconds"
        }],
        setup: "Build an island for each team around its spawn and bed position, with gaps between them, and turn PvP on in the world settings."
      }, {
        name: "miningSimulator",
        kind: "game",
        title: "Mining simulator",
        category: "economy",
        summary: "Break blocks for coins (each block has its value), the blocks grow back, /upgrade buys a bigger coin multiplier, /pickaxe buys the next better pickaxe when the pickaxes setting lists some, a backpack (backpackSize) can hold the ores until /sell, coins and levels are saved and the richest top the leaderboard",
        keywords: ["simulator", "simulater", "sim", "mining", "mine", "miner", "ore", "gr", "clicker", "grind", "grinding", "upgrade", "upgrades", "pickaxe", "pickaxes", "buy pickaxes", "better pickaxe", "rich", "backpack", "sell", "auto sell", "autosell", "brain rot"],
        howItPlays: "Breaking a block listed in blockValues gives its coins, times the player's level, and it grows back after regrowSeconds. /upgrade spends coins to go up a level (each level costs upgradePriceGrowth times the last). When pickaxes lists some, players start with the first one and /pickaxe spends coins to swap it for the next better one, until the last. With backpackSize above 0, mined ores go into the player's inventory instead, until it holds backpackSize of them (shown on the sidebar): then they can't mine until /sell sells them all for their coins times their level, or, with autoSell on, the full backpack sells itself. Coins, levels and the pickaxe are saved, the leaderboard shows everyone's coins and level, and other blocks can't be broken when protectOtherBlocks is on.",
        settings: [{
          key: "blockValues",
          kind: "list",
          names: "block",
          value: '[["Coal Ore", 1], ["Iron Ore", 3], ["Gold Ore", 8], ["Diamond Ore", 20]]',
          about: "the blocks players mine, each [block, coins it gives]"
        }, {
          key: "regrowSeconds",
          kind: "number",
          value: "5",
          about: "seconds before a mined block grows back (0: never)"
        }, {
          key: "upgradeCost",
          kind: "number",
          value: "25",
          about: "coins the first /upgrade costs"
        }, {
          key: "upgradePriceGrowth",
          kind: "number",
          value: "2",
          about: "each upgrade costs this many times the one before"
        }, {
          key: "starterPickaxe",
          kind: "item",
          value: '"Iron Pickaxe"',
          about: "the pickaxe every player gets when they join (not used when pickaxes lists some)"
        }, {
          key: "pickaxes",
          kind: "list",
          names: "item",
          value: "[]",
          about: 'better pickaxes players buy one by one with /pickaxe, each [pickaxe, coins it costs], weakest first; the first is given on joining (so its price is not used). [] means no /pickaxe. Example: [["Wood Pickaxe", 0], ["Stone Pickaxe", 50], ["Iron Pickaxe", 200], ["Gold Pickaxe", 500], ["Diamond Pickaxe", 1500]]'
        }, {
          key: "backpackSize",
          kind: "number",
          value: "0",
          about: "ores a player can carry before they must /sell them; mined ores go into their inventory (0: no backpack, each ore gives its coins as it's mined)"
        }, {
          key: "autoSell",
          kind: "boolean",
          value: "false",
          about: "true: a full backpack sells itself, so players never need /sell (only with backpackSize above 0)"
        }, {
          key: "protectOtherBlocks",
          kind: "boolean",
          value: "true",
          about: "true: blocks not in blockValues can't be broken, so the mine stays in one piece"
        }, {
          key: "saveCoins",
          kind: "boolean",
          value: "true",
          about: "true: coins are kept after a player leaves"
        }],
        code: '// Mining simulator: break blocks to earn coins (blockValues says what each is worth) and they grow back. /upgrade\n// raises your level, and every block gives coins times your level. If pickaxes lists some, /pickaxe buys the next one.\n// Coins, levels and the pickaxe you own are saved. With backpackSize above 0, ores fill your backpack (your inventory)\n// instead, and /sell (or autoSell, when it\'s full) turns them into coins.\nconst mineLevels = {}\nconst pickaxeTiers = {}\n\nfunction onPlayerJoin(playerId) {\n\tmineLevels[playerId] = Number(getSaved(playerId, "mineLevel", 1))\n\tif (CONFIG.pickaxes.length > 0) {\n\t\tpickaxeTiers[playerId] = Math.min(Number(getSaved(playerId, "pickaxeTier", 0)), CONFIG.pickaxes.length - 1)\n\t\tif (!api.hasItem(playerId, CONFIG.pickaxes[pickaxeTiers[playerId]][0])) {\n\t\t\tapi.giveItem(playerId, CONFIG.pickaxes[pickaxeTiers[playerId]][0], 1)\n\t\t}\n\t} else if (!api.hasItem(playerId, CONFIG.starterPickaxe)) {\n\t\tapi.giveItem(playerId, CONFIG.starterPickaxe, 1)\n\t}\n\tapi.setClientOption(playerId, "lobbyLeaderboardInfo", {\n\t\tname: { displayName: "Name", sortPriority: 0 },\n\t\tcoins: { displayName: "Coins", sortPriority: 1 },\n\t\tlevel: { displayName: "Level", sortPriority: 2 },\n\t})\n\tshowProgress(playerId)\n\tapi.sendMessage(playerId, "Mine blocks to earn coins! Type /upgrade to earn more from every block.", { color: "aqua" })\n\tif (CONFIG.pickaxes.length > 0) {\n\t\tapi.sendMessage(playerId, "Type /pickaxe to buy a better pickaxe.", { color: "aqua" })\n\t}\n\tif (CONFIG.backpackSize > 0) {\n\t\tapi.sendMessage(playerId, "Your backpack holds " + CONFIG.backpackSize + " ores. " + (CONFIG.autoSell ? "It sells itself when it\'s full." : "Type /sell to sell them."), { color: "aqua" })\n\t}\n}\n\nfunction blockValue(blockName) {\n\tfor (const entry of CONFIG.blockValues) {\n\t\tif (entry[0] === blockName) {\n\t\t\treturn entry[1]\n\t\t}\n\t}\n\treturn null\n}\n\n// How many ores a player carries: the blockValues blocks in their inventory\nfunction backpackCount(playerId) {\n\tlet count = 0\n\tfor (const entry of CONFIG.blockValues) {\n\t\ttry {\n\t\t\tcount += Math.max(0, api.getInventoryItemAmount(playerId, entry[0]))\n\t\t} catch (error) {\n\t\t\t// A block that isn\'t an item can\'t be carried\n\t\t}\n\t}\n\treturn count\n}\n\n// Sells every ore a player carries for its coins times their level\nfunction sellOres(playerId) {\n\tconst level = mineLevels[playerId] || 1\n\tconst earned = sellItems(playerId, CONFIG.blockValues.map((entry) => [entry[0], entry[1] * level]))\n\tif (earned === 0) {\n\t\tapi.sendMessage(playerId, "Your backpack is empty. Mine some ores first!", { color: "orange" })\n\t\treturn\n\t}\n\tapi.sendMessage(playerId, "Sold your ores for " + earned + " coins!", { color: "lime" })\n\tshowProgress(playerId)\n}\n\nfunction upgradePrice(level) {\n\treturn Math.round(CONFIG.upgradeCost * Math.pow(CONFIG.upgradePriceGrowth, level - 1))\n}\n\nfunction showProgress(playerId) {\n\tconst level = mineLevels[playerId] || 1\n\tsetSidebar(playerId, "Level", level + " (x" + level + " coins)")\n\tsetSidebar(playerId, "Next upgrade", upgradePrice(level) + " coins")\n\tif (CONFIG.backpackSize > 0) {\n\t\tsetSidebar(playerId, "Backpack", backpackCount(playerId) + "/" + CONFIG.backpackSize)\n\t}\n\tif (CONFIG.pickaxes.length > 0) {\n\t\tconst tier = pickaxeTiers[playerId] || 0\n\t\tsetSidebar(playerId, "Pickaxe", CONFIG.pickaxes[tier][0])\n\t\tconst next = CONFIG.pickaxes[tier + 1]\n\t\tsetSidebar(playerId, "Next pickaxe", next ? next[0] + " (" + next[1] + " coins)" : "You have the best!")\n\t}\n\tapi.setTargetedPlayerSettingForEveryone(playerId, "lobbyLeaderboardValues", { coins: getCoins(playerId), level: level }, true)\n}\n\nfunction mineBlock(playerId, x, y, z, blockName) {\n\tif (CONFIG.backpackSize > 0) {\n\t\tapi.giveItem(playerId, blockName, 1)\n\t\tconst count = backpackCount(playerId)\n\t\tapi.sendFlyingMiddleMessage(playerId, "+1 " + blockName + " (" + count + "/" + CONFIG.backpackSize + ")", 1)\n\t\tif (count >= CONFIG.backpackSize && CONFIG.autoSell) {\n\t\t\tsellOres(playerId)\n\t\t} else if (count >= CONFIG.backpackSize) {\n\t\t\tapi.sendMessage(playerId, "Backpack full! Type /sell to sell your ores.", { color: "orange" })\n\t\t}\n\t} else {\n\t\tconst coins = blockValue(blockName) * (mineLevels[playerId] || 1)\n\t\taddCoins(playerId, coins)\n\t\tapi.sendFlyingMiddleMessage(playerId, "+" + coins + " coins", 1)\n\t}\n\tshowProgress(playerId)\n\tif (CONFIG.regrowSeconds > 0) {\n\t\trunLater(CONFIG.regrowSeconds, () => {\n\t\t\tif (api.getBlock(x, y, z) === "Air") {\n\t\t\t\tapi.setBlock(x, y, z, blockName)\n\t\t\t}\n\t\t})\n\t}\n}\n\nfunction buyUpgrade(playerId) {\n\tconst level = mineLevels[playerId] || 1\n\tconst price = upgradePrice(level)\n\tif (!spendCoins(playerId, price)) {\n\t\tapi.sendMessage(playerId, "You need " + price + " coins to upgrade. You have " + getCoins(playerId) + ".", { color: "orange" })\n\t\treturn\n\t}\n\tmineLevels[playerId] = level + 1\n\tsetSaved(playerId, "mineLevel", level + 1)\n\tapi.sendMessage(playerId, "Level " + (level + 1) + "! Every block now gives x" + (level + 1) + " coins.", { color: "lime" })\n\tshowProgress(playerId)\n}\n\nfunction buyNextPickaxe(playerId) {\n\tconst tier = pickaxeTiers[playerId] || 0\n\tconst next = CONFIG.pickaxes[tier + 1]\n\tif (!next) {\n\t\tapi.sendMessage(playerId, "You already have the best pickaxe!", { color: "gold" })\n\t\treturn\n\t}\n\tif (!spendCoins(playerId, next[1])) {\n\t\tapi.sendMessage(playerId, "You need " + next[1] + " coins for the " + next[0] + ". You have " + getCoins(playerId) + ".", { color: "orange" })\n\t\treturn\n\t}\n\tif (CONFIG.pickaxes[tier][0] !== next[0]) {\n\t\tapi.removeItemName(playerId, CONFIG.pickaxes[tier][0], 1)\n\t}\n\tapi.giveItem(playerId, next[0], 1)\n\tpickaxeTiers[playerId] = tier + 1\n\tsetSaved(playerId, "pickaxeTier", tier + 1)\n\tconst after = CONFIG.pickaxes[tier + 2]\n\tapi.sendMessage(playerId, "You bought the " + next[0] + "! " + (after ? "Next: " + after[0] + " for " + after[1] + " coins." : "It\'s the best one!"), { color: "lime" })\n\tshowProgress(playerId)\n}\n\nfunction onPlayerAttemptChangeBlock(playerId, x, y, z, fromBlock, toBlock) {\n\tif (CONFIG.backpackSize > 0 && toBlock === "Air" && blockValue(fromBlock) !== null && backpackCount(playerId) >= CONFIG.backpackSize) {\n\t\tapi.sendFlyingMiddleMessage(playerId, "Backpack full! /sell", 1)\n\t\treturn "preventChange"\n\t}\n\t// Ores from a backpack can\'t be placed, so nobody mines the same ore twice\n\tif (CONFIG.backpackSize > 0 && fromBlock === "Air" && blockValue(toBlock) !== null) {\n\t\treturn "preventChange"\n\t}\n\tif (CONFIG.protectOtherBlocks && toBlock === "Air" && fromBlock !== "Air" && blockValue(fromBlock) === null) {\n\t\treturn "preventChange"\n\t}\n}\n\nfunction onPlayerChangeBlock(playerId, x, y, z, fromBlock, toBlock) {\n\tif (toBlock === "Air" && blockValue(fromBlock) !== null) {\n\t\tmineBlock(playerId, x, y, z, fromBlock)\n\t\treturn "preventDrop"\n\t}\n}\n\nfunction playerCommand(playerId, command) {\n\tif (command.trim().toLowerCase() === "upgrade") {\n\t\tbuyUpgrade(playerId)\n\t\treturn true\n\t}\n\tif (CONFIG.backpackSize > 0 && command.trim().toLowerCase() === "sell") {\n\t\tsellOres(playerId)\n\t\treturn true\n\t}\n\tif (CONFIG.pickaxes.length > 0 && command.trim().toLowerCase() === "pickaxe") {\n\t\tbuyNextPickaxe(playerId)\n\t\treturn true\n\t}\n\treturn false\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete mineLevels[playerId]\n\tdelete pickaxeTiers[playerId]\n}',
        changeable: [{
          name: "mineBlock",
          about: "what mining a block gives: the coins, the message, the block growing back"
        }, {
          name: "buyUpgrade",
          about: "what /upgrade costs and gives"
        }, {
          name: "sellOres",
          about: "what /sell gives for the ores in a backpack: the coins and the message"
        }, {
          name: "buyNextPickaxe",
          about: "what /pickaxe costs and gives: taking the coins, swapping the pickaxe"
        }],
        setup: "Build a mine from the blocks in blockValues where players can reach it; players must be allowed to break blocks there."
      }, {
        name: "tycoon",
        kind: "game",
        title: "Tycoon",
        category: "economy",
        summary: "Coins come in every second; upgrades (droppers, factories...) bought with /upgrade or in the shop screen raise the income, /rebirth starts again for a multiplier, and progress is saved",
        keywords: ["afk money", "tycoon", "brainrot", "brainrots", "steal a brainrot", "tycon", "tycoone", "tyccon", "idle", "idle game", "money over time", "income", "cash", "money", "rich", "millionaire", "business", "factory", "dropper", "droppers", "upgrade", "upgrades", "rebirth", "rebirths", "rebirthing", "multiplier", "simulator", "simulater", "sim"],
        howItPlays: "Every player earns incomePerSecond coins each second. /upgrades lists the upgrades and opens the shop screen; /upgrade 2 (or its name) buys one, once, and adds its income. /rebirth (when rebirthCost is more than 0) costs coins, takes every upgrade and coin away, and multiplies all income after it by rebirthMultiplier; each rebirth costs more than the last. Coins, upgrades and rebirths are saved when saveCoins is on, and the sidebar and leaderboard show income and rebirths.",
        settings: [{
          key: "incomePerSecond",
          kind: "number",
          value: "1",
          about: "coins every player earns each second before any upgrades"
        }, {
          key: "upgrades",
          kind: "list",
          value: '[["Dropper", 25, 1], ["Conveyor", 100, 5], ["Factory", 500, 20], ["Mega Factory", 2500, 100]]',
          about: "what players can buy, each [name, price in coins, extra coins per second it gives]; each is bought once"
        }, {
          key: "rebirthCost",
          kind: "number",
          value: "10000",
          about: "coins the first /rebirth costs; each one after costs that much more (0: no rebirths)"
        }, {
          key: "rebirthMultiplier",
          kind: "number",
          value: "2",
          about: "each rebirth multiplies income by this (2: x2, then x4, x8...)"
        }, {
          key: "saveCoins",
          kind: "boolean",
          value: "true",
          about: "true: coins, upgrades and rebirths are kept after a player leaves"
        }],
        code: '// Tycoon: coins come in by themselves every second. /upgrades shows what you can buy and /upgrade <number> buys it,\n// so you earn more each second. /rebirth starts you again from nothing, but everything after earns more.\nconst ownedUpgrades = {}\nconst rebirthCounts = {}\nlet tycoonStarted = false\n\nfunction onPlayerJoin(playerId) {\n\tstartTycoon()\n\tconst saved = CONFIG.saveCoins ? String(getSaved(playerId, "tycoonUpgrades", "")) : ""\n\townedUpgrades[playerId] = saved.split("|").filter((name) => findUpgrade(name) !== null)\n\trebirthCounts[playerId] = CONFIG.saveCoins ? Number(getSaved(playerId, "tycoonRebirths", 0)) : 0\n\tapi.setClientOption(playerId, "lobbyLeaderboardInfo", {\n\t\tname: { displayName: "Name", sortPriority: 0 },\n\t\tincome: { displayName: "Coins/s", sortPriority: 1 },\n\t\trebirths: { displayName: "Rebirths", sortPriority: 2 },\n\t})\n\trefreshTycoon(playerId)\n\tapi.sendMessage(playerId, "You earn coins every second! Type /upgrades to see how to earn more.", { color: "aqua" })\n}\n\nfunction startTycoon() {\n\tif (tycoonStarted) {\n\t\treturn\n\t}\n\ttycoonStarted = true\n\tapi.configureShopCategory("Upgrades", { customTitle: "Upgrades", autoSelectCategory: true })\n\tCONFIG.upgrades.forEach((upgrade, index) => {\n\t\tapi.createShopItem("Upgrades", "upgrade" + (index + 1), {\n\t\t\timage: "Gold Bar",\n\t\t\tcost: upgrade[1],\n\t\t\tcurrency: "coins",\n\t\t\tcustomTitle: upgrade[0],\n\t\t\tdescription: "+" + upgrade[2] + " coins every second",\n\t\t\tsortPriority: CONFIG.upgrades.length - index,\n\t\t})\n\t})\n\trepeatEvery(1, payEveryone)\n}\n\nfunction payEveryone() {\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tif (ownedUpgrades[playerId]) {\n\t\t\taddCoins(playerId, tycoonIncome(playerId))\n\t\t\tsetSidebar(playerId, "Coins", getCoins(playerId))\n\t\t}\n\t}\n}\n\nfunction rebirthBonus(playerId) {\n\treturn Math.pow(CONFIG.rebirthMultiplier, rebirthCounts[playerId] || 0)\n}\n\nfunction tycoonIncome(playerId) {\n\tlet income = CONFIG.incomePerSecond\n\tfor (const name of ownedUpgrades[playerId] || []) {\n\t\tincome += findUpgrade(name)[2]\n\t}\n\treturn Math.round(income * rebirthBonus(playerId))\n}\n\nfunction rebirthPrice(playerId) {\n\treturn CONFIG.rebirthCost * ((rebirthCounts[playerId] || 0) + 1)\n}\n\n// Saves a player\'s progress and shows it: sidebar, leaderboard and which upgrades the shop screen still sells\nfunction refreshTycoon(playerId) {\n\tif (CONFIG.saveCoins) {\n\t\tsetSaved(playerId, "tycoonUpgrades", ownedUpgrades[playerId].join("|"))\n\t\tsetSaved(playerId, "tycoonRebirths", rebirthCounts[playerId])\n\t}\n\tCONFIG.upgrades.forEach((upgrade, index) => {\n\t\tif (ownedUpgrades[playerId].includes(upgrade[0])) {\n\t\t\tapi.updateShopItemForPlayer(playerId, "Upgrades", "upgrade" + (index + 1), { canBuy: false, buyButtonText: "Owned" })\n\t\t} else {\n\t\t\tapi.resetShopItemForPlayer(playerId, "Upgrades", "upgrade" + (index + 1))\n\t\t}\n\t})\n\tsetSidebar(playerId, "Coins", getCoins(playerId))\n\tsetSidebar(playerId, "Income", tycoonIncome(playerId) + " coins/s")\n\tif (CONFIG.rebirthCost > 0) {\n\t\tsetSidebar(playerId, "Rebirths", rebirthCounts[playerId] + " (x" + Math.round(rebirthBonus(playerId) * 100) / 100 + ")")\n\t}\n\tapi.setTargetedPlayerSettingForEveryone(playerId, "lobbyLeaderboardValues", { income: tycoonIncome(playerId), rebirths: rebirthCounts[playerId] }, true)\n}\n\nfunction findUpgrade(wanted) {\n\tconst number = Number(wanted)\n\tif (wanted !== "" && Number.isInteger(number) && number >= 1 && number <= CONFIG.upgrades.length) {\n\t\treturn CONFIG.upgrades[number - 1]\n\t}\n\tconst name = String(wanted).toLowerCase()\n\treturn CONFIG.upgrades.find((upgrade) => upgrade[0].toLowerCase() === name) || null\n}\n\nfunction listUpgrades(playerId) {\n\tconst lines = CONFIG.upgrades.map((upgrade, index) => {\n\t\tconst owned = ownedUpgrades[playerId].includes(upgrade[0])\n\t\treturn (index + 1) + ". " + upgrade[0] + " - " + (owned ? "owned" : upgrade[1] + " coins") + ", +" + upgrade[2] + " coins/s"\n\t})\n\tlet text = "Upgrades (you have " + getCoins(playerId) + " coins):\\n" + lines.join("\\n") + "\\nType /upgrade and a number, like /upgrade 1"\n\tif (CONFIG.rebirthCost > 0) {\n\t\ttext += "\\nType /rebirth to start again with x" + CONFIG.rebirthMultiplier + " income (" + rebirthPrice(playerId) + " coins)"\n\t}\n\tapi.sendMessage(playerId, text, { color: "yellow" })\n\tapi.openShop(playerId, false, "Upgrades", false)\n}\n\nfunction buyTycoonUpgrade(playerId, wanted) {\n\tconst upgrade = findUpgrade(wanted)\n\tif (upgrade === null) {\n\t\tapi.sendMessage(playerId, "That isn\'t an upgrade. Type /upgrades to see them.", { color: "orange" })\n\t} else if (ownedUpgrades[playerId].includes(upgrade[0])) {\n\t\tapi.sendMessage(playerId, "You already have " + upgrade[0] + ".", { color: "orange" })\n\t} else if (!spendCoins(playerId, upgrade[1])) {\n\t\tapi.sendMessage(playerId, upgrade[0] + " costs " + upgrade[1] + " coins. You have " + getCoins(playerId) + ".", { color: "orange" })\n\t} else {\n\t\tgainUpgrade(playerId, upgrade)\n\t}\n}\n\nfunction gainUpgrade(playerId, upgrade) {\n\townedUpgrades[playerId].push(upgrade[0])\n\trefreshTycoon(playerId)\n\tupgradeBought(playerId, upgrade)\n}\n\nfunction upgradeBought(playerId, upgrade) {\n\tapi.sendMessage(playerId, "You bought " + upgrade[0] + "! You now earn " + tycoonIncome(playerId) + " coins every second.", { color: "lime" })\n}\n\nfunction rebirthPlayer(playerId) {\n\tconst price = rebirthPrice(playerId)\n\tif (!spendCoins(playerId, price)) {\n\t\tapi.sendMessage(playerId, "Rebirth costs " + price + " coins. You have " + getCoins(playerId) + ".", { color: "orange" })\n\t\treturn\n\t}\n\tapi.setCurrencyAmount(playerId, "coins", CONFIG.startCoins)\n\townedUpgrades[playerId] = []\n\trebirthCounts[playerId] = (rebirthCounts[playerId] || 0) + 1\n\trefreshTycoon(playerId)\n\tannounce(api.getEntityName(playerId) + " rebirthed! They now earn x" + Math.round(rebirthBonus(playerId) * 100) / 100 + " coins.", "gold")\n}\n\nfunction onPlayerBoughtShopItem(playerId, categoryKey, itemKey) {\n\tconst upgrade = categoryKey === "Upgrades" ? CONFIG.upgrades[Number(itemKey.slice(7)) - 1] : null\n\t// The shop screen took the coins, and sells an upgrade only to players without it\n\tif (upgrade && ownedUpgrades[playerId] && !ownedUpgrades[playerId].includes(upgrade[0])) {\n\t\tgainUpgrade(playerId, upgrade)\n\t}\n}\n\nfunction playerCommand(playerId, command) {\n\tconst words = command.trim().split(" ")\n\tconst name = words[0].toLowerCase()\n\tconst rest = words.slice(1).join(" ").trim()\n\tif (name === "upgrades" || (name === "upgrade" && rest === "")) {\n\t\tlistUpgrades(playerId)\n\t\treturn true\n\t}\n\tif (name === "upgrade") {\n\t\tbuyTycoonUpgrade(playerId, rest)\n\t\treturn true\n\t}\n\tif (name === "rebirth" && CONFIG.rebirthCost > 0) {\n\t\trebirthPlayer(playerId)\n\t\treturn true\n\t}\n\treturn false\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete ownedUpgrades[playerId]\n\tdelete rebirthCounts[playerId]\n}',
        changeable: [{
          name: "tycoonIncome",
          about: "how many coins a player earns each second: the start income, plus each upgrade's, times their rebirths"
        }, {
          name: "upgradeBought",
          about: "what else happens when a player buys an upgrade: the message, or an extra like an item or speed"
        }, {
          name: "rebirthPlayer",
          about: "what /rebirth costs, takes away and gives"
        }],
        setup: "Nothing to build: coins come in by themselves. Players buy upgrades with /upgrade or in the shop screen."
      }, {
        name: "garden",
        kind: "game",
        title: "Grow a garden",
        category: "economy",
        summary: "Buy seeds with coins, plant them on soil, wait while they grow, break the ripe plants for fruit and sell it; some harvests are golden and worth much more",
        keywords: ["grow a garden", "grow a gardin", "garden", "gardens", "gardening", "gardan", "farm", "farms", "farming", "farmin", "farm sim", "farming simulator", "plant", "plants", "planting", "seed", "seeds", "crop", "crops", "harvest", "harvesting", "hravest", "fruit", "vegetables", "veggies", "mutation", "mutations", "golden fruit", "stardew"],
        howItPlays: "Each crop in crops is [seed block, plant name, fruit item, seed price, sell price, grow seconds]. /seeds lists them and /buyseed carrot 3 buys seeds with coins. A player places a seed on the soilBlock (anywhere else is refused) and the plant grows: the seed, then a sprout halfway, then ripe after its grow seconds, while everyone is away or not. Breaking a plant that isn't ripe is refused; breaking a ripe one gives its fruit, with a rareChance percent of being a golden harvest of rareMultiplier fruit, announced to everyone. Fruit are real items in the inventory: /sell or standing on the sellPad sells all of them for coins, and the sidebar shows what they are worth. With regrow on a harvested plant starts again as a seed, else it is gone and needs new seed. Coins are kept when saveCoins is on.",
        settings: [{
          key: "crops",
          kind: "list",
          names: "item",
          value: '[["Wheat Seeds", "Wheat", "Wheat", 5, 8, 10], ["Carrot Seeds", "Carrot Plant", "Carrot", 15, 30, 20], ["Potato Seeds", "Potato Plant", "Raw Potato", 40, 90, 40], ["Beetroot Seeds", "Beetroot Plant", "Beetroot", 100, 260, 70]]',
          about: "the crops, each [seed block players place, the plant's name (its stages and ripe block are made from it), fruit item harvested, seed price, price one fruit sells for, seconds to grow]"
        }, {
          key: "soilBlock",
          kind: "block",
          value: '"Tilled Soil"',
          about: "the block seeds must be placed on; build the garden out of it"
        }, {
          key: "sellPad",
          kind: "position",
          value: "[0, 10, 5]",
          about: "the block players stand on to sell all their fruit"
        }, {
          key: "startCoins",
          kind: "number",
          value: "20",
          about: "coins a new player starts with, for their first seeds"
        }, {
          key: "rareChance",
          kind: "number",
          value: "8",
          about: "percent of harvests that are golden (0 for none)"
        }, {
          key: "rareMultiplier",
          kind: "number",
          value: "5",
          about: "a golden harvest gives this many times the fruit, so is worth this many times as much"
        }, {
          key: "regrow",
          kind: "boolean",
          value: "false",
          about: "true: a harvested plant starts growing again by itself; false: it is gone and needs a new seed"
        }, {
          key: "saveCoins",
          kind: "boolean",
          value: "true",
          about: "true: coins are kept after a player leaves"
        }],
        code: '// Grow a garden: buy seeds with coins (/seeds, /buyseed), place them on the soil and wait. A ripe plant gives fruit when\n// broken, which /sell or the sell pad turns into coins. Some harvests are golden. Plants keep growing while players are away.\nconst plants = {}\nconst lastNotice = {}\nlet gardenStarted = false\n\nfunction onPlayerJoin(playerId) {\n\tstartGarden()\n\tapi.sendMessage(playerId, "Welcome to the garden! Type /seeds to see seeds. Place them on " + CONFIG.soilBlock + ", break them when ripe, then /sell.", { color: "aqua" })\n\tshowGarden(playerId)\n}\n\nfunction startGarden() {\n\tif (gardenStarted) {\n\t\treturn\n\t}\n\tgardenStarted = true\n\taddCommand("seeds", (playerId) => listSeeds(playerId))\n\taddCommand("buyseed", (playerId, args) => buySeeds(playerId, args))\n\taddCommand("sell", (playerId) => sellCommand(playerId))\n\taddCommand("sellcrops", (playerId) => sellCommand(playerId))\n\trepeatEvery(1, growPlants)\n}\n\nfunction plantKey(x, y, z) {\n\treturn x + "," + y + "," + z\n}\n\nfunction cropNumber(seedBlock) {\n\treturn CONFIG.crops.findIndex((crop) => crop[0] === seedBlock)\n}\n\n// 0 seed, 1 sprout, 2 ripe\nfunction stageOf(plant) {\n\tconst age = (Date.now() - plant.start) / 1000\n\tconst grow = CONFIG.crops[plant.crop][5]\n\treturn age >= grow ? 2 : age >= grow / 2 ? 1 : 0\n}\n\nfunction blockForStage(crop, stage) {\n\treturn [crop[0], crop[1] + "_stage1", crop[1] + "|FreshlyGrown"][stage]\n}\n\n// The same message at most every 1.5 seconds, as a player holding the break button would see it over and over\nfunction notice(playerId, text) {\n\tconst last = lastNotice[playerId]\n\tif (!last || last.text !== text || Date.now() - last.at > 1500) {\n\t\tlastNotice[playerId] = { text: text, at: Date.now() }\n\t\tapi.sendMessage(playerId, text, { color: "orange" })\n\t}\n}\n\n// Every second: shows each plant at its stage, forgets lost ones, sells for players on the pad and updates the sidebar\nfunction growPlants() {\n\tlet ripe = 0\n\tlet total = 0\n\tfor (const key of Object.keys(plants)) {\n\t\tconst plant = plants[key]\n\t\tconst there = api.getBlock(plant.x, plant.y, plant.z)\n\t\tif (there === "Unloaded") {\n\t\t\tcontinue\n\t\t}\n\t\tif (there === "Air") {\n\t\t\tdelete plants[key]\n\t\t\tcontinue\n\t\t}\n\t\tconst stage = stageOf(plant)\n\t\tconst wanted = blockForStage(CONFIG.crops[plant.crop], stage)\n\t\tif (there !== wanted) {\n\t\t\tapi.setBlock(plant.x, plant.y, plant.z, wanted)\n\t\t}\n\t\tif (there !== wanted || !plant.frozen) {\n\t\t\t// The game\'s own farming would grow it on its own clock: this puts that off for good\n\t\t\tapi.setBlockData(plant.x, plant.y, plant.z, { growTime: Date.now() + 1e13 })\n\t\t\tplant.frozen = true\n\t\t}\n\t\ttotal++\n\t\tripe += stage === 2 ? 1 : 0\n\t}\n\tconst pad = CONFIG.sellPad\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tif (isInBox(playerId, [pad[0] - 1, pad[1], pad[2] - 1], [pad[0] + 1, pad[1] + 3, pad[2] + 1])) {\n\t\t\tsellFruit(playerId)\n\t\t}\n\t\tsetSidebar(playerId, "Ripe plants", ripe + " of " + total)\n\t\tsetSidebar(playerId, "Fruit worth", fruitWorth(playerId) + " coins")\n\t}\n}\n\nfunction fruitWorth(playerId) {\n\treturn CONFIG.crops.reduce((sum, crop) => sum + Math.max(0, api.getInventoryItemAmount(playerId, crop[2])) * crop[4], 0)\n}\n\nfunction showGarden(playerId) {\n\tsetSidebar(playerId, "Fruit worth", fruitWorth(playerId) + " coins")\n}\n\nfunction listSeeds(playerId) {\n\tconst lines = CONFIG.crops.map((crop, index) => (index + 1) + ". " + crop[0] + ": " + crop[3] + " coins, fruit sells for " + crop[4] + ", ready in " + crop[5] + "s")\n\tapi.sendMessage(playerId, "Seeds:\\n" + lines.join("\\n") + "\\nBuy with /buyseed and a name or number, like /buyseed carrot 3", { color: "yellow" })\n}\n\nfunction buySeeds(playerId, args) {\n\tconst words = args.slice()\n\tlet amount = 1\n\tif (words.length > 1 && Number.isInteger(Number(words[words.length - 1]))) {\n\t\tamount = Math.min(64, Math.max(1, Number(words.pop())))\n\t}\n\tconst wanted = words.join(" ").toLowerCase()\n\tconst index = wanted !== "" && Number.isInteger(Number(wanted)) ? Number(wanted) - 1 : CONFIG.crops.findIndex((crop) => wanted !== "" && (crop[0] + " " + crop[2]).toLowerCase().includes(wanted))\n\tif (index < 0 || index >= CONFIG.crops.length) {\n\t\tlistSeeds(playerId)\n\t\treturn\n\t}\n\tconst crop = CONFIG.crops[index]\n\tif (!spendCoins(playerId, crop[3] * amount)) {\n\t\tapi.sendMessage(playerId, amount + " " + crop[0] + " cost " + crop[3] * amount + " coins. You have " + getCoins(playerId) + ".", { color: "orange" })\n\t\treturn\n\t}\n\tconst given = api.giveItem(playerId, crop[0], amount)\n\tif (given < amount) {\n\t\t// The price of what didn\'t fit back, as it is: addCoins would count it double during double coins\n\t\tapi.giveCurrencyAmount(playerId, "coins", (amount - given) * crop[3])\n\t\tapi.sendMessage(playerId, "Your inventory is full!", { color: "orange" })\n\t}\n\tif (given > 0) {\n\t\tapi.sendMessage(playerId, "Bought " + given + " " + crop[0] + "! Place them on " + CONFIG.soilBlock + ". They are ready in " + crop[5] + " seconds.", { color: "lime" })\n\t}\n}\n\nfunction sellCommand(playerId) {\n\tif (!sellFruit(playerId)) {\n\t\tapi.sendMessage(playerId, "You have no fruit to sell. Plant some seeds first!")\n\t}\n}\n\nfunction sellFruit(playerId) {\n\tlet count = 0\n\tlet coins = 0\n\tfor (const crop of CONFIG.crops) {\n\t\tconst have = api.getInventoryItemAmount(playerId, crop[2])\n\t\tif (have > 0) {\n\t\t\tapi.removeItemName(playerId, crop[2], have)\n\t\t\tcount += have\n\t\t\tcoins += have * crop[4]\n\t\t}\n\t}\n\tif (count === 0) {\n\t\treturn false\n\t}\n\taddCoins(playerId, coins)\n\tshowGarden(playerId)\n\tapi.sendMessage(playerId, "Sold " + count + " fruit for " + coins + " coins!", { color: "gold" })\n\treturn true\n}\n\n// What a harvest gives: the fruit, or a golden harvest of lots\nfunction harvestPlant(playerId, plant) {\n\tconst crop = CONFIG.crops[plant.crop]\n\tconst golden = Math.random() * 100 < CONFIG.rareChance\n\tconst amount = golden ? CONFIG.rareMultiplier : 1\n\tconst given = api.giveItem(playerId, crop[2], amount)\n\tif (given < amount) {\n\t\tdropItem(playerId, crop[2], amount - given)\n\t}\n\tif (golden) {\n\t\tapi.broadcastMessage(api.getEntityName(playerId) + " harvested a GOLDEN " + crop[2] + "! x" + amount, { color: "gold" })\n\t} else {\n\t\tapi.sendFlyingMiddleMessage(playerId, "+1 " + crop[2], 1)\n\t}\n\tshowGarden(playerId)\n}\n\nfunction onPlayerAttemptChangeBlock(playerId, x, y, z, fromBlock, toBlock) {\n\tconst plant = plants[plantKey(x, y, z)]\n\tif (toBlock === "Air" && plant && stageOf(plant) < 2) {\n\t\tnotice(playerId, "Not ripe yet! Give it a bit longer.")\n\t\treturn "preventChange"\n\t}\n\tif (fromBlock === "Air" && cropNumber(toBlock) >= 0 && api.getBlock(x, y - 1, z) !== CONFIG.soilBlock) {\n\t\tnotice(playerId, "Seeds only grow on " + CONFIG.soilBlock + "!")\n\t\treturn "preventChange"\n\t}\n}\n\nfunction onPlayerChangeBlock(playerId, x, y, z, fromBlock, toBlock) {\n\tconst key = plantKey(x, y, z)\n\tconst plant = plants[key]\n\tif (toBlock === "Air" && plant) {\n\t\tharvestPlant(playerId, plant)\n\t\tif (CONFIG.regrow) {\n\t\t\tplant.start = Date.now()\n\t\t\tplant.frozen = false\n\t\t\tapi.setBlock(x, y, z, CONFIG.crops[plant.crop][0])\n\t\t} else {\n\t\t\tdelete plants[key]\n\t\t}\n\t\treturn "preventDrop"\n\t}\n\tif (fromBlock === "Air" && cropNumber(toBlock) >= 0) {\n\t\tplants[key] = { x: x, y: y, z: z, crop: cropNumber(toBlock), start: Date.now(), frozen: false }\n\t\tapi.sendMessage(playerId, "Planted! Ready in " + CONFIG.crops[cropNumber(toBlock)][5] + " seconds.", { color: "lime" })\n\t}\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete lastNotice[playerId]\n}',
        changeable: [{
          name: "harvestPlant",
          about: "what breaking a ripe plant gives: the fruit, the golden harvest and its message"
        }, {
          name: "sellFruit",
          about: "how fruit is turned into coins, e.g. a bonus for selling a lot"
        }],
        setup: "Build a garden of the soilBlock (Tilled Soil: use a hoe on dirt) where players can place blocks, and put a block at sellPad for them to sell their fruit on."
      }, {
        name: "roleplayJobs",
        kind: "game",
        title: "City roleplay with jobs",
        category: "economy",
        summary: "City roleplay: pick a job with /job (police, doctor, miner...) to get its kit and earn coins on a timer, then /buy a house that only you can build in; coins, jobs and houses are saved",
        keywords: ["roleplay", "role play", "roleplaying", "rolplay", "rp", "city", "city rp", "town", "brookhaven", "bloxburg", "jobs", "job", "pick a job", "choose a job", "police", "cop", "cops", "doctor", "salary", "paycheck", "payday", "buy a house", "buy house", "houses", "real estate"],
        howItPlays: "Players start at spawnPosition with startCoins. /jobs lists the jobs; /job police (or its number) makes them a police officer and gives that job's kit (each job in jobs is [name, [[item, amount]...], pay per minute]); they get the kit again after dying. Every payEverySeconds each player is paid for their job. Each house in houses is [corner1, corner2, price]: standing inside one and typing /buy buys it, and then only its owner can place or break blocks in it; /home goes to your house. The sidebar shows job, coins and houses. Coins, jobs and houses are saved, so they're still there next time.",
        settings: [{
          key: "jobs",
          kind: "list",
          names: "item",
          value: '[["Police", [["Iron Sword", 1], ["Iron Chestplate", 1], ["Bread", 3]], 20], ["Doctor", [["Instant Healing Potion", 3], ["Apple", 5]], 25], ["Miner", [["Iron Pickaxe", 1], ["Bread", 3]], 15], ["Chef", [["Steak", 5], ["Pumpkin Pie", 3]], 15], ["Farmer", [["Iron Hoe", 1], ["Carrot", 8]], 10]]',
          about: "each job: [name, [[item, amount], ...] its kit, coins it pays per minute]"
        }, {
          key: "startCoins",
          kind: "number",
          value: "50",
          about: "coins a new player starts with"
        }, {
          key: "saveCoins",
          kind: "boolean",
          value: "true",
          about: "true: coins are kept after a player leaves"
        }, {
          key: "spawnPosition",
          kind: "position",
          value: "[0, 10, 0]",
          about: "where players start and come back after dying"
        }, {
          key: "houses",
          kind: "list",
          value: "[[[20, 10, 20], [28, 16, 28], 100], [[32, 10, 20], [40, 16, 28], 200]]",
          about: "each house for sale: [one corner [x, y, z], the opposite corner [x, y, z], price in coins]; the box between the corners is the house"
        }, {
          key: "payEverySeconds",
          kind: "number",
          value: "60",
          about: "how often everyone is paid for their job, in seconds"
        }],
        code: '// City roleplay: /jobs lists the jobs and /job <name> picks one, giving its kit. Everyone is paid for their job every\n// payEverySeconds. Stand in a house and type /buy to buy it: then only you can build in it, and /home takes you there.\n// Coins, jobs and houses are saved.\nconst jobOf = {}\nconst kitDue = {}\nlet payTimer = null\n\nfunction onPlayerJoin(playerId) {\n\tapi.setPosition(playerId, CONFIG.spawnPosition[0], CONFIG.spawnPosition[1], CONFIG.spawnPosition[2])\n\tjobOf[playerId] = findJob(String(getSaved(playerId, "job", "")))\n\tif (jobOf[playerId]) {\n\t\tgiveKit(playerId, jobOf[playerId][1])\n\t}\n\tlockHouses(playerId)\n\tupdateSidebar(playerId)\n\tif (payTimer === null) {\n\t\tpayTimer = repeatEvery(Math.max(1, CONFIG.payEverySeconds), payEveryone)\n\t}\n\tconst welcome = jobOf[playerId] ? "Welcome back! You work as " + jobOf[playerId][0] + "." : "Welcome to the city! Type /jobs to pick a job and start earning."\n\tapi.sendMessage(playerId, welcome, { color: "aqua" })\n}\n\n// A job by its name, the start of its name or its number in the list; null if there\'s none\nfunction findJob(wanted) {\n\tconst name = wanted.trim().toLowerCase()\n\tconst number = Number(name)\n\tif (name !== "" && Number.isInteger(number) && number >= 1 && number <= CONFIG.jobs.length) {\n\t\treturn CONFIG.jobs[number - 1]\n\t}\n\treturn name === "" ? null : CONFIG.jobs.find((job) => job[0].toLowerCase() === name) || CONFIG.jobs.find((job) => job[0].toLowerCase().startsWith(name)) || null\n}\n\nfunction payFor(job) {\n\treturn Math.round((job[2] * CONFIG.payEverySeconds) / 60)\n}\n\nfunction listJobs(playerId) {\n\tconst lines = CONFIG.jobs.map((job, index) => index + 1 + ". " + job[0] + ": " + payFor(job) + " coins every " + CONFIG.payEverySeconds + " seconds")\n\tapi.sendMessage(playerId, "Jobs:\\n" + lines.join("\\n") + "\\nType /job and a name, like /job " + CONFIG.jobs[0][0], { color: "yellow" })\n}\n\nfunction pickJob(playerId, wanted) {\n\tconst job = findJob(wanted)\n\tif (job === null) {\n\t\tlistJobs(playerId)\n\t\treturn\n\t}\n\tjobOf[playerId] = job\n\tsetSaved(playerId, "job", job[0])\n\tgiveKit(playerId, job[1])\n\tupdateSidebar(playerId)\n\tapi.sendMessage(playerId, "You are now a " + job[0] + "! You earn " + payFor(job) + " coins every " + CONFIG.payEverySeconds + " seconds.", { color: "lime" })\n}\n\nfunction payEveryone() {\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tif (jobOf[playerId]) {\n\t\t\tpaySalary(playerId, jobOf[playerId])\n\t\t}\n\t}\n}\n\nfunction paySalary(playerId, job) {\n\taddCoins(playerId, payFor(job))\n\tupdateSidebar(playerId)\n\tapi.sendMessage(playerId, "Payday! +" + payFor(job) + " coins for your work as " + job[0] + ".", { color: "lime" })\n}\n\n// A house\'s owner is kept for the lobby, so it stays theirs after they leave\nfunction ownsHouse(playerId, index) {\n\treturn api.getLobbyDbValue("house" + index) === String(api.getPlayerDbId(playerId))\n}\n\n// Nobody can change blocks in a house but its owner\nfunction lockHouses(playerId) {\n\tCONFIG.houses.forEach((house, index) => {\n\t\tif (ownsHouse(playerId, index)) {\n\t\t\tapi.resetCanChangeBlockRect(playerId, house[0].slice(), house[1].slice())\n\t\t} else {\n\t\t\tapi.setCantChangeBlockRect(playerId, house[0].slice(), house[1].slice())\n\t\t}\n\t})\n}\n\nfunction buyHouse(playerId) {\n\tconst index = CONFIG.houses.findIndex((house) => isInBox(playerId, house[0], house[1]))\n\tconst house = CONFIG.houses[index]\n\tif (index === -1) {\n\t\tapi.sendMessage(playerId, "Stand inside a house for sale, then type /buy.", { color: "yellow" })\n\t} else if (ownsHouse(playerId, index)) {\n\t\tapi.sendMessage(playerId, "This is already your house!", { color: "yellow" })\n\t} else if (api.getLobbyDbValue("house" + index) !== null) {\n\t\tapi.sendMessage(playerId, "Sorry, this house belongs to " + api.getLobbyDbValue("houseName" + index) + ".", { color: "red" })\n\t} else if (!spendCoins(playerId, house[2])) {\n\t\tapi.sendMessage(playerId, "This house costs " + house[2] + " coins. You have " + getCoins(playerId) + ".", { color: "red" })\n\t} else {\n\t\tapi.setLobbyDbValue("house" + index, String(api.getPlayerDbId(playerId)))\n\t\tapi.setLobbyDbValue("houseName" + index, api.getEntityName(playerId))\n\t\tlockHouses(playerId)\n\t\tupdateSidebar(playerId)\n\t\tapi.broadcastMessage(api.getEntityName(playerId) + " bought a house!", { color: "lime" })\n\t}\n}\n\nfunction goHome(playerId) {\n\tconst house = CONFIG.houses.find((house, index) => ownsHouse(playerId, index))\n\tif (!house) {\n\t\tapi.sendMessage(playerId, "You don\'t have a house yet. Stand in one and type /buy.", { color: "yellow" })\n\t\treturn\n\t}\n\t// The middle of the house, standing on its lowest layer\n\tapi.setPosition(playerId, (house[0][0] + house[1][0] + 1) / 2, Math.min(house[0][1], house[1][1]) + 1, (house[0][2] + house[1][2] + 1) / 2)\n}\n\nfunction updateSidebar(playerId) {\n\tsetSidebar(playerId, "Job", jobOf[playerId] ? jobOf[playerId][0] : "none (type /jobs)")\n\tsetSidebar(playerId, "Coins", getCoins(playerId))\n\tsetSidebar(playerId, "Houses", CONFIG.houses.filter((house, index) => ownsHouse(playerId, index)).length)\n}\n\nfunction playerCommand(playerId, command) {\n\tconst words = command.trim().split(" ")\n\tconst name = words[0].toLowerCase()\n\tif (name === "jobs" || (name === "job" && words.length === 1)) {\n\t\tlistJobs(playerId)\n\t} else if (name === "job") {\n\t\tpickJob(playerId, words.slice(1).join(" "))\n\t} else if ((name === "buy" && words.length === 1) || name === "buyhouse") {\n\t\tbuyHouse(playerId)\n\t} else if (name === "home") {\n\t\tgoHome(playerId)\n\t} else {\n\t\t// /buy with a name is left to a shop\n\t\treturn false\n\t}\n\treturn true\n}\n\n// The job\'s kit comes back after dying, once the player is alive again\nfunction onRespawnRequest(playerId) {\n\tkitDue[playerId] = true\n\treturn CONFIG.spawnPosition\n}\n\nfunction tick(ms) {\n\tfor (const playerId of Object.keys(kitDue)) {\n\t\tif (api.isAlive(playerId)) {\n\t\t\tdelete kitDue[playerId]\n\t\t\tif (jobOf[playerId]) {\n\t\t\t\tgiveKit(playerId, jobOf[playerId][1])\n\t\t\t}\n\t\t}\n\t}\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete jobOf[playerId]\n\tdelete kitDue[playerId]\n}',
        changeable: [{
          name: "paySalary",
          about: "what a player gets every payday for their job: the coins and the message"
        }, {
          name: "pickJob",
          about: "what happens when a player picks a job with /job: the kit, the message, extras like speed for some jobs"
        }, {
          name: "buyHouse",
          about: "how a house is bought with /buy: the checks, the price and the message"
        }],
        setup: "Build a house inside each box in houses (the corners are opposite corners of the house) and a spawn at spawnPosition; players can't change blocks in a house until they buy it."
      }, {
        name: "plots",
        kind: "game",
        title: "Plots / build battle",
        category: "building",
        summary: 'Every player gets their own square plot that only they can build on (/plot goes back to it); "free" mode keeps it for good, "battle" mode is a build battle: build the theme in time, then everyone rates each build 1 to 5',
        keywords: ["claim", "claims", "land claim", "plot", "plots", "my plot", "own plot", "plot world", "build battle", "buildbattle", "build battles", "build off", "build contest", "building contest", "build competition", "speed build", "speedbuild", "skyblock", "sky block", "own island", "my island", "creative plots", "rate builds", "vote on builds", "builds", "best build", "with a theme"],
        howItPlays: 'Plots are squares of plotSize blocks in rows of plotsPerRow, starting at plotOrigin (the floor of the first plot), with plotSpacing blocks of path between them. A player can only place or break blocks inside their own plot; /plot (or /home) takes them back to it. Builders are put in creative mode. mode "free": every new player gets the next empty plot, laid with a fresh floor, and keeps it for good, even after leaving. mode "battle": once minPlayers are in, a countdown runs, a random theme from themes is announced and everyone gets a cleared plot for buildSeconds. Then everyone visits each build in turn and rates it by typing 1 to 5 in chat (or /vote 4) for voteSeconds; nobody rates their own. The best average wins, then the next battle starts.',
        settings: [{
          key: "plotOrigin",
          kind: "position",
          value: "[100, 10, 100]",
          about: "the corner of the first plot, at its floor; plots go along x in rows, and rows along z"
        }, {
          key: "plotSize",
          kind: "number",
          value: "16",
          about: "how wide each square plot is, in blocks"
        }, {
          key: "plotSpacing",
          kind: "number",
          value: "4",
          about: "blocks of path between plots (nobody can build on paths)"
        }, {
          key: "plotsPerRow",
          kind: "number",
          value: "5",
          about: "how many plots in each row"
        }, {
          key: "mode",
          kind: "string",
          value: '"free"',
          about: '"free": every player keeps their own plot for good; "battle": build battle rounds with a theme and voting'
        }, {
          key: "themes",
          kind: "list",
          value: '["House", "Castle", "Rocket", "Treehouse", "Monster", "Car", "Pirate Ship", "Robot"]',
          about: "battle mode: one is picked at random each round for everyone to build"
        }, {
          key: "buildSeconds",
          kind: "number",
          value: "300",
          about: "battle mode: how long players have to build, in seconds"
        }, {
          key: "voteSeconds",
          kind: "number",
          value: "15",
          about: "battle mode: how long everyone gets to rate each build, in seconds"
        }, {
          key: "minPlayers",
          kind: "number",
          value: "2",
          about: "battle mode: players needed before a build battle starts"
        }],
        code: '// Plots: every player gets their own square plot; only they can build on it, and /plot takes them back to it.\n// "free" mode: a player keeps their plot for good. "battle" mode: a theme is announced, everyone builds it on a fresh\n// plot, then everyone visits each build and rates it 1 to 5. The best rated build wins.\nconst maxPlots = 40 // free mode: plots are kept for good, so after this many players newcomers get none\nconst plotHeight = 40 // how high players can build above the floor\nconst floorBlock = "Grass Block"\nconst buildGamemode = "creative" // "survival": players build with the blocks they have\nconst battleCountdown = 10\nconst plotOf = {} // a player: their plot\'s number\nconst buildRects = {} // a player: the boxes they can\'t build in\nconst clearQueue = [] // plots waiting to be cleared: { plot, layer }\nlet phase = "waiting" // battle mode: waiting, countdown, building, voting or break\nlet builders = []\nlet ratings = {} // a builder: { a voter: 1 to 5 }\nlet tour = []\nlet showing = null // the builder whose plot everyone is rating\nlet phaseTimer = null\n\nfunction onPlayerJoin(playerId) {\n\tapi.setPlayerGamemode(playerId, buildGamemode)\n\tconst plot = CONFIG.mode === "battle" ? null : findPlot(playerId)\n\tsetBuildArea(playerId, plot)\n\tif (CONFIG.mode === "battle") {\n\t\tapi.sendMessage(playerId, "Welcome to Build Battle! Build the theme in time, then rate everyone\'s builds.", { color: "aqua" })\n\t} else if (plot === null) {\n\t\tapi.sendMessage(playerId, "Sorry, every plot is taken!", { color: "red" })\n\t} else {\n\t\tplotOf[playerId] = plot\n\t\tgoToPlot(playerId, plot)\n\t\tapi.sendMessage(playerId, "This is your plot! Only you can build here. Type /plot to come back.", { color: "aqua" })\n\t}\n}\n\n// Free mode: the plot this player had before, else the next one nobody has had (kept for the lobby)\nfunction findPlot(playerId) {\n\tconst me = String(api.getPlayerDbId(playerId))\n\tlet free = null\n\tfor (let plot = 0; plot < maxPlots; plot++) {\n\t\tconst owner = api.getLobbyDbValue("plot" + plot)\n\t\tif (owner === me) {\n\t\t\treturn plot\n\t\t}\n\t\tif (owner === null && free === null) {\n\t\t\tfree = plot\n\t\t}\n\t}\n\tif (free !== null) {\n\t\tapi.setLobbyDbValue("plot" + free, me)\n\t\tclearPlot(free)\n\t}\n\treturn free\n}\n\n// The lowest corner of a plot, at its floor\nfunction plotCorner(plot) {\n\tconst step = CONFIG.plotSize + CONFIG.plotSpacing\n\tconst origin = CONFIG.plotOrigin.map(Math.floor)\n\treturn [origin[0] + (plot % CONFIG.plotsPerRow) * step, origin[1], origin[2] + Math.floor(plot / CONFIG.plotsPerRow) * step]\n}\n\nfunction goToPlot(playerId, plot) {\n\tconst corner = plotCorner(plot)\n\tapi.setPosition(playerId, corner[0] + CONFIG.plotSize / 2, corner[1] + 1, corner[2] + 0.5)\n}\n\n// Lets a player build only inside their plot (none: nowhere): every other part of the plots, paths too, is boxed off\nfunction setBuildArea(playerId, plot) {\n\tfor (const rect of buildRects[playerId] || []) {\n\t\tapi.resetCanChangeBlockRect(playerId, rect[0], rect[1])\n\t}\n\tconst step = CONFIG.plotSize + CONFIG.plotSpacing\n\tconst low = plotCorner(0)\n\tconst high = [low[0] + CONFIG.plotsPerRow * step - 1, low[1] + plotHeight, low[2] + Math.ceil(maxPlots / CONFIG.plotsPerRow) * step - 1]\n\tlet rects = [[low, high]]\n\tif (plot !== null) {\n\t\tconst a = plotCorner(plot)\n\t\tconst b = [a[0] + CONFIG.plotSize - 1, high[1], a[2] + CONFIG.plotSize - 1]\n\t\trects = [\n\t\t\t[low, [a[0] - 1, high[1], high[2]]],\n\t\t\t[[b[0] + 1, low[1], low[2]], high],\n\t\t\t[[a[0], low[1], low[2]], [b[0], high[1], a[2] - 1]],\n\t\t\t[[a[0], low[1], b[2] + 1], [b[0], high[1], high[2]]],\n\t\t].filter((rect) => rect[0][0] <= rect[1][0] && rect[0][2] <= rect[1][2])\n\t}\n\tbuildRects[playerId] = rects\n\tfor (const rect of rects) {\n\t\tapi.setCantChangeBlockRect(playerId, rect[0].slice(), rect[1].slice())\n\t}\n}\n\n// Empties a plot and lays its floor, a few layers a tick, once its part of the world has loaded\nfunction clearPlot(plot) {\n\tclearQueue.push({ plot: plot, layer: 0 })\n}\n\nfunction clearSomeLayers() {\n\tconst job = clearQueue[0]\n\tconst a = plotCorner(job.plot)\n\tconst b = [a[0] + CONFIG.plotSize - 1, a[1], a[2] + CONFIG.plotSize - 1]\n\tfor (let i = 0; i < 8 && job.layer <= plotHeight; i++) {\n\t\tconst y = a[1] + job.layer\n\t\tif ([api.getBlock(a[0], y, a[2]), api.getBlock(b[0], y, b[2]), api.getBlock(a[0], y, b[2]), api.getBlock(b[0], y, a[2])].includes("Unloaded")) {\n\t\t\treturn\n\t\t}\n\t\tfor (let z = a[2]; z <= b[2]; z++) {\n\t\t\tapi.setBlockRect([a[0], y, z], [b[0], y, z], job.layer === 0 ? floorBlock : "Air")\n\t\t}\n\t\tjob.layer++\n\t}\n\tif (job.layer > plotHeight) {\n\t\tclearQueue.shift()\n\t}\n}\n\nfunction tick(ms) {\n\tif (clearQueue.length > 0) {\n\t\tclearSomeLayers()\n\t}\n\tconst count = api.getPlayerIds().length\n\tif (CONFIG.mode === "battle" && phase === "waiting" && count >= CONFIG.minPlayers) {\n\t\tphase = "countdown"\n\t\tstartCountdown(battleCountdown, startBuilding)\n\t} else if (phase === "countdown" && count < CONFIG.minPlayers) {\n\t\tcancelCountdown()\n\t\tphase = "waiting"\n\t}\n}\n\nfunction startBuilding() {\n\tphase = "building"\n\tconst theme = pickRandom(CONFIG.themes) || "anything you like"\n\tbuilders = shuffleList(api.getPlayerIds())\n\tratings = {}\n\tbuilders.forEach((playerId, plot) => {\n\t\tplotOf[playerId] = plot\n\t\tratings[playerId] = {}\n\t\tclearPlot(plot)\n\t\tsetBuildArea(playerId, plot)\n\t\tgoToPlot(playerId, plot)\n\t\tsetSidebar(playerId, "Theme", theme)\n\t})\n\tannounce("Build a " + theme + "! You have " + CONFIG.buildSeconds + " seconds.", "aqua")\n\tphaseTimer = runLater(CONFIG.buildSeconds, startVoting)\n}\n\nfunction startVoting() {\n\tphase = "voting"\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tsetBuildArea(playerId, null)\n\t}\n\ttour = builders.slice()\n\tshowNextBuild()\n}\n\n// Takes everyone to the next builder\'s plot to rate it; after the last one, the best rated build wins\nfunction showNextBuild() {\n\tcancelTimer(phaseTimer)\n\ttour = tour.filter((playerId) => plotOf[playerId] !== undefined)\n\tshowing = tour.shift() || null\n\tif (showing === null) {\n\t\tfinishBattle()\n\t\treturn\n\t}\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tgoToPlot(playerId, plotOf[showing])\n\t}\n\tannounce("Rate " + api.getEntityName(showing) + "\'s build! Type 1 to 5 in chat.", "yellow")\n\tphaseTimer = runLater(CONFIG.voteSeconds, showNextBuild)\n}\n\nfunction averageRating(playerId) {\n\tconst stars = Object.values(ratings[playerId] || {})\n\treturn stars.length === 0 ? 0 : stars.reduce((sum, n) => sum + n, 0) / stars.length\n}\n\nfunction finishBattle() {\n\tconst left = builders.filter((playerId) => plotOf[playerId] !== undefined)\n\tconst best = left.reduce((top, playerId) => (top === null || averageRating(playerId) > averageRating(top) ? playerId : top), null)\n\tif (best !== null && averageRating(best) > 0) {\n\t\twinBattle(best, averageRating(best))\n\t} else {\n\t\tannounce("Nobody got any votes this time!", "gold")\n\t}\n\tphase = "break"\n\tshowing = null\n\tphaseTimer = runLater(battleCountdown, () => {\n\t\tphase = "waiting"\n\t})\n}\n\nfunction winBattle(playerId, stars) {\n\tconst wins = addSaved(playerId, "buildBattleWins", 1)\n\tannounce(api.getEntityName(playerId) + " wins with " + stars.toFixed(1) + " stars! (" + wins + " wins)", "gold")\n}\n\n// A rating of 1 to 5 for the build on show; false when it isn\'t one\nfunction rate(playerId, text) {\n\tconst stars = Number(text)\n\tif (phase !== "voting" || showing === null || !Number.isInteger(stars) || stars < 1 || stars > 5) {\n\t\treturn false\n\t}\n\tif (playerId === showing) {\n\t\tapi.sendMessage(playerId, "You can\'t rate your own build!", { color: "red" })\n\t} else {\n\t\tratings[showing][playerId] = stars\n\t\tapi.sendMessage(playerId, "You gave it " + stars + " stars!", { color: "lime" })\n\t}\n\treturn true\n}\n\nfunction onPlayerChat(playerId, chatMessage) {\n\tif (rate(playerId, chatMessage.trim())) {\n\t\treturn false\n\t}\n}\n\nfunction playerCommand(playerId, command) {\n\tconst words = command.trim().toLowerCase().split(" ")\n\tif (words[0] === "plot" || words[0] === "home") {\n\t\tif (plotOf[playerId] === undefined || (CONFIG.mode === "battle" && phase !== "building")) {\n\t\t\tapi.sendMessage(playerId, "You don\'t have a plot right now.", { color: "red" })\n\t\t} else {\n\t\t\tgoToPlot(playerId, plotOf[playerId])\n\t\t}\n\t\treturn true\n\t}\n\tif ((words[0] === "vote" || words[0] === "rate") && phase === "voting") {\n\t\tif (!rate(playerId, words[1] || "")) {\n\t\t\tapi.sendMessage(playerId, "Type a number from 1 to 5, like /vote 4", { color: "red" })\n\t\t}\n\t\treturn true\n\t}\n\treturn false\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete plotOf[playerId]\n\tdelete buildRects[playerId]\n\tif (showing === playerId) {\n\t\tshowNextBuild()\n\t}\n\trunLater(0, () => {\n\t\tconst left = builders.filter((id) => plotOf[id] !== undefined)\n\t\tif (phase === "building" && left.length < 2) {\n\t\t\tcancelTimer(phaseTimer)\n\t\t\tannounce("Not enough builders left, so the battle is over.", "yellow")\n\t\t\tfinishBattle()\n\t\t}\n\t})\n}',
        changeable: [{
          name: "winBattle",
          about: "what the best rated builder gets in battle mode: the message and the reward (it saves their wins)"
        }, {
          name: "clearPlot",
          about: "what an empty plot looks like: by default it is cleared and gets a fresh Grass Block floor"
        }],
        setup: "Pick a flat open spot away from spawn for plotOrigin: the plots and their floors are made for you there, and anything already in that area is cleared."
      }, {
        name: "murderMystery",
        kind: "game",
        title: "Murder Mystery",
        category: "tag",
        summary: "Each round one secret murderer with a one-hit sword and one sheriff with a bow: innocents survive the clock or the sheriff stops the murderer",
        keywords: ["murder mystery", "murdermystery", "murder", "murderer", "murder mistery", "mm2", "mm", "sheriff", "detective", "innocent", "innocents", "among us", "amongus", "impostor", "imposter", "traitor", "killer", "who is the killer"],
        howItPlays: "Rounds: once minPlayers are in, a countdown runs and everyone is spread around spawnPosition. One random player is secretly the murderer (gets murdererWeapon, which kills in one hit), one the sheriff (gets sheriffWeapon and sheriffArrows arrows, and kills in one hit), the rest innocent; each is told their role privately, and it shows on their sidebar. Nobody else can hurt anyone. A player who dies watches as a spectator. The innocents win when the murderer dies or roundSeconds run out; the murderer wins when everyone else is dead. If sheriffDiesForInnocent is on, a sheriff who kills an innocent dies too.",
        settings: [{
          key: "spawnPosition",
          kind: "position",
          value: "[0, 10, 0]",
          about: "the middle of the map, where players are spread around at the start"
        }, {
          key: "spreadRadius",
          kind: "number",
          value: "10",
          about: "how far from spawnPosition players are spread at the start, in blocks"
        }, {
          key: "murdererWeapon",
          kind: "item",
          value: '"Diamond Sword"',
          about: "the murderer's weapon, which kills in one hit"
        }, {
          key: "sheriffWeapon",
          kind: "item",
          value: '"Iron Bow"',
          about: "the sheriff's weapon"
        }, {
          key: "sheriffArrows",
          kind: "number",
          value: "16",
          about: "how many arrows the sheriff gets"
        }, {
          key: "sheriffDiesForInnocent",
          kind: "boolean",
          value: "true",
          about: "true: a sheriff who kills an innocent dies too"
        }, {
          key: "minPlayers",
          kind: "number",
          value: "3",
          about: "players needed before a round starts"
        }, {
          key: "roundSeconds",
          kind: "number",
          value: "180",
          about: "how long the innocents must survive, in seconds"
        }],
        code: '// Murder Mystery: each round one player is secretly the murderer, with a sword that kills in one hit, and one is the\n// sheriff, with a bow. Everyone else is innocent. The innocents win if the murderer dies or time runs out; the murderer\n// wins when everyone else is dead. A sheriff who kills an innocent dies too.\nconst roles = {}\nlet murdererId = null\nlet murdererName = ""\nlet sheriffId = null\nlet winner = null\n\nfunction onPlayerJoin(playerId) {\n\tif (isRoundRunning()) {\n\t\teliminate(playerId)\n\t\tapi.sendMessage(playerId, "A round is on: watch this one, you\'ll play in the next!", { color: "yellow" })\n\t\treturn\n\t}\n\tapi.setPlayerGamemode(playerId, "survival")\n\tapi.setPosition(playerId, CONFIG.spawnPosition[0], CONFIG.spawnPosition[1], CONFIG.spawnPosition[2])\n\tapi.sendMessage(playerId, "Welcome to Murder Mystery! Find the murderer before they find you.", { color: "aqua" })\n}\n\nfunction beginRound() {\n\tbringEveryoneBack()\n\tconst players = shuffleList(api.getPlayerIds())\n\tmurdererId = players[0]\n\tmurdererName = api.getEntityName(murdererId)\n\tsheriffId = players.length > 1 ? players[1] : null\n\twinner = null\n\tfor (const playerId of players) {\n\t\troles[playerId] = playerId === murdererId ? "Murderer" : playerId === sheriffId ? "Sheriff" : "Innocent"\n\t\tconst spot = randomSpot(CONFIG.spawnPosition, CONFIG.spreadRadius)\n\t\tif (!api.isAlive(playerId)) {\n\t\t\tapi.forceRespawn(playerId, spot)\n\t\t}\n\t\tapi.setPosition(playerId, spot[0], spot[1], spot[2])\n\t\thealFully(playerId)\n\t\tgiveRoleItems(playerId)\n\t\tsetSidebar(playerId, "Role", roles[playerId])\n\t}\n}\n\n// Gives each role its items and tells the player their role, only them\nfunction giveRoleItems(playerId) {\n\tif (roles[playerId] === "Murderer") {\n\t\tgiveKit(playerId, [[CONFIG.murdererWeapon, 1]])\n\t\tapi.sendMessage(playerId, "You are the MURDERER! Get everyone without being caught.", { color: "red" })\n\t} else if (roles[playerId] === "Sheriff") {\n\t\tgiveKit(playerId, [[CONFIG.sheriffWeapon, 1], ["Arrow", CONFIG.sheriffArrows]])\n\t\tapi.sendMessage(playerId, "You are the SHERIFF! Find the murderer and stop them.", { color: "aqua" })\n\t} else {\n\t\tgiveKit(playerId, [])\n\t\tapi.sendMessage(playerId, "You are INNOCENT! Stay alive and watch out.", { color: "lime" })\n\t}\n}\n\nfunction onPlayerDamagingOtherPlayer(attackingPlayer, damagedPlayer, damageDealt, withItem) {\n\tif (!isRoundRunning() || !roles[damagedPlayer]) {\n\t\treturn "preventDamage"\n\t}\n\tif (attackingPlayer === murdererId && withItem === CONFIG.murdererWeapon) {\n\t\treturn 1000\n\t}\n\tif (attackingPlayer === sheriffId) {\n\t\treturn 1000\n\t}\n\treturn "preventDamage"\n}\n\nfunction onPlayerKilledOtherPlayer(attackingPlayer, killedPlayer) {\n\tif (isRoundRunning() && CONFIG.sheriffDiesForInnocent && attackingPlayer === sheriffId && roles[killedPlayer] === "Innocent") {\n\t\tapi.sendMessage(attackingPlayer, "You got an innocent player, so you\'re out too!", { color: "red" })\n\t\tapi.killLifeform(attackingPlayer)\n\t}\n\treturn "keepInventory"\n}\n\nfunction onRespawnRequest(playerId) {\n\treturn CONFIG.spawnPosition\n}\n\nfunction tick(ms) {\n\tif (!isRoundRunning()) {\n\t\treturn\n\t}\n\tfor (const playerId of playersLeft()) {\n\t\tif (roles[playerId] && !api.isAlive(playerId)) {\n\t\t\teliminate(playerId)\n\t\t\tapi.sendMessage(playerId, "You died! Watch until the next round.", { color: "red" })\n\t\t}\n\t}\n\t// Leaving counts too: the murderer gone, or nobody else left\n\tconst alive = playersLeft().filter((playerId) => roles[playerId])\n\tif (!alive.includes(murdererId)) {\n\t\twinner = "innocents"\n\t\tendRound()\n\t} else if (alive.length === 1) {\n\t\twinner = "murderer"\n\t\tendRound()\n\t}\n}\n\n// Runs when the round ends, whoever won; time running out means the innocents win\nfunction finishRound() {\n\tif (winner === "murderer") {\n\t\tmurdererWins()\n\t} else {\n\t\tinnocentsWin()\n\t}\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tgiveKit(playerId, [])\n\t\tsetSidebar(playerId, "Role", "-")\n\t\tdelete roles[playerId]\n\t}\n\tmurdererId = null\n\tsheriffId = null\n}\n\nfunction innocentsWin() {\n\tannounce("The innocents win! The murderer was " + murdererName + ".", "lime")\n}\n\nfunction murdererWins() {\n\tannounce("The murderer " + murdererName + " wins!", "red")\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete roles[playerId]\n}',
        changeable: [{
          name: "giveRoleItems",
          about: "what each role gets and is told at the start of a round"
        }, {
          name: "innocentsWin",
          about: "what happens when the innocents win: the message, rewards"
        }, {
          name: "murdererWins",
          about: "what happens when the murderer wins: the message, rewards"
        }],
        setup: "Build a map around spawnPosition with places to hide, and turn PvP on in the world settings."
      }, {
        name: "infection",
        kind: "game",
        title: "Infection / zombie tag",
        category: "tag",
        summary: 'Rounds of zombie tag: a random player starts infected, every human they hit is infected too, and humans win by surviving the time; or plain tag, where a hit passes "it" on (tagMode); or a chase where caught players are out (caughtAreOut)',
        keywords: ["infection", "infected", "infect", "infecton", "tag", "zombie tag", "zombie", "zombies", "freeze tag", "you're it", "tagger", "chase", "chaser", "catch", "virus", "outbreak"],
        howItPlays: "Once minPlayers are in, a countdown starts a round at spawnPosition. startInfected random players start infected, with a zombie head. An infected player hitting a human infects them; nobody takes damage. Humans win if any survive roundSeconds and each survivor gets winCoins; the infected win when everyone is infected. Who is what and the humans left show on the sidebar. Players who join mid-round are infected (in tagMode they run); if every infected player leaves, a random human becomes infected. With caughtAreOut the infected are chasers and a caught runner is out instead (they watch); the chasers win when every runner is caught.",
        settings: [{
          key: "spawnPosition",
          kind: "position",
          value: "[0, 10, 0]",
          about: "where everyone starts each round"
        }, {
          key: "minPlayers",
          kind: "number",
          value: "2",
          about: "players needed before a round starts"
        }, {
          key: "roundSeconds",
          kind: "number",
          value: "120",
          about: "how long humans must survive to win, in seconds"
        }, {
          key: "countdownSeconds",
          kind: "number",
          value: "10",
          about: "the countdown before each round"
        }, {
          key: "startInfected",
          kind: "number",
          value: "1",
          about: "how many random players start infected"
        }, {
          key: "winCoins",
          kind: "number",
          value: "10",
          about: "coins each surviving human gets when time runs out (0 for none)"
        }, {
          key: "tagMode",
          kind: "boolean",
          value: "false",
          about: "true: plain tag, one player is it and a hit passes it on; whoever is it when time runs out loses"
        }, {
          key: "caughtAreOut",
          kind: "boolean",
          value: "false",
          about: "true: the infected are chasers and a runner they hit is out (watches) instead of infected; runners still in when time runs out win"
        }],
        code: '// Infection: one random player starts infected. Infected players hit humans to infect them. Humans win if any are\n// left when the time runs out; the infected win when everyone is infected. Rounds start by themselves.\nconst infected = {}\nlet infectedWon = false\n// Tag mode: when "it" last changed, so the new "it" can\'t tag straight back\nlet lastTagAt = 0\nlet lastSecondsShown = -1\n\nfunction onPlayerJoin(playerId) {\n\tapi.setPosition(playerId, CONFIG.spawnPosition[0], CONFIG.spawnPosition[1], CONFIG.spawnPosition[2])\n\tapi.sendMessage(playerId, "Infection! Stay away from the zombies, or catch the humans if you\'re one.", { color: "aqua" })\n\t// In tag mode there is only ever one "it"\n\tif (isRoundRunning() && !CONFIG.tagMode) {\n\t\tinfect(playerId)\n\t}\n}\n\nfunction isInfected(playerId) {\n\treturn infected[playerId] === true\n}\n\nfunction humansLeft() {\n\treturn (CONFIG.caughtAreOut ? playersLeft() : api.getPlayerIds()).filter((playerId) => !isInfected(playerId))\n}\n\nfunction beginRound() {\n\tinfectedWon = false\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tapi.setPosition(playerId, CONFIG.spawnPosition[0], CONFIG.spawnPosition[1], CONFIG.spawnPosition[2])\n\t\thealFully(playerId)\n\t}\n\tconst players = shuffleList(api.getPlayerIds())\n\tconst count = CONFIG.tagMode ? 1 : Math.max(1, Math.min(CONFIG.startInfected, players.length - 1))\n\tconst first = players.slice(0, count)\n\tfor (const playerId of first) {\n\t\tinfect(playerId)\n\t}\n\tconst names = first.map((playerId) => api.getEntityName(playerId)).join(" and ")\n\tannounce(names + (first.length === 1 ? " is" : " are") + (CONFIG.tagMode ? " it! Run!" : CONFIG.caughtAreOut ? " the chaser! Run!" : " infected! Run!"), "red")\n}\n\nfunction infect(playerId) {\n\tinfected[playerId] = true\n\tapi.changePlayerIntoSkin(playerId, "head", "zombie")\n\tapi.sendMessage(playerId, CONFIG.tagMode ? "You\'re it! Hit someone to pass it on." : CONFIG.caughtAreOut ? "You\'re a chaser! Hit runners to catch them." : "You are infected! Hit humans to infect them.", { color: "red" })\n\tupdateSidebars()\n\tcheckWin()\n}\n\nfunction checkWin() {\n\tif (!isRoundRunning()) {\n\t\treturn\n\t}\n\tconst players = api.getPlayerIds()\n\tif (players.length < 2) {\n\t\tendRound("Not enough players left.")\n\t} else if (humansLeft().length === 0) {\n\t\tinfectedWon = true\n\t\tendRound(CONFIG.caughtAreOut ? "Everyone was caught! The chasers win!" : "Everyone is infected! The infected win!")\n\t} else if (humansLeft().length === (CONFIG.caughtAreOut ? playersLeft() : players).length) {\n\t\t// Nobody is chasing (the infected left): one of those still in becomes it\n\t\tconst next = pickRandom(humansLeft())\n\t\tinfect(next)\n\t\tannounce(api.getEntityName(next) + " is now infected!", "red")\n\t}\n}\n\nfunction cure(playerId) {\n\tdelete infected[playerId]\n\tapi.removeAppliedSkin(playerId)\n}\n\nfunction rewardSurvivors(humans) {\n\tif (CONFIG.tagMode) {\n\t\tconst losers = Object.keys(infected).map((id) => api.getEntityName(id))\n\t\tannounce(losers.join(" and ") + " is it and loses! Everyone else wins.", "lime")\n\t} else {\n\t\tannounce((CONFIG.caughtAreOut ? "The runners win! Still in: " : "The humans win! Survivors: ") + humans.map((id) => api.getEntityName(id)).join(", "), "lime")\n\t}\n\tfor (const playerId of humans) {\n\t\tif (CONFIG.winCoins > 0) {\n\t\t\taddCoins(playerId, CONFIG.winCoins)\n\t\t}\n\t}\n}\n\nfunction finishRound() {\n\tconst humans = humansLeft()\n\tif (!infectedWon && humans.length > 0 && api.getPlayerIds().length >= 2) {\n\t\trewardSurvivors(humans)\n\t}\n\tfor (const playerId of Object.keys(infected)) {\n\t\tcure(playerId)\n\t}\n\tif (CONFIG.caughtAreOut) {\n\t\tbringEveryoneBack()\n\t}\n\tupdateSidebars()\n}\n\nfunction onPlayerDamagingOtherPlayer(attackingPlayer, damagedPlayer) {\n\tif (CONFIG.tagMode) {\n\t\tif (isRoundRunning() && isInfected(attackingPlayer) && !isInfected(damagedPlayer) && Date.now() - lastTagAt > 2000) {\n\t\t\tlastTagAt = Date.now()\n\t\t\tapi.broadcastMessage(api.getEntityName(attackingPlayer) + " tagged " + api.getEntityName(damagedPlayer) + "!", { color: "orange" })\n\t\t\tcure(attackingPlayer)\n\t\t\tinfect(damagedPlayer)\n\t\t}\n\t\treturn "preventDamage"\n\t}\n\tif (CONFIG.caughtAreOut) {\n\t\tif (isRoundRunning() && isInfected(attackingPlayer) && humansLeft().includes(damagedPlayer)) {\n\t\t\tapi.broadcastMessage(api.getEntityName(attackingPlayer) + " caught " + api.getEntityName(damagedPlayer) + "!", { color: "orange" })\n\t\t\teliminate(damagedPlayer)\n\t\t\tupdateSidebars()\n\t\t\tcheckWin()\n\t\t}\n\t\treturn "preventDamage"\n\t}\n\tif (isRoundRunning() && isInfected(attackingPlayer) && !isInfected(damagedPlayer)) {\n\t\tapi.broadcastMessage(api.getEntityName(attackingPlayer) + " infected " + api.getEntityName(damagedPlayer) + "!", { color: "orange" })\n\t\tinfect(damagedPlayer)\n\t}\n\treturn "preventDamage"\n}\n\nfunction updateSidebars() {\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tconst out = CONFIG.caughtAreOut && !isInfected(playerId) && !humansLeft().includes(playerId)\n\t\tconst side = isInfected(playerId) ? (CONFIG.tagMode ? "It" : CONFIG.caughtAreOut ? "Chaser" : "Infected") : CONFIG.tagMode ? "Running" : CONFIG.caughtAreOut ? (out ? "Out" : "Runner") : "Human"\n\t\tsetSidebar(playerId, "You are", !isRoundRunning() ? "Waiting" : side)\n\t\tif (!CONFIG.tagMode) {\n\t\t\tsetSidebar(playerId, CONFIG.caughtAreOut ? "Runners left" : "Humans left", isRoundRunning() ? humansLeft().length : "-")\n\t\t}\n\t\tsetSidebar(playerId, "Time left", isRoundRunning() ? roundSecondsLeft() : "-")\n\t}\n}\n\nfunction tick(ms) {\n\tconst seconds = isRoundRunning() ? roundSecondsLeft() : -1\n\tif (seconds !== lastSecondsShown) {\n\t\tlastSecondsShown = seconds\n\t\tupdateSidebars()\n\t}\n}\n\nfunction onRespawnRequest(playerId) {\n\treturn CONFIG.spawnPosition\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete infected[playerId]\n\trunLater(0, () => {\n\t\tcheckWin()\n\t\tupdateSidebars()\n\t})\n}',
        changeable: [{
          name: "infect",
          about: "what happens when a player becomes infected: their look, a message, an effect"
        }, {
          name: "rewardSurvivors",
          about: "what the humans still alive get when time runs out"
        }],
        setup: "Turn on PvP in your world settings so players can hit each other, and build an arena around spawnPosition to run and hide in."
      }, {
        name: "hideAndSeek",
        kind: "game",
        title: "Hide and seek",
        category: "tag",
        summary: "Rounds of hide and seek: seekers wait in a box while the hiders hide, then hit hiders to find them before time runs out",
        keywords: ["hide and seek", "hide n seek", "hide & seek", "hide an seek", "hide and seak", "hide", "hiding", "seek", "seeker", "seekers", "hider", "hiders", "prop hunt", "sardines"],
        howItPlays: "Once minPlayers are in, a countdown starts a round. seekerCount random players are seekers and wait at seekerWaitPosition while everyone else hides from startPosition for hideSeconds; then the seekers are let out at startPosition. A seeker hitting a hider finds them: they become a seeker too if foundBecomeSeekers is true, or else watch as a spectator. Nobody takes damage. Hiders still hidden when roundSeconds (hiding time included) run out win and get winCoins; the seekers win when everyone is found. Players who join mid-round are seekers.",
        settings: [{
          key: "startPosition",
          kind: "position",
          value: "[0, 10, 0]",
          about: "where hiders start each round and seekers are let out"
        }, {
          key: "seekerWaitPosition",
          kind: "position",
          value: "[0, 10, 20]",
          about: "where seekers wait while the hiders hide (build a closed box around it)"
        }, {
          key: "seekerCount",
          kind: "number",
          value: "1",
          about: "how many random players start as seekers"
        }, {
          key: "hideSeconds",
          kind: "number",
          value: "30",
          about: "how long hiders have to hide, in seconds"
        }, {
          key: "roundSeconds",
          kind: "number",
          value: "180",
          about: "how long a round lasts in seconds, hiding time included"
        }, {
          key: "minPlayers",
          kind: "number",
          value: "2",
          about: "players needed before a round starts"
        }, {
          key: "foundBecomeSeekers",
          kind: "boolean",
          value: "true",
          about: "true: a found hider joins the seekers; false: they watch as a spectator"
        }, {
          key: "winCoins",
          kind: "number",
          value: "10",
          about: "coins each hider still hidden gets when time runs out (0 for none)"
        }],
        code: '// Hide and seek: seekers wait in their box while hiders hide for hideSeconds, then go looking. A seeker hitting a\n// hider finds them. Hiders win if any are still hidden when time runs out; seekers win when everyone is found.\nconst seekers = {}\nconst found = {}\nlet seeking = false\nlet seekersWon = false\nlet lastShown = ""\n\nfunction onPlayerJoin(playerId) {\n\tapi.sendMessage(playerId, "Hide and seek! Hide from the seekers, or find everyone when you seek.", { color: "aqua" })\n\tgoTo(playerId, CONFIG.startPosition)\n\tif (isRoundRunning()) {\n\t\tmakeSeeker(playerId)\n\t}\n}\n\nfunction goTo(playerId, spot) {\n\tapi.setPosition(playerId, spot[0], spot[1], spot[2])\n}\n\nfunction hidersLeft() {\n\treturn api.getPlayerIds().filter((playerId) => !seekers[playerId] && !found[playerId])\n}\n\nfunction makeSeeker(playerId) {\n\tseekers[playerId] = true\n\tif (!seeking) {\n\t\tgoTo(playerId, CONFIG.seekerWaitPosition)\n\t}\n\tapi.sendMessage(playerId, "You are a seeker! Hit hiders to find them.", { color: "orange" })\n}\n\nfunction beginRound() {\n\tseeking = false\n\tseekersWon = false\n\tconst players = shuffleList(api.getPlayerIds())\n\tconst count = Math.max(1, Math.min(CONFIG.seekerCount, players.length - 1))\n\tfor (const playerId of players.slice(count)) {\n\t\tgoTo(playerId, CONFIG.startPosition)\n\t}\n\tfor (const playerId of players.slice(0, count)) {\n\t\tmakeSeeker(playerId)\n\t}\n\tconst names = players.slice(0, count).map((playerId) => api.getEntityName(playerId)).join(" and ")\n\tannounce(names + (count === 1 ? " is" : " are") + " seeking! Everyone else, hide!", "yellow")\n\tstartCountdown(CONFIG.hideSeconds, releaseSeekers)\n}\n\nfunction releaseSeekers() {\n\tif (!isRoundRunning()) {\n\t\treturn\n\t}\n\tseeking = true\n\tfor (const playerId of Object.keys(seekers)) {\n\t\tgoTo(playerId, CONFIG.startPosition)\n\t}\n\tannounce("Ready or not, here the seekers come!", "orange")\n}\n\nfunction findHider(hiderId, seekerId) {\n\tapi.broadcastMessage(api.getEntityName(seekerId) + " found " + api.getEntityName(hiderId) + "!", { color: "orange" })\n\tif (CONFIG.foundBecomeSeekers) {\n\t\tmakeSeeker(hiderId)\n\t} else {\n\t\tfound[hiderId] = true\n\t\teliminate(hiderId)\n\t\tapi.sendMessage(hiderId, "You were found! Watch the rest of the round.", { color: "yellow" })\n\t}\n\tcheckWin()\n}\n\nfunction onPlayerDamagingOtherPlayer(attackingPlayer, damagedPlayer) {\n\tif (seeking && isRoundRunning() && seekers[attackingPlayer] && !seekers[damagedPlayer] && !found[damagedPlayer]) {\n\t\tfindHider(damagedPlayer, attackingPlayer)\n\t}\n\treturn "preventDamage"\n}\n\nfunction checkWin() {\n\tif (!isRoundRunning()) {\n\t\treturn\n\t}\n\tconst players = api.getPlayerIds()\n\tif (players.length < 2) {\n\t\tendRound("Not enough players left.")\n\t} else if (!players.some((playerId) => seekers[playerId])) {\n\t\tendRound("All the seekers left!")\n\t} else if (hidersLeft().length === 0) {\n\t\tseekersWon = true\n\t\tendRound("Everyone was found! The seekers win!")\n\t}\n}\n\nfunction rewardHiders(hiders) {\n\tannounce("The hiders win! Still hidden: " + hiders.map((playerId) => api.getEntityName(playerId)).join(", "), "lime")\n\tfor (const playerId of hiders) {\n\t\tif (CONFIG.winCoins > 0) {\n\t\t\taddCoins(playerId, CONFIG.winCoins)\n\t\t}\n\t}\n}\n\nfunction finishRound() {\n\tcancelCountdown()\n\tconst hiders = hidersLeft()\n\tif (!seekersWon && hiders.length > 0 && api.getPlayerIds().length >= 2) {\n\t\trewardHiders(hiders)\n\t}\n\tfor (const playerId of Object.keys(seekers)) {\n\t\tif (!seeking) {\n\t\t\t// The round ended in hiding time: out of the box\n\t\t\tgoTo(playerId, CONFIG.startPosition)\n\t\t}\n\t\tdelete seekers[playerId]\n\t}\n\tif (Object.keys(found).length > 0) {\n\t\tbringEveryoneBack()\n\t}\n\tfor (const playerId of Object.keys(found)) {\n\t\tdelete found[playerId]\n\t}\n\tseeking = false\n}\n\nfunction tick(ms) {\n\tconst players = api.getPlayerIds()\n\tif (isRoundRunning() && !seeking) {\n\t\t// Hiding time: seekers who wander from their box are put back\n\t\tfor (const playerId of players) {\n\t\t\tconst spot = CONFIG.seekerWaitPosition\n\t\t\tconst position = api.getPosition(playerId)\n\t\t\tif (seekers[playerId] && Math.abs(position[0] - spot[0]) + Math.abs(position[2] - spot[2]) > 3) {\n\t\t\t\tgoTo(playerId, spot)\n\t\t\t}\n\t\t}\n\t}\n\tconst shown = players.length + " " + isRoundRunning() + " " + seeking + " " + roundSecondsLeft() + " " + hidersLeft().length + " " + Object.keys(seekers).length\n\tif (shown === lastShown) {\n\t\treturn\n\t}\n\tlastShown = shown\n\tfor (const playerId of players) {\n\t\tconst role = !isRoundRunning() ? "Waiting" : seekers[playerId] ? "Seeker" : found[playerId] ? "Found" : "Hider"\n\t\tsetSidebar(playerId, "You are", role)\n\t\tsetSidebar(playerId, "Hiders left", isRoundRunning() ? hidersLeft().length : "-")\n\t\tsetSidebar(playerId, "Time left", isRoundRunning() ? roundSecondsLeft() : "-")\n\t}\n}\n\nfunction onRespawnRequest(playerId) {\n\treturn seekers[playerId] && !seeking ? CONFIG.seekerWaitPosition : CONFIG.startPosition\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete seekers[playerId]\n\tdelete found[playerId]\n\trunLater(0, checkWin)\n}',
        changeable: [{
          name: "findHider",
          about: "what happens when a seeker finds a hider: the message, and whether they seek or watch"
        }, {
          name: "rewardHiders",
          about: "what the hiders still hidden get when time runs out"
        }],
        setup: "Turn on PvP in your world settings so seekers can hit hiders, build a closed box around seekerWaitPosition, and build places to hide around startPosition."
      }, {
        name: "monsterChase",
        kind: "game",
        title: "Escape the monster",
        category: "rounds",
        summary: "Horror rounds: monsters chase the nearest player while the team finds the keys; with enough keys the exit opens and reaching it escapes; a monster's touch catches you and you watch",
        keywords: ["monster", "monsters", "monster chase", "escape the monster", "run from the monster", "nextbot", "nextbots", "next bot", "evade", "doors", "doors game", "roblox doors", "backrooms", "back rooms", "backroom", "horror", "horror game", "horor", "scary", "scary game", "creepy", "haunted", "jumpscare", "piggy", "slender", "chased", "find the keys", "find keys", "collect keys", "escape", "escape room"],
        howItPlays: "Players start at startPosition. Once minPlayers are in, a countdown runs and everyone is sent there; after 5 seconds monsterCount monsters (monsterType, at monsterSpeed) appear there and each one keeps chasing the nearest player. Keys (gold blocks) sit at keyPositions: walking into one picks it up for the whole team. When the team has keysNeeded keys, the black glass closing the exit at exitPosition vanishes, and a player who reaches it escapes and wins winCoins. A monster's touch catches a player (any death does): they watch the rest of the round. The round ends when everyone has escaped or been caught, or when the time (roundSeconds) runs out. darkness makes the world dark and foggy.",
        settings: [{
          key: "startPosition",
          kind: "position",
          value: "[0, 10, 0]",
          about: "where players start each round, and where the monsters come in after them"
        }, {
          key: "monsterType",
          kind: "mob",
          value: '"Stalker"',
          about: "the mob that chases players"
        }, {
          key: "monsterCount",
          kind: "number",
          value: "1",
          about: "how many monsters chase the players"
        }, {
          key: "monsterSpeed",
          kind: "number",
          value: "1",
          about: "how fast the monsters move (1 normal, 1.5 faster, 0.7 slower)"
        }, {
          key: "keyPositions",
          kind: "list",
          value: "[[10, 10, 10], [-10, 10, 10], [0, 10, -12]]",
          about: "where the keys are, each [x, y, z]; a gold block is put there each round ([]: no keys, the exit is open)"
        }, {
          key: "keysNeeded",
          kind: "number",
          value: "3",
          about: "how many keys the team must find to open the exit (0: all of them)"
        }, {
          key: "exitPosition",
          kind: "position",
          value: "[0, 10, 20]",
          about: "the exit: a doorway 1 block wide, 2 high; black glass closes it until the keys are found"
        }, {
          key: "darkness",
          kind: "boolean",
          value: "true",
          about: "true: the world is dark and foggy, for a scary game"
        }, {
          key: "minPlayers",
          kind: "number",
          value: "1",
          about: "players needed before a round starts"
        }, {
          key: "winCoins",
          kind: "number",
          value: "10",
          about: "coins for each player who escapes"
        }],
        code: '// Escape the monster: everyone starts at startPosition and runs, and a few seconds later the monsters come in after\n// them, each chasing the nearest player. Walk into the gold keys to pick them up for the team. With enough keys the\n// exit opens: reach it to escape. A monster\'s touch catches you, and you watch the rest of the round.\nconst keyBlock = "Block of Gold" // what a key looks like\nconst gateBlock = "Black Glass" // closes the exit until the keys are found\nconst headStartSeconds = 5 // seconds players get to run before the monsters come in\nconst monsters = {} // the monsters chasing this round, by mob id\nconst escaped = {} // the players who escaped this round\nlet keysTaken = []\nlet keysFound = 0\nlet exitOpen = false\nlet roundNumber = 0\nlet chaseTimer = null\n\nfunction onPlayerJoin(playerId) {\n\tif (CONFIG.darkness) {\n\t\tmakeDark(playerId)\n\t}\n\tshowKeys(playerId)\n\tsendToStart(playerId)\n\tif (isRoundRunning()) {\n\t\teliminate(playerId)\n\t\tapi.sendMessage(playerId, "A chase is on! Watch this one, you\'ll play in the next.", { color: "yellow" })\n\t\treturn\n\t}\n\tapi.sendMessage(playerId, "Find the keys, open the exit and escape the monster!", { color: "aqua" })\n}\n\nfunction makeDark(playerId) {\n\tapi.setClientOptions(playerId, {\n\t\tlightingOverride: true,\n\t\tskyLightColourOverride: "#1c1a26",\n\t\tambientLightColourOverride: "#0c0b12",\n\t\tfogColourOverride: "#060609",\n\t})\n}\n\nfunction sendToStart(playerId) {\n\tapi.setPosition(playerId, CONFIG.startPosition[0], CONFIG.startPosition[1], CONFIG.startPosition[2])\n}\n\nfunction keysToOpen() {\n\tconst all = CONFIG.keyPositions.length\n\treturn CONFIG.keysNeeded > 0 ? Math.min(CONFIG.keysNeeded, all) : all\n}\n\nfunction showKeys(playerId) {\n\tsetSidebar(playerId, "Keys", keysFound + "/" + keysToOpen())\n\tsetSidebar(playerId, "Exit", exitOpen ? "open!" : "locked")\n}\n\n// Whether a player is at a block\'s spot [x, y, z]: in it, beside it or on it\nfunction isAt(playerId, spot) {\n\tconst position = api.getPosition(playerId)\n\tconst x = Math.floor(spot[0]) + 0.5\n\tconst z = Math.floor(spot[2]) + 0.5\n\treturn Math.abs(position[0] - x) < 1.6 && Math.abs(position[2] - z) < 1.6 && position[1] > spot[1] - 1.5 && position[1] < spot[1] + 2\n}\n\n// Puts a block at a spot once that part of the world has loaded, unless a new round has started since\nfunction placeBlock(spot, blockName) {\n\tconst round = roundNumber\n\twhenWorldLoaded(spot, () => {\n\t\tif (round === roundNumber) {\n\t\t\tapi.setBlock(Math.floor(spot[0]), Math.floor(spot[1]), Math.floor(spot[2]), blockName)\n\t\t}\n\t})\n}\n\nfunction setExit(blockName) {\n\tplaceBlock(CONFIG.exitPosition, blockName)\n\tplaceBlock([CONFIG.exitPosition[0], CONFIG.exitPosition[1] + 1, CONFIG.exitPosition[2]], blockName)\n}\n\nfunction beginRound() {\n\troundNumber++\n\tkeysTaken = CONFIG.keyPositions.map(() => false)\n\tkeysFound = 0\n\texitOpen = false\n\tfor (const playerId in escaped) {\n\t\tdelete escaped[playerId]\n\t}\n\tCONFIG.keyPositions.forEach((spot) => placeBlock(spot, keyBlock))\n\tsetExit(gateBlock)\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tif (!api.isAlive(playerId)) {\n\t\t\tapi.forceRespawn(playerId, CONFIG.startPosition)\n\t\t}\n\t\tsendToStart(playerId)\n\t\thealFully(playerId)\n\t\tshowKeys(playerId)\n\t}\n\tif (keysToOpen() === 0) {\n\t\topenExit()\n\t}\n\tannounce("Run! The monster comes in " + headStartSeconds + " seconds!", "red")\n\tconst round = roundNumber\n\trunLater(headStartSeconds, () => {\n\t\tif (round === roundNumber && isRoundRunning()) {\n\t\t\treleaseMonsters()\n\t\t}\n\t})\n}\n\nfunction releaseMonsters() {\n\tconst ids = spawnMobs(CONFIG.monsterType, CONFIG.monsterCount, CONFIG.startPosition, 1)\n\tif (ids.length === 0) {\n\t\tannounce("No monster could come in! Turn on mobs in your world settings.", "red")\n\t\treturn\n\t}\n\tfor (const mobId of ids) {\n\t\tmonsters[mobId] = true\n\t\tapi.setMobSetting(mobId, "walkingSpeedMultiplier", CONFIG.monsterSpeed)\n\t\tapi.setMobSetting(mobId, "runningSpeedMultiplier", CONFIG.monsterSpeed)\n\t}\n\tannounce("The monster is coming!", "red")\n\tchaseNearest()\n\tchaseTimer = repeatEvery(1, chaseNearest)\n}\n\n// Every second each monster goes after the player nearest to it who is still in\nfunction chaseNearest() {\n\tconst targets = playersLeft().filter((playerId) => api.isAlive(playerId))\n\tfor (const mobId of Object.keys(monsters)) {\n\t\tconst at = api.getPosition(mobId)\n\t\tlet nearest = null\n\t\tlet nearestDistance = Infinity\n\t\tfor (const playerId of targets) {\n\t\t\tconst position = api.getPosition(playerId)\n\t\t\tconst distance = Math.hypot(position[0] - at[0], position[1] - at[1], position[2] - at[2])\n\t\t\tif (distance < nearestDistance) {\n\t\t\t\tnearest = playerId\n\t\t\t\tnearestDistance = distance\n\t\t\t}\n\t\t}\n\t\tconst now = api.getMobAiState(mobId)\n\t\tif (nearest !== null && !(now.state === "chasing" && now.params && now.params.targetId === nearest)) {\n\t\t\tapi.setMobAiState(mobId, "chasing", { targetId: nearest }, { hold: true })\n\t\t}\n\t}\n}\n\nfunction openExit() {\n\texitOpen = true\n\tsetExit("Air")\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tshowKeys(playerId)\n\t}\n\tannounce("The exit is open! Run to it!", "lime")\n}\n\nfunction takeKey(playerId, index) {\n\tkeysTaken[index] = true\n\tkeysFound++\n\tconst spot = CONFIG.keyPositions[index]\n\tapi.setBlock(Math.floor(spot[0]), Math.floor(spot[1]), Math.floor(spot[2]), "Air")\n\tapi.broadcastMessage(api.getEntityName(playerId) + " found a key! " + keysFound + "/" + keysToOpen(), { color: "yellow" })\n\tfor (const id of api.getPlayerIds()) {\n\t\tshowKeys(id)\n\t}\n\tif (!exitOpen && keysFound >= keysToOpen()) {\n\t\topenExit()\n\t}\n}\n\nfunction escapePlayer(playerId) {\n\tescaped[playerId] = true\n\teliminate(playerId)\n\trewardEscape(playerId)\n\tcheckForEnd()\n}\n\nfunction rewardEscape(playerId) {\n\taddCoins(playerId, CONFIG.winCoins)\n\tannounce(api.getEntityName(playerId) + " escaped! +" + CONFIG.winCoins + " coins", "lime")\n}\n\nfunction catchPlayer(playerId) {\n\teliminate(playerId)\n\tapi.broadcastMessage(api.getEntityName(playerId) + " was caught by the monster!", { color: "red" })\n\tcheckForEnd()\n}\n\nfunction checkForEnd() {\n\tif (!isRoundRunning() || playersLeft().length > 0) {\n\t\treturn\n\t}\n\tconst names = Object.keys(escaped).filter((playerId) => api.getPlayerIds().includes(playerId)).map((playerId) => api.getEntityName(playerId))\n\tendRound(names.length > 0 ? names.join(", ") + " escaped the monster!" : "The monster caught everyone!")\n}\n\nfunction finishRound() {\n\tcancelTimer(chaseTimer)\n\tchaseTimer = null\n\tremoveAllMobs()\n\tfor (const mobId in monsters) {\n\t\tdelete monsters[mobId]\n\t}\n\tbringEveryoneBack()\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tif (!api.isAlive(playerId)) {\n\t\t\tapi.forceRespawn(playerId, CONFIG.startPosition)\n\t\t}\n\t\tsendToStart(playerId)\n\t}\n}\n\nfunction tick(ms) {\n\tfor (const playerId of playersLeft()) {\n\t\t// A catch or an escape can end the round: stop then\n\t\tif (!isRoundRunning()) {\n\t\t\treturn\n\t\t}\n\t\tif (!api.isAlive(playerId)) {\n\t\t\tcatchPlayer(playerId)\n\t\t\tcontinue\n\t\t}\n\t\tCONFIG.keyPositions.forEach((spot, index) => {\n\t\t\tif (!keysTaken[index] && isAt(playerId, spot)) {\n\t\t\t\ttakeKey(playerId, index)\n\t\t\t}\n\t\t})\n\t\tif (exitOpen && isAt(playerId, CONFIG.exitPosition)) {\n\t\t\tescapePlayer(playerId)\n\t\t}\n\t}\n}\n\n// A monster\'s touch catches a player at once\nfunction onMobDamagingPlayer(attackingMob, damagedPlayer) {\n\tif (monsters[attackingMob]) {\n\t\treturn 1000\n\t}\n}\n\n// Monsters can\'t be hurt, and the world doesn\'t take them away\nfunction onPlayerDamagingMob(playerId, mobId) {\n\tif (monsters[mobId]) {\n\t\treturn "preventDamage"\n\t}\n}\n\nfunction onWorldAttemptDespawnMob(mobId) {\n\tif (monsters[mobId]) {\n\t\treturn "preventDespawn"\n\t}\n}\n\nfunction onMobDespawned(mobId) {\n\tdelete monsters[mobId]\n}\n\nfunction onRespawnRequest(playerId) {\n\tif (isRoundRunning() && playersLeft().includes(playerId)) {\n\t\tcatchPlayer(playerId)\n\t}\n\treturn CONFIG.startPosition\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete escaped[playerId]\n\trunLater(0, checkForEnd)\n}',
        changeable: [{
          name: "rewardEscape",
          about: "what a player gets for escaping, and the message (it gives winCoins)"
        }, {
          name: "releaseMonsters",
          about: "how the monsters come in: how many, where, how fast"
        }, {
          name: "takeKey",
          about: "what happens when a player finds a key, e.g. a speed boost or a scare"
        }],
        setup: "Turn on mobs, build the map (rooms, corridors, a maze) around startPosition with a 1-wide doorway at exitPosition, and turn off block breaking so players can't dig past the walls."
      }, {
        name: "lastStanding",
        kind: "game",
        title: "Last one standing",
        category: "rounds",
        summary: "Rounds in an arena: falling off or dying knocks you out and the last player left wins; the floor can vanish under your feet (TNT run, spleef)",
        keywords: ["last one standing", "last man standing", "last player standing", "spleef", "tnt run", "tntrun", "sumo", "battle royale", "battle royal", "knockout", "knock off", "arena", "elimination", "disappearing floor", "falling floor"],
        howItPlays: "Players wait at lobbyPosition. Once minPlayers are in, a countdown runs and everyone goes to arenaPosition with the kit. Falling below fallY or dying knocks a player out (they watch as a spectator); the last player left wins and the next round starts. With disappearingFloor on, a floor of floorBlock is built around arenaPosition each round and each block vanishes a moment after someone steps on it (TNT run). With spleef on, the floor is built but stays put, and clicking a floor block with the spleefTool (given at the start of each round) breaks it at once, to drop the others.",
        settings: [{
          key: "lobbyPosition",
          kind: "position",
          value: "[0, 10, 0]",
          about: "where players wait between rounds"
        }, {
          key: "arenaPosition",
          kind: "position",
          value: "[0, 40, 40]",
          about: "the middle of the arena, where players go when a round starts"
        }, {
          key: "kit",
          kind: "list",
          names: "item",
          value: '[["Wood Sword", 1], ["Bread", 3]]',
          about: "the [item, amount] each player gets when a round starts"
        }, {
          key: "fallY",
          kind: "number",
          value: "30",
          about: "falling below this height knocks a player out (keep it below the arena)"
        }, {
          key: "disappearingFloor",
          kind: "boolean",
          value: "true",
          about: "true: a floor is built each round and its blocks vanish after players step on them"
        }, {
          key: "spleef",
          kind: "boolean",
          value: "false",
          about: "true: spleef: the floor stays put and players break its blocks with the spleefTool to drop the others"
        }, {
          key: "spleefTool",
          kind: "item",
          value: '"Diamond Spade"',
          about: "with spleef, the item that breaks a floor block with one click"
        }, {
          key: "floorBlock",
          kind: "block",
          value: '"Snow"',
          about: "the block the arena's floor is made of (disappearing floor or spleef)"
        }, {
          key: "arenaFloorSize",
          kind: "number",
          value: "10",
          about: "how many blocks the floor reaches out from arenaPosition each way"
        }, {
          key: "minPlayers",
          kind: "number",
          value: "2",
          about: "players needed before a round starts"
        }, {
          key: "roundSeconds",
          kind: "number",
          value: "180",
          about: "longest a round lasts, in seconds"
        }],
        code: '// Last one standing: players wait in the lobby, then a round sends everyone to the arena with a kit. Falling below\n// fallY or dying knocks you out and you watch the rest. The last player left wins. With disappearingFloor, the floor\n// vanishes a moment after you step on it, so keep moving!\nconst vanishingBlocks = {}\nlet roundPlayerCount = 0\nlet floorReady = false\n\nfunction onPlayerJoin(playerId) {\n\tif (!floorReady) {\n\t\tfloorReady = true\n\t\tbuildFloor()\n\t\twhenFallBelow(Math.min(CONFIG.fallY, CONFIG.arenaPosition[1] - 3), fellOut)\n\t\tif (CONFIG.spleef) {\n\t\t\twhenItemUsed(CONFIG.spleefTool, breakFloorBlock, 0.15)\n\t\t}\n\t}\n\tif (isRoundRunning()) {\n\t\teliminate(playerId)\n\t\tsendToWatch(playerId)\n\t\tapi.sendMessage(playerId, "A round is on! Watch this one, you\'ll play in the next.", { color: "yellow" })\n\t\treturn\n\t}\n\tapi.setPlayerGamemode(playerId, "survival")\n\tapi.setPosition(playerId, CONFIG.lobbyPosition[0], CONFIG.lobbyPosition[1], CONFIG.lobbyPosition[2])\n\tapi.sendMessage(playerId, "Be the last one standing! Don\'t fall and don\'t die.", { color: "aqua" })\n}\n\nfunction floorY() {\n\treturn Math.floor(CONFIG.arenaPosition[1]) - 1\n}\n\nfunction buildFloor() {\n\tif (!CONFIG.disappearingFloor && !CONFIG.spleef) {\n\t\treturn\n\t}\n\tconst size = CONFIG.arenaFloorSize\n\tconst x = Math.floor(CONFIG.arenaPosition[0])\n\tconst z = Math.floor(CONFIG.arenaPosition[2])\n\twhenWorldLoaded([x, floorY(), z], () => {\n\t\tfillBox([x - size, floorY(), z - size], [x + size, floorY(), z + size], CONFIG.floorBlock)\n\t})\n}\n\nfunction sendToWatch(playerId) {\n\tapi.setPosition(playerId, CONFIG.arenaPosition[0], CONFIG.arenaPosition[1] + 8, CONFIG.arenaPosition[2])\n}\n\nfunction beginRound() {\n\tbuildFloor()\n\tconst players = api.getPlayerIds()\n\troundPlayerCount = players.length\n\tfor (const playerId of players) {\n\t\tconst spot = randomSpot(CONFIG.arenaPosition, Math.max(0, CONFIG.arenaFloorSize - 1))\n\t\t// One still on the respawn screen comes back now: respawning later would count as a knock-out\n\t\tif (!api.isAlive(playerId)) {\n\t\t\tapi.forceRespawn(playerId, spot)\n\t\t}\n\t\tapi.setPosition(playerId, spot[0], spot[1], spot[2])\n\t\thealFully(playerId)\n\t\tgiveKit(playerId, CONFIG.kit)\n\t\tif (CONFIG.spleef) {\n\t\t\tapi.giveItem(playerId, CONFIG.spleefTool, 1)\n\t\t}\n\t}\n\tannounce("Go! Be the last one standing!", "lime")\n}\n\nfunction finishRound() {\n\tbringEveryoneBack()\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tapi.clearInventory(playerId)\n\t\tapi.setPosition(playerId, CONFIG.lobbyPosition[0], CONFIG.lobbyPosition[1], CONFIG.lobbyPosition[2])\n\t}\n}\n\nfunction knockOut(playerId, why) {\n\tif (!isRoundRunning() || !playersLeft().includes(playerId)) {\n\t\treturn\n\t}\n\teliminate(playerId)\n\tapi.broadcastMessage(api.getEntityName(playerId) + " " + why, { color: "red" })\n\tcheckForWinner()\n}\n\nfunction checkForWinner() {\n\tif (!isRoundRunning()) {\n\t\treturn\n\t}\n\tconst left = playersLeft()\n\tif (left.length === 1 && roundPlayerCount > 1) {\n\t\twinRound(left[0])\n\t} else if (left.length === 0) {\n\t\tendRound("Nobody is left standing! It\'s a draw.")\n\t}\n}\n\nfunction winRound(playerId) {\n\tconst wins = addSaved(playerId, "lastStandingWins", 1)\n\tendRound(api.getEntityName(playerId) + " is the last one standing! (" + wins + " wins)")\n}\n\n// The floor blocks under a player\'s feet vanish a moment later\nfunction crumbleUnder(position) {\n\tfor (const dx of [-0.3, 0.3]) {\n\t\tfor (const dz of [-0.3, 0.3]) {\n\t\t\tconst x = Math.floor(position[0] + dx)\n\t\t\tconst z = Math.floor(position[2] + dz)\n\t\t\tconst y = Math.floor(position[1] - 0.5)\n\t\t\tconst key = x + "," + z\n\t\t\tif (y !== floorY() || vanishingBlocks[key] || api.getBlock(x, y, z) !== CONFIG.floorBlock) {\n\t\t\t\tcontinue\n\t\t\t}\n\t\t\tvanishingBlocks[key] = true\n\t\t\trunLater(0.5, () => {\n\t\t\t\tdelete vanishingBlocks[key]\n\t\t\t\tif (isRoundRunning()) {\n\t\t\t\t\tapi.setBlock(x, y, z, "Air")\n\t\t\t\t}\n\t\t\t})\n\t\t}\n\t}\n}\n\n// Spleef: a floor block clicked with the spleefTool, from close by, breaks at once\nfunction breakFloorBlock(playerId, x, y, z) {\n\tif (x === undefined || !isRoundRunning() || !playersLeft().includes(playerId) || y !== floorY() || api.getBlock(x, y, z) !== CONFIG.floorBlock) {\n\t\treturn\n\t}\n\tconst position = api.getPosition(playerId)\n\tif (Math.abs(position[0] - x) <= 6 && Math.abs(position[2] - z) <= 6) {\n\t\tapi.setBlock(x, y, z, "Air")\n\t}\n}\n\nfunction fellOut(playerId) {\n\tif (isRoundRunning() && playersLeft().includes(playerId)) {\n\t\t// Watch from above, unless the round ends now and sends everyone to the lobby\n\t\tsendToWatch(playerId)\n\t\tknockOut(playerId, "fell out!")\n\t}\n}\n\nfunction tick(ms) {\n\tif (!CONFIG.disappearingFloor || CONFIG.spleef) {\n\t\treturn\n\t}\n\tfor (const playerId of playersLeft()) {\n\t\tif (!isRoundRunning()) {\n\t\t\treturn\n\t\t}\n\t\tcrumbleUnder(api.getPosition(playerId))\n\t}\n}\n\nfunction onAttemptKillPlayer(killedPlayer) {\n\tknockOut(killedPlayer, "was knocked out!")\n}\n\nfunction onRespawnRequest(playerId) {\n\tknockOut(playerId, "was knocked out!")\n\treturn isRoundRunning() ? [CONFIG.arenaPosition[0], CONFIG.arenaPosition[1] + 8, CONFIG.arenaPosition[2]] : CONFIG.lobbyPosition\n}\n\nfunction onPlayerLeave(playerId) {\n\trunLater(0, checkForWinner)\n}',
        changeable: [{
          name: "winRound",
          about: "what happens when a player is the last one left: the message and the reward (it saves their wins)"
        }, {
          name: "beginRound",
          about: "what happens when a round starts: where players go and what they get"
        }],
        setup: "Build a lobby at lobbyPosition; with disappearingFloor and spleef off, also build your own arena around arenaPosition and turn PvP on if players should fight."
      }, {
        name: "hazardRounds",
        kind: "game",
        title: "Survive the disasters",
        category: "rounds",
        summary: "Rounds in an arena where disasters hit: rising lava, TNT rain, meteors, falling blocks or a breaking floor; the last player alive, or everyone alive when time runs out, wins coins",
        keywords: ["floor is lava", "the floor is lava", "lava rising", "rising lava", "lava flood", "natural disaster", "natural disasters", "natural disaster survival", "disaster", "disasters", "disaster survival", "survive the disaster", "survive the disasters", "disater", "disasster", "tsunami", "meteor", "meteors", "meteor shower", "tnt rain", "raining tnt", "falling blocks", "falling sand"],
        howItPlays: 'Players wait at lobbyPosition. Once minPlayers are in, a countdown runs and everyone goes to a random spot on the floor of the arena box (between arenaCorner1 and arenaCorner2; its lowest y is the floor, built of floorBlock wherever it is empty) with 16 blocks of floorBlock to build up with. Then the disasters in hazards hit: risingLava fills the box with lava one layer every riseSeconds, tntRain drops TNT that blows up 2 seconds after it lands, meteor drops fireballs (often at players) that blow up when they land, fallingBlocks drops sand and gravel that hurt whoever they fall on, and shrinkingFloor turns floor blocks red, then takes them away. hazardMode "random" picks one disaster each round, "all" uses them all at once. Dying or falling out of the arena knocks a player out to watch from above. The last player left wins winCoins; if the time (roundSeconds) runs out, everyone still in wins it. After each round the arena is put back as it was.',
        settings: [{
          key: "lobbyPosition",
          kind: "position",
          value: "[0, 10, 0]",
          about: "where players wait between rounds"
        }, {
          key: "arenaCorner1",
          kind: "position",
          value: "[-10, 40, 30]",
          about: "one corner of the arena box; the lower corner's y is the floor"
        }, {
          key: "arenaCorner2",
          kind: "position",
          value: "[10, 50, 50]",
          about: "the opposite corner; the higher corner's y is where blocks fall from"
        }, {
          key: "floorBlock",
          kind: "block",
          value: '"Smooth Stone"',
          about: "the block that fills any empty spot of the arena floor, and that players get to build up with"
        }, {
          key: "hazards",
          kind: "list",
          value: '["risingLava", "tntRain", "meteor", "fallingBlocks", "shrinkingFloor"]',
          about: "the disasters, any of: risingLava, tntRain, meteor, fallingBlocks, shrinkingFloor"
        }, {
          key: "hazardMode",
          kind: "string",
          value: '"random"',
          about: '"random": one disaster from hazards each round; "all": every disaster at once'
        }, {
          key: "riseSeconds",
          kind: "number",
          value: "8",
          about: "the rising lava goes up one block this often, in seconds"
        }, {
          key: "roundSeconds",
          kind: "number",
          value: "90",
          about: "how long a round lasts, in seconds; everyone still alive then wins"
        }, {
          key: "winCoins",
          kind: "number",
          value: "10",
          about: "coins for each player who survives the round"
        }],
        code: '// Survive the disasters: each round sends everyone into the arena, then disasters hit: rising lava, TNT rain,\n// meteors, falling blocks or a floor that breaks away. Dying or falling out puts you out to watch. The last player\n// left wins, or everyone still alive when the time runs out. The arena is put back as it was after every round.\nconst hazardTitles = { risingLava: "rising lava", tntRain: "TNT rain", meteor: "meteors", fallingBlocks: "falling blocks", shrinkingFloor: "breaking floor" }\n// What the falling disasters drop every 2 seconds: count blocks, each above a player (aim: how often) or anywhere.\n// One with a radius blows up fuse seconds after it lands; one without hurts the player it falls on\nconst drops = {\n\ttntRain: { blocks: ["Block Destroyer TNT"], count: 1, aim: 0, fuse: 2, radius: 2, damage: 50 },\n\tmeteor: { blocks: ["Fireball Block"], count: 1, aim: 0.5, fuse: 0, radius: 2, damage: 60 },\n\tfallingBlocks: { blocks: ["Sand", "Gravel"], count: 3, aim: 0.3, fuse: 0, radius: 0, damage: 35 },\n}\nconst climbBlocks = 16 // blocks of floorBlock each player gets to build up with\nconst changedBlocks = {} // "x,y,z": the block that was there before the round changed it\nlet falling = []\nlet activeHazards = []\nlet hazardTimers = []\nlet lavaY = 0\nlet roundNumber = 0\nlet roundPlayerCount = 0\nlet roundDecided = false\nlet floorReady = false\n\nfunction onPlayerJoin(playerId) {\n\tif (!floorReady) {\n\t\tfloorReady = true\n\t\tfillLayer(arena().y1, CONFIG.floorBlock, true)\n\t\twhenFallBelow(arena().y1 - 3, fellOut)\n\t}\n\tif (isRoundRunning()) {\n\t\teliminate(playerId)\n\t\tsendToWatch(playerId)\n\t\tapi.sendMessage(playerId, "A round is on! Watch this one, you\'ll play in the next.", { color: "yellow" })\n\t\treturn\n\t}\n\tapi.setPlayerGamemode(playerId, "survival")\n\tapi.setPosition(playerId, CONFIG.lobbyPosition[0], CONFIG.lobbyPosition[1], CONFIG.lobbyPosition[2])\n\tapi.sendMessage(playerId, "Get ready to survive the disasters! The last one alive wins.", { color: "aqua" })\n}\n\n// The arena box: its floor is y1 and blocks fall from y2\nfunction arena() {\n\tconst a = CONFIG.arenaCorner1.map(Math.floor)\n\tconst b = CONFIG.arenaCorner2.map(Math.floor)\n\treturn { x1: Math.min(a[0], b[0]), x2: Math.max(a[0], b[0]), y1: Math.min(a[1], b[1]), y2: Math.max(a[1], b[1]), z1: Math.min(a[2], b[2]), z2: Math.max(a[2], b[2]) }\n}\n\nfunction watchSpot() {\n\tconst box = arena()\n\treturn [(box.x1 + box.x2) / 2, box.y2 + 3, (box.z1 + box.z2) / 2]\n}\n\nfunction sendToWatch(playerId) {\n\tconst spot = watchSpot()\n\tapi.setPosition(playerId, spot[0], spot[1], spot[2])\n}\n\n// A random [x, z] in the arena, or the one above a random player still in when aimed\nfunction pickCell(aimed) {\n\tconst box = arena()\n\tconst left = playersLeft()\n\tif (!aimed || left.length === 0) {\n\t\treturn [randomInt(box.x1, box.x2), randomInt(box.z1, box.z2)]\n\t}\n\tconst position = api.getPosition(pickRandom(left))\n\treturn [Math.min(Math.max(Math.floor(position[0]), box.x1), box.x2), Math.min(Math.max(Math.floor(position[2]), box.z1), box.z2)]\n}\n\n// Puts blockName in every empty spot of one layer of the arena: kept for good, or put back after the round\nfunction fillLayer(y, blockName, keep) {\n\tconst box = arena()\n\twhenWorldLoaded([box.x1, y, box.z1], () => {\n\t\tfor (let x = box.x1; x <= box.x2; x++) {\n\t\t\tfor (let z = box.z1; z <= box.z2; z++) {\n\t\t\t\tif (api.getBlock(x, y, z) === "Air") {\n\t\t\t\t\tkeep ? api.setBlock(x, y, z, blockName) : changeBlock(x, y, z, blockName)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t})\n}\n\n// Every block a disaster or a player changes in a round is remembered, to be put back after it\nfunction changeBlock(x, y, z, blockName) {\n\tconst key = x + "," + y + "," + z\n\tif (!(key in changedBlocks)) {\n\t\tchangedBlocks[key] = api.getBlock(x, y, z)\n\t}\n\tapi.setBlock(x, y, z, blockName)\n}\n\nfunction onPlayerChangeBlock(playerId, x, y, z, fromBlock, toBlock) {\n\tconst box = arena()\n\tconst key = x + "," + y + "," + z\n\tconst inArena = x >= box.x1 && x <= box.x2 && y >= box.y1 && y <= box.y2 && z >= box.z1 && z <= box.z2\n\tif (isRoundRunning() && inArena && !(key in changedBlocks)) {\n\t\tchangedBlocks[key] = fromBlock\n\t}\n}\n\nfunction restoreArena() {\n\tfor (const key of Object.keys(changedBlocks)) {\n\t\tconst at = key.split(",").map(Number)\n\t\tapi.setBlock(at[0], at[1], at[2], changedBlocks[key])\n\t\tdelete changedBlocks[key]\n\t}\n}\n\n// Runs fn after some seconds, unless the round is over by then\nfunction laterThisRound(seconds, fn) {\n\tconst round = roundNumber\n\trunLater(seconds, () => {\n\t\tif (round === roundNumber && isRoundRunning()) {\n\t\t\tfn()\n\t\t}\n\t})\n}\n\n// "TNT rain", "breaking floor" (its title) or "lava" works as well as tntRain, shrinkingFloor or risingLava\nfunction hazardOf(name) {\n\tconst squash = (text) => String(text).toLowerCase().replace(/[^a-z]/g, "")\n\tconst word = squash(name)\n\treturn Object.keys(hazardTitles).find((hazard) => [hazard, hazardTitles[hazard]].some((title) => word.includes(squash(title)) || (word.length > 2 && squash(title).includes(word))))\n}\n\nfunction beginRound() {\n\troundNumber++\n\troundDecided = false\n\trestoreArena()\n\tconst box = arena()\n\tfillLayer(box.y1, CONFIG.floorBlock, true)\n\tconst chosen = CONFIG.hazards.map(hazardOf).filter((hazard, i, all) => hazard && all.indexOf(hazard) === i)\n\tactiveHazards = chosen.length === 0 ? ["risingLava"] : CONFIG.hazardMode === "all" ? chosen : [pickRandom(chosen)]\n\troundPlayerCount = api.getPlayerIds().length\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tconst spot = [randomInt(box.x1 + 1, box.x2 - 1) + 0.5, box.y1 + 1, randomInt(box.z1 + 1, box.z2 - 1) + 0.5]\n\t\tif (!api.isAlive(playerId)) {\n\t\t\tapi.forceRespawn(playerId, spot)\n\t\t}\n\t\tapi.setPosition(playerId, spot[0], spot[1], spot[2])\n\t\thealFully(playerId)\n\t\tgiveKit(playerId, [[CONFIG.floorBlock, climbBlocks]])\n\t}\n\tlavaY = box.y1\n\tfalling = []\n\tif (activeHazards.includes("risingLava")) {\n\t\thazardTimers.push(repeatEvery(CONFIG.riseSeconds, raiseLava))\n\t}\n\thazardTimers.push(repeatEvery(2, hazardStep), repeatEvery(0.1, moveFalling))\n\tannounce("Survive the " + activeHazards.map((hazard) => hazardTitles[hazard]).join(", ") + "!", "orange")\n}\n\nfunction finishRound() {\n\thazardTimers.forEach(cancelTimer)\n\thazardTimers = []\n\tfalling = []\n\tif (!roundDecided && playersLeft().length > 0) {\n\t\tannounce(rewardSurvivors(playersLeft()), "gold")\n\t}\n\trestoreArena()\n\tbringEveryoneBack()\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tapi.clearInventory(playerId)\n\t\tapi.setPosition(playerId, CONFIG.lobbyPosition[0], CONFIG.lobbyPosition[1], CONFIG.lobbyPosition[2])\n\t}\n}\n\nfunction rewardSurvivors(playerIds) {\n\tfor (const playerId of playerIds) {\n\t\taddCoins(playerId, CONFIG.winCoins)\n\t\taddSaved(playerId, "disasterWins", 1)\n\t}\n\treturn playerIds.map((playerId) => api.getEntityName(playerId)).join(", ") + " survived the disasters! +" + CONFIG.winCoins + " coins"\n}\n\n// Lava fills the next layer up, until it reaches the top of the arena\nfunction raiseLava() {\n\tlavaY++\n\tif (lavaY < arena().y2) {\n\t\tfillLayer(lavaY, "Lava", false)\n\t}\n}\n\n// Every 2 seconds the falling disasters drop their blocks from the top, and the breaking floor turns floor blocks\n// red, then takes them away\nfunction hazardStep() {\n\tconst box = arena()\n\tfor (const hazard of activeHazards) {\n\t\tfor (let i = 0; drops[hazard] && i < drops[hazard].count; i++) {\n\t\t\tconst cell = pickCell(Math.random() < drops[hazard].aim)\n\t\t\tif (api.getBlock(cell[0], box.y2, cell[1]) === "Air") {\n\t\t\t\tconst block = { x: cell[0], y: box.y2, z: cell[1], name: pickRandom(drops[hazard].blocks), drop: drops[hazard] }\n\t\t\t\tchangeBlock(block.x, block.y, block.z, block.name)\n\t\t\t\tfalling.push(block)\n\t\t\t}\n\t\t}\n\t}\n\tif (activeHazards.includes("shrinkingFloor")) {\n\t\tfor (let i = 0; i < Math.max(2, Math.ceil(((box.x2 - box.x1 + 1) * (box.z2 - box.z1 + 1)) / 40)); i++) {\n\t\t\tconst cell = pickCell(false)\n\t\t\tif (api.getBlock(cell[0], box.y1, cell[1]) !== "Air") {\n\t\t\t\tchangeBlock(cell[0], box.y1, cell[1], "Red Wool")\n\t\t\t\tlaterThisRound(1, () => changeBlock(cell[0], box.y1, cell[1], "Air"))\n\t\t\t}\n\t\t}\n\t}\n}\n\n// Falling blocks move down a block every 0.1 seconds, until they land or hit a player\nfunction moveFalling() {\n\tfor (const block of falling.slice()) {\n\t\tconst hitPlayer = playersLeft().find((playerId) => {\n\t\t\tconst position = api.getPosition(playerId)\n\t\t\treturn api.isAlive(playerId) && Math.abs(position[0] - block.x - 0.5) < 0.9 && Math.abs(position[2] - block.z - 0.5) < 0.9 && block.y >= position[1] - 0.5 && block.y < position[1] + 2\n\t\t})\n\t\tif (hitPlayer || api.getBlock(block.x, block.y - 1, block.z) !== "Air" || block.y < arena().y1 - 3) {\n\t\t\tfalling.splice(falling.indexOf(block), 1)\n\t\t\tif (block.drop.radius > 0) {\n\t\t\t\tlaterThisRound(hitPlayer ? 0 : block.drop.fuse, () => blast(block.x, block.y, block.z, block.drop.radius, block.drop.damage))\n\t\t\t} else if (hitPlayer) {\n\t\t\t\tapi.applyHealthChange(hitPlayer, -block.drop.damage)\n\t\t\t\tchangeBlock(block.x, block.y, block.z, "Air")\n\t\t\t}\n\t\t\tcontinue\n\t\t}\n\t\tchangeBlock(block.x, block.y, block.z, "Air")\n\t\tblock.y--\n\t\tchangeBlock(block.x, block.y, block.z, block.name)\n\t}\n}\n\n// Blows a hole in the arena (lava stays) and hurts players nearby, the closest the most\nfunction blast(x, y, z, radius, damage) {\n\tconst box = arena()\n\tfor (let bx = Math.max(x - radius, box.x1); bx <= Math.min(x + radius, box.x2); bx++) {\n\t\tfor (let by = Math.max(y - radius, box.y1); by <= Math.min(y + radius, box.y2); by++) {\n\t\t\tfor (let bz = Math.max(z - radius, box.z1); bz <= Math.min(z + radius, box.z2); bz++) {\n\t\t\t\tconst name = api.getBlock(bx, by, bz)\n\t\t\t\tconst inside = (bx - x) * (bx - x) + (by - y) * (by - y) + (bz - z) * (bz - z) <= radius * radius\n\t\t\t\tif (inside && !["Air", "Lava", "Unloaded"].includes(name)) {\n\t\t\t\t\tchangeBlock(bx, by, bz, "Air")\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\tapi.playParticleEffect({ presetId: "orangeFirecrackerLarge", pos1: [x - 1, y, z - 1], pos2: [x + 2, y + 2, z + 2] })\n\tfor (const playerId of playersLeft()) {\n\t\tconst position = api.getPosition(playerId)\n\t\tconst distance = Math.hypot(position[0] - x - 0.5, position[1] - y, position[2] - z - 0.5)\n\t\tif (api.isAlive(playerId) && distance < radius + 2) {\n\t\t\tapi.applyHealthChange(playerId, -Math.round(damage * (1 - distance / (radius + 2))))\n\t\t}\n\t}\n}\n\nfunction knockOut(playerId, why) {\n\tif (!isRoundRunning() || !playersLeft().includes(playerId)) {\n\t\treturn\n\t}\n\teliminate(playerId)\n\tapi.broadcastMessage(api.getEntityName(playerId) + " " + why, { color: "red" })\n\tcheckForWinner()\n}\n\nfunction checkForWinner() {\n\tif (!isRoundRunning()) {\n\t\treturn\n\t}\n\tconst left = playersLeft()\n\tif (left.length === 0) {\n\t\troundDecided = true\n\t\tendRound("Nobody survived! Try again.")\n\t} else if (left.length === 1 && roundPlayerCount > 1) {\n\t\troundDecided = true\n\t\tendRound(rewardSurvivors(left))\n\t}\n}\n\nfunction tick(ms) {\n\tfor (const playerId of playersLeft()) {\n\t\t// A knock-out can end the round and send everyone to the lobby: stop then\n\t\tif (!isRoundRunning()) {\n\t\t\treturn\n\t\t}\n\t\tif (!api.isAlive(playerId)) {\n\t\t\tknockOut(playerId, "didn\'t survive!")\n\t\t}\n\t}\n}\n\nfunction fellOut(playerId) {\n\tif (isRoundRunning() && playersLeft().includes(playerId)) {\n\t\tsendToWatch(playerId)\n\t\tknockOut(playerId, "fell out!")\n\t}\n}\n\nfunction onRespawnRequest(playerId) {\n\tknockOut(playerId, "didn\'t survive!")\n\treturn isRoundRunning() ? watchSpot() : CONFIG.lobbyPosition\n}\n\nfunction onPlayerLeave(playerId) {\n\trunLater(0, checkForWinner)\n}',
        changeable: [{
          name: "rewardSurvivors",
          about: "what the players who survive a round get, and the message about them (it gives winCoins and saves their wins)"
        }, {
          name: "hazardStep",
          about: "what the disasters do every 2 seconds: which blocks fall where, and how fast the floor breaks"
        }],
        setup: "Build a lobby at lobbyPosition, walls around the arena box (the floor is filled in for you) and things inside it to climb; the arena is put back as it was after each round."
      }, {
        name: "skywars",
        kind: "game",
        title: "Skywars",
        category: "pvp",
        summary: "Rounds on sky islands: everyone starts on their own island with chests of random loot, falling or dying knocks you out and the last player left wins; chests can refill and a border can close in",
        keywords: ["skywars", "sky wars", "skywar", "sky war", "skywares", "skiwars", "sky islands", "refill", "border", "shrinking border", "pillars", "pillars of fortune"],
        howItPlays: "Players wait at lobbyPosition. Once enough are in, a countdown runs and each player goes to their own island (islandSpawns) with an empty inventory. A chest is put at each of chestPositions and filled with loot: every [item, min, max] of lootTable puts min to max of that item in a random slot. Falling below fallY or dying knocks a player out to watch from above the middle; the last player left wins. Every refillSeconds the chests are filled again (0: never). With borderShrinkSeconds above 0, a border around the middle of the islands starts borderStartRadius blocks out and closes in over that many seconds; players outside it lose health every second.",
        settings: [{
          key: "lobbyPosition",
          kind: "position",
          value: "[0, 10, 0]",
          about: "where players wait between rounds"
        }, {
          key: "islandSpawns",
          kind: "list",
          value: "[[30, 40, 0], [-30, 40, 0], [0, 40, 30], [0, 40, -30]]",
          about: "where each player starts, one [x, y, z] per island; with more players than islands, some share"
        }, {
          key: "chestPositions",
          kind: "list",
          value: "[[32, 40, 2], [-32, 40, -2], [2, 40, 32], [-2, 40, -32], [0, 40, 0]]",
          about: "the [x, y, z] of every chest; a chest is put there if there isn't one"
        }, {
          key: "lootTable",
          kind: "list",
          names: "item",
          value: '[["Stone Sword", 0, 1], ["Iron Sword", 0, 1], ["Wood Bow", 0, 1], ["Arrow", 0, 8], ["Maple Wood Planks", 8, 24], ["Bread", 1, 3], ["Iron Chestplate", 0, 1], ["Snowball", 0, 8]]',
          about: "what chests hold: each [item, min, max] puts min to max of the item in every chest (min 0: sometimes none)"
        }, {
          key: "refillSeconds",
          kind: "number",
          value: "180",
          about: "the chests fill up again this often, in seconds (0: never)"
        }, {
          key: "borderStartRadius",
          kind: "number",
          value: "60",
          about: "how far the border starts from the middle of the islands, in blocks"
        }, {
          key: "borderShrinkSeconds",
          kind: "number",
          value: "300",
          about: "how many seconds the border takes to close in on the middle (0: no border)"
        }, {
          key: "fallY",
          kind: "number",
          value: "20",
          about: "falling below this height knocks a player out (keep it below the islands)"
        }, {
          key: "roundSeconds",
          kind: "number",
          value: "600",
          about: "longest a round lasts, in seconds (0: no limit)"
        }],
        code: '// Skywars: each round sends every player to their own island. Loot the chests, bridge across and knock the others\n// off: falling below fallY or dying puts you out to watch. The last player left wins. Chests can refill, and a\n// border can close in on the middle, hurting anyone outside it.\nconst chestSlots = 36\nconst borderDamage = 10 // health lost each second outside the border\nconst smallestBorder = 3 // the border stops closing in this many blocks from the middle\nlet roundPlayerCount = 0\nlet refillTimer = null\nlet borderTimer = null\nlet borderRadius = 0\n\nfunction onPlayerJoin(playerId) {\n\tif (isRoundRunning()) {\n\t\teliminate(playerId)\n\t\tsendToWatch(playerId)\n\t\tapi.sendMessage(playerId, "A round is on! Watch this one, you\'ll play in the next.", { color: "yellow" })\n\t\treturn\n\t}\n\tapi.setPlayerGamemode(playerId, "survival")\n\tapi.setPosition(playerId, CONFIG.lobbyPosition[0], CONFIG.lobbyPosition[1], CONFIG.lobbyPosition[2])\n\tapi.sendMessage(playerId, "Welcome to Skywars! Loot your chests and be the last one left.", { color: "aqua" })\n}\n\n// The middle of the islands: the border closes in on it, and players who are out watch from above it\nfunction middle() {\n\treturn [0, 1, 2].map((i) => CONFIG.islandSpawns.reduce((sum, spawn) => sum + spawn[i], 0) / CONFIG.islandSpawns.length)\n}\n\nfunction sendToWatch(playerId) {\n\tconst spot = middle()\n\tapi.setPosition(playerId, spot[0], spot[1] + 10, spot[2])\n}\n\nfunction beginRound() {\n\tconst players = shuffleList(api.getPlayerIds())\n\troundPlayerCount = players.length\n\tplayers.forEach((playerId, index) => {\n\t\tconst spawn = CONFIG.islandSpawns[index % CONFIG.islandSpawns.length]\n\t\tif (!api.isAlive(playerId)) {\n\t\t\tapi.forceRespawn(playerId, spawn)\n\t\t}\n\t\tapi.setPosition(playerId, spawn[0], spawn[1], spawn[2])\n\t\thealFully(playerId)\n\t\tapi.clearInventory(playerId)\n\t})\n\tfillChests()\n\tif (CONFIG.refillSeconds > 0) {\n\t\trefillTimer = repeatEvery(CONFIG.refillSeconds, () => {\n\t\t\tfillChests()\n\t\t\tannounce("The chests have been refilled!", "aqua")\n\t\t})\n\t}\n\tborderRadius = CONFIG.borderStartRadius\n\tif (CONFIG.borderShrinkSeconds > 0) {\n\t\tborderTimer = repeatEvery(1, moveBorder)\n\t}\n\tannounce("Go! Loot your chests and be the last one left!", "lime")\n}\n\nfunction finishRound() {\n\tcancelTimer(refillTimer)\n\tcancelTimer(borderTimer)\n\tbringEveryoneBack()\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tapi.clearInventory(playerId)\n\t\tapi.setPosition(playerId, CONFIG.lobbyPosition[0], CONFIG.lobbyPosition[1], CONFIG.lobbyPosition[2])\n\t\tremoveSidebar(playerId, "Border")\n\t}\n}\n\nfunction fillChests() {\n\tfor (const spot of CONFIG.chestPositions) {\n\t\twhenWorldLoaded(spot, () => fillSkywarsChest(spot))\n\t}\n}\n\n// Empties the chest at spot (putting one there if it\'s gone), then puts each loot item in a random slot\nfunction fillSkywarsChest(spot) {\n\tif (!api.getBlock(spot[0], spot[1], spot[2]).includes("Chest")) {\n\t\tapi.setBlock(spot[0], spot[1], spot[2], "Chest")\n\t}\n\tconst slots = []\n\tfor (let i = 0; i < chestSlots; i++) {\n\t\tapi.setStandardChestItemSlot(spot, i, "Air")\n\t\tslots.push(i)\n\t}\n\tconst randomSlots = shuffleList(slots)\n\tCONFIG.lootTable.forEach((loot, index) => {\n\t\t// [item, amount] without a max works too\n\t\tconst amount = loot[2] === undefined ? loot[1] || 1 : randomInt(loot[1], loot[2])\n\t\tif (amount > 0 && index < chestSlots) {\n\t\t\tapi.setStandardChestItemSlot(spot, randomSlots[index], loot[0], amount)\n\t\t}\n\t})\n}\n\n// Every second the border closes in a little; players outside it get hurt\nfunction moveBorder() {\n\tconst step = (CONFIG.borderStartRadius - smallestBorder) / CONFIG.borderShrinkSeconds\n\tborderRadius = Math.max(smallestBorder, borderRadius - step)\n\tconst center = middle()\n\tfor (const playerId of playersLeft()) {\n\t\tconst position = api.getPosition(playerId)\n\t\tsetSidebar(playerId, "Border", Math.round(borderRadius) + " blocks")\n\t\tif (api.isAlive(playerId) && Math.hypot(position[0] - center[0], position[2] - center[2]) > borderRadius) {\n\t\t\tapi.applyHealthChange(playerId, -borderDamage)\n\t\t\tapi.sendMessage(playerId, "You\'re outside the border! Go to the middle!", { color: "red" })\n\t\t}\n\t}\n}\n\nfunction knockOut(playerId, why) {\n\tif (!isRoundRunning() || !playersLeft().includes(playerId)) {\n\t\treturn\n\t}\n\teliminate(playerId)\n\tapi.broadcastMessage(api.getEntityName(playerId) + " " + why, { color: "red" })\n\tcheckForWinner()\n}\n\nfunction checkForWinner() {\n\tif (!isRoundRunning()) {\n\t\treturn\n\t}\n\tconst left = playersLeft()\n\tif (left.length === 1 && roundPlayerCount > 1) {\n\t\twinRound(left[0])\n\t} else if (left.length === 0) {\n\t\tendRound("Nobody is left! It\'s a draw.")\n\t}\n}\n\nfunction winRound(playerId) {\n\tconst wins = addSaved(playerId, "skywarsWins", 1)\n\tendRound(api.getEntityName(playerId) + " wins Skywars! (" + wins + " wins)")\n}\n\nfunction tick(ms) {\n\tif (!isRoundRunning()) {\n\t\treturn\n\t}\n\tfor (const playerId of playersLeft()) {\n\t\t// A knock-out can end the round, sending everyone to the lobby: the rest aren\'t knocked out by being there\n\t\tif (!isRoundRunning()) {\n\t\t\treturn\n\t\t}\n\t\tif (!api.isAlive(playerId)) {\n\t\t\tknockOut(playerId, "was knocked out!")\n\t\t} else if (api.getPosition(playerId)[1] < CONFIG.fallY) {\n\t\t\tsendToWatch(playerId)\n\t\t\tknockOut(playerId, "fell into the void!")\n\t\t}\n\t}\n}\n\nfunction onRespawnRequest(playerId) {\n\tknockOut(playerId, "was knocked out!")\n\tconst spot = middle()\n\treturn isRoundRunning() ? [spot[0], spot[1] + 10, spot[2]] : CONFIG.lobbyPosition\n}\n\nfunction onPlayerLeave(playerId) {\n\trunLater(0, checkForWinner)\n}',
        changeable: [{
          name: "winRound",
          about: "what happens when a player is the last one left: the message and the reward (it saves their wins)"
        }, {
          name: "fillSkywarsChest",
          about: "what goes in a chest when it is filled or refilled"
        }],
        setup: "Build a lobby at lobbyPosition and an island at each spot in islandSpawns with gaps of air between them (the chests are put in for you), and turn PvP on in your world settings."
      }, {
        name: "teamBattle",
        kind: "game",
        title: "Team battle",
        category: "teams",
        summary: "Two teams fight: each has its own spawn and armour colour, teammates can't hurt each other, and the first team to enough kills wins",
        keywords: ["team", "teams", "team battle", "teambattle", "team fight", "red vs blue", "red v blue", "red blue", "tdm", "team deathmatch", "team death match", "deathmatch", "team pvp", "teams pvp", "2 teams", "two teams", "war", "teem", "teems"],
        howItPlays: "Each player joins the team with fewest players (teamNames) and starts at that team's spot in teamSpawns, with kitItems and, if teamArmour is on, armour in the team's colour. Teammates can't hurt each other. Every kill gives the killer killCoins and a point to their team; team kills show on everyone's sidebar. The first team to teamKillsToWin kills wins: it is announced, the kills reset and everyone goes back to their spawn with a fresh kit.",
        settings: [{
          key: "teamNames",
          kind: "list",
          value: '["Red", "Blue"]',
          about: "the teams' names; colour names (Red, Blue, Green, Yellow...) also colour their armour"
        }, {
          key: "teamSpawns",
          kind: "list",
          value: "[[-20, 10, 0], [20, 10, 0]]",
          about: "where each team starts and respawns, [x, y, z] in the same order as teamNames"
        }, {
          key: "teamKillsToWin",
          kind: "number",
          value: "20",
          about: "kills a team needs to win"
        }, {
          key: "kitItems",
          kind: "list",
          names: "item",
          value: '[["Iron Sword", 1], ["Wood Bow", 1], ["Arrow", 16], ["Bread", 5]]',
          about: "the items each player gets on joining and respawning, as [item, amount]"
        }, {
          key: "teamArmour",
          kind: "boolean",
          value: "true",
          about: "true: players wear armour in their team's colour"
        }, {
          key: "killCoins",
          kind: "number",
          value: "5",
          about: "coins for each kill (0 for none)"
        }],
        code: '// Team battle: players are split into teams, each with its own spawn. Teammates can\'t hurt each other. Every kill\n// scores a point for your team, and the first team to CONFIG.teamKillsToWin kills wins.\nconst teamKills = {}\nconst armourColours = ["White", "Orange", "Magenta", "Light Blue", "Yellow", "Lime", "Pink", "Gray", "Light Gray", "Cyan", "Purple", "Blue", "Brown", "Green", "Red", "Black"]\n\nfunction onPlayerJoin(playerId) {\n\tjoinSmallestTeam(playerId)\n\tsendToSpawn(playerId)\n\tshowTeamKills()\n\tapi.sendMessage(playerId, "First team to " + CONFIG.teamKillsToWin + " kills wins!", { color: "aqua" })\n}\n\nfunction teamSpawn(playerId) {\n\tconst index = CONFIG.teamNames.indexOf(getTeam(playerId))\n\treturn CONFIG.teamSpawns[index] || CONFIG.teamSpawns[0]\n}\n\nfunction sendToSpawn(playerId) {\n\tconst spawn = teamSpawn(playerId)\n\tapi.setPosition(playerId, spawn[0], spawn[1], spawn[2])\n\tgiveTeamKit(playerId)\n\thealFully(playerId)\n}\n\nfunction giveTeamKit(playerId) {\n\tgiveKit(playerId, CONFIG.kitItems)\n\t// The team\'s colour whatever its capitals: a team "red" wears Red\n\tconst team = String(getTeam(playerId)).toLowerCase()\n\tconst colour = armourColours.find((name) => name.toLowerCase() === team)\n\tif (CONFIG.teamArmour && colour) {\n\t\tapi.setItemSlot(playerId, 46, colour + " Wood Helmet")\n\t\tapi.setItemSlot(playerId, 47, colour + " Wood Chestplate")\n\t\tapi.setItemSlot(playerId, 48, colour + " Wood Gauntlets")\n\t\tapi.setItemSlot(playerId, 49, colour + " Wood Leggings")\n\t\tapi.setItemSlot(playerId, 50, colour + " Wood Boots")\n\t}\n}\n\nfunction showTeamKills() {\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tfor (const team of CONFIG.teamNames) {\n\t\t\tsetSidebar(playerId, team + " kills", teamKills[team] || 0)\n\t\t}\n\t}\n}\n\nfunction onPlayerDamagingOtherPlayer(attackingPlayer, damagedPlayer, damageDealt, withItem) {\n\tif (attackingPlayer !== damagedPlayer && sameTeam(attackingPlayer, damagedPlayer)) {\n\t\treturn "preventDamage"\n\t}\n}\n\nfunction onPlayerKilledOtherPlayer(attackingPlayer, killedPlayer, damageDealt, withItem) {\n\tconst team = getTeam(attackingPlayer)\n\tif (team !== null && !sameTeam(attackingPlayer, killedPlayer)) {\n\t\tscoreKill(attackingPlayer, team)\n\t}\n\t// The kit comes back on respawn, so it isn\'t dropped\n\treturn "keepInventory"\n}\n\nfunction scoreKill(attackingPlayer, team) {\n\tteamKills[team] = (teamKills[team] || 0) + 1\n\tif (CONFIG.killCoins > 0) {\n\t\taddCoins(attackingPlayer, CONFIG.killCoins)\n\t}\n\tshowTeamKills()\n\tif (teamKills[team] >= CONFIG.teamKillsToWin) {\n\t\twinBattle(team)\n\t}\n}\n\nfunction winBattle(team) {\n\tannounce("Team " + team + " wins!", "gold")\n\tfor (const name of CONFIG.teamNames) {\n\t\tteamKills[name] = 0\n\t}\n\tshowTeamKills()\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tif (api.isAlive(playerId)) {\n\t\t\tsendToSpawn(playerId)\n\t\t}\n\t}\n}\n\nfunction onRespawnRequest(playerId) {\n\t// Called before the player is back: the new kit is ready when they are\n\tgiveTeamKit(playerId)\n\treturn teamSpawn(playerId)\n}',
        changeable: [{
          name: "scoreKill",
          about: "what a kill gives: the team point, coins, the sidebar"
        }, {
          name: "winBattle",
          about: "what happens when a team reaches teamKillsToWin: the message and the reset"
        }, {
          name: "giveTeamKit",
          about: "the items and armour each player gets"
        }],
        setup: "Build an arena with a base at each spot in teamSpawns, and turn PvP on in your world settings."
      }, {
        name: "captureTheFlag",
        kind: "game",
        title: "Capture the flag",
        category: "teams",
        summary: "Two teams each guard a flag: grab the other team's flag and bring it to yours to score; the carrier who dies drops it back home, and the first team to enough captures wins",
        keywords: ["capture the flag", "capture flag", "ctf", "flag", "flags", "steal the flag", "steal flag", "capture", "captue the flag", "capture the flage"],
        howItPlays: "Rounds: once enough players are in, a countdown runs, the players are split into teams (teamNames), each team's flag block (flagBlocks) is put at its flagPositions and everyone goes to their team's spawn (teamSpawns) with kitItems. Walking into (or hitting) the other team's flag picks it up: it leaves its base and everyone's sidebar says who has it. Bringing it next to your own flag scores a capture and puts it back. A carrier who dies or leaves drops it back home. Dead players come back at their spawn with the kit; teammates can't hurt each other. The first team to capturesToWin captures wins; when roundSeconds run out, the team with most captures wins.",
        settings: [{
          key: "teamNames",
          kind: "list",
          value: '["Red", "Blue"]',
          about: "the two teams' names"
        }, {
          key: "teamSpawns",
          kind: "list",
          value: "[[-30, 10, 0], [30, 10, 0]]",
          about: "where each team starts and comes back after dying, one [x, y, z] per team in the same order as teamNames"
        }, {
          key: "flagPositions",
          kind: "list",
          value: "[[-40, 10, 0], [40, 10, 0]]",
          about: "where each team's flag stands, one [x, y, z] per team in the same order as teamNames (bring the enemy flag here to score)"
        }, {
          key: "flagBlocks",
          kind: "list",
          names: "block",
          value: '["Red Wool", "Blue Wool"]',
          about: "the block each team's flag is, in the same order as teamNames"
        }, {
          key: "capturesToWin",
          kind: "number",
          value: "3",
          about: "captures a team needs to win the round"
        }, {
          key: "kitItems",
          kind: "list",
          names: "item",
          value: '[["Stone Sword", 1], ["Wood Bow", 1], ["Arrow", 16], ["Bread", 5]]',
          about: "the [item, amount] each player gets at the start and after dying"
        }, {
          key: "roundSeconds",
          kind: "number",
          value: "600",
          about: "longest a round lasts, in seconds (0: no limit); then most captures wins"
        }],
        code: '// Capture the flag: walk into the other team\'s flag to take it, then bring it to your own flag to score. A carrier who\n// dies or leaves drops it back home. The first team to CONFIG.capturesToWin captures wins the round.\nconst captures = {}\nconst flagCarriers = {} // a team\'s name: the player carrying that team\'s flag\nlet roundWinner = null\n\nfunction onPlayerJoin(playerId) {\n\tjoinSmallestTeam(playerId)\n\tsendToSpawn(playerId)\n\tupdateFlags()\n\tapi.sendMessage(playerId, "Grab the other team\'s flag and bring it to yours! First to " + CONFIG.capturesToWin + " captures wins.", { color: "aqua" })\n}\n\nfunction teamSpawn(team) {\n\treturn CONFIG.teamSpawns[CONFIG.teamNames.indexOf(team)] || CONFIG.teamSpawns[0]\n}\n\nfunction flagSpot(team) {\n\tconst spot = CONFIG.flagPositions[CONFIG.teamNames.indexOf(team)] || CONFIG.flagPositions[0]\n\treturn [Math.floor(spot[0]), Math.floor(spot[1]), Math.floor(spot[2])]\n}\n\nfunction sendToSpawn(playerId) {\n\tconst spot = teamSpawn(getTeam(playerId))\n\tapi.setPosition(playerId, spot[0], spot[1], spot[2])\n\thealFully(playerId)\n\tgiveKit(playerId, CONFIG.kitItems)\n}\n\n// Puts each flag at its base (or takes it away while carried) and shows everyone where the flags are\nfunction updateFlags() {\n\tCONFIG.teamNames.forEach((team, index) => {\n\t\tconst spot = flagSpot(team)\n\t\tconst block = flagCarriers[team] ? "Air" : CONFIG.flagBlocks[index] || CONFIG.flagBlocks[0]\n\t\twhenWorldLoaded(spot, () => {\n\t\t\tapi.setBlock(spot[0], spot[1], spot[2], block)\n\t\t})\n\t})\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tfor (const team of CONFIG.teamNames) {\n\t\t\tconst carrier = flagCarriers[team]\n\t\t\tsetSidebar(playerId, team, "captures " + (captures[team] || 0) + ", flag " + (carrier ? "taken by " + api.getEntityName(carrier) : "home"))\n\t\t}\n\t}\n}\n\nfunction beginRound() {\n\troundWinner = null\n\tfor (const team of CONFIG.teamNames) {\n\t\tcaptures[team] = 0\n\t\tdelete flagCarriers[team]\n\t}\n\t// Dealing the teams again evens them out after players left\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tjoinSmallestTeam(playerId)\n\t\tif (!api.isAlive(playerId)) {\n\t\t\tapi.forceRespawn(playerId, teamSpawn(getTeam(playerId)))\n\t\t}\n\t\tsendToSpawn(playerId)\n\t}\n\tupdateFlags()\n\tannounce("Capture the flag! Bring the other team\'s flag to yours.", "aqua")\n}\n\nfunction finishRound() {\n\tif (roundWinner === null) {\n\t\tconst most = Math.max(...CONFIG.teamNames.map((team) => captures[team] || 0))\n\t\tconst leaders = CONFIG.teamNames.filter((team) => (captures[team] || 0) === most)\n\t\tannounce(leaders.length === 1 ? "Team " + leaders[0] + " wins with the most captures!" : "It\'s a draw!", "gold")\n\t}\n\tfor (const team of CONFIG.teamNames) {\n\t\tdelete flagCarriers[team]\n\t}\n\tupdateFlags()\n}\n\nfunction isNearFlag(playerId, team) {\n\tconst position = api.getPosition(playerId)\n\tconst spot = flagSpot(team)\n\treturn Math.abs(position[0] - spot[0] - 0.5) <= 1.5 && Math.abs(position[2] - spot[2] - 0.5) <= 1.5 && Math.abs(position[1] - spot[1]) <= 2\n}\n\n// A carried flag goes back to its base, when its carrier dies or leaves\nfunction dropFlags(playerId) {\n\tfor (const team of CONFIG.teamNames) {\n\t\tif (flagCarriers[team] === playerId) {\n\t\t\tdelete flagCarriers[team]\n\t\t\tapi.broadcastMessage("Team " + team + "\'s flag went back home!", { color: "yellow" })\n\t\t\tupdateFlags()\n\t\t}\n\t}\n}\n\nfunction scoreCapture(playerId, team, flagTeam) {\n\tdelete flagCarriers[flagTeam]\n\tcaptures[team] = (captures[team] || 0) + 1\n\tupdateFlags()\n\tif (captures[team] >= CONFIG.capturesToWin) {\n\t\tteamWins(team)\n\t} else {\n\t\tannounce(api.getEntityName(playerId) + " captured team " + flagTeam + "\'s flag!", "lime")\n\t}\n}\n\nfunction teamWins(team) {\n\troundWinner = team\n\tendRound("Team " + team + " wins!")\n}\n\nfunction tick(ms) {\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tconst team = getTeam(playerId)\n\t\tif (!isRoundRunning() || team === null) {\n\t\t\tcontinue\n\t\t}\n\t\tif (!api.isAlive(playerId)) {\n\t\t\tdropFlags(playerId)\n\t\t\tcontinue\n\t\t}\n\t\tfor (const other of CONFIG.teamNames) {\n\t\t\tif (other !== team && !flagCarriers[other] && isNearFlag(playerId, other)) {\n\t\t\t\tflagCarriers[other] = playerId\n\t\t\t\tannounce(api.getEntityName(playerId) + " took team " + other + "\'s flag!", "yellow")\n\t\t\t\tupdateFlags()\n\t\t\t} else if (other !== team && flagCarriers[other] === playerId && isNearFlag(playerId, team)) {\n\t\t\t\tscoreCapture(playerId, team, other)\n\t\t\t}\n\t\t}\n\t}\n}\n\n// Flag blocks can\'t be broken or built over\nfunction onPlayerAttemptChangeBlock(playerId, x, y, z) {\n\tif (CONFIG.teamNames.some((team) => flagSpot(team).join() === [x, y, z].join())) {\n\t\treturn "preventChange"\n\t}\n}\n\nfunction onPlayerDamagingOtherPlayer(attackingPlayer, damagedPlayer) {\n\tif (!isRoundRunning() || sameTeam(attackingPlayer, damagedPlayer)) {\n\t\treturn "preventDamage"\n\t}\n}\n\nfunction onRespawnRequest(playerId) {\n\tdropFlags(playerId)\n\tgiveKit(playerId, CONFIG.kitItems)\n\treturn teamSpawn(getTeam(playerId))\n}\n\nfunction onPlayerLeave(playerId) {\n\tdropFlags(playerId)\n\trunLater(0, () => {\n\t\t// A team left with no players loses the round\n\t\tconst teamsLeft = CONFIG.teamNames.filter((team) => teamMembers(team).length > 0)\n\t\tif (isRoundRunning() && teamsLeft.length === 1) {\n\t\t\tteamWins(teamsLeft[0])\n\t\t}\n\t})\n}',
        changeable: [{
          name: "teamWins",
          about: "what happens when a team wins the round: the message, rewards for its players"
        }, {
          name: "scoreCapture",
          about: "what a capture gives: the team's point, the message, rewards for the carrier"
        }],
        setup: "Build a base for each team around its spawn with its flag position in it (the flag blocks are put in for you), and turn PvP on in your world settings."
      }, {
        name: "football",
        kind: "game",
        title: "Football (soccer)",
        category: "teams",
        summary: "Two teams and a real ball: hit it to kick it where you look, run into it to dribble, and put it in the other team's goal; the first team to enough goals (or the most when time runs out) wins",
        keywords: ["football", "footbal", "fotball", "futbol", "soccer", "soccor", "socer", "footy", "football game", "soccer game", "kick the ball", "kick a ball", "ball game", "score goals", "penalty", "penalties", "goalkeeper", "goalie", "striker", "world cup"],
        howItPlays: "Rounds: once enough players are in, a countdown runs, the players are split into the two teamNames (team-coloured armour), the pitch is built at pitchCentre (if buildPitch is on; pitchLength long, pitchWidth wide, a goal at each end) and a ball appears in the middle. Hitting the ball kicks it the way the player looks (kickPower is how hard); running into it dribbles it. The first team defends the goal at the low-x end of the pitch, the second team the other. The ball in the other team's goal scores a goal: the scorer is announced (the last player to touch the ball), everyone goes back to their half and the ball to the middle for a kickoff. The ball is put back on the pitch if it leaves it. The first team to goalsToWin goals wins, or the team with most goals when roundSeconds run out (a draw if level); every winner gets winCoins. Goals and time show on the sidebar.",
        settings: [{
          key: "pitchCentre",
          kind: "position",
          value: "[0, 10, 0]",
          about: "the middle of the pitch, [x, y, z]: y is the height players stand at (the grass is the block below)"
        }, {
          key: "pitchLength",
          kind: "number",
          value: "40",
          about: "how long the pitch is, in blocks, from goal to goal (at least 12)"
        }, {
          key: "pitchWidth",
          kind: "number",
          value: "24",
          about: "how wide the pitch is, in blocks (at least 8)"
        }, {
          key: "buildPitch",
          kind: "boolean",
          value: "true",
          about: "true: the pitch and goals are built for you (grass, walls and goal frames); false: you build the pitch yourself to fit pitchCentre, pitchLength and pitchWidth"
        }, {
          key: "teamNames",
          kind: "list",
          value: '["Red", "Blue"]',
          about: "the two teams' names, the first defends the low-x goal; colour names (Red, Blue, Green, Yellow...) also colour their armour"
        }, {
          key: "goalsToWin",
          kind: "number",
          value: "5",
          about: "goals a team needs to win the match"
        }, {
          key: "roundSeconds",
          kind: "number",
          value: "180",
          about: "how long a match lasts, in seconds (0: no limit); then the team with most goals wins"
        }, {
          key: "kickPower",
          kind: "number",
          value: "8",
          about: "how hard a hit kicks the ball (4 gentle, 8 normal, 12 very hard)"
        }, {
          key: "winCoins",
          kind: "number",
          value: "10",
          about: "coins for each player of the winning team (0 for none)"
        }],
        code: '// Football: two teams, one ball. Hit the ball to kick it where you look, run into it to dribble. Put it in the other\n// team\'s goal to score. First team to CONFIG.goalsToWin goals wins, or the most goals when time runs out.\nconst goals = {}\nconst armourColours = ["White", "Orange", "Magenta", "Light Blue", "Yellow", "Lime", "Pink", "Gray", "Light Gray", "Cyan", "Purple", "Blue", "Brown", "Green", "Red", "Black"]\nlet ball = null\nlet lastToucher = null\nlet kickoffMs = 0 // the ball waits in the middle until this runs out\nlet roundWinner = null\nlet pitchBuilt = false\nlet shownSeconds = -1\n\n// The pitch in blocks: its edges, the height players stand at, and the goal mouth (z from goalMinZ to goalMaxZ)\nfunction pitch() {\n\tconst length = Math.max(12, CONFIG.pitchLength)\n\tconst width = Math.max(8, CONFIG.pitchWidth)\n\tconst midX = Math.floor(CONFIG.pitchCentre[0])\n\tconst midZ = Math.floor(CONFIG.pitchCentre[2])\n\tconst half = Math.min(4, Math.max(1, Math.floor(width / 6)))\n\tconst minX = midX - Math.floor(length / 2)\n\tconst minZ = midZ - Math.floor(width / 2)\n\treturn { minX: minX, maxX: minX + length - 1, minZ: minZ, maxZ: minZ + width - 1, y: Math.floor(CONFIG.pitchCentre[1]), midX: midX, midZ: midZ, goalMinZ: midZ - half, goalMaxZ: midZ + half }\n}\n\nfunction onPlayerJoin(playerId) {\n\tbuildPitch()\n\tjoinSmallestTeam(playerId)\n\tsendToSpawn(playerId)\n\tshowScore()\n\tapi.sendMessage(playerId, "Kick the ball into the other goal! First to " + CONFIG.goalsToWin + " goals wins.", { color: "aqua" })\n}\n\nfunction teamSpawn(playerId) {\n\tconst p = pitch()\n\tconst side = CONFIG.teamNames.indexOf(getTeam(playerId)) === 0 ? -1 : 1\n\treturn randomSpot([p.midX + side * Math.floor((p.maxX - p.minX) / 4), p.y, p.midZ], 3)\n}\n\nfunction sendToSpawn(playerId) {\n\tconst spot = teamSpawn(playerId)\n\tapi.setPosition(playerId, spot[0], spot[1], spot[2])\n\thealFully(playerId)\n\tconst team = getTeam(playerId)\n\tif (armourColours.includes(team)) {\n\t\tapi.setItemSlot(playerId, 46, team + " Wood Helmet")\n\t\tapi.setItemSlot(playerId, 47, team + " Wood Chestplate")\n\t}\n}\n\n// Grass, a glass wall round the pitch, and a goal behind each end line (glass net, white crossbar)\nfunction buildPitch() {\n\tif (pitchBuilt || !CONFIG.buildPitch) {\n\t\treturn\n\t}\n\tpitchBuilt = true\n\tconst p = pitch()\n\tconst top = p.y + 3\n\tfillBox([p.minX - 4, p.y - 1, p.minZ - 1], [p.maxX + 4, p.y - 1, p.maxZ + 1], "Grass Block")\n\tfillBox([p.minX, p.y, p.minZ], [p.maxX, top, p.maxZ], "Air")\n\tfillBox([p.minX - 4, p.y, p.minZ - 1], [p.maxX + 4, top, p.minZ - 1], "Glass")\n\tfillBox([p.minX - 4, p.y, p.maxZ + 1], [p.maxX + 4, top, p.maxZ + 1], "Glass")\n\tfor (const end of [-1, 1]) {\n\t\tconst near = end < 0 ? p.minX - 1 : p.maxX + 1\n\t\tfillBox([near + 3 * end, p.y, p.minZ], [near + 3 * end, top, p.maxZ], "Glass")\n\t\tfillBox([near, p.y, p.minZ], [near + 2 * end, top, p.goalMinZ - 1], "Glass")\n\t\tfillBox([near, p.y, p.goalMaxZ + 1], [near + 2 * end, top, p.maxZ], "Glass")\n\t\tfillBox([near, p.y, p.goalMinZ], [near + 2 * end, p.y + 2, p.goalMaxZ], "Air")\n\t\tfillBox([near, top, p.goalMinZ], [near + 2 * end, top, p.goalMaxZ], "White Concrete")\n\t}\n}\n\nfunction createBall() {\n\tball = api.attemptCreateMeshEntity("BloxdBlock", { blockName: "Football", size: 1 }, "", { doPhysics: true })\n\tif (ball !== null) {\n\t\t// For players who join later too\n\t\tapi.setTargetedPlayerSettingForEveryone(ball, "canAttack", true, true)\n\t\tresetBall()\n\t}\n}\n\nfunction resetBall() {\n\tconst p = pitch()\n\tapi.setPosition(ball, p.midX + 0.5, p.y + 1, p.midZ + 0.5)\n\tapi.setVelocity(ball, 0, 0, 0)\n}\n\nfunction showScore() {\n\tconst seconds = roundSecondsLeft()\n\tshownSeconds = seconds\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tfor (const team of CONFIG.teamNames) {\n\t\t\tsetSidebar(playerId, team, goals[team] || 0)\n\t\t}\n\t\tif (CONFIG.roundSeconds > 0 && isRoundRunning()) {\n\t\t\tsetSidebar(playerId, "Time", Math.floor(seconds / 60) + ":" + String(100 + (seconds % 60)).slice(1))\n\t\t}\n\t}\n}\n\nfunction beginRound() {\n\troundWinner = null\n\tlastToucher = null\n\tresetScores()\n\tfor (const team of CONFIG.teamNames) {\n\t\tgoals[team] = 0\n\t}\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tjoinSmallestTeam(playerId)\n\t\tif (!api.isAlive(playerId)) {\n\t\t\tapi.forceRespawn(playerId, teamSpawn(playerId))\n\t\t}\n\t\tsendToSpawn(playerId)\n\t}\n\tshowScore()\n\tif (ball === null) {\n\t\tcreateBall()\n\t} else {\n\t\tresetBall()\n\t}\n\tkickoffMs = 1500\n\tannounce("Kick off! First to " + CONFIG.goalsToWin + " goals wins.", "aqua")\n}\n\nfunction finishRound() {\n\tif (ball !== null) {\n\t\tresetBall()\n\t}\n\tconst first = goals[CONFIG.teamNames[0]] || 0\n\tconst second = goals[CONFIG.teamNames[1]] || 0\n\tif (roundWinner === null) {\n\t\troundWinner = first === second ? null : CONFIG.teamNames[first > second ? 0 : 1]\n\t\tannounce(roundWinner === null ? "Full time: it\'s a draw!" : "Full time: team " + roundWinner + " wins!", "gold")\n\t}\n\tfor (const playerId of roundWinner === null ? [] : teamMembers(roundWinner)) {\n\t\taddCoins(playerId, CONFIG.winCoins)\n\t}\n}\n\n// A goal for a team: tells everyone who scored, then kickoff again (or the team wins)\nfunction goalScored(team) {\n\tgoals[team] = (goals[team] || 0) + 1\n\tconst scorer = lastToucher !== null && getTeam(lastToucher) === team ? lastToucher : null\n\tif (scorer !== null) {\n\t\taddScore(scorer, 1)\n\t}\n\tannounce(scorer !== null ? "GOAL! " + api.getEntityName(scorer) + " scores for team " + team + "!" : "GOAL for team " + team + "!", "lime")\n\tlastToucher = null\n\tshowScore()\n\tif (goals[team] >= CONFIG.goalsToWin) {\n\t\troundWinner = team\n\t\tendRound("Team " + team + " wins " + goals[CONFIG.teamNames[0]] + "-" + goals[CONFIG.teamNames[1]] + "!")\n\t\treturn\n\t}\n\tresetBall()\n\tkickoffMs = 2500\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tif (api.isAlive(playerId) && getTeam(playerId) !== null) {\n\t\t\tsendToSpawn(playerId)\n\t\t}\n\t}\n}\n\n// A goal if the ball is through a goal mouth, put back on the pitch if it left some other way\nfunction checkBall() {\n\tconst p = pitch()\n\tconst at = api.getPosition(ball)\n\tconst inMouth = at[2] >= p.goalMinZ && at[2] < p.goalMaxZ + 1 && at[1] < p.y + 3\n\tif (at[0] < p.minX && inMouth) {\n\t\tgoalScored(CONFIG.teamNames[1])\n\t} else if (at[0] >= p.maxX + 1 && inMouth) {\n\t\tgoalScored(CONFIG.teamNames[0])\n\t} else if (at[0] < p.minX || at[0] >= p.maxX + 1 || at[2] < p.minZ || at[2] >= p.maxZ + 1 || at[1] < p.y - 4) {\n\t\tapi.setPosition(ball, Math.min(Math.max(at[0], p.minX + 1.5), p.maxX - 0.5), p.y + 1, Math.min(Math.max(at[2], p.minZ + 1.5), p.maxZ - 0.5))\n\t\tapi.setVelocity(ball, 0, 0, 0)\n\t}\n}\n\n// Walking into the ball may not move it, so a player running next to a slow ball pushes it the way they look\nfunction dribble() {\n\tconst at = api.getPosition(ball)\n\tconst speed = api.getVelocity(ball)\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tconst spot = api.getPosition(playerId)\n\t\tconst run = api.getVelocity(playerId)\n\t\tif (getTeam(playerId) === null || Math.abs(speed[0]) + Math.abs(speed[2]) > 3 || Math.abs(spot[0] - at[0]) > 1.5 || Math.abs(spot[2] - at[2]) > 1.5 || Math.abs(spot[1] - at[1]) > 2 || Math.abs(run[0]) + Math.abs(run[2]) < 1.5) {\n\t\t\tcontinue\n\t\t}\n\t\tconst dir = api.getPlayerFacingInfo(playerId).dir\n\t\tconst length = Math.sqrt(dir[0] * dir[0] + dir[2] * dir[2]) || 1\n\t\tapi.setVelocity(ball, (dir[0] / length) * CONFIG.kickPower * 0.5, speed[1], (dir[2] / length) * CONFIG.kickPower * 0.5)\n\t\tlastToucher = playerId\n\t}\n}\n\nfunction tick(ms) {\n\tif (!isRoundRunning()) {\n\t\treturn\n\t}\n\tif (ball === null) {\n\t\tcreateBall() // null while the world has too many entities: tried again next tick\n\t\treturn\n\t}\n\tif (roundSecondsLeft() !== shownSeconds) {\n\t\tshowScore()\n\t}\n\tkickoffMs -= ms\n\tif (kickoffMs <= 0) {\n\t\tdribble()\n\t\tcheckBall()\n\t}\n}\n\n// Hitting the ball kicks it the way the player looks\nfunction onPlayerDamagingMeshEntity(playerId, damagedId, damageDealt, withItem) {\n\tif (damagedId !== ball || !isRoundRunning() || kickoffMs > 0 || getTeam(playerId) === null) {\n\t\treturn\n\t}\n\tconst dir = api.getPlayerFacingInfo(playerId).dir\n\tapi.setVelocity(ball, dir[0] * CONFIG.kickPower, dir[1] * CONFIG.kickPower + 2, dir[2] * CONFIG.kickPower)\n\tlastToucher = playerId\n}\n\n// Football isn\'t a fight\nfunction onPlayerDamagingOtherPlayer(attackingPlayer, damagedPlayer) {\n\treturn "preventDamage"\n}\n\nfunction onRespawnRequest(playerId) {\n\treturn teamSpawn(playerId)\n}\n\nfunction onPlayerLeave(playerId) {\n\trunLater(0, () => {\n\t\t// A team left with nobody loses the match\n\t\tconst teamsLeft = CONFIG.teamNames.filter((team) => teamMembers(team).length > 0)\n\t\tif (isRoundRunning() && teamsLeft.length === 1) {\n\t\t\troundWinner = teamsLeft[0]\n\t\t\tendRound("Team " + roundWinner + " wins!")\n\t\t}\n\t})\n}',
        changeable: [{
          name: "goalScored",
          about: "what a goal gives: the message, the point, the scorer's reward, what happens after"
        }, {
          name: "finishRound",
          about: "what happens when the match is over: the result message and the winners' reward"
        }, {
          name: "sendToSpawn",
          about: "where players stand and what they wear at kickoff"
        }],
        setup: "Nothing: the pitch and goals are built for you at pitchCentre (they replace what is there); set buildPitch to false to build your own pitch, with a goal at each end, instead."
      }, {
        name: "copsAndRobbers",
        kind: "game",
        title: "Cops and robbers",
        category: "teams",
        summary: "Rounds of cops against robbers: robbers grab loot at the vault and bank it at their hideout, a cop's hit sends a robber to jail, and a robber on the jail button frees everyone in it",
        keywords: ["cops and robbers", "cops n robbers", "cop and robber", "cops vs robbers", "cop vs robber", "police and robbers", "police vs robbers", "police and thieves", "cops and robers", "robber", "robbers", "rober", "robbery", "bank robbery", "rob the bank", "rob a bank", "heist", "bank heist", "vault", "thief", "thieves", "jail", "jailbreak", "jail break", "jail button", "prison", "prison escape", "escape prison", "escape the prison", "prision"],
        howItPlays: "Rounds: once enough players are in (minPlayers), a countdown runs and copCount random players become cops (they start at vaultPosition with copKit) and the rest robbers (they start at hideoutPosition with robberKit). A robber who stays next to the vault for lootSeconds grabs lootCoins of loot (again and again while they stay); the loot they carry shows on their sidebar. Bringing it back to the hideout banks it for the team and gives them that many coins. A cop's hit sends a robber to jail (the box between jailCorner1 and jailCorner2) and the loot they carried is lost; players can't hurt each other otherwise. A free robber standing on jailButton breaks everyone out of jail. The robbers win when the team has banked lootToWin; the cops win when every robber is in jail at once, or when the time (roundSeconds) runs out. Players who join mid-round are robbers.",
        settings: [{
          key: "copCount",
          kind: "number",
          value: "1",
          about: "how many random players are cops each round (the rest are robbers)"
        }, {
          key: "vaultPosition",
          kind: "position",
          value: "[20, 10, 0]",
          about: "the vault robbers steal from, where the cops start"
        }, {
          key: "hideoutPosition",
          kind: "position",
          value: "[-20, 10, 0]",
          about: "the robbers' hideout: where they start and bring the loot to bank it"
        }, {
          key: "lootSeconds",
          kind: "number",
          value: "3",
          about: "seconds a robber must stay next to the vault to grab loot"
        }, {
          key: "lootCoins",
          kind: "number",
          value: "10",
          about: "how much loot (in coins) each grab is worth"
        }, {
          key: "lootToWin",
          kind: "number",
          value: "50",
          about: "loot the robbers must bank together to win the round"
        }, {
          key: "jailCorner1",
          kind: "position",
          value: "[14, 10, 14]",
          about: "one corner of the inside of the jail (the air jailed robbers stand in; the lower corner's y is where their feet are)"
        }, {
          key: "jailCorner2",
          kind: "position",
          value: "[18, 12, 18]",
          about: "the opposite corner of the inside of the jail"
        }, {
          key: "jailButton",
          kind: "position",
          value: "[12, 10, 16]",
          about: "the spot outside the jail a free robber stands on to break everyone out"
        }, {
          key: "roundSeconds",
          kind: "number",
          value: "240",
          about: "how long a round lasts, in seconds; when it runs out the cops win"
        }, {
          key: "copKit",
          kind: "list",
          names: "item",
          value: '[["Wood Sword", 1]]',
          about: "the [item, amount] each cop gets"
        }, {
          key: "robberKit",
          kind: "list",
          names: "item",
          value: '[["Speed Potion", 1], ["Bread", 3]]',
          about: "the [item, amount] each robber gets"
        }],
        code: '// Cops and robbers: robbers sneak to the vault, stay next to it to grab loot, and bring the loot back to their hideout\n// to bank it. A cop\'s hit sends a robber to jail and their loot is lost; a free robber standing on the jail button\n// breaks everyone out. The robbers win by banking CONFIG.lootToWin; the cops win by jailing every robber at once, or\n// when the time runs out.\nconst roles = {} // each player\'s role this round: "Cop" or "Robber"\nconst carried = {} // the loot each robber carries\nconst grabbing = {} // how long each robber has stood at the vault, in ms\nconst jailed = {} // the robbers in jail\nlet banked = 0\nlet roundWinner = null\nlet jailProtected = false\n\nfunction onPlayerJoin(playerId) {\n\tif (!jailProtected) {\n\t\tjailProtected = true\n\t\t// Nobody can break into or out of the jail: its walls, floor and roof are one block around its inside\n\t\tconst box = jailBox()\n\t\tprotectArea([box.x1 - 1, box.y1 - 1, box.z1 - 1], [box.x2 + 1, box.y2 + 1, box.z2 + 1])\n\t}\n\tif (isRoundRunning()) {\n\t\tsetRole(playerId, "Robber")\n\t\tsendToStart(playerId)\n\t\tapi.sendMessage(playerId, "A round is on! You\'re a robber: grab loot at the vault and bring it to the hideout.", { color: "aqua" })\n\t} else {\n\t\tgoTo(playerId, CONFIG.hideoutPosition)\n\t\tapi.sendMessage(playerId, "Cops and robbers starts soon! Robbers steal loot, cops send them to jail.", { color: "aqua" })\n\t}\n\tupdateSidebars()\n}\n\nfunction goTo(playerId, spot) {\n\tapi.setPosition(playerId, spot[0], spot[1], spot[2])\n}\n\n// The inside of the jail: x1..x2, y1..y2, z1..z2\nfunction jailBox() {\n\tconst a = CONFIG.jailCorner1.map(Math.floor)\n\tconst b = CONFIG.jailCorner2.map(Math.floor)\n\treturn { x1: Math.min(a[0], b[0]), x2: Math.max(a[0], b[0]), y1: Math.min(a[1], b[1]), y2: Math.max(a[1], b[1]), z1: Math.min(a[2], b[2]), z2: Math.max(a[2], b[2]) }\n}\n\nfunction jailSpot() {\n\tconst box = jailBox()\n\treturn [(box.x1 + box.x2 + 1) / 2, box.y1, (box.z1 + box.z2 + 1) / 2]\n}\n\n// Whether a player stands within reach blocks of a spot [x, y, z]\nfunction isNear(playerId, spot, reach) {\n\tconst position = api.getPosition(playerId)\n\treturn Math.hypot(position[0] - spot[0] - 0.5, position[2] - spot[2] - 0.5) <= reach && Math.abs(position[1] - spot[1]) <= 2.5\n}\n\nfunction withRole(role) {\n\treturn api.getPlayerIds().filter((playerId) => roles[playerId] === role)\n}\n\nfunction setRole(playerId, role) {\n\troles[playerId] = role\n\tcarried[playerId] = 0\n\tdelete grabbing[playerId]\n\tdelete jailed[playerId]\n\tgiveKit(playerId, role === "Cop" ? CONFIG.copKit : CONFIG.robberKit)\n\thealFully(playerId)\n}\n\nfunction sendToStart(playerId) {\n\tgoTo(playerId, roles[playerId] === "Cop" ? CONFIG.vaultPosition : CONFIG.hideoutPosition)\n}\n\nfunction updateSidebars() {\n\tconst inJail = Object.keys(jailed).length\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tsetSidebar(playerId, "Team", roles[playerId] ? roles[playerId] + "s" : "waiting")\n\t\tsetSidebar(playerId, "Loot banked", banked + "/" + CONFIG.lootToWin)\n\t\tsetSidebar(playerId, "In jail", inJail)\n\t\tsetSidebar(playerId, "Your loot", roles[playerId] === "Robber" ? carried[playerId] || 0 : "-")\n\t}\n}\n\nfunction beginRound() {\n\tbanked = 0\n\troundWinner = null\n\tconst players = shuffleList(api.getPlayerIds())\n\tconst cops = Math.max(1, Math.min(CONFIG.copCount, players.length - 1))\n\tplayers.forEach((playerId, index) => {\n\t\tconst role = index < cops ? "Cop" : "Robber"\n\t\tif (!api.isAlive(playerId)) {\n\t\t\tapi.forceRespawn(playerId, role === "Cop" ? CONFIG.vaultPosition : CONFIG.hideoutPosition)\n\t\t}\n\t\tsetRole(playerId, role)\n\t\tsendToStart(playerId)\n\t\tapi.sendMessage(playerId, role === "Cop" ? "You\'re a cop! Hit robbers to send them to jail." : "You\'re a robber! Grab loot at the vault and bring it to the hideout.", { color: role === "Cop" ? "blue" : "orange" })\n\t})\n\tupdateSidebars()\n\tannounce("Cops and robbers! Robbers, grab the loot. Cops, catch them!", "aqua")\n}\n\nfunction finishRound() {\n\tif (roundWinner === null) {\n\t\tannounce("The robbers ran out of time! " + rewardWinners("Cop"), "gold")\n\t}\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tdelete roles[playerId]\n\t\tdelete jailed[playerId]\n\t\tcarried[playerId] = 0\n\t\tif (!api.isAlive(playerId)) {\n\t\t\tapi.forceRespawn(playerId, CONFIG.hideoutPosition)\n\t\t}\n\t\tgoTo(playerId, CONFIG.hideoutPosition)\n\t}\n\tupdateSidebars()\n}\n\n// What the winning team gets: lootCoins coins each. Returns the message\nfunction rewardWinners(role) {\n\tfor (const playerId of withRole(role)) {\n\t\taddCoins(playerId, CONFIG.lootCoins)\n\t}\n\treturn (role === "Cop" ? "The cops win!" : "The robbers win!") + " +" + CONFIG.lootCoins + " coins each"\n}\n\nfunction teamWins(role, why) {\n\troundWinner = role\n\tendRound(why + " " + rewardWinners(role))\n}\n\nfunction sendToJail(robberId, copId) {\n\tjailed[robberId] = true\n\tcarried[robberId] = 0\n\tdelete grabbing[robberId]\n\tconst spot = jailSpot()\n\tgoTo(robberId, spot)\n\tapi.broadcastMessage(api.getEntityName(copId) + " sent " + api.getEntityName(robberId) + " to jail!", { color: "red" })\n\tupdateSidebars()\n\tcheckForEnd()\n}\n\nfunction breakOut(rescuerId) {\n\t// Freed robbers go to the hideout, not onto the button, which would free the next robber jailed straight away\n\tfor (const playerId of Object.keys(jailed)) {\n\t\tdelete jailed[playerId]\n\t\tgoTo(playerId, CONFIG.hideoutPosition)\n\t}\n\tannounce(api.getEntityName(rescuerId) + " broke everyone out of jail!", "lime")\n\tupdateSidebars()\n}\n\nfunction bankLoot(playerId) {\n\tconst loot = carried[playerId]\n\tcarried[playerId] = 0\n\tbanked += loot\n\taddCoins(playerId, loot)\n\tapi.broadcastMessage(api.getEntityName(playerId) + " banked " + loot + " loot! " + banked + "/" + CONFIG.lootToWin, { color: "yellow" })\n\tupdateSidebars()\n\tif (banked >= CONFIG.lootToWin) {\n\t\tteamWins("Robber", "The robbers got away with the loot!")\n\t}\n}\n\nfunction checkForEnd() {\n\tif (!isRoundRunning()) {\n\t\treturn\n\t}\n\tconst robbers = withRole("Robber")\n\tif (robbers.length === 0) {\n\t\tteamWins("Cop", "There are no robbers left!")\n\t} else if (robbers.every((playerId) => jailed[playerId])) {\n\t\tteamWins("Cop", "Every robber is in jail!")\n\t} else if (withRole("Cop").length === 0) {\n\t\tteamWins("Robber", "There are no cops left!")\n\t}\n}\n\nfunction tick(ms) {\n\tfor (const playerId of withRole("Robber")) {\n\t\t// A bank or a jailing can end the round: stop then\n\t\tif (!isRoundRunning()) {\n\t\t\treturn\n\t\t}\n\t\tif (jailed[playerId] || !api.isAlive(playerId)) {\n\t\t\tcontinue\n\t\t}\n\t\tif (isNear(playerId, CONFIG.vaultPosition, 3)) {\n\t\t\tif (!grabbing[playerId]) {\n\t\t\t\tapi.sendMessage(playerId, "Grabbing the loot... stay here for " + CONFIG.lootSeconds + " seconds!", { color: "yellow" })\n\t\t\t}\n\t\t\tgrabbing[playerId] = (grabbing[playerId] || 0) + ms\n\t\t\tif (grabbing[playerId] >= CONFIG.lootSeconds * 1000) {\n\t\t\t\t// Staying grabs again; 1, not 0, so "Grabbing the loot" isn\'t said again\n\t\t\t\tgrabbing[playerId] = 1\n\t\t\t\tcarried[playerId] += CONFIG.lootCoins\n\t\t\t\tapi.sendMessage(playerId, "You grabbed " + CONFIG.lootCoins + " loot! Bring it to the hideout.", { color: "lime" })\n\t\t\t\tupdateSidebars()\n\t\t\t}\n\t\t} else {\n\t\t\tdelete grabbing[playerId]\n\t\t}\n\t\tif (carried[playerId] > 0 && isNear(playerId, CONFIG.hideoutPosition, 3)) {\n\t\t\tbankLoot(playerId)\n\t\t}\n\t\tif (Object.keys(jailed).length > 0 && isNear(playerId, CONFIG.jailButton, 1.5)) {\n\t\t\tbreakOut(playerId)\n\t\t}\n\t}\n}\n\n// Nobody gets hurt by other players: a cop\'s hit on a free robber sends them to jail instead\nfunction onPlayerDamagingOtherPlayer(attackingPlayer, damagedPlayer) {\n\tif (isRoundRunning() && roles[attackingPlayer] === "Cop" && roles[damagedPlayer] === "Robber" && !jailed[damagedPlayer]) {\n\t\tsendToJail(damagedPlayer, attackingPlayer)\n\t}\n\treturn "preventDamage"\n}\n\n// A robber who dies loses the loot they carried\nfunction onRespawnRequest(playerId) {\n\tif (roles[playerId] === "Robber" && carried[playerId] > 0) {\n\t\tcarried[playerId] = 0\n\t\tupdateSidebars()\n\t}\n\tif (jailed[playerId]) {\n\t\treturn jailSpot()\n\t}\n\treturn roles[playerId] === "Cop" ? CONFIG.vaultPosition : CONFIG.hideoutPosition\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete roles[playerId]\n\tdelete carried[playerId]\n\tdelete grabbing[playerId]\n\tdelete jailed[playerId]\n\trunLater(0, () => {\n\t\tupdateSidebars()\n\t\tcheckForEnd()\n\t})\n}',
        changeable: [{
          name: "rewardWinners",
          about: "what the winning team gets, and the message (it gives each winner lootCoins coins)"
        }, {
          name: "bankLoot",
          about: "what banking loot does: the team's total, coins for the robber, the message"
        }, {
          name: "sendToJail",
          about: "what a cop's catch does: where the robber goes, the message, rewards for the cop"
        }],
        setup: "Turn PvP on, then build a vault at vaultPosition, a hideout at hideoutPosition and a jail with walls and a roof around the jail box with a button or pad at jailButton just outside it."
      }, {
        name: "partyGames",
        kind: "game",
        title: "Party games (random minigames, points add up)",
        category: "rounds",
        summary: "A party of short minigames one after another in an arena it builds itself (block party, glass bridge, spleef, musical chairs): winners of each get party points, and after a few minigames the player with the most points wins the party",
        keywords: ["party games", "party game", "partygames", "minigames party", "random minigames", "random mini games", "minigames", "mini games", "minigame", "mini game", "minigams", "mario party", "points add up", "lots of minigames", "different minigames", "game rotation", "block party", "blockparty", "colour floor", "color floor", "floor colours", "floor colors", "glass bridge", "glass bridges", "glass panels", "squid games", "squid game minigames", "squid game games", "musical chairs", "music chairs"],
        howItPlays: "Players wait at lobbyPosition. Once minPlayers are in, a countdown runs, then the arena (built by the game around arenaPosition, arenaRadius * 2 blocks wide) is set up for the next minigame from games, picked at random without repeats until all have been played: blockParty (a floor of coloured wool squares: a colour is called, then every other colour vanishes, faster each time; falling out of the arena is out), glassBridge (a bridge of glass panels in pairs, one of each pair breaks when stepped on; players who cross win, falling is out), spleef (a snow floor and a spade: break the floor under the others, last one standing wins; extra floor vanishes after a while) and musicalChairs (walk around, when the music stops there is one chair (a green block) fewer than players: stand on one, one chair per player). Winners of a minigame get pointsForWin points; falling out or dying puts a player out to watch above the arena until the next minigame. When roundSeconds run out the players still in win it. The sidebar shows the minigame, time left and the top 3. After gamesPerParty minigames the player with the most points wins the party (+1 saved partyWins), points start from 0 again and a new party starts.",
        settings: [{
          key: "lobbyPosition",
          kind: "position",
          value: "[0, 10, 0]",
          about: "where players wait between minigames"
        }, {
          key: "games",
          kind: "list",
          value: '["blockParty", "glassBridge", "spleef", "musicalChairs"]',
          about: "the minigames, any of: blockParty, glassBridge, spleef, musicalChairs (picked at random, each once before any repeats)"
        }, {
          key: "gamesPerParty",
          kind: "number",
          value: "5",
          about: "how many minigames make one party; then the points winner is announced and points reset"
        }, {
          key: "pointsForWin",
          kind: "number",
          value: "3",
          about: "party points for each player who wins a minigame"
        }, {
          key: "arenaPosition",
          kind: "position",
          value: "[0, 60, 40]",
          about: "the middle of the arena floor, where players stand; the game builds the arena here (build it high up, nothing else near it)"
        }, {
          key: "arenaRadius",
          kind: "number",
          value: "8",
          about: "half the width of the arena in blocks, from 6 to 14 (bigger for more players)"
        }, {
          key: "spleefBlock",
          kind: "block",
          value: '"Snow"',
          about: "the floor of the spleef minigame, that players break"
        }, {
          key: "minPlayers",
          kind: "number",
          value: "2",
          about: "players needed before a minigame starts"
        }, {
          key: "roundSeconds",
          kind: "number",
          value: "90",
          about: "the longest a minigame lasts, in seconds; players still in then win it"
        }],
        code: '// Party games: minigames one after another in an arena the game builds. Winners of each get points, and after\n// gamesPerParty minigames the player with the most points wins the party. Players who fall out or die watch from above.\nconst miniGames = {\n\tblockParty: { title: "Block party", how: "Stand on the colour that is called!", build: buildBlockParty, start: startBlockParty },\n\tglassBridge: { title: "Glass bridge", how: "Cross the bridge! One glass of each pair breaks.", build: buildBridge, start: startBridge },\n\tspleef: { title: "Spleef", how: "Break the floor under the others! Last one standing wins.", build: buildSpleef, start: startSpleef },\n\tmusicalChairs: { title: "Musical chairs", how: "Walk around. When the music stops, stand on a green block!", build: buildChairs, start: startChairs },\n}\nconst partyColours = ["Red Wool", "Blue Wool", "Yellow Wool", "Lime Wool", "Orange Wool", "Purple Wool"]\nlet gameBag = []\nlet gameName = null\nlet gameStarted = false\nlet roundNumber = 0\nlet roundPlayerCount = 0\nlet partyGames = 0\nlet timers = []\nlet finishers = []\n// block party\nlet squares = []\nlet calledColour = null\nlet colourRound = 0\n// glass bridge\nlet badLane = []\nlet brokenPanels = {}\n// musical chairs\nlet chairs = []\nlet claims = {}\nlet chairsOpen = false\n\nfunction onPlayerJoin(playerId) {\n\tsetSidebar(playerId, "Party game", partyGames + 1 + "/" + CONFIG.gamesPerParty)\n\tif (isRoundRunning()) {\n\t\teliminate(playerId)\n\t\tsendToWatch(playerId)\n\t\tapi.sendMessage(playerId, "A minigame is on! Watch this one, you\'ll play in the next.", { color: "yellow" })\n\t\treturn\n\t}\n\tapi.setPlayerGamemode(playerId, "survival")\n\tapi.setPosition(playerId, CONFIG.lobbyPosition[0], CONFIG.lobbyPosition[1], CONFIG.lobbyPosition[2])\n\tapi.sendMessage(playerId, "Party games! Win minigames to get points. Most points wins the party.", { color: "aqua" })\n}\n\n// The arena: x1..x2 by z1..z2 wide, its floor at y fy, players stand on it at fy + 1\nfunction arena() {\n\tconst r = Math.min(14, Math.max(6, Math.floor(CONFIG.arenaRadius)))\n\tconst cx = Math.floor(CONFIG.arenaPosition[0])\n\tconst cz = Math.floor(CONFIG.arenaPosition[2])\n\treturn { cx: cx, cz: cz, fy: Math.floor(CONFIG.arenaPosition[1]) - 1, r: r, x1: cx - r, x2: cx + r - 1, z1: cz - r, z2: cz + r - 1 }\n}\n\nfunction sendToWatch(playerId) {\n\tconst a = arena()\n\tapi.setPosition(playerId, a.cx, a.fy + 8, a.cz)\n}\n\n// Runs fn once the whole arena has loaded (blocks can\'t be built before)\nfunction whenArenaReady(fn) {\n\tconst a = arena()\n\tconst loaded = [a.x1, a.x2].every((x) => [a.z1, a.z2].every((z) => [a.fy, a.fy + 6].every((y) => api.getBlock(x, y, z) !== "Unloaded")))\n\tloaded ? fn() : runLater(0.5, () => whenArenaReady(fn))\n}\n\n// Runs fn after some seconds, unless this minigame is over by then\nfunction laterThisRound(seconds, fn) {\n\tconst round = roundNumber\n\trunLater(seconds, () => {\n\t\tif (round === roundNumber && isRoundRunning()) {\n\t\t\tfn()\n\t\t}\n\t})\n}\n\nfunction pickGame() {\n\tif (gameBag.length === 0) {\n\t\tconst names = Object.keys(miniGames)\n\t\tconst wanted = CONFIG.games.map((name) => names.find((key) => key.toLowerCase() === String(name).toLowerCase().replace(/[^a-z]/g, "")))\n\t\tgameBag = shuffleList(wanted.filter((key, i) => key && wanted.indexOf(key) === i))\n\t\tif (gameBag.length === 0) {\n\t\t\tgameBag = ["blockParty"]\n\t\t}\n\t}\n\treturn gameBag.pop()\n}\n\nfunction beginRound() {\n\troundNumber++\n\tconst round = roundNumber\n\tgameStarted = false\n\tfinishers = []\n\troundPlayerCount = api.getPlayerIds().length\n\tgameName = pickGame()\n\tconst game = miniGames[gameName]\n\tannounce("Minigame " + (partyGames + 1) + " of " + CONFIG.gamesPerParty + ": " + game.title + "! " + game.how, "aqua")\n\twhenArenaReady(() => {\n\t\tif (round !== roundNumber || !isRoundRunning()) {\n\t\t\treturn\n\t\t}\n\t\tconst a = arena()\n\t\tfillBox([a.x1, a.fy, a.z1], [a.x2, a.fy + 6, a.z2], "Air")\n\t\tgame.build()\n\t\tfor (const playerId of playersLeft()) {\n\t\t\tconst spot = gameName === "glassBridge" ? [a.cx - 3 + Math.random() * 4.8, a.fy + 1, a.z1 + 0.5 + Math.random()] : randomSpot([a.cx, a.fy + 1, a.cz], a.r - 3)\n\t\t\tapi.setPosition(playerId, spot[0], spot[1], spot[2])\n\t\t\thealFully(playerId)\n\t\t\tapi.clearInventory(playerId)\n\t\t}\n\t\tgameStarted = true\n\t\tgame.start()\n\t})\n\ttimers.push(repeatEvery(1, showSidebars))\n\tshowSidebars()\n}\n\nfunction finishRound() {\n\ttimers.forEach(cancelTimer)\n\ttimers = []\n\tconst winners = gameStarted ? (gameName === "glassBridge" ? finishers.filter((playerId) => api.getPlayerIds().includes(playerId)) : playersLeft()) : []\n\tgameStarted = false\n\tif (winners.length > 0) {\n\t\tfor (const playerId of winners) {\n\t\t\taddScore(playerId, CONFIG.pointsForWin)\n\t\t}\n\t\tannounce(winners.map((playerId) => api.getEntityName(playerId)).join(", ") + " won " + miniGames[gameName].title + "! +" + CONFIG.pointsForWin + " points", "gold")\n\t} else {\n\t\tannounce("Nobody won " + miniGames[gameName].title + "!", "gold")\n\t}\n\tpartyGames++\n\tconst partyOver = partyGames >= CONFIG.gamesPerParty\n\tconst best = Math.max(0, ...api.getPlayerIds().map(getScore))\n\tconst partyWinners = api.getPlayerIds().filter((playerId) => best > 0 && getScore(playerId) === best)\n\tbringEveryoneBack()\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tapi.clearInventory(playerId)\n\t\tapi.setPosition(playerId, CONFIG.lobbyPosition[0], CONFIG.lobbyPosition[1], CONFIG.lobbyPosition[2])\n\t}\n\tif (partyOver) {\n\t\tpartyGames = 0\n\t\tresetScores()\n\t\tpartyWinners.forEach((playerId) => addSaved(playerId, "partyWins", 1))\n\t\trunLater(2, () => announce(partyWinners.length > 0 ? partyWinners.map((playerId) => api.getEntityName(playerId)).join(", ") + " won the party with " + best + " points!" : "The party is over, nobody scored!", "gold"))\n\t}\n\tgameName = null\n\tshowSidebars()\n}\n\n// Every second: the minigame, time left and the top 3\nfunction showSidebars() {\n\tconst top = api.getPlayerIds().slice().sort((a, b) => getScore(b) - getScore(a))\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tsetSidebar(playerId, "Minigame", gameName ? miniGames[gameName].title + (gameName === "blockParty" && calledColour ? ": " + calledColour.replace(" Wool", "") : "") : "-")\n\t\tsetSidebar(playerId, "Time left", isRoundRunning() ? roundSecondsLeft() : "-")\n\t\tsetSidebar(playerId, "Party game", partyGames + 1 + "/" + CONFIG.gamesPerParty)\n\t\tfor (let i = 0; i < 3; i++) {\n\t\t\tsetSidebar(playerId, "#" + (i + 1), top[i] ? api.getEntityName(top[i]) + " " + getScore(top[i]) : "-")\n\t\t}\n\t}\n}\n\nfunction dropOut(playerId, why) {\n\tif (!isRoundRunning() || !playersLeft().includes(playerId)) {\n\t\treturn\n\t}\n\teliminate(playerId)\n\tsendToWatch(playerId)\n\tapi.broadcastMessage(api.getEntityName(playerId) + " " + why, { color: "red" })\n}\n\nfunction knockOut(playerId, why) {\n\tdropOut(playerId, why)\n\tcheckForWinner()\n}\n\nfunction checkForWinner() {\n\tif (!isRoundRunning() || !gameStarted) {\n\t\treturn\n\t}\n\tconst left = playersLeft()\n\tconst racing = left.filter((playerId) => !finishers.includes(playerId))\n\tif (gameName === "glassBridge" ? racing.length === 0 : left.length === 0 || (left.length === 1 && roundPlayerCount > 1)) {\n\t\tendRound()\n\t}\n}\n\n// Block party: coloured squares; a colour is called and the rest vanish, a bit faster every time\nfunction buildBlockParty() {\n\tcolourRound = 0\n\tcalledColour = null\n\tpaintSquares()\n}\n\nfunction paintSquares() {\n\tconst a = arena()\n\tsquares = []\n\tfor (let x = a.x1; x < a.x1 + a.r * 2; x += 2) {\n\t\tfor (let z = a.z1; z < a.z1 + a.r * 2; z += 2) {\n\t\t\tsquares.push({ x: x, z: z, block: pickRandom(partyColours) })\n\t\t\tfillBox([x, a.fy, z], [x + 1, a.fy, z + 1], squares[squares.length - 1].block)\n\t\t}\n\t}\n}\n\nfunction startBlockParty() {\n\tlaterThisRound(2, nextColour)\n}\n\nfunction nextColour() {\n\tif (colourRound >= 10) {\n\t\tendRound()\n\t\treturn\n\t}\n\tpaintSquares()\n\tcolourRound++\n\tcalledColour = pickRandom(squares).block\n\tconst name = calledColour.replace(" Wool", "")\n\tannounce("Stand on " + name + "!", name.toLowerCase())\n\tlaterThisRound(Math.max(1.5, 5 - colourRound * 0.4), () => {\n\t\tfor (const square of squares) {\n\t\t\tif (square.block !== calledColour) {\n\t\t\t\tfillBox([square.x, arena().fy, square.z], [square.x + 1, arena().fy, square.z + 1], "Air")\n\t\t\t}\n\t\t}\n\t\tlaterThisRound(2.5, nextColour)\n\t})\n}\n\n// Glass bridge: pairs of glass panels, one of each pair breaks when someone steps on it. Cross to the gold to win\nfunction buildBridge() {\n\tconst a = arena()\n\tbadLane = []\n\tbrokenPanels = {}\n\tfillBox([a.cx - 3, a.fy, a.z1], [a.cx + 1, a.fy, a.z1 + 1], "Smooth Stone")\n\tfillBox([a.cx - 3, a.fy, a.z2 - 1], [a.cx + 1, a.fy, a.z2], "Block of Gold")\n\tfor (let pair = 0; pair < a.r - 2; pair++) {\n\t\tconst z = a.z1 + 2 + pair * 2\n\t\tbadLane.push(randomInt(0, 1))\n\t\tfillBox([a.cx - 3, a.fy, z], [a.cx - 2, a.fy, z + 1], "Glass")\n\t\tfillBox([a.cx, a.fy, z], [a.cx + 1, a.fy, z + 1], "Glass")\n\t}\n}\n\nfunction startBridge() {}\n\nfunction stepBridge(playerId, position) {\n\tconst a = arena()\n\tif (Math.abs(position[1] - (a.fy + 1)) > 0.6 || finishers.includes(playerId)) {\n\t\treturn\n\t}\n\tconst x = Math.floor(position[0])\n\tconst z = Math.floor(position[2])\n\tconst lane = x === a.cx - 3 || x === a.cx - 2 ? 0 : x === a.cx || x === a.cx + 1 ? 1 : -1\n\tconst pair = Math.floor((z - a.z1 - 2) / 2)\n\tif (z >= a.z2 - 1 && x >= a.cx - 3 && x <= a.cx + 1) {\n\t\tfinishers.push(playerId)\n\t\tannounce(api.getEntityName(playerId) + " crossed the bridge!", "lime")\n\t\tcheckForWinner()\n\t} else if (lane >= 0 && pair >= 0 && pair < badLane.length && badLane[pair] === lane && !brokenPanels[lane + "," + pair]) {\n\t\tbrokenPanels[lane + "," + pair] = true\n\t\tconst x1 = lane === 0 ? a.cx - 3 : a.cx\n\t\tconst z1 = a.z1 + 2 + pair * 2\n\t\trunLater(0.2, () => fillBox([x1, a.fy, z1], [x1 + 1, a.fy, z1 + 1], "Air"))\n\t}\n}\n\n// Spleef: break the floor under the others. Later, bits of floor vanish by themselves\nfunction buildSpleef() {\n\tconst a = arena()\n\tfillBox([a.x1, a.fy, a.z1], [a.x2, a.fy, a.z2], CONFIG.spleefBlock)\n}\n\nfunction startSpleef() {\n\tfor (const playerId of playersLeft()) {\n\t\tgiveKit(playerId, [["Diamond Spade", 1]])\n\t}\n\tlaterThisRound(25, () => {\n\t\tconst loop = repeatEvery(1.5, () => {\n\t\t\tconst a = arena()\n\t\t\tfor (let i = 0; i < 3; i++) {\n\t\t\t\tapi.setBlock(randomInt(a.x1, a.x2), a.fy, randomInt(a.z1, a.z2), "Air")\n\t\t\t}\n\t\t})\n\t\ttimers.push(loop)\n\t})\n}\n\n// Musical chairs: when the music stops, one green block (chair) fewer than players appears; one player per chair\nfunction buildChairs() {\n\tconst a = arena()\n\tfillBox([a.x1, a.fy, a.z1], [a.x2, a.fy, a.z2], "Gray Wool")\n}\n\nfunction startChairs() {\n\tchairs = []\n\tclaims = {}\n\tchairsOpen = false\n\tconst a = arena()\n\tfillBox([a.x1, a.fy, a.z1], [a.x2, a.fy, a.z2], "Gray Wool")\n\tannounce("Music! Walk around...", "aqua")\n\tlaterThisRound(2 + Math.random() * 3, () => {\n\t\tconst count = Math.max(1, playersLeft().length - 1)\n\t\tfor (let i = 0; i < count; i++) {\n\t\t\tconst angle = (i / count) * Math.PI * 2\n\t\t\tchairs.push([Math.floor(a.cx + Math.cos(angle) * (a.r - 3)), Math.floor(a.cz + Math.sin(angle) * (a.r - 3))])\n\t\t\tfillBox([chairs[i][0], a.fy, chairs[i][1]], [chairs[i][0], a.fy, chairs[i][1]], "Lime Wool")\n\t\t}\n\t\tchairsOpen = true\n\t\tannounce("The music stopped! Stand on a green block!", "lime")\n\t\tlaterThisRound(4, endChairRound)\n\t})\n}\n\n// Which chair a player stands on (-1 for none)\nfunction chairUnder(playerId) {\n\tconst position = api.getPosition(playerId)\n\tconst x = Math.floor(position[0])\n\tconst z = Math.floor(position[2])\n\treturn Math.abs(position[1] - (arena().fy + 1)) > 0.6 ? -1 : chairs.findIndex((chair) => chair[0] === x && chair[1] === z)\n}\n\nfunction endChairRound() {\n\tchairsOpen = false\n\tfor (const playerId of playersLeft()) {\n\t\tif (claims[chairUnder(playerId)] !== playerId) {\n\t\t\tdropOut(playerId, "didn\'t get a chair!")\n\t\t}\n\t}\n\tcheckForWinner()\n\tlaterThisRound(2, startChairs)\n}\n\nfunction tick(ms) {\n\tif (!isRoundRunning() || !gameStarted) {\n\t\treturn\n\t}\n\tconst a = arena()\n\tfor (const playerId of playersLeft()) {\n\t\tif (!isRoundRunning()) {\n\t\t\treturn\n\t\t}\n\t\tconst position = api.getPosition(playerId)\n\t\tif (!api.isAlive(playerId)) {\n\t\t\tknockOut(playerId, "didn\'t make it!")\n\t\t} else if (position[1] < a.fy - 2) {\n\t\t\tknockOut(playerId, "fell out!")\n\t\t} else if (gameName === "glassBridge") {\n\t\t\tstepBridge(playerId, position)\n\t\t} else if (gameName === "musicalChairs" && chairsOpen) {\n\t\t\tconst chair = chairUnder(playerId)\n\t\t\tif (chair >= 0 && claims[chair] === undefined && !Object.values(claims).includes(playerId)) {\n\t\t\t\tclaims[chair] = playerId\n\t\t\t}\n\t\t}\n\t}\n}\n\nfunction onRespawnRequest(playerId) {\n\tknockOut(playerId, "didn\'t make it!")\n\tconst a = arena()\n\treturn isRoundRunning() ? [a.cx, a.fy + 8, a.cz] : CONFIG.lobbyPosition\n}\n\nfunction onPlayerLeave(playerId) {\n\tfinishers = finishers.filter((id) => id !== playerId)\n\trunLater(0, checkForWinner)\n}',
        changeable: [{
          name: "finishRound",
          about: "what happens when a minigame ends: who gets points (it gives pointsForWin to each winner), the messages, and the party winner"
        }, {
          name: "nextColour",
          about: "how the block party goes: which colour is called, and how long players have"
        }],
        setup: "Build a lobby at lobbyPosition. The game builds the arena itself at arenaPosition (put it high in the sky with space around it and under it, and turn block breaking on for spleef)."
      }, {
        name: "lobbyVote",
        kind: "game",
        title: "Minigame lobby with votes",
        category: "rounds",
        summary: "A lobby that runs your minigames by vote: players wait in the lobby, vote with /vote for the next game, play it in its area until one is left or time runs out, then come back to vote again",
        keywords: ["lobby", "lobby vote", "lobby voting", "waiting lobby", "waiting room", "minigame hub", "minigames hub", "mini game hub", "minigame lobby", "minigme", "hub", "game hub", "vote", "voting", "vote for the next game", "vote the next game", "vote next game", "vote what to play", "vote for a game", "game vote", "map vote", "map voting", "vote for map", "vote map"],
        howItPlays: "Players wait at lobbyPosition. Once minPlayers are in, a vote starts: everyone gets voteSeconds to type /vote and a number or name from games (with only one game there's no vote). Everyone is then sent to the winning game's spawn. Each game in games is [name, spawnPosition, gameSeconds], an area the creator built: falling more than fallDepth blocks below its spawn, or dying, knocks a player out to watch. The last player in wins winCoins; when gameSeconds run out, everyone still in wins it (playing alone, you win by lasting). Then everyone goes back to the lobby, and after a short break the next vote starts. Players who join during a game watch it.",
        settings: [{
          key: "lobbyPosition",
          kind: "position",
          value: "[0, 10, 0]",
          about: "where players wait and vote between games"
        }, {
          key: "games",
          kind: "list",
          value: '[["Spleef", [50, 10, 0], 90], ["Parkour", [0, 10, 50], 120], ["Sumo", [-50, 10, 0], 60]]',
          about: "the games to vote for, each [name, spawnPosition [x, y, z], gameSeconds]: an area you built, where players start"
        }, {
          key: "voteSeconds",
          kind: "number",
          value: "15",
          about: "how long the vote lasts, in seconds"
        }, {
          key: "fallDepth",
          kind: "number",
          value: "10",
          about: "falling this many blocks below a game's spawn knocks a player out"
        }, {
          key: "minPlayers",
          kind: "number",
          value: "2",
          about: "players needed before a vote starts"
        }, {
          key: "winCoins",
          kind: "number",
          value: "10",
          about: "coins for each winner of a game"
        }],
        code: '// Minigame lobby: players wait in the lobby, then vote with /vote for the next game, and everyone is sent to its area.\n// Falling CONFIG.fallDepth blocks below the game\'s spawn, or dying, knocks you out to watch. The last player in wins,\n// or everyone still in when the time runs out. Then everyone comes back to the lobby for the next vote.\nconst restSeconds = 5 // seconds in the lobby after a game, before the next vote\nlet phase = "waiting" // "waiting", "voting", "playing" or "resting"\nlet currentGame = null // the game being played: [name, spawnPosition, gameSeconds]\nlet gameNumber = 0\nlet startedWith = 0 // players in the game when it started\n\nfunction onPlayerJoin(playerId) {\n\tif (phase === "playing") {\n\t\teliminate(playerId)\n\t\tgoTo(playerId, currentGame[1])\n\t\tapi.sendMessage(playerId, currentGame[0] + " is on! Watch this one, then vote for the next game.", { color: "yellow" })\n\t\treturn\n\t}\n\tgoTo(playerId, CONFIG.lobbyPosition)\n\tapi.sendMessage(playerId, "Welcome to the lobby! We vote for a game once " + CONFIG.minPlayers + " players are here.", { color: "aqua" })\n}\n\nfunction goTo(playerId, spot) {\n\tapi.setPosition(playerId, spot[0], spot[1], spot[2])\n}\n\nfunction startGameVote() {\n\tif (CONFIG.games.length === 1) {\n\t\tstartGame(CONFIG.games[0])\n\t\treturn\n\t}\n\tphase = "voting"\n\tstartVote(CONFIG.games.map((game) => game[0]), CONFIG.voteSeconds, (winner) => {\n\t\tif (api.getPlayerIds().length < CONFIG.minPlayers) {\n\t\t\tphase = "waiting"\n\t\t\tannounce("Waiting for more players...", "yellow")\n\t\t\treturn\n\t\t}\n\t\tstartGame(CONFIG.games.find((game) => game[0] === winner))\n\t})\n}\n\nfunction startGame(game) {\n\tphase = "playing"\n\tcurrentGame = game\n\tgameNumber++\n\tstartedWith = api.getPlayerIds().length\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tif (!api.isAlive(playerId)) {\n\t\t\tapi.forceRespawn(playerId, game[1])\n\t\t}\n\t\tgoTo(playerId, game[1])\n\t\thealFully(playerId)\n\t}\n\tannounce(game[0] + "! Don\'t fall: the last one in wins!", "aqua")\n\tconst number = gameNumber\n\trunLater(game[2] || 60, () => {\n\t\tif (number === gameNumber && phase === "playing") {\n\t\t\tendGame(playersLeft(), "Time\'s up! ")\n\t\t}\n\t})\n}\n\nfunction knockOut(playerId, why) {\n\tif (phase !== "playing" || !playersLeft().includes(playerId)) {\n\t\treturn\n\t}\n\teliminate(playerId)\n\tapi.broadcastMessage(api.getEntityName(playerId) + " " + why, { color: "red" })\n\tcheckForWinner()\n}\n\nfunction checkForWinner() {\n\tif (phase !== "playing") {\n\t\treturn\n\t}\n\tconst left = playersLeft()\n\tif (left.length === 0) {\n\t\tendGame([], "")\n\t} else if (left.length === 1 && startedWith > 1) {\n\t\tendGame(left, "")\n\t}\n}\n\nfunction endGame(winners, start) {\n\tphase = "resting"\n\tgameNumber++\n\tannounce(start + (winners.length > 0 ? rewardWinners(winners) : "Nobody won " + currentGame[0] + " this time!"), "gold")\n\tbringEveryoneBack()\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tif (!api.isAlive(playerId)) {\n\t\t\tapi.forceRespawn(playerId, CONFIG.lobbyPosition)\n\t\t}\n\t\tgoTo(playerId, CONFIG.lobbyPosition)\n\t\thealFully(playerId)\n\t}\n\trunLater(restSeconds, () => {\n\t\tphase = "waiting"\n\t})\n}\n\n// What the winners of a game get: winCoins each. Returns the message\nfunction rewardWinners(playerIds) {\n\tfor (const playerId of playerIds) {\n\t\taddCoins(playerId, CONFIG.winCoins)\n\t}\n\treturn playerIds.map((playerId) => api.getEntityName(playerId)).join(", ") + " won " + currentGame[0] + "! +" + CONFIG.winCoins + " coins"\n}\n\nfunction tick(ms) {\n\tif (phase === "waiting" && CONFIG.games.length > 0 && api.getPlayerIds().length >= CONFIG.minPlayers) {\n\t\tstartGameVote()\n\t\treturn\n\t}\n\tfor (const playerId of playersLeft()) {\n\t\t// A knock-out can end the game: stop then\n\t\tif (phase !== "playing") {\n\t\t\treturn\n\t\t}\n\t\tif (!api.isAlive(playerId)) {\n\t\t\tknockOut(playerId, "is out!")\n\t\t} else if (api.getPosition(playerId)[1] < currentGame[1][1] - CONFIG.fallDepth) {\n\t\t\tgoTo(playerId, currentGame[1])\n\t\t\tknockOut(playerId, "fell out!")\n\t\t}\n\t}\n}\n\nfunction onRespawnRequest(playerId) {\n\tknockOut(playerId, "is out!")\n\treturn phase === "playing" ? currentGame[1] : CONFIG.lobbyPosition\n}\n\nfunction onPlayerLeave(playerId) {\n\trunLater(0, checkForWinner)\n}',
        changeable: [{
          name: "rewardWinners",
          about: "what the winners of a game get, and the message (it gives winCoins)"
        }, {
          name: "startGame",
          about: "how a game starts: where players go, what they get (e.g. a kit for each game)"
        }],
        setup: "Build a lobby at lobbyPosition and an area for each game in games yourself (an arena, a spleef floor, a parkour), each with its spawn at the spawnPosition you give it, high enough that falling off it drops more than fallDepth blocks."
      }, {
        name: "kingOfTheHill",
        kind: "game",
        title: "King of the hill",
        category: "pvp",
        summary: "Rounds of fighting over a hill: a player alone on it scores a point every second, and the first to pointsToWin wins",
        keywords: ["king of the hill", "koth", "hill", "capture point", "capture the point", "capture zone", "control point", "point control", "hold the hill", "king", "domination"],
        howItPlays: "Once minPlayers are in, a countdown runs and everyone goes to spawnPosition with the kit. Every second, a player who is alone on the hill (the box between hillCorner1 and hillCorner2) scores a point; with two or more on it, nobody does. The first to pointsToWin wins the round and gets rewardCoins; if the time runs out, whoever has the most points wins. Points, who holds the hill and the leader show on the right of the screen.",
        settings: [{
          key: "hillCorner1",
          kind: "position",
          value: "[-3, 10, -3]",
          about: "one corner of the hill's box [x, y, z]: players inside the box are on the hill"
        }, {
          key: "hillCorner2",
          kind: "position",
          value: "[3, 13, 3]",
          about: "the opposite corner of the hill's box; make the box a few blocks tall so players standing on the hill are in it"
        }, {
          key: "spawnPosition",
          kind: "position",
          value: "[0, 10, 20]",
          about: "where players start each round and respawn"
        }, {
          key: "pointsToWin",
          kind: "number",
          value: "30",
          about: "points needed to win a round (one point a second alone on the hill)"
        }, {
          key: "kit",
          kind: "list",
          names: "item",
          value: '[["Wood Sword", 1], ["Bread", 3]]',
          about: "the [item, amount] each player gets when a round starts"
        }, {
          key: "rewardCoins",
          kind: "number",
          value: "10",
          about: "coins for winning a round (0 for none)"
        }, {
          key: "minPlayers",
          kind: "number",
          value: "2",
          about: "players needed before a round starts"
        }, {
          key: "roundSeconds",
          kind: "number",
          value: "300",
          about: "longest a round lasts, in seconds; then the player with the most points wins"
        }],
        code: '// King of the hill: stand on the hill alone to score a point every second. If two or more players are on it, nobody\n// scores, so knock them off! The first to pointsToWin wins the round. Points show on the right of the screen.\nconst points = {}\nlet hillTimer = null\nlet roundWinner = null\n\nfunction onPlayerJoin(playerId) {\n\tpoints[playerId] = 0\n\tsendToSpawn(playerId)\n\t// The others got theirs as the round began\n\tif (isRoundRunning()) {\n\t\tgiveKit(playerId, CONFIG.kit)\n\t}\n\tapi.sendMessage(playerId, "Stand on the hill alone to score points! First to " + CONFIG.pointsToWin + " wins.", { color: "aqua" })\n\tupdateSidebars("Nobody")\n}\n\nfunction sendToSpawn(playerId) {\n\tconst spot = randomSpot(CONFIG.spawnPosition, 3)\n\tapi.setPosition(playerId, spot[0], spot[1], spot[2])\n}\n\nfunction beginRound() {\n\troundWinner = null\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tpoints[playerId] = 0\n\t\tsendToSpawn(playerId)\n\t\thealFully(playerId)\n\t\tgiveKit(playerId, CONFIG.kit)\n\t}\n\tannounce("Get to the hill and hold it alone!", "lime")\n\tupdateSidebars("Nobody")\n\thillTimer = repeatEvery(1, scoreHill)\n}\n\nfunction scoreHill() {\n\tif (!isRoundRunning()) {\n\t\treturn\n\t}\n\tconst onHill = playersInBox(CONFIG.hillCorner1, CONFIG.hillCorner2).filter((playerId) => api.isAlive(playerId))\n\tif (onHill.length === 1) {\n\t\tconst king = onHill[0]\n\t\tpoints[king] = (points[king] || 0) + 1\n\t\tupdateSidebars(api.getEntityName(king))\n\t\tif (points[king] >= CONFIG.pointsToWin) {\n\t\t\troundWinner = king\n\t\t\trewardWinner(king)\n\t\t\tendRound(api.getEntityName(king) + " is the king of the hill!")\n\t\t}\n\t} else {\n\t\tupdateSidebars(onHill.length > 1 ? "Contested!" : "Nobody")\n\t}\n}\n\nfunction leader() {\n\tlet best = null\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tif (best === null || (points[playerId] || 0) > (points[best] || 0)) {\n\t\t\tbest = playerId\n\t\t}\n\t}\n\treturn best\n}\n\nfunction updateSidebars(holder) {\n\tconst top = leader()\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tsetSidebar(playerId, "Your points", (points[playerId] || 0) + " / " + CONFIG.pointsToWin)\n\t\tsetSidebar(playerId, "On the hill", holder)\n\t\tsetSidebar(playerId, "Leader", top === null ? "-" : api.getEntityName(top) + " (" + (points[top] || 0) + ")")\n\t}\n}\n\nfunction rewardWinner(playerId) {\n\tif (CONFIG.rewardCoins > 0) {\n\t\taddCoins(playerId, CONFIG.rewardCoins)\n\t}\n\taddSaved(playerId, "kingOfTheHillWins", 1)\n}\n\nfunction finishRound() {\n\tcancelTimer(hillTimer)\n\tconst top = leader()\n\tif (roundWinner === null && top !== null && (points[top] || 0) > 0) {\n\t\trewardWinner(top)\n\t\tannounce(api.getEntityName(top) + " had the most points and wins!", "gold")\n\t}\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tsendToSpawn(playerId)\n\t}\n}\n\nfunction onRespawnRequest(playerId) {\n\t// Dying drops the kit: a player coming back mid-round gets it again\n\tif (isRoundRunning()) {\n\t\tgiveKit(playerId, CONFIG.kit)\n\t}\n\treturn randomSpot(CONFIG.spawnPosition, 3)\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete points[playerId]\n\trunLater(0, () => {\n\t\tif (isRoundRunning() && api.getPlayerIds().length < CONFIG.minPlayers) {\n\t\t\tendRound("Not enough players left. Waiting for more...")\n\t\t}\n\t})\n}',
        changeable: [{
          name: "rewardWinner",
          about: "what the round's winner gets: coins, and their wins are saved"
        }, {
          name: "scoreHill",
          about: "who scores each second: by default only a player alone on the hill, one point"
        }],
        setup: "Build a hill (a raised platform) inside the box between hillCorner1 and hillCorner2, put the spawn at spawnPosition, and turn PvP on in your world settings."
      }, {
        name: "redLightGreenLight",
        kind: "game",
        title: "Red light, green light",
        category: "rounds",
        summary: "Rounds of running to the finish line on green light and freezing on red: anyone who moves on red is out, everyone who crosses the line wins",
        keywords: ["red light green light", "red light", "green light", "redlight greenlight", "rlgl", "squid game", "squidgame", "squid", "freeze", "statues", "stop and go", "finish line"],
        howItPlays: "Each round, players line up at startPosition and run towards the line at finishZ. The light turns green (run!) and red (freeze!) at random, every minLightSeconds to maxLightSeconds. Moving more than moveLimit blocks during red light knocks a player out to spectate. Everyone who crosses the finish line wins and gets rewardCoins; the round ends when nobody is still running or the time runs out.",
        settings: [{
          key: "startPosition",
          kind: "position",
          value: "[0, 10, 0]",
          about: "where players line up at the start of each round"
        }, {
          key: "finishZ",
          kind: "number",
          value: "60",
          about: "the finish line: reaching this z wins (it can be bigger or smaller than the start's z)"
        }, {
          key: "minLightSeconds",
          kind: "number",
          value: "2",
          about: "the shortest a green or red light lasts, in seconds"
        }, {
          key: "maxLightSeconds",
          kind: "number",
          value: "5",
          about: "the longest a green or red light lasts, in seconds"
        }, {
          key: "moveLimit",
          kind: "number",
          value: "0.5",
          about: "how many blocks a player may move during red light before they're out"
        }, {
          key: "rewardCoins",
          kind: "number",
          value: "10",
          about: "coins for crossing the finish line (0 for none)"
        }, {
          key: "minPlayers",
          kind: "number",
          value: "1",
          about: "players needed before a round starts"
        }, {
          key: "roundSeconds",
          kind: "number",
          value: "90",
          about: "longest a round lasts, in seconds"
        }],
        code: '// Red light, green light: run to the finish line while the light is green. When it turns red, freeze! Anyone who\n// moves during red light is out. Everyone who crosses the finish line wins.\nconst finished = {}\nlet finishCount = 0\nlet light = "green"\nlet lightTimer = null\nlet freezeTimer = null\nlet frozenSpots = {}\n\nfunction onPlayerJoin(playerId) {\n\tapi.setPlayerGamemode(playerId, "survival")\n\tapi.setPosition(playerId, CONFIG.startPosition[0], CONFIG.startPosition[1], CONFIG.startPosition[2])\n\tif (isRoundRunning()) {\n\t\teliminate(playerId)\n\t\tapi.sendMessage(playerId, "A round is on! Watch this one, you\'ll play in the next.", { color: "yellow" })\n\t\treturn\n\t}\n\tapi.sendMessage(playerId, "Run on green light, freeze on red light! Reach the finish line to win.", { color: "aqua" })\n}\n\nfunction beginRound() {\n\tfinishCount = 0\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tdelete finished[playerId]\n\t\tconst spot = randomSpot(CONFIG.startPosition, 2)\n\t\tapi.setPosition(playerId, spot[0], spot[1], spot[2])\n\t}\n\tsetLight("green")\n}\n\nfunction setLight(color) {\n\tlight = color\n\tfrozenSpots = {}\n\tcancelTimer(freezeTimer)\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tsetSidebar(playerId, "Light", color === "green" ? "GREEN - run!" : "RED - freeze!")\n\t}\n\tif (color === "green") {\n\t\tannounce("Green light! Run!", "lime")\n\t} else {\n\t\tannounce("Red light! Freeze!", "red")\n\t\t// Half a second to stop, then anyone who moves is out\n\t\tfreezeTimer = runLater(0.5, () => {\n\t\t\tfor (const playerId of runners()) {\n\t\t\t\tfrozenSpots[playerId] = api.getPosition(playerId)\n\t\t\t}\n\t\t})\n\t}\n\tconst seconds = CONFIG.minLightSeconds + Math.random() * Math.max(0, CONFIG.maxLightSeconds - CONFIG.minLightSeconds)\n\tlightTimer = runLater(seconds, () => {\n\t\tsetLight(color === "green" ? "red" : "green")\n\t})\n}\n\nfunction runners() {\n\treturn playersLeft().filter((playerId) => !finished[playerId])\n}\n\nfunction crossedFinish(position) {\n\tif (CONFIG.startPosition[2] <= CONFIG.finishZ) {\n\t\treturn position[2] >= CONFIG.finishZ\n\t}\n\treturn position[2] <= CONFIG.finishZ\n}\n\nfunction reachFinish(playerId) {\n\tfinished[playerId] = true\n\tfinishCount++\n\tannounce(api.getEntityName(playerId) + " made it! (#" + finishCount + ")", "gold")\n\tif (CONFIG.rewardCoins > 0) {\n\t\taddCoins(playerId, CONFIG.rewardCoins)\n\t}\n}\n\nfunction checkRoundOver() {\n\tif (isRoundRunning() && runners().length === 0) {\n\t\tendRound(finishCount > 0 ? "Round over! " + finishCount + " made it to the finish." : "Round over! Nobody made it this time.")\n\t}\n}\n\nfunction tick(ms) {\n\tif (!isRoundRunning()) {\n\t\treturn\n\t}\n\tfor (const playerId of runners()) {\n\t\tconst position = api.getPosition(playerId)\n\t\tconst spot = frozenSpots[playerId]\n\t\t// Only moving sideways counts: landing from a jump doesn\'t\n\t\tif (light === "red" && spot && Math.hypot(position[0] - spot[0], position[2] - spot[2]) > CONFIG.moveLimit) {\n\t\t\teliminate(playerId)\n\t\t\tapi.broadcastMessage(api.getEntityName(playerId) + " moved on red light! Out!", { color: "red" })\n\t\t} else if (crossedFinish(position)) {\n\t\t\treachFinish(playerId)\n\t\t}\n\t}\n\tcheckRoundOver()\n}\n\nfunction finishRound() {\n\tcancelTimer(lightTimer)\n\tcancelTimer(freezeTimer)\n\tfrozenSpots = {}\n\tbringEveryoneBack()\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tdelete finished[playerId]\n\t\tsetSidebar(playerId, "Light", "-")\n\t\tapi.setPosition(playerId, CONFIG.startPosition[0], CONFIG.startPosition[1], CONFIG.startPosition[2])\n\t}\n}\n\nfunction onRespawnRequest(playerId) {\n\t// Coming back at the start on red isn\'t moving: that is their spot now\n\tif (frozenSpots[playerId]) {\n\t\tfrozenSpots[playerId] = CONFIG.startPosition.slice()\n\t}\n\treturn CONFIG.startPosition\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete finished[playerId]\n\tdelete frozenSpots[playerId]\n\trunLater(0, checkRoundOver)\n}',
        changeable: [{
          name: "reachFinish",
          about: "what happens when a player crosses the finish line: the message and the reward"
        }, {
          name: "setLight",
          about: "how the light changes: the messages, and how long each light lasts"
        }],
        setup: "Build a long, flat track from startPosition to the finish line at finishZ (players run along z)."
      }, {
        name: "shop",
        kind: "feature",
        title: "Shop",
        category: "economy",
        summary: "A shop of items for coins: /shop lists them and opens the shop screen, /buy <number or name> buys one; with sellPrices set, /sell (or a sell pad) turns items into coins",
        keywords: ["shop", "shops", "shopping", "store", "buy", "buying", "sell", "market", "merchant", "trader", "price", "prices", "spend", "selling", "sellall", "sell all", "sell pad", "sell station", "sell items", "sell stuff", "sell ores", "sell resources"],
        howItPlays: "Every item in shopItems is for sale for coins, in the shop screen and by command. /shop lists them with their numbers and prices and opens the shop screen; /buy 2 or /buy diamond sword buys one if the player has the coins. Coins come from the coins helper: give them with addCoins elsewhere in the game. It can also buy items back: every [item, coins each] in sellPrices is sold by typing /sell (the name is sellCommand) and, if sellPad is a position, by standing on that block (checked a few times a second, once each time a player steps on). It takes every one of those items from the player's inventory, gives the coins and tells them what they sold, or that they have nothing to sell. With sellPrices left empty nothing can be sold.",
        settings: [{
          key: "shopItems",
          kind: "list",
          names: "item",
          value: '[["Bread", 5, 10], ["Iron Sword", 1, 50], ["Diamond Pickaxe", 1, 150]]',
          about: "what the shop sells, each [item, how many, price in coins]"
        }, {
          key: "shopTitle",
          kind: "string",
          value: '"Shop"',
          about: "the shop's name, shown at the top of the shop screen"
        }, {
          key: "sellPrices",
          kind: "list",
          names: "item",
          value: "[]",
          about: 'what players can sell for coins, each [item, coins for each one], like [["Wheat", 5], ["Coal", 3]] ([] for no selling)'
        }, {
          key: "sellCommand",
          kind: "string",
          value: '"sell"',
          about: "the command that sells everything in sellPrices, without the slash"
        }, {
          key: "sellPad",
          kind: "position",
          value: "null",
          about: "the block players stand on to sell everything in sellPrices (null for no sell pad)"
        }, {
          key: "startCoins",
          kind: "number",
          value: "0",
          about: "coins a new player starts with"
        }, {
          key: "saveCoins",
          kind: "boolean",
          value: "false",
          about: "true: coins are kept after a player leaves"
        }],
        code: '// Shop: /shop lists what is for sale and opens the shop screen, /buy <number or name> buys it with coins.\n// With sellPrices set, /sell (and standing on sellPad) sells those items for coins.\nlet shopMade = false\nlet sellPadMs = 0\nconst onSellPad = {}\n\nfunction onPlayerJoin(playerId) {\n\tmakeShop()\n\tconst selling = sellList().length > 0 ? ", /" + CONFIG.sellCommand.toLowerCase().replace("/", "") + " to sell" : ""\n\tapi.sendMessage(playerId, "Type /shop to see what you can buy with coins" + selling + ".", { color: "aqua" })\n}\n\nfunction makeShop() {\n\tif (shopMade) {\n\t\treturn\n\t}\n\tshopMade = true\n\tapi.configureShopCategory("Shop", { customTitle: CONFIG.shopTitle, autoSelectCategory: true })\n\tCONFIG.shopItems.forEach((entry, index) => {\n\t\tapi.createShopItem("Shop", "item" + (index + 1), {\n\t\t\timage: entry[0],\n\t\t\tamount: entry[1] || 1,\n\t\t\tcost: entry[2],\n\t\t\tcurrency: "coins",\n\t\t\tcustomTitle: (entry[1] || 1) + " " + entry[0],\n\t\t\tonBoughtMessage: "You bought " + (entry[1] || 1) + " " + entry[0] + "!",\n\t\t\tsortPriority: CONFIG.shopItems.length - index,\n\t\t})\n\t})\n}\n\nfunction showShop(playerId) {\n\tconst lines = CONFIG.shopItems.map((entry, index) => (index + 1) + ". " + (entry[1] || 1) + " " + entry[0] + " - " + entry[2] + " coins")\n\tapi.sendMessage(playerId, CONFIG.shopTitle + " (you have " + getCoins(playerId) + " coins):\\n" + lines.join("\\n") + "\\nType /buy and a number, like /buy 1", { color: "yellow" })\n\tapi.openShop(playerId, false, "Shop", false)\n}\n\nfunction findShopItem(wanted) {\n\tconst number = Number(wanted)\n\tif (Number.isInteger(number) && number >= 1 && number <= CONFIG.shopItems.length) {\n\t\treturn CONFIG.shopItems[number - 1]\n\t}\n\tconst name = wanted.toLowerCase()\n\treturn CONFIG.shopItems.find((entry) => entry[0].toLowerCase() === name) || CONFIG.shopItems.find((entry) => entry[0].toLowerCase().includes(name)) || null\n}\n\nfunction sellList() {\n\treturn CONFIG.sellPrices.filter((entry) => Number(entry[1]) > 0)\n}\n\n// Sells every item in sellPrices the player has, and tells them what it came to\nfunction sellAll(playerId) {\n\tconst prices = sellList()\n\tconst sold = []\n\tfor (const entry of prices) {\n\t\tlet amount = 0\n\t\ttry {\n\t\t\tamount = api.getInventoryItemAmount(playerId, entry[0])\n\t\t} catch (e) {\n\t\t\tcontinue\n\t\t}\n\t\tif (amount > 0) {\n\t\t\tsold.push(amount + " " + entry[0])\n\t\t}\n\t}\n\tconst earned = sold.length > 0 ? sellItems(playerId, prices) : 0\n\tif (earned > 0) {\n\t\tapi.sendMessage(playerId, "You sold " + sold.join(", ") + " for " + earned + " coins!", { color: "gold" })\n\t} else {\n\t\tapi.sendMessage(playerId, "You have nothing to sell. Sell prices: " + prices.map((entry) => entry[0] + " " + entry[1]).join(", ") + ".", { color: "orange" })\n\t}\n}\n\nfunction giveShopItem(playerId, entry) {\n\tconst amount = entry[1] || 1\n\tconst given = api.giveItem(playerId, entry[0], amount)\n\tif (given < amount) {\n\t\t// The price of what didn\'t fit back, as it is: addCoins would count it double during double coins\n\t\tconst back = given === 0 ? entry[2] : Math.floor((entry[2] * (amount - given)) / amount)\n\t\tapi.setCurrencyAmount(playerId, "coins", getCoins(playerId) + back)\n\t\tapi.sendMessage(playerId, given === 0 ? "Your inventory is full, so you got your coins back." : "Your inventory only had room for " + given + " " + entry[0] + ", so you got " + back + " coins back.", { color: "orange" })\n\t\treturn false\n\t}\n\treturn true\n}\n\nfunction buyFromShop(playerId, wanted) {\n\tconst entry = wanted === "" ? null : findShopItem(wanted)\n\tif (entry === null) {\n\t\tapi.sendMessage(playerId, "That isn\'t in the shop. Type /shop to see what is.", { color: "orange" })\n\t\treturn\n\t}\n\tif (!spendCoins(playerId, entry[2])) {\n\t\tapi.sendMessage(playerId, entry[0] + " costs " + entry[2] + " coins. You have " + getCoins(playerId) + ".", { color: "orange" })\n\t\treturn\n\t}\n\tif (giveShopItem(playerId, entry)) {\n\t\tapi.sendMessage(playerId, "You bought " + (entry[1] || 1) + " " + entry[0] + "!", { color: "lime" })\n\t}\n}\n\nfunction onPlayerBoughtShopItem(playerId, categoryKey, itemKey) {\n\tconst entry = categoryKey === "Shop" ? CONFIG.shopItems[Number(itemKey.slice(4)) - 1] : null\n\tif (entry) {\n\t\tgiveShopItem(playerId, entry)\n\t}\n}\n\n// A few times a second: a player who steps onto the sell pad sells once, and again on their next visit\nfunction tick(ms) {\n\tsellPadMs += ms\n\tif (sellPadMs < 250) {\n\t\treturn\n\t}\n\tsellPadMs = 0\n\tconst pad = CONFIG.sellPad\n\tif (!pad || sellList().length === 0) {\n\t\treturn\n\t}\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tconst there = isInBox(playerId, [pad[0] - 1, pad[1], pad[2] - 1], [pad[0] + 1, pad[1] + 3, pad[2] + 1])\n\t\tif (there && !onSellPad[playerId]) {\n\t\t\tonSellPad[playerId] = true\n\t\t\tsellAll(playerId)\n\t\t} else if (!there) {\n\t\t\tdelete onSellPad[playerId]\n\t\t}\n\t}\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete onSellPad[playerId]\n}\n\nfunction playerCommand(playerId, command) {\n\tconst words = command.trim().split(" ")\n\tconst name = words[0].toLowerCase()\n\t// The whole command too, so a sellCommand of two words ("sell all") works\n\tconst typed = words.filter((word) => word !== "").join(" ").toLowerCase().replace("/", "")\n\tif (name === "shop") {\n\t\tshowShop(playerId)\n\t\treturn true\n\t}\n\tif (sellList().length > 0 && typed === CONFIG.sellCommand.trim().toLowerCase().replace("/", "")) {\n\t\tsellAll(playerId)\n\t\treturn true\n\t}\n\tif (name === "buy") {\n\t\tbuyFromShop(playerId, words.slice(1).join(" ").trim())\n\t\treturn true\n\t}\n\treturn false\n}',
        changeable: [{
          name: "giveShopItem",
          about: "what a player gets for something they bought (the item, or something else like a speed boost)"
        }, {
          name: "sellAll",
          about: "what selling does: which items are taken, the coins given and what the player is told"
        }],
        setup: "Players need coins to buy anything: give them with addCoins somewhere in your game, or set startCoins. To sell, fill sellPrices, and put a block at sellPad for the sell pad."
      }, {
        name: "killRewards",
        kind: "feature",
        title: "Kill rewards",
        category: "pvp",
        summary: "Coins, score and items for every kill, items and messages for kill streaks, and each player's kills on their sidebar",
        keywords: ["kill reward", "kill rewards", "kill coins", "coins for kills", "money for kills", "reward", "rewards", "kills", "kill", "killstreak", "kill streak", "streak", "streaks", "kill counter", "kill count", "bounty", "pvp"],
        howItPlays: "When a player kills another player they get killCoins and killScore points of score (shown on the leaderboard), and their kills go up on their sidebar. Kills in a row without dying make a streak; a streak in streakAnnounceAt is announced to everyone. Dying ends the streak.",
        settings: [{
          key: "killCoins",
          kind: "number",
          value: "5",
          about: "coins for each kill (0 for none)"
        }, {
          key: "killScore",
          kind: "number",
          value: "1",
          about: "score for each kill, shown on the leaderboard (0 for none)"
        }, {
          key: "streakAnnounceAt",
          kind: "list",
          value: "[3, 5, 10, 15, 20]",
          about: "kill streaks that are told to everyone"
        }, {
          key: "scoreName",
          kind: "string",
          value: '"Kills"',
          about: "what the score is called on the leaderboard"
        }, {
          key: "killItems",
          kind: "list",
          names: "item",
          value: "[]",
          about: 'items every kill gives, as [item, amount], e.g. [["Apple", 1]]'
        }, {
          key: "streakItems",
          kind: "list",
          names: "item",
          value: '[[3, "Apple", 2], [5, "Diamond Sword", 1]]',
          about: "items for reaching a kill streak, as [streak, item, amount]"
        }],
        code: '// Kill rewards: every kill gives coins and score and counts on the killer\'s sidebar. Kills in a row without dying are\n// a streak, and big streaks are told to everyone.\nconst killCounts = {}\nconst killStreaks = {}\n\nfunction onPlayerJoin(playerId) {\n\tkillCounts[playerId] = 0\n\tkillStreaks[playerId] = 0\n\tsetSidebar(playerId, "Kills", 0)\n}\n\nfunction onPlayerKilledOtherPlayer(attackingPlayer, killedPlayer, damageDealt, withItem) {\n\tif (attackingPlayer !== killedPlayer) {\n\t\trewardKiller(attackingPlayer, killedPlayer)\n\t}\n}\n\nfunction rewardKiller(attackingPlayer, killedPlayer) {\n\tkillCounts[attackingPlayer] = (killCounts[attackingPlayer] || 0) + 1\n\tkillStreaks[attackingPlayer] = (killStreaks[attackingPlayer] || 0) + 1\n\tsetSidebar(attackingPlayer, "Kills", killCounts[attackingPlayer])\n\tif (CONFIG.killScore > 0) {\n\t\taddScore(attackingPlayer, CONFIG.killScore)\n\t}\n\tif (CONFIG.killCoins > 0) {\n\t\taddCoins(attackingPlayer, CONFIG.killCoins)\n\t\tapi.sendMessage(attackingPlayer, "You beat " + api.getEntityName(killedPlayer) + "! +" + CONFIG.killCoins + " coins", { color: "lime" })\n\t}\n\tif (CONFIG.streakAnnounceAt.includes(killStreaks[attackingPlayer])) {\n\t\tapi.broadcastMessage(api.getEntityName(attackingPlayer) + " is on a " + killStreaks[attackingPlayer] + " kill streak!", { color: "orange" })\n\t}\n\tfor (const [item, amount] of CONFIG.killItems) {\n\t\tapi.giveItem(attackingPlayer, item, amount)\n\t}\n\tfor (const [streak, item, amount] of CONFIG.streakItems) {\n\t\tif (killStreaks[attackingPlayer] === streak) {\n\t\t\tapi.giveItem(attackingPlayer, item, amount)\n\t\t\tapi.sendMessage(attackingPlayer, streak + " kills in a row: you get " + amount + " " + item + "!", { color: "gold" })\n\t\t}\n\t}\n}\n\n// Every death, by a player or not, ends with a respawn request, which ends the streak\nfunction onRespawnRequest(playerId) {\n\tkillStreaks[playerId] = 0\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete killCounts[playerId]\n\tdelete killStreaks[playerId]\n}',
        setup: "Turn PvP on in your world settings so players can fight.",
        changeable: [{
          name: "rewardKiller",
          about: "what a kill gives: coins, score, the message and which streaks are announced"
        }]
      }, {
        name: "progression",
        kind: "feature",
        title: "XP and levels",
        category: "players",
        summary: "Players earn XP (and coins for mobs) for kills, mobs, mining and time played, level up (each level needs more XP) and get a rank like [Pro] before their name in chat; /stats shows level, XP, kills and deaths",
        keywords: ["xp", "exp", "experience", "level up", "levelup", "leveling", "levelling", "lvl", "progression", "rank", "ranks", "ranked", "rank up", "rankup", "chat tag", "chat tags", "tag in chat", "rank tag", "prefix", "bronze silver gold", "stats", "statistics", "kills and deaths", "deaths", "kd", "playtime", "play time", "mob kills", "mob coins", "mob kill coins", "coins for mobs", "coins for killing mobs", "mob rewards"],
        howItPlays: "Players get XP: xpPerKill for beating a player, xpPerMobKill for a mob (and coinsPerMobKill coins on top), xpPerBlockBroken for each block they break and xpPerMinutePlayed each minute. Level 1 needs levelXpBase XP to level up, and each level after needs levelXpGrowth more. A level-up shows big on the player's screen, is told to everyone and gives levelUpCoins coins. Each player's rank is the last of ranks their level has reached: it shows before their name in chat ([Pro] Alice), under their name tag and on their sidebar with their level and XP. /stats shows level, XP to the next level, kills and deaths. Other code can call addXp(playerId, amount) to give XP (for a win, a quest) and getLevel(playerId) to read a level (e.g. to lock a door until level 5).",
        settings: [{
          key: "xpPerKill",
          kind: "number",
          value: "20",
          about: "XP for beating another player (0: none)"
        }, {
          key: "xpPerMobKill",
          kind: "number",
          value: "10",
          about: "XP for killing a mob (0: none)"
        }, {
          key: "coinsPerMobKill",
          kind: "number",
          value: "0",
          about: "coins for killing a mob, on top of its XP (0: none)"
        }, {
          key: "xpPerBlockBroken",
          kind: "number",
          value: "1",
          about: "XP for each block a player breaks (0: none)"
        }, {
          key: "xpPerMinutePlayed",
          kind: "number",
          value: "5",
          about: "XP for every minute a player is in the world (0: none)"
        }, {
          key: "levelXpBase",
          kind: "number",
          value: "100",
          about: "XP needed to go from level 1 to level 2"
        }, {
          key: "levelXpGrowth",
          kind: "number",
          value: "50",
          about: "how much more XP each level after that needs (0: every level needs the same)"
        }, {
          key: "levelUpCoins",
          kind: "number",
          value: "25",
          about: "coins for each level up (0: none)"
        }, {
          key: "ranks",
          kind: "list",
          value: '[["Newbie", 1, "white"], ["Pro", 5, "lime"], ["Expert", 10, "aqua"], ["Legend", 20, "gold"]]',
          about: "ranks as [name, level it starts at, colour], lowest first; the rank shows before the player's name in chat"
        }, {
          key: "saveProgress",
          kind: "boolean",
          value: "true",
          about: "true: level, XP, kills and deaths are kept after a player leaves"
        }],
        code: '// XP and levels: players earn XP for kills, mobs, mining and playing. Enough XP levels them up (each level needs more),\n// and their level gives them a rank, shown before their name in chat and on their sidebar. /stats shows their stats.\n// Other code can give XP with addXp(playerId, amount) and read a level with getLevel(playerId).\nconst progress = {}\n\nfunction onPlayerJoin(playerId) {\n\tconst load = (key, fallback) => (CONFIG.saveProgress ? Number(getSaved(playerId, key, fallback)) : fallback)\n\tprogress[playerId] = {\n\t\tlevel: Math.max(1, load("progressLevel", 1)),\n\t\txp: load("progressXp", 0),\n\t\tkills: load("progressKills", 0),\n\t\tdeaths: load("progressDeaths", 0),\n\t\tplayMs: 0,\n\t\tshownLevel: 0,\n\t}\n\tshowLevelProgress(playerId)\n}\n\nfunction xpNeeded(level) {\n\treturn Math.max(1, CONFIG.levelXpBase + CONFIG.levelXpGrowth * (level - 1))\n}\n\n// The highest rank the level has reached, as [name, level, colour], or null\nfunction rankFor(level) {\n\tlet best = null\n\tfor (const rank of CONFIG.ranks) {\n\t\tif (level >= rank[1] && (best === null || rank[1] >= best[1])) {\n\t\t\tbest = rank\n\t\t}\n\t}\n\treturn best\n}\n\nfunction getLevel(playerId) {\n\treturn progress[playerId] ? progress[playerId].level : 0\n}\n\n// note is optional text shown after the XP, like "+3 coins"\nfunction addXp(playerId, amount, note) {\n\tconst stats = progress[playerId]\n\tif (!stats || !(amount > 0)) {\n\t\treturn\n\t}\n\tstats.xp += amount\n\tapi.sendFlyingMiddleMessage(playerId, "+" + amount + " XP" + (note ? ", " + note : ""), 1)\n\twhile (stats.xp >= xpNeeded(stats.level)) {\n\t\tstats.xp -= xpNeeded(stats.level)\n\t\tstats.level++\n\t\tlevelUp(playerId, stats.level)\n\t}\n\tstoreProgress(playerId)\n\tshowLevelProgress(playerId)\n}\n\nfunction levelUp(playerId, level) {\n\tconst name = api.getEntityName(playerId)\n\tapi.queueMiddleTextUpper(playerId, "Level " + level + "!", 3000)\n\tapi.broadcastMessage(name + " reached level " + level + "!", { color: "gold" })\n\tif (CONFIG.levelUpCoins > 0) {\n\t\taddCoins(playerId, CONFIG.levelUpCoins)\n\t\tapi.sendMessage(playerId, "Level up reward: +" + CONFIG.levelUpCoins + " coins!", { color: "lime" })\n\t}\n\tconst rank = rankFor(level)\n\tif (rank && rank[1] === level) {\n\t\tapi.broadcastMessage(name + " is now a " + rank[0] + "!", { color: rank[2] })\n\t}\n}\n\nfunction storeProgress(playerId) {\n\tconst stats = progress[playerId]\n\tif (CONFIG.saveProgress && stats) {\n\t\tsetSaved(playerId, "progressLevel", stats.level)\n\t\tsetSaved(playerId, "progressXp", stats.xp)\n\t\tsetSaved(playerId, "progressKills", stats.kills)\n\t\tsetSaved(playerId, "progressDeaths", stats.deaths)\n\t}\n}\n\nfunction showLevelProgress(playerId) {\n\tconst stats = progress[playerId]\n\tconst rank = rankFor(stats.level)\n\tsetSidebar(playerId, "Level", stats.level)\n\tsetSidebar(playerId, "XP", stats.xp + "/" + xpNeeded(stats.level))\n\tsetSidebar(playerId, "Rank", rank ? rank[0] : "-")\n\t// The tag under their name changes only with their level\n\tif (stats.shownLevel !== stats.level) {\n\t\tstats.shownLevel = stats.level\n\t\tconst tag = (rank ? "[" + rank[0] + "] " : "") + "Level " + stats.level\n\t\tapi.setTargetedPlayerSettingForEveryone(playerId, "nameTagInfo", { subtitle: [{ str: tag, style: { color: rank ? rank[2] : "white" } }] }, true)\n\t}\n}\n\n// The rank goes before the player\'s name in chat: [Pro] Alice: hi\nfunction onPlayerChat(playerId, chatMessage) {\n\tconst rank = progress[playerId] ? rankFor(progress[playerId].level) : null\n\tif (rank) {\n\t\treturn [[{ str: "[" + rank[0] + "]", style: { color: rank[2] } }]]\n\t}\n}\n\nfunction onPlayerKilledOtherPlayer(attackingPlayer, killedPlayer) {\n\tif (attackingPlayer !== killedPlayer && progress[attackingPlayer]) {\n\t\tprogress[attackingPlayer].kills++\n\t\tstoreProgress(attackingPlayer)\n\t\taddXp(attackingPlayer, CONFIG.xpPerKill)\n\t}\n}\n\nfunction onPlayerKilledMob(playerId, mobId, damageDealt, withItem) {\n\tconst coins = progress[playerId] && CONFIG.coinsPerMobKill > 0 ? CONFIG.coinsPerMobKill : 0\n\tif (coins > 0) {\n\t\taddCoins(playerId, coins)\n\t\tif (!(CONFIG.xpPerMobKill > 0)) {\n\t\t\tapi.sendFlyingMiddleMessage(playerId, "+" + coins + " coins", 1)\n\t\t}\n\t}\n\taddXp(playerId, CONFIG.xpPerMobKill, coins > 0 ? "+" + coins + " coins" : "")\n}\n\nfunction onPlayerChangeBlock(playerId, x, y, z, fromBlock, toBlock) {\n\tif (toBlock === "Air" && fromBlock !== "Air") {\n\t\taddXp(playerId, CONFIG.xpPerBlockBroken)\n\t}\n}\n\n// Every death ends with a respawn request\nfunction onRespawnRequest(playerId) {\n\tif (progress[playerId]) {\n\t\tprogress[playerId].deaths++\n\t\tstoreProgress(playerId)\n\t}\n}\n\nfunction tick(ms) {\n\tif (CONFIG.xpPerMinutePlayed <= 0) {\n\t\treturn\n\t}\n\tfor (const playerId of Object.keys(progress)) {\n\t\tprogress[playerId].playMs += ms\n\t\tif (progress[playerId].playMs >= 60000) {\n\t\t\tprogress[playerId].playMs -= 60000\n\t\t\taddXp(playerId, CONFIG.xpPerMinutePlayed)\n\t\t}\n\t}\n}\n\nfunction playerCommand(playerId, command) {\n\tconst word = command.trim().toLowerCase()\n\tconst stats = progress[playerId]\n\tif ((word !== "stats" && word !== "level" && word !== "xp") || !stats) {\n\t\treturn false\n\t}\n\tconst rank = rankFor(stats.level)\n\tconst needed = xpNeeded(stats.level)\n\tapi.sendMessage(\n\t\tplayerId,\n\t\t"Level " + stats.level + (rank ? " (" + rank[0] + ")" : "") + "\\nXP: " + stats.xp + "/" + needed + ", " + (needed - stats.xp) + " to the next level\\nKills: " + stats.kills + "  Deaths: " + stats.deaths,\n\t\t{ color: "aqua" },\n\t)\n\treturn true\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete progress[playerId]\n}',
        changeable: [{
          name: "levelUp",
          about: "what a level-up gives and says: coins, items, a message, a rank announcement"
        }, {
          name: "xpNeeded",
          about: "how much XP a level needs, e.g. doubling every level"
        }],
        setup: "Nothing to build. Turn PvP on for XP from kills, and allow mobs for XP and coins from mobs."
      }, {
        name: "quests",
        kind: "feature",
        title: "Quests",
        category: "players",
        summary: "Quests like kill 5 mobs, mine 10 logs, place 25 blocks or walk 100 blocks, each giving coins and items when done, one at a time or all at once, on the sidebar, listed with /quests and saved; can reset every day",
        keywords: ["quest", "quests", "questing", "questline", "quest line", "quest system", "qwest", "qwests", "quets", "mission", "missions", "mision", "misions", "missons", "daily quest", "daily quests", "daily task", "daily tasks", "daily mission", "daily missions", "daily challenge", "daily challenges", "achievement", "achievements", "achievment", "achievments", "acheivement", "acheivements", "objective", "objectives"],
        howItPlays: 'Every quest in quests has a goal and a count: kill mobs, kill players, mine blocks, place blocks, collect coins (coins earned any way but from quests) or walk (count is blocks walked). A mob or block named in the goal ("kill zombies", "mine coal") or given as mob or block (block: "Log") counts only mobs or blocks with that in their name. With questsInOrder one quest is on at a time and the next starts when it is done; otherwise every quest is on at once. The quests on show on the player\'s sidebar with their progress (Lumberjack: Mine Log 3/10). Finishing one shows Quest complete!, gives its coins and items once and tells the next quest. /quests lists every quest with its progress and reward. Progress is saved (saveQuests), and with resetDaily every quest starts again each day. Other code adds to a goal of its own with addQuestProgress(playerId, goal, amount): a quest { goal: "win rounds", count: 3 } goes up with addQuestProgress(playerId, "win rounds", 1). isQuestDone(playerId, name) says whether a player has finished a quest (e.g. to open a door).',
        settings: [{
          key: "quests",
          kind: "list",
          names: "item",
          value: '[{ name: "First Steps", goal: "walk", count: 100, coins: 10 }, { name: "Lumberjack", goal: "mine blocks", block: "Log", count: 10, coins: 20 }, { name: "Builder", goal: "place blocks", count: 25, coins: 25 }, { name: "Miner", goal: "mine blocks", block: "Ore", count: 10, coins: 40, items: [["Iron Pickaxe", 1]] }, { name: "Monster Hunter", goal: "kill mobs", count: 5, coins: 50, items: [["Iron Sword", 1]] }]',
          about: 'each quest as { name, goal, count, coins, items }, every name different. goal: "kill mobs", "kill players", "mine blocks", "place blocks", "collect coins", "walk" (count in blocks), or words of your own counted with addQuestProgress. A mob or block in the goal ("kill zombies", "mine coal") or as mob: "Cow" / block: "Log" counts only those with it in their name. coins and items ([["Iron Sword", 1]]) are the reward; text: "Win 3 rounds" changes what it says'
        }, {
          key: "questsInOrder",
          kind: "boolean",
          value: "true",
          about: "true: one quest at a time, the next starting when it is done; false: every quest at once"
        }, {
          key: "resetDaily",
          kind: "boolean",
          value: "false",
          about: "true: every quest starts again each day (daily quests)"
        }, {
          key: "saveQuests",
          kind: "boolean",
          value: "true",
          about: "true: quest progress is kept after a player leaves"
        }, {
          key: "announceQuests",
          kind: "boolean",
          value: "true",
          about: "true: everyone is told when a player finishes a quest"
        }],
        code: '// Quests: players finish quests (kill mobs, mine or place blocks, earn coins, walk) for coins and items. With\n// questsInOrder one quest is on at a time; otherwise all are. The quests on show on the sidebar, /quests lists them all,\n// and progress is saved. Other code counts a goal of its own with addQuestProgress(playerId, "win rounds", 1).\nconst questPlayers = {}\nlet questMs = 0\n\nfunction onPlayerJoin(playerId) {\n\tconst state = { progress: {}, day: questDay(), lines: {}, walkFrom: null, walked: 0, coinsSeen: null }\n\tif (CONFIG.saveQuests) {\n\t\ttry {\n\t\t\tconst saved = JSON.parse(String(getSaved(playerId, "questProgress", "{}")))\n\t\t\tstate.progress = saved.progress || {}\n\t\t\tstate.day = saved.day || state.day\n\t\t} catch (e) {\n\t\t\tstate.progress = {}\n\t\t}\n\t}\n\tquestPlayers[playerId] = state\n\tcheckQuestDay(playerId)\n\tshowQuests(playerId)\n\tconst next = activeQuests(playerId)[0]\n\tif (next) {\n\t\tapi.sendMessage(playerId, "Quest: " + questName(next) + ", " + questText(next) + " " + questProgress(playerId, next) + ". Type /quests to see them all.", { color: "aqua" })\n\t}\n}\n\n// A goal as [what it counts, the mob or block it names]: "Kill Mobs" is ["kill mob", ""], "break blocks" is\n// ["mine block", ""], "kill 10 cows" is ["kill mob", "cow"], "mine some coal" is ["mine block", "coal"] and "mine stone\n// blocks" is ["mine block", "stone"]\nfunction questGoal(goal) {\n\tconst words = String(goal || "")\n\t\t.toLowerCase()\n\t\t.split(" ")\n\t\t.filter((word) => word !== "" && isNaN(Number(word)) && !["a", "an", "the", "some", "any", "other", "enemy", "enemies", "hostile"].includes(word))\n\t\t.map(questWord)\n\t// "stone blocks" names stone: what is counted is said by the verb\n\tif (words.length > 2 && ["block", "mob", "monster"].includes(words[words.length - 1])) {\n\t\twords.pop()\n\t}\n\tconst text = words.join(" ")\n\tconst same = { kill: "kill mob", "kill mob": "kill mob", "kill monster": "kill mob", "kill player": "kill player", "mine block": "mine block", mine: "mine block", "place block": "place block", place: "place block", "collect coin": "collect coin", walk: "walk", "walk block": "walk", walking: "walk" }\n\tif (same[text]) {\n\t\treturn [same[text], ""]\n\t}\n\tconst verbs = { kill: "kill mob", mine: "mine block", place: "place block" }\n\treturn words.length > 1 && verbs[words[0]] ? [verbs[words[0]], words.slice(1).join(" ")] : [text, ""]\n}\n\n// A goal\'s word, one of many as one (names are found by what they contain) and other verbs as the counted ones:\n// "wolves" and "mummies" keep only "wol" and "mumm" (Wolf, Mummy), "torches" is "torch", "leaves" is "leave" (Oak\n// Leaves), "slay" is "kill" and "chop" is "mine"\nfunction questWord(word) {\n\tconst verbs = { beat: "kill", defeat: "kill", slay: "kill", break: "mine", chop: "mine", dig: "mine", build: "place", earn: "collect", get: "collect", money: "coin", travel: "walk" }\n\tif (verbs[word]) {\n\t\treturn verbs[word]\n\t}\n\tif (word === "leaves") {\n\t\treturn "leave"\n\t}\n\tif (word.length > 4 && /(?:ves|ies)$/.test(word)) {\n\t\treturn word.slice(0, -3)\n\t}\n\tif (word.length > 4 && /(?:ches|shes|xes|sses)$/.test(word)) {\n\t\treturn word.slice(0, -2)\n\t}\n\treturn word.length > 3 && word.endsWith("s") && !word.endsWith("ss") ? word.slice(0, -1) : word\n}\n\n// A quest\'s name, which its progress is kept under: what it asks if it has none\nfunction questName(quest) {\n\treturn String(quest.name || questText(quest))\n}\n\nfunction questCount(quest) {\n\treturn Math.max(1, Math.floor(Number(quest.count) || 1))\n}\n\nfunction questProgress(playerId, quest) {\n\treturn (questPlayers[playerId].progress[questName(quest)] || 0) + "/" + questCount(quest)\n}\n\n// What the quest asks, for the sidebar and /quests: "Mine Log", "Kill mobs"\nfunction questText(quest) {\n\tif (quest.text) {\n\t\treturn quest.text\n\t}\n\tconst [kind, named] = questGoal(quest.goal)\n\tconst what = quest.mob || quest.block\n\tconst texts = { "kill mob": "Kill " + (what || "mobs"), "kill player": "Beat players", "mine block": "Mine " + (what || "blocks"), "place block": "Place " + (what || "blocks"), "collect coin": "Earn coins", walk: "Walk" }\n\tconst text = !what && named ? String(quest.goal) : texts[kind] || String(quest.goal)\n\treturn text.charAt(0).toUpperCase() + text.slice(1)\n}\n\n// The reward as [item, amount] pairs; one pair on its own works too\nfunction questItems(quest) {\n\tconst items = quest.items || []\n\treturn typeof items[0] === "string" ? [items] : items\n}\n\nfunction questRewardText(quest) {\n\tconst parts = quest.coins > 0 ? [quest.coins + " coins"] : []\n\tfor (const [item, amount] of questItems(quest)) {\n\t\tparts.push(amount + " " + item)\n\t}\n\treturn parts.join(", ")\n}\n\nfunction isQuestDone(playerId, name) {\n\tconst quest = CONFIG.quests.find((other) => questName(other) === name)\n\tconst state = questPlayers[playerId]\n\treturn Boolean(quest && state && (state.progress[name] || 0) >= questCount(quest))\n}\n\n// The quests a player is doing now: the first one not done in order, or every one not done\nfunction activeQuests(playerId) {\n\tconst open = CONFIG.quests.filter((quest) => !isQuestDone(playerId, questName(quest)))\n\treturn CONFIG.questsInOrder ? open.slice(0, 1) : open\n}\n\n// Adds to every quest on with this goal. what is the mob or block, which has to have the quest\'s mob or block (or the\n// one its goal names) in its name\nfunction addQuestProgress(playerId, goal, amount, what) {\n\tconst state = questPlayers[playerId]\n\tconst add = amount === undefined ? 1 : Number(amount)\n\tif (!state || !(add > 0)) {\n\t\treturn\n\t}\n\tcheckQuestDay(playerId)\n\tconst [kind, named] = questGoal(goal)\n\tconst thing = String(what || named).toLowerCase()\n\tlet changed = false\n\tfor (const quest of activeQuests(playerId)) {\n\t\tconst [questKind, questNamed] = questGoal(quest.goal)\n\t\tif (questKind !== kind || !thing.includes(String(quest.mob || quest.block || questNamed).toLowerCase())) {\n\t\t\tcontinue\n\t\t}\n\t\tconst name = questName(quest)\n\t\tstate.progress[name] = Math.min(questCount(quest), (state.progress[name] || 0) + add)\n\t\tchanged = true\n\t\tif (state.progress[name] >= questCount(quest)) {\n\t\t\tfinishQuest(playerId, quest)\n\t\t}\n\t}\n\tif (changed) {\n\t\tstoreQuests(playerId)\n\t\tshowQuests(playerId)\n\t}\n}\n\nfunction finishQuest(playerId, quest) {\n\tconst state = questPlayers[playerId]\n\tapi.queueMiddleTextUpper(playerId, "Quest complete!", 3000)\n\t// Coins a quest gives don\'t count for an "earn coins" quest\n\tconst before = state.coinsSeen === null ? 0 : getCoins(playerId)\n\tgiveQuestReward(playerId, quest)\n\tif (state.coinsSeen !== null) {\n\t\tstate.coinsSeen += getCoins(playerId) - before\n\t}\n\tif (CONFIG.announceQuests) {\n\t\tapi.broadcastMessage(api.getEntityName(playerId) + " finished the quest " + questName(quest) + "!", { color: "gold" })\n\t}\n\tconst next = activeQuests(playerId)[0]\n\tif (!next) {\n\t\tapi.sendMessage(playerId, "You finished every quest!" + (CONFIG.resetDaily ? " New ones tomorrow." : ""), { color: "gold" })\n\t} else if (CONFIG.questsInOrder) {\n\t\tapi.sendMessage(playerId, "Next quest: " + questName(next) + ", " + questText(next) + " " + questProgress(playerId, next), { color: "aqua" })\n\t}\n}\n\nfunction giveQuestReward(playerId, quest) {\n\tif (quest.coins > 0) {\n\t\taddCoins(playerId, quest.coins)\n\t}\n\tfor (const [item, amount] of questItems(quest)) {\n\t\tapi.giveItem(playerId, item, amount)\n\t}\n\tconst reward = questRewardText(quest)\n\tapi.sendMessage(playerId, "Quest done: " + questName(quest) + "!" + (reward ? " You get " + reward + "." : ""), { color: "lime" })\n}\n\nfunction storeQuests(playerId) {\n\tconst state = questPlayers[playerId]\n\tif (CONFIG.saveQuests && state) {\n\t\tsetSaved(playerId, "questProgress", JSON.stringify({ day: state.day, progress: state.progress }))\n\t}\n}\n\n// One sidebar line per quest on (Lumberjack: Mine Log 3/10), and "Quests: all done!" at the end\nfunction showQuests(playerId) {\n\tconst state = questPlayers[playerId]\n\tconst on = activeQuests(playerId)\n\tconst lines = {}\n\tfor (const quest of on) {\n\t\tlines[questName(quest)] = questText(quest) + " " + questProgress(playerId, quest)\n\t}\n\tif (on.length === 0 && CONFIG.quests.length > 0) {\n\t\tlines.Quests = "all done!"\n\t}\n\tfor (const label of Object.keys(state.lines)) {\n\t\tif (!(label in lines)) {\n\t\t\tremoveSidebar(playerId, label)\n\t\t}\n\t}\n\tfor (const label of Object.keys(lines)) {\n\t\tif (state.lines[label] !== lines[label]) {\n\t\t\tsetSidebar(playerId, label, lines[label])\n\t\t}\n\t}\n\tstate.lines = lines\n}\n\nfunction questDay() {\n\treturn Math.floor(Date.now() / 86400000)\n}\n\n// With resetDaily, a new day starts every quest again. Returns true when it did\nfunction checkQuestDay(playerId) {\n\tconst state = questPlayers[playerId]\n\tif (!CONFIG.resetDaily || !state || state.day === questDay()) {\n\t\treturn false\n\t}\n\tconst hadProgress = Object.keys(state.progress).length > 0\n\tstate.day = questDay()\n\tstate.progress = {}\n\tstoreQuests(playerId)\n\tif (hadProgress) {\n\t\tapi.sendMessage(playerId, "A new day: your quests start again!", { color: "aqua" })\n\t}\n\treturn true\n}\n\nfunction onPlayerKilledMob(playerId, mobId, damageDealt, withItem) {\n\taddQuestProgress(playerId, "kill mobs", 1, api.getEntityType(mobId))\n}\n\nfunction onPlayerKilledOtherPlayer(attackingPlayer, killedPlayer, damageDealt, withItem) {\n\tif (attackingPlayer !== killedPlayer) {\n\t\taddQuestProgress(attackingPlayer, "kill players", 1)\n\t}\n}\n\nfunction onPlayerChangeBlock(playerId, x, y, z, fromBlock, toBlock) {\n\tif (toBlock === "Air" && fromBlock !== "Air") {\n\t\taddQuestProgress(playerId, "mine blocks", 1, fromBlock)\n\t} else if (toBlock !== "Air" && toBlock !== fromBlock) {\n\t\taddQuestProgress(playerId, "place blocks", 1, toBlock)\n\t}\n}\n\n// Once a second: a new day, blocks walked and coins earned\nfunction tick(ms) {\n\tquestMs += ms\n\tif (questMs < 1000) {\n\t\treturn\n\t}\n\tquestMs = 0\n\tconst walking = CONFIG.quests.some((quest) => questGoal(quest.goal)[0] === "walk")\n\tconst earning = CONFIG.quests.some((quest) => questGoal(quest.goal)[0] === "collect coin")\n\tfor (const playerId of Object.keys(questPlayers)) {\n\t\tconst state = questPlayers[playerId]\n\t\tif (checkQuestDay(playerId)) {\n\t\t\tshowQuests(playerId)\n\t\t}\n\t\tif (walking) {\n\t\t\tconst [x, y, z] = api.getPosition(playerId)\n\t\t\tconst moved = state.walkFrom ? Math.hypot(x - state.walkFrom[0], z - state.walkFrom[1]) : 0\n\t\t\tstate.walkFrom = [x, z]\n\t\t\t// More than 20 blocks in a second is a teleport, not a walk\n\t\t\tstate.walked += moved < 20 ? moved : 0\n\t\t\tif (state.walked >= 1) {\n\t\t\t\tconst blocks = Math.floor(state.walked)\n\t\t\t\tstate.walked -= blocks\n\t\t\t\taddQuestProgress(playerId, "walk", blocks)\n\t\t\t}\n\t\t}\n\t\tif (earning) {\n\t\t\tconst coins = getCoins(playerId)\n\t\t\tconst earned = state.coinsSeen === null ? 0 : coins - state.coinsSeen\n\t\t\tstate.coinsSeen = coins\n\t\t\tif (earned > 0) {\n\t\t\t\taddQuestProgress(playerId, "collect coins", earned)\n\t\t\t}\n\t\t}\n\t}\n}\n\nfunction playerCommand(playerId, command) {\n\tconst word = command.trim().toLowerCase()\n\tconst state = questPlayers[playerId]\n\tif ((word !== "quests" && word !== "quest" && word !== "missions") || !state) {\n\t\treturn false\n\t}\n\tconst on = activeQuests(playerId)\n\tconst done = CONFIG.quests.filter((quest) => isQuestDone(playerId, questName(quest))).length\n\tconst lines = ["Quests (" + done + "/" + CONFIG.quests.length + " done):"]\n\tfor (const quest of CONFIG.quests) {\n\t\tconst status = isQuestDone(playerId, questName(quest)) ? "Done" : on.includes(quest) ? "Now" : "Later"\n\t\tconst reward = questRewardText(quest)\n\t\tlines.push(status + " - " + questName(quest) + ": " + questText(quest) + " " + questProgress(playerId, quest) + (reward ? " (" + reward + ")" : ""))\n\t}\n\tapi.sendMessage(playerId, lines.join("\\n"), { color: "aqua" })\n\treturn true\n}\n\nfunction onPlayerLeave(playerId) {\n\tstoreQuests(playerId)\n\tdelete questPlayers[playerId]\n}',
        changeable: [{
          name: "giveQuestReward",
          about: "what finishing a quest gives and says: its coins and items, or something else (XP, a kit, a rank)"
        }, {
          name: "activeQuests",
          about: "which quests a player is doing now, e.g. unlocking quests by level"
        }],
        setup: "Nothing to build. Allow mobs in your world settings for kill-mob quests and turn PvP on for kill-player quests."
      }, {
        name: "pets",
        kind: "feature",
        title: "Pets and eggs",
        category: "economy",
        summary: "Hatch eggs bought with coins for random pets, rare ones less often; equipped pets follow you and boost every coin you earn, and are saved",
        keywords: ["pet", "pets", "pet sim", "pet simulator", "pet simulater", "pet sim 99", "pet simulator 99", "egg", "eggs", "hatch", "hatching", "hatch eggs", "egg hatching", "open eggs", "rare pets", "legendary pet", "pet egg", "pet eggs", "equip pets", "pet follows", "pet that follows me", "companion", "companions", "adopt me", "coin boost", "coin multiplier"],
        howItPlays: "Each egg in eggs has a price in coins and pets, each with a chance in percent and a coin boost in percent. Standing by an egg's spot in eggPositions (in the same order as eggs) and typing /hatch buys it and hatches a random pet, the rarer the bigger its name on screen (\"You hatched a Rare Dragon!\"); /hatch and an egg's name or number works for an egg with no spot. /eggs lists the eggs and their pets. A player keeps up to maxPets pets: /pets lists them, /equip 2 and /unequip 2 (or /equip best) choose up to equipSlots to wear, /release 2 lets one go. Equipped pets add their boosts together, and every coin a player earns (through addCoins, from anything in the game) is boosted by them; petBoost(playerId) is that multiplier, for other rewards. With petsFollow on, each equipped pet follows its owner as a petMob with its name above it. With starterPet, every player starts with that pet, equipped. Pets are saved when savePets is on.",
        settings: [{
          key: "eggs",
          kind: "list",
          value: '[["Basic Egg", 50, [["Dog", 60, 10], ["Cat", 30, 20], ["Dragon", 10, 50]]], ["Golden Egg", 500, [["Unicorn", 60, 50], ["Phoenix", 35, 100], ["Galaxy Dragon", 5, 300]]]]',
          about: "the eggs, each [name, price in coins, its pets]; each pet is [name, chance in percent, extra coins it gives in percent]"
        }, {
          key: "eggPositions",
          kind: "list",
          value: "[[5, 10, 0], [-5, 10, 0]]",
          about: "where each egg stands, in the same order as eggs, each [x, y, z]: stand by one and type /hatch ([]: /hatch and the egg's name works anywhere)"
        }, {
          key: "starterPet",
          kind: "list",
          value: "[]",
          about: 'a pet every player gets, equipped and following them, the first time they join, as [name, extra coins it gives in percent], e.g. ["Puppy", 0]; [] for none'
        }, {
          key: "maxPets",
          kind: "number",
          value: "20",
          about: "the most pets a player can keep"
        }, {
          key: "equipSlots",
          kind: "number",
          value: "3",
          about: "how many pets a player can equip at once; only equipped pets boost coins"
        }, {
          key: "petMob",
          kind: "mob",
          value: '"Wildcat"',
          about: "the mob that each equipped pet looks like when it follows its owner"
        }, {
          key: "petsFollow",
          kind: "boolean",
          value: "true",
          about: "true: equipped pets follow their owner around"
        }, {
          key: "savePets",
          kind: "boolean",
          value: "true",
          about: "true: pets are kept after a player leaves"
        }],
        code: '// Pets: buy an egg with coins and hatch a random pet from it; rare pets come out less often. Equipped pets follow you\n// and boost every coin you earn. /hatch by an egg, /eggs, /pets, /equip 1, /unequip 1, /equip best, /release 1.\nconst petLists = {} // each player\'s pets: { name, boost, equipped }\nconst petFollowers = {} // each player\'s following pet mobs\nconst petMobIds = {} // every following pet mob, by mob id\nconst coinsSeen = {} // each player\'s coins last tick, to boost what they earned since\nconst boostOwed = {} // part of a coin each player is owed from boosts\nlet followCheckMs = 0\n\nfunction onPlayerJoin(playerId) {\n\tpetLists[playerId] = loadPets(playerId)\n\tgiveStarterPet(playerId)\n\tcoinsSeen[playerId] = getCoins(playerId)\n\tboostOwed[playerId] = 0\n\trefreshPets(playerId)\n\tapi.sendMessage(playerId, "Hatch eggs for pets that boost your coins! Stand by an egg and type /hatch, or type /eggs.", { color: "aqua" })\n}\n\n// The starterPet, once (each join when pets aren\'t saved, as they\'re gone)\nfunction giveStarterPet(playerId) {\n\t// [name, boost], or a list holding one ([["Dog", 0]])\n\tconst starter = Array.isArray(CONFIG.starterPet[0]) ? CONFIG.starterPet[0] : CONFIG.starterPet\n\tif (starter.length === 0 || petLists[playerId].length > 0 || (CONFIG.savePets && getSaved(playerId, "starterPetGiven", 0) === 1)) {\n\t\treturn\n\t}\n\tpetLists[playerId].push({ name: String(starter[0]), boost: Number(starter[1]) || 0, equipped: true })\n\tif (CONFIG.savePets) {\n\t\tsetSaved(playerId, "starterPetGiven", 1)\n\t}\n\tapi.sendMessage(playerId, "Your " + starter[0] + " follows you! Hatch eggs for more pets.", { color: "lime" })\n}\n\nfunction loadPets(playerId) {\n\tif (!CONFIG.savePets) {\n\t\treturn []\n\t}\n\ttry {\n\t\tconst saved = JSON.parse(String(getSaved(playerId, "pets", "[]")))\n\t\treturn saved.map((pet) => ({ name: String(pet[0]), boost: Number(pet[1]) || 0, equipped: pet[2] === 1 }))\n\t} catch (e) {\n\t\treturn []\n\t}\n}\n\nfunction equippedPets(playerId) {\n\treturn (petLists[playerId] || []).filter((pet) => pet.equipped)\n}\n\n// What a player\'s coins are multiplied by: 1, plus each equipped pet\'s boost (50 is +50%, so 1.5)\nfunction petBoost(playerId) {\n\tlet percent = 0\n\tfor (const pet of equippedPets(playerId)) {\n\t\tpercent += pet.boost\n\t}\n\treturn 1 + percent / 100\n}\n\n// Saves a player\'s pets and shows them: sidebar and following pets\nfunction refreshPets(playerId) {\n\tif (CONFIG.savePets) {\n\t\tsetSaved(playerId, "pets", JSON.stringify(petLists[playerId].map((pet) => [pet.name, pet.boost, pet.equipped ? 1 : 0])))\n\t}\n\tsetSidebar(playerId, "Pets", petLists[playerId].length + "/" + CONFIG.maxPets)\n\tsetSidebar(playerId, "Pet boost", "+" + Math.round((petBoost(playerId) - 1) * 100) + "% coins")\n\tremoveFollowers(playerId)\n\taddFollowers(playerId)\n}\n\n// Each equipped pet follows its owner as a petMob with its name above it\nfunction addFollowers(playerId) {\n\tif (!CONFIG.petsFollow) {\n\t\treturn\n\t}\n\tconst at = api.getPosition(playerId)\n\tfor (const pet of equippedPets(playerId)) {\n\t\tconst mobId = api.attemptSpawnMob(CONFIG.petMob, at[0] + 1, at[1], at[2] + 1, { name: pet.name })\n\t\tif (mobId !== null && mobId !== undefined) {\n\t\t\tpetMobIds[mobId] = playerId\n\t\t\tpetFollowers[playerId].push(mobId)\n\t\t\tapi.setMobAiState(mobId, "following", { targetId: playerId }, { hold: true })\n\t\t}\n\t}\n}\n\nfunction removeFollowers(playerId) {\n\tfor (const mobId of petFollowers[playerId] || []) {\n\t\tdelete petMobIds[mobId]\n\t\ttry {\n\t\t\tapi.despawnMob(mobId)\n\t\t} catch (e) {\n\t\t\t// Already gone\n\t\t}\n\t}\n\tpetFollowers[playerId] = []\n}\n\n// The egg a player asked for by name or number, or the one they stand by\nfunction findEgg(playerId, wanted) {\n\tif (wanted !== "") {\n\t\tconst number = Number(wanted)\n\t\tif (Number.isInteger(number) && number >= 1 && number <= CONFIG.eggs.length) {\n\t\t\treturn CONFIG.eggs[number - 1]\n\t\t}\n\t\tconst name = wanted.toLowerCase()\n\t\treturn CONFIG.eggs.find((egg) => egg[0].toLowerCase() === name || egg[0].toLowerCase() === name + " egg") || null\n\t}\n\tconst index = CONFIG.eggPositions.findIndex((spot, i) => i < CONFIG.eggs.length && isByEgg(playerId, spot))\n\treturn index === -1 ? null : CONFIG.eggs[index]\n}\n\nfunction isByEgg(playerId, spot) {\n\tconst position = api.getPosition(playerId)\n\treturn Math.hypot(position[0] - spot[0] - 0.5, position[2] - spot[2] - 0.5) < 4 && Math.abs(position[1] - spot[1]) < 3\n}\n\nfunction listEggs(playerId) {\n\tconst lines = CONFIG.eggs.map((egg, index) => {\n\t\treturn index + 1 + ". " + egg[0] + " - " + egg[1] + " coins: " + egg[2].map((pet) => pet[0] + " " + pet[1] + "%").join(", ")\n\t})\n\tconst how = CONFIG.eggPositions.length > 0 ? "Stand by an egg and type /hatch." : "Type /hatch and a number, like /hatch 1."\n\tapi.sendMessage(playerId, "Eggs (you have " + getCoins(playerId) + " coins):\\n" + lines.join("\\n") + "\\n" + how, { color: "yellow" })\n}\n\nfunction hatchEgg(playerId, wanted) {\n\tconst egg = findEgg(playerId, wanted)\n\tif (egg === null) {\n\t\tlistEggs(playerId)\n\t\treturn\n\t}\n\tconst spot = CONFIG.eggPositions[CONFIG.eggs.indexOf(egg)]\n\tif (spot && !isByEgg(playerId, spot)) {\n\t\tapi.sendMessage(playerId, "Go to the " + egg[0] + " to hatch it!", { color: "orange" })\n\t} else if (petLists[playerId].length >= CONFIG.maxPets) {\n\t\tapi.sendMessage(playerId, "You have " + CONFIG.maxPets + " pets, the most you can keep. Type /release and a number to let one go.", { color: "orange" })\n\t} else if (!spendCoins(playerId, egg[1])) {\n\t\tapi.sendMessage(playerId, "The " + egg[0] + " costs " + egg[1] + " coins. You have " + getCoins(playerId) + ".", { color: "orange" })\n\t} else {\n\t\t// Spent, not lost: the tick boosts only coins earned\n\t\tcoinsSeen[playerId] -= egg[1]\n\t\tconst pet = rollPet(egg)\n\t\tconst hatched = { name: pet[0], boost: pet[2], equipped: equippedPets(playerId).length < CONFIG.equipSlots }\n\t\tpetLists[playerId].push(hatched)\n\t\trefreshPets(playerId)\n\t\tpetHatched(playerId, hatched, rarityOf(egg, pet))\n\t}\n}\n\n// A random pet of an egg: one with chance 10 comes out 10 times in 100\nfunction rollPet(egg) {\n\tlet total = 0\n\tfor (const pet of egg[2]) {\n\t\ttotal += pet[1]\n\t}\n\tlet roll = Math.random() * total\n\tfor (const pet of egg[2]) {\n\t\troll -= pet[1]\n\t\tif (roll < 0) {\n\t\t\treturn pet\n\t\t}\n\t}\n\treturn egg[2][egg[2].length - 1]\n}\n\nfunction rarityOf(egg, pet) {\n\tlet total = 0\n\tfor (const other of egg[2]) {\n\t\ttotal += other[1]\n\t}\n\tconst percent = (pet[1] / total) * 100\n\treturn percent >= 40 ? "Common" : percent >= 15 ? "Rare" : percent >= 5 ? "Epic" : "Legendary"\n}\n\nfunction petHatched(playerId, pet, rarity) {\n\tconst text = "You hatched " + (rarity === "Epic" ? "an " : "a ") + rarity + " " + pet.name + "!"\n\tapi.setClientOption(playerId, "middleTextUpper", text)\n\trunLater(3, () => {\n\t\tif (api.getPlayerIds().includes(playerId)) {\n\t\t\tapi.setClientOption(playerId, "middleTextUpper", "")\n\t\t}\n\t})\n\tapi.sendMessage(playerId, text + " It gives +" + pet.boost + "% coins." + (pet.equipped ? " It\'s equipped!" : " Type /pets to equip it."), { color: "lime" })\n\tif (rarity === "Legendary") {\n\t\tapi.broadcastMessage(api.getEntityName(playerId) + " hatched a Legendary " + pet.name + "!", { color: "gold" })\n\t}\n}\n\nfunction listPets(playerId) {\n\tconst pets = petLists[playerId]\n\tif (pets.length === 0) {\n\t\tapi.sendMessage(playerId, "You have no pets yet. Stand by an egg and type /hatch, or type /eggs.", { color: "yellow" })\n\t\treturn\n\t}\n\tconst lines = pets.map((pet, index) => index + 1 + ". " + pet.name + " +" + pet.boost + "%" + (pet.equipped ? " (equipped)" : ""))\n\tapi.sendMessage(playerId, "Your pets (" + pets.length + "/" + CONFIG.maxPets + "), +" + Math.round((petBoost(playerId) - 1) * 100) + "% coins:\\n" + lines.join("\\n") + "\\nType /equip 1, /unequip 1, /equip best or /release 1", { color: "yellow" })\n}\n\nfunction choosePet(playerId, action, wanted) {\n\tconst pets = petLists[playerId]\n\tif (action === "equip" && wanted === "best") {\n\t\tconst best = pets.slice().sort((a, b) => b.boost - a.boost).slice(0, CONFIG.equipSlots)\n\t\tpets.forEach((pet) => (pet.equipped = best.includes(pet)))\n\t\trefreshPets(playerId)\n\t\tapi.sendMessage(playerId, "Your best pets are equipped: +" + Math.round((petBoost(playerId) - 1) * 100) + "% coins!", { color: "lime" })\n\t\treturn\n\t}\n\tconst pet = pets[Number(wanted) - 1]\n\tif (!pet) {\n\t\tapi.sendMessage(playerId, "Type /" + action + " and a pet\'s number from /pets, like /" + action + " 1", { color: "orange" })\n\t\treturn\n\t}\n\tif (action === "equip" && !pet.equipped && equippedPets(playerId).length >= CONFIG.equipSlots) {\n\t\tapi.sendMessage(playerId, "You can equip " + CONFIG.equipSlots + " pets at once. Type /unequip and a number first.", { color: "orange" })\n\t\treturn\n\t}\n\tif (action === "release") {\n\t\tpets.splice(pets.indexOf(pet), 1)\n\t} else {\n\t\tpet.equipped = action === "equip"\n\t}\n\trefreshPets(playerId)\n\tconst done = action === "release" ? "let go" : action === "equip" ? "equipped" : "unequipped"\n\tapi.sendMessage(playerId, pet.name + " " + done + "! Your pets give +" + Math.round((petBoost(playerId) - 1) * 100) + "% coins.", { color: "lime" })\n}\n\nfunction playerCommand(playerId, command) {\n\tconst words = command.trim().split(" ")\n\tconst name = words[0].toLowerCase()\n\tconst rest = words.slice(1).join(" ").trim().toLowerCase()\n\tif (name === "hatch") {\n\t\thatchEgg(playerId, rest)\n\t} else if (name === "eggs") {\n\t\tlistEggs(playerId)\n\t} else if (name === "pets") {\n\t\tlistPets(playerId)\n\t} else if (name === "equip" || name === "unequip" || name === "release") {\n\t\tchoosePet(playerId, name, rest)\n\t} else {\n\t\treturn false\n\t}\n\treturn true\n}\n\n// Every coin a player earns is boosted by their equipped pets, whatever gave it; a part of a coin waits for the next\nfunction tick(ms) {\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tif (!petLists[playerId]) {\n\t\t\tcontinue\n\t\t}\n\t\tconst coins = getCoins(playerId)\n\t\tif (coins > coinsSeen[playerId] && petBoost(playerId) > 1) {\n\t\t\tboostOwed[playerId] += (coins - coinsSeen[playerId]) * (petBoost(playerId) - 1)\n\t\t\t// A tiny bit more, as 1.2 - 1 is 0.19999 in JavaScript\n\t\t\tconst extra = Math.floor(boostOwed[playerId] + 0.000001)\n\t\t\tboostOwed[playerId] -= extra\n\t\t\tif (extra > 0) {\n\t\t\t\t// Given as it is: addCoins would count it again during double coins, which the coins seen already did\n\t\t\t\tapi.giveCurrencyAmount(playerId, "coins", extra)\n\t\t\t}\n\t\t}\n\t\t// The boost itself isn\'t boosted again: the coins as they are now, double coins and all\n\t\tcoinsSeen[playerId] = getCoins(playerId)\n\t}\n\t// Every 2 seconds missing pets are put back (one that couldn\'t spawn where its owner was) and told again to follow\n\tfollowCheckMs += ms\n\tif (followCheckMs >= 2000) {\n\t\tfollowCheckMs = 0\n\t\tfor (const playerId of Object.keys(petLists)) {\n\t\t\tif (CONFIG.petsFollow && petFollowers[playerId].length < equippedPets(playerId).length) {\n\t\t\t\tremoveFollowers(playerId)\n\t\t\t\taddFollowers(playerId)\n\t\t\t}\n\t\t}\n\t\tfor (const mobId of Object.keys(petMobIds)) {\n\t\t\tif (api.getMobAiState(mobId).state !== "following") {\n\t\t\t\tapi.setMobAiState(mobId, "following", { targetId: petMobIds[mobId] }, { hold: true })\n\t\t\t}\n\t\t}\n\t}\n}\n\n// Pets can\'t be hurt, and the world doesn\'t take them away\nfunction onPlayerDamagingMob(playerId, mobId) {\n\tif (petMobIds[mobId]) {\n\t\treturn "preventDamage"\n\t}\n}\n\nfunction onWorldAttemptDespawnMob(mobId) {\n\tif (petMobIds[mobId]) {\n\t\treturn "preventDespawn"\n\t}\n}\n\nfunction onMobDespawned(mobId) {\n\tconst owner = petMobIds[mobId]\n\tif (owner && petFollowers[owner]) {\n\t\tpetFollowers[owner] = petFollowers[owner].filter((id) => id !== mobId)\n\t}\n\tdelete petMobIds[mobId]\n}\n\nfunction onPlayerLeave(playerId) {\n\tremoveFollowers(playerId)\n\tdelete petLists[playerId]\n\tdelete petFollowers[playerId]\n\tdelete coinsSeen[playerId]\n\tdelete boostOwed[playerId]\n}',
        changeable: [{
          name: "petHatched",
          about: "what happens when a player hatches a pet: the big text, the message, telling everyone about a Legendary one"
        }, {
          name: "petBoost",
          about: "what a player's coins are multiplied by, from their equipped pets (1 is no boost)"
        }, {
          name: "rarityOf",
          about: "which rarity a pet is called (Common, Rare, Epic, Legendary) from its chance in its egg"
        }],
        setup: "Give players a way to earn coins (or set startCoins), and build an egg display at each spot in eggPositions; turn on mobs for pets to follow."
      }, {
        name: "fishing",
        kind: "feature",
        title: "Fishing",
        category: "economy",
        summary: "Players catch random fish by water, with /fish or by casting a fishing rod in, buy faster rods with /buyrod, and sell their fish for coins with /sell or on a sell pad",
        keywords: ["fishing", "fish", "fishes", "fishing sim", "fishing simulator", "fishing game", "fisherman", "fishermen", "fisher", "catch fish", "catching fish", "go fishing", "fishing rod", "fishing rods", "rod", "rods", "better rods", "rare fish", "sell fish", "fish market", "fishin", "fising", "fishng", "fsh"],
        howItPlays: "Each fish in fishTable is [fish, chance, price]: the chances are weights, so bigger is more common. Standing within waterDistance blocks of water, /fish catches a random fish after catchSeconds; casting a fishing rod into water works too, with the game's own click-to-catch, its fish picked from fishTable and its bite after the same time. Each rod in rods is [rod item, time multiplier, price]: /rods lists them, /buyrod 2 buys one with coins and gives the rod, and the best rod a player has makes /fish faster (0.5: twice as fast). The first rod is given on joining when it is free. Fish are kept as counts, not items: /fishbag shows them, the sidebar shows how many, and /sell or standing on the block at fishSellPad sells them all for coins. A fish with a chance of 5 or less is rare: everyone is told who caught it. With saveCoins on, coins, fish and rods are kept for next time.",
        settings: [{
          key: "fishTable",
          kind: "list",
          names: "item",
          value: '[["Wheatfish", 45, 2], ["Moonfish", 30, 5], ["Needlefish", 15, 10], ["Oarfish", 8, 25], ["Pearlescent Moonfish", 2, 100]]',
          about: "the fish, each [fish item, chance (bigger is more common), coins it sells for]"
        }, {
          key: "catchSeconds",
          kind: "number",
          value: "5",
          about: "seconds to catch a fish with the first rod"
        }, {
          key: "rods",
          kind: "list",
          names: "item",
          value: '[["Rusty Rod", 1, 0], ["Sturdy Rod", 0.6, 50], ["Carbon Rod", 0.3, 200]]',
          about: "the rods, each [rod item, catch time multiplier (0.5: twice as fast), price in coins]; a free first rod is given on joining"
        }, {
          key: "fishSellPad",
          kind: "position",
          value: "[5, 10, 5]",
          about: "the block players stand on to sell all their fish"
        }, {
          key: "waterDistance",
          kind: "number",
          value: "3",
          about: "how many blocks from water a player can be to fish with /fish"
        }, {
          key: "saveCoins",
          kind: "boolean",
          value: "true",
          about: "true: coins, fish and rods are kept after a player leaves"
        }],
        code: '// Fishing: by some water, type /fish or cast a fishing rod into it to catch a random fish from the fish table. Better\n// rods (/rods, /buyrod) catch faster. /sell, or standing on the sell pad, sells every fish for coins.\nconst fishTimers = {}\nconst fishBags = {}\nlet fishSellPadMs = 0\n\nfunction onPlayerJoin(playerId) {\n\tconst number = rodNumber(playerId)\n\tif (number > 0 && !api.hasItem(playerId, CONFIG.rods[number - 1][0])) {\n\t\tapi.giveItem(playerId, CONFIG.rods[number - 1][0], 1)\n\t}\n\tshowFishCount(playerId)\n\tapi.sendMessage(playerId, "Go fishing! By some water, cast your rod in or type /fish. /sell sells your fish, /rods shows better rods.", { color: "aqua" })\n}\n\n// Fish and rods are counts, saved when CONFIG.saveCoins is on\nfunction fishValue(playerId, key) {\n\tif (CONFIG.saveCoins) {\n\t\treturn Number(getSaved(playerId, key, 0))\n\t}\n\treturn (fishBags[playerId] || {})[key] || 0\n}\n\nfunction setFishValue(playerId, key, value) {\n\tif (CONFIG.saveCoins) {\n\t\tsetSaved(playerId, key, value)\n\t\treturn\n\t}\n\tif (!fishBags[playerId]) {\n\t\tfishBags[playerId] = {}\n\t}\n\tfishBags[playerId][key] = value\n}\n\n// The number of the best rod a player has (1 is the first), 0 for none\nfunction rodNumber(playerId) {\n\tconst bought = fishValue(playerId, "fishingRod")\n\tif (bought > 0) {\n\t\treturn bought\n\t}\n\treturn CONFIG.rods.length > 0 && CONFIG.rods[0][2] === 0 ? 1 : 0\n}\n\nfunction catchSecondsFor(rod) {\n\treturn Math.round(CONFIG.catchSeconds * (rod ? rod[1] : 1) * 10) / 10\n}\n\nfunction pickFish() {\n\tconst total = CONFIG.fishTable.reduce((sum, fish) => sum + fish[1], 0)\n\tlet roll = Math.random() * total\n\tfor (const fish of CONFIG.fishTable) {\n\t\troll -= fish[1]\n\t\tif (roll < 0) {\n\t\t\treturn fish\n\t\t}\n\t}\n\treturn CONFIG.fishTable[0]\n}\n\nfunction nearWater(playerId) {\n\tconst [x, y, z] = api.getPosition(playerId).map(Math.floor)\n\tconst reach = CONFIG.waterDistance\n\tfor (let dx = -reach; dx <= reach; dx++) {\n\t\tfor (let dz = -reach; dz <= reach; dz++) {\n\t\t\tfor (let dy = -2; dy <= 0; dy++) {\n\t\t\t\tif (api.getBlock(x + dx, y + dy, z + dz) === "Water") {\n\t\t\t\t\treturn true\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\treturn false\n}\n\nfunction startFishing(playerId) {\n\tif (fishTimers[playerId] !== undefined) {\n\t\tapi.sendMessage(playerId, "You\'re already fishing...")\n\t\treturn\n\t}\n\tif (!nearWater(playerId)) {\n\t\tapi.sendMessage(playerId, "Stand next to water to fish!", { color: "orange" })\n\t\treturn\n\t}\n\tconst number = rodNumber(playerId)\n\tconst seconds = catchSecondsFor(number > 0 ? CONFIG.rods[number - 1] : null)\n\tapi.sendMessage(playerId, "Fishing... wait " + seconds + " seconds.", { color: "aqua" })\n\tfishTimers[playerId] = runLater(seconds, () => {\n\t\tdelete fishTimers[playerId]\n\t\tif (!nearWater(playerId)) {\n\t\t\tapi.sendMessage(playerId, "The fish got away! Stay by the water.", { color: "orange" })\n\t\t\treturn\n\t\t}\n\t\tcatchFish(playerId, pickFish())\n\t})\n}\n\nfunction catchFish(playerId, fish) {\n\tsetFishValue(playerId, "fish " + fish[0], fishValue(playerId, "fish " + fish[0]) + 1)\n\tshowFishCount(playerId)\n\tconst a = /^[aeiou]/i.test(fish[0]) ? "an " : "a "\n\tapi.sendMessage(playerId, "You caught " + a + fish[0] + "! It sells for " + fish[2] + " coins.", { color: "lime" })\n\tif (fish[1] <= 5) {\n\t\tapi.broadcastMessage(api.getEntityName(playerId) + " caught a rare " + fish[0] + "!", { color: "gold" })\n\t}\n}\n\nfunction showFishCount(playerId) {\n\tconst total = CONFIG.fishTable.reduce((sum, fish) => sum + fishValue(playerId, "fish " + fish[0]), 0)\n\tsetSidebar(playerId, "Fish", total)\n}\n\nfunction sellFish(playerId) {\n\tlet count = 0\n\tlet coins = 0\n\tfor (const fish of CONFIG.fishTable) {\n\t\tconst have = fishValue(playerId, "fish " + fish[0])\n\t\tif (have > 0) {\n\t\t\tcount += have\n\t\t\tcoins += have * fish[2]\n\t\t\tsetFishValue(playerId, "fish " + fish[0], 0)\n\t\t}\n\t}\n\tif (count === 0) {\n\t\treturn false\n\t}\n\taddCoins(playerId, coins)\n\tshowFishCount(playerId)\n\tapi.sendMessage(playerId, "Sold " + count + " fish for " + coins + " coins!", { color: "gold" })\n\treturn true\n}\n\nfunction listRods(playerId) {\n\tconst mine = rodNumber(playerId)\n\tconst lines = CONFIG.rods.map((rod, index) => (index + 1) + ". " + rod[0] + ": catches in " + catchSecondsFor(rod) + "s, " + (rod[2] > 0 ? rod[2] + " coins" : "free") + (index + 1 === mine ? " (yours)" : ""))\n\tapi.sendMessage(playerId, "Rods:\\n" + lines.join("\\n") + "\\nType /buyrod and a number, like /buyrod 2", { color: "yellow" })\n}\n\nfunction buyRod(playerId, wanted) {\n\tconst number = Number(wanted)\n\tconst index = Number.isInteger(number) && number >= 1 ? number - 1 : CONFIG.rods.findIndex((rod) => wanted !== "" && rod[0].toLowerCase().startsWith(wanted.toLowerCase()))\n\tif (index < 0 || index >= CONFIG.rods.length) {\n\t\tlistRods(playerId)\n\t\treturn\n\t}\n\tconst rod = CONFIG.rods[index]\n\tif (rodNumber(playerId) > index) {\n\t\t// One they lost is given back\n\t\tif (!api.hasItem(playerId, rod[0])) {\n\t\t\tapi.giveItem(playerId, rod[0], 1)\n\t\t}\n\t\tapi.sendMessage(playerId, "You already have the " + rod[0] + " or better!")\n\t\treturn\n\t}\n\tif (!spendCoins(playerId, rod[2])) {\n\t\tapi.sendMessage(playerId, "The " + rod[0] + " costs " + rod[2] + " coins. You have " + getCoins(playerId) + ".", { color: "orange" })\n\t\treturn\n\t}\n\tsetFishValue(playerId, "fishingRod", index + 1)\n\tapi.giveItem(playerId, rod[0], 1)\n\tapi.sendMessage(playerId, "You bought the " + rod[0] + "! Fish now take " + catchSecondsFor(rod) + " seconds.", { color: "lime" })\n}\n\nfunction showFishBag(playerId) {\n\tconst lines = CONFIG.fishTable.filter((fish) => fishValue(playerId, "fish " + fish[0]) > 0).map((fish) => fishValue(playerId, "fish " + fish[0]) + " " + fish[0])\n\tapi.sendMessage(playerId, lines.length > 0 ? "Your fish: " + lines.join(", ") : "You have no fish yet.", { color: "yellow" })\n}\n\n// A rod cast into water: the fish comes from the fish table, after the rod\'s catch time\nfunction onPlayerAttemptFish(playerId, rodName, x, y, z) {\n\tconst rod = CONFIG.rods.find((one) => one[0].toLowerCase() === String(rodName).toLowerCase())\n\treturn { caughtItemName: pickFish()[0], biteDelayMs: catchSecondsFor(rod) * 1000 }\n}\n\n// The fish goes in the fish bag instead of the inventory\nfunction onPlayerSucceededFishCatch(playerId, rodName, x, y, z, caughtItemName) {\n\tconst fish = CONFIG.fishTable.find((one) => one[0] === caughtItemName)\n\tif (!fish) {\n\t\treturn\n\t}\n\tcatchFish(playerId, fish)\n\treturn "preventItemGrant"\n}\n\nfunction tick(ms) {\n\tfishSellPadMs += ms\n\tif (fishSellPadMs < 500) {\n\t\treturn\n\t}\n\tfishSellPadMs = 0\n\tconst pad = CONFIG.fishSellPad\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tconst [x, y, z] = api.getPosition(playerId)\n\t\tif (Math.abs(x - pad[0] - 0.5) <= 1.5 && Math.abs(z - pad[2] - 0.5) <= 1.5 && y >= pad[1] && y <= pad[1] + 3) {\n\t\t\tsellFish(playerId)\n\t\t}\n\t}\n}\n\nfunction playerCommand(playerId, command) {\n\tconst words = command.trim().split(" ")\n\tconst name = words[0].toLowerCase().replace("/", "")\n\tif (name === "fish") {\n\t\tstartFishing(playerId)\n\t\treturn true\n\t}\n\tif (name === "sell") {\n\t\tif (!sellFish(playerId)) {\n\t\t\tapi.sendMessage(playerId, "You have no fish to sell. Go fishing first!")\n\t\t}\n\t\treturn true\n\t}\n\tif (name === "rods") {\n\t\tlistRods(playerId)\n\t\treturn true\n\t}\n\tif (name === "buyrod") {\n\t\tbuyRod(playerId, words.slice(1).join(" ").trim())\n\t\treturn true\n\t}\n\tif (name === "fishbag") {\n\t\tshowFishBag(playerId)\n\t\treturn true\n\t}\n\treturn false\n}\n\nfunction onPlayerLeave(playerId) {\n\tif (fishTimers[playerId] !== undefined) {\n\t\tcancelTimer(fishTimers[playerId])\n\t}\n\tdelete fishTimers[playerId]\n\tdelete fishBags[playerId]\n}',
        changeable: [{
          name: "catchFish",
          about: "what a catch gives: the fish counted, the message, the rare-fish news, or extra coins or xp"
        }, {
          name: "sellFish",
          about: "what selling pays: the coins for each fish, or a bonus for selling many"
        }],
        setup: "Build water (a pond, a lake or the sea) for players to fish in, and put a block at fishSellPad for them to sell their fish on."
      }, {
        name: "starterKit",
        kind: "feature",
        title: "Starter kit",
        category: "players",
        summary: "Items every player gets when they join and again after respawning, with armour put on for them",
        keywords: ["kit", "starter kit", "starterkit", "starting items", "when they join", "when they respawn", "when you join", "when you respawn", "on join", "on respawn", "respawn", "start items", "give items", "items on join", "items on spawn", "respawn items", "inventory", "spawn with", "free items", "free sword", "armor", "armour"],
        howItPlays: "Every player gets kitItems when they join, and again each time they respawn after dying if giveOnRespawn is on. Each piece of armour in wornArmour is put on them. With emptyInventoryFirst on, their inventory is emptied first, so the kit never piles up.",
        settings: [{
          key: "kitItems",
          kind: "list",
          names: "item",
          value: '[["Stone Sword", 1], ["Wood Pickaxe", 1], ["Bread", 5]]',
          about: "the items each player gets, as [item, amount]"
        }, {
          key: "wornArmour",
          kind: "list",
          names: "item",
          value: '["Iron Helmet", "Iron Chestplate"]',
          about: "armour put on each player (helmets, chestplates, gauntlets, leggings, boots); [] for none"
        }, {
          key: "giveOnRespawn",
          kind: "boolean",
          value: "true",
          about: "true: players get the kit again each time they respawn"
        }, {
          key: "emptyInventoryFirst",
          kind: "boolean",
          value: "true",
          about: "true: a player's inventory is emptied before they get the kit"
        }],
        code: '// Starter kit: every player gets the kit items when they join, and again when they respawn after dying. Armour in\n// CONFIG.wornArmour is put on for them.\nconst armourSlots = { Helmet: 46, Chestplate: 47, Gauntlets: 48, Leggings: 49, Boots: 50 }\n\nfunction onPlayerJoin(playerId) {\n\tgiveStarterKit(playerId)\n}\n\nfunction giveStarterKit(playerId) {\n\tif (CONFIG.emptyInventoryFirst) {\n\t\tgiveKit(playerId, CONFIG.kitItems)\n\t} else {\n\t\tfor (const entry of CONFIG.kitItems) {\n\t\t\tapi.giveItem(playerId, entry[0], entry[1] || 1)\n\t\t}\n\t}\n\tfor (const armour of CONFIG.wornArmour) {\n\t\tconst piece = armour.split(" ").pop()\n\t\tif (armourSlots[piece] !== undefined) {\n\t\t\tapi.setItemSlot(playerId, armourSlots[piece], armour)\n\t\t} else {\n\t\t\tapi.giveItem(playerId, armour, 1)\n\t\t}\n\t}\n}\n\n// Dying drops a player\'s items. This runs just before they come back, so the kit is ready when they are\nfunction onRespawnRequest(playerId) {\n\tif (CONFIG.giveOnRespawn) {\n\t\tgiveStarterKit(playerId)\n\t}\n}',
        changeable: [{
          name: "giveStarterKit",
          about: "what a player is given: the items and the armour"
        }]
      }, {
        name: "kitSelector",
        kind: "feature",
        title: "Kit selector",
        category: "players",
        summary: "Players pick a kit (Archer, Tank, Mage...) with /kit <name>, /kits lists them, and they get it when they join and each time they respawn, armour put on. Kits can cost coins or need a level to unlock, and a wait between picks can be set",
        keywords: ["battlegrounds", "kit selector", "kitselector", "kit select", "select kit", "choose kit", "choose a kit", "pick kit", "pick a kit", "kits", "kit", "classes", "class", "clases", "roles", "loadout", "loadouts", "archer", "tank", "mage", "wizard", "warrior", "kit pvp", "kitpvp", "different kits", "unlock kits", "buy kits", "kit shop", "kit cooldown"],
        howItPlays: "Each kit in kits is a name and its items. /kits lists them; /kit Tank picks one (by name or number). Every player starts with defaultKit and gets their kit when they join and each time they respawn, armour in it put on them, replacing what they had. With changeAtRespawn on, a kit picked more than pickSeconds after spawning comes at the next respawn, so nobody swaps mid-fight. With saveKitChoice on, a player's pick is kept for next time. A kit can end with what unlocks it, { cost: 100 } and/or { level: 5 }: /kit on a locked kit says what it needs, and buys it when the player has the coins (and the level, read from getLevel when the XP and levels prefab is in); a bought kit stays theirs. With kitCooldownMinutes above 0, after a pick a player waits that long before they can pick again, told how long is left, even after rejoining. A game that gives its own kit at other times (a new round) should call giveChosenKit(playerId) there instead.",
        settings: [{
          key: "kits",
          kind: "list",
          names: "item",
          value: '[["Archer", [["Iron Bow", 1], ["Arrow", 32], ["Stone Sword", 1], ["Bread", 5]]], ["Tank", [["Iron Sword", 1], ["Diamond Chestplate", 1], ["Diamond Leggings", 1], ["Iron Helmet", 1], ["Bread", 5]]], ["Mage", [["Stone Sword", 1], ["Splash Instant Damage Potion", 4], ["Splash Slowness Potion", 3], ["Instant Healing Potion", 2], ["Bread", 5]]]]',
          about: 'the kits, each [kit name, [[item, amount], ...]]; armour in a kit is put on. A kit can end with what unlocks it: { cost: 100 } coins to buy it once, { level: 5 } a level to reach (from the XP and levels prefab), or both: ["Tank", [["Iron Sword", 1]], { cost: 100, level: 5 }]'
        }, {
          key: "defaultKit",
          kind: "string",
          value: '"Archer"',
          about: "the kit a player has before they pick one: one of the kit names"
        }, {
          key: "changeAtRespawn",
          kind: "boolean",
          value: "true",
          about: "true: a kit picked mid-fight comes at the next respawn; false: it is given straight away"
        }, {
          key: "pickSeconds",
          kind: "number",
          value: "15",
          about: "seconds after joining or respawning when a picked kit is still given straight away"
        }, {
          key: "saveKitChoice",
          kind: "boolean",
          value: "true",
          about: "true: a player's kit is remembered after they leave"
        }, {
          key: "kitCooldownMinutes",
          kind: "number",
          value: "0",
          about: "minutes a player waits after picking a kit before they can pick another (0: no wait)"
        }],
        code: '// Kit selector: /kits lists the kits and /kit <name> picks one. Players get their kit when they join and every time\n// they respawn, with its armour put on. A kit picked mid-fight comes at the next respawn. A kit with { cost } or\n// { level } after its items is locked until bought (kept) or the level is reached; kitCooldownMinutes spaces picks out.\nconst chosenKits = {}\nconst boughtKits = {}\nconst kitPickedAt = {}\nconst kitsDue = {}\nconst kitGivenAt = {}\nconst kitArmourSlots = { Helmet: 46, Chestplate: 47, Gauntlets: 48, Leggings: 49, Boots: 50 }\n\nfunction onPlayerJoin(playerId) {\n\tconst saved = CONFIG.saveKitChoice ? getSaved(playerId, "chosenKit", null) : null\n\tboughtKits[playerId] = String(getSaved(playerId, "kitsBought", "")).split("|").filter((name) => name !== "")\n\tkitPickedAt[playerId] = Number(getSaved(playerId, "kitPickedAt", 0))\n\tconst savedKit = findKit(String(saved || CONFIG.defaultKit))\n\t// A saved kit still owing its cost (the kits changed) falls back to the default; a level, once reached, stays reached\n\tconst owes = savedKit ? kitStillNeeds(playerId, savedKit) : null\n\tchosenKits[playerId] = savedKit && (owes === null || owes.cost === 0) ? savedKit : findKit(CONFIG.defaultKit)\n\tkitsDue[playerId] = true\n\tapi.sendMessage(playerId, "Your kit: " + kitFor(playerId)[0] + ". Type /kits to see the others.", { color: "aqua" })\n}\n\nfunction findKit(wanted) {\n\tconst number = Number(wanted)\n\tif (wanted !== "" && Number.isInteger(number) && number >= 1 && number <= CONFIG.kits.length) {\n\t\treturn CONFIG.kits[number - 1]\n\t}\n\tconst name = wanted.toLowerCase()\n\treturn CONFIG.kits.find((kit) => kit[0].toLowerCase() === name) || CONFIG.kits.find((kit) => kit[0].toLowerCase().startsWith(name)) || null\n}\n\nfunction kitFor(playerId) {\n\treturn chosenKits[playerId] || findKit(CONFIG.defaultKit) || CONFIG.kits[0]\n}\n\n// What a kit needs to unlock: { cost, level }, 0 for none. The default kit is free\nfunction kitNeeds(kit) {\n\tconst unlock = kit[2]\n\tif (kit[0] === CONFIG.defaultKit || !unlock) {\n\t\treturn { cost: 0, level: 0 }\n\t}\n\tif (typeof unlock === "number") {\n\t\treturn { cost: unlock, level: 0 }\n\t}\n\treturn { cost: Number(unlock.cost) || 0, level: Number(unlock.level) || 0 }\n}\n\n// A player\'s level from the XP and levels prefab (getLevel), or null when the game has none\nfunction kitPlayerLevel(playerId) {\n\treturn typeof getLevel === "function" ? getLevel(playerId) : null\n}\n\n// What a player still needs for a kit, { level, cost } (0: nothing), or null when it\'s theirs. A cost is paid once\nfunction kitStillNeeds(playerId, kit) {\n\tconst needs = kitNeeds(kit)\n\tconst level = kitPlayerLevel(playerId)\n\tconst missing = {\n\t\tlevel: needs.level > 0 && level !== null && level < needs.level ? needs.level : 0,\n\t\tcost: needs.cost > 0 && !(boughtKits[playerId] || []).includes(kit[0]) ? needs.cost : 0,\n\t}\n\treturn missing.level > 0 || missing.cost > 0 ? missing : null\n}\n\n// The time left before a player can pick a kit again, in ms (0: they can now)\nfunction kitWaitLeft(playerId) {\n\tif (CONFIG.kitCooldownMinutes <= 0 || !kitPickedAt[playerId]) {\n\t\treturn 0\n\t}\n\treturn Math.max(0, kitPickedAt[playerId] + CONFIG.kitCooldownMinutes * 60000 - api.now())\n}\n\nfunction kitWaitText(ms) {\n\tconst seconds = Math.ceil(ms / 1000)\n\tconst minutes = Math.floor(seconds / 60)\n\treturn minutes > 0 ? minutes + "m " + (seconds % 60) + "s" : seconds + "s"\n}\n\nfunction giveChosenKit(playerId) {\n\tapi.clearInventory(playerId)\n\tfor (const entry of kitFor(playerId)[1]) {\n\t\tconst slot = kitArmourSlots[entry[0].split(" ").pop()]\n\t\ttry {\n\t\t\tif (slot !== undefined) {\n\t\t\t\tapi.setItemSlot(playerId, slot, entry[0])\n\t\t\t} else {\n\t\t\t\tapi.giveItem(playerId, entry[0], entry[1] || 1)\n\t\t\t}\n\t\t} catch (error) {\n\t\t\t// A misspelt item is left out, so the rest of the kit (and the game) still works\n\t\t\tapi.sendMessage(playerId, entry[0] + " isn\'t an item, so it was left out of your kit.", { color: "orange" })\n\t\t}\n\t}\n\tkitGivenAt[playerId] = api.now()\n}\n\n// The kit is given a tick after joining or respawning, so it replaces any kit the game itself gives then\nfunction tick(ms) {\n\tfor (const playerId of Object.keys(kitsDue)) {\n\t\tif (api.isAlive(playerId)) {\n\t\t\tdelete kitsDue[playerId]\n\t\t\tgiveChosenKit(playerId)\n\t\t}\n\t}\n}\n\nfunction onRespawnRequest(playerId) {\n\tkitsDue[playerId] = true\n}\n\nfunction listKits(playerId) {\n\tconst lines = CONFIG.kits.map((kit, index) => {\n\t\tconst missing = kitStillNeeds(playerId, kit)\n\t\tconst lock = missing === null ? "" : " [locked: " + [missing.level > 0 ? "level " + missing.level : "", missing.cost > 0 ? missing.cost + " coins" : ""].filter((part) => part !== "").join(", ") + "]"\n\t\treturn (index + 1) + ". " + kit[0] + lock + ": " + kit[1].map((entry) => (entry[1] || 1) + " " + entry[0]).join(", ")\n\t})\n\tapi.sendMessage(playerId, "Kits (yours: " + kitFor(playerId)[0] + "):\\n" + lines.join("\\n") + "\\nType /kit and a name, like /kit " + CONFIG.kits[CONFIG.kits.length - 1][0], { color: "yellow" })\n}\n\nfunction pickKit(playerId, wanted) {\n\tconst kit = wanted === "" ? null : findKit(wanted)\n\tif (kit === null) {\n\t\tlistKits(playerId)\n\t\treturn\n\t}\n\tconst missing = kitStillNeeds(playerId, kit)\n\tif (missing !== null && missing.level > 0) {\n\t\tapi.sendMessage(playerId, "The " + kit[0] + " kit unlocks at level " + missing.level + ". You\'re level " + kitPlayerLevel(playerId) + ".", { color: "orange" })\n\t\treturn\n\t}\n\tif (missing !== null && getCoins(playerId) < missing.cost) {\n\t\tapi.sendMessage(playerId, "The " + kit[0] + " kit costs " + missing.cost + " coins. You have " + getCoins(playerId) + ".", { color: "orange" })\n\t\treturn\n\t}\n\tconst waitLeft = kitWaitLeft(playerId)\n\tif (waitLeft > 0) {\n\t\tapi.sendMessage(playerId, "You can pick a new kit in " + kitWaitText(waitLeft) + ". Your kit: " + kitFor(playerId)[0] + ".", { color: "orange" })\n\t\treturn\n\t}\n\tif (missing !== null) {\n\t\tspendCoins(playerId, missing.cost)\n\t\tboughtKits[playerId] = (boughtKits[playerId] || []).concat([kit[0]])\n\t\tsetSaved(playerId, "kitsBought", boughtKits[playerId].join("|"))\n\t\tapi.sendMessage(playerId, "You bought the " + kit[0] + " kit for " + missing.cost + " coins! It\'s yours to keep.", { color: "gold" })\n\t}\n\tif (CONFIG.kitCooldownMinutes > 0) {\n\t\tkitPickedAt[playerId] = api.now()\n\t\tsetSaved(playerId, "kitPickedAt", kitPickedAt[playerId])\n\t}\n\tchosenKits[playerId] = kit\n\tif (CONFIG.saveKitChoice) {\n\t\tsetSaved(playerId, "chosenKit", kit[0])\n\t}\n\tconst justSpawned = api.now() - (kitGivenAt[playerId] || 0) <= CONFIG.pickSeconds * 1000\n\tconst giveNow = !kitsDue[playerId] && api.isAlive(playerId) && (!CONFIG.changeAtRespawn || justSpawned)\n\tif (giveNow) {\n\t\t// The window to swap stays the one from spawning: a swap opening a new one would refill the kit every few seconds\n\t\tconst spawnedAt = kitGivenAt[playerId]\n\t\tgiveChosenKit(playerId)\n\t\tkitGivenAt[playerId] = spawnedAt\n\t}\n\tif (giveNow || kitsDue[playerId]) {\n\t\tapi.sendMessage(playerId, "You got the " + kit[0] + " kit!", { color: "lime" })\n\t} else {\n\t\tapi.sendMessage(playerId, "You\'ll get the " + kit[0] + " kit when you respawn.", { color: "lime" })\n\t}\n}\n\nfunction playerCommand(playerId, command) {\n\tconst words = command.trim().split(" ")\n\tconst name = words[0].toLowerCase()\n\tif (name === "kits") {\n\t\tlistKits(playerId)\n\t\treturn true\n\t}\n\tif (name === "kit") {\n\t\tpickKit(playerId, words.slice(1).join(" ").trim())\n\t\treturn true\n\t}\n\treturn false\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete chosenKits[playerId]\n\tdelete kitsDue[playerId]\n\tdelete kitGivenAt[playerId]\n\tdelete boughtKits[playerId]\n\tdelete kitPickedAt[playerId]\n}',
        changeable: [{
          name: "giveChosenKit",
          about: "what a player gets for their kit: the items, the armour, or extras like speed or more health"
        }, {
          name: "pickKit",
          about: "what happens when a player picks a kit with /kit: unlocking it, the wait, when they get it and the message"
        }, {
          name: "kitStillNeeds",
          about: "what a player still needs before they can have a kit: a level, coins, or something else like wins"
        }],
        setup: "Nothing to build. In a PvP game, turn PvP on in your world settings; any kit the game gives on join or respawn is replaced by the picked one."
      }, {
        name: "usableItems",
        kind: "feature",
        title: "Usable items",
        category: "players",
        summary: "Items that do something when a player clicks with them: a staff that shoots fireballs, a healing medkit, an ender pearl that teleports, a grappling hook, a speed charm, with cooldowns, uses and ammo",
        keywords: ["gun", "guns", "blaster", "laser gun", "ray gun", "raygun", "wand", "wands", "magic wand", "healing wand", "staff", "magic staff", "fire staff", "fireball", "fireballs", "shoot fireballs", "grappling hook", "grapple", "grappling", "grapple hook", "teleport stick", "teleport item", "ender pearl", "ender pearls", "enderpearl", "medkit", "med kit", "healing item", "knockback stick", "push stick", "ammo", "battlegrounds", "special item", "special items", "magic item", "magic items", "custom item", "custom items", "usable items", "click to use", "rocket launcher", "dash", "spell", "spells"],
        howItPlays: 'Each entry in items is an item and what it does when a player clicks while holding it: shoot a projectile, heal, launch them up and forward, teleport them to the block they look at, pull them to it like a grappling hook, give an effect like speed, or push away the players in front of them. After a use, the item waits cooldownSeconds before it works again for that player, and says how long is left if they try sooner. With uses, one of the item is used up after that many uses (uses 1: each Medkit or Ender Pearl goes when used). With ammo, each use takes one of that item, and the item won\'t work without it. With giveOnJoin on, every player gets the items (and ammoOnJoin of each ammo) when they join and again after each respawn. Action "custom" runs customItemUse(playerId, entry), which the game can replace with its own power.',
        settings: [{
          key: "items",
          kind: "list",
          names: "item",
          value: '[{ item: "Sanguine Staff", name: "Fire Staff", action: "shoot", projectile: "Fireball", damage: 20, cooldownSeconds: 1 }, { item: "Medkit", action: "heal", amount: 40, cooldownSeconds: 5, uses: 1, give: 3 }, { item: "Teleport Heart", name: "Ender Pearl", action: "teleport", range: 30, cooldownSeconds: 3, uses: 1, give: 5 }, { item: "Iron Whip", name: "Grappling Hook", action: "grapple", range: 40, strength: 30, cooldownSeconds: 2 }, { item: "Frost Shard", name: "Speed Charm", action: "boost", effect: "Speed", level: 2, seconds: 8, cooldownSeconds: 20 }]',
          about: 'each usable item as { item, action, cooldownSeconds, ... }. action: "shoot" (projectile: "Arrow", "Snowball", "Fireball", "Iceball" or "Bullet"; damage; speed, 1 normal), "heal" (amount, 0: full health), "launch" (power upwards, forward), "teleport" (range), "grapple" (range, strength), "boost" (effect: "Speed", "Jump Boost", "Damage", "Damage Reduction", "Health Regen", "Invisible"...; level; seconds), "push" (range, power, damage) or "custom" (runs customItemUse). Optional: name (what the item is called in the game: shown on it and in messages, so a real item can be a "Magic Wand" or "Healing Staff"), uses (uses before one of the item is used up; 0 or left out: never; only when the request asks for it), ammo (an item each use takes; none left, it won\'t work; only when the request asks for ammo), give (how many each player gets)'
        }, {
          key: "giveOnJoin",
          kind: "boolean",
          value: "true",
          about: "true: every player gets the items when they join and after each respawn; false: the game gives them (a shop, a kit, a chest)"
        }, {
          key: "ammoOnJoin",
          kind: "number",
          value: "16",
          about: "how much of each item's ammo a player gets with it"
        }, {
          key: "explainOnJoin",
          kind: "boolean",
          value: "true",
          about: "true: players are told what each item does when they join"
        }],
        code: '// Usable items: clicking while holding one of CONFIG.items does its action (shoot, heal, launch, teleport, grapple,\n// boost, push or custom). Each item then waits its cooldownSeconds for that player; uses and ammo are taken as it is used.\nconst usableReadyAt = {}\nconst usableUses = {}\nconst usableWarnedAt = {}\nconst usableGiveAt = {}\nlet usableItemsHooked = false\n\nfunction onPlayerJoin(playerId) {\n\tif (!usableItemsHooked) {\n\t\tusableItemsHooked = true\n\t\tCONFIG.items.forEach((entry, index) => {\n\t\t\twhenItemUsed(entry.item, (id, x, y, z, targetId) => tryUseItem(id, index), 0.2)\n\t\t})\n\t}\n\tusableReadyAt[playerId] = {}\n\tusableUses[playerId] = {}\n\tusableWarnedAt[playerId] = 0\n\tif (CONFIG.explainOnJoin) {\n\t\tconst lines = CONFIG.items.map((entry) => usableName(entry) + ": " + entry.action)\n\t\tapi.sendMessage(playerId, "Click while holding an item to use it! " + lines.join(", "), { color: "aqua" })\n\t}\n\tif (CONFIG.giveOnJoin) {\n\t\tusableGiveAt[playerId] = Date.now() + 500\n\t}\n}\n\n// The items are given a moment after joining or respawning, so a kit the game gives then doesn\'t replace them\nfunction onRespawnRequest(playerId) {\n\tif (CONFIG.giveOnJoin) {\n\t\tusableGiveAt[playerId] = Date.now() + 500\n\t}\n}\n\nfunction tick(ms) {\n\tconst now = Date.now()\n\tfor (const playerId of Object.keys(usableGiveAt)) {\n\t\tif (now >= usableGiveAt[playerId] && api.isAlive(playerId)) {\n\t\t\tdelete usableGiveAt[playerId]\n\t\t\tgiveUsableItems(playerId)\n\t\t}\n\t}\n}\n\n// Tops each item (and its ammo) up to how many a player should have, so nobody gets doubles\nfunction giveUsableItems(playerId) {\n\tfor (const entry of CONFIG.items) {\n\t\t// The item shows as its name in the inventory, so a Medkit can be a "Magic Wand"\n\t\tconst wanted = [{ item: String(entry.item), amount: entry.give || 1, attributes: entry.name ? { customDisplayName: entry.name } : undefined }]\n\t\tif (entry.ammo) {\n\t\t\twanted.push({ item: String(entry.ammo), amount: CONFIG.ammoOnJoin, attributes: undefined })\n\t\t}\n\t\tfor (const want of wanted) {\n\t\t\ttry {\n\t\t\t\tconst missing = want.amount - api.getInventoryItemAmount(playerId, want.item)\n\t\t\t\tif (missing > 0) {\n\t\t\t\t\tapi.giveItem(playerId, want.item, missing, want.attributes)\n\t\t\t\t}\n\t\t\t} catch (error) {\n\t\t\t\t// A misspelt item is left out, so the rest (and the game) still works\n\t\t\t\tapi.sendMessage(playerId, want.item + " isn\'t an item, so it was left out.", { color: "orange" })\n\t\t\t}\n\t\t}\n\t}\n}\n\nfunction usableName(entry) {\n\treturn entry.name || entry.item\n}\n\n// A short note, at most once a second, so holding the button down doesn\'t flood the chat\nfunction usableNote(playerId, text) {\n\tconst now = Date.now()\n\tif (now - (usableWarnedAt[playerId] || 0) >= 1000) {\n\t\tusableWarnedAt[playerId] = now\n\t\tapi.sendMessage(playerId, text, { color: "orange" })\n\t}\n}\n\n// A misspelt ammo name is ammo nobody has\nfunction usableHasAmmo(playerId, ammo) {\n\ttry {\n\t\treturn api.hasItem(playerId, ammo)\n\t} catch (error) {\n\t\treturn false\n\t}\n}\n\nfunction tryUseItem(playerId, index) {\n\tconst entry = CONFIG.items[index]\n\tif (!usableReadyAt[playerId]) {\n\t\tusableReadyAt[playerId] = {}\n\t\tusableUses[playerId] = {}\n\t}\n\tconst left = (usableReadyAt[playerId][index] || 0) - Date.now()\n\tif (left > 0) {\n\t\tusableNote(playerId, usableName(entry) + " ready in " + Math.ceil(left / 1000) + "s")\n\t\treturn\n\t}\n\tif (entry.ammo && !usableHasAmmo(playerId, entry.ammo)) {\n\t\tusableNote(playerId, "You need " + entry.ammo + " to use the " + usableName(entry) + "!")\n\t\treturn\n\t}\n\t// An action that did nothing (no block in range, full health) costs no cooldown, ammo or use\n\tif (useItem(playerId, entry) === false) {\n\t\treturn\n\t}\n\tconst cooldown = (entry.cooldownSeconds || 0) * 1000\n\tusableReadyAt[playerId][index] = Date.now() + cooldown\n\tif (cooldown >= 1000) {\n\t\tapi.initiateMiddleScreenBar(playerId, cooldown)\n\t}\n\tif (entry.ammo) {\n\t\tapi.removeItemName(playerId, entry.ammo, 1)\n\t}\n\tif (entry.uses > 0) {\n\t\tusableUses[playerId][index] = (usableUses[playerId][index] || 0) + 1\n\t\tif (usableUses[playerId][index] >= entry.uses) {\n\t\t\tusableUses[playerId][index] = 0\n\t\t\tapi.removeItemName(playerId, entry.item, 1)\n\t\t}\n\t}\n}\n\n// What an item does; returns false when it did nothing, so it can be tried again straight away\nfunction useItem(playerId, entry) {\n\tif (entry.action === "shoot") {\n\t\treturn shootProjectile(playerId, { item: entry.projectile || "Arrow", speed: entry.speed || 1, damage: entry.damage }) !== null\n\t}\n\tif (entry.action === "heal") {\n\t\tconst max = api.getClientOption(playerId, "maxHealth")\n\t\tif (api.getHealth(playerId) >= max) {\n\t\t\tusableNote(playerId, "You\'re already at full health!")\n\t\t\treturn false\n\t\t}\n\t\tif (entry.amount > 0) {\n\t\t\tapi.setHealth(playerId, Math.min(max, api.getHealth(playerId) + entry.amount))\n\t\t} else {\n\t\t\thealFully(playerId)\n\t\t}\n\t\treturn true\n\t}\n\tif (entry.action === "launch") {\n\t\tconst dir = api.getPlayerFacingInfo(playerId).dir\n\t\tconst flat = Math.sqrt(dir[0] * dir[0] + dir[2] * dir[2]) || 1\n\t\tconst forward = entry.forward === undefined ? 10 : entry.forward\n\t\tapi.setVelocity(playerId, (dir[0] / flat) * forward, entry.power || 20, (dir[2] / flat) * forward)\n\t\tapi.preventFallDamageNextGrounding(playerId)\n\t\treturn true\n\t}\n\tif (entry.action === "teleport" || entry.action === "grapple") {\n\t\tconst block = aimedBlock(playerId, entry.range || 30)\n\t\tconst spot = block ? landingSpot(playerId, block) : null\n\t\tif (!spot) {\n\t\t\tusableNote(playerId, "Look at a block that\'s closer to use the " + usableName(entry) + ".")\n\t\t\treturn false\n\t\t}\n\t\tif (entry.action === "teleport") {\n\t\t\tapi.setPosition(playerId, spot[0] + 0.5, spot[1], spot[2] + 0.5)\n\t\t} else {\n\t\t\tpullTowards(playerId, [spot[0] + 0.5, spot[1], spot[2] + 0.5], entry.strength || 30)\n\t\t}\n\t\treturn true\n\t}\n\tif (entry.action === "boost") {\n\t\tapplyBoost(playerId, entry.effect || "Speed", entry.seconds || 5, entry.level || 1)\n\t\treturn true\n\t}\n\tif (entry.action === "push") {\n\t\treturn pushPlayersInFront(playerId, entry) > 0\n\t}\n\treturn customItemUse(playerId, entry)\n}\n\n// Where a player lands at the block they aimed at: on top of it if there is room, else the free spot beside it nearest them\nfunction landingSpot(playerId, block) {\n\tconst eye = api.getPlayerFacingInfo(playerId).camPos\n\tconst free = (x, y, z) => api.getBlock(x, y, z) === "Air" && api.getBlock(x, y + 1, z) === "Air"\n\tconst x = block[0]\n\tconst y = block[1]\n\tconst z = block[2]\n\tif (free(x, y + 1, z)) {\n\t\treturn [x, y + 1, z]\n\t}\n\tconst sides = [[x - 1, y, z], [x + 1, y, z], [x, y, z - 1], [x, y, z + 1], [x, y - 2, z]].filter((s) => free(s[0], s[1], s[2]))\n\tsides.sort((a, b) => Math.hypot(a[0] - eye[0], a[2] - eye[2]) - Math.hypot(b[0] - eye[0], b[2] - eye[2]))\n\treturn sides[0] || null\n}\n\n// Knocks back every other player within range in front of this one; returns how many were pushed\nfunction pushPlayersInFront(playerId, entry) {\n\tconst facing = api.getPlayerFacingInfo(playerId)\n\tconst from = api.getPosition(playerId)\n\tconst range = entry.range || 5\n\tconst power = entry.power || 15\n\tlet pushed = 0\n\tfor (const otherId of api.getPlayerIds()) {\n\t\tconst to = api.getPosition(otherId)\n\t\tconst dx = to[0] - from[0]\n\t\tconst dz = to[2] - from[2]\n\t\tconst distance = Math.sqrt(dx * dx + dz * dz)\n\t\tconst ahead = distance > 0 ? (dx * facing.dir[0] + dz * facing.dir[2]) / distance : 0\n\t\tif (otherId === playerId || !api.isAlive(otherId) || distance > range || ahead < 0.5) {\n\t\t\tcontinue\n\t\t}\n\t\tapi.setVelocity(otherId, (dx / distance) * power, power / 2, (dz / distance) * power)\n\t\tif (entry.damage > 0) {\n\t\t\tapi.applyHealthChange(otherId, -entry.damage, playerId)\n\t\t}\n\t\tpushed++\n\t}\n\tif (pushed === 0) {\n\t\tusableNote(playerId, "Nobody in front of you to push.")\n\t}\n\treturn pushed\n}\n\n// Action "custom": replace this with the item\'s own power. Return false if it did nothing (no cooldown is used)\nfunction customItemUse(playerId, entry) {\n\tapi.sendMessage(playerId, usableName(entry) + " has no power yet.", { color: "yellow" })\n\treturn false\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete usableReadyAt[playerId]\n\tdelete usableUses[playerId]\n\tdelete usableWarnedAt[playerId]\n\tdelete usableGiveAt[playerId]\n}',
        changeable: [{
          name: "useItem",
          about: "what each action does when an item is used: the shoot, heal, launch, teleport, grapple, boost and push parts"
        }, {
          name: "customItemUse",
          about: 'the power of an item with action "custom": anything the game wants (return false if it did nothing)'
        }, {
          name: "giveUsableItems",
          about: "what a player gets on join and respawn: the items and their ammo, topped up"
        }],
        setup: 'Nothing to build. Turn PvP on in your world settings for shots and pushes to hurt players; a "Fireball" shot blows up blocks, so use "Arrow" or "Snowball" to keep the world in one piece.'
      }, {
        name: "dailyReward",
        kind: "feature",
        title: "Daily reward",
        category: "economy",
        summary: "Free coins once a day with /daily (or by itself on joining), more for coming back days in a row, saved after leaving",
        keywords: ["daily", "dailys", "daily reward", "daily rewards", "reward", "rewards", "login", "login reward", "streak", "free coins", "bonus", "every day", "gift"],
        howItPlays: "Once every hoursBetween hours a player can claim dailyCoins with /daily, or gets them by themselves on joining when giveOnJoin is on. Claiming again within twice that time builds a streak: each day in a row adds streakBonus coins. Asking too early says how long is left. The last claim and the streak are saved.",
        settings: [{
          key: "dailyCoins",
          kind: "number",
          value: "50",
          about: "coins the daily reward gives"
        }, {
          key: "streakBonus",
          kind: "number",
          value: "10",
          about: "extra coins for each day in a row a player comes back (0: none)"
        }, {
          key: "hoursBetween",
          kind: "number",
          value: "24",
          about: "hours a player waits between daily rewards"
        }, {
          key: "giveOnJoin",
          kind: "boolean",
          value: "true",
          about: "true: the reward is given by itself when a player joins, if it is ready"
        }, {
          key: "saveCoins",
          kind: "boolean",
          value: "true",
          about: "true: coins are kept after a player leaves"
        }],
        code: '// Daily reward: /daily gives coins once a day, and joining gives them too when they are ready. Coming back day after\n// day builds a streak worth more coins. The time of the last reward is saved, so leaving doesn\'t reset it.\nfunction onPlayerJoin(playerId) {\n\tif (CONFIG.giveOnJoin) {\n\t\tclaimDailyReward(playerId)\n\t}\n}\n\nfunction waitText(ms) {\n\tconst minutes = Math.ceil(ms / 60000)\n\tconst hours = Math.floor(minutes / 60)\n\tif (hours === 0) {\n\t\treturn minutes + "m"\n\t}\n\treturn minutes % 60 === 0 ? hours + "h" : hours + "h " + (minutes % 60) + "m"\n}\n\nfunction claimDailyReward(playerId) {\n\tconst waitMs = CONFIG.hoursBetween * 60 * 60 * 1000\n\tconst last = Number(getSaved(playerId, "dailyLast", 0))\n\tconst now = Date.now()\n\tif (now - last < waitMs) {\n\t\tapi.sendMessage(playerId, "Your next daily reward is ready in " + waitText(last + waitMs - now) + ".", { color: "yellow" })\n\t\treturn\n\t}\n\tconst streak = now - last < waitMs * 2 ? Number(getSaved(playerId, "dailyStreak", 0)) + 1 : 1\n\tsetSaved(playerId, "dailyLast", now)\n\tsetSaved(playerId, "dailyStreak", streak)\n\tgiveDailyReward(playerId, streak)\n}\n\nfunction giveDailyReward(playerId, streak) {\n\tconst coins = CONFIG.dailyCoins + CONFIG.streakBonus * (streak - 1)\n\taddCoins(playerId, coins)\n\tconst streakText = streak > 1 ? " That\'s " + streak + " days in a row!" : ""\n\tapi.sendMessage(playerId, "Daily reward: +" + coins + " coins!" + streakText + " Come back in " + waitText(CONFIG.hoursBetween * 60 * 60 * 1000) + " for the next one.", { color: "lime" })\n}\n\nfunction playerCommand(playerId, command) {\n\tif (command.trim().toLowerCase() === "daily") {\n\t\tclaimDailyReward(playerId)\n\t\treturn true\n\t}\n\treturn false\n}',
        changeable: [{
          name: "giveDailyReward",
          about: "what the daily reward gives for a streak of days (coins, items, a kit...)"
        }]
      }, {
        name: "luckyBlocks",
        kind: "feature",
        title: "Lucky blocks",
        category: "world",
        summary: "Breaking a lucky block gives a random surprise: items, coins, a mob or a short effect, told to the player",
        keywords: ["mystery box", "lucky", "lucky block", "lucky blocks", "luckyblock", "luck", "luky", "surprise", "mystery block", "loot", "chance", "gamble", "prize"],
        howItPlays: "Breaking a luckyBlock gives one random reward, every one equally likely: one of rewardItems, rewardCoins coins, one of rewardMobs appearing on the spot, or one of rewardEffects for effectSeconds. The player is told what they got. The block drops nothing else.",
        settings: [{
          key: "luckyBlock",
          kind: "block",
          value: '"Lucky Block"',
          about: "breaking this block gives a random reward"
        }, {
          key: "rewardItems",
          kind: "list",
          names: "item",
          value: '[["Diamond", 3], ["Iron Sword", 1], ["Bread", 5], ["Gold Bar", 4]]',
          about: "items it may give, each [item, how many] ([] for none)"
        }, {
          key: "rewardCoins",
          kind: "number",
          value: "25",
          about: "coins it may give (0: never coins)"
        }, {
          key: "rewardMobs",
          kind: "list",
          names: "mob",
          value: '["Cow", "Draugr Zombie"]',
          about: "mobs that may jump out, one at a time ([] for none; mobs must be allowed)"
        }, {
          key: "rewardEffects",
          kind: "list",
          value: '["Speed", "Jump Boost", "Slowness"]',
          about: 'effects it may give, like "Speed", "Jump Boost", "Invisible", "Slowness" ([] for none)'
        }, {
          key: "effectSeconds",
          kind: "number",
          value: "15",
          about: "how long an effect lasts, in seconds"
        }],
        code: '// Lucky blocks: breaking a lucky block gives a random reward (items, coins, a mob or an effect) and says what it was.\nfunction luckyRewards() {\n\tconst rewards = []\n\tfor (const entry of CONFIG.rewardItems) {\n\t\trewards.push({ kind: "item", name: entry[0], amount: entry[1] || 1 })\n\t}\n\tif (CONFIG.rewardCoins > 0) {\n\t\trewards.push({ kind: "coins", amount: CONFIG.rewardCoins })\n\t}\n\tfor (const mob of CONFIG.rewardMobs) {\n\t\trewards.push({ kind: "mob", name: mob })\n\t}\n\tfor (const effect of CONFIG.rewardEffects) {\n\t\trewards.push({ kind: "effect", name: effect })\n\t}\n\treturn rewards\n}\n\nfunction giveLuckyReward(playerId, reward, x, y, z) {\n\tlet text = "nothing this time!"\n\tif (reward.kind === "item") {\n\t\tapi.giveItem(playerId, reward.name, reward.amount)\n\t\ttext = reward.amount + " " + reward.name + "!"\n\t} else if (reward.kind === "coins") {\n\t\taddCoins(playerId, reward.amount)\n\t\ttext = reward.amount + " coins!"\n\t} else if (reward.kind === "mob") {\n\t\tif (spawnMobs(reward.name, 1, [x + 0.5, y, z + 0.5], 0).length > 0) {\n\t\t\ttext = "a " + reward.name + " jumped out!"\n\t\t}\n\t} else if (reward.kind === "effect") {\n\t\tapi.applyEffect(playerId, reward.name, CONFIG.effectSeconds * 1000, { inbuiltLevel: 1 })\n\t\ttext = reward.name + " for " + CONFIG.effectSeconds + " seconds!"\n\t}\n\tapi.sendMessage(playerId, "Lucky block: " + text, { color: "gold" })\n\tapi.sendFlyingMiddleMessage(playerId, text, 1)\n}\n\nfunction onPlayerChangeBlock(playerId, x, y, z, fromBlock, toBlock) {\n\tif (fromBlock === CONFIG.luckyBlock && toBlock === "Air") {\n\t\tconst reward = pickRandom(luckyRewards())\n\t\tif (reward) {\n\t\t\tgiveLuckyReward(playerId, reward, x, y, z)\n\t\t}\n\t\treturn "preventDrop"\n\t}\n}',
        changeable: [{
          name: "giveLuckyReward",
          about: "what each kind of reward does and what the player is told"
        }],
        setup: "Put lucky blocks in your world; for mob rewards, mobs must be allowed in the world settings."
      }, {
        name: "jumpPads",
        kind: "feature",
        title: "Jump pads and speed pads",
        category: "parkour",
        summary: "Standing on a pad block launches a player up and forward, and a speed block gives a short speed boost",
        keywords: ["jump pad", "jump pads", "jumppad", "jumppads", "launch pad", "launchpad", "bounce", "bouncy", "boost", "booster", "speed pad", "speed boost", "trampoline", "launch", "fling"],
        howItPlays: "Standing on a padBlock launches the player upwards with launchPower, and forwards the way they face with forwardPower (0 for straight up). Standing on a speedBlock makes them run faster for speedSeconds. After a pad or speed block works, it waits cooldownSeconds before it works again for that player.",
        settings: [{
          key: "padBlock",
          kind: "block",
          value: '"Block of Emerald"',
          about: "standing on this block launches a player"
        }, {
          key: "launchPower",
          kind: "number",
          value: "20",
          about: "how hard a pad launches a player upwards (a normal jump is about 9)"
        }, {
          key: "forwardPower",
          kind: "number",
          value: "10",
          about: "how hard a pad pushes a player forwards, the way they face (0: straight up)"
        }, {
          key: "speedBlock",
          kind: "block",
          value: '"Block of Lapis Lazuli"',
          about: "standing on this block gives a speed boost"
        }, {
          key: "speedSeconds",
          kind: "number",
          value: "5",
          about: "how long a speed boost lasts, in seconds"
        }, {
          key: "speedLevel",
          kind: "number",
          value: "2",
          about: "how strong a speed boost is (1 to 5)"
        }, {
          key: "cooldownSeconds",
          kind: "number",
          value: "1",
          about: "seconds before the same kind of pad works again for a player"
        }],
        code: '// Jump pads: standing on a pad block launches you up, and forwards the way you face. Standing on a speed block\n// makes you run faster for a few seconds. Each pad waits a moment before it works again for the same player.\nconst padLastUsed = {}\n\nfunction onBlockStand(playerId, x, y, z, blockName) {\n\tif (blockName === CONFIG.padBlock && padIsReady(playerId, "jump")) {\n\t\tlaunchPlayer(playerId)\n\t} else if (blockName === CONFIG.speedBlock && padIsReady(playerId, "speed")) {\n\t\tgiveSpeedBoost(playerId)\n\t}\n}\n\n// Whether this kind of pad can work for the player again yet, and if so, starts its wait\nfunction padIsReady(playerId, kind) {\n\tif (!padLastUsed[playerId]) {\n\t\tpadLastUsed[playerId] = {}\n\t}\n\tconst now = Date.now()\n\tconst last = padLastUsed[playerId][kind]\n\tif (last !== undefined && now - last < CONFIG.cooldownSeconds * 1000) {\n\t\treturn false\n\t}\n\tpadLastUsed[playerId][kind] = now\n\treturn true\n}\n\nfunction launchPlayer(playerId) {\n\tlet pushX = 0\n\tlet pushZ = 0\n\tif (CONFIG.forwardPower > 0) {\n\t\t// The way the player faces, flat along the ground\n\t\tconst facing = api.getPlayerFacingInfo(playerId).dir\n\t\tconst length = Math.sqrt(facing[0] * facing[0] + facing[2] * facing[2])\n\t\tif (length > 0) {\n\t\t\tpushX = (facing[0] / length) * CONFIG.forwardPower\n\t\t\tpushZ = (facing[2] / length) * CONFIG.forwardPower\n\t\t}\n\t}\n\tapi.setVelocity(playerId, pushX, CONFIG.launchPower, pushZ)\n\tapi.preventFallDamageNextGrounding(playerId)\n}\n\nfunction giveSpeedBoost(playerId) {\n\tapi.applyEffect(playerId, "Speed", CONFIG.speedSeconds * 1000, { inbuiltLevel: CONFIG.speedLevel })\n\tapi.sendMessage(playerId, "Speed boost!", { color: "aqua" })\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete padLastUsed[playerId]\n}',
        changeable: [{
          name: "launchPlayer",
          about: "what a jump pad does to a player: how high and which way they fly"
        }, {
          name: "giveSpeedBoost",
          about: "what a speed block gives a player: the effect, how long, the message"
        }],
        setup: "Put pad blocks and speed blocks where players should be launched or sped up."
      }, {
        name: "abilities",
        kind: "feature",
        title: "Player abilities",
        category: "players",
        summary: "Powers every player has from joining and after respawning: double jump, higher jumps, low gravity, speed, more health, no fall damage, always night and flying",
        keywords: ["abilities", "ability", "powers", "power", "perks", "perk", "super powers", "superpowers", "double jump", "doublejump", "double jumps", "triple jump", "air jump", "moon jump", "moon gravity", "low gravity", "lowgravity", "less gravity", "jump higher", "high jump", "super jump", "jump boots", "jump boost", "fly", "flying", "flight", "/fly", "speed perk", "speed power", "always fast", "run faster", "super speed", "faster", "more health", "extra health", "more hearts", "always night", "night mode", "dark mode", "no fall damage", "no fall", "fall damage"],
        howItPlays: "Every player gets the same abilities when they join, and again after each respawn. doubleJump is how many extra jumps they get in the air. jumpBoost makes jumps higher and speedBoost makes them run faster (1 is normal for both). lowGravity below 1 makes them fall slowly, like on the moon. maxHealth sets how much health they have. noFallDamage turns fall damage off. alwaysNight makes the world dark and blue like night. With canFly on, everyone can fly (tap jump twice, then jump to go up and crouch to go down), and with flyCommand on, a player can type /fly to switch flying on and off for themselves.",
        settings: [{
          key: "doubleJump",
          kind: "number",
          value: "1",
          about: "extra jumps in the air: 1 is a double jump, 2 a triple jump, 0 none"
        }, {
          key: "jumpBoost",
          kind: "number",
          value: "1.5",
          about: "how high players jump: 1 is normal, 1.5 higher, 2 super high"
        }, {
          key: "speedBoost",
          kind: "number",
          value: "1.3",
          about: "how fast players run: 1 is normal, 2 twice as fast"
        }, {
          key: "lowGravity",
          kind: "number",
          value: "1",
          about: "how hard gravity pulls: 1 is normal, 0.4 is like the moon (floaty jumps and slow falls)"
        }, {
          key: "maxHealth",
          kind: "number",
          value: "100",
          about: "how much health each player has (100 is normal, 200 is double)"
        }, {
          key: "noFallDamage",
          kind: "boolean",
          value: "false",
          about: "true: players never take damage from falling"
        }, {
          key: "alwaysNight",
          kind: "boolean",
          value: "false",
          about: "true: the world is dark and blue like night for every player"
        }, {
          key: "canFly",
          kind: "boolean",
          value: "false",
          about: "true: every player can fly from the moment they join"
        }, {
          key: "flyCommand",
          kind: "boolean",
          value: "false",
          about: "true: a player can type /fly to switch their own flying on or off (flying is creative mode, so they can build freely too)"
        }],
        code: '// Abilities: every player gets the powers in CONFIG when they join and again after they respawn. A setting left at\n// its normal value (jumpBoost 1, speedBoost 1, lowGravity 1, maxHealth 100) is not touched. /fly switches flying on or off.\nconst flying = {}\nlet flyCommandAdded = false\n\nfunction onPlayerJoin(playerId) {\n\tif (CONFIG.flyCommand && !flyCommandAdded) {\n\t\tflyCommandAdded = true\n\t\taddCommand("fly", (id) => toggleFlying(id))\n\t}\n\tflying[playerId] = CONFIG.canFly\n\tgiveAbilities(playerId)\n}\n\n// This runs just before a player comes back from dying, so the abilities are there when they are\nfunction onRespawnRequest(playerId) {\n\tgiveAbilities(playerId)\n}\n\nfunction giveAbilities(playerId) {\n\tif (CONFIG.doubleJump > 0) {\n\t\tsetAbility(playerId, "doubleJump", CONFIG.doubleJump)\n\t}\n\tif (CONFIG.jumpBoost !== 1) {\n\t\tsetAbility(playerId, "jump", CONFIG.jumpBoost)\n\t}\n\tif (CONFIG.speedBoost !== 1) {\n\t\tsetAbility(playerId, "speed", CONFIG.speedBoost)\n\t}\n\tif (CONFIG.lowGravity !== 1) {\n\t\tapi.setClientOption(playerId, "gravityMultiplier", CONFIG.lowGravity)\n\t}\n\tif (CONFIG.maxHealth !== 100) {\n\t\tsetAbility(playerId, "maxHealth", CONFIG.maxHealth)\n\t}\n\tif (CONFIG.noFallDamage) {\n\t\tsetAbility(playerId, "fallDamage", false)\n\t}\n\tif (CONFIG.alwaysNight) {\n\t\tapi.setClientOption(playerId, "skyLightColourOverride", "#1a2255")\n\t}\n\tif (flying[playerId]) {\n\t\tapi.setClientOption(playerId, "creative", true)\n\t}\n}\n\nfunction toggleFlying(playerId) {\n\tflying[playerId] = !flying[playerId]\n\tapi.setClientOption(playerId, "creative", flying[playerId])\n\tif (flying[playerId]) {\n\t\tapi.sendMessage(playerId, "Flying on! Tap jump twice to take off. Type /fly to stop.", { color: "aqua" })\n\t} else {\n\t\tapi.sendMessage(playerId, "Flying off.", { color: "aqua" })\n\t}\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete flying[playerId]\n}',
        changeable: [{
          name: "giveAbilities",
          about: "which abilities a player gets and how strong: the setAbility and client option lines"
        }],
        setup: "Flying uses creative mode, so a player who is flying can also place blocks freely: turn off block changes in the world if they shouldn't build."
      }, {
        name: "serverBasics",
        kind: "feature",
        title: "Server basics",
        category: "players",
        summary: "What every server needs: a welcome message and rules, /spawn, /tpa to visit a friend, admin commands (/kick, /tp, /tphere, /announce), a friends-only list, blocks near spawn only admins can change, and small rules: a kill feed, PvP off, respawn protection, no hostile mobs and /pay",
        keywords: ["server", "my server", "server basics", "smp", "welcome", "welcome message", "rules", "server rules", "tp to spawn", "back to spawn", "tpa", "tpaccept", "teleport to friend", "teleport to a friend", "tp to friend", "admin", "admins", "admin commands", "admin only", "only for me", "kick", "kick players", "moderator", "mod commands", "announce", "announcement", "friends only", "only my friends", "whitelist", "white list", "private server", "spawn protection", "protect spawn", "kill feed", "a kill feed", "killfeed", "death messages", "kill messages", "respawn protection", "spawn invincibility", "no pvp", "pvp off", "turn pvp off", "turn off pvp", "disable pvp", "peaceful", "no hostile mobs", "no monsters", "pay", "pay command", "send coins", "give coins"],
        howItPlays: 'Joining shows welcomeMessage, the rules and the commands; /rules shows the rules again. /spawn sends a player to spawnPosition. With allowTpa, /tpa <name> asks that player, who types /tpaccept (or /tpdeny) within a minute. Players named in admins are admins: with adminCommands on they get /kick <name>, /tp <name> (go to them), /tphere <name> (bring them) and /announce <text>. When friendsOnly has names, anyone else who joins is kicked with a message (admins always get in). Nobody but admins can break or place blocks within spawnProtectRadius blocks of spawnPosition (side to side, any height). With killFeed, everyone is told "Alice killed Bob", "Bob was killed by a Draugr Zombie", or "Bob died" when they respawn after any other death (a fall, lava). With pvp "off" players can\'t hurt each other anywhere. With respawnProtectSeconds, a player who respawns can\'t be hurt by players for that long (hitting someone ends it early) and is told so; Bloxd itself already protects them for the first 5 seconds. With noHostileMobs, mobs that attack on sight (zombies, skeletons, golems, bears) that the world spawns by itself are taken away at once; mobs spawnMobs spawns stay, and so do api.attemptSpawnMob\'s unless put exactly in a block\'s middle (x and z ending in .5). With payCommand, /pay <name> <amount> gives that many of the player\'s coins to another player. Names can be typed in any case or just their start: /tp ali. Other code can call isAdmin(playerId).',
        settings: [{
          key: "admins",
          kind: "list",
          value: "[]",
          about: 'Bloxd names of the admins, e.g. ["YourName"]; they get the admin commands and can build at spawn'
        }, {
          key: "welcomeMessage",
          kind: "string",
          value: '"Welcome to the server! Have fun!"',
          about: "the message a player gets when they join"
        }, {
          key: "rules",
          kind: "list",
          value: '["Be kind to everyone", "No griefing other people\'s builds", "No spamming the chat"]',
          about: "the rules, one text each, shown when a player joins and with /rules ([] for none)"
        }, {
          key: "spawnPosition",
          kind: "position",
          value: "[0, 10, 0]",
          about: "where /spawn sends players, and the middle of spawn protection"
        }, {
          key: "allowTpa",
          kind: "boolean",
          value: "true",
          about: "true: /tpa <name> asks to teleport to a player, who says yes with /tpaccept"
        }, {
          key: "adminCommands",
          kind: "boolean",
          value: "true",
          about: "true: admins get /kick, /tp, /tphere and /announce"
        }, {
          key: "friendsOnly",
          kind: "list",
          value: "[]",
          about: "names allowed in; anyone else is kicked when they join ([]: everyone can join)"
        }, {
          key: "spawnProtectRadius",
          kind: "number",
          value: "10",
          about: "blocks around spawnPosition that only admins can break or place (0: none)"
        }, {
          key: "killFeed",
          kind: "boolean",
          value: "false",
          about: 'true: everyone is told who killed who, e.g. "Alice killed Bob", and when a player dies'
        }, {
          key: "pvp",
          kind: "string",
          value: '"on"',
          about: '"on": players can hurt each other; "off": they can\'t, anywhere'
        }, {
          key: "respawnProtectSeconds",
          kind: "number",
          value: "0",
          about: "seconds after respawning that other players can't hurt a player; Bloxd already gives 5, so use more (0: just those 5)"
        }, {
          key: "noHostileMobs",
          kind: "boolean",
          value: "false",
          about: "true: mobs that attack on sight don't spawn by themselves (mobs the code spawns still do)"
        }, {
          key: "payCommand",
          kind: "boolean",
          value: "false",
          about: "true: /pay <name> <amount> gives some of a player's coins to another player (coins another prefab or addCoins gives; a world without coins says so)"
        }],
        code: '// Server basics: a welcome message and the rules when a player joins, /rules, /spawn, /tpa to visit a friend, admin\n// commands (/kick, /tp, /tphere, /announce) for the names in admins, a friends-only list, and spawn protection.\nconst tpaRequests = {}\n// When each respawned player\'s protection from other players ends (an api.now() time)\nconst protectedUntil = {}\n// Players whose death the kill feed told already\nconst killTold = {}\nconst hostileMobsToRemove = []\n\nfunction sameName(a, b) {\n\treturn String(a).toLowerCase() === String(b).toLowerCase()\n}\n\nfunction isAdmin(playerId) {\n\treturn CONFIG.admins.some((name) => sameName(name, api.getEntityName(playerId)))\n}\n\n// A player in the world by name, in any case, or by the start of their name\nfunction findPlayer(name) {\n\tconst wanted = String(name || "").toLowerCase()\n\tconst ids = api.getPlayerIds()\n\tif (wanted === "") {\n\t\treturn null\n\t}\n\treturn ids.find((id) => sameName(api.getEntityName(id), wanted)) || ids.find((id) => api.getEntityName(id).toLowerCase().startsWith(wanted)) || null\n}\n\nfunction onPlayerJoin(playerId) {\n\tconst name = api.getEntityName(playerId)\n\tif (CONFIG.friendsOnly.length > 0 && !isAdmin(playerId) && !CONFIG.friendsOnly.some((friend) => sameName(friend, name))) {\n\t\tapi.kickPlayer(playerId, "Sorry, only the owner\'s friends can join this world.")\n\t\treturn\n\t}\n\tapi.sendMessage(playerId, CONFIG.welcomeMessage, { color: "lime" })\n\tshowRules(playerId)\n\tconst commands = ["/rules", "/spawn"].concat(CONFIG.allowTpa ? ["/tpa <name>"] : [], CONFIG.payCommand ? ["/pay <name> <amount>"] : [], CONFIG.adminCommands && isAdmin(playerId) ? ["/kick", "/tp", "/tphere", "/announce"] : [])\n\tapi.sendMessage(playerId, "Commands: " + commands.join(", "), { color: "yellow" })\n}\n\nfunction showRules(playerId) {\n\tif (CONFIG.rules.length > 0) {\n\t\tapi.sendMessage(playerId, "Rules:\\n" + CONFIG.rules.map((rule, index) => index + 1 + ". " + rule).join("\\n"), { color: "aqua" })\n\t}\n}\n\nfunction askToTeleport(playerId, name) {\n\tconst target = findPlayer(name)\n\tif (target === null || target === playerId) {\n\t\tapi.sendMessage(playerId, "Type /tpa and the name of a player in the world, like /tpa Alex.", { color: "orange" })\n\t\treturn\n\t}\n\ttpaRequests[target] = { from: playerId, at: api.now() }\n\tapi.sendMessage(target, api.getEntityName(playerId) + " wants to teleport to you. Type /tpaccept to say yes or /tpdeny to say no.", { color: "yellow" })\n\tapi.sendMessage(playerId, "Asked " + api.getEntityName(target) + ". Wait for them to say yes.", { color: "lime" })\n}\n\nfunction answerTeleport(playerId, accepted) {\n\tconst request = tpaRequests[playerId]\n\tdelete tpaRequests[playerId]\n\tif (!request || api.now() - request.at > 60000 || !api.playerIsInGame(request.from)) {\n\t\tapi.sendMessage(playerId, "Nobody is asking to teleport to you.", { color: "orange" })\n\t\treturn\n\t}\n\tif (accepted) {\n\t\tapi.setPosition(request.from, api.getPosition(playerId))\n\t\tapi.sendMessage(request.from, api.getEntityName(playerId) + " said yes!", { color: "lime" })\n\t} else {\n\t\tapi.sendMessage(request.from, api.getEntityName(playerId) + " said no.", { color: "orange" })\n\t}\n\tapi.sendMessage(playerId, accepted ? "Teleported them to you." : "Said no.", { color: "lime" })\n}\n\n// The admin commands; true when the command was one of them\nfunction adminCommand(playerId, word, rest) {\n\tif (["kick", "tp", "tphere", "announce"].indexOf(word) === -1) {\n\t\treturn false\n\t}\n\tif (!isAdmin(playerId)) {\n\t\tapi.sendMessage(playerId, "Only admins can use /" + word + ".", { color: "orange" })\n\t\treturn true\n\t}\n\tif (word === "announce" && rest !== "") {\n\t\tannounce(rest, "gold")\n\t\treturn true\n\t}\n\tconst target = word === "announce" ? null : findPlayer(rest)\n\tif (target === null || target === playerId) {\n\t\tapi.sendMessage(playerId, "Type /" + word + (word === "announce" ? " and your message." : " and the name of a player in the world."), { color: "orange" })\n\t} else if (word === "kick") {\n\t\tapi.kickPlayer(target, "You were kicked by an admin.")\n\t\tapi.broadcastMessage(api.getEntityName(target) + " was kicked.", { color: "orange" })\n\t} else if (word === "tp") {\n\t\tapi.setPosition(playerId, api.getPosition(target))\n\t} else {\n\t\tapi.setPosition(target, api.getPosition(playerId))\n\t\tapi.sendMessage(target, "An admin brought you to them.", { color: "yellow" })\n\t}\n\treturn true\n}\n\n// /pay <name> <amount>: moves whole coins from the player to another player\nfunction pay(playerId, rest) {\n\tconst words = rest.split(" ").filter((w) => w !== "")\n\tconst amount = Number(words.pop())\n\tconst target = findPlayer(words.join(" "))\n\tif (target !== null && target === playerId) {\n\t\tapi.sendMessage(playerId, "You can\'t pay yourself.", { color: "orange" })\n\t\treturn\n\t}\n\tif (target === null || !Number.isInteger(amount) || amount <= 0) {\n\t\tapi.sendMessage(playerId, "Type /pay, a player\'s name and how many coins, like /pay Alex 10.", { color: "orange" })\n\t\treturn\n\t}\n\t// The coins another prefab or addCoins gives; read straight, so a world without coins doesn\'t get them from this\n\tconst have = api.getCurrencyAmount(playerId, "coins")\n\tconst theirs = api.getCurrencyAmount(target, "coins")\n\tif (have === null || theirs === null) {\n\t\tapi.sendMessage(playerId, "There are no coins in this world to pay with.", { color: "orange" })\n\t} else if (have < amount) {\n\t\tapi.sendMessage(playerId, "You only have " + have + " coins.", { color: "orange" })\n\t} else {\n\t\t// Not addCoins: a double-coins event doesn\'t double coins that are only moved\n\t\tapi.setCurrencyAmount(playerId, "coins", have - amount)\n\t\tapi.setCurrencyAmount(target, "coins", theirs + amount)\n\t\tapi.sendMessage(playerId, "You paid " + api.getEntityName(target) + " " + amount + " coins.", { color: "lime" })\n\t\tapi.sendMessage(target, api.getEntityName(playerId) + " paid you " + amount + " coins!", { color: "lime" })\n\t}\n}\n\nfunction playerCommand(playerId, command) {\n\tconst words = command.trim().split(" ")\n\tconst word = words[0].toLowerCase()\n\tconst rest = words.slice(1).join(" ").trim()\n\tif (word === "rules") {\n\t\tshowRules(playerId)\n\t} else if (word === "spawn") {\n\t\tapi.setPosition(playerId, CONFIG.spawnPosition)\n\t\tapi.sendMessage(playerId, "Back to spawn!", { color: "lime" })\n\t} else if (CONFIG.allowTpa && word === "tpa") {\n\t\taskToTeleport(playerId, rest)\n\t} else if (CONFIG.allowTpa && (word === "tpaccept" || word === "tpdeny")) {\n\t\tanswerTeleport(playerId, word === "tpaccept")\n\t} else if (CONFIG.payCommand && word === "pay") {\n\t\tpay(playerId, rest)\n\t} else {\n\t\treturn CONFIG.adminCommands && adminCommand(playerId, word, rest)\n\t}\n\treturn true\n}\n\n// Blocks near spawn: only admins can change them\nfunction onPlayerAttemptChangeBlock(playerId, x, y, z) {\n\tconst radius = CONFIG.spawnProtectRadius\n\tif (radius > 0 && Math.abs(x - CONFIG.spawnPosition[0]) <= radius && Math.abs(z - CONFIG.spawnPosition[2]) <= radius && !isAdmin(playerId)) {\n\t\tapi.sendMessage(playerId, "Blocks near spawn are protected.", { color: "orange" })\n\t\treturn "preventChange"\n\t}\n}\n\n// PvP off stops all damage between players; a player who just respawned can\'t be hurt by players until they hit someone\nfunction onPlayerDamagingOtherPlayer(attackingPlayer, damagedPlayer) {\n\tif (CONFIG.pvp === "off" || api.now() < (protectedUntil[damagedPlayer] || 0)) {\n\t\treturn "preventDamage"\n\t}\n\tdelete protectedUntil[attackingPlayer]\n}\n\n// Every death ends with a respawn request: one nobody was told about (a fall, lava, the void) is told now\nfunction onRespawnRequest(playerId) {\n\tif (CONFIG.killFeed && !killTold[playerId]) {\n\t\tapi.broadcastMessage(api.getEntityName(playerId) + " died", { color: "red" })\n\t}\n\tdelete killTold[playerId]\n\tif (CONFIG.respawnProtectSeconds > 0) {\n\t\tprotectedUntil[playerId] = api.now() + CONFIG.respawnProtectSeconds * 1000\n\t\tapi.sendMessage(playerId, "Other players can\'t hurt you for " + CONFIG.respawnProtectSeconds + " seconds.", { color: "aqua" })\n\t}\n}\n\n// Kill feed: who killed who, told to everyone\nfunction onPlayerKilledOtherPlayer(attackingPlayer, killedPlayer) {\n\tif (CONFIG.killFeed) {\n\t\tconst killed = api.getEntityName(killedPlayer)\n\t\tapi.broadcastMessage(attackingPlayer === killedPlayer ? killed + " died" : api.getEntityName(attackingPlayer) + " killed " + killed, { color: "red" })\n\t\tkillTold[killedPlayer] = true\n\t}\n}\n\nfunction onMobKilledPlayer(attackingMob, killedPlayer) {\n\tif (CONFIG.killFeed) {\n\t\tapi.broadcastMessage(api.getEntityName(killedPlayer) + " was killed by a " + api.getEntityType(attackingMob), { color: "red" })\n\t\tkillTold[killedPlayer] = true\n\t}\n}\n\n// Mobs that attack on sight and that the world spawned by itself are taken away on the next tick. The world puts its\n// own in the middle of a block, x and z ending in .5 and y whole; code\'s spawns go through this too, so a mob that\n// spawnMobs keeps stays wherever it is\nfunction onWorldSpawnMob(mobId, mobType, x, y, z) {\n\tconst blockMiddle = Math.abs(x % 1) === 0.5 && Math.abs(z % 1) === 0.5 && y % 1 === 0\n\tif (CONFIG.noHostileMobs && blockMiddle && api.getDefaultMobSetting(mobType, "hostilityRadius") > 0) {\n\t\thostileMobsToRemove.push(mobId)\n\t}\n}\n\nfunction tick() {\n\twhile (hostileMobsToRemove.length > 0) {\n\t\tconst mobId = hostileMobsToRemove.pop()\n\t\tif (typeof spawnedMobs === "undefined" || spawnedMobs.indexOf(mobId) === -1) {\n\t\t\tapi.despawnMob(mobId)\n\t\t}\n\t}\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete tpaRequests[playerId]\n\tdelete protectedUntil[playerId]\n\tdelete killTold[playerId]\n}',
        changeable: [{
          name: "isAdmin",
          about: "who counts as an admin, e.g. also players with a saved VIP value"
        }, {
          name: "adminCommand",
          about: "the admin commands and what each does: add /heal, /give or /fly"
        }],
        setup: "Put your own Bloxd name in admins to get the admin commands, and set spawnPosition to where players should start."
      }],
      Hn = [{
        group: "timers",
        code: "// Ready-made timers: runLater(seconds, fn) runs fn once after some seconds, repeatEvery(seconds, fn) runs it every\n// few seconds, and cancelTimer(id) stops either. Time is counted in tick. The list is a var made on first use, so\n// they can be called from the top of the file, above this code.\nvar timerList\nvar nextTimerId\n\nfunction runLater(seconds, fn) {\n\treturn addToTimerList(seconds, 0, fn)\n}\n\nfunction repeatEvery(seconds, fn) {\n\treturn addToTimerList(seconds, Math.max(50, seconds * 1000), fn)\n}\n\nfunction addToTimerList(seconds, everyMs, fn) {\n\tif (!timerList) {\n\t\ttimerList = []\n\t\tnextTimerId = 1\n\t}\n\tconst id = nextTimerId++\n\ttimerList.push({ id: id, msLeft: seconds * 1000, everyMs: everyMs, fn: fn })\n\treturn id\n}\n\nfunction cancelTimer(id) {\n\tconst index = timerList ? timerList.findIndex((timer) => timer.id === id) : -1\n\tif (index !== -1) {\n\t\ttimerList.splice(index, 1)\n\t}\n}\n\nfunction tick(ms) {\n\tif (!timerList) {\n\t\treturn\n\t}\n\tfor (const timer of timerList.slice()) {\n\t\tif (!timerList.includes(timer)) {\n\t\t\tcontinue\n\t\t}\n\t\ttimer.msLeft -= ms\n\t\tif (timer.msLeft > 0) {\n\t\t\tcontinue\n\t\t}\n\t\tif (timer.everyMs > 0) {\n\t\t\ttimer.msLeft += timer.everyMs\n\t\t} else {\n\t\t\tcancelTimer(timer.id)\n\t\t}\n\t\ttimer.fn()\n\t}\n}",
        helpers: [{
          name: "runLater",
          category: "rounds",
          signature: "runLater(seconds, fn)",
          about: "Runs fn once, after some seconds. Returns an id for cancelTimer.",
          example: 'runLater(5, () => api.broadcastMessage("5 seconds later!"))'
        }, {
          name: "repeatEvery",
          category: "rounds",
          signature: "repeatEvery(seconds, fn)",
          about: "Runs fn every few seconds, until cancelTimer(id). Returns the id.",
          example: 'repeatEvery(10, () => spawnMobs("Draugr Zombie", 3, [0, 10, 0], 5))'
        }, {
          name: "cancelTimer",
          category: "rounds",
          signature: "cancelTimer(id)",
          about: "Stops a runLater or repeatEvery before it runs again.",
          example: "cancelTimer(waveTimer)"
        }]
      }, {
        group: "countdown",
        code: '// Ready-made countdown: startCountdown(seconds, onDone) shows the seconds left big in the middle of everyone\'s screen,\n// then "Go!", then runs onDone. cancelCountdown() stops it.\nlet countdownTimer = null\nlet countdownClearTimer = null\n\nfunction startCountdown(seconds, onDone) {\n\tcancelCountdown()\n\tlet left = Math.max(1, Math.round(seconds))\n\tshowCountdownText(String(left))\n\tcountdownTimer = repeatEvery(1, () => {\n\t\tleft--\n\t\tif (left > 0) {\n\t\t\tshowCountdownText(String(left))\n\t\t\treturn\n\t\t}\n\t\tcancelCountdown()\n\t\tshowCountdownText("Go!")\n\t\tcountdownClearTimer = runLater(1, () => {\n\t\t\tcountdownClearTimer = null\n\t\t\tshowCountdownText("")\n\t\t})\n\t\tonDone()\n\t})\n}\n\n// A countdown stopped part way takes its number off the screen too\nfunction cancelCountdown() {\n\tif (countdownTimer === null && countdownClearTimer === null) {\n\t\treturn\n\t}\n\tcancelTimer(countdownTimer)\n\tcancelTimer(countdownClearTimer)\n\tcountdownTimer = null\n\tcountdownClearTimer = null\n\tshowCountdownText("")\n}\n\nfunction showCountdownText(text) {\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tapi.setClientOption(playerId, "middleTextUpper", text)\n\t}\n}',
        uses: ["runLater"],
        helpers: [{
          name: "startCountdown",
          category: "rounds",
          signature: "startCountdown(seconds, onDone)",
          about: 'Shows the seconds left big in the middle of everyone\'s screen (3, 2, 1, "Go!"), then runs onDone.',
          example: "startCountdown(10, () => startRound())"
        }, {
          name: "cancelCountdown",
          category: "rounds",
          signature: "cancelCountdown()",
          about: "Stops the countdown before it ends, e.g. when a player leaves and too few are left.",
          example: "cancelCountdown()"
        }]
      }, {
        group: "rounds",
        code: 'const CONFIG = {\n\tminPlayers: 2, // players needed before a round starts\n\tcountdownSeconds: 10, // countdown before each round\n\troundSeconds: 180, // longest a round lasts, in seconds (0: no limit)\n\tbreakSeconds: 5, // pause after a round before the next countdown\n}\n\n// Ready-made rounds: once CONFIG.minPlayers are in, a countdown runs and a round starts, calling your beginRound()\n// if you define one. endRound(message) ends it (so does the time running out), calling your finishRound(), and the\n// next countdown starts after a break. isRoundRunning() says whether a round is on.\nlet roundPhase = "waiting"\nlet roundMsLeft = 0\n\nfunction isRoundRunning() {\n\treturn roundPhase === "playing"\n}\n\nfunction roundSecondsLeft() {\n\treturn Math.max(0, Math.ceil(roundMsLeft / 1000))\n}\n\nfunction endRound(message) {\n\tif (roundPhase !== "playing") {\n\t\treturn\n\t}\n\troundPhase = "ended"\n\troundMsLeft = 0\n\t// Before finishRound, so an error in it doesn\'t stop the rounds for good\n\trunLater(CONFIG.breakSeconds, () => {\n\t\troundPhase = "waiting"\n\t})\n\tif (message) {\n\t\tannounce(message, "gold")\n\t}\n\tif (typeof finishRound === "function") {\n\t\tfinishRound()\n\t}\n}\n\nfunction tick(ms) {\n\tconst playerCount = api.getPlayerIds().length\n\tif (roundPhase === "waiting" && playerCount >= CONFIG.minPlayers) {\n\t\troundPhase = "countdown"\n\t\tstartCountdown(CONFIG.countdownSeconds, () => {\n\t\t\troundPhase = "playing"\n\t\t\troundMsLeft = CONFIG.roundSeconds * 1000\n\t\t\tif (typeof beginRound === "function") {\n\t\t\t\tbeginRound()\n\t\t\t}\n\t\t})\n\t} else if (roundPhase === "countdown" && playerCount < CONFIG.minPlayers) {\n\t\tcancelCountdown()\n\t\troundPhase = "waiting"\n\t\tannounce("Waiting for more players...", "yellow")\n\t} else if (roundPhase === "playing" && playerCount === 0) {\n\t\t// Everyone left: with no time limit it would never end, and no new round could start\n\t\tendRound()\n\t} else if (roundPhase === "playing" && CONFIG.roundSeconds > 0) {\n\t\troundMsLeft -= ms\n\t\tif (roundMsLeft <= 0) {\n\t\t\tendRound("Time\'s up!")\n\t\t}\n\t}\n}',
        uses: ["startCountdown", "announce", "runLater"],
        helpers: [{
          name: "endRound",
          category: "rounds",
          signature: "endRound(message)",
          about: "Ends the round now, announcing message to everyone. Rounds start by themselves: once CONFIG.minPlayers are in, a countdown runs, then your beginRound() is called; endRound (or CONFIG.roundSeconds running out) calls your finishRound(), and the next countdown follows. Define beginRound and finishRound yourself.",
          example: 'endRound(api.getEntityName(winner) + " wins!")'
        }, {
          name: "isRoundRunning",
          category: "rounds",
          signature: "isRoundRunning()",
          about: "Whether a round is being played (not waiting, counting down or between rounds).",
          example: "if (!isRoundRunning()) return"
        }, {
          name: "roundSecondsLeft",
          category: "rounds",
          signature: "roundSecondsLeft()",
          about: "Seconds left in the round.",
          example: 'setSidebar(playerId, "Time left", roundSecondsLeft())'
        }]
      }, {
        group: "announce",
        code: '// Ready-made announce: announce(text, color) tells everyone in chat and big on their screen for a few seconds.\nlet announceTimer = null\n\nfunction announce(text, color) {\n\tapi.broadcastMessage(text, { color: color || "yellow" })\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tapi.setClientOption(playerId, "middleTextLower", text)\n\t}\n\tif (announceTimer !== null) {\n\t\tcancelTimer(announceTimer)\n\t}\n\tannounceTimer = runLater(4, () => {\n\t\tannounceTimer = null\n\t\tfor (const playerId of api.getPlayerIds()) {\n\t\t\tapi.setClientOption(playerId, "middleTextLower", "")\n\t\t}\n\t})\n}',
        uses: ["runLater"],
        helpers: [{
          name: "announce",
          category: "screen",
          signature: "announce(text, color)",
          about: 'Tells everyone, in chat and as text in the middle of their screen for 4 seconds. color is optional, e.g. "lime".',
          example: 'announce("Round 2 starts now!", "orange")'
        }]
      }, {
        group: "sidebar",
        code: '// Ready-made sidebar: setSidebar(playerId, label, value) shows "label: value" on the right of a player\'s screen,\n// one line per label, so coins, kills and time can all show at once. removeSidebar(playerId, label) takes a line away.\nconst sidebarLines = {}\n\nfunction setSidebar(playerId, label, value) {\n\tif (!sidebarLines[playerId]) {\n\t\tsidebarLines[playerId] = {}\n\t}\n\tsidebarLines[playerId][label] = value\n\tshowSidebarLines(playerId)\n}\n\nfunction removeSidebar(playerId, label) {\n\tif (sidebarLines[playerId]) {\n\t\tdelete sidebarLines[playerId][label]\n\t\tshowSidebarLines(playerId)\n\t}\n}\n\nfunction showSidebarLines(playerId) {\n\tconst lines = Object.keys(sidebarLines[playerId]).map((key) => key + ": " + sidebarLines[playerId][key])\n\tapi.setClientOption(playerId, "RightInfoText", lines.join("\\n"))\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete sidebarLines[playerId]\n}',
        helpers: [{
          name: "setSidebar",
          category: "screen",
          signature: "setSidebar(playerId, label, value)",
          about: 'Shows "label: value" on the right of a player\'s screen, one line per label, so several values show at once.',
          example: 'setSidebar(playerId, "Kills", kills[playerId])'
        }, {
          name: "removeSidebar",
          category: "screen",
          signature: "removeSidebar(playerId, label)",
          about: "Takes a setSidebar line away from a player's screen.",
          example: 'removeSidebar(playerId, "Kills")'
        }]
      }, {
        group: "coins",
        code: 'const CONFIG = {\n\tstartCoins: 0, // coins a new player starts with\n\tsaveCoins: false, // true: coins are kept after a player leaves\n}\n\n// Ready-made coins: getCoins(playerId), addCoins(playerId, amount) and spendCoins(playerId, amount), which takes the\n// coins and returns true only when the player has enough. Coins show at the top of the screen.\nfunction setupCoins(playerId) {\n\tif (api.getCurrencyAmount(playerId, "coins") === null) {\n\t\tapi.setCurrency(playerId, "coins", { amount: CONFIG.startCoins, icon: "coins", persistent: CONFIG.saveCoins })\n\t}\n}\n\nfunction getCoins(playerId) {\n\tsetupCoins(playerId)\n\treturn api.getCurrencyAmount(playerId, "coins") || 0\n}\n\nfunction addCoins(playerId, amount) {\n\tsetupCoins(playerId)\n\t// Coins earned count setCoinMultiplier\'s times over (double coins); coins taken away don\'t\n\tconst times = typeof coinMultiplier === "number" && amount > 0 ? coinMultiplier : 1\n\tconst given = Math.round(amount * times)\n\tapi.giveCurrencyAmount(playerId, "coins", given)\n\treturn given\n}\n\n// Every coin addCoins gives counts this many times over (2: double coins), until it is set back to 1\nfunction setCoinMultiplier(times) {\n\tcoinMultiplier = times\n}\n\n// Unset until setCoinMultiplier: a value here would undo a setCoinMultiplier at the top of the file, above this code\nvar coinMultiplier\n\nfunction spendCoins(playerId, amount) {\n\tconst have = getCoins(playerId)\n\tif (have < amount) {\n\t\treturn false\n\t}\n\tapi.setCurrencyAmount(playerId, "coins", have - amount)\n\treturn true\n}\n\nfunction onPlayerJoin(playerId) {\n\tsetupCoins(playerId)\n}',
        helpers: [{
          name: "addCoins",
          category: "economy",
          signature: "addCoins(playerId, amount)",
          about: "Gives a player coins, shown at the top of their screen. CONFIG.startCoins and CONFIG.saveCoins set how many they start with and whether coins are kept after leaving. Returns the coins given, setCoinMultiplier's times over.",
          example: "addCoins(attackingPlayer, 5)"
        }, {
          name: "setCoinMultiplier",
          category: "economy",
          signature: "setCoinMultiplier(times)",
          about: "Every coin addCoins gives counts this many times over, for everyone, until it is set back to 1: 2 is double coins.",
          example: 'randomEvents(300, [["Double coins", () => setCoinMultiplier(2), () => setCoinMultiplier(1)]])'
        }, {
          name: "spendCoins",
          category: "economy",
          signature: "spendCoins(playerId, amount)",
          about: "Takes coins and returns true if the player has enough; returns false and takes nothing if not.",
          example: 'if (spendCoins(playerId, 10)) api.giveItem(playerId, "Diamond Sword", 1)'
        }, {
          name: "getCoins",
          category: "economy",
          signature: "getCoins(playerId)",
          about: "How many coins a player has.",
          example: 'api.sendMessage(playerId, "You have " + getCoins(playerId) + " coins")'
        }]
      }, {
        group: "scores",
        code: 'const CONFIG = {\n\tscoreName: "Score", // what the score is called on the leaderboard\n}\n\n// Ready-made scores: addScore(playerId, amount), getScore(playerId), and resetScores() for a new round. Scores show in\n// a leaderboard column, and bestPlayer() is who has the most.\nconst scores = {}\n\nfunction getScore(playerId) {\n\treturn scores[playerId] || 0\n}\n\nfunction addScore(playerId, amount) {\n\tscores[playerId] = getScore(playerId) + amount\n\tapi.setTargetedPlayerSettingForEveryone(playerId, "lobbyLeaderboardValues", { score: scores[playerId] }, true)\n\treturn scores[playerId]\n}\n\nfunction resetScores() {\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tscores[playerId] = 0\n\t\tapi.setTargetedPlayerSettingForEveryone(playerId, "lobbyLeaderboardValues", { score: 0 }, true)\n\t}\n}\n\nfunction bestPlayer() {\n\tlet best = null\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tif (best === null || getScore(playerId) > getScore(best)) {\n\t\t\tbest = playerId\n\t\t}\n\t}\n\treturn best\n}\n\nfunction onPlayerJoin(playerId) {\n\tapi.setClientOption(playerId, "lobbyLeaderboardInfo", {\n\t\tname: { displayName: "Name", sortPriority: 0 },\n\t\tscore: { displayName: CONFIG.scoreName, sortPriority: 1 },\n\t})\n\taddScore(playerId, 0)\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete scores[playerId]\n}',
        helpers: [{
          name: "addScore",
          category: "players",
          signature: "addScore(playerId, amount)",
          about: "Adds to a player's score, shown in a leaderboard column (CONFIG.scoreName). Returns the new score.",
          example: "addScore(attackingPlayer, 1)"
        }, {
          name: "getScore",
          category: "players",
          signature: "getScore(playerId)",
          about: "A player's score.",
          example: 'if (getScore(playerId) >= 10) announce(api.getEntityName(playerId) + " wins!")'
        }, {
          name: "resetScores",
          category: "players",
          signature: "resetScores()",
          about: "Sets everyone's score back to 0, for a new round.",
          example: "resetScores()"
        }, {
          name: "bestPlayer",
          category: "players",
          signature: "bestPlayer()",
          about: "The player with the highest score (null with no players).",
          example: 'announce(api.getEntityName(bestPlayer()) + " wins!")'
        }]
      }, {
        group: "teams",
        code: 'const CONFIG = {\n\tteamNames: ["Red", "Blue"], // the teams, in order\n}\n\n// Ready-made teams: joinSmallestTeam(playerId) puts a player in the team with fewest players and returns its name;\n// getTeam(playerId), teamMembers(team) and sameTeam(playerA, playerB). setTeam(playerId, team) puts a player in a team\n// of your choice (null takes them out of theirs). A player who leaves is taken out of their team.\nconst playerTeams = {}\n\nfunction joinSmallestTeam(playerId) {\n\t// Their old team doesn\'t count them: dealing the teams again evens them out\n\tdelete playerTeams[playerId]\n\tlet smallest = CONFIG.teamNames[0]\n\tfor (const team of CONFIG.teamNames) {\n\t\tif (teamMembers(team).length < teamMembers(smallest).length) {\n\t\t\tsmallest = team\n\t\t}\n\t}\n\tplayerTeams[playerId] = smallest\n\tapi.sendMessage(playerId, "You are on team " + smallest + "!", { color: smallest.toLowerCase() })\n\treturn smallest\n}\n\nfunction setTeam(playerId, team) {\n\tif (team === null || team === undefined || team === "") {\n\t\tdelete playerTeams[playerId]\n\t\treturn null\n\t}\n\t// A team in CONFIG.teamNames is found whatever the capitals: "red" is Red\n\tconst wanted = String(team).trim()\n\tconst known = CONFIG.teamNames.find((name) => name.toLowerCase() === wanted.toLowerCase())\n\tplayerTeams[playerId] = known || wanted\n\treturn playerTeams[playerId]\n}\n\nfunction getTeam(playerId) {\n\treturn playerTeams[playerId] || null\n}\n\nfunction teamMembers(team) {\n\treturn Object.keys(playerTeams).filter((playerId) => playerTeams[playerId] === team)\n}\n\nfunction sameTeam(playerA, playerB) {\n\treturn getTeam(playerA) !== null && getTeam(playerA) === getTeam(playerB)\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete playerTeams[playerId]\n}',
        helpers: [{
          name: "joinSmallestTeam",
          category: "teams",
          signature: "joinSmallestTeam(playerId)",
          about: "Puts a player in the team with the fewest players (CONFIG.teamNames) and returns the team's name.",
          example: "const team = joinSmallestTeam(playerId)"
        }, {
          name: "setTeam",
          category: "teams",
          signature: "setTeam(playerId, team)",
          about: "Puts a player in the team called team (any name; one in CONFIG.teamNames is matched whatever the capitals), without telling them. null takes them out of their team. Works with getTeam, teamMembers and sameTeam. Returns the team's name.",
          example: 'setTeam(playerId, "Red")'
        }, {
          name: "getTeam",
          category: "teams",
          signature: "getTeam(playerId)",
          about: "The player's team name, or null.",
          example: 'if (getTeam(playerId) === "Red") api.setPosition(playerId, 10, 5, 0)'
        }, {
          name: "teamMembers",
          category: "teams",
          signature: "teamMembers(team)",
          about: "The ids of the players in a team.",
          example: 'for (const id of teamMembers("Blue")) api.giveItem(id, "Blue Wool", 16)'
        }, {
          name: "sameTeam",
          category: "teams",
          signature: "sameTeam(playerA, playerB)",
          about: "Whether two players are on the same team, e.g. to stop teammates hurting each other.",
          example: 'if (sameTeam(attackingPlayer, damagedPlayer)) return "preventDamage"'
        }]
      }, {
        group: "kit",
        code: '// Ready-made kit: giveKit(playerId, items) empties the player\'s inventory and gives each [item, amount], e.g.\n// giveKit(playerId, [["Diamond Sword", 1], ["Bread", 5]]).\nfunction giveKit(playerId, items) {\n\tapi.clearInventory(playerId)\n\tfor (const entry of items) {\n\t\ttry {\n\t\t\tapi.giveItem(playerId, entry[0], entry[1] || 1)\n\t\t} catch (e) {\n\t\t\t// Not an item name: the rest of the kit is still given\n\t\t}\n\t}\n}',
        helpers: [{
          name: "giveKit",
          category: "players",
          signature: "giveKit(playerId, items)",
          about: "Empties a player's inventory, then gives each [item, amount] in items.",
          example: 'giveKit(playerId, [["Iron Sword", 1], ["Bread", 5]])'
        }]
      }, {
        group: "random",
        code: "// Ready-made random picks: randomInt(min, max) (both included), pickRandom(list) and shuffleList(list), which returns\n// a shuffled copy.\nfunction randomInt(min, max) {\n\treturn min + Math.floor(Math.random() * (max - min + 1))\n}\n\nfunction pickRandom(list) {\n\treturn list[Math.floor(Math.random() * list.length)]\n}\n\nfunction shuffleList(list) {\n\tconst copy = list.slice()\n\tfor (let i = copy.length - 1; i > 0; i--) {\n\t\tconst j = Math.floor(Math.random() * (i + 1))\n\t\tconst swap = copy[i]\n\t\tcopy[i] = copy[j]\n\t\tcopy[j] = swap\n\t}\n\treturn copy\n}",
        helpers: [{
          name: "randomInt",
          category: "world",
          signature: "randomInt(min, max)",
          about: "A random whole number from min to max, both included.",
          example: "const reward = randomInt(1, 10)"
        }, {
          name: "pickRandom",
          category: "world",
          signature: "pickRandom(list)",
          about: "One random entry of a list.",
          example: 'api.giveItem(playerId, pickRandom(["Apple", "Bread", "Diamond"]), 1)'
        }, {
          name: "shuffleList",
          category: "world",
          signature: "shuffleList(list)",
          about: "A shuffled copy of a list, e.g. to pick roles.",
          example: "const order = shuffleList(api.getPlayerIds())"
        }]
      }, {
        group: "teleport",
        code: "// Ready-made teleports: teleportEveryone(position) sends every player to [x, y, z], and randomSpot(center, radius)\n// gives a random [x, y, z] up to radius blocks from center, to spread players out.\nfunction teleportEveryone(position) {\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tapi.setPosition(playerId, position[0], position[1], position[2])\n\t}\n}\n\nfunction randomSpot(center, radius) {\n\tconst angle = Math.random() * Math.PI * 2\n\tconst distance = Math.random() * radius\n\treturn [center[0] + Math.cos(angle) * distance, center[1], center[2] + Math.sin(angle) * distance]\n}",
        helpers: [{
          name: "teleportEveryone",
          category: "players",
          signature: "teleportEveryone(position)",
          about: "Sends every player to [x, y, z].",
          example: "teleportEveryone([0, 20, 0])"
        }, {
          name: "randomSpot",
          category: "world",
          signature: "randomSpot(center, radius)",
          about: "A random [x, y, z] up to radius blocks from center (same y), to spread players or mobs out.",
          example: "const spot = randomSpot([0, 10, 0], 15); api.setPosition(playerId, spot[0], spot[1], spot[2])"
        }]
      }, {
        group: "eliminations",
        code: '// Ready-made eliminations: eliminate(playerId) makes a player a spectator who watches the rest, playersLeft() lists\n// those still in, and bringEveryoneBack() makes everyone a player again for a new round.\n// Each knocked-out player\'s game mode before, to give back\nconst eliminated = {}\n\nfunction eliminate(playerId) {\n\tif (!eliminated[playerId]) {\n\t\teliminated[playerId] = api.getPlayerGamemode(playerId) || "survival"\n\t}\n\tapi.setPlayerGamemode(playerId, "spectator")\n}\n\nfunction playersLeft() {\n\treturn api.getPlayerIds().filter((playerId) => !eliminated[playerId])\n}\n\nfunction bringEveryoneBack() {\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tif (eliminated[playerId]) {\n\t\t\tconst before = eliminated[playerId]\n\t\t\tdelete eliminated[playerId]\n\t\t\tapi.setPlayerGamemode(playerId, before === "spectator" ? "survival" : before)\n\t\t}\n\t}\n}\n\nfunction onPlayerJoin(playerId) {\n\t// A game mode stays with the player, so one who left knocked out comes back a player. Set here, not as they leave:\n\t// changing a leaving player\'s game mode stops the code\n\tif (!eliminated[playerId] && api.getPlayerGamemode(playerId) === "spectator") {\n\t\tapi.setPlayerGamemode(playerId, "survival")\n\t}\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete eliminated[playerId]\n}',
        helpers: [{
          name: "eliminate",
          category: "rounds",
          signature: "eliminate(playerId)",
          about: "Takes a player out of the round: they become a spectator who watches the rest.",
          example: "eliminate(killedPlayer)"
        }, {
          name: "playersLeft",
          category: "rounds",
          signature: "playersLeft()",
          about: "The ids of the players not eliminated.",
          example: 'if (playersLeft().length === 1) announce(api.getEntityName(playersLeft()[0]) + " wins!")'
        }, {
          name: "bringEveryoneBack",
          category: "rounds",
          signature: "bringEveryoneBack()",
          about: "Makes every eliminated player a normal player again, for a new round.",
          example: "bringEveryoneBack()"
        }]
      }, {
        group: "stopwatch",
        code: '// Ready-made stopwatch: startStopwatch(playerId) starts timing a player, stopStopwatch(playerId) stops it and returns\n// the seconds it ran (null if it wasn\'t running), and formatTime(seconds) writes it like 1:05.3.\nconst stopwatchStarts = {}\n\nfunction startStopwatch(playerId) {\n\tstopwatchStarts[playerId] = Date.now()\n}\n\nfunction stopStopwatch(playerId) {\n\tconst started = stopwatchStarts[playerId]\n\tif (started === undefined) {\n\t\treturn null\n\t}\n\tdelete stopwatchStarts[playerId]\n\treturn (Date.now() - started) / 1000\n}\n\nfunction formatTime(seconds) {\n\t// Rounded to tenths first, so 59.96 is 1:00.0 and not 0:60.0\n\tconst tenths = Math.round(seconds * 10)\n\tconst minutes = Math.floor(tenths / 600)\n\tconst rest = ((tenths - minutes * 600) / 10).toFixed(1)\n\treturn minutes + ":" + (rest.length < 4 ? "0" + rest : rest)\n}\n\nfunction onPlayerLeave(playerId) {\n\tdelete stopwatchStarts[playerId]\n}',
        helpers: [{
          name: "startStopwatch",
          category: "parkour",
          signature: "startStopwatch(playerId)",
          about: "Starts timing a player.",
          example: "startStopwatch(playerId)"
        }, {
          name: "stopStopwatch",
          category: "parkour",
          signature: "stopStopwatch(playerId)",
          about: "Stops timing a player and returns the seconds it ran, or null if it wasn't running.",
          example: "const seconds = stopStopwatch(playerId)"
        }, {
          name: "formatTime",
          category: "parkour",
          signature: "formatTime(seconds)",
          about: 'Seconds written as minutes and seconds, e.g. "1:05.3".',
          example: 'api.sendMessage(playerId, "Your time: " + formatTime(seconds))'
        }]
      }, {
        group: "mobs",
        code: "// Ready-made mobs: spawnMobs(mobType, count, position, spread) spawns mobs around [x, y, z] and returns their ids,\n// mobsAlive() counts those still alive, and removeAllMobs() takes them all away. Mobs must be allowed in the world.\nconst spawnedMobs = []\n\nfunction spawnMobs(mobType, count, position, spread) {\n\tconst ids = []\n\tfor (let i = 0; i < count; i++) {\n\t\tconst x = position[0] + (Math.random() - 0.5) * 2 * (spread || 0)\n\t\tconst z = position[2] + (Math.random() - 0.5) * 2 * (spread || 0)\n\t\tconst mobId = api.attemptSpawnMob(mobType, x, position[1], z)\n\t\tif (mobId !== null && mobId !== undefined) {\n\t\t\tids.push(mobId)\n\t\t\tspawnedMobs.push(mobId)\n\t\t}\n\t}\n\treturn ids\n}\n\nfunction mobsAlive() {\n\treturn spawnedMobs.length\n}\n\nfunction removeAllMobs() {\n\tfor (const mobId of spawnedMobs.slice()) {\n\t\ttry {\n\t\t\tapi.despawnMob(mobId)\n\t\t} catch (e) {\n\t\t\t// Already gone\n\t\t}\n\t}\n\tspawnedMobs.length = 0\n}\n\nfunction onMobDespawned(mobId) {\n\tforgetSpawnedMob(mobId)\n}\n\n// A killed mob despawns after onPlayerKilledMob: forgotten now, so mobsAlive() there counts it gone\nfunction onPlayerKilledMob(playerId, mobId) {\n\tforgetSpawnedMob(mobId)\n}\n\nfunction forgetSpawnedMob(mobId) {\n\tconst index = spawnedMobs.indexOf(mobId)\n\tif (index !== -1) {\n\t\tspawnedMobs.splice(index, 1)\n\t}\n}",
        helpers: [{
          name: "spawnMobs",
          category: "survival",
          signature: "spawnMobs(mobType, count, position, spread)",
          about: "Spawns count mobs around [x, y, z], up to spread blocks away, and returns their ids. Mobs must be allowed in the world.",
          example: 'spawnMobs("Draugr Zombie", 5, [0, 10, 0], 8)'
        }, {
          name: "mobsAlive",
          category: "survival",
          signature: "mobsAlive()",
          about: "How many mobs spawned with spawnMobs are still alive.",
          example: "if (mobsAlive() === 0) startNextWave()"
        }, {
          name: "removeAllMobs",
          category: "survival",
          signature: "removeAllMobs()",
          about: "Takes away every mob spawned with spawnMobs.",
          example: "removeAllMobs()"
        }]
      }, {
        group: "boxes",
        code: "// Ready-made boxes: isInBox(playerId, corner1, corner2) says whether a player is inside the box between two corners\n// [x, y, z], and playersInBox(corner1, corner2) lists who is.\nfunction isInBox(playerId, corner1, corner2) {\n\tconst position = api.getPosition(playerId)\n\tfor (let i = 0; i < 3; i++) {\n\t\tconst low = Math.min(corner1[i], corner2[i])\n\t\tconst high = Math.max(corner1[i], corner2[i]) + 1\n\t\tif (position[i] < low || position[i] >= high) {\n\t\t\treturn false\n\t\t}\n\t}\n\treturn true\n}\n\nfunction playersInBox(corner1, corner2) {\n\treturn api.getPlayerIds().filter((playerId) => isInBox(playerId, corner1, corner2))\n}",
        helpers: [{
          name: "RPc",
          category: "world",
          signature: "isInBox(playerId, corner1, corner2)",
          about: "Whether a player is inside the box between two corners [x, y, z], e.g. a finish area or a safe zone.",
          example: 'if (isInBox(playerId, [10, 0, 10], [14, 5, 14])) announce("Someone reached the finish!")'
        }, {
          name: "playersInBox",
          category: "world",
          signature: "playersInBox(corner1, corner2)",
          about: "The ids of the players inside the box between two corners.",
          example: "const onHill = playersInBox([-3, 5, -3], [3, 9, 3])"
        }]
      }, {
        group: "building",
        code: '// Ready-made building: fillBox(corner1, corner2, blockName) fills the box between two corners [x, y, z] (use "Air" to\n// clear it), and buildPlatform(center, radius, blockName) lays a square floor around [x, y, z]. Big boxes are filled in\n// parts of 7 x 7 x 7, as one api.setBlockRect fills at most 360 blocks, and a part whose blocks haven\'t loaded yet is\n// filled once they have.\nfunction fillBox(corner1, corner2, blockName) {\n\tconst low = [0, 1, 2].map((i) => Math.floor(Math.min(corner1[i], corner2[i])))\n\tconst high = [0, 1, 2].map((i) => Math.floor(Math.max(corner1[i], corner2[i])))\n\tconst step = 7\n\tfor (let x = low[0]; x <= high[0]; x += step) {\n\t\tfor (let y = low[1]; y <= high[1]; y += step) {\n\t\t\tfor (let z = low[2]; z <= high[2]; z += step) {\n\t\t\t\tconst from = [x, y, z]\n\t\t\t\tconst to = [Math.min(x + step - 1, high[0]), Math.min(y + step - 1, high[1]), Math.min(z + step - 1, high[2])]\n\t\t\t\tif (api.getBlock(from[0], from[1], from[2]) === "Unloaded" || api.getBlock(to[0], to[1], to[2]) === "Unloaded") {\n\t\t\t\t\twhenWorldLoaded(from, () => whenWorldLoaded(to, () => api.setBlockRect(from, to, blockName)))\n\t\t\t\t} else {\n\t\t\t\t\tapi.setBlockRect(from, to, blockName)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}\n\nfunction buildPlatform(center, radius, blockName) {\n\tconst x = Math.floor(center[0])\n\tconst y = Math.floor(center[1])\n\tconst z = Math.floor(center[2])\n\tfillBox([x - radius, y, z - radius], [x + radius, y, z + radius], blockName)\n}',
        uses: ["whenWorldLoaded"],
        helpers: [{
          name: "fillBox",
          category: "building",
          signature: "fillBox(corner1, corner2, blockName)",
          about: 'Fills the box between two corners [x, y, z] with a block ("Air" clears it), however big.',
          example: 'fillBox([0, 0, 0], [20, 0, 20], "Red Wool")'
        }, {
          name: "buildPlatform",
          category: "building",
          signature: "buildPlatform(center, radius, blockName)",
          about: "Lays a square floor of a block around [x, y, z], radius blocks out each way.",
          example: 'buildPlatform([0, 50, 0], 10, "Glass")'
        }]
      }, {
        group: "worldReady",
        code: '// Ready-made world loading: whenWorldLoaded(position, fn) runs fn once the blocks at [x, y, z] have loaded, the first\n// time it can: blocks can\'t be read or built until then (at the start the world may not be loaded yet). The list is\n// a var made on first use, so it can be called from the top of the file.\nvar worldLoadWaits\n\nfunction whenWorldLoaded(position, fn) {\n\tif (!worldLoadWaits) {\n\t\tworldLoadWaits = []\n\t}\n\tworldLoadWaits.push({ position: position, fn: fn })\n}\n\nfunction tick(ms) {\n\tif (!worldLoadWaits) {\n\t\treturn\n\t}\n\tfor (const wait of worldLoadWaits.slice()) {\n\t\tif (api.getBlock(wait.position[0], wait.position[1], wait.position[2]) !== "Unloaded") {\n\t\t\tworldLoadWaits.splice(worldLoadWaits.indexOf(wait), 1)\n\t\t\twait.fn()\n\t\t}\n\t}\n}',
        helpers: [{
          name: "whenWorldLoaded",
          category: "building",
          signature: "whenWorldLoaded(position, fn)",
          about: "Runs fn once the blocks at [x, y, z] have loaded. Build or read blocks at the start of a game inside it: before then nothing can be built.",
          example: 'whenWorldLoaded([0, 50, 0], () => buildPlatform([0, 50, 0], 10, "Glass"))'
        }]
      }, {
        group: "saved",
        code: "// Ready-made saved values: getSaved(playerId, key, fallback) reads a number or text kept after the player leaves\n// (fallback if never saved), setSaved(playerId, key, value) keeps one, and addSaved(playerId, key, amount) adds to a\n// saved number and returns the new total.\nfunction getSaved(playerId, key, fallback) {\n\tconst value = api.getPlayerDbValue(playerId, key)\n\treturn value === null || value === undefined ? fallback : value\n}\n\nfunction setSaved(playerId, key, value) {\n\tapi.setPlayerDbValue(playerId, key, value)\n}\n\nfunction addSaved(playerId, key, amount) {\n\tconst total = Number(getSaved(playerId, key, 0)) + amount\n\tsetSaved(playerId, key, total)\n\treturn total\n}",
        helpers: [{
          name: "getSaved",
          category: "economy",
          signature: "getSaved(playerId, key, fallback)",
          about: "A number or text saved for a player, kept after they leave; fallback if nothing was saved.",
          example: 'const wins = getSaved(playerId, "wins", 0)'
        }, {
          name: "setSaved",
          category: "economy",
          signature: "setSaved(playerId, key, value)",
          about: "Saves a number or text for a player, kept after they leave.",
          example: 'setSaved(playerId, "level", 3)'
        }, {
          name: "addSaved",
          category: "economy",
          signature: "addSaved(playerId, key, amount)",
          about: "Adds to a saved number and returns the new total.",
          example: 'const wins = addSaved(playerId, "wins", 1)'
        }]
      }, {
        group: "health",
        code: '// Ready-made health: healFully(playerId) gives a player full health.\nfunction healFully(playerId) {\n\tapi.setHealth(playerId, api.getClientOption(playerId, "maxHealth"))\n}',
        helpers: [{
          name: "healFully",
          category: "players",
          signature: "healFully(playerId)",
          about: "Gives a player full health.",
          example: "healFully(playerId)"
        }]
      }, {
        group: "commands",
        code: '// Ready-made commands: addCommand(name, fn) makes /name a chat command; fn(playerId, args) gets the words typed after\n// it as a list. Commands it doesn\'t know are left to your own playerCommand.\nvar commandList\n\nfunction addCommand(name, fn) {\n\tif (!commandList) {\n\t\tcommandList = {}\n\t}\n\tlet key = String(name).trim().toLowerCase()\n\tif (key.charAt(0) === "/") {\n\t\tkey = key.slice(1)\n\t}\n\tcommandList[key] = fn\n}\n\nfunction playerCommand(playerId, command) {\n\tconst words = String(command).trim().split(" ").filter((word) => word !== "")\n\tif (!commandList || words.length === 0) {\n\t\treturn false\n\t}\n\tlet key = words[0].toLowerCase()\n\tif (key.charAt(0) === "/") {\n\t\tkey = key.slice(1)\n\t}\n\t// Its own commands only: /constructor isn\'t one\n\tif (!Object.prototype.hasOwnProperty.call(commandList, key)) {\n\t\treturn false\n\t}\n\tcommandList[key](playerId, words.slice(1))\n\treturn true\n}',
        helpers: [{
          name: "addCommand",
          category: "players",
          signature: "addCommand(name, fn)",
          about: "Makes /name a chat command: when a player types it, fn(playerId, args) runs, args being the words typed after it as a list. Several commands can be added, from anywhere, even the top of the file; ones it doesn't know go to your own playerCommand. Returns nothing.",
          example: 'addCommand("spawn", (playerId, args) => api.setPosition(playerId, 0, 10, 0))'
        }]
      }, {
        group: "areas",
        code: '// Ready-made areas: protectArea(corner1, corner2) stops everyone breaking or placing blocks in the box between two\n// corners [x, y, z], and noPvpZone(corner1, corner2) stops players hurting each other in one.\nvar protectedAreas\nvar noPvpAreas\n\nfunction protectArea(corner1, corner2) {\n\tif (!protectedAreas) {\n\t\tprotectedAreas = []\n\t}\n\tprotectedAreas.push([corner1.slice(), corner2.slice()])\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tapi.setCantChangeBlockRect(playerId, corner1.slice(), corner2.slice())\n\t}\n}\n\nfunction noPvpZone(corner1, corner2) {\n\tif (!noPvpAreas) {\n\t\tnoPvpAreas = []\n\t}\n\tnoPvpAreas.push([corner1.slice(), corner2.slice()])\n}\n\nfunction onPlayerJoin(playerId) {\n\tfor (const area of protectedAreas || []) {\n\t\tapi.setCantChangeBlockRect(playerId, area[0].slice(), area[1].slice())\n\t}\n}\n\nfunction onPlayerDamagingOtherPlayer(attackingPlayer, damagedPlayer) {\n\tfor (const area of noPvpAreas || []) {\n\t\tif (isInBox(attackingPlayer, area[0], area[1]) || isInBox(damagedPlayer, area[0], area[1])) {\n\t\t\treturn "preventDamage"\n\t\t}\n\t}\n}',
        uses: ["RPc"],
        helpers: [{
          name: "protectArea",
          category: "building",
          signature: "protectArea(corner1, corner2)",
          about: "Stops every player, those who join later too, breaking or placing blocks in the box between two corners [x, y, z]. Can be called at the top of the file. Returns nothing.",
          example: "protectArea([-10, 0, -10], [10, 20, 10])"
        }, {
          name: "noPvpZone",
          category: "pvp",
          signature: "noPvpZone(corner1, corner2)",
          about: "Makes the box between two corners [x, y, z] a safe zone: a player inside it can't hurt or be hurt by other players. Can be called at the top of the file. Returns nothing.",
          example: "noPvpZone([-5, 0, -5], [5, 10, 5])"
        }]
      }, {
        group: "decay",
        code: '// Ready-made disappearing blocks: removeBlockLater(position, seconds, restoreAfterSeconds) turns the block at\n// [x, y, z] into air after some seconds, and puts it back restoreAfterSeconds later (0: never).\nvar blocksToRemove\n\nfunction removeBlockLater(position, seconds, restoreAfterSeconds) {\n\tif (!blocksToRemove) {\n\t\tblocksToRemove = {}\n\t}\n\tconst x = Math.floor(position[0])\n\tconst y = Math.floor(position[1])\n\tconst z = Math.floor(position[2])\n\tconst key = x + "," + y + "," + z\n\t// Standing on a block calls onBlockStand again and again: one removal at a time per block\n\tif (blocksToRemove[key]) {\n\t\treturn false\n\t}\n\tblocksToRemove[key] = true\n\trunLater(seconds, () => {\n\t\tconst block = api.getBlock(x, y, z)\n\t\tif (block === "Air" || block === "Unloaded") {\n\t\t\tdelete blocksToRemove[key]\n\t\t\treturn\n\t\t}\n\t\tapi.setBlock(x, y, z, "Air")\n\t\tif (!restoreAfterSeconds) {\n\t\t\tdelete blocksToRemove[key]\n\t\t\treturn\n\t\t}\n\t\trunLater(restoreAfterSeconds, () => {\n\t\t\tputRemovedBlockBack(x, y, z, block)\n\t\t})\n\t})\n\treturn true\n}\n\nfunction putRemovedBlockBack(x, y, z, block) {\n\tconst now = api.getBlock(x, y, z)\n\tif (now === "Unloaded") {\n\t\t// Nobody is near it: try again once its chunk has loaded\n\t\trunLater(1, () => {\n\t\t\tputRemovedBlockBack(x, y, z, block)\n\t\t})\n\t\treturn\n\t}\n\tdelete blocksToRemove[x + "," + y + "," + z]\n\t// A block someone placed there since stays\n\tif (now === "Air") {\n\t\tapi.setBlock(x, y, z, block)\n\t}\n}',
        uses: ["runLater"],
        helpers: [{
          name: "removeBlockLater",
          category: "building",
          signature: "removeBlockLater(position, seconds, restoreAfterSeconds)",
          about: "Turns the block at [x, y, z] into air after some seconds, and puts it back restoreAfterSeconds after that (0: never), e.g. floors that fall away under players. Returns false, doing nothing, if that block is already waiting to go, so calling it from onBlockStand every tick is fine.",
          example: "removeBlockLater([x, y, z], 0.5, 5)"
        }]
      }, {
        group: "abilities",
        code: '// Ready-made abilities: setAbility(playerId, ability, value) changes how a player moves or how much health they have\n// (doubleJump, maxHealth, speed, jump, fallDamage), and applyBoost(playerId, effect, seconds, level) gives an effect\n// like "Speed" or "Jump Boost" for some seconds.\nfunction setAbility(playerId, ability, value) {\n\tconst name = String(ability).toLowerCase().replace(/[^a-z]/g, "")\n\tif (name === "doublejump" || name === "airjump" || name === "airjumps") {\n\t\tapi.setClientOption(playerId, "airJumpCount", value === true ? 1 : Number(value) || 0)\n\t} else if (name === "maxhealth" || name === "health") {\n\t\tapi.setClientOptions(playerId, { maxHealth: value, initialHealth: value })\n\t\tapi.setHealth(playerId, value)\n\t} else if (name === "speed") {\n\t\tapi.setClientOption(playerId, "speedMultiplier", abilityTimes(value, 1.5))\n\t} else if (name === "jump" || name === "jumpheight") {\n\t\t// A whole number of jump power, 8 being normal\n\t\tapi.setClientOption(playerId, "jumpAmount", Math.round(8 * abilityTimes(value, 1.5)))\n\t} else if (name === "falldamage") {\n\t\tapi.setClientOption(playerId, "fallDamage", value === true)\n\t} else if (name === "gravity" || name === "lowgravity") {\n\t\tapi.setClientOption(playerId, "gravityMultiplier", abilityTimes(value, 0.4))\n\t} else if (name === "fly" || name === "flying") {\n\t\tapi.setClientOption(playerId, "creative", value === true)\n\t} else {\n\t\tthrow new Error("setAbility has no ability " + ability + ": use doubleJump, maxHealth, speed, jump, fallDamage, gravity or fly")\n\t}\n}\n\n// How many times normal an ability is: true turns it on (onTimes), false back to normal, else the number given\nfunction abilityTimes(value, onTimes) {\n\tif (value === true) {\n\t\treturn onTimes\n\t}\n\tif (value === false) {\n\t\treturn 1\n\t}\n\treturn Math.max(0, Number(value) || 0)\n}\n\nfunction applyBoost(playerId, effect, seconds, level) {\n\tconst names = ["Speed", "Jump Boost", "Damage", "Damage Reduction", "Haste", "Health Regen", "Invisible", "Slowness", "Weakness", "Poisoned", "Double Jump", "Bounciness", "Wall Climbing", "Air Walk", "Feather Falling", "Night Vision", "Glowing", "Heat Resistance", "Lifesteal", "Thorns", "Blindness", "Frozen"]\n\tconst other = { jump: "Jump Boost", strength: "Damage", resistance: "Damage Reduction", regen: "Health Regen", regeneration: "Health Regen", invisibility: "Invisible", poison: "Poisoned", slow: "Slowness" }\n\tconst wanted = String(effect).toLowerCase().replace(/[^a-z]/g, "")\n\tconst name = other[wanted] || names.find((known) => known.toLowerCase().replace(/[^a-z]/g, "") === wanted) || effect\n\tapi.applyEffect(playerId, name, seconds * 1000, { inbuiltLevel: level || 1 })\n}',
        helpers: [{
          name: "setAbility",
          category: "players",
          signature: "setAbility(playerId, ability, value)",
          about: 'Changes a player until they leave. ability is "doubleJump" (true, or how many jumps in the air), "maxHealth" (a number; their health is filled to it), "speed" (1 normal, 2 twice as fast), "jump" (1 normal, 1.5 higher), "fallDamage" (true or false), "gravity" (1 normal, 0.4 floaty like the moon) or "fly" (true or false). Returns nothing.',
          example: 'setAbility(playerId, "doubleJump", true)'
        }, {
          name: "applyBoost",
          category: "players",
          signature: "applyBoost(playerId, effect, seconds, level)",
          about: 'Gives a player an effect for some seconds, shown as an icon: "Speed", "Jump Boost", "Damage", "Damage Reduction", "Health Regen", "Invisible", "Slowness", "Double Jump" and more. level is optional (1 is normal, higher is stronger). Returns nothing.',
          example: 'applyBoost(playerId, "Speed", 10, 2)'
        }]
      }, {
        group: "loot",
        code: '// Ready-made loot chests: fillChest(position, lootTable) empties the chest at [x, y, z] and puts in each [item, min,\n// max] of the table, a random amount from min to max; refillChestsEvery(seconds, positions, lootTable) fills chests\n// now and again every few seconds. A chest whose part of the world isn\'t loaded yet is filled once it is.\nvar chestsToFill\nvar chestWaitMs\n\nfunction fillChest(position, lootTable) {\n\tconst x = Math.floor(position[0])\n\tconst y = Math.floor(position[1])\n\tconst z = Math.floor(position[2])\n\tconst key = x + "," + y + "," + z\n\tconst block = api.getBlock(x, y, z)\n\tif (block === "Unloaded") {\n\t\tif (!chestsToFill) {\n\t\t\tchestsToFill = {}\n\t\t}\n\t\tchestsToFill[key] = { position: [x, y, z], lootTable: lootTable }\n\t\treturn false\n\t}\n\tif (chestsToFill) {\n\t\tdelete chestsToFill[key]\n\t}\n\t// A spot with no chest gets one, so the loot is never hidden in another block\n\tif (block.indexOf("Chest") === -1) {\n\t\tapi.setBlock(x, y, z, "Chest")\n\t}\n\tconst items = api.getStandardChestItems([x, y, z])\n\tfor (let i = 0; i < items.length; i++) {\n\t\tif (items[i]) {\n\t\t\tapi.setStandardChestItemSlot([x, y, z], i, "Air")\n\t\t}\n\t}\n\tfor (const entry of lootTable) {\n\t\tconst low = entry[1] === undefined ? 1 : entry[1]\n\t\tconst high = entry[2] === undefined ? low : entry[2]\n\t\tconst amount = low + Math.floor(Math.random() * (high - low + 1))\n\t\tif (amount > 0) {\n\t\t\ttry {\n\t\t\t\tapi.giveStandardChestItem([x, y, z], entry[0], amount)\n\t\t\t} catch (e) {\n\t\t\t\t// Not an item name: the rest of the loot is still put in\n\t\t\t}\n\t\t}\n\t}\n\treturn true\n}\n\nfunction refillChestsEvery(seconds, positions, lootTable) {\n\t// One position [x, y, z] works as well as a list of them\n\tconst list = typeof positions[0] === "number" ? [positions] : positions\n\tconst fillAll = () => {\n\t\tfor (const position of list) {\n\t\t\tfillChest(position, lootTable)\n\t\t}\n\t}\n\tfillAll()\n\treturn repeatEvery(seconds, fillAll)\n}\n\nfunction tick(ms) {\n\tif (!chestsToFill) {\n\t\treturn\n\t}\n\t// Chests waiting for their part of the world are tried once a second\n\tchestWaitMs = (chestWaitMs || 0) + ms\n\tif (chestWaitMs < 1000) {\n\t\treturn\n\t}\n\tchestWaitMs = 0\n\tfor (const key of Object.keys(chestsToFill)) {\n\t\tfillChest(chestsToFill[key].position, chestsToFill[key].lootTable)\n\t}\n}',
        uses: ["repeatEvery"],
        helpers: [{
          name: "fillChest",
          category: "survival",
          signature: "fillChest(position, lootTable)",
          about: "Empties the chest at [x, y, z] (placing a Chest there if there is none), then puts in each [item, min, max] of lootTable, a random amount from min to max. Returns true, or false when that part of the world isn't loaded yet: it is then filled once it is.",
          example: 'fillChest([10, 5, 10], [["Bread", 2, 5], ["Iron Sword", 0, 1], ["Arrow", 5, 15]])'
        }, {
          name: "refillChestsEvery",
          category: "survival",
          signature: "refillChestsEvery(seconds, positions, lootTable)",
          about: "Fills every chest in positions (a list of [x, y, z]) with fillChest now, then again every few seconds. Can be called at the top of the file. Returns an id for cancelTimer.",
          example: 'refillChestsEvery(60, [[10, 5, 10], [-10, 5, -10]], [["Bread", 2, 5], ["Iron Sword", 0, 1]])'
        }]
      }, {
        group: "votes",
        code: '// Ready-made votes: startVote(options, seconds, onDone) asks everyone to vote with /vote and a number or name, then\n// tells everyone the winner and runs onDone(winner). A tie is picked at random from the tied options.\nvar currentVote\n\nfunction startVote(options, seconds, onDone) {\n\tif (currentVote) {\n\t\tcancelTimer(currentVote.timer)\n\t}\n\tcurrentVote = { options: options.slice(), choices: {}, onDone: onDone, timer: null }\n\tcurrentVote.timer = runLater(seconds, finishCurrentVote)\n\tapi.broadcastMessage("Vote now! Type /vote and a number: " + currentVoteOptionsText(), { color: "aqua" })\n}\n\nfunction currentVoteOptionsText() {\n\treturn currentVote.options.map((option, i) => (i + 1) + ". " + option).join(", ")\n}\n\nfunction finishCurrentVote() {\n\tconst vote = currentVote\n\tcurrentVote = null\n\tconst counts = vote.options.map(() => 0)\n\tfor (const playerId of Object.keys(vote.choices)) {\n\t\tcounts[vote.choices[playerId]]++\n\t}\n\tconst most = Math.max.apply(null, counts)\n\tconst tied = vote.options.filter((option, i) => counts[i] === most)\n\tconst winner = tied[Math.floor(Math.random() * tied.length)]\n\tif (most === 0) {\n\t\tapi.broadcastMessage("Nobody voted, so " + winner + " was picked!", { color: "aqua" })\n\t} else {\n\t\tapi.broadcastMessage(winner + " wins the vote with " + most + (most === 1 ? " vote!" : " votes!"), { color: "aqua" })\n\t}\n\tif (vote.onDone) {\n\t\tvote.onDone(winner)\n\t}\n}\n\nfunction playerCommand(playerId, command) {\n\tconst words = String(command).trim().split(" ").filter((word) => word !== "")\n\tif (words.length === 0 || words[0].toLowerCase().split("/").join("") !== "vote") {\n\t\treturn false\n\t}\n\tif (!currentVote) {\n\t\tapi.sendMessage(playerId, "There\'s no vote right now.")\n\t\treturn true\n\t}\n\tconst wanted = words.slice(1).join(" ").toLowerCase()\n\tlet index = Number(wanted) - 1\n\tif (!(index >= 0 && index < currentVote.options.length && Math.floor(index) === index)) {\n\t\tindex = currentVote.options.findIndex((option) => String(option).toLowerCase() === wanted)\n\t}\n\tif (index === -1 && wanted !== "") {\n\t\tindex = currentVote.options.findIndex((option) => String(option).toLowerCase().startsWith(wanted))\n\t}\n\tif (index === -1) {\n\t\tapi.sendMessage(playerId, "Type /vote and a number: " + currentVoteOptionsText())\n\t\treturn true\n\t}\n\tcurrentVote.choices[playerId] = index\n\tapi.sendMessage(playerId, "You voted for " + currentVote.options[index] + "!", { color: "lime" })\n\treturn true\n}\n\nfunction onPlayerJoin(playerId) {\n\tif (currentVote) {\n\t\tapi.sendMessage(playerId, "There\'s a vote on! Type /vote and a number: " + currentVoteOptionsText(), { color: "aqua" })\n\t}\n}\n\nfunction onPlayerLeave(playerId) {\n\tif (currentVote) {\n\t\tdelete currentVote.choices[playerId]\n\t}\n}',
        uses: ["runLater"],
        helpers: [{
          name: "startVote",
          category: "rounds",
          signature: "startVote(options, seconds, onDone)",
          about: "Tells everyone the options and lets them vote for some seconds with /vote and a number or name (a new vote replaces one still running). Then it tells everyone the winner (a tie or no votes picks at random) and runs onDone(winner), winner being the option's text. Returns nothing.",
          example: 'startVote(["Desert", "Snow", "Jungle"], 20, (winner) => announce(winner + " map next!"))'
        }]
      }, {
        group: "items",
        code: '// Ready-made items: whenItemUsed(itemName, fn, cooldownSeconds) runs fn(playerId, x, y, z, targetId) when a player\n// clicks or taps holding that item; x, y, z is the block they aim at (undefined if none) and targetId the player or\n// mob they clicked (null if none). dropItem(position, itemName, amount) drops items at [x, y, z] for players to pick\n// up, and itemRain(itemNames, count, center, radius) drops random items from the sky around [x, y, z]. The list is a\n// var made on first use, so whenItemUsed can be called from the top of the file.\nvar itemUses\nvar itemUsedAt\n\nfunction whenItemUsed(itemName, fn, cooldownSeconds) {\n\tif (!itemUses) {\n\t\titemUses = []\n\t\titemUsedAt = {}\n\t}\n\tconst seconds = cooldownSeconds === undefined ? 0.25 : cooldownSeconds\n\tconst use = { item: String(itemName).toLowerCase(), fn: fn, cooldownMs: seconds * 1000 }\n\t// One use per item: called again (on each join or round) it replaces the last, rather than running fn twice a click\n\tconst index = itemUses.findIndex((other) => other.item === use.item)\n\tif (index === -1) {\n\t\titemUses.push(use)\n\t} else {\n\t\titemUses[index] = use\n\t}\n}\n\nfunction onPlayerClick(playerId, wasAltClick, x, y, z, block, targetEId) {\n\tconst held = api.getHeldItem(playerId)\n\tif (!itemUses || !held) {\n\t\treturn\n\t}\n\tif (!itemUsedAt[playerId]) {\n\t\titemUsedAt[playerId] = {}\n\t}\n\tconst now = Date.now()\n\titemUses.forEach((use, index) => {\n\t\t// A held button clicks again and again: one use per cooldown\n\t\tconst last = itemUsedAt[playerId][index]\n\t\tif (use.item !== held.name.toLowerCase() || (last !== undefined && now - last < use.cooldownMs)) {\n\t\t\treturn\n\t\t}\n\t\titemUsedAt[playerId][index] = now\n\t\tuse.fn(playerId, x, y, z, targetEId === undefined ? null : targetEId)\n\t})\n}\n\nfunction dropItem(position, itemName, amount) {\n\t// dropItem(x, y, z, itemName, amount) and a player\'s id for the position work too\n\tif (typeof position === "number") {\n\t\treturn dropItem([arguments[0], arguments[1], arguments[2]], arguments[3], arguments[4])\n\t}\n\tconst where = typeof position === "string" ? api.getPosition(position) : position\n\tlet left = Math.min(Math.max(1, Math.floor(amount || 1)), 999 * 10)\n\tlet dropId = null\n\t// One drop holds at most 999\n\twhile (left > 0) {\n\t\tdropId = api.createItemDrop(where[0], where[1], where[2], itemName, Math.min(left, 999))\n\t\tleft -= 999\n\t}\n\treturn dropId\n}\n\nfunction itemRain(itemNames, count, center, radius) {\n\tconst names = typeof itemNames === "string" ? [itemNames] : itemNames\n\tconst where = typeof center === "string" ? api.getPosition(center) : center\n\tlet dropped = 0\n\tfor (let i = 0; i < Math.min(count, 200); i++) {\n\t\tconst angle = Math.random() * Math.PI * 2\n\t\tconst distance = Math.sqrt(Math.random()) * (radius || 0)\n\t\tconst pick = names[Math.floor(Math.random() * names.length)]\n\t\t// An entry can be a name or [name, amount]\n\t\tconst name = Array.isArray(pick) ? pick[0] : pick\n\t\tconst amount = Array.isArray(pick) ? pick[1] || 1 : 1\n\t\tif (api.createItemDrop(where[0] + Math.cos(angle) * distance, where[1] + 15, where[2] + Math.sin(angle) * distance, name, amount) !== null) {\n\t\t\tdropped++\n\t\t}\n\t}\n\treturn dropped\n}\n\nfunction onPlayerLeave(playerId) {\n\tif (itemUsedAt) {\n\t\tdelete itemUsedAt[playerId]\n\t}\n}',
        helpers: [{
          name: "whenItemUsed",
          category: "players",
          signature: "whenItemUsed(itemName, fn, cooldownSeconds)",
          about: "Runs fn(playerId, x, y, z, targetId) each time a player clicks or taps while holding that item: x, y, z is the block they aim at (undefined if none), targetId the player or mob they clicked (null if none). cooldownSeconds is optional (0.25 if left out): how long before the same player can use it again. It is not a callback to define: call it, from anywhere, even the top of the file. Returns nothing.",
          example: 'whenItemUsed("Gold Bar", (playerId) => api.applyEffect(playerId, "Speed", 5000, { inbuiltLevel: 1 }))'
        }, {
          name: "dropItem",
          category: "world",
          signature: "dropItem(position, itemName, amount)",
          about: "Drops amount of an item at [x, y, z] (or at a player, given their id) for players to pick up. Returns the drop's id, or null when the world has too many drops.",
          example: 'dropItem(api.getPosition(playerId), "Diamond", 3)'
        }, {
          name: "itemRain",
          category: "world",
          signature: "itemRain(itemNames, count, center, radius)",
          about: "Drops count items from the sky (15 blocks up), each a random one of itemNames, spread up to radius blocks around center [x, y, z] (or a player's id). Returns how many were dropped.",
          example: 'itemRain(["Diamond", "Gold Bar", "Apple"], 20, [0, 10, 0], 8)'
        }]
      }, {
        group: "projectiles",
        code: '// Ready-made projectiles: shootProjectile(playerId, options) shoots a real projectile from a player\'s eyes the way they\n// look; options (each optional) are item (any throwable: "Arrow", "Snowball", "Fireball"...), speed and gravity (1 is\n// normal), damage (what a hit does) and onHit(targetId), run when it hits a player or mob. pullTowards(playerId,\n// position, strength) flings a player towards [x, y, z], and aimedBlock(playerId, range) is the [x, y, z] of the block\n// they look at, up to range blocks away (null if none). The list is a var made on first use.\nvar shotList\nvar blastList\n\nfunction shootProjectile(playerId, options) {\n\tconst o = options || {}\n\tconst item = o.item || "Arrow"\n\tconst facing = api.getPlayerFacingInfo(playerId)\n\tconst gravity = o.gravity === undefined ? 1 : Math.max(0, o.gravity)\n\tconst shotId = api.attemptCreateThrowable(playerId, item, facing.camPos, facing.dir, o.speed || 1, 1, gravity)\n\tif (shotId !== null && (o.damage !== undefined || o.onHit)) {\n\t\tif (!shotList) {\n\t\t\tshotList = []\n\t\t}\n\t\tshotList.push({ id: shotId, playerId: playerId, item: item, damage: o.damage, onHit: o.onHit, until: Date.now() + 10000 })\n\t}\n\treturn shotId\n}\n\n// What the engine calls the blast of a shot that explodes: "Fireball Block", but "Rocket" for an RPG\'s\nfunction shotBlastName(item) {\n\tconst named = { "RPG": "Rocket", "Obby RPG": "Obby Rocket", "Super RPG": "Super Rocket", "Grenade Launcher": "Grenade", "Capitano Grenade": "Capitano Grenade" }\n\treturn named[item] || item + " Block"\n}\n\n// The engine says who hit whom with which item: the shooter\'s oldest flying shot of that item is the one that hit. A\n// shot that explodes hurts again by its blast\'s name: for a second after it lands, its blast does the shot\'s damage\n// once to each player or mob the shot itself didn\'t hit, and nothing more. A shooter in their own blast takes the\n// engine\'s damage\nfunction shotHitTarget(attacker, target, withItem) {\n\tconst now = Date.now()\n\tif (blastList) {\n\t\tblastList = blastList.filter((blast) => blast.until > now)\n\t}\n\tconst blastNow = () => blastList && blastList.find((one) => one.playerId === attacker && shotBlastName(one.item) === withItem)\n\t// A shot exploding on the ground hurts before onPlayerThrowableHitTerrain says it landed: it lands now, unless this is\n\t// a blast that already landed reaching one more\n\tconst exploded = shotList && !blastNow() ? shotList.find((one) => one.playerId === attacker && shotBlastName(one.item) === withItem) : null\n\tif (exploded) {\n\t\tshotList.splice(shotList.indexOf(exploded), 1)\n\t\tshotLanded(exploded, null)\n\t}\n\tif (target === attacker) {\n\t\treturn undefined\n\t}\n\tconst blast = blastNow()\n\tif (blast) {\n\t\tif (blast.hurt.includes(target)) {\n\t\t\treturn blast.damage === undefined ? undefined : "preventDamage"\n\t\t}\n\t\tblast.hurt.push(target)\n\t\tif (blast.onHit) {\n\t\t\tblast.onHit(target)\n\t\t}\n\t\treturn blast.damage\n\t}\n\tif (!shotList) {\n\t\treturn undefined\n\t}\n\tshotList = shotList.filter((shot) => shot.until > now)\n\tconst shot = shotList.find((one) => one.playerId === attacker && one.item === withItem)\n\tif (!shot) {\n\t\treturn undefined\n\t}\n\tshotList.splice(shotList.indexOf(shot), 1)\n\tshotLanded(shot, target)\n\tif (shot.onHit) {\n\t\tshot.onHit(target)\n\t}\n\treturn shot.damage\n}\n\n// A shot that hit someone or the ground: kept a second for its blast, if it explodes\nfunction shotLanded(shot, target) {\n\tconst now = Date.now()\n\tblastList = (blastList || []).filter((blast) => blast.until > now)\n\tblastList.push({ playerId: shot.playerId, item: shot.item, damage: shot.damage, onHit: shot.onHit, hurt: target === null ? [] : [target], until: now + 1000 })\n}\n\nfunction onPlayerDamagingOtherPlayer(attackingPlayer, damagedPlayer, damageDealt, withItem) {\n\treturn shotHitTarget(attackingPlayer, damagedPlayer, withItem)\n}\n\nfunction onPlayerDamagingMob(playerId, mobId, damageDealt, withItem) {\n\treturn shotHitTarget(playerId, mobId, withItem)\n}\n\nfunction onPlayerThrowableHitTerrain(playerId, throwableName, thrownEntityId) {\n\tif (shotList) {\n\t\tconst landed = shotList.find((shot) => shot.id === thrownEntityId)\n\t\tshotList = shotList.filter((shot) => shot.id !== thrownEntityId)\n\t\tif (landed) {\n\t\t\tshotLanded(landed, null)\n\t\t}\n\t}\n}\n\nfunction pullTowards(playerId, position, strength) {\n\tconst target = typeof position === "string" ? api.getPosition(position) : position\n\tconst from = api.getPosition(playerId)\n\tconst dx = target[0] - from[0]\n\tconst dy = target[1] - from[1]\n\tconst dz = target[2] - from[2]\n\tconst length = Math.sqrt(dx * dx + dy * dy + dz * dz)\n\tif (length < 0.5) {\n\t\treturn\n\t}\n\tconst speed = Math.min(Math.max(strength || 20, 1), 100)\n\t// Aimed a little high, as gravity pulls them down on the way (half of 20 blocks a second, for each second flying)\n\tconst lift = Math.min(10 * (length / speed), speed)\n\tapi.setVelocity(playerId, (dx / length) * speed, (dy / length) * speed + lift, (dz / length) * speed)\n\tapi.preventFallDamageNextGrounding(playerId)\n}\n\nfunction aimedBlock(playerId, range) {\n\tconst facing = api.getPlayerFacingInfo(playerId)\n\tconst far = range || 50\n\tfor (let step = 0.5; step <= far; step += 0.25) {\n\t\tconst x = Math.floor(facing.camPos[0] + facing.dir[0] * step)\n\t\tconst y = Math.floor(facing.camPos[1] + facing.dir[1] * step)\n\t\tconst z = Math.floor(facing.camPos[2] + facing.dir[2] * step)\n\t\tconst block = api.getBlock(x, y, z)\n\t\tif (block === "Unloaded") {\n\t\t\treturn null\n\t\t}\n\t\tif (block !== "Air") {\n\t\t\treturn [x, y, z]\n\t\t}\n\t}\n\treturn null\n}',
        helpers: [{
          name: "shootProjectile",
          category: "pvp",
          signature: "shootProjectile(playerId, options)",
          about: 'Shoots a real projectile from the player\'s eyes where they look. options (all optional): item (a throwable: "Arrow" (default), "Snowball", "Fireball", "Iceball"...), speed and gravity (1 normal, 2 twice as much, 0 gravity flies straight), damage (what a hit does to a player or mob; an exploding shot, a Fireball, does it once to each one its blast reaches) and onHit(targetId), run when it hits one. Returns the projectile\'s id, or null. Goes well with whenItemUsed for guns and wands.',
          example: 'shootProjectile(playerId, { item: "Fireball", speed: 2, damage: 20 })'
        }, {
          name: "pullTowards",
          category: "players",
          signature: "pullTowards(playerId, position, strength)",
          about: "Flings a player towards [x, y, z] (or towards another player or mob, given their id), strength being the speed (20 if left out), with no fall damage when they land, e.g. for a grappling hook or a launch pad. Returns nothing.",
          example: "pullTowards(playerId, [10, 20, 10], 25)"
        }, {
          name: "aimedBlock",
          category: "world",
          signature: "aimedBlock(playerId, range)",
          about: "The [x, y, z] of the block a player is looking at, up to range blocks away (50 if left out), or null if there is none in range.",
          example: "const spot = aimedBlock(playerId, 40)"
        }]
      }, {
        group: "fall",
        code: "// Ready-made falling: whenFallBelow(y, onFall) calls onFall(playerId) when a player's height drops below y, once: again\n// only after they have been back above y. One timer checks everyone a few times a second, however many whenFallBelow\n// there are. The list is a var made on first use, so it can be called from the top of the file.\nvar fallWatches\nvar fallTimer\n\nfunction whenFallBelow(y, onFall) {\n\tif (!fallWatches) {\n\t\tfallWatches = []\n\t}\n\tfallWatches.push({ y: Number(y), fn: onFall, fallen: {} })\n\tif (fallTimer === undefined) {\n\t\tfallTimer = repeatEvery(0.25, checkFallWatches)\n\t}\n}\n\nfunction checkFallWatches() {\n\tfor (const watch of fallWatches) {\n\t\tconst playerIds = api.getPlayerIds()\n\t\t// A player who left is forgotten, so someone with the same id coming back is checked afresh\n\t\tfor (const playerId of Object.keys(watch.fallen)) {\n\t\t\tif (!playerIds.includes(playerId)) {\n\t\t\t\tdelete watch.fallen[playerId]\n\t\t\t}\n\t\t}\n\t\tfor (const playerId of playerIds) {\n\t\t\t// A player can leave while onFall runs for another\n\t\t\tif (!api.getPlayerIds().includes(playerId)) {\n\t\t\t\tcontinue\n\t\t\t}\n\t\t\tif (api.getPosition(playerId)[1] >= watch.y) {\n\t\t\t\tdelete watch.fallen[playerId]\n\t\t\t} else if (!watch.fallen[playerId]) {\n\t\t\t\twatch.fallen[playerId] = true\n\t\t\t\twatch.fn(playerId)\n\t\t\t}\n\t\t}\n\t}\n}",
        uses: ["repeatEvery"],
        helpers: [{
          name: "whenFallBelow",
          category: "players",
          signature: "whenFallBelow(y, onFall)",
          about: "Runs onFall(playerId) when a player's height drops below y (they fell off the map or into the void): once, and again only after they were back above y, e.g. after you teleported them. Players who join below y count too. It checks a few times a second, so it is cheap to call several times with different y. It is not a callback to define: call it, from anywhere, even the top of the file (once, not again every round). Returns nothing.",
          example: "whenFallBelow(0, (playerId) => api.setPosition(playerId, 0, 10, 0))"
        }]
      }, {
        group: "enterBox",
        code: "// Ready-made zones: whenEnterBox(corner1, corner2, onEnter, onLeave) calls onEnter(playerId) when a player comes into\n// the box between two corners, and onLeave(playerId) (if given) when they go out of it. One timer checks everyone a few\n// times a second, however many boxes there are. The list is a var made on first use, so it can be called from the top\n// of the file.\nvar boxWatches\nvar boxTimer\n\nfunction whenEnterBox(corner1, corner2, onEnter, onLeave) {\n\tif (!boxWatches) {\n\t\tboxWatches = []\n\t}\n\tboxWatches.push({ corner1: corner1, corner2: corner2, onEnter: onEnter, onLeave: onLeave, inside: {} })\n\tif (boxTimer === undefined) {\n\t\tboxTimer = repeatEvery(0.25, checkBoxWatches)\n\t}\n}\n\nfunction checkBoxWatches() {\n\tfor (const watch of boxWatches) {\n\t\tconst playerIds = api.getPlayerIds()\n\t\t// A player who left is forgotten (onLeave isn't called for them), so coming back counts as coming in\n\t\tfor (const playerId of Object.keys(watch.inside)) {\n\t\t\tif (!playerIds.includes(playerId)) {\n\t\t\t\tdelete watch.inside[playerId]\n\t\t\t}\n\t\t}\n\t\tfor (const playerId of playerIds) {\n\t\t\t// A player can leave while onEnter runs for another\n\t\t\tif (!api.getPlayerIds().includes(playerId)) {\n\t\t\t\tcontinue\n\t\t\t}\n\t\t\tconst inside = isInBox(playerId, watch.corner1, watch.corner2)\n\t\t\tif (inside && !watch.inside[playerId]) {\n\t\t\t\twatch.inside[playerId] = true\n\t\t\t\twatch.onEnter(playerId)\n\t\t\t} else if (!inside && watch.inside[playerId]) {\n\t\t\t\tdelete watch.inside[playerId]\n\t\t\t\tif (watch.onLeave) {\n\t\t\t\t\twatch.onLeave(playerId)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}",
        uses: ["repeatEvery", "RPc"],
        helpers: [{
          name: "whenEnterBox",
          category: "world",
          signature: "whenEnterBox(corner1, corner2, onEnter, onLeave)",
          about: "Runs onEnter(playerId) when a player comes into the box between two corners, and onLeave(playerId) (optional) when they go out of it: for zones, teleporter pads, AFK zones, shop or safe areas, a finish line. Not called for a player leaving the game. It checks a few times a second. It is not a callback to define: call it, from anywhere, even the top of the file (once per box). Returns nothing.",
          example: "whenEnterBox([10, 0, 10], [12, 3, 12], (playerId) => api.setPosition(playerId, 100, 20, 100))"
        }]
      }, {
        group: "findPlayer",
        code: '// Ready-made findPlayer(nameStart): the id of the player whose name is, or else starts with, the text (capitals don\'t\n// matter, a leading @ is ignored), or null if nobody\'s does. For commands like /tp name.\nfunction findPlayer(nameStart) {\n\tlet wanted = String(nameStart === undefined || nameStart === null ? "" : nameStart).trim().toLowerCase()\n\tif (wanted.charAt(0) === "@") {\n\t\twanted = wanted.slice(1)\n\t}\n\tif (wanted === "") {\n\t\treturn null\n\t}\n\tlet found = null\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tconst name = String(api.getEntityName(playerId)).toLowerCase()\n\t\tif (name === wanted) {\n\t\t\treturn playerId\n\t\t}\n\t\tif (found === null && name.startsWith(wanted)) {\n\t\t\tfound = playerId\n\t\t}\n\t}\n\treturn found\n}',
        helpers: [{
          name: "findPlayer",
          category: "players",
          signature: "findPlayer(nameStart)",
          about: "The id of the player whose name is, or else starts with, the text (capitals don't matter, a leading @ is ignored), or null if there is none, so always check for null. For commands like /tp name and /give name.",
          example: 'addCommand("tp", (playerId, args) => { const friend = findPlayer(args[0]); if (friend) api.setPosition(playerId, ...api.getPosition(friend)) })'
        }]
      }, {
        group: "randomEvents",
        code: '// Ready-made random events: randomEvents(everySeconds, events) picks one of the events every few seconds (never the one\n// just before) and announces it. An event is { name, start, end, seconds }: start() runs when it begins, end() (if any)\n// when it is over, seconds is how long it lasts (30 if it has an end, else it is over at once). isEventOn(name) says\n// whether that event is on now (isEventOn() with no name: whether any is). The list is a var made on first use.\nvar eventsRunning\n\nfunction randomEvents(everySeconds, events) {\n\tif (!eventsRunning) {\n\t\teventsRunning = {}\n\t}\n\t// [name, start] and [name, start, end] work too\n\tconst list = events.map((entry) => {\n\t\treturn Array.isArray(entry) ? { name: entry[0], start: entry[1], end: entry[2] } : entry\n\t})\n\tlet lastEvent = null\n\tlet busy = false\n\treturn repeatEvery(everySeconds, () => {\n\t\tif (busy || list.length === 0 || api.getPlayerIds().length === 0) {\n\t\t\treturn\n\t\t}\n\t\t// Never the event just before: the same one, not the same name, so events without names still take turns\n\t\tconst choices = list.length > 1 ? list.filter((event) => event !== lastEvent) : list\n\t\tconst event = choices[Math.floor(Math.random() * choices.length)]\n\t\tconst name = event.name || "Event"\n\t\tconst key = String(name).toLowerCase()\n\t\tconst seconds = event.seconds !== undefined ? event.seconds : event.end ? 30 : 0\n\t\tlastEvent = event\n\t\tannounce("Event: " + name + "!", "gold")\n\t\tif (seconds > 0) {\n\t\t\tbusy = true\n\t\t\teventsRunning[key] = (eventsRunning[key] || 0) + 1\n\t\t\trunLater(seconds, () => {\n\t\t\t\tbusy = false\n\t\t\t\teventsRunning[key] = Math.max(0, eventsRunning[key] - 1)\n\t\t\t\tif (event.end) {\n\t\t\t\t\tevent.end()\n\t\t\t\t}\n\t\t\t\tannounce(name + " is over!", "gray")\n\t\t\t})\n\t\t}\n\t\tif (event.start) {\n\t\t\tevent.start()\n\t\t}\n\t\t// Over at once (seconds: 0): its end runs straight after\n\t\tif (seconds <= 0 && event.end) {\n\t\t\tevent.end()\n\t\t}\n\t})\n}\n\nfunction isEventOn(name) {\n\tif (!eventsRunning) {\n\t\treturn false\n\t}\n\tif (name === undefined) {\n\t\treturn Object.keys(eventsRunning).some((key) => eventsRunning[key] > 0)\n\t}\n\treturn (eventsRunning[String(name).toLowerCase()] || 0) > 0\n}',
        uses: ["repeatEvery", "runLater", "announce"],
        helpers: [{
          name: "randomEvents",
          category: "world",
          signature: "randomEvents(everySeconds, events)",
          about: 'Every few seconds picks one of the events (not the one just before), announces "Event: name!" and runs it. events is a list of { name, start, end, seconds }: start() runs when it begins; end() (optional) when it is over; seconds (optional) is how long it lasts, 30 if there is an end and otherwise it is over at once. "name is over!" is announced when it ends. Players who join during it must be handled by your own code (use isEventOn in onPlayerJoin). Can be called at the top of the file. Returns an id for cancelTimer.',
          example: 'randomEvents(120, [{ name: "Double coins", seconds: 60, start: () => setCoinMultiplier(2), end: () => setCoinMultiplier(1) }, { name: "Meteor shower", start: () => itemRain(["Diamond"], 20, [0, 10, 0], 10) }, { name: "Low gravity", seconds: 30, start: () => { for (const id of api.getPlayerIds()) setAbility(id, "gravity", true) }, end: () => { for (const id of api.getPlayerIds()) setAbility(id, "gravity", 1) } }])'
        }, {
          name: "isEventOn",
          category: "world",
          signature: "isEventOn(name)",
          about: "Whether the random event with that name (capitals don't matter) is on now; isEventOn() with no name says whether any is. Use it in your own code, e.g. in onPlayerJoin to give a player who joins during \"Low gravity\" its low gravity. An event that calls setCoinMultiplier already doubles what addCoins gives, so don't double it again.",
          example: 'if (isEventOn("Low gravity")) setAbility(playerId, "gravity", true)'
        }]
      }, {
        group: "leaderboard",
        code: '// Ready-made leaderboard: showLeaderboard(title, getValue, count) shows the top players on everyone\'s sidebar, best\n// first, and a line for the player themselves if they are further down; getValue(playerId) gives a number. It updates\n// by itself every second, beside other sidebar lines (setSidebar). hideLeaderboard(title) takes it away. The list is a\n// var made on first use, so showLeaderboard can be called from the top of the file.\nvar leaderboards\n\nfunction showLeaderboard(title, getValue, count) {\n\tif (!leaderboards) {\n\t\tleaderboards = {}\n\t}\n\thideLeaderboard(title)\n\tconst board = { title: String(title), getValue: getValue, rows: Math.max(1, Math.min(Math.floor(count || 5), 10)), shown: {}, timer: null }\n\tleaderboards[board.title] = board\n\tboard.timer = repeatEvery(1, () => {\n\t\tupdateLeaderboardRows(board)\n\t})\n\t// The first time is soon, not a second away, and not now: at the top of the file the world isn\'t ready\n\trunLater(0.1, () => {\n\t\tif (leaderboards[board.title] === board) {\n\t\t\tupdateLeaderboardRows(board)\n\t\t}\n\t})\n\treturn board.timer\n}\n\nfunction hideLeaderboard(title) {\n\tconst board = leaderboards ? leaderboards[String(title)] : null\n\tif (!board) {\n\t\treturn\n\t}\n\tcancelTimer(board.timer)\n\tdelete leaderboards[board.title]\n\tfor (const playerId of api.getPlayerIds()) {\n\t\tremoveSidebar(playerId, board.title)\n\t}\n}\n\nfunction updateLeaderboardRows(board) {\n\tconst playerIds = api.getPlayerIds()\n\tconst values = {}\n\tfor (const playerId of playerIds) {\n\t\tconst value = typeof board.getValue === "function" ? board.getValue(playerId) : board.getValue[playerId]\n\t\tvalues[playerId] = Math.round((Number(value) || 0) * 100) / 100\n\t}\n\tconst ranked = playerIds.slice().sort((a, b) => values[b] - values[a])\n\tconst lines = ranked.slice(0, board.rows).map((playerId, i) => (i + 1) + ". " + api.getEntityName(playerId) + " " + values[playerId])\n\tconst shown = {}\n\tfor (const playerId of playerIds) {\n\t\tlet text = "\\n" + lines.join("\\n")\n\t\tconst rank = ranked.indexOf(playerId)\n\t\tif (rank >= board.rows) {\n\t\t\ttext += "\\nYou: #" + (rank + 1) + " " + values[playerId]\n\t\t}\n\t\tshown[playerId] = text\n\t\t// Only a changed board is sent again\n\t\tif (board.shown[playerId] !== text) {\n\t\t\tsetSidebar(playerId, board.title, text)\n\t\t}\n\t}\n\tboard.shown = shown\n}\n\nfunction onPlayerJoin(playerId) {\n\t// A moment later, once the game\'s own onPlayerJoin has set the player up for the value to be read\n\trunLater(0.2, () => {\n\t\tfor (const title of Object.keys(leaderboards || {})) {\n\t\t\tupdateLeaderboardRows(leaderboards[title])\n\t\t}\n\t})\n}',
        uses: ["setSidebar", "repeatEvery", "runLater"],
        helpers: [{
          name: "showLeaderboard",
          category: "screen",
          signature: "showLeaderboard(title, getValue, count)",
          about: 'Shows the top count players (5 if left out, at most 10) for getValue(playerId), a number, best first, on everyone\'s sidebar under title, with a line "You: #7 ..." for a player further down. It keeps itself up to date every second and sits beside your other setSidebar lines. A second call with the same title replaces the first. Can be called at the top of the file. Returns an id.',
          example: 'showLeaderboard("Top coins", (playerId) => getCoins(playerId), 5)'
        }, {
          name: "hideLeaderboard",
          category: "screen",
          signature: "hideLeaderboard(title)",
          about: "Takes a leaderboard made with showLeaderboard off everyone's sidebar and stops updating it.",
          example: 'hideLeaderboard("Top coins")'
        }]
      }, {
        group: "selling",
        code: '// Ready-made selling: sellItems(playerId, prices) takes every one of each item in prices from the player\'s inventory and\n// gives coins for it, returning the coins earned (0 if they had none to sell). prices is { "Wheat": 5 } or [["Wheat", 5]],\n// coins for each item.\nfunction sellItems(playerId, prices) {\n\tconst entries = Array.isArray(prices) ? prices : Object.keys(prices).map((name) => [name, prices[name]])\n\tlet earned = 0\n\tfor (const entry of entries) {\n\t\tlet amount = 0\n\t\ttry {\n\t\t\tamount = api.getInventoryItemAmount(playerId, entry[0])\n\t\t} catch (e) {\n\t\t\t// Not an item name: the rest are still sold\n\t\t\tcontinue\n\t\t}\n\t\t// A negative amount is an infinite stack: never sold\n\t\tif (amount > 0) {\n\t\t\tapi.removeItemName(playerId, entry[0], amount)\n\t\t\tearned += amount * (Number(entry[1]) || 0)\n\t\t}\n\t}\n\t// The coins paid, double coins and all\n\treturn earned > 0 ? addCoins(playerId, earned) : 0\n}',
        uses: ["addCoins"],
        helpers: [{
          name: "sellItems",
          category: "economy",
          signature: "sellItems(playerId, prices)",
          about: 'Takes every one of each item in prices from the player\'s inventory and gives coins (addCoins) for them: prices is { "Wheat": 5, "Carrot": 3 } or [["Wheat", 5]], the coins for each item. Returns the coins earned, 0 if they had nothing to sell, so tell the player.',
          example: 'const earned = sellItems(playerId, { Wheat: 5, Carrot: 3 }); api.sendMessage(playerId, "Sold for " + earned + " coins")'
        }]
      }, {
        group: "lava",
        code: '// Ready-made rising lava: risingLava(corner1, corner2, everySeconds, block) fills the box between two corners [x, y, z]\n// one layer at a time from its lowest y, a new layer every few seconds (the first after the first few seconds), with\n// Lava unless another block is given. It only fills empty (air) spots, so what is built in the box stays. It returns a\n// handle for stopLava(handle, clear), which stops it and, with clear true, takes away the blocks it placed (only\n// those). A layer is filled with fillBox, so a big one is fine, and a part of the world that hasn\'t loaded yet is\n// filled once it has. It keeps nothing in a const or let, so it can be called from the top of the file.\nfunction risingLava(corner1, corner2, everySeconds, block) {\n\tconst low = [0, 1, 2].map((i) => Math.floor(Math.min(corner1[i], corner2[i])))\n\tconst high = [0, 1, 2].map((i) => Math.floor(Math.max(corner1[i], corner2[i])))\n\tconst lava = { low: low, high: high, block: block || "Lava", nextY: low[1], layers: [], timer: null, stopped: false }\n\tlava.timer = repeatEvery(Number(everySeconds) > 0 ? Number(everySeconds) : 5, () => {\n\t\tlavaRiseOneLayer(lava)\n\t})\n\treturn lava\n}\n\nfunction stopLava(lava, clear) {\n\tif (!lava) {\n\t\treturn\n\t}\n\tlava.stopped = true\n\tcancelTimer(lava.timer)\n\tif (clear) {\n\t\tconst name = String(lava.block).toLowerCase()\n\t\tfor (const layer of lava.layers) {\n\t\t\t// Only the spots it filled, and still its block: a block someone placed over it stays\n\t\t\tlavaFillLayer(lava, layer.y, (x, z) => {\n\t\t\t\tconst here = String(api.getBlock(x, layer.y, z)).toLowerCase()\n\t\t\t\treturn !layer.skipped[x + "," + z] && (here === name || here === "unloaded")\n\t\t\t}, "Air")\n\t\t}\n\t\tlava.layers = []\n\t}\n}\n\nfunction lavaRiseOneLayer(lava) {\n\tif (lava.stopped) {\n\t\treturn\n\t}\n\tconst y = lava.nextY\n\tlava.nextY++\n\tif (lava.nextY > lava.high[1]) {\n\t\tcancelTimer(lava.timer)\n\t}\n\tlavaPlaceLayer(lava, y)\n}\n\n// Notes the spots of the layer that aren\'t empty (they stay as they are), then fills the rest\nfunction lavaPlaceLayer(lava, y) {\n\tif (lava.stopped) {\n\t\treturn\n\t}\n\tconst skipped = {}\n\tfor (let x = lava.low[0]; x <= lava.high[0]; x++) {\n\t\tfor (let z = lava.low[2]; z <= lava.high[2]; z++) {\n\t\t\tconst here = api.getBlock(x, y, z)\n\t\t\tif (here === "Unloaded") {\n\t\t\t\twhenWorldLoaded([x, y, z], () => lavaPlaceLayer(lava, y))\n\t\t\t\treturn\n\t\t\t}\n\t\t\tif (here !== "Air") {\n\t\t\t\tskipped[x + "," + z] = true\n\t\t\t}\n\t\t}\n\t}\n\tlava.layers.push({ y: y, skipped: skipped })\n\tlavaFillLayer(lava, y, (x, z) => !skipped[x + "," + z], lava.block)\n}\n\n// Fills the spots of one layer that wanted(x, z) says yes to: the whole layer in one fillBox when every spot does,\n// else each row\'s runs of spots\nfunction lavaFillLayer(lava, y, wanted, blockName) {\n\tconst runs = []\n\tlet count = 0\n\tfor (let z = lava.low[2]; z <= lava.high[2]; z++) {\n\t\tlet start = null\n\t\tfor (let x = lava.low[0]; x <= lava.high[0] + 1; x++) {\n\t\t\tif (x <= lava.high[0] && wanted(x, z)) {\n\t\t\t\tcount++\n\t\t\t\tif (start === null) {\n\t\t\t\t\tstart = x\n\t\t\t\t}\n\t\t\t} else if (start !== null) {\n\t\t\t\truns.push([start, x - 1, z])\n\t\t\t\tstart = null\n\t\t\t}\n\t\t}\n\t}\n\tconst total = (lava.high[0] - lava.low[0] + 1) * (lava.high[2] - lava.low[2] + 1)\n\tif (count === total) {\n\t\tfillBox([lava.low[0], y, lava.low[2]], [lava.high[0], y, lava.high[2]], blockName)\n\t\treturn\n\t}\n\tfor (const run of runs) {\n\t\tfillBox([run[0], y, run[2]], [run[1], y, run[2]], blockName)\n\t}\n}',
        uses: ["repeatEvery", "cancelTimer", "fillBox", "whenWorldLoaded"],
        helpers: [{
          name: "risingLava",
          category: "world",
          signature: "risingLava(corner1, corner2, everySeconds, block)",
          about: 'Fills the box between two corners [x, y, z] one layer at a time from its lowest y, a new layer every everySeconds (the first one after the first everySeconds), with block ("Lava" if left out): rising lava, a flood. It only fills empty spots, so a parkour or buildings inside the box stay. Big boxes are fine. Returns a handle for stopLava. Can be called at the top of the file.',
          example: "const lava = risingLava([0, 10, 0], [30, 40, 30], 8)"
        }, {
          name: "stopLava",
          category: "world",
          signature: "stopLava(handle, clear)",
          about: "Stops a risingLava (the handle it returned). With clear true it also takes away the blocks it placed, and only those, e.g. for the next round. Returns nothing.",
          example: "stopLava(lava, true)"
        }]
      }].flatMap((cB => cB.helpers.map((Bc => ({
        ...Bc,
        group: cB.group,
        code: cB.code,
        ...cB.uses ? {
          uses: cB.uses
        } : {}
      })))));

    function Fn(cB) {
      const {
        file: Bc,
        hasErrors: nc
      } = Pn(`(${cB})`), Vc = Bc.statements[0];
      if (nc || 1 !== Bc.statements.length || !Vc || !lc().isExpressionStatement(Vc)) return null;
      const Ic = Vc.expression;
      return lc().isParenthesizedExpression(Ic) ? Ic.expression : Ic
    }

    function Jn(cB) {
      return !!(lc().isNumericLiteral(cB) || lc().isStringLiteral(cB) || lc().isNoSubstitutionTemplateLiteral(cB)) || (cB.kind === lc().SyntaxKind.TrueKeyword || cB.kind === lc().SyntaxKind.FalseKeyword || cB.kind === lc().SyntaxKind.NullKeyword || (!lc().isPrefixUnaryExpression(cB) || cB.operator !== lc().SyntaxKind.MinusToken && cB.operator !== lc().SyntaxKind.PlusToken ? lc().isArrayLiteralExpression(cB) ? cB.elements.every((cB => Jn(cB))) : !!lc().isObjectLiteralExpression(cB) && cB.properties.every((cB => lc().isPropertyAssignment(cB) && (lc().isIdentifier(cB.name) || lc().isStringLiteral(cB.name)) && Jn(cB.initializer))) : lc().isNumericLiteral(cB.operand)))
    }

    function jV(cB) {
      return lc().isNumericLiteral(cB) || lc().isPrefixUnaryExpression(cB) && lc().isNumericLiteral(cB.operand)
    }

    function Rn(cB) {
      return lc().isStringLiteral(cB) || lc().isNoSubstitutionTemplateLiteral(cB) ? cB.text : null
    }
    const iV = /"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/g;

    function Kn(cB) {
      const Bc = cB.trim();
      if ("" === Bc) return [];
      if (Bc.startsWith("{")) try {
        const cB = JSON.parse(Bc);
        if (cB && "object" === typeof cB && !Array.isArray(cB)) return Object.entries(cB).map((cB => {
          let [Bc, nc] = cB;
          return [Bc, JSON.stringify(nc)]
        }))
      } catch {}
      const nc = function(cB) {
        const Bc = Fn(cB);
        if (!Bc || !lc().isObjectLiteralExpression(Bc)) return null;
        const nc = [];
        for (const Vc of Bc.properties) {
          if (!lc().isPropertyAssignment(Vc) || !lc().isIdentifier(Vc.name) && !lc().isStringLiteral(Vc.name)) return null;
          nc.push([Vc.name.text, Vc.initializer.getText()])
        }
        return nc
      }(Bc.startsWith("{") ? Bc : `{${Bc}}`);
      if (nc) return nc;
      const Vc = [];
      let Ic = null,
        rB = 0;
      const uc = Bc.startsWith("{") ? Bc.replace(/^\{/, "").replace(/\}\s*$/, "") : Bc;
      for (const Oc of uc.split("\n")) {
        var sc, Mc, Pc, qB;
        const cB = /\/\//.exec(Oc.replace(iV, (cB => " ".repeat(cB.length)))),
          Bc = (cB ? Oc.slice(0, cB.index) : Oc).trim();
        if ("" === Bc) continue;
        if (Ic && rB > 0) Ic[1] += `\n${Bc}`;
        else {
          const cB = /^["']?([A-Za-z_$][\w$]*)["']?\s*[:=]\s*(.*)$/.exec(Bc.replace(/^[-*\u2022]\s*/, ""));
          if (!cB) continue;
          Ic = [cB[1], cB[2]], Vc.push(Ic)
        }
        const nc = Bc.replace(iV, "");
        rB = Math.max(0, rB + (null !== (sc = null === (Mc = nc.match(/[[{(]/g)) || void 0 === Mc ? void 0 : Mc.length) && void 0 !== sc ? sc : 0) - (null !== (Pc = null === (qB = nc.match(/[\]})]/g)) || void 0 === qB ? void 0 : qB.length) && void 0 !== Pc ? Pc : 0))
      }
      return Vc.map((cB => {
        let [Bc, nc] = cB;
        return [Bc, nc.trim().replace(/[,;]\s*$/, "")]
      }))
    }

    function xV(cB, Bc, nc) {
      const Vc = "string" === cB.kind || "block" === cB.kind || "item" === cB.kind || "mob" === cB.kind;
      let Ic = Fn(Bc),
        rB = Bc;
      var uc;
      if (Ic && Jn(Ic) || !Vc || (uc = Bc, rB = JSON.stringify(uc.replace(/^["'`]|["'`]$/g, "")), Ic = Fn(rB)), !Ic || !Jn(Ic)) return {
        problem: `${cB.key} must be a plain value like ${cB.value}, not ${Bc}`
      };
      if ("number" === cB.kind && !jV(Ic)) return {
        problem: `${cB.key} must be a number, like ${cB.value}`
      };
      if ("boolean" === cB.kind && Ic.kind !== lc().SyntaxKind.TrueKeyword && Ic.kind !== lc().SyntaxKind.FalseKeyword) return {
        problem: `${cB.key} must be true or false`
      };
      if ("position" === cB.kind && ! function(cB) {
          return lc().isArrayLiteralExpression(cB) && 3 === cB.elements.length && cB.elements.every(jV)
        }(Ic) && (Ic.kind !== lc().SyntaxKind.NullKeyword || "null" !== cB.value)) return {
        problem: `${cB.key} must be a position [x, y, z], like ${"null"===cB.value?"[0, 10, 0]":cB.value}`
      };
      if ("list" === cB.kind && !lc().isArrayLiteralExpression(Ic)) return {
        problem: `${cB.key} must be a list in [ ], like ${cB.value}`
      };
      if ("list" === cB.kind && cB.names && nc && lc().isArrayLiteralExpression(Ic)) return function(cB, Bc, nc, Vc) {
        const Ic = cB => cB.elements.flatMap(((Bc, Vc) => {
            if (lc().isArrayLiteralExpression(Bc)) return Ic(Bc);
            if ("item" === nc && lc().isObjectLiteralExpression(Bc)) return rB(Bc);
            const uc = cB.elements[Vc + 1],
              sc = void 0 !== uc && lc().isArrayLiteralExpression(uc);
            return null === Rn(Bc) || sc ? [] : [Bc]
          })),
          rB = cB => cB.properties.flatMap((cB => {
            if (!lc().isPropertyAssignment(cB) || !["item", "ammo", "projectile", "items"].includes(cB.name.getText().replace(/["']/g, ""))) return [];
            const Bc = cB.initializer;
            return lc().isArrayLiteralExpression(Bc) ? Ic(Bc) : null !== Rn(Bc) ? [Bc] : []
          })),
          uc = Ic(Bc),
          sc = Bc.getStart();
        let Mc = Bc.getText();
        const Pc = [],
          qB = [],
          Oc = new Map([...cB.value.matchAll(/\{ item: "([^"]+)"[^}]*?action: "(\w+)"/g)].map((cB => [cB[2], cB[1]]))),
          Tc = cB => {
            var Bc;
            const nc = cB.parent,
              Vc = null === nc || void 0 === nc ? void 0 : nc.parent;
            if (!lc().isPropertyAssignment(nc) || "item" !== nc.name.getText().replace(/["']/g, "") || !Vc || !lc().isObjectLiteralExpression(Vc)) return;
            const Ic = cB => Vc.properties.find((Bc => lc().isPropertyAssignment(Bc) && Bc.name.getText().replace(/["']/g, "") === cB)),
              rB = Ic("action"),
              uc = rB ? Oc.get(null !== (Bc = Rn(rB.initializer)) && void 0 !== Bc ? Bc : "") : void 0;
            return uc ? {
              property: nc,
              item: uc,
              named: void 0 !== Ic("name")
            } : void 0
          };
        for (const mB of [...uc].reverse()) {
          var fc;
          const cB = null !== (fc = Rn(mB)) && void 0 !== fc ? fc : "",
            Bc = Vc(nc, cB),
            Ic = null === Bc ? Tc(mB) : void 0;
          if (Ic) {
            const Bc = Ic.named ? `item: ${JSON.stringify(Ic.item)}` : `item: ${JSON.stringify(Ic.item)}, name: ${JSON.stringify(cB)}`;
            Pc.unshift(`"${cB}" isn't an item, so it is a ${Ic.item}${Ic.named?"":` named "${cB}"`}`), Mc = `${Mc.slice(0,Ic.property.getStart()-sc)}${Bc}${Mc.slice(Ic.property.getEnd()-sc)}`
          } else null === Bc ? qB.unshift(`"${cB}"`) : Bc !== cB && (Pc.unshift(`"${cB}" is "${Bc}"`), Mc = `${Mc.slice(0,mB.getStart()-sc)}${JSON.stringify(Bc)}${Mc.slice(mB.getEnd()-sc)}`)
        }
        if (qB.length > 0) return {
          problem: `${qB.join(", ")} ${1===qB.length?"item"===nc?"isn't an":"isn't a":"aren't"} ${nc} name${1===qB.length?"":"s"}, so ${cB.key} kept ${cB.value}`
        };
        return {
          value: Mc,
          ...Pc.length > 0 ? {
            fixed: Pc.join(", ")
          } : {}
        }
      }(cB, Ic, cB.names, nc);
      if (Vc) {
        const Bc = Rn(Ic);
        if (null === Bc) return {
          problem: `${cB.key} must be text in quotes, like ${cB.value}`
        };
        if (("block" === cB.kind || "item" === cB.kind || "mob" === cB.kind) && nc) {
          const Vc = nc(cB.kind, Bc);
          if (null === Vc) return {
            problem: `"${Bc}" isn't ${"item"===cB.kind?"an":"a"} ${cB.kind} name, so ${cB.key} kept ${cB.value}`
          };
          if (Vc !== Bc) return {
            value: JSON.stringify(Vc),
            fixed: `"${Bc}" is "${Vc}"`
          }
        }
      }
      return {
        value: Ic.getText()
      }
    }
    const dn = Xn,
      An = {
        parkour: "parkour, obbies and races to a finish",
        pvp: "fighting other players: arenas, kills, last one standing",
        teams: "teams against each other",
        survival: "surviving mobs, zombies and waves",
        tag: "tag, infection, hide and seek: one side chases the other",
        economy: "coins, shops, upgrades and saved progress",
        rounds: "lobbies, countdowns and rounds that start and end",
        building: "building and changing blocks",
        rn: "places, areas and random picks in the world",
        players: "players' items, health, scores and teleports",
        screen: "text on players' screens and announcements"
      };

    function Gn(cB) {
      return cB.toLowerCase().replace(/[^a-z0-9]/g, "")
    }

    function cI(cB) {
      var Bc;
      const nc = Gn(cB);
      return null !== (Bc = dn.find((cB => Gn(cB.name) === nc || Gn(cB.title) === nc))) && void 0 !== Bc ? Bc : null
    }

    function BV(cB) {
      var Bc;
      return null !== (Bc = Hn.find((Bc => Bc.name === cB))) && void 0 !== Bc ? Bc : null
    }

    function nV(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
      const nc = function(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
        return 0 === cB.length ? "" : `const CONFIG = {\n${cB.map((cB=>{var nc;return`\t${cB.key}: ${null!==(nc=Bc.get(cB.key))&&void 0!==nc?nc:cB.value}, // ${cB.about}`})).join("\n")}\n}`
      }(cB.settings, Bc);
      return `${""===nc?"":`${nc}\n\n`}${cB.code.trim()}\n`
    }

    function VV(cB) {
      const Bc = [],
        nc = new Set,
        Vc = cB => {
          const Ic = BV(cB);
          if (Ic && !nc.has(Ic.group)) {
            nc.add(Ic.group);
            for (const cB of null !== (rB = Ic.uses) && void 0 !== rB ? rB : []) {
              var rB;
              Vc(cB)
            }
            Bc.push(Ic)
          }
        };
      for (const Ic of cB) Vc(Ic);
      return Bc
    }

    function IV(cB, Bc) {
      const nc = cB => cB.replace(/\s+/g, ""),
        Vc = new RegExp(`function ${Bc.name}\\s*\\([^)]*\\)\\s*\\{`).exec(cB);
      return !!Vc && nc(Bc.code).includes(nc(cB.slice(Vc.index, Vc.index + 200)).slice(0, 60))
    }

    function rI(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Set;
      if (!Nn(cB)) return {
        text: cB,
        added: []
      };
      let nc = cB;
      const Vc = [];
      for (let Ic = 0; Ic < 4; Ic++) {
        const cB = vV(nc),
          Ic = [...Dn(nc)].filter((Vc => {
            const Ic = BV(Vc);
            return null !== Ic && !Bc.has(Vc) && (!cB.has(Vc) || IV(nc, Ic))
          }));
        let rB = !1;
        for (const Bc of VV(Ic)) {
          const uc = Cn(nc, Bc.code, {
            owner: Bc.group,
            chainCallbacks: !0
          });
          uc && uc.text !== nc && (nc = uc.text, rB = !0, cB.has(Bc.name) || Vc.push(...Hn.filter((cB => cB.group === Bc.group && Ic.includes(cB.name))).map((cB => cB.name))))
        }
        if (!rB) break
      }
      return {
        text: nc,
        added: [...new Set(Vc)]
      }
    }

    function uV(cB, Bc) {
      const nc = [...vV(Bc.code)].filter((cB => "CONFIG" !== cB && !un(cB)));
      if (0 === nc.length) return cB.includes(Bc.code.trim().slice(0, 80));
      const Vc = Nn(cB) ? vV(cB) : new Set;
      return 2 * nc.filter((cB => Vc.has(cB))).length >= nc.length
    }

    function sV(cB) {
      const Bc = /^const CONFIG = \{\n([\s\S]*?)\n\}/m.exec(cB.code);
      return Bc ? Bc[1].split("\n").flatMap((cB => {
        const Bc = /^\t(\w+): (.+?), \/\/ (.*)$/.exec(cB);
        if (!Bc) return [];
        const [, nc, Vc, Ic] = Bc;
        return [{
          key: nc,
          kind: /^-?\d/.test(Vc) ? "number" : "true" === Vc || "false" === Vc ? "boolean" : Vc.startsWith("[") ? "list" : "string",
          value: Vc,
          about: Ic
        }]
      })) : []
    }

    function MV(cB) {
      const Bc = new Set(cB.settings.map((cB => cB.key))),
        nc = new Map;
      for (const Vc of VV(Dn(cB.code)))
        for (const cB of sV(Vc)) Bc.has(cB.key) || nc.set(cB.key, cB);
      return [...nc.values()]
    }

    function PV(cB, Bc, nc, Vc) {
      const Ic = MV(Bc),
        rB = function(cB, Bc, nc) {
          const Vc = new Map,
            Ic = [],
            rB = [],
            uc = new Map(cB.settings.map((cB => [cB.key.toLowerCase(), cB])));
          for (const [sc, Mc] of Kn(Bc)) {
            const Bc = uc.get(sc.toLowerCase());
            if (!Bc) {
              Ic.push(`${cB.name} has no setting ${sc}`);
              continue
            }
            if (/^CONFIG\.\w+$/.test(Mc.trim())) continue;
            const Pc = xV(Bc, Mc, nc);
            "problem" in Pc ? Ic.push(Pc.problem) : (Vc.set(Bc.key, Pc.value), Pc.fixed && rB.push(Pc.fixed))
          }
          return {
            values: Vc,
            problems: Ic,
            fixed: rB
          }
        }({
          ...Bc,
          settings: [...Bc.settings, ...Ic]
        }, nc, Vc),
        uc = Ic.filter((cB => rB.values.has(cB.key))),
        sc = Cn(cB, nV({
          ...Bc,
          settings: [...Bc.settings, ...uc]
        }, rB.values), {
          owner: Bc.name,
          overrides: new Set(rB.values.keys()),
          heading: "" === cB.trim() ? void 0 : `// ---- ${Bc.title} (ready-made) ----`
        });
      if (!sc) return {
        error: Nn(cB) ? "The prefab couldn't be fitted into the code around it without breaking it. Put it into an empty file instead." : "The code around it doesn't parse (a bracket is likely missing), so the prefab couldn't be fitted in. Fix the code first."
      };
      const Mc = rI(sc.text);
      return {
        prefab: Bc,
        text: Mc.text,
        problems: rB.problems,
        fixed: rB.fixed,
        chained: sc.chained,
        helpers: Mc.added
      }
    }

    function qI(cB) {
      return `- ${cB.name}: ${cB.summary}. Settings: ${cB.settings.map((cB=>cB.key)).join(", ")}`
    }

    function OV(cB) {
      var Bc;
      const nc = null !== (Bc = null === cB || void 0 === cB ? void 0 : cB.trim().toLowerCase()) && void 0 !== Bc ? Bc : "",
        Vc = Object.keys(An).includes(nc) ? nc : void 0,
        Ic = Vc ? dn.filter((cB => cB.category === Vc)) : dn,
        rB = Vc ? Hn.filter((cB => cB.category === Vc)) : [];
      return `${Vc?`Prefabs for ${An[Vc]}:`:""===nc||"all"===nc?"Every prefab:":`There is no category ${cB}. Every prefab:`}\n${Ic.length>0?Ic.map(qI).join("\n"):"(none yet)"}${rB.length>0?`\nReady-made functions for it (call them; their code is added by itself):\n${rB.map((cB=>`- ${cB.signature}: ${cB.about}`)).join("\n")}`:""}${Vc?"":`\nCategories: ${Object.keys(An).join(", ")}`}`
    }

    function TV(cB, Bc) {
      var nc;
      const Vc = [...cB.settings, ...MV(cB)].map((cB => `- ${cB.key} (${cB.kind}, default ${cB.value}): ${cB.about}`)).join("\n"),
        Ic = null !== (nc = cB.changeable) && void 0 !== nc && nc.length ? `\nFunctions to replace by name for a game of their own:\n${cB.changeable.map((cB=>`- ${cB.name}: ${cB.about}`)).join("\n")}` : "",
        rB = Bc ? `\nIts code, as it goes in with the default settings:\n${nV(cB)}` : "";
      return `${cB.name} (${cB.title}): ${cB.summary}.\nHow it plays: ${cB.howItPlays}\nSettings:\n${Vc}${Ic}${cB.setup?`\nThe creator sets up: ${cB.setup}`:""}${rB}`
    }

    function fV(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4;
      const nc = function(cB) {
          return new Set(cB.toLowerCase().split(/[^a-z0-9]+/).filter((cB => cB.length > 1)))
        }(cB),
        Vc = ` ${cB.toLowerCase().replace(/[^a-z0-9]+/g," ")} `;
      return dn.map((cB => {
        const Bc = cB.keywords.map((cB => cB.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim())).filter((cB => cB.includes(" ") ? Vc.includes(` ${cB} `) : nc.has(cB))),
          Ic = Math.min(...Bc.map((cB => Vc.indexOf(` ${cB} `))));
        return {
          prefab: cB,
          score: Bc.length,
          first: Ic
        }
      })).filter((cB => cB.score > 0)).sort(((cB, Bc) => Bc.score - cB.score || cB.first - Bc.first)).slice(0, Bc).map((cB => cB.prefab))
    }
    const mI = /\byour\s+(?:real\s+|full\s+|first\s+|last\s+)?(?:name|age|school|address|email|phone|birthday)\b|\bhow old\b|\bwhere (?:do )?you live\b|\be-?mail\b|\bphone number\b|\bpassword\b/i;

    function eV(cB) {
      var Bc, nc, Vc, Ic, rB, uc;
      const sc = function(cB) {
          var Bc, nc;
          const Vc = null === (Bc = cB.questions) || void 0 === Bc ? void 0 : Bc.trim();
          if (null !== (nc = cB.question) && void 0 !== nc && nc.trim() || !Vc) return cB;
          const Ic = {
            ...cB,
            question: Vc
          };
          if (!/^[[{]/.test(Vc)) return Ic;
          try {
            const Bc = JSON.parse(Vc),
              nc = Array.isArray(Bc) ? Bc[0] : Bc;
            if ("string" === typeof nc) {
              const Vc = Array.isArray(Bc) ? Bc.slice(1).filter((cB => "string" === typeof cB)) : [];
              return {
                ...cB,
                question: nc,
                ...Vc.length > 0 && void 0 === cB.choices ? {
                  choices: Vc.join("\n")
                } : {}
              }
            }
            if ("object" !== typeof nc || null === nc) return Ic;
            const rB = nc,
              uc = cB => "string" === typeof cB ? cB : "boolean" === typeof cB ? String(cB) : Array.isArray(cB) ? cB.filter((cB => "string" === typeof cB)).join("\n") : void 0,
              sc = {
                question: uc(rB.question),
                choices: uc(rB.choices),
                allow_other: uc(rB.allow_other)
              };
            return {
              ...cB,
              ...Object.fromEntries(Object.entries(sc).filter((cB => {
                let [, Bc] = cB;
                return void 0 !== Bc
              })))
            }
          } catch {
            return Vc.startsWith("[") ? Ic : cB
          }
        }(cB),
        Mc = null !== (Bc = null === (nc = sc.question) || void 0 === nc ? void 0 : nc.replace(/\s+/g, " ").trim()) && void 0 !== Bc ? Bc : "",
        Pc = (null !== (Vc = sc.choices) && void 0 !== Vc ? Vc : "").includes("\n") ? (null !== (Ic = sc.choices) && void 0 !== Ic ? Ic : "").split("\n") : (null !== (rB = sc.choices) && void 0 !== rB ? rB : "").split("|"),
        qB = [...new Set(Pc.map((cB => cB.replace(/^\s*(?:[-*\u2022]|\d+[.)])\s*/, "").trim())).filter(Boolean))].slice(0, 4),
        Oc = "false" !== (null === (uc = sc.allow_other) || void 0 === uc ? void 0 : uc.trim().toLowerCase());
      return "" === Mc || mI.test(Mc) || qB.length < 2 && !Oc ? null : {
        question: Mc,
        choices: qB,
        allowOther: Oc
      }
    }
    const tI = new RegExp(String.raw`^(?:\s*(?:We(?:'ll|'d| will| need to| should| must| can(?!'t))|Will use|Need to|Simpler:)(?:[^\n.]*\.(?=[A-Z])|[^\n]*(?:\n+|$))|\s*(?:Now,? )?(?:I'll |I will |[Ll]et's |[Ll]et me )?(?:[Ww]rite|[Mm]ake|[Ss]end|[Oo]utput|[Pp]roduce|[Uu]se|[Dd]o|[Cc]all) (?:the |an? |one )?(?:${yn.map((cB=>cB.name)).filter((cB=>"plan"!==cB&&"remember"!==cB)).join("|")})\b[^\n.]*\.?[ \t]*\n*)+`),
      SV = /^\s*(?:\.\.\.|\u2026)\s*$/,
      yI = /^[ \t]*(?:\/\/|\/\*)[ \t]*(?:(?:\.\.\.|\u2026)[ \t]*(?:\*\/)?[ \t]*$|(?:\.\.\.|\u2026)?[ \t]*(?:existing code|rest of (?:the |your )?(?:code|file)))/im;

    function zI(cB, Bc) {
      if (SV.test(cB)) return !0;
      const nc = new Set(Bc.split("\n").map((cB => cB.trim())));
      return cB.split("\n").some((cB => yI.test(cB) && !nc.has(cB.trim())))
    }
    const pV = /```(?:js|javascript|ts|typescript)?\n([\s\S]*?)```/g,
      hV = String.raw`on[A-Z]\w*|tick|playerCommand`,
      aI = new RegExp(String.raw`^(?:(?:async\s+)?function\s+(?:${hV})\s*\(|(?:${hV})\s*=\s*(?:async\s+)?(?:function\b|\())`, "m"),
      lV = new RegExp(`^(?:${hV})$`),
      YV = new RegExp(String.raw`^(${hV})(\s*\([^()\n]*\)\s*\{)`, "gm"),
      LV = new RegExp(String.raw`\bapi\.|\bfunction\s+(?:${hV})\b|\buse_?prefab\s*\(`, "i");

    function gI(cB) {
      return cB.replace(/^\s*```[\w-]*[^\n]*\n/, "").replace(/\n?```\s*$/, "")
    }

    function UV(cB) {
      return gI(cB).replace(/\s*$/, "\n")
    }

    function bI(cB, Bc) {
      switch (cB) {
        case "view_file":
          return void 0 === Bc.path ? Bc : {
            path: ZV(Bc.path)
          };
        case "fetch_url":
          return void 0 === Bc.url ? Bc : {
            url: pc(Bc.url)
          };
        default:
          return Bc
      }
    }

    function ZV(cB) {
      return cB.trim().replace(/^\.?\//, "")
    }

    function QV(cB) {
      return cB.replace(YV, "function $1$2")
    }

    function CV(cB) {
      return cB.replace(/\bif\s*\(\s*(\/\*(?:(?!\*\/)[^])*\*\/)\s*\)/g, "if (false $1)")
    }

    function vI(cB, Bc, nc, Vc) {
      let Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
        rB = arguments.length > 5 ? arguments[5] : void 0,
        uc = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "offer",
        sc = arguments.length > 7 ? arguments[7] : void 0,
        Mc = arguments.length > 8 ? arguments[8] : void 0;
      const Pc = {
          ...nc
        },
        qB = new Set,
        Oc = [];
      let Tc;
      const mB = (cB, Bc, nc, Vc) => {
        Oc.push({
          tool: cB,
          path: Bc,
          reason: nc,
          closest: null,
          functions: [],
          ...Vc,
          ...Tc ? {
            call: Tc
          } : {}
        })
      };
      let ec = cB;
      const tB = Object.keys(nc).some(fc.g),
        Sc = cB => null !== cB && tB && (0, fc.g)(cB),
        yB = cB => Sc(cB) ? `${fc.n}${(0,fc.j)(cB)}` : null !== rB && void 0 !== rB ? rB : ZV(cB),
        zB = cB => void 0 === rB || Sc(cB),
        pc = cB => void 0 !== sc && !sc.has(cB),
        hc = new Set,
        aB = cB => JSON.stringify({
          name: cB.name,
          args: cB.args
        }),
        lc = cB => {
          const Bc = Sc(cB) ? {
              name: "view_world_code",
              args: {}
            } : {
              name: "view_file",
              args: {
                path: cB
              }
            },
            nc = Tc ? {
              ...Bc,
              call: Tc
            } : Bc;
          hc.add(aB(nc)), Lc(nc)
        },
        Yc = [],
        Lc = cB => {
          const Bc = aB(cB);
          Yc.length < 4 && !Yc.some((cB => aB(cB) === Bc)) && Yc.push(cB)
        },
        gB = [],
        bB = [],
        vB = [],
        Nc = new Map,
        Ec = new Map,
        oc = (cB, Bc, nc) => {
          var Vc;
          const Ic = function(cB) {
              const Bc = cB.replace(/\s+/g, " ").trim();
              if (Bc.length <= 80) return Bc;
              const nc = Bc.slice(0, 80);
              return `${nc.slice(0,Math.max(nc.lastIndexOf(" "),40)).replace(/[\s,.;:]+$/,"")}\u2026`
            }(null !== Bc && void 0 !== Bc ? Bc : ""),
            rB = null !== (Vc = Nc.get(cB)) && void 0 !== Vc ? Vc : [];
          var uc;
          ("" === Ic || rB.includes(Ic) || Nc.set(cB, [...rB, Ic]), "" !== Ic) && Ec.set(cB, [...null !== (uc = Ec.get(cB)) && void 0 !== uc ? uc : [], {
            why: Ic,
            code: nc
          }])
        },
        Wc = new Set,
        wc = [],
        kB = new Map,
        Hc = [];
      let Fc = null;
      const jB = [];
      let iB = [];
      const dc = (cB, Bc) => void 0 !== rB && !Sc(cB) && (null === cB || ZV(cB) !== rB) && aI.test(Bc),
        Ac = (cB, Bc, nc, Vc) => {
          var Ic, rB;
          const uc = function(cB, Bc, nc, Vc) {
            const Ic = cI(Bc);
            return Ic ? PV(cB, Ic, nc, Vc) : {
              error: `There is no prefab called ${Bc}. The prefabs are: ${dn.map((cB=>cB.name)).join(", ")}.`
            }
          }(null !== (Ic = Pc[cB]) && void 0 !== Ic ? Ic : "", Bc, nc, Mc);
          return "error" in uc ? (mB("use_prefab", cB, "prefab", {
            detail: uc.error
          }), !1) : (Pc[cB] = uc.text, qB.add(cB), kB.set(cB, {
            prefab: uc.prefab,
            settings: nc
          }), oc(cB, null !== Vc && void 0 !== Vc ? Vc : uc.prefab.title, uc.text), wc.push({
            name: uc.prefab.name,
            title: uc.prefab.title,
            path: cB,
            problems: uc.problems,
            fixed: uc.fixed,
            setup: null !== (rB = uc.prefab.setup) && void 0 !== rB ? rB : null
          }), !0)
        },
        cn = (cB, Bc, nc) => {
          const Vc = Wn(Bc);
          if (0 === Vc.calls.length) return !1;
          Pc[cB] = Vc.code, qB.add(cB);
          for (const Ic of Vc.calls) Ac(cB, Ic.name, Ic.settings, nc);
          return oc(cB, nc, Vc.code), !0
        },
        BB = cB => {
          const Bc = fB(QV(UV(cB)), Ic);
          gB.push(Bc.code), vB.push(...Bc.renames)
        },
        nB = In(cB, Bc),
        VB = new Map;
      for (const fc of nB) {
        var IB, rn, uB, sB;
        const cB = null !== (IB = VB.get(fc.name)) && void 0 !== IB ? IB : 0;
        VB.set(fc.name, cB + 1), Tc = {
          name: fc.name,
          nth: cB
        };
        const Bc = ("replace_function" === fc.name || "insert_code" === fc.name) && void 0 === fc.args.code && void 0 !== fc.args.content ? {
            ...fc,
            args: {
              ...fc.args,
              code: fc.args.content,
              path: null !== (rn = null !== (uB = null !== (sB = fc.args.path) && void 0 !== sB ? sB : rB) && void 0 !== uB ? uB : Vc) && void 0 !== rn ? rn : void 0
            }
          } : fc,
          {
            path: Ic,
            content: uc,
            search: sc,
            replace: Oc,
            code: tB
          } = Bc.args,
          Sc = pB(Bc.name),
          hc = `${Bc.name}\n${JSON.stringify({...Bc.args,why:void 0})}`,
          aB = Wc.has(hc);
        if (Sc.annotations.idempotentHint && aB) ec = ec.replace(Bc.source, "");
        else {
          if (Wc.add(hc), zn(Bc.name)) {
            const cB = Object.fromEntries(Object.entries(Bc.args).flatMap((cB => {
              let [Bc, nc] = cB;
              return void 0 === nc || "" === nc.trim() ? [] : [
                [Bc, nc.trim()]
              ]
            })));
            Lc({
              name: Bc.name,
              args: bI(Bc.name, cB),
              call: Tc
            })
          } else if ("add_world_code" === Bc.name) {
            if (void 0 === rB) continue;
            void 0 !== tB ? BB(tB) : mB(Bc.name, null, "missingArgs")
          } else if ("use_prefab" === Bc.name) {
            const cB = void 0 !== Ic && "" !== Ic.trim() ? yB(Ic) : void 0 === rB ? null !== Vc && void 0 !== Vc ? Vc : "index.js" : null;
            if (void 0 === Bc.args.name || "" === Bc.args.name.trim()) mB(Bc.name, cB, "missingArgs");
            else if (null !== cB && zB(cB)) {
              var MB;
              Ac(cB, Bc.args.name, null !== (MB = Bc.args.settings) && void 0 !== MB ? MB : "", Bc.args.why)
            } else mB(Bc.name, cB, "prefab", {
              detail: "A prefab goes in World Code, not in a code block."
            })
          } else if ("ask_creator" === Bc.name) Fc ??= eV(Bc.args);
          else if ("plan" === Bc.name) {
            var qn;
            if (0 === iB.length) iB = PB(null !== (qn = Bc.args.steps) && void 0 !== qn ? qn : "")
          } else if ("remember" === Bc.name) {
            var OB;
            const cB = Gc(null !== (OB = Bc.args.note) && void 0 !== OB ? OB : "");
            null !== cB && 0 === jB.length && jB.push(cB)
          } else if ("export_game" === Bc.name || "switch_to_world_code" === Bc.name) {
            if ("switch_to_world_code" === Bc.name && void 0 === rB) continue;
            const cB = "export_game" === Bc.name ? "exportGame" : "switchToWorldCode";
            var TB;
            if (!bB.some((Bc => Bc.kind === cB))) bB.push("export_game" === Bc.name ? {
              kind: "exportGame"
            } : {
              kind: "switchToWorldCode",
              request: (null === (TB = Bc.args.request) || void 0 === TB ? void 0 : TB.trim()) || null
            })
          } else if ("write_file" === Bc.name) {
            var mn, eB;
            if (Bn(Bc))
              if (void 0 === uc || "" !== uc.trim() && !zI(gI(uc), void 0 === Ic ? "" : null !== (mn = Pc[yB(Ic)]) && void 0 !== mn ? mn : "")) {
                if (void 0 !== Ic && void 0 !== uc && dc(Ic, uc)) BB(uc);
                else if (void 0 !== Ic && pc(yB(Ic)) && "" !== (null !== (eB = nc[yB(Ic)]) && void 0 !== eB ? eB : "").trim()) mB(Bc.name, yB(Ic), "unread", void 0 === uc ? void 0 : {
                  code: UV(uc)
                }), lc(yB(Ic));
                else if (void 0 !== Ic && void 0 !== uc) {
                  const cB = yB(Ic),
                    nc = wn(UV(uc));
                  if (!zB(cB) || !cn(cB, nc, Bc.args.why)) {
                    const Vc = kB.get(cB),
                      Ic = Vc && !uV(nc, Vc.prefab) ? PV(nc, Vc.prefab, Vc.settings, Mc) : null;
                    Pc[cB] = Ic && !("error" in Ic) ? Ic.text : nc, qB.add(cB), oc(cB, Bc.args.why, uc)
                  }
                }
              } else mB(Bc.name, void 0 === Ic ? null : yB(Ic), "placeholder");
            else mB(Bc.name, void 0 === Ic ? null : yB(Ic), "missingArgs")
          } else if ("replace_function" === Bc.name || "insert_code" === Bc.name) {
            var tn, SB, yn;
            const cB = void 0 === Ic ? null : yB(Ic),
              nc = "replace_function" === Bc.name ? Bc.args.name : Bc.args.after,
              Vc = void 0 === nc ? void 0 : Xc(nc),
              rB = null === cB ? "" : null !== (tn = Pc[cB]) && void 0 !== tn ? tn : "",
              uc = void 0 === tB ? "" : gI(tB),
              sc = null === cB ? void 0 : kB.get(cB),
              Mc = "replace_function" === Bc.name && void 0 !== sc && void 0 !== Vc && lV.test(Vc) && vV(sc.prefab.code).has(Vc),
              Oc = null === cB || void 0 === tB || void 0 === nc ? null : Mc ? null !== (SB = null === (yn = Cn(rB, uc, {
                owner: "extra",
                runsLast: !0
              })) || void 0 === yn ? void 0 : yn.text) && void 0 !== SB ? SB : null : "replace_function" === Bc.name ? Jc(rB, nc, uc) : Kc(rB, nc, uc);
            null === cB || null === Oc ? mB(Bc.name, cB, Bn(Bc) ? "brokenCode" : "missingArgs") : zI(uc, rB) ? mB(Bc.name, cB, "placeholder") : "replace_function" === Bc.name && pc(cB) && xB(rB).includes(null !== Vc && void 0 !== Vc ? Vc : "") ? (mB(Bc.name, cB, "unread", {
              code: UV(uc)
            }), lc(cB)) : (Pc[cB] = Oc, qB.add(cB), oc(cB, Bc.args.why, uc))
          } else {
            var hB, an;
            const cB = !0 === (null === (hB = Sc._meta) || void 0 === hB ? void 0 : hB.appliesAtOnce) ? null !== rB && void 0 !== rB ? rB : Vc : void 0 === Ic ? null : yB(Ic),
              nc = null === cB ? "" : null !== (an = Pc[cB]) && void 0 !== an ? an : "",
              uc = Bn(Bc) && void 0 !== sc,
              Mc = uc ? Uc(nc, sc) : null,
              Tc = null === Mc && void 0 !== sc && sc.includes("\\n") ? Uc(nc, LB(sc)) : null,
              fc = null !== Mc && void 0 !== Mc ? Mc : Tc,
              ec = null !== Tc ? LB(null !== Oc && void 0 !== Oc ? Oc : "") : null !== Oc && void 0 !== Oc ? Oc : "",
              tB = null === fc || void 0 === sc ? ec : Qc(nc.slice(fc.from, fc.to), Zc(nc, fc, null !== Tc ? LB(sc) : sc, ec), Cc(nc.slice(fc.to)));
            if (null === cB || null === fc) mB(Bc.name, cB, uc ? "noMatch" : "missingArgs", {
              closest: uc ? Dc(nc, sc) : null,
              functions: zB(cB) ? xB(nc) : []
            });
            else if (zI(tB, nc.slice(fc.from, fc.to))) mB(Bc.name, cB, "placeholder");
            else {
              const Vc = zB(cB) ? Rc(nc, fc.from, fc.to, null !== sc && void 0 !== sc ? sc : "", ec) : null;
              Pc[cB] = null !== Vc && void 0 !== Vc ? Vc : nc.slice(0, fc.from) + tB + nc.slice(fc.to), qB.add(cB), oc(cB, Bc.args.why, tB)
            }
          }
          ec = ec.replace(Bc.source, "")
        }
      }
      Tc = void 0, ec = rV(ec);
      const lB = ec.replace(tI, "");
      if (ec = "" !== lB.trim() || nB.length > 0 ? lB : ec, 0 === nB.length) {
        var YB, gn;
        const Bc = [...cB.matchAll(pV)],
          nc = 1 === Bc.length ? Bc[0][1] : null,
          Ic = null !== (YB = null !== rB && void 0 !== rB ? rB : Vc) && void 0 !== YB ? YB : "index.js";
        if (null !== nc && dc(null, nc)) BB(nc), ec = ec.replace(Bc[0][0], "");
        else if (null !== nc && LV.test(nc) && !zI(nc, null !== (gn = Pc[Ic]) && void 0 !== gn ? gn : "")) {
          const cB = wn(UV(nc));
          zB(Ic) && cn(Ic, cB, void 0) || (Pc[Ic] = cB, qB.add(Ic)), ec = ec.replace(Bc[0][0], "")
        }
      }
      for (const fc of qB) {
        var UB;
        if (zB(fc)) {
          var bn;
          const cB = Object.values(Pc).some((cB => /\brequire\s*\(/.test(cB)));
          Pc[fc] = kV(wn(cB ? Pc[fc] : Pc[fc].replace(/^module\.exports\s*=\s*(?:\{[\s\w$,:]*\}|[\w$]+)\s*;?[ \t]*(?:\n|$)/gm, "")), null !== (bn = nc[fc]) && void 0 !== bn ? bn : "");
          const Bc = new Set(Object.keys(Pc).filter((cB => cB !== fc && zB(cB))).flatMap((cB => [...vV(Pc[cB])]))),
            Vc = rI(Pc[fc], Bc);
          Pc[fc] = Vc.text, Hc.push(...Vc.added)
        }
        const cB = fB(CV(QV(Pc[fc])), zB(fc) ? Ic : [], null !== (UB = nc[fc]) && void 0 !== UB ? UB : "");
        Pc[fc] = cB.code, vB.push(...cB.renames)
      }
      for (const fc of wc) {
        const cB = fc.problems.length > 0 ? ` Kept as it was: ${fc.problems.join("; ")}.` : "",
          Bc = fc.fixed.length > 0 ? ` Names changed to real ones: ${fc.fixed.join(", ")}.` : "";
        ec += `\n\nThis uses the ready-made ${fc.title}.${Bc}${cB}${fc.setup?` ${fc.setup}`:""}`
      }
      for (const {
          from: fc,
          to: Uc
        }
        of vB) ec += `\n\nI renamed \`${fc}\` to \`${Uc}\`, the name World Code calls.`;
      const ZB = [];
      for (const fc of qB) {
        var QB;
        const cB = null !== (QB = nc[fc]) && void 0 !== QB ? QB : "";
        if (Pc[fc] !== cB) {
          const Bc = Nc.get(fc);
          ZB.push(Bc ? {
            path: fc,
            before: cB,
            after: Pc[fc],
            why: Bc,
            parts: Ec.get(fc)
          } : {
            path: fc,
            before: cB,
            after: Pc[fc]
          })
        }
      }
      const CB = "direct" === uc && ZB.length > 0,
        vn = ZB.length > 0 || gB.length > 0;
      return {
        text: ec.replace(/\n{3,}/g, "\n\n").trim(),
        changes: ZB,
        failedEdits: Oc,
        renamedCallbacks: vB,
        worldCode: gB,
        inPlace: CB,
        actions: bB,
        question: vn ? null : Fc,
        notes: jB,
        plan: vn ? [] : iB,
        lookups: vn ? Yc.filter((cB => hc.has(aB(cB)))) : null !== Fc || iB.length > 0 ? [] : Yc,
        prefabs: wc,
        helpersAdded: [...new Set(Hc)]
      }
    }

    function DV(cB, Bc) {
      const nc = "" === cB ? [] : cB.replace(/\n$/, "").split("\n"),
        Vc = "" === Bc ? [] : Bc.replace(/\n$/, "").split("\n");
      let Ic = 0;
      for (; Ic < nc.length && Ic < Vc.length && nc[Ic] === Vc[Ic];) Ic++;
      let rB = nc.length,
        uc = Vc.length;
      for (; rB > Ic && uc > Ic && nc[rB - 1] === Vc[uc - 1];) rB--, uc--;
      const sc = nc.slice(Ic, rB),
        Mc = Vc.slice(Ic, uc),
        Pc = Array.from({
          length: sc.length + 1
        }, (() => new Array(Mc.length + 1).fill(0)));
      for (let fc = sc.length - 1; fc >= 0; fc--)
        for (let cB = Mc.length - 1; cB >= 0; cB--) Pc[fc][cB] = sc[fc] === Mc[cB] ? Pc[fc + 1][cB + 1] + 1 : Math.max(Pc[fc + 1][cB], Pc[fc][cB + 1]);
      const qB = nc.slice(0, Ic).map((cB => ({
        kind: "same",
        text: cB
      })));
      let Oc = 0,
        Tc = 0;
      for (; Oc < sc.length || Tc < Mc.length;) Oc < sc.length && Tc < Mc.length && sc[Oc] === Mc[Tc] ? (qB.push({
        kind: "same",
        text: sc[Oc]
      }), Oc++, Tc++) : Tc < Mc.length && (Oc === sc.length || Pc[Oc][Tc + 1] > Pc[Oc + 1][Tc]) ? (qB.push({
        kind: "added",
        text: Mc[Tc]
      }), Tc++) : (qB.push({
        kind: "removed",
        text: sc[Oc]
      }), Oc++);
      for (const fc of nc.slice(rB)) qB.push({
        kind: "same",
        text: fc
      });
      return qB
    }
    const NV = /\b(?:publish|export)\b|\bsave\b.{0,20}\b(?:game|world|map|it|this|work)\b/i;

    function EV(cB) {
      return NV.test(cB)
    }
    const oV = {
      worldCode: new Set(["write_file", "edit_file", "replace_function", "use_prefab", "edit_code_in_place", "export_game", "ask_creator", "plan", "remember", "view_file", "view_chunk", "view_game_state", "get_docs", "find_names", "view_prefab", "view_errors"]),
      codeBlock: new Set(["write_file", "edit_file", "replace_function", "add_world_code", "edit_code_in_place", "switch_to_world_code", "ask_creator", "view_world_code", "view_chunk", "view_game_state", "get_docs", "find_names", "view_errors"])
    };

    function WV(cB, Bc, nc) {
      return HB[cB].formatCall(Bc, nc)
    }

    function wV(cB, Bc, nc, Vc) {
      return HB[nc].declareTools(cB, Bc, Vc)
    }

    function kI(cB) {
      const Bc = null === cB.path ? cB.tool : `${cB.tool} ${cB.path}`;
      var nc;
      if ("prefab" === cB.reason) return `${Bc}: ${null!==(nc=cB.detail)&&void 0!==nc?nc:"the prefab couldn't go in."} Nothing changed.`;
      if ("missingArgs" === cB.reason) return `${Bc}: the call was missing an argument it needs, so nothing changed.`;
      if ("placeholder" === cB.reason) return "write_file" === cB.tool ? `${Bc}: the content was only "..." or had a line standing in for the rest, so nothing changed. Send the whole file, every line of it.` : `${Bc}: the code had a line standing in for code left out ("// ... existing code ..."), so nothing changed. Write out every line it replaces.`;
      if ("unread" === cB.reason) return `${Bc}: you hadn't seen this code, so writing it whole could have lost what it has, and nothing changed. Make the change from its code, which ${null!==cB.path&&(0,fc.g)(cB.path)?"view_world_code":"view_file"} shows.`;
      if ("brokenCode" === cB.reason) return `${Bc}: the code around that function doesn't parse (a bracket is likely missing), so where it ends isn't clear and nothing changed. Send the whole fixed file with write_file instead.`;
      return `${Bc}: search matched nothing in the file, so nothing changed. ${cB.closest?`The closest lines (${cB.closest.line}-${cB.closest.lastLine}) are:\n${cB.closest.text}`:"No lines in the file are like it."}\nCopy the lines exactly${cB.functions.length>0?`, or use replace_function with one of these names: ${cB.functions.join(", ")}`:""}.`
    }
    const XV = {
        offer: "matched",
        list: "matched",
        categories: !1,
        helperIndex: !0
      },
      HV = /\b(?:game|minigame|mini-game|gamemode|game mode|map|server)\b/i;

    function FV(cB) {
      return Object.values(cB).some((cB => "" !== cB.trim()))
    }
    const JV = {
        format: "simple",
        nativeTools: !1
      },
      jI = cB => `You are the coding helper inside Bloxd's World Code editor. Bloxd is a voxel game; World Code is JavaScript that runs on the game server for one world. The person asking is a young creator (13 or older) who is new to coding.\n\nHow World Code works:\n- The engine calls special top-level functions ("callbacks") when things happen: function onPlayerJoin(playerId) {...}, function tick(ms) {...}, function playerCommand(playerId, command) {...} and the others ${cB?"in the docs":"in the callback list"}. Define each callback once; never call callbacks yourself.\n- playerCommand gets the chat line without its "/" (e.g. "speed 2"); return true when you handled the command, so the player isn't told it is unknown.\n- tick(ms) runs 20 times a second, with the milliseconds since the last tick. Count time with it (add up ms) instead of setTimeout, and keep it light.\n- Talk to the game only through the api object: api.sendMessage(playerId, text), api.setClientOption(playerId, option, value) and the other methods ${cB?"in the docs":"in the API list"}. Use only methods, callbacks and client options that are ${cB?"in the docs":"in the lists below"}, with their exact names.\n- Item, block and mob names are case-sensitive, e.g. "Diamond Sword", "Red Wool", "Block of Gold", "Draugr Zombie". Use only names from the lists below. If what they asked for doesn't exist (e.g. there is no "Golden Apple"), use the closest real one and say so in your answer.\n- Pass arguments exactly as the docs describe. Leave optional arguments out instead of passing null or undefined, and don't pass later optional arguments just to reach one. The style argument of api.sendMessage and api.broadcastMessage is an object, e.g. { color: "green" }; positions are [x, y, z] arrays.\n- Text shown to players (messages, middle text, RightInfoText) must be a string: turn numbers into text with String(n) or a template string.\n- Variables at the top level keep their values while the world runs. Players are identified by playerId (a string, not their name).\n- Values you keep per player (lists, timers, scores, teams) need a start in onPlayerJoin and removing in onPlayerLeave(playerId), so tick never uses a player who left.\n- Use plain JavaScript (var/let/const, functions, objects, arrays). No import/export, no await, no DOM, no Node modules.\n- Settings: numbers and messages the creator may want to change (times, amounts, prices, speeds, messages shown to players, on/off switches) go in one const CONFIG = { ... } at the top of the file, each value a plain number, a quoted string or true/false with a short comment saying what it does, e.g. waveSeconds: 30, // seconds between zombie waves. The code uses CONFIG.waveSeconds, and a message that mentions a setting builds it from CONFIG ("You start with " + CONFIG.startCoins + " coins"), so changing the setting changes the message too. If the file has a CONFIG, add new settings to it and change a setting there; never make a second one. Don't move code they didn't ask about into CONFIG.\n\nRecipes for things the docs don't spell out:\n- A player's name: api.getEntityName(playerId).\n- Flying: api.setClientOption(playerId, "creative", true) (false to stop).\n- Leaderboard: in onPlayerJoin, api.setClientOption(playerId, "lobbyLeaderboardInfo", { name: { displayName: "Name", sortPriority: 0 }, coins: { displayName: "Coins", sortPriority: 1 } }); then whenever a value changes, api.setTargetedPlayerSettingForEveryone(playerId, "lobbyLeaderboardValues", { coins: 5 }, true).\n- Text on the right of the screen: api.setClientOption(playerId, "RightInfoText", "Coins: 5").\n- Full health: api.setHealth(playerId, api.getClientOption(playerId, "maxHealth")).\n- Teleporting somewhere nearby: change x and z only, and keep y (or add a little so they drop onto the ground), e.g. const [x, y, z] = api.getPosition(playerId); api.setPosition(playerId, x + dx, y + 5, z + dz).\n- Positions: api.getPosition(playerId) is the player's feet. The block under them is api.getBlock(Math.floor(x), Math.floor(y) - 1, Math.floor(z)).\n- A player who can't play any more (e.g. out of lives): api.setPlayerGamemode(playerId, "spectator"); "survival" brings them back.\n- Mob waves: api.attemptSpawnMob(mobType, x, y, z) returns the mob's id. Keep the ids, and remove each in onMobDespawned(mobId) to know when they are all dead.\n- Removing or changing a block later: count ms in tick, then api.setBlock(x, y, z, "Air").\n- Coins as a currency: make it once in onPlayerJoin, only if they don't have it yet (a saved one comes back by itself, and setCurrency again would reset it): if (api.getCurrencyAmount(playerId, "coins") === null) api.setCurrency(playerId, "coins", { amount: 0, icon: "coins" }). Then api.giveCurrencyAmount(playerId, "coins", 5). When the request says anything is saved or kept after leaving (e.g. "it saves if you leave"), the coins are saved too: add persistent: true. Otherwise leave it out.\n- Values the request says must stay after leaving (e.g. when they last claimed a reward): api.setPlayerDbValue(playerId, "lastClaim", Date.now()) and api.getPlayerDbValue(playerId, "lastClaim") (null if never set); a saved value is a string or a number. Only those: lives, scores, checkpoints and timers for one game stay in top-level variables, which reset when they leave.\n- A player dying, from anything: onAttemptKillPlayer(killedPlayerId, attackingLifeformId). onPlayerKilledOtherPlayer only covers kills by players.\n- Stopping one player hurting another (e.g. teammates): onPlayerDamagingOtherPlayer(attackingPlayer, damagedPlayer) returns "preventDamage". onAttemptKillPlayer only stops the death, not the damage.\n- A counter of how long each player has been alive: in tick, count only while api.isAlive(playerId), and start again from 0 in onRespawnRequest (the death screen isn't time alive). Other timers don't need this.\n- A reward for reaching a count (5 kills, 10 coins): give it when the count first reaches it (=== 5, or keep a per-player flag such as rewarded[playerId] = true), never on every count after (>= 5 alone gives it again each time).\n- Telling whether a player moved: compare with where they were after any teleport of yours (update the saved position when you teleport them), or your own teleport counts as them moving.\n- A box around a player: the floor is at Math.floor(y) - 1 (y is their feet) and the roof just above their head at Math.floor(y) + 2 (players are 2 blocks tall), e.g. api.setBlockWalls([bx - 2, by - 1, bz - 2], [bx + 2, by + 2, bz + 2], "Glass", true, true) with bx, by, bz the floored position. A bottom corner at by would fill the block they stand in; replacing the ground under them is fine. If they should be trapped, also stop them breaking it: api.setCantChangeBlockRect(playerId, [bx - 2, by - 1, bz - 2], [bx + 2, by + 2, bz + 2]).`,
      RV = cB => `You are the coding helper inside Bloxd's code block editor. Bloxd is a voxel game; a code block is a block in the world holding JavaScript that runs on the game server when a player clicks it. The person asking is a young creator (13 or older) who is new to coding.\n\nHow code blocks work:\n- Each click runs the whole code once, from top to bottom. A code block has no callbacks: something that has to happen later or by itself (when players join, every tick, on a chat command, when a player breaks a block) needs World Code, the world's main code, where callbacks such as onPlayerJoin(playerId), tick() and playerCommand(playerId, command) are defined as functions. Write that part as World Code (see How to answer), and put what one click does in the code block.\n- myId is the id of the player who clicked the block (a string, not their name), and thisPos is the block's position as [x, y, z].\n- Talk to the game only through the api object: api.sendMessage(myId, text), api.setClientOption(myId, option, value) and the other methods ${cB?"in the docs":"in the API list"}. Use only methods and client options that are ${cB?"in the docs":"in the lists below"}, with their exact names.\n- Item, block and mob names are case-sensitive, e.g. "Diamond Sword", "Red Wool", "Block of Gold", "Draugr Zombie". Use only names from the lists below. If what they asked for doesn't exist (e.g. there is no "Golden Apple"), use the closest real one and say so in your answer.\n- Pass arguments exactly as the docs describe. Leave optional arguments out instead of passing null or undefined, and don't pass later optional arguments just to reach one. The style argument of api.sendMessage and api.broadcastMessage is an object, e.g. { color: "green" }; positions are [x, y, z] arrays.\n- Text shown to players (messages, middle text, RightInfoText) must be a string: turn numbers into text with String(n) or a template string.\n- Variables made with const or let start again on every click. A value kept between clicks is assigned without const or let, after checking it is there, e.g. clicks = (typeof clicks === "number" ? clicks : 0) + 1. It lasts until World Code is next saved or the world restarts.\n- When the last line has a value, the player who clicked sees it in chat as "Result: ...".\n- Use plain JavaScript (var/let/const, functions, objects, arrays). No import/export, no await, no DOM, no Node modules.\n\nRecipes for things the docs don't spell out:\n- A player's name: api.getEntityName(myId).\n- Teleporting the player onto this block: api.setPosition(myId, thisPos[0] + 0.5, thisPos[1] + 1, thisPos[2] + 0.5).\n- A block next to this one: api.setBlock(thisPos[0], thisPos[1] + 1, thisPos[2], "Block of Gold").\n- Flying: api.setClientOption(myId, "creative", true) (false to stop).\n- Text on the right of the screen: api.setClientOption(myId, "RightInfoText", "Coins: 5").\n- Full health: api.setHealth(myId, api.getClientOption(myId, "maxHealth")).\n- Teleporting somewhere nearby: change x and z only, and keep y (or add a little so they drop onto the ground), e.g. const [x, y, z] = api.getPosition(myId); api.setPosition(myId, x + dx, y + 5, z + dz).\n- Positions: api.getPosition(myId) is the player's feet. The block under them is api.getBlock(Math.floor(x), Math.floor(y) - 1, Math.floor(z)).\n- Coins as a currency: make it only if they don't have it yet (setCurrency again would reset it): if (api.getCurrencyAmount(myId, "coins") === null) api.setCurrency(myId, "coins", { amount: 0, icon: "coins" }). Then api.giveCurrencyAmount(myId, "coins", 5).\n- A box around the player: the floor is at Math.floor(y) - 1 (y is their feet) and the roof just above their head at Math.floor(y) + 2 (players are 2 blocks tall), e.g. api.setBlockWalls([bx - 2, by - 1, bz - 2], [bx + 2, by + 2, bz + 2], "Glass", true, true) with bx, by, bz the floored position.`,
      iI = {
        search: "lines to find",
        replace: "lines to put instead",
        codeBlock: "...all of the code block's code...",
        file: "...the whole new file...",
        worldCode: "...only the World Code to add...",
        function: "function onPlayerJoin(playerId) {\n\t...the whole new function...\n}"
      },
      KV = Object.values(iI);
    const xI = `You looked at World Code: its files are below, their paths starting ${fc.n}. Put the part of the request that needs World Code (a callback, or something that happens without a click) straight into World Code with the same calls, its path exactly as shown, e.g. ${fc.n}index.js (in World Code the player is playerId; there is no myId or thisPos). A callback World Code already has is changed in place, with what it already does kept, never defined twice. Keep the code block's own change on the path ${fc.e}, and leave it out if the request is all World Code. They are taken to World Code to see the change.`;

    function dV(cB, Bc, nc, Vc) {
      var Ic, rB, uc, sc;
      let {
        hasWorldCodeFiles: Mc,
        hasLookedUp: Pc,
        movesToWorldCode: qB,
        listedPrefabs: Oc,
        guidesToPrefabs: Tc
      } = Vc;
      const mB = Bc ? fc.e : "index.js",
        tB = Bc ? `${fc.n}index.js` : mB,
        Sc = (cB, Bc) => WV(nc, cB, Bc),
        yB = Bc => cB.some((cB => cB.name === Bc)),
        zB = cB.filter((cB => ["content", "replace", "code"].some((Bc => Bc in cB.inputSchema.properties)))),
        pc = yB("edit_code_in_place") ? `\nFor a fix of one to a few lines in the code open in the editor, use edit_code_in_place instead: it changes their code straight away, as if they pressed Apply, and they can undo it. search is copied exactly from the open code:\n${Sc("edit_code_in_place",{why:"what this fix does",search:iI.search,replace:iI.replace})}` : "",
        hc = yB("export_game") ? `\nWhen the creator asks to export, save or publish their world or game, your answer must contain the export_game call; without it nothing is exported. For example, if the creator writes "export the world", your whole answer is:\nSaving your world as your custom game now!\n${Sc("export_game",{})}` : "",
        aB = yB("replace_function") ? `\nWhen you change only one or two functions or callbacks of a file that already has code, you can send just those instead of the whole file. replace_function finds a function by its name and puts your whole new function in its place; with a name the file doesn't have yet, it adds your new callback or function at the end, changing nothing already there:\n${Sc("replace_function",{path:tB,name:"onPlayerJoin",why:"what the new function does",code:iI.function})}` : "",
        lc = yB("edit_file") ? `\nFor a file longer than 6000 characters, don't send it whole: change only the parts that need it, with replace_function where you can, and an edit_file call for each other part, where search is copied exactly from the current file:\n${Sc("edit_file",{path:mB,why:"what this part's change does",search:iI.search,replace:iI.replace})}` : "",
        Yc = Bc ? `2. Then give the whole new code with a write_file call, exactly like this:\n${Sc("write_file",{path:mB,why:"what the change does",content:iI.codeBlock})}` : `2. Then give every file you change, in full, with a write_file call, exactly like this:\n${Sc("write_file",{path:mB,why:"what the change does",content:iI.file})}`,
        Lc = Bc ? "" : ` If there is no code yet, write it in ${mB}.`,
        gB = Sc("switch_to_world_code", {}),
        Uc = Bc ? Mc ? `\n${xI}` : `\nIf part of the request needs World Code (a callback, or something that happens without a click), give that part as World Code with an add_world_code call, with its callbacks written as functions (in World Code the player is playerId; there is no myId or thisPos), exactly like this:\n${Sc("add_world_code",{code:iI.worldCode})}\n${qB?"In your sentences, say which part goes in World Code: they are taken there, and it is put in for them.":"In your sentences, say which part goes in World Code and that they should press the World Code button to switch there and add it."} Leave out the code block's write_file call if the request is all World Code.${yB("view_world_code")?`\nTo see what World Code already has before you write that part (a callback it may already define), look at it first:\n${Sc("view_world_code",{})}`:""}\nWhen the request is all World Code, also call switch_to_world_code after add_world_code: it takes them to World Code, where its AI Helper is asked to add your World Code part. Give a request instead when they asked to go to World Code for something else:\n${gB}` : "",
        bB = Tc && yB("use_prefab") && Oc.length >= 2,
        Zc = bB ? Oc.slice(0, 3).map((cB => cB.title)).join("\n") : "A parkour race\nZombie survival\nCapture the flag",
        Qc = bB ? " When you ask what kind of game they want, the choices are the 2 to 4 listed prefabs that fit the request best, by their titles: the one they pick is put in with use_prefab next." : "",
        Cc = yB("ask_creator") ? `\nOnly if the request is too unclear to build anything sensible, ask instead of writing code: call ask_creator with one short question and 2 to 4 short choices, one per line. That is: no idea what kind of thing they want ("make a game"), or asking to make their game better, more fun or cooler without saying how ("make it more fun"): then the choices are 2 to 4 different ideas built on what their code already has, each a short concrete thing to add, not a general word like "more fun" (e.g. for a snowball fight: "Power-ups that drop in", "A score at the top", "Last player standing wins"). Otherwise build it, choosing sensibly, and say in your sentences what you chose so they can ask for something different. Never ask for personal details (name, age, school, where they live).${Qc}\n${Sc("ask_creator",{question:"What kind of game should it be?",choices:Zc,allow_other:"true"})}` : "",
        vB = yB("plan") ? `\n${"deepseek"===nc?"When a request is big, instead of writing it all at once, you may":"This request is big. Instead of writing it all at once, you may"} call plan with 2 to 5 short steps, one per line, each small enough to build and try on its own, the first one playable. Then send no code: the creator builds the steps one at a time. Build it at once instead if it is really only a few lines:\n${Sc("plan",{steps:"Give each player 0 coins when they join, shown on screen\nEarn a coin for each block broken\nA /shop command that sells a sword for 10 coins"})}` : "",
        Dc = null !== (Ic = Oc[0]) && void 0 !== Ic ? Ic : cI("parkour"),
        Nc = (null !== (rB = null === Dc || void 0 === Dc ? void 0 : Dc.settings) && void 0 !== rB ? rB : []).slice(0, 2).map((cB => `${cB.key}: ${cB.value}`)).join("\n");
      return `How to answer:\n1. Start with one or two short, friendly sentences in simple words saying what the change does, in the present tense as they read it before it goes in ("This adds...", "This changes..."; or what was wrong), and anything you had to do differently from what they asked. Don't promise it works: they will press Submit and try it. No long lectures.\n${Yc}${aB}${lc}${pc}${Uc}${yB("use_prefab")?`\nFor a game, or a feature (a kit, a shop, rewards...), that a prefab listed below fits, put the prefab in with use_prefab instead of writing that code yourself: it is tested code that works, and it fits around the code they already have: their code stays as it is, and where both have the same callback (onPlayerJoin...) both run, so never rewrite their code to make room for a prefab. Give only the settings the request changes, one per line as key: value, each value written as in JavaScript (text in quotes, positions as [x, y, z]); the rest keep their defaults. For a game like the one asked for but not the same, still use the closest prefab, then in the same answer, after the use_prefab call, change what it doesn't do: replace one of its functions by name, or add a callback, with replace_function. If no prefab fits, write the code yourself:\n${Sc("use_prefab",{name:null!==(uc=null===Dc||void 0===Dc?void 0:Dc.name)&&void 0!==uc?uc:"parkour",settings:Nc,why:null!==(sc=null===Dc||void 0===Dc?void 0:Dc.summary)&&void 0!==sc?sc:"a parkour course"})}`:""}${hc}${Cc}${vB}${yB("remember")?`\nIf the creator tells you something lasting about their game that later requests should know (its idea, its rules, names of teams, items or places in it), also call remember with one short sentence about the game. They are asked before it is kept. Only what they said, never personal details, and not what the code already shows:\n${Sc("remember",{note:"A zombie survival game: a wave comes every 30 seconds and players start with a sword"})}`:""}${function(cB,Bc,nc){const Vc=cB.some((cB=>"fetch_url"===cB.name)),Ic={view_file:`To see another of their files from the list, before you change it:\n${Bc("view_file",{path:"shop.js"})}`,view_world_code:`To see World Code, so you can change it yourself:\n${Bc("view_world_code",{})}`,view_chunk:`To see the blocks around the player (or give a position "x y z" for another chunk near them):\n${Bc("view_chunk",{})}`,view_game_state:`To see where the player is, their health, what they hold and carry, and the players and mobs near them:\n${Bc("view_game_state",{})}`,fetch_url:`To read the docs: ${ec.j} lists every docs page with its link. Read it, then the page you need (for a long page, the part that has it):\n${Bc("fetch_url",{url:ec.j})}`,get_docs:Vc?`Or, for a name you already know, read its docs in full, or list every api method, callback or client option by name (${eB}):\n${Bc("get_docs",{name:"setClientOption"})}\n${Bc("get_docs",{list:"callbacks"})}`:`To read the full docs of an api method, callback or client option the lists only name:\n${Bc("get_docs",{name:"setClientOption"})}`,find_names:`To find the exact names of blocks, items or mobs:\n${Bc("find_names",{words:"gold sword"})}`,view_errors:`To see all the errors their world showed, not only the newest:\n${Bc("view_errors",{})}`,list_prefabs:`To see the prefabs for one kind of game, and the ready-made functions for it:\n${Bc("list_prefabs",{category:"pvp"})}`,view_prefab:`To see one prefab in full, every setting and the functions to replace to change it, before you use it:\n${Bc("view_prefab",{name:"parkour"})}`},rB=cB.flatMap((cB=>{const Bc=Ic[cB.name];return void 0===Bc?[]:[Bc]}));return 0===rB.length?nc?"\nYou have looked things up as many times as you can: answer now with what you found.":"":`\
      nIf you need to see something before you can answer well, look it up first: answer with only look - up calls, no other words and no code, and you are asked again with what they found.$ {
        Vc ? "The docs aren't in this message: before you use an api method, callback or client option, look up any you aren't sure of, with llms.txt where you can. Make every look-up you need in one answer where you can, up to 4." : "Most requests need no look-up: only look when the answer depends on it."
      }\
      n$ {
        rB.join("\n")
      }
      `}(cB,Sc,Pc)}\nGive each call that changes code a why: a few plain words the creator sees beside that change, e.g. "gives everyone a sword when they join".\n3. Keep everything that already works; change only what the request needs. Don't add commands or features they didn't ask for: suggest them in your answer instead.${Lc}\n4. If the request is not about their ${Bc?"code block":"World Code"}, or asks for something unsafe or unkind, say briefly that you can only help with their game's code.\nDo not put code anywhere except in ${zB.map((cB=>cB.name)).join(" or ")} calls. ${function(cB){return HB[cB].callStyle}(nc)}`
    }

    function AV(cB, Bc, nc) {
      return Object.keys(cB).filter((cB => !nc || !(0, fc.g)(cB))).sort(((cB, nc) => (nc === Bc ? 1 : 0) - (cB === Bc ? 1 : 0) || cB.localeCompare(nc)))
    }

    function GV(cB, Bc, nc) {
      var Vc;
      const Ic = AV(cB, Bc, nc);
      return null !== Bc && Ic.includes(Bc) ? Bc : null !== (Vc = Ic[0]) && void 0 !== Vc ? Vc : null
    }

    function cr(cB) {
      const Bc = `${arguments.length>1&&void 0!==arguments[1]?arguments[1]:""}${cB.includes("index.ts")?"index.ts":"index.js"}`;
      return `Only ${Bc} runs by itself: another file runs when ${Bc} imports or requires it, so keep the import, require and export lines their files have (no import/export is for one file), and put callbacks in ${Bc}.\n`
    }

    function BI(cB, Bc) {
      var nc;
      const {
        files: Vc,
        activePath: Ic
      } = cB, rB = !0 === cB.codeBlock, uc = AV(Vc, Ic, rB);
      if (0 === uc.length || uc.every((cB => "" === Vc[cB].trim()))) return rB ? "There is no code yet: the code block is empty." : uc.includes("index.ts") ? "There is no code yet: index.ts is empty. Write it in index.ts." : "There is no code yet: index.js is empty.";
      const sc = null !== (nc = GV(Vc, Ic, rB)) && void 0 !== nc ? nc : uc[0];
      return `${uc.length>1?`Their files:\n${uc.map((cB=>{const Bc=""===(nc=Vc[cB])?0:nc.replace(/\n$/,"").split("\n").length;var nc;return`- ${cB}: ${1===Bc?"1 line":`${Bc} lines`}${cB===sc?" (open in the editor, its code below)":""}`})).join("\n")}\n${rB?"":cr(uc)}\n`:""}${function(cB,Bc,nc,Vc){return Bc.map((Bc=>HB[Vc].fileResult(Bc,cB[Bc],Bc===nc))).join("\n\n")}(Vc,[sc],Ic,Bc)}`
    }

    function nI(cB) {
      var Bc, nc, Vc, Ic, rB, uc;
      return {
        codeBlock: !0 === cB.codeBlock,
        hasCode: "" !== (null !== (Bc = cB.files[null !== (nc = cB.activePath) && void 0 !== nc ? nc : ""]) && void 0 !== Bc ? Bc : "").trim(),
        hasBigFile: Object.values(cB.files).some((cB => cB.length > 6e3)),
        wantsExport: EV(cB.request),
        canAsk: !0 === cB.canAsk,
        canRemember: !0 === (null === (Vc = cB.about) || void 0 === Vc ? void 0 : Vc.canRemember),
        isBigRequest: MB(cB.request),
        canLookUp: !0 === cB.canLookUp,
        hasOtherFiles: Object.keys(cB.files).length > 1,
        hasErrors: cB.errors.length > 0,
        canChangeWorldCode: !0 === cB.canChangeWorldCode,
        hasWorldCodeFiles: Object.keys(cB.files).some(fc.g),
        offersPrefabs: (Ic = cB.request, rB = cB.files, uc = VI(cB), "never" !== uc.offer && ("always" === uc.offer || fV(Ic, 1).length > 0 || MB(Ic) || !FV(rB) && HV.test(Ic))),
        listsPrefabs: VI(cB).categories,
        looksUpDocs: !0 === cB.looksUpDocs
      }
    }

    function VI(cB) {
      var Bc;
      return null !== (Bc = cB.prefabs) && void 0 !== Bc ? Bc : XV
    }

    function II(cB, Bc) {
      return "deepseek" === Bc ? function(cB) {
        const Bc = oV[cB ? "codeBlock" : "worldCode"];
        return yn.filter((cB => Bc.has(cB.name)))
      }(!0 === cB.codeBlock) : function(cB) {
        const Bc = (cB.hasCode || cB.hasBigFile) && !cB.codeBlock || !0 === cB.hasWorldCodeFiles,
          nc = !0 === cB.canLookUp,
          Vc = cB.codeBlock && !0 === cB.canChangeWorldCode && !0 !== cB.hasWorldCodeFiles && nc,
          Ic = {
            write_file: !0,
            edit_file: cB.hasBigFile,
            replace_function: Bc,
            insert_code: !1,
            add_world_code: cB.codeBlock && !0 !== cB.hasWorldCodeFiles,
            edit_code_in_place: cB.hasCode,
            export_game: cB.wantsExport,
            switch_to_world_code: cB.codeBlock,
            ask_creator: cB.canAsk,
            remember: !0 === cB.canRemember && !cB.codeBlock,
            plan: !0 === cB.isBigRequest && cB.canAsk && !cB.codeBlock,
            view_file: nc && !0 === cB.hasOtherFiles && !cB.codeBlock,
            view_world_code: Vc,
            view_chunk: nc,
            view_game_state: nc,
            get_docs: nc,
            fetch_url: nc && !0 === cB.looksUpDocs,
            find_names: nc,
            view_errors: nc && !0 === cB.hasErrors,
            use_prefab: !0 === cB.offersPrefabs && !cB.codeBlock,
            list_prefabs: nc && !0 === cB.listsPrefabs && !cB.codeBlock,
            view_prefab: nc && !0 === cB.offersPrefabs && !cB.codeBlock
          };
        let rB = yn.filter((cB => Ic[cB.name]));
        for (const uc of ["remember", "plan"]) rB.filter((cB => !zn(cB.name))).length > 7 && (rB = rB.filter((cB => cB.name !== uc)));
        return rB
      }(nI(cB))
    }

    function rr(cB, Bc) {
      var nc, Vc;
      const Ic = nI(cB),
        rB = !0 === Ic.canLookUp,
        uc = (null !== (nc = null === (Vc = cB.lookups) || void 0 === Vc ? void 0 : Vc.length) && void 0 !== nc ? nc : 0) > 0,
        sc = !0 === Ic.hasWorldCodeFiles,
        Mc = [Ic.hasCode ? "" : "No open file has code, so don't call edit_code_in_place.", Ic.hasBigFile ? "" : "Every file is short, so change them with write_file or replace_function, not edit_file.", rB ? "" : uc ? "You have looked things up as many times as you can: answer now with what you found, calling no view_ tool, get_docs or find_names." : "Answer with what you have: call no view_ tool, get_docs or find_names.", rB && !0 !== Ic.hasErrors ? "Their world showed no errors, so don't call view_errors." : "", ...Ic.codeBlock ? [Ic.canAsk ? "" : "Build what they asked: don't call ask_creator.", sc ? `${xI} So don't call add_world_code or view_world_code.` : "", sc || !0 !== Ic.canChangeWorldCode ? "" : "When part of it needs World Code, say which part goes there: they are taken to World Code, and it is put in for them.", sc || !0 === Ic.canChangeWorldCode && rB ? "" : "Don't call view_world_code.", sc ? "" : "The code block has no functions, so don't call replace_function."] : [Ic.canAsk ? "" : "Build what they asked: don't call ask_creator or plan.", Ic.canAsk && !0 !== Ic.isBigRequest ? "This request isn't big, so build it rather than calling plan." : "", Ic.wantsExport ? "" : "They haven't asked to save, so don't call export_game.", !0 === Ic.canRemember ? "" : "Their AI notes are full, so don't call remember.", rB && !0 !== Ic.hasOtherFiles ? "They have only the one file, so don't call view_file." : "", !0 === Ic.offersPrefabs ? "" : "No prefab fits this request, so don't call use_prefab or view_prefab.", Ic.canAsk && !0 === VI(cB).guide && Bc.length >= 2 ? `When you ask what kind of game they want, the choices are the 2 to 4 listed prefabs that fit the request best, by their titles (${Bc.slice(0,3).map((cB=>cB.title)).join(", ")}...): the one they pick is put in with use_prefab next.` : ""]].filter((cB => "" !== cB));
      return Mc.length > 0 ? `\n\nFor this request: ${Mc.join(" ")}` : ""
    }

    function uI(cB, Bc) {
      var nc, Vc, Ic, rB, uc, sc;
      let Mc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : JV,
        {
          docsInTurn: Pc = !1,
          carried: qB = !1
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Oc = "deepseek" === Mc.format,
        Tc = Object.values(Bc.files).join("\n"),
        fc = Bc.history.slice(-2).map((cB => cB.text)).join("\n"),
        mB = `${Bc.request}\n${fc}\n${Bc.errors.join("\n")}`,
        ec = !0 === Bc.looksUpDocs,
        tB = ec && !0 === Bc.canLookUp ? [] : cB.find(mB, Tc, 12),
        Sc = cB.matchItemAndBlockNames(mB, 12),
        yB = !0 === Bc.codeBlock,
        zB = yB ? "myId" : "playerId",
        pc = II(Bc, Mc.format),
        hc = pc.some((cB => "use_prefab" === cB.name)),
        aB = !hc || Oc && !0 !== nI(Bc).offersPrefabs ? [] : function(cB, Bc, nc) {
          if ("never" === nc.offer || "none" === nc.list) return [];
          if ("all" === nc.list) return [...dn];
          const Vc = fV(cB, 4);
          if (FV(Bc) || !HV.test(cB) && !MB(cB)) return Vc;
          const Ic = dn.filter((cB => "game" === cB.kind && !Vc.includes(cB)));
          return [...Vc, ...Ic]
        }(Bc.request, Bc.files, VI(Bc)),
        lc = hc ? function(cB, Bc, nc) {
          const Vc = Bc ? `\nOther kinds of game have prefabs too: look them up with list_prefabs (${Object.keys(An).join(", ")}).` : "";
          if (0 === cB.length) return Bc ? `## Prefabs (ready-made games)${Vc}` : "";
          const Ic = nc && cB.includes(nc) ? `\nThis request fits ${nc.name}: put it in with use_prefab, then change only what the request wants differently: what it already does needs no code of yours (its sidebar is the text on the right of the screen).\n${TV(nc,!1)}` : "";
          return `## Prefabs: ready-made games and features to start from (use_prefab)\n${cB.map(qI).join("\n")}${Ic}${Vc}`
        }(aB, VI(Bc).categories, fV(Bc.request, 1)[0]) : "",
        Yc = yB || !0 !== VI(Bc).inlineCode ? "" : function(cB) {
          const Bc = fV(cB, 1)[0];
          if (!Bc) return "";
          const nc = rI(nV(Bc)).text;
          return `## Tested code for this kind of game (${Bc.title})\nThis code works. Start from it: put it in the file, keeping what the file already has, and change what the request needs. Change settings in its CONFIG.\n\`\`\`js\n${nc}\`\`\``
        }(Bc.request),
        Lc = [tB.length > 0 ? `## Docs for this request\n${tB.map((cB=>cB.text)).join("\n\n")}` : "", Sc.length > 0 ? `## Exact item and block names that match the request\n${Sc.join(", ")}` : ""].filter((cB => "" !== cB)),
        gB = [{
          role: "system",
          content: wV([yB ? RV(ec) : jI(ec), ...ec ? [] : [yB ? `## World Code callbacks (all of them; only for World Code, never in the code block)\n${cB.index("callback")}` : `## Callbacks (all of them)\n${cB.index("callback")}`, `## API methods (all of them, call as api.name(...))\n${cB.index("api")}`, `## Client options (all of them, set with api.setClientOption(${zB}, name, value))\n${cB.index("clientOption")}`], ...Pc ? [] : Lc, cB.mobTypes.length > 0 ? `## Mob types (for api.attemptSpawnMob)\n${cB.mobTypes.join(", ")}` : "", Oc ? "" : lc, !yB && VI(Bc).helperIndex ? `## Ready-made functions (call them by name, without api. and without writing them: their code is added to the file by itself; get_docs shows one)\n${Hn.map((cB=>cB.signature)).join(", ")}` : "", Oc ? "" : Yc, dV(pc, yB, Mc.format, Oc ? {
            hasWorldCodeFiles: !1,
            hasLookedUp: !1,
            movesToWorldCode: !1,
            listedPrefabs: [],
            guidesToPrefabs: !1
          } : {
            hasWorldCodeFiles: !0 === nI(Bc).hasWorldCodeFiles,
            hasLookedUp: (null !== (nc = null === (Vc = Bc.lookups) || void 0 === Vc ? void 0 : Vc.length) && void 0 !== nc ? nc : 0) > 0,
            movesToWorldCode: !0 === Bc.canChangeWorldCode,
            listedPrefabs: aB,
            guidesToPrefabs: !0 === VI(Bc).guide
          })].filter((cB => "" !== cB)).join("\n\n"), pc, Mc.format, Mc.nativeTools)
        }];
      if (!Oc)
        for (const oc of Bc.history) gB.push({
          role: oc.role,
          content: oc.text
        });
      const Uc = Oc && !qB && Bc.history.length > 0 ? `Earlier in this chat:\n${Bc.history.map((cB=>`${"user"===cB.role?"They asked":"You answered"}: ${cB.text}`)).join("\n")}\n\n` : "",
        bB = null !== (Ic = Bc.about) && void 0 !== Ic && Ic.notes.length ? `AI notes (notes they kept):\n${Bc.about.notes.map((cB=>`- ${cB}`)).join("\n")}\n\n` : "",
        Zc = null !== (rB = Bc.about) && void 0 !== rB && rB.outline ? `Outline of their code:\n${Bc.about.outline}\n\n` : "",
        Qc = Bc.errors.length > 0 ? `\n\nErrors their world showed recently:\n${Bc.errors.slice(-5).join("\n")}` : "",
        Cc = null === (uc = Bc.failedEdits) || void 0 === uc || !uc.length || Oc && qB ? "" : `\n\nWhat happened to your last answer's changes:\n${function(cB,Bc){return cB.map((cB=>HB[Bc].editFailure(cB.tool,kI(cB)))).join("\n\n")}(Bc.failedEdits,Mc.format)}`,
        vB = [...Pc ? Lc : [], ...Oc ? [lc, Yc] : []].filter((cB => "" !== cB)).map((cB => `${cB}\n\n`)).join(""),
        Dc = null === (sc = Bc.lookups) || void 0 === sc || !sc.length || Oc && qB ? "" : `\n\nWhat you looked up for this request:\n${Nc=Bc.lookups,Ec=Mc.format,Nc.map((cB=>HB[Ec].lookupResult(cB.tool,cB.about,cB.text))).join("\n\n")}`;
      var Nc, Ec;
      return gB.push({
        role: "user",
        content: `${vB}${bB}${Zc}${Uc}Their code now:\n${BI(Bc,Mc.format)}${Qc}${Cc}${Dc}${Oc?rr(Bc,aB):""}\n\nTheir request: ${Bc.request}`
      }), gB
    }
    var sI = nc(37843);

    function MI(cB) {
      var Bc, nc, Vc, Ic, rB, uc;
      const {
        args: sc
      } = cB;
      switch (cB.name) {
        case "view_file":
          return null !== (Bc = sc.path) && void 0 !== Bc ? Bc : "a file";
        case "view_world_code":
          return "your World Code";
        case "view_chunk":
          return sc.position ? `the blocks near ${null!==(nc=null===(Vc=(0,sI.h)(sc.position))||void 0===Vc?void 0:Vc.map(Math.floor).join(", "))&&void 0!==nc?nc:sc.position}` : "the blocks around you";
        case "view_game_state":
          return "what you see in your world";
        case "get_docs":
          return sc.name ? `the docs for ${sc.name}` : `the list of ${qr(null!==(Ic=sc.list)&&void 0!==Ic?Ic:PI)}`;
        case "fetch_url":
          return function(cB) {
            const Bc = void 0 === cB ? null : yB(cB);
            if (null === Bc) return null !== cB && void 0 !== cB ? cB : "a docs page";
            return zB(Bc) ? "the list of docs pages" : `the docs page ${function(cB){const Bc=(0,ec.C)(cB);return null===Bc?cB:`${Bc.name}${null===Bc.part?"":`/${Bc.part}`}`}(Bc)}`
          }(sc.url);
        case "find_names":
          return `names for "${null!==(rB=sc.words)&&void 0!==rB?rB:""}"`;
        case "view_errors":
          return "your world's errors";
        case "list_prefabs":
          return sc.category ? `the ready-made ${sc.category} games` : "the ready-made games";
        case "view_prefab":
          return `the ready-made ${null!==(uc=sc.name)&&void 0!==uc?uc:"game"}`
      }
    }
    const PI = "functions";

    function qr(cB) {
      return cB.trim().toLowerCase().replace(/[\s_]+/g, " ").replace(/s?$/, "s")
    }

    function OI(cB) {
      return "get_docs" === cB.name || "fetch_url" === cB.name
    }
    async function TI(cB, Bc) {
      var nc;
      const Vc = MI(cB),
        Ic = Bc => ({
          result: {
            tool: cB.name,
            about: Vc,
            text: Bc
          }
        });
      switch (cB.name) {
        case "view_file":
          return Ic((sc = cB.args.path, Mc = Bc.files, void 0 === sc ? "No path was given: give the path of a file from the list." : Object.hasOwn(Mc, sc) ? "" === Mc[sc] ? `${sc} is empty.` : Mc[sc] : `There is no file called ${sc}. Their files are: ${Object.keys(Mc).join(", ")}.`));
        case "view_world_code": {
          const cB = Bc.readWorldCode ? await Bc.readWorldCode() : null;
          if (null === cB) return Ic("World Code couldn't be read, so it can't be changed from here. Give its part with add_world_code instead.");
          const nc = Object.keys(cB).sort(),
            Vc = Object.fromEntries(nc.map((Bc => [`${fc.n}${Bc}`, cB[Bc]]))),
            rB = nc.map((Bc => `${fc.n}${Bc}:\n${""===cB[Bc]?"(empty)":cB[Bc]}`)).join("\n\n"),
            uc = nc.length > 1 ? `\n\n${cr(nc,fc.n)}` : "";
          return {
            ...Ic("" === rB ? `World Code has no code yet: ${fc.n}index.js is empty.` : `${rB}${uc}`),
            worldCodeFiles: Vc
          }
        }
        case "view_chunk":
          return Ic(await Bc.viewChunk((0, sI.h)(cB.args.position)));
        case "view_game_state":
          return Ic(await Bc.viewGameState());
        case "get_docs":
          return Ic(function(cB, Bc, nc) {
            if (void 0 === cB) {
              const cB = (0, hc.c)(mn, qr(null !== Bc && void 0 !== Bc ? Bc : PI));
              return void 0 === cB ? `There is no list called ${Bc}: ask for ${eB}.` : nc.index(cB)
            }
            const Vc = nc.section(cB);
            if (Vc) return Vc.text;
            const Ic = nc.find(cB, "", 3).map((cB => cB.name)).join(", ");
            return `Nothing is called ${cB}.${""===Ic?"":` The closest names are: ${Ic}.`}`
          }(cB.args.name, cB.args.list, Bc.docs));
        case "fetch_url":
          return Ic(await Bc.fetchDocsPage(null !== (nc = cB.args.url) && void 0 !== nc ? nc : ""));
        case "find_names": {
          var rB, uc;
          const nc = Bc.docs.searchNames(null !== (rB = cB.args.words) && void 0 !== rB ? rB : "", 20);
          return Ic(nc.length > 0 ? nc.join(", ") : `No block, item or mob name has any of the words "${null!==(uc=cB.args.words)&&void 0!==uc?uc:""}".`)
        }
        case "view_errors":
          return Ic(Bc.errors.length > 0 ? Bc.errors.slice(-30).join("\n") : "Their world showed no errors recently.");
        case "list_prefabs":
          return Ic(OV(cB.args.category));
        case "view_prefab":
          return Ic(function(cB, Bc) {
            const nc = void 0 === cB ? null : cI(cB);
            return nc ? TV(nc, Bc) : `There is no prefab called ${null!==cB&&void 0!==cB?cB:"that"}.\n${OV()}`
          }(cB.args.name, !0 === Bc.showPrefabCode))
      }
      var sc, Mc
    }
    const fI = [
      [/\bme\b/gi, "the player"],
      [/\bmyself\b/gi, "the player"],
      [/\bmy\b/gi, "the player's"],
      [/\byou\b/gi, "the player"],
      [/\byour\b/gi, "the player's"],
      [/\b(people|persons|humans)\b/gi, "players"],
      [/\b(person|human)\b/gi, "player"],
      [/\b(kids|children)\b/gi, "NPCs"],
      [/\b(kid|child)\b/gi, "NPC"],
      [/\bkill\b/gi, "eliminate"],
      [/\bkills\b/gi, "eliminates"],
      [/\bkilled\b/gi, "eliminated"],
      [/\bkilling\b/gi, "eliminating"],
      [/\bshoot players\b/gi, "shoot the players"],
      [/\bshoots players\b/gi, "shoots the players"],
      [/\bshooting players\b/gi, "shooting the players"],
      [/\bbomb\b/gi, "explosion"],
      [/\bbombs\b/gi, "explosions"],
      [/\bsteal\b/gi, "take"],
      [/\bsteals\b/gi, "takes"],
      [/\bstealing\b/gi, "taking"],
      [/\bstole\b/gi, "took"],
      [/\bstolen\b/gi, "taken"]
    ];

    function mr(cB) {
      let Bc = cB;
      for (const [nc, Vc] of fI) Bc = Bc.replace(nc, (cB => cB.length > 1 && cB[0] !== cB[0].toLowerCase() && cB.slice(1) === cB.slice(1).toLowerCase() ? Vc[0].toUpperCase() + Vc.slice(1) : Vc));
      return Bc
    }
    const eI = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
      tr = ["Qwen3Guard-Gen-0.6B", "Qwen3Guard-Gen-8B"],
      SI = ["Qwen3Guard-Gen-8B", "Qwen3Guard-Gen-0.6B"],
      yr = 12e3,
      zr = new Set(["Violent", "Non-violent Illegal Acts", "Unethical Acts"]);

    function pI(cB) {
      var Bc, nc, Vc;
      const Ic = null === (Bc = /Safety:\s*(\w+)/.exec(cB)) || void 0 === Bc ? void 0 : Bc[1],
        rB = null !== (nc = null === (Vc = /Categories:\s*(.+)/.exec(cB)) || void 0 === Vc ? void 0 : Vc[1]) && void 0 !== nc ? nc : "";
      return /PII/.test(rB) ? "personalInfo" : "Unsafe" === Ic || /Jailbreak|Sexual|Suicide|Self-Harm/i.test(rB) ? "unsafe" : "ok"
    }

    function hI(cB) {
      var Bc, nc, Vc;
      const Ic = null === (Bc = /Safety:\s*(\w+)/.exec(cB)) || void 0 === Bc ? void 0 : Bc[1];
      if (!Ic) return null;
      const rB = (null !== (nc = null === (Vc = /Categories:\s*(.+)/.exec(cB)) || void 0 === Vc ? void 0 : Vc[1]) && void 0 !== nc ? nc : "").split(",").map((cB => cB.trim())).filter((cB => "" !== cB && "None" !== cB));
      return "Safe" !== Ic && rB.some((cB => /Sexual/.test(cB))) ? "unsafe" : "Unsafe" !== Ic ? "ok" : rB.length > 0 && rB.every((cB => zr.has(cB))) ? "maybeGame" : "unsafe"
    }
    async function ar(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Vc = await Bc(cB),
        Ic = null === Vc ? null : hI(Vc);
      if (null === Ic) return "unchecked";
      if ("ok" === Ic || "unsafe" === Ic && (!nc || null === Vc || /Sexual/.test(Vc))) return Ic;
      const rB = mr(cB);
      if (rB === cB) return "unsafe";
      const uc = await Bc(rB),
        sc = null === uc ? null : hI(uc);
      return null === sc ? "unchecked" : "ok" === sc ? "ok" : "unsafe"
    }

    function lI(cB) {
      const Bc = [];
      return UI(cB, 0, !1, Bc), Bc.map((cB => cB.trim())).filter((cB => "" !== cB))
    }
    const YI = new Set(["return", "typeof", "case", "do", "else", "in", "of", "new", "delete", "void", "throw", "instanceof", "yield", "await"]);

    function LI(cB, Bc) {
      let nc = Bc - 1;
      for (; nc >= 0 && /\s/.test(cB[nc]);) nc--;
      if (nc < 0 || /[(,=:[!&|?{};+\-*%<>~^]/.test(cB[nc])) return !0;
      let Vc = nc;
      for (; Vc > 0 && /[\w$]/.test(cB[Vc - 1]);) Vc--;
      return YI.has(cB.slice(Vc, nc + 1))
    }

    function gr(cB, Bc) {
      let nc = !1;
      for (let Vc = Bc + 1; Vc < cB.length; Vc++) {
        const Bc = cB[Vc];
        if ("\\" === Bc) Vc++;
        else {
          if ("\n" === Bc) break;
          if (nc) nc = "]" !== Bc;
          else if ("[" === Bc) nc = !0;
          else if ("/" === Bc) return Vc + 1
        }
      }
      return Bc + 1
    }

    function UI(cB, Bc, nc, Vc) {
      let Ic = Bc,
        rB = 0;
      for (; Ic < cB.length;) {
        const Bc = cB[Ic],
          uc = cB[Ic + 1];
        if ("/" === Bc && "/" === uc) {
          const Bc = cB.indexOf("\n", Ic);
          Vc.push(cB.slice(Ic + 2, -1 === Bc ? cB.length : Bc)), Ic = -1 === Bc ? cB.length : Bc
        } else if ("/" === Bc && "*" === uc) {
          const Bc = cB.indexOf("*/", Ic + 2);
          Vc.push(cB.slice(Ic + 2, -1 === Bc ? cB.length : Bc)), Ic = -1 === Bc ? cB.length : Bc + 2
        } else if ("/" === Bc && LI(cB, Ic)) Ic = gr(cB, Ic);
        else if ('"' === Bc || "'" === Bc || "`" === Bc) {
          const nc = Vc.length;
          Vc.push("");
          let rB = "";
          for (Ic++; Ic < cB.length && cB[Ic] !== Bc;) "\\" === cB[Ic] ? (rB += cB.slice(Ic, Ic + 2), Ic += 2) : "`" === Bc && "$" === cB[Ic] && "{" === cB[Ic + 1] ? (rB += " ", Ic = UI(cB, Ic + 2, !0, Vc)) : (rB += cB[Ic], Ic++);
          Vc[nc] = rB, Ic++
        } else {
          if (nc && "{" === Bc) rB++;
          else if (nc && "}" === Bc) {
            if (0 === rB) return Ic + 1;
            rB--
          }
          Ic++
        }
      }
      return Ic
    }
    const br = 4e5;
    async function ZI(cB, Bc) {
      const [{
        clientSideServerUrls: Vc
      }, {
        postJsonWithMetricsCookiesAndJsonResponse: Ic
      }, {
        gameBridge: rB
      }] = await Promise.all([Promise.resolve().then((() => nc(1062))), Promise.resolve().then((() => nc(988))), Promise.resolve().then((() => nc(1566)))]), uc = rB.latest("connectedGame").websocketUrl;
      if (!uc) throw new Error("AI Helper: not connected to a game server");
      const sc = `${Vc.getHttpUrlFromWebSocketUrl(uc)}${cB}`;
      return await Ic(sc, Bc, {
        retries: 0
      })
    }
    const QI = 15e3;
    let CI = [],
      vr = null;

    function DI(cB) {
      return Math.ceil(cB.length / 4)
    }

    function NI(cB) {
      return "number" === typeof cB && Number.isInteger(cB) && cB >= 0
    }

    function EI(cB, Bc, nc) {
      var Vc;
      let Ic = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      ! function(cB) {
        if ("undefined" === typeof window) return;
        if (CI.push(cB), CI.length >= 40) return void oI();
        vr ??= setTimeout((() => {
          oI()
        }), QI)
      }(null !== (Vc = function(cB) {
        if (null === cB || "object" !== typeof cB) return null;
        const {
          prompt_tokens: Bc,
          completion_tokens: nc,
          prompt_tokens_details: Vc
        } = cB;
        if (!NI(Bc) || !NI(nc)) return null;
        const Ic = null !== Vc && "object" === typeof Vc ? Vc.cached_tokens : void 0;
        return {
          sent: Bc,
          cached: NI(Ic) ? Ic : 0,
          received: nc
        }
      }(cB)) && void 0 !== Vc ? Vc : {
        sent: DI(JSON.stringify(Bc)),
        cached: 0,
        received: DI(nc) + Ic
      })
    }
    async function oI() {
      null !== vr && (clearTimeout(vr), vr = null);
      const cB = CI.slice(0, 40);
      if (CI = CI.slice(40), CI.length > 0 && (vr = setTimeout((() => {
          oI()
        }), QI)), 0 !== cB.length) try {
        await ZI("/ai-helper/usage", {
          calls: cB
        })
      } catch {}
    }
    const WI = 6e4;
    const wI = new class {
        constructor() {
          this.calls = new Map, this.fullUntil = new Map
        }
        record(cB) {
          let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
          this.calls.set(cB, [...this.recent(cB, Bc), Bc])
        }
        markFull(cB) {
          let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
          this.fullUntil.set(cB, Bc + WI)
        }
        callsInLastMinute(cB) {
          let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
          return this.recent(cB, Bc).length
        }
        freeAt(cB) {
          var Bc;
          let nc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
          const Vc = this.recent(cB, nc),
            Ic = Vc.length < 2 ? nc : Vc[Vc.length - 2] + WI;
          return Math.max(Ic, null !== (Bc = this.fullUntil.get(cB)) && void 0 !== Bc ? Bc : 0, nc)
        }
        firstFreeAt(cB) {
          let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
          return Math.min(...cB.map((cB => this.freeAt(cB, Bc))))
        }
        clear() {
          this.calls.clear(), this.fullUntil.clear()
        }
        recent(cB, Bc) {
          var nc;
          return (null !== (nc = this.calls.get(cB)) && void 0 !== nc ? nc : []).filter((cB => Bc - cB < WI))
        }
      },
      kr = /\n{3,}/,
      XI = /<tool_call\b|<function=/;

    function HI(cB) {
      const Bc = cB.trimStart(),
        nc = kr.exec(Bc),
        Vc = XI.exec(Bc);
      if (null === nc || null !== Vc && Vc.index < nc.index) return null;
      const Ic = Bc.slice(nc.index + nc[0].length);
      return "" === Ic.trim() ? null : Ic
    }
    const FI = [{
      name: "Qwen3.8-27B",
      temperature: .6,
      nativeTools: !0,
      callFormat: "qwenXml"
    }, {
      name: "gpt-oss-120b",
      temperature: 1,
      reasoningEffort: "medium"
    }, {
      name: "Qwen3.5-397B-A17B",
      temperature: .6,
      nativeTools: !0,
      callFormat: "qwenXml"
    }, {
      name: "gpt-oss-20b",
      temperature: 1,
      reasoningEffort: "high"
    }];
    const JI = {
      name: "Qwen3.6-27B",
      temperature: .6,
      nativeTools: !0,
      callFormat: "qwenXml"
    };

    function jr(cB) {
      var Bc;
      const nc = [...FI, JI].find((Bc => Bc.name === cB));
      return null !== (Bc = null === nc || void 0 === nc ? void 0 : nc.callFormat) && void 0 !== Bc ? Bc : "simple"
    }

    function RI(cB) {
      var Bc;
      return {
        format: null !== (Bc = cB.callFormat) && void 0 !== Bc ? Bc : "simple",
        nativeTools: !0 === cB.nativeTools
      }
    }

    function ir(cB, Bc) {
      return "function" === typeof cB ? cB(Bc) : cB
    }
    const KI = "TOO_COMPLEX",
      xr = `\n\nYou are the quick helper: answer only small requests yourself, and pass everything else to a bigger model by replying with exactly ${KI} and nothing else.\nAnswer yourself only when the whole change is a few lines doing one or two simple things, such as giving an item, sending a message, teleporting, setting a block or a client option, or one callback that does one of those.\nReply ${KI} for anything more: a game or minigame, anything where players make choices, take turns or type commands with options, scores, timers, rounds or values that must be kept, more than about 10 new lines, a fix for an error, a question about what the code does, or exporting, saving or publishing the game. Reply ${KI} too if you aren't sure of an exact api method, option or item name.\nCode runs fresh each time: nothing you write remembers anything from one click or event to the next. So reply ${KI} to any request that says once, again, already, count, how many, total, times, score, every few seconds, until, wait, after or each player, whatever else it asks. "Everyone" alone is fine.\nThese are too complex: reply ${KI} to each of them, and to anything like them:\n- "Count how many times each player clicked this block", "Show how many times this block has been clicked in total": a count kept between clicks\n- "Give me a sword but only once", "Give me a sword, but only once" or "only every 10 seconds": remembering who already got it, or when\n- "Make a rock paper scissors game", "Make a parkour course", "Make a quiz": any game, round or win and lose\n- "Make a /give command" or "a /tp command that takes a player's name": commands with options to read\n- "Make a shop where I buy a sword for 10 coins": currencies, prices and checking what a player has\n- "Start a 60 second countdown", "Spawn a zombie every 5 seconds": timers and things that repeat\n- "Put players into two teams", "Show a leaderboard of the top players": sorting or grouping players\n- "Build me a house" or "a tower": many blocks placed in loops\n- "Teleport me somewhere random but safe": finding the ground or a free space\n- "Why doesn't my code work?", "Fix this error", "What does this line do?"\n- "Export the world", "Save my game", "Publish this": exporting the game is for the bigger model\nThese are small enough to answer yourself:\n- "Give me a diamond sword", "Teleport me onto this block", "Put a gold block on top of this one", "Let me fly", "Heal me", "Say hello to everyone"\n- "Welcome players when they join" (one callback with one message)`,
      dI = 24e4,
      AI = ["tooLarge", "busy", "timeout", "turnedAway", "failed"];
    class GI extends Error {
      constructor(cB) {
        super(`World Code AI ${cB}`), this.reason = cB
      }
    }

    function cu(cB) {
      switch (cB) {
        case "busy":
          return "Bot.xd is busy right now.";
        case "tooLarge":
        case "failed":
          return "The AI couldn't answer this time. Try again, or ask in fewer words.";
        case "timeout":
          return "Bot.xd was thinking for too long and timed out.";
        case "turnedAway":
          return "Bot.xd was unable to answer."
      }
    }

    function Br(cB, Bc) {
      var nc, Vc, Ic, rB, uc;
      const sc = cB[null !== (nc = Bc.index) && void 0 !== nc ? nc : 0] ??= {
        name: "",
        args: ""
      };
      sc.name += null !== (Vc = null === (Ic = Bc.function) || void 0 === Ic ? void 0 : Ic.name) && void 0 !== Vc ? Vc : "", sc.args += null !== (rB = null === (uc = Bc.function) || void 0 === uc ? void 0 : uc.arguments) && void 0 !== rB ? rB : ""
    }

    function nr(cB) {
      return "mcp" === cB ? "simple" : cB
    }

    function Vr(cB, Bc, nc, Vc) {
      let Ic = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      return Ir(cB, Bc, nc, nr(Vc), Ic).answer
    }

    function Ir(cB, Bc, nc, Vc, Ic) {
      const rB = nc.flatMap((cB => {
        const Bc = nn(cB.name, cB.args);
        return null === Bc ? [] : [WV(jn(Vc), Bc.name, Bc.args)]
      }));
      let uc = !1;
      return 0 !== rB.length || 0 !== In(cB, Vc).length || cB.includes("```") || (rB.push(...Ic ? [] : function(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        const Vc = new Map;
        for (const sc of Vn(cB, Bc)) {
          const cB = Object.values(sc.args).some((cB => void 0 !== cB && nc.includes(cB.trim())));
          var Ic, rB, uc;
          "export_game" === sc.name || "switch_to_world_code" === sc.name || zn(sc.name) || cB || Vc.set(`${sc.name} ${null!==(Ic=sc.args.path)&&void 0!==Ic?Ic:""} ${null!==(rB=sc.args.search)&&void 0!==rB?rB:""} ${null!==(uc=sc.args.name)&&void 0!==uc?uc:""}`, sc.source)
        }
        return [...new Set(Vc.values())]
      }(Bc, Vc, KV)), uc = rB.length > 0), {
        answer: [cB, ...rB].join("\n\n").trim(),
        hasCallsFromReasoning: uc
      }
    }
    async function ru(cB, Bc) {
      const nc = cB.getReader(),
        Vc = new TextDecoder;
      let Ic = "";
      for (;;) {
        const {
          done: cB,
          value: rB
        } = await nc.read();
        if (cB) break;
        Ic += Vc.decode(rB, {
          stream: !0
        });
        let uc = Ic.indexOf("\n");
        for (; - 1 !== uc;) {
          const cB = Ic.slice(0, uc).trim();
          if (Ic = Ic.slice(uc + 1), uc = Ic.indexOf("\n"), !cB.startsWith("data:")) continue;
          const nc = cB.slice(5).trim();
          if ("[DONE]" === nc) return;
          let Vc;
          try {
            Vc = JSON.parse(nc)
          } catch {
            continue
          }
          Bc(Vc)
        }
      }
    }

    function ur(cB) {
      return cB.map((cB => ({
        type: "function",
        function: {
          name: cB.name,
          description: cB.description,
          parameters: cB.inputSchema
        }
      })))
    }

    function sr(cB) {
      return "object" === typeof cB
    }
    async function Mr(cB, Bc, nc, Vc) {
      var Ic;
      let rB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
      if (wI.freeAt(cB.name) > Date.now()) return "busy";
      wI.record(cB.name);
      const uc = await fetch(eI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: cB.name,
          messages: Bc,
          max_tokens: 16e3,
          temperature: cB.temperature,
          reasoning_effort: cB.reasoningEffort,
          stream: !0,
          stream_options: {
            include_usage: !0
          },
          ...cB.nativeTools && rB.length > 0 ? {
            tools: ur(rB)
          } : {}
        }),
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: nc
      });
      if (429 === uc.status) return wI.markFull(cB.name), "busy";
      if (!uc.ok || !uc.body) return console.warn(`World Code AI: ${cB.name} answered ${uc.status}`), uc.ok ? "failed" : 429 === (sc = uc.status) ? "busy" : 400 === sc || 413 === sc ? "tooLarge" : 401 === sc || 403 === sc ? "turnedAway" : "failed";
      var sc;
      let Mc = "",
        Pc = "";
      const qB = [];
      let Oc = !1,
        Tc = !1,
        fc = null;
      try {
        await async function(cB, Bc, nc) {
          await ru(cB, (cB => {
            var Vc;
            const Ic = cB,
              rB = null === (Vc = Ic.choices) || void 0 === Vc ? void 0 : Vc[0];
            var uc, sc;
            rB && Bc(null !== (uc = rB.delta) && void 0 !== uc ? uc : {}, null !== (sc = rB.finish_reason) && void 0 !== sc ? sc : null), Ic.usage && (null === nc || void 0 === nc || nc(Ic.usage))
          }))
        }(uc.body, ((Bc, nc) => {
          var Ic, rB, uc, sc;
          Oc ||= "length" === nc, Pc += null !== (Ic = null !== (rB = Bc.reasoning) && void 0 !== rB ? rB : Bc.reasoning_content) && void 0 !== Ic ? Ic : "", Mc += null !== (uc = Bc.content) && void 0 !== uc ? uc : "";
          for (const cB of null !== (fc = Bc.tool_calls) && void 0 !== fc ? fc : []) {
            var fc;
            Tc ||= "" !== Pc && "" === Mc.trim(), Br(qB, cB)
          }
          const mB = cB.nativeTools && Tc ? null !== (sc = HI(Mc)) && void 0 !== sc ? sc : "" : Mc;
          null === Vc || void 0 === Vc || Vc({
            model: cB.name,
            reasoningChars: Pc.length,
            answer: mB,
            isCalling: qB.length > 0
          })
        }), (cB => {
          fc = cB
        }))
      } finally {
        EI(fc, Bc, Mc + Pc, 20 * qB.length)
      }
      return null !== (Ic = Pr(cB, Mc, Pc, qB, Oc, Tc)) && void 0 !== Ic ? Ic : "failed"
    }

    function Pr(cB, Bc, nc, Vc, Ic) {
      var rB;
      let uc = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        sc = Bc;
      var Mc;
      cB.nativeTools && uc && (sc = null !== (Mc = HI(sc)) && void 0 !== Mc ? Mc : sc);
      sc = sc.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
      const Pc = Ir(sc, nc, Vc, null !== (rB = cB.callFormat) && void 0 !== rB ? rB : "simple", Ic);
      return "" === Pc.answer ? null : {
        model: cB.name,
        answer: Pc.answer,
        reasoning: nc,
        isCutShort: Ic,
        hasCallsFromReasoning: Pc.hasCallsFromReasoning
      }
    }

    function qu(cB) {
      return cB.replace(/<think>[\s\S]*?(<\/think>|$)/g, "")
    }

    function Or(cB) {
      return sr(cB) && !cB.isCutShort
    }
    async function Tr(cB, Bc, nc, Vc, Ic) {
      const rB = cB.map((() => new AbortController)),
        uc = () => {
          for (const cB of rB) cB.abort()
        };
      null !== nc && void 0 !== nc && nc.aborted && uc(), null === nc || void 0 === nc || nc.addEventListener("abort", uc, {
        once: !0
      });
      const sc = cB.map((() => {})),
        Mc = cB.map((() => {}));
      let Pc = null;
      const qB = cB => void 0 !== cB && ("" !== qu(cB.answer).trim() || !0 === cB.isCalling);
      let Oc = () => {};
      cB.forEach(((cB, nc) => {
        const uc = (0, tB.d)(dI, rB[nc].signal);
        Mr(cB, ir(Bc, cB), uc.signal, (cB => {
          Mc[nc] = cB, null === Pc && qB(cB) && (Pc = nc), Pc === nc && (null === Vc || void 0 === Vc || Vc(cB))
        }), Ic).catch((Bc => {
          if (rB[nc].signal.aborted) return "failed";
          const Vc = uc.signal.aborted;
          return console.warn(`World Code AI: ${cB.name} ${Vc?"took longer than 240 s":"couldn't be reached"}`, Bc), Vc ? "timeout" : "failed"
        })).then((cB => {
          uc.clear(), sc[nc] = cB, Pc !== nc || Or(cB) || (Pc = null), Oc()
        }))
      }));
      const Tc = () => {
        var cB;
        if (null !== Pc) {
          const cB = sc[Pc];
          return Or(cB) ? {
            reply: cB
          } : void 0
        }
        const Bc = sc.find(Or);
        if (Bc) return {
          reply: Bc
        };
        if (!sc.includes(void 0)) return {
          reply: null !== (cB = sc.find(sr)) && void 0 !== cB ? cB : null
        };
        {
          const cB = sc.findIndex(((cB, Bc) => void 0 === cB && qB(Mc[Bc])));
          if (-1 !== cB) {
            Pc = cB;
            const Bc = Mc[cB];
            Bc && (null === Vc || void 0 === Vc || Vc(Bc))
          }
        }
      };
      try {
        for (;;) {
          if (null !== nc && void 0 !== nc && nc.aborted) throw new DOMException("The World Code AI request was stopped", "AbortError");
          const cB = Tc();
          if (cB) {
            const Bc = sc.filter((cB => "string" === typeof cB));
            return {
              reply: cB.reply,
              failures: Bc
            }
          }
          await new Promise((cB => {
            Oc = cB
          }))
        }
      } finally {
        null === nc || void 0 === nc || nc.removeEventListener("abort", uc), uc()
      }
    }

    function fr() {
      let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
      return wI.firstFreeAt(FI.map((cB => cB.name)), cB)
    }
    async function mu(cB) {
      var Bc;
      let nc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const Vc = Date.now(),
        Ic = null !== (Bc = nc.models) && void 0 !== Bc ? Bc : FI,
        rB = void 0 === nc.models ? function(cB, Bc) {
          let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
          const Vc = cB.map((cB => ({
              model: cB,
              key: nc()
            }))).sort(((cB, Bc) => cB.key - Bc.key)).map((cB => {
              let {
                model: Bc
              } = cB;
              return Bc
            })),
            Ic = [...Vc.filter((cB => Bc(cB))), ...Vc.filter((cB => !Bc(cB)))],
            rB = [];
          for (let uc = 0; uc < Ic.length; uc += 2) rB.push(Ic.slice(uc, uc + 2));
          return rB
        }(Ic, (cB => wI.freeAt(cB.name) <= Vc)) : Ic.map((cB => [cB])),
        uc = [];
      for (const Mc of rB) {
        const Bc = await Tr(Mc, cB, nc.signal, nc.onProgress, nc.tools);
        if (null !== Bc.reply) {
          const Ic = Mc.find((cB => {
            var nc;
            return cB.name === (null === (nc = Bc.reply) || void 0 === nc ? void 0 : nc.model)
          }));
          return {
            ...Ic && !1 !== nc.canNudge ? await Sr(Ic, ir(cB, Ic), Bc.reply, nc.signal, nc.onProgress, nc.tools) : Bc.reply,
            ms: Date.now() - Vc
          }
        }
        uc.push(...Bc.failures)
      }
      const sc = AI.find((cB => uc.includes(cB)));
      throw new GI(null !== sc && void 0 !== sc ? sc : "failed")
    }
    const er = "You said what you'd change but made no call, so nothing changed. Make the call now, with the code in full.";

    function tu(cB) {
      const Bc = cB.trim();
      return Bc.length <= 400 && !/<tool_call|<function=|<\|channel\|>|```/.test(Bc) && !/^\s*(?:\d+[.)]|[-*\u2022])\s/m.test(Bc) && /^(?:I['\u2019]ll|I will|I['\u2019]m going to|We(?:['\u2019]ll| will| need to| should)|Let me(?! know)|Will|Need to)\s(?!not\b|never\b)[^.!?\n]*\b(?:add|change|replace|update|fix|rewrite|write|create|make|edit|remove|put)\b/i.test(Bc)
    }
    async function Sr(cB, Bc, nc, Vc, Ic, rB) {
      var uc;
      let sc = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : dI;
      if (! function(cB, Bc) {
          return !cB.isCutShort && tu(cB.answer) && !cB.answer.includes("?") && 0 === In(cB.answer, Bc).length
        }(nc, null !== (uc = cB.callFormat) && void 0 !== uc ? uc : "simple")) return nc;
      const Mc = [...Bc, {
          role: "assistant",
          content: nc.answer
        }, {
          role: "user",
          content: er
        }],
        Pc = (0, tB.d)(sc, Vc);
      try {
        const Bc = await Mr(cB, Mc, Pc.signal, Ic, rB);
        return sr(Bc) && "" !== Bc.answer.trim() ? Bc : nc
      } catch (qB) {
        if (null !== Vc && void 0 !== Vc && Vc.aborted) throw qB;
        return nc
      } finally {
        Pc.clear()
      }
    }

    function yu(cB) {
      const Bc = qu(cB);
      return /too_complex/i.test(Bc) || /^\W*too[\s_-]*complex\W*$/i.test(Bc.trim())
    }

    function zu(cB) {
      const Bc = qu(cB).trim();
      return Bc.length > 19 && !/^\W*too[\s_-]*complex/i.test(Bc)
    }

    function pr(cB) {
      return cB.map(((cB, Bc) => 0 === Bc && "system" === cB.role ? {
        ...cB,
        content: cB.content + xr
      } : cB))
    }
    async function hr(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      for (const Vc of tr) {
        const nc = await au(Vc, [{
          role: "user",
          content: cB
        }], Bc);
        if (null !== nc && "busy" !== nc) return pI(nc)
      }
      return nc ? "unchecked" : "ok"
    }
    async function au(cB, Bc, nc) {
      const Vc = (0, tB.d)(2e4, nc);
      wI.record(cB);
      try {
        var Ic, rB, uc, sc;
        const nc = await fetch(eI, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            model: cB,
            messages: Bc,
            max_tokens: 40
          }),
          credentials: "omit",
          referrerPolicy: "no-referrer",
          signal: Vc.signal
        });
        if (429 === nc.status) return wI.markFull(cB), "busy";
        if (!nc.ok) return null;
        const Mc = await nc.json(),
          Pc = String(null !== (Ic = null === (rB = Mc.choices) || void 0 === rB || null === (uc = rB[0]) || void 0 === uc || null === (sc = uc.message) || void 0 === sc ? void 0 : sc.content) && void 0 !== Ic ? Ic : "");
        return EI(Mc.usage, Bc, Pc),
          function(cB) {
            return /Safety:/.test(cB)
          }(Pc) ? Pc : null
      } catch (Mc) {
        if (null !== nc && void 0 !== nc && nc.aborted) throw Mc;
        return null
      } finally {
        Vc.clear()
      }
    }
    var lr = nc(302),
      Yr = nc(152);
    const Lr = {
        openrouter: {
          id: "openrouter",
          name: "OpenRouter",
          shortName: "OpenRouter",
          baseUrl: "https://openrouter.ai/api/v1",
          keyPage: "https://openrouter.ai/settings/keys"
        },
        anthropic: {
          id: "anthropic",
          name: "Claude (Anthropic)",
          shortName: "Claude",
          baseUrl: "https://api.anthropic.com/v1",
          keyPage: "https://console.anthropic.com/settings/keys"
        },
        openai: {
          id: "openai",
          name: "OpenAI (ChatGPT)",
          shortName: "OpenAI",
          baseUrl: "https://api.openai.com/v1",
          keyPage: "https://platform.openai.com/api-keys"
        },
        gemini: {
          id: "gemini",
          name: "Google Gemini",
          shortName: "Gemini",
          baseUrl: "https://generativelanguage.googleapis.com/v1beta",
          keyPage: "https://aistudio.google.com/apikey"
        },
        custom: {
          id: "custom",
          name: "Other AI server",
          shortName: "your AI",
          baseUrl: "",
          keyPage: ""
        }
      },
      gu = ["openrouter", "anthropic", "openai", "gemini", "custom"],
      Ur = new Set(Object.values(Lr).flatMap((cB => "" === cB.baseUrl ? [] : [new URL(cB.baseUrl).host])));

    function bu(cB) {
      return cB.trim().replace(/^[A-Z_]+\s*=\s*/, "").replace(/^["'`]+|["'`]+$/g, "").replace(/^Bearer\s+/i, "").replace(/\s+/g, "")
    }

    function Zr(cB) {
      return cB.startsWith("sk-or-") ? "openrouter" : cB.startsWith("sk-ant-") ? "anthropic" : cB.startsWith("AIza") ? "gemini" : cB.startsWith("sk-") ? "openai" : null
    }

    function Qr(cB) {
      let Bc;
      try {
        Bc = new URL(cB.trim())
      } catch {
        return null
      }
      const nc = "localhost" === Bc.hostname || "127.0.0.1" === Bc.hostname;
      return "https:" !== Bc.protocol && ("http:" !== Bc.protocol || !nc) || Bc.username || Bc.password || Bc.search ? null : `${Bc.origin}${Bc.pathname}`.replace(/\/chat\/completions\/?$/, "").replace(/\/+$/, "")
    }

    function Cr(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      return "custom" === cB && Bc ? new URL(Bc).host : nc ? Lr[cB].shortName : Lr[cB].name
    }
    class vu extends Error {
      constructor(cB, Bc, nc, Vc) {
        super(`AI key request: ${cB}`), this.problem = cB, this.retryAfterMs = Bc, this.status = nc, this.detail = Vc
      }
    }

    function Dr(cB, Bc) {
      return ("" === Bc ? cB : cB.split(Bc).join("\u2026")).replace(/[\w-]{24,}/g, "\u2026")
    }

    function Nr(cB, Bc) {
      const nc = "custom" === Bc ? "That server" : Lr[Bc].shortName;
      switch (cB) {
        case "badKey":
          return `${nc} didn't accept your key: it may be wrong or deleted. Check you copied all of it.`;
        case "busy":
          return "Too many requests right now. Wait a minute and try again.";
        case "noModel":
          return `${nc} can't find that model. Check its name.`;
        case "unreachable":
          return "anthropic" === Bc ? "Claude didn't accept your key: check it, or make a new one." : "custom" === Bc ? "Couldn't reach that address. Check it's typed right and the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollama see its help." : `Couldn't reach ${nc}. Check your internet and try again.`;
        case "noCredit":
          return "custom" === Bc ? "That server stopped your key for now: it has used all it can." : `${nc} stopped your key for now: it has used all it can. Check it on ${nc}'s website.`;
        case "blocked":
          return `${nc} doesn't work from where you are.`;
        case "timeout":
          return "That took too long. Try again.";
        default:
          return `${nc} had a problem with that. Try again in a minute.`
      }
    }

    function Er(cB) {
      var Bc;
      const nc = cB.at(-1);
      if (!nc || null !== nn(nc.name, nc.args) || function(cB) {
          try {
            return JSON.parse(cB), !0
          } catch {
            return !1
          }
        }(nc.args)) return;
      const Vc = null === (Bc = /"path"\s*:\s*"((?:[^"\\]|\\.)*)"/.exec(nc.args)) || void 0 === Bc ? void 0 : Bc[1];
      return {
        name: nc.name || "write_file",
        path: Vc
      }
    }
    const or = 1e4,
      Wr = 3e5,
      wr = 16e3;
    async function ku(cB, Bc, nc, Vc) {
      if ("custom" !== cB && ! function(cB) {
          return Ur.has(new URL(cB).host)
        }(Bc)) throw new Error(`AI key request to an unknown host for ${cB}`);
      const Ic = await fetch(Bc, {
        ...nc,
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: Vc
      });
      if (!Ic.ok) {
        const Bc = await Ic.text().catch((() => ""));
        throw console.warn(`AI key request: ${cB} answered ${Ic.status}`), new vu(function(cB, Bc, nc) {
          const Vc = !("gemini" === cB && 429 === Bc) && /credit|quota|billing|balance|payment|spend|budget|limit[ _]exceeded|key limit/i.test(nc);
          return 401 === Bc ? "badKey" : 404 !== Bc && 400 !== Bc || !/model_not_found|not_found_error[^\n]{0,80}model:|models?\b[^\n]{0,80}?(does not exist|not found)|no such model|unknown model|(invalid|not a valid) model/i.test(nc) ? 402 === Bc || (400 === Bc || 403 === Bc || 429 === Bc) && Vc && !/rate[ _-]?limit/i.test(nc) ? "noCredit" : 400 === Bc && /(location|region|country|territory)[^\n]{0,40}not supported|unsupported_country/i.test(nc) ? "blocked" : 400 === Bc && /api[ _-]?key/i.test(nc) ? "badKey" : 403 === Bc ? /moderat|flagged/i.test(nc) ? "refused" : /region|country|territor|location/i.test(nc) ? "blocked" : "badKey" : 429 === Bc ? "busy" : "failed" : "noModel"
        }(cB, Ic.status, Bc), function(cB) {
          const Bc = cB.headers.get("retry-after");
          if (!Bc) return;
          const nc = Number(Bc);
          return Number.isFinite(nc) ? 1e3 * nc : Math.max(0, Date.parse(Bc) - Date.now()) || void 0
        }(Ic), Ic.status, function(cB, Bc) {
          let nc = cB;
          try {
            const Bc = JSON.parse(cB),
              Vc = Bc.error && "object" === typeof Bc.error ? Bc.error.message : void 0,
              Ic = [Bc.error, Vc, Bc.message].find((cB => "string" === typeof cB));
            nc = "string" === typeof Ic ? Ic : cB
          } catch {}
          const Vc = Bc.reduce(((cB, Bc) => Dr(cB, Bc)), nc.replace(/\s+/g, " ").trim()).slice(0, 200);
          return "" === Vc ? void 0 : Vc
        }(Bc, function(cB) {
          const Bc = [];
          return new Headers(cB.headers).forEach(((cB, nc) => {
            /authorization|key/i.test(nc) && Bc.push(cB, cB.replace(/^Bearer\s+/i, ""))
          })), Bc.filter((cB => cB.length >= 6))
        }(nc)))
      }
      return Ic
    }
    async function Xr(cB, Bc, nc) {
      const Vc = (0, tB.d)(cB, Bc);
      try {
        return await nc(Vc.signal)
      } catch (Ic) {
        if (Ic instanceof vu || null !== Bc && void 0 !== Bc && Bc.aborted) throw Ic;
        throw Vc.signal.aborted || console.warn("AI key request couldn't be read", Ic), new vu(Vc.signal.aborted ? "timeout" : "unreachable")
      } finally {
        Vc.clear()
      }
    }

    function Hr(cB) {
      let Bc = cB.length;
      const nc = cB.lastIndexOf("<tool_call"); - 1 === nc || cB.includes("</tool_call>", nc) || (Bc = nc);
      const Vc = [...cB.matchAll(/\{\s*"(?:jsonrpc|name|tool|method|function)"/g)].find((Bc => null === function(cB, Bc) {
        let nc = 0,
          Vc = !1;
        for (let Ic = Bc; Ic < cB.length; Ic++) {
          const Bc = cB[Ic];
          if (Vc) "\\" === Bc ? Ic++ : '"' === Bc && (Vc = !1);
          else if ('"' === Bc) Vc = !0;
          else if ("{" === Bc) nc++;
          else if ("}" === Bc && (nc--, 0 === nc)) return Ic + 1
        }
        return null
      }(cB, Bc.index)));
      return Vc && Vc.index < Bc && (Bc = Vc.index), cB.slice(0, Bc).replace(/```[\w-]*\s*$/, "").trim()
    }

    function Fr(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "simple",
        Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      const {
        answer: Ic,
        reasoning: rB,
        iqc: uc,
        isCutShort: sc,
        nativeCalls: Mc = []
      } = Bc, Pc = Ic.replace(/<think>[\s\S]*?<\/think>/g, ""), qB = "" === Vc ? Pc.trim() : function(cB, Bc) {
        var nc, Vc;
        const Ic = Bc.trimStart(),
          rB = cB.trimStart();
        if (rB.length >= 16 && Ic.startsWith(rB.slice(0, 240))) return Ic;
        const uc = null !== (nc = null === (Vc = cB.match(/```/g)) || void 0 === Vc ? void 0 : Vc.length) && void 0 !== nc ? nc : 0,
          sc = Hr(cB) !== cB.trim() || uc % 2 === 1 ? 48 : 16;
        for (let Mc = Math.min(cB.length, Ic.length, 4e3); Mc >= sc; Mc--)
          if (cB.endsWith(Ic.slice(0, Mc))) return cB + Ic.slice(Mc);
        return cB + Bc
      }(Vc, Pc).trim(), Oc = Vr(qB, "", Mc, nc), Tc = Vr(sc ? Hr(qB) : qB, rB, Mc, nc, sc), fc = sc ? Er(Mc) : void 0;
      if (uc && "" === Tc) throw new vu("refused");
      if ("" === Tc && (!sc || "" === Oc && !fc)) throw new vu("failed");
      return {
        model: cB,
        answer: Tc,
        reasoning: rB,
        isCutShort: sc,
        written: sc ? Oc : void 0,
        cutCall: fc
      }
    }

    function Jr(cB) {
      const Bc = cB.findIndex((cB => "user" === cB.role));
      return -1 === Bc ? [] : cB.slice(Bc)
    }

    function ju(cB, Bc) {
      var nc;
      const Vc = null !== (nc = Bc.tools) && void 0 !== nc ? nc : [];
      if (0 === Vc.length) return {};
      switch (cB) {
        case "openai":
          return {
            tools: ur(Vc)
          };
        case "anthropic":
          return {
            tools: Vc.map((cB => ({
              name: cB.name,
              description: cB.description,
              input_schema: cB.inputSchema
            })))
          };
        case "gemini":
          return {
            tools: [{
              functionDeclarations: Vc.map((cB => {
                return {
                  name: cB.name,
                  description: cB.description,
                  parameters: (Bc = cB.inputSchema, {
                    type: "OBJECT",
                    properties: Object.fromEntries(Object.entries(Bc.properties).map((cB => {
                      let [Bc, nc] = cB;
                      return [Bc, {
                        type: "STRING",
                        description: nc.description
                      }]
                    }))),
                    required: Bc.required
                  })
                };
                var Bc
              }))
            }]
          }
      }
    }
    class Rr {
      constructor(cB, Bc, nc) {
        this.provider = cB, this.baseUrl = Bc, this.key = nc
      }
      async check(cB) {
        return Xr(or, cB, (async cB => {
          var Bc;
          const nc = await ku(this.provider, `${this.baseUrl}/models`, {
            headers: this.headers()
          }, cB);
          return {
            models: (null !== (Bc = (await nc.json()).data) && void 0 !== Bc ? Bc : []).map((cB => ({
              id: cB.id,
              name: cB.name
            })))
          }
        }))
      }
      async ask(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return Xr(Wr, nc.signal, (async Vc => {
          var Ic;
          const rB = await ku(this.provider, `${this.baseUrl}/chat/completions`, {
            method: "POST",
            headers: this.headers(),
            body: JSON.stringify({
              model: cB,
              messages: Bc,
              ["openai" === this.provider ? "max_completion_tokens" : "max_tokens"]: wr,
              stream: !0,
              ...ju("openai", nc)
            })
          }, Vc);
          let uc = "",
            sc = "",
            Mc = !1,
            Pc = !1;
          const qB = [];
          return await ru(null !== (Ic = rB.body) && void 0 !== Ic ? Ic : new ReadableStream, (Bc => {
            var Vc, Ic, rB, Oc, Tc, fc, mB, ec;
            const tB = Bc;
            if (tB.error) throw new vu(402 === Number(tB.error.code) ? "noCredit" : "failed");
            const Sc = null === (Vc = tB.choices) || void 0 === Vc ? void 0 : Vc[0];
            sc += null !== (Ic = null !== (rB = null === Sc || void 0 === Sc || null === (Oc = Sc.delta) || void 0 === Oc ? void 0 : Oc.reasoning) && void 0 !== rB ? rB : null === Sc || void 0 === Sc || null === (Tc = Sc.delta) || void 0 === Tc ? void 0 : Tc.reasoning_content) && void 0 !== Ic ? Ic : "", uc += null !== (fc = null === Sc || void 0 === Sc || null === (mB = Sc.delta) || void 0 === mB ? void 0 : mB.content) && void 0 !== fc ? fc : "";
            for (const cB of null !== (yB = null === Sc || void 0 === Sc || null === (zB = Sc.delta) || void 0 === zB ? void 0 : zB.tool_calls) && void 0 !== yB ? yB : []) {
              var yB, zB;
              Br(qB, cB)
            }
            Mc ||= "content_filter" === (null === Sc || void 0 === Sc ? void 0 : Sc.finish_reason), Pc ||= "length" === (null === Sc || void 0 === Sc ? void 0 : Sc.finish_reason), null === (ec = nc.onProgress) || void 0 === ec || ec.call(nc, {
              model: cB,
              reasoningChars: sc.length,
              answer: uc,
              isCalling: qB.length > 0
            })
          })), Fr(cB, {
            answer: uc,
            reasoning: sc,
            iqc: Mc,
            isCutShort: Pc,
            nativeCalls: qB
          }, nc.callFormat, nc.continueFrom)
        }))
      }
      headers() {
        return "" === this.key ? {
          "Content-Type": "application/json"
        } : {
          Authorization: `Bearer ${this.key}`,
          "Content-Type": "application/json"
        }
      }
    }
    class iu {
      constructor(cB) {
        this.key = cB, this.chat = void 0, this.chat = new Rr("openrouter", Lr.openrouter.baseUrl, cB)
      }
      async check(cB) {
        return await Xr(or, cB, (async cB => ku("openrouter", `${Lr.openrouter.baseUrl}/key`, {
          headers: {
            Authorization: `Bearer ${this.key}`
          }
        }, cB))), this.chat.check(cB)
      }
      ask(cB, Bc, nc) {
        return this.chat.ask(cB, Bc, nc)
      }
    }
    class Kr {
      constructor(cB) {
        this.key = cB, this.baseUrl = Lr.anthropic.baseUrl
      }
      async check(cB) {
        return Xr(or, cB, (async cB => {
          var Bc;
          const nc = await ku("anthropic", `${this.baseUrl}/models?limit=1000`, {
            headers: this.headers()
          }, cB);
          return {
            models: (null !== (Bc = (await nc.json()).data) && void 0 !== Bc ? Bc : []).map((cB => ({
              id: cB.id,
              name: cB.display_name
            })))
          }
        }))
      }
      async ask(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const Vc = Bc.filter((cB => "system" === cB.role)).map((cB => cB.content)).join("\n\n"),
          Ic = Jr(Bc).map((cB => ({
            role: cB.role,
            content: cB.content
          })));
        return Xr(Wr, nc.signal, (async Bc => {
          var rB;
          const uc = await ku("anthropic", `${this.baseUrl}/messages`, {
            method: "POST",
            headers: this.headers(),
            body: JSON.stringify({
              model: cB,
              max_tokens: wr,
              system: Vc,
              messages: Ic,
              stream: !0,
              ...ju("anthropic", nc)
            })
          }, Bc);
          let sc = "",
            Mc = "",
            Pc = !1,
            qB = !1;
          const Oc = new Map;
          await ru(null !== (rB = uc.body) && void 0 !== rB ? rB : new ReadableStream, (Bc => {
            var Vc, Ic;
            const rB = Bc;
            var uc, Tc, fc, mB;
            if ("error" === rB.type) throw new vu("overloaded_error" === (null === (uc = rB.error) || void 0 === uc ? void 0 : uc.type) || "rate_limit_error" === (null === (Tc = rB.error) || void 0 === Tc ? void 0 : Tc.type) ? "busy" : "failed");
            if ("content_block_start" === rB.type && "tool_use" === (null === (Vc = rB.content_block) || void 0 === Vc ? void 0 : Vc.type)) Oc.set(null !== (fc = rB.index) && void 0 !== fc ? fc : Oc.size, {
              name: null !== (mB = rB.content_block.name) && void 0 !== mB ? mB : "",
              args: ""
            });
            else if ("content_block_delta" === rB.type) {
              var ec, tB, Sc, yB, zB, pc;
              sc += null !== (ec = null === (tB = rB.delta) || void 0 === tB ? void 0 : tB.text) && void 0 !== ec ? ec : "", Mc += null !== (Sc = null === (yB = rB.delta) || void 0 === yB ? void 0 : yB.thinking) && void 0 !== Sc ? Sc : "";
              const cB = Oc.get(null !== (zB = rB.index) && void 0 !== zB ? zB : -1);
              var hc;
              if (cB && "input_json_delta" === (null === (pc = rB.delta) || void 0 === pc ? void 0 : pc.type)) cB.args += null !== (hc = rB.delta.partial_json) && void 0 !== hc ? hc : ""
            } else if ("message_delta" === rB.type) {
              var aB, lc;
              Pc ||= "refusal" === (null === (aB = rB.delta) || void 0 === aB ? void 0 : aB.stop_reason), qB ||= "max_tokens" === (null === (lc = rB.delta) || void 0 === lc ? void 0 : lc.stop_reason)
            }
            null === (Ic = nc.onProgress) || void 0 === Ic || Ic.call(nc, {
              model: cB,
              reasoningChars: Mc.length,
              answer: sc,
              isCalling: Oc.size > 0
            })
          }));
          const Tc = [...Oc.values()];
          return Fr(cB, {
            answer: sc,
            reasoning: Mc,
            iqc: Pc,
            isCutShort: qB,
            nativeCalls: Tc
          }, nc.callFormat, nc.continueFrom)
        }))
      }
      headers() {
        return {
          "x-api-key": this.key,
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true",
          "Content-Type": "application/json"
        }
      }
    }
    class xu {
      constructor(cB) {
        this.key = cB, this.baseUrl = Lr.gemini.baseUrl
      }
      async check(cB) {
        return Xr(or, cB, (async cB => {
          var Bc;
          const nc = await ku("gemini", `${this.baseUrl}/models?pageSize=1000`, {
            headers: this.headers()
          }, cB);
          return {
            models: (null !== (Bc = (await nc.json()).models) && void 0 !== Bc ? Bc : []).filter((cB => {
              var Bc, nc;
              return null === (Bc = null === (nc = cB.supportedGenerationMethods) || void 0 === nc ? void 0 : nc.includes("generateContent")) || void 0 === Bc || Bc
            })).map((cB => ({
              id: cB.name.replace(/^models\//, ""),
              name: cB.displayName
            })))
          }
        }))
      }
      async ask(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const Vc = Bc.filter((cB => "system" === cB.role)).map((cB => ({
            text: cB.content
          }))),
          Ic = Jr(Bc).map((cB => ({
            role: "assistant" === cB.role ? "model" : "user",
            parts: [{
              text: cB.content
            }]
          })));
        return Xr(Wr, nc.signal, (async Bc => {
          var rB;
          const uc = await ku("gemini", `${this.baseUrl}/models/${encodeURIComponent(cB)}:streamGenerateContent?alt=sse`, {
            method: "POST",
            headers: this.headers(),
            body: JSON.stringify({
              systemInstruction: {
                parts: Vc
              },
              contents: Ic,
              generationConfig: {
                maxOutputTokens: wr
              },
              ...ju("gemini", nc)
            })
          }, Bc);
          let sc = "",
            Mc = "",
            Pc = !1,
            qB = !1;
          const Oc = [];
          return await ru(null !== (rB = uc.body) && void 0 !== rB ? rB : new ReadableStream, (Bc => {
            var Vc, Ic, rB;
            const uc = Bc,
              Tc = null === (Vc = uc.candidates) || void 0 === Vc ? void 0 : Vc[0];
            for (const cB of null !== (fc = null === Tc || void 0 === Tc || null === (mB = Tc.content) || void 0 === mB ? void 0 : mB.parts) && void 0 !== fc ? fc : []) {
              var fc, mB, ec, tB;
              if (cB.functionCall) Oc.push({
                name: null !== (ec = cB.functionCall.name) && void 0 !== ec ? ec : "",
                args: JSON.stringify(null !== (tB = cB.functionCall.args) && void 0 !== tB ? tB : {})
              });
              else if (cB.thought) {
                var Sc;
                Mc += null !== (Sc = cB.text) && void 0 !== Sc ? Sc : ""
              } else {
                var yB;
                sc += null !== (yB = cB.text) && void 0 !== yB ? yB : ""
              }
            }
            Pc ||= void 0 !== (null === (Ic = uc.promptFeedback) || void 0 === Ic ? void 0 : Ic.blockReason) || "SAFETY" === (null === Tc || void 0 === Tc ? void 0 : Tc.finishReason) || "PROHIBITED_CONTENT" === (null === Tc || void 0 === Tc ? void 0 : Tc.finishReason), qB ||= "MAX_TOKENS" === (null === Tc || void 0 === Tc ? void 0 : Tc.finishReason), null === (rB = nc.onProgress) || void 0 === rB || rB.call(nc, {
              model: cB,
              reasoningChars: Mc.length,
              answer: sc,
              isCalling: Oc.length > 0
            })
          })), Fr(cB, {
            answer: sc,
            reasoning: Mc,
            iqc: Pc,
            isCutShort: qB,
            nativeCalls: Oc
          }, nc.callFormat, nc.continueFrom)
        }))
      }
      headers() {
        return {
          "x-goog-api-key": this.key,
          "Content-Type": "application/json"
        }
      }
    }

    function dr(cB, Bc, nc) {
      switch (cB) {
        case "openrouter":
          return new iu(Bc);
        case "anthropic":
          return new Kr(Bc);
        case "gemini":
          return new xu(Bc);
        case "openai":
          return new Rr("openai", Lr.openai.baseUrl, Bc);
        case "custom":
          return new Rr("custom", null !== nc && void 0 !== nc ? nc : "", Bc)
      }
    }
    const Ar = {
        fast: "Fast",
        smart: "Smart",
        smartest: "Smartest"
      },
      Gr = {
        anthropic: {
          fast: [{
            id: "claude-haiku-5-5",
            name: "Claude Haiku 5.5"
          }, {
            id: "claude-haiku-4-5",
            name: "Claude Haiku 4.5"
          }],
          smart: [{
            id: "claude-sonnet-5-5",
            name: "Claude Sonnet 5.5"
          }, {
            id: "claude-sonnet-5",
            name: "Claude Sonnet 5"
          }, {
            id: "claude-sonnet-4-6",
            name: "Claude Sonnet 4.6"
          }],
          smartest: [{
            id: "claude-opus-5-5",
            name: "Claude Opus 5.5"
          }, {
            id: "claude-opus-5",
            name: "Claude Opus 5"
          }, {
            id: "claude-opus-4-8",
            name: "Claude Opus 4.8"
          }]
        },
        openai: {
          fast: [{
            id: "gpt-6-luna",
            name: "GPT-6 Luna"
          }, {
            id: "gpt-5-mini",
            name: "GPT-5 mini"
          }],
          smart: [{
            id: "gpt-6.1-sol",
            name: "GPT-6.1 Sol"
          }, {
            id: "gpt-6-sol",
            name: "GPT-6 Sol"
          }, {
            id: "gpt-5.2",
            name: "GPT-5.2"
          }],
          smartest: [{
            id: "gpt-6-astra",
            name: "GPT-6 Astra"
          }, {
            id: "gpt-5.6-sol",
            name: "GPT-5.6 Sol"
          }]
        },
        gemini: {
          fast: [{
            id: "gemini-3.5-flash-lite",
            name: "Gemini 3.5 Flash-Lite"
          }, {
            id: "gemini-3.1-flash-lite",
            name: "Gemini 3.1 Flash-Lite"
          }],
          smart: [{
            id: "gemini-3.8-flash",
            name: "Gemini 3.8 Flash"
          }, {
            id: "gemini-3.6-flash",
            name: "Gemini 3.6 Flash"
          }],
          smartest: [{
            id: "gemini-4-argon",
            name: "Gemini 4 Argon"
          }, {
            id: "gemini-3.1-pro-preview",
            name: "Gemini 3.1 Pro"
          }]
        },
        openrouter: {
          fast: [{
            id: "anthropic/claude-haiku-5.5",
            name: "Claude Haiku 5.5"
          }, {
            id: "anthropic/claude-haiku-4.5",
            name: "Claude Haiku 4.5"
          }],
          smart: [{
            id: "anthropic/claude-sonnet-5.5",
            name: "Claude Sonnet 5.5"
          }, {
            id: "anthropic/claude-sonnet-5",
            name: "Claude Sonnet 5"
          }, {
            id: "anthropic/claude-sonnet-4.6",
            name: "Claude Sonnet 4.6"
          }],
          smartest: [{
            id: "anthropic/claude-opus-5.5",
            name: "Claude Opus 5.5"
          }, {
            id: "anthropic/claude-opus-5",
            name: "Claude Opus 5"
          }]
        }
      };

    function cs(cB) {
      return /claude-(sonnet|opus|fable)|gpt-5(\.\d+)?($|-codex|-pro|-sol)|gpt-6(\.\d+)?-(sol|astra)|gemini-[\d.]+-pro|gemini-4/.test(cB) ? "mcp" : "simple"
    }

    function Bu(cB, Bc) {
      return "custom" !== cB && /claude-|gpt-|gemini-/.test(Bc)
    }

    function nu(cB, Bc, nc) {
      var Vc;
      const Ic = nc.find((cB => cB.id === Bc));
      return {
        id: Bc,
        name: null !== (Vc = null === Ic || void 0 === Ic ? void 0 : Ic.name) && void 0 !== Vc ? Vc : Bc,
        callFormat: cs(Bc),
        nativeTools: Bu(cB, Bc)
      }
    }

    function Vu(cB, Bc) {
      return "custom" !== cB ? function(cB, Bc) {
        if ("custom" === cB) return [];
        const nc = new Set(Bc.map((cB => cB.id))),
          Vc = Gr[cB];
        return Object.keys(Vc).flatMap((Ic => {
          const rB = Vc[Ic].find((cB => nc.has(cB.id)));
          return rB ? [{
            ...nu(cB, rB.id, Bc),
            name: rB.name,
            tier: Ic
          }] : []
        }))
      }(cB, Bc) : Bc.slice(0, 20).map((nc => nu(cB, nc.id, Bc)))
    }

    function Iu(cB) {
      var Bc;
      return null !== (Bc = cB.find((cB => "smart" === cB.tier))) && void 0 !== Bc ? Bc : cB[0]
    }

    function rs(cB) {
      var Bc;
      let nc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return null !== (Bc = cB.name) && void 0 !== Bc ? Bc : Cr(cB.provider, cB.baseUrl, nc)
    }
    const uu = "bloxdAiHelperKeys",
      su = {
        keys: [],
        selected: null,
        remember: !1
      };

    function Mu(cB, Bc) {
      return cB.id === Bc.id || "custom" === cB.provider && "custom" === Bc.provider && cB.baseUrl === Bc.baseUrl
    }

    function Pu(cB) {
      if ("custom" !== cB.provider) return !0;
      try {
        var Bc;
        return new URL(null !== (Bc = cB.baseUrl) && void 0 !== Bc ? Bc : "").protocol.startsWith("http")
      } catch {
        return !1
      }
    }

    function qs(cB) {
      try {
        return "undefined" === typeof window ? null : window[cB]
      } catch (Bc) {
        return console.warn(`AI Helper: no ${cB}`, Bc), null
      }
    }
    const Ou = new class {
      constructor(cB, Bc) {
        var nc;
        this.session = cB, this.local = Bc, this.state = void 0, this.listeners = new Set, this.ownsRemembered = !1, this.lastUsedAt = 0, this.getState = () => this.state, this.subscribe = cB => (this.listeners.add(cB), () => {
          this.listeners.delete(cB)
        });
        for (const rB of [cB, Bc]) null !== rB && void 0 !== rB && rB.getItem(uu) && !this.read(rB) && rB.removeItem(uu);
        const Vc = this.read(cB),
          Ic = this.read(Bc);
        this.state = null !== Vc && void 0 !== Vc && Vc.remember ? null !== Ic && void 0 !== Ic && Ic.remember ? Ic : {
          ...Vc,
          remember: !1
        } : null !== (nc = null !== Vc && void 0 !== Vc ? Vc : Ic) && void 0 !== nc ? nc : su, this.ownsRemembered = this.state.remember && null !== Ic
      }
      nextUsedAt() {
        return this.lastUsedAt = Math.max(Date.now(), this.lastUsedAt + 1), this.lastUsedAt
      }
      activeKey() {
        const cB = this.state.selected,
          Bc = cB ? this.state.keys.find((Bc => Bc.id === cB.keyId)) : void 0,
          nc = null === Bc || void 0 === Bc ? void 0 : Bc.models.find((Bc => Bc.id === (null === cB || void 0 === cB ? void 0 : cB.modelId)));
        return Bc && nc ? {
          ...Bc,
          model: nc
        } : null
      }
      addKey(cB, Bc, nc) {
        var Vc, Ic, rB;
        const uc = this.state.keys.find((Bc => "custom" === Bc.provider && Bc.baseUrl === cB.baseUrl)),
          sc = "custom" !== cB.provider ? cB.provider : null !== (Vc = null === uc || void 0 === uc ? void 0 : uc.id) && void 0 !== Vc ? Vc : `custom-${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,
          Mc = void 0 === Bc ? Iu(cB.models) : null !== (Ic = cB.models.find((cB => cB.id === Bc))) && void 0 !== Ic ? Ic : cB.models[0],
          Pc = this.state.keys.find((cB => cB.id === sc)),
          qB = {
            ...cB,
            id: sc,
            usedAt: this.nextUsedAt(),
            ...Mc ? {
              usedModelId: Mc.id
            } : {},
            ...null !== Pc && void 0 !== Pc && Pc.name && !cB.name ? {
              name: Pc.name
            } : {}
          },
          Oc = this.state.keys.every((cB => cB.id !== sc)),
          Tc = void 0 !== nc && nc !== sc && this.state.keys.some((cB => cB.id === nc)),
          fc = Tc ? this.state.keys.filter((cB => cB.id !== sc)).map((cB => cB.id === nc ? qB : cB)) : Oc ? [...this.state.keys, qB] : this.state.keys.map((cB => cB.id === sc ? qB : cB)),
          mB = Mc ? {
            keyId: sc,
            modelId: Mc.id
          } : (null === (rB = this.state.selected) || void 0 === rB ? void 0 : rB.keyId) === nc && Tc ? null : this.state.selected;
        return this.update({
          keys: fc,
          selected: mB
        }), sc
      }
      renameKey(cB, Bc) {
        const nc = Bc.replace(/\s+/g, " ").trim().slice(0, 30);
        this.update({
          keys: this.state.keys.map((Bc => {
            if (Bc.id !== cB) return Bc;
            const {
              name: Vc,
              ...Ic
            } = Bc;
            return "" === nc ? Ic : {
              ...Ic,
              name: nc
            }
          }))
        })
      }
      select(cB) {
        const Bc = this.nextUsedAt(),
          nc = null === cB ? this.state.keys : this.state.keys.map((nc => nc.id === cB.keyId ? {
            ...nc,
            usedAt: Bc,
            usedModelId: cB.modelId
          } : nc));
        this.update({
          keys: nc,
          selected: cB
        })
      }
      refreshModels(cB, Bc, nc) {
        const Vc = this.state.keys.find((Bc => Bc.id === cB));
        if (!Vc || nc && (Vc.key !== nc.key || Vc.baseUrl !== nc.baseUrl)) return !1;
        const Ic = [...Bc.map((cB => {
            const Bc = Vc.models.find((Bc => Bc.id === cB.id));
            return {
              ...cB,
              ...!1 === (null === Bc || void 0 === Bc ? void 0 : Bc.nativeTools) ? {
                nativeTools: !1
              } : {},
              ...null !== Bc && void 0 !== Bc && Bc.typed ? {
                typed: !0
              } : {}
            }
          })), ...Vc.models.filter((cB => cB.typed && !Bc.some((Bc => Bc.id === cB.id))))],
          rB = this.state.selected,
          uc = (null === rB || void 0 === rB ? void 0 : rB.keyId) === cB && !Ic.some((cB => cB.id === rB.modelId)),
          sc = Iu(Ic);
        return this.update({
          keys: this.state.keys.map((Bc => Bc.id === cB ? {
            ...Bc,
            models: Ic
          } : Bc)),
          selected: uc ? sc ? {
            keyId: cB,
            modelId: sc.id
          } : null : rB
        }), !0
      }
      stopNativeTools(cB, Bc) {
        this.update({
          keys: this.state.keys.map((nc => {
            if (nc.id !== cB) return nc;
            const Vc = nc.models.map((cB => cB.id === Bc ? {
              ...cB,
              nativeTools: !1
            } : cB));
            return {
              ...nc,
              models: Vc
            }
          }))
        })
      }
      removeKey(cB) {
        var Bc;
        const nc = this.state,
          Vc = nc.keys.findIndex((Bc => Bc.id === cB)),
          Ic = nc.keys[Vc];
        if (!Ic) return () => {};
        const rB = nc.keys.filter((Bc => Bc.id !== cB)),
          uc = (null === (Bc = nc.selected) || void 0 === Bc ? void 0 : Bc.keyId) === cB ? null : nc.selected;
        return this.update({
          keys: rB,
          selected: uc,
          remember: rB.length > 0 && nc.remember
        }), () => {
          var Bc;
          const rB = this.state.keys.some((cB => Mu(cB, Ic)));
          if (rB) return;
          const uc = [...this.state.keys];
          uc.splice(Math.min(Vc, uc.length), 0, Ic);
          const sc = (null === (Bc = nc.selected) || void 0 === Bc ? void 0 : Bc.keyId) === cB && null === this.state.selected;
          this.update({
            keys: uc,
            selected: sc ? nc.selected : this.state.selected,
            remember: this.state.remember || nc.remember
          })
        }
      }
      removeAll() {
        this.update(su), this.local && null !== this.local.getItem(uu) && (this.local.setItem(uu, JSON.stringify(su)), this.local.removeItem(uu))
      }
      setRemember(cB) {
        var Bc;
        const nc = cB && !this.ownsRemembered ? this.read(this.local) : null,
          Vc = (null !== (Bc = null === nc || void 0 === nc ? void 0 : nc.keys) && void 0 !== Bc ? Bc : []).filter((cB => this.state.keys.every((Bc => !Mu(Bc, cB)))));
        this.update({
          remember: cB,
          keys: [...Vc, ...this.state.keys]
        })
      }
      otherTabChanged(cB) {
        var Bc;
        if (!this.state.remember) return;
        const nc = cB ? this.parse(cB) : null;
        nc ? (this.state = nc, this.ownsRemembered = nc.remember) : (this.ownsRemembered = !1, this.state = {
          ...this.state,
          remember: !1
        }), null === (Bc = this.session) || void 0 === Bc || Bc.setItem(uu, JSON.stringify(this.state)), this.notify()
      }
      notify() {
        for (const cB of this.listeners) cB()
      }
      update(cB) {
        var Bc;
        this.state = {
          ...this.state,
          ...cB
        };
        const nc = JSON.stringify(this.state);
        var Vc;
        if (null === (Bc = this.session) || void 0 === Bc || Bc.setItem(uu, nc), this.state.remember && this.state.keys.length > 0) null === (Vc = this.local) || void 0 === Vc || Vc.setItem(uu, nc), this.ownsRemembered = !0;
        else if (this.ownsRemembered) {
          var Ic, rB;
          if (0 === this.state.keys.length) null === (rB = this.local) || void 0 === rB || rB.setItem(uu, JSON.stringify(su));
          null === (Ic = this.local) || void 0 === Ic || Ic.removeItem(uu), this.ownsRemembered = !1
        }
        this.notify()
      }
      read(cB) {
        const Bc = null === cB || void 0 === cB ? void 0 : cB.getItem(uu);
        return Bc ? this.parse(Bc) : null
      }
      parse(cB) {
        try {
          const Bc = {
            ...su,
            ...JSON.parse(cB)
          };
          return Array.isArray(Bc.keys) && Bc.keys.every(Pu) ? Bc : (console.warn("AI Helper: saved keys are in a form this version doesn't read"), null)
        } catch (Bc) {
          return console.warn("AI Helper: saved keys couldn't be read", Bc instanceof Error ? Bc.name : "error"), null
        }
      }
    }(qs("sessionStorage"), qs("localStorage"));

    function Tu() {
      const cB = function() {
          const [cB, Bc] = (0, Vc.useState)(Ou.getState);
          return (0, Vc.useEffect)((() => (Bc(Ou.getState()), Ou.subscribe((() => {
            Bc(Ou.getState())
          })))), []), cB
        }(),
        Bc = Ou.activeKey();
      return {
        ...cB,
        active: Bc,
        isSelected: nc => {
          return (Vc = Bc ? cB.selected : null) === (Ic = nc) || null !== Vc && null !== Ic && Vc.keyId === Ic.keyId && Vc.modelId === Ic.modelId;
          var Vc, Ic
        },
        select: cB => {
          Ou.select(cB)
        },
        removeKey: cB => Ou.removeKey(cB),
        renameKey: (cB, Bc) => {
          Ou.renameKey(cB, Bc)
        },
        setRemember: cB => {
          Ou.setRemember(cB)
        }
      }
    }
    async function fu(cB, Bc) {
      var nc;
      let {
        provider: Vc,
        key: Ic,
        baseUrl: rB,
        modelName: uc
      } = cB;
      const sc = null !== (nc = null === uc || void 0 === uc ? void 0 : uc.trim()) && void 0 !== nc ? nc : "";
      let Mc = [];
      try {
        Mc = (await dr(Vc, Ic, rB).check(Bc)).models
      } catch (Pc) {
        if (!("custom" === Vc && Pc instanceof vu && ("failed" === Pc.problem || "noModel" === Pc.problem))) throw Pc
      }
      if (null !== Bc && void 0 !== Bc && Bc.aborted) throw new DOMException("The AI key test was stopped", "AbortError");
      return "" !== sc ? [{
        ...nu(Vc, sc, Mc),
        typed: !0
      }] : Vu(Vc, Mc)
    }
    "undefined" !== typeof window && window.addEventListener("storage", (cB => {
      cB.storageArea === qs("localStorage") && cB.key === uu && Ou.otherTabChanged(cB.newValue)
    }));
    async function ms(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Vc = dr(cB.provider, cB.key, cB.baseUrl);
      let Ic = {
        ...nc,
        callFormat: cB.model.callFormat,
        tools: cB.model.nativeTools ? nc.tools : void 0
      };
      const rB = async () => {
        try {
          return await Vc.ask(cB.model.id, Bc, Ic)
        } catch (nc) {
          if (! function(cB, Bc) {
              var nc, Vc, Ic;
              return 0 !== (null !== (nc = null === (Vc = Bc.tools) || void 0 === Vc ? void 0 : Vc.length) && void 0 !== nc ? nc : 0) && cB instanceof vu && "failed" === cB.problem && (400 === cB.status || 404 === cB.status && /\btool/i.test(null !== (Ic = cB.detail) && void 0 !== Ic ? Ic : ""))
            }(nc, Ic)) throw nc;
          const rB = {
              ...Ic,
              tools: void 0
            },
            uc = await Vc.ask(cB.model.id, Bc, rB);
          return Ou.stopNativeTools(cB.id, cB.model.id), Ic = rB, uc
        }
      };
      try {
        return await rB()
      } catch (Oc) {
        var uc, sc;
        if (!((qB = Oc) instanceof vu && void 0 !== qB.status && "noCredit" !== qB.problem && (429 === qB.status || 408 === qB.status || qB.status >= 500))) throw Oc;
        return await (Mc = Math.min(null !== (uc = null !== (sc = Oc.retryAfterMs) && void 0 !== sc ? sc : nc.retryWaitMs) && void 0 !== uc ? uc : 3e3, 2e4), Pc = nc.signal, new Promise(((cB, Bc) => {
          if (null !== Pc && void 0 !== Pc && Pc.aborted) return void Bc(new DOMException("The AI key request was stopped", "AbortError"));
          const nc = setTimeout(cB, Mc);
          null === Pc || void 0 === Pc || Pc.addEventListener("abort", (() => {
            clearTimeout(nc), Bc(new DOMException("The AI key request was stopped", "AbortError"))
          }), {
            once: !0
          })
        }))), rB()
      }
      var Mc, Pc, qB
    }
    var eu = nc(2804);
    const ts = "Super Bot.xd",
      Su = {
        ovh: {
          name: ts,
          temperature: .6,
          nativeTools: !0,
          callFormat: "qwenXml"
        },
        deepseek: {
          name: ts,
          temperature: 1,
          nativeTools: !0,
          callFormat: "deepseek"
        }
      };
    const ys = "bloxdAiHelperSuperBot",
      zs = "bloxdAiHelperDeepSeekNotice";

    function pu(cB) {
      if ("deepseek" !== cB) return !0;
      try {
        return "undefined" !== typeof window && "1" === window.localStorage.getItem(zs)
      } catch {
        return !1
      }
    }

    function hu() {
      try {
        return "undefined" !== typeof window && "1" === window.sessionStorage.getItem(ys)
      } catch {
        return !1
      }
    }
    const as = new class {
      constructor() {
        this.state = void 0, this.listeners = new Set, this.refreshing = null, this.getState = () => this.state, this.subscribe = cB => (this.listeners.add(cB), () => {
          this.listeners.delete(cB)
        }), this.state = {
          picked: hu(),
          status: null,
          canBuySuperRank: null
        }, Ou.subscribe((() => {
          null !== Ou.getState().selected && this.state.picked && this.update({
            picked: !1
          })
        }))
      }
      isAnswering() {
        var cB;
        return this.state.picked && "ok" === (null === (cB = this.state.status) || void 0 === cB ? void 0 : cB.availability)
      }
      Vn() {
        Ou.select(null), this.update({
          picked: !0
        })
      }
      unpick() {
        this.update({
          picked: !1
        })
      }
      setStatus(cB) {
        const Bc = this.state.picked && gs(cB, this.state.canBuySuperRank) && pu(cB.provider);
        this.update({
          status: cB,
          picked: Bc
        })
      }
      setCanBuySuperRank(cB) {
        const {
          status: Bc
        } = this.state;
        this.update({
          canBuySuperRank: cB,
          picked: this.state.picked && (null === Bc || gs(Bc, cB))
        })
      }
      async refresh() {
        return this.refreshing ??= ZI("/ai-helper/super-bot-xd/status", {}).then((cB => {
          this.setStatus(cB)
        })).catch((cB => {
          console.warn("AI Helper: Super Bot.xd's usage couldn't be checked", cB)
        })).finally((() => {
          this.refreshing = null
        })), this.refreshing
      }
      update(cB) {
        this.state = {
          ...this.state,
          ...cB
        };
        try {
          window.sessionStorage.setItem(ys, this.state.picked ? "1" : "0")
        } catch {}
        for (const Bc of this.listeners) Bc()
      }
    };

    function lu() {
      const [cB, Bc] = (0, Vc.useState)(as.getState);
      return (0, Vc.useEffect)((() => (Bc(as.getState()), as.subscribe((() => {
        Bc(as.getState())
      })))), []), cB
    }

    function Yu(cB) {
      var Bc;
      let nc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
      if (null === cB) return "Checking whether Super Bot.xd can answer for you\u2026";
      switch (cB.availability) {
        case "ok":
          return null;
        case "guest":
          return "Log in to use Super Bot.xd.";
        case "tooNew":
          return `Super Bot.xd opens once your account is a week old: ${vs((null!==(Bc=cB.availableFrom)&&void 0!==Bc?Bc:nc)-nc)} to go.`;
        case "noUsageLeft":
          return cB.isSuper ? `You've used this week's Super Bot.xd usage. It comes back ${function(cB,Bc){const nc=Math.ceil((cB-Bc)/36e5);if(nc<=24)return nc<=1?"within the hour":`in ${nc} hours`;return`in ${vs(cB-Bc)}`}(cB.resetsAt,nc)}.` : "0 usage remaining - upgrade to Super for a more powerful AI.";
        case "unavailable":
          return "Super Bot.xd can't answer right now. Try again later."
      }
    }

    function Lu(cB) {
      return null !== cB && !cB.isSuper && "noUsageLeft" === cB.availability
    }

    function gs(cB, Bc) {
      return "ok" === cB.availability || !1 !== Bc && Lu(cB)
    }

    function Uu(cB) {
      return !0 === cB.canBuySuperRank && Lu(cB.status)
    }

    function bs(cB) {
      return Uu(cB) ? null : Yu(cB.status)
    }

    function Zu(cB) {
      return cB.picked && null === bs(cB)
    }

    function Qu(cB) {
      return cB.picked && Uu(cB)
    }

    function Cu(cB) {
      return `Usage left: ${cB.left}`
    }

    function vs(cB) {
      const Bc = Math.max(1, Math.ceil(cB / lr.e));
      return 1 === Bc ? "1 day" : `${Bc} days`
    }

    function Du(cB, Bc) {
      const nc = "unavailable" === cB ? Yu(Bc) : null;
      if (nc) return `${nc} Bot.xd is answering instead.`;
      switch (cB) {
        case "busy":
          return "Super Bot.xd is busy, so Bot.xd is answering this one.";
        case "tooLong":
          return "That message is too big for your Super Bot.xd usage, so Bot.xd is answering this one.";
        case "tooLarge":
          return "That request is too large for Super Bot.xd, so Bot.xd is answering this one.";
        case "unchecked":
          return "Super Bot.xd's safety check is busy, so Bot.xd is answering this one.";
        case "contextRefused":
          return "Something in your code didn't pass Super Bot.xd's safety check, so Bot.xd is answering this one.";
        default:
          return "Super Bot.xd couldn't answer, so Bot.xd is answering this one."
      }
    }
    async function Nu(cB) {
      if (function(cB) {
          var Bc, nc, Vc, Ic, rB, uc, sc;
          return cB.messages.length > 12 || cB.messages.some((cB => cB.content.length > br)) || (null !== (Bc = null === (nc = cB.toolsJson) || void 0 === nc ? void 0 : nc.length) && void 0 !== Bc ? Bc : 0) > 1e5 || (null !== (Vc = null === (Ic = cB.request) || void 0 === Ic ? void 0 : Ic.length) && void 0 !== Vc ? Vc : 0) > br || (null !== (rB = null === (uc = cB.code) || void 0 === uc ? void 0 : uc.length) && void 0 !== rB ? rB : 0) > br || (null !== (sc = cB.toolResults) && void 0 !== sc ? sc : []).some((cB => cB.text.length > 1e5))
        }(cB)) return {
        outcome: "tooLarge"
      };
      try {
        return await ZI("/ai-helper/super-bot-xd/ask", cB)
      } catch (Bc) {
        if (Bc instanceof Yr.c && 413 === Bc.httpCode) return {
          outcome: "tooLarge"
        };
        throw Bc
      }
    }
    async function Eu(cB, Bc) {
      return Bc ? await new Promise(((nc, Vc) => {
        const Ic = () => {
          Vc(new DOMException("The Super Bot.xd request was stopped", "AbortError"))
        };
        Bc.aborted ? Ic() : (Bc.addEventListener("abort", Ic, {
          once: !0
        }), cB.then(nc, Vc).finally((() => {
          Bc.removeEventListener("abort", Ic)
        })))
      })) : await cB
    }
    var ou = nc(35),
      Wu = nc(27),
      wu = nc(1862);
    let ks = null;

    function Xu() {
      ks ??= Promise.resolve().then((() => nc(1495))), ks.then((cB => {
        let {
          siteSupportsPurchases: Bc
        } = cB;
        as.setCanBuySuperRank(Bc())
      }), (cB => {
        ks = null, console.warn("AI Helper: couldn't find out whether Super rank is sold here", cB)
      }))
    }
    let Hu = !1,
      Fu = null;
    async function Ju() {
      if (Hu) return !0;
      Hu = !0;
      try {
        var cB;
        if (await as.refresh(), !Qu(as.getState())) return !1;
        document.activeElement instanceof HTMLElement && document.activeElement.blur();
        const [{
          NotificationProvider: Bc
        }, {
          WorldCodeAiOutOfUsage: Vc
        }] = await Promise.all([Promise.resolve().then((() => nc(1194))), nc.e(331).then((() => nc(59111)))]);
        null === (cB = Fu) || void 0 === cB || cB.tearDownNotification();
        const Ic = Bc.showCustomPopup({
          body: cB => (0, uc.jsx)(Vc, {
            onGetSuperRank: () => {
              cB(),
                function() {
                  ou.i.Vu("OpenStoreFromCodeEditor"), (0, wu.i)({
                    mode: "self",
                    source: "codeEditorAi",
                    openItem: "superRank"
                  });
                  const cB = ou.i.subscribe("appManagerUpdated|openEverythingMenuName", (() => {
                    null === Wu.d.get("openEverythingMenuName") && (ou.i.unsubscribe(cB), as.refresh())
                  }))
                }()
            }
          })
        });
        return Fu = Ic, Ic.getResult().finally((() => {
          Fu === Ic && (Fu = null)
        })), !0
      } catch (Bc) {
        return console.warn("AI Helper: the out of usage popup couldn't be opened", Bc), !0
      } finally {
        Hu = !1
      }
    }
    const jsc = {
        wood: ["Maple Log"],
        log: ["Maple Log"],
        logs: ["Maple Log"],
        "wood log": ["Maple Log"],
        "wood block": ["Maple Log"],
        "wooden block": ["Maple Log"],
        "tree log": ["Maple Log"],
        "oak wood": ["Maple Log"],
        planks: ["Maple Wood Planks"],
        plank: ["Maple Wood Planks"],
        "wood planks": ["Maple Wood Planks"],
        "wood plank": ["Maple Wood Planks"],
        "wooden planks": ["Maple Wood Planks"],
        "oak planks": ["Maple Wood Planks"],
        leaves: ["Maple Leaves"],
        door: ["Maple Door"],
        fence: ["Maple Fence"],
        ladder: ["Maple Ladder"],
        cobblestone: ["Messy Stone"],
        cobble: ["Messy Stone"],
        tnt: ["Block Destroyer TNT"],
        wool: ["White Wool"],
        lamp: ["Lantern"],
        "crafting table": ["Workbench"],
        "cooked beef": ["Steak"],
        potato: ["Baked Potato"],
        "health potion": ["Instant Healing Potion"],
        "healing potion": ["Instant Healing Potion"],
        "slime block": [],
        slime: [],
        rose: ["Poppy", "Red Tulip"],
        flower: ["Daisy", "Dandelion", "Poppy", "Red Tulip"],
        iron: ["Iron Bar"],
        gold: ["Gold Bar"],
        copper: ["Copper Bar"],
        lapis: ["Lapis Lazuli Ore", "Block of Lapis Lazuli"],
        "lapis lazuli": ["Lapis Lazuli Ore", "Block of Lapis Lazuli"],
        "iron armor": ["Iron Helmet", "Iron Chestplate"],
        "iron armour": ["Iron Helmet", "Iron Chestplate"],
        "gold armor": ["Gold Helmet", "Gold Chestplate"],
        "gold armour": ["Gold Helmet", "Gold Chestplate"],
        "diamond armor": ["Diamond Helmet", "Diamond Chestplate"],
        "diamond armour": ["Diamond Helmet", "Diamond Chestplate"],
        bed: ["White Bed"],
        sword: ["Wood Sword"],
        bow: ["Wood Bow"],
        shovel: ["Wood Spade"],
        spade: ["Wood Spade"],
        key: ["Wooden Key"],
        trophy: ["Gold Trophy"],
        "fishing rod": ["Rusty Rod"],
        rod: ["Rusty Rod"],
        beef: ["Raw Beef"],
        pork: ["Raw Porkchop"],
        porkchop: ["Raw Porkchop"],
        "pork chop": ["Raw Porkchop"],
        "cooked chicken": ["Chicken"],
        potion: ["Instant Healing Potion"],
        seeds: ["Wheat Seeds"],
        seed: ["Wheat Seeds"],
        mushroom: ["Red Mushroom", "Brown Mushroom"],
        "bounce pad": ["Jump Pad"],
        "zombie spawn egg": ["Draugr Zombie Spawn Orb"],
        "zombie spawn orb": ["Draugr Zombie Spawn Orb"],
        spawner: ["Empty Spawner Block"],
        "mob spawner": ["Empty Spawner Block"],
        "glass pane": ["Glass"],
        gun: ["One Shot Pistol"],
        pistol: ["One Shot Pistol"],
        rifle: ["One Shot Pistol"],
        glider: ["Wood Hang Glider"],
        "hang glider": ["Wood Hang Glider"],
        bandage: ["Medkit"],
        terracotta: ["Baked Clay"]
      },
      Ru = {
        wooden: "wood",
        golden: "gold",
        oak: "maple",
        shovel: "spade",
        ingot: "bar",
        ingots: "bar",
        nugget: "bar",
        leather: "wood",
        egg: "orb"
      },
      is = {
        teleport: ["setPosition"],
        tp: ["setPosition"],
        heal: ["setHealth", "getHealth"],
        health: ["setHealth", "getHealth", "applyHealthChange"],
        die: ["killLifeform", "onPlayerKilledOtherPlayer", "onRespawnRequest"],
        dies: ["killLifeform", "onPlayerKilledOtherPlayer", "onRespawnRequest"],
        died: ["onRespawnRequest", "onPlayerKilledOtherPlayer"],
        kill: ["killLifeform", "onPlayerKilledOtherPlayer"],
        kills: ["onPlayerKilledOtherPlayer"],
        respawn: ["onRespawnRequest", "setPosition"],
        give: ["giveItem"],
        name: ["getEntityName", "getPlayerId"],
        names: ["getEntityName"],
        username: ["getEntityName"],
        join: ["onPlayerJoin"],
        joins: ["onPlayerJoin"],
        OV: ["onPlayerLeave"],
        command: ["playerCommand"],
        chat: ["onPlayerChat", "sendMessage", "broadcastMessage"],
        says: ["onPlayerChat"],
        say: ["sendMessage", "broadcastMessage"],
        tell: ["sendMessage", "broadcastMessage"],
        everyone: ["broadcastMessage", "getPlayerIds"],
        screen: ["RightInfoText", "sendFlyingMiddleMessage", "middleTextUpper"],
        side: ["RightInfoText"],
        right: ["RightInfoText"],
        middle: ["sendFlyingMiddleMessage", "middleTextUpper"],
        countdown: ["sendFlyingMiddleMessage", "cn"],
        timer: ["cn", "RightInfoText"],
        seconds: ["cn"],
        speed: ["speedMultiplier", "runningSpeed", "walkingSpeed"],
        fast: ["speedMultiplier", "runningSpeed"],
        run: ["speedMultiplier", "runningSpeed"],
        jump: ["jumpAmount", "airJumpCount", "onPlayerJump"],
        fly: ["creative", "flySpeedMultiplier"],
        flying: ["creative", "flySpeedMultiplier"],
        stand: ["onBlockStand", "getBlockTypesPlayerStandingOn"],
        stands: ["onBlockStand", "getBlockTypesPlayerStandingOn"],
        touches: ["onBlockStand", "onEntityCollision"],
        break: ["onPlayerAttemptChangeBlock", "onPlayerChangeBlock"],
        breaks: ["onPlayerAttemptChangeBlock", "onPlayerChangeBlock"],
        breaking: ["onPlayerAttemptChangeBlock", "onPlayerChangeBlock", "canChange"],
        place: ["onPlayerAttemptChangeBlock", "UBc"],
        build: ["onPlayerAttemptChangeBlock", "UBc"],
        block: ["UBc", "sZ"],
        leaderboard: ["lobbyLeaderboardInfo", "setTargetedPlayerSettingForEveryone"],
        score: ["lobbyLeaderboardInfo", "RightInfoText"],
        coins: ["RightInfoText", "getMoonstoneChestItemSlot"],
        save: ["setPlayerDbValue", "getPlayerDbValue", "doPeriodicSave"],
        saved: ["setPlayerDbValue", "getPlayerDbValue"],
        zombie: ["attemptSpawnMob"],
        mob: ["attemptSpawnMob"],
        spawn: ["attemptSpawnMob", "setPosition", "onRespawnRequest"],
        team: ["setTargetedPlayerSettingForEveryone", "getPlayerIds"],
        teams: ["setTargetedPlayerSettingForEveryone"],
        random: ["setPosition"],
        sound: ["broadcastSound", "playSound"],
        colour: ["sendMessage"],
        color: ["sendMessage"],
        green: ["sendMessage"],
        red: ["sendMessage"]
      },
      Ku = new Set("a an and are as at be but by can do does for from get got give go has have he her his how i if in into is it its make me my no not of on or our please so that the their them then there they this to u up us was we what when where which who will with you your want wanna like just also add let lets makes".split(" "));

    function xs(cB) {
      return cB.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z0-9]+/).filter((cB => cB.length > 1))
    }

    function du(cB) {
      return cB.length > 4 && cB.endsWith("ies") ? `${cB.slice(0,-3)}y` : cB.length > 3 && cB.endsWith("s") && !cB.endsWith("ss") ? cB.slice(0, -1) : cB
    }

    function Au(cB) {
      return new Set(xs(cB).map((cB => du(cB))))
    }
    const Gu = /^(?:async\s+)?function\s+([A-Za-z_$][\w$]*)\s*\(|^([A-Za-z_$][\w$]*)\s*=\s*(?:async\s+)?(?:function\b|\(|[A-Za-z_$][\w$]*\s*=>)/gm;

    function cM(cB) {
      return cB.split("\n").map((cB => cB.replace(/\/\/.*$/, "").replace(/(["'`])(?:\\.|(?!\1).)*\1/g, '""'))).join("\n").replace(/\/\*[^]*?\*\//g, (cB => cB.replace(/[^\n]/g, ""))).split("\n")
    }

    function Bs(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const nc = [],
        Vc = new Set,
        Ic = cM(Bc ? cB : (0, qn.v)(cB, /require(?=\s*\(\s*["'`](?:\.\.?\/|@plugins\/))/g, qn.l, (() => "projectRequire"))),
        rB = new Set([...Ic.join("\n").matchAll(/\b(?:function\s+|(?:const|let|var)\s+)([\w$]+)/g)].map((cB => cB[1])));
      return Ic.forEach(((cB, Bc) => {
        for (const Ic of (0, qn.e)(cB, /(global|window|document|process|require)\b\s*[.([]/g, qn.l)) Vc.has(Ic[1]) || rB.has(Ic[1]) || (Vc.add(Ic[1]), nc.push(`Line ${Bc+1} uses "${Ic[1]}", which World Code doesn't have, so it throws there. Callbacks need no export: function onPlayerJoin(playerId) {} is enough.`))
      })), nc
    }

    function ns(cB) {
      const Bc = cB.split("\n"),
        nc = [];
      return Bc.forEach(((cB, Vc) => {
        var Ic, rB, uc, sc, Mc;
        const Pc = cB.indexOf("api.setCurrency(");
        if (-1 === Pc) return;
        const qB = Bc.slice(Vc, Vc + 3).join(" ").slice(Pc),
          Oc = qB.slice(0, qB.indexOf("}") + 1 || void 0),
          Tc = null === (Ic = /amount\s*:\s*(\d+)/.exec(Oc)) || void 0 === Ic ? void 0 : Ic[1];
        if (!/persistent\s*:\s*true/.test(Oc) || void 0 === Tc) return;
        const fc = [null !== (rB = Bc[Vc - 2]) && void 0 !== rB ? rB : "", null !== (uc = Bc[Vc - 1]) && void 0 !== uc ? uc : "", cB.slice(0, Pc)].join(" ");
        if (/\bif\s*\(|\belse\b|\?\s*$|&&\s*$/.test(fc)) return;
        const mB = null !== (sc = null === (Mc = /api\.setCurrency\(\s*[^,]+,\s*["']([^"']+)["']/.exec(Oc)) || void 0 === Mc ? void 0 : Mc[1]) && void 0 !== sc ? sc : "coins";
        nc.push(`Line ${Vc+1} sets the saved "${mB}" back to ${Tc} each time it runs, so a player who rejoins loses what they had. Set it only when api.getCurrencyAmount(playerId, "${mB}") is null.`)
      })), nc
    }

    function Vs(cB) {
      var Bc, nc;
      const Vc = null !== (Bc = null === (nc = cB.split("### Parameters:")[1]) || void 0 === nc ? void 0 : nc.split("###")[0]) && void 0 !== Bc ? Bc : "",
        Ic = [];
      for (const rB of Vc.split("\n")) {
        const cB = /^\|\s*([A-Za-z_$][\w$]*)\s*\|(?:\s*`([^`]*)`)?/.exec(rB);
        cB && "Parameter" !== cB[1] && Ic.push({
          name: cB[1],
          type: cB[2]
        })
      }
      return Ic
    }

    function Is(cB) {
      return Vs(cB).map((cB => cB.name))
    }

    function rM(cB) {
      const Bc = [];
      let nc = 0,
        Vc = "",
        Ic = 0;
      for (let uc = 0; uc < cB.length; uc++) {
        const rB = cB[uc];
        Vc ? "\\" === rB ? uc++ : rB === Vc && (Vc = "") : '"' === rB || "'" === rB || "`" === rB ? Vc = rB : "[" === rB || "{" === rB ? nc++ : "]" === rB || "}" === rB ? nc-- : "," === rB && 0 === nc && (Bc.push(cB.slice(Ic, uc).trim()), Ic = uc + 1)
      }
      const rB = cB.slice(Ic).trim();
      return ("" !== rB || Bc.length > 0) && Bc.push(rB), Bc
    }

    function us(cB, Bc, nc) {
      let Vc;
      const Ic = function(cB) {
        const Bc = cB.split("\n").slice(1).map((cB => cB.trim())).find((cB => "" !== cB && !cB.startsWith("#") && !cB.startsWith("|") && !cB.startsWith("**") && !cB.startsWith("```")));
        if (!Bc) return "";
        const nc = Bc.search(/\.\s/),
          Vc = -1 === nc ? Bc : Bc.slice(0, nc + 1);
        return Vc.length > 110 ? `${Vc.slice(0,107)}...` : Vc
      }(nc);
      return Vc = "api" === cB ? `api.${Bc}(${Is(nc).join(", ")})${Ic?` \u2014 ${Ic}`:""}` : "callback" === cB ? `${Bc}(${Is(nc).join(", ")})${Ic?` \u2014 ${Ic}`:""}` : "clientOption" === cB ? `${Bc}: ${function(cB){var Bc,nc;return null!==(Bc=null===(nc=/\*\*Type:\*\*\s*`([^`]+)`/.exec(cB))||void 0===nc?void 0:nc[1])&&void 0!==Bc?Bc:""}(nc)}${Ic?` \u2014 ${Ic}`:""}`:Bc,{kind:cB,name:Bc,text:nc,line:Vc,nameWords:Au(Bc),textWords:Au(nc)}}function ss(cB){return cB.toLowerCase().split(/[^a-z0-9]+/).filter((cB=>""!==cB&&"of"!==cB&&"the"!==cB)).sort().join(" ")}const Ms=new Set(["block","item"]);function Ps(cB){let{names:Bc,isSure:nc}=cB;return 0===Bc.length?"":1!==Bc.length||nc?`
      Did you mean $ {
        Bc.map((cB => `"${cB}"`)).join(" or ")
      } ? `:`
      The closest name is "${Bc[0]}", which may be something
      else.
      `}function qM(cB){return cB.split("\n").slice(1).map((cB=>cB.replace(/\s*\[[A-Z]+(?:,[A-Z]+)*\]\s*$/,"").trim())).filter((cB=>""!==cB&&!cB.startsWith("#")))}class Os{constructor(cB){this.sections=void 0,this.mobTypes=void 0,this.byName=new Map,this.itemAndBlockNames=void 0,this.blockNames=void 0,this.namesByLowerCase=void 0,this.wordCounts=new Map,this.realName=(cB,Bc)=>{if("mob"===cB){var nc;const cB=Bc.trim().toLowerCase();return null!==(nc=this.mobTypes.find((Bc=>Bc.toLowerCase()===cB)))&&void 0!==nc?nc:null}const Vc=this.suggestNames(Bc),Ic=Vc.isSure?Vc.names[0]:void 0;return void 0===Ic||"item"!==cB&&!this.blockNames.has(Ic)?null:Ic};const Bc=[],nc=(cB,nc)=>{for(const{name:Vc,text:Ic}of function(cB){const Bc=[],nc=cB.split(/^## /m).slice(1);for(const Vc of nc){const cB=Vc.indexOf("\n"),nc=(-1===cB?Vc:Vc.slice(0,cB)).trim(),Ic=`
      # # $ {
        Vc
      }
      `.replace(/\n\s*\n(\s*\n)+/g,"\n\n").trim();Bc.push({name:nc,text:Ic})}return Bc}(nc))Bc.push(us(cB,Vc,Ic))};nc("api",cB.apiReference),nc("callback",cB.callbacks),nc("clientOption",cB.clientOptions),nc("snippet",cB.snippets),nc("howTo",cB.howTo);const Vc=function(){const cB=Hn.map((cB=>`
      # # $ {
        cB.name
      }\
      nReady - made
      function($ {
        cB.category
      }) : call it as it is, without api.and without writing it;
      its code is added to the file by itself.\n$ {
        cB.about
      }\
      n\ nUsage: \`${cB.signature}\`\n\n\`\`\`js\n${cB.example}\n\`\`\``)),
  Bc = dn.map((cB => `## ${cB.name}\nPrefab (${cB.kind}, ${cB.category}): put in with use_prefab. ${TV(cB,!1)}`));
  return {
    helpers: `# Ready-made functions\n\n${cB.join("\n\n")}\n`,
    prefabs: `# Prefabs\n\n${Bc.join("\n\n")}\n`
  }
}();
nc("helper", Vc.helpers), nc("prefab", Vc.prefabs), this.sections = Bc;
for (const rB of Bc) {
  this.byName.has(rB.name) || this.byName.set(rB.name, rB);
  for (const cB of rB.textWords) {
    var Ic;
    this.wordCounts.set(cB, (null !== (Ic = this.wordCounts.get(cB)) && void 0 !== Ic ? Ic : 0) + 1)
  }
}
this.itemAndBlockNames = [...new Set([...qM(cB.itemNames), ...qM(cB.blockNames)])], this.blockNames = new Set(qM(cB.blockNames)), this.namesByLowerCase = new Map(this.itemAndBlockNames.map((cB => [cB.toLowerCase(), cB]))), this.mobTypes = function(cB) {
  var Bc, nc;
  const Vc = null !== (Bc = null === (nc = cB.split("## Mob Variations")[1]) || void 0 === nc ? void 0 : nc.split("```")[1]) && void 0 !== Bc ? Bc : "",
    Ic = [];
  for (const rB of Vc.split("\n")) {
    const cB = /^([A-Z][\w ]*?):\s*"/.exec(rB.trim());
    cB && Ic.push(cB[1])
  }
  return Ic
}(cB.mobSettings)
}
index(cB) {
  return this.sections.filter((Bc => Bc.kind === cB)).map((cB => cB.line)).join("\n")
}
callbackNames() {
  return this.sections.filter((cB => "callback" === cB.kind)).map((cB => cB.name))
}
get(cB) {
  return this.byName.get(cB)
}
unprefixedApiCalls(cB) {
  const Bc = cM(cB),
    nc = Bc.join("\n"),
    Vc = new Set([...nc.matchAll(/\b(?:function\s+|(?:const|let|var)\s+)([\w$]+)|^([\w$]+)\s*=/gm)].map((cB => {
      var Bc;
      return null !== (Bc = cB[1]) && void 0 !== Bc ? Bc : cB[2]
    }))),
    Ic = [...nc.matchAll(/\b(?:const|let|var)\s*([{[][^=]*?[}\]])\s*=/g), ...nc.matchAll(/\bimport\s+([\w$\s{},*]+?)\s+from\b/g)];
  for (const uc of Ic)
    for (const cB of uc[1].matchAll(/([\w$]+)\s*(?=[,}\]=]|$)/g)) Vc.add(cB[1]);
  const rB = new Map;
  return Bc.forEach(((cB, Bc) => {
    for (const Ic of (0, qn.e)(cB, /([\w$]+)\s*\(/g, qn.l)) {
      var nc;
      const uc = Ic[1],
        sc = /^\s*(?:async\s+)?$/.test(cB.slice(0, Ic.index)) && /^[\w$]+\s*\([^()]*\)\s*\{/.test(cB.slice(Ic.index));
      rB.has(uc) || Vc.has(uc) || sc || "api" !== (null === (nc = this.byName.get(uc)) || void 0 === nc ? void 0 : nc.kind) || rB.set(uc, `Line ${Bc+1} calls ${uc} without "api.", so it throws there. Did you mean api.${uc}?`)
    }
  })), [...rB.values()]
}
unknownApiMethods(cB) {
  return [...new Set([...cB.matchAll(/\bapi\.([A-Za-z_$][\w$]*)/g)].map((cB => cB[1])))].filter((cB => {
    var Bc;
    return "api" !== (null === (Bc = this.byName.get(cB)) || void 0 === Bc ? void 0 : Bc.kind)
  })).map((cB => {
    const Bc = this.find(cB.replace(/([a-z])([A-Z])/g, "$1 $2"), "", 20).filter((cB => "api" === cB.kind)).slice(0, 2).map((cB => `api.${cB.name}`));
    return `api.${cB} doesn't exist.${Bc.length?` Did you mean ${Bc.join(" or ")}?`:""}`
  }))
}
unknownItemNames(cB) {
  const Bc = new Set([...this.itemAndBlockNames, "Air"]),
    nc = new Set;
  for (const Vc of cB.matchAll(/\bapi\.([A-Za-z_$][\w$]*)\(([^()]*)\)/g)) {
    const Ic = this.byName.get(Vc[1]);
    if ("api" !== (null === Ic || void 0 === Ic ? void 0 : Ic.kind)) continue;
    const rB = Vs(Ic.text).map((cB => {
        let {
          type: Bc
        } = cB;
        return void 0 !== Bc && /^(ItemName|BlockName)\b/.test(Bc)
      })),
      uc = rM(Vc[2]);
    uc.forEach(((Vc, Ic) => {
      var sc, Mc;
      const Pc = rB[Ic] || Ic === uc.length - 1 && rB[rB.length - 1],
        qB = null === (sc = /^CONFIG\.([\w$]+)$/.exec(Vc)) || void 0 === sc ? void 0 : sc[1],
        Oc = qB ? null === (Mc = new RegExp(`(?:^|[{,])\\s*${qB.replaceAll("$","\\$")}\\s*:\\s*("[^"\\n]*"|'[^'\\n]*')`, "m").exec(cB)) || void 0 === Mc ? void 0 : Mc[1] : void 0,
        Tc = /^(["'`])([^"'`]+)\1$/.exec(null !== Oc && void 0 !== Oc ? Oc : Vc),
        fc = "`" === (null === Tc || void 0 === Tc ? void 0 : Tc[1]) && Tc[2].includes("${");
      Pc && Tc && !fc && !Bc.has(Tc[2]) && nc.add(Tc[2])
    }))
  }
  return [...nc].map((cB => `"${cB}" isn't an item or block name.${Ps(this.suggestNames(cB))}`))
}
reorderedComparedNames(cB) {
  const Bc = new Set([...this.itemAndBlockNames, "Air", "Unloaded"]),
    nc = new Map(this.itemAndBlockNames.map((cB => [ss(cB), cB]))),
    Vc = new Map,
    Ic = [/[!=]==?\s*(["'])([^"'\n]{3,40})\1/g, /(["'])([^"'\n]{3,40})\1\s*[!=]==?/g, /\bcase\s+(["'])([^"'\n]{3,40})\1\s*:/g, /\.includes\(\s*(["'])([^"'\n]{3,40})\1\s*\)/g];
  for (const sc of Ic)
    for (const Ic of cB.matchAll(sc)) {
      const cB = Ic[2],
        rB = Bc.has(cB) || !/\s/.test(cB.trim()) ? void 0 : nc.get(ss(cB));
      rB && Vc.set(cB, rB)
    }
  const rB = [...Vc].map((cB => {
      let [Bc, nc] = cB;
      return `"${Bc}" isn't a block or item name, so comparing with it is never true. Did you mean "${nc}"?`
    })),
    uc = new Map;
  for (const sc of cB.matchAll(/\b\w*block\w*\s*[!=]==?\s*(["'])([^"'\n]+)\1/gi)) {
    const Bc = sc[2],
      nc = this.blockNames.has(Bc) || !this.itemAndBlockNames.includes(Bc) ? void 0 : [`Block of ${Bc}`, `${Bc} Block`].find((cB => this.blockNames.has(cB)));
    !nc || cB.includes(`"${nc}"`) || cB.includes(`'${nc}'`) || uc.set(Bc, nc)
  }
  return [...rB, ...[...uc].map((cB => {
    let [Bc, nc] = cB;
    return `"${Bc}" is an item, not a block, so no block is ever called that. Did you mean "${nc}"?`
  }))]
}
unknownComparedBlockNames(cB) {
  const Bc = new Set([...this.itemAndBlockNames, "Air", "Unloaded"]),
    nc = new Set(this.itemAndBlockNames.map((cB => ss(cB)))),
    Vc = new Set;
  for (const Ic of cB.matchAll(/\b\w*block(?:name|type)?\s*[!=]==?\s*(["'])([^"'\n]+)\1/gi)) Vc.add(Ic[2]);
  for (const Ic of cB.matchAll(/(["'])([^"'\n]+)\1\s*[!=]==?\s*\w*block(?:name|type)?\b/gi)) Vc.add(Ic[2]);
  return [...Vc].filter((cB => !Bc.has(cB) && !(/\s/.test(cB.trim()) && nc.has(ss(cB))))).map((cB => {
    const Bc = this.itemAndBlockNames.filter((Bc => ss(Bc) === ss(cB))),
      nc = this.itemAndBlockNames.filter((Bc => xs(Bc).includes(cB.toLowerCase()))),
      Vc = this.suggestNames(cB),
      Ic = Bc.length > 0 ? {
        names: Bc,
        isSure: 1 === Bc.length,
        isDecided: !0
      } : Vc.names.length > 0 || Vc.isDecided ? Vc : {
        names: nc.length <= 2 ? nc : [],
        isSure: 1 === nc.length,
        isDecided: !1
      };
    return `"${cB}" isn't a block or item name, so comparing a block with it is never true.${Ps(Ic)}`
  }))
}
madeUpStopValues(cB) {
  const Bc = new Set;
  for (const {
      name: nc,
      body: Vc
    }
    of
    function(cB) {
      const Bc = [...cB.matchAll(Gu)];
      return Bc.map(((nc, Vc) => {
        var Ic, rB, uc;
        return {
          name: null !== (Ic = nc[1]) && void 0 !== Ic ? Ic : nc[2],
          body: cB.slice(nc.index, null !== (rB = null === (uc = Bc[Vc + 1]) || void 0 === uc ? void 0 : uc.index) && void 0 !== rB ? rB : cB.length)
        }
      }))
    }(cB)) {
    const cB = this.byName.get(nc);
    if ("callback" === (null === cB || void 0 === cB ? void 0 : cB.kind))
      for (const Ic of Vc.matchAll(/\breturn\s+["']((?:[Pp]revent|[Cc]ancel|[Ss]top|[Bb]lock|[Dd]eny)\w*)["']/g)) {
        const Vc = Ic[1];
        if (cB.text.includes(`"${Vc}"`)) continue;
        const rB = [...new Set([...cB.text.matchAll(/Return "(prevent[A-Za-z]*)"/g)].map((cB => cB[1])))],
          uc = rB.length > 0 ? `Did you mean ${rB.map((cB=>`"${cB}"`)).join(" or ")}?` : /Return false/i.test(cB.text) ? `To stop it, return false instead of "${Vc}".` : "Check Show Docs for what it can return.";
        Bc.add(`${nc} can't use "${Vc}" to stop anything. ${uc}`)
      }
  }
  return [...Bc]
}
codeWarnings(cB) {
  let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return [...this.unknownApiMethods(cB), ...this.unprefixedApiCalls(cB), ...this.unknownItemNames(cB), ...this.reorderedComparedNames(cB), ...this.unknownComparedBlockNames(cB), ...this.madeUpStopValues(cB), ...ns(cB), ...Bs(cB, Bc)]
}
suggestNames(cB) {
  var Bc;
  const nc = cB.trim().toLowerCase().replace(/\s+/g, " "),
    Vc = Object.hasOwn(jsc, nc) ? jsc[nc] : void 0;
  if (Vc) {
    const cB = Vc.filter((cB => this.namesByLowerCase.has(cB.toLowerCase())));
    return {
      names: cB,
      isSure: 1 === cB.length,
      isDecided: !0
    }
  }
  const Ic = nc.split(" ").map((cB => Object.hasOwn(Ru, cB) ? Ru[cB] : cB)).join(" "),
    rB = null !== (Bc = this.namesByLowerCase.get(nc)) && void 0 !== Bc ? Bc : this.namesByLowerCase.get(Ic);
  if (rB) return {
    names: [rB],
    isSure: !0,
    isDecided: !0
  };
  const uc = this.closestItemAndBlockNames(Ic),
    sc = cB => xs(cB).filter((cB => !Ku.has(cB) && !Ms.has(cB))).map(du),
    Mc = 1 === uc.length ? sc(uc[0]) : [];
  return {
    names: uc,
    isSure: 1 === uc.length && sc(Ic).every((cB => Mc.includes(cB))),
    isDecided: !1
  }
}
closestItemAndBlockNames(cB) {
  const Bc = new Set(xs(cB).filter((cB => !Ku.has(cB))).map(du)),
    nc = this.itemAndBlockNames.map((cB => {
      const nc = xs(cB).filter((cB => !Ku.has(cB))).map(du),
        Vc = nc.filter((cB => Bc.has(cB))).length;
      return {
        candidate: cB,
        score: 2 * Vc - (nc.length - Vc)
      }
    })).filter((cB => cB.score > 0)),
    Vc = Math.max(...nc.map((cB => cB.score)));
  return nc.filter((cB => cB.score === Vc)).slice(0, 2).map((cB => cB.candidate))
}
find(cB, Bc, nc) {
  const Vc = new Map,
    Ic = (cB, Bc) => {
      var nc;
      cB && Vc.set(cB, (null !== (nc = Vc.get(cB)) && void 0 !== nc ? nc : 0) + Bc)
    },
    rB = xs(cB),
    uc = rB.filter((cB => !Ku.has(cB)));
  for (const Oc of rB)
    for (const cB of Object.hasOwn(is, Oc) ? is[Oc] : []) Ic(this.byName.get(cB), 6);
  for (const Oc of `${cB}\n${Bc}`.matchAll(/\bapi\.(\w+)|\b(on[A-Z]\w+|tick|playerCommand)\b|"(\w+)"/g)) {
    var sc, Mc;
    Ic(this.byName.get(null !== (sc = null !== (Mc = Oc[1]) && void 0 !== Mc ? Mc : Oc[2]) && void 0 !== sc ? sc : Oc[3]), Oc[1] || Oc[2] ? 4 : 2)
  }
  for (const Oc of (0, qn.e)(Bc, /([A-Za-z_$][\w$]*)\s*\(/g, qn.l)) {
    const cB = this.byName.get(Oc[1]);
    "helper" === (null === cB || void 0 === cB ? void 0 : cB.kind) && Ic(cB, 3)
  }
  const Pc = new Set(uc.map(du));
  for (const Oc of this.sections) {
    let cB = 0;
    for (const Bc of Pc) {
      var qB;
      const nc = 1 / Math.log2(2 + (null !== (qB = this.wordCounts.get(Bc)) && void 0 !== qB ? qB : 0));
      Oc.nameWords.has(Bc) ? cB += 3 * nc : Oc.textWords.has(Bc) && (cB += nc)
    }
    Ic(Oc, cB)
  }
  return [...Vc.entries()].filter((cB => {
    let [Bc, nc] = cB;
    return nc > .5 && "prefab" !== Bc.kind
  })).sort(((cB, Bc) => Bc[1] - cB[1])).slice(0, nc).map((cB => {
    let [Bc] = cB;
    return Bc
  }))
}
section(cB) {
  var Bc, nc;
  const Vc = cB.trim().replace(/^api\./, "").replace(/\(.*$/, ""),
    Ic = Vc.toLowerCase();
  return null !== (Bc = null !== (nc = this.byName.get(Vc)) && void 0 !== nc ? nc : this.sections.find((cB => cB.name.toLowerCase() === Ic))) && void 0 !== Bc ? Bc : null
}
searchNames(cB, Bc) {
  const nc = xs(cB).filter((cB => !Ku.has(cB))).map(du);
  if (0 === nc.length) return [];
  const Vc = [...this.itemAndBlockNames, ...this.mobTypes].flatMap((cB => {
      const Bc = new Set(xs(cB).map(du)),
        Vc = nc.filter((cB => Bc.has(cB))).length;
      return 0 === Vc ? [] : [{
        name: cB,
        found: Vc,
        length: Bc.size
      }]
    })),
    Ic = Math.max(0, ...Vc.map((cB => cB.found)));
  return [...new Set(Vc.filter((cB => cB.found === Ic)).sort(((cB, Bc) => cB.length - Bc.length || cB.name.localeCompare(Bc.name))).map((cB => cB.name)))].slice(0, Bc)
}
matchItemAndBlockNames(cB, Bc) {
  const nc = new Set(xs(cB).map(du)),
    Vc = [];
  for (const Ic of this.itemAndBlockNames) {
    const cB = xs(Ic).filter((cB => !Ku.has(cB))).map(du);
    cB.length > 0 && cB.every((cB => nc.has(cB))) && Vc.push({
      name: Ic,
      length: cB.length
    })
  }
  return Vc.sort(((cB, Bc) => Bc.length - cB.length)).slice(0, Bc).map((cB => cB.name))
}
}

function Ts(cB, Bc) {
  var nc;
  const Vc = fs(cB, !0),
    Ic = null === (nc = /^([\w$.]+) (?:needs|couldn't|didn't|isn't a function)/.exec(Vc)) || void 0 === nc ? void 0 : nc[1],
    rB = Ic && void 0 !== Bc ? function(cB, Bc) {
      const nc = Bc.replace(/[$.]/g, "\\$&"),
        Vc = new RegExp(`(^|[^\\w$.])${nc}\\s*\\(`),
        Ic = cB.split("\n").flatMap(((cB, Bc) => Vc.test(cB) ? [Bc + 1] : []));
      return 1 === Ic.length ? Ic[0] : void 0
    }(Bc, Ic) : void 0;
  return rB ? {
    text: fs(cB, !1),
    line: rB
  } : {
    text: Vc
  }
}

function fs(cB, Bc) {
  const nc = cB.replace(/^Logging too many errors\n/, "").replace(/^(First|Last) error of \d+ errors:\n/, ""),
    [Vc, ...Ic] = nc.split("\n"),
    {
      when: rB,
      rest: uc
    } = function(cB) {
      const Bc = /^Error in world code init:\s*/.exec(cB);
      if (Bc) return {
        when: "when your world started",
        rest: cB.slice(Bc[0].length)
      };
      const nc = /^Error in (?:callback )?(\w+):\s*/.exec(cB);
      return nc ? {
        when: `in ${nc[1]}`,
        rest: cB.slice(nc[0].length)
      } : {
        when: "",
        rest: cB
      }
    }(Vc.trim()),
    sc = rB && Bc ? ` ${rB}` : "",
    Mc = /(?:ApiError:\s*)?(\w+) didn't work/.exec(uc);
  if (Mc) {
    var Pc, qB, Oc, Tc, fc;
    const cB = /^Invalid argument #(\d+)(?:\s*\(([^)]*)\))?:?\s*(.*)$/.exec(null !== (Pc = null === (qB = Ic[0]) || void 0 === qB ? void 0 : qB.trim()) && void 0 !== Pc ? Pc : ""),
      Bc = null === (Oc = /^Expected(?: type)?:?\s*(.*)$/.exec(null !== (Tc = null === (fc = Ic[1]) || void 0 === fc ? void 0 : fc.trim()) && void 0 !== Tc ? Tc : "")) || void 0 === Oc ? void 0 : Oc[1],
      nc = Bc ? function(cB) {
        const Bc = cB.split(/\s+or\s+/)[0].trim();
        return /^(a|an|the)\s/i.test(Bc) || !/^[a-z]/i.test(Bc) ? Bc : `${/^[aeiou]/i.test(Bc)?"an":"a"} ${Bc}`
      }(Bc) : void 0;
    return nc && null !== cB && void 0 !== cB && cB[3] ? `api.${Mc[1]} needs ${nc}, but it got ${cB[3]}${sc}.` : cB ? `api.${Mc[1]} couldn't use its ${mB=Number(cB[1]),1===mB?"first":2===mB?"second":3===mB?"third":4===mB?"fourth":`#${mB}`} argument${sc}.${nc?` It needs ${nc}.`:""}` : `api.${Mc[1]} didn't work${sc}.`
  }
  var mB;
  const ec = /TypeError:\s*(?:(.+?) is )?not a function/.exec(uc);
  if (ec) return ec[1] ? `${ec[1]} isn't a function${sc}. Check its name is spelt exactly right.` : `Your code called something that isn't a function${sc}. Check each name it calls is spelt exactly right.`;
  const tB = /ReferenceError:\s*'?([^'\s]+)'? is not defined/.exec(uc);
  if (tB) return `${tB[1]} isn't defined${sc}. Check the spelling, or create it before using it.`;
  const Sc = /TypeError:\s*[Cc]annot read propert(?:y|ies) (?:'([^']+)' )?of (undefined|null)(?: \(reading '([^']+)'\))?/.exec(uc);
  if (Sc) {
    var yB;
    const cB = null !== (yB = Sc[1]) && void 0 !== yB ? yB : Sc[3];
    return `Your code tried to read${cB?` .${cB}`:" something"} from ${Sc[2]}${sc}: a value it expected wasn't there.`
  }
  return `Your code hit an error${sc}: ${uc.replace(/^\w*Error:\s*/,"")}`
}
const mM = /^"([^"]+)" isn't an item or block name\..*Did you mean "([^"]+)"\?$/,
  es = /^"([^"]+)" isn't a block or item name, so comparing with it\b.*Did you mean "([^"]+)"\?$/,
  tM = /^"([^"]+)" (?:is an item, not a block|isn't a block or item name, so comparing a block with it)\b.*Did you mean "([^"]+)"\?$/,
  Ss = /^([\w$]+) can't use "([^"]+)" to stop anything\. Did you mean "([^"]+)"\?$/,
  yM = /^Line \d+ calls ([\w$]+) without "api\.", so it throws there\. Did you mean (api\.[\w$]+)\?$/,
  zM = /^Line \d+ uses "([\w$]+)", which is never set, so it throws there\. Did you mean "([\w$]+)"\?$/,
  ps = /^Line \d+ uses "global", which World Code doesn't have\b/,
  hs = /^[ \t]*global\.([\w$]+)[ \t]*=[ \t]*\1[ \t]*;?[ \t]*(?:\/\/.*)?(?:\r?\n|$)/gm,
  aM = /^([ \t]*)global\.([\w$]+)([ \t]*=(?!=))/gm;

function ls(cB) {
  const Bc = yM.exec(cB);
  if (Bc) return {
    from: Bc[1],
    to: Bc[2],
    kind: "call"
  };
  const nc = zM.exec(cB);
  if (nc) return {
    from: nc[1],
    to: nc[2],
    kind: "variable"
  };
  if (ps.test(cB)) return {
    from: "global",
    to: "",
    kind: "export"
  };
  const Vc = Ss.exec(cB);
  if (Vc) return {
    from: Vc[2],
    to: Vc[3],
    callback: Vc[1]
  };
  const Ic = es.exec(cB);
  if (Ic) return {
    from: Ic[1],
    to: Ic[2],
    kind: "compared"
  };
  const rB = tM.exec(cB);
  if (rB) return {
    from: rB[1],
    to: rB[2],
    kind: "comparedBlock"
  };
  const uc = mM.exec(cB);
  return uc ? {
    from: uc[1],
    to: uc[2]
  } : void 0
}

function Ys(cB) {
  const Bc = cB.map(ls);
  return Bc.length > 0 && !Bc.includes(void 0) ? Bc : void 0
}

function Ls(cB, Bc, nc) {
  return cB.replaceAll(`"${Bc}"`, `"${nc}"`).replaceAll(`'${Bc}'`, `'${nc}'`)
}

function gM(cB, Bc) {
  const nc = cB => lc().isIdentifier(cB) ? cB.text === Bc : cB.elements.some((cB => !lc().isOmittedExpression(cB) && nc(cB.name))),
    Vc = cB => void 0 !== cB && lc().isVariableDeclarationList(cB) && cB.declarations.some((cB => nc(cB.name))),
    Ic = cB => {
      const Bc = cB => !lc().isFunctionLike(cB) && !lc().isClassStaticBlockDeclaration(cB) && (!(!lc().isVariableDeclarationList(cB) || 0 !== (cB.flags & lc().NodeFlags.BlockScoped) || !Vc(cB)) || !0 === lc().forEachChild(cB, Bc));
      return void 0 !== cB && !0 === lc().forEachChild(cB, Bc)
    };
  var rB;
  if (lc().isFunctionLike(cB)) return cB.parameters.some((cB => nc(cB.name))) || lc().isFunctionExpression(cB) && (null === (rB = cB.name) || void 0 === rB ? void 0 : rB.text) === Bc || "body" in cB && Ic(cB.body);
  return !(!lc().isSourceFile(cB) || !Ic(cB)) || (lc().isSourceFile(cB) || lc().isBlock(cB) || lc().isCaseClause(cB) || lc().isDefaultClause(cB) ? cB.statements.some((cB => {
    var nc;
    return lc().isVariableStatement(cB) && Vc(cB.declarationList) || (lc().isFunctionDeclaration(cB) || lc().isClassDeclaration(cB)) && (null === (nc = cB.name) || void 0 === nc ? void 0 : nc.text) === Bc || lc().isImportDeclaration(cB) && (cB => {
      var nc;
      const Vc = null === cB || void 0 === cB ? void 0 : cB.namedBindings;
      return (null === cB || void 0 === cB || null === (nc = cB.name) || void 0 === nc ? void 0 : nc.text) === Bc || void 0 !== Vc && (lc().isNamespaceImport(Vc) ? Vc.name.text === Bc : Vc.elements.some((cB => cB.name.text === Bc)))
    })(cB.importClause)
  })) : lc().isForStatement(cB) || lc().isForInStatement(cB) || lc().isForOfStatement(cB) ? Vc(cB.initializer) : lc().isCatchClause(cB) && void 0 !== cB.variableDeclaration && nc(cB.variableDeclaration.name))
}

function Us(cB, Bc) {
  return Bc.reduce(((cB, Bc) => {
    let {
      from: nc,
      to: Vc,
      kind: Ic,
      callback: rB
    } = Bc;
    if ("export" === Ic) return cB.replace(hs, "").replace(aM, "$1$2$3");
    if ("call" === Ic || "variable" === Ic) return function(cB, Bc, nc, Vc) {
      const Ic = lc().createSourceFile("worldCode.js", cB, lc().ScriptTarget.Latest, !0, lc().ScriptKind.JS),
        rB = [],
        uc = (cB, sc) => {
          const Mc = sc || gM(cB, Bc),
            Pc = cB.parent;
          if (lc().isIdentifier(cB) && cB.text === Bc && !Mc && Pc) {
            const uc = lc().isBindingElement(Pc) && Pc.propertyName === cB || (lc().isPropertyAccessExpression(Pc) || lc().isPropertyAssignment(Pc) || lc().isMethodDeclaration(Pc) || lc().isPropertyDeclaration(Pc) || lc().isGetAccessorDeclaration(Pc) || lc().isSetAccessorDeclaration(Pc)) && Pc.name === cB,
              sc = lc().isCallExpression(Pc) && Pc.expression === cB;
            uc || Vc && !sc || rB.push({
              at: cB.getStart(Ic),
              text: lc().isShorthandPropertyAssignment(Pc) ? `${Bc}: ${nc}` : nc
            })
          }
          lc().forEachChild(cB, (cB => {
            uc(cB, Mc)
          }))
        };
      return uc(Ic, !1), rB.reduceRight(((cB, nc) => cB.slice(0, nc.at) + nc.text + cB.slice(nc.at + Bc.length)), cB)
    }(cB, nc, Vc, "call" === Ic);
    if ("compared" === Ic || "comparedBlock" === Ic) {
      const Bc = `(["'])${function(cB){return cB.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(nc)}\\1`;
      return ("comparedBlock" === Ic ? [`\\b\\w*[Bb]lock\\w*\\s*[!=]==?\\s*${Bc}`, `${Bc}\\s*[!=]==?\\s*\\w*[Bb]lock\\w*\\b`] : [`[!=]==?\\s*${Bc}`, `${Bc}\\s*[!=]==?`, `\\bcase\\s+${Bc}\\s*:`, `\\.includes\\(\\s*${Bc}\\s*\\)`]).reduce(((cB, Bc) => cB.replace(new RegExp(Bc, "g"), (cB => Ls(cB, nc, Vc)))), cB)
    }
    if (void 0 !== rB) {
      return kB(cB).filter((cB => cB.name === rB && cB.topLevel)).reduceRight(((cB, Bc) => cB.slice(0, Bc.from) + Ls(cB.slice(Bc.from, Bc.to), nc, Vc) + cB.slice(Bc.to)), cB)
    }
    return Ls(cB, nc, Vc)
  }), cB)
}

function bM(cB) {
  let {
    from: Bc,
    to: nc,
    kind: Vc
  } = cB;
  return "export" === Vc ? 'The "global." lines are gone: World Code finds your callbacks by their names.' : `"${Bc}" is now "${nc}".`
}
var Zs = nc(39423);

function Qs() {
  return (0, uc.jsxs)("svg", {
    className: "WorldCodeAiKeyIcon",
    viewBox: "0 0 16 16",
    "aria-hidden": "true",
    children: [(0, uc.jsx)("circle", {
      cx: "4.5",
      cy: "8",
      r: "3"
    }), (0, uc.jsx)("path", {
      d: "M7.5 8h7.5M12.5 8v3M15 8v2.5"
    })]
  })
}

function Cs(cB) {
  let {
    detail: Bc,
    onOpen: nc
  } = cB;
  return (0, uc.jsxs)("details", {
    className: "WorldCodeAiKeyDetails",
    onToggle: cB => {
      cB.currentTarget.open && (null === nc || void 0 === nc || nc())
    },
    children: [(0, uc.jsx)("summary", {
      children: "Details"
    }), (0, uc.jsx)("p", {
      children: Bc
    })]
  })
}

function vM(cB) {
  let {
    answeredBy: Bc
  } = cB;
  return "free" === Bc ? (0, uc.jsx)("div", {
    className: "WorldCodeAiAnsweredBy",
    children: "Bot.xd (free)"
  }) : (0, uc.jsxs)("div", {
    className: Bc.isSuperBot ? "WorldCodeAiAnsweredBy" : "WorldCodeAiAnsweredBy WorldCodeAiAnsweredBy-key",
    children: [!Bc.isSuperBot && (0, uc.jsx)(Qs, {}), Bc.model]
  })
}

function Ds(cB) {
  let {
    notice: Bc,
    model: nc,
    company: Vc,
    isServer: Ic
  } = cB;
  switch (Bc) {
    case "badKey":
      return Ic ? `${Vc} didn't accept your key: it may be wrong or deleted.` : `${Vc} didn't accept your key: it may be wrong or deleted. Check it on ${Vc}'s website.`;
    case "noCredit":
      return Ic ? `${Vc} stopped your key for now: it has used all it can.` : `${Vc} stopped your key for now: it has used all it can. Check it on ${Vc}'s website.`;
    case "busy":
      return `Too many requests to ${nc} right now. Wait a minute and try again.`;
    case "noModel":
      return `${Vc} can't find ${nc}. Pick another model, or press Check for new models in AI settings.`;
    case "timeout":
      return `${nc} took too long to answer.`;
    case "unreachable":
      return Ic ? `Couldn't reach ${Vc}. Check the server is running. Your server must allow web pages to use it. In LM Studio turn on CORS; for Ollama see its help.` : `Couldn't reach ${Vc}. Check your internet and your key.`;
    case "blocked":
      return `${Vc} doesn't work from where you are.`;
    case "unchecked":
      return "Bloxd's safety check didn't answer, so your key wasn't used.";
    default:
      return `${nc} can't be used right now. Try again in a minute.`
  }
}

function Ns(cB) {
  let {
    notice: Bc,
    model: nc,
    company: Vc
  } = cB;
  switch (Bc) {
    case "badKey":
      return `Not answered: ${Vc} didn't accept your key.`;
    case "noModel":
      return `Not answered: ${Vc} couldn't find ${nc}.`;
    case "noCredit":
      return `Not answered: ${Vc} stopped your key for now.`;
    case "busy":
      return `Not answered: too many requests to ${nc}.`;
    case "timeout":
      return `Not answered: ${nc} took too long.`;
    case "unreachable":
      return `Not answered: couldn't reach ${Vc}.`;
    case "blocked":
      return `Not answered: ${Vc} doesn't work from where you are.`;
    case "unchecked":
      return "Not answered: the safety check didn't answer.";
    default:
      return `Not answered: ${nc} couldn't be used.`
  }
}

function Es(cB) {
  return "busy" === cB || "timeout" === cB || "failed" === cB || "unchecked" === cB
}

function os(cB) {
  let {
    notice: Bc,
    onRetry: nc,
    onUseFree: Vc,
    onCheckKey: Ic
  } = cB;
  return (0, uc.jsxs)("div", {
    className: "WorldCodeAiKeyNoticeActions",
    children: [(0, uc.jsx)("button", {
      ...Zs.d,
      className: "WorldCodeAiPrimaryButton",
      onClick: Vc,
      children: "Use Bot.xd for this one"
    }), Es(Bc) && (0, uc.jsx)("button", {
      className: "WorldCodeAiSecondaryButton",
      onClick: nc,
      children: "Try again"
    }), "unchecked" !== Bc && (0, uc.jsx)("button", {
      className: "WorldCodeAiSecondaryButton",
      onClick: Ic,
      children: "Open AI settings"
    })]
  })
}

function Ws(cB) {
  let {
    hasCode: Bc,
    canFinish: nc,
    onFinish: Vc
  } = cB;
  return (0, uc.jsxs)("div", {
    className: "WorldCodeAiCutShort",
    children: [(0, uc.jsx)("p", {
      children: Bc ? "The answer was cut short because it was too long." : "The answer was cut short before its code because it was too long."
    }), nc && (0, uc.jsx)("button", {
      className: "WorldCodeAiSecondaryButton",
      onClick: Vc,
      children: "Finish the answer"
    })]
  })
}
const ws = "worldCodeAiAllowEdits";

function kM() {
  try {
    return "false" !== localStorage.getItem(ws)
  } catch {
    return !0
  }
}

function Xs(cB) {
  let {
    allow: Bc,
    onChange: nc
  } = cB;
  return (0, uc.jsxs)("label", {
    className: "WorldCodeAiAllowEdits",
    children: [(0, uc.jsx)("input", {
      type: "checkbox",
      role: "switch",
      checked: Bc,
      onChange: cB => {
        nc(cB.target.checked)
      }
    }), (0, uc.jsx)("span", {
      children: "Allow AI to make edits to my code"
    })]
  })
}
const Hs = {
  keyId: "bloxd",
  modelId: "superbotxd"
};

function Fs(cB, Bc) {
  const nc = Array.from(cB.querySelectorAll(".WorldCodeAiModelGroup")),
    Vc = nc.findIndex((cB => cB.contains(Bc)));
  if (Vc < 0) return !1;
  const Ic = cB.getBoundingClientRect(),
    rB = Bc => cB.scrollTop + Bc.top - Ic.top,
    uc = rB(Bc.getBoundingClientRect()) + Bc.getBoundingClientRect().height,
    sc = cB.scrollHeight - cB.clientHeight,
    Mc = nc.slice(0, Vc + 1).map((cB => rB(cB.getBoundingClientRect()))).filter((cB => uc - cB <= Ic.height + 1));
  if (0 === Mc.length) return !1;
  const Pc = Mc.filter((cB => cB <= sc + 1)),
    qB = Pc.length > 0 ? Math.max(...Pc) : Math.min(...Mc);
  return qB > sc && (cB.style.paddingBottom = (parseFloat(getComputedStyle(cB).paddingBottom) || 0) + qB - sc + "px"), cB.scrollTop = qB, !0
}

function Jsc(cB) {
  let {
    keyName: Bc,
    placeholder: nc,
    onDone: Ic
  } = cB;
  const [rB, sc] = (0, Vc.useState)(Bc);
  return (0, uc.jsxs)("form", {
    className: "WorldCodeAiKeyRename",
    onSubmit: cB => {
      cB.preventDefault(), Ic(rB)
    },
    children: [(0, uc.jsx)("input", {
      className: "WorldCodeAiAddKeyInput",
      "aria-label": "Name for this key",
      value: rB,
      maxLength: 30,
      placeholder: nc,
      autoFocus: !0,
      onChange: cB => {
        sc(cB.target.value)
      },
      onKeyDown: cB => {
        cB.stopPropagation(), "Escape" === cB.key && (cB.preventDefault(), Ic(null))
      }
    }), (0, uc.jsx)("button", {
      type: "submit",
      className: "WorldCodeAiLinkButton",
      children: "Save"
    }), (0, uc.jsx)("button", {
      type: "button",
      className: "WorldCodeAiKeyLearnMore",
      onClick: () => {
        Ic(null)
      },
      children: "Cancel"
    })]
  })
}

function jM(cB) {
  let {
    savedKey: Bc,
    isInUse: nc,
    onRename: Vc,
    onEdit: Ic
  } = cB;
  const rB = rs(Bc),
    sc = Cr(Bc.provider, Bc.baseUrl, !0),
    Mc = function(cB, Bc) {
      var nc, Vc;
      return "" === cB ? "no key needed" : cB.length <= 12 ? "\u2022\u2022\u2022\u2022" : "custom" === Bc ? `key \u2026${cB.slice(-4)}` : `${(null!==(nc=null===(Vc=/^[a-zA-Z]+-/.exec(cB))||void 0===Vc?void 0:Vc[0])&&void 0!==nc?nc:cB.slice(0,4)).slice(0,6)}\u2026${cB.slice(-4)}`
    }(Bc.key, Bc.provider);
  return (0, uc.jsxs)("span", {
    className: "WorldCodeAiModelGroupName",
    title: Bc.baseUrl,
    children: [rB, " ", Bc.name && (0, uc.jsxs)("span", {
      className: "WorldCodeAiModelHint",
      children: ["\xb7 ", sc, " "]
    }), "" === Bc.key ? (0, uc.jsx)("span", {
      className: "WorldCodeAiModelHint",
      children: Mc
    }) : (0, uc.jsx)("code", {
      children: Mc
    }), nc && (0, uc.jsxs)(uc.Fragment, {
      children: [" ", (0, uc.jsx)("span", {
        className: "WorldCodeAiInUseTag",
        children: "In use"
      })]
    }), (Ic || Vc) && (0, uc.jsxs)("span", {
      className: "WorldCodeAiKeyLinks",
      children: [Ic && (0, uc.jsx)("button", {
        className: "WorldCodeAiKeyLearnMore",
        "aria-label": `Edit ${rB} key`,
        onClick: Ic,
        children: "Edit"
      }), Vc && (0, uc.jsx)("button", {
        className: "WorldCodeAiKeyLearnMore",
        "aria-label": `Rename ${rB} key`,
        onClick: Vc,
        children: "Rename"
      })]
    })]
  })
}

function Rs(cB) {
  var Bc, nc, Ic, sc;
  let {
    name: Mc,
    hint: Pc,
    choice: qB,
    selected: Oc,
    radioName: Tc,
    onSelect: fc,
    onChosen: mB,
    disabledWhy: ec
  } = cB;
  const tB = (0, Vc.useRef)(!1),
    Sc = `${Tc}-${null!==(Bc=null===qB||void 0===qB?void 0:qB.keyId)&&void 0!==Bc?Bc:"botxd"}-${null!==(nc=null===qB||void 0===qB?void 0:qB.modelId)&&void 0!==nc?nc:"botxd"}`.replace(/[^\w-]/g, "_"),
    yB = !!ec;
  return (0, uc.jsxs)("label", {
    className: rB()("WorldCodeAiModelRow", Oc && "Selected", yB && "Disabled"),
    "data-key-id": null !== (Ic = null === qB || void 0 === qB ? void 0 : qB.keyId) && void 0 !== Ic ? Ic : "botxd",
    "data-model-id": null !== (sc = null === qB || void 0 === qB ? void 0 : qB.modelId) && void 0 !== sc ? sc : "botxd",
    title: null !== ec && void 0 !== ec ? ec : void 0,
    onPointerDown: () => {
      tB.current = !yB
    },
    children: [(0, uc.jsx)("input", {
      type: "radio",
      name: Tc,
      "aria-label": Mc,
      "aria-describedby": Pc ? Sc : void 0,
      checked: Oc,
      disabled: yB,
      onChange: fc,
      onClick: () => {
        tB.current && (null === mB || void 0 === mB || mB()), tB.current = !1
      },
      onKeyDown: cB => {
        "Enter" === cB.key && (null === mB || void 0 === mB || mB())
      }
    }), (0, uc.jsx)("span", {
      className: "WorldCodeAiModelName",
      children: Mc
    }), Pc && (0, uc.jsx)("span", {
      id: Sc,
      className: "WorldCodeAiModelHint",
      children: Pc
    })]
  })
}

function iM(cB) {
  let {
    labelledBy: Bc,
    onPicked: Ic,
    canRename: rB = !1,
    onEdit: sc,
    YBc: Mc,
    onRefresh: Pc,
    refreshingIds: qB,
    keyNote: Oc
  } = cB;
  const {
    keys: Tc,
    isSelected: fc,
    select: mB,
    renameKey: ec
  } = Tu(), tB = lu();
  (0, Vc.useEffect)((() => {
    as.refresh(), Xu()
  }), []);
  const Sc = bs(tB),
    [yB, zB] = (0, Vc.useState)(null),
    [pc, hc] = (0, Vc.useState)(null),
    [aB, lc] = (0, Vc.useState)({}),
    [Yc] = (0, Vc.useState)((() => function(cB) {
      const Bc = cB.map(((cB, Bc) => {
        var nc;
        return {
          id: cB.id,
          at: null !== (nc = cB.usedAt) && void 0 !== nc ? nc : 0,
          i: Bc
        }
      })).sort(((cB, Bc) => Bc.at - cB.at || Bc.i - cB.i));
      return new Set(Bc.slice(0, 2).map((cB => {
        let {
          id: Bc
        } = cB;
        return Bc
      })))
    }(Tc))),
    [Lc, gB] = (0, Vc.useState)(new Set),
    Uc = cB => cB.models.some((Bc => fc({
      keyId: cB.id,
      modelId: Bc.id
    }))),
    bB = cB => {
      const Bc = cB.closest(".WorldCodeAiModelGroupHeader");
      hc(null), setTimeout((() => {
        var cB;
        null === Bc || void 0 === Bc || null === (cB = Bc.querySelector(".WorldCodeAiModelRemove")) || void 0 === cB || cB.focus()
      }))
    },
    Zc = `${Bc}-model`,
    Qc = (cB, Bc, nc) => {
      var Vc;
      return (0, uc.jsx)(Rs, {
        name: cB,
        hint: Bc,
        choice: nc,
        selected: fc(nc) && !(null === nc && tB.picked && null === Sc),
        radioName: Zc,
        onSelect: () => {
          mB(nc), as.unpick()
        },
        onChosen: Ic
      }, null !== (Vc = null === nc || void 0 === nc ? void 0 : nc.modelId) && void 0 !== Vc ? Vc : "botxd")
    };
  return (0, uc.jsxs)("div", {
    className: "WorldCodeAiModelList",
    role: "radiogroup",
    "aria-labelledby": Bc,
    children: [Qc("Bot.xd (free)", "Bloxd's own AI.", null), (0, uc.jsx)(Rs, {
      name: ts,
      hint: null !== Sc && void 0 !== Sc ? Sc : `Bloxd's better AI. ${tB.status?Cu(tB.status):""}`.trim(),
      choice: Hs,
      selected: tB.picked && null === Sc,
      radioName: Zc,
      onSelect: () => {
        var cB, Bc;
        pu(null !== (cB = null === (Bc = tB.status) || void 0 === Bc ? void 0 : Bc.provider) && void 0 !== cB ? cB : "ovh") && as.Vn()
      },
      onChosen: () => {
        (async function(cB) {
          var Bc;
          if (pu(null !== (Bc = null === cB || void 0 === cB ? void 0 : cB.provider) && void 0 !== Bc ? Bc : "ovh")) return as.Vn(), !0;
          if (Ks) return !1;
          Ks = !0;
          try {
            const [{
              NotificationProvider: cB
            }, {
              WorldCodeAiDeepSeekNotice: Bc
            }] = await Promise.all([Promise.resolve().then((() => nc(1194))), nc.e(332).then((() => nc(59120)))]), Vc = cB.showPromptPopup({
              title: "superBotXd:deepSeekTitle",
              subtitle: (0, uc.jsx)(Bc, {}),
              confirmText: "superBotXd:use",
              cancelText: "general:cancel"
            });
            xM = Vc.tearDownNotification;
            return !0 === await Vc.getResult() && (function() {
              try {
                window.localStorage.setItem(zs, "1")
              } catch {}
            }(), as.Vn(), !0)
          } finally {
            Ks = !1, xM = null
          }
        })(tB.status).then((cB => {
          cB && (null === Ic || void 0 === Ic || Ic())
        }))
      },
      disabledWhy: Sc
    }), Tc.map((cB => {
      var Bc, nc, Vc, Ic, mB;
      const tB = rs(cB),
        Sc = Tc.length >= 4 && !Uc(cB) && !Yc.has(cB.id) && !Lc.has(cB.id),
        Zc = Sc ? null !== (Bc = cB.models.find((Bc => Bc.id === cB.usedModelId))) && void 0 !== Bc ? Bc : Iu(cB.models) : void 0,
        Cc = null !== (nc = null === (Vc = aB[cB.id]) || void 0 === Vc ? void 0 : Vc.trim().toLowerCase()) && void 0 !== nc ? nc : "",
        vB = Zc ? [Zc] : "" === Cc ? cB.models : cB.models.filter((Bc => Bc.name.toLowerCase().includes(Cc) || fc({
          keyId: cB.id,
          modelId: Bc.id
        })));
      return (0, uc.jsxs)("div", {
        className: "WorldCodeAiModelGroup",
        role: "group",
        "aria-label": tB,
        "data-key-id": cB.id,
        children: [(0, uc.jsxs)("div", {
          className: "WorldCodeAiModelGroupHeader",
          children: [yB === cB.id ? (0, uc.jsx)(Jsc, {
            keyName: null !== (Ic = cB.name) && void 0 !== Ic ? Ic : "",
            placeholder: Cr(cB.provider, cB.baseUrl),
            onDone: Bc => {
              null !== Bc && ec(cB.id, Bc), zB(null)
            }
          }) : (0, uc.jsx)(jM, {
            savedKey: cB,
            isInUse: Uc(cB),
            onEdit: sc ? () => {
              sc(cB)
            } : void 0,
            onRename: rB ? () => {
              zB(cB.id)
            } : void 0
          }), Pc && pc !== cB.id && (0, uc.jsx)("button", {
            className: "WorldCodeAiLinkButton WorldCodeAiModelRefresh",
            "aria-label": `Check ${tB} for new models`,
            disabled: null === qB || void 0 === qB ? void 0 : qB.has(cB.id),
            onClick: () => {
              Pc(cB)
            },
            children: null !== qB && void 0 !== qB && qB.has(cB.id) ? "Checking\u2026" : "Check for new models"
          }), Mc && pc !== cB.id && (0, uc.jsx)("button", {
            className: "WorldCodeAiLinkButton WorldCodeAiModelRemove",
            "aria-label": `Remove ${tB} key`,
            onClick: () => {
              hc(cB.id)
            },
            children: "Remove"
          }), Mc && pc === cB.id && (0, uc.jsxs)("span", {
            className: "WorldCodeAiKeyConfirm",
            role: "group",
            "aria-label": `Remove ${tB} key?`,
            onKeyDown: cB => {
              "Escape" === cB.key && (cB.stopPropagation(), cB.preventDefault(), bB(cB.currentTarget))
            },
            children: ["Remove key?", (0, uc.jsx)("button", {
              className: "WorldCodeAiLinkButton WorldCodeAiModelRemove",
              "aria-label": `Yes, remove ${tB} key`,
              onClick: () => {
                hc(null), Mc(cB)
              },
              children: "Yes"
            }), (0, uc.jsx)("button", {
              className: "WorldCodeAiLinkButton",
              "aria-label": `No, keep ${tB} key`,
              autoFocus: !0,
              onClick: cB => {
                bB(cB.currentTarget)
              },
              children: "No"
            })]
          })]
        }), (null === Oc || void 0 === Oc ? void 0 : Oc.keyId) === cB.id && (0, uc.jsx)("p", {
          className: "WorldCodeAiAiSettingsNote",
          role: "status",
          children: Oc.text
        }), !Sc && cB.models.length > 12 && (0, uc.jsx)("input", {
          className: "WorldCodeAiAddKeyInput WorldCodeAiModelFilter",
          "aria-label": `Find a model from ${tB}`,
          placeholder: `Find a model (${cB.models.length})`,
          value: null !== (mB = aB[cB.id]) && void 0 !== mB ? mB : "",
          onKeyDown: cB => {
            cB.stopPropagation()
          },
          onChange: Bc => {
            const nc = Bc.target.value;
            lc((Bc => ({
              ...Bc,
              [cB.id]: nc
            })))
          }
        }), vB.map((Bc => Qc(Bc.name, Bc.tier ? Ar[Bc.tier] : "", {
          keyId: cB.id,
          modelId: Bc.id
        }))), Sc && cB.models.length > 1 && (0, uc.jsxs)("button", {
          className: "WorldCodeAiKeyLearnMore WorldCodeAiModelUnfold",
          "aria-label": `Show all ${tB} models`,
          onClick: Bc => {
            const nc = Bc.currentTarget.closest(".WorldCodeAiModelGroup");
            gB((Bc => new Set(Bc).add(cB.id))), setTimeout((() => {
              var cB;
              null === nc || void 0 === nc || null === (cB = nc.querySelector("input")) || void 0 === cB || cB.focus()
            }))
          },
          children: ["Show all ", cB.models.length, " models"]
        })]
      }, cB.id)
    }))]
  })
}
let Ks = !1,
  xM = null;

function ds() {
  const {
    remember: cB,
    setRemember: Bc
  } = Tu();
  return (0, uc.jsxs)("label", {
    className: "WorldCodeAiRememberKeys",
    children: [(0, uc.jsx)("input", {
      type: "checkbox",
      checked: cB,
      onChange: cB => {
        Bc(cB.target.checked)
      }
    }), (0, uc.jsxs)("span", {
      children: ["Remember my keys in this browser", (0, uc.jsx)("span", {
        className: "WorldCodeAiAiSettingsNote",
        children: cB ? "On: saved only in this browser, not synced, for all your keys. Not for shared computers." : "Off: you'll paste your keys again next time. Best on shared computers."
      })]
    })]
  })
}

function As(cB) {
  let {
    allowEdits: Bc,
    onAllowEditsChange: nc,
    onAddKey: Ic,
    onEditKey: rB
  } = cB;
  const {
    keys: sc,
    removeKey: Mc
  } = Tu(), [Pc, qB] = (0, Vc.useState)(null), [Oc, Tc] = (0, Vc.useState)(!1), [fc, mB] = (0, Vc.useState)(!1), ec = (0, Vc.useRef)(null);
  (0, Vc.useEffect)((() => {
    var cB, Bc;
    (Pc || fc) && (null === (cB = ec.current) || void 0 === cB || cB.scrollIntoView({
      block: "nearest"
    }), null === (Bc = ec.current) || void 0 === Bc || Bc.focus({
      preventScroll: !0
    }))
  }), [Pc, fc]);
  const tB = (0, Vc.useRef)(null),
    Sc = () => {
      Tc(!1), setTimeout((() => {
        var cB;
        null === (cB = tB.current) || void 0 === cB || cB.focus()
      }))
    },
    [yB, zB] = (0, Vc.useState)(new Set),
    [pc, hc] = (0, Vc.useState)(null);
  return (0, uc.jsxs)("div", {
    className: "WorldCodeAiAiSettings",
    children: [nc && (0, uc.jsxs)("div", {
      className: "WorldCodeAiAiSettingsSection",
      children: [(0, uc.jsx)(Xs, {
        allow: Bc,
        onChange: cB => {
          qB(null), nc(cB)
        }
      }), (0, uc.jsx)("p", {
        className: "WorldCodeAiAiSettingsNote",
        children: Bc ? "On: the AI changes this game's code right away, without asking; Undo is under each change. It can't touch other games or your account." : "Off: the AI shows each change to this game's code first, and you press Apply."
      })]
    }), (0, uc.jsxs)("div", {
      className: "WorldCodeAiAiSettingsSection",
      children: [(0, uc.jsxs)("div", {
        className: "WorldCodeAiAiSettingsHeading",
        children: [(0, uc.jsx)("h3", {
          id: "WorldCodeAiModelTitle",
          className: "WorldCodeAiAiSettingsTitle",
          children: "AI model"
        }), (0, uc.jsxs)("button", {
          className: "WorldCodeAiSecondaryButton WorldCodeAiAddKeyButton",
          onClick: Ic,
          children: [(0, uc.jsx)("span", {
            "aria-hidden": "true",
            children: "+ "
          }), "Add API key"]
        })]
      }), 0 === sc.length && (0, uc.jsx)("p", {
        className: "WorldCodeAiAiSettingsNote",
        children: "Use a stronger AI with your own key."
      }), (0, uc.jsx)(ds, {}), sc.length > 0 && (0, uc.jsx)("p", {
        className: "WorldCodeAiAiSettingsNote WorldCodeAiForgetAll",
        children: Oc ? (0, uc.jsxs)("span", {
          className: "WorldCodeAiKeyConfirm",
          role: "group",
          "aria-label": "Forget all keys?",
          onKeyDown: cB => {
            "Escape" === cB.key && (cB.stopPropagation(), cB.preventDefault(), Sc())
          },
          children: [1 === sc.length ? "Forget your key" : `Forget all ${sc.length} keys`, " in this browser?", (0, uc.jsx)("button", {
            className: "WorldCodeAiLinkButton WorldCodeAiModelRemove",
            onClick: () => {
              Ou.removeAll(), Tc(!1), qB(null), mB(!0)
            },
            children: "Yes"
          }), (0, uc.jsx)("button", {
            className: "WorldCodeAiLinkButton",
            autoFocus: !0,
            onClick: Sc,
            children: "No"
          })]
        }) : (0, uc.jsx)("button", {
          ref: tB,
          className: "WorldCodeAiKeyLearnMore",
          onClick: () => {
            Tc(!0)
          },
          children: "Forget all keys"
        })
      }), 0 === sc.length && fc && (0, uc.jsx)("p", {
        ref: ec,
        className: "WorldCodeAiAiSettingsNote WorldCodeAiKeyRemoved",
        tabIndex: -1,
        children: "All keys forgotten in this browser. Bot.xd answers now. To stop a key working everywhere, delete it on its company's website."
      }), Pc && (0, uc.jsxs)("p", {
        ref: ec,
        className: "WorldCodeAiAiSettingsNote WorldCodeAiKeyRemoved",
        tabIndex: -1,
        children: [Pc.name, " removed.", Pc.wasInUse && " Bot.xd answers now.", Pc.keyPage && (0, uc.jsxs)(uc.Fragment, {
          children: [" ", "To stop it working everywhere, delete it on", " ", (0, uc.jsxs)("a", {
            href: Pc.keyPage,
            target: "_blank",
            rel: "noreferrer noopener",
            children: [Pc.label, "'s website"]
          }), "."]
        }), " ", (0, uc.jsx)("button", {
          className: "WorldCodeAiLinkButton WorldCodeAiModelUndo",
          onClick: () => {
            Pc.undo(), qB(null)
          },
          children: "Undo"
        })]
      }), (0, uc.jsx)(iM, {
        labelledBy: "WorldCodeAiModelTitle",
        onPicked: () => {
          qB(null), hc(null)
        },
        canRename: !0,
        onEdit: rB,
        refreshingIds: yB,
        keyNote: pc,
        onRefresh: cB => {
          (async cB => {
            const Bc = Cr(cB.provider, cB.baseUrl, !0);
            zB((Bc => new Set(Bc).add(cB.id))), hc(null);
            try {
              const nc = await fu({
                provider: cB.provider,
                key: cB.key,
                baseUrl: cB.baseUrl
              });
              0 === nc.length ? hc({
                keyId: cB.id,
                text: `${Bc} listed no models, so your models stay as they were.`
              }) : Ou.refreshModels(cB.id, nc, {
                key: cB.key,
                baseUrl: cB.baseUrl
              }) && hc({
                keyId: cB.id,
                text: `${Bc}'s models are up to date.`
              })
            } catch (nc) {
              hc({
                keyId: cB.id,
                text: Nr(nc instanceof vu ? nc.problem : "failed", cB.provider)
              })
            }
            zB((Bc => {
              const nc = new Set(Bc);
              return nc.delete(cB.id), nc
            }))
          })(cB)
        },
        YBc: cB => {
          var Bc;
          const nc = (null === (Bc = Ou.activeKey()) || void 0 === Bc ? void 0 : Bc.id) === cB.id,
            Vc = Mc(cB.id);
          qB({
            name: rs(cB, !0),
            label: Cr(cB.provider, cB.baseUrl, !0),
            keyPage: Lr[cB.provider].keyPage,
            wasInUse: nc,
            undo: Vc
          })
        }
      })]
    })]
  })
}
const Gs = ["anthropic", "openai", "gemini", "openrouter"];

function cP(cB) {
  let {
    provider: Bc,
    children: nc
  } = cB;
  return (0, uc.jsx)("a", {
    href: Lr[Bc].keyPage,
    target: "_blank",
    rel: "noreferrer noopener",
    children: nc
  })
}

function BM() {
  return (0, uc.jsxs)(uc.Fragment, {
    children: [Gs.map(((cB, Bc) => {
      const nc = 0 === Bc ? "" : Bc === Gs.length - 1 ? " or " : ", ";
      return (0, uc.jsxs)("span", {
        children: [nc, (0, uc.jsx)(cP, {
          provider: cB,
          children: Lr[cB].shortName
        })]
      }, cB)
    })), "'s website"]
  })
}

function nM(cB) {
  var Bc;
  let {
    provider: nc
  } = cB;
  const [Ic, rB] = (0, Vc.useState)(!1), sc = (0, Vc.useRef)(null);
  if ((0, Vc.useEffect)((() => {
      if (Ic) {
        var cB, Bc, nc;
        const Vc = null === (cB = sc.current) || void 0 === cB || null === (Bc = cB.closest("form")) || void 0 === Bc ? void 0 : Bc.querySelector(".WorldCodeAiAddKeyActions");
        null === (nc = null !== Vc && void 0 !== Vc ? Vc : sc.current) || void 0 === nc || nc.scrollIntoView({
          block: "nearest",
          behavior: "smooth"
        })
      }
    }), [Ic]), "custom" === nc) return (0, uc.jsx)("div", {
    className: "WorldCodeAiKeyExplainer",
    children: (0, uc.jsx)("p", {
      className: "WorldCodeAiAiSettingsNote",
      children: "Paste the key for that server, or leave it empty if it doesn't need one. It goes only to that server, never to Bloxd."
    })
  });
  const Mc = nc ? Lr[nc] : null;
  return (0, uc.jsxs)("div", {
    className: "WorldCodeAiKeyExplainer",
    children: [(0, uc.jsxs)("ul", {
      ref: sc,
      id: "WorldCodeAiKeyExplainerLines",
      className: "WorldCodeAiKeyExplainerLines",
      children: [(0, uc.jsx)("li", {
        children: Mc ? `An API key works like a password for ${Mc.shortName}'s AI (it isn't your ${Mc.shortName} login password). Keep it secret.` : "An API key works like a password for an AI company's AI (it isn't your login password). Keep it secret."
      }), (0, uc.jsxs)("li", {
        children: ["You make it on ", Mc ? `${Mc.shortName}'s website` : (0, uc.jsx)(BM, {}), ", and see how much you've used or delete it there."]
      }), Ic && (0, uc.jsxs)("li", {
        children: ["Your key stays in this browser and only goes to ", null !== (Bc = null === Mc || void 0 === Mc ? void 0 : Mc.shortName) && void 0 !== Bc ? Bc : "that company", ", never to Bloxd."]
      }), (0, uc.jsx)("li", {
        className: "WorldCodeAiKeyExplainerMore",
        children: (0, uc.jsx)("button", {
          type: "button",
          className: "WorldCodeAiKeyLearnMore",
          "aria-expanded": Ic,
          "aria-controls": "WorldCodeAiKeyExplainerLines",
          onClick: () => {
            rB(!Ic)
          },
          children: Ic ? "Less about keys" : "More about keys"
        })
      })]
    }), Mc && (0, uc.jsxs)("a", {
      className: "WorldCodeAiKeyPageLink",
      href: Mc.keyPage,
      target: "_blank",
      rel: "noreferrer noopener",
      children: ["Get a key on ", Mc.shortName, "'s website ", (0, uc.jsx)("span", {
        "aria-hidden": "true",
        children: "\u2197"
      })]
    })]
  })
}

function VM() {
  const [cB, Bc] = (0, Vc.useState)(!1);
  return (0, uc.jsxs)("span", {
    className: "WorldCodeAiAiSettingsNote",
    children: ["Any server that works like OpenAI's, such as LM Studio or Ollama.", " ", (0, uc.jsx)("button", {
      type: "button",
      className: "WorldCodeAiKeyLearnMore",
      "aria-expanded": cB,
      onClick: () => {
        Bc(!cB)
      },
      children: cB ? "Hide tips" : "Server tips"
    }), cB && (0, uc.jsx)("span", {
      className: "WorldCodeAiServerTips",
      children: "Use https://, or http:// for one on this computer, like http://localhost:1234/v1. It must allow web pages to use it: in LM Studio turn on CORS; for Ollama see its help."
    })]
  })
}

function IM(cB) {
  cB.stopPropagation()
}

function rP(cB) {
  var Bc, nc, Ic, rB, sc;
  let {
    editing: Mc,
    onAdded: Pc,
    onOpenSettings: qB
  } = cB;
  const {
    remember: Oc
  } = Tu(), [Tc, fc] = (0, Vc.useState)(null !== (Bc = null === Mc || void 0 === Mc ? void 0 : Mc.provider) && void 0 !== Bc ? Bc : null), [mB, ec] = (0, Vc.useState)(!!Mc), [tB, Sc] = (0, Vc.useState)(""), yB = null !== (nc = null === Mc || void 0 === Mc ? void 0 : Mc.key) && void 0 !== nc ? nc : "", [zB, pc] = (0, Vc.useState)(!1), [hc, aB] = (0, Vc.useState)(null !== (Ic = null === Mc || void 0 === Mc ? void 0 : Mc.baseUrl) && void 0 !== Ic ? Ic : ""), lc = cB => {
    var Bc, nc;
    return cB === (null === Mc || void 0 === Mc ? void 0 : Mc.provider) && ("custom" !== cB || (null !== (Bc = Qr(hc)) && void 0 !== Bc ? Bc : "") === (null !== (nc = Mc.baseUrl) && void 0 !== nc ? nc : ""))
  }, Yc = "" !== yB && lc(Tc), Lc = function(cB) {
    let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bu(tB);
    return "" === Bc && "" !== yB && lc(cB) ? yB : Bc
  }, [gB, Uc] = (0, Vc.useState)(""), [bB, Zc] = (0, Vc.useState)(null !== (rB = null === Mc || void 0 === Mc ? void 0 : Mc.name) && void 0 !== rB ? rB : ""), [Qc, Cc] = (0, Vc.useState)(!1), [vB, Dc] = (0, Vc.useState)(null), [Nc, Ec] = (0, Vc.useState)(""), [oc, Wc] = (0, Vc.useState)(!1), [wc, kB] = (0, Vc.useState)(null), [Xc, Hc] = (0, Vc.useState)(null), Fc = "custom" === Tc && "" === Lc(Tc), Jc = (0, Vc.useRef)(null), jB = (0, Vc.useRef)(null), Rc = (0, Vc.useRef)(null);
  (0, Vc.useEffect)((() => {
    var cB, Bc;
    vB && (null === (cB = jB.current) || void 0 === cB || cB.scrollIntoView({
      block: "start"
    }), null === (Bc = Rc.current) || void 0 === Bc || Bc.scrollIntoView({
      block: "nearest"
    }))
  }), [vB]), (0, Vc.useEffect)((() => () => {
    var cB;
    null === (cB = Jc.current) || void 0 === cB || cB.abort()
  }), []), (0, Vc.useEffect)((() => {
    var cB;
    wc && (null === (cB = Rc.current) || void 0 === cB || cB.scrollIntoView({
      block: "nearest"
    }))
  }), [wc]);
  const iB = () => {
      var cB;
      null === (cB = Jc.current) || void 0 === cB || cB.abort(), Wc(!1), Dc(null), kB(null), Hc(null)
    },
    Kc = null === vB || void 0 === vB ? void 0 : vB.find((cB => cB.id === Nc));
  return (0, uc.jsxs)("form", {
    className: "WorldCodeAiAddKey",
    onSubmit: cB => {
      cB.preventDefault(), vB ? (() => {
        var cB;
        if (!Tc || !vB) return;
        const Bc = Ou.addKey({
          provider: Tc,
          key: Lc(Tc),
          baseUrl: "custom" === Tc && null !== (cB = Qr(hc)) && void 0 !== cB ? cB : void 0,
          models: vB
        }, Nc, null === Mc || void 0 === Mc ? void 0 : Mc.id);
        ("" !== bB.trim() || Mc) && Ou.renameKey(Bc, bB), Pc()
      })() : (async () => {
        const Bc = bu(tB);
        Sc(Bc), Hc(null);
        const nc = null !== Tc && void 0 !== Tc ? Tc : Zr(Bc),
          Vc = Lc(nc, Bc);
        if ("" === Vc && "custom" !== nc) return void kB("Paste your key first.");
        if (!nc) return void kB("Pick the company your key is from.");
        const Ic = "custom" === nc ? Qr(hc) : null;
        if ("custom" === nc && null === Ic) return void kB("That address doesn't look right. It should start with https://");
        if (Qc && "" === gB.trim()) return void kB("Type the name of the model to use.");
        fc(nc), Wc(!0), kB(null);
        const rB = new AbortController;
        Jc.current = rB;
        try {
          var uc, sc;
          const cB = await fu({
            provider: nc,
            key: Vc,
            baseUrl: null !== Ic && void 0 !== Ic ? Ic : void 0,
            modelName: Qc ? gB : void 0
          }, rB.signal);
          if (Wc(!1), 0 === cB.length) return Cc(!0), void kB("custom" === nc ? "This address doesn't list its models. Type the name of the model to use." : "Type the name of the model to use.");
          Dc(cB);
          const Bc = Ou.getState().selected,
            Pc = Mc && (null === Bc || void 0 === Bc ? void 0 : Bc.keyId) === Mc.id ? cB.find((cB => cB.id === Bc.modelId)) : void 0;
          Ec(null !== (uc = null === (sc = null !== Pc && void 0 !== Pc ? Pc : Iu(cB)) || void 0 === sc ? void 0 : sc.id) && void 0 !== uc ? uc : "")
        } catch (cB) {
          if (rB.signal.aborted) return;
          Wc(!1);
          const Ic = cB instanceof vu ? cB.problem : "failed";
          if (Hc(cB instanceof vu && cB.detail ? Dr(cB.detail, Vc) : null), "badKey" === Ic && "" === Vc) return void kB("This address needs a key.");
          const uc = "badKey" !== Ic || mB ? "" : ` If it isn't from ${Lr[nc].shortName}, pick the company it's from.`;
          kB(`${Nr(Ic,nc)}${uc}`)
        }
      })()
    },
    children: [(0, uc.jsxs)("label", {
      className: "WorldCodeAiAddKeyField",
      children: [(0, uc.jsx)("span", {
        children: "Company"
      }), (0, uc.jsxs)("select", {
        className: "WorldCodeAiAddKeyInput WorldCodeAiAddKeyCompany",
        value: null !== Tc && void 0 !== Tc ? Tc : "",
        onChange: cB => {
          fc(cB.target.value), ec(!0), Cc(!1), iB()
        },
        onKeyDown: IM,
        children: [null === Tc && (0, uc.jsx)("option", {
          value: "",
          disabled: !0,
          children: "Pick one, or paste your key below"
        }), gu.map((cB => (0, uc.jsx)("option", {
          value: cB,
          children: Lr[cB].name
        }, cB)))]
      })]
    }), "custom" === Tc && (0, uc.jsxs)("label", {
      className: "WorldCodeAiAddKeyField",
      children: [(0, uc.jsx)("span", {
        children: "Server address"
      }), (0, uc.jsx)("input", {
        className: "WorldCodeAiAddKeyInput WorldCodeAiAddKeyEndpoint",
        value: hc,
        placeholder: "https://ai.example.com/v1",
        autoComplete: "off",
        spellCheck: !1,
        onChange: cB => {
          aB(cB.target.value), Cc(!1), iB()
        },
        onKeyDown: IM
      }), (!Mc || hc !== (null !== (sc = Mc.baseUrl) && void 0 !== sc ? sc : "")) && (0, uc.jsx)(VM, {})]
    }), (0, uc.jsxs)("div", {
      className: "WorldCodeAiAddKeyField",
      children: [Yc && (0, uc.jsxs)("span", {
        className: "WorldCodeAiAddKeySavedKey",
        children: ["Key ends ", (0, uc.jsxs)("code", {
          children: ["\u2026", yB.slice(-4)]
        })]
      }), (0, uc.jsx)("label", {
        htmlFor: "WorldCodeAiAddKeyKey",
        children: Yc ? "Paste a new key to replace it (optional)" : "Your key"
      }), (0, uc.jsxs)("span", {
        className: "WorldCodeAiAddKeyPaste",
        children: [(0, uc.jsx)("input", {
          id: "WorldCodeAiAddKeyKey",
          className: "WorldCodeAiAddKeyInput WorldCodeAiAddKeyKey",
          type: zB ? "text" : "password",
          value: tB,
          placeholder: Yc ? "Leave empty to keep it" : "custom" === Tc ? "Paste the key, or leave empty" : "Paste the key here",
          autoComplete: "off",
          spellCheck: !1,
          onChange: cB => {
            Sc(cB.target.value), mB || fc(Zr(bu(cB.target.value))), iB()
          },
          onKeyDown: IM
        }), (0, uc.jsx)("button", {
          type: "button",
          className: "WorldCodeAiSecondaryButton",
          onClick: () => {
            pc(!zB)
          },
          children: zB ? "Hide" : "Show"
        })]
      }), (0, uc.jsx)(nM, {
        provider: Tc
      })]
    }), !Mc && (0, uc.jsxs)("p", {
      className: "WorldCodeAiAiSettingsNote WorldCodeAiAddKeyRemember",
      children: [Oc ? "Your keys are remembered in this browser. Change it in " : "Your keys are kept until you close this tab. To remember them, see ", (0, uc.jsx)("button", {
        type: "button",
        className: "WorldCodeAiKeyLearnMore",
        onClick: qB,
        children: "AI settings"
      }), "."]
    }), Qc && (0, uc.jsxs)("label", {
      className: "WorldCodeAiAddKeyField",
      children: [(0, uc.jsx)("span", {
        children: "Model name"
      }), (0, uc.jsx)("input", {
        className: "WorldCodeAiAddKeyInput WorldCodeAiAddKeyModel",
        value: gB,
        placeholder: "llama-3.3-70b-versatile",
        autoComplete: "off",
        spellCheck: !1,
        onChange: cB => {
          Uc(cB.target.value), iB()
        },
        onKeyDown: IM
      })]
    }), vB && (0, uc.jsxs)("div", {
      ref: jB,
      className: "WorldCodeAiModelList WorldCodeAiAddKeyModels",
      role: "radiogroup",
      "aria-labelledby": "WorldCodeAiAddKeyModelsTitle",
      children: [(0, uc.jsxs)("p", {
        id: "WorldCodeAiAddKeyModelsTitle",
        className: "WorldCodeAiAddKeyWorks",
        children: ["" === Lc(Tc) ? "It works." : "Your key works.", " Pick a model:"]
      }), vB.map((cB => (0, uc.jsx)(Rs, {
        name: cB.name,
        hint: cB.tier ? Ar[cB.tier] : "",
        choice: {
          keyId: null !== Tc && void 0 !== Tc ? Tc : "",
          modelId: cB.id
        },
        selected: cB.id === Nc,
        radioName: "WorldCodeAiAddKeyModelPick",
        onSelect: () => {
          Ec(cB.id)
        }
      }, cB.id))), (0, uc.jsx)("button", {
        type: "button",
        className: "WorldCodeAiKeyLearnMore",
        onClick: () => {
          Cc(!0), iB()
        },
        children: "Type a model name yourself"
      })]
    }), vB && (0, uc.jsxs)("label", {
      className: "WorldCodeAiAddKeyField",
      children: [(0, uc.jsx)("span", {
        children: "Name it (optional)"
      }), (0, uc.jsx)("input", {
        className: "WorldCodeAiAddKeyInput WorldCodeAiAddKeyName",
        value: bB,
        maxLength: 30,
        placeholder: Tc && "custom" !== Tc ? `Like My ${Lr[Tc].shortName}` : "Like Home server",
        autoComplete: "off",
        onChange: cB => {
          Zc(cB.target.value)
        },
        onKeyDown: IM
      })]
    }), (0, uc.jsxs)("div", {
      ref: Rc,
      className: "WorldCodeAiAddKeyActions",
      children: [wc && (0, uc.jsx)("p", {
        className: "WorldCodeAiAddKeyError",
        role: "alert",
        children: wc
      }), wc && Xc && (0, uc.jsx)(Cs, {
        detail: Xc,
        onOpen: () => {
          var cB, Bc;
          null === (cB = Rc.current) || void 0 === cB || null === (Bc = cB.querySelector(".WorldCodeAiAddKeySave")) || void 0 === Bc || Bc.scrollIntoView({
            block: "nearest"
          })
        }
      }), (0, uc.jsx)("button", {
        type: "submit",
        className: "WorldCodeAiPrimaryButton WorldCodeAiAddKeySave",
        disabled: oc,
        children: oc ? Fc ? "Testing the connection\u2026" : "Testing your key\u2026" : Kc ? `Save and use ${Kc.name}` : Fc ? "Test connection" : "Test key"
      })]
    })]
  })
}
var uM = nc(1051),
  sM = nc(35501),
  MM = nc(35498);

function PM(cB) {
  let {
    step: Bc,
    placement: nc = "left",
    onPrevious: Vc,
    children: Ic
  } = cB;
  const {
    t: rB
  } = (0, uM.x)();
  return (0, uc.jsx)(MM.f, {
    tutorial: "aiHelperOverview",
    step: Bc,
    text: rB(`codeEditorAiTutorial:${Bc}`),
    placement: nc,
    onPrevious: Vc,
    children: Ic
  })
}

function qP(cB, Bc) {
  if (cB.scrollHeight <= cB.clientHeight + 1) OM(cB);
  else {
    if (!Fs(cB, Bc)) {
      const nc = Bc.getBoundingClientRect().bottom - cB.getBoundingClientRect().bottom;
      nc > 0 && (cB.scrollTop += nc),
        function(cB, Bc) {
          const nc = cB.getBoundingClientRect(),
            Vc = Math.max(nc.top, ...Array.from(cB.querySelectorAll(".WorldCodeAiModelGroupHeader"), (cB => {
              const Bc = cB.getBoundingClientRect();
              return Bc.top <= nc.top + 1 ? Bc.bottom : nc.top
            })));
          if (Vc <= nc.top) return;
          const Ic = Bc.closest(".WorldCodeAiModelGroup"),
            rB = Ic && parseFloat(getComputedStyle(Ic).rowGap) || 6,
            uc = Array.from(cB.querySelectorAll(".WorldCodeAiModelRow, .WorldCodeAiModelUnfold")).find((cB => {
              const Bc = cB.getBoundingClientRect();
              return Bc.top < Vc + rB - 1 && Bc.bottom > Vc - rB
            }));
          if (!uc || uc === Bc) return;
          const sc = cB.scrollTop;
          cB.scrollTop -= Vc + rB - uc.getBoundingClientRect().top, Bc.getBoundingClientRect().bottom > nc.bottom && (cB.scrollTop = sc, cB.scrollTop += Math.max(0, uc.getBoundingClientRect().bottom - Vc))
        }(cB, Bc)
    }
    OM(cB)
  }
}

function OM(cB) {
  const Bc = cB.getBoundingClientRect().top;
  for (const nc of Array.from(cB.querySelectorAll(".WorldCodeAiModelGroup"))) {
    const cB = nc.querySelector(".WorldCodeAiModelGroupHeader");
    if (!cB) continue;
    const Vc = Bc + cB.offsetHeight,
      Ic = Array.from(nc.querySelectorAll(".WorldCodeAiModelRow")).some((cB => cB.getBoundingClientRect().bottom > Vc + 2));
    cB.classList.toggle("Unpinned", !Ic)
  }
}

function TM(cB) {
  const Bc = rs(cB, !0);
  return cB.model.name.toLowerCase().startsWith(Bc.toLowerCase()) ? cB.model.name : `${Bc} \xb7 ${cB.model.name}`
}

function fM(cB) {
  let {
    onAddKey: Bc,
    editsOn: nc,
    freeOnce: Ic = !1,
    onFreeOnce: sc,
    children: Mc
  } = cB;
  const {
    active: Pc,
    select: qB
  } = Tu(), Oc = Zu(lu());
  (0, Vc.useEffect)((() => {
    as.refresh(), Xu()
  }), []);
  const [Tc, fc] = (0, Vc.useState)(!1), mB = (0, Vc.useRef)(null), ec = (0, Vc.useRef)(null), tB = (0, Vc.useRef)(null), Sc = () => {
    var cB;
    fc(!1), null === (cB = ec.current) || void 0 === cB || cB.focus()
  };
  (0, Vc.useEffect)((() => {
    var cB, Bc;
    if (!Tc) return;
    const nc = null === (cB = tB.current) || void 0 === cB ? void 0 : cB.querySelector("input:checked");
    null === nc || void 0 === nc || nc.focus({
      preventScroll: !0
    });
    const Vc = null === (Bc = tB.current) || void 0 === Bc ? void 0 : Bc.querySelector(".WorldCodeAiModelMenuList"),
      Ic = null === nc || void 0 === nc ? void 0 : nc.closest(".WorldCodeAiModelRow");
    Vc && Ic && qP(Vc, Ic);
    const rB = () => {
      Vc && OM(Vc)
    };
    null === Vc || void 0 === Vc || Vc.addEventListener("scroll", rB, {
      passive: !0
    });
    const uc = cB => {
        var Bc;
        null !== (Bc = mB.current) && void 0 !== Bc && Bc.contains(cB.target) || fc(!1)
      },
      sc = cB => {
        "Escape" === cB.key && (cB.stopPropagation(), cB.preventDefault(), xM && (xM(), 1) || Sc())
      };
    return document.addEventListener("pointerdown", uc), document.addEventListener("keydown", sc, !0), () => {
      null === Vc || void 0 === Vc || Vc.removeEventListener("scroll", rB), document.removeEventListener("pointerdown", uc), document.removeEventListener("keydown", sc, !0)
    }
  }), [Tc]);
  const yB = Ic && null !== Pc,
    zB = yB ? "Bot.xd (free) \xb7 once" : Pc ? TM(Pc) : Oc ? ts : "Bot.xd (free)";
  return (0, uc.jsxs)("div", {
    ref: mB,
    className: "WorldCodeAiModelChipRow",
    onBlur: cB => {
      var Bc;
      !Tc || !cB.relatedTarget || null !== (Bc = mB.current) && void 0 !== Bc && Bc.contains(cB.relatedTarget) || fc(!1)
    },
    children: [(0, uc.jsxs)("button", {
      ref: ec,
      className: rB()("WorldCodeAiModelChip", Tc && "Open"),
      "aria-expanded": Tc,
      "aria-label": `AI model: ${zB}`,
      title: "Change AI model",
      onClick: () => {
        fc(!Tc)
      },
      children: [Pc && !yB && "" !== Pc.key && (0, uc.jsx)(Qs, {}), (0, uc.jsx)("span", {
        className: "WorldCodeAiModelChipName",
        children: zB
      }), (0, uc.jsx)("span", {
        className: "WorldCodeAiModelChipCaret",
        "aria-hidden": "true",
        children: "\u25be"
      })]
    }), null !== nc && (0, uc.jsx)(PM, {
      step: "aiEdits",
      placement: "top",
      children: (0, uc.jsx)("span", {
        className: rB()("WorldCodeAiEditsTag", !nc && "WorldCodeAiEditsTag-off"),
        title: `Allow AI to make edits to my code is ${nc?"on":"off"}, in AI settings`,
        children: nc ? "Edits on" : "Edits off"
      })
    }), (0, uc.jsx)("span", {
      className: "WorldCodeAiModelChipStatus",
      children: Mc
    }), Tc && (0, uc.jsxs)("div", {
      ref: tB,
      className: "WorldCodeAiModelMenu",
      role: "dialog",
      "aria-labelledby": "WorldCodeAiModelMenuTitle",
      children: [(0, uc.jsx)("h3", {
        id: "WorldCodeAiModelMenuTitle",
        className: "WorldCodeAiAiSettingsTitle",
        children: "AI model"
      }), (0, uc.jsx)("div", {
        className: "WorldCodeAiModelMenuList",
        children: (0, uc.jsx)(iM, {
          labelledBy: "WorldCodeAiModelMenuTitle",
          onPicked: () => {
            null === sc || void 0 === sc || sc(!1), Sc()
          }
        })
      }), (0, uc.jsxs)("div", {
        className: "WorldCodeAiModelMenuActions",
        children: [(0, uc.jsxs)("button", {
          className: "WorldCodeAiSecondaryButton WorldCodeAiAddKeyButton",
          onClick: () => {
            fc(!1), Bc()
          },
          children: [(0, uc.jsx)("span", {
            "aria-hidden": "true",
            children: "+ "
          }), "Add API key"]
        }), Pc && (0, uc.jsxs)("span", {
          className: "WorldCodeAiModelMenuBotxd",
          children: [sc && (yB ? (0, uc.jsxs)("button", {
            className: "WorldCodeAiKeyLearnMore",
            onClick: () => {
              sc(!1), Sc()
            },
            children: ["Back to ", Pc.model.name]
          }) : (0, uc.jsx)("button", {
            className: "WorldCodeAiKeyLearnMore",
            onClick: () => {
              sc(!0), Sc()
            },
            children: "Ask Bot.xd once"
          })), (0, uc.jsx)("button", {
            className: "WorldCodeAiKeyLearnMore",
            onClick: () => {
              qB(null), Sc()
            },
            children: "Use Bot.xd from now on"
          })]
        })]
      })]
    })]
  })
}
var mP = nc(51);
const eM = "kv";

function tP(cB) {
  return new Promise(((Bc, nc) => {
    cB.oncomplete = () => {
      Bc()
    }, cB.onerror = () => {
      var Bc;
      nc(null !== (Bc = cB.error) && void 0 !== Bc ? Bc : new Error("IndexedDB transaction failed"))
    }, cB.onabort = () => {
      var Bc;
      nc(null !== (Bc = cB.error) && void 0 !== Bc ? Bc : new Error("IndexedDB transaction aborted"))
    }
  }))
}
var SM = nc(35519);
const yP = (0, Vc.memo)((function(cB) {
  let {
    change: Bc,
    marked: nc
  } = cB;
  const Ic = (0, Vc.useMemo)((() => DV(Bc.before, Bc.after)), [Bc]),
    sc = [];
  for (let Vc = 0; Vc < Ic.length; Vc++) {
    if ("same" !== Ic[Vc].kind) {
      sc.push(Ic[Vc]);
      continue
    }
    let cB = Vc;
    for (; cB + 1 < Ic.length && "same" === Ic[cB + 1].kind;) cB++;
    const Bc = Ic.slice(Vc, cB + 1),
      nc = 0 === Vc ? 0 : 2,
      rB = cB === Ic.length - 1 ? 0 : 2;
    Bc.length > nc + rB + 1 ? sc.push(...Bc.slice(0, nc), {
      kind: "fold",
      count: Bc.length - nc - rB
    }, ...Bc.slice(Bc.length - rB)) : sc.push(...Bc), Vc = cB
  }
  return (0, uc.jsx)("pre", {
    className: "WorldCodeAiDiff",
    children: sc.map(((cB, Bc) => {
      if ("fold" === cB.kind) return (0, uc.jsxs)("div", {
        className: "WorldCodeAiDiffFold",
        children: ["\u22ef ", cB.count, " unchanged lines"]
      }, Bc);
      const Vc = "added" === cB.kind ? function(cB, Bc) {
          if (Bc) return cB.includes(`"${Bc}"`) ? `"${Bc}"` : cB.includes(Bc) ? Bc : void 0
        }(cB.text, nc) : void 0,
        Ic = Vc ? cB.text.indexOf(Vc) : -1;
      return (0, uc.jsxs)("div", {
        className: rB()("WorldCodeAiDiffLine", `WorldCodeAiDiff-${cB.kind}`, Vc && "WorldCodeAiDiff-marked"),
        children: [(0, uc.jsx)("span", {
          className: "WorldCodeAiDiffMark",
          children: "added" === cB.kind ? "+" : "removed" === cB.kind ? "\u2212" : " "
        }), (0, uc.jsx)("span", {
          className: "WorldCodeAiDiffText",
          children: Vc ? (0, uc.jsxs)(uc.Fragment, {
            children: [cB.text.slice(0, Ic), (0, uc.jsx)("mark", {
              children: Vc
            }), cB.text.slice(Ic + Vc.length)]
          }) : cB.text || " "
        })]
      }, Bc)
    }))
  })
}));

function zP(cB) {
  var Bc, nc;
  if ("undefined" === typeof BroadcastChannel) return;
  const Vc = new BroadcastChannel(cB);
  return null === (Bc = (nc = Vc).unref) || void 0 === Bc || Bc.call(nc), {
    post: cB => {
      Vc.postMessage(cB)
    },
    listen: cB => {
      const Bc = Bc => {
        "string" === typeof Bc.data && cB(Bc.data)
      };
      return Vc.addEventListener("message", Bc), () => {
        Vc.removeEventListener("message", Bc)
      }
    }
  }
}

function pM(cB) {
  return Array.isArray(cB) && cB.every((cB => {
    if ("object" !== typeof cB || null === cB || !("id" in cB) || !("at" in cB) || !("label" in cB) || !("files" in cB)) return !1;
    const Bc = cB.files;
    return "object" === typeof Bc && null !== Bc && Object.values(Bc).every((cB => "string" === typeof cB))
  }))
}

function hM(cB, Bc) {
  return Bc ? function(cB, Bc) {
    if (!Bc) return [...cB];
    const nc = new Map;
    for (const Vc of [...Bc, ...cB]) nc.set(Vc.id, Vc);
    return [...nc.values()].sort(((cB, Bc) => cB.at - Bc.at || cB.id - Bc.id)).slice(-30)
  }(Bc, cB) : [...cB]
}

function aP(cB, Bc) {
  let nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  const Vc = new Date(cB).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      ...nc ? {
        second: "2-digit"
      } : {}
    }).toLowerCase(),
    Ic = cB => new Date(cB).toDateString();
  return Ic(cB) === Ic(Bc) ? Vc : Ic(cB) === Ic(Bc - 864e5) ? `yesterday ${Vc}` : function(cB, Bc) {
    const nc = Math.floor((Bc - cB) / 6e4);
    if (nc < 1) return "just now";
    if (nc < 60) return `${nc} min ago`;
    const Vc = Math.floor(nc / 60);
    if (Vc < 24) return `${Vc} h ago`;
    const Ic = Math.floor(Vc / 24);
    return 1 === Ic ? "1 day ago" : `${Ic} days ago`
  }(cB, Bc)
}

function lM(cB, Bc) {
  return [...new Set([...Object.keys(Bc), ...Object.keys(cB.files)])].flatMap((nc => {
    var Vc, Ic;
    const rB = null !== (Vc = cB.files[nc]) && void 0 !== Vc ? Vc : "";
    return (null !== (Ic = Bc[nc]) && void 0 !== Ic ? Ic : "") === rB ? [] : [{
      path: nc,
      text: rB
    }]
  }))
}

function YM(cB) {
  let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 120;
  if (cB.length <= Bc) return null;
  const nc = cB.slice(0, Bc),
    Vc = nc.lastIndexOf(" ");
  return `${(Vc>Bc/2?nc.slice(0,Vc):nc).replace(/[\s,;:.]+$/,"")}\u2026`
}

function LM(cB) {
  let {
    snapshot: Bc,
    files: nc,
    now: Ic,
    withSeconds: sc,
    onRestore: Mc
  } = cB;
  const [Pc, qB] = (0, Vc.useState)(!1), [Oc, Tc] = (0, Vc.useState)(!1), fc = Bc.did ? `Before: ${Bc.did}` : Bc.label, mB = YM(fc), ec = Bc.did && Bc.label.startsWith('Before "') ? Bc.label.slice(7) : null, tB = null === ec ? null : YM(ec, 50), Sc = null !== tB && null !== ec && void 0 !== ec && ec.startsWith('"') ? `${tB}"` : tB, yB = (0, Vc.useRef)(null);
  (0, Vc.useEffect)((() => {
    const cB = yB.current,
      Bc = null === cB || void 0 === cB ? void 0 : cB.closest(".WorldCodeAiMessages");
    if (!Pc || !cB || !Bc) return;
    const nc = Bc.getBoundingClientRect(),
      Vc = cB.getBoundingClientRect(),
      Ic = Vc.bottom - (nc.bottom - 28),
      rB = Vc.top - (nc.top + 16);
    Ic > 0 && Bc.scrollBy({
      top: Math.min(Ic, rB),
      behavior: "smooth"
    })
  }), [Pc]);
  const zB = (0, Vc.useRef)(null),
    [pc, hc] = (0, Vc.useState)(!1),
    aB = (0, Vc.useCallback)((() => {
      const cB = zB.current;
      hc(null !== cB && cB.scrollTop + cB.clientHeight >= cB.scrollHeight - 24)
    }), []);
  (0, Vc.useEffect)((() => {
    Pc && aB()
  }), [Pc, aB]);
  const lc = (0, Vc.useMemo)((() => [...new Set([...Object.keys(Bc.files), ...Object.keys(nc)])].flatMap((cB => {
    var Vc, Ic;
    const rB = null !== (Vc = Bc.files[cB]) && void 0 !== Vc ? Vc : "",
      uc = null !== (Ic = nc[cB]) && void 0 !== Ic ? Ic : "";
    return rB === uc ? [] : [{
      path: cB,
      before: rB,
      after: uc
    }]
  }))), [Bc, nc]);
  return (0, uc.jsxs)("li", {
    ref: yB,
    className: "WorldCodeAiSnapshot",
    children: [(0, uc.jsxs)("div", {
      className: "WorldCodeAiSnapshotRow",
      children: [(0, uc.jsxs)("span", {
        className: "WorldCodeAiSnapshotLabel",
        children: [Oc || !mB ? fc : mB, (mB || Sc) && (0, uc.jsx)("button", {
          className: "WorldCodeAiLinkButton WorldCodeAiSnapshotMore",
          "aria-expanded": Oc,
          onClick: () => {
            Tc(!Oc)
          },
          children: Oc ? "less" : "more"
        }), (0, uc.jsxs)("span", {
          className: "WorldCodeAiSnapshotAge",
          children: [" \xb7 ", aP(Bc.at, Ic, sc)]
        }), null !== ec && (0, uc.jsxs)("span", {
          className: "WorldCodeAiSnapshotAsked",
          children: ["You asked: ", Oc || !Sc ? ec : Sc]
        })]
      }), lc.length > 0 && (0, uc.jsx)("button", {
        className: "WorldCodeAiLinkButton",
        onClick: () => {
          qB(!Pc)
        },
        children: Pc ? "Hide" : "Compare"
      }), lc.length > 0 && Mc && (0, uc.jsx)("button", {
        className: "WorldCodeAiSecondaryButton",
        onClick: Mc,
        children: "Go back to this code"
      }), 0 === lc.length && (0, uc.jsx)("span", {
        className: "WorldCodeAiSnapshotNow",
        children: "Same as your code now"
      })]
    }), Pc && (0, uc.jsxs)("div", {
      className: "WorldCodeAiChanges",
      children: [(0, uc.jsx)("p", {
        className: "WorldCodeAiSnapshotCompareNote",
        children: "What changed since then:"
      }), (0, uc.jsx)("div", {
        ref: zB,
        className: rB()("WorldCodeAiSnapshotCompare", pc && "WorldCodeAiSnapshotCompare-end"),
        onScroll: aB,
        children: lc.map((cB => (0, uc.jsxs)("div", {
          className: "WorldCodeAiChange",
          children: [(0, uc.jsx)("div", {
            className: "WorldCodeAiChangeHeader",
            children: (0, uc.jsx)("span", {
              className: "WorldCodeAiChangePath",
              children: cB.path
            })
          }), (0, uc.jsx)(yP, {
            change: cB
          })]
        }, cB.path)))
      })]
    })]
  })
}

function gP(cB) {
  let {
    snapshots: Bc,
    files: nc,
    now: Vc,
    onRestore: Ic
  } = cB;
  return (0, uc.jsxs)("div", {
    className: "WorldCodeAiHistory",
    children: [(0, uc.jsx)("div", {
      className: "WorldCodeAiHistoryTitle",
      children: (0, uc.jsx)("span", {
        children: "Your code before each change"
      })
    }), 0 === Bc.length ? (0, uc.jsx)("p", {
      className: "WorldCodeAiHint",
      children: "Nothing here yet. Each time a change goes into your code, your code from before it is kept here."
    }) : (0, uc.jsx)("ul", {
      className: "WorldCodeAiSnapshots",
      children: [...Bc].reverse().map((cB => {
        const rB = Bc.some((Bc => Bc.id !== cB.id && aP(Bc.at, Vc) === aP(cB.at, Vc)));
        return (0, uc.jsx)(LM, {
          snapshot: cB,
          files: nc,
          now: Vc,
          withSeconds: rB,
          onRestore: Ic && (() => {
            Ic(cB)
          })
        }, cB.id)
      }))
    })]
  })
}

function UM(cB) {
  let {
    notes: Bc,
    outline: nc,
    FQ: Ic,
    onDelete: rB
  } = cB;
  const [sc, Mc] = (0, Vc.useState)(""), [Pc, qB] = (0, Vc.useState)(null), [Oc, Tc] = (0, Vc.useState)(!1), fc = Bc.length >= 8, mB = nc.callbacks.length + nc.commands.length + nc.functions.length > 0;
  return (0, uc.jsxs)("div", {
    className: "WorldCodeAiHistory WorldCodeAiAbout",
    children: [(0, uc.jsx)("div", {
      className: "WorldCodeAiHistoryTitle",
      children: (0, uc.jsx)("span", {
        children: "AI notes"
      })
    }), (0, uc.jsx)("p", {
      className: "WorldCodeAiAboutNote",
      children: "The AI reads these notes with every request, so it remembers what your game is."
    }), 0 === Bc.length && (0, uc.jsx)("p", {
      className: "WorldCodeAiHint",
      children: 'No notes yet. Add one, like "Two teams, red and blue, race to the flag".'
    }), (0, uc.jsx)("ul", {
      className: "WorldCodeAiAboutList",
      children: Bc.map((cB => (0, uc.jsxs)("li", {
        children: [(0, uc.jsx)("span", {
          children: cB
        }), (0, uc.jsx)("button", {
          className: "WorldCodeAiLinkButton",
          "aria-label": `Delete note: ${cB}`,
          onClick: () => {
            rB(cB)
          },
          children: "Delete"
        })]
      }, cB)))
    }), Ic && !fc && (0, uc.jsxs)("form", {
      className: "WorldCodeAiQuestionOther",
      onSubmit: cB => {
        cB.preventDefault(), "" === sc.trim() || Oc || (Tc(!0), qB(null), Ic(sc).then((cB => {
          qB(cB), null === cB && Mc("")
        })).catch((() => {
          qB("That note couldn't be kept. Try again.")
        })).finally((() => {
          Tc(!1)
        })))
      },
      children: [(0, uc.jsx)("input", {
        className: "WorldCodeAiInput WorldCodeAiQuestionInput",
        value: sc,
        maxLength: dc,
        placeholder: "Add a note about your game",
        "aria-label": "Add a note about your game",
        onChange: cB => {
          Mc(cB.target.value)
        },
        onKeyDown: cB => {
          cB.stopPropagation()
        }
      }), (0, uc.jsx)("button", {
        className: "WorldCodeAiSecondaryButton",
        type: "submit",
        disabled: "" === sc.trim() || Oc,
        children: Oc ? "Adding\u2026" : "Add"
      })]
    }), fc && (0, uc.jsxs)("p", {
      className: "WorldCodeAiHint",
      children: ["That's ", 8, " notes, the most it keeps: delete one to add another."]
    }), Pc && (0, uc.jsx)("p", {
      className: "WorldCodeAiAboutError",
      children: Pc
    }), (0, uc.jsx)("p", {
      className: "WorldCodeAiAboutHeading",
      children: "In your code now"
    }), mB ? (0, uc.jsxs)("ul", {
      className: "WorldCodeAiOutline",
      children: [nc.callbacks.map((cB => (0, uc.jsxs)("li", {
        children: [IB(cB), " ", (0, uc.jsx)("code", {
          children: cB
        })]
      }, cB))), nc.commands.length > 0 && (0, uc.jsxs)("li", {
        children: ["Chat commands: ", nc.commands.join(", ")]
      }), nc.functions.length > 0 && (0, uc.jsxs)("li", {
        children: ["Your own functions: ", (0, uc.jsx)("code", {
          children: nc.functions.join(", ")
        })]
      })]
    }) : (0, uc.jsx)("p", {
      className: "WorldCodeAiHint",
      children: "Nothing yet. Ask the AI to make something."
    })]
  })
}
const bP = {
  asked: "Remember this about your game?",
  pending: "A note to remember, once the change is in",
  checking: "Saving a note\u2026",
  saved: "Saved a note in AI notes",
  declined: "Note not saved",
  refused: "Note not saved"
};

function ZM(cB) {
  let {
    note: Bc,
    status: nc,
    onAnswer: Vc,
    isPartLeftOut: Ic = !1,
    defaultOpen: rB
  } = cB;
  const Mc = Ic && ("asked" === nc || "pending" === nc);
  return (0, uc.jsxs)("div", {
    className: "WorldCodeAiToolCard",
    children: [(0, uc.jsxs)(sc, {
      title: bP[nc],
      isCalm: "refused" !== nc,
      defaultOpen: rB,
      children: [Mc && (0, uc.jsx)("p", {
        children: "The note to remember is hidden while a part is unticked. Tick every part to see it."
      }), !Mc && (0, uc.jsxs)("p", {
        children: ['"', Bc, '"']
      }), !Mc && "pending" === nc && (0, uc.jsx)("p", {
        children: "It goes into AI notes once the change is in."
      }), "refused" === nc && (0, uc.jsx)("p", {
        children: "This note can't be saved. Notes are only about your game."
      })]
    }), !Mc && "asked" === nc && Vc && (0, uc.jsxs)("div", {
      className: "WorldCodeAiChangeActions",
      children: [(0, uc.jsx)("button", {
        className: "WorldCodeAiPrimaryButton",
        onClick: () => {
          Vc(!0)
        },
        children: "Yes, remember it"
      }), (0, uc.jsx)("button", {
        className: "WorldCodeAiSecondaryButton",
        onClick: () => {
          Vc(!1)
        },
        children: "No"
      })]
    })]
  })
}

function QM(cB) {
  let {
    steps: Bc,
    built: nc,
    done: Vc,
    onBuild: Ic
  } = cB;
  return (0, uc.jsxs)("div", {
    className: "WorldCodeAiQuestion WorldCodeAiPlan",
    children: [(0, uc.jsx)("p", {
      className: "WorldCodeAiQuestionText",
      children: "The plan: one step at a time"
    }), (0, uc.jsx)("ol", {
      className: "WorldCodeAiPlanSteps",
      children: Bc.map(((cB, Bc) => (0, uc.jsxs)("li", {
        className: Bc < Vc ? "WorldCodeAiPlanStep-built" : void 0,
        children: [Bc < Vc && (0, uc.jsx)("span", {
          className: "WorldCodeAiPlanTick",
          children: "\u2713 "
        }), cB, Bc < nc && Bc >= Vc && (0, uc.jsx)("span", {
          className: "WorldCodeAiPlanAsked",
          children: " (apply it to tick it off)"
        })]
      }, `${Bc}:${cB}`)))
    }), nc < Bc.length && Vc < nc && (0, uc.jsxs)("span", {
      className: "WorldCodeAiHint",
      children: ["Apply ", nc - Vc > 1 ? `steps ${Vc+1} to ${nc}` : `step ${nc}`, " to your code and try it, then build step ", nc + 1, "."]
    }), nc < Bc.length && Ic && (0, uc.jsx)("button", {
      ...Zs.d,
      className: Vc < nc ? "WorldCodeAiLinkButton" : "WorldCodeAiPrimaryButton",
      onClick: () => {
        Ic(nc)
      },
      children: Vc < nc ? `Build step ${nc+1} anyway` : `Build step ${nc+1}`
    }), nc < Bc.length && nc > 0 && Vc >= nc && (0, uc.jsx)("span", {
      className: "WorldCodeAiHint",
      children: "Try each step in your world before the next."
    }), nc === Bc.length && (0, uc.jsx)("span", {
      className: "WorldCodeAiHint",
      children: "Every step is asked for."
    })]
  })
}

function CM(cB, Bc, nc) {
  return `${cB}\n\nYou asked me: "${Bc}" ${null===nc?"I don't mind: choose what works best.":`My answer: ${nc.replace(/\.$/,"")}.`} Build it now, without asking again.`
}

function vP(cB) {
  let {
    question: Bc,
    onAnswer: nc,
    ownAnswerBelow: Ic = !1
  } = cB;
  const [rB, sc] = (0, Vc.useState)("");
  return (0, uc.jsxs)("div", {
    className: "WorldCodeAiQuestion",
    children: [(0, uc.jsx)("p", {
      className: "WorldCodeAiQuestionText",
      children: Bc.question
    }), nc && (0, uc.jsxs)(uc.Fragment, {
      children: [(0, uc.jsx)("div", {
        className: "WorldCodeAiQuestionChoices",
        children: Bc.choices.map(((cB, Bc) => (0, Vc.createElement)("button", {
          ...Zs.d,
          key: `${Bc}:${cB}`,
          className: "WorldCodeAiQuestionChoice",
          onClick: () => {
            nc(cB, !1)
          }
        }, cB)))
      }), Bc.allowOther && Ic && (0, uc.jsx)("span", {
        className: "WorldCodeAiHint",
        children: "Or type your own answer in the box below."
      }), Bc.allowOther && !Ic && (0, uc.jsxs)("form", {
        className: "WorldCodeAiQuestionOther",
        onSubmit: cB => {
          cB.preventDefault(), "" !== rB.trim() && nc(rB.trim(), !0)
        },
        children: [(0, uc.jsx)("input", {
          className: "WorldCodeAiInput",
          value: rB,
          maxLength: 200,
          placeholder: "Or type your own answer",
          "aria-label": "Your own answer",
          onChange: cB => {
            sc(cB.target.value)
          },
          onKeyDown: cB => {
            cB.stopPropagation()
          }
        }), (0, uc.jsx)("button", {
          className: "WorldCodeAiSecondaryButton",
          type: "submit",
          disabled: "" === rB.trim(),
          children: "Send"
        })]
      }), (0, uc.jsx)("button", {
        ...Zs.d,
        className: "WorldCodeAiSecondaryButton WorldCodeAiQuestionAiPicks",
        onClick: () => {
          nc(null, !1)
        },
        children: "Let the AI pick"
      })]
    })]
  })
}
const DM = /^(?:const|let|var)\s+CONFIG\s*=\s*\{/gm;

function NM(cB, Bc) {
  let nc = 0;
  for (; nc < Bc;) {
    const Vc = cB[nc],
      Ic = cB[nc + 1];
    let rB = nc + 1;
    if ("/" === Vc && "/" === Ic) {
      const Bc = cB.indexOf("\n", nc);
      rB = -1 === Bc ? cB.length : Bc
    } else if ("/" === Vc && "*" === Ic) {
      const Bc = cB.indexOf("*/", nc + 2);
      rB = -1 === Bc ? cB.length : Bc + 2
    } else if ('"' === Vc || "'" === Vc || "`" === Vc) {
      for (rB = nc + 1; rB < cB.length && cB[rB] !== Vc && ("`" === Vc || "\n" !== cB[rB]);) rB += "\\" === cB[rB] ? 2 : 1;
      rB++
    }
    if (rB > Bc) return !0;
    nc = rB
  }
  return !1
}

function EM(cB) {
  const Bc = cB.slice(1, -1);
  let nc = "";
  for (let Vc = 0; Vc < Bc.length; Vc++) {
    if ("\\" !== Bc[Vc]) {
      nc += Bc[Vc];
      continue
    }
    const cB = Bc[++Vc],
      Ic = {
        n: "\n",
        t: "\t",
        r: "\r",
        "\\": "\\",
        '"': '"',
        "'": "'"
      },
      rB = "u" === cB ? Bc.slice(Vc + 1, Vc + 5) : "x" === cB ? Bc.slice(Vc + 1, Vc + 3) : "";
    if (cB in Ic) nc += Ic[cB];
    else {
      if ("" === rB || !/^[\da-f]+$/i.test(rB) || rB.length !== ("u" === cB ? 4 : 2)) return null;
      nc += String.fromCharCode(parseInt(rB, 16)), Vc += rB.length
    }
  }
  return nc
}

function oM(cB) {
  const Bc = function(cB) {
    DM.lastIndex = 0;
    for (let Bc = DM.exec(cB); Bc; Bc = DM.exec(cB))
      if (!NM(cB, Bc.index)) return Bc;
    return null
  }(cB);
  if (!Bc) return [];
  const nc = function(cB, Bc) {
    const nc = [];
    let Vc = 0,
      Ic = Bc;
    for (; Ic < cB.length;) {
      var rB;
      const Bc = cB[Ic];
      if (/\s/.test(Bc)) {
        Ic++;
        continue
      }
      const uc = Ic;
      if ("/" === Bc && "/" === cB[Ic + 1]) {
        const Bc = cB.indexOf("\n", Ic);
        Ic = -1 === Bc ? cB.length : Bc, nc.push({
          type: "comment",
          text: cB.slice(uc + 2, Ic).trim(),
          start: uc,
          end: Ic
        });
        continue
      }
      if ("/" === Bc && "*" === cB[Ic + 1]) {
        const Bc = cB.indexOf("*/", Ic + 2);
        if (-1 === Bc) return null;
        Ic = Bc + 2, nc.push({
          type: "comment",
          text: cB.slice(uc + 2, Bc).trim(),
          start: uc,
          end: Ic
        });
        continue
      }
      if ('"' === Bc || "'" === Bc || "`" === Bc) {
        for (Ic++; Ic < cB.length && cB[Ic] !== Bc;) {
          if ("\\" === cB[Ic]) Ic++;
          else if ("\n" === cB[Ic] && "`" !== Bc) return null;
          Ic++
        }
        if (Ic >= cB.length) return null;
        Ic++, nc.push({
          type: "`" === Bc ? "template" : "string",
          text: cB.slice(uc, Ic),
          start: uc,
          end: Ic
        });
        continue
      }
      const sc = /^-?(?:\d[\d_]*(?:\.\d+)?|\.\d+)(?:e[+-]?\d+)?\b/i.exec(cB.slice(Ic, Ic + 40));
      if (sc && ("-" !== Bc || ":" === (null === (rB = nc[nc.length - 1]) || void 0 === rB ? void 0 : rB.text))) {
        Ic += sc[0].length, nc.push({
          type: "number",
          text: sc[0],
          start: uc,
          end: Ic
        });
        continue
      }
      const Mc = /^[A-Za-z_$][\w$]*/.exec(cB.slice(Ic, Ic + 80));
      if (Mc) Ic += Mc[0].length, nc.push({
        type: "word",
        text: Mc[0],
        start: uc,
        end: Ic
      });
      else if (Ic++, nc.push({
          type: "punct",
          text: Bc,
          start: uc,
          end: Ic
        }), "{[(".includes(Bc)) Vc++;
      else if ("}])".includes(Bc) && (Vc--, 0 === Vc)) return nc
    }
    return null
  }(cB, Bc.index + Bc[0].length - 1);
  if (!nc) return [];
  const Vc = [];
  let Ic, rB = 1;
  for (; rB < nc.length - 1;) {
    var uc, sc, Mc, Pc, qB, Oc;
    const Bc = nc[rB];
    if ("comment" === Bc.type) {
      Ic = Bc.text, rB++;
      continue
    }
    if ("," === Bc.text) {
      rB++;
      continue
    }
    const Tc = Bc,
      fc = "word" === Tc.type ? Tc.text : "string" === Tc.type ? EM(Tc.text) : null;
    if (null === fc || ":" !== (null === (uc = nc[rB + 1]) || void 0 === uc ? void 0 : uc.text)) return [];
    let mB = rB + 2,
      ec = 0;
    const tB = [];
    for (; mB < nc.length - 1;) {
      const cB = nc[mB];
      if (0 === ec && "," === cB.text) break;
      "punct" === cB.type && "{[(".includes(cB.text) ? ec++ : "punct" === cB.type && "}])".includes(cB.text) && ec--, "comment" !== cB.type && tB.push(cB), mB++
    }
    const Sc = tB.at(-1),
      yB = "," === (null === (sc = nc[mB]) || void 0 === sc ? void 0 : sc.text) ? nc[mB + 1] : nc.slice(rB + 2, mB).find((cB => "comment" === cB.type && void 0 !== Sc && cB.start >= Sc.end)),
      zB = "comment" !== (null === yB || void 0 === yB ? void 0 : yB.type) || void 0 === Sc || cB.slice(Sc.end, yB.start).includes("\n") ? void 0 : yB.text,
      pc = 1 === tB.length ? tB[0] : void 0,
      hc = null !== zB && void 0 !== zB ? zB : Ic;
    Ic = void 0;
    const aB = {
      key: fc,
      raw: null !== (Mc = null === pc || void 0 === pc ? void 0 : pc.text) && void 0 !== Mc ? Mc : "",
      start: null !== (Pc = null === pc || void 0 === pc ? void 0 : pc.start) && void 0 !== Pc ? Pc : 0,
      end: null !== (qB = null === pc || void 0 === pc ? void 0 : pc.end) && void 0 !== qB ? qB : 0,
      ...hc ? {
        comment: hc
      } : {}
    };
    if ("number" === (null === pc || void 0 === pc ? void 0 : pc.type)) {
      const cB = Number(pc.text.replace(/_/g, ""));
      Number.isFinite(cB) && Vc.push({
        ...aB,
        kind: "number",
        value: cB
      })
    } else if ("string" === (null === pc || void 0 === pc ? void 0 : pc.type)) {
      const cB = EM(pc.text);
      null !== cB && Vc.push({
        ...aB,
        kind: "string",
        value: cB
      })
    } else "word" !== (null === pc || void 0 === pc ? void 0 : pc.type) || "true" !== pc.text && "false" !== pc.text || Vc.push({
      ...aB,
      kind: "boolean",
      value: "true" === pc.text
    });
    rB = mB, zB && "," === (null === (Oc = nc[rB]) || void 0 === Oc ? void 0 : Oc.text) && (rB += 2)
  }
  return Vc.slice(0, 30)
}

function WM(cB, Bc, nc) {
  const Vc = oM(cB).find((cB => cB.key === Bc.key));
  if (!Vc || Vc.kind !== Bc.kind || Vc.raw !== Bc.raw) return null;
  let Ic;
  if ("number" === Bc.kind) {
    if ("number" !== typeof nc || !Number.isFinite(nc)) return null;
    Ic = String(Number(nc.toPrecision(12)))
  } else if ("boolean" === Bc.kind) {
    if ("boolean" !== typeof nc) return null;
    Ic = nc ? "true" : "false"
  } else {
    if ("string" !== typeof nc) return null;
    const cB = Bc.raw.startsWith("'") ? "'" : '"',
      Vc = "'" === cB ? '"' : "'";
    rB = nc, Ic = `${uc=nc.includes(cB)&&!nc.includes(Vc)?Vc:cB}${rB.slice(0,200).replace(/\\/g,"\\\\").replace('"'===uc?/"/g:/'/g,`\\${uc}`).replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/[\u0000-\u001f\u007f]/g,(cB=>`\\u${cB.charCodeAt(0).toString(16).padStart(4,"0")}`))}${uc}`
  }
  var rB, uc;
  return cB.slice(0, Vc.start) + Ic + cB.slice(Vc.end)
}

function wM(cB) {
  if (!Number.isInteger(cB)) {
    var Bc;
    const nc = Math.min(3, (null !== (Bc = String(cB).split(".")[1]) && void 0 !== Bc ? Bc : "").length);
    return 10 ** -Math.max(1, nc)
  }
  const nc = Math.abs(cB);
  return nc >= 100 ? 10 ** (Math.floor(Math.log10(nc)) - 1) : 1
}

function kP(cB) {
  return cB.comment ? cB.comment.charAt(0).toUpperCase() + cB.comment.slice(1) : function(cB) {
    const Bc = cB.replace(/_/g, " ").replace(/([a-z\d])([A-Z])/g, "$1 $2").trim().toLowerCase();
    return Bc.charAt(0).toUpperCase() + Bc.slice(1)
  }(cB.key)
}

function XM(cB) {
  return "boolean" === typeof cB ? cB ? "on" : "off" : "number" === typeof cB ? String(cB) : cB.length > 20 ? `\u201c${cB.slice(0,19)}\u2026\u201d` : `\u201c${cB}\u201d`
}

function HM(cB) {
  let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "changing";
  if (0 === cB.length) return `Before ${Bc} settings`;
  const nc = 3 === cB.length ? 3 : 2,
    Vc = cB.slice(0, nc).map((cB => `${cB.name} ${cB.from} \u2192 ${cB.to}`)),
    Ic = cB.length > nc ? ` and ${cB.length-nc} more` : "";
  return `Before ${Bc} settings: ${Vc.join(", ")}${Ic}`
}
const FM = /^(?:(?:async\s+)?function\s*\*?\s*([A-Za-z_$][\w$]*)|(?:const|let|var)\s+([A-Za-z_$][\w$]*)|([A-Za-z_$][\w$]*)\s*=(?!=))/gm;

function JM(cB) {
  const Bc = new Set;
  for (const Ic of cB.matchAll(FM)) {
    var nc, Vc;
    Bc.add(null !== (nc = null !== (Vc = Ic[1]) && void 0 !== Vc ? Vc : Ic[2]) && void 0 !== nc ? nc : Ic[3])
  }
  return Bc
}
const jP = {
    cn: ["second", "minute", "timer", "time", "every", "countdown", "wave", "always", "clock"],
    playerCommand: ["command", "/"],
    onPlayerJoin: ["join", "start", "welcome", "spawn", "enter", "arrive"],
    onPlayerLeave: ["OV", "left", "goodbye", "bye", "quit"],
    onPlayerChat: ["chat", "message", "say", "type"],
    onPlayerJump: ["jump"],
    onPlayerClick: ["click", "tap"],
    onPlayerAttack: ["attack", "hit", "swing"],
    onPlayerKilledOtherPlayer: ["kill", "elimination"],
    onPlayerDamagingOtherPlayer: ["hit", "damage", "pvp", "attack", "fight", "hurt"],
    onPlayerKilledMob: ["kill", "mob", "zombie"],
    onPlayerDamagingMob: ["hit", "damage", "mob", "zombie"],
    onMobKilledPlayer: ["die", "death", "mob", "zombie"],
    onMobDamagingPlayer: ["hurt", "damage", "mob", "zombie"],
    onRespawnRequest: ["respawn", "die", "death"],
    onPlayerChangeBlock: ["block", "build", "break", "place", "mine"],
    onPlayerAttemptChangeBlock: ["block", "build", "break", "place", "mine", "protect"],
    onPlayerCraft: ["craft"],
    onPlayerPickedUpItem: ["Vn", "collect"],
    onPlayerDropItem: ["drop"],
    CONFIG: ["setting", "config", "number", "value"]
  },
  RM = new Set("a an and the to of in on at for with from by as is are be it its it's this that these those my your their our me you they them we i so if then than when while each all any some more most less make makes made let lets get gets add adds added put puts change changes changed use uses using new now also just only can could should would will want like say says said tell tells told show shows game player players someone everyone people thing things code function part bit way one two three".split(" "));

function iP(cB) {
  return cB.replace(/([a-z\d])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z0-9/]+/).filter((cB => cB.length >= 3 && !RM.has(cB)))
}

function KM(cB, Bc) {
  return cB.some((cB => Bc.some((Bc => function(cB, Bc) {
    return cB.startsWith(Bc) || Bc.startsWith(cB)
  }(cB, Bc)))))
}

function xP(cB, Bc, nc) {
  const Vc = Bc.toLowerCase();
  return cB.names.some((Bc => {
    const Ic = Object.hasOwn(jP, Bc) ? jP[Bc] : [];
    return !!(Vc.includes(Bc.toLowerCase()) || Ic.includes("/") && Vc.includes("/")) || KM(nc, [...Ic.flatMap(iP), ...iP(cB.plainWords.join(" ")), ...cB.configKeys.flatMap(iP)])
  }))
}
const dM = {
    cn: "Runs all the time",
    playerCommand: "Chat commands like /help",
    onPlayerJoin: "When a player joins",
    onPlayerLeave: "When a player leaves",
    onPlayerChat: "Chat messages",
    onPlayerJump: "When a player jumps",
    onPlayerClick: "When a player clicks",
    onPlayerAttack: "When a player attacks",
    onPlayerKilledOtherPlayer: "When someone gets a kill",
    onPlayerDamagingOtherPlayer: "When players hit each other",
    onPlayerKilledMob: "When a player kills a mob",
    onPlayerDamagingMob: "When a player hits a mob",
    onMobKilledPlayer: "When a mob kills a player",
    onMobDamagingPlayer: "When a mob hits a player",
    onRespawnRequest: "When a player respawns",
    onAttemptKillPlayer: "When a player is about to die",
    onPlayerChangeBlock: "When a player changes a block",
    onPlayerAttemptChangeBlock: "Before a player changes a block",
    onWorldChangeBlock: "When a block changes",
    onPlayerCraft: "When a player crafts",
    onPlayerAttemptCraft: "Before a player crafts",
    onPlayerPickedUpItem: "When a player picks up an item",
    onPlayerDropItem: "When a player drops an item",
    onPlayerOpenedChest: "When a player opens a chest",
    onPlayerAttemptOpenChest: "Before a player opens a chest",
    onPlayerBoughtShopItem: "When a player buys from the shop",
    onPlayerPressedButton: "When a player presses a button",
    onPlayerSelectInventorySlot: "When a player picks a hotbar slot",
    onPlayerEnteredVehicle: "When a player gets in a vehicle",
    onPlayerExitedVehicle: "When a player gets out of a vehicle",
    onPlayerSpawnMob: "When a player spawns a mob",
    onWorldSpawnMob: "When a mob spawns",
    onMobKilledOtherMob: "When a mob kills a mob",
    onPlayerUsedThrowable: "When a player throws something",
    onPlayerPlayedEmote: "When a player emotes",
    onBlockStand: "While a player stands on a block",
    onBlockStandStart: "When a player steps on a block",
    onBlockStandStop: "When a player steps off a block",
    onChestUpdated: "When a chest changes",
    onInventoryUpdated: "When an inventory changes",
    onTaskClaimed: "When a player claims a task",
    onPlayerFinishQTE: "When a player finishes a quick-time event",
    onClose: "When the game closes"
  },
  AM = {
    CONFIG: "Settings"
  };

function GM(cB) {
  return Object.hasOwn(dM, cB) ? dM[cB] : Object.hasOwn(AM, cB) ? AM[cB] : void 0
}
Object.keys(dM);
const cq = /^(?:export\s+)?(?:async\s+)?function\b|^(?:(?:const|let|var)\s+)?\w+\s*=\s*(?:async\s+)?(?:function\b|\([^)]*\)\s*=>|\w+\s*=>)/;

function BP(cB) {
  const Bc = cB.trim();
  return "" === Bc || /^(?:\/\/|\/\*|\*)/.test(Bc)
}

function nP(cB) {
  const Bc = cB.map((cB => cB.replace(/(["'`])(?:\\.|(?!\1).)*\1/g, "").replace(/\/\/.*$/, ""))).join("\n");
  return ["{}", "()", "[]"].every((cB => {
    let [nc, Vc] = cB;
    return Bc.split(nc).length === Bc.split(Vc).length
  }))
}

function VP(cB) {
  const Bc = [];
  let nc = 0;
  const Vc = Vc => {
    if (Vc > nc) {
      var Ic;
      const rB = cB.slice(nc, Vc).find((cB => cq.test(cB)));
      Bc.push({
        name: void 0 === rB ? null : null !== (Ic = uP(rB)) && void 0 !== Ic ? Ic : null,
        lines: cB.slice(nc, Vc)
      }), nc = Vc
    }
  };
  for (let Ic = 1; Ic < cB.length; Ic++)
    if (cq.test(cB[Ic])) {
      let Bc = Ic;
      for (; Bc > nc && BP(cB[Bc - 1]);) Bc--;
      Vc(Bc)
    } return Vc(cB.length), Bc
}

function IP(cB) {
  const Bc = VP(cB.removed),
    nc = VP(cB.added);
  if (Bc.length + nc.length <= 1) return [cB];
  const Vc = [];
  let Ic = 0,
    rB = 0;
  const uc = (cB, Bc, nc) => Bc.slice(nc).some((Bc => Bc.name === cB));
  for (; Ic < Bc.length || rB < nc.length;)
    if (Ic < Bc.length && rB < nc.length && Bc[Ic].name === nc[rB].name) Vc.push({
      removed: Bc[Ic++].lines,
      added: nc[rB++].lines
    });
    else if (Ic < Bc.length && !uc(Bc[Ic].name, nc, rB)) Vc.push({
    removed: Bc[Ic++].lines,
    added: []
  });
  else {
    if (!(rB < nc.length) || uc(nc[rB].name, Bc, Ic)) {
      Vc.push({
        removed: Bc.slice(Ic).flatMap((cB => cB.lines)),
        added: nc.slice(rB).flatMap((cB => cB.lines))
      });
      break
    }
    Vc.push({
      removed: [],
      added: nc[rB++].lines
    })
  }
  const sc = [];
  for (const Mc of Vc) {
    const cB = sc[sc.length - 1],
      Bc = [...Mc.removed, ...Mc.added].every(BP);
    cB && (Bc || [...cB.removed, ...cB.added].every(BP)) ? sc[sc.length - 1] = {
      removed: [...cB.removed, ...Mc.removed],
      added: [...cB.added, ...Mc.added]
    } : sc.push(Mc)
  }
  return sc.every((cB => nP(cB.removed) && nP(cB.added))) ? sc : [cB]
}

function rq(cB, Bc) {
  const nc = [];
  for (const rB of DV(cB, Bc)) {
    const cB = nc[nc.length - 1];
    "same" === rB.kind ? nc.push({
      kind: "same",
      text: rB.text
    }) : "hunk" === (null === cB || void 0 === cB ? void 0 : cB.kind) ? cB[rB.kind].push(rB.text) : nc.push({
      kind: "hunk",
      removed: "removed" === rB.kind ? [rB.text] : [],
      added: "added" === rB.kind ? [rB.text] : []
    })
  }
  const Vc = [];
  let Ic = 0;
  for (let rB = 0; rB < nc.length; rB++) {
    const cB = nc[rB];
    if ("same" === cB.kind) {
      Vc.push(cB);
      continue
    }
    let Bc = IP(cB);
    if (1 === Bc.length) {
      let Vc = rB + 1;
      const Ic = [];
      for (; Vc < nc.length; Vc++) {
        const cB = nc[Vc];
        if ("same" !== cB.kind || !/^[\s})\];,]+$/.test(cB.text)) break;
        Ic.push(cB.text)
      }
      const uc = Ic.length > 0 ? IP({
        removed: [...cB.removed, ...Ic],
        added: [...cB.added, ...Ic]
      }) : Bc;
      uc.length > 1 && (Bc = uc, rB = Vc - 1)
    }
    for (const nc of Bc) Vc.push({
      kind: "hunk",
      index: Ic++,
      removed: nc.removed,
      added: nc.added
    })
  }
  return Vc
}

function uP(cB) {
  var Bc, nc;
  const Vc = /^\s*(?:export\s+)?(?:async\s+)?function\s*\*?\s*(\w+)|^\s*(?:export\s+)?(?:const|let|var|class)\s+(\w+)|^(\w+)\s*=(?!=)/.exec(cB);
  return Vc ? null !== (Bc = null !== (nc = Vc[1]) && void 0 !== nc ? nc : Vc[2]) && void 0 !== Bc ? Bc : Vc[3] : void 0
}

function sP(cB) {
  const Bc = uP(cB);
  if (!Bc || /^\s/.test(cB)) return;
  return /^(?:export\s+)?(?:async\s+)?function\b/.test(cB) || /=\s*(?:async\s+)?(?:function\b|\(|\w+\s*=>)/.test(cB) || "CONFIG" === Bc ? GM(Bc) : void 0
}

function MP(cB) {
  const Bc = new Map;
  for (const nc of cB) {
    const cB = sP(nc),
      Vc = uP(nc);
    cB && Vc && Bc.set(Vc, cB)
  }
  return Bc
}

function PP(cB) {
  return [...new Set(cB.flatMap((cB => {
    const Bc = /^\s/.test(cB) ? void 0 : uP(cB);
    return Bc ? [Bc] : []
  })))]
}

function qq(cB) {
  var Bc;
  return cB.length <= 1 ? null !== (Bc = cB[0]) && void 0 !== Bc ? Bc : "" : `${cB.slice(0,-1).join(", ")} and ${cB[cB.length-1]}`
}

function OP(cB) {
  return cB.replace(/_/g, " ").replace(/([a-z\d])([A-Z])/g, "$1 $2").trim().toLowerCase()
}

function TP(cB) {
  return cB.charAt(0).toUpperCase() + cB.slice(1)
}
const fP = new Set("api const let var function return if else for of in new true false null undefined this typeof while break continue playerId attacker killed damaged command ms Math Date JSON String Number Object Array console length push".split(" "));

function mq(cB) {
  return [...new Set(cB.flatMap((cB => {
    const Bc = cB.replace(/(["'`])(?:\\.|(?!\1).)*\1/g, "");
    return (0, qn.e)(Bc, /[A-Za-z_$][\w$]{2,}(?!\s*:(?!:))/g, qn.l).map((cB => cB[0])).filter((cB => !fP.has(cB)))
  })))]
}

function eP(cB, Bc) {
  var nc;
  const Vc = (null !== (nc = cB.parts) && void 0 !== nc ? nc : []).map((cB => {
      return {
        why: cB.why,
        lines: (Bc = cB.code, new Set(Bc.split("\n").map((cB => cB.trim())).filter((cB => cB.length > 1))))
      };
      var Bc
    })),
    Ic = rq(cB.before, cB.after);
  let rB = 1;
  const uc = Ic.flatMap(((cB, Bc) => {
      if ("hunk" !== cB.kind) return rB++, [];
      let nc;
      for (const Ic of Vc) {
        const Bc = cB.added.filter((cB => Ic.lines.has(cB.trim()))).length;
        Bc > 0 && (!nc || Bc > nc.score) && (nc = {
          why: Ic.why,
          score: Bc
        })
      }
      const uc = function(cB, Bc, nc) {
          const Vc = PP(cB.added),
            Ic = PP(cB.removed),
            rB = Vc.filter((cB => Ic.includes(cB))),
            uc = Vc.filter((cB => !rB.includes(cB))),
            sc = Ic.filter((cB => !rB.includes(cB))),
            Mc = new Map([...MP(cB.removed), ...MP(cB.added)]),
            Pc = [...rB, ...uc].filter((cB => Mc.has(cB))),
            qB = (Bc, nc) => {
              return {
                names: Bc,
                configKeys: Bc.includes("CONFIG") ? (Vc = cB.added, Vc.flatMap((cB => {
                  const Bc = /^\s+(\w+)\s*:/.exec(cB);
                  return Bc ? [Bc[1]] : []
                }))) : [],
                plainWords: Bc.flatMap((cB => {
                  const Bc = Mc.get(cB);
                  return Bc ? [Bc] : []
                })),
                onlyAdds: nc,
                uses: mq(cB.added),
                takesOut: sc,
                removedUses: mq(cB.removed)
              };
              var Vc
            },
            Oc = new Set([...cB.added, ...cB.removed].flatMap((cB => {
              var Bc;
              const nc = /^\s*(?:export\s+)?(?:async\s+)?function\s*\*?\s*(\w+)|^(\w+)\s*=\s*(?:async\s+)?(?:function\b|\([^)]*\)\s*=>|\w+\s*=>)/.exec(cB);
              return nc ? [null !== (Bc = nc[1]) && void 0 !== Bc ? Bc : nc[2]] : []
            }))),
            Tc = cB => {
              const Bc = OP(cB);
              return Oc.has(cB) ? `"${Bc}"` : Bc
            },
            fc = [...rB, ...uc, ...sc];
          if (fc.some((cB => Mc.has(cB)))) {
            const cB = cB => {
                const Bc = cB.filter((cB => Mc.has(cB)));
                return qq(Bc.length > 0 ? Bc.map((cB => {
                  var Bc;
                  return null !== (Bc = Mc.get(cB)) && void 0 !== Bc ? Bc : cB
                })) : cB.map(Tc))
              },
              Bc = [rB.length > 0 ? `${cB(rB)} \u2014 changed` : "", uc.length > 0 ? `${cB(uc)} \u2014 added` : "", sc.length > 0 ? `${cB(sc)} \u2014 taken out` : ""].filter(Boolean),
              nc = [...fc.filter((cB => Mc.has(cB))), ...fc.filter((cB => !Mc.has(cB)))],
              Vc = Pc.every((cB => uc.includes(cB)));
            return {
              named: TP(Bc.join("; ")),
              codeNames: nc,
              takesOut: sc,
              isPlain: !0,
              about: qB(Pc, Vc)
            }
          }
          const mB = [rB.length > 0 ? `changes ${qq(rB.map(Tc))}` : "", uc.length > 0 ? `adds ${qq(uc.map(Tc))}` : "", sc.length > 0 ? `takes out ${qq(sc.map(Tc))}` : ""].filter(Boolean);
          if (mB.length > 0) return {
            named: TP(mB.join(", ")),
            codeNames: fc,
            takesOut: sc,
            isPlain: !1,
            about: qB([], !1)
          };
          const ec = Bc.flatMap((cB => "same" === cB.kind ? [cB.text] : cB.added));
          for (let tB = ec.length - 1; tB >= 0; tB--) {
            const cB = ec[tB],
              Bc = /^\s/.test(cB) ? void 0 : uP(cB);
            if (!Bc && "" !== cB.trim() && !/^\s/.test(cB) && !/^(?:\/\/|\/\*|\*)/.test(cB.trim())) break;
            if (Bc) {
              const nc = sP(cB);
              return nc ? (Mc.set(Bc, nc), {
                named: `${nc} \u2014 changed`,
                codeNames: [Bc],
                takesOut: [],
                isPlain: !0,
                about: qB([Bc], !1)
              }) : {
                named: `Changes ${/\bfunction\b|=>/.test(cB)?`"${OP(Bc)}"`:OP(Bc)}`,
                codeNames: [Bc],
                takesOut: [],
                isPlain: !1,
                about: qB([], !1)
              }
            }
          }
          return {
            named: 0 === cB.added.length ? `Takes out lines from line ${nc}` : `Changes line ${nc}`,
            codeNames: [],
            takesOut: [],
            isPlain: !1,
            about: qB([], !1)
          }
        }(cB, Ic.slice(0, Bc), rB),
        sc = rB;
      return rB += cB.added.length, [{
        index: cB.index,
        removed: cB.removed,
        added: cB.added,
        line: sc,
        ...uc,
        ...nc ? {
          why: nc.why
        } : {}
      }]
    })),
    sc = function(cB, Bc) {
      const nc = Bc ? iP(Bc) : [];
      if (!Bc || 0 === nc.length) return cB.map((() => {}));
      const Vc = cB.map((cB => xP(cB, Bc, nc) || void 0 !== cB.why && KM(nc, iP(cB.why)))),
        Ic = new Set(cB.flatMap(((cB, Bc) => {
          var nc;
          return Vc[Bc] && null !== (nc = cB.uses) && void 0 !== nc ? nc : []
        }))),
        rB = cB.map(((cB, Bc) => {
          var nc;
          return Vc[Bc] || (null !== (nc = cB.uses) && void 0 !== nc ? nc : []).some((cB => Ic.has(cB)))
        }));
      if (!Vc.includes(!0)) return cB.map((() => {}));
      const uc = new Set(cB.flatMap((cB => cB.names)));
      return cB.map(((cB, Vc) => {
        if (0 === cB.names.length) {
          var sc, Mc;
          const Vc = (null !== (sc = cB.takesOut) && void 0 !== sc ? sc : []).filter((cB => ("CONFIG" === cB || Object.hasOwn(jP, cB)) && !uc.has(cB)));
          return 0 === Vc.length || xP({
            ...cB,
            names: Vc
          }, Bc, nc) || void 0 !== cB.why && KM(nc, iP(cB.why)) || (null !== (Mc = cB.removedUses) && void 0 !== Mc ? Mc : []).some((cB => Ic.has(cB))) ? void 0 : "takesOut"
        }
        if (!rB[Vc]) return cB.onlyAdds ? "adds" : "changes"
      }))
    }(uc.map((cB => ({
      ...cB.about,
      ...cB.why ? {
        why: cB.why
      } : {}
    }))), Bc),
    Mc = uc.map(((cB, Bc) => {
      let {
        named: nc,
        codeNames: Vc,
        isPlain: Ic,
        about: rB,
        ...Mc
      } = cB;
      const Pc = void 0 !== Mc.why && 1 === uc.filter((cB => cB.why === Mc.why)).length && Mc.why ? Mc.why.charAt(0).toUpperCase() + Mc.why.slice(1) : void 0,
        qB = !Ic && Pc ? Pc : nc,
        Oc = sc[Bc],
        Tc = Oc ? qB.replace(/ \u2014 (added|changed|taken out)$/, "") : qB;
      return {
        ...Mc,
        label: Tc,
        codeNames: Vc,
        ...Ic && Pc ? {
          detail: Pc
        } : {},
        ...Oc ? {
          also: Oc
        } : {}
      }
    })),
    Pc = cB => {
      var Bc, nc;
      return `${null!==(Bc=cB.also)&&void 0!==Bc?Bc:""}|${cB.label}|${null!==(nc=cB.detail)&&void 0!==nc?nc:""}`
    };
  return Mc.map((cB => {
    let {
      line: Bc,
      ...nc
    } = cB;
    return Mc.filter((cB => Pc(cB) === Pc(nc))).length > 1 ? {
      ...nc,
      label: `${nc.label} (line ${Bc})`
    } : nc
  }))
}
const tq = {
    added: "adds",
    changed: "changes",
    updated: "updates",
    removed: "takes out",
    made: "makes",
    put: "puts",
    set: "sets",
    fixed: "fixes",
    gave: "gives",
    moved: "moves"
  },
  SP = Object.keys(tq).join("|"),
  yq = new Set(["is", "its", "this", "was", "as", "us", "always", "less", "plus", "across", "yours", "theirs"]),
  zq = /(?:^|[,;:(]|\b(?:and|so|but|or|then|right|because|until|since|just|even))\s*$/i;
const pP = /```[\s\S]*?(?:```|$)|`[^`\n]*`|"[^"\n]*"|\u201c[^\u201d\n]*\u201d|['\u2018][^'\u2019\n]*['\u2019](?![\w])/g;

function hP(cB) {
  return !/^['\u2018]/.test(cB[0]) || !(0, qn.c)(cB, "\\w\u2019'")
}
const aq = /\b(?:last time|before|earlier|previous(?:ly)?|already|in my last|a mistake|an error|wrong)\b/i;

function lP(cB) {
  const Bc = function(cB) {
      return (0, qn.e)(cB, pP, hP).map((cB => [cB.index, cB.index + cB[0].length]))
    }(cB),
    nc = cB => Bc.some((Bc => {
      let [nc, Vc] = Bc;
      return cB >= nc && cB < Vc
    })),
    Vc = [];
  for (const rB of cB.matchAll(new RegExp(`(^|[.!?]\\s+|\\n\\s*)I(?:'ve|\u2019ve| have)?( also)? (${SP})\\b`, "g"))) {
    const Bc = rB.index + rB[1].length,
      Ic = rB.index + rB[0].length,
      uc = cB.slice(Ic),
      sc = /[.!?](?=\s|$)|\n/.exec(uc),
      Mc = sc ? uc.slice(0, sc.index) : uc;
    if (!nc(Bc) && !aq.test(Mc)) {
      Vc.push({
        at: Bc,
        length: Ic - Bc,
        words: `${rB[2]?"It also":"This"} ${tq[rB[3]]}`
      });
      for (const cB of Mc.matchAll(new RegExp(`\\b(and|then|also) (${SP})\\b(?!\\s+(?:of|by|from|with|when|if|in|on|at|to|for|so|as|after|before|into)\\b)`, "g"))) nc(Ic + cB.index) || Vc.push({
        at: Ic + cB.index,
        length: cB[0].length,
        words: `${cB[1]} ${tq[cB[2]]}`
      })
    }
  }
  for (const rB of cB.matchAll(/\bnow ([a-z]{2,}s)\b/g)) {
    const Bc = Math.max(cB.lastIndexOf(".", rB.index), cB.lastIndexOf("\n", rB.index)) + 1,
      uc = /[.!?](?=\s|$)|\n/.exec(cB.slice(rB.index)),
      sc = cB.slice(Bc, uc ? rB.index + uc.index : cB.length),
      Mc = Vc.some((cB => rB.index < cB.at + cB.length && cB.at < rB.index + rB[0].length)),
      Pc = zq.test(cB.slice(Bc, rB.index));
    yq.has(rB[1]) || Pc || nc(rB.index) || aq.test(sc) || Mc || Vc.push({
      at: rB.index,
      length: rB[0].length,
      words: `will ${Ic=rB[1],"has"===Ic?"have":Ic.endsWith("ies")?`${Ic.slice(0,-3)}y`:/(?:ch|sh|x|zz|o|ss)es$/.test(Ic)?Ic.slice(0,-2):Ic.slice(0,-1)}`
    })
  }
  var Ic;
  return Vc.sort(((cB, Bc) => Bc.at - cB.at)).reduce(((cB, Bc) => cB.slice(0, Bc.at) + Bc.words + cB.slice(Bc.at + Bc.length)), cB)
}

function YP(cB) {
  let {
    path: Bc,
    field: nc,
    onWrite: Ic,
    isChanged: rB
  } = cB;
  const [sc, Mc] = (0, Vc.useState)(null), [Pc, qB] = (0, Vc.useState)(null), Oc = kP(nc), [Tc, fc] = (0, Vc.useState)(!1), mB = (0, Vc.useRef)(null), ec = async cB => {
    if (Ic && !Tc) {
      Mc(null), fc(!0);
      try {
        const uc = await Ic(Bc, nc, cB);
        var Vc, rB;
        if (qB(uc ? null : "Your code changed here. Look at it again."), uc) null === (Vc = mB.current) || void 0 === Vc || null === (rB = Vc.scrollIntoView) || void 0 === rB || rB.call(Vc, {
          block: "nearest"
        })
      } finally {
        fc(!1)
      }
    }
  }, tB = () => {
    if (null !== sc)
      if ("number" === nc.kind) {
        const cB = Number(sc.trim());
        if ("" === sc.trim() || !Number.isFinite(cB)) return qB("That needs to be a number."), void Mc(null);
        ec(cB)
      } else ec(sc)
  }, Sc = `WorldCodeAiSetting-${Bc}-${nc.key}`;
  return (0, uc.jsxs)("li", {
    ref: mB,
    className: "WorldCodeAiSetting",
    children: [(0, uc.jsxs)("label", {
      className: "WorldCodeAiSettingLabel",
      htmlFor: Sc,
      children: [Oc, nc.comment && (0, uc.jsx)("code", {
        children: nc.key
      })]
    }), "boolean" === nc.kind ? (0, uc.jsxs)("label", {
      className: "WorldCodeAiSwitch",
      children: [(0, uc.jsx)("input", {
        id: Sc,
        type: "checkbox",
        role: "switch",
        checked: !0 === nc.value,
        disabled: !Ic,
        onChange: cB => {
          ec(cB.target.checked)
        }
      }), (0, uc.jsx)("span", {
        children: nc.value ? "On" : "Off"
      })]
    }) : (0, uc.jsxs)("div", {
      className: "WorldCodeAiSettingControl",
      children: ["number" === nc.kind && (0, uc.jsx)("button", {
        className: "WorldCodeAiSecondaryButton WorldCodeAiStepper",
        "aria-label": `Less ${Oc}`,
        disabled: !Ic,
        onClick: () => {
          ec(nc.value - wM(nc.value))
        },
        children: "\u2212"
      }), (0, uc.jsx)("input", {
        id: Sc,
        className: "WorldCodeAiInput WorldCodeAiSettingInput",
        type: "number" === nc.kind ? "number" : "text",
        inputMode: "number" === nc.kind ? "decimal" : void 0,
        maxLength: "string" === nc.kind ? 200 : void 0,
        value: null !== sc && void 0 !== sc ? sc : String(nc.value),
        disabled: !Ic,
        onChange: cB => {
          Mc(cB.target.value)
        },
        onBlur: tB,
        onKeyDown: cB => {
          cB.stopPropagation(), "Enter" === cB.key ? tB() : "Escape" === cB.key && Mc(null)
        }
      }), "number" === nc.kind && (0, uc.jsx)("button", {
        className: "WorldCodeAiSecondaryButton WorldCodeAiStepper",
        "aria-label": `More ${Oc}`,
        disabled: !Ic,
        onClick: () => {
          ec(nc.value + wM(nc.value))
        },
        children: "+"
      })]
    }), Pc && (0, uc.jsx)("span", {
      className: "WorldCodeAiAboutError",
      children: Pc
    }), rB && !Pc && (0, uc.jsx)("span", {
      className: "WorldCodeAiSettingDone",
      children: "\u2713 Changed in your code"
    })]
  })
}

function LP(cB) {
  let {
    files: Bc,
    onWrite: nc,
    onTryIt: Vc,
    onUndo: Ic,
    before: rB
  } = cB;
  const sc = Object.entries(Bc).flatMap((cB => {
    let [Bc, nc] = cB;
    const Vc = oM(nc);
    return Vc.length > 0 ? [{
      path: Bc,
      fields: Vc
    }] : []
  }));
  return (0, uc.jsxs)("div", {
    className: "WorldCodeAiHistory WorldCodeAiSettings",
    children: [(0, uc.jsx)("div", {
      className: "WorldCodeAiHistoryTitle",
      children: (0, uc.jsx)("span", {
        children: "Settings of my game"
      })
    }), 0 === sc.length ? (0, uc.jsx)("p", {
      className: "WorldCodeAiHint",
      children: "Your code has no settings yet. Settings are the numbers and messages at the top of your code, in CONFIG."
    }) : (0, uc.jsxs)(uc.Fragment, {
      children: [(0, uc.jsx)("p", {
        className: "WorldCodeAiAboutNote",
        children: "Changes go into your code straight away. Try them in your world."
      }), (Vc || Ic) && (0, uc.jsxs)("div", {
        className: "WorldCodeAiSettingActions",
        children: [Vc && (0, uc.jsx)("button", {
          className: "WorldCodeAiPrimaryButton",
          onClick: Vc,
          children: "Try it in my world"
        }), Ic && (0, uc.jsx)("button", {
          className: "WorldCodeAiLinkButton",
          onClick: Ic,
          children: "Undo these changes"
        })]
      }), sc.map((cB => {
        let {
          path: Bc,
          fields: Vc
        } = cB;
        return (0, uc.jsxs)("div", {
          children: [sc.length > 1 && (0, uc.jsx)("p", {
            className: "WorldCodeAiAboutHeading",
            children: Bc
          }), (0, uc.jsx)("ul", {
            className: "WorldCodeAiSettingList",
            children: Vc.map((cB => {
              const Vc = void 0 === (null === rB || void 0 === rB ? void 0 : rB[Bc]) ? void 0 : oM(rB[Bc]).find((Bc => Bc.key === cB.key));
              return (0, uc.jsx)(YP, {
                isChanged: !!rB && (null === Vc || void 0 === Vc ? void 0 : Vc.value) !== cB.value,
                path: Bc,
                field: cB,
                onWrite: nc
              }, cB.key)
            }))
          })]
        }, Bc)
      }))]
    })]
  })
}
const gq = /<tool_call\b|<function=|```|^\s*\{|<\|/m;
const UP = ["Reading your code", "Planning", "Writing", "Safety check"];

function bq(cB) {
  if (cB <= 1e4) return "It starts in a few seconds.";
  const Bc = 10 * Math.ceil(cB / 1e4);
  return Bc >= 60 ? "It starts in about a minute." : `It starts in about ${Bc} seconds.`
}
var ZP = nc(5465);

function QP(cB, Bc) {
  const nc = new Map;
  for (const Ic of lI(cB)) {
    var Vc;
    nc.set(Ic, (null !== (Vc = nc.get(Ic)) && void 0 !== Vc ? Vc : 0) + 1)
  }
  return lI(Bc).filter((cB => {
    var Bc;
    const Vc = null !== (Bc = nc.get(cB)) && void 0 !== Bc ? Bc : 0;
    return nc.set(cB, Vc - 1), Vc <= 0
  }))
}

function CP(cB, Bc) {
  return new Promise(((nc, Vc) => {
    if (null !== Bc && void 0 !== Bc && Bc.aborted) return void Vc((0, ZP.d)(Bc));
    const Ic = setTimeout(nc, cB);
    null === Bc || void 0 === Bc || Bc.addEventListener("abort", (() => {
      clearTimeout(Ic), Vc((0, ZP.d)(Bc))
    }), {
      once: !0
    })
  }))
}
async function vq(cB, Bc, nc, Vc, Ic) {
  const rB = new Set;
  for (; Date.now() < nc;) {
    var uc;
    const sc = SI.filter((cB => !rB.has(cB)));
    if (0 === sc.length) return null;
    const Mc = wI.firstFreeAt(sc);
    if (Mc > Date.now()) {
      if (Mc > nc) return null;
      null === Ic || void 0 === Ic || Ic(Mc), await CP(Mc - Date.now(), Vc)
    }
    const Pc = null !== (uc = sc.find((cB => wI.freeAt(cB) <= Date.now()))) && void 0 !== uc ? uc : sc[0],
      qB = await au(Pc, [{
        role: "user",
        content: cB
      }, {
        role: "assistant",
        content: Bc
      }], Vc);
    if (null === qB) rB.add(Pc);
    else if ("busy" !== qB) return qB
  }
  return null
}
async function DP(cB, Bc, nc, Vc) {
  const Ic = function(cB) {
    const Bc = [cB.text, ...cB.question ? [cB.question.question, ...cB.question.choices] : [], ...cB.plan, ...cB.notes, ...cB.actions.flatMap((cB => "switchToWorldCode" === cB.kind && cB.request ? [cB.request] : [])), ...cB.lookups.flatMap((cB => Object.values(cB.args).filter((cB => void 0 !== cB)))), ...cB.changes.flatMap((cB => {
      var Bc, nc;
      return [...null !== (Bc = cB.why) && void 0 !== Bc ? Bc : [], ...(null !== (nc = cB.parts) && void 0 !== nc ? nc : []).map((cB => cB.why)), ...QP(cB.before, cB.after)]
    })), ...cB.worldCode.flatMap((cB => lI(cB)))];
    return Bc.map((cB => cB.trim())).filter((cB => "" !== cB)).join("\n")
  }(Bc);
  if ("" === Ic) return "ok";
  const rB = Date.now() + 75e3;
  for (const uc of function(cB) {
      const Bc = [];
      let nc = cB;
      for (; nc.length > yr;) {
        const cB = nc.lastIndexOf("\n", yr),
          Vc = cB > 6e3 ? cB : yr;
        Bc.push(nc.slice(0, Vc)), nc = nc.slice(Vc)
      }
      return [...Bc, nc]
    }(Ic)) {
    const Bc = await ar(uc, (Bc => vq(cB, Bc, rB, nc, Vc)));
    if ("ok" !== Bc) return Bc
  }
  return "ok"
}
const NP = "worldCodeAiAnswerTimes";

function EP(cB, Bc) {
  var nc;
  const Vc = Bc && null !== (nc = cB[Bc]) && void 0 !== nc ? nc : [],
    Ic = Vc.length >= 2 ? Vc : Object.values(cB).flat();
  return Ic.length < 2 ? "Usually under a minute." : `Usually ${function(cB){const Bc=Math.max(5,5*Math.round(cB/5e3));if(Bc<60)return`about ${Bc} seconds`;const nc=10*Math.round(cB/1e4),Vc=Math.floor(nc/60),Ic=nc%60,rB=`${Vc} ${1===Vc?"minute":"minutes"}`;return 0===Ic?`about ${rB}`:`about ${rB} ${Ic} seconds`}(function(cB){const Bc=[...cB].sort(((cB,Bc)=>cB-Bc)),nc=Math.floor(Bc.length/2);return Bc.length%2===1?Bc[nc]:(Bc[nc-1]+Bc[nc])/2}(Ic))}.`
}
var oP = nc(35521);

function WP(cB, Bc) {
  const nc = cB.split("\n"),
    Vc = Bc.split("\n"),
    Ic = Vc.findIndex(((cB, Bc) => cB !== nc[Bc]));
  return (-1 === Ic ? Math.min(nc.length, Vc.length) - 1 : Ic) + 1
}

function wP(cB, Bc) {
  return cB.filter((cB => cB.path !== Bc)).map((cB => ({
    path: cB.path,
    line: WP(cB.before, cB.after)
  })))
}

function kq(cB) {
  return `Moving to ${cB} code\u2026`
}

function XP(cB) {
  return cB.fromLine === cB.toLine ? `line ${cB.fromLine}` : `lines ${cB.fromLine}-${cB.toLine}`
}

function HP(cB) {
  const Bc = cB.text.length > 4e3 ? `${cB.text.slice(0,4e3)}\n...` : cB.text;
  return `The part I picked (${cB.path}, ${XP(cB)}):\n\`\`\`\n${Bc}\n\`\`\``
}

function FP(cB) {
  let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
  switch (cB.action) {
    case "explain":
      return `Explain what this part of my code does, in 2 or 3 short sentences. Don't change any code.\n\n${HP(cB)}`;
    case "fix":
      return `Fix what is wrong in this part of my code. Change only what it needs.\n\n${HP(cB)}`;
    case "change":
      return `${Bc.trim()}\n\nChange only this part of my code, unless more is needed for it to work.\n\n${HP(cB)}`
  }
}

function JP(cB) {
  let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
  const nc = XP(cB);
  switch (cB.action) {
    case "explain":
      return `Explain ${nc}`;
    case "fix":
      return `Fix ${nc}`;
    case "change":
      return `${Bc.trim()} (${nc})`
  }
}
var jq = nc(39353),
  RP = nc(3802),
  iq = nc(39345),
  KP = nc(39350),
  xq = nc(39347);

function dP(cB) {
  return cB ? "/worldCodeAiCheck.ts" : "/worldCodeAiCheck.js"
}
const AP = new Set([2345, 2559, 2353, 2554]),
  GP = new Set([2304, 2552]),
  cO = new Set(["Date", "isNaN", "isFinite", "parseInt", "parseFloat"]),
  Bq = {};

function nq() {
  let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  const Bc = cB ? "codeBlock" : arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "worldCodeTs" : "worldCode";
  let nc = Bq[Bc];
  if (!nc) {
    const Vc = dP("worldCodeTs" === Bc),
      Ic = new Map(cB ? [
        [Vc, "\n"],
        ["/globals.d.ts", iq.c],
        ["/lib.d.ts", KP.c]
      ] : [
        [Vc, "\n"],
        ["/node_modules/@bloxd/index.d.ts", RP.default],
        ["/globals.d.ts", xq.b],
        ["/lib.d.ts", KP.c]
      ]);
    nc = jq.g(jq.c(Ic), [...Ic.keys()], lc(), {
      allowJs: !0,
      checkJs: !0,
      noLib: !0,
      strict: !1,
      module: lc().ModuleKind.ESNext,
      moduleResolution: lc().ModuleResolutionKind.Bundler,
      target: lc().ScriptTarget.ES2015,
      allowUnreachableCode: !1,
      paths: {
        "@bloxd": ["/node_modules/@bloxd/index.d.ts"]
      }
    }), Bq[Bc] = nc
  }
  return nc
}

function Vq(cB, Bc, nc) {
  let Vc;
  const Ic = rB => {
    Bc < rB.getStart(cB) || Bc >= rB.getEnd() || (lc().isCallExpression(rB) && (Bc >= rB.expression.getEnd() || nc <= rB.expression.getEnd()) && (Vc = rB), lc().forEachChild(rB, Ic))
  };
  return Ic(cB), Vc && lc().isPropertyAccessExpression(Vc.expression) && "api" === Vc.expression.expression.getText(cB) ? Vc : void 0
}

function Iq(cB, Bc, nc) {
  let Vc;
  const Ic = rB => {
    Bc < rB.getStart(cB) || nc > rB.getEnd() || (Vc = rB, lc().forEachChild(rB, Ic))
  };
  return Ic(cB), Vc
}

function rO(cB) {
  return cB.toLowerCase().replace(/[^a-z0-9]/g, "")
}

function uq(cB, Bc) {
  const nc = rO(cB);
  if (!nc) return;
  const Vc = Bc.find((cB => rO(cB) === nc));
  if (Vc) return `"${Vc}"`;
  const Ic = Bc.filter((cB => {
    const Bc = rO(cB);
    return Bc.includes(nc) || nc.includes(Bc)
  })).sort(((cB, Bc) => cB.length - Bc.length));
  if (Ic.length > 0) return Ic.slice(0, 2).map((cB => `"${cB}"`)).join(" or ");
  const rB = new Set(cB.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean));
  let uc;
  for (const sc of Bc) {
    const cB = sc.toLowerCase().split(/[^a-z0-9]+/).filter((cB => rB.has(cB))).length;
    cB > 0 && (!uc || cB > uc.shared) && (uc = {
      option: sc,
      shared: cB
    })
  }
  return uc ? `"${uc.option}"` : void 0
}

function sq(cB, Bc) {
  var nc;
  const Vc = cB.getPropertiesOfType(cB.getNonNullableType(Bc)),
    Ic = null !== (nc = Vc.find((cB => "color" === cB.name))) && void 0 !== nc ? nc : Vc[0];
  if (!Ic) return;
  const rB = cB.typeToString(cB.getNonNullableType(cB.getTypeOfSymbol(Ic))),
    uc = "color" === Ic.name ? '"red"' : rB.includes("number") ? "1" : "boolean" === rB ? "true" : '"..."';
  return `{ ${Ic.name}: ${uc} }`
}

function Mq(cB) {
  return cB.isUnion() ? cB.types.every((cB => 0 !== (cB.flags & lc().TypeFlags.Object))) : 0 !== (cB.flags & lc().TypeFlags.Object)
}

function Pq(cB) {
  for (let Bc = cB; Bc && !lc().isSourceFile(Bc); Bc = Bc.parent)
    if (lc().isExpressionWithTypeArguments(Bc)) {
      if (lc().isHeritageClause(Bc.parent) && Bc.parent.token === lc().SyntaxKind.ImplementsKeyword) return !0
    } else if (lc().isTypeNode(Bc)) return !0;
  return !1
}

function qO(cB) {
  var Bc;
  let nc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    Vc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  const Ic = dP(Vc && !nc),
    rB = nq(nc, Vc);
  rB.updateFile(Ic, cB || "\n");
  const uc = rB.getSourceFile(Ic),
    sc = null === (Bc = rB.languageService.getProgram()) || void 0 === Bc ? void 0 : Bc.getTypeChecker();
  if (!uc || !sc) return [];
  const Mc = new Set,
    Pc = rB.languageService.getSyntacticDiagnostics(Ic)[0];
  if (void 0 !== (null === Pc || void 0 === Pc ? void 0 : Pc.start)) {
    var qB, Oc;
    const Bc = uc.getLineAndCharacterOfPosition(Pc.start).line,
      nc = null !== (qB = null === (Oc = cB.split("\n")[Bc]) || void 0 === Oc ? void 0 : Oc.trim()) && void 0 !== qB ? qB : "",
      Vc = nc.length > 40 ? `${nc.slice(0,37)}...` : nc,
      Ic = lc().flattenDiagnosticMessageText(Pc.messageText, " ").replace(/\.$/, "");
    Mc.add(`Line ${Bc+1} stops all of this code from running: "${Vc}" (${Ic}).`)
  }
  const Tc = new Set;
  for (const vB of rB.languageService.getSemanticDiagnostics(Ic)) {
    var fc, mB, ec, tB, Sc;
    if (7027 === vB.code && void 0 !== vB.start) {
      var yB, zB;
      const Bc = uc.getLineAndCharacterOfPosition(vB.start).line,
        nc = null !== (yB = null === (zB = cB.split("\n")[Bc]) || void 0 === zB ? void 0 : zB.trim()) && void 0 !== yB ? yB : "",
        Vc = nc.length > 40 ? `${nc.slice(0,37)}...` : nc;
      Mc.add(`Line ${Bc+1} never runs: "${Vc}" comes after a return, which ends the function first.`);
      continue
    }
    if (GP.has(vB.code) && void 0 !== vB.start) {
      var pc, hc;
      const Bc = vB.start + (null !== (pc = vB.length) && void 0 !== pc ? pc : 0),
        nc = cB.slice(vB.start, Bc),
        Vc = /^\s*\(/.test(cB.slice(Bc)),
        Ic = new RegExp(`^${nc.replaceAll("$","\\$")}\\s*=[^=]`, "m").test(cB),
        rB = cB.slice(0, vB.start),
        sc = rB.lastIndexOf("/*") > rB.lastIndexOf("*/") || rB.slice(rB.lastIndexOf("\n")).includes("//"),
        qB = new RegExp(`//\\s*(?:const|let|var)\\s+${nc.replaceAll("$","\\$")}\\b`).test(cB),
        Oc = new RegExp(`typeof\\s+${nc.replaceAll("$","\\$")}\\b`).test(cB);
      if (cO.has(nc) || Tc.has(nc) || Vc || Ic || sc || qB || Oc || Pc || Pq(Iq(uc, vB.start, Bc))) continue;
      Tc.add(nc);
      const fc = uc.getLineAndCharacterOfPosition(vB.start).line,
        mB = null === (hc = /Did you mean '([\w$]+)'\?/.exec(lc().flattenDiagnosticMessageText(vB.messageText, " "))) || void 0 === hc ? void 0 : hc[1];
      Mc.add(mB ? `Line ${fc+1} uses "${nc}", which is never set, so it throws there. Did you mean "${mB}"?` : `Line ${fc+1} uses "${nc}", which isn't set there, so it throws when that line runs.`);
      continue
    }
    if (!AP.has(vB.code) || void 0 === vB.start) continue;
    const Bc = lc().flattenDiagnosticMessageText(vB.messageText, " ");
    if (Bc.includes("'string | number'")) continue;
    const nc = vB.start + (null !== (fc = vB.length) && void 0 !== fc ? fc : 0),
      Vc = Vq(uc, vB.start, nc);
    if (!Vc) continue;
    const Ic = Vc.expression.getText(uc),
      rB = cB.slice(vB.start, nc).replace(/\s+/g, " "),
      qB = rB.length > 40 ? `${rB.slice(0,37)}...` : rB,
      Oc = Iq(uc, vB.start, nc);
    if (2554 === vB.code) {
      var aB, Yc, Lc;
      const cB = Bc.match(/Expected (\S+) arguments?, but got (\d+)/),
        nc = null !== (aB = null === cB || void 0 === cB || null === (Yc = cB[1]) || void 0 === Yc ? void 0 : Yc.replace("-", " to ")) && void 0 !== aB ? aB : "a different number of",
        rB = Number(null !== (Lc = null === cB || void 0 === cB ? void 0 : cB[2]) && void 0 !== Lc ? Lc : Vc.arguments.length);
      Mc.add(`${Ic} needs ${nc} ${"1"===nc?"value":"values"}, but this line gives it ${rB}.`);
      continue
    }
    if (2353 === vB.code) {
      var gB, Uc;
      const cB = null !== (gB = null === (Uc = Bc.match(/'([^']*)' does not exist/)) || void 0 === Uc ? void 0 : Uc[1]) && void 0 !== gB ? gB : qB,
        nc = null !== Oc && void 0 !== Oc && Oc.parent && lc().isPropertyAssignment(Oc.parent) ? Oc.parent.parent : null === Oc || void 0 === Oc ? void 0 : Oc.parent,
        Vc = nc && lc().isObjectLiteralExpression(nc) ? sc.getContextualType(nc) : void 0,
        rB = uq(cB, Vc ? sc.getPropertiesOfType(sc.getNonNullableType(Vc)).map((cB => cB.name)) : []);
      Mc.add(`${Ic} has no setting called "${cB}".${rB?` Did you mean ${rB}?`:" Check Show Docs for its settings."}`);
      continue
    }
    const Dc = Oc && lc().isExpression(Oc) ? sc.getContextualType(Oc) : void 0,
      Nc = (null !== (Cc = Dc) && void 0 !== Cc && Cc.isUnion() ? Cc.types : Cc ? [Cc] : []).filter((cB => cB.isStringLiteral())).map((cB => cB.value));
    if (Nc.length > 0) {
      var bB;
      const nc = null === (bB = /^CONFIG\.([\w$]+)$/.exec(rB)) || void 0 === bB ? void 0 : bB[1];
      if (void 0 !== nc) {
        var Zc;
        const Vc = null === (Zc = new RegExp(`(?:^|[{,])\\s*${nc.replaceAll("$","\\$")}\\s*:\\s*(["'])([^"'\\n]*)\\1`, "m").exec(cB)) || void 0 === Zc ? void 0 : Zc[2];
        if (void 0 !== Vc && !Nc.includes(Vc)) {
          const cB = uq(Vc, Nc);
          Mc.add(`${Ic} has no ${Bc.includes("keyof ")?"setting":"name"} called "${Vc}" (${rB}).${cB?` Did you mean ${cB}?`:""}`)
        }
        continue
      }
      const Vc = Oc && lc().isStringLiteral(Oc) ? uq(Oc.text, Nc) : void 0,
        uc = Bc.includes("keyof ") ? "setting" : "name",
        sc = void 0 !== Oc && lc().isStringLiteral(Oc) ? `${Ic} has no ${uc} called ${Qc=qB,Qc.startsWith('"')?Qc:`"${Qc}"`}.` : `${Ic} can't take ${qB} there.`;
      Mc.add(`${sc}${Vc?` Did you mean ${Vc}?`:" Check Show Docs for what it takes."}`);
      continue
    }
    if (Dc && Mq(sc.getNonNullableType(Dc))) {
      const cB = sq(sc, Dc);
      Mc.add(`${Ic} needs settings in { } there${cB?`, like ${cB}`:""}, not ${qB}.`);
      continue
    }
    const Ec = null === (mB = Bc.match(/parameter of type '([^']*)'/)) || void 0 === mB ? void 0 : mB[1],
      oc = Vc.arguments.findIndex((cB => cB.getStart(uc) <= vB.start && vB.start < cB.getEnd())),
      Wc = null !== (ec = null === (tB = sc.getResolvedSignature(Vc)) || void 0 === tB || null === (Sc = tB.parameters[oc]) || void 0 === Sc ? void 0 : Sc.name) && void 0 !== ec ? ec : "that part",
      wc = Oc ? sc.typeToString(sc.getTypeAtLocation(Oc)) : "",
      kB = "number" === wc ? "a number" : "string" === wc ? "text" : "something else";
    "string" === Ec ? Mc.add(`${Ic} needs ${Wc} as text, but ${qB} is ${kB} here.`) : "number" === Ec ? Mc.add(`${Ic} needs ${Wc} as a number, but ${qB} is ${kB} here.`) : Mc.add(`${Ic} can't take ${qB} there. Check Show Docs for what it takes.`)
  }
  var Qc, Cc;
  return [...Mc]
}

function Oq(cB) {
  return cB.replace(/^Line \d+ /, "")
}

function Tq(cB) {
  const Bc = new Map;
  for (const Ic of cB.split("\n")) {
    var nc;
    const cB = /^(?:async\s+)?function\s*\*?\s*(\w+)\s*\(|^(\w+)\s*=\s*(?:async\s*)?(?:\([^()]*\)\s*=>|function\b|\w+\s*=>)/.exec(Ic),
      rB = null !== (nc = null === cB || void 0 === cB ? void 0 : cB[1]) && void 0 !== nc ? nc : null === cB || void 0 === cB ? void 0 : cB[2];
    var Vc;
    if (rB) Bc.set(rB, (null !== (Vc = Bc.get(rB)) && void 0 !== Vc ? Vc : 0) + 1)
  }
  return [...Bc].flatMap((cB => {
    let [Bc, nc] = cB;
    return nc > 1 ? [`${Bc} is in the code ${nc} times, so only the last one runs. Put them together in one ${Bc}.`] : []
  }))
}

function fq(cB, Bc) {
  var nc, Vc, Ic, rB;
  const uc = Bc.after.split("\n"),
    sc = cB => {
      var Bc, nc;
      const Vc = null !== (Bc = null === (nc = uc[cB]) || void 0 === nc ? void 0 : nc.trim()) && void 0 !== Bc ? Bc : "";
      return "" === Vc ? void 0 : {
        line: cB + 1,
        text: Vc.length > 50 ? `${Vc.slice(0,47)}...` : Vc
      }
    },
    Mc = /^Line (\d+) /.exec(cB);
  if (Mc) return sc(Number(Mc[1]) - 1);
  const Pc = /^([\w$]+) is in the code \d+ times\b/.exec(cB);
  if (Pc) {
    const cB = Pc[1].replaceAll("$", "\\$"),
      Bc = new RegExp(`^(?:async\\s+)?function\\s*\\*?\\s*${cB}\\s*\\(|^${cB}\\s*=`),
      nc = uc.findIndex((cB => Bc.test(cB)));
    return nc >= 0 ? sc(nc) : void 0
  }
  const qB = null !== (nc = null === (Vc = /"([^"]+)"/.exec(cB)) || void 0 === Vc ? void 0 : Vc[1]) && void 0 !== nc ? nc : null === (Ic = /^api\.[\w$]+/.exec(cB)) || void 0 === Ic ? void 0 : Ic[0];
  if (!qB) return;
  const Oc = new Set(Bc.before.split("\n")),
    Tc = uc.flatMap(((cB, Bc) => cB.includes(qB) ? [Bc] : [])),
    fc = null !== (rB = Tc.find((cB => !Oc.has(uc[cB])))) && void 0 !== rB ? rB : Tc[0];
  return void 0 === fc ? void 0 : sc(fc)
}

function mO(cB) {
  return /^Line \d+ stops all of this code from running: "/.test(cB)
}

function eq(cB) {
  return /^Line \d+ (?:stops all of this code from running|never runs): "/.test(cB)
}

function tO(cB) {
  return cB.replace(/^Line \d+ (\w)/, ((cB, Bc) => Bc.toUpperCase()))
}
const Sq = new Set([lc().SyntaxKind.EqualsToken, lc().SyntaxKind.QuestionQuestionEqualsToken, lc().SyntaxKind.BarBarEqualsToken]);

function yO(cB) {
  const Bc = lc().createSourceFile("worldCode.js", cB, lc().ScriptTarget.Latest, !0, lc().ScriptKind.JS),
    nc = Bc.statements.flatMap((cB => lc().isVariableStatement(cB) ? cB.declarationList.declarations.filter((cB => lc().isIdentifier(cB.name) && "CONFIG" === cB.name.text)) : [])),
    Vc = 1 === nc.length ? nc[0].initializer : void 0;
  if (!Vc || !lc().isObjectLiteralExpression(Vc)) return [];
  const Ic = new Set;
  for (const Mc of Vc.properties) {
    if (!lc().isPropertyAssignment(Mc) && !lc().isShorthandPropertyAssignment(Mc) && !lc().isMethodDeclaration(Mc)) return [];
    if (lc().isComputedPropertyName(Mc.name)) return [];
    Ic.add(Mc.name.text)
  }
  const rB = [],
    uc = cB => {
      if (lc().isPropertyAccessExpression(cB) && lc().isIdentifier(cB.expression) && "CONFIG" === cB.expression.text) {
        const nc = cB.name.text,
          Vc = cB.parent;
        lc().isBinaryExpression(Vc) && Vc.left === cB && Sq.has(Vc.operatorToken.kind) ? Ic.add(nc) : rB.push({
          name: nc,
          at: cB.getStart(Bc)
        })
      }
      lc().forEachChild(cB, uc)
    };
  uc(Bc);
  const sc = new Set;
  return rB.flatMap((cB => {
    if (Ic.has(cB.name) || sc.has(cB.name)) return [];
    sc.add(cB.name);
    return [`Line ${Bc.getLineAndCharacterOfPosition(cB.at).line+1} uses "CONFIG.${cB.name}", but CONFIG has no ${cB.name}, so it is undefined there. Add ${cB.name} to CONFIG.`]
  }))
}

function zO(cB, Bc) {
  var nc;
  const Vc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] && !(void 0 !== Bc.path && (0, fc.g)(Bc.path)),
    Ic = !0 === (null === (nc = Bc.path) || void 0 === nc ? void 0 : nc.endsWith(".ts")),
    rB = Bc => [...cB.codeWarnings(Bc, Vc), ...qO(Bc, Vc, Ic), ...Tq(Bc), ...yO(Bc)],
    uc = new Set(rB(Bc.before).map(Oq));
  return rB(Bc.after).filter((cB => !uc.has(Oq(cB))))
}
const pq = "Looking up";

function hq(cB) {
  return {
    ...cB,
    call: void 0
  }
}
const aO = 15e3,
  lq = new Map;
const Yq = function(cB) {
    let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "bloxd_worldCodeAi";
    if ("undefined" === typeof indexedDB) return cB;
    let nc = "unknown",
      Vc = null;
    const Ic = () => (Vc ??= new Promise(((cB, nc) => {
        const Ic = indexedDB.open(Bc, 1);
        Ic.onupgradeneeded = () => {
          Ic.result.createObjectStore(eM)
        }, Ic.onsuccess = () => {
          const Bc = Ic.result;
          Bc.onversionchange = () => {
            Bc.close(), Vc = null
          }, Bc.onclose = () => {
            Vc = null
          }, cB(Bc)
        }, Ic.onerror = () => {
          var cB;
          nc(null !== (cB = Ic.error) && void 0 !== cB ? cB : new Error("IndexedDB didn't open"))
        }, Ic.onblocked = () => {
          nc(new Error("IndexedDB is blocked"))
        }
      })).catch((cB => {
        throw Vc = null, cB
      })), Vc),
      rB = async cB => {
        try {
          return (await Ic()).transaction(eM, cB)
        } catch (Bc) {
          if ("indexedDB" !== nc) throw Bc;
          return Vc = null, (await Ic()).transaction(eM, cB)
        }
      }, uc = async () => {
        if ("unknown" === nc) try {
          await Ic(), nc = "indexedDB"
        } catch {
          nc = "fallback"
        }
        return "indexedDB" === nc
      };
    return {
      getItem: async Bc => {
        if (!await uc()) return cB.getItem(Bc);
        const nc = await (async cB => {
          const Bc = await rB("readonly"),
            nc = Bc.objectStore(eM).get(cB);
          return await tP(Bc), nc.result
        })(Bc);
        return void 0 === nc ? cB.getItem(Bc) : nc
      },
      setItem: async (Bc, nc) => {
        if (!await uc()) return cB.setItem(Bc, nc);
        try {
          const cB = await rB("readwrite");
          return cB.objectStore(eM).put(nc, Bc), await tP(cB), !0
        } catch {
          return !1
        }
      },
      update: async (Bc, nc) => {
        if (!await uc()) throw new Error("No IndexedDB: read and write localforage instead");
        const Vc = await cB.getItem(Bc).catch((() => null)),
          Ic = await rB("readwrite"),
          sc = Ic.objectStore(eM);
        let Mc;
        const Pc = sc.get(Bc);
        return Pc.onsuccess = () => {
          Mc = nc(void 0 === Pc.result ? Vc : Pc.result), sc.put(Mc, Bc)
        }, await tP(Ic), Mc
      }
    }
  }(mP.d),
  Lq = new class {
    constructor(cB, Bc) {
      this.store = cB, this.signal = Bc, this.kept = new Map
    }
    watch(cB, Bc) {
      var nc, Vc;
      return null !== (nc = null === (Vc = this.signal) || void 0 === Vc ? void 0 : Vc.listen((nc => {
        if (nc !== cB) return;
        const Vc = this.load(cB).then((async Bc => hM(Bc, await this.read(cB))));
        this.kept.set(cB, Vc), Vc.then(Bc)
      }))) && void 0 !== nc ? nc : () => {}
    }
    list(cB) {
      return this.load(cB)
    }
    async add(cB, Bc, nc) {
      let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Date.now(),
        Ic = arguments.length > 4 ? arguments[4] : void 0;
      const rB = (cB, rB) => {
          const uc = hM(cB, rB),
            sc = uc[uc.length - 1];
          if (sc && function(cB, Bc) {
              const nc = Object.keys(cB);
              return nc.length === Object.keys(Bc).length && nc.every((nc => cB[nc] === Bc[nc]))
            }(sc.files, nc)) return uc;
          const Mc = Math.max(Vc, ...uc.map((cB => cB.id + 1)));
          return [...uc, {
            id: Mc,
            at: Vc,
            label: Bc,
            ...Ic ? {
              did: Ic
            } : {},
            files: {
              ...nc
            }
          }].slice(-30)
        },
        uc = this.load(cB).then((async Bc => this.save(cB, (cB => rB(Bc, cB)))));
      this.kept.set(cB, uc.then((cB => {
        let {
          snapshots: Bc
        } = cB;
        return Bc
      })));
      const {
        snapshots: sc,
        isSaved: Mc
      } = await uc;
      var Pc;
      Mc && (null === (Pc = this.signal) || void 0 === Pc || Pc.post(cB));
      return sc
    }
    async relabel(cB, Bc, nc) {
      const Vc = this.load(cB).then((async Vc => this.save(cB, (cB => hM(Vc, cB).map((cB => cB.id === Bc ? {
        ...cB,
        label: nc
      } : cB))))));
      this.kept.set(cB, Vc.then((cB => {
        let {
          snapshots: Bc
        } = cB;
        return Bc
      })));
      const {
        snapshots: Ic,
        isSaved: rB
      } = await Vc;
      var uc;
      rB && (null === (uc = this.signal) || void 0 === uc || uc.post(cB));
      return Ic
    }
    async save(cB, Bc) {
      if (this.store.update) try {
        return {
          snapshots: await this.store.update(this.storeKey(cB), (cB => Bc(pM(cB) ? cB : null))),
          isSaved: !0
        }
      } catch {}
      const nc = Bc(await this.read(cB));
      return {
        snapshots: nc,
        isSaved: await this.store.setItem(this.storeKey(cB), nc).catch((() => !1))
      }
    }
    read(cB) {
      return this.store.getItem(this.storeKey(cB)).then((cB => pM(cB) ? cB : null)).catch((() => null))
    }
    load(cB) {
      let Bc = this.kept.get(cB);
      return Bc || (Bc = this.store.getItem(this.storeKey(cB)).then((cB => pM(cB) ? cB : [])).catch((() => [])), this.kept.set(cB, Bc)), Bc
    }
    storeKey(cB) {
      return `worldCodeAiHistory:${cB}`
    }
  }(Yq, zP("bloxd-worldCodeAiHistory")),
  gO = new class {
    constructor(cB, Bc) {
      this.store = cB, this.signal = Bc, this.kept = new Map
    }
    watch(cB, Bc) {
      var nc, Vc;
      return null !== (nc = null === (Vc = this.signal) || void 0 === Vc ? void 0 : Vc.listen((nc => {
        if (nc !== cB) return;
        const Vc = this.load(cB).then((async Bc => {
          var nc;
          return null !== (nc = await this.read(cB)) && void 0 !== nc ? nc : Bc
        }));
        this.kept.set(cB, Vc), Vc.then(Bc)
      }))) && void 0 !== nc ? nc : () => {}
    }
    list(cB) {
      return this.load(cB)
    }
    add(cB, Bc) {
      return this.update(cB, (cB => cB.includes(Bc) || cB.length >= 8 ? cB : [...cB, Bc]))
    }
    remove(cB, Bc) {
      return this.update(cB, (cB => cB.filter((cB => cB !== Bc))))
    }
    async update(cB, Bc) {
      var nc;
      const Vc = this.load(cB).then((async nc => {
        var Vc;
        if (this.store.update) try {
          return await this.store.update(this.storeKey(cB), (cB => Bc(rn(cB) ? cB.slice(0, 8) : nc)))
        } catch {}
        const Ic = Bc(null !== (Vc = await this.read(cB)) && void 0 !== Vc ? Vc : nc);
        return await this.store.setItem(this.storeKey(cB), Ic).catch((() => !1)), Ic
      }));
      this.kept.set(cB, Vc);
      const Ic = await Vc;
      return null === (nc = this.signal) || void 0 === nc || nc.post(cB), Ic
    }
    read(cB) {
      return this.store.getItem(this.storeKey(cB)).then((cB => rn(cB) ? cB.slice(0, 8) : null)).catch((() => null))
    }
    load(cB) {
      let Bc = this.kept.get(cB);
      return Bc || (Bc = this.read(cB).then((cB => null !== cB && void 0 !== cB ? cB : [])), this.kept.set(cB, Bc)), Bc
    }
    storeKey(cB) {
      return `worldCodeAiNotes:${cB}`
    }
  }(Yq, zP("bloxd-worldCodeAiNotes"));
const Uq = ["Next in line", "2nd in line", "3rd in line"];
let bO = null;

function Zq() {
  if (!bO) {
    var cB, Bc, nc, Vc;
    const Ic = cB => Tc.b.find((Bc => Bc.id === cB)),
      rB = cB => {
        var Bc, nc;
        return null !== (Bc = null === (nc = Ic(cB)) || void 0 === nc ? void 0 : nc.content) && void 0 !== Bc ? Bc : ""
      };
    bO = new Os({
      apiReference: rB("apiReference"),
      callbacks: rB("callbacks"),
      clientOptions: rB("clientOptions"),
      snippets: rB("snippets"),
      howTo: rB("howTo"),
      itemNames: null !== (cB = null === (Bc = Ic("itemNames")) || void 0 === Bc ? void 0 : Bc.raw) && void 0 !== cB ? cB : "",
      blockNames: null !== (nc = null === (Vc = Ic("blockNames")) || void 0 === Vc ? void 0 : Vc.raw) && void 0 !== nc ? nc : "",
      mobSettings: rB("mobSettings")
    })
  }
  return bO
}
const Qq = ["Welcome players when they join", "Give everyone a sword when they join", "Make a /spawn command", "Show a timer on the screen"],
  Cq = ["Give me a diamond sword", "Teleport me onto this block", "Make me jump really high", "Tell everyone I clicked it"],
  vO = ["Explain these changes", "Make it simpler"],
  Dq = ["Make the change"],
  Nq = ["Explain how it works", "Add a sound or effect", "Make it harder to play"],
  Eq = ["It didn't work: nothing happened in my world.", "It didn't work: an error showed up.", "It didn't work: it did something different from what I asked."];

function oq(cB) {
  let {
    requests: Bc,
    onPick: nc
  } = cB;
  const Ic = (0, Vc.useRef)(null);
  var rB;
  return rB = Ic, (0, Vc.useLayoutEffect)((() => {
    const cB = rB.current,
      Bc = null === cB || void 0 === cB ? void 0 : cB.closest(".WorldCodeAiMessages");
    if (!cB || !Bc) return;
    const nc = () => {
      const nc = Bc.getBoundingClientRect().bottom;
      for (const Bc of Array.from(cB.children)) {
        const cB = Bc.getBoundingClientRect();
        Bc.style.visibility = cB.top < nc && cB.bottom > nc + 1 ? "hidden" : ""
      }
    };
    nc(), Bc.addEventListener("scroll", nc, {
      passive: !0
    });
    const Vc = "function" === typeof ResizeObserver ? new ResizeObserver(nc) : null;
    return null === Vc || void 0 === Vc || Vc.observe(Bc), null === Vc || void 0 === Vc || Vc.observe(cB), () => {
      Bc.removeEventListener("scroll", nc), null === Vc || void 0 === Vc || Vc.disconnect()
    }
  }), [rB]), (0, uc.jsx)("div", {
    ref: Ic,
    className: "WorldCodeAiChips WorldCodeAiFollowUps",
    children: Bc.map((cB => (0, Vc.createElement)("button", {
      ...Zs.d,
      key: cB,
      className: "WorldCodeAiChip",
      onClick: () => {
        nc(cB)
      }
    }, function(cB) {
      const Bc = cB.replace(/^It didn't work: /, "").replace(/\.$/, "");
      return Bc.charAt(0).toUpperCase() + Bc.slice(1)
    }(cB))))
  })
}

function Wq(cB) {
  let {
    useFree: Bc,
    retryOf: nc,
    isAutoFix: Vc,
    lookupOf: Ic
  } = cB;
  return !0 !== Bc && (void 0 !== nc || !0 !== Vc && void 0 === Ic)
}

function wq(cB, Bc, nc) {
  return `They asked: "${cB}"\nYour last answer wrote this for ${Bc}, but you hadn't seen that file, so it didn't go in. ${Bc} is open now, its code above. Put your code into it, keeping everything it already has and changing only what the request needs:\n\`\`\`js\n${nc.replace(/\s*$/,"")}\n\`\`\``
}

function kO() {
  return "The world's blocks can't be seen from here."
}

function Xq() {
  return "The world can't be seen from here."
}
const Hq = 1e4,
  Fq = "I can only help with your game's code. Try asking about something in your world.";

function Jq(cB) {
  return cB ? "Apply this change first, then press Switch to World Code." : "Apply this change first, then ask me again to go to World Code."
}
const jO = 1500;

function Rq(cB, Bc) {
  var nc;
  return Object.entries(null !== (nc = cB.leftFiles) && void 0 !== nc ? nc : {}).every((cB => {
    var nc;
    let [Vc, Ic] = cB;
    return (null !== (nc = Bc[Vc]) && void 0 !== nc ? nc : "") === Ic
  }))
}
const iO = "Check your code: go through my request part by part and play it in your head as each player, from the start: what do they see and when, and what happens the first time, the last time, and with things that shouldn't count? Only something that stops my request working is wrong: keep everything else as it is (numbers, starting values, how it works) and add no new rules or limits. If anything is wrong, send the fixed file, after playing the normal case through once more with your change. If it's all right, say in one sentence that you played it through and found no mistakes, that they should still try it in their world because you can miss things, and send no file.";

function Kq(cB) {
  var Bc, nc, Ic, Mc, Pc, qB, Oc, Tc;
  let {
    entry: fc,
    isOutOfDate: mB = !1,
    canEdit: ec,
    onApply: tB,
    onUndo: Sc,
    onTryIt: yB,
    isLatest: zB,
    canUndo: pc,
    onFixWarnings: hc,
    onCheck: aB,
    busy: lc,
    checkPicked: Yc,
    onPickedChange: Lc,
    request: gB,
    elsewhere: Uc,
    defaultOpen: bB
  } = cB;
  const Zc = "offered" === fc.status && mB ? "stale" : fc.status,
    [Qc, Cc] = (0, Vc.useState)(bB),
    [vB, Dc] = (0, Vc.useState)(!1),
    Nc = null !== (Bc = fc.warnings) && void 0 !== Bc ? Bc : [],
    Ec = zB && ("offered" === Zc || "applied" === Zc) && ec && Nc.length > 0 && !fc.warningsSentBack,
    oc = "applied" === Zc,
    Wc = null !== (nc = null === (Ic = fc.swappedTo) || void 0 === Ic ? void 0 : Ic[0]) && void 0 !== nc ? nc : Ec ? null !== (Mc = null === (Pc = /"([^"]+)"/.exec(Nc[0])) || void 0 === Pc ? void 0 : Pc[1]) && void 0 !== Mc ? Mc : null === (qB = /^api\.[\w$]+/.exec(Nc[0])) || void 0 === qB ? void 0 : qB[0] : void 0,
    wc = Nc.every((cB => /never true|no block is ever called that/.test(cB))),
    kB = (0, Vc.useMemo)((() => {
      var cB;
      const [Bc] = fc.changes;
      return new Map((null !== (cB = fc.warnings) && void 0 !== cB ? cB : []).map((cB => [cB, 1 === fc.changes.length && Bc ? fq(cB, Bc) : void 0])))
    }), [fc.warnings, fc.changes]),
    Xc = 1 === Nc.length ? kB.get(Nc[0]) : void 0,
    [Hc, Fc] = (0, Vc.useState)(new Set),
    Jc = Hc.size > 0;
  (0, Vc.useEffect)((() => {
    null === Lc || void 0 === Lc || Lc(Jc)
  }), [Jc, Lc]), (0, Vc.useEffect)((() => {
    Fc((cB => 0 === cB.size ? cB : new Set))
  }), [fc.changes]);
  const jB = "offered" === Zc && ec && fc.id >= 0,
    Rc = (0, Vc.useMemo)((() => new Map(fc.changes.map((cB => [cB.path, eP(cB, gB)])))), [fc.changes, gB]),
    iB = [...Rc.values()].reduce(((cB, Bc) => cB + Bc.length), 0),
    Kc = jB && iB >= 2,
    [xB, dc] = (0, Vc.useState)(!1),
    Ac = "applied" === Zc && iB >= 2,
    Gc = iB - Hc.size,
    cn = (0, Vc.useMemo)((() => {
      if (0 !== Hc.size) return fc.changes.flatMap((cB => {
        var Bc;
        const nc = new Set((null !== (Bc = Rc.get(cB.path)) && void 0 !== Bc ? Bc : []).filter((Bc => !Hc.has(`${cB.path}:${Bc.index}`))).map((cB => cB.index))),
          Vc = function(cB, Bc) {
            const nc = rq(cB.before, cB.after),
              Vc = nc.flatMap((cB => "same" === cB.kind ? [cB.text] : Bc.has(cB.index) ? cB.added : cB.removed));
            if (0 === Vc.length) return "";
            const Ic = (nc.every((cB => "same" === cB.kind || Bc.has(cB.index))) ? cB.after : cB.before).endsWith("\n") ? "\n" : "";
            return `${Vc.join("\n")}${Ic}`
          }(cB, nc);
        return Vc === cB.before ? [] : [{
          ...cB,
          after: Vc
        }]
      }))
    }), [fc.changes, Rc, Hc]),
    BB = (0, Vc.useMemo)((() => cn && Yc ? Yc(cn) : []), [cn, Yc]);
  (0, Vc.useEffect)((() => {
    "applied" === Zc && Cc(!1)
  }), [Zc]);
  const nB = !!fc.editedInPlace;
  (0, Vc.useEffect)((() => {
    nB || "offered" !== fc.status || Cc(!0)
  }), [nB, fc.status]);
  const VB = fc.changes.map((cB => cB.path)).join(", "),
    IB = !nB || Ec || BB.length > 0 || "undone" === Zc || "stale" === Zc;
  return (0, uc.jsxs)("div", {
    className: "WorldCodeAiToolCard",
    children: [(0, uc.jsx)(sc, {
      className: "WorldCodeAiChangeLog",
      title: nB ? `Editing code: ${VB}` : `Code change: ${VB}`,
      isCalm: !0,
      isElsewhere: !!Uc,
      isOpen: Qc,
      onToggle: Cc,
      children: (0, uc.jsx)("div", {
        className: "WorldCodeAiChanges",
        children: fc.changes.map((cB => {
          var Bc, nc;
          const {
            added: Vc,
            removed: Ic
          } = function(cB) {
            let Bc = 0,
              nc = 0;
            for (const Vc of DV(cB.before, cB.after)) "added" === Vc.kind ? Bc++ : "removed" === Vc.kind && nc++;
            return {
              added: Bc,
              removed: nc
            }
          }(cn ? null !== (Bc = cn.find((Bc => Bc.path === cB.path))) && void 0 !== Bc ? Bc : {
            ...cB,
            after: cB.before
          } : cB), rB = null !== (nc = Rc.get(cB.path)) && void 0 !== nc ? nc : [], sc = "offered" !== Zc && "applied" !== Zc || "" === cB.before ? [] : function(cB, Bc) {
            const nc = JM(Bc);
            return [...JM(cB)].filter((cB => !nc.has(cB)))
          }(cB.before, cB.after);
          return (0, uc.jsxs)("div", {
            className: "WorldCodeAiChange",
            children: [(0, uc.jsxs)("div", {
              className: "WorldCodeAiChangeHeader",
              children: [(0, uc.jsx)("span", {
                className: "WorldCodeAiChangePath",
                children: cB.path
              }), Vc > 0 && (0, uc.jsx)("span", {
                className: "WorldCodeAiAdded",
                children: 1 === Vc ? "1 line added" : `${Vc} lines added`
              }), Ic > 0 && (0, uc.jsxs)("span", {
                className: "WorldCodeAiRemoved",
                children: [Ic, " removed"]
              })]
            }), Kc && (0, uc.jsx)("ul", {
              className: "WorldCodeAiHunks",
              children: rB.map((Bc => {
                const nc = `${cB.path}:${Bc.index}`,
                  Vc = [Bc.added.length > 0 ? `+${Bc.added.length}` : "", Bc.removed.length > 0 ? `\u2212${Bc.removed.length}` : ""].filter(Boolean).join(" "),
                  Ic = [Bc.added.length > 0 ? `${Bc.added.length} ${1===Bc.added.length?"line":"lines"} added` : "", Bc.removed.length > 0 ? `${Bc.removed.length} taken out` : ""].filter(Boolean).join(", ");
                return (0, uc.jsx)("li", {
                  children: (0, uc.jsxs)("label", {
                    children: [(0, uc.jsx)("input", {
                      type: "checkbox",
                      checked: !Hc.has(nc),
                      onChange: cB => {
                        const Bc = new Set(Hc);
                        cB.target.checked ? Bc.delete(nc) : Bc.add(nc), Fc(Bc)
                      }
                    }), (0, uc.jsxs)("span", {
                      children: [Bc.also && (0, uc.jsx)("span", {
                        className: "WorldCodeAiHunkAlso",
                        title: "You didn't ask for this. Untick it to leave it out.",
                        children: "adds" === Bc.also ? "Also adds" : "changes" === Bc.also ? "Also changes" : "Also takes out"
                      }), Bc.label, Bc.codeNames.length > 0 && (0, uc.jsx)("code", {
                        className: "WorldCodeAiHunkCode",
                        children: Bc.codeNames.join(", ")
                      }), Bc.detail && (0, uc.jsx)("span", {
                        className: "WorldCodeAiHunkDetail",
                        children: Bc.detail
                      })]
                    }), (0, uc.jsx)("span", {
                      className: "WorldCodeAiHunkCount",
                      title: Ic,
                      "aria-label": Ic,
                      children: `${Vc} ${Bc.added.length+Bc.removed.length===1?"line":"lines"}`
                    })]
                  })
                }, nc)
              }))
            }), Kc && (rB.some((cB => void 0 !== cB.also)) ? (0, uc.jsx)("p", {
              className: "WorldCodeAiHint WorldCodeAiHunksHint",
              children: 'You didn\'t ask for the parts marked "Also". Untick one to leave it out.'
            }) : rB.some((cB => cB.takesOut.length > 0 || 0 === cB.added.length)) && (0, uc.jsx)("p", {
              className: "WorldCodeAiHint WorldCodeAiHunksHint",
              children: "Untick a part to keep that bit of your code as it is."
            })), Ac && rB.length >= 2 && (0, uc.jsx)("button", {
              className: "WorldCodeAiLinkButton WorldCodeAiPartsToggle",
              onClick: () => {
                dc(!xB)
              },
              children: xB ? `Hide the ${rB.length} parts` : `Show the ${rB.length} parts that went in`
            }), Ac && xB && (0, uc.jsx)("ul", {
              className: "WorldCodeAiHunks WorldCodeAiHunks-done",
              children: rB.map((Bc => (0, uc.jsx)("li", {
                children: (0, uc.jsxs)("span", {
                  children: [Bc.label, Bc.codeNames.length > 0 && (0, uc.jsx)("code", {
                    className: "WorldCodeAiHunkCode",
                    children: Bc.codeNames.join(", ")
                  }), Bc.detail && (0, uc.jsx)("span", {
                    className: "WorldCodeAiHunkDetail",
                    children: Bc.detail
                  })]
                })
              }, `${cB.path}:${Bc.index}`)))
            }), cB.why && !Kc && !(Ac && xB) && (0, uc.jsx)("ul", {
              className: "WorldCodeAiChangeWhy",
              children: cB.why.map((cB => (0, uc.jsx)("li", {
                children: cB.charAt(0).toUpperCase() + cB.slice(1)
              }, cB)))
            }), sc.length > 0 && !(Kc && sc.every((cB => rB.some((Bc => Bc.takesOut.includes(cB)))))) && (0, uc.jsxs)("p", {
              className: "WorldCodeAiChangeTakenOut",
              children: ["applied" === Zc ? "It took out " : "It also takes out ", sc.slice(0, 6).map((cB => {
                var Bc;
                const nc = null !== (Bc = GM(cB)) && void 0 !== Bc ? Bc : OP(cB);
                return nc.charAt(0).toLowerCase() + nc.slice(1)
              })).join(", "), sc.length > 6 ? ` and ${sc.length-6} more` : "", ".", " ", (0, uc.jsx)("code", {
                className: "WorldCodeAiHunkCode",
                children: sc.slice(0, 6).join(", ")
              })]
            }), (0, uc.jsx)(yP, {
              change: cB,
              marked: Wc
            })]
          }, cB.path)
        }))
      })
    }), IB && (0, uc.jsxs)("div", {
      className: rB()("WorldCodeAiChangeActions", zB && "WorldCodeAiChangeActions-sticky"),
      children: [BB.length > 0 && (0, uc.jsxs)("div", {
        className: "WorldCodeAiWarning",
        children: [(0, uc.jsx)("p", {
          className: "WorldCodeAiWarningTitle",
          children: "Leaving that part out breaks this:"
        }), (0, uc.jsx)("p", {
          children: BB[0]
        })]
      }), Ec && (0, uc.jsxs)("div", {
        className: "WorldCodeAiWarning",
        children: [(0, uc.jsx)("p", {
          className: "WorldCodeAiWarningTitle",
          children: wc ? 1 === Nc.length ? `${Xc?`Line ${Xc.line}`:"This line"} ${oc?"will":"would"} never work:` : `${Nc.length} lines ${oc?"will":"would"} never work:` : 1 === Nc.length ? `${Xc?`Line ${Xc.line}`:"This line"} ${oc?"will":"would"} break:` : `${Nc.length} lines ${oc?"will":"would"} break:`
        }), (vB ? Nc : Nc.slice(0, 1)).map((cB => {
          const Bc = kB.get(cB);
          return (0, uc.jsxs)(Vc.Fragment, {
            children: [Bc && !eq(cB) && (0, uc.jsxs)("p", {
              className: "WorldCodeAiWarningWhere",
              children: [Nc.length > 1 && `Line ${Bc.line}: `, (0, uc.jsx)("code", {
                children: Bc.text
              })]
            }), (0, uc.jsx)("p", {
              children: !Bc || 1 !== Nc.length && eq(cB) ? cB : tO(cB)
            })]
          }, cB)
        })), !vB && Nc.length > 1 && (0, uc.jsxs)("button", {
          className: "WorldCodeAiLinkButton",
          onClick: () => {
            Dc(!0)
          },
          children: ["Show ", Nc.length - 1, " more"]
        })]
      }), Ec && (0, uc.jsx)("button", {
        ...Ys(null !== (Oc = fc.warnings) && void 0 !== Oc ? Oc : []) ? {} : Zs.d,
        className: "WorldCodeAiPrimaryButton",
        disabled: lc,
        onClick: hc,
        children: 1 === (null === (Tc = fc.warnings) || void 0 === Tc ? void 0 : Tc.length) ? "Fix this line" : "Fix these lines"
      }), "offered" === Zc && ec && !nB && (0, uc.jsx)("button", {
        className: Ec ? "WorldCodeAiLinkButton" : "WorldCodeAiPrimaryButton",
        disabled: Kc && 0 === Gc || !!Uc && lc,
        title: Uc && lc ? "You can apply it once the AI is done." : void 0,
        onClick: () => {
          tB(cn)
        },
        children: Uc ? Uc.codeBlock ? "Apply in that code block" : "Apply in World Code" : Kc && Gc < iB ? `Apply ${Gc} of ${iB} changes` : Ec ? "Apply anyway" : "Apply to my code"
      }), "offered" === Zc && !ec && (0, uc.jsx)("span", {
        className: "WorldCodeAiHint",
        children: null !== Uc && void 0 !== Uc && Uc.codeBlock ? "You can't edit that code block." : "You can't edit this world's code."
      }), "applied" === Zc && !nB && (0, uc.jsxs)("div", {
        className: "WorldCodeAiAppliedRow",
        children: [(0, uc.jsx)("span", {
          className: "WorldCodeAiAppliedNote",
          children: "Applied."
        }), zB && (0, uc.jsx)("button", {
          className: "WorldCodeAiPrimaryButton",
          onClick: yB,
          children: "Try it in my world"
        }), zB && (0, uc.jsx)("button", {
          ...Zs.d,
          className: "WorldCodeAiSecondaryButton",
          disabled: lc,
          onClick: aB,
          children: "Check for mistakes"
        }), pc && (0, uc.jsx)("button", {
          className: "WorldCodeAiLinkButton WorldCodeAiUndoButton",
          onClick: Sc,
          children: "Undo"
        })]
      }), "applied" === Zc && !nB && !pc && !Uc && (0, uc.jsx)("span", {
        className: "WorldCodeAiHint WorldCodeAiUndoOff",
        children: "You've changed this code since, so Undo is off. History can still go back."
      }), "undone" === Zc && (0, uc.jsx)("span", {
        className: "WorldCodeAiHint",
        children: fc.wentBack ? "You went back, so this change is gone." : "Undone."
      }), "stale" === Zc && (0, uc.jsx)("span", {
        className: "WorldCodeAiHint",
        children: "Your code changed since this answer, so ask again to get an up-to-date change."
      })]
    })]
  })
}

function xO(cB) {
  let {
    target: Bc,
    isOpen: nc
  } = cB;
  return (0, uc.jsxs)("div", {
    className: rB()("WorldCodeAiTargetLabel", nc && "WorldCodeAiTargetLabel-open"),
    children: [(0, uc.jsx)("span", {
      children: Bc.label
    }), nc && (0, uc.jsx)("span", {
      className: "WorldCodeAiTargetLabelNote",
      children: "Open now"
    })]
  })
}

function dq(cB) {
  let {
    code: Bc,
    onSwitch: nc,
    defaultOpen: Ic,
    isElsewhere: rB
  } = cB;
  const [Mc, Pc] = (0, Vc.useState)(!1), qB = (0, Vc.useMemo)((() => ({
    path: "World Code",
    before: "",
    after: Bc
  })), [Bc]);
  return (0, uc.jsxs)("div", {
    className: "WorldCodeAiToolCard WorldCodeAiWorldCodePart",
    children: [(0, uc.jsx)(sc, {
      className: "WorldCodeAiChangeLog",
      title: "Code for World Code",
      isCalm: !0,
      isElsewhere: rB,
      defaultOpen: Ic,
      children: (0, uc.jsx)("div", {
        className: "WorldCodeAiChanges",
        children: (0, uc.jsx)(yP, {
          change: qB
        })
      })
    }), (0, uc.jsxs)("div", {
      className: "WorldCodeAiChangeActions",
      children: [(0, uc.jsx)("span", {
        className: "WorldCodeAiHint",
        children: "A code block only runs when clicked, so this part goes in World Code."
      }), nc && (0, uc.jsx)("button", {
        className: "WorldCodeAiPrimaryButton",
        onClick: nc,
        children: "Switch to World Code"
      }), (0, uc.jsx)("button", {
        className: "WorldCodeAiLinkButton",
        onClick: () => {
          navigator.clipboard.writeText(Bc).then((() => {
            Pc(!0)
          })).catch((() => {}))
        },
        children: Mc ? "Copied" : "Copy"
      })]
    })]
  })
}

function Aq(cB) {
  var Bc;
  let {
    failed: nc,
    nothingChanged: Vc,
    onRetry: Ic,
    defaultOpen: rB,
    isElsewhere: Mc
  } = cB;
  const Pc = null === (Bc = nc.find((cB => null !== cB.closest))) || void 0 === Bc ? void 0 : Bc.closest;
  return (0, uc.jsxs)("div", {
    className: "WorldCodeAiFailedEdits",
    children: [(0, uc.jsxs)(sc, {
      title: Vc ? "That change didn't work, so your code is the same." : 1 === nc.length ? "One part didn't work, so it's left out." : `${nc.length} parts didn't work, so they're left out.`,
      defaultOpen: rB,
      isElsewhere: Mc,
      children: [Pc && (0, uc.jsxs)(uc.Fragment, {
        children: [(0, uc.jsx)("p", {
          children: "The closest bit in your code:"
        }), (0, uc.jsx)("pre", {
          className: "WorldCodeAiFailedLines",
          children: Pc.text.split("\n").length > 4 ? `${Pc.text.split("\n").slice(0,4).join("\n")}\n\u2026` : Pc.text
        })]
      }), !Pc && (0, uc.jsx)("p", {
        children: "Try asking for it again, maybe in a different way."
      })]
    }), Ic && (0, uc.jsxs)("div", {
      className: "WorldCodeAiFailedRetry",
      children: [(0, uc.jsx)("button", {
        ...Zs.d,
        className: "WorldCodeAiSecondaryButton",
        onClick: Ic,
        children: "Ask the AI to try again"
      }), (0, uc.jsx)("span", {
        className: "WorldCodeAiHint",
        children: "It asks the AI once more."
      })]
    })]
  })
}

function Gq(cB) {
  let {
    lookups: Bc,
    words: nc,
    defaultOpen: Vc,
    isElsewhere: Ic
  } = cB;
  return (0, uc.jsxs)(sc, {
    title: pq,
    isCalm: !0,
    isElsewhere: Ic,
    defaultOpen: Vc,
    children: [nc && (0, uc.jsx)("p", {
      children: nc
    }), (0, uc.jsx)("p", {
      children: "It looks at:"
    }), (0, uc.jsx)("ul", {
      className: "WorldCodeAiLookupList",
      children: Bc.map(((cB, Bc) => (0, uc.jsx)("li", {
        children: MI(cB)
      }, Bc)))
    })]
  })
}

function cT(cB) {
  return `Add this to my World Code:\n\`\`\`js\n${cB.join("\n").replace(/\s*$/,"\n")}\`\`\``
}

function BO(cB) {
  const Bc = Math.ceil(cB / 1e3);
  return `${Math.floor(Bc/60)}:${String(Bc%60).padStart(2,"0")}`
}

function nO(cB) {
  return "waiting" === cB.phase ? "You're next" : cB.playingThrough && "writing" !== cB.phase && "screening" !== cB.phase ? "Playing your code through as each player\u2026" : null
}

function VO(cB) {
  var Bc;
  let {
    busy: nc
  } = cB;
  const Vc = (Ic = nc.phase, sc = null !== (Bc = nc.reasoningChars) && void 0 !== Bc ? Bc : 0, "screening" === Ic ? 3 : "writing" === Ic ? 2 : "thinking" === Ic && sc >= 400 ? 1 : 0);
  var Ic, sc;
  return (0, uc.jsx)("ol", {
    className: "WorldCodeAiSteps",
    children: UP.map(((cB, Bc) => (0, uc.jsx)("li", {
      className: rB()(Bc < Vc && "WorldCodeAiStep-done", Bc === Vc && "WorldCodeAiStep-current"),
      children: Bc < Vc ? `\u2713 ${cB}` : cB
    }, cB)))
  })
}
const IO = (0, Vc.memo)((function(cB) {
    var Bc, nc, Ic, Tc, Sc, zB, pc, hc, aB, lc, Yc, Lc, gB;
    let {
      files: Uc,
      activePath: bB,
      canEdit: Zc,
      errors: Qc,
      errorCount: Cc,
      applyFiles: vB,
      submit: Dc,
      testRun: Nc,
      close: Ec,
      goToLine: oc,
      target: Wc,
      chatKey: wc,
      historyKey: kB,
      openWorldCode: Xc,
      readWorldCode: Hc,
      viewChunk: Fc,
      viewGameState: Jc,
      openTarget: jB,
      isLoaded: Rc = !0,
      draft: iB,
      onDraftUsed: Kc,
      selection: xB,
      onSelectionUsed: dc
    } = cB;
    const Ac = Wc.codeBlock,
      cn = Wc.key,
      BB = function(cB) {
        let Bc = lq.get(cB);
        return Bc || (Bc = {
          entries: [],
          nextId: 1,
          dismissedErrorCounts: new Map
        }, lq.set(cB, Bc)), Bc
      }(wc),
      [VB, IB] = (0, Vc.useState)((() => BB.entries)),
      rn = (0, Vc.useRef)(!0),
      uB = (0, Vc.useCallback)((cB => {
        const Bc = "function" === typeof cB ? cB : () => cB;
        rn.current ? IB(Bc) : BB.setEntries ? BB.setEntries(Bc) : BB.entries = Bc(BB.entries)
      }), [BB]);
    (0, Vc.useEffect)((() => (rn.current = !0, BB.setEntries = IB, () => {
      rn.current = !1, BB.setEntries === IB && (BB.setEntries = void 0)
    })), [BB]);
    const [sB, MB] = (0, Vc.useState)(null), [PB, qn] = (0, Vc.useState)([]), [OB, TB] = (0, Vc.useState)(!1), [fB, mn] = (0, Vc.useState)([]), [eB, tn] = (0, Vc.useState)(!1), [SB, yn] = (0, Vc.useState)(!1), [zn, pB] = (0, Vc.useState)(null), [hB, an] = (0, Vc.useState)(!1), lB = (0, Vc.useRef)("settings"), [YB, LB] = (0, Vc.useState)(null), gn = (0, Vc.useRef)(function() {
      try {
        var cB;
        const Bc = JSON.parse(null !== (cB = localStorage.getItem(NP)) && void 0 !== cB ? cB : "{}");
        return "object" !== typeof Bc || null === Bc ? {} : Object.fromEntries(Object.entries(Bc).filter((cB => {
          let [, Bc] = cB;
          return Array.isArray(Bc) && Bc.every((cB => "number" === typeof cB))
        })))
      } catch {
        return {}
      }
    }()), [UB, bn] = (0, Vc.useState)(kM), ZB = (0, Vc.useRef)(UB);
    ZB.current = UB;
    const QB = UB && Zc,
      CB = (0, Vc.useRef)(!1),
      [vn, DB] = (0, Vc.useState)(null),
      [NB, EB] = (0, Vc.useState)(""),
      [oB, WB] = (0, Vc.useState)([]),
      [wB, kn] = (0, Vc.useState)(null),
      [XB, HB] = (0, Vc.useState)(new Set),
      [FB, JB] = (0, Vc.useState)(null !== (Bc = BB.dismissedErrorCounts.get(Wc.key)) && void 0 !== Bc ? Bc : 0),
      [jn, RB] = (0, Vc.useState)(!1),
      [KB, xn] = (0, Vc.useState)(Date.now),
      dB = (0, Vc.useRef)(null),
      AB = (0, Vc.useRef)(null),
      GB = (0, Vc.useRef)([]),
      [cV, Bn] = (0, Vc.useState)(0),
      [nn, Vn] = (0, Vc.useState)(null),
      rV = (0, SM.p)(wc),
      un = null !== nn && void 0 !== nn ? nn : null === rV || void 0 === rV ? void 0 : rV.entryId,
      sn = VB.find((cB => cB.id === un)),
      Mn = (null === sn || void 0 === sn ? void 0 : sn.target.key) === Wc.key && (null !== nn || void 0 === (null === rV || void 0 === rV ? void 0 : rV.endedAt)),
      Pn = (cB, Bc) => {
        const nc = setTimeout((() => {
          GB.current = GB.current.filter((cB => cB !== nc)), Bn(GB.current.length), cB()
        }), Bc);
        GB.current.push(nc), Bn(GB.current.length)
      },
      qV = () => {
        for (const cB of GB.current) clearTimeout(cB);
        GB.current = [], Bn(0), Vn(null)
      },
      On = (0, Vc.useRef)(null),
      Tn = (0, Vc.useRef)(null),
      fn = () => BB.nextId++,
      mV = (0, Vc.useRef)(0),
      en = (0, Vc.useRef)(Uc);
    en.current = Uc;
    const tV = (0, Vc.useCallback)((cB => {
        null === cB || void 0 === cB || cB.focus()
      }), []),
      Sn = (0, Vc.useRef)(Cc);
    Sn.current = Cc;
    const yV = (0, Vc.useRef)(oB);
    yV.current = oB;
    const zV = (0, Vc.useRef)(VB.length);
    (0, Vc.useEffect)((() => {
      const cB = On.current;
      if (!cB) return;
      if (OB) return void cB.scrollTo({
        top: 0
      });
      if (zn) return;
      const Bc = VB[VB.length - 1],
        nc = (null === Bc || void 0 === Bc ? void 0 : Bc.target.key) === cn;
      VB.length > zV.current && "assistant" === (null === Bc || void 0 === Bc ? void 0 : Bc.role) && !Bc.isNotice && nc && (BB.heldAnswerId = Bc.id), zV.current = VB.length;
      const Vc = void 0 !== Bc && nc && Bc.id === BB.heldAnswerId && "offered" === Bc.status && void 0 === Bc.trial,
        Ic = cB.querySelectorAll(".WorldCodeAiEntry"),
        rB = Ic[Ic.length - 1];
      if (Vc && rB) {
        var uc;
        const nc = cB.getBoundingClientRect().top,
          Vc = Bc => cB.scrollTop + Bc.getBoundingClientRect().top - nc;
        let Ic = Vc(rB);
        const sc = rB.querySelector(".WorldCodeAiDiff-added, .WorldCodeAiDiff-removed"),
          Mc = rB.querySelector(".WorldCodeAiChangeHeader"),
          Pc = rB.querySelector(".WorldCodeAiChangeActions-sticky");
        if (null !== (uc = Bc.warnings) && void 0 !== uc && uc.length && sc && Mc && Pc) {
          const Bc = rB.querySelector(".WorldCodeAiDiff-marked"),
            nc = sc.getBoundingClientRect().height,
            uc = Bc ? Vc(Bc) + 2 * nc + Pc.offsetHeight - cB.clientHeight : Vc(sc) + 3 * nc + Pc.offsetHeight - cB.clientHeight;
          Ic = Math.max(Ic, Math.min(uc, Bc ? Vc(Bc) - nc : Vc(Mc)))
        } else if (Mc && Pc) {
          const Bc = rB.querySelectorAll(".WorldCodeAiChangeWhy li"),
            nc = Bc[Bc.length - 1];
          if (nc) {
            const Bc = Vc(nc) + nc.getBoundingClientRect().height + Pc.offsetHeight - cB.clientHeight;
            Ic = Math.max(Ic, Math.min(Bc, Vc(Mc)))
          }
        }
        cB.scrollTo({
          top: Ic
        })
      } else cB.scrollTo({
        top: cB.scrollHeight
      })
    }), [BB, VB, sB, OB, cn, zn]), (0, Vc.useEffect)((() => {
      BB.entries = VB, BB.dismissedErrorCounts.set(Wc.key, FB)
    }), [BB, VB, FB, Wc.key]), (0, Vc.useEffect)((() => () => {
      var cB;
      null === (cB = dB.current) || void 0 === cB || cB.abort(), qV()
    }), []), (0, Vc.useEffect)((() => {
      var cB;
      iB && (iB.send ? Rc && (null === Kc || void 0 === Kc || Kc(), Jn.current(iB.text, iB.text, {
        check: !1,
        useFree: !1
      })) : (EB(iB.text), null === (cB = Tn.current) || void 0 === cB || cB.focus(), null === Kc || void 0 === Kc || Kc()))
    }), [iB, Kc, Rc]), (0, Vc.useEffect)((() => function() {
      let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      const Bc = setTimeout((() => {
        nq(cB)
      }), 1e3);
      return () => {
        clearTimeout(Bc)
      }
    }(Ac)), [Ac]), (0, Vc.useEffect)((() => {
      let cB = !0;
      Lq.list(kB).then((Bc => {
        cB && qn(Bc)
      })).catch((cB => {
        console.error("World Code AI: couldn't read the version history", cB)
      }));
      const Bc = Lq.watch(kB, qn);
      return () => {
        cB = !1, Bc()
      }
    }), [kB]), (0, Vc.useEffect)((() => {
      let cB = !0;
      gO.list(kB).then((Bc => {
        cB && mn(Bc)
      })).catch((cB => {
        console.error("World Code AI: couldn't read the notes about the game", cB)
      }));
      const Bc = gO.watch(kB, mn);
      return () => {
        cB = !1, Bc()
      }
    }), [kB]);
    const pn = null !== (nc = null === (Ic = VB.findLast((cB => cB.target.key === Wc.key))) || void 0 === Ic ? void 0 : Ic.retryAt) && void 0 !== nc ? nc : 0,
      hn = fr(KB),
      aV = null !== sB || pn > KB || hn > KB;
    (0, Vc.useEffect)((() => {
      if (!aV) return;
      const cB = setInterval((() => {
        xn(Date.now())
      }), 1e3);
      return () => {
        clearInterval(cB)
      }
    }), [aV]);
    const lnc = Cc > FB && Qc.length > 0 ? Qc[Qc.length - 1] : null,
      Yn = (0, Vc.useMemo)((() => lnc ? function(cB, Bc) {
        var nc;
        let Vc;
        for (const [Ic, rB] of Object.entries(Bc)) {
          const {
            text: Bc,
            line: nc
          } = Ts(cB, rB);
          if (void 0 !== nc) {
            if (Vc) return Ts(cB);
            Vc = {
              text: Bc,
              path: Ic,
              line: nc
            }
          }
        }
        return null !== (nc = Vc) && void 0 !== nc ? nc : Ts(cB)
      }(lnc, Uc) : {
        text: ""
      }), [lnc, Uc]),
      Ln = function(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wc;
        const nc = fn();
        return TB(!1), tn(!1), uB((Vc => [...Vc, {
          ...cB,
          id: nc,
          target: Bc
        }])), nc
      },
      gV = cB => cB.target.key === Wc.key,
      Un = (cB, Bc) => {
        uB((nc => nc.map((nc => nc.id === cB ? {
          ...nc,
          ...Bc
        } : nc))))
      },
      bV = (cB, Bc) => {
        Un(cB, {
          status: Bc
        })
      },
      Zn = lu();

    function Qn(cB) {
      return !!Qu(as.getState()) && (Ju().then((Bc => {
        Bc || cB()
      })), !0)
    }
    const Cn = cB => {
        !hB && Qn(cB) || cB()
      },
      vV = async function(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const {
          check: Vc = void 0 === Bc,
          about: Ic = (null !== Bc && void 0 !== Bc ? Bc : cB.trim()),
          planStep: rB,
          wordsOnly: uc = !1,
          asked: sc,
          failedEdits: Mc,
          isAutoFix: Pc = !1,
          autoFixRound: qB = 0,
          useFree: Oc,
          retryOf: Tc,
          continueFrom: mB,
          lookups: ec = [],
          lookupRound: Sc = 0,
          worldCodeFiles: yB,
          viewedPaths: zB = [],
          lookupOf: pc,
          insertsInto: hc
        } = nc, aB = cB.trim();
        if ("" === aB || sB) return;
        const lc = null !== Oc && void 0 !== Oc ? Oc : hB && !Pc && void 0 === Tc && void 0 === mB;
        if (!lc && Wq(nc) && Qn((() => {
            onc.current(cB, Bc, nc)
          }))) return;
        const Yc = null !== hc && void 0 !== hc ? hc : bB;
        void 0 === Oc && lc && an(!1), qV();
        const Lc = Ou.activeKey(),
          gB = lc ? null : Lc,
          Uc = null !== gB,
          Cc = null !== Lc && lc,
          vB = !gB && !lc && as.isAnswering(),
          Dc = void 0 === Tc ? -1 : ((cB, Bc) => {
            for (let nc = cB.findIndex((cB => cB.id === Bc)) - 1; nc >= 0; nc--)
              if ("user" === cB[nc].role) return nc;
            return -1
          })(VB, Tc),
          Nc = (Dc < 0 ? VB : VB.slice(0, Dc)).filter((cB => !cB.isNotice && !cB.leftOut && gV(cB))).slice(-4).map((cB => ({
            role: cB.role,
            text: cB.question ? `${cB.text}\n${cB.question.question}` : cB.text
          }))),
          Ec = void 0 === Bc,
          Wc = void 0 === sc ? void 0 === Bc ? aB : void 0 : null !== sc && void 0 !== sc ? sc : void 0,
          wc = void 0 !== Tc && void 0 !== mB,
          kB = wc ? VB.find((cB => cB.id === Tc)) : void 0;
        let Hc;
        if (wc) Hc = Dc >= 0 ? VB[Dc].id : -1;
        else if (void 0 !== pc && Dc < 0) Hc = pc;
        else if (Dc >= 0) Hc = VB[Dc].id, uB((cB => cB.filter((cB => cB.id !== Tc)).map((cB => cB.id === Hc ? {
          ...cB,
          isNotice: void 0
        } : cB))));
        else {
          const cB = Pc && qB > 0;
          Hc = Ln({
            role: "user",
            text: cB ? aB : null !== Bc && void 0 !== Bc ? Bc : aB,
            changes: [],
            status: "offered",
            about: Ic,
            planStep: rB,
            ...Wc ? {
              asked: Wc
            } : {},
            ...cB ? {
              logTitle: "The AI's code had an error, so it was sent back to the AI to fix"
            } : {}
          })
        }
        const Fc = {
            lookups: ec,
            lookupRound: Sc,
            worldCodeFiles: yB,
            viewedPaths: zB
          },
          Jc = {
            retry: aB,
            retryShown: Bc,
            retryOptions: {
              check: Vc,
              about: Ic,
              planStep: rB,
              wordsOnly: uc,
              useFree: lc,
              asked: sc,
              failedEdits: Mc,
              isAutoFix: Pc,
              autoFixRound: qB,
              insertsInto: hc,
              ...Fc
            }
          },
          Rc = new AbortController;
        dB.current = Rc;
        const iB = ZB.current ? "direct" : "offer";
        var Kc, xB, dc, Gc, cn;
        try {
          var BB;
          const cB = Date.now(),
            nc = aB.startsWith(iO),
            sc = null === gB || void 0 === gB ? void 0 : gB.model.name;
          xn(cB), MB(vB ? {
            phase: "thinking",
            startedAt: cB,
            playingThrough: nc,
            isSuperBot: !0
          } : {
            phase: "checking",
            startedAt: cB,
            playingThrough: nc,
            keyModel: sc
          });
          const Oc = cB => {
              Un(Hc, {
                isNotice: !0
              }), Ln({
                role: "assistant",
                text: "personalInfo" === cB ? "Please don't share personal details like names, addresses or schools. Ask again without them." : Fq,
                changes: [],
                status: "offered",
                isNotice: !0
              })
            },
            Lc = async () => {
              if (!Vc && !gB) return aB;
              const cB = Date.now();
              xn(cB), MB({
                phase: "checking",
                startedAt: cB,
                playingThrough: nc,
                keyModel: sc
              });
              const {
                safety: Bc,
                request: Ic
              } = await async function(cB, Bc) {
                let nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                const Vc = await hr(cB, Bc, nc),
                  Ic = mr(cB);
                if ("unsafe" !== Vc || Ic === cB) return {
                  safety: Vc,
                  request: cB
                };
                const rB = await hr(Ic, Bc, !0);
                return "unchecked" === rB ? {
                  safety: Vc,
                  request: cB
                } : {
                  safety: rB,
                  request: Ic
                }
              }(aB, Rc.signal, Uc);
              return "unchecked" === Bc && gB ? (Ln({
                role: "assistant",
                text: "",
                changes: [],
                status: "offered",
                isNotice: !0,
                ...Jc,
                keyNotice: {
                  notice: "unchecked",
                  model: gB.model.name,
                  company: Cr(gB.provider, gB.baseUrl, !0)
                }
              }), null) : "personalInfo" === Bc || "unsafe" === Bc ? (Oc(Bc), null) : Ic
            };
          let bB = vB ? aB : await Lc();
          if (null === bB) return;
          const Wc = yB ? {
            ...en.current,
            ...yB
          } : en.current;
          let sB = {
            request: bB,
            files: Wc,
            activePath: Yc,
            errors: Qc.slice(-5),
            history: Nc,
            codeBlock: Ac,
            failedEdits: Mc,
            canAsk: Ec,
            lookups: ec,
            canLookUp: Sc < 3 && !uc,
            canChangeWorldCode: BV(iB),
            looksUpDocs: Uc,
            about: Ac ? void 0 : {
              notes: fB,
              outline: (cn = nB(Wc, new Set(Zq().callbackNames())), [cn.callbacks.length > 0 ? `Callbacks: ${cn.callbacks.join(", ")}` : "", cn.commands.length > 0 ? `Commands: ${cn.commands.join(", ")}` : "", cn.functions.length > 0 ? `Functions: ${cn.functions.join(", ")}` : ""].filter((cB => "" !== cB)).join("\n")),
              canRemember: fB.length < 8
            }
          };
          const qn = new Map,
            OB = cB => {
              var Bc;
              const nc = `${cB.format} ${cB.nativeTools}`,
                Vc = null !== (Bc = qn.get(nc)) && void 0 !== Bc ? Bc : uI(Zq(), sB, cB);
              return qn.set(nc, Vc), Vc
            },
            TB = cB => OB(RI(cB));
          let mn = II(sB),
            eB = 0,
            tn = null;
          const SB = async () => {
            const Bc = fr();
            var Vc, Ic;
            Bc > Date.now() && (xn(Date.now()), MB({
              phase: "waiting",
              startedAt: cB,
              until: Bc,
              playingThrough: nc
            }), await (Vc = Bc - Date.now(), Ic = Rc.signal, new Promise(((cB, Bc) => {
              const nc = setTimeout(cB, Vc);
              Ic.addEventListener("abort", (() => {
                clearTimeout(nc), Bc(new DOMException("The World Code AI request was stopped", "AbortError"))
              }), {
                once: !0
              })
            }))));
            const rB = Date.now();
            return xn(rB), MB({
              phase: "thinking",
              startedAt: rB,
              playingThrough: nc
            }), async function(cB) {
              var Bc, nc;
              let Vc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const Ic = Date.now(),
                rB = new AbortController,
                uc = () => {
                  rB.abort()
                };
              null !== (Bc = Vc.signal) && void 0 !== Bc && Bc.aborted && uc(), null === (nc = Vc.signal) || void 0 === nc || nc.addEventListener("abort", uc, {
                once: !0
              });
              const sc = (0, tB.d)(3e4, rB.signal);
              let Mc = !1;
              try {
                const Bc = await Mr(JI, pr(ir(cB, JI)), sc.signal, (cB => {
                  if (!Mc) {
                    if (yu(cB.answer)) return Mc = !0, void uc();
                    var Bc;
                    (!0 === cB.isCalling || zu(cB.answer)) && (null === (Bc = Vc.onProgress) || void 0 === Bc || Bc.call(Vc, cB))
                  }
                }), Vc.tools);
                if (sr(Bc) && !yu(Bc.answer)) {
                  const nc = !1 !== Vc.canNudge ? await Sr(JI, pr(ir(cB, JI)), Bc, rB.signal, (cB => {
                    if (!Mc) {
                      if (yu(cB.answer)) return Mc = !0, void uc();
                      var Bc;
                      (!0 === cB.isCalling || zu(cB.answer)) && (null === (Bc = Vc.onProgress) || void 0 === Bc || Bc.call(Vc, cB))
                    }
                  }), Vc.tools, 3e4) : Bc;
                  if (!yu(nc.answer)) return {
                    ...nc,
                    ms: Date.now() - Ic
                  }
                }
              } catch (Oc) {
                var Pc;
                if (null !== (Pc = Vc.signal) && void 0 !== Pc && Pc.aborted) throw Oc;
                Mc || console.warn(`World Code AI: ${JI.name} couldn't be reached`, Oc)
              } finally {
                var qB;
                sc.clear(), null === (qB = Vc.signal) || void 0 === qB || qB.removeEventListener("abort", uc)
              }
              return {
                ...await mu(cB, Vc),
                ms: Date.now() - Ic
              }
            }(TB, {
              signal: Rc.signal,
              tools: mn,
              canNudge: !uc,
              onProgress: cB => {
                const Bc = Date.now(),
                  Vc = cB.model !== tn;
                if (tn = cB.model, !Vc && Bc - eB < 150) return;
                eB = Bc;
                const Ic = function(cB, Bc) {
                  const nc = function(cB) {
                      return cB.replace(/<think>[\s\S]*?(?:<\/think>|$)/g, "")
                    }(cB),
                    Vc = gq.exec(nc);
                  let Ic = Vc ? nc.slice(0, Vc.index) : nc;
                  Ic = Ic.replace(/<[\w_]*$/, "").trim();
                  const rB = nc.trimEnd(),
                    uc = In(nc, Bc).filter((cB => !/^<(?:tool_call|function=)/.test(cB.source) || /<\/(?:tool_call|invoke|function)>\s*$/.test(cB.source) || !rB.endsWith(cB.source.trimEnd()))),
                    sc = uc.flatMap((cB => {
                      var Bc;
                      const nc = null === (Bc = cB.args.why) || void 0 === Bc ? void 0 : Bc.trim();
                      return nc ? [nc.charAt(0).toUpperCase() + nc.slice(1)] : []
                    }));
                  return {
                    text: Ic,
                    whys: [...new Set(sc)],
                    isWritingCode: null !== Vc,
                    calls: uc.length
                  }
                }(cB.answer, jr(cB.model));
                MB({
                  phase: "" !== Ic.text || Ic.isWritingCode ? "writing" : "thinking",
                  startedAt: rB,
                  playingThrough: nc,
                  reasoningChars: cB.reasoningChars,
                  model: cB.model
                })
              }
            })
          }, yn = (Gc = null === (BB = as.getState().status) || void 0 === BB ? void 0 : BB.provider, Su[null !== Gc && void 0 !== Gc ? Gc : "ovh"]), zn = cB => {
            AB.current = null, Un(Hc, {
              isNotice: !0
            }), Ln({
              role: "assistant",
              text: "unsafe" === cB ? "That answer didn't pass Bloxd's safety check, so it isn't shown. Try again, or ask in a different way." : "Bloxd's safety check couldn't look at that answer, so it isn't shown. Try again in a minute.",
              changes: [],
              status: "offered",
              isNotice: !0,
              ...Jc
            })
          }, pB = async () => {
            var cB;
            const Bc = Date.now();
            xn(Bc), MB({
              phase: "thinking",
              startedAt: Bc,
              playingThrough: nc,
              isSuperBot: !0
            });
            const Ic = Dc < 0 ? VB : VB.slice(0, Dc),
              rB = Ic.findLastIndex((cB => "assistant" === cB.role && !cB.isNotice && !cB.leftOut && gV(cB))),
              uc = Ic[rB],
              sc = Ic.findIndex((cB => cB.id === pc)),
              Pc = Ic.slice(0, Math.max(0, rB)).findLastIndex((cB => "user" === cB.role)),
              qB = void 0 === Tc && (void 0 === pc || sc >= 0 && sc < rB && sc >= Pc) && "object" === typeof(null === uc || void 0 === uc ? void 0 : uc.answeredBy) && !0 === uc.answeredBy.isSuperBot,
              fc = RI(yn),
              mB = uI(Zq(), sB, fc, {
                docsInTurn: !0
              }),
              ec = II(sB, fc.format),
              tB = "deepseek" === fc.format ? {
                carried: uI(Zq(), sB, fc, {
                  docsInTurn: !0,
                  carried: !0
                }).at(-1),
                toolResults: [...(null !== Mc && void 0 !== Mc ? Mc : []).flatMap((cB => cB.call ? [{
                  ...cB.call,
                  text: kI(cB)
                }] : [])), ...(null !== (cB = sB.lookups) && void 0 !== cB ? cB : []).flatMap((cB => cB.call ? [{
                  ...cB.call,
                  text: `${cB.about}:\n${cB.text}`
                }] : []))].slice(-20)
              } : {};
            let Sc;
            try {
              Sc = await async function(cB, Bc, nc, Vc, Ic) {
                var rB;
                let {
                  carried: uc,
                  toolResults: sc,
                  request: Mc,
                  code: Pc
                } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
                const qB = Date.now(),
                  Oc = "system" === (null === (rB = Bc[0]) || void 0 === rB ? void 0 : rB.role) ? Bc[0].content : "",
                  Tc = JSON.stringify(ur(nc)),
                  fc = null !== Vc && Vc.system === Oc && Vc.toolsJson === Tc,
                  mB = null !== uc && void 0 !== uc ? uc : Bc[Bc.length - 1],
                  ec = sc && sc.length > 0 ? {
                    toolResults: sc
                  } : {},
                  tB = {
                    ...Mc ? {
                      request: Mc
                    } : {},
                    ...Pc ? {
                      code: Pc
                    } : {}
                  };
                let Sc = await Eu(Nu(fc ? {
                  chatId: Vc.chatId,
                  messages: [mB],
                  ...ec,
                  ...tB
                } : {
                  messages: Bc,
                  toolsJson: Tc,
                  ...tB
                }), Ic);
                if ("newChat" === Sc.outcome && fc && (Sc = await Eu(Nu({
                    messages: Bc,
                    toolsJson: Tc,
                    ...tB
                  }), Ic)), "status" in Sc && as.setStatus(Sc.status), "refused" === Sc.outcome) return {
                  kind: "refused",
                  safety: Sc.safety
                };
                if ("blocked" === Sc.outcome) return {
                  kind: "blocked",
                  safety: Sc.safety
                };
                if ("answered" !== Sc.outcome) return {
                  kind: "newChat" === Sc.outcome ? "failed" : Sc.outcome
                };
                const yB = Pr(cB, Sc.answer, Sc.reasoning, Sc.toolCalls, Sc.isCutShort);
                return null === yB ? {
                  kind: "failed"
                } : {
                  kind: "answered",
                  reply: {
                    ...yB,
                    ms: Date.now() - qB
                  },
                  chat: {
                    chatId: Sc.chatId,
                    system: Oc,
                    toolsJson: Tc
                  }
                }
              }(yn, mB, ec, qB ? AB.current : null, Rc.signal, {
                ...tB,
                ...Vc ? {
                  request: aB
                } : {},
                code: BI(sB, fc.format)
              })
            } catch (hc) {
              if (Rc.signal.aborted) throw hc;
              console.warn("AI Helper: Super Bot.xd couldn't be reached", hc), Sc = {
                kind: "failed"
              }
            }
            if ("answered" === Sc.kind) return AB.current = Sc.chat, Sc.reply;
            if ("refused" === Sc.kind) return Oc(Sc.safety), "stopped";
            if ("blocked" === Sc.kind) return zn(Sc.safety), "stopped";
            AB.current = null, YB = "free";
            const yB = as.getState(),
              zB = "unavailable" === Sc.kind && Qu(yB);
            return zB && Ju(), {
              fallbackNotice: zB ? "You don't have any Super Bot.xd usage left, so Bot.xd is answering this one." : Du(Sc.kind, yB.status)
            }
          };
          let hB, an, lB, YB = lc || Ou.getState().keys.length > 0 ? "free" : void 0,
            LB = !1;
          if (gB) {
            const Bc = {
              format: nr(gB.model.callFormat),
              nativeTools: !0 === gB.model.nativeTools
            };
            an = Bc.format;
            const Vc = [...OB(Bc)];
            var IB;
            if (void 0 !== mB) "" !== mB && Vc.push({
              role: "assistant",
              content: mB
            }), Vc.push({
              role: "user",
              content: (dc = null === kB || void 0 === kB || null === (IB = kB.cutShort) || void 0 === IB ? void 0 : IB.cutCall, "Your answer was cut short. Continue exactly where you stopped, from the next character: don't repeat anything or start again, and add nothing before it." + (dc ? ` Your ${dc.name} call${dc.path?` for ${dc.path}`:""} was cut off part way and didn't come through: make that call again in full.` : ""))
            });
            MB({
              phase: "thinking",
              startedAt: cB,
              playingThrough: nc,
              keyModel: sc
            });
            const Ic = Bc => {
              MB({
                phase: "" === Bc.answer ? "thinking" : "writing",
                startedAt: cB,
                playingThrough: nc,
                keyModel: sc
              })
            };
            try {
              const cB = await ms(gB, Vc, {
                signal: Rc.signal,
                onProgress: Ic,
                tools: mn,
                continueFrom: mB
              });
              hB = cB, YB = {
                model: gB.name ? `${gB.name} \xb7 ${gB.model.name}` : gB.model.name
              }, cB.isCutShort && (lB = function(cB, Bc, nc) {
                return {
                  request: nc,
                  written: Bc.written,
                  cutCall: Bc.cutCall,
                  keyId: cB.id,
                  modelId: cB.model.id
                }
              }(gB, cB, aB))
            } catch (PB) {
              if (!(PB instanceof vu) || Rc.signal.aborted) throw PB;
              return void Dn(PB, gB, Hc, Jc)
            }
          } else {
            const cB = vB ? await pB() : null;
            if ("stopped" === cB) return;
            if (cB && !("fallbackNotice" in cB)) {
              var rn;
              hB = cB, an = null !== (rn = yn.callFormat) && void 0 !== rn ? rn : "simple", YB = {
                model: ts,
                isSuperBot: !0
              }, LB = !0
            } else {
              if (vB) {
                const cB = await Lc();
                if (null === cB) return;
                cB !== bB && (bB = cB, sB = {
                  ...sB,
                  request: cB
                }, mn = II(sB))
              }
              let Bc;
              cB && "fallbackNotice" in cB && Ln({
                role: "assistant",
                text: cB.fallbackNotice,
                changes: [],
                status: "offered",
                isNotice: !0
              });
              try {
                Bc = await SB()
              } catch (PB) {
                if (!(PB instanceof GI && "busy" === PB.reason)) throw PB;
                Bc = await SB()
              }
              gn.current = function(cB, Bc, nc) {
                  var Vc;
                  return !Number.isFinite(nc) || nc <= 0 ? cB : {
                    ...cB,
                    [Bc]: [...null !== (Vc = cB[Bc]) && void 0 !== Vc ? Vc : [], nc].slice(-10)
                  }
                }(gn.current, Bc.model, Bc.ms),
                function(cB) {
                  try {
                    localStorage.setItem(NP, JSON.stringify(cB))
                  } catch {}
                }(gn.current), hB = Bc, an = jr(Bc.model)
            }
          }
          const UB = Zq(),
            bn = vI(hB.answer, an, Wc, Yc, UB.callbackNames(), Ac ? fc.e : void 0, iB, new Set([GV(Wc, Yc, Ac), Yc, ...zB, ...Object.keys(null !== yB && void 0 !== yB ? yB : {})].filter((cB => null !== cB))), UB.realName),
            ZB = uc ? {
              ...bn,
              changes: [],
              failedEdits: [],
              inPlace: !1,
              worldCode: [],
              plan: [],
              actions: []
            } : bn;
          if (!LB) {
            const cB = Date.now();
            xn(cB), MB({
              phase: "screening",
              startedAt: cB,
              playingThrough: nc,
              keyModel: sc
            });
            const Bc = await DP(bB, ZB, Rc.signal, (Bc => {
              xn(Date.now()), MB({
                phase: "screening",
                startedAt: cB,
                playingThrough: nc,
                keyModel: sc,
                until: Bc
              })
            }));
            if ("ok" !== Bc) return void zn(Bc)
          }
          const QB = function(cB) {
              let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ac;
              return cB.flatMap((cB => zO(UB, cB, Bc && !(0, fc.g)(cB.path))))
            },
            CB = QB(ZB.changes),
            vn = "direct" === iB ? function(cB) {
              return cB.flatMap((cB => {
                var Bc;
                return null !== (Bc = ls(cB)) && void 0 !== Bc ? Bc : []
              }))
            }(CB) : [],
            DB = vn.length > 0 ? {
              ...ZB,
              changes: ZB.changes.map((cB => ({
                ...cB,
                after: Us(cB.after, vn)
              })))
            } : ZB,
            NB = DB.changes.filter((cB => Ac && (0, fc.g)(cB.path))).map((cB => ({
              ...cB,
              path: (0, fc.j)(cB.path)
            }))),
            EB = DB.changes.filter((cB => !Ac || !(0, fc.g)(cB.path))),
            oB = NB.length > 0 ? {
              ...DB,
              changes: EB,
              inPlace: DB.inPlace && EB.length > 0
            } : DB,
            wB = NB.length > 0 || vn.length > 0 ? QB(oB.changes) : CB,
            kn = wB.filter(mO),
            XB = oB.inPlace && Zc && kn.length > 0 && qB < 3 && !hB.isCutShort && !hB.hasCallsFromReasoning,
            HB = "direct" === iB && Zc,
            FB = oB.failedEdits.filter((cB => "unread" === cB.reason)),
            JB = !HB || uc || void 0 !== hc || Ac ? [] : FB.flatMap((cB => null !== cB.path && void 0 !== cB.code ? [{
              path: cB.path,
              code: cB.code
            }] : [])),
            jn = cB => "unread" === cB.reason && JB.some((Bc => Bc.path === cB.path)),
            RB = oB.failedEdits.filter((cB => !jn(cB))),
            KB = FB.filter((cB => !jn(cB))),
            dB = BV(iB) && oB.worldCode.length > 0 && !uc && 0 === NB.length,
            GB = Sc < 3 && !uc && !hB.isCutShort,
            cV = new Set([...mn.map((cB => cB.name)), ...KB.length > 0 ? ["view_file", "view_world_code"] : []]),
            Bn = !GB || JB.length > 0 || NB.length > 0 || XB ? [] : oB.lookups.filter((cB => cV.has(cB.name))),
            nn = {
              request: bB,
              shown: Bc,
              userEntryId: Hc,
              options: {
                check: !1,
                about: Ic,
                planStep: rB,
                wordsOnly: uc,
                useFree: lc,
                isAutoFix: Pc,
                autoFixRound: qB,
                failedEdits: [...(null !== Mc && void 0 !== Mc ? Mc : []).map(hq), ...KB],
                ...Fc,
                lookupRound: Sc + 1,
                lookupOf: Hc,
                insertsInto: hc
              }
            },
            Vn = 0 === oB.changes.length && 0 === oB.worldCode.length,
            rV = Bn.length > 0 && ("direct" === iB || Uc && Vn && Bn.every(OI)),
            un = rV && Vn && 0 === oB.notes.length,
            sn = Ec ? oB.question : null,
            Mn = hB.isCutShort ? oB.text.replace(/(<tool_call|<function=|<\|channel\||\{\s*"jsonrpc")[\s\S]*$/, "").trim() : oB.text,
            qV = hB.isCutShort && !lB ? "\n\nThe answer got too long and was cut off, so part of it is missing. Try asking for one thing at a time." : "",
            On = RB.length > 0 && oB.changes.length > 0 && !hB.isCutShort ? "\n\nPart of this answer couldn't go in, so it isn't in the change. Ask again if something is missing." : "",
            Tn = () => oB.changes.length > 0 ? "Here's a change for your code." : NB.length > 0 ? "This changes your World Code." : oB.worldCode.length > 0 ? "This needs World Code." : JB.length > 0 ? `I'll put it into ${JB.map((cB=>cB.path)).join(" and ")}.` : sn ? "Quick question before I build it:" : oB.plan.length > 0 ? "That's a big one, so here's a plan to build it a step at a time." : Bn.length > 0 ? `I'll look at ${function(cB){var Bc;const nc=cB.map(MI);return nc.length<=1?null!==(Bc=nc[0])&&void 0!==Bc?Bc:"":`${nc.slice(0,-1).join(", ")} and ${nc[nc.length-1]}`}(Bn)} first.` : oB.notes.length > 0 ? "Here's something to remember about your game." : oB.actions.length > 0 ? "Sure!" : hB.isCutShort ? "Sorry, that was too much for one answer." : "Sorry, I couldn't work that out. Try asking in a different way.",
            mV = {
              role: "assistant",
              text: (Mn || Tn()) + qV + On,
              changes: oB.changes,
              status: "offered",
              warnings: wB,
              worldCode: oB.worldCode.length > 0 && !dB ? oB.worldCode : void 0,
              editedInPlace: oB.inPlace && !XB || void 0,
              failedEdits: RB.length > 0 ? RB : void 0,
              question: null !== sn && void 0 !== sn ? sn : void 0,
              askedFor: sn ? bB : void 0,
              note: oB.notes[0],
              plan: oB.plan.length > 0 ? oB.plan : void 0,
              noteStatus: oB.notes.length > 0 ? HB ? "pending" : "asked" : void 0,
              answeredBy: YB,
              oneOff: Cc || void 0,
              cutShort: lB,
              byItself: HB || void 0,
              ...lB ? {
                retryShown: Jc.retryShown,
                retryOptions: Jc.retryOptions
              } : {},
              ...un ? {
                logTitle: pq,
                isCalm: !0
              } : {},
              ...Bn.length > 0 ? {
                lookups: {
                  lookups: Bn,
                  followUp: nn
                },
                lookedAt: rV || void 0
              } : {}
            },
            tV = wc && void 0 !== Tc ? (Kc = Tc, xB = mV, uB((cB => cB.map((cB => cB.id === Kc ? {
              ...xB,
              id: Kc,
              target: cB.target
            } : cB)))), Kc) : Ln(mV),
            Sn = oB.inPlace && Zc && !XB && !hB.isCutShort && !hB.hasCallsFromReasoning,
            yV = Sn && await iV({
              id: tV,
              changes: oB.changes
            }, Ic);
          !oB.inPlace || XB || yV || Un(tV, {
            editedInPlace: void 0
          });
          const zV = 0 === oB.changes.length && 0 === RB.length && 0 === JB.length && 0 === NB.length && 0 === oB.worldCode.length;
          if (HB && void 0 !== mV.note && ((yV || XB || zV) && !Rc.signal.aborted ? aI({
              id: tV,
              note: mV.note,
              changes: [],
              status: "applied"
            }, !0) : Sn && !Rc.signal.aborted ? hV(tV, "declined") : hV(tV, "asked")), Rc.signal.aborted) return void Ln({
            role: "assistant",
            text: "Stopped.",
            changes: [],
            status: "offered",
            isNotice: !0,
            isCalm: !0
          });
          XB && (Un(tV, {
            warningsSentBack: !0
          }), WB((cB => [{
            id: fn(),
            text: `Your change didn't go in, because the code wouldn't run at all: ${kn.join(" ")} Send the whole change again with that fixed.`,
            shown: "Fix this line",
            check: !1,
            isAutoFix: !0,
            autoFixRound: qB + 1
          }, ...cB]))), yV && wP(oB.changes, Yc).forEach(((cB, Bc) => {
            const nc = () => {
              Ln({
                role: "assistant",
                text: kq(cB.path),
                changes: [],
                status: "offered",
                isNotice: !0,
                isCalm: !0
              }), oc(cB.path, cB.line)
            };
            0 === Bc ? nc() : Pn(nc, 1200 * Bc)
          }));
          const pn = 0 === Bn.length && oB.actions.some((cB => "exportGame" === cB.kind));
          Zc && pn && "direct" === iB ? An(oB.changes.length > 0 && !yV) : Zc && (pn || EV(bB) && !Ac) && Un(tV, {
            offerExport: !0
          });
          const hn = 0 === Bn.length ? oB.actions.find((cB => "switchToWorldCode" === cB.kind)) : void 0,
            aV = oB.changes.length > 0 && !yV && Zc,
            lnc = yV ? oB.changes.map((cB => ({
              path: cB.path,
              text: cB.before
            }))) : void 0,
            Yn = NB.length > 0 && HB && !!jB,
            bV = Yn && !aV;
          if (NB.length > 0) {
            const cB = Ln({
              role: "assistant",
              text: "This is the part of the change that goes in World Code.",
              changes: NB,
              status: "offered",
              warnings: QB(NB, !1),
              answeredBy: YB,
              byItself: bV || void 0
            }, oP.f);
            Yn && cI(cB, aV)
          }
          if ("stopped" === (rV ? await VV(Bn, nn, {
              replaced: lnc,
              signal: Rc.signal
            }) : "none")) return void Ln({
            role: "assistant",
            text: "Stopped.",
            changes: [],
            status: "offered",
            isNotice: !0,
            isCalm: !0
          });
          JB.length > 0 && WB((cB => [...JB.map((cB => ({
            id: fn(),
            text: wq(bB, cB.path, cB.code),
            shown: "Put the code in",
            followUp: {
              check: !1,
              about: Ic,
              planStep: rB,
              useFree: lc,
              lookupRound: Sc,
              lookupOf: Hc,
              insertsInto: cB.path
            },
            opensPath: cB.path,
            ...lnc ? {
              replaced: lnc,
              until: Date.now() + Hq
            } : {}
          }))), ...cB]));
          const Zn = HB && !!jB && Ac && 0 === NB.length && (dB || "switchToWorldCode" === (null === hn || void 0 === hn ? void 0 : hn.kind) && !uc);
          if (Zn && aV) uB((cB => cB.map((cB => cB.id === tV && oB.worldCode.length > 0 ? {
            ...cB,
            worldCode: oB.worldCode
          } : cB)))), Ln({
            role: "assistant",
            text: Jq(oB.worldCode.length > 0),
            changes: [],
            status: "offered",
            isNotice: !0
          });
          else if (Zn) {
            const cB = oB.worldCode.join("\n\n"),
              Bc = "switchToWorldCode" === (null === hn || void 0 === hn ? void 0 : hn.kind) ? hn.request : null;
            nV(dB ? function(cB, Bc) {
              return `In a code block, they asked: "${cB}"\nThe code block's answer needs this part in World Code, which is open now, its code above. Put it in, keeping everything World Code already has: a callback it already defines is changed, with what it does kept, never defined twice:\n\`\`\`js\n${Bc.replace(/\s*$/,"")}\n\`\`\``
            }(bB, cB) : Bc ? function(cB) {
              return `In a code block, they asked for this in World Code, which is open now: ${cB}`
            }(Bc) : null, {
              check: !1,
              about: Ic,
              useFree: lc,
              lookupOf: Hc
            }, dB ? cB : void 0)
          }
          const Qn = !!Xc && 0 === NB.length && !Zn && ("switchToWorldCode" === (null === hn || void 0 === hn ? void 0 : hn.kind) || HB && oB.worldCode.length > 0);
          if (Qn) {
            const cB = "switchToWorldCode" === (null === hn || void 0 === hn ? void 0 : hn.kind) ? hn.request : null;
            Gn(null !== cB && void 0 !== cB ? cB : oB.worldCode.length > 0 ? cT(oB.worldCode) : "", {
              leavesChangeBehind: aV,
              hasWorldCodePart: oB.worldCode.length > 0
            })
          }
          if (yV && wB.length > 0 && qB < 3 && (!(Qn || Yn || Zn) || aV) && (Un(tV, {
              warningsSentBack: !0
            }), WB((cB => [{
              id: fn(),
              text: `Fix this in your change: ${wB.join(" ")}`,
              shown: 1 === wB.length ? "Fix this line" : "Fix these lines",
              check: !1,
              isAutoFix: !0,
              autoFixRound: qB + 1,
              replaced: lnc,
              until: Date.now() + Hq
            }, ...cB]))), yV && "direct" === iB && 0 === wB.length && 0 === RB.length && 0 === Bn.length && 0 === JB.length && 0 === NB.length && !Zn && !Qn) {
            const cB = wP(oB.changes, Yc).length;
            rI(tV, qB, cB > 1 ? 1200 * (cB - 1) + 1500 : 0)
          }
        } catch (PB) {
          if (Rc.signal.aborted) AB.current = null, Ln({
            role: "assistant",
            text: "Stopped.",
            changes: [],
            status: "offered",
            isNotice: !0,
            isCalm: !0
          });
          else {
            const cB = PB instanceof GI ? PB.reason : "failed";
            Ln({
              role: "assistant",
              text: cu(cB),
              changes: [],
              status: "offered",
              isNotice: !0,
              ...Jc,
              retryAt: "busy" === cB ? Date.now() + 6e4 : void 0
            }), xn(Date.now())
          }
        } finally {
          dB.current = null, MB(null)
        }
      }, Dn = (cB, Bc, nc, Vc) => {
        const Ic = function(cB, Bc) {
          return "refused" === cB.problem ? null : {
            notice: cB.problem,
            model: Bc.model.name,
            company: Cr(Bc.provider, Bc.baseUrl, !0),
            isServer: "custom" === Bc.provider,
            detail: cB.detail && Dr(cB.detail, Bc.key)
          }
        }(cB, Bc);
        if (!Ic) return (cB => {
          Un(cB, {
            leftOut: !0
          })
        })(nc), void Ln({
          role: "assistant",
          text: Fq,
          changes: [],
          status: "offered",
          isNotice: !0
        });
        Ln({
          role: "assistant",
          text: "",
          changes: [],
          status: "offered",
          isNotice: !0,
          ...Vc,
          keyNotice: Ic
        })
      }, Nn = () => {
        const cB = NB.trim();
        if ("" === cB || sB && oB.length >= 3) return;
        const Bc = hB && null !== WV;
        if (Bc || !Qn((() => {
            En.current()
          }))) {
          if (an(!1), wB) return Fn(FP(wB, cB), JP(wB, cB), {
            check: !0,
            useFree: Bc
          }), kn(null), void EB("");
          if (sB || null === CV || void 0 === CV || !CV.question) {
            if (!sB) return EB(""), void vV(cB, void 0, {
              useFree: Bc
            });
            oB.length < 3 && (WB([...oB, {
              id: fn(),
              text: cB,
              useFree: Bc
            }]), EB(""))
          } else {
            var nc, Vc;
            EB("");
            const Ic = CM(null !== (nc = CV.askedFor) && void 0 !== nc ? nc : "", CV.question.question, cB);
            vV(Ic, cB, {
              check: !0,
              about: CV.askedFor,
              asked: `${null!==(Vc=CV.askedFor)&&void 0!==Vc?Vc:""} ${cB}`,
              useFree: Bc
            })
          }
        }
      }, En = (0, Vc.useRef)(Nn);
    En.current = Nn;
    const onc = (0, Vc.useRef)(vV);
    onc.current = vV;
    const Wn = (0, Vc.useRef)(Ln);
    Wn.current = Ln;
    const wn = (0, Vc.useRef)(null),
      [kV, Xn] = (0, Vc.useState)(null),
      Hn = oB.filter((cB => void 0 === cB.followUp));

    function Fn(cB, Bc, nc) {
      if (sB) {
        if (oB.length < 3) {
          var Vc;
          const Ic = null !== (Vc = nc.useFree) && void 0 !== Vc ? Vc : hB && null !== WV;
          Ic && an(!1), WB([...oB, {
            id: fn(),
            text: cB,
            shown: Bc,
            ...nc,
            useFree: Ic
          }])
        }
      } else vV(cB, Bc, nc)
    }(0, Vc.useEffect)((() => {
      var cB, Bc, nc;
      const [Vc, ...Ic] = oB;
      if (sB || !Vc || cV > 0) return;
      const rB = null === (cB = Vc.followUp) || void 0 === cB ? void 0 : cB.lookupOf;
      if (void 0 !== rB && !VB.some((cB => cB.id === rB))) return void WB(Ic);
      if (null === (Bc = Vc.replaced) || void 0 === Bc ? void 0 : Bc.some((cB => {
          var Bc;
          let {
            path: nc,
            text: Vc
          } = cB;
          return (null !== (Bc = Uc[nc]) && void 0 !== Bc ? Bc : "") === Vc
        }))) {
        var uc;
        const cB = (null !== (uc = Vc.until) && void 0 !== uc ? uc : 0) - Date.now();
        if (cB <= 0) return void WB(Ic);
        const Bc = setTimeout((() => {
          WB((cB => [...cB]))
        }), cB);
        return () => {
          clearTimeout(Bc)
        }
      }
      if (void 0 !== Vc.opensPath && Vc.opensPath !== bB) {
        var sc;
        (null === (sc = wn.current) || void 0 === sc ? void 0 : sc.id) !== Vc.id && (wn.current = {
          id: Vc.id,
          until: Date.now() + 3e3
        }, Wn.current({
          role: "assistant",
          text: kq(Vc.opensPath),
          changes: [],
          status: "offered",
          isNotice: !0,
          isCalm: !0
        }), oc(Vc.opensPath, 1));
        const cB = wn.current.until - Date.now();
        if (cB > 0) {
          const Bc = setTimeout((() => {
            WB((cB => [...cB]))
          }), cB);
          return () => {
            clearTimeout(Bc)
          }
        }
      }
      const Mc = null !== (nc = Vc.followUp) && void 0 !== nc ? nc : {
        ...void 0 === Vc.shown ? {} : {
          check: Vc.check,
          wordsOnly: Vc.wordsOnly,
          isAutoFix: Vc.isAutoFix,
          autoFixRound: Vc.autoFixRound
        },
        useFree: Vc.useFree
      };
      Wq(Mc) && Qu(as.getState()) ? kV !== Vc.id && (Xn(Vc.id), Ju()) : (WB(Ic), onc.current(Vc.text, Vc.shown, Mc))
    }), [sB, oB, cV, Uc, VB, bB, oc, Zn, kV]);
    const Jn = (0, Vc.useRef)(Fn);
    Jn.current = Fn, (0, Vc.useEffect)((() => {
      if (xB) {
        var cB;
        if (null === dc || void 0 === dc || dc(), "change" === xB.action) return kn(xB), void(null === (cB = Tn.current) || void 0 === cB || cB.focus());
        kn(null), Jn.current(FP(xB), JP(xB), {
          check: !1,
          wordsOnly: "explain" === xB.action
        })
      }
    }), [xB, dc]);
    const jV = (cB, Bc, nc) => {
        Lq.add(kB, cB, Bc, Date.now(), nc).then(qn).catch((cB => {
          console.error("World Code AI: couldn't keep a version of the code", cB)
        }))
      },
      Rn = (0, Vc.useRef)(new Set),
      iV = async function(cB, Bc) {
        let {
          tryAgainLater: nc = !1
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const Vc = en.current;
        if (cB.changes.some((cB => {
            var Bc;
            return (null !== (Bc = Vc[cB.path]) && void 0 !== Bc ? Bc : "") !== cB.before
          }))) return bV(cB.id, "stale"), !1;
        Rn.current.add(cB.id);
        if (!await vB(cB.changes.map((cB => ({
            path: cB.path,
            text: cB.after
          })))).finally((() => {
            Rn.current.delete(cB.id)
          }))) return nc || bV(cB.id, "stale"), !1;
        jV(function(cB) {
          const Bc = cB.replace(/\s+/g, " ").trim();
          return `Before "${Bc.length>200?`${Bc.slice(0,200).trimEnd()}\u2026`:Bc}"`
        }(Bc), Vc, function(cB) {
          const Bc = [...new Set(cB.flatMap((cB => {
            var Bc;
            return null !== (Bc = cB.why) && void 0 !== Bc ? Bc : []
          })))];
          if (0 === Bc.length) return;
          const nc = Bc.map(((cB, Bc) => 0 === Bc ? cB.charAt(0).toUpperCase() + cB.slice(1) : cB.charAt(0).toLowerCase() + cB.slice(1))).join(", ");
          return nc.length > 400 ? `${nc.slice(0,400).trimEnd()}\u2026` : nc
        }(cB.changes)), bV(cB.id, "applied"), cB.isPartial && Un(cB.id, {
          changes: cB.changes
        });
        const Ic = VB.find((Bc => Bc.id === cB.id && "pending" === Bc.noteStatus));
        return Ic && cB.isPartial ? hV(cB.id, "asked") : Ic && aI({
          ...Ic,
          status: "applied"
        }, !0), uB((Bc => {
          var nc;
          const Vc = null === (nc = Bc.findLast((Bc => "user" === Bc.role && Bc.id < cB.id))) || void 0 === nc ? void 0 : nc.planStep;
          return Vc ? Bc.map((cB => {
            var Bc;
            return cB.id === Vc.planId ? {
              ...cB,
              planDone: Math.max(null !== (Bc = cB.planDone) && void 0 !== Bc ? Bc : 0, Vc.index + 1)
            } : cB
          })) : Bc
        })), mV.current = Date.now(), !0
      }, Kn = !sB && 0 === cV && (0 === oB.length || oB[0].id === kV), xV = (0, Vc.useRef)((() => Promise.resolve(!0)));
    xV.current = async () => {
      var cB;
      const Bc = BB.pendingApply;
      if (!Bc || Bc.targetKey !== Wc.key) return !0;
      const nc = VB.find((cB => cB.id === Bc.entryId));
      if (!nc || "offered" !== nc.status) return BB.pendingApply = void 0, !0;
      const Vc = null !== (cB = Bc.picked) && void 0 !== cB ? cB : nc.changes,
        Ic = Rc && Zc && Vc.every((cB => {
          var Bc;
          return (null !== (Bc = en.current[cB.path]) && void 0 !== Bc ? Bc : "") === cB.before
        }));
      if (Date.now() > Bc.until) return BB.pendingApply = void 0, Ic && Ln({
        role: "assistant",
        text: "That change couldn't go in. Press Apply to try again.",
        changes: [],
        status: "offered",
        isNotice: !0
      }), !0;
      if (!Ic || Rn.current.has(nc.id)) return !1;
      const rB = await iV({
        id: nc.id,
        changes: Vc,
        isPartial: void 0 !== Bc.picked
      }, LV(nc.id), {
        tryAgainLater: !0
      });
      rB && BB.pendingApply === Bc && (BB.pendingApply = void 0), rB && Bc.byItself && Un(nc.id, {
        editedInPlace: !0
      });
      const uc = Vc[0];
      return rB && uc && oc(uc.path, WP(uc.before, uc.after)), rB
    }, (0, Vc.useEffect)((() => {
      var cB;
      if ((null === (cB = BB.pendingApply) || void 0 === cB ? void 0 : cB.targetKey) !== Wc.key) return;
      const Bc = setInterval((() => {
        xV.current().then((cB => {
          cB && clearInterval(Bc)
        }))
      }), 250);
      return () => {
        clearInterval(Bc)
      }
    }), [BB, Wc.key, Rc, Uc]);
    const dn = (0, Vc.useRef)((() => !0));
    dn.current = () => {
      const cB = BB.pendingInsert;
      if (!cB || cB.targetKey !== Wc.key) return !0;
      if (Date.now() > cB.until) return BB.pendingInsert = void 0, Ln({
        role: "assistant",
        text: void 0 === cB.code ? "World Code didn't open in time, so that wasn't asked here. Ask again." : "World Code didn't open in time, so the code block's World Code part isn't in. Here it is to add.",
        changes: [],
        status: "offered",
        worldCode: void 0 === cB.code ? void 0 : [cB.code],
        isNotice: void 0 === cB.code
      }), !0;
      const Bc = Object.values(en.current).some((cB => "" !== cB.trim()));
      return !(!Rc || !Zc || !Bc && Date.now() < cB.readyBy) && (BB.pendingInsert = void 0, WB((Bc => [{
        id: fn(),
        text: cB.request,
        shown: "Put the code in",
        followUp: {
          ...cB.options,
          insertsInto: bB
        }
      }, ...Bc])), !0)
    }, (0, Vc.useEffect)((() => {
      var cB;
      if ((null === (cB = BB.pendingInsert) || void 0 === cB ? void 0 : cB.targetKey) !== Wc.key) return;
      const Bc = setInterval((() => {
        dn.current() && clearInterval(Bc)
      }), 250);
      return () => {
        clearInterval(Bc)
      }
    }), [BB, Wc.key, Rc, Uc]);
    const An = cB => {
        Pn((() => {
          Mc.gameBridge.send("sendChatMessage", {
            Uu: "//export",
            channelName: null
          })
        }), Math.max(0, mV.current + 600 - Date.now())), Ln({
          role: "assistant",
          text: cB ? "Saving your game with //export, without this change. Apply it and ask me to save again to keep it too." : "Saving your game with //export. The chat says when it's saved.",
          changes: [],
          status: "offered",
          isNotice: !0,
          isCalm: !cB || void 0
        })
      },
      Gn = (cB, Bc) => {
        let {
          leavesChangeBehind: nc,
          hasWorldCodePart: Vc
        } = Bc;
        nc ? Ln({
          role: "assistant",
          text: Jq(Vc),
          changes: [],
          status: "offered",
          isNotice: !0
        }) : (Ln({
          role: "assistant",
          text: "Taking you to World Code\u2026",
          changes: [],
          status: "offered",
          isNotice: !0,
          isCalm: !0
        }), Pn((() => {
          null === Xc || void 0 === Xc || Xc(cB, !1)
        }), jO))
      },
      cI = (cB, Bc) => {
        !Bc && jB ? (Ln({
          role: "assistant",
          text: "Moving to World Code\u2026",
          changes: [],
          status: "offered",
          isNotice: !0,
          isCalm: !0
        }), Pn((() => {
          BB.pendingApply = {
            entryId: cB,
            targetKey: oP.f.key,
            until: Date.now() + aO,
            byItself: !0
          }, jB(oP.f)
        }), jO)) : Ln({
          role: "assistant",
          text: "Apply this change first, then apply the World Code part.",
          changes: [],
          status: "offered",
          isNotice: !0
        })
      },
      BV = cB => Ac && "direct" === cB && Zc && !!jB,
      nV = (cB, Bc, nc) => {
        jB && (Ln({
          role: "assistant",
          text: "Moving to World Code\u2026",
          changes: [],
          status: "offered",
          isNotice: !0,
          isCalm: !0
        }), Pn((() => {
          null !== cB && (BB.pendingInsert = {
            targetKey: oP.f.key,
            request: cB,
            options: Bc,
            code: nc,
            readyBy: Date.now() + 4e3,
            until: Date.now() + aO
          }), jB(oP.f)
        }), jO))
      },
      VV = async function(cB, Bc) {
        var nc, Vc, Ic;
        let {
          replaced: rB,
          signal: uc
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const sc = await async function(cB, Bc) {
          const nc = [];
          let Vc = null;
          for (const rB of cB) {
            var Ic;
            const cB = await TI(rB, Bc);
            nc.push(rB.call ? {
              ...cB.result,
              call: rB.call
            } : cB.result), Vc = null !== (Ic = cB.worldCodeFiles) && void 0 !== Ic ? Ic : Vc
          }
          return {
            results: nc,
            worldCodeFiles: Vc
          }
        }(cB, {
          files: en.current,
          docs: Zq(),
          errors: Qc,
          viewChunk: null !== Fc && void 0 !== Fc ? Fc : kO,
          viewGameState: null !== Jc && void 0 !== Jc ? Jc : Xq,
          readWorldCode: Hc,
          fetchDocsPage: cB => async function(cB, Bc, nc) {
            if ("" === cB.trim()) return `No url was given: give ${ec.j}, or a page it links to.`;
            const Vc = yB(cB);
            if (null === Vc) return cB.includes(ec.e) ? `${cB} is every page at once, too long to read: read ${ec.j}, then the page you need.` : `Only Bloxd's docs can be read: ${ec.j} and the pages it links to.`;
            const Ic = `There is no docs page at ${cB}. ${ec.j} lists every page with its link.`,
              rB = `${cB} couldn't be read just now. Use get_docs instead.`,
              uc = (0, tB.d)(2e4, nc);
            let sc;
            try {
              var Mc;
              const cB = await fetch(`${Bc}${Vc}`, {
                signal: uc.signal
              });
              if (404 === cB.status) return Ic;
              if (!cB.ok) return console.warn("AI Helper: a docs page couldn't be read", Vc, cB.status), rB;
              if (null !== (Mc = cB.headers.get("content-type")) && void 0 !== Mc && Mc.startsWith("text/html")) return Ic;
              sc = await cB.text()
            } catch (qB) {
              return !0 !== (null === nc || void 0 === nc ? void 0 : nc.aborted) && console.warn("AI Helper: a docs page couldn't be read", Vc, qB), rB
            } finally {
              uc.clear()
            }
            const Pc = (0, ec.C)(Vc);
            return null !== Pc && null === Pc.part && sc.length > ec.b ? `${cB} is too long to read whole: read the part you need. Its parts start at ${mB.b}${(0,ec.v)(Pc.name,0)}, and ${ec.j} says what each part has.` : sc.length <= 4e4 ? sc : (console.warn("AI Helper: a docs file is longer than any should be", Vc, sc.length), `${sc.slice(0,4e4)}\n\n(The rest of this page is cut off.)`)
          }(cB, window.location.origin, uc)
        });
        if (null !== uc && void 0 !== uc && uc.aborted) return "stopped";
        const Mc = sc.results,
          Pc = cB.flatMap((cB => "view_file" === cB.name && void 0 !== cB.args.path && cB.args.path in en.current ? [cB.args.path] : [])),
          qB = {
            ...Bc.options,
            lookups: [...(null !== (nc = Bc.options.lookups) && void 0 !== nc ? nc : []).map(hq), ...Mc],
            worldCodeFiles: null !== (Vc = sc.worldCodeFiles) && void 0 !== Vc ? Vc : Bc.options.worldCodeFiles,
            viewedPaths: [...null !== (Ic = Bc.options.viewedPaths) && void 0 !== Ic ? Ic : [], ...Pc]
          };
        return WB((cB => [{
          id: fn(),
          text: Bc.request,
          shown: Bc.shown,
          followUp: qB,
          ...rB ? {
            replaced: rB,
            until: Date.now() + Hq
          } : {}
        }, ...cB])), "asked"
      }, IV = (cB, Bc, nc) => {
        uB((Vc => Vc.map((Vc => Vc.id === cB ? {
          ...Vc,
          trial: Bc,
          trialErrors: null !== nc && void 0 !== nc ? nc : Vc.trialErrors
        } : Vc))))
      }, rI = function(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        Nc && (Vn(cB), Pn((() => {
          var nc;
          Vn(null), dB.current || yV.current.length > 0 || null !== (nc = Tn.current) && void 0 !== nc && nc.value.trim() || (JB(Sn.current), Nc({
            chatKey: wc,
            entryId: cB,
            autoFixRound: Bc
          }))
        }), Math.max(nc, mV.current + 1500 - Date.now())))
      }, uV = () => {
        qV(), (0, SM.b)(wc)
      };
    (0, Vc.useEffect)((() => {
      if (!Rc || void 0 === (null === rV || void 0 === rV ? void 0 : rV.endedAt) || (null === sn || void 0 === sn ? void 0 : sn.target.key) !== Wc.key) return void(void 0 === (null === rV || void 0 === rV ? void 0 : rV.endedAt) || sn || (0, SM.m)(wc));
      const cB = (0, SM.m)(wc);
      if (!cB) return;
      const Bc = (0, SM.u)(cB);
      Wn.current({
        role: "assistant",
        text: Bc.text,
        changes: [],
        status: "offered",
        isNotice: !0,
        isCalm: 0 === cB.errors.length && void 0 !== cB.ranAt,
        logTitle: Bc.title
      }), void 0 !== cB.ranAt && (0 !== cB.errors.length ? cB.autoFixRound >= 3 || (JB(Sn.current), WB((Bc => [{
        id: fn(),
        text: (0, SM.q)(cB.errors),
        shown: 1 === cB.errors.length ? "Fix the error" : "Fix these errors",
        check: !1,
        isAutoFix: !0,
        autoFixRound: cB.autoFixRound + 1
      }, ...Bc]))) : IV(cB.entryId, "ask", Sn.current))
    }), [rV, Rc, sn, Wc.key, wc]);
    const sV = async (cB, Bc) => {
      if (Un(cB.id, {
          forgetStatus: Bc ? "forgotten" : "kept"
        }), Bc) try {
        for (const Bc of null !== (nc = cB.forgetNotes) && void 0 !== nc ? nc : []) {
          var nc;
          mn(await gO.remove(kB, Bc))
        }
      } catch (Vc) {
        console.error("World Code AI: couldn't forget a note", Vc), Un(cB.id, {
          forgetStatus: void 0
        })
      }
    }, MV = (0, Vc.useCallback)((cB => cB.flatMap((cB => zO(Zq(), cB, Ac)))), [Ac]), PV = (0, Vc.useRef)({}), qI = (0, Vc.useRef)({}), OV = (0, Vc.useRef)(Promise.resolve()), TV = (0, Vc.useRef)([]), fV = (0, Vc.useRef)(new Map), mI = (0, Vc.useRef)(new Map), eV = (0, Vc.useRef)(null), tI = () => {
      CB.current = !1, TV.current = [], fV.current = new Map, mI.current = new Map, eV.current = null, PV.current = {}, qI.current = {}, DB(null)
    }, SV = async () => {
      if (!vn) return;
      const cB = en.current,
        Bc = function(cB, Bc, nc) {
          return Object.entries(Bc).flatMap((Bc => {
            var Vc;
            let [Ic, rB] = Bc;
            const uc = nc[Ic];
            if (void 0 === uc) return [];
            const sc = new Map(oM(null !== (Vc = cB[Ic]) && void 0 !== Vc ? Vc : "").map((cB => [cB.key, cB.value]))),
              Mc = new Map(oM(rB).map((cB => [cB.key, cB.value])));
            let Pc = uc;
            for (const [cB, nc] of sc) {
              var qB;
              const Bc = oM(Pc).find((Bc => Bc.key === cB));
              Bc && Bc.value !== nc && Mc.get(cB) === Bc.value && (Pc = null !== (qB = WM(Pc, Bc, nc)) && void 0 !== qB ? qB : Pc)
            }
            return Pc === uc ? [] : [{
              path: Ic,
              text: Pc
            }]
          }))
        }(vn, PV.current, cB);
      if (Bc.length > 0) {
        if (!await vB(Bc)) return;
        jV(function(cB) {
          const Bc = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).filter((Bc => cB.includes(Bc.name))).map((cB => ({
            name: cB.name,
            from: cB.to,
            to: cB.from
          })));
          return Bc.length > 0 ? HM(Bc, "undoing") : 0 === cB.length ? "Before undoing settings" : `Before undoing settings: ${(cB.length>3?[...cB.slice(0,3),cB.length-3+" more"]:cB).join(", ")}`
        }(TV.current, [...fV.current.values()]), cB), mV.current = Date.now()
      }
      tI()
    }, yI = !Ac && Object.values(Uc).some((cB => oM(cB).length > 0)), zI = function(cB) {
      let {
        codeBlock: Bc,
        hasSettings: nc,
        canEdit: Ic
      } = cB;
      return (0, Vc.useEffect)((() => {
        (0, sM.D)("aiNotes", !Bc)
      }), [Bc]), (0, Vc.useEffect)((() => {
        (0, sM.D)("aiGameSettings", nc)
      }), [nc]), (0, Vc.useEffect)((() => {
        (0, sM.D)("aiEdits", Ic)
      }), [Ic]), (0, MM.h)("aiHelperOverview")
    }({
      codeBlock: Ac,
      hasSettings: yI,
      canEdit: Zc
    });
    (0, Vc.useEffect)((() => {
      zI && (TB(!1), tn(!1), yn(!1), pB(null))
    }), [zI]);
    const pV = async cB => {
      const Bc = Gc(cB);
      return null === Bc ? "Notes are only about your game, never personal details." : "ok" !== await hr(Bc) ? "This note can't be saved. Notes are only about your game." : (mn(await gO.add(kB, Bc)), null)
    }, hV = (cB, Bc) => {
      Un(cB, {
        noteStatus: Bc
      })
    }, aI = async (cB, Bc) => {
      if (Bc && void 0 !== cB.note)
        if (cB.changes.length > 0 && "offered" === cB.status) hV(cB.id, "pending");
        else {
          hV(cB.id, "checking");
          try {
            hV(cB.id, null === await pV(cB.note) ? "saved" : "refused")
          } catch (nc) {
            console.error("World Code AI: couldn't keep a note", nc), hV(cB.id, "asked")
          }
        }
      else hV(cB.id, "declined")
    }, lV = cB => {
      var Bc;
      const nc = null === (Bc = VB.find((Bc => Bc.id === cB))) || void 0 === Bc ? void 0 : Bc.target.key;
      return VB.findLast((Bc => "user" === Bc.role && Bc.id < cB && Bc.target.key === nc))
    }, YV = cB => {
      var Bc;
      return null === (Bc = lV(cB)) || void 0 === Bc ? void 0 : Bc.asked
    }, LV = cB => {
      var Bc, nc;
      const Vc = lV(cB);
      return null !== (Bc = null !== (nc = null === Vc || void 0 === Vc ? void 0 : Vc.about) && void 0 !== nc ? nc : null === Vc || void 0 === Vc ? void 0 : Vc.text) && void 0 !== Bc ? Bc : "a change"
    }, gI = VB.filter(gV), UV = null === (Tc = gI[gI.length - 1]) || void 0 === Tc ? void 0 : Tc.id, bI = null !== (Sc = null === (zB = gI.findLast((cB => "user" === cB.role))) || void 0 === zB ? void 0 : zB.id) && void 0 !== Sc ? Sc : 0, ZV = gI.length < VB.length, QV = gI[gI.length - 1], CV = null !== QV && void 0 !== QV && null !== (pc = QV.question) && void 0 !== pc && pc.allowOther && !sB ? QV : void 0, DV = (0, Vc.useRef)(!1), NV = () => {
      DV.current = !0, pB("settings")
    }, oV = () => {
      TB(!1), tn(!1), yn(!1), lB.current = null, LB(null), pB("addKey")
    }, {
      activeKey: WV,
      cutShortActions: wV,
      noticeActions: XV
    } = function(cB) {
      var Bc;
      let {
        entries: nc,
        busy: Vc,
        send: Ic,
        onCheckKey: rB
      } = cB;
      const {
        active: uc
      } = Tu(), sc = null === (Bc = nc.findLast((cB => "assistant" === cB.role && !cB.isNotice))) || void 0 === Bc ? void 0 : Bc.id;
      return {
        activeKey: uc,
        cutShortActions: (cB, Bc) => ({
          canFinish: !Vc && cB === sc && (null === uc || void 0 === uc ? void 0 : uc.id) === Bc.keyId && uc.model.id === Bc.modelId,
          onFinish: () => {
            Ic(Bc.request, {
              retryOf: cB,
              continueFrom: Bc.written
            })
          }
        }),
        noticeActions: (cB, Bc, nc) => ({
          notice: nc.notice,
          onRetry: () => {
            Ic(Bc, {
              retryOf: cB
            })
          },
          onUseFree: () => {
            Ic(Bc, {
              useFree: !0,
              retryOf: cB
            })
          },
          onCheckKey: rB
        })
      }
    }({
      entries: gI,
      busy: !!sB,
      send: (cB, Bc) => {
        let {
          useFree: nc,
          retryOf: Vc,
          continueFrom: Ic
        } = Bc;
        const rB = VB.find((cB => cB.id === Vc));
        return vV(cB, null === rB || void 0 === rB ? void 0 : rB.retryShown, {
          ...null === rB || void 0 === rB ? void 0 : rB.retryOptions,
          useFree: nc,
          retryOf: Vc,
          continueFrom: Ic
        })
      },
      onCheckKey: NV
    }), HV = Zu(Zn) ? Zn.status : null, FV = null !== HV && void 0 !== HV && HV.isSuper ? HV.resetsAt : null, JV = (0, Vc.useRef)({
      resetsAt: 0,
      count: 0,
      nextAt: 0
    });
    (0, Vc.useEffect)((() => {
      if (null === FV) return;
      if (FV <= KB) {
        JV.current.resetsAt !== FV && (JV.current = {
          resetsAt: FV,
          count: 0,
          nextAt: 0
        });
        const cB = JV.current,
          Bc = [15e3, 6e4, 24e4];
        if (cB.count > Bc.length) return;
        let nc = !1;
        const Vc = setTimeout((() => {
          var Vc;
          cB.nextAt = Date.now() + (null !== (Vc = Bc[cB.count]) && void 0 !== Vc ? Vc : 0), cB.count++, as.refresh().then((() => {
            nc || xn(Date.now())
          }))
        }), Math.max(0, cB.nextAt - Date.now()));
        return () => {
          nc = !0, clearTimeout(Vc)
        }
      }
      const cB = setTimeout((() => {
        xn(Date.now())
      }), Math.max(0, (FV - KB - 1) % 6e4 + 1 - (Date.now() - KB)));
      return () => {
        clearTimeout(cB)
      }
    }), [FV, KB]);
    const jI = WV ? `${WV.id}/${WV.model.id}` : null;
    (0, Vc.useEffect)((() => {
      an(!1)
    }), [jI]);
    const RV = Object.values(Uc).some((cB => "" !== cB.trim())),
      iI = OB || eB || SB || null !== zn,
      KV = "aiAnswer" === zI || ("aiNotes" === zI || "aiGameSettings" === zI || "aiGear" === zI) && iI ? zI : "aiPanel",
      xI = (0, Vc.useRef)(null),
      dV = (0, Vc.useRef)(null),
      AV = (0, Vc.useRef)(zn);
    (0, Vc.useEffect)((() => {
      if (AV.current === zn) return;
      AV.current = zn;
      if (!document.activeElement || document.activeElement === document.body) {
        var cB;
        null === (cB = (zn ? xI : dV).current) || void 0 === cB || cB.focus()
      }
    }), [zn]), (0, Vc.useEffect)((() => {
      const cB = On.current;
      if (!zn || !cB) return;
      cB.scrollTo({
        top: 0
      });
      const Bc = "settings" === zn && DV.current ? cB.querySelector(".WorldCodeAiModelRow.Selected") : null;
      if (Bc && Bc.getBoundingClientRect().bottom > cB.getBoundingClientRect().bottom && !Fs(cB, Bc)) {
        const nc = cB.getBoundingClientRect(),
          Vc = Bc.getBoundingClientRect();
        cB.scrollTop += Vc.top - nc.top - (nc.height - Vc.height) / 2
      }
      return () => {
        cB.style.paddingBottom = ""
      }
    }), [zn]);
    const {
      disclosureRef: cr,
      gearLabelRef: nI,
      hasGearLabel: VI
    } = function(cB, Bc) {
      const nc = (0, Vc.useRef)(null),
        Ic = (0, Vc.useRef)(null),
        rB = (0, Vc.useRef)(0),
        [uc, sc] = (0, Vc.useState)(!0);
      return (0, Vc.useLayoutEffect)((() => {
        const Bc = nc.current;
        if (!Bc || "undefined" === typeof ResizeObserver) return;
        const Vc = () => {
          const nc = document.createRange();
          if (nc.selectNodeContents(Bc), "function" !== typeof nc.getBoundingClientRect) return;
          const Vc = nc.getBoundingClientRect().width,
            uc = Ic.current;
          if (uc) {
            const nc = cB.current,
              Ic = nc && parseFloat(getComputedStyle(nc).columnGap) || 0;
            rB.current = uc.getBoundingClientRect().width + Ic, Vc > Bc.clientWidth + 1 && sc(!1)
          } else Bc.clientWidth - Vc >= rB.current && sc(!0)
        };
        Vc();
        const uc = new ResizeObserver(Vc);
        return uc.observe(Bc), () => {
          uc.disconnect()
        }
      }), [cB, Bc]), {
        disclosureRef: nc,
        gearLabelRef: Ic,
        hasGearLabel: uc
      }
    }(dV, iI), rr = () => {
      var cB;
      WB([]), null === (cB = dB.current) || void 0 === cB || cB.abort(), qV()
    }, sI = (0, uc.jsxs)("div", {
      className: rB()("WorldCodeAiPanel", zn && "WorldCodeAiPanel-aiView"),
      children: [(0, uc.jsxs)("div", {
        className: "WorldCodeAiHeader",
        children: [(0, uc.jsx)("span", {
          className: "WorldCodeAiTitle",
          children: "AI Helper"
        }), (0, uc.jsx)("span", {
          ref: cr,
          className: "WorldCodeAiDisclosure",
          title: "AI can be wrong. Check its changes.",
          children: "AI can be wrong."
        }), iI && (0, uc.jsx)("button", {
          ref: xI,
          className: "WorldCodeAiLinkButton WorldCodeAiBackButton",
          onClick: () => {
            TB(!1), tn(!1), yn(!1), pB("addKey" === zn ? lB.current : null)
          },
          children: "addKey" === zn && lB.current ? "Back" : "Back to chat"
        }), zn && (0, uc.jsx)("h3", {
          className: "WorldCodeAiViewTitle",
          children: "settings" === zn ? "AI settings" : YB ? `Edit ${rs(YB)} key` : "Add an API key"
        }), "settings" === zn && (0, uc.jsxs)("span", {
          className: "WorldCodeAiViewUsing",
          children: [(0, uc.jsxs)("span", {
            className: "WorldCodeAiViewUsingModel",
            children: ["Using:", " ", WV ? hB ? "Bot.xd (free) for the next question" : TM(WV) : HV ? ts : "Bot.xd (free)"]
          }), (0, uc.jsxs)("span", {
            className: "WorldCodeAiViewUsingEdits",
            children: ["Edits: ", QB ? "On" : "Off"]
          })]
        }), iI && sB && (0, uc.jsx)("button", {
          className: "WorldCodeAiStop WorldCodeAiHeaderStop",
          onClick: rr,
          children: "Stop answer"
        }), !iI && !Ac && (0, uc.jsx)(PM, {
          step: "aiNotes",
          placement: "bottom",
          children: (0, uc.jsx)("button", {
            className: rB()("WorldCodeAiLinkButton", eB && "WorldCodeAiLinkButton-active"),
            "aria-pressed": eB,
            onClick: () => {
              TB(!1), yn(!1), tn(!eB)
            },
            children: "AI notes"
          })
        }), !iI && yI && (0, uc.jsx)(PM, {
          step: "aiGameSettings",
          placement: "bottom",
          children: (0, uc.jsx)("button", {
            className: rB()("WorldCodeAiLinkButton", SB && "WorldCodeAiLinkButton-active"),
            "aria-pressed": SB,
            onClick: () => {
              tI(), TB(!1), tn(!1), yn(!SB)
            },
            children: "Game settings"
          })
        }), !iI && PB.length > 0 && (0, uc.jsx)("button", {
          className: rB()("WorldCodeAiLinkButton", OB && "WorldCodeAiLinkButton-active"),
          "aria-pressed": OB,
          onClick: () => {
            xn(Date.now()), tn(!1), yn(!1), TB(!OB)
          },
          children: "History"
        }), !iI && VB.length > 0 && (0, uc.jsx)("button", {
          className: "WorldCodeAiLinkButton",
          disabled: !!sB,
          onClick: () => {
            uV(), WB([]), uB([])
          },
          children: "New chat"
        }), !iI && (0, uc.jsxs)("div", {
          className: "WorldCodeAiViewSwitch",
          role: "tablist",
          children: [(0, uc.jsx)("button", {
            role: "tab",
            "aria-selected": !0,
            className: "Selected",
            children: "Chat"
          }), (0, uc.jsx)("button", {
            role: "tab",
            "aria-selected": !1,
            onClick: Ec,
            children: "Code"
          })]
        }), !iI && (0, uc.jsx)(PM, {
          step: "aiGear",
          placement: "bottom",
          children: (0, uc.jsxs)("button", {
            ref: dV,
            className: "WorldCodeAiLinkButton WorldCodeAiGear",
            "aria-label": "AI Helper settings",
            title: "AI Helper settings",
            onClick: () => {
              DV.current = !1, pB("settings")
            },
            children: [(0, uc.jsx)(Oc.e, {
              name: "gear"
            }), VI && (0, uc.jsx)("span", {
              ref: nI,
              className: "WorldCodeAiGearLabel",
              children: "Settings"
            })]
          })
        })]
      }), (0, uc.jsxs)("div", {
        className: "WorldCodeAiMessages",
        ref: On,
        role: iI ? void 0 : "log",
        "aria-live": iI ? void 0 : "polite",
        children: [OB && (0, uc.jsx)(gP, {
          snapshots: PB,
          files: Uc,
          now: KB,
          onRestore: Zc && !sB ? cB => {
            (async cB => {
              const Bc = en.current,
                nc = lM(cB, Bc);
              if (0 === nc.length) return;
              if (!await vB(nc)) return;
              jV("Before going back", Bc), TB(!1), null !== nn && uV();
              const Vc = {};
              for (const uc of nc) Vc[uc.path] = uc.text;
              const Ic = cB => gV(cB) && "applied" === cB.status && cB.changes.some((cB => cB.path in Vc && Vc[cB.path] !== cB.after)),
                rB = VB.filter((cB => Ic(cB) && "saved" === cB.noteStatus && void 0 !== cB.note && fB.includes(cB.note))).map((cB => {
                  var Bc;
                  return null !== (Bc = cB.note) && void 0 !== Bc ? Bc : ""
                }));
              uB((cB => cB.map((cB => Ic(cB) ? {
                ...cB,
                status: "undone",
                wentBack: !0,
                noteStatus: "asked" === cB.noteStatus ? void 0 : cB.noteStatus
              } : cB)))), Ln({
                role: "assistant",
                text: "Your code is back to how it was.",
                changes: [],
                status: "offered",
                isNotice: !0,
                isCalm: !0,
                undoFiles: Bc,
                leftFiles: Object.fromEntries(nc.map((cB => [cB.path, cB.text]))),
                forgetNotes: rB.length > 0 ? rB : void 0
              })
            })(cB)
          } : void 0
        }), SB && (0, uc.jsx)(LP, {
          files: Uc,
          before: vn,
          onWrite: Zc ? (cB, Bc, nc) => {
            const Vc = OV.current.then((async () => {
              var Vc, Ic, rB, uc;
              const sc = en.current,
                Mc = PV.current[cB],
                Pc = void 0 !== Mc && (null !== (Vc = sc[cB]) && void 0 !== Vc ? Vc : "") === qI.current[cB] ? {
                  ...sc,
                  [cB]: Mc
                } : sc,
                qB = WM(null !== (Ic = Pc[cB]) && void 0 !== Ic ? Ic : "", Bc, nc);
              if (null === qB) return !1;
              if (qB === Pc[cB]) return !0;
              if (!await vB([{
                  path: cB,
                  text: qB
                }])) return !1;
              const Oc = kP(Bc),
                Tc = `${cB}:${Bc.key}`,
                fc = null !== (rB = mI.current.get(Tc)) && void 0 !== rB ? rB : Bc.value;
              mI.current.set(Tc, fc), fc === nc ? fV.current.delete(Tc) : fV.current.set(Tc, {
                name: Oc,
                from: XM(fc),
                to: XM(nc)
              });
              const mB = HM([...fV.current.values()]);
              if (CB.current) {
                var ec;
                null === (ec = eV.current) || void 0 === ec || ec.then((async cB => {
                  void 0 !== cB && qn(await Lq.relabel(kB, cB, mB))
                })).catch((cB => {
                  console.error("World Code AI: couldn't rename a version of the code", cB)
                }))
              } else {
                CB.current = !0;
                const cB = Date.now();
                eV.current = Lq.add(kB, mB, Pc, cB).then((Bc => {
                  var nc;
                  return qn(Bc), null === (nc = Bc.find((Bc => Bc.at === cB && Bc.label === mB))) || void 0 === nc ? void 0 : nc.id
                })).catch((cB => {
                  console.error("World Code AI: couldn't keep a version of the code", cB)
                })), DB(Pc)
              }
              return TV.current.includes(Oc) || TV.current.push(Oc), qI.current[cB] = null !== (uc = Pc[cB]) && void 0 !== uc ? uc : "", PV.current[cB] = qB, mV.current = Date.now(), !0
            }));
            return OV.current = Vc.catch((() => !1)), Vc
          } : void 0,
          onTryIt: vn ? () => {
            Pn(Dc, Math.max(0, mV.current + 600 - Date.now()))
          } : void 0,
          onUndo: vn && Zc ? () => {
            SV()
          } : void 0
        }), "settings" === zn && (0, uc.jsx)(As, {
          allowEdits: UB,
          onAllowEditsChange: Zc ? cB => {
            bn(cB),
              function(cB) {
                try {
                  localStorage.setItem(ws, String(cB))
                } catch {}
              }(cB)
          } : void 0,
          onAddKey: () => {
            lB.current = "settings", LB(null), pB("addKey")
          },
          onEditKey: cB => {
            lB.current = "settings", LB(cB), pB("addKey")
          }
        }), "addKey" === zn && (0, uc.jsx)(rP, {
          editing: null !== YB && void 0 !== YB ? YB : void 0,
          onAdded: () => {
            DV.current = !0, pB(lB.current)
          },
          onOpenSettings: () => {
            DV.current = !1, pB("settings")
          }
        }, null !== (hc = null === YB || void 0 === YB ? void 0 : YB.id) && void 0 !== hc ? hc : "new"), eB && (0, uc.jsx)(UM, {
          notes: fB,
          outline: nB(Uc, new Set(Zq().callbackNames())),
          FQ: pV,
          onDelete: cB => {
            gO.remove(kB, cB).then(mn).catch((cB => {
              console.error("World Code AI: couldn't delete a note", cB)
            }))
          }
        }), !iI && VB.map(((cB, Bc) => {
          var nc, Ic, Mc, qB, Oc, Tc, fc, mB;
          const ec = gV(cB),
            tB = ZV && (null === (nc = VB[Bc - 1]) || void 0 === nc ? void 0 : nc.target.key) !== cB.target.key,
            Sc = 0 === cB.changes.length,
            yB = Sc && !!cB.failedEdits && !cB.question && !cB.worldCode,
            zB = cB.failedEdits && (0, uc.jsx)(Aq, {
              failed: cB.failedEdits,
              nothingChanged: Sc,
              defaultOpen: !cB.byItself,
              isElsewhere: !ec,
              onRetry: cB.id !== UV || sB ? void 0 : () => {
                vV("These changes from your last answer didn't go in. Make them again.", "Try the missing change again", {
                  about: LV(cB.id),
                  failedEdits: cB.failedEdits
                })
              }
            });
          var pc;
          return void 0 === cB.logTitle && (!cB.isNotice || "assistant" !== cB.role || "" === cB.text || void 0 !== cB.retry || cB.keyNotice || cB.undoFiles || cB.failedEdits || cB.cutShort || cB.question || cB.worldCode || 0 !== cB.changes.length) ? (0, uc.jsxs)(Vc.Fragment, {
            children: [tB && (0, uc.jsx)(xO, {
              target: cB.target,
              isOpen: ec
            }), (0, uc.jsxs)("div", {
              className: rB()("WorldCodeAiEntry", `WorldCodeAiEntry-${cB.role}`, {
                "WorldCodeAiEntry-elsewhere": !ec,
                WorldCodeAiNotice: cB.isNotice,
                "WorldCodeAiNotice-calm": cB.isNotice && cB.isCalm,
                "WorldCodeAiNotice-past": cB.isNotice && void 0 !== cB.retry && (cB.id !== UV || !!lnc)
              }),
              children: [Sc && zB, yB ? null : cB.isNotice && void 0 !== cB.retry && (cB.id !== UV || lnc) ? (0, uc.jsx)("p", {
                children: cB.keyNotice ? Ns(cB.keyNotice) : void 0 !== cB.retryAt ? "Not answered: Bot.xd was busy." : "Not answered: the AI had a problem."
              }) : cB.keyNotice ? (0, uc.jsxs)(uc.Fragment, {
                children: [(0, uc.jsx)("p", {
                  children: Ds(cB.keyNotice)
                }), cB.keyNotice.detail && (0, uc.jsx)(Cs, {
                  detail: cB.keyNotice.detail
                })]
              }) : cB.undoFiles ? (0, uc.jsxs)("div", {
                className: "WorldCodeAiWentBack",
                children: [(0, uc.jsx)("span", {
                  children: "undone" === cB.status ? "Undone: your code is as it was before going back." : cB.text
                }), ec && "undone" !== cB.status && Rq(cB, Uc) && Zc && (0, uc.jsx)("button", {
                  className: "WorldCodeAiLinkButton WorldCodeAiNoticeUndo",
                  disabled: !!sB,
                  title: sB ? "You can undo once the answer is in." : void 0,
                  onClick: () => {
                    (async cB => {
                      var Bc;
                      const nc = en.current;
                      if (!Rq(cB, nc)) return;
                      const Vc = lM({
                        id: 0,
                        at: 0,
                        label: "",
                        files: null !== (Bc = cB.undoFiles) && void 0 !== Bc ? Bc : {}
                      }, nc).filter((Bc => void 0 !== cB.leftFiles && Bc.path in cB.leftFiles));
                      if (Vc.length > 0) {
                        if (!await vB(Vc)) return;
                        jV("Before undoing going back", nc)
                      }
                      const Ic = {
                        ...nc
                      };
                      for (const rB of Vc) Ic[rB.path] = rB.text;
                      uB((Bc => Bc.map((Bc => Bc.id === cB.id ? {
                        ...Bc,
                        status: "undone"
                      } : gV(Bc) && Bc.wentBack && Bc.changes.every((cB => {
                        var Bc;
                        return (null !== (Bc = Ic[cB.path]) && void 0 !== Bc ? Bc : "") === cB.after
                      })) ? {
                        ...Bc,
                        status: "applied",
                        wentBack: void 0
                      } : Bc))))
                    })(cB)
                  },
                  children: sB ? "Undo going back after this answer" : "Undo going back"
                })]
              }) : "assistant" === cB.role ? (0, uc.jsx)(Pc.e, {
                markdown: "applied" !== cB.status && !cB.editedInPlace && (cB.changes.length > 0 || null !== (Ic = cB.failedEdits) && void 0 !== Ic && Ic.length) ? lP(cB.text) : cB.text
              }) : (0, uc.jsx)("p", {
                children: cB.text
              }), cB.answeredBy && (0, uc.jsx)(vM, {
                answeredBy: cB.answeredBy
              }), cB.oneOff && WV && cB.id === UV && !sB && (0, uc.jsxs)("p", {
                className: "WorldCodeAiBackTo",
                children: ["Your next question goes back to ", WV.model.name, "."]
              }), cB.cutShort && (0, uc.jsx)(Ws, {
                hasCode: cB.changes.length > 0 || !!cB.worldCode,
                ...wV(cB.id, cB.cutShort)
              }), cB.forgetNotes && (0, uc.jsx)("div", {
                className: "WorldCodeAiForget",
                children: ec && void 0 === cB.forgetStatus && cB.id > bI ? (0, uc.jsxs)(uc.Fragment, {
                  children: [(0, uc.jsxs)("span", {
                    className: "WorldCodeAiForgetAsk",
                    children: [1 === cB.forgetNotes.length ? "Forget this note in AI notes too? " : "Forget these notes in AI notes too? ", (0, uc.jsx)("span", {
                      className: "WorldCodeAiForgetNote",
                      children: cB.forgetNotes.map((cB => `"${cB}"`)).join(", ")
                    })]
                  }), (0, uc.jsxs)("div", {
                    className: "WorldCodeAiNoteButtons",
                    children: [(0, uc.jsx)("button", {
                      className: "WorldCodeAiSecondaryButton",
                      onClick: () => {
                        sV(cB, !0)
                      },
                      children: "Forget it"
                    }), (0, uc.jsx)("button", {
                      className: "WorldCodeAiLinkButton",
                      onClick: () => {
                        sV(cB, !1)
                      },
                      children: "Keep it"
                    })]
                  })]
                }) : (0, uc.jsx)("span", {
                  className: "WorldCodeAiHint",
                  children: "forgotten" === cB.forgetStatus ? "Taken out of AI notes." : "Kept in AI notes."
                })
              }), cB.changes.length > 0 && (0, uc.jsx)(Kq, {
                entry: cB,
                defaultOpen: !cB.byItself,
                elsewhere: ec ? void 0 : cB.target,
                isOutOfDate: ec && !Rn.current.has(cB.id) && cB.changes.some((cB => {
                  var Bc;
                  return (null !== (Bc = Uc[cB.path]) && void 0 !== Bc ? Bc : "") !== cB.before
                })),
                canEdit: ec ? Zc : !!jB && (!cB.target.codeBlock || cB.target.canChangePos),
                request: YV(cB.id),
                onApply: Bc => {
                  ec ? iV(Bc ? {
                    id: cB.id,
                    changes: Bc,
                    isPartial: !0
                  } : cB, LV(cB.id)) : ((cB, Bc) => {
                    jB && Kn && (BB.pendingApply = {
                      entryId: cB.id,
                      targetKey: cB.target.key,
                      picked: Bc,
                      until: Date.now() + aO
                    }, jB(cB.target))
                  })(cB, Bc)
                },
                checkPicked: ec ? MV : void 0,
                onPickedChange: Bc => {
                  HB((nc => {
                    if (nc.has(cB.id) === Bc) return nc;
                    const Vc = new Set(nc);
                    return Bc ? Vc.add(cB.id) : Vc.delete(cB.id), Vc
                  }))
                },
                onUndo: () => {
                  (async cB => {
                    const Bc = en.current;
                    if (cB.changes.some((cB => {
                        var nc;
                        return (null !== (nc = Bc[cB.path]) && void 0 !== nc ? nc : "") !== cB.after
                      }))) return;
                    await vB(cB.changes.map((cB => ({
                      path: cB.path,
                      text: cB.before
                    })))) && (bV(cB.id, "undone"), null !== nn && uV())
                  })(cB)
                },
                onTryIt: () => {
                  (cB => {
                    const Bc = Sn.current;
                    JB(Bc), IV(cB.id, "ask", Bc), Pn(Dc, Math.max(0, mV.current + 600 - Date.now()))
                  })(cB)
                },
                isLatest: ec && cB.id > bI,
                canUndo: ec && cB.changes.every((cB => {
                  var Bc;
                  return (null !== (Bc = Uc[cB.path]) && void 0 !== Bc ? Bc : "") === cB.after
                })),
                onFixWarnings: () => {
                  (cB => {
                    var Bc;
                    const nc = Ys(null !== (Bc = cB.warnings) && void 0 !== Bc ? Bc : []);
                    var Vc;
                    if (!nc) return void vV(`Fix this in your change: ${null===(Vc=cB.warnings)||void 0===Vc?void 0:Vc.join(" ")}`);
                    const Ic = Zq(),
                      rB = cB.changes.map((Bc => ({
                        ...Bc,
                        before: "applied" === cB.status ? Bc.after : Bc.before,
                        after: Us(Bc.after, nc)
                      })));
                    Ln({
                      role: "user",
                      text: 1 === nc.length ? "Fix this line" : "Fix these lines",
                      changes: [],
                      status: "offered"
                    }), Ln({
                      role: "assistant",
                      text: `Fixed without asking the AI: ${nc.map(bM).join(" ")}`,
                      changes: rB,
                      status: "offered",
                      swappedTo: nc.flatMap((cB => {
                        let {
                          to: Bc
                        } = cB;
                        return Bc ? [Bc] : []
                      })),
                      warnings: rB.flatMap((cB => zO(Ic, cB, Ac)))
                    })
                  })(cB)
                },
                onCheck: () => {
                  vV(function(cB) {
                    const Bc = [...new Set(cB)];
                    return Bc.length > 0 ? `${iO} These names were checked against the game and are right, so keep them: ${Bc.map((cB=>`"${cB}"`)).join(", ")}.` : iO
                  }(gI.flatMap((cB => {
                    var Bc;
                    return null !== (Bc = cB.swappedTo) && void 0 !== Bc ? Bc : []
                  }))), "Check it for mistakes")
                },
                busy: ec ? !!sB : !Kn
              }), cB.question && (0, uc.jsx)(vP, {
                ownAnswerBelow: !0,
                question: cB.question,
                onAnswer: cB.id !== UV || sB ? void 0 : (Bc, nc) => {
                  var Vc, Ic, rB, uc;
                  const sc = CM(null !== (Vc = cB.askedFor) && void 0 !== Vc ? Vc : "", null !== (Ic = null === (rB = cB.question) || void 0 === rB ? void 0 : rB.question) && void 0 !== Ic ? Ic : "", Bc);
                  vV(sc, null !== Bc && void 0 !== Bc ? Bc : "Let the AI pick", {
                    check: nc,
                    about: cB.askedFor,
                    asked: nc && Bc ? `${null!==(uc=cB.askedFor)&&void 0!==uc?uc:""} ${Bc}` : null
                  })
                }
              }), ec && cB.offerExport && (0, uc.jsx)("button", {
                className: "WorldCodeAiSecondaryButton WorldCodeAiSaveGame",
                onClick: () => {
                  Un(cB.id, {
                    offerExport: !1
                  }), An("offered" === cB.status && cB.changes.length > 0)
                },
                children: "Save my game"
              }), cB.plan && (0, uc.jsx)(QM, {
                steps: cB.plan,
                built: null !== (Mc = cB.planBuilt) && void 0 !== Mc ? Mc : 0,
                done: null !== (qB = cB.planDone) && void 0 !== qB ? qB : 0,
                onBuild: ec && !sB && Zc ? Bc => {
                  var nc;
                  const Vc = null !== (nc = cB.plan) && void 0 !== nc ? nc : [];
                  Cn((() => {
                    Un(cB.id, {
                      planBuilt: Bc + 1
                    }), onc.current(function(cB, Bc) {
                      const nc = cB.map(((cB, nc) => `${nc+1}. ${cB}${nc<Bc?" (built)":""}`)).join("\n");
                      return `Build step ${Bc+1} of our plan now: ${cB[Bc]}\nThe whole plan:\n${nc}\nBuild only step ${Bc+1}, keeping what earlier steps built, so I can try it before the next.`
                    }(Vc, Bc), `Build step ${Bc+1}: ${Vc[Bc]}`, {
                      about: Vc[Bc],
                      asked: Vc[Bc],
                      planStep: {
                        planId: cB.id,
                        index: Bc
                      }
                    })
                  }))
                } : void 0
              }), ec && cB.note && cB.noteStatus && !(cB.wentBack && "saved" === cB.noteStatus) && (0, uc.jsx)(ZM, {
                note: cB.note,
                status: cB.noteStatus,
                isPartLeftOut: "offered" === cB.status && XB.has(cB.id),
                defaultOpen: !cB.byItself || "asked" === cB.noteStatus,
                onAnswer: Bc => {
                  aI(cB, Bc)
                }
              }, "asked" === cB.noteStatus ? "asked" : "kept"), !Sc && zB, cB.lookups && (0, uc.jsx)(Gq, {
                lookups: cB.lookups.lookups,
                defaultOpen: !cB.lookedAt,
                isElsewhere: !ec
              }), ec && cB.lookups && !cB.lookedAt && (0, uc.jsx)("div", {
                className: "WorldCodeAiLookups",
                children: (0, uc.jsx)("button", {
                  className: "WorldCodeAiSecondaryButton",
                  disabled: !!sB,
                  onClick: () => {
                    (async cB => {
                      if (!cB.lookups || cB.lookedAt || sB) return;
                      Un(cB.id, {
                        lookedAt: !0
                      });
                      const Bc = new AbortController;
                      dB.current = Bc;
                      const nc = Date.now();
                      xn(nc), MB({
                        phase: "thinking",
                        startedAt: nc
                      });
                      try {
                        "stopped" === await VV(cB.lookups.lookups, cB.lookups.followUp, {
                          signal: Bc.signal
                        }) && Un(cB.id, {
                          lookedAt: !1
                        })
                      } finally {
                        dB.current = null, MB(null)
                      }
                    })(cB)
                  },
                  children: "Let the AI look"
                })
              }), cB.worldCode && (0, uc.jsx)(dq, {
                code: cB.worldCode.join("\n"),
                defaultOpen: !cB.byItself,
                isElsewhere: !ec,
                onSwitch: ec && Xc ? () => {
                  var Bc;
                  Xc(cT(null !== (Bc = cB.worldCode) && void 0 !== Bc ? Bc : []))
                } : void 0
              }), ec && "ask" === cB.trial && cB.id > bI && Cc <= (null !== (Oc = cB.trialErrors) && void 0 !== Oc ? Oc : 0) && (0, uc.jsxs)("div", {
                className: "WorldCodeAiTrial",
                children: [(0, uc.jsx)("span", {
                  children: "Did your world do what you wanted?"
                }), (0, uc.jsxs)("div", {
                  className: "WorldCodeAiTrialButtons",
                  children: [(0, uc.jsx)("button", {
                    ref: tV,
                    className: "WorldCodeAiSecondaryButton",
                    onClick: () => {
                      IV(cB.id, "worked")
                    },
                    children: "Yes"
                  }), (0, uc.jsx)("button", {
                    className: "WorldCodeAiSecondaryButton",
                    onClick: () => {
                      var Bc;
                      IV(cB.id, "notQuite"), EB("It didn't work because "), null === (Bc = Tn.current) || void 0 === Bc || Bc.focus()
                    },
                    children: "Not quite"
                  })]
                })]
              }), ec && "worked" === cB.trial && cB.id > bI && (0, uc.jsxs)("div", {
                className: "WorldCodeAiTrial",
                children: [(0, uc.jsx)("span", {
                  children: "Nice! What next?"
                }), (0, uc.jsx)(oq, {
                  requests: Nq,
                  onPick: cB => {
                    vV(cB, void 0, {
                      asked: null
                    })
                  }
                })]
              }), ec && "notQuite" === cB.trial && cB.id > bI && (0, uc.jsxs)("div", {
                className: "WorldCodeAiTrial WorldCodeAiTrial-wrong",
                children: [(0, uc.jsx)("span", {
                  children: "What went wrong? Pick one, or say it in your own words below."
                }), (0, uc.jsx)(oq, {
                  requests: Eq,
                  onPick: cB => {
                    vV(cB, void 0, {
                      asked: null
                    })
                  }
                })]
              }), "assistant" === cB.role && cB.changes.length > 0 && "offered" === cB.status && cB.id === UV && !sB && (0, uc.jsx)(oq, {
                requests: vO,
                onPick: cB => {
                  vV(cB, void 0, {
                    asked: null
                  })
                }
              }), "assistant" === cB.role && void 0 !== cB.answeredBy && "free" !== cB.answeredBy && 0 === cB.changes.length && !cB.worldCode && !cB.cutShort && cB.id === UV && !sB && tu(cB.text) && (0, uc.jsx)(oq, {
                requests: Dq,
                onPick: () => {
                  vV("You said what you'd change but made no change. Make it now, with the code in full.", "Make the change", {
                    asked: null
                  })
                }
              }), cB.keyNotice && void 0 !== cB.retry && cB.id === UV && !sB && (0, uc.jsx)(os, {
                ...XV(cB.id, cB.retry, cB.keyNotice)
              }), void 0 !== cB.retry && !cB.keyNotice && cB.id === UV && !sB && (0, uc.jsxs)("div", {
                className: "WorldCodeAiRetry",
                children: [(0, uc.jsx)("button", {
                  ...Zs.d,
                  className: "WorldCodeAiSecondaryButton",
                  disabled: (null !== (Tc = cB.retryAt) && void 0 !== Tc ? Tc : 0) > KB,
                  onClick: () => {
                    var Bc;
                    vV(null !== (Bc = cB.retry) && void 0 !== Bc ? Bc : "", cB.retryShown, {
                      ...cB.retryOptions,
                      retryOf: cB.id
                    })
                  },
                  children: (null !== (fc = cB.retryAt) && void 0 !== fc ? fc : 0) > KB ? `Try again in ${BO((null!==(mB=cB.retryAt)&&void 0!==mB?mB:0)-KB)}` : "Try again"
                }), WV && (0, uc.jsxs)("button", {
                  className: "WorldCodeAiPrimaryButton",
                  onClick: () => {
                    var Bc;
                    vV(null !== (Bc = cB.retry) && void 0 !== Bc ? Bc : "", cB.retryShown, {
                      ...cB.retryOptions,
                      retryOf: cB.id,
                      useFree: !1
                    })
                  },
                  children: ["Ask ", WV.model.name, " instead"]
                }), !WV && (0, uc.jsx)("button", {
                  className: "WorldCodeAiLinkButton",
                  onClick: NV,
                  children: "Choose another AI"
                })]
              })]
            })]
          }, cB.id) : (0, uc.jsxs)(Vc.Fragment, {
            children: [tB && (0, uc.jsx)(xO, {
              target: cB.target,
              isOpen: ec
            }), cB.lookups && (0, uc.jsx)(Gq, {
              lookups: cB.lookups.lookups,
              words: cB.text,
              defaultOpen: !cB.lookedAt,
              isElsewhere: !ec
            }), !cB.lookups && (0, uc.jsx)(sc, {
              title: null !== (pc = cB.logTitle) && void 0 !== pc ? pc : cB.isCalm ? "Update" : "Problem",
              isCalm: cB.isCalm || "user" === cB.role,
              isElsewhere: !ec,
              children: (0, uc.jsx)("p", {
                children: cB.text
              })
            })]
          }, cB.id)
        })), !iI && ZV && (null === (aB = VB[VB.length - 1]) || void 0 === aB ? void 0 : aB.target.key) !== Wc.key && (0, uc.jsx)(xO, {
          target: Wc,
          isOpen: !0
        }), !iI && 0 === gI.length && (0, uc.jsxs)("div", {
          className: "WorldCodeAiEmpty",
          children: [(0, uc.jsx)("p", {
            children: Ac ? "What should happen when someone clicks this block? Ask in your own words." : "What do you want your world to do? Ask in your own words."
          }), (0, uc.jsxs)("div", {
            className: "WorldCodeAiChips",
            children: [RV && (0, uc.jsx)("button", {
              ...Zs.d,
              className: "WorldCodeAiChip",
              onClick: () => {
                vV("Explain what my code does")
              },
              children: "Explain my code"
            }), RV && !Ac && !yI && Zc && (0, uc.jsx)("button", {
              ...Zs.d,
              className: "WorldCodeAiChip",
              onClick: () => {
                vV("Put the numbers and messages in my code that I might want to change (times, amounts, messages) in CONFIG settings at the top, and use them from there. Change nothing else.", "Make settings I can change")
              },
              children: "Make settings I can change"
            }), (Zc ? Ac ? Cq : Qq : []).map((cB => (0, Vc.createElement)("button", {
              ...Zs.d,
              key: cB,
              className: "WorldCodeAiChip",
              onClick: () => {
                vV(cB)
              }
            }, cB)))]
          }), (0, uc.jsxs)("p", {
            className: "WorldCodeAiPrivacy",
            children: [WV ? `Bloxd's safety check first makes sure your request is about your game, then it goes with your code to ${WV.model.name} with your key.` : HV ? "deepseek" === HV.provider ? "Your request and code go through Bloxd to Super Bot.xd, run by DeepSeek, which stores them on its servers in China." : "Your request and code go through Bloxd to Super Bot.xd." : "Your request and code go to Bot.xd, which doesn't keep them.", " ", "Never type personal details, like your name, address or school."]
          }), !WV && (0, uc.jsxs)("p", {
            className: "WorldCodeAiPrivacy",
            children: ["Want a stronger AI?", " ", (0, uc.jsx)("button", {
              className: "WorldCodeAiKeyLearnMore",
              onClick: oV,
              children: "Add your own API key"
            })]
          })]
        }), !iI && sB && (0, uc.jsx)("div", {
          className: "WorldCodeAiEntry WorldCodeAiEntry-assistant WorldCodeAiBusyEntry",
          children: (0, uc.jsxs)("div", {
            className: "WorldCodeAiBusy",
            role: "status",
            children: [(0, uc.jsx)("span", {
              className: "WorldCodeAiSpinner"
            }), (0, uc.jsx)("span", {
              className: "WorldCodeAiBusyText",
              children: (0, uc.jsx)(sc, {
                title: null !== (lc = nO(sB)) && void 0 !== lc ? lc : "Thinking\u2026",
                isCalm: !0,
                children: "waiting" === sB.phase ? (0, uc.jsxs)("span", {
                  className: "WorldCodeAiBusyHint",
                  children: [bq((null !== (Yc = sB.until) && void 0 !== Yc ? Yc : KB) - KB), " Lots of people share Bot.xd."]
                }) : (0, uc.jsxs)(uc.Fragment, {
                  children: [(0, uc.jsx)(VO, {
                    busy: sB
                  }), "screening" === sB.phase && (null !== (Lc = sB.until) && void 0 !== Lc ? Lc : 0) > KB && (0, uc.jsxs)("span", {
                    className: "WorldCodeAiBusyHint",
                    children: [bq((null !== (gB = sB.until) && void 0 !== gB ? gB : KB) - KB), " Lots of people share the safety check."]
                  }), "checking" !== sB.phase && "screening" !== sB.phase && (0, uc.jsx)("span", {
                    className: "WorldCodeAiBusyHint",
                    children: sB.keyModel ? `${sB.keyModel} is answering with your key.` : sB.isSuperBot ? `${ts} is answering from your usage.` : EP(gn.current, sB.model)
                  })]
                })
              })
            }), (0, uc.jsx)("button", {
              className: "WorldCodeAiSecondaryButton WorldCodeAiStop",
              onClick: rr,
              children: "Stop"
            })]
          })
        }), !iI && !sB && Mn && (0, uc.jsx)("div", {
          className: "WorldCodeAiEntry WorldCodeAiEntry-assistant WorldCodeAiBusyEntry",
          children: (0, uc.jsxs)("div", {
            className: "WorldCodeAiBusy",
            role: "status",
            children: [(0, uc.jsx)("span", {
              className: "WorldCodeAiSpinner"
            }), (0, uc.jsx)("span", {
              className: "WorldCodeAiBusyText",
              children: (0, uc.jsx)(sc, {
                title: "Testing\u2026",
                isCalm: !0,
                children: (0, uc.jsx)("span", {
                  className: "WorldCodeAiBusyHint",
                  children: Ac ? "Your code block runs once in your world, as if you clicked it. If it shows an error, the AI fixes it." : `Your change runs in your world for ${SM.y/1e3} seconds. If it shows an error, the AI fixes it.`
                })
              })
            }), (0, uc.jsx)("button", {
              className: "WorldCodeAiSecondaryButton WorldCodeAiStop",
              onClick: uV,
              children: "Stop"
            })]
          })
        }), !iI && Hn.map(((cB, Bc) => {
          var nc, Vc;
          return (0, uc.jsxs)("div", {
            className: "WorldCodeAiEntry WorldCodeAiEntry-user WorldCodeAiQueued",
            children: [(0, uc.jsx)("p", {
              children: null !== (nc = cB.shown) && void 0 !== nc ? nc : cB.text
            }), (0, uc.jsxs)("span", {
              className: "WorldCodeAiQueuedNote",
              children: [cB.id === kV ? "Pick Bot.xd to send it" : null !== (Vc = Uq[Bc]) && void 0 !== Vc ? Vc : "In line", (0, uc.jsx)("button", {
                className: "WorldCodeAiLinkButton",
                onClick: () => {
                  WB((Bc => Bc.filter((Bc => Bc.id !== cB.id))))
                },
                children: "Delete"
              })]
            })]
          }, cB.id)
        }))]
      }), lnc && !sB && (0, uc.jsxs)("div", {
        className: "WorldCodeAiErrorBanner",
        children: [(0, uc.jsxs)("div", {
          className: "WorldCodeAiErrorPlain",
          children: [void 0 !== Yn.line && (0, uc.jsxs)(uc.Fragment, {
            children: [(0, uc.jsxs)("button", {
              className: "WorldCodeAiLinkButton",
              title: "Show this line in your code",
              onClick: () => {
                var cB, Bc;
                oc(null !== (cB = Yn.path) && void 0 !== cB ? cB : bB, null !== (Bc = Yn.line) && void 0 !== Bc ? Bc : 1), window.matchMedia("(max-width: 900px)").matches && Ec()
              },
              children: [Yn.path && Yn.path !== bB ? `${Yn.path} line` : "Line", " ", Yn.line]
            }), ":", " "]
          }), Yn.text]
        }), jn && (0, uc.jsx)("div", {
          className: "WorldCodeAiErrorText",
          children: lnc
        }), (0, uc.jsxs)("div", {
          className: "WorldCodeAiErrorActions",
          children: [(0, uc.jsx)("button", {
            ...Zs.d,
            className: "WorldCodeAiPrimaryButton",
            onClick: () => {
              Cn((() => {
                JB(Cc), onc.current(`Fix this error: ${lnc}`)
              }))
            },
            children: "Fix the error"
          }), (0, uc.jsx)("button", {
            ...Zs.d,
            className: "WorldCodeAiSecondaryButton",
            onClick: () => {
              Cn((() => {
                JB(Cc), onc.current(`Explain this error in simple words, and where it is in my code: ${lnc}`)
              }))
            },
            children: "Explain it"
          }), (0, uc.jsx)("button", {
            className: "WorldCodeAiLinkButton",
            onClick: () => {
              JB(Cc)
            },
            children: "Dismiss"
          }), (0, uc.jsx)("button", {
            className: "WorldCodeAiLinkButton WorldCodeAiErrorDetailsToggle",
            onClick: () => {
              RB(!jn)
            },
            children: jn ? "Hide details" : "Show details"
          })]
        }), (0, uc.jsx)("div", {
          className: "WorldCodeAiErrorNote",
          children: "Fix the error and Explain it send this error and your code to the AI."
        })]
      }), wB && (0, uc.jsxs)("div", {
        className: "WorldCodeAiPicked",
        children: [(0, uc.jsxs)("span", {
          children: ["Changing ", XP(wB), " of ", wB.path]
        }), (0, uc.jsx)("button", {
          className: "WorldCodeAiLinkButton",
          onClick: () => {
            kn(null)
          },
          children: "Cancel"
        })]
      }), (0, uc.jsx)(PM, {
        step: "aiAskBox",
        children: (0, uc.jsx)("form", {
          className: "WorldCodeAiInputRow",
          onSubmit: cB => {
            cB.preventDefault(), Nn()
          },
          children: (0, uc.jsxs)("div", {
            className: "WorldCodeAiAsk",
            children: [(0, uc.jsx)("textarea", {
              ref: Tn,
              className: "WorldCodeAiAskInput",
              value: NB,
              maxLength: 1e3,
              rows: 2,
              placeholder: wB ? `How should ${XP(wB)} change?` : CV ? "Or type your own answer here" : "Ask AI",
              onChange: cB => {
                EB(cB.target.value)
              },
              onKeyDown: cB => {
                cB.stopPropagation(), "Enter" !== cB.key || cB.shiftKey || cB.nativeEvent.isComposing || 229 === cB.nativeEvent.keyCode || (cB.preventDefault(), Nn())
              }
            }), (0, uc.jsx)(qB.n, {
              className: "WorldCodeAiSend",
              ariaLabel: "Send",
              disabled: "" === NB.trim() || !!sB && oB.length >= 3,
              onClick: Nn,
              children: (0, uc.jsx)(Oc.e, {
                name: "arrow-up"
              })
            })]
          })
        })
      }), (0, uc.jsx)(PM, {
        step: "aiModelChip",
        children: (0, uc.jsx)("div", {
          className: rB()("WorldCodeAiLimit", sB && "WorldCodeAiLimit-busy"),
          children: (0, uc.jsx)(fM, {
            editsOn: Zc ? UB : null,
            freeOnce: hB,
            onFreeOnce: an,
            onAddKey: oV,
            children: (() => {
              if (sB) return 0 === Hn.length ? "You can type your next request: it sends when this answer is done." : 1 === Hn.length ? "1 request waiting: it sends when this answer is done." : `${Hn.length} requests waiting: they send one at a time.`;
              if (WV && hB) return `Your next question goes to Bot.xd, then back to ${WV.model.name}.`;
              if (WV) return `Your question and code go to ${Cr(WV.provider,WV.baseUrl,!0)}.`;
              if (HV) {
                const cB = null === FV ? null : function(cB, Bc) {
                  return cB <= Bc ? null : `Limit resets in ${(0,eu.c)(Math.ceil((cB-Bc)/6e4))}`
                }(FV, KB);
                return null === cB ? Cu(HV) : (0, uc.jsxs)(uc.Fragment, {
                  children: [(0, uc.jsx)("span", {
                    className: "WorldCodeAiModelChipStatusLine",
                    children: Cu(HV)
                  }), (0, uc.jsx)("span", {
                    className: "WorldCodeAiModelChipStatusLine",
                    children: cB
                  })]
                })
              }
              return hn > KB ? `Send now and it starts by itself. ${bq(hn-KB)}` : null
            })()
          })
        })
      })]
    });
    return (0, uc.jsx)(PM, {
      step: KV,
      onPrevious: "aiPanel" === KV ? Ec : void 0,
      children: sI
    })
  })),
  rT = IO
}, 37843: (cB, Bc, nc) => {
  nc.d(Bc, {
    e: () => Mc,
    h: () => rB,
    l: () => Ic
  });
  const Vc = 6e3;

  function Ic(cB, Bc) {
    return [Math.floor(cB[0] / Bc) * Bc, Math.floor(cB[1] / Bc) * Bc, Math.floor(cB[2] / Bc) * Bc]
  }

  function rB(cB) {
    const Bc = (null !== cB && void 0 !== cB ? cB : "").match(/-?\d+(?:\.\d+)?/g);
    return Bc && Bc.length >= 3 ? [Number(Bc[0]), Number(Bc[1]), Number(Bc[2])] : null
  }

  function uc(cB, Bc) {
    return cB === Bc ? String(cB) : `${cB}-${Bc}`
  }

  function sc(cB, Bc, nc, Vc) {
    const Ic = [];
    let rB = new Map;
    for (let uc = cB[2]; uc < cB[2] + Bc; uc++) {
      const sc = new Map;
      let Mc = cB[0];
      for (; Mc < cB[0] + Bc;) {
        const Ic = Vc(Mc, nc, uc);
        let Pc = Mc;
        for (; Pc + 1 < cB[0] + Bc && Vc(Pc + 1, nc, uc) === Ic;) Pc++;
        if (null !== Ic) {
          const cB = `${Mc} ${Pc} ${Ic}`,
            Bc = rB.get(cB);
          Bc ? (Bc.z1 = uc, rB.delete(cB), sc.set(cB, Bc)) : sc.set(cB, {
            x0: Mc,
            x1: Pc,
            z0: uc,
            z1: uc,
            name: Ic
          })
        }
        Mc = Pc + 1
      }
      Ic.push(...rB.values()), rB = sc
    }
    return Ic.push(...rB.values()), Ic.sort(((cB, Bc) => cB.z0 - Bc.z0 || cB.x0 - Bc.x0)).map((cB => `x${uc(cB.x0,cB.x1)} z${uc(cB.z0,cB.z1)} ${cB.name}`))
  }

  function Mc(cB, Bc, nc, Ic) {
    let rB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Vc;
    const Mc = [cB[0] + Bc - 1, cB[1] + Bc - 1, cB[2] + Bc - 1],
      Pc = null !== Ic && Ic.every(((Bc, nc) => Math.floor(Bc) >= cB[nc] && Math.floor(Bc) <= Mc[nc])),
      qB = [`The chunk from ${cB.join(" ")} to ${Mc.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
    null !== Ic && qB.push(`The player's feet are at ${Ic.map(Math.floor).join(" ")}, ${Pc?"in this chunk":"outside this chunk"}.`);
    const Oc = [];
    for (let Vc = cB[1]; Vc <= Mc[1]; Vc++) {
      const Ic = sc(cB, Bc, Vc, nc).join("; "),
        rB = Oc[Oc.length - 1];
      (null === rB || void 0 === rB ? void 0 : rB.boxes) === Ic ? rB.to = Vc : Oc.push({
        from: Vc,
        to: Vc,
        boxes: Ic
      })
    }
    const Tc = Oc.filter((cB => "" !== cB.boxes));
    0 === Tc.length && qB.push("It is all air.");
    let fc = qB.join("\n").length;
    for (const Vc of Tc) {
      const cB = `y${uc(Vc.from,Vc.to)}: ${Vc.boxes}`;
      if (fc += cB.length + 1, fc > rB) {
        qB.push(`Cut short: the layers from y${Vc.from} up aren't shown, as there are too many blocks.`);
        break
      }
      qB.push(cB)
    }
    return qB.join("\n")
  }
}, 3874: (cB, Bc, nc) => {
  nc.d(Bc, {
    C: () => fc,
    b: () => Ic,
    e: () => Mc,
    g: () => rB,
    j: () => uc,
    m: () => sc,
    o: () => tB,
    s: () => qB,
    v: () => Oc,
    z: () => ec
  });
  var Vc = nc(1406);
  const Ic = 24e3,
    rB = "/docs/llms.txt",
    uc = `${Vc.b}${rB}`,
    sc = "/llms.txt",
    Mc = "/docs/llms-full.txt";

  function Pc(cB) {
    return cB || "index"
  }

  function qB(cB) {
    return `/docs/${Pc(cB)}.md`
  }

  function Oc(cB, Bc) {
    return `/docs/${Pc(cB)}/${Bc+1}.md`
  }
  const Tc = /^\/docs\/([a-z0-9-]+)(?:\/(\d+))?\.md$/;

  function fc(cB) {
    const Bc = Tc.exec(cB);
    return null === Bc ? null : {
      name: Bc[1],
      part: void 0 === Bc[2] ? null : Number(Bc[2])
    }
  }
  const mB = /^(?:\/studio)?\/docs(?:\/([a-z0-9-]+)(?:\/(\d+))?)?\/?$/;

  function ec(cB) {
    const Bc = mB.exec(cB);
    if (null === Bc) return null;
    const [, nc = "", Vc] = Bc;
    return void 0 === Vc ? qB(nc) : Oc(nc, Number(Vc) - 1)
  }

  function tB(cB) {
    return `/docsHtml/${Pc(cB)}.html`
  }
}
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);