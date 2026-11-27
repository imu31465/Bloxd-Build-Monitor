export const id = 54;
export const ids = [54];
export const modules = {
  40521: (ee, ie, He) => {
    He.d(ie, {
      b: () => Fe,
      f: () => Me,
      i: () => be
    });
    const ye = 6e3;

    function be(ee, ie) {
      return [Math.floor(ee[0] / ie) * ie, Math.floor(ee[1] / ie) * ie, Math.floor(ee[2] / ie) * ie]
    }

    function Me(ee) {
      const ie = (null !== ee && void 0 !== ee ? ee : "").match(/-?\d+(?:\.\d+)?/g);
      return ie && ie.length >= 3 ? [Number(ie[0]), Number(ie[1]), Number(ie[2])] : null
    }

    function Ke(ee, ie) {
      return ee === ie ? String(ee) : `${ee}-${ie}`
    }

    function Ue(ee, ie, He, ye) {
      const be = [];
      let Me = new Map;
      for (let Ke = ee[2]; Ke < ee[2] + ie; Ke++) {
        const Ue = new Map;
        let Fe = ee[0];
        for (; Fe < ee[0] + ie;) {
          const be = ye(Fe, He, Ke);
          let Je = Fe;
          for (; Je + 1 < ee[0] + ie && ye(Je + 1, He, Ke) === be;) Je++;
          if (null !== be) {
            const ee = `${Fe} ${Je} ${be}`,
              ie = Me.get(ee);
            ie ? (ie.z1 = Ke, Me.delete(ee), Ue.set(ee, ie)) : Ue.set(ee, {
              x0: Fe,
              x1: Je,
              z0: Ke,
              z1: Ke,
              name: be
            })
          }
          Fe = Je + 1
        }
        be.push(...Me.values()), Me = Ue
      }
      return be.push(...Me.values()), be.sort(((ee, ie) => ee.z0 - ie.z0 || ee.x0 - ie.x0)).map((ee => `x${Ke(ee.x0,ee.x1)} z${Ke(ee.z0,ee.z1)} ${ee.name}`))
    }

    function Fe(ee, ie, He, be) {
      let Me = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : ye;
      const Fe = [ee[0] + ie - 1, ee[1] + ie - 1, ee[2] + ie - 1],
        Je = null !== be && be.every(((ie, He) => Math.floor(ie) >= ee[He] && Math.floor(ie) <= Fe[He])),
        oe = [`The chunk from ${ee.join(" ")} to ${Fe.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
      null !== be && oe.push(`The player's feet are at ${be.map(Math.floor).join(" ")}, ${Je?"in this chunk":"outside this chunk"}.`);
      const Re = [];
      for (let ye = ee[1]; ye <= Fe[1]; ye++) {
        const be = Ue(ee, ie, ye, He).join("; "),
          Me = Re[Re.length - 1];
        (null === Me || void 0 === Me ? void 0 : Me.boxes) === be ? Me.to = ye : Re.push({
          from: ye,
          to: ye,
          boxes: be
        })
      }
      const ke = Re.filter((ee => "" !== ee.boxes));
      0 === ke.length && oe.push("It is all air.");
      let qe = oe.join("\n").length;
      for (const ye of ke) {
        const ee = `y${Ke(ye.from,ye.to)}: ${ye.boxes}`;
        if (qe += ee.length + 1, qe > Me) {
          oe.push(`Cut short: the layers from y${ye.from} up aren't shown, as there are too many blocks.`);
          break
        }
        oe.push(ee)
      }
      return oe.join("\n")
    }
  },
  9521: (ee, ie, He) => {
    He.d(ie, {
      e: () => be
    });
    var ye = He(18);

    function be() {
      return !ye.e.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  37780: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke,
      f: () => Me,
      g: () => be
    });
    const ye = [.25, .5, 1, 2, 4, 8, 16];

    function be(ee, ie) {
      const He = ye;
      let be = He.indexOf(ee);
      return -1 === be && (be = He.findIndex((ie => ie >= ee)), -1 === be && (be = He.length - 1)), "up" === ie ? He[Math.min(be + 1, He.length - 1)] : He[Math.max(be - 1, 0)]
    }

    function Me(ee) {
      return ee <= ye[0]
    }

    function Ke(ee) {
      return ee >= ye[ye.length - 1]
    }
  },
  37301: (ee, ie, He) => {
    He.d(ie, {
      e: () => be,
      g: () => Me
    });
    let ye = !1;

    function be() {
      return ye
    }

    function Me(ee) {
      return ye !== ee && (ye = ee, !0)
    }
  },
  39818: (ee, ie, He) => {
    He.d(ie, {
      e: () => Me
    });
    var ye = He(27),
      be = He(2018);

    function Me(ee) {
      let {
        taskId: ie,
        progress: He
      } = ee;
      const ye = be.c.get("_tasks");
      null !== ye && void 0 !== ye && ye[ie] && be.c.apply({
        _tasks: {
          ...ye,
          [ie]: {
            ...ye[ie],
            progress: He
          }
        }
      })
    }
    ye.h.subscribe("clientTaskProgress", (ee => {
      Me(ee)
    }))
  },
  40494: (ee, ie, He) => {
    He.d(ie, {
      d: () => qe,
      h: () => Te,
      j: () => Je,
      l: () => Re,
      o: () => ke,
      q: () => Fe,
      s: () => Ke,
      v: () => oe,
      y: () => pe
    });
    var ye = He(2018),
      be = He(27),
      Me = He(2022);
    const Ke = (0, Me.i)((function() {
        var ee, ie, He, be;
        return {
          health: null !== (ee = ye.c.get("_health")) && void 0 !== ee ? ee : null,
          maxHealth: null !== (ie = ye.c.get("_totalMaxHealth")) && void 0 !== ie ? ie : null,
          shield: null !== (He = ye.c.get("_shield")) && void 0 !== He ? He : null,
          maxShield: null !== (be = ye.c.get("maxShield")) && void 0 !== be ? be : null
        }
      }), [], (0, Me.h)("_health", "_totalMaxHealth", "_shield", "maxShield")),
      Ue = [{
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

    function Fe(ee, ie) {
      return Ue[(ee ? 2 : 0) + (ie ? 1 : 0)]
    }
    const Je = (0, Me.i)((function() {
      var ee;
      return null !== (ee = ye.c.get("_aura")) && void 0 !== ee ? ee : null
    }), [], (0, Me.h)("_aura"));

    function oe(ee) {
      return {
        watch: ie => (0, be.j)("shotPlayer", (He => {
          let {
            playerId: ye,
            damage: be,
            wasCrit: Me,
            distance: Ke
          } = He;
          ee(ye) && ie({
            damage: be,
            wasCrit: Me,
            distance: Ke
          })
        }))
      }
    }

    function Re(ee) {
      return (0, Me.b)("chat", (ie => {
        let {
          serverChatMsgId: He,
          worldCodeLineId: ye,
          content: be,
          chatterEId: Me,
          chatterObjectsToReplay: Ke
        } = ie;
        return {
          serverChatMsgId: null !== He && void 0 !== He ? He : null,
          worldCodeLineId: null !== ye && void 0 !== ye ? ye : null,
          content: be,
          author: Me ? ee(Me) : null,
          hiddenFromReplay: !0 === Ke
        }
      }))
    }
    const ke = (0, Me.b)("chatRemoved");
    class qe {
      constructor() {
        this.shown = null, this.needed = null, this.neededSince = 0
      }
      update(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const He = this.shown;
        return ee !== this.needed && (this.needed = ee, this.neededSince = ie, null === ee && (this.shown = null)), this.shown !== this.needed && ie - this.neededSince > 200 && (this.shown = this.needed), this.shown !== He
      }
    }

    function fe(ee) {
      return [{
        translationKey: `touchKeys:${ee}`
      }]
    }
    const Te = {
      open: fe("open"),
      close: fe("close"),
      milk: fe("milk"),
      shear: fe("shear"),
      tame: fe("tame"),
      feed: fe("feed"),
      ride: fe("ride")
    };

    function pe(ee) {
      return [{
        translationKey: "touchKeys:tameWith"
      }, " ", {
        icon: ee
      }]
    }
  },
  37100: (ee, ie, He) => {
    He.d(ie, {
      e: () => Ue,
      g: () => Ke
    });
    var ye = He(3610);
    let be = null,
      Me = null;

    function Ke() {
      return Me ??= He.e(235).then((() => He(37015))).then((ee => {
        let {
          ITEM_SPRITES: ie,
          ITEM_SPRITES_WITHOUT_FILE: He,
          ITEM_FILES_WITHOUT_SPRITE: Me
        } = ee;
        be = function(ee, ie, He) {
          const be = new Set,
            Me = (0, ye.r)(ie);
          let Ke = 0;
          for (const [ye, Ue] of ee.entries()) ye === Me[Ke] ? Ke++ : be.add(Ue);
          if ("" !== He)
            for (const Ue of He.split(ye.n)) be.add(Ue);
          return be
        }(ie.split(ye.n), He, Me)
      }), (ee => {
        throw Me = null, ee
      })), Me
    }

    function Ue(ee) {
      var ie, He;
      return null !== (ie = null === (He = be) || void 0 === He ? void 0 : He.has(ee)) && void 0 !== ie && ie
    }
  },
  40509: (ee, ie, He) => {
    He.d(ie, {
      c: () => ye,
      d: () => Me,
      g: () => be
    });
    const ye = 128;

    function be(ee, ie, He, ye) {
      const be = 2 * ie - 1,
        Me = 1 - 2 * He,
        Ke = ee(0) - be * ee(3),
        Ue = ee(4) - be * ee(7),
        Fe = ee(8) - be * ee(11),
        Je = ee(1) - Me * ee(3),
        oe = ee(5) - Me * ee(7),
        Re = ee(9) - Me * ee(11);
      ye[0] = Ue * Re - Fe * oe, ye[1] = Fe * Je - Ke * Re, ye[2] = Ke * oe - Ue * Je;
      const ke = ye[0] * ee(3) + ye[1] * ee(7) + ye[2] * ee(11) < 0 ? -1 : 1,
        qe = Math.hypot(ye[0], ye[1], ye[2]) * ke;
      return ye[0] /= qe, ye[1] /= qe, ye[2] /= qe, ye
    }

    function Me(ee, ie, He, ye, be, Me) {
      const Ke = [Math.floor(ie[0]), Math.floor(ie[1]), Math.floor(ie[2])],
        Ue = [0, 0, 0],
        Fe = [1 / 0, 1 / 0, 1 / 0],
        Je = [1 / 0, 1 / 0, 1 / 0];
      for (let ke = 0; ke < 3; ke++) Ue[ke] = Math.sign(He[ke]), 0 !== Ue[ke] && (Je[ke] = Math.abs(1 / He[ke]), Fe[ke] = (Ke[ke] + (Ue[ke] > 0 ? 1 : 0) - ie[ke]) / He[ke]);
      let oe = 0,
        Re = Math.abs(He[0]) > Math.abs(He[1]) ? 0 : 1;
      for (Math.abs(He[2]) > Math.abs(He[Re]) && (Re = 2); oe <= ye;) {
        if (ee(Ke[0], Ke[1], Ke[2])) return be[0] = Ke[0], be[1] = Ke[1], be[2] = Ke[2], Me[0] = 0, Me[1] = 0, Me[2] = 0, Me[Re] = -Ue[Re], !0;
        Re = Fe[0] < Fe[1] ? 0 : 1, Fe[2] < Fe[Re] && (Re = 2), oe = Fe[Re], Ke[Re] += Ue[Re], Fe[Re] += Je[Re]
      }
      return !1
    }
  },
  37190: (ee, ie, He) => {
    He.d(ie, {
      e: () => we,
      i: () => De,
      k: () => ge,
      m: () => Be,
      p: () => Oe
    });
    var ye = He(272),
      be = He(97);
    const Me = new(He(37192).b)(new URL(He.p + He.u(3), He.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var Ke = He(1851),
      Ue = He(2173);
    const Fe = 1e4,
      Je = 3e4;
    let oe = null,
      Re = null,
      ke = null,
      qe = !1,
      fe = 0;
    const Te = new Map;
    let pe = null;
    const Xe = new Map,
      ze = new Map;

    function Be(ee) {
      const ie = new Promise(((ie, He) => {
        const ye = new Image;
        ye.crossOrigin = "anonymous", ye.fetchPriority = "high", ye.onload = () => {
          ie(ye)
        }, ye.onerror = () => {
          He(new Error(`A block icon's texture did not load: ${ee.slice(0,100)}`))
        }, ye.src = ee
      }));
      return (0, Ue.f)(ie)
    }

    function Ee(ee) {
      var ie, He;
      qe || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${ee}`), qe = !0, null === (ie = oe) || void 0 === ie || ie.terminate(), oe = null, Re = null, Xe.clear(), ze.clear();
      for (const ye of Te.values()) ye(null);
      Te.clear(), null === (He = pe) || void 0 === He || He()
    }

    function ge() {
      return null !== Re
    }

    function Oe() {
      return ke ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === ye.c.ios_icon_worker_v1 && (0, be.isWebKit)()) return;
        try {
          oe = await async function() {
            return await Me.ready(), Me.start()
          }()
        } catch (Ue) {
          return void Ee(`did not start (${String(Ue)})`)
        }
        let ee = () => {};
        const ie = new Promise((ie => {
          ee = ie
        }));
        oe.onmessage = ie => {
          let {
            data: He
          } = ie;
          if ("started" === He.type) Re = oe, ee();
          else if ("failed" === He.type) Ee(`failed a draw (${He.message})`);
          else {
            var ye, be;
            null === (ye = Te.get(He.id)) || void 0 === ye || ye(He.url), Te.delete(He.id), null === (be = pe) || void 0 === be || be()
          }
        }, oe.onerror = ie => {
          ie.preventDefault(), Ee(`stopped (${ie.message||"its script did not load or run"})`), ee()
        };
        const He = `did not start in ${Je/1e3} s`;
        await (0, Ke.k)(ie, Je, He).catch((() => {
          Ee(He)
        }))
      }(), ke
    }

    function de() {
      if (null !== pe || 0 === Te.size) return;
      const ee = new Promise((ee => {
          pe = ee
        })),
        ie = `did not answer in ${Fe/1e3} s`;
      (0, Ke.k)(ee, Fe, ie).then((() => {
        pe = null, de()
      }), (() => {
        pe = null, Ee(ie)
      }))
    }

    function We(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      ee.postMessage(ie, He)
    }

    function te(ee, ie, He, ye) {
      let be = ie.get(He);
      return void 0 === be && (be = ye().then((async ie => {
        let {
          image: He,
          request: ye
        } = ie;
        try {
          const ie = await createImageBitmap(He);
          We(ee, ye(ie), [ie])
        } catch (be) {
          Ee(`could not take an image (${String(be)})`)
        }
      })), be.catch((() => {
        ie.get(He) === be && ie.delete(He)
      })), ie.set(He, be)), be
    }
    async function Ze(ee, ie) {
      Oe();
      const He = Re;
      if (null === He) return null;
      if (await ee(He), Re !== He) return null;
      const ye = ++fe;
      return new Promise((ee => {
        Te.set(ye, ee), We(He, ie(ye)), de()
      }))
    }

    function we(ee, ie, He) {
      return Ze((ie => Promise.all([ee.top, ee.left, ee.right].map((ee => function(ee, ie) {
        return te(ee, Xe, ie, (async () => ({
          image: await Be(ie),
          request: ee => ({
            type: "texture",
            url: ie,
            bitmap: ee
          })
        })))
      }(ie, ee))))), (ye => ({
        type: "draw",
        id: ye,
        ...ee,
        size: ie,
        outlineWidth: He
      })))
    }

    function De(ee, ie, He, ye) {
      return Ze((He => function(ee, ie, He) {
        return te(ee, ze, ie, (async () => {
          const {
            texture: ee,
            ...ye
          } = await He();
          return {
            image: await Be(ee),
            request: ee => ({
              type: "model",
              name: ie,
              bitmap: ee,
              geometry: ye
            })
          }
        }))
      }(He, ee, ie)), (ie => ({
        type: "drawModel",
        id: ie,
        name: ee,
        size: He,
        outlineWidth: ye
      })))
    }
  },
  40489: (ee, ie, He) => {
    He.d(ie, {
      b: () => be
    });
    var ye = He(1952);

    function be(ee, ie, He) {
      return (0, ye.i)(ee, ie) < He
    }
  },
  9451: (ee, ie, He) => {
    He.d(ie, {
      d: () => be
    });
    var ye = He(1198);

    function be(ee, ie) {
      var He, be;
      try {
        const He = (0, ye.c)();
        if ("function" === typeof He) {
          const ye = new He(ee, ie);
          if (ye.type === ee) return ye
        }
      } catch {}
      const Me = document.createEvent("Event");
      return Me.initEvent(ee, null !== (He = null === ie || void 0 === ie ? void 0 : ie.bubbles) && void 0 !== He && He, null !== (be = null === ie || void 0 === ie ? void 0 : ie.cancelable) && void 0 !== be && be), Me
    }
  },
  39808: (ee, ie, He) => {
    He.d(ie, {
      c: () => oe
    });
    var ye = He(1169),
      be = He(1315),
      Me = He(18),
      Ke = He(1294),
      Ue = He(1305),
      Fe = He(1502),
      Je = He(37260);

    function oe(ee) {
      let {
        ee: ie,
        ie: He
      } = ee;
      const oe = null !== ie && void 0 !== ie ? ie : (0, Ue.e)().gameNameWithVariation;
      (0, ye.J)(oe) && ((0, Je.j)(), (0, Ke.db)((() => {
        console.log("Received matchmaking order from game server to game", ie), (0, Me.l)("inGameReplay"), (0, Fe.navigatePreserveSearch)((0, be.b)(oe, null !== He && void 0 !== He ? He : void 0))
      }), "video_start"))
    }
  },
  40017: (ee, ie, He) => {
    He.d(ie, {
      e: () => Me
    });
    var ye = He(27),
      be = He(2046);

    function Me(ee) {
      var ie, He;
      const Me = (0, be.k)(null !== (ie = null === (He = be.q.toggleFreeCam) || void 0 === He ? void 0 : He[0]) && void 0 !== ie ? ie : null);
      ye.h.yR("showBottomMessage", {
        message: `Free Camera ${ee?"Enabled":"Disabled"}${Me?` - Press ${Me} to toggle`:""}`,
        timeoutLength: 2e3,
        type: "Warning"
      })
    }
  },
  39802: (ee, ie, He) => {
    He.d(ie, {
      d: () => oe,
      f: () => Fe,
      h: () => Je,
      k: () => Re
    });
    var ye = He(1983),
      be = He(27),
      Me = He(1340),
      Ke = He(1205);
    const Ue = new Map;

    function Fe(ee, ie) {
      be.h.yR("newUiRequest", {
        id: ee,
        clientParameters: ie
      }, !0)
    }

    function Je(ee) {
      be.h.yR("removeUiRequest", ee, !0);
      const ie = Ue.get(ee);
      ie && (ie.tearDownNotification(), Ue.delete(ee))
    }

    function oe() {
      be.h.yR("clearUiRequests");
      for (const ee of Ue.values()) ee.tearDownNotification();
      Ue.clear()
    }

    function Re(ee, ie, He, be) {
      const Fe = "string" === typeof ie ? {
          translationKey: ie
        } : ie,
        Je = Me.NotificationProvider.showPromptPopup({
          title: Fe.translationKey,
          textOpts: {
            title: (0, Ke.j)(Fe.params, ye.gameBridge.latest("hiddenPlayerNames"))
          },
          confirmText: "general:yes",
          cancelText: "general:no",
          destructive: He,
          unlockPointerKey: "uiRequestPopup"
        });
      Ue.set(ee, Je), Je.getResult().then((ie => {
        Ue.delete(ee), "notificationTornDown" !== ie && be(ie)
      }))
    }
  },
  40515: (ee, ie, He) => {
    He.d(ie, {
      b: () => Re,
      e: () => ke
    });
    var ye = He(186),
      be = He(40521);
    const Me = 20;

    function Ke(ee) {
      return ee.map(Math.floor).join(" ")
    }

    function Ue(ee) {
      return null === ee.amount || 1 === ee.amount ? ee.name : `${ee.amount} ${ee.name}`
    }
    var Fe = He(40527),
      Je = He(2018),
      oe = He(1305);

    function Re(ee, ie) {
      if (!ee) return Fe.c;
      const He = ee.playerFeet();
      if (!He) return "The player isn't in the world yet, so no blocks can be seen.";
      const Me = ye.g.BR,
        Ke = (0, be.i)(null !== ie && void 0 !== ie ? ie : He, Me),
        Ue = ee.chunkBlocks(Ke);
      return Ue ? (0, be.b)(Ke, Me, ((ie, He, ye) => {
        const be = Ue(ie, He, ye);
        return 0 === be ? null : ee.blockName(be).split("|")[0]
      }), He) : `The chunk from ${Ke.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${He.map(Math.floor).join(" ")}.`
    }

    function ke(ee) {
      var ie, He, ye;
      if (!ee) return Fe.d;
      const be = ee.playerFeet();
      if (!be) return "The player isn't in the world yet, so nothing in it can be seen.";
      const {
        slots: Re,
        heldSlot: ke
      } = ee.inventory();
      return function(ee) {
        const ie = [];
        null !== ee.game && ie.push(`Game: ${ee.game}.`);
        const He = null === ee.health ? "" : `, health ${Math.round(ee.health)}${null===ee.maxHealth?"":` of ${Math.round(ee.maxHealth)}`}`;
        ie.push(`The player (the creator) stands at ${Ke(ee.position)}${He}, ${ee.creative?"in":"not in"} creative mode.`);
        const ye = ee.slots[ee.heldSlot];
        ie.push(ye ? `Holding (slot ${ee.heldSlot}): ${Ue(ye)}.` : `Holding nothing (slot ${ee.heldSlot} is empty).`);
        const be = ee.slots.flatMap(((ee, ie) => ee ? [`slot ${ie}: ${Ue(ee)}`] : []));
        ie.push(be.length > 0 ? `Inventory: ${be.join(", ")}.` : "Inventory: empty.");
        const Fe = ie => Math.hypot(ie.position[0] - ee.position[0], ie.position[1] - ee.position[1], ie.position[2] - ee.position[2]),
          Je = [...ee.nearby].sort(((ee, ie) => Fe(ee) - Fe(ie)));
        if (0 === Je.length) ie.push("No other players or mobs are near enough to see.");
        else {
          ie.push("Near them, nearest first:");
          for (const ee of Je.slice(0, Me)) {
            const He = "player" === ee.kind ? `player "${ee.name||"?"}"` : ee.name && ee.name !== ee.kind ? `${ee.kind} "${ee.name}"` : ee.kind,
              ye = Math.round(Fe(ee));
            ie.push(`- ${He} at ${Ke(ee.position)}, ${ye} block${1===ye?"":"s"} away`)
          }
          Je.length > Me && ie.push(`- and ${Je.length-Me} more further away`)
        }
        return ee.droppedItems > 0 && ie.push(`${ee.droppedItems} dropped item${1===ee.droppedItems?" is":"s are"} on the ground nearby.`), ie.join("\n")
      }({
        game: null !== (ie = (0, oe.e)().gameNameWithVariation) && void 0 !== ie ? ie : null,
        position: be,
        health: null !== (He = Je.c.get("_health")) && void 0 !== He ? He : null,
        maxHealth: null !== (ye = Je.c.get("_totalMaxHealth")) && void 0 !== ye ? ye : null,
        creative: !0 === Je.c.get("creative"),
        heldSlot: ke,
        slots: Re,
        nearby: ee.nearby(),
        droppedItems: ee.droppedItems()
      })
    }
  },
  41977: (ee, ie, He) => {
    He.d(ie, {
      $: () => Ye,
      D: () => ae,
      E: () => Ve,
      I: () => Ne,
      M: () => xe,
      O: () => Pe,
      P: () => ce,
      T: () => De,
      V: () => ne,
      X: () => Se,
      d: () => je,
      f: () => Ce,
      j: () => Ze,
      l: () => se,
      p: () => we,
      t: () => te,
      x: () => Le,
      z: () => Ae
    });
    var ye = He(1385),
      be = He(27),
      Me = He(1246),
      Ke = He(2492),
      Ue = He(5291),
      Fe = He(5262);
    let Je, oe = !1,
      Re = !1,
      ke = !1,
      qe = !1;
    const fe = 1300,
      Te = 3e3;
    let pe = 0,
      Xe = !1,
      ze = !1,
      Be = 0;
    const Ee = 2;
    let ge = !1,
      Oe = !1;
    const de = new Set,
      We = new Set;

    function te() {
      return oe
    }

    function Ze() {
      return ze
    }

    function we() {
      return Oe
    }

    function De() {
      return (0, Me.x)() && !Oe
    }

    function Pe(ee) {
      let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (ee !== Oe) {
        Oe = ee;
        for (const ee of [...We]) ee(Oe);
        ie && Se()
      }
    }

    function Ae(ee) {
      return We.add(ee), () => {
        We.delete(ee)
      }
    }

    function Ye() {
      (0, Ue.h)(Ke.p.Menu, (0, Me.x)() ? 0 : Ke.p.Menu)
    }

    function Ve() {
      ze = !1, Be = 0, Ye(), Se()
    }

    function ae(ee) {
      return de.add(ee), () => {
        de.delete(ee)
      }
    }

    function ce(ee) {
      Re = !1, ee !== oe && (oe = ee, qe = !1, clearTimeout(Je), ke = !oe && ge, oe ? (Xe = !1, ze = !1, Be = 0) : De() && !ge && (ze = !0), ge = !1, oe && !De() && he(), Ge(), ke && Se())
    }

    function xe(ee) {
      ee !== Xe && (Xe = ee, ee || Se())
    }

    function Le() {
      Re = !1, qe || !0 !== me() || (qe = !0, clearTimeout(Je), Je = setTimeout(ve, fe))
    }

    function Ce() {
      return (!Re || performance.now() - pe > Te) && (Re = (0, Fe.O)().lockPointer(), pe = performance.now()), Re
    }

    function ve() {
      ue() && le() && Ce()
    }

    function ue() {
      return De() && !oe && !Xe && !(0, ye.n)()
    }

    function me() {
      var ee;
      return "undefined" === typeof navigator || null === (ee = navigator.userActivation) || void 0 === ee ? void 0 : ee.isActive
    }

    function le() {
      return ke && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== me()
    }

    function Se() {
      De() ? ue() && !ze && le() && Ce() : oe && !ge && he()
    }

    function ne() {
      ze ? navigator.vendor.startsWith("Apple") ? Ie() : Be = Ee : Se()
    }

    function je() {
      Be > 0 && 0 === --Be && Ie()
    }

    function se() {
      Be = 0
    }

    function Ie() {
      ue() && !0 === me() && Ce()
    }

    function he() {
      ge = !0, (0, Fe.O)().unlockPointer()
    }

    function Ne() {
      Re = !1, ke = !1, qe = !1, clearTimeout(Je), Xe = !1, ze = !1, Be = 0, ge = !1;
      const ee = oe;
      oe = !1, ee && Ge()
    }

    function Ge() {
      for (const ee of [...de]) ee(oe);
      be.h.yR("pointerLockUpdate", oe)
    }
  },
  41780: (ee, ie, He) => {
    He.d(ie, {
      b: () => ke,
      d: () => Ue,
      g: () => Re,
      i: () => Je,
      k: () => Ke,
      l: () => oe,
      p: () => Fe
    });
    let ye = null,
      be = null,
      Me = null;

    function Ke(ee) {
      ye = ee
    }

    function Ue() {
      return ye
    }

    function Fe(ee) {
      be = ee
    }

    function Je() {
      return be
    }

    function oe(ee) {
      Me = ee
    }

    function Re() {
      return Me
    }

    function ke() {
      var ee, ie;
      return !0 === (null === (ee = be) || void 0 === ee || null === (ie = ee.currentViewer) || void 0 === ie ? void 0 : ie.inPlayback)
    }
  },
  42095: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      attachPlayGameSources: () => Iy,
      playGameSources: () => sy
    });
    var ye = He(1983),
      be = He(41780),
      Me = He(5262),
      Ke = He(41704),
      Ue = He(42077),
      Fe = He(40494),
      Je = He(27),
      oe = He(5279),
      Re = He(5271),
      ke = He(41734),
      qe = He(41751),
      fe = He(42103),
      Te = He(41739);
    (0, Te.j)(oe.ic.Chat, (ee => {
      if (ee.payloadKind !== Re.dc.Msgpack) return;
      const ie = function(ee) {
        if (null === ee || "object" !== typeof ee || !("content" in ee)) return null;
        const {
          chatMsgId: ie,
          worldCodeLineId: He,
          content: ye,
          chatterEId: be,
          chatterObjectsToReplay: Me
        } = ee;
        return {
          serverChatMsgId: null !== ie && void 0 !== ie ? ie : void 0,
          worldCodeLineId: null !== He && void 0 !== He ? He : void 0,
          content: ye,
          chatterEId: void 0 === be || null === be ? void 0 : String(be),
          chatterObjectsToReplay: Me
        }
      }((0, ke.b)(ee.payload));
      null !== ie && Je.h.yR("chat", ie, !0)
    })), (0, Te.j)(oe.ic.ChatRemoved, (ee => {
      if (ee.payloadKind === Re.dc.Msgpack) {
        const {
          chatMsgId: ie
        } = (0, ke.b)(ee.payload);
        Je.h.yR("chatRemoved", ie, !0)
      }
    }));
    const pe = {
        chatReceived: (0, Fe.l)((function(ee) {
          var ie, He, ye;
          return {
            id: ee,
            name: null !== (ie = fe.f.getName(ee)) && void 0 !== ie ? ie : null,
            local: (0, qe.g)() === ee,
            profileEffect: null !== (He = null === (ye = (0, fe.h)(ee)) || void 0 === ye ? void 0 : ye.profileEffect) && void 0 !== He ? He : null
          }
        })),
        chatRemoved: Fe.o
      },
      Xe = {
        sendChatMessage(ee) {
          var ie, He;
          let {
            nF: ye,
            channelName: be
          } = ee;
          return null !== (ie = null === (He = (0, Ke.h)()) || void 0 === He ? void 0 : He.clientApi.sendChat(ye, be)) && void 0 !== ie && ie
        }
      };
    var ze = He(186),
      Be = He(2018),
      Ee = He(41694),
      ge = He(40489);
    const Oe = [0, 0, 0],
      de = {
        codeBlockClickable(ee) {
          var ie;
          const He = (0, Ke.h)();
          if (null === He || void 0 === He || !He.isSessionLive) return !1;
          const ye = He.api;
          if (0 !== (Ee.v.playerFlags(ye.apiView, 0) & Ee.Pd.Crouching)) return !1;
          const be = ye.queries.directorEntity(ye.localId) >= Ee.pb.BYTES ? ye.memoryData(ye.scratch(), Ee.pb.BYTES, 8, "the local player's DirectorEntity") : null;
          if (null === be) return !1;
          for (let Me = 0; Me < 3; Me++) Oe[Me] = Ee.pb.feet(be, 0, Me);
          return Oe[1] += Ee.pb.eyeHeight(be, 0), (0, ge.b)(Oe, ee, null !== (ie = Be.c.get("blockReach")) && void 0 !== ie ? ie : ze.g.JX)
        }
      },
      We = {
        clickCodeBlock(ee) {
          var ie;
          null === (ie = (0, Ke.h)()) || void 0 === ie || ie.clickCodeBlock(ee)
        }
      };
    var te = He(41717),
      Ze = He(42105),
      we = He(1033),
      De = He(39829),
      Pe = He(5255),
      Ae = He(41725),
      Ye = He(41712),
      Ve = He(41728);

    function ae(ee) {
      if (null === ee) return null;
      const ie = [];
      for (const He of ee) {
        const ee = Object.keys(He)[0];
        if ("Be" === ee) {
          const {
            str: ee,
            style: ye,
            clickableUrl: be
          } = He.Be, Me = Object.keys(ee)[0], Ke = ee[Me];
          "string" !== Me && "styledEntityName" !== Me && "styledTranslatedText" !== Me || ie.push({
            str: Ke,
            style: ye,
            clickableUrl: be
          })
        } else ie.push(He[ee])
      }
      return ie
    }
    const ce = {
      screenPos(ee) {
        var ie, He;
        return null !== (ie = null === (He = (0, Ke.h)()) || void 0 === He ? void 0 : He.renderFrame.projectWorldPosToScreenPos(ee)) && void 0 !== ie ? ie : {
          x: 0,
          y: 0
        }
      }
    };
    let xe = !1;

    function Le() {
      xe || (xe = !0, (0, Te.j)(oe.ic.ProgressBarUpdate, (ee => {
        const ie = (0, Ve.h)(ee);
        (0, Ve.c)(ie) && Je.h.yR("progressBarUpdate", ie, !0)
      })), (0, Te.j)(Ae.v, (ee => {
        const ie = (0, Ve.g)(Ae.v, ee);
        ie && Je.h.yR("middleScreenBarInitiate", {
          duration: ie.Ky,
          Uy: ie.Uy,
          horizBarRemOffset: ie.Fy
        }, !0)
      })), (0, Te.j)(oe.ic.RemoveMiddleScreenBar, (() => {
        Je.h.yR("middleScreenBarRemove")
      })), (0, Te.j)(Ae.$, (ee => {
        const ie = (0, Ve.g)(Ae.$, ee);
        if (ie) {
          var He;
          const ee = ie.QH ? null === (He = (0, Ke.h)()) || void 0 === He ? void 0 : He.renderFrame.projectDirectionToScreenPos(ie.QH) : void 0;
          Je.h.yR("sendHitmarker", {
            Tb: ie.Tb,
            screenPos: ee
          }, !0)
        }
      })), (0, Te.j)(Ae.db, (ee => {
        const ie = (0, Ve.g)(Ae.db, ee);
        if (ie) {
          const {
            id: ee,
            position: He,
            style: ye,
            Ji: be,
            Ri: Me
          } = ie;
          Je.h.yR("setDirectionArrow", {
            id: ee,
            position: He,
            style: ye,
            text: ae(be),
            Ri: Me
          }, !0)
        }
      })), (0, Te.j)(Ae.h, (ee => {
        const ie = (0, Ve.g)(Ae.h, ee);
        ie && Je.h.yR("clearDirectionArrow", {
          id: ie.id
        }, !0)
      })), (0, Te.j)(Ae.o, (ee => {
        const ie = (0, Ve.g)(Ae.o, ee);
        ie && Je.h.yR("flyingMiddleMessage", {
          content: ae(ie.ze),
          ge: ie.ge,
          Oe: ie.Oe
        }, !0)
      })), (0, Te.j)(oe.ic.WorldVariation, (ee => {
        const ie = (0, Ve.h)(ee);
        if ("string" === typeof ie) {
          const ee = ie === we.f ? null : {
            message: `Currently loaded as variation: ${ie}`,
            type: "Warning"
          };
          Je.h.yR("showPermanentBottomMessage", ee, !0)
        }
      })), (0, Te.j)(Ae.E, (ee => {
        const ie = (0, Ve.g)(Ae.E, ee);
        ie && function(ee, ie) {
          const {
            type: He,
            params: ye
          } = (0, De.e)(ie), be = {
            ...ye
          };
          for (const Me of De.c) be[Me] && (be[Me] = ae(be[Me]));
          Pe.d.queueQTE(ee, He, be).getResult().then((ie => {
            var He;
            "boolean" === typeof ie && (null === (He = (0, Ke.h)()) || void 0 === He || He.send(Ye.e.QteResponse, {
              qteId: ee,
              qteResponse: ie
            }))
          }))
        }(ie.id, ie.Ci)
      })), (0, Te.j)(Ae.T, (ee => {
        const ie = (0, Ve.g)(Ae.T, ee);
        "number" === typeof ie && Pe.d.cancelQTE(ie)
      })), (0, Te.g)((() => {
        Pe.d.reset()
      })), (0, Te.i)((() => {
        Pe.d.reset()
      })), (0, Te.j)(oe.ic.EditItemCraftingRecipes, (ee => {
        const ie = (0, Ve.h)(ee);
        (0, Ve.c)(ie) && Je.h.yR("craftingRecipesEdited", {
          itemName: ie.craftingRecipeItemName,
          recipesForItem: ie.recipesForItem
        })
      })), (0, Te.j)(Ae.Q, (ee => {
        const ie = (0, Ve.g)(Ae.Q, ee);
        ie && Je.h.yR("craftingRecipesEdited", {
          itemName: ie.SM,
          recipesForItem: []
        })
      })))
    }
    var Ce = He(18);
    const ve = [{
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

    function ue(ee) {
      return Ee.v.playerFlags(ee.api.apiView, 0)
    }
    const me = {
        freeCamera: (0, qe.c)((ee => () => {
          const ie = ee.isSessionLive && 0 !== (ue(ee) & Ee.Pd.FreeCamMoves),
            He = ee.freeCameraAllowed() && null === Ce.e.get("scriptedCameraFacing");
          return ve[(He ? 2 : 0) + (ie ? 1 : 0)]
        }), ve[0], (ee => (0, Me.u)(ee)))
      },
      le = {
        setFreeCameraMovesFly: ee => {
          var ie;
          null === (ie = (0, Ke.h)()) || void 0 === ie || ie.setFreeCameraMovesFly(ee)
        }
      },
      Se = {
        freeCameraPos: () => {
          const ee = (0, Ke.h)();
          return null !== ee && void 0 !== ee && ee.isSessionLive && ee.renderFrame.hasView && 0 !== (ue(ee) & Ee.Pd.FreeCam) ? ee.renderFrame.cameraPosition : null
        }
      };
    var ne = He(40017);
    let je = !1,
      se = !1;

    function Ie() {
      const ee = (0, Ke.h)();
      if (null === ee || void 0 === ee || !ee.isSessionLive) return void(je = !1);
      const ie = 0 !== (Ee.v.playerFlags(ee.api.apiView, 0) & Ee.Pd.FreeCam);
      ie !== je && (je = ie, (0, ne.e)(ie))
    }
    var he = He(347),
      Ne = He(37853),
      Ge = He(2022);
    var re = He(42109),
      Qe = He(41747);
    const ei = {
      interactPrompt: null,
      blockText: null,
      neededTool: null
    };
    let ii = "off";

    function Hi(ee) {
      var ie;
      return null === ee ? null : {
        label: null !== (ie = (0, re.c)(ee, "interactionPrompt")) && void 0 !== ie ? ie : null
      }
    }
    const yi = new Map([
      [Ee.tc.Open, {
        label: Fe.h.open
      }],
      [Ee.tc.Close, {
        label: Fe.h.close
      }],
      [Ee.tc.Milk, {
        label: Fe.h.milk
      }],
      [Ee.tc.Shear, {
        label: Fe.h.shear
      }],
      [Ee.tc.Tame, {
        label: Fe.h.tame
      }],
      [Ee.tc.Feed, {
        label: Fe.h.feed
      }],
      [Ee.tc.Ride, {
        label: Fe.h.ride
      }]
    ]);
    class bi {
      constructor() {
        this.target = ei, this.po = Ee.ad, this.optionName = null, this.pickaxe = new Fe.d
      }
      read(ee) {
        var ie;
        const He = Ee.v.targetBlockId(ee.api.apiView, 0);
        He !== this.po && (this.po = He, this.optionName = He === Ee.ad ? null : `${ee.tables.getMetaInfo(He).rootName}CrosshairText`);
        const ye = null === this.optionName ? null : null !== (ie = ee.tables.getClientOption(this.optionName)) && void 0 !== ie ? ie : null;
        this.pickaxe.update(function(ee, ie) {
          var He, ye, be;
          if (0 === (Ee.v.playerFlags(ee.api.apiView, 0) & Ee.Pd.Breaking) || ie === Ee.ad || 0 === ie) return null;
          const {
            tables: Me
          } = ee;
          if (!0 === Me.getClientOption("creative")) return null;
          const Ke = Me.nameOfId(ie),
            Ue = null === (He = ee.items.lJ()) || void 0 === He ? void 0 : He.name,
            Fe = null !== (ye = Me.getItemStat(Ke, "harvestLevel")) && void 0 !== ye ? ye : 0;
          return (0, he.Fc)({
            blockHarvestType: Me.getDefaultItemStat(Ke, "harvestType"),
            blockHarvestLevel: Me.getDefaultItemStat(Ke, "harvestLevel"),
            harvestLevel: Fe,
            heldToolType: void 0 === Ue ? void 0 : Me.getDefaultItemStat(Ue, "harvests"),
            heldToolLevel: void 0 === Ue ? void 0 : Me.getDefaultItemStat(Ue, "level")
          }) && null !== (be = Ne.s[Fe]) && void 0 !== be ? be : null
        }(ee, He)), ee.watchPromptPick(ii);
        const be = "touch" === ii ? function(ee) {
          var ie;
          const He = ee.interactLabel;
          return He === Ee.tc.Entity ? Hi(ee.promptEntity) : He === Ee.tc.TameWith ? {
            label: (0, Fe.y)(ee.tables.nameOfId(ee.interactIcon))
          } : null !== (ie = yi.get(He)) && void 0 !== ie ? ie : null
        }(ee) : Hi(ee.promptEntity);
        return this.target = (0, Ge.j)(this.target, {
          interactPrompt: be,
          blockText: ye,
          neededTool: this.pickaxe.shown
        }), this.target
      }
    }
    let Mi = null;
    const Ki = {
      current: () => {
        var ee, ie;
        return null !== (ee = null === (ie = Mi) || void 0 === ie ? void 0 : ie.target) && void 0 !== ee ? ee : ei
      },
      watch: ee => {
        const ie = new bi;
        Mi = ie;
        const He = (0, qe.i)((He => {
          let ye = ie.read(He);
          ee(ye);
          const be = (0, Me.w)((() => {
            const be = ie.read(He);
            be !== ye && (ye = be, ee(be))
          }));
          return () => {
            be(), He.watchPromptPick("off")
          }
        }));
        return () => {
          He(), Mi === ie && (Mi = null)
        }
      }
    };
    let Ui = 0,
      Fi = 0;
    const Ji = {
        health: Fe.s,
        aura: Fe.j,
        hotbar: Qe.b.states.hotbar,
        heldItemAim: Qe.b.states.heldItemAim,
        crouching: (0, qe.c)((ee => function(ee) {
          const ie = () => 0 !== (Ee.v.playerFlags(ee.apiView, 0) & Ee.Pd.Crouching);
          return {
            current: ie,
            watch(ee) {
              let He = ie();
              return (0, Me.u)((() => {
                const ye = ie();
                ye !== He && (He = ye, ee(ye))
              }))
            }
          }
        }(ee.api).current), !1, (ee => (0, Me.u)(ee))),
        flight: (0, qe.c)((ee => () => function(ee) {
          const ie = Ee.v.playerFlags(ee.apiView, 0);
          return (0, Fe.q)(0 !== (ie & Ee.Pd.CanFly), 0 !== (ie & Ee.Pd.Flying))
        }(ee.api)), (0, Fe.q)(!1, !1), (ee => (0, Me.u)(ee))),
        gliderBoostFuel: (0, qe.c)((ee => () => Ee.v.gliderBoostFuel(ee.api.apiView, 0)), 0, (ee => (0, Me.u)(ee))),
        crosshairTarget: Ki
      },
      oi = {
        hotbarSlotRequested: Qe.b.events.hotbarSlotRequested,
        hotbarScrolled: Qe.b.events.hotbarScrolled,
        numberKeyPressed: Qe.b.events.numberKeyPressed,
        shotDamageToShow: (0, Fe.v)((ee => !0 === (0, re.c)(ee, "showDamageAmounts")))
      },
      Ri = {
        selectHotbarSlot: Qe.b.commands.selectHotbarSlot,
        setCrosshairInteractPrompt: ee => {
          ii = ee
        }
      },
      ki = {
        momentumFrac: function() {
          var ee, ie, He;
          const ye = (0, Ke.h)(),
            be = performance.now(),
            Me = null === ye || void 0 === ye || null === (ee = ye.items.lJ()) || void 0 === ee || null === (ie = ee.attributes) || void 0 === ie || null === (He = ie.customAttributes) || void 0 === He ? void 0 : He.enchantments;
          return Ui = null !== ye && null !== Me && void 0 !== Me && Me.Momentum ? 0 !== (Ee.v.playerFlags(ye.api.apiView, 0) & Ee.Pd.Breaking) ? Math.max(0, Ee.v.momentumFrac(ye.api.apiView, 0)) : Math.max(0, Ui - (be - Fi) / 1500) : 0, Fi = be, Ui
        }
      };
    var qi = He(41702);
    const fi = {
      lobbyManage(ee) {
        var ie;
        null === (ie = (0, Ke.h)()) || void 0 === ie || ie.send(Ye.e.LobbyManage, ee)
      }
    };
    var Ti = He(1189),
      Xi = He(37301),
      zi = He(9521),
      Bi = He(1620),
      Ei = He(2492),
      gi = He(5282);
    let Oi = !1;

    function di(ee) {
      Oi = ee
    }

    function Wi() {
      "inGame" !== Ce.e.get("gameState") || (0, Bi.q)() || Je.h.yR("ctrlCrouchWithoutFullscreen")
    }
    let ti = !1;
    const Zi = {
        OpenEmoteWheel: () => {
          di(!0), ti = !0, queueMicrotask((() => {
            ti && (ti = !1, Je.h.yR("requestEmoteWheelHoldOpen"))
          }))
        },
        ToggleFullCoordinateOverlay: () => {
          Je.h.yR("toggleFullCoordinateOverlay")
        },
        KeyYPressed: () => {
          (0, Xi.e)() || Je.h.yR("YKeyPressed")
        },
        KeyXPressed: () => {
          (0, Xi.e)() || Je.h.yR("XKeyPressed")
        },
        CtrlCrouch: Wi,
        "primary-fire": () => {
          Je.h.yR("mouseState", {
            sJ: Ti.b.DownFirePrimary,
            isDown: !0
          })
        },
        "alt-fire": () => {
          Je.h.yR("mouseState", {
            sJ: Ti.b.DownFireSecondary,
            isDown: !0
          })
        },
        TouchHold: () => {
          Je.h.yR("mouseState", {
            sJ: Ti.b.TouchDownLong,
            isDown: !0
          })
        }
      },
      wi = {
        OpenEmoteWheel: () => {
          di(!1), ti ? (ti = !1, (0, zi.e)() || Je.h.yR("requestEmoteWheelHoldOpen")) : Je.h.yR("requestEmoteWheelHoldRelease")
        },
        CtrlCrouch: Wi,
        "primary-fire": () => {
          Je.h.yR("mouseState", {
            sJ: Ti.b.UpFirePrimary,
            isDown: !1
          })
        },
        "alt-fire": () => {
          Je.h.yR("mouseState", {
            sJ: Ti.b.UpFireSecondary,
            isDown: !1
          })
        },
        TouchDig: () => {
          Je.h.yR("mouseState", {
            sJ: Ti.b.UpFirePrimary,
            isDown: !1
          })
        }
      };
    let Di = !1;

    function Pi() {
      Di || (Di = !0, (0, gi.j)((ee => {
        if ((0, be.b)()) return;
        const ie = (0, gi.f)(ee) ? "primary-fire" : ee.action;
        var He;
        if (ee.down) {
          if (0 === (ee.flags & Ei.d.Synthetic)) {
            var ye;
            null === (ye = Zi[ie]) || void 0 === ye || ye.call(Zi)
          }
        } else null === (He = wi[ie]) || void 0 === He || He.call(wi)
      })))
    }
    var Ai = He(335),
      Yi = He(97),
      Vi = He(35),
      ai = He(41977),
      ci = He(1305),
      xi = He(2518);
    let Li = !1;
    const Ci = {
      sendCodeCollab(ee) {
        var ie;
        null === (ie = (0, Ke.h)()) || void 0 === ie || ie.send(Ye.e.CodeCollab, (0, Ye.m)(ee), (0, xi.f)(ee))
      }
    };
    var vi = He(39896),
      ui = He(9451);
    let mi = null,
      li = !1,
      Si = null;

    function ni() {
      return "inGame" === Ce.e.get("gameState") && !(0, Xi.e)()
    }
    const ji = {
        OpenInventory: ee => {
          (0, Bi.w)(ee, "inventory", (0, qi.l)())
        },
        OpenShop: ee => {
          mi && ni() && (0, Bi.u)(ee, Ai.r.SHOP, !mi.shopIsEmpty(Be.c.get("shopInfo")))
        },
        OpenLobbyLeaderboard: ee => {
          ni() && (0, Bi.u)(ee, Ai.r.LOBBY_LEADERBOARD, (0, vi.e)({
            lobbyLeaderboardInfo: Be.c.get("lobbyLeaderboardInfo"),
            lobbyManage: Be.c.get("lobbyManage")
          }))
        },
        OpenTasksAndLeaderboard: ee => {
          var ie;
          const He = null === (ie = mi) || void 0 === ie ? void 0 : ie.getClientGameMapKey();
          He ? (0, Bi.y)(ee, !0, He) : (0, Bi.w)(ee, "retentionFeatures", !(!Be.c.get("_tasks") && !Be.c.get("_availableLeaderboards")))
        },
        OpenInviteLink: ee => {
          (0, Bi.w)(ee, "inviteLink", Yi.featureFlags.canUseInviteLinks)
        },
        OpenCodeEditor: ee => {
          ni() && function(ee) {
            const ie = (0, Ke.h)(),
              He = null !== ie && void 0 !== ie && ie.isSessionLive ? ie.api : null,
              ye = He ? He.pE(He.localId) : null;
            (0, Bi.y)(ee, null !== ye && (0, xi.d)((0, ci.e)()), (() => {
              (0, xi.i)(ye)
            }))
          }(ee)
        },
        HideUi: () => {
          Je.h.yR("showUi", !1)
        }
      },
      si = {
        HideUi: () => {
          Je.h.yR("showUi", !0)
        }
      };

    function Ii() {
      li || (li = !0, He.e(173).then((() => He(63776))).then((ee => {
        mi = ee
      }), (ee => {
        console.error("[bloxd-wasm-client] the menu keys' checks did not load", ee)
      })), (0, ai.D)((ee => {
        ee || !(0, ai.j)() || (0, Yi.isMobile)() || !Vi.i.getItem("disableFullscreen") || (0, Bi.o)() || Ce.e.set({
          openEverythingMenuName: Ai.r.SETTINGS
        })
      })), (0, gi.j)((ee => {
        let {
          action: ie,
          down: He,
          press: ye
        } = ee;
        var Me, Ke;
        (0, be.b)() || (He ? null === (Me = ji[ie]) || void 0 === Me || Me.call(ji, function(ee) {
          var ie;
          if (0 === ee || (null === (ie = Si) || void 0 === ie ? void 0 : ie.press) !== ee) {
            const ie = {
              press: ee,
              event: (0, ui.d)("inputAction")
            };
            Si = ie, queueMicrotask((() => {
              Si === ie && (Si = null)
            }))
          }
          return Si.event
        }(ye)) : null === (Ke = si[ie]) || void 0 === Ke || Ke.call(si))
      })))
    }
    var Ni = He(39818),
      Gi = He(39808),
      ri = He(39802);
    const Qi = {
      completeTask(ee) {
        var ie;
        null === (ie = (0, Ke.h)()) || void 0 === ie || ie.send(Ye.e.CompleteTask, (0, Ye.p)(ee))
      },
      setServerCookie(ee) {
        var ie;
        let {
          key: He,
          value: ye
        } = ee;
        null === (ie = (0, Ke.h)()) || void 0 === ie || ie.send(Ye.e.GeneralCookieSet, (0, Ye.v)({
          bJ: He,
          MJ: ye
        }))
      },
      answerUiRequest(ee) {
        var ie;
        let {
          id: He,
          pJ: ye
        } = ee;
        null === (ie = (0, Ke.h)()) || void 0 === ie || ie.send(Ye.e.UiRequestResp, (0, Ye.U)({
          Ro: He,
          ko: ye,
          qo: 5
        }))
      },
      chooseRewardedAd(ee) {
        var ie;
        let {
          id: He,
          pJ: ye
        } = ee;
        null === (ie = (0, Ke.h)()) || void 0 === ie || ie.send(Ye.e.UiRequestResponded, (0, Ye.R)({
          id: He,
          pJ: ye
        }))
      },
      requestLeaderboard(ee) {
        var ie;
        let {
          category: He,
          timeframe: ye,
          seeTop: be
        } = ee;
        null === (ie = (0, Ke.h)()) || void 0 === ie || ie.send(Ye.e.LeaderboardRequest, {
          category: He,
          timeframe: ye,
          seeTop: be
        })
      }
    };
    let eH = !1;
    const iH = ze.g.KX / 2,
      HH = [iH, -iH, -iH, -iH, iH, iH, -iH, iH],
      yH = [0, 0, 0];

    function bH(ee, ie, He) {
      for (let ye = 0; ye < ee.length; ye += 2)
        if (ee[ye] === ie && ee[ye + 1] === He) return !0;
      return !1
    }
    const MH = {
      blocksStandingOn: function() {
        const ee = (0, Ke.h)();
        if (null === ee) return [];
        const {
          api: ie,
          chunks: He,
          tables: ye
        } = ee;
        if (!ie.readPosition(ie.localId, yH)) return [];
        const [be, Me, Ue] = yH, Fe = Math.ceil(Me) - 1, Je = [], oe = [];
        for (let Ke = 0; Ke < HH.length; Ke += 2) {
          const ee = be + HH[Ke],
            ie = Ue + HH[Ke + 1];
          if (Number.isInteger(ee) || Number.isInteger(ie)) continue;
          const Me = Math.floor(ee),
            Re = Math.floor(ie);
          if (bH(oe, Me, Re)) continue;
          const ke = He.po(Me, Fe, Re);
          ye.isSolidBlockId(ke) && (oe.push(Me, Re), Je.push(ye.nameOfId(ke)))
        }
        return Je
      },
      dropAhead: function() {
        const ee = (0, Ke.h)();
        return null !== ee && 0 !== (Ee.v.playerFlags(ee.api.apiView, 0) & Ee.Pd.DropAhead)
      }
    };
    var KH = He(37780),
      UH = He(39867),
      FH = He(1340),
      JH = He(41759);
    const oH = new Set(["replayLoad", "replaySave", "replaySaveAs", "replayTimelineZoomIn", "replayTimelineZoomOut"]),
      RH = new Set(["replaySkipBack", "replaySkipForward", "replaySpeedUp", "replaySpeedDown", "replayRecordKeyframe"]);

    function kH() {
      const ee = new Set;
      return {
        add: ie => (ee.add(ie), () => {
          ee.delete(ie)
        }),
        fire() {
          for (const ie of ee) ie()
        }
      }
    }
    const qH = Object.freeze([]);

    function fH(ee, ie) {
      let He, {
        rereads: ye,
        followLocalId: be
      } = ie;
      const Ke = () => (He = (0, Ge.j)(He, ee()), He);
      return {
        current: Ke,
        watch(ee) {
          const ie = (0, fe.d)((ie => {
            ye(ie) && ee(Ke())
          }));
          if (!be) return ie;
          let He = (0, qe.g)();
          const Ue = (0, Me.w)((() => {
            const ie = (0, qe.g)();
            ie !== He && (He = ie, ee(Ke()))
          }));
          return () => {
            ie(), Ue()
          }
        }
      }
    }
    const TH = {
        players: fH((function() {
          const ee = fe.f.ids(),
            ie = {};
          for (const Me of ee) {
            var He, ye, be;
            ie[Me] = {
              name: null !== (He = fe.f.getName(Me)) && void 0 !== He ? He : null,
              ranks: null !== (ye = fe.f.getSetting(Me, "ranks")) && void 0 !== ye ? ye : qH,
              cosmetics: null !== (be = (0, fe.h)(Me)) && void 0 !== be ? be : null
            }
          }
          return {
            ids: ee,
            byId: ie,
            localId: (0, qe.g)()
          }
        }), {
          rereads: ee => "roster" !== ee.kind || ee.members || ee.settings.has("ranks"),
          followLocalId: !0
        }),
        lobbyLeaderboardRows: fH((function() {
          const ee = {};
          for (const be of fe.f.ids()) {
            var ie, He, ye;
            ee[be] = {
              colour: null !== (ie = fe.f.getSetting(be, "colorInLobbyLeaderboard")) && void 0 !== ie ? ie : null,
              values: null !== (He = fe.f.getSetting(be, "lobbyLeaderboardValues")) && void 0 !== He ? He : null,
              tags: null !== (ye = fe.f.getSetting(be, "lobbyLeaderboardTags")) && void 0 !== ye ? ye : null
            }
          }
          return ee
        }), {
          rereads: function(ee) {
            if ("roster" !== ee.kind) return "reset" === ee.kind;
            const {
              members: ie,
              settings: He
            } = ee;
            return ie || He.has("colorInLobbyLeaderboard") || He.has("lobbyLeaderboardValues") || He.has("lobbyLeaderboardTags")
          },
          followLocalId: !1
        })
      },
      pH = {
        cosmeticsUpdated: {
          watch: ee => (0, fe.d)((ie => {
            if ("cosmetics" !== ie.kind) return;
            const He = (0, qe.g)();
            ee(ie.updates.map((ee => {
              let {
                de: ie,
                te: ye,
                Ze: be
              } = ee;
              return {
                local: ie === He,
                te: ye,
                Ze: be
              }
            })))
          }))
        }
      };
    var XH = He(3142),
      zH = He(1768),
      BH = He(660),
      EH = He(42015);
    let gH = !1,
      OH = null;
    const dH = {
      setShopOpen(ee) {
        var ie;
        null === (ie = (0, Ke.h)()) || void 0 === ie || ie.send(Ye.e.ShopMenuChanged, (0, Ye.J)(ee))
      },
      buyShopItem(ee) {
        var ie;
        let {
          categoryKey: He,
          itemKey: ye,
          userInput: be
        } = ee;
        null === (ie = (0, Ke.h)()) || void 0 === ie || ie.send(Ye.e.ItemBought, {
          categoryKey: He,
          itemKey: ye,
          shopVersion: Be.c.get("_shopVersion"),
          userInput: be
        })
      }
    };
    let WH = !1;
    var tH = He(5291);
    const ZH = Ei.p.LookFrozen | Ei.p.ClicksSuppressed;

    function wH(ee, ie) {
      var He;
      null !== (He = (0, Ke.h)()) && void 0 !== He && He.send(ee, ie) || console.warn(`[bloxd-wasm-client] message ${ee} not sent: no live game or the core's command ring is full`)
    }(0, Te.j)(Ae.fb, (ee => {
      const ie = (0, Ve.g)(Ae.fb, ee);
      void 0 !== ie && Je.h.yR("setDiscordReportKey", ie)
    }));
    const DH = {
      ignorePlayer(ee) {
        wH(Ye.e.IgnoreUser, (0, Ye.x)({
          Xo: ee
        }))
      },
      reportPlayer(ee) {
        let {
          playerId: ie,
          chatMsgId: He,
          policy: ye,
          details: be
        } = ee;
        wH(Ye.e.UserReport, (0, Ye.db)({
          mF: ie,
          lF: He,
          policy: ye,
          UF: be
        }))
      },
      reportWorldCodeChat(ee) {
        let {
          chatMsgId: ie,
          policy: He,
          details: ye
        } = ee;
        wH(Ye.e.UserReport, (0, Ye.db)({
          mF: "",
          lF: ie,
          policy: He,
          UF: ye
        }))
      },
      requestDiscordReportKey(ee) {
        wH(Ye.e.ReqDiscordReportKey, (0, Ye.F)(ee))
      },
      reportLobbyOrGame(ee) {
        let {
          target: ie,
          policy: He,
          details: ye
        } = ee;
        "customGame" === ie ? wH(Ye.e.CustomGameReport, (0, Ye.r)({
          policy: He,
          UF: ye
        })) : wH(Ye.e.LobbyReport, (0, Ye.B)({
          policy: He,
          UF: ye
        }))
      },
      updateMyCosmetic(ee) {
        wH(Ye.e.UpdateMyCosmetic, (0, Ye.ab)(ee))
      },
      holdEmoteWheel(ee) {
        !ee || Oi ? (0, tH.h)(ZH, ee ? ZH : 0) : Je.h.yR("requestEmoteWheelHoldRelease")
      }
    };
    var PH = He(42113),
      AH = He(9961),
      YH = He(40509);
    const VH = [0, 0, 0],
      aH = [0, 0, 0],
      cH = [0, 0, 0],
      xH = {
        blockAtViewPoint(ee) {
          let {
            x: ie,
            y: He
          } = ee;
          const ye = (0, Ke.h)();
          if (null === ye || void 0 === ye || !ye.renderFrame.hasView) return null;
          const {
            renderFrame: be,
            clientApi: Me,
            api: Ue
          } = ye;
          let Fe = 0;
          return (0, YH.d)(((ee, ie, He) => (Fe = Me.getBlockId(ee, ie, He), 0 !== Fe)), be.cameraPosition, (0, YH.g)((ee => Ee.v.viewProj(Ue.apiView, 0, ee)), ie, He, VH), YH.c, aH, cH) ? {
            pos: [aH[0], aH[1], aH[2]],
            normal: [cH[0], cH[1], cH[2]],
            name: (0, AH.e)(Fe)
          } : null
        }
      },
      LH = {
        setBlockHighlight(ee) {
          var ie;
          null === (ie = (0, Ke.h)()) || void 0 === ie || ie.setBlockHighlight(ee)
        }
      };
    var CH = He(1992),
      vH = He(42006),
      uH = He(42116),
      mH = He(2036),
      lH = He(37190),
      SH = He(242);
    const nH = {
        icon: ".EntireInventoryWrapper .InvenBodyRight .InvenItem .DrawnBlockIcon",
        fallbackRem: 3.4,
        asked: new Set
      },
      jH = {
        icon: ".EntireInventoryWrapper .LazyLoadedItemWrapper .InvenItem .DrawnBlockIcon",
        fallbackRem: .9 * nH.fallbackRem,
        asked: new Set
      },
      sH = 2e3,
      IH = 4;
    let hH = [],
      NH = !1,
      GH = !1,
      rH = !1;
    const QH = new Set,
      ey = [];
    let iy = 0,
      Hy = null;

    function yy() {
      return NH && (0, lH.k)()
    }

    function by() {
      let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ye.gameBridge.latest("inventory");
      if (rH && !GH) {
        for (const He of ee.player) {
          var ie;
          if (null !== He) My(null !== (ie = He.icon) && void 0 !== ie ? ie : He.name, nH)
        }
        for (const ee of [...Ee.J, ...hH]) My(ee, jH);
        Uy()
      }
    }

    function My(ee, ie) {
      ie.asked.has(ee) || QH.has(ee) || ("model" === ye.gameBridge.lookup("itemIcon", ee).kind ? (ie.asked.add(ee), ey.push({
        name: ee,
        slot: ie
      })) : QH.add(ee))
    }

    function Ky(ee) {
      hH = ee, by()
    }

    function Uy() {
      !rH || GH || null !== Hy || 0 === ey.length || iy >= IH || (Hy = (0, SH.e)((() => {
        Hy = null;
        const ee = ey.shift();
        void 0 !== ee && rH && (iy++, async function(ee, ie) {
          var He, be;
          if (await (0, lH.p)(), !rH) return void ie.asked.delete(ee);
          if (!(0, lH.k)()) return void(GH = !0);
          const Me = window.devicePixelRatio,
            Ke = null !== (He = null === (be = document.querySelector(ie.icon)) || void 0 === be ? void 0 : be.getBoundingClientRect().width) && void 0 !== He ? He : 0,
            Ue = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16,
            Fe = Math.round((Ke > 0 ? Ke : ie.fallbackRem * Ue) * Me);
          try {
            await ye.gameBridge.query("blockIcon", {
              name: ee,
              size: Fe,
              lineWidth: (0, mH.d)(Me)
            }) || ie.asked.delete(ee)
          } catch {
            ie.asked.delete(ee)
          }
        }(ee.name, ee.slot).finally((() => {
          iy--, Uy()
        })), Uy())
      }), {
        timeoutMs: sH
      }))
    }
    var Fy = He(4883),
      Jy = He(4864),
      oy = He(42120),
      Ry = He(3608),
      ky = He(3610);
    let qy = null,
      fy = null;

    function Ty(ee) {
      const ie = ee.startsWith(ky.i),
        [He, ye = He, be = He] = (ie ? ee.slice(ky.i.length) : ee).split(ky.e);
      return {
        top: He,
        left: ye,
        right: be,
        half: ie
      }
    }

    function py(ee) {
      const ie = null === qy ? void 0 : (0, Ry.c)(ee),
        He = void 0 === ie ? 0 : qy.codes[ie];
      return 0 === He ? void 0 : qy.pool[He - 1]
    }
    var Xy = He(3601),
      zy = He(4853),
      By = He(4881),
      Ey = He(37090),
      gy = He(37096);
    const Oy = "item:";
    let dy = null,
      Wy = null,
      ty = null,
      Zy = null,
      wy = !1,
      Dy = !1;

    function Py() {
      return Dy || (Dy = !0, (0, By.l)().then((ee => {
        ee && (0, CH.d)()
      }))), ty ??= Promise.all([(0, Xy.d)(), (fy ??= He.e(1).then((() => He(63800))).then((ee => {
        let {
          BLOCK_FACE_RUNS: ie,
          BLOCK_FACES: He,
          MAX_FACE_ITEM_ID: ye
        } = ee;
        qy = {
          codes: (0, ky.s)(ie, ye + 1),
          pool: He.split(ky.n).map(Ty)
        }
      }), (ee => {
        throw fy = null, ee
      })), fy), (0, gy.d)(), He.e(220).then((() => He(34897)))]).then((ee => {
        let [, , ie, He] = ee;
        ie.followBundledTextures(), dy = ie, Wy = He, (0, CH.d)()
      }), (ee => {
        ty = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", ee)
      })), ty
    }

    function Ay(ee) {
      var ie, He;
      return null !== (ie = null === (He = (0, Ey.j)()) || void 0 === He ? void 0 : He.textureUrl(ee)) && void 0 !== ie ? ie : dy.itemSpriteUrl(ee)
    }

    function Yy(ee) {
      var ie, He;
      return null !== (ie = null === (He = (0, Ey.j)()) || void 0 === He ? void 0 : He.textureUrl(ee)) && void 0 !== ie ? ie : dy.blockTextureUrl(ee)
    }

    function Vy(ee) {
      var ie;
      return null !== (ie = (0, Xy.c)(ee)) && void 0 !== ie ? ie : ee
    }

    function ay(ee, ie) {
      var He, ye, be;
      return null !== (He = null !== (ye = null !== (be = Yy(ee)) && void 0 !== be ? be : null === ie || void 0 === ie ? void 0 : ie.rotated[ee]) && void 0 !== ye ? ye : null === ie || void 0 === ie ? void 0 : ie.animated[ee]) && void 0 !== He ? He : dy.notFoundUrl()
    }

    function cy(ee) {
      return void 0 !== (0, Ry.c)(ee) ? ee : /^[1-9][0-9]*$/.test(ee) ? (0, Ry.g)(Number(ee)) : void 0
    }

    function xy(ee) {
      var ie;
      if (ee.startsWith(Oy)) {
        var He;
        const ie = (0, Xy.c)(ee.slice(5));
        return null !== (He = void 0 === ie ? null : Ay(ie)) && void 0 !== He ? He : dy.notFoundUrl()
      }
      return null !== (ie = dy.particleUrl(ee)) && void 0 !== ie ? ie : dy.notFoundUrl()
    }

    function Ly(ee, ie) {
      return "StairsBlock" === ee ? ee : ie ? "SlabBlock" : "CubeBlock"
    }
    const Cy = {
        async blockIcon(ee) {
          var ie;
          let {
            name: ye,
            size: be,
            lineWidth: Me
          } = ee;
          await Py();
          const Ke = null !== (ie = cy(ye)) && void 0 !== ie ? ie : ye,
            Ue = (0, By.e)(Ke, be, Me);
          if (null !== Ue) return Ue;
          const Fe = py(Ke),
            Je = (0, Ry.c)(Ke),
            oe = void 0 === Je || null === Wy ? void 0 : Wy.itemTypeNameOf(Je);
          if (null === dy || void 0 === Fe) return "";
          const Re = [Fe.top, Fe.left, Fe.right].some((ee => null === Yy(ee))),
            ke = Re ? await (Zy ??= He.e(228).then((() => He(34995))).then((ee => (wy && (wy = !1, (0, CH.d)()), {
              rotated: ee.rotatedBlockTextures,
              animated: ee.animatedBlockTextures
            })), (ee => (Zy = null, wy = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", ee), null))), Zy) : null;
          if (Re && null === ke) return "";
          const qe = {
              top: ay(Fe.top, ke),
              left: ay(Fe.left, ke),
              right: ay(Fe.right, ke),
              itemType: Ly(oe, Fe.half)
            },
            fe = (0, Ey.f)(),
            Te = 0 === fe ? Ke : `${Ke}#${fe}`;
          return (await (0, zy.b)()).drawBlockIconUrl(Te, be, Me, (() => qe))
        }
      },
      vy = {
        itemIcon: function(ee) {
          var ie, He, be, Me;
          if (null === dy) return Py(), ye.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(ee);
          if ((0, Jy.k)(ee)) return {
            kind: "icon",
            url: null !== (He = null !== (be = null === (Me = (0, Ey.j)()) || void 0 === Me ? void 0 : Me.textureUrl(ee)) && void 0 !== be ? be : dy.ingameIconUrl(ee)) && void 0 !== He ? He : dy.notFoundUrl()
          };
          if (ee.startsWith(Jy.d)) return {
            kind: "icon",
            url: xy(ee.slice(Jy.d.length))
          };
          if (0 === (0, Ry.j)()) return (0, oy.c)(), ye.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(ee);
          const Ke = null !== (ie = cy(ee)) && void 0 !== ie ? ie : ee,
            Ue = (0, Ry.c)(Ke),
            Fe = void 0 === Ue ? void 0 : Wy.itemTypeNameOf(Ue);
          if (void 0 !== py(Ke)) return {
            kind: "drawnBlock"
          };
          const Je = function(ee) {
            var ie;
            return null !== (ie = Ay(Vy(ee))) && void 0 !== ie ? ie : dy.notFoundUrl()
          }(Ke);
          if ((0, By.i)(Ke) && ! function(ee) {
              const ie = (0, Ey.j)();
              return null !== ie && (null !== ie.textureUrl(Vy(ee)) || (0, By.d)(ee).some((ee => null !== ie.modelUrl(ee))))
            }(Ke)) return {
            kind: "model",
            url: Je,
            drawn: (0, By.f)(Ke)
          };
          if ("Gun" === Fe) return {
            kind: "gun",
            url: Je
          };
          if (void 0 !== Ue && "GrayscaleArmour" === Wy.itemTypeOf(Ue) || Object.hasOwn(Fy.e, Ke)) {
            var oe;
            const ie = null !== (oe = (0, Fy.h)(ee)) && void 0 !== oe ? oe : (0, Fy.h)(Ke);
            if (ie) return {
              kind: "item",
              url: Je,
              tint: ie
            }
          }
          return {
            kind: "item",
            url: Je
          }
        },
        hasIcon: function(ee) {
          return void 0 !== cy(ee) || (0, Jy.k)(ee) || ee.startsWith(Jy.d)
        },
        isItemName: function(ee) {
          return void 0 !== cy(ee)
        }
      };

    function uy() {
      (0, ye.installPageSources)({
        commands: {
          ...ye.DEFAULT_CLIENT_PAGE_SOURCES.commands,
          setChunkAddDistance: vH.r,
          prewarmCreativeIcons: Ky
        },
        queries: Cy,
        lookups: {
          ...ye.DEFAULT_CLIENT_PAGE_SOURCES.lookups,
          ...vy,
          aE: vH.h,
          drawCallStats: uH.g,
          iconsDrawAhead: yy
        }
      }), (0, CH.d)(), Py(), NH || (NH = !0, Je.h.subscribe("gameJoined", (() => {
        var ee;
        rH = !1, null === (ee = Hy) || void 0 === ee || ee(), Hy = null;
        for (const {
            name: ie,
            slot: He
          }
          of ey.splice(0)) He.asked.delete(ie)
      })), Je.h.subscribe("gamePlayable", (() => {
        rH = !0, by()
      })), ye.gameBridge.subscribe("inventory", by), ye.gameBridge.subscribe("itemIconsVersion", (() => {
        QH.clear(), by()
      })))
    }
    var my = He(604),
      ly = He(40515);

    function Sy(ee) {
      if (null === ee || void 0 === ee || !ee.isCoreRunning) return null;
      const {
        api: ie,
        chunks: He,
        items: ye,
        tables: be
      } = ee;
      return {
        playerFeet() {
          const ee = ie.pE(ie.localId);
          return null !== ee && void 0 !== ee && ee.every(Number.isFinite) ? ee : null
        },
        chunkBlocks: ee => He.isLoaded(ee[0], ee[1], ee[2]) ? (ee, ie, ye) => He.po(ee, ie, ye) : null,
        blockName: ee => be.nameOfId(ee),
        inventory: () => ({
          slots: ye.playerItems().map((ee => ee ? {
            name: ee.name,
            amount: ee.amount
          } : null)),
          heldSlot: ye.selectedSlot
        }),
        nearby() {
          const He = [];
          for (let be = 0; be < ie.idStr.length; be++) {
            var ye;
            const Me = ie.idStr[be],
              Ke = ie.serverIds[be],
              Ue = ie.kinds[be];
            if (null === Me || ie.isLocal(Ke) || Ue >>> Ee.c !== Ee.s.Lifeform) continue;
            const Fe = ie.pE(Ke),
              Je = my.j[Ue & Ee.e];
            Fe && void 0 !== Je && He.push({
              kind: "Player" === Je ? "player" : Je,
              name: null !== (ye = ee.clientApi.getEntityName(Me)) && void 0 !== ye ? ye : null,
              position: Fe
            })
          }
          return He
        },
        droppedItems() {
          let ee = 0;
          for (let He = 0; He < ie.idStr.length; He++) null !== ie.idStr[He] && ie.kinds[He] >>> Ee.c === Ee.s.Item && ee++;
          return ee
        }
      }
    }
    const ny = {
        worldCodeAiChunk: ee => Promise.resolve((0, ly.b)(Sy((0, Ke.h)()), ee)),
        worldCodeAiGameState: () => Promise.resolve((0, ly.e)(Sy((0, Ke.h)())))
      },
      jy = function(ee) {
        const ie = kH(),
          ye = kH(),
          be = new Set,
          Me = new Set,
          Ke = () => {
            var ie, He;
            return null !== (ie = null === (He = ee.runtime()) || void 0 === He ? void 0 : He.currentViewer) && void 0 !== ie ? ie : null
          };
        let Ue = null,
          Fe = null;
        const oe = (ee, ie) => ({
            current: ee,
            watch(He) {
              let ye = ee();
              return ie.add((() => {
                const ie = ee();
                ie !== ye && (ye = ie, He(ie))
              }))
            }
          }),
          ke = ee => ({
            watch: ie => (ee.add(ie), () => {
              ee.delete(ie)
            })
          }),
          qe = ee => {
            const ie = Ke(),
              He = null === ie || void 0 === ie ? void 0 : ie.view;
            ie && He && ie.seek(Math.max(0, Math.min(He.totalTicks - 1, He.YR + ee * Re.md)))
          },
          fe = {
            replay: oe((() => {
              var ee;
              const ie = Ke(),
                He = null !== (ee = null === ie || void 0 === ie ? void 0 : ie.view) && void 0 !== ee ? ee : null;
              return null === ie || null === He || He.state === Re.Yc.None ? (Ue = null, null) : (Ue = (0, Ge.j)(Ue, {
                id: ie.id,
                YR: He.YR,
                totalTicks: He.totalTicks,
                lV: Re.md,
                playing: He.state === Re.Yc.Playing,
                speed: He.speed,
                cameraMode: He.cameraMode,
                freecam: "freecam" === He.cameraMode
              }), Ue)
            }), ie),
            replayEdits: oe((() => {
              var ee;
              const ie = Ke(),
                He = null !== (ee = null === ie || void 0 === ie ? void 0 : ie.view) && void 0 !== ee ? ee : null;
              return null === ie || null === He || He.state === Re.Yc.None ? (Fe = null, null) : (Fe = (0, Ge.j)(Fe, {
                cameraKeyframes: [...ie.keyframes],
                playbackMark: He.mark,
                fileName: ie.fileName,
                unsavedChanges: ie.unsavedChanges,
                suggestSaveAs: ie.suggestSaveAs
              }), Fe)
            }), ie),
            replayRecorder: oe((() => {
              var ie, He;
              return null !== (ie = null === (He = ee.runtime()) || void 0 === He ? void 0 : He.recorder.current) && void 0 !== ie ? ie : JH.b.states.replayRecorder.current()
            }), ye),
            replayVideoExporting: {
              current: UH.d,
              watch: ee => (0, Je.j)("replayViewer|videoExportChanged", (() => {
                ee((0, UH.d)())
              }))
            }
          },
          Te = {
            replayUiActionRequested: ke(Me),
            replayViewerRequested: ke(be)
          },
          pe = ee => {
            for (const ie of be) ie(ee)
          },
          Xe = () => {
            var ye;
            !0 === (null === (ye = Ke()) || void 0 === ye ? void 0 : ye.isOpen) && Promise.all([He.e(111), He.e(78)]).then((() => He(63783))).then((He => {
              let {
                startWasmReplayVideoExport: ye
              } = He;
              return ye({
                viewer: Ke,
                canvas: () => {
                  var ie, He;
                  return null !== (ie = null === (He = ee.canvas) || void 0 === He ? void 0 : He.call(ee)) && void 0 !== ie ? ie : null
                },
                watchViewer: ie.add,
                requestViewer: pe
              })
            }), (ee => {
              console.error("Couldn't load the video export", ee), FH.NotificationProvider.showAlertPopup({
                title: "Video export failed",
                subtitle: "Check your connection, then try again."
              })
            })).catch((ee => {
              console.error("The video export failed", ee)
            }))
          },
          ze = {
            replayAction(ee) {
              if ((0, UH.d)()) return;
              const ie = Ke();
              switch (ee) {
                case "replaySkipBack":
                  qe(-1);
                  break;
                case "replaySkipForward":
                  qe(1);
                  break;
                case "replaySpeedUp":
                case "replaySpeedDown":
                  null !== ie && void 0 !== ie && ie.view && ie.setSpeed((0, KH.g)(ie.view.speed, "replaySpeedUp" === ee ? "up" : "down"));
                  break;
                case "replayRecordKeyframe":
                  null === ie || void 0 === ie || ie.addKeyframe()
              }
            },
            setReplayPlaying(ee) {
              var ie, He;
              (0, UH.d)() || (ee ? null === (ie = Ke()) || void 0 === ie || ie.play() : null === (He = Ke()) || void 0 === He || He.pause())
            },
            seekReplay(ee) {
              var ie;
              let {
                YR: He,
                ignorePlaybackMark: ye
              } = ee;
              null === (ie = Ke()) || void 0 === ie || ie.seek(He, null !== ye && void 0 !== ye && ye)
            },
            setReplayCameraMode(ee) {
              var ie;
              null === (ie = Ke()) || void 0 === ie || ie.setCameraMode(ee)
            },
            syncReplayCameraMode() {},
            setReplayCameraKeyframe(ee) {
              var ie;
              null === (ie = Ke()) || void 0 === ie || ie.setKeyframe(ee)
            },
            moveReplayCameraKeyframe(ee) {
              var ie;
              let {
                from: He,
                to: ye
              } = ee;
              null === (ie = Ke()) || void 0 === ie || ie.moveKeyframe(He, ye)
            },
            deleteReplayCameraKeyframes(ee) {
              var ie;
              let {
                start: He,
                end: ye
              } = ee;
              null === (ie = Ke()) || void 0 === ie || ie.deleteKeyframes(He, ye)
            },
            setReplayPlaybackMark(ee) {
              var ie;
              null === (ie = Ke()) || void 0 === ie || ie.setMark(ee)
            },
            cropReplay(ee) {
              var ie, He;
              let {
                start: ye,
                end: be
              } = ee;
              return !(0, UH.d)() && (null !== (ie = null === (He = Ke()) || void 0 === He ? void 0 : He.crop(ye, be)) && void 0 !== ie && ie)
            },
            holdReplayForShaderPackFailure(ee) {
              const ie = Ke();
              ie && (ie.holdForShaderPackFailure(), function(ee) {
                He.e(130).then((() => He(40056))).then((ie => {
                  let {
                    shaderPackPage: He
                  } = ie;
                  He.block(ee)
                })).catch((ee => {
                  console.warn("[bloxd-wasm-client] the shader pack could not be blocked", ee)
                }))
              }(ee))
            },
            exportReplayVideo() {
              Xe()
            },
            toggleRecording() {
              var ie;
              null === (ie = ee.runtime()) || void 0 === ie || ie.recorder.toggleRecording()
            },
            saveClip() {
              var ie;
              null === (ie = ee.runtime()) || void 0 === ie || ie.recorder.saveClip()
            },
            setRecorderPrefs(ie) {
              var He;
              let {
                clipping: ye,
                clipSeconds: be
              } = ie;
              null === (He = ee.runtime()) || void 0 === He || He.recorder.setPrefs(ye, be)
            },
            setReplayViewerOpen(ie) {
              var He;
              (0, Xi.g)(ie) && (null === (He = ee.runtime()) || void 0 === He || He.recorder.viewerShown(ie))
            },
            recordFlyingMiddleText(ie) {
              var He;
              let {
                content: ye,
                ge: be,
                angle: Me,
                Oe: Ke
              } = ie;
              null === (He = ee.runtime()) || void 0 === He || He.recorder.recordFlyingText(JSON.stringify(ye), be, Me, Ke)
            },
            dragReplayCamera(ie) {
              var He;
              let {
                dx: ye,
                dy: be
              } = ie;
              null === (He = ee.freecam()) || void 0 === He || He.drag(ye, be)
            },
            moveReplayFreecam(ie) {
              var He;
              null === (He = ee.freecam()) || void 0 === He || He.move(ie)
            },
            holdReplayFreecamVertical(ie) {
              var He;
              let {
                action: ye,
                lJ: be
              } = ie;
              null === (He = ee.freecam()) || void 0 === He || He.holdVertical(ye, be)
            }
          },
          Be = ee => {
            var ie;
            const He = Ke(),
              ye = null !== (ie = null === He || void 0 === He ? void 0 : He.view) && void 0 !== ie ? ie : null;
            oH.has(ee) ? (ee => {
              for (const ie of Me) ie(ee)
            })(ee) : RH.has(ee) ? ze.replayAction(ee) : "replayPlayPause" === ee ? He && ye && ye.state !== Re.Yc.None && ze.setReplayPlaying(ye.state !== Re.Yc.Playing) : "replayChangeCameraMode" === ee ? null === He || void 0 === He || He.cycleCameraMode() : "replayExit" === ee ? !0 === (null === He || void 0 === He ? void 0 : He.inPlayback) && (0, ci.o)("/") : "replayExportVideo" === ee && Xe()
          };
        let Ee = !1;
        return {
          states: fe,
          events: Te,
          commands: ze,
          lookups: {
            replayCamera() {
              var ie, He, ye;
              return !0 !== (null === (ie = Ke()) || void 0 === ie ? void 0 : ie.isOpen) ? null : null !== (He = null === (ye = ee.cameraView) || void 0 === ye ? void 0 : ye.call(ee)) && void 0 !== He ? He : null
            },
            leaveGameReloadsPage() {
              var ee;
              return !0 === (null === (ee = Ke()) || void 0 === ee ? void 0 : ee.inPlayback)
            }
          },
          feed: {
            viewerChanged: () => {
              var ee;
              const He = !0 === (null === (ee = Ke()) || void 0 === ee ? void 0 : ee.inPlayback);
              He !== Ee && (Ee = He, Je.h.yR("connectedGameChanged")), ie.fire()
            },
            recorderChanged: ye.fire,
            keyDown: ee => {
              var ie;
              switch (ee) {
                case "recordGame":
                  return void ze.toggleRecording();
                case "recordClip":
                  return void((0, Xi.e)() || ze.saveClip())
              }(0, UH.d)() || ("replayViewerOpen" !== ee ? ee.startsWith("replay") && ((0, Xi.e)() || !0 === (null === (ie = Ke()) || void 0 === ie ? void 0 : ie.inPlayback)) && Be(ee) : pe("toggle"))
            }
          }
        }
      }({
        runtime: be.i,
        cameraView: () => {
          var ee;
          const ie = null === (ee = (0, Ke.h)()) || void 0 === ee ? void 0 : ee.renderFrame;
          if (!ie) return null;
          const [He, ye, be] = ie.cameraPosition, [Me, Ue, Fe] = ie.cameraDirection;
          return {
            position: [He, ye, be],
            direction: [Me, Ue, Fe]
          }
        },
        canvas: () => {
          var ee, ie, He;
          return null !== (ee = null === (ie = (He = (0, Me.O)()).canvas) || void 0 === ie ? void 0 : ie.call(He)) && void 0 !== ee ? ee : null
        },
        freecam: be.g
      }),
      sy = {
        states: {
          ...Ji,
          ...qi.i,
          ...jy.states,
          ...TH,
          ...me
        },
        events: {
          ...oi,
          ...pe,
          ...qi.e,
          ...Ze.e,
          ...PH.i,
          ...jy.events,
          ...pH,
          ...te.g
        },
        commands: {
          ...We,
          ...Ri,
          ...Xe,
          ...qi.b,
          ...Qi,
          ...DH,
          ...te.e,
          ...Ci,
          ...jy.commands,
          ...dH,
          ...le,
          ...LH,
          ...fi
        },
        queries: {
          ...qi.f,
          ...ny
        },
        lookups: {
          ...ki,
          ...ce,
          ...PH.m,
          ...jy.lookups,
          ...de,
          ...MH,
          ...xH,
          ...Se
        }
      };

    function Iy() {
      (0, Ue.e)(Te.k), (0, be.k)(jy.feed), (0, Ze.i)(), eH || (eH = !0, (0, Te.j)(Ae.j, (ee => {
        const ie = (0, Ve.g)(Ae.j, ee);
        "string" === typeof ie && Promise.resolve().then((() => He(4025))).then((ee => {
          let {
            onCosmeticPackGranted: He
          } = ee;
          He(ie)
        }))
      })), (0, Te.j)(Ae.ab, (ee => {
        const ie = (0, Ve.g)(Ae.ab, ee);
        "number" === typeof ie && Je.h.yR("serverUpdating", Date.now() + ie, !0)
      })), (0, Te.j)(Ae.C, (ee => {
        const ie = (0, Ve.g)(Ae.C, ee);
        if ((0, Ve.c)(ie)) {
          const {
            ee: ee,
            ie: He
          } = ie;
          (0, Gi.c)({
            ee: "string" === typeof ee ? ee : null,
            ie: "string" === typeof He ? He : null
          })
        }
      })), (0, Te.j)(oe.ic.NewUiRequest, (ee => {
        const ie = (0, Ve.h)(ee);
        (0, Ve.c)(ie) && "number" === typeof ie.id && (0, Ve.c)(ie.clientParameters) && (0, ri.f)(ie.id, ie.clientParameters)
      })), (0, Te.j)(Ae.V, (ee => {
        const ie = (0, Ve.g)(Ae.V, ee);
        "number" === typeof ie && (0, ri.h)(ie)
      })), (0, Te.i)(ri.d), (0, Te.j)(oe.ic.UiRequestPopup, (ee => {
        const ie = (0, Ve.h)(ee);
        if ((0, Ve.c)(ie) && "number" === typeof ie.id && ("string" === typeof ie.text || (0, Ve.c)(ie.text) && "string" === typeof ie.text.translationKey)) {
          const ee = ie.id;
          (0, ri.k)(ee, ie.text, !0 === ie.destructive, (ie => {
            Qi.answerUiRequest({
              id: ee,
              pJ: ie
            })
          }))
        }
      })), (0, Te.j)(oe.ic.TopRightHelper, (ee => {
        const ie = (0, Ve.h)(ee);
        void 0 !== ie && Je.h.yR("TopRightHelper", ie, !0)
      })), (0, Te.j)(oe.ic.TaskProgress, (ee => {
        const ie = (0, Ve.h)(ee);
        (0, Ve.c)(ie) && "string" === typeof ie.taskId && "number" === typeof ie.progress && (0, Ni.e)({
          taskId: ie.taskId,
          progress: ie.progress
        })
      }))), WH || (WH = !0, (0, Te.j)(Ae.p, (ee => {
        const ie = (0, Ve.g)(Ae.p, ee);
        (0, Ve.c)(ie) && Je.h.yR("showShopFromServer", {
          toggle: ie.Yi,
          Vi: ie.Vi
        }, !0)
      })), (0, Te.j)(oe.ic.OverShopInfo, (ee => {
        const ie = (0, Ve.h)(ee);
        (0, Ve.c)(ie) && Je.h.yR("overShopInfo", ie.info, !0)
      })), (0, Te.j)(oe.ic.ShowShopTutorial, (() => {
        Je.h.yR("showShopTutorial", null, !0)
      }))), gH || (gH = !0, (0, Te.g)((() => {
        var ee;
        (0, XH.resetLeaveEvents)(), null === (ee = OH) || void 0 === ee || ee(), OH = (0, Te.e)() ? (0, BH.onVisitSessionGameServerConnected)(Te.e) : null, (0, Te.e)() || Je.h.pB()
      })), (0, Te.j)(oe.ic.SetCookie, (ee => {
        const ie = (0, Ve.h)(ee),
          He = (0, ci.e)().gameNameWithVariation;
        (0, Ve.c)(ie) && "string" === typeof ie.key && null !== He && (0, zH.setCookie)(He, ie.key, ie.value)
      })), (0, Te.j)(oe.ic.LeaveValues, (ee => {
        const ie = (0, Ve.h)(ee);
        if ((0, Ve.c)(ie) && "string" === typeof ie.leaveEventType) {
          const {
            leaveEventType: ee,
            category: He,
            subCategory: ye,
            value: be
          } = ie;
          (0, XH.updateLeaveValue)({
            leaveEventType: ee,
            category: He,
            subCategory: ye,
            value: be
          })
        }
      })), (0, Te.j)(oe.ic.CustomAnalyticsEvent, (ee => {
        const ie = (0, Ve.h)(ee);
        if ((0, Ve.c)(ie) && "string" === typeof ie.cat1) {
          const {
            cat1: ee,
            cat2: He,
            cat3: ye,
            value: be
          } = ie;
          (0, XH.logCustomAnalyticsEvent)({
            cat1: ee,
            cat2: He,
            cat3: ye,
            value: be
          })
        }
      })), (0, Te.j)(oe.ic.ProgressionEvent, (ee => {
        const ie = (0, Ve.h)(ee);
        if ((0, Ve.c)(ie)) {
          const {
            type: ee,
            location1: He,
            location2: ye,
            location3: be,
            score: Me
          } = ie;
          (0, XH.logProgressionEvent)({
            type: ee,
            location1: He,
            location2: ye,
            location3: be,
            score: Me
          })
        }
      })), (0, Te.j)(oe.ic.ResourceEvent, (ee => {
        const ie = (0, Ve.h)(ee);
        if ((0, Ve.c)(ie)) {
          const {
            type: ee,
            resourceType: He,
            amount: ye,
            category: be,
            itemName: Me
          } = ie;
          (0, XH.logResourceEvent)({
            type: ee,
            resourceType: He,
            amount: ye,
            category: be,
            itemName: Me
          })
        }
      })), (0, Te.j)(oe.ic.LeaderboardResponse, (ee => {
        const ie = (0, Ve.h)(ee);
        if ((0, Ve.c)(ie)) {
          const {
            category: ee,
            timeframe: He,
            data: ye
          } = ie;
          Je.h.yR("leaderboardResponse", {
            category: ee,
            timeframe: He,
            data: ye
          })
        }
      })), (0, Te.j)(Ae.x, (ee => {
        const ie = (0, Ve.g)(Ae.x, ee);
        "string" === typeof ie && (0, EH.b)(ee.conn, ie)
      })), (0, Te.j)(Ae.z, (ee => {
        const ie = (0, Ve.g)(Ae.z, ee);
        "string" === typeof ie && console.error(`[logErrorToConsole]: ${ie}`)
      }))), Le(), (0, PH.b)(), Li || (Li = !0, (0, Te.j)(Ae.i, (ee => {
        const ie = (0, Ve.g)(Ae.i, ee);
        void 0 !== ie && (0, xi.l)(ie)
      }))), Ii(), Pi(), se || (se = !0, (0, Me.u)(Ie)), ye.gameBridge.attach(sy), uy()
    }
  },
  37090: (ee, ie, He) => {
    He.d(ie, {
      e: () => oe,
      f: () => Fe,
      j: () => Ue,
      n: () => Je
    });
    var ye = He(1992);
    let be = null,
      Me = 0;
    const Ke = new Set;

    function Ue() {
      return be
    }

    function Fe() {
      return Me
    }

    function Je(ee) {
      be = ee, Me++, (0, ye.d)();
      for (const ie of Ke) ie()
    }

    function oe(ee) {
      Ke.add(ee)
    }
  },
  37096: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke,
      d: () => Ue
    });
    var ye = He(37100);
    let be = null,
      Me = null;

    function Ke() {
      return be ??= He.e(73).then((() => He(42260))).catch((ee => {
        throw be = null, ee
      })), be
    }

    function Ue() {
      return Me ??= Promise.all([Ke(), (0, ye.g)()]).then((ee => {
        let [ie] = ee;
        return ie
      }), (ee => {
        throw Me = null, ee
      })), Me
    }
  },
  37192: (ee, ie, He) => {
    He.d(ie, {
      b: () => be
    });
    const ye = {
      wait: function(ee) {
        return new Promise((ie => {
          setTimeout(ie, ee)
        }))
      },
      stallMs: 2e4
    };
    class be {
      constructor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ye;
        this.url = ee, this.options = ie, this.timing = He, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = ee
      }
      ready() {
        if (null === this.fetched) {
          const ee = new AbortController;
          this.fetchAbort = ee, this.fetched = this.fetchWithRetries(ee.signal).then((ie => (this.fetchAbort === ee && (this.fetchAbort = null), ie)))
        }
        return this.fetched
      }
      cancel() {
        null !== this.fetchAbort && (this.fetchAbort.abort(), this.fetchAbort = null, this.fetched = null)
      }
      forgetFailedFetch() {
        this.fetched = null
      }
      get href() {
        return this.url.href
      }
      start() {
        return new Worker(this.scriptUrl, this.options)
      }
      async fetchWithRetries(ee) {
        for (let ie = 0;; ie++) {
          const He = new URL(this.url);
          if (ie > 0 && He.searchParams.set("cache-bust", `${Date.now()}-${ie}`), await this.fetchWhole(He, ee)) return this.scriptUrl = He, !0;
          if (ie >= 3 || ee.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** ie), ee.aborted) return !1
        }
      }
      async fetchWhole(ee, ie) {
        const He = new AbortController;
        let ye;
        const be = () => {
            clearTimeout(ye), ye = setTimeout((() => {
              He.abort()
            }), this.timing.stallMs)
          },
          Me = () => {
            He.abort()
          };
        ie.addEventListener("abort", Me, {
          once: !0
        }), be();
        try {
          var Ke;
          const ie = await fetch(ee, {
            signal: He.signal
          });
          if (!ie.ok) return !1;
          const ye = null === (Ke = ie.body) || void 0 === Ke ? void 0 : Ke.getReader();
          if (!ye) return !1;
          for (;;) {
            const {
              done: ee
            } = await ye.read();
            if (ee) return !0;
            be()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(ye), ie.removeEventListener("abort", Me)
        }
      }
    }
  },
  37893: (ee, ie, He) => {
    He.d(ie, {
      d: () => ye
    });
    const ye = {
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
  39829: (ee, ie, He) => {
    He.d(ie, {
      c: () => ye,
      e: () => be
    });
    const ye = ["description", "label"];

    function be(ee) {
      const ie = ee.type;
      return {
        type: ie,
        params: ee[ie]
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);