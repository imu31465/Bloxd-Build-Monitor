export const id = 218;
export const ids = [218];
export const modules = {
  37385: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => wW,
      f: () => CW
    });
    const wW = "The world isn't loaded, so no blocks can be seen.",
      CW = "The world isn't loaded, so nothing in it can be seen."
  },
  37087: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => zR,
      c: () => AW
    });
    var wW = MW(33);
    let CW = !1;

    function zR() {
      return CW
    }

    function AW(WW) {
      CW !== WW && (CW = WW, wW.k.Sz("replayViewer|videoExportChanged"))
    }
  },
  38223: (WW, RW, MW) => {
    MW.d(RW, {
      A: () => sW,
      B: () => HW,
      E: () => hW,
      F: () => jR,
      G: () => pW,
      J: () => XW,
      N: () => uW,
      O: () => KW,
      S: () => aR,
      e: () => OW,
      g: () => EW,
      j: () => rR,
      l: () => nW,
      p: () => cR,
      q: () => QW,
      u: () => UW,
      w: () => kR,
      y: () => dW
    });
    var wW = MW(33),
      CW = MW(1115),
      zR = MW(1939),
      AW = MW(3790),
      bR = MW(3756);
    let yR, NW = !1,
      eW = !1,
      BW = !1,
      tR = !1;
    const TW = 1300,
      gR = 3e3;
    let iR = 0,
      YW = !1,
      JW = !1,
      PW = 0;
    const IW = 2;
    let oW = !1,
      lW = !1;
    const FW = new Set,
      fW = new Set;

    function QW() {
      return NW
    }

    function rR() {
      return JW
    }

    function cR() {
      return lW
    }

    function XW() {
      return (0, CW.p)() && !lW
    }

    function jR(WW) {
      let RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (WW !== lW) {
        lW = WW;
        for (const WW of [...fW]) WW(lW);
        RW && KW()
      }
    }

    function kR(WW) {
      return fW.add(WW), () => {
        fW.delete(WW)
      }
    }

    function aR() {
      (0, AW.j)(zR.z.Menu, (0, CW.p)() ? 0 : zR.z.Menu)
    }

    function sW() {
      JW = !1, PW = 0, aR(), KW()
    }

    function dW(WW) {
      return FW.add(WW), () => {
        FW.delete(WW)
      }
    }

    function pW(WW) {
      eW = !1, WW !== NW && (NW = WW, tR = !1, clearTimeout(yR), BW = !NW && oW, NW ? (YW = !1, JW = !1, PW = 0) : XW() && !oW && (JW = !0), oW = !1, NW && !XW() && LW(), DW(), BW && KW())
    }

    function hW(WW) {
      WW !== YW && (YW = WW, WW || KW())
    }

    function UW() {
      eW = !1, tR || !0 !== xR() || (tR = !0, clearTimeout(yR), yR = setTimeout(VW, TW))
    }

    function EW() {
      return (!eW || performance.now() - iR > gR) && (eW = (0, bR.I)().lockPointer(), iR = performance.now()), eW
    }

    function VW() {
      mR() && vR() && EW()
    }

    function mR() {
      return XW() && !NW && !YW
    }

    function xR() {
      var WW;
      return "undefined" === typeof navigator || null === (WW = navigator.userActivation) || void 0 === WW ? void 0 : WW.isActive
    }

    function vR() {
      return BW && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== xR()
    }

    function KW() {
      XW() ? mR() && !JW && vR() && EW() : NW && !oW && LW()
    }

    function uW() {
      JW ? navigator.vendor.startsWith("Apple") ? GW() : PW = IW : KW()
    }

    function OW() {
      PW > 0 && 0 === --PW && GW()
    }

    function nW() {
      PW = 0
    }

    function GW() {
      mR() && !0 === xR() && EW()
    }

    function LW() {
      oW = !0, (0, bR.I)().unlockPointer()
    }

    function HW() {
      eW = !1, BW = !1, tR = !1, clearTimeout(yR), YW = !1, JW = !1, PW = 0, oW = !1;
      const WW = NW;
      NW = !1, WW && DW()
    }

    function DW() {
      for (const WW of [...FW]) WW(NW);
      wW.k.Sz("pointerLockUpdate", NW)
    }
  },
  38134: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => tR,
      i: () => bR,
      k: () => BW,
      m: () => NW,
      q: () => AW,
      s: () => eW,
      u: () => yR
    });
    let wW = null,
      CW = null,
      zR = null;

    function AW(WW) {
      wW = WW
    }

    function bR() {
      return wW
    }

    function yR(WW) {
      CW = WW
    }

    function NW() {
      return CW
    }

    function eW(WW) {
      zR = WW
    }

    function BW() {
      return zR
    }

    function tR() {
      var WW, RW;
      return !0 === (null === (WW = CW) || void 0 === WW || null === (RW = WW.currentViewer) || void 0 === RW ? void 0 : RW.inPlayback)
    }
  },
  38215: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => bR
    });
    var wW = MW(37385);

    function CW(WW) {
      return {
        current: () => WW,
        watch: () => () => {}
      }
    }

    function zR() {}
    const AW = Object.freeze([0, 0, 0]),
      bR = {
        states: {
          health: CW({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: CW({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: CW({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: CW({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: CW({}),
          creativeVisibility: CW({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: CW(null),
          heldItemAim: CW({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: CW(!1),
          gliderBoostFuel: CW(0),
          flight: CW({
            canFly: !1,
            flying: !1
          }),
          crafting: CW({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: CW({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: CW({}),
          fullInventory: CW(!1),
          crosshairTarget: CW({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: CW(!0),
          replay: CW(null),
          replayEdits: CW(null),
          replayRecorder: CW({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: CW(!1)
        },
        events: {
          hotbarSlotRequested: {
            watch: () => () => {}
          },
          hotbarScrolled: {
            watch: () => () => {}
          },
          hotbarDropRequested: {
            watch: () => () => {}
          },
          inventoryDropRequested: {
            watch: () => () => {}
          },
          numberKeyPressed: {
            watch: () => () => {}
          },
          chestToggled: {
            watch: () => () => {}
          },
          chestRefreshed: {
            watch: () => () => {}
          },
          inventorySynced: {
            watch: () => () => {}
          },
          enchantingTableOpened: {
            watch: () => () => {}
          },
          cosmeticsUpdated: {
            watch: () => () => {}
          },
          shotDamageToShow: {
            watch: () => () => {}
          },
          boardEditRequested: {
            watch: () => () => {}
          },
          kill: {
            watch: () => () => {}
          },
          chatReceived: {
            watch: () => () => {}
          },
          ironChestOpenRequested: {
            watch: () => () => {}
          },
          localEffectUpdated: {
            watch: () => () => {}
          },
          localPlayerAliveSet: {
            watch: () => () => {}
          },
          replayUiActionRequested: {
            watch: () => () => {}
          },
          replayViewerRequested: {
            watch: () => () => {}
          }
        },
        commands: {
          selectHotbarSlot: zR,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: zR,
          setInventoryOpen: zR,
          changeIronChestPasskey: zR,
          dragReplayCamera: zR,
          applyTemporaryThirdPerson: zR,
          holdEmoteWheel: zR,
          recordFlyingMiddleText: zR,
          focusCrafting: zR,
          craftRecipe: () => ({
            YL: 0,
            jK: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: zR,
          setShopOpen: zR,
          buyShopItem: zR,
          sendChatMessage: zR,
          ignorePlayer: zR,
          reportPlayer: zR,
          reportWorldCodeChat: zR,
          requestDiscordReportKey: zR,
          reportLobbyOrGame: zR,
          playEmote: zR,
          updateMyCosmetic: zR,
          writeOnBoard: zR,
          writeBook: zR,
          writeNameTag: zR,
          setCustomLobbyBlock: zR,
          openIronChest: zR,
          sendCodeCollab: zR,
          clickCodeBlock: zR,
          bindCustomButtonKeys: zR,
          pressCustomButton: zR,
          moveReplayFreecam: zR,
          holdReplayFreecamVertical: zR,
          respawn: zR,
          wakeUp: zR,
          requestLeaderboard: zR,
          completeTask: zR,
          setServerCookie: zR,
          answerUiRequest: zR,
          chooseRewardedAd: zR,
          setCameraZoom: zR,
          setCrosshairInteractPrompt: zR,
          setLookSensitivity: zR,
          replayAction: zR,
          setReplayPlaying: zR,
          seekReplay: zR,
          setReplayCameraMode: zR,
          syncReplayCameraMode: zR,
          setReplayCameraKeyframe: zR,
          moveReplayCameraKeyframe: zR,
          deleteReplayCameraKeyframes: zR,
          setReplayPlaybackMark: zR,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: zR,
          exportReplayVideo: zR,
          toggleRecording: zR,
          saveClip: zR,
          setRecorderPrefs: zR,
          setReplayViewerOpen: zR
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => wW.d,
          worldCodeAiGameState: () => wW.f
        },
        lookups: {
          localPos: () => AW,
          momentumFrac: () => 0,
          screenPos: () => ({
            x: 0,
            y: 0
          }),
          cameraZoom: () => 0,
          blocksStandingOn: () => [],
          dropAhead: () => !1,
          replayCamera: () => null,
          leaveGameReloadsPage: () => !1,
          codeBlockClickable: () => !1
        }
      }
  },
  38243: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => AW,
      h: () => zR,
      l: () => bR
    });
    let wW = null,
      CW = null;

    function zR(WW, RW) {
      return wW = WW, CW = null, bR(RW), () => {
        wW === WW && (wW = null, CW = null)
      }
    }

    function AW() {
      return null === CW ? null : {
        ...CW
      }
    }

    function bR(WW) {
      var RW;
      null !== (RW = wW) && void 0 !== RW && RW(WW) && (CW = {
        ...WW
      })
    }
  },
  38182: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => wW,
      g: () => BW,
      i: () => bR,
      j: () => zR,
      l: () => CW,
      o: () => yR,
      q: () => eW
    });
    class wW extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function CW(WW) {
      return WW instanceof RangeError && /call stack/i.test(WW.message) || WW instanceof Error && "InternalError" === WW.name && /recursion/i.test(WW.message)
    }

    function zR(WW) {
      return /out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(WW))
    }
    const AW = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function bR(WW) {
      var RW;
      return WW instanceof WebAssembly.RuntimeError || WW instanceof wW || CW(WW) && AW.test(null !== (RW = WW.stack) && void 0 !== RW ? RW : "")
    }

    function yR(WW, RW) {
      if (bR(WW)) throw WW;
      console.error(RW, WW)
    }

    function NW(WW, RW, MW, CW, zR) {
      if (RW % CW !== 0 || RW + MW > WW.byteLength) throw new wW(`${zR}: ${MW} bytes at ${RW}, ${CW}-aligned, outside ${WW.byteLength} bytes of memory`)
    }

    function eW(WW, RW, MW, wW, CW) {
      return 0 === MW ? null : (NW(RW, MW, wW * WW.BYTES_PER_ELEMENT, WW.BYTES_PER_ELEMENT, CW), new WW(RW, MW, wW))
    }

    function BW(WW, RW, MW, wW, CW) {
      return 0 === RW ? null : (NW(WW, RW, MW, wW, CW), new DataView(WW, RW, MW))
    }
  },
  38136: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => wW,
      e: () => JW,
      i: () => iR,
      l: () => YW,
      p: () => tR,
      q: () => TW,
      s: () => eW,
      v: () => BW,
      w: () => gR
    });
    class wW extends Error {
      constructor(WW) {
        super(`the join's code did not load: ${WW instanceof Error?WW.message:String(WW)}`, {
          cause: WW
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === WW || void 0 === WW ? void 0 : WW.request
      }
    }
    let CW = null,
      zR = null,
      AW = null;
    const bR = [];
    let yR = null;

    function NW(WW, RW) {
      try {
        WW(RW)
      } catch (MW) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", MW)
      }
    }

    function eW() {
      return yR
    }

    function BW(WW) {
      bR.push(WW), null !== yR && NW(WW, yR)
    }

    function tR(WW) {
      return CW ??= Promise.all([MW.e(59), MW.e(79), MW.e(193), MW.e(120), MW.e(214), MW.e(194), MW.e(195), MW.e(77), MW.e(173), MW.e(125), MW.e(217), MW.e(179), MW.e(241), MW.e(99), MW.e(45)]).then((() => MW(40003))).then((RW => {
        RW.loadAudio(WW), yR = RW;
        for (const WW of bR) NW(WW, RW);
        return RW
      })).catch((WW => {
        throw CW = null, WW
      })), CW
    }
    async function TW(WW, RW) {
      try {
        const MW = await tR(WW);
        await MW.loadClientGame(RW)
      } catch (MW) {
        throw new wW(MW)
      }
    }

    function gR(WW, RW) {
      zR = {
        running: WW,
        shell: RW
      }
    }

    function iR() {
      return AW
    }
    async function YW(WW) {
      const RW = zR;
      if ((null === RW || void 0 === RW ? void 0 : RW.running) !== WW) throw new Error("the core's session has ended");
      const MW = await tR(RW.shell.audio).catch((WW => {
        throw new wW(WW)
      }));
      if (null !== AW) return AW;
      if (zR !== RW || WW.isStopped) throw new Error("the core stopped while the game code loaded");
      if (AW = MW.startGameHost(WW, RW.shell), null === AW) throw new Error("the core's shared tables didn't read, so the game can't start");
      return AW
    }

    function JW() {
      null !== AW && (null !== yR ? yR.endGameHost(AW) : AW.closeGame()), AW = null, zR = null
    }
  },
  38231: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => CW,
      f: () => zR
    });
    let wW = null;

    function CW(WW, RW) {
      wW = {
        conn: WW,
        reason: RW
      }
    }

    function zR(WW) {
      var RW;
      const MW = (null === (RW = wW) || void 0 === RW ? void 0 : RW.conn) === WW ? wW.reason : null;
      return wW = null, MW
    }
  },
  38141: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => zR,
      i: () => CW
    });
    let wW = {
      fire: () => {},
      close: () => {}
    };

    function CW(WW) {
      wW = WW
    }

    function zR() {
      return wW
    }
  },
  38195: (WW, RW, MW) => {
    MW.d(RW, {
      C: () => cR,
      D: () => sW,
      H: () => gR,
      K: () => pW,
      M: () => PW,
      N: () => JW,
      R: () => IW,
      S: () => FW,
      c: () => CW,
      e: () => dW,
      f: () => aR,
      i: () => TW,
      k: () => iR,
      l: () => jR,
      n: () => QW,
      p: () => XW,
      q: () => rR,
      r: () => fW,
      v: () => kR,
      w: () => oW,
      x: () => lW,
      z: () => YW
    });
    var wW = MW(161);
    const CW = {
      Chat: 49,
      UiRequestResponded: 91,
      CodeCollab: 89,
      SetCustomLobbyBlock: 60,
      UpdateBook: 56,
      UpdateBoard: 33,
      UpdateMyCosmetic: 45,
      PlayEmote: 90,
      ReqDiscordReportKey: 9,
      UserReport: 11,
      LobbyReport: 12,
      CustomGameReport: 13,
      IgnoreUser: 34,
      ShopMenuChanged: 26,
      GeneralCookieSet: 72,
      CompleteTask: 69,
      OpenIronChest: 80,
      ChangeIronChestPasskey: 81,
      StopSleeping: 78,
      AnalyticsUpdate: 3,
      UiRequestResp: 15,
      QteResponse: 16,
      ItemBought: 25,
      LeaderboardRequest: 40,
      UpdateNameTag: 53
    };

    function zR(WW, RW) {
      return !ArrayBuffer.isView(WW) || WW instanceof DataView ? Array.isArray(WW) ? WW.map((WW => RW(WW))) : WW : Array.from(WW, (WW => RW(WW)))
    }

    function AW(WW) {
      if ("string" !== typeof WW) return WW;
      for (let RW = 0; RW < WW.length; RW++) {
        const MW = WW.charCodeAt(RW);
        if (MW >= 55296 && MW <= 57343) return yR.decode(bR.encode(WW))
      }
      return WW
    }
    const bR = new TextEncoder,
      yR = new TextDecoder;

    function NW(WW) {
      return WW
    }
    let eW;

    function BW(WW) {
      return null === WW || "object" !== typeof WW ? WW : [AW(WW.ew), AW(WW.KU)]
    }

    function tR(WW) {
      return null === WW || "object" !== typeof WW ? WW : [zR(WW.bV, NW), zR(WW.Wy, NW)]
    }

    function TW(WW) {
      return null === (RW = WW) || "object" !== typeof RW ? RW : [AW(RW.PA), AW(RW.Fv)];
      var RW
    }

    function gR(WW) {
      return null === (RW = WW) || "object" !== typeof RW ? RW : [RW.id, RW.Qr];
      var RW
    }

    function iR(WW) {
      return null === (RW = WW) || "object" !== typeof RW ? RW : [RW.yV, AW(RW.tV), RW.iV, AW(RW.lE), RW.FE, RW.QE, RW.vmW, AW(RW.KV), AW(RW.GV)];
      var RW
    }

    function YW(WW) {
      return null === (RW = WW) || "object" !== typeof RW ? RW : [zR(RW.Jm, NW), RW.Iz];
      var RW
    }

    function JW(WW) {
      return null === (RW = WW) || "object" !== typeof RW ? RW : [zR(RW.bK, (WW => AW(WW))), AW(RW.Tv), RW.iK];
      var RW
    }

    function PW(WW) {
      return null === (RW = WW) || "object" !== typeof RW ? RW : [zR(RW.hG, NW), AW(RW.nG), RW.qL];
      var RW
    }

    function IW(WW) {
      return null === (RW = WW) || "object" !== typeof RW ? RW : [AW(RW.Ur), AW(RW.Kr)];
      var RW
    }

    function oW(WW) {
      return null === (RW = WW) || "object" !== typeof RW ? RW : [AW(RW.Nk)];
      var RW
    }

    function lW(WW) {
      return AW(WW)
    }

    function FW(WW) {
      return null === (RW = WW) || "object" !== typeof RW ? RW : [AW(RW.VK), AW(RW.Tu), AW(RW.ew), AW(RW.KU)];
      var RW
    }

    function fW(WW) {
      return BW(WW)
    }

    function QW(WW) {
      return BW(WW)
    }

    function rR(WW) {
      return null === (RW = WW) || "object" !== typeof RW ? RW : [AW(RW.uL)];
      var RW
    }

    function cR(WW) {
      return WW
    }

    function XW(WW) {
      return null === (RW = WW) || "object" !== typeof RW ? RW : [AW(RW.HV), AW(RW.qm)];
      var RW
    }

    function jR(WW) {
      return AW(WW)
    }

    function kR(WW) {
      return tR(WW)
    }

    function aR(WW) {
      return tR(WW)
    }

    function sW(WW) {
      return null === (RW = WW) || "object" !== typeof RW ? RW : [AW(RW.mD)];
      var RW
    }

    function dW(WW) {
      return (eW ??= (0, wW.x)().map((WW => WW.name)), eW).map((RW => {
        return "string" === typeof(MW = WW[RW]) ? AW(MW) : zR(MW, NW);
        var MW
      }))
    }

    function pW(WW) {
      return null === (RW = WW) || "object" !== typeof RW ? RW : [RW.mp, RW.Qp, RW.Xp];
      var RW
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);