export const id = 216;
export const ids = [216];
export const modules = {
  38973: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Fz,
      d: () => Wz
    });
    const Fz = "The world isn't loaded, so no blocks can be seen.",
      Wz = "The world isn't loaded, so nothing in it can be seen."
  },
  36231: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Xz,
      f: () => Wz
    });
    let Fz = () => null;

    function Wz(zz) {
      Fz = zz
    }

    function Xz(zz, tz) {
      return Fz(zz, tz)
    }
  },
  39729: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Dz,
      d: () => Pz,
      h: () => Bz,
      l: () => gz
    });
    var Fz = sz(34),
      Wz = sz(39733),
      Xz = sz(39720),
      Oz = sz(39740),
      oz = sz(39727),
      vz = sz(39748),
      Uz = sz(39765);

    function Kz(zz) {
      var tz, sz;
      const Fz = (0, Xz.f)();
      return Fz ? null === (tz = (0, Wz.e)(Fz.api, zz[0], zz[1], zz[2])) || void 0 === tz || null === (sz = tz.persisted) || void 0 === sz ? void 0 : sz.shared : void 0
    }

    function uz(zz) {
      return `${zz[0]},${zz[1]},${zz[2]}`
    }
    const Nz = new Map;
    let bz = null,
      wz = 0;

    function Dz() {
      return wz
    }

    function gz(zz) {
      const tz = null !== bz && bz.key === uz(zz.pos) ? bz.type : null;
      if (null === tz) return zz;
      let sz = null;
      if ("Iron" === tz) {
        const {
          cachedPasskey: tz,
          ...Fz
        } = Hz(zz.pos);
        sz = {
          SU: null !== tz && void 0 !== tz ? tz : [0, 0, 0, 0],
          ...Fz
        }
      }
      return {
        ...zz,
        type: tz,
        ironChest: sz
      }
    }

    function Hz(zz) {
      const tz = Kz(zz),
        sz = null === tz || void 0 === tz ? void 0 : tz.ownerDbId,
        Fz = function(zz) {
          var tz;
          let sz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Kz(zz);
          const Fz = uz(zz),
            Wz = Nz.get(Fz);
          return Wz ? Wz.lastOpened < (null !== (tz = null === sz || void 0 === sz ? void 0 : sz.passkeyLastUpdated) && void 0 !== tz ? tz : 0) ? (Nz.delete(Fz), null) : [...Wz.SU] : null
        }(zz, tz);
      return void 0 === sz ? {
        cachedPasskey: Fz
      } : {
        ownerDbId: sz,
        cachedPasskey: Fz
      }
    }(0, Uz.l)(Oz.b, (zz => {
      const tz = (0, vz.d)(Oz.b, zz);
      if (!(0, vz.c)(tz) || tz.UO) return;
      if (wz++, !tz.WO || null === tz.oO) return void(bz = null);
      const sz = uz(tz.oO);
      bz = {
        key: sz,
        type: tz.OO
      }, null !== tz.vO && Nz.set(sz, {
        SU: [...tz.vO],
        lastOpened: Date.now()
      })
    })), (0, Uz.g)((() => {
      Nz.clear(), bz = null, wz++
    })), (0, Uz.k)((() => {
      null !== bz && (bz = null, wz++, Fz.o.Yg("chestToggleFromServer", !1, !0))
    }));
    const Bz = {
        boardEditRequested: {
          watch: zz => (0, Fz.q)("EditBoard", (tz => {
            let {
              pos: sz
            } = tz;
            if (null === sz) return void zz(null);
            const Fz = (0, Xz.f)(),
              Wz = (0, Xz.n)();
            Fz && Wz && zz(Wz.readBoardToEdit(Fz.api, Fz.chunks, sz))
          }))
        },
        ironChestOpenRequested: {
          watch: zz => (0, Fz.q)("OpenIronChest", (tz => {
            let {
              pos: sz
            } = tz;
            zz(function(zz) {
              return {
                pos: zz,
                ...Hz(zz)
              }
            }(sz))
          }))
        }
      },
      Pz = {
        writeOnBoard(zz) {
          var tz;
          let {
            pos: sz,
            text: Fz,
            textSize: Wz
          } = zz;
          null === (tz = (0, Xz.f)()) || void 0 === tz || tz.send(oz.d.UpdateBoard, (0, oz.Z)({
            GO: sz,
            cO: Fz,
            jO: Wz
          }))
        },
        writeBook(zz) {
          var tz;
          let {
            pages: sz,
            title: Fz,
            published: Wz
          } = zz;
          null === (tz = (0, Xz.f)()) || void 0 === tz || tz.send(oz.d.UpdateBook, (0, oz.bb)({
            ao: sz,
            qo: Fz,
            Vo: Wz
          }))
        },
        writeNameTag(zz) {
          var tz;
          null === (tz = (0, Xz.f)()) || void 0 === tz || tz.send(oz.d.UpdateNameTag, zz)
        },
        setCustomLobbyBlock(zz) {
          let {
            pos: tz,
            blockName: sz
          } = zz;
          const Fz = (0, Xz.n)(),
            Wz = (0, Xz.f)();
          Fz && Wz && Wz.send(oz.d.SetCustomLobbyBlock, (0, oz.L)({
            yK: Fz.blockIdOf(sz),
            AK: tz
          }))
        }
      }
  },
  39789: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => vz,
      g: () => Oz,
      i: () => oz
    });
    var Fz = sz(39714),
      Wz = sz(4419),
      Xz = sz(39720);

    function Oz() {
      var zz;
      const tz = null === (zz = (0, Xz.f)()) || void 0 === zz ? void 0 : zz.api.localId;
      return void 0 === tz || tz === Fz.dd ? null : String(tz)
    }

    function oz(zz) {
      const tz = (0, Xz.f)();
      if (null !== tz) return zz(tz);
      let sz = null;
      const Fz = (0, Wz.x)((() => {
        const tz = (0, Xz.f)();
        null !== tz && null === sz && (Fz(), sz = zz(tz))
      }));
      return () => {
        var zz;
        Fz(), null === (zz = sz) || void 0 === zz || zz()
      }
    }

    function vz(zz, tz, sz) {
      return {
        current: () => {
          const sz = (0, Xz.f)();
          return null === sz ? tz : zz(sz)()
        },
        watch: tz => oz((Fz => {
          const Wz = zz(Fz);
          let Xz = Wz();
          return tz(Xz), sz((() => {
            const zz = Wz();
            zz !== Xz && (Xz = zz, tz(zz))
          }))
        }))
      }
    }
  },
  39780: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Uz
    });
    var Fz = sz(39720),
      Wz = sz(39789),
      Xz = sz(39794);

    function Oz() {
      var zz, tz;
      return null !== (zz = null === (tz = (0, Fz.f)()) || void 0 === tz ? void 0 : tz.itemBridgeSources) && void 0 !== zz ? zz : Xz.b
    }

    function oz(zz) {
      return {
        current: () => Oz().states[zz].current(),
        watch: tz => (0, Wz.i)((sz => {
          const Fz = sz.itemBridgeSources.states[zz];
          return tz(Fz.current()), Fz.watch(tz)
        }))
      }
    }

    function vz(zz) {
      return {
        watch: tz => (0, Wz.i)((sz => sz.itemBridgeSources.events[zz].watch(tz)))
      }
    }
    const Uz = {
      states: {
        inventory: oz("inventory"),
        hotbar: oz("hotbar"),
        crafting: oz("crafting"),
        heldItemAim: oz("heldItemAim")
      },
      events: {
        hotbarSlotRequested: vz("hotbarSlotRequested"),
        hotbarScrolled: vz("hotbarScrolled"),
        numberKeyPressed: vz("numberKeyPressed"),
        inventoryDropRequested: vz("inventoryDropRequested"),
        chestToggled: vz("chestToggled"),
        chestRefreshed: vz("chestRefreshed"),
        inventorySynced: vz("inventorySynced"),
        enchantingTableOpened: vz("enchantingTableOpened")
      },
      commands: {
        selectHotbarSlot: zz => Oz().commands.selectHotbarSlot(zz),
        removeInventoryItem: zz => Oz().commands.removeInventoryItem(zz),
        swapInventorySlots: zz => Oz().commands.swapInventorySlots(zz),
        moveInventoryItem: zz => Oz().commands.moveInventoryItem(zz),
        quickMoveInventoryItem: zz => Oz().commands.quickMoveInventoryItem(zz),
        closeChest: zz => Oz().commands.closeChest(zz),
        focusCrafting: zz => Oz().commands.focusCrafting(zz),
        craftRecipe: zz => Oz().commands.craftRecipe(zz),
        salvageItem: zz => Oz().commands.salvageItem(zz),
        enchantItem: zz => Oz().commands.enchantItem(zz)
      },
      queries: {
        enchantingOffer: zz => Oz().queries.enchantingOffer(zz)
      }
    }
  },
  39794: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => oz
    });
    var Fz = sz(38973);

    function Wz(zz) {
      return {
        current: () => zz,
        watch: () => () => {}
      }
    }

    function Xz() {}
    const Oz = Object.freeze([0, 0, 0]),
      oz = {
        states: {
          health: Wz({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: Wz({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: Wz({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: Wz({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: Wz({}),
          creativeVisibility: Wz({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: Wz(null),
          heldItemAim: Wz({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: Wz(!1),
          gliderBoostFuel: Wz(0),
          flight: Wz({
            canFly: !1,
            flying: !1
          }),
          crafting: Wz({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: Wz({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: Wz({}),
          fullInventory: Wz(!1),
          crosshairTarget: Wz({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: Wz(!0),
          freeCamera: Wz({
            allowed: !1,
            movesFly: !1
          }),
          replay: Wz(null),
          replayEdits: Wz(null),
          replayRecorder: Wz({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: Wz(!1)
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
          selectHotbarSlot: Xz,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: Xz,
          setInventoryOpen: Xz,
          changeIronChestPasskey: Xz,
          dragReplayCamera: Xz,
          applyTemporaryThirdPerson: Xz,
          holdEmoteWheel: Xz,
          recordFlyingMiddleText: Xz,
          focusCrafting: Xz,
          craftRecipe: () => ({
            hK: 0,
            Nu: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: Xz,
          setShopOpen: Xz,
          buyShopItem: Xz,
          sendChatMessage: Xz,
          ignorePlayer: Xz,
          reportPlayer: Xz,
          reportWorldCodeChat: Xz,
          requestDiscordReportKey: Xz,
          reportLobbyOrGame: Xz,
          playEmote: Xz,
          updateMyCosmetic: Xz,
          writeOnBoard: Xz,
          writeBook: Xz,
          writeNameTag: Xz,
          setCustomLobbyBlock: Xz,
          openIronChest: Xz,
          sendCodeCollab: Xz,
          clickCodeBlock: Xz,
          bindCustomButtonKeys: Xz,
          pressCustomButton: Xz,
          moveReplayFreecam: Xz,
          holdReplayFreecamVertical: Xz,
          respawn: Xz,
          wakeUp: Xz,
          requestLeaderboard: Xz,
          completeTask: Xz,
          setServerCookie: Xz,
          answerUiRequest: Xz,
          chooseRewardedAd: Xz,
          setCameraZoom: Xz,
          setFreeCameraMovesFly: Xz,
          setBlockHighlight: Xz,
          setCrosshairInteractPrompt: Xz,
          setLookSensitivity: Xz,
          replayAction: Xz,
          setReplayPlaying: Xz,
          seekReplay: Xz,
          setReplayCameraMode: Xz,
          syncReplayCameraMode: Xz,
          setReplayCameraKeyframe: Xz,
          moveReplayCameraKeyframe: Xz,
          deleteReplayCameraKeyframes: Xz,
          setReplayPlaybackMark: Xz,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: Xz,
          exportReplayVideo: Xz,
          toggleRecording: Xz,
          saveClip: Xz,
          setRecorderPrefs: Xz,
          setReplayViewerOpen: Xz
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => Fz.c,
          worldCodeAiGameState: () => Fz.d
        },
        lookups: {
          localPos: () => Oz,
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
  39716: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Iz,
      g: () => Jz,
      h: () => Cz,
      l: () => mz,
      o: () => Yz
    });
    var Fz = sz(38620),
      Wz = sz(1213),
      Xz = sz(1884),
      Oz = sz(1896),
      oz = sz(2965),
      vz = sz(36231),
      Uz = sz(1293),
      Kz = sz(39720),
      uz = sz(4450),
      Nz = sz(2273),
      bz = sz(39727),
      wz = sz(39729),
      Dz = sz(39780);
    let gz = null;

    function Hz(zz) {
      const tz = new Map,
        sz = sz => {
          if ("string" !== typeof sz) return;
          let Fz = tz.get(sz);
          return void 0 === Fz && (Fz = zz(sz), void 0 !== Fz && tz.set(sz, Fz)), Fz
        };
      return new Proxy({}, {
        get: (zz, tz) => sz(tz),
        has: (zz, tz) => void 0 !== sz(tz)
      })
    }

    function Bz(zz) {
      const tz = (0, oz.b)(zz);
      return void 0 !== tz && (0, oz.d)(tz) === zz
    }

    function Pz(zz) {
      var tz;
      const sz = null === (tz = (0, Kz.f)()) || void 0 === tz ? void 0 : tz.tables;
      if (void 0 === sz || !Bz(zz)) return;
      const Fz = {
          displayName: sz.getDisplayName(zz)
        },
        Wz = sz.getItemStat(zz, "description");
      void 0 !== Wz && null !== Wz && (Fz.description = Wz);
      const {
        rootName: Xz
      } = sz.getMetaInfo(zz);
      Xz !== zz && (Fz.rootName = Xz);
      const Oz = sz.getItemStat(zz, "armourReduction");
      return void 0 !== Oz && null !== Oz && (Fz.armourReduction = Oz), Fz
    }(0, Kz.q)((zz => {
      gz = zz
    }));
    const rz = (0, Oz.d)("DisplayName", "Description");

    function Yz() {
      return Boolean(Xz.e.get("useInventory") && Xz.e.get("useFullInventory"))
    }
    let xz = null;
    const mz = {
        inventory: function() {
          const zz = Dz.e.states.inventory;
          let tz = null;
          const sz = zz => {
            var sz;
            return null === zz.chest ? zz : ((null === (sz = tz) || void 0 === sz ? void 0 : sz.from) === zz && tz.chestVersion === (0, wz.c)() || (tz = {
              from: zz,
              chestVersion: (0, wz.c)(),
              view: {
                ...zz,
                chest: (0, wz.l)(zz.chest)
              }
            }), tz.view)
          };
          return {
            current: () => sz(zz.current()),
            watch: tz => zz.watch((zz => {
              tz(sz(zz))
            }))
          }
        }(),
        crafting: Dz.e.states.crafting,
        stationItems: {
          current() {
            var zz;
            return (null === (zz = xz) || void 0 === zz ? void 0 : zz.namesVersion) !== (0, oz.h)() && (xz = {
              namesVersion: (0, oz.h)(),
              items: {
                enchantable: Hz((zz => {
                  const tz = (0, oz.b)(zz);
                  return void 0 !== tz && null !== gz && gz.enchantmentPerksOf(tz).length > 0 || void 0
                })),
                salvageable: Hz((zz => !(!Bz(zz) || null === (0, vz.e)(zz)) || void 0))
              }
            }), xz.items
          },
          watch: () => () => {}
        },
        itemInfo: function() {
          let zz = null;
          const tz = () => {
            var tz;
            return (null === (tz = zz) || void 0 === tz ? void 0 : tz.namesVersion) !== (0, oz.h)() && (zz = {
              namesVersion: (0, oz.h)(),
              infos: Hz(Pz)
            }), zz.infos
          };
          return {
            current: tz,
            watch: sz => (0, Oz.n)((Fz => {
              Fz.some(rz) && (zz = null, sz(tz()))
            }))
          }
        }(),
        creativeVisibility: (0, Oz.g)((function() {
          const zz = {};
          for (const Wz of null !== (tz = null === (sz = gz) || void 0 === sz ? void 0 : sz.creativeItemIds()) && void 0 !== tz ? tz : []) {
            var tz, sz, Oz, vz;
            const Uz = (0, oz.d)(Wz);
            if (void 0 === Uz) continue;
            const Kz = null !== (Oz = Xz.e.get((0, Fz.e)(Uz, "showInCreativeInven"))) && void 0 !== Oz ? Oz : null === (vz = gz) || void 0 === vz ? void 0 : vz.showInCreativeInvenOf(Wz);
            "boolean" === typeof Kz && (zz[Uz] = Kz)
          }
          return {
            publicLobby: (0, Wz.L)((0, Uz.d)().lobbyName),
            shownInGame: zz
          }
        }), ["connectedGameChanged"], (0, Oz.d)("ShowInCreativeInven")),
        fullInventory: (0, Oz.g)(Yz, [], (0, Oz.f)("useInventory", "useFullInventory"))
      },
      Jz = {
        inventoryDropRequested: Dz.e.events.inventoryDropRequested,
        chestToggled: Dz.e.events.chestToggled,
        chestRefreshed: Dz.e.events.chestRefreshed,
        inventorySynced: Dz.e.events.inventorySynced,
        enchantingTableOpened: Dz.e.events.enchantingTableOpened
      },
      Iz = {
        removeInventoryItem: Dz.e.commands.removeInventoryItem,
        swapInventorySlots: Dz.e.commands.swapInventorySlots,
        moveInventoryItem: Dz.e.commands.moveInventoryItem,
        quickMoveInventoryItem: Dz.e.commands.quickMoveInventoryItem,
        closeChest: Dz.e.commands.closeChest,
        setInventoryOpen(zz) {
          (0, uz.k)(Nz.x.InventoryOpen, zz ? Nz.x.InventoryOpen : 0)
        },
        focusCrafting: Dz.e.commands.focusCrafting,
        craftRecipe: Dz.e.commands.craftRecipe,
        salvageItem: Dz.e.commands.salvageItem,
        enchantItem: Dz.e.commands.enchantItem,
        changeIronChestPasskey(zz) {
          var tz;
          let {
            pos: sz,
            SU: Fz
          } = zz;
          null === (tz = (0, Kz.f)()) || void 0 === tz || tz.send(bz.d.ChangeIronChestPasskey, (0, bz.g)({
            oO: sz,
            SU: Fz
          }))
        },
        openIronChest(zz) {
          var tz;
          let {
            pos: sz,
            SU: Fz
          } = zz;
          null === (tz = (0, Kz.f)()) || void 0 === tz || tz.send(bz.d.OpenIronChest, (0, bz.F)({
            oO: sz,
            SU: Fz
          }))
        }
      },
      Cz = {
        enchantingOffer: Dz.e.queries.enchantingOffer
      }
  },
  39773: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Fz,
      i: () => uz,
      k: () => oz,
      n: () => Xz,
      o: () => Wz,
      q: () => vz,
      u: () => Kz
    });
    class Fz extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function Wz(zz) {
      return zz instanceof RangeError && /call stack/i.test(zz.message) || zz instanceof Error && "InternalError" === zz.name && /recursion/i.test(zz.message)
    }

    function Xz(zz) {
      return /out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(zz))
    }
    const Oz = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function oz(zz) {
      var tz;
      return zz instanceof WebAssembly.RuntimeError || zz instanceof Fz || Wz(zz) && Oz.test(null !== (tz = zz.stack) && void 0 !== tz ? tz : "")
    }

    function vz(zz, tz) {
      if (oz(zz)) throw zz;
      console.error(tz, zz)
    }

    function Uz(zz, tz, sz, Wz, Xz) {
      if (tz % Wz !== 0 || tz + sz > zz.byteLength) throw new Fz(`${Xz}: ${sz} bytes at ${tz}, ${Wz}-aligned, outside ${zz.byteLength} bytes of memory`)
    }

    function Kz(zz, tz, sz, Fz, Wz) {
      return 0 === sz ? null : (Uz(tz, sz, Fz * zz.BYTES_PER_ELEMENT, zz.BYTES_PER_ELEMENT, Wz), new zz(tz, sz, Fz))
    }

    function uz(zz, tz, sz, Fz, Wz) {
      return 0 === tz ? null : (Uz(zz, tz, sz, Fz, Wz), new DataView(zz, tz, sz))
    }
  },
  39720: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Fz,
      e: () => Hz,
      f: () => Dz,
      g: () => gz,
      i: () => Nz,
      m: () => bz,
      n: () => Kz,
      q: () => uz,
      r: () => wz
    });
    class Fz extends Error {
      constructor(zz) {
        super(`the join's code did not load: ${zz instanceof Error?zz.message:String(zz)}`, {
          cause: zz
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === zz || void 0 === zz ? void 0 : zz.request
      }
    }
    let Wz = null,
      Xz = null,
      Oz = null;
    const oz = [];
    let vz = null;

    function Uz(zz, tz) {
      try {
        zz(tz)
      } catch (sz) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", sz)
      }
    }

    function Kz() {
      return vz
    }

    function uz(zz) {
      oz.push(zz), null !== vz && Uz(zz, vz)
    }

    function Nz(zz) {
      return Wz ??= Promise.all([sz.e(69), sz.e(94), sz.e(214), sz.e(74), sz.e(215), sz.e(189), sz.e(93), sz.e(259), sz.e(187), sz.e(262), sz.e(199), sz.e(186), sz.e(200), sz.e(136), sz.e(85), sz.e(114), sz.e(237), sz.e(53)]).then((() => sz(41646))).then((tz => {
        tz.loadAudio(zz), vz = tz;
        for (const zz of oz) Uz(zz, tz);
        return tz
      })).catch((zz => {
        throw Wz = null, zz
      })), Wz
    }
    async function bz(zz, tz) {
      try {
        const sz = await Nz(zz);
        await sz.loadClientGame(tz)
      } catch (sz) {
        throw new Fz(sz)
      }
    }

    function wz(zz, tz) {
      Xz = {
        running: zz,
        shell: tz
      }
    }

    function Dz() {
      return Oz
    }
    async function gz(zz) {
      const tz = Xz;
      if ((null === tz || void 0 === tz ? void 0 : tz.running) !== zz) throw new Error("the core's session has ended");
      const sz = await Nz(tz.shell.audio).catch((zz => {
        throw new Fz(zz)
      }));
      if (null !== Oz) return Oz;
      if (Xz !== tz || zz.isStopped) throw new Error("the core stopped while the game code loaded");
      if (Oz = sz.startGameHost(zz, tz.shell), null === Oz) throw new Error("the core's shared tables didn't read, so the game can't start");
      return Oz
    }

    function Hz() {
      null !== Oz && (null !== vz ? vz.endGameHost(Oz) : Oz.closeGame()), Oz = null, Xz = null
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);