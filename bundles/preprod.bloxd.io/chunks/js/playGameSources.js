export const id = 54;
export const ids = [54];
export const modules = {
  40521: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => oU,
      f: () => QU,
      j: () => yU
    });
    const cU = 6e3;

    function yU(UU, XU) {
      return [Math.floor(UU[0] / XU) * XU, Math.floor(UU[1] / XU) * XU, Math.floor(UU[2] / XU) * XU]
    }

    function QU(UU) {
      const XU = (null !== UU && void 0 !== UU ? UU : "").match(/-?\d+(?:\.\d+)?/g);
      return XU && XU.length >= 3 ? [Number(XU[0]), Number(XU[1]), Number(XU[2])] : null
    }

    function AU(UU, XU) {
      return UU === XU ? String(UU) : `${UU}-${XU}`
    }

    function FU(UU, XU, zU, cU) {
      const yU = [];
      let QU = new Map;
      for (let AU = UU[2]; AU < UU[2] + XU; AU++) {
        const FU = new Map;
        let oU = UU[0];
        for (; oU < UU[0] + XU;) {
          const yU = cU(oU, zU, AU);
          let DU = oU;
          for (; DU + 1 < UU[0] + XU && cU(DU + 1, zU, AU) === yU;) DU++;
          if (null !== yU) {
            const UU = `${oU} ${DU} ${yU}`,
              XU = QU.get(UU);
            XU ? (XU.z1 = AU, QU.delete(UU), FU.set(UU, XU)) : FU.set(UU, {
              x0: oU,
              x1: DU,
              z0: AU,
              z1: AU,
              name: yU
            })
          }
          oU = DU + 1
        }
        yU.push(...QU.values()), QU = FU
      }
      return yU.push(...QU.values()), yU.sort(((UU, XU) => UU.z0 - XU.z0 || UU.x0 - XU.x0)).map((UU => `x${AU(UU.x0,UU.x1)} z${AU(UU.z0,UU.z1)} ${UU.name}`))
    }

    function oU(UU, XU, zU, yU) {
      let QU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : cU;
      const oU = [UU[0] + XU - 1, UU[1] + XU - 1, UU[2] + XU - 1],
        DU = null !== yU && yU.every(((XU, zU) => Math.floor(XU) >= UU[zU] && Math.floor(XU) <= oU[zU])),
        EU = [`The chunk from ${UU.join(" ")} to ${oU.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
      null !== yU && EU.push(`The player's feet are at ${yU.map(Math.floor).join(" ")}, ${DU?"in this chunk":"outside this chunk"}.`);
      const YU = [];
      for (let cU = UU[1]; cU <= oU[1]; cU++) {
        const yU = FU(UU, XU, cU, zU).join("; "),
          QU = YU[YU.length - 1];
        (null === QU || void 0 === QU ? void 0 : QU.boxes) === yU ? QU.to = cU : YU.push({
          from: cU,
          to: cU,
          boxes: yU
        })
      }
      const NU = YU.filter((UU => "" !== UU.boxes));
      0 === NU.length && EU.push("It is all air.");
      let IU = EU.join("\n").length;
      for (const cU of NU) {
        const UU = `y${AU(cU.from,cU.to)}: ${cU.boxes}`;
        if (IU += UU.length + 1, IU > QU) {
          EU.push(`Cut short: the layers from y${cU.from} up aren't shown, as there are too many blocks.`);
          break
        }
        EU.push(UU)
      }
      return EU.join("\n")
    }
  },
  9364: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => yU
    });
    var cU = zU(27);

    function yU() {
      return !cU.e.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  37677: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => AU,
      d: () => QU,
      h: () => yU
    });
    const cU = [.25, .5, 1, 2, 4, 8, 16];

    function yU(UU, XU) {
      const zU = cU;
      let yU = zU.indexOf(UU);
      return -1 === yU && (yU = zU.findIndex((XU => XU >= UU)), -1 === yU && (yU = zU.length - 1)), "up" === XU ? zU[Math.min(yU + 1, zU.length - 1)] : zU[Math.max(yU - 1, 0)]
    }

    function QU(UU) {
      return UU <= cU[0]
    }

    function AU(UU) {
      return UU >= cU[cU.length - 1]
    }
  },
  37211: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => yU,
      g: () => QU
    });
    let cU = !1;

    function yU() {
      return cU
    }

    function QU(UU) {
      return cU !== UU && (cU = UU, !0)
    }
  },
  39852: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => QU
    });
    var cU = zU(31),
      yU = zU(2032);

    function QU(UU) {
      let {
        taskId: XU,
        progress: zU
      } = UU;
      const cU = yU.d.get("_tasks");
      null !== cU && void 0 !== cU && cU[XU] && yU.d.apply({
        _tasks: {
          ...cU,
          [XU]: {
            ...cU[XU],
            progress: zU
          }
        }
      })
    }
    cU.k.subscribe("clientTaskProgress", (UU => {
      QU(UU)
    }))
  },
  40496: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => NU,
      f: () => pU,
      i: () => DU,
      j: () => YU,
      m: () => oU,
      p: () => AU,
      q: () => EU,
      u: () => aU
    });
    var cU = zU(2032),
      yU = zU(31),
      QU = zU(2044);
    const AU = (0, QU.p)((function() {
        var UU, XU, zU, yU;
        return {
          health: null !== (UU = cU.d.get("_health")) && void 0 !== UU ? UU : null,
          maxHealth: null !== (XU = cU.d.get("_totalMaxHealth")) && void 0 !== XU ? XU : null,
          shield: null !== (zU = cU.d.get("_shield")) && void 0 !== zU ? zU : null,
          maxShield: null !== (yU = cU.d.get("maxShield")) && void 0 !== yU ? yU : null
        }
      }), [], (0, QU.o)("_health", "_totalMaxHealth", "_shield", "maxShield")),
      FU = [{
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

    function oU(UU, XU) {
      return FU[(UU ? 2 : 0) + (XU ? 1 : 0)]
    }
    const DU = (0, QU.p)((function() {
      var UU;
      return null !== (UU = cU.d.get("_aura")) && void 0 !== UU ? UU : null
    }), [], (0, QU.o)("_aura"));

    function EU(UU) {
      return {
        watch: XU => (0, yU.n)("shotPlayer", (zU => {
          let {
            playerId: cU,
            damage: yU,
            wasCrit: QU,
            distance: AU
          } = zU;
          UU(cU) && XU({
            damage: yU,
            wasCrit: QU,
            distance: AU
          })
        }))
      }
    }

    function YU(UU) {
      return (0, QU.e)("chat", (XU => {
        let {
          serverChatMsgId: zU,
          worldCodeLineId: cU,
          content: yU,
          chatterEId: QU,
          chatterObjectsToReplay: AU
        } = XU;
        return {
          serverChatMsgId: null !== zU && void 0 !== zU ? zU : null,
          worldCodeLineId: null !== cU && void 0 !== cU ? cU : null,
          content: yU,
          author: QU ? UU(QU) : null,
          hiddenFromReplay: !0 === AU
        }
      }))
    }
    class NU {
      constructor() {
        this.shown = null, this.needed = null, this.neededSince = 0
      }
      update(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const zU = this.shown;
        return UU !== this.needed && (this.needed = UU, this.neededSince = XU, null === UU && (this.shown = null)), this.shown !== this.needed && XU - this.neededSince > 200 && (this.shown = this.needed), this.shown !== zU
      }
    }

    function IU(UU) {
      return [{
        translationKey: `touchKeys:${UU}`
      }]
    }
    const pU = {
      open: IU("open"),
      close: IU("close"),
      milk: IU("milk"),
      shear: IU("shear"),
      tame: IU("tame"),
      feed: IU("feed"),
      ride: IU("ride")
    };

    function aU(UU) {
      return [{
        translationKey: "touchKeys:tameWith"
      }, " ", {
        icon: UU
      }]
    }
  },
  42147: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => FU,
      f: () => AU
    });
    var cU = zU(3664);
    let yU = null,
      QU = null;

    function AU() {
      return QU ??= zU.e(229).then((() => zU(37027))).then((UU => {
        let {
          ITEM_SPRITES: XU,
          ITEM_SPRITES_WITHOUT_FILE: zU,
          ITEM_FILES_WITHOUT_SPRITE: QU
        } = UU;
        yU = function(UU, XU, zU) {
          const yU = new Set,
            QU = (0, cU.w)(XU);
          let AU = 0;
          for (const [cU, FU] of UU.entries()) cU === QU[AU] ? AU++ : yU.add(FU);
          if ("" !== zU)
            for (const FU of zU.split(cU.r)) yU.add(FU);
          return yU
        }(XU.split(cU.r), zU, QU)
      }), (UU => {
        throw QU = null, UU
      })), QU
    }

    function FU(UU) {
      var XU, zU;
      return null !== (XU = null === (zU = yU) || void 0 === zU ? void 0 : zU.has(UU)) && void 0 !== XU && XU
    }
  },
  40513: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => cU,
      g: () => QU,
      h: () => yU
    });
    const cU = 128;

    function yU(UU, XU, zU, cU) {
      const yU = 2 * XU - 1,
        QU = 1 - 2 * zU,
        AU = UU(0) - yU * UU(3),
        FU = UU(4) - yU * UU(7),
        oU = UU(8) - yU * UU(11),
        DU = UU(1) - QU * UU(3),
        EU = UU(5) - QU * UU(7),
        YU = UU(9) - QU * UU(11);
      cU[0] = FU * YU - oU * EU, cU[1] = oU * DU - AU * YU, cU[2] = AU * EU - FU * DU;
      const NU = cU[0] * UU(3) + cU[1] * UU(7) + cU[2] * UU(11) < 0 ? -1 : 1,
        IU = Math.hypot(cU[0], cU[1], cU[2]) * NU;
      return cU[0] /= IU, cU[1] /= IU, cU[2] /= IU, cU
    }

    function QU(UU, XU, zU, cU, yU, QU) {
      const AU = [Math.floor(XU[0]), Math.floor(XU[1]), Math.floor(XU[2])],
        FU = [0, 0, 0],
        oU = [1 / 0, 1 / 0, 1 / 0],
        DU = [1 / 0, 1 / 0, 1 / 0];
      for (let NU = 0; NU < 3; NU++) FU[NU] = Math.sign(zU[NU]), 0 !== FU[NU] && (DU[NU] = Math.abs(1 / zU[NU]), oU[NU] = (AU[NU] + (FU[NU] > 0 ? 1 : 0) - XU[NU]) / zU[NU]);
      let EU = 0,
        YU = Math.abs(zU[0]) > Math.abs(zU[1]) ? 0 : 1;
      for (Math.abs(zU[2]) > Math.abs(zU[YU]) && (YU = 2); EU <= cU;) {
        if (UU(AU[0], AU[1], AU[2])) return yU[0] = AU[0], yU[1] = AU[1], yU[2] = AU[2], QU[0] = 0, QU[1] = 0, QU[2] = 0, QU[YU] = -FU[YU], !0;
        YU = oU[0] < oU[1] ? 0 : 1, oU[2] < oU[YU] && (YU = 2), EU = oU[YU], AU[YU] += FU[YU], oU[YU] += DU[YU]
      }
      return !1
    }
  },
  37110: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => eU,
      f: () => CU,
      i: () => ZU,
      j: () => GU,
      m: () => RU
    });
    var cU = zU(287),
      yU = zU(97);
    const QU = new(zU(37112).b)(new URL(zU.p + zU.u(3), zU.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var AU = zU(1877),
      FU = zU(2215);
    const oU = 1e4,
      DU = 3e4;
    let EU = null,
      YU = null,
      NU = null,
      IU = !1,
      pU = 0;
    const aU = new Map;
    let tU = null;
    const gU = new Map,
      kU = new Map;

    function GU(UU) {
      const XU = new Promise(((XU, zU) => {
        const cU = new Image;
        cU.crossOrigin = "anonymous", cU.fetchPriority = "high", cU.onload = () => {
          XU(cU)
        }, cU.onerror = () => {
          zU(new Error(`A block icon's texture did not load: ${UU.slice(0,100)}`))
        }, cU.src = UU
      }));
      return (0, FU.h)(XU)
    }

    function BU(UU) {
      var XU, zU;
      IU || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${UU}`), IU = !0, null === (XU = EU) || void 0 === XU || XU.terminate(), EU = null, YU = null, gU.clear(), kU.clear();
      for (const cU of aU.values()) cU(null);
      aU.clear(), null === (zU = tU) || void 0 === zU || zU()
    }

    function ZU() {
      return null !== YU
    }

    function RU() {
      return NU ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === cU.d.ios_icon_worker_v1 && (0, yU.isWebKit)()) return;
        try {
          EU = await async function() {
            return await QU.ready(), QU.start()
          }()
        } catch (FU) {
          return void BU(`did not start (${String(FU)})`)
        }
        let UU = () => {};
        const XU = new Promise((XU => {
          UU = XU
        }));
        EU.onmessage = XU => {
          let {
            data: zU
          } = XU;
          if ("started" === zU.type) YU = EU, UU();
          else if ("failed" === zU.type) BU(`failed a draw (${zU.message})`);
          else {
            var cU, yU;
            null === (cU = aU.get(zU.id)) || void 0 === cU || cU(zU.url), aU.delete(zU.id), null === (yU = tU) || void 0 === yU || yU()
          }
        }, EU.onerror = XU => {
          XU.preventDefault(), BU(`stopped (${XU.message||"its script did not load or run"})`), UU()
        };
        const zU = `did not start in ${DU/1e3} s`;
        await (0, AU.l)(XU, DU, zU).catch((() => {
          BU(zU)
        }))
      }(), NU
    }

    function PU() {
      if (null !== tU || 0 === aU.size) return;
      const UU = new Promise((UU => {
          tU = UU
        })),
        XU = `did not answer in ${oU/1e3} s`;
      (0, AU.l)(UU, oU, XU).then((() => {
        tU = null, PU()
      }), (() => {
        tU = null, BU(XU)
      }))
    }

    function WU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      UU.postMessage(XU, zU)
    }

    function dU(UU, XU, zU, cU) {
      let yU = XU.get(zU);
      return void 0 === yU && (yU = cU().then((async XU => {
        let {
          image: zU,
          request: cU
        } = XU;
        try {
          const XU = await createImageBitmap(zU);
          WU(UU, cU(XU), [XU])
        } catch (yU) {
          BU(`could not take an image (${String(yU)})`)
        }
      })), yU.catch((() => {
        XU.get(zU) === yU && XU.delete(zU)
      })), XU.set(zU, yU)), yU
    }
    async function LU(UU, XU) {
      RU();
      const zU = YU;
      if (null === zU) return null;
      if (await UU(zU), YU !== zU) return null;
      const cU = ++pU;
      return new Promise((UU => {
        aU.set(cU, UU), WU(zU, XU(cU)), PU()
      }))
    }

    function eU(UU, XU, zU) {
      return LU((XU => Promise.all([UU.top, UU.left, UU.right].map((UU => function(UU, XU) {
        return dU(UU, gU, XU, (async () => ({
          image: await GU(XU),
          request: UU => ({
            type: "texture",
            url: XU,
            bitmap: UU
          })
        })))
      }(XU, UU))))), (cU => ({
        type: "draw",
        id: cU,
        ...UU,
        size: XU,
        outlineWidth: zU
      })))
    }

    function CU(UU, XU, zU, cU) {
      return LU((zU => function(UU, XU, zU) {
        return dU(UU, kU, XU, (async () => {
          const {
            texture: UU,
            ...cU
          } = await zU();
          return {
            image: await GU(UU),
            request: UU => ({
              type: "model",
              name: XU,
              bitmap: UU,
              geometry: cU
            })
          }
        }))
      }(zU, UU, XU)), (XU => ({
        type: "drawModel",
        id: XU,
        name: UU,
        size: zU,
        outlineWidth: cU
      })))
    }
  },
  40488: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => yU
    });
    var cU = zU(1974);

    function yU(UU, XU, zU) {
      return (0, cU.m)(UU, XU) < zU
    }
  },
  9287: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => yU
    });
    var cU = zU(1272);

    function yU(UU, XU) {
      var zU, yU;
      try {
        const zU = (0, cU.d)();
        if ("function" === typeof zU) {
          const cU = new zU(UU, XU);
          if (cU.type === UU) return cU
        }
      } catch {}
      const QU = document.createEvent("Event");
      return QU.initEvent(UU, null !== (zU = null === XU || void 0 === XU ? void 0 : XU.bubbles) && void 0 !== zU && zU, null !== (yU = null === XU || void 0 === XU ? void 0 : XU.cancelable) && void 0 !== yU && yU), QU
    }
  },
  39847: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => EU
    });
    var cU = zU(1236),
      yU = zU(1376),
      QU = zU(27),
      AU = zU(1349),
      FU = zU(1360),
      oU = zU(1568),
      DU = zU(37181);

    function EU(UU) {
      let {
        nU: XU,
        mU: zU
      } = UU;
      const EU = null !== XU && void 0 !== XU ? XU : (0, FU.b)().gameNameWithVariation;
      (0, cU.E)(EU) && ((0, DU.l)(), (0, AU.bb)((() => {
        console.log("Received matchmaking order from game server to game", XU), (0, QU.n)("inGameReplay"), (0, oU.navigatePreserveSearch)((0, yU.b)(EU, null !== zU && void 0 !== zU ? zU : void 0))
      }), "video_start"))
    }
  },
  40039: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU
    });
    var cU = zU(31),
      yU = zU(2058);

    function QU(UU) {
      var XU, zU;
      const QU = (0, yU.p)(null !== (XU = null === (zU = yU.w.toggleFreeCam) || void 0 === zU ? void 0 : zU[0]) && void 0 !== XU ? XU : null);
      cU.k.UY("showBottomMessage", {
        message: `Free Camera ${UU?"Enabled":"Disabled"}${QU?` - Press ${QU} to toggle`:""}`,
        timeoutLength: 2e3,
        type: "Warning"
      })
    }
  },
  39841: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => EU,
      i: () => oU,
      j: () => DU,
      k: () => YU
    });
    var cU = zU(2005),
      yU = zU(31),
      QU = zU(1410),
      AU = zU(1274);
    const FU = new Map;

    function oU(UU, XU) {
      yU.k.UY("newUiRequest", {
        id: UU,
        clientParameters: XU
      }, !0)
    }

    function DU(UU) {
      yU.k.UY("removeUiRequest", UU, !0);
      const XU = FU.get(UU);
      XU && (XU.tearDownNotification(), FU.delete(UU))
    }

    function EU() {
      yU.k.UY("clearUiRequests");
      for (const UU of FU.values()) UU.tearDownNotification();
      FU.clear()
    }

    function YU(UU, XU, zU, yU) {
      const oU = "string" === typeof XU ? {
          translationKey: XU
        } : XU,
        DU = QU.NotificationProvider.showPromptPopup({
          title: oU.translationKey,
          textOpts: {
            title: (0, AU.e)(oU.params, cU.gameBridge.latest("hiddenPlayerNames"))
          },
          confirmText: "general:yes",
          cancelText: "general:no",
          destructive: zU,
          unlockPointerKey: "uiRequestPopup"
        });
      FU.set(UU, DU), DU.getResult().then((XU => {
        FU.delete(UU), "notificationTornDown" !== XU && yU(XU)
      }))
    }
  },
  40517: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => YU,
      e: () => NU
    });
    var cU = zU(212),
      yU = zU(40521);
    const QU = 20;

    function AU(UU) {
      return UU.map(Math.floor).join(" ")
    }

    function FU(UU) {
      return null === UU.amount || 1 === UU.amount ? UU.name : `${UU.amount} ${UU.name}`
    }
    var oU = zU(40525),
      DU = zU(2032),
      EU = zU(1360);

    function YU(UU, XU) {
      if (!UU) return oU.b;
      const zU = UU.playerFeet();
      if (!zU) return "The player isn't in the world yet, so no blocks can be seen.";
      const QU = cU.f.aY,
        AU = (0, yU.j)(null !== XU && void 0 !== XU ? XU : zU, QU),
        FU = UU.chunkBlocks(AU);
      return FU ? (0, yU.d)(AU, QU, ((XU, zU, cU) => {
        const yU = FU(XU, zU, cU);
        return 0 === yU ? null : UU.blockName(yU).split("|")[0]
      }), zU) : `The chunk from ${AU.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${zU.map(Math.floor).join(" ")}.`
    }

    function NU(UU) {
      var XU, zU, cU;
      if (!UU) return oU.e;
      const yU = UU.playerFeet();
      if (!yU) return "The player isn't in the world yet, so nothing in it can be seen.";
      const {
        slots: YU,
        heldSlot: NU
      } = UU.inventory();
      return function(UU) {
        const XU = [];
        null !== UU.game && XU.push(`Game: ${UU.game}.`);
        const zU = null === UU.health ? "" : `, health ${Math.round(UU.health)}${null===UU.maxHealth?"":` of ${Math.round(UU.maxHealth)}`}`;
        XU.push(`The player (the creator) stands at ${AU(UU.position)}${zU}, ${UU.creative?"in":"not in"} creative mode.`);
        const cU = UU.slots[UU.heldSlot];
        XU.push(cU ? `Holding (slot ${UU.heldSlot}): ${FU(cU)}.` : `Holding nothing (slot ${UU.heldSlot} is empty).`);
        const yU = UU.slots.flatMap(((UU, XU) => UU ? [`slot ${XU}: ${FU(UU)}`] : []));
        XU.push(yU.length > 0 ? `Inventory: ${yU.join(", ")}.` : "Inventory: empty.");
        const oU = XU => Math.hypot(XU.position[0] - UU.position[0], XU.position[1] - UU.position[1], XU.position[2] - UU.position[2]),
          DU = [...UU.nearby].sort(((UU, XU) => oU(UU) - oU(XU)));
        if (0 === DU.length) XU.push("No other players or mobs are near enough to see.");
        else {
          XU.push("Near them, nearest first:");
          for (const UU of DU.slice(0, QU)) {
            const zU = "player" === UU.kind ? `player "${UU.name||"?"}"` : UU.name && UU.name !== UU.kind ? `${UU.kind} "${UU.name}"` : UU.kind,
              cU = Math.round(oU(UU));
            XU.push(`- ${zU} at ${AU(UU.position)}, ${cU} block${1===cU?"":"s"} away`)
          }
          DU.length > QU && XU.push(`- and ${DU.length-QU} more further away`)
        }
        return UU.droppedItems > 0 && XU.push(`${UU.droppedItems} dropped item${1===UU.droppedItems?" is":"s are"} on the ground nearby.`), XU.join("\n")
      }({
        game: null !== (XU = (0, EU.b)().gameNameWithVariation) && void 0 !== XU ? XU : null,
        position: yU,
        health: null !== (zU = DU.d.get("_health")) && void 0 !== zU ? zU : null,
        maxHealth: null !== (cU = DU.d.get("_totalMaxHealth")) && void 0 !== cU ? cU : null,
        creative: !0 === DU.d.get("creative"),
        heldSlot: NU,
        slots: YU,
        nearby: UU.nearby(),
        droppedItems: UU.droppedItems()
      })
    }
  },
  41976: (UU, XU, zU) => {
    zU.d(XU, {
      A: () => KU,
      B: () => fU,
      F: () => wU,
      H: () => uU,
      J: () => CU,
      N: () => mU,
      P: () => nU,
      Q: () => OU,
      b: () => lU,
      c: () => HU,
      g: () => LU,
      h: () => xU,
      k: () => eU,
      o: () => dU,
      p: () => iU,
      s: () => qU,
      w: () => rU,
      x: () => SU
    });
    var cU = zU(1444),
      yU = zU(31),
      QU = zU(1310),
      AU = zU(2580),
      FU = zU(5342),
      oU = zU(5312);
    let DU, EU = !1,
      YU = !1,
      NU = !1,
      IU = !1;
    const pU = 1300,
      aU = 3e3;
    let tU = 0,
      gU = !1,
      kU = !1,
      GU = 0;
    const BU = 2;
    let ZU = !1,
      RU = !1;
    const PU = new Set,
      WU = new Set;

    function dU() {
      return EU
    }

    function LU() {
      return kU
    }

    function eU() {
      return RU
    }

    function CU() {
      return (0, QU.w)() && !RU
    }

    function wU(UU) {
      let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (UU !== RU) {
        RU = UU;
        for (const UU of [...WU]) UU(RU);
        XU && nU()
      }
    }

    function qU(UU) {
      return WU.add(UU), () => {
        WU.delete(UU)
      }
    }

    function OU() {
      (0, FU.f)(AU.F.Menu, (0, QU.w)() ? 0 : AU.F.Menu)
    }

    function SU() {
      kU = !1, GU = 0, OU(), nU()
    }

    function rU(UU) {
      return PU.add(UU), () => {
        PU.delete(UU)
      }
    }

    function uU(UU) {
      YU = !1, UU !== EU && (EU = UU, IU = !1, clearTimeout(DU), NU = !EU && ZU, EU ? (gU = !1, kU = !1, GU = 0) : CU() && !ZU && (kU = !0), ZU = !1, EU && !CU() && jU(), bU(), NU && nU())
    }

    function fU(UU) {
      UU !== gU && (gU = UU, UU || nU())
    }

    function iU() {
      YU = !1, IU || !0 !== VU() || (IU = !0, clearTimeout(DU), DU = setTimeout(MU, pU))
    }

    function HU() {
      return (!YU || performance.now() - tU > aU) && (YU = (0, oU.H)().lockPointer(), tU = performance.now()), YU
    }

    function MU() {
      vU() && sU() && HU()
    }

    function vU() {
      return CU() && !EU && !gU && !(0, cU.n)()
    }

    function VU() {
      var UU;
      return "undefined" === typeof navigator || null === (UU = navigator.userActivation) || void 0 === UU ? void 0 : UU.isActive
    }

    function sU() {
      return NU && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== VU()
    }

    function nU() {
      CU() ? vU() && !kU && sU() && HU() : EU && !ZU && jU()
    }

    function mU() {
      kU ? navigator.vendor.startsWith("Apple") ? JU() : GU = BU : nU()
    }

    function lU() {
      GU > 0 && 0 === --GU && JU()
    }

    function xU() {
      GU = 0
    }

    function JU() {
      vU() && !0 === VU() && HU()
    }

    function jU() {
      ZU = !0, (0, oU.H)().unlockPointer()
    }

    function KU() {
      YU = !1, NU = !1, IU = !1, clearTimeout(DU), gU = !1, kU = !1, GU = 0, ZU = !1;
      const UU = EU;
      EU = !1, UU && bU()
    }

    function bU() {
      for (const UU of [...PU]) UU(EU);
      yU.k.UY("pointerLockUpdate", EU)
    }
  },
  41742: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => NU,
      f: () => FU,
      h: () => YU,
      l: () => DU,
      m: () => AU,
      o: () => EU,
      r: () => oU
    });
    let cU = null,
      yU = null,
      QU = null;

    function AU(UU) {
      cU = UU
    }

    function FU() {
      return cU
    }

    function oU(UU) {
      yU = UU
    }

    function DU() {
      return yU
    }

    function EU(UU) {
      QU = UU
    }

    function YU() {
      return QU
    }

    function NU() {
      var UU, XU;
      return !0 === (null === (UU = yU) || void 0 === UU || null === (XU = UU.currentViewer) || void 0 === XU ? void 0 : XU.inPlayback)
    }
  },
  42104: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      attachPlayGameSources: () => lc,
      playGameSources: () => mc
    });
    var cU = zU(2005),
      yU = zU(41742),
      QU = zU(5312),
      AU = zU(41660),
      FU = zU(42091),
      oU = zU(40496),
      DU = zU(31),
      EU = zU(5326),
      YU = zU(5318),
      NU = zU(41685),
      IU = zU(41717),
      pU = zU(42112),
      aU = zU(41695);
    (0, aU.m)(EU.oc.Chat, (UU => {
      if (UU.payloadKind !== YU.jc.Msgpack) return;
      const XU = function(UU) {
        if (null === UU || "object" !== typeof UU || !("content" in UU)) return null;
        const {
          chatMsgId: XU,
          worldCodeLineId: zU,
          content: cU,
          chatterEId: yU,
          chatterObjectsToReplay: QU
        } = UU;
        return {
          serverChatMsgId: null !== XU && void 0 !== XU ? XU : void 0,
          worldCodeLineId: null !== zU && void 0 !== zU ? zU : void 0,
          content: cU,
          chatterEId: void 0 === yU || null === yU ? void 0 : String(yU),
          chatterObjectsToReplay: QU
        }
      }((0, NU.d)(UU.payload));
      null !== XU && DU.k.UY("chat", XU, !0)
    }));
    const tU = {
        chatReceived: (0, oU.j)((function(UU) {
          var XU, zU, cU;
          return {
            id: UU,
            name: null !== (XU = pU.d.getName(UU)) && void 0 !== XU ? XU : null,
            local: (0, IU.d)() === UU,
            profileEffect: null !== (zU = null === (cU = (0, pU.g)(UU)) || void 0 === cU ? void 0 : cU.profileEffect) && void 0 !== zU ? zU : null
          }
        }))
      },
      gU = {
        sendChatMessage(UU) {
          var XU, zU;
          let {
            TE: cU,
            channelName: yU
          } = UU;
          return null !== (XU = null === (zU = (0, AU.f)()) || void 0 === zU ? void 0 : zU.clientApi.sendChat(cU, yU)) && void 0 !== XU && XU
        }
      };
    var kU = zU(212),
      GU = zU(2032),
      BU = zU(41652),
      ZU = zU(40488);
    const RU = [0, 0, 0],
      PU = {
        codeBlockClickable(UU) {
          var XU;
          const zU = (0, AU.f)();
          if (null === zU || void 0 === zU || !zU.isSessionLive) return !1;
          const cU = zU.api;
          if (0 !== (BU.w.playerFlags(cU.apiView, 0) & BU.Od.Crouching)) return !1;
          const yU = cU.queries.directorEntity(cU.localId) >= BU.wb.BYTES ? cU.memoryData(cU.scratch(), BU.wb.BYTES, 8, "the local player's DirectorEntity") : null;
          if (null === yU) return !1;
          for (let QU = 0; QU < 3; QU++) RU[QU] = BU.wb.feet(yU, 0, QU);
          return RU[1] += BU.wb.eyeHeight(yU, 0), (0, ZU.c)(RU, UU, null !== (XU = GU.d.get("blockReach")) && void 0 !== XU ? XU : kU.f.Qg)
        }
      },
      WU = {
        clickCodeBlock(UU) {
          var XU;
          null === (XU = (0, AU.f)()) || void 0 === XU || XU.clickCodeBlock(UU)
        }
      };
    var dU = zU(41670),
      LU = zU(42121),
      eU = zU(1079),
      CU = zU(39861),
      wU = zU(5303),
      qU = zU(41676),
      OU = zU(41667),
      SU = zU(41680);

    function rU(UU) {
      if (null === UU) return null;
      const XU = [];
      for (const zU of UU) {
        const UU = Object.keys(zU)[0];
        if ("VX" === UU) {
          const {
            str: UU,
            style: cU,
            clickableUrl: yU
          } = zU.VX, QU = Object.keys(UU)[0], AU = UU[QU];
          "string" !== QU && "styledEntityName" !== QU && "styledTranslatedText" !== QU || XU.push({
            str: AU,
            style: cU,
            clickableUrl: yU
          })
        } else XU.push(zU[UU])
      }
      return XU
    }
    const uU = {
      screenPos(UU) {
        var XU, zU;
        return null !== (XU = null === (zU = (0, AU.f)()) || void 0 === zU ? void 0 : zU.renderFrame.projectWorldPosToScreenPos(UU)) && void 0 !== XU ? XU : {
          x: 0,
          y: 0
        }
      }
    };
    let fU = !1;

    function iU() {
      fU || (fU = !0, (0, aU.m)(EU.oc.ProgressBarUpdate, (UU => {
        const XU = (0, SU.f)(UU);
        (0, SU.b)(XU) && DU.k.UY("progressBarUpdate", XU, !0)
      })), (0, aU.m)(qU.y, (UU => {
        const XU = (0, SU.d)(qU.y, UU);
        XU && DU.k.UY("middleScreenBarInitiate", {
          duration: XU.Mc,
          vc: XU.vc,
          horizBarRemOffset: XU.Vc
        }, !0)
      })), (0, aU.m)(EU.oc.RemoveMiddleScreenBar, (() => {
        DU.k.UY("middleScreenBarRemove")
      })), (0, aU.m)(qU.$, (UU => {
        const XU = (0, SU.d)(qU.$, UU);
        if (XU) {
          var zU;
          const UU = XU.iU ? null === (zU = (0, AU.f)()) || void 0 === zU ? void 0 : zU.renderFrame.projectDirectionToScreenPos(XU.iU) : void 0;
          DU.k.UY("sendHitmarker", {
            yX: XU.yX,
            screenPos: UU
          }, !0)
        }
      })), (0, aU.m)(qU.eb, (UU => {
        const XU = (0, SU.d)(qU.eb, UU);
        if (XU) {
          const {
            id: UU,
            position: zU,
            style: cU,
            Pc: yU,
            dc: QU
          } = XU;
          DU.k.UY("setDirectionArrow", {
            id: UU,
            position: zU,
            style: cU,
            text: rU(yU),
            dc: QU
          }, !0)
        }
      })), (0, aU.m)(qU.g, (UU => {
        const XU = (0, SU.d)(qU.g, UU);
        XU && DU.k.UY("clearDirectionArrow", {
          id: XU.id
        }, !0)
      })), (0, aU.m)(qU.p, (UU => {
        const XU = (0, SU.d)(qU.p, UU);
        XU && DU.k.UY("flyingMiddleMessage", {
          content: rU(XU.vX),
          nX: XU.nX,
          mX: XU.mX
        }, !0)
      })), (0, aU.m)(EU.oc.WorldVariation, (UU => {
        const XU = (0, SU.f)(UU);
        if ("string" === typeof XU) {
          const UU = XU === eU.e ? null : {
            message: `Currently loaded as variation: ${XU}`,
            type: "Warning"
          };
          DU.k.UY("showPermanentBottomMessage", UU, !0)
        }
      })), (0, aU.m)(qU.I, (UU => {
        const XU = (0, SU.d)(qU.I, UU);
        XU && function(UU, XU) {
          const {
            type: zU,
            params: cU
          } = (0, CU.g)(XU), yU = {
            ...cU
          };
          for (const QU of CU.d) yU[QU] && (yU[QU] = rU(yU[QU]));
          wU.e.queueQTE(UU, zU, yU).getResult().then((XU => {
            var zU;
            "boolean" === typeof XU && (null === (zU = (0, AU.f)()) || void 0 === zU || zU.send(OU.b.QteResponse, {
              qteId: UU,
              qteResponse: XU
            }))
          }))
        }(XU.id, XU.Cz)
      })), (0, aU.m)(qU.U, (UU => {
        const XU = (0, SU.d)(qU.U, UU);
        "number" === typeof XU && wU.e.cancelQTE(XU)
      })), (0, aU.e)((() => {
        wU.e.reset()
      })), (0, aU.i)((() => {
        wU.e.reset()
      })), (0, aU.m)(EU.oc.EditItemCraftingRecipes, (UU => {
        const XU = (0, SU.f)(UU);
        (0, SU.b)(XU) && DU.k.UY("craftingRecipesEdited", {
          itemName: XU.craftingRecipeItemName,
          recipesForItem: XU.recipesForItem
        })
      })), (0, aU.m)(qU.S, (UU => {
        const XU = (0, SU.d)(qU.S, UU);
        XU && DU.k.UY("craftingRecipesEdited", {
          itemName: XU.DU,
          recipesForItem: []
        })
      })))
    }
    var HU = zU(27);
    const MU = [{
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

    function vU(UU) {
      return BU.w.playerFlags(UU.api.apiView, 0)
    }
    const VU = {
        freeCamera: (0, IU.c)((UU => () => {
          const XU = UU.isSessionLive && 0 !== (vU(UU) & BU.Od.FreeCamMoves),
            zU = UU.freeCameraAllowed() && null === HU.e.get("scriptedCameraFacing");
          return MU[(zU ? 2 : 0) + (XU ? 1 : 0)]
        }), MU[0], (UU => (0, QU.r)(UU)))
      },
      sU = {
        setFreeCameraMovesFly: UU => {
          var XU;
          null === (XU = (0, AU.f)()) || void 0 === XU || XU.setFreeCameraMovesFly(UU)
        }
      },
      nU = {
        freeCameraPos: () => {
          const UU = (0, AU.f)();
          return null !== UU && void 0 !== UU && UU.isSessionLive && UU.renderFrame.hasView && 0 !== (vU(UU) & BU.Od.FreeCam) ? UU.renderFrame.cameraPosition : null
        }
      };
    var mU = zU(40039);
    let lU = !1,
      xU = !1;

    function JU() {
      const UU = (0, AU.f)();
      if (null === UU || void 0 === UU || !UU.isSessionLive) return void(lU = !1);
      const XU = 0 !== (BU.w.playerFlags(UU.api.apiView, 0) & BU.Od.FreeCam);
      XU !== lU && (lU = XU, (0, mU.e)(XU))
    }
    var jU = zU(344),
      KU = zU(37756),
      bU = zU(2044);
    var TU = zU(42125),
      hU = zU(41708);
    const UX = {
      interactPrompt: null,
      blockText: null,
      neededTool: null
    };
    let XX = "off";

    function zX(UU) {
      var XU;
      return null === UU ? null : {
        label: null !== (XU = (0, TU.b)(UU, "interactionPrompt")) && void 0 !== XU ? XU : null
      }
    }
    const cX = new Map([
      [BU.zc.Open, {
        label: oU.f.open
      }],
      [BU.zc.Close, {
        label: oU.f.close
      }],
      [BU.zc.Milk, {
        label: oU.f.milk
      }],
      [BU.zc.Shear, {
        label: oU.f.shear
      }],
      [BU.zc.Tame, {
        label: oU.f.tame
      }],
      [BU.zc.Feed, {
        label: oU.f.feed
      }],
      [BU.zc.Ride, {
        label: oU.f.ride
      }]
    ]);
    class yX {
      constructor() {
        this.target = UX, this.yF = BU.cd, this.optionName = null, this.pickaxe = new oU.b
      }
      read(UU) {
        var XU;
        const zU = BU.w.targetBlockId(UU.api.apiView, 0);
        zU !== this.yF && (this.yF = zU, this.optionName = zU === BU.cd ? null : `${UU.tables.getMetaInfo(zU).rootName}CrosshairText`);
        const cU = null === this.optionName ? null : null !== (XU = UU.tables.getClientOption(this.optionName)) && void 0 !== XU ? XU : null;
        this.pickaxe.update(function(UU, XU) {
          var zU, cU, yU;
          if (0 === (BU.w.playerFlags(UU.api.apiView, 0) & BU.Od.Breaking) || XU === BU.cd || 0 === XU) return null;
          const {
            tables: QU
          } = UU;
          if (!0 === QU.getClientOption("creative")) return null;
          const AU = QU.nameOfId(XU),
            FU = null === (zU = UU.items.uD()) || void 0 === zU ? void 0 : zU.name,
            oU = null !== (cU = QU.getItemStat(AU, "harvestLevel")) && void 0 !== cU ? cU : 0;
          return (0, jU.Ic)({
            blockHarvestType: QU.getDefaultItemStat(AU, "harvestType"),
            blockHarvestLevel: QU.getDefaultItemStat(AU, "harvestLevel"),
            harvestLevel: oU,
            heldToolType: void 0 === FU ? void 0 : QU.getDefaultItemStat(FU, "harvests"),
            heldToolLevel: void 0 === FU ? void 0 : QU.getDefaultItemStat(FU, "level")
          }) && null !== (yU = KU.r[oU]) && void 0 !== yU ? yU : null
        }(UU, zU)), UU.watchPromptPick(XX);
        const yU = "touch" === XX ? function(UU) {
          var XU;
          const zU = UU.interactLabel;
          return zU === BU.zc.Entity ? zX(UU.promptEntity) : zU === BU.zc.TameWith ? {
            label: (0, oU.u)(UU.tables.nameOfId(UU.interactIcon))
          } : null !== (XU = cX.get(zU)) && void 0 !== XU ? XU : null
        }(UU) : zX(UU.promptEntity);
        return this.target = (0, bU.q)(this.target, {
          interactPrompt: yU,
          blockText: cU,
          neededTool: this.pickaxe.shown
        }), this.target
      }
    }
    let QX = null;
    const AX = {
      current: () => {
        var UU, XU;
        return null !== (UU = null === (XU = QX) || void 0 === XU ? void 0 : XU.target) && void 0 !== UU ? UU : UX
      },
      watch: UU => {
        const XU = new yX;
        QX = XU;
        const zU = (0, IU.e)((zU => {
          let cU = XU.read(zU);
          UU(cU);
          const yU = (0, QU.t)((() => {
            const yU = XU.read(zU);
            yU !== cU && (cU = yU, UU(yU))
          }));
          return () => {
            yU(), zU.watchPromptPick("off")
          }
        }));
        return () => {
          zU(), QX === XU && (QX = null)
        }
      }
    };
    let FX = 0,
      oX = 0;
    const DX = {
        health: oU.p,
        aura: oU.i,
        hotbar: hU.e.states.hotbar,
        heldItemAim: hU.e.states.heldItemAim,
        crouching: (0, IU.c)((UU => function(UU) {
          const XU = () => 0 !== (BU.w.playerFlags(UU.apiView, 0) & BU.Od.Crouching);
          return {
            current: XU,
            watch(UU) {
              let zU = XU();
              return (0, QU.r)((() => {
                const cU = XU();
                cU !== zU && (zU = cU, UU(cU))
              }))
            }
          }
        }(UU.api).current), !1, (UU => (0, QU.r)(UU))),
        flight: (0, IU.c)((UU => () => function(UU) {
          const XU = BU.w.playerFlags(UU.apiView, 0);
          return (0, oU.m)(0 !== (XU & BU.Od.CanFly), 0 !== (XU & BU.Od.Flying))
        }(UU.api)), (0, oU.m)(!1, !1), (UU => (0, QU.r)(UU))),
        gliderBoostFuel: (0, IU.c)((UU => () => BU.w.gliderBoostFuel(UU.api.apiView, 0)), 0, (UU => (0, QU.r)(UU))),
        crosshairTarget: AX
      },
      EX = {
        hotbarSlotRequested: hU.e.events.hotbarSlotRequested,
        hotbarScrolled: hU.e.events.hotbarScrolled,
        numberKeyPressed: hU.e.events.numberKeyPressed,
        shotDamageToShow: (0, oU.q)((UU => !0 === (0, TU.b)(UU, "showDamageAmounts")))
      },
      YX = {
        selectHotbarSlot: hU.e.commands.selectHotbarSlot,
        setCrosshairInteractPrompt: UU => {
          XX = UU
        }
      },
      NX = {
        momentumFrac: function() {
          var UU, XU, zU;
          const cU = (0, AU.f)(),
            yU = performance.now(),
            QU = null === cU || void 0 === cU || null === (UU = cU.items.uD()) || void 0 === UU || null === (XU = UU.attributes) || void 0 === XU || null === (zU = XU.customAttributes) || void 0 === zU ? void 0 : zU.enchantments;
          return FX = null !== cU && null !== QU && void 0 !== QU && QU.Momentum ? 0 !== (BU.w.playerFlags(cU.api.apiView, 0) & BU.Od.Breaking) ? Math.max(0, BU.w.momentumFrac(cU.api.apiView, 0)) : Math.max(0, FX - (yU - oX) / 1500) : 0, oX = yU, FX
        }
      };
    var IX = zU(41657);
    const pX = {
      lobbyManage(UU) {
        var XU;
        null === (XU = (0, AU.f)()) || void 0 === XU || XU.send(OU.b.LobbyManage, UU)
      }
    };
    var aX = zU(1258),
      tX = zU(37211),
      gX = zU(9364),
      kX = zU(1680),
      GX = zU(2580),
      BX = zU(5329);
    let ZX = !1;

    function RX(UU) {
      ZX = UU
    }

    function PX() {
      "inGame" !== HU.e.get("gameState") || (0, kX.q)() || DU.k.UY("ctrlCrouchWithoutFullscreen")
    }
    let WX = !1;
    const dX = {
        OpenEmoteWheel: () => {
          RX(!0), WX = !0, queueMicrotask((() => {
            WX && (WX = !1, DU.k.UY("requestEmoteWheelHoldOpen"))
          }))
        },
        ToggleFullCoordinateOverlay: () => {
          DU.k.UY("toggleFullCoordinateOverlay")
        },
        KeyYPressed: () => {
          (0, tX.e)() || DU.k.UY("YKeyPressed")
        },
        KeyXPressed: () => {
          (0, tX.e)() || DU.k.UY("XKeyPressed")
        },
        CtrlCrouch: PX,
        "primary-fire": () => {
          DU.k.UY("mouseState", {
            PA: aX.b.DownFirePrimary,
            isDown: !0
          })
        },
        "alt-fire": () => {
          DU.k.UY("mouseState", {
            PA: aX.b.DownFireSecondary,
            isDown: !0
          })
        },
        TouchHold: () => {
          DU.k.UY("mouseState", {
            PA: aX.b.TouchDownLong,
            isDown: !0
          })
        }
      },
      LX = {
        OpenEmoteWheel: () => {
          RX(!1), WX ? (WX = !1, (0, gX.e)() || DU.k.UY("requestEmoteWheelHoldOpen")) : DU.k.UY("requestEmoteWheelHoldRelease")
        },
        CtrlCrouch: PX,
        "primary-fire": () => {
          DU.k.UY("mouseState", {
            PA: aX.b.UpFirePrimary,
            isDown: !1
          })
        },
        "alt-fire": () => {
          DU.k.UY("mouseState", {
            PA: aX.b.UpFireSecondary,
            isDown: !1
          })
        },
        TouchDig: () => {
          DU.k.UY("mouseState", {
            PA: aX.b.UpFirePrimary,
            isDown: !1
          })
        }
      };
    let eX = !1;

    function CX() {
      eX || (eX = !0, (0, BX.k)((UU => {
        if ((0, yU.e)()) return;
        const XU = (0, BX.g)(UU) ? "primary-fire" : UU.action;
        var zU;
        if (UU.down) {
          if (0 === (UU.flags & GX.c.Synthetic)) {
            var cU;
            null === (cU = dX[XU]) || void 0 === cU || cU.call(dX)
          }
        } else null === (zU = LX[XU]) || void 0 === zU || zU.call(LX)
      })))
    }
    var wX = zU(320),
      qX = zU(97),
      OX = zU(42),
      SX = zU(41976),
      rX = zU(1360),
      uX = zU(2601);
    let fX = !1;
    const iX = {
      sendCodeCollab(UU) {
        var XU;
        null === (XU = (0, AU.f)()) || void 0 === XU || XU.send(OU.b.CodeCollab, (0, OU.m)(UU), (0, uX.h)(UU))
      }
    };
    var HX = zU(39926),
      MX = zU(9287);
    let vX = null,
      VX = !1,
      sX = null;

    function nX() {
      return "inGame" === HU.e.get("gameState") && !(0, tX.e)()
    }
    const mX = {
        OpenInventory: UU => {
          (0, kX.A)(UU, "inventory", (0, IX.n)())
        },
        OpenShop: UU => {
          vX && nX() && (0, kX.x)(UU, wX.s.SHOP, !vX.shopIsEmpty(GU.d.get("shopInfo")))
        },
        OpenLobbyLeaderboard: UU => {
          nX() && (0, kX.x)(UU, wX.s.LOBBY_LEADERBOARD, (0, HX.c)({
            lobbyLeaderboardInfo: GU.d.get("lobbyLeaderboardInfo"),
            lobbyManage: GU.d.get("lobbyManage")
          }))
        },
        OpenTasksAndLeaderboard: UU => {
          var XU;
          const zU = null === (XU = vX) || void 0 === XU ? void 0 : XU.getClientGameMapKey();
          zU ? (0, kX.C)(UU, !0, zU) : (0, kX.A)(UU, "retentionFeatures", !(!GU.d.get("_tasks") && !GU.d.get("_availableLeaderboards")))
        },
        OpenInviteLink: UU => {
          (0, kX.A)(UU, "inviteLink", qX.featureFlags.canUseInviteLinks)
        },
        OpenCodeEditor: UU => {
          nX() && function(UU) {
            const XU = (0, AU.f)(),
              zU = null !== XU && void 0 !== XU && XU.isSessionLive ? XU.api : null,
              cU = zU ? zU.wG(zU.localId) : null;
            (0, kX.C)(UU, null !== cU && (0, uX.d)((0, rX.b)()), (() => {
              (0, uX.l)(cU)
            }))
          }(UU)
        },
        HideUi: () => {
          DU.k.UY("showUi", !1)
        }
      },
      lX = {
        HideUi: () => {
          DU.k.UY("showUi", !0)
        }
      };

    function xX() {
      VX || (VX = !0, zU.e(171).then((() => zU(63270))).then((UU => {
        vX = UU
      }), (UU => {
        console.error("[bloxd-wasm-client] the menu keys' checks did not load", UU)
      })), (0, SX.w)((UU => {
        UU || !(0, SX.g)() || (0, qX.isMobile)() || !OX.k.getItem("disableFullscreen") || (0, kX.p)() || HU.e.set({
          openEverythingMenuName: wX.s.SETTINGS
        })
      })), (0, BX.k)((UU => {
        let {
          action: XU,
          down: zU,
          press: cU
        } = UU;
        var QU, AU;
        (0, yU.e)() || (zU ? null === (QU = mX[XU]) || void 0 === QU || QU.call(mX, function(UU) {
          var XU;
          if (0 === UU || (null === (XU = sX) || void 0 === XU ? void 0 : XU.press) !== UU) {
            const XU = {
              press: UU,
              event: (0, MX.b)("inputAction")
            };
            sX = XU, queueMicrotask((() => {
              sX === XU && (sX = null)
            }))
          }
          return sX.event
        }(cU)) : null === (AU = lX[XU]) || void 0 === AU || AU.call(lX))
      })))
    }
    var JX = zU(39852),
      jX = zU(39847),
      KX = zU(39841);
    const bX = {
      completeTask(UU) {
        var XU;
        null === (XU = (0, AU.f)()) || void 0 === XU || XU.send(OU.b.CompleteTask, (0, OU.o)(UU))
      },
      setServerCookie(UU) {
        var XU;
        let {
          key: zU,
          value: cU
        } = UU;
        null === (XU = (0, AU.f)()) || void 0 === XU || XU.send(OU.b.GeneralCookieSet, (0, OU.v)({
          pA: zU,
          aA: cU
        }))
      },
      answerUiRequest(UU) {
        var XU;
        let {
          id: zU,
          KD: cU
        } = UU;
        null === (XU = (0, AU.f)()) || void 0 === XU || XU.send(OU.b.UiRequestResp, (0, OU.V)({
          iA: zU,
          HA: cU,
          MA: 5
        }))
      },
      chooseRewardedAd(UU) {
        var XU;
        let {
          id: zU,
          KD: cU
        } = UU;
        null === (XU = (0, AU.f)()) || void 0 === XU || XU.send(OU.b.UiRequestResponded, (0, OU.U)({
          id: zU,
          KD: cU
        }))
      },
      requestLeaderboard(UU) {
        var XU;
        let {
          category: zU,
          timeframe: cU,
          seeTop: yU
        } = UU;
        null === (XU = (0, AU.f)()) || void 0 === XU || XU.send(OU.b.LeaderboardRequest, {
          category: zU,
          timeframe: cU,
          seeTop: yU
        })
      }
    };
    let TX = !1;
    const hX = kU.f.zg / 2,
      Uz = [hX, -hX, -hX, -hX, hX, hX, -hX, hX],
      Xz = [0, 0, 0];

    function zz(UU, XU, zU) {
      for (let cU = 0; cU < UU.length; cU += 2)
        if (UU[cU] === XU && UU[cU + 1] === zU) return !0;
      return !1
    }
    const cz = {
      blocksStandingOn: function() {
        const UU = (0, AU.f)();
        if (null === UU) return [];
        const {
          api: XU,
          chunks: zU,
          tables: cU
        } = UU;
        if (!XU.readPosition(XU.localId, Xz)) return [];
        const [yU, QU, FU] = Xz, oU = Math.ceil(QU) - 1, DU = [], EU = [];
        for (let AU = 0; AU < Uz.length; AU += 2) {
          const UU = yU + Uz[AU],
            XU = FU + Uz[AU + 1];
          if (Number.isInteger(UU) || Number.isInteger(XU)) continue;
          const QU = Math.floor(UU),
            YU = Math.floor(XU);
          if (zz(EU, QU, YU)) continue;
          const NU = zU.yF(QU, oU, YU);
          cU.isSolidBlockId(NU) && (EU.push(QU, YU), DU.push(cU.nameOfId(NU)))
        }
        return DU
      },
      dropAhead: function() {
        const UU = (0, AU.f)();
        return null !== UU && 0 !== (BU.w.playerFlags(UU.api.apiView, 0) & BU.Od.DropAhead)
      }
    };
    var yz = zU(37677),
      Qz = zU(39900),
      Az = zU(1410),
      Fz = zU(41725);
    const oz = new Set(["replayLoad", "replaySave", "replaySaveAs", "replayTimelineZoomIn", "replayTimelineZoomOut"]),
      Dz = new Set(["replaySkipBack", "replaySkipForward", "replaySpeedUp", "replaySpeedDown", "replayRecordKeyframe"]);

    function Ez() {
      const UU = new Set;
      return {
        add: XU => (UU.add(XU), () => {
          UU.delete(XU)
        }),
        fire() {
          for (const XU of UU) XU()
        }
      }
    }
    const Yz = Object.freeze([]);

    function Nz(UU, XU) {
      let zU, {
        rereads: cU,
        followLocalId: yU
      } = XU;
      const AU = () => (zU = (0, bU.q)(zU, UU()), zU);
      return {
        current: AU,
        watch(UU) {
          const XU = (0, pU.b)((XU => {
            cU(XU) && UU(AU())
          }));
          if (!yU) return XU;
          let zU = (0, IU.d)();
          const FU = (0, QU.t)((() => {
            const XU = (0, IU.d)();
            XU !== zU && (zU = XU, UU(AU()))
          }));
          return () => {
            XU(), FU()
          }
        }
      }
    }
    const Iz = {
        players: Nz((function() {
          const UU = pU.d.ids(),
            XU = {};
          for (const QU of UU) {
            var zU, cU, yU;
            XU[QU] = {
              name: null !== (zU = pU.d.getName(QU)) && void 0 !== zU ? zU : null,
              ranks: null !== (cU = pU.d.getSetting(QU, "ranks")) && void 0 !== cU ? cU : Yz,
              cosmetics: null !== (yU = (0, pU.g)(QU)) && void 0 !== yU ? yU : null
            }
          }
          return {
            ids: UU,
            byId: XU,
            localId: (0, IU.d)()
          }
        }), {
          rereads: UU => "roster" !== UU.kind || UU.members || UU.settings.has("ranks"),
          followLocalId: !0
        }),
        lobbyLeaderboardRows: Nz((function() {
          const UU = {};
          for (const yU of pU.d.ids()) {
            var XU, zU, cU;
            UU[yU] = {
              colour: null !== (XU = pU.d.getSetting(yU, "colorInLobbyLeaderboard")) && void 0 !== XU ? XU : null,
              values: null !== (zU = pU.d.getSetting(yU, "lobbyLeaderboardValues")) && void 0 !== zU ? zU : null,
              tags: null !== (cU = pU.d.getSetting(yU, "lobbyLeaderboardTags")) && void 0 !== cU ? cU : null
            }
          }
          return UU
        }), {
          rereads: function(UU) {
            if ("roster" !== UU.kind) return "reset" === UU.kind;
            const {
              members: XU,
              settings: zU
            } = UU;
            return XU || zU.has("colorInLobbyLeaderboard") || zU.has("lobbyLeaderboardValues") || zU.has("lobbyLeaderboardTags")
          },
          followLocalId: !1
        })
      },
      pz = {
        cosmeticsUpdated: {
          watch: UU => (0, pU.b)((XU => {
            if ("cosmetics" !== XU.kind) return;
            const zU = (0, IU.d)();
            UU(XU.updates.map((UU => {
              let {
                AU: XU,
                FU: cU,
                oU: yU
              } = UU;
              return {
                local: XU === zU,
                FU: cU,
                oU: yU
              }
            })))
          }))
        }
      };
    var az = zU(3221),
      tz = zU(1800),
      gz = zU(702),
      kz = zU(42020);
    let Gz = !1,
      Bz = null;
    const Zz = {
      setShopOpen(UU) {
        var XU;
        null === (XU = (0, AU.f)()) || void 0 === XU || XU.send(OU.b.ShopMenuChanged, (0, OU.N)(UU))
      },
      buyShopItem(UU) {
        var XU;
        let {
          categoryKey: zU,
          itemKey: cU,
          userInput: yU
        } = UU;
        null === (XU = (0, AU.f)()) || void 0 === XU || XU.send(OU.b.ItemBought, {
          categoryKey: zU,
          itemKey: cU,
          shopVersion: GU.d.get("_shopVersion"),
          userInput: yU
        })
      }
    };
    let Rz = !1;
    var Pz = zU(5342);
    const Wz = GX.F.LookFrozen | GX.F.ClicksSuppressed;

    function dz(UU, XU) {
      var zU;
      null !== (zU = (0, AU.f)()) && void 0 !== zU && zU.send(UU, XU) || console.warn(`[bloxd-wasm-client] message ${UU} not sent: no live game or the core's command ring is full`)
    }(0, aU.m)(qU.ib, (UU => {
      const XU = (0, SU.d)(qU.ib, UU);
      void 0 !== XU && DU.k.UY("setDiscordReportKey", XU)
    }));
    const Lz = {
      ignorePlayer(UU) {
        dz(OU.b.IgnoreUser, (0, OU.y)({
          bD: UU
        }))
      },
      reportPlayer(UU) {
        let {
          playerId: XU,
          chatMsgId: zU,
          policy: cU,
          details: yU
        } = UU;
        dz(OU.b.UserReport, (0, OU.db)({
          GD: XU,
          BD: zU,
          policy: cU,
          ZD: yU
        }))
      },
      reportWorldCodeChat(UU) {
        let {
          chatMsgId: XU,
          policy: zU,
          details: cU
        } = UU;
        dz(OU.b.UserReport, (0, OU.db)({
          GD: "",
          BD: XU,
          policy: zU,
          ZD: cU
        }))
      },
      requestDiscordReportKey(UU) {
        dz(OU.b.ReqDiscordReportKey, (0, OU.G)(UU))
      },
      reportLobbyOrGame(UU) {
        let {
          target: XU,
          policy: zU,
          details: cU
        } = UU;
        "customGame" === XU ? dz(OU.b.CustomGameReport, (0, OU.r)({
          policy: zU,
          ZD: cU
        })) : dz(OU.b.LobbyReport, (0, OU.A)({
          policy: zU,
          ZD: cU
        }))
      },
      updateMyCosmetic(UU) {
        dz(OU.b.UpdateMyCosmetic, (0, OU.$)(UU))
      },
      holdEmoteWheel(UU) {
        !UU || ZX ? (0, Pz.f)(Wz, UU ? Wz : 0) : DU.k.UY("requestEmoteWheelHoldRelease")
      }
    };
    var ez = zU(42127),
      Cz = zU(9782),
      wz = zU(40513);
    const qz = [0, 0, 0],
      Oz = [0, 0, 0],
      Sz = [0, 0, 0],
      rz = {
        blockAtViewPoint(UU) {
          let {
            x: XU,
            y: zU
          } = UU;
          const cU = (0, AU.f)();
          if (null === cU || void 0 === cU || !cU.renderFrame.hasView) return null;
          const {
            renderFrame: yU,
            clientApi: QU,
            api: FU
          } = cU;
          let oU = 0;
          return (0, wz.g)(((UU, XU, zU) => (oU = QU.getBlockId(UU, XU, zU), 0 !== oU)), yU.cameraPosition, (0, wz.h)((UU => BU.w.viewProj(FU.apiView, 0, UU)), XU, zU, qz), wz.c, Oz, Sz) ? {
            pos: [Oz[0], Oz[1], Oz[2]],
            normal: [Sz[0], Sz[1], Sz[2]],
            name: (0, Cz.f)(oU)
          } : null
        }
      },
      uz = {
        setBlockHighlight(UU) {
          var XU;
          null === (XU = (0, AU.f)()) || void 0 === XU || XU.setBlockHighlight(UU)
        }
      };
    var fz = zU(2014),
      iz = zU(42010),
      Hz = zU(42133),
      Mz = zU(2049),
      vz = zU(37110),
      Vz = zU(264);
    const sz = {
        icon: ".EntireInventoryWrapper .InvenBodyRight .InvenItem .DrawnBlockIcon",
        fallbackRem: 3.4,
        asked: new Set
      },
      nz = {
        icon: ".EntireInventoryWrapper .LazyLoadedItemWrapper .InvenItem .DrawnBlockIcon",
        fallbackRem: .9 * sz.fallbackRem,
        asked: new Set
      },
      mz = 2e3,
      lz = 4;
    let xz = [],
      Jz = !1,
      jz = !1,
      Kz = !1;
    const bz = new Set,
      Tz = [];
    let hz = 0,
      Uc = null;

    function Xc() {
      return Jz && (0, vz.i)()
    }

    function zc() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cU.gameBridge.latest("inventory");
      if (Kz && !jz) {
        for (const zU of UU.player) {
          var XU;
          if (null !== zU) cc(null !== (XU = zU.icon) && void 0 !== XU ? XU : zU.name, sz)
        }
        for (const UU of [...BU.L, ...xz]) cc(UU, nz);
        Qc()
      }
    }

    function cc(UU, XU) {
      XU.asked.has(UU) || bz.has(UU) || ("model" === cU.gameBridge.lookup("itemIcon", UU).kind ? (XU.asked.add(UU), Tz.push({
        name: UU,
        slot: XU
      })) : bz.add(UU))
    }

    function yc(UU) {
      xz = UU, zc()
    }

    function Qc() {
      !Kz || jz || null !== Uc || 0 === Tz.length || hz >= lz || (Uc = (0, Vz.b)((() => {
        Uc = null;
        const UU = Tz.shift();
        void 0 !== UU && Kz && (hz++, async function(UU, XU) {
          var zU, yU;
          if (await (0, vz.m)(), !Kz) return void XU.asked.delete(UU);
          if (!(0, vz.i)()) return void(jz = !0);
          const QU = window.devicePixelRatio,
            AU = null !== (zU = null === (yU = document.querySelector(XU.icon)) || void 0 === yU ? void 0 : yU.getBoundingClientRect().width) && void 0 !== zU ? zU : 0,
            FU = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16,
            oU = Math.round((AU > 0 ? AU : XU.fallbackRem * FU) * QU);
          try {
            await cU.gameBridge.query("blockIcon", {
              name: UU,
              size: oU,
              lineWidth: (0, Mz.b)(QU)
            }) || XU.asked.delete(UU)
          } catch {
            XU.asked.delete(UU)
          }
        }(UU.name, UU.slot).finally((() => {
          hz--, Qc()
        })), Qc())
      }), {
        timeoutMs: mz
      }))
    }
    var Ac = zU(4929),
      Fc = zU(4899),
      oc = zU(42138),
      Dc = zU(3660),
      Ec = zU(3664);
    let Yc = null,
      Nc = null;

    function Ic(UU) {
      const XU = UU.startsWith(Ec.n),
        [zU, cU = zU, yU = zU] = (XU ? UU.slice(Ec.n.length) : UU).split(Ec.k);
      return {
        top: zU,
        left: cU,
        right: yU,
        half: XU
      }
    }

    function pc(UU) {
      const XU = null === Yc ? void 0 : (0, Dc.c)(UU),
        zU = void 0 === XU ? 0 : Yc.codes[XU];
      return 0 === zU ? void 0 : Yc.pool[zU - 1]
    }
    var ac = zU(3656),
      tc = zU(4890),
      gc = zU(4920),
      kc = zU(42059),
      Gc = zU(42141);
    const Bc = "item:";
    let Zc = null,
      Rc = null,
      Pc = null,
      Wc = null,
      dc = !1,
      Lc = !1;

    function ec() {
      return Lc || (Lc = !0, (0, gc.l)().then((UU => {
        UU && (0, fz.e)()
      }))), Pc ??= Promise.all([(0, ac.h)(), (Nc ??= zU.e(1).then((() => zU(63291))).then((UU => {
        let {
          BLOCK_FACE_RUNS: XU,
          BLOCK_FACES: zU,
          MAX_FACE_ITEM_ID: cU
        } = UU;
        Yc = {
          codes: (0, Ec.y)(XU, cU + 1),
          pool: zU.split(Ec.r).map(Ic)
        }
      }), (UU => {
        throw Nc = null, UU
      })), Nc), (0, Gc.e)(), zU.e(215).then((() => zU(34884)))]).then((UU => {
        let [, , XU, zU] = UU;
        XU.followBundledTextures(), Zc = XU, Rc = zU, (0, fz.e)()
      }), (UU => {
        Pc = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", UU)
      })), Pc
    }

    function Cc(UU) {
      var XU, zU;
      return null !== (XU = null === (zU = (0, kc.i)()) || void 0 === zU ? void 0 : zU.textureUrl(UU)) && void 0 !== XU ? XU : Zc.itemSpriteUrl(UU)
    }

    function wc(UU) {
      var XU, zU;
      return null !== (XU = null === (zU = (0, kc.i)()) || void 0 === zU ? void 0 : zU.textureUrl(UU)) && void 0 !== XU ? XU : Zc.blockTextureUrl(UU)
    }

    function qc(UU) {
      var XU;
      return null !== (XU = (0, ac.e)(UU)) && void 0 !== XU ? XU : UU
    }

    function Oc(UU, XU) {
      var zU, cU, yU;
      return null !== (zU = null !== (cU = null !== (yU = wc(UU)) && void 0 !== yU ? yU : null === XU || void 0 === XU ? void 0 : XU.rotated[UU]) && void 0 !== cU ? cU : null === XU || void 0 === XU ? void 0 : XU.animated[UU]) && void 0 !== zU ? zU : Zc.notFoundUrl()
    }

    function Sc(UU) {
      return void 0 !== (0, Dc.c)(UU) ? UU : /^[1-9][0-9]*$/.test(UU) ? (0, Dc.f)(Number(UU)) : void 0
    }

    function rc(UU) {
      var XU;
      if (UU.startsWith(Bc)) {
        var zU;
        const XU = (0, ac.e)(UU.slice(5));
        return null !== (zU = void 0 === XU ? null : Cc(XU)) && void 0 !== zU ? zU : Zc.notFoundUrl()
      }
      return null !== (XU = Zc.particleUrl(UU)) && void 0 !== XU ? XU : Zc.notFoundUrl()
    }

    function uc(UU, XU) {
      return "StairsBlock" === UU ? UU : XU ? "SlabBlock" : "CubeBlock"
    }
    const fc = {
        async blockIcon(UU) {
          var XU;
          let {
            name: cU,
            size: yU,
            lineWidth: QU
          } = UU;
          await ec();
          const AU = null !== (XU = Sc(cU)) && void 0 !== XU ? XU : cU,
            FU = (0, gc.f)(AU, yU, QU);
          if (null !== FU) return FU;
          const oU = pc(AU),
            DU = (0, Dc.c)(AU),
            EU = void 0 === DU || null === Rc ? void 0 : Rc.itemTypeNameOf(DU);
          if (null === Zc || void 0 === oU) return "";
          const YU = [oU.top, oU.left, oU.right].some((UU => null === wc(UU))),
            NU = YU ? await (Wc ??= zU.e(222).then((() => zU(34975))).then((UU => (dc && (dc = !1, (0, fz.e)()), {
              rotated: UU.rotatedBlockTextures,
              animated: UU.animatedBlockTextures
            })), (UU => (Wc = null, dc = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", UU), null))), Wc) : null;
          if (YU && null === NU) return "";
          const IU = {
              top: Oc(oU.top, NU),
              left: Oc(oU.left, NU),
              right: Oc(oU.right, NU),
              itemType: uc(EU, oU.half)
            },
            pU = (0, kc.h)(),
            aU = 0 === pU ? AU : `${AU}#${pU}`;
          return (await (0, tc.e)()).drawBlockIconUrl(aU, yU, QU, (() => IU))
        }
      },
      ic = {
        itemIcon: function(UU) {
          var XU, zU, yU, QU;
          if (null === Zc) return ec(), cU.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(UU);
          if ((0, Fc.i)(UU)) return {
            kind: "icon",
            url: null !== (zU = null !== (yU = null === (QU = (0, kc.i)()) || void 0 === QU ? void 0 : QU.textureUrl(UU)) && void 0 !== yU ? yU : Zc.ingameIconUrl(UU)) && void 0 !== zU ? zU : Zc.notFoundUrl()
          };
          if (UU.startsWith(Fc.d)) return {
            kind: "icon",
            url: rc(UU.slice(Fc.d.length))
          };
          if (0 === (0, Dc.i)()) return (0, oc.d)(), cU.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(UU);
          const AU = null !== (XU = Sc(UU)) && void 0 !== XU ? XU : UU,
            FU = (0, Dc.c)(AU),
            oU = void 0 === FU ? void 0 : Rc.itemTypeNameOf(FU);
          if (void 0 !== pc(AU)) return {
            kind: "drawnBlock"
          };
          const DU = function(UU) {
            var XU;
            return null !== (XU = Cc(qc(UU))) && void 0 !== XU ? XU : Zc.notFoundUrl()
          }(AU);
          if ((0, gc.k)(AU) && ! function(UU) {
              const XU = (0, kc.i)();
              return null !== XU && (null !== XU.textureUrl(qc(UU)) || (0, gc.d)(UU).some((UU => null !== XU.modelUrl(UU))))
            }(AU)) return {
            kind: "model",
            url: DU,
            drawn: (0, gc.i)(AU)
          };
          if ("Gun" === oU) return {
            kind: "gun",
            url: DU
          };
          if (void 0 !== FU && "GrayscaleArmour" === Rc.itemTypeOf(FU) || Object.hasOwn(Ac.e, AU)) {
            var EU;
            const XU = null !== (EU = (0, Ac.i)(UU)) && void 0 !== EU ? EU : (0, Ac.i)(AU);
            if (XU) return {
              kind: "item",
              url: DU,
              tint: XU
            }
          }
          return {
            kind: "item",
            url: DU
          }
        },
        hasIcon: function(UU) {
          return void 0 !== Sc(UU) || (0, Fc.i)(UU) || UU.startsWith(Fc.d)
        },
        isItemName: function(UU) {
          return void 0 !== Sc(UU)
        }
      };

    function Hc() {
      (0, cU.installPageSources)({
        commands: {
          ...cU.DEFAULT_CLIENT_PAGE_SOURCES.commands,
          setChunkAddDistance: iz.l,
          prewarmCreativeIcons: yc
        },
        queries: fc,
        lookups: {
          ...cU.DEFAULT_CLIENT_PAGE_SOURCES.lookups,
          ...ic,
          nG: iz.f,
          drawCallStats: Hz.k,
          iconsDrawAhead: Xc
        }
      }), (0, fz.e)(), ec(), Jz || (Jz = !0, DU.k.subscribe("gameJoined", (() => {
        var UU;
        Kz = !1, null === (UU = Uc) || void 0 === UU || UU(), Uc = null;
        for (const {
            name: XU,
            slot: zU
          }
          of Tz.splice(0)) zU.asked.delete(XU)
      })), DU.k.subscribe("gamePlayable", (() => {
        Kz = !0, zc()
      })), cU.gameBridge.subscribe("inventory", zc), cU.gameBridge.subscribe("itemIconsVersion", (() => {
        bz.clear(), zc()
      })))
    }
    var Mc = zU(633),
      vc = zU(40517);

    function Vc(UU) {
      if (null === UU || void 0 === UU || !UU.isCoreRunning) return null;
      const {
        api: XU,
        chunks: zU,
        items: cU,
        tables: yU
      } = UU;
      return {
        playerFeet() {
          const UU = XU.wG(XU.localId);
          return null !== UU && void 0 !== UU && UU.every(Number.isFinite) ? UU : null
        },
        chunkBlocks: UU => zU.isLoaded(UU[0], UU[1], UU[2]) ? (UU, XU, cU) => zU.yF(UU, XU, cU) : null,
        blockName: UU => yU.nameOfId(UU),
        inventory: () => ({
          slots: cU.playerItems().map((UU => UU ? {
            name: UU.name,
            amount: UU.amount
          } : null)),
          heldSlot: cU.selectedSlot
        }),
        nearby() {
          const zU = [];
          for (let yU = 0; yU < XU.idStr.length; yU++) {
            var cU;
            const QU = XU.idStr[yU],
              AU = XU.serverIds[yU],
              FU = XU.kinds[yU];
            if (null === QU || XU.isLocal(AU) || FU >>> BU.d !== BU.s.Lifeform) continue;
            const oU = XU.wG(AU),
              DU = Mc.h[FU & BU.f];
            oU && void 0 !== DU && zU.push({
              kind: "Player" === DU ? "player" : DU,
              name: null !== (cU = UU.clientApi.getEntityName(QU)) && void 0 !== cU ? cU : null,
              position: oU
            })
          }
          return zU
        },
        droppedItems() {
          let UU = 0;
          for (let zU = 0; zU < XU.idStr.length; zU++) null !== XU.idStr[zU] && XU.kinds[zU] >>> BU.d === BU.s.Item && UU++;
          return UU
        }
      }
    }
    const sc = {
        worldCodeAiChunk: UU => Promise.resolve((0, vc.d)(Vc((0, AU.f)()), UU)),
        worldCodeAiGameState: () => Promise.resolve((0, vc.e)(Vc((0, AU.f)())))
      },
      nc = function(UU) {
        const XU = Ez(),
          cU = Ez(),
          yU = new Set,
          QU = new Set,
          AU = () => {
            var XU, zU;
            return null !== (XU = null === (zU = UU.runtime()) || void 0 === zU ? void 0 : zU.currentViewer) && void 0 !== XU ? XU : null
          };
        let FU = null,
          oU = null;
        const EU = (UU, XU) => ({
            current: UU,
            watch(zU) {
              let cU = UU();
              return XU.add((() => {
                const XU = UU();
                XU !== cU && (cU = XU, zU(XU))
              }))
            }
          }),
          NU = UU => ({
            watch: XU => (UU.add(XU), () => {
              UU.delete(XU)
            })
          }),
          IU = UU => {
            const XU = AU(),
              zU = null === XU || void 0 === XU ? void 0 : XU.view;
            XU && zU && XU.seek(Math.max(0, Math.min(zU.totalTicks - 1, zU.LY + UU * YU.Cd)))
          },
          pU = {
            replay: EU((() => {
              var UU;
              const XU = AU(),
                zU = null !== (UU = null === XU || void 0 === XU ? void 0 : XU.view) && void 0 !== UU ? UU : null;
              return null === XU || null === zU || zU.state === YU.od.None ? (FU = null, null) : (FU = (0, bU.q)(FU, {
                id: XU.id,
                LY: zU.LY,
                totalTicks: zU.totalTicks,
                bq: YU.Cd,
                playing: zU.state === YU.od.Playing,
                speed: zU.speed,
                cameraMode: zU.cameraMode,
                freecam: "freecam" === zU.cameraMode
              }), FU)
            }), XU),
            replayEdits: EU((() => {
              var UU;
              const XU = AU(),
                zU = null !== (UU = null === XU || void 0 === XU ? void 0 : XU.view) && void 0 !== UU ? UU : null;
              return null === XU || null === zU || zU.state === YU.od.None ? (oU = null, null) : (oU = (0, bU.q)(oU, {
                cameraKeyframes: [...XU.keyframes],
                playbackMark: zU.mark,
                fileName: XU.fileName,
                unsavedChanges: XU.unsavedChanges,
                suggestSaveAs: XU.suggestSaveAs
              }), oU)
            }), XU),
            replayRecorder: EU((() => {
              var XU, zU;
              return null !== (XU = null === (zU = UU.runtime()) || void 0 === zU ? void 0 : zU.recorder.current) && void 0 !== XU ? XU : Fz.b.states.replayRecorder.current()
            }), cU),
            replayVideoExporting: {
              current: Qz.d,
              watch: UU => (0, DU.n)("replayViewer|videoExportChanged", (() => {
                UU((0, Qz.d)())
              }))
            }
          },
          aU = {
            replayUiActionRequested: NU(QU),
            replayViewerRequested: NU(yU)
          },
          tU = UU => {
            for (const XU of yU) XU(UU)
          },
          gU = () => {
            var cU;
            !0 === (null === (cU = AU()) || void 0 === cU ? void 0 : cU.isOpen) && Promise.all([zU.e(111), zU.e(78)]).then((() => zU(63276))).then((zU => {
              let {
                startWasmReplayVideoExport: cU
              } = zU;
              return cU({
                viewer: AU,
                canvas: () => {
                  var XU, zU;
                  return null !== (XU = null === (zU = UU.canvas) || void 0 === zU ? void 0 : zU.call(UU)) && void 0 !== XU ? XU : null
                },
                watchViewer: XU.add,
                requestViewer: tU
              })
            }), (UU => {
              console.error("Couldn't load the video export", UU), Az.NotificationProvider.showAlertPopup({
                title: "Video export failed",
                subtitle: "Check your connection, then try again."
              })
            })).catch((UU => {
              console.error("The video export failed", UU)
            }))
          },
          kU = {
            replayAction(UU) {
              if ((0, Qz.d)()) return;
              const XU = AU();
              switch (UU) {
                case "replaySkipBack":
                  IU(-1);
                  break;
                case "replaySkipForward":
                  IU(1);
                  break;
                case "replaySpeedUp":
                case "replaySpeedDown":
                  null !== XU && void 0 !== XU && XU.view && XU.setSpeed((0, yz.h)(XU.view.speed, "replaySpeedUp" === UU ? "up" : "down"));
                  break;
                case "replayRecordKeyframe":
                  null === XU || void 0 === XU || XU.addKeyframe()
              }
            },
            setReplayPlaying(UU) {
              var XU, zU;
              (0, Qz.d)() || (UU ? null === (XU = AU()) || void 0 === XU || XU.play() : null === (zU = AU()) || void 0 === zU || zU.pause())
            },
            seekReplay(UU) {
              var XU;
              let {
                LY: zU,
                ignorePlaybackMark: cU
              } = UU;
              null === (XU = AU()) || void 0 === XU || XU.seek(zU, null !== cU && void 0 !== cU && cU)
            },
            setReplayCameraMode(UU) {
              var XU;
              null === (XU = AU()) || void 0 === XU || XU.setCameraMode(UU)
            },
            syncReplayCameraMode() {},
            setReplayCameraKeyframe(UU) {
              var XU;
              null === (XU = AU()) || void 0 === XU || XU.setKeyframe(UU)
            },
            moveReplayCameraKeyframe(UU) {
              var XU;
              let {
                from: zU,
                to: cU
              } = UU;
              null === (XU = AU()) || void 0 === XU || XU.moveKeyframe(zU, cU)
            },
            deleteReplayCameraKeyframes(UU) {
              var XU;
              let {
                start: zU,
                end: cU
              } = UU;
              null === (XU = AU()) || void 0 === XU || XU.deleteKeyframes(zU, cU)
            },
            setReplayPlaybackMark(UU) {
              var XU;
              null === (XU = AU()) || void 0 === XU || XU.setMark(UU)
            },
            cropReplay(UU) {
              var XU, zU;
              let {
                start: cU,
                end: yU
              } = UU;
              return !(0, Qz.d)() && (null !== (XU = null === (zU = AU()) || void 0 === zU ? void 0 : zU.crop(cU, yU)) && void 0 !== XU && XU)
            },
            holdReplayForShaderPackFailure(UU) {
              const XU = AU();
              XU && (XU.holdForShaderPackFailure(), function(UU) {
                zU.e(128).then((() => zU(40071))).then((XU => {
                  let {
                    shaderPackPage: zU
                  } = XU;
                  zU.block(UU)
                })).catch((UU => {
                  console.warn("[bloxd-wasm-client] the shader pack could not be blocked", UU)
                }))
              }(UU))
            },
            exportReplayVideo() {
              gU()
            },
            toggleRecording() {
              var XU;
              null === (XU = UU.runtime()) || void 0 === XU || XU.recorder.toggleRecording()
            },
            saveClip() {
              var XU;
              null === (XU = UU.runtime()) || void 0 === XU || XU.recorder.saveClip()
            },
            setRecorderPrefs(XU) {
              var zU;
              let {
                clipping: cU,
                clipSeconds: yU
              } = XU;
              null === (zU = UU.runtime()) || void 0 === zU || zU.recorder.setPrefs(cU, yU)
            },
            setReplayViewerOpen(XU) {
              var zU;
              (0, tX.g)(XU) && (null === (zU = UU.runtime()) || void 0 === zU || zU.recorder.viewerShown(XU))
            },
            recordFlyingMiddleText(XU) {
              var zU;
              let {
                content: cU,
                nX: yU,
                angle: QU,
                mX: AU
              } = XU;
              null === (zU = UU.runtime()) || void 0 === zU || zU.recorder.recordFlyingText(JSON.stringify(cU), yU, QU, AU)
            },
            dragReplayCamera(XU) {
              var zU;
              let {
                dx: cU,
                dy: yU
              } = XU;
              null === (zU = UU.freecam()) || void 0 === zU || zU.drag(cU, yU)
            },
            moveReplayFreecam(XU) {
              var zU;
              null === (zU = UU.freecam()) || void 0 === zU || zU.move(XU)
            },
            holdReplayFreecamVertical(XU) {
              var zU;
              let {
                action: cU,
                uD: yU
              } = XU;
              null === (zU = UU.freecam()) || void 0 === zU || zU.holdVertical(cU, yU)
            }
          },
          GU = UU => {
            var XU;
            const zU = AU(),
              cU = null !== (XU = null === zU || void 0 === zU ? void 0 : zU.view) && void 0 !== XU ? XU : null;
            oz.has(UU) ? (UU => {
              for (const XU of QU) XU(UU)
            })(UU) : Dz.has(UU) ? kU.replayAction(UU) : "replayPlayPause" === UU ? zU && cU && cU.state !== YU.od.None && kU.setReplayPlaying(cU.state !== YU.od.Playing) : "replayChangeCameraMode" === UU ? null === zU || void 0 === zU || zU.cycleCameraMode() : "replayExit" === UU ? !0 === (null === zU || void 0 === zU ? void 0 : zU.inPlayback) && (0, rX.j)("/") : "replayExportVideo" === UU && gU()
          };
        let BU = !1;
        return {
          states: pU,
          events: aU,
          commands: kU,
          lookups: {
            replayCamera() {
              var XU, zU, cU;
              return !0 !== (null === (XU = AU()) || void 0 === XU ? void 0 : XU.isOpen) ? null : null !== (zU = null === (cU = UU.cameraView) || void 0 === cU ? void 0 : cU.call(UU)) && void 0 !== zU ? zU : null
            },
            leaveGameReloadsPage() {
              var UU;
              return !0 === (null === (UU = AU()) || void 0 === UU ? void 0 : UU.inPlayback)
            }
          },
          feed: {
            viewerChanged: () => {
              var UU;
              const zU = !0 === (null === (UU = AU()) || void 0 === UU ? void 0 : UU.inPlayback);
              zU !== BU && (BU = zU, DU.k.UY("connectedGameChanged")), XU.fire()
            },
            recorderChanged: cU.fire,
            keyDown: UU => {
              var XU;
              switch (UU) {
                case "recordGame":
                  return void kU.toggleRecording();
                case "recordClip":
                  return void((0, tX.e)() || kU.saveClip())
              }(0, Qz.d)() || ("replayViewerOpen" !== UU ? UU.startsWith("replay") && ((0, tX.e)() || !0 === (null === (XU = AU()) || void 0 === XU ? void 0 : XU.inPlayback)) && GU(UU) : tU("toggle"))
            }
          }
        }
      }({
        runtime: yU.l,
        cameraView: () => {
          var UU;
          const XU = null === (UU = (0, AU.f)()) || void 0 === UU ? void 0 : UU.renderFrame;
          if (!XU) return null;
          const [zU, cU, yU] = XU.cameraPosition, [QU, FU, oU] = XU.cameraDirection;
          return {
            position: [zU, cU, yU],
            direction: [QU, FU, oU]
          }
        },
        canvas: () => {
          var UU, XU, zU;
          return null !== (UU = null === (XU = (zU = (0, QU.H)()).canvas) || void 0 === XU ? void 0 : XU.call(zU)) && void 0 !== UU ? UU : null
        },
        freecam: yU.h
      }),
      mc = {
        states: {
          ...DX,
          ...IX.l,
          ...nc.states,
          ...Iz,
          ...VU
        },
        events: {
          ...EX,
          ...tU,
          ...IX.h,
          ...LU.b,
          ...ez.f,
          ...nc.events,
          ...pz,
          ...dU.i
        },
        commands: {
          ...WU,
          ...YX,
          ...gU,
          ...IX.e,
          ...bX,
          ...Lz,
          ...dU.h,
          ...iX,
          ...nc.commands,
          ...Zz,
          ...sU,
          ...uz,
          ...pX
        },
        queries: {
          ...IX.j,
          ...sc
        },
        lookups: {
          ...NX,
          ...uU,
          ...ez.j,
          ...nc.lookups,
          ...PU,
          ...cz,
          ...rz,
          ...nU
        }
      };

    function lc() {
      (0, FU.d)(aU.o), (0, yU.m)(nc.feed), (0, LU.f)(), TX || (TX = !0, (0, aU.m)(qU.k, (UU => {
        const XU = (0, SU.d)(qU.k, UU);
        "string" === typeof XU && Promise.resolve().then((() => zU(4010))).then((UU => {
          let {
            onCosmeticPackGranted: zU
          } = UU;
          zU(XU)
        }))
      })), (0, aU.m)(qU.cb, (UU => {
        const XU = (0, SU.d)(qU.cb, UU);
        "number" === typeof XU && DU.k.UY("serverUpdating", Date.now() + XU, !0)
      })), (0, aU.m)(qU.H, (UU => {
        const XU = (0, SU.d)(qU.H, UU);
        if ((0, SU.b)(XU)) {
          const {
            nU: UU,
            mU: zU
          } = XU;
          (0, jX.e)({
            nU: "string" === typeof UU ? UU : null,
            mU: "string" === typeof zU ? zU : null
          })
        }
      })), (0, aU.m)(EU.oc.NewUiRequest, (UU => {
        const XU = (0, SU.f)(UU);
        (0, SU.b)(XU) && "number" === typeof XU.id && (0, SU.b)(XU.clientParameters) && (0, KX.i)(XU.id, XU.clientParameters)
      })), (0, aU.m)(qU.V, (UU => {
        const XU = (0, SU.d)(qU.V, UU);
        "number" === typeof XU && (0, KX.j)(XU)
      })), (0, aU.i)(KX.e), (0, aU.m)(EU.oc.UiRequestPopup, (UU => {
        const XU = (0, SU.f)(UU);
        if ((0, SU.b)(XU) && "number" === typeof XU.id && ("string" === typeof XU.text || (0, SU.b)(XU.text) && "string" === typeof XU.text.translationKey)) {
          const UU = XU.id;
          (0, KX.k)(UU, XU.text, !0 === XU.destructive, (XU => {
            bX.answerUiRequest({
              id: UU,
              KD: XU
            })
          }))
        }
      })), (0, aU.m)(EU.oc.TopRightHelper, (UU => {
        const XU = (0, SU.f)(UU);
        void 0 !== XU && DU.k.UY("TopRightHelper", XU, !0)
      })), (0, aU.m)(EU.oc.TaskProgress, (UU => {
        const XU = (0, SU.f)(UU);
        (0, SU.b)(XU) && "string" === typeof XU.taskId && "number" === typeof XU.progress && (0, JX.c)({
          taskId: XU.taskId,
          progress: XU.progress
        })
      }))), Rz || (Rz = !0, (0, aU.m)(qU.s, (UU => {
        const XU = (0, SU.d)(qU.s, UU);
        (0, SU.b)(XU) && DU.k.UY("showShopFromServer", {
          toggle: XU.fc,
          Hc: XU.Hc
        }, !0)
      })), (0, aU.m)(EU.oc.OverShopInfo, (UU => {
        const XU = (0, SU.f)(UU);
        (0, SU.b)(XU) && DU.k.UY("overShopInfo", XU.info, !0)
      })), (0, aU.m)(EU.oc.ShowShopTutorial, (() => {
        DU.k.UY("showShopTutorial", null, !0)
      }))), Gz || (Gz = !0, (0, aU.e)((() => {
        var UU;
        (0, az.resetLeaveEvents)(), null === (UU = Bz) || void 0 === UU || UU(), Bz = (0, aU.b)() ? (0, gz.j)(aU.b) : null, (0, aU.b)() || DU.k.Rk()
      })), (0, aU.m)(EU.oc.SetCookie, (UU => {
        const XU = (0, SU.f)(UU),
          zU = (0, rX.b)().gameNameWithVariation;
        (0, SU.b)(XU) && "string" === typeof XU.key && null !== zU && (0, tz.setCookie)(zU, XU.key, XU.value)
      })), (0, aU.m)(EU.oc.LeaveValues, (UU => {
        const XU = (0, SU.f)(UU);
        if ((0, SU.b)(XU) && "string" === typeof XU.leaveEventType) {
          const {
            leaveEventType: UU,
            category: zU,
            subCategory: cU,
            value: yU
          } = XU;
          (0, az.updateLeaveValue)({
            leaveEventType: UU,
            category: zU,
            subCategory: cU,
            value: yU
          })
        }
      })), (0, aU.m)(EU.oc.CustomAnalyticsEvent, (UU => {
        const XU = (0, SU.f)(UU);
        if ((0, SU.b)(XU) && "string" === typeof XU.cat1) {
          const {
            cat1: UU,
            cat2: zU,
            cat3: cU,
            value: yU
          } = XU;
          (0, az.logCustomAnalyticsEvent)({
            cat1: UU,
            cat2: zU,
            cat3: cU,
            value: yU
          })
        }
      })), (0, aU.m)(EU.oc.ProgressionEvent, (UU => {
        const XU = (0, SU.f)(UU);
        if ((0, SU.b)(XU)) {
          const {
            type: UU,
            location1: zU,
            location2: cU,
            location3: yU,
            score: QU
          } = XU;
          (0, az.logProgressionEvent)({
            type: UU,
            location1: zU,
            location2: cU,
            location3: yU,
            score: QU
          })
        }
      })), (0, aU.m)(EU.oc.ResourceEvent, (UU => {
        const XU = (0, SU.f)(UU);
        if ((0, SU.b)(XU)) {
          const {
            type: UU,
            resourceType: zU,
            amount: cU,
            category: yU,
            itemName: QU
          } = XU;
          (0, az.logResourceEvent)({
            type: UU,
            resourceType: zU,
            amount: cU,
            category: yU,
            itemName: QU
          })
        }
      })), (0, aU.m)(EU.oc.LeaderboardResponse, (UU => {
        const XU = (0, SU.f)(UU);
        if ((0, SU.b)(XU)) {
          const {
            category: UU,
            timeframe: zU,
            data: cU
          } = XU;
          DU.k.UY("leaderboardResponse", {
            category: UU,
            timeframe: zU,
            data: cU
          })
        }
      })), (0, aU.m)(qU.C, (UU => {
        const XU = (0, SU.d)(qU.C, UU);
        "string" === typeof XU && (0, kz.c)(UU.conn, XU)
      })), (0, aU.m)(qU.F, (UU => {
        const XU = (0, SU.d)(qU.F, UU);
        "string" === typeof XU && console.error(`[logErrorToConsole]: ${XU}`)
      }))), iU(), (0, ez.b)(), fX || (fX = !0, (0, aU.m)(qU.j, (UU => {
        const XU = (0, SU.d)(qU.j, UU);
        void 0 !== XU && (0, uX.o)(XU)
      }))), xX(), CX(), xU || (xU = !0, (0, QU.r)(JU)), cU.gameBridge.attach(mc), Hc()
    }
  },
  42059: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => EU,
      h: () => oU,
      i: () => FU,
      k: () => DU
    });
    var cU = zU(2014);
    let yU = null,
      QU = 0;
    const AU = new Set;

    function FU() {
      return yU
    }

    function oU() {
      return QU
    }

    function DU(UU) {
      yU = UU, QU++, (0, cU.e)();
      for (const XU of AU) XU()
    }

    function EU(UU) {
      AU.add(UU)
    }
  },
  42141: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => AU,
      e: () => FU
    });
    var cU = zU(42147);
    let yU = null,
      QU = null;

    function AU() {
      return yU ??= zU.e(73).then((() => zU(63299))).catch((UU => {
        throw yU = null, UU
      })), yU
    }

    function FU() {
      return QU ??= Promise.all([AU(), (0, cU.f)()]).then((UU => {
        let [XU] = UU;
        return XU
      }), (UU => {
        throw QU = null, UU
      })), QU
    }
  },
  37112: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => yU
    });
    const cU = {
      wait: function(UU) {
        return new Promise((XU => {
          setTimeout(XU, UU)
        }))
      },
      stallMs: 2e4
    };
    class yU {
      constructor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : cU;
        this.url = UU, this.options = XU, this.timing = zU, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = UU
      }
      ready() {
        if (null === this.fetched) {
          const UU = new AbortController;
          this.fetchAbort = UU, this.fetched = this.fetchWithRetries(UU.signal).then((XU => (this.fetchAbort === UU && (this.fetchAbort = null), XU)))
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
      async fetchWithRetries(UU) {
        for (let XU = 0;; XU++) {
          const zU = new URL(this.url);
          if (XU > 0 && zU.searchParams.set("cache-bust", `${Date.now()}-${XU}`), await this.fetchWhole(zU, UU)) return this.scriptUrl = zU, !0;
          if (XU >= 3 || UU.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** XU), UU.aborted) return !1
        }
      }
      async fetchWhole(UU, XU) {
        const zU = new AbortController;
        let cU;
        const yU = () => {
            clearTimeout(cU), cU = setTimeout((() => {
              zU.abort()
            }), this.timing.stallMs)
          },
          QU = () => {
            zU.abort()
          };
        XU.addEventListener("abort", QU, {
          once: !0
        }), yU();
        try {
          var AU;
          const XU = await fetch(UU, {
            signal: zU.signal
          });
          if (!XU.ok) return !1;
          const cU = null === (AU = XU.body) || void 0 === AU ? void 0 : AU.getReader();
          if (!cU) return !1;
          for (;;) {
            const {
              done: UU
            } = await cU.read();
            if (UU) return !0;
            yU()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(cU), XU.removeEventListener("abort", QU)
        }
      }
    }
  },
  37794: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => cU
    });
    const cU = {
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
  39861: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => cU,
      g: () => yU
    });
    const cU = ["description", "label"];

    function yU(UU) {
      const XU = UU.type;
      return {
        type: XU,
        params: UU[XU]
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);