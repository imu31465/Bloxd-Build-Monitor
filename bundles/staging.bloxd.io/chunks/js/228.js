export const id = 228;
export const ids = [228];
export const modules = {
  39752: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => WT,
      f: () => zT
    });
    const WT = "The world isn't loaded, so no blocks can be seen.",
      zT = "The world isn't loaded, so nothing in it can be seen."
  },
  39251: (TT, UT, mT) => {
    function WT(TT) {
      return !(!TT.lobbyLeaderboardInfo && !TT.lobbyManage)
    }
    mT.d(UT, {
      b: () => WT
    })
  },
  36910: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => MT,
      e: () => zT
    });
    let WT = () => null;

    function zT(TT) {
      WT = TT
    }

    function MT(TT, UT) {
      return WT(TT, UT)
    }
  },
  40734: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => ZT,
      h: () => qT,
      i: () => fT,
      m: () => cT
    });
    var WT = mT(31),
      zT = mT(40743),
      MT = mT(40724),
      gT = mT(40752),
      nT = mT(40731),
      HT = mT(40756),
      kT = mT(40780);

    function jT(TT) {
      var UT, mT;
      const WT = (0, MT.i)();
      return WT ? null === (UT = (0, zT.e)(WT.api, TT[0], TT[1], TT[2])) || void 0 === UT || null === (mT = UT.persisted) || void 0 === mT ? void 0 : mT.shared : void 0
    }

    function lT(TT) {
      return `${TT[0]},${TT[1]},${TT[2]}`
    }
    const LT = new Map;
    let pT = null,
      BT = 0;

    function ZT() {
      return BT
    }

    function cT(TT) {
      const UT = null !== pT && pT.key === lT(TT.pos) ? pT.type : null;
      if (null === UT) return TT;
      let mT = null;
      if ("Iron" === UT) {
        const {
          cachedPasskey: UT,
          ...WT
        } = vT(TT.pos);
        mT = {
          cn: null !== UT && void 0 !== UT ? UT : [0, 0, 0, 0],
          ...WT
        }
      }
      return {
        ...TT,
        type: UT,
        ironChest: mT
      }
    }

    function vT(TT) {
      const UT = jT(TT),
        mT = null === UT || void 0 === UT ? void 0 : UT.ownerDbId,
        WT = function(TT) {
          var UT;
          let mT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jT(TT);
          const WT = lT(TT),
            zT = LT.get(WT);
          return zT ? zT.lastOpened < (null !== (UT = null === mT || void 0 === mT ? void 0 : mT.passkeyLastUpdated) && void 0 !== UT ? UT : 0) ? (LT.delete(WT), null) : [...zT.cn] : null
        }(TT, UT);
      return void 0 === mT ? {
        cachedPasskey: WT
      } : {
        ownerDbId: mT,
        cachedPasskey: WT
      }
    }(0, kT.m)(gT.e, (TT => {
      const UT = (0, HT.h)(gT.e, TT);
      if (!(0, HT.d)(UT) || UT.Gz) return;
      if (BT++, !UT.Vz || null === UT.Kz) return void(pT = null);
      const mT = lT(UT.Kz);
      pT = {
        key: mT,
        type: UT.rz
      }, null !== UT.Sz && LT.set(mT, {
        cn: [...UT.Sz],
        lastOpened: Date.now()
      })
    })), (0, kT.h)((() => {
      LT.clear(), pT = null, BT++
    })), (0, kT.l)((() => {
      null !== pT && (pT = null, BT++, WT.j.EZ("chestToggleFromServer", !1, !0))
    }));
    const fT = {
        boardEditRequested: {
          watch: TT => (0, WT.k)("EditBoard", (UT => {
            let {
              pos: mT
            } = UT;
            if (null === mT) return void TT(null);
            const WT = (0, MT.i)(),
              zT = (0, MT.v)();
            WT && zT && TT(zT.readBoardToEdit(WT.api, WT.chunks, mT))
          }))
        },
        ironChestOpenRequested: {
          watch: TT => (0, WT.k)("OpenIronChest", (UT => {
            let {
              pos: mT
            } = UT;
            TT(function(TT) {
              return {
                pos: TT,
                ...vT(TT)
              }
            }(mT))
          }))
        }
      },
      qT = {
        writeOnBoard(TT) {
          var UT;
          let {
            pos: mT,
            text: WT,
            textSize: zT
          } = TT;
          null === (UT = (0, MT.i)()) || void 0 === UT || UT.send(nT.e.UpdateBoard, (0, nT.db)({
            qH: mT,
            iH: WT,
            bH: zT
          }))
        },
        writeBook(TT) {
          var UT;
          let {
            pages: mT,
            title: WT,
            published: zT
          } = TT;
          null === (UT = (0, MT.i)()) || void 0 === UT || UT.send(nT.e.UpdateBook, (0, nT.gb)({
            Cg: mT,
            rg: WT,
            Kg: zT
          }))
        },
        writeNameTag(TT) {
          var UT;
          null === (UT = (0, MT.i)()) || void 0 === UT || UT.send(nT.e.UpdateNameTag, TT)
        },
        setCustomLobbyBlock(TT) {
          let {
            pos: UT,
            blockName: mT
          } = TT;
          const WT = (0, MT.v)(),
            zT = (0, MT.i)();
          WT && zT && zT.send(nT.e.SetCustomLobbyBlock, (0, nT.Q)({
            Gg: WT.blockIdOf(mT),
            Sg: UT
          }))
        }
      }
  },
  40793: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => HT,
      f: () => gT,
      h: () => nT
    });
    var WT = mT(40709),
      zT = mT(4883),
      MT = mT(40724);

    function gT() {
      var TT;
      const UT = null === (TT = (0, MT.i)()) || void 0 === TT ? void 0 : TT.api.localId;
      return void 0 === UT || UT === WT.Uc ? null : String(UT)
    }

    function nT(TT) {
      const UT = (0, MT.i)();
      if (null !== UT) return TT(UT);
      let mT = null;
      const WT = (0, zT.A)((() => {
        const UT = (0, MT.i)();
        null !== UT && null === mT && (WT(), mT = TT(UT))
      }));
      return () => {
        var TT;
        WT(), null === (TT = mT) || void 0 === TT || TT()
      }
    }

    function HT(TT, UT, mT) {
      return {
        current: () => {
          const mT = (0, MT.i)();
          return null === mT ? UT : TT(mT)()
        },
        watch: UT => nT((WT => {
          const zT = TT(WT);
          let MT = zT();
          return UT(MT), mT((() => {
            const TT = zT();
            TT !== MT && (MT = TT, UT(TT))
          }))
        }))
      }
    }
  },
  40790: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => kT
    });
    var WT = mT(40724),
      zT = mT(40793),
      MT = mT(40798);

    function gT() {
      var TT, UT;
      return null !== (TT = null === (UT = (0, WT.i)()) || void 0 === UT ? void 0 : UT.itemBridgeSources) && void 0 !== TT ? TT : MT.e
    }

    function nT(TT) {
      return {
        current: () => gT().states[TT].current(),
        watch: UT => (0, zT.h)((mT => {
          const WT = mT.itemBridgeSources.states[TT];
          return UT(WT.current()), WT.watch(UT)
        }))
      }
    }

    function HT(TT) {
      return {
        watch: UT => (0, zT.h)((mT => mT.itemBridgeSources.events[TT].watch(UT)))
      }
    }
    const kT = {
      states: {
        inventory: nT("inventory"),
        hotbar: nT("hotbar"),
        crafting: nT("crafting"),
        heldItemAim: nT("heldItemAim")
      },
      events: {
        hotbarSlotRequested: HT("hotbarSlotRequested"),
        hotbarScrolled: HT("hotbarScrolled"),
        numberKeyPressed: HT("numberKeyPressed"),
        inventoryDropRequested: HT("inventoryDropRequested"),
        chestToggled: HT("chestToggled"),
        chestRefreshed: HT("chestRefreshed"),
        inventorySynced: HT("inventorySynced"),
        enchantingTableOpened: HT("enchantingTableOpened")
      },
      commands: {
        selectHotbarSlot: TT => gT().commands.selectHotbarSlot(TT),
        removeInventoryItem: TT => gT().commands.removeInventoryItem(TT),
        swapInventorySlots: TT => gT().commands.swapInventorySlots(TT),
        moveInventoryItem: TT => gT().commands.moveInventoryItem(TT),
        quickMoveInventoryItem: TT => gT().commands.quickMoveInventoryItem(TT),
        closeChest: TT => gT().commands.closeChest(TT),
        focusCrafting: TT => gT().commands.focusCrafting(TT),
        craftRecipe: TT => gT().commands.craftRecipe(TT),
        salvageItem: TT => gT().commands.salvageItem(TT),
        enchantItem: TT => gT().commands.enchantItem(TT)
      },
      queries: {
        enchantingOffer: TT => gT().queries.enchantingOffer(TT)
      }
    }
  },
  40798: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => nT
    });
    var WT = mT(39752);

    function zT(TT) {
      return {
        current: () => TT,
        watch: () => () => {}
      }
    }

    function MT() {}
    const gT = Object.freeze([0, 0, 0]),
      nT = {
        states: {
          health: zT({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: zT({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: zT({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: zT({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: zT({}),
          creativeVisibility: zT({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: zT(null),
          heldItemAim: zT({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: zT(!1),
          gliderBoostFuel: zT(0),
          flight: zT({
            canFly: !1,
            flying: !1
          }),
          crafting: zT({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: zT({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: zT({}),
          fullInventory: zT(!1),
          crosshairTarget: zT({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: zT(!0),
          freeCamera: zT({
            allowed: !1,
            movesFly: !1
          }),
          replay: zT(null),
          replayEdits: zT(null),
          replayRecorder: zT({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: zT(!1)
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
          selectHotbarSlot: MT,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: MT,
          setInventoryOpen: MT,
          changeIronChestPasskey: MT,
          dragReplayCamera: MT,
          applyTemporaryThirdPerson: MT,
          holdEmoteWheel: MT,
          recordFlyingMiddleText: MT,
          focusCrafting: MT,
          craftRecipe: () => ({
            Yj: 0,
            Dn: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: MT,
          setShopOpen: MT,
          buyShopItem: MT,
          lobbyManage: MT,
          sendChatMessage: MT,
          ignorePlayer: MT,
          reportPlayer: MT,
          reportWorldCodeChat: MT,
          requestDiscordReportKey: MT,
          reportLobbyOrGame: MT,
          playEmote: MT,
          updateMyCosmetic: MT,
          writeOnBoard: MT,
          writeBook: MT,
          writeNameTag: MT,
          setCustomLobbyBlock: MT,
          openIronChest: MT,
          sendCodeCollab: MT,
          clickCodeBlock: MT,
          bindCustomButtonKeys: MT,
          pressCustomButton: MT,
          moveReplayFreecam: MT,
          holdReplayFreecamVertical: MT,
          respawn: MT,
          wakeUp: MT,
          requestLeaderboard: MT,
          completeTask: MT,
          setServerCookie: MT,
          answerUiRequest: MT,
          chooseRewardedAd: MT,
          setCameraZoom: MT,
          setFreeCameraMovesFly: MT,
          setBlockHighlight: MT,
          setCrosshairInteractPrompt: MT,
          setLookSensitivity: MT,
          replayAction: MT,
          setReplayPlaying: MT,
          seekReplay: MT,
          setReplayCameraMode: MT,
          syncReplayCameraMode: MT,
          setReplayCameraKeyframe: MT,
          moveReplayCameraKeyframe: MT,
          deleteReplayCameraKeyframes: MT,
          setReplayPlaybackMark: MT,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: MT,
          exportReplayVideo: MT,
          toggleRecording: MT,
          saveClip: MT,
          setRecorderPrefs: MT,
          setReplayViewerOpen: MT
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => WT.b,
          worldCodeAiGameState: () => WT.f
        },
        lookups: {
          localPos: () => gT,
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
  40717: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => JT,
      f: () => YT,
      h: () => xT,
      j: () => eT,
      n: () => bT
    });
    var WT = mT(39366),
      zT = mT(1321),
      MT = mT(2067),
      gT = mT(2085),
      nT = mT(3411),
      HT = mT(36910),
      kT = mT(1429),
      jT = mT(40724),
      lT = mT(4915),
      LT = mT(2522),
      pT = mT(40731),
      BT = mT(40734),
      ZT = mT(40790);
    let cT = null;

    function vT(TT) {
      const UT = new Map,
        mT = mT => {
          if ("string" !== typeof mT) return;
          let WT = UT.get(mT);
          return void 0 === WT && (WT = TT(mT), void 0 !== WT && UT.set(mT, WT)), WT
        };
      return new Proxy({}, {
        get: (TT, UT) => mT(UT),
        has: (TT, UT) => void 0 !== mT(UT)
      })
    }

    function fT(TT) {
      const UT = (0, nT.c)(TT);
      return void 0 !== UT && (0, nT.f)(UT) === TT
    }

    function qT(TT) {
      var UT;
      const mT = null === (UT = (0, jT.i)()) || void 0 === UT ? void 0 : UT.tables;
      if (void 0 === mT || !fT(TT)) return;
      const WT = {
          displayName: mT.getDisplayName(TT)
        },
        zT = mT.getItemStat(TT, "description");
      void 0 !== zT && null !== zT && (WT.description = zT);
      const {
        rootName: MT
      } = mT.getMetaInfo(TT);
      MT !== TT && (WT.rootName = MT);
      const gT = mT.getItemStat(TT, "armourReduction");
      return void 0 !== gT && null !== gT && (WT.armourReduction = gT), WT
    }(0, jT.w)((TT => {
      cT = TT
    }));
    const iT = (0, gT.k)("DisplayName", "Description");

    function bT() {
      return Boolean(MT.d.get("useInventory") && MT.d.get("useFullInventory"))
    }
    let OT = null;
    const eT = {
        inventory: function() {
          const TT = ZT.b.states.inventory;
          let UT = null;
          const mT = TT => {
            var mT;
            return null === TT.chest ? TT : ((null === (mT = UT) || void 0 === mT ? void 0 : mT.from) === TT && UT.chestVersion === (0, BT.d)() || (UT = {
              from: TT,
              chestVersion: (0, BT.d)(),
              view: {
                ...TT,
                chest: (0, BT.m)(TT.chest)
              }
            }), UT.view)
          };
          return {
            current: () => mT(TT.current()),
            watch: UT => TT.watch((TT => {
              UT(mT(TT))
            }))
          }
        }(),
        crafting: ZT.b.states.crafting,
        stationItems: {
          current() {
            var TT;
            return (null === (TT = OT) || void 0 === TT ? void 0 : TT.namesVersion) !== (0, nT.h)() && (OT = {
              namesVersion: (0, nT.h)(),
              items: {
                enchantable: vT((TT => {
                  const UT = (0, nT.c)(TT);
                  return void 0 !== UT && null !== cT && cT.enchantmentPerksOf(UT).length > 0 || void 0
                })),
                salvageable: vT((TT => !(!fT(TT) || null === (0, HT.c)(TT)) || void 0))
              }
            }), OT.items
          },
          watch: () => () => {}
        },
        itemInfo: function() {
          let TT = null;
          const UT = () => {
            var UT;
            return (null === (UT = TT) || void 0 === UT ? void 0 : UT.namesVersion) !== (0, nT.h)() && (TT = {
              namesVersion: (0, nT.h)(),
              infos: vT(qT)
            }), TT.infos
          };
          return {
            current: UT,
            watch: mT => (0, gT.s)((WT => {
              WT.some(iT) && (TT = null, mT(UT()))
            }))
          }
        }(),
        creativeVisibility: (0, gT.n)((function() {
          const TT = {};
          for (const zT of null !== (UT = null === (mT = cT) || void 0 === mT ? void 0 : mT.creativeItemIds()) && void 0 !== UT ? UT : []) {
            var UT, mT, gT, HT;
            const kT = (0, nT.f)(zT);
            if (void 0 === kT) continue;
            const jT = null !== (gT = MT.d.get((0, WT.e)(kT, "showInCreativeInven"))) && void 0 !== gT ? gT : null === (HT = cT) || void 0 === HT ? void 0 : HT.showInCreativeInvenOf(zT);
            "boolean" === typeof jT && (TT[kT] = jT)
          }
          return {
            publicLobby: (0, zT.S)((0, kT.c)().lobbyName),
            shownInGame: TT
          }
        }), ["connectedGameChanged"], (0, gT.k)("ShowInCreativeInven")),
        fullInventory: (0, gT.n)(bT, [], (0, gT.l)("useInventory", "useFullInventory"))
      },
      YT = {
        inventoryDropRequested: ZT.b.events.inventoryDropRequested,
        chestToggled: ZT.b.events.chestToggled,
        chestRefreshed: ZT.b.events.chestRefreshed,
        inventorySynced: ZT.b.events.inventorySynced,
        enchantingTableOpened: ZT.b.events.enchantingTableOpened
      },
      JT = {
        removeInventoryItem: ZT.b.commands.removeInventoryItem,
        swapInventorySlots: ZT.b.commands.swapInventorySlots,
        moveInventoryItem: ZT.b.commands.moveInventoryItem,
        quickMoveInventoryItem: ZT.b.commands.quickMoveInventoryItem,
        closeChest: ZT.b.commands.closeChest,
        setInventoryOpen(TT) {
          (0, lT.g)(LT.y.InventoryOpen, TT ? LT.y.InventoryOpen : 0)
        },
        focusCrafting: ZT.b.commands.focusCrafting,
        craftRecipe: ZT.b.commands.craftRecipe,
        salvageItem: ZT.b.commands.salvageItem,
        enchantItem: ZT.b.commands.enchantItem,
        changeIronChestPasskey(TT) {
          var UT;
          let {
            pos: mT,
            cn: WT
          } = TT;
          null === (UT = (0, jT.i)()) || void 0 === UT || UT.send(pT.e.ChangeIronChestPasskey, (0, pT.h)({
            Kz: mT,
            cn: WT
          }))
        },
        openIronChest(TT) {
          var UT;
          let {
            pos: mT,
            cn: WT
          } = TT;
          null === (UT = (0, jT.i)()) || void 0 === UT || UT.send(pT.e.OpenIronChest, (0, pT.H)({
            Kz: mT,
            cn: WT
          }))
        }
      },
      xT = {
        enchantingOffer: ZT.b.queries.enchantingOffer
      }
  },
  40786: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => WT,
      e: () => jT,
      h: () => gT,
      i: () => zT,
      l: () => nT,
      o: () => kT
    });
    class WT extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function zT(TT) {
      return TT instanceof RangeError && /call stack/i.test(TT.message) || TT instanceof Error && "InternalError" === TT.name && /recursion/i.test(TT.message)
    }
    const MT = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function gT(TT) {
      var UT;
      return TT instanceof WebAssembly.RuntimeError || TT instanceof WT || zT(TT) && MT.test(null !== (UT = TT.stack) && void 0 !== UT ? UT : "")
    }

    function nT(TT, UT) {
      if (gT(TT)) throw TT;
      console.error(UT, TT)
    }

    function HT(TT, UT, mT, zT, MT) {
      if (UT % zT !== 0 || UT + mT > TT.byteLength) throw new WT(`${MT}: ${mT} bytes at ${UT}, ${zT}-aligned, outside ${TT.byteLength} bytes of memory`)
    }

    function kT(TT, UT, mT, WT, zT) {
      return 0 === mT ? null : (HT(UT, mT, WT * TT.BYTES_PER_ELEMENT, TT.BYTES_PER_ELEMENT, zT), new TT(UT, mT, WT))
    }

    function jT(TT, UT, mT, WT, zT) {
      return 0 === UT ? null : (HT(TT, UT, mT, WT, zT), new DataView(TT, UT, mT))
    }
  },
  40724: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => WT,
      f: () => vT,
      i: () => ZT,
      m: () => cT,
      o: () => LT,
      s: () => pT,
      v: () => jT,
      w: () => lT,
      x: () => BT
    });
    class WT extends Error {
      constructor(TT) {
        super(`the join's code did not load: ${TT instanceof Error?TT.message:String(TT)}`, {
          cause: TT
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === TT || void 0 === TT ? void 0 : TT.request
      }
    }
    let zT = null,
      MT = null,
      gT = null;
    const nT = [];
    let HT = null;

    function kT(TT, UT) {
      try {
        TT(UT)
      } catch (mT) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", mT)
      }
    }

    function jT() {
      return HT
    }

    function lT(TT) {
      nT.push(TT), null !== HT && kT(TT, HT)
    }

    function LT(TT) {
      return zT ??= Promise.all([mT.e(73), mT.e(98), mT.e(226), mT.e(78), mT.e(227), mT.e(201), mT.e(97), mT.e(246), mT.e(273), mT.e(199), mT.e(214), mT.e(191), mT.e(198), mT.e(193), mT.e(144), mT.e(88), mT.e(122), mT.e(252), mT.e(57)]).then((() => mT(42743))).then((UT => {
        UT.loadAudio(TT), HT = UT;
        for (const TT of nT) kT(TT, UT);
        return UT
      })).catch((TT => {
        throw zT = null, TT
      })), zT
    }
    async function pT(TT, UT) {
      try {
        const mT = await LT(TT);
        await mT.loadClientGame(UT)
      } catch (mT) {
        throw new WT(mT)
      }
    }

    function BT(TT, UT) {
      MT = {
        running: TT,
        shell: UT
      }
    }

    function ZT() {
      return gT
    }
    async function cT(TT) {
      const UT = MT;
      if ((null === UT || void 0 === UT ? void 0 : UT.running) !== TT) throw new Error("the core's session has ended");
      const mT = await LT(UT.shell.audio).catch((TT => {
        throw new WT(TT)
      }));
      if (null !== gT) return gT;
      if (MT !== UT || TT.isStopped) throw new Error("the core stopped while the game code loaded");
      if (gT = mT.startGameHost(TT, UT.shell), null === gT) throw new Error("the core's shared tables didn't read, so the game can't start");
      return gT
    }

    function vT() {
      null !== gT && (null !== HT ? HT.endGameHost(gT) : gT.closeGame()), gT = null, MT = null
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);