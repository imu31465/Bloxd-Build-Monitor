export const id = 46;
export const ids = [46];
export const modules = {
  39402: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => fT,
      h: () => KT,
      k: () => MT
    });
    const lT = 6e3;

    function MT(TT, kT) {
      return [Math.floor(TT[0] / kT) * kT, Math.floor(TT[1] / kT) * kT, Math.floor(TT[2] / kT) * kT]
    }

    function KT(TT) {
      const kT = (null !== TT && void 0 !== TT ? TT : "").match(/-?\d+(?:\.\d+)?/g);
      return kT && kT.length >= 3 ? [Number(kT[0]), Number(kT[1]), Number(kT[2])] : null
    }

    function OT(TT, kT) {
      return TT === kT ? String(TT) : `${TT}-${kT}`
    }

    function yT(TT, kT, cT, lT) {
      const MT = [];
      let KT = new Map;
      for (let OT = TT[2]; OT < TT[2] + kT; OT++) {
        const yT = new Map;
        let fT = TT[0];
        for (; fT < TT[0] + kT;) {
          const MT = lT(fT, cT, OT);
          let xT = fT;
          for (; xT + 1 < TT[0] + kT && lT(xT + 1, cT, OT) === MT;) xT++;
          if (null !== MT) {
            const TT = `${fT} ${xT} ${MT}`,
              kT = KT.get(TT);
            kT ? (kT.z1 = OT, KT.delete(TT), yT.set(TT, kT)) : yT.set(TT, {
              x0: fT,
              x1: xT,
              z0: OT,
              z1: OT,
              name: MT
            })
          }
          fT = xT + 1
        }
        MT.push(...KT.values()), KT = yT
      }
      return MT.push(...KT.values()), MT.sort(((TT, kT) => TT.z0 - kT.z0 || TT.x0 - kT.x0)).map((TT => `x${OT(TT.x0,TT.x1)} z${OT(TT.z0,TT.z1)} ${TT.name}`))
    }

    function fT(TT, kT, cT, MT) {
      let KT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : lT;
      const fT = [TT[0] + kT - 1, TT[1] + kT - 1, TT[2] + kT - 1],
        xT = null !== MT && MT.every(((kT, cT) => Math.floor(kT) >= TT[cT] && Math.floor(kT) <= fT[cT])),
        IT = [`The chunk from ${TT.join(" ")} to ${fT.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
      null !== MT && IT.push(`The player's feet are at ${MT.map(Math.floor).join(" ")}, ${xT?"in this chunk":"outside this chunk"}.`);
      const AT = [];
      for (let lT = TT[1]; lT <= fT[1]; lT++) {
        const MT = yT(TT, kT, lT, cT).join("; "),
          KT = AT[AT.length - 1];
        (null === KT || void 0 === KT ? void 0 : KT.boxes) === MT ? KT.to = lT : AT.push({
          from: lT,
          to: lT,
          boxes: MT
        })
      }
      const CT = AT.filter((TT => "" !== TT.boxes));
      0 === CT.length && IT.push("It is all air.");
      let jT = IT.join("\n").length;
      for (const lT of CT) {
        const TT = `y${OT(lT.from,lT.to)}: ${lT.boxes}`;
        if (jT += TT.length + 1, jT > KT) {
          IT.push(`Cut short: the layers from y${lT.from} up aren't shown, as there are too many blocks.`);
          break
        }
        IT.push(TT)
      }
      return IT.join("\n")
    }
  },
  8825: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => MT
    });
    var lT = cT(31);

    function MT() {
      return !lT.e.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  36769: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => OT,
      g: () => KT,
      j: () => MT
    });
    const lT = [.25, .5, 1, 2, 4, 8, 16];

    function MT(TT, kT) {
      const cT = lT;
      let MT = cT.indexOf(TT);
      return -1 === MT && (MT = cT.findIndex((kT => kT >= TT)), -1 === MT && (MT = cT.length - 1)), "up" === kT ? cT[Math.min(MT + 1, cT.length - 1)] : cT[Math.max(MT - 1, 0)]
    }

    function KT(TT) {
      return TT <= lT[0]
    }

    function OT(TT) {
      return TT >= lT[lT.length - 1]
    }
  },
  36310: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => MT,
      d: () => KT
    });
    let lT = !1;

    function MT() {
      return lT
    }

    function KT(TT) {
      return lT !== TT && (lT = TT, !0)
    }
  },
  38796: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => KT
    });
    var lT = cT(36),
      MT = cT(1974);

    function KT(TT) {
      let {
        taskId: kT,
        progress: cT
      } = TT;
      const lT = MT.b.get("_tasks");
      null !== lT && void 0 !== lT && lT[kT] && MT.b.apply({
        _tasks: {
          ...lT,
          [kT]: {
            ...lT[kT],
            progress: cT
          }
        }
      })
    }
    lT.k.subscribe("clientTaskProgress", (TT => {
      KT(TT)
    }))
  },
  39365: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => CT,
      f: () => vT,
      g: () => xT,
      k: () => AT,
      m: () => fT,
      o: () => OT,
      p: () => IT,
      r: () => tT
    });
    var lT = cT(1974),
      MT = cT(36),
      KT = cT(1990);
    const OT = (0, KT.k)((function() {
        var TT, kT, cT, MT;
        return {
          health: null !== (TT = lT.b.get("_health")) && void 0 !== TT ? TT : null,
          maxHealth: null !== (kT = lT.b.get("_totalMaxHealth")) && void 0 !== kT ? kT : null,
          shield: null !== (cT = lT.b.get("_shield")) && void 0 !== cT ? cT : null,
          maxShield: null !== (MT = lT.b.get("maxShield")) && void 0 !== MT ? MT : null
        }
      }), [], (0, KT.i)("_health", "_totalMaxHealth", "_shield", "maxShield")),
      yT = [{
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

    function fT(TT, kT) {
      return yT[(TT ? 2 : 0) + (kT ? 1 : 0)]
    }
    const xT = (0, KT.k)((function() {
      var TT;
      return null !== (TT = lT.b.get("_aura")) && void 0 !== TT ? TT : null
    }), [], (0, KT.i)("_aura"));

    function IT(TT) {
      return {
        watch: kT => (0, MT.m)("shotPlayer", (cT => {
          let {
            playerId: lT,
            damage: MT,
            wasCrit: KT,
            distance: OT
          } = cT;
          TT(lT) && kT({
            damage: MT,
            wasCrit: KT,
            distance: OT
          })
        }))
      }
    }

    function AT(TT) {
      return (0, KT.b)("chat", (kT => {
        let {
          serverChatMsgId: cT,
          content: lT,
          chatterEId: MT
        } = kT;
        return {
          serverChatMsgId: null !== cT && void 0 !== cT ? cT : null,
          content: lT,
          author: MT ? TT(MT) : null
        }
      }))
    }
    class CT {
      constructor() {
        this.shown = null, this.needed = null, this.neededSince = 0
      }
      update(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const cT = this.shown;
        return TT !== this.needed && (this.needed = TT, this.neededSince = kT, null === TT && (this.shown = null)), this.shown !== this.needed && kT - this.neededSince > 200 && (this.shown = this.needed), this.shown !== cT
      }
    }

    function jT(TT) {
      return [{
        translationKey: `touchKeys:${TT}`
      }]
    }
    const vT = {
      open: jT("open"),
      close: jT("close"),
      milk: jT("milk"),
      shear: jT("shear"),
      tame: jT("tame"),
      feed: jT("feed"),
      ride: jT("ride")
    };

    function tT(TT) {
      return [{
        translationKey: "touchKeys:tameWith"
      }, " ", {
        icon: TT
      }]
    }
  },
  40396: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => yT,
      g: () => OT
    });
    var lT = cT(3222);
    let MT = null,
      KT = null;

    function OT() {
      return KT ??= cT.e(208).then((() => cT(36124))).then((TT => {
        let {
          ITEM_SPRITES: kT,
          ITEM_SPRITES_WITHOUT_FILE: cT,
          ITEM_FILES_WITHOUT_SPRITE: KT
        } = TT;
        MT = function(TT, kT, cT) {
          const MT = new Set,
            KT = (0, lT.z)(kT);
          let OT = 0;
          for (const [lT, yT] of TT.entries()) lT === KT[OT] ? OT++ : MT.add(yT);
          if ("" !== cT)
            for (const yT of cT.split(lT.s)) MT.add(yT);
          return MT
        }(kT.split(lT.s), cT, KT)
      }), (TT => {
        throw KT = null, TT
      })), KT
    }

    function yT(TT) {
      var kT, cT;
      return null !== (kT = null === (cT = MT) || void 0 === cT ? void 0 : cT.has(TT)) && void 0 !== kT && kT
    }
  },
  39388: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => lT,
      f: () => KT,
      h: () => MT
    });
    const lT = 128;

    function MT(TT, kT, cT, lT) {
      const MT = 2 * kT - 1,
        KT = 1 - 2 * cT,
        OT = TT(0) - MT * TT(3),
        yT = TT(4) - MT * TT(7),
        fT = TT(8) - MT * TT(11),
        xT = TT(1) - KT * TT(3),
        IT = TT(5) - KT * TT(7),
        AT = TT(9) - KT * TT(11);
      lT[0] = yT * AT - fT * IT, lT[1] = fT * xT - OT * AT, lT[2] = OT * IT - yT * xT;
      const CT = lT[0] * TT(3) + lT[1] * TT(7) + lT[2] * TT(11) < 0 ? -1 : 1,
        jT = Math.hypot(lT[0], lT[1], lT[2]) * CT;
      return lT[0] /= jT, lT[1] /= jT, lT[2] /= jT, lT
    }

    function KT(TT, kT, cT, lT, MT, KT) {
      const OT = [Math.floor(kT[0]), Math.floor(kT[1]), Math.floor(kT[2])],
        yT = [0, 0, 0],
        fT = [1 / 0, 1 / 0, 1 / 0],
        xT = [1 / 0, 1 / 0, 1 / 0];
      for (let CT = 0; CT < 3; CT++) yT[CT] = Math.sign(cT[CT]), 0 !== yT[CT] && (xT[CT] = Math.abs(1 / cT[CT]), fT[CT] = (OT[CT] + (yT[CT] > 0 ? 1 : 0) - kT[CT]) / cT[CT]);
      let IT = 0,
        AT = Math.abs(cT[0]) > Math.abs(cT[1]) ? 0 : 1;
      for (Math.abs(cT[2]) > Math.abs(cT[AT]) && (AT = 2); IT <= lT;) {
        if (TT(OT[0], OT[1], OT[2])) return MT[0] = OT[0], MT[1] = OT[1], MT[2] = OT[2], KT[0] = 0, KT[1] = 0, KT[2] = 0, KT[AT] = -yT[AT], !0;
        AT = fT[0] < fT[1] ? 0 : 1, fT[2] < fT[AT] && (AT = 2), IT = fT[AT], OT[AT] += yT[AT], fT[AT] += xT[AT]
      }
      return !1
    }
  },
  39362: (TT, kT, cT) => {
    function lT(TT, kT, cT) {
      return Math.hypot(TT[0] - kT[0], TT[1] - kT[1], TT[2] - kT[2]) < cT + .5
    }
    cT.d(kT, {
      d: () => lT
    })
  },
  38808: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => IT
    });
    var lT = cT(1226),
      MT = cT(1333),
      KT = cT(31),
      OT = cT(1316),
      yT = cT(1327),
      fT = cT(1530),
      xT = cT(36284);

    function IT(TT) {
      let {
        tc: kT,
        hc: cT
      } = TT;
      const IT = null !== kT && void 0 !== kT ? kT : (0, yT.b)().gameNameWithVariation;
      (0, lT.H)(IT) && ((0, xT.l)(), (0, OT.$)((() => {
        console.log("Received matchmaking order from game server to game", kT), (0, KT.l)("inGameReplay"), (0, fT.navigatePreserveSearch)((0, MT.c)(IT, null !== cT && void 0 !== cT ? cT : void 0))
      }), "video_start"))
    }
  },
  38974: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => KT
    });
    var lT = cT(36),
      MT = cT(2009);

    function KT(TT) {
      var kT, cT;
      const KT = (0, MT.q)(null !== (kT = null === (cT = MT.y.toggleFreeCam) || void 0 === cT ? void 0 : cT[0]) && void 0 !== kT ? kT : null);
      lT.k.nt("showBottomMessage", {
        message: `Free Camera ${TT?"Enabled":"Disabled"}${KT?` - Press ${KT} to toggle`:""}`,
        timeoutLength: 2e3,
        type: "Warning"
      })
    }
  },
  38799: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => fT,
      g: () => OT,
      h: () => yT,
      k: () => xT
    });
    var lT = cT(36),
      MT = cT(1363);
    const KT = new Map;

    function OT(TT, kT) {
      lT.k.nt("newUiRequest", {
        id: TT,
        clientParameters: kT
      }, !0)
    }

    function yT(TT) {
      lT.k.nt("removeUiRequest", TT, !0);
      const kT = KT.get(TT);
      kT && (kT.tearDownNotification(), KT.delete(TT))
    }

    function fT() {
      lT.k.nt("clearUiRequests");
      for (const TT of KT.values()) TT.tearDownNotification();
      KT.clear()
    }

    function xT(TT, kT, cT) {
      const lT = MT.NotificationProvider.showPromptPopup({
        title: kT,
        confirmText: "general:yes",
        cancelText: "general:no",
        unlockPointerKey: "uiRequestPopup"
      });
      KT.set(TT, lT), lT.getResult().then((kT => {
        KT.delete(TT), "notificationTornDown" !== kT && cT(kT)
      }))
    }
  },
  39393: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => AT,
      g: () => CT
    });
    var lT = cT(218),
      MT = cT(39402);
    const KT = 20;

    function OT(TT) {
      return TT.map(Math.floor).join(" ")
    }

    function yT(TT) {
      return null === TT.amount || 1 === TT.amount ? TT.name : `${TT.amount} ${TT.name}`
    }
    var fT = cT(39408),
      xT = cT(1974),
      IT = cT(1327);

    function AT(TT, kT) {
      if (!TT) return fT.d;
      const cT = TT.playerFeet();
      if (!cT) return "The player isn't in the world yet, so no blocks can be seen.";
      const KT = lT.f.vv,
        OT = (0, MT.k)(null !== kT && void 0 !== kT ? kT : cT, KT),
        yT = TT.chunkBlocks(OT);
      return yT ? (0, MT.e)(OT, KT, ((kT, cT, lT) => {
        const MT = yT(kT, cT, lT);
        return 0 === MT ? null : TT.blockName(MT).split("|")[0]
      }), cT) : `The chunk from ${OT.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${cT.map(Math.floor).join(" ")}.`
    }

    function CT(TT) {
      var kT, cT, lT;
      if (!TT) return fT.e;
      const MT = TT.playerFeet();
      if (!MT) return "The player isn't in the world yet, so nothing in it can be seen.";
      const {
        slots: AT,
        heldSlot: CT
      } = TT.inventory();
      return function(TT) {
        const kT = [];
        null !== TT.game && kT.push(`Game: ${TT.game}.`);
        const cT = null === TT.health ? "" : `, health ${Math.round(TT.health)}${null===TT.maxHealth?"":` of ${Math.round(TT.maxHealth)}`}`;
        kT.push(`The player (the creator) stands at ${OT(TT.position)}${cT}, ${TT.creative?"in":"not in"} creative mode.`);
        const lT = TT.slots[TT.heldSlot];
        kT.push(lT ? `Holding (slot ${TT.heldSlot}): ${yT(lT)}.` : `Holding nothing (slot ${TT.heldSlot} is empty).`);
        const MT = TT.slots.flatMap(((TT, kT) => TT ? [`slot ${kT}: ${yT(TT)}`] : []));
        kT.push(MT.length > 0 ? `Inventory: ${MT.join(", ")}.` : "Inventory: empty.");
        const fT = kT => Math.hypot(kT.position[0] - TT.position[0], kT.position[1] - TT.position[1], kT.position[2] - TT.position[2]),
          xT = [...TT.nearby].sort(((TT, kT) => fT(TT) - fT(kT)));
        if (0 === xT.length) kT.push("No other players or mobs are near enough to see.");
        else {
          kT.push("Near them, nearest first:");
          for (const TT of xT.slice(0, KT)) {
            const cT = "player" === TT.kind ? `player "${TT.name||"?"}"` : TT.name && TT.name !== TT.kind ? `${TT.kind} "${TT.name}"` : TT.kind,
              lT = Math.round(fT(TT));
            kT.push(`- ${cT} at ${OT(TT.position)}, ${lT} block${1===lT?"":"s"} away`)
          }
          xT.length > KT && kT.push(`- and ${xT.length-KT} more further away`)
        }
        return TT.droppedItems > 0 && kT.push(`${TT.droppedItems} dropped item${1===TT.droppedItems?" is":"s are"} on the ground nearby.`), kT.join("\n")
      }({
        game: null !== (kT = (0, IT.b)().gameNameWithVariation) && void 0 !== kT ? kT : null,
        position: MT,
        health: null !== (cT = xT.b.get("_health")) && void 0 !== cT ? cT : null,
        maxHealth: null !== (lT = xT.b.get("_totalMaxHealth")) && void 0 !== lT ? lT : null,
        creative: !0 === xT.b.get("creative"),
        heldSlot: CT,
        slots: AT,
        nearby: TT.nearby(),
        droppedItems: TT.droppedItems()
      })
    }
  },
  38819: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => yT,
      d: () => fT,
      g: () => xT
    });
    var lT = cT(1226),
      MT = cT(1018),
      KT = cT(36693),
      OT = cT(36);

    function yT(TT) {
      let {
        lobbyName: kT,
        gameNameWithVariation: cT
      } = TT;
      return !(0, lT.K)(kT) || null !== cT && (cT.startsWith("testGym") || (0, MT.j)(cT))
    }

    function fT(TT) {
      return TT.jl === KT.b.Leave || TT.jl === KT.b.Cursor
    }

    function xT(TT) {
      OT.k.nt("codeCollab", {
        type: TT.jl,
        docKey: TT.vl,
        version: TT.tl,
        editorCount: TT.hl,
        peers: TT.Nl,
        updates: TT.Ql,
        playerId: TT.Sl,
        playerName: TT.Dl,
        colour: TT.al,
        anchor: TT.Fl,
        head: TT.rl,
        existingCursors: TT.Pl,
        files: TT.wl,
        engineSettings: TT.ml
      })
    }
  },
  40339: (TT, kT, cT) => {
    cT.d(kT, {
      B: () => pT,
      E: () => ET,
      G: () => JT,
      J: () => VT,
      K: () => zT,
      O: () => UT,
      Q: () => gT,
      R: () => HT,
      d: () => YT,
      g: () => uT,
      k: () => mT,
      l: () => BT,
      m: () => bT,
      o: () => wT,
      s: () => ZT,
      v: () => oT,
      w: () => GT,
      z: () => eT
    });
    var lT = cT(1409),
      MT = cT(36),
      KT = cT(1292),
      OT = cT(2435),
      yT = cT(4787),
      fT = cT(4748);
    let xT, IT = !1,
      AT = !1,
      CT = !1,
      jT = !1;
    const vT = 1300,
      tT = 3e3;
    let hT = 0,
      NT = !1,
      QT = !1,
      ST = 0;
    const DT = 2;
    let aT = !1,
      FT = !1;
    const rT = new Set,
      PT = new Set;

    function wT() {
      return IT
    }

    function mT() {
      return QT
    }

    function bT() {
      return FT
    }

    function zT() {
      return (0, KT.q)() && !FT
    }

    function JT(TT) {
      let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (TT !== FT) {
        FT = TT;
        for (const TT of [...PT]) TT(FT);
        kT && gT()
      }
    }

    function oT(TT) {
      return PT.add(TT), () => {
        PT.delete(TT)
      }
    }

    function HT() {
      (0, yT.h)(OT.s.Menu, (0, KT.q)() ? 0 : OT.s.Menu)
    }

    function eT() {
      QT = !1, ST = 0, HT(), gT()
    }

    function GT(TT) {
      return rT.add(TT), () => {
        rT.delete(TT)
      }
    }

    function VT(TT) {
      AT = !1, TT !== IT && (IT = TT, jT = !1, clearTimeout(xT), CT = !IT && aT, IT ? (NT = !1, QT = !1, ST = 0) : zT() && !aT && (QT = !0), aT = !1, IT && !zT() && nT(), iT(), CT && gT())
    }

    function ET(TT) {
      TT !== NT && (NT = TT, TT || gT())
    }

    function ZT() {
      AT = !1, jT || !0 !== LT() || (jT = !0, clearTimeout(xT), xT = setTimeout(XT, vT))
    }

    function uT() {
      return (!AT || performance.now() - hT > tT) && (AT = (0, fT.G)().lockPointer(), hT = performance.now()), AT
    }

    function XT() {
      dT() && RT() && uT()
    }

    function dT() {
      return zT() && !IT && !NT && !(0, lT.h)()
    }

    function LT() {
      var TT;
      return "undefined" === typeof navigator || null === (TT = navigator.userActivation) || void 0 === TT ? void 0 : TT.isActive
    }

    function RT() {
      return CT && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== LT()
    }

    function gT() {
      zT() ? dT() && !QT && RT() && uT() : IT && !aT && nT()
    }

    function UT() {
      QT ? navigator.vendor.startsWith("Apple") ? WT() : ST = DT : gT()
    }

    function YT() {
      ST > 0 && 0 === --ST && WT()
    }

    function BT() {
      ST = 0
    }

    function WT() {
      dT() && !0 === LT() && uT()
    }

    function nT() {
      aT = !0, (0, fT.G)().unlockPointer()
    }

    function pT() {
      AT = !1, CT = !1, jT = !1, clearTimeout(xT), NT = !1, QT = !1, ST = 0, aT = !1;
      const TT = IT;
      IT = !1, TT && iT()
    }

    function iT() {
      for (const TT of [...rT]) TT(IT);
      MT.k.nt("pointerLockUpdate", IT)
    }
  },
  40318: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => CT,
      f: () => yT,
      g: () => AT,
      h: () => xT,
      i: () => OT,
      m: () => IT,
      o: () => fT
    });
    let lT = null,
      MT = null,
      KT = null;

    function OT(TT) {
      lT = TT
    }

    function yT() {
      return lT
    }

    function fT(TT) {
      MT = TT
    }

    function xT() {
      return MT
    }

    function IT(TT) {
      KT = TT
    }

    function AT() {
      return KT
    }

    function CT() {
      var TT, kT;
      return !0 === (null === (TT = MT) || void 0 === TT || null === (kT = TT.currentViewer) || void 0 === kT ? void 0 : kT.inPlayback)
    }
  },
  40311: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      attachPlayGameSources: () => rl,
      playGameSources: () => Fl
    });
    var lT = cT(1953),
      MT = cT(40318),
      KT = cT(4748),
      OT = cT(40215),
      yT = cT(40321),
      fT = cT(39365),
      xT = cT(36),
      IT = cT(4769),
      AT = cT(4761),
      CT = cT(40254),
      jT = cT(40284),
      vT = cT(40325),
      tT = cT(40264);
    (0, tT.m)(IT.Xb.Chat, (TT => {
      if (TT.payloadKind !== AT.ac.Msgpack) return;
      const kT = function(TT) {
        if (null === TT || "object" !== typeof TT || !("content" in TT)) return null;
        const {
          chatMsgId: kT,
          content: cT,
          chatterEId: lT
        } = TT;
        return {
          serverChatMsgId: null !== kT && void 0 !== kT ? kT : void 0,
          content: cT,
          chatterEId: void 0 === lT || null === lT ? void 0 : String(lT)
        }
      }((0, CT.c)(TT.payload));
      null !== kT && xT.k.nt("chat", kT, !0)
    }));
    const hT = {
        chatReceived: (0, fT.k)((function(TT) {
          var kT, cT, lT;
          return {
            id: TT,
            name: null !== (kT = vT.h.getName(TT)) && void 0 !== kT ? kT : null,
            local: (0, jT.d)() === TT,
            profileEffect: null !== (cT = null === (lT = (0, vT.j)(TT)) || void 0 === lT ? void 0 : lT.profileEffect) && void 0 !== cT ? cT : null
          }
        }))
      },
      NT = {
        sendChatMessage(TT) {
          var kT;
          let {
            vI: cT,
            channelName: lT
          } = TT;
          null === (kT = (0, OT.g)()) || void 0 === kT || kT.clientApi.sendChat(cT, lT)
        }
      };
    var QT = cT(218),
      ST = cT(1974),
      DT = cT(40204),
      aT = cT(39362);
    const FT = [0, 0, 0],
      rT = {
        codeBlockClickable(TT) {
          var kT;
          const cT = (0, OT.g)();
          if (null === cT || void 0 === cT || !cT.isSessionLive) return !1;
          const lT = cT.api;
          if (0 !== (DT.A.playerFlags(lT.apiView, 0) & DT.Od.Crouching)) return !1;
          const MT = lT.queries.directorEntity(lT.localId) >= DT.Cb.BYTES ? lT.memoryData(lT.scratch(), DT.Cb.BYTES, 8, "the local player's DirectorEntity") : null;
          if (null === MT) return !1;
          for (let KT = 0; KT < 3; KT++) FT[KT] = DT.Cb.feet(MT, 0, KT);
          return FT[1] += DT.Cb.eyeHeight(MT, 0), (0, aT.d)(FT, TT, null !== (kT = ST.b.get("blockReach")) && void 0 !== kT ? kT : QT.f.mw)
        }
      },
      PT = {
        clickCodeBlock(TT) {
          var kT;
          null === (kT = (0, OT.g)()) || void 0 === kT || kT.clickCodeBlock(TT)
        }
      };
    var wT = cT(40222),
      mT = cT(40329),
      bT = cT(1018),
      zT = cT(38856),
      JT = cT(4745),
      oT = cT(40239),
      HT = cT(40219),
      eT = cT(40246);

    function GT(TT) {
      if (null === TT) return null;
      const kT = [];
      for (const cT of TT) {
        const TT = Object.keys(cT)[0];
        if ("AT" === TT) {
          const {
            str: TT,
            style: lT,
            clickableUrl: MT
          } = cT.AT, KT = Object.keys(TT)[0], OT = TT[KT];
          "string" !== KT && "styledEntityName" !== KT && "styledTranslatedText" !== KT || kT.push({
            str: OT,
            style: lT,
            clickableUrl: MT
          })
        } else kT.push(cT[TT])
      }
      return kT
    }
    const VT = {
      screenPos(TT) {
        var kT, cT;
        return null !== (kT = null === (cT = (0, OT.g)()) || void 0 === cT ? void 0 : cT.renderFrame.projectWorldPosToScreenPos(TT)) && void 0 !== kT ? kT : {
          x: 0,
          y: 0
        }
      }
    };
    let ET = !1;

    function ZT() {
      ET || (ET = !0, (0, tT.m)(IT.Xb.ProgressBarUpdate, (TT => {
        const kT = (0, eT.g)(TT);
        (0, eT.b)(kT) && xT.k.nt("progressBarUpdate", kT, !0)
      })), (0, tT.m)(oT.w, (TT => {
        const kT = (0, eT.e)(oT.w, TT);
        kT && xT.k.nt("middleScreenBarInitiate", {
          duration: kT.oT,
          HT: kT.HT,
          horizBarRemOffset: kT.eT
        }, !0)
      })), (0, tT.m)(IT.Xb.RemoveMiddleScreenBar, (() => {
        xT.k.nt("middleScreenBarRemove")
      })), (0, tT.m)(oT.lb, (TT => {
        const kT = (0, eT.e)(oT.lb, TT);
        if (kT) {
          var cT;
          const TT = kT.PT ? null === (cT = (0, OT.g)()) || void 0 === cT ? void 0 : cT.renderFrame.projectDirectionToScreenPos(kT.PT) : void 0;
          xT.k.nt("sendHitmarker", {
            Ac: kT.Ac,
            screenPos: TT
          }, !0)
        }
      })), (0, tT.m)(oT.qb, (TT => {
        const kT = (0, eT.e)(oT.qb, TT);
        if (kT) {
          const {
            id: TT,
            position: cT,
            style: lT,
            IT: MT,
            vT: KT
          } = kT;
          xT.k.nt("setDirectionArrow", {
            id: TT,
            position: cT,
            style: lT,
            text: GT(MT),
            vT: KT
          }, !0)
        }
      })), (0, tT.m)(oT.g, (TT => {
        const kT = (0, eT.e)(oT.g, TT);
        kT && xT.k.nt("clearDirectionArrow", {
          id: kT.id
        }, !0)
      })), (0, tT.m)(oT.o, (TT => {
        const kT = (0, eT.e)(oT.o, TT);
        kT && xT.k.nt("flyingMiddleMessage", {
          content: GT(kT.Cc),
          jc: kT.jc,
          vc: kT.vc
        }, !0)
      })), (0, tT.m)(IT.Xb.WorldVariation, (TT => {
        const kT = (0, eT.g)(TT);
        if ("string" === typeof kT) {
          const TT = kT === bT.d ? null : {
            message: `Currently loaded as variation: ${kT}`,
            type: "Warning"
          };
          xT.k.nt("showPermanentBottomMessage", TT, !0)
        }
      })), (0, tT.m)(oT.L, (TT => {
        const kT = (0, eT.e)(oT.L, TT);
        kT && function(TT, kT) {
          const {
            type: cT,
            params: lT
          } = (0, zT.e)(kT), MT = {
            ...lT
          };
          for (const KT of zT.c) MT[KT] && (MT[KT] = GT(MT[KT]));
          JT.d.queueQTE(TT, cT, MT).getResult().then((kT => {
            var cT;
            "boolean" === typeof kT && (null === (cT = (0, OT.g)()) || void 0 === cT || cT.send(HT.b.QteResponse, {
              qteId: TT,
              qteResponse: kT
            }))
          }))
        }(kT.id, kT.Vk)
      })), (0, tT.m)(oT.ab, (TT => {
        const kT = (0, eT.e)(oT.ab, TT);
        "number" === typeof kT && JT.d.cancelQTE(kT)
      })), (0, tT.h)((() => {
        JT.d.reset(), xT.k.nt("showPermanentBottomMessage", null, !0)
      })), (0, tT.l)((() => {
        JT.d.reset()
      })), (0, tT.m)(IT.Xb.EditItemCraftingRecipes, (TT => {
        const kT = (0, eT.g)(TT);
        (0, eT.b)(kT) && xT.k.nt("craftingRecipesEdited", {
          itemName: kT.craftingRecipeItemName,
          recipesForItem: kT.recipesForItem
        })
      })), (0, tT.m)(oT.Y, (TT => {
        const kT = (0, eT.e)(oT.Y, TT);
        kT && xT.k.nt("craftingRecipesEdited", {
          itemName: kT.bc,
          recipesForItem: []
        })
      })))
    }
    var uT = cT(31);
    const XT = [{
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

    function dT(TT) {
      return DT.A.playerFlags(TT.api.apiView, 0)
    }
    const LT = {
        freeCamera: (0, jT.b)((TT => () => {
          const kT = TT.isSessionLive && 0 !== (dT(TT) & DT.Od.FreeCamMoves),
            cT = TT.freeCameraAllowed() && null === uT.e.get("scriptedCameraFacing");
          return XT[(cT ? 2 : 0) + (kT ? 1 : 0)]
        }), XT[0], (TT => (0, KT.q)(TT)))
      },
      RT = {
        setFreeCameraMovesFly: TT => {
          var kT;
          null === (kT = (0, OT.g)()) || void 0 === kT || kT.setFreeCameraMovesFly(TT)
        }
      },
      gT = {
        freeCameraPos: () => {
          const TT = (0, OT.g)();
          return null !== TT && void 0 !== TT && TT.isSessionLive && TT.renderFrame.hasView && 0 !== (dT(TT) & DT.Od.FreeCam) ? TT.renderFrame.cameraPosition : null
        }
      };
    var UT = cT(38974);
    let YT = !1,
      BT = !1;

    function WT() {
      const TT = (0, OT.g)();
      if (null === TT || void 0 === TT || !TT.isSessionLive) return void(YT = !1);
      const kT = 0 !== (DT.A.playerFlags(TT.api.apiView, 0) & DT.Od.FreeCam);
      kT !== YT && (YT = kT, (0, UT.c)(kT))
    }
    var nT = cT(339),
      pT = cT(36845),
      iT = cT(1990);
    var qT = cT(40335),
      sT = cT(40281);
    const Tk = {
      interactPrompt: null,
      blockText: null,
      neededTool: null
    };
    let kk = "off";

    function ck(TT) {
      var kT;
      return null === TT ? null : {
        label: null !== (kT = (0, qT.e)(TT, "interactionPrompt")) && void 0 !== kT ? kT : null
      }
    }
    const lk = new Map([
      [DT.Cc.Open, {
        label: fT.f.open
      }],
      [DT.Cc.Close, {
        label: fT.f.close
      }],
      [DT.Cc.Milk, {
        label: fT.f.milk
      }],
      [DT.Cc.Shear, {
        label: fT.f.shear
      }],
      [DT.Cc.Tame, {
        label: fT.f.tame
      }],
      [DT.Cc.Feed, {
        label: fT.f.feed
      }],
      [DT.Cc.Ride, {
        label: fT.f.ride
      }]
    ]);
    class Mk {
      constructor() {
        this.target = Tk, this.Rx = DT.dd, this.optionName = null, this.pickaxe = new fT.d
      }
      read(TT) {
        var kT;
        const cT = DT.A.targetBlockId(TT.api.apiView, 0);
        cT !== this.Rx && (this.Rx = cT, this.optionName = cT === DT.dd ? null : `${TT.tables.getMetaInfo(cT).rootName}CrosshairText`);
        const lT = null === this.optionName ? null : null !== (kT = TT.tables.getClientOption(this.optionName)) && void 0 !== kT ? kT : null;
        this.pickaxe.update(function(TT, kT) {
          var cT, lT, MT;
          if (0 === (DT.A.playerFlags(TT.api.apiView, 0) & DT.Od.Breaking) || kT === DT.dd || 0 === kT) return null;
          const {
            tables: KT
          } = TT;
          if (!0 === KT.getClientOption("creative")) return null;
          const OT = KT.nameOfId(kT),
            yT = null === (cT = TT.items.ty()) || void 0 === cT ? void 0 : cT.name,
            fT = null !== (lT = KT.getItemStat(OT, "harvestLevel")) && void 0 !== lT ? lT : 0;
          return (0, nT.wc)({
            blockHarvestType: KT.getDefaultItemStat(OT, "harvestType"),
            blockHarvestLevel: KT.getDefaultItemStat(OT, "harvestLevel"),
            harvestLevel: fT,
            heldToolType: void 0 === yT ? void 0 : KT.getDefaultItemStat(yT, "harvests"),
            heldToolLevel: void 0 === yT ? void 0 : KT.getDefaultItemStat(yT, "level")
          }) && null !== (MT = pT.r[fT]) && void 0 !== MT ? MT : null
        }(TT, cT)), TT.watchPromptPick(kk);
        const MT = "touch" === kk ? function(TT) {
          var kT;
          const cT = TT.interactLabel;
          return cT === DT.Cc.Entity ? ck(TT.promptEntity) : cT === DT.Cc.TameWith ? {
            label: (0, fT.r)(TT.tables.nameOfId(TT.interactIcon))
          } : null !== (kT = lk.get(cT)) && void 0 !== kT ? kT : null
        }(TT) : ck(TT.promptEntity);
        return this.target = (0, iT.m)(this.target, {
          interactPrompt: MT,
          blockText: lT,
          neededTool: this.pickaxe.shown
        }), this.target
      }
    }
    let Kk = null;
    const Ok = {
      current: () => {
        var TT, kT;
        return null !== (TT = null === (kT = Kk) || void 0 === kT ? void 0 : kT.target) && void 0 !== TT ? TT : Tk
      },
      watch: TT => {
        const kT = new Mk;
        Kk = kT;
        const cT = (0, jT.h)((cT => {
          let lT = kT.read(cT);
          TT(lT);
          const MT = (0, KT.s)((() => {
            const MT = kT.read(cT);
            MT !== lT && (lT = MT, TT(MT))
          }));
          return () => {
            MT(), cT.watchPromptPick("off")
          }
        }));
        return () => {
          cT(), Kk === kT && (Kk = null)
        }
      }
    };
    let yk = 0,
      fk = 0;
    const xk = {
        health: fT.o,
        aura: fT.g,
        hotbar: sT.e.states.hotbar,
        heldItemAim: sT.e.states.heldItemAim,
        crouching: (0, jT.b)((TT => function(TT) {
          const kT = () => 0 !== (DT.A.playerFlags(TT.apiView, 0) & DT.Od.Crouching);
          return {
            current: kT,
            watch(TT) {
              let cT = kT();
              return (0, KT.q)((() => {
                const lT = kT();
                lT !== cT && (cT = lT, TT(lT))
              }))
            }
          }
        }(TT.api).current), !1, (TT => (0, KT.q)(TT))),
        flight: (0, jT.b)((TT => () => function(TT) {
          const kT = DT.A.playerFlags(TT.apiView, 0);
          return (0, fT.m)(0 !== (kT & DT.Od.CanFly), 0 !== (kT & DT.Od.Flying))
        }(TT.api)), (0, fT.m)(!1, !1), (TT => (0, KT.q)(TT))),
        gliderBoostFuel: (0, jT.b)((TT => () => DT.A.gliderBoostFuel(TT.api.apiView, 0)), 0, (TT => (0, KT.q)(TT))),
        crosshairTarget: Ok
      },
      Ik = {
        hotbarSlotRequested: sT.e.events.hotbarSlotRequested,
        hotbarScrolled: sT.e.events.hotbarScrolled,
        numberKeyPressed: sT.e.events.numberKeyPressed,
        shotDamageToShow: (0, fT.p)((TT => !0 === (0, qT.e)(TT, "showDamageAmounts")))
      },
      Ak = {
        selectHotbarSlot: sT.e.commands.selectHotbarSlot,
        setCrosshairInteractPrompt: TT => {
          kk = TT
        }
      },
      Ck = {
        momentumFrac: function() {
          var TT, kT, cT;
          const lT = (0, OT.g)(),
            MT = performance.now(),
            KT = null === lT || void 0 === lT || null === (TT = lT.items.ty()) || void 0 === TT || null === (kT = TT.attributes) || void 0 === kT || null === (cT = kT.customAttributes) || void 0 === cT ? void 0 : cT.enchantments;
          return yk = null !== lT && null !== KT && void 0 !== KT && KT.Momentum ? 0 !== (DT.A.playerFlags(lT.api.apiView, 0) & DT.Od.Breaking) ? Math.max(0, DT.A.momentumFrac(lT.api.apiView, 0)) : Math.max(0, yk - (MT - fk) / 1500) : 0, fk = MT, yk
        }
      };
    var jk = cT(40210);
    const vk = {
      lobbyManage(TT) {
        var kT;
        null === (kT = (0, OT.g)()) || void 0 === kT || kT.send(HT.b.LobbyManage, TT)
      }
    };
    var tk = cT(1244),
      hk = cT(36310),
      Nk = cT(8825),
      Qk = cT(1654),
      Sk = cT(2435),
      Dk = cT(4773);
    let ak = !1;

    function Fk(TT) {
      ak = TT
    }

    function rk() {
      "inGame" !== uT.e.get("gameState") || (0, Qk.u)() || xT.k.nt("ctrlCrouchWithoutFullscreen")
    }
    let Pk = !1;
    const wk = {
        OpenEmoteWheel: () => {
          Fk(!0), Pk = !0, queueMicrotask((() => {
            Pk && (Pk = !1, xT.k.nt("requestEmoteWheelHoldOpen"))
          }))
        },
        ToggleFullCoordinateOverlay: () => {
          xT.k.nt("toggleFullCoordinateOverlay")
        },
        KeyYPressed: () => {
          (0, hk.b)() || xT.k.nt("YKeyPressed")
        },
        KeyXPressed: () => {
          (0, hk.b)() || xT.k.nt("XKeyPressed")
        },
        CtrlCrouch: rk,
        "primary-fire": () => {
          xT.k.nt("mouseState", {
            Ky: tk.c.DownFirePrimary,
            isDown: !0
          })
        },
        "alt-fire": () => {
          xT.k.nt("mouseState", {
            Ky: tk.c.DownFireSecondary,
            isDown: !0
          })
        },
        TouchHold: () => {
          xT.k.nt("mouseState", {
            Ky: tk.c.TouchDownLong,
            isDown: !0
          })
        }
      },
      mk = {
        OpenEmoteWheel: () => {
          Fk(!1), Pk ? (Pk = !1, (0, Nk.e)() || xT.k.nt("requestEmoteWheelHoldOpen")) : xT.k.nt("requestEmoteWheelHoldRelease")
        },
        CtrlCrouch: rk,
        "primary-fire": () => {
          xT.k.nt("mouseState", {
            Ky: tk.c.UpFirePrimary,
            isDown: !1
          })
        },
        "alt-fire": () => {
          xT.k.nt("mouseState", {
            Ky: tk.c.UpFireSecondary,
            isDown: !1
          })
        },
        TouchDig: () => {
          xT.k.nt("mouseState", {
            Ky: tk.c.UpFirePrimary,
            isDown: !1
          })
        }
      };
    let bk = !1;

    function zk() {
      bk || (bk = !0, (0, Dk.h)((TT => {
        if ((0, MT.d)()) return;
        const kT = (0, Dk.e)(TT) ? "primary-fire" : TT.action;
        var cT;
        if (TT.down) {
          if (0 === (TT.flags & Sk.b.Synthetic)) {
            var lT;
            null === (lT = wk[kT]) || void 0 === lT || lT.call(wk)
          }
        } else null === (cT = mk[kT]) || void 0 === cT || cT.call(mk)
      })))
    }
    var Jk = cT(328),
      Hk = cT(118),
      ek = cT(47),
      Gk = cT(40339),
      Vk = cT(1327),
      Ek = cT(38819);
    let Zk = !1;
    const uk = {
      sendCodeCollab(TT) {
        var kT;
        null === (kT = (0, OT.g)()) || void 0 === kT || kT.send(HT.b.CodeCollab, (0, HT.i)(TT), (0, Ek.d)(TT))
      }
    };
    var Xk = cT(38914);
    let dk = null,
      Lk = !1,
      Rk = null;

    function gk() {
      return "inGame" === uT.e.get("gameState") && !(0, hk.b)()
    }
    const Uk = {
        OpenInventory: TT => {
          (0, Qk.A)(TT, "inventory", (0, jk.q)())
        },
        OpenShop: TT => {
          dk && gk() && (0, Qk.z)(TT, Jk.o.SHOP, !dk.shopIsEmpty(ST.b.get("shopInfo")))
        },
        OpenLobbyLeaderboard: TT => {
          gk() && (0, Qk.z)(TT, Jk.o.LOBBY_LEADERBOARD, (0, Xk.b)({
            lobbyLeaderboardInfo: ST.b.get("lobbyLeaderboardInfo"),
            lobbyManage: ST.b.get("lobbyManage")
          }))
        },
        OpenTasksAndLeaderboard: TT => {
          var kT;
          const cT = null === (kT = dk) || void 0 === kT ? void 0 : kT.getClientGameMapKey();
          cT ? (0, Qk.D)(TT, !0, cT) : (0, Qk.A)(TT, "retentionFeatures", !(!ST.b.get("_tasks") && !ST.b.get("_availableLeaderboards")))
        },
        OpenInviteLink: TT => {
          (0, Qk.A)(TT, "inviteLink", Hk.featureFlags.canUseInviteLinks)
        },
        OpenCodeEditor: TT => {
          gk() && function(TT) {
            var kT;
            const cT = (0, OT.g)(),
              lT = null !== cT && void 0 !== cT && cT.isSessionLive ? cT.api : null,
              MT = lT ? lT.kN(lT.localId) : null,
              KT = null !== (kT = null === MT || void 0 === MT ? void 0 : MT.map((TT => Math.floor(TT)))) && void 0 !== kT ? kT : null;
            (0, Qk.D)(TT, null !== KT && (0, Ek.c)((0, Vk.b)()), (() => {
              xT.k.nt("EditLobbyCode", KT)
            }))
          }(TT)
        },
        HideUi: () => {
          xT.k.nt("showUi", !1)
        }
      },
      Yk = {
        HideUi: () => {
          xT.k.nt("showUi", !0)
        }
      };

    function Bk() {
      Lk || (Lk = !0, cT.e(152).then((() => cT(42149))).then((TT => {
        dk = TT
      }), (TT => {
        console.error("[bloxd-wasm-client] the menu keys' checks did not load", TT)
      })), (0, Gk.w)((TT => {
        TT || !(0, Gk.k)() || (0, Hk.isMobile)() || !ek.e.getItem("disableFullscreen") || (0, Qk.s)() || uT.e.set({
          openEverythingMenuName: Jk.o.SETTINGS
        })
      })), (0, Dk.h)((TT => {
        let {
          action: kT,
          down: cT,
          press: lT
        } = TT;
        var KT, OT;
        (0, MT.d)() || (cT ? null === (KT = Uk[kT]) || void 0 === KT || KT.call(Uk, function(TT) {
          var kT;
          if (0 === TT || (null === (kT = Rk) || void 0 === kT ? void 0 : kT.press) !== TT) {
            const kT = {
              press: TT,
              event: new Event("inputAction")
            };
            Rk = kT, queueMicrotask((() => {
              Rk === kT && (Rk = null)
            }))
          }
          return Rk.event
        }(lT)) : null === (OT = Yk[kT]) || void 0 === OT || OT.call(Yk))
      })))
    }
    var Wk = cT(38796),
      nk = cT(38808),
      pk = cT(38799);
    const ik = {
      completeTask(TT) {
        var kT;
        null === (kT = (0, OT.g)()) || void 0 === kT || kT.send(HT.b.CompleteTask, (0, HT.k)(TT))
      },
      setServerCookie(TT) {
        var kT;
        let {
          key: cT,
          value: lT
        } = TT;
        null === (kT = (0, OT.g)()) || void 0 === kT || kT.send(HT.b.GeneralCookieSet, (0, HT.p)({
          cI: cT,
          lI: lT
        }))
      },
      answerUiRequest(TT) {
        var kT;
        let {
          id: cT,
          xI: lT
        } = TT;
        null === (kT = (0, OT.g)()) || void 0 === kT || kT.send(HT.b.UiRequestResp, (0, HT.S)({
          dI: cT,
          LI: lT,
          RI: 5
        }))
      },
      chooseRewardedAd(TT) {
        var kT;
        let {
          id: cT,
          xI: lT
        } = TT;
        null === (kT = (0, OT.g)()) || void 0 === kT || kT.send(HT.b.UiRequestResponded, (0, HT.Q)({
          id: cT,
          xI: lT
        }))
      },
      requestLeaderboard(TT) {
        var kT;
        let {
          category: cT,
          timeframe: lT,
          seeTop: MT
        } = TT;
        null === (kT = (0, OT.g)()) || void 0 === kT || kT.send(HT.b.LeaderboardRequest, {
          category: cT,
          timeframe: lT,
          seeTop: MT
        })
      }
    };
    let qk = !1;
    const sk = QT.f.Ow / 2,
      Tc = [sk, -sk, -sk, -sk, sk, sk, -sk, sk],
      kc = [0, 0, 0];

    function cc(TT, kT, cT) {
      for (let lT = 0; lT < TT.length; lT += 2)
        if (TT[lT] === kT && TT[lT + 1] === cT) return !0;
      return !1
    }
    const lc = {
      blocksStandingOn: function() {
        const TT = (0, OT.g)();
        if (null === TT) return [];
        const {
          api: kT,
          chunks: cT,
          tables: lT
        } = TT;
        if (!kT.readPosition(kT.localId, kc)) return [];
        const [MT, KT, yT] = kc, fT = Math.ceil(KT) - 1, xT = [], IT = [];
        for (let OT = 0; OT < Tc.length; OT += 2) {
          const TT = MT + Tc[OT],
            kT = yT + Tc[OT + 1];
          if (Number.isInteger(TT) || Number.isInteger(kT)) continue;
          const KT = Math.floor(TT),
            AT = Math.floor(kT);
          if (cc(IT, KT, AT)) continue;
          const CT = cT.Rx(KT, fT, AT);
          lT.isSolidBlockId(CT) && (IT.push(KT, AT), xT.push(lT.nameOfId(CT)))
        }
        return xT
      },
      dropAhead: function() {
        const TT = (0, OT.g)();
        return null !== TT && 0 !== (DT.A.playerFlags(TT.api.apiView, 0) & DT.Od.DropAhead)
      }
    };
    var Mc = cT(36769),
      Kc = cT(38888),
      Oc = cT(1363),
      yc = cT(40290);
    const fc = new Set(["replayLoad", "replaySave", "replaySaveAs", "replayTimelineZoomIn", "replayTimelineZoomOut"]),
      xc = new Set(["replaySkipBack", "replaySkipForward", "replaySpeedUp", "replaySpeedDown", "replayRecordKeyframe"]);

    function Ic() {
      const TT = new Set;
      return {
        add: kT => (TT.add(kT), () => {
          TT.delete(kT)
        }),
        fire() {
          for (const kT of TT) kT()
        }
      }
    }
    const Ac = Object.freeze([]);

    function Cc(TT, kT) {
      let cT, {
        rereads: lT,
        followLocalId: MT
      } = kT;
      const OT = () => (cT = (0, iT.m)(cT, TT()), cT);
      return {
        current: OT,
        watch(TT) {
          const kT = (0, vT.e)((kT => {
            lT(kT) && TT(OT())
          }));
          if (!MT) return kT;
          let cT = (0, jT.d)();
          const yT = (0, KT.s)((() => {
            const kT = (0, jT.d)();
            kT !== cT && (cT = kT, TT(OT()))
          }));
          return () => {
            kT(), yT()
          }
        }
      }
    }
    const jc = {
        players: Cc((function() {
          const TT = vT.h.ids(),
            kT = {};
          for (const KT of TT) {
            var cT, lT, MT;
            kT[KT] = {
              name: null !== (cT = vT.h.getName(KT)) && void 0 !== cT ? cT : null,
              ranks: null !== (lT = vT.h.getSetting(KT, "ranks")) && void 0 !== lT ? lT : Ac,
              cosmetics: null !== (MT = (0, vT.j)(KT)) && void 0 !== MT ? MT : null
            }
          }
          return {
            ids: TT,
            byId: kT,
            localId: (0, jT.d)()
          }
        }), {
          rereads: TT => "roster" !== TT.kind || TT.members || TT.settings.has("ranks"),
          followLocalId: !0
        }),
        lobbyLeaderboardRows: Cc((function() {
          const TT = {};
          for (const MT of vT.h.ids()) {
            var kT, cT, lT;
            TT[MT] = {
              colour: null !== (kT = vT.h.getSetting(MT, "colorInLobbyLeaderboard")) && void 0 !== kT ? kT : null,
              values: null !== (cT = vT.h.getSetting(MT, "lobbyLeaderboardValues")) && void 0 !== cT ? cT : null,
              tags: null !== (lT = vT.h.getSetting(MT, "lobbyLeaderboardTags")) && void 0 !== lT ? lT : null
            }
          }
          return TT
        }), {
          rereads: function(TT) {
            if ("roster" !== TT.kind) return "reset" === TT.kind;
            const {
              members: kT,
              settings: cT
            } = TT;
            return kT || cT.has("colorInLobbyLeaderboard") || cT.has("lobbyLeaderboardValues") || cT.has("lobbyLeaderboardTags")
          },
          followLocalId: !1
        })
      },
      vc = {
        cosmeticsUpdated: {
          watch: TT => (0, vT.e)((kT => {
            if ("cosmetics" !== kT.kind) return;
            const cT = (0, jT.d)();
            TT(kT.updates.map((TT => {
              let {
                Nc: kT,
                Qc: lT,
                Sc: MT
              } = TT;
              return {
                local: kT === cT,
                Qc: lT,
                Sc: MT
              }
            })))
          }))
        }
      };
    var tc = cT(2873),
      hc = cT(1741),
      Nc = cT(651),
      Qc = cT(40348);
    let Sc = !1,
      Dc = null;
    const ac = {
      setShopOpen(TT) {
        var kT;
        null === (kT = (0, OT.g)()) || void 0 === kT || kT.send(HT.b.ShopMenuChanged, (0, HT.K)(TT))
      },
      buyShopItem(TT) {
        var kT;
        let {
          categoryKey: cT,
          itemKey: lT,
          userInput: MT
        } = TT;
        null === (kT = (0, OT.g)()) || void 0 === kT || kT.send(HT.b.ItemBought, {
          categoryKey: cT,
          itemKey: lT,
          shopVersion: ST.b.get("_shopVersion"),
          userInput: MT
        })
      }
    };
    let Fc = !1;
    var rc = cT(4787);
    const Pc = Sk.s.LookFrozen | Sk.s.ClicksSuppressed;

    function wc(TT, kT) {
      var cT;
      null !== (cT = (0, OT.g)()) && void 0 !== cT && cT.send(TT, kT) || console.warn(`[bloxd-wasm-client] message ${TT} not sent: no live game or the core's command ring is full`)
    }(0, tT.m)(oT.tb, (TT => {
      const kT = (0, eT.e)(oT.tb, TT);
      void 0 !== kT && xT.k.nt("setDiscordReportKey", kT)
    }));
    const mc = {
      ignorePlayer(TT) {
        wc(HT.b.IgnoreUser, (0, HT.q)({
          XI: TT
        }))
      },
      reportPlayer(TT) {
        let {
          playerId: kT,
          chatMsgId: cT,
          dO: lT,
          details: MT
        } = TT;
        wc(HT.b.UserReport, (0, HT.$)({
          uO: kT,
          XO: cT,
          dO: lT,
          LO: MT
        }))
      },
      reportWorldCodeChat(TT) {
        let {
          chatMsgId: kT,
          dO: cT,
          details: lT
        } = TT;
        wc(HT.b.UserReport, (0, HT.$)({
          uO: "",
          XO: kT,
          dO: cT,
          LO: lT
        }))
      },
      requestDiscordReportKey(TT) {
        wc(HT.b.ReqDiscordReportKey, (0, HT.F)(TT))
      },
      reportLobbyOrGame(TT) {
        let {
          target: kT,
          dO: cT,
          details: lT
        } = TT;
        "customGame" === kT ? wc(HT.b.CustomGameReport, (0, HT.n)({
          dO: cT,
          LO: lT
        })) : wc(HT.b.LobbyReport, (0, HT.t)({
          dO: cT,
          LO: lT
        }))
      },
      updateMyCosmetic(TT) {
        wc(HT.b.UpdateMyCosmetic, (0, HT.Y)(TT))
      },
      holdEmoteWheel(TT) {
        !TT || ak ? (0, rc.h)(Pc, TT ? Pc : 0) : xT.k.nt("requestEmoteWheelHoldRelease")
      }
    };
    var bc = cT(40356),
      zc = cT(9447),
      Jc = cT(39388);
    const oc = [0, 0, 0],
      Hc = [0, 0, 0],
      ec = [0, 0, 0],
      Gc = {
        blockAtViewPoint(TT) {
          let {
            x: kT,
            y: cT
          } = TT;
          const lT = (0, OT.g)();
          if (null === lT || void 0 === lT || !lT.renderFrame.hasView) return null;
          const {
            renderFrame: MT,
            clientApi: KT,
            api: yT
          } = lT;
          let fT = 0;
          return (0, Jc.f)(((TT, kT, cT) => (fT = KT.getBlockId(TT, kT, cT), 0 !== fT)), MT.cameraPosition, (0, Jc.h)((TT => DT.A.viewProj(yT.apiView, 0, TT)), kT, cT, oc), Jc.b, Hc, ec) ? {
            pos: [Hc[0], Hc[1], Hc[2]],
            normal: [ec[0], ec[1], ec[2]],
            name: (0, zc.g)(fT)
          } : null
        }
      },
      Vc = {
        setBlockHighlight(TT) {
          var kT;
          null === (kT = (0, OT.g)()) || void 0 === kT || kT.setBlockHighlight(TT)
        }
      };
    var Ec = cT(1964),
      Zc = cT(40365),
      uc = cT(40369),
      Xc = cT(4472),
      dc = cT(4448),
      Lc = cT(40375),
      Rc = cT(3214),
      gc = cT(3222);
    let Uc = null,
      Yc = null;

    function Bc(TT) {
      const kT = TT.startsWith(gc.k),
        [cT, lT = cT, MT = cT] = (kT ? TT.slice(gc.k.length) : TT).split(gc.j);
      return {
        top: cT,
        left: lT,
        right: MT,
        half: kT
      }
    }

    function Wc(TT) {
      const kT = null === Uc ? void 0 : (0, Rc.e)(TT),
        cT = void 0 === kT ? 0 : Uc.codes[kT];
      return 0 === cT ? void 0 : Uc.pool[cT - 1]
    }
    var nc = cT(3210),
      pc = cT(4442),
      ic = cT(4465),
      qc = cT(40380),
      sc = cT(40389);
    const Tl = "item:";
    let kl = null,
      cl = null,
      ll = null,
      Ml = null,
      Kl = !1,
      Ol = !1;

    function yl() {
      return Ol || (Ol = !0, (0, ic.l)().then((TT => {
        TT && (0, Ec.b)()
      }))), ll ??= Promise.all([(0, nc.f)(), (Yc ??= cT.e(1).then((() => cT(42158))).then((TT => {
        let {
          BLOCK_FACE_RUNS: kT,
          BLOCK_FACES: cT,
          MAX_FACE_ITEM_ID: lT
        } = TT;
        Uc = {
          codes: (0, gc.D)(kT, lT + 1),
          pool: cT.split(gc.s).map(Bc)
        }
      }), (TT => {
        throw Yc = null, TT
      })), Yc), (0, sc.f)(), cT.e(189).then((() => cT(9384)))]).then((TT => {
        let [, , kT, cT] = TT;
        kT.followBundledTextures(), kl = kT, cl = cT, (0, Ec.b)()
      }), (TT => {
        ll = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", TT)
      })), ll
    }

    function fl(TT) {
      var kT, cT;
      return null !== (kT = null === (cT = (0, qc.g)()) || void 0 === cT ? void 0 : cT.textureUrl(TT)) && void 0 !== kT ? kT : kl.itemSpriteUrl(TT)
    }

    function xl(TT) {
      var kT, cT;
      return null !== (kT = null === (cT = (0, qc.g)()) || void 0 === cT ? void 0 : cT.textureUrl(TT)) && void 0 !== kT ? kT : kl.blockTextureUrl(TT)
    }

    function Il(TT) {
      var kT;
      return null !== (kT = (0, nc.d)(TT)) && void 0 !== kT ? kT : TT
    }

    function Al(TT, kT) {
      var cT, lT, MT;
      return null !== (cT = null !== (lT = null !== (MT = xl(TT)) && void 0 !== MT ? MT : null === kT || void 0 === kT ? void 0 : kT.rotated[TT]) && void 0 !== lT ? lT : null === kT || void 0 === kT ? void 0 : kT.animated[TT]) && void 0 !== cT ? cT : kl.notFoundUrl()
    }

    function Cl(TT) {
      return void 0 !== (0, Rc.e)(TT) ? TT : /^[1-9][0-9]*$/.test(TT) ? (0, Rc.i)(Number(TT)) : void 0
    }

    function jl(TT) {
      var kT;
      if (TT.startsWith(Tl)) {
        var cT;
        const kT = (0, nc.d)(TT.slice(5));
        return null !== (cT = void 0 === kT ? null : fl(kT)) && void 0 !== cT ? cT : kl.notFoundUrl()
      }
      return null !== (kT = kl.particleUrl(TT)) && void 0 !== kT ? kT : kl.notFoundUrl()
    }

    function vl(TT, kT) {
      return "StairsBlock" === TT ? TT : kT ? "SlabBlock" : "CubeBlock"
    }
    const tl = {
        async blockIcon(TT) {
          var kT;
          let {
            name: lT,
            size: MT,
            lineWidth: KT
          } = TT;
          await yl();
          const OT = null !== (kT = Cl(lT)) && void 0 !== kT ? kT : lT,
            yT = (0, ic.d)(OT, MT, KT);
          if (null !== yT) return yT;
          const fT = Wc(OT),
            xT = (0, Rc.e)(OT),
            IT = void 0 === xT || null === cl ? void 0 : cl.itemTypeNameOf(xT);
          if (null === kl || void 0 === fT) return "";
          const AT = [fT.top, fT.left, fT.right].some((TT => null === xl(TT))),
            CT = AT ? await (Ml ??= cT.e(201).then((() => cT(34029))).then((TT => (Kl && (Kl = !1, (0, Ec.b)()), {
              rotated: TT.rotatedBlockTextures,
              animated: TT.animatedBlockTextures
            })), (TT => (Ml = null, Kl = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", TT), null))), Ml) : null;
          if (AT && null === CT) return "";
          const jT = {
              top: Al(fT.top, CT),
              left: Al(fT.left, CT),
              right: Al(fT.right, CT),
              itemType: vl(IT, fT.half)
            },
            vT = (0, qc.d)(),
            tT = 0 === vT ? OT : `${OT}#${vT}`;
          return (await (0, pc.e)()).drawBlockIconUrl(tT, MT, KT, (() => jT))
        }
      },
      hl = {
        itemIcon: function(TT) {
          var kT, cT, MT, KT;
          if (null === kl) return yl(), lT.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(TT);
          if ((0, dc.k)(TT)) return {
            kind: "icon",
            url: null !== (cT = null !== (MT = null === (KT = (0, qc.g)()) || void 0 === KT ? void 0 : KT.textureUrl(TT)) && void 0 !== MT ? MT : kl.ingameIconUrl(TT)) && void 0 !== cT ? cT : kl.notFoundUrl()
          };
          if (TT.startsWith(dc.e)) return {
            kind: "icon",
            url: jl(TT.slice(dc.e.length))
          };
          if (0 === (0, Rc.k)()) return (0, Lc.c)(), lT.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(TT);
          const OT = null !== (kT = Cl(TT)) && void 0 !== kT ? kT : TT,
            yT = (0, Rc.e)(OT),
            fT = void 0 === yT ? void 0 : cl.itemTypeNameOf(yT);
          if (void 0 !== Wc(OT)) return {
            kind: "drawnBlock"
          };
          const xT = function(TT) {
            var kT;
            return null !== (kT = fl(Il(TT))) && void 0 !== kT ? kT : kl.notFoundUrl()
          }(OT);
          if ((0, ic.h)(OT) && ! function(TT) {
              const kT = (0, qc.g)();
              return null !== kT && (null !== kT.textureUrl(Il(TT)) || null !== kT.modelUrl(TT))
            }(OT)) return {
            kind: "model",
            url: xT
          };
          if ("Gun" === fT) return {
            kind: "gun",
            url: xT
          };
          if (void 0 !== yT && "GrayscaleArmour" === cl.itemTypeOf(yT) || Object.hasOwn(Xc.c, OT)) {
            var IT;
            const kT = null !== (IT = (0, Xc.f)(TT)) && void 0 !== IT ? IT : (0, Xc.f)(OT);
            if (kT) return {
              kind: "item",
              url: xT,
              tint: kT
            }
          }
          return {
            kind: "item",
            url: xT
          }
        },
        hasIcon: function(TT) {
          return void 0 !== Cl(TT) || (0, dc.k)(TT) || TT.startsWith(dc.e)
        },
        isItemName: function(TT) {
          return void 0 !== Cl(TT)
        }
      };
    var Nl = cT(606),
      Ql = cT(39393);

    function Sl(TT) {
      if (null === TT || void 0 === TT || !TT.isCoreRunning) return null;
      const {
        api: kT,
        chunks: cT,
        items: lT,
        tables: MT
      } = TT;
      return {
        playerFeet() {
          const TT = kT.kN(kT.localId);
          return null !== TT && void 0 !== TT && TT.every(Number.isFinite) ? TT : null
        },
        chunkBlocks: TT => cT.isLoaded(TT[0], TT[1], TT[2]) ? (TT, kT, lT) => cT.Rx(TT, kT, lT) : null,
        blockName: TT => MT.nameOfId(TT),
        inventory: () => ({
          slots: lT.playerItems().map((TT => TT ? {
            name: TT.name,
            amount: TT.amount
          } : null)),
          heldSlot: lT.selectedSlot
        }),
        nearby() {
          const cT = [];
          for (let MT = 0; MT < kT.idStr.length; MT++) {
            var lT;
            const KT = kT.idStr[MT],
              OT = kT.serverIds[MT],
              yT = kT.kinds[MT];
            if (null === KT || kT.isLocal(OT) || yT >>> DT.e !== DT.w.Lifeform) continue;
            const fT = kT.kN(OT),
              xT = Nl.i[yT & DT.i];
            fT && void 0 !== xT && cT.push({
              kind: "Player" === xT ? "player" : xT,
              name: null !== (lT = TT.clientApi.getEntityName(KT)) && void 0 !== lT ? lT : null,
              position: fT
            })
          }
          return cT
        },
        droppedItems() {
          let TT = 0;
          for (let cT = 0; cT < kT.idStr.length; cT++) null !== kT.idStr[cT] && kT.kinds[cT] >>> DT.e === DT.w.Item && TT++;
          return TT
        }
      }
    }
    const Dl = {
        worldCodeAiChunk: TT => Promise.resolve((0, Ql.d)(Sl((0, OT.g)()), TT)),
        worldCodeAiGameState: () => Promise.resolve((0, Ql.g)(Sl((0, OT.g)())))
      },
      al = function(TT) {
        const kT = Ic(),
          lT = Ic(),
          MT = new Set,
          KT = new Set,
          OT = () => {
            var kT, cT;
            return null !== (kT = null === (cT = TT.runtime()) || void 0 === cT ? void 0 : cT.currentViewer) && void 0 !== kT ? kT : null
          };
        let yT = null,
          fT = null;
        const IT = (TT, kT) => ({
            current: TT,
            watch(cT) {
              let lT = TT();
              return kT.add((() => {
                const kT = TT();
                kT !== lT && (lT = kT, cT(kT))
              }))
            }
          }),
          CT = TT => ({
            watch: kT => (TT.add(kT), () => {
              TT.delete(kT)
            })
          }),
          jT = TT => {
            const kT = OT(),
              cT = null === kT || void 0 === kT ? void 0 : kT.view;
            kT && cT && kT.seek(Math.max(0, Math.min(cT.totalTicks - 1, cT.UA + TT * AT.sd)))
          },
          vT = {
            replay: IT((() => {
              var TT;
              const kT = OT(),
                cT = null !== (TT = null === kT || void 0 === kT ? void 0 : kT.view) && void 0 !== TT ? TT : null;
              return null === kT || null === cT || cT.state === AT.kd.None ? (yT = null, null) : (yT = (0, iT.m)(yT, {
                id: kT.id,
                UA: cT.UA,
                totalTicks: cT.totalTicks,
                xJ: AT.sd,
                playing: cT.state === AT.kd.Playing,
                speed: cT.speed,
                cameraMode: cT.cameraMode,
                freecam: "freecam" === cT.cameraMode
              }), yT)
            }), kT),
            replayEdits: IT((() => {
              var TT;
              const kT = OT(),
                cT = null !== (TT = null === kT || void 0 === kT ? void 0 : kT.view) && void 0 !== TT ? TT : null;
              return null === kT || null === cT || cT.state === AT.kd.None ? (fT = null, null) : (fT = (0, iT.m)(fT, {
                cameraKeyframes: [...kT.keyframes],
                playbackMark: cT.mark,
                fileName: kT.fileName,
                unsavedChanges: kT.unsavedChanges,
                suggestSaveAs: kT.suggestSaveAs
              }), fT)
            }), kT),
            replayRecorder: IT((() => {
              var kT, cT;
              return null !== (kT = null === (cT = TT.runtime()) || void 0 === cT ? void 0 : cT.recorder.current) && void 0 !== kT ? kT : yc.b.states.replayRecorder.current()
            }), lT),
            replayVideoExporting: {
              current: Kc.e,
              watch: TT => (0, xT.m)("replayViewer|videoExportChanged", (() => {
                TT((0, Kc.e)())
              }))
            }
          },
          tT = {
            replayUiActionRequested: CT(KT),
            replayViewerRequested: CT(MT)
          },
          hT = TT => {
            for (const kT of MT) kT(TT)
          },
          NT = () => {
            var lT;
            !0 === (null === (lT = OT()) || void 0 === lT ? void 0 : lT.isOpen) && Promise.all([cT.e(95), cT.e(64)]).then((() => cT(42154))).then((cT => {
              let {
                startWasmReplayVideoExport: lT
              } = cT;
              return lT({
                viewer: OT,
                canvas: () => {
                  var kT, cT;
                  return null !== (kT = null === (cT = TT.canvas) || void 0 === cT ? void 0 : cT.call(TT)) && void 0 !== kT ? kT : null
                },
                watchViewer: kT.add,
                requestViewer: hT
              })
            }), (TT => {
              console.error("Couldn't load the video export", TT), Oc.NotificationProvider.showAlertPopup({
                title: "Video export failed",
                subtitle: "Check your connection, then try again."
              })
            })).catch((TT => {
              console.error("The video export failed", TT)
            }))
          },
          QT = {
            replayAction(TT) {
              if ((0, Kc.e)()) return;
              const kT = OT();
              switch (TT) {
                case "replaySkipBack":
                  jT(-1);
                  break;
                case "replaySkipForward":
                  jT(1);
                  break;
                case "replaySpeedUp":
                case "replaySpeedDown":
                  null !== kT && void 0 !== kT && kT.view && kT.setSpeed((0, Mc.j)(kT.view.speed, "replaySpeedUp" === TT ? "up" : "down"));
                  break;
                case "replayRecordKeyframe":
                  null === kT || void 0 === kT || kT.addKeyframe()
              }
            },
            setReplayPlaying(TT) {
              var kT, cT;
              (0, Kc.e)() || (TT ? null === (kT = OT()) || void 0 === kT || kT.play() : null === (cT = OT()) || void 0 === cT || cT.pause())
            },
            seekReplay(TT) {
              var kT;
              let {
                UA: cT,
                ignorePlaybackMark: lT
              } = TT;
              null === (kT = OT()) || void 0 === kT || kT.seek(cT, null !== lT && void 0 !== lT && lT)
            },
            setReplayCameraMode(TT) {
              var kT;
              null === (kT = OT()) || void 0 === kT || kT.setCameraMode(TT)
            },
            syncReplayCameraMode() {},
            setReplayCameraKeyframe(TT) {
              var kT;
              null === (kT = OT()) || void 0 === kT || kT.setKeyframe(TT)
            },
            moveReplayCameraKeyframe(TT) {
              var kT;
              let {
                from: cT,
                to: lT
              } = TT;
              null === (kT = OT()) || void 0 === kT || kT.moveKeyframe(cT, lT)
            },
            deleteReplayCameraKeyframes(TT) {
              var kT;
              let {
                start: cT,
                end: lT
              } = TT;
              null === (kT = OT()) || void 0 === kT || kT.deleteKeyframes(cT, lT)
            },
            setReplayPlaybackMark(TT) {
              var kT;
              null === (kT = OT()) || void 0 === kT || kT.setMark(TT)
            },
            cropReplay(TT) {
              var kT, cT;
              let {
                start: lT,
                end: MT
              } = TT;
              return !(0, Kc.e)() && (null !== (kT = null === (cT = OT()) || void 0 === cT ? void 0 : cT.crop(lT, MT)) && void 0 !== kT && kT)
            },
            holdReplayForShaderPackFailure(TT) {
              const kT = OT();
              kT && (kT.holdForShaderPackFailure(), function(TT) {
                cT.e(129).then((() => cT(39e3))).then((kT => {
                  let {
                    shaderPackPage: cT
                  } = kT;
                  cT.block(TT)
                })).catch((TT => {
                  console.warn("[bloxd-wasm-client] the shader pack could not be blocked", TT)
                }))
              }(TT))
            },
            exportReplayVideo() {
              NT()
            },
            toggleRecording() {
              var kT;
              null === (kT = TT.runtime()) || void 0 === kT || kT.recorder.toggleRecording()
            },
            saveClip() {
              var kT;
              null === (kT = TT.runtime()) || void 0 === kT || kT.recorder.saveClip()
            },
            setRecorderPrefs(kT) {
              var cT;
              let {
                clipping: lT,
                clipSeconds: MT
              } = kT;
              null === (cT = TT.runtime()) || void 0 === cT || cT.recorder.setPrefs(lT, MT)
            },
            setReplayViewerOpen(kT) {
              var cT;
              (0, hk.d)(kT) && (null === (cT = TT.runtime()) || void 0 === cT || cT.recorder.viewerShown(kT))
            },
            recordFlyingMiddleText(kT) {
              var cT;
              let {
                content: lT,
                jc: MT,
                angle: KT,
                vc: OT
              } = kT;
              null === (cT = TT.runtime()) || void 0 === cT || cT.recorder.recordFlyingText(JSON.stringify(lT), MT, KT, OT)
            },
            dragReplayCamera(kT) {
              var cT;
              let {
                dx: lT,
                dy: MT
              } = kT;
              null === (cT = TT.freecam()) || void 0 === cT || cT.drag(lT, MT)
            },
            moveReplayFreecam(kT) {
              var cT;
              null === (cT = TT.freecam()) || void 0 === cT || cT.move(kT)
            },
            holdReplayFreecamVertical(kT) {
              var cT;
              let {
                action: lT,
                ty: MT
              } = kT;
              null === (cT = TT.freecam()) || void 0 === cT || cT.holdVertical(lT, MT)
            }
          },
          ST = TT => {
            var kT;
            const cT = OT(),
              lT = null !== (kT = null === cT || void 0 === cT ? void 0 : cT.view) && void 0 !== kT ? kT : null;
            fc.has(TT) ? (TT => {
              for (const kT of KT) kT(TT)
            })(TT) : xc.has(TT) ? QT.replayAction(TT) : "replayPlayPause" === TT ? cT && lT && lT.state !== AT.kd.None && QT.setReplayPlaying(lT.state !== AT.kd.Playing) : "replayChangeCameraMode" === TT ? null === cT || void 0 === cT || cT.cycleCameraMode() : "replayExit" === TT ? !0 === (null === cT || void 0 === cT ? void 0 : cT.inPlayback) && (0, Vk.j)("/") : "replayExportVideo" === TT && NT()
          };
        let DT = !1;
        return {
          states: vT,
          events: tT,
          commands: QT,
          lookups: {
            replayCamera() {
              var kT, cT, lT;
              return !0 !== (null === (kT = OT()) || void 0 === kT ? void 0 : kT.isOpen) ? null : null !== (cT = null === (lT = TT.cameraView) || void 0 === lT ? void 0 : lT.call(TT)) && void 0 !== cT ? cT : null
            },
            leaveGameReloadsPage() {
              var TT;
              return !0 === (null === (TT = OT()) || void 0 === TT ? void 0 : TT.inPlayback)
            }
          },
          feed: {
            viewerChanged: () => {
              var TT;
              const cT = !0 === (null === (TT = OT()) || void 0 === TT ? void 0 : TT.inPlayback);
              cT !== DT && (DT = cT, xT.k.nt("connectedGameChanged")), kT.fire()
            },
            recorderChanged: lT.fire,
            keyDown: TT => {
              var kT;
              switch (TT) {
                case "recordGame":
                  return void QT.toggleRecording();
                case "recordClip":
                  return void((0, hk.b)() || QT.saveClip())
              }(0, Kc.e)() || ("replayViewerOpen" !== TT ? TT.startsWith("replay") && ((0, hk.b)() || !0 === (null === (kT = OT()) || void 0 === kT ? void 0 : kT.inPlayback)) && ST(TT) : hT("toggle"))
            }
          }
        }
      }({
        runtime: MT.h,
        cameraView: () => {
          var TT;
          const kT = null === (TT = (0, OT.g)()) || void 0 === TT ? void 0 : TT.renderFrame;
          if (!kT) return null;
          const [cT, lT, MT] = kT.cameraPosition, [KT, yT, fT] = kT.cameraDirection;
          return {
            position: [cT, lT, MT],
            direction: [KT, yT, fT]
          }
        },
        canvas: () => {
          var TT, kT, cT;
          return null !== (TT = null === (kT = (cT = (0, KT.G)()).canvas) || void 0 === kT ? void 0 : kT.call(cT)) && void 0 !== TT ? TT : null
        },
        freecam: MT.g
      }),
      Fl = {
        states: {
          ...xk,
          ...jk.n,
          ...al.states,
          ...jc,
          ...LT
        },
        events: {
          ...Ik,
          ...hT,
          ...jk.i,
          ...mT.c,
          ...bc.i,
          ...al.events,
          ...vc,
          ...wT.g
        },
        commands: {
          ...PT,
          ...Ak,
          ...NT,
          ...jk.e,
          ...ik,
          ...mc,
          ...wT.e,
          ...uk,
          ...al.commands,
          ...ac,
          ...RT,
          ...Vc,
          ...vk
        },
        queries: {
          ...jk.j,
          ...Dl
        },
        lookups: {
          ...Ck,
          ...VT,
          ...bc.j,
          ...al.lookups,
          ...rT,
          ...lc,
          ...Gc,
          ...gT
        }
      };

    function rl() {
      (0, yT.f)(tT.n), (0, MT.i)(al.feed), (0, mT.f)(), qk || (qk = !0, (0, tT.m)(oT.j, (TT => {
        const kT = (0, eT.e)(oT.j, TT);
        "string" === typeof kT && Promise.resolve().then((() => cT(3615))).then((TT => {
          let {
            onCosmeticPackGranted: cT
          } = TT;
          cT(kT)
        }))
      })), (0, tT.m)(oT.mb, (TT => {
        const kT = (0, eT.e)(oT.mb, TT);
        "number" === typeof kT && xT.k.nt("serverUpdating", Date.now() + kT, !0)
      })), (0, tT.m)(oT.H, (TT => {
        const kT = (0, eT.e)(oT.H, TT);
        if ((0, eT.b)(kT)) {
          const {
            tc: TT,
            hc: cT
          } = kT;
          (0, nk.e)({
            tc: "string" === typeof TT ? TT : null,
            hc: "string" === typeof cT ? cT : null
          })
        }
      })), (0, tT.m)(IT.Xb.NewUiRequest, (TT => {
        const kT = (0, eT.g)(TT);
        (0, eT.b)(kT) && "number" === typeof kT.id && (0, eT.b)(kT.clientParameters) && (0, pk.g)(kT.id, kT.clientParameters)
      })), (0, tT.m)(oT.eb, (TT => {
        const kT = (0, eT.e)(oT.eb, TT);
        "number" === typeof kT && (0, pk.h)(kT)
      })), (0, tT.l)(pk.d), (0, tT.m)(IT.Xb.UiRequestPopup, (TT => {
        const kT = (0, eT.g)(TT);
        if ((0, eT.b)(kT) && "number" === typeof kT.id && "string" === typeof kT.text) {
          const TT = kT.id;
          (0, pk.k)(TT, kT.text, (kT => {
            ik.answerUiRequest({
              id: TT,
              xI: kT
            })
          }))
        }
      })), (0, tT.m)(IT.Xb.TopRightHelper, (TT => {
        const kT = (0, eT.g)(TT);
        void 0 !== kT && xT.k.nt("TopRightHelper", kT, !0)
      })), (0, tT.m)(IT.Xb.TaskProgress, (TT => {
        const kT = (0, eT.g)(TT);
        (0, eT.b)(kT) && "string" === typeof kT.taskId && "number" === typeof kT.progress && (0, Wk.b)({
          taskId: kT.taskId,
          progress: kT.progress
        })
      }))), Fc || (Fc = !0, (0, tT.m)(oT.q, (TT => {
        const kT = (0, eT.e)(oT.q, TT);
        (0, eT.b)(kT) && xT.k.nt("showShopFromServer", {
          toggle: kT.Kk,
          Ok: kT.Ok
        }, !0)
      })), (0, tT.m)(IT.Xb.OverShopInfo, (TT => {
        const kT = (0, eT.g)(TT);
        (0, eT.b)(kT) && xT.k.nt("overShopInfo", kT.info, !0)
      })), (0, tT.m)(IT.Xb.ShowShopTutorial, (() => {
        xT.k.nt("showShopTutorial", null, !0)
      }))), Sc || (Sc = !0, (0, tT.h)((() => {
        var TT;
        (0, tc.E)(), null === (TT = Dc) || void 0 === TT || TT(), Dc = (0, tT.d)() ? (0, Nc.e)(tT.d) : null
      })), (0, tT.m)(IT.Xb.SetCookie, (TT => {
        const kT = (0, eT.g)(TT),
          cT = (0, Vk.b)().gameNameWithVariation;
        (0, eT.b)(kT) && "string" === typeof kT.key && null !== cT && (0, hc.setCookie)(cT, kT.key, kT.value)
      })), (0, tT.m)(IT.Xb.LeaveValues, (TT => {
        const kT = (0, eT.g)(TT);
        if ((0, eT.b)(kT) && "string" === typeof kT.leaveEventType) {
          const {
            leaveEventType: TT,
            category: cT,
            subCategory: lT,
            value: MT
          } = kT;
          (0, tc.K)({
            leaveEventType: TT,
            category: cT,
            subCategory: lT,
            value: MT
          })
        }
      })), (0, tT.m)(IT.Xb.CustomAnalyticsEvent, (TT => {
        const kT = (0, eT.g)(TT);
        if ((0, eT.b)(kT) && "string" === typeof kT.cat1) {
          const {
            cat1: TT,
            cat2: cT,
            cat3: lT,
            value: MT
          } = kT;
          (0, tc.n)({
            cat1: TT,
            cat2: cT,
            cat3: lT,
            value: MT
          })
        }
      })), (0, tT.m)(IT.Xb.ProgressionEvent, (TT => {
        const kT = (0, eT.g)(TT);
        if ((0, eT.b)(kT)) {
          const {
            type: TT,
            location1: cT,
            location2: lT,
            location3: MT,
            score: KT
          } = kT;
          (0, tc.v)({
            type: TT,
            location1: cT,
            location2: lT,
            location3: MT,
            score: KT
          })
        }
      })), (0, tT.m)(IT.Xb.ResourceEvent, (TT => {
        const kT = (0, eT.g)(TT);
        if ((0, eT.b)(kT)) {
          const {
            type: TT,
            resourceType: cT,
            amount: lT,
            category: MT,
            itemName: KT
          } = kT;
          (0, tc.y)({
            type: TT,
            resourceType: cT,
            amount: lT,
            category: MT,
            itemName: KT
          })
        }
      })), (0, tT.m)(IT.Xb.LeaderboardResponse, (TT => {
        const kT = (0, eT.g)(TT);
        if ((0, eT.b)(kT)) {
          const {
            category: TT,
            timeframe: cT,
            data: lT
          } = kT;
          xT.k.nt("leaderboardResponse", {
            category: TT,
            timeframe: cT,
            data: lT
          })
        }
      })), (0, tT.m)(oT.A, (TT => {
        const kT = (0, eT.e)(oT.A, TT);
        "string" === typeof kT && (0, Qc.e)(TT.conn, kT)
      })), (0, tT.m)(oT.D, (TT => {
        const kT = (0, eT.e)(oT.D, TT);
        "string" === typeof kT && console.error(`[logErrorToConsole]: ${kT}`)
      }))), ZT(), (0, bc.d)(), Zk || (Zk = !0, (0, tT.m)(oT.h, (TT => {
        const kT = (0, eT.e)(oT.h, TT);
        void 0 !== kT && (0, Ek.g)(kT)
      }))), Bk(), zk(), BT || (BT = !0, (0, KT.q)(WT)), lT.gameBridge.attach(Fl), (0, lT.installPageSources)({
        commands: {
          ...lT.DEFAULT_CLIENT_PAGE_SOURCES.commands,
          setChunkAddDistance: Zc.f
        },
        queries: tl,
        lookups: {
          ...lT.DEFAULT_CLIENT_PAGE_SOURCES.lookups,
          ...hl,
          fD: Zc.b,
          drawCallStats: uc.k
        }
      }), (0, Ec.b)(), yl()
    }
  },
  40380: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => IT,
      d: () => fT,
      g: () => yT,
      k: () => xT
    });
    var lT = cT(1964);
    let MT = null,
      KT = 0;
    const OT = new Set;

    function yT() {
      return MT
    }

    function fT() {
      return KT
    }

    function xT(TT) {
      MT = TT, KT++, (0, lT.b)();
      for (const kT of OT) kT()
    }

    function IT(TT) {
      OT.add(TT)
    }
  },
  40389: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => OT,
      f: () => yT
    });
    var lT = cT(40396);
    let MT = null,
      KT = null;

    function OT() {
      return MT ??= cT.e(59).then((() => cT(42161))).catch((TT => {
        throw MT = null, TT
      })), MT
    }

    function yT() {
      return KT ??= Promise.all([OT(), (0, lT.g)()]).then((TT => {
        let [kT] = TT;
        return kT
      }), (TT => {
        throw KT = null, TT
      })), KT
    }
  },
  36864: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => lT
    });
    const lT = {
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
  36693: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => MT,
      c: () => KT,
      g: () => CT,
      h: () => yT,
      l: () => fT,
      o: () => xT,
      s: () => AT,
      t: () => IT,
      w: () => OT
    });
    var lT = cT(1244);
    let MT = function(TT) {
        return TT[TT.Join = 0] = "Join", TT[TT.Leave = 1] = "Leave", TT[TT.Push = 2] = "Push", TT[TT.Cursor = 3] = "Cursor", TT[TT.Submit = 4] = "Submit", TT[TT.ReloadAsVariation = 5] = "ReloadAsVariation", TT[TT.CreateFile = 6] = "CreateFile", TT[TT.RenameFile = 7] = "RenameFile", TT[TT.DeleteFile = 8] = "DeleteFile", TT[TT.SetEngine = 9] = "SetEngine", TT[TT.RenameFolder = 10] = "RenameFolder", TT
      }({}),
      KT = function(TT) {
        return TT[TT.Joined = 0] = "Joined", TT[TT.Updates = 1] = "Updates", TT[TT.Presence = 2] = "Presence", TT[TT.RemoteCursor = 3] = "RemoteCursor", TT[TT.ForceClose = 4] = "ForceClose", TT[TT.LobbyFilesChanged = 5] = "LobbyFilesChanged", TT[TT.EngineSettings = 6] = "EngineSettings", TT
      }({});

    function OT(TT) {
      return "lobby" === TT.kind ? `lobby:${TT.path}` : `codeBlock:${TT.pos[0]},${TT.pos[1]},${TT.pos[2]}`
    }

    function yT(TT) {
      if ("lobby" === TT) return {
        kind: "lobby",
        path: lT.g
      };
      if (TT.startsWith("lobby:")) {
        const kT = TT.slice(6);
        return AT(kT) ? {
          kind: "lobby",
          path: kT
        } : null
      }
      const kT = TT.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return kT ? {
        kind: "codeBlock",
        pos: [parseInt(kT[1]), parseInt(kT[2]), parseInt(kT[3])]
      } : null
    }

    function fT(TT) {
      return TT.endsWith(".d.ts")
    }

    function xT(TT) {
      return TT.endsWith(".ts") && !fT(TT)
    }
    const IT = 64;

    function AT(TT) {
      if (!TT || TT !== TT.trim()) return !1;
      if (TT.length > IT) return !1;
      if (TT.startsWith("/") || TT.includes("\\") || TT.includes("\0")) return !1;
      if (!fT(TT) && !xT(TT) && ! function(TT) {
          return TT.endsWith(".js") && !TT.endsWith(".min.js") && !TT.endsWith(".bundle.js")
        }(TT)) return !1;
      const kT = TT.split("/");
      for (const cT of kT)
        if ("" === cT || "." === cT || ".." === cT) return !1;
      return !0
    }
    const CT = 14e3
  },
  38856: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => lT,
      e: () => MT
    });
    const lT = ["description", "label"];

    function MT(TT) {
      const kT = TT.type;
      return {
        type: kT,
        params: TT[kT]
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);