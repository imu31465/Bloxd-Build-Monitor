export const id = 216;
export const ids = [216];
export const modules = {
  38931: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => ID,
      i: () => pD
    });
    const ID = "The world isn't loaded, so no blocks can be seen.",
      pD = "The world isn't loaded, so nothing in it can be seen."
  },
  36156: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => iD,
      c: () => pD
    });
    let ID = () => null;

    function pD(DD) {
      ID = DD
    }

    function iD(DD, CD) {
      return ID(DD, CD)
    }
  },
  39703: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => ZD,
      f: () => gD,
      g: () => ND,
      i: () => oD
    });
    var ID = cD(20),
      pD = cD(39709),
      iD = cD(39692),
      fD = cD(39711),
      bD = cD(39701),
      QD = cD(39715),
      wD = cD(39727);

    function SD(DD) {
      var CD, cD;
      const ID = (0, iD.g)();
      return ID ? null === (CD = (0, pD.d)(ID.api, DD[0], DD[1], DD[2])) || void 0 === CD || null === (cD = CD.persisted) || void 0 === cD ? void 0 : cD.shared : void 0
    }

    function BD(DD) {
      return `${DD[0]},${DD[1]},${DD[2]}`
    }
    const yD = new Map;
    let MD = null,
      tD = 0;

    function ZD() {
      return tD
    }

    function oD(DD) {
      const CD = null !== MD && MD.key === BD(DD.pos) ? MD.type : null;
      if (null === CD) return DD;
      let cD = null;
      if ("Iron" === CD) {
        const {
          cachedPasskey: CD,
          ...ID
        } = vD(DD.pos);
        cD = {
          Lw: null !== CD && void 0 !== CD ? CD : [0, 0, 0, 0],
          ...ID
        }
      }
      return {
        ...DD,
        type: CD,
        ironChest: cD
      }
    }

    function vD(DD) {
      const CD = SD(DD),
        cD = null === CD || void 0 === CD ? void 0 : CD.ownerDbId,
        ID = function(DD) {
          var CD;
          let cD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SD(DD);
          const ID = BD(DD),
            pD = yD.get(ID);
          return pD ? pD.lastOpened < (null !== (CD = null === cD || void 0 === cD ? void 0 : cD.passkeyLastUpdated) && void 0 !== CD ? CD : 0) ? (yD.delete(ID), null) : [...pD.Lw] : null
        }(DD, CD);
      return void 0 === cD ? {
        cachedPasskey: ID
      } : {
        ownerDbId: cD,
        cachedPasskey: ID
      }
    }(0, wD.l)(fD.d, (DD => {
      const CD = (0, QD.g)(fD.d, DD);
      if (!(0, QD.e)(CD) || CD.ui) return;
      if (tD++, !CD.ki || null === CD.si) return void(MD = null);
      const cD = BD(CD.si);
      MD = {
        key: cD,
        type: CD.Wi
      }, null !== CD.Ei && yD.set(cD, {
        Lw: [...CD.Ei],
        lastOpened: Date.now()
      })
    })), (0, wD.i)((() => {
      yD.clear(), MD = null, tD++
    })), (0, wD.j)((() => {
      null !== MD && (MD = null, tD++, ID.i.Uo("chestToggleFromServer", !1, !0))
    }));
    const ND = {
        boardEditRequested: {
          watch: DD => (0, ID.k)("EditBoard", (CD => {
            let {
              pos: cD
            } = CD;
            if (null === cD) return void DD(null);
            const ID = (0, iD.g)(),
              pD = (0, iD.q)();
            ID && pD && DD(pD.readBoardToEdit(ID.api, ID.chunks, cD))
          }))
        },
        ironChestOpenRequested: {
          watch: DD => (0, ID.k)("OpenIronChest", (CD => {
            let {
              pos: cD
            } = CD;
            DD(function(DD) {
              return {
                pos: DD,
                ...vD(DD)
              }
            }(cD))
          }))
        }
      },
      gD = {
        writeOnBoard(DD) {
          var CD;
          let {
            pos: cD,
            text: ID,
            textSize: pD
          } = DD;
          null === (CD = (0, iD.g)()) || void 0 === CD || CD.send(bD.e.UpdateBoard, (0, bD.ib)({
            Xf: cD,
            mf: ID,
            Pf: pD
          }))
        },
        writeBook(DD) {
          var CD;
          let {
            pages: cD,
            title: ID,
            published: pD
          } = DD;
          null === (CD = (0, iD.g)()) || void 0 === CD || CD.send(bD.e.UpdateBook, (0, bD.kb)({
            Kb: cD,
            Vb: ID,
            zb: pD
          }))
        },
        writeNameTag(DD) {
          var CD;
          null === (CD = (0, iD.g)()) || void 0 === CD || CD.send(bD.e.UpdateNameTag, DD)
        },
        setCustomLobbyBlock(DD) {
          let {
            pos: CD,
            blockName: cD
          } = DD;
          const ID = (0, iD.q)(),
            pD = (0, iD.g)();
          ID && pD && pD.send(bD.e.SetCustomLobbyBlock, (0, bD.Q)({
            HS: ID.blockIdOf(cD),
            PS: CD
          }))
        }
      }
  },
  39741: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => QD,
      h: () => fD,
      j: () => bD
    });
    var ID = cD(39680),
      pD = cD(4571),
      iD = cD(39692);

    function fD() {
      var DD;
      const CD = null === (DD = (0, iD.g)()) || void 0 === DD ? void 0 : DD.api.localId;
      return void 0 === CD || CD === ID.nd ? null : String(CD)
    }

    function bD(DD) {
      const CD = (0, iD.g)();
      if (null !== CD) return DD(CD);
      let cD = null;
      const ID = (0, pD.t)((() => {
        const CD = (0, iD.g)();
        null !== CD && null === cD && (ID(), cD = DD(CD))
      }));
      return () => {
        var DD;
        ID(), null === (DD = cD) || void 0 === DD || DD()
      }
    }

    function QD(DD, CD, cD) {
      return {
        current: () => {
          const cD = (0, iD.g)();
          return null === cD ? CD : DD(cD)()
        },
        watch: CD => bD((ID => {
          const pD = DD(ID);
          let iD = pD();
          return CD(iD), cD((() => {
            const DD = pD();
            DD !== iD && (iD = DD, CD(DD))
          }))
        }))
      }
    }
  },
  39739: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => wD
    });
    var ID = cD(39692),
      pD = cD(39741),
      iD = cD(39743);

    function fD() {
      var DD, CD;
      return null !== (DD = null === (CD = (0, ID.g)()) || void 0 === CD ? void 0 : CD.itemBridgeSources) && void 0 !== DD ? DD : iD.e
    }

    function bD(DD) {
      return {
        current: () => fD().states[DD].current(),
        watch: CD => (0, pD.j)((cD => {
          const ID = cD.itemBridgeSources.states[DD];
          return CD(ID.current()), ID.watch(CD)
        }))
      }
    }

    function QD(DD) {
      return {
        watch: CD => (0, pD.j)((cD => cD.itemBridgeSources.events[DD].watch(CD)))
      }
    }
    const wD = {
      states: {
        inventory: bD("inventory"),
        hotbar: bD("hotbar"),
        crafting: bD("crafting"),
        heldItemAim: bD("heldItemAim")
      },
      events: {
        hotbarSlotRequested: QD("hotbarSlotRequested"),
        hotbarScrolled: QD("hotbarScrolled"),
        numberKeyPressed: QD("numberKeyPressed"),
        inventoryDropRequested: QD("inventoryDropRequested"),
        chestToggled: QD("chestToggled"),
        chestRefreshed: QD("chestRefreshed"),
        inventorySynced: QD("inventorySynced"),
        enchantingTableOpened: QD("enchantingTableOpened")
      },
      commands: {
        selectHotbarSlot: DD => fD().commands.selectHotbarSlot(DD),
        removeInventoryItem: DD => fD().commands.removeInventoryItem(DD),
        swapInventorySlots: DD => fD().commands.swapInventorySlots(DD),
        moveInventoryItem: DD => fD().commands.moveInventoryItem(DD),
        quickMoveInventoryItem: DD => fD().commands.quickMoveInventoryItem(DD),
        closeChest: DD => fD().commands.closeChest(DD),
        focusCrafting: DD => fD().commands.focusCrafting(DD),
        craftRecipe: DD => fD().commands.craftRecipe(DD),
        salvageItem: DD => fD().commands.salvageItem(DD),
        enchantItem: DD => fD().commands.enchantItem(DD)
      },
      queries: {
        enchantingOffer: DD => fD().queries.enchantingOffer(DD)
      }
    }
  },
  39743: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => bD
    });
    var ID = cD(38931);

    function pD(DD) {
      return {
        current: () => DD,
        watch: () => () => {}
      }
    }

    function iD() {}
    const fD = Object.freeze([0, 0, 0]),
      bD = {
        states: {
          health: pD({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: pD({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: pD({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: pD({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: pD({}),
          creativeVisibility: pD({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: pD(null),
          heldItemAim: pD({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: pD(!1),
          gliderBoostFuel: pD(0),
          flight: pD({
            canFly: !1,
            flying: !1
          }),
          crafting: pD({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: pD({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: pD({}),
          fullInventory: pD(!1),
          crosshairTarget: pD({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: pD(!0),
          freeCamera: pD({
            allowed: !1,
            movesFly: !1
          }),
          replay: pD(null),
          replayEdits: pD(null),
          replayRecorder: pD({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: pD(!1)
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
          selectHotbarSlot: iD,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: iD,
          setInventoryOpen: iD,
          changeIronChestPasskey: iD,
          dragReplayCamera: iD,
          applyTemporaryThirdPerson: iD,
          holdEmoteWheel: iD,
          recordFlyingMiddleText: iD,
          focusCrafting: iD,
          craftRecipe: () => ({
            qS: 0,
            iB: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: iD,
          setShopOpen: iD,
          buyShopItem: iD,
          sendChatMessage: iD,
          ignorePlayer: iD,
          reportPlayer: iD,
          reportWorldCodeChat: iD,
          requestDiscordReportKey: iD,
          reportLobbyOrGame: iD,
          playEmote: iD,
          updateMyCosmetic: iD,
          writeOnBoard: iD,
          writeBook: iD,
          writeNameTag: iD,
          setCustomLobbyBlock: iD,
          openIronChest: iD,
          sendCodeCollab: iD,
          clickCodeBlock: iD,
          bindCustomButtonKeys: iD,
          pressCustomButton: iD,
          moveReplayFreecam: iD,
          holdReplayFreecamVertical: iD,
          respawn: iD,
          wakeUp: iD,
          requestLeaderboard: iD,
          completeTask: iD,
          setServerCookie: iD,
          answerUiRequest: iD,
          chooseRewardedAd: iD,
          setCameraZoom: iD,
          setFreeCameraMovesFly: iD,
          setBlockHighlight: iD,
          setCrosshairInteractPrompt: iD,
          setLookSensitivity: iD,
          replayAction: iD,
          setReplayPlaying: iD,
          seekReplay: iD,
          setReplayCameraMode: iD,
          syncReplayCameraMode: iD,
          setReplayCameraKeyframe: iD,
          moveReplayCameraKeyframe: iD,
          deleteReplayCameraKeyframes: iD,
          setReplayPlaybackMark: iD,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: iD,
          exportReplayVideo: iD,
          toggleRecording: iD,
          saveClip: iD,
          setRecorderPrefs: iD,
          setReplayViewerOpen: iD
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => ID.e,
          worldCodeAiGameState: () => ID.i
        },
        lookups: {
          localPos: () => fD,
          targetedBlockPos: () => null,
          blockAtViewPoint: () => null,
          momentumFrac: () => 0,
          screenPos: () => ({
            x: 0,
            y: 0
          }),
          cameraZoom: () => 0,
          freeCameraPos: () => null,
          blocksStandingOn: () => [],
          dropAhead: () => !1,
          replayCamera: () => null,
          leaveGameReloadsPage: () => !1,
          codeBlockClickable: () => !1
        }
      }
  },
  39688: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => HD,
      f: () => PD,
      i: () => UD,
      j: () => OD,
      m: () => mD
    });
    var ID = cD(38540),
      pD = cD(1221),
      iD = cD(1928),
      fD = cD(1945),
      bD = cD(3083),
      QD = cD(36156),
      wD = cD(1317),
      SD = cD(39692),
      BD = cD(4592),
      yD = cD(2338),
      MD = cD(39701),
      tD = cD(39703),
      ZD = cD(39739);
    let oD = null;

    function vD(DD) {
      const CD = new Map,
        cD = cD => {
          if ("string" !== typeof cD) return;
          let ID = CD.get(cD);
          return void 0 === ID && (ID = DD(cD), void 0 !== ID && CD.set(cD, ID)), ID
        };
      return new Proxy({}, {
        get: (DD, CD) => cD(CD),
        has: (DD, CD) => void 0 !== cD(CD)
      })
    }

    function ND(DD) {
      const CD = (0, bD.e)(DD);
      return void 0 !== CD && (0, bD.h)(CD) === DD
    }

    function gD(DD) {
      var CD;
      const cD = null === (CD = (0, SD.g)()) || void 0 === CD ? void 0 : CD.tables;
      if (void 0 === cD || !ND(DD)) return;
      const ID = {
          displayName: cD.getDisplayName(DD)
        },
        pD = cD.getItemStat(DD, "description");
      void 0 !== pD && null !== pD && (ID.description = pD);
      const {
        rootName: iD
      } = cD.getMetaInfo(DD);
      iD !== DD && (ID.rootName = iD);
      const fD = cD.getItemStat(DD, "armourReduction");
      return void 0 !== fD && null !== fD && (ID.armourReduction = fD), ID
    }(0, SD.r)((DD => {
      oD = DD
    }));
    const XD = (0, fD.j)("DisplayName", "Description");

    function mD() {
      return Boolean(iD.d.get("useInventory") && iD.d.get("useFullInventory"))
    }
    let nD = null;
    const OD = {
        inventory: function() {
          const DD = ZD.e.states.inventory;
          let CD = null;
          const cD = DD => {
            var cD;
            return null === DD.chest ? DD : ((null === (cD = CD) || void 0 === cD ? void 0 : cD.from) === DD && CD.chestVersion === (0, tD.e)() || (CD = {
              from: DD,
              chestVersion: (0, tD.e)(),
              view: {
                ...DD,
                chest: (0, tD.i)(DD.chest)
              }
            }), CD.view)
          };
          return {
            current: () => cD(DD.current()),
            watch: CD => DD.watch((DD => {
              CD(cD(DD))
            }))
          }
        }(),
        crafting: ZD.e.states.crafting,
        stationItems: {
          current() {
            var DD;
            return (null === (DD = nD) || void 0 === DD ? void 0 : DD.namesVersion) !== (0, bD.l)() && (nD = {
              namesVersion: (0, bD.l)(),
              items: {
                enchantable: vD((DD => {
                  const CD = (0, bD.e)(DD);
                  return void 0 !== CD && null !== oD && oD.enchantmentPerksOf(CD).length > 0 || void 0
                })),
                salvageable: vD((DD => !(!ND(DD) || null === (0, QD.b)(DD)) || void 0))
              }
            }), nD.items
          },
          watch: () => () => {}
        },
        itemInfo: function() {
          let DD = null;
          const CD = () => {
            var CD;
            return (null === (CD = DD) || void 0 === CD ? void 0 : CD.namesVersion) !== (0, bD.l)() && (DD = {
              namesVersion: (0, bD.l)(),
              infos: vD(gD)
            }), DD.infos
          };
          return {
            current: CD,
            watch: cD => (0, fD.t)((ID => {
              ID.some(XD) && (DD = null, cD(CD()))
            }))
          }
        }(),
        creativeVisibility: (0, fD.o)((function() {
          const DD = {};
          for (const pD of null !== (CD = null === (cD = oD) || void 0 === cD ? void 0 : cD.creativeItemIds()) && void 0 !== CD ? CD : []) {
            var CD, cD, fD, QD;
            const wD = (0, bD.h)(pD);
            if (void 0 === wD) continue;
            const SD = null !== (fD = iD.d.get((0, ID.d)(wD, "showInCreativeInven"))) && void 0 !== fD ? fD : null === (QD = oD) || void 0 === QD ? void 0 : QD.showInCreativeInvenOf(pD);
            "boolean" === typeof SD && (DD[wD] = SD)
          }
          return {
            publicLobby: (0, pD.N)((0, wD.b)().lobbyName),
            shownInGame: DD
          }
        }), ["connectedGameChanged"], (0, fD.j)("ShowInCreativeInven")),
        fullInventory: (0, fD.o)(mD, [], (0, fD.l)("useInventory", "useFullInventory"))
      },
      PD = {
        inventoryDropRequested: ZD.e.events.inventoryDropRequested,
        chestToggled: ZD.e.events.chestToggled,
        chestRefreshed: ZD.e.events.chestRefreshed,
        inventorySynced: ZD.e.events.inventorySynced,
        enchantingTableOpened: ZD.e.events.enchantingTableOpened
      },
      HD = {
        removeInventoryItem: ZD.e.commands.removeInventoryItem,
        swapInventorySlots: ZD.e.commands.swapInventorySlots,
        moveInventoryItem: ZD.e.commands.moveInventoryItem,
        quickMoveInventoryItem: ZD.e.commands.quickMoveInventoryItem,
        closeChest: ZD.e.commands.closeChest,
        setInventoryOpen(DD) {
          (0, BD.k)(yD.C.InventoryOpen, DD ? yD.C.InventoryOpen : 0)
        },
        focusCrafting: ZD.e.commands.focusCrafting,
        craftRecipe: ZD.e.commands.craftRecipe,
        salvageItem: ZD.e.commands.salvageItem,
        enchantItem: ZD.e.commands.enchantItem,
        changeIronChestPasskey(DD) {
          var CD;
          let {
            pos: cD,
            Lw: ID
          } = DD;
          null === (CD = (0, SD.g)()) || void 0 === CD || CD.send(MD.e.ChangeIronChestPasskey, (0, MD.m)({
            si: cD,
            Lw: ID
          }))
        },
        openIronChest(DD) {
          var CD;
          let {
            pos: cD,
            Lw: ID
          } = DD;
          null === (CD = (0, SD.g)()) || void 0 === CD || CD.send(MD.e.OpenIronChest, (0, MD.I)({
            si: cD,
            Lw: ID
          }))
        }
      },
      UD = {
        enchantingOffer: ZD.e.queries.enchantingOffer
      }
  },
  39730: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => ID,
      h: () => BD,
      j: () => bD,
      k: () => iD,
      n: () => pD,
      o: () => QD,
      r: () => SD
    });
    class ID extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function pD(DD) {
      return DD instanceof RangeError && /call stack/i.test(DD.message) || DD instanceof Error && "InternalError" === DD.name && /recursion/i.test(DD.message)
    }

    function iD(DD) {
      return /out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(DD))
    }
    const fD = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function bD(DD) {
      var CD;
      return DD instanceof WebAssembly.RuntimeError || DD instanceof ID || pD(DD) && fD.test(null !== (CD = DD.stack) && void 0 !== CD ? CD : "")
    }

    function QD(DD, CD) {
      if (bD(DD)) throw DD;
      console.error(CD, DD)
    }

    function wD(DD, CD, cD, pD, iD) {
      if (CD % pD !== 0 || CD + cD > DD.byteLength) throw new ID(`${iD}: ${cD} bytes at ${CD}, ${pD}-aligned, outside ${DD.byteLength} bytes of memory`)
    }

    function SD(DD, CD, cD, ID, pD) {
      return 0 === cD ? null : (wD(CD, cD, ID * DD.BYTES_PER_ELEMENT, DD.BYTES_PER_ELEMENT, pD), new DD(CD, cD, ID))
    }

    function BD(DD, CD, cD, ID, pD) {
      return 0 === CD ? null : (wD(DD, CD, cD, ID, pD), new DataView(DD, CD, cD))
    }
  },
  39692: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => ID,
      d: () => vD,
      g: () => ZD,
      j: () => oD,
      l: () => yD,
      p: () => MD,
      q: () => SD,
      r: () => BD,
      t: () => tD
    });
    class ID extends Error {
      constructor(DD) {
        super(`the join's code did not load: ${DD instanceof Error?DD.message:String(DD)}`, {
          cause: DD
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === DD || void 0 === DD ? void 0 : DD.request
      }
    }
    let pD = null,
      iD = null,
      fD = null;
    const bD = [];
    let QD = null;

    function wD(DD, CD) {
      try {
        DD(CD)
      } catch (cD) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", cD)
      }
    }

    function SD() {
      return QD
    }

    function BD(DD) {
      bD.push(DD), null !== QD && wD(DD, QD)
    }

    function yD(DD) {
      return pD ??= Promise.all([cD.e(69), cD.e(94), cD.e(214), cD.e(74), cD.e(215), cD.e(189), cD.e(93), cD.e(259), cD.e(187), cD.e(262), cD.e(199), cD.e(186), cD.e(200), cD.e(136), cD.e(85), cD.e(114), cD.e(237), cD.e(53)]).then((() => cD(41730))).then((CD => {
        CD.loadAudio(DD), QD = CD;
        for (const DD of bD) wD(DD, CD);
        return CD
      })).catch((DD => {
        throw pD = null, DD
      })), pD
    }
    async function MD(DD, CD) {
      try {
        const cD = await yD(DD);
        await cD.loadClientGame(CD)
      } catch (cD) {
        throw new ID(cD)
      }
    }

    function tD(DD, CD) {
      iD = {
        running: DD,
        shell: CD
      }
    }

    function ZD() {
      return fD
    }
    async function oD(DD) {
      const CD = iD;
      if ((null === CD || void 0 === CD ? void 0 : CD.running) !== DD) throw new Error("the core's session has ended");
      const cD = await yD(CD.shell.audio).catch((DD => {
        throw new ID(DD)
      }));
      if (null !== fD) return fD;
      if (iD !== CD || DD.isStopped) throw new Error("the core stopped while the game code loaded");
      if (fD = cD.startGameHost(DD, CD.shell), null === fD) throw new Error("the core's shared tables didn't read, so the game can't start");
      return fD
    }

    function vD() {
      null !== fD && (null !== QD ? QD.endGameHost(fD) : fD.closeGame()), fD = null, iD = null
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);