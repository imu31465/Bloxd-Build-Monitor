export const id = 46;
export const ids = [46];
export const modules = {
  39450: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => oC,
      e: () => bC,
      h: () => wC
    });
    const QC = 6e3;

    function wC(CC, zC) {
      return [Math.floor(CC[0] / zC) * zC, Math.floor(CC[1] / zC) * zC, Math.floor(CC[2] / zC) * zC]
    }

    function bC(CC) {
      const zC = (null !== CC && void 0 !== CC ? CC : "").match(/-?\d+(?:\.\d+)?/g);
      return zC && zC.length >= 3 ? [Number(zC[0]), Number(zC[1]), Number(zC[2])] : null
    }

    function nC(CC, zC) {
      return CC === zC ? String(CC) : `${CC}-${zC}`
    }

    function fC(CC, zC, ZC, QC) {
      const wC = [];
      let bC = new Map;
      for (let nC = CC[2]; nC < CC[2] + zC; nC++) {
        const fC = new Map;
        let oC = CC[0];
        for (; oC < CC[0] + zC;) {
          const wC = QC(oC, ZC, nC);
          let qC = oC;
          for (; qC + 1 < CC[0] + zC && QC(qC + 1, ZC, nC) === wC;) qC++;
          if (null !== wC) {
            const CC = `${oC} ${qC} ${wC}`,
              zC = bC.get(CC);
            zC ? (zC.z1 = nC, bC.delete(CC), fC.set(CC, zC)) : fC.set(CC, {
              x0: oC,
              x1: qC,
              z0: nC,
              z1: nC,
              name: wC
            })
          }
          oC = qC + 1
        }
        wC.push(...bC.values()), bC = fC
      }
      return wC.push(...bC.values()), wC.sort(((CC, zC) => CC.z0 - zC.z0 || CC.x0 - zC.x0)).map((CC => `x${nC(CC.x0,CC.x1)} z${nC(CC.z0,CC.z1)} ${CC.name}`))
    }

    function oC(CC, zC, ZC, wC) {
      let bC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : QC;
      const oC = [CC[0] + zC - 1, CC[1] + zC - 1, CC[2] + zC - 1],
        qC = null !== wC && wC.every(((zC, ZC) => Math.floor(zC) >= CC[ZC] && Math.floor(zC) <= oC[ZC])),
        FC = [`The chunk from ${CC.join(" ")} to ${oC.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
      null !== wC && FC.push(`The player's feet are at ${wC.map(Math.floor).join(" ")}, ${qC?"in this chunk":"outside this chunk"}.`);
      const WC = [];
      for (let QC = CC[1]; QC <= oC[1]; QC++) {
        const wC = fC(CC, zC, QC, ZC).join("; "),
          bC = WC[WC.length - 1];
        (null === bC || void 0 === bC ? void 0 : bC.boxes) === wC ? bC.to = QC : WC.push({
          from: QC,
          to: QC,
          boxes: wC
        })
      }
      const NC = WC.filter((CC => "" !== CC.boxes));
      0 === NC.length && FC.push("It is all air.");
      let MC = FC.join("\n").length;
      for (const QC of NC) {
        const CC = `y${nC(QC.from,QC.to)}: ${QC.boxes}`;
        if (MC += CC.length + 1, MC > bC) {
          FC.push(`Cut short: the layers from y${QC.from} up aren't shown, as there are too many blocks.`);
          break
        }
        FC.push(CC)
      }
      return FC.join("\n")
    }
  },
  8801: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => wC
    });
    var QC = ZC(20);

    function wC() {
      return !QC.b.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  36815: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => nC,
      g: () => bC,
      i: () => wC
    });
    const QC = [.25, .5, 1, 2, 4, 8, 16];

    function wC(CC, zC) {
      const ZC = QC;
      let wC = ZC.indexOf(CC);
      return -1 === wC && (wC = ZC.findIndex((zC => zC >= CC)), -1 === wC && (wC = ZC.length - 1)), "up" === zC ? ZC[Math.min(wC + 1, ZC.length - 1)] : ZC[Math.max(wC - 1, 0)]
    }

    function bC(CC) {
      return CC <= QC[0]
    }

    function nC(CC) {
      return CC >= QC[QC.length - 1]
    }
  },
  36375: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => wC,
      f: () => bC
    });
    let QC = !1;

    function wC() {
      return QC
    }

    function bC(CC) {
      return QC !== CC && (QC = CC, !0)
    }
  },
  38859: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => bC
    });
    var QC = ZC(28),
      wC = ZC(1865);

    function bC(CC) {
      let {
        taskId: zC,
        progress: ZC
      } = CC;
      const QC = wC.e.get("_tasks");
      null !== QC && void 0 !== QC && QC[zC] && wC.e.apply({
        _tasks: {
          ...QC,
          [zC]: {
            ...QC[zC],
            progress: ZC
          }
        }
      })
    }
    QC.o.subscribe("clientTaskProgress", (CC => {
      bC(CC)
    }))
  },
  39421: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => NC,
      h: () => gC,
      j: () => qC,
      k: () => WC,
      m: () => oC,
      n: () => nC,
      r: () => FC,
      s: () => SC
    });
    var QC = ZC(1865),
      wC = ZC(28),
      bC = ZC(1872);
    const nC = (0, bC.l)((function() {
        var CC, zC, ZC, wC;
        return {
          health: null !== (CC = QC.e.get("_health")) && void 0 !== CC ? CC : null,
          maxHealth: null !== (zC = QC.e.get("_totalMaxHealth")) && void 0 !== zC ? zC : null,
          shield: null !== (ZC = QC.e.get("_shield")) && void 0 !== ZC ? ZC : null,
          maxShield: null !== (wC = QC.e.get("maxShield")) && void 0 !== wC ? wC : null
        }
      }), [], (0, bC.j)("_health", "_totalMaxHealth", "_shield", "maxShield")),
      fC = [{
        canFly: !1,
        flying: !1
      }, {
        canFly: !1,
        flying: !0
      }, {
        canFly: !0,
        flying: !1
      }, {
        canFly: !0,
        flying: !0
      }];

    function oC(CC, zC) {
      return fC[(CC ? 2 : 0) + (zC ? 1 : 0)]
    }
    const qC = (0, bC.l)((function() {
      var CC;
      return null !== (CC = QC.e.get("_aura")) && void 0 !== CC ? CC : null
    }), [], (0, bC.j)("_aura"));

    function FC(CC) {
      return {
        watch: zC => (0, wC.q)("shotPlayer", (ZC => {
          let {
            playerId: QC,
            damage: wC,
            wasCrit: bC,
            distance: nC
          } = ZC;
          CC(QC) && zC({
            damage: wC,
            wasCrit: bC,
            distance: nC
          })
        }))
      }
    }

    function WC(CC) {
      return (0, bC.c)("chat", (zC => {
        let {
          serverChatMsgId: ZC,
          content: QC,
          chatterEId: wC
        } = zC;
        return {
          serverChatMsgId: null !== ZC && void 0 !== ZC ? ZC : null,
          content: QC,
          author: wC ? CC(wC) : null
        }
      }))
    }
    class NC {
      constructor() {
        this.shown = null, this.needed = null, this.neededSince = 0
      }
      update(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const ZC = this.shown;
        return CC !== this.needed && (this.needed = CC, this.neededSince = zC, null === CC && (this.shown = null)), this.shown !== this.needed && zC - this.neededSince > 200 && (this.shown = this.needed), this.shown !== ZC
      }
    }

    function MC(CC) {
      return [{
        translationKey: `touchKeys:${CC}`
      }]
    }
    const gC = {
      open: MC("open"),
      close: MC("close"),
      milk: MC("milk"),
      shear: MC("shear"),
      tame: MC("tame"),
      feed: MC("feed"),
      ride: MC("ride")
    };

    function SC(CC) {
      return [{
        translationKey: "touchKeys:tameWith"
      }, " ", {
        icon: CC
      }]
    }
  },
  40878: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => fC,
      i: () => nC
    });
    var QC = ZC(3282);
    let wC = null,
      bC = null;

    function nC() {
      return bC ??= ZC.e(212).then((() => ZC(36219))).then((CC => {
        let {
          ITEM_SPRITES: zC,
          ITEM_SPRITES_WITHOUT_FILE: ZC,
          ITEM_FILES_WITHOUT_SPRITE: bC
        } = CC;
        wC = function(CC, zC, ZC) {
          const wC = new Set,
            bC = (0, QC.B)(zC);
          let nC = 0;
          for (const [QC, fC] of CC.entries()) QC === bC[nC] ? nC++ : wC.add(fC);
          if ("" !== ZC)
            for (const fC of ZC.split(QC.u)) wC.add(fC);
          return wC
        }(zC.split(QC.u), ZC, bC)
      }), (CC => {
        throw bC = null, CC
      })), bC
    }

    function fC(CC) {
      var zC, ZC;
      return null !== (zC = null === (ZC = wC) || void 0 === ZC ? void 0 : ZC.has(CC)) && void 0 !== zC && zC
    }
  },
  39439: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => QC,
      f: () => bC,
      j: () => wC
    });
    const QC = 128;

    function wC(CC, zC, ZC, QC) {
      const wC = 2 * zC - 1,
        bC = 1 - 2 * ZC,
        nC = CC(0) - wC * CC(3),
        fC = CC(4) - wC * CC(7),
        oC = CC(8) - wC * CC(11),
        qC = CC(1) - bC * CC(3),
        FC = CC(5) - bC * CC(7),
        WC = CC(9) - bC * CC(11);
      QC[0] = fC * WC - oC * FC, QC[1] = oC * qC - nC * WC, QC[2] = nC * FC - fC * qC;
      const NC = QC[0] * CC(3) + QC[1] * CC(7) + QC[2] * CC(11) < 0 ? -1 : 1,
        MC = Math.hypot(QC[0], QC[1], QC[2]) * NC;
      return QC[0] /= MC, QC[1] /= MC, QC[2] /= MC, QC
    }

    function bC(CC, zC, ZC, QC, wC, bC) {
      const nC = [Math.floor(zC[0]), Math.floor(zC[1]), Math.floor(zC[2])],
        fC = [0, 0, 0],
        oC = [1 / 0, 1 / 0, 1 / 0],
        qC = [1 / 0, 1 / 0, 1 / 0];
      for (let NC = 0; NC < 3; NC++) fC[NC] = Math.sign(ZC[NC]), 0 !== fC[NC] && (qC[NC] = Math.abs(1 / ZC[NC]), oC[NC] = (nC[NC] + (fC[NC] > 0 ? 1 : 0) - zC[NC]) / ZC[NC]);
      let FC = 0,
        WC = Math.abs(ZC[0]) > Math.abs(ZC[1]) ? 0 : 1;
      for (Math.abs(ZC[2]) > Math.abs(ZC[WC]) && (WC = 2); FC <= QC;) {
        if (CC(nC[0], nC[1], nC[2])) return wC[0] = nC[0], wC[1] = nC[1], wC[2] = nC[2], bC[0] = 0, bC[1] = 0, bC[2] = 0, bC[WC] = -fC[WC], !0;
        WC = oC[0] < oC[1] ? 0 : 1, oC[2] < oC[WC] && (WC = 2), FC = oC[WC], nC[WC] += fC[WC], oC[WC] += qC[WC]
      }
      return !1
    }
  },
  39413: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => wC
    });
    var QC = ZC(1806);

    function wC(CC, zC, ZC) {
      return (0, QC.m)(CC, zC) < ZC
    }
  },
  38848: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => FC
    });
    var QC = ZC(1169),
      wC = ZC(1284),
      bC = ZC(20),
      nC = ZC(1263),
      fC = ZC(1275),
      oC = ZC(1453),
      qC = ZC(36346);

    function FC(CC) {
      let {
        Kw: zC,
        Yw: ZC
      } = CC;
      const FC = null !== zC && void 0 !== zC ? zC : (0, fC.d)().gameNameWithVariation;
      (0, QC.R)(FC) && ((0, qC.k)(), (0, nC.X)((() => {
        console.log("Received matchmaking order from game server to game", zC), (0, bC.g)("inGameReplay"), (0, oC.navigatePreserveSearch)((0, wC.b)(FC, null !== ZC && void 0 !== ZC ? ZC : void 0))
      }), "video_start"))
    }
  },
  39008: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => bC
    });
    var QC = ZC(28),
      wC = ZC(1887);

    function bC(CC) {
      var zC, ZC;
      const bC = (0, wC.h)(null !== (zC = null === (ZC = wC.o.toggleFreeCam) || void 0 === ZC ? void 0 : ZC[0]) && void 0 !== zC ? zC : null);
      QC.o.bp("showBottomMessage", {
        message: `Free Camera ${CC?"Enabled":"Disabled"}${bC?` - Press ${bC} to toggle`:""}`,
        timeoutLength: 2e3,
        type: "Warning"
      })
    }
  },
  38841: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => oC,
      i: () => nC,
      m: () => fC,
      o: () => qC
    });
    var QC = ZC(28),
      wC = ZC(1307);
    const bC = new Map;

    function nC(CC, zC) {
      QC.o.bp("newUiRequest", {
        id: CC,
        clientParameters: zC
      }, !0)
    }

    function fC(CC) {
      QC.o.bp("removeUiRequest", CC, !0);
      const zC = bC.get(CC);
      zC && (zC.tearDownNotification(), bC.delete(CC))
    }

    function oC() {
      QC.o.bp("clearUiRequests");
      for (const CC of bC.values()) CC.tearDownNotification();
      bC.clear()
    }

    function qC(CC, zC, ZC, QC) {
      const nC = wC.NotificationProvider.showPromptPopup({
        title: zC,
        confirmText: "general:yes",
        cancelText: "general:no",
        destructive: ZC,
        unlockPointerKey: "uiRequestPopup"
      });
      bC.set(CC, nC), nC.getResult().then((zC => {
        bC.delete(CC), "notificationTornDown" !== zC && QC(zC)
      }))
    }
  },
  39446: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => WC,
      h: () => NC
    });
    var QC = ZC(184),
      wC = ZC(39450);
    const bC = 20;

    function nC(CC) {
      return CC.map(Math.floor).join(" ")
    }

    function fC(CC) {
      return null === CC.amount || 1 === CC.amount ? CC.name : `${CC.amount} ${CC.name}`
    }
    var oC = ZC(39457),
      qC = ZC(1865),
      FC = ZC(1275);

    function WC(CC, zC) {
      if (!CC) return oC.c;
      const ZC = CC.playerFeet();
      if (!ZC) return "The player isn't in the world yet, so no blocks can be seen.";
      const bC = QC.f.Ig,
        nC = (0, wC.h)(null !== zC && void 0 !== zC ? zC : ZC, bC),
        fC = CC.chunkBlocks(nC);
      return fC ? (0, wC.d)(nC, bC, ((zC, ZC, QC) => {
        const wC = fC(zC, ZC, QC);
        return 0 === wC ? null : CC.blockName(wC).split("|")[0]
      }), ZC) : `The chunk from ${nC.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${ZC.map(Math.floor).join(" ")}.`
    }

    function NC(CC) {
      var zC, ZC, QC;
      if (!CC) return oC.f;
      const wC = CC.playerFeet();
      if (!wC) return "The player isn't in the world yet, so nothing in it can be seen.";
      const {
        slots: WC,
        heldSlot: NC
      } = CC.inventory();
      return function(CC) {
        const zC = [];
        null !== CC.game && zC.push(`Game: ${CC.game}.`);
        const ZC = null === CC.health ? "" : `, health ${Math.round(CC.health)}${null===CC.maxHealth?"":` of ${Math.round(CC.maxHealth)}`}`;
        zC.push(`The player (the creator) stands at ${nC(CC.position)}${ZC}, ${CC.creative?"in":"not in"} creative mode.`);
        const QC = CC.slots[CC.heldSlot];
        zC.push(QC ? `Holding (slot ${CC.heldSlot}): ${fC(QC)}.` : `Holding nothing (slot ${CC.heldSlot} is empty).`);
        const wC = CC.slots.flatMap(((CC, zC) => CC ? [`slot ${zC}: ${fC(CC)}`] : []));
        zC.push(wC.length > 0 ? `Inventory: ${wC.join(", ")}.` : "Inventory: empty.");
        const oC = zC => Math.hypot(zC.position[0] - CC.position[0], zC.position[1] - CC.position[1], zC.position[2] - CC.position[2]),
          qC = [...CC.nearby].sort(((CC, zC) => oC(CC) - oC(zC)));
        if (0 === qC.length) zC.push("No other players or mobs are near enough to see.");
        else {
          zC.push("Near them, nearest first:");
          for (const CC of qC.slice(0, bC)) {
            const ZC = "player" === CC.kind ? `player "${CC.name||"?"}"` : CC.name && CC.name !== CC.kind ? `${CC.kind} "${CC.name}"` : CC.kind,
              QC = Math.round(oC(CC));
            zC.push(`- ${ZC} at ${nC(CC.position)}, ${QC} block${1===QC?"":"s"} away`)
          }
          qC.length > bC && zC.push(`- and ${qC.length-bC} more further away`)
        }
        return CC.droppedItems > 0 && zC.push(`${CC.droppedItems} dropped item${1===CC.droppedItems?" is":"s are"} on the ground nearby.`), zC.join("\n")
      }({
        game: null !== (zC = (0, FC.d)().gameNameWithVariation) && void 0 !== zC ? zC : null,
        position: wC,
        health: null !== (ZC = qC.e.get("_health")) && void 0 !== ZC ? ZC : null,
        maxHealth: null !== (QC = qC.e.get("_totalMaxHealth")) && void 0 !== QC ? QC : null,
        creative: !0 === qC.e.get("creative"),
        heldSlot: NC,
        slots: WC,
        nearby: CC.nearby(),
        droppedItems: CC.droppedItems()
      })
    }
  },
  38868: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => fC,
      d: () => oC,
      h: () => qC
    });
    var QC = ZC(1169),
      wC = ZC(970),
      bC = ZC(36725),
      nC = ZC(28);

    function fC(CC) {
      let {
        lobbyName: zC,
        gameNameWithVariation: ZC
      } = CC;
      return !(0, QC.U)(zC) || null !== ZC && (ZC.startsWith("testGym") || (0, wC.i)(ZC))
    }

    function oC(CC) {
      return CC.rb === bC.d.Leave || CC.rb === bC.d.Cursor
    }

    function qC(CC) {
      nC.o.bp("codeCollab", {
        type: CC.rb,
        docKey: CC.sb,
        version: CC.Tb,
        editorCount: CC.ab,
        peers: CC.tb,
        updates: CC.Db,
        playerId: CC.jb,
        playerName: CC.yb,
        colour: CC.Lb,
        anchor: CC.Ub,
        head: CC.Bb,
        existingCursors: CC.Ob,
        files: CC.kb,
        engineSettings: CC.Vb
      })
    }
  },
  40717: (CC, zC, ZC) => {
    ZC.d(zC, {
      A: () => EC,
      D: () => HC,
      G: () => BC,
      H: () => XC,
      J: () => YC,
      N: () => lC,
      O: () => KC,
      R: () => DC,
      T: () => tC,
      W: () => mC,
      c: () => jC,
      d: () => uC,
      g: () => eC,
      k: () => yC,
      o: () => hC,
      s: () => vC,
      u: () => cC,
      x: () => dC
    });
    var QC = ZC(1347),
      wC = ZC(28),
      bC = ZC(1240),
      nC = ZC(2348),
      fC = ZC(4752),
      oC = ZC(4711);
    let qC, FC = !1,
      WC = !1,
      NC = !1,
      MC = !1;
    const gC = 1300,
      SC = 3e3;
    let pC = 0,
      PC = !1,
      GC = !1,
      RC = 0;
    const AC = 2;
    let xC = !1,
      JC = !1;
    const IC = new Set,
      iC = new Set;

    function vC() {
      return FC
    }

    function eC() {
      return GC
    }

    function hC() {
      return JC
    }

    function KC() {
      return (0, bC.x)() && !JC
    }

    function YC(CC) {
      let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (CC !== JC) {
        JC = CC;
        for (const CC of [...iC]) CC(JC);
        zC && tC()
      }
    }

    function dC(CC) {
      return iC.add(CC), () => {
        iC.delete(CC)
      }
    }

    function mC() {
      (0, fC.e)(nC.v.Menu, (0, bC.x)() ? 0 : nC.v.Menu)
    }

    function HC() {
      GC = !1, RC = 0, mC(), tC()
    }

    function EC(CC) {
      return IC.add(CC), () => {
        IC.delete(CC)
      }
    }

    function lC(CC) {
      WC = !1, CC !== FC && (FC = CC, MC = !1, clearTimeout(qC), NC = !FC && xC, FC ? (PC = !1, GC = !1, RC = 0) : KC() && !xC && (GC = !0), xC = !1, FC && !KC() && UC(), OC(), NC && tC())
    }

    function XC(CC) {
      CC !== PC && (PC = CC, CC || tC())
    }

    function cC() {
      WC = !1, MC || !0 !== TC() || (MC = !0, clearTimeout(qC), qC = setTimeout(rC, gC))
    }

    function uC() {
      return (!WC || performance.now() - pC > SC) && (WC = (0, oC.E)().lockPointer(), pC = performance.now()), WC
    }

    function rC() {
      sC() && aC() && uC()
    }

    function sC() {
      return KC() && !FC && !PC && !(0, QC.h)()
    }

    function TC() {
      var CC;
      return "undefined" === typeof navigator || null === (CC = navigator.userActivation) || void 0 === CC ? void 0 : CC.isActive
    }

    function aC() {
      return NC && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== TC()
    }

    function tC() {
      KC() ? sC() && !GC && aC() && uC() : FC && !xC && UC()
    }

    function DC() {
      GC ? navigator.vendor.startsWith("Apple") ? LC() : RC = AC : tC()
    }

    function jC() {
      RC > 0 && 0 === --RC && LC()
    }

    function yC() {
      RC = 0
    }

    function LC() {
      sC() && !0 === TC() && uC()
    }

    function UC() {
      xC = !0, (0, oC.E)().unlockPointer()
    }

    function BC() {
      WC = !1, NC = !1, MC = !1, clearTimeout(qC), PC = !1, GC = !1, RC = 0, xC = !1;
      const CC = FC;
      FC = !1, CC && OC()
    }

    function OC() {
      for (const CC of [...IC]) CC(FC);
      wC.o.bp("pointerLockUpdate", FC)
    }
  },
  40518: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => NC,
      g: () => fC,
      j: () => WC,
      k: () => qC,
      m: () => nC,
      q: () => FC,
      s: () => oC
    });
    let QC = null,
      wC = null,
      bC = null;

    function nC(CC) {
      QC = CC
    }

    function fC() {
      return QC
    }

    function oC(CC) {
      wC = CC
    }

    function qC() {
      return wC
    }

    function FC(CC) {
      bC = CC
    }

    function WC() {
      return bC
    }

    function NC() {
      var CC, zC;
      return !0 === (null === (CC = wC) || void 0 === CC || null === (zC = CC.currentViewer) || void 0 === zC ? void 0 : zC.inPlayback)
    }
  },
  40832: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      attachPlayGameSources: () => JQ,
      playGameSources: () => xQ
    });
    var QC = ZC(1840),
      wC = ZC(40518),
      bC = ZC(4711),
      nC = ZC(40423),
      fC = ZC(40817),
      oC = ZC(39421),
      qC = ZC(28),
      FC = ZC(4733),
      WC = ZC(4727),
      NC = ZC(40457),
      MC = ZC(40485),
      gC = ZC(40838),
      SC = ZC(40470);
    (0, SC.l)(FC.Bc.Chat, (CC => {
      if (CC.payloadKind !== WC.hc.Msgpack) return;
      const zC = function(CC) {
        if (null === CC || "object" !== typeof CC || !("content" in CC)) return null;
        const {
          chatMsgId: zC,
          content: ZC,
          chatterEId: QC
        } = CC;
        return {
          serverChatMsgId: null !== zC && void 0 !== zC ? zC : void 0,
          content: ZC,
          chatterEId: void 0 === QC || null === QC ? void 0 : String(QC)
        }
      }((0, NC.c)(CC.payload));
      null !== zC && qC.o.bp("chat", zC, !0)
    }));
    const pC = {
        chatReceived: (0, oC.k)((function(CC) {
          var zC, ZC, QC;
          return {
            id: CC,
            name: null !== (zC = gC.f.getName(CC)) && void 0 !== zC ? zC : null,
            local: (0, MC.g)() === CC,
            profileEffect: null !== (ZC = null === (QC = (0, gC.j)(CC)) || void 0 === QC ? void 0 : QC.profileEffect) && void 0 !== ZC ? ZC : null
          }
        }))
      },
      PC = {
        sendChatMessage(CC) {
          var zC;
          let {
            cq: ZC,
            channelName: QC
          } = CC;
          null === (zC = (0, nC.k)()) || void 0 === zC || zC.clientApi.sendChat(ZC, QC)
        }
      };
    var GC = ZC(184),
      RC = ZC(1865),
      AC = ZC(40412),
      xC = ZC(39413);
    const JC = [0, 0, 0],
      IC = {
        codeBlockClickable(CC) {
          var zC;
          const ZC = (0, nC.k)();
          if (null === ZC || void 0 === ZC || !ZC.isSessionLive) return !1;
          const QC = ZC.api;
          if (0 !== (AC.w.playerFlags(QC.apiView, 0) & AC.ce.Crouching)) return !1;
          const wC = QC.queries.directorEntity(QC.localId) >= AC.xb.BYTES ? QC.memoryData(QC.scratch(), AC.xb.BYTES, 8, "the local player's DirectorEntity") : null;
          if (null === wC) return !1;
          for (let bC = 0; bC < 3; bC++) JC[bC] = AC.xb.feet(wC, 0, bC);
          return JC[1] += AC.xb.eyeHeight(wC, 0), (0, xC.e)(JC, CC, null !== (zC = RC.e.get("blockReach")) && void 0 !== zC ? zC : GC.f.yp)
        }
      },
      iC = {
        clickCodeBlock(CC) {
          var zC;
          null === (zC = (0, nC.k)()) || void 0 === zC || zC.clickCodeBlock(CC)
        }
      };
    var vC = ZC(40431),
      eC = ZC(40842),
      hC = ZC(970),
      KC = ZC(38874),
      YC = ZC(4706),
      dC = ZC(40446),
      mC = ZC(40427),
      HC = ZC(40449);

    function EC(CC) {
      if (null === CC) return null;
      const zC = [];
      for (const ZC of CC) {
        const CC = Object.keys(ZC)[0];
        if ("KZ" === CC) {
          const {
            str: CC,
            style: QC,
            clickableUrl: wC
          } = ZC.KZ, bC = Object.keys(CC)[0], nC = CC[bC];
          "string" !== bC && "styledEntityName" !== bC && "styledTranslatedText" !== bC || zC.push({
            str: nC,
            style: QC,
            clickableUrl: wC
          })
        } else zC.push(ZC[CC])
      }
      return zC
    }
    const lC = {
      screenPos(CC) {
        var zC, ZC;
        return null !== (zC = null === (ZC = (0, nC.k)()) || void 0 === ZC ? void 0 : ZC.renderFrame.projectWorldPosToScreenPos(CC)) && void 0 !== zC ? zC : {
          x: 0,
          y: 0
        }
      }
    };
    let XC = !1;

    function cC() {
      XC || (XC = !0, (0, SC.l)(FC.Bc.ProgressBarUpdate, (CC => {
        const zC = (0, HC.j)(CC);
        (0, HC.e)(zC) && qC.o.bp("progressBarUpdate", zC, !0)
      })), (0, SC.l)(dC.y, (CC => {
        const zC = (0, HC.h)(dC.y, CC);
        zC && qC.o.bp("middleScreenBarInitiate", {
          duration: zC.rQ,
          sQ: zC.sQ,
          horizBarRemOffset: zC.TQ
        }, !0)
      })), (0, SC.l)(FC.Bc.RemoveMiddleScreenBar, (() => {
        qC.o.bp("middleScreenBarRemove")
      })), (0, SC.l)(dC.db, (CC => {
        const zC = (0, HC.h)(dC.db, CC);
        if (zC) {
          var ZC;
          const CC = zC.AQ ? null === (ZC = (0, nC.k)()) || void 0 === ZC ? void 0 : ZC.renderFrame.projectDirectionToScreenPos(zC.AQ) : void 0;
          qC.o.bp("sendHitmarker", {
            RQ: zC.RQ,
            screenPos: CC
          }, !0)
        }
      })), (0, SC.l)(dC.hb, (CC => {
        const zC = (0, HC.h)(dC.hb, CC);
        if (zC) {
          const {
            id: CC,
            position: ZC,
            style: QC,
            WQ: wC,
            MQ: bC
          } = zC;
          qC.o.bp("setDirectionArrow", {
            id: CC,
            position: ZC,
            style: QC,
            text: EC(wC),
            MQ: bC
          }, !0)
        }
      })), (0, SC.l)(dC.h, (CC => {
        const zC = (0, HC.h)(dC.h, CC);
        zC && qC.o.bp("clearDirectionArrow", {
          id: zC.id
        }, !0)
      })), (0, SC.l)(dC.o, (CC => {
        const zC = (0, HC.h)(dC.o, CC);
        zC && qC.o.bp("flyingMiddleMessage", {
          content: EC(zC.xb),
          Jb: zC.Jb,
          Ib: zC.Ib
        }, !0)
      })), (0, SC.l)(FC.Bc.WorldVariation, (CC => {
        const zC = (0, HC.j)(CC);
        if ("string" === typeof zC) {
          const CC = zC === hC.e ? null : {
            message: `Currently loaded as variation: ${zC}`,
            type: "Warning"
          };
          qC.o.bp("showPermanentBottomMessage", CC, !0)
        }
      })), (0, SC.l)(dC.N, (CC => {
        const zC = (0, HC.h)(dC.N, CC);
        zC && function(CC, zC) {
          const {
            type: ZC,
            params: QC
          } = (0, KC.h)(zC), wC = {
            ...QC
          };
          for (const bC of KC.e) wC[bC] && (wC[bC] = EC(wC[bC]));
          YC.c.queueQTE(CC, ZC, wC).getResult().then((zC => {
            var ZC;
            "boolean" === typeof zC && (null === (ZC = (0, nC.k)()) || void 0 === ZC || ZC.send(mC.b.QteResponse, {
              qteId: CC,
              qteResponse: zC
            }))
          }))
        }(zC.id, zC.AZ)
      })), (0, SC.l)(dC.X, (CC => {
        const zC = (0, HC.h)(dC.X, CC);
        "number" === typeof zC && YC.c.cancelQTE(zC)
      })), (0, SC.i)((() => {
        YC.c.reset()
      })), (0, SC.j)((() => {
        YC.c.reset()
      })), (0, SC.l)(FC.Bc.EditItemCraftingRecipes, (CC => {
        const zC = (0, HC.j)(CC);
        (0, HC.e)(zC) && qC.o.bp("craftingRecipesEdited", {
          itemName: zC.craftingRecipeItemName,
          recipesForItem: zC.recipesForItem
        })
      })), (0, SC.l)(dC.V, (CC => {
        const zC = (0, HC.h)(dC.V, CC);
        zC && qC.o.bp("craftingRecipesEdited", {
          itemName: zC.Gb,
          recipesForItem: []
        })
      })))
    }
    var uC = ZC(20);
    const rC = [{
      allowed: !1,
      movesFly: !1
    }, {
      allowed: !1,
      movesFly: !0
    }, {
      allowed: !0,
      movesFly: !1
    }, {
      allowed: !0,
      movesFly: !0
    }];

    function sC(CC) {
      return AC.w.playerFlags(CC.api.apiView, 0)
    }
    const TC = {
        freeCamera: (0, MC.e)((CC => () => {
          const zC = CC.isSessionLive && 0 !== (sC(CC) & AC.ce.FreeCamMoves),
            ZC = CC.freeCameraAllowed() && null === uC.b.get("scriptedCameraFacing");
          return rC[(ZC ? 2 : 0) + (zC ? 1 : 0)]
        }), rC[0], (CC => (0, bC.p)(CC)))
      },
      aC = {
        setFreeCameraMovesFly: CC => {
          var zC;
          null === (zC = (0, nC.k)()) || void 0 === zC || zC.setFreeCameraMovesFly(CC)
        }
      },
      tC = {
        freeCameraPos: () => {
          const CC = (0, nC.k)();
          return null !== CC && void 0 !== CC && CC.isSessionLive && CC.renderFrame.hasView && 0 !== (sC(CC) & AC.ce.FreeCam) ? CC.renderFrame.cameraPosition : null
        }
      };
    var DC = ZC(39008);
    let jC = !1,
      yC = !1;

    function LC() {
      const CC = (0, nC.k)();
      if (null === CC || void 0 === CC || !CC.isSessionLive) return void(jC = !1);
      const zC = 0 !== (AC.w.playerFlags(CC.api.apiView, 0) & AC.ce.FreeCam);
      zC !== jC && (jC = zC, (0, DC.e)(zC))
    }
    var UC = ZC(326),
      BC = ZC(36897),
      OC = ZC(1872);
    var kC = ZC(40845),
      VC = ZC(40479);
    const Cz = {
      interactPrompt: null,
      blockText: null,
      neededTool: null
    };
    let zz = "off";

    function Zz(CC) {
      var zC;
      return null === CC ? null : {
        label: null !== (zC = (0, kC.c)(CC, "interactionPrompt")) && void 0 !== zC ? zC : null
      }
    }
    const Qz = new Map([
      [AC.Gc.Open, {
        label: oC.h.open
      }],
      [AC.Gc.Close, {
        label: oC.h.close
      }],
      [AC.Gc.Milk, {
        label: oC.h.milk
      }],
      [AC.Gc.Shear, {
        label: oC.h.shear
      }],
      [AC.Gc.Tame, {
        label: oC.h.tame
      }],
      [AC.Gc.Feed, {
        label: oC.h.feed
      }],
      [AC.Gc.Ride, {
        label: oC.h.ride
      }]
    ]);
    class wz {
      constructor() {
        this.target = Cz, this.SF = AC.rd, this.optionName = null, this.pickaxe = new oC.d
      }
      read(CC) {
        var zC;
        const ZC = AC.w.targetBlockId(CC.api.apiView, 0);
        ZC !== this.SF && (this.SF = ZC, this.optionName = ZC === AC.rd ? null : `${CC.tables.getMetaInfo(ZC).rootName}CrosshairText`);
        const QC = null === this.optionName ? null : null !== (zC = CC.tables.getClientOption(this.optionName)) && void 0 !== zC ? zC : null;
        this.pickaxe.update(function(CC, zC) {
          var ZC, QC, wC;
          if (0 === (AC.w.playerFlags(CC.api.apiView, 0) & AC.ce.Breaking) || zC === AC.rd || 0 === zC) return null;
          const {
            tables: bC
          } = CC;
          if (!0 === bC.getClientOption("creative")) return null;
          const nC = bC.nameOfId(zC),
            fC = null === (ZC = CC.items.vq()) || void 0 === ZC ? void 0 : ZC.name,
            oC = null !== (QC = bC.getItemStat(nC, "harvestLevel")) && void 0 !== QC ? QC : 0;
          return (0, UC.pc)({
            blockHarvestType: bC.getDefaultItemStat(nC, "harvestType"),
            blockHarvestLevel: bC.getDefaultItemStat(nC, "harvestLevel"),
            harvestLevel: oC,
            heldToolType: void 0 === fC ? void 0 : bC.getDefaultItemStat(fC, "harvests"),
            heldToolLevel: void 0 === fC ? void 0 : bC.getDefaultItemStat(fC, "level")
          }) && null !== (wC = BC.n[oC]) && void 0 !== wC ? wC : null
        }(CC, ZC)), CC.watchPromptPick(zz);
        const wC = "touch" === zz ? function(CC) {
          var zC;
          const ZC = CC.interactLabel;
          return ZC === AC.Gc.Entity ? Zz(CC.promptEntity) : ZC === AC.Gc.TameWith ? {
            label: (0, oC.s)(CC.tables.nameOfId(CC.interactIcon))
          } : null !== (zC = Qz.get(ZC)) && void 0 !== zC ? zC : null
        }(CC) : Zz(CC.promptEntity);
        return this.target = (0, OC.n)(this.target, {
          interactPrompt: wC,
          blockText: QC,
          neededTool: this.pickaxe.shown
        }), this.target
      }
    }
    let bz = null;
    const nz = {
      current: () => {
        var CC, zC;
        return null !== (CC = null === (zC = bz) || void 0 === zC ? void 0 : zC.target) && void 0 !== CC ? CC : Cz
      },
      watch: CC => {
        const zC = new wz;
        bz = zC;
        const ZC = (0, MC.k)((ZC => {
          let QC = zC.read(ZC);
          CC(QC);
          const wC = (0, bC.r)((() => {
            const wC = zC.read(ZC);
            wC !== QC && (QC = wC, CC(wC))
          }));
          return () => {
            wC(), ZC.watchPromptPick("off")
          }
        }));
        return () => {
          ZC(), bz === zC && (bz = null)
        }
      }
    };
    let fz = 0,
      oz = 0;
    const qz = {
        health: oC.n,
        aura: oC.j,
        hotbar: VC.e.states.hotbar,
        heldItemAim: VC.e.states.heldItemAim,
        crouching: (0, MC.e)((CC => function(CC) {
          const zC = () => 0 !== (AC.w.playerFlags(CC.apiView, 0) & AC.ce.Crouching);
          return {
            current: zC,
            watch(CC) {
              let ZC = zC();
              return (0, bC.p)((() => {
                const QC = zC();
                QC !== ZC && (ZC = QC, CC(QC))
              }))
            }
          }
        }(CC.api).current), !1, (CC => (0, bC.p)(CC))),
        flight: (0, MC.e)((CC => () => function(CC) {
          const zC = AC.w.playerFlags(CC.apiView, 0);
          return (0, oC.m)(0 !== (zC & AC.ce.CanFly), 0 !== (zC & AC.ce.Flying))
        }(CC.api)), (0, oC.m)(!1, !1), (CC => (0, bC.p)(CC))),
        gliderBoostFuel: (0, MC.e)((CC => () => AC.w.gliderBoostFuel(CC.api.apiView, 0)), 0, (CC => (0, bC.p)(CC))),
        crosshairTarget: nz
      },
      Fz = {
        hotbarSlotRequested: VC.e.events.hotbarSlotRequested,
        hotbarScrolled: VC.e.events.hotbarScrolled,
        numberKeyPressed: VC.e.events.numberKeyPressed,
        shotDamageToShow: (0, oC.r)((CC => !0 === (0, kC.c)(CC, "showDamageAmounts")))
      },
      Wz = {
        selectHotbarSlot: VC.e.commands.selectHotbarSlot,
        setCrosshairInteractPrompt: CC => {
          zz = CC
        }
      },
      Nz = {
        momentumFrac: function() {
          var CC, zC, ZC;
          const QC = (0, nC.k)(),
            wC = performance.now(),
            bC = null === QC || void 0 === QC || null === (CC = QC.items.vq()) || void 0 === CC || null === (zC = CC.attributes) || void 0 === zC || null === (ZC = zC.customAttributes) || void 0 === ZC ? void 0 : ZC.enchantments;
          return fz = null !== QC && null !== bC && void 0 !== bC && bC.Momentum ? 0 !== (AC.w.playerFlags(QC.api.apiView, 0) & AC.ce.Breaking) ? Math.max(0, AC.w.momentumFrac(QC.api.apiView, 0)) : Math.max(0, fz - (wC - oz) / 1500) : 0, oz = wC, fz
        }
      };
    var Mz = ZC(40417);
    const gz = {
      lobbyManage(CC) {
        var zC;
        null === (zC = (0, nC.k)()) || void 0 === zC || zC.send(mC.b.LobbyManage, CC)
      }
    };
    var Sz = ZC(1183),
      pz = ZC(36375),
      Pz = ZC(8801),
      Gz = ZC(1557),
      Rz = ZC(2348),
      Az = ZC(4739);
    let xz = !1;

    function Jz(CC) {
      xz = CC
    }

    function Iz() {
      "inGame" !== uC.b.get("gameState") || (0, Gz.w)() || qC.o.bp("ctrlCrouchWithoutFullscreen")
    }
    let iz = !1;
    const vz = {
        OpenEmoteWheel: () => {
          Jz(!0), iz = !0, queueMicrotask((() => {
            iz && (iz = !1, qC.o.bp("requestEmoteWheelHoldOpen"))
          }))
        },
        ToggleFullCoordinateOverlay: () => {
          qC.o.bp("toggleFullCoordinateOverlay")
        },
        KeyYPressed: () => {
          (0, pz.c)() || qC.o.bp("YKeyPressed")
        },
        KeyXPressed: () => {
          (0, pz.c)() || qC.o.bp("XKeyPressed")
        },
        CtrlCrouch: Iz,
        "primary-fire": () => {
          qC.o.bp("mouseState", {
            pF: Sz.e.DownFirePrimary,
            isDown: !0
          })
        },
        "alt-fire": () => {
          qC.o.bp("mouseState", {
            pF: Sz.e.DownFireSecondary,
            isDown: !0
          })
        },
        TouchHold: () => {
          qC.o.bp("mouseState", {
            pF: Sz.e.TouchDownLong,
            isDown: !0
          })
        }
      },
      ez = {
        OpenEmoteWheel: () => {
          Jz(!1), iz ? (iz = !1, (0, Pz.d)() || qC.o.bp("requestEmoteWheelHoldOpen")) : qC.o.bp("requestEmoteWheelHoldRelease")
        },
        CtrlCrouch: Iz,
        "primary-fire": () => {
          qC.o.bp("mouseState", {
            pF: Sz.e.UpFirePrimary,
            isDown: !1
          })
        },
        "alt-fire": () => {
          qC.o.bp("mouseState", {
            pF: Sz.e.UpFireSecondary,
            isDown: !1
          })
        },
        TouchDig: () => {
          qC.o.bp("mouseState", {
            pF: Sz.e.UpFirePrimary,
            isDown: !1
          })
        }
      };
    let hz = !1;

    function Kz() {
      hz || (hz = !0, (0, Az.k)((CC => {
        if ((0, wC.c)()) return;
        const zC = (0, Az.g)(CC) ? "primary-fire" : CC.action;
        var ZC;
        if (CC.down) {
          if (0 === (CC.flags & Rz.c.Synthetic)) {
            var QC;
            null === (QC = vz[zC]) || void 0 === QC || QC.call(vz)
          }
        } else null === (ZC = ez[zC]) || void 0 === ZC || ZC.call(ez)
      })))
    }
    var Yz = ZC(310),
      dz = ZC(77),
      mz = ZC(38),
      Hz = ZC(40717),
      Ez = ZC(1275),
      lz = ZC(38868);
    let Xz = !1;
    const cz = {
      sendCodeCollab(CC) {
        var zC;
        null === (zC = (0, nC.k)()) || void 0 === zC || zC.send(mC.b.CodeCollab, (0, mC.m)(CC), (0, lz.d)(CC))
      }
    };
    var uz = ZC(38944);
    let rz = null,
      sz = !1,
      Tz = null;

    function az() {
      return "inGame" === uC.b.get("gameState") && !(0, pz.c)()
    }
    const tz = {
        OpenInventory: CC => {
          (0, Gz.D)(CC, "inventory", (0, Mz.q)())
        },
        OpenShop: CC => {
          rz && az() && (0, Gz.A)(CC, Yz.o.SHOP, !rz.shopIsEmpty(RC.e.get("shopInfo")))
        },
        OpenLobbyLeaderboard: CC => {
          az() && (0, Gz.A)(CC, Yz.o.LOBBY_LEADERBOARD, (0, uz.d)({
            lobbyLeaderboardInfo: RC.e.get("lobbyLeaderboardInfo"),
            lobbyManage: RC.e.get("lobbyManage")
          }))
        },
        OpenTasksAndLeaderboard: CC => {
          var zC;
          const ZC = null === (zC = rz) || void 0 === zC ? void 0 : zC.getClientGameMapKey();
          ZC ? (0, Gz.E)(CC, !0, ZC) : (0, Gz.D)(CC, "retentionFeatures", !(!RC.e.get("_tasks") && !RC.e.get("_availableLeaderboards")))
        },
        OpenInviteLink: CC => {
          (0, Gz.D)(CC, "inviteLink", dz.featureFlags.canUseInviteLinks)
        },
        OpenCodeEditor: CC => {
          az() && function(CC) {
            var zC;
            const ZC = (0, nC.k)(),
              QC = null !== ZC && void 0 !== ZC && ZC.isSessionLive ? ZC.api : null,
              wC = QC ? QC.yG(QC.localId) : null,
              bC = null !== (zC = null === wC || void 0 === wC ? void 0 : wC.map((CC => Math.floor(CC)))) && void 0 !== zC ? zC : null;
            (0, Gz.E)(CC, null !== bC && (0, lz.b)((0, Ez.d)()), (() => {
              qC.o.bp("EditLobbyCode", bC)
            }))
          }(CC)
        },
        HideUi: () => {
          qC.o.bp("showUi", !1)
        }
      },
      Dz = {
        HideUi: () => {
          qC.o.bp("showUi", !0)
        }
      };

    function jz() {
      sz || (sz = !0, ZC.e(157).then((() => ZC(60264))).then((CC => {
        rz = CC
      }), (CC => {
        console.error("[bloxd-wasm-client] the menu keys' checks did not load", CC)
      })), (0, Hz.A)((CC => {
        CC || !(0, Hz.g)() || (0, dz.isMobile)() || !mz.i.getItem("disableFullscreen") || (0, Gz.s)() || uC.b.set({
          openEverythingMenuName: Yz.o.SETTINGS
        })
      })), (0, Az.k)((CC => {
        let {
          action: zC,
          down: ZC,
          press: QC
        } = CC;
        var bC, nC;
        (0, wC.c)() || (ZC ? null === (bC = tz[zC]) || void 0 === bC || bC.call(tz, function(CC) {
          var zC;
          if (0 === CC || (null === (zC = Tz) || void 0 === zC ? void 0 : zC.press) !== CC) {
            const zC = {
              press: CC,
              event: new Event("inputAction")
            };
            Tz = zC, queueMicrotask((() => {
              Tz === zC && (Tz = null)
            }))
          }
          return Tz.event
        }(QC)) : null === (nC = Dz[zC]) || void 0 === nC || nC.call(Dz))
      })))
    }
    var yz = ZC(38859),
      Lz = ZC(38848),
      Uz = ZC(38841);
    const Bz = {
      completeTask(CC) {
        var zC;
        null === (zC = (0, nC.k)()) || void 0 === zC || zC.send(mC.b.CompleteTask, (0, mC.o)(CC))
      },
      setServerCookie(CC) {
        var zC;
        let {
          key: ZC,
          value: QC
        } = CC;
        null === (zC = (0, nC.k)()) || void 0 === zC || zC.send(mC.b.GeneralCookieSet, (0, mC.r)({
          vn: ZC,
          en: QC
        }))
      },
      answerUiRequest(CC) {
        var zC;
        let {
          id: ZC,
          hF: QC
        } = CC;
        null === (zC = (0, nC.k)()) || void 0 === zC || zC.send(mC.b.UiRequestResp, (0, mC.S)({
          Lq: ZC,
          Uq: QC,
          Bq: 5
        }))
      },
      chooseRewardedAd(CC) {
        var zC;
        let {
          id: ZC,
          hF: QC
        } = CC;
        null === (zC = (0, nC.k)()) || void 0 === zC || zC.send(mC.b.UiRequestResponded, (0, mC.Q)({
          id: ZC,
          hF: QC
        }))
      },
      requestLeaderboard(CC) {
        var zC;
        let {
          category: ZC,
          timeframe: QC,
          seeTop: wC
        } = CC;
        null === (zC = (0, nC.k)()) || void 0 === zC || zC.send(mC.b.LeaderboardRequest, {
          category: ZC,
          timeframe: QC,
          seeTop: wC
        })
      }
    };
    let Oz = !1;
    const kz = GC.f.tp / 2,
      Vz = [kz, -kz, -kz, -kz, kz, kz, -kz, kz],
      CZ = [0, 0, 0];

    function zZ(CC, zC, ZC) {
      for (let QC = 0; QC < CC.length; QC += 2)
        if (CC[QC] === zC && CC[QC + 1] === ZC) return !0;
      return !1
    }
    const ZZ = {
      blocksStandingOn: function() {
        const CC = (0, nC.k)();
        if (null === CC) return [];
        const {
          api: zC,
          chunks: ZC,
          tables: QC
        } = CC;
        if (!zC.readPosition(zC.localId, CZ)) return [];
        const [wC, bC, fC] = CZ, oC = Math.ceil(bC) - 1, qC = [], FC = [];
        for (let nC = 0; nC < Vz.length; nC += 2) {
          const CC = wC + Vz[nC],
            zC = fC + Vz[nC + 1];
          if (Number.isInteger(CC) || Number.isInteger(zC)) continue;
          const bC = Math.floor(CC),
            WC = Math.floor(zC);
          if (zZ(FC, bC, WC)) continue;
          const NC = ZC.SF(bC, oC, WC);
          QC.isSolidBlockId(NC) && (FC.push(bC, WC), qC.push(QC.nameOfId(NC)))
        }
        return qC
      },
      dropAhead: function() {
        const CC = (0, nC.k)();
        return null !== CC && 0 !== (AC.w.playerFlags(CC.api.apiView, 0) & AC.ce.DropAhead)
      }
    };
    var QZ = ZC(36815),
      wZ = ZC(38923),
      bZ = ZC(1307),
      nZ = ZC(40493);
    const fZ = new Set(["replayLoad", "replaySave", "replaySaveAs", "replayTimelineZoomIn", "replayTimelineZoomOut"]),
      oZ = new Set(["replaySkipBack", "replaySkipForward", "replaySpeedUp", "replaySpeedDown", "replayRecordKeyframe"]);

    function qZ() {
      const CC = new Set;
      return {
        add: zC => (CC.add(zC), () => {
          CC.delete(zC)
        }),
        fire() {
          for (const zC of CC) zC()
        }
      }
    }
    const FZ = Object.freeze([]);

    function WZ(CC, zC) {
      let ZC, {
        rereads: QC,
        followLocalId: wC
      } = zC;
      const nC = () => (ZC = (0, OC.n)(ZC, CC()), ZC);
      return {
        current: nC,
        watch(CC) {
          const zC = (0, gC.c)((zC => {
            QC(zC) && CC(nC())
          }));
          if (!wC) return zC;
          let ZC = (0, MC.g)();
          const fC = (0, bC.r)((() => {
            const zC = (0, MC.g)();
            zC !== ZC && (ZC = zC, CC(nC()))
          }));
          return () => {
            zC(), fC()
          }
        }
      }
    }
    const NZ = {
        players: WZ((function() {
          const CC = gC.f.ids(),
            zC = {};
          for (const bC of CC) {
            var ZC, QC, wC;
            zC[bC] = {
              name: null !== (ZC = gC.f.getName(bC)) && void 0 !== ZC ? ZC : null,
              ranks: null !== (QC = gC.f.getSetting(bC, "ranks")) && void 0 !== QC ? QC : FZ,
              cosmetics: null !== (wC = (0, gC.j)(bC)) && void 0 !== wC ? wC : null
            }
          }
          return {
            ids: CC,
            byId: zC,
            localId: (0, MC.g)()
          }
        }), {
          rereads: CC => "roster" !== CC.kind || CC.members || CC.settings.has("ranks"),
          followLocalId: !0
        }),
        lobbyLeaderboardRows: WZ((function() {
          const CC = {};
          for (const wC of gC.f.ids()) {
            var zC, ZC, QC;
            CC[wC] = {
              colour: null !== (zC = gC.f.getSetting(wC, "colorInLobbyLeaderboard")) && void 0 !== zC ? zC : null,
              values: null !== (ZC = gC.f.getSetting(wC, "lobbyLeaderboardValues")) && void 0 !== ZC ? ZC : null,
              tags: null !== (QC = gC.f.getSetting(wC, "lobbyLeaderboardTags")) && void 0 !== QC ? QC : null
            }
          }
          return CC
        }), {
          rereads: function(CC) {
            if ("roster" !== CC.kind) return "reset" === CC.kind;
            const {
              members: zC,
              settings: ZC
            } = CC;
            return zC || ZC.has("colorInLobbyLeaderboard") || ZC.has("lobbyLeaderboardValues") || ZC.has("lobbyLeaderboardTags")
          },
          followLocalId: !1
        })
      },
      MZ = {
        cosmeticsUpdated: {
          watch: CC => (0, gC.c)((zC => {
            if ("cosmetics" !== zC.kind) return;
            const ZC = (0, MC.g)();
            CC(zC.updates.map((CC => {
              let {
                xQ: zC,
                JQ: QC,
                IQ: wC
              } = CC;
              return {
                local: zC === ZC,
                JQ: QC,
                IQ: wC
              }
            })))
          }))
        }
      };
    var gZ = ZC(2909),
      SZ = ZC(1645),
      pZ = ZC(625),
      PZ = ZC(40756);
    let GZ = !1,
      RZ = null;
    const AZ = {
      setShopOpen(CC) {
        var zC;
        null === (zC = (0, nC.k)()) || void 0 === zC || zC.send(mC.b.ShopMenuChanged, (0, mC.J)(CC))
      },
      buyShopItem(CC) {
        var zC;
        let {
          categoryKey: ZC,
          itemKey: QC,
          userInput: wC
        } = CC;
        null === (zC = (0, nC.k)()) || void 0 === zC || zC.send(mC.b.ItemBought, {
          categoryKey: ZC,
          itemKey: QC,
          shopVersion: RC.e.get("_shopVersion"),
          userInput: wC
        })
      }
    };
    let xZ = !1;
    var JZ = ZC(4752);
    const IZ = Rz.v.LookFrozen | Rz.v.ClicksSuppressed;

    function iZ(CC, zC) {
      var ZC;
      null !== (ZC = (0, nC.k)()) && void 0 !== ZC && ZC.send(CC, zC) || console.warn(`[bloxd-wasm-client] message ${CC} not sent: no live game or the core's command ring is full`)
    }(0, SC.l)(dC.jb, (CC => {
      const zC = (0, HC.h)(dC.jb, CC);
      void 0 !== zC && qC.o.bp("setDiscordReportKey", zC)
    }));
    const vZ = {
      ignorePlayer(CC) {
        iZ(mC.b.IgnoreUser, (0, mC.s)({
          Cn: CC
        }))
      },
      reportPlayer(CC) {
        let {
          playerId: zC,
          chatMsgId: ZC,
          Zq: QC,
          details: wC
        } = CC;
        iZ(mC.b.UserReport, (0, mC.cb)({
          ZF: zC,
          QF: ZC,
          Zq: QC,
          Qq: wC
        }))
      },
      reportWorldCodeChat(CC) {
        let {
          chatMsgId: zC,
          Zq: ZC,
          details: QC
        } = CC;
        iZ(mC.b.UserReport, (0, mC.cb)({
          ZF: "",
          QF: zC,
          Zq: ZC,
          Qq: QC
        }))
      },
      requestDiscordReportKey(CC) {
        iZ(mC.b.ReqDiscordReportKey, (0, mC.E)(CC))
      },
      reportLobbyOrGame(CC) {
        let {
          target: zC,
          Zq: ZC,
          details: QC
        } = CC;
        "customGame" === zC ? iZ(mC.b.CustomGameReport, (0, mC.q)({
          Zq: ZC,
          Qq: QC
        })) : iZ(mC.b.LobbyReport, (0, mC.w)({
          Zq: ZC,
          Qq: QC
        }))
      },
      updateMyCosmetic(CC) {
        iZ(mC.b.UpdateMyCosmetic, (0, mC.$)(CC))
      },
      holdEmoteWheel(CC) {
        !CC || xz ? (0, JZ.e)(IZ, CC ? IZ : 0) : qC.o.bp("requestEmoteWheelHoldRelease")
      }
    };
    var eZ = ZC(40854),
      hZ = ZC(9194),
      KZ = ZC(39439);
    const YZ = [0, 0, 0],
      dZ = [0, 0, 0],
      mZ = [0, 0, 0],
      HZ = {
        blockAtViewPoint(CC) {
          let {
            x: zC,
            y: ZC
          } = CC;
          const QC = (0, nC.k)();
          if (null === QC || void 0 === QC || !QC.renderFrame.hasView) return null;
          const {
            renderFrame: wC,
            clientApi: bC,
            api: fC
          } = QC;
          let oC = 0;
          return (0, KZ.f)(((CC, zC, ZC) => (oC = bC.getBlockId(CC, zC, ZC), 0 !== oC)), wC.cameraPosition, (0, KZ.j)((CC => AC.w.viewProj(fC.apiView, 0, CC)), zC, ZC, YZ), KZ.b, dZ, mZ) ? {
            pos: [dZ[0], dZ[1], dZ[2]],
            normal: [mZ[0], mZ[1], mZ[2]],
            name: (0, hZ.e)(oC)
          } : null
        }
      },
      EZ = {
        setBlockHighlight(CC) {
          var zC;
          null === (zC = (0, nC.k)()) || void 0 === zC || zC.setBlockHighlight(CC)
        }
      };
    var lZ = ZC(1851),
      XZ = ZC(40748),
      cZ = ZC(40858),
      uZ = ZC(4423),
      rZ = ZC(4393),
      sZ = ZC(40866),
      TZ = ZC(3276),
      aZ = ZC(3282);
    let tZ = null,
      DZ = null;

    function jZ(CC) {
      const zC = CC.startsWith(aZ.m),
        [ZC, QC = ZC, wC = ZC] = (zC ? CC.slice(aZ.m.length) : CC).split(aZ.i);
      return {
        top: ZC,
        left: QC,
        right: wC,
        half: zC
      }
    }

    function yZ(CC) {
      const zC = null === tZ ? void 0 : (0, TZ.b)(CC),
        ZC = void 0 === zC ? 0 : tZ.codes[zC];
      return 0 === ZC ? void 0 : tZ.pool[ZC - 1]
    }
    var LZ = ZC(3273),
      UZ = ZC(4382),
      BZ = ZC(4414),
      OZ = ZC(40779),
      kZ = ZC(40875);
    const VZ = "item:";
    let CQ = null,
      zQ = null,
      ZQ = null,
      QQ = null,
      wQ = !1,
      bQ = !1;

    function nQ() {
      return bQ || (bQ = !0, (0, BZ.j)().then((CC => {
        CC && (0, lZ.c)()
      }))), ZQ ??= Promise.all([(0, LZ.i)(), (DZ ??= ZC.e(1).then((() => ZC(60281))).then((CC => {
        let {
          BLOCK_FACE_RUNS: zC,
          BLOCK_FACES: ZC,
          MAX_FACE_ITEM_ID: QC
        } = CC;
        tZ = {
          codes: (0, aZ.F)(zC, QC + 1),
          pool: ZC.split(aZ.u).map(jZ)
        }
      }), (CC => {
        throw DZ = null, CC
      })), DZ), (0, kZ.e)(), ZC.e(198).then((() => ZC(34171)))]).then((CC => {
        let [, , zC, ZC] = CC;
        zC.followBundledTextures(), CQ = zC, zQ = ZC, (0, lZ.c)()
      }), (CC => {
        ZQ = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", CC)
      })), ZQ
    }

    function fQ(CC) {
      var zC, ZC;
      return null !== (zC = null === (ZC = (0, OZ.j)()) || void 0 === ZC ? void 0 : ZC.textureUrl(CC)) && void 0 !== zC ? zC : CQ.itemSpriteUrl(CC)
    }

    function oQ(CC) {
      var zC, ZC;
      return null !== (zC = null === (ZC = (0, OZ.j)()) || void 0 === ZC ? void 0 : ZC.textureUrl(CC)) && void 0 !== zC ? zC : CQ.blockTextureUrl(CC)
    }

    function qQ(CC) {
      var zC;
      return null !== (zC = (0, LZ.e)(CC)) && void 0 !== zC ? zC : CC
    }

    function FQ(CC, zC) {
      var ZC, QC, wC;
      return null !== (ZC = null !== (QC = null !== (wC = oQ(CC)) && void 0 !== wC ? wC : null === zC || void 0 === zC ? void 0 : zC.rotated[CC]) && void 0 !== QC ? QC : null === zC || void 0 === zC ? void 0 : zC.animated[CC]) && void 0 !== ZC ? ZC : CQ.notFoundUrl()
    }

    function WQ(CC) {
      return void 0 !== (0, TZ.b)(CC) ? CC : /^[1-9][0-9]*$/.test(CC) ? (0, TZ.c)(Number(CC)) : void 0
    }

    function NQ(CC) {
      var zC;
      if (CC.startsWith(VZ)) {
        var ZC;
        const zC = (0, LZ.e)(CC.slice(5));
        return null !== (ZC = void 0 === zC ? null : fQ(zC)) && void 0 !== ZC ? ZC : CQ.notFoundUrl()
      }
      return null !== (zC = CQ.particleUrl(CC)) && void 0 !== zC ? zC : CQ.notFoundUrl()
    }

    function MQ(CC, zC) {
      return "StairsBlock" === CC ? CC : zC ? "SlabBlock" : "CubeBlock"
    }
    const gQ = {
        async blockIcon(CC) {
          var zC;
          let {
            name: QC,
            size: wC,
            lineWidth: bC
          } = CC;
          await nQ();
          const nC = null !== (zC = WQ(QC)) && void 0 !== zC ? zC : QC,
            fC = (0, BZ.e)(nC, wC, bC);
          if (null !== fC) return fC;
          const oC = yZ(nC),
            qC = (0, TZ.b)(nC),
            FC = void 0 === qC || null === zQ ? void 0 : zQ.itemTypeNameOf(qC);
          if (null === CQ || void 0 === oC) return "";
          const WC = [oC.top, oC.left, oC.right].some((CC => null === oQ(CC))),
            NC = WC ? await (QQ ??= ZC.e(204).then((() => ZC(34243))).then((CC => (wQ && (wQ = !1, (0, lZ.c)()), {
              rotated: CC.rotatedBlockTextures,
              animated: CC.animatedBlockTextures
            })), (CC => (QQ = null, wQ = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", CC), null))), QQ) : null;
          if (WC && null === NC) return "";
          const MC = {
              top: FQ(oC.top, NC),
              left: FQ(oC.left, NC),
              right: FQ(oC.right, NC),
              itemType: MQ(FC, oC.half)
            },
            gC = (0, OZ.h)(),
            SC = 0 === gC ? nC : `${nC}#${gC}`;
          return (await (0, UZ.b)()).drawBlockIconUrl(SC, wC, bC, (() => MC))
        }
      },
      SQ = {
        itemIcon: function(CC) {
          var zC, ZC, wC, bC;
          if (null === CQ) return nQ(), QC.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(CC);
          if ((0, rZ.e)(CC)) return {
            kind: "icon",
            url: null !== (ZC = null !== (wC = null === (bC = (0, OZ.j)()) || void 0 === bC ? void 0 : bC.textureUrl(CC)) && void 0 !== wC ? wC : CQ.ingameIconUrl(CC)) && void 0 !== ZC ? ZC : CQ.notFoundUrl()
          };
          if (CC.startsWith(rZ.b)) return {
            kind: "icon",
            url: NQ(CC.slice(rZ.b.length))
          };
          if (0 === (0, TZ.d)()) return (0, sZ.d)(), QC.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(CC);
          const nC = null !== (zC = WQ(CC)) && void 0 !== zC ? zC : CC,
            fC = (0, TZ.b)(nC),
            oC = void 0 === fC ? void 0 : zQ.itemTypeNameOf(fC);
          if (void 0 !== yZ(nC)) return {
            kind: "drawnBlock"
          };
          const qC = function(CC) {
            var zC;
            return null !== (zC = fQ(qQ(CC))) && void 0 !== zC ? zC : CQ.notFoundUrl()
          }(nC);
          if ((0, BZ.i)(nC) && ! function(CC) {
              const zC = (0, OZ.j)();
              return null !== zC && (null !== zC.textureUrl(qQ(CC)) || null !== zC.modelUrl(CC))
            }(nC)) return {
            kind: "model",
            url: qC
          };
          if ("Gun" === oC) return {
            kind: "gun",
            url: qC
          };
          if (void 0 !== fC && "GrayscaleArmour" === zQ.itemTypeOf(fC) || Object.hasOwn(uZ.b, nC)) {
            var FC;
            const zC = null !== (FC = (0, uZ.e)(CC)) && void 0 !== FC ? FC : (0, uZ.e)(nC);
            if (zC) return {
              kind: "item",
              url: qC,
              tint: zC
            }
          }
          return {
            kind: "item",
            url: qC
          }
        },
        hasIcon: function(CC) {
          return void 0 !== WQ(CC) || (0, rZ.e)(CC) || CC.startsWith(rZ.b)
        },
        isItemName: function(CC) {
          return void 0 !== WQ(CC)
        }
      };
    var pQ = ZC(590),
      PQ = ZC(39446);

    function GQ(CC) {
      if (null === CC || void 0 === CC || !CC.isCoreRunning) return null;
      const {
        api: zC,
        chunks: ZC,
        items: QC,
        tables: wC
      } = CC;
      return {
        playerFeet() {
          const CC = zC.yG(zC.localId);
          return null !== CC && void 0 !== CC && CC.every(Number.isFinite) ? CC : null
        },
        chunkBlocks: CC => ZC.isLoaded(CC[0], CC[1], CC[2]) ? (CC, zC, QC) => ZC.SF(CC, zC, QC) : null,
        blockName: CC => wC.nameOfId(CC),
        inventory: () => ({
          slots: QC.playerItems().map((CC => CC ? {
            name: CC.name,
            amount: CC.amount
          } : null)),
          heldSlot: QC.selectedSlot
        }),
        nearby() {
          const ZC = [];
          for (let wC = 0; wC < zC.idStr.length; wC++) {
            var QC;
            const bC = zC.idStr[wC],
              nC = zC.serverIds[wC],
              fC = zC.kinds[wC];
            if (null === bC || zC.isLocal(nC) || fC >>> AC.b !== AC.s.Lifeform) continue;
            const oC = zC.yG(nC),
              qC = pQ.i[fC & AC.f];
            oC && void 0 !== qC && ZC.push({
              kind: "Player" === qC ? "player" : qC,
              name: null !== (QC = CC.clientApi.getEntityName(bC)) && void 0 !== QC ? QC : null,
              position: oC
            })
          }
          return ZC
        },
        droppedItems() {
          let CC = 0;
          for (let ZC = 0; ZC < zC.idStr.length; ZC++) null !== zC.idStr[ZC] && zC.kinds[ZC] >>> AC.b === AC.s.Item && CC++;
          return CC
        }
      }
    }
    const RQ = {
        worldCodeAiChunk: CC => Promise.resolve((0, PQ.e)(GQ((0, nC.k)()), CC)),
        worldCodeAiGameState: () => Promise.resolve((0, PQ.h)(GQ((0, nC.k)())))
      },
      AQ = function(CC) {
        const zC = qZ(),
          QC = qZ(),
          wC = new Set,
          bC = new Set,
          nC = () => {
            var zC, ZC;
            return null !== (zC = null === (ZC = CC.runtime()) || void 0 === ZC ? void 0 : ZC.currentViewer) && void 0 !== zC ? zC : null
          };
        let fC = null,
          oC = null;
        const FC = (CC, zC) => ({
            current: CC,
            watch(ZC) {
              let QC = CC();
              return zC.add((() => {
                const zC = CC();
                zC !== QC && (QC = zC, ZC(zC))
              }))
            }
          }),
          NC = CC => ({
            watch: zC => (CC.add(zC), () => {
              CC.delete(zC)
            })
          }),
          MC = CC => {
            const zC = nC(),
              ZC = null === zC || void 0 === zC ? void 0 : zC.view;
            zC && ZC && zC.seek(Math.max(0, Math.min(ZC.totalTicks - 1, ZC.ZN + CC * WC.xd)))
          },
          gC = {
            replay: FC((() => {
              var CC;
              const zC = nC(),
                ZC = null !== (CC = null === zC || void 0 === zC ? void 0 : zC.view) && void 0 !== CC ? CC : null;
              return null === zC || null === ZC || ZC.state === WC.id.None ? (fC = null, null) : (fC = (0, OC.n)(fC, {
                id: zC.id,
                ZN: ZC.ZN,
                totalTicks: ZC.totalTicks,
                Jm: WC.xd,
                playing: ZC.state === WC.id.Playing,
                speed: ZC.speed,
                cameraMode: ZC.cameraMode,
                freecam: "freecam" === ZC.cameraMode
              }), fC)
            }), zC),
            replayEdits: FC((() => {
              var CC;
              const zC = nC(),
                ZC = null !== (CC = null === zC || void 0 === zC ? void 0 : zC.view) && void 0 !== CC ? CC : null;
              return null === zC || null === ZC || ZC.state === WC.id.None ? (oC = null, null) : (oC = (0, OC.n)(oC, {
                cameraKeyframes: [...zC.keyframes],
                playbackMark: ZC.mark,
                fileName: zC.fileName,
                unsavedChanges: zC.unsavedChanges,
                suggestSaveAs: zC.suggestSaveAs
              }), oC)
            }), zC),
            replayRecorder: FC((() => {
              var zC, ZC;
              return null !== (zC = null === (ZC = CC.runtime()) || void 0 === ZC ? void 0 : ZC.recorder.current) && void 0 !== zC ? zC : nZ.b.states.replayRecorder.current()
            }), QC),
            replayVideoExporting: {
              current: wZ.e,
              watch: CC => (0, qC.q)("replayViewer|videoExportChanged", (() => {
                CC((0, wZ.e)())
              }))
            }
          },
          SC = {
            replayUiActionRequested: NC(bC),
            replayViewerRequested: NC(wC)
          },
          pC = CC => {
            for (const zC of wC) zC(CC)
          },
          PC = () => {
            var QC;
            !0 === (null === (QC = nC()) || void 0 === QC ? void 0 : QC.isOpen) && Promise.all([ZC.e(96), ZC.e(66)]).then((() => ZC(60271))).then((ZC => {
              let {
                startWasmReplayVideoExport: QC
              } = ZC;
              return QC({
                viewer: nC,
                canvas: () => {
                  var zC, ZC;
                  return null !== (zC = null === (ZC = CC.canvas) || void 0 === ZC ? void 0 : ZC.call(CC)) && void 0 !== zC ? zC : null
                },
                watchViewer: zC.add,
                requestViewer: pC
              })
            }), (CC => {
              console.error("Couldn't load the video export", CC), bZ.NotificationProvider.showAlertPopup({
                title: "Video export failed",
                subtitle: "Check your connection, then try again."
              })
            })).catch((CC => {
              console.error("The video export failed", CC)
            }))
          },
          GC = {
            replayAction(CC) {
              if ((0, wZ.e)()) return;
              const zC = nC();
              switch (CC) {
                case "replaySkipBack":
                  MC(-1);
                  break;
                case "replaySkipForward":
                  MC(1);
                  break;
                case "replaySpeedUp":
                case "replaySpeedDown":
                  null !== zC && void 0 !== zC && zC.view && zC.setSpeed((0, QZ.i)(zC.view.speed, "replaySpeedUp" === CC ? "up" : "down"));
                  break;
                case "replayRecordKeyframe":
                  null === zC || void 0 === zC || zC.addKeyframe()
              }
            },
            setReplayPlaying(CC) {
              var zC, ZC;
              (0, wZ.e)() || (CC ? null === (zC = nC()) || void 0 === zC || zC.play() : null === (ZC = nC()) || void 0 === ZC || ZC.pause())
            },
            seekReplay(CC) {
              var zC;
              let {
                ZN: ZC,
                ignorePlaybackMark: QC
              } = CC;
              null === (zC = nC()) || void 0 === zC || zC.seek(ZC, null !== QC && void 0 !== QC && QC)
            },
            setReplayCameraMode(CC) {
              var zC;
              null === (zC = nC()) || void 0 === zC || zC.setCameraMode(CC)
            },
            syncReplayCameraMode() {},
            setReplayCameraKeyframe(CC) {
              var zC;
              null === (zC = nC()) || void 0 === zC || zC.setKeyframe(CC)
            },
            moveReplayCameraKeyframe(CC) {
              var zC;
              let {
                from: ZC,
                to: QC
              } = CC;
              null === (zC = nC()) || void 0 === zC || zC.moveKeyframe(ZC, QC)
            },
            deleteReplayCameraKeyframes(CC) {
              var zC;
              let {
                start: ZC,
                end: QC
              } = CC;
              null === (zC = nC()) || void 0 === zC || zC.deleteKeyframes(ZC, QC)
            },
            setReplayPlaybackMark(CC) {
              var zC;
              null === (zC = nC()) || void 0 === zC || zC.setMark(CC)
            },
            cropReplay(CC) {
              var zC, ZC;
              let {
                start: QC,
                end: wC
              } = CC;
              return !(0, wZ.e)() && (null !== (zC = null === (ZC = nC()) || void 0 === ZC ? void 0 : ZC.crop(QC, wC)) && void 0 !== zC && zC)
            },
            holdReplayForShaderPackFailure(CC) {
              const zC = nC();
              zC && (zC.holdForShaderPackFailure(), function(CC) {
                ZC.e(115).then((() => ZC(39051))).then((zC => {
                  let {
                    shaderPackPage: ZC
                  } = zC;
                  ZC.block(CC)
                })).catch((CC => {
                  console.warn("[bloxd-wasm-client] the shader pack could not be blocked", CC)
                }))
              }(CC))
            },
            exportReplayVideo() {
              PC()
            },
            toggleRecording() {
              var zC;
              null === (zC = CC.runtime()) || void 0 === zC || zC.recorder.toggleRecording()
            },
            saveClip() {
              var zC;
              null === (zC = CC.runtime()) || void 0 === zC || zC.recorder.saveClip()
            },
            setRecorderPrefs(zC) {
              var ZC;
              let {
                clipping: QC,
                clipSeconds: wC
              } = zC;
              null === (ZC = CC.runtime()) || void 0 === ZC || ZC.recorder.setPrefs(QC, wC)
            },
            setReplayViewerOpen(zC) {
              var ZC;
              (0, pz.f)(zC) && (null === (ZC = CC.runtime()) || void 0 === ZC || ZC.recorder.viewerShown(zC))
            },
            recordFlyingMiddleText(zC) {
              var ZC;
              let {
                content: QC,
                Jb: wC,
                angle: bC,
                Ib: nC
              } = zC;
              null === (ZC = CC.runtime()) || void 0 === ZC || ZC.recorder.recordFlyingText(JSON.stringify(QC), wC, bC, nC)
            },
            dragReplayCamera(zC) {
              var ZC;
              let {
                dx: QC,
                dy: wC
              } = zC;
              null === (ZC = CC.freecam()) || void 0 === ZC || ZC.drag(QC, wC)
            },
            moveReplayFreecam(zC) {
              var ZC;
              null === (ZC = CC.freecam()) || void 0 === ZC || ZC.move(zC)
            },
            holdReplayFreecamVertical(zC) {
              var ZC;
              let {
                action: QC,
                vq: wC
              } = zC;
              null === (ZC = CC.freecam()) || void 0 === ZC || ZC.holdVertical(QC, wC)
            }
          },
          RC = CC => {
            var zC;
            const ZC = nC(),
              QC = null !== (zC = null === ZC || void 0 === ZC ? void 0 : ZC.view) && void 0 !== zC ? zC : null;
            fZ.has(CC) ? (CC => {
              for (const zC of bC) zC(CC)
            })(CC) : oZ.has(CC) ? GC.replayAction(CC) : "replayPlayPause" === CC ? ZC && QC && QC.state !== WC.id.None && GC.setReplayPlaying(QC.state !== WC.id.Playing) : "replayChangeCameraMode" === CC ? null === ZC || void 0 === ZC || ZC.cycleCameraMode() : "replayExit" === CC ? !0 === (null === ZC || void 0 === ZC ? void 0 : ZC.inPlayback) && (0, Ez.k)("/") : "replayExportVideo" === CC && PC()
          };
        let AC = !1;
        return {
          states: gC,
          events: SC,
          commands: GC,
          lookups: {
            replayCamera() {
              var zC, ZC, QC;
              return !0 !== (null === (zC = nC()) || void 0 === zC ? void 0 : zC.isOpen) ? null : null !== (ZC = null === (QC = CC.cameraView) || void 0 === QC ? void 0 : QC.call(CC)) && void 0 !== ZC ? ZC : null
            },
            leaveGameReloadsPage() {
              var CC;
              return !0 === (null === (CC = nC()) || void 0 === CC ? void 0 : CC.inPlayback)
            }
          },
          feed: {
            viewerChanged: () => {
              var CC;
              const ZC = !0 === (null === (CC = nC()) || void 0 === CC ? void 0 : CC.inPlayback);
              ZC !== AC && (AC = ZC, qC.o.bp("connectedGameChanged")), zC.fire()
            },
            recorderChanged: QC.fire,
            keyDown: CC => {
              var zC;
              switch (CC) {
                case "recordGame":
                  return void GC.toggleRecording();
                case "recordClip":
                  return void((0, pz.c)() || GC.saveClip())
              }(0, wZ.e)() || ("replayViewerOpen" !== CC ? CC.startsWith("replay") && ((0, pz.c)() || !0 === (null === (zC = nC()) || void 0 === zC ? void 0 : zC.inPlayback)) && RC(CC) : pC("toggle"))
            }
          }
        }
      }({
        runtime: wC.k,
        cameraView: () => {
          var CC;
          const zC = null === (CC = (0, nC.k)()) || void 0 === CC ? void 0 : CC.renderFrame;
          if (!zC) return null;
          const [ZC, QC, wC] = zC.cameraPosition, [bC, fC, oC] = zC.cameraDirection;
          return {
            position: [ZC, QC, wC],
            direction: [bC, fC, oC]
          }
        },
        canvas: () => {
          var CC, zC, ZC;
          return null !== (CC = null === (zC = (ZC = (0, bC.E)()).canvas) || void 0 === zC ? void 0 : zC.call(ZC)) && void 0 !== CC ? CC : null
        },
        freecam: wC.j
      }),
      xQ = {
        states: {
          ...qz,
          ...Mz.m,
          ...AQ.states,
          ...NZ,
          ...TC
        },
        events: {
          ...Fz,
          ...pC,
          ...Mz.h,
          ...eC.c,
          ...eZ.k,
          ...AQ.events,
          ...MZ,
          ...vC.j
        },
        commands: {
          ...iC,
          ...Wz,
          ...PC,
          ...Mz.e,
          ...Bz,
          ...vZ,
          ...vC.g,
          ...cz,
          ...AQ.commands,
          ...AZ,
          ...aC,
          ...EZ,
          ...gz
        },
        queries: {
          ...Mz.j,
          ...RQ
        },
        lookups: {
          ...Nz,
          ...lC,
          ...eZ.m,
          ...AQ.lookups,
          ...IC,
          ...ZZ,
          ...HZ,
          ...tC
        }
      };

    function JQ() {
      (0, fC.g)(SC.o), (0, wC.m)(AQ.feed), (0, eC.g)(), Oz || (Oz = !0, (0, SC.l)(dC.k, (CC => {
        const zC = (0, HC.h)(dC.k, CC);
        "string" === typeof zC && Promise.resolve().then((() => ZC(3586))).then((CC => {
          let {
            onCosmeticPackGranted: ZC
          } = CC;
          ZC(zC)
        }))
      })), (0, SC.l)(dC.fb, (CC => {
        const zC = (0, HC.h)(dC.fb, CC);
        "number" === typeof zC && qC.o.bp("serverUpdating", Date.now() + zC, !0)
      })), (0, SC.l)(dC.K, (CC => {
        const zC = (0, HC.h)(dC.K, CC);
        if ((0, HC.e)(zC)) {
          const {
            Kw: CC,
            Yw: ZC
          } = zC;
          (0, Lz.c)({
            Kw: "string" === typeof CC ? CC : null,
            Yw: "string" === typeof ZC ? ZC : null
          })
        }
      })), (0, SC.l)(FC.Bc.NewUiRequest, (CC => {
        const zC = (0, HC.j)(CC);
        (0, HC.e)(zC) && "number" === typeof zC.id && (0, HC.e)(zC.clientParameters) && (0, Uz.i)(zC.id, zC.clientParameters)
      })), (0, SC.l)(dC._, (CC => {
        const zC = (0, HC.h)(dC._, CC);
        "number" === typeof zC && (0, Uz.m)(zC)
      })), (0, SC.j)(Uz.e), (0, SC.l)(FC.Bc.UiRequestPopup, (CC => {
        const zC = (0, HC.j)(CC);
        if ((0, HC.e)(zC) && "number" === typeof zC.id && "string" === typeof zC.text) {
          const CC = zC.id;
          (0, Uz.o)(CC, zC.text, !0 === zC.destructive, (zC => {
            Bz.answerUiRequest({
              id: CC,
              hF: zC
            })
          }))
        }
      })), (0, SC.l)(FC.Bc.TopRightHelper, (CC => {
        const zC = (0, HC.j)(CC);
        void 0 !== zC && qC.o.bp("TopRightHelper", zC, !0)
      })), (0, SC.l)(FC.Bc.TaskProgress, (CC => {
        const zC = (0, HC.j)(CC);
        (0, HC.e)(zC) && "string" === typeof zC.taskId && "number" === typeof zC.progress && (0, yz.e)({
          taskId: zC.taskId,
          progress: zC.progress
        })
      }))), xZ || (xZ = !0, (0, SC.l)(dC.r, (CC => {
        const zC = (0, HC.h)(dC.r, CC);
        (0, HC.e)(zC) && qC.o.bp("showShopFromServer", {
          toggle: zC.ew,
          hw: zC.hw
        }, !0)
      })), (0, SC.l)(FC.Bc.OverShopInfo, (CC => {
        const zC = (0, HC.j)(CC);
        (0, HC.e)(zC) && qC.o.bp("overShopInfo", zC.info, !0)
      })), (0, SC.l)(FC.Bc.ShowShopTutorial, (() => {
        qC.o.bp("showShopTutorial", null, !0)
      }))), GZ || (GZ = !0, (0, SC.i)((() => {
        var CC;
        (0, gZ.D)(), null === (CC = RZ) || void 0 === CC || CC(), RZ = (0, SC.e)() ? (0, pZ.g)(SC.e) : null, (0, SC.e)() || qC.o.pG()
      })), (0, SC.l)(FC.Bc.SetCookie, (CC => {
        const zC = (0, HC.j)(CC),
          ZC = (0, Ez.d)().gameNameWithVariation;
        (0, HC.e)(zC) && "string" === typeof zC.key && null !== ZC && (0, SZ.setCookie)(ZC, zC.key, zC.value)
      })), (0, SC.l)(FC.Bc.LeaveValues, (CC => {
        const zC = (0, HC.j)(CC);
        if ((0, HC.e)(zC) && "string" === typeof zC.leaveEventType) {
          const {
            leaveEventType: CC,
            category: ZC,
            subCategory: QC,
            value: wC
          } = zC;
          (0, gZ.K)({
            leaveEventType: CC,
            category: ZC,
            subCategory: QC,
            value: wC
          })
        }
      })), (0, SC.l)(FC.Bc.CustomAnalyticsEvent, (CC => {
        const zC = (0, HC.j)(CC);
        if ((0, HC.e)(zC) && "string" === typeof zC.cat1) {
          const {
            cat1: CC,
            cat2: ZC,
            cat3: QC,
            value: wC
          } = zC;
          (0, gZ.o)({
            cat1: CC,
            cat2: ZC,
            cat3: QC,
            value: wC
          })
        }
      })), (0, SC.l)(FC.Bc.ProgressionEvent, (CC => {
        const zC = (0, HC.j)(CC);
        if ((0, HC.e)(zC)) {
          const {
            type: CC,
            location1: ZC,
            location2: QC,
            location3: wC,
            score: bC
          } = zC;
          (0, gZ.t)({
            type: CC,
            location1: ZC,
            location2: QC,
            location3: wC,
            score: bC
          })
        }
      })), (0, SC.l)(FC.Bc.ResourceEvent, (CC => {
        const zC = (0, HC.j)(CC);
        if ((0, HC.e)(zC)) {
          const {
            type: CC,
            resourceType: ZC,
            amount: QC,
            category: wC,
            itemName: bC
          } = zC;
          (0, gZ.w)({
            type: CC,
            resourceType: ZC,
            amount: QC,
            category: wC,
            itemName: bC
          })
        }
      })), (0, SC.l)(FC.Bc.LeaderboardResponse, (CC => {
        const zC = (0, HC.j)(CC);
        if ((0, HC.e)(zC)) {
          const {
            category: CC,
            timeframe: ZC,
            data: QC
          } = zC;
          qC.o.bp("leaderboardResponse", {
            category: CC,
            timeframe: ZC,
            data: QC
          })
        }
      })), (0, SC.l)(dC.C, (CC => {
        const zC = (0, HC.h)(dC.C, CC);
        "string" === typeof zC && (0, PZ.d)(CC.conn, zC)
      })), (0, SC.l)(dC.G, (CC => {
        const zC = (0, HC.h)(dC.G, CC);
        "string" === typeof zC && console.error(`[logErrorToConsole]: ${zC}`)
      }))), cC(), (0, eZ.d)(), Xz || (Xz = !0, (0, SC.l)(dC.j, (CC => {
        const zC = (0, HC.h)(dC.j, CC);
        void 0 !== zC && (0, lz.h)(zC)
      }))), jz(), Kz(), yC || (yC = !0, (0, bC.p)(LC)), QC.gameBridge.attach(xQ), (0, QC.installPageSources)({
        commands: {
          ...QC.DEFAULT_CLIENT_PAGE_SOURCES.commands,
          setChunkAddDistance: XZ.h
        },
        queries: gQ,
        lookups: {
          ...QC.DEFAULT_CLIENT_PAGE_SOURCES.lookups,
          ...SQ,
          gR: XZ.e,
          drawCallStats: cZ.e
        }
      }), (0, lZ.c)(), nQ()
    }
  },
  40779: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => FC,
      h: () => oC,
      j: () => fC,
      m: () => qC
    });
    var QC = ZC(1851);
    let wC = null,
      bC = 0;
    const nC = new Set;

    function fC() {
      return wC
    }

    function oC() {
      return bC
    }

    function qC(CC) {
      wC = CC, bC++, (0, QC.c)();
      for (const zC of nC) zC()
    }

    function FC(CC) {
      nC.add(CC)
    }
  },
  40875: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => nC,
      e: () => fC
    });
    var QC = ZC(40878);
    let wC = null,
      bC = null;

    function nC() {
      return wC ??= ZC.e(61).then((() => ZC(60285))).catch((CC => {
        throw wC = null, CC
      })), wC
    }

    function fC() {
      return bC ??= Promise.all([nC(), (0, QC.i)()]).then((CC => {
        let [zC] = CC;
        return zC
      }), (CC => {
        throw bC = null, CC
      })), bC
    }
  },
  36938: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => QC
    });
    const QC = {
      "skyblock:forged:astral-astral-astral": {
        name: "Heart of the Cosmos",
        lore: "Three shards of the night sky, forged as one. The stars answer whoever holds it.",
        damageMultiplier: 1.8,
        cooldownMultiplier: .8,
        ability: "starfall"
      },
      "skyblock:forged:astral-moonstone-sanguine": {
        name: "Eclipse Edge",
        lore: "Moonlight over starlight over blood: the sky goes dark wherever it is drawn.",
        damageMultiplier: 1.7,
        cooldownMultiplier: .81,
        ability: "eclipseField"
      },
      "skyblock:forged:astral-diamond-moonstone": {
        name: "Starcutter",
        lore: "A blade so sharp the Forge Mother swears it once cut a falling star in two.",
        damageMultiplier: 1.65,
        cooldownMultiplier: .83,
        ability: "starfall"
      },
      "skyblock:forged:astral-sanguine-magmasteel": {
        name: "Triune Flame",
        lore: "Each of Lord Vulcan's three faces, bound into one burning edge.",
        damageMultiplier: 1.65,
        cooldownMultiplier: .83,
        ability: "magmaWave"
      },
      "skyblock:forged:magmasteel-magmasteel-magmasteel": {
        name: "Vulcan's Bane",
        lore: "Forged in the heat of his own rift. It remembers the way down.",
        damageMultiplier: 1.56,
        cooldownMultiplier: .83,
        ability: "magmaWave"
      },
      "skyblock:forged:magmasteel-astral-sanguine": {
        name: "Comet's Wake",
        lore: "It leaves a trail of fire through the air, like something falling from very far up.",
        damageMultiplier: 1.56,
        cooldownMultiplier: .83,
        ability: "starfall"
      },
      "skyblock:forged:magmasteel-sanguine-astral": {
        name: "Vulcan's Ruin",
        lore: "The Forge Mother made only one, then sat down for a long while.",
        damageMultiplier: 1.6,
        cooldownMultiplier: .83,
        ability: "warcry"
      },
      "skyblock:forged:magmasteel-iron-stone": {
        name: "Forgehand",
        lore: "A smith's sword: plain to look at, and it hits like a hammer.",
        damageMultiplier: 1.4,
        cooldownMultiplier: .9,
        ability: "quake"
      },
      "skyblock:forged:sanguine-sanguine-sanguine": {
        name: "Crimson Covenant",
        lore: "It drinks, and so do you.",
        damageMultiplier: 1.53,
        cooldownMultiplier: .83,
        ability: "bloodPact"
      },
      "skyblock:forged:sanguine-astral-moonstone": {
        name: "Nightbloom",
        lore: "A red flower that only opens after dark.",
        damageMultiplier: 1.56,
        cooldownMultiplier: .83,
        ability: "eclipseField"
      },
      "skyblock:forged:sanguine-iron-wood": {
        name: "Butcher's Oath",
        lore: "Heavy, honest and always hungry.",
        damageMultiplier: 1.35,
        cooldownMultiplier: .95,
        ability: "bloodPact"
      },
      "skyblock:forged:moonstone-moonstone-moonstone": {
        name: "Lunar Requiem",
        lore: "Swung, it leaves a pale arc that lingers like a second moon.",
        damageMultiplier: 1.35,
        cooldownMultiplier: .85,
        ability: "moonDash"
      },
      "skyblock:forged:moonstone-astral-moonstone": {
        name: "Silver Tide",
        lore: "Pulled by the same moon that pulls the sea.",
        damageMultiplier: 1.4,
        cooldownMultiplier: .84,
        ability: "moonDash"
      },
      "skyblock:forged:diamond-diamond-diamond": {
        name: "Prism Fang",
        lore: "Every facet catches a different light, and every strike finds a different weakness.",
        damageMultiplier: 1.29,
        cooldownMultiplier: .88,
        ability: "gildedEdge",
        traits: {
          crit: 1.8
        }
      },
      "skyblock:forged:diamond-moonstone-gold": {
        name: "Jeweller's Pride",
        lore: "Too pretty to fight with. Fight with it anyway.",
        damageMultiplier: 1.24,
        cooldownMultiplier: .91,
        ability: "gildedEdge"
      },
      "skyblock:forged:gold-gold-gold": {
        name: "King's Ransom",
        lore: "Worth more than the treasure it guards.",
        damageMultiplier: 1.18,
        cooldownMultiplier: .91,
        ability: "gildedEdge",
        traits: {
          coins: 2.5
        }
      },
      "skyblock:forged:gold-moonstone-gold": {
        name: "Midas Moon",
        lore: "Mobs it fells seem to rattle with coins.",
        damageMultiplier: 1.18,
        cooldownMultiplier: .92,
        ability: "gildedEdge",
        traits: {
          coins: 2,
          bossBane: .6
        }
      },
      "skyblock:forged:iron-iron-iron": {
        name: "Old Faithful",
        lore: "It has never let anyone down. It never will.",
        damageMultiplier: 1.15,
        cooldownMultiplier: .94,
        ability: "warcry"
      },
      "skyblock:forged:iron-wood-wood": {
        name: "Militia Blade",
        lore: "Handed out at the outpost gate when the rift first opened.",
        damageMultiplier: 1.09,
        cooldownMultiplier: .97,
        ability: "warcry"
      },
      "skyblock:forged:stone-stone-stone": {
        name: "Quarryman's Cleaver",
        lore: "Chipped from one block of stone, handle and all.",
        damageMultiplier: 1.09,
        cooldownMultiplier: .97,
        ability: "quake"
      },
      "skyblock:forged:wood-wood-wood": {
        name: "Lorenzo's Lesson",
        lore: "Courage matters more than the blade. This one is mostly courage.",
        damageMultiplier: 1.06,
        cooldownMultiplier: .97,
        ability: "warcry"
      }
    }
  },
  36725: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => wC,
      g: () => bC,
      j: () => NC,
      m: () => fC,
      q: () => oC,
      u: () => qC,
      v: () => WC,
      y: () => FC,
      z: () => nC
    });
    var QC = ZC(1183);
    let wC = function(CC) {
        return CC[CC.Join = 0] = "Join", CC[CC.Leave = 1] = "Leave", CC[CC.Push = 2] = "Push", CC[CC.Cursor = 3] = "Cursor", CC[CC.Submit = 4] = "Submit", CC[CC.ReloadAsVariation = 5] = "ReloadAsVariation", CC[CC.CreateFile = 6] = "CreateFile", CC[CC.RenameFile = 7] = "RenameFile", CC[CC.DeleteFile = 8] = "DeleteFile", CC[CC.SetEngine = 9] = "SetEngine", CC[CC.RenameFolder = 10] = "RenameFolder", CC
      }({}),
      bC = function(CC) {
        return CC[CC.Joined = 0] = "Joined", CC[CC.Updates = 1] = "Updates", CC[CC.Presence = 2] = "Presence", CC[CC.RemoteCursor = 3] = "RemoteCursor", CC[CC.ForceClose = 4] = "ForceClose", CC[CC.LobbyFilesChanged = 5] = "LobbyFilesChanged", CC[CC.EngineSettings = 6] = "EngineSettings", CC
      }({});

    function nC(CC) {
      return "lobby" === CC.kind ? `lobby:${CC.path}` : `codeBlock:${CC.pos[0]},${CC.pos[1]},${CC.pos[2]}`
    }

    function fC(CC) {
      if ("lobby" === CC) return {
        kind: "lobby",
        path: QC.k
      };
      if (CC.startsWith("lobby:")) {
        const zC = CC.slice(6);
        return WC(zC) ? {
          kind: "lobby",
          path: zC
        } : null
      }
      const zC = CC.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return zC ? {
        kind: "codeBlock",
        pos: [parseInt(zC[1]), parseInt(zC[2]), parseInt(zC[3])]
      } : null
    }

    function oC(CC) {
      return CC.endsWith(".d.ts")
    }

    function qC(CC) {
      return CC.endsWith(".ts") && !oC(CC)
    }
    const FC = 64;

    function WC(CC) {
      if (!CC || CC !== CC.trim()) return !1;
      if (CC.length > FC) return !1;
      if (CC.startsWith("/") || CC.includes("\\") || CC.includes("\0")) return !1;
      if (!oC(CC) && !qC(CC) && ! function(CC) {
          return CC.endsWith(".js") && !CC.endsWith(".min.js") && !CC.endsWith(".bundle.js")
        }(CC)) return !1;
      const zC = CC.split("/");
      for (const ZC of zC)
        if ("" === ZC || "." === ZC || ".." === ZC) return !1;
      return !0
    }
    const NC = 14e3
  },
  38874: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => QC,
      h: () => wC
    });
    const QC = ["description", "label"];

    function wC(CC) {
      const zC = CC.type;
      return {
        type: zC,
        params: CC[zC]
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);