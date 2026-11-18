export const id = 200;
export const ids = [200];
export const modules = {
  38233: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Uy,
      e: () => hy
    });
    const Uy = "The world isn't loaded, so no blocks can be seen.",
      hy = "The world isn't loaded, so nothing in it can be seen."
  },
  35549: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => fy,
      f: () => hy
    });
    let Uy = () => null;

    function hy(yb) {
      Uy = yb
    }

    function fy(yb, bb) {
      return Uy(yb, bb)
    }
  },
  39119: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Sy,
      g: () => Cy,
      j: () => mb,
      m: () => Ey
    });
    var Uy = Wy(23),
      hy = Wy(39124),
      fy = Wy(39108),
      Zy = Wy(39130),
      cb = Wy(39113),
      Py = Wy(39136),
      oy = Wy(39152);

    function By(yb) {
      var bb, Wy;
      const Uy = (0, fy.i)();
      return Uy ? null === (bb = (0, hy.e)(Uy.api, yb[0], yb[1], yb[2])) || void 0 === bb || null === (Wy = bb.persisted) || void 0 === Wy ? void 0 : Wy.shared : void 0
    }

    function Ky(yb) {
      return `${yb[0]},${yb[1]},${yb[2]}`
    }
    const ey = new Map;
    let qb = null,
      sy = 0;

    function Sy() {
      return sy
    }

    function Ey(yb) {
      const bb = null !== qb && qb.key === Ky(yb.pos) ? qb.type : null;
      if (null === bb) return yb;
      let Wy = null;
      if ("Iron" === bb) {
        const {
          cachedPasskey: bb,
          ...Uy
        } = ly(yb.pos);
        Wy = {
          RP: null !== bb && void 0 !== bb ? bb : [0, 0, 0, 0],
          ...Uy
        }
      }
      return {
        ...yb,
        type: bb,
        ironChest: Wy
      }
    }

    function ly(yb) {
      const bb = By(yb),
        Wy = null === bb || void 0 === bb ? void 0 : bb.ownerDbId,
        Uy = function(yb) {
          var bb;
          let Wy = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : By(yb);
          const Uy = Ky(yb),
            hy = ey.get(Uy);
          return hy ? hy.lastOpened < (null !== (bb = null === Wy || void 0 === Wy ? void 0 : Wy.passkeyLastUpdated) && void 0 !== bb ? bb : 0) ? (ey.delete(Uy), null) : [...hy.RP] : null
        }(yb, bb);
      return void 0 === Wy ? {
        cachedPasskey: Uy
      } : {
        ownerDbId: Wy,
        cachedPasskey: Uy
      }
    }(0, oy.j)(Zy.e, (yb => {
      const bb = (0, Py.e)(Zy.e, yb);
      if (!(0, Py.c)(bb) || bb.HA) return;
      if (sy++, !bb.Ix || null === bb.Dv) return void(qb = null);
      const Wy = Ky(bb.Dv);
      qb = {
        key: Wy,
        type: bb.sA
      }, null !== bb.JA && ey.set(Wy, {
        RP: [...bb.JA],
        lastOpened: Date.now()
      })
    })), (0, oy.f)((() => {
      ey.clear(), qb = null, sy++
    })), (0, oy.g)((() => {
      null !== qb && (qb = null, sy++, Uy.g.EZ("chestToggleFromServer", !1, !0))
    }));
    const mb = {
        boardEditRequested: {
          watch: yb => (0, Uy.h)("EditBoard", (bb => {
            let {
              pos: Wy
            } = bb;
            if (null === Wy) return void yb(null);
            const Uy = (0, fy.i)(),
              hy = (0, fy.s)();
            Uy && hy && yb(hy.readBoardToEdit(Uy.api, Uy.chunks, Wy))
          }))
        },
        ironChestOpenRequested: {
          watch: yb => (0, Uy.h)("OpenIronChest", (bb => {
            let {
              pos: Wy
            } = bb;
            yb(function(yb) {
              return {
                pos: yb,
                ...ly(yb)
              }
            }(Wy))
          }))
        }
      },
      Cy = {
        writeOnBoard(yb) {
          var bb;
          let {
            pos: Wy,
            text: Uy,
            textSize: hy
          } = yb;
          null === (bb = (0, fy.i)()) || void 0 === bb || bb.send(cb.d.UpdateBoard, (0, cb.Y)({
            EY: Wy,
            lY: Uy,
            VY: hy
          }))
        },
        writeBook(yb) {
          var bb;
          let {
            pages: Wy,
            title: Uy,
            published: hy
          } = yb;
          null === (bb = (0, fy.i)()) || void 0 === bb || bb.send(cb.d.UpdateBook, (0, cb.Z)({
            pY: Wy,
            wY: Uy,
            AY: hy
          }))
        },
        writeNameTag(yb) {
          var bb;
          null === (bb = (0, fy.i)()) || void 0 === bb || bb.send(cb.d.UpdateNameTag, yb)
        },
        setCustomLobbyBlock(yb) {
          let {
            pos: bb,
            blockName: Wy
          } = yb;
          const Uy = (0, fy.s)(),
            hy = (0, fy.i)();
          Uy && hy && hy.send(cb.d.SetCustomLobbyBlock, (0, cb.L)({
            Df: Uy.blockIdOf(Wy),
            qH: bb
          }))
        }
      }
  },
  39168: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Py,
      g: () => Zy,
      i: () => cb
    });
    var Uy = Wy(39097),
      hy = Wy(3991),
      fy = Wy(39108);

    function Zy() {
      var yb;
      const bb = null === (yb = (0, fy.i)()) || void 0 === yb ? void 0 : yb.api.localId;
      return void 0 === bb || bb === Uy.id ? null : String(bb)
    }

    function cb(yb) {
      const bb = (0, fy.i)();
      if (null !== bb) return yb(bb);
      let Wy = null;
      const Uy = (0, hy.w)((() => {
        const bb = (0, fy.i)();
        null !== bb && null === Wy && (Uy(), Wy = yb(bb))
      }));
      return () => {
        var yb;
        Uy(), null === (yb = Wy) || void 0 === yb || yb()
      }
    }

    function Py(yb, bb, Wy) {
      return {
        current: () => {
          const Wy = (0, fy.i)();
          return null === Wy ? bb : yb(Wy)()
        },
        watch: bb => cb((Uy => {
          const hy = yb(Uy);
          let fy = hy();
          return bb(fy), Wy((() => {
            const yb = hy();
            yb !== fy && (fy = yb, bb(yb))
          }))
        }))
      }
    }
  },
  39165: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => oy
    });
    var Uy = Wy(39108),
      hy = Wy(39168),
      fy = Wy(39177);

    function Zy() {
      var yb, bb;
      return null !== (yb = null === (bb = (0, Uy.i)()) || void 0 === bb ? void 0 : bb.itemBridgeSources) && void 0 !== yb ? yb : fy.b
    }

    function cb(yb) {
      return {
        current: () => Zy().states[yb].current(),
        watch: bb => (0, hy.i)((Wy => {
          const Uy = Wy.itemBridgeSources.states[yb];
          return bb(Uy.current()), Uy.watch(bb)
        }))
      }
    }

    function Py(yb) {
      return {
        watch: bb => (0, hy.i)((Wy => Wy.itemBridgeSources.events[yb].watch(bb)))
      }
    }
    const oy = {
      states: {
        inventory: cb("inventory"),
        hotbar: cb("hotbar"),
        crafting: cb("crafting"),
        heldItemAim: cb("heldItemAim")
      },
      events: {
        hotbarSlotRequested: Py("hotbarSlotRequested"),
        hotbarScrolled: Py("hotbarScrolled"),
        numberKeyPressed: Py("numberKeyPressed"),
        inventoryDropRequested: Py("inventoryDropRequested"),
        chestToggled: Py("chestToggled"),
        chestRefreshed: Py("chestRefreshed"),
        inventorySynced: Py("inventorySynced"),
        enchantingTableOpened: Py("enchantingTableOpened")
      },
      commands: {
        selectHotbarSlot: yb => Zy().commands.selectHotbarSlot(yb),
        removeInventoryItem: yb => Zy().commands.removeInventoryItem(yb),
        swapInventorySlots: yb => Zy().commands.swapInventorySlots(yb),
        moveInventoryItem: yb => Zy().commands.moveInventoryItem(yb),
        quickMoveInventoryItem: yb => Zy().commands.quickMoveInventoryItem(yb),
        closeChest: yb => Zy().commands.closeChest(yb),
        focusCrafting: yb => Zy().commands.focusCrafting(yb),
        craftRecipe: yb => Zy().commands.craftRecipe(yb),
        salvageItem: yb => Zy().commands.salvageItem(yb),
        enchantItem: yb => Zy().commands.enchantItem(yb)
      },
      queries: {
        enchantingOffer: yb => Zy().queries.enchantingOffer(yb)
      }
    }
  },
  39177: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => cb
    });
    var Uy = Wy(38233);

    function hy(yb) {
      return {
        current: () => yb,
        watch: () => () => {}
      }
    }

    function fy() {}
    const Zy = Object.freeze([0, 0, 0]),
      cb = {
        states: {
          health: hy({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: hy({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: hy({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: hy({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: hy({}),
          creativeVisibility: hy({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: hy(null),
          heldItemAim: hy({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: hy(!1),
          gliderBoostFuel: hy(0),
          flight: hy({
            canFly: !1,
            flying: !1
          }),
          crafting: hy({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: hy({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: hy({}),
          fullInventory: hy(!1),
          crosshairTarget: hy({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: hy(!0),
          replay: hy(null),
          replayEdits: hy(null),
          replayRecorder: hy({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: hy(!1)
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
          selectHotbarSlot: fy,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: fy,
          setInventoryOpen: fy,
          changeIronChestPasskey: fy,
          dragReplayCamera: fy,
          applyTemporaryThirdPerson: fy,
          holdEmoteWheel: fy,
          recordFlyingMiddleText: fy,
          focusCrafting: fy,
          craftRecipe: () => ({
            UH: 0,
            cL: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: fy,
          setShopOpen: fy,
          buyShopItem: fy,
          sendChatMessage: fy,
          ignorePlayer: fy,
          reportPlayer: fy,
          reportWorldCodeChat: fy,
          requestDiscordReportKey: fy,
          reportLobbyOrGame: fy,
          playEmote: fy,
          updateMyCosmetic: fy,
          writeOnBoard: fy,
          writeBook: fy,
          writeNameTag: fy,
          setCustomLobbyBlock: fy,
          openIronChest: fy,
          sendCodeCollab: fy,
          clickCodeBlock: fy,
          bindCustomButtonKeys: fy,
          pressCustomButton: fy,
          moveReplayFreecam: fy,
          holdReplayFreecamVertical: fy,
          respawn: fy,
          wakeUp: fy,
          requestLeaderboard: fy,
          completeTask: fy,
          setServerCookie: fy,
          answerUiRequest: fy,
          chooseRewardedAd: fy,
          setCameraZoom: fy,
          setCrosshairInteractPrompt: fy,
          setLookSensitivity: fy,
          replayAction: fy,
          setReplayPlaying: fy,
          seekReplay: fy,
          setReplayCameraMode: fy,
          syncReplayCameraMode: fy,
          setReplayCameraKeyframe: fy,
          moveReplayCameraKeyframe: fy,
          deleteReplayCameraKeyframes: fy,
          setReplayPlaybackMark: fy,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: fy,
          exportReplayVideo: fy,
          toggleRecording: fy,
          saveClip: fy,
          setRecorderPrefs: fy,
          setReplayViewerOpen: fy
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => Uy.b,
          worldCodeAiGameState: () => Uy.e
        },
        lookups: {
          localPos: () => Zy,
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
  39102: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Oy,
      g: () => Gy,
      h: () => Ry,
      i: () => gb,
      k: () => Vy
    });
    var Uy = Wy(37870),
      hy = Wy(1080),
      fy = Wy(1595),
      Zy = Wy(1606),
      cb = Wy(2597),
      Py = Wy(35549),
      oy = Wy(1177),
      By = Wy(39108),
      Ky = Wy(4022),
      ey = Wy(1977),
      qb = Wy(39113),
      sy = Wy(39119),
      Sy = Wy(39165);
    let Ey = null;

    function ly(yb) {
      const bb = new Map,
        Wy = Wy => {
          if ("string" !== typeof Wy) return;
          let Uy = bb.get(Wy);
          return void 0 === Uy && (Uy = yb(Wy), void 0 !== Uy && bb.set(Wy, Uy)), Uy
        };
      return new Proxy({}, {
        get: (yb, bb) => Wy(bb),
        has: (yb, bb) => void 0 !== Wy(bb)
      })
    }

    function mb(yb) {
      const bb = (0, cb.b)(yb);
      return void 0 !== bb && (0, cb.c)(bb) === yb
    }

    function Cy(yb) {
      var bb;
      const Wy = null === (bb = (0, By.i)()) || void 0 === bb ? void 0 : bb.tables;
      if (void 0 === Wy || !mb(yb)) return;
      const Uy = {
          displayName: Wy.getDisplayName(yb)
        },
        hy = Wy.getItemStat(yb, "description");
      void 0 !== hy && null !== hy && (Uy.description = hy);
      const {
        rootName: fy
      } = Wy.getMetaInfo(yb);
      fy !== yb && (Uy.rootName = fy);
      const Zy = Wy.getItemStat(yb, "armourReduction");
      return void 0 !== Zy && null !== Zy && (Uy.armourReduction = Zy), Uy
    }(0, By.t)((yb => {
      Ey = yb
    }));
    const Ty = (0, Zy.d)("DisplayName", "Description");

    function Vy() {
      return Boolean(fy.c.get("useInventory") && fy.c.get("useFullInventory"))
    }
    let Jy = null;
    const gb = {
        inventory: function() {
          const yb = Sy.d.states.inventory;
          let bb = null;
          const Wy = yb => {
            var Wy;
            return null === yb.chest ? yb : ((null === (Wy = bb) || void 0 === Wy ? void 0 : Wy.from) === yb && bb.chestVersion === (0, sy.c)() || (bb = {
              from: yb,
              chestVersion: (0, sy.c)(),
              view: {
                ...yb,
                chest: (0, sy.m)(yb.chest)
              }
            }), bb.view)
          };
          return {
            current: () => Wy(yb.current()),
            watch: bb => yb.watch((yb => {
              bb(Wy(yb))
            }))
          }
        }(),
        crafting: Sy.d.states.crafting,
        stationItems: {
          current() {
            var yb;
            return (null === (yb = Jy) || void 0 === yb ? void 0 : yb.namesVersion) !== (0, cb.e)() && (Jy = {
              namesVersion: (0, cb.e)(),
              items: {
                enchantable: ly((yb => {
                  const bb = (0, cb.b)(yb);
                  return void 0 !== bb && null !== Ey && Ey.enchantmentPerksOf(bb).length > 0 || void 0
                })),
                salvageable: ly((yb => !(!mb(yb) || null === (0, Py.b)(yb)) || void 0))
              }
            }), Jy.items
          },
          watch: () => () => {}
        },
        itemInfo: function() {
          let yb = null;
          const bb = () => {
            var bb;
            return (null === (bb = yb) || void 0 === bb ? void 0 : bb.namesVersion) !== (0, cb.e)() && (yb = {
              namesVersion: (0, cb.e)(),
              infos: ly(Cy)
            }), yb.infos
          };
          return {
            current: bb,
            watch: Wy => (0, Zy.o)((Uy => {
              Uy.some(Ty) && (yb = null, Wy(bb()))
            }))
          }
        }(),
        creativeVisibility: (0, Zy.l)((function() {
          const yb = {};
          for (const hy of null !== (bb = null === (Wy = Ey) || void 0 === Wy ? void 0 : Wy.creativeItemIds()) && void 0 !== bb ? bb : []) {
            var bb, Wy, Zy, Py;
            const oy = (0, cb.c)(hy);
            if (void 0 === oy) continue;
            const By = null !== (Zy = fy.c.get((0, Uy.d)(oy, "showInCreativeInven"))) && void 0 !== Zy ? Zy : null === (Py = Ey) || void 0 === Py ? void 0 : Py.showInCreativeInvenOf(hy);
            "boolean" === typeof By && (yb[oy] = By)
          }
          return {
            publicLobby: (0, hy.P)((0, oy.e)().lobbyName),
            shownInGame: yb
          }
        }), ["connectedGameChanged"], (0, Zy.d)("ShowInCreativeInven")),
        fullInventory: (0, Zy.l)(Vy, [], (0, Zy.h)("useInventory", "useFullInventory"))
      },
      Gy = {
        inventoryDropRequested: Sy.d.events.inventoryDropRequested,
        chestToggled: Sy.d.events.chestToggled,
        chestRefreshed: Sy.d.events.chestRefreshed,
        inventorySynced: Sy.d.events.inventorySynced,
        enchantingTableOpened: Sy.d.events.enchantingTableOpened
      },
      Oy = {
        removeInventoryItem: Sy.d.commands.removeInventoryItem,
        swapInventorySlots: Sy.d.commands.swapInventorySlots,
        moveInventoryItem: Sy.d.commands.moveInventoryItem,
        quickMoveInventoryItem: Sy.d.commands.quickMoveInventoryItem,
        closeChest: Sy.d.commands.closeChest,
        setInventoryOpen(yb) {
          (0, Ky.h)(ey.v.InventoryOpen, yb ? ey.v.InventoryOpen : 0)
        },
        focusCrafting: Sy.d.commands.focusCrafting,
        craftRecipe: Sy.d.commands.craftRecipe,
        salvageItem: Sy.d.commands.salvageItem,
        enchantItem: Sy.d.commands.enchantItem,
        changeIronChestPasskey(yb) {
          var bb;
          let {
            pos: Wy,
            RP: Uy
          } = yb;
          null === (bb = (0, By.i)()) || void 0 === bb || bb.send(qb.d.ChangeIronChestPasskey, (0, qb.j)({
            Dv: Wy,
            RP: Uy
          }))
        },
        openIronChest(yb) {
          var bb;
          let {
            pos: Wy,
            RP: Uy
          } = yb;
          null === (bb = (0, By.i)()) || void 0 === bb || bb.send(qb.d.OpenIronChest, (0, qb.C)({
            Dv: Wy,
            RP: Uy
          }))
        }
      },
      Ry = {
        enchantingOffer: Sy.d.queries.enchantingOffer
      }
  },
  39156: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Uy,
      f: () => Ky,
      j: () => cb,
      n: () => fy,
      q: () => hy,
      s: () => Py,
      v: () => By
    });
    class Uy extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function hy(yb) {
      return yb instanceof RangeError && /call stack/i.test(yb.message) || yb instanceof Error && "InternalError" === yb.name && /recursion/i.test(yb.message)
    }

    function fy(yb) {
      return /out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(yb))
    }
    const Zy = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function cb(yb) {
      var bb;
      return yb instanceof WebAssembly.RuntimeError || yb instanceof Uy || hy(yb) && Zy.test(null !== (bb = yb.stack) && void 0 !== bb ? bb : "")
    }

    function Py(yb, bb) {
      if (cb(yb)) throw yb;
      console.error(bb, yb)
    }

    function oy(yb, bb, Wy, hy, fy) {
      if (bb % hy !== 0 || bb + Wy > yb.byteLength) throw new Uy(`${fy}: ${Wy} bytes at ${bb}, ${hy}-aligned, outside ${yb.byteLength} bytes of memory`)
    }

    function By(yb, bb, Wy, Uy, hy) {
      return 0 === Wy ? null : (oy(bb, Wy, Uy * yb.BYTES_PER_ELEMENT, yb.BYTES_PER_ELEMENT, hy), new yb(bb, Wy, Uy))
    }

    function Ky(yb, bb, Wy, Uy, hy) {
      return 0 === bb ? null : (oy(yb, bb, Wy, Uy, hy), new DataView(yb, bb, Wy))
    }
  },
  39108: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Uy,
      f: () => ly,
      i: () => Sy,
      l: () => Ey,
      n: () => ey,
      o: () => qb,
      s: () => By,
      t: () => Ky,
      u: () => sy
    });
    class Uy extends Error {
      constructor(yb) {
        super(`the join's code did not load: ${yb instanceof Error?yb.message:String(yb)}`, {
          cause: yb
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === yb || void 0 === yb ? void 0 : yb.request
      }
    }
    let hy = null,
      fy = null,
      Zy = null;
    const cb = [];
    let Py = null;

    function oy(yb, bb) {
      try {
        yb(bb)
      } catch (Wy) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", Wy)
      }
    }

    function By() {
      return Py
    }

    function Ky(yb) {
      cb.push(yb), null !== Py && oy(yb, Py)
    }

    function ey(yb) {
      return hy ??= Promise.all([Wy.e(63), Wy.e(84), Wy.e(197), Wy.e(126), Wy.e(221), Wy.e(198), Wy.e(199), Wy.e(82), Wy.e(227), Wy.e(177), Wy.e(129), Wy.e(183), Wy.e(77), Wy.e(105), Wy.e(224), Wy.e(49)]).then((() => Wy(41060))).then((bb => {
        bb.loadAudio(yb), Py = bb;
        for (const yb of cb) oy(yb, bb);
        return bb
      })).catch((yb => {
        throw hy = null, yb
      })), hy
    }
    async function qb(yb, bb) {
      try {
        const Wy = await ey(yb);
        await Wy.loadClientGame(bb)
      } catch (Wy) {
        throw new Uy(Wy)
      }
    }

    function sy(yb, bb) {
      fy = {
        running: yb,
        shell: bb
      }
    }

    function Sy() {
      return Zy
    }
    async function Ey(yb) {
      const bb = fy;
      if ((null === bb || void 0 === bb ? void 0 : bb.running) !== yb) throw new Error("the core's session has ended");
      const Wy = await ey(bb.shell.audio).catch((yb => {
        throw new Uy(yb)
      }));
      if (null !== Zy) return Zy;
      if (fy !== bb || yb.isStopped) throw new Error("the core stopped while the game code loaded");
      if (Zy = Wy.startGameHost(yb, bb.shell), null === Zy) throw new Error("the core's shared tables didn't read, so the game can't start");
      return Zy
    }

    function ly() {
      null !== Zy && (null !== Py ? Py.endGameHost(Zy) : Zy.closeGame()), Zy = null, fy = null
    }
  },
  39113: (yb, bb, Wy) => {
    Wy.d(bb, {
      C: () => My,
      F: () => Ty,
      H: () => Vy,
      L: () => Ey,
      N: () => Ry,
      O: () => Xy,
      Q: () => sy,
      U: () => uy,
      Y: () => mb,
      Z: () => ly,
      ab: () => Cy,
      d: () => hy,
      db: () => Jy,
      g: () => ny,
      j: () => Yy,
      l: () => qb,
      p: () => Sy,
      t: () => ib,
      u: () => Gy,
      v: () => vb,
      x: () => Oy,
      z: () => gb
    });
    var Uy = Wy(2321);
    const hy = {
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

    function fy(yb, bb) {
      return !ArrayBuffer.isView(yb) || yb instanceof DataView ? Array.isArray(yb) ? yb.map((yb => bb(yb))) : yb : Array.from(yb, (yb => bb(yb)))
    }

    function Zy(yb) {
      if ("string" !== typeof yb) return yb;
      for (let bb = 0; bb < yb.length; bb++) {
        const Wy = yb.charCodeAt(bb);
        if (Wy >= 55296 && Wy <= 57343) return Py.decode(cb.encode(yb))
      }
      return yb
    }
    const cb = new TextEncoder,
      Py = new TextDecoder;

    function oy(yb) {
      return yb
    }
    let By;

    function Ky(yb) {
      return null === yb || "object" !== typeof yb ? yb : [Zy(yb.CU), Zy(yb.pR)]
    }

    function ey(yb) {
      return null === yb || "object" !== typeof yb ? yb : [fy(yb.Dv, oy), fy(yb.RP, oy)]
    }

    function qb(yb) {
      return null === (bb = yb) || "object" !== typeof bb ? bb : [Zy(bb.vc), Zy(bb.mH)];
      var bb
    }

    function sy(yb) {
      return null === (bb = yb) || "object" !== typeof bb ? bb : [bb.id, bb.Ul];
      var bb
    }

    function Sy(yb) {
      return null === (bb = yb) || "object" !== typeof bb ? bb : [bb.qY, Zy(bb.EM), bb.mY, Zy(bb.XM), bb.rY, bb.aY, bb.zD, Zy(bb.fD), Zy(bb.ZD)];
      var bb
    }

    function Ey(yb) {
      return null === (bb = yb) || "object" !== typeof bb ? bb : [fy(bb.qH, oy), bb.Df];
      var bb
    }

    function ly(yb) {
      return null === (bb = yb) || "object" !== typeof bb ? bb : [fy(bb.pY, (yb => Zy(yb))), Zy(bb.wY), bb.AY];
      var bb
    }

    function mb(yb) {
      return null === (bb = yb) || "object" !== typeof bb ? bb : [fy(bb.EY, oy), Zy(bb.lY), bb.VY];
      var bb
    }

    function Cy(yb) {
      return null === (bb = yb) || "object" !== typeof bb ? bb : [Zy(bb.Kl), Zy(bb.qm)];
      var bb
    }

    function Ty(yb) {
      return null === (bb = yb) || "object" !== typeof bb ? bb : [Zy(bb.Zm)];
      var bb
    }

    function Vy(yb) {
      return Zy(yb)
    }

    function Jy(yb) {
      return null === (bb = yb) || "object" !== typeof bb ? bb : [Zy(bb.QF), Zy(bb.kp), Zy(bb.CU), Zy(bb.pR)];
      var bb
    }

    function gb(yb) {
      return Ky(yb)
    }

    function Gy(yb) {
      return Ky(yb)
    }

    function Oy(yb) {
      return null === (bb = yb) || "object" !== typeof bb ? bb : [Zy(bb.JY)];
      var bb
    }

    function Ry(yb) {
      return yb
    }

    function vb(yb) {
      return null === (bb = yb) || "object" !== typeof bb ? bb : [Zy(bb.HL), Zy(bb.wL)];
      var bb
    }

    function ib(yb) {
      return Zy(yb)
    }

    function My(yb) {
      return ey(yb)
    }

    function Yy(yb) {
      return ey(yb)
    }

    function Xy(yb) {
      return null === (bb = yb) || "object" !== typeof bb ? bb : [Zy(bb.KD)];
      var bb
    }

    function ny(yb) {
      return (By ??= (0, Uy.d)().map((yb => yb.name)), By).map((bb => {
        return "string" === typeof(Wy = yb[bb]) ? Zy(Wy) : fy(Wy, oy);
        var Wy
      }))
    }

    function uy(yb) {
      return null === (bb = yb) || "object" !== typeof bb ? bb : [bb.xG, bb.WG, bb.hG];
      var bb
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);