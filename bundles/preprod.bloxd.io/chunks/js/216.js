export const id = 216;
export const ids = [216];
export const modules = {
  38974: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Ez,
      h: () => nz
    });
    const Ez = "The world isn't loaded, so no blocks can be seen.",
      nz = "The world isn't loaded, so nothing in it can be seen."
  },
  36237: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => iz,
      e: () => nz
    });
    let Ez = () => null;

    function nz(zz) {
      Ez = zz
    }

    function iz(zz, uz) {
      return Ez(zz, uz)
    }
  },
  39765: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Rz,
      e: () => fz,
      h: () => Xz,
      l: () => Kz
    });
    var Ez = bz(22),
      nz = bz(39769),
      iz = bz(39750),
      lz = bz(39776),
      Mz = bz(39758),
      tz = bz(39779),
      Hz = bz(39798);

    function Oz(zz) {
      var uz, bz;
      const Ez = (0, iz.j)();
      return Ez ? null === (uz = (0, nz.b)(Ez.api, zz[0], zz[1], zz[2])) || void 0 === uz || null === (bz = uz.persisted) || void 0 === bz ? void 0 : bz.shared : void 0
    }

    function pz(zz) {
      return `${zz[0]},${zz[1]},${zz[2]}`
    }
    const dz = new Map;
    let Fz = null,
      Zz = 0;

    function Rz() {
      return Zz
    }

    function Kz(zz) {
      const uz = null !== Fz && Fz.key === pz(zz.pos) ? Fz.type : null;
      if (null === uz) return zz;
      let bz = null;
      if ("Iron" === uz) {
        const {
          cachedPasskey: uz,
          ...Ez
        } = wz(zz.pos);
        bz = {
          jH: null !== uz && void 0 !== uz ? uz : [0, 0, 0, 0],
          ...Ez
        }
      }
      return {
        ...zz,
        type: uz,
        ironChest: bz
      }
    }

    function wz(zz) {
      const uz = Oz(zz),
        bz = null === uz || void 0 === uz ? void 0 : uz.ownerDbId,
        Ez = function(zz) {
          var uz;
          let bz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Oz(zz);
          const Ez = pz(zz),
            nz = dz.get(Ez);
          return nz ? nz.lastOpened < (null !== (uz = null === bz || void 0 === bz ? void 0 : bz.passkeyLastUpdated) && void 0 !== uz ? uz : 0) ? (dz.delete(Ez), null) : [...nz.jH] : null
        }(zz, uz);
      return void 0 === bz ? {
        cachedPasskey: Ez
      } : {
        ownerDbId: bz,
        cachedPasskey: Ez
      }
    }(0, Hz.i)(lz.e, (zz => {
      const uz = (0, tz.i)(lz.e, zz);
      if (!(0, tz.e)(uz) || uz.Fl) return;
      if (Zz++, !uz.tl || null === uz.pl) return void(Fz = null);
      const bz = pz(uz.pl);
      Fz = {
        key: bz,
        type: uz.Ol
      }, null !== uz.dl && dz.set(bz, {
        jH: [...uz.dl],
        lastOpened: Date.now()
      })
    })), (0, Hz.d)((() => {
      dz.clear(), Fz = null, Zz++
    })), (0, Hz.h)((() => {
      null !== Fz && (Fz = null, Zz++, Ez.k.sK("chestToggleFromServer", !1, !0))
    }));
    const Xz = {
        boardEditRequested: {
          watch: zz => (0, Ez.o)("EditBoard", (uz => {
            let {
              pos: bz
            } = uz;
            if (null === bz) return void zz(null);
            const Ez = (0, iz.j)(),
              nz = (0, iz.q)();
            Ez && nz && zz(nz.readBoardToEdit(Ez.api, Ez.chunks, bz))
          }))
        },
        ironChestOpenRequested: {
          watch: zz => (0, Ez.o)("OpenIronChest", (uz => {
            let {
              pos: bz
            } = uz;
            zz(function(zz) {
              return {
                pos: zz,
                ...wz(zz)
              }
            }(bz))
          }))
        }
      },
      fz = {
        writeOnBoard(zz) {
          var uz;
          let {
            pos: bz,
            text: Ez,
            textSize: nz
          } = zz;
          null === (uz = (0, iz.j)()) || void 0 === uz || uz.send(Mz.d.UpdateBoard, (0, Mz.S)({
            ql: bz,
            hl: Ez,
            Ul: nz
          }))
        },
        writeBook(zz) {
          var uz;
          let {
            pages: bz,
            title: Ez,
            published: nz
          } = zz;
          null === (uz = (0, iz.j)()) || void 0 === uz || uz.send(Mz.d.UpdateBook, (0, Mz.U)({
            UM: bz,
            cM: Ez,
            gM: nz
          }))
        },
        writeNameTag(zz) {
          var uz;
          null === (uz = (0, iz.j)()) || void 0 === uz || uz.send(Mz.d.UpdateNameTag, zz)
        },
        setCustomLobbyBlock(zz) {
          let {
            pos: uz,
            blockName: bz
          } = zz;
          const Ez = (0, iz.q)(),
            nz = (0, iz.j)();
          Ez && nz && nz.send(Mz.d.SetCustomLobbyBlock, (0, Mz.F)({
            hO: Ez.blockIdOf(bz),
            qO: uz
          }))
        }
      }
  },
  39815: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => tz,
      g: () => lz,
      k: () => Mz
    });
    var Ez = bz(39740),
      nz = bz(4544),
      iz = bz(39750);

    function lz() {
      var zz;
      const uz = null === (zz = (0, iz.j)()) || void 0 === zz ? void 0 : zz.api.localId;
      return void 0 === uz || uz === Ez.bd ? null : String(uz)
    }

    function Mz(zz) {
      const uz = (0, iz.j)();
      if (null !== uz) return zz(uz);
      let bz = null;
      const Ez = (0, nz.w)((() => {
        const uz = (0, iz.j)();
        null !== uz && null === bz && (Ez(), bz = zz(uz))
      }));
      return () => {
        var zz;
        Ez(), null === (zz = bz) || void 0 === zz || zz()
      }
    }

    function tz(zz, uz, bz) {
      return {
        current: () => {
          const bz = (0, iz.j)();
          return null === bz ? uz : zz(bz)()
        },
        watch: uz => Mz((Ez => {
          const nz = zz(Ez);
          let iz = nz();
          return uz(iz), bz((() => {
            const zz = nz();
            zz !== iz && (iz = zz, uz(zz))
          }))
        }))
      }
    }
  },
  39806: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Hz
    });
    var Ez = bz(39750),
      nz = bz(39815),
      iz = bz(39823);

    function lz() {
      var zz, uz;
      return null !== (zz = null === (uz = (0, Ez.j)()) || void 0 === uz ? void 0 : uz.itemBridgeSources) && void 0 !== zz ? zz : iz.e
    }

    function Mz(zz) {
      return {
        current: () => lz().states[zz].current(),
        watch: uz => (0, nz.k)((bz => {
          const Ez = bz.itemBridgeSources.states[zz];
          return uz(Ez.current()), Ez.watch(uz)
        }))
      }
    }

    function tz(zz) {
      return {
        watch: uz => (0, nz.k)((bz => bz.itemBridgeSources.events[zz].watch(uz)))
      }
    }
    const Hz = {
      states: {
        inventory: Mz("inventory"),
        hotbar: Mz("hotbar"),
        crafting: Mz("crafting"),
        heldItemAim: Mz("heldItemAim")
      },
      events: {
        hotbarSlotRequested: tz("hotbarSlotRequested"),
        hotbarScrolled: tz("hotbarScrolled"),
        numberKeyPressed: tz("numberKeyPressed"),
        inventoryDropRequested: tz("inventoryDropRequested"),
        chestToggled: tz("chestToggled"),
        chestRefreshed: tz("chestRefreshed"),
        inventorySynced: tz("inventorySynced"),
        enchantingTableOpened: tz("enchantingTableOpened")
      },
      commands: {
        selectHotbarSlot: zz => lz().commands.selectHotbarSlot(zz),
        removeInventoryItem: zz => lz().commands.removeInventoryItem(zz),
        swapInventorySlots: zz => lz().commands.swapInventorySlots(zz),
        moveInventoryItem: zz => lz().commands.moveInventoryItem(zz),
        quickMoveInventoryItem: zz => lz().commands.quickMoveInventoryItem(zz),
        closeChest: zz => lz().commands.closeChest(zz),
        focusCrafting: zz => lz().commands.focusCrafting(zz),
        craftRecipe: zz => lz().commands.craftRecipe(zz),
        salvageItem: zz => lz().commands.salvageItem(zz),
        enchantItem: zz => lz().commands.enchantItem(zz)
      },
      queries: {
        enchantingOffer: zz => lz().queries.enchantingOffer(zz)
      }
    }
  },
  39823: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Mz
    });
    var Ez = bz(38974);

    function nz(zz) {
      return {
        current: () => zz,
        watch: () => () => {}
      }
    }

    function iz() {}
    const lz = Object.freeze([0, 0, 0]),
      Mz = {
        states: {
          health: nz({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: nz({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: nz({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: nz({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: nz({}),
          creativeVisibility: nz({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: nz(null),
          heldItemAim: nz({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: nz(!1),
          gliderBoostFuel: nz(0),
          flight: nz({
            canFly: !1,
            flying: !1
          }),
          crafting: nz({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: nz({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: nz({}),
          fullInventory: nz(!1),
          crosshairTarget: nz({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: nz(!0),
          freeCamera: nz({
            allowed: !1,
            movesFly: !1
          }),
          replay: nz(null),
          replayEdits: nz(null),
          replayRecorder: nz({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: nz(!1)
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
          selectHotbarSlot: iz,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: iz,
          setInventoryOpen: iz,
          changeIronChestPasskey: iz,
          dragReplayCamera: iz,
          applyTemporaryThirdPerson: iz,
          holdEmoteWheel: iz,
          recordFlyingMiddleText: iz,
          focusCrafting: iz,
          craftRecipe: () => ({
            gO: 0,
            Rp: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: iz,
          setShopOpen: iz,
          buyShopItem: iz,
          sendChatMessage: iz,
          ignorePlayer: iz,
          reportPlayer: iz,
          reportWorldCodeChat: iz,
          requestDiscordReportKey: iz,
          reportLobbyOrGame: iz,
          playEmote: iz,
          updateMyCosmetic: iz,
          writeOnBoard: iz,
          writeBook: iz,
          writeNameTag: iz,
          setCustomLobbyBlock: iz,
          openIronChest: iz,
          sendCodeCollab: iz,
          clickCodeBlock: iz,
          bindCustomButtonKeys: iz,
          pressCustomButton: iz,
          moveReplayFreecam: iz,
          holdReplayFreecamVertical: iz,
          respawn: iz,
          wakeUp: iz,
          requestLeaderboard: iz,
          completeTask: iz,
          setServerCookie: iz,
          answerUiRequest: iz,
          chooseRewardedAd: iz,
          setCameraZoom: iz,
          setFreeCameraMovesFly: iz,
          setBlockHighlight: iz,
          setCrosshairInteractPrompt: iz,
          setLookSensitivity: iz,
          replayAction: iz,
          setReplayPlaying: iz,
          seekReplay: iz,
          setReplayCameraMode: iz,
          syncReplayCameraMode: iz,
          setReplayCameraKeyframe: iz,
          moveReplayCameraKeyframe: iz,
          deleteReplayCameraKeyframes: iz,
          setReplayPlaybackMark: iz,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: iz,
          exportReplayVideo: iz,
          toggleRecording: iz,
          saveClip: iz,
          setRecorderPrefs: iz,
          setReplayViewerOpen: iz
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => Ez.e,
          worldCodeAiGameState: () => Ez.h
        },
        lookups: {
          localPos: () => lz,
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
  39742: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => xz,
      c: () => vz,
      d: () => Jz,
      e: () => Nz,
      g: () => rz
    });
    var Ez = bz(38584),
      nz = bz(1212),
      iz = bz(1892),
      lz = bz(1909),
      Mz = bz(3043),
      tz = bz(36237),
      Hz = bz(1296),
      Oz = bz(39750),
      pz = bz(4575),
      dz = bz(2289),
      Fz = bz(39758),
      Zz = bz(39765),
      Rz = bz(39806);
    let Kz = null;

    function wz(zz) {
      const uz = new Map,
        bz = bz => {
          if ("string" !== typeof bz) return;
          let Ez = uz.get(bz);
          return void 0 === Ez && (Ez = zz(bz), void 0 !== Ez && uz.set(bz, Ez)), Ez
        };
      return new Proxy({}, {
        get: (zz, uz) => bz(uz),
        has: (zz, uz) => void 0 !== bz(uz)
      })
    }

    function Xz(zz) {
      const uz = (0, Mz.e)(zz);
      return void 0 !== uz && (0, Mz.g)(uz) === zz
    }

    function fz(zz) {
      var uz;
      const bz = null === (uz = (0, Oz.j)()) || void 0 === uz ? void 0 : uz.tables;
      if (void 0 === bz || !Xz(zz)) return;
      const Ez = {
          displayName: bz.getDisplayName(zz)
        },
        nz = bz.getItemStat(zz, "description");
      void 0 !== nz && null !== nz && (Ez.description = nz);
      const {
        rootName: iz
      } = bz.getMetaInfo(zz);
      iz !== zz && (Ez.rootName = iz);
      const lz = bz.getItemStat(zz, "armourReduction");
      return void 0 !== lz && null !== lz && (Ez.armourReduction = lz), Ez
    }(0, Oz.s)((zz => {
      Kz = zz
    }));
    const sz = (0, lz.h)("DisplayName", "Description");

    function rz() {
      return Boolean(iz.b.get("useInventory") && iz.b.get("useFullInventory"))
    }
    let oz = null;
    const Nz = {
        inventory: function() {
          const zz = Rz.b.states.inventory;
          let uz = null;
          const bz = zz => {
            var bz;
            return null === zz.chest ? zz : ((null === (bz = uz) || void 0 === bz ? void 0 : bz.from) === zz && uz.chestVersion === (0, Zz.d)() || (uz = {
              from: zz,
              chestVersion: (0, Zz.d)(),
              view: {
                ...zz,
                chest: (0, Zz.l)(zz.chest)
              }
            }), uz.view)
          };
          return {
            current: () => bz(zz.current()),
            watch: uz => zz.watch((zz => {
              uz(bz(zz))
            }))
          }
        }(),
        crafting: Rz.b.states.crafting,
        stationItems: {
          current() {
            var zz;
            return (null === (zz = oz) || void 0 === zz ? void 0 : zz.namesVersion) !== (0, Mz.k)() && (oz = {
              namesVersion: (0, Mz.k)(),
              items: {
                enchantable: wz((zz => {
                  const uz = (0, Mz.e)(zz);
                  return void 0 !== uz && null !== Kz && Kz.enchantmentPerksOf(uz).length > 0 || void 0
                })),
                salvageable: wz((zz => !(!Xz(zz) || null === (0, tz.c)(zz)) || void 0))
              }
            }), oz.items
          },
          watch: () => () => {}
        },
        itemInfo: function() {
          let zz = null;
          const uz = () => {
            var uz;
            return (null === (uz = zz) || void 0 === uz ? void 0 : uz.namesVersion) !== (0, Mz.k)() && (zz = {
              namesVersion: (0, Mz.k)(),
              infos: wz(fz)
            }), zz.infos
          };
          return {
            current: uz,
            watch: bz => (0, lz.r)((Ez => {
              Ez.some(sz) && (zz = null, bz(uz()))
            }))
          }
        }(),
        creativeVisibility: (0, lz.m)((function() {
          const zz = {};
          for (const nz of null !== (uz = null === (bz = Kz) || void 0 === bz ? void 0 : bz.creativeItemIds()) && void 0 !== uz ? uz : []) {
            var uz, bz, lz, tz;
            const Hz = (0, Mz.g)(nz);
            if (void 0 === Hz) continue;
            const Oz = null !== (lz = iz.b.get((0, Ez.f)(Hz, "showInCreativeInven"))) && void 0 !== lz ? lz : null === (tz = Kz) || void 0 === tz ? void 0 : tz.showInCreativeInvenOf(nz);
            "boolean" === typeof Oz && (zz[Hz] = Oz)
          }
          return {
            publicLobby: (0, nz.M)((0, Hz.b)().lobbyName),
            shownInGame: zz
          }
        }), ["connectedGameChanged"], (0, lz.h)("ShowInCreativeInven")),
        fullInventory: (0, lz.m)(rz, [], (0, lz.k)("useInventory", "useFullInventory"))
      },
      vz = {
        inventoryDropRequested: Rz.b.events.inventoryDropRequested,
        chestToggled: Rz.b.events.chestToggled,
        chestRefreshed: Rz.b.events.chestRefreshed,
        inventorySynced: Rz.b.events.inventorySynced,
        enchantingTableOpened: Rz.b.events.enchantingTableOpened
      },
      xz = {
        removeInventoryItem: Rz.b.commands.removeInventoryItem,
        swapInventorySlots: Rz.b.commands.swapInventorySlots,
        moveInventoryItem: Rz.b.commands.moveInventoryItem,
        quickMoveInventoryItem: Rz.b.commands.quickMoveInventoryItem,
        closeChest: Rz.b.commands.closeChest,
        setInventoryOpen(zz) {
          (0, pz.i)(dz.z.InventoryOpen, zz ? dz.z.InventoryOpen : 0)
        },
        focusCrafting: Rz.b.commands.focusCrafting,
        craftRecipe: Rz.b.commands.craftRecipe,
        salvageItem: Rz.b.commands.salvageItem,
        enchantItem: Rz.b.commands.enchantItem,
        changeIronChestPasskey(zz) {
          var uz;
          let {
            pos: bz,
            jH: Ez
          } = zz;
          null === (uz = (0, Oz.j)()) || void 0 === uz || uz.send(Fz.d.ChangeIronChestPasskey, (0, Fz.f)({
            pl: bz,
            jH: Ez
          }))
        },
        openIronChest(zz) {
          var uz;
          let {
            pos: bz,
            jH: Ez
          } = zz;
          null === (uz = (0, Oz.j)()) || void 0 === uz || uz.send(Fz.d.OpenIronChest, (0, Fz.y)({
            pl: bz,
            jH: Ez
          }))
        }
      },
      Jz = {
        enchantingOffer: Rz.b.queries.enchantingOffer
      }
  },
  39800: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Ez,
      f: () => pz,
      h: () => Mz,
      j: () => iz,
      l: () => nz,
      p: () => tz,
      q: () => Oz
    });
    class Ez extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function nz(zz) {
      return zz instanceof RangeError && /call stack/i.test(zz.message) || zz instanceof Error && "InternalError" === zz.name && /recursion/i.test(zz.message)
    }

    function iz(zz) {
      return /out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(zz))
    }
    const lz = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function Mz(zz) {
      var uz;
      return zz instanceof WebAssembly.RuntimeError || zz instanceof Ez || nz(zz) && lz.test(null !== (uz = zz.stack) && void 0 !== uz ? uz : "")
    }

    function tz(zz, uz) {
      if (Mz(zz)) throw zz;
      console.error(uz, zz)
    }

    function Hz(zz, uz, bz, nz, iz) {
      if (uz % nz !== 0 || uz + bz > zz.byteLength) throw new Ez(`${iz}: ${bz} bytes at ${uz}, ${nz}-aligned, outside ${zz.byteLength} bytes of memory`)
    }

    function Oz(zz, uz, bz, Ez, nz) {
      return 0 === bz ? null : (Hz(uz, bz, Ez * zz.BYTES_PER_ELEMENT, zz.BYTES_PER_ELEMENT, nz), new zz(uz, bz, Ez))
    }

    function pz(zz, uz, bz, Ez, nz) {
      return 0 === uz ? null : (Hz(zz, uz, bz, Ez, nz), new DataView(zz, uz, bz))
    }
  },
  39750: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Ez,
      f: () => wz,
      j: () => Rz,
      l: () => Kz,
      m: () => dz,
      o: () => Fz,
      q: () => Oz,
      s: () => pz,
      v: () => Zz
    });
    class Ez extends Error {
      constructor(zz) {
        super(`the join's code did not load: ${zz instanceof Error?zz.message:String(zz)}`, {
          cause: zz
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === zz || void 0 === zz ? void 0 : zz.request
      }
    }
    let nz = null,
      iz = null,
      lz = null;
    const Mz = [];
    let tz = null;

    function Hz(zz, uz) {
      try {
        zz(uz)
      } catch (bz) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", bz)
      }
    }

    function Oz() {
      return tz
    }

    function pz(zz) {
      Mz.push(zz), null !== tz && Hz(zz, tz)
    }

    function dz(zz) {
      return nz ??= Promise.all([bz.e(69), bz.e(94), bz.e(214), bz.e(74), bz.e(215), bz.e(189), bz.e(93), bz.e(259), bz.e(187), bz.e(262), bz.e(199), bz.e(186), bz.e(200), bz.e(136), bz.e(85), bz.e(114), bz.e(237), bz.e(53)]).then((() => bz(41801))).then((uz => {
        uz.loadAudio(zz), tz = uz;
        for (const zz of Mz) Hz(zz, uz);
        return uz
      })).catch((zz => {
        throw nz = null, zz
      })), nz
    }
    async function Fz(zz, uz) {
      try {
        const bz = await dz(zz);
        await bz.loadClientGame(uz)
      } catch (bz) {
        throw new Ez(bz)
      }
    }

    function Zz(zz, uz) {
      iz = {
        running: zz,
        shell: uz
      }
    }

    function Rz() {
      return lz
    }
    async function Kz(zz) {
      const uz = iz;
      if ((null === uz || void 0 === uz ? void 0 : uz.running) !== zz) throw new Error("the core's session has ended");
      const bz = await dz(uz.shell.audio).catch((zz => {
        throw new Ez(zz)
      }));
      if (null !== lz) return lz;
      if (iz !== uz || zz.isStopped) throw new Error("the core stopped while the game code loaded");
      if (lz = bz.startGameHost(zz, uz.shell), null === lz) throw new Error("the core's shared tables didn't read, so the game can't start");
      return lz
    }

    function wz() {
      null !== lz && (null !== tz ? tz.endGameHost(lz) : lz.closeGame()), lz = null, iz = null
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);