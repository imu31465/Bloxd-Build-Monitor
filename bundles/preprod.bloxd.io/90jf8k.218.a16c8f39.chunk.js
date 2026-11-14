export const id = 218;
export const ids = [218];
export const modules = {
  37758: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => CF,
      f: () => AF
    });
    const CF = "The world isn't loaded, so no blocks can be seen.",
      AF = "The world isn't loaded, so nothing in it can be seen."
  },
  37454: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => uF,
      e: () => hF
    });
    var CF = SF(20);
    let AF = !1;

    function uF() {
      return AF
    }

    function hF(FF) {
      AF !== FF && (AF = FF, CF.j.Uu("replayViewer|videoExportChanged"))
    }
  },
  38620: (FF, WF, SF) => {
    SF.d(WF, {
      A: () => MF,
      D: () => YF,
      G: () => jW,
      I: () => GF,
      L: () => xW,
      M: () => cW,
      Q: () => OF,
      U: () => KF,
      X: () => HF,
      Y: () => oF,
      d: () => wF,
      e: () => IF,
      i: () => LF,
      m: () => XF,
      q: () => mW,
      t: () => DF,
      v: () => zW,
      w: () => ZF
    });
    var CF = SF(20),
      AF = SF(1144),
      uF = SF(1939),
      hF = SF(3812),
      bW = SF(3773);
    let dF, PF = !1,
      RF = !1,
      iW = !1,
      eF = !1;
    const EF = 1300,
      QF = 3e3;
    let rW = 0,
      gW = !1,
      tW = !1,
      TF = 0;
    const aW = 2;
    let kW = !1,
      qW = !1;
    const VF = new Set,
      NF = new Set;

    function DF() {
      return PF
    }

    function LF() {
      return tW
    }

    function mW() {
      return qW
    }

    function OF() {
      return (0, AF.k)() && !qW
    }

    function xW(FF) {
      let WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (FF !== qW) {
        qW = FF;
        for (const FF of [...NF]) FF(qW);
        WF && HF()
      }
    }

    function ZF(FF) {
      return NF.add(FF), () => {
        NF.delete(FF)
      }
    }

    function oF() {
      (0, hF.h)(uF.z.Menu, (0, AF.k)() ? 0 : uF.z.Menu)
    }

    function YF() {
      tW = !1, TF = 0, oF(), HF()
    }

    function MF(FF) {
      return VF.add(FF), () => {
        VF.delete(FF)
      }
    }

    function cW(FF) {
      RF = !1, FF !== PF && (PF = FF, eF = !1, clearTimeout(dF), iW = !PF && kW, PF ? (gW = !1, tW = !1, TF = 0) : OF() && !kW && (tW = !0), kW = !1, PF && !OF() && BF(), vW(), iW && HF())
    }

    function GF(FF) {
      FF !== gW && (gW = FF, FF || HF())
    }

    function zW() {
      RF = !1, eF || !0 !== sF() || (eF = !0, clearTimeout(dF), dF = setTimeout(fF, EF))
    }

    function IF() {
      return (!RF || performance.now() - rW > QF) && (RF = (0, bW.I)().lockPointer(), rW = performance.now()), RF
    }

    function fF() {
      yW() && nF() && IF()
    }

    function yW() {
      return OF() && !PF && !gW
    }

    function sF() {
      var FF;
      return "undefined" === typeof navigator || null === (FF = navigator.userActivation) || void 0 === FF ? void 0 : FF.isActive
    }

    function nF() {
      return iW && (!navigator.userAgent.includes("Firefox/") || Boolean(document.fullscreenElement)) || !1 !== sF()
    }

    function HF() {
      OF() ? yW() && !tW && nF() && IF() : PF && !kW && BF()
    }

    function KF() {
      tW ? navigator.vendor.startsWith("Apple") ? UF() : TF = aW : HF()
    }

    function wF() {
      TF > 0 && 0 === --TF && UF()
    }

    function XF() {
      TF = 0
    }

    function UF() {
      yW() && !0 === sF() && IF()
    }

    function BF() {
      kW = !0, (0, bW.I)().unlockPointer()
    }

    function jW() {
      RF = !1, iW = !1, eF = !1, clearTimeout(dF), gW = !1, tW = !1, TF = 0, kW = !1;
      const FF = PF;
      PF = !1, FF && vW()
    }

    function vW() {
      for (const FF of [...VF]) FF(PF);
      CF.j.Uu("pointerLockUpdate", PF)
    }
  },
  38520: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => eF,
      e: () => bW,
      h: () => iW,
      l: () => PF,
      p: () => hF,
      q: () => RF,
      s: () => dF
    });
    let CF = null,
      AF = null,
      uF = null;

    function hF(FF) {
      CF = FF
    }

    function bW() {
      return CF
    }

    function dF(FF) {
      AF = FF
    }

    function PF() {
      return AF
    }

    function RF(FF) {
      uF = FF
    }

    function iW() {
      return uF
    }

    function eF() {
      var FF, WF;
      return !0 === (null === (FF = AF) || void 0 === FF || null === (WF = FF.currentViewer) || void 0 === WF ? void 0 : WF.inPlayback)
    }
  },
  38615: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => bW
    });
    var CF = SF(37758);

    function AF(FF) {
      return {
        current: () => FF,
        watch: () => () => {}
      }
    }

    function uF() {}
    const hF = Object.freeze([0, 0, 0]),
      bW = {
        states: {
          health: AF({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: AF({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: AF({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: AF({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: AF({}),
          creativeVisibility: AF({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: AF(null),
          heldItemAim: AF({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: AF(!1),
          gliderBoostFuel: AF(0),
          flight: AF({
            canFly: !1,
            flying: !1
          }),
          crafting: AF({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: AF({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: AF({}),
          fullInventory: AF(!1),
          crosshairTarget: AF({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: AF(!0),
          replay: AF(null),
          replayEdits: AF(null),
          replayRecorder: AF({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: AF(!1)
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
          selectHotbarSlot: uF,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: uF,
          setInventoryOpen: uF,
          changeIronChestPasskey: uF,
          dragReplayCamera: uF,
          applyTemporaryThirdPerson: uF,
          holdEmoteWheel: uF,
          recordFlyingMiddleText: uF,
          focusCrafting: uF,
          craftRecipe: () => ({
            zK: 0,
            fK: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: uF,
          setShopOpen: uF,
          buyShopItem: uF,
          sendChatMessage: uF,
          ignorePlayer: uF,
          reportPlayer: uF,
          reportWorldCodeChat: uF,
          requestDiscordReportKey: uF,
          reportLobbyOrGame: uF,
          playEmote: uF,
          updateMyCosmetic: uF,
          writeOnBoard: uF,
          writeBook: uF,
          writeNameTag: uF,
          setCustomLobbyBlock: uF,
          openIronChest: uF,
          sendCodeCollab: uF,
          clickCodeBlock: uF,
          bindCustomButtonKeys: uF,
          pressCustomButton: uF,
          moveReplayFreecam: uF,
          holdReplayFreecamVertical: uF,
          respawn: uF,
          wakeUp: uF,
          requestLeaderboard: uF,
          completeTask: uF,
          setServerCookie: uF,
          answerUiRequest: uF,
          chooseRewardedAd: uF,
          setCameraZoom: uF,
          setCrosshairInteractPrompt: uF,
          setLookSensitivity: uF,
          replayAction: uF,
          setReplayPlaying: uF,
          seekReplay: uF,
          setReplayCameraMode: uF,
          syncReplayCameraMode: uF,
          setReplayCameraKeyframe: uF,
          moveReplayCameraKeyframe: uF,
          deleteReplayCameraKeyframes: uF,
          setReplayPlaybackMark: uF,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: uF,
          exportReplayVideo: uF,
          toggleRecording: uF,
          saveClip: uF,
          setRecorderPrefs: uF,
          setReplayViewerOpen: uF
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => CF.d,
          worldCodeAiGameState: () => CF.f
        },
        lookups: {
          localPos: () => hF,
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
  38636: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => hF,
      h: () => uF,
      l: () => bW
    });
    let CF = null,
      AF = null;

    function uF(FF, WF) {
      return CF = FF, AF = null, bW(WF), () => {
        CF === FF && (CF = null, AF = null)
      }
    }

    function hF() {
      return null === AF ? null : {
        ...AF
      }
    }

    function bW(FF) {
      var WF;
      null !== (WF = CF) && void 0 !== WF && WF(FF) && (AF = {
        ...FF
      })
    }
  },
  38585: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => CF,
      g: () => iW,
      k: () => bW,
      l: () => uF,
      m: () => AF,
      n: () => dF,
      o: () => RF
    });
    class CF extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function AF(FF) {
      return FF instanceof RangeError && /call stack/i.test(FF.message) || FF instanceof Error && "InternalError" === FF.name && /recursion/i.test(FF.message)
    }

    function uF(FF) {
      return /out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(FF))
    }
    const hF = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function bW(FF) {
      var WF;
      return FF instanceof WebAssembly.RuntimeError || FF instanceof CF || AF(FF) && hF.test(null !== (WF = FF.stack) && void 0 !== WF ? WF : "")
    }

    function dF(FF, WF) {
      if (bW(FF)) throw FF;
      console.error(WF, FF)
    }

    function PF(FF, WF, SF, AF, uF) {
      if (WF % AF !== 0 || WF + SF > FF.byteLength) throw new CF(`${uF}: ${SF} bytes at ${WF}, ${AF}-aligned, outside ${FF.byteLength} bytes of memory`)
    }

    function RF(FF, WF, SF, CF, AF) {
      return 0 === SF ? null : (PF(WF, SF, CF * FF.BYTES_PER_ELEMENT, FF.BYTES_PER_ELEMENT, AF), new FF(WF, SF, CF))
    }

    function iW(FF, WF, SF, CF, AF) {
      return 0 === WF ? null : (PF(FF, WF, SF, CF, AF), new DataView(FF, WF, SF))
    }
  },
  38527: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => CF,
      g: () => tW,
      j: () => rW,
      m: () => gW,
      o: () => eF,
      p: () => EF,
      r: () => RF,
      t: () => iW,
      x: () => QF
    });
    class CF extends Error {
      constructor(FF) {
        super(`the join's code did not load: ${FF instanceof Error?FF.message:String(FF)}`, {
          cause: FF
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === FF || void 0 === FF ? void 0 : FF.request
      }
    }
    let AF = null,
      uF = null,
      hF = null;
    const bW = [];
    let dF = null;

    function PF(FF, WF) {
      try {
        FF(WF)
      } catch (SF) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", SF)
      }
    }

    function RF() {
      return dF
    }

    function iW(FF) {
      bW.push(FF), null !== dF && PF(FF, dF)
    }

    function eF(FF) {
      return AF ??= Promise.all([SF.e(59), SF.e(79), SF.e(193), SF.e(120), SF.e(214), SF.e(194), SF.e(195), SF.e(77), SF.e(173), SF.e(125), SF.e(217), SF.e(179), SF.e(241), SF.e(99), SF.e(45)]).then((() => SF(40430))).then((WF => {
        WF.loadAudio(FF), dF = WF;
        for (const FF of bW) PF(FF, WF);
        return WF
      })).catch((FF => {
        throw AF = null, FF
      })), AF
    }
    async function EF(FF, WF) {
      try {
        const SF = await eF(FF);
        await SF.loadClientGame(WF)
      } catch (SF) {
        throw new CF(SF)
      }
    }

    function QF(FF, WF) {
      uF = {
        running: FF,
        shell: WF
      }
    }

    function rW() {
      return hF
    }
    async function gW(FF) {
      const WF = uF;
      if ((null === WF || void 0 === WF ? void 0 : WF.running) !== FF) throw new Error("the core's session has ended");
      const SF = await eF(WF.shell.audio).catch((FF => {
        throw new CF(FF)
      }));
      if (null !== hF) return hF;
      if (uF !== WF || FF.isStopped) throw new Error("the core stopped while the game code loaded");
      if (hF = SF.startGameHost(FF, WF.shell), null === hF) throw new Error("the core's shared tables didn't read, so the game can't start");
      return hF
    }

    function tW() {
      null !== hF && (null !== dF ? dF.endGameHost(hF) : hF.closeGame()), hF = null, uF = null
    }
  },
  38627: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => AF,
      c: () => uF
    });
    let CF = null;

    function AF(FF, WF) {
      CF = {
        conn: FF,
        reason: WF
      }
    }

    function uF(FF) {
      var WF;
      const SF = (null === (WF = CF) || void 0 === WF ? void 0 : WF.conn) === FF ? CF.reason : null;
      return CF = null, SF
    }
  },
  38533: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => uF,
      g: () => AF
    });
    let CF = {
      fire: () => {},
      close: () => {}
    };

    function AF(FF) {
      CF = FF
    }

    function uF() {
      return CF
    }
  },
  38596: (FF, WF, SF) => {
    SF.d(WF, {
      C: () => qW,
      E: () => gW,
      H: () => mW,
      L: () => YF,
      P: () => QF,
      S: () => cW,
      W: () => TF,
      _: () => tW,
      b: () => AF,
      cb: () => aW,
      e: () => MF,
      f: () => oF,
      fb: () => VF,
      h: () => EF,
      l: () => rW,
      n: () => xW,
      o: () => DF,
      p: () => OF,
      t: () => LF,
      w: () => NF,
      y: () => ZF,
      z: () => kW
    });
    var CF = SF(147);
    const AF = {
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

    function uF(FF, WF) {
      return !ArrayBuffer.isView(FF) || FF instanceof DataView ? Array.isArray(FF) ? FF.map((FF => WF(FF))) : FF : Array.from(FF, (FF => WF(FF)))
    }

    function hF(FF) {
      if ("string" !== typeof FF) return FF;
      for (let WF = 0; WF < FF.length; WF++) {
        const SF = FF.charCodeAt(WF);
        if (SF >= 55296 && SF <= 57343) return dF.decode(bW.encode(FF))
      }
      return FF
    }
    const bW = new TextEncoder,
      dF = new TextDecoder;

    function PF(FF) {
      return FF
    }
    let RF;

    function iW(FF) {
      return null === FF || "object" !== typeof FF ? FF : [hF(FF.RC), hF(FF.aY)]
    }

    function eF(FF) {
      return null === FF || "object" !== typeof FF ? FF : [uF(FF.vY, PF), uF(FF.bR, PF)]
    }

    function EF(FF) {
      return null === (WF = FF) || "object" !== typeof WF ? WF : [hF(WF.rb), hF(WF.jH)];
      var WF
    }

    function QF(FF) {
      return null === (WF = FF) || "object" !== typeof WF ? WF : [WF.id, WF.ND];
      var WF
    }

    function rW(FF) {
      return null === (WF = FF) || "object" !== typeof WF ? WF : [WF.rM, hF(WF.gM), WF.VY, hF(WF.ZY), WF.fY, WF.wY, WF.kH, hF(WF.qH), hF(WF.mH)];
      var WF
    }

    function gW(FF) {
      return null === (WF = FF) || "object" !== typeof WF ? WF : [uF(WF.sK, PF), WF.ah];
      var WF
    }

    function tW(FF) {
      return null === (WF = FF) || "object" !== typeof WF ? WF : [uF(WF.bK, (FF => hF(FF))), hF(WF.iK), WF.rK];
      var WF
    }

    function TF(FF) {
      return null === (WF = FF) || "object" !== typeof WF ? WF : [uF(WF.MI, PF), hF(WF.HI), WF.JI];
      var WF
    }

    function aW(FF) {
      return null === (WF = FF) || "object" !== typeof WF ? WF : [hF(WF.ZD), hF(WF.cL)];
      var WF
    }

    function kW(FF) {
      return null === (WF = FF) || "object" !== typeof WF ? WF : [hF(WF.RL)];
      var WF
    }

    function qW(FF) {
      return hF(FF)
    }

    function VF(FF) {
      return null === (WF = FF) || "object" !== typeof WF ? WF : [hF(WF.WU), hF(WF.hU), hF(WF.RC), hF(WF.aY)];
      var WF
    }

    function NF(FF) {
      return iW(FF)
    }

    function DF(FF) {
      return iW(FF)
    }

    function LF(FF) {
      return null === (WF = FF) || "object" !== typeof WF ? WF : [hF(WF.vU)];
      var WF
    }

    function mW(FF) {
      return FF
    }

    function OF(FF) {
      return null === (WF = FF) || "object" !== typeof WF ? WF : [hF(WF.nH), hF(WF.UH)];
      var WF
    }

    function xW(FF) {
      return hF(FF)
    }

    function ZF(FF) {
      return eF(FF)
    }

    function oF(FF) {
      return eF(FF)
    }

    function YF(FF) {
      return null === (WF = FF) || "object" !== typeof WF ? WF : [hF(WF.Fy)];
      var WF
    }

    function MF(FF) {
      return (RF ??= (0, CF.v)().map((FF => FF.name)), RF).map((WF => {
        return "string" === typeof(SF = FF[WF]) ? hF(SF) : uF(SF, PF);
        var SF
      }))
    }

    function cW(FF) {
      return null === (WF = FF) || "object" !== typeof WF ? WF : [WF.HO, WF.vx, WF.iZ];
      var WF
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);