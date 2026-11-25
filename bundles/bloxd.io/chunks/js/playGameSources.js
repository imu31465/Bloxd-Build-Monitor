export const id = 47;
export const ids = [47];
export const modules = {
  40012: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => UG,
      g: () => LG,
      i: () => SG
    });
    const wG = 6e3;

    function SG(GG, bG) {
      return [Math.floor(GG[0] / bG) * bG, Math.floor(GG[1] / bG) * bG, Math.floor(GG[2] / bG) * bG]
    }

    function LG(GG) {
      const bG = (null !== GG && void 0 !== GG ? GG : "").match(/-?\d+(?:\.\d+)?/g);
      return bG && bG.length >= 3 ? [Number(bG[0]), Number(bG[1]), Number(bG[2])] : null
    }

    function yG(GG, bG) {
      return GG === bG ? String(GG) : `${GG}-${bG}`
    }

    function kG(GG, bG, ZG, wG) {
      const SG = [];
      let LG = new Map;
      for (let yG = GG[2]; yG < GG[2] + bG; yG++) {
        const kG = new Map;
        let UG = GG[0];
        for (; UG < GG[0] + bG;) {
          const SG = wG(UG, ZG, yG);
          let YG = UG;
          for (; YG + 1 < GG[0] + bG && wG(YG + 1, ZG, yG) === SG;) YG++;
          if (null !== SG) {
            const GG = `${UG} ${YG} ${SG}`,
              bG = LG.get(GG);
            bG ? (bG.z1 = yG, LG.delete(GG), kG.set(GG, bG)) : kG.set(GG, {
              x0: UG,
              x1: YG,
              z0: yG,
              z1: yG,
              name: SG
            })
          }
          UG = YG + 1
        }
        SG.push(...LG.values()), LG = kG
      }
      return SG.push(...LG.values()), SG.sort(((GG, bG) => GG.z0 - bG.z0 || GG.x0 - bG.x0)).map((GG => `x${yG(GG.x0,GG.x1)} z${yG(GG.z0,GG.z1)} ${GG.name}`))
    }

    function UG(GG, bG, ZG, SG) {
      let LG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : wG;
      const UG = [GG[0] + bG - 1, GG[1] + bG - 1, GG[2] + bG - 1],
        YG = null !== SG && SG.every(((bG, ZG) => Math.floor(bG) >= GG[ZG] && Math.floor(bG) <= UG[ZG])),
        VG = [`The chunk from ${GG.join(" ")} to ${UG.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
      null !== SG && VG.push(`The player's feet are at ${SG.map(Math.floor).join(" ")}, ${YG?"in this chunk":"outside this chunk"}.`);
      const pG = [];
      for (let wG = GG[1]; wG <= UG[1]; wG++) {
        const SG = kG(GG, bG, wG, ZG).join("; "),
          LG = pG[pG.length - 1];
        (null === LG || void 0 === LG ? void 0 : LG.boxes) === SG ? LG.to = wG : pG.push({
          from: wG,
          to: wG,
          boxes: SG
        })
      }
      const fG = pG.filter((GG => "" !== GG.boxes));
      0 === fG.length && VG.push("It is all air.");
      let QG = VG.join("\n").length;
      for (const wG of fG) {
        const GG = `y${yG(wG.from,wG.to)}: ${wG.boxes}`;
        if (QG += GG.length + 1, QG > LG) {
          VG.push(`Cut short: the layers from y${wG.from} up aren't shown, as there are too many blocks.`);
          break
        }
        VG.push(GG)
      }
      return VG.join("\n")
    }
  },
  8839: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => SG
    });
    var wG = ZG(17);

    function SG() {
      return !wG.e.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  37309: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => yG,
      h: () => LG,
      j: () => SG
    });
    const wG = [.25, .5, 1, 2, 4, 8, 16];

    function SG(GG, bG) {
      const ZG = wG;
      let SG = ZG.indexOf(GG);
      return -1 === SG && (SG = ZG.findIndex((bG => bG >= GG)), -1 === SG && (SG = ZG.length - 1)), "up" === bG ? ZG[Math.min(SG + 1, ZG.length - 1)] : ZG[Math.max(SG - 1, 0)]
    }

    function LG(GG) {
      return GG <= wG[0]
    }

    function yG(GG) {
      return GG >= wG[wG.length - 1]
    }
  },
  39487: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => LG,
      g: () => yG
    });
    var wG = ZG(19);
    let SG = !1;

    function LG() {
      return SG
    }

    function yG(GG) {
      SG !== GG && (SG = GG, wG.l.xh("replayViewer|videoExportChanged"))
    }
  },
  36836: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => SG,
      d: () => LG
    });
    let wG = !1;

    function SG() {
      return wG
    }

    function LG(GG) {
      return wG !== GG && (wG = GG, !0)
    }
  },
  39423: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => LG
    });
    var wG = ZG(19),
      SG = ZG(1923);

    function LG(GG) {
      let {
        taskId: bG,
        progress: ZG
      } = GG;
      const wG = SG.c.get("_tasks");
      null !== wG && void 0 !== wG && wG[bG] && SG.c.apply({
        _tasks: {
          ...wG,
          [bG]: {
            ...wG[bG],
            progress: ZG
          }
        }
      })
    }
    wG.l.subscribe("clientTaskProgress", (GG => {
      LG(GG)
    }))
  },
  39986: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => fG,
      g: () => KG,
      i: () => YG,
      l: () => pG,
      o: () => UG,
      r: () => yG,
      u: () => VG,
      v: () => hG
    });
    var wG = ZG(1923),
      SG = ZG(19),
      LG = ZG(1939);
    const yG = (0, LG.l)((function() {
        var GG, bG, ZG, SG;
        return {
          health: null !== (GG = wG.c.get("_health")) && void 0 !== GG ? GG : null,
          maxHealth: null !== (bG = wG.c.get("_totalMaxHealth")) && void 0 !== bG ? bG : null,
          shield: null !== (ZG = wG.c.get("_shield")) && void 0 !== ZG ? ZG : null,
          maxShield: null !== (SG = wG.c.get("maxShield")) && void 0 !== SG ? SG : null
        }
      }), [], (0, LG.i)("_health", "_totalMaxHealth", "_shield", "maxShield")),
      kG = [{
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

    function UG(GG, bG) {
      return kG[(GG ? 2 : 0) + (bG ? 1 : 0)]
    }
    const YG = (0, LG.l)((function() {
      var GG;
      return null !== (GG = wG.c.get("_aura")) && void 0 !== GG ? GG : null
    }), [], (0, LG.i)("_aura"));

    function VG(GG) {
      return {
        watch: bG => (0, SG.p)("shotPlayer", (ZG => {
          let {
            playerId: wG,
            damage: SG,
            wasCrit: LG,
            distance: yG
          } = ZG;
          GG(wG) && bG({
            damage: SG,
            wasCrit: LG,
            distance: yG
          })
        }))
      }
    }

    function pG(GG) {
      return (0, LG.c)("chat", (bG => {
        let {
          serverChatMsgId: ZG,
          content: wG,
          chatterEId: SG
        } = bG;
        return {
          serverChatMsgId: null !== ZG && void 0 !== ZG ? ZG : null,
          content: wG,
          author: SG ? GG(SG) : null
        }
      }))
    }
    class fG {
      constructor() {
        this.shown = null, this.needed = null, this.neededSince = 0
      }
      update(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const ZG = this.shown;
        return GG !== this.needed && (this.needed = GG, this.neededSince = bG, null === GG && (this.shown = null)), this.shown !== this.needed && bG - this.neededSince > 200 && (this.shown = this.needed), this.shown !== ZG
      }
    }

    function QG(GG) {
      return [{
        translationKey: `touchKeys:${GG}`
      }]
    }
    const KG = {
      open: QG("open"),
      close: QG("close"),
      milk: QG("milk"),
      shear: QG("shear"),
      tame: QG("tame"),
      feed: QG("feed"),
      ride: QG("ride")
    };

    function hG(GG) {
      return [{
        translationKey: "touchKeys:tameWith"
      }, " ", {
        icon: GG
      }]
    }
  },
  41435: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => kG,
      f: () => yG
    });
    var wG = ZG(3271);
    let SG = null,
      LG = null;

    function yG() {
      return LG ??= ZG.e(216).then((() => ZG(36657))).then((GG => {
        let {
          ITEM_SPRITES: bG,
          ITEM_SPRITES_WITHOUT_FILE: ZG,
          ITEM_FILES_WITHOUT_SPRITE: LG
        } = GG;
        SG = function(GG, bG, ZG) {
          const SG = new Set,
            LG = (0, wG.s)(bG);
          let yG = 0;
          for (const [wG, kG] of GG.entries()) wG === LG[yG] ? yG++ : SG.add(kG);
          if ("" !== ZG)
            for (const kG of ZG.split(wG.o)) SG.add(kG);
          return SG
        }(bG.split(wG.o), ZG, LG)
      }), (GG => {
        throw LG = null, GG
      })), LG
    }

    function kG(GG) {
      var bG, ZG;
      return null !== (bG = null === (ZG = SG) || void 0 === ZG ? void 0 : ZG.has(GG)) && void 0 !== bG && bG
    }
  },
  40001: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => wG,
      f: () => LG,
      g: () => SG
    });
    const wG = 128;

    function SG(GG, bG, ZG, wG) {
      const SG = 2 * bG - 1,
        LG = 1 - 2 * ZG,
        yG = GG(0) - SG * GG(3),
        kG = GG(4) - SG * GG(7),
        UG = GG(8) - SG * GG(11),
        YG = GG(1) - LG * GG(3),
        VG = GG(5) - LG * GG(7),
        pG = GG(9) - LG * GG(11);
      wG[0] = kG * pG - UG * VG, wG[1] = UG * YG - yG * pG, wG[2] = yG * VG - kG * YG;
      const fG = wG[0] * GG(3) + wG[1] * GG(7) + wG[2] * GG(11) < 0 ? -1 : 1,
        QG = Math.hypot(wG[0], wG[1], wG[2]) * fG;
      return wG[0] /= QG, wG[1] /= QG, wG[2] /= QG, wG
    }

    function LG(GG, bG, ZG, wG, SG, LG) {
      const yG = [Math.floor(bG[0]), Math.floor(bG[1]), Math.floor(bG[2])],
        kG = [0, 0, 0],
        UG = [1 / 0, 1 / 0, 1 / 0],
        YG = [1 / 0, 1 / 0, 1 / 0];
      for (let fG = 0; fG < 3; fG++) kG[fG] = Math.sign(ZG[fG]), 0 !== kG[fG] && (YG[fG] = Math.abs(1 / ZG[fG]), UG[fG] = (yG[fG] + (kG[fG] > 0 ? 1 : 0) - bG[fG]) / ZG[fG]);
      let VG = 0,
        pG = Math.abs(ZG[0]) > Math.abs(ZG[1]) ? 0 : 1;
      for (Math.abs(ZG[2]) > Math.abs(ZG[pG]) && (pG = 2); VG <= wG;) {
        if (GG(yG[0], yG[1], yG[2])) return SG[0] = yG[0], SG[1] = yG[1], SG[2] = yG[2], LG[0] = 0, LG[1] = 0, LG[2] = 0, LG[pG] = -kG[pG], !0;
        pG = UG[0] < UG[1] ? 0 : 1, UG[2] < UG[pG] && (pG = 2), VG = UG[pG], yG[pG] += kG[pG], UG[pG] += YG[pG]
      }
      return !1
    }
  },
  39982: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => SG
    });
    var wG = ZG(1873);

    function SG(GG, bG, ZG) {
      return (0, wG.n)(GG, bG) < ZG
    }
  },
  8764: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => SG
    });
    var wG = ZG(1213);

    function SG(GG, bG) {
      var ZG, SG;
      try {
        const ZG = (0, wG.e)();
        if ("function" === typeof ZG) {
          const wG = new ZG(GG, bG);
          if (wG.type === GG) return wG
        }
      } catch {}
      const LG = document.createEvent("Event");
      return LG.initEvent(GG, null !== (ZG = null === bG || void 0 === bG ? void 0 : bG.bubbles) && void 0 !== ZG && ZG, null !== (SG = null === bG || void 0 === bG ? void 0 : bG.cancelable) && void 0 !== SG && SG), LG
    }
  },
  36808: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => fG,
      f: () => VG,
      g: () => QG,
      h: () => pG
    });
    var wG = ZG(352),
      SG = ZG(641),
      LG = ZG(655),
      yG = ZG(29);
    const kG = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      UG = "playSessionGameNameWithVariation",
      YG = "wasMatchmakePlayer";

    function VG() {
      let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yG.l;
      (0, LG.j)(GG, kG)
    }

    function pG() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yG.l).setItem(YG, !0)
    }

    function fG() {
      let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yG.l;
      return (0, LG.e)(GG, kG)
    }

    function QG(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yG.l;
      const ZG = (0, LG.e)(bG, kG),
        VG = function(GG) {
          const bG = GG.getItem(UG);
          return "string" !== typeof bG ? null : bG
        }(bG),
        pG = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yG.l).getItem(YG)
        }(bG);
      let fG;
      return fG = null !== ZG && null !== VG && (0, LG.f)(bG, kG) && function(GG, bG, ZG) {
          const SG = (0, wG.Yb)(GG),
            LG = (0, wG.Yb)(bG),
            yG = (0, wG.Vb)(GG),
            kG = (0, wG.Vb)(bG);
          return !(SG !== LG || !ZG) || SG === LG && yG === kG
        }(VG, GG, pG) ? ZG : (0, SG.d)(), (0, LG.n)(bG, kG, fG), bG.setItem(UG, GG),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yG.l).removeItem(YG)
        }(bG), fG
    }
  },
  39412: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => VG
    });
    var wG = ZG(1177),
      SG = ZG(1290),
      LG = ZG(17),
      yG = ZG(1275),
      kG = ZG(1287),
      UG = ZG(1444),
      YG = ZG(36808);

    function VG(GG) {
      let {
        AS: bG,
        sS: ZG
      } = GG;
      const VG = null !== bG && void 0 !== bG ? bG : (0, kG.d)().gameNameWithVariation;
      (0, wG.J)(VG) && ((0, YG.h)(), (0, yG.cb)((() => {
        console.log("Received matchmaking order from game server to game", bG), (0, LG.n)("inGameReplay"), (0, UG.navigatePreserveSearch)((0, SG.d)(VG, null !== ZG && void 0 !== ZG ? ZG : void 0))
      }), "video_start"))
    }
  },
  39593: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => LG
    });
    var wG = ZG(19),
      SG = ZG(1956);

    function LG(GG) {
      var bG, ZG;
      const LG = (0, SG.t)(null !== (bG = null === (ZG = SG.B.toggleFreeCam) || void 0 === ZG ? void 0 : ZG[0]) && void 0 !== bG ? bG : null);
      wG.l.xh("showBottomMessage", {
        message: `Free Camera ${GG?"Enabled":"Disabled"}${LG?` - Press ${LG} to toggle`:""}`,
        timeoutLength: 2e3,
        type: "Warning"
      })
    }
  },
  39404: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => UG,
      f: () => yG,
      i: () => kG,
      l: () => YG
    });
    var wG = ZG(19),
      SG = ZG(1311);
    const LG = new Map;

    function yG(GG, bG) {
      wG.l.xh("newUiRequest", {
        id: GG,
        clientParameters: bG
      }, !0)
    }

    function kG(GG) {
      wG.l.xh("removeUiRequest", GG, !0);
      const bG = LG.get(GG);
      bG && (bG.tearDownNotification(), LG.delete(GG))
    }

    function UG() {
      wG.l.xh("clearUiRequests");
      for (const GG of LG.values()) GG.tearDownNotification();
      LG.clear()
    }

    function YG(GG, bG, ZG, wG) {
      const yG = SG.NotificationProvider.showPromptPopup({
        title: bG,
        confirmText: "general:yes",
        cancelText: "general:no",
        destructive: ZG,
        unlockPointerKey: "uiRequestPopup"
      });
      LG.set(GG, yG), yG.getResult().then((bG => {
        LG.delete(GG), "notificationTornDown" !== bG && wG(bG)
      }))
    }
  },
  40005: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => pG,
      g: () => fG
    });
    var wG = ZG(188),
      SG = ZG(40012);
    const LG = 20;

    function yG(GG) {
      return GG.map(Math.floor).join(" ")
    }

    function kG(GG) {
      return null === GG.amount || 1 === GG.amount ? GG.name : `${GG.amount} ${GG.name}`
    }
    var UG = ZG(40021),
      YG = ZG(1923),
      VG = ZG(1287);

    function pG(GG, bG) {
      if (!GG) return UG.e;
      const ZG = GG.playerFeet();
      if (!ZG) return "The player isn't in the world yet, so no blocks can be seen.";
      const LG = wG.d.rK,
        yG = (0, SG.i)(null !== bG && void 0 !== bG ? bG : ZG, LG),
        kG = GG.chunkBlocks(yG);
      return kG ? (0, SG.e)(yG, LG, ((bG, ZG, wG) => {
        const SG = kG(bG, ZG, wG);
        return 0 === SG ? null : GG.blockName(SG).split("|")[0]
      }), ZG) : `The chunk from ${yG.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${ZG.map(Math.floor).join(" ")}.`
    }

    function fG(GG) {
      var bG, ZG, wG;
      if (!GG) return UG.i;
      const SG = GG.playerFeet();
      if (!SG) return "The player isn't in the world yet, so nothing in it can be seen.";
      const {
        slots: pG,
        heldSlot: fG
      } = GG.inventory();
      return function(GG) {
        const bG = [];
        null !== GG.game && bG.push(`Game: ${GG.game}.`);
        const ZG = null === GG.health ? "" : `, health ${Math.round(GG.health)}${null===GG.maxHealth?"":` of ${Math.round(GG.maxHealth)}`}`;
        bG.push(`The player (the creator) stands at ${yG(GG.position)}${ZG}, ${GG.creative?"in":"not in"} creative mode.`);
        const wG = GG.slots[GG.heldSlot];
        bG.push(wG ? `Holding (slot ${GG.heldSlot}): ${kG(wG)}.` : `Holding nothing (slot ${GG.heldSlot} is empty).`);
        const SG = GG.slots.flatMap(((GG, bG) => GG ? [`slot ${bG}: ${kG(GG)}`] : []));
        bG.push(SG.length > 0 ? `Inventory: ${SG.join(", ")}.` : "Inventory: empty.");
        const UG = bG => Math.hypot(bG.position[0] - GG.position[0], bG.position[1] - GG.position[1], bG.position[2] - GG.position[2]),
          YG = [...GG.nearby].sort(((GG, bG) => UG(GG) - UG(bG)));
        if (0 === YG.length) bG.push("No other players or mobs are near enough to see.");
        else {
          bG.push("Near them, nearest first:");
          for (const GG of YG.slice(0, LG)) {
            const ZG = "player" === GG.kind ? `player "${GG.name||"?"}"` : GG.name && GG.name !== GG.kind ? `${GG.kind} "${GG.name}"` : GG.kind,
              wG = Math.round(UG(GG));
            bG.push(`- ${ZG} at ${yG(GG.position)}, ${wG} block${1===wG?"":"s"} away`)
          }
          YG.length > LG && bG.push(`- and ${YG.length-LG} more further away`)
        }
        return GG.droppedItems > 0 && bG.push(`${GG.droppedItems} dropped item${1===GG.droppedItems?" is":"s are"} on the ground nearby.`), bG.join("\n")
      }({
        game: null !== (bG = (0, VG.d)().gameNameWithVariation) && void 0 !== bG ? bG : null,
        position: SG,
        health: null !== (ZG = YG.c.get("_health")) && void 0 !== ZG ? ZG : null,
        maxHealth: null !== (wG = YG.c.get("_totalMaxHealth")) && void 0 !== wG ? wG : null,
        creative: !0 === YG.c.get("creative"),
        heldSlot: fG,
        slots: pG,
        nearby: GG.nearby(),
        droppedItems: GG.droppedItems()
      })
    }
  },
  41263: (GG, bG, ZG) => {
    ZG.d(bG, {
      A: () => lG,
      C: () => cG,
      F: () => NG,
      G: () => PG,
      K: () => FG,
      O: () => jG,
      R: () => IG,
      U: () => RG,
      W: () => eG,
      _: () => aG,
      e: () => TG,
      i: () => AG,
      k: () => WG,
      o: () => HG,
      q: () => mG,
      s: () => CG,
      v: () => MG,
      y: () => vG
    });
    var wG = ZG(1343),
      SG = ZG(19),
      LG = ZG(1251),
      yG = ZG(2380),
      kG = ZG(4842),
      UG = ZG(4800);
    let YG, VG = !1,
      pG = !1,
      fG = !1,
      QG = !1;
    const KG = 1300,
      hG = 3e3;
    let dG = 0,
      JG = !1,
      rG = !1,
      zG = 0;
    const EG = 2;
    let oG = !1,
      XG = !1;
    const uG = new Set,
      iG = new Set;

    function CG() {
      return VG
    }

    function WG() {
      return rG
    }

    function mG() {
      return XG
    }

    function IG() {
      return (0, LG.A)() && !XG
    }

    function FG(GG) {
      let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (GG !== XG) {
        XG = GG;
        for (const GG of [...iG]) GG(XG);
        bG && eG()
      }
    }

    function vG(GG) {
      return iG.add(GG), () => {
        iG.delete(GG)
      }
    }

    function aG() {
      (0, kG.j)(yG.t.Menu, (0, LG.A)() ? 0 : yG.t.Menu)
    }

    function cG() {
      rG = !1, zG = 0, aG(), eG()
    }

    function lG(GG) {
      return uG.add(GG), () => {
        uG.delete(GG)
      }
    }

    function jG(GG) {
      pG = !1, GG !== VG && (VG = GG, QG = !1, clearTimeout(YG), fG = !VG && oG, VG ? (JG = !1, rG = !1, zG = 0) : IG() && !oG && (rG = !0), oG = !1, VG && !IG() && DG(), OG(), fG && eG())
    }

    function PG(GG) {
      GG !== JG && (JG = GG, GG || eG())
    }

    function MG() {
      pG = !1, QG || !0 !== nG() || (QG = !0, clearTimeout(YG), YG = setTimeout(sG, KG))
    }

    function AG() {
      return (!pG || performance.now() - dG > hG) && (pG = (0, UG.I)().lockPointer(), dG = performance.now()), pG
    }

    function sG() {
      qG() && gG() && AG()
    }

    function qG() {
      return IG() && !VG && !JG && !(0, wG.k)()
    }

    function nG() {
      var GG;
      return "undefined" === typeof navigator || null === (GG = navigator.userActivation) || void 0 === GG ? void 0 : GG.isActive
    }

    function gG() {
      return fG && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== nG()
    }

    function eG() {
      IG() ? qG() && !rG && gG() && AG() : VG && !oG && DG()
    }

    function RG() {
      rG ? navigator.vendor.startsWith("Apple") ? tG() : zG = EG : eG()
    }

    function TG() {
      zG > 0 && 0 === --zG && tG()
    }

    function HG() {
      zG = 0
    }

    function tG() {
      qG() && !0 === nG() && AG()
    }

    function DG() {
      oG = !0, (0, UG.I)().unlockPointer()
    }

    function NG() {
      pG = !1, fG = !1, QG = !1, clearTimeout(YG), JG = !1, rG = !1, zG = 0, oG = !1;
      const GG = VG;
      VG = !1, GG && OG()
    }

    function OG() {
      for (const GG of [...uG]) GG(VG);
      SG.l.xh("pointerLockUpdate", VG)
    }
  },
  41056: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => fG,
      g: () => kG,
      k: () => pG,
      l: () => YG,
      m: () => yG,
      n: () => VG,
      q: () => UG
    });
    let wG = null,
      SG = null,
      LG = null;

    function yG(GG) {
      wG = GG
    }

    function kG() {
      return wG
    }

    function UG(GG) {
      SG = GG
    }

    function YG() {
      return SG
    }

    function VG(GG) {
      LG = GG
    }

    function pG() {
      return LG
    }

    function fG() {
      var GG, bG;
      return !0 === (null === (GG = SG) || void 0 === GG || null === (bG = GG.currentViewer) || void 0 === bG ? void 0 : bG.inPlayback)
    }
  },
  41395: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      attachPlayGameSources: () => uw,
      playGameSources: () => Xw
    });
    var wG = ZG(1895),
      SG = ZG(41056),
      LG = ZG(4800),
      yG = ZG(40971),
      kG = ZG(41383),
      UG = ZG(39986),
      YG = ZG(19),
      VG = ZG(4818),
      pG = ZG(4810),
      fG = ZG(40999),
      QG = ZG(41027),
      KG = ZG(41404),
      hG = ZG(41012);
    (0, hG.l)(VG.jc.Chat, (GG => {
      if (GG.payloadKind !== pG.jc.Msgpack) return;
      const bG = function(GG) {
        if (null === GG || "object" !== typeof GG || !("content" in GG)) return null;
        const {
          chatMsgId: bG,
          content: ZG,
          chatterEId: wG
        } = GG;
        return {
          serverChatMsgId: null !== bG && void 0 !== bG ? bG : void 0,
          content: ZG,
          chatterEId: void 0 === wG || null === wG ? void 0 : String(wG)
        }
      }((0, fG.e)(GG.payload));
      null !== bG && YG.l.xh("chat", bG, !0)
    }));
    const dG = {
        chatReceived: (0, UG.l)((function(GG) {
          var bG, ZG, wG;
          return {
            id: GG,
            name: null !== (bG = KG.f.getName(GG)) && void 0 !== bG ? bG : null,
            local: (0, QG.i)() === GG,
            profileEffect: null !== (ZG = null === (wG = (0, KG.g)(GG)) || void 0 === wG ? void 0 : wG.profileEffect) && void 0 !== ZG ? ZG : null
          }
        }))
      },
      JG = {
        sendChatMessage(GG) {
          var bG;
          let {
            vV: ZG,
            channelName: wG
          } = GG;
          null === (bG = (0, yG.f)()) || void 0 === bG || bG.clientApi.sendChat(ZG, wG)
        }
      };
    var rG = ZG(188),
      zG = ZG(1923),
      EG = ZG(40954),
      oG = ZG(39982);
    const XG = [0, 0, 0],
      uG = {
        codeBlockClickable(GG) {
          var bG;
          const ZG = (0, yG.f)();
          if (null === ZG || void 0 === ZG || !ZG.isSessionLive) return !1;
          const wG = ZG.api;
          if (0 !== (EG.v.playerFlags(wG.apiView, 0) & EG.Hd.Crouching)) return !1;
          const SG = wG.queries.directorEntity(wG.localId) >= EG.rb.BYTES ? wG.memoryData(wG.scratch(), EG.rb.BYTES, 8, "the local player's DirectorEntity") : null;
          if (null === SG) return !1;
          for (let LG = 0; LG < 3; LG++) XG[LG] = EG.rb.feet(SG, 0, LG);
          return XG[1] += EG.rb.eyeHeight(SG, 0), (0, oG.d)(XG, GG, null !== (bG = zG.c.get("blockReach")) && void 0 !== bG ? bG : rG.d.Nd)
        }
      },
      iG = {
        clickCodeBlock(GG) {
          var bG;
          null === (bG = (0, yG.f)()) || void 0 === bG || bG.clickCodeBlock(GG)
        }
      };
    var CG = ZG(40984),
      WG = ZG(41410),
      mG = ZG(982),
      IG = ZG(39435),
      FG = ZG(4792),
      vG = ZG(40989),
      aG = ZG(40976),
      cG = ZG(40993);

    function lG(GG) {
      if (null === GG) return null;
      const bG = [];
      for (const ZG of GG) {
        const GG = Object.keys(ZG)[0];
        if ("Gb" === GG) {
          const {
            str: GG,
            style: wG,
            clickableUrl: SG
          } = ZG.Gb, LG = Object.keys(GG)[0], yG = GG[LG];
          "string" !== LG && "styledEntityName" !== LG && "styledTranslatedText" !== LG || bG.push({
            str: yG,
            style: wG,
            clickableUrl: SG
          })
        } else bG.push(ZG[GG])
      }
      return bG
    }
    const jG = {
      screenPos(GG) {
        var bG, ZG;
        return null !== (bG = null === (ZG = (0, yG.f)()) || void 0 === ZG ? void 0 : ZG.renderFrame.projectWorldPosToScreenPos(GG)) && void 0 !== bG ? bG : {
          x: 0,
          y: 0
        }
      }
    };
    let PG = !1;

    function MG() {
      PG || (PG = !0, (0, hG.l)(VG.jc.ProgressBarUpdate, (GG => {
        const bG = (0, cG.j)(GG);
        (0, cG.d)(bG) && YG.l.xh("progressBarUpdate", bG, !0)
      })), (0, hG.l)(vG.v, (GG => {
        const bG = (0, cG.f)(vG.v, GG);
        bG && YG.l.xh("middleScreenBarInitiate", {
          duration: bG.cS,
          lS: bG.lS,
          horizBarRemOffset: bG.jS
        }, !0)
      })), (0, hG.l)(VG.jc.RemoveMiddleScreenBar, (() => {
        YG.l.xh("middleScreenBarRemove")
      })), (0, hG.l)(vG.db, (GG => {
        const bG = (0, cG.f)(vG.db, GG);
        if (bG) {
          var ZG;
          const GG = bG.WG ? null === (ZG = (0, yG.f)()) || void 0 === ZG ? void 0 : ZG.renderFrame.projectDirectionToScreenPos(bG.WG) : void 0;
          YG.l.xh("sendHitmarker", {
            eb: bG.eb,
            screenPos: GG
          }, !0)
        }
      })), (0, hG.l)(vG.ib, (GG => {
        const bG = (0, cG.f)(vG.ib, GG);
        if (bG) {
          const {
            id: GG,
            position: ZG,
            style: wG,
            jb: SG,
            Mb: LG
          } = bG;
          YG.l.xh("setDirectionArrow", {
            id: GG,
            position: ZG,
            style: wG,
            text: lG(SG),
            Mb: LG
          }, !0)
        }
      })), (0, hG.l)(vG.d, (GG => {
        const bG = (0, cG.f)(vG.d, GG);
        bG && YG.l.xh("clearDirectionArrow", {
          id: bG.id
        }, !0)
      })), (0, hG.l)(vG.m, (GG => {
        const bG = (0, cG.f)(vG.m, GG);
        bG && YG.l.xh("flyingMiddleMessage", {
          content: lG(bG.aL),
          cL: bG.cL,
          lL: bG.lL
        }, !0)
      })), (0, hG.l)(VG.jc.WorldVariation, (GG => {
        const bG = (0, cG.j)(GG);
        if ("string" === typeof bG) {
          const GG = bG === mG.d ? null : {
            message: `Currently loaded as variation: ${bG}`,
            type: "Warning"
          };
          YG.l.xh("showPermanentBottomMessage", GG, !0)
        }
      })), (0, hG.l)(vG.L, (GG => {
        const bG = (0, cG.f)(vG.L, GG);
        bG && function(GG, bG) {
          const {
            type: ZG,
            params: wG
          } = (0, IG.e)(bG), SG = {
            ...wG
          };
          for (const LG of IG.b) SG[LG] && (SG[LG] = lG(SG[LG]));
          FG.e.queueQTE(GG, ZG, SG).getResult().then((bG => {
            var ZG;
            "boolean" === typeof bG && (null === (ZG = (0, yG.f)()) || void 0 === ZG || ZG.send(aG.b.QteResponse, {
              qteId: GG,
              qteResponse: bG
            }))
          }))
        }(bG.id, bG.TG)
      })), (0, hG.l)(vG.Y, (GG => {
        const bG = (0, cG.f)(vG.Y, GG);
        "number" === typeof bG && FG.e.cancelQTE(bG)
      })), (0, hG.f)((() => {
        FG.e.reset()
      })), (0, hG.j)((() => {
        FG.e.reset()
      })), (0, hG.l)(VG.jc.EditItemCraftingRecipes, (GG => {
        const bG = (0, cG.j)(GG);
        (0, cG.d)(bG) && YG.l.xh("craftingRecipesEdited", {
          itemName: bG.craftingRecipeItemName,
          recipesForItem: bG.recipesForItem
        })
      })), (0, hG.l)(vG.V, (GG => {
        const bG = (0, cG.f)(vG.V, GG);
        bG && YG.l.xh("craftingRecipesEdited", {
          itemName: bG.aS,
          recipesForItem: []
        })
      })))
    }
    var AG = ZG(17);
    const sG = [{
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

    function qG(GG) {
      return EG.v.playerFlags(GG.api.apiView, 0)
    }
    const nG = {
        freeCamera: (0, QG.e)((GG => () => {
          const bG = GG.isSessionLive && 0 !== (qG(GG) & EG.Hd.FreeCamMoves),
            ZG = GG.freeCameraAllowed() && null === AG.e.get("scriptedCameraFacing");
          return sG[(ZG ? 2 : 0) + (bG ? 1 : 0)]
        }), sG[0], (GG => (0, LG.r)(GG)))
      },
      gG = {
        setFreeCameraMovesFly: GG => {
          var bG;
          null === (bG = (0, yG.f)()) || void 0 === bG || bG.setFreeCameraMovesFly(GG)
        }
      },
      eG = {
        freeCameraPos: () => {
          const GG = (0, yG.f)();
          return null !== GG && void 0 !== GG && GG.isSessionLive && GG.renderFrame.hasView && 0 !== (qG(GG) & EG.Hd.FreeCam) ? GG.renderFrame.cameraPosition : null
        }
      };
    var RG = ZG(39593);
    let TG = !1,
      HG = !1;

    function tG() {
      const GG = (0, yG.f)();
      if (null === GG || void 0 === GG || !GG.isSessionLive) return void(TG = !1);
      const bG = 0 !== (EG.v.playerFlags(GG.api.apiView, 0) & EG.Hd.FreeCam);
      bG !== TG && (TG = bG, (0, RG.b)(bG))
    }
    var DG = ZG(352),
      NG = ZG(37396),
      OG = ZG(1939);
    var xG = ZG(41413),
      BG = ZG(41020);
    const Gb = {
      interactPrompt: null,
      blockText: null,
      neededTool: null
    };
    let bb = "off";

    function Zb(GG) {
      var bG;
      return null === GG ? null : {
        label: null !== (bG = (0, xG.b)(GG, "interactionPrompt")) && void 0 !== bG ? bG : null
      }
    }
    const wb = new Map([
      [EG.mc.Open, {
        label: UG.g.open
      }],
      [EG.mc.Close, {
        label: UG.g.close
      }],
      [EG.mc.Milk, {
        label: UG.g.milk
      }],
      [EG.mc.Shear, {
        label: UG.g.shear
      }],
      [EG.mc.Tame, {
        label: UG.g.tame
      }],
      [EG.mc.Feed, {
        label: UG.g.feed
      }],
      [EG.mc.Ride, {
        label: UG.g.ride
      }]
    ]);
    class Sb {
      constructor() {
        this.target = Gb, this.Gk = EG.Yc, this.optionName = null, this.pickaxe = new UG.d
      }
      read(GG) {
        var bG;
        const ZG = EG.v.targetBlockId(GG.api.apiView, 0);
        ZG !== this.Gk && (this.Gk = ZG, this.optionName = ZG === EG.Yc ? null : `${GG.tables.getMetaInfo(ZG).rootName}CrosshairText`);
        const wG = null === this.optionName ? null : null !== (bG = GG.tables.getClientOption(this.optionName)) && void 0 !== bG ? bG : null;
        this.pickaxe.update(function(GG, bG) {
          var ZG, wG, SG;
          if (0 === (EG.v.playerFlags(GG.api.apiView, 0) & EG.Hd.Breaking) || bG === EG.Yc || 0 === bG) return null;
          const {
            tables: LG
          } = GG;
          if (!0 === LG.getClientOption("creative")) return null;
          const yG = LG.nameOfId(bG),
            kG = null === (ZG = GG.items.Ik()) || void 0 === ZG ? void 0 : ZG.name,
            UG = null !== (wG = LG.getItemStat(yG, "harvestLevel")) && void 0 !== wG ? wG : 0;
          return (0, DG.Kc)({
            blockHarvestType: LG.getDefaultItemStat(yG, "harvestType"),
            blockHarvestLevel: LG.getDefaultItemStat(yG, "harvestLevel"),
            harvestLevel: UG,
            heldToolType: void 0 === kG ? void 0 : LG.getDefaultItemStat(kG, "harvests"),
            heldToolLevel: void 0 === kG ? void 0 : LG.getDefaultItemStat(kG, "level")
          }) && null !== (SG = NG.n[UG]) && void 0 !== SG ? SG : null
        }(GG, ZG)), GG.watchPromptPick(bb);
        const SG = "touch" === bb ? function(GG) {
          var bG;
          const ZG = GG.interactLabel;
          return ZG === EG.mc.Entity ? Zb(GG.promptEntity) : ZG === EG.mc.TameWith ? {
            label: (0, UG.v)(GG.tables.nameOfId(GG.interactIcon))
          } : null !== (bG = wb.get(ZG)) && void 0 !== bG ? bG : null
        }(GG) : Zb(GG.promptEntity);
        return this.target = (0, OG.n)(this.target, {
          interactPrompt: SG,
          blockText: wG,
          neededTool: this.pickaxe.shown
        }), this.target
      }
    }
    let Lb = null;
    const yb = {
      current: () => {
        var GG, bG;
        return null !== (GG = null === (bG = Lb) || void 0 === bG ? void 0 : bG.target) && void 0 !== GG ? GG : Gb
      },
      watch: GG => {
        const bG = new Sb;
        Lb = bG;
        const ZG = (0, QG.l)((ZG => {
          let wG = bG.read(ZG);
          GG(wG);
          const SG = (0, LG.t)((() => {
            const SG = bG.read(ZG);
            SG !== wG && (wG = SG, GG(SG))
          }));
          return () => {
            SG(), ZG.watchPromptPick("off")
          }
        }));
        return () => {
          ZG(), Lb === bG && (Lb = null)
        }
      }
    };
    let kb = 0,
      Ub = 0;
    const Yb = {
        health: UG.r,
        aura: UG.i,
        hotbar: BG.c.states.hotbar,
        heldItemAim: BG.c.states.heldItemAim,
        crouching: (0, QG.e)((GG => function(GG) {
          const bG = () => 0 !== (EG.v.playerFlags(GG.apiView, 0) & EG.Hd.Crouching);
          return {
            current: bG,
            watch(GG) {
              let ZG = bG();
              return (0, LG.r)((() => {
                const wG = bG();
                wG !== ZG && (ZG = wG, GG(wG))
              }))
            }
          }
        }(GG.api).current), !1, (GG => (0, LG.r)(GG))),
        flight: (0, QG.e)((GG => () => function(GG) {
          const bG = EG.v.playerFlags(GG.apiView, 0);
          return (0, UG.o)(0 !== (bG & EG.Hd.CanFly), 0 !== (bG & EG.Hd.Flying))
        }(GG.api)), (0, UG.o)(!1, !1), (GG => (0, LG.r)(GG))),
        gliderBoostFuel: (0, QG.e)((GG => () => EG.v.gliderBoostFuel(GG.api.apiView, 0)), 0, (GG => (0, LG.r)(GG))),
        crosshairTarget: yb
      },
      Vb = {
        hotbarSlotRequested: BG.c.events.hotbarSlotRequested,
        hotbarScrolled: BG.c.events.hotbarScrolled,
        numberKeyPressed: BG.c.events.numberKeyPressed,
        shotDamageToShow: (0, UG.u)((GG => !0 === (0, xG.b)(GG, "showDamageAmounts")))
      },
      pb = {
        selectHotbarSlot: BG.c.commands.selectHotbarSlot,
        setCrosshairInteractPrompt: GG => {
          bb = GG
        }
      },
      fb = {
        momentumFrac: function() {
          var GG, bG, ZG;
          const wG = (0, yG.f)(),
            SG = performance.now(),
            LG = null === wG || void 0 === wG || null === (GG = wG.items.Ik()) || void 0 === GG || null === (bG = GG.attributes) || void 0 === bG || null === (ZG = bG.customAttributes) || void 0 === ZG ? void 0 : ZG.enchantments;
          return kb = null !== wG && null !== LG && void 0 !== LG && LG.Momentum ? 0 !== (EG.v.playerFlags(wG.api.apiView, 0) & EG.Hd.Breaking) ? Math.max(0, EG.v.momentumFrac(wG.api.apiView, 0)) : Math.max(0, kb - (SG - Ub) / 1500) : 0, Ub = SG, kb
        }
      };
    var Qb = ZG(40963);
    const Kb = {
      lobbyManage(GG) {
        var bG;
        null === (bG = (0, yG.f)()) || void 0 === bG || bG.send(aG.b.LobbyManage, GG)
      }
    };
    var hb = ZG(1198),
      db = ZG(36836),
      Jb = ZG(8839),
      rb = ZG(1579),
      zb = ZG(2380),
      Eb = ZG(4827);
    let ob = !1;

    function Xb(GG) {
      ob = GG
    }

    function ub() {
      "inGame" !== AG.e.get("gameState") || (0, rb.u)() || YG.l.xh("ctrlCrouchWithoutFullscreen")
    }
    let ib = !1;
    const Cb = {
        OpenEmoteWheel: () => {
          Xb(!0), ib = !0, queueMicrotask((() => {
            ib && (ib = !1, YG.l.xh("requestEmoteWheelHoldOpen"))
          }))
        },
        ToggleFullCoordinateOverlay: () => {
          YG.l.xh("toggleFullCoordinateOverlay")
        },
        KeyYPressed: () => {
          (0, db.b)() || YG.l.xh("YKeyPressed")
        },
        KeyXPressed: () => {
          (0, db.b)() || YG.l.xh("XKeyPressed")
        },
        CtrlCrouch: ub,
        "primary-fire": () => {
          YG.l.xh("mouseState", {
            AV: hb.d.DownFirePrimary,
            isDown: !0
          })
        },
        "alt-fire": () => {
          YG.l.xh("mouseState", {
            AV: hb.d.DownFireSecondary,
            isDown: !0
          })
        },
        TouchHold: () => {
          YG.l.xh("mouseState", {
            AV: hb.d.TouchDownLong,
            isDown: !0
          })
        }
      },
      Wb = {
        OpenEmoteWheel: () => {
          Xb(!1), ib ? (ib = !1, (0, Jb.c)() || YG.l.xh("requestEmoteWheelHoldOpen")) : YG.l.xh("requestEmoteWheelHoldRelease")
        },
        CtrlCrouch: ub,
        "primary-fire": () => {
          YG.l.xh("mouseState", {
            AV: hb.d.UpFirePrimary,
            isDown: !1
          })
        },
        "alt-fire": () => {
          YG.l.xh("mouseState", {
            AV: hb.d.UpFireSecondary,
            isDown: !1
          })
        },
        TouchDig: () => {
          YG.l.xh("mouseState", {
            AV: hb.d.UpFirePrimary,
            isDown: !1
          })
        }
      };
    let mb = !1;

    function Ib() {
      mb || (mb = !0, (0, Eb.j)((GG => {
        if ((0, SG.d)()) return;
        const bG = (0, Eb.g)(GG) ? "primary-fire" : GG.action;
        var ZG;
        if (GG.down) {
          if (0 === (GG.flags & zb.b.Synthetic)) {
            var wG;
            null === (wG = Cb[bG]) || void 0 === wG || wG.call(Cb)
          }
        } else null === (ZG = Wb[bG]) || void 0 === ZG || ZG.call(Wb)
      })))
    }
    var Fb = ZG(333),
      vb = ZG(80),
      ab = ZG(29),
      cb = ZG(41263),
      lb = ZG(1287),
      jb = ZG(2400);
    let Pb = !1;
    const Mb = {
      sendCodeCollab(GG) {
        var bG;
        null === (bG = (0, yG.f)()) || void 0 === bG || bG.send(aG.b.CodeCollab, (0, aG.p)(GG), (0, jb.e)(GG))
      }
    };
    var Ab = ZG(39519),
      sb = ZG(8764);
    let qb = null,
      nb = !1,
      gb = null;

    function eb() {
      return "inGame" === AG.e.get("gameState") && !(0, db.b)()
    }
    const Rb = {
        OpenInventory: GG => {
          (0, rb.z)(GG, "inventory", (0, Qb.n)())
        },
        OpenShop: GG => {
          qb && eb() && (0, rb.x)(GG, Fb.u.SHOP, !qb.shopIsEmpty(zG.c.get("shopInfo")))
        },
        OpenLobbyLeaderboard: GG => {
          eb() && (0, rb.x)(GG, Fb.u.LOBBY_LEADERBOARD, (0, Ab.b)({
            lobbyLeaderboardInfo: zG.c.get("lobbyLeaderboardInfo"),
            lobbyManage: zG.c.get("lobbyManage")
          }))
        },
        OpenTasksAndLeaderboard: GG => {
          var bG;
          const ZG = null === (bG = qb) || void 0 === bG ? void 0 : bG.getClientGameMapKey();
          ZG ? (0, rb.C)(GG, !0, ZG) : (0, rb.z)(GG, "retentionFeatures", !(!zG.c.get("_tasks") && !zG.c.get("_availableLeaderboards")))
        },
        OpenInviteLink: GG => {
          (0, rb.z)(GG, "inviteLink", vb.featureFlags.canUseInviteLinks)
        },
        OpenCodeEditor: GG => {
          eb() && function(GG) {
            const bG = (0, yG.f)(),
              ZG = null !== bG && void 0 !== bG && bG.isSessionLive ? bG.api : null,
              wG = ZG ? ZG.HJ(ZG.localId) : null;
            (0, rb.C)(GG, null !== wG && (0, jb.c)((0, lb.d)()), (() => {
              (0, jb.i)(wG)
            }))
          }(GG)
        },
        HideUi: () => {
          YG.l.xh("showUi", !1)
        }
      },
      Tb = {
        HideUi: () => {
          YG.l.xh("showUi", !0)
        }
      };

    function Hb() {
      nb || (nb = !0, ZG.e(159).then((() => ZG(61136))).then((GG => {
        qb = GG
      }), (GG => {
        console.error("[bloxd-wasm-client] the menu keys' checks did not load", GG)
      })), (0, cb.A)((GG => {
        GG || !(0, cb.k)() || (0, vb.isMobile)() || !ab.h.getItem("disableFullscreen") || (0, rb.t)() || AG.e.set({
          openEverythingMenuName: Fb.u.SETTINGS
        })
      })), (0, Eb.j)((GG => {
        let {
          action: bG,
          down: ZG,
          press: wG
        } = GG;
        var LG, yG;
        (0, SG.d)() || (ZG ? null === (LG = Rb[bG]) || void 0 === LG || LG.call(Rb, function(GG) {
          var bG;
          if (0 === GG || (null === (bG = gb) || void 0 === bG ? void 0 : bG.press) !== GG) {
            const bG = {
              press: GG,
              event: (0, sb.c)("inputAction")
            };
            gb = bG, queueMicrotask((() => {
              gb === bG && (gb = null)
            }))
          }
          return gb.event
        }(wG)) : null === (yG = Tb[bG]) || void 0 === yG || yG.call(Tb))
      })))
    }
    var tb = ZG(39423),
      Db = ZG(39412),
      Nb = ZG(39404);
    const Ob = {
      completeTask(GG) {
        var bG;
        null === (bG = (0, yG.f)()) || void 0 === bG || bG.send(aG.b.CompleteTask, (0, aG.t)(GG))
      },
      setServerCookie(GG) {
        var bG;
        let {
          key: ZG,
          value: wG
        } = GG;
        null === (bG = (0, yG.f)()) || void 0 === bG || bG.send(aG.b.GeneralCookieSet, (0, aG.x)({
          yk: ZG,
          kk: wG
        }))
      },
      answerUiRequest(GG) {
        var bG;
        let {
          id: ZG,
          rV: wG
        } = GG;
        null === (bG = (0, yG.f)()) || void 0 === bG || bG.send(aG.b.UiRequestResp, (0, aG.$)({
          fU: ZG,
          QU: wG,
          KU: 5
        }))
      },
      chooseRewardedAd(GG) {
        var bG;
        let {
          id: ZG,
          rV: wG
        } = GG;
        null === (bG = (0, yG.f)()) || void 0 === bG || bG.send(aG.b.UiRequestResponded, (0, aG.Z)({
          id: ZG,
          rV: wG
        }))
      },
      requestLeaderboard(GG) {
        var bG;
        let {
          category: ZG,
          timeframe: wG,
          seeTop: SG
        } = GG;
        null === (bG = (0, yG.f)()) || void 0 === bG || bG.send(aG.b.LeaderboardRequest, {
          category: ZG,
          timeframe: wG,
          seeTop: SG
        })
      }
    };
    let xb = !1;
    const Bb = rG.d.Hd / 2,
      GZ = [Bb, -Bb, -Bb, -Bb, Bb, Bb, -Bb, Bb],
      bZ = [0, 0, 0];

    function ZZ(GG, bG, ZG) {
      for (let wG = 0; wG < GG.length; wG += 2)
        if (GG[wG] === bG && GG[wG + 1] === ZG) return !0;
      return !1
    }
    const wZ = {
      blocksStandingOn: function() {
        const GG = (0, yG.f)();
        if (null === GG) return [];
        const {
          api: bG,
          chunks: ZG,
          tables: wG
        } = GG;
        if (!bG.readPosition(bG.localId, bZ)) return [];
        const [SG, LG, kG] = bZ, UG = Math.ceil(LG) - 1, YG = [], VG = [];
        for (let yG = 0; yG < GZ.length; yG += 2) {
          const GG = SG + GZ[yG],
            bG = kG + GZ[yG + 1];
          if (Number.isInteger(GG) || Number.isInteger(bG)) continue;
          const LG = Math.floor(GG),
            pG = Math.floor(bG);
          if (ZZ(VG, LG, pG)) continue;
          const fG = ZG.Gk(LG, UG, pG);
          wG.isSolidBlockId(fG) && (VG.push(LG, pG), YG.push(wG.nameOfId(fG)))
        }
        return YG
      },
      dropAhead: function() {
        const GG = (0, yG.f)();
        return null !== GG && 0 !== (EG.v.playerFlags(GG.api.apiView, 0) & EG.Hd.DropAhead)
      }
    };
    var SZ = ZG(37309),
      LZ = ZG(39487),
      yZ = ZG(1311),
      kZ = ZG(41031);
    const UZ = new Set(["replayLoad", "replaySave", "replaySaveAs", "replayTimelineZoomIn", "replayTimelineZoomOut"]),
      YZ = new Set(["replaySkipBack", "replaySkipForward", "replaySpeedUp", "replaySpeedDown", "replayRecordKeyframe"]);

    function VZ() {
      const GG = new Set;
      return {
        add: bG => (GG.add(bG), () => {
          GG.delete(bG)
        }),
        fire() {
          for (const bG of GG) bG()
        }
      }
    }
    const pZ = Object.freeze([]);

    function fZ(GG, bG) {
      let ZG, {
        rereads: wG,
        followLocalId: SG
      } = bG;
      const yG = () => (ZG = (0, OG.n)(ZG, GG()), ZG);
      return {
        current: yG,
        watch(GG) {
          const bG = (0, KG.c)((bG => {
            wG(bG) && GG(yG())
          }));
          if (!SG) return bG;
          let ZG = (0, QG.i)();
          const kG = (0, LG.t)((() => {
            const bG = (0, QG.i)();
            bG !== ZG && (ZG = bG, GG(yG()))
          }));
          return () => {
            bG(), kG()
          }
        }
      }
    }
    const QZ = {
        players: fZ((function() {
          const GG = KG.f.ids(),
            bG = {};
          for (const LG of GG) {
            var ZG, wG, SG;
            bG[LG] = {
              name: null !== (ZG = KG.f.getName(LG)) && void 0 !== ZG ? ZG : null,
              ranks: null !== (wG = KG.f.getSetting(LG, "ranks")) && void 0 !== wG ? wG : pZ,
              cosmetics: null !== (SG = (0, KG.g)(LG)) && void 0 !== SG ? SG : null
            }
          }
          return {
            ids: GG,
            byId: bG,
            localId: (0, QG.i)()
          }
        }), {
          rereads: GG => "roster" !== GG.kind || GG.members || GG.settings.has("ranks"),
          followLocalId: !0
        }),
        lobbyLeaderboardRows: fZ((function() {
          const GG = {};
          for (const SG of KG.f.ids()) {
            var bG, ZG, wG;
            GG[SG] = {
              colour: null !== (bG = KG.f.getSetting(SG, "colorInLobbyLeaderboard")) && void 0 !== bG ? bG : null,
              values: null !== (ZG = KG.f.getSetting(SG, "lobbyLeaderboardValues")) && void 0 !== ZG ? ZG : null,
              tags: null !== (wG = KG.f.getSetting(SG, "lobbyLeaderboardTags")) && void 0 !== wG ? wG : null
            }
          }
          return GG
        }), {
          rereads: function(GG) {
            if ("roster" !== GG.kind) return "reset" === GG.kind;
            const {
              members: bG,
              settings: ZG
            } = GG;
            return bG || ZG.has("colorInLobbyLeaderboard") || ZG.has("lobbyLeaderboardValues") || ZG.has("lobbyLeaderboardTags")
          },
          followLocalId: !1
        })
      },
      KZ = {
        cosmeticsUpdated: {
          watch: GG => (0, KG.c)((bG => {
            if ("cosmetics" !== bG.kind) return;
            const ZG = (0, QG.i)();
            GG(bG.updates.map((GG => {
              let {
                IL: bG,
                FL: wG,
                vL: SG
              } = GG;
              return {
                local: bG === ZG,
                FL: wG,
                vL: SG
              }
            })))
          }))
        }
      };
    var hZ = ZG(2897),
      dZ = ZG(1702),
      JZ = ZG(647),
      rZ = ZG(41319);
    let zZ = !1,
      EZ = null;
    const oZ = {
      setShopOpen(GG) {
        var bG;
        null === (bG = (0, yG.f)()) || void 0 === bG || bG.send(aG.b.ShopMenuChanged, (0, aG.T)(GG))
      },
      buyShopItem(GG) {
        var bG;
        let {
          categoryKey: ZG,
          itemKey: wG,
          userInput: SG
        } = GG;
        null === (bG = (0, yG.f)()) || void 0 === bG || bG.send(aG.b.ItemBought, {
          categoryKey: ZG,
          itemKey: wG,
          shopVersion: zG.c.get("_shopVersion"),
          userInput: SG
        })
      }
    };
    let XZ = !1;
    var uZ = ZG(4842);
    const iZ = zb.t.LookFrozen | zb.t.ClicksSuppressed;

    function CZ(GG, bG) {
      var ZG;
      null !== (ZG = (0, yG.f)()) && void 0 !== ZG && ZG.send(GG, bG) || console.warn(`[bloxd-wasm-client] message ${GG} not sent: no live game or the core's command ring is full`)
    }(0, hG.l)(vG.mb, (GG => {
      const bG = (0, cG.f)(vG.mb, GG);
      void 0 !== bG && YG.l.xh("setDiscordReportKey", bG)
    }));
    const WZ = {
      ignorePlayer(GG) {
        CZ(aG.b.IgnoreUser, (0, aG.y)({
          hU: GG
        }))
      },
      reportPlayer(GG) {
        let {
          playerId: bG,
          chatMsgId: ZG,
          Uk: wG,
          details: SG
        } = GG;
        CZ(aG.b.UserReport, (0, aG.jb)({
          hV: bG,
          dV: ZG,
          Uk: wG,
          Yk: SG
        }))
      },
      reportWorldCodeChat(GG) {
        let {
          chatMsgId: bG,
          Uk: ZG,
          details: wG
        } = GG;
        CZ(aG.b.UserReport, (0, aG.jb)({
          hV: "",
          dV: bG,
          Uk: ZG,
          Yk: wG
        }))
      },
      requestDiscordReportKey(GG) {
        CZ(aG.b.ReqDiscordReportKey, (0, aG.L)(GG))
      },
      reportLobbyOrGame(GG) {
        let {
          target: bG,
          Uk: ZG,
          details: wG
        } = GG;
        "customGame" === bG ? CZ(aG.b.CustomGameReport, (0, aG.v)({
          Uk: ZG,
          Yk: wG
        })) : CZ(aG.b.LobbyReport, (0, aG.A)({
          Uk: ZG,
          Yk: wG
        }))
      },
      updateMyCosmetic(GG) {
        CZ(aG.b.UpdateMyCosmetic, (0, aG.gb)(GG))
      },
      holdEmoteWheel(GG) {
        !GG || ob ? (0, uZ.j)(iZ, GG ? iZ : 0) : YG.l.xh("requestEmoteWheelHoldRelease")
      }
    };
    var mZ = ZG(41421),
      IZ = ZG(9249),
      FZ = ZG(40001);
    const vZ = [0, 0, 0],
      aZ = [0, 0, 0],
      cZ = [0, 0, 0],
      lZ = {
        blockAtViewPoint(GG) {
          let {
            x: bG,
            y: ZG
          } = GG;
          const wG = (0, yG.f)();
          if (null === wG || void 0 === wG || !wG.renderFrame.hasView) return null;
          const {
            renderFrame: SG,
            clientApi: LG,
            api: kG
          } = wG;
          let UG = 0;
          return (0, FZ.f)(((GG, bG, ZG) => (UG = LG.getBlockId(GG, bG, ZG), 0 !== UG)), SG.cameraPosition, (0, FZ.g)((GG => EG.v.viewProj(kG.apiView, 0, GG)), bG, ZG, vZ), FZ.c, aZ, cZ) ? {
            pos: [aZ[0], aZ[1], aZ[2]],
            normal: [cZ[0], cZ[1], cZ[2]],
            name: (0, IZ.i)(UG)
          } : null
        }
      },
      jZ = {
        setBlockHighlight(GG) {
          var bG;
          null === (bG = (0, yG.f)()) || void 0 === bG || bG.setBlockHighlight(GG)
        }
      };
    var PZ = ZG(1910),
      MZ = ZG(41305),
      AZ = ZG(41423),
      sZ = ZG(4508),
      qZ = ZG(4485),
      nZ = ZG(41427),
      gZ = ZG(3267),
      eZ = ZG(3271);
    let RZ = null,
      TZ = null;

    function HZ(GG) {
      const bG = GG.startsWith(eZ.j),
        [ZG, wG = ZG, SG = ZG] = (bG ? GG.slice(eZ.j.length) : GG).split(eZ.h);
      return {
        top: ZG,
        left: wG,
        right: SG,
        half: bG
      }
    }

    function tZ(GG) {
      const bG = null === RZ ? void 0 : (0, gZ.c)(GG),
        ZG = void 0 === bG ? 0 : RZ.codes[bG];
      return 0 === ZG ? void 0 : RZ.pool[ZG - 1]
    }
    var DZ = ZG(3265),
      NZ = ZG(4470),
      OZ = ZG(4505),
      xZ = ZG(41344),
      BZ = ZG(41432);
    const Gw = "item:";
    let bw = null,
      Zw = null,
      ww = null,
      Sw = null,
      Lw = !1,
      yw = !1;

    function kw() {
      return yw || (yw = !0, (0, OZ.l)().then((GG => {
        GG && (0, PZ.d)()
      }))), ww ??= Promise.all([(0, DZ.e)(), (TZ ??= ZG.e(1).then((() => ZG(61154))).then((GG => {
        let {
          BLOCK_FACE_RUNS: bG,
          BLOCK_FACES: ZG,
          MAX_FACE_ITEM_ID: wG
        } = GG;
        RZ = {
          codes: (0, eZ.t)(bG, wG + 1),
          pool: ZG.split(eZ.o).map(HZ)
        }
      }), (GG => {
        throw TZ = null, GG
      })), TZ), (0, BZ.g)(), ZG.e(201).then((() => ZG(34492)))]).then((GG => {
        let [, , bG, ZG] = GG;
        bG.followBundledTextures(), bw = bG, Zw = ZG, (0, PZ.d)()
      }), (GG => {
        ww = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", GG)
      })), ww
    }

    function Uw(GG) {
      var bG, ZG;
      return null !== (bG = null === (ZG = (0, xZ.k)()) || void 0 === ZG ? void 0 : ZG.textureUrl(GG)) && void 0 !== bG ? bG : bw.itemSpriteUrl(GG)
    }

    function Yw(GG) {
      var bG, ZG;
      return null !== (bG = null === (ZG = (0, xZ.k)()) || void 0 === ZG ? void 0 : ZG.textureUrl(GG)) && void 0 !== bG ? bG : bw.blockTextureUrl(GG)
    }

    function Vw(GG) {
      var bG;
      return null !== (bG = (0, DZ.b)(GG)) && void 0 !== bG ? bG : GG
    }

    function pw(GG, bG) {
      var ZG, wG, SG;
      return null !== (ZG = null !== (wG = null !== (SG = Yw(GG)) && void 0 !== SG ? SG : null === bG || void 0 === bG ? void 0 : bG.rotated[GG]) && void 0 !== wG ? wG : null === bG || void 0 === bG ? void 0 : bG.animated[GG]) && void 0 !== ZG ? ZG : bw.notFoundUrl()
    }

    function fw(GG) {
      return void 0 !== (0, gZ.c)(GG) ? GG : /^[1-9][0-9]*$/.test(GG) ? (0, gZ.f)(Number(GG)) : void 0
    }

    function Qw(GG) {
      var bG;
      if (GG.startsWith(Gw)) {
        var ZG;
        const bG = (0, DZ.b)(GG.slice(5));
        return null !== (ZG = void 0 === bG ? null : Uw(bG)) && void 0 !== ZG ? ZG : bw.notFoundUrl()
      }
      return null !== (bG = bw.particleUrl(GG)) && void 0 !== bG ? bG : bw.notFoundUrl()
    }

    function Kw(GG, bG) {
      return "StairsBlock" === GG ? GG : bG ? "SlabBlock" : "CubeBlock"
    }
    const hw = {
        async blockIcon(GG) {
          var bG;
          let {
            name: wG,
            size: SG,
            lineWidth: LG
          } = GG;
          await kw();
          const yG = null !== (bG = fw(wG)) && void 0 !== bG ? bG : wG,
            kG = (0, OZ.d)(yG, SG, LG);
          if (null !== kG) return kG;
          const UG = tZ(yG),
            YG = (0, gZ.c)(yG),
            VG = void 0 === YG || null === Zw ? void 0 : Zw.itemTypeNameOf(YG);
          if (null === bw || void 0 === UG) return "";
          const pG = [UG.top, UG.left, UG.right].some((GG => null === Yw(GG))),
            fG = pG ? await (Sw ??= ZG.e(207).then((() => ZG(34575))).then((GG => (Lw && (Lw = !1, (0, PZ.d)()), {
              rotated: GG.rotatedBlockTextures,
              animated: GG.animatedBlockTextures
            })), (GG => (Sw = null, Lw = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", GG), null))), Sw) : null;
          if (pG && null === fG) return "";
          const QG = {
              top: pw(UG.top, fG),
              left: pw(UG.left, fG),
              right: pw(UG.right, fG),
              itemType: Kw(VG, UG.half)
            },
            KG = (0, xZ.g)(),
            hG = 0 === KG ? yG : `${yG}#${KG}`;
          return (await (0, NZ.d)()).drawBlockIconUrl(hG, SG, LG, (() => QG))
        }
      },
      dw = {
        itemIcon: function(GG) {
          var bG, ZG, SG, LG;
          if (null === bw) return kw(), wG.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(GG);
          if ((0, qZ.h)(GG)) return {
            kind: "icon",
            url: null !== (ZG = null !== (SG = null === (LG = (0, xZ.k)()) || void 0 === LG ? void 0 : LG.textureUrl(GG)) && void 0 !== SG ? SG : bw.ingameIconUrl(GG)) && void 0 !== ZG ? ZG : bw.notFoundUrl()
          };
          if (GG.startsWith(qZ.b)) return {
            kind: "icon",
            url: Qw(GG.slice(qZ.b.length))
          };
          if (0 === (0, gZ.j)()) return (0, nZ.e)(), wG.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(GG);
          const yG = null !== (bG = fw(GG)) && void 0 !== bG ? bG : GG,
            kG = (0, gZ.c)(yG),
            UG = void 0 === kG ? void 0 : Zw.itemTypeNameOf(kG);
          if (void 0 !== tZ(yG)) return {
            kind: "drawnBlock"
          };
          const YG = function(GG) {
            var bG;
            return null !== (bG = Uw(Vw(GG))) && void 0 !== bG ? bG : bw.notFoundUrl()
          }(yG);
          if ((0, OZ.h)(yG) && ! function(GG) {
              const bG = (0, xZ.k)();
              return null !== bG && (null !== bG.textureUrl(Vw(GG)) || null !== bG.modelUrl(GG))
            }(yG)) return {
            kind: "model",
            url: YG
          };
          if ("Gun" === UG) return {
            kind: "gun",
            url: YG
          };
          if (void 0 !== kG && "GrayscaleArmour" === Zw.itemTypeOf(kG) || Object.hasOwn(sZ.c, yG)) {
            var VG;
            const bG = null !== (VG = (0, sZ.d)(GG)) && void 0 !== VG ? VG : (0, sZ.d)(yG);
            if (bG) return {
              kind: "item",
              url: YG,
              tint: bG
            }
          }
          return {
            kind: "item",
            url: YG
          }
        },
        hasIcon: function(GG) {
          return void 0 !== fw(GG) || (0, qZ.h)(GG) || GG.startsWith(qZ.b)
        },
        isItemName: function(GG) {
          return void 0 !== fw(GG)
        }
      };
    var Jw = ZG(589),
      rw = ZG(40005);

    function zw(GG) {
      if (null === GG || void 0 === GG || !GG.isCoreRunning) return null;
      const {
        api: bG,
        chunks: ZG,
        items: wG,
        tables: SG
      } = GG;
      return {
        playerFeet() {
          const GG = bG.HJ(bG.localId);
          return null !== GG && void 0 !== GG && GG.every(Number.isFinite) ? GG : null
        },
        chunkBlocks: GG => ZG.isLoaded(GG[0], GG[1], GG[2]) ? (GG, bG, wG) => ZG.Gk(GG, bG, wG) : null,
        blockName: GG => SG.nameOfId(GG),
        inventory: () => ({
          slots: wG.playerItems().map((GG => GG ? {
            name: GG.name,
            amount: GG.amount
          } : null)),
          heldSlot: wG.selectedSlot
        }),
        nearby() {
          const ZG = [];
          for (let SG = 0; SG < bG.idStr.length; SG++) {
            var wG;
            const LG = bG.idStr[SG],
              yG = bG.serverIds[SG],
              kG = bG.kinds[SG];
            if (null === LG || bG.isLocal(yG) || kG >>> EG.b !== EG.r.Lifeform) continue;
            const UG = bG.HJ(yG),
              YG = Jw.m[kG & EG.c];
            UG && void 0 !== YG && ZG.push({
              kind: "Player" === YG ? "player" : YG,
              name: null !== (wG = GG.clientApi.getEntityName(LG)) && void 0 !== wG ? wG : null,
              position: UG
            })
          }
          return ZG
        },
        droppedItems() {
          let GG = 0;
          for (let ZG = 0; ZG < bG.idStr.length; ZG++) null !== bG.idStr[ZG] && bG.kinds[ZG] >>> EG.b === EG.r.Item && GG++;
          return GG
        }
      }
    }
    const Ew = {
        worldCodeAiChunk: GG => Promise.resolve((0, rw.d)(zw((0, yG.f)()), GG)),
        worldCodeAiGameState: () => Promise.resolve((0, rw.g)(zw((0, yG.f)())))
      },
      ow = function(GG) {
        const bG = VZ(),
          wG = VZ(),
          SG = new Set,
          LG = new Set,
          yG = () => {
            var bG, ZG;
            return null !== (bG = null === (ZG = GG.runtime()) || void 0 === ZG ? void 0 : ZG.currentViewer) && void 0 !== bG ? bG : null
          };
        let kG = null,
          UG = null;
        const VG = (GG, bG) => ({
            current: GG,
            watch(ZG) {
              let wG = GG();
              return bG.add((() => {
                const bG = GG();
                bG !== wG && (wG = bG, ZG(bG))
              }))
            }
          }),
          fG = GG => ({
            watch: bG => (GG.add(bG), () => {
              GG.delete(bG)
            })
          }),
          QG = GG => {
            const bG = yG(),
              ZG = null === bG || void 0 === bG ? void 0 : bG.view;
            bG && ZG && bG.seek(Math.max(0, Math.min(ZG.totalTicks - 1, ZG.Tp + GG * pG.Hd)))
          },
          KG = {
            replay: VG((() => {
              var GG;
              const bG = yG(),
                ZG = null !== (GG = null === bG || void 0 === bG ? void 0 : bG.view) && void 0 !== GG ? GG : null;
              return null === bG || null === ZG || ZG.state === pG.sd.None ? (kG = null, null) : (kG = (0, OG.n)(kG, {
                id: bG.id,
                Tp: ZG.Tp,
                totalTicks: ZG.totalTicks,
                Fv: pG.Hd,
                playing: ZG.state === pG.sd.Playing,
                speed: ZG.speed,
                cameraMode: ZG.cameraMode,
                freecam: "freecam" === ZG.cameraMode
              }), kG)
            }), bG),
            replayEdits: VG((() => {
              var GG;
              const bG = yG(),
                ZG = null !== (GG = null === bG || void 0 === bG ? void 0 : bG.view) && void 0 !== GG ? GG : null;
              return null === bG || null === ZG || ZG.state === pG.sd.None ? (UG = null, null) : (UG = (0, OG.n)(UG, {
                cameraKeyframes: [...bG.keyframes],
                playbackMark: ZG.mark,
                fileName: bG.fileName,
                unsavedChanges: bG.unsavedChanges,
                suggestSaveAs: bG.suggestSaveAs
              }), UG)
            }), bG),
            replayRecorder: VG((() => {
              var bG, ZG;
              return null !== (bG = null === (ZG = GG.runtime()) || void 0 === ZG ? void 0 : ZG.recorder.current) && void 0 !== bG ? bG : kZ.d.states.replayRecorder.current()
            }), wG),
            replayVideoExporting: {
              current: LZ.c,
              watch: GG => (0, YG.p)("replayViewer|videoExportChanged", (() => {
                GG((0, LZ.c)())
              }))
            }
          },
          hG = {
            replayUiActionRequested: fG(LG),
            replayViewerRequested: fG(SG)
          },
          dG = GG => {
            for (const bG of SG) bG(GG)
          },
          JG = () => {
            var wG;
            !0 === (null === (wG = yG()) || void 0 === wG ? void 0 : wG.isOpen) && Promise.all([ZG.e(98), ZG.e(67)]).then((() => ZG(61141))).then((ZG => {
              let {
                startWasmReplayVideoExport: wG
              } = ZG;
              return wG({
                viewer: yG,
                canvas: () => {
                  var bG, ZG;
                  return null !== (bG = null === (ZG = GG.canvas) || void 0 === ZG ? void 0 : ZG.call(GG)) && void 0 !== bG ? bG : null
                },
                watchViewer: bG.add,
                requestViewer: dG
              })
            }), (GG => {
              console.error("Couldn't load the video export", GG), yZ.NotificationProvider.showAlertPopup({
                title: "Video export failed",
                subtitle: "Check your connection, then try again."
              })
            })).catch((GG => {
              console.error("The video export failed", GG)
            }))
          },
          rG = {
            replayAction(GG) {
              if ((0, LZ.c)()) return;
              const bG = yG();
              switch (GG) {
                case "replaySkipBack":
                  QG(-1);
                  break;
                case "replaySkipForward":
                  QG(1);
                  break;
                case "replaySpeedUp":
                case "replaySpeedDown":
                  null !== bG && void 0 !== bG && bG.view && bG.setSpeed((0, SZ.j)(bG.view.speed, "replaySpeedUp" === GG ? "up" : "down"));
                  break;
                case "replayRecordKeyframe":
                  null === bG || void 0 === bG || bG.addKeyframe()
              }
            },
            setReplayPlaying(GG) {
              var bG, ZG;
              (0, LZ.c)() || (GG ? null === (bG = yG()) || void 0 === bG || bG.play() : null === (ZG = yG()) || void 0 === ZG || ZG.pause())
            },
            seekReplay(GG) {
              var bG;
              let {
                Tp: ZG,
                ignorePlaybackMark: wG
              } = GG;
              null === (bG = yG()) || void 0 === bG || bG.seek(ZG, null !== wG && void 0 !== wG && wG)
            },
            setReplayCameraMode(GG) {
              var bG;
              null === (bG = yG()) || void 0 === bG || bG.setCameraMode(GG)
            },
            syncReplayCameraMode() {},
            setReplayCameraKeyframe(GG) {
              var bG;
              null === (bG = yG()) || void 0 === bG || bG.setKeyframe(GG)
            },
            moveReplayCameraKeyframe(GG) {
              var bG;
              let {
                from: ZG,
                to: wG
              } = GG;
              null === (bG = yG()) || void 0 === bG || bG.moveKeyframe(ZG, wG)
            },
            deleteReplayCameraKeyframes(GG) {
              var bG;
              let {
                start: ZG,
                end: wG
              } = GG;
              null === (bG = yG()) || void 0 === bG || bG.deleteKeyframes(ZG, wG)
            },
            setReplayPlaybackMark(GG) {
              var bG;
              null === (bG = yG()) || void 0 === bG || bG.setMark(GG)
            },
            cropReplay(GG) {
              var bG, ZG;
              let {
                start: wG,
                end: SG
              } = GG;
              return !(0, LZ.c)() && (null !== (bG = null === (ZG = yG()) || void 0 === ZG ? void 0 : ZG.crop(wG, SG)) && void 0 !== bG && bG)
            },
            holdReplayForShaderPackFailure(GG) {
              const bG = yG();
              bG && (bG.holdForShaderPackFailure(), function(GG) {
                ZG.e(117).then((() => ZG(39633))).then((bG => {
                  let {
                    shaderPackPage: ZG
                  } = bG;
                  ZG.block(GG)
                })).catch((GG => {
                  console.warn("[bloxd-wasm-client] the shader pack could not be blocked", GG)
                }))
              }(GG))
            },
            exportReplayVideo() {
              JG()
            },
            toggleRecording() {
              var bG;
              null === (bG = GG.runtime()) || void 0 === bG || bG.recorder.toggleRecording()
            },
            saveClip() {
              var bG;
              null === (bG = GG.runtime()) || void 0 === bG || bG.recorder.saveClip()
            },
            setRecorderPrefs(bG) {
              var ZG;
              let {
                clipping: wG,
                clipSeconds: SG
              } = bG;
              null === (ZG = GG.runtime()) || void 0 === ZG || ZG.recorder.setPrefs(wG, SG)
            },
            setReplayViewerOpen(bG) {
              var ZG;
              (0, db.d)(bG) && (null === (ZG = GG.runtime()) || void 0 === ZG || ZG.recorder.viewerShown(bG))
            },
            recordFlyingMiddleText(bG) {
              var ZG;
              let {
                content: wG,
                cL: SG,
                angle: LG,
                lL: yG
              } = bG;
              null === (ZG = GG.runtime()) || void 0 === ZG || ZG.recorder.recordFlyingText(JSON.stringify(wG), SG, LG, yG)
            },
            dragReplayCamera(bG) {
              var ZG;
              let {
                dx: wG,
                dy: SG
              } = bG;
              null === (ZG = GG.freecam()) || void 0 === ZG || ZG.drag(wG, SG)
            },
            moveReplayFreecam(bG) {
              var ZG;
              null === (ZG = GG.freecam()) || void 0 === ZG || ZG.move(bG)
            },
            holdReplayFreecamVertical(bG) {
              var ZG;
              let {
                action: wG,
                Ik: SG
              } = bG;
              null === (ZG = GG.freecam()) || void 0 === ZG || ZG.holdVertical(wG, SG)
            }
          },
          zG = GG => {
            var bG;
            const ZG = yG(),
              wG = null !== (bG = null === ZG || void 0 === ZG ? void 0 : ZG.view) && void 0 !== bG ? bG : null;
            UZ.has(GG) ? (GG => {
              for (const bG of LG) bG(GG)
            })(GG) : YZ.has(GG) ? rG.replayAction(GG) : "replayPlayPause" === GG ? ZG && wG && wG.state !== pG.sd.None && rG.setReplayPlaying(wG.state !== pG.sd.Playing) : "replayChangeCameraMode" === GG ? null === ZG || void 0 === ZG || ZG.cycleCameraMode() : "replayExit" === GG ? !0 === (null === ZG || void 0 === ZG ? void 0 : ZG.inPlayback) && (0, lb.j)("/") : "replayExportVideo" === GG && JG()
          };
        let EG = !1;
        return {
          states: KG,
          events: hG,
          commands: rG,
          lookups: {
            replayCamera() {
              var bG, ZG, wG;
              return !0 !== (null === (bG = yG()) || void 0 === bG ? void 0 : bG.isOpen) ? null : null !== (ZG = null === (wG = GG.cameraView) || void 0 === wG ? void 0 : wG.call(GG)) && void 0 !== ZG ? ZG : null
            },
            leaveGameReloadsPage() {
              var GG;
              return !0 === (null === (GG = yG()) || void 0 === GG ? void 0 : GG.inPlayback)
            }
          },
          feed: {
            viewerChanged: () => {
              var GG;
              const ZG = !0 === (null === (GG = yG()) || void 0 === GG ? void 0 : GG.inPlayback);
              ZG !== EG && (EG = ZG, YG.l.xh("connectedGameChanged")), bG.fire()
            },
            recorderChanged: wG.fire,
            keyDown: GG => {
              var bG;
              switch (GG) {
                case "recordGame":
                  return void rG.toggleRecording();
                case "recordClip":
                  return void((0, db.b)() || rG.saveClip())
              }(0, LZ.c)() || ("replayViewerOpen" !== GG ? GG.startsWith("replay") && ((0, db.b)() || !0 === (null === (bG = yG()) || void 0 === bG ? void 0 : bG.inPlayback)) && zG(GG) : dG("toggle"))
            }
          }
        }
      }({
        runtime: SG.l,
        cameraView: () => {
          var GG;
          const bG = null === (GG = (0, yG.f)()) || void 0 === GG ? void 0 : GG.renderFrame;
          if (!bG) return null;
          const [ZG, wG, SG] = bG.cameraPosition, [LG, kG, UG] = bG.cameraDirection;
          return {
            position: [ZG, wG, SG],
            direction: [LG, kG, UG]
          }
        },
        canvas: () => {
          var GG, bG, ZG;
          return null !== (GG = null === (bG = (ZG = (0, LG.I)()).canvas) || void 0 === bG ? void 0 : bG.call(ZG)) && void 0 !== GG ? GG : null
        },
        freecam: SG.k
      }),
      Xw = {
        states: {
          ...Yb,
          ...Qb.l,
          ...ow.states,
          ...QZ,
          ...nG
        },
        events: {
          ...Vb,
          ...dG,
          ...Qb.g,
          ...WG.d,
          ...mZ.g,
          ...ow.events,
          ...KZ,
          ...CG.e
        },
        commands: {
          ...iG,
          ...pb,
          ...JG,
          ...Qb.d,
          ...Ob,
          ...WZ,
          ...CG.d,
          ...Mb,
          ...ow.commands,
          ...oZ,
          ...gG,
          ...jZ,
          ...Kb
        },
        queries: {
          ...Qb.i,
          ...Ew
        },
        lookups: {
          ...fb,
          ...jG,
          ...mZ.i,
          ...ow.lookups,
          ...uG,
          ...wZ,
          ...lZ,
          ...eG
        }
      };

    function uw() {
      (0, kG.h)(hG.n), (0, SG.m)(ow.feed), (0, WG.f)(), xb || (xb = !0, (0, hG.l)(vG.i, (GG => {
        const bG = (0, cG.f)(vG.i, GG);
        "string" === typeof bG && Promise.resolve().then((() => ZG(3647))).then((GG => {
          let {
            onCosmeticPackGranted: ZG
          } = GG;
          ZG(bG)
        }))
      })), (0, hG.l)(vG.hb, (GG => {
        const bG = (0, cG.f)(vG.hb, GG);
        "number" === typeof bG && YG.l.xh("serverUpdating", Date.now() + bG, !0)
      })), (0, hG.l)(vG.I, (GG => {
        const bG = (0, cG.f)(vG.I, GG);
        if ((0, cG.d)(bG)) {
          const {
            AS: GG,
            sS: ZG
          } = bG;
          (0, Db.e)({
            AS: "string" === typeof GG ? GG : null,
            sS: "string" === typeof ZG ? ZG : null
          })
        }
      })), (0, hG.l)(VG.jc.NewUiRequest, (GG => {
        const bG = (0, cG.j)(GG);
        (0, cG.d)(bG) && "number" === typeof bG.id && (0, cG.d)(bG.clientParameters) && (0, Nb.f)(bG.id, bG.clientParameters)
      })), (0, hG.l)(vG.Z, (GG => {
        const bG = (0, cG.f)(vG.Z, GG);
        "number" === typeof bG && (0, Nb.i)(bG)
      })), (0, hG.j)(Nb.c), (0, hG.l)(VG.jc.UiRequestPopup, (GG => {
        const bG = (0, cG.j)(GG);
        if ((0, cG.d)(bG) && "number" === typeof bG.id && "string" === typeof bG.text) {
          const GG = bG.id;
          (0, Nb.l)(GG, bG.text, !0 === bG.destructive, (bG => {
            Ob.answerUiRequest({
              id: GG,
              rV: bG
            })
          }))
        }
      })), (0, hG.l)(VG.jc.TopRightHelper, (GG => {
        const bG = (0, cG.j)(GG);
        void 0 !== bG && YG.l.xh("TopRightHelper", bG, !0)
      })), (0, hG.l)(VG.jc.TaskProgress, (GG => {
        const bG = (0, cG.j)(GG);
        (0, cG.d)(bG) && "string" === typeof bG.taskId && "number" === typeof bG.progress && (0, tb.b)({
          taskId: bG.taskId,
          progress: bG.progress
        })
      }))), XZ || (XZ = !0, (0, hG.l)(vG.q, (GG => {
        const bG = (0, cG.f)(vG.q, GG);
        (0, cG.d)(bG) && YG.l.xh("showShopFromServer", {
          toggle: bG.kG,
          UG: bG.UG
        }, !0)
      })), (0, hG.l)(VG.jc.OverShopInfo, (GG => {
        const bG = (0, cG.j)(GG);
        (0, cG.d)(bG) && YG.l.xh("overShopInfo", bG.info, !0)
      })), (0, hG.l)(VG.jc.ShowShopTutorial, (() => {
        YG.l.xh("showShopTutorial", null, !0)
      }))), zZ || (zZ = !0, (0, hG.f)((() => {
        var GG;
        (0, hZ.resetLeaveEvents)(), null === (GG = EZ) || void 0 === GG || GG(), EZ = (0, hG.d)() ? (0, JZ.g)(hG.d) : null, (0, hG.d)() || YG.l.QJ()
      })), (0, hG.l)(VG.jc.SetCookie, (GG => {
        const bG = (0, cG.j)(GG),
          ZG = (0, lb.d)().gameNameWithVariation;
        (0, cG.d)(bG) && "string" === typeof bG.key && null !== ZG && (0, dZ.setCookie)(ZG, bG.key, bG.value)
      })), (0, hG.l)(VG.jc.LeaveValues, (GG => {
        const bG = (0, cG.j)(GG);
        if ((0, cG.d)(bG) && "string" === typeof bG.leaveEventType) {
          const {
            leaveEventType: GG,
            category: ZG,
            subCategory: wG,
            value: SG
          } = bG;
          (0, hZ.updateLeaveValue)({
            leaveEventType: GG,
            category: ZG,
            subCategory: wG,
            value: SG
          })
        }
      })), (0, hG.l)(VG.jc.CustomAnalyticsEvent, (GG => {
        const bG = (0, cG.j)(GG);
        if ((0, cG.d)(bG) && "string" === typeof bG.cat1) {
          const {
            cat1: GG,
            cat2: ZG,
            cat3: wG,
            value: SG
          } = bG;
          (0, hZ.logCustomAnalyticsEvent)({
            cat1: GG,
            cat2: ZG,
            cat3: wG,
            value: SG
          })
        }
      })), (0, hG.l)(VG.jc.ProgressionEvent, (GG => {
        const bG = (0, cG.j)(GG);
        if ((0, cG.d)(bG)) {
          const {
            type: GG,
            location1: ZG,
            location2: wG,
            location3: SG,
            score: LG
          } = bG;
          (0, hZ.logProgressionEvent)({
            type: GG,
            location1: ZG,
            location2: wG,
            location3: SG,
            score: LG
          })
        }
      })), (0, hG.l)(VG.jc.ResourceEvent, (GG => {
        const bG = (0, cG.j)(GG);
        if ((0, cG.d)(bG)) {
          const {
            type: GG,
            resourceType: ZG,
            amount: wG,
            category: SG,
            itemName: LG
          } = bG;
          (0, hZ.logResourceEvent)({
            type: GG,
            resourceType: ZG,
            amount: wG,
            category: SG,
            itemName: LG
          })
        }
      })), (0, hG.l)(VG.jc.LeaderboardResponse, (GG => {
        const bG = (0, cG.j)(GG);
        if ((0, cG.d)(bG)) {
          const {
            category: GG,
            timeframe: ZG,
            data: wG
          } = bG;
          YG.l.xh("leaderboardResponse", {
            category: GG,
            timeframe: ZG,
            data: wG
          })
        }
      })), (0, hG.l)(vG.z, (GG => {
        const bG = (0, cG.f)(vG.z, GG);
        "string" === typeof bG && (0, rZ.c)(GG.conn, bG)
      })), (0, hG.l)(vG.A, (GG => {
        const bG = (0, cG.f)(vG.A, GG);
        "string" === typeof bG && console.error(`[logErrorToConsole]: ${bG}`)
      }))), MG(), (0, mZ.b)(), Pb || (Pb = !0, (0, hG.l)(vG.f, (GG => {
        const bG = (0, cG.f)(vG.f, GG);
        void 0 !== bG && (0, jb.l)(bG)
      }))), Hb(), Ib(), HG || (HG = !0, (0, LG.r)(tG)), wG.gameBridge.attach(Xw), (0, wG.installPageSources)({
        commands: {
          ...wG.DEFAULT_CLIENT_PAGE_SOURCES.commands,
          setChunkAddDistance: MZ.k
        },
        queries: hw,
        lookups: {
          ...wG.DEFAULT_CLIENT_PAGE_SOURCES.lookups,
          ...dw,
          Vr: MZ.c,
          drawCallStats: AZ.j
        }
      }), (0, PZ.d)(), kw()
    }
  },
  41344: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => VG,
      g: () => UG,
      k: () => kG,
      n: () => YG
    });
    var wG = ZG(1910);
    let SG = null,
      LG = 0;
    const yG = new Set;

    function kG() {
      return SG
    }

    function UG() {
      return LG
    }

    function YG(GG) {
      SG = GG, LG++, (0, wG.d)();
      for (const bG of yG) bG()
    }

    function VG(GG) {
      yG.add(GG)
    }
  },
  41432: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => yG,
      g: () => kG
    });
    var wG = ZG(41435);
    let SG = null,
      LG = null;

    function yG() {
      return SG ??= ZG.e(62).then((() => ZG(61162))).catch((GG => {
        throw SG = null, GG
      })), SG
    }

    function kG() {
      return LG ??= Promise.all([yG(), (0, wG.f)()]).then((GG => {
        let [bG] = GG;
        return bG
      }), (GG => {
        throw LG = null, GG
      })), LG
    }
  },
  37420: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => wG
    });
    const wG = {
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
  39435: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => wG,
      e: () => SG
    });
    const wG = ["description", "label"];

    function SG(GG) {
      const bG = GG.type;
      return {
        type: bG,
        params: GG[bG]
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);