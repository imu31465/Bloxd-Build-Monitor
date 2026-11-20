export const id = 218;
export const ids = [218];
export const modules = {
  39535: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Yq,
      d: () => lq
    });
    const Yq = "The world isn't loaded, so no blocks can be seen.",
      lq = "The world isn't loaded, so nothing in it can be seen."
  },
  39056: (qq, Eq, gq) => {
    function Yq(qq) {
      return !(!qq.lobbyLeaderboardInfo && !qq.lobbyManage)
    }
    gq.d(Eq, {
      d: () => Yq
    })
  },
  36851: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Oq,
      c: () => lq
    });
    let Yq = () => null;

    function lq(qq) {
      Yq = qq
    }

    function Oq(qq, Eq) {
      return Yq(qq, Eq)
    }
  },
  40331: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Vq,
      e: () => oq,
      i: () => Hq,
      j: () => dq
    });
    var Yq = gq(31),
      lq = gq(40334),
      Oq = gq(40325),
      mq = gq(40343),
      xq = gq(40329),
      Aq = gq(40350),
      cq = gq(40366);

    function uq(qq) {
      var Eq, gq;
      const Yq = (0, Oq.e)();
      return Yq ? null === (Eq = (0, lq.d)(Yq.api, qq[0], qq[1], qq[2])) || void 0 === Eq || null === (gq = Eq.persisted) || void 0 === gq ? void 0 : gq.shared : void 0
    }

    function Bq(qq) {
      return `${qq[0]},${qq[1]},${qq[2]}`
    }
    const Wq = new Map;
    let Nq = null,
      aq = 0;

    function Vq() {
      return aq
    }

    function dq(qq) {
      const Eq = null !== Nq && Nq.key === Bq(qq.pos) ? Nq.type : null;
      if (null === Eq) return qq;
      let gq = null;
      if ("Iron" === Eq) {
        const {
          cachedPasskey: Eq,
          ...Yq
        } = jq(qq.pos);
        gq = {
          Nu: null !== Eq && void 0 !== Eq ? Eq : [0, 0, 0, 0],
          ...Yq
        }
      }
      return {
        ...qq,
        type: Eq,
        ironChest: gq
      }
    }

    function jq(qq) {
      const Eq = uq(qq),
        gq = null === Eq || void 0 === Eq ? void 0 : Eq.ownerDbId,
        Yq = function(qq) {
          var Eq;
          let gq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uq(qq);
          const Yq = Bq(qq),
            lq = Wq.get(Yq);
          return lq ? lq.lastOpened < (null !== (Eq = null === gq || void 0 === gq ? void 0 : gq.passkeyLastUpdated) && void 0 !== Eq ? Eq : 0) ? (Wq.delete(Yq), null) : [...lq.Nu] : null
        }(qq, Eq);
      return void 0 === gq ? {
        cachedPasskey: Yq
      } : {
        ownerDbId: gq,
        cachedPasskey: Yq
      }
    }(0, cq.l)(mq.b, (qq => {
      const Eq = (0, Aq.d)(mq.b, qq);
      if (!(0, Aq.b)(Eq) || Eq.Xq) return;
      if (aq++, !Eq.Jq || null === Eq.Uq) return void(Nq = null);
      const gq = Bq(Eq.Uq);
      Nq = {
        key: gq,
        type: Eq.Rq
      }, null !== Eq.Fq && Wq.set(gq, {
        Nu: [...Eq.Fq],
        lastOpened: Date.now()
      })
    })), (0, cq.d)((() => {
      Wq.clear(), Nq = null, aq++
    })), (0, cq.h)((() => {
      null !== Nq && (Nq = null, aq++, Yq.i.TV("chestToggleFromServer", !1, !0))
    }));
    const Hq = {
        boardEditRequested: {
          watch: qq => (0, Yq.k)("EditBoard", (Eq => {
            let {
              pos: gq
            } = Eq;
            if (null === gq) return void qq(null);
            const Yq = (0, Oq.e)(),
              lq = (0, Oq.k)();
            Yq && lq && qq(lq.readBoardToEdit(Yq.api, Yq.chunks, gq))
          }))
        },
        ironChestOpenRequested: {
          watch: qq => (0, Yq.k)("OpenIronChest", (Eq => {
            let {
              pos: gq
            } = Eq;
            qq(function(qq) {
              return {
                pos: qq,
                ...jq(qq)
              }
            }(gq))
          }))
        }
      },
      oq = {
        writeOnBoard(qq) {
          var Eq;
          let {
            pos: gq,
            text: Yq,
            textSize: lq
          } = qq;
          null === (Eq = (0, Oq.e)()) || void 0 === Eq || Eq.send(xq.b.UpdateBoard, (0, xq.Z)({
            Au: gq,
            cu: Yq,
            uu: lq
          }))
        },
        writeBook(qq) {
          var Eq;
          let {
            pages: gq,
            title: Yq,
            published: lq
          } = qq;
          null === (Eq = (0, Oq.e)()) || void 0 === Eq || Eq.send(xq.b.UpdateBook, (0, xq.bb)({
            tc: gq,
            vc: Yq,
            hc: lq
          }))
        },
        writeNameTag(qq) {
          var Eq;
          null === (Eq = (0, Oq.e)()) || void 0 === Eq || Eq.send(xq.b.UpdateNameTag, qq)
        },
        setCustomLobbyBlock(qq) {
          let {
            pos: Eq,
            blockName: gq
          } = qq;
          const Yq = (0, Oq.k)(),
            lq = (0, Oq.e)();
          Yq && lq && lq.send(xq.b.SetCustomLobbyBlock, (0, xq.I)({
            lc: Yq.blockIdOf(gq),
            Yc: Eq
          }))
        }
      }
  },
  40377: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Aq,
      f: () => mq,
      h: () => xq
    });
    var Yq = gq(40318),
      lq = gq(4608),
      Oq = gq(40325);

    function mq() {
      var qq;
      const Eq = null === (qq = (0, Oq.e)()) || void 0 === qq ? void 0 : qq.api.localId;
      return void 0 === Eq || Eq === Yq.gd ? null : String(Eq)
    }

    function xq(qq) {
      const Eq = (0, Oq.e)();
      if (null !== Eq) return qq(Eq);
      let gq = null;
      const Yq = (0, lq.w)((() => {
        const Eq = (0, Oq.e)();
        null !== Eq && null === gq && (Yq(), gq = qq(Eq))
      }));
      return () => {
        var qq;
        Yq(), null === (qq = gq) || void 0 === qq || qq()
      }
    }

    function Aq(qq, Eq, gq) {
      return {
        current: () => {
          const gq = (0, Oq.e)();
          return null === gq ? Eq : qq(gq)()
        },
        watch: Eq => xq((Yq => {
          const lq = qq(Yq);
          let Oq = lq();
          return Eq(Oq), gq((() => {
            const qq = lq();
            qq !== Oq && (Oq = qq, Eq(qq))
          }))
        }))
      }
    }
  },
  40371: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => cq
    });
    var Yq = gq(40325),
      lq = gq(40377),
      Oq = gq(40385);

    function mq() {
      var qq, Eq;
      return null !== (qq = null === (Eq = (0, Yq.e)()) || void 0 === Eq ? void 0 : Eq.itemBridgeSources) && void 0 !== qq ? qq : Oq.b
    }

    function xq(qq) {
      return {
        current: () => mq().states[qq].current(),
        watch: Eq => (0, lq.h)((gq => {
          const Yq = gq.itemBridgeSources.states[qq];
          return Eq(Yq.current()), Yq.watch(Eq)
        }))
      }
    }

    function Aq(qq) {
      return {
        watch: Eq => (0, lq.h)((gq => gq.itemBridgeSources.events[qq].watch(Eq)))
      }
    }
    const cq = {
      states: {
        inventory: xq("inventory"),
        hotbar: xq("hotbar"),
        crafting: xq("crafting"),
        heldItemAim: xq("heldItemAim")
      },
      events: {
        hotbarSlotRequested: Aq("hotbarSlotRequested"),
        hotbarScrolled: Aq("hotbarScrolled"),
        numberKeyPressed: Aq("numberKeyPressed"),
        inventoryDropRequested: Aq("inventoryDropRequested"),
        chestToggled: Aq("chestToggled"),
        chestRefreshed: Aq("chestRefreshed"),
        inventorySynced: Aq("inventorySynced"),
        enchantingTableOpened: Aq("enchantingTableOpened")
      },
      commands: {
        selectHotbarSlot: qq => mq().commands.selectHotbarSlot(qq),
        removeInventoryItem: qq => mq().commands.removeInventoryItem(qq),
        swapInventorySlots: qq => mq().commands.swapInventorySlots(qq),
        moveInventoryItem: qq => mq().commands.moveInventoryItem(qq),
        quickMoveInventoryItem: qq => mq().commands.quickMoveInventoryItem(qq),
        closeChest: qq => mq().commands.closeChest(qq),
        focusCrafting: qq => mq().commands.focusCrafting(qq),
        craftRecipe: qq => mq().commands.craftRecipe(qq),
        salvageItem: qq => mq().commands.salvageItem(qq),
        enchantItem: qq => mq().commands.enchantItem(qq)
      },
      queries: {
        enchantingOffer: qq => mq().queries.enchantingOffer(qq)
      }
    }
  },
  40385: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => xq
    });
    var Yq = gq(39535);

    function lq(qq) {
      return {
        current: () => qq,
        watch: () => () => {}
      }
    }

    function Oq() {}
    const mq = Object.freeze([0, 0, 0]),
      xq = {
        states: {
          health: lq({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: lq({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: lq({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: lq({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: lq({}),
          creativeVisibility: lq({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: lq(null),
          heldItemAim: lq({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: lq(!1),
          gliderBoostFuel: lq(0),
          flight: lq({
            canFly: !1,
            flying: !1
          }),
          crafting: lq({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: lq({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: lq({}),
          fullInventory: lq(!1),
          crosshairTarget: lq({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: lq(!0),
          freeCamera: lq({
            allowed: !1,
            movesFly: !1
          }),
          replay: lq(null),
          replayEdits: lq(null),
          replayRecorder: lq({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: lq(!1)
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
          selectHotbarSlot: Oq,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: Oq,
          setInventoryOpen: Oq,
          changeIronChestPasskey: Oq,
          dragReplayCamera: Oq,
          applyTemporaryThirdPerson: Oq,
          holdEmoteWheel: Oq,
          recordFlyingMiddleText: Oq,
          focusCrafting: Oq,
          craftRecipe: () => ({
            ac: 0,
            eA: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: Oq,
          setShopOpen: Oq,
          buyShopItem: Oq,
          lobbyManage: Oq,
          sendChatMessage: Oq,
          ignorePlayer: Oq,
          reportPlayer: Oq,
          reportWorldCodeChat: Oq,
          requestDiscordReportKey: Oq,
          reportLobbyOrGame: Oq,
          playEmote: Oq,
          updateMyCosmetic: Oq,
          writeOnBoard: Oq,
          writeBook: Oq,
          writeNameTag: Oq,
          setCustomLobbyBlock: Oq,
          openIronChest: Oq,
          sendCodeCollab: Oq,
          clickCodeBlock: Oq,
          bindCustomButtonKeys: Oq,
          pressCustomButton: Oq,
          moveReplayFreecam: Oq,
          holdReplayFreecamVertical: Oq,
          respawn: Oq,
          wakeUp: Oq,
          requestLeaderboard: Oq,
          completeTask: Oq,
          setServerCookie: Oq,
          answerUiRequest: Oq,
          chooseRewardedAd: Oq,
          setCameraZoom: Oq,
          setFreeCameraMovesFly: Oq,
          setBlockHighlight: Oq,
          setCrosshairInteractPrompt: Oq,
          setLookSensitivity: Oq,
          replayAction: Oq,
          setReplayPlaying: Oq,
          seekReplay: Oq,
          setReplayCameraMode: Oq,
          syncReplayCameraMode: Oq,
          setReplayCameraKeyframe: Oq,
          moveReplayCameraKeyframe: Oq,
          deleteReplayCameraKeyframes: Oq,
          setReplayPlaybackMark: Oq,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: Oq,
          exportReplayVideo: Oq,
          toggleRecording: Oq,
          saveClip: Oq,
          setRecorderPrefs: Oq,
          setReplayViewerOpen: Oq
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => Yq.b,
          worldCodeAiGameState: () => Yq.d
        },
        lookups: {
          localPos: () => mq,
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
  40320: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => vq,
      e: () => rq,
      g: () => hq,
      i: () => tq,
      j: () => Qq
    });
    var Yq = gq(39174),
      lq = gq(1214),
      Oq = gq(1926),
      mq = gq(1933),
      xq = gq(3166),
      Aq = gq(36851),
      cq = gq(1308),
      uq = gq(40325),
      Bq = gq(4637),
      Wq = gq(2357),
      Nq = gq(40329),
      aq = gq(40331),
      Vq = gq(40371);
    let dq = null;

    function jq(qq) {
      const Eq = new Map,
        gq = gq => {
          if ("string" !== typeof gq) return;
          let Yq = Eq.get(gq);
          return void 0 === Yq && (Yq = qq(gq), void 0 !== Yq && Eq.set(gq, Yq)), Yq
        };
      return new Proxy({}, {
        get: (qq, Eq) => gq(Eq),
        has: (qq, Eq) => void 0 !== gq(Eq)
      })
    }

    function Hq(qq) {
      const Eq = (0, xq.e)(qq);
      return void 0 !== Eq && (0, xq.h)(Eq) === qq
    }

    function oq(qq) {
      var Eq;
      const gq = null === (Eq = (0, uq.e)()) || void 0 === Eq ? void 0 : Eq.tables;
      if (void 0 === gq || !Hq(qq)) return;
      const Yq = {
          displayName: gq.getDisplayName(qq)
        },
        lq = gq.getItemStat(qq, "description");
      void 0 !== lq && null !== lq && (Yq.description = lq);
      const {
        rootName: Oq
      } = gq.getMetaInfo(qq);
      Oq !== qq && (Yq.rootName = Oq);
      const mq = gq.getItemStat(qq, "armourReduction");
      return void 0 !== mq && null !== mq && (Yq.armourReduction = mq), Yq
    }(0, uq.n)((qq => {
      dq = qq
    }));
    const Pq = (0, mq.f)("DisplayName", "Description");

    function Qq() {
      return Boolean(Oq.c.get("useInventory") && Oq.c.get("useFullInventory"))
    }
    let yq = null;
    const tq = {
        inventory: function() {
          const qq = Vq.c.states.inventory;
          let Eq = null;
          const gq = qq => {
            var gq;
            return null === qq.chest ? qq : ((null === (gq = Eq) || void 0 === gq ? void 0 : gq.from) === qq && Eq.chestVersion === (0, aq.d)() || (Eq = {
              from: qq,
              chestVersion: (0, aq.d)(),
              view: {
                ...qq,
                chest: (0, aq.j)(qq.chest)
              }
            }), Eq.view)
          };
          return {
            current: () => gq(qq.current()),
            watch: Eq => qq.watch((qq => {
              Eq(gq(qq))
            }))
          }
        }(),
        crafting: Vq.c.states.crafting,
        stationItems: {
          current() {
            var qq;
            return (null === (qq = yq) || void 0 === qq ? void 0 : qq.namesVersion) !== (0, xq.k)() && (yq = {
              namesVersion: (0, xq.k)(),
              items: {
                enchantable: jq((qq => {
                  const Eq = (0, xq.e)(qq);
                  return void 0 !== Eq && null !== dq && dq.enchantmentPerksOf(Eq).length > 0 || void 0
                })),
                salvageable: jq((qq => !(!Hq(qq) || null === (0, Aq.b)(qq)) || void 0))
              }
            }), yq.items
          },
          watch: () => () => {}
        },
        itemInfo: function() {
          let qq = null;
          const Eq = () => {
            var Eq;
            return (null === (Eq = qq) || void 0 === Eq ? void 0 : Eq.namesVersion) !== (0, xq.k)() && (qq = {
              namesVersion: (0, xq.k)(),
              infos: jq(oq)
            }), qq.infos
          };
          return {
            current: Eq,
            watch: gq => (0, mq.o)((Yq => {
              Yq.some(Pq) && (qq = null, gq(Eq()))
            }))
          }
        }(),
        creativeVisibility: (0, mq.j)((function() {
          const qq = {};
          for (const lq of null !== (Eq = null === (gq = dq) || void 0 === gq ? void 0 : gq.creativeItemIds()) && void 0 !== Eq ? Eq : []) {
            var Eq, gq, mq, Aq;
            const cq = (0, xq.h)(lq);
            if (void 0 === cq) continue;
            const uq = null !== (mq = Oq.c.get((0, Yq.c)(cq, "showInCreativeInven"))) && void 0 !== mq ? mq : null === (Aq = dq) || void 0 === Aq ? void 0 : Aq.showInCreativeInvenOf(lq);
            "boolean" === typeof uq && (qq[cq] = uq)
          }
          return {
            publicLobby: (0, lq.N)((0, cq.e)().lobbyName),
            shownInGame: qq
          }
        }), ["connectedGameChanged"], (0, mq.f)("ShowInCreativeInven")),
        fullInventory: (0, mq.j)(Qq, [], (0, mq.h)("useInventory", "useFullInventory"))
      },
      rq = {
        inventoryDropRequested: Vq.c.events.inventoryDropRequested,
        chestToggled: Vq.c.events.chestToggled,
        chestRefreshed: Vq.c.events.chestRefreshed,
        inventorySynced: Vq.c.events.inventorySynced,
        enchantingTableOpened: Vq.c.events.enchantingTableOpened
      },
      vq = {
        removeInventoryItem: Vq.c.commands.removeInventoryItem,
        swapInventorySlots: Vq.c.commands.swapInventorySlots,
        moveInventoryItem: Vq.c.commands.moveInventoryItem,
        quickMoveInventoryItem: Vq.c.commands.quickMoveInventoryItem,
        closeChest: Vq.c.commands.closeChest,
        setInventoryOpen(qq) {
          (0, Bq.k)(Wq.C.InventoryOpen, qq ? Wq.C.InventoryOpen : 0)
        },
        focusCrafting: Vq.c.commands.focusCrafting,
        craftRecipe: Vq.c.commands.craftRecipe,
        salvageItem: Vq.c.commands.salvageItem,
        enchantItem: Vq.c.commands.enchantItem,
        changeIronChestPasskey(qq) {
          var Eq;
          let {
            pos: gq,
            Nu: Yq
          } = qq;
          null === (Eq = (0, uq.e)()) || void 0 === Eq || Eq.send(Nq.b.ChangeIronChestPasskey, (0, Nq.g)({
            Uq: gq,
            Nu: Yq
          }))
        },
        openIronChest(qq) {
          var Eq;
          let {
            pos: gq,
            Nu: Yq
          } = qq;
          null === (Eq = (0, uq.e)()) || void 0 === Eq || Eq.send(Nq.b.OpenIronChest, (0, Nq.C)({
            Uq: gq,
            Nu: Yq
          }))
        }
      },
      hq = {
        enchantingOffer: Vq.c.queries.enchantingOffer
      }
  },
  40369: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Yq,
      g: () => Bq,
      k: () => xq,
      l: () => Oq,
      o: () => lq,
      r: () => Aq,
      v: () => uq
    });
    class Yq extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function lq(qq) {
      return qq instanceof RangeError && /call stack/i.test(qq.message) || qq instanceof Error && "InternalError" === qq.name && /recursion/i.test(qq.message)
    }

    function Oq(qq) {
      return /out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(qq))
    }
    const mq = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function xq(qq) {
      var Eq;
      return qq instanceof WebAssembly.RuntimeError || qq instanceof Yq || lq(qq) && mq.test(null !== (Eq = qq.stack) && void 0 !== Eq ? Eq : "")
    }

    function Aq(qq, Eq) {
      if (xq(qq)) throw qq;
      console.error(Eq, qq)
    }

    function cq(qq, Eq, gq, lq, Oq) {
      if (Eq % lq !== 0 || Eq + gq > qq.byteLength) throw new Yq(`${Oq}: ${gq} bytes at ${Eq}, ${lq}-aligned, outside ${qq.byteLength} bytes of memory`)
    }

    function uq(qq, Eq, gq, Yq, lq) {
      return 0 === gq ? null : (cq(Eq, gq, Yq * qq.BYTES_PER_ELEMENT, qq.BYTES_PER_ELEMENT, lq), new qq(Eq, gq, Yq))
    }

    function Bq(qq, Eq, gq, Yq, lq) {
      return 0 === Eq ? null : (cq(qq, Eq, gq, Yq, lq), new DataView(qq, Eq, gq))
    }
  },
  40325: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Yq,
      c: () => jq,
      e: () => Vq,
      f: () => dq,
      i: () => Wq,
      j: () => Nq,
      k: () => uq,
      n: () => Bq,
      q: () => aq
    });
    class Yq extends Error {
      constructor(qq) {
        super(`the join's code did not load: ${qq instanceof Error?qq.message:String(qq)}`, {
          cause: qq
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === qq || void 0 === qq ? void 0 : qq.request
      }
    }
    let lq = null,
      Oq = null,
      mq = null;
    const xq = [];
    let Aq = null;

    function cq(qq, Eq) {
      try {
        qq(Eq)
      } catch (gq) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", gq)
      }
    }

    function uq() {
      return Aq
    }

    function Bq(qq) {
      xq.push(qq), null !== Aq && cq(qq, Aq)
    }

    function Wq(qq) {
      return lq ??= Promise.all([gq.e(70), gq.e(95), gq.e(216), gq.e(75), gq.e(217), gq.e(190), gq.e(94), gq.e(235), gq.e(261), gq.e(188), gq.e(263), gq.e(200), gq.e(187), gq.e(201), gq.e(137), gq.e(86), gq.e(115), gq.e(239), gq.e(54)]).then((() => gq(42335))).then((Eq => {
        Eq.loadAudio(qq), Aq = Eq;
        for (const qq of xq) cq(qq, Eq);
        return Eq
      })).catch((qq => {
        throw lq = null, qq
      })), lq
    }
    async function Nq(qq, Eq) {
      try {
        const gq = await Wq(qq);
        await gq.loadClientGame(Eq)
      } catch (gq) {
        throw new Yq(gq)
      }
    }

    function aq(qq, Eq) {
      Oq = {
        running: qq,
        shell: Eq
      }
    }

    function Vq() {
      return mq
    }
    async function dq(qq) {
      const Eq = Oq;
      if ((null === Eq || void 0 === Eq ? void 0 : Eq.running) !== qq) throw new Error("the core's session has ended");
      const gq = await Wq(Eq.shell.audio).catch((qq => {
        throw new Yq(qq)
      }));
      if (null !== mq) return mq;
      if (Oq !== Eq || qq.isStopped) throw new Error("the core stopped while the game code loaded");
      if (mq = gq.startGameHost(qq, Eq.shell), null === mq) throw new Error("the core's shared tables didn't read, so the game can't start");
      return mq
    }

    function jq() {
      null !== mq && (null !== Aq ? Aq.endGameHost(mq) : mq.closeGame()), mq = null, Oq = null
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);