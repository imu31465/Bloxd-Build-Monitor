export const id = 43;
export const ids = [43];
export const modules = {
  38582: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => qJ,
      f: () => eJ,
      j: () => UJ
    });
    const FJ = 6e3;

    function UJ(JJ, cJ) {
      return [Math.floor(JJ[0] / cJ) * cJ, Math.floor(JJ[1] / cJ) * cJ, Math.floor(JJ[2] / cJ) * cJ]
    }

    function eJ(JJ) {
      const cJ = (null !== JJ && void 0 !== JJ ? JJ : "").match(/-?\d+(?:\.\d+)?/g);
      return cJ && cJ.length >= 3 ? [Number(cJ[0]), Number(cJ[1]), Number(cJ[2])] : null
    }

    function XJ(JJ, cJ) {
      return JJ === cJ ? String(JJ) : `${JJ}-${cJ}`
    }

    function AJ(JJ, cJ, ZJ, FJ) {
      const UJ = [];
      let eJ = new Map;
      for (let XJ = JJ[2]; XJ < JJ[2] + cJ; XJ++) {
        const AJ = new Map;
        let qJ = JJ[0];
        for (; qJ < JJ[0] + cJ;) {
          const UJ = FJ(qJ, ZJ, XJ);
          let jJ = qJ;
          for (; jJ + 1 < JJ[0] + cJ && FJ(jJ + 1, ZJ, XJ) === UJ;) jJ++;
          if (null !== UJ) {
            const JJ = `${qJ} ${jJ} ${UJ}`,
              cJ = eJ.get(JJ);
            cJ ? (cJ.z1 = XJ, eJ.delete(JJ), AJ.set(JJ, cJ)) : AJ.set(JJ, {
              x0: qJ,
              x1: jJ,
              z0: XJ,
              z1: XJ,
              name: UJ
            })
          }
          qJ = jJ + 1
        }
        UJ.push(...eJ.values()), eJ = AJ
      }
      return UJ.push(...eJ.values()), UJ.sort(((JJ, cJ) => JJ.z0 - cJ.z0 || JJ.x0 - cJ.x0)).map((JJ => `x${XJ(JJ.x0,JJ.x1)} z${XJ(JJ.z0,JJ.z1)} ${JJ.name}`))
    }

    function qJ(JJ, cJ, ZJ, UJ) {
      let eJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : FJ;
      const qJ = [JJ[0] + cJ - 1, JJ[1] + cJ - 1, JJ[2] + cJ - 1],
        jJ = null !== UJ && UJ.every(((cJ, ZJ) => Math.floor(cJ) >= JJ[ZJ] && Math.floor(cJ) <= qJ[ZJ])),
        YJ = [`The chunk from ${JJ.join(" ")} to ${qJ.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
      null !== UJ && YJ.push(`The player's feet are at ${UJ.map(Math.floor).join(" ")}, ${jJ?"in this chunk":"outside this chunk"}.`);
      const hJ = [];
      for (let FJ = JJ[1]; FJ <= qJ[1]; FJ++) {
        const UJ = AJ(JJ, cJ, FJ, ZJ).join("; "),
          eJ = hJ[hJ.length - 1];
        (null === eJ || void 0 === eJ ? void 0 : eJ.boxes) === UJ ? eJ.to = FJ : hJ.push({
          from: FJ,
          to: FJ,
          boxes: UJ
        })
      }
      const DJ = hJ.filter((JJ => "" !== JJ.boxes));
      0 === DJ.length && YJ.push("It is all air.");
      let sJ = YJ.join("\n").length;
      for (const FJ of DJ) {
        const JJ = `y${XJ(FJ.from,FJ.to)}: ${FJ.boxes}`;
        if (sJ += JJ.length + 1, sJ > eJ) {
          YJ.push(`Cut short: the layers from y${FJ.from} up aren't shown, as there are too many blocks.`);
          break
        }
        YJ.push(JJ)
      }
      return YJ.join("\n")
    }
  },
  8088: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => UJ
    });
    var FJ = ZJ(13);

    function UJ() {
      return !FJ.d.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  35962: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => XJ,
      f: () => eJ,
      i: () => UJ
    });
    const FJ = [.25, .5, 1, 2, 4, 8, 16];

    function UJ(JJ, cJ) {
      const ZJ = FJ;
      let UJ = ZJ.indexOf(JJ);
      return -1 === UJ && (UJ = ZJ.findIndex((cJ => cJ >= JJ)), -1 === UJ && (UJ = ZJ.length - 1)), "up" === cJ ? ZJ[Math.min(UJ + 1, ZJ.length - 1)] : ZJ[Math.max(UJ - 1, 0)]
    }

    function eJ(JJ) {
      return JJ <= FJ[0]
    }

    function XJ(JJ) {
      return JJ >= FJ[FJ.length - 1]
    }
  },
  35562: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => UJ,
      e: () => eJ
    });
    let FJ = !1;

    function UJ() {
      return FJ
    }

    function eJ(JJ) {
      return FJ !== JJ && (FJ = JJ, !0)
    }
  },
  37914: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => eJ
    });
    var FJ = ZJ(17),
      UJ = ZJ(1725);

    function eJ(JJ) {
      let {
        taskId: cJ,
        progress: ZJ
      } = JJ;
      const FJ = UJ.b.get("_tasks");
      null !== FJ && void 0 !== FJ && FJ[cJ] && UJ.b.apply({
        _tasks: {
          ...FJ,
          [cJ]: {
            ...FJ[cJ],
            progress: ZJ
          }
        }
      })
    }
    FJ.i.subscribe("clientTaskProgress", (JJ => {
      eJ(JJ)
    }))
  },
  38562: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => DJ,
      h: () => nJ,
      k: () => jJ,
      o: () => hJ,
      q: () => qJ,
      s: () => XJ,
      u: () => YJ,
      v: () => GJ
    });
    var FJ = ZJ(1725),
      UJ = ZJ(17),
      eJ = ZJ(1739);
    const XJ = (0, eJ.r)((function() {
        var JJ, cJ, ZJ, UJ;
        return {
          health: null !== (JJ = FJ.b.get("_health")) && void 0 !== JJ ? JJ : null,
          maxHealth: null !== (cJ = FJ.b.get("_totalMaxHealth")) && void 0 !== cJ ? cJ : null,
          shield: null !== (ZJ = FJ.b.get("_shield")) && void 0 !== ZJ ? ZJ : null,
          maxShield: null !== (UJ = FJ.b.get("maxShield")) && void 0 !== UJ ? UJ : null
        }
      }), [], (0, eJ.n)("_health", "_totalMaxHealth", "_shield", "maxShield")),
      AJ = [{
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

    function qJ(JJ, cJ) {
      return AJ[(JJ ? 2 : 0) + (cJ ? 1 : 0)]
    }
    const jJ = (0, eJ.r)((function() {
      var JJ;
      return null !== (JJ = FJ.b.get("_aura")) && void 0 !== JJ ? JJ : null
    }), [], (0, eJ.n)("_aura"));

    function YJ(JJ) {
      return {
        watch: cJ => (0, UJ.j)("shotPlayer", (ZJ => {
          let {
            playerId: FJ,
            damage: UJ,
            wasCrit: eJ,
            distance: XJ
          } = ZJ;
          JJ(FJ) && cJ({
            damage: UJ,
            wasCrit: eJ,
            distance: XJ
          })
        }))
      }
    }

    function hJ(JJ) {
      return (0, eJ.d)("chat", (cJ => {
        let {
          serverChatMsgId: ZJ,
          content: FJ,
          chatterEId: UJ
        } = cJ;
        return {
          serverChatMsgId: null !== ZJ && void 0 !== ZJ ? ZJ : null,
          content: FJ,
          author: UJ ? JJ(UJ) : null
        }
      }))
    }
    class DJ {
      constructor() {
        this.shown = null, this.needed = null, this.neededSince = 0
      }
      update(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const ZJ = this.shown;
        return JJ !== this.needed && (this.needed = JJ, this.neededSince = cJ, null === JJ && (this.shown = null)), this.shown !== this.needed && cJ - this.neededSince > 200 && (this.shown = this.needed), this.shown !== ZJ
      }
    }

    function sJ(JJ) {
      return [{
        translationKey: `touchKeys:${JJ}`
      }]
    }
    const nJ = {
      open: sJ("open"),
      close: sJ("close"),
      milk: sJ("milk"),
      shear: sJ("shear"),
      tame: sJ("tame"),
      feed: sJ("feed"),
      ride: sJ("ride")
    };

    function GJ(JJ) {
      return [{
        translationKey: "touchKeys:tameWith"
      }, " ", {
        icon: JJ
      }]
    }
  },
  39508: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => AJ,
      d: () => XJ
    });
    var FJ = ZJ(2780);
    let UJ = null,
      eJ = null;

    function XJ() {
      return eJ ??= ZJ.e(193).then((() => ZJ(35454))).then((JJ => {
        let {
          ITEM_SPRITES: cJ,
          ITEM_SPRITES_WITHOUT_FILE: ZJ,
          ITEM_FILES_WITHOUT_SPRITE: eJ
        } = JJ;
        UJ = function(JJ, cJ, ZJ) {
          const UJ = new Set,
            eJ = (0, FJ.t)(cJ);
          let XJ = 0;
          for (const [FJ, AJ] of JJ.entries()) FJ === eJ[XJ] ? XJ++ : UJ.add(AJ);
          if ("" !== ZJ)
            for (const AJ of ZJ.split(FJ.n)) UJ.add(AJ);
          return UJ
        }(cJ.split(FJ.n), ZJ, eJ)
      }), (JJ => {
        throw eJ = null, JJ
      })), eJ
    }

    function AJ(JJ) {
      var cJ, ZJ;
      return null !== (cJ = null === (ZJ = UJ) || void 0 === ZJ ? void 0 : ZJ.has(JJ)) && void 0 !== cJ && cJ
    }
  },
  38559: (JJ, cJ, ZJ) => {
    function FJ(JJ, cJ, ZJ) {
      return Math.hypot(JJ[0] - cJ[0], JJ[1] - cJ[1], JJ[2] - cJ[2]) < ZJ + .5
    }
    ZJ.d(cJ, {
      d: () => FJ
    })
  },
  37931: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => YJ
    });
    var FJ = ZJ(1122),
      UJ = ZJ(1221),
      eJ = ZJ(13),
      XJ = ZJ(1201),
      AJ = ZJ(1213),
      qJ = ZJ(1406),
      jJ = ZJ(35554);

    function YJ(JJ) {
      let {
        WJ: cJ,
        gJ: ZJ
      } = JJ;
      const YJ = null !== cJ && void 0 !== cJ ? cJ : (0, AJ.e)().gameNameWithVariation;
      (0, FJ.K)(YJ) && ((0, jJ.i)(), (0, XJ.db)((() => {
        console.log("Received matchmaking order from game server to game", cJ), (0, eJ.h)("inGameReplay"), (0, qJ.navigatePreserveSearch)((0, UJ.c)(YJ, null !== ZJ && void 0 !== ZJ ? ZJ : void 0))
      }), "video_start"))
    }
  },
  38126: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => eJ
    });
    var FJ = ZJ(17),
      UJ = ZJ(1756);

    function eJ(JJ) {
      var cJ, ZJ;
      const eJ = (0, UJ.r)(null !== (cJ = null === (ZJ = UJ.z.toggleFreeCam) || void 0 === ZJ ? void 0 : ZJ[0]) && void 0 !== cJ ? cJ : null);
      FJ.i.Uf("showBottomMessage", {
        message: `Free Camera ${JJ?"Enabled":"Disabled"}${eJ?` - Press ${eJ} to toggle`:""}`,
        timeoutLength: 2e3,
        type: "Warning"
      })
    }
  },
  37922: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => qJ,
      f: () => XJ,
      i: () => AJ,
      k: () => jJ
    });
    var FJ = ZJ(17),
      UJ = ZJ(1247);
    const eJ = new Map;

    function XJ(JJ, cJ) {
      FJ.i.Uf("newUiRequest", {
        id: JJ,
        clientParameters: cJ
      }, !0)
    }

    function AJ(JJ) {
      FJ.i.Uf("removeUiRequest", JJ, !0);
      const cJ = eJ.get(JJ);
      cJ && (cJ.tearDownNotification(), eJ.delete(JJ))
    }

    function qJ() {
      FJ.i.Uf("clearUiRequests");
      for (const JJ of eJ.values()) JJ.tearDownNotification();
      eJ.clear()
    }

    function jJ(JJ, cJ, ZJ) {
      const FJ = UJ.NotificationProvider.showPromptPopup({
        title: cJ,
        confirmText: "general:yes",
        cancelText: "general:no",
        unlockPointerKey: "uiRequestPopup"
      });
      eJ.set(JJ, FJ), FJ.getResult().then((cJ => {
        eJ.delete(JJ), "notificationTornDown" !== cJ && ZJ(cJ)
      }))
    }
  },
  38578: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => hJ,
      g: () => DJ
    });
    var FJ = ZJ(157),
      UJ = ZJ(38582);
    const eJ = 20;

    function XJ(JJ) {
      return JJ.map(Math.floor).join(" ")
    }

    function AJ(JJ) {
      return null === JJ.amount || 1 === JJ.amount ? JJ.name : `${JJ.amount} ${JJ.name}`
    }
    var qJ = ZJ(38585),
      jJ = ZJ(1725),
      YJ = ZJ(1213);

    function hJ(JJ, cJ) {
      if (!JJ) return qJ.b;
      const ZJ = JJ.playerFeet();
      if (!ZJ) return "The player isn't in the world yet, so no blocks can be seen.";
      const eJ = FJ.c.Kn,
        XJ = (0, UJ.j)(null !== cJ && void 0 !== cJ ? cJ : ZJ, eJ),
        AJ = JJ.chunkBlocks(XJ);
      return AJ ? (0, UJ.c)(XJ, eJ, ((cJ, ZJ, FJ) => {
        const UJ = AJ(cJ, ZJ, FJ);
        return 0 === UJ ? null : JJ.blockName(UJ).split("|")[0]
      }), ZJ) : `The chunk from ${XJ.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${ZJ.map(Math.floor).join(" ")}.`
    }

    function DJ(JJ) {
      var cJ, ZJ, FJ;
      if (!JJ) return qJ.c;
      const UJ = JJ.playerFeet();
      if (!UJ) return "The player isn't in the world yet, so nothing in it can be seen.";
      const {
        slots: hJ,
        heldSlot: DJ
      } = JJ.inventory();
      return function(JJ) {
        const cJ = [];
        null !== JJ.game && cJ.push(`Game: ${JJ.game}.`);
        const ZJ = null === JJ.health ? "" : `, health ${Math.round(JJ.health)}${null===JJ.maxHealth?"":` of ${Math.round(JJ.maxHealth)}`}`;
        cJ.push(`The player (the creator) stands at ${XJ(JJ.position)}${ZJ}, ${JJ.creative?"in":"not in"} creative mode.`);
        const FJ = JJ.slots[JJ.heldSlot];
        cJ.push(FJ ? `Holding (slot ${JJ.heldSlot}): ${AJ(FJ)}.` : `Holding nothing (slot ${JJ.heldSlot} is empty).`);
        const UJ = JJ.slots.flatMap(((JJ, cJ) => JJ ? [`slot ${cJ}: ${AJ(JJ)}`] : []));
        cJ.push(UJ.length > 0 ? `Inventory: ${UJ.join(", ")}.` : "Inventory: empty.");
        const qJ = cJ => Math.hypot(cJ.position[0] - JJ.position[0], cJ.position[1] - JJ.position[1], cJ.position[2] - JJ.position[2]),
          jJ = [...JJ.nearby].sort(((JJ, cJ) => qJ(JJ) - qJ(cJ)));
        if (0 === jJ.length) cJ.push("No other players or mobs are near enough to see.");
        else {
          cJ.push("Near them, nearest first:");
          for (const JJ of jJ.slice(0, eJ)) {
            const ZJ = "player" === JJ.kind ? `player "${JJ.name||"?"}"` : JJ.name && JJ.name !== JJ.kind ? `${JJ.kind} "${JJ.name}"` : JJ.kind,
              FJ = Math.round(qJ(JJ));
            cJ.push(`- ${ZJ} at ${XJ(JJ.position)}, ${FJ} block${1===FJ?"":"s"} away`)
          }
          jJ.length > eJ && cJ.push(`- and ${jJ.length-eJ} more further away`)
        }
        return JJ.droppedItems > 0 && cJ.push(`${JJ.droppedItems} dropped item${1===JJ.droppedItems?" is":"s are"} on the ground nearby.`), cJ.join("\n")
      }({
        game: null !== (cJ = (0, YJ.e)().gameNameWithVariation) && void 0 !== cJ ? cJ : null,
        position: UJ,
        health: null !== (ZJ = jJ.b.get("_health")) && void 0 !== ZJ ? ZJ : null,
        maxHealth: null !== (FJ = jJ.b.get("_totalMaxHealth")) && void 0 !== FJ ? FJ : null,
        creative: !0 === jJ.b.get("creative"),
        heldSlot: DJ,
        slots: hJ,
        nearby: JJ.nearby(),
        droppedItems: JJ.droppedItems()
      })
    }
  },
  37948: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => AJ,
      f: () => qJ,
      h: () => jJ
    });
    var FJ = ZJ(1122),
      UJ = ZJ(889),
      eJ = ZJ(35886),
      XJ = ZJ(17);

    function AJ(JJ) {
      let {
        lobbyName: cJ,
        gameNameWithVariation: ZJ
      } = JJ;
      return !(0, FJ.N)(cJ) || null !== ZJ && (ZJ.startsWith("testGym") || (0, UJ.k)(ZJ))
    }

    function qJ(JJ) {
      return JJ.JJ === eJ.e.Leave || JJ.JJ === eJ.e.Cursor
    }

    function jJ(JJ) {
      XJ.i.Uf("codeCollab", {
        type: JJ.JJ,
        docKey: JJ.cJ,
        version: JJ.ZJ,
        editorCount: JJ.FJ,
        peers: JJ.UJ,
        updates: JJ.eJ,
        playerId: JJ.XJ,
        playerName: JJ.AJ,
        colour: JJ.qJ,
        anchor: JJ.jJ,
        head: JJ.YJ,
        existingCursors: JJ.hJ,
        files: JJ.DJ,
        engineSettings: JJ.sJ
      })
    }
  },
  39478: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      C: () => gJ,
      D: () => BJ,
      E: () => kJ,
      G: () => bJ,
      K: () => PJ,
      O: () => MJ,
      S: () => uJ,
      W: () => CJ,
      Z: () => WJ,
      e: () => iJ,
      i: () => dJ,
      j: () => SJ,
      m: () => RJ,
      p: () => IJ,
      q: () => yJ,
      u: () => pJ,
      w: () => wJ,
      z: () => HJ
    });
    var FJ = ZJ(1294),
      UJ = ZJ(17),
      eJ = ZJ(1184),
      XJ = ZJ(2146),
      AJ = ZJ(4217),
      qJ = ZJ(4176);
    let jJ, YJ = !1,
      hJ = !1,
      DJ = !1,
      sJ = !1;
    const nJ = 1300,
      GJ = 3e3;
    let fJ = 0,
      xJ = !1,
      rJ = !1,
      vJ = 0;
    const mJ = 2;
    let QJ = !1,
      EJ = !1;
    const VJ = new Set,
      KJ = new Set;

    function yJ() {
      return YJ
    }

    function SJ() {
      return rJ
    }

    function IJ() {
      return EJ
    }

    function MJ() {
      return (0, eJ.j)() && !EJ
    }

    function bJ(JJ) {
      let cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (JJ !== EJ) {
        EJ = JJ;
        for (const JJ of [...KJ]) JJ(EJ);
        cJ && CJ()
      }
    }

    function wJ(JJ) {
      return KJ.add(JJ), () => {
        KJ.delete(JJ)
      }
    }

    function WJ() {
      (0, AJ.g)(XJ.D.Menu, (0, eJ.j)() ? 0 : XJ.D.Menu)
    }

    function gJ() {
      rJ = !1, vJ = 0, WJ(), CJ()
    }

    function HJ(JJ) {
      return VJ.add(JJ), () => {
        VJ.delete(JJ)
      }
    }

    function PJ(JJ) {
      hJ = !1, JJ !== YJ && (YJ = JJ, sJ = !1, clearTimeout(jJ), DJ = !YJ && QJ, YJ ? (xJ = !1, rJ = !1, vJ = 0) : MJ() && !QJ && (rJ = !0), QJ = !1, YJ && !MJ() && aJ(), tJ(), DJ && CJ())
    }

    function kJ(JJ) {
      JJ !== xJ && (xJ = JJ, JJ || CJ())
    }

    function pJ() {
      hJ = !1, sJ || !0 !== OJ() || (sJ = !0, clearTimeout(jJ), jJ = setTimeout(zJ, nJ))
    }

    function dJ() {
      return (!hJ || performance.now() - fJ > GJ) && (hJ = (0, qJ.F)().lockPointer(), fJ = performance.now()), hJ
    }

    function zJ() {
      NJ() && TJ() && dJ()
    }

    function NJ() {
      return MJ() && !YJ && !xJ && !(0, FJ.e)()
    }

    function OJ() {
      var JJ;
      return "undefined" === typeof navigator || null === (JJ = navigator.userActivation) || void 0 === JJ ? void 0 : JJ.isActive
    }

    function TJ() {
      return DJ && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== OJ()
    }

    function CJ() {
      MJ() ? NJ() && !rJ && TJ() && dJ() : YJ && !QJ && aJ()
    }

    function uJ() {
      rJ ? navigator.vendor.startsWith("Apple") ? LJ() : vJ = mJ : CJ()
    }

    function iJ() {
      vJ > 0 && 0 === --vJ && LJ()
    }

    function RJ() {
      vJ = 0
    }

    function LJ() {
      NJ() && !0 === OJ() && dJ()
    }

    function aJ() {
      QJ = !0, (0, qJ.F)().unlockPointer()
    }

    function BJ() {
      hJ = !1, DJ = !1, sJ = !1, clearTimeout(jJ), xJ = !1, rJ = !1, vJ = 0, QJ = !1;
      const JJ = YJ;
      YJ = !1, JJ && tJ()
    }

    function tJ() {
      for (const JJ of [...VJ]) JJ(YJ);
      UJ.i.Uf("pointerLockUpdate", YJ)
    }
  },
  39452: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => DJ,
      f: () => AJ,
      j: () => hJ,
      n: () => jJ,
      o: () => XJ,
      r: () => YJ,
      v: () => qJ
    });
    let FJ = null,
      UJ = null,
      eJ = null;

    function XJ(JJ) {
      FJ = JJ
    }

    function AJ() {
      return FJ
    }

    function qJ(JJ) {
      UJ = JJ
    }

    function jJ() {
      return UJ
    }

    function YJ(JJ) {
      eJ = JJ
    }

    function hJ() {
      return eJ
    }

    function DJ() {
      var JJ, cJ;
      return !0 === (null === (JJ = UJ) || void 0 === JJ || null === (cJ = JJ.currentViewer) || void 0 === cJ ? void 0 : cJ.inPlayback)
    }
  },
  39490: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      loadIcons: () => IJ,
      setIconFileOverrides: () => MJ,
      wasmIconLookups: () => dJ,
      wasmIconQueries: () => pJ
    });
    var FJ = ZJ(3917),
      UJ = ZJ(3880),
      eJ = ZJ(39494),
      XJ = ZJ(1717),
      AJ = ZJ(1703),
      qJ = ZJ(2778),
      jJ = ZJ(2780);
    let YJ = null,
      hJ = null;

    function DJ(JJ) {
      const cJ = JJ.startsWith(jJ.i),
        [ZJ, FJ = ZJ, UJ = ZJ] = (cJ ? JJ.slice(jJ.i.length) : JJ).split(jJ.h);
      return {
        top: ZJ,
        left: FJ,
        right: UJ,
        half: cJ
      }
    }

    function sJ(JJ) {
      const cJ = null === YJ ? void 0 : (0, qJ.c)(JJ),
        ZJ = void 0 === cJ ? 0 : YJ.codes[cJ];
      return 0 === ZJ ? void 0 : YJ.pool[ZJ - 1]
    }
    var nJ = ZJ(2769),
      GJ = ZJ(3864),
      fJ = ZJ(3911),
      xJ = ZJ(39499);
    const rJ = "item:";
    let vJ = null,
      mJ = null,
      QJ = null,
      EJ = null,
      VJ = !1,
      KJ = !1,
      yJ = null,
      SJ = 0;

    function IJ() {
      return KJ || (KJ = !0, (0, fJ.j)().then((JJ => {
        JJ && (0, XJ.b)()
      }))), QJ ??= Promise.all([(0, nJ.i)(), (hJ ??= ZJ.e(1).then((() => ZJ(41276))).then((JJ => {
        let {
          BLOCK_FACE_RUNS: cJ,
          BLOCK_FACES: ZJ,
          MAX_FACE_ITEM_ID: FJ
        } = JJ;
        YJ = {
          codes: (0, jJ.x)(cJ, FJ + 1),
          pool: ZJ.split(jJ.n).map(DJ)
        }
      }), (JJ => {
        throw hJ = null, JJ
      })), hJ), (0, xJ.h)(), ZJ.e(200).then((() => ZJ(35740)))]).then((JJ => {
        let [, , cJ, ZJ] = JJ;
        cJ.followBundledTextures(), vJ = cJ, mJ = ZJ, (0, XJ.b)()
      }), (JJ => {
        QJ = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", JJ)
      })), QJ
    }

    function MJ(JJ) {
      yJ = JJ, SJ++, (0, XJ.b)()
    }

    function bJ(JJ) {
      var cJ, ZJ;
      return null !== (cJ = null === (ZJ = yJ) || void 0 === ZJ ? void 0 : ZJ.itemSprite(JJ)) && void 0 !== cJ ? cJ : vJ.itemSpriteUrl(JJ)
    }

    function wJ(JJ) {
      var cJ, ZJ;
      return null !== (cJ = null === (ZJ = yJ) || void 0 === ZJ ? void 0 : ZJ.blockTexture(JJ)) && void 0 !== cJ ? cJ : vJ.blockTextureUrl(JJ)
    }

    function WJ(JJ) {
      var cJ;
      return null !== (cJ = (0, nJ.e)(JJ)) && void 0 !== cJ ? cJ : JJ
    }

    function gJ(JJ, cJ) {
      var ZJ, FJ, UJ;
      return null !== (ZJ = null !== (FJ = null !== (UJ = wJ(JJ)) && void 0 !== UJ ? UJ : null === cJ || void 0 === cJ ? void 0 : cJ.rotated[JJ]) && void 0 !== FJ ? FJ : null === cJ || void 0 === cJ ? void 0 : cJ.animated[JJ]) && void 0 !== ZJ ? ZJ : vJ.notFoundUrl()
    }

    function HJ(JJ) {
      return void 0 !== (0, qJ.c)(JJ) ? JJ : /^[1-9][0-9]*$/.test(JJ) ? (0, qJ.e)(Number(JJ)) : void 0
    }

    function PJ(JJ) {
      var cJ;
      if (JJ.startsWith(rJ)) {
        var ZJ;
        const cJ = (0, nJ.e)(JJ.slice(5));
        return null !== (ZJ = void 0 === cJ ? null : bJ(cJ)) && void 0 !== ZJ ? ZJ : vJ.notFoundUrl()
      }
      return null !== (cJ = vJ.particleUrl(JJ)) && void 0 !== cJ ? cJ : vJ.notFoundUrl()
    }

    function kJ(JJ, cJ) {
      return "StairsBlock" === JJ ? JJ : cJ ? "SlabBlock" : "CubeBlock"
    }
    const pJ = {
        async blockIcon(JJ) {
          var cJ;
          let {
            name: FJ,
            size: UJ,
            lineWidth: eJ
          } = JJ;
          await IJ();
          const AJ = null !== (cJ = HJ(FJ)) && void 0 !== cJ ? cJ : FJ,
            jJ = (0, fJ.b)(AJ, UJ, eJ);
          if (null !== jJ) return jJ;
          const YJ = sJ(AJ),
            hJ = (0, qJ.c)(AJ),
            DJ = void 0 === hJ || null === mJ ? void 0 : mJ.itemTypeNameOf(hJ);
          if (null === vJ || void 0 === YJ) return "";
          const nJ = [YJ.top, YJ.left, YJ.right].some((JJ => null === wJ(JJ))),
            xJ = nJ ? await (EJ ??= ZJ.e(187).then((() => ZJ(33439))).then((JJ => (VJ && (VJ = !1, (0, XJ.b)()), {
              rotated: JJ.rotatedBlockTextures,
              animated: JJ.animatedBlockTextures
            })), (JJ => (EJ = null, VJ = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", JJ), null))), EJ) : null;
          if (nJ && null === xJ) return "";
          const rJ = {
              top: gJ(YJ.top, xJ),
              left: gJ(YJ.left, xJ),
              right: gJ(YJ.right, xJ),
              itemType: kJ(DJ, YJ.half)
            },
            QJ = 0 === SJ ? AJ : `${AJ}#${SJ}`;
          return (await (0, GJ.c)()).drawBlockIconUrl(QJ, UJ, eJ, (() => rJ))
        }
      },
      dJ = {
        itemIcon: function(JJ) {
          var cJ, ZJ;
          if (null === vJ) return IJ(), AJ.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(JJ);
          if ((0, UJ.h)(JJ)) return {
            kind: "icon",
            url: null !== (ZJ = vJ.ingameIconUrl(JJ)) && void 0 !== ZJ ? ZJ : vJ.notFoundUrl()
          };
          if (JJ.startsWith(UJ.c)) return {
            kind: "icon",
            url: PJ(JJ.slice(UJ.c.length))
          };
          if (0 === (0, qJ.h)()) return (0, eJ.b)(), AJ.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(JJ);
          const XJ = null !== (cJ = HJ(JJ)) && void 0 !== cJ ? cJ : JJ,
            jJ = (0, qJ.c)(XJ),
            YJ = void 0 === jJ ? void 0 : mJ.itemTypeNameOf(jJ);
          if (void 0 !== sJ(XJ)) return {
            kind: "drawnBlock"
          };
          const hJ = function(JJ) {
            var cJ;
            return null !== (cJ = bJ(WJ(JJ))) && void 0 !== cJ ? cJ : vJ.notFoundUrl()
          }(XJ);
          if ((0, fJ.f)(XJ) && ! function(JJ) {
              return null !== yJ && (null !== yJ.itemSprite(WJ(JJ)) || null !== yJ.model(JJ))
            }(XJ)) return {
            kind: "model",
            url: hJ
          };
          if ("Gun" === YJ) return {
            kind: "gun",
            url: hJ
          };
          if (void 0 !== jJ && "GrayscaleArmour" === mJ.itemTypeOf(jJ) || Object.hasOwn(FJ.d, XJ)) {
            var DJ;
            const cJ = null !== (DJ = (0, FJ.f)(JJ)) && void 0 !== DJ ? DJ : (0, FJ.f)(XJ);
            if (cJ) return {
              kind: "item",
              url: hJ,
              tint: cJ
            }
          }
          return {
            kind: "item",
            url: hJ
          }
        },
        hasIcon: function(JJ) {
          return void 0 !== HJ(JJ) || (0, UJ.h)(JJ) || JJ.startsWith(UJ.c)
        },
        isItemName: function(JJ) {
          return void 0 !== HJ(JJ)
        }
      }
  },
  39445: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      attachPlayGameSources: () => wZ,
      playGameSources: () => bZ
    });
    var FJ = ZJ(1703),
      UJ = ZJ(39452),
      eJ = ZJ(4176),
      XJ = ZJ(39360),
      AJ = ZJ(39459),
      qJ = ZJ(38562),
      jJ = ZJ(17),
      YJ = ZJ(4198),
      hJ = ZJ(4189),
      DJ = ZJ(39401),
      sJ = ZJ(39426),
      nJ = ZJ(39465),
      GJ = ZJ(39410);
    (0, GJ.k)(YJ.Lb.Chat, (JJ => {
      if (JJ.payloadKind !== hJ.bc.Msgpack) return;
      const cJ = function(JJ) {
        if (null === JJ || "object" !== typeof JJ || !("content" in JJ)) return null;
        const {
          chatMsgId: cJ,
          content: ZJ,
          chatterEId: FJ
        } = JJ;
        return {
          serverChatMsgId: null !== cJ && void 0 !== cJ ? cJ : void 0,
          content: ZJ,
          chatterEId: void 0 === FJ || null === FJ ? void 0 : String(FJ)
        }
      }((0, DJ.b)(JJ.payload));
      null !== cJ && jJ.i.Uf("chat", cJ, !0)
    }));
    const fJ = {
        chatReceived: (0, qJ.o)((function(JJ) {
          var cJ, ZJ, FJ;
          return {
            id: JJ,
            name: null !== (cJ = nJ.f.getName(JJ)) && void 0 !== cJ ? cJ : null,
            local: (0, sJ.f)() === JJ,
            profileEffect: null !== (ZJ = null === (FJ = (0, nJ.g)(JJ)) || void 0 === FJ ? void 0 : FJ.profileEffect) && void 0 !== ZJ ? ZJ : null
          }
        }))
      },
      xJ = {
        sendChatMessage(JJ) {
          var cJ;
          let {
            JY: ZJ,
            channelName: FJ
          } = JJ;
          null === (cJ = (0, XJ.j)()) || void 0 === cJ || cJ.clientApi.sendChat(ZJ, FJ)
        }
      };
    var rJ = ZJ(157),
      vJ = ZJ(1725),
      mJ = ZJ(39354),
      QJ = ZJ(38559);
    const EJ = [0, 0, 0],
      VJ = {
        codeBlockClickable(JJ) {
          var cJ;
          const ZJ = (0, XJ.j)();
          if (null === ZJ || void 0 === ZJ || !ZJ.isSessionLive) return !1;
          const FJ = ZJ.api;
          if (0 !== (mJ.s.playerFlags(FJ.apiView, 0) & mJ.Ad.Crouching)) return !1;
          const UJ = FJ.queries.directorEntity(FJ.localId) >= mJ.mb.BYTES ? FJ.memoryData(FJ.scratch(), mJ.mb.BYTES, 8, "the local player's DirectorEntity") : null;
          if (null === UJ) return !1;
          for (let eJ = 0; eJ < 3; eJ++) EJ[eJ] = mJ.mb.feet(UJ, 0, eJ);
          return EJ[1] += mJ.mb.eyeHeight(UJ, 0), (0, QJ.d)(EJ, JJ, null !== (cJ = vJ.b.get("blockReach")) && void 0 !== cJ ? cJ : rJ.c.Tv)
        }
      },
      KJ = {
        clickCodeBlock(JJ) {
          var cJ;
          null === (cJ = (0, XJ.j)()) || void 0 === cJ || cJ.clickCodeBlock(JJ)
        }
      };
    var yJ = ZJ(39376),
      SJ = ZJ(39470),
      IJ = ZJ(889),
      MJ = ZJ(37992),
      bJ = ZJ(4171),
      wJ = ZJ(39394),
      WJ = ZJ(39368),
      gJ = ZJ(39399);

    function HJ(JJ) {
      if (null === JJ) return null;
      const cJ = [];
      for (const ZJ of JJ) {
        const JJ = Object.keys(ZJ)[0];
        if ("Gc" === JJ) {
          const {
            str: JJ,
            style: FJ,
            clickableUrl: UJ
          } = ZJ.Gc, eJ = Object.keys(JJ)[0], XJ = JJ[eJ];
          "string" !== eJ && "styledEntityName" !== eJ && "styledTranslatedText" !== eJ || cJ.push({
            str: XJ,
            style: FJ,
            clickableUrl: UJ
          })
        } else cJ.push(ZJ[JJ])
      }
      return cJ
    }
    const PJ = {
      screenPos(JJ) {
        var cJ, ZJ;
        return null !== (cJ = null === (ZJ = (0, XJ.j)()) || void 0 === ZJ ? void 0 : ZJ.renderFrame.projectWorldPosToScreenPos(JJ)) && void 0 !== cJ ? cJ : {
          x: 0,
          y: 0
        }
      }
    };
    let kJ = !1;

    function pJ() {
      kJ || (kJ = !0, (0, GJ.k)(YJ.Lb.ProgressBarUpdate, (JJ => {
        const cJ = (0, gJ.g)(JJ);
        (0, gJ.c)(cJ) && jJ.i.Uf("progressBarUpdate", cJ, !0)
      })), (0, GJ.k)(wJ.y, (JJ => {
        const cJ = (0, gJ.d)(wJ.y, JJ);
        cJ && jJ.i.Uf("middleScreenBarInitiate", {
          duration: cJ.nJ,
          GJ: cJ.GJ,
          horizBarRemOffset: cJ.fJ
        }, !0)
      })), (0, GJ.k)(YJ.Lb.RemoveMiddleScreenBar, (() => {
        jJ.i.Uf("middleScreenBarRemove")
      })), (0, GJ.k)(wJ.eb, (JJ => {
        const cJ = (0, gJ.d)(wJ.eb, JJ);
        if (cJ) {
          var ZJ;
          const JJ = cJ.iJ ? null === (ZJ = (0, XJ.j)()) || void 0 === ZJ ? void 0 : ZJ.renderFrame.projectDirectionToScreenPos(cJ.iJ) : void 0;
          jJ.i.Uf("sendHitmarker", {
            hU: cJ.hU,
            screenPos: JJ
          }, !0)
        }
      })), (0, GJ.k)(wJ.jb, (JJ => {
        const cJ = (0, gJ.d)(wJ.jb, JJ);
        if (cJ) {
          const {
            id: JJ,
            position: ZJ,
            style: FJ,
            nc: UJ,
            vc: eJ
          } = cJ;
          jJ.i.Uf("setDirectionArrow", {
            id: JJ,
            position: ZJ,
            style: FJ,
            text: HJ(UJ),
            vc: eJ
          }, !0)
        }
      })), (0, GJ.k)(wJ.g, (JJ => {
        const cJ = (0, gJ.d)(wJ.g, JJ);
        cJ && jJ.i.Uf("clearDirectionArrow", {
          id: cJ.id
        }, !0)
      })), (0, GJ.k)(wJ.p, (JJ => {
        const cJ = (0, gJ.d)(wJ.p, JJ);
        cJ && jJ.i.Uf("flyingMiddleMessage", {
          content: HJ(cJ.zF),
          NF: cJ.NF,
          TF: cJ.TF
        }, !0)
      })), (0, GJ.k)(YJ.Lb.WorldVariation, (JJ => {
        const cJ = (0, gJ.g)(JJ);
        if ("string" === typeof cJ) {
          const JJ = cJ === IJ.h ? null : {
            message: `Currently loaded as variation: ${cJ}`,
            type: "Warning"
          };
          jJ.i.Uf("showPermanentBottomMessage", JJ, !0)
        }
      })), (0, GJ.k)(wJ.N, (JJ => {
        const cJ = (0, gJ.d)(wJ.N, JJ);
        cJ && function(JJ, cJ) {
          const {
            type: ZJ,
            params: FJ
          } = (0, MJ.d)(cJ), UJ = {
            ...FJ
          };
          for (const eJ of MJ.b) UJ[eJ] && (UJ[eJ] = HJ(UJ[eJ]));
          bJ.c.queueQTE(JJ, ZJ, UJ).getResult().then((cJ => {
            var ZJ;
            "boolean" === typeof cJ && (null === (ZJ = (0, XJ.j)()) || void 0 === ZJ || ZJ.send(WJ.d.QteResponse, {
              qteId: JJ,
              qteResponse: cJ
            }))
          }))
        }(cJ.id, cJ.mU)
      })), (0, GJ.k)(wJ.Y, (JJ => {
        const cJ = (0, gJ.d)(wJ.Y, JJ);
        "number" === typeof cJ && bJ.c.cancelQTE(cJ)
      })), (0, GJ.e)((() => {
        bJ.c.reset(), jJ.i.Uf("showPermanentBottomMessage", null, !0)
      })), (0, GJ.i)((() => {
        bJ.c.reset()
      })), (0, GJ.k)(YJ.Lb.EditItemCraftingRecipes, (JJ => {
        const cJ = (0, gJ.g)(JJ);
        (0, gJ.c)(cJ) && jJ.i.Uf("craftingRecipesEdited", {
          itemName: cJ.craftingRecipeItemName,
          recipesForItem: cJ.recipesForItem
        })
      })), (0, GJ.k)(wJ.U, (JJ => {
        const cJ = (0, gJ.d)(wJ.U, JJ);
        cJ && jJ.i.Uf("craftingRecipesEdited", {
          itemName: cJ.gZ,
          recipesForItem: []
        })
      })))
    }
    var dJ = ZJ(38126);
    let zJ = !1,
      NJ = !1;

    function OJ() {
      const JJ = (0, XJ.j)();
      if (null === JJ || void 0 === JJ || !JJ.isSessionLive) return void(zJ = !1);
      const cJ = 0 !== (mJ.s.playerFlags(JJ.api.apiView, 0) & mJ.Ad.FreeCam);
      cJ !== zJ && (zJ = cJ, (0, dJ.c)(cJ))
    }
    var TJ = ZJ(235),
      CJ = ZJ(36052),
      uJ = ZJ(1739);
    var iJ = ZJ(39474),
      RJ = ZJ(39423);
    const LJ = {
      interactPrompt: null,
      blockText: null,
      neededTool: null
    };
    let aJ = "off";

    function BJ(JJ) {
      var cJ;
      return null === JJ ? null : {
        label: null !== (cJ = (0, iJ.d)(JJ, "interactionPrompt")) && void 0 !== cJ ? cJ : null
      }
    }
    const tJ = new Map([
      [mJ.sc.Open, {
        label: qJ.h.open
      }],
      [mJ.sc.Close, {
        label: qJ.h.close
      }],
      [mJ.sc.Milk, {
        label: qJ.h.milk
      }],
      [mJ.sc.Shear, {
        label: qJ.h.shear
      }],
      [mJ.sc.Tame, {
        label: qJ.h.tame
      }],
      [mJ.sc.Feed, {
        label: qJ.h.feed
      }],
      [mJ.sc.Ride, {
        label: qJ.h.ride
      }]
    ]);
    class oJ {
      constructor() {
        this.target = LJ, this.EA = mJ.Wc, this.optionName = null, this.pickaxe = new qJ.e
      }
      read(JJ) {
        var cJ;
        const ZJ = mJ.s.targetBlockId(JJ.api.apiView, 0);
        ZJ !== this.EA && (this.EA = ZJ, this.optionName = ZJ === mJ.Wc ? null : `${JJ.tables.getMetaInfo(ZJ).rootName}CrosshairText`);
        const FJ = null === this.optionName ? null : null !== (cJ = JJ.tables.getClientOption(this.optionName)) && void 0 !== cJ ? cJ : null;
        this.pickaxe.update(function(JJ, cJ) {
          var ZJ, FJ, UJ;
          if (0 === (mJ.s.playerFlags(JJ.api.apiView, 0) & mJ.Ad.Breaking) || cJ === mJ.Wc || 0 === cJ) return null;
          const {
            tables: eJ
          } = JJ;
          if (!0 === eJ.getClientOption("creative")) return null;
          const XJ = eJ.nameOfId(cJ),
            AJ = null === (ZJ = JJ.items.hj()) || void 0 === ZJ ? void 0 : ZJ.name,
            qJ = null !== (FJ = eJ.getItemStat(XJ, "harvestLevel")) && void 0 !== FJ ? FJ : 0;
          return (0, TJ.nc)({
            blockHarvestType: eJ.getDefaultItemStat(XJ, "harvestType"),
            blockHarvestLevel: eJ.getDefaultItemStat(XJ, "harvestLevel"),
            harvestLevel: qJ,
            heldToolType: void 0 === AJ ? void 0 : eJ.getDefaultItemStat(AJ, "harvests"),
            heldToolLevel: void 0 === AJ ? void 0 : eJ.getDefaultItemStat(AJ, "level")
          }) && null !== (UJ = CJ.q[qJ]) && void 0 !== UJ ? UJ : null
        }(JJ, ZJ)), JJ.watchPromptPick(aJ);
        const UJ = "touch" === aJ ? function(JJ) {
          var cJ;
          const ZJ = JJ.interactLabel;
          return ZJ === mJ.sc.Entity ? BJ(JJ.promptEntity) : ZJ === mJ.sc.TameWith ? {
            label: (0, qJ.v)(JJ.tables.nameOfId(JJ.interactIcon))
          } : null !== (cJ = tJ.get(ZJ)) && void 0 !== cJ ? cJ : null
        }(JJ) : BJ(JJ.promptEntity);
        return this.target = (0, uJ.u)(this.target, {
          interactPrompt: UJ,
          blockText: FJ,
          neededTool: this.pickaxe.shown
        }), this.target
      }
    }
    let lJ = null;
    const Jc = {
      current: () => {
        var JJ, cJ;
        return null !== (JJ = null === (cJ = lJ) || void 0 === cJ ? void 0 : cJ.target) && void 0 !== JJ ? JJ : LJ
      },
      watch: JJ => {
        const cJ = new oJ;
        lJ = cJ;
        const ZJ = (0, sJ.i)((ZJ => {
          let FJ = cJ.read(ZJ);
          JJ(FJ);
          const UJ = (0, eJ.w)((() => {
            const UJ = cJ.read(ZJ);
            UJ !== FJ && (FJ = UJ, JJ(UJ))
          }));
          return () => {
            UJ(), ZJ.watchPromptPick("off")
          }
        }));
        return () => {
          ZJ(), lJ === cJ && (lJ = null)
        }
      }
    };
    let cc = 0,
      Zc = 0;
    const Fc = {
        health: qJ.s,
        aura: qJ.k,
        hotbar: RJ.e.states.hotbar,
        heldItemAim: RJ.e.states.heldItemAim,
        crouching: (0, sJ.b)((JJ => function(JJ) {
          const cJ = () => 0 !== (mJ.s.playerFlags(JJ.apiView, 0) & mJ.Ad.Crouching);
          return {
            current: cJ,
            watch(JJ) {
              let ZJ = cJ();
              return (0, eJ.s)((() => {
                const FJ = cJ();
                FJ !== ZJ && (ZJ = FJ, JJ(FJ))
              }))
            }
          }
        }(JJ.api).current), !1, (JJ => (0, eJ.s)(JJ))),
        flight: (0, sJ.b)((JJ => () => function(JJ) {
          const cJ = mJ.s.playerFlags(JJ.apiView, 0);
          return (0, qJ.q)(0 !== (cJ & mJ.Ad.CanFly), 0 !== (cJ & mJ.Ad.Flying))
        }(JJ.api)), (0, qJ.q)(!1, !1), (JJ => (0, eJ.s)(JJ))),
        gliderBoostFuel: (0, sJ.b)((JJ => () => mJ.s.gliderBoostFuel(JJ.api.apiView, 0)), 0, (JJ => (0, eJ.s)(JJ))),
        crosshairTarget: Jc
      },
      Uc = {
        hotbarSlotRequested: RJ.e.events.hotbarSlotRequested,
        hotbarScrolled: RJ.e.events.hotbarScrolled,
        numberKeyPressed: RJ.e.events.numberKeyPressed,
        shotDamageToShow: (0, qJ.u)((JJ => !0 === (0, iJ.d)(JJ, "showDamageAmounts")))
      },
      ec = {
        selectHotbarSlot: RJ.e.commands.selectHotbarSlot,
        setCrosshairInteractPrompt: JJ => {
          aJ = JJ
        }
      },
      Xc = {
        momentumFrac: function() {
          var JJ, cJ, ZJ;
          const FJ = (0, XJ.j)(),
            UJ = performance.now(),
            eJ = null === FJ || void 0 === FJ || null === (JJ = FJ.items.hj()) || void 0 === JJ || null === (cJ = JJ.attributes) || void 0 === cJ || null === (ZJ = cJ.customAttributes) || void 0 === ZJ ? void 0 : ZJ.enchantments;
          return cc = null !== FJ && null !== eJ && void 0 !== eJ && eJ.Momentum ? 0 !== (mJ.s.playerFlags(FJ.api.apiView, 0) & mJ.Ad.Breaking) ? Math.max(0, mJ.s.momentumFrac(FJ.api.apiView, 0)) : Math.max(0, cc - (UJ - Zc) / 1500) : 0, Zc = UJ, cc
        }
      };
    var Ac = ZJ(39357),
      qc = ZJ(1137),
      jc = ZJ(13),
      Yc = ZJ(35562),
      hc = ZJ(8088),
      Dc = ZJ(1528),
      sc = ZJ(2146),
      nc = ZJ(4207);
    let Gc = !1;

    function fc(JJ) {
      Gc = JJ
    }

    function xc() {
      "inGame" !== jc.d.get("gameState") || (0, Dc.o)() || jJ.i.Uf("ctrlCrouchWithoutFullscreen")
    }
    let rc = !1;
    const vc = {
        OpenEmoteWheel: () => {
          fc(!0), rc = !0, queueMicrotask((() => {
            rc && (rc = !1, jJ.i.Uf("requestEmoteWheelHoldOpen"))
          }))
        },
        ToggleFullCoordinateOverlay: () => {
          jJ.i.Uf("toggleFullCoordinateOverlay")
        },
        KeyYPressed: () => {
          (0, Yc.b)() || jJ.i.Uf("YKeyPressed")
        },
        KeyXPressed: () => {
          (0, Yc.b)() || jJ.i.Uf("XKeyPressed")
        },
        CtrlCrouch: xc,
        "primary-fire": () => {
          jJ.i.Uf("mouseState", {
            oj: qc.b.DownFirePrimary,
            isDown: !0
          })
        },
        "alt-fire": () => {
          jJ.i.Uf("mouseState", {
            oj: qc.b.DownFireSecondary,
            isDown: !0
          })
        },
        TouchHold: () => {
          jJ.i.Uf("mouseState", {
            oj: qc.b.TouchDownLong,
            isDown: !0
          })
        }
      },
      mc = {
        OpenEmoteWheel: () => {
          fc(!1), rc ? (rc = !1, (0, hc.b)() || jJ.i.Uf("requestEmoteWheelHoldOpen")) : jJ.i.Uf("requestEmoteWheelHoldRelease")
        },
        CtrlCrouch: xc,
        "primary-fire": () => {
          jJ.i.Uf("mouseState", {
            oj: qc.b.UpFirePrimary,
            isDown: !1
          })
        },
        "alt-fire": () => {
          jJ.i.Uf("mouseState", {
            oj: qc.b.UpFireSecondary,
            isDown: !1
          })
        },
        TouchDig: () => {
          jJ.i.Uf("mouseState", {
            oj: qc.b.UpFirePrimary,
            isDown: !1
          })
        }
      };
    let Qc = !1;

    function Ec() {
      Qc || (Qc = !0, (0, nc.g)((JJ => {
        if ((0, UJ.b)()) return;
        const cJ = (0, nc.e)(JJ) ? "primary-fire" : JJ.action;
        var ZJ;
        if (JJ.down) {
          if (0 === (JJ.flags & sc.e.Synthetic)) {
            var FJ;
            null === (FJ = vc[cJ]) || void 0 === FJ || FJ.call(vc)
          }
        } else null === (ZJ = mc[cJ]) || void 0 === ZJ || ZJ.call(mc)
      })))
    }
    var Vc = ZJ(227),
      Kc = ZJ(80),
      yc = ZJ(29),
      Sc = ZJ(39478),
      Ic = ZJ(1213),
      Mc = ZJ(37948);
    let bc = !1;
    const wc = {
      sendCodeCollab(JJ) {
        var cJ;
        null === (cJ = (0, XJ.j)()) || void 0 === cJ || cJ.send(WJ.d.CodeCollab, (0, WJ.m)(JJ), (0, Mc.f)(JJ))
      }
    };
    let Wc = null,
      gc = !1,
      Hc = null;

    function Pc() {
      return "inGame" === jc.d.get("gameState") && !(0, Yc.b)()
    }
    const kc = {
        OpenInventory: JJ => {
          (0, Dc.t)(JJ, "inventory", (0, Ac.k)())
        },
        OpenShop: JJ => {
          Wc && Pc() && (0, Dc.s)(JJ, Vc.m.SHOP, !Wc.shopIsEmpty(vJ.b.get("shopInfo")))
        },
        OpenLobbyLeaderboard: JJ => {
          Pc() && (0, Dc.s)(JJ, Vc.m.LOBBY_LEADERBOARD, !!vJ.b.get("lobbyLeaderboardInfo"))
        },
        OpenTasksAndLeaderboard: JJ => {
          var cJ;
          const ZJ = null === (cJ = Wc) || void 0 === cJ ? void 0 : cJ.getClientGameMapKey();
          ZJ ? (0, Dc.v)(JJ, !0, ZJ) : (0, Dc.t)(JJ, "retentionFeatures", !(!vJ.b.get("_tasks") && !vJ.b.get("_availableLeaderboards")))
        },
        OpenInviteLink: JJ => {
          (0, Dc.t)(JJ, "inviteLink", Kc.featureFlags.canUseInviteLinks)
        },
        OpenCodeEditor: JJ => {
          Pc() && function(JJ) {
            var cJ;
            const ZJ = (0, XJ.j)(),
              FJ = null !== ZJ && void 0 !== ZJ && ZJ.isSessionLive ? ZJ.api : null,
              UJ = FJ ? FJ.Om(FJ.localId) : null,
              eJ = null !== (cJ = null === UJ || void 0 === UJ ? void 0 : UJ.map((JJ => Math.floor(JJ)))) && void 0 !== cJ ? cJ : null;
            (0, Dc.v)(JJ, null !== eJ && (0, Mc.c)((0, Ic.e)()), (() => {
              jJ.i.Uf("EditLobbyCode", eJ)
            }))
          }(JJ)
        },
        HideUi: () => {
          jJ.i.Uf("showUi", !1)
        }
      },
      pc = {
        HideUi: () => {
          jJ.i.Uf("showUi", !0)
        }
      };

    function dc() {
      gc || (gc = !0, ZJ.e(144).then((() => ZJ(41258))).then((JJ => {
        Wc = JJ
      }), (JJ => {
        console.error("[bloxd-wasm-client] the menu keys' checks did not load", JJ)
      })), (0, Sc.z)((JJ => {
        JJ || !(0, Sc.j)() || (0, Kc.isMobile)() || !yc.j.getItem("disableFullscreen") || (0, Dc.l)() || jc.d.set({
          openEverythingMenuName: Vc.m.SETTINGS
        })
      })), (0, nc.g)((JJ => {
        let {
          action: cJ,
          down: ZJ,
          press: FJ
        } = JJ;
        var eJ, XJ;
        (0, UJ.b)() || (ZJ ? null === (eJ = kc[cJ]) || void 0 === eJ || eJ.call(kc, function(JJ) {
          var cJ;
          if (0 === JJ || (null === (cJ = Hc) || void 0 === cJ ? void 0 : cJ.press) !== JJ) {
            const cJ = {
              press: JJ,
              event: new Event("inputAction")
            };
            Hc = cJ, queueMicrotask((() => {
              Hc === cJ && (Hc = null)
            }))
          }
          return Hc.event
        }(FJ)) : null === (XJ = pc[cJ]) || void 0 === XJ || XJ.call(pc))
      })))
    }
    var zc = ZJ(37914),
      Nc = ZJ(37931),
      Oc = ZJ(37922);
    const Tc = {
      completeTask(JJ) {
        var cJ;
        null === (cJ = (0, XJ.j)()) || void 0 === cJ || cJ.send(WJ.d.CompleteTask, (0, WJ.q)(JJ))
      },
      setServerCookie(JJ) {
        var cJ;
        let {
          key: ZJ,
          value: FJ
        } = JJ;
        null === (cJ = (0, XJ.j)()) || void 0 === cJ || cJ.send(WJ.d.GeneralCookieSet, (0, WJ.s)({
          IY: ZJ,
          MY: FJ
        }))
      },
      answerUiRequest(JJ) {
        var cJ;
        let {
          id: ZJ,
          vY: FJ
        } = JJ;
        null === (cJ = (0, XJ.j)()) || void 0 === cJ || cJ.send(WJ.d.UiRequestResp, (0, WJ.ab)({
          Gj: ZJ,
          fj: FJ,
          xj: 5
        }))
      },
      chooseRewardedAd(JJ) {
        var cJ;
        let {
          id: ZJ,
          vY: FJ
        } = JJ;
        null === (cJ = (0, XJ.j)()) || void 0 === cJ || cJ.send(WJ.d.UiRequestResponded, (0, WJ.Y)({
          id: ZJ,
          vY: FJ
        }))
      },
      requestLeaderboard(JJ) {
        var cJ;
        let {
          category: ZJ,
          timeframe: FJ,
          seeTop: UJ
        } = JJ;
        null === (cJ = (0, XJ.j)()) || void 0 === cJ || cJ.send(WJ.d.LeaderboardRequest, {
          category: ZJ,
          timeframe: FJ,
          seeTop: UJ
        })
      }
    };
    let Cc = !1;
    const uc = rJ.c.Av / 2,
      ic = [uc, -uc, -uc, -uc, uc, uc, -uc, uc],
      Rc = [0, 0, 0];

    function Lc(JJ, cJ, ZJ) {
      for (let FJ = 0; FJ < JJ.length; FJ += 2)
        if (JJ[FJ] === cJ && JJ[FJ + 1] === ZJ) return !0;
      return !1
    }
    const ac = {
      blocksStandingOn: function() {
        const JJ = (0, XJ.j)();
        if (null === JJ) return [];
        const {
          api: cJ,
          chunks: ZJ,
          tables: FJ
        } = JJ;
        if (!cJ.readPosition(cJ.localId, Rc)) return [];
        const [UJ, eJ, AJ] = Rc, qJ = Math.ceil(eJ) - 1, jJ = [], YJ = [];
        for (let XJ = 0; XJ < ic.length; XJ += 2) {
          const JJ = UJ + ic[XJ],
            cJ = AJ + ic[XJ + 1];
          if (Number.isInteger(JJ) || Number.isInteger(cJ)) continue;
          const eJ = Math.floor(JJ),
            hJ = Math.floor(cJ);
          if (Lc(YJ, eJ, hJ)) continue;
          const DJ = ZJ.EA(eJ, qJ, hJ);
          FJ.isSolidBlockId(DJ) && (YJ.push(eJ, hJ), jJ.push(FJ.nameOfId(DJ)))
        }
        return jJ
      },
      dropAhead: function() {
        const JJ = (0, XJ.j)();
        return null !== JJ && 0 !== (mJ.s.playerFlags(JJ.api.apiView, 0) & mJ.Ad.DropAhead)
      }
    };
    var Bc = ZJ(35962),
      tc = ZJ(38033),
      oc = ZJ(1247),
      lc = ZJ(39431);
    const JZ = new Set(["replayLoad", "replaySave", "replaySaveAs", "replayTimelineZoomIn", "replayTimelineZoomOut"]),
      cZ = new Set(["replaySkipBack", "replaySkipForward", "replaySpeedUp", "replaySpeedDown", "replayRecordKeyframe"]);

    function ZZ() {
      const JJ = new Set;
      return {
        add: cJ => (JJ.add(cJ), () => {
          JJ.delete(cJ)
        }),
        fire() {
          for (const cJ of JJ) cJ()
        }
      }
    }
    const FZ = Object.freeze([]);

    function UZ(JJ, cJ) {
      let ZJ, {
        rereads: FJ,
        followLocalId: UJ
      } = cJ;
      const XJ = () => (ZJ = (0, uJ.u)(ZJ, JJ()), ZJ);
      return {
        current: XJ,
        watch(JJ) {
          const cJ = (0, nJ.e)((cJ => {
            FJ(cJ) && JJ(XJ())
          }));
          if (!UJ) return cJ;
          let ZJ = (0, sJ.f)();
          const AJ = (0, eJ.w)((() => {
            const cJ = (0, sJ.f)();
            cJ !== ZJ && (ZJ = cJ, JJ(XJ()))
          }));
          return () => {
            cJ(), AJ()
          }
        }
      }
    }
    const eZ = {
        players: UZ((function() {
          const JJ = nJ.f.ids(),
            cJ = {};
          for (const eJ of JJ) {
            var ZJ, FJ, UJ;
            cJ[eJ] = {
              name: null !== (ZJ = nJ.f.getName(eJ)) && void 0 !== ZJ ? ZJ : null,
              ranks: null !== (FJ = nJ.f.getSetting(eJ, "ranks")) && void 0 !== FJ ? FJ : FZ,
              cosmetics: null !== (UJ = (0, nJ.g)(eJ)) && void 0 !== UJ ? UJ : null
            }
          }
          return {
            ids: JJ,
            byId: cJ,
            localId: (0, sJ.f)()
          }
        }), {
          rereads: JJ => "roster" !== JJ.kind || JJ.members || JJ.settings.has("ranks"),
          followLocalId: !0
        }),
        lobbyLeaderboardRows: UZ((function() {
          const JJ = {};
          for (const UJ of nJ.f.ids()) {
            var cJ, ZJ, FJ;
            JJ[UJ] = {
              colour: null !== (cJ = nJ.f.getSetting(UJ, "colorInLobbyLeaderboard")) && void 0 !== cJ ? cJ : null,
              values: null !== (ZJ = nJ.f.getSetting(UJ, "lobbyLeaderboardValues")) && void 0 !== ZJ ? ZJ : null,
              tags: null !== (FJ = nJ.f.getSetting(UJ, "lobbyLeaderboardTags")) && void 0 !== FJ ? FJ : null
            }
          }
          return JJ
        }), {
          rereads: function(JJ) {
            if ("roster" !== JJ.kind) return "reset" === JJ.kind;
            const {
              members: cJ,
              settings: ZJ
            } = JJ;
            return cJ || ZJ.has("colorInLobbyLeaderboard") || ZJ.has("lobbyLeaderboardValues") || ZJ.has("lobbyLeaderboardTags")
          },
          followLocalId: !1
        })
      },
      XZ = {
        cosmeticsUpdated: {
          watch: JJ => (0, nJ.e)((cJ => {
            if ("cosmetics" !== cJ.kind) return;
            const ZJ = (0, sJ.f)();
            JJ(cJ.updates.map((JJ => {
              let {
                EF: cJ,
                VF: FJ,
                KF: UJ
              } = JJ;
              return {
                local: cJ === ZJ,
                VF: FJ,
                KF: UJ
              }
            })))
          }))
        }
      };
    var AZ = ZJ(2473),
      qZ = ZJ(1599),
      jZ = ZJ(969),
      YZ = ZJ(39482);
    let hZ = !1,
      DZ = null;
    const sZ = {
      setShopOpen(JJ) {
        var cJ;
        null === (cJ = (0, XJ.j)()) || void 0 === cJ || cJ.send(WJ.d.ShopMenuChanged, (0, WJ.Q)(JJ))
      },
      buyShopItem(JJ) {
        var cJ;
        let {
          categoryKey: ZJ,
          itemKey: FJ,
          userInput: UJ
        } = JJ;
        null === (cJ = (0, XJ.j)()) || void 0 === cJ || cJ.send(WJ.d.ItemBought, {
          categoryKey: ZJ,
          itemKey: FJ,
          shopVersion: vJ.b.get("_shopVersion"),
          userInput: UJ
        })
      }
    };
    let nZ = !1;
    var GZ = ZJ(4217);
    const fZ = sc.D.LookFrozen | sc.D.ClicksSuppressed;

    function xZ(JJ, cJ) {
      var ZJ;
      null !== (ZJ = (0, XJ.j)()) && void 0 !== ZJ && ZJ.send(JJ, cJ) || console.warn(`[bloxd-wasm-client] message ${JJ} not sent: no live game or the core's command ring is full`)
    }(0, GJ.k)(wJ.kb, (JJ => {
      const cJ = (0, gJ.d)(wJ.kb, JJ);
      void 0 !== cJ && jJ.i.Uf("setDiscordReportKey", cJ)
    }));
    const rZ = {
      ignorePlayer(JJ) {
        xZ(WJ.d.IgnoreUser, (0, WJ.w)({
          Dj: JJ
        }))
      },
      reportPlayer(JJ) {
        let {
          playerId: cJ,
          chatMsgId: ZJ,
          XY: FJ,
          details: UJ
        } = JJ;
        xZ(WJ.d.UserReport, (0, WJ.ib)({
          EY: cJ,
          VY: ZJ,
          XY: FJ,
          AY: UJ
        }))
      },
      reportWorldCodeChat(JJ) {
        let {
          chatMsgId: cJ,
          XY: ZJ,
          details: FJ
        } = JJ;
        xZ(WJ.d.UserReport, (0, WJ.ib)({
          EY: "",
          VY: cJ,
          XY: ZJ,
          AY: FJ
        }))
      },
      requestDiscordReportKey(JJ) {
        xZ(WJ.d.ReqDiscordReportKey, (0, WJ.I)(JJ))
      },
      reportLobbyOrGame(JJ) {
        let {
          target: cJ,
          XY: ZJ,
          details: FJ
        } = JJ;
        "customGame" === cJ ? xZ(WJ.d.CustomGameReport, (0, WJ.r)({
          XY: ZJ,
          AY: FJ
        })) : xZ(WJ.d.LobbyReport, (0, WJ.A)({
          XY: ZJ,
          AY: FJ
        }))
      },
      updateMyCosmetic(JJ) {
        xZ(WJ.d.UpdateMyCosmetic, (0, WJ.hb)(JJ))
      },
      holdEmoteWheel(JJ) {
        !JJ || Gc ? (0, GZ.g)(fZ, JJ ? fZ : 0) : jJ.i.Uf("requestEmoteWheelHoldRelease")
      }
    };
    var vZ = ZJ(39484),
      mZ = ZJ(1717),
      QZ = ZJ(39487);

    function EZ() {
      const JJ = (0, XJ.j)();
      return !0 === (null === JJ || void 0 === JJ ? void 0 : JJ.isCoreRunning) ? function(JJ) {
        if (JJ.queries.drawCensus() < mJ.vb.BYTES) return [];
        const cJ = JJ.memoryData(JJ.scratch(), mJ.vb.BYTES, 4, "the draw census");
        if (null === cJ) return [];
        const ZJ = mJ.vb.terrainOpaque(cJ, 0),
          FJ = mJ.vb.terrainTransparent(cJ, 0),
          UJ = mJ.vb.earthSky(cJ, 0),
          eJ = mJ.vb.skyMeshes(cJ, 0),
          XJ = mJ.vb.regular(cJ, 0),
          AJ = mJ.vb.thin(cJ, 0),
          qJ = mJ.vb.line(cJ, 0),
          jJ = mJ.vb.text(cJ, 0),
          YJ = mJ.vb.particles(cJ, 0);
        return [{
          label: "Drawn",
          value: `${ZJ+FJ+UJ+eJ+XJ+AJ+qJ+jJ+YJ}`
        }, {
          label: "Terrain",
          value: `${ZJ} opaque / ${FJ} transparent (${mJ.vb.terrainPack(cJ,0)} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${XJ} / ${AJ}`
        }, {
          label: "Text / Lines",
          value: `${jJ} / ${qJ}`
        }, {
          label: "Sky / Particles",
          value: `${UJ+eJ} / ${YJ}`
        }]
      }(JJ.api) : []
    }
    var VZ = ZJ(39490);
    var KZ = ZJ(523),
      yZ = ZJ(38578);

    function SZ(JJ) {
      if (null === JJ || void 0 === JJ || !JJ.isCoreRunning) return null;
      const {
        api: cJ,
        chunks: ZJ,
        items: FJ,
        tables: UJ
      } = JJ;
      return {
        playerFeet() {
          const JJ = cJ.Om(cJ.localId);
          return null !== JJ && void 0 !== JJ && JJ.every(Number.isFinite) ? JJ : null
        },
        chunkBlocks: JJ => ZJ.isLoaded(JJ[0], JJ[1], JJ[2]) ? (JJ, cJ, FJ) => ZJ.EA(JJ, cJ, FJ) : null,
        blockName: JJ => UJ.nameOfId(JJ),
        inventory: () => ({
          slots: FJ.playerItems().map((JJ => JJ ? {
            name: JJ.name,
            amount: JJ.amount
          } : null)),
          heldSlot: FJ.selectedSlot
        }),
        nearby() {
          const ZJ = [];
          for (let UJ = 0; UJ < cJ.idStr.length; UJ++) {
            var FJ;
            const eJ = cJ.idStr[UJ],
              XJ = cJ.serverIds[UJ],
              AJ = cJ.kinds[UJ];
            if (null === eJ || cJ.isLocal(XJ) || AJ >>> mJ.d !== mJ.r.Lifeform) continue;
            const qJ = cJ.Om(XJ),
              jJ = KZ.p[AJ & mJ.h];
            qJ && void 0 !== jJ && ZJ.push({
              kind: "Player" === jJ ? "player" : jJ,
              name: null !== (FJ = JJ.clientApi.getEntityName(eJ)) && void 0 !== FJ ? FJ : null,
              position: qJ
            })
          }
          return ZJ
        },
        droppedItems() {
          let JJ = 0;
          for (let ZJ = 0; ZJ < cJ.idStr.length; ZJ++) null !== cJ.idStr[ZJ] && cJ.kinds[ZJ] >>> mJ.d === mJ.r.Item && JJ++;
          return JJ
        }
      }
    }
    const IZ = {
        worldCodeAiChunk: JJ => Promise.resolve((0, yZ.c)(SZ((0, XJ.j)()), JJ)),
        worldCodeAiGameState: () => Promise.resolve((0, yZ.g)(SZ((0, XJ.j)())))
      },
      MZ = function(JJ) {
        const cJ = ZZ(),
          FJ = ZZ(),
          UJ = new Set,
          eJ = new Set,
          XJ = () => {
            var cJ, ZJ;
            return null !== (cJ = null === (ZJ = JJ.runtime()) || void 0 === ZJ ? void 0 : ZJ.currentViewer) && void 0 !== cJ ? cJ : null
          };
        let AJ = null,
          qJ = null;
        const YJ = (JJ, cJ) => ({
            current: JJ,
            watch(ZJ) {
              let FJ = JJ();
              return cJ.add((() => {
                const cJ = JJ();
                cJ !== FJ && (FJ = cJ, ZJ(cJ))
              }))
            }
          }),
          DJ = JJ => ({
            watch: cJ => (JJ.add(cJ), () => {
              JJ.delete(cJ)
            })
          }),
          sJ = JJ => {
            const cJ = XJ(),
              ZJ = null === cJ || void 0 === cJ ? void 0 : cJ.view;
            cJ && ZJ && cJ.seek(Math.max(0, Math.min(ZJ.totalTicks - 1, ZJ.Hh + JJ * hJ.rd)))
          },
          nJ = {
            replay: YJ((() => {
              var JJ;
              const cJ = XJ(),
                ZJ = null !== (JJ = null === cJ || void 0 === cJ ? void 0 : cJ.view) && void 0 !== JJ ? JJ : null;
              return null === cJ || null === ZJ || ZJ.state === hJ.cd.None ? (AJ = null, null) : (AJ = (0, uJ.u)(AJ, {
                id: cJ.id,
                Hh: ZJ.Hh,
                totalTicks: ZJ.totalTicks,
                Gy: hJ.rd,
                playing: ZJ.state === hJ.cd.Playing,
                speed: ZJ.speed,
                cameraMode: ZJ.cameraMode,
                freecam: "freecam" === ZJ.cameraMode
              }), AJ)
            }), cJ),
            replayEdits: YJ((() => {
              var JJ;
              const cJ = XJ(),
                ZJ = null !== (JJ = null === cJ || void 0 === cJ ? void 0 : cJ.view) && void 0 !== JJ ? JJ : null;
              return null === cJ || null === ZJ || ZJ.state === hJ.cd.None ? (qJ = null, null) : (qJ = (0, uJ.u)(qJ, {
                cameraKeyframes: [...cJ.keyframes],
                playbackMark: ZJ.mark,
                fileName: cJ.fileName,
                unsavedChanges: cJ.unsavedChanges,
                suggestSaveAs: cJ.suggestSaveAs
              }), qJ)
            }), cJ),
            replayRecorder: YJ((() => {
              var cJ, ZJ;
              return null !== (cJ = null === (ZJ = JJ.runtime()) || void 0 === ZJ ? void 0 : ZJ.recorder.current) && void 0 !== cJ ? cJ : lc.c.states.replayRecorder.current()
            }), FJ),
            replayVideoExporting: {
              current: tc.c,
              watch: JJ => (0, jJ.j)("replayViewer|videoExportChanged", (() => {
                JJ((0, tc.c)())
              }))
            }
          },
          GJ = {
            replayUiActionRequested: DJ(eJ),
            replayViewerRequested: DJ(UJ)
          },
          fJ = JJ => {
            for (const cJ of UJ) cJ(JJ)
          },
          xJ = () => {
            var FJ;
            !0 === (null === (FJ = XJ()) || void 0 === FJ ? void 0 : FJ.isOpen) && Promise.all([ZJ.e(88), ZJ.e(59)]).then((() => ZJ(41265))).then((ZJ => {
              let {
                startWasmReplayVideoExport: FJ
              } = ZJ;
              return FJ({
                viewer: XJ,
                canvas: () => {
                  var cJ, ZJ;
                  return null !== (cJ = null === (ZJ = JJ.canvas) || void 0 === ZJ ? void 0 : ZJ.call(JJ)) && void 0 !== cJ ? cJ : null
                },
                watchViewer: cJ.add,
                requestViewer: fJ
              })
            }), (JJ => {
              console.error("Couldn't load the video export", JJ), oc.NotificationProvider.showAlertPopup({
                title: "Video export failed",
                subtitle: "Check your connection, then try again."
              })
            })).catch((JJ => {
              console.error("The video export failed", JJ)
            }))
          },
          rJ = {
            replayAction(JJ) {
              if ((0, tc.c)()) return;
              const cJ = XJ();
              switch (JJ) {
                case "replaySkipBack":
                  sJ(-1);
                  break;
                case "replaySkipForward":
                  sJ(1);
                  break;
                case "replaySpeedUp":
                case "replaySpeedDown":
                  null !== cJ && void 0 !== cJ && cJ.view && cJ.setSpeed((0, Bc.i)(cJ.view.speed, "replaySpeedUp" === JJ ? "up" : "down"));
                  break;
                case "replayRecordKeyframe":
                  null === cJ || void 0 === cJ || cJ.addKeyframe()
              }
            },
            setReplayPlaying(JJ) {
              var cJ, ZJ;
              (0, tc.c)() || (JJ ? null === (cJ = XJ()) || void 0 === cJ || cJ.play() : null === (ZJ = XJ()) || void 0 === ZJ || ZJ.pause())
            },
            seekReplay(JJ) {
              var cJ;
              let {
                Hh: ZJ,
                ignorePlaybackMark: FJ
              } = JJ;
              null === (cJ = XJ()) || void 0 === cJ || cJ.seek(ZJ, null !== FJ && void 0 !== FJ && FJ)
            },
            setReplayCameraMode(JJ) {
              var cJ;
              null === (cJ = XJ()) || void 0 === cJ || cJ.setCameraMode(JJ)
            },
            syncReplayCameraMode() {},
            setReplayCameraKeyframe(JJ) {
              var cJ;
              null === (cJ = XJ()) || void 0 === cJ || cJ.setKeyframe(JJ)
            },
            moveReplayCameraKeyframe(JJ) {
              var cJ;
              let {
                from: ZJ,
                to: FJ
              } = JJ;
              null === (cJ = XJ()) || void 0 === cJ || cJ.moveKeyframe(ZJ, FJ)
            },
            deleteReplayCameraKeyframes(JJ) {
              var cJ;
              let {
                start: ZJ,
                end: FJ
              } = JJ;
              null === (cJ = XJ()) || void 0 === cJ || cJ.deleteKeyframes(ZJ, FJ)
            },
            setReplayPlaybackMark(JJ) {
              var cJ;
              null === (cJ = XJ()) || void 0 === cJ || cJ.setMark(JJ)
            },
            cropReplay(JJ) {
              var cJ, ZJ;
              let {
                start: FJ,
                end: UJ
              } = JJ;
              return !(0, tc.c)() && (null !== (cJ = null === (ZJ = XJ()) || void 0 === ZJ ? void 0 : ZJ.crop(FJ, UJ)) && void 0 !== cJ && cJ)
            },
            holdReplayForShaderPackFailure(JJ) {
              const cJ = XJ();
              cJ && (cJ.holdForShaderPackFailure(), function(JJ) {
                ZJ.e(122).then((() => ZJ(38169))).then((cJ => {
                  let {
                    shaderPackPage: ZJ
                  } = cJ;
                  ZJ.block(JJ)
                })).catch((JJ => {
                  console.warn("[bloxd-wasm-client] the shader pack could not be blocked", JJ)
                }))
              }(JJ))
            },
            exportReplayVideo() {
              xJ()
            },
            toggleRecording() {
              var cJ;
              null === (cJ = JJ.runtime()) || void 0 === cJ || cJ.recorder.toggleRecording()
            },
            saveClip() {
              var cJ;
              null === (cJ = JJ.runtime()) || void 0 === cJ || cJ.recorder.saveClip()
            },
            setRecorderPrefs(cJ) {
              var ZJ;
              let {
                clipping: FJ,
                clipSeconds: UJ
              } = cJ;
              null === (ZJ = JJ.runtime()) || void 0 === ZJ || ZJ.recorder.setPrefs(FJ, UJ)
            },
            setReplayViewerOpen(cJ) {
              var ZJ;
              (0, Yc.e)(cJ) && (null === (ZJ = JJ.runtime()) || void 0 === ZJ || ZJ.recorder.viewerShown(cJ))
            },
            recordFlyingMiddleText(cJ) {
              var ZJ;
              let {
                content: FJ,
                NF: UJ,
                angle: eJ,
                TF: XJ
              } = cJ;
              null === (ZJ = JJ.runtime()) || void 0 === ZJ || ZJ.recorder.recordFlyingText(JSON.stringify(FJ), UJ, eJ, XJ)
            },
            dragReplayCamera(cJ) {
              var ZJ;
              let {
                dx: FJ,
                dy: UJ
              } = cJ;
              null === (ZJ = JJ.freecam()) || void 0 === ZJ || ZJ.drag(FJ, UJ)
            },
            moveReplayFreecam(cJ) {
              var ZJ;
              null === (ZJ = JJ.freecam()) || void 0 === ZJ || ZJ.move(cJ)
            },
            holdReplayFreecamVertical(cJ) {
              var ZJ;
              let {
                action: FJ,
                hj: UJ
              } = cJ;
              null === (ZJ = JJ.freecam()) || void 0 === ZJ || ZJ.holdVertical(FJ, UJ)
            }
          },
          vJ = JJ => {
            var cJ;
            const ZJ = XJ(),
              FJ = null !== (cJ = null === ZJ || void 0 === ZJ ? void 0 : ZJ.view) && void 0 !== cJ ? cJ : null;
            JZ.has(JJ) ? (JJ => {
              for (const cJ of eJ) cJ(JJ)
            })(JJ) : cZ.has(JJ) ? rJ.replayAction(JJ) : "replayPlayPause" === JJ ? ZJ && FJ && FJ.state !== hJ.cd.None && rJ.setReplayPlaying(FJ.state !== hJ.cd.Playing) : "replayChangeCameraMode" === JJ ? null === ZJ || void 0 === ZJ || ZJ.cycleCameraMode() : "replayExit" === JJ ? !0 === (null === ZJ || void 0 === ZJ ? void 0 : ZJ.inPlayback) && (0, Ic.j)("/") : "replayExportVideo" === JJ && xJ()
          };
        let mJ = !1;
        return {
          states: nJ,
          events: GJ,
          commands: rJ,
          lookups: {
            replayCamera() {
              var cJ, ZJ, FJ;
              return !0 !== (null === (cJ = XJ()) || void 0 === cJ ? void 0 : cJ.isOpen) ? null : null !== (ZJ = null === (FJ = JJ.cameraView) || void 0 === FJ ? void 0 : FJ.call(JJ)) && void 0 !== ZJ ? ZJ : null
            },
            leaveGameReloadsPage() {
              var JJ;
              return !0 === (null === (JJ = XJ()) || void 0 === JJ ? void 0 : JJ.inPlayback)
            }
          },
          feed: {
            viewerChanged: () => {
              var JJ;
              const ZJ = !0 === (null === (JJ = XJ()) || void 0 === JJ ? void 0 : JJ.inPlayback);
              ZJ !== mJ && (mJ = ZJ, jJ.i.Uf("connectedGameChanged")), cJ.fire()
            },
            recorderChanged: FJ.fire,
            keyDown: JJ => {
              var cJ;
              switch (JJ) {
                case "recordGame":
                  return void rJ.toggleRecording();
                case "recordClip":
                  return void((0, Yc.b)() || rJ.saveClip())
              }(0, tc.c)() || ("replayViewerOpen" !== JJ ? JJ.startsWith("replay") && ((0, Yc.b)() || !0 === (null === (cJ = XJ()) || void 0 === cJ ? void 0 : cJ.inPlayback)) && vJ(JJ) : fJ("toggle"))
            }
          }
        }
      }({
        runtime: UJ.n,
        cameraView: () => {
          var JJ;
          const cJ = null === (JJ = (0, XJ.j)()) || void 0 === JJ ? void 0 : JJ.renderFrame;
          if (!cJ) return null;
          const [ZJ, FJ, UJ] = cJ.cameraPosition, [eJ, AJ, qJ] = cJ.cameraDirection;
          return {
            position: [ZJ, FJ, UJ],
            direction: [eJ, AJ, qJ]
          }
        },
        canvas: () => {
          var JJ, cJ, ZJ;
          return null !== (JJ = null === (cJ = (ZJ = (0, eJ.F)()).canvas) || void 0 === cJ ? void 0 : cJ.call(ZJ)) && void 0 !== JJ ? JJ : null
        },
        freecam: UJ.j
      }),
      bZ = {
        states: {
          ...Fc,
          ...Ac.i,
          ...MZ.states,
          ...eZ
        },
        events: {
          ...Uc,
          ...fJ,
          ...Ac.e,
          ...SJ.e,
          ...vZ.f,
          ...MZ.events,
          ...XZ,
          ...yJ.j
        },
        commands: {
          ...KJ,
          ...ec,
          ...xJ,
          ...Ac.b,
          ...Tc,
          ...rZ,
          ...yJ.h,
          ...wc,
          ...MZ.commands,
          ...sZ
        },
        queries: {
          ...Ac.f,
          ...IZ
        },
        lookups: {
          ...Xc,
          ...PJ,
          ...vZ.j,
          ...MZ.lookups,
          ...VJ,
          ...ac
        }
      };

    function wZ() {
      (0, AJ.g)(GJ.m), (0, UJ.o)(MZ.feed), (0, SJ.f)(), Cc || (Cc = !0, (0, GJ.k)(wJ.k, (JJ => {
        const cJ = (0, gJ.d)(wJ.k, JJ);
        "string" === typeof cJ && Promise.resolve().then((() => ZJ(3126))).then((JJ => {
          let {
            onCosmeticPackGranted: ZJ
          } = JJ;
          ZJ(cJ)
        }))
      })), (0, GJ.k)(wJ.hb, (JJ => {
        const cJ = (0, gJ.d)(wJ.hb, JJ);
        "number" === typeof cJ && jJ.i.Uf("serverUpdating", Date.now() + cJ, !0)
      })), (0, GJ.k)(wJ.J, (JJ => {
        const cJ = (0, gJ.d)(wJ.J, JJ);
        if ((0, gJ.c)(cJ)) {
          const {
            WJ: JJ,
            gJ: ZJ
          } = cJ;
          (0, Nc.d)({
            WJ: "string" === typeof JJ ? JJ : null,
            gJ: "string" === typeof ZJ ? ZJ : null
          })
        }
      })), (0, GJ.k)(YJ.Lb.NewUiRequest, (JJ => {
        const cJ = (0, gJ.g)(JJ);
        (0, gJ.c)(cJ) && "number" === typeof cJ.id && (0, gJ.c)(cJ.clientParameters) && (0, Oc.f)(cJ.id, cJ.clientParameters)
      })), (0, GJ.k)(wJ._, (JJ => {
        const cJ = (0, gJ.d)(wJ._, JJ);
        "number" === typeof cJ && (0, Oc.i)(cJ)
      })), (0, GJ.i)(Oc.e), (0, GJ.k)(YJ.Lb.UiRequestPopup, (JJ => {
        const cJ = (0, gJ.g)(JJ);
        if ((0, gJ.c)(cJ) && "number" === typeof cJ.id && "string" === typeof cJ.text) {
          const JJ = cJ.id;
          (0, Oc.k)(JJ, cJ.text, (cJ => {
            Tc.answerUiRequest({
              id: JJ,
              vY: cJ
            })
          }))
        }
      })), (0, GJ.k)(YJ.Lb.TopRightHelper, (JJ => {
        const cJ = (0, gJ.g)(JJ);
        void 0 !== cJ && jJ.i.Uf("TopRightHelper", cJ, !0)
      })), (0, GJ.k)(YJ.Lb.TaskProgress, (JJ => {
        const cJ = (0, gJ.g)(JJ);
        (0, gJ.c)(cJ) && "string" === typeof cJ.taskId && "number" === typeof cJ.progress && (0, zc.c)({
          taskId: cJ.taskId,
          progress: cJ.progress
        })
      }))), nZ || (nZ = !0, (0, GJ.k)(wJ.s, (JJ => {
        const cJ = (0, gJ.d)(wJ.s, JJ);
        (0, gJ.c)(cJ) && jJ.i.Uf("showShopFromServer", {
          toggle: cJ.wZ,
          WZ: cJ.WZ
        }, !0)
      })), (0, GJ.k)(YJ.Lb.OverShopInfo, (JJ => {
        const cJ = (0, gJ.g)(JJ);
        (0, gJ.c)(cJ) && jJ.i.Uf("overShopInfo", cJ.info, !0)
      })), (0, GJ.k)(YJ.Lb.ShowShopTutorial, (() => {
        jJ.i.Uf("showShopTutorial", null, !0)
      }))), hZ || (hZ = !0, (0, GJ.e)((() => {
        var JJ;
        (0, AZ.D)(), null === (JJ = DZ) || void 0 === JJ || JJ(), DZ = (0, GJ.d)() ? (0, jZ.e)(GJ.d) : null
      })), (0, GJ.k)(YJ.Lb.SetCookie, (JJ => {
        const cJ = (0, gJ.g)(JJ),
          ZJ = (0, Ic.e)().gameNameWithVariation;
        (0, gJ.c)(cJ) && "string" === typeof cJ.key && null !== ZJ && (0, qZ.setCookie)(ZJ, cJ.key, cJ.value)
      })), (0, GJ.k)(YJ.Lb.LeaveValues, (JJ => {
        const cJ = (0, gJ.g)(JJ);
        if ((0, gJ.c)(cJ) && "string" === typeof cJ.leaveEventType) {
          const {
            leaveEventType: JJ,
            category: ZJ,
            subCategory: FJ,
            value: UJ
          } = cJ;
          (0, AZ.J)({
            leaveEventType: JJ,
            category: ZJ,
            subCategory: FJ,
            value: UJ
          })
        }
      })), (0, GJ.k)(YJ.Lb.CustomAnalyticsEvent, (JJ => {
        const cJ = (0, gJ.g)(JJ);
        if ((0, gJ.c)(cJ) && "string" === typeof cJ.cat1) {
          const {
            cat1: JJ,
            cat2: ZJ,
            cat3: FJ,
            value: UJ
          } = cJ;
          (0, AZ.t)({
            cat1: JJ,
            cat2: ZJ,
            cat3: FJ,
            value: UJ
          })
        }
      })), (0, GJ.k)(YJ.Lb.ProgressionEvent, (JJ => {
        const cJ = (0, gJ.g)(JJ);
        if ((0, gJ.c)(cJ)) {
          const {
            type: JJ,
            location1: ZJ,
            location2: FJ,
            location3: UJ,
            score: eJ
          } = cJ;
          (0, AZ.x)({
            type: JJ,
            location1: ZJ,
            location2: FJ,
            location3: UJ,
            score: eJ
          })
        }
      })), (0, GJ.k)(YJ.Lb.ResourceEvent, (JJ => {
        const cJ = (0, gJ.g)(JJ);
        if ((0, gJ.c)(cJ)) {
          const {
            type: JJ,
            resourceType: ZJ,
            amount: FJ,
            category: UJ,
            itemName: eJ
          } = cJ;
          (0, AZ.B)({
            type: JJ,
            resourceType: ZJ,
            amount: FJ,
            category: UJ,
            itemName: eJ
          })
        }
      })), (0, GJ.k)(YJ.Lb.LeaderboardResponse, (JJ => {
        const cJ = (0, gJ.g)(JJ);
        if ((0, gJ.c)(cJ)) {
          const {
            category: JJ,
            timeframe: ZJ,
            data: FJ
          } = cJ;
          jJ.i.Uf("leaderboardResponse", {
            category: JJ,
            timeframe: ZJ,
            data: FJ
          })
        }
      })), (0, GJ.k)(wJ.B, (JJ => {
        const cJ = (0, gJ.d)(wJ.B, JJ);
        "string" === typeof cJ && (0, YZ.c)(JJ.conn, cJ)
      })), (0, GJ.k)(wJ.F, (JJ => {
        const cJ = (0, gJ.d)(wJ.F, JJ);
        "string" === typeof cJ && console.error(`[logErrorToConsole]: ${cJ}`)
      }))), pJ(), (0, vZ.b)(), bc || (bc = !0, (0, GJ.k)(wJ.j, (JJ => {
        const cJ = (0, gJ.d)(wJ.j, JJ);
        void 0 !== cJ && (0, Mc.h)(cJ)
      }))), dc(), Ec(), NJ || (NJ = !0, (0, eJ.s)(OJ)), FJ.gameBridge.attach(bZ), (0, FJ.installPageSources)({
        commands: {
          ...FJ.DEFAULT_CLIENT_PAGE_SOURCES.commands,
          setChunkAddDistance: QZ.g
        },
        queries: VZ.wasmIconQueries,
        lookups: {
          ...FJ.DEFAULT_CLIENT_PAGE_SOURCES.lookups,
          ...VZ.wasmIconLookups,
          EQ: QZ.c,
          drawCallStats: EZ
        }
      }), (0, mZ.b)(), (0, VZ.loadIcons)()
    }
  },
  39499: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => XJ,
      h: () => AJ
    });
    var FJ = ZJ(39508);
    let UJ = null,
      eJ = null;

    function XJ() {
      return UJ ??= ZJ.e(54).then((() => ZJ(41282))).catch((JJ => {
        throw UJ = null, JJ
      })), UJ
    }

    function AJ() {
      return eJ ??= Promise.all([XJ(), (0, FJ.d)()]).then((JJ => {
        let [cJ] = JJ;
        return cJ
      }), (JJ => {
        throw eJ = null, JJ
      })), eJ
    }
  },
  36067: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => FJ
    });
    const FJ = {
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
  8719: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => UJ,
      h: () => eJ
    });
    var FJ = ZJ(8687);
    const UJ = "Air",
      eJ = Object.freeze(new FJ.h(UJ, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  35886: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => UJ,
      g: () => eJ,
      k: () => DJ,
      m: () => AJ,
      p: () => qJ,
      r: () => jJ,
      u: () => hJ,
      v: () => YJ,
      x: () => XJ
    });
    var FJ = ZJ(1137);
    let UJ = function(JJ) {
        return JJ[JJ.Join = 0] = "Join", JJ[JJ.Leave = 1] = "Leave", JJ[JJ.Push = 2] = "Push", JJ[JJ.Cursor = 3] = "Cursor", JJ[JJ.Submit = 4] = "Submit", JJ[JJ.ReloadAsVariation = 5] = "ReloadAsVariation", JJ[JJ.CreateFile = 6] = "CreateFile", JJ[JJ.RenameFile = 7] = "RenameFile", JJ[JJ.DeleteFile = 8] = "DeleteFile", JJ[JJ.SetEngine = 9] = "SetEngine", JJ[JJ.RenameFolder = 10] = "RenameFolder", JJ
      }({}),
      eJ = function(JJ) {
        return JJ[JJ.Joined = 0] = "Joined", JJ[JJ.Updates = 1] = "Updates", JJ[JJ.Presence = 2] = "Presence", JJ[JJ.RemoteCursor = 3] = "RemoteCursor", JJ[JJ.ForceClose = 4] = "ForceClose", JJ[JJ.LobbyFilesChanged = 5] = "LobbyFilesChanged", JJ[JJ.EngineSettings = 6] = "EngineSettings", JJ
      }({});

    function XJ(JJ) {
      return "lobby" === JJ.kind ? `lobby:${JJ.path}` : `codeBlock:${JJ.pos[0]},${JJ.pos[1]},${JJ.pos[2]}`
    }

    function AJ(JJ) {
      if ("lobby" === JJ) return {
        kind: "lobby",
        path: FJ.g
      };
      if (JJ.startsWith("lobby:")) {
        const cJ = JJ.slice(6);
        return hJ(cJ) ? {
          kind: "lobby",
          path: cJ
        } : null
      }
      const cJ = JJ.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return cJ ? {
        kind: "codeBlock",
        pos: [parseInt(cJ[1]), parseInt(cJ[2]), parseInt(cJ[3])]
      } : null
    }

    function qJ(JJ) {
      return JJ.endsWith(".d.ts")
    }

    function jJ(JJ) {
      return JJ.endsWith(".ts") && !qJ(JJ)
    }
    const YJ = 64;

    function hJ(JJ) {
      if (!JJ || JJ !== JJ.trim()) return !1;
      if (JJ.length > YJ) return !1;
      if (JJ.startsWith("/") || JJ.includes("\\") || JJ.includes("\0")) return !1;
      if (!qJ(JJ) && !jJ(JJ) && ! function(JJ) {
          return JJ.endsWith(".js") && !JJ.endsWith(".min.js") && !JJ.endsWith(".bundle.js")
        }(JJ)) return !1;
      const cJ = JJ.split("/");
      for (const ZJ of cJ)
        if ("" === ZJ || "." === ZJ || ".." === ZJ) return !1;
      return !0
    }
    const DJ = 14e3
  },
  37992: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => FJ,
      d: () => UJ
    });
    const FJ = ["description", "label"];

    function UJ(JJ) {
      const cJ = JJ.type;
      return {
        type: cJ,
        params: JJ[cJ]
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);