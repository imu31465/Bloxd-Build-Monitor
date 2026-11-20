export const id = 46;
export const ids = [46];
export const modules = {
  38964: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => vz,
      e: () => Xz,
      h: () => Wz
    });
    const Fz = 6e3;

    function Wz(zz, tz) {
      return [Math.floor(zz[0] / tz) * tz, Math.floor(zz[1] / tz) * tz, Math.floor(zz[2] / tz) * tz]
    }

    function Xz(zz) {
      const tz = (null !== zz && void 0 !== zz ? zz : "").match(/-?\d+(?:\.\d+)?/g);
      return tz && tz.length >= 3 ? [Number(tz[0]), Number(tz[1]), Number(tz[2])] : null
    }

    function Oz(zz, tz) {
      return zz === tz ? String(zz) : `${zz}-${tz}`
    }

    function oz(zz, tz, sz, Fz) {
      const Wz = [];
      let Xz = new Map;
      for (let Oz = zz[2]; Oz < zz[2] + tz; Oz++) {
        const oz = new Map;
        let vz = zz[0];
        for (; vz < zz[0] + tz;) {
          const Wz = Fz(vz, sz, Oz);
          let Uz = vz;
          for (; Uz + 1 < zz[0] + tz && Fz(Uz + 1, sz, Oz) === Wz;) Uz++;
          if (null !== Wz) {
            const zz = `${vz} ${Uz} ${Wz}`,
              tz = Xz.get(zz);
            tz ? (tz.z1 = Oz, Xz.delete(zz), oz.set(zz, tz)) : oz.set(zz, {
              x0: vz,
              x1: Uz,
              z0: Oz,
              z1: Oz,
              name: Wz
            })
          }
          vz = Uz + 1
        }
        Wz.push(...Xz.values()), Xz = oz
      }
      return Wz.push(...Xz.values()), Wz.sort(((zz, tz) => zz.z0 - tz.z0 || zz.x0 - tz.x0)).map((zz => `x${Oz(zz.x0,zz.x1)} z${Oz(zz.z0,zz.z1)} ${zz.name}`))
    }

    function vz(zz, tz, sz, Wz) {
      let Xz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Fz;
      const vz = [zz[0] + tz - 1, zz[1] + tz - 1, zz[2] + tz - 1],
        Uz = null !== Wz && Wz.every(((tz, sz) => Math.floor(tz) >= zz[sz] && Math.floor(tz) <= vz[sz])),
        Kz = [`The chunk from ${zz.join(" ")} to ${vz.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
      null !== Wz && Kz.push(`The player's feet are at ${Wz.map(Math.floor).join(" ")}, ${Uz?"in this chunk":"outside this chunk"}.`);
      const uz = [];
      for (let Fz = zz[1]; Fz <= vz[1]; Fz++) {
        const Wz = oz(zz, tz, Fz, sz).join("; "),
          Xz = uz[uz.length - 1];
        (null === Xz || void 0 === Xz ? void 0 : Xz.boxes) === Wz ? Xz.to = Fz : uz.push({
          from: Fz,
          to: Fz,
          boxes: Wz
        })
      }
      const Nz = uz.filter((zz => "" !== zz.boxes));
      0 === Nz.length && Kz.push("It is all air.");
      let bz = Kz.join("\n").length;
      for (const Fz of Nz) {
        const zz = `y${Oz(Fz.from,Fz.to)}: ${Fz.boxes}`;
        if (bz += zz.length + 1, bz > Xz) {
          Kz.push(`Cut short: the layers from y${Fz.from} up aren't shown, as there are too many blocks.`);
          break
        }
        Kz.push(zz)
      }
      return Kz.join("\n")
    }
  },
  8295: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Wz
    });
    var Fz = sz(30);

    function Wz() {
      return !Fz.b.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  36346: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Oz,
      d: () => Xz,
      h: () => Wz
    });
    const Fz = [.25, .5, 1, 2, 4, 8, 16];

    function Wz(zz, tz) {
      const sz = Fz;
      let Wz = sz.indexOf(zz);
      return -1 === Wz && (Wz = sz.findIndex((tz => tz >= zz)), -1 === Wz && (Wz = sz.length - 1)), "up" === tz ? sz[Math.min(Wz + 1, sz.length - 1)] : sz[Math.max(Wz - 1, 0)]
    }

    function Xz(zz) {
      return zz <= Fz[0]
    }

    function Oz(zz) {
      return zz >= Fz[Fz.length - 1]
    }
  },
  35983: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Wz,
      i: () => Xz
    });
    let Fz = !1;

    function Wz() {
      return Fz
    }

    function Xz(zz) {
      return Fz !== zz && (Fz = zz, !0)
    }
  },
  38372: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Xz
    });
    var Fz = sz(34),
      Wz = sz(1884);

    function Xz(zz) {
      let {
        taskId: tz,
        progress: sz
      } = zz;
      const Fz = Wz.e.get("_tasks");
      null !== Fz && void 0 !== Fz && Fz[tz] && Wz.e.apply({
        _tasks: {
          ...Fz,
          [tz]: {
            ...Fz[tz],
            progress: sz
          }
        }
      })
    }
    Fz.o.subscribe("clientTaskProgress", (zz => {
      Xz(zz)
    }))
  },
  38942: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Nz,
      f: () => wz,
      i: () => Uz,
      k: () => uz,
      l: () => vz,
      p: () => Oz,
      r: () => Kz,
      t: () => Dz
    });
    var Fz = sz(1884),
      Wz = sz(34),
      Xz = sz(1896);
    const Oz = (0, Xz.g)((function() {
        var zz, tz, sz, Wz;
        return {
          health: null !== (zz = Fz.e.get("_health")) && void 0 !== zz ? zz : null,
          maxHealth: null !== (tz = Fz.e.get("_totalMaxHealth")) && void 0 !== tz ? tz : null,
          shield: null !== (sz = Fz.e.get("_shield")) && void 0 !== sz ? sz : null,
          maxShield: null !== (Wz = Fz.e.get("maxShield")) && void 0 !== Wz ? Wz : null
        }
      }), [], (0, Xz.f)("_health", "_totalMaxHealth", "_shield", "maxShield")),
      oz = [{
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

    function vz(zz, tz) {
      return oz[(zz ? 2 : 0) + (tz ? 1 : 0)]
    }
    const Uz = (0, Xz.g)((function() {
      var zz;
      return null !== (zz = Fz.e.get("_aura")) && void 0 !== zz ? zz : null
    }), [], (0, Xz.f)("_aura"));

    function Kz(zz) {
      return {
        watch: tz => (0, Wz.q)("shotPlayer", (sz => {
          let {
            playerId: Fz,
            damage: Wz,
            wasCrit: Xz,
            distance: Oz
          } = sz;
          zz(Fz) && tz({
            damage: Wz,
            wasCrit: Xz,
            distance: Oz
          })
        }))
      }
    }

    function uz(zz) {
      return (0, Xz.b)("chat", (tz => {
        let {
          serverChatMsgId: sz,
          content: Fz,
          chatterEId: Wz
        } = tz;
        return {
          serverChatMsgId: null !== sz && void 0 !== sz ? sz : null,
          content: Fz,
          author: Wz ? zz(Wz) : null
        }
      }))
    }
    class Nz {
      constructor() {
        this.shown = null, this.needed = null, this.neededSince = 0
      }
      update(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const sz = this.shown;
        return zz !== this.needed && (this.needed = zz, this.neededSince = tz, null === zz && (this.shown = null)), this.shown !== this.needed && tz - this.neededSince > 200 && (this.shown = this.needed), this.shown !== sz
      }
    }

    function bz(zz) {
      return [{
        translationKey: `touchKeys:${zz}`
      }]
    }
    const wz = {
      open: bz("open"),
      close: bz("close"),
      milk: bz("milk"),
      shear: bz("shear"),
      tame: bz("tame"),
      feed: bz("feed"),
      ride: bz("ride")
    };

    function Dz(zz) {
      return [{
        translationKey: "touchKeys:tameWith"
      }, " ", {
        icon: zz
      }]
    }
  },
  39867: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => oz,
      e: () => Oz
    });
    var Fz = sz(2970);
    let Wz = null,
      Xz = null;

    function Oz() {
      return Xz ??= sz.e(208).then((() => sz(35839))).then((zz => {
        let {
          ITEM_SPRITES: tz,
          ITEM_SPRITES_WITHOUT_FILE: sz,
          ITEM_FILES_WITHOUT_SPRITE: Xz
        } = zz;
        Wz = function(zz, tz, sz) {
          const Wz = new Set,
            Xz = (0, Fz.t)(tz);
          let Oz = 0;
          for (const [Fz, oz] of zz.entries()) Fz === Xz[Oz] ? Oz++ : Wz.add(oz);
          if ("" !== sz)
            for (const oz of sz.split(Fz.o)) Wz.add(oz);
          return Wz
        }(tz.split(Fz.o), sz, Xz)
      }), (zz => {
        throw Xz = null, zz
      })), Xz
    }

    function oz(zz) {
      var tz, sz;
      return null !== (tz = null === (sz = Wz) || void 0 === sz ? void 0 : sz.has(zz)) && void 0 !== tz && tz
    }
  },
  38954: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Fz,
      d: () => Xz,
      h: () => Wz
    });
    const Fz = 128;

    function Wz(zz, tz, sz, Fz) {
      const Wz = 2 * tz - 1,
        Xz = 1 - 2 * sz,
        Oz = zz(0) - Wz * zz(3),
        oz = zz(4) - Wz * zz(7),
        vz = zz(8) - Wz * zz(11),
        Uz = zz(1) - Xz * zz(3),
        Kz = zz(5) - Xz * zz(7),
        uz = zz(9) - Xz * zz(11);
      Fz[0] = oz * uz - vz * Kz, Fz[1] = vz * Uz - Oz * uz, Fz[2] = Oz * Kz - oz * Uz;
      const Nz = Fz[0] * zz(3) + Fz[1] * zz(7) + Fz[2] * zz(11) < 0 ? -1 : 1,
        bz = Math.hypot(Fz[0], Fz[1], Fz[2]) * Nz;
      return Fz[0] /= bz, Fz[1] /= bz, Fz[2] /= bz, Fz
    }

    function Xz(zz, tz, sz, Fz, Wz, Xz) {
      const Oz = [Math.floor(tz[0]), Math.floor(tz[1]), Math.floor(tz[2])],
        oz = [0, 0, 0],
        vz = [1 / 0, 1 / 0, 1 / 0],
        Uz = [1 / 0, 1 / 0, 1 / 0];
      for (let Nz = 0; Nz < 3; Nz++) oz[Nz] = Math.sign(sz[Nz]), 0 !== oz[Nz] && (Uz[Nz] = Math.abs(1 / sz[Nz]), vz[Nz] = (Oz[Nz] + (oz[Nz] > 0 ? 1 : 0) - tz[Nz]) / sz[Nz]);
      let Kz = 0,
        uz = Math.abs(sz[0]) > Math.abs(sz[1]) ? 0 : 1;
      for (Math.abs(sz[2]) > Math.abs(sz[uz]) && (uz = 2); Kz <= Fz;) {
        if (zz(Oz[0], Oz[1], Oz[2])) return Wz[0] = Oz[0], Wz[1] = Oz[1], Wz[2] = Oz[2], Xz[0] = 0, Xz[1] = 0, Xz[2] = 0, Xz[uz] = -oz[uz], !0;
        uz = vz[0] < vz[1] ? 0 : 1, vz[2] < vz[uz] && (uz = 2), Kz = vz[uz], Oz[uz] += oz[uz], vz[uz] += Uz[uz]
      }
      return !1
    }
  },
  38935: (zz, tz, sz) => {
    function Fz(zz, tz, sz) {
      return Math.hypot(zz[0] - tz[0], zz[1] - tz[1], zz[2] - tz[2]) < sz + .5
    }
    sz.d(tz, {
      d: () => Fz
    })
  },
  38391: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Kz
    });
    var Fz = sz(1213),
      Wz = sz(1297),
      Xz = sz(30),
      Oz = sz(1287),
      oz = sz(1293),
      vz = sz(1483),
      Uz = sz(35970);

    function Kz(zz) {
      let {
        zz: tz,
        tz: sz
      } = zz;
      const Kz = null !== tz && void 0 !== tz ? tz : (0, oz.d)().gameNameWithVariation;
      (0, Fz.K)(Kz) && ((0, Uz.j)(), (0, Oz.ib)((() => {
        console.log("Received matchmaking order from game server to game", tz), (0, Xz.e)("inGameReplay"), (0, vz.navigatePreserveSearch)((0, Wz.c)(Kz, null !== sz && void 0 !== sz ? sz : void 0))
      }), "video_start"))
    }
  },
  38571: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Xz
    });
    var Fz = sz(34),
      Wz = sz(1910);

    function Xz(zz) {
      var tz, sz;
      const Xz = (0, Wz.r)(null !== (tz = null === (sz = Wz.x.toggleFreeCam) || void 0 === sz ? void 0 : sz[0]) && void 0 !== tz ? tz : null);
      Fz.o.Yg("showBottomMessage", {
        message: `Free Camera ${zz?"Enabled":"Disabled"}${Xz?` - Press ${Xz} to toggle`:""}`,
        timeoutLength: 2e3,
        type: "Warning"
      })
    }
  },
  38379: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => vz,
      f: () => Oz,
      h: () => oz,
      i: () => Uz
    });
    var Fz = sz(34),
      Wz = sz(1319);
    const Xz = new Map;

    function Oz(zz, tz) {
      Fz.o.Yg("newUiRequest", {
        id: zz,
        clientParameters: tz
      }, !0)
    }

    function oz(zz) {
      Fz.o.Yg("removeUiRequest", zz, !0);
      const tz = Xz.get(zz);
      tz && (tz.tearDownNotification(), Xz.delete(zz))
    }

    function vz() {
      Fz.o.Yg("clearUiRequests");
      for (const zz of Xz.values()) zz.tearDownNotification();
      Xz.clear()
    }

    function Uz(zz, tz, sz) {
      const Fz = Wz.NotificationProvider.showPromptPopup({
        title: tz,
        confirmText: "general:yes",
        cancelText: "general:no",
        unlockPointerKey: "uiRequestPopup"
      });
      Xz.set(zz, Fz), Fz.getResult().then((tz => {
        Xz.delete(zz), "notificationTornDown" !== tz && sz(tz)
      }))
    }
  },
  38962: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => uz,
      g: () => Nz
    });
    var Fz = sz(201),
      Wz = sz(38964);
    const Xz = 20;

    function Oz(zz) {
      return zz.map(Math.floor).join(" ")
    }

    function oz(zz) {
      return null === zz.amount || 1 === zz.amount ? zz.name : `${zz.amount} ${zz.name}`
    }
    var vz = sz(38973),
      Uz = sz(1884),
      Kz = sz(1293);

    function uz(zz, tz) {
      if (!zz) return vz.c;
      const sz = zz.playerFeet();
      if (!sz) return "The player isn't in the world yet, so no blocks can be seen.";
      const Xz = Fz.d.pw,
        Oz = (0, Wz.h)(null !== tz && void 0 !== tz ? tz : sz, Xz),
        oz = zz.chunkBlocks(Oz);
      return oz ? (0, Wz.b)(Oz, Xz, ((tz, sz, Fz) => {
        const Wz = oz(tz, sz, Fz);
        return 0 === Wz ? null : zz.blockName(Wz).split("|")[0]
      }), sz) : `The chunk from ${Oz.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${sz.map(Math.floor).join(" ")}.`
    }

    function Nz(zz) {
      var tz, sz, Fz;
      if (!zz) return vz.d;
      const Wz = zz.playerFeet();
      if (!Wz) return "The player isn't in the world yet, so nothing in it can be seen.";
      const {
        slots: uz,
        heldSlot: Nz
      } = zz.inventory();
      return function(zz) {
        const tz = [];
        null !== zz.game && tz.push(`Game: ${zz.game}.`);
        const sz = null === zz.health ? "" : `, health ${Math.round(zz.health)}${null===zz.maxHealth?"":` of ${Math.round(zz.maxHealth)}`}`;
        tz.push(`The player (the creator) stands at ${Oz(zz.position)}${sz}, ${zz.creative?"in":"not in"} creative mode.`);
        const Fz = zz.slots[zz.heldSlot];
        tz.push(Fz ? `Holding (slot ${zz.heldSlot}): ${oz(Fz)}.` : `Holding nothing (slot ${zz.heldSlot} is empty).`);
        const Wz = zz.slots.flatMap(((zz, tz) => zz ? [`slot ${tz}: ${oz(zz)}`] : []));
        tz.push(Wz.length > 0 ? `Inventory: ${Wz.join(", ")}.` : "Inventory: empty.");
        const vz = tz => Math.hypot(tz.position[0] - zz.position[0], tz.position[1] - zz.position[1], tz.position[2] - zz.position[2]),
          Uz = [...zz.nearby].sort(((zz, tz) => vz(zz) - vz(tz)));
        if (0 === Uz.length) tz.push("No other players or mobs are near enough to see.");
        else {
          tz.push("Near them, nearest first:");
          for (const zz of Uz.slice(0, Xz)) {
            const sz = "player" === zz.kind ? `player "${zz.name||"?"}"` : zz.name && zz.name !== zz.kind ? `${zz.kind} "${zz.name}"` : zz.kind,
              Fz = Math.round(vz(zz));
            tz.push(`- ${sz} at ${Oz(zz.position)}, ${Fz} block${1===Fz?"":"s"} away`)
          }
          Uz.length > Xz && tz.push(`- and ${Uz.length-Xz} more further away`)
        }
        return zz.droppedItems > 0 && tz.push(`${zz.droppedItems} dropped item${1===zz.droppedItems?" is":"s are"} on the ground nearby.`), tz.join("\n")
      }({
        game: null !== (tz = (0, Kz.d)().gameNameWithVariation) && void 0 !== tz ? tz : null,
        position: Wz,
        health: null !== (sz = Uz.e.get("_health")) && void 0 !== sz ? sz : null,
        maxHealth: null !== (Fz = Uz.e.get("_totalMaxHealth")) && void 0 !== Fz ? Fz : null,
        creative: !0 === Uz.e.get("creative"),
        heldSlot: Nz,
        slots: uz,
        nearby: zz.nearby(),
        droppedItems: zz.droppedItems()
      })
    }
  },
  38402: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => oz,
      g: () => vz,
      i: () => Uz
    });
    var Fz = sz(1213),
      Wz = sz(991),
      Xz = sz(36283),
      Oz = sz(34);

    function oz(zz) {
      let {
        lobbyName: tz,
        gameNameWithVariation: sz
      } = zz;
      return !(0, Fz.L)(tz) || null !== sz && (sz.startsWith("testGym") || (0, Wz.n)(sz))
    }

    function vz(zz) {
      return zz.Yt === Xz.e.Leave || zz.Yt === Xz.e.Cursor
    }

    function Uz(zz) {
      Oz.o.Yg("codeCollab", {
        type: zz.Yt,
        docKey: zz.xt,
        version: zz.Jt,
        editorCount: zz.Ct,
        peers: zz.et,
        updates: zz.Zt,
        playerId: zz.Gt,
        playerName: zz.Tt,
        colour: zz.ct,
        anchor: zz.jt,
        head: zz.yt,
        existingCursors: zz.Mt,
        files: zz.dt,
        engineSettings: zz.Qt
      })
    }
  },
  39822: (zz, tz, sz) => {
    sz.d(tz, {
      A: () => Tz,
      E: () => Az,
      F: () => jz,
      J: () => Rz,
      K: () => Mz,
      N: () => Gz,
      O: () => yz,
      P: () => Zz,
      Q: () => nz,
      S: () => lz,
      V: () => cz,
      e: () => az,
      i: () => hz,
      m: () => Cz,
      o: () => qz,
      r: () => ez,
      t: () => Iz,
      x: () => dz
    });
    var Fz = sz(1358),
      Wz = sz(34),
      Xz = sz(1269),
      Oz = sz(2273),
      oz = sz(4450),
      vz = sz(4419);
    let Uz, Kz = !1,
      uz = !1,
      Nz = !1,
      bz = !1;
    const wz = 1300,
      Dz = 3e3;
    let gz = 0,
      Hz = !1,
      Bz = !1,
      Pz = 0;
    const rz = 2;
    let Yz = !1,
      xz = !1;
    const mz = new Set,
      Jz = new Set;

    function Iz() {
      return Kz
    }

    function Cz() {
      return Bz
    }

    function ez() {
      return xz
    }

    function Zz() {
      return (0, Xz.o)() && !xz
    }

    function Gz(zz) {
      let tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (zz !== xz) {
        xz = zz;
        for (const zz of [...Jz]) zz(xz);
        tz && lz()
      }
    }

    function Tz(zz) {
      return Jz.add(zz), () => {
        Jz.delete(zz)
      }
    }

    function cz() {
      (0, oz.k)(Oz.x.Menu, (0, Xz.o)() ? 0 : Oz.x.Menu)
    }

    function jz() {
      Bz = !1, Pz = 0, cz(), lz()
    }

    function Az(zz) {
      return mz.add(zz), () => {
        mz.delete(zz)
      }
    }

    function yz(zz) {
      uz = !1, zz !== Kz && (Kz = zz, bz = !1, clearTimeout(Uz), Nz = !Kz && Yz, Kz ? (Hz = !1, Bz = !1, Pz = 0) : Zz() && !Yz && (Bz = !0), Yz = !1, Kz && !Zz() && Vz(), pz(), Nz && lz())
    }

    function Mz(zz) {
      zz !== Hz && (Hz = zz, zz || lz())
    }

    function dz() {
      uz = !1, bz || !0 !== iz() || (bz = !0, clearTimeout(Uz), Uz = setTimeout(Qz, wz))
    }

    function hz() {
      return (!uz || performance.now() - gz > Dz) && (uz = (0, vz.L)().lockPointer(), gz = performance.now()), uz
    }

    function Qz() {
      kz() && Lz() && hz()
    }

    function kz() {
      return Zz() && !Kz && !Hz && !(0, Fz.c)()
    }

    function iz() {
      var zz;
      return "undefined" === typeof navigator || null === (zz = navigator.userActivation) || void 0 === zz ? void 0 : zz.isActive
    }

    function Lz() {
      return Nz && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== iz()
    }

    function lz() {
      Zz() ? kz() && !Bz && Lz() && hz() : Kz && !Yz && Vz()
    }

    function nz() {
      Bz ? navigator.vendor.startsWith("Apple") ? Sz() : Pz = rz : lz()
    }

    function az() {
      Pz > 0 && 0 === --Pz && Sz()
    }

    function qz() {
      Pz = 0
    }

    function Sz() {
      kz() && !0 === iz() && hz()
    }

    function Vz() {
      Yz = !0, (0, vz.L)().unlockPointer()
    }

    function Rz() {
      uz = !1, Nz = !1, bz = !1, clearTimeout(Uz), Hz = !1, Bz = !1, Pz = 0, Yz = !1;
      const zz = Kz;
      Kz = !1, zz && pz()
    }

    function pz() {
      for (const zz of [...mz]) zz(Kz);
      Wz.o.Yg("pointerLockUpdate", Kz)
    }
  },
  39808: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Nz,
      f: () => oz,
      g: () => uz,
      j: () => Uz,
      m: () => Oz,
      n: () => Kz,
      o: () => vz
    });
    let Fz = null,
      Wz = null,
      Xz = null;

    function Oz(zz) {
      Fz = zz
    }

    function oz() {
      return Fz
    }

    function vz(zz) {
      Wz = zz
    }

    function Uz() {
      return Wz
    }

    function Kz(zz) {
      Xz = zz
    }

    function uz() {
      return Xz
    }

    function Nz() {
      var zz, tz;
      return !0 === (null === (zz = Wz) || void 0 === zz || null === (tz = zz.currentViewer) || void 0 === tz ? void 0 : tz.inPlayback)
    }
  },
  39851: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Oz,
      i: () => Xz,
      k: () => oz
    });
    var Fz = sz(39714),
      Wz = sz(39720);

    function Xz(zz) {
      if (zz.queries.drawCensus() < Fz.xb.BYTES) return null;
      const tz = zz.memoryData(zz.scratch(), Fz.xb.BYTES, 4, "the draw census");
      return null === tz ? null : {
        terrainOpaque: Fz.xb.terrainOpaque(tz, 0),
        terrainTransparent: Fz.xb.terrainTransparent(tz, 0),
        terrainPack: Fz.xb.terrainPack(tz, 0),
        earthSky: Fz.xb.earthSky(tz, 0),
        skyMeshes: Fz.xb.skyMeshes(tz, 0),
        regular: Fz.xb.regular(tz, 0),
        thin: Fz.xb.thin(tz, 0),
        line: Fz.xb.line(tz, 0),
        text: Fz.xb.text(tz, 0),
        particles: Fz.xb.particles(tz, 0)
      }
    }

    function Oz(zz) {
      const {
        terrainOpaque: tz,
        terrainTransparent: sz,
        earthSky: Fz,
        skyMeshes: Wz,
        regular: Xz,
        thin: Oz,
        line: oz,
        text: vz,
        particles: Uz
      } = zz;
      return tz + sz + Fz + Wz + Xz + Oz + oz + vz + Uz
    }

    function oz() {
      const zz = (0, Wz.f)();
      return !0 === (null === zz || void 0 === zz ? void 0 : zz.isCoreRunning) ? function(zz) {
        const tz = Xz(zz);
        if (null === tz) return [];
        const {
          terrainOpaque: sz,
          terrainTransparent: Fz,
          terrainPack: Wz,
          earthSky: oz,
          skyMeshes: vz,
          regular: Uz,
          thin: Kz,
          line: uz,
          text: Nz,
          particles: bz
        } = tz;
        return [{
          label: "Drawn",
          value: `${Oz(tz)}`
        }, {
          label: "Terrain",
          value: `${sz} opaque / ${Fz} transparent (${Wz} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${Uz} / ${Kz}`
        }, {
          label: "Text / Lines",
          value: `${Nz} / ${uz}`
        }, {
          label: "Sky / Particles",
          value: `${oz+vz} / ${bz}`
        }]
      }(zz.api) : []
    }
  },
  39853: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      loadIcons: () => ez,
      setIconFileOverrides: () => Zz,
      wasmIconLookups: () => hz,
      wasmIconQueries: () => dz
    });
    var Fz = sz(4133),
      Wz = sz(4105),
      Xz = sz(39861),
      Oz = sz(1868),
      oz = sz(1857),
      vz = sz(2965),
      Uz = sz(2970);
    let Kz = null,
      uz = null;

    function Nz(zz) {
      const tz = zz.startsWith(Uz.k),
        [sz, Fz = sz, Wz = sz] = (tz ? zz.slice(Uz.k.length) : zz).split(Uz.j);
      return {
        top: sz,
        left: Fz,
        right: Wz,
        half: tz
      }
    }

    function bz(zz) {
      const tz = null === Kz ? void 0 : (0, vz.b)(zz),
        sz = void 0 === tz ? 0 : Kz.codes[tz];
      return 0 === sz ? void 0 : Kz.pool[sz - 1]
    }
    var wz = sz(2962),
      Dz = sz(4094),
      gz = sz(4126),
      Hz = sz(39864);
    const Bz = "item:";
    let Pz = null,
      rz = null,
      Yz = null,
      xz = null,
      mz = !1,
      Jz = !1,
      Iz = null,
      Cz = 0;

    function ez() {
      return Jz || (Jz = !0, (0, gz.h)().then((zz => {
        zz && (0, Oz.b)()
      }))), Yz ??= Promise.all([(0, wz.g)(), (uz ??= sz.e(1).then((() => sz(41694))).then((zz => {
        let {
          BLOCK_FACE_RUNS: tz,
          BLOCK_FACES: sz,
          MAX_FACE_ITEM_ID: Fz
        } = zz;
        Kz = {
          codes: (0, Uz.x)(tz, Fz + 1),
          pool: sz.split(Uz.o).map(Nz)
        }
      }), (zz => {
        throw uz = null, zz
      })), uz), (0, Hz.f)(), sz.e(189).then((() => sz(8866)))]).then((zz => {
        let [, , tz, sz] = zz;
        tz.followBundledTextures(), Pz = tz, rz = sz, (0, Oz.b)()
      }), (zz => {
        Yz = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", zz)
      })), Yz
    }

    function Zz(zz) {
      Iz = zz, Cz++, (0, Oz.b)()
    }

    function Gz(zz) {
      var tz, sz;
      return null !== (tz = null === (sz = Iz) || void 0 === sz ? void 0 : sz.itemSprite(zz)) && void 0 !== tz ? tz : Pz.itemSpriteUrl(zz)
    }

    function Tz(zz) {
      var tz, sz;
      return null !== (tz = null === (sz = Iz) || void 0 === sz ? void 0 : sz.blockTexture(zz)) && void 0 !== tz ? tz : Pz.blockTextureUrl(zz)
    }

    function cz(zz) {
      var tz;
      return null !== (tz = (0, wz.e)(zz)) && void 0 !== tz ? tz : zz
    }

    function jz(zz, tz) {
      var sz, Fz, Wz;
      return null !== (sz = null !== (Fz = null !== (Wz = Tz(zz)) && void 0 !== Wz ? Wz : null === tz || void 0 === tz ? void 0 : tz.rotated[zz]) && void 0 !== Fz ? Fz : null === tz || void 0 === tz ? void 0 : tz.animated[zz]) && void 0 !== sz ? sz : Pz.notFoundUrl()
    }

    function Az(zz) {
      return void 0 !== (0, vz.b)(zz) ? zz : /^[1-9][0-9]*$/.test(zz) ? (0, vz.d)(Number(zz)) : void 0
    }

    function yz(zz) {
      var tz;
      if (zz.startsWith(Bz)) {
        var sz;
        const tz = (0, wz.e)(zz.slice(5));
        return null !== (sz = void 0 === tz ? null : Gz(tz)) && void 0 !== sz ? sz : Pz.notFoundUrl()
      }
      return null !== (tz = Pz.particleUrl(zz)) && void 0 !== tz ? tz : Pz.notFoundUrl()
    }

    function Mz(zz, tz) {
      return "StairsBlock" === zz ? zz : tz ? "SlabBlock" : "CubeBlock"
    }
    const dz = {
        async blockIcon(zz) {
          var tz;
          let {
            name: Fz,
            size: Wz,
            lineWidth: Xz
          } = zz;
          await ez();
          const oz = null !== (tz = Az(Fz)) && void 0 !== tz ? tz : Fz,
            Uz = (0, gz.b)(oz, Wz, Xz);
          if (null !== Uz) return Uz;
          const Kz = bz(oz),
            uz = (0, vz.b)(oz),
            Nz = void 0 === uz || null === rz ? void 0 : rz.itemTypeNameOf(uz);
          if (null === Pz || void 0 === Kz) return "";
          const wz = [Kz.top, Kz.left, Kz.right].some((zz => null === Tz(zz))),
            Hz = wz ? await (xz ??= sz.e(201).then((() => sz(33845))).then((zz => (mz && (mz = !1, (0, Oz.b)()), {
              rotated: zz.rotatedBlockTextures,
              animated: zz.animatedBlockTextures
            })), (zz => (xz = null, mz = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", zz), null))), xz) : null;
          if (wz && null === Hz) return "";
          const Bz = {
              top: jz(Kz.top, Hz),
              left: jz(Kz.left, Hz),
              right: jz(Kz.right, Hz),
              itemType: Mz(Nz, Kz.half)
            },
            Yz = 0 === Cz ? oz : `${oz}#${Cz}`;
          return (await (0, Dz.d)()).drawBlockIconUrl(Yz, Wz, Xz, (() => Bz))
        }
      },
      hz = {
        itemIcon: function(zz) {
          var tz, sz;
          if (null === Pz) return ez(), oz.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(zz);
          if ((0, Wz.h)(zz)) return {
            kind: "icon",
            url: null !== (sz = Pz.ingameIconUrl(zz)) && void 0 !== sz ? sz : Pz.notFoundUrl()
          };
          if (zz.startsWith(Wz.e)) return {
            kind: "icon",
            url: yz(zz.slice(Wz.e.length))
          };
          if (0 === (0, vz.h)()) return (0, Xz.d)(), oz.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(zz);
          const Oz = null !== (tz = Az(zz)) && void 0 !== tz ? tz : zz,
            Uz = (0, vz.b)(Oz),
            Kz = void 0 === Uz ? void 0 : rz.itemTypeNameOf(Uz);
          if (void 0 !== bz(Oz)) return {
            kind: "drawnBlock"
          };
          const uz = function(zz) {
            var tz;
            return null !== (tz = Gz(cz(zz))) && void 0 !== tz ? tz : Pz.notFoundUrl()
          }(Oz);
          if ((0, gz.e)(Oz) && ! function(zz) {
              return null !== Iz && (null !== Iz.itemSprite(cz(zz)) || null !== Iz.model(zz))
            }(Oz)) return {
            kind: "model",
            url: uz
          };
          if ("Gun" === Kz) return {
            kind: "gun",
            url: uz
          };
          if (void 0 !== Uz && "GrayscaleArmour" === rz.itemTypeOf(Uz) || Object.hasOwn(Fz.c, Oz)) {
            var Nz;
            const tz = null !== (Nz = (0, Fz.e)(zz)) && void 0 !== Nz ? Nz : (0, Fz.e)(Oz);
            if (tz) return {
              kind: "item",
              url: uz,
              tint: tz
            }
          }
          return {
            kind: "item",
            url: uz
          }
        },
        hasIcon: function(zz) {
          return void 0 !== Az(zz) || (0, Wz.h)(zz) || zz.startsWith(Wz.e)
        },
        isItemName: function(zz) {
          return void 0 !== Az(zz)
        }
      }
  },
  39803: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      attachPlayGameSources: () => qs,
      playGameSources: () => as
    });
    var Fz = sz(1857),
      Wz = sz(39808),
      Xz = sz(4419),
      Oz = sz(39720),
      oz = sz(39811),
      vz = sz(38942),
      Uz = sz(34),
      Kz = sz(4436),
      uz = sz(4432),
      Nz = sz(39754),
      bz = sz(39789),
      wz = sz(39816),
      Dz = sz(39765);
    (0, Dz.l)(Kz.fc.Chat, (zz => {
      if (zz.payloadKind !== uz.Wb.Msgpack) return;
      const tz = function(zz) {
        if (null === zz || "object" !== typeof zz || !("content" in zz)) return null;
        const {
          chatMsgId: tz,
          content: sz,
          chatterEId: Fz
        } = zz;
        return {
          serverChatMsgId: null !== tz && void 0 !== tz ? tz : void 0,
          content: sz,
          chatterEId: void 0 === Fz || null === Fz ? void 0 : String(Fz)
        }
      }((0, Nz.c)(zz.payload));
      null !== tz && Uz.o.Yg("chat", tz, !0)
    }));
    const gz = {
        chatReceived: (0, vz.k)((function(zz) {
          var tz, sz, Fz;
          return {
            id: zz,
            name: null !== (tz = wz.g.getName(zz)) && void 0 !== tz ? tz : null,
            local: (0, bz.g)() === zz,
            profileEffect: null !== (sz = null === (Fz = (0, wz.h)(zz)) || void 0 === Fz ? void 0 : Fz.profileEffect) && void 0 !== sz ? sz : null
          }
        }))
      },
      Hz = {
        sendChatMessage(zz) {
          var tz;
          let {
            RO: sz,
            channelName: Fz
          } = zz;
          null === (tz = (0, Oz.f)()) || void 0 === tz || tz.clientApi.sendChat(sz, Fz)
        }
      };
    var Bz = sz(201),
      Pz = sz(1884),
      rz = sz(39714),
      Yz = sz(38935);
    const xz = [0, 0, 0],
      mz = {
        codeBlockClickable(zz) {
          var tz;
          const sz = (0, Oz.f)();
          if (null === sz || void 0 === sz || !sz.isSessionLive) return !1;
          const Fz = sz.api;
          if (0 !== (rz.t.playerFlags(Fz.apiView, 0) & rz.Nd.Crouching)) return !1;
          const Wz = Fz.queries.directorEntity(Fz.localId) >= rz.qb.BYTES ? Fz.memoryData(Fz.scratch(), rz.qb.BYTES, 8, "the local player's DirectorEntity") : null;
          if (null === Wz) return !1;
          for (let Xz = 0; Xz < 3; Xz++) xz[Xz] = rz.qb.feet(Wz, 0, Xz);
          return xz[1] += rz.qb.eyeHeight(Wz, 0), (0, Yz.d)(xz, zz, null !== (tz = Pz.e.get("blockReach")) && void 0 !== tz ? tz : Bz.d.lH)
        }
      },
      Jz = {
        clickCodeBlock(zz) {
          var tz;
          null === (tz = (0, Oz.f)()) || void 0 === tz || tz.clickCodeBlock(zz)
        }
      };
    var Iz = sz(39729),
      Cz = sz(39818),
      ez = sz(991),
      Zz = sz(38450),
      Gz = sz(4411),
      Tz = sz(39740),
      cz = sz(39727),
      jz = sz(39748);

    function Az(zz) {
      if (null === zz) return null;
      const tz = [];
      for (const sz of zz) {
        const zz = Object.keys(sz)[0];
        if ("Qz" === zz) {
          const {
            str: zz,
            style: Fz,
            clickableUrl: Wz
          } = sz.Qz, Xz = Object.keys(zz)[0], Oz = zz[Xz];
          "string" !== Xz && "styledEntityName" !== Xz && "styledTranslatedText" !== Xz || tz.push({
            str: Oz,
            style: Fz,
            clickableUrl: Wz
          })
        } else tz.push(sz[zz])
      }
      return tz
    }
    const yz = {
      screenPos(zz) {
        var tz, sz;
        return null !== (tz = null === (sz = (0, Oz.f)()) || void 0 === sz ? void 0 : sz.renderFrame.projectWorldPosToScreenPos(zz)) && void 0 !== tz ? tz : {
          x: 0,
          y: 0
        }
      }
    };
    let Mz = !1;

    function dz() {
      Mz || (Mz = !0, (0, Dz.l)(Kz.fc.ProgressBarUpdate, (zz => {
        const tz = (0, jz.f)(zz);
        (0, jz.c)(tz) && Uz.o.Yg("progressBarUpdate", tz, !0)
      })), (0, Dz.l)(Tz.t, (zz => {
        const tz = (0, jz.d)(Tz.t, zz);
        tz && Uz.o.Yg("middleScreenBarInitiate", {
          duration: tz.cF,
          jF: tz.jF,
          horizBarRemOffset: tz.AF
        }, !0)
      })), (0, Dz.l)(Kz.fc.RemoveMiddleScreenBar, (() => {
        Uz.o.Yg("middleScreenBarRemove")
      })), (0, Dz.l)(Tz.bb, (zz => {
        const tz = (0, jz.d)(Tz.bb, zz);
        if (tz) {
          var sz;
          const zz = tz.Bs ? null === (sz = (0, Oz.f)()) || void 0 === sz ? void 0 : sz.renderFrame.projectDirectionToScreenPos(tz.Bs) : void 0;
          Uz.o.Yg("sendHitmarker", {
            Hs: tz.Hs,
            screenPos: zz
          }, !0)
        }
      })), (0, Dz.l)(Tz.gb, (zz => {
        const tz = (0, jz.d)(Tz.gb, zz);
        if (tz) {
          const {
            id: zz,
            position: sz,
            style: Fz,
            BX: Wz,
            rX: Xz
          } = tz;
          Uz.o.Yg("setDirectionArrow", {
            id: zz,
            position: sz,
            style: Fz,
            text: Az(Wz),
            rX: Xz
          }, !0)
        }
      })), (0, Dz.l)(Tz.f, (zz => {
        const tz = (0, jz.d)(Tz.f, zz);
        tz && Uz.o.Yg("clearDirectionArrow", {
          id: tz.id
        }, !0)
      })), (0, Dz.l)(Tz.m, (zz => {
        const tz = (0, jz.d)(Tz.m, zz);
        tz && Uz.o.Yg("flyingMiddleMessage", {
          content: Az(tz.RX),
          pX: tz.pX,
          fX: tz.fX
        }, !0)
      })), (0, Dz.l)(Kz.fc.WorldVariation, (zz => {
        const tz = (0, jz.f)(zz);
        if ("string" === typeof tz) {
          const zz = tz === ez.f ? null : {
            message: `Currently loaded as variation: ${tz}`,
            type: "Warning"
          };
          Uz.o.Yg("showPermanentBottomMessage", zz, !0)
        }
      })), (0, Dz.l)(Tz.G, (zz => {
        const tz = (0, jz.d)(Tz.G, zz);
        tz && function(zz, tz) {
          const {
            type: sz,
            params: Fz
          } = (0, Zz.f)(tz), Wz = {
            ...Fz
          };
          for (const Xz of Zz.e) Wz[Xz] && (Wz[Xz] = Az(Wz[Xz]));
          Gz.e.queueQTE(zz, sz, Wz).getResult().then((tz => {
            var sz;
            "boolean" === typeof tz && (null === (sz = (0, Oz.f)()) || void 0 === sz || sz.send(cz.d.QteResponse, {
              qteId: zz,
              qteResponse: tz
            }))
          }))
        }(tz.id, tz.Gz)
      })), (0, Dz.l)(Tz.W, (zz => {
        const tz = (0, jz.d)(Tz.W, zz);
        "number" === typeof tz && Gz.e.cancelQTE(tz)
      })), (0, Dz.g)((() => {
        Gz.e.reset(), Uz.o.Yg("showPermanentBottomMessage", null, !0)
      })), (0, Dz.k)((() => {
        Gz.e.reset()
      })), (0, Dz.l)(Kz.fc.EditItemCraftingRecipes, (zz => {
        const tz = (0, jz.f)(zz);
        (0, jz.c)(tz) && Uz.o.Yg("craftingRecipesEdited", {
          itemName: tz.craftingRecipeItemName,
          recipesForItem: tz.recipesForItem
        })
      })), (0, Dz.l)(Tz.S, (zz => {
        const tz = (0, jz.d)(Tz.S, zz);
        tz && Uz.o.Yg("craftingRecipesEdited", {
          itemName: tz.qW,
          recipesForItem: []
        })
      })))
    }
    var hz = sz(30);
    const Qz = [{
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

    function kz(zz) {
      return rz.t.playerFlags(zz.api.apiView, 0)
    }
    const iz = {
        freeCamera: (0, bz.e)((zz => () => {
          const tz = zz.isSessionLive && 0 !== (kz(zz) & rz.Nd.FreeCamMoves),
            sz = zz.freeCameraAllowed() && null === hz.b.get("scriptedCameraFacing");
          return Qz[(sz ? 2 : 0) + (tz ? 1 : 0)]
        }), Qz[0], (zz => (0, Xz.x)(zz)))
      },
      Lz = {
        setFreeCameraMovesFly: zz => {
          var tz;
          null === (tz = (0, Oz.f)()) || void 0 === tz || tz.setFreeCameraMovesFly(zz)
        }
      },
      lz = {
        freeCameraPos: () => {
          const zz = (0, Oz.f)();
          return null !== zz && void 0 !== zz && zz.isSessionLive && zz.renderFrame.hasView && 0 !== (kz(zz) & rz.Nd.FreeCam) ? zz.renderFrame.cameraPosition : null
        }
      };
    var nz = sz(38571);
    let az = !1,
      qz = !1;

    function Sz() {
      const zz = (0, Oz.f)();
      if (null === zz || void 0 === zz || !zz.isSessionLive) return void(az = !1);
      const tz = 0 !== (rz.t.playerFlags(zz.api.apiView, 0) & rz.Nd.FreeCam);
      tz !== az && (az = tz, (0, nz.d)(tz))
    }
    var Vz = sz(321),
      Rz = sz(36437),
      pz = sz(1896);
    var fz = sz(39820),
      Ez = sz(39780);
    const zt = {
      interactPrompt: null,
      blockText: null,
      neededTool: null
    };
    let tt = "off";

    function st(zz) {
      var tz;
      return null === zz ? null : {
        label: null !== (tz = (0, fz.d)(zz, "interactionPrompt")) && void 0 !== tz ? tz : null
      }
    }
    const Ft = new Map([
      [rz.wc.Open, {
        label: vz.f.open
      }],
      [rz.wc.Close, {
        label: vz.f.close
      }],
      [rz.wc.Milk, {
        label: vz.f.milk
      }],
      [rz.wc.Shear, {
        label: vz.f.shear
      }],
      [rz.wc.Tame, {
        label: vz.f.tame
      }],
      [rz.wc.Feed, {
        label: vz.f.feed
      }],
      [rz.wc.Ride, {
        label: vz.f.ride
      }]
    ]);
    class Wt {
      constructor() {
        this.target = zt, this.yK = rz.fd, this.optionName = null, this.pickaxe = new vz.d
      }
      read(zz) {
        var tz;
        const sz = rz.t.targetBlockId(zz.api.apiView, 0);
        sz !== this.yK && (this.yK = sz, this.optionName = sz === rz.fd ? null : `${zz.tables.getMetaInfo(sz).rootName}CrosshairText`);
        const Fz = null === this.optionName ? null : null !== (tz = zz.tables.getClientOption(this.optionName)) && void 0 !== tz ? tz : null;
        this.pickaxe.update(function(zz, tz) {
          var sz, Fz, Wz;
          if (0 === (rz.t.playerFlags(zz.api.apiView, 0) & rz.Nd.Breaking) || tz === rz.fd || 0 === tz) return null;
          const {
            tables: Xz
          } = zz;
          if (!0 === Xz.getClientOption("creative")) return null;
          const Oz = Xz.nameOfId(tz),
            oz = null === (sz = zz.items.po()) || void 0 === sz ? void 0 : sz.name,
            vz = null !== (Fz = Xz.getItemStat(Oz, "harvestLevel")) && void 0 !== Fz ? Fz : 0;
          return (0, Vz.wc)({
            blockHarvestType: Xz.getDefaultItemStat(Oz, "harvestType"),
            blockHarvestLevel: Xz.getDefaultItemStat(Oz, "harvestLevel"),
            harvestLevel: vz,
            heldToolType: void 0 === oz ? void 0 : Xz.getDefaultItemStat(oz, "harvests"),
            heldToolLevel: void 0 === oz ? void 0 : Xz.getDefaultItemStat(oz, "level")
          }) && null !== (Wz = Rz.q[vz]) && void 0 !== Wz ? Wz : null
        }(zz, sz)), zz.watchPromptPick(tt);
        const Wz = "touch" === tt ? function(zz) {
          var tz;
          const sz = zz.interactLabel;
          return sz === rz.wc.Entity ? st(zz.promptEntity) : sz === rz.wc.TameWith ? {
            label: (0, vz.t)(zz.tables.nameOfId(zz.interactIcon))
          } : null !== (tz = Ft.get(sz)) && void 0 !== tz ? tz : null
        }(zz) : st(zz.promptEntity);
        return this.target = (0, pz.j)(this.target, {
          interactPrompt: Wz,
          blockText: Fz,
          neededTool: this.pickaxe.shown
        }), this.target
      }
    }
    let Xt = null;
    const Ot = {
      current: () => {
        var zz, tz;
        return null !== (zz = null === (tz = Xt) || void 0 === tz ? void 0 : tz.target) && void 0 !== zz ? zz : zt
      },
      watch: zz => {
        const tz = new Wt;
        Xt = tz;
        const sz = (0, bz.i)((sz => {
          let Fz = tz.read(sz);
          zz(Fz);
          const Wz = (0, Xz.y)((() => {
            const Wz = tz.read(sz);
            Wz !== Fz && (Fz = Wz, zz(Wz))
          }));
          return () => {
            Wz(), sz.watchPromptPick("off")
          }
        }));
        return () => {
          sz(), Xt === tz && (Xt = null)
        }
      }
    };
    let ot = 0,
      vt = 0;
    const Ut = {
        health: vz.p,
        aura: vz.i,
        hotbar: Ez.e.states.hotbar,
        heldItemAim: Ez.e.states.heldItemAim,
        crouching: (0, bz.e)((zz => function(zz) {
          const tz = () => 0 !== (rz.t.playerFlags(zz.apiView, 0) & rz.Nd.Crouching);
          return {
            current: tz,
            watch(zz) {
              let sz = tz();
              return (0, Xz.x)((() => {
                const Fz = tz();
                Fz !== sz && (sz = Fz, zz(Fz))
              }))
            }
          }
        }(zz.api).current), !1, (zz => (0, Xz.x)(zz))),
        flight: (0, bz.e)((zz => () => function(zz) {
          const tz = rz.t.playerFlags(zz.apiView, 0);
          return (0, vz.l)(0 !== (tz & rz.Nd.CanFly), 0 !== (tz & rz.Nd.Flying))
        }(zz.api)), (0, vz.l)(!1, !1), (zz => (0, Xz.x)(zz))),
        gliderBoostFuel: (0, bz.e)((zz => () => rz.t.gliderBoostFuel(zz.api.apiView, 0)), 0, (zz => (0, Xz.x)(zz))),
        crosshairTarget: Ot
      },
      Kt = {
        hotbarSlotRequested: Ez.e.events.hotbarSlotRequested,
        hotbarScrolled: Ez.e.events.hotbarScrolled,
        numberKeyPressed: Ez.e.events.numberKeyPressed,
        shotDamageToShow: (0, vz.r)((zz => !0 === (0, fz.d)(zz, "showDamageAmounts")))
      },
      ut = {
        selectHotbarSlot: Ez.e.commands.selectHotbarSlot,
        setCrosshairInteractPrompt: zz => {
          tt = zz
        }
      },
      Nt = {
        momentumFrac: function() {
          var zz, tz, sz;
          const Fz = (0, Oz.f)(),
            Wz = performance.now(),
            Xz = null === Fz || void 0 === Fz || null === (zz = Fz.items.po()) || void 0 === zz || null === (tz = zz.attributes) || void 0 === tz || null === (sz = tz.customAttributes) || void 0 === sz ? void 0 : sz.enchantments;
          return ot = null !== Fz && null !== Xz && void 0 !== Xz && Xz.Momentum ? 0 !== (rz.t.playerFlags(Fz.api.apiView, 0) & rz.Nd.Breaking) ? Math.max(0, rz.t.momentumFrac(Fz.api.apiView, 0)) : Math.max(0, ot - (Wz - vt) / 1500) : 0, vt = Wz, ot
        }
      };
    var bt = sz(39716),
      wt = sz(1223),
      Dt = sz(35983),
      gt = sz(8295),
      Ht = sz(1571),
      Bt = sz(2273),
      Pt = sz(4438);
    let rt = !1;

    function Yt(zz) {
      rt = zz
    }

    function xt() {
      "inGame" !== hz.b.get("gameState") || (0, Ht.v)() || Uz.o.Yg("ctrlCrouchWithoutFullscreen")
    }
    let mt = !1;
    const Jt = {
        OpenEmoteWheel: () => {
          Yt(!0), mt = !0, queueMicrotask((() => {
            mt && (mt = !1, Uz.o.Yg("requestEmoteWheelHoldOpen"))
          }))
        },
        ToggleFullCoordinateOverlay: () => {
          Uz.o.Yg("toggleFullCoordinateOverlay")
        },
        KeyYPressed: () => {
          (0, Dt.e)() || Uz.o.Yg("YKeyPressed")
        },
        KeyXPressed: () => {
          (0, Dt.e)() || Uz.o.Yg("XKeyPressed")
        },
        CtrlCrouch: xt,
        "primary-fire": () => {
          Uz.o.Yg("mouseState", {
            lK: wt.c.DownFirePrimary,
            isDown: !0
          })
        },
        "alt-fire": () => {
          Uz.o.Yg("mouseState", {
            lK: wt.c.DownFireSecondary,
            isDown: !0
          })
        },
        TouchHold: () => {
          Uz.o.Yg("mouseState", {
            lK: wt.c.TouchDownLong,
            isDown: !0
          })
        }
      },
      It = {
        OpenEmoteWheel: () => {
          Yt(!1), mt ? (mt = !1, (0, gt.c)() || Uz.o.Yg("requestEmoteWheelHoldOpen")) : Uz.o.Yg("requestEmoteWheelHoldRelease")
        },
        CtrlCrouch: xt,
        "primary-fire": () => {
          Uz.o.Yg("mouseState", {
            lK: wt.c.UpFirePrimary,
            isDown: !1
          })
        },
        "alt-fire": () => {
          Uz.o.Yg("mouseState", {
            lK: wt.c.UpFireSecondary,
            isDown: !1
          })
        },
        TouchDig: () => {
          Uz.o.Yg("mouseState", {
            lK: wt.c.UpFirePrimary,
            isDown: !1
          })
        }
      };
    let Ct = !1;

    function et() {
      Ct || (Ct = !0, (0, Pt.k)((zz => {
        if ((0, Wz.c)()) return;
        const tz = (0, Pt.i)(zz) ? "primary-fire" : zz.action;
        var sz;
        if (zz.down) {
          if (0 === (zz.flags & Bt.b.Synthetic)) {
            var Fz;
            null === (Fz = Jt[tz]) || void 0 === Fz || Fz.call(Jt)
          }
        } else null === (sz = It[tz]) || void 0 === sz || sz.call(It)
      })))
    }
    var Zt = sz(308),
      Gt = sz(106),
      Tt = sz(44),
      ct = sz(39822),
      jt = sz(1293),
      At = sz(38402);
    let yt = !1;
    const Mt = {
      sendCodeCollab(zz) {
        var tz;
        null === (tz = (0, Oz.f)()) || void 0 === tz || tz.send(cz.d.CodeCollab, (0, cz.n)(zz), (0, At.g)(zz))
      }
    };
    let dt = null,
      ht = !1,
      Qt = null;

    function kt() {
      return "inGame" === hz.b.get("gameState") && !(0, Dt.e)()
    }
    const it = {
        OpenInventory: zz => {
          (0, Ht.y)(zz, "inventory", (0, bt.o)())
        },
        OpenShop: zz => {
          dt && kt() && (0, Ht.w)(zz, Zt.r.SHOP, !dt.shopIsEmpty(Pz.e.get("shopInfo")))
        },
        OpenLobbyLeaderboard: zz => {
          kt() && (0, Ht.w)(zz, Zt.r.LOBBY_LEADERBOARD, !!Pz.e.get("lobbyLeaderboardInfo"))
        },
        OpenTasksAndLeaderboard: zz => {
          var tz;
          const sz = null === (tz = dt) || void 0 === tz ? void 0 : tz.getClientGameMapKey();
          sz ? (0, Ht.z)(zz, !0, sz) : (0, Ht.y)(zz, "retentionFeatures", !(!Pz.e.get("_tasks") && !Pz.e.get("_availableLeaderboards")))
        },
        OpenInviteLink: zz => {
          (0, Ht.y)(zz, "inviteLink", Gt.featureFlags.canUseInviteLinks)
        },
        OpenCodeEditor: zz => {
          kt() && function(zz) {
            var tz;
            const sz = (0, Oz.f)(),
              Fz = null !== sz && void 0 !== sz && sz.isSessionLive ? sz.api : null,
              Wz = Fz ? Fz.yB(Fz.localId) : null,
              Xz = null !== (tz = null === Wz || void 0 === Wz ? void 0 : Wz.map((zz => Math.floor(zz)))) && void 0 !== tz ? tz : null;
            (0, Ht.z)(zz, null !== Xz && (0, At.c)((0, jt.d)()), (() => {
              Uz.o.Yg("EditLobbyCode", Xz)
            }))
          }(zz)
        },
        HideUi: () => {
          Uz.o.Yg("showUi", !1)
        }
      },
      Lt = {
        HideUi: () => {
          Uz.o.Yg("showUi", !0)
        }
      };

    function lt() {
      ht || (ht = !0, sz.e(151).then((() => sz(41676))).then((zz => {
        dt = zz
      }), (zz => {
        console.error("[bloxd-wasm-client] the menu keys' checks did not load", zz)
      })), (0, ct.E)((zz => {
        zz || !(0, ct.m)() || (0, Gt.isMobile)() || !Tt.f.getItem("disableFullscreen") || (0, Ht.r)() || hz.b.set({
          openEverythingMenuName: Zt.r.SETTINGS
        })
      })), (0, Pt.k)((zz => {
        let {
          action: tz,
          down: sz,
          press: Fz
        } = zz;
        var Xz, Oz;
        (0, Wz.c)() || (sz ? null === (Xz = it[tz]) || void 0 === Xz || Xz.call(it, function(zz) {
          var tz;
          if (0 === zz || (null === (tz = Qt) || void 0 === tz ? void 0 : tz.press) !== zz) {
            const tz = {
              press: zz,
              event: new Event("inputAction")
            };
            Qt = tz, queueMicrotask((() => {
              Qt === tz && (Qt = null)
            }))
          }
          return Qt.event
        }(Fz)) : null === (Oz = Lt[tz]) || void 0 === Oz || Oz.call(Lt))
      })))
    }
    var nt = sz(38372),
      qt = sz(38391),
      St = sz(38379);
    const Vt = {
      completeTask(zz) {
        var tz;
        null === (tz = (0, Oz.f)()) || void 0 === tz || tz.send(cz.d.CompleteTask, (0, cz.r)(zz))
      },
      setServerCookie(zz) {
        var tz;
        let {
          key: sz,
          value: Fz
        } = zz;
        null === (tz = (0, Oz.f)()) || void 0 === tz || tz.send(cz.d.GeneralCookieSet, (0, cz.x)({
          mO: sz,
          JO: Fz
        }))
      },
      answerUiRequest(zz) {
        var tz;
        let {
          id: sz,
          ZO: Fz
        } = zz;
        null === (tz = (0, Oz.f)()) || void 0 === tz || tz.send(cz.d.UiRequestResp, (0, cz.V)({
          Eo: sz,
          zv: Fz,
          tv: 5
        }))
      },
      chooseRewardedAd(zz) {
        var tz;
        let {
          id: sz,
          ZO: Fz
        } = zz;
        null === (tz = (0, Oz.f)()) || void 0 === tz || tz.send(cz.d.UiRequestResponded, (0, cz.U)({
          id: sz,
          ZO: Fz
        }))
      },
      requestLeaderboard(zz) {
        var tz;
        let {
          category: sz,
          timeframe: Fz,
          seeTop: Wz
        } = zz;
        null === (tz = (0, Oz.f)()) || void 0 === tz || tz.send(cz.d.LeaderboardRequest, {
          category: sz,
          timeframe: Fz,
          seeTop: Wz
        })
      }
    };
    let Rt = !1;
    const pt = Bz.d.ZH / 2,
      ft = [pt, -pt, -pt, -pt, pt, pt, -pt, pt],
      Et = [0, 0, 0];

    function zs(zz, tz, sz) {
      for (let Fz = 0; Fz < zz.length; Fz += 2)
        if (zz[Fz] === tz && zz[Fz + 1] === sz) return !0;
      return !1
    }
    const ts = {
      blocksStandingOn: function() {
        const zz = (0, Oz.f)();
        if (null === zz) return [];
        const {
          api: tz,
          chunks: sz,
          tables: Fz
        } = zz;
        if (!tz.readPosition(tz.localId, Et)) return [];
        const [Wz, Xz, oz] = Et, vz = Math.ceil(Xz) - 1, Uz = [], Kz = [];
        for (let Oz = 0; Oz < ft.length; Oz += 2) {
          const zz = Wz + ft[Oz],
            tz = oz + ft[Oz + 1];
          if (Number.isInteger(zz) || Number.isInteger(tz)) continue;
          const Xz = Math.floor(zz),
            uz = Math.floor(tz);
          if (zs(Kz, Xz, uz)) continue;
          const Nz = sz.yK(Xz, vz, uz);
          Fz.isSolidBlockId(Nz) && (Kz.push(Xz, uz), Uz.push(Fz.nameOfId(Nz)))
        }
        return Uz
      },
      dropAhead: function() {
        const zz = (0, Oz.f)();
        return null !== zz && 0 !== (rz.t.playerFlags(zz.api.apiView, 0) & rz.Nd.DropAhead)
      }
    };
    var ss = sz(36346),
      Fs = sz(38492),
      Ws = sz(1319),
      Xs = sz(39794);
    const Os = new Set(["replayLoad", "replaySave", "replaySaveAs", "replayTimelineZoomIn", "replayTimelineZoomOut"]),
      os = new Set(["replaySkipBack", "replaySkipForward", "replaySpeedUp", "replaySpeedDown", "replayRecordKeyframe"]);

    function vs() {
      const zz = new Set;
      return {
        add: tz => (zz.add(tz), () => {
          zz.delete(tz)
        }),
        fire() {
          for (const tz of zz) tz()
        }
      }
    }
    const Us = Object.freeze([]);

    function Ks(zz, tz) {
      let sz, {
        rereads: Fz,
        followLocalId: Wz
      } = tz;
      const Oz = () => (sz = (0, pz.j)(sz, zz()), sz);
      return {
        current: Oz,
        watch(zz) {
          const tz = (0, wz.d)((tz => {
            Fz(tz) && zz(Oz())
          }));
          if (!Wz) return tz;
          let sz = (0, bz.g)();
          const oz = (0, Xz.y)((() => {
            const tz = (0, bz.g)();
            tz !== sz && (sz = tz, zz(Oz()))
          }));
          return () => {
            tz(), oz()
          }
        }
      }
    }
    const us = {
        players: Ks((function() {
          const zz = wz.g.ids(),
            tz = {};
          for (const Xz of zz) {
            var sz, Fz, Wz;
            tz[Xz] = {
              name: null !== (sz = wz.g.getName(Xz)) && void 0 !== sz ? sz : null,
              ranks: null !== (Fz = wz.g.getSetting(Xz, "ranks")) && void 0 !== Fz ? Fz : Us,
              cosmetics: null !== (Wz = (0, wz.h)(Xz)) && void 0 !== Wz ? Wz : null
            }
          }
          return {
            ids: zz,
            byId: tz,
            localId: (0, bz.g)()
          }
        }), {
          rereads: zz => "roster" !== zz.kind || zz.members || zz.settings.has("ranks"),
          followLocalId: !0
        }),
        lobbyLeaderboardRows: Ks((function() {
          const zz = {};
          for (const Wz of wz.g.ids()) {
            var tz, sz, Fz;
            zz[Wz] = {
              colour: null !== (tz = wz.g.getSetting(Wz, "colorInLobbyLeaderboard")) && void 0 !== tz ? tz : null,
              values: null !== (sz = wz.g.getSetting(Wz, "lobbyLeaderboardValues")) && void 0 !== sz ? sz : null,
              tags: null !== (Fz = wz.g.getSetting(Wz, "lobbyLeaderboardTags")) && void 0 !== Fz ? Fz : null
            }
          }
          return zz
        }), {
          rereads: function(zz) {
            if ("roster" !== zz.kind) return "reset" === zz.kind;
            const {
              members: tz,
              settings: sz
            } = zz;
            return tz || sz.has("colorInLobbyLeaderboard") || sz.has("lobbyLeaderboardValues") || sz.has("lobbyLeaderboardTags")
          },
          followLocalId: !1
        })
      },
      Ns = {
        cosmeticsUpdated: {
          watch: zz => (0, wz.d)((tz => {
            if ("cosmetics" !== tz.kind) return;
            const sz = (0, bz.g)();
            zz(tz.updates.map((zz => {
              let {
                bF: tz,
                wF: Fz,
                DF: Wz
              } = zz;
              return {
                local: tz === sz,
                wF: Fz,
                DF: Wz
              }
            })))
          }))
        }
      };
    var bs = sz(2662),
      ws = sz(1664),
      Ds = sz(624),
      gs = sz(39831);
    let Hs = !1,
      Bs = null;
    const Ps = {
      setShopOpen(zz) {
        var tz;
        null === (tz = (0, Oz.f)()) || void 0 === tz || tz.send(cz.d.ShopMenuChanged, (0, cz.N)(zz))
      },
      buyShopItem(zz) {
        var tz;
        let {
          categoryKey: sz,
          itemKey: Fz,
          userInput: Wz
        } = zz;
        null === (tz = (0, Oz.f)()) || void 0 === tz || tz.send(cz.d.ItemBought, {
          categoryKey: sz,
          itemKey: Fz,
          shopVersion: Pz.e.get("_shopVersion"),
          userInput: Wz
        })
      }
    };
    let rs = !1;
    var Ys = sz(4450);
    const xs = Bt.x.LookFrozen | Bt.x.ClicksSuppressed;

    function ms(zz, tz) {
      var sz;
      null !== (sz = (0, Oz.f)()) && void 0 !== sz && sz.send(zz, tz) || console.warn(`[bloxd-wasm-client] message ${zz} not sent: no live game or the core's command ring is full`)
    }(0, Dz.l)(Tz.hb, (zz => {
      const tz = (0, jz.d)(Tz.hb, zz);
      void 0 !== tz && Uz.o.Yg("setDiscordReportKey", tz)
    }));
    const Is = {
      ignorePlayer(zz) {
        ms(cz.d.IgnoreUser, (0, cz.y)({
          fO: zz
        }))
      },
      reportPlayer(zz) {
        let {
          playerId: tz,
          chatMsgId: sz,
          PO: Fz,
          details: Wz
        } = zz;
        ms(cz.d.UserReport, (0, cz.gb)({
          Uu: tz,
          Ku: sz,
          PO: Fz,
          rO: Wz
        }))
      },
      reportWorldCodeChat(zz) {
        let {
          chatMsgId: tz,
          PO: sz,
          details: Fz
        } = zz;
        ms(cz.d.UserReport, (0, cz.gb)({
          Uu: "",
          Ku: tz,
          PO: sz,
          rO: Fz
        }))
      },
      requestDiscordReportKey(zz) {
        ms(cz.d.ReqDiscordReportKey, (0, cz.K)(zz))
      },
      reportLobbyOrGame(zz) {
        let {
          target: tz,
          PO: sz,
          details: Fz
        } = zz;
        "customGame" === tz ? ms(cz.d.CustomGameReport, (0, cz.u)({
          PO: sz,
          rO: Fz
        })) : ms(cz.d.LobbyReport, (0, cz.B)({
          PO: sz,
          rO: Fz
        }))
      },
      updateMyCosmetic(zz) {
        ms(cz.d.UpdateMyCosmetic, (0, cz.fb)(zz))
      },
      holdEmoteWheel(zz) {
        !zz || rt ? (0, Ys.k)(xs, zz ? xs : 0) : Uz.o.Yg("requestEmoteWheelHoldRelease")
      }
    };
    var Cs = sz(39838),
      es = sz(8940),
      Zs = sz(38954);
    const Gs = [0, 0, 0],
      Ts = [0, 0, 0],
      cs = [0, 0, 0],
      As = {
        blockAtViewPoint(zz) {
          let {
            x: tz,
            y: sz
          } = zz;
          const Fz = (0, Oz.f)();
          if (null === Fz || void 0 === Fz || !Fz.renderFrame.hasView) return null;
          const {
            renderFrame: Wz,
            clientApi: Xz,
            api: oz
          } = Fz;
          let vz = 0;
          return (0, Zs.d)(((zz, tz, sz) => (vz = Xz.getBlockId(zz, tz, sz), 0 !== vz)), Wz.cameraPosition, (0, Zs.h)((zz => rz.t.viewProj(oz.apiView, 0, zz)), tz, sz, Gs), Zs.c, Ts, cs) ? {
            pos: [Ts[0], Ts[1], Ts[2]],
            normal: [cs[0], cs[1], cs[2]],
            name: (0, es.h)(vz)
          } : null
        }
      },
      ys = {
        setBlockHighlight(zz) {
          var tz;
          null === (tz = (0, Oz.f)()) || void 0 === tz || tz.setBlockHighlight(zz)
        }
      };
    var Ms = sz(1868),
      ds = sz(39847),
      hs = sz(39851),
      Qs = sz(39853);
    var ks = sz(574),
      is = sz(38962);

    function Ls(zz) {
      if (null === zz || void 0 === zz || !zz.isCoreRunning) return null;
      const {
        api: tz,
        chunks: sz,
        items: Fz,
        tables: Wz
      } = zz;
      return {
        playerFeet() {
          const zz = tz.yB(tz.localId);
          return null !== zz && void 0 !== zz && zz.every(Number.isFinite) ? zz : null
        },
        chunkBlocks: zz => sz.isLoaded(zz[0], zz[1], zz[2]) ? (zz, tz, Fz) => sz.yK(zz, tz, Fz) : null,
        blockName: zz => Wz.nameOfId(zz),
        inventory: () => ({
          slots: Fz.playerItems().map((zz => zz ? {
            name: zz.name,
            amount: zz.amount
          } : null)),
          heldSlot: Fz.selectedSlot
        }),
        nearby() {
          const sz = [];
          for (let Wz = 0; Wz < tz.idStr.length; Wz++) {
            var Fz;
            const Xz = tz.idStr[Wz],
              Oz = tz.serverIds[Wz],
              oz = tz.kinds[Wz];
            if (null === Xz || tz.isLocal(Oz) || oz >>> rz.e !== rz.r.Lifeform) continue;
            const vz = tz.yB(Oz),
              Uz = ks.k[oz & rz.f];
            vz && void 0 !== Uz && sz.push({
              kind: "Player" === Uz ? "player" : Uz,
              name: null !== (Fz = zz.clientApi.getEntityName(Xz)) && void 0 !== Fz ? Fz : null,
              position: vz
            })
          }
          return sz
        },
        droppedItems() {
          let zz = 0;
          for (let sz = 0; sz < tz.idStr.length; sz++) null !== tz.idStr[sz] && tz.kinds[sz] >>> rz.e === rz.r.Item && zz++;
          return zz
        }
      }
    }
    const ls = {
        worldCodeAiChunk: zz => Promise.resolve((0, is.c)(Ls((0, Oz.f)()), zz)),
        worldCodeAiGameState: () => Promise.resolve((0, is.g)(Ls((0, Oz.f)())))
      },
      ns = function(zz) {
        const tz = vs(),
          Fz = vs(),
          Wz = new Set,
          Xz = new Set,
          Oz = () => {
            var tz, sz;
            return null !== (tz = null === (sz = zz.runtime()) || void 0 === sz ? void 0 : sz.currentViewer) && void 0 !== tz ? tz : null
          };
        let oz = null,
          vz = null;
        const Kz = (zz, tz) => ({
            current: zz,
            watch(sz) {
              let Fz = zz();
              return tz.add((() => {
                const tz = zz();
                tz !== Fz && (Fz = tz, sz(tz))
              }))
            }
          }),
          Nz = zz => ({
            watch: tz => (zz.add(tz), () => {
              zz.delete(tz)
            })
          }),
          bz = zz => {
            const tz = Oz(),
              sz = null === tz || void 0 === tz ? void 0 : tz.view;
            tz && sz && tz.seek(Math.max(0, Math.min(sz.totalTicks - 1, sz.wN + zz * uz.qd)))
          },
          wz = {
            replay: Kz((() => {
              var zz;
              const tz = Oz(),
                sz = null !== (zz = null === tz || void 0 === tz ? void 0 : tz.view) && void 0 !== zz ? zz : null;
              return null === tz || null === sz || sz.state === uz.ad.None ? (oz = null, null) : (oz = (0, pz.j)(oz, {
                id: tz.id,
                wN: sz.wN,
                totalTicks: sz.totalTicks,
                iJ: uz.qd,
                playing: sz.state === uz.ad.Playing,
                speed: sz.speed,
                cameraMode: sz.cameraMode,
                freecam: "freecam" === sz.cameraMode
              }), oz)
            }), tz),
            replayEdits: Kz((() => {
              var zz;
              const tz = Oz(),
                sz = null !== (zz = null === tz || void 0 === tz ? void 0 : tz.view) && void 0 !== zz ? zz : null;
              return null === tz || null === sz || sz.state === uz.ad.None ? (vz = null, null) : (vz = (0, pz.j)(vz, {
                cameraKeyframes: [...tz.keyframes],
                playbackMark: sz.mark,
                fileName: tz.fileName,
                unsavedChanges: tz.unsavedChanges,
                suggestSaveAs: tz.suggestSaveAs
              }), vz)
            }), tz),
            replayRecorder: Kz((() => {
              var tz, sz;
              return null !== (tz = null === (sz = zz.runtime()) || void 0 === sz ? void 0 : sz.recorder.current) && void 0 !== tz ? tz : Xs.b.states.replayRecorder.current()
            }), Fz),
            replayVideoExporting: {
              current: Fs.e,
              watch: zz => (0, Uz.q)("replayViewer|videoExportChanged", (() => {
                zz((0, Fs.e)())
              }))
            }
          },
          Dz = {
            replayUiActionRequested: Nz(Xz),
            replayViewerRequested: Nz(Wz)
          },
          gz = zz => {
            for (const tz of Wz) tz(zz)
          },
          Hz = () => {
            var Fz;
            !0 === (null === (Fz = Oz()) || void 0 === Fz ? void 0 : Fz.isOpen) && Promise.all([sz.e(94), sz.e(63)]).then((() => sz(41682))).then((sz => {
              let {
                startWasmReplayVideoExport: Fz
              } = sz;
              return Fz({
                viewer: Oz,
                canvas: () => {
                  var tz, sz;
                  return null !== (tz = null === (sz = zz.canvas) || void 0 === sz ? void 0 : sz.call(zz)) && void 0 !== tz ? tz : null
                },
                watchViewer: tz.add,
                requestViewer: gz
              })
            }), (zz => {
              console.error("Couldn't load the video export", zz), Ws.NotificationProvider.showAlertPopup({
                title: "Video export failed",
                subtitle: "Check your connection, then try again."
              })
            })).catch((zz => {
              console.error("The video export failed", zz)
            }))
          },
          Bz = {
            replayAction(zz) {
              if ((0, Fs.e)()) return;
              const tz = Oz();
              switch (zz) {
                case "replaySkipBack":
                  bz(-1);
                  break;
                case "replaySkipForward":
                  bz(1);
                  break;
                case "replaySpeedUp":
                case "replaySpeedDown":
                  null !== tz && void 0 !== tz && tz.view && tz.setSpeed((0, ss.h)(tz.view.speed, "replaySpeedUp" === zz ? "up" : "down"));
                  break;
                case "replayRecordKeyframe":
                  null === tz || void 0 === tz || tz.addKeyframe()
              }
            },
            setReplayPlaying(zz) {
              var tz, sz;
              (0, Fs.e)() || (zz ? null === (tz = Oz()) || void 0 === tz || tz.play() : null === (sz = Oz()) || void 0 === sz || sz.pause())
            },
            seekReplay(zz) {
              var tz;
              let {
                wN: sz,
                ignorePlaybackMark: Fz
              } = zz;
              null === (tz = Oz()) || void 0 === tz || tz.seek(sz, null !== Fz && void 0 !== Fz && Fz)
            },
            setReplayCameraMode(zz) {
              var tz;
              null === (tz = Oz()) || void 0 === tz || tz.setCameraMode(zz)
            },
            syncReplayCameraMode() {},
            setReplayCameraKeyframe(zz) {
              var tz;
              null === (tz = Oz()) || void 0 === tz || tz.setKeyframe(zz)
            },
            moveReplayCameraKeyframe(zz) {
              var tz;
              let {
                from: sz,
                to: Fz
              } = zz;
              null === (tz = Oz()) || void 0 === tz || tz.moveKeyframe(sz, Fz)
            },
            deleteReplayCameraKeyframes(zz) {
              var tz;
              let {
                start: sz,
                end: Fz
              } = zz;
              null === (tz = Oz()) || void 0 === tz || tz.deleteKeyframes(sz, Fz)
            },
            setReplayPlaybackMark(zz) {
              var tz;
              null === (tz = Oz()) || void 0 === tz || tz.setMark(zz)
            },
            cropReplay(zz) {
              var tz, sz;
              let {
                start: Fz,
                end: Wz
              } = zz;
              return !(0, Fs.e)() && (null !== (tz = null === (sz = Oz()) || void 0 === sz ? void 0 : sz.crop(Fz, Wz)) && void 0 !== tz && tz)
            },
            holdReplayForShaderPackFailure(zz) {
              const tz = Oz();
              tz && (tz.holdForShaderPackFailure(), function(zz) {
                sz.e(129).then((() => sz(38610))).then((tz => {
                  let {
                    shaderPackPage: sz
                  } = tz;
                  sz.block(zz)
                })).catch((zz => {
                  console.warn("[bloxd-wasm-client] the shader pack could not be blocked", zz)
                }))
              }(zz))
            },
            exportReplayVideo() {
              Hz()
            },
            toggleRecording() {
              var tz;
              null === (tz = zz.runtime()) || void 0 === tz || tz.recorder.toggleRecording()
            },
            saveClip() {
              var tz;
              null === (tz = zz.runtime()) || void 0 === tz || tz.recorder.saveClip()
            },
            setRecorderPrefs(tz) {
              var sz;
              let {
                clipping: Fz,
                clipSeconds: Wz
              } = tz;
              null === (sz = zz.runtime()) || void 0 === sz || sz.recorder.setPrefs(Fz, Wz)
            },
            setReplayViewerOpen(tz) {
              var sz;
              (0, Dt.i)(tz) && (null === (sz = zz.runtime()) || void 0 === sz || sz.recorder.viewerShown(tz))
            },
            recordFlyingMiddleText(tz) {
              var sz;
              let {
                content: Fz,
                pX: Wz,
                angle: Xz,
                fX: Oz
              } = tz;
              null === (sz = zz.runtime()) || void 0 === sz || sz.recorder.recordFlyingText(JSON.stringify(Fz), Wz, Xz, Oz)
            },
            dragReplayCamera(tz) {
              var sz;
              let {
                dx: Fz,
                dy: Wz
              } = tz;
              null === (sz = zz.freecam()) || void 0 === sz || sz.drag(Fz, Wz)
            },
            moveReplayFreecam(tz) {
              var sz;
              null === (sz = zz.freecam()) || void 0 === sz || sz.move(tz)
            },
            holdReplayFreecamVertical(tz) {
              var sz;
              let {
                action: Fz,
                po: Wz
              } = tz;
              null === (sz = zz.freecam()) || void 0 === sz || sz.holdVertical(Fz, Wz)
            }
          },
          Pz = zz => {
            var tz;
            const sz = Oz(),
              Fz = null !== (tz = null === sz || void 0 === sz ? void 0 : sz.view) && void 0 !== tz ? tz : null;
            Os.has(zz) ? (zz => {
              for (const tz of Xz) tz(zz)
            })(zz) : os.has(zz) ? Bz.replayAction(zz) : "replayPlayPause" === zz ? sz && Fz && Fz.state !== uz.ad.None && Bz.setReplayPlaying(Fz.state !== uz.ad.Playing) : "replayChangeCameraMode" === zz ? null === sz || void 0 === sz || sz.cycleCameraMode() : "replayExit" === zz ? !0 === (null === sz || void 0 === sz ? void 0 : sz.inPlayback) && (0, jt.k)("/") : "replayExportVideo" === zz && Hz()
          };
        let rz = !1;
        return {
          states: wz,
          events: Dz,
          commands: Bz,
          lookups: {
            replayCamera() {
              var tz, sz, Fz;
              return !0 !== (null === (tz = Oz()) || void 0 === tz ? void 0 : tz.isOpen) ? null : null !== (sz = null === (Fz = zz.cameraView) || void 0 === Fz ? void 0 : Fz.call(zz)) && void 0 !== sz ? sz : null
            },
            leaveGameReloadsPage() {
              var zz;
              return !0 === (null === (zz = Oz()) || void 0 === zz ? void 0 : zz.inPlayback)
            }
          },
          feed: {
            viewerChanged: () => {
              var zz;
              const sz = !0 === (null === (zz = Oz()) || void 0 === zz ? void 0 : zz.inPlayback);
              sz !== rz && (rz = sz, Uz.o.Yg("connectedGameChanged")), tz.fire()
            },
            recorderChanged: Fz.fire,
            keyDown: zz => {
              var tz;
              switch (zz) {
                case "recordGame":
                  return void Bz.toggleRecording();
                case "recordClip":
                  return void((0, Dt.e)() || Bz.saveClip())
              }(0, Fs.e)() || ("replayViewerOpen" !== zz ? zz.startsWith("replay") && ((0, Dt.e)() || !0 === (null === (tz = Oz()) || void 0 === tz ? void 0 : tz.inPlayback)) && Pz(zz) : gz("toggle"))
            }
          }
        }
      }({
        runtime: Wz.j,
        cameraView: () => {
          var zz;
          const tz = null === (zz = (0, Oz.f)()) || void 0 === zz ? void 0 : zz.renderFrame;
          if (!tz) return null;
          const [sz, Fz, Wz] = tz.cameraPosition, [Xz, oz, vz] = tz.cameraDirection;
          return {
            position: [sz, Fz, Wz],
            direction: [Xz, oz, vz]
          }
        },
        canvas: () => {
          var zz, tz, sz;
          return null !== (zz = null === (tz = (sz = (0, Xz.L)()).canvas) || void 0 === tz ? void 0 : tz.call(sz)) && void 0 !== zz ? zz : null
        },
        freecam: Wz.g
      }),
      as = {
        states: {
          ...Ut,
          ...bt.l,
          ...ns.states,
          ...us,
          ...iz
        },
        events: {
          ...Kt,
          ...gz,
          ...bt.g,
          ...Cz.e,
          ...Cs.d,
          ...ns.events,
          ...Ns,
          ...Iz.h
        },
        commands: {
          ...Jz,
          ...ut,
          ...Hz,
          ...bt.c,
          ...Vt,
          ...Is,
          ...Iz.d,
          ...Mt,
          ...ns.commands,
          ...Ps,
          ...Lz,
          ...ys
        },
        queries: {
          ...bt.h,
          ...ls
        },
        lookups: {
          ...Nt,
          ...yz,
          ...Cs.f,
          ...ns.lookups,
          ...mz,
          ...ts,
          ...As,
          ...lz
        }
      };

    function qs() {
      (0, oz.d)(Dz.p), (0, Wz.m)(ns.feed), (0, Cz.h)(), Rt || (Rt = !0, (0, Dz.l)(Tz.j, (zz => {
        const tz = (0, jz.d)(Tz.j, zz);
        "string" === typeof tz && Promise.resolve().then((() => sz(3319))).then((zz => {
          let {
            onCosmeticPackGranted: sz
          } = zz;
          sz(tz)
        }))
      })), (0, Dz.l)(Tz.eb, (zz => {
        const tz = (0, jz.d)(Tz.eb, zz);
        "number" === typeof tz && Uz.o.Yg("serverUpdating", Date.now() + tz, !0)
      })), (0, Dz.l)(Tz.D, (zz => {
        const tz = (0, jz.d)(Tz.D, zz);
        if ((0, jz.c)(tz)) {
          const {
            zz: zz,
            tz: sz
          } = tz;
          (0, qt.d)({
            zz: "string" === typeof zz ? zz : null,
            tz: "string" === typeof sz ? sz : null
          })
        }
      })), (0, Dz.l)(Kz.fc.NewUiRequest, (zz => {
        const tz = (0, jz.f)(zz);
        (0, jz.c)(tz) && "number" === typeof tz.id && (0, jz.c)(tz.clientParameters) && (0, St.f)(tz.id, tz.clientParameters)
      })), (0, Dz.l)(Tz._, (zz => {
        const tz = (0, jz.d)(Tz._, zz);
        "number" === typeof tz && (0, St.h)(tz)
      })), (0, Dz.k)(St.c), (0, Dz.l)(Kz.fc.UiRequestPopup, (zz => {
        const tz = (0, jz.f)(zz);
        if ((0, jz.c)(tz) && "number" === typeof tz.id && "string" === typeof tz.text) {
          const zz = tz.id;
          (0, St.i)(zz, tz.text, (tz => {
            Vt.answerUiRequest({
              id: zz,
              ZO: tz
            })
          }))
        }
      })), (0, Dz.l)(Kz.fc.TopRightHelper, (zz => {
        const tz = (0, jz.f)(zz);
        void 0 !== tz && Uz.o.Yg("TopRightHelper", tz, !0)
      })), (0, Dz.l)(Kz.fc.TaskProgress, (zz => {
        const tz = (0, jz.f)(zz);
        (0, jz.c)(tz) && "string" === typeof tz.taskId && "number" === typeof tz.progress && (0, nt.d)({
          taskId: tz.taskId,
          progress: tz.progress
        })
      }))), rs || (rs = !0, (0, Dz.l)(Tz.q, (zz => {
        const tz = (0, jz.d)(Tz.q, zz);
        (0, jz.c)(tz) && Uz.o.Yg("showShopFromServer", {
          toggle: tz.gt,
          Ht: tz.Ht
        }, !0)
      })), (0, Dz.l)(Kz.fc.OverShopInfo, (zz => {
        const tz = (0, jz.f)(zz);
        (0, jz.c)(tz) && Uz.o.Yg("overShopInfo", tz.info, !0)
      })), (0, Dz.l)(Kz.fc.ShowShopTutorial, (() => {
        Uz.o.Yg("showShopTutorial", null, !0)
      }))), Hs || (Hs = !0, (0, Dz.g)((() => {
        var zz;
        (0, bs.A)(), null === (zz = Bs) || void 0 === zz || zz(), Bs = (0, Dz.e)() ? (0, Ds.f)(Dz.e) : null
      })), (0, Dz.l)(Kz.fc.SetCookie, (zz => {
        const tz = (0, jz.f)(zz),
          sz = (0, jt.d)().gameNameWithVariation;
        (0, jz.c)(tz) && "string" === typeof tz.key && null !== sz && (0, ws.setCookie)(sz, tz.key, tz.value)
      })), (0, Dz.l)(Kz.fc.LeaveValues, (zz => {
        const tz = (0, jz.f)(zz);
        if ((0, jz.c)(tz) && "string" === typeof tz.leaveEventType) {
          const {
            leaveEventType: zz,
            category: sz,
            subCategory: Fz,
            value: Wz
          } = tz;
          (0, bs.H)({
            leaveEventType: zz,
            category: sz,
            subCategory: Fz,
            value: Wz
          })
        }
      })), (0, Dz.l)(Kz.fc.CustomAnalyticsEvent, (zz => {
        const tz = (0, jz.f)(zz);
        if ((0, jz.c)(tz) && "string" === typeof tz.cat1) {
          const {
            cat1: zz,
            cat2: sz,
            cat3: Fz,
            value: Wz
          } = tz;
          (0, bs.r)({
            cat1: zz,
            cat2: sz,
            cat3: Fz,
            value: Wz
          })
        }
      })), (0, Dz.l)(Kz.fc.ProgressionEvent, (zz => {
        const tz = (0, jz.f)(zz);
        if ((0, jz.c)(tz)) {
          const {
            type: zz,
            location1: sz,
            location2: Fz,
            location3: Wz,
            score: Xz
          } = tz;
          (0, bs.u)({
            type: zz,
            location1: sz,
            location2: Fz,
            location3: Wz,
            score: Xz
          })
        }
      })), (0, Dz.l)(Kz.fc.ResourceEvent, (zz => {
        const tz = (0, jz.f)(zz);
        if ((0, jz.c)(tz)) {
          const {
            type: zz,
            resourceType: sz,
            amount: Fz,
            category: Wz,
            itemName: Xz
          } = tz;
          (0, bs.v)({
            type: zz,
            resourceType: sz,
            amount: Fz,
            category: Wz,
            itemName: Xz
          })
        }
      })), (0, Dz.l)(Kz.fc.LeaderboardResponse, (zz => {
        const tz = (0, jz.f)(zz);
        if ((0, jz.c)(tz)) {
          const {
            category: zz,
            timeframe: sz,
            data: Fz
          } = tz;
          Uz.o.Yg("leaderboardResponse", {
            category: zz,
            timeframe: sz,
            data: Fz
          })
        }
      })), (0, Dz.l)(Tz.v, (zz => {
        const tz = (0, jz.d)(Tz.v, zz);
        "string" === typeof tz && (0, gs.d)(zz.conn, tz)
      })), (0, Dz.l)(Tz.y, (zz => {
        const tz = (0, jz.d)(Tz.y, zz);
        "string" === typeof tz && console.error(`[logErrorToConsole]: ${tz}`)
      }))), dz(), (0, Cs.b)(), yt || (yt = !0, (0, Dz.l)(Tz.h, (zz => {
        const tz = (0, jz.d)(Tz.h, zz);
        void 0 !== tz && (0, At.i)(tz)
      }))), lt(), et(), qz || (qz = !0, (0, Xz.x)(Sz)), Fz.gameBridge.attach(as), (0, Fz.installPageSources)({
        commands: {
          ...Fz.DEFAULT_CLIENT_PAGE_SOURCES.commands,
          setChunkAddDistance: ds.i
        },
        queries: Qs.wasmIconQueries,
        lookups: {
          ...Fz.DEFAULT_CLIENT_PAGE_SOURCES.lookups,
          ...Qs.wasmIconLookups,
          RP: ds.c,
          drawCallStats: hs.k
        }
      }), (0, Ms.b)(), (0, Qs.loadIcons)()
    }
  },
  39864: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Oz,
      f: () => oz
    });
    var Fz = sz(39867);
    let Wz = null,
      Xz = null;

    function Oz() {
      return Wz ??= sz.e(58).then((() => sz(41697))).catch((zz => {
        throw Wz = null, zz
      })), Wz
    }

    function oz() {
      return Xz ??= Promise.all([Oz(), (0, Fz.e)()]).then((zz => {
        let [tz] = zz;
        return tz
      }), (zz => {
        throw Xz = null, zz
      })), Xz
    }
  },
  36453: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Fz
    });
    const Fz = {
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
  36283: (zz, tz, sz) => {
    sz.d(tz, {
      D: () => Oz,
      e: () => Wz,
      h: () => Xz,
      k: () => Nz,
      o: () => oz,
      r: () => vz,
      u: () => Uz,
      x: () => uz,
      z: () => Kz
    });
    var Fz = sz(1223);
    let Wz = function(zz) {
        return zz[zz.Join = 0] = "Join", zz[zz.Leave = 1] = "Leave", zz[zz.Push = 2] = "Push", zz[zz.Cursor = 3] = "Cursor", zz[zz.Submit = 4] = "Submit", zz[zz.ReloadAsVariation = 5] = "ReloadAsVariation", zz[zz.CreateFile = 6] = "CreateFile", zz[zz.RenameFile = 7] = "RenameFile", zz[zz.DeleteFile = 8] = "DeleteFile", zz[zz.SetEngine = 9] = "SetEngine", zz[zz.RenameFolder = 10] = "RenameFolder", zz
      }({}),
      Xz = function(zz) {
        return zz[zz.Joined = 0] = "Joined", zz[zz.Updates = 1] = "Updates", zz[zz.Presence = 2] = "Presence", zz[zz.RemoteCursor = 3] = "RemoteCursor", zz[zz.ForceClose = 4] = "ForceClose", zz[zz.LobbyFilesChanged = 5] = "LobbyFilesChanged", zz[zz.EngineSettings = 6] = "EngineSettings", zz
      }({});

    function Oz(zz) {
      return "lobby" === zz.kind ? `lobby:${zz.path}` : `codeBlock:${zz.pos[0]},${zz.pos[1]},${zz.pos[2]}`
    }

    function oz(zz) {
      if ("lobby" === zz) return {
        kind: "lobby",
        path: Fz.j
      };
      if (zz.startsWith("lobby:")) {
        const tz = zz.slice(6);
        return uz(tz) ? {
          kind: "lobby",
          path: tz
        } : null
      }
      const tz = zz.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return tz ? {
        kind: "codeBlock",
        pos: [parseInt(tz[1]), parseInt(tz[2]), parseInt(tz[3])]
      } : null
    }

    function vz(zz) {
      return zz.endsWith(".d.ts")
    }

    function Uz(zz) {
      return zz.endsWith(".ts") && !vz(zz)
    }
    const Kz = 64;

    function uz(zz) {
      if (!zz || zz !== zz.trim()) return !1;
      if (zz.length > Kz) return !1;
      if (zz.startsWith("/") || zz.includes("\\") || zz.includes("\0")) return !1;
      if (!vz(zz) && !Uz(zz) && ! function(zz) {
          return zz.endsWith(".js") && !zz.endsWith(".min.js") && !zz.endsWith(".bundle.js")
        }(zz)) return !1;
      const tz = zz.split("/");
      for (const sz of tz)
        if ("" === sz || "." === sz || ".." === sz) return !1;
      return !0
    }
    const Nz = 14e3
  },
  38450: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Fz,
      f: () => Wz
    });
    const Fz = ["description", "label"];

    function Wz(zz) {
      const tz = zz.type;
      return {
        type: tz,
        params: zz[tz]
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);