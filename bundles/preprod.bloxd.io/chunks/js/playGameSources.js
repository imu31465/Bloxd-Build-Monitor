export const id = 46;
export const ids = [46];
export const modules = {
  38972: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => tz,
      f: () => iz,
      g: () => nz
    });
    const Ez = 6e3;

    function nz(zz, uz) {
      return [Math.floor(zz[0] / uz) * uz, Math.floor(zz[1] / uz) * uz, Math.floor(zz[2] / uz) * uz]
    }

    function iz(zz) {
      const uz = (null !== zz && void 0 !== zz ? zz : "").match(/-?\d+(?:\.\d+)?/g);
      return uz && uz.length >= 3 ? [Number(uz[0]), Number(uz[1]), Number(uz[2])] : null
    }

    function lz(zz, uz) {
      return zz === uz ? String(zz) : `${zz}-${uz}`
    }

    function Mz(zz, uz, bz, Ez) {
      const nz = [];
      let iz = new Map;
      for (let lz = zz[2]; lz < zz[2] + uz; lz++) {
        const Mz = new Map;
        let tz = zz[0];
        for (; tz < zz[0] + uz;) {
          const nz = Ez(tz, bz, lz);
          let Hz = tz;
          for (; Hz + 1 < zz[0] + uz && Ez(Hz + 1, bz, lz) === nz;) Hz++;
          if (null !== nz) {
            const zz = `${tz} ${Hz} ${nz}`,
              uz = iz.get(zz);
            uz ? (uz.z1 = lz, iz.delete(zz), Mz.set(zz, uz)) : Mz.set(zz, {
              x0: tz,
              x1: Hz,
              z0: lz,
              z1: lz,
              name: nz
            })
          }
          tz = Hz + 1
        }
        nz.push(...iz.values()), iz = Mz
      }
      return nz.push(...iz.values()), nz.sort(((zz, uz) => zz.z0 - uz.z0 || zz.x0 - uz.x0)).map((zz => `x${lz(zz.x0,zz.x1)} z${lz(zz.z0,zz.z1)} ${zz.name}`))
    }

    function tz(zz, uz, bz, nz) {
      let iz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Ez;
      const tz = [zz[0] + uz - 1, zz[1] + uz - 1, zz[2] + uz - 1],
        Hz = null !== nz && nz.every(((uz, bz) => Math.floor(uz) >= zz[bz] && Math.floor(uz) <= tz[bz])),
        Oz = [`The chunk from ${zz.join(" ")} to ${tz.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
      null !== nz && Oz.push(`The player's feet are at ${nz.map(Math.floor).join(" ")}, ${Hz?"in this chunk":"outside this chunk"}.`);
      const pz = [];
      for (let Ez = zz[1]; Ez <= tz[1]; Ez++) {
        const nz = Mz(zz, uz, Ez, bz).join("; "),
          iz = pz[pz.length - 1];
        (null === iz || void 0 === iz ? void 0 : iz.boxes) === nz ? iz.to = Ez : pz.push({
          from: Ez,
          to: Ez,
          boxes: nz
        })
      }
      const dz = pz.filter((zz => "" !== zz.boxes));
      0 === dz.length && Oz.push("It is all air.");
      let Fz = Oz.join("\n").length;
      for (const Ez of dz) {
        const zz = `y${lz(Ez.from,Ez.to)}: ${Ez.boxes}`;
        if (Fz += zz.length + 1, Fz > iz) {
          Oz.push(`Cut short: the layers from y${Ez.from} up aren't shown, as there are too many blocks.`);
          break
        }
        Oz.push(zz)
      }
      return Oz.join("\n")
    }
  },
  8466: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => nz
    });
    var Ez = bz(20);

    function nz() {
      return !Ez.e.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  36378: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => lz,
      h: () => iz,
      k: () => nz
    });
    const Ez = [.25, .5, 1, 2, 4, 8, 16];

    function nz(zz, uz) {
      const bz = Ez;
      let nz = bz.indexOf(zz);
      return -1 === nz && (nz = bz.findIndex((uz => uz >= zz)), -1 === nz && (nz = bz.length - 1)), "up" === uz ? bz[Math.min(nz + 1, bz.length - 1)] : bz[Math.max(nz - 1, 0)]
    }

    function iz(zz) {
      return zz <= Ez[0]
    }

    function lz(zz) {
      return zz >= Ez[Ez.length - 1]
    }
  },
  35970: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => nz,
      e: () => iz
    });
    let Ez = !1;

    function nz() {
      return Ez
    }

    function iz(zz) {
      return Ez !== zz && (Ez = zz, !0)
    }
  },
  38334: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => iz
    });
    var Ez = bz(22),
      nz = bz(1892);

    function iz(zz) {
      let {
        taskId: uz,
        progress: bz
      } = zz;
      const Ez = nz.b.get("_tasks");
      null !== Ez && void 0 !== Ez && Ez[uz] && nz.b.apply({
        _tasks: {
          ...Ez,
          [uz]: {
            ...Ez[uz],
            progress: bz
          }
        }
      })
    }
    Ez.k.subscribe("clientTaskProgress", (zz => {
      iz(zz)
    }))
  },
  38950: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => dz,
      e: () => Zz,
      f: () => Hz,
      i: () => pz,
      k: () => tz,
      l: () => lz,
      n: () => Oz,
      o: () => Rz
    });
    var Ez = bz(1892),
      nz = bz(22),
      iz = bz(1909);
    const lz = (0, iz.m)((function() {
        var zz, uz, bz, nz;
        return {
          health: null !== (zz = Ez.b.get("_health")) && void 0 !== zz ? zz : null,
          maxHealth: null !== (uz = Ez.b.get("_totalMaxHealth")) && void 0 !== uz ? uz : null,
          shield: null !== (bz = Ez.b.get("_shield")) && void 0 !== bz ? bz : null,
          maxShield: null !== (nz = Ez.b.get("maxShield")) && void 0 !== nz ? nz : null
        }
      }), [], (0, iz.k)("_health", "_totalMaxHealth", "_shield", "maxShield")),
      Mz = [{
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

    function tz(zz, uz) {
      return Mz[(zz ? 2 : 0) + (uz ? 1 : 0)]
    }
    const Hz = (0, iz.m)((function() {
      var zz;
      return null !== (zz = Ez.b.get("_aura")) && void 0 !== zz ? zz : null
    }), [], (0, iz.k)("_aura"));

    function Oz(zz) {
      return {
        watch: uz => (0, nz.o)("shotPlayer", (bz => {
          let {
            playerId: Ez,
            damage: nz,
            wasCrit: iz,
            distance: lz
          } = bz;
          zz(Ez) && uz({
            damage: nz,
            wasCrit: iz,
            distance: lz
          })
        }))
      }
    }

    function pz(zz) {
      return (0, iz.e)("chat", (uz => {
        let {
          serverChatMsgId: bz,
          content: Ez,
          chatterEId: nz
        } = uz;
        return {
          serverChatMsgId: null !== bz && void 0 !== bz ? bz : null,
          content: Ez,
          author: nz ? zz(nz) : null
        }
      }))
    }
    class dz {
      constructor() {
        this.shown = null, this.needed = null, this.neededSince = 0
      }
      update(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const bz = this.shown;
        return zz !== this.needed && (this.needed = zz, this.neededSince = uz, null === zz && (this.shown = null)), this.shown !== this.needed && uz - this.neededSince > 200 && (this.shown = this.needed), this.shown !== bz
      }
    }

    function Fz(zz) {
      return [{
        translationKey: `touchKeys:${zz}`
      }]
    }
    const Zz = {
      open: Fz("open"),
      close: Fz("close"),
      milk: Fz("milk"),
      shear: Fz("shear"),
      tame: Fz("tame"),
      feed: Fz("feed"),
      ride: Fz("ride")
    };

    function Rz(zz) {
      return [{
        translationKey: "touchKeys:tameWith"
      }, " ", {
        icon: zz
      }]
    }
  },
  39925: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Mz,
      f: () => lz
    });
    var Ez = bz(3052);
    let nz = null,
      iz = null;

    function lz() {
      return iz ??= bz.e(208).then((() => bz(35817))).then((zz => {
        let {
          ITEM_SPRITES: uz,
          ITEM_SPRITES_WITHOUT_FILE: bz,
          ITEM_FILES_WITHOUT_SPRITE: iz
        } = zz;
        nz = function(zz, uz, bz) {
          const nz = new Set,
            iz = (0, Ez.y)(uz);
          let lz = 0;
          for (const [Ez, Mz] of zz.entries()) Ez === iz[lz] ? lz++ : nz.add(Mz);
          if ("" !== bz)
            for (const Mz of bz.split(Ez.t)) nz.add(Mz);
          return nz
        }(uz.split(Ez.t), bz, iz)
      }), (zz => {
        throw iz = null, zz
      })), iz
    }

    function Mz(zz) {
      var uz, bz;
      return null !== (uz = null === (bz = nz) || void 0 === bz ? void 0 : bz.has(zz)) && void 0 !== uz && uz
    }
  },
  38966: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Ez,
      f: () => iz,
      h: () => nz
    });
    const Ez = 128;

    function nz(zz, uz, bz, Ez) {
      const nz = 2 * uz - 1,
        iz = 1 - 2 * bz,
        lz = zz(0) - nz * zz(3),
        Mz = zz(4) - nz * zz(7),
        tz = zz(8) - nz * zz(11),
        Hz = zz(1) - iz * zz(3),
        Oz = zz(5) - iz * zz(7),
        pz = zz(9) - iz * zz(11);
      Ez[0] = Mz * pz - tz * Oz, Ez[1] = tz * Hz - lz * pz, Ez[2] = lz * Oz - Mz * Hz;
      const dz = Ez[0] * zz(3) + Ez[1] * zz(7) + Ez[2] * zz(11) < 0 ? -1 : 1,
        Fz = Math.hypot(Ez[0], Ez[1], Ez[2]) * dz;
      return Ez[0] /= Fz, Ez[1] /= Fz, Ez[2] /= Fz, Ez
    }

    function iz(zz, uz, bz, Ez, nz, iz) {
      const lz = [Math.floor(uz[0]), Math.floor(uz[1]), Math.floor(uz[2])],
        Mz = [0, 0, 0],
        tz = [1 / 0, 1 / 0, 1 / 0],
        Hz = [1 / 0, 1 / 0, 1 / 0];
      for (let dz = 0; dz < 3; dz++) Mz[dz] = Math.sign(bz[dz]), 0 !== Mz[dz] && (Hz[dz] = Math.abs(1 / bz[dz]), tz[dz] = (lz[dz] + (Mz[dz] > 0 ? 1 : 0) - uz[dz]) / bz[dz]);
      let Oz = 0,
        pz = Math.abs(bz[0]) > Math.abs(bz[1]) ? 0 : 1;
      for (Math.abs(bz[2]) > Math.abs(bz[pz]) && (pz = 2); Oz <= Ez;) {
        if (zz(lz[0], lz[1], lz[2])) return nz[0] = lz[0], nz[1] = lz[1], nz[2] = lz[2], iz[0] = 0, iz[1] = 0, iz[2] = 0, iz[pz] = -Mz[pz], !0;
        pz = tz[0] < tz[1] ? 0 : 1, tz[2] < tz[pz] && (pz = 2), Oz = tz[pz], lz[pz] += Mz[pz], tz[pz] += Hz[pz]
      }
      return !1
    }
  },
  38946: (zz, uz, bz) => {
    function Ez(zz, uz, bz) {
      return Math.hypot(zz[0] - uz[0], zz[1] - uz[1], zz[2] - uz[2]) < bz + .5
    }
    bz.d(uz, {
      b: () => Ez
    })
  },
  38351: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Oz
    });
    var Ez = bz(1212),
      nz = bz(1298),
      iz = bz(20),
      lz = bz(1283),
      Mz = bz(1296),
      tz = bz(1482),
      Hz = bz(35952);

    function Oz(zz) {
      let {
        zz: uz,
        bz: bz
      } = zz;
      const Oz = null !== uz && void 0 !== uz ? uz : (0, Mz.b)().gameNameWithVariation;
      (0, Ez.J)(Oz) && ((0, Hz.j)(), (0, lz.$)((() => {
        console.log("Received matchmaking order from game server to game", uz), (0, iz.k)("inGameReplay"), (0, tz.navigatePreserveSearch)((0, nz.c)(Oz, null !== bz && void 0 !== bz ? bz : void 0))
      }), "video_start"))
    }
  },
  38527: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => iz
    });
    var Ez = bz(22),
      nz = bz(1923);

    function iz(zz) {
      var uz, bz;
      const iz = (0, nz.l)(null !== (uz = null === (bz = nz.s.toggleFreeCam) || void 0 === bz ? void 0 : bz[0]) && void 0 !== uz ? uz : null);
      Ez.k.sK("showBottomMessage", {
        message: `Free Camera ${zz?"Enabled":"Disabled"}${iz?` - Press ${iz} to toggle`:""}`,
        timeoutLength: 2e3,
        type: "Warning"
      })
    }
  },
  38342: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => tz,
      e: () => lz,
      i: () => Mz,
      m: () => Hz
    });
    var Ez = bz(22),
      nz = bz(1322);
    const iz = new Map;

    function lz(zz, uz) {
      Ez.k.sK("newUiRequest", {
        id: zz,
        clientParameters: uz
      }, !0)
    }

    function Mz(zz) {
      Ez.k.sK("removeUiRequest", zz, !0);
      const uz = iz.get(zz);
      uz && (uz.tearDownNotification(), iz.delete(zz))
    }

    function tz() {
      Ez.k.sK("clearUiRequests");
      for (const zz of iz.values()) zz.tearDownNotification();
      iz.clear()
    }

    function Hz(zz, uz, bz) {
      const Ez = nz.NotificationProvider.showPromptPopup({
        title: uz,
        confirmText: "general:yes",
        cancelText: "general:no",
        unlockPointerKey: "uiRequestPopup"
      });
      iz.set(zz, Ez), Ez.getResult().then((uz => {
        iz.delete(zz), "notificationTornDown" !== uz && bz(uz)
      }))
    }
  },
  38970: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => pz,
      i: () => dz
    });
    var Ez = bz(195),
      nz = bz(38972);
    const iz = 20;

    function lz(zz) {
      return zz.map(Math.floor).join(" ")
    }

    function Mz(zz) {
      return null === zz.amount || 1 === zz.amount ? zz.name : `${zz.amount} ${zz.name}`
    }
    var tz = bz(38974),
      Hz = bz(1892),
      Oz = bz(1296);

    function pz(zz, uz) {
      if (!zz) return tz.e;
      const bz = zz.playerFeet();
      if (!bz) return "The player isn't in the world yet, so no blocks can be seen.";
      const iz = Ez.e.IZ,
        lz = (0, nz.g)(null !== uz && void 0 !== uz ? uz : bz, iz),
        Mz = zz.chunkBlocks(lz);
      return Mz ? (0, nz.d)(lz, iz, ((uz, bz, Ez) => {
        const nz = Mz(uz, bz, Ez);
        return 0 === nz ? null : zz.blockName(nz).split("|")[0]
      }), bz) : `The chunk from ${lz.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${bz.map(Math.floor).join(" ")}.`
    }

    function dz(zz) {
      var uz, bz, Ez;
      if (!zz) return tz.h;
      const nz = zz.playerFeet();
      if (!nz) return "The player isn't in the world yet, so nothing in it can be seen.";
      const {
        slots: pz,
        heldSlot: dz
      } = zz.inventory();
      return function(zz) {
        const uz = [];
        null !== zz.game && uz.push(`Game: ${zz.game}.`);
        const bz = null === zz.health ? "" : `, health ${Math.round(zz.health)}${null===zz.maxHealth?"":` of ${Math.round(zz.maxHealth)}`}`;
        uz.push(`The player (the creator) stands at ${lz(zz.position)}${bz}, ${zz.creative?"in":"not in"} creative mode.`);
        const Ez = zz.slots[zz.heldSlot];
        uz.push(Ez ? `Holding (slot ${zz.heldSlot}): ${Mz(Ez)}.` : `Holding nothing (slot ${zz.heldSlot} is empty).`);
        const nz = zz.slots.flatMap(((zz, uz) => zz ? [`slot ${uz}: ${Mz(zz)}`] : []));
        uz.push(nz.length > 0 ? `Inventory: ${nz.join(", ")}.` : "Inventory: empty.");
        const tz = uz => Math.hypot(uz.position[0] - zz.position[0], uz.position[1] - zz.position[1], uz.position[2] - zz.position[2]),
          Hz = [...zz.nearby].sort(((zz, uz) => tz(zz) - tz(uz)));
        if (0 === Hz.length) uz.push("No other players or mobs are near enough to see.");
        else {
          uz.push("Near them, nearest first:");
          for (const zz of Hz.slice(0, iz)) {
            const bz = "player" === zz.kind ? `player "${zz.name||"?"}"` : zz.name && zz.name !== zz.kind ? `${zz.kind} "${zz.name}"` : zz.kind,
              Ez = Math.round(tz(zz));
            uz.push(`- ${bz} at ${lz(zz.position)}, ${Ez} block${1===Ez?"":"s"} away`)
          }
          Hz.length > iz && uz.push(`- and ${Hz.length-iz} more further away`)
        }
        return zz.droppedItems > 0 && uz.push(`${zz.droppedItems} dropped item${1===zz.droppedItems?" is":"s are"} on the ground nearby.`), uz.join("\n")
      }({
        game: null !== (uz = (0, Oz.b)().gameNameWithVariation) && void 0 !== uz ? uz : null,
        position: nz,
        health: null !== (bz = Hz.b.get("_health")) && void 0 !== bz ? bz : null,
        maxHealth: null !== (Ez = Hz.b.get("_totalMaxHealth")) && void 0 !== Ez ? Ez : null,
        creative: !0 === Hz.b.get("creative"),
        heldSlot: dz,
        slots: pz,
        nearby: zz.nearby(),
        droppedItems: zz.droppedItems()
      })
    }
  },
  38364: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Mz,
      f: () => tz,
      i: () => Hz
    });
    var Ez = bz(1212),
      nz = bz(994),
      iz = bz(36297),
      lz = bz(22);

    function Mz(zz) {
      let {
        lobbyName: uz,
        gameNameWithVariation: bz
      } = zz;
      return !(0, Ez.M)(uz) || null !== bz && (bz.startsWith("testGym") || (0, nz.k)(bz))
    }

    function tz(zz) {
      return zz.ru === iz.e.Leave || zz.ru === iz.e.Cursor
    }

    function Hz(zz) {
      lz.k.sK("codeCollab", {
        type: zz.ru,
        docKey: zz.ou,
        version: zz.Nu,
        editorCount: zz.vu,
        peers: zz.xu,
        updates: zz.Ju,
        playerId: zz.Au,
        playerName: zz.Tu,
        colour: zz.Lu,
        anchor: zz.Pu,
        head: zz.Gu,
        existingCursors: zz.au,
        files: zz.Vu,
        engineSettings: zz.mu
      })
    }
  },
  39881: (zz, uz, bz) => {
    bz.d(uz, {
      A: () => az,
      C: () => Bz,
      D: () => qz,
      E: () => Lz,
      H: () => mz,
      J: () => Tz,
      N: () => Qz,
      Q: () => Dz,
      S: () => Gz,
      e: () => Wz,
      h: () => Uz,
      k: () => Jz,
      o: () => ez,
      r: () => Az,
      s: () => xz,
      v: () => hz,
      w: () => Pz,
      x: () => Vz
    });
    var Ez = bz(1362),
      nz = bz(22),
      iz = bz(1269),
      lz = bz(2289),
      Mz = bz(4575),
      tz = bz(4544);
    let Hz, Oz = !1,
      pz = !1,
      dz = !1,
      Fz = !1;
    const Zz = 1300,
      Rz = 3e3;
    let Kz = 0,
      wz = !1,
      Xz = !1,
      fz = 0;
    const sz = 2;
    let rz = !1,
      oz = !1;
    const Nz = new Set,
      vz = new Set;

    function xz() {
      return Oz
    }

    function Jz() {
      return Xz
    }

    function Az() {
      return oz
    }

    function Tz() {
      return (0, iz.q)() && !oz
    }

    function Lz(zz) {
      let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (zz !== oz) {
        oz = zz;
        for (const zz of [...vz]) zz(oz);
        uz && Dz()
      }
    }

    function Pz(zz) {
      return vz.add(zz), () => {
        vz.delete(zz)
      }
    }

    function Gz() {
      (0, Mz.i)(lz.z.Menu, (0, iz.q)() ? 0 : lz.z.Menu)
    }

    function az() {
      Xz = !1, fz = 0, Gz(), Dz()
    }

    function Vz(zz) {
      return Nz.add(zz), () => {
        Nz.delete(zz)
      }
    }

    function mz(zz) {
      pz = !1, zz !== Oz && (Oz = zz, Fz = !1, clearTimeout(Hz), dz = !Oz && rz, Oz ? (wz = !1, Xz = !1, fz = 0) : Tz() && !rz && (Xz = !0), rz = !1, Oz && !Tz() && Iz(), Cz(), dz && Dz())
    }

    function qz(zz) {
      zz !== wz && (wz = zz, zz || Dz())
    }

    function hz() {
      pz = !1, Fz || !0 !== Sz() || (Fz = !0, clearTimeout(Hz), Hz = setTimeout(cz, Zz))
    }

    function Uz() {
      return (!pz || performance.now() - Kz > Rz) && (pz = (0, tz.M)().lockPointer(), Kz = performance.now()), pz
    }

    function cz() {
      gz() && yz() && Uz()
    }

    function gz() {
      return Tz() && !Oz && !wz && !(0, Ez.f)()
    }

    function Sz() {
      var zz;
      return "undefined" === typeof navigator || null === (zz = navigator.userActivation) || void 0 === zz ? void 0 : zz.isActive
    }

    function yz() {
      return dz && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== Sz()
    }

    function Dz() {
      Tz() ? gz() && !Xz && yz() && Uz() : Oz && !rz && Iz()
    }

    function Qz() {
      Xz ? navigator.vendor.startsWith("Apple") ? jz() : fz = sz : Dz()
    }

    function Wz() {
      fz > 0 && 0 === --fz && jz()
    }

    function ez() {
      fz = 0
    }

    function jz() {
      gz() && !0 === Sz() && Uz()
    }

    function Iz() {
      rz = !0, (0, tz.M)().unlockPointer()
    }

    function Bz() {
      pz = !1, dz = !1, Fz = !1, clearTimeout(Hz), wz = !1, Xz = !1, fz = 0, rz = !1;
      const zz = Oz;
      Oz = !1, zz && Cz()
    }

    function Cz() {
      for (const zz of [...Nz]) zz(Oz);
      nz.k.sK("pointerLockUpdate", Oz)
    }
  },
  39848: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => dz,
      e: () => Mz,
      g: () => pz,
      h: () => Hz,
      l: () => lz,
      m: () => Oz,
      o: () => tz
    });
    let Ez = null,
      nz = null,
      iz = null;

    function lz(zz) {
      Ez = zz
    }

    function Mz() {
      return Ez
    }

    function tz(zz) {
      nz = zz
    }

    function Hz() {
      return nz
    }

    function Oz(zz) {
      iz = zz
    }

    function pz() {
      return iz
    }

    function dz() {
      var zz, uz;
      return !0 === (null === (zz = nz) || void 0 === zz || null === (uz = zz.currentViewer) || void 0 === uz ? void 0 : uz.inPlayback)
    }
  },
  39902: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => lz,
      d: () => iz,
      h: () => Mz
    });
    var Ez = bz(39740),
      nz = bz(39750);

    function iz(zz) {
      if (zz.queries.drawCensus() < Ez.Hb.BYTES) return null;
      const uz = zz.memoryData(zz.scratch(), Ez.Hb.BYTES, 4, "the draw census");
      return null === uz ? null : {
        terrainOpaque: Ez.Hb.terrainOpaque(uz, 0),
        terrainTransparent: Ez.Hb.terrainTransparent(uz, 0),
        terrainPack: Ez.Hb.terrainPack(uz, 0),
        earthSky: Ez.Hb.earthSky(uz, 0),
        skyMeshes: Ez.Hb.skyMeshes(uz, 0),
        regular: Ez.Hb.regular(uz, 0),
        thin: Ez.Hb.thin(uz, 0),
        line: Ez.Hb.line(uz, 0),
        text: Ez.Hb.text(uz, 0),
        particles: Ez.Hb.particles(uz, 0)
      }
    }

    function lz(zz) {
      const {
        terrainOpaque: uz,
        terrainTransparent: bz,
        earthSky: Ez,
        skyMeshes: nz,
        regular: iz,
        thin: lz,
        line: Mz,
        text: tz,
        particles: Hz
      } = zz;
      return uz + bz + Ez + nz + iz + lz + Mz + tz + Hz
    }

    function Mz() {
      const zz = (0, nz.j)();
      return !0 === (null === zz || void 0 === zz ? void 0 : zz.isCoreRunning) ? function(zz) {
        const uz = iz(zz);
        if (null === uz) return [];
        const {
          terrainOpaque: bz,
          terrainTransparent: Ez,
          terrainPack: nz,
          earthSky: Mz,
          skyMeshes: tz,
          regular: Hz,
          thin: Oz,
          line: pz,
          text: dz,
          particles: Fz
        } = uz;
        return [{
          label: "Drawn",
          value: `${lz(uz)}`
        }, {
          label: "Terrain",
          value: `${bz} opaque / ${Ez} transparent (${nz} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${Hz} / ${Oz}`
        }, {
          label: "Text / Lines",
          value: `${dz} / ${pz}`
        }, {
          label: "Sky / Particles",
          value: `${Mz+tz} / ${Fz}`
        }]
      }(zz.api) : []
    }
  },
  39910: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      loadIcons: () => Az,
      setIconFileOverrides: () => Tz,
      wasmIconLookups: () => Uz,
      wasmIconQueries: () => hz
    });
    var Ez = bz(4263),
      nz = bz(4247),
      iz = bz(39919),
      lz = bz(1878),
      Mz = bz(1871),
      tz = bz(3043),
      Hz = bz(3052);
    let Oz = null,
      pz = null;

    function dz(zz) {
      const uz = zz.startsWith(Hz.n),
        [bz, Ez = bz, nz = bz] = (uz ? zz.slice(Hz.n.length) : zz).split(Hz.k);
      return {
        top: bz,
        left: Ez,
        right: nz,
        half: uz
      }
    }

    function Fz(zz) {
      const uz = null === Oz ? void 0 : (0, tz.e)(zz),
        bz = void 0 === uz ? 0 : Oz.codes[uz];
      return 0 === bz ? void 0 : Oz.pool[bz - 1]
    }
    var Zz = bz(3036),
      Rz = bz(4229),
      Kz = bz(4258),
      wz = bz(39922);
    const Xz = "item:";
    let fz = null,
      sz = null,
      rz = null,
      oz = null,
      Nz = !1,
      vz = !1,
      xz = null,
      Jz = 0;

    function Az() {
      return vz || (vz = !0, (0, Kz.g)().then((zz => {
        zz && (0, lz.c)()
      }))), rz ??= Promise.all([(0, Zz.e)(), (pz ??= bz.e(1).then((() => bz(41847))).then((zz => {
        let {
          BLOCK_FACE_RUNS: uz,
          BLOCK_FACES: bz,
          MAX_FACE_ITEM_ID: Ez
        } = zz;
        Oz = {
          codes: (0, Hz.B)(uz, Ez + 1),
          pool: bz.split(Hz.t).map(dz)
        }
      }), (zz => {
        throw pz = null, zz
      })), pz), (0, wz.g)(), bz.e(189).then((() => bz(9007)))]).then((zz => {
        let [, , uz, bz] = zz;
        uz.followBundledTextures(), fz = uz, sz = bz, (0, lz.c)()
      }), (zz => {
        rz = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", zz)
      })), rz
    }

    function Tz(zz) {
      xz = zz, Jz++, (0, lz.c)()
    }

    function Lz(zz) {
      var uz, bz;
      return null !== (uz = null === (bz = xz) || void 0 === bz ? void 0 : bz.itemSprite(zz)) && void 0 !== uz ? uz : fz.itemSpriteUrl(zz)
    }

    function Pz(zz) {
      var uz, bz;
      return null !== (uz = null === (bz = xz) || void 0 === bz ? void 0 : bz.blockTexture(zz)) && void 0 !== uz ? uz : fz.blockTextureUrl(zz)
    }

    function Gz(zz) {
      var uz;
      return null !== (uz = (0, Zz.d)(zz)) && void 0 !== uz ? uz : zz
    }

    function az(zz, uz) {
      var bz, Ez, nz;
      return null !== (bz = null !== (Ez = null !== (nz = Pz(zz)) && void 0 !== nz ? nz : null === uz || void 0 === uz ? void 0 : uz.rotated[zz]) && void 0 !== Ez ? Ez : null === uz || void 0 === uz ? void 0 : uz.animated[zz]) && void 0 !== bz ? bz : fz.notFoundUrl()
    }

    function Vz(zz) {
      return void 0 !== (0, tz.e)(zz) ? zz : /^[1-9][0-9]*$/.test(zz) ? (0, tz.g)(Number(zz)) : void 0
    }

    function mz(zz) {
      var uz;
      if (zz.startsWith(Xz)) {
        var bz;
        const uz = (0, Zz.d)(zz.slice(5));
        return null !== (bz = void 0 === uz ? null : Lz(uz)) && void 0 !== bz ? bz : fz.notFoundUrl()
      }
      return null !== (uz = fz.particleUrl(zz)) && void 0 !== uz ? uz : fz.notFoundUrl()
    }

    function qz(zz, uz) {
      return "StairsBlock" === zz ? zz : uz ? "SlabBlock" : "CubeBlock"
    }
    const hz = {
        async blockIcon(zz) {
          var uz;
          let {
            name: Ez,
            size: nz,
            lineWidth: iz
          } = zz;
          await Az();
          const Mz = null !== (uz = Vz(Ez)) && void 0 !== uz ? uz : Ez,
            Hz = (0, Kz.d)(Mz, nz, iz);
          if (null !== Hz) return Hz;
          const Oz = Fz(Mz),
            pz = (0, tz.e)(Mz),
            dz = void 0 === pz || null === sz ? void 0 : sz.itemTypeNameOf(pz);
          if (null === fz || void 0 === Oz) return "";
          const Zz = [Oz.top, Oz.left, Oz.right].some((zz => null === Pz(zz))),
            wz = Zz ? await (oz ??= bz.e(201).then((() => bz(33750))).then((zz => (Nz && (Nz = !1, (0, lz.c)()), {
              rotated: zz.rotatedBlockTextures,
              animated: zz.animatedBlockTextures
            })), (zz => (oz = null, Nz = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", zz), null))), oz) : null;
          if (Zz && null === wz) return "";
          const Xz = {
              top: az(Oz.top, wz),
              left: az(Oz.left, wz),
              right: az(Oz.right, wz),
              itemType: qz(dz, Oz.half)
            },
            rz = 0 === Jz ? Mz : `${Mz}#${Jz}`;
          return (await (0, Rz.d)()).drawBlockIconUrl(rz, nz, iz, (() => Xz))
        }
      },
      Uz = {
        itemIcon: function(zz) {
          var uz, bz;
          if (null === fz) return Az(), Mz.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(zz);
          if ((0, nz.i)(zz)) return {
            kind: "icon",
            url: null !== (bz = fz.ingameIconUrl(zz)) && void 0 !== bz ? bz : fz.notFoundUrl()
          };
          if (zz.startsWith(nz.c)) return {
            kind: "icon",
            url: mz(zz.slice(nz.c.length))
          };
          if (0 === (0, tz.k)()) return (0, iz.d)(), Mz.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(zz);
          const lz = null !== (uz = Vz(zz)) && void 0 !== uz ? uz : zz,
            Hz = (0, tz.e)(lz),
            Oz = void 0 === Hz ? void 0 : sz.itemTypeNameOf(Hz);
          if (void 0 !== Fz(lz)) return {
            kind: "drawnBlock"
          };
          const pz = function(zz) {
            var uz;
            return null !== (uz = Lz(Gz(zz))) && void 0 !== uz ? uz : fz.notFoundUrl()
          }(lz);
          if ((0, Kz.e)(lz) && ! function(zz) {
              return null !== xz && (null !== xz.itemSprite(Gz(zz)) || null !== xz.model(zz))
            }(lz)) return {
            kind: "model",
            url: pz
          };
          if ("Gun" === Oz) return {
            kind: "gun",
            url: pz
          };
          if (void 0 !== Hz && "GrayscaleArmour" === sz.itemTypeOf(Hz) || Object.hasOwn(Ez.c, lz)) {
            var dz;
            const uz = null !== (dz = (0, Ez.d)(zz)) && void 0 !== dz ? dz : (0, Ez.d)(lz);
            if (uz) return {
              kind: "item",
              url: pz,
              tint: uz
            }
          }
          return {
            kind: "item",
            url: pz
          }
        },
        hasIcon: function(zz) {
          return void 0 !== Vz(zz) || (0, nz.i)(zz) || zz.startsWith(nz.c)
        },
        isItemName: function(zz) {
          return void 0 !== Vz(zz)
        }
      }
  },
  39840: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      attachPlayGameSources: () => Db,
      playGameSources: () => yb
    });
    var Ez = bz(1871),
      nz = bz(39848),
      iz = bz(4544),
      lz = bz(39750),
      Mz = bz(39851),
      tz = bz(38950),
      Hz = bz(22),
      Oz = bz(4564),
      pz = bz(4560),
      dz = bz(39784),
      Fz = bz(39815),
      Zz = bz(39859),
      Rz = bz(39798);
    (0, Rz.i)(Oz.Wb.Chat, (zz => {
      if (zz.payloadKind !== pz.bc.Msgpack) return;
      const uz = function(zz) {
        if (null === zz || "object" !== typeof zz || !("content" in zz)) return null;
        const {
          chatMsgId: uz,
          content: bz,
          chatterEId: Ez
        } = zz;
        return {
          serverChatMsgId: null !== uz && void 0 !== uz ? uz : void 0,
          content: bz,
          chatterEId: void 0 === Ez || null === Ez ? void 0 : String(Ez)
        }
      }((0, dz.b)(zz.payload));
      null !== uz && Hz.k.sK("chat", uz, !0)
    }));
    const Kz = {
        chatReceived: (0, tz.i)((function(zz) {
          var uz, bz, Ez;
          return {
            id: zz,
            name: null !== (uz = Zz.f.getName(zz)) && void 0 !== uz ? uz : null,
            local: (0, Fz.g)() === zz,
            profileEffect: null !== (bz = null === (Ez = (0, Zz.h)(zz)) || void 0 === Ez ? void 0 : Ez.profileEffect) && void 0 !== bz ? bz : null
          }
        }))
      },
      wz = {
        sendChatMessage(zz) {
          var uz;
          let {
            zM: bz,
            channelName: Ez
          } = zz;
          null === (uz = (0, lz.j)()) || void 0 === uz || uz.clientApi.sendChat(bz, Ez)
        }
      };
    var Xz = bz(195),
      fz = bz(1892),
      sz = bz(39740),
      rz = bz(38946);
    const oz = [0, 0, 0],
      Nz = {
        codeBlockClickable(zz) {
          var uz;
          const bz = (0, lz.j)();
          if (null === bz || void 0 === bz || !bz.isSessionLive) return !1;
          const Ez = bz.api;
          if (0 !== (sz.z.playerFlags(Ez.apiView, 0) & sz.Id.Crouching)) return !1;
          const nz = Ez.queries.directorEntity(Ez.localId) >= sz.yb.BYTES ? Ez.memoryData(Ez.scratch(), sz.yb.BYTES, 8, "the local player's DirectorEntity") : null;
          if (null === nz) return !1;
          for (let iz = 0; iz < 3; iz++) oz[iz] = sz.yb.feet(nz, 0, iz);
          return oz[1] += sz.yb.eyeHeight(nz, 0), (0, rz.b)(oz, zz, null !== (uz = fz.b.get("blockReach")) && void 0 !== uz ? uz : Xz.e.Cw)
        }
      },
      vz = {
        clickCodeBlock(zz) {
          var uz;
          null === (uz = (0, lz.j)()) || void 0 === uz || uz.clickCodeBlock(zz)
        }
      };
    var xz = bz(39765),
      Jz = bz(39867),
      Az = bz(994),
      Tz = bz(38407),
      Lz = bz(4540),
      Pz = bz(39776),
      Gz = bz(39758),
      az = bz(39779);

    function Vz(zz) {
      if (null === zz) return null;
      const uz = [];
      for (const bz of zz) {
        const zz = Object.keys(bz)[0];
        if ("Uz" === zz) {
          const {
            str: zz,
            style: Ez,
            clickableUrl: nz
          } = bz.Uz, iz = Object.keys(zz)[0], lz = zz[iz];
          "string" !== iz && "styledEntityName" !== iz && "styledTranslatedText" !== iz || uz.push({
            str: lz,
            style: Ez,
            clickableUrl: nz
          })
        } else uz.push(bz[zz])
      }
      return uz
    }
    const mz = {
      screenPos(zz) {
        var uz, bz;
        return null !== (uz = null === (bz = (0, lz.j)()) || void 0 === bz ? void 0 : bz.renderFrame.projectWorldPosToScreenPos(zz)) && void 0 !== uz ? uz : {
          x: 0,
          y: 0
        }
      }
    };
    let qz = !1;

    function hz() {
      qz || (qz = !0, (0, Rz.i)(Oz.Wb.ProgressBarUpdate, (zz => {
        const uz = (0, az.l)(zz);
        (0, az.e)(uz) && Hz.k.sK("progressBarUpdate", uz, !0)
      })), (0, Rz.i)(Pz.x, (zz => {
        const uz = (0, az.i)(Pz.x, zz);
        uz && Hz.k.sK("middleScreenBarInitiate", {
          duration: uz.RE,
          KE: uz.KE,
          horizBarRemOffset: uz.wE
        }, !0)
      })), (0, Rz.i)(Oz.Wb.RemoveMiddleScreenBar, (() => {
        Hz.k.sK("middleScreenBarRemove")
      })), (0, Rz.i)(Pz.cb, (zz => {
        const uz = (0, az.i)(Pz.cb, zz);
        if (uz) {
          var bz;
          const zz = uz.Mb ? null === (bz = (0, lz.j)()) || void 0 === bz ? void 0 : bz.renderFrame.projectDirectionToScreenPos(uz.Mb) : void 0;
          Hz.k.sK("sendHitmarker", {
            ib: uz.ib,
            screenPos: zz
          }, !0)
        }
      })), (0, Rz.i)(Pz.kb, (zz => {
        const uz = (0, az.i)(Pz.kb, zz);
        if (uz) {
          const {
            id: zz,
            position: bz,
            style: Ez,
            Zi: nz,
            Ki: iz
          } = uz;
          Hz.k.sK("setDirectionArrow", {
            id: zz,
            position: bz,
            style: Ez,
            text: Vz(nz),
            Ki: iz
          }, !0)
        }
      })), (0, Rz.i)(Pz.g, (zz => {
        const uz = (0, az.i)(Pz.g, zz);
        uz && Hz.k.sK("clearDirectionArrow", {
          id: uz.id
        }, !0)
      })), (0, Rz.i)(Pz.p, (zz => {
        const uz = (0, az.i)(Pz.p, zz);
        uz && Hz.k.sK("flyingMiddleMessage", {
          content: Vz(uz.Yi),
          ki: uz.ki,
          zl: uz.zl
        }, !0)
      })), (0, Rz.i)(Oz.Wb.WorldVariation, (zz => {
        const uz = (0, az.l)(zz);
        if ("string" === typeof uz) {
          const zz = uz === Az.e ? null : {
            message: `Currently loaded as variation: ${uz}`,
            type: "Warning"
          };
          Hz.k.sK("showPermanentBottomMessage", zz, !0)
        }
      })), (0, Rz.i)(Pz.J, (zz => {
        const uz = (0, az.i)(Pz.J, zz);
        uz && function(zz, uz) {
          const {
            type: bz,
            params: Ez
          } = (0, Tz.e)(uz), nz = {
            ...Ez
          };
          for (const iz of Tz.b) nz[iz] && (nz[iz] = Vz(nz[iz]));
          Lz.d.queueQTE(zz, bz, nz).getResult().then((uz => {
            var bz;
            "boolean" === typeof uz && (null === (bz = (0, lz.j)()) || void 0 === bz || bz.send(Gz.d.QteResponse, {
              qteId: zz,
              qteResponse: uz
            }))
          }))
        }(uz.id, uz.Lz)
      })), (0, Rz.i)(Pz.W, (zz => {
        const uz = (0, az.i)(Pz.W, zz);
        "number" === typeof uz && Lz.d.cancelQTE(uz)
      })), (0, Rz.d)((() => {
        Lz.d.reset(), Hz.k.sK("showPermanentBottomMessage", null, !0)
      })), (0, Rz.h)((() => {
        Lz.d.reset()
      })), (0, Rz.i)(Oz.Wb.EditItemCraftingRecipes, (zz => {
        const uz = (0, az.l)(zz);
        (0, az.e)(uz) && Hz.k.sK("craftingRecipesEdited", {
          itemName: uz.craftingRecipeItemName,
          recipesForItem: uz.recipesForItem
        })
      })), (0, Rz.i)(Pz.S, (zz => {
        const uz = (0, az.i)(Pz.S, zz);
        uz && Hz.k.sK("craftingRecipesEdited", {
          itemName: uz.Un,
          recipesForItem: []
        })
      })))
    }
    var Uz = bz(20);
    const cz = [{
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

    function gz(zz) {
      return sz.z.playerFlags(zz.api.apiView, 0)
    }
    const Sz = {
        freeCamera: (0, Fz.d)((zz => () => {
          const uz = zz.isSessionLive && 0 !== (gz(zz) & sz.Id.FreeCamMoves),
            bz = zz.freeCameraAllowed() && null === Uz.e.get("scriptedCameraFacing");
          return cz[(bz ? 2 : 0) + (uz ? 1 : 0)]
        }), cz[0], (zz => (0, iz.w)(zz)))
      },
      yz = {
        setFreeCameraMovesFly: zz => {
          var uz;
          null === (uz = (0, lz.j)()) || void 0 === uz || uz.setFreeCameraMovesFly(zz)
        }
      },
      Dz = {
        freeCameraPos: () => {
          const zz = (0, lz.j)();
          return null !== zz && void 0 !== zz && zz.isSessionLive && zz.renderFrame.hasView && 0 !== (gz(zz) & sz.Id.FreeCam) ? zz.renderFrame.cameraPosition : null
        }
      };
    var Qz = bz(38527);
    let Wz = !1,
      ez = !1;

    function jz() {
      const zz = (0, lz.j)();
      if (null === zz || void 0 === zz || !zz.isSessionLive) return void(Wz = !1);
      const uz = 0 !== (sz.z.playerFlags(zz.api.apiView, 0) & sz.Id.FreeCam);
      uz !== Wz && (Wz = uz, (0, Qz.e)(uz))
    }
    var Iz = bz(328),
      Bz = bz(36465),
      Cz = bz(1909);
    var Yz = bz(39872),
      kz = bz(39806);
    const zu = {
      interactPrompt: null,
      blockText: null,
      neededTool: null
    };
    let uu = "off";

    function bu(zz) {
      var uz;
      return null === zz ? null : {
        label: null !== (uz = (0, Yz.b)(zz, "interactionPrompt")) && void 0 !== uz ? uz : null
      }
    }
    const Eu = new Map([
      [sz.yc.Open, {
        label: tz.e.open
      }],
      [sz.yc.Close, {
        label: tz.e.close
      }],
      [sz.yc.Milk, {
        label: tz.e.milk
      }],
      [sz.yc.Shear, {
        label: tz.e.shear
      }],
      [sz.yc.Tame, {
        label: tz.e.tame
      }],
      [sz.yc.Feed, {
        label: tz.e.feed
      }],
      [sz.yc.Ride, {
        label: tz.e.ride
      }]
    ]);
    class nu {
      constructor() {
        this.target = zu, this.hO = sz.cd, this.optionName = null, this.pickaxe = new tz.d
      }
      read(zz) {
        var uz;
        const bz = sz.z.targetBlockId(zz.api.apiView, 0);
        bz !== this.hO && (this.hO = bz, this.optionName = bz === sz.cd ? null : `${zz.tables.getMetaInfo(bz).rootName}CrosshairText`);
        const Ez = null === this.optionName ? null : null !== (uz = zz.tables.getClientOption(this.optionName)) && void 0 !== uz ? uz : null;
        this.pickaxe.update(function(zz, uz) {
          var bz, Ez, nz;
          if (0 === (sz.z.playerFlags(zz.api.apiView, 0) & sz.Id.Breaking) || uz === sz.cd || 0 === uz) return null;
          const {
            tables: iz
          } = zz;
          if (!0 === iz.getClientOption("creative")) return null;
          const lz = iz.nameOfId(uz),
            Mz = null === (bz = zz.items.yM()) || void 0 === bz ? void 0 : bz.name,
            tz = null !== (Ez = iz.getItemStat(lz, "harvestLevel")) && void 0 !== Ez ? Ez : 0;
          return (0, Iz.Dc)({
            blockHarvestType: iz.getDefaultItemStat(lz, "harvestType"),
            blockHarvestLevel: iz.getDefaultItemStat(lz, "harvestLevel"),
            harvestLevel: tz,
            heldToolType: void 0 === Mz ? void 0 : iz.getDefaultItemStat(Mz, "harvests"),
            heldToolLevel: void 0 === Mz ? void 0 : iz.getDefaultItemStat(Mz, "level")
          }) && null !== (nz = Bz.p[tz]) && void 0 !== nz ? nz : null
        }(zz, bz)), zz.watchPromptPick(uu);
        const nz = "touch" === uu ? function(zz) {
          var uz;
          const bz = zz.interactLabel;
          return bz === sz.yc.Entity ? bu(zz.promptEntity) : bz === sz.yc.TameWith ? {
            label: (0, tz.o)(zz.tables.nameOfId(zz.interactIcon))
          } : null !== (uz = Eu.get(bz)) && void 0 !== uz ? uz : null
        }(zz) : bu(zz.promptEntity);
        return this.target = (0, Cz.n)(this.target, {
          interactPrompt: nz,
          blockText: Ez,
          neededTool: this.pickaxe.shown
        }), this.target
      }
    }
    let iu = null;
    const lu = {
      current: () => {
        var zz, uz;
        return null !== (zz = null === (uz = iu) || void 0 === uz ? void 0 : uz.target) && void 0 !== zz ? zz : zu
      },
      watch: zz => {
        const uz = new nu;
        iu = uz;
        const bz = (0, Fz.k)((bz => {
          let Ez = uz.read(bz);
          zz(Ez);
          const nz = (0, iz.A)((() => {
            const nz = uz.read(bz);
            nz !== Ez && (Ez = nz, zz(nz))
          }));
          return () => {
            nz(), bz.watchPromptPick("off")
          }
        }));
        return () => {
          bz(), iu === uz && (iu = null)
        }
      }
    };
    let Mu = 0,
      tu = 0;
    const Hu = {
        health: tz.l,
        aura: tz.f,
        hotbar: kz.b.states.hotbar,
        heldItemAim: kz.b.states.heldItemAim,
        crouching: (0, Fz.d)((zz => function(zz) {
          const uz = () => 0 !== (sz.z.playerFlags(zz.apiView, 0) & sz.Id.Crouching);
          return {
            current: uz,
            watch(zz) {
              let bz = uz();
              return (0, iz.w)((() => {
                const Ez = uz();
                Ez !== bz && (bz = Ez, zz(Ez))
              }))
            }
          }
        }(zz.api).current), !1, (zz => (0, iz.w)(zz))),
        flight: (0, Fz.d)((zz => () => function(zz) {
          const uz = sz.z.playerFlags(zz.apiView, 0);
          return (0, tz.k)(0 !== (uz & sz.Id.CanFly), 0 !== (uz & sz.Id.Flying))
        }(zz.api)), (0, tz.k)(!1, !1), (zz => (0, iz.w)(zz))),
        gliderBoostFuel: (0, Fz.d)((zz => () => sz.z.gliderBoostFuel(zz.api.apiView, 0)), 0, (zz => (0, iz.w)(zz))),
        crosshairTarget: lu
      },
      Ou = {
        hotbarSlotRequested: kz.b.events.hotbarSlotRequested,
        hotbarScrolled: kz.b.events.hotbarScrolled,
        numberKeyPressed: kz.b.events.numberKeyPressed,
        shotDamageToShow: (0, tz.n)((zz => !0 === (0, Yz.b)(zz, "showDamageAmounts")))
      },
      pu = {
        selectHotbarSlot: kz.b.commands.selectHotbarSlot,
        setCrosshairInteractPrompt: zz => {
          uu = zz
        }
      },
      du = {
        momentumFrac: function() {
          var zz, uz, bz;
          const Ez = (0, lz.j)(),
            nz = performance.now(),
            iz = null === Ez || void 0 === Ez || null === (zz = Ez.items.yM()) || void 0 === zz || null === (uz = zz.attributes) || void 0 === uz || null === (bz = uz.customAttributes) || void 0 === bz ? void 0 : bz.enchantments;
          return Mu = null !== Ez && null !== iz && void 0 !== iz && iz.Momentum ? 0 !== (sz.z.playerFlags(Ez.api.apiView, 0) & sz.Id.Breaking) ? Math.max(0, sz.z.momentumFrac(Ez.api.apiView, 0)) : Math.max(0, Mu - (nz - tu) / 1500) : 0, tu = nz, Mu
        }
      };
    var Fu = bz(39742),
      Zu = bz(1226),
      Ru = bz(35970),
      Ku = bz(8466),
      wu = bz(1595),
      Xu = bz(2289),
      fu = bz(4567);
    let su = !1;

    function ru(zz) {
      su = zz
    }

    function ou() {
      "inGame" !== Uz.e.get("gameState") || (0, wu.p)() || Hz.k.sK("ctrlCrouchWithoutFullscreen")
    }
    let Nu = !1;
    const vu = {
        OpenEmoteWheel: () => {
          ru(!0), Nu = !0, queueMicrotask((() => {
            Nu && (Nu = !1, Hz.k.sK("requestEmoteWheelHoldOpen"))
          }))
        },
        ToggleFullCoordinateOverlay: () => {
          Hz.k.sK("toggleFullCoordinateOverlay")
        },
        KeyYPressed: () => {
          (0, Ru.d)() || Hz.k.sK("YKeyPressed")
        },
        KeyXPressed: () => {
          (0, Ru.d)() || Hz.k.sK("XKeyPressed")
        },
        CtrlCrouch: ou,
        "primary-fire": () => {
          Hz.k.sK("mouseState", {
            WO: Zu.e.DownFirePrimary,
            isDown: !0
          })
        },
        "alt-fire": () => {
          Hz.k.sK("mouseState", {
            WO: Zu.e.DownFireSecondary,
            isDown: !0
          })
        },
        TouchHold: () => {
          Hz.k.sK("mouseState", {
            WO: Zu.e.TouchDownLong,
            isDown: !0
          })
        }
      },
      xu = {
        OpenEmoteWheel: () => {
          ru(!1), Nu ? (Nu = !1, (0, Ku.c)() || Hz.k.sK("requestEmoteWheelHoldOpen")) : Hz.k.sK("requestEmoteWheelHoldRelease")
        },
        CtrlCrouch: ou,
        "primary-fire": () => {
          Hz.k.sK("mouseState", {
            WO: Zu.e.UpFirePrimary,
            isDown: !1
          })
        },
        "alt-fire": () => {
          Hz.k.sK("mouseState", {
            WO: Zu.e.UpFireSecondary,
            isDown: !1
          })
        },
        TouchDig: () => {
          Hz.k.sK("mouseState", {
            WO: Zu.e.UpFirePrimary,
            isDown: !1
          })
        }
      };
    let Ju = !1;

    function Au() {
      Ju || (Ju = !0, (0, fu.g)((zz => {
        if ((0, nz.c)()) return;
        const uz = (0, fu.c)(zz) ? "primary-fire" : zz.action;
        var bz;
        if (zz.down) {
          if (0 === (zz.flags & Xu.b.Synthetic)) {
            var Ez;
            null === (Ez = vu[uz]) || void 0 === Ez || Ez.call(vu)
          }
        } else null === (bz = xu[uz]) || void 0 === bz || bz.call(xu)
      })))
    }
    var Tu = bz(316),
      Lu = bz(96),
      Pu = bz(33),
      Gu = bz(39881),
      au = bz(1296),
      Vu = bz(38364);
    let mu = !1;
    const qu = {
      sendCodeCollab(zz) {
        var uz;
        null === (uz = (0, lz.j)()) || void 0 === uz || uz.send(Gz.d.CodeCollab, (0, Gz.l)(zz), (0, Vu.f)(zz))
      }
    };
    let hu = null,
      Uu = !1,
      cu = null;

    function gu() {
      return "inGame" === Uz.e.get("gameState") && !(0, Ru.d)()
    }
    const Su = {
        OpenInventory: zz => {
          (0, wu.x)(zz, "inventory", (0, Fu.g)())
        },
        OpenShop: zz => {
          hu && gu() && (0, wu.t)(zz, Tu.r.SHOP, !hu.shopIsEmpty(fz.b.get("shopInfo")))
        },
        OpenLobbyLeaderboard: zz => {
          gu() && (0, wu.t)(zz, Tu.r.LOBBY_LEADERBOARD, !!fz.b.get("lobbyLeaderboardInfo"))
        },
        OpenTasksAndLeaderboard: zz => {
          var uz;
          const bz = null === (uz = hu) || void 0 === uz ? void 0 : uz.getClientGameMapKey();
          bz ? (0, wu.A)(zz, !0, bz) : (0, wu.x)(zz, "retentionFeatures", !(!fz.b.get("_tasks") && !fz.b.get("_availableLeaderboards")))
        },
        OpenInviteLink: zz => {
          (0, wu.x)(zz, "inviteLink", Lu.featureFlags.canUseInviteLinks)
        },
        OpenCodeEditor: zz => {
          gu() && function(zz) {
            var uz;
            const bz = (0, lz.j)(),
              Ez = null !== bz && void 0 !== bz && bz.isSessionLive ? bz.api : null,
              nz = Ez ? Ez.Gs(Ez.localId) : null,
              iz = null !== (uz = null === nz || void 0 === nz ? void 0 : nz.map((zz => Math.floor(zz)))) && void 0 !== uz ? uz : null;
            (0, wu.A)(zz, null !== iz && (0, Vu.d)((0, au.b)()), (() => {
              Hz.k.sK("EditLobbyCode", iz)
            }))
          }(zz)
        },
        HideUi: () => {
          Hz.k.sK("showUi", !1)
        }
      },
      yu = {
        HideUi: () => {
          Hz.k.sK("showUi", !0)
        }
      };

    function Du() {
      Uu || (Uu = !0, bz.e(151).then((() => bz(41833))).then((zz => {
        hu = zz
      }), (zz => {
        console.error("[bloxd-wasm-client] the menu keys' checks did not load", zz)
      })), (0, Gu.x)((zz => {
        zz || !(0, Gu.k)() || (0, Lu.isMobile)() || !Pu.g.getItem("disableFullscreen") || (0, wu.l)() || Uz.e.set({
          openEverythingMenuName: Tu.r.SETTINGS
        })
      })), (0, fu.g)((zz => {
        let {
          action: uz,
          down: bz,
          press: Ez
        } = zz;
        var iz, lz;
        (0, nz.c)() || (bz ? null === (iz = Su[uz]) || void 0 === iz || iz.call(Su, function(zz) {
          var uz;
          if (0 === zz || (null === (uz = cu) || void 0 === uz ? void 0 : uz.press) !== zz) {
            const uz = {
              press: zz,
              event: new Event("inputAction")
            };
            cu = uz, queueMicrotask((() => {
              cu === uz && (cu = null)
            }))
          }
          return cu.event
        }(Ez)) : null === (lz = yu[uz]) || void 0 === lz || lz.call(yu))
      })))
    }
    var Qu = bz(38334),
      Wu = bz(38351),
      eu = bz(38342);
    const ju = {
      completeTask(zz) {
        var uz;
        null === (uz = (0, lz.j)()) || void 0 === uz || uz.send(Gz.d.CompleteTask, (0, Gz.p)(zz))
      },
      setServerCookie(zz) {
        var uz;
        let {
          key: bz,
          value: Ez
        } = zz;
        null === (uz = (0, lz.j)()) || void 0 === uz || uz.send(Gz.d.GeneralCookieSet, (0, Gz.t)({
          Al: bz,
          Tl: Ez
        }))
      },
      answerUiRequest(zz) {
        var uz;
        let {
          id: bz,
          Vl: Ez
        } = zz;
        null === (uz = (0, lz.j)()) || void 0 === uz || uz.send(Gz.d.UiRequestResp, (0, Gz.R)({
          QM: bz,
          WM: Ez,
          eM: 5
        }))
      },
      chooseRewardedAd(zz) {
        var uz;
        let {
          id: bz,
          Vl: Ez
        } = zz;
        null === (uz = (0, lz.j)()) || void 0 === uz || uz.send(Gz.d.UiRequestResponded, (0, Gz.O)({
          id: bz,
          Vl: Ez
        }))
      },
      requestLeaderboard(zz) {
        var uz;
        let {
          category: bz,
          timeframe: Ez,
          seeTop: nz
        } = zz;
        null === (uz = (0, lz.j)()) || void 0 === uz || uz.send(Gz.d.LeaderboardRequest, {
          category: bz,
          timeframe: Ez,
          seeTop: nz
        })
      }
    };
    let Iu = !1;
    const Bu = Xz.e.Gw / 2,
      Cu = [Bu, -Bu, -Bu, -Bu, Bu, Bu, -Bu, Bu],
      Yu = [0, 0, 0];

    function ku(zz, uz, bz) {
      for (let Ez = 0; Ez < zz.length; Ez += 2)
        if (zz[Ez] === uz && zz[Ez + 1] === bz) return !0;
      return !1
    }
    const zb = {
      blocksStandingOn: function() {
        const zz = (0, lz.j)();
        if (null === zz) return [];
        const {
          api: uz,
          chunks: bz,
          tables: Ez
        } = zz;
        if (!uz.readPosition(uz.localId, Yu)) return [];
        const [nz, iz, Mz] = Yu, tz = Math.ceil(iz) - 1, Hz = [], Oz = [];
        for (let lz = 0; lz < Cu.length; lz += 2) {
          const zz = nz + Cu[lz],
            uz = Mz + Cu[lz + 1];
          if (Number.isInteger(zz) || Number.isInteger(uz)) continue;
          const iz = Math.floor(zz),
            pz = Math.floor(uz);
          if (ku(Oz, iz, pz)) continue;
          const dz = bz.hO(iz, tz, pz);
          Ez.isSolidBlockId(dz) && (Oz.push(iz, pz), Hz.push(Ez.nameOfId(dz)))
        }
        return Hz
      },
      dropAhead: function() {
        const zz = (0, lz.j)();
        return null !== zz && 0 !== (sz.z.playerFlags(zz.api.apiView, 0) & sz.Id.DropAhead)
      }
    };
    var ub = bz(36378),
      bb = bz(38441),
      Eb = bz(1322),
      nb = bz(39823);
    const ib = new Set(["replayLoad", "replaySave", "replaySaveAs", "replayTimelineZoomIn", "replayTimelineZoomOut"]),
      lb = new Set(["replaySkipBack", "replaySkipForward", "replaySpeedUp", "replaySpeedDown", "replayRecordKeyframe"]);

    function Mb() {
      const zz = new Set;
      return {
        add: uz => (zz.add(uz), () => {
          zz.delete(uz)
        }),
        fire() {
          for (const uz of zz) uz()
        }
      }
    }
    const tb = Object.freeze([]);

    function Hb(zz, uz) {
      let bz, {
        rereads: Ez,
        followLocalId: nz
      } = uz;
      const lz = () => (bz = (0, Cz.n)(bz, zz()), bz);
      return {
        current: lz,
        watch(zz) {
          const uz = (0, Zz.d)((uz => {
            Ez(uz) && zz(lz())
          }));
          if (!nz) return uz;
          let bz = (0, Fz.g)();
          const Mz = (0, iz.A)((() => {
            const uz = (0, Fz.g)();
            uz !== bz && (bz = uz, zz(lz()))
          }));
          return () => {
            uz(), Mz()
          }
        }
      }
    }
    const Ob = {
        players: Hb((function() {
          const zz = Zz.f.ids(),
            uz = {};
          for (const iz of zz) {
            var bz, Ez, nz;
            uz[iz] = {
              name: null !== (bz = Zz.f.getName(iz)) && void 0 !== bz ? bz : null,
              ranks: null !== (Ez = Zz.f.getSetting(iz, "ranks")) && void 0 !== Ez ? Ez : tb,
              cosmetics: null !== (nz = (0, Zz.h)(iz)) && void 0 !== nz ? nz : null
            }
          }
          return {
            ids: zz,
            byId: uz,
            localId: (0, Fz.g)()
          }
        }), {
          rereads: zz => "roster" !== zz.kind || zz.members || zz.settings.has("ranks"),
          followLocalId: !0
        }),
        lobbyLeaderboardRows: Hb((function() {
          const zz = {};
          for (const nz of Zz.f.ids()) {
            var uz, bz, Ez;
            zz[nz] = {
              colour: null !== (uz = Zz.f.getSetting(nz, "colorInLobbyLeaderboard")) && void 0 !== uz ? uz : null,
              values: null !== (bz = Zz.f.getSetting(nz, "lobbyLeaderboardValues")) && void 0 !== bz ? bz : null,
              tags: null !== (Ez = Zz.f.getSetting(nz, "lobbyLeaderboardTags")) && void 0 !== Ez ? Ez : null
            }
          }
          return zz
        }), {
          rereads: function(zz) {
            if ("roster" !== zz.kind) return "reset" === zz.kind;
            const {
              members: uz,
              settings: bz
            } = zz;
            return uz || bz.has("colorInLobbyLeaderboard") || bz.has("lobbyLeaderboardValues") || bz.has("lobbyLeaderboardTags")
          },
          followLocalId: !1
        })
      },
      pb = {
        cosmeticsUpdated: {
          watch: zz => (0, Zz.d)((uz => {
            if ("cosmetics" !== uz.kind) return;
            const bz = (0, Fz.g)();
            zz(uz.updates.map((zz => {
              let {
                Yb: uz,
                kb: Ez,
                zE: nz
              } = zz;
              return {
                local: uz === bz,
                kb: Ez,
                zE: nz
              }
            })))
          }))
        }
      };
    var db = bz(2709),
      Fb = bz(1673),
      Zb = bz(627),
      Rb = bz(39887);
    let Kb = !1,
      wb = null;
    const Xb = {
      setShopOpen(zz) {
        var uz;
        null === (uz = (0, lz.j)()) || void 0 === uz || uz.send(Gz.d.ShopMenuChanged, (0, Gz.J)(zz))
      },
      buyShopItem(zz) {
        var uz;
        let {
          categoryKey: bz,
          itemKey: Ez,
          userInput: nz
        } = zz;
        null === (uz = (0, lz.j)()) || void 0 === uz || uz.send(Gz.d.ItemBought, {
          categoryKey: bz,
          itemKey: Ez,
          shopVersion: fz.b.get("_shopVersion"),
          userInput: nz
        })
      }
    };
    let fb = !1;
    var sb = bz(4575);
    const rb = Xu.z.LookFrozen | Xu.z.ClicksSuppressed;

    function ob(zz, uz) {
      var bz;
      null !== (bz = (0, lz.j)()) && void 0 !== bz && bz.send(zz, uz) || console.warn(`[bloxd-wasm-client] message ${zz} not sent: no live game or the core's command ring is full`)
    }(0, Rz.i)(Pz.lb, (zz => {
      const uz = (0, az.i)(Pz.lb, zz);
      void 0 !== uz && Hz.k.sK("setDiscordReportKey", uz)
    }));
    const Nb = {
      ignorePlayer(zz) {
        ob(Gz.d.IgnoreUser, (0, Gz.v)({
          bM: zz
        }))
      },
      reportPlayer(zz) {
        let {
          playerId: uz,
          chatMsgId: bz,
          Nl: Ez,
          details: nz
        } = zz;
        ob(Gz.d.UserReport, (0, Gz.$)({
          dp: uz,
          Fp: bz,
          Nl: Ez,
          vl: nz
        }))
      },
      reportWorldCodeChat(zz) {
        let {
          chatMsgId: uz,
          Nl: bz,
          details: Ez
        } = zz;
        ob(Gz.d.UserReport, (0, Gz.$)({
          dp: "",
          Fp: uz,
          Nl: bz,
          vl: Ez
        }))
      },
      requestDiscordReportKey(zz) {
        ob(Gz.d.ReqDiscordReportKey, (0, Gz.B)(zz))
      },
      reportLobbyOrGame(zz) {
        let {
          target: uz,
          Nl: bz,
          details: Ez
        } = zz;
        "customGame" === uz ? ob(Gz.d.CustomGameReport, (0, Gz.r)({
          Nl: bz,
          vl: Ez
        })) : ob(Gz.d.LobbyReport, (0, Gz.w)({
          Nl: bz,
          vl: Ez
        }))
      },
      updateMyCosmetic(zz) {
        ob(Gz.d.UpdateMyCosmetic, (0, Gz.Y)(zz))
      },
      holdEmoteWheel(zz) {
        !zz || su ? (0, sb.i)(rb, zz ? rb : 0) : Hz.k.sK("requestEmoteWheelHoldRelease")
      }
    };
    var vb = bz(39895),
      xb = bz(9078),
      Jb = bz(38966);
    const Ab = [0, 0, 0],
      Tb = [0, 0, 0],
      Lb = [0, 0, 0],
      Pb = {
        blockAtViewPoint(zz) {
          let {
            x: uz,
            y: bz
          } = zz;
          const Ez = (0, lz.j)();
          if (null === Ez || void 0 === Ez || !Ez.renderFrame.hasView) return null;
          const {
            renderFrame: nz,
            clientApi: iz,
            api: Mz
          } = Ez;
          let tz = 0;
          return (0, Jb.f)(((zz, uz, bz) => (tz = iz.getBlockId(zz, uz, bz), 0 !== tz)), nz.cameraPosition, (0, Jb.h)((zz => sz.z.viewProj(Mz.apiView, 0, zz)), uz, bz, Ab), Jb.e, Tb, Lb) ? {
            pos: [Tb[0], Tb[1], Tb[2]],
            normal: [Lb[0], Lb[1], Lb[2]],
            name: (0, xb.g)(tz)
          } : null
        }
      },
      Gb = {
        setBlockHighlight(zz) {
          var uz;
          null === (uz = (0, lz.j)()) || void 0 === uz || uz.setBlockHighlight(zz)
        }
      };
    var ab = bz(1878),
      Vb = bz(39898),
      mb = bz(39902),
      qb = bz(39910);
    var hb = bz(584),
      Ub = bz(38970);

    function cb(zz) {
      if (null === zz || void 0 === zz || !zz.isCoreRunning) return null;
      const {
        api: uz,
        chunks: bz,
        items: Ez,
        tables: nz
      } = zz;
      return {
        playerFeet() {
          const zz = uz.Gs(uz.localId);
          return null !== zz && void 0 !== zz && zz.every(Number.isFinite) ? zz : null
        },
        chunkBlocks: zz => bz.isLoaded(zz[0], zz[1], zz[2]) ? (zz, uz, Ez) => bz.hO(zz, uz, Ez) : null,
        blockName: zz => nz.nameOfId(zz),
        inventory: () => ({
          slots: Ez.playerItems().map((zz => zz ? {
            name: zz.name,
            amount: zz.amount
          } : null)),
          heldSlot: Ez.selectedSlot
        }),
        nearby() {
          const bz = [];
          for (let nz = 0; nz < uz.idStr.length; nz++) {
            var Ez;
            const iz = uz.idStr[nz],
              lz = uz.serverIds[nz],
              Mz = uz.kinds[nz];
            if (null === iz || uz.isLocal(lz) || Mz >>> sz.e !== sz.w.Lifeform) continue;
            const tz = uz.Gs(lz),
              Hz = hb.j[Mz & sz.i];
            tz && void 0 !== Hz && bz.push({
              kind: "Player" === Hz ? "player" : Hz,
              name: null !== (Ez = zz.clientApi.getEntityName(iz)) && void 0 !== Ez ? Ez : null,
              position: tz
            })
          }
          return bz
        },
        droppedItems() {
          let zz = 0;
          for (let bz = 0; bz < uz.idStr.length; bz++) null !== uz.idStr[bz] && uz.kinds[bz] >>> sz.e === sz.w.Item && zz++;
          return zz
        }
      }
    }
    const gb = {
        worldCodeAiChunk: zz => Promise.resolve((0, Ub.e)(cb((0, lz.j)()), zz)),
        worldCodeAiGameState: () => Promise.resolve((0, Ub.i)(cb((0, lz.j)())))
      },
      Sb = function(zz) {
        const uz = Mb(),
          Ez = Mb(),
          nz = new Set,
          iz = new Set,
          lz = () => {
            var uz, bz;
            return null !== (uz = null === (bz = zz.runtime()) || void 0 === bz ? void 0 : bz.currentViewer) && void 0 !== uz ? uz : null
          };
        let Mz = null,
          tz = null;
        const Oz = (zz, uz) => ({
            current: zz,
            watch(bz) {
              let Ez = zz();
              return uz.add((() => {
                const uz = zz();
                uz !== Ez && (Ez = uz, bz(uz))
              }))
            }
          }),
          dz = zz => ({
            watch: uz => (zz.add(uz), () => {
              zz.delete(uz)
            })
          }),
          Fz = zz => {
            const uz = lz(),
              bz = null === uz || void 0 === uz ? void 0 : uz.view;
            uz && bz && uz.seek(Math.max(0, Math.min(bz.totalTicks - 1, bz.sd + zz * pz.qd)))
          },
          Zz = {
            replay: Oz((() => {
              var zz;
              const uz = lz(),
                bz = null !== (zz = null === uz || void 0 === uz ? void 0 : uz.view) && void 0 !== zz ? zz : null;
              return null === uz || null === bz || bz.state === pz.dd.None ? (Mz = null, null) : (Mz = (0, Cz.n)(Mz, {
                id: uz.id,
                sd: bz.sd,
                totalTicks: bz.totalTicks,
                pT: pz.qd,
                playing: bz.state === pz.dd.Playing,
                speed: bz.speed,
                cameraMode: bz.cameraMode,
                freecam: "freecam" === bz.cameraMode
              }), Mz)
            }), uz),
            replayEdits: Oz((() => {
              var zz;
              const uz = lz(),
                bz = null !== (zz = null === uz || void 0 === uz ? void 0 : uz.view) && void 0 !== zz ? zz : null;
              return null === uz || null === bz || bz.state === pz.dd.None ? (tz = null, null) : (tz = (0, Cz.n)(tz, {
                cameraKeyframes: [...uz.keyframes],
                playbackMark: bz.mark,
                fileName: uz.fileName,
                unsavedChanges: uz.unsavedChanges,
                suggestSaveAs: uz.suggestSaveAs
              }), tz)
            }), uz),
            replayRecorder: Oz((() => {
              var uz, bz;
              return null !== (uz = null === (bz = zz.runtime()) || void 0 === bz ? void 0 : bz.recorder.current) && void 0 !== uz ? uz : nb.e.states.replayRecorder.current()
            }), Ez),
            replayVideoExporting: {
              current: bb.b,
              watch: zz => (0, Hz.o)("replayViewer|videoExportChanged", (() => {
                zz((0, bb.b)())
              }))
            }
          },
          Rz = {
            replayUiActionRequested: dz(iz),
            replayViewerRequested: dz(nz)
          },
          Kz = zz => {
            for (const uz of nz) uz(zz)
          },
          wz = () => {
            var Ez;
            !0 === (null === (Ez = lz()) || void 0 === Ez ? void 0 : Ez.isOpen) && Promise.all([bz.e(94), bz.e(63)]).then((() => bz(41838))).then((bz => {
              let {
                startWasmReplayVideoExport: Ez
              } = bz;
              return Ez({
                viewer: lz,
                canvas: () => {
                  var uz, bz;
                  return null !== (uz = null === (bz = zz.canvas) || void 0 === bz ? void 0 : bz.call(zz)) && void 0 !== uz ? uz : null
                },
                watchViewer: uz.add,
                requestViewer: Kz
              })
            }), (zz => {
              console.error("Couldn't load the video export", zz), Eb.NotificationProvider.showAlertPopup({
                title: "Video export failed",
                subtitle: "Check your connection, then try again."
              })
            })).catch((zz => {
              console.error("The video export failed", zz)
            }))
          },
          Xz = {
            replayAction(zz) {
              if ((0, bb.b)()) return;
              const uz = lz();
              switch (zz) {
                case "replaySkipBack":
                  Fz(-1);
                  break;
                case "replaySkipForward":
                  Fz(1);
                  break;
                case "replaySpeedUp":
                case "replaySpeedDown":
                  null !== uz && void 0 !== uz && uz.view && uz.setSpeed((0, ub.k)(uz.view.speed, "replaySpeedUp" === zz ? "up" : "down"));
                  break;
                case "replayRecordKeyframe":
                  null === uz || void 0 === uz || uz.addKeyframe()
              }
            },
            setReplayPlaying(zz) {
              var uz, bz;
              (0, bb.b)() || (zz ? null === (uz = lz()) || void 0 === uz || uz.play() : null === (bz = lz()) || void 0 === bz || bz.pause())
            },
            seekReplay(zz) {
              var uz;
              let {
                sd: bz,
                ignorePlaybackMark: Ez
              } = zz;
              null === (uz = lz()) || void 0 === uz || uz.seek(bz, null !== Ez && void 0 !== Ez && Ez)
            },
            setReplayCameraMode(zz) {
              var uz;
              null === (uz = lz()) || void 0 === uz || uz.setCameraMode(zz)
            },
            syncReplayCameraMode() {},
            setReplayCameraKeyframe(zz) {
              var uz;
              null === (uz = lz()) || void 0 === uz || uz.setKeyframe(zz)
            },
            moveReplayCameraKeyframe(zz) {
              var uz;
              let {
                from: bz,
                to: Ez
              } = zz;
              null === (uz = lz()) || void 0 === uz || uz.moveKeyframe(bz, Ez)
            },
            deleteReplayCameraKeyframes(zz) {
              var uz;
              let {
                start: bz,
                end: Ez
              } = zz;
              null === (uz = lz()) || void 0 === uz || uz.deleteKeyframes(bz, Ez)
            },
            setReplayPlaybackMark(zz) {
              var uz;
              null === (uz = lz()) || void 0 === uz || uz.setMark(zz)
            },
            cropReplay(zz) {
              var uz, bz;
              let {
                start: Ez,
                end: nz
              } = zz;
              return !(0, bb.b)() && (null !== (uz = null === (bz = lz()) || void 0 === bz ? void 0 : bz.crop(Ez, nz)) && void 0 !== uz && uz)
            },
            holdReplayForShaderPackFailure(zz) {
              const uz = lz();
              uz && (uz.holdForShaderPackFailure(), function(zz) {
                bz.e(129).then((() => bz(38566))).then((uz => {
                  let {
                    shaderPackPage: bz
                  } = uz;
                  bz.block(zz)
                })).catch((zz => {
                  console.warn("[bloxd-wasm-client] the shader pack could not be blocked", zz)
                }))
              }(zz))
            },
            exportReplayVideo() {
              wz()
            },
            toggleRecording() {
              var uz;
              null === (uz = zz.runtime()) || void 0 === uz || uz.recorder.toggleRecording()
            },
            saveClip() {
              var uz;
              null === (uz = zz.runtime()) || void 0 === uz || uz.recorder.saveClip()
            },
            setRecorderPrefs(uz) {
              var bz;
              let {
                clipping: Ez,
                clipSeconds: nz
              } = uz;
              null === (bz = zz.runtime()) || void 0 === bz || bz.recorder.setPrefs(Ez, nz)
            },
            setReplayViewerOpen(uz) {
              var bz;
              (0, Ru.e)(uz) && (null === (bz = zz.runtime()) || void 0 === bz || bz.recorder.viewerShown(uz))
            },
            recordFlyingMiddleText(uz) {
              var bz;
              let {
                content: Ez,
                ki: nz,
                angle: iz,
                zl: lz
              } = uz;
              null === (bz = zz.runtime()) || void 0 === bz || bz.recorder.recordFlyingText(JSON.stringify(Ez), nz, iz, lz)
            },
            dragReplayCamera(uz) {
              var bz;
              let {
                dx: Ez,
                dy: nz
              } = uz;
              null === (bz = zz.freecam()) || void 0 === bz || bz.drag(Ez, nz)
            },
            moveReplayFreecam(uz) {
              var bz;
              null === (bz = zz.freecam()) || void 0 === bz || bz.move(uz)
            },
            holdReplayFreecamVertical(uz) {
              var bz;
              let {
                action: Ez,
                yM: nz
              } = uz;
              null === (bz = zz.freecam()) || void 0 === bz || bz.holdVertical(Ez, nz)
            }
          },
          fz = zz => {
            var uz;
            const bz = lz(),
              Ez = null !== (uz = null === bz || void 0 === bz ? void 0 : bz.view) && void 0 !== uz ? uz : null;
            ib.has(zz) ? (zz => {
              for (const uz of iz) uz(zz)
            })(zz) : lb.has(zz) ? Xz.replayAction(zz) : "replayPlayPause" === zz ? bz && Ez && Ez.state !== pz.dd.None && Xz.setReplayPlaying(Ez.state !== pz.dd.Playing) : "replayChangeCameraMode" === zz ? null === bz || void 0 === bz || bz.cycleCameraMode() : "replayExit" === zz ? !0 === (null === bz || void 0 === bz ? void 0 : bz.inPlayback) && (0, au.k)("/") : "replayExportVideo" === zz && wz()
          };
        let sz = !1;
        return {
          states: Zz,
          events: Rz,
          commands: Xz,
          lookups: {
            replayCamera() {
              var uz, bz, Ez;
              return !0 !== (null === (uz = lz()) || void 0 === uz ? void 0 : uz.isOpen) ? null : null !== (bz = null === (Ez = zz.cameraView) || void 0 === Ez ? void 0 : Ez.call(zz)) && void 0 !== bz ? bz : null
            },
            leaveGameReloadsPage() {
              var zz;
              return !0 === (null === (zz = lz()) || void 0 === zz ? void 0 : zz.inPlayback)
            }
          },
          feed: {
            viewerChanged: () => {
              var zz;
              const bz = !0 === (null === (zz = lz()) || void 0 === zz ? void 0 : zz.inPlayback);
              bz !== sz && (sz = bz, Hz.k.sK("connectedGameChanged")), uz.fire()
            },
            recorderChanged: Ez.fire,
            keyDown: zz => {
              var uz;
              switch (zz) {
                case "recordGame":
                  return void Xz.toggleRecording();
                case "recordClip":
                  return void((0, Ru.d)() || Xz.saveClip())
              }(0, bb.b)() || ("replayViewerOpen" !== zz ? zz.startsWith("replay") && ((0, Ru.d)() || !0 === (null === (uz = lz()) || void 0 === uz ? void 0 : uz.inPlayback)) && fz(zz) : Kz("toggle"))
            }
          }
        }
      }({
        runtime: nz.h,
        cameraView: () => {
          var zz;
          const uz = null === (zz = (0, lz.j)()) || void 0 === zz ? void 0 : zz.renderFrame;
          if (!uz) return null;
          const [bz, Ez, nz] = uz.cameraPosition, [iz, Mz, tz] = uz.cameraDirection;
          return {
            position: [bz, Ez, nz],
            direction: [iz, Mz, tz]
          }
        },
        canvas: () => {
          var zz, uz, bz;
          return null !== (zz = null === (uz = (bz = (0, iz.M)()).canvas) || void 0 === uz ? void 0 : uz.call(bz)) && void 0 !== zz ? zz : null
        },
        freecam: nz.g
      }),
      yb = {
        states: {
          ...Hu,
          ...Fu.e,
          ...Sb.states,
          ...Ob,
          ...Sz
        },
        events: {
          ...Ou,
          ...Kz,
          ...Fu.c,
          ...Jz.d,
          ...vb.h,
          ...Sb.events,
          ...pb,
          ...xz.h
        },
        commands: {
          ...vz,
          ...pu,
          ...wz,
          ...Fu.b,
          ...ju,
          ...Nb,
          ...xz.e,
          ...qu,
          ...Sb.commands,
          ...Xb,
          ...yz,
          ...Gb
        },
        queries: {
          ...Fu.d,
          ...gb
        },
        lookups: {
          ...du,
          ...mz,
          ...vb.l,
          ...Sb.lookups,
          ...Nz,
          ...zb,
          ...Pb,
          ...Dz
        }
      };

    function Db() {
      (0, Mz.g)(Rz.k), (0, nz.l)(Sb.feed), (0, Jz.h)(), Iu || (Iu = !0, (0, Rz.i)(Pz.l, (zz => {
        const uz = (0, az.i)(Pz.l, zz);
        "string" === typeof uz && Promise.resolve().then((() => bz(3398))).then((zz => {
          let {
            onCosmeticPackGranted: bz
          } = zz;
          bz(uz)
        }))
      })), (0, Rz.i)(Pz.gb, (zz => {
        const uz = (0, az.i)(Pz.gb, zz);
        "number" === typeof uz && Hz.k.sK("serverUpdating", Date.now() + uz, !0)
      })), (0, Rz.i)(Pz.F, (zz => {
        const uz = (0, az.i)(Pz.F, zz);
        if ((0, az.e)(uz)) {
          const {
            zz: zz,
            bz: bz
          } = uz;
          (0, Wu.c)({
            zz: "string" === typeof zz ? zz : null,
            bz: "string" === typeof bz ? bz : null
          })
        }
      })), (0, Rz.i)(Oz.Wb.NewUiRequest, (zz => {
        const uz = (0, az.l)(zz);
        (0, az.e)(uz) && "number" === typeof uz.id && (0, az.e)(uz.clientParameters) && (0, eu.e)(uz.id, uz.clientParameters)
      })), (0, Rz.i)(Pz.Z, (zz => {
        const uz = (0, az.i)(Pz.Z, zz);
        "number" === typeof uz && (0, eu.i)(uz)
      })), (0, Rz.h)(eu.c), (0, Rz.i)(Oz.Wb.UiRequestPopup, (zz => {
        const uz = (0, az.l)(zz);
        if ((0, az.e)(uz) && "number" === typeof uz.id && "string" === typeof uz.text) {
          const zz = uz.id;
          (0, eu.m)(zz, uz.text, (uz => {
            ju.answerUiRequest({
              id: zz,
              Vl: uz
            })
          }))
        }
      })), (0, Rz.i)(Oz.Wb.TopRightHelper, (zz => {
        const uz = (0, az.l)(zz);
        void 0 !== uz && Hz.k.sK("TopRightHelper", uz, !0)
      })), (0, Rz.i)(Oz.Wb.TaskProgress, (zz => {
        const uz = (0, az.l)(zz);
        (0, az.e)(uz) && "string" === typeof uz.taskId && "number" === typeof uz.progress && (0, Qu.b)({
          taskId: uz.taskId,
          progress: uz.progress
        })
      }))), fb || (fb = !0, (0, Rz.i)(Pz.q, (zz => {
        const uz = (0, az.i)(Pz.q, zz);
        (0, az.e)(uz) && Hz.k.sK("showShopFromServer", {
          toggle: uz.Ru,
          Ku: uz.Ku
        }, !0)
      })), (0, Rz.i)(Oz.Wb.OverShopInfo, (zz => {
        const uz = (0, az.l)(zz);
        (0, az.e)(uz) && Hz.k.sK("overShopInfo", uz.info, !0)
      })), (0, Rz.i)(Oz.Wb.ShowShopTutorial, (() => {
        Hz.k.sK("showShopTutorial", null, !0)
      }))), Kb || (Kb = !0, (0, Rz.d)((() => {
        var zz;
        (0, db.G)(), null === (zz = wb) || void 0 === zz || zz(), wb = (0, Rz.b)() ? (0, Zb.f)(Rz.b) : null
      })), (0, Rz.i)(Oz.Wb.SetCookie, (zz => {
        const uz = (0, az.l)(zz),
          bz = (0, au.b)().gameNameWithVariation;
        (0, az.e)(uz) && "string" === typeof uz.key && null !== bz && (0, Fb.setCookie)(bz, uz.key, uz.value)
      })), (0, Rz.i)(Oz.Wb.LeaveValues, (zz => {
        const uz = (0, az.l)(zz);
        if ((0, az.e)(uz) && "string" === typeof uz.leaveEventType) {
          const {
            leaveEventType: zz,
            category: bz,
            subCategory: Ez,
            value: nz
          } = uz;
          (0, db.J)({
            leaveEventType: zz,
            category: bz,
            subCategory: Ez,
            value: nz
          })
        }
      })), (0, Rz.i)(Oz.Wb.CustomAnalyticsEvent, (zz => {
        const uz = (0, az.l)(zz);
        if ((0, az.e)(uz) && "string" === typeof uz.cat1) {
          const {
            cat1: zz,
            cat2: bz,
            cat3: Ez,
            value: nz
          } = uz;
          (0, db.s)({
            cat1: zz,
            cat2: bz,
            cat3: Ez,
            value: nz
          })
        }
      })), (0, Rz.i)(Oz.Wb.ProgressionEvent, (zz => {
        const uz = (0, az.l)(zz);
        if ((0, az.e)(uz)) {
          const {
            type: zz,
            location1: bz,
            location2: Ez,
            location3: nz,
            score: iz
          } = uz;
          (0, db.A)({
            type: zz,
            location1: bz,
            location2: Ez,
            location3: nz,
            score: iz
          })
        }
      })), (0, Rz.i)(Oz.Wb.ResourceEvent, (zz => {
        const uz = (0, az.l)(zz);
        if ((0, az.e)(uz)) {
          const {
            type: zz,
            resourceType: bz,
            amount: Ez,
            category: nz,
            itemName: iz
          } = uz;
          (0, db.B)({
            type: zz,
            resourceType: bz,
            amount: Ez,
            category: nz,
            itemName: iz
          })
        }
      })), (0, Rz.i)(Oz.Wb.LeaderboardResponse, (zz => {
        const uz = (0, az.l)(zz);
        if ((0, az.e)(uz)) {
          const {
            category: zz,
            timeframe: bz,
            data: Ez
          } = uz;
          Hz.k.sK("leaderboardResponse", {
            category: zz,
            timeframe: bz,
            data: Ez
          })
        }
      })), (0, Rz.i)(Pz.y, (zz => {
        const uz = (0, az.i)(Pz.y, zz);
        "string" === typeof uz && (0, Rb.b)(zz.conn, uz)
      })), (0, Rz.i)(Pz.B, (zz => {
        const uz = (0, az.i)(Pz.B, zz);
        "string" === typeof uz && console.error(`[logErrorToConsole]: ${uz}`)
      }))), hz(), (0, vb.c)(), mu || (mu = !0, (0, Rz.i)(Pz.h, (zz => {
        const uz = (0, az.i)(Pz.h, zz);
        void 0 !== uz && (0, Vu.i)(uz)
      }))), Du(), Au(), ez || (ez = !0, (0, iz.w)(jz)), Ez.gameBridge.attach(yb), (0, Ez.installPageSources)({
        commands: {
          ...Ez.DEFAULT_CLIENT_PAGE_SOURCES.commands,
          setChunkAddDistance: Vb.f
        },
        queries: qb.wasmIconQueries,
        lookups: {
          ...Ez.DEFAULT_CLIENT_PAGE_SOURCES.lookups,
          ...qb.wasmIconLookups,
          Kr: Vb.d,
          drawCallStats: mb.h
        }
      }), (0, ab.c)(), (0, qb.loadIcons)()
    }
  },
  39922: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => lz,
      g: () => Mz
    });
    var Ez = bz(39925);
    let nz = null,
      iz = null;

    function lz() {
      return nz ??= bz.e(58).then((() => bz(41849))).catch((zz => {
        throw nz = null, zz
      })), nz
    }

    function Mz() {
      return iz ??= Promise.all([lz(), (0, Ez.f)()]).then((zz => {
        let [uz] = zz;
        return uz
      }), (zz => {
        throw iz = null, zz
      })), iz
    }
  },
  36491: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Ez
    });
    const Ez = {
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
  36297: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => nz,
      h: () => iz,
      l: () => dz,
      m: () => Mz,
      o: () => tz,
      s: () => Hz,
      t: () => pz,
      v: () => Oz,
      z: () => lz
    });
    var Ez = bz(1226);
    let nz = function(zz) {
        return zz[zz.Join = 0] = "Join", zz[zz.Leave = 1] = "Leave", zz[zz.Push = 2] = "Push", zz[zz.Cursor = 3] = "Cursor", zz[zz.Submit = 4] = "Submit", zz[zz.ReloadAsVariation = 5] = "ReloadAsVariation", zz[zz.CreateFile = 6] = "CreateFile", zz[zz.RenameFile = 7] = "RenameFile", zz[zz.DeleteFile = 8] = "DeleteFile", zz[zz.SetEngine = 9] = "SetEngine", zz[zz.RenameFolder = 10] = "RenameFolder", zz
      }({}),
      iz = function(zz) {
        return zz[zz.Joined = 0] = "Joined", zz[zz.Updates = 1] = "Updates", zz[zz.Presence = 2] = "Presence", zz[zz.RemoteCursor = 3] = "RemoteCursor", zz[zz.ForceClose = 4] = "ForceClose", zz[zz.LobbyFilesChanged = 5] = "LobbyFilesChanged", zz[zz.EngineSettings = 6] = "EngineSettings", zz
      }({});

    function lz(zz) {
      return "lobby" === zz.kind ? `lobby:${zz.path}` : `codeBlock:${zz.pos[0]},${zz.pos[1]},${zz.pos[2]}`
    }

    function Mz(zz) {
      if ("lobby" === zz) return {
        kind: "lobby",
        path: Ez.i
      };
      if (zz.startsWith("lobby:")) {
        const uz = zz.slice(6);
        return pz(uz) ? {
          kind: "lobby",
          path: uz
        } : null
      }
      const uz = zz.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return uz ? {
        kind: "codeBlock",
        pos: [parseInt(uz[1]), parseInt(uz[2]), parseInt(uz[3])]
      } : null
    }

    function tz(zz) {
      return zz.endsWith(".d.ts")
    }

    function Hz(zz) {
      return zz.endsWith(".ts") && !tz(zz)
    }
    const Oz = 64;

    function pz(zz) {
      if (!zz || zz !== zz.trim()) return !1;
      if (zz.length > Oz) return !1;
      if (zz.startsWith("/") || zz.includes("\\") || zz.includes("\0")) return !1;
      if (!tz(zz) && !Hz(zz) && ! function(zz) {
          return zz.endsWith(".js") && !zz.endsWith(".min.js") && !zz.endsWith(".bundle.js")
        }(zz)) return !1;
      const uz = zz.split("/");
      for (const bz of uz)
        if ("" === bz || "." === bz || ".." === bz) return !1;
      return !0
    }
    const dz = 14e3
  },
  38407: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Ez,
      e: () => nz
    });
    const Ez = ["description", "label"];

    function nz(zz) {
      const uz = zz.type;
      return {
        type: uz,
        params: zz[uz]
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);