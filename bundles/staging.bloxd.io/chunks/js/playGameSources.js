export const id = 46;
export const ids = [46];
export const modules = {
  39167: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => qU,
      d: () => EU,
      e: () => pU
    });
    const tU = 6e3;

    function pU(UU, RU) {
      return [Math.floor(UU[0] / RU) * RU, Math.floor(UU[1] / RU) * RU, Math.floor(UU[2] / RU) * RU]
    }

    function EU(UU) {
      const RU = (null !== UU && void 0 !== UU ? UU : "").match(/-?\d+(?:\.\d+)?/g);
      return RU && RU.length >= 3 ? [Number(RU[0]), Number(RU[1]), Number(RU[2])] : null
    }

    function PU(UU, RU) {
      return UU === RU ? String(UU) : `${UU}-${RU}`
    }

    function TU(UU, RU, gU, tU) {
      const pU = [];
      let EU = new Map;
      for (let PU = UU[2]; PU < UU[2] + RU; PU++) {
        const TU = new Map;
        let qU = UU[0];
        for (; qU < UU[0] + RU;) {
          const pU = tU(qU, gU, PU);
          let KU = qU;
          for (; KU + 1 < UU[0] + RU && tU(KU + 1, gU, PU) === pU;) KU++;
          if (null !== pU) {
            const UU = `${qU} ${KU} ${pU}`,
              RU = EU.get(UU);
            RU ? (RU.z1 = PU, EU.delete(UU), TU.set(UU, RU)) : TU.set(UU, {
              x0: qU,
              x1: KU,
              z0: PU,
              z1: PU,
              name: pU
            })
          }
          qU = KU + 1
        }
        pU.push(...EU.values()), EU = TU
      }
      return pU.push(...EU.values()), pU.sort(((UU, RU) => UU.z0 - RU.z0 || UU.x0 - RU.x0)).map((UU => `x${PU(UU.x0,UU.x1)} z${PU(UU.z0,UU.z1)} ${UU.name}`))
    }

    function qU(UU, RU, gU, pU) {
      let EU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : tU;
      const qU = [UU[0] + RU - 1, UU[1] + RU - 1, UU[2] + RU - 1],
        KU = null !== pU && pU.every(((RU, gU) => Math.floor(RU) >= UU[gU] && Math.floor(RU) <= qU[gU])),
        cU = [`The chunk from ${UU.join(" ")} to ${qU.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
      null !== pU && cU.push(`The player's feet are at ${pU.map(Math.floor).join(" ")}, ${KU?"in this chunk":"outside this chunk"}.`);
      const GU = [];
      for (let tU = UU[1]; tU <= qU[1]; tU++) {
        const pU = TU(UU, RU, tU, gU).join("; "),
          EU = GU[GU.length - 1];
        (null === EU || void 0 === EU ? void 0 : EU.boxes) === pU ? EU.to = tU : GU.push({
          from: tU,
          to: tU,
          boxes: pU
        })
      }
      const jU = GU.filter((UU => "" !== UU.boxes));
      0 === jU.length && cU.push("It is all air.");
      let uU = cU.join("\n").length;
      for (const tU of jU) {
        const UU = `y${PU(tU.from,tU.to)}: ${tU.boxes}`;
        if (uU += UU.length + 1, uU > EU) {
          cU.push(`Cut short: the layers from y${tU.from} up aren't shown, as there are too many blocks.`);
          break
        }
        cU.push(UU)
      }
      return cU.join("\n")
    }
  },
  8427: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => pU
    });
    var tU = gU(21);

    function pU() {
      return !tU.b.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  36480: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => PU,
      h: () => EU,
      i: () => pU
    });
    const tU = [.25, .5, 1, 2, 4, 8, 16];

    function pU(UU, RU) {
      const gU = tU;
      let pU = gU.indexOf(UU);
      return -1 === pU && (pU = gU.findIndex((RU => RU >= UU)), -1 === pU && (pU = gU.length - 1)), "up" === RU ? gU[Math.min(pU + 1, gU.length - 1)] : gU[Math.max(pU - 1, 0)]
    }

    function EU(UU) {
      return UU <= tU[0]
    }

    function PU(UU) {
      return UU >= tU[tU.length - 1]
    }
  },
  36072: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => pU,
      d: () => EU
    });
    let tU = !1;

    function pU() {
      return tU
    }

    function EU(UU) {
      return tU !== UU && (tU = UU, !0)
    }
  },
  38524: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => EU
    });
    var tU = gU(24),
      pU = gU(1821);

    function EU(UU) {
      let {
        taskId: RU,
        progress: gU
      } = UU;
      const tU = pU.b.get("_tasks");
      null !== tU && void 0 !== tU && tU[RU] && pU.b.apply({
        _tasks: {
          ...tU,
          [RU]: {
            ...tU[RU],
            progress: gU
          }
        }
      })
    }
    tU.p.subscribe("clientTaskProgress", (UU => {
      EU(UU)
    }))
  },
  39133: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => jU,
      g: () => CU,
      h: () => KU,
      j: () => GU,
      k: () => qU,
      n: () => PU,
      o: () => cU,
      q: () => hU
    });
    var tU = gU(1821),
      pU = gU(24),
      EU = gU(1829);
    const PU = (0, EU.n)((function() {
        var UU, RU, gU, pU;
        return {
          health: null !== (UU = tU.b.get("_health")) && void 0 !== UU ? UU : null,
          maxHealth: null !== (RU = tU.b.get("_totalMaxHealth")) && void 0 !== RU ? RU : null,
          shield: null !== (gU = tU.b.get("_shield")) && void 0 !== gU ? gU : null,
          maxShield: null !== (pU = tU.b.get("maxShield")) && void 0 !== pU ? pU : null
        }
      }), [], (0, EU.k)("_health", "_totalMaxHealth", "_shield", "maxShield")),
      TU = [{
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

    function qU(UU, RU) {
      return TU[(UU ? 2 : 0) + (RU ? 1 : 0)]
    }
    const KU = (0, EU.n)((function() {
      var UU;
      return null !== (UU = tU.b.get("_aura")) && void 0 !== UU ? UU : null
    }), [], (0, EU.k)("_aura"));

    function cU(UU) {
      return {
        watch: RU => (0, pU.t)("shotPlayer", (gU => {
          let {
            playerId: tU,
            damage: pU,
            wasCrit: EU,
            distance: PU
          } = gU;
          UU(tU) && RU({
            damage: pU,
            wasCrit: EU,
            distance: PU
          })
        }))
      }
    }

    function GU(UU) {
      return (0, EU.b)("chat", (RU => {
        let {
          serverChatMsgId: gU,
          content: tU,
          chatterEId: pU
        } = RU;
        return {
          serverChatMsgId: null !== gU && void 0 !== gU ? gU : null,
          content: tU,
          author: pU ? UU(pU) : null
        }
      }))
    }
    class jU {
      constructor() {
        this.shown = null, this.needed = null, this.neededSince = 0
      }
      update(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const gU = this.shown;
        return UU !== this.needed && (this.needed = UU, this.neededSince = RU, null === UU && (this.shown = null)), this.shown !== this.needed && RU - this.neededSince > 200 && (this.shown = this.needed), this.shown !== gU
      }
    }

    function uU(UU) {
      return [{
        translationKey: `touchKeys:${UU}`
      }]
    }
    const CU = {
      open: uU("open"),
      close: uU("close"),
      milk: uU("milk"),
      shear: uU("shear"),
      tame: uU("tame"),
      feed: uU("feed"),
      ride: uU("ride")
    };

    function hU(UU) {
      return [{
        translationKey: "touchKeys:tameWith"
      }, " ", {
        icon: UU
      }]
    }
  },
  40140: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => TU,
      e: () => PU
    });
    var tU = gU(2973);
    let pU = null,
      EU = null;

    function PU() {
      return EU ??= gU.e(208).then((() => gU(35922))).then((UU => {
        let {
          ITEM_SPRITES: RU,
          ITEM_SPRITES_WITHOUT_FILE: gU,
          ITEM_FILES_WITHOUT_SPRITE: EU
        } = UU;
        pU = function(UU, RU, gU) {
          const pU = new Set,
            EU = (0, tU.s)(RU);
          let PU = 0;
          for (const [tU, TU] of UU.entries()) tU === EU[PU] ? PU++ : pU.add(TU);
          if ("" !== gU)
            for (const TU of gU.split(tU.q)) pU.add(TU);
          return pU
        }(RU.split(tU.q), gU, EU)
      }), (UU => {
        throw EU = null, UU
      })), EU
    }

    function TU(UU) {
      var RU, gU;
      return null !== (RU = null === (gU = pU) || void 0 === gU ? void 0 : gU.has(UU)) && void 0 !== RU && RU
    }
  },
  39150: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => tU,
      d: () => EU,
      f: () => pU
    });
    const tU = 128;

    function pU(UU, RU, gU, tU) {
      const pU = 2 * RU - 1,
        EU = 1 - 2 * gU,
        PU = UU(0) - pU * UU(3),
        TU = UU(4) - pU * UU(7),
        qU = UU(8) - pU * UU(11),
        KU = UU(1) - EU * UU(3),
        cU = UU(5) - EU * UU(7),
        GU = UU(9) - EU * UU(11);
      tU[0] = TU * GU - qU * cU, tU[1] = qU * KU - PU * GU, tU[2] = PU * cU - TU * KU;
      const jU = tU[0] * UU(3) + tU[1] * UU(7) + tU[2] * UU(11) < 0 ? -1 : 1,
        uU = Math.hypot(tU[0], tU[1], tU[2]) * jU;
      return tU[0] /= uU, tU[1] /= uU, tU[2] /= uU, tU
    }

    function EU(UU, RU, gU, tU, pU, EU) {
      const PU = [Math.floor(RU[0]), Math.floor(RU[1]), Math.floor(RU[2])],
        TU = [0, 0, 0],
        qU = [1 / 0, 1 / 0, 1 / 0],
        KU = [1 / 0, 1 / 0, 1 / 0];
      for (let jU = 0; jU < 3; jU++) TU[jU] = Math.sign(gU[jU]), 0 !== TU[jU] && (KU[jU] = Math.abs(1 / gU[jU]), qU[jU] = (PU[jU] + (TU[jU] > 0 ? 1 : 0) - RU[jU]) / gU[jU]);
      let cU = 0,
        GU = Math.abs(gU[0]) > Math.abs(gU[1]) ? 0 : 1;
      for (Math.abs(gU[2]) > Math.abs(gU[GU]) && (GU = 2); cU <= tU;) {
        if (UU(PU[0], PU[1], PU[2])) return pU[0] = PU[0], pU[1] = PU[1], pU[2] = PU[2], EU[0] = 0, EU[1] = 0, EU[2] = 0, EU[GU] = -TU[GU], !0;
        GU = qU[0] < qU[1] ? 0 : 1, qU[2] < qU[GU] && (GU = 2), cU = qU[GU], PU[GU] += TU[GU], qU[GU] += KU[GU]
      }
      return !1
    }
  },
  39130: (UU, RU, gU) => {
    function tU(UU, RU, gU) {
      return Math.hypot(UU[0] - RU[0], UU[1] - RU[1], UU[2] - RU[2]) < gU + .5
    }
    gU.d(RU, {
      b: () => tU
    })
  },
  38540: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => cU
    });
    var tU = gU(1217),
      pU = gU(1320),
      EU = gU(21),
      PU = gU(1305),
      TU = gU(1316),
      qU = gU(1475),
      KU = gU(36033);

    function cU(UU) {
      let {
        UU: RU,
        RU: gU
      } = UU;
      const cU = null !== RU && void 0 !== RU ? RU : (0, TU.d)().gameNameWithVariation;
      (0, tU.M)(cU) && ((0, KU.i)(), (0, PU.ib)((() => {
        console.log("Received matchmaking order from game server to game", RU), (0, EU.h)("inGameReplay"), (0, qU.navigatePreserveSearch)((0, pU.e)(cU, null !== gU && void 0 !== gU ? gU : void 0))
      }), "video_start"))
    }
  },
  38715: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => EU
    });
    var tU = gU(24),
      pU = gU(1844);

    function EU(UU) {
      var RU, gU;
      const EU = (0, pU.m)(null !== (RU = null === (gU = pU.r.toggleFreeCam) || void 0 === gU ? void 0 : gU[0]) && void 0 !== RU ? RU : null);
      tU.p.yh("showBottomMessage", {
        message: `Free Camera ${UU?"Enabled":"Disabled"}${EU?` - Press ${EU} to toggle`:""}`,
        timeoutLength: 2e3,
        type: "Warning"
      })
    }
  },
  38528: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => qU,
      h: () => PU,
      l: () => TU,
      o: () => KU
    });
    var tU = gU(24),
      pU = gU(1333);
    const EU = new Map;

    function PU(UU, RU) {
      tU.p.yh("newUiRequest", {
        id: UU,
        clientParameters: RU
      }, !0)
    }

    function TU(UU) {
      tU.p.yh("removeUiRequest", UU, !0);
      const RU = EU.get(UU);
      RU && (RU.tearDownNotification(), EU.delete(UU))
    }

    function qU() {
      tU.p.yh("clearUiRequests");
      for (const UU of EU.values()) UU.tearDownNotification();
      EU.clear()
    }

    function KU(UU, RU, gU) {
      const tU = pU.NotificationProvider.showPromptPopup({
        title: RU,
        confirmText: "general:yes",
        cancelText: "general:no",
        unlockPointerKey: "uiRequestPopup"
      });
      EU.set(UU, tU), tU.getResult().then((RU => {
        EU.delete(UU), "notificationTornDown" !== RU && gU(RU)
      }))
    }
  },
  39158: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => GU,
      d: () => jU
    });
    var tU = gU(189),
      pU = gU(39167);
    const EU = 20;

    function PU(UU) {
      return UU.map(Math.floor).join(" ")
    }

    function TU(UU) {
      return null === UU.amount || 1 === UU.amount ? UU.name : `${UU.amount} ${UU.name}`
    }
    var qU = gU(39171),
      KU = gU(1821),
      cU = gU(1316);

    function GU(UU, RU) {
      if (!UU) return qU.b;
      const gU = UU.playerFeet();
      if (!gU) return "The player isn't in the world yet, so no blocks can be seen.";
      const EU = tU.e.jC,
        PU = (0, pU.e)(null !== RU && void 0 !== RU ? RU : gU, EU),
        TU = UU.chunkBlocks(PU);
      return TU ? (0, pU.b)(PU, EU, ((RU, gU, tU) => {
        const pU = TU(RU, gU, tU);
        return 0 === pU ? null : UU.blockName(pU).split("|")[0]
      }), gU) : `The chunk from ${PU.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${gU.map(Math.floor).join(" ")}.`
    }

    function jU(UU) {
      var RU, gU, tU;
      if (!UU) return qU.f;
      const pU = UU.playerFeet();
      if (!pU) return "The player isn't in the world yet, so nothing in it can be seen.";
      const {
        slots: GU,
        heldSlot: jU
      } = UU.inventory();
      return function(UU) {
        const RU = [];
        null !== UU.game && RU.push(`Game: ${UU.game}.`);
        const gU = null === UU.health ? "" : `, health ${Math.round(UU.health)}${null===UU.maxHealth?"":` of ${Math.round(UU.maxHealth)}`}`;
        RU.push(`The player (the creator) stands at ${PU(UU.position)}${gU}, ${UU.creative?"in":"not in"} creative mode.`);
        const tU = UU.slots[UU.heldSlot];
        RU.push(tU ? `Holding (slot ${UU.heldSlot}): ${TU(tU)}.` : `Holding nothing (slot ${UU.heldSlot} is empty).`);
        const pU = UU.slots.flatMap(((UU, RU) => UU ? [`slot ${RU}: ${TU(UU)}`] : []));
        RU.push(pU.length > 0 ? `Inventory: ${pU.join(", ")}.` : "Inventory: empty.");
        const qU = RU => Math.hypot(RU.position[0] - UU.position[0], RU.position[1] - UU.position[1], RU.position[2] - UU.position[2]),
          KU = [...UU.nearby].sort(((UU, RU) => qU(UU) - qU(RU)));
        if (0 === KU.length) RU.push("No other players or mobs are near enough to see.");
        else {
          RU.push("Near them, nearest first:");
          for (const UU of KU.slice(0, EU)) {
            const gU = "player" === UU.kind ? `player "${UU.name||"?"}"` : UU.name && UU.name !== UU.kind ? `${UU.kind} "${UU.name}"` : UU.kind,
              tU = Math.round(qU(UU));
            RU.push(`- ${gU} at ${PU(UU.position)}, ${tU} block${1===tU?"":"s"} away`)
          }
          KU.length > EU && RU.push(`- and ${KU.length-EU} more further away`)
        }
        return UU.droppedItems > 0 && RU.push(`${UU.droppedItems} dropped item${1===UU.droppedItems?" is":"s are"} on the ground nearby.`), RU.join("\n")
      }({
        game: null !== (RU = (0, cU.d)().gameNameWithVariation) && void 0 !== RU ? RU : null,
        position: pU,
        health: null !== (gU = KU.b.get("_health")) && void 0 !== gU ? gU : null,
        maxHealth: null !== (tU = KU.b.get("_totalMaxHealth")) && void 0 !== tU ? tU : null,
        creative: !0 === KU.b.get("creative"),
        heldSlot: jU,
        slots: GU,
        nearby: UU.nearby(),
        droppedItems: UU.droppedItems()
      })
    }
  },
  38549: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => TU,
      g: () => qU,
      i: () => KU
    });
    var tU = gU(1217),
      pU = gU(994),
      EU = gU(36413),
      PU = gU(24);

    function TU(UU) {
      let {
        lobbyName: RU,
        gameNameWithVariation: gU
      } = UU;
      return !(0, tU.P)(RU) || null !== gU && (gU.startsWith("testGym") || (0, pU.m)(gU))
    }

    function qU(UU) {
      return UU.uR === EU.b.Leave || UU.uR === EU.b.Cursor
    }

    function KU(UU) {
      PU.p.yh("codeCollab", {
        type: UU.uR,
        docKey: UU.CR,
        version: UU.hR,
        editorCount: UU.QR,
        peers: UU.eR,
        updates: UU.WR,
        playerId: UU.fR,
        playerName: UU.xR,
        colour: UU.mR,
        anchor: UU.IR,
        head: UU.JR,
        existingCursors: UU.wR,
        files: UU.nR,
        engineSettings: UU.bR
      })
    }
  },
  40096: (UU, RU, gU) => {
    gU.d(RU, {
      A: () => VU,
      E: () => LU,
      I: () => vU,
      K: () => aU,
      M: () => XU,
      O: () => ZU,
      Q: () => iU,
      U: () => FU,
      W: () => BU,
      c: () => AU,
      g: () => HU,
      h: () => bU,
      j: () => zU,
      n: () => oU,
      q: () => nU,
      u: () => dU,
      w: () => YU,
      z: () => rU
    });
    var tU = gU(1362),
      pU = gU(24),
      EU = gU(1287),
      PU = gU(2233),
      TU = gU(4477),
      qU = gU(4443);
    let KU, cU = !1,
      GU = !1,
      jU = !1,
      uU = !1;
    const CU = 1300,
      hU = 3e3;
    let QU = 0,
      eU = !1,
      WU = !1,
      fU = 0;
    const xU = 2;
    let mU = !1,
      IU = !1;
    const JU = new Set,
      wU = new Set;

    function nU() {
      return cU
    }

    function bU() {
      return WU
    }

    function oU() {
      return IU
    }

    function ZU() {
      return (0, EU.r)() && !IU
    }

    function aU(UU) {
      let RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (UU !== IU) {
        IU = UU;
        for (const UU of [...wU]) UU(IU);
        RU && FU()
      }
    }

    function YU(UU) {
      return wU.add(UU), () => {
        wU.delete(UU)
      }
    }

    function BU() {
      (0, TU.f)(PU.z.Menu, (0, EU.r)() ? 0 : PU.z.Menu)
    }

    function VU() {
      WU = !1, fU = 0, BU(), FU()
    }

    function rU(UU) {
      return JU.add(UU), () => {
        JU.delete(UU)
      }
    }

    function XU(UU) {
      GU = !1, UU !== cU && (cU = UU, uU = !1, clearTimeout(KU), jU = !cU && mU, cU ? (eU = !1, WU = !1, fU = 0) : ZU() && !mU && (WU = !0), mU = !1, cU && !ZU() && DU(), NU(), jU && FU())
    }

    function vU(UU) {
      UU !== eU && (eU = UU, UU || FU())
    }

    function dU() {
      GU = !1, uU || !0 !== yU() || (uU = !0, clearTimeout(KU), KU = setTimeout(SU, CU))
    }

    function HU() {
      return (!GU || performance.now() - QU > hU) && (GU = (0, qU.J)().lockPointer(), QU = performance.now()), GU
    }

    function SU() {
      sU() && kU() && HU()
    }

    function sU() {
      return ZU() && !cU && !eU && !(0, tU.g)()
    }

    function yU() {
      var UU;
      return "undefined" === typeof navigator || null === (UU = navigator.userActivation) || void 0 === UU ? void 0 : UU.isActive
    }

    function kU() {
      return jU && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== yU()
    }

    function FU() {
      ZU() ? sU() && !WU && kU() && HU() : cU && !mU && DU()
    }

    function iU() {
      WU ? navigator.vendor.startsWith("Apple") ? MU() : fU = xU : FU()
    }

    function AU() {
      fU > 0 && 0 === --fU && MU()
    }

    function zU() {
      fU = 0
    }

    function MU() {
      sU() && !0 === yU() && HU()
    }

    function DU() {
      mU = !0, (0, qU.J)().unlockPointer()
    }

    function LU() {
      GU = !1, jU = !1, uU = !1, clearTimeout(KU), eU = !1, WU = !1, fU = 0, mU = !1;
      const UU = cU;
      cU = !1, UU && NU()
    }

    function NU() {
      for (const UU of [...JU]) UU(cU);
      pU.p.yh("pointerLockUpdate", cU)
    }
  },
  40067: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => jU,
      f: () => TU,
      h: () => GU,
      i: () => KU,
      k: () => PU,
      o: () => cU,
      p: () => qU
    });
    let tU = null,
      pU = null,
      EU = null;

    function PU(UU) {
      tU = UU
    }

    function TU() {
      return tU
    }

    function qU(UU) {
      pU = UU
    }

    function KU() {
      return pU
    }

    function cU(UU) {
      EU = UU
    }

    function GU() {
      return EU
    }

    function jU() {
      var UU, RU;
      return !0 === (null === (UU = pU) || void 0 === UU || null === (RU = UU.currentViewer) || void 0 === RU ? void 0 : RU.inPlayback)
    }
  },
  40116: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => PU,
      f: () => EU,
      g: () => TU
    });
    var tU = gU(39955),
      pU = gU(39971);

    function EU(UU) {
      if (UU.queries.drawCensus() < tU.zb.BYTES) return null;
      const RU = UU.memoryData(UU.scratch(), tU.zb.BYTES, 4, "the draw census");
      return null === RU ? null : {
        terrainOpaque: tU.zb.terrainOpaque(RU, 0),
        terrainTransparent: tU.zb.terrainTransparent(RU, 0),
        terrainPack: tU.zb.terrainPack(RU, 0),
        earthSky: tU.zb.earthSky(RU, 0),
        skyMeshes: tU.zb.skyMeshes(RU, 0),
        regular: tU.zb.regular(RU, 0),
        thin: tU.zb.thin(RU, 0),
        line: tU.zb.line(RU, 0),
        text: tU.zb.text(RU, 0),
        particles: tU.zb.particles(RU, 0)
      }
    }

    function PU(UU) {
      const {
        terrainOpaque: RU,
        terrainTransparent: gU,
        earthSky: tU,
        skyMeshes: pU,
        regular: EU,
        thin: PU,
        line: TU,
        text: qU,
        particles: KU
      } = UU;
      return RU + gU + tU + pU + EU + PU + TU + qU + KU
    }

    function TU() {
      const UU = (0, pU.i)();
      return !0 === (null === UU || void 0 === UU ? void 0 : UU.isCoreRunning) ? function(UU) {
        const RU = EU(UU);
        if (null === RU) return [];
        const {
          terrainOpaque: gU,
          terrainTransparent: tU,
          terrainPack: pU,
          earthSky: TU,
          skyMeshes: qU,
          regular: KU,
          thin: cU,
          line: GU,
          text: jU,
          particles: uU
        } = RU;
        return [{
          label: "Drawn",
          value: `${PU(RU)}`
        }, {
          label: "Terrain",
          value: `${gU} opaque / ${tU} transparent (${pU} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${KU} / ${cU}`
        }, {
          label: "Text / Lines",
          value: `${jU} / ${GU}`
        }, {
          label: "Sky / Particles",
          value: `${TU+qU} / ${uU}`
        }]
      }(UU.api) : []
    }
  },
  40121: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      loadIcons: () => oU,
      setIconFileOverrides: () => ZU,
      wasmIconLookups: () => HU,
      wasmIconQueries: () => dU
    });
    var tU = gU(4162),
      pU = gU(4131),
      EU = gU(40124),
      PU = gU(1808),
      TU = gU(1800),
      qU = gU(2969),
      KU = gU(2973);
    let cU = null,
      GU = null;

    function jU(UU) {
      const RU = UU.startsWith(KU.i),
        [gU, tU = gU, pU = gU] = (RU ? UU.slice(KU.i.length) : UU).split(KU.f);
      return {
        top: gU,
        left: tU,
        right: pU,
        half: RU
      }
    }

    function uU(UU) {
      const RU = null === cU ? void 0 : (0, qU.c)(UU),
        gU = void 0 === RU ? 0 : cU.codes[RU];
      return 0 === gU ? void 0 : cU.pool[gU - 1]
    }
    var CU = gU(2966),
      hU = gU(4120),
      QU = gU(4153),
      eU = gU(40133);
    const WU = "item:";
    let fU = null,
      xU = null,
      mU = null,
      IU = null,
      JU = !1,
      wU = !1,
      nU = null,
      bU = 0;

    function oU() {
      return wU || (wU = !0, (0, QU.g)().then((UU => {
        UU && (0, PU.c)()
      }))), mU ??= Promise.all([(0, CU.f)(), (GU ??= gU.e(1).then((() => gU(41972))).then((UU => {
        let {
          BLOCK_FACE_RUNS: RU,
          BLOCK_FACES: gU,
          MAX_FACE_ITEM_ID: tU
        } = UU;
        cU = {
          codes: (0, KU.t)(RU, tU + 1),
          pool: gU.split(KU.q).map(jU)
        }
      }), (UU => {
        throw GU = null, UU
      })), GU), (0, eU.d)(), gU.e(189).then((() => gU(9009)))]).then((UU => {
        let [, , RU, gU] = UU;
        RU.followBundledTextures(), fU = RU, xU = gU, (0, PU.c)()
      }), (UU => {
        mU = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", UU)
      })), mU
    }

    function ZU(UU) {
      nU = UU, bU++, (0, PU.c)()
    }

    function aU(UU) {
      var RU, gU;
      return null !== (RU = null === (gU = nU) || void 0 === gU ? void 0 : gU.itemSprite(UU)) && void 0 !== RU ? RU : fU.itemSpriteUrl(UU)
    }

    function YU(UU) {
      var RU, gU;
      return null !== (RU = null === (gU = nU) || void 0 === gU ? void 0 : gU.blockTexture(UU)) && void 0 !== RU ? RU : fU.blockTextureUrl(UU)
    }

    function BU(UU) {
      var RU;
      return null !== (RU = (0, CU.c)(UU)) && void 0 !== RU ? RU : UU
    }

    function VU(UU, RU) {
      var gU, tU, pU;
      return null !== (gU = null !== (tU = null !== (pU = YU(UU)) && void 0 !== pU ? pU : null === RU || void 0 === RU ? void 0 : RU.rotated[UU]) && void 0 !== tU ? tU : null === RU || void 0 === RU ? void 0 : RU.animated[UU]) && void 0 !== gU ? gU : fU.notFoundUrl()
    }

    function rU(UU) {
      return void 0 !== (0, qU.c)(UU) ? UU : /^[1-9][0-9]*$/.test(UU) ? (0, qU.f)(Number(UU)) : void 0
    }

    function XU(UU) {
      var RU;
      if (UU.startsWith(WU)) {
        var gU;
        const RU = (0, CU.c)(UU.slice(5));
        return null !== (gU = void 0 === RU ? null : aU(RU)) && void 0 !== gU ? gU : fU.notFoundUrl()
      }
      return null !== (RU = fU.particleUrl(UU)) && void 0 !== RU ? RU : fU.notFoundUrl()
    }

    function vU(UU, RU) {
      return "StairsBlock" === UU ? UU : RU ? "SlabBlock" : "CubeBlock"
    }
    const dU = {
        async blockIcon(UU) {
          var RU;
          let {
            name: tU,
            size: pU,
            lineWidth: EU
          } = UU;
          await oU();
          const TU = null !== (RU = rU(tU)) && void 0 !== RU ? RU : tU,
            KU = (0, QU.b)(TU, pU, EU);
          if (null !== KU) return KU;
          const cU = uU(TU),
            GU = (0, qU.c)(TU),
            jU = void 0 === GU || null === xU ? void 0 : xU.itemTypeNameOf(GU);
          if (null === fU || void 0 === cU) return "";
          const CU = [cU.top, cU.left, cU.right].some((UU => null === YU(UU))),
            eU = CU ? await (IU ??= gU.e(201).then((() => gU(33915))).then((UU => (JU && (JU = !1, (0, PU.c)()), {
              rotated: UU.rotatedBlockTextures,
              animated: UU.animatedBlockTextures
            })), (UU => (IU = null, JU = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", UU), null))), IU) : null;
          if (CU && null === eU) return "";
          const WU = {
              top: VU(cU.top, eU),
              left: VU(cU.left, eU),
              right: VU(cU.right, eU),
              itemType: vU(jU, cU.half)
            },
            mU = 0 === bU ? TU : `${TU}#${bU}`;
          return (await (0, hU.e)()).drawBlockIconUrl(mU, pU, EU, (() => WU))
        }
      },
      HU = {
        itemIcon: function(UU) {
          var RU, gU;
          if (null === fU) return oU(), TU.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(UU);
          if ((0, pU.k)(UU)) return {
            kind: "icon",
            url: null !== (gU = fU.ingameIconUrl(UU)) && void 0 !== gU ? gU : fU.notFoundUrl()
          };
          if (UU.startsWith(pU.e)) return {
            kind: "icon",
            url: XU(UU.slice(pU.e.length))
          };
          if (0 === (0, qU.g)()) return (0, EU.c)(), TU.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(UU);
          const PU = null !== (RU = rU(UU)) && void 0 !== RU ? RU : UU,
            KU = (0, qU.c)(PU),
            cU = void 0 === KU ? void 0 : xU.itemTypeNameOf(KU);
          if (void 0 !== uU(PU)) return {
            kind: "drawnBlock"
          };
          const GU = function(UU) {
            var RU;
            return null !== (RU = aU(BU(UU))) && void 0 !== RU ? RU : fU.notFoundUrl()
          }(PU);
          if ((0, QU.e)(PU) && ! function(UU) {
              return null !== nU && (null !== nU.itemSprite(BU(UU)) || null !== nU.model(UU))
            }(PU)) return {
            kind: "model",
            url: GU
          };
          if ("Gun" === cU) return {
            kind: "gun",
            url: GU
          };
          if (void 0 !== KU && "GrayscaleArmour" === xU.itemTypeOf(KU) || Object.hasOwn(tU.d, PU)) {
            var jU;
            const RU = null !== (jU = (0, tU.h)(UU)) && void 0 !== jU ? jU : (0, tU.h)(PU);
            if (RU) return {
              kind: "item",
              url: GU,
              tint: RU
            }
          }
          return {
            kind: "item",
            url: GU
          }
        },
        hasIcon: function(UU) {
          return void 0 !== rU(UU) || (0, pU.k)(UU) || UU.startsWith(pU.e)
        },
        isItemName: function(UU) {
          return void 0 !== rU(UU)
        }
      }
  },
  40061: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      attachPlayGameSources: () => Fg,
      playGameSources: () => kg
    });
    var tU = gU(1800),
      pU = gU(40067),
      EU = gU(4443),
      PU = gU(39971),
      TU = gU(40071),
      qU = gU(39133),
      KU = gU(24),
      cU = gU(4456),
      GU = gU(4449),
      jU = gU(40003),
      uU = gU(40039),
      CU = gU(40079),
      hU = gU(40016);
    (0, hU.h)(cU.dc.Chat, (UU => {
      if (UU.payloadKind !== GU.kc.Msgpack) return;
      const RU = function(UU) {
        if (null === UU || "object" !== typeof UU || !("content" in UU)) return null;
        const {
          chatMsgId: RU,
          content: gU,
          chatterEId: tU
        } = UU;
        return {
          serverChatMsgId: null !== RU && void 0 !== RU ? RU : void 0,
          content: gU,
          chatterEId: void 0 === tU || null === tU ? void 0 : String(tU)
        }
      }((0, jU.b)(UU.payload));
      null !== RU && KU.p.yh("chat", RU, !0)
    }));
    const QU = {
        chatReceived: (0, qU.j)((function(UU) {
          var RU, gU, tU;
          return {
            id: UU,
            name: null !== (RU = CU.c.getName(UU)) && void 0 !== RU ? RU : null,
            local: (0, uU.e)() === UU,
            profileEffect: null !== (gU = null === (tU = (0, CU.g)(UU)) || void 0 === tU ? void 0 : tU.profileEffect) && void 0 !== gU ? gU : null
          }
        }))
      },
      eU = {
        sendChatMessage(UU) {
          var RU;
          let {
            aP: gU,
            channelName: tU
          } = UU;
          null === (RU = (0, PU.i)()) || void 0 === RU || RU.clientApi.sendChat(gU, tU)
        }
      };
    var WU = gU(189),
      fU = gU(1821),
      xU = gU(39955),
      mU = gU(39130);
    const IU = [0, 0, 0],
      JU = {
        codeBlockClickable(UU) {
          var RU;
          const gU = (0, PU.i)();
          if (null === gU || void 0 === gU || !gU.isSessionLive) return !1;
          const tU = gU.api;
          if (0 !== (xU.w.playerFlags(tU.apiView, 0) & xU.Pd.Crouching)) return !1;
          const pU = tU.queries.directorEntity(tU.localId) >= xU.vb.BYTES ? tU.memoryData(tU.scratch(), xU.vb.BYTES, 8, "the local player's DirectorEntity") : null;
          if (null === pU) return !1;
          for (let EU = 0; EU < 3; EU++) IU[EU] = xU.vb.feet(pU, 0, EU);
          return IU[1] += xU.vb.eyeHeight(pU, 0), (0, mU.b)(IU, UU, null !== (RU = fU.b.get("blockReach")) && void 0 !== RU ? RU : WU.e.zW)
        }
      },
      wU = {
        clickCodeBlock(UU) {
          var RU;
          null === (RU = (0, PU.i)()) || void 0 === RU || RU.clickCodeBlock(UU)
        }
      };
    var nU = gU(39982),
      bU = gU(40081),
      oU = gU(994),
      ZU = gU(38590),
      aU = gU(4438),
      YU = gU(39991),
      BU = gU(39974),
      VU = gU(39994);

    function rU(UU) {
      if (null === UU) return null;
      const RU = [];
      for (const gU of UU) {
        const UU = Object.keys(gU)[0];
        if ("rU" === UU) {
          const {
            str: UU,
            style: tU,
            clickableUrl: pU
          } = gU.rU, EU = Object.keys(UU)[0], PU = UU[EU];
          "string" !== EU && "styledEntityName" !== EU && "styledTranslatedText" !== EU || RU.push({
            str: PU,
            style: tU,
            clickableUrl: pU
          })
        } else RU.push(gU[UU])
      }
      return RU
    }
    const XU = {
      screenPos(UU) {
        var RU, gU;
        return null !== (RU = null === (gU = (0, PU.i)()) || void 0 === gU ? void 0 : gU.renderFrame.projectWorldPosToScreenPos(UU)) && void 0 !== RU ? RU : {
          x: 0,
          y: 0
        }
      }
    };
    let vU = !1;

    function dU() {
      vU || (vU = !0, (0, hU.h)(cU.dc.ProgressBarUpdate, (UU => {
        const RU = (0, VU.f)(UU);
        (0, VU.c)(RU) && KU.p.yh("progressBarUpdate", RU, !0)
      })), (0, hU.h)(YU.B, (UU => {
        const RU = (0, VU.e)(YU.B, UU);
        RU && KU.p.yh("middleScreenBarInitiate", {
          duration: RU.Og,
          Ut: RU.Ut,
          horizBarRemOffset: RU.Rt
        }, !0)
      })), (0, hU.h)(cU.dc.RemoveMiddleScreenBar, (() => {
        KU.p.yh("middleScreenBarRemove")
      })), (0, hU.h)(YU.fb, (UU => {
        const RU = (0, VU.e)(YU.fb, UU);
        if (RU) {
          var gU;
          const UU = RU.LR ? null === (gU = (0, PU.i)()) || void 0 === gU ? void 0 : gU.renderFrame.projectDirectionToScreenPos(RU.LR) : void 0;
          KU.p.yh("sendHitmarker", {
            DR: RU.DR,
            screenPos: UU
          }, !0)
        }
      })), (0, hU.h)(YU.lb, (UU => {
        const RU = (0, VU.e)(YU.lb, UU);
        if (RU) {
          const {
            id: UU,
            position: gU,
            style: tU,
            gE: pU,
            pE: EU
          } = RU;
          KU.p.yh("setDirectionArrow", {
            id: UU,
            position: gU,
            style: tU,
            text: rU(pU),
            pE: EU
          }, !0)
        }
      })), (0, hU.h)(YU.f, (UU => {
        const RU = (0, VU.e)(YU.f, UU);
        RU && KU.p.yh("clearDirectionArrow", {
          id: RU.id
        }, !0)
      })), (0, hU.h)(YU.t, (UU => {
        const RU = (0, VU.e)(YU.t, UU);
        RU && KU.p.yh("flyingMiddleMessage", {
          content: rU(RU.VE),
          rE: RU.rE,
          XE: RU.XE
        }, !0)
      })), (0, hU.h)(cU.dc.WorldVariation, (UU => {
        const RU = (0, VU.f)(UU);
        if ("string" === typeof RU) {
          const UU = RU === oU.g ? null : {
            message: `Currently loaded as variation: ${RU}`,
            type: "Warning"
          };
          KU.p.yh("showPermanentBottomMessage", UU, !0)
        }
      })), (0, hU.h)(YU.N, (UU => {
        const RU = (0, VU.e)(YU.N, UU);
        RU && function(UU, RU) {
          const {
            type: gU,
            params: tU
          } = (0, ZU.d)(RU), pU = {
            ...tU
          };
          for (const EU of ZU.b) pU[EU] && (pU[EU] = rU(pU[EU]));
          aU.c.queueQTE(UU, gU, pU).getResult().then((RU => {
            var gU;
            "boolean" === typeof RU && (null === (gU = (0, PU.i)()) || void 0 === gU || gU.send(BU.e.QteResponse, {
              qteId: UU,
              qteResponse: RU
            }))
          }))
        }(RU.id, RU.nU)
      })), (0, hU.h)(YU.$, (UU => {
        const RU = (0, VU.e)(YU.$, UU);
        "number" === typeof RU && aU.c.cancelQTE(RU)
      })), (0, hU.f)((() => {
        aU.c.reset(), KU.p.yh("showPermanentBottomMessage", null, !0)
      })), (0, hU.g)((() => {
        aU.c.reset()
      })), (0, hU.h)(cU.dc.EditItemCraftingRecipes, (UU => {
        const RU = (0, VU.f)(UU);
        (0, VU.c)(RU) && KU.p.yh("craftingRecipesEdited", {
          itemName: RU.craftingRecipeItemName,
          recipesForItem: RU.recipesForItem
        })
      })), (0, hU.h)(YU.X, (UU => {
        const RU = (0, VU.e)(YU.X, UU);
        RU && KU.p.yh("craftingRecipesEdited", {
          itemName: RU.ap,
          recipesForItem: []
        })
      })))
    }
    var HU = gU(21);
    const SU = [{
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

    function sU(UU) {
      return xU.w.playerFlags(UU.api.apiView, 0)
    }
    const yU = {
        freeCamera: (0, uU.c)((UU => () => {
          const RU = UU.isSessionLive && 0 !== (sU(UU) & xU.Pd.FreeCamMoves),
            gU = UU.freeCameraAllowed() && null === HU.b.get("scriptedCameraFacing");
          return SU[(gU ? 2 : 0) + (RU ? 1 : 0)]
        }), SU[0], (UU => (0, EU.u)(UU)))
      },
      kU = {
        setFreeCameraMovesFly: UU => {
          var RU;
          null === (RU = (0, PU.i)()) || void 0 === RU || RU.setFreeCameraMovesFly(UU)
        }
      },
      FU = {
        freeCameraPos: () => {
          const UU = (0, PU.i)();
          return null !== UU && void 0 !== UU && UU.isSessionLive && UU.renderFrame.hasView && 0 !== (sU(UU) & xU.Pd.FreeCam) ? UU.renderFrame.cameraPosition : null
        }
      };
    var iU = gU(38715);
    let AU = !1,
      zU = !1;

    function MU() {
      const UU = (0, PU.i)();
      if (null === UU || void 0 === UU || !UU.isSessionLive) return void(AU = !1);
      const RU = 0 !== (xU.w.playerFlags(UU.api.apiView, 0) & xU.Pd.FreeCam);
      RU !== AU && (AU = RU, (0, iU.e)(RU))
    }
    var DU = gU(311),
      LU = gU(36554),
      NU = gU(1829);
    var lU = gU(40088),
      OU = gU(40030);
    const UR = {
      interactPrompt: null,
      blockText: null,
      neededTool: null
    };
    let RR = "off";

    function gR(UU) {
      var RU;
      return null === UU ? null : {
        label: null !== (RU = (0, lU.e)(UU, "interactionPrompt")) && void 0 !== RU ? RU : null
      }
    }
    const tR = new Map([
      [xU.vc.Open, {
        label: qU.g.open
      }],
      [xU.vc.Close, {
        label: qU.g.close
      }],
      [xU.vc.Milk, {
        label: qU.g.milk
      }],
      [xU.vc.Shear, {
        label: qU.g.shear
      }],
      [xU.vc.Tame, {
        label: qU.g.tame
      }],
      [xU.vc.Feed, {
        label: qU.g.feed
      }],
      [xU.vc.Ride, {
        label: qU.g.ride
      }]
    ]);
    class pR {
      constructor() {
        this.target = UR, this.gc = xU.fd, this.optionName = null, this.pickaxe = new qU.c
      }
      read(UU) {
        var RU;
        const gU = xU.w.targetBlockId(UU.api.apiView, 0);
        gU !== this.gc && (this.gc = gU, this.optionName = gU === xU.fd ? null : `${UU.tables.getMetaInfo(gU).rootName}CrosshairText`);
        const tU = null === this.optionName ? null : null !== (RU = UU.tables.getClientOption(this.optionName)) && void 0 !== RU ? RU : null;
        this.pickaxe.update(function(UU, RU) {
          var gU, tU, pU;
          if (0 === (xU.w.playerFlags(UU.api.apiView, 0) & xU.Pd.Breaking) || RU === xU.fd || 0 === RU) return null;
          const {
            tables: EU
          } = UU;
          if (!0 === EU.getClientOption("creative")) return null;
          const PU = EU.nameOfId(RU),
            TU = null === (gU = UU.items.WT()) || void 0 === gU ? void 0 : gU.name,
            qU = null !== (tU = EU.getItemStat(PU, "harvestLevel")) && void 0 !== tU ? tU : 0;
          return (0, DU.Ec)({
            blockHarvestType: EU.getDefaultItemStat(PU, "harvestType"),
            blockHarvestLevel: EU.getDefaultItemStat(PU, "harvestLevel"),
            harvestLevel: qU,
            heldToolType: void 0 === TU ? void 0 : EU.getDefaultItemStat(TU, "harvests"),
            heldToolLevel: void 0 === TU ? void 0 : EU.getDefaultItemStat(TU, "level")
          }) && null !== (pU = LU.m[qU]) && void 0 !== pU ? pU : null
        }(UU, gU)), UU.watchPromptPick(RR);
        const pU = "touch" === RR ? function(UU) {
          var RU;
          const gU = UU.interactLabel;
          return gU === xU.vc.Entity ? gR(UU.promptEntity) : gU === xU.vc.TameWith ? {
            label: (0, qU.q)(UU.tables.nameOfId(UU.interactIcon))
          } : null !== (RU = tR.get(gU)) && void 0 !== RU ? RU : null
        }(UU) : gR(UU.promptEntity);
        return this.target = (0, NU.r)(this.target, {
          interactPrompt: pU,
          blockText: tU,
          neededTool: this.pickaxe.shown
        }), this.target
      }
    }
    let ER = null;
    const PR = {
      current: () => {
        var UU, RU;
        return null !== (UU = null === (RU = ER) || void 0 === RU ? void 0 : RU.target) && void 0 !== UU ? UU : UR
      },
      watch: UU => {
        const RU = new pR;
        ER = RU;
        const gU = (0, uU.f)((gU => {
          let tU = RU.read(gU);
          UU(tU);
          const pU = (0, EU.x)((() => {
            const pU = RU.read(gU);
            pU !== tU && (tU = pU, UU(pU))
          }));
          return () => {
            pU(), gU.watchPromptPick("off")
          }
        }));
        return () => {
          gU(), ER === RU && (ER = null)
        }
      }
    };
    let TR = 0,
      qR = 0;
    const KR = {
        health: qU.n,
        aura: qU.h,
        hotbar: OU.b.states.hotbar,
        heldItemAim: OU.b.states.heldItemAim,
        crouching: (0, uU.c)((UU => function(UU) {
          const RU = () => 0 !== (xU.w.playerFlags(UU.apiView, 0) & xU.Pd.Crouching);
          return {
            current: RU,
            watch(UU) {
              let gU = RU();
              return (0, EU.u)((() => {
                const tU = RU();
                tU !== gU && (gU = tU, UU(tU))
              }))
            }
          }
        }(UU.api).current), !1, (UU => (0, EU.u)(UU))),
        flight: (0, uU.c)((UU => () => function(UU) {
          const RU = xU.w.playerFlags(UU.apiView, 0);
          return (0, qU.k)(0 !== (RU & xU.Pd.CanFly), 0 !== (RU & xU.Pd.Flying))
        }(UU.api)), (0, qU.k)(!1, !1), (UU => (0, EU.u)(UU))),
        gliderBoostFuel: (0, uU.c)((UU => () => xU.w.gliderBoostFuel(UU.api.apiView, 0)), 0, (UU => (0, EU.u)(UU))),
        crosshairTarget: PR
      },
      cR = {
        hotbarSlotRequested: OU.b.events.hotbarSlotRequested,
        hotbarScrolled: OU.b.events.hotbarScrolled,
        numberKeyPressed: OU.b.events.numberKeyPressed,
        shotDamageToShow: (0, qU.o)((UU => !0 === (0, lU.e)(UU, "showDamageAmounts")))
      },
      GR = {
        selectHotbarSlot: OU.b.commands.selectHotbarSlot,
        setCrosshairInteractPrompt: UU => {
          RR = UU
        }
      },
      jR = {
        momentumFrac: function() {
          var UU, RU, gU;
          const tU = (0, PU.i)(),
            pU = performance.now(),
            EU = null === tU || void 0 === tU || null === (UU = tU.items.WT()) || void 0 === UU || null === (RU = UU.attributes) || void 0 === RU || null === (gU = RU.customAttributes) || void 0 === gU ? void 0 : gU.enchantments;
          return TR = null !== tU && null !== EU && void 0 !== EU && EU.Momentum ? 0 !== (xU.w.playerFlags(tU.api.apiView, 0) & xU.Pd.Breaking) ? Math.max(0, xU.w.momentumFrac(tU.api.apiView, 0)) : Math.max(0, TR - (pU - qR) / 1500) : 0, qR = pU, TR
        }
      };
    var uR = gU(39962),
      CR = gU(1238),
      hR = gU(36072),
      QR = gU(8427),
      eR = gU(1567),
      WR = gU(2233),
      fR = gU(4460);
    let xR = !1;

    function mR(UU) {
      xR = UU
    }

    function IR() {
      "inGame" !== HU.b.get("gameState") || (0, eR.s)() || KU.p.yh("ctrlCrouchWithoutFullscreen")
    }
    let JR = !1;
    const wR = {
        OpenEmoteWheel: () => {
          mR(!0), JR = !0, queueMicrotask((() => {
            JR && (JR = !1, KU.p.yh("requestEmoteWheelHoldOpen"))
          }))
        },
        ToggleFullCoordinateOverlay: () => {
          KU.p.yh("toggleFullCoordinateOverlay")
        },
        KeyYPressed: () => {
          (0, hR.c)() || KU.p.yh("YKeyPressed")
        },
        KeyXPressed: () => {
          (0, hR.c)() || KU.p.yh("XKeyPressed")
        },
        CtrlCrouch: IR,
        "primary-fire": () => {
          KU.p.yh("mouseState", {
            jc: CR.b.DownFirePrimary,
            isDown: !0
          })
        },
        "alt-fire": () => {
          KU.p.yh("mouseState", {
            jc: CR.b.DownFireSecondary,
            isDown: !0
          })
        },
        TouchHold: () => {
          KU.p.yh("mouseState", {
            jc: CR.b.TouchDownLong,
            isDown: !0
          })
        }
      },
      nR = {
        OpenEmoteWheel: () => {
          mR(!1), JR ? (JR = !1, (0, QR.e)() || KU.p.yh("requestEmoteWheelHoldOpen")) : KU.p.yh("requestEmoteWheelHoldRelease")
        },
        CtrlCrouch: IR,
        "primary-fire": () => {
          KU.p.yh("mouseState", {
            jc: CR.b.UpFirePrimary,
            isDown: !1
          })
        },
        "alt-fire": () => {
          KU.p.yh("mouseState", {
            jc: CR.b.UpFireSecondary,
            isDown: !1
          })
        },
        TouchDig: () => {
          KU.p.yh("mouseState", {
            jc: CR.b.UpFirePrimary,
            isDown: !1
          })
        }
      };
    let bR = !1;

    function oR() {
      bR || (bR = !0, (0, fR.i)((UU => {
        if ((0, pU.d)()) return;
        const RU = (0, fR.e)(UU) ? "primary-fire" : UU.action;
        var gU;
        if (UU.down) {
          if (0 === (UU.flags & WR.b.Synthetic)) {
            var tU;
            null === (tU = wR[RU]) || void 0 === tU || tU.call(wR)
          }
        } else null === (gU = nR[RU]) || void 0 === gU || gU.call(nR)
      })))
    }
    var ZR = gU(299),
      aR = gU(96),
      YR = gU(34),
      BR = gU(40096),
      VR = gU(1316),
      rR = gU(38549);
    let XR = !1;
    const vR = {
      sendCodeCollab(UU) {
        var RU;
        null === (RU = (0, PU.i)()) || void 0 === RU || RU.send(BU.e.CodeCollab, (0, BU.o)(UU), (0, rR.g)(UU))
      }
    };
    let dR = null,
      HR = !1,
      SR = null;

    function sR() {
      return "inGame" === HU.b.get("gameState") && !(0, hR.c)()
    }
    const yR = {
        OpenInventory: UU => {
          (0, eR.y)(UU, "inventory", (0, uR.n)())
        },
        OpenShop: UU => {
          dR && sR() && (0, eR.w)(UU, ZR.n.SHOP, !dR.shopIsEmpty(fU.b.get("shopInfo")))
        },
        OpenLobbyLeaderboard: UU => {
          sR() && (0, eR.w)(UU, ZR.n.LOBBY_LEADERBOARD, !!fU.b.get("lobbyLeaderboardInfo"))
        },
        OpenTasksAndLeaderboard: UU => {
          var RU;
          const gU = null === (RU = dR) || void 0 === RU ? void 0 : RU.getClientGameMapKey();
          gU ? (0, eR.A)(UU, !0, gU) : (0, eR.y)(UU, "retentionFeatures", !(!fU.b.get("_tasks") && !fU.b.get("_availableLeaderboards")))
        },
        OpenInviteLink: UU => {
          (0, eR.y)(UU, "inviteLink", aR.featureFlags.canUseInviteLinks)
        },
        OpenCodeEditor: UU => {
          sR() && function(UU) {
            var RU;
            const gU = (0, PU.i)(),
              tU = null !== gU && void 0 !== gU && gU.isSessionLive ? gU.api : null,
              pU = tU ? tU.Hx(tU.localId) : null,
              EU = null !== (RU = null === pU || void 0 === pU ? void 0 : pU.map((UU => Math.floor(UU)))) && void 0 !== RU ? RU : null;
            (0, eR.A)(UU, null !== EU && (0, rR.d)((0, VR.d)()), (() => {
              KU.p.yh("EditLobbyCode", EU)
            }))
          }(UU)
        },
        HideUi: () => {
          KU.p.yh("showUi", !1)
        }
      },
      kR = {
        HideUi: () => {
          KU.p.yh("showUi", !0)
        }
      };

    function FR() {
      HR || (HR = !0, gU.e(151).then((() => gU(41951))).then((UU => {
        dR = UU
      }), (UU => {
        console.error("[bloxd-wasm-client] the menu keys' checks did not load", UU)
      })), (0, BR.z)((UU => {
        UU || !(0, BR.h)() || (0, aR.isMobile)() || !YR.k.getItem("disableFullscreen") || (0, eR.q)() || HU.b.set({
          openEverythingMenuName: ZR.n.SETTINGS
        })
      })), (0, fR.i)((UU => {
        let {
          action: RU,
          down: gU,
          press: tU
        } = UU;
        var EU, PU;
        (0, pU.d)() || (gU ? null === (EU = yR[RU]) || void 0 === EU || EU.call(yR, function(UU) {
          var RU;
          if (0 === UU || (null === (RU = SR) || void 0 === RU ? void 0 : RU.press) !== UU) {
            const RU = {
              press: UU,
              event: new Event("inputAction")
            };
            SR = RU, queueMicrotask((() => {
              SR === RU && (SR = null)
            }))
          }
          return SR.event
        }(tU)) : null === (PU = kR[RU]) || void 0 === PU || PU.call(kR))
      })))
    }
    var iR = gU(38524),
      AR = gU(38540),
      zR = gU(38528);
    const MR = {
      completeTask(UU) {
        var RU;
        null === (RU = (0, PU.i)()) || void 0 === RU || RU.send(BU.e.CompleteTask, (0, BU.r)(UU))
      },
      setServerCookie(UU) {
        var RU;
        let {
          key: gU,
          value: tU
        } = UU;
        null === (RU = (0, PU.i)()) || void 0 === RU || RU.send(BU.e.GeneralCookieSet, (0, BU.x)({
          PP: gU,
          TP: tU
        }))
      },
      answerUiRequest(UU) {
        var RU;
        let {
          id: gU,
          GP: tU
        } = UU;
        null === (RU = (0, PU.i)()) || void 0 === RU || RU.send(BU.e.UiRequestResp, (0, BU._)({
          xT: gU,
          mT: tU,
          IT: 5
        }))
      },
      chooseRewardedAd(UU) {
        var RU;
        let {
          id: gU,
          GP: tU
        } = UU;
        null === (RU = (0, PU.i)()) || void 0 === RU || RU.send(BU.e.UiRequestResponded, (0, BU.Z)({
          id: gU,
          GP: tU
        }))
      },
      requestLeaderboard(UU) {
        var RU;
        let {
          category: gU,
          timeframe: tU,
          seeTop: pU
        } = UU;
        null === (RU = (0, PU.i)()) || void 0 === RU || RU.send(BU.e.LeaderboardRequest, {
          category: gU,
          timeframe: tU,
          seeTop: pU
        })
      }
    };
    let DR = !1;
    const LR = WU.e.dW / 2,
      NR = [LR, -LR, -LR, -LR, LR, LR, -LR, LR],
      lR = [0, 0, 0];

    function OR(UU, RU, gU) {
      for (let tU = 0; tU < UU.length; tU += 2)
        if (UU[tU] === RU && UU[tU + 1] === gU) return !0;
      return !1
    }
    const Ug = {
      blocksStandingOn: function() {
        const UU = (0, PU.i)();
        if (null === UU) return [];
        const {
          api: RU,
          chunks: gU,
          tables: tU
        } = UU;
        if (!RU.readPosition(RU.localId, lR)) return [];
        const [pU, EU, TU] = lR, qU = Math.ceil(EU) - 1, KU = [], cU = [];
        for (let PU = 0; PU < NR.length; PU += 2) {
          const UU = pU + NR[PU],
            RU = TU + NR[PU + 1];
          if (Number.isInteger(UU) || Number.isInteger(RU)) continue;
          const EU = Math.floor(UU),
            GU = Math.floor(RU);
          if (OR(cU, EU, GU)) continue;
          const jU = gU.gc(EU, qU, GU);
          tU.isSolidBlockId(jU) && (cU.push(EU, GU), KU.push(tU.nameOfId(jU)))
        }
        return KU
      },
      dropAhead: function() {
        const UU = (0, PU.i)();
        return null !== UU && 0 !== (xU.w.playerFlags(UU.api.apiView, 0) & xU.Pd.DropAhead)
      }
    };
    var Rg = gU(36480),
      gg = gU(38631),
      tg = gU(1333),
      pg = gU(40047);
    const Eg = new Set(["replayLoad", "replaySave", "replaySaveAs", "replayTimelineZoomIn", "replayTimelineZoomOut"]),
      Pg = new Set(["replaySkipBack", "replaySkipForward", "replaySpeedUp", "replaySpeedDown", "replayRecordKeyframe"]);

    function Tg() {
      const UU = new Set;
      return {
        add: RU => (UU.add(RU), () => {
          UU.delete(RU)
        }),
        fire() {
          for (const RU of UU) RU()
        }
      }
    }
    const qg = Object.freeze([]);

    function Kg(UU, RU) {
      let gU, {
        rereads: tU,
        followLocalId: pU
      } = RU;
      const PU = () => (gU = (0, NU.r)(gU, UU()), gU);
      return {
        current: PU,
        watch(UU) {
          const RU = (0, CU.b)((RU => {
            tU(RU) && UU(PU())
          }));
          if (!pU) return RU;
          let gU = (0, uU.e)();
          const TU = (0, EU.x)((() => {
            const RU = (0, uU.e)();
            RU !== gU && (gU = RU, UU(PU()))
          }));
          return () => {
            RU(), TU()
          }
        }
      }
    }
    const cg = {
        players: Kg((function() {
          const UU = CU.c.ids(),
            RU = {};
          for (const EU of UU) {
            var gU, tU, pU;
            RU[EU] = {
              name: null !== (gU = CU.c.getName(EU)) && void 0 !== gU ? gU : null,
              ranks: null !== (tU = CU.c.getSetting(EU, "ranks")) && void 0 !== tU ? tU : qg,
              cosmetics: null !== (pU = (0, CU.g)(EU)) && void 0 !== pU ? pU : null
            }
          }
          return {
            ids: UU,
            byId: RU,
            localId: (0, uU.e)()
          }
        }), {
          rereads: UU => "roster" !== UU.kind || UU.members || UU.settings.has("ranks"),
          followLocalId: !0
        }),
        lobbyLeaderboardRows: Kg((function() {
          const UU = {};
          for (const pU of CU.c.ids()) {
            var RU, gU, tU;
            UU[pU] = {
              colour: null !== (RU = CU.c.getSetting(pU, "colorInLobbyLeaderboard")) && void 0 !== RU ? RU : null,
              values: null !== (gU = CU.c.getSetting(pU, "lobbyLeaderboardValues")) && void 0 !== gU ? gU : null,
              tags: null !== (tU = CU.c.getSetting(pU, "lobbyLeaderboardTags")) && void 0 !== tU ? tU : null
            }
          }
          return UU
        }), {
          rereads: function(UU) {
            if ("roster" !== UU.kind) return "reset" === UU.kind;
            const {
              members: RU,
              settings: gU
            } = UU;
            return RU || gU.has("colorInLobbyLeaderboard") || gU.has("lobbyLeaderboardValues") || gU.has("lobbyLeaderboardTags")
          },
          followLocalId: !1
        })
      },
      Gg = {
        cosmeticsUpdated: {
          watch: UU => (0, CU.b)((RU => {
            if ("cosmetics" !== RU.kind) return;
            const gU = (0, uU.e)();
            UU(RU.updates.map((UU => {
              let {
                rg: RU,
                Xg: tU,
                vg: pU
              } = UU;
              return {
                local: RU === gU,
                Xg: tU,
                vg: pU
              }
            })))
          }))
        }
      };
    var jg = gU(2644),
      ug = gU(1637),
      Cg = gU(623),
      hg = gU(40098);
    let Qg = !1,
      eg = null;
    const Wg = {
      setShopOpen(UU) {
        var RU;
        null === (RU = (0, PU.i)()) || void 0 === RU || RU.send(BU.e.ShopMenuChanged, (0, BU.T)(UU))
      },
      buyShopItem(UU) {
        var RU;
        let {
          categoryKey: gU,
          itemKey: tU,
          userInput: pU
        } = UU;
        null === (RU = (0, PU.i)()) || void 0 === RU || RU.send(BU.e.ItemBought, {
          categoryKey: gU,
          itemKey: tU,
          shopVersion: fU.b.get("_shopVersion"),
          userInput: pU
        })
      }
    };
    let fg = !1;
    var xg = gU(4477);
    const mg = WR.z.LookFrozen | WR.z.ClicksSuppressed;

    function Ig(UU, RU) {
      var gU;
      null !== (gU = (0, PU.i)()) && void 0 !== gU && gU.send(UU, RU) || console.warn(`[bloxd-wasm-client] message ${UU} not sent: no live game or the core's command ring is full`)
    }(0, hU.h)(YU.nb, (UU => {
      const RU = (0, VU.e)(YU.nb, UU);
      void 0 !== RU && KU.p.yh("setDiscordReportKey", RU)
    }));
    const Jg = {
      ignorePlayer(UU) {
        Ig(BU.e.IgnoreUser, (0, BU.A)({
          BP: UU
        }))
      },
      reportPlayer(UU) {
        let {
          playerId: RU,
          chatMsgId: gU,
          gP: tU,
          details: pU
        } = UU;
        Ig(BU.e.UserReport, (0, BU.gb)({
          Vc: RU,
          Xc: gU,
          gP: tU,
          tP: pU
        }))
      },
      reportWorldCodeChat(UU) {
        let {
          chatMsgId: RU,
          gP: gU,
          details: tU
        } = UU;
        Ig(BU.e.UserReport, (0, BU.gb)({
          Vc: "",
          Xc: RU,
          gP: gU,
          tP: tU
        }))
      },
      requestDiscordReportKey(UU) {
        Ig(BU.e.ReqDiscordReportKey, (0, BU.O)(UU))
      },
      reportLobbyOrGame(UU) {
        let {
          target: RU,
          gP: gU,
          details: tU
        } = UU;
        "customGame" === RU ? Ig(BU.e.CustomGameReport, (0, BU.t)({
          gP: gU,
          tP: tU
        })) : Ig(BU.e.LobbyReport, (0, BU.D)({
          gP: gU,
          tP: tU
        }))
      },
      updateMyCosmetic(UU) {
        Ig(BU.e.UpdateMyCosmetic, (0, BU.fb)(UU))
      },
      holdEmoteWheel(UU) {
        !UU || xR ? (0, xg.f)(mg, UU ? mg : 0) : KU.p.yh("requestEmoteWheelHoldRelease")
      }
    };
    var wg = gU(40105),
      ng = gU(9078),
      bg = gU(39150);
    const og = [0, 0, 0],
      Zg = [0, 0, 0],
      ag = [0, 0, 0],
      Yg = {
        blockAtViewPoint(UU) {
          let {
            x: RU,
            y: gU
          } = UU;
          const tU = (0, PU.i)();
          if (null === tU || void 0 === tU || !tU.renderFrame.hasView) return null;
          const {
            renderFrame: pU,
            clientApi: EU,
            api: TU
          } = tU;
          let qU = 0;
          return (0, bg.d)(((UU, RU, gU) => (qU = EU.getBlockId(UU, RU, gU), 0 !== qU)), pU.cameraPosition, (0, bg.f)((UU => xU.w.viewProj(TU.apiView, 0, UU)), RU, gU, og), bg.b, Zg, ag) ? {
            pos: [Zg[0], Zg[1], Zg[2]],
            normal: [ag[0], ag[1], ag[2]],
            name: (0, ng.e)(qU)
          } : null
        }
      },
      Bg = {
        setBlockHighlight(UU) {
          var RU;
          null === (RU = (0, PU.i)()) || void 0 === RU || RU.setBlockHighlight(UU)
        }
      };
    var Vg = gU(1808),
      rg = gU(40110),
      Xg = gU(40116),
      vg = gU(40121);
    var dg = gU(567),
      Hg = gU(39158);

    function Sg(UU) {
      if (null === UU || void 0 === UU || !UU.isCoreRunning) return null;
      const {
        api: RU,
        chunks: gU,
        items: tU,
        tables: pU
      } = UU;
      return {
        playerFeet() {
          const UU = RU.Hx(RU.localId);
          return null !== UU && void 0 !== UU && UU.every(Number.isFinite) ? UU : null
        },
        chunkBlocks: UU => gU.isLoaded(UU[0], UU[1], UU[2]) ? (UU, RU, tU) => gU.gc(UU, RU, tU) : null,
        blockName: UU => pU.nameOfId(UU),
        inventory: () => ({
          slots: tU.playerItems().map((UU => UU ? {
            name: UU.name,
            amount: UU.amount
          } : null)),
          heldSlot: tU.selectedSlot
        }),
        nearby() {
          const gU = [];
          for (let pU = 0; pU < RU.idStr.length; pU++) {
            var tU;
            const EU = RU.idStr[pU],
              PU = RU.serverIds[pU],
              TU = RU.kinds[pU];
            if (null === EU || RU.isLocal(PU) || TU >>> xU.c !== xU.s.Lifeform) continue;
            const qU = RU.Hx(PU),
              KU = dg.m[TU & xU.g];
            qU && void 0 !== KU && gU.push({
              kind: "Player" === KU ? "player" : KU,
              name: null !== (tU = UU.clientApi.getEntityName(EU)) && void 0 !== tU ? tU : null,
              position: qU
            })
          }
          return gU
        },
        droppedItems() {
          let UU = 0;
          for (let gU = 0; gU < RU.idStr.length; gU++) null !== RU.idStr[gU] && RU.kinds[gU] >>> xU.c === xU.s.Item && UU++;
          return UU
        }
      }
    }
    const sg = {
        worldCodeAiChunk: UU => Promise.resolve((0, Hg.c)(Sg((0, PU.i)()), UU)),
        worldCodeAiGameState: () => Promise.resolve((0, Hg.d)(Sg((0, PU.i)())))
      },
      yg = function(UU) {
        const RU = Tg(),
          tU = Tg(),
          pU = new Set,
          EU = new Set,
          PU = () => {
            var RU, gU;
            return null !== (RU = null === (gU = UU.runtime()) || void 0 === gU ? void 0 : gU.currentViewer) && void 0 !== RU ? RU : null
          };
        let TU = null,
          qU = null;
        const cU = (UU, RU) => ({
            current: UU,
            watch(gU) {
              let tU = UU();
              return RU.add((() => {
                const RU = UU();
                RU !== tU && (tU = RU, gU(RU))
              }))
            }
          }),
          jU = UU => ({
            watch: RU => (UU.add(RU), () => {
              UU.delete(RU)
            })
          }),
          uU = UU => {
            const RU = PU(),
              gU = null === RU || void 0 === RU ? void 0 : RU.view;
            RU && gU && RU.seek(Math.max(0, Math.min(gU.totalTicks - 1, gU.HG + UU * GU.xd)))
          },
          CU = {
            replay: cU((() => {
              var UU;
              const RU = PU(),
                gU = null !== (UU = null === RU || void 0 === RU ? void 0 : RU.view) && void 0 !== UU ? UU : null;
              return null === RU || null === gU || gU.state === GU.kd.None ? (TU = null, null) : (TU = (0, NU.r)(TU, {
                id: RU.id,
                HG: gU.HG,
                totalTicks: gU.totalTicks,
                bZ: GU.xd,
                playing: gU.state === GU.kd.Playing,
                speed: gU.speed,
                cameraMode: gU.cameraMode,
                freecam: "freecam" === gU.cameraMode
              }), TU)
            }), RU),
            replayEdits: cU((() => {
              var UU;
              const RU = PU(),
                gU = null !== (UU = null === RU || void 0 === RU ? void 0 : RU.view) && void 0 !== UU ? UU : null;
              return null === RU || null === gU || gU.state === GU.kd.None ? (qU = null, null) : (qU = (0, NU.r)(qU, {
                cameraKeyframes: [...RU.keyframes],
                playbackMark: gU.mark,
                fileName: RU.fileName,
                unsavedChanges: RU.unsavedChanges,
                suggestSaveAs: RU.suggestSaveAs
              }), qU)
            }), RU),
            replayRecorder: cU((() => {
              var RU, gU;
              return null !== (RU = null === (gU = UU.runtime()) || void 0 === gU ? void 0 : gU.recorder.current) && void 0 !== RU ? RU : pg.b.states.replayRecorder.current()
            }), tU),
            replayVideoExporting: {
              current: gg.b,
              watch: UU => (0, KU.t)("replayViewer|videoExportChanged", (() => {
                UU((0, gg.b)())
              }))
            }
          },
          hU = {
            replayUiActionRequested: jU(EU),
            replayViewerRequested: jU(pU)
          },
          QU = UU => {
            for (const RU of pU) RU(UU)
          },
          eU = () => {
            var tU;
            !0 === (null === (tU = PU()) || void 0 === tU ? void 0 : tU.isOpen) && Promise.all([gU.e(94), gU.e(63)]).then((() => gU(41958))).then((gU => {
              let {
                startWasmReplayVideoExport: tU
              } = gU;
              return tU({
                viewer: PU,
                canvas: () => {
                  var RU, gU;
                  return null !== (RU = null === (gU = UU.canvas) || void 0 === gU ? void 0 : gU.call(UU)) && void 0 !== RU ? RU : null
                },
                watchViewer: RU.add,
                requestViewer: QU
              })
            }), (UU => {
              console.error("Couldn't load the video export", UU), tg.NotificationProvider.showAlertPopup({
                title: "Video export failed",
                subtitle: "Check your connection, then try again."
              })
            })).catch((UU => {
              console.error("The video export failed", UU)
            }))
          },
          WU = {
            replayAction(UU) {
              if ((0, gg.b)()) return;
              const RU = PU();
              switch (UU) {
                case "replaySkipBack":
                  uU(-1);
                  break;
                case "replaySkipForward":
                  uU(1);
                  break;
                case "replaySpeedUp":
                case "replaySpeedDown":
                  null !== RU && void 0 !== RU && RU.view && RU.setSpeed((0, Rg.i)(RU.view.speed, "replaySpeedUp" === UU ? "up" : "down"));
                  break;
                case "replayRecordKeyframe":
                  null === RU || void 0 === RU || RU.addKeyframe()
              }
            },
            setReplayPlaying(UU) {
              var RU, gU;
              (0, gg.b)() || (UU ? null === (RU = PU()) || void 0 === RU || RU.play() : null === (gU = PU()) || void 0 === gU || gU.pause())
            },
            seekReplay(UU) {
              var RU;
              let {
                HG: gU,
                ignorePlaybackMark: tU
              } = UU;
              null === (RU = PU()) || void 0 === RU || RU.seek(gU, null !== tU && void 0 !== tU && tU)
            },
            setReplayCameraMode(UU) {
              var RU;
              null === (RU = PU()) || void 0 === RU || RU.setCameraMode(UU)
            },
            syncReplayCameraMode() {},
            setReplayCameraKeyframe(UU) {
              var RU;
              null === (RU = PU()) || void 0 === RU || RU.setKeyframe(UU)
            },
            moveReplayCameraKeyframe(UU) {
              var RU;
              let {
                from: gU,
                to: tU
              } = UU;
              null === (RU = PU()) || void 0 === RU || RU.moveKeyframe(gU, tU)
            },
            deleteReplayCameraKeyframes(UU) {
              var RU;
              let {
                start: gU,
                end: tU
              } = UU;
              null === (RU = PU()) || void 0 === RU || RU.deleteKeyframes(gU, tU)
            },
            setReplayPlaybackMark(UU) {
              var RU;
              null === (RU = PU()) || void 0 === RU || RU.setMark(UU)
            },
            cropReplay(UU) {
              var RU, gU;
              let {
                start: tU,
                end: pU
              } = UU;
              return !(0, gg.b)() && (null !== (RU = null === (gU = PU()) || void 0 === gU ? void 0 : gU.crop(tU, pU)) && void 0 !== RU && RU)
            },
            holdReplayForShaderPackFailure(UU) {
              const RU = PU();
              RU && (RU.holdForShaderPackFailure(), function(UU) {
                gU.e(129).then((() => gU(38747))).then((RU => {
                  let {
                    shaderPackPage: gU
                  } = RU;
                  gU.block(UU)
                })).catch((UU => {
                  console.warn("[bloxd-wasm-client] the shader pack could not be blocked", UU)
                }))
              }(UU))
            },
            exportReplayVideo() {
              eU()
            },
            toggleRecording() {
              var RU;
              null === (RU = UU.runtime()) || void 0 === RU || RU.recorder.toggleRecording()
            },
            saveClip() {
              var RU;
              null === (RU = UU.runtime()) || void 0 === RU || RU.recorder.saveClip()
            },
            setRecorderPrefs(RU) {
              var gU;
              let {
                clipping: tU,
                clipSeconds: pU
              } = RU;
              null === (gU = UU.runtime()) || void 0 === gU || gU.recorder.setPrefs(tU, pU)
            },
            setReplayViewerOpen(RU) {
              var gU;
              (0, hR.d)(RU) && (null === (gU = UU.runtime()) || void 0 === gU || gU.recorder.viewerShown(RU))
            },
            recordFlyingMiddleText(RU) {
              var gU;
              let {
                content: tU,
                rE: pU,
                angle: EU,
                XE: PU
              } = RU;
              null === (gU = UU.runtime()) || void 0 === gU || gU.recorder.recordFlyingText(JSON.stringify(tU), pU, EU, PU)
            },
            dragReplayCamera(RU) {
              var gU;
              let {
                dx: tU,
                dy: pU
              } = RU;
              null === (gU = UU.freecam()) || void 0 === gU || gU.drag(tU, pU)
            },
            moveReplayFreecam(RU) {
              var gU;
              null === (gU = UU.freecam()) || void 0 === gU || gU.move(RU)
            },
            holdReplayFreecamVertical(RU) {
              var gU;
              let {
                action: tU,
                WT: pU
              } = RU;
              null === (gU = UU.freecam()) || void 0 === gU || gU.holdVertical(tU, pU)
            }
          },
          fU = UU => {
            var RU;
            const gU = PU(),
              tU = null !== (RU = null === gU || void 0 === gU ? void 0 : gU.view) && void 0 !== RU ? RU : null;
            Eg.has(UU) ? (UU => {
              for (const RU of EU) RU(UU)
            })(UU) : Pg.has(UU) ? WU.replayAction(UU) : "replayPlayPause" === UU ? gU && tU && tU.state !== GU.kd.None && WU.setReplayPlaying(tU.state !== GU.kd.Playing) : "replayChangeCameraMode" === UU ? null === gU || void 0 === gU || gU.cycleCameraMode() : "replayExit" === UU ? !0 === (null === gU || void 0 === gU ? void 0 : gU.inPlayback) && (0, VR.j)("/") : "replayExportVideo" === UU && eU()
          };
        let xU = !1;
        return {
          states: CU,
          events: hU,
          commands: WU,
          lookups: {
            replayCamera() {
              var RU, gU, tU;
              return !0 !== (null === (RU = PU()) || void 0 === RU ? void 0 : RU.isOpen) ? null : null !== (gU = null === (tU = UU.cameraView) || void 0 === tU ? void 0 : tU.call(UU)) && void 0 !== gU ? gU : null
            },
            leaveGameReloadsPage() {
              var UU;
              return !0 === (null === (UU = PU()) || void 0 === UU ? void 0 : UU.inPlayback)
            }
          },
          feed: {
            viewerChanged: () => {
              var UU;
              const gU = !0 === (null === (UU = PU()) || void 0 === UU ? void 0 : UU.inPlayback);
              gU !== xU && (xU = gU, KU.p.yh("connectedGameChanged")), RU.fire()
            },
            recorderChanged: tU.fire,
            keyDown: UU => {
              var RU;
              switch (UU) {
                case "recordGame":
                  return void WU.toggleRecording();
                case "recordClip":
                  return void((0, hR.c)() || WU.saveClip())
              }(0, gg.b)() || ("replayViewerOpen" !== UU ? UU.startsWith("replay") && ((0, hR.c)() || !0 === (null === (RU = PU()) || void 0 === RU ? void 0 : RU.inPlayback)) && fU(UU) : QU("toggle"))
            }
          }
        }
      }({
        runtime: pU.i,
        cameraView: () => {
          var UU;
          const RU = null === (UU = (0, PU.i)()) || void 0 === UU ? void 0 : UU.renderFrame;
          if (!RU) return null;
          const [gU, tU, pU] = RU.cameraPosition, [EU, TU, qU] = RU.cameraDirection;
          return {
            position: [gU, tU, pU],
            direction: [EU, TU, qU]
          }
        },
        canvas: () => {
          var UU, RU, gU;
          return null !== (UU = null === (RU = (gU = (0, EU.J)()).canvas) || void 0 === RU ? void 0 : RU.call(gU)) && void 0 !== UU ? UU : null
        },
        freecam: pU.h
      }),
      kg = {
        states: {
          ...KR,
          ...uR.m,
          ...yg.states,
          ...cg,
          ...yU
        },
        events: {
          ...cR,
          ...QU,
          ...uR.f,
          ...bU.e,
          ...wg.g,
          ...yg.events,
          ...Gg,
          ...nU.i
        },
        commands: {
          ...wU,
          ...GR,
          ...eU,
          ...uR.e,
          ...MR,
          ...Jg,
          ...nU.h,
          ...vR,
          ...yg.commands,
          ...Wg,
          ...kU,
          ...Bg
        },
        queries: {
          ...uR.j,
          ...sg
        },
        lookups: {
          ...jR,
          ...XU,
          ...wg.j,
          ...yg.lookups,
          ...JU,
          ...Ug,
          ...Yg,
          ...FU
        }
      };

    function Fg() {
      (0, TU.h)(hU.k), (0, pU.k)(yg.feed), (0, bU.i)(), DR || (DR = !0, (0, hU.h)(YU.l, (UU => {
        const RU = (0, VU.e)(YU.l, UU);
        "string" === typeof RU && Promise.resolve().then((() => gU(3322))).then((UU => {
          let {
            onCosmeticPackGranted: gU
          } = UU;
          gU(RU)
        }))
      })), (0, hU.h)(YU.ib, (UU => {
        const RU = (0, VU.e)(YU.ib, UU);
        "number" === typeof RU && KU.p.yh("serverUpdating", Date.now() + RU, !0)
      })), (0, hU.h)(YU.K, (UU => {
        const RU = (0, VU.e)(YU.K, UU);
        if ((0, VU.c)(RU)) {
          const {
            UU: UU,
            RU: gU
          } = RU;
          (0, AR.c)({
            UU: "string" === typeof UU ? UU : null,
            RU: "string" === typeof gU ? gU : null
          })
        }
      })), (0, hU.h)(cU.dc.NewUiRequest, (UU => {
        const RU = (0, VU.f)(UU);
        (0, VU.c)(RU) && "number" === typeof RU.id && (0, VU.c)(RU.clientParameters) && (0, zR.h)(RU.id, RU.clientParameters)
      })), (0, hU.h)(YU.ab, (UU => {
        const RU = (0, VU.e)(YU.ab, UU);
        "number" === typeof RU && (0, zR.l)(RU)
      })), (0, hU.g)(zR.d), (0, hU.h)(cU.dc.UiRequestPopup, (UU => {
        const RU = (0, VU.f)(UU);
        if ((0, VU.c)(RU) && "number" === typeof RU.id && "string" === typeof RU.text) {
          const UU = RU.id;
          (0, zR.o)(UU, RU.text, (RU => {
            MR.answerUiRequest({
              id: UU,
              GP: RU
            })
          }))
        }
      })), (0, hU.h)(cU.dc.TopRightHelper, (UU => {
        const RU = (0, VU.f)(UU);
        void 0 !== RU && KU.p.yh("TopRightHelper", RU, !0)
      })), (0, hU.h)(cU.dc.TaskProgress, (UU => {
        const RU = (0, VU.f)(UU);
        (0, VU.c)(RU) && "string" === typeof RU.taskId && "number" === typeof RU.progress && (0, iR.e)({
          taskId: RU.taskId,
          progress: RU.progress
        })
      }))), fg || (fg = !0, (0, hU.h)(YU.v, (UU => {
        const RU = (0, VU.e)(YU.v, UU);
        (0, VU.c)(RU) && KU.p.yh("showShopFromServer", {
          toggle: RU.qR,
          KR: RU.KR
        }, !0)
      })), (0, hU.h)(cU.dc.OverShopInfo, (UU => {
        const RU = (0, VU.f)(UU);
        (0, VU.c)(RU) && KU.p.yh("overShopInfo", RU.info, !0)
      })), (0, hU.h)(cU.dc.ShowShopTutorial, (() => {
        KU.p.yh("showShopTutorial", null, !0)
      }))), Qg || (Qg = !0, (0, hU.f)((() => {
        var UU;
        (0, jg.H)(), null === (UU = eg) || void 0 === UU || UU(), eg = (0, hU.e)() ? (0, Cg.e)(hU.e) : null
      })), (0, hU.h)(cU.dc.SetCookie, (UU => {
        const RU = (0, VU.f)(UU),
          gU = (0, VR.d)().gameNameWithVariation;
        (0, VU.c)(RU) && "string" === typeof RU.key && null !== gU && (0, ug.setCookie)(gU, RU.key, RU.value)
      })), (0, hU.h)(cU.dc.LeaveValues, (UU => {
        const RU = (0, VU.f)(UU);
        if ((0, VU.c)(RU) && "string" === typeof RU.leaveEventType) {
          const {
            leaveEventType: UU,
            category: gU,
            subCategory: tU,
            value: pU
          } = RU;
          (0, jg.K)({
            leaveEventType: UU,
            category: gU,
            subCategory: tU,
            value: pU
          })
        }
      })), (0, hU.h)(cU.dc.CustomAnalyticsEvent, (UU => {
        const RU = (0, VU.f)(UU);
        if ((0, VU.c)(RU) && "string" === typeof RU.cat1) {
          const {
            cat1: UU,
            cat2: gU,
            cat3: tU,
            value: pU
          } = RU;
          (0, jg.u)({
            cat1: UU,
            cat2: gU,
            cat3: tU,
            value: pU
          })
        }
      })), (0, hU.h)(cU.dc.ProgressionEvent, (UU => {
        const RU = (0, VU.f)(UU);
        if ((0, VU.c)(RU)) {
          const {
            type: UU,
            location1: gU,
            location2: tU,
            location3: pU,
            score: EU
          } = RU;
          (0, jg.y)({
            type: UU,
            location1: gU,
            location2: tU,
            location3: pU,
            score: EU
          })
        }
      })), (0, hU.h)(cU.dc.ResourceEvent, (UU => {
        const RU = (0, VU.f)(UU);
        if ((0, VU.c)(RU)) {
          const {
            type: UU,
            resourceType: gU,
            amount: tU,
            category: pU,
            itemName: EU
          } = RU;
          (0, jg.C)({
            type: UU,
            resourceType: gU,
            amount: tU,
            category: pU,
            itemName: EU
          })
        }
      })), (0, hU.h)(cU.dc.LeaderboardResponse, (UU => {
        const RU = (0, VU.f)(UU);
        if ((0, VU.c)(RU)) {
          const {
            category: UU,
            timeframe: gU,
            data: tU
          } = RU;
          KU.p.yh("leaderboardResponse", {
            category: UU,
            timeframe: gU,
            data: tU
          })
        }
      })), (0, hU.h)(YU.C, (UU => {
        const RU = (0, VU.e)(YU.C, UU);
        "string" === typeof RU && (0, hg.b)(UU.conn, RU)
      })), (0, hU.h)(YU.D, (UU => {
        const RU = (0, VU.e)(YU.D, UU);
        "string" === typeof RU && console.error(`[logErrorToConsole]: ${RU}`)
      }))), dU(), (0, wg.b)(), XR || (XR = !0, (0, hU.h)(YU.i, (UU => {
        const RU = (0, VU.e)(YU.i, UU);
        void 0 !== RU && (0, rR.i)(RU)
      }))), FR(), oR(), zU || (zU = !0, (0, EU.u)(MU)), tU.gameBridge.attach(kg), (0, tU.installPageSources)({
        commands: {
          ...tU.DEFAULT_CLIENT_PAGE_SOURCES.commands,
          setChunkAddDistance: rg.g
        },
        queries: vg.wasmIconQueries,
        lookups: {
          ...tU.DEFAULT_CLIENT_PAGE_SOURCES.lookups,
          ...vg.wasmIconLookups,
          Km: rg.b,
          drawCallStats: Xg.g
        }
      }), (0, Vg.c)(), (0, vg.loadIcons)()
    }
  },
  40133: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => PU,
      d: () => TU
    });
    var tU = gU(40140);
    let pU = null,
      EU = null;

    function PU() {
      return pU ??= gU.e(58).then((() => gU(41979))).catch((UU => {
        throw pU = null, UU
      })), pU
    }

    function TU() {
      return EU ??= Promise.all([PU(), (0, tU.e)()]).then((UU => {
        let [RU] = UU;
        return RU
      }), (UU => {
        throw EU = null, UU
      })), EU
    }
  },
  36573: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => tU
    });
    const tU = {
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
  36413: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => pU,
      c: () => EU,
      d: () => jU,
      e: () => TU,
      h: () => qU,
      j: () => KU,
      l: () => GU,
      o: () => cU,
      q: () => PU
    });
    var tU = gU(1238);
    let pU = function(UU) {
        return UU[UU.Join = 0] = "Join", UU[UU.Leave = 1] = "Leave", UU[UU.Push = 2] = "Push", UU[UU.Cursor = 3] = "Cursor", UU[UU.Submit = 4] = "Submit", UU[UU.ReloadAsVariation = 5] = "ReloadAsVariation", UU[UU.CreateFile = 6] = "CreateFile", UU[UU.RenameFile = 7] = "RenameFile", UU[UU.DeleteFile = 8] = "DeleteFile", UU[UU.SetEngine = 9] = "SetEngine", UU[UU.RenameFolder = 10] = "RenameFolder", UU
      }({}),
      EU = function(UU) {
        return UU[UU.Joined = 0] = "Joined", UU[UU.Updates = 1] = "Updates", UU[UU.Presence = 2] = "Presence", UU[UU.RemoteCursor = 3] = "RemoteCursor", UU[UU.ForceClose = 4] = "ForceClose", UU[UU.LobbyFilesChanged = 5] = "LobbyFilesChanged", UU[UU.EngineSettings = 6] = "EngineSettings", UU
      }({});

    function PU(UU) {
      return "lobby" === UU.kind ? `lobby:${UU.path}` : `codeBlock:${UU.pos[0]},${UU.pos[1]},${UU.pos[2]}`
    }

    function TU(UU) {
      if ("lobby" === UU) return {
        kind: "lobby",
        path: tU.d
      };
      if (UU.startsWith("lobby:")) {
        const RU = UU.slice(6);
        return GU(RU) ? {
          kind: "lobby",
          path: RU
        } : null
      }
      const RU = UU.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return RU ? {
        kind: "codeBlock",
        pos: [parseInt(RU[1]), parseInt(RU[2]), parseInt(RU[3])]
      } : null
    }

    function qU(UU) {
      return UU.endsWith(".d.ts")
    }

    function KU(UU) {
      return UU.endsWith(".ts") && !qU(UU)
    }
    const cU = 64;

    function GU(UU) {
      if (!UU || UU !== UU.trim()) return !1;
      if (UU.length > cU) return !1;
      if (UU.startsWith("/") || UU.includes("\\") || UU.includes("\0")) return !1;
      if (!qU(UU) && !KU(UU) && ! function(UU) {
          return UU.endsWith(".js") && !UU.endsWith(".min.js") && !UU.endsWith(".bundle.js")
        }(UU)) return !1;
      const RU = UU.split("/");
      for (const gU of RU)
        if ("" === gU || "." === gU || ".." === gU) return !1;
      return !0
    }
    const jU = 14e3
  },
  38590: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => tU,
      d: () => pU
    });
    const tU = ["description", "label"];

    function pU(UU) {
      const RU = UU.type;
      return {
        type: RU,
        params: UU[RU]
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);