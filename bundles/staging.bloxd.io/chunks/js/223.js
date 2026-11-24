export const id = 223;
export const ids = [223];
export const modules = {
  39757: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => hm,
      f: () => Am
    });
    const hm = "The world isn't loaded, so no blocks can be seen.",
      Am = "The world isn't loaded, so nothing in it can be seen."
  },
  39237: (mm, Tm, fm) => {
    function hm(mm) {
      return !(!mm.lobbyLeaderboardInfo && !mm.lobbyManage)
    }
    fm.d(Tm, {
      c: () => hm
    })
  },
  36905: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => am,
      f: () => Am
    });
    let hm = () => null;

    function Am(mm) {
      hm = mm
    }

    function am(mm, Tm) {
      return hm(mm, Tm)
    }
  },
  40677: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Ym,
      e: () => Im,
      i: () => Vm,
      m: () => qm
    });
    var hm = fm(31),
      Am = fm(40681),
      am = fm(40669),
      xm = fm(40684),
      wm = fm(40675),
      Dm = fm(40692),
      im = fm(40709);

    function Rm(mm) {
      var Tm, fm;
      const hm = (0, am.i)();
      return hm ? null === (Tm = (0, Am.d)(hm.api, mm[0], mm[1], mm[2])) || void 0 === Tm || null === (fm = Tm.persisted) || void 0 === fm ? void 0 : fm.shared : void 0
    }

    function pm(mm) {
      return `${mm[0]},${mm[1]},${mm[2]}`
    }
    const Em = new Map;
    let om = null,
      Om = 0;

    function Ym() {
      return Om
    }

    function qm(mm) {
      const Tm = null !== om && om.key === pm(mm.pos) ? om.type : null;
      if (null === Tm) return mm;
      let fm = null;
      if ("Iron" === Tm) {
        const {
          cachedPasskey: Tm,
          ...hm
        } = jm(mm.pos);
        fm = {
          Ox: null !== Tm && void 0 !== Tm ? Tm : [0, 0, 0, 0],
          ...hm
        }
      }
      return {
        ...mm,
        type: Tm,
        ironChest: fm
      }
    }

    function jm(mm) {
      const Tm = Rm(mm),
        fm = null === Tm || void 0 === Tm ? void 0 : Tm.ownerDbId,
        hm = function(mm) {
          var Tm;
          let fm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Rm(mm);
          const hm = pm(mm),
            Am = Em.get(hm);
          return Am ? Am.lastOpened < (null !== (Tm = null === fm || void 0 === fm ? void 0 : fm.passkeyLastUpdated) && void 0 !== Tm ? Tm : 0) ? (Em.delete(hm), null) : [...Am.Ox] : null
        }(mm, Tm);
      return void 0 === fm ? {
        cachedPasskey: hm
      } : {
        ownerDbId: fm,
        cachedPasskey: hm
      }
    }(0, im.g)(xm.e, (mm => {
      const Tm = (0, Dm.f)(xm.e, mm);
      if (!(0, Dm.b)(Tm) || Tm.yh) return;
      if (Om++, !Tm.Nh || null === Tm.Ph) return void(om = null);
      const fm = pm(Tm.Ph);
      om = {
        key: fm,
        type: Tm.Xh
      }, null !== Tm.Hh && Em.set(fm, {
        Ox: [...Tm.Hh],
        lastOpened: Date.now()
      })
    })), (0, im.c)((() => {
      Em.clear(), om = null, Om++
    })), (0, im.e)((() => {
      null !== om && (om = null, Om++, hm.j.gp("chestToggleFromServer", !1, !0))
    }));
    const Vm = {
        boardEditRequested: {
          watch: mm => (0, hm.m)("EditBoard", (Tm => {
            let {
              pos: fm
            } = Tm;
            if (null === fm) return void mm(null);
            const hm = (0, am.i)(),
              Am = (0, am.s)();
            hm && Am && mm(Am.readBoardToEdit(hm.api, hm.chunks, fm))
          }))
        },
        ironChestOpenRequested: {
          watch: mm => (0, hm.m)("OpenIronChest", (Tm => {
            let {
              pos: fm
            } = Tm;
            mm(function(mm) {
              return {
                pos: mm,
                ...jm(mm)
              }
            }(fm))
          }))
        }
      },
      Im = {
        writeOnBoard(mm) {
          var Tm;
          let {
            pos: fm,
            text: hm,
            textSize: Am
          } = mm;
          null === (Tm = (0, am.i)()) || void 0 === Tm || Tm.send(wm.e.UpdateBoard, (0, wm._)({
            Ux: fm,
            gx: hm,
            Wx: Am
          }))
        },
        writeBook(mm) {
          var Tm;
          let {
            pages: fm,
            title: hm,
            published: Am
          } = mm;
          null === (Tm = (0, am.i)()) || void 0 === Tm || Tm.send(wm.e.UpdateBook, (0, wm.ab)({
            Ji: fm,
            zi: hm,
            Zi: Am
          }))
        },
        writeNameTag(mm) {
          var Tm;
          null === (Tm = (0, am.i)()) || void 0 === Tm || Tm.send(wm.e.UpdateNameTag, mm)
        },
        setCustomLobbyBlock(mm) {
          let {
            pos: Tm,
            blockName: fm
          } = mm;
          const hm = (0, am.s)(),
            Am = (0, am.i)();
          hm && Am && Am.send(wm.e.SetCustomLobbyBlock, (0, wm.J)({
            jR: hm.blockIdOf(fm),
            qR: Tm
          }))
        }
      }
  },
  40733: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Dm,
      h: () => xm,
      j: () => wm
    });
    var hm = fm(40663),
      Am = fm(4722),
      am = fm(40669);

    function xm() {
      var mm;
      const Tm = null === (mm = (0, am.i)()) || void 0 === mm ? void 0 : mm.api.localId;
      return void 0 === Tm || Tm === hm.id ? null : String(Tm)
    }

    function wm(mm) {
      const Tm = (0, am.i)();
      if (null !== Tm) return mm(Tm);
      let fm = null;
      const hm = (0, Am.u)((() => {
        const Tm = (0, am.i)();
        null !== Tm && null === fm && (hm(), fm = mm(Tm))
      }));
      return () => {
        var mm;
        hm(), null === (mm = fm) || void 0 === mm || mm()
      }
    }

    function Dm(mm, Tm, fm) {
      return {
        current: () => {
          const fm = (0, am.i)();
          return null === fm ? Tm : mm(fm)()
        },
        watch: Tm => wm((hm => {
          const Am = mm(hm);
          let am = Am();
          return Tm(am), fm((() => {
            const mm = Am();
            mm !== am && (am = mm, Tm(mm))
          }))
        }))
      }
    }
  },
  40724: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => im
    });
    var hm = fm(40669),
      Am = fm(40733),
      am = fm(40740);

    function xm() {
      var mm, Tm;
      return null !== (mm = null === (Tm = (0, hm.i)()) || void 0 === Tm ? void 0 : Tm.itemBridgeSources) && void 0 !== mm ? mm : am.b
    }

    function wm(mm) {
      return {
        current: () => xm().states[mm].current(),
        watch: Tm => (0, Am.j)((fm => {
          const hm = fm.itemBridgeSources.states[mm];
          return Tm(hm.current()), hm.watch(Tm)
        }))
      }
    }

    function Dm(mm) {
      return {
        watch: Tm => (0, Am.j)((fm => fm.itemBridgeSources.events[mm].watch(Tm)))
      }
    }
    const im = {
      states: {
        inventory: wm("inventory"),
        hotbar: wm("hotbar"),
        crafting: wm("crafting"),
        heldItemAim: wm("heldItemAim")
      },
      events: {
        hotbarSlotRequested: Dm("hotbarSlotRequested"),
        hotbarScrolled: Dm("hotbarScrolled"),
        numberKeyPressed: Dm("numberKeyPressed"),
        inventoryDropRequested: Dm("inventoryDropRequested"),
        chestToggled: Dm("chestToggled"),
        chestRefreshed: Dm("chestRefreshed"),
        inventorySynced: Dm("inventorySynced"),
        enchantingTableOpened: Dm("enchantingTableOpened")
      },
      commands: {
        selectHotbarSlot: mm => xm().commands.selectHotbarSlot(mm),
        removeInventoryItem: mm => xm().commands.removeInventoryItem(mm),
        swapInventorySlots: mm => xm().commands.swapInventorySlots(mm),
        moveInventoryItem: mm => xm().commands.moveInventoryItem(mm),
        quickMoveInventoryItem: mm => xm().commands.quickMoveInventoryItem(mm),
        closeChest: mm => xm().commands.closeChest(mm),
        focusCrafting: mm => xm().commands.focusCrafting(mm),
        craftRecipe: mm => xm().commands.craftRecipe(mm),
        salvageItem: mm => xm().commands.salvageItem(mm),
        enchantItem: mm => xm().commands.enchantItem(mm)
      },
      queries: {
        enchantingOffer: mm => xm().queries.enchantingOffer(mm)
      }
    }
  },
  40740: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => wm
    });
    var hm = fm(39757);

    function Am(mm) {
      return {
        current: () => mm,
        watch: () => () => {}
      }
    }

    function am() {}
    const xm = Object.freeze([0, 0, 0]),
      wm = {
        states: {
          health: Am({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: Am({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: Am({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: Am({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: Am({}),
          creativeVisibility: Am({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: Am(null),
          heldItemAim: Am({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: Am(!1),
          gliderBoostFuel: Am(0),
          flight: Am({
            canFly: !1,
            flying: !1
          }),
          crafting: Am({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: Am({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: Am({}),
          fullInventory: Am(!1),
          crosshairTarget: Am({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: Am(!0),
          freeCamera: Am({
            allowed: !1,
            movesFly: !1
          }),
          replay: Am(null),
          replayEdits: Am(null),
          replayRecorder: Am({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: Am(!1)
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
          selectHotbarSlot: am,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: am,
          setInventoryOpen: am,
          changeIronChestPasskey: am,
          dragReplayCamera: am,
          applyTemporaryThirdPerson: am,
          holdEmoteWheel: am,
          recordFlyingMiddleText: am,
          focusCrafting: am,
          craftRecipe: () => ({
            iw: 0,
            Kx: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: am,
          setShopOpen: am,
          buyShopItem: am,
          lobbyManage: am,
          sendChatMessage: am,
          ignorePlayer: am,
          reportPlayer: am,
          reportWorldCodeChat: am,
          requestDiscordReportKey: am,
          reportLobbyOrGame: am,
          playEmote: am,
          updateMyCosmetic: am,
          writeOnBoard: am,
          writeBook: am,
          writeNameTag: am,
          setCustomLobbyBlock: am,
          openIronChest: am,
          sendCodeCollab: am,
          clickCodeBlock: am,
          bindCustomButtonKeys: am,
          pressCustomButton: am,
          moveReplayFreecam: am,
          holdReplayFreecamVertical: am,
          respawn: am,
          wakeUp: am,
          requestLeaderboard: am,
          completeTask: am,
          setServerCookie: am,
          answerUiRequest: am,
          chooseRewardedAd: am,
          setCameraZoom: am,
          setFreeCameraMovesFly: am,
          setBlockHighlight: am,
          setCrosshairInteractPrompt: am,
          setLookSensitivity: am,
          replayAction: am,
          setReplayPlaying: am,
          seekReplay: am,
          setReplayCameraMode: am,
          syncReplayCameraMode: am,
          setReplayCameraKeyframe: am,
          moveReplayCameraKeyframe: am,
          deleteReplayCameraKeyframes: am,
          setReplayPlaybackMark: am,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: am,
          exportReplayVideo: am,
          toggleRecording: am,
          saveClip: am,
          setRecorderPrefs: am,
          setReplayViewerOpen: am
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => hm.b,
          worldCodeAiGameState: () => hm.f
        },
        lookups: {
          localPos: () => xm,
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
  40665: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => zm,
      f: () => cm,
      i: () => Zm,
      j: () => Jm,
      n: () => Qm
    });
    var hm = fm(39366),
      Am = fm(1235),
      am = fm(1928),
      xm = fm(1937),
      wm = fm(3301),
      Dm = fm(36905),
      im = fm(1321),
      Rm = fm(40669),
      pm = fm(4763),
      Em = fm(2364),
      om = fm(40675),
      Om = fm(40677),
      Ym = fm(40724);
    let qm = null;

    function jm(mm) {
      const Tm = new Map,
        fm = fm => {
          if ("string" !== typeof fm) return;
          let hm = Tm.get(fm);
          return void 0 === hm && (hm = mm(fm), void 0 !== hm && Tm.set(fm, hm)), hm
        };
      return new Proxy({}, {
        get: (mm, Tm) => fm(Tm),
        has: (mm, Tm) => void 0 !== fm(Tm)
      })
    }

    function Vm(mm) {
      const Tm = (0, wm.c)(mm);
      return void 0 !== Tm && (0, wm.e)(Tm) === mm
    }

    function Im(mm) {
      var Tm;
      const fm = null === (Tm = (0, Rm.i)()) || void 0 === Tm ? void 0 : Tm.tables;
      if (void 0 === fm || !Vm(mm)) return;
      const hm = {
          displayName: fm.getDisplayName(mm)
        },
        Am = fm.getItemStat(mm, "description");
      void 0 !== Am && null !== Am && (hm.description = Am);
      const {
        rootName: am
      } = fm.getMetaInfo(mm);
      am !== mm && (hm.rootName = am);
      const xm = fm.getItemStat(mm, "armourReduction");
      return void 0 !== xm && null !== xm && (hm.armourReduction = xm), hm
    }(0, Rm.u)((mm => {
      qm = mm
    }));
    const Km = (0, xm.i)("DisplayName", "Description");

    function Qm() {
      return Boolean(am.b.get("useInventory") && am.b.get("useFullInventory"))
    }
    let nm = null;
    const Jm = {
        inventory: function() {
          const mm = Ym.e.states.inventory;
          let Tm = null;
          const fm = mm => {
            var fm;
            return null === mm.chest ? mm : ((null === (fm = Tm) || void 0 === fm ? void 0 : fm.from) === mm && Tm.chestVersion === (0, Om.d)() || (Tm = {
              from: mm,
              chestVersion: (0, Om.d)(),
              view: {
                ...mm,
                chest: (0, Om.m)(mm.chest)
              }
            }), Tm.view)
          };
          return {
            current: () => fm(mm.current()),
            watch: Tm => mm.watch((mm => {
              Tm(fm(mm))
            }))
          }
        }(),
        crafting: Ym.e.states.crafting,
        stationItems: {
          current() {
            var mm;
            return (null === (mm = nm) || void 0 === mm ? void 0 : mm.namesVersion) !== (0, wm.g)() && (nm = {
              namesVersion: (0, wm.g)(),
              items: {
                enchantable: jm((mm => {
                  const Tm = (0, wm.c)(mm);
                  return void 0 !== Tm && null !== qm && qm.enchantmentPerksOf(Tm).length > 0 || void 0
                })),
                salvageable: jm((mm => !(!Vm(mm) || null === (0, Dm.d)(mm)) || void 0))
              }
            }), nm.items
          },
          watch: () => () => {}
        },
        itemInfo: function() {
          let mm = null;
          const Tm = () => {
            var Tm;
            return (null === (Tm = mm) || void 0 === Tm ? void 0 : Tm.namesVersion) !== (0, wm.g)() && (mm = {
              namesVersion: (0, wm.g)(),
              infos: jm(Im)
            }), mm.infos
          };
          return {
            current: Tm,
            watch: fm => (0, xm.q)((hm => {
              hm.some(Km) && (mm = null, fm(Tm()))
            }))
          }
        }(),
        creativeVisibility: (0, xm.m)((function() {
          const mm = {};
          for (const Am of null !== (Tm = null === (fm = qm) || void 0 === fm ? void 0 : fm.creativeItemIds()) && void 0 !== Tm ? Tm : []) {
            var Tm, fm, xm, Dm;
            const im = (0, wm.e)(Am);
            if (void 0 === im) continue;
            const Rm = null !== (xm = am.b.get((0, hm.f)(im, "showInCreativeInven"))) && void 0 !== xm ? xm : null === (Dm = qm) || void 0 === Dm ? void 0 : Dm.showInCreativeInvenOf(Am);
            "boolean" === typeof Rm && (mm[im] = Rm)
          }
          return {
            publicLobby: (0, Am.D)((0, im.d)().lobbyName),
            shownInGame: mm
          }
        }), ["connectedGameChanged"], (0, xm.i)("ShowInCreativeInven")),
        fullInventory: (0, xm.m)(Qm, [], (0, xm.j)("useInventory", "useFullInventory"))
      },
      cm = {
        inventoryDropRequested: Ym.e.events.inventoryDropRequested,
        chestToggled: Ym.e.events.chestToggled,
        chestRefreshed: Ym.e.events.chestRefreshed,
        inventorySynced: Ym.e.events.inventorySynced,
        enchantingTableOpened: Ym.e.events.enchantingTableOpened
      },
      zm = {
        removeInventoryItem: Ym.e.commands.removeInventoryItem,
        swapInventorySlots: Ym.e.commands.swapInventorySlots,
        moveInventoryItem: Ym.e.commands.moveInventoryItem,
        quickMoveInventoryItem: Ym.e.commands.quickMoveInventoryItem,
        closeChest: Ym.e.commands.closeChest,
        setInventoryOpen(mm) {
          (0, pm.h)(Em.w.InventoryOpen, mm ? Em.w.InventoryOpen : 0)
        },
        focusCrafting: Ym.e.commands.focusCrafting,
        craftRecipe: Ym.e.commands.craftRecipe,
        salvageItem: Ym.e.commands.salvageItem,
        enchantItem: Ym.e.commands.enchantItem,
        changeIronChestPasskey(mm) {
          var Tm;
          let {
            pos: fm,
            Ox: hm
          } = mm;
          null === (Tm = (0, Rm.i)()) || void 0 === Tm || Tm.send(om.e.ChangeIronChestPasskey, (0, om.j)({
            Ph: fm,
            Ox: hm
          }))
        },
        openIronChest(mm) {
          var Tm;
          let {
            pos: fm,
            Ox: hm
          } = mm;
          null === (Tm = (0, Rm.i)()) || void 0 === Tm || Tm.send(om.e.OpenIronChest, (0, om.B)({
            Ph: fm,
            Ox: hm
          }))
        }
      },
      Zm = {
        enchantingOffer: Ym.e.queries.enchantingOffer
      }
  },
  40716: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => hm,
      i: () => Rm,
      k: () => xm,
      l: () => Am,
      m: () => wm,
      o: () => im
    });
    class hm extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function Am(mm) {
      return mm instanceof RangeError && /call stack/i.test(mm.message) || mm instanceof Error && "InternalError" === mm.name && /recursion/i.test(mm.message)
    }
    const am = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function xm(mm) {
      var Tm;
      return mm instanceof WebAssembly.RuntimeError || mm instanceof hm || Am(mm) && am.test(null !== (Tm = mm.stack) && void 0 !== Tm ? Tm : "")
    }

    function wm(mm, Tm) {
      if (xm(mm)) throw mm;
      console.error(Tm, mm)
    }

    function Dm(mm, Tm, fm, Am, am) {
      if (Tm % Am !== 0 || Tm + fm > mm.byteLength) throw new hm(`${am}: ${fm} bytes at ${Tm}, ${Am}-aligned, outside ${mm.byteLength} bytes of memory`)
    }

    function im(mm, Tm, fm, hm, Am) {
      return 0 === fm ? null : (Dm(Tm, fm, hm * mm.BYTES_PER_ELEMENT, mm.BYTES_PER_ELEMENT, Am), new mm(Tm, fm, hm))
    }

    function Rm(mm, Tm, fm, hm, Am) {
      return 0 === Tm ? null : (Dm(mm, Tm, fm, hm, Am), new DataView(mm, Tm, fm))
    }
  },
  40669: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => hm,
      f: () => jm,
      i: () => Ym,
      j: () => qm,
      k: () => Em,
      o: () => om,
      s: () => Rm,
      u: () => pm,
      x: () => Om
    });
    class hm extends Error {
      constructor(mm) {
        super(`the join's code did not load: ${mm instanceof Error?mm.message:String(mm)}`, {
          cause: mm
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === mm || void 0 === mm ? void 0 : mm.request
      }
    }
    let Am = null,
      am = null,
      xm = null;
    const wm = [];
    let Dm = null;

    function im(mm, Tm) {
      try {
        mm(Tm)
      } catch (fm) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", fm)
      }
    }

    function Rm() {
      return Dm
    }

    function pm(mm) {
      wm.push(mm), null !== Dm && im(mm, Dm)
    }

    function Em(mm) {
      return Am ??= Promise.all([fm.e(72), fm.e(96), fm.e(221), fm.e(77), fm.e(222), fm.e(198), fm.e(95), fm.e(240), fm.e(269), fm.e(197), fm.e(210), fm.e(189), fm.e(196), fm.e(191), fm.e(142), fm.e(87), fm.e(121), fm.e(247), fm.e(56)]).then((() => fm(42622))).then((Tm => {
        Tm.loadAudio(mm), Dm = Tm;
        for (const mm of wm) im(mm, Tm);
        return Tm
      })).catch((mm => {
        throw Am = null, mm
      })), Am
    }
    async function om(mm, Tm) {
      try {
        const fm = await Em(mm);
        await fm.loadClientGame(Tm)
      } catch (fm) {
        throw new hm(fm)
      }
    }

    function Om(mm, Tm) {
      am = {
        running: mm,
        shell: Tm
      }
    }

    function Ym() {
      return xm
    }
    async function qm(mm) {
      const Tm = am;
      if ((null === Tm || void 0 === Tm ? void 0 : Tm.running) !== mm) throw new Error("the core's session has ended");
      const fm = await Em(Tm.shell.audio).catch((mm => {
        throw new hm(mm)
      }));
      if (null !== xm) return xm;
      if (am !== Tm || mm.isStopped) throw new Error("the core stopped while the game code loaded");
      if (xm = fm.startGameHost(mm, Tm.shell), null === xm) throw new Error("the core's shared tables didn't read, so the game can't start");
      return xm
    }

    function jm() {
      null !== xm && (null !== Dm ? Dm.endGameHost(xm) : xm.closeGame()), xm = null, am = null
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);