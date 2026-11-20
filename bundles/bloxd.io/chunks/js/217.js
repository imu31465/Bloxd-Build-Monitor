export const id = 217;
export const ids = [217];
export const modules = {
  39088: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => hv,
      g: () => Sv
    });
    const hv = "The world isn't loaded, so no blocks can be seen.",
      Sv = "The world isn't loaded, so nothing in it can be seen."
  },
  38629: (vv, zv, Pv) => {
    function hv(vv) {
      return !(!vv.lobbyLeaderboardInfo && !vv.lobbyManage)
    }
    Pv.d(zv, {
      d: () => hv
    })
  },
  36323: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => ev,
      f: () => Sv
    });
    let hv = () => null;

    function Sv(vv) {
      hv = vv
    }

    function ev(vv, zv) {
      return hv(vv, zv)
    }
  },
  39911: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => sv,
      f: () => Gv,
      h: () => cv,
      i: () => Cv
    });
    var hv = Pv(26),
      Sv = Pv(39918),
      ev = Pv(39898),
      gv = Pv(39927),
      pv = Pv(39907),
      dv = Pv(39933),
      Nv = Pv(39949);

    function lv(vv) {
      var zv, Pv;
      const hv = (0, ev.h)();
      return hv ? null === (zv = (0, Sv.d)(hv.api, vv[0], vv[1], vv[2])) || void 0 === zv || null === (Pv = zv.persisted) || void 0 === Pv ? void 0 : Pv.shared : void 0
    }

    function Tv(vv) {
      return `${vv[0]},${vv[1]},${vv[2]}`
    }
    const Wv = new Map;
    let wv = null,
      av = 0;

    function sv() {
      return av
    }

    function Cv(vv) {
      const zv = null !== wv && wv.key === Tv(vv.pos) ? wv.type : null;
      if (null === zv) return vv;
      let Pv = null;
      if ("Iron" === zv) {
        const {
          cachedPasskey: zv,
          ...hv
        } = iv(vv.pos);
        Pv = {
          Yg: null !== zv && void 0 !== zv ? zv : [0, 0, 0, 0],
          ...hv
        }
      }
      return {
        ...vv,
        type: zv,
        ironChest: Pv
      }
    }

    function iv(vv) {
      const zv = lv(vv),
        Pv = null === zv || void 0 === zv ? void 0 : zv.ownerDbId,
        hv = function(vv) {
          var zv;
          let Pv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lv(vv);
          const hv = Tv(vv),
            Sv = Wv.get(hv);
          return Sv ? Sv.lastOpened < (null !== (zv = null === Pv || void 0 === Pv ? void 0 : Pv.passkeyLastUpdated) && void 0 !== zv ? zv : 0) ? (Wv.delete(hv), null) : [...Sv.Yg] : null
        }(vv, zv);
      return void 0 === Pv ? {
        cachedPasskey: hv
      } : {
        ownerDbId: Pv,
        cachedPasskey: hv
      }
    }(0, Nv.m)(gv.e, (vv => {
      const zv = (0, dv.f)(gv.e, vv);
      if (!(0, dv.d)(zv) || zv.SS) return;
      if (av++, !zv.uh || null === zv.PS) return void(wv = null);
      const Pv = Tv(zv.PS);
      wv = {
        key: Pv,
        type: zv.zS
      }, null !== zv.hS && Wv.set(Pv, {
        Yg: [...zv.hS],
        lastOpened: Date.now()
      })
    })), (0, Nv.i)((() => {
      Wv.clear(), wv = null, av++
    })), (0, Nv.l)((() => {
      null !== wv && (wv = null, av++, hv.j.zC("chestToggleFromServer", !1, !0))
    }));
    const cv = {
        boardEditRequested: {
          watch: vv => (0, hv.l)("EditBoard", (zv => {
            let {
              pos: Pv
            } = zv;
            if (null === Pv) return void vv(null);
            const hv = (0, ev.h)(),
              Sv = (0, ev.s)();
            hv && Sv && vv(Sv.readBoardToEdit(hv.api, hv.chunks, Pv))
          }))
        },
        ironChestOpenRequested: {
          watch: vv => (0, hv.l)("OpenIronChest", (zv => {
            let {
              pos: Pv
            } = zv;
            vv(function(vv) {
              return {
                pos: vv,
                ...iv(vv)
              }
            }(Pv))
          }))
        }
      },
      Gv = {
        writeOnBoard(vv) {
          var zv;
          let {
            pos: Pv,
            text: hv,
            textSize: Sv
          } = vv;
          null === (zv = (0, ev.h)()) || void 0 === zv || zv.send(pv.d.UpdateBoard, (0, pv.L)({
            BN: Pv,
            JN: hv,
            EN: Sv
          }))
        },
        writeBook(vv) {
          var zv;
          let {
            pages: Pv,
            title: hv,
            published: Sv
          } = vv;
          null === (zv = (0, ev.h)()) || void 0 === zv || zv.send(pv.d.UpdateBook, (0, pv.P)({
            Sl: Pv,
            el: hv,
            gl: Sv
          }))
        },
        writeNameTag(vv) {
          var zv;
          null === (zv = (0, ev.h)()) || void 0 === zv || zv.send(pv.d.UpdateNameTag, vv)
        },
        setCustomLobbyBlock(vv) {
          let {
            pos: zv,
            blockName: Pv
          } = vv;
          const hv = (0, ev.s)(),
            Sv = (0, ev.h)();
          hv && Sv && Sv.send(pv.d.SetCustomLobbyBlock, (0, pv.G)({
            yN: hv.blockIdOf(Pv),
            MN: zv
          }))
        }
      }
  },
  39970: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => dv,
      c: () => gv,
      f: () => pv
    });
    var hv = Pv(39889),
      Sv = Pv(4529),
      ev = Pv(39898);

    function gv() {
      var vv;
      const zv = null === (vv = (0, ev.h)()) || void 0 === vv ? void 0 : vv.api.localId;
      return void 0 === zv || zv === hv.ad ? null : String(zv)
    }

    function pv(vv) {
      const zv = (0, ev.h)();
      if (null !== zv) return vv(zv);
      let Pv = null;
      const hv = (0, Sv.o)((() => {
        const zv = (0, ev.h)();
        null !== zv && null === Pv && (hv(), Pv = vv(zv))
      }));
      return () => {
        var vv;
        hv(), null === (vv = Pv) || void 0 === vv || vv()
      }
    }

    function dv(vv, zv, Pv) {
      return {
        current: () => {
          const Pv = (0, ev.h)();
          return null === Pv ? zv : vv(Pv)()
        },
        watch: zv => pv((hv => {
          const Sv = vv(hv);
          let ev = Sv();
          return zv(ev), Pv((() => {
            const vv = Sv();
            vv !== ev && (ev = vv, zv(vv))
          }))
        }))
      }
    }
  },
  39961: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Nv
    });
    var hv = Pv(39898),
      Sv = Pv(39970),
      ev = Pv(39973);

    function gv() {
      var vv, zv;
      return null !== (vv = null === (zv = (0, hv.h)()) || void 0 === zv ? void 0 : zv.itemBridgeSources) && void 0 !== vv ? vv : ev.c
    }

    function pv(vv) {
      return {
        current: () => gv().states[vv].current(),
        watch: zv => (0, Sv.f)((Pv => {
          const hv = Pv.itemBridgeSources.states[vv];
          return zv(hv.current()), hv.watch(zv)
        }))
      }
    }

    function dv(vv) {
      return {
        watch: zv => (0, Sv.f)((Pv => Pv.itemBridgeSources.events[vv].watch(zv)))
      }
    }
    const Nv = {
      states: {
        inventory: pv("inventory"),
        hotbar: pv("hotbar"),
        crafting: pv("crafting"),
        heldItemAim: pv("heldItemAim")
      },
      events: {
        hotbarSlotRequested: dv("hotbarSlotRequested"),
        hotbarScrolled: dv("hotbarScrolled"),
        numberKeyPressed: dv("numberKeyPressed"),
        inventoryDropRequested: dv("inventoryDropRequested"),
        chestToggled: dv("chestToggled"),
        chestRefreshed: dv("chestRefreshed"),
        inventorySynced: dv("inventorySynced"),
        enchantingTableOpened: dv("enchantingTableOpened")
      },
      commands: {
        selectHotbarSlot: vv => gv().commands.selectHotbarSlot(vv),
        removeInventoryItem: vv => gv().commands.removeInventoryItem(vv),
        swapInventorySlots: vv => gv().commands.swapInventorySlots(vv),
        moveInventoryItem: vv => gv().commands.moveInventoryItem(vv),
        quickMoveInventoryItem: vv => gv().commands.quickMoveInventoryItem(vv),
        closeChest: vv => gv().commands.closeChest(vv),
        focusCrafting: vv => gv().commands.focusCrafting(vv),
        craftRecipe: vv => gv().commands.craftRecipe(vv),
        salvageItem: vv => gv().commands.salvageItem(vv),
        enchantItem: vv => gv().commands.enchantItem(vv)
      },
      queries: {
        enchantingOffer: vv => gv().queries.enchantingOffer(vv)
      }
    }
  },
  39973: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => pv
    });
    var hv = Pv(39088);

    function Sv(vv) {
      return {
        current: () => vv,
        watch: () => () => {}
      }
    }

    function ev() {}
    const gv = Object.freeze([0, 0, 0]),
      pv = {
        states: {
          health: Sv({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: Sv({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: Sv({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: Sv({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: Sv({}),
          creativeVisibility: Sv({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: Sv(null),
          heldItemAim: Sv({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: Sv(!1),
          gliderBoostFuel: Sv(0),
          flight: Sv({
            canFly: !1,
            flying: !1
          }),
          crafting: Sv({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: Sv({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: Sv({}),
          fullInventory: Sv(!1),
          crosshairTarget: Sv({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: Sv(!0),
          freeCamera: Sv({
            allowed: !1,
            movesFly: !1
          }),
          replay: Sv(null),
          replayEdits: Sv(null),
          replayRecorder: Sv({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: Sv(!1)
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
          selectHotbarSlot: ev,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: ev,
          setInventoryOpen: ev,
          changeIronChestPasskey: ev,
          dragReplayCamera: ev,
          applyTemporaryThirdPerson: ev,
          holdEmoteWheel: ev,
          recordFlyingMiddleText: ev,
          focusCrafting: ev,
          craftRecipe: () => ({
            Cp: 0,
            Vl: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: ev,
          setShopOpen: ev,
          buyShopItem: ev,
          lobbyManage: ev,
          sendChatMessage: ev,
          ignorePlayer: ev,
          reportPlayer: ev,
          reportWorldCodeChat: ev,
          requestDiscordReportKey: ev,
          reportLobbyOrGame: ev,
          playEmote: ev,
          updateMyCosmetic: ev,
          writeOnBoard: ev,
          writeBook: ev,
          writeNameTag: ev,
          setCustomLobbyBlock: ev,
          openIronChest: ev,
          sendCodeCollab: ev,
          clickCodeBlock: ev,
          bindCustomButtonKeys: ev,
          pressCustomButton: ev,
          moveReplayFreecam: ev,
          holdReplayFreecamVertical: ev,
          respawn: ev,
          wakeUp: ev,
          requestLeaderboard: ev,
          completeTask: ev,
          setServerCookie: ev,
          answerUiRequest: ev,
          chooseRewardedAd: ev,
          setCameraZoom: ev,
          setFreeCameraMovesFly: ev,
          setBlockHighlight: ev,
          setCrosshairInteractPrompt: ev,
          setLookSensitivity: ev,
          replayAction: ev,
          setReplayPlaying: ev,
          seekReplay: ev,
          setReplayCameraMode: ev,
          syncReplayCameraMode: ev,
          setReplayCameraKeyframe: ev,
          moveReplayCameraKeyframe: ev,
          deleteReplayCameraKeyframes: ev,
          setReplayPlaybackMark: ev,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: ev,
          exportReplayVideo: ev,
          toggleRecording: ev,
          saveClip: ev,
          setRecorderPrefs: ev,
          setReplayViewerOpen: ev
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => hv.e,
          worldCodeAiGameState: () => hv.g
        },
        lookups: {
          localPos: () => gv,
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
  39894: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => nv,
      h: () => Yv,
      j: () => Ov,
      l: () => Fv,
      n: () => jv
    });
    var hv = Pv(38726),
      Sv = Pv(1209),
      ev = Pv(1903),
      gv = Pv(1915),
      pv = Pv(3037),
      dv = Pv(36323),
      Nv = Pv(1306),
      lv = Pv(39898),
      Tv = Pv(4561),
      Wv = Pv(2304),
      wv = Pv(39907),
      av = Pv(39911),
      sv = Pv(39961);
    let Cv = null;

    function iv(vv) {
      const zv = new Map,
        Pv = Pv => {
          if ("string" !== typeof Pv) return;
          let hv = zv.get(Pv);
          return void 0 === hv && (hv = vv(Pv), void 0 !== hv && zv.set(Pv, hv)), hv
        };
      return new Proxy({}, {
        get: (vv, zv) => Pv(zv),
        has: (vv, zv) => void 0 !== Pv(zv)
      })
    }

    function cv(vv) {
      const zv = (0, pv.c)(vv);
      return void 0 !== zv && (0, pv.e)(zv) === vv
    }

    function Gv(vv) {
      var zv;
      const Pv = null === (zv = (0, lv.h)()) || void 0 === zv ? void 0 : zv.tables;
      if (void 0 === Pv || !cv(vv)) return;
      const hv = {
          displayName: Pv.getDisplayName(vv)
        },
        Sv = Pv.getItemStat(vv, "description");
      void 0 !== Sv && null !== Sv && (hv.description = Sv);
      const {
        rootName: ev
      } = Pv.getMetaInfo(vv);
      ev !== vv && (hv.rootName = ev);
      const gv = Pv.getItemStat(vv, "armourReduction");
      return void 0 !== gv && null !== gv && (hv.armourReduction = gv), hv
    }(0, lv.w)((vv => {
      Cv = vv
    }));
    const mv = (0, gv.k)("DisplayName", "Description");

    function jv() {
      return Boolean(ev.c.get("useInventory") && ev.c.get("useFullInventory"))
    }
    let fv = null;
    const Fv = {
        inventory: function() {
          const vv = sv.e.states.inventory;
          let zv = null;
          const Pv = vv => {
            var Pv;
            return null === vv.chest ? vv : ((null === (Pv = zv) || void 0 === Pv ? void 0 : Pv.from) === vv && zv.chestVersion === (0, av.d)() || (zv = {
              from: vv,
              chestVersion: (0, av.d)(),
              view: {
                ...vv,
                chest: (0, av.i)(vv.chest)
              }
            }), zv.view)
          };
          return {
            current: () => Pv(vv.current()),
            watch: zv => vv.watch((vv => {
              zv(Pv(vv))
            }))
          }
        }(),
        crafting: sv.e.states.crafting,
        stationItems: {
          current() {
            var vv;
            return (null === (vv = fv) || void 0 === vv ? void 0 : vv.namesVersion) !== (0, pv.f)() && (fv = {
              namesVersion: (0, pv.f)(),
              items: {
                enchantable: iv((vv => {
                  const zv = (0, pv.c)(vv);
                  return void 0 !== zv && null !== Cv && Cv.enchantmentPerksOf(zv).length > 0 || void 0
                })),
                salvageable: iv((vv => !(!cv(vv) || null === (0, dv.d)(vv)) || void 0))
              }
            }), fv.items
          },
          watch: () => () => {}
        },
        itemInfo: function() {
          let vv = null;
          const zv = () => {
            var zv;
            return (null === (zv = vv) || void 0 === zv ? void 0 : zv.namesVersion) !== (0, pv.f)() && (vv = {
              namesVersion: (0, pv.f)(),
              infos: iv(Gv)
            }), vv.infos
          };
          return {
            current: zv,
            watch: Pv => (0, gv.q)((hv => {
              hv.some(mv) && (vv = null, Pv(zv()))
            }))
          }
        }(),
        creativeVisibility: (0, gv.o)((function() {
          const vv = {};
          for (const Sv of null !== (zv = null === (Pv = Cv) || void 0 === Pv ? void 0 : Pv.creativeItemIds()) && void 0 !== zv ? zv : []) {
            var zv, Pv, gv, dv;
            const Nv = (0, pv.e)(Sv);
            if (void 0 === Nv) continue;
            const lv = null !== (gv = ev.c.get((0, hv.g)(Nv, "showInCreativeInven"))) && void 0 !== gv ? gv : null === (dv = Cv) || void 0 === dv ? void 0 : dv.showInCreativeInvenOf(Sv);
            "boolean" === typeof lv && (vv[Nv] = lv)
          }
          return {
            publicLobby: (0, Sv.S)((0, Nv.c)().lobbyName),
            shownInGame: vv
          }
        }), ["connectedGameChanged"], (0, gv.k)("ShowInCreativeInven")),
        fullInventory: (0, gv.o)(jv, [], (0, gv.m)("useInventory", "useFullInventory"))
      },
      Yv = {
        inventoryDropRequested: sv.e.events.inventoryDropRequested,
        chestToggled: sv.e.events.chestToggled,
        chestRefreshed: sv.e.events.chestRefreshed,
        inventorySynced: sv.e.events.inventorySynced,
        enchantingTableOpened: sv.e.events.enchantingTableOpened
      },
      nv = {
        removeInventoryItem: sv.e.commands.removeInventoryItem,
        swapInventorySlots: sv.e.commands.swapInventorySlots,
        moveInventoryItem: sv.e.commands.moveInventoryItem,
        quickMoveInventoryItem: sv.e.commands.quickMoveInventoryItem,
        closeChest: sv.e.commands.closeChest,
        setInventoryOpen(vv) {
          (0, Tv.g)(Wv.u.InventoryOpen, vv ? Wv.u.InventoryOpen : 0)
        },
        focusCrafting: sv.e.commands.focusCrafting,
        craftRecipe: sv.e.commands.craftRecipe,
        salvageItem: sv.e.commands.salvageItem,
        enchantItem: sv.e.commands.enchantItem,
        changeIronChestPasskey(vv) {
          var zv;
          let {
            pos: Pv,
            Yg: hv
          } = vv;
          null === (zv = (0, lv.h)()) || void 0 === zv || zv.send(wv.d.ChangeIronChestPasskey, (0, wv.g)({
            PS: Pv,
            Yg: hv
          }))
        },
        openIronChest(vv) {
          var zv;
          let {
            pos: Pv,
            Yg: hv
          } = vv;
          null === (zv = (0, lv.h)()) || void 0 === zv || zv.send(wv.d.OpenIronChest, (0, wv.x)({
            PS: Pv,
            Yg: hv
          }))
        }
      },
      Ov = {
        enchantingOffer: sv.e.queries.enchantingOffer
      }
  },
  39956: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => hv,
      e: () => Tv,
      h: () => pv,
      l: () => ev,
      o: () => Sv,
      q: () => dv,
      u: () => lv
    });
    class hv extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function Sv(vv) {
      return vv instanceof RangeError && /call stack/i.test(vv.message) || vv instanceof Error && "InternalError" === vv.name && /recursion/i.test(vv.message)
    }

    function ev(vv) {
      return /out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(vv))
    }
    const gv = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function pv(vv) {
      var zv;
      return vv instanceof WebAssembly.RuntimeError || vv instanceof hv || Sv(vv) && gv.test(null !== (zv = vv.stack) && void 0 !== zv ? zv : "")
    }

    function dv(vv, zv) {
      if (pv(vv)) throw vv;
      console.error(zv, vv)
    }

    function Nv(vv, zv, Pv, Sv, ev) {
      if (zv % Sv !== 0 || zv + Pv > vv.byteLength) throw new hv(`${ev}: ${Pv} bytes at ${zv}, ${Sv}-aligned, outside ${vv.byteLength} bytes of memory`)
    }

    function lv(vv, zv, Pv, hv, Sv) {
      return 0 === Pv ? null : (Nv(zv, Pv, hv * vv.BYTES_PER_ELEMENT, vv.BYTES_PER_ELEMENT, Sv), new vv(zv, Pv, hv))
    }

    function Tv(vv, zv, Pv, hv, Sv) {
      return 0 === zv ? null : (Nv(vv, zv, Pv, hv, Sv), new DataView(vv, zv, Pv))
    }
  },
  39898: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => hv,
      f: () => iv,
      h: () => sv,
      j: () => Cv,
      n: () => Wv,
      q: () => wv,
      s: () => lv,
      w: () => Tv,
      y: () => av
    });
    class hv extends Error {
      constructor(vv) {
        super(`the join's code did not load: ${vv instanceof Error?vv.message:String(vv)}`, {
          cause: vv
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === vv || void 0 === vv ? void 0 : vv.request
      }
    }
    let Sv = null,
      ev = null,
      gv = null;
    const pv = [];
    let dv = null;

    function Nv(vv, zv) {
      try {
        vv(zv)
      } catch (Pv) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", Pv)
      }
    }

    function lv() {
      return dv
    }

    function Tv(vv) {
      pv.push(vv), null !== dv && Nv(vv, dv)
    }

    function Wv(vv) {
      return Sv ??= Promise.all([Pv.e(70), Pv.e(95), Pv.e(215), Pv.e(75), Pv.e(216), Pv.e(189), Pv.e(94), Pv.e(235), Pv.e(261), Pv.e(187), Pv.e(263), Pv.e(199), Pv.e(186), Pv.e(200), Pv.e(136), Pv.e(86), Pv.e(114), Pv.e(239), Pv.e(54)]).then((() => Pv(41893))).then((zv => {
        zv.loadAudio(vv), dv = zv;
        for (const vv of pv) Nv(vv, zv);
        return zv
      })).catch((vv => {
        throw Sv = null, vv
      })), Sv
    }
    async function wv(vv, zv) {
      try {
        const Pv = await Wv(vv);
        await Pv.loadClientGame(zv)
      } catch (Pv) {
        throw new hv(Pv)
      }
    }

    function av(vv, zv) {
      ev = {
        running: vv,
        shell: zv
      }
    }

    function sv() {
      return gv
    }
    async function Cv(vv) {
      const zv = ev;
      if ((null === zv || void 0 === zv ? void 0 : zv.running) !== vv) throw new Error("the core's session has ended");
      const Pv = await Wv(zv.shell.audio).catch((vv => {
        throw new hv(vv)
      }));
      if (null !== gv) return gv;
      if (ev !== zv || vv.isStopped) throw new Error("the core stopped while the game code loaded");
      if (gv = Pv.startGameHost(vv, zv.shell), null === gv) throw new Error("the core's shared tables didn't read, so the game can't start");
      return gv
    }

    function iv() {
      null !== gv && (null !== dv ? dv.endGameHost(gv) : gv.closeGame()), gv = null, ev = null
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);