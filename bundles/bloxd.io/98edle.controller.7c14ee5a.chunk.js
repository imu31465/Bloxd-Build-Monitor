export const id = 25;
export const ids = [25];
export const modules = {
  7143: (WW, RW, MW) => {
    var wW = {
      "./nintendo/A.svg": 7149,
      "./nintendo/B.svg": 7157,
      "./nintendo/Down.svg": 7163,
      "./nintendo/Home.svg": 7169,
      "./nintendo/LB.svg": 7177,
      "./nintendo/LS.svg": 7181,
      "./nintendo/LT.svg": 7183,
      "./nintendo/Left.svg": 7190,
      "./nintendo/LeftStick.svg": 7195,
      "./nintendo/Menu.svg": 7203,
      "./nintendo/RB.svg": 7212,
      "./nintendo/RS.svg": 7218,
      "./nintendo/RT.svg": 7227,
      "./nintendo/Right.svg": 7234,
      "./nintendo/RightStick.svg": 7236,
      "./nintendo/Up.svg": 7242,
      "./nintendo/View.svg": 7246,
      "./nintendo/X.svg": 7255,
      "./nintendo/Y.svg": 7262,
      "./playstation/A.svg": 7268,
      "./playstation/B.svg": 7274,
      "./playstation/Down.svg": 7281,
      "./playstation/Home.svg": 7287,
      "./playstation/LB.svg": 7292,
      "./playstation/LS.svg": 7294,
      "./playstation/LT.svg": 7296,
      "./playstation/Left.svg": 7299,
      "./playstation/LeftStick.svg": 7308,
      "./playstation/Menu.svg": 7311,
      "./playstation/RB.svg": 7314,
      "./playstation/RS.svg": 7318,
      "./playstation/RT.svg": 7321,
      "./playstation/Right.svg": 7326,
      "./playstation/RightStick.svg": 7330,
      "./playstation/Up.svg": 7338,
      "./playstation/View.svg": 7345,
      "./playstation/X.svg": 7351,
      "./playstation/Y.svg": 7360,
      "./steamdeck/A.svg": 7369,
      "./steamdeck/B.svg": 7378,
      "./steamdeck/Down.svg": 7380,
      "./steamdeck/Home.svg": 7383,
      "./steamdeck/LB.svg": 7387,
      "./steamdeck/LS.svg": 7395,
      "./steamdeck/LT.svg": 7401,
      "./steamdeck/Left.svg": 7406,
      "./steamdeck/LeftStick.svg": 7414,
      "./steamdeck/Menu.svg": 7418,
      "./steamdeck/RB.svg": 7421,
      "./steamdeck/RS.svg": 7423,
      "./steamdeck/RT.svg": 7428,
      "./steamdeck/Right.svg": 7432,
      "./steamdeck/RightStick.svg": 7440,
      "./steamdeck/Up.svg": 7445,
      "./steamdeck/View.svg": 7452,
      "./steamdeck/X.svg": 7459,
      "./steamdeck/Y.svg": 7461,
      "./xbox/A.svg": 7463,
      "./xbox/B.svg": 7468,
      "./xbox/Down.svg": 7475,
      "./xbox/Home.svg": 7478,
      "./xbox/LB.svg": 7486,
      "./xbox/LS.svg": 7490,
      "./xbox/LT.svg": 7492,
      "./xbox/Left.svg": 7494,
      "./xbox/LeftStick.svg": 7498,
      "./xbox/Menu.svg": 7505,
      "./xbox/RB.svg": 7510,
      "./xbox/RS.svg": 7518,
      "./xbox/RT.svg": 7521,
      "./xbox/Right.svg": 7530,
      "./xbox/RightStick.svg": 7532,
      "./xbox/Up.svg": 7535,
      "./xbox/View.svg": 7540,
      "./xbox/X.svg": 7542,
      "./xbox/Y.svg": 7547
    };

    function CW(WW) {
      var RW = zR(WW);
      return MW(RW)
    }

    function zR(WW) {
      if (!MW.o(wW, WW)) {
        var RW = new Error("Cannot find module '" + WW + "'");
        throw RW.code = "MODULE_NOT_FOUND", RW
      }
      return wW[WW]
    }
    CW.keys = function() {
      return Object.keys(wW)
    }, CW.resolve = zR, WW.exports = CW, CW.id = 7143
  },
  7090: (WW, RW, MW) => {
    MW.d(RW, {
      A: () => gR,
      c: () => CW,
      f: () => zR,
      i: () => tR,
      m: () => BW,
      p: () => NW,
      s: () => bR,
      v: () => wW,
      y: () => TW
    });
    const wW = ["menuConfirm", "menuBack", "menuTabPrevious", "menuTabNext", "menuPageUp", "menuPageDown", "menuSecondary", "menuToggleCursor"],
      CW = [{
        group: "gameplay",
        actions: ["jump", "sneak", "sneakToggle", "sprint", "attack", "use", "hotbarPrevious", "hotbarNext", "inventory", "actionButton", "perspective", "JI", "drop", "emoteWheel", "chat", "pause", "leaderboard"]
      }, {
        group: "menu",
        actions: wW
      }, {
        group: "inventory",
        actions: ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryClose", "inventoryPanelPrevious", "inventoryPanelNext", "inventoryDrop", "inventoryHotbarSwap"]
      }, {
        group: "keyboard",
        actions: ["keyboardType", "keyboardBackspace", "keyboardSpace", "keyboardCaretLeft", "keyboardCaretRight", "keyboardShift", "keyboardSymbols", "keyboardSubmit", "keyboardClose", "keyboardChannel"]
      }],
      zR = {
        jump: "A",
        sneak: "B",
        sneakToggle: "RS",
        sprint: "LS",
        attack: "RT",
        use: "LT",
        hotbarPrevious: "LB",
        hotbarNext: "RB",
        inventory: "Y",
        actionButton: "X",
        perspective: "Up",
        JI: "Up",
        drop: "Down",
        emoteWheel: "Left",
        chat: "Right",
        pause: "Menu",
        leaderboard: "View",
        menuConfirm: "A",
        menuBack: "B",
        menuTabPrevious: "LB",
        menuTabNext: "RB",
        menuPageUp: "LT",
        menuPageDown: "RT",
        menuSecondary: "X",
        menuToggleCursor: "LS",
        inventoryPrimary: "A",
        inventorySecondary: "X",
        inventoryQuickMove: "RS",
        inventoryClose: "B",
        inventoryPanelPrevious: "LB",
        inventoryPanelNext: "RB",
        inventoryDrop: "View",
        inventoryHotbarSwap: "LS",
        keyboardType: "A",
        keyboardBackspace: "X",
        keyboardSpace: "Y",
        keyboardCaretLeft: "LB",
        keyboardCaretRight: "RB",
        keyboardShift: "LT",
        keyboardSymbols: "RT",
        keyboardSubmit: "Menu",
        keyboardClose: "B",
        keyboardChannel: "View"
      },
      AW = ["JI", "perspective"],
      bR = WW => AW.includes(WW) ? AW : [WW],
      yR = Object.fromEntries(CW.flatMap((WW => {
        let {
          group: RW,
          actions: MW
        } = WW;
        return MW.map((WW => [WW, RW]))
      }))),
      NW = WW => yR[WW],
      eW = {
        pause: ["menu"],
        leaderboard: ["menu"],
        inventory: ["menu"],
        menuPageUp: ["inventory"],
        menuPageDown: ["inventory"]
      },
      BW = WW => {
        var RW;
        return [NW(WW), ...null !== (RW = eW[WW]) && void 0 !== RW ? RW : []]
      },
      tR = new Set(["menu", "inventory", "keyboard"]),
      TW = {
        jump: "jump",
        crouch: "sneak",
        sprint: "sprint",
        "primary-fire": "attack",
        "alt-fire": "use",
        SpecialAction1: "actionButton",
        SpecialAction2: "actionButton",
        ReloadGun: "actionButton",
        DropItem: "drop",
        SwapCameraZoom: "perspective",
        "mid-fire": "JI",
        OpenInventory: "inventory",
        OpenSettings: "pause",
        OpenLobbyLeaderboard: "leaderboard",
        OpenShop: "leaderboard",
        OpenEmoteWheel: "emoteWheel"
      },
      gR = new Set(["forward", "backward", "left", "right"])
  },
  7088: (WW, RW, MW) => {
    MW.d(RW, {
      A: () => QW,
      E: () => IW,
      G: () => cR,
      K: () => eW,
      M: () => rR,
      O: () => kR,
      c: () => PW,
      e: () => lW,
      g: () => tR,
      k: () => TW,
      l: () => sW,
      o: () => jR,
      r: () => XW,
      v: () => oW,
      y: () => aR
    });
    var wW = MW(7090),
      CW = MW(7095),
      zR = MW(7082),
      AW = MW(7109);
    const bR = WW => "JI" === WW ? "perspective" : WW,
      yR = (WW, RW) => {
        var MW;
        const CW = bR(RW);
        return null !== (MW = WW[CW]) && void 0 !== MW ? MW : wW.f[CW]
      },
      NW = new Map([
        ["menuConfirm", "menuBack"],
        ["inventoryPrimary", "inventoryClose"],
        ["keyboardType", "keyboardClose"]
      ].flatMap((WW => {
        let [RW, MW] = WW;
        return [
          [RW, MW],
          [MW, RW]
        ]
      }))),
      eW = (WW, RW) => null !== WW && void 0 !== WW ? WW : "nintendo" === RW,
      BW = WW => eW((0, CW.i)().swapConfirmBack, (0, CW.m)()) && NW.get(WW) || WW,
      tR = WW => yR((0, CW.i)().zC, BW(WW)),
      TW = WW => wW.f[BW(WW)],
      gR = Object.keys(wW.f),
      iR = WW => "gameplay" === (0, wW.p)(WW) ? ["gameplay"] : (0, wW.m)(WW),
      YW = (WW, RW) => {
        const MW = iR(RW);
        return iR(WW).some((WW => MW.includes(WW)))
      },
      JW = (WW, RW, MW) => {
        const CW = yR(WW, RW),
          AW = new Set((0, wW.s)(RW)),
          NW = [...AW];
        for (let wW = NW.pop(); wW; wW = NW.pop())
          for (const RW of gR) {
            const zR = yR(WW, RW);
            AW.has(RW) || zR !== MW && zR !== CW || !YW(wW, RW) || (AW.add(RW), NW.push(RW))
          }
        const eW = {
          ...WW
        };
        for (const BW of AW) {
          const RW = yR(WW, BW) === CW ? MW : CW,
            AW = (0, wW.m)(BW).some((WW => wW.i.has(WW)));
          if ((0, zR.F)(RW) && AW) return null;
          eW[bR(BW)] = RW
        }
        for (const zR of Object.keys(eW)) eW[zR] === wW.f[zR] && delete eW[zR];
        return eW
      },
      PW = (WW, RW) => null !== JW((0, CW.i)().zC, BW(WW), RW),
      IW = (WW, RW) => {
        if (tR(WW) === RW) return !0;
        const MW = JW((0, CW.i)().zC, BW(WW), RW);
        return !!MW && ((0, CW.q)({
          zC: MW
        }), !0)
      },
      oW = (WW, RW) => {
        const MW = (0, wW.s)(RW);
        return gR.filter((RW => bR(RW) === RW && !MW.includes(RW) && yR(WW, BW(RW)) !== tR(RW)))
      },
      lW = ["southpaw", "triggersSwapped"],
      FW = {
        southpaw: {
          sprint: "RS",
          sneakToggle: "LS"
        },
        triggersSwapped: {
          attack: "LT",
          use: "RT"
        }
      },
      fW = WW => Object.keys(FW[WW]),
      QW = (WW, RW) => "southpaw" === WW ? RW.swapSticks : fW(WW).every((MW => yR(RW.zC, MW) === FW[WW][MW])),
      rR = (WW, RW) => {
        const MW = (0, CW.i)();
        let zR = MW.zC;
        for (const CW of fW(WW)) {
          const MW = RW ? FW[WW][CW] : wW.f[CW];
          if (zR = JW(zR, CW, MW), !zR) return !1
        }
        return (0, CW.q)({
          swapSticks: "southpaw" === WW ? RW : MW.swapSticks,
          zC: zR
        }), !0
      },
      cR = () => {
        (0, CW.q)({
          swapSticks: !1,
          zC: {}
        })
      },
      XW = () => (0, CW.i)().swapSticks ? "RightStick" : "LeftStick",
      jR = () => (0, CW.i)().swapSticks ? "LeftStick" : "RightStick",
      kR = WW => (0, CW.i)().swapSticks && (0, zR.F)(WW),
      aR = WW => kR(WW) ? XW() : jR(),
      sW = WW => {
        if (wW.A.has(WW)) return XW();
        const RW = wW.y[WW];
        return RW && ("leaderboard" !== RW || (0, AW.e)(WW, (0, AW.d)())) ? tR(RW) : null
      }
  },
  7071: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      ControllerCategory: () => Wy,
      ControllerGlyph: () => tC,
      ControllerRoot: () => Wb,
      PadLobbyShortcuts: () => Yb,
      PadSneakChip: () => by,
      PadTooltip: () => Nb,
      attachPressToContinue: () => Qb,
      getBoundButton: () => eW.g,
      getControllerSettings: () => tR.i,
      getGlyphForNoaAction: () => eW.l,
      getInventoryCursorState: () => My,
      getMenuShortcutButton: () => EC,
      getPadGlyphIconName: () => Cb,
      getPadGlyphIconUrl: () => zy,
      getPadRepeatTiming: () => iR.f,
      hasActivePad: () => Ry,
      isPadSteppingSlots: () => wy
    });
    const wW = JSON.parse('{"controller":{"inventoryTake":"Take","inventoryTakeHalf":"Take half","inventoryPlace":"Place","inventoryPlaceOne":"Place one","inventoryQuickMove":"Quick move","inventoryToHotbar":"To hotbar","inventoryPutBack":"Put back","inventoryHotbarSwap":"Swap with hotbar","inventorySwapHere":"Swap here","inventoryCancel":"Cancel","inventoryClose":"Close","inventoryDrop":"Drop (hold: stack)","inventorySelect":"Select","inventoryCraft":"Craft (hold to repeat)","inventoryCraftAll":"Craft all","inventoryChooseRecipe":"Choose","inventoryBackToRecipes":"Back to recipes","inventoryType":"Type","inventoryPanels":"Switch panel","inventoryCategory":"Category","inventoryPage":"Page","disconnected":"Controller disconnected","gameplayReload":"Reload","gameplayActionWheelHint":"(hold for more)","gameplaySneaking":"Sneaking","gameplayLoadFailedTitle":"Controller unavailable","gameplayLoadFailedSubtitle":"Reload the page to play with your controller.","gameplayDropStack":"Keep holding to drop the stack","gameplayAttackLatched":"Attacking","gameplayPickBlock":"Pick block","padButtonView":"View","padButtonMenu":"Menu","padButtonHome":"Home","padButtonCreate":"Create","padButtonOptions":"Options","padButtonDpadUp":"D-pad \u2191","padButtonDpadDown":"D-pad \u2193","padButtonDpadLeft":"D-pad \u2190","padButtonDpadRight":"D-pad \u2192","padButtonLeftStick":"L Stick","padButtonRightStick":"R Stick","settingsLook":"Look","settingsLookSensitivityX":"Look sensitivity (horizontal)","settingsLookSensitivityY":"Look sensitivity (vertical)","settingsAimLookSensitivity":"Look sensitivity while aiming (use held)","settingsInvertLookX":"Invert horizontal look","settingsInvertLookY":"Invert vertical look","settingsLookCurve":"Look curve","settingsLookCurveHint":"Steep gives finer aim near the centre, Linear turns at an even rate, and Boost turns faster when you hold the stick all the way.","settingsCurveExponential":"Steep","settingsCurveLinear":"Linear","settingsCurveBoost":"Boost","settingsLookDeadzone":"Look deadzone","settingsGyro":"Gyro aiming","settingsGyroToggle":"Aim by moving the controller","settingsGyroToggleInfo":"Turn and tilt the controller to aim, on top of the right stick.","settingsGyroTogglePhone":"Aim by moving your phone or tablet","settingsGyroToggleInfoPhone":"Turn and tilt your phone or tablet to aim, on top of the right stick.","settingsGyroUnsupported":"Gyro aiming needs Chrome or Edge.","settingsGyroBlocked":"Gyro aiming isn\'t available on this site.","settingsGyroPhoneNeedsController":"Connect a controller to aim by moving your phone or tablet.","settingsGyroSteamHint":"If Steam already turns your gyro into mouse movement, leave this off.","settingsGyroConnect":"Connect motion controller","settingsGyroConnectHint":"Works with DualSense, DualShock 4 and Switch controllers.","settingsGyroConnectNeedsClick":"Click Connect with your mouse: the browser asks before sharing a controller.","settingsGyroOpenFailed":"Another app is using the controller. Close apps such as Steam or DS4Windows, then try again.","settingsGyroConnected":"Aiming with {{name}}.","settingsGyroAllowMotion":"Allow motion sensor","settingsGyroAllowNeedsTap":"Tap Allow motion sensor on your screen to turn it on.","settingsGyroPhoneOn":"Aiming with this device\'s motion sensor.","settingsGyroPhoneWaiting":"Waiting for this device\'s motion sensor\u2026","settingsGyroPhoneNoSensor":"No motion sensor found on this device.","settingsGyroPhoneDenied":"Motion access is blocked. Allow it in your browser settings.","settingsGyroSensitivity":"Gyro sensitivity","settingsGyroActivation":"Gyro turns on","settingsGyroAlways":"Always","settingsGyroWhileAiming":"While aiming","settingsGyroWhileButton":"While holding a button","settingsGyroAimingHint":"Hold {{button}} to aim with motion.","settingsGyroButton":"Gyro button","settingsGyroButtonHint":"While gyro aiming is on, this button only turns the gyro on in game, so pick one you rarely use.","settingsMovement":"Movement","settingsMoveDeadzone":"Move deadzone","settingsAutoSprint":"Sprint at full tilt","settingsAutoSprintInfo":"Push the movement stick all the way to sprint.","settingsSneak":"Sneak","settingsSneakHold":"Hold","settingsSneakToggle":"Toggle","settingsButtons":"Buttons","settingsPromptFamily":"Button prompts","settingsPromptAuto":"Match my controller","settingsPromptXbox":"Xbox","settingsPromptPlayStation":"PlayStation","settingsPromptNintendo":"Nintendo","settingsPromptSteamDeck":"Steam Deck","settingsPromptGeneric":"Generic","settingsHideButtonHints":"Hide button hints","settingsVibration":"Vibration","settingsCursorSpeed":"Virtual cursor speed","settingsCursorMagnetism":"Cursor snaps onto buttons","settingsMenuBackToCategories":"Back returns to the category list first","settingsAccessibility":"Accessibility","settingsSwapConfirmBack":"Swap confirm and back","settingsSwapToast":"Select and Back have swapped buttons.","settingsLayoutRefusedToast":"This layout doesn\'t fit your current buttons. Reset them to use it.","settingsSwapConfirmBackInfo":"Select with the right face button and go back with the bottom one, in menus, the inventory and the on-screen keyboard. On by default for Nintendo controllers.","settingsButtonRepeat":"Button repeat","settingsButtonRepeatHint":"How a held button repeats in menus, sliders, the on-screen keyboard and crafting. Off acts once per press, and holding drop in game drops just one item.","settingsButtonRepeatDefault":"Default","settingsButtonRepeatSlow":"Slow (0.8 s, then 4 a second)","settingsButtonRepeatOff":"Off (once per press)","settingsTapHoldTime":"Tap/hold time","settingsTapHoldTimeHint":"How long to hold the chat, emote or action button to open its wheel, or the view button to change view where a tap picks a block. Dropping a whole stack takes 0.8, 1 or 1.3 s.","settingsTapHoldShort":"Short (0.25 s)","settingsTapHoldMedium":"Medium (0.5 s)","settingsTapHoldLong":"Long (0.8 s)","settingsEmoteButton":"Emote button","settingsEmoteButtonTapHoldHint":"Tap to repeat your last emote, or hold to open the emote wheel.","settingsEmoteButtonWheelHint":"Any press opens the emote wheel, with no hold to time. Pick with the stick, then select.","settingsEmoteButtonTapHold":"Tap repeats, hold opens wheel","settingsEmoteButtonWheel":"Opens the wheel","settingsAttackMode":"Attack / mine","settingsAttackHoldHint":"Hold attack to keep attacking or mining.","settingsAttackToggleHint":"Press attack once to keep attacking or mining, and again to stop.","settingsAttackHold":"Hold","settingsAttackToggle":"Toggle","settingsLargePointer":"Large pointer and focus","settingsLargePointerInfo":"A bigger menu cursor, thicker selection brackets and bigger button hints.","settingsRemap":"Remap buttons","settingsRemapHint":"Select an action, then press a button. If that button is taken, the two swap.","settingsLayoutSouthpaw":"Southpaw (move with the right stick)","settingsLayoutTriggersSwapped":"Triggers swapped (attack with the left trigger)","settingsCapturePrompt":"Press a button","settingsCaptureCancelHint":"Press {{button}} to cancel","settingsCaptureCancelOrBindHint":"Tap {{button}} to cancel, or hold it to choose it","settingsReset":"Reset","settingsSwapNotice":"{{action}} moved to {{button}}","settingsResetAll":"Reset all buttons and sticks","settingsGroupGameplay":"Movement & gameplay","settingsGroupMenus":"Menus","settingsGroupInventory":"Inventory","settingsGroupKeyboard":"On-screen keyboard","settingsActionMove":"Move","settingsActionLook":"Look around","settingsActionJump":"Jump","settingsActionSneak":"Sneak","settingsActionSneakToggle":"Toggle sneak","settingsActionSprint":"Sprint","settingsActionAttack":"Attack / mine","settingsActionUse":"Use / place","settingsActionHotbarPrevious":"Previous hotbar slot","settingsActionHotbarNext":"Next hotbar slot","settingsActionInventory":"Inventory","settingsActionActionButton":"Game action","settingsActionPerspective":"Change view","settingsActionPickBlock":"Pick block (creative)","settingsActionDrop":"Drop item","settingsActionEmoteWheel":"Emotes","settingsActionChat":"Chat","settingsActionPause":"Pause menu","settingsActionLeaderboard":"Shop / leaderboard","settingsActionMenuConfirm":"Select","settingsActionMenuBack":"Back","settingsActionMenuTabPrevious":"Previous tab","settingsActionMenuTabNext":"Next tab","settingsActionMenuPageUp":"Page up","settingsActionMenuPageDown":"Page down","settingsActionMenuSecondary":"Secondary action","settingsActionMenuToggleCursor":"Switch to virtual cursor","settingsActionInventoryPrimary":"Pick up / place","settingsActionInventorySecondary":"Pick up half / place one","settingsActionInventoryQuickMove":"Quick move","settingsActionInventoryHotbarSwap":"Swap with hotbar slot","settingsActionInventoryClose":"Close","settingsActionInventoryPanelPrevious":"Previous panel","settingsActionInventoryPanelNext":"Next panel","settingsActionInventoryDrop":"Drop item","settingsActionKeyboardType":"Type key","settingsActionKeyboardBackspace":"Backspace","settingsActionKeyboardSpace":"Space","settingsActionKeyboardCaretLeft":"Move cursor left","settingsActionKeyboardCaretRight":"Move cursor right","settingsActionKeyboardShift":"Shift","settingsActionKeyboardSymbols":"Accents and symbols","settingsActionKeyboardSubmit":"Send","settingsActionKeyboardClose":"Close keyboard","settingsActionKeyboardChannel":"Chat channel","settingsAlternatives":"Try alternatives","settingsAlternativesHint":"Try each way of playing and keep the one that feels best.","settingsMenuNavigation":"Menu navigation","settingsMenuNavigationHint":"Steer a cursor with the stick and jump between buttons with the D-pad, or use just one.","settingsNavHybrid":"Cursor and D-pad","settingsMenuNavFocus":"Jump between buttons","settingsVirtualCursor":"Virtual cursor","settingsInventoryNavigation":"Inventory","settingsInventoryNavigationHint":"Steer a cursor with the stick and step slot by slot with the D-pad, or use just one.","settingsInventoryNavSlot":"Slot by slot","settingsQuickChat":"Hold chat button","settingsQuickChatHint":"Hold the chat button to pick a quick phrase. Tapping it still opens chat.","settingsQuickChatWheel":"Quick chat wheel","settingsQuickChatOff":"Off","settingsLeaderboardButton":"Shop / leaderboard button","settingsLeaderboardButtonHint":"Open the shop in one press in games that have one. The lobby leaderboard is still in the pause menu.","settingsLeaderboardButtonShop":"Shop, in games with one","settingsLeaderboardButtonLeaderboard":"Always the leaderboard","settingsTester":"Gamepad tester","settingsTesterNoPad":"Connect a gamepad and press any button to test it.","settingsTesterFamily":"Detected: {{family}}","settingsTesterHint":"Start a test to try every button and stick without moving through the menu.","settingsTesterStart":"Start test","settingsTesterStop":"Stop test","settingsTesterTesting":"Press anything to see it light up. To stop, hold {{button}} or press it three times.","settingsControlsNote":"Playing with a gamepad? Change its buttons and feel in Gamepad settings.","settingsOpenController":"Gamepad settings","keyboardSpace":"Space","keyboardSend":"Send","keyboardDone":"Done","keyboardTargetChat":"Chat","keyboardTargetSign":"Sign","keyboardTargetNameTag":"Name tag","keyboardTargetBook":"Book page","keyboardTargetBookTitle":"Book title","keyboardTargetText":"Text","keyboardPhraseGg":"gg","keyboardPhraseHi":"hi","keyboardPhraseThanks":"thanks","keyboardPhraseGl":"gl","keyboardPhraseBrb":"brb","keyboardPhraseYes":"yes","keyboardPhraseNo":"no","keyboardPhraseHelp":"help!","quickChatPick":"Pick a phrase","actionWheelPick":"Pick an action","wheelReleaseToPick":"Release to pick","wheelClose":"Close","wheelChoose":"Choose","menusSelect":"Select","menusBack":"Back","menusClose":"Close","menusQuickChat":"Quick chat (hold)","menusSkipTutorial":"Skip tutorial","menusTabs":"Tabs","menusRows":"Rows","menusCursorMode":"Cursor","menusFocusMode":"Focus","menusClick":"Click","menusRightClick":"Right-click","menusScroll":"Scroll","menusFriends":"Friends","menusSearch":"Search","menusSettings":"Settings","menusLeaveGameTitle":"Leave the game?","menusLeaveGameLeave":"Leave","menusLeaveGameStay":"Stay","menusNotifications":"Notifications","menusLobby":"Lobby","menusShop":"Shop","menusTasks":"Tasks & leaderboards","menusInvite":"Invite friends","menusAdjust":"Adjust","menusFavourite":"Favourite","screensPressToContinue":"Press {{button}} to continue","screensPressToEnterGame":"Press {{button}} to enter game","screensEnterGame":"Enter game","screensBackToGames":"Back to games","tutorialMine":"Mine","tutorialPlace":"Place / Use","tutorialInventory":"Inventory","tutorialPause":"Pause","menusUseMouse":"Use a mouse or touch here"}}');
    var CW = MW(1027),
      zR = MW(1216),
      AW = MW(7080),
      bR = MW(93),
      yR = MW(27),
      NW = MW(33),
      eW = MW(7088),
      BW = MW(7117),
      tR = MW(7095),
      TW = MW(7121),
      gR = MW(7082),
      iR = MW(7558),
      YW = MW(7561),
      JW = MW(1480);
    const PW = (WW, RW, MW) => Math.max(RW, Math.min(MW, WW)),
      IW = WW => Math.min(WW.width, WW.height) / 720,
      oW = WW => Math.max(.15, WW);
    class lW {
      constructor() {
        this.locked = !1
      }
      lock() {
        this.locked = !0
      }
      update(WW, RW) {
        const MW = Math.hypot(WW.x, WW.y) >= (WW => Math.max(.3, WW))(RW);
        return this.locked ? (this.locked = MW, !1) : MW
      }
    }
    const FW = (WW, RW) => {
        const MW = PW(RW.dtMs, 0, 100),
          wW = MW / 1e3,
          CW = IW(RW.viewport) * (RW.cursorSpeedPercent / 100),
          zR = (0, gR.g)(RW.stick, oW(RW.moveDeadzone)),
          AW = Math.hypot(zR.x, zR.y),
          bR = ((WW, RW, MW) => {
            if (RW < .3) return 0;
            const wW = MW / 350;
            return RW >= .85 ? Math.min(1, WW + wW) : Math.max(0, WW - wW)
          })(WW.speedRamp, AW, MW);
        let yR = WW.x,
          NW = WW.y;
        if (AW > 0) {
          const WW = .45 + .55 * bR,
            MW = RW.context.overInteractive ? .45 : 1,
            eW = 1400 * (WW => {
              const RW = PW(WW, 0, 1);
              return .3 * RW + .7 * RW * RW
            })(AW) * CW * WW * MW;
          yR += zR.x / AW * eW * wW, NW += zR.y / AW * eW * wW
        }
        const eW = Math.hypot(RW.dpad.x, RW.dpad.y);
        if (eW > 0) {
          const WW = 500 * CW;
          yR += RW.dpad.x / eW * WW * wW, NW += RW.dpad.y / eW * WW * wW
        }
        const BW = RW.context.magnetTarget;
        if (BW && AW < .3 && 0 === eW) {
          const WW = ((WW, RW, MW, wW, CW) => {
            const zR = RW.x - WW.x,
              AW = RW.y - WW.y,
              bR = Math.hypot(zR, AW);
            if (0 === bR) return {
              x: 0,
              y: 0
            };
            const yR = Math.min(bR, CW * (1 - wW / .3));
            let NW = zR / bR * yR,
              eW = AW / bR * yR;
            if (wW > 0) {
              const WW = MW.x / wW,
                RW = MW.y / wW,
                CW = NW * WW + eW * RW;
              CW < 0 && (NW -= CW * WW, eW -= CW * RW)
            }
            return {
              x: NW,
              y: eW
            }
          })({
            x: yR,
            y: NW
          }, BW, zR, AW, 120 * IW(RW.viewport) * wW);
          yR += WW.x, NW += WW.y
        }
        return {
          x: PW(yR, 0, Math.max(0, RW.viewport.width - 1)),
          y: PW(NW, 0, Math.max(0, RW.viewport.height - 1)),
          speedRamp: bR
        }
      },
      fW = WW => {
        const RW = (0, gR.g)(WW, .2);
        return 0 !== RW.x || 0 !== RW.y
      },
      QW = (WW, RW) => {
        const MW = (0, gR.g)(WW, .2),
          wW = Math.hypot(MW.x, MW.y);
        if (0 === wW) return {
          x: 0,
          y: 0
        };
        const CW = wW * wW * 1600,
          zR = PW(RW, 0, 100) / 1e3;
        return {
          x: MW.x / wW * CW * zR,
          y: MW.y / wW * CW * zR
        }
      },
      rR = (WW, RW) => "y" === RW ? WW.scrollHeight > WW.clientHeight + 1 : WW.scrollWidth > WW.clientWidth + 1,
      cR = (WW, RW) => {
        const MW = getComputedStyle(WW),
          wW = "y" === RW ? MW.overflowY : MW.overflowX;
        return ("auto" === wW || "scroll" === wW) && rR(WW, RW)
      },
      XW = (WW, RW, MW) => {
        for (let zR = WW instanceof HTMLElement ? WW : null !== (wW = null === WW || void 0 === WW ? void 0 : WW.parentElement) && void 0 !== wW ? wW : null; zR; zR = zR.parentElement) {
          var wW;
          if (cR(zR, RW)) return zR;
          if (zR === MW) return null
        }
        if (MW) return null;
        const CW = document.scrollingElement;
        return CW instanceof HTMLElement && rR(CW, RW) ? CW : null
      },
      jR = new WeakMap,
      kR = (WW, RW) => {
        const MW = performance.now(),
          wW = jR.get(WW);
        if (wW && wW.axis === RW && MW - wW.atMs < 500 && (!wW.container || wW.container.isConnected)) return wW.container;
        const CW = aR(WW, RW);
        return jR.set(WW, {
          axis: RW,
          atMs: MW,
          container: CW
        }), CW
      },
      aR = (WW, RW) => {
        let MW = cR(WW, RW) ? WW : null,
          wW = MW ? MW.clientWidth * MW.clientHeight : 0;
        for (const CW of WW.querySelectorAll("*")) {
          const WW = CW.clientWidth * CW.clientHeight;
          WW > wW && cR(CW, RW) && (MW = CW, wW = WW)
        }
        return MW
      },
      sW = (WW, RW, MW) => "y" === RW ? MW < 0 ? WW.scrollTop > 0 : WW.scrollTop + WW.clientHeight < WW.scrollHeight - 1 : MW < 0 ? WW.scrollLeft > 0 : WW.scrollLeft + WW.clientWidth < WW.scrollWidth - 1,
      dW = (WW, RW, MW) => {
        "y" === RW ? WW.scrollBy({
          top: MW,
          behavior: "instant"
        }) : WW.scrollBy({
          left: MW,
          behavior: "instant"
        })
      },
      pW = WW => {
        if (!WW || WW === document.scrollingElement) return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
        const RW = WW.getBoundingClientRect(),
          MW = Math.max(0, RW.left),
          wW = Math.max(0, RW.top);
        return new DOMRect(MW, wW, Math.min(window.innerWidth, RW.right) - MW, Math.min(window.innerHeight, RW.bottom) - wW)
      },
      hW = (WW, RW) => WW.left < RW.right && RW.left < WW.right && WW.top < RW.bottom && RW.top < WW.bottom;
    var UW = MW(75),
      EW = MW(897),
      VW = MW.n(EW),
      mR = MW(940);
    let xR = 0,
      vR = !1;
    class KW {
      constructor() {
        this.element = null, this.shownKey = "", this.gap = null
      }
      setElement(WW) {
        this.element = WW, this.shownKey = "", this.gap = null
      }
      show(WW) {
        const RW = this.element;
        if (!RW) return;
        const MW = WW ? this.keepOnScreen(RW, WW) : null,
          wW = MW ? `${MW.left},${MW.top},${MW.width},${MW.height}` : "";
        if (wW === this.shownKey) return;
        const CW = "" === this.shownKey;
        this.shownKey = wW, RW.classList.toggle("Visible", null !== MW), MW && (RW.classList.toggle("Snap", CW), RW.style.width = `${MW.width}px`, RW.style.height = `${MW.height}px`, RW.style.transform = `translate(${MW.left}px, ${MW.top}px)`, CW && (RW.offsetWidth, RW.classList.remove("Snap")))
      }
      hide() {
        this.show(null)
      }
      keepOnScreen(WW, RW) {
        var MW;
        const wW = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!vR){vR=!0;const WW=document.createElement("div");WW.setAttribute("aria-hidden","true"),WW.style.cssText="position: fixed; top: 0; left: 0; width: 1rem; height: 0; visibility: hidden; pointer-events: none",document.body.appendChild(WW),new ResizeObserver((()=>{xR++})).observe(WW)}return String(xR)})()}`;
        (null === (MW = this.gap) || void 0 === MW ? void 0 : MW.key) !== wW && (this.gap = {
          px: parseFloat(getComputedStyle(WW).paddingLeft) || 0,
          key: wW
        });
        const CW = this.gap.px + 2,
          zR = Math.max(RW.left, CW),
          AW = Math.max(RW.top, CW),
          bR = Math.min(RW.left + RW.width, window.innerWidth - CW),
          yR = Math.min(RW.top + RW.height, window.innerHeight - CW);
        return bR <= zR || yR <= AW ? RW : {
          left: zR,
          top: AW,
          width: bR - zR,
          height: yR - AW
        }
      }
    }
    const uW = WW => {
      let {
        placer: RW,
        className: MW
      } = WW;
      const wW = (0, UW.useCallback)((WW => {
        RW.setElement(WW)
      }), [RW]);
      return (0, mR.jsx)("div", {
        ref: wW,
        className: VW()("PadReticle", MW),
        "aria-hidden": !0
      })
    };
    var OW = MW(7568),
      nW = MW(1498);
    const GW = WW => WW >= 56320 && WW <= 57343,
      LW = WW => WW >= 55296 && WW <= 56319,
      HW = (WW, RW) => RW >= 2 && GW(WW.charCodeAt(RW - 1)) && LW(WW.charCodeAt(RW - 2)) ? RW - 2 : Math.max(0, RW - 1),
      DW = (WW, RW) => {
        let MW;
        var wW, CW;
        return MW = WW.start !== WW.end ? RW < 0 ? WW.start : WW.end : RW < 0 ? HW(WW.value, WW.start) : (wW = WW.value, (CW = WW.start) + 1 < wW.length && LW(wW.charCodeAt(CW)) && GW(wW.charCodeAt(CW + 1)) ? CW + 2 : Math.min(wW.length, CW + 1)), {
          value: WW.value,
          start: MW,
          end: MW
        }
      },
      qR = ["text", "search", "url", "email", "tel", "password", "number"],
      ZW = WW => !(!(0, nW.e)(WW) || WW.isContentEditable || WW.hasAttribute("data-pad-no-osk")) && (WW instanceof HTMLTextAreaElement || WW instanceof HTMLInputElement && qR.includes(WW.type)),
      SW = WW => null !== WW.selectionStart,
      WR = WW => {
        var RW, MW;
        const {
          value: wW
        } = WW;
        return {
          value: wW,
          start: null !== (RW = WW.selectionStart) && void 0 !== RW ? RW : wW.length,
          end: null !== (MW = WW.selectionEnd) && void 0 !== MW ? MW : wW.length
        }
      },
      RR = (WW, RW, MW) => {
        if (WW.readOnly) return;
        const wW = WW instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(wW, "value").set.call(WW, RW.value), SW(WW) && WW.setSelectionRange(RW.start, RW.end), (0, JW.e)(WW, new InputEvent("input", {
          bubbles: !0,
          inputType: MW
        }))
      };
    let MR = !1;
    const wR = (WW, RW) => !!document.execCommand(WW, !1, RW) || (MR || (MR = !0, console.warn(`execCommand("${WW}") failed; the on-screen keyboard is setting the value directly`)), !1),
      CR = (WW, RW) => {
        wR("insertText", RW) || RR(WW, function(WW, RW) {
          let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
          const wW = WW.value.slice(0, WW.start),
            CW = WW.value.slice(WW.end);
          let zR = MW < 0 ? RW.length : Math.max(0, MW - wW.length - CW.length);
          zR > 0 && zR < RW.length && LW(RW.charCodeAt(zR - 1)) && zR--;
          const AW = RW.slice(0, zR),
            bR = wW.length + AW.length;
          return {
            value: wW + AW + CW,
            start: bR,
            end: bR
          }
        }(WR(WW), RW, WW.maxLength), "insertText")
      },
      zM = WW => {
        wR("delete") || RR(WW, (WW => {
          const RW = WW.start === WW.end ? HW(WW.value, WW.start) : WW.start;
          return {
            value: WW.value.slice(0, RW) + WW.value.slice(WW.end),
            start: RW,
            end: RW
          }
        })(WR(WW)), "deleteContentBackward")
      },
      AR = (WW, RW) => {
        if (!SW(WW)) return;
        const MW = DW(WR(WW), RW);
        WW.setSelectionRange(MW.start, MW.end)
      },
      bM = ["button", "a[href]", "input:not([type=hidden])", "textarea", "select", "[role=button]", "[role=tab]", "[role=switch]", "[role=checkbox]", "[role=option]", "[role=menuitem]", "[data-pad-focusable]", "[data-pad-tab]", ".Dropdown-control", ".Dropdown-option"].join(","),
      yM = (WW, RW) => {
        if ("function" === typeof WW.checkVisibility) return !WW.checkVisibility({
          visibilityProperty: !0,
          checkVisibilityCSS: !0,
          opacityProperty: RW,
          checkOpacity: RW
        });
        const {
          visibility: MW
        } = getComputedStyle(WW);
        if ("hidden" === MW || "collapse" === MW) return !0;
        if (!RW) return !1;
        for (let wW = WW; wW; wW = wW.parentElement)
          if ("0" === getComputedStyle(wW).opacity) return !0;
        return !1
      },
      NR = WW => {
        if (!WW.isConnected || yM(WW, !0)) return !1;
        const RW = WW.getBoundingClientRect();
        return RW.width > 0 && RW.height > 0
      },
      eR = WW => !!WW.matches(":disabled, [aria-disabled='true']") || "button" === WW.getAttribute("role") && "-1" === WW.getAttribute("tabindex"),
      BR = WW => {
        var RW;
        if (WW.closest("[data-pad-ignore]")) return !0;
        return !!(null === (RW = WW.parentElement) || void 0 === RW ? void 0 : RW.closest("[data-pad-focusable]"))
      },
      tM = WW => {
        const RW = WW.querySelectorAll(bM);
        return WW.matches(bM) ? [WW, ...RW] : RW
      },
      TR = WW => {
        const RW = [];
        for (const MW of tM(WW)) !BR(MW) && NR(MW) && RW.push(MW);
        return RW
      },
      gM = new WeakMap,
      iM = WW => {
        const RW = gM.get(WW);
        if (RW && YR(RW, WW)) return !0;
        for (const MW of tM(WW))
          if (!BR(MW) && NR(MW)) return gM.set(WW, MW), !0;
        return gM.delete(WW), !1
      },
      YR = (WW, RW) => RW.contains(WW) && WW.matches(bM) && !BR(WW) && NR(WW),
      JR = (WW, RW) => YR(WW, RW) && !eR(WW),
      PR = WW => {
        const RW = RW => {
          let MW = 0;
          for (let wW = RW.parentElement; wW && wW !== WW; wW = wW.parentElement) MW++;
          return MW
        };
        return [...WW.querySelectorAll("[data-pad-initial-area]")].filter(NR).sort(((WW, MW) => RW(MW) - RW(WW)))
      },
      IR = WW => ZW(WW),
      oR = WW => {
        const RW = WW.getBoundingClientRect();
        return {
          x: RW.left + RW.width / 2,
          y: RW.top + RW.height / 2
        }
      },
      lR = (WW, RW, MW) => ({
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window,
        clientX: WW.x,
        clientY: WW.y,
        screenX: WW.x,
        screenY: WW.y,
        button: RW,
        buttons: MW,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0
      }),
      FR = (WW, RW) => {
        (0, JW.e)(WW, RW)
      },
      fR = function(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const wW = 0 === MW ? 1 : 2;
        FR(WW, new PointerEvent("pointerdown", lR(RW, MW, wW))), FR(WW, new MouseEvent("mousedown", lR(RW, MW, wW)))
      },
      QR = function(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        FR(WW, new PointerEvent("pointerup", lR(RW, MW, 0))), FR(WW, new MouseEvent("mouseup", lR(RW, MW, 0)))
      },
      rM = function(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        fR(WW, RW, MW), QR(WW, RW, MW), FR(WW, 0 === MW ? new MouseEvent("click", lR(RW, 0, 0)) : new MouseEvent("contextmenu", lR(RW, 2, 0)))
      },
      cM = function(WW, RW, MW) {
        let {
          leaveBelow: wW = null,
          enterBelow: CW = null
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (WW !== RW) {
          if (null !== WW && void 0 !== WW && WW.isConnected) {
            const CW = {
              ...lR(MW, 0, 0),
              relatedTarget: RW
            };
            FR(WW, new PointerEvent("pointerout", CW)), FR(WW, new MouseEvent("mouseout", CW));
            const zR = WW => !!RW && WW.contains(RW) || !!wW && WW.contains(wW);
            for (let RW = WW; RW && !zR(RW); RW = RW.parentElement) FR(RW, new PointerEvent("pointerleave", {
              ...CW,
              bubbles: !1
            })), FR(RW, new MouseEvent("mouseleave", {
              ...CW,
              bubbles: !1
            }))
          }
          if (RW) {
            const wW = {
              ...lR(MW, 0, 0),
              relatedTarget: WW
            };
            FR(RW, new PointerEvent("pointerover", wW)), FR(RW, new MouseEvent("mouseover", wW));
            const zR = [],
              AW = RW => !(null === WW || void 0 === WW || !WW.isConnected) && RW.contains(WW) || !!CW && RW.contains(CW);
            for (let WW = RW; WW && !AW(WW); WW = WW.parentElement) zR.push(WW);
            for (const WW of zR.reverse()) FR(WW, new PointerEvent("pointerenter", {
              ...wW,
              bubbles: !1
            })), FR(WW, new MouseEvent("mouseenter", {
              ...wW,
              bubbles: !1
            }));
            FR(RW, new PointerEvent("pointermove", lR(MW, 0, 0))), FR(RW, new MouseEvent("mousemove", lR(MW, 0, 0)))
          }
        } else RW && (FR(RW, new PointerEvent("pointermove", lR(MW, 0, 0))), FR(RW, new MouseEvent("mousemove", lR(MW, 0, 0))))
      },
      XR = WW => {
        NW.k.Sz(OW.e, WW)
      },
      jM = WW => {
        if (IR(WW)) return void XR(WW);
        const RW = WW.hasAttribute("data-pad-focusable") ? WW.querySelector("a[href]") : null,
          MW = null !== RW && void 0 !== RW ? RW : WW;
        rM(MW, oR(MW))
      },
      kM = ".Dropdown-root.is-open",
      aM = WW => {
        const RW = WW.querySelector(".Dropdown-control");
        return jM(RW), RW
      },
      sR = WW => {
        var RW;
        const MW = null !== (RW = WW.closest(kM)) && void 0 !== RW ? RW : WW.querySelector(kM);
        return MW ? aM(MW) : null
      },
      dR = WW => {
        for (const RW of document.querySelectorAll(kM)) RW.contains(WW) || aM(RW)
      },
      pR = WW => null !== WW.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
      hR = WW => {
        const RW = WW ? document.elementFromPoint(WW.x, WW.y) : null;
        return !(null === RW || void 0 === RW || !RW.closest("[data-pad-repeat]"))
      },
      UR = WW => {
        var RW;
        return null !== (RW = [...WW.querySelectorAll("[data-pad-back]")].find(NR)) && void 0 !== RW ? RW : null
      },
      ER = WW => {
        const RW = UR(WW);
        return !!RW && (jM(RW), !0)
      },
      VR = WW => {
        var RW, MW, wW, CW;
        return null !== (RW = null !== (MW = null !== (wW = WW.getAttribute("data-pad-key")) && void 0 !== wW ? wW : WW.getAttribute("href")) && void 0 !== MW ? MW : null === (CW = WW.querySelector("a[href]")) || void 0 === CW ? void 0 : CW.getAttribute("href")) && void 0 !== RW ? RW : null
      },
      mM = {
        x: 0,
        y: 0,
        visible: !1,
        pressed: !1
      };
    const xM = new class {
        constructor() {
          this.state = mM, this.listeners = new Set
        }
        get() {
          return this.state
        }
        set(WW) {
          if (RW = this.state, MW = WW, (RW.visible || MW.visible) && (RW.visible !== MW.visible || RW.x !== MW.x || RW.y !== MW.y || RW.pressed !== MW.pressed)) {
            var RW, MW;
            this.state = WW;
            for (const RW of this.listeners) RW(WW)
          }
        }
        hide() {
          this.set(mM)
        }
        subscribe(WW) {
          return this.listeners.add(WW), () => {
            this.listeners.delete(WW)
          }
        }
      },
      vM = (WW, RW) => {
        let {
          kind: MW,
          holding: wW,
          hasPress: CW,
          hasBack: zR,
          slotHasItem: AW
        } = RW;
        switch (WW) {
          case "primary":
            return "slot" === MW ? "slotPrimary" : "recipe" === MW || "button" === MW ? CW ? "pressPrimary" : "click" : "textField" === MW ? "openKeyboard" : null;
          case "secondary":
            return "slot" === MW ? "slotSecondary" : "button" !== MW && "recipe" !== MW || !CW ? null : "pressSecondary";
          case "quickMove":
            return "slot" === MW && AW ? "slotQuickMove" : null;
          case "hotbarSwap":
            return "slot" === MW && AW && !wW ? "hotbarPick" : null;
          case "openButton":
            return "close";
          case "back":
            return wW ? "cancel" : zR ? "pressBack" : "close"
        }
      },
      KR = WW => {
        const RW = [];
        if (WW.hotbarPicking) return RW.push({
          actions: ["inventoryPrimary", "inventoryHotbarSwap"],
          labelKey: "inventorySwapHere"
        }), RW.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryCancel"
        }), RW;
        if (WW.holding) "slot" === WW.kind ? (RW.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryPlace"
        }), RW.push({
          actions: ["inventorySecondary"],
          labelKey: "inventoryPlaceOne"
        })) : "textField" === WW.kind && RW.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryType"
        }), RW.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryPutBack"
        }), RW.push({
          actions: ["inventoryDrop"],
          labelKey: "inventoryDrop"
        }), WW.openButtonCloses && RW.push({
          actions: ["inventory"],
          labelKey: "inventoryClose"
        });
        else {
          var MW;
          "slot" === WW.kind && WW.slotHasItem ? (RW.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryTake"
          }), RW.push({
            actions: ["inventorySecondary"],
            labelKey: "inventoryTakeHalf"
          }), RW.push({
            actions: ["inventoryQuickMove"],
            labelKey: WW.quickMoveToHotbar ? "inventoryToHotbar" : "inventoryQuickMove"
          }), RW.push({
            actions: ["inventoryHotbarSwap"],
            labelKey: "inventoryHotbarSwap"
          }), RW.push({
            actions: ["inventoryDrop"],
            labelKey: "inventoryDrop"
          })) : "button" !== WW.kind && "recipe" !== WW.kind || !WW.pressHints ? "button" === WW.kind || "recipe" === WW.kind ? RW.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventorySelect"
          }) : "textField" === WW.kind && RW.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryType"
          }) : (WW.pressHints.primary && RW.push({
            actions: ["inventoryPrimary"],
            labelKey: WW.pressHints.primary
          }), WW.pressHints.secondary && RW.push({
            actions: ["inventorySecondary"],
            labelKey: WW.pressHints.secondary
          }));
          const wW = null === (MW = WW.pressHints) || void 0 === MW ? void 0 : MW.back;
          wW && RW.push({
            actions: ["inventoryClose"],
            labelKey: wW
          });
          const CW = [];
          WW.openButtonCloses && CW.push("inventory"), wW || CW.push("inventoryClose"), CW.length > 0 && RW.push({
            actions: CW,
            labelKey: "inventoryClose"
          })
        }
        return RW.push({
          actions: ["inventoryPanelPrevious", "inventoryPanelNext"],
          labelKey: "inventoryPanels"
        }), WW.hasCategories ? RW.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryCategory"
        }) : WW.hasList && RW.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryPage"
        }), RW
      };
    var uR = MW(7576);
    const OR = WW => ({
        x: WW.left + WW.width / 2,
        y: WW.top + WW.height / 2
      }),
      nR = (WW, RW, MW) => WW < 0 ? MW >= 0 ? 0 : RW - 1 : ((WW + MW) % RW + RW) % RW,
      GR = WW => "Left" === WW || "Right" === WW,
      LR = (WW, RW, MW) => {
        const wW = GR(MW),
          CW = wW ? WW.top : WW.left,
          zR = wW ? WW.height : WW.width,
          AW = wW ? RW.top : RW.left,
          bR = wW ? RW.height : RW.width,
          yR = Math.max(0, Math.max(AW - (CW + zR), CW - (AW + bR)));
        return zR > 1.5 * bR ? {
          gap: yR,
          offset: Math.max(0, AW - CW) + .1 * Math.max(0, CW - AW)
        } : {
          gap: yR,
          offset: Math.abs(AW + bR / 2 - (CW + zR / 2))
        }
      },
      HR = (WW, RW, MW) => {
        const wW = ((WW, RW, MW) => {
          const wW = OR(WW),
            CW = OR(RW),
            zR = GR(MW) ? Math.min(WW.width, RW.width) / 4 : Math.min(WW.height, RW.height) / 4;
          switch (MW) {
            case "Right":
              return CW.x - wW.x >= zR ? Math.max(0, RW.left - (WW.left + WW.width)) : null;
            case "Left":
              return wW.x - CW.x >= zR ? Math.max(0, WW.left - (RW.left + RW.width)) : null;
            case "Down":
              return CW.y - wW.y >= zR ? Math.max(0, RW.top - (WW.top + WW.height)) : null;
            case "Up":
              return wW.y - CW.y >= zR ? Math.max(0, WW.top - (RW.top + RW.height)) : null
          }
        })(WW, RW, MW);
        if (null === wW) return null;
        const CW = LR(WW, RW, MW);
        return wW + 3 * CW.gap + .5 * CW.offset
      },
      DR = (WW, RW) => RW.visible || null !== RW.scrollGroup && RW.scrollGroup === WW.scrollGroup,
      qM = (WW, RW, MW, wW) => {
        let CW = null,
          zR = 1 / 0;
        for (const AW of RW) {
          if (AW.key === WW.key || !DR(WW, AW) || !wW(AW)) continue;
          const RW = HR(WW.rect, AW.rect, MW);
          null !== RW && RW < zR && (CW = AW, zR = RW)
        }
        return CW
      },
      ZR = (WW, RW, MW) => {
        const wW = qM(WW, RW, MW, (() => !0));
        if (!wW || GR(MW) || null === WW.scrollGroup || wW.scrollGroup === WW.scrollGroup) return wW;
        const CW = qM(WW, RW, MW, (RW => 0 === LR(WW.rect, RW.rect, MW).gap));
        return null !== CW && void 0 !== CW ? CW : wW
      },
      SR = (WW, RW, MW) => {
        let wW = null,
          CW = 1 / 0;
        for (const zR of RW) {
          if (!zR.visible || MW && !MW(zR)) continue;
          const RW = OR(zR.rect),
            AW = Math.hypot(RW.x - WW.x, RW.y - WW.y);
          AW < CW && (wW = zR, CW = AW)
        }
        return wW
      },
      WM = (WW, RW) => {
        let MW = null;
        for (const wW of RW) {
          const {
            left: RW,
            top: CW,
            width: zR,
            height: AW
          } = wW.rect;
          !wW.visible || WW.x < RW || WW.x >= RW + zR || WW.y < CW || WW.y >= CW + AW || (!MW || zR * AW < MW.rect.width * MW.rect.height) && (MW = wW)
        }
        return MW
      },
      RM = WW => {
        let RW = null;
        for (const MW of WW) {
          if (!MW.visible) continue;
          if (!RW) {
            RW = MW;
            continue
          }
          const WW = Math.min(RW.rect.height, MW.rect.height) / 2,
            wW = MW.rect.top - RW.rect.top;
          (wW < -WW || Math.abs(wW) <= WW && MW.rect.left < RW.rect.left) && (RW = MW)
        }
        return RW
      },
      MM = (WW, RW, MW, wW, CW) => {
        const zR = CW % RW,
          AW = Math.floor(CW / RW);
        return {
          left: WW.left + zR * MW,
          top: WW.top + AW * wW,
          width: WW.width,
          height: WW.height
        }
      },
      wM = ".EntireInventoryWrapper .Inventory, .HotBarGameItemsContainer",
      CM = ".LazyLoadedItemWrapper",
      zw = ["[data-inven-idx]", "[data-recipe-key]", "[role=button]", "button", "input:not([type=hidden])", "textarea", ".CreativeCategoryTab", ".CreativeCategoryDropdownButton", ".CreativeCategoryDropdownOption", "[data-craft-ingredient]"].join(","),
      AM = [
        ["hotbar", ".HotBarGameItemsContainer"],
        ["gameButtons", ".ClientGameInventoryButtons"],
        ["categories", ".CreativeCategoryRail"],
        ["recipe", ".CraftableInfo"],
        ["armour", ".ArmourItemSlots"],
        ["main", ".InvenBodyRight"],
        ["left", ".InvenLeftSide"]
      ],
      bw = ["gameButtons", "categories", "left", "recipe", "armour", "main", "hotbar"],
      yw = new WeakMap;
    let NM = 0;
    const eM = WW => {
        let RW = yw.get(WW);
        return RW || (RW = "el:" + NM++, yw.set(WW, RW)), RW
      },
      BM = WW => ({
        left: WW.left,
        top: WW.top,
        width: WW.width,
        height: WW.height
      }),
      tw = (WW, RW) => WW.width > 0 && WW.height > 0 && WW.left + WW.width > 0 && WW.top + WW.height > 0 && WW.left < RW.width && WW.top < RW.height,
      TM = WW => WW.hasAttribute("data-inven-idx") ? "slot" : WW.hasAttribute("data-recipe-key") ? "recipe" : WW.hasAttribute("data-craft-ingredient") || eR(WW) ? "info" : IR(WW) ? "textField" : "button",
      gw = (WW, RW) => "slot" === RW ? Number(WW.getAttribute("data-inven-idx")) : null,
      iw = WW => WW.matches(CM) ? WW.querySelector(zw) : WW,
      YM = WW => {
        var RW, MW;
        return {
          element: WW,
          recipe: null !== (RW = WW && (null === (MW = iw(WW)) || void 0 === MW ? void 0 : MW.getAttribute("data-recipe-key"))) && void 0 !== RW ? RW : null
        }
      },
      JM = WW => {
        const RW = iw(WW);
        if (!RW) return {
          kind: "pending",
          idx: null
        };
        const MW = TM(RW);
        return {
          kind: MW,
          idx: gw(RW, MW)
        }
      },
      PM = WW => {
        const RW = [];
        for (const [MW, wW] of AM) {
          WW.matches(wW) && RW.push([MW, WW]);
          for (const CW of WW.querySelectorAll(wW)) RW.push([MW, CW])
        }
        return RW
      },
      IM = (WW, RW) => {
        for (const [MW, wW] of WW)
          if (wW.contains(RW)) return MW;
        return "other"
      },
      oM = (WW, RW, MW, wW, CW, zR, AW) => {
        var bR;
        const yR = WW.children,
          NW = BM(yR[0].getBoundingClientRect()),
          eW = [{
            element: yR[0],
            rect: NW
          }];
        if (zR.push(eW[0]), 0 === NW.width || 0 === NW.height) return;
        let BW = 1;
        for (; BW < yR.length && Math.abs(yR[BW].getBoundingClientRect().top - NW.top) < 1;) BW++;
        const tR = WW => {
            const RW = {
              element: yR[WW],
              rect: BM(yR[WW].getBoundingClientRect())
            };
            return zR.push(RW), eW.push(RW), RW.rect
          },
          TW = BW > 1 ? tR(1).left - NW.left : NW.width,
          gR = yR.length > BW ? tR(BW).top - NW.top : NW.height,
          iR = XW(WW, "y", RW),
          YW = iR === document.scrollingElement ? null : iR;
        YW && zR.push({
          element: YW,
          rect: BM(YW.getBoundingClientRect())
        });
        const JW = YW ? pW(YW) : null,
          PW = YW ? eM(YW) : null;
        let IW = null;
        var oW;
        YW && JW && (IW = null !== (oW = AW.get(YW)) && void 0 !== oW ? oW : null, IW || (IW = {
          top: YW.scrollTop,
          left: YW.scrollLeft,
          box: JW,
          viewport: wW,
          targets: [],
          probes: [],
          holdsOthers: !1
        }, AW.set(YW, IW)), IW.probes.push(...eW));
        const lW = CW.length;
        for (let FW = 0; FW < yR.length; FW++) {
          const WW = yR[FW],
            RW = MM(NW, BW, TW, gR, FW),
            zR = RW.top + RW.height / 2,
            AW = WW.firstElementChild ? WW.querySelector(zw) : null,
            bR = AW ? TM(AW) : "pending";
          CW.push({
            key: eM(WW),
            rect: RW,
            panel: MW,
            scrollGroup: PW,
            visible: tw(RW, wW) && (!JW || zR >= JW.top && zR <= JW.bottom),
            element: WW,
            kind: bR,
            idx: AW ? gw(AW, bR) : null,
            scrollContainer: YW
          })
        }
        null === (bR = IW) || void 0 === bR || bR.targets.push(...CW.slice(lW))
      };
    class lM {
      constructor() {
        this.latched = null, this.presses = 0
      }
      press(WW, RW, MW, wW) {
        this.latched = {
          source: WW,
          focusKey: RW,
          sinceMs: MW,
          hold: {
            id: ++this.presses,
            holdMs: wW
          }
        }
      }
      update(WW, RW, MW) {
        const wW = this.latched;
        return wW ? WW && RW === wW.focusKey ? MW - wW.sinceMs < wW.hold.holdMs ? null : (this.latched = null, wW.source) : (this.latched = null, null) : null
      }
      getHold() {
        var WW, RW;
        return null !== (WW = null === (RW = this.latched) || void 0 === RW ? void 0 : RW.hold) && void 0 !== WW ? WW : null
      }
      reset() {
        this.latched = null
      }
    }
    var FM = MW(7585);
    const fM = {
        kind: "none"
      },
      QM = WW => ({
        x: WW.clientX,
        y: WW.clientY
      }),
      rw = () => 2 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
    class cwW {
      constructor() {
        this.hovered = fM, this.signature = "", this.holding = !1, this.lastPoint = {
          clientX: 0,
          clientY: 0
        }
      }
      sync(WW, RW, MW, wW, CW) {
        const zR = null !== RW ? {
            kind: "slot",
            idx: RW
          } : MW ? {
            kind: "element",
            element: MW
          } : fM,
          AW = `${CW}|${Math.round(wW.clientX)},${Math.round(wW.clientY)}`,
          bR = (yR = this.hovered, NW = zR, "slot" === yR.kind && "slot" === NW.kind ? yR.idx === NW.idx : "element" === yR.kind && "element" === NW.kind ? yR.element === NW.element : yR.kind === NW.kind);
        var yR, NW;
        if (bR && AW === this.signature) return;
        const eW = !bR || CW !== this.holding || "" === this.signature;
        this.signature = AW, this.holding = CW, this.lastPoint = wW;
        const BW = this.hovered;
        if (this.hovered = zR, "slot" === zR.kind) return this.leaveElement(BW, null, wW), void(eW ? WW.hover(zR.idx, wW) : WW.moveTo(wW));
        if (bR) return void("element" === zR.kind ? cM(zR.element, zR.element, QM(wW)) : WW.hover(null, wW));
        WW.hover(null, wW);
        const tR = "element" === zR.kind ? zR.element : null;
        "element" === BW.kind ? cM(BW.element, tR, QM(wW)) : tR && cM(null, tR, QM(wW))
      }
      invalidate() {
        this.signature = ""
      }
      clear(WW) {
        const RW = this.hovered;
        this.hovered = fM, this.signature = "", "none" !== RW.kind && (this.leaveElement(RW, null, this.lastPoint), WW && "slot" === RW.kind && WW.hover(null, this.lastPoint))
      }
      leaveElement(WW, RW, MW) {
        "element" === WW.kind && cM(WW.element, RW, QM(MW))
      }
    }
    class XM {
      constructor() {
        this.lastTiltedMs = -1 / 0
      }
      update(WW, RW) {
        fW(WW) && (this.lastTiltedMs = RW)
      }
      allowsClick(WW) {
        return WW - this.lastTiltedMs > 150
      }
    }
    class jw {
      constructor() {
        this.remainder = 0, this.container = null
      }
      isScrolling(WW) {
        return 0 !== (0, gR.g)(WW, .2).y
      }
      step(WW, RW, MW) {
        WW !== this.container && (this.container = WW, this.remainder = 0);
        const wW = QW(RW, MW).y;
        if (0 === wW) return this.remainder = 0, !1;
        const CW = this.remainder + wW,
          zR = Math.trunc(CW);
        if (this.remainder = CW - zR, 0 === zR) return !1;
        const AW = WW.scrollTop;
        return WW.scrollTop = AW + zR, WW.scrollTop !== AW
      }
      reset() {
        this.remainder = 0, this.container = null
      }
    }
    var kw = MW(7587);
    const aw = "[data-pad-inventory-default]",
      sM = ".HotBarGameItemsContainer .InvenItem.Selected",
      dM = {
        Up: {
          x: 0,
          y: -1
        },
        Down: {
          x: 0,
          y: 1
        },
        Left: {
          x: -1,
          y: 0
        },
        Right: {
          x: 1,
          y: 0
        }
      },
      pM = [
        ["primary", "inventoryPrimary"],
        ["secondary", "inventorySecondary"],
        ["quickMove", "inventoryQuickMove"],
        ["hotbarSwap", "inventoryHotbarSwap"],
        ["back", "inventoryClose"],
        ["openButton", "inventory"]
      ],
      hM = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
      UM = ["inventoryPanelPrevious", "inventoryPanelNext", "menuPageUp", "menuPageDown"],
      EM = [...hM, ...UM],
      VM = () => {
        return WW = (0, eW.g)("inventory"), !EM.map(eW.g).includes(WW) && !(0, gR.F)(WW);
        var WW
      },
      mw = new Set(["slotPrimary", "slotSecondary", "slotQuickMove", "pressPrimary", "pressSecondary", "openKeyboard"]),
      xw = (WW, RW) => {
        const MW = !(null === RW || void 0 === RW || !RW.isHolding());
        return function(WW, RW) {
          const MW = WW.find((WW => WW.visible && RW(WW)));
          if (MW) return MW;
          for (var wW = arguments.length, CW = new Array(wW > 2 ? wW - 2 : 0), zR = 2; zR < wW; zR++) CW[zR - 2] = arguments[zR];
          for (const AW of CW) {
            const RW = RM(WW.filter(AW));
            if (RW) return RW
          }
          return RM(WW)
        }(WW, (WW => {
          const {
            element: RW
          } = WW;
          return RW.matches(aw) || null !== RW.querySelector(aw) || RW.matches(sM)
        }), (WW => "slot" === WW.kind ? MW || null !== WW.idx && !(null === RW || void 0 === RW || !RW.hasItemAt(WW.idx)) : "recipe" === WW.kind || "pending" === WW.kind), (WW => "slot" === WW.kind || "button" === WW.kind))
      };
    class vw {
      constructor() {
        this.set = null, this.observer = new MutationObserver((WW => {
          WW.some((WW => {
            return !((RW = WW.target) instanceof Element && null !== RW.closest(CM));
            var RW
          })) && (this.set = null)
        })), this.invalidate = () => {
          this.set = null
        }, this.onScroll = WW => {
          this.scrolled(WW.target)
        }
      }
      get() {
        if (!this.set) {
          this.set = (() => {
            const WW = [],
              RW = [];
            let MW = !1;
            const wW = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              CW = new Map;
            for (const bR of document.querySelectorAll(wM)) {
              const AW = PM(bR);
              MW ||= null !== bR.querySelector(".CreativeCategoryTab");
              for (const MW of bR.querySelectorAll(`${CM}:first-child`)) {
                const zR = MW.parentElement;
                oM(zR, bR, IM(AW, zR), wW, WW, RW, CW)
              }
              for (const MW of bR.querySelectorAll(zw)) {
                var zR;
                if (MW.closest(CM) || MW.closest("[data-pad-ignore]")) continue;
                const CW = null === (zR = MW.parentElement) || void 0 === zR ? void 0 : zR.closest(zw);
                if (CW && bR.contains(CW)) continue;
                const yR = TM(MW),
                  NW = gw(MW, yR);
                if (-1 === NW) continue;
                const eW = BM(MW.getBoundingClientRect());
                RW.push({
                  element: MW,
                  rect: eW
                }), tw(eW, wW) && WW.push({
                  key: eM(MW),
                  rect: eW,
                  panel: IM(AW, MW),
                  scrollGroup: null,
                  visible: !0,
                  element: MW,
                  kind: yR,
                  idx: NW,
                  scrollContainer: null
                })
              }
            }
            for (const [bR, yR] of CW) yR.holdsOthers = RW.some((WW => WW.element !== bR && bR.contains(WW.element) && !WW.element.closest(CM)));
            const AW = new Map;
            for (const bR of WW) AW.set(bR.element, bR);
            return {
              targets: WW,
              byElement: AW,
              hasCategories: MW,
              probes: RW,
              scrollers: CW
            }
          })(), this.observer.disconnect();
          for (const WW of document.querySelectorAll(wM)) this.observer.observe(WW, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "disabled", "aria-disabled", "tabindex", "data-inven-idx"]
          })
        }
        return this.set
      }
      scrolled(WW) {
        !this.set || WW instanceof Element && ((WW, RW) => {
          const MW = WW.scrollers.get(RW);
          if (!MW || MW.holdsOthers || RW.scrollLeft !== MW.left) return !1;
          const wW = RW.scrollTop - MW.top;
          if (0 === wW) return !0;
          MW.top = RW.scrollTop;
          for (const CW of MW.probes) CW.rect.top -= wW;
          for (const CW of MW.targets) {
            CW.rect.top -= wW;
            const WW = CW.rect.top + CW.rect.height / 2;
            CW.visible = tw(CW.rect, MW.viewport) && WW >= MW.box.top && WW <= MW.box.bottom
          }
          return !0
        })(this.set, WW) || (this.set = null)
      }
      revalidate() {
        this.set && this.set.probes.some((WW => {
          return RW = WW.rect, MW = WW.element.getBoundingClientRect(), !(RW.left === MW.left && RW.top === MW.top && RW.width === MW.width && RW.height === MW.height);
          var RW, MW
        })) && (this.set = null)
      }
      disconnect() {
        this.observer.disconnect(), this.set = null
      }
    }
    const KM = new class {
        constructor() {
          this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(gR.z.map((WW => [WW, (0, iR.d)(gR.D)]))), this.stickRepeat = new gR.c((0, iR.d)(gR.Z)), this.pageUpTimer = (0, iR.d)(gR.W), this.pageDownTimer = (0, iR.d)(gR.W), this.stickGate = new lW, this.pointer = null, this.activePress = null, this.dropLatch = new lM, this.scroller = new jw, this.scrollStickClick = new XM, this.hover = new cwW, this.lastRealPointer = null, this.placeAfterCategory = null, this.hotbarPick = null, this.ring = new KW, this.targets = new vw, this.hasCategories = !1, this.wasShowing = !1, this.state = FM.d, this.isActive = () => (0, uR.k)(), this.isShowing = () => "inventory" === BW.c.getActiveConsumerName() && (0, TW.i)(), this.getState = () => this.state, this.isSteppingSlots = () => this.isShowing() && null === this.pointer, this.onDeactivate = () => {
            this.endInteraction((0, uR.i)()), (0, uR.k)() || this.forgetSurface()
          }, this.forgetSurface = () => {
            var WW;
            this.reopenSlotIdx = null !== (WW = this.focused ? JM(this.focused).idx : null) && void 0 !== WW ? WW : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, uR.u)(), this.panelMemory.clear(), this.targets.disconnect()
          }, this.onFrame = WW => {
            (0, bR.unstable_batchedUpdates)((() => {
              this.frame(WW)
            }))
          }, this.shouldBlockRealPointer = WW => WW.isTrusted && !(0, JW.k)(WW) && this.isShowing(), this.noteRealPointer = WW => {
            WW instanceof MouseEvent && WW.isTrusted && !(0, JW.k)(WW) && (this.lastRealPointer ??= {
              x: 0,
              y: 0
            }, this.lastRealPointer.x = WW.clientX, this.lastRealPointer.y = WW.clientY)
          }, this.wakePressActs = WW => {
            var RW;
            return WW === (0, eW.g)("inventoryClose") ? !(null !== (RW = (0, uR.i)()) && void 0 !== RW && RW.isHolding()) : !(WW !== (0, eW.g)("inventory") || !VM()) || ((0, gR.F)(WW) ? this.isNavButton(WW) : UM.some((RW => (0, eW.g)(RW) === WW)))
          }
        }
        frame(WW) {
          var RW, MW, wW, CW, zR, AW;
          const bR = (0, uR.i)();
          if (!(0, TW.i)()) return void(this.wasShowing && (this.endInteraction(bR), this.rehoverRealPointer()));
          this.wasShowing = !0, this.applyFocusRequest(), WW.wokeDevice && this.focusWakePointer(!(null === bR || void 0 === bR || !bR.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, tR.i)().inventoryNavigation || this.pointer || this.engagePointer();
          const yR = performance.now();
          this.handleNavigation(WW, yR), this.handlePanels(WW), this.handlePaging(WW, yR), this.handleScroll(WW), this.handleButtons(WW, yR, bR), this.applyFocusRequest(), this.pointer && this.hoverAtPointer();
          const NW = this.ensureFocus(),
            BW = this.focusContext(bR);
          this.ring.show(NW);
          const gR = "slot" === BW.kind ? BW.idx : null,
            iR = null !== (RW = null === (MW = BW.actionElement) || void 0 === MW ? void 0 : MW.querySelector(".DoCraftItem")) && void 0 !== RW ? RW : BW.actionElement;
          this.pointer ? (this.hover.sync(bR, gR, iR, ((WW, RW) => {
            const MW = RW ? rw() : 0;
            return {
              clientX: WW.x - MW,
              clientY: WW.y - MW
            }
          })(this.pointer, BW.holding), BW.holding), xM.set({
            x: this.pointer.x,
            y: this.pointer.y,
            visible: !0,
            pressed: WW.isHeld((0, eW.g)("inventoryPrimary"))
          })) : NW && this.focused && this.hover.sync(bR, gR, iR, ((WW, RW) => {
            if (!RW) return {
              clientX: WW.left + WW.width - 10,
              clientY: WW.top + WW.height / 2 - 10
            };
            const MW = rw();
            return {
              clientX: WW.left + WW.width / 2 - MW,
              clientY: WW.top + WW.height / 2 - MW
            }
          })(NW, BW.holding), BW.holding), this.publishState({
            showing: !0,
            kind: BW.kind,
            holding: BW.holding,
            slotHasItem: BW.slotHasItem,
            pressHints: null !== (wW = null === (CW = BW.press) || void 0 === CW ? void 0 : CW.hints) && void 0 !== wW ? wW : null,
            hasCategories: this.hasCategories,
            hasList: !(null === (zR = this.focusTarget) || void 0 === zR || !zR.scrollGroup),
            openButtonCloses: VM(),
            steppingSlots: null === this.pointer,
            quickMoveToHotbar: "slot" === BW.kind && !(null === (AW = BW.actionElement) || void 0 === AW || !AW.closest(".CreativeItemSlots")),
            dropStackHold: this.dropLatch.getHold(),
            hotbarPicking: null !== this.hotbarPick
          })
        }
        focusWakePointer(WW) {
          var RW;
          const MW = (0, TW.b)();
          if (!MW) return;
          this.targets.revalidate();
          const wW = this.getTargets().targets;
          this.setFocus(null !== (RW = WM(MW, wW)) && void 0 !== RW ? RW : WW ? SR(MW, wW, (WW => {
            let {
              rect: RW
            } = WW;
            const wW = Math.max(RW.left - MW.x, 0, MW.x - (RW.left + RW.width)),
              CW = Math.max(RW.top - MW.y, 0, MW.y - (RW.top + RW.height));
            return Math.hypot(wW, CW) <= Math.min(RW.width, RW.height) / 2
          })) : null, !1), "cursor" === (0, tR.i)().inventoryNavigation && (this.pointer = {
            x: MW.x,
            y: MW.y,
            speedRamp: 0
          })
        }
        rehoverRealPointer() {
          const WW = this.lastRealPointer;
          if (!WW || "keyboardMouse" !== yR.b.get("activeInputDevice")) return;
          const RW = document.elementFromPoint(WW.x, WW.y);
          RW && cM(null, RW, WW)
        }
        endInteraction(WW) {
          this.wasShowing = !1, this.hotbarPick = null, this.releasePress(), this.dropLatch.reset(), this.scroller.reset();
          for (const RW of this.dpadTimers.values()) RW.reset();
          this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(WW), this.ring.hide(), this.releasePointer(), this.publishState(FM.d)
        }
        getTargets() {
          const WW = this.targets.get();
          return this.hasCategories = WW.hasCategories, WW
        }
        currentTarget() {
          var WW;
          return this.focused && null !== (WW = this.getTargets().byElement.get(this.focused)) && void 0 !== WW ? WW : null
        }
        readFocusRect() {
          const WW = this.focused;
          if (null === WW || void 0 === WW || !WW.isConnected || !WW.closest(wM)) return null;
          const RW = WW.getBoundingClientRect();
          return RW.width > 0 && RW.height > 0 ? {
            left: RW.left,
            top: RW.top,
            width: RW.width,
            height: RW.height
          } : null
        }
        ensureFocus() {
          const WW = this.readFocusRect();
          if (WW || this.pointer) return WW;
          const {
            targets: RW,
            byElement: MW
          } = this.getTargets();
          let wW = null,
            CW = !1;
          if (this.lastRect) wW = SR(OR(this.lastRect), RW);
          else {
            var zR, AW;
            const WW = ((WW, RW) => {
                const MW = document.querySelector(".EntireInventoryWrapper [data-pad-inventory-start]");
                return MW ? xw(WW.filter((WW => MW.contains(WW.element))), RW) : null
              })(RW, (0, uR.i)()),
              bR = RW.find((WW => null !== WW.idx && WW.idx === this.reopenSlotIdx)),
              yR = document.querySelector(sM);
            CW = null !== WW || void 0 !== bR, wW = null !== (zR = null !== (AW = null !== WW && void 0 !== WW ? WW : bR) && void 0 !== AW ? AW : yR && MW.get(yR)) && void 0 !== zR ? zR : RM(RW)
          }
          return this.setFocus(wW, CW), this.lastRect
        }
        setFocus(WW) {
          let RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          WW && (this.focused = WW.element, this.focusTarget = WW, this.panelMemory.set(WW.panel, WW.element), RW && WW.scrollContainer && ((WW, RW) => {
            const MW = WW.getBoundingClientRect(),
              wW = RW.getBoundingClientRect(),
              CW = RW.scrollTop;
            return MW.top < wW.top ? RW.scrollTop -= wW.top - MW.top : MW.bottom > wW.bottom && (RW.scrollTop += MW.bottom - wW.bottom), RW.scrollTop !== CW
          })(WW.element, WW.scrollContainer) && this.targets.invalidate(), this.lastRect = this.readFocusRect(), this.followFocusJump())
        }
        followFocusJump() {
          if (this.pointer)
            if ("cursor" === (0, tR.i)().inventoryNavigation) {
              if (this.lastRect) {
                const WW = OR(this.lastRect);
                this.pointer = {
                  x: WW.x,
                  y: WW.y,
                  speedRamp: 0
                }
              }
            } else this.releasePointer()
        }
        engagePointer() {
          const WW = this.lastRect ? OR(this.lastRect) : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          };
          this.pointer = {
            x: WW.x,
            y: WW.y,
            speedRamp: 0
          }
        }
        releasePointer() {
          this.pointer = null, xM.hide()
        }
        hoverAtPointer() {
          var WW;
          const RW = WM(this.pointer, this.getTargets().targets);
          (null === RW || void 0 === RW ? void 0 : RW.element) !== this.focused && (this.focused = null !== (WW = null === RW || void 0 === RW ? void 0 : RW.element) && void 0 !== WW ? WW : null, this.focusTarget = RW, RW && (this.panelMemory.set(RW.panel, RW.element), this.lastRect = this.readFocusRect()))
        }
        moveCursor(WW, RW) {
          const MW = this.focusTarget,
            wW = MW && (0, tR.i)().cursorMagnetism ? OR(MW.rect) : null;
          this.pointer = FW(this.pointer, {
            stick: WW.leftStick,
            moveDeadzone: (0, tR.i)().moveDeadzone,
            dpad: RW,
            dtMs: WW.dtMs,
            cursorSpeedPercent: (0, tR.i)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: {
              overInteractive: !1,
              magnetTarget: wW
            }
          })
        }
        move(WW) {
          this.targets.revalidate();
          const RW = this.currentTarget();
          RW && this.setFocus(ZR(RW, this.getTargets().targets, WW))
        }
        step(WW) {
          const RW = this.pointer;
          if (RW && (this.releasePointer(), !this.focused)) return this.targets.revalidate(), void this.setFocus(((WW, RW, MW) => {
            var wW;
            const CW = {
              key: "",
              rect: {
                left: WW.x,
                top: WW.y,
                width: 0,
                height: 0
              },
              panel: "",
              scrollGroup: null,
              visible: !0
            };
            return null !== (wW = ZR(CW, RW, MW)) && void 0 !== wW ? wW : SR(WW, RW)
          })(RW, this.getTargets().targets, WW));
          this.move(WW)
        }
        isNavButton(WW) {
          return !hM.some((RW => (0, eW.g)(RW) === WW)) && !(WW === (0, eW.g)("inventory") && VM())
        }
        handleNavigation(WW, RW) {
          const MW = (0, tR.i)().inventoryNavigation,
            wW = {
              x: 0,
              y: 0
            };
          let CW = null;
          for (const yR of gR.z) {
            const zR = this.isNavButton(yR) && WW.isHeld(yR);
            zR && (wW.x += dM[yR].x, wW.y += dM[yR].y), this.dpadTimers.get(yR).update(zR, RW) && "cursor" !== MW && (CW ??= yR)
          }
          const zR = this.stickGate.update(WW.leftStick, (0, tR.i)().moveDeadzone);
          if (CW && (this.step(CW), this.stickGate.lock()), "slot" !== MW) {
            const RW = ((WW, RW, MW, wW) => "hybrid" !== WW ? "cursor" === WW : !wW && (RW || MW))(MW, null !== this.pointer, zR, null !== CW);
            return RW && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(WW, "cursor" === MW ? wW : {
              x: 0,
              y: 0
            }))
          }
          const AW = (0, gR.g)(WW.leftStick, (0, tR.i)().moveDeadzone),
            bR = this.stickRepeat.update(zR ? (0, gR.ab)(AW) : null, RW);
          bR && this.move(bR)
        }
        applyCategoryPlace() {
          const WW = this.placeAfterCategory;
          if (!WW) return;
          this.placeAfterCategory = null, this.targets.invalidate();
          const RW = SR(OR(WW.rect), this.getTargets().targets, (RW => RW.scrollGroup === WW.scrollGroup));
          this.setFocus(RW, !1)
        }
        applyFocusRequest() {
          const WW = (0, uR.u)();
          WW && (this.targets.invalidate(), this.setFocus((0, uR.e)(this.getTargets().targets, WW)))
        }
        handlePanels(WW) {
          var RW, MW, wW;
          const CW = WW.wasPressed((0, eW.g)("inventoryPanelPrevious")),
            zR = WW.wasPressed((0, eW.g)("inventoryPanelNext"));
          if (!CW && !zR) return;
          const {
            targets: AW
          } = this.getTargets(), bR = (yR = ((WW, RW) => {
            const MW = [];
            for (const CW of WW) CW.visible && !MW.includes(CW.panel) && MW.push(CW.panel);
            const wW = WW => {
              const wW = RW.indexOf(WW);
              return -1 === wW ? RW.length + MW.indexOf(WW) : wW
            };
            return MW.sort(((WW, RW) => wW(WW) - wW(RW)))
          })(AW, bw), NW = null !== (RW = null === (MW = this.focusTarget) || void 0 === MW ? void 0 : MW.panel) && void 0 !== RW ? RW : null, BW = zR ? 1 : -1, 0 === yR.length ? null : yR[nR(null === NW ? -1 : yR.indexOf(NW), yR.length, BW)]);
          var yR, NW, BW;
          if (null === bR) return;
          const tR = this.panelMemory.get(bR),
            TW = AW.filter((WW => WW.panel === bR)),
            gR = null !== (wW = TW.find((WW => WW.element === tR && WW.visible))) && void 0 !== wW ? wW : xw(TW, (0, uR.i)());
          this.setFocus(gR)
        }
        handlePaging(WW, RW) {
          var MW, wW;
          const CW = (0, eW.g)("menuPageUp"),
            zR = (0, eW.g)("menuPageDown"),
            AW = this.pageUpTimer.update(WW.isHeld(CW), RW),
            bR = this.pageDownTimer.update(WW.isHeld(zR), RW);
          if (!AW && !bR) return;
          const yR = bR ? 1 : -1;
          if (!WW.wasPressed(bR ? zR : CW) && this.hasCategories) return;
          if ((WW => {
              const RW = Array.from(document.querySelectorAll(".EntireInventoryWrapper .CreativeCategoryTab"));
              if (0 === RW.length) return !1;
              const MW = RW.findIndex((WW => WW.classList.contains("Selected"))),
                wW = RW[nR(MW, RW.length, WW)];
              return rM(wW, oR(wW)), !0
            })(yR)) {
            var NW, BW;
            this.targets.invalidate();
            const WW = null !== (NW = null === (BW = this.focusTarget) || void 0 === BW ? void 0 : BW.scrollGroup) && void 0 !== NW ? NW : null,
              RW = this.readFocusRect();
            return void(this.placeAfterCategory = null !== WW && RW && !this.pointer ? {
              rect: RW,
              scrollGroup: WW
            } : null)
          }
          const {
            targets: tR
          } = this.getTargets();
          let TW = this.currentTarget();
          var gR;
          null !== (MW = TW) && void 0 !== MW && MW.scrollContainer || (TW = null !== (gR = tR.find((WW => null !== WW.scrollContainer && WW.visible))) && void 0 !== gR ? gR : null);
          if (null === (wW = TW) || void 0 === wW || !wW.scrollContainer) return;
          const iR = ((WW, RW, MW, wW) => {
            if (null === WW.scrollGroup) return null;
            const CW = OR(WW.rect),
              zR = CW.x,
              AW = CW.y + ("Down" === MW ? wW : -wW);
            let bR = null,
              yR = 1 / 0;
            for (const NW of RW) {
              if (NW.scrollGroup !== WW.scrollGroup || NW.key === WW.key) continue;
              const RW = OR(NW.rect);
              if ("Down" === MW ? RW.y <= CW.y : RW.y >= CW.y) continue;
              const wW = Math.hypot(RW.x - zR, RW.y - AW);
              wW < yR && (bR = NW, yR = wW)
            }
            return bR
          })(TW, tR, yR > 0 ? "Down" : "Up", TW.scrollContainer.clientHeight);
          this.setFocus(null !== iR && void 0 !== iR ? iR : TW)
        }
        handleScroll(WW) {
          var RW, MW, wW, CW;
          if (!this.scroller.isScrolling(WW.rightStick)) return void this.scroller.reset();
          const zR = null !== (RW = null === (MW = this.focusTarget) || void 0 === MW ? void 0 : MW.scrollContainer) && void 0 !== RW ? RW : null === (wW = this.getTargets().targets.find((WW => null !== WW.scrollContainer))) || void 0 === wW ? void 0 : wW.scrollContainer;
          if (!zR || !this.scroller.step(zR, WW.rightStick, WW.dtMs)) return;
          this.targets.scrolled(zR);
          const AW = this.pointer || (null === (CW = this.focusTarget) || void 0 === CW ? void 0 : CW.scrollContainer) !== zR ? null : this.readFocusRect();
          if (!AW) return;
          const bR = pW(zR),
            yR = OR(AW);
          if (yR.y < bR.top || yR.y > bR.bottom) {
            const WW = this.focusTarget.scrollGroup,
              RW = SR(yR, this.getTargets().targets, (RW => RW.scrollGroup === WW));
            this.setFocus(RW, !1)
          }
        }
        focusContext(WW) {
          const {
            kind: RW,
            idx: MW
          } = this.focused ? JM(this.focused) : {
            kind: null,
            idx: null
          }, wW = this.focused ? iw(this.focused) : null, CW = wW ? (0, kw.c)(wW) : null;
          return {
            kind: RW,
            idx: MW,
            actionElement: wW,
            press: CW,
            hasPress: null !== CW,
            hasBack: !(null === CW || void 0 === CW || !CW.back),
            holding: WW.isHolding(),
            slotHasItem: null !== MW && WW.hasItemAt(MW)
          }
        }
        handleButtons(WW, RW, MW) {
          var wW, CW;
          if (!this.activePress || WW.isHeld(this.activePress.button) && (wW = this.activePress.target, CW = this.focused, null !== wW.recipe ? YM(CW).recipe === wW.recipe : CW === wW.element) || this.releasePress(), this.scrollStickClick.update(WW.rightStick, RW), !this.handleHotbarPick(WW, MW)) {
            for (const [wW, CW] of pM) {
              const zR = (0, eW.g)(CW);
              if (!WW.wasPressed(zR) || "openButton" === wW && !VM()) continue;
              if ("RS" === zR && !this.scrollStickClick.allowsClick(RW)) continue;
              const AW = this.focusContext(MW),
                bR = vM(wW, AW);
              bR && this.runIntent(bR, AW, zR, MW)
            }
            this.handleDrop(WW, RW, MW)
          }
        }
        handleHotbarPick(WW, RW) {
          const MW = this.hotbarPick;
          if (!MW) return !1;
          const wW = WW.wasPressed((0, eW.g)("inventoryPrimary")) || WW.wasPressed((0, eW.g)("inventoryHotbarSwap"));
          if (!wW && !WW.wasPressed((0, eW.g)("inventoryClose")) && !RW.isHolding()) return !(WW.wasPressed((0, eW.g)("inventory")) && VM());
          const CW = this.focusTarget;
          wW && "hotbar" === (null === CW || void 0 === CW ? void 0 : CW.panel) && null !== CW.idx && CW.idx !== MW.idx && (RW.swapWithHotbar(CW.idx, MW.idx), this.afterAction()), this.hotbarPick = null;
          const zR = MW.element.isConnected ? this.getTargets().byElement.get(MW.element) : void 0;
          return zR && this.setFocus(zR), !0
        }
        startHotbarPick(WW) {
          var RW;
          const {
            targets: MW,
            byElement: wW
          } = this.getTargets(), CW = document.querySelector(sM), zR = null !== (RW = CW && wW.get(CW)) && void 0 !== RW ? RW : MW.find((WW => "hotbar" === WW.panel));
          zR && this.focused && (this.hotbarPick = {
            idx: WW,
            element: this.focused
          }, this.setFocus(zR))
        }
        focusKey() {
          return this.focused ? eM(this.focused) : null
        }
        handleDrop(WW, RW, MW) {
          const wW = (0, eW.g)("inventoryDrop");
          if (WW.wasPressed(wW)) {
            const WW = (CW = this.focusContext(MW)).holding ? {
              kind: "mM"
            } : "slot" === CW.kind && CW.slotHasItem && null !== CW.idx ? {
              kind: "slot",
              idx: CW.idx
            } : null;
            return void(WW && (this.dropFrom(WW, !1, MW), this.dropLatch.press(WW, this.focusKey(), RW, YW.e[(0, tR.i)().tapHoldTime].dropStackMs), this.afterAction()))
          }
          var CW;
          const zR = this.dropLatch.update(WW.isHeld(wW), this.focusKey(), RW);
          zR && ((WW, RW, MW) => "mM" === WW.kind ? RW : !RW && MW(WW.idx))(zR, MW.isHolding(), MW.hasItemAt) && (this.dropFrom(zR, !0, MW), this.afterAction())
        }
        dropFrom(WW, RW, MW) {
          "mM" === WW.kind ? MW.dropHeld(RW, this.slotPoint()) : MW.dropSlot(WW.idx, RW)
        }
        slotPoint() {
          return this.pointer ? {
            clientX: this.pointer.x,
            clientY: this.pointer.y
          } : this.lastRect ? (WW => {
            const RW = OR(WW);
            return {
              clientX: RW.x,
              clientY: RW.y
            }
          })(this.lastRect) : {
            clientX: 0,
            clientY: 0
          }
        }
        runIntent(WW, RW, MW, wW) {
          const CW = RW.idx,
            zR = RW.actionElement;
          switch (zR && mw.has(WW) && (0, JW.m)(zR), WW) {
            case "slotPrimary":
              wW.primary(CW, this.slotPoint());
              break;
            case "slotSecondary":
              wW.secondary(CW, this.slotPoint());
              break;
            case "slotQuickMove":
              wW.quickMove(CW, this.slotPoint());
              break;
            case "hotbarPick":
              this.startHotbarPick(CW);
              break;
            case "pressPrimary":
            case "pressSecondary":
              this.startPress(RW.press, "pressPrimary" === WW ? "primary" : "secondary", MW);
              break;
            case "click":
              rM(zR, oR(zR));
              break;
            case "openKeyboard":
              IR(zR) && XR(zR);
              break;
            case "pressBack":
              RW.press.back();
              break;
            case "cancel":
              wW.cancel();
              break;
            case "close":
              return this.releasePress(), void wW.close()
          }
          this.afterAction()
        }
        startPress(WW, RW, MW) {
          this.releasePress(), WW.press(RW) && (this.activePress = {
            handlers: WW,
            button: MW,
            target: YM(this.focused)
          })
        }
        releasePress() {
          var WW, RW, MW;
          null === (WW = this.activePress) || void 0 === WW || null === (RW = (MW = WW.handlers).release) || void 0 === RW || RW.call(MW), this.activePress = null
        }
        afterAction() {
          this.targets.invalidate(), this.hover.invalidate()
        }
        publishState(WW) {
          ((WW, RW) => {
            var MW, wW, CW, zR, AW, bR;
            return WW.showing === RW.showing && WW.kind === RW.kind && WW.holding === RW.holding && WW.slotHasItem === RW.slotHasItem && (null === (MW = WW.pressHints) || void 0 === MW ? void 0 : MW.primary) === (null === (wW = RW.pressHints) || void 0 === wW ? void 0 : wW.primary) && (null === (CW = WW.pressHints) || void 0 === CW ? void 0 : CW.secondary) === (null === (zR = RW.pressHints) || void 0 === zR ? void 0 : zR.secondary) && (null === (AW = WW.pressHints) || void 0 === AW ? void 0 : AW.back) === (null === (bR = RW.pressHints) || void 0 === bR ? void 0 : bR.back) && WW.hasCategories === RW.hasCategories && WW.hasList === RW.hasList && WW.openButtonCloses === RW.openButtonCloses && WW.steppingSlots === RW.steppingSlots && WW.hotbarPicking === RW.hotbarPicking && WW.quickMoveToHotbar === RW.quickMoveToHotbar && WW.dropStackHold === RW.dropStackHold
          })(WW, this.state) || (this.state = WW, NW.k.Sz(FM.g, WW))
        }
      },
      uM = ["pointermove", "pointerover", "pointerout", "mouseover", "mouseout"];
    var OM = MW(7126);
    var nM = MW(7596);
    const GM = {
        duration: 80,
        strongMagnitude: .2,
        weakMagnitude: .2,
        needsPadInUse: !1
      },
      LM = {
        damage: {
          duration: 120,
          strongMagnitude: .45,
          weakMagnitude: .3,
          minIntervalMs: 250,
          needsPadInUse: !0
        },
        blockBreak: {
          duration: 40,
          strongMagnitude: 0,
          weakMagnitude: .25,
          minIntervalMs: 120,
          needsPadInUse: !0
        },
        hit: {
          duration: 50,
          strongMagnitude: .15,
          weakMagnitude: .35,
          minIntervalMs: 120,
          needsPadInUse: !0
        },
        connect: {
          ...GM,
          minIntervalMs: 1e3
        },
        preview: {
          ...GM,
          minIntervalMs: 0
        }
      };
    const HM = new class {
        constructor(WW) {
          this.deps = WW, this.lastPlayedMs = {}, this.loggedFailure = !1, this.logFailure = WW => {
            this.loggedFailure || (this.loggedFailure = !0, console.warn("Controller vibration failed; further failures are not logged.", WW))
          }
        }
        play(WW, RW) {
          const MW = LM[WW];
          if (!this.deps.isVibrationOn() || MW.needsPadInUse && !this.deps.isPadInUse()) return !1;
          const wW = this.lastPlayedMs[WW];
          if (void 0 !== wW && RW - wW < MW.minIntervalMs) return !1;
          const CW = this.deps.getActuator();
          if (!CW) return !1;
          this.lastPlayedMs[WW] = RW;
          const {
            duration: zR,
            strongMagnitude: AW,
            weakMagnitude: bR
          } = MW;
          try {
            CW.playEffect("dual-rumble", {
              duration: zR,
              strongMagnitude: AW,
              weakMagnitude: bR
            }).catch(this.logFailure)
          } catch (yR) {
            this.logFailure(yR)
          }
          return !0
        }
      }({
        getActuator: () => (WW => {
          const RW = null === WW || void 0 === WW ? void 0 : WW.vibrationActuator;
          return "function" === typeof(null === RW || void 0 === RW ? void 0 : RW.playEffect) ? RW : null
        })(AW.g.getActiveGamepad()),
        isVibrationOn: () => (0, tR.i)().vibration,
        isPadInUse: TW.i
      }),
      DM = WW => {
        HM.play(WW, performance.now())
      };
    var qw = MW(7134),
      ZM = MW(2202),
      SM = MW(130),
      Ww = MW(50),
      Rw = MW(932);
    class Mw {
      constructor(WW) {
        this.deps = WW
      }
      check() {
        let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const RW = this.deps.isPadActive() ? this.deps.getPadFamily() : null;
        if (!RW) return "skipped";
        const MW = WW ? this.deps.getVisitId() : this.deps.peekVisitId();
        return null === MW || this.deps.readReportedVisitId() === MW ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(MW), this.deps.Mw(RW, this.deps.getInputType()), "reported") : "notReady"
      }
    }
    const ww = "controllerUsageReportedVisit";
    var Cw = MW(1166),
      zC = MW(1495),
      Aw = MW(1253),
      bC = MW(1080);
    const yC = WW => ({
        translationKey: `controller:${WW}`
      }),
      Nw = {
        A: "A",
        B: "B",
        X: "X",
        Y: "Y",
        LB: "LB",
        RB: "RB",
        LT: "LT",
        RT: "RT",
        View: yC("padButtonView"),
        Menu: yC("padButtonMenu"),
        LS: "L3",
        RS: "R3",
        Up: yC("padButtonDpadUp"),
        Down: yC("padButtonDpadDown"),
        Left: yC("padButtonDpadLeft"),
        Right: yC("padButtonDpadRight"),
        Home: yC("padButtonHome"),
        LeftStick: yC("padButtonLeftStick"),
        RightStick: yC("padButtonRightStick")
      },
      ew = {
        xbox: {
          LS: "LS",
          RS: "RS"
        },
        generic: {},
        steamdeck: {
          LB: "L1",
          RB: "R1",
          LT: "L2",
          RT: "R2"
        },
        playstation: {
          A: "\u2715",
          B: "\u25cb",
          X: "\u25a1",
          Y: "\u25b3",
          LB: "L1",
          RB: "R1",
          LT: "L2",
          RT: "R2",
          View: yC("padButtonCreate"),
          Menu: yC("padButtonOptions")
        },
        nintendo: {
          A: "B",
          B: "A",
          X: "Y",
          Y: "X",
          LB: "L",
          RB: "R",
          LT: "ZL",
          RT: "ZR",
          View: "\u2212",
          Menu: "+"
        }
      },
      Bw = (WW, RW) => {
        var MW;
        const wW = null !== (MW = ew[WW][RW]) && void 0 !== MW ? MW : Nw[RW];
        return "string" === typeof wW ? wW : (0, CW.w)(bC.d.get().getCurrentLanguageCode(), wW.translationKey)
      },
      tC = WW => {
        let {
          glyph: RW,
          family: MW,
          className: wW
        } = WW;
        const CW = (0, TW.C)(),
          zR = null !== MW && void 0 !== MW ? MW : CW,
          AW = (0, qw.f)(zR, RW);
        return (0, mR.jsx)("span", {
          className: VW()("ControllerGlyph", wW),
          role: "img",
          "aria-label": Bw(zR, RW),
          style: {
            "--pad-glyph-mask": `url(${AW})`,
            "--pad-glyph-aspect": (0, qw.e)(zR, RW)
          }
        })
      };
    var Tw = MW(1523);
    const gC = WW => {
      let {
        action: RW
      } = WW;
      const {
        t: MW
      } = (0, CW.C)();
      switch (RW.kind) {
        case "reload":
          return (0, mR.jsx)("span", {
            children: MW("controller:gameplayReload")
          });
        case "specialAction":
          return null;
        case "customButton":
          return (0, mR.jsx)(Tw.c, {
            text: RW.description ? [{
              icon: RW.icon
            }, ` ${RW.description}`] : [{
              icon: RW.icon
            }]
          });
        case "touchButton":
          return (0, mR.jsx)(Tw.c, {
            text: RW.label
          })
      }
    };
    var iC = MW(7601);
    const Yw = WW => {
      let {
        hold: RW
      } = WW;
      return (0, mR.jsx)("div", {
        className: "DropStackFillTrack",
        style: {
          "--pad-drop-stack-hold": `${RW.holdMs}ms`
        },
        children: (0, mR.jsx)("div", {
          className: "DropStackFillBar"
        })
      }, RW.id)
    };
    var Jw = MW(7625),
      Pw = MW(7631),
      Iw = MW(7640),
      ow = MW(7618);
    const lw = () => {
        const {
          gameState: WW
        } = (0, yR.i)(["gameState"]), RW = (0, TW.z)(), [wW, CW] = (0, UW.useState)(!1), [zR, AW] = (0, UW.useState)(!1);
        return (0, UW.useEffect)((() => {
          "inGame" === WW && CW(!0)
        }), [WW]), (0, UW.useEffect)((() => {
          if (!wW) return;
          let WW = null,
            RW = !1;
          return Promise.all([MW.e(59), MW.e(207), MW.e(206), MW.e(62), MW.e(60), MW.e(61), MW.e(79), MW.e(198), MW.e(169), MW.e(203), MW.e(120), MW.e(178), MW.e(72), MW.e(214), MW.e(199), MW.e(98), MW.e(195), MW.e(97), MW.e(71), MW.e(100), MW.e(78)]).then((() => MW(38124))).then((MW => {
            RW || (WW = MW.startPadGameplay())
          })).catch((WW => {
            console.error("Pad gameplay failed to load", WW), RW || AW(!0)
          })), () => {
            var MW;
            RW = !0, null === (MW = WW) || void 0 === MW || MW()
          }
        }), [wW]), (0, UW.useEffect)((() => {
          zR && RW && (AW(!1), Cw.NotificationProvider.showPromptPopup({
            title: "controller:gameplayLoadFailedTitle",
            subtitle: "controller:gameplayLoadFailedSubtitle",
            confirmText: "settingsMenu:reloadPagePopupConfirm",
            confirmTooltip: "",
            cancelText: "general:cancel",
            cancelTooltip: ""
          }).getResult().then((WW => {
            !0 === WW && (0, zC.reloadBloxd)()
          })))
        }), [zR, RW]), (0, mR.jsxs)(mR.Fragment, {
          children: [(0, mR.jsx)(Fw, {}), (0, mR.jsx)(fw, {}), (0, mR.jsx)(Qw, {})]
        })
      },
      Fw = () => {
        const {
          t: WW
        } = (0, CW.C)(), RW = (0, TW.z)(), {
          gameState: MW,
          isUiHidden: wW
        } = (0, yR.i)(["gameState", "isUiHidden"]), {
          hideButtonHints: zR
        } = (0, tR.s)(), AW = (0, iC.h)(), bR = (0, iC.j)(), [NW, BW] = (0, UW.useState)(Iw.e);
        return (0, Aw.f)(ow.s, BW), !RW || zR || wW || "inGame" !== MW || !AW && !NW ? null : (0, mR.jsxs)("div", {
          className: "PadActionHint SmallTextBold",
          children: [AW && (0, mR.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, mR.jsx)(tC, {
              glyph: (0, eW.g)("actionButton")
            }), (0, mR.jsx)(gC, {
              action: AW
            }), bR && (0, mR.jsx)("span", {
              className: "PadActionHintMore",
              children: WW("controller:gameplayActionWheelHint")
            })]
          }), NW && (0, mR.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, mR.jsx)(tC, {
              glyph: (0, eW.g)("JI")
            }), (0, mR.jsx)("span", {
              children: WW("controller:gameplayPickBlock")
            })]
          })]
        })
      },
      fw = () => {
        const {
          t: WW
        } = (0, CW.C)(), RW = (0, TW.z)(), {
          gameState: MW,
          isUiHidden: wW
        } = (0, yR.i)(["gameState", "isUiHidden"]), [zR, AW] = (0, UW.useState)(Jw.b);
        return (0, Aw.f)(ow.o, AW), RW && !wW && "inGame" === MW && zR ? (0, mR.jsxs)("div", {
          className: "PadDropStackFill SmallTextBold",
          children: [(0, mR.jsx)("span", {
            children: WW("controller:gameplayDropStack")
          }), (0, mR.jsx)(Yw, {
            hold: zR
          })]
        }) : null
      },
      Qw = () => {
        const {
          t: WW
        } = (0, CW.C)(), RW = (0, TW.z)(), {
          gameState: MW,
          isUiHidden: wW
        } = (0, yR.i)(["gameState", "isUiHidden"]), {
          hideButtonHints: zR
        } = (0, tR.s)(), [AW, bR] = (0, UW.useState)(Pw.d);
        return (0, Aw.f)(ow.l, bR), RW && !wW && "inGame" === MW && AW ? (0, mR.jsxs)("div", {
          className: "PadAttackLatchedHint SmallTextBold",
          children: [!zR && (0, mR.jsx)(tC, {
            glyph: (0, eW.g)("attack")
          }), (0, mR.jsx)("span", {
            children: WW("controller:gameplayAttackLatched")
          })]
        }) : null
      };
    var rC = MW(7642),
      cC = MW(1558),
      Xw = MW(1953),
      jC = MW(7109);
    const kC = WW => WW && !(0, rC.e)(cC.d.get("shopInfo")),
      aC = () => {
        const WW = "inGame" === (0, yR.i)(["gameState"]).gameState;
        return (0, Xw.f)("shopInfo", (() => {
          (0, jC.f)(kC(WW))
        })), (0, UW.useEffect)((() => {
          (0, jC.f)(kC(WW))
        }), [WW]), null
      },
      sw = () => {
        const {
          t: WW
        } = (0, CW.C)(), {
          hideButtonHints: RW
        } = (0, tR.s)();
        (0, TW.C)();
        const MW = (0, FM.o)();
        return (0, UW.useEffect)((() => (() => {
          const WW = BW.c.register({
              name: "inventory",
              isActive: KM.isActive,
              onFrame: KM.onFrame,
              onDeactivate: KM.onDeactivate,
              wakePressActs: KM.wakePressActs
            }),
            RW = WW => {
              KM.noteRealPointer(WW), KM.shouldBlockRealPointer(WW) && WW.stopPropagation()
            };
          for (const AW of uM) window.addEventListener(AW, RW, !0);
          const MW = (0, uR.n)((() => {
              "inventory" !== BW.c.getActiveConsumerName() && KM.forgetSurface()
            })),
            wW = WW => {
              const RW = WW.target;
              (0, TW.i)() && ZW(RW) && RW.closest(wM) && (0, uR.k)() && (0, uR.q)(RW)
            };
          document.addEventListener("focusout", wW, !0);
          const {
            invalidate: CW,
            onScroll: zR
          } = KM.targets;
          return document.addEventListener("scroll", zR, !0), window.addEventListener("resize", CW), () => {
            WW(), MW();
            for (const WW of uM) window.removeEventListener(WW, RW, !0);
            document.removeEventListener("scroll", zR, !0), document.removeEventListener("focusout", wW, !0), window.removeEventListener("resize", CW), KM.targets.disconnect()
          }
        })()), []), (0, mR.jsxs)(mR.Fragment, {
          children: [(0, mR.jsx)(uW, {
            placer: KM.ring,
            className: "InventorySlotCursorRing"
          }), MW.showing && !RW && (0, mR.jsx)("div", {
            className: "InventorySlotCursorHints SmallTextBold",
            children: KR(MW).map((RW => {
              let {
                actions: wW,
                labelKey: CW
              } = RW;
              return (0, mR.jsxs)("div", {
                className: "InventorySlotCursorHint",
                children: [wW.map((WW => (0, mR.jsx)(tC, {
                  glyph: (0, eW.g)(WW)
                }, WW))), (0, mR.jsx)("span", {
                  children: WW(`controller:${CW}`)
                }), "inventoryDrop" === CW && MW.dropStackHold && (0, mR.jsx)(Yw, {
                  hold: MW.dropStackHold
                })]
              }, CW)
            }))
          })]
        })
      },
      dw = [{
        command: "close",
        action: "keyboardClose",
        repeats: !1
      }, {
        command: "submit",
        action: "keyboardSubmit",
        repeats: !1
      }, {
        command: "backspace",
        action: "keyboardBackspace",
        repeats: !0
      }, {
        command: "space",
        action: "keyboardSpace",
        repeats: !1
      }, {
        command: "caretLeft",
        action: "keyboardCaretLeft",
        repeats: !0
      }, {
        command: "caretRight",
        action: "keyboardCaretRight",
        repeats: !0
      }, {
        command: "shift",
        action: "keyboardShift",
        repeats: !1
      }, {
        command: "page",
        action: "keyboardSymbols",
        repeats: !1
      }, {
        command: "channel",
        action: "keyboardChannel",
        repeats: !1
      }],
      pw = WW => Array.from(WW).map((WW => ({
        type: "char",
        char: WW,
        width: 1
      }))),
      hw = function(WW) {
        return {
          type: "command",
          command: WW,
          width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
        }
      },
      Uw = [hw("page", 2), hw("otherPage"), hw("caretLeft"), hw("space", 3), hw("caretRight"), hw("close", 1.5), hw("submit", 1.5)],
      Ew = [hw("page", 2), hw("otherPage"), hw("caretLeft"), hw("space", 2), hw("caretRight"), hw("newline"), hw("close", 1.5), hw("submit", 1.5)],
      Vw = [
        [...pw("1234567890"), hw("backspace")], pw("qwertyuiop/"), pw("asdfghjkl'?"), [hw("shift", 2), ...pw("zxcvbnm,.")]
      ],
      mC = [
        [...pw("1234567890"), hw("backspace")], pw("!@#$%^&*()/"), pw('-_=+[]{};:"'), pw("~`|\\<>'\u20ac\xa3,.")
      ],
      xC = {
        letters: Vw,
        accents: [
          [...pw("1234567890"), hw("backspace")], pw("\xe1\xe9\xed\xf3\xfa\xe0\xe8\xec\xf2\xf9\xf1"), pw("\xe2\xea\xee\xf4\xfb\xe4\xeb\xef\xf6\xfc\xe7"), [hw("shift", 2), ...pw("\xe3\xf5\xdf\u0153\u011f\u015f\u0131\xbf\xa1")]
        ],
        symbols: mC
      },
      vC = new Set(["de", "es", "fr", "it", "nl", "pt", "pt-BR", "tr", "vi"]),
      Kw = (WW, RW) => "letters" === WW ? RW ? {
        page: "accents",
        otherPage: "symbols"
      } : {
        page: "symbols",
        otherPage: "accents"
      } : {
        page: "letters",
        otherPage: "accents" === WW ? "symbols" : "accents"
      },
      uw = function(WW, RW) {
        const MW = ((WW, RW) => [...xC[WW], RW ? Ew : Uw])(WW, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
        if (0 === RW) return MW;
        const wW = Math.min(2, Ow(MW[0]) / RW);
        return [Array.from({
          length: RW
        }, ((WW, RW) => ({
          type: "phrase",
          phraseIndex: RW,
          width: wW
        }))), ...MW]
      },
      Ow = WW => WW.reduce(((WW, RW) => WW + RW.width), 0),
      nw = WW => Math.max(...WW.map(Ow)),
      Gw = (WW, RW) => {
        const MW = WW[RW.row];
        let wW = (nw(WW) - Ow(MW)) / 2;
        for (let CW = 0; CW < RW.col; CW++) wW += MW[CW].width;
        return wW + MW[RW.col].width / 2
      },
      Lw = (WW, RW, MW) => {
        let wW = 0,
          CW = 1 / 0;
        for (let zR = 0; zR < WW[RW].length; zR++) {
          const AW = Math.abs(Gw(WW, {
            row: RW,
            col: zR
          }) - MW);
          AW < CW - 1e-9 && (wW = zR, CW = AW)
        }
        return wW
      },
      Hw = (WW, RW) => {
        const MW = Math.max(0, Math.min(WW.length - 1, RW.row));
        return {
          row: MW,
          col: Math.max(0, Math.min(WW[MW].length - 1, RW.col))
        }
      },
      Dw = (WW, RW, MW) => "once" === WW && RW - MW <= 400 ? "caps" : "off" === WW ? "once" : "off",
      qC = (WW, RW) => "once" === WW && (WW => WW.toLowerCase() !== WW.toUpperCase())(RW) ? "off" : WW,
      Zw = (WW, RW, MW) => {
        if ("symbols" === RW || "off" === MW) return WW;
        const wW = WW.toUpperCase();
        return 1 === wW.length ? wW : WW
      };
    var Sw = MW(1493),
      WC = MW(7551),
      RC = MW(7655),
      MC = MW(232),
      wC = MW(1459),
      CC = MW(7090);
    const zz = "[data-pad-secondary]",
      AC = WW => WW instanceof HTMLElement && NR(WW) && !eR(WW),
      bz = WW => {
        const RW = WW.querySelector(zz);
        if (RW && AC(RW)) return RW;
        for (const CW of null !== (MW = null === (wW = WW.parentElement) || void 0 === wW ? void 0 : wW.children) && void 0 !== MW ? MW : []) {
          var MW, wW;
          if (CW !== WW && CW.matches(zz) && AC(CW)) return CW
        }
        return null
      },
      yz = (WW, RW, MW, wW) => Math.max(0, Math.max(WW, MW) - Math.min(RW, wW)),
      NC = (WW, RW, MW, wW) => Math.max(0, Math.min(RW, wW) - Math.max(WW, MW)),
      eC = (WW, RW, MW) => {
        const wW = (WW.left + WW.right) / 2,
          CW = (WW.top + WW.bottom) / 2,
          zR = (RW.left + RW.right) / 2,
          AW = (RW.top + RW.bottom) / 2;
        if ("Left" === MW || "Right" === MW) {
          const bR = "Right" === MW ? 1 : -1;
          return {
            forwardGap: "Right" === MW ? RW.left - WW.right : WW.left - RW.right,
            centreForward: (zR - wW) * bR,
            sidewaysGap: yz(WW.top, WW.bottom, RW.top, RW.bottom),
            sidewaysOverlap: NC(WW.top, WW.bottom, RW.top, RW.bottom),
            centreSideways: Math.abs(AW - CW),
            startSideways: Math.abs(RW.top - WW.top),
            fromSidewaysSize: WW.bottom - WW.top,
            toSidewaysSize: RW.bottom - RW.top,
            toLength: RW.right - RW.left
          }
        }
        const bR = "Down" === MW ? 1 : -1;
        return {
          forwardGap: "Down" === MW ? RW.top - WW.bottom : WW.top - RW.bottom,
          centreForward: (AW - CW) * bR,
          sidewaysGap: yz(WW.left, WW.right, RW.left, RW.right),
          sidewaysOverlap: NC(WW.left, WW.right, RW.left, RW.right),
          centreSideways: Math.abs(zR - wW),
          startSideways: Math.abs(RW.left - WW.left),
          fromSidewaysSize: WW.right - WW.left,
          toSidewaysSize: RW.right - RW.left,
          toLength: RW.bottom - RW.top
        }
      },
      BC = WW => WW.centreForward > .5 && WW.forwardGap >= -WW.toLength / 2,
      tz = WW => {
        const RW = WW.sidewaysOverlap > 0 ? 0 : 2 * WW.fromSidewaysSize,
          MW = WW.fromSidewaysSize > 1.5 * WW.toSidewaysSize ? WW.startSideways : WW.centreSideways;
        return Math.max(0, WW.forwardGap) + 3 * WW.sidewaysGap + RW + .1 * MW
      },
      TC = (WW, RW) => NC(WW.top, WW.bottom, RW.top, RW.bottom) > 0 || RW.bottom - RW.top > RW.right - RW.left,
      gz = (WW, RW, MW, wW, CW, zR) => {
        const AW = CW ? YC(WW, RW, MW, CW) : new Set,
          bR = PC(WW, RW, MW, AW);
        return bR < 0 && AW.size > 0 && zR ? iz(WW, RW, MW, zR) : wW && bR >= 0 ? JC(WW, RW, MW, wW, bR, AW) : bR
      },
      iz = (WW, RW, MW, wW) => {
        const CW = new Set,
          zR = PC(WW, RW, "Up", CW) >= 0,
          AW = PC(WW, RW, "Down", CW) >= 0,
          bR = new Set;
        return RW.forEach(((RW, MW) => {
          const CW = RW.top + RW.bottom < WW.top + WW.bottom;
          wW[MW] && !(CW ? zR : AW) || bR.add(MW)
        })), PC(WW, RW, MW, bR)
      },
      YC = (WW, RW, MW, wW) => {
        const CW = new Set;
        return "Left" !== MW && "Right" !== MW || RW.forEach(((RW, MW) => {
          wW[MW] && NC(WW.top, WW.bottom, RW.top, RW.bottom) <= 0 && CW.add(MW)
        })), CW
      },
      JC = (WW, RW, MW, wW, CW, zR) => {
        const AW = eC(WW, RW[CW], MW).forwardGap;
        let bR = CW,
          yR = wW[CW],
          NW = 1 / 0;
        return RW.forEach(((RW, eW) => {
          const BW = wW[eW];
          if (zR.has(eW) || BW < yR || BW === yR && bR === CW) return;
          const tR = eC(WW, RW, MW);
          if (!BC(tR) || tR.forwardGap < 0 || tR.forwardGap >= AW) return;
          const TW = tz(tR);
          (BW > yR || TW < NW) && (bR = eW, yR = BW, NW = TW)
        })), bR
      },
      PC = (WW, RW, MW, wW) => {
        let CW = -1,
          zR = 1 / 0;
        if (RW.forEach(((RW, AW) => {
            const bR = ((WW, RW, MW) => {
              const wW = eC(WW, RW, MW);
              if (!BC(wW)) return null;
              const CW = Math.max(0, wW.forwardGap);
              return wW.sidewaysOverlap <= 0 && wW.sidewaysGap > 2 * (CW + 1) ? null : tz(wW)
            })(WW, RW, MW);
            null !== bR && bR < zR && !wW.has(AW) && (zR = bR, CW = AW)
          })), CW < 0) return -1;
        const AW = RW[CW],
          bR = eC(WW, AW, MW).forwardGap;
        let yR = bR,
          NW = CW;
        return RW.forEach(((RW, zR) => {
          if (zR === CW || wW.has(zR) || !((WW, RW, MW) => {
              const wW = "Left" === MW || "Right" === MW,
                CW = wW ? NC(WW.top, WW.bottom, RW.top, RW.bottom) : NC(WW.left, WW.right, RW.left, RW.right),
                zR = wW ? Math.min(WW.bottom - WW.top, RW.bottom - RW.top) : Math.min(WW.right - WW.left, RW.right - RW.left);
              return CW > 0 && CW >= zR / 2
            })(RW, AW, MW)) return;
          const eW = eC(WW, RW, MW);
          BC(eW) && eW.forwardGap + eW.toLength <= bR + 1 && eW.forwardGap < yR && (yR = eW.forwardGap, NW = zR)
        })), NW
      },
      IC = (WW, RW) => {
        let MW = -1,
          wW = 1 / 0;
        return RW.forEach(((RW, CW) => {
          const zR = Math.max(RW.left - WW.x, 0, WW.x - RW.right),
            AW = Math.max(RW.top - WW.y, 0, WW.y - RW.bottom),
            bR = Math.hypot(zR, AW);
          bR < wW && (wW = bR, MW = CW)
        })), MW
      },
      oC = (WW, RW) => {
        const MW = Math.min(WW.bottom - WW.top, RW.bottom - RW.top) / 2;
        return Math.abs(WW.top - RW.top) > MW ? WW.top - RW.top : WW.left - RW.left
      },
      lC = WW => {
        let RW = -1;
        for (let MW = 0; MW < WW.length; MW++)(RW < 0 || oC(WW[MW], WW[RW]) < 0) && (RW = MW);
        return RW
      };
    var FC = MW(7663),
      fC = MW(7665);
    const QC = WW => {
        if ("death" !== WW || "inGame" !== yR.b.get("gameState") || "off" === (0, tR.i)().quickChat || null === (0, Sw.e)()) return !1;
        const RW = (0, eW.g)("chat");
        return RW !== (0, eW.g)("menuConfirm") && RW !== (0, eW.g)("menuBack")
      },
      rz = new FC.b;
    var cz = MW(3404),
      XC = MW(7672);
    const jz = WW => {
        let RW = null;
        for (const MW of WW.querySelectorAll("[data-pad-tabs]")) NR(MW) && (!RW || Number(MW.dataset.padTabs) < Number(RW.dataset.padTabs)) && (RW = MW);
        return RW
      },
      kz = (WW, RW, MW, wW) => {
        WW.focusWhenFound((() => {
          const CW = WW.pickInitial(RW);
          if (CW && !MW.has(CW) && (null === wW || void 0 === wW || !wW.contains(CW))) return CW;
          const zR = ((WW, RW) => {
              const MW = RW => WW.getEnabledCandidates(RW).filter((WW => !WW.closest("[data-pad-tabs]")));
              for (const wW of PR(RW)) {
                const WW = MW(wW);
                if (WW.length > 0) return WW
              }
              return MW(RW)
            })(WW, RW).filter((WW => !MW.has(WW))),
            AW = lC(zR.map((WW => WW.getBoundingClientRect())));
          return AW >= 0 ? zR[AW] : null
        }), 3e3)
      },
      az = (WW, RW, MW, wW) => {
        var CW;
        const zR = ((WW, RW) => {
          if (0 === WW.length) return null;
          const MW = WW.findIndex((WW => "true" === WW.dataset.padSelected));
          return MW < 0 ? RW > 0 ? WW[0] : WW[WW.length - 1] : WW[(MW + RW + WW.length) % WW.length]
        })([...MW.querySelectorAll("[data-pad-tab]")].filter((WW => NR(WW) && !eR(WW))), wW);
        if (!zR) return;
        const AW = null !== (CW = null === WW || void 0 === WW ? void 0 : WW.getFocused()) && void 0 !== CW ? CW : null,
          bR = !(null === AW || void 0 === AW || !AW.isConnected) && MW.contains(AW),
          yR = WW && !bR ? new Set(WW.getEnabledCandidates(RW)) : null;
        jM(zR), WW && (yR ? kz(WW, RW, yR, MW) : WW.setFocus(zR, {
          byUser: !0
        }))
      },
      sC = WW => {
        var RW;
        const MW = pW(null !== (RW = XW(WW, "x")) && void 0 !== RW ? RW : WW),
          wW = TR(WW).filter((WW => !eR(WW))),
          CW = wW.filter((WW => hW(WW.getBoundingClientRect(), MW)));
        return (CW.length > 0 ? CW : wW).sort(((WW, RW) => oC(WW.getBoundingClientRect(), RW.getBoundingClientRect())))
      },
      dC = (WW, RW, MW) => {
        const wW = [...RW.querySelectorAll("[data-pad-row]")].filter(NR),
          CW = WW.getFocused(),
          zR = CW ? wW.findIndex((WW => WW.contains(CW))) : -1;
        let AW = 0,
          bR = MW > 0 ? 0 : wW.length - 1;
        if (zR >= 0 && CW) AW = Math.max(0, sC(wW[zR]).indexOf(CW)), bR = zR + MW;
        else if (CW) {
          const WW = CW.getBoundingClientRect(),
            RW = wW.map((RW => {
              const wW = RW.getBoundingClientRect();
              return MW > 0 ? wW.top >= WW.top : wW.bottom <= WW.bottom
            }));
          bR = MW > 0 ? RW.indexOf(!0) : RW.lastIndexOf(!0)
        }
        for (let yR = bR; yR >= 0 && yR < wW.length; yR += MW) {
          const RW = sC(wW[yR]);
          if (RW.length > 0) return void WW.setFocus(RW[Math.min(AW, RW.length - 1)], {
            byUser: !0
          })
        }
      },
      pC = (WW, RW, MW) => {
        var wW, CW;
        const zR = null !== (wW = null === WW || void 0 === WW ? void 0 : WW.getFocused()) && void 0 !== wW ? wW : null,
          AW = null !== zR && void 0 !== zR && zR.closest("[data-pad-row]") ? "x" : "y",
          bR = null !== (CW = zR ? XW(zR, AW, RW) : null) && void 0 !== CW ? CW : kR(RW, AW);
        if (!bR) return;
        const yR = zR ? oR(zR) : null;
        if (dW(bR, AW, MW * ("y" === AW ? bR.clientHeight : bR.clientWidth) * .85), !WW || !yR) return;
        const NW = pW(bR),
          eW = WW.getEnabledCandidates(RW).filter((WW => bR.contains(WW) && hW(WW.getBoundingClientRect(), NW))),
          BW = IC(yR, eW.map((WW => WW.getBoundingClientRect())));
        BW >= 0 && WW.setFocus(eW[BW], {
          scroll: !1,
          byUser: !0
        })
      };
    let hC = null;
    const UC = (WW, RW) => {
        var MW, wW;
        const CW = RW.querySelector("[data-pad-friends-column]"),
          zR = WW.getFocused();
        if (!CW || !zR || !CW.contains(zR)) return !1;
        const AW = WW.getEnabledCandidates(RW).filter((WW => !CW.contains(WW))),
          bR = IC(oR(zR), AW.map((WW => WW.getBoundingClientRect()))),
          yR = null === (MW = hC) || void 0 === MW ? void 0 : MW.deref();
        return WW.setFocus(null !== yR && void 0 !== yR && yR.isConnected ? yR : null !== (wW = AW[bR]) && void 0 !== wW ? wW : null, {
          byUser: !0
        }), !0
      },
      EC = WW => {
        const RW = (0, eW.g)(WW);
        return (0, gR.F)(RW) || CC.v.some((WW => (0, eW.g)(WW) === RW)) ? null : RW
      },
      VC = (WW, RW) => {
        const MW = EC(RW);
        return null !== MW && WW.wasPressed(MW)
      },
      mz = function(WW, RW, MW) {
        let wW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const CW = (WW => {
            var RW, MW;
            return null !== (RW = null === (MW = jz(WW)) || void 0 === MW ? void 0 : MW.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== RW ? RW : null
          })(RW),
          zR = WW && CW ? new Set(WW.getEnabledCandidates(RW)) : null;
        (0, RC.c)(), MW === MC.t.SETTINGS && (0, wC.l)(yR.b.get("openEverythingMenuName")) ? yR.b.set({
          openEverythingMenuName: MW
        }) : (0, wC.u)(new Event("padMenuShortcut"), MW, wW), WW && zR && CW && kz(WW, RW, zR, CW.closest("[data-pad-tabs]"))
      },
      xz = WW => null !== WW.closest(".Dropdown-root") || null !== WW.querySelector(".Dropdown-root.is-open"),
      vz = WW => null !== (0, XC.d)() && "popup" !== WW.layer.kind && !jz(WW.root) && !xz(WW.root),
      KC = (0, iR.d)(gR.W),
      uC = (0, iR.d)(gR.W),
      OC = (WW, RW, MW) => {
        if (((WW, RW) => {
            const MW = (0, eW.g)("chat");
            return QC(RW) && WW.isHeld(MW) ? "hold" === rz.update(WW.wasPressed(MW), WW.isHeld(MW), performance.now(), YW.e[(0, tR.i)().tapHoldTime].wheelMs) && (BW.c.consumeButton(MW), NW.k.Sz(fC.g), !0) : (rz.release(), !1)
          })(RW, MW.layer.kind)) return !0;
        const wW = MW.root;
        for (const [AW, bR] of [
            ["menuTabPrevious", -1],
            ["menuTabNext", 1]
          ])
          if (RW.wasPressed((0, eW.g)(AW))) {
            const RW = xz(wW) ? null : jz(wW);
            if (RW) az(WW, wW, RW, bR);
            else if (vz(MW)) {
              var CW;
              const RW = WW ? new Set(WW.getEnabledCandidates(wW)) : null;
              null !== (CW = (0, XC.d)()) && void 0 !== CW && CW(bR) && WW && RW && kz(WW, wW, RW, null)
            } else WW && dC(WW, wW, bR);
            return !0
          } for (const [AW, bR, yR] of [
            ["menuPageUp", -1, KC],
            ["menuPageDown", 1, uC]
          ]) {
          const MW = (0, eW.g)(AW);
          if (RW.wasPressed(MW) && yR.reset(), yR.update(RW.isHeld(MW), performance.now())) return pC(WW, wW, bR), !0
        }
        const zR = "popup" === MW.layer.kind;
        return VC(RW, "pause") ? (zR || (0, wC.r)() && "menu" !== MW.layer.kind || mz(WW, wW, (0, wC.r)() ? MC.t.SETTINGS : (0, cz.d)()), !0) : !!VC(RW, "leaderboard") && ("home" === MW.layer.kind ? (WW => {
          const RW = [...WW.querySelectorAll("[data-pad-notifications]")].find(NR);
          RW && jM(RW)
        })(wW) : zR || mz(WW, wW, MC.t.LOBBY_LEADERBOARD, "inGame" === yR.b.get("gameState")), !0)
      },
      nC = (WW, RW, MW) => {
        if (OC(WW, RW, MW)) return !0;
        const wW = "home" === MW.layer.kind;
        if (RW.wasPressed((0, eW.g)("menuSecondary"))) {
          const RW = WW.getFocused(),
            CW = RW ? bz(RW) : null;
          if (CW) return jM(CW), !0;
          if (wW) {
            const RW = MW.root.querySelector("[data-pad-search] input");
            return RW && JR(RW, MW.root) ? (WW.setFocus(RW, {
              byUser: !0
            }), jM(RW)) : yR.b.set({
              searchOpen: !0
            }), !0
          }
        }
        return !(!wW || !VC(RW, "inventory")) && (((WW, RW) => {
          var MW, wW;
          const CW = RW.querySelector("[data-pad-friends-column]");
          if (!CW || !NR(CW)) return void(0, wC.u)(new Event("padMenuShortcut"), MC.t.SOCIAL);
          if (UC(WW, RW)) return;
          const zR = null !== (MW = null === (wW = CW.querySelector("[data-pad-friends-start]")) || void 0 === wW ? void 0 : wW.getBoundingClientRect().top) && void 0 !== MW ? MW : -1 / 0,
            AW = WW.getEnabledCandidates(CW),
            bR = AW.filter((WW => WW.getBoundingClientRect().top >= zR)),
            yR = bR.length > 0 ? bR : AW,
            NW = lC(yR.map((WW => WW.getBoundingClientRect())));
          WW.setFocus(NW >= 0 ? yR[NW] : null, {
            byUser: !0
          })
        })(WW, MW.root), !0)
      },
      GC = WW => {
        var RW, MW, wW;
        const CW = VR(WW);
        if (null !== CW) return CW;
        const zR = (null !== (RW = null !== (MW = null !== (wW = WW.getAttribute("aria-label")) && void 0 !== wW ? wW : WW.getAttribute("title")) && void 0 !== MW ? MW : WW.textContent) && void 0 !== RW ? RW : "").replace(/\s+/g, " ").trim();
        return zR ? `${WW.tagName}:${zR.slice(0,100)}` : null
      };
    class LC {
      constructor() {
        this.remembered = new Map, this.history = []
      }
      enter(WW) {
        const RW = this.history.indexOf(WW);
        if (RW >= 0) {
          for (const WW of this.history.splice(RW + 1)) this.remembered.delete(WW);
          return !0
        }
        return this.remembered.delete(WW), this.history.push(WW), this.history.length > 32 && this.forget(this.history[0]), !1
      }
      forget(WW) {
        this.remembered.delete(WW);
        const RW = this.history.indexOf(WW);
        RW >= 0 && this.history.splice(RW, 1)
      }
      remember(WW, RW, MW, wW) {
        const CW = GC(RW),
          zR = VR(RW),
          AW = null !== zR && ((WW, RW) => {
            let MW = 0;
            for (const wW of WW.querySelectorAll("[data-pad-key], [href]"))
              if ((wW.getAttribute("data-pad-key") === RW || wW.getAttribute("href") === RW) && (MW++, MW > 1)) return !0;
            return !1
          })(MW, zR) ? Math.max(0, this.twins(wW(), zR).indexOf(RW)) : 0;
        this.remembered.set(WW, {
          element: new WeakRef(RW),
          identity: CW,
          ordinal: AW
        })
      }
      has(WW) {
        return this.remembered.has(WW)
      }
      recall(WW, RW) {
        var MW, wW;
        const CW = this.remembered.get(WW);
        if (!CW) return null;
        const zR = CW.element.deref();
        if (zR && RW.includes(zR)) return zR;
        if (null === CW.identity) return null;
        const AW = this.twins(RW, CW.identity);
        return null !== (MW = null !== (wW = AW[CW.ordinal]) && void 0 !== wW ? wW : AW[0]) && void 0 !== MW ? MW : null
      }
      twins(WW, RW) {
        return WW.filter((WW => GC(WW) === RW))
      }
    }
    var HC = MW(1111);
    const DC = WW => {
        const RW = [];
        let MW = WW;
        for (; MW && MW !== document.body;) {
          const WW = getComputedStyle(MW).zIndex;
          "auto" !== WW && RW.push(Number(WW) || 0), MW = MW.parentElement
        }
        return RW.reverse()
      },
      qz = (WW, RW) => {
        const MW = ((WW, RW) => {
          const MW = Math.max(WW.length, RW.length);
          for (let zR = 0; zR < MW; zR++) {
            var wW, CW;
            const MW = (null !== (wW = WW[zR]) && void 0 !== wW ? wW : 0) - (null !== (CW = RW[zR]) && void 0 !== CW ? CW : 0);
            if (0 !== MW) return MW
          }
          return 0
        })(DC(WW), DC(RW));
        if (0 !== MW) return MW > 0;
        if (WW.contains(RW)) return !1;
        if (RW.contains(WW)) return !0;
        const wW = WW.compareDocumentPosition(RW);
        return !!(wW & Node.DOCUMENT_POSITION_PRECEDING) || !(wW & Node.DOCUMENT_POSITION_FOLLOWING) && null
      },
      ZC = (WW, RW) => {
        var MW;
        return null !== (MW = qz(WW.root, RW.root)) && void 0 !== MW ? MW : WW.order > RW.order
      },
      SC = (WW, RW) => RW.some((RW => !RW.contains(WW) && !WW.contains(RW) && !0 === qz(RW, WW)));
    let Wz = null,
      Rz = null,
      Mz = -1;
    const wz = () => {
        var WW;
        const RW = null === (WW = document.timeline) || void 0 === WW ? void 0 : WW.currentTime,
          MW = "number" === typeof RW ? RW : null;
        if (null !== MW && MW === Rz && Mz === (0, HC.c)()) return Wz;
        let wW = null;
        const CW = [],
          zR = [...document.querySelectorAll("[data-pad-covers]")].filter(NR);
        for (const AW of (0, HC.d)()) {
          const WW = AW.getRoot(),
            RW = !!WW && NR(WW) && !SC(WW, zR);
          if (AW.shown && !RW && CW.push(AW), AW.shown = RW, !WW || !RW) continue;
          const MW = {
            layer: AW,
            root: WW,
            order: AW.order
          };
          wW && !ZC(MW, wW) || (wW = MW)
        }
        Wz = wW, Rz = MW, Mz = (0, HC.c)();
        for (const AW of CW)(0, HC.g)(AW);
        return Wz
      },
      Cz = () => {
        const WW = wz();
        return !(null === WW || void 0 === WW || !WW.layer.close) && (WW.layer.close(), Rz = null, !0)
      },
      zA = () => {
        var WW, RW;
        return null !== (WW = null === (RW = wz()) || void 0 === RW ? void 0 : RW.root) && void 0 !== WW ? WW : null
      },
      Az = WW => WW ? {
        ...WW,
        root: zA()
      } : null;
    let bA = null,
      yA = null,
      Nz = (0, tR.i)().menuNavigation,
      ez = null;
    const Bz = new lW;
    let tA = null;
    NW.k.subscribe(tR.e, (() => {
      const WW = (0, tR.i)().menuNavigation;
      WW !== Nz && (Nz = WW, bA = null, yA = null)
    }));
    const Tz = () => {
        var WW;
        return null !== (WW = bA) && void 0 !== WW ? WW : (0, tR.i)().menuNavigation
      },
      gA = WW => {
        if (Pz()) {
          if (ez = Az(WW), "hybrid" === Tz()) return Bz.lock(), void(yA = yA ? null : zA());
          bA = "focus" === Tz() ? "cursor" : "focus"
        }
      },
      iA = () => {
        const WW = ez;
        return ez = null, WW
      };
    let Yz = {
      root: null,
      firstSeenMs: -1 / 0,
      atMs: -1 / 0,
      has: !1
    };
    const Jz = function(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const MW = Yz.root === WW,
          wW = MW ? Yz.firstSeenMs : RW,
          CW = Yz.has || RW - wW > 1e3;
        return (!MW || !CW || RW - Yz.atMs > 250) && (Yz = {
          root: WW,
          firstSeenMs: wW,
          atMs: RW,
          has: iM(WW)
        }), Yz.has
      },
      Pz = () => {
        const WW = zA();
        return null !== WW && Jz(WW)
      },
      Iz = () => {
        const WW = wz();
        return yA && (null === WW || void 0 === WW ? void 0 : WW.root) !== yA && (yA = null), (WW => {
          let {
            mode: RW,
            hasLayer: MW,
            hasCandidates: wW,
            hybridCursorEngaged: CW
          } = WW;
          return MW ? "cursor" !== RW && wW() ? "hybrid" === RW && CW ? "cursor" : "focus" : "cursor" : null
        })({
          mode: Tz(),
          hasLayer: null !== WW,
          hasCandidates: () => null !== WW && Jz(WW.root),
          hybridCursorEngaged: null !== yA
        })
      },
      oz = () => "hybrid" === Tz() && Pz(),
      lz = "pad-focused";
    var Fz = MW(3994);
    const fz = "[data-pad-destructive]",
      Qz = `${fz}, [data-pad-back]`,
      rA = WW => ({
        rect: WW.getBoundingClientRect(),
        destructive: WW.matches(fz),
        closes: null !== WW.closest("[data-pad-close-button]"),
        unavailable: WW.matches("[data-pad-unavailable]")
      }),
      cA = WW => {
        let {
          destructive: RW,
          closes: MW,
          unavailable: wW
        } = WW;
        return RW ? MW ? 2 : 3 : wW ? 1 : 0
      },
      Xz = WW => {
        let RW = -1;
        for (let MW = 0; MW < WW.length; MW++) {
          if (RW < 0) {
            RW = MW;
            continue
          }
          const wW = WW[MW],
            CW = WW[RW];
          cA(wW) === cA(CW) ? oC(wW.rect, CW.rect) < 0 && (RW = MW) : cA(wW) < cA(CW) && (RW = MW)
        }
        return RW
      },
      jA = "[data-pad-tabs]",
      kA = "[data-pad-tab]",
      aA = (WW, RW) => {
        const MW = WW.querySelector(`${kA}[data-pad-selected='true']`);
        return MW && RW.includes(MW) ? MW : null
      },
      sz = (WW, RW) => {
        let MW = RW;
        for (let wW = RW.parentElement; wW && !wW.contains(WW); wW = wW.parentElement) MW = wW;
        return MW
      };
    class dz {
      constructor() {
        this.contentReturn = null
      }
      redirect(WW, RW, MW, wW) {
        var CW, zR;
        const AW = WW.closest(jA),
          bR = RW.closest(jA);
        var yR;
        if (bR && bR !== AW) return AW || (this.contentReturn = new WeakRef(WW)), null !== (yR = aA(bR, MW)) && void 0 !== yR ? yR : RW;
        if (!AW || bR) return RW;
        const NW = sz(WW, RW),
          eW = null === (CW = this.contentReturn) || void 0 === CW ? void 0 : CW.deref();
        return eW && NW.contains(eW) && MW.includes(eW) ? eW : null !== (zR = this.pickRegionStart(NW, XW(RW, "y", wW), MW)) && void 0 !== zR ? zR : RW
      }
      findTabContent(WW, RW, MW) {
        const wW = WW.closest(jA);
        if (!wW || !WW.matches(kA) || wW.contains(RW)) return null;
        const CW = RW.closest(jA);
        if (CW && Number(CW.dataset.padTabs) <= Number(wW.dataset.padTabs)) return null;
        const zR = sz(WW, RW);
        return MW.some((WW => zR.contains(WW) && !WW.closest(Qz))) || !RW.closest(Qz) ? zR : null
      }
      pickContentStart(WW, RW, MW) {
        return this.contentReturn = null, this.pickRegionStart(WW, XW(WW, "y", MW), RW)
      }
      pickReplacedContentStart(WW, RW, MW, wW) {
        if (!RW.contains(WW)) return null;
        const CW = sz(RW, WW),
          zR = MW.filter((WW => RW.contains(WW) && !CW.contains(WW) && !WW.closest(Qz)));
        return 0 === zR.length ? null : (this.contentReturn = null, this.pickRegionStart(RW, XW(zR[0], "y", wW), zR))
      }
      backToStrip(WW, RW, MW) {
        if (WW.closest(jA)) return null;
        const wW = jz(MW);
        for (const CW of MW.querySelectorAll(jA)) {
          if (Number(CW.dataset.padTabs) <= 1 || CW === wW) continue;
          const zR = aA(CW, RW),
            AW = zR ? sz(WW, CW).parentElement : null;
          if (zR && AW && AW !== MW && MW.contains(AW)) return this.contentReturn = new WeakRef(WW), zR
        }
        return null
      }
      pickRegionStart(WW, RW, MW) {
        const wW = pW(RW),
          CW = WW => {
            const RW = MW.filter((RW => WW.contains(RW) && !RW.closest(jA) && hW(RW.getBoundingClientRect(), wW))),
              CW = Xz(RW.map(rA));
            return CW >= 0 ? RW[CW] : null
          };
        for (const zR of PR(WW)) {
          const WW = CW(zR);
          if (WW) return WW
        }
        for (const zR of WW.querySelectorAll(jA)) {
          const WW = aA(zR, MW);
          if (WW) return WW
        }
        return CW(WW)
      }
    }
    const pz = 1e3,
      hz = "[data-pad-default-focus], .Dropdown-option.is-selected",
      Uz = ".Dropdown-root.is-open > .Dropdown-menu",
      Ez = "[data-pad-no-step-in]",
      Vz = "[data-pad-tabs]",
      mA = "[data-pad-press-area]",
      xA = WW => {
        let RW = WW;
        for (let MW = 0; RW && MW <= 4; MW++, RW = RW.parentElement) {
          const MW = RW.querySelector(".CircleInfo");
          if (MW) return RW === WW || RW.querySelectorAll(bM).length <= 1 ? MW : null;
          if (RW !== WW && RW.querySelectorAll(bM).length > 1) return null
        }
        return null
      },
      vA = (WW, RW, MW) => {
        cM(WW, RW, MW);
        const wW = null !== WW && void 0 !== WW && WW.isConnected ? xA(WW) : null,
          CW = xA(RW);
        wW !== CW && cM(wW, CW, CW ? oR(CW) : MW, {
          leaveBelow: WW,
          enterBelow: RW
        })
      },
      Kz = WW => WW.getBoundingClientRect(),
      uz = (WW, RW, MW) => {
        const wW = new Set(MW);
        for (let CW = WW; CW; CW = CW === RW ? null : CW.parentElement)
          if (wW.has(CW)) return CW;
        return null
      },
      Oz = (WW, RW) => !WW.root || WW.root === RW || RW.matches(Uz) && WW.root.contains(RW);
    const nz = new class {
        constructor() {
          this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new LC, this.tabStripNav = new dz, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepeatKey = null, this.confirmRepeated = !1, this.confirmRepeat = (0, iR.d)(gR.s), this.dpadRepeats = new Map(gR.z.map((WW => [WW, (0, iR.d)(gR.D)]))), this.stickRepeat = new gR.c((0, iR.d)(gR.Z)), this.lastRefocusCheckMs = -1 / 0, this.enteredLayerAtMs = 0, this.lastFocusedCentre = null, this.lastActivatedKey = null, this.lastActivated = null, this.lastActivatedAtMs = -1 / 0, this.pendingFocus = null, this.tabOpenWait = null, this.retryMove = null, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.wasActive = !1, this.layerKind = null, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.listeners = new Set, this.dropdownLayers = new WeakMap, this.dropdownLayerCounter = 0
        }
        install() {
          const WW = BW.c.register({
              name: "focus",
              isActive: () => (0, TW.i)() && "focus" === Iz(),
              onFrame: WW => {
                this.onFrame(WW)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: WW => (0, BW.e)(WW) || WW === (0, eW.g)("menuConfirm") && hR((0, TW.b)())
            }),
            RW = (0, HC.i)((WW => {
              const RW = (0, HC.q)(WW);
              null === WW.memoryKey && this.memory.forget(RW), RW === this.layerKey && (this.layerKey = null)
            }));
          let MW = -1 / 0;
          const wW = AW.g.onFrame((WW => {
              (0, TW.i)() || WW.timestampMs - MW < 100 || (MW = WW.timestampMs, wz())
            })),
            CW = WW => {
              WW.isTrusted && WW.target instanceof Element && AW.g.getActivePad() && this.noteChosenStop(WW.target)
            };
          return document.addEventListener("click", CW, !0), () => {
            WW(), RW(), wW(), document.removeEventListener("click", CW, !0), this.deactivate()
          }
        }
        noteChosenStop(WW) {
          var RW, MW;
          const wW = wz();
          if (!wW || !wW.root.contains(WW)) return;
          const CW = null !== (RW = null === (MW = WW.closest(".Dropdown-root")) || void 0 === MW ? void 0 : MW.querySelector(".Dropdown-control")) && void 0 !== RW ? RW : WW,
            zR = uz(CW, wW.root, this.getEnabledCandidates(wW.root));
          if (!zR) return;
          const AW = (0, HC.q)(wW.layer);
          AW === this.layerKey && wW.root === this.layerRoot || this.beginLayer(wW, AW), this.wasActive ? this.setFocus(zR, {
            scroll: !1,
            byUser: !0
          }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = zR, this.lastFocusedCentre = oR(zR), this.rememberFocus(zR), this.notify())
        }
        getFocused() {
          return this.focused
        }
        isActive() {
          return this.wasActive
        }
        onChange(WW) {
          return this.listeners.add(WW), () => {
            this.listeners.delete(WW)
          }
        }
        notify() {
          for (const WW of this.listeners) WW()
        }
        deactivate() {
          var WW;
          if (this.wasActive) {
            this.wasActive = !1, this.layerKind = null, this.confirmPressedOn = null, this.retryMove = null, this.pendingFocus = null;
            for (const WW of this.dpadRepeats.values()) WW.reset();
            this.stickRepeat.reset(), null !== (WW = this.focused) && void 0 !== WW && WW.isConnected && vA(this.focused, null, oR(this.focused)), this.notify()
          }
        }
        setFocus(WW) {
          var RW;
          let {
            scroll: MW = !0,
            byUser: wW = !1
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (wW && (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1), WW === this.focused) return;
          const CW = null !== (RW = this.focused) && void 0 !== RW && RW.isConnected ? this.focused : null;
          if (this.focused = WW, WW) {
            MW && (WW.classList.add(lz), WW.scrollIntoView({
              block: "nearest",
              inline: "nearest",
              behavior: "instant"
            })), wW && ((WW, RW) => {
              const MW = RW.closest("[data-pad-friends-column]");
              MW && WW && !MW.contains(WW) && (hC = new WeakRef(WW))
            })(CW, WW);
            const RW = oR(WW);
            this.lastFocusedCentre = RW, this.movedInLayer && this.rememberFocus(WW), vA(CW, WW, RW), "false" === WW.getAttribute("aria-pressed") && WW.closest("[data-pad-select-on-focus]") && jM(WW)
          } else CW && vA(CW, null, oR(CW));
          this.notify()
        }
        rememberFocus(WW) {
          const RW = this.layerRoot;
          this.layerKey && RW && this.memory.remember(this.layerKey, WW, RW, (() => this.getEnabledCandidates(RW)))
        }
        noteCursorActivation(WW) {
          const RW = wz();
          if (!RW || !RW.root.contains(WW)) return;
          const MW = this.getEnabledCandidates(RW.root),
            wW = new Set(MW);
          let CW = WW;
          for (; CW && !wW.has(CW);) CW = CW === RW.root ? null : CW.parentElement;
          if (!(CW instanceof HTMLElement)) return;
          const zR = (0, HC.q)(RW.layer);
          this.memory.enter(zR), this.memory.remember(zR, CW, RW.root, (() => MW))
        }
        notePageEnteredByCursor(WW) {
          return this.memory.enter(WW)
        }
        recallStop(WW, RW) {
          return this.findRemembered(WW, RW)
        }
        focusWhenFound(WW) {
          let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
            MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          this.pendingFocus = {
            find: WW,
            untilMs: performance.now() + RW,
            holdWhile: MW
          }
        }
        getEnabledCandidates(WW) {
          return TR(WW).filter((WW => !eR(WW)))
        }
        onFrame(WW) {
          var RW;
          const MW = wz();
          if (!MW) return;
          const wW = null !== (RW = this.findOpenDropdown(MW)) && void 0 !== RW ? RW : MW,
            CW = performance.now(),
            zR = (0, HC.q)(wW.layer);
          if (zR !== this.layerKey || wW.root !== this.layerRoot) {
            const RW = this.focused;
            if (null !== this.layerKey && wW.root === this.layerRoot && RW && JR(RW, wW.root)) this.continueLayer(zR, RW), this.wasActive || this.resume(wW.root, CW);
            else {
              const RW = !this.wasActive && !WW.wokeDevice,
                AW = "death" === this.layerKind || RW,
                bR = this.enterLayer(wW, zR);
              "popup" !== wW.layer.kind || wW !== MW || bR ? "menu" === wW.layer.kind && AW && "inGame" === yR.b.get("gameState") && !(0, RC.d)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = CW + pz) : (this.pressGuardExtends = RW, this.pressGuardUntilMs = CW + (RW ? pz : AW ? 500 : 250))
            }
          } else this.wasActive || this.resume(wW.root, CW);
          if (this.layerKind = wW.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), WW.wokeDevice && this.focusPointedStop(wW.root), this.validateFocus(wW, CW), CW < this.pressGuardUntilMs && this.pressGuardExtends && (WW.wasPressed((0, eW.g)("menuConfirm")) || WW.wasPressed((0, eW.g)("menuBack"))) && (this.pressGuardUntilMs = CW + pz), CW >= this.pressGuardUntilMs && this.handleButtons(WW, wW)) return;
          const AW = "hybrid" === Tz();
          if (AW && (WW => {
              const RW = zA();
              return RW !== tA && (tA = RW, Bz.lock()), Bz.update(WW, (0, tR.i)().moveDeadzone)
            })(WW.leftStick)) return bR = this.getHandoff(), ez = Az(bR), yA = zA(), void BW.c.handOffHeldInput();
          var bR;
          this.handleDirections(WW, wW, CW, !AW), this.handleScroll(WW, wW)
        }
        findOpenDropdown(WW) {
          const RW = WW.root.querySelector(Uz);
          if (!RW || !NR(RW)) return null;
          let MW = this.dropdownLayers.get(RW);
          return MW || (this.dropdownLayerCounter++, MW = {
            id: `dropdown-${this.dropdownLayerCounter}`,
            kind: WW.layer.kind,
            getRoot: () => RW,
            close: () => {
              sR(RW)
            },
            memoryKey: null
          }, this.dropdownLayers.set(RW, MW)), {
            layer: MW,
            root: RW,
            order: WW.order
          }
        }
        focusPointedStop(WW) {
          const RW = (0, TW.b)(),
            MW = RW ? document.elementFromPoint(RW.x, RW.y) : null;
          if (!MW || !WW.contains(MW)) return;
          const wW = uz(MW, WW, this.getEnabledCandidates(WW));
          wW && this.setFocus(wW, {
            scroll: !1,
            byUser: !0
          })
        }
        enterLayer(WW, RW) {
          const MW = this.beginLayer(WW, RW),
            wW = iA();
          return wW && Oz(wW, WW.root) ? (this.takeOver(WW.root, wW, this.enteredLayerAtMs), MW) : (this.restoreLayerFocus(WW.root, MW), MW)
        }
        beginLayer(WW, RW) {
          return this.layerKey = RW, this.layerRoot = WW.root, this.lastActivatedKey = null, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoreOnFocusLoss = !1, this.retryMove = null, this.pendingFocus = null, this.confirmPressedOn = null, this.lastRefocusCheckMs = -1 / 0, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.enteredLayerAtMs = performance.now(), this.lastFocusedCentre = null, this.memory.enter(RW)
        }
        restoreLayerFocus(WW, RW) {
          const MW = RW && this.layerKey ? this.findRemembered(WW, this.layerKey) : null;
          this.restoredFromMemory = null !== MW, this.setFocus(null !== MW && void 0 !== MW ? MW : this.pickInitial(WW, {
            waitForContent: !0
          }))
        }
        continueLayer(WW, RW) {
          this.layerKey = WW;
          const MW = this.memory.enter(WW);
          this.restoreOnFocusLoss = MW, this.movedInLayer && !MW && this.rememberFocus(RW)
        }
        resume(WW, RW) {
          var MW;
          const wW = iA();
          wW && Oz(wW, WW) ? this.takeOver(WW, wW, RW) : null !== (MW = this.focused) && void 0 !== MW && MW.isConnected && vA(null, this.focused, oR(this.focused))
        }
        pickPreferred(WW) {
          var RW;
          return null !== (RW = this.layerKey ? this.findRemembered(WW, this.layerKey) : null) && void 0 !== RW ? RW : this.pickInitial(WW, {
            waitForContent: !0
          })
        }
        findRemembered(WW, RW) {
          return this.memory.has(RW) ? this.memory.recall(RW, this.getEnabledCandidates(WW)) : null
        }
        getHandoff() {
          var WW, RW, MW;
          const wW = null !== (WW = this.focused) && void 0 !== WW && WW.isConnected ? this.focused : null,
            CW = null !== (RW = this.layerRoot) && void 0 !== RW && RW.isConnected ? this.layerRoot : null;
          return {
            point: wW ? oR(wW) : null !== (MW = this.lastFocusedCentre) && void 0 !== MW ? MW : this.getLayerStartPoint(CW),
            element: wW,
            direction: null
          }
        }
        getLayerStartPoint(WW) {
          if (!WW) return {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          };
          const RW = this.pickInitial(WW, {
            includeDisabled: !0
          });
          return oR(null !== RW && void 0 !== RW ? RW : WW)
        }
        takeOver(WW, RW, MW) {
          const {
            element: wW,
            direction: CW,
            point: zR
          } = RW, AW = wW instanceof HTMLElement && JR(wW, WW) ? wW : null;
          if (!CW) {
            const RW = this.focused;
            return AW ? this.setFocus(AW, {
              scroll: !1,
              byUser: !0
            }) : this.focusNearest(WW, zR), void(this.focused && this.focused === RW && this.focused.isConnected && vA(null, this.focused, oR(this.focused)))
          }
          if (this.dpadRepeats.get(CW).update(!0, MW), AW) return this.setFocus(AW, {
            scroll: !1,
            byUser: !0
          }), void this.move(WW, CW, MW, !0);
          const bR = this.getEnabledCandidates(WW),
            yR = bR.map(Kz),
            NW = gz(new DOMRect(zR.x, zR.y, 0, 0), yR, CW),
            eW = NW >= 0 ? NW : IC(zR, yR);
          this.setFocus(eW >= 0 ? bR[eW] : this.pickInitial(WW), {
            byUser: !0
          })
        }
        focusNearest(WW, RW) {
          const MW = this.getEnabledCandidates(WW),
            wW = IC(RW, MW.map(Kz));
          this.setFocus(wW >= 0 ? MW[wW] : this.pickInitial(WW), {
            byUser: !0
          })
        }
        pickDefault(WW) {
          let {
            includeDisabled: RW = !1,
            exclude: MW = null
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const wW = [...WW.querySelectorAll(hz)].filter((wW => (null === MW || void 0 === MW || !MW.has(wW)) && (RW ? YR(wW, WW) : JR(wW, WW)))),
            CW = Xz(wW.map(rA));
          return CW >= 0 ? wW[CW] : null
        }
        pickNewAreaStart(WW, RW) {
          const MW = [...WW.querySelectorAll(mA)].filter(NR);
          for (const wW of [...PR(WW), ...MW]) {
            if (RW.has(wW)) continue;
            const WW = this.getEnabledCandidates(wW),
              MW = Xz(WW.map(rA));
            if (MW >= 0) return WW[MW]
          }
          return null
        }
        pickInitial(WW) {
          let {
            includeDisabled: RW = !1,
            waitForContent: MW = !1,
            enteredAtMs: wW = this.enteredLayerAtMs
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const CW = this.pickDefault(WW, {
            includeDisabled: RW
          });
          if (CW) return CW;
          const zR = WW => RW ? TR(WW) : this.getEnabledCandidates(WW);
          let AW = [];
          for (const tR of PR(WW))
            if (AW = zR(tR), AW.length > 0) break;
          if (0 === AW.length) {
            if (MW && performance.now() - wW < 1e4 && (WW => {
                for (const RW of WW.querySelectorAll("[data-pad-initial-area]"))
                  if (!yM(RW, !1)) return !0;
                return !1
              })(WW)) return null;
            AW = zR(WW)
          }
          const bR = AW.map(Kz),
            yR = pW(null),
            NW = AW.filter(((WW, RW) => hW(bR[RW], yR))),
            eW = NW.length > 0 ? NW : AW,
            BW = Xz(eW.map(rA));
          return BW >= 0 ? eW[BW] : null
        }
        validateFocus(WW, RW) {
          if (this.pendingFocus) {
            var MW, wW;
            const CW = this.pendingFocus.find();
            if (CW && JR(CW, WW.root)) return this.pendingFocus = null, void this.setFocus(CW, {
              byUser: !0
            });
            RW > this.pendingFocus.untilMs && (null === (MW = (wW = this.pendingFocus).holdWhile) || void 0 === MW || !MW.call(wW)) && (this.pendingFocus = null)
          }
          const CW = this.focused,
            zR = !!CW && JR(CW, WW.root);
          if (!(!zR && CW && CW === this.lastActivated && RW - this.lastActivatedAtMs < 5e3 && WW.root.contains(CW) && NR(CW) && eR(CW))) {
            if (!zR && this.restoreOnFocusLoss && this.layerKey) return this.restoreOnFocusLoss = !1, this.movedInLayer = !1, this.scrolledInLayer = !1, this.enteredLayerAtMs = RW, void this.restoreLayerFocus(WW.root, !0);
            if ((!zR || !this.movedInLayer && !this.scrolledInLayer) && !(RW - this.lastRefocusCheckMs < (zR ? 200 : 50)))
              if (this.lastRefocusCheckMs = RW, zR) {
                const MW = RW - this.enteredLayerAtMs < 15e3 ? this.pickPreferred(WW.root) : null,
                  wW = null !== MW && void 0 !== MW ? MW : this.restoredFromMemory ? null : this.pickDefault(WW.root);
                wW && wW !== CW && this.setFocus(wW)
              } else {
                if (this.lastFocusedCentre && this.movedInLayer) {
                  const RW = this.pendingFocus;
                  return this.focusNearest(WW.root, this.lastFocusedCentre), void(this.pendingFocus = RW)
                }
                this.setFocus(this.pickPreferred(WW.root))
              }
          }
        }
        handleButtons(WW, RW) {
          if (WW.wasPressed((0, eW.g)("menuToggleCursor"))) return gA(this.getHandoff()), !0;
          if (WW.wasPressed((0, eW.g)("menuBack"))) {
            const WW = sR(RW.root);
            return WW ? this.setFocus(WW, {
              byUser: !0
            }) : UC(this, RW.root) || (ER(RW.root) ? this.returnToOpener(RW.root) : this.backToStrip(RW.root) || Cz()), !0
          }
          const MW = (0, eW.g)("menuConfirm");
          var wW, CW;
          WW.wasPressed(MW) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (wW = null === (CW = this.focused) || void 0 === CW ? void 0 : CW.getAttribute("data-pad-repeat")) && void 0 !== wW ? wW : null, this.confirmRepeated = WW.wokeDevice, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now()));
          if (WW.wasReleased(MW)) {
            const WW = this.confirmPressedOn;
            if (this.confirmPressedOn = null, WW && !this.confirmRepeated && WW === this.focused && WW.isConnected && !eR(WW)) {
              const MW = WW.matches("[data-pad-tab]") ? WW.closest(Vz) : null;
              MW ? this.enterTab(WW, MW, RW.root, performance.now()) : this.activate(WW)
            }
            return !0
          }
          return this.repeatConfirm(WW, MW), nC(this, WW, RW)
        }
        repeatConfirm(WW, RW) {
          const MW = this.confirmPressedOn;
          MW && null !== this.confirmRepeatKey && WW.isHeld(RW) && (MW === this.focused && MW.isConnected && !eR(MW) && MW.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? MW.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.confirmRepeated = !0, this.activate(MW)) : this.confirmRepeatKey = null)
        }
        backToStrip(WW) {
          const RW = this.focused;
          if (!(0, tR.i)().menuBackToCategories) return !1;
          const MW = null !== RW && void 0 !== RW && RW.isConnected ? this.tabStripNav.backToStrip(RW, this.getEnabledCandidates(WW), WW) : null;
          return MW && this.setFocus(MW, {
            byUser: !0
          }), null !== MW
        }
        returnToOpener(WW) {
          const RW = this.lastActivatedKey;
          RW && (this.lastActivatedKey = null, this.focusWhenFound((() => {
            var MW;
            return null !== (MW = this.getEnabledCandidates(WW).find((WW => VR(WW) === RW))) && void 0 !== MW ? MW : null
          })))
        }
        activate(WW) {
          var RW;
          if ((0, Fz.e)(WW) || pR(WW)) return;
          this.lastActivatedKey = null !== (RW = VR(WW)) && void 0 !== RW ? RW : this.lastActivatedKey, this.lastActivated = WW, this.lastActivatedAtMs = performance.now(), this.rememberFocus(WW);
          const MW = this.layerRoot;
          if (MW) {
            const RW = new Set(MW.querySelectorAll(hz)),
              wW = new Set(MW.querySelectorAll(`[data-pad-initial-area], ${mA}`)),
              CW = this.lastActivatedAtMs;
            this.focusWhenFound((() => {
              var CW;
              return JR(WW, MW) ? null : null !== (CW = this.pickDefault(MW, {
                exclude: RW
              })) && void 0 !== CW ? CW : this.pickNewAreaStart(MW, wW)
            }), 5e3, (() => WW.isConnected && eR(WW) && performance.now() - CW < 6e4))
          }
          jM(WW), dR(WW)
        }
        handleDirections(WW, RW, MW, wW) {
          const CW = QC(RW.layer.kind) ? (0, eW.g)("chat") : null;
          for (const bR of gR.z) {
            this.dpadRepeats.get(bR).update(WW.isHeld(bR), MW) && (bR !== CW || WW.wasPressed(bR)) && this.move(RW.root, bR, MW, !0)
          }
          const zR = wW ? (0, gR.g)(WW.leftStick, (0, tR.i)().moveDeadzone) : {
              x: 0,
              y: 0
            },
            AW = this.stickRepeat.update((0, gR.ab)(zR), MW);
          if (AW && this.move(RW.root, AW, MW, !0), this.retryMove && MW >= this.retryMove.atMs) {
            const {
              direction: WW
            } = this.retryMove;
            this.retryMove = null, this.move(RW.root, WW, MW, !1)
          }
        }
        move(WW, RW, MW, wW) {
          var CW;
          let zR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (this.pendingFocus && this.pendingFocus === (null === (CW = this.tabOpenWait) || void 0 === CW ? void 0 : CW.wait) && RW === this.tabOpenWait.direction) return;
          this.pendingFocus = null;
          const AW = this.focused;
          if (!AW || !AW.isConnected) {
            const RW = this.pickInitial(WW);
            return void(RW && this.setFocus(RW, {
              byUser: !0
            }))
          }
          const bR = "Left" === RW || "Right" === RW,
            yR = bR ? (0, Fz.e)(AW) : null;
          if (yR) return void yR.adjust("Left" === RW ? -1 : 1);
          const NW = WW => null !== WW.closest("[data-pad-friends-column]"),
            eW = NW(AW),
            BW = Kz(AW),
            tR = bR || AW.closest(Vz) ? null : (WW => {
              const RW = new Map;
              return MW => {
                const wW = MW.closest(Vz);
                if (!wW) return !1;
                let CW = RW.get(wW);
                if (void 0 === CW) {
                  const MW = Kz(wW);
                  CW = TC(WW, MW) && (MW.right <= WW.left || MW.left >= WW.right), RW.set(wW, CW)
                }
                return CW
              }
            })(BW),
            TW = null !== AW.closest(Ez),
            gR = this.getEnabledCandidates(WW).filter((WW => WW !== AW && (bR || NW(WW) === eW) && !(null !== tR && void 0 !== tR && tR(WW)) && (TW || !WW.closest(Ez)))),
            iR = gR.map(Kz),
            YW = XW(AW, "y", WW),
            JW = pW(YW);
          if (!zR && !hW(BW, JW)) {
            const WW = gR.filter(((WW, RW) => hW(iR[RW], JW)));
            if (WW.length > 0) {
              const RW = {
                x: JW.left + JW.width / 2,
                y: JW.top + JW.height / 2
              };
              return void this.setFocus(WW[IC(RW, WW.map(Kz))], {
                byUser: !0
              })
            }
          }
          const PW = bR ? ((WW, RW, MW) => {
              const wW = Kz(WW),
                CW = WW.closest(Vz),
                zR = CW ? Kz(CW) : null;
              return RW.map(((RW, AW) => {
                const bR = MW[AW];
                if (bR.bottom > wW.top && bR.top < wW.bottom) return !0;
                const yR = RW.closest(Vz);
                if (CW && zR) return yR !== CW && (null !== yR || bR.bottom <= zR.top || bR.top >= zR.bottom);
                if (yR) return !TC(wW, Kz(yR));
                let NW = WW;
                for (let MW = WW.parentElement; MW && !MW.contains(RW); MW = MW.parentElement) NW = MW;
                const eW = Kz(NW);
                return bR.right > eW.left && bR.left < eW.right
              }))
            })(AW, gR, iR) : void 0,
            IW = bR && !AW.closest(Vz) ? (WW => WW.map((WW => !WW.closest(Qz))))(gR) : void 0,
            oW = ((WW, RW) => {
              const MW = [];
              for (let CW = WW; CW; CW = CW.parentElement) MW.push(CW);
              const wW = new Map;
              return MW.forEach(((WW, RW) => {
                wW.set(WW, MW.length - 1 - RW)
              })), RW.map((WW => {
                for (let RW = WW; RW; RW = RW.parentElement) {
                  const WW = wW.get(RW);
                  if (void 0 !== WW) return WW
                }
                return -1
              }))
            })(AW, gR),
            lW = bR ? "x" : "y",
            FW = XW(AW, lW, WW);
          let fW = gz(BW, iR, RW, oW, PW, IW);
          if (fW >= 0 && FW && !FW.contains(gR[fW])) {
            const WW = gR.flatMap(((WW, RW) => FW.contains(WW) ? [RW] : [])),
              MW = RW => RW && WW.map((WW => RW[WW])),
              wW = gz(BW, WW.map((WW => iR[WW])), RW, WW.map((WW => oW[WW])), MW(PW), MW(IW));
            fW = wW >= 0 ? WW[wW] : fW
          }
          if (fW >= 0) return void this.moveTo(AW, gR[fW], gR, WW, RW, zR);
          if (!wW) return;
          const QW = "Right" === RW || "Down" === RW ? 1 : -1;
          if (FW && sW(FW, lW, QW)) {
            const WW = "y" === lW ? FW.clientHeight : FW.clientWidth;
            dW(FW, lW, QW * WW * .5), this.retryMove = {
              direction: RW,
              atMs: MW + 80
            }
          }
        }
        moveTo(WW, RW, MW, wW, CW, zR) {
          const AW = this.tabStripNav.findTabContent(WW, RW, MW);
          AW && "true" !== WW.dataset.padSelected ? this.openTab(WW, AW, wW, CW) : zR && !AW || this.setFocus(this.tabStripNav.redirect(WW, RW, MW, wW), {
            byUser: !0
          })
        }
        openTab(WW, RW, MW, wW) {
          const CW = RW.parentElement;
          jM(WW), this.focusWhenFound((() => "true" !== WW.dataset.padSelected ? null : RW.isConnected ? this.tabStripNav.pickContentStart(RW, this.getEnabledCandidates(MW), MW) : CW ? this.tabStripNav.pickReplacedContentStart(WW, CW, this.getEnabledCandidates(MW), MW) : null), 3e3), this.tabOpenWait = {
            wait: this.pendingFocus,
            direction: wW
          }
        }
        enterTab(WW, RW, MW, wW) {
          this.move(MW, (WW => {
            const RW = [...WW.querySelectorAll(kA)].filter((RW => RW.closest(jA) === WW));
            if (RW.length >= 2) {
              const WW = RW[0].getBoundingClientRect(),
                MW = RW[1].getBoundingClientRect();
              return Math.abs(MW.top - WW.top) > Math.abs(MW.left - WW.left) ? "Right" : "Down"
            }
            const MW = WW.getBoundingClientRect();
            return MW.height > MW.width ? "Right" : "Down"
          })(RW), wW, !1, !0), this.focused !== WW || this.pendingFocus || this.activate(WW)
        }
        handleScroll(WW, RW) {
          const MW = (0, gR.g)(WW.rightStick, .2);
          if (0 === MW.x && 0 === MW.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          const wW = WW.dtMs / 1e3;
          for (const zR of ["x", "y"]) {
            var CW;
            const WW = MW[zR];
            if (0 === WW) continue;
            const AW = null !== (CW = XW(this.focused, zR, RW.root)) && void 0 !== CW ? CW : kR(RW.root, zR);
            if (!AW) continue;
            const bR = Math.sign(WW) * WW * WW * 1500 * wW + this.scrollRemainder[zR],
              yR = Math.trunc(bR);
            this.scrollRemainder[zR] = bR - yR, 0 !== yR && (dW(AW, zR, yR), this.scrolledInLayer = !0)
          }
        }
      },
      Gz = ["controller:keyboardPhraseGg", "controller:keyboardPhraseHi", "controller:keyboardPhraseThanks", "controller:keyboardPhraseGl", "controller:keyboardPhraseBrb", "controller:keyboardPhraseYes", "controller:keyboardPhraseNo", "controller:keyboardPhraseHelp"];
    const Lz = new class {
        constructor() {
          this.lastSendMs = -1 / 0
        }
        claim(WW) {
          return !(WW - this.lastSendMs < 2e3) && (this.lastSendMs = WW, !0)
        }
      },
      Hz = {
        visible: !1,
        target: null,
        kind: null,
        page: "letters",
        accentsFirst: !1,
        shift: "off",
        focus: {
          row: 0,
          col: 0
        },
        preferredX: 0,
        placement: "bottom",
        maxHeightPx: 0
      },
      Dz = ["Tv", "nameTag"],
      qA = WW => {
        const RW = WW.target instanceof HTMLTextAreaElement && !Dz.includes(WW.kind);
        return uw(WW.page, "chat" === WW.kind ? Gz.length : 0, RW)
      },
      Zz = WW => {
        const RW = WW.getBoundingClientRect(),
          MW = window.innerHeight,
          wW = RW.top + RW.height / 2 < MW / 2 ? "bottom" : "top",
          CW = "bottom" === wW ? MW - RW.bottom - 6 : RW.top - 6;
        return {
          placement: wW,
          maxHeightPx: Math.min(.46 * MW, Math.max(.3 * MW, CW))
        }
      },
      Sz = WW => {
        (0, Sw.i)(WW) ? (0, Sw.e)().close(): (nz.noteChosenStop(WW), WW.blur())
      };
    class WA {
      constructor(WW) {
        this.host = WW, this.lastShiftPressMs = -1 / 0, this.phraseTexts = [], this.phrasesFill = !1
      }
      setPhraseRow(WW, RW) {
        this.phraseTexts = WW, this.phrasesFill = RW
      }
      pressKey(WW) {
        const RW = this.host.getState(),
          MW = qA(RW),
          wW = MW[WW.row][WW.col];
        this.host.setState({
          ...RW,
          focus: WW,
          preferredX: Gw(MW, WW)
        }), "char" === wW.type ? this.typeChar(wW.char) : "command" === wW.type ? this.runCommand(wW.command) : this.sendPhrase(wW.phraseIndex)
      }
      runCommand(WW) {
        const RW = this.host.getState();
        switch (WW) {
          case "backspace":
            zM(RW.target);
            break;
          case "space":
            CR(RW.target, " ");
            break;
          case "newline":
            CR(RW.target, "\n");
            break;
          case "caretLeft":
            AR(RW.target, -1);
            break;
          case "caretRight":
            AR(RW.target, 1);
            break;
          case "shift": {
            const WW = performance.now();
            this.host.setState({
              ...RW,
              shift: Dw(RW.shift, WW, this.lastShiftPressMs)
            }), this.lastShiftPressMs = WW;
            break
          }
          case "page":
          case "otherPage": {
            const MW = Kw(RW.page, RW.accentsFirst)[WW];
            this.host.setState({
              ...RW,
              page: MW,
              focus: Hw(qA({
                ...RW,
                page: MW
              }), RW.focus)
            });
            break
          }
          case "submit":
            this.submit();
            break;
          case "close":
            this.close();
            break;
          case "channel":
            (0, Sw.i)(RW.target) && (0, Sw.e)().selectNextChannel()
        }
      }
      submit() {
        var WW, RW;
        const {
          target: MW
        } = this.host.getState();
        this.host.hide(), (0, Sw.i)(MW) ? (0, Sw.e)().submit() : (nz.noteChosenStop(MW), null === (WW = (RW = (0, Sw.f)(MW)).submit) || void 0 === WW || WW.call(RW), document.activeElement === MW && MW.blur())
      }
      close() {
        const {
          target: WW
        } = this.host.getState();
        this.host.hide(), Sz(WW)
      }
      typeChar(WW) {
        const {
          target: RW,
          page: MW,
          shift: wW
        } = this.host.getState();
        CR(RW, Zw(WW, MW, wW)), this.host.setState({
          ...this.host.getState(),
          shift: qC(wW, WW)
        })
      }
      sendPhrase(WW) {
        if (this.phrasesFill) {
          const {
            target: RW
          } = this.host.getState(), MW = this.phraseTexts[WW];
          MW && (RW.setSelectionRange(0, RW.value.length), CR(RW, MW))
        } else Lz.claim(performance.now()) && (this.host.hide(), (0, Sw.e)().sendLine(this.phraseTexts[WW]))
      }
    }
    const RA = {
        initialDelayMs: 380,
        intervalMs: 85
      },
      MA = {
        initialDelayMs: 400,
        intervalMs: 55
      };
    class wA {
      constructor(WW, RW) {
        this.host = WW, this.editor = RW, this.lastDirection = null, this.navRepeat = new gR.c((0, iR.d)(RA)), this.commandRepeats = new Map(dw.filter((WW => {
          let {
            repeats: RW
          } = WW;
          return RW
        })).map((WW => {
          let {
            command: RW
          } = WW;
          return [RW, (0, iR.d)(MA)]
        })))
      }
      reset() {
        this.navRepeat.reset();
        for (const WW of this.commandRepeats.values()) WW.reset()
      }
      onVisibleFrame(WW) {
        const RW = performance.now();
        for (const {
            command: CW,
            action: zR
          }
          of dw) {
          const MW = (0, eW.g)(zR),
            wW = this.commandRepeats.get(CW);
          if ((wW ? wW.update(WW.isHeld(MW), RW) : WW.wasPressed(MW)) && (this.editor.runCommand(CW), !this.host.getState().visible)) return
        }
        if (WW.wasPressed((0, eW.g)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
        const MW = this.readNavDirection(WW);
        this.lastDirection = MW;
        const wW = this.navRepeat.update(MW, RW);
        wW && this.navigate(wW)
      }
      onHiddenFrame(WW, RW) {
        var MW;
        if (WW.wasPressed((0, eW.g)("keyboardClose"))) return void Sz(RW);
        const wW = (0, eW.g)("keyboardType");
        if (WW.wasPressed(wW)) return BW.c.consumeButton(wW), void this.host.open(RW);
        const CW = this.readNavDirection(WW),
          zR = null !== CW && CW !== this.lastDirection;
        if (this.lastDirection = CW, !zR || (0, Sw.i)(RW)) return;
        const AW = (null === (MW = wz()) || void 0 === MW ? void 0 : MW.root.contains(RW)) || null !== RW.closest(".EntireInventoryWrapper");
        Sz(RW), AW && BW.c.handOffHeldInput()
      }
      navigate(WW) {
        const RW = this.host.getState();
        if ("Up" === WW && 0 === RW.focus.row && "chat" === RW.kind) return (0, Sw.e)().stepHistory(), void this.host.setState({
          ...RW
        });
        const MW = ((WW, RW, MW, wW) => {
          if ("Left" === MW || "Right" === MW) {
            const wW = WW[RW.row].length,
              CW = (RW.col + ("Right" === MW ? 1 : -1) + wW) % wW,
              zR = {
                row: RW.row,
                col: CW
              };
            return {
              pos: zR,
              preferredX: Gw(WW, zR)
            }
          }
          const CW = (RW.row + ("Down" === MW ? 1 : -1) + WW.length) % WW.length;
          return {
            pos: {
              row: CW,
              col: Lw(WW, CW, wW)
            },
            preferredX: wW
          }
        })(qA(RW), RW.focus, WW, RW.preferredX);
        this.host.setState({
          ...RW,
          focus: MW.pos,
          preferredX: MW.preferredX
        })
      }
      readNavDirection(WW) {
        for (const RW of gR.z)
          if (WW.isHeld(RW)) return RW;
        return (0, gR.ab)((0, gR.g)(WW.leftStick, (0, tR.i)().moveDeadzone))
      }
    }
    const CA = ["Up", "Down", "Left", "Right"],
      zb = new Set(["CapsLock", "Control", "Fn", "FnLock", "Hyper", "NumLock", "ScrollLock", "Shift", "Super"]);
    const AA = new class {
      constructor() {
        this.state = Hz, this.listeners = new Set, this.ownedField = null, this.pendingChatInput = null, this.pendingChatTimeout = 0, this.savedInputMode = null, this.editor = new WA(this), this.padInput = new wA(this, this.editor)
      }
      getState() {
        return this.state
      }
      setState(WW) {
        const RW = WW.visible !== this.state.visible;
        this.state = WW;
        for (const MW of this.listeners) MW();
        RW && NW.k.Sz(OW.c, WW.visible)
      }
      subscribe(WW) {
        return this.listeners.add(WW), () => {
          this.listeners.delete(WW)
        }
      }
      install() {
        const WW = BW.c.register({
            name: "keyboard",
            isActive: () => this.state.visible || ZW(document.activeElement),
            onFrame: WW => {
              this.onFrame(WW)
            },
            onDeactivate: () => {
              this.padInput.reset()
            },
            wakePressActs: WW => CA.includes(WW) || !this.state.visible && WW === (0, eW.g)("keyboardType")
          }),
          RW = WW => {
            const RW = WW.target;
            ZW(RW) && (RW === this.pendingChatInput || (0, TW.i)() ? this.open(RW) : this.state.visible && RW !== this.state.target && (this.ownedField = null, this.hide()))
          },
          MW = () => {
            setTimeout((() => {
              this.releaseLostField()
            }), 0)
          },
          wW = WW => {
            WW.isTrusted && this.state.visible && (WW => !WW.repeat && !zb.has(WW.key) && !(0, WC.b)(WW.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(WW.key))(WW) && this.hide()
          },
          CW = () => {
            this.state.visible && this.setState({
              ...this.state,
              ...Zz(this.state.target)
            })
          };
        document.addEventListener("focusin", RW, !0), document.addEventListener("focusout", MW, !0), window.addEventListener("keydown", wW, !0), window.addEventListener("resize", CW);
        const zR = NW.k.subscribe(ow.d, (() => {
            this.openChat()
          })),
          AW = NW.k.subscribe(OW.e, (WW => {
            this.openForField(WW)
          }));
        return () => {
          WW(), document.removeEventListener("focusin", RW, !0), document.removeEventListener("focusout", MW, !0), window.removeEventListener("keydown", wW, !0), window.removeEventListener("resize", CW), NW.k.unsubscribe(zR), NW.k.unsubscribe(AW), this.clearPendingChat(), this.hide(), this.ownedField = null
        }
      }
      openChat() {
        const WW = (0, Sw.e)();
        WW ? document.activeElement !== WW.input ? (this.clearPendingChat(), this.pendingChatInput = WW.input, this.pendingChatTimeout = window.setTimeout((() => {
          this.pendingChatInput = null
        }), 250), WW.open()) : this.open(WW.input) : console.warn("controllerOpenChat with no chat mounted")
      }
      openForField(WW) {
        ZW(WW) ? (document.activeElement !== WW && WW.focus(), document.activeElement === WW && this.open(WW)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", WW)
      }
      open(WW) {
        var RW;
        if (this.clearPendingChat(), this.ownedField = WW, this.state.visible && this.state.target === WW) return;
        this.restoreInputMode(), (WW => {
          SW(WW) && 0 === WW.selectionStart && 0 === WW.selectionEnd && WW.setSelectionRange(WW.value.length, WW.value.length)
        })(WW), this.savedInputMode = WW.getAttribute("inputmode"), WW.setAttribute("inputmode", "none");
        const MW = {
          ...Hz,
          visible: !0,
          target: WW,
          kind: (0, Sw.i)(WW) ? "chat" : null !== (RW = (0, Sw.f)(WW).kind) && void 0 !== RW ? RW : null,
          accentsFirst: (wW = bC.d.get().getCurrentLanguageCode(), vC.has(wW)),
          ...Zz(WW)
        };
        var wW;
        const CW = qA(MW),
          zR = ((WW, RW) => {
            for (let MW = 0; MW < WW.length; MW++) {
              const wW = WW[MW].findIndex((WW => "char" === WW.type && WW.char === RW));
              if (-1 !== wW) return {
                row: MW,
                col: wW
              }
            }
            return null
          })(CW, "q");
        this.padInput.reset(), this.setState({
          ...MW,
          focus: zR,
          preferredX: Gw(CW, zR)
        })
      }
      hide() {
        this.state.visible && (this.restoreInputMode(), this.padInput.reset(), this.setState(Hz))
      }
      onFrame(WW) {
        if (this.releaseLostField()) return;
        const RW = document.activeElement;
        this.state.visible ? this.padInput.onVisibleFrame(WW) : ZW(RW) && this.padInput.onHiddenFrame(WW, RW)
      }
      releaseLostField() {
        const WW = this.ownedField;
        return !(null === WW || WW.isConnected && document.activeElement === WW) && (this.ownedField = null, this.hide(), !0)
      }
      clearPendingChat() {
        window.clearTimeout(this.pendingChatTimeout), this.pendingChatInput = null
      }
      restoreInputMode() {
        const {
          target: WW
        } = this.state;
        WW && (null === this.savedInputMode ? WW.removeAttribute("inputmode") : WW.setAttribute("inputmode", this.savedInputMode), this.savedInputMode = null)
      }
    };
    var bb = MW(7674);
    const yb = new Map(dw.map((WW => {
        let {
          command: RW,
          action: MW
        } = WW;
        return [RW, MW]
      }))),
      NA = {
        letters: "ABC",
        accents: "\xe0\xe9",
        symbols: "&123"
      },
      eA = {
        chat: "controller:keyboardTargetChat",
        sign: "controller:keyboardTargetSign",
        nameTag: "controller:keyboardTargetNameTag",
        book: "controller:keyboardTargetBook",
        Tv: "controller:keyboardTargetBookTitle"
      },
      BA = WW => {
        const RW = (() => {
          const [, WW] = (0, UW.useReducer)((WW => WW + 1), 0);
          return WW
        })();
        (0, UW.useEffect)((() => {
          if (!WW) return;
          const MW = ["input", "select", "selectionchange", "keyup", "pointerup"];
          for (const CW of MW) WW.addEventListener(CW, RW);
          document.addEventListener("selectionchange", RW);
          const wW = new MutationObserver(RW);
          return wW.observe(WW, {
            attributeFilter: ["placeholder"]
          }), () => {
            wW.disconnect();
            for (const wW of MW) WW.removeEventListener(wW, RW);
            document.removeEventListener("selectionchange", RW)
          }
        }), [WW, RW])
      },
      tb = WW => {
        WW.preventDefault()
      },
      TA = WW => {
        "mouse" !== WW.pointerType && WW.preventDefault()
      },
      gb = () => {
        var WW;
        const {
          t: RW
        } = (0, CW.C)(), MW = (() => {
          const [WW, RW] = (0, UW.useState)(AA.getState());
          return (0, UW.useEffect)((() => AA.subscribe((() => {
            RW(AA.getState())
          }))), []), WW
        })(), wW = (0, TW.z)(), zR = (0, UW.useRef)(null);
        (0, tR.s)(), (0, TW.C)(), (0, UW.useEffect)((() => {
          const WW = AA.install(),
            RW = null;
          return () => {
            WW(), null === RW || void 0 === RW || RW()
          }
        }), []);
        const AW = (0, UW.useMemo)((() => Gz.map((WW => RW(WW)))), [RW]),
          bR = MW.visible && "chat" === MW.kind ? MW.target : null;
        BA(bR);
        const yR = null !== (WW = null === bR || void 0 === bR ? void 0 : bR.value) && void 0 !== WW ? WW : "",
          NW = ((WW, RW, MW) => {
            if (!WW.startsWith("/")) return [];
            const wW = [];
            for (let CW = RW.length - 1; CW >= 0 && wW.length < MW; CW--) {
              const MW = RW[CW].trim();
              MW.startsWith(WW) && MW !== WW && !wW.includes(MW) && wW.push(MW)
            }
            return wW
          })(yR, yR.startsWith("/") ? (0, bb.h)() : [], Gz.length),
          BW = yR.startsWith("/"),
          gR = BW ? Gz.map(((WW, RW) => {
            var MW;
            return null !== (MW = NW[RW]) && void 0 !== MW ? MW : ""
          })) : AW;
        if ((0, UW.useEffect)((() => {
            AA.editor.setPhraseRow(gR, BW)
          })), (0, UW.useEffect)((() => {
            const WW = zR.current;
            if (WW) return WW.addEventListener("touchstart", tb, {
              passive: !1
            }), () => {
              WW.removeEventListener("touchstart", tb)
            }
          }), [MW.visible]), !MW.visible) return null;
        const iR = qA(MW),
          YW = nw(iR),
          JW = WW => "char" === WW.type ? Zw(WW.char, MW.page, MW.shift) : "phrase" === WW.type ? gR[WW.phraseIndex] : (WW => {
            switch (WW) {
              case "backspace":
                return "\u232b";
              case "shift":
                return "caps" === MW.shift ? "\u21ea" : "\u21e7";
              case "page":
              case "otherPage":
                return NA[Kw(MW.page, MW.accentsFirst)[WW]];
              case "space":
                return RW("controller:keyboardSpace");
              case "caretLeft":
                return "\u2190";
              case "caretRight":
                return "\u2192";
              case "newline":
                return "\u21b5";
              case "submit":
                return RW("chat" === MW.kind ? "controller:keyboardSend" : "controller:keyboardDone");
              case "close":
                return "\u2715";
              case "channel":
                return "\u21c4"
            }
          })(WW.command),
          PW = WW => {
            AA.editor.pressKey(WW)
          };
        return (0, mR.jsxs)("div", {
          ref: zR,
          className: VW()(Sw.k, "top" === MW.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
            PadKeyboardMultiline: MW.target instanceof HTMLTextAreaElement
          }),
          style: {
            "--pad-keyboard-rows": iR.length,
            "--pad-keyboard-height": `${MW.maxHeightPx}px`
          },
          onPointerDown: TA,
          onMouseDown: tb,
          children: [(0, mR.jsx)(ib, {
            target: MW.target,
            label: MW.kind ? RW(eA[MW.kind]) : MW.target.placeholder || RW("controller:keyboardTargetText")
          }), (0, mR.jsx)("div", {
            className: "PadKeyboardRows",
            children: iR.map(((WW, RW) => (0, mR.jsx)("div", {
              className: VW()("PadKeyboardRow", {
                PadKeyboardPhraseRow: "phrase" === WW[0].type
              }),
              children: WW.map(((WW, CW) => {
                const zR = wW && MW.focus.row === RW && MW.focus.col === CW,
                  AW = "command" === WW.type ? yb.get(WW.command) : void 0;
                return (0, mR.jsx)("div", {
                  className: "PadKeyboardKeySlot",
                  style: {
                    width: WW.width / YW * 100 + "%"
                  },
                  children: (0, mR.jsxs)("div", {
                    className: VW()("PadKeyboardKey", {
                      PadKeyboardKeyFocused: zR,
                      PadKeyboardKeyCommand: "command" === WW.type,
                      PadKeyboardKeyPhrase: "phrase" === WW.type,
                      PadKeyboardKeyActive: "command" === WW.type && "shift" === WW.command && "off" !== MW.shift,
                      PadKeyboardKeySubmit: "command" === WW.type && "submit" === WW.command
                    }),
                    role: "button",
                    onClick: () => {
                      PW({
                        row: RW,
                        col: CW
                      })
                    },
                    onTouchEnd: WW => {
                      var MW, wW;
                      WW.preventDefault(), MW = WW.changedTouches[0], wW = WW.currentTarget.getBoundingClientRect(), MW && MW.clientX >= wW.left && MW.clientX <= wW.right && MW.clientY >= wW.top && MW.clientY <= wW.bottom && PW({
                        row: RW,
                        col: CW
                      })
                    },
                    children: [(0, mR.jsx)("span", {
                      className: "PadKeyboardKeyLabel",
                      children: JW(WW)
                    }), wW && AW && (0, mR.jsx)(tC, {
                      className: "PadKeyboardKeyGlyph",
                      glyph: (0, eW.g)(AW)
                    })]
                  })
                }, CW)
              }))
            }, RW)))
          })]
        })
      },
      ib = WW => {
        let {
          target: RW,
          label: MW
        } = WW;
        BA(RW);
        const wW = (0, UW.useRef)(null),
          CW = (0, UW.useRef)(null),
          zR = RW instanceof HTMLTextAreaElement;
        (0, UW.useLayoutEffect)((() => {
          const WW = wW.current,
            RW = CW.current;
          zR ? WW.scrollTop = RW.offsetTop - WW.clientHeight / 2 : WW.scrollLeft = RW.offsetLeft - WW.clientWidth / 2
        }));
        const {
          value: AW,
          start: bR,
          end: yR
        } = WR(RW), NW = "password" === RW.type ? "\u2022".repeat(AW.length) : AW;
        return (0, mR.jsxs)("div", {
          className: "PadKeyboardPreview",
          children: [(0, mR.jsx)("div", {
            className: "PadKeyboardPreviewLabel SmallTextBold",
            children: MW
          }), (0, mR.jsxs)("div", {
            ref: wW,
            className: VW()("PadKeyboardPreviewText", {
              PadKeyboardPreviewMultiline: zR
            }),
            children: [(0, mR.jsx)("span", {
              children: NW.slice(0, bR)
            }), (0, mR.jsx)("span", {
              ref: CW,
              className: "PadKeyboardCaret"
            }), bR !== yR && (0, mR.jsx)("span", {
              className: "PadKeyboardPreviewSelection",
              children: NW.slice(bR, yR)
            }), (0, mR.jsx)("span", {
              children: NW.slice(yR)
            }), 0 === NW.length && RW.placeholder && RW.placeholder !== MW && (0, mR.jsx)("span", {
              className: "PadKeyboardPreviewPlaceholder",
              children: RW.placeholder
            })]
          })]
        })
      };
    var YA = MW(1208),
      JA = MW(2550);
    const PA = function() {
        for (var WW = arguments.length, RW = new Array(WW), MW = 0; MW < WW; MW++) RW[MW] = arguments[MW];
        return RW.map(eW.g)
      },
      IA = (WW, RW) => {
        const MW = EC(WW);
        return MW ? [{
          glyphs: [MW],
          labelKey: RW
        }] : []
      },
      oA = [".BottomMiddleElements", ".BottomLeftElements > *", ".BottomRightElements > *", ".MiddleTextBottom .MiddleText"],
      lA = "--pad-hint-bar-clearance",
      FA = "[data-pad-hint-bar-avoid]",
      fA = WW => {
        const RW = [];
        for (const MW of WW) NR(MW) && RW.push(MW.getBoundingClientRect());
        return RW
      },
      QA = WW => {
        if (!WW) return null;
        const RW = wz(),
          MW = RW ? fA(((WW, RW) => {
            const MW = WW.closest(FA);
            return MW ? [MW] : ("popup" === RW ? document : WW).querySelectorAll(FA)
          })(RW.root, RW.layer.kind)) : [],
          wW = !RW || RW.root.hasAttribute("data-pad-shows-hud");
        if (((0, JA.f)(null === RW || void 0 === RW ? void 0 : RW.layer.kind, (0, JA.g)()) || wW) && MW.push(...fA(document.querySelectorAll(oA.join(",")))), 0 === MW.length) return null;
        const {
          width: CW,
          height: zR
        } = WW.getBoundingClientRect(), AW = window.innerHeight - 8, bR = (0, JA.i)(AW, {
          width: CW,
          height: zR
        }, window.innerWidth / 2, MW, 8);
        return bR === AW ? null : Math.round(window.innerHeight - bR)
      },
      rb = WW => {
        const RW = document.documentElement.style,
          MW = WW ? `${Math.round(window.innerHeight-WW.getBoundingClientRect().top)}px` : "";
        RW.getPropertyValue(lA) !== MW && (MW ? RW.setProperty(lA, MW) : RW.removeProperty(lA))
      },
      cb = () => {
        const {
          t: WW
        } = (0, CW.C)(), {
          hideButtonHints: RW
        } = (0, tR.s)(), MW = (0, TW.z)(), [wW, zR] = (0, UW.useState)(!1), [AW, NW] = (0, UW.useState)([]), [iR, YW] = (0, UW.useState)(null), JW = (0, UW.useRef)(null), PW = (0, UW.useRef)(null);
        (0, Aw.f)(OW.c, (WW => {
          zR(WW)
        })), (0, Aw.f)(JA.h, (() => {
          var WW;
          null === (WW = PW.current) || void 0 === WW || WW.call(PW)
        }));
        const IW = MW && !RW && !wW;
        return (0, UW.useEffect)((() => {
          if (!IW) return;
          let WW = null;
          const RW = () => {
            const RW = (() => {
                var WW;
                const RW = BW.c.getActiveConsumerName(),
                  MW = (0, JA.e)();
                if (MW) {
                  const WW = (0, eW.g)(MW),
                    RW = "emoteWheel" === MW && "wheel" === (0, tR.i)().emoteButton || !(0, gR.G)(BW.c.getLastFrame().values, WW) ? {
                      glyphs: PA("menuConfirm"),
                      labelKey: "controller:menusSelect"
                    } : {
                      glyphs: [WW],
                      labelKey: "controller:wheelReleaseToPick"
                    };
                  return [{
                    glyphs: [(0, eW.y)(WW)],
                    labelKey: "controller:wheelChoose"
                  }, RW, {
                    glyphs: PA("menuBack"),
                    labelKey: "controller:wheelClose"
                  }]
                }
                const wW = wz();
                if (!wW || "focus" !== RW && "cursor" !== RW) return (0, JA.b)(eW.g);
                const CW = [],
                  zR = {
                    glyphs: PA("menuBack"),
                    labelKey: "controller:menusBack"
                  },
                  AW = UR(wW.root),
                  bR = AW ? !eR(AW) : Boolean(wW.layer.close),
                  NW = !AW && wW.layer.closeLabelKey ? wW.layer.closeLabelKey : zR.labelKey,
                  TW = bR ? [{
                    ...zR,
                    labelKey: NW
                  }] : [],
                  iR = QC(wW.layer.kind) ? [{
                    glyphs: PA("chat"),
                    labelKey: "controller:menusQuickChat"
                  }] : [];
                if ("cursor" === RW) return CW.push({
                  glyphs: PA("menuConfirm"),
                  labelKey: "controller:menusClick"
                }), CW.push({
                  glyphs: PA("menuSecondary"),
                  labelKey: "controller:menusRightClick"
                }), CW.push(...TW), CW.push(...iR), CW.push({
                  glyphs: ["RightStick"],
                  labelKey: "controller:menusScroll"
                }), Pz() && CW.push({
                  glyphs: PA("menuToggleCursor"),
                  labelKey: "controller:menusFocusMode"
                }), CW;
                const YW = nz.getFocused();
                YW && (0, Fz.e)(YW) ? CW.push({
                  glyphs: ["Left", "Right"],
                  labelKey: "controller:menusAdjust"
                }) : YW && pR(YW) ? CW.push({
                  glyphs: [],
                  labelKey: "controller:menusUseMouse"
                }) : CW.push({
                  glyphs: PA("menuConfirm"),
                  labelKey: "controller:menusSelect"
                });
                const JW = YW ? null === (WW = bz(YW)) || void 0 === WW ? void 0 : WW.dataset.padSecondary : void 0;
                JW && CW.push({
                  glyphs: PA("menuSecondary"),
                  labelKey: JW
                }), CW.push(...null !== YW && void 0 !== YW && YW.closest("[data-pad-friends-column]") ? [zR] : TW), CW.push(...iR);
                const PW = "home" === wW.layer.kind;
                xz(wW.root) || !jz(wW.root) && !vz(wW) ? PW && CW.push({
                  glyphs: PA("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusRows"
                }) : CW.push({
                  glyphs: PA("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusTabs"
                }), PW && (CW.push(...IA("inventory", "controller:menusFriends")), JW || CW.push({
                  glyphs: PA("menuSecondary"),
                  labelKey: "controller:menusSearch"
                }), CW.push(...IA("pause", "controller:menusSettings")), CW.push(...IA("leaderboard", "controller:menusNotifications")));
                const IW = yR.b.get("openEverythingMenuName");
                return "inGame" === yR.b.get("gameState") && "popup" !== wW.layer.kind && null !== IW && ((0, wC.l)(IW) ? CW.push(...IA("leaderboard", "controller:menusClose")) : IW !== MC.t.LOBBY_LEADERBOARD && CW.push(...IA("leaderboard", "controller:menusLobby"))), CW.push({
                  glyphs: PA("menuToggleCursor"),
                  labelKey: "controller:menusCursorMode"
                }), CW
              })(),
              MW = QA(JW.current),
              wW = ((WW, RW) => `${WW.map((WW=>`${WW.glyphs.join("+")}:${WW.labelKey}`)).join("|")}@${RW}`)(RW, MW);
            wW !== WW && (WW = wW, (0, bR.unstable_batchedUpdates)((() => {
              NW(RW), YW(MW)
            }))), rb(JW.current)
          };
          RW(), PW.current = RW;
          const MW = requestAnimationFrame(RW),
            wW = setInterval(RW, 150);
          return () => {
            PW.current = null, cancelAnimationFrame(MW), clearInterval(wW), rb(null)
          }
        }), [IW]), (0, UW.useLayoutEffect)((() => {
          if (!IW) return;
          if (0 === AW.length) return void rb(null);
          const WW = QA(JW.current);
          WW === iR ? rb(JW.current) : YW(WW)
        }), [IW, AW, iR]), IW && 0 !== AW.length ? (0, mR.jsx)("div", {
          ref: JW,
          className: "PadButtonHintBar SmallTextBold",
          style: null === iR ? void 0 : {
            bottom: iR
          },
          "aria-hidden": !0,
          children: AW.map((RW => (0, mR.jsxs)("div", {
            className: "PadButtonHint",
            children: [RW.glyphs.map((WW => (0, mR.jsx)(tC, {
              glyph: WW,
              className: "PadButtonHintGlyph"
            }, WW))), (0, mR.jsx)("span", {
              children: WW(RW.labelKey)
            })]
          }, RW.labelKey)))
        }) : null
      },
      XA = [bM, "label", "[data-pad-slider]"].join(","),
      jb = "data-pad-cursor-probe",
      kb = WW => {
        var RW;
        const MW = (WW => {
          const RW = [];
          for (let wW = WW; wW && wW !== document.body && wW !== document.documentElement && (RW.push(wW), !(RW.length > 8)); wW = wW.parentElement);
          const MW = document.documentElement.classList.contains(TW.p) ? RW[RW.length - 1] : void 0;
          null === MW || void 0 === MW || MW.setAttribute(jb, "");
          try {
            return RW.map((WW => ({
              element: WW,
              cursor: getComputedStyle(WW).cursor
            })))
          } finally {
            null === MW || void 0 === MW || MW.removeAttribute(jb)
          }
        })(WW);
        if ("pointer" !== (null === (RW = MW[0]) || void 0 === RW ? void 0 : RW.cursor)) return null;
        let wW = 0;
        for (; wW + 1 < MW.length && "pointer" === MW[wW + 1].cursor;) wW++;
        return MW[wW].element
      },
      ab = (WW, RW, MW, wW) => {
        const CW = wW.root.contains(WW) ? wW.root : null;
        for (let zR = WW; zR && zR !== document.body && zR !== document.documentElement; zR = zR.parentElement) {
          if (zR instanceof HTMLElement && cR(zR, RW) && sW(zR, RW, MW)) return zR;
          if (zR === CW) break
        }
        return "home" === wW.layer.kind || "gamePage" === wW.layer.kind ? ((WW, RW) => {
          const MW = document.scrollingElement;
          return MW instanceof HTMLElement && ![document.documentElement, document.body].some((RW => {
            const MW = getComputedStyle(RW),
              wW = "y" === WW ? MW.overflowY : MW.overflowX;
            return "hidden" === wW || "clip" === wW
          })) && sW(MW, WW, RW) ? MW : null
        })(RW, MW) : null
      };
    const sA = new class {
        constructor() {
          this.state = {
            x: 0,
            y: 0,
            speedRamp: 0
          }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this.confirmRepeat = (0, iR.d)(gR.s), this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.layerRoot = null, this.layerOrder = 0, this.layerPoints = new WeakMap, this.page = null, this.pendingPageStart = null
        }
        install() {
          const WW = BW.c.register({
              name: "cursor",
              isActive: () => "cursor" === Iz(),
              onFrame: WW => {
                this.onFrame(WW)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: WW => (0, BW.e)(WW) || WW === (0, eW.g)("menuConfirm") && hR((0, TW.b)())
            }),
            RW = (0, HC.i)((WW => {
              const RW = WW.getRoot();
              RW && this.layerPoints.delete(RW), RW === this.layerRoot && (this.layerRoot = null)
            })),
            MW = NW.k.subscribe("appManagerUpdated|activeInputDevice", (WW => {
              "gamepad" !== WW && this.active && !this.hidden && this.hide()
            }));
          return () => {
            WW(), RW(), NW.k.unsubscribe(MW), this.deactivate()
          }
        }
        getHighlighted() {
          return this.isVisible() ? this.interactive : null
        }
        isVisible() {
          return this.active && !this.hidden && (0, TW.i)()
        }
        getPoint() {
          return {
            x: this.state.x,
            y: this.state.y
          }
        }
        hide() {
          this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.Sz()
        }
        activate(WW) {
          this.active = !0, this.hidden = !1;
          const RW = iA();
          !RW || RW.root && RW.root !== WW.root ? this.jumpTo(this.hasPosition ? this.getPoint() : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          }) : (this.setLayer(WW), this.jumpTo(RW.point))
        }
        jumpTo(WW) {
          this.state = {
            x: WW.x,
            y: WW.y,
            speedRamp: 0
          }, this.hasPosition = !0, this.lastHitTestMs = -1 / 0
        }
        deactivate() {
          this.active && (this.active = !1, this.page = null, this.pendingPageStart = null, this.cancelPress(), this.clearHover(), this.draggedSlider = null, this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.Sz())
        }
        onFrame(WW) {
          const RW = wz();
          if (!RW) return;
          if (this.active || this.activate(RW), this.followPage(RW)) return;
          this.followLayer(RW);
          const MW = WW.wokeDevice ? (0, TW.b)() : null;
          if (MW && this.jumpTo(MW), !(0, TW.i)()) return void this.hide();
          const wW = (0, eW.g)("menuToggleCursor");
          if (WW.wasPressed(wW)) return BW.c.consumeButton(wW), void gA(this.getHandoff(null));
          if (this.handBackToFocus(WW)) return;
          const CW = (0, eW.g)("menuConfirm"),
            zR = (0, eW.g)("menuSecondary");
          if (WW.wasPressed((0, eW.g)("menuBack"))) return sR(RW.root) || ER(RW.root) || Cz(), void this.Sz();
          if (OC(null, WW, RW)) return WW.wasReleased(CW) && this.press && (this.updateHit(!1), this.updateConfirm(WW, CW)), void this.Sz();
          if (document.pointerLockElement) return void this.hide();
          const AW = oz() ? {
              x: 0,
              y: 0
            } : (WW => {
              const RW = (WW, RW) => (WW ? 1 : 0) - (RW ? 1 : 0);
              return {
                x: RW(WW.isHeld("Right"), WW.isHeld("Left")),
                y: RW(WW.isHeld("Down"), WW.isHeld("Up"))
              }
            })(WW),
            bR = (0, tR.i)().moveDeadzone,
            yR = ((WW, RW) => {
              const MW = (0, gR.g)(WW, oW(RW));
              return Math.hypot(MW.x, MW.y)
            })(WW.leftStick, bR) > 0 || 0 !== AW.x || 0 !== AW.y;
          if (this.hidden) {
            const RW = WW.wasPressed(CW),
              MW = WW.wasPressed(zR);
            if (!yR && !fW(WW.rightStick) && !RW && !MW && !WW.wokeDevice) return void this.Sz();
            if (this.hidden = !1, this.updateHit(!1), RW || MW) return RW && (this.press = {
              kind: "ignored"
            }, WW.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.Sz()
          }
          this.movePendingPageStart(yR);
          const NW = this.getPoint();
          this.state = FW(this.state, {
            stick: WW.leftStick,
            moveDeadzone: bR,
            dpad: AW,
            dtMs: WW.dtMs,
            cursorSpeedPercent: (0, tR.i)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: this.getAssistContext()
          });
          const iR = this.state.x !== NW.x || this.state.y !== NW.y,
            YW = [CW, zR].some((RW => WW.wasPressed(RW) || WW.wasReleased(RW)));
          (iR || YW || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(iR), this.updateConfirm(WW, CW), this.updateSecondary(WW, zR), this.updateScroll(WW, RW), this.Sz()
        }
        followPage(WW) {
          const RW = "home" === WW.layer.kind || "gamePage" === WW.layer.kind,
            MW = this.page;
          if (this.page = RW ? {
              key: (0, HC.q)(WW.layer),
              root: WW.root
            } : null, !this.page || !MW || MW.root !== WW.root || MW.key === this.page.key) return !1;
          if (this.cancelPress(), this.secondaryArmed = !1, this.setLayer(WW), "hybrid" === Tz()) return ez = null, yA = null, Bz.lock(), !0;
          const {
            key: wW
          } = this.page;
          return this.pendingPageStart = {
            root: WW.root,
            key: wW,
            returning: nz.notePageEnteredByCursor(wW),
            enteredAtMs: performance.now()
          }, !1
        }
        movePendingPageStart(WW) {
          const RW = this.pendingPageStart;
          if (!RW) return;
          if (WW || RW.root !== this.layerRoot) return void(this.pendingPageStart = null);
          const MW = RW.returning ? nz.recallStop(RW.root, RW.key) : null;
          if (!MW && RW.returning && performance.now() - RW.enteredAtMs < 1e3) return;
          const wW = null !== MW && void 0 !== MW ? MW : nz.pickInitial(RW.root, {
            includeDisabled: !0,
            waitForContent: !0,
            enteredAtMs: RW.enteredAtMs
          });
          wW && (this.pendingPageStart = null, this.jumpTo(oR(wW)))
        }
        setLayer(WW) {
          this.layerRoot = WW.root, this.layerOrder = WW.order
        }
        followLayer(WW) {
          var RW;
          if (WW.root === this.layerRoot) return;
          null !== (RW = this.layerRoot) && void 0 !== RW && RW.isConnected && this.layerPoints.set(this.layerRoot, this.getPoint()), this.cancelPress(), this.draggedSlider = null, this.secondaryArmed = !1;
          const MW = this.layerPoints.get(WW.root),
            wW = MW && WW.order <= this.layerOrder ? MW : nz.getLayerStartPoint(WW.root);
          this.setLayer(WW), this.jumpTo(wW)
        }
        getHandoff(WW) {
          var RW;
          return {
            point: this.getPoint(),
            element: null !== (RW = this.interactive) && void 0 !== RW ? RW : this.findDraggedSliderNearby(),
            direction: WW
          }
        }
        findDraggedSliderNearby() {
          const WW = this.draggedSlider;
          if (null === WW || void 0 === WW || !WW.isConnected) return null;
          const RW = WW.getBoundingClientRect(),
            {
              y: MW
            } = this.getPoint();
          return MW >= RW.top - 40 && MW <= RW.bottom + 40 ? WW : null
        }
        handBackToFocus(WW) {
          if (!oz()) return !1;
          const RW = gR.z.find((RW => WW.wasPressed(RW)));
          return !!RW && (MW = this.getHandoff(RW), ez = Az(MW), yA = null, Bz.lock(), BW.c.handOffHeldInput(), !0);
          var MW
        }
        getAssistContext() {
          const WW = this.interactive;
          if (null === WW || void 0 === WW || !WW.isConnected) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const RW = WW.getBoundingClientRect();
          if (RW.width > .4 * window.innerWidth || RW.height > .4 * window.innerHeight) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const MW = (0, tR.i)().cursorMagnetism && !(0, nW.e)(WW) && !WW.closest("[data-pad-slider]"),
            wW = this.magnet && this.magnet !== WW && this.magnet.isConnected ? this.magnet.getBoundingClientRect() : RW;
          return {
            overInteractive: !0,
            magnetTarget: MW ? {
              x: wW.left + wW.width / 2,
              y: wW.top + wW.height / 2
            } : null
          }
        }
        updateHit(WW) {
          this.lastHitTestMs = performance.now();
          const RW = this.getPoint(),
            MW = document.elementFromPoint(RW.x, RW.y),
            wW = MW && !(0, JW.j)(MW) && (WW => {
              var RW;
              const MW = wz();
              return !(MW && !MW.root.contains(WW) && !WW.closest(".tooltip-container")) || !(null !== (RW = document.getElementById("root")) && void 0 !== RW && RW.contains(WW))
            })(MW) ? MW : null;
          if (wW !== this.hit) return cM(this.hit, wW, RW), this.hit = wW, void this.setInteractive(wW ? (WW => {
            const RW = WW.closest(XA);
            if (RW) {
              var MW, wW;
              const WW = null !== (MW = null === (wW = RW.parentElement) || void 0 === wW ? void 0 : wW.closest("[data-pad-focusable]")) && void 0 !== MW ? MW : RW;
              return eR(WW) ? {
                element: null,
                magnet: null
              } : {
                element: WW,
                magnet: RW
              }
            }
            const CW = kb(WW);
            return {
              element: CW,
              magnet: CW
            }
          })(wW) : {
            element: null,
            magnet: null
          });
          WW && wW && cM(wW, wW, RW)
        }
        setInteractive(WW) {
          let {
            element: RW,
            magnet: MW
          } = WW;
          this.interactive = RW, this.magnet = MW
        }
        clearHover() {
          this.hit && cM(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
            element: null,
            magnet: null
          })
        }
        beginPress() {
          const WW = this.hit;
          if (!WW || pR(WW)) return {
            kind: "ignored"
          };
          const RW = (0, Fz.e)(WW),
            MW = WW.closest("[data-pad-slider]");
          return RW && MW ? {
            kind: "slider",
            slider: MW,
            adjuster: RW
          } : (fR(WW, this.getPoint()), {
            kind: "pointer",
            target: WW
          })
        }
        applySliderFraction(WW) {
          var RW;
          const MW = WW.slider.getBoundingClientRect(),
            wW = MW.height > MW.width,
            CW = null === (RW = WW.slider.querySelector("[data-pad-slider-handle]")) || void 0 === RW ? void 0 : RW.getBoundingClientRect(),
            zR = CW ? wW ? CW.height : CW.width : 0,
            AW = (wW ? MW.height : MW.width) - zR;
          if (AW <= 0) return;
          const bR = wW ? MW.bottom - zR / 2 - this.state.y : this.state.x - MW.left - zR / 2;
          WW.adjuster.setFraction(Math.max(0, Math.min(1, bR / AW)))
        }
        updateConfirm(WW, RW) {
          WW.wasPressed(RW) && (this.press = WW.wokeDevice ? {
            kind: "ignored"
          } : this.beginPress(), this.draggedSlider = "slider" === this.press.kind ? this.press.slider : null, this.beginRepeat());
          const MW = this.press;
          if (!MW) return;
          if (WW.isHeld(RW)) return "slider" === MW.kind && this.applySliderFraction(MW), void this.updateRepeat();
          this.press = null;
          const wW = this.repeated;
          if (this.endRepeat(), !WW.wasReleased(RW)) return void this.endPressWithoutClick(MW);
          const CW = this.getPoint(),
            zR = this.hit;
          if ("slider" === MW.kind && MW.adjuster.endDrag(), "pointer" === MW.kind) {
            const WW = null !== zR && void 0 !== zR ? zR : MW.target.isConnected ? MW.target : null;
            WW && QR(WW, CW);
            const RW = zR && MW.target.isConnected && !wW ? ((WW, RW) => {
              for (let MW = WW; MW; MW = MW.parentElement)
                if (MW.contains(RW)) return MW;
              return null
            })(MW.target, zR) : null;
            RW && (nz.noteCursorActivation(RW), (0, JW.e)(RW, new MouseEvent("click", lR(CW, 0, 0))), dR(RW), IR(RW) && XR(RW))
          }
        }
        beginRepeat() {
          var WW, RW, MW;
          const wW = null !== (WW = null === (RW = this.hit) || void 0 === RW ? void 0 : RW.closest("[data-pad-repeat]")) && void 0 !== WW ? WW : null;
          this.repeatStop = wW, this.repeatKey = null !== (MW = null === wW || void 0 === wW ? void 0 : wW.getAttribute("data-pad-repeat")) && void 0 !== MW ? MW : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
        }
        updateRepeat() {
          const WW = this.repeatStop;
          if (!WW) return;
          const RW = this.hit;
          WW.isConnected && !eR(WW) && WW.getAttribute("data-pad-repeat") === this.repeatKey && RW && WW.contains(RW) ? WW.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, nz.noteCursorActivation(WW), (0, JW.e)(WW, new MouseEvent("click", lR(this.getPoint(), 0, 0)))) : this.repeatStop = null
        }
        endRepeat() {
          this.repeatStop = null, this.repeated = !1
        }
        endPressWithoutClick(WW) {
          "slider" === WW.kind && WW.adjuster.endDrag(), "pointer" === WW.kind && WW.target.isConnected && QR(WW.target, this.getPoint())
        }
        cancelPress() {
          this.endRepeat(), this.press && (this.endPressWithoutClick(this.press), this.press = null)
        }
        updateSecondary(WW, RW) {
          WW.wasPressed(RW) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !WW.isHeld(RW) && (this.secondaryArmed = !1, WW.wasReleased(RW) && this.hit && rM(this.hit, this.getPoint(), 2))
        }
        updateScroll(WW, RW) {
          const MW = QW(WW.rightStick, WW.dtMs);
          if (0 === MW.x && 0 === MW.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          this.scrollRemainder = {
            x: this.scrollRemainder.x + MW.x,
            y: this.scrollRemainder.y + MW.y
          };
          const wW = Math.trunc(this.scrollRemainder.x),
            CW = Math.trunc(this.scrollRemainder.y);
          this.scrollRemainder = {
            x: this.scrollRemainder.x - wW,
            y: this.scrollRemainder.y - CW
          };
          const zR = this.hit;
          if (!zR) return;
          let AW = !1;
          if (0 !== CW) {
            const WW = ab(zR, "y", CW > 0 ? 1 : -1, RW);
            WW && (WW.scrollBy({
              top: CW,
              behavior: "instant"
            }), AW = !0)
          }
          if (0 !== wW) {
            const WW = ab(zR, "x", wW > 0 ? 1 : -1, RW);
            WW && (WW.scrollBy({
              left: wW,
              behavior: "instant"
            }), AW = !0)
          }
          AW && (this.lastHitTestMs = -1 / 0)
        }
        Sz() {
          xM.set({
            x: this.state.x,
            y: this.state.y,
            visible: this.isVisible(),
            pressed: null !== this.press && "ignored" !== this.press.kind
          })
        }
      },
      dA = () => {
        const WW = (0, UW.useMemo)((() => new KW), []),
          RW = (0, TW.z)();
        return (0, UW.useEffect)((() => {
          if (!RW) return;
          let MW = 0,
            wW = {
              of: null,
              atMs: 0,
              list: []
            };
          const CW = document.getElementsByClassName(lz),
            zR = WW => {
              for (const RW of [...CW]) RW !== WW && RW.classList.remove(lz)
            },
            AW = () => {
              var RW;
              MW = requestAnimationFrame(AW);
              const CW = (() => {
                const WW = nz.getFocused();
                if (nz.isActive() && null !== WW && void 0 !== WW && WW.isConnected) return WW;
                const RW = sA.getHighlighted();
                return null !== RW && void 0 !== RW && RW.isConnected ? RW : null
              })();
              zR(CW), CW && !CW.classList.contains(lz) && CW.classList.add(lz);
              const bR = null !== (RW = null === CW || void 0 === CW ? void 0 : CW.closest("[data-pad-reticle-box]")) && void 0 !== RW ? RW : CW;
              WW.show(bR ? ((WW, RW) => {
                let MW = WW.left,
                  wW = WW.top,
                  CW = WW.right,
                  zR = WW.bottom;
                for (const AW of RW) {
                  if (!AW) continue;
                  const WW = pW(AW);
                  MW = Math.max(MW, WW.left), wW = Math.max(wW, WW.top), CW = Math.min(CW, WW.right), zR = Math.min(zR, WW.bottom)
                }
                return CW <= MW || zR <= wW ? null : {
                  left: MW,
                  top: wW,
                  width: CW - MW,
                  height: zR - wW
                }
              })(bR.getBoundingClientRect(), (WW => {
                const RW = performance.now();
                return (wW.of !== WW || RW - wW.atMs > 500) && (wW = {
                  of: WW,
                  atMs: RW,
                  list: [XW(WW, "y"), XW(WW, "x")]
                }), wW.list
              })(bR)) : null)
            };
          return MW = requestAnimationFrame(AW), () => {
            cancelAnimationFrame(MW), zR(null), WW.hide()
          }
        }), [RW, WW]), (0, mR.jsx)(uW, {
          placer: WW,
          className: "PadFocusRing"
        })
      },
      pA = (WW, RW) => {
        WW.style.transform = `translate3d(${RW.x}px, ${RW.y}px, 0)`, WW.classList.toggle("Visible", RW.visible), WW.classList.toggle("Pressed", RW.pressed)
      },
      hA = () => {
        const WW = (0, UW.useRef)(null);
        return (0, UW.useEffect)((() => {
          const RW = xM.subscribe((RW => {
            WW.current && pA(WW.current, RW)
          }));
          return WW.current && pA(WW.current, xM.get()), RW
        }), []), (0, mR.jsx)("div", {
          ref: WW,
          className: "PadCursorView",
          "aria-hidden": "true",
          children: (0, mR.jsx)("div", {
            className: "PadCursorGlyph",
            children: "+"
          })
        })
      },
      UA = "#ncmp__modal.ncmp__active",
      EA = [{
        id: "nitro-consent-banner",
        find: () => document.querySelector(UA) ? null : document.querySelector("#ncmp__tool > .ncmp__banner.ncmp__active"),
        startSelectors: ["[data-ncmp-cmd='reject']", "[data-ncmp-cmd='showModal']"]
      }, {
        id: "nitro-consent-modal",
        find: () => document.querySelector(UA),
        startSelectors: ["[data-ncmp-cmd='reject']"]
      }, {
        id: "google-consent",
        find: () => document.querySelector(".fc-consent-root"),
        startSelectors: [".fc-cta-do-not-consent", ".fc-cta-manage-options"]
      }],
      VA = "PadOverThirdParty",
      mb = new Set(EA.map((WW => WW.id))),
      xb = () => {
        const WW = EA.map((WW => {
            let {
              id: RW,
              find: MW,
              startSelectors: wW
            } = WW;
            return (0, HC.m)({
              id: RW,
              kind: "popup",
              getRoot: () => {
                const WW = MW(),
                  RW = WW ? ((WW, RW) => {
                    var MW;
                    for (const wW of RW) {
                      const RW = WW.querySelector(wW);
                      if (RW) return RW
                    }
                    return null !== (MW = [...WW.querySelectorAll("button")].find((WW => !WW.matches(".fc-cta-consent, [data-ncmp-cmd='save']")))) && void 0 !== MW ? MW : null
                  })(WW, wW) : null;
                if (WW && RW && !RW.hasAttribute("data-pad-default-focus")) {
                  for (const RW of WW.querySelectorAll("[data-pad-default-focus]")) RW.removeAttribute("data-pad-default-focus");
                  for (const RW of WW.querySelectorAll("[data-pad-hint-bar-avoid]")) RW.removeAttribute("data-pad-hint-bar-avoid");
                  RW.setAttribute("data-pad-default-focus", ""), ((WW, RW) => {
                    let MW = WW;
                    for (let wW = WW.parentElement; wW && RW.contains(wW) && !(wW.getBoundingClientRect().height >= window.innerHeight / 2); wW = wW.parentElement) MW = wW;
                    return MW
                  })(RW, WW).setAttribute("data-pad-hint-bar-avoid", "")
                }
                return WW
              },
              close: null,
              memoryKey: null
            })
          })),
          RW = document.documentElement,
          MW = AW.g.onFrame((() => {
            const WW = (0, TW.i)() ? wz() : null,
              MW = !!WW && (wW = WW.layer, mb.has(wW.id));
            var wW;
            RW.classList.contains(VA) !== MW && RW.classList.toggle(VA, MW)
          }));
        return () => {
          for (const RW of WW) RW();
          MW(), RW.classList.remove(VA)
        }
      },
      vb = "PadLargePointer",
      KA = () => {
        (0, UW.useEffect)((() => {
          const WW = (0, JW.h)(document.body),
            RW = nz.install(),
            MW = sA.install(),
            wW = xb();
          return () => {
            WW(), RW(), MW(), wW()
          }
        }), []);
        const {
          largePointer: WW
        } = (0, tR.s)(), RW = (0, YA.q)() && WW;
        return (0, UW.useEffect)((() => {
          if (RW) return document.documentElement.classList.add(vb), () => {
            document.documentElement.classList.remove(vb)
          }
        }), [RW]), (0, bR.createPortal)((0, mR.jsxs)(mR.Fragment, {
          children: [(0, mR.jsx)(cb, {}), (0, mR.jsx)(dA, {}), (0, mR.jsx)(hA, {})]
        }), document.body)
      };
    var uA = MW(7683),
      OA = MW(7702),
      nA = MW(7693);
    MW(7710);
    const GA = (WW, RW) => {
        const [MW, wW] = (0, UW.useState)(!1), [CW, zR] = (0, UW.useState)(null), AW = (0, UW.useRef)(null), bR = (0, UW.useCallback)((WW => {
          AW.current = WW, zR(WW)
        }), []), yR = (0, UW.useCallback)((() => {
          wW(!1), bR(null)
        }), [bR]), eW = (0, UW.useCallback)((() => {
          wW(!0)
        }), []), BW = (0, UW.useCallback)(((WW, RW) => {
          bR((0, nA.F)(WW, RW, AW.current))
        }), [bR]);
        (0, UW.useLayoutEffect)((() => (RW(MW), (0, JA.o)(WW, MW), NW.k.Sz(JA.h), () => {
          RW(!1), (0, JA.o)(WW, !1), NW.k.Sz(JA.h)
        })), [MW, WW, RW]), (0, Aw.f)("appManagerUpdated|activeInputDevice", (WW => {
          "gamepad" !== WW && yR()
        })), (0, Aw.f)("appManagerUpdated|gameState", (WW => {
          "inGame" !== WW && yR()
        }));
        const tR = () => {
          (0, wC.o)() && yR()
        };
        return (0, Aw.f)("appManagerUpdated|openEverythingMenuName", tR), (0, Aw.f)("appManagerUpdated|openInGameMenuName", tR), {
          open: MW,
          picked: CW,
          pickedRef: AW,
          show: eW,
          aim: BW,
          close: yR
        }
      },
      LA = WW => {
        let {
          className: RW,
          slotCount: MW,
          picked: wW,
          slotLabel: CW,
          renderSlot: zR,
          centre: AW
        } = WW;
        const bR = Array.from({
          length: MW
        }, ((WW, RW) => RW));
        return (0, mR.jsx)("div", {
          className: VW()("EmoteWheelOverlay PadRadialWheel", RW),
          children: (0, mR.jsxs)("div", {
            className: "EmoteWheel",
            style: {
              width: 2 * nA.s + "rem",
              height: 2 * nA.s + "rem"
            },
            children: [(0, mR.jsxs)("svg", {
              className: "EmoteWheelSvg",
              viewBox: `0 0 ${nA.p} ${nA.p}`,
              children: [bR.map((WW => (0, mR.jsx)("path", {
                d: (0, nA.t)(WW, MW, nA.e, nA.h, nA.l),
                className: VW()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: WW === wW
                }),
                "aria-label": CW(WW)
              }, WW))), (0, mR.jsx)("circle", {
                className: "EmoteWheelOuterRing",
                cx: nA.e,
                cy: nA.e,
                r: nA.l
              }), (0, mR.jsx)("circle", {
                className: "EmoteWheelInnerRing",
                cx: nA.e,
                cy: nA.e,
                r: nA.h
              }), null !== wW && (0, mR.jsx)("path", {
                className: "EmoteWheelWedgeOutline",
                d: (0, nA.t)(wW, MW, nA.e, nA.h, nA.l)
              })]
            }), bR.map((WW => {
              const RW = (0, nA.y)(WW, MW);
              return (0, mR.jsx)("div", {
                className: VW()("PadRadialWheelSlot SmallTextBold", {
                  PadRadialWheelSlotPicked: WW === wW
                }),
                style: {
                  left: `calc(50% + ${nA.b*Math.cos(RW)}rem)`,
                  top: `calc(50% + ${nA.b*Math.sin(RW)}rem)`
                },
                "aria-hidden": !0,
                children: zR(WW)
              }, WW)
            })), (0, mR.jsx)("div", {
              className: "EmoteWheelHint SmallTextBold",
              children: AW
            })]
          })
        })
      },
      HA = Gz.length,
      DA = () => {
        const {
          t: WW
        } = (0, CW.C)(), RW = GA("chat", fC.h), MW = (0, UW.useMemo)((() => Gz.map((RW => WW(RW)))), [WW]);
        return (0, Aw.f)(fC.g, (() => {
          RW.open || (0, uA.g)() || (0, OA.s)() || "inGame" !== yR.b.get("gameState") || (0, wC.o)() || !(0, Sw.e)() || RW.show()
        })), (0, Aw.f)(fC.c, (WW => {
          RW.open && RW.aim(WW, HA)
        })), (0, Aw.f)(fC.f, (() => {
          var WW;
          if (!RW.open) return;
          const wW = RW.pickedRef.current;
          null !== wW ? Lz.claim(performance.now()) && (RW.close(), null === (WW = (0, Sw.e)()) || void 0 === WW || WW.sendLine(MW[wW])) : RW.close()
        })), (0, Aw.f)(fC.d, RW.close), RW.open ? (0, mR.jsx)(LA, {
          className: "QuickChatWheel",
          slotCount: HA,
          picked: RW.picked,
          slotLabel: WW => MW[WW],
          renderSlot: WW => MW[WW],
          centre: null !== RW.picked ? MW[RW.picked] : WW("controller:quickChatPick")
        }) : null
      },
      qb = () => {
        const {
          t: WW
        } = (0, CW.C)(), RW = GA("actionButton", OA.w), [MW, wW] = (0, UW.useState)([]);
        if ((0, Aw.f)(OA.n, (WW => {
            RW.open || (0, uA.g)() || (0, fC.b)() || "inGame" !== yR.b.get("gameState") || (0, wC.o)() || (wW(WW), RW.show())
          })), (0, Aw.f)(OA.d, (WW => {
            RW.open && RW.aim(WW, MW.length)
          })), (0, Aw.f)(OA.j, (() => {
            if (!RW.open) return;
            const WW = RW.pickedRef.current;
            RW.close(), null !== WW && NW.k.Sz(OA.r, MW[WW])
          })), (0, Aw.f)(OA.h, RW.close), !RW.open) return null;
        const zR = null !== RW.picked ? MW[RW.picked] : null;
        return (0, mR.jsx)(LA, {
          className: "ActionWheel",
          slotCount: MW.length,
          picked: RW.picked,
          slotLabel: RW => {
            const wW = MW[RW];
            return "reload" === wW.kind ? WW("controller:gameplayReload") : "customButton" === wW.kind ? wW.description || wW.icon : "touchButton" === wW.kind && "string" === typeof wW.label ? wW.label : ""
          },
          renderSlot: WW => (0, mR.jsx)(gC, {
            action: MW[WW]
          }),
          centre: zR ? (0, mR.jsx)(gC, {
            action: zR
          }) : WW("controller:actionWheelPick")
        })
      };
    var ZA = MW(116);
    const SA = () => ((0, UW.useEffect)((() => {
        var WW, RW;
        const MW = (0, JW.h)(document.getElementById("root")),
          wW = (0, TW.c)(),
          CW = (() => {
            const WW = [NW.k.subscribe(nM.e, (() => {
                DM("blockBreak")
              })), NW.k.subscribe("damagedByOtherPlayer", (() => {
                DM("damage")
              })), NW.k.subscribe("yourAttackHit", (WW => {
                let {
                  hitSelf: RW
                } = WW;
                RW || DM("hit")
              }))],
              RW = AW.g.onActivePadChanged((WW => {
                WW && DM("connect")
              }));
            return () => {
              for (const RW of WW) NW.k.unsubscribe(RW);
              RW()
            }
          })(),
          zR = (() => {
            const WW = new Mw({
              getVisitId: Rw.e,
              peekVisitId: Rw.peekVisitSessionId,
              readReportedVisitId: () => {
                const WW = Ww.j.getItem(ww);
                return "string" === typeof WW ? WW : null
              },
              writeReportedVisitId: WW => {
                Ww.j.setItem(ww, WW)
              },
              isPadActive: TW.i,
              getPadFamily: () => {
                var WW, RW;
                return null !== (WW = null === (RW = AW.g.getActivePad()) || void 0 === RW ? void 0 : RW.family) && void 0 !== WW ? WW : null
              },
              canReport: ZM.k,
              getInputType: SM.c,
              Mw: ZM.q
            });
            let RW = 0,
              MW = null;
            const wW = CW => {
                null === MW && ("notReady" !== WW.check(CW) || null !== MW || RW >= 20 || (RW++, MW = setTimeout((() => {
                  MW = null, wW(!1)
                }), 3e3)))
              },
              CW = NW.k.subscribe("appManagerUpdated|activeInputDevice", (() => {
                wW(!0)
              })),
              zR = (0, Rw.l)((() => {
                RW = 0, wW(!0)
              }));
            return () => {
              NW.k.unsubscribe(CW), zR(), null !== MW && clearTimeout(MW)
            }
          })(),
          bR = AW.g.onFrame(((WW, RW) => {
            const MW = (0, TW.m)(WW);
            BW.c.dispatch(WW, RW, MW)
          }));
        let eW = null !== (WW = null === (RW = AW.g.getActivePad()) || void 0 === RW ? void 0 : RW.family) && void 0 !== WW ? WW : null;
        const gR = AW.g.onActivePadChanged((WW => {
            var RW, MW;
            (BW.c.reset(), (0, TW.t)(), NW.k.Sz(AW.e, WW), (null !== (RW = null === WW || void 0 === WW ? void 0 : WW.family) && void 0 !== RW ? RW : null) !== eW) && (eW = null !== (MW = null === WW || void 0 === WW ? void 0 : WW.family) && void 0 !== MW ? MW : null, NW.k.Sz(tR.c, (0, tR.i)()));
            !WW && (0, TW.i)() && (0, TW.v)(yR.b.get("isTouchScreen") ? "touch" : "keyboardMouse")
          })),
          iR = () => {
            "visible" !== document.visibilityState && BW.c.clear()
          },
          YW = () => {
            BW.c.clear()
          };
        document.addEventListener("visibilitychange", iR), window.addEventListener("blur", YW), AW.g.start(), (0, qw.i)();
        const PW = null;
        return () => {
          MW(), wW(), CW(), zR(), bR(), gR(), document.removeEventListener("visibilitychange", iR), window.removeEventListener("blur", YW), AW.g.stop(), null === PW || void 0 === PW || PW()
        }
      }), []), (0, mR.jsxs)("div", {
        className: "ControllerRoot",
        children: [(0, mR.jsx)(lw, {}), (0, mR.jsx)(aC, {}), (0, mR.jsx)(sw, {}), (0, mR.jsx)(gb, {}), (0, mR.jsx)(KA, {}), (0, mR.jsx)(DA, {}), (0, mR.jsx)(qb, {})]
      })),
      Wb = () => ZA.featureFlags.useControllerSupport ? (0, mR.jsx)(SA, {}) : null;
    var Rb = MW(7097),
      Mb = MW(7716);
    const wb = new Set(qw.h),
      Cb = WW => `${Mb.n}${(0,tR.m)()}/${WW}`,
      zy = WW => {
        if (!(0, Mb.m)(WW)) return null;
        const [RW, MW] = WW.slice(Mb.n.length).split("/");
        return (0, Rb.f)(RW) && wb.has(MW) ? (0, qw.f)(RW, MW) : null
      };
    var Ab = MW(7720);
    const by = () => {
        const {
          t: WW
        } = (0, CW.C)(), RW = (0, TW.z)(), {
          gameState: MW,
          isUiHidden: wW
        } = (0, yR.i)(["gameState", "isUiHidden"]), {
          hideButtonHints: zR,
          sneakMode: AW
        } = (0, tR.s)(), [bR, NW] = (0, UW.useState)(Ab.c);
        return (0, Aw.f)(ow.t, NW), RW && !wW && "inGame" === MW && bR ? (0, mR.jsxs)("div", {
          className: "PadSneakChip SmallTextBold",
          children: [!zR && (0, mR.jsx)(tC, {
            glyph: (0, eW.g)("toggle" === AW ? "sneak" : "sneakToggle")
          }), (0, mR.jsx)("span", {
            children: WW("controller:gameplaySneaking")
          })]
        }) : null
      },
      yy = 12,
      Nb = WW => {
        let {
          trigger: RW,
          className: MW,
          children: wW
        } = WW;
        const CW = (0, UW.useRef)(null);
        return (0, UW.useEffect)((() => {
          let WW = 0;
          const MW = XW(RW, "y"),
            wW = () => {
              WW = requestAnimationFrame(wW);
              const zR = CW.current;
              if (!zR || null === RW || void 0 === RW || !RW.isConnected) return;
              const {
                left: AW,
                top: bR
              } = function(WW, RW, MW) {
                let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                const zR = WW.left + WW.width / 2,
                  AW = Math.max(yy, MW.width - yy - RW.width),
                  bR = Math.min(Math.max(zR - RW.width / 2, yy), AW),
                  yR = MW.height - wW;
                let NW = 0,
                  eW = yR;
                if (CW) {
                  const WW = Math.max(0, CW.top),
                    wW = Math.min(yR, CW.bottom);
                  wW - WW >= Math.max(MW.height / 2, RW.height + 24) && (NW = WW, eW = wW)
                }
                const BW = WW.top + WW.height / 2 < (NW + eW) / 2 ? eW - yy - RW.height : NW + yy;
                return {
                  left: bR,
                  top: Math.max(yy, BW)
                }
              }(RW.getBoundingClientRect(), {
                width: zR.offsetWidth,
                height: zR.offsetHeight
              }, {
                width: window.innerWidth,
                height: window.innerHeight
              }, parseFloat(document.documentElement.style.getPropertyValue(lA)) || 0, null !== MW && void 0 !== MW && MW.isConnected ? MW.getBoundingClientRect() : null);
              zR.style.transform = `translate3d(${Math.round(AW)}px, ${Math.round(bR)}px, 0)`, zR.style.visibility = "visible"
            };
          return wW(), () => {
            cancelAnimationFrame(WW)
          }
        }), [RW]), (0, mR.jsx)("div", {
          ref: CW,
          className: MW,
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            visibility: "hidden"
          },
          children: wW
        })
      };
    var eb = MW(904),
      Bb = MW(7728),
      ty = MW(1255),
      Tb = MW(7733),
      gy = MW(7736);
    const iy = {
        shop: {
          icon: "cart-shopping",
          labelKey: "controller:menusShop"
        },
        tasks: {
          icon: "bars",
          labelKey: "controller:menusTasks"
        },
        invite: {
          icon: "user-plus",
          labelKey: "controller:menusInvite"
        },
        Cw: {
          icon: "arrow-left",
          labelKey: "settingsMenu:exitGame"
        }
      },
      Yb = () => {
        const {
          t: WW
        } = (0, CW.C)(), RW = (0, TW.z)(), MW = (0, Bb.b)(), wW = (0, Xw.h)("_tasks"), zR = (0, Xw.h)("_availableLeaderboards");
        if (!RW) return null;
        const AW = (WW => {
          let {
            hasShop: RW,
            hasTasksOrLeaderboards: MW,
            canInvite: wW
          } = WW;
          const CW = [];
          return RW && CW.push("shop"), MW && CW.push("tasks"), wW && CW.push("invite"), CW.push("Cw"), CW
        })({
          hasShop: MW,
          hasTasksOrLeaderboards: !(!wW && !zR),
          canInvite: !!ZA.featureFlags.canUseInviteLinks
        });
        return (0, mR.jsx)("div", {
          className: "PadLobbyShortcuts",
          children: AW.map((RW => {
            const {
              icon: MW,
              labelKey: wW
            } = iy[RW], CW = "Cw" === RW ? ty.E : ty.h;
            return (0, mR.jsx)(CW, {
              className: "PadLobbyShortcut",
              onClick: () => {
                (WW => {
                  switch (WW) {
                    case "shop":
                      return NW.k.Sz(gy.k), void yR.b.set({
                        openEverythingMenuName: MC.t.SHOP
                      });
                    case "tasks":
                      return void NW.k.Sz("toggleMenu", "retentionFeatures");
                    case "invite":
                      return void NW.k.Sz("toggleMenu", "inviteLink");
                    case "Cw":
                      (0, Tb.e)()
                  }
                })(RW)
              },
              children: (0, mR.jsxs)("div", {
                className: "PadLobbyShortcutInner",
                children: [(0, mR.jsx)(eb.e, {
                  name: MW
                }), (0, mR.jsx)("span", {
                  children: WW(wW)
                })]
              })
            }, RW)
          }))
        })
      };
    var Jb = MW(1578);
    const Pb = gR.w,
      Ib = ["forward", "backward", "left", "right", "sprint"],
      ob = WW => WW.ctrlKey || WW.altKey || "Alt" === WW.key || "ArrowUp" === WW.key || "ArrowDown" === WW.key || "Tab" === WW.code || "/" === WW.key || "Slash" === WW.code;
    class lb {
      constructor() {
        this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(gR.S).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
      }
      setArmed(WW) {
        this.armed = WW
      }
      blocksGameplay() {
        return this.armed || this.consumeNextFrame
      }
      onKeyDown(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !this.armed || RW ? !WW.repeat && this.swallowedKeys.delete(WW.code) ? {
          swallow: !1,
          continues: !1
        } : {
          swallow: this.swallowedKeys.has(WW.code),
          continues: !1
        } : "Escape" === WW.key || WW.repeat && !this.swallowedKeys.has(WW.code) ? {
          swallow: !1,
          continues: !1
        } : MW ? {
          swallow: !1,
          continues: !0
        } : (this.swallowedKeys.add(WW.code), {
          swallow: !0,
          continues: (0, TW.f)(WW)
        })
      }
      onKeyUp(WW) {
        return this.swallowedKeys.delete(WW.code)
      }
      forgetKeys() {
        this.swallowedKeys.clear()
      }
      onPadFrame(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          wW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const CW = (0, gR.p)(WW.values, this.previousHeld),
          zR = null === MW ? -1 : (0, gR.i)(MW),
          AW = zR >= 0 && CW[zR] && !this.previousHeld[zR],
          bR = CW.some(((WW, RW) => WW && !this.previousHeld[RW] && RW !== zR)),
          yR = Math.hypot(WW.leftStick.x, WW.leftStick.y) >= Pb,
          NW = Math.hypot(WW.rightStick.x, WW.rightStick.y) >= Pb,
          eW = yR && !this.leftStickWasPressed || NW && !this.rightStickWasPressed;
        this.previousHeld = CW, this.leftStickWasPressed = yR, this.rightStickWasPressed = NW;
        let BW = !1;
        this.consumeNextFrame && (this.consumeNextFrame = !1, BW = !0);
        const tR = !RW && AW && !wW,
          TW = !tR && this.armed && !RW && (bR || eW);
        return (tR || TW) && (this.consumeNextFrame = !0, this.consumeAfterContinue = TW, BW = !0), {
          continues: TW,
          back: tR,
          consumeHeld: BW
        }
      }
      consumeLeavesMoveStick() {
        return this.consumeAfterContinue
      }
    }
    const Fb = new Set([...Jb.j, ...Jb.x]),
      fb = WW => ((WW, RW, MW) => {
        const wW = Object.keys(RW).filter((wW => !MW.has(wW) && RW[wW].includes(WW)));
        return wW.length > 0 && wW.every((WW => Ib.includes(WW)))
      })(WW, Jb.q, Fb),
      Qb = (WW, RW, MW) => {
        const wW = new lb,
          CW = WW => {
            if (!WW.isTrusted) return;
            const {
              swallow: MW,
              continues: CW
            } = wW.onKeyDown(WW, !(0, TW.E)(WW) || (0, OM.i)() || (0, wC.o)(), fb(WW.code));
            MW && (WW.stopImmediatePropagation(), ob(WW) && WW.preventDefault()), CW && ((0, TW.v)("keyboardMouse"), RW())
          },
          zR = WW => {
            WW.isTrusted && wW.onKeyUp(WW) && (WW.stopImmediatePropagation(), ob(WW) && WW.preventDefault())
          },
          bR = () => {
            wW.forgetKeys()
          };
        window.addEventListener("keydown", CW, !0), window.addEventListener("keyup", zR, !0), window.addEventListener("blur", bR);
        const yR = AW.g.onFrame((WW => {
            const CW = BW.c.getActiveConsumerName(),
              zR = MW(),
              AW = zR ? (0, eW.g)("menuBack") : null,
              bR = null !== CW && "gameplay" !== CW,
              {
                continues: yR,
                back: NW,
                consumeHeld: gR
              } = wW.onPadFrame(WW, bR, AW, (0, TW.j)(WW));
            if (gR) {
              const WW = (0, tR.i)().swapSticks ? "right" : "left";
              BW.c.consumeAllHeld(wW.consumeLeavesMoveStick() ? WW : null)
            }
            NW ? null === zR || void 0 === zR || zR() : yR && RW()
          })),
          NW = (0, OM.l)(`pressToContinue:${WW}`, (() => wW.blocksGameplay()));
        return {
          setArmed: WW => {
            wW.setArmed(WW)
          },
          dispose: () => {
            window.removeEventListener("keydown", CW, !0), window.removeEventListener("keyup", zR, !0), window.removeEventListener("blur", bR), yR(), NW()
          }
        }
      };
    var ry = MW(3965),
      cy = MW(2558),
      Xb = MW(2273),
      jy = MW(7106);
    const ky = WW => {
        let {
          text: RW
        } = WW;
        return (0, mR.jsx)("div", {
          className: "ControllerSettingsHeading",
          children: RW
        })
      },
      ay = WW => {
        let {
          label: RW,
          hint: MW,
          options: wW,
          value: zR,
          onChange: AW
        } = WW;
        const {
          t: bR
        } = (0, CW.C)();
        return (0, mR.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, mR.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: [(0, mR.jsxs)("div", {
              className: "ControllerChoiceText",
              children: [(0, mR.jsx)("div", {
                className: "SliderText",
                children: RW
              }), MW && (0, mR.jsx)("div", {
                className: "ControllerSettingsHint",
                children: MW
              })]
            }), (0, mR.jsx)(Xb.b, {
              options: wW.map((WW => ({
                label: "label" in WW ? WW.label : bR(WW.labelKey),
                value: WW.value
              }))),
              value: zR,
              onChange: WW => {
                AW(WW.value)
              }
            })]
          })
        })
      },
      sb = WW => {
        let {
          settingKey: RW,
          label: MW,
          range: wW,
          format: CW
        } = WW;
        const zR = (0, tR.s)();
        return (0, mR.jsx)(ry.g, {
          name: MW,
          min: wW.min,
          max: wW.max,
          step: wW.step,
          padStep: wW.step,
          initValue: zR[RW],
          format: CW,
          onChange: WW => {
            (0, tR.q)({
              [RW]: (0, jy.t)(WW, wW)
            })
          }
        })
      };
    var db = MW(7738),
      pb = MW(7740);
    const hb = WW => WW instanceof DOMException && ("SecurityError" === WW.name || "NotAllowedError" === WW.name),
      Ub = WW => {
        const [RW] = [...WW.controllers].sort(((WW, RW) => pb.m[WW] - pb.m[RW]));
        return pb.l[RW]
      },
      Eb = WW => {
        (0, db.d)().allowPhoneMotion().catch((RW => {
          WW && hb(RW) ? WW() : console.warn("Could not enable the motion sensor", RW)
        }))
      },
      Vb = {
        waiting: "controller:settingsGyroPhoneWaiting",
        noSensor: "controller:settingsGyroPhoneNoSensor",
        on: "controller:settingsGyroPhoneOn",
        denied: "controller:settingsGyroPhoneDenied"
      },
      my = WW => {
        let {
          status: RW
        } = WW;
        const {
          t: MW
        } = (0, CW.C)(), [wW, zR] = (0, UW.useState)(null), AW = `${RW.controllers.join(",")}|${RW.phoneMotion}`;
        (0, UW.useEffect)((() => {
          zR(null)
        }), [AW]);
        const bR = () => {
          (0, db.d)().connectController().then((WW => {
            zR(WW > 0 ? "openFailed" : null)
          })).catch((WW => {
            hb(WW) ? zR("needsClick") : console.warn("Could not connect motion controller", WW)
          }))
        };
        if (RW.hidSupported) {
          let WW = MW("controller:settingsGyroConnectHint");
          return "needsClick" === wW ? WW = MW("controller:settingsGyroConnectNeedsClick") : "openFailed" === wW ? WW = MW("controller:settingsGyroOpenFailed") : RW.controllers.length > 0 && (WW = MW("controller:settingsGyroConnected", {
            name: Ub(RW)
          })), (0, mR.jsx)("div", {
            className: "SettingBox ControllerChoiceSetting",
            children: (0, mR.jsxs)("div", {
              className: "ControllerChoiceRow",
              children: [(0, mR.jsx)("div", {
                className: "ControllerSettingsHint",
                children: WW
              }), (0, mR.jsx)(ty.h, {
                onClick: bR,
                children: MW("controller:settingsGyroConnect")
              })]
            })
          })
        }
        if ("needsPermission" === RW.phoneMotion) return (0, mR.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, mR.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: ["needsTap" === wW && (0, mR.jsx)("div", {
              className: "ControllerSettingsHint",
              children: MW("controller:settingsGyroAllowNeedsTap")
            }), (0, mR.jsx)(ty.h, {
              onClick: () => {
                Eb((() => {
                  zR("needsTap")
                }))
              },
              children: MW("controller:settingsGyroAllowMotion")
            })]
          })
        });
        const yR = Vb[RW.phoneMotion];
        return yR ? (0, mR.jsx)("div", {
          className: "ControllerSettingsHint",
          children: MW(yR)
        }) : null
      },
      xy = () => {
        const {
          t: WW
        } = (0, CW.C)(), RW = (0, tR.s)(), MW = (0, db.h)(), wW = (0, TW.C)(), zR = !MW.hidSupported && MW.phoneSupported && !MW.padConnected, AW = (MW.hidSupported || MW.phoneSupported) && !zR, bR = (0, eW.g)("pause");
        return (0, mR.jsxs)(mR.Fragment, {
          children: [(0, mR.jsx)(ky, {
            text: WW("controller:settingsGyro")
          }), zR && (0, mR.jsx)("div", {
            className: "ControllerSettingsHint",
            children: WW("controller:settingsGyroPhoneNeedsController")
          }), !AW && !zR && (0, mR.jsx)("div", {
            className: "ControllerSettingsHint",
            children: WW(MW.hidBlocked || MW.phoneBlocked ? "controller:settingsGyroBlocked" : "controller:settingsGyroUnsupported")
          }), AW && (0, mR.jsx)(ry.b, {
            label: WW(MW.hidSupported ? "controller:settingsGyroToggle" : "controller:settingsGyroTogglePhone"),
            checked: RW.gyroAiming,
            onClick: WW => {
              var RW, MW;
              (0, tR.q)({
                gyroAiming: WW
              });
              const wW = null === (RW = null === (MW = navigator.userActivation) || void 0 === MW ? void 0 : MW.isActive) || void 0 === RW || RW;
              if (!WW || !wW) return;
              const CW = (0, db.d)(),
                zR = CW.getStatus();
              zR.hidSupported ? CW.connectControllerIfNoneGranted().catch((WW => {
                console.warn("Motion controller picker unavailable", WW)
              })) : "needsPermission" === zR.phoneMotion && Eb()
            },
            circleInfoText: WW(MW.hidSupported ? "controller:settingsGyroToggleInfo" : "controller:settingsGyroToggleInfoPhone")
          }), AW && MW.hidSupported && (0, mR.jsx)("div", {
            className: "ControllerSettingsHint",
            children: WW("controller:settingsGyroSteamHint")
          }), AW && RW.gyroAiming && (0, mR.jsxs)(mR.Fragment, {
            children: [(0, mR.jsx)(my, {
              status: MW
            }), (0, mR.jsx)(sb, {
              settingKey: "gyroSensitivity",
              label: WW("controller:settingsGyroSensitivity"),
              range: jy.P,
              format: jy.H
            }), (0, mR.jsx)(ay, {
              label: WW("controller:settingsGyroActivation"),
              hint: "aiming" === RW.gyroActivation && (0, mR.jsx)(cy.c, {
                text: WW("controller:settingsGyroAimingHint", {
                  button: cy.f
                }),
                glyph: (0, eW.g)("use")
              }),
              options: jy.O,
              value: RW.gyroActivation,
              onChange: WW => {
                (0, tR.q)({
                  gyroActivation: WW
                })
              }
            }), "button" === RW.gyroActivation && (0, mR.jsx)(ay, {
              label: WW("controller:settingsGyroButton"),
              hint: WW("controller:settingsGyroButtonHint"),
              options: jy.p.filter((WW => WW !== bR || WW === RW.gyroButton)).map((WW => ({
                label: Bw(wW, WW),
                value: WW
              }))),
              value: RW.gyroButton,
              onChange: WW => {
                (0, tR.q)({
                  gyroButton: WW
                })
              }
            })]
          })]
        })
      };
    var vy = MW(1691);
    const Kb = () => {
      const {
        t: WW
      } = (0, CW.C)(), RW = (0, tR.s)(), MW = (0, TW.C)();
      return (0, mR.jsxs)(mR.Fragment, {
        children: [(0, mR.jsx)(ky, {
          text: WW("controller:settingsAccessibility")
        }), (0, mR.jsx)(ry.b, {
          label: WW("controller:settingsSwapConfirmBack"),
          checked: (0, eW.K)(RW.swapConfirmBack, MW),
          onClick: WW => {
            (0, tR.q)({
              swapConfirmBack: WW === (0, eW.K)(null, MW) ? null : WW
            }), vy.c.showMessage({
              translationKey: "controller:settingsSwapToast"
            })
          },
          circleInfoText: WW("controller:settingsSwapConfirmBackInfo")
        }), (0, mR.jsx)(ay, {
          label: WW("controller:settingsButtonRepeat"),
          hint: WW("controller:settingsButtonRepeatHint"),
          options: jy.m,
          value: RW.buttonRepeat,
          onChange: WW => {
            (0, tR.q)({
              buttonRepeat: WW
            })
          }
        }), (0, mR.jsx)(ay, {
          label: WW("controller:settingsTapHoldTime"),
          hint: WW("controller:settingsTapHoldTimeHint"),
          options: jy.sb,
          value: RW.tapHoldTime,
          onChange: WW => {
            (0, tR.q)({
              tapHoldTime: WW
            })
          }
        }), (0, mR.jsx)(ay, {
          label: WW("controller:settingsEmoteButton"),
          hint: WW("wheel" === RW.emoteButton ? "controller:settingsEmoteButtonWheelHint" : "controller:settingsEmoteButtonTapHoldHint"),
          options: jy.C,
          value: RW.emoteButton,
          onChange: WW => {
            (0, tR.q)({
              emoteButton: WW
            })
          }
        }), (0, mR.jsx)(ay, {
          label: WW("controller:settingsAttackMode"),
          hint: WW("toggle" === RW.attackMode ? "controller:settingsAttackToggleHint" : "controller:settingsAttackHoldHint"),
          options: jy.i,
          value: RW.attackMode,
          onChange: WW => {
            (0, tR.q)({
              attackMode: WW
            })
          }
        }), (0, mR.jsx)(ry.b, {
          label: WW("controller:settingsLargePointer"),
          checked: RW.largePointer,
          onClick: WW => {
            (0, tR.q)({
              largePointer: WW
            })
          },
          circleInfoText: WW("controller:settingsLargePointerInfo")
        })]
      })
    };
    var ub = MW(7742);
    const Ob = new class {
        constructor(WW) {
          this.router = WW, this.current = null
        }
        claim(WW, RW) {
          const MW = this.current;
          MW && (this.current = null, MW.release(), MW.onTakenOver());
          const wW = this.router.register({
              ...WW,
              name: "capture"
            }),
            CW = {
              release: wW,
              onTakenOver: RW
            };
          return this.current = CW, () => {
            this.current === CW && (this.current = null), wW()
          }
        }
      }(BW.c),
      nb = WW => {
        (0, UW.useEffect)((() => {
          if (!WW) return;
          const RW = WW();
          let MW = !1;
          const wW = () => {
              MW || (MW = !0, RW.onEnd())
            },
            CW = Ob.claim({
              isActive: () => !MW,
              onFrame: WW => {
                RW.onFrame(WW, wW)
              }
            }, wW),
            zR = void 0 === RW.timeoutMs ? void 0 : window.setTimeout(wW, RW.timeoutMs),
            AW = WW => {
              "Escape" === WW.key && (WW.preventDefault(), WW.stopPropagation(), wW())
            };
          return window.addEventListener("keydown", AW, !0), () => {
            MW = !0, CW(), window.clearTimeout(zR), window.removeEventListener("keydown", AW, !0)
          }
        }), [WW])
      },
      Gb = WW => {
        let {
          row: RW,
          capturing: MW,
          onCapture: wW,
          holdFillRef: zR,
          onRebind: AW,
          swapped: bR
        } = WW;
        const {
          t: yR
        } = (0, CW.C)();
        if ("fixed" === RW.kind) return (0, mR.jsx)("div", {
          className: "ControlRow PadControlRow PadControlRowFixed",
          children: (0, mR.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, mR.jsx)("div", {
              className: "ControlName",
              children: yR(RW.labelKey)
            }), (0, mR.jsx)("div", {
              className: "ControlBindingsContainer",
              children: (0, mR.jsx)("div", {
                className: "ControlBindingsList",
                children: (0, mR.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  children: (0, mR.jsx)(tC, {
                    glyph: "move" === RW.stick ? (0, eW.r)() : (0, eW.o)()
                  })
                })
              })
            })]
          })
        });
        const {
          action: NW
        } = RW, BW = (0, eW.g)(NW), tR = (0, eW.k)(NW), TW = BW !== tR && (0, eW.c)(NW, tR);
        return (0, mR.jsxs)("div", {
          className: VW()("ControlRow PadControlRow", {
            Capturing: MW
          }),
          children: [(0, mR.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, mR.jsx)("div", {
              className: "ControlName",
              children: yR((0, jy.M)(NW))
            }), (0, mR.jsxs)("div", {
              className: "ControlBindingsContainer",
              children: [!MW && (0, mR.jsxs)("div", {
                className: "ControlBindingsList",
                children: [(0, mR.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    wW(NW)
                  },
                  children: (0, mR.jsx)(tC, {
                    glyph: BW
                  })
                }), TW && (0, mR.jsx)("div", {
                  className: "ControlBinding PadBindingReset",
                  title: yR("controller:settingsReset"),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    AW(NW, tR)
                  },
                  children: (0, mR.jsx)(eb.e, {
                    name: "arrows-rotate"
                  })
                })]
              }), MW && (0, mR.jsxs)("div", {
                className: "ControlBindingAddInput",
                children: [(0, mR.jsxs)("div", {
                  className: "PadCaptureBox",
                  children: [(0, mR.jsx)("span", {
                    children: yR("controller:settingsCapturePrompt")
                  }), (0, mR.jsx)("div", {
                    ref: zR,
                    className: "PadCaptureHoldFill"
                  })]
                }), (0, mR.jsx)("div", {
                  className: "ControlBindingAddCancel",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    wW(null)
                  },
                  children: "\xd7"
                })]
              }), MW && (0, mR.jsx)("div", {
                className: "PadCaptureHint",
                children: (0, mR.jsx)(cy.c, {
                  text: yR((0, eW.c)(NW, (0, eW.g)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
                    button: cy.f
                  }),
                  glyph: (0, eW.g)("menuBack")
                })
              })]
            })]
          }), bR.map((WW => (0, mR.jsx)("div", {
            className: "ControlRowWarning PadSwapNotice",
            children: (0, mR.jsx)(cy.c, {
              text: yR("controller:settingsSwapNotice", {
                action: yR((0, jy.M)(WW)),
                button: cy.f
              }),
              glyph: (0, eW.g)(WW)
            })
          }, WW))), MW && (0, mR.jsx)("div", {
            className: "PadCaptureTimer",
            style: {
              animationDuration: `${jy.s}ms`
            }
          })]
        })
      },
      Lb = [],
      Hb = WW => {
        let {
          layoutSetting: RW
        } = WW;
        const {
          t: MW
        } = (0, CW.C)(), wW = (0, tR.s)();
        (0, TW.C)();
        const zR = (0, UW.useRef)(null),
          [AW, bR] = (0, UW.useState)(null),
          yR = (0, UW.useCallback)(((WW, RW) => {
            const MW = (0, tR.i)().zC;
            (0, eW.E)(WW, RW);
            const wW = (0, eW.v)(MW, WW);
            bR(wW.length > 0 ? {
              action: WW,
              swapped: wW
            } : null)
          }), []),
          [NW, iR] = ((WW, RW) => {
            const [MW, wW] = (0, UW.useState)(null), CW = (0, UW.useMemo)((() => MW ? () => {
              const CW = (0, eW.g)("menuBack"),
                zR = new jy.d(CW, (0, eW.g)("menuConfirm"), (WW => (0, eW.c)(MW, WW)));
              return {
                onFrame: (wW, AW) => {
                  var bR;
                  const yR = wW.frame.timestampMs,
                    NW = zR.update({
                      ...wW,
                      isDown: WW => (0, gR.G)(wW.frame.values, WW)
                    }, yR);
                  null === (bR = WW.current) || void 0 === bR || bR.style.setProperty("width", 100 * zR.getBindHoldProgress(yR) + "%"), NW && ("bind" === NW.kind ? (BW.c.consumeButton(NW.button), RW(MW, NW.button)) : BW.c.consumeButton(CW), AW())
                },
                onEnd: () => {
                  wW(null)
                },
                timeoutMs: jy.s
              }
            } : null), [MW, WW, RW]);
            return nb(CW), [MW, wW]
          })(zR, yR),
          YW = WW => {
            WW && bR(null), iR(WW)
          };
        (0, UW.useEffect)((() => {
          if (!AW) return;
          const WW = window.setTimeout((() => {
            bR(null)
          }), jy.pb);
          return () => {
            window.clearTimeout(WW)
          }
        }), [AW]);
        const JW = !wW.swapSticks && 0 === Object.keys(wW.zC).length;
        return (0, mR.jsxs)("div", {
          className: "ControlsContainer PadControlsContainer",
          children: [(0, mR.jsx)("div", {
            className: "SliderText",
            children: MW("controller:settingsRemap")
          }), (0, mR.jsx)("div", {
            className: "ControllerSettingsHint",
            children: MW("controller:settingsRemapHint")
          }), (0, mR.jsx)(ty.E, {
            className: "ResetBindingsButton PadResetAllButton",
            disabled: JW,
            onClick: () => {
              YW(null), bR(null), (0, eW.G)()
            },
            children: MW("controller:settingsResetAll")
          }), RW, jy.kb.map(((WW, RW) => (0, mR.jsx)(ub.d, {
            title: MW(WW.titleKey),
            defaultOpen: 0 === RW,
            children: WW.rows.map((WW => (0, mR.jsx)(Gb, {
              row: WW,
              capturing: "action" === WW.kind && WW.action === NW,
              onCapture: YW,
              holdFillRef: zR,
              onRebind: yR,
              swapped: "action" === WW.kind && (null === AW || void 0 === AW ? void 0 : AW.action) === WW.action ? AW.swapped : Lb
            }, "action" === WW.kind ? WW.action : WW.labelKey)))
          }, WW.titleKey)))]
        })
      },
      Db = WW => {
        let {
          deadzone: RW,
          dotRef: MW,
          labelKey: wW
        } = WW;
        const {
          t: zR
        } = (0, CW.C)();
        return (0, mR.jsxs)("div", {
          className: "ControllerTesterStick",
          children: [(0, mR.jsxs)("div", {
            className: "ControllerTesterStickCircle",
            children: [(0, mR.jsx)("div", {
              className: "ControllerTesterDeadzone",
              style: {
                width: 100 * RW + "%",
                height: 100 * RW + "%"
              }
            }), (0, mR.jsx)("div", {
              ref: MW,
              className: "ControllerTesterDot"
            })]
          }), (0, mR.jsx)("div", {
            className: "ControllerTesterStickLabel",
            children: zR(wW)
          })]
        })
      },
      qy = (WW, RW, MW, wW) => {
        var CW;
        WW && (WW.style.left = 50 + 50 * Math.max(-1, Math.min(1, RW.x)) + "%", WW.style.top = 50 + 50 * Math.max(-1, Math.min(1, RW.y)) + "%", null === (CW = WW.parentElement) || void 0 === CW || CW.classList.toggle("Active", wW || Math.hypot(RW.x, RW.y) > MW))
      },
      Zb = WW => {
        const RW = {
            deadzone: WW.moveDeadzone,
            labelKey: "controller:settingsActionMove"
          },
          MW = {
            deadzone: WW.lookDeadzone,
            labelKey: "controller:settingsActionLook"
          };
        return WW.swapSticks ? {
          left: MW,
          right: RW
        } : {
          left: RW,
          right: MW
        }
      },
      Sb = () => {
        const {
          t: WW
        } = (0, CW.C)(), RW = (() => {
          const [WW, RW] = (0, UW.useState)((() => AW.g.getActivePad()));
          return (0, Aw.f)(AW.e, (() => {
            RW(AW.g.getActivePad())
          })), WW
        })(), MW = Zb((0, tR.s)()), wW = (0, UW.useRef)(null), zR = (0, UW.useRef)(null), bR = (0, UW.useRef)([]), yR = (0, UW.useRef)(null), NW = (0, UW.useRef)(null), [TW, iR] = (WW => {
          const [RW, MW] = (0, UW.useState)(!1), wW = (0, UW.useMemo)((() => RW ? () => {
            const RW = (0, eW.g)("menuBack"),
              wW = new jy.f;
            return {
              onFrame: (MW, CW) => {
                var zR;
                const AW = wW.update({
                  pressed: MW.wasPressed(RW),
                  mM: MW.isHeld(RW)
                }, MW.frame.timestampMs);
                null === (zR = WW.current) || void 0 === zR || zR.style.setProperty("width", 100 * AW + "%"), AW >= 1 && (BW.c.consumeButton(RW), CW())
              },
              onEnd: () => {
                MW(!1)
              }
            }
          } : null), [RW, WW]);
          return nb(wW), [RW, MW]
        })(zR);
        (0, UW.useEffect)((() => {
          const WW = WW => {
            for (const MW of gR.V) {
              const RW = (0, gR.i)(MW),
                wW = bR.current[RW];
              if (!wW) continue;
              const CW = WW.values[RW];
              wW.classList.toggle("Pressed", CW >= gR.w), (0, gR.H)(RW) && wW.style.setProperty("--trigger-fill", `${Math.round(100*CW)}%`)
            }
            const RW = Zb((0, tR.i)());
            qy(yR.current, WW.leftStick, RW.left.deadzone, WW.values[(0, gR.i)("LS")] >= gR.w), qy(NW.current, WW.rightStick, RW.right.deadzone, WW.values[(0, gR.i)("RS")] >= gR.w)
          };
          return RW || WW((0, gR.u)()), AW.g.onFrame(WW)
        }), [RW]), (0, UW.useEffect)((() => {
          RW || iR(!1)
        }), [RW, iR]), (0, UW.useEffect)((() => {
          var WW;
          TW && (null === (WW = wW.current) || void 0 === WW || WW.scrollIntoView({
            block: "nearest"
          }))
        }), [TW]);
        const YW = jy.db.find((WW => WW.value === (null === RW || void 0 === RW ? void 0 : RW.family)));
        return (0, mR.jsxs)("div", {
          ref: wW,
          className: VW()("SettingBox ControllerTester", {
            Testing: TW
          }),
          children: [(0, mR.jsxs)("div", {
            className: "ControllerTesterHeader",
            children: [(0, mR.jsxs)("div", {
              className: "ControllerTesterInfo",
              children: [RW && (0, mR.jsx)("div", {
                children: WW("controller:settingsTesterFamily", {
                  family: YW ? WW(YW.labelKey) : RW.family
                })
              }), RW && (0, mR.jsx)("div", {
                className: "ControllerTesterPadId",
                children: RW.id
              }), !RW && (0, mR.jsx)("div", {
                children: WW("controller:settingsTesterNoPad")
              })]
            }), (RW || TW) && (0, mR.jsx)(ty.h, {
              className: "ControllerTesterToggle",
              onClick: () => {
                iR(!TW)
              },
              children: WW(TW ? "controller:settingsTesterStop" : "controller:settingsTesterStart")
            })]
          }), RW && !TW && (0, mR.jsx)("div", {
            className: "ControllerSettingsHint",
            children: WW("controller:settingsTesterHint")
          }), TW && (0, mR.jsxs)("div", {
            className: "ControllerTesterBanner",
            children: [(0, mR.jsx)(cy.c, {
              text: WW("controller:settingsTesterTesting", {
                button: cy.f
              }),
              glyph: (0, eW.g)("menuBack")
            }), (0, mR.jsx)("div", {
              ref: zR,
              className: "ControllerTesterExitFill"
            })]
          }), (0, mR.jsxs)("div", {
            className: "ControllerTesterBody",
            children: [(0, mR.jsx)(Db, {
              deadzone: MW.left.deadzone,
              dotRef: yR,
              labelKey: MW.left.labelKey
            }), (0, mR.jsx)("div", {
              className: "ControllerTesterButtons",
              children: gR.V.map((WW => {
                const MW = (0, gR.i)(WW);
                return (0, mR.jsx)("div", {
                  ref: WW => {
                    bR.current[MW] = WW
                  },
                  className: (0, gR.H)(MW) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
                  children: (0, mR.jsx)(tC, {
                    glyph: WW,
                    family: null === RW || void 0 === RW ? void 0 : RW.family
                  })
                }, WW)
              }))
            }), (0, mR.jsx)(Db, {
              deadzone: MW.right.deadzone,
              dotRef: NW,
              labelKey: MW.right.labelKey
            })]
          })]
        })
      },
      Wy = (0, UW.memo)((function() {
        const {
          t: WW
        } = (0, CW.C)(), RW = (0, tR.s)(), [MW, wW] = (0, UW.useState)(!1);
        return (0, UW.useEffect)((() => {
          if (!MW) return;
          const WW = window.setTimeout((() => {
            wW(!1)
          }), jy.pb);
          return () => {
            window.clearTimeout(WW)
          }
        }), [MW]), (0, mR.jsxs)("div", {
          className: "SettingsMenuRightInner ControllerCategory",
          children: [(0, mR.jsx)(ky, {
            text: WW("controller:settingsLook")
          }), (0, mR.jsx)(sb, {
            settingKey: "lookSensitivityX",
            label: WW("controller:settingsLookSensitivityX"),
            range: jy.mb,
            format: jy.J
          }), (0, mR.jsx)(sb, {
            settingKey: "lookSensitivityY",
            label: WW("controller:settingsLookSensitivityY"),
            range: jy.mb,
            format: jy.J
          }), (0, mR.jsx)(sb, {
            settingKey: "aimLookSensitivity",
            label: WW("controller:settingsAimLookSensitivity"),
            range: jy.g,
            format: jy.J
          }), (0, mR.jsx)(ay, {
            label: WW("controller:settingsLookCurve"),
            hint: WW("controller:settingsLookCurveHint"),
            options: jy.Y,
            value: RW.lookCurve,
            onChange: WW => {
              (0, tR.q)({
                lookCurve: WW
              })
            }
          }), (0, mR.jsx)(ry.b, {
            label: WW("controller:settingsInvertLookX"),
            checked: RW.invertLookX,
            onClick: WW => {
              (0, tR.q)({
                invertLookX: WW
              })
            }
          }), (0, mR.jsx)(ry.b, {
            label: WW("controller:settingsInvertLookY"),
            checked: RW.invertLookY,
            onClick: WW => {
              (0, tR.q)({
                invertLookY: WW
              })
            }
          }), (0, mR.jsx)(sb, {
            settingKey: "lookDeadzone",
            label: WW("controller:settingsLookDeadzone"),
            range: jy.z,
            format: jy.G
          }), (0, mR.jsx)(xy, {}), (0, mR.jsx)(ky, {
            text: WW("controller:settingsMovement")
          }), (0, mR.jsx)(sb, {
            settingKey: "moveDeadzone",
            label: WW("controller:settingsMoveDeadzone"),
            range: jy.z,
            format: jy.G
          }), (0, mR.jsx)(ry.b, {
            label: WW("controller:settingsAutoSprint"),
            checked: RW.autoSprint,
            onClick: WW => {
              (0, tR.q)({
                autoSprint: WW
              })
            },
            circleInfoText: WW("controller:settingsAutoSprintInfo")
          }), (0, mR.jsx)(ay, {
            label: WW("controller:settingsSneak"),
            options: jy.ob,
            value: RW.sneakMode,
            onChange: WW => {
              (0, tR.q)({
                sneakMode: WW
              })
            }
          }), (0, mR.jsx)(ky, {
            text: WW("controller:settingsButtons")
          }), (0, mR.jsx)(ay, {
            label: WW("controller:settingsPromptFamily"),
            options: jy.db,
            value: RW.promptFamily,
            onChange: WW => {
              (0, tR.q)({
                promptFamily: WW
              })
            }
          }), (0, mR.jsx)(ry.b, {
            label: WW("controller:settingsHideButtonHints"),
            checked: RW.hideButtonHints,
            onClick: WW => {
              (0, tR.q)({
                hideButtonHints: WW
              })
            }
          }), (0, mR.jsx)(ry.b, {
            label: WW("controller:settingsVibration"),
            checked: RW.vibration,
            onClick: WW => {
              (0, tR.q)({
                vibration: WW
              }), WW && DM("preview")
            }
          }), (0, mR.jsx)(sb, {
            settingKey: "cursorSpeed",
            label: WW("controller:settingsCursorSpeed"),
            range: jy.v,
            format: jy.J
          }), (0, mR.jsx)(ry.b, {
            label: WW("controller:settingsCursorMagnetism"),
            checked: RW.cursorMagnetism,
            onClick: WW => {
              (0, tR.q)({
                cursorMagnetism: WW
              })
            }
          }), (0, mR.jsx)(ry.b, {
            label: WW("controller:settingsMenuBackToCategories"),
            checked: RW.menuBackToCategories,
            onClick: WW => {
              (0, tR.q)({
                menuBackToCategories: WW
              })
            }
          }), (0, mR.jsx)(Hb, {
            layoutSetting: (0, mR.jsxs)(mR.Fragment, {
              children: [eW.e.map((MW => (0, mR.jsx)(ry.b, {
                label: WW(jy.T[MW]),
                checked: (0, eW.A)(MW, RW),
                onClick: WW => {
                  wW(!(0, eW.M)(MW, WW))
                }
              }, MW))), MW && (0, mR.jsx)("div", {
                className: "PadLayoutRefusedNotice",
                role: "status",
                children: WW("controller:settingsLayoutRefusedToast")
              })]
            })
          }), (0, mR.jsx)(Kb, {}), (0, mR.jsx)(ky, {
            text: WW("controller:settingsAlternatives")
          }), (0, mR.jsx)("div", {
            className: "ControllerSettingsHint",
            children: WW("controller:settingsAlternativesHint")
          }), (0, mR.jsx)(ay, {
            label: WW("controller:settingsMenuNavigation"),
            hint: WW("controller:settingsMenuNavigationHint"),
            options: jy.ab,
            value: RW.menuNavigation,
            onChange: WW => {
              (0, tR.q)({
                menuNavigation: WW
              })
            }
          }), (0, mR.jsx)(ay, {
            label: WW("controller:settingsInventoryNavigation"),
            hint: WW("controller:settingsInventoryNavigationHint"),
            options: jy.Q,
            value: RW.inventoryNavigation,
            onChange: WW => {
              (0, tR.q)({
                inventoryNavigation: WW
              })
            }
          }), (0, mR.jsx)(ay, {
            label: WW("controller:settingsQuickChat"),
            hint: WW("controller:settingsQuickChatHint"),
            options: jy.hb,
            value: RW.quickChat,
            onChange: WW => {
              (0, tR.q)({
                quickChat: WW
              })
            }
          }), (0, mR.jsx)(ay, {
            label: WW("controller:settingsLeaderboardButton"),
            hint: WW("controller:settingsLeaderboardButtonHint"),
            options: jy.W,
            value: RW.leaderboardButton,
            onChange: WW => {
              (0, tR.q)({
                leaderboardButton: WW
              })
            }
          }), (0, mR.jsx)(ky, {
            text: WW("controller:settingsTester")
          }), (0, mR.jsx)(Sb, {})]
        })
      }));
    (0, CW.b)(wW);
    for (const Cy of (0, zR.r)()) Cy.connected ? AW.g.handleConnectionEvent(Cy) : AW.g.handleDisconnectionEvent(Cy);
    const Ry = () => null !== AW.g.getActivePad(),
      My = () => KM.getState(),
      wy = () => KM.isSteppingSlots()
  },
  7084: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => bR,
      g: () => yR
    });
    const wW = {
        "054c": "playstation",
        "057e": "nintendo"
      },
      CW = "28de",
      zR = new Set(["1205"]),
      AW = WW => {
        const RW = /vendor:\s*([0-9a-f]{4})\s*product:\s*([0-9a-f]{4})/i.exec(WW);
        if (RW) return {
          vendor: RW[1].toLowerCase(),
          product: RW[2].toLowerCase()
        };
        const MW = /^([0-9a-f]{1,4})-([0-9a-f]{1,4})-/i.exec(WW);
        return MW ? {
          vendor: MW[1].toLowerCase().padStart(4, "0"),
          product: MW[2].toLowerCase().padStart(4, "0")
        } : null
      },
      bR = (WW, RW) => {
        const MW = AW(WW);
        if ((null === MW || void 0 === MW ? void 0 : MW.vendor) === CW) return zR.has(MW.product) ? "steamdeck" : "xbox";
        if (MW && wW[MW.vendor]) return wW[MW.vendor];
        const bR = `${WW} ${null!==RW&&void 0!==RW?RW:""}`.toLowerCase();
        return /dualsense|dualshock|playstation|sony/.test(bR) ? "playstation" : /nintendo|switch|joy-con|pro controller/.test(bR) ? "nintendo" : /steam deck/.test(bR) ? "steamdeck" : "xbox"
      },
      yR = WW => {
        var RW;
        return (null === (RW = AW(WW)) || void 0 === RW ? void 0 : RW.vendor) === CW
      }
  },
  7117: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => NW,
      e: () => bR
    });
    var wW = MW(7082);
    const CW = ["capture", "keyboard", "wheel", "inventory", "cursor", "focus", "gameplay"],
      zR = new Set(["capture", "gameplay"]),
      AW = ["Up", "Down", "Left", "Right"],
      bR = WW => AW.includes(WW),
      yR = .25;
    const NW = new class {
      constructor() {
        this.consumers = new Map, this.activeName = null, this.mM = new Array(wW.S).fill(!1), this.previousHeld = new Array(wW.S).fill(!1), this.consumedButtons = new Array(wW.S).fill(!1), this.suppressedReleases = new Array(wW.S).fill(!1), this.wakeOwned = new Array(wW.S).fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.peek = null, this.lastFrame = (0, wW.u)()
      }
      register(WW) {
        return this.consumers.has(WW.name) && console.warn(`Controller consumer "${WW.name}" registered twice; the newer one replaces it.`), this.consumers.set(WW.name, WW), () => {
          var RW;
          this.consumers.get(WW.name) === WW && (this.activeName === WW.name ? (this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()) : (null === (RW = this.peek) || void 0 === RW ? void 0 : RW.over) === WW.name && (this.peek = null), this.consumers.delete(WW.name))
        }
      }
      getActiveConsumerName() {
        return this.activeName
      }
      isButtonHeld(WW) {
        return this.mM[(0, wW.i)(WW)]
      }
      getLastFrame() {
        return this.lastFrame
      }
      clear() {
        this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()
      }
      reset() {
        this.deactivateCurrent(), this.activeName = null, this.mM = new Array(wW.S).fill(!1), this.previousHeld = new Array(wW.S).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.lastFrame = (0, wW.u)()
      }
      dispatch(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.lastFrame = WW, this.previousHeld = this.mM, this.mM = (0, wW.p)(WW.values, this.previousHeld);
        for (let zR = 0; zR < wW.S; zR++) this.suppressedReleases[zR] = !this.mM[zR] && this.consumedButtons[zR], this.mM[zR] || (this.consumedButtons[zR] = !1), this.wakeOwned[zR] && (this.mM[zR] ? (this.consumedButtons[zR] = !0, this.wakeOwned[zR] = !1) : WW.values[zR] < wW.P && (this.wakeOwned[zR] = !1));
        Math.hypot(WW.leftStick.x, WW.leftStick.y) < yR && (this.leftStickConsumed = !1), Math.hypot(WW.rightStick.x, WW.rightStick.y) < yR && (this.rightStickConsumed = !1);
        const CW = this.pickActive();
        if ((null === CW || void 0 === CW ? void 0 : CW.name) !== this.activeName) {
          var AW, bR, NW, eW, BW, tR;
          const WW = this.activeName,
            RW = {
              left: !this.leftStickConsumed,
              right: !this.rightStickConsumed
            },
            MW = null !== (AW = null === CW || void 0 === CW || null === (bR = CW.peek) || void 0 === bR ? void 0 : bR.call(CW)) && void 0 !== AW ? AW : null,
            zR = null === WW && !!MW && !(null === (NW = this.consumers.get(MW.over)) || void 0 === NW || !NW.onPeekFrame),
            yR = MW && (MW.over === WW || zR) ? MW : null,
            TW = null !== this.peek && this.peek.over === (null === CW || void 0 === CW ? void 0 : CW.name) ? this.peek : null;
          this.deactivateCurrent(null !== yR, null !== TW), this.activeName = null !== (eW = null === CW || void 0 === CW ? void 0 : CW.name) && void 0 !== eW ? eW : null, null === WW || this.handOffPending || this.consumeAllHeld();
          const gR = null === (BW = null !== yR && void 0 !== yR ? yR : TW) || void 0 === BW ? void 0 : BW.stick;
          "left" === gR && RW.left ? this.leftStickConsumed = !1 : "right" === gR && RW.right && (this.rightStickConsumed = !1), this.peek = yR, CW || null === WW ? CW && (null === (tR = this.idleResume) || void 0 === tR ? void 0 : tR.name) === CW.name && (this.idleResume.left && (this.leftStickConsumed = !1), this.idleResume.right && (this.rightStickConsumed = !1)) : this.idleResume = {
            name: WW,
            left: RW.left && this.leftStickConsumed,
            right: RW.right && this.rightStickConsumed
          }, CW && (this.idleResume = null);
          for (let CW = 0; CW < wW.S; CW++) this.previousHeld[CW] && !this.mM[CW] && (this.suppressedReleases[CW] = !0)
        }
        var TW, gR;
        (this.handOffPending = !1, CW) && (MW && !zR.has(CW.name) && this.consumeWakePress(CW), CW.onFrame(this.buildInput(WW, RW, MW)), this.peek && (null === (TW = this.consumers.get(this.peek.over)) || void 0 === TW || null === (gR = TW.onPeekFrame) || void 0 === gR || gR.call(TW, this.buildInput(WW, RW, !1, this.peek.stick))))
      }
      consumeWakePress(WW) {
        for (let CW = 0; CW < wW.S; CW++) {
          var RW, MW;
          const zR = wW.V[CW];
          (null !== (RW = null === (MW = WW.wakePressActs) || void 0 === MW ? void 0 : MW.call(WW, zR)) && void 0 !== RW ? RW : AW.includes(zR)) || (this.mM[CW] ? this.consumedButtons[CW] = !0 : this.lastFrame.values[CW] >= wW.L && (this.wakeOwned[CW] = !0))
        }
      }
      pickActive() {
        for (const WW of CW) {
          const RW = this.consumers.get(WW);
          if (RW && RW.isActive()) return RW
        }
        return null
      }
      deactivateCurrent() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var MW, wW, CW, zR;
        this.activeName && (null === (MW = this.consumers.get(this.activeName)) || void 0 === MW || null === (wW = MW.onDeactivate) || void 0 === wW || wW.call(MW, WW));
        this.peek && !RW && (null === (CW = this.consumers.get(this.peek.over)) || void 0 === CW || null === (zR = CW.onDeactivate) || void 0 === zR || zR.call(CW, !1));
        this.peek = null
      }
      consumeAllHeld() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.idleResume = null;
        for (let CW = 0; CW < wW.S; CW++) this.mM[CW] && (this.consumedButtons[CW] = !0);
        const {
          leftStick: RW,
          rightStick: MW
        } = this.lastFrame;
        this.leftStickConsumed = "left" !== WW && (this.leftStickConsumed || Math.hypot(RW.x, RW.y) >= yR), this.rightStickConsumed = "right" !== WW && (this.rightStickConsumed || Math.hypot(MW.x, MW.y) >= yR)
      }
      handOffHeldInput() {
        this.handOffPending = !0
      }
      consumeButton(WW) {
        const RW = (0, wW.i)(WW);
        this.mM[RW] && (this.consumedButtons[RW] = !0)
      }
      buildInput(WW, RW, MW, CW) {
        const zR = this.mM,
          AW = this.previousHeld,
          bR = CW ? new Array(wW.S).fill(!0) : [...this.consumedButtons],
          yR = CW ? bR : [...this.suppressedReleases],
          NW = !this.leftStickConsumed && (!CW || "left" === CW),
          eW = !this.rightStickConsumed && (!CW || "right" === CW);
        return {
          frame: WW,
          dtMs: RW,
          isHeld: WW => {
            const RW = (0, wW.i)(WW);
            return zR[RW] && !bR[RW]
          },
          wasPressed: WW => {
            const RW = (0, wW.i)(WW);
            return zR[RW] && !AW[RW] && !bR[RW]
          },
          wasReleased: WW => {
            const RW = (0, wW.i)(WW);
            return !zR[RW] && AW[RW] && !yR[RW]
          },
          value: RW => {
            const MW = (0, wW.i)(RW);
            return bR[MW] ? 0 : WW.values[MW]
          },
          leftStick: NW ? WW.leftStick : {
            x: 0,
            y: 0
          },
          rightStick: eW ? WW.rightStick : {
            x: 0,
            y: 0
          },
          wokeDevice: MW
        }
      }
    }
  },
  7095: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => BW.i,
      e: () => BW.k,
      i: () => XW,
      m: () => jR,
      q: () => kR,
      s: () => aR
    });
    var wW = MW(75),
      CW = MW(33),
      zR = MW(1253),
      AW = MW(50),
      bR = MW(7097),
      yR = MW(7082),
      NW = MW(7090),
      eW = MW(7080),
      BW = MW(1604),
      tR = MW(7106);
    const TW = {
        lookSensitivityX: 100,
        lookSensitivityY: 100,
        aimLookSensitivity: 100,
        invertLookX: !1,
        invertLookY: !1,
        lookCurve: "exponential",
        lookDeadzone: .12,
        moveDeadzone: .15,
        swapSticks: !1,
        autoSprint: !0,
        sneakMode: "toggle",
        tapHoldTime: "short",
        attackMode: "hold",
        promptFamily: "auto",
        hideButtonHints: !1,
        vibration: !0,
        cursorSpeed: 100,
        cursorMagnetism: !1,
        buttonRepeat: "default",
        largePointer: !1,
        menuBackToCategories: !0,
        swapConfirmBack: null,
        menuNavigation: "hybrid",
        inventoryNavigation: "hybrid",
        quickChat: "wheel",
        leaderboardButton: "shop",
        gyroAiming: !1,
        gyroSensitivity: 2,
        gyroActivation: "always",
        gyroButton: "RB",
        emoteButton: "tapHold",
        zC: {}
      },
      gR = "controllerSettings",
      iR = ["zC", "promptFamily", "hideButtonHints", "swapSticks", "swapConfirmBack", "leaderboardButton"],
      YW = ["auto", ...bR.e],
      JW = (WW, RW) => "string" === typeof RW && WW.includes(RW),
      PW = WW => RW => "number" === typeof RW && Number.isFinite(RW) ? (0, tR.t)(RW, WW) : void 0,
      IW = WW => "boolean" === typeof WW ? WW : void 0,
      oW = WW => RW => JW(WW, RW) ? RW : void 0,
      lW = {
        lookSensitivityX: PW(tR.mb),
        lookSensitivityY: PW(tR.mb),
        aimLookSensitivity: PW(tR.g),
        invertLookX: IW,
        invertLookY: IW,
        lookCurve: oW(yR.K),
        lookDeadzone: PW(tR.z),
        moveDeadzone: PW(tR.z),
        swapSticks: IW,
        autoSprint: IW,
        sneakMode: oW(["toggle", "hold"]),
        tapHoldTime: oW(["short", "medium", "long"]),
        attackMode: oW(["hold", "toggle"]),
        promptFamily: oW(YW),
        hideButtonHints: IW,
        vibration: IW,
        cursorSpeed: PW(tR.v),
        cursorMagnetism: IW,
        buttonRepeat: oW(yR.m),
        largePointer: IW,
        menuBackToCategories: IW,
        swapConfirmBack: IW,
        menuNavigation: oW(["hybrid", "focus", "cursor"]),
        inventoryNavigation: oW(["hybrid", "slot", "cursor"]),
        quickChat: oW(["wheel", "off"]),
        leaderboardButton: oW(["shop", "leaderboard"]),
        gyroAiming: IW,
        gyroSensitivity: PW(tR.P),
        gyroActivation: oW(["always", "aiming", "button"]),
        gyroButton: oW(yR.V),
        emoteButton: oW(["tapHold", "wheel"])
      },
      FW = [{
        param: "padMenuNav",
        key: "menuNavigation"
      }, {
        param: "padInventoryNav",
        key: "inventoryNavigation"
      }, {
        param: "padQuickChat",
        key: "quickChat"
      }, {
        param: "padSneak",
        key: "sneakMode"
      }, {
        param: "padGyro",
        key: "gyroActivation"
      }, {
        param: "padLeaderboardButton",
        key: "leaderboardButton"
      }],
      fW = WW => {
        const RW = {};
        if ("object" !== typeof WW || null === WW) return RW;
        for (const [MW, wW] of Object.entries(WW)) Object.prototype.hasOwnProperty.call(NW.f, MW) && JW(yR.V, wW) && (RW[MW] = wW);
        return RW
      },
      QW = WW => {
        const RW = {};
        for (const MW of Object.keys(TW))("zC" === MW ? Object.keys(WW.zC).length > 0 : WW[MW] !== TW[MW]) && (RW[MW] = WW[MW]);
        0 !== Object.keys(RW).length ? AW.g.setItem(gR, RW) : AW.g.removeItem(gR)
      };
    let rR = (() => {
        const WW = AW.g.getItem(gR),
          RW = (WW => {
            const RW = "object" === typeof WW && null !== WW ? WW : {},
              MW = {
                ...TW,
                zC: fW(RW.zC)
              };
            for (const CW of Object.keys(lW)) {
              const WW = lW[CW](RW[CW]);
              void 0 !== WW && (MW[CW] = WW)
            }
            const wW = Object.keys(RW).filter((WW => !!Object.prototype.hasOwnProperty.call(TW, WW) && ("zC" === WW ? "object" !== typeof RW.zC || null === RW.zC || Object.keys(RW.zC).length !== Object.keys(MW.zC).length : MW[WW] !== RW[WW])));
            return wW.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${wW.join(", ")}`), MW
          })(WW);
        return null !== WW && void 0 !== WW && QW(RW), RW
      })(),
      cR = {
        ...rR,
        ...(() => {
          if ("undefined" === typeof window) return {};
          const WW = {},
            RW = new URLSearchParams(window.location.search);
          for (const {
              param: MW,
              key: wW
            }
            of FW) {
            const CW = lW[wW](RW.get(MW));
            void 0 !== CW && (WW[wW] = CW)
          }
          return WW
        })()
      };
    const XW = () => cR,
      jR = () => {
        var WW, RW;
        const MW = XW().promptFamily;
        return "auto" !== MW ? MW : null !== (WW = null === (RW = eW.g.getActivePad()) || void 0 === RW ? void 0 : RW.family) && void 0 !== WW ? WW : "xbox"
      },
      kR = WW => {
        const RW = cR;
        rR = {
          ...rR,
          ...WW
        }, QW(rR), cR = {
          ...cR,
          ...WW
        }, (WW => {
          CW.k.Sz(BW.k, cR), iR.some((RW => WW[RW] !== cR[RW])) && CW.k.Sz(BW.i, cR)
        })(RW)
      },
      aR = () => {
        const [WW, RW] = (0, wW.useState)(cR);
        return (0, zR.f)(BW.k, RW), WW
      }
  },
  7551: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => CW
    });
    const wW = new Set(["Alt", "AltGraph", "Meta", "OS", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "BrowserBack", "BrowserForward", "BrowserHome", "GoBack", "LaunchApplication1", "LaunchApplication2", "LaunchMail", "PrintScreen", "Unidentified"]),
      CW = WW => wW.has(WW)
  },
  7080: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => TW.e,
      g: () => JW
    });
    var wW = MW(7082),
      CW = MW(7084);
    const zR = .1,
      AW = .3;
    class bR {
      constructor() {
        this.deadzone = 0, this.anchor = null, this.steadyMs = 0, this.lastMs = null, this.returning = !0, this.anchorLearned = !1
      }
      observe(WW, RW) {
        const MW = null === this.lastMs ? 0 : Math.min(Math.max(0, RW - this.lastMs), 100);
        this.lastMs = RW;
        const wW = Math.hypot(WW.x, WW.y);
        if (wW >= AW) return this.anchor = null, void(this.returning = !0);
        wW >= zR || (this.returning = !1);
        const CW = this.anchor;
        if (!CW || Math.hypot(WW.x - CW.x, WW.y - CW.y) > .03) return this.anchorLearned && (this.returning = !1), this.anchor = {
          x: WW.x,
          y: WW.y
        }, this.steadyMs = 0, void(this.anchorLearned = !1);
        if (this.steadyMs += MW, this.steadyMs < 1e3) return;
        const bR = Math.max(wW, Math.hypot(CW.x, CW.y));
        bR < zR ? this.deadzone = 0 : this.returning && (this.deadzone = bR + .05, this.anchorLearned = !0)
      }
      getDeadzone() {
        return this.deadzone
      }
      apply(WW) {
        return Math.hypot(WW.x, WW.y) < this.deadzone ? {
          x: 0,
          y: 0
        } : WW
      }
    }
    const yR = (WW, RW) => {
        var MW, wW;
        return null !== (MW = WW && (null === (wW = Object.getOwnPropertyDescriptor(WW, RW)) || void 0 === wW ? void 0 : wW.get)) && void 0 !== MW ? MW : null
      },
      NW = WW => {
        const RW = WW.vendorName;
        return "string" === typeof RW ? RW : void 0
      },
      eW = ((WW, RW) => {
        const MW = yR(WW, "index"),
          wW = yR(WW, "id"),
          CW = yR(WW, "connected"),
          zR = yR(WW, "mapping"),
          AW = yR(WW, "buttons"),
          bR = yR(WW, "axes"),
          eW = yR(RW, "pressed"),
          BW = yR(RW, "value");
        return MW && wW && CW && zR && AW && bR && eW && BW ? WW => {
          const RW = AW.call(WW),
            yR = bR.call(WW),
            tR = {
              index: Number(MW.call(WW)),
              id: String(wW.call(WW)),
              connected: !0 === CW.call(WW),
              mapping: String(zR.call(WW)),
              buttons: [],
              axes: [],
              vendorName: NW(WW)
            };
          for (let MW = 0; MW < RW.length; MW++) tR.buttons.push({
            pressed: !0 === eW.call(RW[MW]),
            value: Number(BW.call(RW[MW]))
          });
          for (let MW = 0; MW < yR.length; MW++) tR.axes.push(Number(yR[MW]));
          return tR
        } : null
      })("undefined" === typeof Gamepad ? null : Gamepad.prototype, "undefined" === typeof GamepadButton ? null : GamepadButton.prototype),
      BW = "undefined" === typeof Navigator ? null : Navigator.prototype.getGamepads;
    var tR = MW(1220),
      TW = MW(1604);
    const gR = AW,
      iR = WW => {
        const RW = new Array(wW.S).fill(0);
        for (let MW = 0; MW < wW.S && MW < WW.buttons.length; MW++) {
          const CW = WW.buttons[MW];
          RW[MW] = CW.pressed && !(0, wW.H)(MW) ? Math.max(CW.value, wW.w) : CW.value
        }
        return RW
      },
      YW = (WW, RW) => {
        var MW, wW;
        return {
          x: null !== (MW = WW.axes[RW]) && void 0 !== MW ? MW : 0,
          y: null !== (wW = WW.axes[RW + 1]) && void 0 !== wW ? wW : 0
        }
      };
    const JW = new class {
      constructor(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : eW;
        this.readGamepads = WW, this.requireTrustedPads = RW, this.nativeReader = MW, this.running = !1, this.listening = !1, this.rafId = 0, this.lastTimestampMs = 0, this.activeInfo = null, this.slots = [], this.trustedIndices = new Set, this.warnedNonStandardIds = new Set, this.loggedReadError = !1, this.frameListeners = new Set, this.connectionListeners = new Set, this.anyPadConnected = !1, this.connectedListeners = new Set, this.handleConnectionEvent = WW => {
          WW.isTrusted && this.trustedIndices.add(WW.gamepad.index), this.wake()
        }, this.handleDisconnectionEvent = WW => {
          this.trustedIndices.delete(WW.gamepad.index)
        }, this.WR = WW => {
          if (this.rafId = 0, !this.running) return;
          const RW = 0 === this.lastTimestampMs ? 16 : Math.min(100, WW - this.lastTimestampMs);
          this.lastTimestampMs = WW;
          try {
            this.poll(WW, RW)
          } finally {
            this.anyPadConnected && (this.rafId = requestAnimationFrame(this.WR))
          }
        }
      }
      start() {
        this.running || "undefined" === typeof navigator || "function" !== typeof navigator.getGamepads || (this.running = !0, this.listenForConnections(), this.wake())
      }
      stop() {
        this.running = !1, cancelAnimationFrame(this.rafId), this.rafId = 0, this.listening = !1, window.removeEventListener("gamepadconnected", this.handleConnectionEvent), window.removeEventListener("gamepaddisconnected", this.handleDisconnectionEvent)
      }
      listenForConnections() {
        this.listening || "undefined" === typeof window || (this.listening = !0, window.addEventListener("gamepadconnected", this.handleConnectionEvent), window.addEventListener("gamepaddisconnected", this.handleDisconnectionEvent))
      }
      onFrame(WW) {
        return this.frameListeners.add(WW), () => {
          this.frameListeners.delete(WW)
        }
      }
      onActivePadChanged(WW) {
        return this.connectionListeners.add(WW), () => {
          this.connectionListeners.delete(WW)
        }
      }
      getActivePad() {
        return this.activeInfo
      }
      hasConnectedPad() {
        return this.anyPadConnected
      }
      onConnectedPadsChanged(WW) {
        return this.connectedListeners.add(WW), () => {
          this.connectedListeners.delete(WW)
        }
      }
      getActiveGamepad() {
        if (!this.activeInfo) return null;
        const WW = this.readPads()[this.activeInfo.index],
          RW = WW ? this.readPad(WW) : null;
        return RW && RW.id === this.activeInfo.id ? WW : null
      }
      poll(WW, RW) {
        var MW, CW;
        const zR = this.readPads();
        let AW = null,
          yR = !1;
        const NW = [],
          eW = Math.max(zR.length, this.slots.length);
        for (let IW = 0; IW < eW; IW++) {
          var BW;
          const RW = IW < zR.length ? zR[IW] : null,
            MW = RW ? this.readPad(RW) : null;
          if (!MW || !MW.connected || !this.isUsable(MW)) {
            this.slots[IW] = null;
            continue
          }
          let CW = this.slots[IW];
          CW && CW.id === MW.id || (CW = {
            id: MW.id,
            mM: [],
            leftSettled: !1,
            rightSettled: !1,
            leftRest: new bR,
            rightRest: new bR
          }, this.slots[IW] = CW);
          const eW = YW(MW, 0),
            tR = YW(MW, 2);
          !CW.leftSettled && Math.hypot(eW.x, eW.y) < gR && (CW.leftSettled = !0), !CW.rightSettled && Math.hypot(tR.x, tR.y) < gR && (CW.rightSettled = !0), CW.leftRest.observe(eW, WW), CW.rightRest.observe(tR, WW);
          const TW = iR(MW),
            JW = (0, wW.p)(TW, CW.mM),
            PW = CW.mM,
            oW = JW.map(((WW, RW) => WW && !PW[RW]));
          CW.mM = JW;
          const lW = {
            pad: MW,
            slot: CW,
            values: TW
          };
          IW === (null === (BW = this.activeInfo) || void 0 === BW ? void 0 : BW.index) && MW.id === this.activeInfo.id ? (AW = lW, yR = oW.includes(!0)) : oW.includes(!0) && NW.push({
            polled: lW,
            rose: oW
          })
        }
        const tR = this.slots.some((WW => null !== WW));
        if (tR !== this.anyPadConnected) {
          this.anyPadConnected = tR;
          for (const WW of this.connectedListeners) WW()
        }
        const TW = null !== (MW = null === (CW = AW) || void 0 === CW ? void 0 : CW.slot.mM) && void 0 !== MW ? MW : [],
          JW = yR ? void 0 : NW.find((WW => {
            let {
              rose: RW
            } = WW;
            return RW.some(((WW, RW) => WW && !TW[RW]))
          }));
        if (JW ? (AW = JW.polled, this.setActive(JW.polled.pad)) : this.activeInfo && !AW && this.setActive(null), !AW || !this.activeInfo) return;
        const PW = ((WW, RW) => {
          let {
            pad: MW,
            slot: CW,
            values: zR
          } = WW;
          const AW = (0, wW.u)(RW);
          return AW.values = zR, CW.leftSettled && (AW.leftStick = CW.leftRest.apply(YW(MW, 0))), CW.rightSettled && (AW.rightStick = CW.rightRest.apply(YW(MW, 2))), AW
        })(AW, WW);
        for (const wW of this.frameListeners) wW(PW, RW, this.activeInfo)
      }
      readPad(WW) {
        if (this.nativeReader) try {
          return this.nativeReader(WW)
        } catch {
          if (this.requireTrustedPads) return null
        }
        return this.requireTrustedPads ? null : (WW => {
          const RW = WW;
          return {
            index: RW.index,
            id: RW.id,
            connected: RW.connected,
            mapping: RW.mapping,
            buttons: Array.from(RW.buttons, (WW => ({
              pressed: WW.pressed,
              value: WW.value
            }))),
            axes: Array.from(RW.axes),
            vendorName: NW(WW)
          }
        })(WW)
      }
      isUsable(WW) {
        return !(0, tR.f)(WW.id) && ("standard" !== WW.mapping ? (this.warnedNonStandardIds.has(WW.id) || (this.warnedNonStandardIds.add(WW.id), console.warn(`Controller "${WW.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.trustedIndices.has(WW.index))
      }
      setActive(WW) {
        this.activeInfo = WW ? {
          index: WW.index,
          id: WW.id,
          family: (0, CW.e)(WW.id, WW.vendorName)
        } : null;
        for (const RW of this.connectionListeners) RW(this.activeInfo)
      }
      readPads() {
        try {
          return this.readGamepads()
        } catch (WW) {
          return this.loggedReadError || (this.loggedReadError = !0, console.warn("Reading gamepads failed; controller input is unavailable.", WW)), []
        }
      }
      wake() {
        this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.WR))
      }
    }((() => BW ? BW.call(navigator) : []), !0);
    JW.listenForConnections()
  },
  7561: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => wW
    });
    const wW = {
      short: {
        wheelMs: 250,
        dropStackMs: 800
      },
      medium: {
        wheelMs: 500,
        dropStackMs: 1e3
      },
      long: {
        wheelMs: 800,
        dropStackMs: 1300
      }
    }
  },
  7631: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => AW,
      e: () => bR
    });
    var wW = MW(33),
      CW = MW(7618);
    let zR = !1;
    const AW = () => zR,
      bR = WW => {
        WW !== zR && (zR = WW, wW.k.Sz(CW.l, zR))
      }
  },
  7625: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => bR,
      c: () => yR
    });
    var wW = MW(33),
      CW = MW(7618);
    let zR = null,
      AW = 0;
    const bR = () => zR,
      yR = WW => {
        null === WW && null === zR || (zR = null === WW ? null : {
          id: ++AW,
          holdMs: WW
        }, wW.k.Sz(CW.o, zR))
      }
  },
  7640: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => AW,
      i: () => bR
    });
    var wW = MW(33),
      CW = MW(7618);
    let zR = !1;
    const AW = () => zR,
      bR = WW => {
        WW !== zR && (zR = WW, wW.k.Sz(CW.s, zR))
      }
  },
  7720: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => AW,
      d: () => bR
    });
    var wW = MW(33),
      CW = MW(7618);
    let zR = !1;
    const AW = () => zR,
      bR = WW => {
        WW !== zR && (zR = WW, wW.k.Sz(CW.t, zR))
      }
  },
  7663: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => wW
    });
    class wW {
      constructor() {
        this.downAtMs = null
      }
      update(WW, RW, MW, wW) {
        if (WW) return this.downAtMs = MW, null;
        if (null === this.downAtMs) return null;
        const CW = MW - this.downAtMs >= wW;
        return RW ? CW ? (this.downAtMs = null, "hold") : null : (this.downAtMs = null, CW ? "hold" : "tap")
      }
      release() {
        this.downAtMs = null
      }
    }
  },
  7134: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => BW,
      f: () => tR,
      h: () => bR,
      i: () => IW,
      m: () => PW
    });
    var wW = MW(50),
      CW = MW(7097),
      zR = MW(7082);
    const AW = (() => {
        try {
          return MW(7143)
        } catch {
          return null
        }
      })(),
      bR = [...zR.V, "LeftStick", "RightStick"],
      yR = new Map,
      NW = {
        xbox: "xbox",
        playstation: "playstation",
        nintendo: "nintendo",
        steamdeck: "steamdeck",
        generic: "xbox"
      },
      eW = (new Set(Object.values(NW)), {
        xbox: {
          LB: 1.5,
          RB: 1.5
        },
        steamdeck: {
          Home: 2,
          Menu: 2,
          View: 2
        }
      }),
      BW = (WW, RW) => {
        var MW, wW;
        return null !== (MW = null === (wW = eW[NW[WW]]) || void 0 === wW ? void 0 : wW[RW]) && void 0 !== MW ? MW : 1
      },
      tR = (WW, RW) => {
        const MW = `./${NW[WW]}/${RW}.svg`;
        let wW = yR.get(MW);
        return void 0 === wW && (wW = AW ? AW(MW) : "", yR.set(MW, wW)), wW
      },
      TW = new Set,
      gR = [],
      iR = WW => {
        if (!TW.has(WW)) {
          TW.add(WW);
          for (const RW of bR) {
            const MW = tR(WW, RW);
            if (MW) {
              const WW = new Image;
              WW.crossOrigin = "anonymous", WW.src = MW, gR.push(WW)
            }
          }
        }
      },
      YW = "controllerGlyphFamily";
    let JW = null;
    const PW = WW => {
        WW !== JW && (JW = WW, wW.g.setItem(YW, WW), iR(WW))
      },
      IW = () => {
        const WW = wW.g.getItem(YW);
        (0, CW.f)(WW) && WW !== JW && (JW = WW, iR(WW))
      }
  },
  7738: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => VW,
      h: () => mR
    });
    var wW = MW(75),
      CW = MW(33),
      zR = MW(1253),
      AW = MW(7088),
      bR = MW(7080),
      yR = MW(7117),
      NW = MW(7095);
    const eW = {
        x: 0,
        y: 0,
        z: 0
      },
      BW = Math.PI / 180,
      tR = WW => Math.hypot(WW.x, WW.y, WW.z),
      TW = (WW, RW) => ({
        x: WW.x * RW,
        y: WW.y * RW,
        z: WW.z * RW
      }),
      gR = (WW, RW) => ({
        x: WW.x + RW.x,
        y: WW.y + RW.y,
        z: WW.z + RW.z
      }),
      iR = (WW, RW) => ({
        x: WW.x - RW.x,
        y: WW.y - RW.y,
        z: WW.z - RW.z
      }),
      YW = WW => {
        const RW = tR(WW);
        return 0 === RW ? eW : TW(WW, 1 / RW)
      },
      JW = WW => ({
        min: {
          ...WW
        },
        max: {
          ...WW
        }
      }),
      PW = (WW, RW) => ({
        min: {
          x: Math.min(WW.min.x, RW.x),
          y: Math.min(WW.min.y, RW.y),
          z: Math.min(WW.min.z, RW.z)
        },
        max: {
          x: Math.max(WW.max.x, RW.x),
          y: Math.max(WW.max.y, RW.y),
          z: Math.max(WW.max.z, RW.z)
        }
      }),
      IW = (WW, RW) => WW.max.x - WW.min.x <= RW && WW.max.y - WW.min.y <= RW && WW.max.z - WW.min.z <= RW;
    class oW {
      constructor() {
        this.bias = eW, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = eW, this.windowSec = 0
      }
      update(WW) {
        const RW = this.gyroRange ? PW(this.gyroRange, WW.gyro) : JW(WW.gyro),
          MW = WW.accel ? this.accelRange ? PW(this.accelRange, WW.accel) : JW(WW.accel) : null;
        if (!IW(RW, 1) || MW && !IW(MW, .01)) return void this.restartWindow(WW);
        if (this.gyroRange = RW, this.accelRange = MW, this.sum = gR(this.sum, TW(WW.gyro, WW.dtSec)), this.windowSec += WW.dtSec, this.windowSec < 1) return;
        const wW = TW(this.sum, 1 / this.windowSec);
        if (tR(wW) > 5) return;
        const CW = iR(wW, this.bias);
        let zR = 0;
        !this.calibrated || this.windowSec >= 3 ? zR = 1 : tR(CW) <= 1 && (zR = Math.min(1, WW.dtSec / 1)), this.bias = gR(this.bias, TW(CW, zR)), this.calibrated = this.calibrated || zR > 0
      }
      correct(WW) {
        return iR(WW, this.bias)
      }
      getBias() {
        return this.bias
      }
      isCalibrated() {
        return this.calibrated
      }
      reset() {
        this.bias = eW, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = eW, this.windowSec = 0
      }
      restartWindow(WW) {
        this.gyroRange = JW(WW.gyro), this.accelRange = WW.accel ? JW(WW.accel) : null, this.sum = eW, this.windowSec = 0
      }
    }
    class lW {
      constructor() {
        this.down = null
      }
      update(WW, RW, MW) {
        const wW = YW(TW(RW, -1));
        if (!this.down) return this.down = wW, wW;
        const CW = TW(WW, BW * MW),
          zR = this.down,
          AW = {
            x: zR.x - (CW.y * zR.z - CW.z * zR.y),
            y: zR.y - (CW.z * zR.x - CW.x * zR.z),
            z: zR.z - (CW.x * zR.y - CW.y * zR.x)
          },
          bR = 0 === tR(wW) ? 0 : Math.min(1, MW / .25);
        var yR, NW;
        return this.down = YW((NW = bR, gR(yR = AW, TW(iR(wW, yR), NW)))), this.down
      }
      reset() {
        this.down = null
      }
    }
    class FW {
      constructor() {
        this.entries = [], this.windowSec = 0
      }
      apply(WW, RW, MW) {
        const wW = Math.hypot(WW, RW),
          CW = Math.max(0, Math.min(1, (wW - 2) / 2)),
          zR = {
            yaw: WW * (1 - CW),
            pitch: RW * (1 - CW),
            dtSec: MW
          };
        for (this.entries.push(zR), this.windowSec += MW; this.entries.length > 1 && this.windowSec - this.entries[0].dtSec >= .125;) this.windowSec -= this.entries[0].dtSec, this.entries.shift();
        let AW = 0,
          bR = 0;
        for (const NW of this.entries) AW += NW.yaw * NW.dtSec, bR += NW.pitch * NW.dtSec;
        const yR = this.windowSec > 0 ? {
          yaw: AW / this.windowSec,
          pitch: bR / this.windowSec
        } : {
          yaw: zR.yaw,
          pitch: zR.pitch
        };
        return {
          yaw: WW * CW + yR.yaw,
          pitch: RW * CW + yR.pitch
        }
      }
      reset() {
        this.entries = [], this.windowSec = 0
      }
    }
    class fW {
      constructor() {
        this.calibrator = new oW, this.gravity = new lW, this.smoother = new FW
      }
      process(WW, RW, MW) {
        const wW = Math.max(0, Math.min(.05, RW));
        this.calibrator.update({
          ...WW,
          dtSec: wW
        });
        const CW = this.calibrator.correct(WW.gyro);
        let zR = CW.y;
        "player" === MW && WW.accel && (zR = ((WW, RW) => {
          const MW = WW.y * RW.y + WW.z * RW.z;
          return -Math.sign(MW) * Math.min(1.41 * Math.abs(MW), Math.hypot(WW.y, WW.z))
        })(CW, this.gravity.update(CW, WW.accel, wW)));
        const AW = this.smoother.apply(zR, CW.x, wW),
          bR = ((WW, RW) => {
            const MW = Math.hypot(WW, RW);
            if (MW >= 1) return {
              yaw: WW,
              pitch: RW
            };
            const wW = MW / 1;
            return {
              yaw: WW * wW,
              pitch: RW * wW
            }
          })(AW.yaw, AW.pitch);
        return {
          yawDeg: bR.yaw * wW,
          pitchDeg: bR.pitch * wW
        }
      }
      getCalibration() {
        return {
          calibrated: this.calibrator.isCalibrated(),
          bias: this.calibrator.getBias()
        }
      }
      reset() {
        this.calibrator.reset(), this.gravity.reset(), this.smoother.reset()
      }
    }
    const QW = (WW, RW) => {
      var MW, wW, CW;
      const zR = RW * BW,
        AW = null !== (MW = WW.beta) && void 0 !== MW ? MW : 0,
        bR = null !== (wW = WW.gamma) && void 0 !== wW ? wW : 0;
      return {
        x: AW * Math.cos(zR) - bR * Math.sin(zR),
        y: AW * Math.sin(zR) + bR * Math.cos(zR),
        z: null !== (CW = WW.alpha) && void 0 !== CW ? CW : 0
      }
    };
    var rR = MW(7740);
    class cR {
      constructor(WW, RW, MW) {
        this.hid = WW, this.sink = RW, this.onControllersChanged = MW, this.controllers = new Map, this.running = !1, this.openedCount = 0, this.opening = new Set, this.disconnectedWhileOpening = new Set, this.switchPacketCounter = 0, this.onConnect = WW => {
          this.openController(WW.device).catch((WW => {
            console.warn("Could not open motion controller", WW)
          }))
        }, this.onDisconnect = WW => {
          this.opening.has(WW.device) && this.disconnectedWhileOpening.add(WW.device);
          const RW = this.controllers.get(WW.device);
          RW && (this.forget(RW), this.onControllersChanged())
        }
      }
      async start() {
        if (this.running) return;
        this.running = !0, this.hid.addEventListener("connect", this.onConnect), this.hid.addEventListener("disconnect", this.onDisconnect);
        const WW = await this.hid.getDevices();
        for (const RW of WW) await this.openController(RW).catch((WW => {
          console.warn("Could not open motion controller", WW)
        }))
      }
      stop() {
        this.running = !1, this.hid.removeEventListener("connect", this.onConnect), this.hid.removeEventListener("disconnect", this.onDisconnect);
        for (const WW of [...this.controllers.values()]) this.forget(WW);
        this.onControllersChanged()
      }
      async request() {
        const WW = await this.hid.requestDevice({
          filters: rR.k
        });
        let RW = 0;
        for (const MW of WW) await this.openController(MW).catch((WW => {
          console.warn("Could not open motion controller", WW), RW++
        }));
        return RW
      }
      async hasGrantedController() {
        return (await this.hid.getDevices()).some((WW => null !== (0, rR.d)(WW.vendorId, WW.productId)))
      }
      getConnectedKinds() {
        return [...this.controllers.values()].map((WW => WW.kind))
      }
      forget(WW) {
        WW.device.removeEventListener("inputreport", WW.onReport), this.controllers.get(WW.device) === WW && this.controllers.delete(WW.device)
      }
      async openController(WW) {
        const RW = (0, rR.d)(WW.vendorId, WW.productId);
        if (!RW || !this.running || this.controllers.has(WW) || this.opening.has(WW)) return;
        this.opening.add(WW);
        let MW = !1;
        try {
          WW.opened || await WW.open()
        } finally {
          this.opening.delete(WW), MW = this.disconnectedWhileOpening.delete(WW)
        }
        if (MW) return void WW.close().catch((WW => {
          console.debug("Could not close an unplugged motion controller", WW)
        }));
        if (!this.running) return;
        const wW = {
          device: WW,
          kind: RW,
          lastClock: null,
          lastEventMs: null,
          lastReadingMs: -1 / 0,
          openedOrder: this.openedCount++,
          onReport: WW => {
            this.onReport(wW, WW)
          }
        };
        this.controllers.set(WW, wW), WW.addEventListener("inputreport", wW.onReport), this.onControllersChanged();
        try {
          await this.enableMotion(wW)
        } catch (CW) {
          console.warn(`Could not turn on motion for ${RW}`, CW), this.controllers.get(WW) === wW && (this.forget(wW), this.onControllersChanged())
        }
      }
      async enableMotion(WW) {
        let {
          device: RW,
          kind: MW
        } = WW;
        if ((0, rR.h)(MW))
          for (const wW of rR.t[MW]) await RW.receiveFeatureReport(wW).catch((WW => {
            console.debug(`Motion controller feature report ${wW} unavailable`, WW)
          }));
        else
          for (let wW = 0; wW < 2; wW++)
            for (const {
                subcommand: WW,
                args: MW
              }
              of rR.v) await RW.sendReport(rR.z, (0, rR.b)(this.switchPacketCounter++, WW, MW)), await new Promise((WW => {
              setTimeout(WW, 60)
            }))
      }
      onReport(WW, RW) {
        const MW = (0, rR.p)(WW.kind, RW.reportId, RW.data, WW.device.productId);
        if (!MW) return;
        const wW = null === WW.lastEventMs ? 0 : (RW.timeStamp - WW.lastEventMs) / 1e3;
        WW.lastEventMs = RW.timeStamp;
        let CW = MW.dtSec;
        if (null !== CW && wW > 0 && (CW = Math.max(.001, Math.min(.017, wW / MW.readings.length))), null === CW && null !== MW.sensorClock && (0, rR.h)(WW.kind)) {
          const RW = (0, rR.q)(WW.kind, WW.lastClock, MW.sensorClock);
          WW.lastClock = MW.sensorClock, CW = 0 === RW ? null : RW
        }
        if (WW.lastReadingMs = RW.timeStamp, this.isPreferred(WW, RW.timeStamp))
          for (const AW of MW.readings) {
            var zR;
            this.sink(AW, null !== (zR = CW) && void 0 !== zR ? zR : wW, `hid${WW.openedOrder}`)
          }
      }
      isPreferred(WW, RW) {
        const MW = WW => 1e6 * rR.m[WW.kind] + WW.openedOrder;
        for (const wW of this.controllers.values())
          if (wW !== WW && RW - wW.lastReadingMs < 500 && MW(wW) < MW(WW)) return !1;
        return !0
      }
    }
    var XW = MW(116);
    const jR = () => DeviceMotionEvent,
      kR = () => "undefined" !== typeof window && "undefined" !== typeof DeviceMotionEvent && window.isSecureContext && (0, XW.isMobile)(),
      aR = () => {
        var WW;
        const RW = null === (WW = window.screen.orientation) || void 0 === WW ? void 0 : WW.angle;
        return "number" === typeof RW ? RW : "number" === typeof window.orientation ? window.orientation : 0
      };
    class sW {
      constructor(WW, RW) {
        this.sink = WW, this.onStateChanged = RW, this.state = "off", this.lastEventMs = null, this.noSensorTimer = null, this.wanted = !1, this.permissionRequest = null, this.granted = !1, this.onGesture = () => {
          this.requestPermission().catch((WW => {
            console.warn("Could not enable the motion sensor", WW)
          }))
        }, this.onMotion = WW => {
          const RW = WW.rotationRate;
          if (!RW || null === RW.alpha && null === RW.beta && null === RW.gamma) return;
          const MW = null === this.lastEventMs ? 0 : (WW.timeStamp - this.lastEventMs) / 1e3;
          this.lastEventMs = WW.timeStamp, this.clearNoSensorTimer(), this.setState("on"), this.sink({
            gyro: QW(RW, aR()),
            accel: null
          }, MW, "phone")
        }
      }
      getState() {
        return this.state
      }
      start() {
        if (this.wanted = !0, "off" === this.state) return "function" !== typeof jR().requestPermission || this.granted ? void this.listen() : (this.setState("needsPermission"), void this.armGestureRequest())
      }
      requestPermission() {
        return this.permissionRequest || (this.permissionRequest = this.askPermission().finally((() => {
          this.permissionRequest = null
        }))), this.permissionRequest
      }
      async askPermission() {
        const WW = jR().requestPermission;
        if (!this.wanted) return;
        if ("function" !== typeof WW) return void this.listen();
        let RW;
        this.disarmGestureRequest();
        try {
          RW = await WW.call(DeviceMotionEvent)
        } catch (MW) {
          throw this.wanted && "needsPermission" === this.state && this.armGestureRequest(), MW
        }
        this.wanted && ("granted" === RW ? (this.granted = !0, this.listen()) : this.setState("denied"))
      }
      stop() {
        this.wanted = !1, this.disarmGestureRequest(), window.removeEventListener("devicemotion", this.onMotion), this.clearNoSensorTimer(), this.lastEventMs = null, this.setState("off")
      }
      armGestureRequest() {
        window.addEventListener("touchend", this.onGesture), window.addEventListener("click", this.onGesture)
      }
      disarmGestureRequest() {
        window.removeEventListener("touchend", this.onGesture), window.removeEventListener("click", this.onGesture)
      }
      listen() {
        this.disarmGestureRequest(), window.removeEventListener("devicemotion", this.onMotion), window.addEventListener("devicemotion", this.onMotion), this.setState("waiting"), this.clearNoSensorTimer(), this.noSensorTimer = setTimeout((() => {
          this.noSensorTimer = null, "waiting" === this.state && this.setState("noSensor")
        }), 3e3)
      }
      clearNoSensorTimer() {
        null !== this.noSensorTimer && (clearTimeout(this.noSensorTimer), this.noSensorTimer = null)
      }
      setState(WW) {
        this.state !== WW && (this.state = WW, this.onStateChanged())
      }
    }
    const dW = "controllerGyroStatusChanged",
      pW = {
        iMW: 0,
        YRW: 0
      },
      hW = WW => {
        var RW, MW;
        return "undefined" === typeof document || (null === (RW = null === (MW = document.featurePolicy) || void 0 === MW ? void 0 : MW.allowsFeature(WW)) || void 0 === RW || RW)
      };
    class UW {
      constructor() {
        this.processor = new fW, this.hid = void 0, this.hidBlocked = void 0, this.phone = void 0, this.phoneBlocked = void 0, this.source = null, this.pendingYawDeg = 0, this.pendingPitchDeg = 0, this.lastDrainMs = -1 / 0, this.lastHidReadingMs = -1 / 0, this.running = !1, this.phoneRunning = !1, this.syncWithSettings = WW => {
          const RW = WW.gyroAiming && bR.g.hasConnectedPad();
          var MW, wW;
          RW !== this.phoneRunning && (this.phoneRunning = RW, RW ? null === (MW = this.phone) || void 0 === MW || MW.start() : null === (wW = this.phone) || void 0 === wW || wW.stop());
          if (WW.gyroAiming !== this.running) {
            var CW, zR;
            if (this.running = WW.gyroAiming, this.running) null === (CW = this.hid) || void 0 === CW || CW.start().catch((WW => {
              console.warn("Could not open motion controllers", WW)
            }));
            else null === (zR = this.hid) || void 0 === zR || zR.stop(), this.processor.reset(), this.source = null, this.discardPending();
            this.publishStatus()
          }
        }, this.publishStatus = () => {
          CW.k.Sz(dW, this.getStatus())
        };
        const WW = (() => {
            var WW;
            return "undefined" !== typeof navigator && window.isSecureContext && null !== (WW = navigator.hid) && void 0 !== WW ? WW : null
          })(),
          RW = hW("hid");
        this.hidBlocked = null !== WW && !RW, this.hid = WW && RW ? new cR(WW, ((WW, RW, MW) => {
          this.lastHidReadingMs = performance.now(), this.feed(WW, RW, "player", MW)
        }), this.publishStatus) : null;
        const MW = hW("accelerometer") && hW("gyroscope");
        this.phoneBlocked = kR() && !MW, this.phone = kR() && MW ? new sW(((WW, RW, MW) => {
          performance.now() - this.lastHidReadingMs >= 500 && this.feed(WW, RW, "local", MW)
        }), this.publishStatus) : null, CW.k.subscribe(NW.e, this.syncWithSettings), bR.g.onConnectedPadsChanged((() => {
          this.syncWithSettings((0, NW.i)()), this.publishStatus()
        })), this.syncWithSettings((0, NW.i)())
      }
      isSupported() {
        return null !== this.hid || null !== this.phone
      }
      getStatus() {
        var WW, RW, MW, wW;
        return {
          hidSupported: null !== this.hid,
          hidBlocked: this.hidBlocked,
          phoneSupported: null !== this.phone,
          phoneBlocked: this.phoneBlocked,
          controllers: null !== (WW = null === (RW = this.hid) || void 0 === RW ? void 0 : RW.getConnectedKinds()) && void 0 !== WW ? WW : [],
          phoneMotion: null !== (MW = null === (wW = this.phone) || void 0 === wW ? void 0 : wW.getState()) && void 0 !== MW ? MW : "off",
          padConnected: bR.g.hasConnectedPad()
        }
      }
      async connectController() {
        return this.hid ? this.hid.request() : 0
      }
      async connectControllerIfNoneGranted() {
        this.hid && !await this.hid.hasGrantedController() && await this.hid.request()
      }
      async allowPhoneMotion() {
        var WW;
        await (null === (WW = this.phone) || void 0 === WW ? void 0 : WW.requestPermission())
      }
      drainLookDelta() {
        const WW = performance.now();
        WW - this.lastDrainMs > 500 && this.discardPending(), this.lastDrainMs = WW;
        const RW = {
          yawDeg: this.pendingYawDeg,
          pitchDeg: this.pendingPitchDeg
        };
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0;
        const MW = (0, NW.i)();
        return MW.gyroAiming && (WW => {
          let {
            activation: RW,
            isHeld: MW,
            useButton: wW,
            gyroButton: CW
          } = WW;
          return "always" === RW || MW("aiming" === RW ? wW : CW)
        })({
          activation: MW.gyroActivation,
          isHeld: WW => yR.c.isButtonHeld(WW),
          useButton: (0, AW.g)("use"),
          gyroButton: MW.gyroButton
        }) ? ((WW, RW) => ({
          iMW: -WW.yawDeg * RW * BW,
          YRW: -WW.pitchDeg * RW * BW
        }))(RW, MW.gyroSensitivity) : pW
      }
      discardPending() {
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0
      }
      injectMotion(WW, RW) {
        this.feed(WW, RW, "local", "injected")
      }
      getCalibration() {
        return this.processor.getCalibration()
      }
      feed(WW, RW, MW, wW) {
        this.source !== wW && (this.processor.reset(), this.source = wW);
        const CW = this.processor.process(WW, RW, MW);
        this.pendingYawDeg += CW.yawDeg, this.pendingPitchDeg += CW.pitchDeg
      }
    }
    let EW = null;
    const VW = () => (EW || (EW = new UW), EW),
      mR = () => {
        const [WW, RW] = (0, wW.useState)((() => VW().getStatus()));
        return (0, zR.f)(dW, RW), (0, wW.useEffect)((() => {
          RW(VW().getStatus())
        }), []), WW
      }
  },
  7740: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => lW,
      d: () => yR,
      h: () => wW,
      k: () => bR,
      l: () => NW,
      m: () => eW,
      p: () => PW,
      q: () => YW,
      t: () => fW,
      v: () => FW,
      z: () => IW
    });
    const wW = WW => "dualShock4" === WW || "dualSense" === WW,
      CW = 1356,
      zR = 1406,
      AW = [{
        vendorId: CW,
        productId: 1476,
        kind: "dualShock4"
      }, {
        vendorId: CW,
        productId: 2508,
        kind: "dualShock4"
      }, {
        vendorId: CW,
        productId: 2976,
        kind: "dualShock4"
      }, {
        vendorId: CW,
        productId: 3302,
        kind: "dualSense"
      }, {
        vendorId: CW,
        productId: 3570,
        kind: "dualSense"
      }, {
        vendorId: zR,
        productId: 8201,
        kind: "switchPro"
      }, {
        vendorId: zR,
        productId: 8198,
        kind: "joyConLeft"
      }, {
        vendorId: zR,
        productId: 8199,
        kind: "joyConRight"
      }],
      bR = AW.map((WW => {
        let {
          vendorId: RW,
          productId: MW
        } = WW;
        return {
          vendorId: RW,
          productId: MW
        }
      })),
      yR = (WW, RW) => {
        var MW, wW;
        return null !== (MW = null === (wW = AW.find((MW => MW.vendorId === WW && MW.productId === RW))) || void 0 === wW ? void 0 : wW.kind) && void 0 !== MW ? MW : null
      },
      NW = {
        dualShock4: "DualShock 4",
        dualSense: "DualSense",
        switchPro: "Switch Pro Controller",
        joyConLeft: "Joy-Con (L)",
        joyConRight: "Joy-Con (R)"
      },
      eW = {
        dualSense: 0,
        dualShock4: 0,
        switchPro: 0,
        joyConRight: 1,
        joyConLeft: 2
      },
      BW = 2e3 / 32767,
      tR = 1 / 8192,
      TW = 936 / 13371,
      gR = (WW, RW, MW) => ({
        x: WW.getInt16(RW, !0) * MW,
        y: WW.getInt16(RW + 2, !0) * MW,
        z: WW.getInt16(RW + 4, !0) * MW
      }),
      iR = WW => 0 === WW.x && 0 === WW.y && 0 === WW.z,
      YW = (WW, RW, MW) => null === RW ? null : "dualShock4" === WW ? 16 * (MW - RW & 65535) / 3 / 1e6 : (MW - RW >>> 0) / 3 / 1e6,
      JW = (WW, RW) => "joyConRight" === RW ? {
        x: WW.y,
        y: -WW.z,
        z: -WW.x
      } : {
        x: -WW.y,
        y: WW.z,
        z: -WW.x
      },
      PW = (WW, RW, MW, CW) => wW(WW) ? ((WW, RW, MW, wW) => {
        const CW = ((WW, RW, MW) => "dualShock4" === WW ? 1 === RW && MW >= 63 ? 0 : 17 === RW && MW >= 65 ? 2 : null : 1 === RW && MW >= 62 ? 0 : 49 === RW && MW >= 63 ? 1 : null)(WW, RW, MW.byteLength);
        if (null === CW) return null;
        if (2976 === wW && 1 === RW && 0 !== (4 & MW.getUint8(30))) return null;
        const zR = CW + ("dualShock4" === WW ? 12 : 15),
          AW = gR(MW, zR, BW),
          bR = gR(MW, zR + 6, tR);
        return iR(AW) && iR(bR) ? null : {
          readings: [{
            gyro: AW,
            accel: bR
          }],
          dtSec: null,
          sensorClock: "dualShock4" === WW ? MW.getUint16(CW + 9, !0) : MW.getUint32(CW + 27, !0)
        }
      })(WW, RW, MW, CW) : ((WW, RW, MW) => {
        if (48 !== RW && 49 !== RW || MW.byteLength < 48) return null;
        const wW = [];
        for (let CW = 0; CW < 3; CW++) {
          const RW = gR(MW, 12 + 12 * CW, 244e-6),
            zR = gR(MW, 18 + 12 * CW, TW);
          if (iR(zR) && iR(RW)) return null;
          wW.push({
            gyro: JW(zR, WW),
            accel: JW(RW, WW)
          })
        }
        return {
          readings: wW,
          dtSec: .005,
          sensorClock: null
        }
      })(WW, RW, MW),
      IW = 1,
      oW = [0, 1, 64, 64, 0, 1, 64, 64],
      lW = (WW, RW, MW) => new Uint8Array([15 & WW, ...oW, RW, ...MW]),
      FW = [{
        subcommand: 64,
        args: [1]
      }, {
        subcommand: 3,
        args: [48]
      }],
      fW = {
        dualShock4: [2, 5],
        dualSense: [5]
      }
  },
  7121: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => jR,
      c: () => UW,
      f: () => JW,
      i: () => TW.d,
      j: () => sW,
      m: () => aR,
      p: () => PW,
      t: () => dW,
      v: () => TW.m,
      z: () => TW.q,
      C: () => EW,
      E: () => TW.u,
      I: () => QW
    });
    var wW = MW(75),
      CW = MW(27),
      zR = MW(33),
      AW = MW(1253),
      bR = MW(1115),
      yR = MW(7095),
      NW = MW(7126),
      eW = MW(7084),
      BW = MW(7080),
      tR = MW(7134),
      TW = MW(1208),
      gR = MW(7082),
      iR = MW(7551);
    class YW {
      constructor() {
        this.travelled = 0, this.lastMoveMs = -1 / 0
      }
      add(WW, RW, MW) {
        return MW - this.lastMoveMs > 250 && (this.travelled = 0), this.lastMoveMs = MW, this.travelled += Math.hypot(WW, RW), this.travelled >= 12
      }
      reset() {
        this.travelled = 0, this.lastMoveMs = -1 / 0
      }
    }
    const JW = WW => !WW.repeat && !(0, iR.b)(WW.key),
      PW = "PadHidesCursor";
    let IW = !1;
    const oW = WW => {
        WW !== IW && (IW = WW, document.documentElement.classList.toggle(PW, WW))
      },
      lW = new class {
        constructor() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
        observe(WW) {
          let RW = !1,
            MW = !1;
          WW.values.forEach(((WW, wW) => {
            const CW = WW >= (this.buttonsDown[wW] ? gR.P : gR.L);
            CW && !this.buttonsDown[wW] && (RW = !0, MW = !0), this.buttonsDown[wW] = CW
          }));
          return [WW.leftStick, WW.rightStick].forEach(((WW, wW) => {
            const CW = this.stickAnchors[wW];
            Math.hypot(WW.x, WW.y) < (CW ? gR.P : .3) ? this.stickAnchors[wW] = null : (!CW || Math.hypot(WW.x - CW.x, WW.y - CW.y) >= .3) && (this.stickAnchors[wW] = {
              x: WW.x,
              y: WW.y
            }, RW = !0, MW ||= !CW)
          })), RW && (this.lastActivityMs = WW.timestampMs), this.onlyMovedOn = RW && !MW, RW
        }
        wasOnlyMoveOn() {
          return this.onlyMovedOn
        }
        isHolding(WW) {
          return !(WW - this.lastActivityMs >= 1e3) && (this.buttonsDown.some((WW => WW)) || this.stickAnchors.some((WW => null !== WW)))
        }
        isStickOffRest() {
          return this.stickAnchors.some((WW => null !== WW))
        }
        reset() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
      };
    let FW = null,
      fW = !1;
    const QW = () => fW;
    let rR = null,
      cR = !1,
      XW = null;
    const jR = () => XW;
    let kR = !1;
    const aR = WW => {
        if (!lW.observe(WW)) return !1;
        if (kR && lW.wasOnlyMoveOn() && !(0, TW.d)()) return !1;
        kR = !1, fW = !1;
        const RW = !(0, TW.d)();
        return RW && (FW = WW, XW = !IW && cR && rR ? {
          ...rR
        } : null), cR = !1, (0, TW.m)("gamepad"), oW(!0), (0, tR.m)((0, yR.m)()), RW
      },
      sW = WW => !(0, TW.d)() || WW === FW,
      dW = () => {
        lW.reset()
      },
      pW = () => {
        const WW = CW.b.get("activeInputDevice"),
          RW = "gamepad" === WW ? BW.g.getActivePad() : null;
        return {
          device: WW,
          inGame: (0, bR.p)(),
          padMovesMouse: null !== RW && (0, eW.g)(RW.id)
        }
      },
      hW = WW => {
        document.pointerLockElement ? rR = null : (rR ??= {
          x: 0,
          y: 0
        }, rR.x = WW.clientX, rR.y = WW.clientY)
      },
      UW = () => {
        const WW = new YW,
          RW = RW => {
            WW.reset(), kR = !1, (0, TW.m)(RW)
          },
          MW = WW => {
            if (WW.isTrusted) {
              if (WW instanceof KeyboardEvent) {
                if ((0, TW.i)(WW), !JW(WW)) return;
                fW = !0
              }
              if (WW instanceof PointerEvent && "touch" === WW.pointerType) return rR = null, void RW("touch");
              WW instanceof PointerEvent && (hW(WW), cR = !0), ("pointerdown" !== WW.type || (WW => {
                let {
                  device: RW,
                  inGame: MW,
                  padMovesMouse: wW
                } = WW;
                return !("gamepad" === RW && wW && MW)
              })(pW())) && RW("keyboardMouse")
            }
          },
          wW = WW => {
            WW.isTrusted && (rR = null, RW("touch"))
          },
          AW = WW => {
            WW.isTrusted && "touch" !== WW.pointerType && !WW.relatedTarget && (rR = null)
          },
          bR = MW => {
            if (!MW.isTrusted || "touch" === MW.pointerType) return;
            hW(MW);
            const wW = MW.movementX || 0,
              zR = MW.movementY || 0;
            if (0 === wW && 0 === zR) return;
            if (cR = !0, oW(!1), "keyboardMouse" === CW.b.get("activeInputDevice")) return;
            const AW = lW.isHolding(MW.timeStamp),
              bR = pW(),
              yR = (WW => {
                let {
                  device: RW,
                  inGame: MW,
                  padMovesMouse: wW,
                  padHolding: CW
                } = WW;
                return ("gamepad" !== RW || !wW) && "keyboardMouse" !== RW && (MW || !CW)
              })({
                ...bR,
                inGame: bR.inGame && (0, NW.e)(),
                padHolding: AW
              });
            yR && WW.add(wW, zR, MW.timeStamp) && (RW("keyboardMouse"), kR = lW.isStickOffRest())
          },
          yR = WW => {
            oW("gamepad" === WW)
          },
          eW = {
            capture: !0,
            passive: !0
          };
        window.addEventListener("keydown", MW, eW), window.addEventListener("pointerdown", MW, eW), window.addEventListener("wheel", MW, eW), window.addEventListener("touchstart", wW, eW), window.addEventListener("pointermove", bR, eW), window.addEventListener("pointerout", AW, eW);
        const BW = zR.k.subscribe("appManagerUpdated|activeInputDevice", yR);
        return yR(CW.b.get("activeInputDevice")), () => {
          window.removeEventListener("keydown", MW, eW), window.removeEventListener("pointerdown", MW, eW), window.removeEventListener("wheel", MW, eW), window.removeEventListener("touchstart", wW, eW), window.removeEventListener("pointermove", bR, eW), window.removeEventListener("pointerout", AW, eW), rR = null, zR.k.unsubscribe(BW), oW(!1)
        }
      },
      EW = () => {
        const [WW, RW] = (0, wW.useState)(yR.m);
        return (0, AW.f)(yR.c, (() => {
          RW((0, yR.m)())
        })), (0, AW.f)(BW.e, (() => {
          RW((0, yR.m)())
        })), WW
      }
  },
  7097: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => wW,
      f: () => CW
    });
    const wW = ["xbox", "playstation", "nintendo", "steamdeck", "generic"],
      CW = WW => wW.includes(WW)
  },
  7126: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => NW,
      e: () => eW,
      i: () => yR,
      l: () => bR
    });
    var wW = MW(27),
      CW = MW(1459),
      zR = MW(1498);
    const AW = new Map,
      bR = (WW, RW) => (AW.has(WW) && console.warn(`Gameplay blocker "${WW}" registered twice; the newer one replaces it.`), AW.set(WW, RW), () => {
        AW.get(WW) === RW && AW.delete(WW)
      }),
      yR = () => (0, zR.e)(document.activeElement),
      NW = function() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const [RW, MW] of AW)
          if (!WW.includes(RW) && MW()) return RW;
        return null
      },
      eW = function() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return "inGame" === wW.b.get("gameState") && (!(0, CW.o)() && (!yR() && null === NW(WW)))
      }
  },
  7082: (WW, RW, MW) => {
    MW.d(RW, {
      D: () => kR,
      F: () => oW,
      G: () => JW,
      H: () => YW,
      K: () => NW,
      L: () => tR,
      P: () => TW,
      S: () => CW,
      V: () => wW,
      W: () => FW,
      Y: () => XW,
      Z: () => aR,
      ab: () => lW,
      c: () => sW,
      d: () => jR,
      e: () => eW,
      g: () => yR,
      i: () => bR,
      m: () => QW,
      p: () => PW,
      s: () => fW,
      u: () => zR,
      w: () => BW,
      z: () => IW
    });
    const wW = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "View", "Menu", "LS", "RS", "Up", "Down", "Left", "Right", "Home"],
      CW = wW.length,
      zR = function() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return {
          values: new Array(CW).fill(0),
          leftStick: {
            x: 0,
            y: 0
          },
          rightStick: {
            x: 0,
            y: 0
          },
          timestampMs: WW
        }
      },
      AW = Object.fromEntries(wW.map(((WW, RW) => [WW, RW]))),
      bR = WW => AW[WW],
      yR = function(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .95;
        const wW = Math.hypot(WW.x, WW.y);
        if (wW <= RW) return {
          x: 0,
          y: 0
        };
        const CW = Math.min(1, (wW - RW) / Math.max(1e-4, MW - RW));
        return {
          x: WW.x / wW * CW,
          y: WW.y / wW * CW
        }
      },
      NW = ["exponential", "linear", "boost"],
      eW = (WW, RW) => {
        const MW = Math.hypot(WW.x, WW.y);
        if (0 === MW) return {
          x: 0,
          y: 0
        };
        const wW = ((WW, RW) => {
          const MW = Math.max(0, Math.min(1, WW));
          return "linear" === RW ? MW : MW * MW
        })(MW, RW);
        return {
          x: WW.x / MW * wW,
          y: WW.y / MW * wW
        }
      },
      BW = .5,
      tR = .3,
      TW = .2,
      gR = bR("LT"),
      iR = bR("RT"),
      YW = WW => WW === gR || WW === iR,
      JW = (WW, RW) => {
        const MW = bR(RW);
        return YW(MW) ? WW[MW] > .35 : WW[MW] >= BW
      },
      PW = (WW, RW) => WW.map(((WW, MW) => YW(MW) ? RW[MW] ? WW > .35 : WW >= .55 : WW >= BW)),
      IW = ["Up", "Down", "Left", "Right"],
      oW = WW => IW.includes(WW),
      lW = function(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        return Math.hypot(WW.x, WW.y) < RW ? null : Math.abs(WW.x) > Math.abs(WW.y) ? WW.x > 0 ? "Right" : "Left" : WW.y > 0 ? "Down" : "Up"
      },
      FW = {
        initialDelayMs: 350,
        intervalMs: 120
      },
      fW = {
        initialDelayMs: 350,
        intervalMs: 150
      },
      QW = ["default", "slow", "off"],
      rR = 800,
      cR = 250,
      XW = (WW, RW) => "off" === RW ? null : "slow" === RW ? {
        initialDelayMs: Math.max(WW.initialDelayMs, rR),
        intervalMs: Math.max(WW.intervalMs, cR)
      } : WW;
    class jR {
      constructor(WW) {
        this.readTiming = WW, this.mM = !1, this.timing = null, this.nextFireMs = 0
      }
      update(WW, RW) {
        return WW ? this.mM ? !!(this.timing && RW >= this.nextFireMs) && (this.nextFireMs = RW + this.timing.intervalMs, !0) : (this.mM = !0, this.timing = this.readTiming(), this.nextFireMs = RW + (null !== (MW = null === (wW = this.timing) || void 0 === wW ? void 0 : wW.initialDelayMs) && void 0 !== MW ? MW : 0), !0) : (this.mM = !1, !1);
        var MW, wW
      }
      reset() {
        this.mM = !1
      }
    }
    const kR = {
        initialDelayMs: 350,
        intervalMs: 80
      },
      aR = {
        initialDelayMs: 400,
        intervalMs: 90
      };
    class sW {
      constructor(WW) {
        this.timer = WW, this.direction = null
      }
      update(WW, RW) {
        return WW !== this.direction && (this.timer.reset(), this.direction = WW), this.timer.update(null !== WW, RW) ? WW : null
      }
      reset() {
        this.timer.reset(), this.direction = null
      }
    }
  },
  7655: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => CW,
      d: () => zR
    });
    let wW = -1 / 0;
    const CW = () => {
        wW = performance.now()
      },
      zR = WW => performance.now() - wW < WW
  },
  7558: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => AW,
      f: () => zR
    });
    var wW = MW(7095),
      CW = MW(7082);
    const zR = WW => (0, CW.Y)(WW, (0, wW.i)().buttonRepeat),
      AW = WW => new CW.d((() => zR(WW)))
  },
  7109: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => yR,
      e: () => zR,
      f: () => bR
    });
    var wW = MW(33),
      CW = MW(7095);
    const zR = (WW, RW) => "OpenShop" === WW ? "shop" === RW : "OpenLobbyLeaderboard" !== WW || "leaderboard" === RW;
    let AW = !1;
    const bR = WW => {
        WW !== AW && (AW = WW, wW.k.Sz(CW.c, (0, CW.i)()))
      },
      yR = () => ((WW, RW) => "shop" === WW && RW ? "shop" : "leaderboard")((0, CW.i)().leaderboardButton, AW)
  },
  7106: (WW, RW, MW) => {
    MW.d(RW, {
      C: () => lW,
      G: () => tR,
      H: () => TW,
      J: () => BW,
      M: () => XW,
      O: () => oW,
      P: () => NW,
      Q: () => JW,
      T: () => cR,
      W: () => IW,
      Y: () => iR,
      ab: () => YW,
      d: () => pW,
      db: () => gR,
      f: () => UW,
      g: () => AW,
      hb: () => PW,
      i: () => rR,
      kb: () => aR,
      m: () => fW,
      mb: () => zR,
      ob: () => FW,
      p: () => sW,
      pb: () => hW,
      s: () => dW,
      sb: () => QW,
      t: () => eW,
      v: () => yR,
      z: () => bR
    });
    var wW = MW(7090),
      CW = MW(7082);
    const zR = {
        min: 25,
        max: 500,
        step: 5
      },
      AW = {
        min: 25,
        max: 100,
        step: 5
      },
      bR = {
        min: 0,
        max: .4,
        step: .01
      },
      yR = {
        min: 25,
        max: 300,
        step: 5
      },
      NW = {
        min: .5,
        max: 6,
        step: .1
      },
      eW = (WW, RW) => {
        if (!Number.isFinite(WW)) return RW.min;
        const MW = RW.min + Math.round((WW - RW.min) / RW.step) * RW.step,
          wW = Math.min(RW.max, Math.max(RW.min, MW));
        return Math.round(1e3 * wW) / 1e3
      },
      BW = WW => `${Math.round(WW)}%`,
      tR = WW => BW(100 * WW),
      TW = WW => `${WW.toFixed(1)}\xd7`,
      gR = [{
        value: "auto",
        labelKey: "controller:settingsPromptAuto"
      }, {
        value: "xbox",
        labelKey: "controller:settingsPromptXbox"
      }, {
        value: "playstation",
        labelKey: "controller:settingsPromptPlayStation"
      }, {
        value: "nintendo",
        labelKey: "controller:settingsPromptNintendo"
      }, {
        value: "steamdeck",
        labelKey: "controller:settingsPromptSteamDeck"
      }, {
        value: "generic",
        labelKey: "controller:settingsPromptGeneric"
      }],
      iR = [{
        value: "exponential",
        labelKey: "controller:settingsCurveExponential"
      }, {
        value: "linear",
        labelKey: "controller:settingsCurveLinear"
      }, {
        value: "boost",
        labelKey: "controller:settingsCurveBoost"
      }],
      YW = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "focus",
        labelKey: "controller:settingsMenuNavFocus"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      JW = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "slot",
        labelKey: "controller:settingsInventoryNavSlot"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      PW = [{
        value: "wheel",
        labelKey: "controller:settingsQuickChatWheel"
      }, {
        value: "off",
        labelKey: "controller:settingsQuickChatOff"
      }],
      IW = [{
        value: "shop",
        labelKey: "controller:settingsLeaderboardButtonShop"
      }, {
        value: "leaderboard",
        labelKey: "controller:settingsLeaderboardButtonLeaderboard"
      }],
      oW = [{
        value: "always",
        labelKey: "controller:settingsGyroAlways"
      }, {
        value: "aiming",
        labelKey: "controller:settingsGyroWhileAiming"
      }, {
        value: "button",
        labelKey: "controller:settingsGyroWhileButton"
      }],
      lW = [{
        value: "tapHold",
        labelKey: "controller:settingsEmoteButtonTapHold"
      }, {
        value: "wheel",
        labelKey: "controller:settingsEmoteButtonWheel"
      }],
      FW = [{
        value: "toggle",
        labelKey: "controller:settingsSneakToggle"
      }, {
        value: "hold",
        labelKey: "controller:settingsSneakHold"
      }],
      fW = [{
        value: "default",
        labelKey: "controller:settingsButtonRepeatDefault"
      }, {
        value: "slow",
        labelKey: "controller:settingsButtonRepeatSlow"
      }, {
        value: "off",
        labelKey: "controller:settingsButtonRepeatOff"
      }],
      QW = [{
        value: "short",
        labelKey: "controller:settingsTapHoldShort"
      }, {
        value: "medium",
        labelKey: "controller:settingsTapHoldMedium"
      }, {
        value: "long",
        labelKey: "controller:settingsTapHoldLong"
      }],
      rR = [{
        value: "hold",
        labelKey: "controller:settingsAttackHold"
      }, {
        value: "toggle",
        labelKey: "controller:settingsAttackToggle"
      }],
      cR = {
        southpaw: "controller:settingsLayoutSouthpaw",
        triggersSwapped: "controller:settingsLayoutTriggersSwapped"
      },
      XW = WW => `controller:settingsAction${WW.charAt(0).toUpperCase()}${WW.slice(1)}`,
      jR = {
        gameplay: "controller:settingsGroupGameplay",
        menu: "controller:settingsGroupMenus",
        inventory: "controller:settingsGroupInventory",
        keyboard: "controller:settingsGroupKeyboard"
      },
      kR = [{
        kind: "fixed",
        stick: "move",
        labelKey: "controller:settingsActionMove"
      }, {
        kind: "fixed",
        stick: "look",
        labelKey: "controller:settingsActionLook"
      }],
      aR = wW.c.map((WW => {
        let {
          group: RW,
          actions: MW
        } = WW;
        const wW = MW.map((WW => ({
          kind: "action",
          action: WW
        })));
        return {
          titleKey: jR[RW],
          rows: "gameplay" === RW ? [...kR, ...wW] : wW
        }
      })),
      sW = CW.V.filter((WW => "Home" !== WW)),
      dW = 1e4;
    class pW {
      constructor(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
        this.cancelButton = WW, this.openButton = RW, this.accepts = MW, this.startMs = null, this.ignoredUntilMs = new Map, this.cancelDownAtMs = null
      }
      update(WW, RW) {
        var MW;
        this.updateIgnored(WW, RW);
        const wW = RW - (null !== (MW = this.startMs) && void 0 !== MW ? MW : RW) >= 250;
        for (const CW of sW)
          if (CW !== this.cancelButton && wW && !this.ignoredUntilMs.has(CW) && WW.wasPressed(CW) && this.accepts(CW)) return {
            kind: "bind",
            button: CW
          };
        if (this.ignoredUntilMs.has(this.cancelButton)) return null;
        if (WW.wasPressed(this.cancelButton)) {
          if (!this.accepts(this.cancelButton)) return {
            kind: "cancel"
          };
          this.cancelDownAtMs = RW
        }
        return null === this.cancelDownAtMs ? null : WW.isHeld(this.cancelButton) && RW - this.cancelDownAtMs >= 700 ? (this.cancelDownAtMs = null, {
          kind: "bind",
          button: this.cancelButton
        }) : WW.wasReleased(this.cancelButton) ? (this.cancelDownAtMs = null, {
          kind: "cancel"
        }) : null
      }
      getBindHoldProgress(WW) {
        return null === this.cancelDownAtMs ? 0 : Math.min(1, (WW - this.cancelDownAtMs) / 700)
      }
      updateIgnored(WW, RW) {
        if (null === this.startMs) {
          this.startMs = RW;
          for (const RW of sW) WW.isDown(RW) && this.ignoredUntilMs.set(RW, 1 / 0);
          this.openButton && !this.ignoredUntilMs.has(this.openButton) && this.ignoredUntilMs.set(this.openButton, RW + 250)
        }
        for (const [MW, wW] of this.ignoredUntilMs) {
          const CW = WW.isDown(MW);
          wW === 1 / 0 ? CW || MW !== this.openButton ? CW || this.ignoredUntilMs.delete(MW) : this.ignoredUntilMs.set(MW, RW + 250) : RW >= wW ? this.ignoredUntilMs.delete(MW) : CW && this.ignoredUntilMs.set(MW, 1 / 0)
        }
      }
    }
    const hW = 6e3;
    class UW {
      constructor() {
        this.downAtMs = null, this.pressesAtMs = []
      }
      update(WW, RW) {
        let {
          pressed: MW,
          mM: wW
        } = WW;
        if (MW) {
          const WW = this.pressesAtMs.at(-1);
          if (this.pressesAtMs = void 0 !== WW && RW - WW < 1500 ? [...this.pressesAtMs, RW] : [RW], this.pressesAtMs.length >= 3) return 1
        }
        return wW ? (this.downAtMs ??= RW, Math.min(1, (RW - this.downAtMs) / 1500)) : (this.downAtMs = null, 0)
      }
    }
  },
  7596: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => zR,
      e: () => CW
    });
    var wW = MW(33);
    const CW = "localBlockBroken";

    function zR() {
      return {
        onPlayerChangeBlock(WW, RW, MW, zR, AW, bR) {
          "Air" === bR && wW.k.Sz(CW)
        }
      }
    }
  },
  7149: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/A.926fb88933484dfbde14.svg"
  },
  7157: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/B.9f5ec099f78f84e44427.svg"
  },
  7163: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  7169: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  7177: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/LB.3a20b15927b55d5d8b60.svg"
  },
  7181: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  7183: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/LT.9fdc5e69011b9d41f50a.svg"
  },
  7190: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  7195: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  7203: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Menu.c903a662eb685211e52e.svg"
  },
  7212: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/RB.bba470ddb76ceec5d168.svg"
  },
  7218: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  7227: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/RT.e5a9fbcc3c79550111ca.svg"
  },
  7234: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  7236: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  7242: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  7246: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/View.0c9378b5d720a636d50d.svg"
  },
  7255: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/X.c9377519af94e6dce1d7.svg"
  },
  7262: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Y.62d8c17731dd2e172426.svg"
  },
  7268: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/A.958a6de9474f8d0c9caf.svg"
  },
  7274: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/B.d05958bfa88a1162b47a.svg"
  },
  7281: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Down.db68fb3980768eb54671.svg"
  },
  7287: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  7292: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/LB.37a3c5128c958ec2a0c2.svg"
  },
  7294: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/LS.15b0cc5bf3f2fe7bbd8b.svg"
  },
  7296: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/LT.5412ae5222c69f8c833f.svg"
  },
  7299: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Left.4457b2895ce94a5df32e.svg"
  },
  7308: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  7311: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Menu.1e8427f8133c9d456c53.svg"
  },
  7314: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/RB.c96c4aa2590209e930c7.svg"
  },
  7318: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/RS.8d70d147cf1ab136e845.svg"
  },
  7321: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/RT.1e4691bb5a7c049693df.svg"
  },
  7326: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Right.a1e101413040c540b879.svg"
  },
  7330: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  7338: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Up.7544a65ad4f611a55775.svg"
  },
  7345: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/View.003cae39de89cae0b9d8.svg"
  },
  7351: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/X.d88b6e62dd8fb4bda32a.svg"
  },
  7360: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Y.428d3e70775877892f82.svg"
  },
  7369: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  7378: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  7380: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  7383: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Home.ea8b009cfa9562aa644e.svg"
  },
  7387: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/LB.f283d355d22fc107d6d6.svg"
  },
  7395: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  7401: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/LT.13e66c122e7ee04bb876.svg"
  },
  7406: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  7414: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  7418: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Menu.90fc4e918900eb5062a0.svg"
  },
  7421: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/RB.918a7f16dc054d96b6f3.svg"
  },
  7423: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  7428: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/RT.a0523211130959598bed.svg"
  },
  7432: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  7440: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  7445: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  7452: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/View.0bc952e292c28c3baac2.svg"
  },
  7459: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  7461: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  },
  7463: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  7468: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  7475: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  7478: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Home.8898f76b20962fe52ab7.svg"
  },
  7486: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/LB.689ba3703ae248f2e4cc.svg"
  },
  7490: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  7492: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/LT.9c2d10d335ab5c590525.svg"
  },
  7494: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  7498: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  7505: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Menu.9e485791ea97009871ca.svg"
  },
  7510: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/RB.7ee5ce48dd551f993f80.svg"
  },
  7518: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  7521: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/RT.903ecadc55a9e9e00f07.svg"
  },
  7530: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  7532: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  7535: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  7540: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/View.3c5eeb34f0413bde4a65.svg"
  },
  7542: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  7547: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);