export const id = 46;
export const ids = [46];
export const modules = {
  39585: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => cD,
      f: () => KD,
      h: () => sD
    });
    const pD = 6e3;

    function sD(DD, zD) {
      return [Math.floor(DD[0] / zD) * zD, Math.floor(DD[1] / zD) * zD, Math.floor(DD[2] / zD) * zD]
    }

    function KD(DD) {
      const zD = (null !== DD && void 0 !== DD ? DD : "").match(/-?\d+(?:\.\d+)?/g);
      return zD && zD.length >= 3 ? [Number(zD[0]), Number(zD[1]), Number(zD[2])] : null
    }

    function rD(DD, zD) {
      return DD === zD ? String(DD) : `${DD}-${zD}`
    }

    function LD(DD, zD, wD, pD) {
      const sD = [];
      let KD = new Map;
      for (let rD = DD[2]; rD < DD[2] + zD; rD++) {
        const LD = new Map;
        let cD = DD[0];
        for (; cD < DD[0] + zD;) {
          const sD = pD(cD, wD, rD);
          let gD = cD;
          for (; gD + 1 < DD[0] + zD && pD(gD + 1, wD, rD) === sD;) gD++;
          if (null !== sD) {
            const DD = `${cD} ${gD} ${sD}`,
              zD = KD.get(DD);
            zD ? (zD.z1 = rD, KD.delete(DD), LD.set(DD, zD)) : LD.set(DD, {
              x0: cD,
              x1: gD,
              z0: rD,
              z1: rD,
              name: sD
            })
          }
          cD = gD + 1
        }
        sD.push(...KD.values()), KD = LD
      }
      return sD.push(...KD.values()), sD.sort(((DD, zD) => DD.z0 - zD.z0 || DD.x0 - zD.x0)).map((DD => `x${rD(DD.x0,DD.x1)} z${rD(DD.z0,DD.z1)} ${DD.name}`))
    }

    function cD(DD, zD, wD, sD) {
      let KD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : pD;
      const cD = [DD[0] + zD - 1, DD[1] + zD - 1, DD[2] + zD - 1],
        gD = null !== sD && sD.every(((zD, wD) => Math.floor(zD) >= DD[wD] && Math.floor(zD) <= cD[wD])),
        RD = [`The chunk from ${DD.join(" ")} to ${cD.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
      null !== sD && RD.push(`The player's feet are at ${sD.map(Math.floor).join(" ")}, ${gD?"in this chunk":"outside this chunk"}.`);
      const AD = [];
      for (let pD = DD[1]; pD <= cD[1]; pD++) {
        const sD = LD(DD, zD, pD, wD).join("; "),
          KD = AD[AD.length - 1];
        (null === KD || void 0 === KD ? void 0 : KD.boxes) === sD ? KD.to = pD : AD.push({
          from: pD,
          to: pD,
          boxes: sD
        })
      }
      const UD = AD.filter((DD => "" !== DD.boxes));
      0 === UD.length && RD.push("It is all air.");
      let fD = RD.join("\n").length;
      for (const pD of UD) {
        const DD = `y${rD(pD.from,pD.to)}: ${pD.boxes}`;
        if (fD += DD.length + 1, fD > KD) {
          RD.push(`Cut short: the layers from y${pD.from} up aren't shown, as there are too many blocks.`);
          break
        }
        RD.push(DD)
      }
      return RD.join("\n")
    }
  },
  8808: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => sD
    });
    var pD = wD(20);

    function sD() {
      return !pD.e.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  36918: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => rD,
      h: () => KD,
      i: () => sD
    });
    const pD = [.25, .5, 1, 2, 4, 8, 16];

    function sD(DD, zD) {
      const wD = pD;
      let sD = wD.indexOf(DD);
      return -1 === sD && (sD = wD.findIndex((zD => zD >= DD)), -1 === sD && (sD = wD.length - 1)), "up" === zD ? wD[Math.min(sD + 1, wD.length - 1)] : wD[Math.max(sD - 1, 0)]
    }

    function KD(DD) {
      return DD <= pD[0]
    }

    function rD(DD) {
      return DD >= pD[pD.length - 1]
    }
  },
  36495: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => sD,
      e: () => KD
    });
    let pD = !1;

    function sD() {
      return pD
    }

    function KD(DD) {
      return pD !== DD && (pD = DD, !0)
    }
  },
  38989: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => KD
    });
    var pD = wD(25),
      sD = wD(1956);

    function KD(DD) {
      let {
        taskId: zD,
        progress: wD
      } = DD;
      const pD = sD.e.get("_tasks");
      null !== pD && void 0 !== pD && pD[zD] && sD.e.apply({
        _tasks: {
          ...pD,
          [zD]: {
            ...pD[zD],
            progress: wD
          }
        }
      })
    }
    pD.l.subscribe("clientTaskProgress", (DD => {
      KD(DD)
    }))
  },
  39555: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => UD,
      g: () => ID,
      j: () => gD,
      k: () => AD,
      o: () => cD,
      s: () => rD,
      v: () => RD,
      y: () => BD
    });
    var pD = wD(1956),
      sD = wD(25),
      KD = wD(1969);
    const rD = (0, KD.l)((function() {
        var DD, zD, wD, sD;
        return {
          health: null !== (DD = pD.e.get("_health")) && void 0 !== DD ? DD : null,
          maxHealth: null !== (zD = pD.e.get("_totalMaxHealth")) && void 0 !== zD ? zD : null,
          shield: null !== (wD = pD.e.get("_shield")) && void 0 !== wD ? wD : null,
          maxShield: null !== (sD = pD.e.get("maxShield")) && void 0 !== sD ? sD : null
        }
      }), [], (0, KD.j)("_health", "_totalMaxHealth", "_shield", "maxShield")),
      LD = [{
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

    function cD(DD, zD) {
      return LD[(DD ? 2 : 0) + (zD ? 1 : 0)]
    }
    const gD = (0, KD.l)((function() {
      var DD;
      return null !== (DD = pD.e.get("_aura")) && void 0 !== DD ? DD : null
    }), [], (0, KD.j)("_aura"));

    function RD(DD) {
      return {
        watch: zD => (0, sD.o)("shotPlayer", (wD => {
          let {
            playerId: pD,
            damage: sD,
            wasCrit: KD,
            distance: rD
          } = wD;
          DD(pD) && zD({
            damage: sD,
            wasCrit: KD,
            distance: rD
          })
        }))
      }
    }

    function AD(DD) {
      return (0, KD.b)("chat", (zD => {
        let {
          serverChatMsgId: wD,
          content: pD,
          chatterEId: sD
        } = zD;
        return {
          serverChatMsgId: null !== wD && void 0 !== wD ? wD : null,
          content: pD,
          author: sD ? DD(sD) : null
        }
      }))
    }
    class UD {
      constructor() {
        this.shown = null, this.needed = null, this.neededSince = 0
      }
      update(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const wD = this.shown;
        return DD !== this.needed && (this.needed = DD, this.neededSince = zD, null === DD && (this.shown = null)), this.shown !== this.needed && zD - this.neededSince > 200 && (this.shown = this.needed), this.shown !== wD
      }
    }

    function fD(DD) {
      return [{
        translationKey: `touchKeys:${DD}`
      }]
    }
    const ID = {
      open: fD("open"),
      close: fD("close"),
      milk: fD("milk"),
      shear: fD("shear"),
      tame: fD("tame"),
      feed: fD("feed"),
      ride: fD("ride")
    };

    function BD(DD) {
      return [{
        translationKey: "touchKeys:tameWith"
      }, " ", {
        icon: DD
      }]
    }
  },
  40958: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => LD,
      f: () => rD
    });
    var pD = wD(3292);
    let sD = null,
      KD = null;

    function rD() {
      return KD ??= wD.e(212).then((() => wD(36304))).then((DD => {
        let {
          ITEM_SPRITES: zD,
          ITEM_SPRITES_WITHOUT_FILE: wD,
          ITEM_FILES_WITHOUT_SPRITE: KD
        } = DD;
        sD = function(DD, zD, wD) {
          const sD = new Set,
            KD = (0, pD.x)(zD);
          let rD = 0;
          for (const [pD, LD] of DD.entries()) pD === KD[rD] ? rD++ : sD.add(LD);
          if ("" !== wD)
            for (const LD of wD.split(pD.t)) sD.add(LD);
          return sD
        }(zD.split(pD.t), wD, KD)
      }), (DD => {
        throw KD = null, DD
      })), KD
    }

    function LD(DD) {
      var zD, wD;
      return null !== (zD = null === (wD = sD) || void 0 === wD ? void 0 : wD.has(DD)) && void 0 !== zD && zD
    }
  },
  39574: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => pD,
      g: () => KD,
      h: () => sD
    });
    const pD = 128;

    function sD(DD, zD, wD, pD) {
      const sD = 2 * zD - 1,
        KD = 1 - 2 * wD,
        rD = DD(0) - sD * DD(3),
        LD = DD(4) - sD * DD(7),
        cD = DD(8) - sD * DD(11),
        gD = DD(1) - KD * DD(3),
        RD = DD(5) - KD * DD(7),
        AD = DD(9) - KD * DD(11);
      pD[0] = LD * AD - cD * RD, pD[1] = cD * gD - rD * AD, pD[2] = rD * RD - LD * gD;
      const UD = pD[0] * DD(3) + pD[1] * DD(7) + pD[2] * DD(11) < 0 ? -1 : 1,
        fD = Math.hypot(pD[0], pD[1], pD[2]) * UD;
      return pD[0] /= fD, pD[1] /= fD, pD[2] /= fD, pD
    }

    function KD(DD, zD, wD, pD, sD, KD) {
      const rD = [Math.floor(zD[0]), Math.floor(zD[1]), Math.floor(zD[2])],
        LD = [0, 0, 0],
        cD = [1 / 0, 1 / 0, 1 / 0],
        gD = [1 / 0, 1 / 0, 1 / 0];
      for (let UD = 0; UD < 3; UD++) LD[UD] = Math.sign(wD[UD]), 0 !== LD[UD] && (gD[UD] = Math.abs(1 / wD[UD]), cD[UD] = (rD[UD] + (LD[UD] > 0 ? 1 : 0) - zD[UD]) / wD[UD]);
      let RD = 0,
        AD = Math.abs(wD[0]) > Math.abs(wD[1]) ? 0 : 1;
      for (Math.abs(wD[2]) > Math.abs(wD[AD]) && (AD = 2); RD <= pD;) {
        if (DD(rD[0], rD[1], rD[2])) return sD[0] = rD[0], sD[1] = rD[1], sD[2] = rD[2], KD[0] = 0, KD[1] = 0, KD[2] = 0, KD[AD] = -LD[AD], !0;
        AD = cD[0] < cD[1] ? 0 : 1, cD[2] < cD[AD] && (AD = 2), RD = cD[AD], rD[AD] += LD[AD], cD[AD] += gD[AD]
      }
      return !1
    }
  },
  39551: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => sD
    });
    var pD = wD(1886);

    function sD(DD, zD, wD) {
      return (0, pD.n)(DD, zD) < wD
    }
  },
  8732: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => sD
    });
    var pD = wD(1265);

    function sD(DD, zD) {
      var wD, sD;
      try {
        const wD = (0, pD.d)();
        if ("function" === typeof wD) {
          const pD = new wD(DD, zD);
          if (pD.type === DD) return pD
        }
      } catch {}
      const KD = document.createEvent("Event");
      return KD.initEvent(DD, null !== (wD = null === zD || void 0 === zD ? void 0 : zD.bubbles) && void 0 !== wD && wD, null !== (sD = null === zD || void 0 === zD ? void 0 : zD.cancelable) && void 0 !== sD && sD), KD
    }
  },
  38984: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => RD
    });
    var pD = wD(1232),
      sD = wD(1339),
      KD = wD(20),
      rD = wD(1324),
      LD = wD(1332),
      cD = wD(1511),
      gD = wD(36467);

    function RD(DD) {
      let {
        os: zD,
        Fs: wD
      } = DD;
      const RD = null !== zD && void 0 !== zD ? zD : (0, LD.c)().gameNameWithVariation;
      (0, pD.F)(RD) && ((0, gD.m)(), (0, rD.gb)((() => {
        console.log("Received matchmaking order from game server to game", zD), (0, KD.k)("inGameReplay"), (0, cD.navigatePreserveSearch)((0, sD.c)(RD, null !== wD && void 0 !== wD ? wD : void 0))
      }), "video_start"))
    }
  },
  39148: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => KD
    });
    var pD = wD(25),
      sD = wD(1981);

    function KD(DD) {
      var zD, wD;
      const KD = (0, sD.m)(null !== (zD = null === (wD = sD.u.toggleFreeCam) || void 0 === wD ? void 0 : wD[0]) && void 0 !== zD ? zD : null);
      pD.l.KG("showBottomMessage", {
        message: `Free Camera ${DD?"Enabled":"Disabled"}${KD?` - Press ${KD} to toggle`:""}`,
        timeoutLength: 2e3,
        type: "Warning"
      })
    }
  },
  38975: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => cD,
      f: () => rD,
      h: () => LD,
      l: () => gD
    });
    var pD = wD(25),
      sD = wD(1355);
    const KD = new Map;

    function rD(DD, zD) {
      pD.l.KG("newUiRequest", {
        id: DD,
        clientParameters: zD
      }, !0)
    }

    function LD(DD) {
      pD.l.KG("removeUiRequest", DD, !0);
      const zD = KD.get(DD);
      zD && (zD.tearDownNotification(), KD.delete(DD))
    }

    function cD() {
      pD.l.KG("clearUiRequests");
      for (const DD of KD.values()) DD.tearDownNotification();
      KD.clear()
    }

    function gD(DD, zD, wD, pD) {
      const rD = sD.NotificationProvider.showPromptPopup({
        title: zD,
        confirmText: "general:yes",
        cancelText: "general:no",
        destructive: wD,
        unlockPointerKey: "uiRequestPopup"
      });
      KD.set(DD, rD), rD.getResult().then((zD => {
        KD.delete(DD), "notificationTornDown" !== zD && pD(zD)
      }))
    }
  },
  39582: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => AD,
      e: () => UD
    });
    var pD = wD(197),
      sD = wD(39585);
    const KD = 20;

    function rD(DD) {
      return DD.map(Math.floor).join(" ")
    }

    function LD(DD) {
      return null === DD.amount || 1 === DD.amount ? DD.name : `${DD.amount} ${DD.name}`
    }
    var cD = wD(39592),
      gD = wD(1956),
      RD = wD(1332);

    function AD(DD, zD) {
      if (!DD) return cD.c;
      const wD = DD.playerFeet();
      if (!wD) return "The player isn't in the world yet, so no blocks can be seen.";
      const KD = pD.f.CI,
        rD = (0, sD.h)(null !== zD && void 0 !== zD ? zD : wD, KD),
        LD = DD.chunkBlocks(rD);
      return LD ? (0, sD.b)(rD, KD, ((zD, wD, pD) => {
        const sD = LD(zD, wD, pD);
        return 0 === sD ? null : DD.blockName(sD).split("|")[0]
      }), wD) : `The chunk from ${rD.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${wD.map(Math.floor).join(" ")}.`
    }

    function UD(DD) {
      var zD, wD, pD;
      if (!DD) return cD.d;
      const sD = DD.playerFeet();
      if (!sD) return "The player isn't in the world yet, so nothing in it can be seen.";
      const {
        slots: AD,
        heldSlot: UD
      } = DD.inventory();
      return function(DD) {
        const zD = [];
        null !== DD.game && zD.push(`Game: ${DD.game}.`);
        const wD = null === DD.health ? "" : `, health ${Math.round(DD.health)}${null===DD.maxHealth?"":` of ${Math.round(DD.maxHealth)}`}`;
        zD.push(`The player (the creator) stands at ${rD(DD.position)}${wD}, ${DD.creative?"in":"not in"} creative mode.`);
        const pD = DD.slots[DD.heldSlot];
        zD.push(pD ? `Holding (slot ${DD.heldSlot}): ${LD(pD)}.` : `Holding nothing (slot ${DD.heldSlot} is empty).`);
        const sD = DD.slots.flatMap(((DD, zD) => DD ? [`slot ${zD}: ${LD(DD)}`] : []));
        zD.push(sD.length > 0 ? `Inventory: ${sD.join(", ")}.` : "Inventory: empty.");
        const cD = zD => Math.hypot(zD.position[0] - DD.position[0], zD.position[1] - DD.position[1], zD.position[2] - DD.position[2]),
          gD = [...DD.nearby].sort(((DD, zD) => cD(DD) - cD(zD)));
        if (0 === gD.length) zD.push("No other players or mobs are near enough to see.");
        else {
          zD.push("Near them, nearest first:");
          for (const DD of gD.slice(0, KD)) {
            const wD = "player" === DD.kind ? `player "${DD.name||"?"}"` : DD.name && DD.name !== DD.kind ? `${DD.kind} "${DD.name}"` : DD.kind,
              pD = Math.round(cD(DD));
            zD.push(`- ${wD} at ${rD(DD.position)}, ${pD} block${1===pD?"":"s"} away`)
          }
          gD.length > KD && zD.push(`- and ${gD.length-KD} more further away`)
        }
        return DD.droppedItems > 0 && zD.push(`${DD.droppedItems} dropped item${1===DD.droppedItems?" is":"s are"} on the ground nearby.`), zD.join("\n")
      }({
        game: null !== (zD = (0, RD.c)().gameNameWithVariation) && void 0 !== zD ? zD : null,
        position: sD,
        health: null !== (wD = gD.e.get("_health")) && void 0 !== wD ? wD : null,
        maxHealth: null !== (pD = gD.e.get("_totalMaxHealth")) && void 0 !== pD ? pD : null,
        creative: !0 === gD.e.get("creative"),
        heldSlot: UD,
        slots: AD,
        nearby: DD.nearby(),
        droppedItems: DD.droppedItems()
      })
    }
  },
  38996: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => LD,
      h: () => cD,
      i: () => gD
    });
    var pD = wD(1232),
      sD = wD(1008),
      KD = wD(36821),
      rD = wD(25);

    function LD(DD) {
      let {
        lobbyName: zD,
        gameNameWithVariation: wD
      } = DD;
      return !(0, pD.J)(zD) || null !== wD && (wD.startsWith("testGym") || (0, sD.l)(wD))
    }

    function cD(DD) {
      return DD.zr === KD.c.Leave || DD.zr === KD.c.Cursor
    }

    function gD(DD) {
      rD.l.KG("codeCollab", {
        type: DD.zr,
        docKey: DD.wr,
        version: DD.sr,
        editorCount: DD.Kr,
        peers: DD.rr,
        updates: DD.Lr,
        playerId: DD.Rr,
        playerName: DD.Ar,
        colour: DD.Ur,
        anchor: DD.Ir,
        head: DD.Br,
        existingCursors: DD.Gr,
        files: DD.hr,
        engineSettings: DD.nr
      })
    }
  },
  40796: (DD, zD, wD) => {
    wD.d(zD, {
      D: () => lD,
      H: () => TD,
      L: () => iD,
      N: () => xD,
      P: () => oD,
      T: () => eD,
      U: () => jD,
      c: () => aD,
      f: () => ND,
      g: () => PD,
      i: () => uD,
      l: () => CD,
      m: () => VD,
      p: () => WD,
      s: () => bD,
      t: () => SD,
      x: () => dD,
      z: () => FD
    });
    var pD = wD(1383),
      sD = wD(25),
      KD = wD(1299),
      rD = wD(2382),
      LD = wD(4832),
      cD = wD(4800);
    let gD, RD = !1,
      AD = !1,
      UD = !1,
      fD = !1;
    const ID = 1300,
      BD = 3e3;
    let GD = 0,
      hD = !1,
      nD = !1,
      MD = 0;
    const OD = 2;
    let JD = !1,
      ED = !1;
    const QD = new Set,
      XD = new Set;

    function VD() {
      return RD
    }

    function PD() {
      return nD
    }

    function CD() {
      return ED
    }

    function xD() {
      return (0, KD.s)() && !ED
    }

    function TD(DD) {
      let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (DD !== ED) {
        ED = DD;
        for (const DD of [...XD]) DD(ED);
        zD && eD()
      }
    }

    function bD(DD) {
      return XD.add(DD), () => {
        XD.delete(DD)
      }
    }

    function jD() {
      (0, LD.j)(rD.s.Menu, (0, KD.s)() ? 0 : rD.s.Menu)
    }

    function dD() {
      nD = !1, MD = 0, jD(), eD()
    }

    function SD(DD) {
      return QD.add(DD), () => {
        QD.delete(DD)
      }
    }

    function iD(DD) {
      AD = !1, DD !== RD && (RD = DD, fD = !1, clearTimeout(gD), UD = !RD && JD, RD ? (hD = !1, nD = !1, MD = 0) : xD() && !JD && (nD = !0), JD = !1, RD && !xD() && tD(), YD(), UD && eD())
    }

    function lD(DD) {
      DD !== hD && (hD = DD, DD || eD())
    }

    function WD() {
      AD = !1, fD || !0 !== kD() || (fD = !0, clearTimeout(gD), gD = setTimeout(ZD, ID))
    }

    function ND() {
      return (!AD || performance.now() - GD > BD) && (AD = (0, cD.G)().lockPointer(), GD = performance.now()), AD
    }

    function ZD() {
      yD() && mD() && ND()
    }

    function yD() {
      return xD() && !RD && !hD && !(0, pD.f)()
    }

    function kD() {
      var DD;
      return "undefined" === typeof navigator || null === (DD = navigator.userActivation) || void 0 === DD ? void 0 : DD.isActive
    }

    function mD() {
      return UD && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== kD()
    }

    function eD() {
      xD() ? yD() && !nD && mD() && ND() : RD && !JD && tD()
    }

    function oD() {
      nD ? navigator.vendor.startsWith("Apple") ? vD() : MD = OD : eD()
    }

    function aD() {
      MD > 0 && 0 === --MD && vD()
    }

    function uD() {
      MD = 0
    }

    function vD() {
      yD() && !0 === kD() && ND()
    }

    function tD() {
      JD = !0, (0, cD.G)().unlockPointer()
    }

    function FD() {
      AD = !1, UD = !1, fD = !1, clearTimeout(gD), hD = !1, nD = !1, MD = 0, JD = !1;
      const DD = RD;
      RD = !1, DD && YD()
    }

    function YD() {
      for (const DD of [...QD]) DD(RD);
      sD.l.KG("pointerLockUpdate", RD)
    }
  },
  40598: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => UD,
      g: () => LD,
      k: () => AD,
      m: () => gD,
      n: () => rD,
      r: () => RD,
      v: () => cD
    });
    let pD = null,
      sD = null,
      KD = null;

    function rD(DD) {
      pD = DD
    }

    function LD() {
      return pD
    }

    function cD(DD) {
      sD = DD
    }

    function gD() {
      return sD
    }

    function RD(DD) {
      KD = DD
    }

    function AD() {
      return KD
    }

    function UD() {
      var DD, zD;
      return !0 === (null === (DD = sD) || void 0 === DD || null === (zD = DD.currentViewer) || void 0 === zD ? void 0 : zD.inPlayback)
    }
  },
  40914: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      attachPlayGameSources: () => Xp,
      playGameSources: () => Qp
    });
    var pD = wD(1925),
      sD = wD(40598),
      KD = wD(4800),
      rD = wD(40516),
      LD = wD(40898),
      cD = wD(39555),
      gD = wD(25),
      RD = wD(4820),
      AD = wD(4817),
      UD = wD(40544),
      fD = wD(40573),
      ID = wD(40916),
      BD = wD(40558);
    (0, BD.l)(RD.ec.Chat, (DD => {
      if (DD.payloadKind !== AD.pc.Msgpack) return;
      const zD = function(DD) {
        if (null === DD || "object" !== typeof DD || !("content" in DD)) return null;
        const {
          chatMsgId: zD,
          content: wD,
          chatterEId: pD
        } = DD;
        return {
          serverChatMsgId: null !== zD && void 0 !== zD ? zD : void 0,
          content: wD,
          chatterEId: void 0 === pD || null === pD ? void 0 : String(pD)
        }
      }((0, UD.b)(DD.payload));
      null !== zD && gD.l.KG("chat", zD, !0)
    }));
    const GD = {
        chatReceived: (0, cD.k)((function(DD) {
          var zD, wD, pD;
          return {
            id: DD,
            name: null !== (zD = ID.e.getName(DD)) && void 0 !== zD ? zD : null,
            local: (0, fD.h)() === DD,
            profileEffect: null !== (wD = null === (pD = (0, ID.g)(DD)) || void 0 === pD ? void 0 : pD.profileEffect) && void 0 !== wD ? wD : null
          }
        }))
      },
      hD = {
        sendChatMessage(DD) {
          var zD;
          let {
            lg: wD,
            channelName: pD
          } = DD;
          null === (zD = (0, rD.i)()) || void 0 === zD || zD.clientApi.sendChat(wD, pD)
        }
      };
    var nD = wD(197),
      MD = wD(1956),
      OD = wD(40506),
      JD = wD(39551);
    const ED = [0, 0, 0],
      QD = {
        codeBlockClickable(DD) {
          var zD;
          const wD = (0, rD.i)();
          if (null === wD || void 0 === wD || !wD.isSessionLive) return !1;
          const pD = wD.api;
          if (0 !== (OD.v.playerFlags(pD.apiView, 0) & OD.Ad.Crouching)) return !1;
          const sD = pD.queries.directorEntity(pD.localId) >= OD.ub.BYTES ? pD.memoryData(pD.scratch(), OD.ub.BYTES, 8, "the local player's DirectorEntity") : null;
          if (null === sD) return !1;
          for (let KD = 0; KD < 3; KD++) ED[KD] = OD.ub.feet(sD, 0, KD);
          return ED[1] += OD.ub.eyeHeight(sD, 0), (0, JD.c)(ED, DD, null !== (zD = MD.e.get("blockReach")) && void 0 !== zD ? zD : nD.f.aG)
        }
      },
      XD = {
        clickCodeBlock(DD) {
          var zD;
          null === (zD = (0, rD.i)()) || void 0 === zD || zD.clickCodeBlock(DD)
        }
      };
    var VD = wD(40526),
      PD = wD(40919),
      CD = wD(1008),
      xD = wD(39005),
      TD = wD(4791),
      bD = wD(40535),
      jD = wD(40522),
      dD = wD(40540);

    function SD(DD) {
      if (null === DD) return null;
      const zD = [];
      for (const wD of DD) {
        const DD = Object.keys(wD)[0];
        if ("xw" === DD) {
          const {
            str: DD,
            style: pD,
            clickableUrl: sD
          } = wD.xw, KD = Object.keys(DD)[0], rD = DD[KD];
          "string" !== KD && "styledEntityName" !== KD && "styledTranslatedText" !== KD || zD.push({
            str: rD,
            style: pD,
            clickableUrl: sD
          })
        } else zD.push(wD[DD])
      }
      return zD
    }
    const iD = {
      screenPos(DD) {
        var zD, wD;
        return null !== (zD = null === (wD = (0, rD.i)()) || void 0 === wD ? void 0 : wD.renderFrame.projectWorldPosToScreenPos(DD)) && void 0 !== zD ? zD : {
          x: 0,
          y: 0
        }
      }
    };
    let lD = !1;

    function WD() {
      lD || (lD = !0, (0, BD.l)(RD.ec.ProgressBarUpdate, (DD => {
        const zD = (0, dD.i)(DD);
        (0, dD.b)(zD) && gD.l.KG("progressBarUpdate", zD, !0)
      })), (0, BD.l)(bD.u, (DD => {
        const zD = (0, dD.e)(bD.u, DD);
        zD && gD.l.KG("middleScreenBarInitiate", {
          duration: zD.ap,
          vp: zD.vp,
          horizBarRemOffset: zD.tp
        }, !0)
      })), (0, BD.l)(RD.ec.RemoveMiddleScreenBar, (() => {
        gD.l.KG("middleScreenBarRemove")
      })), (0, BD.l)(bD.db, (DD => {
        const zD = (0, dD.e)(bD.db, DD);
        if (zD) {
          var wD;
          const DD = zD.Xp ? null === (wD = (0, rD.i)()) || void 0 === wD ? void 0 : wD.renderFrame.projectDirectionToScreenPos(zD.Xp) : void 0;
          gD.l.KG("sendHitmarker", {
            Qp: zD.Qp,
            screenPos: DD
          }, !0)
        }
      })), (0, BD.l)(bD.ib, (DD => {
        const zD = (0, dD.e)(bD.ib, DD);
        if (zD) {
          const {
            id: DD,
            position: wD,
            style: pD,
            Bp: sD,
            hp: KD
          } = zD;
          gD.l.KG("setDirectionArrow", {
            id: DD,
            position: wD,
            style: pD,
            text: SD(sD),
            hp: KD
          }, !0)
        }
      })), (0, BD.l)(bD.e, (DD => {
        const zD = (0, dD.e)(bD.e, DD);
        zD && gD.l.KG("clearDirectionArrow", {
          id: zD.id
        }, !0)
      })), (0, BD.l)(bD.n, (DD => {
        const zD = (0, dD.e)(bD.n, DD);
        zD && gD.l.KG("flyingMiddleMessage", {
          content: SD(zD.yK),
          kK: zD.kK,
          mK: zD.mK
        }, !0)
      })), (0, BD.l)(RD.ec.WorldVariation, (DD => {
        const zD = (0, dD.i)(DD);
        if ("string" === typeof zD) {
          const DD = zD === CD.h ? null : {
            message: `Currently loaded as variation: ${zD}`,
            type: "Warning"
          };
          gD.l.KG("showPermanentBottomMessage", DD, !0)
        }
      })), (0, BD.l)(bD.J, (DD => {
        const zD = (0, dD.e)(bD.J, DD);
        zD && function(DD, zD) {
          const {
            type: wD,
            params: pD
          } = (0, xD.h)(zD), sD = {
            ...pD
          };
          for (const KD of xD.e) sD[KD] && (sD[KD] = SD(sD[KD]));
          TD.e.queueQTE(DD, wD, sD).getResult().then((zD => {
            var wD;
            "boolean" === typeof zD && (null === (wD = (0, rD.i)()) || void 0 === wD || wD.send(jD.d.QteResponse, {
              qteId: DD,
              qteResponse: zD
            }))
          }))
        }(zD.id, zD.Ow)
      })), (0, BD.l)(bD.Z, (DD => {
        const zD = (0, dD.e)(bD.Z, DD);
        "number" === typeof zD && TD.e.cancelQTE(zD)
      })), (0, BD.f)((() => {
        TD.e.reset()
      })), (0, BD.h)((() => {
        TD.e.reset()
      })), (0, BD.l)(RD.ec.EditItemCraftingRecipes, (DD => {
        const zD = (0, dD.i)(DD);
        (0, dD.b)(zD) && gD.l.KG("craftingRecipesEdited", {
          itemName: zD.craftingRecipeItemName,
          recipesForItem: zD.recipesForItem
        })
      })), (0, BD.l)(bD.V, (DD => {
        const zD = (0, dD.e)(bD.V, DD);
        zD && gD.l.KG("craftingRecipesEdited", {
          itemName: zD.WK,
          recipesForItem: []
        })
      })))
    }
    var ND = wD(20);
    const ZD = [{
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

    function yD(DD) {
      return OD.v.playerFlags(DD.api.apiView, 0)
    }
    const kD = {
        freeCamera: (0, fD.e)((DD => () => {
          const zD = DD.isSessionLive && 0 !== (yD(DD) & OD.Ad.FreeCamMoves),
            wD = DD.freeCameraAllowed() && null === ND.e.get("scriptedCameraFacing");
          return ZD[(wD ? 2 : 0) + (zD ? 1 : 0)]
        }), ZD[0], (DD => (0, KD.t)(DD)))
      },
      mD = {
        setFreeCameraMovesFly: DD => {
          var zD;
          null === (zD = (0, rD.i)()) || void 0 === zD || zD.setFreeCameraMovesFly(DD)
        }
      },
      eD = {
        freeCameraPos: () => {
          const DD = (0, rD.i)();
          return null !== DD && void 0 !== DD && DD.isSessionLive && DD.renderFrame.hasView && 0 !== (yD(DD) & OD.Ad.FreeCam) ? DD.renderFrame.cameraPosition : null
        }
      };
    var oD = wD(39148);
    let aD = !1,
      uD = !1;

    function vD() {
      const DD = (0, rD.i)();
      if (null === DD || void 0 === DD || !DD.isSessionLive) return void(aD = !1);
      const zD = 0 !== (OD.v.playerFlags(DD.api.apiView, 0) & OD.Ad.FreeCam);
      zD !== aD && (aD = zD, (0, oD.e)(zD))
    }
    var tD = wD(351),
      FD = wD(37015),
      YD = wD(1969);
    var HD = wD(40928),
      qD = wD(40564);
    const Dz = {
      interactPrompt: null,
      blockText: null,
      neededTool: null
    };
    let zz = "off";

    function wz(DD) {
      var zD;
      return null === DD ? null : {
        label: null !== (zD = (0, HD.d)(DD, "interactionPrompt")) && void 0 !== zD ? zD : null
      }
    }
    const pz = new Map([
      [OD.qc.Open, {
        label: cD.g.open
      }],
      [OD.qc.Close, {
        label: cD.g.close
      }],
      [OD.qc.Milk, {
        label: cD.g.milk
      }],
      [OD.qc.Shear, {
        label: cD.g.shear
      }],
      [OD.qc.Tame, {
        label: cD.g.tame
      }],
      [OD.qc.Feed, {
        label: cD.g.feed
      }],
      [OD.qc.Ride, {
        label: cD.g.ride
      }]
    ]);
    class sz {
      constructor() {
        this.target = Dz, this.fR = OD.Xc, this.optionName = null, this.pickaxe = new cD.e
      }
      read(DD) {
        var zD;
        const wD = OD.v.targetBlockId(DD.api.apiView, 0);
        wD !== this.fR && (this.fR = wD, this.optionName = wD === OD.Xc ? null : `${DD.tables.getMetaInfo(wD).rootName}CrosshairText`);
        const pD = null === this.optionName ? null : null !== (zD = DD.tables.getClientOption(this.optionName)) && void 0 !== zD ? zD : null;
        this.pickaxe.update(function(DD, zD) {
          var wD, pD, sD;
          if (0 === (OD.v.playerFlags(DD.api.apiView, 0) & OD.Ad.Breaking) || zD === OD.Xc || 0 === zD) return null;
          const {
            tables: KD
          } = DD;
          if (!0 === KD.getClientOption("creative")) return null;
          const rD = KD.nameOfId(zD),
            LD = null === (wD = DD.items.Qg()) || void 0 === wD ? void 0 : wD.name,
            cD = null !== (pD = KD.getItemStat(rD, "harvestLevel")) && void 0 !== pD ? pD : 0;
          return (0, tD.Cc)({
            blockHarvestType: KD.getDefaultItemStat(rD, "harvestType"),
            blockHarvestLevel: KD.getDefaultItemStat(rD, "harvestLevel"),
            harvestLevel: cD,
            heldToolType: void 0 === LD ? void 0 : KD.getDefaultItemStat(LD, "harvests"),
            heldToolLevel: void 0 === LD ? void 0 : KD.getDefaultItemStat(LD, "level")
          }) && null !== (sD = FD.o[cD]) && void 0 !== sD ? sD : null
        }(DD, wD)), DD.watchPromptPick(zz);
        const sD = "touch" === zz ? function(DD) {
          var zD;
          const wD = DD.interactLabel;
          return wD === OD.qc.Entity ? wz(DD.promptEntity) : wD === OD.qc.TameWith ? {
            label: (0, cD.y)(DD.tables.nameOfId(DD.interactIcon))
          } : null !== (zD = pz.get(wD)) && void 0 !== zD ? zD : null
        }(DD) : wz(DD.promptEntity);
        return this.target = (0, YD.p)(this.target, {
          interactPrompt: sD,
          blockText: pD,
          neededTool: this.pickaxe.shown
        }), this.target
      }
    }
    let Kz = null;
    const rz = {
      current: () => {
        var DD, zD;
        return null !== (DD = null === (zD = Kz) || void 0 === zD ? void 0 : zD.target) && void 0 !== DD ? DD : Dz
      },
      watch: DD => {
        const zD = new sz;
        Kz = zD;
        const wD = (0, fD.k)((wD => {
          let pD = zD.read(wD);
          DD(pD);
          const sD = (0, KD.v)((() => {
            const sD = zD.read(wD);
            sD !== pD && (pD = sD, DD(sD))
          }));
          return () => {
            sD(), wD.watchPromptPick("off")
          }
        }));
        return () => {
          wD(), Kz === zD && (Kz = null)
        }
      }
    };
    let Lz = 0,
      cz = 0;
    const gz = {
        health: cD.s,
        aura: cD.j,
        hotbar: qD.e.states.hotbar,
        heldItemAim: qD.e.states.heldItemAim,
        crouching: (0, fD.e)((DD => function(DD) {
          const zD = () => 0 !== (OD.v.playerFlags(DD.apiView, 0) & OD.Ad.Crouching);
          return {
            current: zD,
            watch(DD) {
              let wD = zD();
              return (0, KD.t)((() => {
                const pD = zD();
                pD !== wD && (wD = pD, DD(pD))
              }))
            }
          }
        }(DD.api).current), !1, (DD => (0, KD.t)(DD))),
        flight: (0, fD.e)((DD => () => function(DD) {
          const zD = OD.v.playerFlags(DD.apiView, 0);
          return (0, cD.o)(0 !== (zD & OD.Ad.CanFly), 0 !== (zD & OD.Ad.Flying))
        }(DD.api)), (0, cD.o)(!1, !1), (DD => (0, KD.t)(DD))),
        gliderBoostFuel: (0, fD.e)((DD => () => OD.v.gliderBoostFuel(DD.api.apiView, 0)), 0, (DD => (0, KD.t)(DD))),
        crosshairTarget: rz
      },
      Rz = {
        hotbarSlotRequested: qD.e.events.hotbarSlotRequested,
        hotbarScrolled: qD.e.events.hotbarScrolled,
        numberKeyPressed: qD.e.events.numberKeyPressed,
        shotDamageToShow: (0, cD.v)((DD => !0 === (0, HD.d)(DD, "showDamageAmounts")))
      },
      Az = {
        selectHotbarSlot: qD.e.commands.selectHotbarSlot,
        setCrosshairInteractPrompt: DD => {
          zz = DD
        }
      },
      Uz = {
        momentumFrac: function() {
          var DD, zD, wD;
          const pD = (0, rD.i)(),
            sD = performance.now(),
            KD = null === pD || void 0 === pD || null === (DD = pD.items.Qg()) || void 0 === DD || null === (zD = DD.attributes) || void 0 === zD || null === (wD = zD.customAttributes) || void 0 === wD ? void 0 : wD.enchantments;
          return Lz = null !== pD && null !== KD && void 0 !== KD && KD.Momentum ? 0 !== (OD.v.playerFlags(pD.api.apiView, 0) & OD.Ad.Breaking) ? Math.max(0, OD.v.momentumFrac(pD.api.apiView, 0)) : Math.max(0, Lz - (sD - cz) / 1500) : 0, cz = sD, Lz
        }
      };
    var fz = wD(40512);
    const Iz = {
      lobbyManage(DD) {
        var zD;
        null === (zD = (0, rD.i)()) || void 0 === zD || zD.send(jD.d.LobbyManage, DD)
      }
    };
    var Bz = wD(1245),
      Gz = wD(36495),
      hz = wD(8808),
      nz = wD(1648),
      Mz = wD(2382),
      Oz = wD(4823);
    let Jz = !1;

    function Ez(DD) {
      Jz = DD
    }

    function Qz() {
      "inGame" !== ND.e.get("gameState") || (0, nz.r)() || gD.l.KG("ctrlCrouchWithoutFullscreen")
    }
    let Xz = !1;
    const Vz = {
        OpenEmoteWheel: () => {
          Ez(!0), Xz = !0, queueMicrotask((() => {
            Xz && (Xz = !1, gD.l.KG("requestEmoteWheelHoldOpen"))
          }))
        },
        ToggleFullCoordinateOverlay: () => {
          gD.l.KG("toggleFullCoordinateOverlay")
        },
        KeyYPressed: () => {
          (0, Gz.d)() || gD.l.KG("YKeyPressed")
        },
        KeyXPressed: () => {
          (0, Gz.d)() || gD.l.KG("XKeyPressed")
        },
        CtrlCrouch: Qz,
        "primary-fire": () => {
          gD.l.KG("mouseState", {
            IR: Bz.c.DownFirePrimary,
            isDown: !0
          })
        },
        "alt-fire": () => {
          gD.l.KG("mouseState", {
            IR: Bz.c.DownFireSecondary,
            isDown: !0
          })
        },
        TouchHold: () => {
          gD.l.KG("mouseState", {
            IR: Bz.c.TouchDownLong,
            isDown: !0
          })
        }
      },
      Pz = {
        OpenEmoteWheel: () => {
          Ez(!1), Xz ? (Xz = !1, (0, hz.c)() || gD.l.KG("requestEmoteWheelHoldOpen")) : gD.l.KG("requestEmoteWheelHoldRelease")
        },
        CtrlCrouch: Qz,
        "primary-fire": () => {
          gD.l.KG("mouseState", {
            IR: Bz.c.UpFirePrimary,
            isDown: !1
          })
        },
        "alt-fire": () => {
          gD.l.KG("mouseState", {
            IR: Bz.c.UpFireSecondary,
            isDown: !1
          })
        },
        TouchDig: () => {
          gD.l.KG("mouseState", {
            IR: Bz.c.UpFirePrimary,
            isDown: !1
          })
        }
      };
    let Cz = !1;

    function xz() {
      Cz || (Cz = !0, (0, Oz.l)((DD => {
        if ((0, sD.d)()) return;
        const zD = (0, Oz.h)(DD) ? "primary-fire" : DD.action;
        var wD;
        if (DD.down) {
          if (0 === (DD.flags & Mz.c.Synthetic)) {
            var pD;
            null === (pD = Vz[zD]) || void 0 === pD || pD.call(Vz)
          }
        } else null === (wD = Pz[zD]) || void 0 === wD || wD.call(Pz)
      })))
    }
    var Tz = wD(338),
      bz = wD(103),
      jz = wD(35),
      dz = wD(40796),
      Sz = wD(1332),
      iz = wD(38996);
    let lz = !1;
    const Wz = {
      sendCodeCollab(DD) {
        var zD;
        null === (zD = (0, rD.i)()) || void 0 === zD || zD.send(jD.d.CodeCollab, (0, jD.m)(DD), (0, iz.h)(DD))
      }
    };
    var Nz = wD(39079),
      Zz = wD(8732);
    let yz = null,
      kz = !1,
      mz = null;

    function ez() {
      return "inGame" === ND.e.get("gameState") && !(0, Gz.d)()
    }
    const oz = {
        OpenInventory: DD => {
          (0, nz.y)(DD, "inventory", (0, fz.l)())
        },
        OpenShop: DD => {
          yz && ez() && (0, nz.w)(DD, Tz.l.SHOP, !yz.shopIsEmpty(MD.e.get("shopInfo")))
        },
        OpenLobbyLeaderboard: DD => {
          ez() && (0, nz.w)(DD, Tz.l.LOBBY_LEADERBOARD, (0, Nz.b)({
            lobbyLeaderboardInfo: MD.e.get("lobbyLeaderboardInfo"),
            lobbyManage: MD.e.get("lobbyManage")
          }))
        },
        OpenTasksAndLeaderboard: DD => {
          var zD;
          const wD = null === (zD = yz) || void 0 === zD ? void 0 : zD.getClientGameMapKey();
          wD ? (0, nz.A)(DD, !0, wD) : (0, nz.y)(DD, "retentionFeatures", !(!MD.e.get("_tasks") && !MD.e.get("_availableLeaderboards")))
        },
        OpenInviteLink: DD => {
          (0, nz.y)(DD, "inviteLink", bz.featureFlags.canUseInviteLinks)
        },
        OpenCodeEditor: DD => {
          ez() && function(DD) {
            var zD;
            const wD = (0, rD.i)(),
              pD = null !== wD && void 0 !== wD && wD.isSessionLive ? wD.api : null,
              sD = pD ? pD.PJ(pD.localId) : null,
              KD = null !== (zD = null === sD || void 0 === sD ? void 0 : sD.map((DD => Math.floor(DD)))) && void 0 !== zD ? zD : null;
            (0, nz.A)(DD, null !== KD && (0, iz.d)((0, Sz.c)()), (() => {
              gD.l.KG("EditLobbyCode", KD)
            }))
          }(DD)
        },
        HideUi: () => {
          gD.l.KG("showUi", !1)
        }
      },
      az = {
        HideUi: () => {
          gD.l.KG("showUi", !0)
        }
      };

    function uz() {
      kz || (kz = !0, wD.e(157).then((() => wD(60381))).then((DD => {
        yz = DD
      }), (DD => {
        console.error("[bloxd-wasm-client] the menu keys' checks did not load", DD)
      })), (0, dz.t)((DD => {
        DD || !(0, dz.g)() || (0, bz.isMobile)() || !jz.h.getItem("disableFullscreen") || (0, nz.q)() || ND.e.set({
          openEverythingMenuName: Tz.l.SETTINGS
        })
      })), (0, Oz.l)((DD => {
        let {
          action: zD,
          down: wD,
          press: pD
        } = DD;
        var KD, rD;
        (0, sD.d)() || (wD ? null === (KD = oz[zD]) || void 0 === KD || KD.call(oz, function(DD) {
          var zD;
          if (0 === DD || (null === (zD = mz) || void 0 === zD ? void 0 : zD.press) !== DD) {
            const zD = {
              press: DD,
              event: (0, Zz.e)("inputAction")
            };
            mz = zD, queueMicrotask((() => {
              mz === zD && (mz = null)
            }))
          }
          return mz.event
        }(pD)) : null === (rD = az[zD]) || void 0 === rD || rD.call(az))
      })))
    }
    var vz = wD(38989),
      tz = wD(38984),
      Fz = wD(38975);
    const Yz = {
      completeTask(DD) {
        var zD;
        null === (zD = (0, rD.i)()) || void 0 === zD || zD.send(jD.d.CompleteTask, (0, jD.p)(DD))
      },
      setServerCookie(DD) {
        var zD;
        let {
          key: wD,
          value: pD
        } = DD;
        null === (zD = (0, rD.i)()) || void 0 === zD || zD.send(jD.d.GeneralCookieSet, (0, jD.w)({
          kr: wD,
          mr: pD
        }))
      },
      answerUiRequest(DD) {
        var zD;
        let {
          id: wD,
          VR: pD
        } = DD;
        null === (zD = (0, rD.i)()) || void 0 === zD || zD.send(jD.d.UiRequestResp, (0, jD._)({
          ag: wD,
          ug: pD,
          vg: 5
        }))
      },
      chooseRewardedAd(DD) {
        var zD;
        let {
          id: wD,
          VR: pD
        } = DD;
        null === (zD = (0, rD.i)()) || void 0 === zD || zD.send(jD.d.UiRequestResponded, (0, jD.Y)({
          id: wD,
          VR: pD
        }))
      },
      requestLeaderboard(DD) {
        var zD;
        let {
          category: wD,
          timeframe: pD,
          seeTop: sD
        } = DD;
        null === (zD = (0, rD.i)()) || void 0 === zD || zD.send(jD.d.LeaderboardRequest, {
          category: wD,
          timeframe: pD,
          seeTop: sD
        })
      }
    };
    let Hz = !1;
    const qz = nD.f.mG / 2,
      Dw = [qz, -qz, -qz, -qz, qz, qz, -qz, qz],
      zw = [0, 0, 0];

    function ww(DD, zD, wD) {
      for (let pD = 0; pD < DD.length; pD += 2)
        if (DD[pD] === zD && DD[pD + 1] === wD) return !0;
      return !1
    }
    const pw = {
      blocksStandingOn: function() {
        const DD = (0, rD.i)();
        if (null === DD) return [];
        const {
          api: zD,
          chunks: wD,
          tables: pD
        } = DD;
        if (!zD.readPosition(zD.localId, zw)) return [];
        const [sD, KD, LD] = zw, cD = Math.ceil(KD) - 1, gD = [], RD = [];
        for (let rD = 0; rD < Dw.length; rD += 2) {
          const DD = sD + Dw[rD],
            zD = LD + Dw[rD + 1];
          if (Number.isInteger(DD) || Number.isInteger(zD)) continue;
          const KD = Math.floor(DD),
            AD = Math.floor(zD);
          if (ww(RD, KD, AD)) continue;
          const UD = wD.fR(KD, cD, AD);
          pD.isSolidBlockId(UD) && (RD.push(KD, AD), gD.push(pD.nameOfId(UD)))
        }
        return gD
      },
      dropAhead: function() {
        const DD = (0, rD.i)();
        return null !== DD && 0 !== (OD.v.playerFlags(DD.api.apiView, 0) & OD.Ad.DropAhead)
      }
    };
    var sw = wD(36918),
      Kw = wD(39055),
      rw = wD(1355),
      Lw = wD(40578);
    const gw = new Set(["replayLoad", "replaySave", "replaySaveAs", "replayTimelineZoomIn", "replayTimelineZoomOut"]),
      Rw = new Set(["replaySkipBack", "replaySkipForward", "replaySpeedUp", "replaySpeedDown", "replayRecordKeyframe"]);

    function Aw() {
      const DD = new Set;
      return {
        add: zD => (DD.add(zD), () => {
          DD.delete(zD)
        }),
        fire() {
          for (const zD of DD) zD()
        }
      }
    }
    const Uw = Object.freeze([]);

    function fw(DD, zD) {
      let wD, {
        rereads: pD,
        followLocalId: sD
      } = zD;
      const rD = () => (wD = (0, YD.p)(wD, DD()), wD);
      return {
        current: rD,
        watch(DD) {
          const zD = (0, ID.c)((zD => {
            pD(zD) && DD(rD())
          }));
          if (!sD) return zD;
          let wD = (0, fD.h)();
          const LD = (0, KD.v)((() => {
            const zD = (0, fD.h)();
            zD !== wD && (wD = zD, DD(rD()))
          }));
          return () => {
            zD(), LD()
          }
        }
      }
    }
    const Iw = {
        players: fw((function() {
          const DD = ID.e.ids(),
            zD = {};
          for (const KD of DD) {
            var wD, pD, sD;
            zD[KD] = {
              name: null !== (wD = ID.e.getName(KD)) && void 0 !== wD ? wD : null,
              ranks: null !== (pD = ID.e.getSetting(KD, "ranks")) && void 0 !== pD ? pD : Uw,
              cosmetics: null !== (sD = (0, ID.g)(KD)) && void 0 !== sD ? sD : null
            }
          }
          return {
            ids: DD,
            byId: zD,
            localId: (0, fD.h)()
          }
        }), {
          rereads: DD => "roster" !== DD.kind || DD.members || DD.settings.has("ranks"),
          followLocalId: !0
        }),
        lobbyLeaderboardRows: fw((function() {
          const DD = {};
          for (const sD of ID.e.ids()) {
            var zD, wD, pD;
            DD[sD] = {
              colour: null !== (zD = ID.e.getSetting(sD, "colorInLobbyLeaderboard")) && void 0 !== zD ? zD : null,
              values: null !== (wD = ID.e.getSetting(sD, "lobbyLeaderboardValues")) && void 0 !== wD ? wD : null,
              tags: null !== (pD = ID.e.getSetting(sD, "lobbyLeaderboardTags")) && void 0 !== pD ? pD : null
            }
          }
          return DD
        }), {
          rereads: function(DD) {
            if ("roster" !== DD.kind) return "reset" === DD.kind;
            const {
              members: zD,
              settings: wD
            } = DD;
            return zD || wD.has("colorInLobbyLeaderboard") || wD.has("lobbyLeaderboardValues") || wD.has("lobbyLeaderboardTags")
          },
          followLocalId: !1
        })
      },
      Bw = {
        cosmeticsUpdated: {
          watch: DD => (0, ID.c)((zD => {
            if ("cosmetics" !== zD.kind) return;
            const wD = (0, fD.h)();
            DD(zD.updates.map((DD => {
              let {
                Vp: zD,
                Pp: pD,
                Cp: sD
              } = DD;
              return {
                local: zD === wD,
                Pp: pD,
                Cp: sD
              }
            })))
          }))
        }
      };
    var Gw = wD(2901),
      hw = wD(1737),
      nw = wD(655),
      Mw = wD(40843);
    let Ow = !1,
      Jw = null;
    const Ew = {
      setShopOpen(DD) {
        var zD;
        null === (zD = (0, rD.i)()) || void 0 === zD || zD.send(jD.d.ShopMenuChanged, (0, jD.Q)(DD))
      },
      buyShopItem(DD) {
        var zD;
        let {
          categoryKey: wD,
          itemKey: pD,
          userInput: sD
        } = DD;
        null === (zD = (0, rD.i)()) || void 0 === zD || zD.send(jD.d.ItemBought, {
          categoryKey: wD,
          itemKey: pD,
          shopVersion: MD.e.get("_shopVersion"),
          userInput: sD
        })
      }
    };
    let Qw = !1;
    var Xw = wD(4832);
    const Vw = Mz.s.LookFrozen | Mz.s.ClicksSuppressed;

    function Pw(DD, zD) {
      var wD;
      null !== (wD = (0, rD.i)()) && void 0 !== wD && wD.send(DD, zD) || console.warn(`[bloxd-wasm-client] message ${DD} not sent: no live game or the core's command ring is full`)
    }(0, BD.l)(bD.mb, (DD => {
      const zD = (0, dD.e)(bD.mb, DD);
      void 0 !== zD && gD.l.KG("setDiscordReportKey", zD)
    }));
    const Cw = {
      ignorePlayer(DD) {
        Pw(jD.d.IgnoreUser, (0, jD.A)({
          Mr: DD
        }))
      },
      reportPlayer(DD) {
        let {
          playerId: zD,
          chatMsgId: wD,
          Dg: pD,
          details: sD
        } = DD;
        Pw(jD.d.UserReport, (0, jD.fb)({
          DR: zD,
          zR: wD,
          Dg: pD,
          zg: sD
        }))
      },
      reportWorldCodeChat(DD) {
        let {
          chatMsgId: zD,
          Dg: wD,
          details: pD
        } = DD;
        Pw(jD.d.UserReport, (0, jD.fb)({
          DR: "",
          zR: zD,
          Dg: wD,
          zg: pD
        }))
      },
      requestDiscordReportKey(DD) {
        Pw(jD.d.ReqDiscordReportKey, (0, jD.J)(DD))
      },
      reportLobbyOrGame(DD) {
        let {
          target: zD,
          Dg: wD,
          details: pD
        } = DD;
        "customGame" === zD ? Pw(jD.d.CustomGameReport, (0, jD.s)({
          Dg: wD,
          zg: pD
        })) : Pw(jD.d.LobbyReport, (0, jD.B)({
          Dg: wD,
          zg: pD
        }))
      },
      updateMyCosmetic(DD) {
        Pw(jD.d.UpdateMyCosmetic, (0, jD.eb)(DD))
      },
      holdEmoteWheel(DD) {
        !DD || Jz ? (0, Xw.j)(Vw, DD ? Vw : 0) : gD.l.KG("requestEmoteWheelHoldRelease")
      }
    };
    var xw = wD(40931),
      Tw = wD(9198),
      bw = wD(39574);
    const jw = [0, 0, 0],
      dw = [0, 0, 0],
      Sw = [0, 0, 0],
      iw = {
        blockAtViewPoint(DD) {
          let {
            x: zD,
            y: wD
          } = DD;
          const pD = (0, rD.i)();
          if (null === pD || void 0 === pD || !pD.renderFrame.hasView) return null;
          const {
            renderFrame: sD,
            clientApi: KD,
            api: LD
          } = pD;
          let cD = 0;
          return (0, bw.g)(((DD, zD, wD) => (cD = KD.getBlockId(DD, zD, wD), 0 !== cD)), sD.cameraPosition, (0, bw.h)((DD => OD.v.viewProj(LD.apiView, 0, DD)), zD, wD, jw), bw.e, dw, Sw) ? {
            pos: [dw[0], dw[1], dw[2]],
            normal: [Sw[0], Sw[1], Sw[2]],
            name: (0, Tw.h)(cD)
          } : null
        }
      },
      lw = {
        setBlockHighlight(DD) {
          var zD;
          null === (zD = (0, rD.i)()) || void 0 === zD || zD.setBlockHighlight(DD)
        }
      };
    var Ww = wD(1941),
      Nw = wD(40833),
      Zw = wD(40940),
      yw = wD(4515),
      kw = wD(4492),
      mw = wD(40942),
      ew = wD(3288),
      ow = wD(3292);
    let aw = null,
      uw = null;

    function vw(DD) {
      const zD = DD.startsWith(ow.o),
        [wD, pD = wD, sD = wD] = (zD ? DD.slice(ow.o.length) : DD).split(ow.k);
      return {
        top: wD,
        left: pD,
        right: sD,
        half: zD
      }
    }

    function tw(DD) {
      const zD = null === aw ? void 0 : (0, ew.e)(DD),
        wD = void 0 === zD ? 0 : aw.codes[zD];
      return 0 === wD ? void 0 : aw.pool[wD - 1]
    }
    var Fw = wD(3282),
      Yw = wD(4482),
      Hw = wD(4512),
      qw = wD(40866),
      Dp = wD(40951);
    const zp = "item:";
    let wp = null,
      pp = null,
      sp = null,
      Kp = null,
      rp = !1,
      Lp = !1;

    function cp() {
      return Lp || (Lp = !0, (0, Hw.h)().then((DD => {
        DD && (0, Ww.b)()
      }))), sp ??= Promise.all([(0, Fw.g)(), (uw ??= wD.e(1).then((() => wD(60397))).then((DD => {
        let {
          BLOCK_FACE_RUNS: zD,
          BLOCK_FACES: wD,
          MAX_FACE_ITEM_ID: pD
        } = DD;
        aw = {
          codes: (0, ow.y)(zD, pD + 1),
          pool: wD.split(ow.t).map(vw)
        }
      }), (DD => {
        throw uw = null, DD
      })), uw), (0, Dp.g)(), wD.e(198).then((() => wD(34218)))]).then((DD => {
        let [, , zD, wD] = DD;
        zD.followBundledTextures(), wp = zD, pp = wD, (0, Ww.b)()
      }), (DD => {
        sp = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", DD)
      })), sp
    }

    function gp(DD) {
      var zD, wD;
      return null !== (zD = null === (wD = (0, qw.e)()) || void 0 === wD ? void 0 : wD.textureUrl(DD)) && void 0 !== zD ? zD : wp.itemSpriteUrl(DD)
    }

    function Rp(DD) {
      var zD, wD;
      return null !== (zD = null === (wD = (0, qw.e)()) || void 0 === wD ? void 0 : wD.textureUrl(DD)) && void 0 !== zD ? zD : wp.blockTextureUrl(DD)
    }

    function Ap(DD) {
      var zD;
      return null !== (zD = (0, Fw.d)(DD)) && void 0 !== zD ? zD : DD
    }

    function Up(DD, zD) {
      var wD, pD, sD;
      return null !== (wD = null !== (pD = null !== (sD = Rp(DD)) && void 0 !== sD ? sD : null === zD || void 0 === zD ? void 0 : zD.rotated[DD]) && void 0 !== pD ? pD : null === zD || void 0 === zD ? void 0 : zD.animated[DD]) && void 0 !== wD ? wD : wp.notFoundUrl()
    }

    function fp(DD) {
      return void 0 !== (0, ew.e)(DD) ? DD : /^[1-9][0-9]*$/.test(DD) ? (0, ew.g)(Number(DD)) : void 0
    }

    function Ip(DD) {
      var zD;
      if (DD.startsWith(zp)) {
        var wD;
        const zD = (0, Fw.d)(DD.slice(5));
        return null !== (wD = void 0 === zD ? null : gp(zD)) && void 0 !== wD ? wD : wp.notFoundUrl()
      }
      return null !== (zD = wp.particleUrl(DD)) && void 0 !== zD ? zD : wp.notFoundUrl()
    }

    function Bp(DD, zD) {
      return "StairsBlock" === DD ? DD : zD ? "SlabBlock" : "CubeBlock"
    }
    const Gp = {
        async blockIcon(DD) {
          var zD;
          let {
            name: pD,
            size: sD,
            lineWidth: KD
          } = DD;
          await cp();
          const rD = null !== (zD = fp(pD)) && void 0 !== zD ? zD : pD,
            LD = (0, Hw.d)(rD, sD, KD);
          if (null !== LD) return LD;
          const cD = tw(rD),
            gD = (0, ew.e)(rD),
            RD = void 0 === gD || null === pp ? void 0 : pp.itemTypeNameOf(gD);
          if (null === wp || void 0 === cD) return "";
          const AD = [cD.top, cD.left, cD.right].some((DD => null === Rp(DD))),
            UD = AD ? await (Kp ??= wD.e(204).then((() => wD(34299))).then((DD => (rp && (rp = !1, (0, Ww.b)()), {
              rotated: DD.rotatedBlockTextures,
              animated: DD.animatedBlockTextures
            })), (DD => (Kp = null, rp = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", DD), null))), Kp) : null;
          if (AD && null === UD) return "";
          const fD = {
              top: Up(cD.top, UD),
              left: Up(cD.left, UD),
              right: Up(cD.right, UD),
              itemType: Bp(RD, cD.half)
            },
            ID = (0, qw.d)(),
            BD = 0 === ID ? rD : `${rD}#${ID}`;
          return (await (0, Yw.e)()).drawBlockIconUrl(BD, sD, KD, (() => fD))
        }
      },
      hp = {
        itemIcon: function(DD) {
          var zD, wD, sD, KD;
          if (null === wp) return cp(), pD.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(DD);
          if ((0, kw.m)(DD)) return {
            kind: "icon",
            url: null !== (wD = null !== (sD = null === (KD = (0, qw.e)()) || void 0 === KD ? void 0 : KD.textureUrl(DD)) && void 0 !== sD ? sD : wp.ingameIconUrl(DD)) && void 0 !== wD ? wD : wp.notFoundUrl()
          };
          if (DD.startsWith(kw.e)) return {
            kind: "icon",
            url: Ip(DD.slice(kw.e.length))
          };
          if (0 === (0, ew.k)()) return (0, mw.c)(), pD.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(DD);
          const rD = null !== (zD = fp(DD)) && void 0 !== zD ? zD : DD,
            LD = (0, ew.e)(rD),
            cD = void 0 === LD ? void 0 : pp.itemTypeNameOf(LD);
          if (void 0 !== tw(rD)) return {
            kind: "drawnBlock"
          };
          const gD = function(DD) {
            var zD;
            return null !== (zD = gp(Ap(DD))) && void 0 !== zD ? zD : wp.notFoundUrl()
          }(rD);
          if ((0, Hw.f)(rD) && ! function(DD) {
              const zD = (0, qw.e)();
              return null !== zD && (null !== zD.textureUrl(Ap(DD)) || null !== zD.modelUrl(DD))
            }(rD)) return {
            kind: "model",
            url: gD
          };
          if ("Gun" === cD) return {
            kind: "gun",
            url: gD
          };
          if (void 0 !== LD && "GrayscaleArmour" === pp.itemTypeOf(LD) || Object.hasOwn(yw.c, rD)) {
            var RD;
            const zD = null !== (RD = (0, yw.g)(DD)) && void 0 !== RD ? RD : (0, yw.g)(rD);
            if (zD) return {
              kind: "item",
              url: gD,
              tint: zD
            }
          }
          return {
            kind: "item",
            url: gD
          }
        },
        hasIcon: function(DD) {
          return void 0 !== fp(DD) || (0, kw.m)(DD) || DD.startsWith(kw.e)
        },
        isItemName: function(DD) {
          return void 0 !== fp(DD)
        }
      };
    var np = wD(608),
      Mp = wD(39582);

    function Op(DD) {
      if (null === DD || void 0 === DD || !DD.isCoreRunning) return null;
      const {
        api: zD,
        chunks: wD,
        items: pD,
        tables: sD
      } = DD;
      return {
        playerFeet() {
          const DD = zD.PJ(zD.localId);
          return null !== DD && void 0 !== DD && DD.every(Number.isFinite) ? DD : null
        },
        chunkBlocks: DD => wD.isLoaded(DD[0], DD[1], DD[2]) ? (DD, zD, pD) => wD.fR(DD, zD, pD) : null,
        blockName: DD => sD.nameOfId(DD),
        inventory: () => ({
          slots: pD.playerItems().map((DD => DD ? {
            name: DD.name,
            amount: DD.amount
          } : null)),
          heldSlot: pD.selectedSlot
        }),
        nearby() {
          const wD = [];
          for (let sD = 0; sD < zD.idStr.length; sD++) {
            var pD;
            const KD = zD.idStr[sD],
              rD = zD.serverIds[sD],
              LD = zD.kinds[sD];
            if (null === KD || zD.isLocal(rD) || LD >>> OD.d !== OD.s.Lifeform) continue;
            const cD = zD.PJ(rD),
              gD = np.k[LD & OD.g];
            cD && void 0 !== gD && wD.push({
              kind: "Player" === gD ? "player" : gD,
              name: null !== (pD = DD.clientApi.getEntityName(KD)) && void 0 !== pD ? pD : null,
              position: cD
            })
          }
          return wD
        },
        droppedItems() {
          let DD = 0;
          for (let wD = 0; wD < zD.idStr.length; wD++) null !== zD.idStr[wD] && zD.kinds[wD] >>> OD.d === OD.s.Item && DD++;
          return DD
        }
      }
    }
    const Jp = {
        worldCodeAiChunk: DD => Promise.resolve((0, Mp.b)(Op((0, rD.i)()), DD)),
        worldCodeAiGameState: () => Promise.resolve((0, Mp.e)(Op((0, rD.i)())))
      },
      Ep = function(DD) {
        const zD = Aw(),
          pD = Aw(),
          sD = new Set,
          KD = new Set,
          rD = () => {
            var zD, wD;
            return null !== (zD = null === (wD = DD.runtime()) || void 0 === wD ? void 0 : wD.currentViewer) && void 0 !== zD ? zD : null
          };
        let LD = null,
          cD = null;
        const RD = (DD, zD) => ({
            current: DD,
            watch(wD) {
              let pD = DD();
              return zD.add((() => {
                const zD = DD();
                zD !== pD && (pD = zD, wD(zD))
              }))
            }
          }),
          UD = DD => ({
            watch: zD => (DD.add(zD), () => {
              DD.delete(zD)
            })
          }),
          fD = DD => {
            const zD = rD(),
              wD = null === zD || void 0 === zD ? void 0 : zD.view;
            zD && wD && zD.seek(Math.max(0, Math.min(wD.totalTicks - 1, wD.DU + DD * AD.Ed)))
          },
          ID = {
            replay: RD((() => {
              var DD;
              const zD = rD(),
                wD = null !== (DD = null === zD || void 0 === zD ? void 0 : zD.view) && void 0 !== DD ? DD : null;
              return null === zD || null === wD || wD.state === AD.nd.None ? (LD = null, null) : (LD = (0, YD.p)(LD, {
                id: zD.id,
                DU: wD.DU,
                totalTicks: wD.totalTicks,
                Rl: AD.Ed,
                playing: wD.state === AD.nd.Playing,
                speed: wD.speed,
                cameraMode: wD.cameraMode,
                freecam: "freecam" === wD.cameraMode
              }), LD)
            }), zD),
            replayEdits: RD((() => {
              var DD;
              const zD = rD(),
                wD = null !== (DD = null === zD || void 0 === zD ? void 0 : zD.view) && void 0 !== DD ? DD : null;
              return null === zD || null === wD || wD.state === AD.nd.None ? (cD = null, null) : (cD = (0, YD.p)(cD, {
                cameraKeyframes: [...zD.keyframes],
                playbackMark: wD.mark,
                fileName: zD.fileName,
                unsavedChanges: zD.unsavedChanges,
                suggestSaveAs: zD.suggestSaveAs
              }), cD)
            }), zD),
            replayRecorder: RD((() => {
              var zD, wD;
              return null !== (zD = null === (wD = DD.runtime()) || void 0 === wD ? void 0 : wD.recorder.current) && void 0 !== zD ? zD : Lw.b.states.replayRecorder.current()
            }), pD),
            replayVideoExporting: {
              current: Kw.e,
              watch: DD => (0, gD.o)("replayViewer|videoExportChanged", (() => {
                DD((0, Kw.e)())
              }))
            }
          },
          BD = {
            replayUiActionRequested: UD(KD),
            replayViewerRequested: UD(sD)
          },
          GD = DD => {
            for (const zD of sD) zD(DD)
          },
          hD = () => {
            var pD;
            !0 === (null === (pD = rD()) || void 0 === pD ? void 0 : pD.isOpen) && Promise.all([wD.e(96), wD.e(66)]).then((() => wD(60386))).then((wD => {
              let {
                startWasmReplayVideoExport: pD
              } = wD;
              return pD({
                viewer: rD,
                canvas: () => {
                  var zD, wD;
                  return null !== (zD = null === (wD = DD.canvas) || void 0 === wD ? void 0 : wD.call(DD)) && void 0 !== zD ? zD : null
                },
                watchViewer: zD.add,
                requestViewer: GD
              })
            }), (DD => {
              console.error("Couldn't load the video export", DD), rw.NotificationProvider.showAlertPopup({
                title: "Video export failed",
                subtitle: "Check your connection, then try again."
              })
            })).catch((DD => {
              console.error("The video export failed", DD)
            }))
          },
          nD = {
            replayAction(DD) {
              if ((0, Kw.e)()) return;
              const zD = rD();
              switch (DD) {
                case "replaySkipBack":
                  fD(-1);
                  break;
                case "replaySkipForward":
                  fD(1);
                  break;
                case "replaySpeedUp":
                case "replaySpeedDown":
                  null !== zD && void 0 !== zD && zD.view && zD.setSpeed((0, sw.i)(zD.view.speed, "replaySpeedUp" === DD ? "up" : "down"));
                  break;
                case "replayRecordKeyframe":
                  null === zD || void 0 === zD || zD.addKeyframe()
              }
            },
            setReplayPlaying(DD) {
              var zD, wD;
              (0, Kw.e)() || (DD ? null === (zD = rD()) || void 0 === zD || zD.play() : null === (wD = rD()) || void 0 === wD || wD.pause())
            },
            seekReplay(DD) {
              var zD;
              let {
                DU: wD,
                ignorePlaybackMark: pD
              } = DD;
              null === (zD = rD()) || void 0 === zD || zD.seek(wD, null !== pD && void 0 !== pD && pD)
            },
            setReplayCameraMode(DD) {
              var zD;
              null === (zD = rD()) || void 0 === zD || zD.setCameraMode(DD)
            },
            syncReplayCameraMode() {},
            setReplayCameraKeyframe(DD) {
              var zD;
              null === (zD = rD()) || void 0 === zD || zD.setKeyframe(DD)
            },
            moveReplayCameraKeyframe(DD) {
              var zD;
              let {
                from: wD,
                to: pD
              } = DD;
              null === (zD = rD()) || void 0 === zD || zD.moveKeyframe(wD, pD)
            },
            deleteReplayCameraKeyframes(DD) {
              var zD;
              let {
                start: wD,
                end: pD
              } = DD;
              null === (zD = rD()) || void 0 === zD || zD.deleteKeyframes(wD, pD)
            },
            setReplayPlaybackMark(DD) {
              var zD;
              null === (zD = rD()) || void 0 === zD || zD.setMark(DD)
            },
            cropReplay(DD) {
              var zD, wD;
              let {
                start: pD,
                end: sD
              } = DD;
              return !(0, Kw.e)() && (null !== (zD = null === (wD = rD()) || void 0 === wD ? void 0 : wD.crop(pD, sD)) && void 0 !== zD && zD)
            },
            holdReplayForShaderPackFailure(DD) {
              const zD = rD();
              zD && (zD.holdForShaderPackFailure(), function(DD) {
                wD.e(115).then((() => wD(39186))).then((zD => {
                  let {
                    shaderPackPage: wD
                  } = zD;
                  wD.block(DD)
                })).catch((DD => {
                  console.warn("[bloxd-wasm-client] the shader pack could not be blocked", DD)
                }))
              }(DD))
            },
            exportReplayVideo() {
              hD()
            },
            toggleRecording() {
              var zD;
              null === (zD = DD.runtime()) || void 0 === zD || zD.recorder.toggleRecording()
            },
            saveClip() {
              var zD;
              null === (zD = DD.runtime()) || void 0 === zD || zD.recorder.saveClip()
            },
            setRecorderPrefs(zD) {
              var wD;
              let {
                clipping: pD,
                clipSeconds: sD
              } = zD;
              null === (wD = DD.runtime()) || void 0 === wD || wD.recorder.setPrefs(pD, sD)
            },
            setReplayViewerOpen(zD) {
              var wD;
              (0, Gz.e)(zD) && (null === (wD = DD.runtime()) || void 0 === wD || wD.recorder.viewerShown(zD))
            },
            recordFlyingMiddleText(zD) {
              var wD;
              let {
                content: pD,
                kK: sD,
                angle: KD,
                mK: rD
              } = zD;
              null === (wD = DD.runtime()) || void 0 === wD || wD.recorder.recordFlyingText(JSON.stringify(pD), sD, KD, rD)
            },
            dragReplayCamera(zD) {
              var wD;
              let {
                dx: pD,
                dy: sD
              } = zD;
              null === (wD = DD.freecam()) || void 0 === wD || wD.drag(pD, sD)
            },
            moveReplayFreecam(zD) {
              var wD;
              null === (wD = DD.freecam()) || void 0 === wD || wD.move(zD)
            },
            holdReplayFreecamVertical(zD) {
              var wD;
              let {
                action: pD,
                Qg: sD
              } = zD;
              null === (wD = DD.freecam()) || void 0 === wD || wD.holdVertical(pD, sD)
            }
          },
          MD = DD => {
            var zD;
            const wD = rD(),
              pD = null !== (zD = null === wD || void 0 === wD ? void 0 : wD.view) && void 0 !== zD ? zD : null;
            gw.has(DD) ? (DD => {
              for (const zD of KD) zD(DD)
            })(DD) : Rw.has(DD) ? nD.replayAction(DD) : "replayPlayPause" === DD ? wD && pD && pD.state !== AD.nd.None && nD.setReplayPlaying(pD.state !== AD.nd.Playing) : "replayChangeCameraMode" === DD ? null === wD || void 0 === wD || wD.cycleCameraMode() : "replayExit" === DD ? !0 === (null === wD || void 0 === wD ? void 0 : wD.inPlayback) && (0, Sz.l)("/") : "replayExportVideo" === DD && hD()
          };
        let OD = !1;
        return {
          states: ID,
          events: BD,
          commands: nD,
          lookups: {
            replayCamera() {
              var zD, wD, pD;
              return !0 !== (null === (zD = rD()) || void 0 === zD ? void 0 : zD.isOpen) ? null : null !== (wD = null === (pD = DD.cameraView) || void 0 === pD ? void 0 : pD.call(DD)) && void 0 !== wD ? wD : null
            },
            leaveGameReloadsPage() {
              var DD;
              return !0 === (null === (DD = rD()) || void 0 === DD ? void 0 : DD.inPlayback)
            }
          },
          feed: {
            viewerChanged: () => {
              var DD;
              const wD = !0 === (null === (DD = rD()) || void 0 === DD ? void 0 : DD.inPlayback);
              wD !== OD && (OD = wD, gD.l.KG("connectedGameChanged")), zD.fire()
            },
            recorderChanged: pD.fire,
            keyDown: DD => {
              var zD;
              switch (DD) {
                case "recordGame":
                  return void nD.toggleRecording();
                case "recordClip":
                  return void((0, Gz.d)() || nD.saveClip())
              }(0, Kw.e)() || ("replayViewerOpen" !== DD ? DD.startsWith("replay") && ((0, Gz.d)() || !0 === (null === (zD = rD()) || void 0 === zD ? void 0 : zD.inPlayback)) && MD(DD) : GD("toggle"))
            }
          }
        }
      }({
        runtime: sD.m,
        cameraView: () => {
          var DD;
          const zD = null === (DD = (0, rD.i)()) || void 0 === DD ? void 0 : DD.renderFrame;
          if (!zD) return null;
          const [wD, pD, sD] = zD.cameraPosition, [KD, LD, cD] = zD.cameraDirection;
          return {
            position: [wD, pD, sD],
            direction: [KD, LD, cD]
          }
        },
        canvas: () => {
          var DD, zD, wD;
          return null !== (DD = null === (zD = (wD = (0, KD.G)()).canvas) || void 0 === zD ? void 0 : zD.call(wD)) && void 0 !== DD ? DD : null
        },
        freecam: sD.k
      }),
      Qp = {
        states: {
          ...gz,
          ...fz.k,
          ...Ep.states,
          ...Iw,
          ...kD
        },
        events: {
          ...Rz,
          ...GD,
          ...fz.f,
          ...PD.e,
          ...xw.g,
          ...Ep.events,
          ...Bw,
          ...VD.h
        },
        commands: {
          ...XD,
          ...Az,
          ...hD,
          ...fz.b,
          ...Yz,
          ...Cw,
          ...VD.e,
          ...Wz,
          ...Ep.commands,
          ...Ew,
          ...mD,
          ...lw,
          ...Iz
        },
        queries: {
          ...fz.i,
          ...Jp
        },
        lookups: {
          ...Uz,
          ...iD,
          ...xw.h,
          ...Ep.lookups,
          ...QD,
          ...pw,
          ...iw,
          ...eD
        }
      };

    function Xp() {
      (0, LD.i)(BD.n), (0, sD.n)(Ep.feed), (0, PD.f)(), Hz || (Hz = !0, (0, BD.l)(bD.i, (DD => {
        const zD = (0, dD.e)(bD.i, DD);
        "string" === typeof zD && Promise.resolve().then((() => wD(3661))).then((DD => {
          let {
            onCosmeticPackGranted: wD
          } = DD;
          wD(zD)
        }))
      })), (0, BD.l)(bD.hb, (DD => {
        const zD = (0, dD.e)(bD.hb, DD);
        "number" === typeof zD && gD.l.KG("serverUpdating", Date.now() + zD, !0)
      })), (0, BD.l)(bD.F, (DD => {
        const zD = (0, dD.e)(bD.F, DD);
        if ((0, dD.b)(zD)) {
          const {
            os: DD,
            Fs: wD
          } = zD;
          (0, tz.e)({
            os: "string" === typeof DD ? DD : null,
            Fs: "string" === typeof wD ? wD : null
          })
        }
      })), (0, BD.l)(RD.ec.NewUiRequest, (DD => {
        const zD = (0, dD.i)(DD);
        (0, dD.b)(zD) && "number" === typeof zD.id && (0, dD.b)(zD.clientParameters) && (0, Fz.f)(zD.id, zD.clientParameters)
      })), (0, BD.l)(bD.ab, (DD => {
        const zD = (0, dD.e)(bD.ab, DD);
        "number" === typeof zD && (0, Fz.h)(zD)
      })), (0, BD.h)(Fz.e), (0, BD.l)(RD.ec.UiRequestPopup, (DD => {
        const zD = (0, dD.i)(DD);
        if ((0, dD.b)(zD) && "number" === typeof zD.id && "string" === typeof zD.text) {
          const DD = zD.id;
          (0, Fz.l)(DD, zD.text, !0 === zD.destructive, (zD => {
            Yz.answerUiRequest({
              id: DD,
              VR: zD
            })
          }))
        }
      })), (0, BD.l)(RD.ec.TopRightHelper, (DD => {
        const zD = (0, dD.i)(DD);
        void 0 !== zD && gD.l.KG("TopRightHelper", zD, !0)
      })), (0, BD.l)(RD.ec.TaskProgress, (DD => {
        const zD = (0, dD.i)(DD);
        (0, dD.b)(zD) && "string" === typeof zD.taskId && "number" === typeof zD.progress && (0, vz.d)({
          taskId: zD.taskId,
          progress: zD.progress
        })
      }))), Qw || (Qw = !0, (0, BD.l)(bD.o, (DD => {
        const zD = (0, dD.e)(bD.o, DD);
        (0, dD.b)(zD) && gD.l.KG("showShopFromServer", {
          toggle: zD.ys,
          es: zD.es
        }, !0)
      })), (0, BD.l)(RD.ec.OverShopInfo, (DD => {
        const zD = (0, dD.i)(DD);
        (0, dD.b)(zD) && gD.l.KG("overShopInfo", zD.info, !0)
      })), (0, BD.l)(RD.ec.ShowShopTutorial, (() => {
        gD.l.KG("showShopTutorial", null, !0)
      }))), Ow || (Ow = !0, (0, BD.f)((() => {
        var DD;
        (0, Gw.D)(), null === (DD = Jw) || void 0 === DD || DD(), Jw = (0, BD.e)() ? (0, nw.e)(BD.e) : null, (0, BD.e)() || gD.l.bM()
      })), (0, BD.l)(RD.ec.SetCookie, (DD => {
        const zD = (0, dD.i)(DD),
          wD = (0, Sz.c)().gameNameWithVariation;
        (0, dD.b)(zD) && "string" === typeof zD.key && null !== wD && (0, hw.setCookie)(wD, zD.key, zD.value)
      })), (0, BD.l)(RD.ec.LeaveValues, (DD => {
        const zD = (0, dD.i)(DD);
        if ((0, dD.b)(zD) && "string" === typeof zD.leaveEventType) {
          const {
            leaveEventType: DD,
            category: wD,
            subCategory: pD,
            value: sD
          } = zD;
          (0, Gw.J)({
            leaveEventType: DD,
            category: wD,
            subCategory: pD,
            value: sD
          })
        }
      })), (0, BD.l)(RD.ec.CustomAnalyticsEvent, (DD => {
        const zD = (0, dD.i)(DD);
        if ((0, dD.b)(zD) && "string" === typeof zD.cat1) {
          const {
            cat1: DD,
            cat2: wD,
            cat3: pD,
            value: sD
          } = zD;
          (0, Gw.o)({
            cat1: DD,
            cat2: wD,
            cat3: pD,
            value: sD
          })
        }
      })), (0, BD.l)(RD.ec.ProgressionEvent, (DD => {
        const zD = (0, dD.i)(DD);
        if ((0, dD.b)(zD)) {
          const {
            type: DD,
            location1: wD,
            location2: pD,
            location3: sD,
            score: KD
          } = zD;
          (0, Gw.t)({
            type: DD,
            location1: wD,
            location2: pD,
            location3: sD,
            score: KD
          })
        }
      })), (0, BD.l)(RD.ec.ResourceEvent, (DD => {
        const zD = (0, dD.i)(DD);
        if ((0, dD.b)(zD)) {
          const {
            type: DD,
            resourceType: wD,
            amount: pD,
            category: sD,
            itemName: KD
          } = zD;
          (0, Gw.v)({
            type: DD,
            resourceType: wD,
            amount: pD,
            category: sD,
            itemName: KD
          })
        }
      })), (0, BD.l)(RD.ec.LeaderboardResponse, (DD => {
        const zD = (0, dD.i)(DD);
        if ((0, dD.b)(zD)) {
          const {
            category: DD,
            timeframe: wD,
            data: pD
          } = zD;
          gD.l.KG("leaderboardResponse", {
            category: DD,
            timeframe: wD,
            data: pD
          })
        }
      })), (0, BD.l)(bD.x, (DD => {
        const zD = (0, dD.e)(bD.x, DD);
        "string" === typeof zD && (0, Mw.d)(DD.conn, zD)
      })), (0, BD.l)(bD.y, (DD => {
        const zD = (0, dD.e)(bD.y, DD);
        "string" === typeof zD && console.error(`[logErrorToConsole]: ${zD}`)
      }))), WD(), (0, xw.c)(), lz || (lz = !0, (0, BD.l)(bD.g, (DD => {
        const zD = (0, dD.e)(bD.g, DD);
        void 0 !== zD && (0, iz.i)(zD)
      }))), uz(), xz(), uD || (uD = !0, (0, KD.t)(vD)), pD.gameBridge.attach(Qp), (0, pD.installPageSources)({
        commands: {
          ...pD.DEFAULT_CLIENT_PAGE_SOURCES.commands,
          setChunkAddDistance: Nw.j
        },
        queries: Gp,
        lookups: {
          ...pD.DEFAULT_CLIENT_PAGE_SOURCES.lookups,
          ...hp,
          iJ: Nw.c,
          drawCallStats: Zw.j
        }
      }), (0, Ww.b)(), cp()
    }
  },
  40866: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => RD,
      d: () => cD,
      e: () => LD,
      f: () => gD
    });
    var pD = wD(1941);
    let sD = null,
      KD = 0;
    const rD = new Set;

    function LD() {
      return sD
    }

    function cD() {
      return KD
    }

    function gD(DD) {
      sD = DD, KD++, (0, pD.b)();
      for (const zD of rD) zD()
    }

    function RD(DD) {
      rD.add(DD)
    }
  },
  40951: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => rD,
      g: () => LD
    });
    var pD = wD(40958);
    let sD = null,
      KD = null;

    function rD() {
      return sD ??= wD.e(61).then((() => wD(60401))).catch((DD => {
        throw sD = null, DD
      })), sD
    }

    function LD() {
      return KD ??= Promise.all([rD(), (0, pD.f)()]).then((DD => {
        let [zD] = DD;
        return zD
      }), (DD => {
        throw KD = null, DD
      })), KD
    }
  },
  37045: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => pD
    });
    const pD = {
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
  36821: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => sD,
      f: () => KD,
      g: () => UD,
      h: () => LD,
      i: () => cD,
      l: () => gD,
      m: () => AD,
      n: () => RD,
      p: () => rD
    });
    var pD = wD(1245);
    let sD = function(DD) {
        return DD[DD.Join = 0] = "Join", DD[DD.Leave = 1] = "Leave", DD[DD.Push = 2] = "Push", DD[DD.Cursor = 3] = "Cursor", DD[DD.Submit = 4] = "Submit", DD[DD.ReloadAsVariation = 5] = "ReloadAsVariation", DD[DD.CreateFile = 6] = "CreateFile", DD[DD.RenameFile = 7] = "RenameFile", DD[DD.DeleteFile = 8] = "DeleteFile", DD[DD.SetEngine = 9] = "SetEngine", DD[DD.RenameFolder = 10] = "RenameFolder", DD
      }({}),
      KD = function(DD) {
        return DD[DD.Joined = 0] = "Joined", DD[DD.Updates = 1] = "Updates", DD[DD.Presence = 2] = "Presence", DD[DD.RemoteCursor = 3] = "RemoteCursor", DD[DD.ForceClose = 4] = "ForceClose", DD[DD.LobbyFilesChanged = 5] = "LobbyFilesChanged", DD[DD.EngineSettings = 6] = "EngineSettings", DD
      }({});

    function rD(DD) {
      return "lobby" === DD.kind ? `lobby:${DD.path}` : `codeBlock:${DD.pos[0]},${DD.pos[1]},${DD.pos[2]}`
    }

    function LD(DD) {
      if ("lobby" === DD) return {
        kind: "lobby",
        path: pD.f
      };
      if (DD.startsWith("lobby:")) {
        const zD = DD.slice(6);
        return AD(zD) ? {
          kind: "lobby",
          path: zD
        } : null
      }
      const zD = DD.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return zD ? {
        kind: "codeBlock",
        pos: [parseInt(zD[1]), parseInt(zD[2]), parseInt(zD[3])]
      } : null
    }

    function cD(DD) {
      return DD.endsWith(".d.ts")
    }

    function gD(DD) {
      return DD.endsWith(".ts") && !cD(DD)
    }
    const RD = 64;

    function AD(DD) {
      if (!DD || DD !== DD.trim()) return !1;
      if (DD.length > RD) return !1;
      if (DD.startsWith("/") || DD.includes("\\") || DD.includes("\0")) return !1;
      if (!cD(DD) && !gD(DD) && ! function(DD) {
          return DD.endsWith(".js") && !DD.endsWith(".min.js") && !DD.endsWith(".bundle.js")
        }(DD)) return !1;
      const zD = DD.split("/");
      for (const wD of zD)
        if ("" === wD || "." === wD || ".." === wD) return !1;
      return !0
    }
    const UD = 14e3
  },
  39005: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => pD,
      h: () => sD
    });
    const pD = ["description", "label"];

    function sD(DD) {
      const zD = DD.type;
      return {
        type: zD,
        params: DD[zD]
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);