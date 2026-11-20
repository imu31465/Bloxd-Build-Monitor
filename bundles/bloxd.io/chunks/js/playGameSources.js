export const id = 46;
export const ids = [46];
export const modules = {
  39340: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Nu,
      g: () => Qu,
      k: () => Ku
    });
    const Eu = 6e3;

    function Ku(uu, Ru) {
      return [Math.floor(uu[0] / Ru) * Ru, Math.floor(uu[1] / Ru) * Ru, Math.floor(uu[2] / Ru) * Ru]
    }

    function Qu(uu) {
      const Ru = (null !== uu && void 0 !== uu ? uu : "").match(/-?\d+(?:\.\d+)?/g);
      return Ru && Ru.length >= 3 ? [Number(Ru[0]), Number(Ru[1]), Number(Ru[2])] : null
    }

    function mu(uu, Ru) {
      return uu === Ru ? String(uu) : `${uu}-${Ru}`
    }

    function Ju(uu, Ru, yu, Eu) {
      const Ku = [];
      let Qu = new Map;
      for (let mu = uu[2]; mu < uu[2] + Ru; mu++) {
        const Ju = new Map;
        let Nu = uu[0];
        for (; Nu < uu[0] + Ru;) {
          const Ku = Eu(Nu, yu, mu);
          let Xu = Nu;
          for (; Xu + 1 < uu[0] + Ru && Eu(Xu + 1, yu, mu) === Ku;) Xu++;
          if (null !== Ku) {
            const uu = `${Nu} ${Xu} ${Ku}`,
              Ru = Qu.get(uu);
            Ru ? (Ru.z1 = mu, Qu.delete(uu), Ju.set(uu, Ru)) : Ju.set(uu, {
              x0: Nu,
              x1: Xu,
              z0: mu,
              z1: mu,
              name: Ku
            })
          }
          Nu = Xu + 1
        }
        Ku.push(...Qu.values()), Qu = Ju
      }
      return Ku.push(...Qu.values()), Ku.sort(((uu, Ru) => uu.z0 - Ru.z0 || uu.x0 - Ru.x0)).map((uu => `x${mu(uu.x0,uu.x1)} z${mu(uu.z0,uu.z1)} ${uu.name}`))
    }

    function Nu(uu, Ru, yu, Ku) {
      let Qu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Eu;
      const Nu = [uu[0] + Ru - 1, uu[1] + Ru - 1, uu[2] + Ru - 1],
        Xu = null !== Ku && Ku.every(((Ru, yu) => Math.floor(Ru) >= uu[yu] && Math.floor(Ru) <= Nu[yu])),
        Vu = [`The chunk from ${uu.join(" ")} to ${Nu.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
      null !== Ku && Vu.push(`The player's feet are at ${Ku.map(Math.floor).join(" ")}, ${Xu?"in this chunk":"outside this chunk"}.`);
      const ru = [];
      for (let Eu = uu[1]; Eu <= Nu[1]; Eu++) {
        const Ku = Ju(uu, Ru, Eu, yu).join("; "),
          Qu = ru[ru.length - 1];
        (null === Qu || void 0 === Qu ? void 0 : Qu.boxes) === Ku ? Qu.to = Eu : ru.push({
          from: Eu,
          to: Eu,
          boxes: Ku
        })
      }
      const Bu = ru.filter((uu => "" !== uu.boxes));
      0 === Bu.length && Vu.push("It is all air.");
      let xu = Vu.join("\n").length;
      for (const Eu of Bu) {
        const uu = `y${mu(Eu.from,Eu.to)}: ${Eu.boxes}`;
        if (xu += uu.length + 1, xu > Qu) {
          Vu.push(`Cut short: the layers from y${Eu.from} up aren't shown, as there are too many blocks.`);
          break
        }
        Vu.push(uu)
      }
      return Vu.join("\n")
    }
  },
  8516: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Ku
    });
    var Eu = yu(27);

    function Ku() {
      return !Eu.d.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  36720: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => mu,
      h: () => Qu,
      i: () => Ku
    });
    const Eu = [.25, .5, 1, 2, 4, 8, 16];

    function Ku(uu, Ru) {
      const yu = Eu;
      let Ku = yu.indexOf(uu);
      return -1 === Ku && (Ku = yu.findIndex((Ru => Ru >= uu)), -1 === Ku && (Ku = yu.length - 1)), "up" === Ru ? yu[Math.min(Ku + 1, yu.length - 1)] : yu[Math.max(Ku - 1, 0)]
    }

    function Qu(uu) {
      return uu <= Eu[0]
    }

    function mu(uu) {
      return uu >= Eu[Eu.length - 1]
    }
  },
  36341: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Ku,
      g: () => Qu
    });
    let Eu = !1;

    function Ku() {
      return Eu
    }

    function Qu(uu) {
      return Eu !== uu && (Eu = uu, !0)
    }
  },
  38710: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Qu
    });
    var Eu = yu(34),
      Ku = yu(1878);

    function Qu(uu) {
      let {
        taskId: Ru,
        progress: yu
      } = uu;
      const Eu = Ku.b.get("_tasks");
      null !== Eu && void 0 !== Eu && Eu[Ru] && Ku.b.apply({
        _tasks: {
          ...Eu,
          [Ru]: {
            ...Eu[Ru],
            progress: yu
          }
        }
      })
    }
    Eu.k.subscribe("clientTaskProgress", (uu => {
      Qu(uu)
    }))
  },
  39313: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Bu,
      i: () => Su,
      j: () => Xu,
      k: () => ru,
      m: () => Nu,
      n: () => mu,
      r: () => Vu,
      u: () => pu
    });
    var Eu = yu(1878),
      Ku = yu(34),
      Qu = yu(1895);
    const mu = (0, Qu.l)((function() {
        var uu, Ru, yu, Ku;
        return {
          health: null !== (uu = Eu.b.get("_health")) && void 0 !== uu ? uu : null,
          maxHealth: null !== (Ru = Eu.b.get("_totalMaxHealth")) && void 0 !== Ru ? Ru : null,
          shield: null !== (yu = Eu.b.get("_shield")) && void 0 !== yu ? yu : null,
          maxShield: null !== (Ku = Eu.b.get("maxShield")) && void 0 !== Ku ? Ku : null
        }
      }), [], (0, Qu.i)("_health", "_totalMaxHealth", "_shield", "maxShield")),
      Ju = [{
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

    function Nu(uu, Ru) {
      return Ju[(uu ? 2 : 0) + (Ru ? 1 : 0)]
    }
    const Xu = (0, Qu.l)((function() {
      var uu;
      return null !== (uu = Eu.b.get("_aura")) && void 0 !== uu ? uu : null
    }), [], (0, Qu.i)("_aura"));

    function Vu(uu) {
      return {
        watch: Ru => (0, Ku.n)("shotPlayer", (yu => {
          let {
            playerId: Eu,
            damage: Ku,
            wasCrit: Qu,
            distance: mu
          } = yu;
          uu(Eu) && Ru({
            damage: Ku,
            wasCrit: Qu,
            distance: mu
          })
        }))
      }
    }

    function ru(uu) {
      return (0, Qu.c)("chat", (Ru => {
        let {
          serverChatMsgId: yu,
          content: Eu,
          chatterEId: Ku
        } = Ru;
        return {
          serverChatMsgId: null !== yu && void 0 !== yu ? yu : null,
          content: Eu,
          author: Ku ? uu(Ku) : null
        }
      }))
    }
    class Bu {
      constructor() {
        this.shown = null, this.needed = null, this.neededSince = 0
      }
      update(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const yu = this.shown;
        return uu !== this.needed && (this.needed = uu, this.neededSince = Ru, null === uu && (this.shown = null)), this.shown !== this.needed && Ru - this.neededSince > 200 && (this.shown = this.needed), this.shown !== yu
      }
    }

    function xu(uu) {
      return [{
        translationKey: `touchKeys:${uu}`
      }]
    }
    const Su = {
      open: xu("open"),
      close: xu("close"),
      milk: xu("milk"),
      shear: xu("shear"),
      tame: xu("tame"),
      feed: xu("feed"),
      ride: xu("ride")
    };

    function pu(uu) {
      return [{
        translationKey: "touchKeys:tameWith"
      }, " ", {
        icon: uu
      }]
    }
  },
  40328: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Ju,
      f: () => mu
    });
    var Eu = yu(3101);
    let Ku = null,
      Qu = null;

    function mu() {
      return Qu ??= yu.e(208).then((() => yu(36206))).then((uu => {
        let {
          ITEM_SPRITES: Ru,
          ITEM_SPRITES_WITHOUT_FILE: yu,
          ITEM_FILES_WITHOUT_SPRITE: Qu
        } = uu;
        Ku = function(uu, Ru, yu) {
          const Ku = new Set,
            Qu = (0, Eu.w)(Ru);
          let mu = 0;
          for (const [Eu, Ju] of uu.entries()) Eu === Qu[mu] ? mu++ : Ku.add(Ju);
          if ("" !== yu)
            for (const Ju of yu.split(Eu.s)) Ku.add(Ju);
          return Ku
        }(Ru.split(Eu.s), yu, Qu)
      }), (uu => {
        throw Qu = null, uu
      })), Qu
    }

    function Ju(uu) {
      var Ru, yu;
      return null !== (Ru = null === (yu = Ku) || void 0 === yu ? void 0 : yu.has(uu)) && void 0 !== Ru && Ru
    }
  },
  39330: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Eu,
      f: () => Qu,
      j: () => Ku
    });
    const Eu = 128;

    function Ku(uu, Ru, yu, Eu) {
      const Ku = 2 * Ru - 1,
        Qu = 1 - 2 * yu,
        mu = uu(0) - Ku * uu(3),
        Ju = uu(4) - Ku * uu(7),
        Nu = uu(8) - Ku * uu(11),
        Xu = uu(1) - Qu * uu(3),
        Vu = uu(5) - Qu * uu(7),
        ru = uu(9) - Qu * uu(11);
      Eu[0] = Ju * ru - Nu * Vu, Eu[1] = Nu * Xu - mu * ru, Eu[2] = mu * Vu - Ju * Xu;
      const Bu = Eu[0] * uu(3) + Eu[1] * uu(7) + Eu[2] * uu(11) < 0 ? -1 : 1,
        xu = Math.hypot(Eu[0], Eu[1], Eu[2]) * Bu;
      return Eu[0] /= xu, Eu[1] /= xu, Eu[2] /= xu, Eu
    }

    function Qu(uu, Ru, yu, Eu, Ku, Qu) {
      const mu = [Math.floor(Ru[0]), Math.floor(Ru[1]), Math.floor(Ru[2])],
        Ju = [0, 0, 0],
        Nu = [1 / 0, 1 / 0, 1 / 0],
        Xu = [1 / 0, 1 / 0, 1 / 0];
      for (let Bu = 0; Bu < 3; Bu++) Ju[Bu] = Math.sign(yu[Bu]), 0 !== Ju[Bu] && (Xu[Bu] = Math.abs(1 / yu[Bu]), Nu[Bu] = (mu[Bu] + (Ju[Bu] > 0 ? 1 : 0) - Ru[Bu]) / yu[Bu]);
      let Vu = 0,
        ru = Math.abs(yu[0]) > Math.abs(yu[1]) ? 0 : 1;
      for (Math.abs(yu[2]) > Math.abs(yu[ru]) && (ru = 2); Vu <= Eu;) {
        if (uu(mu[0], mu[1], mu[2])) return Ku[0] = mu[0], Ku[1] = mu[1], Ku[2] = mu[2], Qu[0] = 0, Qu[1] = 0, Qu[2] = 0, Qu[ru] = -Ju[ru], !0;
        ru = Nu[0] < Nu[1] ? 0 : 1, Nu[2] < Nu[ru] && (ru = 2), Vu = Nu[ru], mu[ru] += Ju[ru], Nu[ru] += Xu[ru]
      }
      return !1
    }
  },
  39305: (uu, Ru, yu) => {
    function Eu(uu, Ru, yu) {
      return Math.hypot(uu[0] - Ru[0], uu[1] - Ru[1], uu[2] - Ru[2]) < yu + .5
    }
    yu.d(Ru, {
      c: () => Eu
    })
  },
  38723: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Vu
    });
    var Eu = yu(1199),
      Ku = yu(1289),
      Qu = yu(27),
      mu = yu(1269),
      Ju = yu(1280),
      Nu = yu(1467),
      Xu = yu(36322);

    function Vu(uu) {
      let {
        uu: Ru,
        Ru: yu
      } = uu;
      const Vu = null !== Ru && void 0 !== Ru ? Ru : (0, Ju.c)().gameNameWithVariation;
      (0, Eu.J)(Vu) && ((0, Xu.n)(), (0, mu.lb)((() => {
        console.log("Received matchmaking order from game server to game", Ru), (0, Qu.i)("inGameReplay"), (0, Nu.navigatePreserveSearch)((0, Ku.b)(Vu, null !== yu && void 0 !== yu ? yu : void 0))
      }), "video_start"))
    }
  },
  38923: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Qu
    });
    var Eu = yu(34),
      Ku = yu(1915);

    function Qu(uu) {
      var Ru, yu;
      const Qu = (0, Ku.o)(null !== (Ru = null === (yu = Ku.x.toggleFreeCam) || void 0 === yu ? void 0 : yu[0]) && void 0 !== Ru ? Ru : null);
      Eu.k.Op("showBottomMessage", {
        message: `Free Camera ${uu?"Enabled":"Disabled"}${Qu?` - Press ${Qu} to toggle`:""}`,
        timeoutLength: 2e3,
        type: "Warning"
      })
    }
  },
  38714: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Nu,
      f: () => mu,
      i: () => Ju,
      m: () => Xu
    });
    var Eu = yu(34),
      Ku = yu(1311);
    const Qu = new Map;

    function mu(uu, Ru) {
      Eu.k.Op("newUiRequest", {
        id: uu,
        clientParameters: Ru
      }, !0)
    }

    function Ju(uu) {
      Eu.k.Op("removeUiRequest", uu, !0);
      const Ru = Qu.get(uu);
      Ru && (Ru.tearDownNotification(), Qu.delete(uu))
    }

    function Nu() {
      Eu.k.Op("clearUiRequests");
      for (const uu of Qu.values()) uu.tearDownNotification();
      Qu.clear()
    }

    function Xu(uu, Ru, yu) {
      const Eu = Ku.NotificationProvider.showPromptPopup({
        title: Ru,
        confirmText: "general:yes",
        cancelText: "general:no",
        unlockPointerKey: "uiRequestPopup"
      });
      Qu.set(uu, Eu), Eu.getResult().then((Ru => {
        Qu.delete(uu), "notificationTornDown" !== Ru && yu(Ru)
      }))
    }
  },
  39337: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => ru,
      c: () => Bu
    });
    var Eu = yu(212),
      Ku = yu(39340);
    const Qu = 20;

    function mu(uu) {
      return uu.map(Math.floor).join(" ")
    }

    function Ju(uu) {
      return null === uu.amount || 1 === uu.amount ? uu.name : `${uu.amount} ${uu.name}`
    }
    var Nu = yu(39346),
      Xu = yu(1878),
      Vu = yu(1280);

    function ru(uu, Ru) {
      if (!uu) return Nu.d;
      const yu = uu.playerFeet();
      if (!yu) return "The player isn't in the world yet, so no blocks can be seen.";
      const Qu = Eu.f.jS,
        mu = (0, Ku.k)(null !== Ru && void 0 !== Ru ? Ru : yu, Qu),
        Ju = uu.chunkBlocks(mu);
      return Ju ? (0, Ku.c)(mu, Qu, ((Ru, yu, Eu) => {
        const Ku = Ju(Ru, yu, Eu);
        return 0 === Ku ? null : uu.blockName(Ku).split("|")[0]
      }), yu) : `The chunk from ${mu.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${yu.map(Math.floor).join(" ")}.`
    }

    function Bu(uu) {
      var Ru, yu, Eu;
      if (!uu) return Nu.e;
      const Ku = uu.playerFeet();
      if (!Ku) return "The player isn't in the world yet, so nothing in it can be seen.";
      const {
        slots: ru,
        heldSlot: Bu
      } = uu.inventory();
      return function(uu) {
        const Ru = [];
        null !== uu.game && Ru.push(`Game: ${uu.game}.`);
        const yu = null === uu.health ? "" : `, health ${Math.round(uu.health)}${null===uu.maxHealth?"":` of ${Math.round(uu.maxHealth)}`}`;
        Ru.push(`The player (the creator) stands at ${mu(uu.position)}${yu}, ${uu.creative?"in":"not in"} creative mode.`);
        const Eu = uu.slots[uu.heldSlot];
        Ru.push(Eu ? `Holding (slot ${uu.heldSlot}): ${Ju(Eu)}.` : `Holding nothing (slot ${uu.heldSlot} is empty).`);
        const Ku = uu.slots.flatMap(((uu, Ru) => uu ? [`slot ${Ru}: ${Ju(uu)}`] : []));
        Ru.push(Ku.length > 0 ? `Inventory: ${Ku.join(", ")}.` : "Inventory: empty.");
        const Nu = Ru => Math.hypot(Ru.position[0] - uu.position[0], Ru.position[1] - uu.position[1], Ru.position[2] - uu.position[2]),
          Xu = [...uu.nearby].sort(((uu, Ru) => Nu(uu) - Nu(Ru)));
        if (0 === Xu.length) Ru.push("No other players or mobs are near enough to see.");
        else {
          Ru.push("Near them, nearest first:");
          for (const uu of Xu.slice(0, Qu)) {
            const yu = "player" === uu.kind ? `player "${uu.name||"?"}"` : uu.name && uu.name !== uu.kind ? `${uu.kind} "${uu.name}"` : uu.kind,
              Eu = Math.round(Nu(uu));
            Ru.push(`- ${yu} at ${mu(uu.position)}, ${Eu} block${1===Eu?"":"s"} away`)
          }
          Xu.length > Qu && Ru.push(`- and ${Xu.length-Qu} more further away`)
        }
        return uu.droppedItems > 0 && Ru.push(`${uu.droppedItems} dropped item${1===uu.droppedItems?" is":"s are"} on the ground nearby.`), Ru.join("\n")
      }({
        game: null !== (Ru = (0, Vu.c)().gameNameWithVariation) && void 0 !== Ru ? Ru : null,
        position: Ku,
        health: null !== (yu = Xu.b.get("_health")) && void 0 !== yu ? yu : null,
        maxHealth: null !== (Eu = Xu.b.get("_totalMaxHealth")) && void 0 !== Eu ? Eu : null,
        creative: !0 === Xu.b.get("creative"),
        heldSlot: Bu,
        slots: ru,
        nearby: uu.nearby(),
        droppedItems: uu.droppedItems()
      })
    }
  },
  38746: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Ju,
      i: () => Nu,
      l: () => Xu
    });
    var Eu = yu(1199),
      Ku = yu(1001),
      Qu = yu(36632),
      mu = yu(34);

    function Ju(uu) {
      let {
        lobbyName: Ru,
        gameNameWithVariation: yu
      } = uu;
      return !(0, Eu.N)(Ru) || null !== yu && (yu.startsWith("testGym") || (0, Ku.i)(yu))
    }

    function Nu(uu) {
      return uu.WR === Qu.e.Leave || uu.WR === Qu.e.Cursor
    }

    function Xu(uu) {
      mu.k.Op("codeCollab", {
        type: uu.WR,
        docKey: uu.jR,
        version: uu.HR,
        editorCount: uu.dR,
        peers: uu.bR,
        updates: uu.CR,
        playerId: uu.kR,
        playerName: uu.eR,
        colour: uu.AR,
        anchor: uu.DR,
        head: uu.MR,
        existingCursors: uu.IR,
        files: uu.GR,
        engineSettings: uu.UR
      })
    }
  },
  40286: (uu, Ru, yu) => {
    yu.d(Ru, {
      B: () => gu,
      F: () => Gu,
      I: () => lu,
      L: () => Iu,
      N: () => Pu,
      O: () => hu,
      S: () => nu,
      d: () => iu,
      e: () => Lu,
      g: () => Du,
      h: () => Yu,
      j: () => Mu,
      m: () => Au,
      p: () => cu,
      s: () => Uu,
      t: () => tu,
      v: () => su,
      x: () => Ou
    });
    var Eu = yu(1354),
      Ku = yu(34),
      Qu = yu(1250),
      mu = yu(2306),
      Ju = yu(4586),
      Nu = yu(4549);
    let Xu, Vu = !1,
      ru = !1,
      Bu = !1,
      xu = !1;
    const Su = 1300,
      pu = 3e3;
    let Tu = 0,
      Wu = !1,
      ju = !1,
      Hu = 0;
    const du = 2;
    let bu = !1,
      Cu = !1;
    const ku = new Set,
      eu = new Set;

    function Au() {
      return Vu
    }

    function Du() {
      return ju
    }

    function Mu() {
      return Cu
    }

    function Iu() {
      return (0, Qu.r)() && !Cu
    }

    function Gu(uu) {
      let Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (uu !== Cu) {
        Cu = uu;
        for (const uu of [...eu]) uu(Cu);
        Ru && hu()
      }
    }

    function Uu(uu) {
      return eu.add(uu), () => {
        eu.delete(uu)
      }
    }

    function nu() {
      (0, Ju.h)(mu.t.Menu, (0, Qu.r)() ? 0 : mu.t.Menu)
    }

    function su() {
      ju = !1, Hu = 0, nu(), hu()
    }

    function tu(uu) {
      return ku.add(uu), () => {
        ku.delete(uu)
      }
    }

    function lu(uu) {
      ru = !1, uu !== Vu && (Vu = uu, xu = !1, clearTimeout(Xu), Bu = !Vu && bu, Vu ? (Wu = !1, ju = !1, Hu = 0) : Iu() && !bu && (ju = !0), bu = !1, Vu && !Iu() && qu(), vu(), Bu && hu())
    }

    function gu(uu) {
      uu !== Wu && (Wu = uu, uu || hu())
    }

    function cu() {
      ru = !1, xu || !0 !== wu() || (xu = !0, clearTimeout(Xu), Xu = setTimeout(zu, Su))
    }

    function Lu() {
      return (!ru || performance.now() - Tu > pu) && (ru = (0, Nu.I)().lockPointer(), Tu = performance.now()), ru
    }

    function zu() {
      Fu() && Zu() && Lu()
    }

    function Fu() {
      return Iu() && !Vu && !Wu && !(0, Eu.g)()
    }

    function wu() {
      var uu;
      return "undefined" === typeof navigator || null === (uu = navigator.userActivation) || void 0 === uu ? void 0 : uu.isActive
    }

    function Zu() {
      return Bu && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== wu()
    }

    function hu() {
      Iu() ? Fu() && !ju && Zu() && Lu() : Vu && !bu && qu()
    }

    function Pu() {
      ju ? navigator.vendor.startsWith("Apple") ? ou() : Hu = du : hu()
    }

    function iu() {
      Hu > 0 && 0 === --Hu && ou()
    }

    function Yu() {
      Hu = 0
    }

    function ou() {
      Fu() && !0 === wu() && Lu()
    }

    function qu() {
      bu = !0, (0, Nu.I)().unlockPointer()
    }

    function Ou() {
      ru = !1, Bu = !1, xu = !1, clearTimeout(Xu), Wu = !1, ju = !1, Hu = 0, bu = !1;
      const uu = Vu;
      Vu = !1, uu && vu()
    }

    function vu() {
      for (const uu of [...ku]) uu(Vu);
      Ku.k.Op("pointerLockUpdate", Vu)
    }
  },
  40256: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Bu,
      e: () => Ju,
      f: () => ru,
      i: () => Xu,
      k: () => mu,
      m: () => Vu,
      o: () => Nu
    });
    let Eu = null,
      Ku = null,
      Qu = null;

    function mu(uu) {
      Eu = uu
    }

    function Ju() {
      return Eu
    }

    function Nu(uu) {
      Ku = uu
    }

    function Xu() {
      return Ku
    }

    function Vu(uu) {
      Qu = uu
    }

    function ru() {
      return Qu
    }

    function Bu() {
      var uu, Ru;
      return !0 === (null === (uu = Ku) || void 0 === uu || null === (Ru = uu.currentViewer) || void 0 === Ru ? void 0 : Ru.inPlayback)
    }
  },
  40311: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => mu,
      d: () => Qu,
      f: () => Ju
    });
    var Eu = yu(40160),
      Ku = yu(40173);

    function Qu(uu) {
      if (uu.queries.drawCensus() < Eu.Hb.BYTES) return null;
      const Ru = uu.memoryData(uu.scratch(), Eu.Hb.BYTES, 4, "the draw census");
      return null === Ru ? null : {
        terrainOpaque: Eu.Hb.terrainOpaque(Ru, 0),
        terrainTransparent: Eu.Hb.terrainTransparent(Ru, 0),
        terrainPack: Eu.Hb.terrainPack(Ru, 0),
        earthSky: Eu.Hb.earthSky(Ru, 0),
        skyMeshes: Eu.Hb.skyMeshes(Ru, 0),
        regular: Eu.Hb.regular(Ru, 0),
        thin: Eu.Hb.thin(Ru, 0),
        line: Eu.Hb.line(Ru, 0),
        text: Eu.Hb.text(Ru, 0),
        particles: Eu.Hb.particles(Ru, 0)
      }
    }

    function mu(uu) {
      const {
        terrainOpaque: Ru,
        terrainTransparent: yu,
        earthSky: Eu,
        skyMeshes: Ku,
        regular: Qu,
        thin: mu,
        line: Ju,
        text: Nu,
        particles: Xu
      } = uu;
      return Ru + yu + Eu + Ku + Qu + mu + Ju + Nu + Xu
    }

    function Ju() {
      const uu = (0, Ku.i)();
      return !0 === (null === uu || void 0 === uu ? void 0 : uu.isCoreRunning) ? function(uu) {
        const Ru = Qu(uu);
        if (null === Ru) return [];
        const {
          terrainOpaque: yu,
          terrainTransparent: Eu,
          terrainPack: Ku,
          earthSky: Ju,
          skyMeshes: Nu,
          regular: Xu,
          thin: Vu,
          line: ru,
          text: Bu,
          particles: xu
        } = Ru;
        return [{
          label: "Drawn",
          value: `${mu(Ru)}`
        }, {
          label: "Terrain",
          value: `${yu} opaque / ${Eu} transparent (${Ku} shader pack)`
        }, {
          label: "Meshes / Thin bases",
          value: `${Xu} / ${Vu}`
        }, {
          label: "Text / Lines",
          value: `${Bu} / ${ru}`
        }, {
          label: "Sky / Particles",
          value: `${Ju+Nu} / ${xu}`
        }]
      }(uu.api) : []
    }
  },
  40313: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      loadIcons: () => Mu,
      setIconFileOverrides: () => Iu,
      wasmIconLookups: () => Lu,
      wasmIconQueries: () => cu
    });
    var Eu = yu(4254),
      Ku = yu(4231),
      Qu = yu(40316),
      mu = yu(1867),
      Ju = yu(1855),
      Nu = yu(3093),
      Xu = yu(3101);
    let Vu = null,
      ru = null;

    function Bu(uu) {
      const Ru = uu.startsWith(Xu.j),
        [yu, Eu = yu, Ku = yu] = (Ru ? uu.slice(Xu.j.length) : uu).split(Xu.g);
      return {
        top: yu,
        left: Eu,
        right: Ku,
        half: Ru
      }
    }

    function xu(uu) {
      const Ru = null === Vu ? void 0 : (0, Nu.b)(uu),
        yu = void 0 === Ru ? 0 : Vu.codes[Ru];
      return 0 === yu ? void 0 : Vu.pool[yu - 1]
    }
    var Su = yu(3088),
      pu = yu(4218),
      Tu = yu(4247),
      Wu = yu(40324);
    const ju = "item:";
    let Hu = null,
      du = null,
      bu = null,
      Cu = null,
      ku = !1,
      eu = !1,
      Au = null,
      Du = 0;

    function Mu() {
      return eu || (eu = !0, (0, Tu.g)().then((uu => {
        uu && (0, mu.d)()
      }))), bu ??= Promise.all([(0, Su.h)(), (ru ??= yu.e(1).then((() => yu(42180))).then((uu => {
        let {
          BLOCK_FACE_RUNS: Ru,
          BLOCK_FACES: yu,
          MAX_FACE_ITEM_ID: Eu
        } = uu;
        Vu = {
          codes: (0, Xu.A)(Ru, Eu + 1),
          pool: yu.split(Xu.s).map(Bu)
        }
      }), (uu => {
        throw ru = null, uu
      })), ru), (0, Wu.g)(), yu.e(189).then((() => yu(9079)))]).then((uu => {
        let [, , Ru, yu] = uu;
        Ru.followBundledTextures(), Hu = Ru, du = yu, (0, mu.d)()
      }), (uu => {
        bu = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", uu)
      })), bu
    }

    function Iu(uu) {
      Au = uu, Du++, (0, mu.d)()
    }

    function Gu(uu) {
      var Ru, yu;
      return null !== (Ru = null === (yu = Au) || void 0 === yu ? void 0 : yu.itemSprite(uu)) && void 0 !== Ru ? Ru : Hu.itemSpriteUrl(uu)
    }

    function Uu(uu) {
      var Ru, yu;
      return null !== (Ru = null === (yu = Au) || void 0 === yu ? void 0 : yu.blockTexture(uu)) && void 0 !== Ru ? Ru : Hu.blockTextureUrl(uu)
    }

    function nu(uu) {
      var Ru;
      return null !== (Ru = (0, Su.e)(uu)) && void 0 !== Ru ? Ru : uu
    }

    function su(uu, Ru) {
      var yu, Eu, Ku;
      return null !== (yu = null !== (Eu = null !== (Ku = Uu(uu)) && void 0 !== Ku ? Ku : null === Ru || void 0 === Ru ? void 0 : Ru.rotated[uu]) && void 0 !== Eu ? Eu : null === Ru || void 0 === Ru ? void 0 : Ru.animated[uu]) && void 0 !== yu ? yu : Hu.notFoundUrl()
    }

    function tu(uu) {
      return void 0 !== (0, Nu.b)(uu) ? uu : /^[1-9][0-9]*$/.test(uu) ? (0, Nu.f)(Number(uu)) : void 0
    }

    function lu(uu) {
      var Ru;
      if (uu.startsWith(ju)) {
        var yu;
        const Ru = (0, Su.e)(uu.slice(5));
        return null !== (yu = void 0 === Ru ? null : Gu(Ru)) && void 0 !== yu ? yu : Hu.notFoundUrl()
      }
      return null !== (Ru = Hu.particleUrl(uu)) && void 0 !== Ru ? Ru : Hu.notFoundUrl()
    }

    function gu(uu, Ru) {
      return "StairsBlock" === uu ? uu : Ru ? "SlabBlock" : "CubeBlock"
    }
    const cu = {
        async blockIcon(uu) {
          var Ru;
          let {
            name: Eu,
            size: Ku,
            lineWidth: Qu
          } = uu;
          await Mu();
          const Ju = null !== (Ru = tu(Eu)) && void 0 !== Ru ? Ru : Eu,
            Xu = (0, Tu.b)(Ju, Ku, Qu);
          if (null !== Xu) return Xu;
          const Vu = xu(Ju),
            ru = (0, Nu.b)(Ju),
            Bu = void 0 === ru || null === du ? void 0 : du.itemTypeNameOf(ru);
          if (null === Hu || void 0 === Vu) return "";
          const Su = [Vu.top, Vu.left, Vu.right].some((uu => null === Uu(uu))),
            Wu = Su ? await (Cu ??= yu.e(201).then((() => yu(34131))).then((uu => (ku && (ku = !1, (0, mu.d)()), {
              rotated: uu.rotatedBlockTextures,
              animated: uu.animatedBlockTextures
            })), (uu => (Cu = null, ku = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", uu), null))), Cu) : null;
          if (Su && null === Wu) return "";
          const ju = {
              top: su(Vu.top, Wu),
              left: su(Vu.left, Wu),
              right: su(Vu.right, Wu),
              itemType: gu(Bu, Vu.half)
            },
            bu = 0 === Du ? Ju : `${Ju}#${Du}`;
          return (await (0, pu.d)()).drawBlockIconUrl(bu, Ku, Qu, (() => ju))
        }
      },
      Lu = {
        itemIcon: function(uu) {
          var Ru, yu;
          if (null === Hu) return Mu(), Ju.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(uu);
          if ((0, Ku.f)(uu)) return {
            kind: "icon",
            url: null !== (yu = Hu.ingameIconUrl(uu)) && void 0 !== yu ? yu : Hu.notFoundUrl()
          };
          if (uu.startsWith(Ku.b)) return {
            kind: "icon",
            url: lu(uu.slice(Ku.b.length))
          };
          if (0 === (0, Nu.g)()) return (0, Qu.e)(), Ju.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(uu);
          const mu = null !== (Ru = tu(uu)) && void 0 !== Ru ? Ru : uu,
            Xu = (0, Nu.b)(mu),
            Vu = void 0 === Xu ? void 0 : du.itemTypeNameOf(Xu);
          if (void 0 !== xu(mu)) return {
            kind: "drawnBlock"
          };
          const ru = function(uu) {
            var Ru;
            return null !== (Ru = Gu(nu(uu))) && void 0 !== Ru ? Ru : Hu.notFoundUrl()
          }(mu);
          if ((0, Tu.e)(mu) && ! function(uu) {
              return null !== Au && (null !== Au.itemSprite(nu(uu)) || null !== Au.model(uu))
            }(mu)) return {
            kind: "model",
            url: ru
          };
          if ("Gun" === Vu) return {
            kind: "gun",
            url: ru
          };
          if (void 0 !== Xu && "GrayscaleArmour" === du.itemTypeOf(Xu) || Object.hasOwn(Eu.d, mu)) {
            var Bu;
            const Ru = null !== (Bu = (0, Eu.g)(uu)) && void 0 !== Bu ? Bu : (0, Eu.g)(mu);
            if (Ru) return {
              kind: "item",
              url: ru,
              tint: Ru
            }
          }
          return {
            kind: "item",
            url: ru
          }
        },
        hasIcon: function(uu) {
          return void 0 !== tu(uu) || (0, Ku.f)(uu) || uu.startsWith(Ku.b)
        },
        isItemName: function(uu) {
          return void 0 !== tu(uu)
        }
      }
  },
  40253: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      attachPlayGameSources: () => hy,
      playGameSources: () => Zy
    });
    var Eu = yu(1855),
      Ku = yu(40256),
      Qu = yu(4549),
      mu = yu(40173),
      Ju = yu(40265),
      Nu = yu(39313),
      Xu = yu(34),
      Vu = yu(4564),
      ru = yu(4562),
      Bu = yu(40205),
      xu = yu(40235),
      Su = yu(40274),
      pu = yu(40217);
    (0, pu.m)(Vu.$b.Chat, (uu => {
      if (uu.payloadKind !== ru.ac.Msgpack) return;
      const Ru = function(uu) {
        if (null === uu || "object" !== typeof uu || !("content" in uu)) return null;
        const {
          chatMsgId: Ru,
          content: yu,
          chatterEId: Eu
        } = uu;
        return {
          serverChatMsgId: null !== Ru && void 0 !== Ru ? Ru : void 0,
          content: yu,
          chatterEId: void 0 === Eu || null === Eu ? void 0 : String(Eu)
        }
      }((0, Bu.e)(uu.payload));
      null !== Ru && Xu.k.Op("chat", Ru, !0)
    }));
    const Tu = {
        chatReceived: (0, Nu.k)((function(uu) {
          var Ru, yu, Eu;
          return {
            id: uu,
            name: null !== (Ru = Su.g.getName(uu)) && void 0 !== Ru ? Ru : null,
            local: (0, xu.h)() === uu,
            profileEffect: null !== (yu = null === (Eu = (0, Su.i)(uu)) || void 0 === Eu ? void 0 : Eu.profileEffect) && void 0 !== yu ? yu : null
          }
        }))
      },
      Wu = {
        sendChatMessage(uu) {
          var Ru;
          let {
            Dm: yu,
            channelName: Eu
          } = uu;
          null === (Ru = (0, mu.i)()) || void 0 === Ru || Ru.clientApi.sendChat(yu, Eu)
        }
      };
    var ju = yu(212),
      Hu = yu(1878),
      du = yu(40160),
      bu = yu(39305);
    const Cu = [0, 0, 0],
      ku = {
        codeBlockClickable(uu) {
          var Ru;
          const yu = (0, mu.i)();
          if (null === yu || void 0 === yu || !yu.isSessionLive) return !1;
          const Eu = yu.api;
          if (0 !== (du.v.playerFlags(Eu.apiView, 0) & du.Nd.Crouching)) return !1;
          const Ku = Eu.queries.directorEntity(Eu.localId) >= du.Ab.BYTES ? Eu.memoryData(Eu.scratch(), du.Ab.BYTES, 8, "the local player's DirectorEntity") : null;
          if (null === Ku) return !1;
          for (let Qu = 0; Qu < 3; Qu++) Cu[Qu] = du.Ab.feet(Ku, 0, Qu);
          return Cu[1] += du.Ab.eyeHeight(Ku, 0), (0, bu.c)(Cu, uu, null !== (Ru = Hu.b.get("blockReach")) && void 0 !== Ru ? Ru : ju.f.zW)
        }
      },
      eu = {
        clickCodeBlock(uu) {
          var Ru;
          null === (Ru = (0, mu.i)()) || void 0 === Ru || Ru.clickCodeBlock(uu)
        }
      };
    var Au = yu(40185),
      Du = yu(40276),
      Mu = yu(1001),
      Iu = yu(38792),
      Gu = yu(4546),
      Uu = yu(40197),
      nu = yu(40177),
      su = yu(40199);

    function tu(uu) {
      if (null === uu) return null;
      const Ru = [];
      for (const yu of uu) {
        const uu = Object.keys(yu)[0];
        if ("cu" === uu) {
          const {
            str: uu,
            style: Eu,
            clickableUrl: Ku
          } = yu.cu, Qu = Object.keys(uu)[0], mu = uu[Qu];
          "string" !== Qu && "styledEntityName" !== Qu && "styledTranslatedText" !== Qu || Ru.push({
            str: mu,
            style: Eu,
            clickableUrl: Ku
          })
        } else Ru.push(yu[uu])
      }
      return Ru
    }
    const lu = {
      screenPos(uu) {
        var Ru, yu;
        return null !== (Ru = null === (yu = (0, mu.i)()) || void 0 === yu ? void 0 : yu.renderFrame.projectWorldPosToScreenPos(uu)) && void 0 !== Ru ? Ru : {
          x: 0,
          y: 0
        }
      }
    };
    let gu = !1;

    function cu() {
      gu || (gu = !0, (0, pu.m)(Vu.$b.ProgressBarUpdate, (uu => {
        const Ru = (0, su.g)(uu);
        (0, su.d)(Ru) && Xu.k.Op("progressBarUpdate", Ru, !0)
      })), (0, pu.m)(Uu.y, (uu => {
        const Ru = (0, su.f)(Uu.y, uu);
        Ru && Xu.k.Op("middleScreenBarInitiate", {
          duration: Ru.VE,
          rE: Ru.rE,
          horizBarRemOffset: Ru.xE
        }, !0)
      })), (0, pu.m)(Vu.$b.RemoveMiddleScreenBar, (() => {
        Xu.k.Op("middleScreenBarRemove")
      })), (0, pu.m)(Uu.db, (uu => {
        const Ru = (0, su.f)(Uu.db, uu);
        if (Ru) {
          var yu;
          const uu = Ru.yy ? null === (yu = (0, mu.i)()) || void 0 === yu ? void 0 : yu.renderFrame.projectDirectionToScreenPos(Ru.yy) : void 0;
          Xu.k.Op("sendHitmarker", {
            Ry: Ru.Ry,
            screenPos: uu
          }, !0)
        }
      })), (0, pu.m)(Uu.ib, (uu => {
        const Ru = (0, su.f)(Uu.ib, uu);
        if (Ru) {
          const {
            id: uu,
            position: yu,
            style: Eu,
            aK: Ku,
            uQ: Qu
          } = Ru;
          Xu.k.Op("setDirectionArrow", {
            id: uu,
            position: yu,
            style: Eu,
            text: tu(Ku),
            uQ: Qu
          }, !0)
        }
      })), (0, pu.m)(Uu.f, (uu => {
        const Ru = (0, su.f)(Uu.f, uu);
        Ru && Xu.k.Op("clearDirectionArrow", {
          id: Ru.id
        }, !0)
      })), (0, pu.m)(Uu.s, (uu => {
        const Ru = (0, su.f)(Uu.s, uu);
        Ru && Xu.k.Op("flyingMiddleMessage", {
          content: tu(Ru.MQ),
          IQ: Ru.IQ,
          GQ: Ru.GQ
        }, !0)
      })), (0, pu.m)(Vu.$b.WorldVariation, (uu => {
        const Ru = (0, su.g)(uu);
        if ("string" === typeof Ru) {
          const uu = Ru === Mu.d ? null : {
            message: `Currently loaded as variation: ${Ru}`,
            type: "Warning"
          };
          Xu.k.Op("showPermanentBottomMessage", uu, !0)
        }
      })), (0, pu.m)(Uu.N, (uu => {
        const Ru = (0, su.f)(Uu.N, uu);
        Ru && function(uu, Ru) {
          const {
            type: yu,
            params: Eu
          } = (0, Iu.d)(Ru), Ku = {
            ...Eu
          };
          for (const Qu of Iu.b) Ku[Qu] && (Ku[Qu] = tu(Ku[Qu]));
          Gu.d.queueQTE(uu, yu, Ku).getResult().then((Ru => {
            var yu;
            "boolean" === typeof Ru && (null === (yu = (0, mu.i)()) || void 0 === yu || yu.send(nu.d.QteResponse, {
              qteId: uu,
              qteResponse: Ru
            }))
          }))
        }(Ru.id, Ru.Mu)
      })), (0, pu.m)(Uu.Y, (uu => {
        const Ru = (0, su.f)(Uu.Y, uu);
        "number" === typeof Ru && Gu.d.cancelQTE(Ru)
      })), (0, pu.g)((() => {
        Gu.d.reset(), Xu.k.Op("showPermanentBottomMessage", null, !0)
      })), (0, pu.i)((() => {
        Gu.d.reset()
      })), (0, pu.m)(Vu.$b.EditItemCraftingRecipes, (uu => {
        const Ru = (0, su.g)(uu);
        (0, su.d)(Ru) && Xu.k.Op("craftingRecipesEdited", {
          itemName: Ru.craftingRecipeItemName,
          recipesForItem: Ru.recipesForItem
        })
      })), (0, pu.m)(Uu.X, (uu => {
        const Ru = (0, su.f)(Uu.X, uu);
        Ru && Xu.k.Op("craftingRecipesEdited", {
          itemName: Ru.eK,
          recipesForItem: []
        })
      })))
    }
    var Lu = yu(27);
    const zu = [{
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

    function Fu(uu) {
      return du.v.playerFlags(uu.api.apiView, 0)
    }
    const wu = {
        freeCamera: (0, xu.e)((uu => () => {
          const Ru = uu.isSessionLive && 0 !== (Fu(uu) & du.Nd.FreeCamMoves),
            yu = uu.freeCameraAllowed() && null === Lu.d.get("scriptedCameraFacing");
          return zu[(yu ? 2 : 0) + (Ru ? 1 : 0)]
        }), zu[0], (uu => (0, Qu.v)(uu)))
      },
      Zu = {
        setFreeCameraMovesFly: uu => {
          var Ru;
          null === (Ru = (0, mu.i)()) || void 0 === Ru || Ru.setFreeCameraMovesFly(uu)
        }
      },
      hu = {
        freeCameraPos: () => {
          const uu = (0, mu.i)();
          return null !== uu && void 0 !== uu && uu.isSessionLive && uu.renderFrame.hasView && 0 !== (Fu(uu) & du.Nd.FreeCam) ? uu.renderFrame.cameraPosition : null
        }
      };
    var Pu = yu(38923);
    let iu = !1,
      Yu = !1;

    function ou() {
      const uu = (0, mu.i)();
      if (null === uu || void 0 === uu || !uu.isSessionLive) return void(iu = !1);
      const Ru = 0 !== (du.v.playerFlags(uu.api.apiView, 0) & du.Nd.FreeCam);
      Ru !== iu && (iu = Ru, (0, Pu.c)(Ru))
    }
    var qu = yu(343),
      Ou = yu(36788),
      vu = yu(1895);
    var au = yu(40280),
      fu = yu(40232);
    const uR = {
      interactPrompt: null,
      blockText: null,
      neededTool: null
    };
    let RR = "off";

    function yR(uu) {
      var Ru;
      return null === uu ? null : {
        label: null !== (Ru = (0, au.e)(uu, "interactionPrompt")) && void 0 !== Ru ? Ru : null
      }
    }
    const ER = new Map([
      [du.wc.Open, {
        label: Nu.i.open
      }],
      [du.wc.Close, {
        label: Nu.i.close
      }],
      [du.wc.Milk, {
        label: Nu.i.milk
      }],
      [du.wc.Shear, {
        label: Nu.i.shear
      }],
      [du.wc.Tame, {
        label: Nu.i.tame
      }],
      [du.wc.Feed, {
        label: Nu.i.feed
      }],
      [du.wc.Ride, {
        label: Nu.i.ride
      }]
    ]);
    class KR {
      constructor() {
        this.target = uR, this.yV = du.ad, this.optionName = null, this.pickaxe = new Nu.e
      }
      read(uu) {
        var Ru;
        const yu = du.v.targetBlockId(uu.api.apiView, 0);
        yu !== this.yV && (this.yV = yu, this.optionName = yu === du.ad ? null : `${uu.tables.getMetaInfo(yu).rootName}CrosshairText`);
        const Eu = null === this.optionName ? null : null !== (Ru = uu.tables.getClientOption(this.optionName)) && void 0 !== Ru ? Ru : null;
        this.pickaxe.update(function(uu, Ru) {
          var yu, Eu, Ku;
          if (0 === (du.v.playerFlags(uu.api.apiView, 0) & du.Nd.Breaking) || Ru === du.ad || 0 === Ru) return null;
          const {
            tables: Qu
          } = uu;
          if (!0 === Qu.getClientOption("creative")) return null;
          const mu = Qu.nameOfId(Ru),
            Ju = null === (yu = uu.items.jJ()) || void 0 === yu ? void 0 : yu.name,
            Nu = null !== (Eu = Qu.getItemStat(mu, "harvestLevel")) && void 0 !== Eu ? Eu : 0;
          return (0, qu.Oc)({
            blockHarvestType: Qu.getDefaultItemStat(mu, "harvestType"),
            blockHarvestLevel: Qu.getDefaultItemStat(mu, "harvestLevel"),
            harvestLevel: Nu,
            heldToolType: void 0 === Ju ? void 0 : Qu.getDefaultItemStat(Ju, "harvests"),
            heldToolLevel: void 0 === Ju ? void 0 : Qu.getDefaultItemStat(Ju, "level")
          }) && null !== (Ku = Ou.o[Nu]) && void 0 !== Ku ? Ku : null
        }(uu, yu)), uu.watchPromptPick(RR);
        const Ku = "touch" === RR ? function(uu) {
          var Ru;
          const yu = uu.interactLabel;
          return yu === du.wc.Entity ? yR(uu.promptEntity) : yu === du.wc.TameWith ? {
            label: (0, Nu.u)(uu.tables.nameOfId(uu.interactIcon))
          } : null !== (Ru = ER.get(yu)) && void 0 !== Ru ? Ru : null
        }(uu) : yR(uu.promptEntity);
        return this.target = (0, vu.p)(this.target, {
          interactPrompt: Ku,
          blockText: Eu,
          neededTool: this.pickaxe.shown
        }), this.target
      }
    }
    let QR = null;
    const mR = {
      current: () => {
        var uu, Ru;
        return null !== (uu = null === (Ru = QR) || void 0 === Ru ? void 0 : Ru.target) && void 0 !== uu ? uu : uR
      },
      watch: uu => {
        const Ru = new KR;
        QR = Ru;
        const yu = (0, xu.l)((yu => {
          let Eu = Ru.read(yu);
          uu(Eu);
          const Ku = (0, Qu.y)((() => {
            const Ku = Ru.read(yu);
            Ku !== Eu && (Eu = Ku, uu(Ku))
          }));
          return () => {
            Ku(), yu.watchPromptPick("off")
          }
        }));
        return () => {
          yu(), QR === Ru && (QR = null)
        }
      }
    };
    let JR = 0,
      NR = 0;
    const XR = {
        health: Nu.n,
        aura: Nu.j,
        hotbar: fu.e.states.hotbar,
        heldItemAim: fu.e.states.heldItemAim,
        crouching: (0, xu.e)((uu => function(uu) {
          const Ru = () => 0 !== (du.v.playerFlags(uu.apiView, 0) & du.Nd.Crouching);
          return {
            current: Ru,
            watch(uu) {
              let yu = Ru();
              return (0, Qu.v)((() => {
                const Eu = Ru();
                Eu !== yu && (yu = Eu, uu(Eu))
              }))
            }
          }
        }(uu.api).current), !1, (uu => (0, Qu.v)(uu))),
        flight: (0, xu.e)((uu => () => function(uu) {
          const Ru = du.v.playerFlags(uu.apiView, 0);
          return (0, Nu.m)(0 !== (Ru & du.Nd.CanFly), 0 !== (Ru & du.Nd.Flying))
        }(uu.api)), (0, Nu.m)(!1, !1), (uu => (0, Qu.v)(uu))),
        gliderBoostFuel: (0, xu.e)((uu => () => du.v.gliderBoostFuel(uu.api.apiView, 0)), 0, (uu => (0, Qu.v)(uu))),
        crosshairTarget: mR
      },
      VR = {
        hotbarSlotRequested: fu.e.events.hotbarSlotRequested,
        hotbarScrolled: fu.e.events.hotbarScrolled,
        numberKeyPressed: fu.e.events.numberKeyPressed,
        shotDamageToShow: (0, Nu.r)((uu => !0 === (0, au.e)(uu, "showDamageAmounts")))
      },
      rR = {
        selectHotbarSlot: fu.e.commands.selectHotbarSlot,
        setCrosshairInteractPrompt: uu => {
          RR = uu
        }
      },
      BR = {
        momentumFrac: function() {
          var uu, Ru, yu;
          const Eu = (0, mu.i)(),
            Ku = performance.now(),
            Qu = null === Eu || void 0 === Eu || null === (uu = Eu.items.jJ()) || void 0 === uu || null === (Ru = uu.attributes) || void 0 === Ru || null === (yu = Ru.customAttributes) || void 0 === yu ? void 0 : yu.enchantments;
          return JR = null !== Eu && null !== Qu && void 0 !== Qu && Qu.Momentum ? 0 !== (du.v.playerFlags(Eu.api.apiView, 0) & du.Nd.Breaking) ? Math.max(0, du.v.momentumFrac(Eu.api.apiView, 0)) : Math.max(0, JR - (Ku - NR) / 1500) : 0, NR = Ku, JR
        }
      };
    var xR = yu(40166),
      SR = yu(1215),
      pR = yu(36341),
      TR = yu(8516),
      WR = yu(1583),
      jR = yu(2306),
      HR = yu(4573);
    let dR = !1;

    function bR(uu) {
      dR = uu
    }

    function CR() {
      "inGame" !== Lu.d.get("gameState") || (0, WR.t)() || Xu.k.Op("ctrlCrouchWithoutFullscreen")
    }
    let kR = !1;
    const eR = {
        OpenEmoteWheel: () => {
          bR(!0), kR = !0, queueMicrotask((() => {
            kR && (kR = !1, Xu.k.Op("requestEmoteWheelHoldOpen"))
          }))
        },
        ToggleFullCoordinateOverlay: () => {
          Xu.k.Op("toggleFullCoordinateOverlay")
        },
        KeyYPressed: () => {
          (0, pR.e)() || Xu.k.Op("YKeyPressed")
        },
        KeyXPressed: () => {
          (0, pR.e)() || Xu.k.Op("XKeyPressed")
        },
        CtrlCrouch: CR,
        "primary-fire": () => {
          Xu.k.Op("mouseState", {
            VV: SR.e.DownFirePrimary,
            isDown: !0
          })
        },
        "alt-fire": () => {
          Xu.k.Op("mouseState", {
            VV: SR.e.DownFireSecondary,
            isDown: !0
          })
        },
        TouchHold: () => {
          Xu.k.Op("mouseState", {
            VV: SR.e.TouchDownLong,
            isDown: !0
          })
        }
      },
      AR = {
        OpenEmoteWheel: () => {
          bR(!1), kR ? (kR = !1, (0, TR.e)() || Xu.k.Op("requestEmoteWheelHoldOpen")) : Xu.k.Op("requestEmoteWheelHoldRelease")
        },
        CtrlCrouch: CR,
        "primary-fire": () => {
          Xu.k.Op("mouseState", {
            VV: SR.e.UpFirePrimary,
            isDown: !1
          })
        },
        "alt-fire": () => {
          Xu.k.Op("mouseState", {
            VV: SR.e.UpFireSecondary,
            isDown: !1
          })
        },
        TouchDig: () => {
          Xu.k.Op("mouseState", {
            VV: SR.e.UpFirePrimary,
            isDown: !1
          })
        }
      };
    let DR = !1;

    function MR() {
      DR || (DR = !0, (0, HR.h)((uu => {
        if ((0, Ku.d)()) return;
        const Ru = (0, HR.g)(uu) ? "primary-fire" : uu.action;
        var yu;
        if (uu.down) {
          if (0 === (uu.flags & jR.b.Synthetic)) {
            var Eu;
            null === (Eu = eR[Ru]) || void 0 === Eu || Eu.call(eR)
          }
        } else null === (yu = AR[Ru]) || void 0 === yu || yu.call(AR)
      })))
    }
    var IR = yu(330),
      GR = yu(106),
      UR = yu(47),
      nR = yu(40286),
      sR = yu(1280),
      tR = yu(38746);
    let lR = !1;
    const gR = {
      sendCodeCollab(uu) {
        var Ru;
        null === (Ru = (0, mu.i)()) || void 0 === Ru || Ru.send(nu.d.CodeCollab, (0, nu.l)(uu), (0, tR.i)(uu))
      }
    };
    let cR = null,
      LR = !1,
      zR = null;

    function FR() {
      return "inGame" === Lu.d.get("gameState") && !(0, pR.e)()
    }
    const wR = {
        OpenInventory: uu => {
          (0, WR.y)(uu, "inventory", (0, xR.k)())
        },
        OpenShop: uu => {
          cR && FR() && (0, WR.u)(uu, IR.s.SHOP, !cR.shopIsEmpty(Hu.b.get("shopInfo")))
        },
        OpenLobbyLeaderboard: uu => {
          FR() && (0, WR.u)(uu, IR.s.LOBBY_LEADERBOARD, !!Hu.b.get("lobbyLeaderboardInfo"))
        },
        OpenTasksAndLeaderboard: uu => {
          var Ru;
          const yu = null === (Ru = cR) || void 0 === Ru ? void 0 : Ru.getClientGameMapKey();
          yu ? (0, WR.B)(uu, !0, yu) : (0, WR.y)(uu, "retentionFeatures", !(!Hu.b.get("_tasks") && !Hu.b.get("_availableLeaderboards")))
        },
        OpenInviteLink: uu => {
          (0, WR.y)(uu, "inviteLink", GR.featureFlags.canUseInviteLinks)
        },
        OpenCodeEditor: uu => {
          FR() && function(uu) {
            var Ru;
            const yu = (0, mu.i)(),
              Eu = null !== yu && void 0 !== yu && yu.isSessionLive ? yu.api : null,
              Ku = Eu ? Eu.mH(Eu.localId) : null,
              Qu = null !== (Ru = null === Ku || void 0 === Ku ? void 0 : Ku.map((uu => Math.floor(uu)))) && void 0 !== Ru ? Ru : null;
            (0, WR.B)(uu, null !== Qu && (0, tR.e)((0, sR.c)()), (() => {
              Xu.k.Op("EditLobbyCode", Qu)
            }))
          }(uu)
        },
        HideUi: () => {
          Xu.k.Op("showUi", !1)
        }
      },
      ZR = {
        HideUi: () => {
          Xu.k.Op("showUi", !0)
        }
      };

    function hR() {
      LR || (LR = !0, yu.e(151).then((() => yu(42160))).then((uu => {
        cR = uu
      }), (uu => {
        console.error("[bloxd-wasm-client] the menu keys' checks did not load", uu)
      })), (0, nR.t)((uu => {
        uu || !(0, nR.g)() || (0, GR.isMobile)() || !UR.i.getItem("disableFullscreen") || (0, WR.p)() || Lu.d.set({
          openEverythingMenuName: IR.s.SETTINGS
        })
      })), (0, HR.h)((uu => {
        let {
          action: Ru,
          down: yu,
          press: Eu
        } = uu;
        var Qu, mu;
        (0, Ku.d)() || (yu ? null === (Qu = wR[Ru]) || void 0 === Qu || Qu.call(wR, function(uu) {
          var Ru;
          if (0 === uu || (null === (Ru = zR) || void 0 === Ru ? void 0 : Ru.press) !== uu) {
            const Ru = {
              press: uu,
              event: new Event("inputAction")
            };
            zR = Ru, queueMicrotask((() => {
              zR === Ru && (zR = null)
            }))
          }
          return zR.event
        }(Eu)) : null === (mu = ZR[Ru]) || void 0 === mu || mu.call(ZR))
      })))
    }
    var PR = yu(38710),
      iR = yu(38723),
      YR = yu(38714);
    const oR = {
      completeTask(uu) {
        var Ru;
        null === (Ru = (0, mu.i)()) || void 0 === Ru || Ru.send(nu.d.CompleteTask, (0, nu.n)(uu))
      },
      setServerCookie(uu) {
        var Ru;
        let {
          key: yu,
          value: Eu
        } = uu;
        null === (Ru = (0, mu.i)()) || void 0 === Ru || Ru.send(nu.d.GeneralCookieSet, (0, nu.q)({
          Rm: yu,
          ym: Eu
        }))
      },
      answerUiRequest(uu) {
        var Ru;
        let {
          id: yu,
          Jm: Eu
        } = uu;
        null === (Ru = (0, mu.i)()) || void 0 === Ru || Ru.send(nu.d.UiRequestResp, (0, nu.R)({
          dJ: yu,
          bJ: Eu,
          CJ: 5
        }))
      },
      chooseRewardedAd(uu) {
        var Ru;
        let {
          id: yu,
          Jm: Eu
        } = uu;
        null === (Ru = (0, mu.i)()) || void 0 === Ru || Ru.send(nu.d.UiRequestResponded, (0, nu.N)({
          id: yu,
          Jm: Eu
        }))
      },
      requestLeaderboard(uu) {
        var Ru;
        let {
          category: yu,
          timeframe: Eu,
          seeTop: Ku
        } = uu;
        null === (Ru = (0, mu.i)()) || void 0 === Ru || Ru.send(nu.d.LeaderboardRequest, {
          category: yu,
          timeframe: Eu,
          seeTop: Ku
        })
      }
    };
    let qR = !1;
    const OR = ju.f.DW / 2,
      vR = [OR, -OR, -OR, -OR, OR, OR, -OR, OR],
      aR = [0, 0, 0];

    function fR(uu, Ru, yu) {
      for (let Eu = 0; Eu < uu.length; Eu += 2)
        if (uu[Eu] === Ru && uu[Eu + 1] === yu) return !0;
      return !1
    }
    const uy = {
      blocksStandingOn: function() {
        const uu = (0, mu.i)();
        if (null === uu) return [];
        const {
          api: Ru,
          chunks: yu,
          tables: Eu
        } = uu;
        if (!Ru.readPosition(Ru.localId, aR)) return [];
        const [Ku, Qu, Ju] = aR, Nu = Math.ceil(Qu) - 1, Xu = [], Vu = [];
        for (let mu = 0; mu < vR.length; mu += 2) {
          const uu = Ku + vR[mu],
            Ru = Ju + vR[mu + 1];
          if (Number.isInteger(uu) || Number.isInteger(Ru)) continue;
          const Qu = Math.floor(uu),
            ru = Math.floor(Ru);
          if (fR(Vu, Qu, ru)) continue;
          const Bu = yu.yV(Qu, Nu, ru);
          Eu.isSolidBlockId(Bu) && (Vu.push(Qu, ru), Xu.push(Eu.nameOfId(Bu)))
        }
        return Xu
      },
      dropAhead: function() {
        const uu = (0, mu.i)();
        return null !== uu && 0 !== (du.v.playerFlags(uu.api.apiView, 0) & du.Nd.DropAhead)
      }
    };
    var Ry = yu(36720),
      yy = yu(38836),
      Ey = yu(1311),
      Ky = yu(40241);
    const Qy = new Set(["replayLoad", "replaySave", "replaySaveAs", "replayTimelineZoomIn", "replayTimelineZoomOut"]),
      my = new Set(["replaySkipBack", "replaySkipForward", "replaySpeedUp", "replaySpeedDown", "replayRecordKeyframe"]);

    function Jy() {
      const uu = new Set;
      return {
        add: Ru => (uu.add(Ru), () => {
          uu.delete(Ru)
        }),
        fire() {
          for (const Ru of uu) Ru()
        }
      }
    }
    const Ny = Object.freeze([]);

    function Xy(uu, Ru) {
      let yu, {
        rereads: Eu,
        followLocalId: Ku
      } = Ru;
      const mu = () => (yu = (0, vu.p)(yu, uu()), yu);
      return {
        current: mu,
        watch(uu) {
          const Ru = (0, Su.d)((Ru => {
            Eu(Ru) && uu(mu())
          }));
          if (!Ku) return Ru;
          let yu = (0, xu.h)();
          const Ju = (0, Qu.y)((() => {
            const Ru = (0, xu.h)();
            Ru !== yu && (yu = Ru, uu(mu()))
          }));
          return () => {
            Ru(), Ju()
          }
        }
      }
    }
    const Vy = {
        players: Xy((function() {
          const uu = Su.g.ids(),
            Ru = {};
          for (const Qu of uu) {
            var yu, Eu, Ku;
            Ru[Qu] = {
              name: null !== (yu = Su.g.getName(Qu)) && void 0 !== yu ? yu : null,
              ranks: null !== (Eu = Su.g.getSetting(Qu, "ranks")) && void 0 !== Eu ? Eu : Ny,
              cosmetics: null !== (Ku = (0, Su.i)(Qu)) && void 0 !== Ku ? Ku : null
            }
          }
          return {
            ids: uu,
            byId: Ru,
            localId: (0, xu.h)()
          }
        }), {
          rereads: uu => "roster" !== uu.kind || uu.members || uu.settings.has("ranks"),
          followLocalId: !0
        }),
        lobbyLeaderboardRows: Xy((function() {
          const uu = {};
          for (const Ku of Su.g.ids()) {
            var Ru, yu, Eu;
            uu[Ku] = {
              colour: null !== (Ru = Su.g.getSetting(Ku, "colorInLobbyLeaderboard")) && void 0 !== Ru ? Ru : null,
              values: null !== (yu = Su.g.getSetting(Ku, "lobbyLeaderboardValues")) && void 0 !== yu ? yu : null,
              tags: null !== (Eu = Su.g.getSetting(Ku, "lobbyLeaderboardTags")) && void 0 !== Eu ? Eu : null
            }
          }
          return uu
        }), {
          rereads: function(uu) {
            if ("roster" !== uu.kind) return "reset" === uu.kind;
            const {
              members: Ru,
              settings: yu
            } = uu;
            return Ru || yu.has("colorInLobbyLeaderboard") || yu.has("lobbyLeaderboardValues") || yu.has("lobbyLeaderboardTags")
          },
          followLocalId: !1
        })
      },
      ry = {
        cosmeticsUpdated: {
          watch: uu => (0, Su.d)((Ru => {
            if ("cosmetics" !== Ru.kind) return;
            const yu = (0, xu.h)();
            uu(Ru.updates.map((uu => {
              let {
                hy: Ru,
                Py: Eu,
                iy: Ku
              } = uu;
              return {
                local: Ru === yu,
                Py: Eu,
                iy: Ku
              }
            })))
          }))
        }
      };
    var By = yu(2719),
      xy = yu(1661),
      Sy = yu(640),
      py = yu(40292);
    let Ty = !1,
      Wy = null;
    const jy = {
      setShopOpen(uu) {
        var Ru;
        null === (Ru = (0, mu.i)()) || void 0 === Ru || Ru.send(nu.d.ShopMenuChanged, (0, nu.H)(uu))
      },
      buyShopItem(uu) {
        var Ru;
        let {
          categoryKey: yu,
          itemKey: Eu,
          userInput: Ku
        } = uu;
        null === (Ru = (0, mu.i)()) || void 0 === Ru || Ru.send(nu.d.ItemBought, {
          categoryKey: yu,
          itemKey: Eu,
          shopVersion: Hu.b.get("_shopVersion"),
          userInput: Ku
        })
      }
    };
    let Hy = !1;
    var dy = yu(4586);
    const by = jR.t.LookFrozen | jR.t.ClicksSuppressed;

    function Cy(uu, Ru) {
      var yu;
      null !== (yu = (0, mu.i)()) && void 0 !== yu && yu.send(uu, Ru) || console.warn(`[bloxd-wasm-client] message ${uu} not sent: no live game or the core's command ring is full`)
    }(0, pu.m)(Uu.jb, (uu => {
      const Ru = (0, su.f)(Uu.jb, uu);
      void 0 !== Ru && Xu.k.Op("setDiscordReportKey", Ru)
    }));
    const ky = {
      ignorePlayer(uu) {
        Cy(nu.d.IgnoreUser, (0, nu.r)({
          Im: uu
        }))
      },
      reportPlayer(uu) {
        let {
          playerId: Ru,
          chatMsgId: yu,
          vQ: Eu,
          details: Ku
        } = uu;
        Cy(nu.d.UserReport, (0, nu.W)({
          IV: Ru,
          GV: yu,
          vQ: Eu,
          aQ: Ku
        }))
      },
      reportWorldCodeChat(uu) {
        let {
          chatMsgId: Ru,
          vQ: yu,
          details: Eu
        } = uu;
        Cy(nu.d.UserReport, (0, nu.W)({
          IV: "",
          GV: Ru,
          vQ: yu,
          aQ: Eu
        }))
      },
      requestDiscordReportKey(uu) {
        Cy(nu.d.ReqDiscordReportKey, (0, nu.C)(uu))
      },
      reportLobbyOrGame(uu) {
        let {
          target: Ru,
          vQ: yu,
          details: Eu
        } = uu;
        "customGame" === Ru ? Cy(nu.d.CustomGameReport, (0, nu.p)({
          vQ: yu,
          aQ: Eu
        })) : Cy(nu.d.LobbyReport, (0, nu.v)({
          vQ: yu,
          aQ: Eu
        }))
      },
      updateMyCosmetic(uu) {
        Cy(nu.d.UpdateMyCosmetic, (0, nu.V)(uu))
      },
      holdEmoteWheel(uu) {
        !uu || dR ? (0, dy.h)(by, uu ? by : 0) : Xu.k.Op("requestEmoteWheelHoldRelease")
      }
    };
    var ey = yu(40298),
      Ay = yu(9158),
      Dy = yu(39330);
    const My = [0, 0, 0],
      Iy = [0, 0, 0],
      Gy = [0, 0, 0],
      Uy = {
        blockAtViewPoint(uu) {
          let {
            x: Ru,
            y: yu
          } = uu;
          const Eu = (0, mu.i)();
          if (null === Eu || void 0 === Eu || !Eu.renderFrame.hasView) return null;
          const {
            renderFrame: Ku,
            clientApi: Qu,
            api: Ju
          } = Eu;
          let Nu = 0;
          return (0, Dy.f)(((uu, Ru, yu) => (Nu = Qu.getBlockId(uu, Ru, yu), 0 !== Nu)), Ku.cameraPosition, (0, Dy.j)((uu => du.v.viewProj(Ju.apiView, 0, uu)), Ru, yu, My), Dy.c, Iy, Gy) ? {
            pos: [Iy[0], Iy[1], Iy[2]],
            normal: [Gy[0], Gy[1], Gy[2]],
            name: (0, Ay.g)(Nu)
          } : null
        }
      },
      ny = {
        setBlockHighlight(uu) {
          var Ru;
          null === (Ru = (0, mu.i)()) || void 0 === Ru || Ru.setBlockHighlight(uu)
        }
      };
    var sy = yu(1867),
      ty = yu(40302),
      ly = yu(40311),
      gy = yu(40313);
    var cy = yu(599),
      Ly = yu(39337);

    function zy(uu) {
      if (null === uu || void 0 === uu || !uu.isCoreRunning) return null;
      const {
        api: Ru,
        chunks: yu,
        items: Eu,
        tables: Ku
      } = uu;
      return {
        playerFeet() {
          const uu = Ru.mH(Ru.localId);
          return null !== uu && void 0 !== uu && uu.every(Number.isFinite) ? uu : null
        },
        chunkBlocks: uu => yu.isLoaded(uu[0], uu[1], uu[2]) ? (uu, Ru, Eu) => yu.yV(uu, Ru, Eu) : null,
        blockName: uu => Ku.nameOfId(uu),
        inventory: () => ({
          slots: Eu.playerItems().map((uu => uu ? {
            name: uu.name,
            amount: uu.amount
          } : null)),
          heldSlot: Eu.selectedSlot
        }),
        nearby() {
          const yu = [];
          for (let Ku = 0; Ku < Ru.idStr.length; Ku++) {
            var Eu;
            const Qu = Ru.idStr[Ku],
              mu = Ru.serverIds[Ku],
              Ju = Ru.kinds[Ku];
            if (null === Qu || Ru.isLocal(mu) || Ju >>> du.c !== du.t.Lifeform) continue;
            const Nu = Ru.mH(mu),
              Xu = cy.l[Ju & du.f];
            Nu && void 0 !== Xu && yu.push({
              kind: "Player" === Xu ? "player" : Xu,
              name: null !== (Eu = uu.clientApi.getEntityName(Qu)) && void 0 !== Eu ? Eu : null,
              position: Nu
            })
          }
          return yu
        },
        droppedItems() {
          let uu = 0;
          for (let yu = 0; yu < Ru.idStr.length; yu++) null !== Ru.idStr[yu] && Ru.kinds[yu] >>> du.c === du.t.Item && uu++;
          return uu
        }
      }
    }
    const Fy = {
        worldCodeAiChunk: uu => Promise.resolve((0, Ly.b)(zy((0, mu.i)()), uu)),
        worldCodeAiGameState: () => Promise.resolve((0, Ly.c)(zy((0, mu.i)())))
      },
      wy = function(uu) {
        const Ru = Jy(),
          Eu = Jy(),
          Ku = new Set,
          Qu = new Set,
          mu = () => {
            var Ru, yu;
            return null !== (Ru = null === (yu = uu.runtime()) || void 0 === yu ? void 0 : yu.currentViewer) && void 0 !== Ru ? Ru : null
          };
        let Ju = null,
          Nu = null;
        const Vu = (uu, Ru) => ({
            current: uu,
            watch(yu) {
              let Eu = uu();
              return Ru.add((() => {
                const Ru = uu();
                Ru !== Eu && (Eu = Ru, yu(Ru))
              }))
            }
          }),
          Bu = uu => ({
            watch: Ru => (uu.add(Ru), () => {
              uu.delete(Ru)
            })
          }),
          xu = uu => {
            const Ru = mu(),
              yu = null === Ru || void 0 === Ru ? void 0 : Ru.view;
            Ru && yu && Ru.seek(Math.max(0, Math.min(yu.totalTicks - 1, yu.sr + uu * ru.od)))
          },
          Su = {
            replay: Vu((() => {
              var uu;
              const Ru = mu(),
                yu = null !== (uu = null === Ru || void 0 === Ru ? void 0 : Ru.view) && void 0 !== uu ? uu : null;
              return null === Ru || null === yu || yu.state === ru.bd.None ? (Ju = null, null) : (Ju = (0, vu.p)(Ju, {
                id: Ru.id,
                sr: yu.sr,
                totalTicks: yu.totalTicks,
                eD: ru.od,
                playing: yu.state === ru.bd.Playing,
                speed: yu.speed,
                cameraMode: yu.cameraMode,
                freecam: "freecam" === yu.cameraMode
              }), Ju)
            }), Ru),
            replayEdits: Vu((() => {
              var uu;
              const Ru = mu(),
                yu = null !== (uu = null === Ru || void 0 === Ru ? void 0 : Ru.view) && void 0 !== uu ? uu : null;
              return null === Ru || null === yu || yu.state === ru.bd.None ? (Nu = null, null) : (Nu = (0, vu.p)(Nu, {
                cameraKeyframes: [...Ru.keyframes],
                playbackMark: yu.mark,
                fileName: Ru.fileName,
                unsavedChanges: Ru.unsavedChanges,
                suggestSaveAs: Ru.suggestSaveAs
              }), Nu)
            }), Ru),
            replayRecorder: Vu((() => {
              var Ru, yu;
              return null !== (Ru = null === (yu = uu.runtime()) || void 0 === yu ? void 0 : yu.recorder.current) && void 0 !== Ru ? Ru : Ky.b.states.replayRecorder.current()
            }), Eu),
            replayVideoExporting: {
              current: yy.b,
              watch: uu => (0, Xu.n)("replayViewer|videoExportChanged", (() => {
                uu((0, yy.b)())
              }))
            }
          },
          pu = {
            replayUiActionRequested: Bu(Qu),
            replayViewerRequested: Bu(Ku)
          },
          Tu = uu => {
            for (const Ru of Ku) Ru(uu)
          },
          Wu = () => {
            var Eu;
            !0 === (null === (Eu = mu()) || void 0 === Eu ? void 0 : Eu.isOpen) && Promise.all([yu.e(94), yu.e(63)]).then((() => yu(42168))).then((yu => {
              let {
                startWasmReplayVideoExport: Eu
              } = yu;
              return Eu({
                viewer: mu,
                canvas: () => {
                  var Ru, yu;
                  return null !== (Ru = null === (yu = uu.canvas) || void 0 === yu ? void 0 : yu.call(uu)) && void 0 !== Ru ? Ru : null
                },
                watchViewer: Ru.add,
                requestViewer: Tu
              })
            }), (uu => {
              console.error("Couldn't load the video export", uu), Ey.NotificationProvider.showAlertPopup({
                title: "Video export failed",
                subtitle: "Check your connection, then try again."
              })
            })).catch((uu => {
              console.error("The video export failed", uu)
            }))
          },
          ju = {
            replayAction(uu) {
              if ((0, yy.b)()) return;
              const Ru = mu();
              switch (uu) {
                case "replaySkipBack":
                  xu(-1);
                  break;
                case "replaySkipForward":
                  xu(1);
                  break;
                case "replaySpeedUp":
                case "replaySpeedDown":
                  null !== Ru && void 0 !== Ru && Ru.view && Ru.setSpeed((0, Ry.i)(Ru.view.speed, "replaySpeedUp" === uu ? "up" : "down"));
                  break;
                case "replayRecordKeyframe":
                  null === Ru || void 0 === Ru || Ru.addKeyframe()
              }
            },
            setReplayPlaying(uu) {
              var Ru, yu;
              (0, yy.b)() || (uu ? null === (Ru = mu()) || void 0 === Ru || Ru.play() : null === (yu = mu()) || void 0 === yu || yu.pause())
            },
            seekReplay(uu) {
              var Ru;
              let {
                sr: yu,
                ignorePlaybackMark: Eu
              } = uu;
              null === (Ru = mu()) || void 0 === Ru || Ru.seek(yu, null !== Eu && void 0 !== Eu && Eu)
            },
            setReplayCameraMode(uu) {
              var Ru;
              null === (Ru = mu()) || void 0 === Ru || Ru.setCameraMode(uu)
            },
            syncReplayCameraMode() {},
            setReplayCameraKeyframe(uu) {
              var Ru;
              null === (Ru = mu()) || void 0 === Ru || Ru.setKeyframe(uu)
            },
            moveReplayCameraKeyframe(uu) {
              var Ru;
              let {
                from: yu,
                to: Eu
              } = uu;
              null === (Ru = mu()) || void 0 === Ru || Ru.moveKeyframe(yu, Eu)
            },
            deleteReplayCameraKeyframes(uu) {
              var Ru;
              let {
                start: yu,
                end: Eu
              } = uu;
              null === (Ru = mu()) || void 0 === Ru || Ru.deleteKeyframes(yu, Eu)
            },
            setReplayPlaybackMark(uu) {
              var Ru;
              null === (Ru = mu()) || void 0 === Ru || Ru.setMark(uu)
            },
            cropReplay(uu) {
              var Ru, yu;
              let {
                start: Eu,
                end: Ku
              } = uu;
              return !(0, yy.b)() && (null !== (Ru = null === (yu = mu()) || void 0 === yu ? void 0 : yu.crop(Eu, Ku)) && void 0 !== Ru && Ru)
            },
            holdReplayForShaderPackFailure(uu) {
              const Ru = mu();
              Ru && (Ru.holdForShaderPackFailure(), function(uu) {
                yu.e(129).then((() => yu(38963))).then((Ru => {
                  let {
                    shaderPackPage: yu
                  } = Ru;
                  yu.block(uu)
                })).catch((uu => {
                  console.warn("[bloxd-wasm-client] the shader pack could not be blocked", uu)
                }))
              }(uu))
            },
            exportReplayVideo() {
              Wu()
            },
            toggleRecording() {
              var Ru;
              null === (Ru = uu.runtime()) || void 0 === Ru || Ru.recorder.toggleRecording()
            },
            saveClip() {
              var Ru;
              null === (Ru = uu.runtime()) || void 0 === Ru || Ru.recorder.saveClip()
            },
            setRecorderPrefs(Ru) {
              var yu;
              let {
                clipping: Eu,
                clipSeconds: Ku
              } = Ru;
              null === (yu = uu.runtime()) || void 0 === yu || yu.recorder.setPrefs(Eu, Ku)
            },
            setReplayViewerOpen(Ru) {
              var yu;
              (0, pR.g)(Ru) && (null === (yu = uu.runtime()) || void 0 === yu || yu.recorder.viewerShown(Ru))
            },
            recordFlyingMiddleText(Ru) {
              var yu;
              let {
                content: Eu,
                IQ: Ku,
                angle: Qu,
                GQ: mu
              } = Ru;
              null === (yu = uu.runtime()) || void 0 === yu || yu.recorder.recordFlyingText(JSON.stringify(Eu), Ku, Qu, mu)
            },
            dragReplayCamera(Ru) {
              var yu;
              let {
                dx: Eu,
                dy: Ku
              } = Ru;
              null === (yu = uu.freecam()) || void 0 === yu || yu.drag(Eu, Ku)
            },
            moveReplayFreecam(Ru) {
              var yu;
              null === (yu = uu.freecam()) || void 0 === yu || yu.move(Ru)
            },
            holdReplayFreecamVertical(Ru) {
              var yu;
              let {
                action: Eu,
                jJ: Ku
              } = Ru;
              null === (yu = uu.freecam()) || void 0 === yu || yu.holdVertical(Eu, Ku)
            }
          },
          Hu = uu => {
            var Ru;
            const yu = mu(),
              Eu = null !== (Ru = null === yu || void 0 === yu ? void 0 : yu.view) && void 0 !== Ru ? Ru : null;
            Qy.has(uu) ? (uu => {
              for (const Ru of Qu) Ru(uu)
            })(uu) : my.has(uu) ? ju.replayAction(uu) : "replayPlayPause" === uu ? yu && Eu && Eu.state !== ru.bd.None && ju.setReplayPlaying(Eu.state !== ru.bd.Playing) : "replayChangeCameraMode" === uu ? null === yu || void 0 === yu || yu.cycleCameraMode() : "replayExit" === uu ? !0 === (null === yu || void 0 === yu ? void 0 : yu.inPlayback) && (0, sR.j)("/") : "replayExportVideo" === uu && Wu()
          };
        let du = !1;
        return {
          states: Su,
          events: pu,
          commands: ju,
          lookups: {
            replayCamera() {
              var Ru, yu, Eu;
              return !0 !== (null === (Ru = mu()) || void 0 === Ru ? void 0 : Ru.isOpen) ? null : null !== (yu = null === (Eu = uu.cameraView) || void 0 === Eu ? void 0 : Eu.call(uu)) && void 0 !== yu ? yu : null
            },
            leaveGameReloadsPage() {
              var uu;
              return !0 === (null === (uu = mu()) || void 0 === uu ? void 0 : uu.inPlayback)
            }
          },
          feed: {
            viewerChanged: () => {
              var uu;
              const yu = !0 === (null === (uu = mu()) || void 0 === uu ? void 0 : uu.inPlayback);
              yu !== du && (du = yu, Xu.k.Op("connectedGameChanged")), Ru.fire()
            },
            recorderChanged: Eu.fire,
            keyDown: uu => {
              var Ru;
              switch (uu) {
                case "recordGame":
                  return void ju.toggleRecording();
                case "recordClip":
                  return void((0, pR.e)() || ju.saveClip())
              }(0, yy.b)() || ("replayViewerOpen" !== uu ? uu.startsWith("replay") && ((0, pR.e)() || !0 === (null === (Ru = mu()) || void 0 === Ru ? void 0 : Ru.inPlayback)) && Hu(uu) : Tu("toggle"))
            }
          }
        }
      }({
        runtime: Ku.i,
        cameraView: () => {
          var uu;
          const Ru = null === (uu = (0, mu.i)()) || void 0 === uu ? void 0 : uu.renderFrame;
          if (!Ru) return null;
          const [yu, Eu, Ku] = Ru.cameraPosition, [Qu, Ju, Nu] = Ru.cameraDirection;
          return {
            position: [yu, Eu, Ku],
            direction: [Qu, Ju, Nu]
          }
        },
        canvas: () => {
          var uu, Ru, yu;
          return null !== (uu = null === (Ru = (yu = (0, Qu.I)()).canvas) || void 0 === Ru ? void 0 : Ru.call(yu)) && void 0 !== uu ? uu : null
        },
        freecam: Ku.f
      }),
      Zy = {
        states: {
          ...XR,
          ...xR.i,
          ...wy.states,
          ...Vy,
          ...wu
        },
        events: {
          ...VR,
          ...Tu,
          ...xR.f,
          ...Du.c,
          ...ey.m,
          ...wy.events,
          ...ry,
          ...Au.k
        },
        commands: {
          ...eu,
          ...rR,
          ...Wu,
          ...xR.b,
          ...oR,
          ...ky,
          ...Au.h,
          ...gR,
          ...wy.commands,
          ...jy,
          ...Zu,
          ...ny
        },
        queries: {
          ...xR.h,
          ...Fy
        },
        lookups: {
          ...BR,
          ...lu,
          ...ey.o,
          ...wy.lookups,
          ...ku,
          ...uy,
          ...Uy,
          ...hu
        }
      };

    function hy() {
      (0, Ju.g)(pu.q), (0, Ku.k)(wy.feed), (0, Du.f)(), qR || (qR = !0, (0, pu.m)(Uu.l, (uu => {
        const Ru = (0, su.f)(Uu.l, uu);
        "string" === typeof Ru && Promise.resolve().then((() => yu(3465))).then((uu => {
          let {
            onCosmeticPackGranted: yu
          } = uu;
          yu(Ru)
        }))
      })), (0, pu.m)(Uu.hb, (uu => {
        const Ru = (0, su.f)(Uu.hb, uu);
        "number" === typeof Ru && Xu.k.Op("serverUpdating", Date.now() + Ru, !0)
      })), (0, pu.m)(Uu.J, (uu => {
        const Ru = (0, su.f)(Uu.J, uu);
        if ((0, su.d)(Ru)) {
          const {
            uu: uu,
            Ru: yu
          } = Ru;
          (0, iR.e)({
            uu: "string" === typeof uu ? uu : null,
            Ru: "string" === typeof yu ? yu : null
          })
        }
      })), (0, pu.m)(Vu.$b.NewUiRequest, (uu => {
        const Ru = (0, su.g)(uu);
        (0, su.d)(Ru) && "number" === typeof Ru.id && (0, su.d)(Ru.clientParameters) && (0, YR.f)(Ru.id, Ru.clientParameters)
      })), (0, pu.m)(Uu.ab, (uu => {
        const Ru = (0, su.f)(Uu.ab, uu);
        "number" === typeof Ru && (0, YR.i)(Ru)
      })), (0, pu.i)(YR.b), (0, pu.m)(Vu.$b.UiRequestPopup, (uu => {
        const Ru = (0, su.g)(uu);
        if ((0, su.d)(Ru) && "number" === typeof Ru.id && "string" === typeof Ru.text) {
          const uu = Ru.id;
          (0, YR.m)(uu, Ru.text, (Ru => {
            oR.answerUiRequest({
              id: uu,
              Jm: Ru
            })
          }))
        }
      })), (0, pu.m)(Vu.$b.TopRightHelper, (uu => {
        const Ru = (0, su.g)(uu);
        void 0 !== Ru && Xu.k.Op("TopRightHelper", Ru, !0)
      })), (0, pu.m)(Vu.$b.TaskProgress, (uu => {
        const Ru = (0, su.g)(uu);
        (0, su.d)(Ru) && "string" === typeof Ru.taskId && "number" === typeof Ru.progress && (0, PR.c)({
          taskId: Ru.taskId,
          progress: Ru.progress
        })
      }))), Hy || (Hy = !0, (0, pu.m)(Uu.u, (uu => {
        const Ru = (0, su.f)(Uu.u, uu);
        (0, su.d)(Ru) && Xu.k.Op("showShopFromServer", {
          toggle: Ru.BR,
          xR: Ru.xR
        }, !0)
      })), (0, pu.m)(Vu.$b.OverShopInfo, (uu => {
        const Ru = (0, su.g)(uu);
        (0, su.d)(Ru) && Xu.k.Op("overShopInfo", Ru.info, !0)
      })), (0, pu.m)(Vu.$b.ShowShopTutorial, (() => {
        Xu.k.Op("showShopTutorial", null, !0)
      }))), Ty || (Ty = !0, (0, pu.g)((() => {
        var uu;
        (0, By.D)(), null === (uu = Wy) || void 0 === uu || uu(), Wy = (0, pu.e)() ? (0, Sy.f)(pu.e) : null
      })), (0, pu.m)(Vu.$b.SetCookie, (uu => {
        const Ru = (0, su.g)(uu),
          yu = (0, sR.c)().gameNameWithVariation;
        (0, su.d)(Ru) && "string" === typeof Ru.key && null !== yu && (0, xy.setCookie)(yu, Ru.key, Ru.value)
      })), (0, pu.m)(Vu.$b.LeaveValues, (uu => {
        const Ru = (0, su.g)(uu);
        if ((0, su.d)(Ru) && "string" === typeof Ru.leaveEventType) {
          const {
            leaveEventType: uu,
            category: yu,
            subCategory: Eu,
            value: Ku
          } = Ru;
          (0, By.I)({
            leaveEventType: uu,
            category: yu,
            subCategory: Eu,
            value: Ku
          })
        }
      })), (0, pu.m)(Vu.$b.CustomAnalyticsEvent, (uu => {
        const Ru = (0, su.g)(uu);
        if ((0, su.d)(Ru) && "string" === typeof Ru.cat1) {
          const {
            cat1: uu,
            cat2: yu,
            cat3: Eu,
            value: Ku
          } = Ru;
          (0, By.r)({
            cat1: uu,
            cat2: yu,
            cat3: Eu,
            value: Ku
          })
        }
      })), (0, pu.m)(Vu.$b.ProgressionEvent, (uu => {
        const Ru = (0, su.g)(uu);
        if ((0, su.d)(Ru)) {
          const {
            type: uu,
            location1: yu,
            location2: Eu,
            location3: Ku,
            score: Qu
          } = Ru;
          (0, By.w)({
            type: uu,
            location1: yu,
            location2: Eu,
            location3: Ku,
            score: Qu
          })
        }
      })), (0, pu.m)(Vu.$b.ResourceEvent, (uu => {
        const Ru = (0, su.g)(uu);
        if ((0, su.d)(Ru)) {
          const {
            type: uu,
            resourceType: yu,
            amount: Eu,
            category: Ku,
            itemName: Qu
          } = Ru;
          (0, By.y)({
            type: uu,
            resourceType: yu,
            amount: Eu,
            category: Ku,
            itemName: Qu
          })
        }
      })), (0, pu.m)(Vu.$b.LeaderboardResponse, (uu => {
        const Ru = (0, su.g)(uu);
        if ((0, su.d)(Ru)) {
          const {
            category: uu,
            timeframe: yu,
            data: Eu
          } = Ru;
          Xu.k.Op("leaderboardResponse", {
            category: uu,
            timeframe: yu,
            data: Eu
          })
        }
      })), (0, pu.m)(Uu.C, (uu => {
        const Ru = (0, su.f)(Uu.C, uu);
        "string" === typeof Ru && (0, py.d)(uu.conn, Ru)
      })), (0, pu.m)(Uu.F, (uu => {
        const Ru = (0, su.f)(Uu.F, uu);
        "string" === typeof Ru && console.error(`[logErrorToConsole]: ${Ru}`)
      }))), cu(), (0, ey.e)(), lR || (lR = !0, (0, pu.m)(Uu.j, (uu => {
        const Ru = (0, su.f)(Uu.j, uu);
        void 0 !== Ru && (0, tR.l)(Ru)
      }))), hR(), MR(), Yu || (Yu = !0, (0, Qu.v)(ou)), Eu.gameBridge.attach(Zy), (0, Eu.installPageSources)({
        commands: {
          ...Eu.DEFAULT_CLIENT_PAGE_SOURCES.commands,
          setChunkAddDistance: ty.k
        },
        queries: gy.wasmIconQueries,
        lookups: {
          ...Eu.DEFAULT_CLIENT_PAGE_SOURCES.lookups,
          ...gy.wasmIconLookups,
          DH: ty.c,
          drawCallStats: ly.f
        }
      }), (0, sy.d)(), (0, gy.loadIcons)()
    }
  },
  40324: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => mu,
      g: () => Ju
    });
    var Eu = yu(40328);
    let Ku = null,
      Qu = null;

    function mu() {
      return Ku ??= yu.e(58).then((() => yu(42183))).catch((uu => {
        throw Ku = null, uu
      })), Ku
    }

    function Ju() {
      return Qu ??= Promise.all([mu(), (0, Eu.f)()]).then((uu => {
        let [Ru] = uu;
        return Ru
      }), (uu => {
        throw Qu = null, uu
      })), Qu
    }
  },
  36807: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Eu
    });
    const Eu = {
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
  36632: (uu, Ru, yu) => {
    yu.d(Ru, {
      B: () => mu,
      e: () => Ku,
      f: () => Qu,
      j: () => Bu,
      n: () => Ju,
      p: () => Nu,
      s: () => Xu,
      v: () => ru,
      x: () => Vu
    });
    var Eu = yu(1215);
    let Ku = function(uu) {
        return uu[uu.Join = 0] = "Join", uu[uu.Leave = 1] = "Leave", uu[uu.Push = 2] = "Push", uu[uu.Cursor = 3] = "Cursor", uu[uu.Submit = 4] = "Submit", uu[uu.ReloadAsVariation = 5] = "ReloadAsVariation", uu[uu.CreateFile = 6] = "CreateFile", uu[uu.RenameFile = 7] = "RenameFile", uu[uu.DeleteFile = 8] = "DeleteFile", uu[uu.SetEngine = 9] = "SetEngine", uu[uu.RenameFolder = 10] = "RenameFolder", uu
      }({}),
      Qu = function(uu) {
        return uu[uu.Joined = 0] = "Joined", uu[uu.Updates = 1] = "Updates", uu[uu.Presence = 2] = "Presence", uu[uu.RemoteCursor = 3] = "RemoteCursor", uu[uu.ForceClose = 4] = "ForceClose", uu[uu.LobbyFilesChanged = 5] = "LobbyFilesChanged", uu[uu.EngineSettings = 6] = "EngineSettings", uu
      }({});

    function mu(uu) {
      return "lobby" === uu.kind ? `lobby:${uu.path}` : `codeBlock:${uu.pos[0]},${uu.pos[1]},${uu.pos[2]}`
    }

    function Ju(uu) {
      if ("lobby" === uu) return {
        kind: "lobby",
        path: Eu.k
      };
      if (uu.startsWith("lobby:")) {
        const Ru = uu.slice(6);
        return ru(Ru) ? {
          kind: "lobby",
          path: Ru
        } : null
      }
      const Ru = uu.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return Ru ? {
        kind: "codeBlock",
        pos: [parseInt(Ru[1]), parseInt(Ru[2]), parseInt(Ru[3])]
      } : null
    }

    function Nu(uu) {
      return uu.endsWith(".d.ts")
    }

    function Xu(uu) {
      return uu.endsWith(".ts") && !Nu(uu)
    }
    const Vu = 64;

    function ru(uu) {
      if (!uu || uu !== uu.trim()) return !1;
      if (uu.length > Vu) return !1;
      if (uu.startsWith("/") || uu.includes("\\") || uu.includes("\0")) return !1;
      if (!Nu(uu) && !Xu(uu) && ! function(uu) {
          return uu.endsWith(".js") && !uu.endsWith(".min.js") && !uu.endsWith(".bundle.js")
        }(uu)) return !1;
      const Ru = uu.split("/");
      for (const yu of Ru)
        if ("" === yu || "." === yu || ".." === yu) return !1;
      return !0
    }
    const Bu = 14e3
  },
  38792: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Eu,
      d: () => Ku
    });
    const Eu = ["description", "label"];

    function Ku(uu) {
      const Ru = uu.type;
      return {
        type: Ru,
        params: uu[Ru]
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);