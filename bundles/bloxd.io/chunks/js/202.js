export const id = 202;
export const ids = [202];
export const modules = {
  38585: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => FJ,
      c: () => UJ
    });
    const FJ = "The world isn't loaded, so no blocks can be seen.",
      UJ = "The world isn't loaded, so nothing in it can be seen."
  },
  35822: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => eJ,
      d: () => UJ
    });
    let FJ = () => null;

    function UJ(JJ) {
      FJ = JJ
    }

    function eJ(JJ, cJ) {
      return FJ(JJ, cJ)
    }
  },
  39376: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => GJ,
      h: () => vJ,
      j: () => rJ,
      m: () => fJ
    });
    var FJ = ZJ(17),
      UJ = ZJ(39385),
      eJ = ZJ(39360),
      XJ = ZJ(39394),
      AJ = ZJ(39368),
      qJ = ZJ(39399),
      jJ = ZJ(39410);

    function YJ(JJ) {
      var cJ, ZJ;
      const FJ = (0, eJ.j)();
      return FJ ? null === (cJ = (0, UJ.b)(FJ.api, JJ[0], JJ[1], JJ[2])) || void 0 === cJ || null === (ZJ = cJ.persisted) || void 0 === ZJ ? void 0 : ZJ.shared : void 0
    }

    function hJ(JJ) {
      return `${JJ[0]},${JJ[1]},${JJ[2]}`
    }
    const DJ = new Map;
    let sJ = null,
      nJ = 0;

    function GJ() {
      return nJ
    }

    function fJ(JJ) {
      const cJ = null !== sJ && sJ.key === hJ(JJ.pos) ? sJ.type : null;
      if (null === cJ) return JJ;
      let ZJ = null;
      if ("Iron" === cJ) {
        const {
          cachedPasskey: cJ,
          ...FJ
        } = xJ(JJ.pos);
        ZJ = {
          JX: null !== cJ && void 0 !== cJ ? cJ : [0, 0, 0, 0],
          ...FJ
        }
      }
      return {
        ...JJ,
        type: cJ,
        ironChest: ZJ
      }
    }

    function xJ(JJ) {
      const cJ = YJ(JJ),
        ZJ = null === cJ || void 0 === cJ ? void 0 : cJ.ownerDbId,
        FJ = function(JJ) {
          var cJ;
          let ZJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YJ(JJ);
          const FJ = hJ(JJ),
            UJ = DJ.get(FJ);
          return UJ ? UJ.lastOpened < (null !== (cJ = null === ZJ || void 0 === ZJ ? void 0 : ZJ.passkeyLastUpdated) && void 0 !== cJ ? cJ : 0) ? (DJ.delete(FJ), null) : [...UJ.JX] : null
        }(JJ, cJ);
      return void 0 === ZJ ? {
        cachedPasskey: FJ
      } : {
        ownerDbId: ZJ,
        cachedPasskey: FJ
      }
    }(0, jJ.k)(XJ.e, (JJ => {
      const cJ = (0, qJ.d)(XJ.e, JJ);
      if (!(0, qJ.c)(cJ) || cJ.ZZ) return;
      if (nJ++, !cJ.tc || null === cJ.JZ) return void(sJ = null);
      const ZJ = hJ(cJ.JZ);
      sJ = {
        key: ZJ,
        type: cJ.lc
      }, null !== cJ.cZ && DJ.set(ZJ, {
        JX: [...cJ.cZ],
        lastOpened: Date.now()
      })
    })), (0, jJ.e)((() => {
      DJ.clear(), sJ = null, nJ++
    })), (0, jJ.i)((() => {
      null !== sJ && (sJ = null, nJ++, FJ.i.Uf("chestToggleFromServer", !1, !0))
    }));
    const rJ = {
        boardEditRequested: {
          watch: JJ => (0, FJ.j)("EditBoard", (cJ => {
            let {
              pos: ZJ
            } = cJ;
            if (null === ZJ) return void JJ(null);
            const FJ = (0, eJ.j)(),
              UJ = (0, eJ.u)();
            FJ && UJ && JJ(UJ.readBoardToEdit(FJ.api, FJ.chunks, ZJ))
          }))
        },
        ironChestOpenRequested: {
          watch: JJ => (0, FJ.j)("OpenIronChest", (cJ => {
            let {
              pos: ZJ
            } = cJ;
            JJ(function(JJ) {
              return {
                pos: JJ,
                ...xJ(JJ)
              }
            }(ZJ))
          }))
        }
      },
      vJ = {
        writeOnBoard(JJ) {
          var cJ;
          let {
            pos: ZJ,
            text: FJ,
            textSize: UJ
          } = JJ;
          null === (cJ = (0, eJ.j)()) || void 0 === cJ || cJ.send(AJ.d.UpdateBoard, (0, AJ.bb)({
            Tj: ZJ,
            Cj: FJ,
            uj: UJ
          }))
        },
        writeBook(JJ) {
          var cJ;
          let {
            pages: ZJ,
            title: FJ,
            published: UJ
          } = JJ;
          null === (cJ = (0, eJ.j)()) || void 0 === cJ || cJ.send(AJ.d.UpdateBook, (0, AJ.eb)({
            DY: ZJ,
            sY: FJ,
            GY: UJ
          }))
        },
        writeNameTag(JJ) {
          var cJ;
          null === (cJ = (0, eJ.j)()) || void 0 === cJ || cJ.send(AJ.d.UpdateNameTag, JJ)
        },
        setCustomLobbyBlock(JJ) {
          let {
            pos: cJ,
            blockName: ZJ
          } = JJ;
          const FJ = (0, eJ.u)(),
            UJ = (0, eJ.j)();
          FJ && UJ && UJ.send(AJ.d.SetCustomLobbyBlock, (0, AJ.M)({
            EA: FJ.blockIdOf(ZJ),
            QA: cJ
          }))
        }
      }
  },
  39426: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => qJ,
      f: () => XJ,
      i: () => AJ
    });
    var FJ = ZJ(39354),
      UJ = ZJ(4176),
      eJ = ZJ(39360);

    function XJ() {
      var JJ;
      const cJ = null === (JJ = (0, eJ.j)()) || void 0 === JJ ? void 0 : JJ.api.localId;
      return void 0 === cJ || cJ === FJ.Tc ? null : String(cJ)
    }

    function AJ(JJ) {
      const cJ = (0, eJ.j)();
      if (null !== cJ) return JJ(cJ);
      let ZJ = null;
      const FJ = (0, UJ.s)((() => {
        const cJ = (0, eJ.j)();
        null !== cJ && null === ZJ && (FJ(), ZJ = JJ(cJ))
      }));
      return () => {
        var JJ;
        FJ(), null === (JJ = ZJ) || void 0 === JJ || JJ()
      }
    }

    function qJ(JJ, cJ, ZJ) {
      return {
        current: () => {
          const ZJ = (0, eJ.j)();
          return null === ZJ ? cJ : JJ(ZJ)()
        },
        watch: cJ => AJ((FJ => {
          const UJ = JJ(FJ);
          let eJ = UJ();
          return cJ(eJ), ZJ((() => {
            const JJ = UJ();
            JJ !== eJ && (eJ = JJ, cJ(JJ))
          }))
        }))
      }
    }
  },
  39423: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => jJ
    });
    var FJ = ZJ(39360),
      UJ = ZJ(39426),
      eJ = ZJ(39431);

    function XJ() {
      var JJ, cJ;
      return null !== (JJ = null === (cJ = (0, FJ.j)()) || void 0 === cJ ? void 0 : cJ.itemBridgeSources) && void 0 !== JJ ? JJ : eJ.c
    }

    function AJ(JJ) {
      return {
        current: () => XJ().states[JJ].current(),
        watch: cJ => (0, UJ.i)((ZJ => {
          const FJ = ZJ.itemBridgeSources.states[JJ];
          return cJ(FJ.current()), FJ.watch(cJ)
        }))
      }
    }

    function qJ(JJ) {
      return {
        watch: cJ => (0, UJ.i)((ZJ => ZJ.itemBridgeSources.events[JJ].watch(cJ)))
      }
    }
    const jJ = {
      states: {
        inventory: AJ("inventory"),
        hotbar: AJ("hotbar"),
        crafting: AJ("crafting"),
        heldItemAim: AJ("heldItemAim")
      },
      events: {
        hotbarSlotRequested: qJ("hotbarSlotRequested"),
        hotbarScrolled: qJ("hotbarScrolled"),
        numberKeyPressed: qJ("numberKeyPressed"),
        inventoryDropRequested: qJ("inventoryDropRequested"),
        chestToggled: qJ("chestToggled"),
        chestRefreshed: qJ("chestRefreshed"),
        inventorySynced: qJ("inventorySynced"),
        enchantingTableOpened: qJ("enchantingTableOpened")
      },
      commands: {
        selectHotbarSlot: JJ => XJ().commands.selectHotbarSlot(JJ),
        removeInventoryItem: JJ => XJ().commands.removeInventoryItem(JJ),
        swapInventorySlots: JJ => XJ().commands.swapInventorySlots(JJ),
        moveInventoryItem: JJ => XJ().commands.moveInventoryItem(JJ),
        quickMoveInventoryItem: JJ => XJ().commands.quickMoveInventoryItem(JJ),
        closeChest: JJ => XJ().commands.closeChest(JJ),
        focusCrafting: JJ => XJ().commands.focusCrafting(JJ),
        craftRecipe: JJ => XJ().commands.craftRecipe(JJ),
        salvageItem: JJ => XJ().commands.salvageItem(JJ),
        enchantItem: JJ => XJ().commands.enchantItem(JJ)
      },
      queries: {
        enchantingOffer: JJ => XJ().queries.enchantingOffer(JJ)
      }
    }
  },
  39431: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => AJ
    });
    var FJ = ZJ(38585);

    function UJ(JJ) {
      return {
        current: () => JJ,
        watch: () => () => {}
      }
    }

    function eJ() {}
    const XJ = Object.freeze([0, 0, 0]),
      AJ = {
        states: {
          health: UJ({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: UJ({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: UJ({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: UJ({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: UJ({}),
          creativeVisibility: UJ({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: UJ(null),
          heldItemAim: UJ({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: UJ(!1),
          gliderBoostFuel: UJ(0),
          flight: UJ({
            canFly: !1,
            flying: !1
          }),
          crafting: UJ({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: UJ({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: UJ({}),
          fullInventory: UJ(!1),
          crosshairTarget: UJ({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: UJ(!0),
          replay: UJ(null),
          replayEdits: UJ(null),
          replayRecorder: UJ({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: UJ(!1)
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
          selectHotbarSlot: eJ,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: eJ,
          setInventoryOpen: eJ,
          changeIronChestPasskey: eJ,
          dragReplayCamera: eJ,
          applyTemporaryThirdPerson: eJ,
          holdEmoteWheel: eJ,
          recordFlyingMiddleText: eJ,
          focusCrafting: eJ,
          craftRecipe: () => ({
            jj: 0,
            fA: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: eJ,
          setShopOpen: eJ,
          buyShopItem: eJ,
          sendChatMessage: eJ,
          ignorePlayer: eJ,
          reportPlayer: eJ,
          reportWorldCodeChat: eJ,
          requestDiscordReportKey: eJ,
          reportLobbyOrGame: eJ,
          playEmote: eJ,
          updateMyCosmetic: eJ,
          writeOnBoard: eJ,
          writeBook: eJ,
          writeNameTag: eJ,
          setCustomLobbyBlock: eJ,
          openIronChest: eJ,
          sendCodeCollab: eJ,
          clickCodeBlock: eJ,
          bindCustomButtonKeys: eJ,
          pressCustomButton: eJ,
          moveReplayFreecam: eJ,
          holdReplayFreecamVertical: eJ,
          respawn: eJ,
          wakeUp: eJ,
          requestLeaderboard: eJ,
          completeTask: eJ,
          setServerCookie: eJ,
          answerUiRequest: eJ,
          chooseRewardedAd: eJ,
          setCameraZoom: eJ,
          setCrosshairInteractPrompt: eJ,
          setLookSensitivity: eJ,
          replayAction: eJ,
          setReplayPlaying: eJ,
          seekReplay: eJ,
          setReplayCameraMode: eJ,
          syncReplayCameraMode: eJ,
          setReplayCameraKeyframe: eJ,
          moveReplayCameraKeyframe: eJ,
          deleteReplayCameraKeyframes: eJ,
          setReplayPlaybackMark: eJ,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: eJ,
          exportReplayVideo: eJ,
          toggleRecording: eJ,
          saveClip: eJ,
          setRecorderPrefs: eJ,
          setReplayViewerOpen: eJ
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => FJ.b,
          worldCodeAiGameState: () => FJ.c
        },
        lookups: {
          localPos: () => XJ,
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
  39357: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => yJ,
      e: () => KJ,
      f: () => SJ,
      i: () => VJ,
      k: () => QJ
    });
    var FJ = ZJ(38186),
      UJ = ZJ(1122),
      eJ = ZJ(1725),
      XJ = ZJ(1739),
      AJ = ZJ(2778),
      qJ = ZJ(35822),
      jJ = ZJ(1213),
      YJ = ZJ(39360),
      hJ = ZJ(4217),
      DJ = ZJ(2146),
      sJ = ZJ(39368),
      nJ = ZJ(39376),
      GJ = ZJ(39423);
    let fJ = null;

    function xJ(JJ) {
      const cJ = new Map,
        ZJ = ZJ => {
          if ("string" !== typeof ZJ) return;
          let FJ = cJ.get(ZJ);
          return void 0 === FJ && (FJ = JJ(ZJ), void 0 !== FJ && cJ.set(ZJ, FJ)), FJ
        };
      return new Proxy({}, {
        get: (JJ, cJ) => ZJ(cJ),
        has: (JJ, cJ) => void 0 !== ZJ(cJ)
      })
    }

    function rJ(JJ) {
      const cJ = (0, AJ.c)(JJ);
      return void 0 !== cJ && (0, AJ.e)(cJ) === JJ
    }

    function vJ(JJ) {
      var cJ;
      const ZJ = null === (cJ = (0, YJ.j)()) || void 0 === cJ ? void 0 : cJ.tables;
      if (void 0 === ZJ || !rJ(JJ)) return;
      const FJ = {
          displayName: ZJ.getDisplayName(JJ)
        },
        UJ = ZJ.getItemStat(JJ, "description");
      void 0 !== UJ && null !== UJ && (FJ.description = UJ);
      const {
        rootName: eJ
      } = ZJ.getMetaInfo(JJ);
      eJ !== JJ && (FJ.rootName = eJ);
      const XJ = ZJ.getItemStat(JJ, "armourReduction");
      return void 0 !== XJ && null !== XJ && (FJ.armourReduction = XJ), FJ
    }(0, YJ.x)((JJ => {
      fJ = JJ
    }));
    const mJ = (0, XJ.l)("DisplayName", "Description");

    function QJ() {
      return Boolean(eJ.b.get("useInventory") && eJ.b.get("useFullInventory"))
    }
    let EJ = null;
    const VJ = {
        inventory: function() {
          const JJ = GJ.e.states.inventory;
          let cJ = null;
          const ZJ = JJ => {
            var ZJ;
            return null === JJ.chest ? JJ : ((null === (ZJ = cJ) || void 0 === ZJ ? void 0 : ZJ.from) === JJ && cJ.chestVersion === (0, nJ.e)() || (cJ = {
              from: JJ,
              chestVersion: (0, nJ.e)(),
              view: {
                ...JJ,
                chest: (0, nJ.m)(JJ.chest)
              }
            }), cJ.view)
          };
          return {
            current: () => ZJ(JJ.current()),
            watch: cJ => JJ.watch((JJ => {
              cJ(ZJ(JJ))
            }))
          }
        }(),
        crafting: GJ.e.states.crafting,
        stationItems: {
          current() {
            var JJ;
            return (null === (JJ = EJ) || void 0 === JJ ? void 0 : JJ.namesVersion) !== (0, AJ.h)() && (EJ = {
              namesVersion: (0, AJ.h)(),
              items: {
                enchantable: xJ((JJ => {
                  const cJ = (0, AJ.c)(JJ);
                  return void 0 !== cJ && null !== fJ && fJ.enchantmentPerksOf(cJ).length > 0 || void 0
                })),
                salvageable: xJ((JJ => !(!rJ(JJ) || null === (0, qJ.c)(JJ)) || void 0))
              }
            }), EJ.items
          },
          watch: () => () => {}
        },
        itemInfo: function() {
          let JJ = null;
          const cJ = () => {
            var cJ;
            return (null === (cJ = JJ) || void 0 === cJ ? void 0 : cJ.namesVersion) !== (0, AJ.h)() && (JJ = {
              namesVersion: (0, AJ.h)(),
              infos: xJ(vJ)
            }), JJ.infos
          };
          return {
            current: cJ,
            watch: ZJ => (0, XJ.v)((FJ => {
              FJ.some(mJ) && (JJ = null, ZJ(cJ()))
            }))
          }
        }(),
        creativeVisibility: (0, XJ.r)((function() {
          const JJ = {};
          for (const UJ of null !== (cJ = null === (ZJ = fJ) || void 0 === ZJ ? void 0 : ZJ.creativeItemIds()) && void 0 !== cJ ? cJ : []) {
            var cJ, ZJ, XJ, qJ;
            const jJ = (0, AJ.e)(UJ);
            if (void 0 === jJ) continue;
            const YJ = null !== (XJ = eJ.b.get((0, FJ.e)(jJ, "showInCreativeInven"))) && void 0 !== XJ ? XJ : null === (qJ = fJ) || void 0 === qJ ? void 0 : qJ.showInCreativeInvenOf(UJ);
            "boolean" === typeof YJ && (JJ[jJ] = YJ)
          }
          return {
            publicLobby: (0, UJ.N)((0, jJ.e)().lobbyName),
            shownInGame: JJ
          }
        }), ["connectedGameChanged"], (0, XJ.l)("ShowInCreativeInven")),
        fullInventory: (0, XJ.r)(QJ, [], (0, XJ.n)("useInventory", "useFullInventory"))
      },
      KJ = {
        inventoryDropRequested: GJ.e.events.inventoryDropRequested,
        chestToggled: GJ.e.events.chestToggled,
        chestRefreshed: GJ.e.events.chestRefreshed,
        inventorySynced: GJ.e.events.inventorySynced,
        enchantingTableOpened: GJ.e.events.enchantingTableOpened
      },
      yJ = {
        removeInventoryItem: GJ.e.commands.removeInventoryItem,
        swapInventorySlots: GJ.e.commands.swapInventorySlots,
        moveInventoryItem: GJ.e.commands.moveInventoryItem,
        quickMoveInventoryItem: GJ.e.commands.quickMoveInventoryItem,
        closeChest: GJ.e.commands.closeChest,
        setInventoryOpen(JJ) {
          (0, hJ.g)(DJ.D.InventoryOpen, JJ ? DJ.D.InventoryOpen : 0)
        },
        focusCrafting: GJ.e.commands.focusCrafting,
        craftRecipe: GJ.e.commands.craftRecipe,
        salvageItem: GJ.e.commands.salvageItem,
        enchantItem: GJ.e.commands.enchantItem,
        changeIronChestPasskey(JJ) {
          var cJ;
          let {
            pos: ZJ,
            JX: FJ
          } = JJ;
          null === (cJ = (0, YJ.j)()) || void 0 === cJ || cJ.send(sJ.d.ChangeIronChestPasskey, (0, sJ.j)({
            JZ: ZJ,
            JX: FJ
          }))
        },
        openIronChest(JJ) {
          var cJ;
          let {
            pos: ZJ,
            JX: FJ
          } = JJ;
          null === (cJ = (0, YJ.j)()) || void 0 === cJ || cJ.send(sJ.d.OpenIronChest, (0, sJ.C)({
            JZ: ZJ,
            JX: FJ
          }))
        }
      },
      SJ = {
        enchantingOffer: GJ.e.queries.enchantingOffer
      }
  },
  39417: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => FJ,
      i: () => hJ,
      l: () => AJ,
      p: () => eJ,
      s: () => UJ,
      u: () => qJ,
      v: () => YJ
    });
    class FJ extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function UJ(JJ) {
      return JJ instanceof RangeError && /call stack/i.test(JJ.message) || JJ instanceof Error && "InternalError" === JJ.name && /recursion/i.test(JJ.message)
    }

    function eJ(JJ) {
      return /out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(JJ))
    }
    const XJ = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function AJ(JJ) {
      var cJ;
      return JJ instanceof WebAssembly.RuntimeError || JJ instanceof FJ || UJ(JJ) && XJ.test(null !== (cJ = JJ.stack) && void 0 !== cJ ? cJ : "")
    }

    function qJ(JJ, cJ) {
      if (AJ(JJ)) throw JJ;
      console.error(cJ, JJ)
    }

    function jJ(JJ, cJ, ZJ, UJ, eJ) {
      if (cJ % UJ !== 0 || cJ + ZJ > JJ.byteLength) throw new FJ(`${eJ}: ${ZJ} bytes at ${cJ}, ${UJ}-aligned, outside ${JJ.byteLength} bytes of memory`)
    }

    function YJ(JJ, cJ, ZJ, FJ, UJ) {
      return 0 === ZJ ? null : (jJ(cJ, ZJ, FJ * JJ.BYTES_PER_ELEMENT, JJ.BYTES_PER_ELEMENT, UJ), new JJ(cJ, ZJ, FJ))
    }

    function hJ(JJ, cJ, ZJ, FJ, UJ) {
      return 0 === cJ ? null : (jJ(JJ, cJ, ZJ, FJ, UJ), new DataView(JJ, cJ, ZJ))
    }
  },
  39360: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => FJ,
      g: () => xJ,
      j: () => GJ,
      l: () => fJ,
      o: () => DJ,
      s: () => sJ,
      u: () => YJ,
      x: () => hJ,
      y: () => nJ
    });
    class FJ extends Error {
      constructor(JJ) {
        super(`the join's code did not load: ${JJ instanceof Error?JJ.message:String(JJ)}`, {
          cause: JJ
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === JJ || void 0 === JJ ? void 0 : JJ.request
      }
    }
    let UJ = null,
      eJ = null,
      XJ = null;
    const AJ = [];
    let qJ = null;

    function jJ(JJ, cJ) {
      try {
        JJ(cJ)
      } catch (ZJ) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", ZJ)
      }
    }

    function YJ() {
      return qJ
    }

    function hJ(JJ) {
      AJ.push(JJ), null !== qJ && jJ(JJ, qJ)
    }

    function DJ(JJ) {
      return UJ ??= Promise.all([ZJ.e(64), ZJ.e(88), ZJ.e(199), ZJ.e(126), ZJ.e(222), ZJ.e(200), ZJ.e(201), ZJ.e(86), ZJ.e(228), ZJ.e(251), ZJ.e(177), ZJ.e(186), ZJ.e(129), ZJ.e(79), ZJ.e(107), ZJ.e(226), ZJ.e(49)]).then((() => ZJ(41236))).then((cJ => {
        cJ.loadAudio(JJ), qJ = cJ;
        for (const JJ of AJ) jJ(JJ, cJ);
        return cJ
      })).catch((JJ => {
        throw UJ = null, JJ
      })), UJ
    }
    async function sJ(JJ, cJ) {
      try {
        const ZJ = await DJ(JJ);
        await ZJ.loadClientGame(cJ)
      } catch (ZJ) {
        throw new FJ(ZJ)
      }
    }

    function nJ(JJ, cJ) {
      eJ = {
        running: JJ,
        shell: cJ
      }
    }

    function GJ() {
      return XJ
    }
    async function fJ(JJ) {
      const cJ = eJ;
      if ((null === cJ || void 0 === cJ ? void 0 : cJ.running) !== JJ) throw new Error("the core's session has ended");
      const ZJ = await DJ(cJ.shell.audio).catch((JJ => {
        throw new FJ(JJ)
      }));
      if (null !== XJ) return XJ;
      if (eJ !== cJ || JJ.isStopped) throw new Error("the core stopped while the game code loaded");
      if (XJ = ZJ.startGameHost(JJ, cJ.shell), null === XJ) throw new Error("the core's shared tables didn't read, so the game can't start");
      return XJ
    }

    function xJ() {
      null !== XJ && (null !== qJ ? qJ.endGameHost(XJ) : XJ.closeGame()), XJ = null, eJ = null
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);