export const id = 199;
export const ids = [199];
export const modules = {
  37845: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Vc,
      f: () => Ic
    });
    const Vc = "The world isn't loaded, so no blocks can be seen.",
      Ic = "The world isn't loaded, so nothing in it can be seen."
  },
  35414: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => rB,
      g: () => Ic
    });
    let Vc = () => null;

    function Ic(cB) {
      Vc = cB
    }

    function rB(cB, Bc) {
      return Vc(cB, Bc)
    }
  },
  38607: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => ec,
      g: () => zB,
      h: () => yB,
      j: () => tB
    });
    var Vc = nc(35),
      Ic = nc(38614),
      rB = nc(38598),
      uc = nc(38623),
      sc = nc(38601),
      Mc = nc(38626),
      Pc = nc(38642);

    function qB(cB) {
      var Bc, nc;
      const Vc = (0, rB.e)();
      return Vc ? null === (Bc = (0, Ic.b)(Vc.api, cB[0], cB[1], cB[2])) || void 0 === Bc || null === (nc = Bc.persisted) || void 0 === nc ? void 0 : nc.shared : void 0
    }

    function Oc(cB) {
      return `${cB[0]},${cB[1]},${cB[2]}`
    }
    const Tc = new Map;
    let fc = null,
      mB = 0;

    function ec() {
      return mB
    }

    function tB(cB) {
      const Bc = null !== fc && fc.key === Oc(cB.pos) ? fc.type : null;
      if (null === Bc) return cB;
      let nc = null;
      if ("Iron" === Bc) {
        const {
          cachedPasskey: Bc,
          ...Vc
        } = Sc(cB.pos);
        nc = {
          Gs: null !== Bc && void 0 !== Bc ? Bc : [0, 0, 0, 0],
          ...Vc
        }
      }
      return {
        ...cB,
        type: Bc,
        ironChest: nc
      }
    }

    function Sc(cB) {
      const Bc = qB(cB),
        nc = null === Bc || void 0 === Bc ? void 0 : Bc.ownerDbId,
        Vc = function(cB) {
          var Bc;
          let nc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qB(cB);
          const Vc = Oc(cB),
            Ic = Tc.get(Vc);
          return Ic ? Ic.lastOpened < (null !== (Bc = null === nc || void 0 === nc ? void 0 : nc.passkeyLastUpdated) && void 0 !== Bc ? Bc : 0) ? (Tc.delete(Vc), null) : [...Ic.Gs] : null
        }(cB, Bc);
      return void 0 === nc ? {
        cachedPasskey: Vc
      } : {
        ownerDbId: nc,
        cachedPasskey: Vc
      }
    }(0, Pc.l)(uc.e, (cB => {
      const Bc = (0, Mc.f)(uc.e, cB);
      if (!(0, Mc.d)(Bc) || Bc.jcc) return;
      if (mB++, !Bc.bcc || null === Bc.dD) return void(fc = null);
      const nc = Oc(Bc.dD);
      fc = {
        key: nc,
        type: Bc.w6
      }, null !== Bc.kcc && Tc.set(nc, {
        Gs: [...Bc.kcc],
        lastOpened: Date.now()
      })
    })), (0, Pc.i)((() => {
      Tc.clear(), fc = null, mB++
    }));
    const yB = {
        boardEditRequested: {
          watch: cB => (0, Vc.m)("EditBoard", (Bc => {
            let {
              pos: nc
            } = Bc;
            if (null === nc) return void cB(null);
            const Vc = (0, rB.e)(),
              Ic = (0, rB.l)();
            Vc && Ic && cB(Ic.readBoardToEdit(Vc.api, Vc.chunks, nc))
          }))
        },
        ironChestOpenRequested: {
          watch: cB => (0, Vc.m)("OpenIronChest", (Bc => {
            let {
              pos: nc
            } = Bc;
            cB(function(cB) {
              return {
                pos: cB,
                ...Sc(cB)
              }
            }(nc))
          }))
        }
      },
      zB = {
        writeOnBoard(cB) {
          var Bc;
          let {
            pos: nc,
            text: Vc,
            textSize: Ic
          } = cB;
          null === (Bc = (0, rB.e)()) || void 0 === Bc || Bc.send(sc.e.UpdateBoard, (0, sc.W)({
            gJ: nc,
            bJ: Vc,
            ZF: Ic
          }))
        },
        writeBook(cB) {
          var Bc;
          let {
            pages: nc,
            title: Vc,
            published: Ic
          } = cB;
          null === (Bc = (0, rB.e)()) || void 0 === Bc || Bc.send(sc.e.UpdateBook, (0, sc._)({
            Wk: nc,
            Hk: Vc,
            Fk: Ic
          }))
        },
        writeNameTag(cB) {
          var Bc;
          null === (Bc = (0, rB.e)()) || void 0 === Bc || Bc.send(sc.e.UpdateNameTag, cB)
        },
        setCustomLobbyBlock(cB) {
          let {
            pos: Bc,
            blockName: nc
          } = cB;
          const Vc = (0, rB.l)(),
            Ic = (0, rB.e)();
          Vc && Ic && Ic.send(sc.e.SetCustomLobbyBlock, (0, sc.H)({
            Zr: Vc.blockIdOf(nc),
            Zk: Bc
          }))
        }
      }
  },
  38659: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Mc,
      d: () => uc,
      g: () => sc
    });
    var Vc = nc(38582),
      Ic = nc(3828),
      rB = nc(38598);

    function uc() {
      var cB;
      const Bc = null === (cB = (0, rB.e)()) || void 0 === cB ? void 0 : cB.api.localId;
      return void 0 === Bc || Bc === Vc.Oc ? null : String(Bc)
    }

    function sc(cB) {
      const Bc = (0, rB.e)();
      if (null !== Bc) return cB(Bc);
      let nc = null;
      const Vc = (0, Ic.r)((() => {
        const Bc = (0, rB.e)();
        null !== Bc && null === nc && (Vc(), nc = cB(Bc))
      }));
      return () => {
        var cB;
        Vc(), null === (cB = nc) || void 0 === cB || cB()
      }
    }

    function Mc(cB, Bc, nc) {
      return {
        current: () => {
          const nc = (0, rB.e)();
          return null === nc ? Bc : cB(nc)()
        },
        watch: Bc => sc((Vc => {
          const Ic = cB(Vc);
          let rB = Ic();
          return Bc(rB), nc((() => {
            const cB = Ic();
            cB !== rB && (rB = cB, Bc(cB))
          }))
        }))
      }
    }
  },
  38653: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Pc
    });
    var Vc = nc(38598),
      Ic = nc(38659),
      rB = nc(38666);

    function uc() {
      var cB, Bc;
      return null !== (cB = null === (Bc = (0, Vc.e)()) || void 0 === Bc ? void 0 : Bc.itemBridgeSources) && void 0 !== cB ? cB : rB.c
    }

    function sc(cB) {
      return {
        current: () => uc().states[cB].current(),
        watch: Bc => (0, Ic.g)((nc => {
          const Vc = nc.itemBridgeSources.states[cB];
          return Bc(Vc.current()), Vc.watch(Bc)
        }))
      }
    }

    function Mc(cB) {
      return {
        watch: Bc => (0, Ic.g)((nc => nc.itemBridgeSources.events[cB].watch(Bc)))
      }
    }
    const Pc = {
      states: {
        inventory: sc("inventory"),
        hotbar: sc("hotbar"),
        crafting: sc("crafting"),
        heldItemAim: sc("heldItemAim")
      },
      events: {
        hotbarSlotRequested: Mc("hotbarSlotRequested"),
        hotbarScrolled: Mc("hotbarScrolled"),
        numberKeyPressed: Mc("numberKeyPressed"),
        inventoryDropRequested: Mc("inventoryDropRequested"),
        chestToggled: Mc("chestToggled"),
        chestRefreshed: Mc("chestRefreshed"),
        inventorySynced: Mc("inventorySynced"),
        enchantingTableOpened: Mc("enchantingTableOpened")
      },
      commands: {
        selectHotbarSlot: cB => uc().commands.selectHotbarSlot(cB),
        removeInventoryItem: cB => uc().commands.removeInventoryItem(cB),
        swapInventorySlots: cB => uc().commands.swapInventorySlots(cB),
        moveInventoryItem: cB => uc().commands.moveInventoryItem(cB),
        quickMoveInventoryItem: cB => uc().commands.quickMoveInventoryItem(cB),
        closeChest: cB => uc().commands.closeChest(cB),
        focusCrafting: cB => uc().commands.focusCrafting(cB),
        craftRecipe: cB => uc().commands.craftRecipe(cB),
        salvageItem: cB => uc().commands.salvageItem(cB),
        enchantItem: cB => uc().commands.enchantItem(cB)
      },
      queries: {
        enchantingOffer: cB => uc().queries.enchantingOffer(cB)
      }
    }
  },
  38666: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => sc
    });
    var Vc = nc(37845);

    function Ic(cB) {
      return {
        current: () => cB,
        watch: () => () => {}
      }
    }

    function rB() {}
    const uc = Object.freeze([0, 0, 0]),
      sc = {
        states: {
          health: Ic({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: Ic({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: Ic({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: Ic({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: Ic({}),
          creativeVisibility: Ic({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: Ic(null),
          heldItemAim: Ic({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: Ic(!1),
          gliderBoostFuel: Ic(0),
          flight: Ic({
            canFly: !1,
            flying: !1
          }),
          crafting: Ic({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: Ic({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: Ic({}),
          fullInventory: Ic(!1),
          crosshairTarget: Ic({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: Ic(!0),
          replay: Ic(null),
          replayEdits: Ic(null),
          replayRecorder: Ic({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: Ic(!1)
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
          selectHotbarSlot: rB,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: rB,
          setInventoryOpen: rB,
          changeIronChestPasskey: rB,
          dragReplayCamera: rB,
          applyTemporaryThirdPerson: rB,
          holdEmoteWheel: rB,
          recordFlyingMiddleText: rB,
          focusCrafting: rB,
          craftRecipe: () => ({
            YF: 0,
            FX: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: rB,
          setShopOpen: rB,
          buyShopItem: rB,
          sendChatMessage: rB,
          ignorePlayer: rB,
          reportPlayer: rB,
          reportWorldCodeChat: rB,
          requestDiscordReportKey: rB,
          reportLobbyOrGame: rB,
          playEmote: rB,
          updateMyCosmetic: rB,
          writeOnBoard: rB,
          writeBook: rB,
          writeNameTag: rB,
          setCustomLobbyBlock: rB,
          openIronChest: rB,
          sendCodeCollab: rB,
          clickCodeBlock: rB,
          bindCustomButtonKeys: rB,
          pressCustomButton: rB,
          moveReplayFreecam: rB,
          holdReplayFreecamVertical: rB,
          respawn: rB,
          wakeUp: rB,
          requestLeaderboard: rB,
          completeTask: rB,
          setServerCookie: rB,
          answerUiRequest: rB,
          chooseRewardedAd: rB,
          setCameraZoom: rB,
          setCrosshairInteractPrompt: rB,
          setLookSensitivity: rB,
          replayAction: rB,
          setReplayPlaying: rB,
          seekReplay: rB,
          setReplayCameraMode: rB,
          syncReplayCameraMode: rB,
          setReplayCameraKeyframe: rB,
          moveReplayCameraKeyframe: rB,
          deleteReplayCameraKeyframes: rB,
          setReplayPlaybackMark: rB,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: rB,
          exportReplayVideo: rB,
          toggleRecording: rB,
          saveClip: rB,
          setRecorderPrefs: rB,
          setReplayViewerOpen: rB
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => Vc.d,
          worldCodeAiGameState: () => Vc.f
        },
        lookups: {
          localPos: () => uc,
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
  38590: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Lc,
      e: () => Yc,
      g: () => gB,
      k: () => lc,
      m: () => hc
    });
    var Vc = nc(37658),
      Ic = nc(1090),
      rB = nc(1594),
      uc = nc(1602),
      sc = nc(2444),
      Mc = nc(35414),
      Pc = nc(1177),
      qB = nc(38598),
      Oc = nc(3866),
      Tc = nc(1927),
      fc = nc(38601),
      mB = nc(38607),
      ec = nc(38653);
    let tB = null;

    function Sc(cB) {
      const Bc = new Map,
        nc = nc => {
          if ("string" !== typeof nc) return;
          let Vc = Bc.get(nc);
          return void 0 === Vc && (Vc = cB(nc), void 0 !== Vc && Bc.set(nc, Vc)), Vc
        };
      return new Proxy({}, {
        get: (cB, Bc) => nc(Bc),
        has: (cB, Bc) => void 0 !== nc(Bc)
      })
    }

    function yB(cB) {
      const Bc = (0, sc.e)(cB);
      return void 0 !== Bc && (0, sc.f)(Bc) === cB
    }

    function zB(cB) {
      var Bc;
      const nc = null === (Bc = (0, qB.e)()) || void 0 === Bc ? void 0 : Bc.tables;
      if (void 0 === nc || !yB(cB)) return;
      const Vc = {
          displayName: nc.getDisplayName(cB)
        },
        Ic = nc.getItemStat(cB, "description");
      void 0 !== Ic && null !== Ic && (Vc.description = Ic);
      const {
        rootName: rB
      } = nc.getMetaInfo(cB);
      rB !== cB && (Vc.rootName = rB);
      const uc = nc.getItemStat(cB, "armourReduction");
      return void 0 !== uc && null !== uc && (Vc.armourReduction = uc), Vc
    }(0, qB.m)((cB => {
      tB = cB
    }));
    const pc = (0, uc.i)("DisplayName", "Description");

    function hc() {
      return Boolean(rB.d.get("useInventory") && rB.d.get("useFullInventory"))
    }
    let aB = null;
    const lc = {
        inventory: function() {
          const cB = ec.c.states.inventory;
          let Bc = null;
          const nc = cB => {
            var nc;
            return null === cB.chest ? cB : ((null === (nc = Bc) || void 0 === nc ? void 0 : nc.from) === cB && Bc.chestVersion === (0, mB.d)() || (Bc = {
              from: cB,
              chestVersion: (0, mB.d)(),
              view: {
                ...cB,
                chest: (0, mB.j)(cB.chest)
              }
            }), Bc.view)
          };
          return {
            current: () => nc(cB.current()),
            watch: Bc => cB.watch((cB => {
              Bc(nc(cB))
            }))
          }
        }(),
        crafting: ec.c.states.crafting,
        stationItems: {
          current() {
            var cB;
            return (null === (cB = aB) || void 0 === cB ? void 0 : cB.namesVersion) !== (0, sc.i)() && (aB = {
              namesVersion: (0, sc.i)(),
              items: {
                enchantable: Sc((cB => {
                  const Bc = (0, sc.e)(cB);
                  return void 0 !== Bc && null !== tB && tB.enchantmentPerksOf(Bc).length > 0 || void 0
                })),
                salvageable: Sc((cB => !(!yB(cB) || null === (0, Mc.c)(cB)) || void 0))
              }
            }), aB.items
          },
          watch: () => () => {}
        },
        itemInfo: function() {
          let cB = null;
          const Bc = () => {
            var Bc;
            return (null === (Bc = cB) || void 0 === Bc ? void 0 : Bc.namesVersion) !== (0, sc.i)() && (cB = {
              namesVersion: (0, sc.i)(),
              infos: Sc(zB)
            }), cB.infos
          };
          return {
            current: Bc,
            watch: nc => (0, uc.u)((Vc => {
              Vc.some(pc) && (cB = null, nc(Bc()))
            }))
          }
        }(),
        creativeVisibility: (0, uc.p)((function() {
          const cB = {};
          for (const Ic of null !== (Bc = null === (nc = tB) || void 0 === nc ? void 0 : nc.creativeItemIds()) && void 0 !== Bc ? Bc : []) {
            var Bc, nc, uc, Mc;
            const Pc = (0, sc.f)(Ic);
            if (void 0 === Pc) continue;
            const qB = null !== (uc = rB.d.get((0, Vc.c)(Pc, "showInCreativeInven"))) && void 0 !== uc ? uc : null === (Mc = tB) || void 0 === Mc ? void 0 : Mc.showInCreativeInvenOf(Ic);
            "boolean" === typeof qB && (cB[Pc] = qB)
          }
          return {
            publicLobby: (0, Ic.F)((0, Pc.d)().lobbyName),
            shownInGame: cB
          }
        }), ["connectedGameChanged"], (0, uc.i)("ShowInCreativeInven")),
        fullInventory: (0, uc.p)(hc, [], (0, uc.l)("useInventory", "useFullInventory"))
      },
      Yc = {
        inventoryDropRequested: ec.c.events.inventoryDropRequested,
        chestToggled: ec.c.events.chestToggled,
        chestRefreshed: ec.c.events.chestRefreshed,
        inventorySynced: ec.c.events.inventorySynced,
        enchantingTableOpened: ec.c.events.enchantingTableOpened
      },
      Lc = {
        removeInventoryItem: ec.c.commands.removeInventoryItem,
        swapInventorySlots: ec.c.commands.swapInventorySlots,
        moveInventoryItem: ec.c.commands.moveInventoryItem,
        quickMoveInventoryItem: ec.c.commands.quickMoveInventoryItem,
        closeChest: ec.c.commands.closeChest,
        setInventoryOpen(cB) {
          (0, Oc.h)(Tc.x.InventoryOpen, cB ? Tc.x.InventoryOpen : 0)
        },
        focusCrafting: ec.c.commands.focusCrafting,
        craftRecipe: ec.c.commands.craftRecipe,
        salvageItem: ec.c.commands.salvageItem,
        enchantItem: ec.c.commands.enchantItem,
        changeIronChestPasskey(cB) {
          var Bc;
          let {
            pos: nc,
            Gs: Vc
          } = cB;
          null === (Bc = (0, qB.e)()) || void 0 === Bc || Bc.send(fc.e.ChangeIronChestPasskey, (0, fc.j)({
            dD: nc,
            Gs: Vc
          }))
        },
        openIronChest(cB) {
          var Bc;
          let {
            pos: nc,
            Gs: Vc
          } = cB;
          null === (Bc = (0, qB.e)()) || void 0 === Bc || Bc.send(fc.e.OpenIronChest, (0, fc.C)({
            dD: nc,
            Gs: Vc
          }))
        }
      },
      gB = {
        enchantingOffer: ec.c.queries.enchantingOffer
      }
  },
  38647: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Vc,
      g: () => Oc,
      k: () => sc,
      n: () => rB,
      r: () => Ic,
      s: () => Mc,
      v: () => qB
    });
    class Vc extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function Ic(cB) {
      return cB instanceof RangeError && /call stack/i.test(cB.message) || cB instanceof Error && "InternalError" === cB.name && /recursion/i.test(cB.message)
    }

    function rB(cB) {
      return /out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(cB))
    }
    const uc = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function sc(cB) {
      var Bc;
      return cB instanceof WebAssembly.RuntimeError || cB instanceof Vc || Ic(cB) && uc.test(null !== (Bc = cB.stack) && void 0 !== Bc ? Bc : "")
    }

    function Mc(cB, Bc) {
      if (sc(cB)) throw cB;
      console.error(Bc, cB)
    }

    function Pc(cB, Bc, nc, Ic, rB) {
      if (Bc % Ic !== 0 || Bc + nc > cB.byteLength) throw new Vc(`${rB}: ${nc} bytes at ${Bc}, ${Ic}-aligned, outside ${cB.byteLength} bytes of memory`)
    }

    function qB(cB, Bc, nc, Vc, Ic) {
      return 0 === nc ? null : (Pc(Bc, nc, Vc * cB.BYTES_PER_ELEMENT, cB.BYTES_PER_ELEMENT, Ic), new cB(Bc, nc, Vc))
    }

    function Oc(cB, Bc, nc, Vc, Ic) {
      return 0 === Bc ? null : (Pc(cB, Bc, nc, Vc, Ic), new DataView(cB, Bc, nc))
    }
  },
  38598: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Vc,
      c: () => Sc,
      e: () => ec,
      g: () => tB,
      j: () => Tc,
      k: () => fc,
      l: () => qB,
      m: () => Oc,
      n: () => mB
    });
    class Vc extends Error {
      constructor(cB) {
        super(`the join's code did not load: ${cB instanceof Error?cB.message:String(cB)}`, {
          cause: cB
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === cB || void 0 === cB ? void 0 : cB.request
      }
    }
    let Ic = null,
      rB = null,
      uc = null;
    const sc = [];
    let Mc = null;

    function Pc(cB, Bc) {
      try {
        cB(Bc)
      } catch (nc) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", nc)
      }
    }

    function qB() {
      return Mc
    }

    function Oc(cB) {
      sc.push(cB), null !== Mc && Pc(cB, Mc)
    }

    function Tc(cB) {
      return Ic ??= Promise.all([nc.e(60), nc.e(81), nc.e(196), nc.e(123), nc.e(219), nc.e(197), nc.e(198), nc.e(79), nc.e(224), nc.e(176), nc.e(128), nc.e(182), nc.e(74), nc.e(102), nc.e(222), nc.e(46)]).then((() => nc(40527))).then((Bc => {
        Bc.loadAudio(cB), Mc = Bc;
        for (const cB of sc) Pc(cB, Bc);
        return Bc
      })).catch((cB => {
        throw Ic = null, cB
      })), Ic
    }
    async function fc(cB, Bc) {
      try {
        const nc = await Tc(cB);
        await nc.loadClientGame(Bc)
      } catch (nc) {
        throw new Vc(nc)
      }
    }

    function mB(cB, Bc) {
      rB = {
        running: cB,
        shell: Bc
      }
    }

    function ec() {
      return uc
    }
    async function tB(cB) {
      const Bc = rB;
      if ((null === Bc || void 0 === Bc ? void 0 : Bc.running) !== cB) throw new Error("the core's session has ended");
      const nc = await Tc(Bc.shell.audio).catch((cB => {
        throw new Vc(cB)
      }));
      if (null !== uc) return uc;
      if (rB !== Bc || cB.isStopped) throw new Error("the core stopped while the game code loaded");
      if (uc = nc.startGameHost(cB, Bc.shell), null === uc) throw new Error("the core's shared tables didn't read, so the game can't start");
      return uc
    }

    function Sc() {
      null !== uc && (null !== Mc ? Mc.endGameHost(uc) : uc.closeGame()), uc = null, rB = null
    }
  },
  38601: (cB, Bc, nc) => {
    nc.d(Bc, {
      C: () => Zc,
      E: () => pc,
      F: () => hc,
      H: () => tB,
      K: () => gB,
      O: () => Cc,
      S: () => mB,
      U: () => Dc,
      W: () => yB,
      _: () => Sc,
      ab: () => zB,
      bb: () => aB,
      e: () => Ic,
      i: () => vB,
      j: () => Qc,
      k: () => fc,
      m: () => ec,
      n: () => bB,
      q: () => Yc,
      s: () => Uc,
      v: () => Lc,
      y: () => lc
    });
    var Vc = nc(166);
    const Ic = {
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

    function rB(cB, Bc) {
      return !ArrayBuffer.isView(cB) || cB instanceof DataView ? Array.isArray(cB) ? cB.map((cB => Bc(cB))) : cB : Array.from(cB, (cB => Bc(cB)))
    }

    function uc(cB) {
      if ("string" !== typeof cB) return cB;
      for (let Bc = 0; Bc < cB.length; Bc++) {
        const nc = cB.charCodeAt(Bc);
        if (nc >= 55296 && nc <= 57343) return Mc.decode(sc.encode(cB))
      }
      return cB
    }
    const sc = new TextEncoder,
      Mc = new TextDecoder;

    function Pc(cB) {
      return cB
    }
    let qB;

    function Oc(cB) {
      return null === cB || "object" !== typeof cB ? cB : [uc(cB.SV), uc(cB.ND)]
    }

    function Tc(cB) {
      return null === cB || "object" !== typeof cB ? cB : [rB(cB.dD, Pc), rB(cB.Gs, Pc)]
    }

    function fc(cB) {
      return null === (Bc = cB) || "object" !== typeof Bc ? Bc : [uc(Bc.Uu), uc(Bc.okc)];
      var Bc
    }

    function mB(cB) {
      return null === (Bc = cB) || "object" !== typeof Bc ? Bc : [Bc.id, Bc.HZ];
      var Bc
    }

    function ec(cB) {
      return null === (Bc = cB) || "object" !== typeof Bc ? Bc : [Bc.oN, uc(Bc.kE), Bc.XN, uc(Bc.uE), Bc.sE, Bc.OE, Bc.sF, uc(Bc.qJ), uc(Bc.mJ)];
      var Bc
    }

    function tB(cB) {
      return null === (Bc = cB) || "object" !== typeof Bc ? Bc : [rB(Bc.Zk, Pc), Bc.Zr];
      var Bc
    }

    function Sc(cB) {
      return null === (Bc = cB) || "object" !== typeof Bc ? Bc : [rB(Bc.Wk, (cB => uc(cB))), uc(Bc.Hk), Bc.Fk];
      var Bc
    }

    function yB(cB) {
      return null === (Bc = cB) || "object" !== typeof Bc ? Bc : [rB(Bc.gJ, Pc), uc(Bc.bJ), Bc.ZF];
      var Bc
    }

    function zB(cB) {
      return null === (Bc = cB) || "object" !== typeof Bc ? Bc : [uc(Bc.RZ), uc(Bc.cC)];
      var Bc
    }

    function pc(cB) {
      return null === (Bc = cB) || "object" !== typeof Bc ? Bc : [uc(Bc.EQ)];
      var Bc
    }

    function hc(cB) {
      return uc(cB)
    }

    function aB(cB) {
      return null === (Bc = cB) || "object" !== typeof Bc ? Bc : [uc(Bc.VJ), uc(Bc.MJ), uc(Bc.SV), uc(Bc.ND)];
      var Bc
    }

    function lc(cB) {
      return Oc(cB)
    }

    function Yc(cB) {
      return Oc(cB)
    }

    function Lc(cB) {
      return null === (Bc = cB) || "object" !== typeof Bc ? Bc : [uc(Bc.EX)];
      var Bc
    }

    function gB(cB) {
      return cB
    }

    function Uc(cB) {
      return null === (Bc = cB) || "object" !== typeof Bc ? Bc : [uc(Bc.SF), uc(Bc.yJ)];
      var Bc
    }

    function bB(cB) {
      return uc(cB)
    }

    function Zc(cB) {
      return Tc(cB)
    }

    function Qc(cB) {
      return Tc(cB)
    }

    function Cc(cB) {
      return null === (Bc = cB) || "object" !== typeof Bc ? Bc : [uc(Bc.OJ)];
      var Bc
    }

    function vB(cB) {
      return (qB ??= (0, Vc.w)().map((cB => cB.name)), qB).map((Bc => {
        return "string" === typeof(nc = cB[Bc]) ? uc(nc) : rB(nc, Pc);
        var nc
      }))
    }

    function Dc(cB) {
      return null === (Bc = cB) || "object" !== typeof Bc ? Bc : [Bc.Qv, Bc.Dv, Bc.Fv];
      var Bc
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);