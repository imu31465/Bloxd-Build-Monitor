export const id = 54;
export const ids = [54];
export const modules = {
  40679: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => zH,
      c: () => SH,
      d: () => rH
    });
    const AH = 6e3;

    function rH(HH, BH) {
      return [Math.floor(HH[0] / BH) * BH, Math.floor(HH[1] / BH) * BH, Math.floor(HH[2] / BH) * BH]
    }

    function SH(HH) {
      const BH = (null !== HH && void 0 !== HH ? HH : "").match(/-?\d+(?:\.\d+)?/g);
      return BH && BH.length >= 3 ? [Number(BH[0]), Number(BH[1]), Number(BH[2])] : null
    }

    function hH(HH, BH) {
      return HH === BH ? String(HH) : `${HH}-${BH}`
    }

    function tH(HH, BH, LH, AH) {
      const rH = [];
      let SH = new Map;
      for (let hH = HH[2]; hH < HH[2] + BH; hH++) {
        const tH = new Map;
        let zH = HH[0];
        for (; zH < HH[0] + BH;) {
          const rH = AH(zH, LH, hH);
          let CH = zH;
          for (; CH + 1 < HH[0] + BH && AH(CH + 1, LH, hH) === rH;) CH++;
          if (null !== rH) {
            const HH = `${zH} ${CH} ${rH}`,
              BH = SH.get(HH);
            BH ? (BH.z1 = hH, SH.delete(HH), tH.set(HH, BH)) : tH.set(HH, {
              x0: zH,
              x1: CH,
              z0: hH,
              z1: hH,
              name: rH
            })
          }
          zH = CH + 1
        }
        rH.push(...SH.values()), SH = tH
      }
      return rH.push(...SH.values()), rH.sort(((HH, BH) => HH.z0 - BH.z0 || HH.x0 - BH.x0)).map((HH => `x${hH(HH.x0,HH.x1)} z${hH(HH.z0,HH.z1)} ${HH.name}`))
    }

    function zH(HH, BH, LH, rH) {
      let SH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : AH;
      const zH = [HH[0] + BH - 1, HH[1] + BH - 1, HH[2] + BH - 1],
        CH = null !== rH && rH.every(((BH, LH) => Math.floor(BH) >= HH[LH] && Math.floor(BH) <= zH[LH])),
        EH = [`The chunk from ${HH.join(" ")} to ${zH.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
      null !== rH && EH.push(`The player's feet are at ${rH.map(Math.floor).join(" ")}, ${CH?"in this chunk":"outside this chunk"}.`);
      const XH = [];
      for (let AH = HH[1]; AH <= zH[1]; AH++) {
        const rH = tH(HH, BH, AH, LH).join("; "),
          SH = XH[XH.length - 1];
        (null === SH || void 0 === SH ? void 0 : SH.boxes) === rH ? SH.to = AH : XH.push({
          from: AH,
          to: AH,
          boxes: rH
        })
      }
      const GH = XH.filter((HH => "" !== HH.boxes));
      0 === GH.length && EH.push("It is all air.");
      let YH = EH.join("\n").length;
      for (const AH of GH) {
        const HH = `y${hH(AH.from,AH.to)}: ${AH.boxes}`;
        if (YH += HH.length + 1, YH > SH) {
          EH.push(`Cut short: the layers from y${AH.from} up aren't shown, as there are too many blocks.`);
          break
        }
        EH.push(HH)
      }
      return EH.join("\n")
    }
  },
  9491: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => rH
    });
    var AH = LH(15);

    function rH() {
      return !AH.c.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  37812: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => hH,
      d: () => SH,
      g: () => rH
    });
    const AH = [.25, .5, 1, 2, 4, 8, 16];

    function rH(HH, BH) {
      const LH = AH;
      let rH = LH.indexOf(HH);
      return -1 === rH && (rH = LH.findIndex((BH => BH >= HH)), -1 === rH && (rH = LH.length - 1)), "up" === BH ? LH[Math.min(rH + 1, LH.length - 1)] : LH[Math.max(rH - 1, 0)]
    }

    function SH(HH) {
      return HH <= AH[0]
    }

    function hH(HH) {
      return HH >= AH[AH.length - 1]
    }
  },
  37373: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => rH,
      e: () => SH
    });
    let AH = !1;

    function rH() {
      return AH
    }

    function SH(HH) {
      return AH !== HH && (AH = HH, !0)
    }
  },
  39936: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => SH
    });
    var AH = LH(18),
      rH = LH(2036);

    function SH(HH) {
      let {
        taskId: BH,
        progress: LH
      } = HH;
      const AH = rH.e.get("_tasks");
      null !== AH && void 0 !== AH && AH[BH] && rH.e.apply({
        _tasks: {
          ...AH,
          [BH]: {
            ...AH[BH],
            progress: LH
          }
        }
      })
    }
    AH.k.subscribe("clientTaskProgress", (HH => {
      SH(HH)
    }))
  },
  40649: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => YH,
      i: () => QH,
      j: () => CH,
      l: () => XH,
      m: () => GH,
      o: () => zH,
      q: () => hH,
      u: () => EH,
      v: () => WH
    });
    var AH = LH(2036),
      rH = LH(18),
      SH = LH(2045);
    const hH = (0, SH.n)((function() {
        var HH, BH, LH, rH;
        return {
          health: null !== (HH = AH.e.get("_health")) && void 0 !== HH ? HH : null,
          maxHealth: null !== (BH = AH.e.get("_totalMaxHealth")) && void 0 !== BH ? BH : null,
          shield: null !== (LH = AH.e.get("_shield")) && void 0 !== LH ? LH : null,
          maxShield: null !== (rH = AH.e.get("maxShield")) && void 0 !== rH ? rH : null
        }
      }), [], (0, SH.l)("_health", "_totalMaxHealth", "_shield", "maxShield")),
      tH = [{
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

    function zH(HH, BH) {
      return tH[(HH ? 2 : 0) + (BH ? 1 : 0)]
    }
    const CH = (0, SH.n)((function() {
      var HH;
      return null !== (HH = AH.e.get("_aura")) && void 0 !== HH ? HH : null
    }), [], (0, SH.l)("_aura"));

    function EH(HH) {
      return {
        watch: BH => (0, rH.m)("shotPlayer", (LH => {
          let {
            playerId: AH,
            damage: rH,
            wasCrit: SH,
            distance: hH
          } = LH;
          HH(AH) && BH({
            damage: rH,
            wasCrit: SH,
            distance: hH
          })
        }))
      }
    }

    function XH(HH) {
      return (0, SH.b)("chat", (BH => {
        let {
          serverChatMsgId: LH,
          worldCodeLineId: AH,
          content: rH,
          chatterEId: SH,
          chatterObjectsToReplay: hH
        } = BH;
        return {
          serverChatMsgId: null !== LH && void 0 !== LH ? LH : null,
          worldCodeLineId: null !== AH && void 0 !== AH ? AH : null,
          content: rH,
          author: SH ? HH(SH) : null,
          hiddenFromReplay: !0 === hH
        }
      }))
    }
    const GH = (0, SH.b)("chatRemoved");
    class YH {
      constructor() {
        this.shown = null, this.needed = null, this.neededSince = 0
      }
      update(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
        const LH = this.shown;
        return HH !== this.needed && (this.needed = HH, this.neededSince = BH, null === HH && (this.shown = null)), this.shown !== this.needed && BH - this.neededSince > 200 && (this.shown = this.needed), this.shown !== LH
      }
    }

    function uH(HH) {
      return [{
        translationKey: `touchKeys:${HH}`
      }]
    }
    const QH = {
      open: uH("open"),
      close: uH("close"),
      milk: uH("milk"),
      shear: uH("shear"),
      tame: uH("tame"),
      feed: uH("feed"),
      ride: uH("ride")
    };

    function WH(HH) {
      return [{
        translationKey: "touchKeys:tameWith"
      }, " ", {
        icon: HH
      }]
    }
  },
  37174: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => tH,
      f: () => hH
    });
    var AH = LH(3648);
    let rH = null,
      SH = null;

    function hH() {
      return SH ??= LH.e(235).then((() => LH(37091))).then((HH => {
        let {
          ITEM_SPRITES: BH,
          ITEM_SPRITES_WITHOUT_FILE: LH,
          ITEM_FILES_WITHOUT_SPRITE: SH
        } = HH;
        rH = function(HH, BH, LH) {
          const rH = new Set,
            SH = (0, AH.v)(BH);
          let hH = 0;
          for (const [AH, tH] of HH.entries()) AH === SH[hH] ? hH++ : rH.add(tH);
          if ("" !== LH)
            for (const tH of LH.split(AH.q)) rH.add(tH);
          return rH
        }(BH.split(AH.q), LH, SH)
      }), (HH => {
        throw SH = null, HH
      })), SH
    }

    function tH(HH) {
      var BH, LH;
      return null !== (BH = null === (LH = rH) || void 0 === LH ? void 0 : LH.has(HH)) && void 0 !== BH && BH
    }
  },
  40669: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => AH,
      d: () => SH,
      e: () => rH
    });
    const AH = 128;

    function rH(HH, BH, LH, AH) {
      const rH = 2 * BH - 1,
        SH = 1 - 2 * LH,
        hH = HH(0) - rH * HH(3),
        tH = HH(4) - rH * HH(7),
        zH = HH(8) - rH * HH(11),
        CH = HH(1) - SH * HH(3),
        EH = HH(5) - SH * HH(7),
        XH = HH(9) - SH * HH(11);
      AH[0] = tH * XH - zH * EH, AH[1] = zH * CH - hH * XH, AH[2] = hH * EH - tH * CH;
      const GH = AH[0] * HH(3) + AH[1] * HH(7) + AH[2] * HH(11) < 0 ? -1 : 1,
        YH = Math.hypot(AH[0], AH[1], AH[2]) * GH;
      return AH[0] /= YH, AH[1] /= YH, AH[2] /= YH, AH
    }

    function SH(HH, BH, LH, AH, rH, SH) {
      const hH = [Math.floor(BH[0]), Math.floor(BH[1]), Math.floor(BH[2])],
        tH = [0, 0, 0],
        zH = [1 / 0, 1 / 0, 1 / 0],
        CH = [1 / 0, 1 / 0, 1 / 0];
      for (let GH = 0; GH < 3; GH++) tH[GH] = Math.sign(LH[GH]), 0 !== tH[GH] && (CH[GH] = Math.abs(1 / LH[GH]), zH[GH] = (hH[GH] + (tH[GH] > 0 ? 1 : 0) - BH[GH]) / LH[GH]);
      let EH = 0,
        XH = Math.abs(LH[0]) > Math.abs(LH[1]) ? 0 : 1;
      for (Math.abs(LH[2]) > Math.abs(LH[XH]) && (XH = 2); EH <= AH;) {
        if (HH(hH[0], hH[1], hH[2])) return rH[0] = hH[0], rH[1] = hH[1], rH[2] = hH[2], SH[0] = 0, SH[1] = 0, SH[2] = 0, SH[XH] = -tH[XH], !0;
        XH = zH[0] < zH[1] ? 0 : 1, zH[2] < zH[XH] && (XH = 2), EH = zH[XH], hH[XH] += tH[XH], zH[XH] += CH[XH]
      }
      return !1
    }
  },
  37294: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => mH,
      f: () => oH,
      g: () => TH,
      j: () => vH,
      m: () => UH
    });
    var AH = LH(257),
      rH = LH(81);
    const SH = new(LH(37297).b)(new URL(LH.p + LH.u(3), LH.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var hH = LH(1863),
      tH = LH(2219);
    const zH = 1e4,
      CH = 3e4;
    let EH = null,
      XH = null,
      GH = null,
      YH = !1,
      uH = 0;
    const QH = new Map;
    let WH = null;
    const MH = new Map,
      xH = new Map;

    function vH(HH) {
      const BH = new Promise(((BH, LH) => {
        const AH = new Image;
        AH.crossOrigin = "anonymous", AH.fetchPriority = "high", AH.onload = () => {
          BH(AH)
        }, AH.onerror = () => {
          LH(new Error(`A block icon's texture did not load: ${HH.slice(0,100)}`))
        }, AH.src = HH
      }));
      return (0, tH.f)(BH)
    }

    function PH(HH) {
      var BH, LH;
      YH || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${HH}`), YH = !0, null === (BH = EH) || void 0 === BH || BH.terminate(), EH = null, XH = null, MH.clear(), xH.clear();
      for (const AH of QH.values()) AH(null);
      QH.clear(), null === (LH = WH) || void 0 === LH || LH()
    }

    function TH() {
      return null !== XH
    }

    function UH() {
      return GH ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === AH.e.ios_icon_worker_v1 && (0, rH.isWebKit)()) return;
        try {
          EH = await async function() {
            return await SH.ready(), SH.start()
          }()
        } catch (tH) {
          return void PH(`did not start (${String(tH)})`)
        }
        let HH = () => {};
        const BH = new Promise((BH => {
          HH = BH
        }));
        EH.onmessage = BH => {
          let {
            data: LH
          } = BH;
          if ("started" === LH.type) XH = EH, HH();
          else if ("failed" === LH.type) PH(`failed a draw (${LH.message})`);
          else {
            var AH, rH;
            null === (AH = QH.get(LH.id)) || void 0 === AH || AH(LH.url), QH.delete(LH.id), null === (rH = WH) || void 0 === rH || rH()
          }
        }, EH.onerror = BH => {
          BH.preventDefault(), PH(`stopped (${BH.message||"its script did not load or run"})`), HH()
        };
        const LH = `did not start in ${CH/1e3} s`;
        await (0, hH.j)(BH, CH, LH).catch((() => {
          PH(LH)
        }))
      }(), GH
    }

    function VH() {
      if (null !== WH || 0 === QH.size) return;
      const HH = new Promise((HH => {
          WH = HH
        })),
        BH = `did not answer in ${zH/1e3} s`;
      (0, hH.j)(HH, zH, BH).then((() => {
        WH = null, VH()
      }), (() => {
        WH = null, PH(BH)
      }))
    }

    function OH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      HH.postMessage(BH, LH)
    }

    function bH(HH, BH, LH, AH) {
      let rH = BH.get(LH);
      return void 0 === rH && (rH = AH().then((async BH => {
        let {
          image: LH,
          request: AH
        } = BH;
        try {
          const BH = await createImageBitmap(LH);
          OH(HH, AH(BH), [BH])
        } catch (rH) {
          PH(`could not take an image (${String(rH)})`)
        }
      })), rH.catch((() => {
        BH.get(LH) === rH && BH.delete(LH)
      })), BH.set(LH, rH)), rH
    }
    async function kH(HH, BH) {
      UH();
      const LH = XH;
      if (null === LH) return null;
      if (await HH(LH), XH !== LH) return null;
      const AH = ++uH;
      return new Promise((HH => {
        QH.set(AH, HH), OH(LH, BH(AH)), VH()
      }))
    }

    function mH(HH, BH, LH) {
      return kH((BH => Promise.all([HH.top, HH.left, HH.right].map((HH => function(HH, BH) {
        return bH(HH, MH, BH, (async () => ({
          image: await vH(BH),
          request: HH => ({
            type: "texture",
            url: BH,
            bitmap: HH
          })
        })))
      }(BH, HH))))), (AH => ({
        type: "draw",
        id: AH,
        ...HH,
        size: BH,
        outlineWidth: LH
      })))
    }

    function oH(HH, BH, LH, AH) {
      return kH((LH => function(HH, BH, LH) {
        return bH(HH, xH, BH, (async () => {
          const {
            texture: HH,
            ...AH
          } = await LH();
          return {
            image: await vH(HH),
            request: HH => ({
              type: "model",
              name: BH,
              bitmap: HH,
              geometry: AH
            })
          }
        }))
      }(LH, HH, BH)), (BH => ({
        type: "drawModel",
        id: BH,
        name: HH,
        size: LH,
        outlineWidth: AH
      })))
    }
  },
  40641: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => rH
    });
    var AH = LH(1962);

    function rH(HH, BH, LH) {
      return (0, AH.j)(HH, BH) < LH
    }
  },
  9419: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => rH
    });
    var AH = LH(1196);

    function rH(HH, BH) {
      var LH, rH;
      try {
        const LH = (0, AH.d)();
        if ("function" === typeof LH) {
          const AH = new LH(HH, BH);
          if (AH.type === HH) return AH
        }
      } catch {}
      const SH = document.createEvent("Event");
      return SH.initEvent(HH, null !== (LH = null === BH || void 0 === BH ? void 0 : BH.bubbles) && void 0 !== LH && LH, null !== (rH = null === BH || void 0 === BH ? void 0 : BH.cancelable) && void 0 !== rH && rH), SH
    }
  },
  39928: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => EH
    });
    var AH = LH(1168),
      rH = LH(1306),
      SH = LH(15),
      hH = LH(1287),
      tH = LH(1297),
      zH = LH(1509),
      CH = LH(37345);

    function EH(HH) {
      let {
        KL: BH,
        cL: LH
      } = HH;
      const EH = null !== BH && void 0 !== BH ? BH : (0, tH.c)().gameNameWithVariation;
      (0, AH.J)(EH) && ((0, CH.j)(), (0, hH.ab)((() => {
        console.log("Received matchmaking order from game server to game", BH), (0, SH.l)("inGameReplay"), (0, zH.navigatePreserveSearch)((0, rH.b)(EH, null !== LH && void 0 !== LH ? LH : void 0))
      }), "video_start"))
    }
  },
  40147: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => SH
    });
    var AH = LH(18),
      rH = LH(2064);

    function SH(HH) {
      var BH, LH;
      const SH = (0, rH.p)(null !== (BH = null === (LH = rH.w.toggleFreeCam) || void 0 === LH ? void 0 : LH[0]) && void 0 !== BH ? BH : null);
      AH.k.AX("showBottomMessage", {
        message: `Free Camera ${HH?"Enabled":"Disabled"}${SH?` - Press ${SH} to toggle`:""}`,
        timeoutLength: 2e3,
        type: "Warning"
      })
    }
  },
  39921: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => EH,
      f: () => zH,
      i: () => CH,
      m: () => XH
    });
    var AH = LH(1998),
      rH = LH(18),
      SH = LH(1352),
      hH = LH(1204);
    const tH = new Map;

    function zH(HH, BH) {
      rH.k.AX("newUiRequest", {
        id: HH,
        clientParameters: BH
      }, !0)
    }

    function CH(HH) {
      rH.k.AX("removeUiRequest", HH, !0);
      const BH = tH.get(HH);
      BH && (BH.tearDownNotification(), tH.delete(HH))
    }

    function EH() {
      rH.k.AX("clearUiRequests");
      for (const HH of tH.values()) HH.tearDownNotification();
      tH.clear()
    }

    function XH(HH, BH, LH, rH) {
      const zH = "string" === typeof BH ? {
          translationKey: BH
        } : BH,
        CH = SH.NotificationProvider.showPromptPopup({
          title: zH.translationKey,
          textOpts: {
            title: (0, hH.g)(zH.params, AH.gameBridge.latest("hiddenPlayerNames"))
          },
          confirmText: "general:yes",
          cancelText: "general:no",
          destructive: LH,
          unlockPointerKey: "uiRequestPopup"
        });
      tH.set(HH, CH), CH.getResult().then((BH => {
        tH.delete(HH), "notificationTornDown" !== BH && rH(BH)
      }))
    }
  },
  40677: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => XH,
      g: () => GH
    });
    var AH = LH(176),
      rH = LH(40679);
    const SH = 20;

    function hH(HH) {
      return HH.map(Math.floor).join(" ")
    }

    function tH(HH) {
      return null === HH.amount || 1 === HH.amount ? HH.name : `${HH.amount} ${HH.name}`
    }
    var zH = LH(40687),
      CH = LH(2036),
      EH = LH(1297);

    function XH(HH, BH) {
      if (!HH) return zH.d;
      const LH = HH.playerFeet();
      if (!LH) return "The player isn't in the world yet, so no blocks can be seen.";
      const SH = AH.g.xX,
        hH = (0, rH.d)(null !== BH && void 0 !== BH ? BH : LH, SH),
        tH = HH.chunkBlocks(hH);
      return tH ? (0, rH.b)(hH, SH, ((BH, LH, AH) => {
        const rH = tH(BH, LH, AH);
        return 0 === rH ? null : HH.blockName(rH).split("|")[0]
      }), LH) : `The chunk from ${hH.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${LH.map(Math.floor).join(" ")}.`
    }

    function GH(HH) {
      var BH, LH, AH;
      if (!HH) return zH.f;
      const rH = HH.playerFeet();
      if (!rH) return "The player isn't in the world yet, so nothing in it can be seen.";
      const {
        slots: XH,
        heldSlot: GH
      } = HH.inventory();
      return function(HH) {
        const BH = [];
        null !== HH.game && BH.push(`Game: ${HH.game}.`);
        const LH = null === HH.health ? "" : `, health ${Math.round(HH.health)}${null===HH.maxHealth?"":` of ${Math.round(HH.maxHealth)}`}`;
        BH.push(`The player (the creator) stands at ${hH(HH.position)}${LH}, ${HH.creative?"in":"not in"} creative mode.`);
        const AH = HH.slots[HH.heldSlot];
        BH.push(AH ? `Holding (slot ${HH.heldSlot}): ${tH(AH)}.` : `Holding nothing (slot ${HH.heldSlot} is empty).`);
        const rH = HH.slots.flatMap(((HH, BH) => HH ? [`slot ${BH}: ${tH(HH)}`] : []));
        BH.push(rH.length > 0 ? `Inventory: ${rH.join(", ")}.` : "Inventory: empty.");
        const zH = BH => Math.hypot(BH.position[0] - HH.position[0], BH.position[1] - HH.position[1], BH.position[2] - HH.position[2]),
          CH = [...HH.nearby].sort(((HH, BH) => zH(HH) - zH(BH)));
        if (0 === CH.length) BH.push("No other players or mobs are near enough to see.");
        else {
          BH.push("Near them, nearest first:");
          for (const HH of CH.slice(0, SH)) {
            const LH = "player" === HH.kind ? `player "${HH.name||"?"}"` : HH.name && HH.name !== HH.kind ? `${HH.kind} "${HH.name}"` : HH.kind,
              AH = Math.round(zH(HH));
            BH.push(`- ${LH} at ${hH(HH.position)}, ${AH} block${1===AH?"":"s"} away`)
          }
          CH.length > SH && BH.push(`- and ${CH.length-SH} more further away`)
        }
        return HH.droppedItems > 0 && BH.push(`${HH.droppedItems} dropped item${1===HH.droppedItems?" is":"s are"} on the ground nearby.`), BH.join("\n")
      }({
        game: null !== (BH = (0, EH.c)().gameNameWithVariation) && void 0 !== BH ? BH : null,
        position: rH,
        health: null !== (LH = CH.e.get("_health")) && void 0 !== LH ? LH : null,
        maxHealth: null !== (AH = CH.e.get("_totalMaxHealth")) && void 0 !== AH ? AH : null,
        creative: !0 === CH.e.get("creative"),
        heldSlot: GH,
        slots: XH,
        nearby: HH.nearby(),
        droppedItems: HH.droppedItems()
      })
    }
  },
  42192: (HH, BH, LH) => {
    LH.d(BH, {
      B: () => JH,
      E: () => qH,
      F: () => IH,
      G: () => eH,
      J: () => oH,
      N: () => wH,
      P: () => DH,
      S: () => lH,
      d: () => ZH,
      f: () => NH,
      g: () => kH,
      i: () => dH,
      k: () => mH,
      o: () => bH,
      q: () => gH,
      r: () => fH,
      u: () => cH,
      x: () => KH
    });
    var AH = LH(1390),
      rH = LH(18),
      SH = LH(1241),
      hH = LH(2600),
      tH = LH(5288),
      zH = LH(5255);
    let CH, EH = !1,
      XH = !1,
      GH = !1,
      YH = !1;
    const uH = 1300,
      QH = 3e3;
    let WH = 0,
      MH = !1,
      xH = !1,
      vH = 0;
    const PH = 2;
    let TH = !1,
      UH = !1;
    const VH = new Set,
      OH = new Set;

    function bH() {
      return EH
    }

    function kH() {
      return xH
    }

    function mH() {
      return UH
    }

    function oH() {
      return (0, SH.A)() && !UH
    }

    function IH(HH) {
      let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (HH !== UH) {
        UH = HH;
        for (const HH of [...OH]) HH(UH);
        BH && DH()
      }
    }

    function fH(HH) {
      return OH.add(HH), () => {
        OH.delete(HH)
      }
    }

    function lH() {
      (0, tH.k)(hH.w.Menu, (0, SH.A)() ? 0 : hH.w.Menu)
    }

    function KH() {
      xH = !1, vH = 0, lH(), DH()
    }

    function cH(HH) {
      return VH.add(HH), () => {
        VH.delete(HH)
      }
    }

    function eH(HH) {
      XH = !1, HH !== EH && (EH = HH, YH = !1, clearTimeout(CH), GH = !EH && TH, EH ? (MH = !1, xH = !1, vH = 0) : oH() && !TH && (xH = !0), TH = !1, EH && !oH() && sH(), iH(), GH && DH())
    }

    function qH(HH) {
      HH !== MH && (MH = HH, HH || DH())
    }

    function gH() {
      XH = !1, YH || !0 !== nH() || (YH = !0, clearTimeout(CH), CH = setTimeout(RH, uH))
    }

    function NH() {
      return (!XH || performance.now() - WH > QH) && (XH = (0, zH.L)().lockPointer(), WH = performance.now()), XH
    }

    function RH() {
      jH() && FH() && NH()
    }

    function jH() {
      return oH() && !EH && !MH && !(0, AH.m)()
    }

    function nH() {
      var HH;
      return "undefined" === typeof navigator || null === (HH = navigator.userActivation) || void 0 === HH ? void 0 : HH.isActive
    }

    function FH() {
      return GH && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== nH()
    }

    function DH() {
      oH() ? jH() && !xH && FH() && NH() : EH && !TH && sH()
    }

    function wH() {
      xH ? navigator.vendor.startsWith("Apple") ? aH() : vH = PH : DH()
    }

    function ZH() {
      vH > 0 && 0 === --vH && aH()
    }

    function dH() {
      vH = 0
    }

    function aH() {
      jH() && !0 === nH() && NH()
    }

    function sH() {
      TH = !0, (0, zH.L)().unlockPointer()
    }

    function JH() {
      XH = !1, GH = !1, YH = !1, clearTimeout(CH), MH = !1, xH = !1, vH = 0, TH = !1;
      const HH = EH;
      EH = !1, HH && iH()
    }

    function iH() {
      for (const HH of [...VH]) HH(EH);
      rH.k.AX("pointerLockUpdate", EH)
    }
  },
  42002: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => GH,
      g: () => tH,
      j: () => XH,
      n: () => CH,
      p: () => hH,
      r: () => EH,
      t: () => zH
    });
    let AH = null,
      rH = null,
      SH = null;

    function hH(HH) {
      AH = HH
    }

    function tH() {
      return AH
    }

    function zH(HH) {
      rH = HH
    }

    function CH() {
      return rH
    }

    function EH(HH) {
      SH = HH
    }

    function XH() {
      return SH
    }

    function GH() {
      var HH, BH;
      return !0 === (null === (HH = rH) || void 0 === HH || null === (BH = HH.currentViewer) || void 0 === BH ? void 0 : BH.inPlayback)
    }
  },
  42318: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      attachPlayGameSources: () => ZA,
      playGameSources: () => wA
    });
    var AH = LH(1998),
      rH = LH(42002),
      SH = LH(5255),
      hH = LH(41911),
      tH = LH(42304),
      zH = LH(40649),
      CH = LH(18),
      EH = LH(5268),
      XH = LH(5265),
      GH = LH(41946),
      YH = LH(41972),
      uH = LH(42327),
      QH = LH(41954);
    (0, QH.k)(EH.nc.Chat, (HH => {
      if (HH.payloadKind !== XH.jc.Msgpack) return;
      const BH = function(HH) {
        if (null === HH || "object" !== typeof HH || !("content" in HH)) return null;
        const {
          chatMsgId: BH,
          worldCodeLineId: LH,
          content: AH,
          chatterEId: rH,
          chatterObjectsToReplay: SH
        } = HH;
        return {
          serverChatMsgId: null !== BH && void 0 !== BH ? BH : void 0,
          worldCodeLineId: null !== LH && void 0 !== LH ? LH : void 0,
          content: AH,
          chatterEId: void 0 === rH || null === rH ? void 0 : String(rH),
          chatterObjectsToReplay: SH
        }
      }((0, GH.e)(HH.payload));
      null !== BH && CH.k.AX("chat", BH, !0)
    })), (0, QH.k)(EH.nc.ChatRemoved, (HH => {
      if (HH.payloadKind === XH.jc.Msgpack) {
        const {
          chatMsgId: BH
        } = (0, GH.e)(HH.payload);
        CH.k.AX("chatRemoved", BH, !0)
      }
    }));
    const WH = {
        chatReceived: (0, zH.l)((function(HH) {
          var BH, LH, AH;
          return {
            id: HH,
            name: null !== (BH = uH.f.getName(HH)) && void 0 !== BH ? BH : null,
            local: (0, YH.f)() === HH,
            profileEffect: null !== (LH = null === (AH = (0, uH.j)(HH)) || void 0 === AH ? void 0 : AH.profileEffect) && void 0 !== LH ? LH : null
          }
        })),
        chatRemoved: zH.m
      },
      MH = {
        sendChatMessage(HH) {
          var BH, LH;
          let {
            kt: AH,
            channelName: rH
          } = HH;
          return null !== (BH = null === (LH = (0, hH.i)()) || void 0 === LH ? void 0 : LH.clientApi.sendChat(AH, rH)) && void 0 !== BH && BH
        }
      };
    var xH = LH(176),
      vH = LH(2036),
      PH = LH(41898),
      TH = LH(40641);
    const UH = [0, 0, 0],
      VH = {
        codeBlockClickable(HH) {
          var BH;
          const LH = (0, hH.i)();
          if (null === LH || void 0 === LH || !LH.isSessionLive) return !1;
          const AH = LH.api;
          if (0 !== (PH.y.playerFlags(AH.apiView, 0) & PH.Md.Crouching)) return !1;
          const rH = AH.queries.directorEntity(AH.localId) >= PH.vb.BYTES ? AH.memoryData(AH.scratch(), PH.vb.BYTES, 8, "the local player's DirectorEntity") : null;
          if (null === rH) return !1;
          for (let SH = 0; SH < 3; SH++) UH[SH] = PH.vb.feet(rH, 0, SH);
          return UH[1] += PH.vb.eyeHeight(rH, 0), (0, TH.c)(UH, HH, null !== (BH = vH.e.get("blockReach")) && void 0 !== BH ? BH : xH.g.yW)
        }
      },
      OH = {
        clickCodeBlock(HH) {
          var BH;
          null === (BH = (0, hH.i)()) || void 0 === BH || BH.clickCodeBlock(HH)
        }
      };
    var bH = LH(41922),
      kH = LH(42330),
      mH = LH(1005),
      oH = LH(39948),
      IH = LH(5253),
      fH = LH(41933),
      lH = LH(41920),
      KH = LH(41940);

    function cH(HH) {
      if (null === HH) return null;
      const BH = [];
      for (const LH of HH) {
        const HH = Object.keys(LH)[0];
        if ("wH" === HH) {
          const {
            str: HH,
            style: AH,
            clickableUrl: rH
          } = LH.wH, SH = Object.keys(HH)[0], hH = HH[SH];
          "string" !== SH && "styledEntityName" !== SH && "styledTranslatedText" !== SH || BH.push({
            str: hH,
            style: AH,
            clickableUrl: rH
          })
        } else BH.push(LH[HH])
      }
      return BH
    }
    const eH = {
      screenPos(HH) {
        var BH, LH;
        return null !== (BH = null === (LH = (0, hH.i)()) || void 0 === LH ? void 0 : LH.renderFrame.projectWorldPosToScreenPos(HH)) && void 0 !== BH ? BH : {
          x: 0,
          y: 0
        }
      }
    };
    let qH = !1;

    function gH() {
      qH || (qH = !0, (0, QH.k)(EH.nc.ProgressBarUpdate, (HH => {
        const BH = (0, KH.i)(HH);
        (0, KH.c)(BH) && CH.k.AX("progressBarUpdate", BH, !0)
      })), (0, QH.k)(fH.u, (HH => {
        const BH = (0, KH.f)(fH.u, HH);
        BH && CH.k.AX("middleScreenBarInitiate", {
          duration: BH.gS,
          NS: BH.NS,
          horizBarRemOffset: BH.RS
        }, !0)
      })), (0, QH.k)(EH.nc.RemoveMiddleScreenBar, (() => {
        CH.k.AX("middleScreenBarRemove")
      })), (0, QH.k)(fH.$, (HH => {
        const BH = (0, KH.f)(fH.$, HH);
        if (BH) {
          var LH;
          const HH = BH.QA ? null === (LH = (0, hH.i)()) || void 0 === LH ? void 0 : LH.renderFrame.projectDirectionToScreenPos(BH.QA) : void 0;
          CH.k.AX("sendHitmarker", {
            aA: BH.aA,
            screenPos: HH
          }, !0)
        }
      })), (0, QH.k)(fH.db, (HH => {
        const BH = (0, KH.f)(fH.db, HH);
        if (BH) {
          const {
            id: HH,
            position: LH,
            style: AH,
            KA: rH,
            eA: SH
          } = BH;
          CH.k.AX("setDirectionArrow", {
            id: HH,
            position: LH,
            style: AH,
            text: cH(rH),
            eA: SH
          }, !0)
        }
      })), (0, QH.k)(fH.e, (HH => {
        const BH = (0, KH.f)(fH.e, HH);
        BH && CH.k.AX("clearDirectionArrow", {
          id: BH.id
        }, !0)
      })), (0, QH.k)(fH.l, (HH => {
        const BH = (0, KH.f)(fH.l, HH);
        BH && CH.k.AX("flyingMiddleMessage", {
          content: cH(BH.Zr),
          dr: BH.dr,
          ar: BH.ar
        }, !0)
      })), (0, QH.k)(EH.nc.WorldVariation, (HH => {
        const BH = (0, KH.i)(HH);
        if ("string" === typeof BH) {
          const HH = BH === mH.g ? null : {
            message: `Currently loaded as variation: ${BH}`,
            type: "Warning"
          };
          CH.k.AX("showPermanentBottomMessage", HH, !0)
        }
      })), (0, QH.k)(fH.F, (HH => {
        const BH = (0, KH.f)(fH.F, HH);
        BH && function(HH, BH) {
          const {
            type: LH,
            params: AH
          } = (0, oH.d)(BH), rH = {
            ...AH
          };
          for (const SH of oH.c) rH[SH] && (rH[SH] = cH(rH[SH]));
          IH.d.queueQTE(HH, LH, rH).getResult().then((BH => {
            var LH;
            "boolean" === typeof BH && (null === (LH = (0, hH.i)()) || void 0 === LH || LH.send(lH.d.QteResponse, {
              qteId: HH,
              qteResponse: BH
            }))
          }))
        }(BH.id, BH.qH)
      })), (0, QH.k)(fH.U, (HH => {
        const BH = (0, KH.f)(fH.U, HH);
        "number" === typeof BH && IH.d.cancelQTE(BH)
      })), (0, QH.g)((() => {
        IH.d.reset()
      })), (0, QH.j)((() => {
        IH.d.reset()
      })), (0, QH.k)(EH.nc.EditItemCraftingRecipes, (HH => {
        const BH = (0, KH.i)(HH);
        (0, KH.c)(BH) && CH.k.AX("craftingRecipesEdited", {
          itemName: BH.craftingRecipeItemName,
          recipesForItem: BH.recipesForItem
        })
      })), (0, QH.k)(fH.R, (HH => {
        const BH = (0, KH.f)(fH.R, HH);
        BH && CH.k.AX("craftingRecipesEdited", {
          itemName: BH.kA,
          recipesForItem: []
        })
      })))
    }
    var NH = LH(15);
    const RH = [{
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

    function jH(HH) {
      return PH.y.playerFlags(HH.api.apiView, 0)
    }
    const nH = {
        freeCamera: (0, YH.c)((HH => () => {
          const BH = HH.isSessionLive && 0 !== (jH(HH) & PH.Md.FreeCamMoves),
            LH = HH.freeCameraAllowed() && null === NH.c.get("scriptedCameraFacing");
          return RH[(LH ? 2 : 0) + (BH ? 1 : 0)]
        }), RH[0], (HH => (0, SH.r)(HH)))
      },
      FH = {
        setFreeCameraMovesFly: HH => {
          var BH;
          null === (BH = (0, hH.i)()) || void 0 === BH || BH.setFreeCameraMovesFly(HH)
        }
      },
      DH = {
        freeCameraPos: () => {
          const HH = (0, hH.i)();
          return null !== HH && void 0 !== HH && HH.isSessionLive && HH.renderFrame.hasView && 0 !== (jH(HH) & PH.Md.FreeCam) ? HH.renderFrame.cameraPosition : null
        }
      };
    var wH = LH(40147);
    let ZH = !1,
      dH = !1;

    function aH() {
      const HH = (0, hH.i)();
      if (null === HH || void 0 === HH || !HH.isSessionLive) return void(ZH = !1);
      const BH = 0 !== (PH.y.playerFlags(HH.api.apiView, 0) & PH.Md.FreeCam);
      BH !== ZH && (ZH = BH, (0, wH.b)(BH))
    }
    var sH = LH(317),
      JH = LH(37912),
      iH = LH(2045);
    var pH = LH(42337),
      yH = LH(41968);
    const HB = {
      interactPrompt: null,
      blockText: null,
      neededTool: null
    };
    let BB = "off";

    function LB(HH) {
      var BH;
      return null === HH ? null : {
        label: null !== (BH = (0, pH.d)(HH, "interactionPrompt")) && void 0 !== BH ? BH : null
      }
    }
    const AB = new Map([
      [PH.Ac.Open, {
        label: zH.i.open
      }],
      [PH.Ac.Close, {
        label: zH.i.close
      }],
      [PH.Ac.Milk, {
        label: zH.i.milk
      }],
      [PH.Ac.Shear, {
        label: zH.i.shear
      }],
      [PH.Ac.Tame, {
        label: zH.i.tame
      }],
      [PH.Ac.Feed, {
        label: zH.i.feed
      }],
      [PH.Ac.Ride, {
        label: zH.i.ride
      }]
    ]);
    class rB {
      constructor() {
        this.target = HB, this.ph = PH.cd, this.optionName = null, this.pickaxe = new zH.e
      }
      read(HH) {
        var BH;
        const LH = PH.y.targetBlockId(HH.api.apiView, 0);
        LH !== this.ph && (this.ph = LH, this.optionName = LH === PH.cd ? null : `${HH.tables.getMetaInfo(LH).rootName}CrosshairText`);
        const AH = null === this.optionName ? null : null !== (BH = HH.tables.getClientOption(this.optionName)) && void 0 !== BH ? BH : null;
        this.pickaxe.update(function(HH, BH) {
          var LH, AH, rH;
          if (0 === (PH.y.playerFlags(HH.api.apiView, 0) & PH.Md.Breaking) || BH === PH.cd || 0 === BH) return null;
          const {
            tables: SH
          } = HH;
          if (!0 === SH.getClientOption("creative")) return null;
          const hH = SH.nameOfId(BH),
            tH = null === (LH = HH.items.LX()) || void 0 === LH ? void 0 : LH.name,
            zH = null !== (AH = SH.getItemStat(hH, "harvestLevel")) && void 0 !== AH ? AH : 0;
          return (0, sH.Gc)({
            blockHarvestType: SH.getDefaultItemStat(hH, "harvestType"),
            blockHarvestLevel: SH.getDefaultItemStat(hH, "harvestLevel"),
            harvestLevel: zH,
            heldToolType: void 0 === tH ? void 0 : SH.getDefaultItemStat(tH, "harvests"),
            heldToolLevel: void 0 === tH ? void 0 : SH.getDefaultItemStat(tH, "level")
          }) && null !== (rH = JH.p[zH]) && void 0 !== rH ? rH : null
        }(HH, LH)), HH.watchPromptPick(BB);
        const rH = "touch" === BB ? function(HH) {
          var BH;
          const LH = HH.interactLabel;
          return LH === PH.Ac.Entity ? LB(HH.promptEntity) : LH === PH.Ac.TameWith ? {
            label: (0, zH.v)(HH.tables.nameOfId(HH.interactIcon))
          } : null !== (BH = AB.get(LH)) && void 0 !== BH ? BH : null
        }(HH) : LB(HH.promptEntity);
        return this.target = (0, iH.r)(this.target, {
          interactPrompt: rH,
          blockText: AH,
          neededTool: this.pickaxe.shown
        }), this.target
      }
    }
    let SB = null;
    const hB = {
      current: () => {
        var HH, BH;
        return null !== (HH = null === (BH = SB) || void 0 === BH ? void 0 : BH.target) && void 0 !== HH ? HH : HB
      },
      watch: HH => {
        const BH = new rB;
        SB = BH;
        const LH = (0, YH.i)((LH => {
          let AH = BH.read(LH);
          HH(AH);
          const rH = (0, SH.v)((() => {
            const rH = BH.read(LH);
            rH !== AH && (AH = rH, HH(rH))
          }));
          return () => {
            rH(), LH.watchPromptPick("off")
          }
        }));
        return () => {
          LH(), SB === BH && (SB = null)
        }
      }
    };
    let tB = 0,
      zB = 0;
    const CB = {
        health: zH.q,
        aura: zH.j,
        hotbar: yH.e.states.hotbar,
        heldItemAim: yH.e.states.heldItemAim,
        crouching: (0, YH.c)((HH => function(HH) {
          const BH = () => 0 !== (PH.y.playerFlags(HH.apiView, 0) & PH.Md.Crouching);
          return {
            current: BH,
            watch(HH) {
              let LH = BH();
              return (0, SH.r)((() => {
                const AH = BH();
                AH !== LH && (LH = AH, HH(AH))
              }))
            }
          }
        }(HH.api).current), !1, (HH => (0, SH.r)(HH))),
        flight: (0, YH.c)((HH => () => function(HH) {
          const BH = PH.y.playerFlags(HH.apiView, 0);
          return (0, zH.o)(0 !== (BH & PH.Md.CanFly), 0 !== (BH & PH.Md.Flying))
        }(HH.api)), (0, zH.o)(!1, !1), (HH => (0, SH.r)(HH))),
        gliderBoostFuel: (0, YH.c)((HH => () => PH.y.gliderBoostFuel(HH.api.apiView, 0)), 0, (HH => (0, SH.r)(HH))),
        crosshairTarget: hB
      },
      EB = {
        hotbarSlotRequested: yH.e.events.hotbarSlotRequested,
        hotbarScrolled: yH.e.events.hotbarScrolled,
        numberKeyPressed: yH.e.events.numberKeyPressed,
        shotDamageToShow: (0, zH.u)((HH => !0 === (0, pH.d)(HH, "showDamageAmounts")))
      },
      XB = {
        selectHotbarSlot: yH.e.commands.selectHotbarSlot,
        setCrosshairInteractPrompt: HH => {
          BB = HH
        }
      },
      GB = {
        momentumFrac: function() {
          var HH, BH, LH;
          const AH = (0, hH.i)(),
            rH = performance.now(),
            SH = null === AH || void 0 === AH || null === (HH = AH.items.LX()) || void 0 === HH || null === (BH = HH.attributes) || void 0 === BH || null === (LH = BH.customAttributes) || void 0 === LH ? void 0 : LH.enchantments;
          return tB = null !== AH && null !== SH && void 0 !== SH && SH.Momentum ? 0 !== (PH.y.playerFlags(AH.api.apiView, 0) & PH.Md.Breaking) ? Math.max(0, PH.y.momentumFrac(AH.api.apiView, 0)) : Math.max(0, tB - (rH - zB) / 1500) : 0, zB = rH, tB
        }
      };
    var YB = LH(41905);
    const uB = {
      lobbyManage(HH) {
        var BH;
        null === (BH = (0, hH.i)()) || void 0 === BH || BH.send(lH.d.LobbyManage, HH)
      }
    };
    var QB = LH(1182),
      WB = LH(37373),
      MB = LH(9491),
      xB = LH(1659),
      vB = LH(2600),
      PB = LH(5275);
    let TB = !1;

    function UB(HH) {
      TB = HH
    }

    function VB() {
      "inGame" !== NH.c.get("gameState") || (0, xB.x)() || CH.k.AX("ctrlCrouchWithoutFullscreen")
    }
    let OB = !1;
    const bB = {
        OpenEmoteWheel: () => {
          UB(!0), OB = !0, queueMicrotask((() => {
            OB && (OB = !1, CH.k.AX("requestEmoteWheelHoldOpen"))
          }))
        },
        ToggleFullCoordinateOverlay: () => {
          CH.k.AX("toggleFullCoordinateOverlay")
        },
        KeyYPressed: () => {
          (0, WB.c)() || CH.k.AX("YKeyPressed")
        },
        KeyXPressed: () => {
          (0, WB.c)() || CH.k.AX("XKeyPressed")
        },
        CtrlCrouch: VB,
        "primary-fire": () => {
          CH.k.AX("mouseState", {
            eE: QB.e.DownFirePrimary,
            isDown: !0
          })
        },
        "alt-fire": () => {
          CH.k.AX("mouseState", {
            eE: QB.e.DownFireSecondary,
            isDown: !0
          })
        },
        TouchHold: () => {
          CH.k.AX("mouseState", {
            eE: QB.e.TouchDownLong,
            isDown: !0
          })
        }
      },
      kB = {
        OpenEmoteWheel: () => {
          UB(!1), OB ? (OB = !1, (0, MB.d)() || CH.k.AX("requestEmoteWheelHoldOpen")) : CH.k.AX("requestEmoteWheelHoldRelease")
        },
        CtrlCrouch: VB,
        "primary-fire": () => {
          CH.k.AX("mouseState", {
            eE: QB.e.UpFirePrimary,
            isDown: !1
          })
        },
        "alt-fire": () => {
          CH.k.AX("mouseState", {
            eE: QB.e.UpFireSecondary,
            isDown: !1
          })
        },
        TouchDig: () => {
          CH.k.AX("mouseState", {
            eE: QB.e.UpFirePrimary,
            isDown: !1
          })
        }
      };
    let mB = !1;

    function oB() {
      mB || (mB = !0, (0, PB.k)((HH => {
        if ((0, rH.c)()) return;
        const BH = (0, PB.i)(HH) ? "primary-fire" : HH.action;
        var LH;
        if (HH.down) {
          if (0 === (HH.flags & vB.c.Synthetic)) {
            var AH;
            null === (AH = bB[BH]) || void 0 === AH || AH.call(bB)
          }
        } else null === (LH = kB[BH]) || void 0 === LH || LH.call(kB)
      })))
    }
    var IB = LH(304),
      fB = LH(81),
      lB = LH(30),
      KB = LH(42192),
      cB = LH(1297),
      eB = LH(2619);
    let qB = !1;
    const gB = {
      sendCodeCollab(HH) {
        var BH;
        null === (BH = (0, hH.i)()) || void 0 === BH || BH.send(lH.d.CodeCollab, (0, lH.l)(HH), (0, eB.i)(HH))
      }
    };
    var NB = LH(40035),
      RB = LH(9419);
    let jB = null,
      nB = !1,
      FB = null;

    function DB() {
      return "inGame" === NH.c.get("gameState") && !(0, WB.c)()
    }
    const wB = {
        OpenInventory: HH => {
          (0, xB.F)(HH, "inventory", (0, YB.m)())
        },
        OpenShop: HH => {
          jB && DB() && (0, xB.B)(HH, IB.o.SHOP, !jB.shopIsEmpty(vH.e.get("shopInfo")))
        },
        OpenLobbyLeaderboard: HH => {
          DB() && (0, xB.B)(HH, IB.o.LOBBY_LEADERBOARD, (0, NB.e)({
            lobbyLeaderboardInfo: vH.e.get("lobbyLeaderboardInfo"),
            lobbyManage: vH.e.get("lobbyManage")
          }))
        },
        OpenTasksAndLeaderboard: HH => {
          var BH;
          const LH = null === (BH = jB) || void 0 === BH ? void 0 : BH.getClientGameMapKey();
          LH ? (0, xB.H)(HH, !0, LH) : (0, xB.F)(HH, "retentionFeatures", !(!vH.e.get("_tasks") && !vH.e.get("_availableLeaderboards")))
        },
        OpenInviteLink: HH => {
          (0, xB.F)(HH, "inviteLink", fB.featureFlags.canUseInviteLinks)
        },
        OpenCodeEditor: HH => {
          DB() && function(HH) {
            const BH = (0, hH.i)(),
              LH = null !== BH && void 0 !== BH && BH.isSessionLive ? BH.api : null,
              AH = LH ? LH.hT(LH.localId) : null;
            (0, xB.H)(HH, null !== AH && (0, eB.e)((0, cB.c)()), (() => {
              (0, eB.m)(AH)
            }))
          }(HH)
        },
        HideUi: () => {
          CH.k.AX("showUi", !1)
        }
      },
      ZB = {
        HideUi: () => {
          CH.k.AX("showUi", !0)
        }
      };

    function dB() {
      nB || (nB = !0, LH.e(173).then((() => LH(64066))).then((HH => {
        jB = HH
      }), (HH => {
        console.error("[bloxd-wasm-client] the menu keys' checks did not load", HH)
      })), (0, KB.u)((HH => {
        HH || !(0, KB.g)() || (0, fB.isMobile)() || !lB.e.getItem("disableFullscreen") || (0, xB.t)() || NH.c.set({
          openEverythingMenuName: IB.o.SETTINGS
        })
      })), (0, PB.k)((HH => {
        let {
          action: BH,
          down: LH,
          press: AH
        } = HH;
        var SH, hH;
        (0, rH.c)() || (LH ? null === (SH = wB[BH]) || void 0 === SH || SH.call(wB, function(HH) {
          var BH;
          if (0 === HH || (null === (BH = FB) || void 0 === BH ? void 0 : BH.press) !== HH) {
            const BH = {
              press: HH,
              event: (0, RB.c)("inputAction")
            };
            FB = BH, queueMicrotask((() => {
              FB === BH && (FB = null)
            }))
          }
          return FB.event
        }(AH)) : null === (hH = ZB[BH]) || void 0 === hH || hH.call(ZB))
      })))
    }
    var aB = LH(39936),
      sB = LH(39928),
      JB = LH(39921);
    const iB = {
      completeTask(HH) {
        var BH;
        null === (BH = (0, hH.i)()) || void 0 === BH || BH.send(lH.d.CompleteTask, (0, lH.o)(HH))
      },
      setServerCookie(HH) {
        var BH;
        let {
          key: LH,
          value: AH
        } = HH;
        null === (BH = (0, hH.i)()) || void 0 === BH || BH.send(lH.d.GeneralCookieSet, (0, lH.t)({
          Ft: LH,
          Dt: AH
        }))
      },
      answerUiRequest(HH) {
        var BH;
        let {
          id: LH,
          XE: AH
        } = HH;
        null === (BH = (0, hH.i)()) || void 0 === BH || BH.send(lH.d.UiRequestResp, (0, lH._)({
          Ih: LH,
          fh: AH,
          Kh: 5
        }))
      },
      chooseRewardedAd(HH) {
        var BH;
        let {
          id: LH,
          XE: AH
        } = HH;
        null === (BH = (0, hH.i)()) || void 0 === BH || BH.send(lH.d.UiRequestResponded, (0, lH.Z)({
          id: LH,
          XE: AH
        }))
      },
      requestLeaderboard(HH) {
        var BH;
        let {
          category: LH,
          timeframe: AH,
          seeTop: rH
        } = HH;
        null === (BH = (0, hH.i)()) || void 0 === BH || BH.send(lH.d.LeaderboardRequest, {
          category: LH,
          timeframe: AH,
          seeTop: rH
        })
      }
    };
    let pB = !1;
    const yB = xH.g.JW / 2,
      HL = [yB, -yB, -yB, -yB, yB, yB, -yB, yB],
      BL = [0, 0, 0];

    function LL(HH, BH, LH) {
      for (let AH = 0; AH < HH.length; AH += 2)
        if (HH[AH] === BH && HH[AH + 1] === LH) return !0;
      return !1
    }
    const AL = {
      blocksStandingOn: function() {
        const HH = (0, hH.i)();
        if (null === HH) return [];
        const {
          api: BH,
          chunks: LH,
          tables: AH
        } = HH;
        if (!BH.readPosition(BH.localId, BL)) return [];
        const [rH, SH, tH] = BL, zH = Math.ceil(SH) - 1, CH = [], EH = [];
        for (let hH = 0; hH < HL.length; hH += 2) {
          const HH = rH + HL[hH],
            BH = tH + HL[hH + 1];
          if (Number.isInteger(HH) || Number.isInteger(BH)) continue;
          const SH = Math.floor(HH),
            XH = Math.floor(BH);
          if (LL(EH, SH, XH)) continue;
          const GH = LH.ph(SH, zH, XH);
          AH.isSolidBlockId(GH) && (EH.push(SH, XH), CH.push(AH.nameOfId(GH)))
        }
        return CH
      },
      dropAhead: function() {
        const HH = (0, hH.i)();
        return null !== HH && 0 !== (PH.y.playerFlags(HH.api.apiView, 0) & PH.Md.DropAhead)
      }
    };
    var rL = LH(37812),
      SL = LH(40018),
      hL = LH(1352),
      tL = LH(41981);
    const zL = new Set(["replayLoad", "replaySave", "replaySaveAs", "replayTimelineZoomIn", "replayTimelineZoomOut"]),
      CL = new Set(["replaySkipBack", "replaySkipForward", "replaySpeedUp", "replaySpeedDown", "replayRecordKeyframe"]);

    function EL() {
      const HH = new Set;
      return {
        add: BH => (HH.add(BH), () => {
          HH.delete(BH)
        }),
        fire() {
          for (const BH of HH) BH()
        }
      }
    }
    const XL = Object.freeze([]);

    function GL(HH, BH) {
      let LH, {
        rereads: AH,
        followLocalId: rH
      } = BH;
      const hH = () => (LH = (0, iH.r)(LH, HH()), LH);
      return {
        current: hH,
        watch(HH) {
          const BH = (0, uH.d)((BH => {
            AH(BH) && HH(hH())
          }));
          if (!rH) return BH;
          let LH = (0, YH.f)();
          const tH = (0, SH.v)((() => {
            const BH = (0, YH.f)();
            BH !== LH && (LH = BH, HH(hH()))
          }));
          return () => {
            BH(), tH()
          }
        }
      }
    }
    const YL = {
        players: GL((function() {
          const HH = uH.f.ids(),
            BH = {};
          for (const SH of HH) {
            var LH, AH, rH;
            BH[SH] = {
              name: null !== (LH = uH.f.getName(SH)) && void 0 !== LH ? LH : null,
              ranks: null !== (AH = uH.f.getSetting(SH, "ranks")) && void 0 !== AH ? AH : XL,
              cosmetics: null !== (rH = (0, uH.j)(SH)) && void 0 !== rH ? rH : null
            }
          }
          return {
            ids: HH,
            byId: BH,
            localId: (0, YH.f)()
          }
        }), {
          rereads: HH => "roster" !== HH.kind || HH.members || HH.settings.has("ranks"),
          followLocalId: !0
        }),
        lobbyLeaderboardRows: GL((function() {
          const HH = {};
          for (const rH of uH.f.ids()) {
            var BH, LH, AH;
            HH[rH] = {
              colour: null !== (BH = uH.f.getSetting(rH, "colorInLobbyLeaderboard")) && void 0 !== BH ? BH : null,
              values: null !== (LH = uH.f.getSetting(rH, "lobbyLeaderboardValues")) && void 0 !== LH ? LH : null,
              tags: null !== (AH = uH.f.getSetting(rH, "lobbyLeaderboardTags")) && void 0 !== AH ? AH : null
            }
          }
          return HH
        }), {
          rereads: function(HH) {
            if ("roster" !== HH.kind) return "reset" === HH.kind;
            const {
              members: BH,
              settings: LH
            } = HH;
            return BH || LH.has("colorInLobbyLeaderboard") || LH.has("lobbyLeaderboardValues") || LH.has("lobbyLeaderboardTags")
          },
          followLocalId: !1
        })
      },
      uL = {
        cosmeticsUpdated: {
          watch: HH => (0, uH.d)((BH => {
            if ("cosmetics" !== BH.kind) return;
            const LH = (0, YH.f)();
            HH(BH.updates.map((HH => {
              let {
                Ah: BH,
                rh: AH,
                Sh: rH
              } = HH;
              return {
                local: BH === LH,
                rh: AH,
                Sh: rH
              }
            })))
          }))
        }
      };
    var QL = LH(3209),
      WL = LH(1789),
      ML = LH(656),
      xL = LH(42248);
    let vL = !1,
      PL = null;
    const TL = {
      setShopOpen(HH) {
        var BH;
        null === (BH = (0, hH.i)()) || void 0 === BH || BH.send(lH.d.ShopMenuChanged, (0, lH.S)(HH))
      },
      buyShopItem(HH) {
        var BH;
        let {
          categoryKey: LH,
          itemKey: AH,
          userInput: rH
        } = HH;
        null === (BH = (0, hH.i)()) || void 0 === BH || BH.send(lH.d.ItemBought, {
          categoryKey: LH,
          itemKey: AH,
          shopVersion: vH.e.get("_shopVersion"),
          userInput: rH
        })
      }
    };
    let UL = !1;
    var VL = LH(5288);
    const OL = vB.w.LookFrozen | vB.w.ClicksSuppressed;

    function bL(HH, BH) {
      var LH;
      null !== (LH = (0, hH.i)()) && void 0 !== LH && LH.send(HH, BH) || console.warn(`[bloxd-wasm-client] message ${HH} not sent: no live game or the core's command ring is full`)
    }(0, QH.k)(fH.eb, (HH => {
      const BH = (0, KH.f)(fH.eb, HH);
      void 0 !== BH && CH.k.AX("setDiscordReportKey", BH)
    }));
    const kL = {
      ignorePlayer(HH) {
        bL(lH.d.IgnoreUser, (0, lH.x)({
          Jt: HH
        }))
      },
      reportPlayer(HH) {
        let {
          playerId: BH,
          chatMsgId: LH,
          policy: AH,
          details: rH
        } = HH;
        bL(lH.d.UserReport, (0, lH.kb)({
          ah: BH,
          sh: LH,
          policy: AH,
          Jh: rH
        }))
      },
      reportWorldCodeChat(HH) {
        let {
          chatMsgId: BH,
          policy: LH,
          details: AH
        } = HH;
        bL(lH.d.UserReport, (0, lH.kb)({
          ah: "",
          sh: BH,
          policy: LH,
          Jh: AH
        }))
      },
      requestDiscordReportKey(HH) {
        bL(lH.d.ReqDiscordReportKey, (0, lH.L)(HH))
      },
      reportLobbyOrGame(HH) {
        let {
          target: BH,
          policy: LH,
          details: AH
        } = HH;
        "customGame" === BH ? bL(lH.d.CustomGameReport, (0, lH.p)({
          policy: LH,
          Jh: AH
        })) : bL(lH.d.LobbyReport, (0, lH.A)({
          policy: LH,
          Jh: AH
        }))
      },
      updateMyCosmetic(HH) {
        bL(lH.d.UpdateMyCosmetic, (0, lH.jb)(HH))
      },
      holdEmoteWheel(HH) {
        !HH || TB ? (0, VL.k)(OL, HH ? OL : 0) : CH.k.AX("requestEmoteWheelHoldRelease")
      }
    };
    var mL = LH(42339),
      oL = LH(9940),
      IL = LH(40669);
    const fL = [0, 0, 0],
      lL = [0, 0, 0],
      KL = [0, 0, 0],
      cL = {
        blockAtViewPoint(HH) {
          let {
            x: BH,
            y: LH
          } = HH;
          const AH = (0, hH.i)();
          if (null === AH || void 0 === AH || !AH.renderFrame.hasView) return null;
          const {
            renderFrame: rH,
            clientApi: SH,
            api: tH
          } = AH;
          let zH = 0;
          return (0, IL.d)(((HH, BH, LH) => (zH = SH.getBlockId(HH, BH, LH), 0 !== zH)), rH.cameraPosition, (0, IL.e)((HH => PH.y.viewProj(tH.apiView, 0, HH)), BH, LH, fL), IL.b, lL, KL) ? {
            pos: [lL[0], lL[1], lL[2]],
            normal: [KL[0], KL[1], KL[2]],
            name: (0, oL.d)(zH)
          } : null
        }
      },
      eL = {
        setBlockHighlight(HH) {
          var BH;
          null === (BH = (0, hH.i)()) || void 0 === BH || BH.setBlockHighlight(HH)
        }
      };
    var qL = LH(2010),
      gL = LH(42234),
      NL = LH(42343),
      RL = LH(2054),
      jL = LH(37294),
      nL = LH(225);
    const FL = {
        icon: ".EntireInventoryWrapper .InvenBodyRight .InvenItem .DrawnBlockIcon",
        fallbackRem: 3.4,
        asked: new Set
      },
      DL = {
        icon: ".EntireInventoryWrapper .LazyLoadedItemWrapper .InvenItem .DrawnBlockIcon",
        fallbackRem: .9 * FL.fallbackRem,
        asked: new Set
      },
      wL = 2e3,
      ZL = 4;
    let dL = [],
      aL = !1,
      sL = !1,
      JL = !1;
    const iL = new Set,
      pL = [];
    let yL = 0,
      HA = null;

    function BA() {
      return aL && (0, jL.g)()
    }

    function LA() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AH.gameBridge.latest("inventory");
      if (JL && !sL) {
        for (const LH of HH.player) {
          var BH;
          if (null !== LH) AA(null !== (BH = LH.icon) && void 0 !== BH ? BH : LH.name, FL)
        }
        for (const HH of [...PH.K, ...dL]) AA(HH, DL);
        SA()
      }
    }

    function AA(HH, BH) {
      BH.asked.has(HH) || iL.has(HH) || ("model" === AH.gameBridge.lookup("itemIcon", HH).kind ? (BH.asked.add(HH), pL.push({
        name: HH,
        slot: BH
      })) : iL.add(HH))
    }

    function rA(HH) {
      dL = HH, LA()
    }

    function SA() {
      !JL || sL || null !== HA || 0 === pL.length || yL >= ZL || (HA = (0, nL.d)((() => {
        HA = null;
        const HH = pL.shift();
        void 0 !== HH && JL && (yL++, async function(HH, BH) {
          var LH, rH;
          if (await (0, jL.m)(), !JL) return void BH.asked.delete(HH);
          if (!(0, jL.g)()) return void(sL = !0);
          const SH = window.devicePixelRatio,
            hH = null !== (LH = null === (rH = document.querySelector(BH.icon)) || void 0 === rH ? void 0 : rH.getBoundingClientRect().width) && void 0 !== LH ? LH : 0,
            tH = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16,
            zH = Math.round((hH > 0 ? hH : BH.fallbackRem * tH) * SH);
          try {
            await AH.gameBridge.query("blockIcon", {
              name: HH,
              size: zH,
              lineWidth: (0, RL.e)(SH)
            }) || BH.asked.delete(HH)
          } catch {
            BH.asked.delete(HH)
          }
        }(HH.name, HH.slot).finally((() => {
          yL--, SA()
        })), SA())
      }), {
        timeoutMs: wL
      }))
    }
    var hA = LH(4895),
      tA = LH(4875),
      zA = LH(42352),
      CA = LH(3639),
      EA = LH(3648);
    let XA = null,
      GA = null;

    function YA(HH) {
      const BH = HH.startsWith(EA.f),
        [LH, AH = LH, rH = LH] = (BH ? HH.slice(EA.f.length) : HH).split(EA.e);
      return {
        top: LH,
        left: AH,
        right: rH,
        half: BH
      }
    }

    function uA(HH) {
      const BH = null === XA ? void 0 : (0, CA.e)(HH),
        LH = void 0 === BH ? 0 : XA.codes[BH];
      return 0 === LH ? void 0 : XA.pool[LH - 1]
    }
    var QA = LH(3637),
      WA = LH(4863),
      MA = LH(4888),
      xA = LH(37162),
      vA = LH(37169);
    const PA = "item:";
    let TA = null,
      UA = null,
      VA = null,
      OA = null,
      bA = !1,
      kA = !1;

    function mA() {
      return kA || (kA = !0, (0, MA.p)().then((HH => {
        HH && (0, qL.e)()
      }))), VA ??= Promise.all([(0, QA.h)(), (GA ??= LH.e(1).then((() => LH(64087))).then((HH => {
        let {
          BLOCK_FACE_RUNS: BH,
          BLOCK_FACES: LH,
          MAX_FACE_ITEM_ID: AH
        } = HH;
        XA = {
          codes: (0, EA.x)(BH, AH + 1),
          pool: LH.split(EA.q).map(YA)
        }
      }), (HH => {
        throw GA = null, HH
      })), GA), (0, vA.g)(), LH.e(220).then((() => LH(35006)))]).then((HH => {
        let [, , BH, LH] = HH;
        BH.followBundledTextures(), TA = BH, UA = LH, (0, qL.e)()
      }), (HH => {
        VA = null, console.warn("[bloxd-wasm-client] the item icon tables did not load, so item icons stay blank", HH)
      })), VA
    }

    function oA(HH) {
      var BH, LH;
      return null !== (BH = null === (LH = (0, xA.k)()) || void 0 === LH ? void 0 : LH.textureUrl(HH)) && void 0 !== BH ? BH : TA.itemSpriteUrl(HH)
    }

    function IA(HH) {
      var BH, LH;
      return null !== (BH = null === (LH = (0, xA.k)()) || void 0 === LH ? void 0 : LH.textureUrl(HH)) && void 0 !== BH ? BH : TA.blockTextureUrl(HH)
    }

    function fA(HH) {
      var BH;
      return null !== (BH = (0, QA.d)(HH)) && void 0 !== BH ? BH : HH
    }

    function lA(HH, BH) {
      var LH, AH, rH;
      return null !== (LH = null !== (AH = null !== (rH = IA(HH)) && void 0 !== rH ? rH : null === BH || void 0 === BH ? void 0 : BH.rotated[HH]) && void 0 !== AH ? AH : null === BH || void 0 === BH ? void 0 : BH.animated[HH]) && void 0 !== LH ? LH : TA.notFoundUrl()
    }

    function KA(HH) {
      return void 0 !== (0, CA.e)(HH) ? HH : /^[1-9][0-9]*$/.test(HH) ? (0, CA.h)(Number(HH)) : void 0
    }

    function cA(HH) {
      var BH;
      if (HH.startsWith(PA)) {
        var LH;
        const BH = (0, QA.d)(HH.slice(5));
        return null !== (LH = void 0 === BH ? null : oA(BH)) && void 0 !== LH ? LH : TA.notFoundUrl()
      }
      return null !== (BH = TA.particleUrl(HH)) && void 0 !== BH ? BH : TA.notFoundUrl()
    }

    function eA(HH, BH) {
      return "StairsBlock" === HH ? HH : BH ? "SlabBlock" : "CubeBlock"
    }
    const qA = {
        async blockIcon(HH) {
          var BH;
          let {
            name: AH,
            size: rH,
            lineWidth: SH
          } = HH;
          await mA();
          const hH = null !== (BH = KA(AH)) && void 0 !== BH ? BH : AH,
            tH = (0, MA.h)(hH, rH, SH);
          if (null !== tH) return tH;
          const zH = uA(hH),
            CH = (0, CA.e)(hH),
            EH = void 0 === CH || null === UA ? void 0 : UA.itemTypeNameOf(CH);
          if (null === TA || void 0 === zH) return "";
          const XH = [zH.top, zH.left, zH.right].some((HH => null === IA(HH))),
            GH = XH ? await (OA ??= LH.e(228).then((() => LH(35079))).then((HH => (bA && (bA = !1, (0, qL.e)()), {
              rotated: HH.rotatedBlockTextures,
              animated: HH.animatedBlockTextures
            })), (HH => (OA = null, bA = !0, console.warn("[bloxd-wasm-client] the built block atlas did not load, so some block icons stay blank", HH), null))), OA) : null;
          if (XH && null === GH) return "";
          const YH = {
              top: lA(zH.top, GH),
              left: lA(zH.left, GH),
              right: lA(zH.right, GH),
              itemType: eA(EH, zH.half)
            },
            uH = (0, xA.h)(),
            QH = 0 === uH ? hH : `${hH}#${uH}`;
          return (await (0, WA.e)()).drawBlockIconUrl(QH, rH, SH, (() => YH))
        }
      },
      gA = {
        itemIcon: function(HH) {
          var BH, LH, rH, SH;
          if (null === TA) return mA(), AH.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(HH);
          if ((0, tA.k)(HH)) return {
            kind: "icon",
            url: null !== (LH = null !== (rH = null === (SH = (0, xA.k)()) || void 0 === SH ? void 0 : SH.textureUrl(HH)) && void 0 !== rH ? rH : TA.ingameIconUrl(HH)) && void 0 !== LH ? LH : TA.notFoundUrl()
          };
          if (HH.startsWith(tA.d)) return {
            kind: "icon",
            url: cA(HH.slice(tA.d.length))
          };
          if (0 === (0, CA.j)()) return (0, zA.e)(), AH.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(HH);
          const hH = null !== (BH = KA(HH)) && void 0 !== BH ? BH : HH,
            tH = (0, CA.e)(hH),
            zH = void 0 === tH ? void 0 : UA.itemTypeNameOf(tH);
          if (void 0 !== uA(hH)) return {
            kind: "drawnBlock"
          };
          const CH = function(HH) {
            var BH;
            return null !== (BH = oA(fA(HH))) && void 0 !== BH ? BH : TA.notFoundUrl()
          }(hH);
          if ((0, MA.n)(hH) && ! function(HH) {
              const BH = (0, xA.k)();
              return null !== BH && (null !== BH.textureUrl(fA(HH)) || (0, MA.d)(HH).some((HH => null !== BH.modelUrl(HH))))
            }(hH)) return {
            kind: "model",
            url: CH,
            drawn: (0, MA.k)(hH)
          };
          if ("Gun" === zH) return {
            kind: "gun",
            url: CH
          };
          if (void 0 !== tH && "GrayscaleArmour" === UA.itemTypeOf(tH) || Object.hasOwn(hA.c, hH)) {
            var EH;
            const BH = null !== (EH = (0, hA.g)(HH)) && void 0 !== EH ? EH : (0, hA.g)(hH);
            if (BH) return {
              kind: "item",
              url: CH,
              tint: BH
            }
          }
          return {
            kind: "item",
            url: CH
          }
        },
        hasIcon: function(HH) {
          return void 0 !== KA(HH) || (0, tA.k)(HH) || HH.startsWith(tA.d)
        },
        isItemName: function(HH) {
          return void 0 !== KA(HH)
        }
      };

    function NA() {
      (0, AH.installPageSources)({
        commands: {
          ...AH.DEFAULT_CLIENT_PAGE_SOURCES.commands,
          setChunkAddDistance: gL.r,
          prewarmCreativeIcons: rA
        },
        queries: qA,
        lookups: {
          ...AH.DEFAULT_CLIENT_PAGE_SOURCES.lookups,
          ...gA,
          jT: gL.g,
          drawCallStats: NL.j,
          iconsDrawAhead: BA
        }
      }), (0, qL.e)(), mA(), aL || (aL = !0, CH.k.subscribe("gameJoined", (() => {
        var HH;
        JL = !1, null === (HH = HA) || void 0 === HH || HH(), HA = null;
        for (const {
            name: BH,
            slot: LH
          }
          of pL.splice(0)) LH.asked.delete(BH)
      })), CH.k.subscribe("gamePlayable", (() => {
        JL = !0, LA()
      })), AH.gameBridge.subscribe("inventory", LA), AH.gameBridge.subscribe("itemIconsVersion", (() => {
        iL.clear(), LA()
      })))
    }
    var RA = LH(609),
      jA = LH(40677);

    function nA(HH) {
      if (null === HH || void 0 === HH || !HH.isCoreRunning) return null;
      const {
        api: BH,
        chunks: LH,
        items: AH,
        tables: rH
      } = HH;
      return {
        playerFeet() {
          const HH = BH.hT(BH.localId);
          return null !== HH && void 0 !== HH && HH.every(Number.isFinite) ? HH : null
        },
        chunkBlocks: HH => LH.isLoaded(HH[0], HH[1], HH[2]) ? (HH, BH, AH) => LH.ph(HH, BH, AH) : null,
        blockName: HH => rH.nameOfId(HH),
        inventory: () => ({
          slots: AH.playerItems().map((HH => HH ? {
            name: HH.name,
            amount: HH.amount
          } : null)),
          heldSlot: AH.selectedSlot
        }),
        nearby() {
          const LH = [];
          for (let rH = 0; rH < BH.idStr.length; rH++) {
            var AH;
            const SH = BH.idStr[rH],
              hH = BH.serverIds[rH],
              tH = BH.kinds[rH];
            if (null === SH || BH.isLocal(hH) || tH >>> PH.d !== PH.v.Lifeform) continue;
            const zH = BH.hT(hH),
              CH = RA.j[tH & PH.g];
            zH && void 0 !== CH && LH.push({
              kind: "Player" === CH ? "player" : CH,
              name: null !== (AH = HH.clientApi.getEntityName(SH)) && void 0 !== AH ? AH : null,
              position: zH
            })
          }
          return LH
        },
        droppedItems() {
          let HH = 0;
          for (let LH = 0; LH < BH.idStr.length; LH++) null !== BH.idStr[LH] && BH.kinds[LH] >>> PH.d === PH.v.Item && HH++;
          return HH
        }
      }
    }
    const FA = {
        worldCodeAiChunk: HH => Promise.resolve((0, jA.e)(nA((0, hH.i)()), HH)),
        worldCodeAiGameState: () => Promise.resolve((0, jA.g)(nA((0, hH.i)())))
      },
      DA = function(HH) {
        const BH = EL(),
          AH = EL(),
          rH = new Set,
          SH = new Set,
          hH = () => {
            var BH, LH;
            return null !== (BH = null === (LH = HH.runtime()) || void 0 === LH ? void 0 : LH.currentViewer) && void 0 !== BH ? BH : null
          };
        let tH = null,
          zH = null;
        const EH = (HH, BH) => ({
            current: HH,
            watch(LH) {
              let AH = HH();
              return BH.add((() => {
                const BH = HH();
                BH !== AH && (AH = BH, LH(BH))
              }))
            }
          }),
          GH = HH => ({
            watch: BH => (HH.add(BH), () => {
              HH.delete(BH)
            })
          }),
          YH = HH => {
            const BH = hH(),
              LH = null === BH || void 0 === BH ? void 0 : BH.view;
            BH && LH && BH.seek(Math.max(0, Math.min(LH.totalTicks - 1, LH.IX + HH * XH.wd)))
          },
          uH = {
            replay: EH((() => {
              var HH;
              const BH = hH(),
                LH = null !== (HH = null === BH || void 0 === BH ? void 0 : BH.view) && void 0 !== HH ? HH : null;
              return null === BH || null === LH || LH.state === XH.hd.None ? (tH = null, null) : (tH = (0, iH.r)(tH, {
                id: BH.id,
                IX: LH.IX,
                totalTicks: LH.totalTicks,
                oN: XH.wd,
                playing: LH.state === XH.hd.Playing,
                speed: LH.speed,
                cameraMode: LH.cameraMode,
                freecam: "freecam" === LH.cameraMode
              }), tH)
            }), BH),
            replayEdits: EH((() => {
              var HH;
              const BH = hH(),
                LH = null !== (HH = null === BH || void 0 === BH ? void 0 : BH.view) && void 0 !== HH ? HH : null;
              return null === BH || null === LH || LH.state === XH.hd.None ? (zH = null, null) : (zH = (0, iH.r)(zH, {
                cameraKeyframes: [...BH.keyframes],
                playbackMark: LH.mark,
                fileName: BH.fileName,
                unsavedChanges: BH.unsavedChanges,
                suggestSaveAs: BH.suggestSaveAs
              }), zH)
            }), BH),
            replayRecorder: EH((() => {
              var BH, LH;
              return null !== (BH = null === (LH = HH.runtime()) || void 0 === LH ? void 0 : LH.recorder.current) && void 0 !== BH ? BH : tL.c.states.replayRecorder.current()
            }), AH),
            replayVideoExporting: {
              current: SL.e,
              watch: HH => (0, CH.m)("replayViewer|videoExportChanged", (() => {
                HH((0, SL.e)())
              }))
            }
          },
          QH = {
            replayUiActionRequested: GH(SH),
            replayViewerRequested: GH(rH)
          },
          WH = HH => {
            for (const BH of rH) BH(HH)
          },
          MH = () => {
            var AH;
            !0 === (null === (AH = hH()) || void 0 === AH ? void 0 : AH.isOpen) && Promise.all([LH.e(111), LH.e(78)]).then((() => LH(64074))).then((LH => {
              let {
                startWasmReplayVideoExport: AH
              } = LH;
              return AH({
                viewer: hH,
                canvas: () => {
                  var BH, LH;
                  return null !== (BH = null === (LH = HH.canvas) || void 0 === LH ? void 0 : LH.call(HH)) && void 0 !== BH ? BH : null
                },
                watchViewer: BH.add,
                requestViewer: WH
              })
            }), (HH => {
              console.error("Couldn't load the video export", HH), hL.NotificationProvider.showAlertPopup({
                title: "Video export failed",
                subtitle: "Check your connection, then try again."
              })
            })).catch((HH => {
              console.error("The video export failed", HH)
            }))
          },
          xH = {
            replayAction(HH) {
              if ((0, SL.e)()) return;
              const BH = hH();
              switch (HH) {
                case "replaySkipBack":
                  YH(-1);
                  break;
                case "replaySkipForward":
                  YH(1);
                  break;
                case "replaySpeedUp":
                case "replaySpeedDown":
                  null !== BH && void 0 !== BH && BH.view && BH.setSpeed((0, rL.g)(BH.view.speed, "replaySpeedUp" === HH ? "up" : "down"));
                  break;
                case "replayRecordKeyframe":
                  null === BH || void 0 === BH || BH.addKeyframe()
              }
            },
            setReplayPlaying(HH) {
              var BH, LH;
              (0, SL.e)() || (HH ? null === (BH = hH()) || void 0 === BH || BH.play() : null === (LH = hH()) || void 0 === LH || LH.pause())
            },
            seekReplay(HH) {
              var BH;
              let {
                IX: LH,
                ignorePlaybackMark: AH
              } = HH;
              null === (BH = hH()) || void 0 === BH || BH.seek(LH, null !== AH && void 0 !== AH && AH)
            },
            setReplayCameraMode(HH) {
              var BH;
              null === (BH = hH()) || void 0 === BH || BH.setCameraMode(HH)
            },
            syncReplayCameraMode() {},
            setReplayCameraKeyframe(HH) {
              var BH;
              null === (BH = hH()) || void 0 === BH || BH.setKeyframe(HH)
            },
            moveReplayCameraKeyframe(HH) {
              var BH;
              let {
                from: LH,
                to: AH
              } = HH;
              null === (BH = hH()) || void 0 === BH || BH.moveKeyframe(LH, AH)
            },
            deleteReplayCameraKeyframes(HH) {
              var BH;
              let {
                start: LH,
                end: AH
              } = HH;
              null === (BH = hH()) || void 0 === BH || BH.deleteKeyframes(LH, AH)
            },
            setReplayPlaybackMark(HH) {
              var BH;
              null === (BH = hH()) || void 0 === BH || BH.setMark(HH)
            },
            cropReplay(HH) {
              var BH, LH;
              let {
                start: AH,
                end: rH
              } = HH;
              return !(0, SL.e)() && (null !== (BH = null === (LH = hH()) || void 0 === LH ? void 0 : LH.crop(AH, rH)) && void 0 !== BH && BH)
            },
            holdReplayForShaderPackFailure(HH) {
              const BH = hH();
              BH && (BH.holdForShaderPackFailure(), function(HH) {
                LH.e(130).then((() => LH(40182))).then((BH => {
                  let {
                    shaderPackPage: LH
                  } = BH;
                  LH.block(HH)
                })).catch((HH => {
                  console.warn("[bloxd-wasm-client] the shader pack could not be blocked", HH)
                }))
              }(HH))
            },
            exportReplayVideo() {
              MH()
            },
            toggleRecording() {
              var BH;
              null === (BH = HH.runtime()) || void 0 === BH || BH.recorder.toggleRecording()
            },
            saveClip() {
              var BH;
              null === (BH = HH.runtime()) || void 0 === BH || BH.recorder.saveClip()
            },
            setRecorderPrefs(BH) {
              var LH;
              let {
                clipping: AH,
                clipSeconds: rH
              } = BH;
              null === (LH = HH.runtime()) || void 0 === LH || LH.recorder.setPrefs(AH, rH)
            },
            setReplayViewerOpen(BH) {
              var LH;
              (0, WB.e)(BH) && (null === (LH = HH.runtime()) || void 0 === LH || LH.recorder.viewerShown(BH))
            },
            recordFlyingMiddleText(BH) {
              var LH;
              let {
                content: AH,
                dr: rH,
                angle: SH,
                ar: hH
              } = BH;
              null === (LH = HH.runtime()) || void 0 === LH || LH.recorder.recordFlyingText(JSON.stringify(AH), rH, SH, hH)
            },
            dragReplayCamera(BH) {
              var LH;
              let {
                dx: AH,
                dy: rH
              } = BH;
              null === (LH = HH.freecam()) || void 0 === LH || LH.drag(AH, rH)
            },
            moveReplayFreecam(BH) {
              var LH;
              null === (LH = HH.freecam()) || void 0 === LH || LH.move(BH)
            },
            holdReplayFreecamVertical(BH) {
              var LH;
              let {
                action: AH,
                LX: rH
              } = BH;
              null === (LH = HH.freecam()) || void 0 === LH || LH.holdVertical(AH, rH)
            }
          },
          vH = HH => {
            var BH;
            const LH = hH(),
              AH = null !== (BH = null === LH || void 0 === LH ? void 0 : LH.view) && void 0 !== BH ? BH : null;
            zL.has(HH) ? (HH => {
              for (const BH of SH) BH(HH)
            })(HH) : CL.has(HH) ? xH.replayAction(HH) : "replayPlayPause" === HH ? LH && AH && AH.state !== XH.hd.None && xH.setReplayPlaying(AH.state !== XH.hd.Playing) : "replayChangeCameraMode" === HH ? null === LH || void 0 === LH || LH.cycleCameraMode() : "replayExit" === HH ? !0 === (null === LH || void 0 === LH ? void 0 : LH.inPlayback) && (0, cB.j)("/") : "replayExportVideo" === HH && MH()
          };
        let PH = !1;
        return {
          states: uH,
          events: QH,
          commands: xH,
          lookups: {
            replayCamera() {
              var BH, LH, AH;
              return !0 !== (null === (BH = hH()) || void 0 === BH ? void 0 : BH.isOpen) ? null : null !== (LH = null === (AH = HH.cameraView) || void 0 === AH ? void 0 : AH.call(HH)) && void 0 !== LH ? LH : null
            },
            leaveGameReloadsPage() {
              var HH;
              return !0 === (null === (HH = hH()) || void 0 === HH ? void 0 : HH.inPlayback)
            }
          },
          feed: {
            viewerChanged: () => {
              var HH;
              const LH = !0 === (null === (HH = hH()) || void 0 === HH ? void 0 : HH.inPlayback);
              LH !== PH && (PH = LH, CH.k.AX("connectedGameChanged")), BH.fire()
            },
            recorderChanged: AH.fire,
            keyDown: HH => {
              var BH;
              switch (HH) {
                case "recordGame":
                  return void xH.toggleRecording();
                case "recordClip":
                  return void((0, WB.c)() || xH.saveClip())
              }(0, SL.e)() || ("replayViewerOpen" !== HH ? HH.startsWith("replay") && ((0, WB.c)() || !0 === (null === (BH = hH()) || void 0 === BH ? void 0 : BH.inPlayback)) && vH(HH) : WH("toggle"))
            }
          }
        }
      }({
        runtime: rH.n,
        cameraView: () => {
          var HH;
          const BH = null === (HH = (0, hH.i)()) || void 0 === HH ? void 0 : HH.renderFrame;
          if (!BH) return null;
          const [LH, AH, rH] = BH.cameraPosition, [SH, tH, zH] = BH.cameraDirection;
          return {
            position: [LH, AH, rH],
            direction: [SH, tH, zH]
          }
        },
        canvas: () => {
          var HH, BH, LH;
          return null !== (HH = null === (BH = (LH = (0, SH.L)()).canvas) || void 0 === BH ? void 0 : BH.call(LH)) && void 0 !== HH ? HH : null
        },
        freecam: rH.j
      }),
      wA = {
        states: {
          ...CB,
          ...YB.k,
          ...DA.states,
          ...YL,
          ...nH
        },
        events: {
          ...EB,
          ...WH,
          ...YB.g,
          ...kH.c,
          ...mL.g,
          ...DA.events,
          ...uL,
          ...bH.j
        },
        commands: {
          ...OH,
          ...XB,
          ...MH,
          ...YB.e,
          ...iB,
          ...kL,
          ...bH.f,
          ...gB,
          ...DA.commands,
          ...TL,
          ...FH,
          ...eL,
          ...uB
        },
        queries: {
          ...YB.h,
          ...FA
        },
        lookups: {
          ...GB,
          ...eH,
          ...mL.k,
          ...DA.lookups,
          ...VH,
          ...AL,
          ...cL,
          ...DH
        }
      };

    function ZA() {
      (0, tH.e)(QH.l), (0, rH.p)(DA.feed), (0, kH.d)(), pB || (pB = !0, (0, QH.k)(fH.j, (HH => {
        const BH = (0, KH.f)(fH.j, HH);
        "string" === typeof BH && Promise.resolve().then((() => LH(4019))).then((HH => {
          let {
            onCosmeticPackGranted: LH
          } = HH;
          LH(BH)
        }))
      })), (0, QH.k)(fH.ab, (HH => {
        const BH = (0, KH.f)(fH.ab, HH);
        "number" === typeof BH && CH.k.AX("serverUpdating", Date.now() + BH, !0)
      })), (0, QH.k)(fH.D, (HH => {
        const BH = (0, KH.f)(fH.D, HH);
        if ((0, KH.c)(BH)) {
          const {
            KL: HH,
            cL: LH
          } = BH;
          (0, sB.b)({
            KL: "string" === typeof HH ? HH : null,
            cL: "string" === typeof LH ? LH : null
          })
        }
      })), (0, QH.k)(EH.nc.NewUiRequest, (HH => {
        const BH = (0, KH.i)(HH);
        (0, KH.c)(BH) && "number" === typeof BH.id && (0, KH.c)(BH.clientParameters) && (0, JB.f)(BH.id, BH.clientParameters)
      })), (0, QH.k)(fH.V, (HH => {
        const BH = (0, KH.f)(fH.V, HH);
        "number" === typeof BH && (0, JB.i)(BH)
      })), (0, QH.j)(JB.b), (0, QH.k)(EH.nc.UiRequestPopup, (HH => {
        const BH = (0, KH.i)(HH);
        if ((0, KH.c)(BH) && "number" === typeof BH.id && ("string" === typeof BH.text || (0, KH.c)(BH.text) && "string" === typeof BH.text.translationKey)) {
          const HH = BH.id;
          (0, JB.m)(HH, BH.text, !0 === BH.destructive, (BH => {
            iB.answerUiRequest({
              id: HH,
              XE: BH
            })
          }))
        }
      })), (0, QH.k)(EH.nc.TopRightHelper, (HH => {
        const BH = (0, KH.i)(HH);
        void 0 !== BH && CH.k.AX("TopRightHelper", BH, !0)
      })), (0, QH.k)(EH.nc.TaskProgress, (HH => {
        const BH = (0, KH.i)(HH);
        (0, KH.c)(BH) && "string" === typeof BH.taskId && "number" === typeof BH.progress && (0, aB.b)({
          taskId: BH.taskId,
          progress: BH.progress
        })
      }))), UL || (UL = !0, (0, QH.k)(fH.n, (HH => {
        const BH = (0, KH.f)(fH.n, HH);
        (0, KH.c)(BH) && CH.k.AX("showShopFromServer", {
          toggle: BH.eS,
          qS: BH.qS
        }, !0)
      })), (0, QH.k)(EH.nc.OverShopInfo, (HH => {
        const BH = (0, KH.i)(HH);
        (0, KH.c)(BH) && CH.k.AX("overShopInfo", BH.info, !0)
      })), (0, QH.k)(EH.nc.ShowShopTutorial, (() => {
        CH.k.AX("showShopTutorial", null, !0)
      }))), vL || (vL = !0, (0, QH.g)((() => {
        var HH;
        (0, QL.resetLeaveEvents)(), null === (HH = PL) || void 0 === HH || HH(), PL = (0, QH.d)() ? (0, ML.g)(QH.d) : null, (0, QH.d)() || CH.k.Hx()
      })), (0, QH.k)(EH.nc.SetCookie, (HH => {
        const BH = (0, KH.i)(HH),
          LH = (0, cB.c)().gameNameWithVariation;
        (0, KH.c)(BH) && "string" === typeof BH.key && null !== LH && (0, WL.setCookie)(LH, BH.key, BH.value)
      })), (0, QH.k)(EH.nc.LeaveValues, (HH => {
        const BH = (0, KH.i)(HH);
        if ((0, KH.c)(BH) && "string" === typeof BH.leaveEventType) {
          const {
            leaveEventType: HH,
            category: LH,
            subCategory: AH,
            value: rH
          } = BH;
          (0, QL.updateLeaveValue)({
            leaveEventType: HH,
            category: LH,
            subCategory: AH,
            value: rH
          })
        }
      })), (0, QH.k)(EH.nc.CustomAnalyticsEvent, (HH => {
        const BH = (0, KH.i)(HH);
        if ((0, KH.c)(BH) && "string" === typeof BH.cat1) {
          const {
            cat1: HH,
            cat2: LH,
            cat3: AH,
            value: rH
          } = BH;
          (0, QL.logCustomAnalyticsEvent)({
            cat1: HH,
            cat2: LH,
            cat3: AH,
            value: rH
          })
        }
      })), (0, QH.k)(EH.nc.ProgressionEvent, (HH => {
        const BH = (0, KH.i)(HH);
        if ((0, KH.c)(BH)) {
          const {
            type: HH,
            location1: LH,
            location2: AH,
            location3: rH,
            score: SH
          } = BH;
          (0, QL.logProgressionEvent)({
            type: HH,
            location1: LH,
            location2: AH,
            location3: rH,
            score: SH
          })
        }
      })), (0, QH.k)(EH.nc.ResourceEvent, (HH => {
        const BH = (0, KH.i)(HH);
        if ((0, KH.c)(BH)) {
          const {
            type: HH,
            resourceType: LH,
            amount: AH,
            category: rH,
            itemName: SH
          } = BH;
          (0, QL.logResourceEvent)({
            type: HH,
            resourceType: LH,
            amount: AH,
            category: rH,
            itemName: SH
          })
        }
      })), (0, QH.k)(EH.nc.LeaderboardResponse, (HH => {
        const BH = (0, KH.i)(HH);
        if ((0, KH.c)(BH)) {
          const {
            category: HH,
            timeframe: LH,
            data: AH
          } = BH;
          CH.k.AX("leaderboardResponse", {
            category: HH,
            timeframe: LH,
            data: AH
          })
        }
      })), (0, QH.k)(fH.y, (HH => {
        const BH = (0, KH.f)(fH.y, HH);
        "string" === typeof BH && (0, xL.d)(HH.conn, BH)
      })), (0, QH.k)(fH.z, (HH => {
        const BH = (0, KH.f)(fH.z, HH);
        "string" === typeof BH && console.error(`[logErrorToConsole]: ${BH}`)
      }))), gH(), (0, mL.d)(), qB || (qB = !0, (0, QH.k)(fH.i, (HH => {
        const BH = (0, KH.f)(fH.i, HH);
        void 0 !== BH && (0, eB.n)(BH)
      }))), dB(), oB(), dH || (dH = !0, (0, SH.r)(aH)), AH.gameBridge.attach(wA), NA()
    }
  },
  37162: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => EH,
      h: () => zH,
      k: () => tH,
      l: () => CH
    });
    var AH = LH(2010);
    let rH = null,
      SH = 0;
    const hH = new Set;

    function tH() {
      return rH
    }

    function zH() {
      return SH
    }

    function CH(HH) {
      rH = HH, SH++, (0, AH.e)();
      for (const BH of hH) BH()
    }

    function EH(HH) {
      hH.add(HH)
    }
  },
  37169: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => hH,
      g: () => tH
    });
    var AH = LH(37174);
    let rH = null,
      SH = null;

    function hH() {
      return rH ??= LH.e(73).then((() => LH(42483))).catch((HH => {
        throw rH = null, HH
      })), rH
    }

    function tH() {
      return SH ??= Promise.all([hH(), (0, AH.f)()]).then((HH => {
        let [BH] = HH;
        return BH
      }), (HH => {
        throw SH = null, HH
      })), SH
    }
  },
  37297: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => rH
    });
    const AH = {
      wait: function(HH) {
        return new Promise((BH => {
          setTimeout(BH, HH)
        }))
      },
      stallMs: 2e4
    };
    class rH {
      constructor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : AH;
        this.url = HH, this.options = BH, this.timing = LH, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = HH
      }
      ready() {
        if (null === this.fetched) {
          const HH = new AbortController;
          this.fetchAbort = HH, this.fetched = this.fetchWithRetries(HH.signal).then((BH => (this.fetchAbort === HH && (this.fetchAbort = null), BH)))
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
      async fetchWithRetries(HH) {
        for (let BH = 0;; BH++) {
          const LH = new URL(this.url);
          if (BH > 0 && LH.searchParams.set("cache-bust", `${Date.now()}-${BH}`), await this.fetchWhole(LH, HH)) return this.scriptUrl = LH, !0;
          if (BH >= 3 || HH.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** BH), HH.aborted) return !1
        }
      }
      async fetchWhole(HH, BH) {
        const LH = new AbortController;
        let AH;
        const rH = () => {
            clearTimeout(AH), AH = setTimeout((() => {
              LH.abort()
            }), this.timing.stallMs)
          },
          SH = () => {
            LH.abort()
          };
        BH.addEventListener("abort", SH, {
          once: !0
        }), rH();
        try {
          var hH;
          const BH = await fetch(HH, {
            signal: LH.signal
          });
          if (!BH.ok) return !1;
          const AH = null === (hH = BH.body) || void 0 === hH ? void 0 : hH.getReader();
          if (!AH) return !1;
          for (;;) {
            const {
              done: HH
            } = await AH.read();
            if (HH) return !0;
            rH()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(AH), BH.removeEventListener("abort", SH)
        }
      }
    }
  },
  37941: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => AH
    });
    const AH = {
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
  39948: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => AH,
      d: () => rH
    });
    const AH = ["description", "label"];

    function rH(HH) {
      const BH = HH.type;
      return {
        type: BH,
        params: HH[BH]
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);