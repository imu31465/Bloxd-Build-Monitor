export const id = 26;
export const ids = [26];
export const modules = {
  7117: (cB, Bc, nc) => {
    var Vc = {
      "./nintendo/A.svg": 7122,
      "./nintendo/B.svg": 7128,
      "./nintendo/Down.svg": 7135,
      "./nintendo/Home.svg": 7140,
      "./nintendo/LB.svg": 7145,
      "./nintendo/LS.svg": 7150,
      "./nintendo/LT.svg": 7156,
      "./nintendo/Left.svg": 7161,
      "./nintendo/LeftStick.svg": 7168,
      "./nintendo/Menu.svg": 7174,
      "./nintendo/RB.svg": 7180,
      "./nintendo/RS.svg": 7182,
      "./nintendo/RT.svg": 7186,
      "./nintendo/Right.svg": 7194,
      "./nintendo/RightStick.svg": 7201,
      "./nintendo/Up.svg": 7210,
      "./nintendo/View.svg": 7219,
      "./nintendo/X.svg": 7225,
      "./nintendo/Y.svg": 7230,
      "./playstation/A.svg": 7232,
      "./playstation/B.svg": 7236,
      "./playstation/Down.svg": 7244,
      "./playstation/Home.svg": 7248,
      "./playstation/LB.svg": 7251,
      "./playstation/LS.svg": 7257,
      "./playstation/LT.svg": 7265,
      "./playstation/Left.svg": 7268,
      "./playstation/LeftStick.svg": 7274,
      "./playstation/Menu.svg": 7276,
      "./playstation/RB.svg": 7283,
      "./playstation/RS.svg": 7292,
      "./playstation/RT.svg": 7301,
      "./playstation/Right.svg": 7305,
      "./playstation/RightStick.svg": 7309,
      "./playstation/Up.svg": 7316,
      "./playstation/View.svg": 7323,
      "./playstation/X.svg": 7327,
      "./playstation/Y.svg": 7333,
      "./steamdeck/A.svg": 7336,
      "./steamdeck/B.svg": 7338,
      "./steamdeck/Down.svg": 7345,
      "./steamdeck/Home.svg": 7351,
      "./steamdeck/LB.svg": 7358,
      "./steamdeck/LS.svg": 7365,
      "./steamdeck/LT.svg": 7374,
      "./steamdeck/Left.svg": 7378,
      "./steamdeck/LeftStick.svg": 7385,
      "./steamdeck/Menu.svg": 7389,
      "./steamdeck/RB.svg": 7397,
      "./steamdeck/RS.svg": 7399,
      "./steamdeck/RT.svg": 7402,
      "./steamdeck/Right.svg": 7408,
      "./steamdeck/RightStick.svg": 7416,
      "./steamdeck/Up.svg": 7418,
      "./steamdeck/View.svg": 7425,
      "./steamdeck/X.svg": 7428,
      "./steamdeck/Y.svg": 7431,
      "./xbox/A.svg": 7438,
      "./xbox/B.svg": 7445,
      "./xbox/Down.svg": 7453,
      "./xbox/Home.svg": 7461,
      "./xbox/LB.svg": 7468,
      "./xbox/LS.svg": 7473,
      "./xbox/LT.svg": 7477,
      "./xbox/Left.svg": 7485,
      "./xbox/LeftStick.svg": 7491,
      "./xbox/Menu.svg": 7496,
      "./xbox/RB.svg": 7505,
      "./xbox/RS.svg": 7512,
      "./xbox/RT.svg": 7516,
      "./xbox/Right.svg": 7525,
      "./xbox/RightStick.svg": 7529,
      "./xbox/Up.svg": 7536,
      "./xbox/View.svg": 7545,
      "./xbox/X.svg": 7554,
      "./xbox/Y.svg": 7559
    };

    function Ic(cB) {
      var Bc = rB(cB);
      return nc(Bc)
    }

    function rB(cB) {
      if (!nc.o(Vc, cB)) {
        var Bc = new Error("Cannot find module '" + cB + "'");
        throw Bc.code = "MODULE_NOT_FOUND", Bc
      }
      return Vc[cB]
    }
    Ic.keys = function() {
      return Object.keys(Vc)
    }, Ic.resolve = rB, cB.exports = Ic, Ic.id = 7117
  },
  7061: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Ic,
      g: () => rB,
      k: () => Tc,
      m: () => Oc,
      o: () => Pc,
      q: () => sc,
      u: () => Vc,
      w: () => fc,
      y: () => mB
    });
    const Vc = ["menuConfirm", "menuBack", "menuTabPrevious", "menuTabNext", "menuPageUp", "menuPageDown", "menuSecondary", "menuToggleCursor"],
      Ic = [{
        group: "gameplay",
        actions: ["jump", "sneak", "sneakToggle", "sprint", "attack", "use", "hotbarPrevious", "hotbarNext", "inventory", "actionButton", "perspective", "uL", "drop", "emoteWheel", "chat", "pause", "leaderboard"]
      }, {
        group: "menu",
        actions: Vc
      }, {
        group: "inventory",
        actions: ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryClose", "inventoryPanelPrevious", "inventoryPanelNext", "inventoryDrop", "inventoryHotbarSwap"]
      }, {
        group: "keyboard",
        actions: ["keyboardType", "keyboardBackspace", "keyboardSpace", "keyboardCaretLeft", "keyboardCaretRight", "keyboardShift", "keyboardSymbols", "keyboardSubmit", "keyboardClose", "keyboardChannel"]
      }],
      rB = {
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
        uL: "Up",
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
      uc = ["uL", "perspective"],
      sc = cB => uc.includes(cB) ? uc : [cB],
      Mc = Object.fromEntries(Ic.flatMap((cB => {
        let {
          group: Bc,
          actions: nc
        } = cB;
        return nc.map((cB => [cB, Bc]))
      }))),
      Pc = cB => Mc[cB],
      qB = {
        pause: ["menu"],
        leaderboard: ["menu"],
        inventory: ["menu"],
        menuPageUp: ["inventory"],
        menuPageDown: ["inventory"]
      },
      Oc = cB => {
        var Bc;
        return [Pc(cB), ...null !== (Bc = qB[cB]) && void 0 !== Bc ? Bc : []]
      },
      Tc = new Set(["menu", "inventory", "keyboard"]),
      fc = {
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
        "mid-fire": "uL",
        OpenInventory: "inventory",
        OpenSettings: "pause",
        OpenLobbyLeaderboard: "leaderboard",
        OpenShop: "leaderboard",
        OpenEmoteWheel: "emoteWheel"
      },
      mB = new Set(["forward", "backward", "left", "right"])
  },
  7059: (cB, Bc, nc) => {
    nc.d(Bc, {
      A: () => Qc,
      D: () => Yc,
      E: () => zB,
      G: () => gB,
      H: () => qB,
      J: () => Lc,
      K: () => Zc,
      e: () => yB,
      f: () => hc,
      g: () => Tc,
      i: () => fc,
      l: () => Cc,
      p: () => bB,
      t: () => Uc,
      w: () => pc
    });
    var Vc = nc(7061),
      Ic = nc(7064),
      rB = nc(7044),
      uc = nc(7083);
    const sc = cB => "uL" === cB ? "perspective" : cB,
      Mc = (cB, Bc) => {
        var nc;
        const Ic = sc(Bc);
        return null !== (nc = cB[Ic]) && void 0 !== nc ? nc : Vc.g[Ic]
      },
      Pc = new Map([
        ["menuConfirm", "menuBack"],
        ["inventoryPrimary", "inventoryClose"],
        ["keyboardType", "keyboardClose"]
      ].flatMap((cB => {
        let [Bc, nc] = cB;
        return [
          [Bc, nc],
          [nc, Bc]
        ]
      }))),
      qB = (cB, Bc) => null !== cB && void 0 !== cB ? cB : "nintendo" === Bc,
      Oc = cB => qB((0, Ic.k)().swapConfirmBack, (0, Ic.n)()) && Pc.get(cB) || cB,
      Tc = cB => Mc((0, Ic.k)().TV, Oc(cB)),
      fc = cB => Vc.g[Oc(cB)],
      mB = Object.keys(Vc.g),
      ec = cB => "gameplay" === (0, Vc.o)(cB) ? ["gameplay"] : (0, Vc.m)(cB),
      tB = (cB, Bc) => {
        const nc = ec(Bc);
        return ec(cB).some((cB => nc.includes(cB)))
      },
      Sc = (cB, Bc, nc) => {
        const Ic = Mc(cB, Bc),
          uc = new Set((0, Vc.q)(Bc)),
          Pc = [...uc];
        for (let Vc = Pc.pop(); Vc; Vc = Pc.pop())
          for (const Bc of mB) {
            const rB = Mc(cB, Bc);
            uc.has(Bc) || rB !== nc && rB !== Ic || !tB(Vc, Bc) || (uc.add(Bc), Pc.push(Bc))
          }
        const qB = {
          ...cB
        };
        for (const Oc of uc) {
          const Bc = Mc(cB, Oc) === Ic ? nc : Ic,
            uc = (0, Vc.m)(Oc).some((cB => Vc.k.has(cB)));
          if ((0, rB.R)(Bc) && uc) return null;
          qB[sc(Oc)] = Bc
        }
        for (const rB of Object.keys(qB)) qB[rB] === Vc.g[rB] && delete qB[rB];
        return qB
      },
      yB = (cB, Bc) => null !== Sc((0, Ic.k)().TV, Oc(cB), Bc),
      zB = (cB, Bc) => {
        if (Tc(cB) === Bc) return !0;
        const nc = Sc((0, Ic.k)().TV, Oc(cB), Bc);
        return !!nc && ((0, Ic.o)({
          TV: nc
        }), !0)
      },
      pc = (cB, Bc) => {
        const nc = (0, Vc.q)(Bc);
        return mB.filter((Bc => sc(Bc) === Bc && !nc.includes(Bc) && Mc(cB, Oc(Bc)) !== Tc(Bc)))
      },
      hc = ["southpaw", "triggersSwapped"],
      aB = {
        southpaw: {
          sprint: "RS",
          sneakToggle: "LS"
        },
        triggersSwapped: {
          attack: "LT",
          use: "RT"
        }
      },
      lc = cB => Object.keys(aB[cB]),
      Yc = (cB, Bc) => "southpaw" === cB ? Bc.swapSticks : lc(cB).every((nc => Mc(Bc.TV, nc) === aB[cB][nc])),
      Lc = (cB, Bc) => {
        const nc = (0, Ic.k)();
        let rB = nc.TV;
        for (const Ic of lc(cB)) {
          const nc = Bc ? aB[cB][Ic] : Vc.g[Ic];
          if (rB = Sc(rB, Ic, nc), !rB) return !1
        }
        return (0, Ic.o)({
          swapSticks: "southpaw" === cB ? Bc : nc.swapSticks,
          TV: rB
        }), !0
      },
      gB = () => {
        (0, Ic.o)({
          swapSticks: !1,
          TV: {}
        })
      },
      Uc = () => (0, Ic.k)().swapSticks ? "RightStick" : "LeftStick",
      bB = () => (0, Ic.k)().swapSticks ? "LeftStick" : "RightStick",
      Zc = cB => (0, Ic.k)().swapSticks && (0, rB.R)(cB),
      Qc = cB => Zc(cB) ? Uc() : bB(),
      Cc = cB => {
        if (Vc.y.has(cB)) return Uc();
        const Bc = Vc.w[cB];
        return Bc && ("leaderboard" !== Bc || (0, uc.g)(cB, (0, uc.e)())) ? Tc(Bc) : null
      }
  },
  7033: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      ControllerCategory: () => nM,
      ControllerGlyph: () => mI,
      ControllerRoot: () => ns,
      PadLobbyShortcuts: () => yM,
      PadSneakChip: () => Ps,
      PadTooltip: () => Os,
      attachPressToContinue: () => gM,
      getBoundButton: () => qB.g,
      getControllerSettings: () => Tc.k,
      getGlyphForNoaAction: () => qB.l,
      getInventoryCursorState: () => IM,
      getMenuShortcutButton: () => wI,
      getPadGlyphIconName: () => us,
      getPadGlyphIconUrl: () => ss,
      getPadRepeatTiming: () => ec.d,
      hasActivePad: () => VM,
      isPadSteppingSlots: () => rP
    });
    const Vc = JSON.parse('{"controller":{"inventoryTake":"Take","inventoryTakeHalf":"Take half","inventoryPlace":"Place","inventoryPlaceOne":"Place one","inventoryQuickMove":"Quick move","inventoryToHotbar":"To hotbar","inventoryPutBack":"Put back","inventoryHotbarSwap":"Swap with hotbar","inventorySwapHere":"Swap here","inventoryCancel":"Cancel","inventoryClose":"Close","inventoryDrop":"Drop (hold: stack)","inventorySelect":"Select","inventoryCraft":"Craft (hold to repeat)","inventoryCraftAll":"Craft all","inventoryChooseRecipe":"Choose","inventoryBackToRecipes":"Back to recipes","inventoryType":"Type","inventoryPanels":"Switch panel","inventoryCategory":"Category","inventoryPage":"Page","disconnected":"Controller disconnected","gameplayReload":"Reload","gameplayActionWheelHint":"(hold for more)","gameplaySneaking":"Sneaking","gameplayLoadFailedTitle":"Controller unavailable","gameplayLoadFailedSubtitle":"Reload the page to play with your controller.","gameplayDropStack":"Keep holding to drop the stack","gameplayAttackLatched":"Attacking","gameplayPickBlock":"Pick block","padButtonView":"View","padButtonMenu":"Menu","padButtonHome":"Home","padButtonCreate":"Create","padButtonOptions":"Options","padButtonDpadUp":"D-pad \u2191","padButtonDpadDown":"D-pad \u2193","padButtonDpadLeft":"D-pad \u2190","padButtonDpadRight":"D-pad \u2192","padButtonLeftStick":"L Stick","padButtonRightStick":"R Stick","settingsLook":"Look","settingsLookSensitivityX":"Look sensitivity (horizontal)","settingsLookSensitivityY":"Look sensitivity (vertical)","settingsAimLookSensitivity":"Look sensitivity while aiming (use held)","settingsInvertLookX":"Invert horizontal look","settingsInvertLookY":"Invert vertical look","settingsLookCurve":"Look curve","settingsLookCurveHint":"Steep gives finer aim near the centre, Linear turns at an even rate, and Boost turns faster when you hold the stick all the way.","settingsCurveExponential":"Steep","settingsCurveLinear":"Linear","settingsCurveBoost":"Boost","settingsLookDeadzone":"Look deadzone","settingsGyro":"Gyro aiming","settingsGyroToggle":"Aim by moving the controller","settingsGyroToggleInfo":"Turn and tilt the controller to aim, on top of the right stick.","settingsGyroTogglePhone":"Aim by moving your phone or tablet","settingsGyroToggleInfoPhone":"Turn and tilt your phone or tablet to aim, on top of the right stick.","settingsGyroUnsupported":"Gyro aiming needs Chrome or Edge.","settingsGyroBlocked":"Gyro aiming isn\'t available on this site.","settingsGyroPhoneNeedsController":"Connect a controller to aim by moving your phone or tablet.","settingsGyroSteamHint":"If Steam already turns your gyro into mouse movement, leave this off.","settingsGyroConnect":"Connect motion controller","settingsGyroConnectHint":"Works with DualSense, DualShock 4 and Switch controllers.","settingsGyroConnectNeedsClick":"Click Connect with your mouse: the browser asks before sharing a controller.","settingsGyroOpenFailed":"Another app is using the controller. Close apps such as Steam or DS4Windows, then try again.","settingsGyroConnected":"Aiming with {{name}}.","settingsGyroAllowMotion":"Allow motion sensor","settingsGyroAllowNeedsTap":"Tap Allow motion sensor on your screen to turn it on.","settingsGyroPhoneOn":"Aiming with this device\'s motion sensor.","settingsGyroPhoneWaiting":"Waiting for this device\'s motion sensor\u2026","settingsGyroPhoneNoSensor":"No motion sensor found on this device.","settingsGyroPhoneDenied":"Motion access is blocked. Allow it in your browser settings.","settingsGyroSensitivity":"Gyro sensitivity","settingsGyroActivation":"Gyro turns on","settingsGyroAlways":"Always","settingsGyroWhileAiming":"While aiming","settingsGyroWhileButton":"While holding a button","settingsGyroAimingHint":"Hold {{button}} to aim with motion.","settingsGyroButton":"Gyro button","settingsGyroButtonHint":"While gyro aiming is on, this button only turns the gyro on in game, so pick one you rarely use.","settingsMovement":"Movement","settingsMoveDeadzone":"Move deadzone","settingsAutoSprint":"Sprint at full tilt","settingsAutoSprintInfo":"Push the movement stick all the way to sprint.","settingsSneak":"Sneak","settingsSneakHold":"Hold","settingsSneakToggle":"Toggle","settingsButtons":"Buttons","settingsPromptFamily":"Button prompts","settingsPromptAuto":"Match my controller","settingsPromptXbox":"Xbox","settingsPromptPlayStation":"PlayStation","settingsPromptNintendo":"Nintendo","settingsPromptSteamDeck":"Steam Deck","settingsPromptGeneric":"Generic","settingsHideButtonHints":"Hide button hints","settingsVibration":"Vibration","settingsCursorSpeed":"Virtual cursor speed","settingsCursorMagnetism":"Cursor snaps onto buttons","settingsMenuBackToCategories":"Back returns to the category list first","settingsAccessibility":"Accessibility","settingsSwapConfirmBack":"Swap confirm and back","settingsSwapToast":"Select and Back have swapped buttons.","settingsLayoutRefusedToast":"This layout doesn\'t fit your current buttons. Reset them to use it.","settingsSwapConfirmBackInfo":"Select with the right face button and go back with the bottom one, in menus, the inventory and the on-screen keyboard. On by default for Nintendo controllers.","settingsButtonRepeat":"Button repeat","settingsButtonRepeatHint":"How a held button repeats in menus, sliders, the on-screen keyboard and crafting. Off acts once per press, and holding drop in game drops just one item.","settingsButtonRepeatDefault":"Default","settingsButtonRepeatSlow":"Slow (0.8 s, then 4 a second)","settingsButtonRepeatOff":"Off (once per press)","settingsTapHoldTime":"Tap/hold time","settingsTapHoldTimeHint":"How long to hold the chat, emote or action button to open its wheel, or the view button to change view where a tap picks a block. Dropping a whole stack takes 0.8, 1 or 1.3 s.","settingsTapHoldShort":"Short (0.25 s)","settingsTapHoldMedium":"Medium (0.5 s)","settingsTapHoldLong":"Long (0.8 s)","settingsEmoteButton":"Emote button","settingsEmoteButtonTapHoldHint":"Tap to repeat your last emote, or hold to open the emote wheel.","settingsEmoteButtonWheelHint":"Any press opens the emote wheel, with no hold to time. Pick with the stick, then select.","settingsEmoteButtonTapHold":"Tap repeats, hold opens wheel","settingsEmoteButtonWheel":"Opens the wheel","settingsAttackMode":"Attack / mine","settingsAttackHoldHint":"Hold attack to keep attacking or mining.","settingsAttackToggleHint":"Press attack once to keep attacking or mining, and again to stop.","settingsAttackHold":"Hold","settingsAttackToggle":"Toggle","settingsLargePointer":"Large pointer and focus","settingsLargePointerInfo":"A bigger menu cursor, thicker selection brackets and bigger button hints.","settingsRemap":"Remap buttons","settingsRemapHint":"Select an action, then press a button. If that button is taken, the two swap.","settingsLayoutSouthpaw":"Southpaw (move with the right stick)","settingsLayoutTriggersSwapped":"Triggers swapped (attack with the left trigger)","settingsCapturePrompt":"Press a button","settingsCaptureCancelHint":"Press {{button}} to cancel","settingsCaptureCancelOrBindHint":"Tap {{button}} to cancel, or hold it to choose it","settingsReset":"Reset","settingsSwapNotice":"{{action}} moved to {{button}}","settingsResetAll":"Reset all buttons and sticks","settingsGroupGameplay":"Movement & gameplay","settingsGroupMenus":"Menus","settingsGroupInventory":"Inventory","settingsGroupKeyboard":"On-screen keyboard","settingsActionMove":"Move","settingsActionLook":"Look around","settingsActionJump":"Jump","settingsActionSneak":"Sneak","settingsActionSneakToggle":"Toggle sneak","settingsActionSprint":"Sprint","settingsActionAttack":"Attack / mine","settingsActionUse":"Use / place","settingsActionHotbarPrevious":"Previous hotbar slot","settingsActionHotbarNext":"Next hotbar slot","settingsActionInventory":"Inventory","settingsActionActionButton":"Game action","settingsActionPerspective":"Change view","settingsActionPickBlock":"Pick block (creative)","settingsActionDrop":"Drop item","settingsActionEmoteWheel":"Emotes","settingsActionChat":"Chat","settingsActionPause":"Pause menu","settingsActionLeaderboard":"Shop / leaderboard","settingsActionMenuConfirm":"Select","settingsActionMenuBack":"Back","settingsActionMenuTabPrevious":"Previous tab","settingsActionMenuTabNext":"Next tab","settingsActionMenuPageUp":"Page up","settingsActionMenuPageDown":"Page down","settingsActionMenuSecondary":"Secondary action","settingsActionMenuToggleCursor":"Switch to virtual cursor","settingsActionInventoryPrimary":"Pick up / place","settingsActionInventorySecondary":"Pick up half / place one","settingsActionInventoryQuickMove":"Quick move","settingsActionInventoryHotbarSwap":"Swap with hotbar slot","settingsActionInventoryClose":"Close","settingsActionInventoryPanelPrevious":"Previous panel","settingsActionInventoryPanelNext":"Next panel","settingsActionInventoryDrop":"Drop item","settingsActionKeyboardType":"Type key","settingsActionKeyboardBackspace":"Backspace","settingsActionKeyboardSpace":"Space","settingsActionKeyboardCaretLeft":"Move cursor left","settingsActionKeyboardCaretRight":"Move cursor right","settingsActionKeyboardShift":"Shift","settingsActionKeyboardSymbols":"Accents and symbols","settingsActionKeyboardSubmit":"Send","settingsActionKeyboardClose":"Close keyboard","settingsActionKeyboardChannel":"Chat channel","settingsAlternatives":"Try alternatives","settingsAlternativesHint":"Try each way of playing and keep the one that feels best.","settingsMenuNavigation":"Menu navigation","settingsMenuNavigationHint":"Steer a cursor with the stick and jump between buttons with the D-pad, or use just one.","settingsNavHybrid":"Cursor and D-pad","settingsMenuNavFocus":"Jump between buttons","settingsVirtualCursor":"Virtual cursor","settingsInventoryNavigation":"Inventory","settingsInventoryNavigationHint":"Steer a cursor with the stick and step slot by slot with the D-pad, or use just one.","settingsInventoryNavSlot":"Slot by slot","settingsQuickChat":"Hold chat button","settingsQuickChatHint":"Hold the chat button to pick a quick phrase. Tapping it still opens chat.","settingsQuickChatWheel":"Quick chat wheel","settingsQuickChatOff":"Off","settingsLeaderboardButton":"Shop / leaderboard button","settingsLeaderboardButtonHint":"Open the shop in one press in games that have one. The lobby leaderboard is still in the pause menu.","settingsLeaderboardButtonShop":"Shop, in games with one","settingsLeaderboardButtonLeaderboard":"Always the leaderboard","settingsTester":"Gamepad tester","settingsTesterNoPad":"Connect a gamepad and press any button to test it.","settingsTesterFamily":"Detected: {{family}}","settingsTesterHint":"Start a test to try every button and stick without moving through the menu.","settingsTesterStart":"Start test","settingsTesterStop":"Stop test","settingsTesterTesting":"Press anything to see it light up. To stop, hold {{button}} or press it three times.","settingsControlsNote":"Playing with a gamepad? Change its buttons and feel in Gamepad settings.","settingsOpenController":"Gamepad settings","keyboardSpace":"Space","keyboardSend":"Send","keyboardDone":"Done","keyboardTargetChat":"Chat","keyboardTargetSign":"Sign","keyboardTargetNameTag":"Name tag","keyboardTargetBook":"Book page","keyboardTargetBookTitle":"Book title","keyboardTargetText":"Text","keyboardPhraseGg":"gg","keyboardPhraseHi":"hi","keyboardPhraseThanks":"thanks","keyboardPhraseGl":"gl","keyboardPhraseBrb":"brb","keyboardPhraseYes":"yes","keyboardPhraseNo":"no","keyboardPhraseHelp":"help!","quickChatPick":"Pick a phrase","actionWheelPick":"Pick an action","wheelReleaseToPick":"Release to pick","wheelClose":"Close","wheelChoose":"Choose","menusSelect":"Select","menusBack":"Back","menusClose":"Close","menusQuickChat":"Quick chat (hold)","menusSkipTutorial":"Skip tutorial","menusTabs":"Tabs","menusRows":"Rows","menusCursorMode":"Cursor","menusFocusMode":"Focus","menusClick":"Click","menusRightClick":"Right-click","menusScroll":"Scroll","menusFriends":"Friends","menusSearch":"Search","menusSettings":"Settings","menusLeaveGameTitle":"Leave the game?","menusLeaveGameLeave":"Leave","menusLeaveGameStay":"Stay","menusNotifications":"Notifications","menusLobby":"Lobby","menusShop":"Shop","menusTasks":"Tasks & leaderboards","menusInvite":"Invite friends","menusAdjust":"Adjust","menusFavourite":"Favourite","screensPressToContinue":"Press {{button}} to continue","screensPressToEnterGame":"Press {{button}} to enter game","screensEnterGame":"Enter game","screensBackToGames":"Back to games","tutorialMine":"Mine","tutorialPlace":"Place / Use","tutorialInventory":"Inventory","tutorialPause":"Pause","menusUseMouse":"Use a mouse or touch here"}}');
    var Ic = nc(1051),
      rB = nc(1237),
      uc = nc(7038),
      sc = nc(83),
      Mc = nc(27),
      Pc = nc(35),
      qB = nc(7059),
      Oc = nc(7090),
      Tc = nc(7064),
      fc = nc(7098),
      mB = nc(7044),
      ec = nc(7569),
      tB = nc(7574),
      Sc = nc(1480);
    const yB = (cB, Bc, nc) => Math.max(Bc, Math.min(nc, cB)),
      zB = cB => Math.min(cB.width, cB.height) / 720,
      pc = cB => Math.max(.15, cB);
    class hc {
      constructor() {
        this.locked = !1
      }
      lock() {
        this.locked = !0
      }
      update(cB, Bc) {
        const nc = Math.hypot(cB.x, cB.y) >= (cB => Math.max(.3, cB))(Bc);
        return this.locked ? (this.locked = nc, !1) : nc
      }
    }
    const aB = (cB, Bc) => {
        const nc = yB(Bc.dtMs, 0, 100),
          Vc = nc / 1e3,
          Ic = zB(Bc.viewport) * (Bc.cursorSpeedPercent / 100),
          rB = (0, mB.p)(Bc.stick, pc(Bc.moveDeadzone)),
          uc = Math.hypot(rB.x, rB.y),
          sc = ((cB, Bc, nc) => {
            if (Bc < .3) return 0;
            const Vc = nc / 350;
            return Bc >= .85 ? Math.min(1, cB + Vc) : Math.max(0, cB - Vc)
          })(cB.speedRamp, uc, nc);
        let Mc = cB.x,
          Pc = cB.y;
        if (uc > 0) {
          const cB = .45 + .55 * sc,
            nc = Bc.context.overInteractive ? .45 : 1,
            qB = 1400 * (cB => {
              const Bc = yB(cB, 0, 1);
              return .3 * Bc + .7 * Bc * Bc
            })(uc) * Ic * cB * nc;
          Mc += rB.x / uc * qB * Vc, Pc += rB.y / uc * qB * Vc
        }
        const qB = Math.hypot(Bc.dpad.x, Bc.dpad.y);
        if (qB > 0) {
          const cB = 500 * Ic;
          Mc += Bc.dpad.x / qB * cB * Vc, Pc += Bc.dpad.y / qB * cB * Vc
        }
        const Oc = Bc.context.magnetTarget;
        if (Oc && uc < .3 && 0 === qB) {
          const cB = ((cB, Bc, nc, Vc, Ic) => {
            const rB = Bc.x - cB.x,
              uc = Bc.y - cB.y,
              sc = Math.hypot(rB, uc);
            if (0 === sc) return {
              x: 0,
              y: 0
            };
            const Mc = Math.min(sc, Ic * (1 - Vc / .3));
            let Pc = rB / sc * Mc,
              qB = uc / sc * Mc;
            if (Vc > 0) {
              const cB = nc.x / Vc,
                Bc = nc.y / Vc,
                Ic = Pc * cB + qB * Bc;
              Ic < 0 && (Pc -= Ic * cB, qB -= Ic * Bc)
            }
            return {
              x: Pc,
              y: qB
            }
          })({
            x: Mc,
            y: Pc
          }, Oc, rB, uc, 120 * zB(Bc.viewport) * Vc);
          Mc += cB.x, Pc += cB.y
        }
        return {
          x: yB(Mc, 0, Math.max(0, Bc.viewport.width - 1)),
          y: yB(Pc, 0, Math.max(0, Bc.viewport.height - 1)),
          speedRamp: sc
        }
      },
      lc = cB => {
        const Bc = (0, mB.p)(cB, .2);
        return 0 !== Bc.x || 0 !== Bc.y
      },
      Yc = (cB, Bc) => {
        const nc = (0, mB.p)(cB, .2),
          Vc = Math.hypot(nc.x, nc.y);
        if (0 === Vc) return {
          x: 0,
          y: 0
        };
        const Ic = Vc * Vc * 1600,
          rB = yB(Bc, 0, 100) / 1e3;
        return {
          x: nc.x / Vc * Ic * rB,
          y: nc.y / Vc * Ic * rB
        }
      },
      Lc = (cB, Bc) => "y" === Bc ? cB.scrollHeight > cB.clientHeight + 1 : cB.scrollWidth > cB.clientWidth + 1,
      gB = (cB, Bc) => {
        const nc = getComputedStyle(cB),
          Vc = "y" === Bc ? nc.overflowY : nc.overflowX;
        return ("auto" === Vc || "scroll" === Vc) && Lc(cB, Bc)
      },
      Uc = (cB, Bc, nc) => {
        for (let rB = cB instanceof HTMLElement ? cB : null !== (Vc = null === cB || void 0 === cB ? void 0 : cB.parentElement) && void 0 !== Vc ? Vc : null; rB; rB = rB.parentElement) {
          var Vc;
          if (gB(rB, Bc)) return rB;
          if (rB === nc) return null
        }
        if (nc) return null;
        const Ic = document.scrollingElement;
        return Ic instanceof HTMLElement && Lc(Ic, Bc) ? Ic : null
      },
      bB = new WeakMap,
      Zc = (cB, Bc) => {
        const nc = performance.now(),
          Vc = bB.get(cB);
        if (Vc && Vc.axis === Bc && nc - Vc.atMs < 500 && (!Vc.container || Vc.container.isConnected)) return Vc.container;
        const Ic = Qc(cB, Bc);
        return bB.set(cB, {
          axis: Bc,
          atMs: nc,
          container: Ic
        }), Ic
      },
      Qc = (cB, Bc) => {
        let nc = gB(cB, Bc) ? cB : null,
          Vc = nc ? nc.clientWidth * nc.clientHeight : 0;
        for (const Ic of cB.querySelectorAll("*")) {
          const cB = Ic.clientWidth * Ic.clientHeight;
          cB > Vc && gB(Ic, Bc) && (nc = Ic, Vc = cB)
        }
        return nc
      },
      Cc = (cB, Bc, nc) => "y" === Bc ? nc < 0 ? cB.scrollTop > 0 : cB.scrollTop + cB.clientHeight < cB.scrollHeight - 1 : nc < 0 ? cB.scrollLeft > 0 : cB.scrollLeft + cB.clientWidth < cB.scrollWidth - 1,
      vB = (cB, Bc, nc) => {
        "y" === Bc ? cB.scrollBy({
          top: nc,
          behavior: "instant"
        }) : cB.scrollBy({
          left: nc,
          behavior: "instant"
        })
      },
      Dc = cB => {
        if (!cB || cB === document.scrollingElement) return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
        const Bc = cB.getBoundingClientRect(),
          nc = Math.max(0, Bc.left),
          Vc = Math.max(0, Bc.top);
        return new DOMRect(nc, Vc, Math.min(window.innerWidth, Bc.right) - nc, Math.min(window.innerHeight, Bc.bottom) - Vc)
      },
      Nc = (cB, Bc) => cB.left < Bc.right && Bc.left < cB.right && cB.top < Bc.bottom && Bc.top < cB.bottom;
    var Ec = nc(73),
      oc = nc(912),
      Wc = nc.n(oc),
      wc = nc(957);
    let kB = 0,
      Xc = !1;
    class Hc {
      constructor() {
        this.element = null, this.shownKey = "", this.gap = null
      }
      setElement(cB) {
        this.element = cB, this.shownKey = "", this.gap = null
      }
      show(cB) {
        const Bc = this.element;
        if (!Bc) return;
        const nc = cB ? this.keepOnScreen(Bc, cB) : null,
          Vc = nc ? `${nc.left},${nc.top},${nc.width},${nc.height}` : "";
        if (Vc === this.shownKey) return;
        const Ic = "" === this.shownKey;
        this.shownKey = Vc, Bc.classList.toggle("Visible", null !== nc), nc && (Bc.classList.toggle("Snap", Ic), Bc.style.width = `${nc.width}px`, Bc.style.height = `${nc.height}px`, Bc.style.transform = `translate(${nc.left}px, ${nc.top}px)`, Ic && (Bc.offsetWidth, Bc.classList.remove("Snap")))
      }
      hide() {
        this.show(null)
      }
      keepOnScreen(cB, Bc) {
        var nc;
        const Vc = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!Xc){Xc=!0;const cB=document.createElement("div");cB.setAttribute("aria-hidden","true"),cB.style.cssText="position: fixed; top: 0; left: 0; width: 1rem; height: 0; visibility: hidden; pointer-events: none",document.body.appendChild(cB),new ResizeObserver((()=>{kB++})).observe(cB)}return String(kB)})()}`;
        (null === (nc = this.gap) || void 0 === nc ? void 0 : nc.key) !== Vc && (this.gap = {
          px: parseFloat(getComputedStyle(cB).paddingLeft) || 0,
          key: Vc
        });
        const Ic = this.gap.px + 2,
          rB = Math.max(Bc.left, Ic),
          uc = Math.max(Bc.top, Ic),
          sc = Math.min(Bc.left + Bc.width, window.innerWidth - Ic),
          Mc = Math.min(Bc.top + Bc.height, window.innerHeight - Ic);
        return sc <= rB || Mc <= uc ? Bc : {
          left: rB,
          top: uc,
          width: sc - rB,
          height: Mc - uc
        }
      }
    }
    const Fc = cB => {
      let {
        placer: Bc,
        className: nc
      } = cB;
      const Vc = (0, Ec.useCallback)((cB => {
        Bc.setElement(cB)
      }), [Bc]);
      return (0, wc.jsx)("div", {
        ref: Vc,
        className: Wc()("PadReticle", nc),
        "aria-hidden": !0
      })
    };
    var Jc = nc(7583),
      jB = nc(1502);
    const Rc = cB => cB >= 56320 && cB <= 57343,
      iB = cB => cB >= 55296 && cB <= 56319,
      Kc = (cB, Bc) => Bc >= 2 && Rc(cB.charCodeAt(Bc - 1)) && iB(cB.charCodeAt(Bc - 2)) ? Bc - 2 : Math.max(0, Bc - 1),
      xB = (cB, Bc) => {
        let nc;
        var Vc, Ic;
        return nc = cB.start !== cB.end ? Bc < 0 ? cB.start : cB.end : Bc < 0 ? Kc(cB.value, cB.start) : (Vc = cB.value, (Ic = cB.start) + 1 < Vc.length && iB(Vc.charCodeAt(Ic)) && Rc(Vc.charCodeAt(Ic + 1)) ? Ic + 2 : Math.min(Vc.length, Ic + 1)), {
          value: cB.value,
          start: nc,
          end: nc
        }
      },
      dc = ["text", "search", "url", "email", "tel", "password", "number"],
      Ac = cB => !(!(0, jB.d)(cB) || cB.isContentEditable || cB.hasAttribute("data-pad-no-osk")) && (cB instanceof HTMLTextAreaElement || cB instanceof HTMLInputElement && dc.includes(cB.type)),
      Gc = cB => null !== cB.selectionStart,
      cn = cB => {
        var Bc, nc;
        const {
          value: Vc
        } = cB;
        return {
          value: Vc,
          start: null !== (Bc = cB.selectionStart) && void 0 !== Bc ? Bc : Vc.length,
          end: null !== (nc = cB.selectionEnd) && void 0 !== nc ? nc : Vc.length
        }
      },
      BB = (cB, Bc, nc) => {
        if (cB.readOnly) return;
        const Vc = cB instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(Vc, "value").set.call(cB, Bc.value), Gc(cB) && cB.setSelectionRange(Bc.start, Bc.end), (0, Sc.f)(cB, new InputEvent("input", {
          bubbles: !0,
          inputType: nc
        }))
      };
    let nB = !1;
    const VB = (cB, Bc) => !!document.execCommand(cB, !1, Bc) || (nB || (nB = !0, console.warn(`execCommand("${cB}") failed; the on-screen keyboard is setting the value directly`)), !1),
      IB = (cB, Bc) => {
        VB("insertText", Bc) || BB(cB, function(cB, Bc) {
          let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
          const Vc = cB.value.slice(0, cB.start),
            Ic = cB.value.slice(cB.end);
          let rB = nc < 0 ? Bc.length : Math.max(0, nc - Vc.length - Ic.length);
          rB > 0 && rB < Bc.length && iB(Bc.charCodeAt(rB - 1)) && rB--;
          const uc = Bc.slice(0, rB),
            sc = Vc.length + uc.length;
          return {
            value: Vc + uc + Ic,
            start: sc,
            end: sc
          }
        }(cn(cB), Bc, cB.maxLength), "insertText")
      },
      rn = cB => {
        VB("delete") || BB(cB, (cB => {
          const Bc = cB.start === cB.end ? Kc(cB.value, cB.start) : cB.start;
          return {
            value: cB.value.slice(0, Bc) + cB.value.slice(cB.end),
            start: Bc,
            end: Bc
          }
        })(cn(cB)), "deleteContentBackward")
      },
      uB = (cB, Bc) => {
        if (!Gc(cB)) return;
        const nc = xB(cn(cB), Bc);
        cB.setSelectionRange(nc.start, nc.end)
      },
      sB = ["button", "a[href]", "input:not([type=hidden])", "textarea", "select", "[role=button]", "[role=tab]", "[role=switch]", "[role=checkbox]", "[role=option]", "[role=menuitem]", "[data-pad-focusable]", "[data-pad-tab]", ".Dropdown-control", ".Dropdown-option"].join(","),
      MB = (cB, Bc) => {
        if ("function" === typeof cB.checkVisibility) return !cB.checkVisibility({
          visibilityProperty: !0,
          checkVisibilityCSS: !0,
          opacityProperty: Bc,
          checkOpacity: Bc
        });
        const {
          visibility: nc
        } = getComputedStyle(cB);
        if ("hidden" === nc || "collapse" === nc) return !0;
        if (!Bc) return !1;
        for (let Vc = cB; Vc; Vc = Vc.parentElement)
          if ("0" === getComputedStyle(Vc).opacity) return !0;
        return !1
      },
      PB = cB => {
        if (!cB.isConnected || MB(cB, !0)) return !1;
        const Bc = cB.getBoundingClientRect();
        return Bc.width > 0 && Bc.height > 0
      },
      qn = cB => !!cB.matches(":disabled, [aria-disabled='true']") || "button" === cB.getAttribute("role") && "-1" === cB.getAttribute("tabindex"),
      OB = cB => {
        var Bc;
        if (cB.closest("[data-pad-ignore]")) return !0;
        return !!(null === (Bc = cB.parentElement) || void 0 === Bc ? void 0 : Bc.closest("[data-pad-focusable]"))
      },
      TB = cB => {
        const Bc = cB.querySelectorAll(sB);
        return cB.matches(sB) ? [cB, ...Bc] : Bc
      },
      fB = cB => {
        const Bc = [];
        for (const nc of TB(cB)) !OB(nc) && PB(nc) && Bc.push(nc);
        return Bc
      },
      mn = new WeakMap,
      eB = cB => {
        const Bc = mn.get(cB);
        if (Bc && tn(Bc, cB)) return !0;
        for (const nc of TB(cB))
          if (!OB(nc) && PB(nc)) return mn.set(cB, nc), !0;
        return mn.delete(cB), !1
      },
      tn = (cB, Bc) => Bc.contains(cB) && cB.matches(sB) && !OB(cB) && PB(cB),
      SB = (cB, Bc) => tn(cB, Bc) && !qn(cB),
      yn = cB => {
        const Bc = Bc => {
          let nc = 0;
          for (let Vc = Bc.parentElement; Vc && Vc !== cB; Vc = Vc.parentElement) nc++;
          return nc
        };
        return [...cB.querySelectorAll("[data-pad-initial-area]")].filter(PB).sort(((cB, nc) => Bc(nc) - Bc(cB)))
      },
      zn = cB => Ac(cB),
      pB = cB => {
        const Bc = cB.getBoundingClientRect();
        return {
          x: Bc.left + Bc.width / 2,
          y: Bc.top + Bc.height / 2
        }
      },
      hB = (cB, Bc, nc) => ({
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window,
        clientX: cB.x,
        clientY: cB.y,
        screenX: cB.x,
        screenY: cB.y,
        button: Bc,
        buttons: nc,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0
      }),
      an = (cB, Bc) => {
        (0, Sc.f)(cB, Bc)
      },
      lB = function(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const Vc = 0 === nc ? 1 : 2;
        an(cB, new PointerEvent("pointerdown", hB(Bc, nc, Vc))), an(cB, new MouseEvent("mousedown", hB(Bc, nc, Vc)))
      },
      YB = function(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        an(cB, new PointerEvent("pointerup", hB(Bc, nc, 0))), an(cB, new MouseEvent("mouseup", hB(Bc, nc, 0)))
      },
      LB = function(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        lB(cB, Bc, nc), YB(cB, Bc, nc), an(cB, 0 === nc ? new MouseEvent("click", hB(Bc, 0, 0)) : new MouseEvent("contextmenu", hB(Bc, 2, 0)))
      },
      gn = function(cB, Bc, nc) {
        let {
          leaveBelow: Vc = null,
          enterBelow: Ic = null
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (cB !== Bc) {
          if (null !== cB && void 0 !== cB && cB.isConnected) {
            const Ic = {
              ...hB(nc, 0, 0),
              relatedTarget: Bc
            };
            an(cB, new PointerEvent("pointerout", Ic)), an(cB, new MouseEvent("mouseout", Ic));
            const rB = cB => !!Bc && cB.contains(Bc) || !!Vc && cB.contains(Vc);
            for (let Bc = cB; Bc && !rB(Bc); Bc = Bc.parentElement) an(Bc, new PointerEvent("pointerleave", {
              ...Ic,
              bubbles: !1
            })), an(Bc, new MouseEvent("mouseleave", {
              ...Ic,
              bubbles: !1
            }))
          }
          if (Bc) {
            const Vc = {
              ...hB(nc, 0, 0),
              relatedTarget: cB
            };
            an(Bc, new PointerEvent("pointerover", Vc)), an(Bc, new MouseEvent("mouseover", Vc));
            const rB = [],
              uc = Bc => !(null === cB || void 0 === cB || !cB.isConnected) && Bc.contains(cB) || !!Ic && Bc.contains(Ic);
            for (let cB = Bc; cB && !uc(cB); cB = cB.parentElement) rB.push(cB);
            for (const cB of rB.reverse()) an(cB, new PointerEvent("pointerenter", {
              ...Vc,
              bubbles: !1
            })), an(cB, new MouseEvent("mouseenter", {
              ...Vc,
              bubbles: !1
            }));
            an(Bc, new PointerEvent("pointermove", hB(nc, 0, 0))), an(Bc, new MouseEvent("mousemove", hB(nc, 0, 0)))
          }
        } else Bc && (an(Bc, new PointerEvent("pointermove", hB(nc, 0, 0))), an(Bc, new MouseEvent("mousemove", hB(nc, 0, 0))))
      },
      UB = cB => {
        Pc.i.Vu(Jc.h, cB)
      },
      bn = cB => {
        if (zn(cB)) return void UB(cB);
        const Bc = cB.hasAttribute("data-pad-focusable") ? cB.querySelector("a[href]") : null,
          nc = null !== Bc && void 0 !== Bc ? Bc : cB;
        LB(nc, pB(nc))
      },
      ZB = ".Dropdown-root.is-open",
      QB = cB => {
        const Bc = cB.querySelector(".Dropdown-control");
        return bn(Bc), Bc
      },
      CB = cB => {
        var Bc;
        const nc = null !== (Bc = cB.closest(ZB)) && void 0 !== Bc ? Bc : cB.querySelector(ZB);
        return nc ? QB(nc) : null
      },
      vn = cB => {
        for (const Bc of document.querySelectorAll(ZB)) Bc.contains(cB) || QB(Bc)
      },
      DB = cB => null !== cB.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
      NB = cB => {
        const Bc = cB ? document.elementFromPoint(cB.x, cB.y) : null;
        return !(null === Bc || void 0 === Bc || !Bc.closest("[data-pad-repeat]"))
      },
      EB = cB => {
        var Bc;
        return null !== (Bc = [...cB.querySelectorAll("[data-pad-back]")].find(PB)) && void 0 !== Bc ? Bc : null
      },
      oB = cB => {
        const Bc = EB(cB);
        return !!Bc && (bn(Bc), !0)
      },
      WB = cB => {
        var Bc, nc, Vc, Ic;
        return null !== (Bc = null !== (nc = null !== (Vc = cB.getAttribute("data-pad-key")) && void 0 !== Vc ? Vc : cB.getAttribute("href")) && void 0 !== nc ? nc : null === (Ic = cB.querySelector("a[href]")) || void 0 === Ic ? void 0 : Ic.getAttribute("href")) && void 0 !== Bc ? Bc : null
      },
      wB = {
        x: 0,
        y: 0,
        visible: !1,
        pressed: !1
      };
    const kn = new class {
        constructor() {
          this.state = wB, this.listeners = new Set
        }
        get() {
          return this.state
        }
        set(cB) {
          if (Bc = this.state, nc = cB, (Bc.visible || nc.visible) && (Bc.visible !== nc.visible || Bc.x !== nc.x || Bc.y !== nc.y || Bc.pressed !== nc.pressed)) {
            var Bc, nc;
            this.state = cB;
            for (const Bc of this.listeners) Bc(cB)
          }
        }
        hide() {
          this.set(wB)
        }
        subscribe(cB) {
          return this.listeners.add(cB), () => {
            this.listeners.delete(cB)
          }
        }
      },
      XB = (cB, Bc) => {
        let {
          kind: nc,
          holding: Vc,
          hasPress: Ic,
          hasBack: rB,
          slotHasItem: uc
        } = Bc;
        switch (cB) {
          case "primary":
            return "slot" === nc ? "slotPrimary" : "recipe" === nc || "button" === nc ? Ic ? "pressPrimary" : "click" : "textField" === nc ? "openKeyboard" : null;
          case "secondary":
            return "slot" === nc ? "slotSecondary" : "button" !== nc && "recipe" !== nc || !Ic ? null : "pressSecondary";
          case "quickMove":
            return "slot" === nc && uc ? "slotQuickMove" : null;
          case "hotbarSwap":
            return "slot" === nc && uc && !Vc ? "hotbarPick" : null;
          case "openButton":
            return "close";
          case "back":
            return Vc ? "cancel" : rB ? "pressBack" : "close"
        }
      },
      HB = cB => {
        const Bc = [];
        if (cB.hotbarPicking) return Bc.push({
          actions: ["inventoryPrimary", "inventoryHotbarSwap"],
          labelKey: "inventorySwapHere"
        }), Bc.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryCancel"
        }), Bc;
        if (cB.holding) "slot" === cB.kind ? (Bc.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryPlace"
        }), Bc.push({
          actions: ["inventorySecondary"],
          labelKey: "inventoryPlaceOne"
        })) : "textField" === cB.kind && Bc.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryType"
        }), Bc.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryPutBack"
        }), Bc.push({
          actions: ["inventoryDrop"],
          labelKey: "inventoryDrop"
        }), cB.openButtonCloses && Bc.push({
          actions: ["inventory"],
          labelKey: "inventoryClose"
        });
        else {
          var nc;
          "slot" === cB.kind && cB.slotHasItem ? (Bc.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryTake"
          }), Bc.push({
            actions: ["inventorySecondary"],
            labelKey: "inventoryTakeHalf"
          }), Bc.push({
            actions: ["inventoryQuickMove"],
            labelKey: cB.quickMoveToHotbar ? "inventoryToHotbar" : "inventoryQuickMove"
          }), Bc.push({
            actions: ["inventoryHotbarSwap"],
            labelKey: "inventoryHotbarSwap"
          }), Bc.push({
            actions: ["inventoryDrop"],
            labelKey: "inventoryDrop"
          })) : "button" !== cB.kind && "recipe" !== cB.kind || !cB.pressHints ? "button" === cB.kind || "recipe" === cB.kind ? Bc.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventorySelect"
          }) : "textField" === cB.kind && Bc.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryType"
          }) : (cB.pressHints.primary && Bc.push({
            actions: ["inventoryPrimary"],
            labelKey: cB.pressHints.primary
          }), cB.pressHints.secondary && Bc.push({
            actions: ["inventorySecondary"],
            labelKey: cB.pressHints.secondary
          }));
          const Vc = null === (nc = cB.pressHints) || void 0 === nc ? void 0 : nc.back;
          Vc && Bc.push({
            actions: ["inventoryClose"],
            labelKey: Vc
          });
          const Ic = [];
          cB.openButtonCloses && Ic.push("inventory"), Vc || Ic.push("inventoryClose"), Ic.length > 0 && Bc.push({
            actions: Ic,
            labelKey: "inventoryClose"
          })
        }
        return Bc.push({
          actions: ["inventoryPanelPrevious", "inventoryPanelNext"],
          labelKey: "inventoryPanels"
        }), cB.hasCategories ? Bc.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryCategory"
        }) : cB.hasList && Bc.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryPage"
        }), Bc
      };
    var FB = nc(7592);
    const JB = cB => ({
        x: cB.left + cB.width / 2,
        y: cB.top + cB.height / 2
      }),
      jn = (cB, Bc, nc) => cB < 0 ? nc >= 0 ? 0 : Bc - 1 : ((cB + nc) % Bc + Bc) % Bc,
      RB = cB => "Left" === cB || "Right" === cB,
      KB = (cB, Bc, nc) => {
        const Vc = RB(nc),
          Ic = Vc ? cB.top : cB.left,
          rB = Vc ? cB.height : cB.width,
          uc = Vc ? Bc.top : Bc.left,
          sc = Vc ? Bc.height : Bc.width,
          Mc = Math.max(0, Math.max(uc - (Ic + rB), Ic - (uc + sc)));
        return rB > 1.5 * sc ? {
          gap: Mc,
          offset: Math.max(0, uc - Ic) + .1 * Math.max(0, Ic - uc)
        } : {
          gap: Mc,
          offset: Math.abs(uc + sc / 2 - (Ic + rB / 2))
        }
      },
      xn = (cB, Bc, nc) => {
        const Vc = ((cB, Bc, nc) => {
          const Vc = JB(cB),
            Ic = JB(Bc),
            rB = RB(nc) ? Math.min(cB.width, Bc.width) / 4 : Math.min(cB.height, Bc.height) / 4;
          switch (nc) {
            case "Right":
              return Ic.x - Vc.x >= rB ? Math.max(0, Bc.left - (cB.left + cB.width)) : null;
            case "Left":
              return Vc.x - Ic.x >= rB ? Math.max(0, cB.left - (Bc.left + Bc.width)) : null;
            case "Down":
              return Ic.y - Vc.y >= rB ? Math.max(0, Bc.top - (cB.top + cB.height)) : null;
            case "Up":
              return Vc.y - Ic.y >= rB ? Math.max(0, cB.top - (Bc.top + Bc.height)) : null
          }
        })(cB, Bc, nc);
        if (null === Vc) return null;
        const Ic = KB(cB, Bc, nc);
        return Vc + 3 * Ic.gap + .5 * Ic.offset
      },
      dB = (cB, Bc) => Bc.visible || null !== Bc.scrollGroup && Bc.scrollGroup === cB.scrollGroup,
      AB = (cB, Bc, nc, Vc) => {
        let Ic = null,
          rB = 1 / 0;
        for (const uc of Bc) {
          if (uc.key === cB.key || !dB(cB, uc) || !Vc(uc)) continue;
          const Bc = xn(cB.rect, uc.rect, nc);
          null !== Bc && Bc < rB && (Ic = uc, rB = Bc)
        }
        return Ic
      },
      GB = (cB, Bc, nc) => {
        const Vc = AB(cB, Bc, nc, (() => !0));
        if (!Vc || RB(nc) || null === cB.scrollGroup || Vc.scrollGroup === cB.scrollGroup) return Vc;
        const Ic = AB(cB, Bc, nc, (Bc => 0 === KB(cB.rect, Bc.rect, nc).gap));
        return null !== Ic && void 0 !== Ic ? Ic : Vc
      },
      cV = (cB, Bc, nc) => {
        let Vc = null,
          Ic = 1 / 0;
        for (const rB of Bc) {
          if (!rB.visible || nc && !nc(rB)) continue;
          const Bc = JB(rB.rect),
            uc = Math.hypot(Bc.x - cB.x, Bc.y - cB.y);
          uc < Ic && (Vc = rB, Ic = uc)
        }
        return Vc
      },
      Bn = (cB, Bc) => {
        let nc = null;
        for (const Vc of Bc) {
          const {
            left: Bc,
            top: Ic,
            width: rB,
            height: uc
          } = Vc.rect;
          !Vc.visible || cB.x < Bc || cB.x >= Bc + rB || cB.y < Ic || cB.y >= Ic + uc || (!nc || rB * uc < nc.rect.width * nc.rect.height) && (nc = Vc)
        }
        return nc
      },
      nn = cB => {
        let Bc = null;
        for (const nc of cB) {
          if (!nc.visible) continue;
          if (!Bc) {
            Bc = nc;
            continue
          }
          const cB = Math.min(Bc.rect.height, nc.rect.height) / 2,
            Vc = nc.rect.top - Bc.rect.top;
          (Vc < -cB || Math.abs(Vc) <= cB && nc.rect.left < Bc.rect.left) && (Bc = nc)
        }
        return Bc
      },
      Vn = (cB, Bc, nc, Vc, Ic) => {
        const rB = Ic % Bc,
          uc = Math.floor(Ic / Bc);
        return {
          left: cB.left + rB * nc,
          top: cB.top + uc * Vc,
          width: cB.width,
          height: cB.height
        }
      },
      In = ".EntireInventoryWrapper .Inventory, .HotBarGameItemsContainer",
      rV = ".LazyLoadedItemWrapper",
      un = ["[data-inven-idx]", "[data-recipe-key]", "[role=button]", "button", "input:not([type=hidden])", "textarea", ".CreativeCategoryTab", ".CreativeCategoryDropdownButton", ".CreativeCategoryDropdownOption", "[data-craft-ingredient]"].join(","),
      sn = [
        ["hotbar", ".HotBarGameItemsContainer"],
        ["gameButtons", ".ClientGameInventoryButtons"],
        ["categories", ".CreativeCategoryRail"],
        ["recipe", ".CraftableInfo"],
        ["armour", ".ArmourItemSlots"],
        ["main", ".InvenBodyRight"],
        ["left", ".InvenLeftSide"]
      ],
      Mn = ["gameButtons", "categories", "left", "recipe", "armour", "main", "hotbar"],
      Pn = new WeakMap;
    let qV = 0;
    const On = cB => {
        let Bc = Pn.get(cB);
        return Bc || (Bc = "el:" + qV++, Pn.set(cB, Bc)), Bc
      },
      Tn = cB => ({
        left: cB.left,
        top: cB.top,
        width: cB.width,
        height: cB.height
      }),
      fn = (cB, Bc) => cB.width > 0 && cB.height > 0 && cB.left + cB.width > 0 && cB.top + cB.height > 0 && cB.left < Bc.width && cB.top < Bc.height,
      mV = cB => cB.hasAttribute("data-inven-idx") ? "slot" : cB.hasAttribute("data-recipe-key") ? "recipe" : cB.hasAttribute("data-craft-ingredient") || qn(cB) ? "info" : zn(cB) ? "textField" : "button",
      en = (cB, Bc) => "slot" === Bc ? Number(cB.getAttribute("data-inven-idx")) : null,
      tV = cB => cB.matches(rV) ? cB.querySelector(un) : cB,
      Sn = cB => {
        var Bc, nc;
        return {
          element: cB,
          recipe: null !== (Bc = cB && (null === (nc = tV(cB)) || void 0 === nc ? void 0 : nc.getAttribute("data-recipe-key"))) && void 0 !== Bc ? Bc : null
        }
      },
      yV = cB => {
        const Bc = tV(cB);
        if (!Bc) return {
          kind: "pending",
          idx: null
        };
        const nc = mV(Bc);
        return {
          kind: nc,
          idx: en(Bc, nc)
        }
      },
      zV = cB => {
        const Bc = [];
        for (const [nc, Vc] of sn) {
          cB.matches(Vc) && Bc.push([nc, cB]);
          for (const Ic of cB.querySelectorAll(Vc)) Bc.push([nc, Ic])
        }
        return Bc
      },
      pn = (cB, Bc) => {
        for (const [nc, Vc] of cB)
          if (Vc.contains(Bc)) return nc;
        return "other"
      },
      hn = (cB, Bc, nc, Vc, Ic, rB, uc) => {
        var sc;
        const Mc = cB.children,
          Pc = Tn(Mc[0].getBoundingClientRect()),
          qB = [{
            element: Mc[0],
            rect: Pc
          }];
        if (rB.push(qB[0]), 0 === Pc.width || 0 === Pc.height) return;
        let Oc = 1;
        for (; Oc < Mc.length && Math.abs(Mc[Oc].getBoundingClientRect().top - Pc.top) < 1;) Oc++;
        const Tc = cB => {
            const Bc = {
              element: Mc[cB],
              rect: Tn(Mc[cB].getBoundingClientRect())
            };
            return rB.push(Bc), qB.push(Bc), Bc.rect
          },
          fc = Oc > 1 ? Tc(1).left - Pc.left : Pc.width,
          mB = Mc.length > Oc ? Tc(Oc).top - Pc.top : Pc.height,
          ec = Uc(cB, "y", Bc),
          tB = ec === document.scrollingElement ? null : ec;
        tB && rB.push({
          element: tB,
          rect: Tn(tB.getBoundingClientRect())
        });
        const Sc = tB ? Dc(tB) : null,
          yB = tB ? On(tB) : null;
        let zB = null;
        var pc;
        tB && Sc && (zB = null !== (pc = uc.get(tB)) && void 0 !== pc ? pc : null, zB || (zB = {
          top: tB.scrollTop,
          left: tB.scrollLeft,
          box: Sc,
          viewport: Vc,
          targets: [],
          probes: [],
          holdsOthers: !1
        }, uc.set(tB, zB)), zB.probes.push(...qB));
        const hc = Ic.length;
        for (let aB = 0; aB < Mc.length; aB++) {
          const cB = Mc[aB],
            Bc = Vn(Pc, Oc, fc, mB, aB),
            rB = Bc.top + Bc.height / 2,
            uc = cB.firstElementChild ? cB.querySelector(un) : null,
            sc = uc ? mV(uc) : "pending";
          Ic.push({
            key: On(cB),
            rect: Bc,
            panel: nc,
            scrollGroup: yB,
            visible: fn(Bc, Vc) && (!Sc || rB >= Sc.top && rB <= Sc.bottom),
            element: cB,
            kind: sc,
            idx: uc ? en(uc, sc) : null,
            scrollContainer: tB
          })
        }
        null === (sc = zB) || void 0 === sc || sc.targets.push(...Ic.slice(hc))
      };
    class aV {
      constructor() {
        this.latched = null, this.presses = 0
      }
      press(cB, Bc, nc, Vc) {
        this.latched = {
          source: cB,
          focusKey: Bc,
          sinceMs: nc,
          hold: {
            id: ++this.presses,
            holdMs: Vc
          }
        }
      }
      update(cB, Bc, nc) {
        const Vc = this.latched;
        return Vc ? cB && Bc === Vc.focusKey ? nc - Vc.sinceMs < Vc.hold.holdMs ? null : (this.latched = null, Vc.source) : (this.latched = null, null) : null
      }
      getHold() {
        var cB, Bc;
        return null !== (cB = null === (Bc = this.latched) || void 0 === Bc ? void 0 : Bc.hold) && void 0 !== cB ? cB : null
      }
      reset() {
        this.latched = null
      }
    }
    var lnc = nc(7597);
    const Yn = {
        kind: "none"
      },
      Ln = cB => ({
        x: cB.clientX,
        y: cB.clientY
      }),
      gV = () => 2 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
    class Un {
      constructor() {
        this.hovered = Yn, this.signature = "", this.holding = !1, this.lastPoint = {
          clientX: 0,
          clientY: 0
        }
      }
      sync(cB, Bc, nc, Vc, Ic) {
        const rB = null !== Bc ? {
            kind: "slot",
            idx: Bc
          } : nc ? {
            kind: "element",
            element: nc
          } : Yn,
          uc = `${Ic}|${Math.round(Vc.clientX)},${Math.round(Vc.clientY)}`,
          sc = (Mc = this.hovered, Pc = rB, "slot" === Mc.kind && "slot" === Pc.kind ? Mc.idx === Pc.idx : "element" === Mc.kind && "element" === Pc.kind ? Mc.element === Pc.element : Mc.kind === Pc.kind);
        var Mc, Pc;
        if (sc && uc === this.signature) return;
        const qB = !sc || Ic !== this.holding || "" === this.signature;
        this.signature = uc, this.holding = Ic, this.lastPoint = Vc;
        const Oc = this.hovered;
        if (this.hovered = rB, "slot" === rB.kind) return this.leaveElement(Oc, null, Vc), void(qB ? cB.hover(rB.idx, Vc) : cB.moveTo(Vc));
        if (sc) return void("element" === rB.kind ? gn(rB.element, rB.element, Ln(Vc)) : cB.hover(null, Vc));
        cB.hover(null, Vc);
        const Tc = "element" === rB.kind ? rB.element : null;
        "element" === Oc.kind ? gn(Oc.element, Tc, Ln(Vc)) : Tc && gn(null, Tc, Ln(Vc))
      }
      invalidate() {
        this.signature = ""
      }
      clear(cB) {
        const Bc = this.hovered;
        this.hovered = Yn, this.signature = "", "none" !== Bc.kind && (this.leaveElement(Bc, null, this.lastPoint), cB && "slot" === Bc.kind && cB.hover(null, this.lastPoint))
      }
      leaveElement(cB, Bc, nc) {
        "element" === cB.kind && gn(cB.element, Bc, Ln(nc))
      }
    }
    class bV {
      constructor() {
        this.lastTiltedMs = -1 / 0
      }
      update(cB, Bc) {
        lc(cB) && (this.lastTiltedMs = Bc)
      }
      allowsClick(cB) {
        return cB - this.lastTiltedMs > 150
      }
    }
    class Zn {
      constructor() {
        this.remainder = 0, this.container = null
      }
      isScrolling(cB) {
        return 0 !== (0, mB.p)(cB, .2).y
      }
      step(cB, Bc, nc) {
        cB !== this.container && (this.container = cB, this.remainder = 0);
        const Vc = Yc(Bc, nc).y;
        if (0 === Vc) return this.remainder = 0, !1;
        const Ic = this.remainder + Vc,
          rB = Math.trunc(Ic);
        if (this.remainder = Ic - rB, 0 === rB) return !1;
        const uc = cB.scrollTop;
        return cB.scrollTop = uc + rB, cB.scrollTop !== uc
      }
      reset() {
        this.remainder = 0, this.container = null
      }
    }
    var Qn = nc(7601);
    const Cn = "[data-pad-inventory-default]",
      vV = ".HotBarGameItemsContainer .InvenItem.Selected",
      Dn = {
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
      Nn = [
        ["primary", "inventoryPrimary"],
        ["secondary", "inventorySecondary"],
        ["quickMove", "inventoryQuickMove"],
        ["hotbarSwap", "inventoryHotbarSwap"],
        ["back", "inventoryClose"],
        ["openButton", "inventory"]
      ],
      En = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
      onc = ["inventoryPanelPrevious", "inventoryPanelNext", "menuPageUp", "menuPageDown"],
      Wn = [...En, ...onc],
      wn = () => {
        return cB = (0, qB.g)("inventory"), !Wn.map(qB.g).includes(cB) && !(0, mB.R)(cB);
        var cB
      },
      kV = new Set(["slotPrimary", "slotSecondary", "slotQuickMove", "pressPrimary", "pressSecondary", "openKeyboard"]),
      Xn = (cB, Bc) => {
        const nc = !(null === Bc || void 0 === Bc || !Bc.isHolding());
        return function(cB, Bc) {
          const nc = cB.find((cB => cB.visible && Bc(cB)));
          if (nc) return nc;
          for (var Vc = arguments.length, Ic = new Array(Vc > 2 ? Vc - 2 : 0), rB = 2; rB < Vc; rB++) Ic[rB - 2] = arguments[rB];
          for (const uc of Ic) {
            const Bc = nn(cB.filter(uc));
            if (Bc) return Bc
          }
          return nn(cB)
        }(cB, (cB => {
          const {
            element: Bc
          } = cB;
          return Bc.matches(Cn) || null !== Bc.querySelector(Cn) || Bc.matches(vV)
        }), (cB => "slot" === cB.kind ? nc || null !== cB.idx && !(null === Bc || void 0 === Bc || !Bc.hasItemAt(cB.idx)) : "recipe" === cB.kind || "pending" === cB.kind), (cB => "slot" === cB.kind || "button" === cB.kind))
      };
    class Hn {
      constructor() {
        this.set = null, this.observer = new MutationObserver((cB => {
          cB.some((cB => {
            return !((Bc = cB.target) instanceof Element && null !== Bc.closest(rV));
            var Bc
          })) && (this.set = null)
        })), this.invalidate = () => {
          this.set = null
        }, this.onScroll = cB => {
          this.scrolled(cB.target)
        }
      }
      get() {
        if (!this.set) {
          this.set = (() => {
            const cB = [],
              Bc = [];
            let nc = !1;
            const Vc = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              Ic = new Map;
            for (const sc of document.querySelectorAll(In)) {
              const uc = zV(sc);
              nc ||= null !== sc.querySelector(".CreativeCategoryTab");
              for (const nc of sc.querySelectorAll(`${rV}:first-child`)) {
                const rB = nc.parentElement;
                hn(rB, sc, pn(uc, rB), Vc, cB, Bc, Ic)
              }
              for (const nc of sc.querySelectorAll(un)) {
                var rB;
                if (nc.closest(rV) || nc.closest("[data-pad-ignore]")) continue;
                const Ic = null === (rB = nc.parentElement) || void 0 === rB ? void 0 : rB.closest(un);
                if (Ic && sc.contains(Ic)) continue;
                const Mc = mV(nc),
                  Pc = en(nc, Mc);
                if (-1 === Pc) continue;
                const qB = Tn(nc.getBoundingClientRect());
                Bc.push({
                  element: nc,
                  rect: qB
                }), fn(qB, Vc) && cB.push({
                  key: On(nc),
                  rect: qB,
                  panel: pn(uc, nc),
                  scrollGroup: null,
                  visible: !0,
                  element: nc,
                  kind: Mc,
                  idx: Pc,
                  scrollContainer: null
                })
              }
            }
            for (const [sc, Mc] of Ic) Mc.holdsOthers = Bc.some((cB => cB.element !== sc && sc.contains(cB.element) && !cB.element.closest(rV)));
            const uc = new Map;
            for (const sc of cB) uc.set(sc.element, sc);
            return {
              targets: cB,
              byElement: uc,
              hasCategories: nc,
              probes: Bc,
              scrollers: Ic
            }
          })(), this.observer.disconnect();
          for (const cB of document.querySelectorAll(In)) this.observer.observe(cB, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "disabled", "aria-disabled", "tabindex", "data-inven-idx"]
          })
        }
        return this.set
      }
      scrolled(cB) {
        !this.set || cB instanceof Element && ((cB, Bc) => {
          const nc = cB.scrollers.get(Bc);
          if (!nc || nc.holdsOthers || Bc.scrollLeft !== nc.left) return !1;
          const Vc = Bc.scrollTop - nc.top;
          if (0 === Vc) return !0;
          nc.top = Bc.scrollTop;
          for (const Ic of nc.probes) Ic.rect.top -= Vc;
          for (const Ic of nc.targets) {
            Ic.rect.top -= Vc;
            const cB = Ic.rect.top + Ic.rect.height / 2;
            Ic.visible = fn(Ic.rect, nc.viewport) && cB >= nc.box.top && cB <= nc.box.bottom
          }
          return !0
        })(this.set, cB) || (this.set = null)
      }
      revalidate() {
        this.set && this.set.probes.some((cB => {
          return Bc = cB.rect, nc = cB.element.getBoundingClientRect(), !(Bc.left === nc.left && Bc.top === nc.top && Bc.width === nc.width && Bc.height === nc.height);
          var Bc, nc
        })) && (this.set = null)
      }
      disconnect() {
        this.observer.disconnect(), this.set = null
      }
    }
    const Fn = new class {
        constructor() {
          this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(mB.L.map((cB => [cB, (0, ec.c)(mB.O)]))), this.stickRepeat = new mB.d((0, ec.c)(mB.tb)), this.pageUpTimer = (0, ec.c)(mB.nb), this.pageDownTimer = (0, ec.c)(mB.nb), this.stickGate = new hc, this.pointer = null, this.activePress = null, this.dropLatch = new aV, this.scroller = new Zn, this.scrollStickClick = new bV, this.hover = new Un, this.lastRealPointer = null, this.placeAfterCategory = null, this.hotbarPick = null, this.ring = new Hc, this.targets = new Hn, this.hasCategories = !1, this.wasShowing = !1, this.state = lnc.e, this.isActive = () => (0, FB.k)(), this.isShowing = () => "inventory" === Oc.e.getActiveConsumerName() && (0, fc.k)(), this.getState = () => this.state, this.isSteppingSlots = () => this.isShowing() && null === this.pointer, this.onDeactivate = () => {
            this.endInteraction((0, FB.g)()), (0, FB.k)() || this.forgetSurface()
          }, this.forgetSurface = () => {
            var cB;
            this.reopenSlotIdx = null !== (cB = this.focused ? yV(this.focused).idx : null) && void 0 !== cB ? cB : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, FB.x)(), this.panelMemory.clear(), this.targets.disconnect()
          }, this.onFrame = cB => {
            (0, sc.unstable_batchedUpdates)((() => {
              this.frame(cB)
            }))
          }, this.shouldBlockRealPointer = cB => cB.isTrusted && !(0, Sc.q)(cB) && this.isShowing(), this.noteRealPointer = cB => {
            cB instanceof MouseEvent && cB.isTrusted && !(0, Sc.q)(cB) && (this.lastRealPointer ??= {
              x: 0,
              y: 0
            }, this.lastRealPointer.x = cB.clientX, this.lastRealPointer.y = cB.clientY)
          }, this.wakePressActs = cB => {
            var Bc;
            return cB === (0, qB.g)("inventoryClose") ? !(null !== (Bc = (0, FB.g)()) && void 0 !== Bc && Bc.isHolding()) : !(cB !== (0, qB.g)("inventory") || !wn()) || ((0, mB.R)(cB) ? this.isNavButton(cB) : onc.some((Bc => (0, qB.g)(Bc) === cB)))
          }
        }
        frame(cB) {
          var Bc, nc, Vc, Ic, rB, uc;
          const sc = (0, FB.g)();
          if (!(0, fc.k)()) return void(this.wasShowing && (this.endInteraction(sc), this.rehoverRealPointer()));
          this.wasShowing = !0, this.applyFocusRequest(), cB.wokeDevice && this.focusWakePointer(!(null === sc || void 0 === sc || !sc.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, Tc.k)().inventoryNavigation || this.pointer || this.engagePointer();
          const Mc = performance.now();
          this.handleNavigation(cB, Mc), this.handlePanels(cB), this.handlePaging(cB, Mc), this.handleScroll(cB), this.handleButtons(cB, Mc, sc), this.applyFocusRequest(), this.pointer && this.hoverAtPointer();
          const Pc = this.ensureFocus(),
            Oc = this.focusContext(sc);
          this.ring.show(Pc);
          const mB = "slot" === Oc.kind ? Oc.idx : null,
            ec = null !== (Bc = null === (nc = Oc.actionElement) || void 0 === nc ? void 0 : nc.querySelector(".DoCraftItem")) && void 0 !== Bc ? Bc : Oc.actionElement;
          this.pointer ? (this.hover.sync(sc, mB, ec, ((cB, Bc) => {
            const nc = Bc ? gV() : 0;
            return {
              clientX: cB.x - nc,
              clientY: cB.y - nc
            }
          })(this.pointer, Oc.holding), Oc.holding), kn.set({
            x: this.pointer.x,
            y: this.pointer.y,
            visible: !0,
            pressed: cB.isHeld((0, qB.g)("inventoryPrimary"))
          })) : Pc && this.focused && this.hover.sync(sc, mB, ec, ((cB, Bc) => {
            if (!Bc) return {
              clientX: cB.left + cB.width - 10,
              clientY: cB.top + cB.height / 2 - 10
            };
            const nc = gV();
            return {
              clientX: cB.left + cB.width / 2 - nc,
              clientY: cB.top + cB.height / 2 - nc
            }
          })(Pc, Oc.holding), Oc.holding), this.publishState({
            showing: !0,
            kind: Oc.kind,
            holding: Oc.holding,
            slotHasItem: Oc.slotHasItem,
            pressHints: null !== (Vc = null === (Ic = Oc.press) || void 0 === Ic ? void 0 : Ic.hints) && void 0 !== Vc ? Vc : null,
            hasCategories: this.hasCategories,
            hasList: !(null === (rB = this.focusTarget) || void 0 === rB || !rB.scrollGroup),
            openButtonCloses: wn(),
            steppingSlots: null === this.pointer,
            quickMoveToHotbar: "slot" === Oc.kind && !(null === (uc = Oc.actionElement) || void 0 === uc || !uc.closest(".CreativeItemSlots")),
            dropStackHold: this.dropLatch.getHold(),
            hotbarPicking: null !== this.hotbarPick
          })
        }
        focusWakePointer(cB) {
          var Bc;
          const nc = (0, fc.e)();
          if (!nc) return;
          this.targets.revalidate();
          const Vc = this.getTargets().targets;
          this.setFocus(null !== (Bc = Bn(nc, Vc)) && void 0 !== Bc ? Bc : cB ? cV(nc, Vc, (cB => {
            let {
              rect: Bc
            } = cB;
            const Vc = Math.max(Bc.left - nc.x, 0, nc.x - (Bc.left + Bc.width)),
              Ic = Math.max(Bc.top - nc.y, 0, nc.y - (Bc.top + Bc.height));
            return Math.hypot(Vc, Ic) <= Math.min(Bc.width, Bc.height) / 2
          })) : null, !1), "cursor" === (0, Tc.k)().inventoryNavigation && (this.pointer = {
            x: nc.x,
            y: nc.y,
            speedRamp: 0
          })
        }
        rehoverRealPointer() {
          const cB = this.lastRealPointer;
          if (!cB || "keyboardMouse" !== Mc.d.get("activeInputDevice")) return;
          const Bc = document.elementFromPoint(cB.x, cB.y);
          Bc && gn(null, Bc, cB)
        }
        endInteraction(cB) {
          this.wasShowing = !1, this.hotbarPick = null, this.releasePress(), this.dropLatch.reset(), this.scroller.reset();
          for (const Bc of this.dpadTimers.values()) Bc.reset();
          this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(cB), this.ring.hide(), this.releasePointer(), this.publishState(lnc.e)
        }
        getTargets() {
          const cB = this.targets.get();
          return this.hasCategories = cB.hasCategories, cB
        }
        currentTarget() {
          var cB;
          return this.focused && null !== (cB = this.getTargets().byElement.get(this.focused)) && void 0 !== cB ? cB : null
        }
        readFocusRect() {
          const cB = this.focused;
          if (null === cB || void 0 === cB || !cB.isConnected || !cB.closest(In)) return null;
          const Bc = cB.getBoundingClientRect();
          return Bc.width > 0 && Bc.height > 0 ? {
            left: Bc.left,
            top: Bc.top,
            width: Bc.width,
            height: Bc.height
          } : null
        }
        ensureFocus() {
          const cB = this.readFocusRect();
          if (cB || this.pointer) return cB;
          const {
            targets: Bc,
            byElement: nc
          } = this.getTargets();
          let Vc = null,
            Ic = !1;
          if (this.lastRect) Vc = cV(JB(this.lastRect), Bc);
          else {
            var rB, uc;
            const cB = ((cB, Bc) => {
                const nc = document.querySelector(".EntireInventoryWrapper [data-pad-inventory-start]");
                return nc ? Xn(cB.filter((cB => nc.contains(cB.element))), Bc) : null
              })(Bc, (0, FB.g)()),
              sc = Bc.find((cB => null !== cB.idx && cB.idx === this.reopenSlotIdx)),
              Mc = document.querySelector(vV);
            Ic = null !== cB || void 0 !== sc, Vc = null !== (rB = null !== (uc = null !== cB && void 0 !== cB ? cB : sc) && void 0 !== uc ? uc : Mc && nc.get(Mc)) && void 0 !== rB ? rB : nn(Bc)
          }
          return this.setFocus(Vc, Ic), this.lastRect
        }
        setFocus(cB) {
          let Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          cB && (this.focused = cB.element, this.focusTarget = cB, this.panelMemory.set(cB.panel, cB.element), Bc && cB.scrollContainer && ((cB, Bc) => {
            const nc = cB.getBoundingClientRect(),
              Vc = Bc.getBoundingClientRect(),
              Ic = Bc.scrollTop;
            return nc.top < Vc.top ? Bc.scrollTop -= Vc.top - nc.top : nc.bottom > Vc.bottom && (Bc.scrollTop += nc.bottom - Vc.bottom), Bc.scrollTop !== Ic
          })(cB.element, cB.scrollContainer) && this.targets.invalidate(), this.lastRect = this.readFocusRect(), this.followFocusJump())
        }
        followFocusJump() {
          if (this.pointer)
            if ("cursor" === (0, Tc.k)().inventoryNavigation) {
              if (this.lastRect) {
                const cB = JB(this.lastRect);
                this.pointer = {
                  x: cB.x,
                  y: cB.y,
                  speedRamp: 0
                }
              }
            } else this.releasePointer()
        }
        engagePointer() {
          const cB = this.lastRect ? JB(this.lastRect) : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          };
          this.pointer = {
            x: cB.x,
            y: cB.y,
            speedRamp: 0
          }
        }
        releasePointer() {
          this.pointer = null, kn.hide()
        }
        hoverAtPointer() {
          var cB;
          const Bc = Bn(this.pointer, this.getTargets().targets);
          (null === Bc || void 0 === Bc ? void 0 : Bc.element) !== this.focused && (this.focused = null !== (cB = null === Bc || void 0 === Bc ? void 0 : Bc.element) && void 0 !== cB ? cB : null, this.focusTarget = Bc, Bc && (this.panelMemory.set(Bc.panel, Bc.element), this.lastRect = this.readFocusRect()))
        }
        moveCursor(cB, Bc) {
          const nc = this.focusTarget,
            Vc = nc && (0, Tc.k)().cursorMagnetism ? JB(nc.rect) : null;
          this.pointer = aB(this.pointer, {
            stick: cB.leftStick,
            moveDeadzone: (0, Tc.k)().moveDeadzone,
            dpad: Bc,
            dtMs: cB.dtMs,
            cursorSpeedPercent: (0, Tc.k)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: {
              overInteractive: !1,
              magnetTarget: Vc
            }
          })
        }
        move(cB) {
          this.targets.revalidate();
          const Bc = this.currentTarget();
          Bc && this.setFocus(GB(Bc, this.getTargets().targets, cB))
        }
        step(cB) {
          const Bc = this.pointer;
          if (Bc && (this.releasePointer(), !this.focused)) return this.targets.revalidate(), void this.setFocus(((cB, Bc, nc) => {
            var Vc;
            const Ic = {
              key: "",
              rect: {
                left: cB.x,
                top: cB.y,
                width: 0,
                height: 0
              },
              panel: "",
              scrollGroup: null,
              visible: !0
            };
            return null !== (Vc = GB(Ic, Bc, nc)) && void 0 !== Vc ? Vc : cV(cB, Bc)
          })(Bc, this.getTargets().targets, cB));
          this.move(cB)
        }
        isNavButton(cB) {
          return !En.some((Bc => (0, qB.g)(Bc) === cB)) && !(cB === (0, qB.g)("inventory") && wn())
        }
        handleNavigation(cB, Bc) {
          const nc = (0, Tc.k)().inventoryNavigation,
            Vc = {
              x: 0,
              y: 0
            };
          let Ic = null;
          for (const Mc of mB.L) {
            const rB = this.isNavButton(Mc) && cB.isHeld(Mc);
            rB && (Vc.x += Dn[Mc].x, Vc.y += Dn[Mc].y), this.dpadTimers.get(Mc).update(rB, Bc) && "cursor" !== nc && (Ic ??= Mc)
          }
          const rB = this.stickGate.update(cB.leftStick, (0, Tc.k)().moveDeadzone);
          if (Ic && (this.step(Ic), this.stickGate.lock()), "slot" !== nc) {
            const Bc = ((cB, Bc, nc, Vc) => "hybrid" !== cB ? "cursor" === cB : !Vc && (Bc || nc))(nc, null !== this.pointer, rB, null !== Ic);
            return Bc && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(cB, "cursor" === nc ? Vc : {
              x: 0,
              y: 0
            }))
          }
          const uc = (0, mB.p)(cB.leftStick, (0, Tc.k)().moveDeadzone),
            sc = this.stickRepeat.update(rB ? (0, mB.vb)(uc) : null, Bc);
          sc && this.move(sc)
        }
        applyCategoryPlace() {
          const cB = this.placeAfterCategory;
          if (!cB) return;
          this.placeAfterCategory = null, this.targets.invalidate();
          const Bc = cV(JB(cB.rect), this.getTargets().targets, (Bc => Bc.scrollGroup === cB.scrollGroup));
          this.setFocus(Bc, !1)
        }
        applyFocusRequest() {
          const cB = (0, FB.x)();
          cB && (this.targets.invalidate(), this.setFocus((0, FB.c)(this.getTargets().targets, cB)))
        }
        handlePanels(cB) {
          var Bc, nc, Vc;
          const Ic = cB.wasPressed((0, qB.g)("inventoryPanelPrevious")),
            rB = cB.wasPressed((0, qB.g)("inventoryPanelNext"));
          if (!Ic && !rB) return;
          const {
            targets: uc
          } = this.getTargets(), sc = (Mc = ((cB, Bc) => {
            const nc = [];
            for (const Ic of cB) Ic.visible && !nc.includes(Ic.panel) && nc.push(Ic.panel);
            const Vc = cB => {
              const Vc = Bc.indexOf(cB);
              return -1 === Vc ? Bc.length + nc.indexOf(cB) : Vc
            };
            return nc.sort(((cB, Bc) => Vc(cB) - Vc(Bc)))
          })(uc, Mn), Pc = null !== (Bc = null === (nc = this.focusTarget) || void 0 === nc ? void 0 : nc.panel) && void 0 !== Bc ? Bc : null, Oc = rB ? 1 : -1, 0 === Mc.length ? null : Mc[jn(null === Pc ? -1 : Mc.indexOf(Pc), Mc.length, Oc)]);
          var Mc, Pc, Oc;
          if (null === sc) return;
          const Tc = this.panelMemory.get(sc),
            fc = uc.filter((cB => cB.panel === sc)),
            mB = null !== (Vc = fc.find((cB => cB.element === Tc && cB.visible))) && void 0 !== Vc ? Vc : Xn(fc, (0, FB.g)());
          this.setFocus(mB)
        }
        handlePaging(cB, Bc) {
          var nc, Vc;
          const Ic = (0, qB.g)("menuPageUp"),
            rB = (0, qB.g)("menuPageDown"),
            uc = this.pageUpTimer.update(cB.isHeld(Ic), Bc),
            sc = this.pageDownTimer.update(cB.isHeld(rB), Bc);
          if (!uc && !sc) return;
          const Mc = sc ? 1 : -1;
          if (!cB.wasPressed(sc ? rB : Ic) && this.hasCategories) return;
          if ((cB => {
              const Bc = Array.from(document.querySelectorAll(".EntireInventoryWrapper .CreativeCategoryTab"));
              if (0 === Bc.length) return !1;
              const nc = Bc.findIndex((cB => cB.classList.contains("Selected"))),
                Vc = Bc[jn(nc, Bc.length, cB)];
              return LB(Vc, pB(Vc)), !0
            })(Mc)) {
            var Pc, Oc;
            this.targets.invalidate();
            const cB = null !== (Pc = null === (Oc = this.focusTarget) || void 0 === Oc ? void 0 : Oc.scrollGroup) && void 0 !== Pc ? Pc : null,
              Bc = this.readFocusRect();
            return void(this.placeAfterCategory = null !== cB && Bc && !this.pointer ? {
              rect: Bc,
              scrollGroup: cB
            } : null)
          }
          const {
            targets: Tc
          } = this.getTargets();
          let fc = this.currentTarget();
          var mB;
          null !== (nc = fc) && void 0 !== nc && nc.scrollContainer || (fc = null !== (mB = Tc.find((cB => null !== cB.scrollContainer && cB.visible))) && void 0 !== mB ? mB : null);
          if (null === (Vc = fc) || void 0 === Vc || !Vc.scrollContainer) return;
          const ec = ((cB, Bc, nc, Vc) => {
            if (null === cB.scrollGroup) return null;
            const Ic = JB(cB.rect),
              rB = Ic.x,
              uc = Ic.y + ("Down" === nc ? Vc : -Vc);
            let sc = null,
              Mc = 1 / 0;
            for (const Pc of Bc) {
              if (Pc.scrollGroup !== cB.scrollGroup || Pc.key === cB.key) continue;
              const Bc = JB(Pc.rect);
              if ("Down" === nc ? Bc.y <= Ic.y : Bc.y >= Ic.y) continue;
              const Vc = Math.hypot(Bc.x - rB, Bc.y - uc);
              Vc < Mc && (sc = Pc, Mc = Vc)
            }
            return sc
          })(fc, Tc, Mc > 0 ? "Down" : "Up", fc.scrollContainer.clientHeight);
          this.setFocus(null !== ec && void 0 !== ec ? ec : fc)
        }
        handleScroll(cB) {
          var Bc, nc, Vc, Ic;
          if (!this.scroller.isScrolling(cB.rightStick)) return void this.scroller.reset();
          const rB = null !== (Bc = null === (nc = this.focusTarget) || void 0 === nc ? void 0 : nc.scrollContainer) && void 0 !== Bc ? Bc : null === (Vc = this.getTargets().targets.find((cB => null !== cB.scrollContainer))) || void 0 === Vc ? void 0 : Vc.scrollContainer;
          if (!rB || !this.scroller.step(rB, cB.rightStick, cB.dtMs)) return;
          this.targets.scrolled(rB);
          const uc = this.pointer || (null === (Ic = this.focusTarget) || void 0 === Ic ? void 0 : Ic.scrollContainer) !== rB ? null : this.readFocusRect();
          if (!uc) return;
          const sc = Dc(rB),
            Mc = JB(uc);
          if (Mc.y < sc.top || Mc.y > sc.bottom) {
            const cB = this.focusTarget.scrollGroup,
              Bc = cV(Mc, this.getTargets().targets, (Bc => Bc.scrollGroup === cB));
            this.setFocus(Bc, !1)
          }
        }
        focusContext(cB) {
          const {
            kind: Bc,
            idx: nc
          } = this.focused ? yV(this.focused) : {
            kind: null,
            idx: null
          }, Vc = this.focused ? tV(this.focused) : null, Ic = Vc ? (0, Qn.d)(Vc) : null;
          return {
            kind: Bc,
            idx: nc,
            actionElement: Vc,
            press: Ic,
            hasPress: null !== Ic,
            hasBack: !(null === Ic || void 0 === Ic || !Ic.back),
            holding: cB.isHolding(),
            slotHasItem: null !== nc && cB.hasItemAt(nc)
          }
        }
        handleButtons(cB, Bc, nc) {
          var Vc, Ic;
          if (!this.activePress || cB.isHeld(this.activePress.button) && (Vc = this.activePress.target, Ic = this.focused, null !== Vc.recipe ? Sn(Ic).recipe === Vc.recipe : Ic === Vc.element) || this.releasePress(), this.scrollStickClick.update(cB.rightStick, Bc), !this.handleHotbarPick(cB, nc)) {
            for (const [Vc, Ic] of Nn) {
              const rB = (0, qB.g)(Ic);
              if (!cB.wasPressed(rB) || "openButton" === Vc && !wn()) continue;
              if ("RS" === rB && !this.scrollStickClick.allowsClick(Bc)) continue;
              const uc = this.focusContext(nc),
                sc = XB(Vc, uc);
              sc && this.runIntent(sc, uc, rB, nc)
            }
            this.handleDrop(cB, Bc, nc)
          }
        }
        handleHotbarPick(cB, Bc) {
          const nc = this.hotbarPick;
          if (!nc) return !1;
          const Vc = cB.wasPressed((0, qB.g)("inventoryPrimary")) || cB.wasPressed((0, qB.g)("inventoryHotbarSwap"));
          if (!Vc && !cB.wasPressed((0, qB.g)("inventoryClose")) && !Bc.isHolding()) return !(cB.wasPressed((0, qB.g)("inventory")) && wn());
          const Ic = this.focusTarget;
          Vc && "hotbar" === (null === Ic || void 0 === Ic ? void 0 : Ic.panel) && null !== Ic.idx && Ic.idx !== nc.idx && (Bc.swapWithHotbar(Ic.idx, nc.idx), this.afterAction()), this.hotbarPick = null;
          const rB = nc.element.isConnected ? this.getTargets().byElement.get(nc.element) : void 0;
          return rB && this.setFocus(rB), !0
        }
        startHotbarPick(cB) {
          var Bc;
          const {
            targets: nc,
            byElement: Vc
          } = this.getTargets(), Ic = document.querySelector(vV), rB = null !== (Bc = Ic && Vc.get(Ic)) && void 0 !== Bc ? Bc : nc.find((cB => "hotbar" === cB.panel));
          rB && this.focused && (this.hotbarPick = {
            idx: cB,
            element: this.focused
          }, this.setFocus(rB))
        }
        focusKey() {
          return this.focused ? On(this.focused) : null
        }
        handleDrop(cB, Bc, nc) {
          const Vc = (0, qB.g)("inventoryDrop");
          if (cB.wasPressed(Vc)) {
            const cB = (Ic = this.focusContext(nc)).holding ? {
              kind: "XB"
            } : "slot" === Ic.kind && Ic.slotHasItem && null !== Ic.idx ? {
              kind: "slot",
              idx: Ic.idx
            } : null;
            return void(cB && (this.dropFrom(cB, !1, nc), this.dropLatch.press(cB, this.focusKey(), Bc, tB.d[(0, Tc.k)().tapHoldTime].dropStackMs), this.afterAction()))
          }
          var Ic;
          const rB = this.dropLatch.update(cB.isHeld(Vc), this.focusKey(), Bc);
          rB && ((cB, Bc, nc) => "XB" === cB.kind ? Bc : !Bc && nc(cB.idx))(rB, nc.isHolding(), nc.hasItemAt) && (this.dropFrom(rB, !0, nc), this.afterAction())
        }
        dropFrom(cB, Bc, nc) {
          "XB" === cB.kind ? nc.dropHeld(Bc, this.slotPoint()) : nc.dropSlot(cB.idx, Bc)
        }
        slotPoint() {
          return this.pointer ? {
            clientX: this.pointer.x,
            clientY: this.pointer.y
          } : this.lastRect ? (cB => {
            const Bc = JB(cB);
            return {
              clientX: Bc.x,
              clientY: Bc.y
            }
          })(this.lastRect) : {
            clientX: 0,
            clientY: 0
          }
        }
        runIntent(cB, Bc, nc, Vc) {
          const Ic = Bc.idx,
            rB = Bc.actionElement;
          switch (rB && kV.has(cB) && (0, Sc.s)(rB), cB) {
            case "slotPrimary":
              Vc.primary(Ic, this.slotPoint());
              break;
            case "slotSecondary":
              Vc.secondary(Ic, this.slotPoint());
              break;
            case "slotQuickMove":
              Vc.quickMove(Ic, this.slotPoint());
              break;
            case "hotbarPick":
              this.startHotbarPick(Ic);
              break;
            case "pressPrimary":
            case "pressSecondary":
              this.startPress(Bc.press, "pressPrimary" === cB ? "primary" : "secondary", nc);
              break;
            case "click":
              LB(rB, pB(rB));
              break;
            case "openKeyboard":
              zn(rB) && UB(rB);
              break;
            case "pressBack":
              Bc.press.back();
              break;
            case "cancel":
              Vc.cancel();
              break;
            case "close":
              return this.releasePress(), void Vc.close()
          }
          this.afterAction()
        }
        startPress(cB, Bc, nc) {
          this.releasePress(), cB.press(Bc) && (this.activePress = {
            handlers: cB,
            button: nc,
            target: Sn(this.focused)
          })
        }
        releasePress() {
          var cB, Bc, nc;
          null === (cB = this.activePress) || void 0 === cB || null === (Bc = (nc = cB.handlers).release) || void 0 === Bc || Bc.call(nc), this.activePress = null
        }
        afterAction() {
          this.targets.invalidate(), this.hover.invalidate()
        }
        publishState(cB) {
          ((cB, Bc) => {
            var nc, Vc, Ic, rB, uc, sc;
            return cB.showing === Bc.showing && cB.kind === Bc.kind && cB.holding === Bc.holding && cB.slotHasItem === Bc.slotHasItem && (null === (nc = cB.pressHints) || void 0 === nc ? void 0 : nc.primary) === (null === (Vc = Bc.pressHints) || void 0 === Vc ? void 0 : Vc.primary) && (null === (Ic = cB.pressHints) || void 0 === Ic ? void 0 : Ic.secondary) === (null === (rB = Bc.pressHints) || void 0 === rB ? void 0 : rB.secondary) && (null === (uc = cB.pressHints) || void 0 === uc ? void 0 : uc.back) === (null === (sc = Bc.pressHints) || void 0 === sc ? void 0 : sc.back) && cB.hasCategories === Bc.hasCategories && cB.hasList === Bc.hasList && cB.openButtonCloses === Bc.openButtonCloses && cB.steppingSlots === Bc.steppingSlots && cB.hotbarPicking === Bc.hotbarPicking && cB.quickMoveToHotbar === Bc.quickMoveToHotbar && cB.dropStackHold === Bc.dropStackHold
          })(cB, this.state) || (this.state = cB, Pc.i.Vu(lnc.f, cB))
        }
      },
      Jn = ["pointermove", "pointerover", "pointerout", "mouseover", "mouseout"];
    var jV = nc(7106);
    var Rn = nc(7610);
    const iV = {
        duration: 80,
        strongMagnitude: .2,
        weakMagnitude: .2,
        needsPadInUse: !1
      },
      Kn = {
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
          ...iV,
          minIntervalMs: 1e3
        },
        preview: {
          ...iV,
          minIntervalMs: 0
        }
      };
    const xV = new class {
        constructor(cB) {
          this.deps = cB, this.lastPlayedMs = {}, this.loggedFailure = !1, this.logFailure = cB => {
            this.loggedFailure || (this.loggedFailure = !0, console.warn("Controller vibration failed; further failures are not logged.", cB))
          }
        }
        play(cB, Bc) {
          const nc = Kn[cB];
          if (!this.deps.isVibrationOn() || nc.needsPadInUse && !this.deps.isPadInUse()) return !1;
          const Vc = this.lastPlayedMs[cB];
          if (void 0 !== Vc && Bc - Vc < nc.minIntervalMs) return !1;
          const Ic = this.deps.getActuator();
          if (!Ic) return !1;
          this.lastPlayedMs[cB] = Bc;
          const {
            duration: rB,
            strongMagnitude: uc,
            weakMagnitude: sc
          } = nc;
          try {
            Ic.playEffect("dual-rumble", {
              duration: rB,
              strongMagnitude: uc,
              weakMagnitude: sc
            }).catch(this.logFailure)
          } catch (Mc) {
            this.logFailure(Mc)
          }
          return !0
        }
      }({
        getActuator: () => (cB => {
          const Bc = null === cB || void 0 === cB ? void 0 : cB.vibrationActuator;
          return "function" === typeof(null === Bc || void 0 === Bc ? void 0 : Bc.playEffect) ? Bc : null
        })(uc.h.getActiveGamepad()),
        isVibrationOn: () => (0, Tc.k)().vibration,
        isPadInUse: fc.k
      }),
      dn = cB => {
        xV.play(cB, performance.now())
      };
    var An = nc(7113),
      Gn = nc(2230),
      cI = nc(125),
      BV = nc(51),
      nV = nc(946);
    class VV {
      constructor(cB) {
        this.deps = cB
      }
      check() {
        let cB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const Bc = this.deps.isPadActive() ? this.deps.getPadFamily() : null;
        if (!Bc) return "skipped";
        const nc = cB ? this.deps.getVisitId() : this.deps.peekVisitId();
        return null === nc || this.deps.readReportedVisitId() === nc ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(nc), this.deps.PV(Bc, this.deps.getInputType()), "reported") : "notReady"
      }
    }
    const IV = "controllerUsageReportedVisit";
    var rI = nc(1194),
      uV = nc(1495),
      sV = nc(263),
      MV = nc(1252),
      PV = nc(1117);
    const qI = cB => ({
        translationKey: `controller:${cB}`
      }),
      OV = {
        A: "A",
        B: "B",
        X: "X",
        Y: "Y",
        LB: "LB",
        RB: "RB",
        LT: "LT",
        RT: "RT",
        View: qI("padButtonView"),
        Menu: qI("padButtonMenu"),
        LS: "L3",
        RS: "R3",
        Up: qI("padButtonDpadUp"),
        Down: qI("padButtonDpadDown"),
        Left: qI("padButtonDpadLeft"),
        Right: qI("padButtonDpadRight"),
        Home: qI("padButtonHome"),
        LeftStick: qI("padButtonLeftStick"),
        RightStick: qI("padButtonRightStick")
      },
      TV = {
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
          View: qI("padButtonCreate"),
          Menu: qI("padButtonOptions")
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
      fV = (cB, Bc) => {
        var nc;
        const Vc = null !== (nc = TV[cB][Bc]) && void 0 !== nc ? nc : OV[Bc];
        return "string" === typeof Vc ? Vc : (0, Ic.s)(PV.e.get().getCurrentLanguageCode(), Vc.translationKey)
      },
      mI = cB => {
        let {
          glyph: Bc,
          family: nc,
          className: Vc
        } = cB;
        const Ic = (0, fc.E)(),
          rB = null !== nc && void 0 !== nc ? nc : Ic,
          uc = (0, An.f)(rB, Bc);
        return (0, wc.jsx)("span", {
          className: Wc()("ControllerGlyph", Vc),
          role: "img",
          "aria-label": fV(rB, Bc),
          style: {
            "--pad-glyph-mask": `url(${uc})`,
            "--pad-glyph-aspect": (0, An.c)(rB, Bc)
          }
        })
      };
    var eV = nc(1536);
    const tI = cB => {
      let {
        action: Bc
      } = cB;
      const {
        t: nc
      } = (0, Ic.x)();
      switch (Bc.kind) {
        case "reload":
          return (0, wc.jsx)("span", {
            children: nc("controller:gameplayReload")
          });
        case "specialAction":
          return null;
        case "customButton":
          return (0, wc.jsx)(eV.e, {
            text: Bc.description ? [{
              icon: Bc.icon
            }, ` ${Bc.description}`] : [{
              icon: Bc.icon
            }]
          });
        case "touchButton":
          return (0, wc.jsx)(eV.e, {
            text: Bc.label
          })
      }
    };
    var SV = nc(7613);
    const yI = cB => {
      let {
        hold: Bc
      } = cB;
      return (0, wc.jsx)("div", {
        className: "DropStackFillTrack",
        style: {
          "--pad-drop-stack-hold": `${Bc.holdMs}ms`
        },
        children: (0, wc.jsx)("div", {
          className: "DropStackFillBar"
        })
      }, Bc.id)
    };
    var zI = nc(7638),
      pV = nc(7646),
      hV = nc(7654),
      aI = nc(7634);
    const lV = () => {
        const {
          gameState: cB
        } = (0, Mc.j)(["gameState"]), Bc = (0, fc.B)(), [Vc, Ic] = (0, Ec.useState)(!1), [rB, uc] = (0, Ec.useState)(!1);
        return (0, Ec.useEffect)((() => {
          "inGame" === cB && Ic(!0)
        }), [cB]), (0, Ec.useEffect)((() => {
          if (!Vc) return;
          let cB = null,
            Bc = !1;
          return (sV.l ? Promise.all([nc.e(60), nc.e(73), nc.e(224), nc.e(202), nc.e(199), nc.e(100)]).then((() => nc(38536))).then((cB => cB.startWasmPadGameplay)) : Promise.all([nc.e(60), nc.e(212), nc.e(211), nc.e(63), nc.e(62), nc.e(61), nc.e(81), nc.e(203), nc.e(172), nc.e(208), nc.e(123), nc.e(181), nc.e(73), nc.e(219), nc.e(204), nc.e(101), nc.e(198), nc.e(99), nc.e(72), nc.e(103), nc.e(202), nc.e(80)]).then((() => nc(38681))).then((cB => cB.startPadGameplay))).then((nc => {
            Bc || (cB = nc())
          })).catch((cB => {
            console.error("Pad gameplay failed to load", cB), Bc || uc(!0)
          })), () => {
            var nc;
            Bc = !0, null === (nc = cB) || void 0 === nc || nc()
          }
        }), [Vc]), (0, Ec.useEffect)((() => {
          rB && Bc && (uc(!1), rI.NotificationProvider.showPromptPopup({
            title: "controller:gameplayLoadFailedTitle",
            subtitle: "controller:gameplayLoadFailedSubtitle",
            confirmText: "settingsMenu:reloadPagePopupConfirm",
            confirmTooltip: "",
            cancelText: "general:cancel",
            cancelTooltip: ""
          }).getResult().then((cB => {
            !0 === cB && (0, uV.reloadBloxd)()
          })))
        }), [rB, Bc]), (0, wc.jsxs)(wc.Fragment, {
          children: [(0, wc.jsx)(YV, {}), (0, wc.jsx)(LV, {}), (0, wc.jsx)(gI, {})]
        })
      },
      YV = () => {
        const {
          t: cB
        } = (0, Ic.x)(), Bc = (0, fc.B)(), {
          gameState: nc,
          isUiHidden: Vc
        } = (0, Mc.j)(["gameState", "isUiHidden"]), {
          hideButtonHints: rB
        } = (0, Tc.s)(), uc = (0, SV.e)(), sc = (0, SV.g)(), [Pc, Oc] = (0, Ec.useState)(hV.e);
        return (0, MV.f)(aI.q, Oc), !Bc || rB || Vc || "inGame" !== nc || !uc && !Pc ? null : (0, wc.jsxs)("div", {
          className: "PadActionHint SmallTextBold",
          children: [uc && (0, wc.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, wc.jsx)(mI, {
              glyph: (0, qB.g)("actionButton")
            }), (0, wc.jsx)(tI, {
              action: uc
            }), sc && (0, wc.jsx)("span", {
              className: "PadActionHintMore",
              children: cB("controller:gameplayActionWheelHint")
            })]
          }), Pc && (0, wc.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, wc.jsx)(mI, {
              glyph: (0, qB.g)("uL")
            }), (0, wc.jsx)("span", {
              children: cB("controller:gameplayPickBlock")
            })]
          })]
        })
      },
      LV = () => {
        const {
          t: cB
        } = (0, Ic.x)(), Bc = (0, fc.B)(), {
          gameState: nc,
          isUiHidden: Vc
        } = (0, Mc.j)(["gameState", "isUiHidden"]), [rB, uc] = (0, Ec.useState)(zI.c);
        return (0, MV.f)(aI.m, uc), Bc && !Vc && "inGame" === nc && rB ? (0, wc.jsxs)("div", {
          className: "PadDropStackFill SmallTextBold",
          children: [(0, wc.jsx)("span", {
            children: cB("controller:gameplayDropStack")
          }), (0, wc.jsx)(yI, {
            hold: rB
          })]
        }) : null
      },
      gI = () => {
        const {
          t: cB
        } = (0, Ic.x)(), Bc = (0, fc.B)(), {
          gameState: nc,
          isUiHidden: Vc
        } = (0, Mc.j)(["gameState", "isUiHidden"]), {
          hideButtonHints: rB
        } = (0, Tc.s)(), [uc, sc] = (0, Ec.useState)(pV.b);
        return (0, MV.f)(aI.k, sc), Bc && !Vc && "inGame" === nc && uc ? (0, wc.jsxs)("div", {
          className: "PadAttackLatchedHint SmallTextBold",
          children: [!rB && (0, wc.jsx)(mI, {
            glyph: (0, qB.g)("attack")
          }), (0, wc.jsx)("span", {
            children: cB("controller:gameplayAttackLatched")
          })]
        }) : null
      };
    var UV = nc(7656),
      bI = nc(1594),
      ZV = nc(1946),
      QV = nc(7083);
    const CV = cB => cB && !(0, UV.e)(bI.d.get("shopInfo")),
      vI = () => {
        const cB = "inGame" === (0, Mc.j)(["gameState"]).gameState;
        return (0, ZV.f)("shopInfo", (() => {
          (0, QV.h)(CV(cB))
        })), (0, Ec.useEffect)((() => {
          (0, QV.h)(CV(cB))
        }), [cB]), null
      },
      DV = () => {
        const {
          t: cB
        } = (0, Ic.x)(), {
          hideButtonHints: Bc
        } = (0, Tc.s)();
        (0, fc.E)();
        const nc = (0, lnc.l)();
        return (0, Ec.useEffect)((() => (() => {
          const cB = Oc.e.register({
              name: "inventory",
              isActive: Fn.isActive,
              onFrame: Fn.onFrame,
              onDeactivate: Fn.onDeactivate,
              wakePressActs: Fn.wakePressActs
            }),
            Bc = cB => {
              Fn.noteRealPointer(cB), Fn.shouldBlockRealPointer(cB) && cB.stopPropagation()
            };
          for (const uc of Jn) window.addEventListener(uc, Bc, !0);
          const nc = (0, FB.o)((() => {
              "inventory" !== Oc.e.getActiveConsumerName() && Fn.forgetSurface()
            })),
            Vc = cB => {
              const Bc = cB.target;
              (0, fc.k)() && Ac(Bc) && Bc.closest(In) && (0, FB.k)() && (0, FB.w)(Bc)
            };
          document.addEventListener("focusout", Vc, !0);
          const {
            invalidate: Ic,
            onScroll: rB
          } = Fn.targets;
          return document.addEventListener("scroll", rB, !0), window.addEventListener("resize", Ic), () => {
            cB(), nc();
            for (const cB of Jn) window.removeEventListener(cB, Bc, !0);
            document.removeEventListener("scroll", rB, !0), document.removeEventListener("focusout", Vc, !0), window.removeEventListener("resize", Ic), Fn.targets.disconnect()
          }
        })()), []), (0, wc.jsxs)(wc.Fragment, {
          children: [(0, wc.jsx)(Fc, {
            placer: Fn.ring,
            className: "InventorySlotCursorRing"
          }), nc.showing && !Bc && (0, wc.jsx)("div", {
            className: "InventorySlotCursorHints SmallTextBold",
            children: HB(nc).map((Bc => {
              let {
                actions: Vc,
                labelKey: Ic
              } = Bc;
              return (0, wc.jsxs)("div", {
                className: "InventorySlotCursorHint",
                children: [Vc.map((cB => (0, wc.jsx)(mI, {
                  glyph: (0, qB.g)(cB)
                }, cB))), (0, wc.jsx)("span", {
                  children: cB(`controller:${Ic}`)
                }), "inventoryDrop" === Ic && nc.dropStackHold && (0, wc.jsx)(yI, {
                  hold: nc.dropStackHold
                })]
              }, Ic)
            }))
          })]
        })
      },
      NV = [{
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
      EV = cB => Array.from(cB).map((cB => ({
        type: "char",
        char: cB,
        width: 1
      }))),
      oV = function(cB) {
        return {
          type: "command",
          command: cB,
          width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
        }
      },
      WV = [oV("page", 2), oV("otherPage"), oV("caretLeft"), oV("space", 3), oV("caretRight"), oV("close", 1.5), oV("submit", 1.5)],
      wV = [oV("page", 2), oV("otherPage"), oV("caretLeft"), oV("space", 2), oV("caretRight"), oV("newline"), oV("close", 1.5), oV("submit", 1.5)],
      kI = [
        [...EV("1234567890"), oV("backspace")], EV("qwertyuiop/"), EV("asdfghjkl'?"), [oV("shift", 2), ...EV("zxcvbnm,.")]
      ],
      XV = [
        [...EV("1234567890"), oV("backspace")], EV("!@#$%^&*()/"), EV('-_=+[]{};:"'), EV("~`|\\<>'\u20ac\xa3,.")
      ],
      HV = {
        letters: kI,
        accents: [
          [...EV("1234567890"), oV("backspace")], EV("\xe1\xe9\xed\xf3\xfa\xe0\xe8\xec\xf2\xf9\xf1"), EV("\xe2\xea\xee\xf4\xfb\xe4\xeb\xef\xf6\xfc\xe7"), [oV("shift", 2), ...EV("\xe3\xf5\xdf\u0153\u011f\u015f\u0131\xbf\xa1")]
        ],
        symbols: XV
      },
      FV = new Set(["de", "es", "fr", "it", "nl", "pt", "pt-BR", "tr", "vi"]),
      JV = (cB, Bc) => "letters" === cB ? Bc ? {
        page: "accents",
        otherPage: "symbols"
      } : {
        page: "symbols",
        otherPage: "accents"
      } : {
        page: "letters",
        otherPage: "accents" === cB ? "symbols" : "accents"
      },
      jI = function(cB, Bc) {
        const nc = ((cB, Bc) => [...HV[cB], Bc ? wV : WV])(cB, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
        if (0 === Bc) return nc;
        const Vc = Math.min(2, RV(nc[0]) / Bc);
        return [Array.from({
          length: Bc
        }, ((cB, Bc) => ({
          type: "phrase",
          phraseIndex: Bc,
          width: Vc
        }))), ...nc]
      },
      RV = cB => cB.reduce(((cB, Bc) => cB + Bc.width), 0),
      iI = cB => Math.max(...cB.map(RV)),
      KV = (cB, Bc) => {
        const nc = cB[Bc.row];
        let Vc = (iI(cB) - RV(nc)) / 2;
        for (let Ic = 0; Ic < Bc.col; Ic++) Vc += nc[Ic].width;
        return Vc + nc[Bc.col].width / 2
      },
      xI = (cB, Bc, nc) => {
        let Vc = 0,
          Ic = 1 / 0;
        for (let rB = 0; rB < cB[Bc].length; rB++) {
          const uc = Math.abs(KV(cB, {
            row: Bc,
            col: rB
          }) - nc);
          uc < Ic - 1e-9 && (Vc = rB, Ic = uc)
        }
        return Vc
      },
      dV = (cB, Bc) => {
        const nc = Math.max(0, Math.min(cB.length - 1, Bc.row));
        return {
          row: nc,
          col: Math.max(0, Math.min(cB[nc].length - 1, Bc.col))
        }
      },
      AV = (cB, Bc, nc) => "once" === cB && Bc - nc <= 400 ? "caps" : "off" === cB ? "once" : "off",
      GV = (cB, Bc) => "once" === cB && (cB => cB.toLowerCase() !== cB.toUpperCase())(Bc) ? "off" : cB,
      cr = (cB, Bc, nc) => {
        if ("symbols" === Bc || "off" === nc) return cB;
        const Vc = cB.toUpperCase();
        return 1 === Vc.length ? Vc : cB
      };
    var BI = nc(1492),
      nI = nc(7567),
      VI = nc(7670),
      II = nc(244),
      rr = nc(1464),
      uI = nc(7061);
    const sI = "[data-pad-secondary]",
      MI = cB => cB instanceof HTMLElement && PB(cB) && !qn(cB),
      PI = cB => {
        const Bc = cB.querySelector(sI);
        if (Bc && MI(Bc)) return Bc;
        for (const Ic of null !== (nc = null === (Vc = cB.parentElement) || void 0 === Vc ? void 0 : Vc.children) && void 0 !== nc ? nc : []) {
          var nc, Vc;
          if (Ic !== cB && Ic.matches(sI) && MI(Ic)) return Ic
        }
        return null
      },
      qr = (cB, Bc, nc, Vc) => Math.max(0, Math.max(cB, nc) - Math.min(Bc, Vc)),
      OI = (cB, Bc, nc, Vc) => Math.max(0, Math.min(Bc, Vc) - Math.max(cB, nc)),
      TI = (cB, Bc, nc) => {
        const Vc = (cB.left + cB.right) / 2,
          Ic = (cB.top + cB.bottom) / 2,
          rB = (Bc.left + Bc.right) / 2,
          uc = (Bc.top + Bc.bottom) / 2;
        if ("Left" === nc || "Right" === nc) {
          const sc = "Right" === nc ? 1 : -1;
          return {
            forwardGap: "Right" === nc ? Bc.left - cB.right : cB.left - Bc.right,
            centreForward: (rB - Vc) * sc,
            sidewaysGap: qr(cB.top, cB.bottom, Bc.top, Bc.bottom),
            sidewaysOverlap: OI(cB.top, cB.bottom, Bc.top, Bc.bottom),
            centreSideways: Math.abs(uc - Ic),
            startSideways: Math.abs(Bc.top - cB.top),
            fromSidewaysSize: cB.bottom - cB.top,
            toSidewaysSize: Bc.bottom - Bc.top,
            toLength: Bc.right - Bc.left
          }
        }
        const sc = "Down" === nc ? 1 : -1;
        return {
          forwardGap: "Down" === nc ? Bc.top - cB.bottom : cB.top - Bc.bottom,
          centreForward: (uc - Ic) * sc,
          sidewaysGap: qr(cB.left, cB.right, Bc.left, Bc.right),
          sidewaysOverlap: OI(cB.left, cB.right, Bc.left, Bc.right),
          centreSideways: Math.abs(rB - Vc),
          startSideways: Math.abs(Bc.left - cB.left),
          fromSidewaysSize: cB.right - cB.left,
          toSidewaysSize: Bc.right - Bc.left,
          toLength: Bc.bottom - Bc.top
        }
      },
      fI = cB => cB.centreForward > .5 && cB.forwardGap >= -cB.toLength / 2,
      mr = cB => {
        const Bc = cB.sidewaysOverlap > 0 ? 0 : 2 * cB.fromSidewaysSize,
          nc = cB.fromSidewaysSize > 1.5 * cB.toSidewaysSize ? cB.startSideways : cB.centreSideways;
        return Math.max(0, cB.forwardGap) + 3 * cB.sidewaysGap + Bc + .1 * nc
      },
      eI = (cB, Bc) => OI(cB.top, cB.bottom, Bc.top, Bc.bottom) > 0 || Bc.bottom - Bc.top > Bc.right - Bc.left,
      tr = (cB, Bc, nc, Vc, Ic, rB) => {
        const uc = Ic ? yr(cB, Bc, nc, Ic) : new Set,
          sc = pI(cB, Bc, nc, uc);
        return sc < 0 && uc.size > 0 && rB ? SI(cB, Bc, nc, rB) : Vc && sc >= 0 ? zr(cB, Bc, nc, Vc, sc, uc) : sc
      },
      SI = (cB, Bc, nc, Vc) => {
        const Ic = new Set,
          rB = pI(cB, Bc, "Up", Ic) >= 0,
          uc = pI(cB, Bc, "Down", Ic) >= 0,
          sc = new Set;
        return Bc.forEach(((Bc, nc) => {
          const Ic = Bc.top + Bc.bottom < cB.top + cB.bottom;
          Vc[nc] && !(Ic ? rB : uc) || sc.add(nc)
        })), pI(cB, Bc, nc, sc)
      },
      yr = (cB, Bc, nc, Vc) => {
        const Ic = new Set;
        return "Left" !== nc && "Right" !== nc || Bc.forEach(((Bc, nc) => {
          Vc[nc] && OI(cB.top, cB.bottom, Bc.top, Bc.bottom) <= 0 && Ic.add(nc)
        })), Ic
      },
      zr = (cB, Bc, nc, Vc, Ic, rB) => {
        const uc = TI(cB, Bc[Ic], nc).forwardGap;
        let sc = Ic,
          Mc = Vc[Ic],
          Pc = 1 / 0;
        return Bc.forEach(((Bc, qB) => {
          const Oc = Vc[qB];
          if (rB.has(qB) || Oc < Mc || Oc === Mc && sc === Ic) return;
          const Tc = TI(cB, Bc, nc);
          if (!fI(Tc) || Tc.forwardGap < 0 || Tc.forwardGap >= uc) return;
          const fc = mr(Tc);
          (Oc > Mc || fc < Pc) && (sc = qB, Mc = Oc, Pc = fc)
        })), sc
      },
      pI = (cB, Bc, nc, Vc) => {
        let Ic = -1,
          rB = 1 / 0;
        if (Bc.forEach(((Bc, uc) => {
            const sc = ((cB, Bc, nc) => {
              const Vc = TI(cB, Bc, nc);
              if (!fI(Vc)) return null;
              const Ic = Math.max(0, Vc.forwardGap);
              return Vc.sidewaysOverlap <= 0 && Vc.sidewaysGap > 2 * (Ic + 1) ? null : mr(Vc)
            })(cB, Bc, nc);
            null !== sc && sc < rB && !Vc.has(uc) && (rB = sc, Ic = uc)
          })), Ic < 0) return -1;
        const uc = Bc[Ic],
          sc = TI(cB, uc, nc).forwardGap;
        let Mc = sc,
          Pc = Ic;
        return Bc.forEach(((Bc, rB) => {
          if (rB === Ic || Vc.has(rB) || !((cB, Bc, nc) => {
              const Vc = "Left" === nc || "Right" === nc,
                Ic = Vc ? OI(cB.top, cB.bottom, Bc.top, Bc.bottom) : OI(cB.left, cB.right, Bc.left, Bc.right),
                rB = Vc ? Math.min(cB.bottom - cB.top, Bc.bottom - Bc.top) : Math.min(cB.right - cB.left, Bc.right - Bc.left);
              return Ic > 0 && Ic >= rB / 2
            })(Bc, uc, nc)) return;
          const qB = TI(cB, Bc, nc);
          fI(qB) && qB.forwardGap + qB.toLength <= sc + 1 && qB.forwardGap < Mc && (Mc = qB.forwardGap, Pc = rB)
        })), Pc
      },
      hI = (cB, Bc) => {
        let nc = -1,
          Vc = 1 / 0;
        return Bc.forEach(((Bc, Ic) => {
          const rB = Math.max(Bc.left - cB.x, 0, cB.x - Bc.right),
            uc = Math.max(Bc.top - cB.y, 0, cB.y - Bc.bottom),
            sc = Math.hypot(rB, uc);
          sc < Vc && (Vc = sc, nc = Ic)
        })), nc
      },
      ar = (cB, Bc) => {
        const nc = Math.min(cB.bottom - cB.top, Bc.bottom - Bc.top) / 2;
        return Math.abs(cB.top - Bc.top) > nc ? cB.top - Bc.top : cB.left - Bc.left
      },
      lI = cB => {
        let Bc = -1;
        for (let nc = 0; nc < cB.length; nc++)(Bc < 0 || ar(cB[nc], cB[Bc]) < 0) && (Bc = nc);
        return Bc
      };
    var YI = nc(7672),
      LI = nc(7675);
    const gr = cB => {
        if ("death" !== cB || "inGame" !== Mc.d.get("gameState") || "off" === (0, Tc.k)().quickChat || null === (0, BI.b)()) return !1;
        const Bc = (0, qB.g)("chat");
        return Bc !== (0, qB.g)("menuConfirm") && Bc !== (0, qB.g)("menuBack")
      },
      UI = new YI.b;
    var br = nc(3502),
      ZI = nc(7684);
    const QI = cB => {
        let Bc = null;
        for (const nc of cB.querySelectorAll("[data-pad-tabs]")) PB(nc) && (!Bc || Number(nc.dataset.padTabs) < Number(Bc.dataset.padTabs)) && (Bc = nc);
        return Bc
      },
      CI = (cB, Bc, nc, Vc) => {
        cB.focusWhenFound((() => {
          const Ic = cB.pickInitial(Bc);
          if (Ic && !nc.has(Ic) && (null === Vc || void 0 === Vc || !Vc.contains(Ic))) return Ic;
          const rB = ((cB, Bc) => {
              const nc = Bc => cB.getEnabledCandidates(Bc).filter((cB => !cB.closest("[data-pad-tabs]")));
              for (const Vc of yn(Bc)) {
                const cB = nc(Vc);
                if (cB.length > 0) return cB
              }
              return nc(Bc)
            })(cB, Bc).filter((cB => !nc.has(cB))),
            uc = lI(rB.map((cB => cB.getBoundingClientRect())));
          return uc >= 0 ? rB[uc] : null
        }), 3e3)
      },
      vr = (cB, Bc, nc, Vc) => {
        var Ic;
        const rB = ((cB, Bc) => {
          if (0 === cB.length) return null;
          const nc = cB.findIndex((cB => "true" === cB.dataset.padSelected));
          return nc < 0 ? Bc > 0 ? cB[0] : cB[cB.length - 1] : cB[(nc + Bc + cB.length) % cB.length]
        })([...nc.querySelectorAll("[data-pad-tab]")].filter((cB => PB(cB) && !qn(cB))), Vc);
        if (!rB) return;
        const uc = null !== (Ic = null === cB || void 0 === cB ? void 0 : cB.getFocused()) && void 0 !== Ic ? Ic : null,
          sc = !(null === uc || void 0 === uc || !uc.isConnected) && nc.contains(uc),
          Mc = cB && !sc ? new Set(cB.getEnabledCandidates(Bc)) : null;
        bn(rB), cB && (Mc ? CI(cB, Bc, Mc, nc) : cB.setFocus(rB, {
          byUser: !0
        }))
      },
      DI = cB => {
        var Bc;
        const nc = Dc(null !== (Bc = Uc(cB, "x")) && void 0 !== Bc ? Bc : cB),
          Vc = fB(cB).filter((cB => !qn(cB))),
          Ic = Vc.filter((cB => Nc(cB.getBoundingClientRect(), nc)));
        return (Ic.length > 0 ? Ic : Vc).sort(((cB, Bc) => ar(cB.getBoundingClientRect(), Bc.getBoundingClientRect())))
      },
      NI = (cB, Bc, nc) => {
        const Vc = [...Bc.querySelectorAll("[data-pad-row]")].filter(PB),
          Ic = cB.getFocused(),
          rB = Ic ? Vc.findIndex((cB => cB.contains(Ic))) : -1;
        let uc = 0,
          sc = nc > 0 ? 0 : Vc.length - 1;
        if (rB >= 0 && Ic) uc = Math.max(0, DI(Vc[rB]).indexOf(Ic)), sc = rB + nc;
        else if (Ic) {
          const cB = Ic.getBoundingClientRect(),
            Bc = Vc.map((Bc => {
              const Vc = Bc.getBoundingClientRect();
              return nc > 0 ? Vc.top >= cB.top : Vc.bottom <= cB.bottom
            }));
          sc = nc > 0 ? Bc.indexOf(!0) : Bc.lastIndexOf(!0)
        }
        for (let Mc = sc; Mc >= 0 && Mc < Vc.length; Mc += nc) {
          const Bc = DI(Vc[Mc]);
          if (Bc.length > 0) return void cB.setFocus(Bc[Math.min(uc, Bc.length - 1)], {
            byUser: !0
          })
        }
      },
      EI = (cB, Bc, nc) => {
        var Vc, Ic;
        const rB = null !== (Vc = null === cB || void 0 === cB ? void 0 : cB.getFocused()) && void 0 !== Vc ? Vc : null,
          uc = null !== rB && void 0 !== rB && rB.closest("[data-pad-row]") ? "x" : "y",
          sc = null !== (Ic = rB ? Uc(rB, uc, Bc) : null) && void 0 !== Ic ? Ic : Zc(Bc, uc);
        if (!sc) return;
        const Mc = rB ? pB(rB) : null;
        if (vB(sc, uc, nc * ("y" === uc ? sc.clientHeight : sc.clientWidth) * .85), !cB || !Mc) return;
        const Pc = Dc(sc),
          qB = cB.getEnabledCandidates(Bc).filter((cB => sc.contains(cB) && Nc(cB.getBoundingClientRect(), Pc))),
          Oc = hI(Mc, qB.map((cB => cB.getBoundingClientRect())));
        Oc >= 0 && cB.setFocus(qB[Oc], {
          scroll: !1,
          byUser: !0
        })
      };
    let oI = null;
    const WI = (cB, Bc) => {
        var nc, Vc;
        const Ic = Bc.querySelector("[data-pad-friends-column]"),
          rB = cB.getFocused();
        if (!Ic || !rB || !Ic.contains(rB)) return !1;
        const uc = cB.getEnabledCandidates(Bc).filter((cB => !Ic.contains(cB))),
          sc = hI(pB(rB), uc.map((cB => cB.getBoundingClientRect()))),
          Mc = null === (nc = oI) || void 0 === nc ? void 0 : nc.deref();
        return cB.setFocus(null !== Mc && void 0 !== Mc && Mc.isConnected ? Mc : null !== (Vc = uc[sc]) && void 0 !== Vc ? Vc : null, {
          byUser: !0
        }), !0
      },
      wI = cB => {
        const Bc = (0, qB.g)(cB);
        return (0, mB.R)(Bc) || uI.u.some((cB => (0, qB.g)(cB) === Bc)) ? null : Bc
      },
      kr = (cB, Bc) => {
        const nc = wI(Bc);
        return null !== nc && cB.wasPressed(nc)
      },
      XI = function(cB, Bc, nc) {
        let Vc = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const Ic = (cB => {
            var Bc, nc;
            return null !== (Bc = null === (nc = QI(cB)) || void 0 === nc ? void 0 : nc.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== Bc ? Bc : null
          })(Bc),
          rB = cB && Ic ? new Set(cB.getEnabledCandidates(Bc)) : null;
        (0, VI.e)(), nc === II.i.SETTINGS && (0, rr.l)(Mc.d.get("openEverythingMenuName")) ? Mc.d.set({
          openEverythingMenuName: nc
        }) : (0, rr.w)(new Event("padMenuShortcut"), nc, Vc), cB && rB && Ic && CI(cB, Bc, rB, Ic.closest("[data-pad-tabs]"))
      },
      HI = cB => null !== cB.closest(".Dropdown-root") || null !== cB.querySelector(".Dropdown-root.is-open"),
      FI = cB => null !== (0, ZI.e)() && "popup" !== cB.layer.kind && !QI(cB.root) && !HI(cB.root),
      JI = (0, ec.c)(mB.nb),
      jr = (0, ec.c)(mB.nb),
      RI = (cB, Bc, nc) => {
        if (((cB, Bc) => {
            const nc = (0, qB.g)("chat");
            return gr(Bc) && cB.isHeld(nc) ? "hold" === UI.update(cB.wasPressed(nc), cB.isHeld(nc), performance.now(), tB.d[(0, Tc.k)().tapHoldTime].wheelMs) && (Oc.e.consumeButton(nc), Pc.i.Vu(LI.n), !0) : (UI.release(), !1)
          })(Bc, nc.layer.kind)) return !0;
        const Vc = nc.root;
        for (const [uc, sc] of [
            ["menuTabPrevious", -1],
            ["menuTabNext", 1]
          ])
          if (Bc.wasPressed((0, qB.g)(uc))) {
            const Bc = HI(Vc) ? null : QI(Vc);
            if (Bc) vr(cB, Vc, Bc, sc);
            else if (FI(nc)) {
              var Ic;
              const Bc = cB ? new Set(cB.getEnabledCandidates(Vc)) : null;
              null !== (Ic = (0, ZI.e)()) && void 0 !== Ic && Ic(sc) && cB && Bc && CI(cB, Vc, Bc, null)
            } else cB && NI(cB, Vc, sc);
            return !0
          } for (const [uc, sc, Mc] of [
            ["menuPageUp", -1, JI],
            ["menuPageDown", 1, jr]
          ]) {
          const nc = (0, qB.g)(uc);
          if (Bc.wasPressed(nc) && Mc.reset(), Mc.update(Bc.isHeld(nc), performance.now())) return EI(cB, Vc, sc), !0
        }
        const rB = "popup" === nc.layer.kind;
        return kr(Bc, "pause") ? (rB || (0, rr.s)() && "menu" !== nc.layer.kind || XI(cB, Vc, (0, rr.s)() ? II.i.SETTINGS : (0, br.d)()), !0) : !!kr(Bc, "leaderboard") && ("home" === nc.layer.kind ? (cB => {
          const Bc = [...cB.querySelectorAll("[data-pad-notifications]")].find(PB);
          Bc && bn(Bc)
        })(Vc) : rB || XI(cB, Vc, II.i.LOBBY_LEADERBOARD, "inGame" === Mc.d.get("gameState")), !0)
      },
      ir = (cB, Bc, nc) => {
        if (RI(cB, Bc, nc)) return !0;
        const Vc = "home" === nc.layer.kind;
        if (Bc.wasPressed((0, qB.g)("menuSecondary"))) {
          const Bc = cB.getFocused(),
            Ic = Bc ? PI(Bc) : null;
          if (Ic) return bn(Ic), !0;
          if (Vc) {
            const Bc = nc.root.querySelector("[data-pad-search] input");
            return Bc && SB(Bc, nc.root) ? (cB.setFocus(Bc, {
              byUser: !0
            }), bn(Bc)) : Mc.d.set({
              searchOpen: !0
            }), !0
          }
        }
        return !(!Vc || !kr(Bc, "inventory")) && (((cB, Bc) => {
          var nc, Vc;
          const Ic = Bc.querySelector("[data-pad-friends-column]");
          if (!Ic || !PB(Ic)) return void(0, rr.w)(new Event("padMenuShortcut"), II.i.SOCIAL);
          if (WI(cB, Bc)) return;
          const rB = null !== (nc = null === (Vc = Ic.querySelector("[data-pad-friends-start]")) || void 0 === Vc ? void 0 : Vc.getBoundingClientRect().top) && void 0 !== nc ? nc : -1 / 0,
            uc = cB.getEnabledCandidates(Ic),
            sc = uc.filter((cB => cB.getBoundingClientRect().top >= rB)),
            Mc = sc.length > 0 ? sc : uc,
            Pc = lI(Mc.map((cB => cB.getBoundingClientRect())));
          cB.setFocus(Pc >= 0 ? Mc[Pc] : null, {
            byUser: !0
          })
        })(cB, nc.root), !0)
      },
      KI = cB => {
        var Bc, nc, Vc;
        const Ic = WB(cB);
        if (null !== Ic) return Ic;
        const rB = (null !== (Bc = null !== (nc = null !== (Vc = cB.getAttribute("aria-label")) && void 0 !== Vc ? Vc : cB.getAttribute("title")) && void 0 !== nc ? nc : cB.textContent) && void 0 !== Bc ? Bc : "").replace(/\s+/g, " ").trim();
        return rB ? `${cB.tagName}:${rB.slice(0,100)}` : null
      };
    class xr {
      constructor() {
        this.remembered = new Map, this.history = []
      }
      enter(cB) {
        const Bc = this.history.indexOf(cB);
        if (Bc >= 0) {
          for (const cB of this.history.splice(Bc + 1)) this.remembered.delete(cB);
          return !0
        }
        return this.remembered.delete(cB), this.history.push(cB), this.history.length > 32 && this.forget(this.history[0]), !1
      }
      forget(cB) {
        this.remembered.delete(cB);
        const Bc = this.history.indexOf(cB);
        Bc >= 0 && this.history.splice(Bc, 1)
      }
      remember(cB, Bc, nc, Vc) {
        const Ic = KI(Bc),
          rB = WB(Bc),
          uc = null !== rB && ((cB, Bc) => {
            let nc = 0;
            for (const Vc of cB.querySelectorAll("[data-pad-key], [href]"))
              if ((Vc.getAttribute("data-pad-key") === Bc || Vc.getAttribute("href") === Bc) && (nc++, nc > 1)) return !0;
            return !1
          })(nc, rB) ? Math.max(0, this.twins(Vc(), rB).indexOf(Bc)) : 0;
        this.remembered.set(cB, {
          element: new WeakRef(Bc),
          identity: Ic,
          ordinal: uc
        })
      }
      has(cB) {
        return this.remembered.has(cB)
      }
      recall(cB, Bc) {
        var nc, Vc;
        const Ic = this.remembered.get(cB);
        if (!Ic) return null;
        const rB = Ic.element.deref();
        if (rB && Bc.includes(rB)) return rB;
        if (null === Ic.identity) return null;
        const uc = this.twins(Bc, Ic.identity);
        return null !== (nc = null !== (Vc = uc[Ic.ordinal]) && void 0 !== Vc ? Vc : uc[0]) && void 0 !== nc ? nc : null
      }
      twins(cB, Bc) {
        return cB.filter((cB => KI(cB) === Bc))
      }
    }
    var dI = nc(1134);
    const AI = cB => {
        const Bc = [];
        let nc = cB;
        for (; nc && nc !== document.body;) {
          const cB = getComputedStyle(nc).zIndex;
          "auto" !== cB && Bc.push(Number(cB) || 0), nc = nc.parentElement
        }
        return Bc.reverse()
      },
      GI = (cB, Bc) => {
        const nc = ((cB, Bc) => {
          const nc = Math.max(cB.length, Bc.length);
          for (let rB = 0; rB < nc; rB++) {
            var Vc, Ic;
            const nc = (null !== (Vc = cB[rB]) && void 0 !== Vc ? Vc : 0) - (null !== (Ic = Bc[rB]) && void 0 !== Ic ? Ic : 0);
            if (0 !== nc) return nc
          }
          return 0
        })(AI(cB), AI(Bc));
        if (0 !== nc) return nc > 0;
        if (cB.contains(Bc)) return !1;
        if (Bc.contains(cB)) return !0;
        const Vc = cB.compareDocumentPosition(Bc);
        return !!(Vc & Node.DOCUMENT_POSITION_PRECEDING) || !(Vc & Node.DOCUMENT_POSITION_FOLLOWING) && null
      },
      cu = (cB, Bc) => {
        var nc;
        return null !== (nc = GI(cB.root, Bc.root)) && void 0 !== nc ? nc : cB.order > Bc.order
      },
      Br = (cB, Bc) => Bc.some((Bc => !Bc.contains(cB) && !cB.contains(Bc) && !0 === GI(Bc, cB)));
    let nr = null,
      Vr = null,
      Ir = -1;
    const ru = () => {
        var cB;
        const Bc = null === (cB = document.timeline) || void 0 === cB ? void 0 : cB.currentTime,
          nc = "number" === typeof Bc ? Bc : null;
        if (null !== nc && nc === Vr && Ir === (0, dI.e)()) return nr;
        let Vc = null;
        const Ic = [],
          rB = [...document.querySelectorAll("[data-pad-covers]")].filter(PB);
        for (const uc of (0, dI.h)()) {
          const cB = uc.getRoot(),
            Bc = !!cB && PB(cB) && !Br(cB, rB);
          if (uc.shown && !Bc && Ic.push(uc), uc.shown = Bc, !cB || !Bc) continue;
          const nc = {
            layer: uc,
            root: cB,
            order: uc.order
          };
          Vc && !cu(nc, Vc) || (Vc = nc)
        }
        nr = Vc, Vr = nc, Ir = (0, dI.e)();
        for (const uc of Ic)(0, dI.i)(uc);
        return nr
      },
      ur = () => {
        const cB = ru();
        return !(null === cB || void 0 === cB || !cB.layer.close) && (cB.layer.close(), Vr = null, !0)
      },
      sr = () => {
        var cB, Bc;
        return null !== (cB = null === (Bc = ru()) || void 0 === Bc ? void 0 : Bc.root) && void 0 !== cB ? cB : null
      },
      Mr = cB => cB ? {
        ...cB,
        root: sr()
      } : null;
    let Pr = null,
      qu = null,
      Or = (0, Tc.k)().menuNavigation,
      Tr = null;
    const fr = new hc;
    let mu = null;
    Pc.i.subscribe(Tc.g, (() => {
      const cB = (0, Tc.k)().menuNavigation;
      cB !== Or && (Or = cB, Pr = null, qu = null)
    }));
    const er = () => {
        var cB;
        return null !== (cB = Pr) && void 0 !== cB ? cB : (0, Tc.k)().menuNavigation
      },
      tu = cB => {
        if (pr()) {
          if (Tr = Mr(cB), "hybrid" === er()) return fr.lock(), void(qu = qu ? null : sr());
          Pr = "focus" === er() ? "cursor" : "focus"
        }
      },
      Sr = () => {
        const cB = Tr;
        return Tr = null, cB
      };
    let yu = {
      root: null,
      firstSeenMs: -1 / 0,
      atMs: -1 / 0,
      has: !1
    };
    const zu = function(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const nc = yu.root === cB,
          Vc = nc ? yu.firstSeenMs : Bc,
          Ic = yu.has || Bc - Vc > 1e3;
        return (!nc || !Ic || Bc - yu.atMs > 250) && (yu = {
          root: cB,
          firstSeenMs: Vc,
          atMs: Bc,
          has: eB(cB)
        }), yu.has
      },
      pr = () => {
        const cB = sr();
        return null !== cB && zu(cB)
      },
      hr = () => {
        const cB = ru();
        return qu && (null === cB || void 0 === cB ? void 0 : cB.root) !== qu && (qu = null), (cB => {
          let {
            mode: Bc,
            hasLayer: nc,
            hasCandidates: Vc,
            hybridCursorEngaged: Ic
          } = cB;
          return nc ? "cursor" !== Bc && Vc() ? "hybrid" === Bc && Ic ? "cursor" : "focus" : "cursor" : null
        })({
          mode: er(),
          hasLayer: null !== cB,
          hasCandidates: () => null !== cB && zu(cB.root),
          hybridCursorEngaged: null !== qu
        })
      },
      au = () => "hybrid" === er() && pr(),
      lr = "pad-focused";
    var Yr = nc(4073);
    const Lr = "[data-pad-destructive]",
      gu = `${Lr}, [data-pad-back]`,
      Ur = cB => ({
        rect: cB.getBoundingClientRect(),
        destructive: cB.matches(Lr),
        closes: null !== cB.closest("[data-pad-close-button]"),
        unavailable: cB.matches("[data-pad-unavailable]")
      }),
      bu = cB => {
        let {
          destructive: Bc,
          closes: nc,
          unavailable: Vc
        } = cB;
        return Bc ? nc ? 2 : 3 : Vc ? 1 : 0
      },
      Zr = cB => {
        let Bc = -1;
        for (let nc = 0; nc < cB.length; nc++) {
          if (Bc < 0) {
            Bc = nc;
            continue
          }
          const Vc = cB[nc],
            Ic = cB[Bc];
          bu(Vc) === bu(Ic) ? ar(Vc.rect, Ic.rect) < 0 && (Bc = nc) : bu(Vc) < bu(Ic) && (Bc = nc)
        }
        return Bc
      },
      Qr = "[data-pad-tabs]",
      Cr = "[data-pad-tab]",
      vu = (cB, Bc) => {
        const nc = cB.querySelector(`${Cr}[data-pad-selected='true']`);
        return nc && Bc.includes(nc) ? nc : null
      },
      Dr = (cB, Bc) => {
        let nc = Bc;
        for (let Vc = Bc.parentElement; Vc && !Vc.contains(cB); Vc = Vc.parentElement) nc = Vc;
        return nc
      };
    class Nr {
      constructor() {
        this.contentReturn = null
      }
      redirect(cB, Bc, nc, Vc) {
        var Ic, rB;
        const uc = cB.closest(Qr),
          sc = Bc.closest(Qr);
        var Mc;
        if (sc && sc !== uc) return uc || (this.contentReturn = new WeakRef(cB)), null !== (Mc = vu(sc, nc)) && void 0 !== Mc ? Mc : Bc;
        if (!uc || sc) return Bc;
        const Pc = Dr(cB, Bc),
          qB = null === (Ic = this.contentReturn) || void 0 === Ic ? void 0 : Ic.deref();
        return qB && Pc.contains(qB) && nc.includes(qB) ? qB : null !== (rB = this.pickRegionStart(Pc, Uc(Bc, "y", Vc), nc)) && void 0 !== rB ? rB : Bc
      }
      findTabContent(cB, Bc, nc) {
        const Vc = cB.closest(Qr);
        if (!Vc || !cB.matches(Cr) || Vc.contains(Bc)) return null;
        const Ic = Bc.closest(Qr);
        if (Ic && Number(Ic.dataset.padTabs) <= Number(Vc.dataset.padTabs)) return null;
        const rB = Dr(cB, Bc);
        return nc.some((cB => rB.contains(cB) && !cB.closest(gu))) || !Bc.closest(gu) ? rB : null
      }
      pickContentStart(cB, Bc, nc) {
        return this.contentReturn = null, this.pickRegionStart(cB, Uc(cB, "y", nc), Bc)
      }
      pickReplacedContentStart(cB, Bc, nc, Vc) {
        if (!Bc.contains(cB)) return null;
        const Ic = Dr(Bc, cB),
          rB = nc.filter((cB => Bc.contains(cB) && !Ic.contains(cB) && !cB.closest(gu)));
        return 0 === rB.length ? null : (this.contentReturn = null, this.pickRegionStart(Bc, Uc(rB[0], "y", Vc), rB))
      }
      backToStrip(cB, Bc, nc) {
        if (cB.closest(Qr)) return null;
        const Vc = QI(nc);
        for (const Ic of nc.querySelectorAll(Qr)) {
          if (Number(Ic.dataset.padTabs) <= 1 || Ic === Vc) continue;
          const rB = vu(Ic, Bc),
            uc = rB ? Dr(cB, Ic).parentElement : null;
          if (rB && uc && uc !== nc && nc.contains(uc)) return this.contentReturn = new WeakRef(cB), rB
        }
        return null
      }
      pickRegionStart(cB, Bc, nc) {
        const Vc = Dc(Bc),
          Ic = cB => {
            const Bc = nc.filter((Bc => cB.contains(Bc) && !Bc.closest(Qr) && Nc(Bc.getBoundingClientRect(), Vc))),
              Ic = Zr(Bc.map(Ur));
            return Ic >= 0 ? Bc[Ic] : null
          };
        for (const rB of yn(cB)) {
          const cB = Ic(rB);
          if (cB) return cB
        }
        for (const rB of cB.querySelectorAll(Qr)) {
          const cB = vu(rB, nc);
          if (cB) return cB
        }
        return Ic(cB)
      }
    }
    const Er = 1e3,
      or = "[data-pad-default-focus], .Dropdown-option.is-selected",
      Wr = ".Dropdown-root.is-open > .Dropdown-menu",
      wr = "[data-pad-no-step-in]",
      ku = "[data-pad-tabs]",
      Xr = "[data-pad-press-area]",
      Hr = cB => {
        let Bc = cB;
        for (let nc = 0; Bc && nc <= 4; nc++, Bc = Bc.parentElement) {
          const nc = Bc.querySelector(".CircleInfo");
          if (nc) return Bc === cB || Bc.querySelectorAll(sB).length <= 1 ? nc : null;
          if (Bc !== cB && Bc.querySelectorAll(sB).length > 1) return null
        }
        return null
      },
      Fr = (cB, Bc, nc) => {
        gn(cB, Bc, nc);
        const Vc = null !== cB && void 0 !== cB && cB.isConnected ? Hr(cB) : null,
          Ic = Hr(Bc);
        Vc !== Ic && gn(Vc, Ic, Ic ? pB(Ic) : nc, {
          leaveBelow: cB,
          enterBelow: Bc
        })
      },
      Jr = cB => cB.getBoundingClientRect(),
      ju = (cB, Bc, nc) => {
        const Vc = new Set(nc);
        for (let Ic = cB; Ic; Ic = Ic === Bc ? null : Ic.parentElement)
          if (Vc.has(Ic)) return Ic;
        return null
      },
      Rr = (cB, Bc) => !cB.root || cB.root === Bc || Bc.matches(Wr) && cB.root.contains(Bc);
    const iu = new class {
        constructor() {
          this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new xr, this.tabStripNav = new Nr, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepeatKey = null, this.confirmRepeated = !1, this.confirmRepeat = (0, ec.c)(mB.A), this.dpadRepeats = new Map(mB.L.map((cB => [cB, (0, ec.c)(mB.O)]))), this.stickRepeat = new mB.d((0, ec.c)(mB.tb)), this.lastRefocusCheckMs = -1 / 0, this.enteredLayerAtMs = 0, this.lastFocusedCentre = null, this.lastActivatedKey = null, this.lastActivated = null, this.lastActivatedAtMs = -1 / 0, this.pendingFocus = null, this.tabOpenWait = null, this.retryMove = null, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.wasActive = !1, this.layerKind = null, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.listeners = new Set, this.dropdownLayers = new WeakMap, this.dropdownLayerCounter = 0
        }
        install() {
          const cB = Oc.e.register({
              name: "focus",
              isActive: () => (0, fc.k)() && "focus" === hr(),
              onFrame: cB => {
                this.onFrame(cB)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: cB => (0, Oc.i)(cB) || cB === (0, qB.g)("menuConfirm") && NB((0, fc.e)())
            }),
            Bc = (0, dI.m)((cB => {
              const Bc = (0, dI.s)(cB);
              null === cB.memoryKey && this.memory.forget(Bc), Bc === this.layerKey && (this.layerKey = null)
            }));
          let nc = -1 / 0;
          const Vc = uc.h.onFrame((cB => {
              (0, fc.k)() || cB.timestampMs - nc < 100 || (nc = cB.timestampMs, ru())
            })),
            Ic = cB => {
              cB.isTrusted && cB.target instanceof Element && uc.h.getActivePad() && this.noteChosenStop(cB.target)
            };
          return document.addEventListener("click", Ic, !0), () => {
            cB(), Bc(), Vc(), document.removeEventListener("click", Ic, !0), this.deactivate()
          }
        }
        noteChosenStop(cB) {
          var Bc, nc;
          const Vc = ru();
          if (!Vc || !Vc.root.contains(cB)) return;
          const Ic = null !== (Bc = null === (nc = cB.closest(".Dropdown-root")) || void 0 === nc ? void 0 : nc.querySelector(".Dropdown-control")) && void 0 !== Bc ? Bc : cB,
            rB = ju(Ic, Vc.root, this.getEnabledCandidates(Vc.root));
          if (!rB) return;
          const uc = (0, dI.s)(Vc.layer);
          uc === this.layerKey && Vc.root === this.layerRoot || this.beginLayer(Vc, uc), this.wasActive ? this.setFocus(rB, {
            scroll: !1,
            byUser: !0
          }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = rB, this.lastFocusedCentre = pB(rB), this.rememberFocus(rB), this.notify())
        }
        getFocused() {
          return this.focused
        }
        isActive() {
          return this.wasActive
        }
        onChange(cB) {
          return this.listeners.add(cB), () => {
            this.listeners.delete(cB)
          }
        }
        notify() {
          for (const cB of this.listeners) cB()
        }
        deactivate() {
          var cB;
          if (this.wasActive) {
            this.wasActive = !1, this.layerKind = null, this.confirmPressedOn = null, this.retryMove = null, this.pendingFocus = null;
            for (const cB of this.dpadRepeats.values()) cB.reset();
            this.stickRepeat.reset(), null !== (cB = this.focused) && void 0 !== cB && cB.isConnected && Fr(this.focused, null, pB(this.focused)), this.notify()
          }
        }
        setFocus(cB) {
          var Bc;
          let {
            scroll: nc = !0,
            byUser: Vc = !1
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (Vc && (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1), cB === this.focused) return;
          const Ic = null !== (Bc = this.focused) && void 0 !== Bc && Bc.isConnected ? this.focused : null;
          if (this.focused = cB, cB) {
            nc && (cB.classList.add(lr), cB.scrollIntoView({
              block: "nearest",
              inline: "nearest",
              behavior: "instant"
            })), Vc && ((cB, Bc) => {
              const nc = Bc.closest("[data-pad-friends-column]");
              nc && cB && !nc.contains(cB) && (oI = new WeakRef(cB))
            })(Ic, cB);
            const Bc = pB(cB);
            this.lastFocusedCentre = Bc, this.movedInLayer && this.rememberFocus(cB), Fr(Ic, cB, Bc), "false" === cB.getAttribute("aria-pressed") && cB.closest("[data-pad-select-on-focus]") && bn(cB)
          } else Ic && Fr(Ic, null, pB(Ic));
          this.notify()
        }
        rememberFocus(cB) {
          const Bc = this.layerRoot;
          this.layerKey && Bc && this.memory.remember(this.layerKey, cB, Bc, (() => this.getEnabledCandidates(Bc)))
        }
        noteCursorActivation(cB) {
          const Bc = ru();
          if (!Bc || !Bc.root.contains(cB)) return;
          const nc = this.getEnabledCandidates(Bc.root),
            Vc = new Set(nc);
          let Ic = cB;
          for (; Ic && !Vc.has(Ic);) Ic = Ic === Bc.root ? null : Ic.parentElement;
          if (!(Ic instanceof HTMLElement)) return;
          const rB = (0, dI.s)(Bc.layer);
          this.memory.enter(rB), this.memory.remember(rB, Ic, Bc.root, (() => nc))
        }
        notePageEnteredByCursor(cB) {
          return this.memory.enter(cB)
        }
        recallStop(cB, Bc) {
          return this.findRemembered(cB, Bc)
        }
        focusWhenFound(cB) {
          let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
            nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          this.pendingFocus = {
            find: cB,
            untilMs: performance.now() + Bc,
            holdWhile: nc
          }
        }
        getEnabledCandidates(cB) {
          return fB(cB).filter((cB => !qn(cB)))
        }
        onFrame(cB) {
          var Bc;
          const nc = ru();
          if (!nc) return;
          const Vc = null !== (Bc = this.findOpenDropdown(nc)) && void 0 !== Bc ? Bc : nc,
            Ic = performance.now(),
            rB = (0, dI.s)(Vc.layer);
          if (rB !== this.layerKey || Vc.root !== this.layerRoot) {
            const Bc = this.focused;
            if (null !== this.layerKey && Vc.root === this.layerRoot && Bc && SB(Bc, Vc.root)) this.continueLayer(rB, Bc), this.wasActive || this.resume(Vc.root, Ic);
            else {
              const Bc = !this.wasActive && !cB.wokeDevice,
                uc = "death" === this.layerKind || Bc,
                sc = this.enterLayer(Vc, rB);
              "popup" !== Vc.layer.kind || Vc !== nc || sc ? "menu" === Vc.layer.kind && uc && "inGame" === Mc.d.get("gameState") && !(0, VI.f)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = Ic + Er) : (this.pressGuardExtends = Bc, this.pressGuardUntilMs = Ic + (Bc ? Er : uc ? 500 : 250))
            }
          } else this.wasActive || this.resume(Vc.root, Ic);
          if (this.layerKind = Vc.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), cB.wokeDevice && this.focusPointedStop(Vc.root), this.validateFocus(Vc, Ic), Ic < this.pressGuardUntilMs && this.pressGuardExtends && (cB.wasPressed((0, qB.g)("menuConfirm")) || cB.wasPressed((0, qB.g)("menuBack"))) && (this.pressGuardUntilMs = Ic + Er), Ic >= this.pressGuardUntilMs && this.handleButtons(cB, Vc)) return;
          const uc = "hybrid" === er();
          if (uc && (cB => {
              const Bc = sr();
              return Bc !== mu && (mu = Bc, fr.lock()), fr.update(cB, (0, Tc.k)().moveDeadzone)
            })(cB.leftStick)) return sc = this.getHandoff(), Tr = Mr(sc), qu = sr(), void Oc.e.handOffHeldInput();
          var sc;
          this.handleDirections(cB, Vc, Ic, !uc), this.handleScroll(cB, Vc)
        }
        findOpenDropdown(cB) {
          const Bc = cB.root.querySelector(Wr);
          if (!Bc || !PB(Bc)) return null;
          let nc = this.dropdownLayers.get(Bc);
          return nc || (this.dropdownLayerCounter++, nc = {
            id: `dropdown-${this.dropdownLayerCounter}`,
            kind: cB.layer.kind,
            getRoot: () => Bc,
            close: () => {
              CB(Bc)
            },
            memoryKey: null
          }, this.dropdownLayers.set(Bc, nc)), {
            layer: nc,
            root: Bc,
            order: cB.order
          }
        }
        focusPointedStop(cB) {
          const Bc = (0, fc.e)(),
            nc = Bc ? document.elementFromPoint(Bc.x, Bc.y) : null;
          if (!nc || !cB.contains(nc)) return;
          const Vc = ju(nc, cB, this.getEnabledCandidates(cB));
          Vc && this.setFocus(Vc, {
            scroll: !1,
            byUser: !0
          })
        }
        enterLayer(cB, Bc) {
          const nc = this.beginLayer(cB, Bc),
            Vc = Sr();
          return Vc && Rr(Vc, cB.root) ? (this.takeOver(cB.root, Vc, this.enteredLayerAtMs), nc) : (this.restoreLayerFocus(cB.root, nc), nc)
        }
        beginLayer(cB, Bc) {
          return this.layerKey = Bc, this.layerRoot = cB.root, this.lastActivatedKey = null, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoreOnFocusLoss = !1, this.retryMove = null, this.pendingFocus = null, this.confirmPressedOn = null, this.lastRefocusCheckMs = -1 / 0, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.enteredLayerAtMs = performance.now(), this.lastFocusedCentre = null, this.memory.enter(Bc)
        }
        restoreLayerFocus(cB, Bc) {
          const nc = Bc && this.layerKey ? this.findRemembered(cB, this.layerKey) : null;
          this.restoredFromMemory = null !== nc, this.setFocus(null !== nc && void 0 !== nc ? nc : this.pickInitial(cB, {
            waitForContent: !0
          }))
        }
        continueLayer(cB, Bc) {
          this.layerKey = cB;
          const nc = this.memory.enter(cB);
          this.restoreOnFocusLoss = nc, this.movedInLayer && !nc && this.rememberFocus(Bc)
        }
        resume(cB, Bc) {
          var nc;
          const Vc = Sr();
          Vc && Rr(Vc, cB) ? this.takeOver(cB, Vc, Bc) : null !== (nc = this.focused) && void 0 !== nc && nc.isConnected && Fr(null, this.focused, pB(this.focused))
        }
        pickPreferred(cB) {
          var Bc;
          return null !== (Bc = this.layerKey ? this.findRemembered(cB, this.layerKey) : null) && void 0 !== Bc ? Bc : this.pickInitial(cB, {
            waitForContent: !0
          })
        }
        findRemembered(cB, Bc) {
          return this.memory.has(Bc) ? this.memory.recall(Bc, this.getEnabledCandidates(cB)) : null
        }
        getHandoff() {
          var cB, Bc, nc;
          const Vc = null !== (cB = this.focused) && void 0 !== cB && cB.isConnected ? this.focused : null,
            Ic = null !== (Bc = this.layerRoot) && void 0 !== Bc && Bc.isConnected ? this.layerRoot : null;
          return {
            point: Vc ? pB(Vc) : null !== (nc = this.lastFocusedCentre) && void 0 !== nc ? nc : this.getLayerStartPoint(Ic),
            element: Vc,
            direction: null
          }
        }
        getLayerStartPoint(cB) {
          if (!cB) return {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          };
          const Bc = this.pickInitial(cB, {
            includeDisabled: !0
          });
          return pB(null !== Bc && void 0 !== Bc ? Bc : cB)
        }
        takeOver(cB, Bc, nc) {
          const {
            element: Vc,
            direction: Ic,
            point: rB
          } = Bc, uc = Vc instanceof HTMLElement && SB(Vc, cB) ? Vc : null;
          if (!Ic) {
            const Bc = this.focused;
            return uc ? this.setFocus(uc, {
              scroll: !1,
              byUser: !0
            }) : this.focusNearest(cB, rB), void(this.focused && this.focused === Bc && this.focused.isConnected && Fr(null, this.focused, pB(this.focused)))
          }
          if (this.dpadRepeats.get(Ic).update(!0, nc), uc) return this.setFocus(uc, {
            scroll: !1,
            byUser: !0
          }), void this.move(cB, Ic, nc, !0);
          const sc = this.getEnabledCandidates(cB),
            Mc = sc.map(Jr),
            Pc = tr(new DOMRect(rB.x, rB.y, 0, 0), Mc, Ic),
            qB = Pc >= 0 ? Pc : hI(rB, Mc);
          this.setFocus(qB >= 0 ? sc[qB] : this.pickInitial(cB), {
            byUser: !0
          })
        }
        focusNearest(cB, Bc) {
          const nc = this.getEnabledCandidates(cB),
            Vc = hI(Bc, nc.map(Jr));
          this.setFocus(Vc >= 0 ? nc[Vc] : this.pickInitial(cB), {
            byUser: !0
          })
        }
        pickDefault(cB) {
          let {
            includeDisabled: Bc = !1,
            exclude: nc = null
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const Vc = [...cB.querySelectorAll(or)].filter((Vc => (null === nc || void 0 === nc || !nc.has(Vc)) && (Bc ? tn(Vc, cB) : SB(Vc, cB)))),
            Ic = Zr(Vc.map(Ur));
          return Ic >= 0 ? Vc[Ic] : null
        }
        pickNewAreaStart(cB, Bc) {
          const nc = [...cB.querySelectorAll(Xr)].filter(PB);
          for (const Vc of [...yn(cB), ...nc]) {
            if (Bc.has(Vc)) continue;
            const cB = this.getEnabledCandidates(Vc),
              nc = Zr(cB.map(Ur));
            if (nc >= 0) return cB[nc]
          }
          return null
        }
        pickInitial(cB) {
          let {
            includeDisabled: Bc = !1,
            waitForContent: nc = !1,
            enteredAtMs: Vc = this.enteredLayerAtMs
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const Ic = this.pickDefault(cB, {
            includeDisabled: Bc
          });
          if (Ic) return Ic;
          const rB = cB => Bc ? fB(cB) : this.getEnabledCandidates(cB);
          let uc = [];
          for (const Tc of yn(cB))
            if (uc = rB(Tc), uc.length > 0) break;
          if (0 === uc.length) {
            if (nc && performance.now() - Vc < 1e4 && (cB => {
                for (const Bc of cB.querySelectorAll("[data-pad-initial-area]"))
                  if (!MB(Bc, !1)) return !0;
                return !1
              })(cB)) return null;
            uc = rB(cB)
          }
          const sc = uc.map(Jr),
            Mc = Dc(null),
            Pc = uc.filter(((cB, Bc) => Nc(sc[Bc], Mc))),
            qB = Pc.length > 0 ? Pc : uc,
            Oc = Zr(qB.map(Ur));
          return Oc >= 0 ? qB[Oc] : null
        }
        validateFocus(cB, Bc) {
          if (this.pendingFocus) {
            var nc, Vc;
            const Ic = this.pendingFocus.find();
            if (Ic && SB(Ic, cB.root)) return this.pendingFocus = null, void this.setFocus(Ic, {
              byUser: !0
            });
            Bc > this.pendingFocus.untilMs && (null === (nc = (Vc = this.pendingFocus).holdWhile) || void 0 === nc || !nc.call(Vc)) && (this.pendingFocus = null)
          }
          const Ic = this.focused,
            rB = !!Ic && SB(Ic, cB.root);
          if (!(!rB && Ic && Ic === this.lastActivated && Bc - this.lastActivatedAtMs < 5e3 && cB.root.contains(Ic) && PB(Ic) && qn(Ic))) {
            if (!rB && this.restoreOnFocusLoss && this.layerKey) return this.restoreOnFocusLoss = !1, this.movedInLayer = !1, this.scrolledInLayer = !1, this.enteredLayerAtMs = Bc, void this.restoreLayerFocus(cB.root, !0);
            if ((!rB || !this.movedInLayer && !this.scrolledInLayer) && !(Bc - this.lastRefocusCheckMs < (rB ? 200 : 50)))
              if (this.lastRefocusCheckMs = Bc, rB) {
                const nc = Bc - this.enteredLayerAtMs < 15e3 ? this.pickPreferred(cB.root) : null,
                  Vc = null !== nc && void 0 !== nc ? nc : this.restoredFromMemory ? null : this.pickDefault(cB.root);
                Vc && Vc !== Ic && this.setFocus(Vc)
              } else {
                if (this.lastFocusedCentre && this.movedInLayer) {
                  const Bc = this.pendingFocus;
                  return this.focusNearest(cB.root, this.lastFocusedCentre), void(this.pendingFocus = Bc)
                }
                this.setFocus(this.pickPreferred(cB.root))
              }
          }
        }
        handleButtons(cB, Bc) {
          if (cB.wasPressed((0, qB.g)("menuToggleCursor"))) return tu(this.getHandoff()), !0;
          if (cB.wasPressed((0, qB.g)("menuBack"))) {
            const cB = CB(Bc.root);
            return cB ? this.setFocus(cB, {
              byUser: !0
            }) : WI(this, Bc.root) || (oB(Bc.root) ? this.returnToOpener(Bc.root) : this.backToStrip(Bc.root) || ur()), !0
          }
          const nc = (0, qB.g)("menuConfirm");
          var Vc, Ic;
          cB.wasPressed(nc) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (Vc = null === (Ic = this.focused) || void 0 === Ic ? void 0 : Ic.getAttribute("data-pad-repeat")) && void 0 !== Vc ? Vc : null, this.confirmRepeated = cB.wokeDevice, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now()));
          if (cB.wasReleased(nc)) {
            const cB = this.confirmPressedOn;
            if (this.confirmPressedOn = null, cB && !this.confirmRepeated && cB === this.focused && cB.isConnected && !qn(cB)) {
              const nc = cB.matches("[data-pad-tab]") ? cB.closest(ku) : null;
              nc ? this.enterTab(cB, nc, Bc.root, performance.now()) : this.activate(cB)
            }
            return !0
          }
          return this.repeatConfirm(cB, nc), ir(this, cB, Bc)
        }
        repeatConfirm(cB, Bc) {
          const nc = this.confirmPressedOn;
          nc && null !== this.confirmRepeatKey && cB.isHeld(Bc) && (nc === this.focused && nc.isConnected && !qn(nc) && nc.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? nc.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.confirmRepeated = !0, this.activate(nc)) : this.confirmRepeatKey = null)
        }
        backToStrip(cB) {
          const Bc = this.focused;
          if (!(0, Tc.k)().menuBackToCategories) return !1;
          const nc = null !== Bc && void 0 !== Bc && Bc.isConnected ? this.tabStripNav.backToStrip(Bc, this.getEnabledCandidates(cB), cB) : null;
          return nc && this.setFocus(nc, {
            byUser: !0
          }), null !== nc
        }
        returnToOpener(cB) {
          const Bc = this.lastActivatedKey;
          Bc && (this.lastActivatedKey = null, this.focusWhenFound((() => {
            var nc;
            return null !== (nc = this.getEnabledCandidates(cB).find((cB => WB(cB) === Bc))) && void 0 !== nc ? nc : null
          })))
        }
        activate(cB) {
          var Bc;
          if ((0, Yr.e)(cB) || DB(cB)) return;
          this.lastActivatedKey = null !== (Bc = WB(cB)) && void 0 !== Bc ? Bc : this.lastActivatedKey, this.lastActivated = cB, this.lastActivatedAtMs = performance.now(), this.rememberFocus(cB);
          const nc = this.layerRoot;
          if (nc) {
            const Bc = new Set(nc.querySelectorAll(or)),
              Vc = new Set(nc.querySelectorAll(`[data-pad-initial-area], ${Xr}`)),
              Ic = this.lastActivatedAtMs;
            this.focusWhenFound((() => {
              var Ic;
              return SB(cB, nc) ? null : null !== (Ic = this.pickDefault(nc, {
                exclude: Bc
              })) && void 0 !== Ic ? Ic : this.pickNewAreaStart(nc, Vc)
            }), 5e3, (() => cB.isConnected && qn(cB) && performance.now() - Ic < 6e4))
          }
          bn(cB), vn(cB)
        }
        handleDirections(cB, Bc, nc, Vc) {
          const Ic = gr(Bc.layer.kind) ? (0, qB.g)("chat") : null;
          for (const sc of mB.L) {
            this.dpadRepeats.get(sc).update(cB.isHeld(sc), nc) && (sc !== Ic || cB.wasPressed(sc)) && this.move(Bc.root, sc, nc, !0)
          }
          const rB = Vc ? (0, mB.p)(cB.leftStick, (0, Tc.k)().moveDeadzone) : {
              x: 0,
              y: 0
            },
            uc = this.stickRepeat.update((0, mB.vb)(rB), nc);
          if (uc && this.move(Bc.root, uc, nc, !0), this.retryMove && nc >= this.retryMove.atMs) {
            const {
              direction: cB
            } = this.retryMove;
            this.retryMove = null, this.move(Bc.root, cB, nc, !1)
          }
        }
        move(cB, Bc, nc, Vc) {
          var Ic;
          let rB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (this.pendingFocus && this.pendingFocus === (null === (Ic = this.tabOpenWait) || void 0 === Ic ? void 0 : Ic.wait) && Bc === this.tabOpenWait.direction) return;
          this.pendingFocus = null;
          const uc = this.focused;
          if (!uc || !uc.isConnected) {
            const Bc = this.pickInitial(cB);
            return void(Bc && this.setFocus(Bc, {
              byUser: !0
            }))
          }
          const sc = "Left" === Bc || "Right" === Bc,
            Mc = sc ? (0, Yr.e)(uc) : null;
          if (Mc) return void Mc.adjust("Left" === Bc ? -1 : 1);
          const Pc = cB => null !== cB.closest("[data-pad-friends-column]"),
            qB = Pc(uc),
            Oc = Jr(uc),
            Tc = sc || uc.closest(ku) ? null : (cB => {
              const Bc = new Map;
              return nc => {
                const Vc = nc.closest(ku);
                if (!Vc) return !1;
                let Ic = Bc.get(Vc);
                if (void 0 === Ic) {
                  const nc = Jr(Vc);
                  Ic = eI(cB, nc) && (nc.right <= cB.left || nc.left >= cB.right), Bc.set(Vc, Ic)
                }
                return Ic
              }
            })(Oc),
            fc = null !== uc.closest(wr),
            mB = this.getEnabledCandidates(cB).filter((cB => cB !== uc && (sc || Pc(cB) === qB) && !(null !== Tc && void 0 !== Tc && Tc(cB)) && (fc || !cB.closest(wr)))),
            ec = mB.map(Jr),
            tB = Uc(uc, "y", cB),
            Sc = Dc(tB);
          if (!rB && !Nc(Oc, Sc)) {
            const cB = mB.filter(((cB, Bc) => Nc(ec[Bc], Sc)));
            if (cB.length > 0) {
              const Bc = {
                x: Sc.left + Sc.width / 2,
                y: Sc.top + Sc.height / 2
              };
              return void this.setFocus(cB[hI(Bc, cB.map(Jr))], {
                byUser: !0
              })
            }
          }
          const yB = sc ? ((cB, Bc, nc) => {
              const Vc = Jr(cB),
                Ic = cB.closest(ku),
                rB = Ic ? Jr(Ic) : null;
              return Bc.map(((Bc, uc) => {
                const sc = nc[uc];
                if (sc.bottom > Vc.top && sc.top < Vc.bottom) return !0;
                const Mc = Bc.closest(ku);
                if (Ic && rB) return Mc !== Ic && (null !== Mc || sc.bottom <= rB.top || sc.top >= rB.bottom);
                if (Mc) return !eI(Vc, Jr(Mc));
                let Pc = cB;
                for (let nc = cB.parentElement; nc && !nc.contains(Bc); nc = nc.parentElement) Pc = nc;
                const qB = Jr(Pc);
                return sc.right > qB.left && sc.left < qB.right
              }))
            })(uc, mB, ec) : void 0,
            zB = sc && !uc.closest(ku) ? (cB => cB.map((cB => !cB.closest(gu))))(mB) : void 0,
            pc = ((cB, Bc) => {
              const nc = [];
              for (let Ic = cB; Ic; Ic = Ic.parentElement) nc.push(Ic);
              const Vc = new Map;
              return nc.forEach(((cB, Bc) => {
                Vc.set(cB, nc.length - 1 - Bc)
              })), Bc.map((cB => {
                for (let Bc = cB; Bc; Bc = Bc.parentElement) {
                  const cB = Vc.get(Bc);
                  if (void 0 !== cB) return cB
                }
                return -1
              }))
            })(uc, mB),
            hc = sc ? "x" : "y",
            aB = Uc(uc, hc, cB);
          let lc = tr(Oc, ec, Bc, pc, yB, zB);
          if (lc >= 0 && aB && !aB.contains(mB[lc])) {
            const cB = mB.flatMap(((cB, Bc) => aB.contains(cB) ? [Bc] : [])),
              nc = Bc => Bc && cB.map((cB => Bc[cB])),
              Vc = tr(Oc, cB.map((cB => ec[cB])), Bc, cB.map((cB => pc[cB])), nc(yB), nc(zB));
            lc = Vc >= 0 ? cB[Vc] : lc
          }
          if (lc >= 0) return void this.moveTo(uc, mB[lc], mB, cB, Bc, rB);
          if (!Vc) return;
          const Yc = "Right" === Bc || "Down" === Bc ? 1 : -1;
          if (aB && Cc(aB, hc, Yc)) {
            const cB = "y" === hc ? aB.clientHeight : aB.clientWidth;
            vB(aB, hc, Yc * cB * .5), this.retryMove = {
              direction: Bc,
              atMs: nc + 80
            }
          }
        }
        moveTo(cB, Bc, nc, Vc, Ic, rB) {
          const uc = this.tabStripNav.findTabContent(cB, Bc, nc);
          uc && "true" !== cB.dataset.padSelected ? this.openTab(cB, uc, Vc, Ic) : rB && !uc || this.setFocus(this.tabStripNav.redirect(cB, Bc, nc, Vc), {
            byUser: !0
          })
        }
        openTab(cB, Bc, nc, Vc) {
          const Ic = Bc.parentElement;
          bn(cB), this.focusWhenFound((() => "true" !== cB.dataset.padSelected ? null : Bc.isConnected ? this.tabStripNav.pickContentStart(Bc, this.getEnabledCandidates(nc), nc) : Ic ? this.tabStripNav.pickReplacedContentStart(cB, Ic, this.getEnabledCandidates(nc), nc) : null), 3e3), this.tabOpenWait = {
            wait: this.pendingFocus,
            direction: Vc
          }
        }
        enterTab(cB, Bc, nc, Vc) {
          this.move(nc, (cB => {
            const Bc = [...cB.querySelectorAll(Cr)].filter((Bc => Bc.closest(Qr) === cB));
            if (Bc.length >= 2) {
              const cB = Bc[0].getBoundingClientRect(),
                nc = Bc[1].getBoundingClientRect();
              return Math.abs(nc.top - cB.top) > Math.abs(nc.left - cB.left) ? "Right" : "Down"
            }
            const nc = cB.getBoundingClientRect();
            return nc.height > nc.width ? "Right" : "Down"
          })(Bc), Vc, !1, !0), this.focused !== cB || this.pendingFocus || this.activate(cB)
        }
        handleScroll(cB, Bc) {
          const nc = (0, mB.p)(cB.rightStick, .2);
          if (0 === nc.x && 0 === nc.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          const Vc = cB.dtMs / 1e3;
          for (const rB of ["x", "y"]) {
            var Ic;
            const cB = nc[rB];
            if (0 === cB) continue;
            const uc = null !== (Ic = Uc(this.focused, rB, Bc.root)) && void 0 !== Ic ? Ic : Zc(Bc.root, rB);
            if (!uc) continue;
            const sc = Math.sign(cB) * cB * cB * 1500 * Vc + this.scrollRemainder[rB],
              Mc = Math.trunc(sc);
            this.scrollRemainder[rB] = sc - Mc, 0 !== Mc && (vB(uc, rB, Mc), this.scrolledInLayer = !0)
          }
        }
      },
      Kr = ["controller:keyboardPhraseGg", "controller:keyboardPhraseHi", "controller:keyboardPhraseThanks", "controller:keyboardPhraseGl", "controller:keyboardPhraseBrb", "controller:keyboardPhraseYes", "controller:keyboardPhraseNo", "controller:keyboardPhraseHelp"];
    const xu = new class {
        constructor() {
          this.lastSendMs = -1 / 0
        }
        claim(cB) {
          return !(cB - this.lastSendMs < 2e3) && (this.lastSendMs = cB, !0)
        }
      },
      dr = {
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
      Ar = ["Hk", "nameTag"],
      Gr = cB => {
        const Bc = cB.target instanceof HTMLTextAreaElement && !Ar.includes(cB.kind);
        return jI(cB.page, "chat" === cB.kind ? Kr.length : 0, Bc)
      },
      cs = cB => {
        const Bc = cB.getBoundingClientRect(),
          nc = window.innerHeight,
          Vc = Bc.top + Bc.height / 2 < nc / 2 ? "bottom" : "top",
          Ic = "bottom" === Vc ? nc - Bc.bottom - 6 : Bc.top - 6;
        return {
          placement: Vc,
          maxHeightPx: Math.min(.46 * nc, Math.max(.3 * nc, Ic))
        }
      },
      Bu = cB => {
        (0, BI.f)(cB) ? (0, BI.b)().close(): (iu.noteChosenStop(cB), cB.blur())
      };
    class nu {
      constructor(cB) {
        this.host = cB, this.lastShiftPressMs = -1 / 0, this.phraseTexts = [], this.phrasesFill = !1
      }
      setPhraseRow(cB, Bc) {
        this.phraseTexts = cB, this.phrasesFill = Bc
      }
      pressKey(cB) {
        const Bc = this.host.getState(),
          nc = Gr(Bc),
          Vc = nc[cB.row][cB.col];
        this.host.setState({
          ...Bc,
          focus: cB,
          preferredX: KV(nc, cB)
        }), "char" === Vc.type ? this.typeChar(Vc.char) : "command" === Vc.type ? this.runCommand(Vc.command) : this.sendPhrase(Vc.phraseIndex)
      }
      runCommand(cB) {
        const Bc = this.host.getState();
        switch (cB) {
          case "backspace":
            rn(Bc.target);
            break;
          case "space":
            IB(Bc.target, " ");
            break;
          case "newline":
            IB(Bc.target, "\n");
            break;
          case "caretLeft":
            uB(Bc.target, -1);
            break;
          case "caretRight":
            uB(Bc.target, 1);
            break;
          case "shift": {
            const cB = performance.now();
            this.host.setState({
              ...Bc,
              shift: AV(Bc.shift, cB, this.lastShiftPressMs)
            }), this.lastShiftPressMs = cB;
            break
          }
          case "page":
          case "otherPage": {
            const nc = JV(Bc.page, Bc.accentsFirst)[cB];
            this.host.setState({
              ...Bc,
              page: nc,
              focus: dV(Gr({
                ...Bc,
                page: nc
              }), Bc.focus)
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
            (0, BI.f)(Bc.target) && (0, BI.b)().selectNextChannel()
        }
      }
      submit() {
        var cB, Bc;
        const {
          target: nc
        } = this.host.getState();
        this.host.hide(), (0, BI.f)(nc) ? (0, BI.b)().submit() : (iu.noteChosenStop(nc), null === (cB = (Bc = (0, BI.e)(nc)).submit) || void 0 === cB || cB.call(Bc), document.activeElement === nc && nc.blur())
      }
      close() {
        const {
          target: cB
        } = this.host.getState();
        this.host.hide(), Bu(cB)
      }
      typeChar(cB) {
        const {
          target: Bc,
          page: nc,
          shift: Vc
        } = this.host.getState();
        IB(Bc, cr(cB, nc, Vc)), this.host.setState({
          ...this.host.getState(),
          shift: GV(Vc, cB)
        })
      }
      sendPhrase(cB) {
        if (this.phrasesFill) {
          const {
            target: Bc
          } = this.host.getState(), nc = this.phraseTexts[cB];
          nc && (Bc.setSelectionRange(0, Bc.value.length), IB(Bc, nc))
        } else xu.claim(performance.now()) && (this.host.hide(), (0, BI.b)().sendLine(this.phraseTexts[cB]))
      }
    }
    const Vu = {
        initialDelayMs: 380,
        intervalMs: 85
      },
      Iu = {
        initialDelayMs: 400,
        intervalMs: 55
      };
    class rs {
      constructor(cB, Bc) {
        this.host = cB, this.editor = Bc, this.lastDirection = null, this.navRepeat = new mB.d((0, ec.c)(Vu)), this.commandRepeats = new Map(NV.filter((cB => {
          let {
            repeats: Bc
          } = cB;
          return Bc
        })).map((cB => {
          let {
            command: Bc
          } = cB;
          return [Bc, (0, ec.c)(Iu)]
        })))
      }
      reset() {
        this.navRepeat.reset();
        for (const cB of this.commandRepeats.values()) cB.reset()
      }
      onVisibleFrame(cB) {
        const Bc = performance.now();
        for (const {
            command: Ic,
            action: rB
          }
          of NV) {
          const nc = (0, qB.g)(rB),
            Vc = this.commandRepeats.get(Ic);
          if ((Vc ? Vc.update(cB.isHeld(nc), Bc) : cB.wasPressed(nc)) && (this.editor.runCommand(Ic), !this.host.getState().visible)) return
        }
        if (cB.wasPressed((0, qB.g)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
        const nc = this.readNavDirection(cB);
        this.lastDirection = nc;
        const Vc = this.navRepeat.update(nc, Bc);
        Vc && this.navigate(Vc)
      }
      onHiddenFrame(cB, Bc) {
        var nc;
        if (cB.wasPressed((0, qB.g)("keyboardClose"))) return void Bu(Bc);
        const Vc = (0, qB.g)("keyboardType");
        if (cB.wasPressed(Vc)) return Oc.e.consumeButton(Vc), void this.host.open(Bc);
        const Ic = this.readNavDirection(cB),
          rB = null !== Ic && Ic !== this.lastDirection;
        if (this.lastDirection = Ic, !rB || (0, BI.f)(Bc)) return;
        const uc = (null === (nc = ru()) || void 0 === nc ? void 0 : nc.root.contains(Bc)) || null !== Bc.closest(".EntireInventoryWrapper");
        Bu(Bc), uc && Oc.e.handOffHeldInput()
      }
      navigate(cB) {
        const Bc = this.host.getState();
        if ("Up" === cB && 0 === Bc.focus.row && "chat" === Bc.kind) return (0, BI.b)().stepHistory(), void this.host.setState({
          ...Bc
        });
        const nc = ((cB, Bc, nc, Vc) => {
          if ("Left" === nc || "Right" === nc) {
            const Vc = cB[Bc.row].length,
              Ic = (Bc.col + ("Right" === nc ? 1 : -1) + Vc) % Vc,
              rB = {
                row: Bc.row,
                col: Ic
              };
            return {
              pos: rB,
              preferredX: KV(cB, rB)
            }
          }
          const Ic = (Bc.row + ("Down" === nc ? 1 : -1) + cB.length) % cB.length;
          return {
            pos: {
              row: Ic,
              col: xI(cB, Ic, Vc)
            },
            preferredX: Vc
          }
        })(Gr(Bc), Bc.focus, cB, Bc.preferredX);
        this.host.setState({
          ...Bc,
          focus: nc.pos,
          preferredX: nc.preferredX
        })
      }
      readNavDirection(cB) {
        for (const Bc of mB.L)
          if (cB.isHeld(Bc)) return Bc;
        return (0, mB.vb)((0, mB.p)(cB.leftStick, (0, Tc.k)().moveDeadzone))
      }
    }
    const uu = ["Up", "Down", "Left", "Right"],
      su = new Set(["CapsLock", "Control", "Fn", "FnLock", "Hyper", "NumLock", "ScrollLock", "Shift", "Super"]);
    const Mu = new class {
      constructor() {
        this.state = dr, this.listeners = new Set, this.ownedField = null, this.pendingChatInput = null, this.pendingChatTimeout = 0, this.savedInputMode = null, this.editor = new nu(this), this.padInput = new rs(this, this.editor)
      }
      getState() {
        return this.state
      }
      setState(cB) {
        const Bc = cB.visible !== this.state.visible;
        this.state = cB;
        for (const nc of this.listeners) nc();
        Bc && Pc.i.Vu(Jc.d, cB.visible)
      }
      subscribe(cB) {
        return this.listeners.add(cB), () => {
          this.listeners.delete(cB)
        }
      }
      install() {
        const cB = Oc.e.register({
            name: "keyboard",
            isActive: () => this.state.visible || Ac(document.activeElement),
            onFrame: cB => {
              this.onFrame(cB)
            },
            onDeactivate: () => {
              this.padInput.reset()
            },
            wakePressActs: cB => uu.includes(cB) || !this.state.visible && cB === (0, qB.g)("keyboardType")
          }),
          Bc = cB => {
            const Bc = cB.target;
            Ac(Bc) && (Bc === this.pendingChatInput || (0, fc.k)() ? this.open(Bc) : this.state.visible && Bc !== this.state.target && (this.ownedField = null, this.hide()))
          },
          nc = () => {
            setTimeout((() => {
              this.releaseLostField()
            }), 0)
          },
          Vc = cB => {
            cB.isTrusted && this.state.visible && (cB => !cB.repeat && !su.has(cB.key) && !(0, nI.d)(cB.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(cB.key))(cB) && this.hide()
          },
          Ic = () => {
            this.state.visible && this.setState({
              ...this.state,
              ...cs(this.state.target)
            })
          };
        document.addEventListener("focusin", Bc, !0), document.addEventListener("focusout", nc, !0), window.addEventListener("keydown", Vc, !0), window.addEventListener("resize", Ic);
        const rB = Pc.i.subscribe(aI.e, (() => {
            this.openChat()
          })),
          uc = Pc.i.subscribe(Jc.h, (cB => {
            this.openForField(cB)
          }));
        return () => {
          cB(), document.removeEventListener("focusin", Bc, !0), document.removeEventListener("focusout", nc, !0), window.removeEventListener("keydown", Vc, !0), window.removeEventListener("resize", Ic), Pc.i.unsubscribe(rB), Pc.i.unsubscribe(uc), this.clearPendingChat(), this.hide(), this.ownedField = null
        }
      }
      openChat() {
        const cB = (0, BI.b)();
        cB ? document.activeElement !== cB.input ? (this.clearPendingChat(), this.pendingChatInput = cB.input, this.pendingChatTimeout = window.setTimeout((() => {
          this.pendingChatInput = null
        }), 250), cB.open()) : this.open(cB.input) : console.warn("controllerOpenChat with no chat mounted")
      }
      openForField(cB) {
        Ac(cB) ? (document.activeElement !== cB && cB.focus(), document.activeElement === cB && this.open(cB)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", cB)
      }
      open(cB) {
        var Bc;
        if (this.clearPendingChat(), this.ownedField = cB, this.state.visible && this.state.target === cB) return;
        this.restoreInputMode(), (cB => {
          Gc(cB) && 0 === cB.selectionStart && 0 === cB.selectionEnd && cB.setSelectionRange(cB.value.length, cB.value.length)
        })(cB), this.savedInputMode = cB.getAttribute("inputmode"), cB.setAttribute("inputmode", "none");
        const nc = {
          ...dr,
          visible: !0,
          target: cB,
          kind: (0, BI.f)(cB) ? "chat" : null !== (Bc = (0, BI.e)(cB).kind) && void 0 !== Bc ? Bc : null,
          accentsFirst: (Vc = PV.e.get().getCurrentLanguageCode(), FV.has(Vc)),
          ...cs(cB)
        };
        var Vc;
        const Ic = Gr(nc),
          rB = ((cB, Bc) => {
            for (let nc = 0; nc < cB.length; nc++) {
              const Vc = cB[nc].findIndex((cB => "char" === cB.type && cB.char === Bc));
              if (-1 !== Vc) return {
                row: nc,
                col: Vc
              }
            }
            return null
          })(Ic, "q");
        this.padInput.reset(), this.setState({
          ...nc,
          focus: rB,
          preferredX: KV(Ic, rB)
        })
      }
      hide() {
        this.state.visible && (this.restoreInputMode(), this.padInput.reset(), this.setState(dr))
      }
      onFrame(cB) {
        if (this.releaseLostField()) return;
        const Bc = document.activeElement;
        this.state.visible ? this.padInput.onVisibleFrame(cB) : Ac(Bc) && this.padInput.onHiddenFrame(cB, Bc)
      }
      releaseLostField() {
        const cB = this.ownedField;
        return !(null === cB || cB.isConnected && document.activeElement === cB) && (this.ownedField = null, this.hide(), !0)
      }
      clearPendingChat() {
        window.clearTimeout(this.pendingChatTimeout), this.pendingChatInput = null
      }
      restoreInputMode() {
        const {
          target: cB
        } = this.state;
        cB && (null === this.savedInputMode ? cB.removeAttribute("inputmode") : cB.setAttribute("inputmode", this.savedInputMode), this.savedInputMode = null)
      }
    };
    var Pu = nc(7689);
    const qs = new Map(NV.map((cB => {
        let {
          command: Bc,
          action: nc
        } = cB;
        return [Bc, nc]
      }))),
      Ou = {
        letters: "ABC",
        accents: "\xe0\xe9",
        symbols: "&123"
      },
      Tu = {
        chat: "controller:keyboardTargetChat",
        sign: "controller:keyboardTargetSign",
        nameTag: "controller:keyboardTargetNameTag",
        book: "controller:keyboardTargetBook",
        Hk: "controller:keyboardTargetBookTitle"
      },
      fu = cB => {
        const Bc = (() => {
          const [, cB] = (0, Ec.useReducer)((cB => cB + 1), 0);
          return cB
        })();
        (0, Ec.useEffect)((() => {
          if (!cB) return;
          const nc = ["input", "select", "selectionchange", "keyup", "pointerup"];
          for (const Ic of nc) cB.addEventListener(Ic, Bc);
          document.addEventListener("selectionchange", Bc);
          const Vc = new MutationObserver(Bc);
          return Vc.observe(cB, {
            attributeFilter: ["placeholder"]
          }), () => {
            Vc.disconnect();
            for (const Vc of nc) cB.removeEventListener(Vc, Bc);
            document.removeEventListener("selectionchange", Bc)
          }
        }), [cB, Bc])
      },
      ms = cB => {
        cB.preventDefault()
      },
      eu = cB => {
        "mouse" !== cB.pointerType && cB.preventDefault()
      },
      ts = () => {
        var cB;
        const {
          t: Bc
        } = (0, Ic.x)(), nc = (() => {
          const [cB, Bc] = (0, Ec.useState)(Mu.getState());
          return (0, Ec.useEffect)((() => Mu.subscribe((() => {
            Bc(Mu.getState())
          }))), []), cB
        })(), Vc = (0, fc.B)(), rB = (0, Ec.useRef)(null);
        (0, Tc.s)(), (0, fc.E)(), (0, Ec.useEffect)((() => {
          const cB = Mu.install(),
            Bc = null;
          return () => {
            cB(), null === Bc || void 0 === Bc || Bc()
          }
        }), []);
        const uc = (0, Ec.useMemo)((() => Kr.map((cB => Bc(cB)))), [Bc]),
          sc = nc.visible && "chat" === nc.kind ? nc.target : null;
        fu(sc);
        const Mc = null !== (cB = null === sc || void 0 === sc ? void 0 : sc.value) && void 0 !== cB ? cB : "",
          Pc = ((cB, Bc, nc) => {
            if (!cB.startsWith("/")) return [];
            const Vc = [];
            for (let Ic = Bc.length - 1; Ic >= 0 && Vc.length < nc; Ic--) {
              const nc = Bc[Ic].trim();
              nc.startsWith(cB) && nc !== cB && !Vc.includes(nc) && Vc.push(nc)
            }
            return Vc
          })(Mc, Mc.startsWith("/") ? (0, Pu.g)() : [], Kr.length),
          Oc = Mc.startsWith("/"),
          mB = Oc ? Kr.map(((cB, Bc) => {
            var nc;
            return null !== (nc = Pc[Bc]) && void 0 !== nc ? nc : ""
          })) : uc;
        if ((0, Ec.useEffect)((() => {
            Mu.editor.setPhraseRow(mB, Oc)
          })), (0, Ec.useEffect)((() => {
            const cB = rB.current;
            if (cB) return cB.addEventListener("touchstart", ms, {
              passive: !1
            }), () => {
              cB.removeEventListener("touchstart", ms)
            }
          }), [nc.visible]), !nc.visible) return null;
        const ec = Gr(nc),
          tB = iI(ec),
          Sc = cB => "char" === cB.type ? cr(cB.char, nc.page, nc.shift) : "phrase" === cB.type ? mB[cB.phraseIndex] : (cB => {
            switch (cB) {
              case "backspace":
                return "\u232b";
              case "shift":
                return "caps" === nc.shift ? "\u21ea" : "\u21e7";
              case "page":
              case "otherPage":
                return Ou[JV(nc.page, nc.accentsFirst)[cB]];
              case "space":
                return Bc("controller:keyboardSpace");
              case "caretLeft":
                return "\u2190";
              case "caretRight":
                return "\u2192";
              case "newline":
                return "\u21b5";
              case "submit":
                return Bc("chat" === nc.kind ? "controller:keyboardSend" : "controller:keyboardDone");
              case "close":
                return "\u2715";
              case "channel":
                return "\u21c4"
            }
          })(cB.command),
          yB = cB => {
            Mu.editor.pressKey(cB)
          };
        return (0, wc.jsxs)("div", {
          ref: rB,
          className: Wc()(BI.m, "top" === nc.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
            PadKeyboardMultiline: nc.target instanceof HTMLTextAreaElement
          }),
          style: {
            "--pad-keyboard-rows": ec.length,
            "--pad-keyboard-height": `${nc.maxHeightPx}px`
          },
          onPointerDown: eu,
          onMouseDown: ms,
          children: [(0, wc.jsx)(Su, {
            target: nc.target,
            label: nc.kind ? Bc(Tu[nc.kind]) : nc.target.placeholder || Bc("controller:keyboardTargetText")
          }), (0, wc.jsx)("div", {
            className: "PadKeyboardRows",
            children: ec.map(((cB, Bc) => (0, wc.jsx)("div", {
              className: Wc()("PadKeyboardRow", {
                PadKeyboardPhraseRow: "phrase" === cB[0].type
              }),
              children: cB.map(((cB, Ic) => {
                const rB = Vc && nc.focus.row === Bc && nc.focus.col === Ic,
                  uc = "command" === cB.type ? qs.get(cB.command) : void 0;
                return (0, wc.jsx)("div", {
                  className: "PadKeyboardKeySlot",
                  style: {
                    width: cB.width / tB * 100 + "%"
                  },
                  children: (0, wc.jsxs)("div", {
                    className: Wc()("PadKeyboardKey", {
                      PadKeyboardKeyFocused: rB,
                      PadKeyboardKeyCommand: "command" === cB.type,
                      PadKeyboardKeyPhrase: "phrase" === cB.type,
                      PadKeyboardKeyActive: "command" === cB.type && "shift" === cB.command && "off" !== nc.shift,
                      PadKeyboardKeySubmit: "command" === cB.type && "submit" === cB.command
                    }),
                    role: "button",
                    onClick: () => {
                      yB({
                        row: Bc,
                        col: Ic
                      })
                    },
                    onTouchEnd: cB => {
                      var nc, Vc;
                      cB.preventDefault(), nc = cB.changedTouches[0], Vc = cB.currentTarget.getBoundingClientRect(), nc && nc.clientX >= Vc.left && nc.clientX <= Vc.right && nc.clientY >= Vc.top && nc.clientY <= Vc.bottom && yB({
                        row: Bc,
                        col: Ic
                      })
                    },
                    children: [(0, wc.jsx)("span", {
                      className: "PadKeyboardKeyLabel",
                      children: Sc(cB)
                    }), Vc && uc && (0, wc.jsx)(mI, {
                      className: "PadKeyboardKeyGlyph",
                      glyph: (0, qB.g)(uc)
                    })]
                  })
                }, Ic)
              }))
            }, Bc)))
          })]
        })
      },
      Su = cB => {
        let {
          target: Bc,
          label: nc
        } = cB;
        fu(Bc);
        const Vc = (0, Ec.useRef)(null),
          Ic = (0, Ec.useRef)(null),
          rB = Bc instanceof HTMLTextAreaElement;
        (0, Ec.useLayoutEffect)((() => {
          const cB = Vc.current,
            Bc = Ic.current;
          rB ? cB.scrollTop = Bc.offsetTop - cB.clientHeight / 2 : cB.scrollLeft = Bc.offsetLeft - cB.clientWidth / 2
        }));
        const {
          value: uc,
          start: sc,
          end: Mc
        } = cn(Bc), Pc = "password" === Bc.type ? "\u2022".repeat(uc.length) : uc;
        return (0, wc.jsxs)("div", {
          className: "PadKeyboardPreview",
          children: [(0, wc.jsx)("div", {
            className: "PadKeyboardPreviewLabel SmallTextBold",
            children: nc
          }), (0, wc.jsxs)("div", {
            ref: Vc,
            className: Wc()("PadKeyboardPreviewText", {
              PadKeyboardPreviewMultiline: rB
            }),
            children: [(0, wc.jsx)("span", {
              children: Pc.slice(0, sc)
            }), (0, wc.jsx)("span", {
              ref: Ic,
              className: "PadKeyboardCaret"
            }), sc !== Mc && (0, wc.jsx)("span", {
              className: "PadKeyboardPreviewSelection",
              children: Pc.slice(sc, Mc)
            }), (0, wc.jsx)("span", {
              children: Pc.slice(Mc)
            }), 0 === Pc.length && Bc.placeholder && Bc.placeholder !== nc && (0, wc.jsx)("span", {
              className: "PadKeyboardPreviewPlaceholder",
              children: Bc.placeholder
            })]
          })]
        })
      };
    var ys = nc(1226),
      zs = nc(2608);
    const pu = function() {
        for (var cB = arguments.length, Bc = new Array(cB), nc = 0; nc < cB; nc++) Bc[nc] = arguments[nc];
        return Bc.map(qB.g)
      },
      hu = (cB, Bc) => {
        const nc = wI(cB);
        return nc ? [{
          glyphs: [nc],
          labelKey: Bc
        }] : []
      },
      as = [".BottomMiddleElements", ".BottomLeftElements > *", ".BottomRightElements > *", ".MiddleTextBottom .MiddleText"],
      lu = "--pad-hint-bar-clearance",
      Yu = "[data-pad-hint-bar-avoid]",
      Lu = cB => {
        const Bc = [];
        for (const nc of cB) PB(nc) && Bc.push(nc.getBoundingClientRect());
        return Bc
      },
      gs = cB => {
        if (!cB) return null;
        const Bc = ru(),
          nc = Bc ? Lu(((cB, Bc) => {
            const nc = cB.closest(Yu);
            return nc ? [nc] : ("popup" === Bc ? document : cB).querySelectorAll(Yu)
          })(Bc.root, Bc.layer.kind)) : [],
          Vc = !Bc || Bc.root.hasAttribute("data-pad-shows-hud");
        if (((0, zs.g)(null === Bc || void 0 === Bc ? void 0 : Bc.layer.kind, (0, zs.k)()) || Vc) && nc.push(...Lu(document.querySelectorAll(as.join(",")))), 0 === nc.length) return null;
        const {
          width: Ic,
          height: rB
        } = cB.getBoundingClientRect(), uc = window.innerHeight - 8, sc = (0, zs.q)(uc, {
          width: Ic,
          height: rB
        }, window.innerWidth / 2, nc, 8);
        return sc === uc ? null : Math.round(window.innerHeight - sc)
      },
      Uu = cB => {
        const Bc = document.documentElement.style,
          nc = cB ? `${Math.round(window.innerHeight-cB.getBoundingClientRect().top)}px` : "";
        Bc.getPropertyValue(lu) !== nc && (nc ? Bc.setProperty(lu, nc) : Bc.removeProperty(lu))
      },
      bs = () => {
        const {
          t: cB
        } = (0, Ic.x)(), {
          hideButtonHints: Bc
        } = (0, Tc.s)(), nc = (0, fc.B)(), [Vc, rB] = (0, Ec.useState)(!1), [uc, Pc] = (0, Ec.useState)([]), [ec, tB] = (0, Ec.useState)(null), Sc = (0, Ec.useRef)(null), yB = (0, Ec.useRef)(null);
        (0, MV.f)(Jc.d, (cB => {
          rB(cB)
        })), (0, MV.f)(zs.n, (() => {
          var cB;
          null === (cB = yB.current) || void 0 === cB || cB.call(yB)
        }));
        const zB = nc && !Bc && !Vc;
        return (0, Ec.useEffect)((() => {
          if (!zB) return;
          let cB = null;
          const Bc = () => {
            const Bc = (() => {
                var cB;
                const Bc = Oc.e.getActiveConsumerName(),
                  nc = (0, zs.c)();
                if (nc) {
                  const cB = (0, qB.g)(nc),
                    Bc = "emoteWheel" === nc && "wheel" === (0, Tc.k)().emoteButton || !(0, mB.V)(Oc.e.getLastFrame().values, cB) ? {
                      glyphs: pu("menuConfirm"),
                      labelKey: "controller:menusSelect"
                    } : {
                      glyphs: [cB],
                      labelKey: "controller:wheelReleaseToPick"
                    };
                  return [{
                    glyphs: [(0, qB.A)(cB)],
                    labelKey: "controller:wheelChoose"
                  }, Bc, {
                    glyphs: pu("menuBack"),
                    labelKey: "controller:wheelClose"
                  }]
                }
                const Vc = ru();
                if (!Vc || "focus" !== Bc && "cursor" !== Bc) return (0, zs.b)(qB.g);
                const Ic = [],
                  rB = {
                    glyphs: pu("menuBack"),
                    labelKey: "controller:menusBack"
                  },
                  uc = EB(Vc.root),
                  sc = uc ? !qn(uc) : Boolean(Vc.layer.close),
                  Pc = !uc && Vc.layer.closeLabelKey ? Vc.layer.closeLabelKey : rB.labelKey,
                  fc = sc ? [{
                    ...rB,
                    labelKey: Pc
                  }] : [],
                  ec = gr(Vc.layer.kind) ? [{
                    glyphs: pu("chat"),
                    labelKey: "controller:menusQuickChat"
                  }] : [];
                if ("cursor" === Bc) return Ic.push({
                  glyphs: pu("menuConfirm"),
                  labelKey: "controller:menusClick"
                }), Ic.push({
                  glyphs: pu("menuSecondary"),
                  labelKey: "controller:menusRightClick"
                }), Ic.push(...fc), Ic.push(...ec), Ic.push({
                  glyphs: ["RightStick"],
                  labelKey: "controller:menusScroll"
                }), pr() && Ic.push({
                  glyphs: pu("menuToggleCursor"),
                  labelKey: "controller:menusFocusMode"
                }), Ic;
                const tB = iu.getFocused();
                tB && (0, Yr.e)(tB) ? Ic.push({
                  glyphs: ["Left", "Right"],
                  labelKey: "controller:menusAdjust"
                }) : tB && DB(tB) ? Ic.push({
                  glyphs: [],
                  labelKey: "controller:menusUseMouse"
                }) : Ic.push({
                  glyphs: pu("menuConfirm"),
                  labelKey: "controller:menusSelect"
                });
                const Sc = tB ? null === (cB = PI(tB)) || void 0 === cB ? void 0 : cB.dataset.padSecondary : void 0;
                Sc && Ic.push({
                  glyphs: pu("menuSecondary"),
                  labelKey: Sc
                }), Ic.push(...null !== tB && void 0 !== tB && tB.closest("[data-pad-friends-column]") ? [rB] : fc), Ic.push(...ec);
                const yB = "home" === Vc.layer.kind;
                HI(Vc.root) || !QI(Vc.root) && !FI(Vc) ? yB && Ic.push({
                  glyphs: pu("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusRows"
                }) : Ic.push({
                  glyphs: pu("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusTabs"
                }), yB && (Ic.push(...hu("inventory", "controller:menusFriends")), Sc || Ic.push({
                  glyphs: pu("menuSecondary"),
                  labelKey: "controller:menusSearch"
                }), Ic.push(...hu("pause", "controller:menusSettings")), Ic.push(...hu("leaderboard", "controller:menusNotifications")));
                const zB = Mc.d.get("openEverythingMenuName");
                return "inGame" === Mc.d.get("gameState") && "popup" !== Vc.layer.kind && null !== zB && ((0, rr.l)(zB) ? Ic.push(...hu("leaderboard", "controller:menusClose")) : zB !== II.i.LOBBY_LEADERBOARD && Ic.push(...hu("leaderboard", "controller:menusLobby"))), Ic.push({
                  glyphs: pu("menuToggleCursor"),
                  labelKey: "controller:menusCursorMode"
                }), Ic
              })(),
              nc = gs(Sc.current),
              Vc = ((cB, Bc) => `${cB.map((cB=>`${cB.glyphs.join("+")}:${cB.labelKey}`)).join("|")}@${Bc}`)(Bc, nc);
            Vc !== cB && (cB = Vc, (0, sc.unstable_batchedUpdates)((() => {
              Pc(Bc), tB(nc)
            }))), Uu(Sc.current)
          };
          Bc(), yB.current = Bc;
          const nc = requestAnimationFrame(Bc),
            Vc = setInterval(Bc, 150);
          return () => {
            yB.current = null, cancelAnimationFrame(nc), clearInterval(Vc), Uu(null)
          }
        }), [zB]), (0, Ec.useLayoutEffect)((() => {
          if (!zB) return;
          if (0 === uc.length) return void Uu(null);
          const cB = gs(Sc.current);
          cB === ec ? Uu(Sc.current) : tB(cB)
        }), [zB, uc, ec]), zB && 0 !== uc.length ? (0, wc.jsx)("div", {
          ref: Sc,
          className: "PadButtonHintBar SmallTextBold",
          style: null === ec ? void 0 : {
            bottom: ec
          },
          "aria-hidden": !0,
          children: uc.map((Bc => (0, wc.jsxs)("div", {
            className: "PadButtonHint",
            children: [Bc.glyphs.map((cB => (0, wc.jsx)(mI, {
              glyph: cB,
              className: "PadButtonHintGlyph"
            }, cB))), (0, wc.jsx)("span", {
              children: cB(Bc.labelKey)
            })]
          }, Bc.labelKey)))
        }) : null
      },
      Zu = [sB, "label", "[data-pad-slider]"].join(","),
      Qu = "data-pad-cursor-probe",
      Cu = cB => {
        var Bc;
        const nc = (cB => {
          const Bc = [];
          for (let Vc = cB; Vc && Vc !== document.body && Vc !== document.documentElement && (Bc.push(Vc), !(Bc.length > 8)); Vc = Vc.parentElement);
          const nc = document.documentElement.classList.contains(fc.t) ? Bc[Bc.length - 1] : void 0;
          null === nc || void 0 === nc || nc.setAttribute(Qu, "");
          try {
            return Bc.map((cB => ({
              element: cB,
              cursor: getComputedStyle(cB).cursor
            })))
          } finally {
            null === nc || void 0 === nc || nc.removeAttribute(Qu)
          }
        })(cB);
        if ("pointer" !== (null === (Bc = nc[0]) || void 0 === Bc ? void 0 : Bc.cursor)) return null;
        let Vc = 0;
        for (; Vc + 1 < nc.length && "pointer" === nc[Vc + 1].cursor;) Vc++;
        return nc[Vc].element
      },
      vs = (cB, Bc, nc, Vc) => {
        const Ic = Vc.root.contains(cB) ? Vc.root : null;
        for (let rB = cB; rB && rB !== document.body && rB !== document.documentElement; rB = rB.parentElement) {
          if (rB instanceof HTMLElement && gB(rB, Bc) && Cc(rB, Bc, nc)) return rB;
          if (rB === Ic) break
        }
        return "home" === Vc.layer.kind || "gamePage" === Vc.layer.kind ? ((cB, Bc) => {
          const nc = document.scrollingElement;
          return nc instanceof HTMLElement && ![document.documentElement, document.body].some((Bc => {
            const nc = getComputedStyle(Bc),
              Vc = "y" === cB ? nc.overflowY : nc.overflowX;
            return "hidden" === Vc || "clip" === Vc
          })) && Cc(nc, cB, Bc) ? nc : null
        })(Bc, nc) : null
      };
    const Du = new class {
        constructor() {
          this.state = {
            x: 0,
            y: 0,
            speedRamp: 0
          }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this.confirmRepeat = (0, ec.c)(mB.A), this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.layerRoot = null, this.layerOrder = 0, this.layerPoints = new WeakMap, this.page = null, this.pendingPageStart = null
        }
        install() {
          const cB = Oc.e.register({
              name: "cursor",
              isActive: () => "cursor" === hr(),
              onFrame: cB => {
                this.onFrame(cB)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: cB => (0, Oc.i)(cB) || cB === (0, qB.g)("menuConfirm") && NB((0, fc.e)())
            }),
            Bc = (0, dI.m)((cB => {
              const Bc = cB.getRoot();
              Bc && this.layerPoints.delete(Bc), Bc === this.layerRoot && (this.layerRoot = null)
            })),
            nc = Pc.i.subscribe("appManagerUpdated|activeInputDevice", (cB => {
              "gamepad" !== cB && this.active && !this.hidden && this.hide()
            }));
          return () => {
            cB(), Bc(), Pc.i.unsubscribe(nc), this.deactivate()
          }
        }
        getHighlighted() {
          return this.isVisible() ? this.interactive : null
        }
        isVisible() {
          return this.active && !this.hidden && (0, fc.k)()
        }
        getPoint() {
          return {
            x: this.state.x,
            y: this.state.y
          }
        }
        hide() {
          this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.Vu()
        }
        activate(cB) {
          this.active = !0, this.hidden = !1;
          const Bc = Sr();
          !Bc || Bc.root && Bc.root !== cB.root ? this.jumpTo(this.hasPosition ? this.getPoint() : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          }) : (this.setLayer(cB), this.jumpTo(Bc.point))
        }
        jumpTo(cB) {
          this.state = {
            x: cB.x,
            y: cB.y,
            speedRamp: 0
          }, this.hasPosition = !0, this.lastHitTestMs = -1 / 0
        }
        deactivate() {
          this.active && (this.active = !1, this.page = null, this.pendingPageStart = null, this.cancelPress(), this.clearHover(), this.draggedSlider = null, this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.Vu())
        }
        onFrame(cB) {
          const Bc = ru();
          if (!Bc) return;
          if (this.active || this.activate(Bc), this.followPage(Bc)) return;
          this.followLayer(Bc);
          const nc = cB.wokeDevice ? (0, fc.e)() : null;
          if (nc && this.jumpTo(nc), !(0, fc.k)()) return void this.hide();
          const Vc = (0, qB.g)("menuToggleCursor");
          if (cB.wasPressed(Vc)) return Oc.e.consumeButton(Vc), void tu(this.getHandoff(null));
          if (this.handBackToFocus(cB)) return;
          const Ic = (0, qB.g)("menuConfirm"),
            rB = (0, qB.g)("menuSecondary");
          if (cB.wasPressed((0, qB.g)("menuBack"))) return CB(Bc.root) || oB(Bc.root) || ur(), void this.Vu();
          if (RI(null, cB, Bc)) return cB.wasReleased(Ic) && this.press && (this.updateHit(!1), this.updateConfirm(cB, Ic)), void this.Vu();
          if (document.pointerLockElement) return void this.hide();
          const uc = au() ? {
              x: 0,
              y: 0
            } : (cB => {
              const Bc = (cB, Bc) => (cB ? 1 : 0) - (Bc ? 1 : 0);
              return {
                x: Bc(cB.isHeld("Right"), cB.isHeld("Left")),
                y: Bc(cB.isHeld("Down"), cB.isHeld("Up"))
              }
            })(cB),
            sc = (0, Tc.k)().moveDeadzone,
            Mc = ((cB, Bc) => {
              const nc = (0, mB.p)(cB, pc(Bc));
              return Math.hypot(nc.x, nc.y)
            })(cB.leftStick, sc) > 0 || 0 !== uc.x || 0 !== uc.y;
          if (this.hidden) {
            const Bc = cB.wasPressed(Ic),
              nc = cB.wasPressed(rB);
            if (!Mc && !lc(cB.rightStick) && !Bc && !nc && !cB.wokeDevice) return void this.Vu();
            if (this.hidden = !1, this.updateHit(!1), Bc || nc) return Bc && (this.press = {
              kind: "ignored"
            }, cB.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.Vu()
          }
          this.movePendingPageStart(Mc);
          const Pc = this.getPoint();
          this.state = aB(this.state, {
            stick: cB.leftStick,
            moveDeadzone: sc,
            dpad: uc,
            dtMs: cB.dtMs,
            cursorSpeedPercent: (0, Tc.k)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: this.getAssistContext()
          });
          const ec = this.state.x !== Pc.x || this.state.y !== Pc.y,
            tB = [Ic, rB].some((Bc => cB.wasPressed(Bc) || cB.wasReleased(Bc)));
          (ec || tB || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(ec), this.updateConfirm(cB, Ic), this.updateSecondary(cB, rB), this.updateScroll(cB, Bc), this.Vu()
        }
        followPage(cB) {
          const Bc = "home" === cB.layer.kind || "gamePage" === cB.layer.kind,
            nc = this.page;
          if (this.page = Bc ? {
              key: (0, dI.s)(cB.layer),
              root: cB.root
            } : null, !this.page || !nc || nc.root !== cB.root || nc.key === this.page.key) return !1;
          if (this.cancelPress(), this.secondaryArmed = !1, this.setLayer(cB), "hybrid" === er()) return Tr = null, qu = null, fr.lock(), !0;
          const {
            key: Vc
          } = this.page;
          return this.pendingPageStart = {
            root: cB.root,
            key: Vc,
            returning: iu.notePageEnteredByCursor(Vc),
            enteredAtMs: performance.now()
          }, !1
        }
        movePendingPageStart(cB) {
          const Bc = this.pendingPageStart;
          if (!Bc) return;
          if (cB || Bc.root !== this.layerRoot) return void(this.pendingPageStart = null);
          const nc = Bc.returning ? iu.recallStop(Bc.root, Bc.key) : null;
          if (!nc && Bc.returning && performance.now() - Bc.enteredAtMs < 1e3) return;
          const Vc = null !== nc && void 0 !== nc ? nc : iu.pickInitial(Bc.root, {
            includeDisabled: !0,
            waitForContent: !0,
            enteredAtMs: Bc.enteredAtMs
          });
          Vc && (this.pendingPageStart = null, this.jumpTo(pB(Vc)))
        }
        setLayer(cB) {
          this.layerRoot = cB.root, this.layerOrder = cB.order
        }
        followLayer(cB) {
          var Bc;
          if (cB.root === this.layerRoot) return;
          null !== (Bc = this.layerRoot) && void 0 !== Bc && Bc.isConnected && this.layerPoints.set(this.layerRoot, this.getPoint()), this.cancelPress(), this.draggedSlider = null, this.secondaryArmed = !1;
          const nc = this.layerPoints.get(cB.root),
            Vc = nc && cB.order <= this.layerOrder ? nc : iu.getLayerStartPoint(cB.root);
          this.setLayer(cB), this.jumpTo(Vc)
        }
        getHandoff(cB) {
          var Bc;
          return {
            point: this.getPoint(),
            element: null !== (Bc = this.interactive) && void 0 !== Bc ? Bc : this.findDraggedSliderNearby(),
            direction: cB
          }
        }
        findDraggedSliderNearby() {
          const cB = this.draggedSlider;
          if (null === cB || void 0 === cB || !cB.isConnected) return null;
          const Bc = cB.getBoundingClientRect(),
            {
              y: nc
            } = this.getPoint();
          return nc >= Bc.top - 40 && nc <= Bc.bottom + 40 ? cB : null
        }
        handBackToFocus(cB) {
          if (!au()) return !1;
          const Bc = mB.L.find((Bc => cB.wasPressed(Bc)));
          return !!Bc && (nc = this.getHandoff(Bc), Tr = Mr(nc), qu = null, fr.lock(), Oc.e.handOffHeldInput(), !0);
          var nc
        }
        getAssistContext() {
          const cB = this.interactive;
          if (null === cB || void 0 === cB || !cB.isConnected) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const Bc = cB.getBoundingClientRect();
          if (Bc.width > .4 * window.innerWidth || Bc.height > .4 * window.innerHeight) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const nc = (0, Tc.k)().cursorMagnetism && !(0, jB.d)(cB) && !cB.closest("[data-pad-slider]"),
            Vc = this.magnet && this.magnet !== cB && this.magnet.isConnected ? this.magnet.getBoundingClientRect() : Bc;
          return {
            overInteractive: !0,
            magnetTarget: nc ? {
              x: Vc.left + Vc.width / 2,
              y: Vc.top + Vc.height / 2
            } : null
          }
        }
        updateHit(cB) {
          this.lastHitTestMs = performance.now();
          const Bc = this.getPoint(),
            nc = document.elementFromPoint(Bc.x, Bc.y),
            Vc = nc && !(0, Sc.o)(nc) && (cB => {
              var Bc;
              const nc = ru();
              return !(nc && !nc.root.contains(cB) && !cB.closest(".tooltip-container")) || !(null !== (Bc = document.getElementById("root")) && void 0 !== Bc && Bc.contains(cB))
            })(nc) ? nc : null;
          if (Vc !== this.hit) return gn(this.hit, Vc, Bc), this.hit = Vc, void this.setInteractive(Vc ? (cB => {
            const Bc = cB.closest(Zu);
            if (Bc) {
              var nc, Vc;
              const cB = null !== (nc = null === (Vc = Bc.parentElement) || void 0 === Vc ? void 0 : Vc.closest("[data-pad-focusable]")) && void 0 !== nc ? nc : Bc;
              return qn(cB) ? {
                element: null,
                magnet: null
              } : {
                element: cB,
                magnet: Bc
              }
            }
            const Ic = Cu(cB);
            return {
              element: Ic,
              magnet: Ic
            }
          })(Vc) : {
            element: null,
            magnet: null
          });
          cB && Vc && gn(Vc, Vc, Bc)
        }
        setInteractive(cB) {
          let {
            element: Bc,
            magnet: nc
          } = cB;
          this.interactive = Bc, this.magnet = nc
        }
        clearHover() {
          this.hit && gn(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
            element: null,
            magnet: null
          })
        }
        beginPress() {
          const cB = this.hit;
          if (!cB || DB(cB)) return {
            kind: "ignored"
          };
          const Bc = (0, Yr.e)(cB),
            nc = cB.closest("[data-pad-slider]");
          return Bc && nc ? {
            kind: "slider",
            slider: nc,
            adjuster: Bc
          } : (lB(cB, this.getPoint()), {
            kind: "pointer",
            target: cB
          })
        }
        applySliderFraction(cB) {
          var Bc;
          const nc = cB.slider.getBoundingClientRect(),
            Vc = nc.height > nc.width,
            Ic = null === (Bc = cB.slider.querySelector("[data-pad-slider-handle]")) || void 0 === Bc ? void 0 : Bc.getBoundingClientRect(),
            rB = Ic ? Vc ? Ic.height : Ic.width : 0,
            uc = (Vc ? nc.height : nc.width) - rB;
          if (uc <= 0) return;
          const sc = Vc ? nc.bottom - rB / 2 - this.state.y : this.state.x - nc.left - rB / 2;
          cB.adjuster.setFraction(Math.max(0, Math.min(1, sc / uc)))
        }
        updateConfirm(cB, Bc) {
          cB.wasPressed(Bc) && (this.press = cB.wokeDevice ? {
            kind: "ignored"
          } : this.beginPress(), this.draggedSlider = "slider" === this.press.kind ? this.press.slider : null, this.beginRepeat());
          const nc = this.press;
          if (!nc) return;
          if (cB.isHeld(Bc)) return "slider" === nc.kind && this.applySliderFraction(nc), void this.updateRepeat();
          this.press = null;
          const Vc = this.repeated;
          if (this.endRepeat(), !cB.wasReleased(Bc)) return void this.endPressWithoutClick(nc);
          const Ic = this.getPoint(),
            rB = this.hit;
          if ("slider" === nc.kind && nc.adjuster.endDrag(), "pointer" === nc.kind) {
            const cB = null !== rB && void 0 !== rB ? rB : nc.target.isConnected ? nc.target : null;
            cB && YB(cB, Ic);
            const Bc = rB && nc.target.isConnected && !Vc ? ((cB, Bc) => {
              for (let nc = cB; nc; nc = nc.parentElement)
                if (nc.contains(Bc)) return nc;
              return null
            })(nc.target, rB) : null;
            Bc && (iu.noteCursorActivation(Bc), (0, Sc.f)(Bc, new MouseEvent("click", hB(Ic, 0, 0))), vn(Bc), zn(Bc) && UB(Bc))
          }
        }
        beginRepeat() {
          var cB, Bc, nc;
          const Vc = null !== (cB = null === (Bc = this.hit) || void 0 === Bc ? void 0 : Bc.closest("[data-pad-repeat]")) && void 0 !== cB ? cB : null;
          this.repeatStop = Vc, this.repeatKey = null !== (nc = null === Vc || void 0 === Vc ? void 0 : Vc.getAttribute("data-pad-repeat")) && void 0 !== nc ? nc : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
        }
        updateRepeat() {
          const cB = this.repeatStop;
          if (!cB) return;
          const Bc = this.hit;
          cB.isConnected && !qn(cB) && cB.getAttribute("data-pad-repeat") === this.repeatKey && Bc && cB.contains(Bc) ? cB.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, iu.noteCursorActivation(cB), (0, Sc.f)(cB, new MouseEvent("click", hB(this.getPoint(), 0, 0)))) : this.repeatStop = null
        }
        endRepeat() {
          this.repeatStop = null, this.repeated = !1
        }
        endPressWithoutClick(cB) {
          "slider" === cB.kind && cB.adjuster.endDrag(), "pointer" === cB.kind && cB.target.isConnected && YB(cB.target, this.getPoint())
        }
        cancelPress() {
          this.endRepeat(), this.press && (this.endPressWithoutClick(this.press), this.press = null)
        }
        updateSecondary(cB, Bc) {
          cB.wasPressed(Bc) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !cB.isHeld(Bc) && (this.secondaryArmed = !1, cB.wasReleased(Bc) && this.hit && LB(this.hit, this.getPoint(), 2))
        }
        updateScroll(cB, Bc) {
          const nc = Yc(cB.rightStick, cB.dtMs);
          if (0 === nc.x && 0 === nc.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          this.scrollRemainder = {
            x: this.scrollRemainder.x + nc.x,
            y: this.scrollRemainder.y + nc.y
          };
          const Vc = Math.trunc(this.scrollRemainder.x),
            Ic = Math.trunc(this.scrollRemainder.y);
          this.scrollRemainder = {
            x: this.scrollRemainder.x - Vc,
            y: this.scrollRemainder.y - Ic
          };
          const rB = this.hit;
          if (!rB) return;
          let uc = !1;
          if (0 !== Ic) {
            const cB = vs(rB, "y", Ic > 0 ? 1 : -1, Bc);
            cB && (cB.scrollBy({
              top: Ic,
              behavior: "instant"
            }), uc = !0)
          }
          if (0 !== Vc) {
            const cB = vs(rB, "x", Vc > 0 ? 1 : -1, Bc);
            cB && (cB.scrollBy({
              left: Vc,
              behavior: "instant"
            }), uc = !0)
          }
          uc && (this.lastHitTestMs = -1 / 0)
        }
        Vu() {
          kn.set({
            x: this.state.x,
            y: this.state.y,
            visible: this.isVisible(),
            pressed: null !== this.press && "ignored" !== this.press.kind
          })
        }
      },
      Nu = () => {
        const cB = (0, Ec.useMemo)((() => new Hc), []),
          Bc = (0, fc.B)();
        return (0, Ec.useEffect)((() => {
          if (!Bc) return;
          let nc = 0,
            Vc = {
              of: null,
              atMs: 0,
              list: []
            };
          const Ic = document.getElementsByClassName(lr),
            rB = cB => {
              for (const Bc of [...Ic]) Bc !== cB && Bc.classList.remove(lr)
            },
            uc = () => {
              var Bc;
              nc = requestAnimationFrame(uc);
              const Ic = (() => {
                const cB = iu.getFocused();
                if (iu.isActive() && null !== cB && void 0 !== cB && cB.isConnected) return cB;
                const Bc = Du.getHighlighted();
                return null !== Bc && void 0 !== Bc && Bc.isConnected ? Bc : null
              })();
              rB(Ic), Ic && !Ic.classList.contains(lr) && Ic.classList.add(lr);
              const sc = null !== (Bc = null === Ic || void 0 === Ic ? void 0 : Ic.closest("[data-pad-reticle-box]")) && void 0 !== Bc ? Bc : Ic;
              cB.show(sc ? ((cB, Bc) => {
                let nc = cB.left,
                  Vc = cB.top,
                  Ic = cB.right,
                  rB = cB.bottom;
                for (const uc of Bc) {
                  if (!uc) continue;
                  const cB = Dc(uc);
                  nc = Math.max(nc, cB.left), Vc = Math.max(Vc, cB.top), Ic = Math.min(Ic, cB.right), rB = Math.min(rB, cB.bottom)
                }
                return Ic <= nc || rB <= Vc ? null : {
                  left: nc,
                  top: Vc,
                  width: Ic - nc,
                  height: rB - Vc
                }
              })(sc.getBoundingClientRect(), (cB => {
                const Bc = performance.now();
                return (Vc.of !== cB || Bc - Vc.atMs > 500) && (Vc = {
                  of: cB,
                  atMs: Bc,
                  list: [Uc(cB, "y"), Uc(cB, "x")]
                }), Vc.list
              })(sc)) : null)
            };
          return nc = requestAnimationFrame(uc), () => {
            cancelAnimationFrame(nc), rB(null), cB.hide()
          }
        }), [Bc, cB]), (0, wc.jsx)(Fc, {
          placer: cB,
          className: "PadFocusRing"
        })
      },
      Eu = (cB, Bc) => {
        cB.style.transform = `translate3d(${Bc.x}px, ${Bc.y}px, 0)`, cB.classList.toggle("Visible", Bc.visible), cB.classList.toggle("Pressed", Bc.pressed)
      },
      ou = () => {
        const cB = (0, Ec.useRef)(null);
        return (0, Ec.useEffect)((() => {
          const Bc = kn.subscribe((Bc => {
            cB.current && Eu(cB.current, Bc)
          }));
          return cB.current && Eu(cB.current, kn.get()), Bc
        }), []), (0, wc.jsx)("div", {
          ref: cB,
          className: "PadCursorView",
          "aria-hidden": "true",
          children: (0, wc.jsx)("div", {
            className: "PadCursorGlyph",
            children: "+"
          })
        })
      },
      Wu = "#ncmp__modal.ncmp__active",
      wu = [{
        id: "nitro-consent-banner",
        find: () => document.querySelector(Wu) ? null : document.querySelector("#ncmp__tool > .ncmp__banner.ncmp__active"),
        startSelectors: ["[data-ncmp-cmd='reject']", "[data-ncmp-cmd='showModal']"]
      }, {
        id: "nitro-consent-modal",
        find: () => document.querySelector(Wu),
        startSelectors: ["[data-ncmp-cmd='reject']"]
      }, {
        id: "google-consent",
        find: () => document.querySelector(".fc-consent-root"),
        startSelectors: [".fc-cta-do-not-consent", ".fc-cta-manage-options"]
      }],
      ks = "PadOverThirdParty",
      Xu = new Set(wu.map((cB => cB.id))),
      Hu = () => {
        const cB = wu.map((cB => {
            let {
              id: Bc,
              find: nc,
              startSelectors: Vc
            } = cB;
            return (0, dI.q)({
              id: Bc,
              kind: "popup",
              getRoot: () => {
                const cB = nc(),
                  Bc = cB ? ((cB, Bc) => {
                    var nc;
                    for (const Vc of Bc) {
                      const Bc = cB.querySelector(Vc);
                      if (Bc) return Bc
                    }
                    return null !== (nc = [...cB.querySelectorAll("button")].find((cB => !cB.matches(".fc-cta-consent, [data-ncmp-cmd='save']")))) && void 0 !== nc ? nc : null
                  })(cB, Vc) : null;
                if (cB && Bc && !Bc.hasAttribute("data-pad-default-focus")) {
                  for (const Bc of cB.querySelectorAll("[data-pad-default-focus]")) Bc.removeAttribute("data-pad-default-focus");
                  for (const Bc of cB.querySelectorAll("[data-pad-hint-bar-avoid]")) Bc.removeAttribute("data-pad-hint-bar-avoid");
                  Bc.setAttribute("data-pad-default-focus", ""), ((cB, Bc) => {
                    let nc = cB;
                    for (let Vc = cB.parentElement; Vc && Bc.contains(Vc) && !(Vc.getBoundingClientRect().height >= window.innerHeight / 2); Vc = Vc.parentElement) nc = Vc;
                    return nc
                  })(Bc, cB).setAttribute("data-pad-hint-bar-avoid", "")
                }
                return cB
              },
              close: null,
              memoryKey: null
            })
          })),
          Bc = document.documentElement,
          nc = uc.h.onFrame((() => {
            const cB = (0, fc.k)() ? ru() : null,
              nc = !!cB && (Vc = cB.layer, Xu.has(Vc.id));
            var Vc;
            Bc.classList.contains(ks) !== nc && Bc.classList.toggle(ks, nc)
          }));
        return () => {
          for (const Bc of cB) Bc();
          nc(), Bc.classList.remove(ks)
        }
      },
      Fu = "PadLargePointer",
      Ju = () => {
        (0, Ec.useEffect)((() => {
          const cB = (0, Sc.k)(document.body),
            Bc = iu.install(),
            nc = Du.install(),
            Vc = Hu();
          return () => {
            cB(), Bc(), nc(), Vc()
          }
        }), []);
        const {
          largePointer: cB
        } = (0, Tc.s)(), Bc = (0, ys.s)() && cB;
        return (0, Ec.useEffect)((() => {
          if (Bc) return document.documentElement.classList.add(Fu), () => {
            document.documentElement.classList.remove(Fu)
          }
        }), [Bc]), (0, sc.createPortal)((0, wc.jsxs)(wc.Fragment, {
          children: [(0, wc.jsx)(bs, {}), (0, wc.jsx)(Nu, {}), (0, wc.jsx)(ou, {})]
        }), document.body)
      };
    var jsc = nc(7699),
      Ru = nc(7718),
      is = nc(7708);
    nc(7721);
    const Ku = (cB, Bc) => {
        const [nc, Vc] = (0, Ec.useState)(!1), [Ic, rB] = (0, Ec.useState)(null), uc = (0, Ec.useRef)(null), sc = (0, Ec.useCallback)((cB => {
          uc.current = cB, rB(cB)
        }), []), Mc = (0, Ec.useCallback)((() => {
          Vc(!1), sc(null)
        }), [sc]), qB = (0, Ec.useCallback)((() => {
          Vc(!0)
        }), []), Oc = (0, Ec.useCallback)(((cB, Bc) => {
          sc((0, is.H)(cB, Bc, uc.current))
        }), [sc]);
        (0, Ec.useLayoutEffect)((() => (Bc(nc), (0, zs.v)(cB, nc), Pc.i.Vu(zs.n), () => {
          Bc(!1), (0, zs.v)(cB, !1), Pc.i.Vu(zs.n)
        })), [nc, cB, Bc]), (0, MV.f)("appManagerUpdated|activeInputDevice", (cB => {
          "gamepad" !== cB && Mc()
        })), (0, MV.f)("appManagerUpdated|gameState", (cB => {
          "inGame" !== cB && Mc()
        }));
        const Tc = () => {
          (0, rr.p)() && Mc()
        };
        return (0, MV.f)("appManagerUpdated|openEverythingMenuName", Tc), (0, MV.f)("appManagerUpdated|openInGameMenuName", Tc), {
          open: nc,
          picked: Ic,
          pickedRef: uc,
          show: qB,
          aim: Oc,
          close: Mc
        }
      },
      xs = cB => {
        let {
          className: Bc,
          slotCount: nc,
          picked: Vc,
          slotLabel: Ic,
          renderSlot: rB,
          centre: uc
        } = cB;
        const sc = Array.from({
          length: nc
        }, ((cB, Bc) => Bc));
        return (0, wc.jsx)("div", {
          className: Wc()("EmoteWheelOverlay PadRadialWheel", Bc),
          children: (0, wc.jsxs)("div", {
            className: "EmoteWheel",
            style: {
              width: 2 * is.t + "rem",
              height: 2 * is.t + "rem"
            },
            children: [(0, wc.jsxs)("svg", {
              className: "EmoteWheelSvg",
              viewBox: `0 0 ${is.o} ${is.o}`,
              children: [sc.map((cB => (0, wc.jsx)("path", {
                d: (0, is.u)(cB, nc, is.g, is.h, is.l),
                className: Wc()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: cB === Vc
                }),
                "aria-label": Ic(cB)
              }, cB))), (0, wc.jsx)("circle", {
                className: "EmoteWheelOuterRing",
                cx: is.g,
                cy: is.g,
                r: is.l
              }), (0, wc.jsx)("circle", {
                className: "EmoteWheelInnerRing",
                cx: is.g,
                cy: is.g,
                r: is.h
              }), null !== Vc && (0, wc.jsx)("path", {
                className: "EmoteWheelWedgeOutline",
                d: (0, is.u)(Vc, nc, is.g, is.h, is.l)
              })]
            }), sc.map((cB => {
              const Bc = (0, is.z)(cB, nc);
              return (0, wc.jsx)("div", {
                className: Wc()("PadRadialWheelSlot SmallTextBold", {
                  PadRadialWheelSlotPicked: cB === Vc
                }),
                style: {
                  left: `calc(50% + ${is.e*Math.cos(Bc)}rem)`,
                  top: `calc(50% + ${is.e*Math.sin(Bc)}rem)`
                },
                "aria-hidden": !0,
                children: rB(cB)
              }, cB)
            })), (0, wc.jsx)("div", {
              className: "EmoteWheelHint SmallTextBold",
              children: uc
            })]
          })
        })
      },
      du = Kr.length,
      Au = () => {
        const {
          t: cB
        } = (0, Ic.x)(), Bc = Ku("chat", LI.p), nc = (0, Ec.useMemo)((() => Kr.map((Bc => cB(Bc)))), [cB]);
        return (0, MV.f)(LI.n, (() => {
          Bc.open || (0, jsc.d)() || (0, Ru.q)() || "inGame" !== Mc.d.get("gameState") || (0, rr.p)() || !(0, BI.b)() || Bc.show()
        })), (0, MV.f)(LI.g, (cB => {
          Bc.open && Bc.aim(cB, du)
        })), (0, MV.f)(LI.m, (() => {
          var cB;
          if (!Bc.open) return;
          const Vc = Bc.pickedRef.current;
          null !== Vc ? xu.claim(performance.now()) && (Bc.close(), null === (cB = (0, BI.b)()) || void 0 === cB || cB.sendLine(nc[Vc])) : Bc.close()
        })), (0, MV.f)(LI.k, Bc.close), Bc.open ? (0, wc.jsx)(xs, {
          className: "QuickChatWheel",
          slotCount: du,
          picked: Bc.picked,
          slotLabel: cB => nc[cB],
          renderSlot: cB => nc[cB],
          centre: null !== Bc.picked ? nc[Bc.picked] : cB("controller:quickChatPick")
        }) : null
      },
      Gu = () => {
        const {
          t: cB
        } = (0, Ic.x)(), Bc = Ku("actionButton", Ru.s), [nc, Vc] = (0, Ec.useState)([]);
        if ((0, MV.f)(Ru.m, (cB => {
            Bc.open || (0, jsc.d)() || (0, LI.e)() || "inGame" !== Mc.d.get("gameState") || (0, rr.p)() || (Vc(cB), Bc.show())
          })), (0, MV.f)(Ru.d, (cB => {
            Bc.open && Bc.aim(cB, nc.length)
          })), (0, MV.f)(Ru.j, (() => {
            if (!Bc.open) return;
            const cB = Bc.pickedRef.current;
            Bc.close(), null !== cB && Pc.i.Vu(Ru.p, nc[cB])
          })), (0, MV.f)(Ru.f, Bc.close), !Bc.open) return null;
        const rB = null !== Bc.picked ? nc[Bc.picked] : null;
        return (0, wc.jsx)(xs, {
          className: "ActionWheel",
          slotCount: nc.length,
          picked: Bc.picked,
          slotLabel: Bc => {
            const Vc = nc[Bc];
            return "reload" === Vc.kind ? cB("controller:gameplayReload") : "customButton" === Vc.kind ? Vc.description || Vc.icon : "touchButton" === Vc.kind && "string" === typeof Vc.label ? Vc.label : ""
          },
          renderSlot: cB => (0, wc.jsx)(tI, {
            action: nc[cB]
          }),
          centre: rB ? (0, wc.jsx)(tI, {
            action: rB
          }) : cB("controller:actionWheelPick")
        })
      };
    var cM = nc(107);
    const Bs = () => ((0, Ec.useEffect)((() => {
        var cB, Bc;
        const nc = (0, Sc.k)(document.getElementById("root")),
          Vc = (0, fc.g)(),
          Ic = (() => {
            const cB = [Pc.i.subscribe(Rn.e, (() => {
                dn("blockBreak")
              })), Pc.i.subscribe("damagedByOtherPlayer", (() => {
                dn("damage")
              })), Pc.i.subscribe("yourAttackHit", (cB => {
                let {
                  hitSelf: Bc
                } = cB;
                Bc || dn("hit")
              }))],
              Bc = uc.h.onActivePadChanged((cB => {
                cB && dn("connect")
              }));
            return () => {
              for (const Bc of cB) Pc.i.unsubscribe(Bc);
              Bc()
            }
          })(),
          rB = (() => {
            const cB = new VV({
              getVisitId: nV.e,
              peekVisitId: nV.peekVisitSessionId,
              readReportedVisitId: () => {
                const cB = BV.i.getItem(IV);
                return "string" === typeof cB ? cB : null
              },
              writeReportedVisitId: cB => {
                BV.i.setItem(IV, cB)
              },
              isPadActive: fc.k,
              getPadFamily: () => {
                var cB, Bc;
                return null !== (cB = null === (Bc = uc.h.getActivePad()) || void 0 === Bc ? void 0 : Bc.family) && void 0 !== cB ? cB : null
              },
              canReport: Gn.m,
              getInputType: cI.b,
              PV: Gn.s
            });
            let Bc = 0,
              nc = null;
            const Vc = Ic => {
                null === nc && ("notReady" !== cB.check(Ic) || null !== nc || Bc >= 20 || (Bc++, nc = setTimeout((() => {
                  nc = null, Vc(!1)
                }), 3e3)))
              },
              Ic = Pc.i.subscribe("appManagerUpdated|activeInputDevice", (() => {
                Vc(!0)
              })),
              rB = (0, nV.j)((() => {
                Bc = 0, Vc(!0)
              }));
            return () => {
              Pc.i.unsubscribe(Ic), rB(), null !== nc && clearTimeout(nc)
            }
          })(),
          sc = uc.h.onFrame(((cB, Bc) => {
            const nc = (0, fc.p)(cB);
            Oc.e.dispatch(cB, Bc, nc)
          }));
        let qB = null !== (cB = null === (Bc = uc.h.getActivePad()) || void 0 === Bc ? void 0 : Bc.family) && void 0 !== cB ? cB : null;
        const mB = uc.h.onActivePadChanged((cB => {
            var Bc, nc;
            (Oc.e.reset(), (0, fc.x)(), Pc.i.Vu(uc.e, cB), (null !== (Bc = null === cB || void 0 === cB ? void 0 : cB.family) && void 0 !== Bc ? Bc : null) !== qB) && (qB = null !== (nc = null === cB || void 0 === cB ? void 0 : cB.family) && void 0 !== nc ? nc : null, Pc.i.Vu(Tc.d, (0, Tc.k)()));
            !cB && (0, fc.k)() && (0, fc.y)(Mc.d.get("isTouchScreen") ? "touch" : "keyboardMouse")
          })),
          ec = () => {
            "visible" !== document.visibilityState && Oc.e.clear()
          },
          tB = () => {
            Oc.e.clear()
          };
        document.addEventListener("visibilitychange", ec), window.addEventListener("blur", tB), uc.h.start(), (0, An.k)();
        const yB = null;
        return () => {
          nc(), Vc(), Ic(), rB(), sc(), mB(), document.removeEventListener("visibilitychange", ec), window.removeEventListener("blur", tB), uc.h.stop(), null === yB || void 0 === yB || yB()
        }
      }), []), (0, wc.jsxs)("div", {
        className: "ControllerRoot",
        children: [(0, wc.jsx)(lV, {}), (0, wc.jsx)(vI, {}), (0, wc.jsx)(DV, {}), (0, wc.jsx)(ts, {}), (0, wc.jsx)(Ju, {}), (0, wc.jsx)(Au, {}), (0, wc.jsx)(Gu, {})]
      })),
      ns = () => cM.featureFlags.useControllerSupport ? (0, wc.jsx)(Bs, {}) : null;
    var Vs = nc(7072),
      Is = nc(7738);
    const rM = new Set(An.g),
      us = cB => `${Is.p}${(0,Tc.n)()}/${cB}`,
      ss = cB => {
        if (!(0, Is.n)(cB)) return null;
        const [Bc, nc] = cB.slice(Is.p.length).split("/");
        return (0, Vs.f)(Bc) && rM.has(nc) ? (0, An.f)(Bc, nc) : null
      };
    var Ms = nc(7742);
    const Ps = () => {
        const {
          t: cB
        } = (0, Ic.x)(), Bc = (0, fc.B)(), {
          gameState: nc,
          isUiHidden: Vc
        } = (0, Mc.j)(["gameState", "isUiHidden"]), {
          hideButtonHints: rB,
          sneakMode: uc
        } = (0, Tc.s)(), [sc, Pc] = (0, Ec.useState)(Ms.b);
        return (0, MV.f)(aI.r, Pc), Bc && !Vc && "inGame" === nc && sc ? (0, wc.jsxs)("div", {
          className: "PadSneakChip SmallTextBold",
          children: [!rB && (0, wc.jsx)(mI, {
            glyph: (0, qB.g)("toggle" === uc ? "sneak" : "sneakToggle")
          }), (0, wc.jsx)("span", {
            children: cB("controller:gameplaySneaking")
          })]
        }) : null
      },
      qM = 12,
      Os = cB => {
        let {
          trigger: Bc,
          className: nc,
          children: Vc
        } = cB;
        const Ic = (0, Ec.useRef)(null);
        return (0, Ec.useEffect)((() => {
          let cB = 0;
          const nc = Uc(Bc, "y"),
            Vc = () => {
              cB = requestAnimationFrame(Vc);
              const rB = Ic.current;
              if (!rB || null === Bc || void 0 === Bc || !Bc.isConnected) return;
              const {
                left: uc,
                top: sc
              } = function(cB, Bc, nc) {
                let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                const rB = cB.left + cB.width / 2,
                  uc = Math.max(qM, nc.width - qM - Bc.width),
                  sc = Math.min(Math.max(rB - Bc.width / 2, qM), uc),
                  Mc = nc.height - Vc;
                let Pc = 0,
                  qB = Mc;
                if (Ic) {
                  const cB = Math.max(0, Ic.top),
                    Vc = Math.min(Mc, Ic.bottom);
                  Vc - cB >= Math.max(nc.height / 2, Bc.height + 24) && (Pc = cB, qB = Vc)
                }
                const Oc = cB.top + cB.height / 2 < (Pc + qB) / 2 ? qB - qM - Bc.height : Pc + qM;
                return {
                  left: sc,
                  top: Math.max(qM, Oc)
                }
              }(Bc.getBoundingClientRect(), {
                width: rB.offsetWidth,
                height: rB.offsetHeight
              }, {
                width: window.innerWidth,
                height: window.innerHeight
              }, parseFloat(document.documentElement.style.getPropertyValue(lu)) || 0, null !== nc && void 0 !== nc && nc.isConnected ? nc.getBoundingClientRect() : null);
              rB.style.transform = `translate3d(${Math.round(uc)}px, ${Math.round(sc)}px, 0)`, rB.style.visibility = "visible"
            };
          return Vc(), () => {
            cancelAnimationFrame(cB)
          }
        }), [Bc]), (0, wc.jsx)("div", {
          ref: Ic,
          className: nc,
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            visibility: "hidden"
          },
          children: Vc
        })
      };
    var Ts = nc(926),
      fs = nc(7747),
      mM = nc(1255),
      es = nc(7749),
      tM = nc(7756);
    const Ss = {
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
        OV: {
          icon: "arrow-left",
          labelKey: "settingsMenu:exitGame"
        }
      },
      yM = () => {
        const {
          t: cB
        } = (0, Ic.x)(), Bc = (0, fc.B)(), nc = (0, fs.b)(), Vc = (0, ZV.j)("_tasks"), rB = (0, ZV.j)("_availableLeaderboards");
        if (!Bc) return null;
        const uc = (cB => {
          let {
            hasShop: Bc,
            hasTasksOrLeaderboards: nc,
            canInvite: Vc
          } = cB;
          const Ic = [];
          return Bc && Ic.push("shop"), nc && Ic.push("tasks"), Vc && Ic.push("invite"), Ic.push("OV"), Ic
        })({
          hasShop: nc,
          hasTasksOrLeaderboards: !(!Vc && !rB),
          canInvite: !!cM.featureFlags.canUseInviteLinks
        });
        return (0, wc.jsx)("div", {
          className: "PadLobbyShortcuts",
          children: uc.map((Bc => {
            const {
              icon: nc,
              labelKey: Vc
            } = Ss[Bc], Ic = "OV" === Bc ? mM.L : mM.d;
            return (0, wc.jsx)(Ic, {
              className: "PadLobbyShortcut",
              onClick: () => {
                (cB => {
                  switch (cB) {
                    case "shop":
                      return Pc.i.Vu(tM.j), void Mc.d.set({
                        openEverythingMenuName: II.i.SHOP
                      });
                    case "tasks":
                      return void Pc.i.Vu("toggleMenu", "retentionFeatures");
                    case "invite":
                      return void Pc.i.Vu("toggleMenu", "inviteLink");
                    case "OV":
                      (0, es.e)()
                  }
                })(Bc)
              },
              children: (0, wc.jsxs)("div", {
                className: "PadLobbyShortcutInner",
                children: [(0, wc.jsx)(Ts.e, {
                  name: nc
                }), (0, wc.jsx)("span", {
                  children: cB(Vc)
                })]
              })
            }, Bc)
          }))
        })
      };
    var zM = nc(1613);
    const ps = mB.I,
      hs = ["forward", "backward", "left", "right", "sprint"],
      aM = cB => cB.ctrlKey || cB.altKey || "Alt" === cB.key || "ArrowUp" === cB.key || "ArrowDown" === cB.key || "Tab" === cB.code || "/" === cB.key || "Slash" === cB.code;
    class ls {
      constructor() {
        this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(mB.ib).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
      }
      setArmed(cB) {
        this.armed = cB
      }
      blocksGameplay() {
        return this.armed || this.consumeNextFrame
      }
      onKeyDown(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !this.armed || Bc ? !cB.repeat && this.swallowedKeys.delete(cB.code) ? {
          swallow: !1,
          continues: !1
        } : {
          swallow: this.swallowedKeys.has(cB.code),
          continues: !1
        } : "Escape" === cB.key || cB.repeat && !this.swallowedKeys.has(cB.code) ? {
          swallow: !1,
          continues: !1
        } : nc ? {
          swallow: !1,
          continues: !0
        } : (this.swallowedKeys.add(cB.code), {
          swallow: !0,
          continues: (0, fc.j)(cB)
        })
      }
      onKeyUp(cB) {
        return this.swallowedKeys.delete(cB.code)
      }
      forgetKeys() {
        this.swallowedKeys.clear()
      }
      onPadFrame(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Vc = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Ic = (0, mB.y)(cB.values, this.previousHeld),
          rB = null === nc ? -1 : (0, mB.s)(nc),
          uc = rB >= 0 && Ic[rB] && !this.previousHeld[rB],
          sc = Ic.some(((cB, Bc) => cB && !this.previousHeld[Bc] && Bc !== rB)),
          Mc = Math.hypot(cB.leftStick.x, cB.leftStick.y) >= ps,
          Pc = Math.hypot(cB.rightStick.x, cB.rightStick.y) >= ps,
          qB = Mc && !this.leftStickWasPressed || Pc && !this.rightStickWasPressed;
        this.previousHeld = Ic, this.leftStickWasPressed = Mc, this.rightStickWasPressed = Pc;
        let Oc = !1;
        this.consumeNextFrame && (this.consumeNextFrame = !1, Oc = !0);
        const Tc = !Bc && uc && !Vc,
          fc = !Tc && this.armed && !Bc && (sc || qB);
        return (Tc || fc) && (this.consumeNextFrame = !0, this.consumeAfterContinue = fc, Oc = !0), {
          continues: fc,
          back: Tc,
          consumeHeld: Oc
        }
      }
      consumeLeavesMoveStick() {
        return this.consumeAfterContinue
      }
    }
    const Ys = new Set([...zM.j, ...zM.B]),
      Ls = cB => ((cB, Bc, nc) => {
        const Vc = Object.keys(Bc).filter((Vc => !nc.has(Vc) && Bc[Vc].includes(cB)));
        return Vc.length > 0 && Vc.every((cB => hs.includes(cB)))
      })(cB, zM.v, Ys),
      gM = (cB, Bc, nc) => {
        const Vc = new ls,
          Ic = cB => {
            if (!cB.isTrusted) return;
            const {
              swallow: nc,
              continues: Ic
            } = Vc.onKeyDown(cB, !(0, fc.G)(cB) || (0, jV.f)() || (0, rr.p)(), Ls(cB.code));
            nc && (cB.stopImmediatePropagation(), aM(cB) && cB.preventDefault()), Ic && ((0, fc.y)("keyboardMouse"), Bc())
          },
          rB = cB => {
            cB.isTrusted && Vc.onKeyUp(cB) && (cB.stopImmediatePropagation(), aM(cB) && cB.preventDefault())
          },
          sc = () => {
            Vc.forgetKeys()
          };
        window.addEventListener("keydown", Ic, !0), window.addEventListener("keyup", rB, !0), window.addEventListener("blur", sc);
        const Mc = uc.h.onFrame((cB => {
            const Ic = Oc.e.getActiveConsumerName(),
              rB = nc(),
              uc = rB ? (0, qB.g)("menuBack") : null,
              sc = null !== Ic && "gameplay" !== Ic,
              {
                continues: Mc,
                back: Pc,
                consumeHeld: mB
              } = Vc.onPadFrame(cB, sc, uc, (0, fc.l)(cB));
            if (mB) {
              const cB = (0, Tc.k)().swapSticks ? "right" : "left";
              Oc.e.consumeAllHeld(Vc.consumeLeavesMoveStick() ? cB : null)
            }
            Pc ? null === rB || void 0 === rB || rB() : Mc && Bc()
          })),
          Pc = (0, jV.i)(`pressToContinue:${cB}`, (() => Vc.blocksGameplay()));
        return {
          setArmed: cB => {
            Vc.setArmed(cB)
          },
          dispose: () => {
            window.removeEventListener("keydown", Ic, !0), window.removeEventListener("keyup", rB, !0), window.removeEventListener("blur", sc), Mc(), Pc()
          }
        }
      };
    var Us = nc(4035),
      bM = nc(2617),
      Zs = nc(2311),
      Qs = nc(7079);
    const Cs = cB => {
        let {
          text: Bc
        } = cB;
        return (0, wc.jsx)("div", {
          className: "ControllerSettingsHeading",
          children: Bc
        })
      },
      vM = cB => {
        let {
          label: Bc,
          hint: nc,
          options: Vc,
          value: rB,
          onChange: uc
        } = cB;
        const {
          t: sc
        } = (0, Ic.x)();
        return (0, wc.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, wc.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: [(0, wc.jsxs)("div", {
              className: "ControllerChoiceText",
              children: [(0, wc.jsx)("div", {
                className: "SliderText",
                children: Bc
              }), nc && (0, wc.jsx)("div", {
                className: "ControllerSettingsHint",
                children: nc
              })]
            }), (0, wc.jsx)(Zs.c, {
              options: Vc.map((cB => ({
                label: "label" in cB ? cB.label : sc(cB.labelKey),
                value: cB.value
              }))),
              value: rB,
              onChange: cB => {
                uc(cB.value)
              }
            })]
          })
        })
      },
      Ds = cB => {
        let {
          settingKey: Bc,
          label: nc,
          range: Vc,
          format: Ic
        } = cB;
        const rB = (0, Tc.s)();
        return (0, wc.jsx)(Us.g, {
          name: nc,
          min: Vc.min,
          max: Vc.max,
          step: Vc.step,
          padStep: Vc.step,
          initValue: rB[Bc],
          format: Ic,
          onChange: cB => {
            (0, Tc.o)({
              [Bc]: (0, Qs.s)(cB, Vc)
            })
          }
        })
      };
    var Ns = nc(7760),
      Es = nc(7769);
    const os = cB => cB instanceof DOMException && ("SecurityError" === cB.name || "NotAllowedError" === cB.name),
      Ws = cB => {
        const [Bc] = [...cB.controllers].sort(((cB, Bc) => Es.t[cB] - Es.t[Bc]));
        return Es.p[Bc]
      },
      ws = cB => {
        (0, Ns.c)().allowPhoneMotion().catch((Bc => {
          cB && os(Bc) ? cB() : console.warn("Could not enable the motion sensor", Bc)
        }))
      },
      kM = {
        waiting: "controller:settingsGyroPhoneWaiting",
        noSensor: "controller:settingsGyroPhoneNoSensor",
        on: "controller:settingsGyroPhoneOn",
        denied: "controller:settingsGyroPhoneDenied"
      },
      Xs = cB => {
        let {
          status: Bc
        } = cB;
        const {
          t: nc
        } = (0, Ic.x)(), [Vc, rB] = (0, Ec.useState)(null), uc = `${Bc.controllers.join(",")}|${Bc.phoneMotion}`;
        (0, Ec.useEffect)((() => {
          rB(null)
        }), [uc]);
        const sc = () => {
          (0, Ns.c)().connectController().then((cB => {
            rB(cB > 0 ? "openFailed" : null)
          })).catch((cB => {
            os(cB) ? rB("needsClick") : console.warn("Could not connect motion controller", cB)
          }))
        };
        if (Bc.hidSupported) {
          let cB = nc("controller:settingsGyroConnectHint");
          return "needsClick" === Vc ? cB = nc("controller:settingsGyroConnectNeedsClick") : "openFailed" === Vc ? cB = nc("controller:settingsGyroOpenFailed") : Bc.controllers.length > 0 && (cB = nc("controller:settingsGyroConnected", {
            name: Ws(Bc)
          })), (0, wc.jsx)("div", {
            className: "SettingBox ControllerChoiceSetting",
            children: (0, wc.jsxs)("div", {
              className: "ControllerChoiceRow",
              children: [(0, wc.jsx)("div", {
                className: "ControllerSettingsHint",
                children: cB
              }), (0, wc.jsx)(mM.d, {
                onClick: sc,
                children: nc("controller:settingsGyroConnect")
              })]
            })
          })
        }
        if ("needsPermission" === Bc.phoneMotion) return (0, wc.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, wc.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: ["needsTap" === Vc && (0, wc.jsx)("div", {
              className: "ControllerSettingsHint",
              children: nc("controller:settingsGyroAllowNeedsTap")
            }), (0, wc.jsx)(mM.d, {
              onClick: () => {
                ws((() => {
                  rB("needsTap")
                }))
              },
              children: nc("controller:settingsGyroAllowMotion")
            })]
          })
        });
        const Mc = kM[Bc.phoneMotion];
        return Mc ? (0, wc.jsx)("div", {
          className: "ControllerSettingsHint",
          children: nc(Mc)
        }) : null
      },
      Hs = () => {
        const {
          t: cB
        } = (0, Ic.x)(), Bc = (0, Tc.s)(), nc = (0, Ns.g)(), Vc = (0, fc.E)(), rB = !nc.hidSupported && nc.phoneSupported && !nc.padConnected, uc = (nc.hidSupported || nc.phoneSupported) && !rB, sc = (0, qB.g)("pause");
        return (0, wc.jsxs)(wc.Fragment, {
          children: [(0, wc.jsx)(Cs, {
            text: cB("controller:settingsGyro")
          }), rB && (0, wc.jsx)("div", {
            className: "ControllerSettingsHint",
            children: cB("controller:settingsGyroPhoneNeedsController")
          }), !uc && !rB && (0, wc.jsx)("div", {
            className: "ControllerSettingsHint",
            children: cB(nc.hidBlocked || nc.phoneBlocked ? "controller:settingsGyroBlocked" : "controller:settingsGyroUnsupported")
          }), uc && (0, wc.jsx)(Us.c, {
            label: cB(nc.hidSupported ? "controller:settingsGyroToggle" : "controller:settingsGyroTogglePhone"),
            checked: Bc.gyroAiming,
            onClick: cB => {
              var Bc, nc;
              (0, Tc.o)({
                gyroAiming: cB
              });
              const Vc = null === (Bc = null === (nc = navigator.userActivation) || void 0 === nc ? void 0 : nc.isActive) || void 0 === Bc || Bc;
              if (!cB || !Vc) return;
              const Ic = (0, Ns.c)(),
                rB = Ic.getStatus();
              rB.hidSupported ? Ic.connectControllerIfNoneGranted().catch((cB => {
                console.warn("Motion controller picker unavailable", cB)
              })) : "needsPermission" === rB.phoneMotion && ws()
            },
            circleInfoText: cB(nc.hidSupported ? "controller:settingsGyroToggleInfo" : "controller:settingsGyroToggleInfoPhone")
          }), uc && nc.hidSupported && (0, wc.jsx)("div", {
            className: "ControllerSettingsHint",
            children: cB("controller:settingsGyroSteamHint")
          }), uc && Bc.gyroAiming && (0, wc.jsxs)(wc.Fragment, {
            children: [(0, wc.jsx)(Xs, {
              status: nc
            }), (0, wc.jsx)(Ds, {
              settingKey: "gyroSensitivity",
              label: cB("controller:settingsGyroSensitivity"),
              range: Qs.M,
              format: Qs.D
            }), (0, wc.jsx)(vM, {
              label: cB("controller:settingsGyroActivation"),
              hint: "aiming" === Bc.gyroActivation && (0, wc.jsx)(bM.c, {
                text: cB("controller:settingsGyroAimingHint", {
                  button: bM.g
                }),
                glyph: (0, qB.g)("use")
              }),
              options: Qs.J,
              value: Bc.gyroActivation,
              onChange: cB => {
                (0, Tc.o)({
                  gyroActivation: cB
                })
              }
            }), "button" === Bc.gyroActivation && (0, wc.jsx)(vM, {
              label: cB("controller:settingsGyroButton"),
              hint: cB("controller:settingsGyroButtonHint"),
              options: Qs.p.filter((cB => cB !== sc || cB === Bc.gyroButton)).map((cB => ({
                label: fV(Vc, cB),
                value: cB
              }))),
              value: Bc.gyroButton,
              onChange: cB => {
                (0, Tc.o)({
                  gyroButton: cB
                })
              }
            })]
          })]
        })
      };
    var Fs = nc(1718);
    const Jsc = () => {
      const {
        t: cB
      } = (0, Ic.x)(), Bc = (0, Tc.s)(), nc = (0, fc.E)();
      return (0, wc.jsxs)(wc.Fragment, {
        children: [(0, wc.jsx)(Cs, {
          text: cB("controller:settingsAccessibility")
        }), (0, wc.jsx)(Us.c, {
          label: cB("controller:settingsSwapConfirmBack"),
          checked: (0, qB.H)(Bc.swapConfirmBack, nc),
          onClick: cB => {
            (0, Tc.o)({
              swapConfirmBack: cB === (0, qB.H)(null, nc) ? null : cB
            }), Fs.c.showMessage({
              translationKey: "controller:settingsSwapToast"
            })
          },
          circleInfoText: cB("controller:settingsSwapConfirmBackInfo")
        }), (0, wc.jsx)(vM, {
          label: cB("controller:settingsButtonRepeat"),
          hint: cB("controller:settingsButtonRepeatHint"),
          options: Qs.o,
          value: Bc.buttonRepeat,
          onChange: cB => {
            (0, Tc.o)({
              buttonRepeat: cB
            })
          }
        }), (0, wc.jsx)(vM, {
          label: cB("controller:settingsTapHoldTime"),
          hint: cB("controller:settingsTapHoldTimeHint"),
          options: Qs.sb,
          value: Bc.tapHoldTime,
          onChange: cB => {
            (0, Tc.o)({
              tapHoldTime: cB
            })
          }
        }), (0, wc.jsx)(vM, {
          label: cB("controller:settingsEmoteButton"),
          hint: cB("wheel" === Bc.emoteButton ? "controller:settingsEmoteButtonWheelHint" : "controller:settingsEmoteButtonTapHoldHint"),
          options: Qs.z,
          value: Bc.emoteButton,
          onChange: cB => {
            (0, Tc.o)({
              emoteButton: cB
            })
          }
        }), (0, wc.jsx)(vM, {
          label: cB("controller:settingsAttackMode"),
          hint: cB("toggle" === Bc.attackMode ? "controller:settingsAttackToggleHint" : "controller:settingsAttackHoldHint"),
          options: Qs.l,
          value: Bc.attackMode,
          onChange: cB => {
            (0, Tc.o)({
              attackMode: cB
            })
          }
        }), (0, wc.jsx)(Us.c, {
          label: cB("controller:settingsLargePointer"),
          checked: Bc.largePointer,
          onClick: cB => {
            (0, Tc.o)({
              largePointer: cB
            })
          },
          circleInfoText: cB("controller:settingsLargePointerInfo")
        })]
      })
    };
    var jM = nc(7776);
    const Rs = new class {
        constructor(cB) {
          this.router = cB, this.current = null
        }
        claim(cB, Bc) {
          const nc = this.current;
          nc && (this.current = null, nc.release(), nc.onTakenOver());
          const Vc = this.router.register({
              ...cB,
              name: "capture"
            }),
            Ic = {
              release: Vc,
              onTakenOver: Bc
            };
          return this.current = Ic, () => {
            this.current === Ic && (this.current = null), Vc()
          }
        }
      }(Oc.e),
      iM = cB => {
        (0, Ec.useEffect)((() => {
          if (!cB) return;
          const Bc = cB();
          let nc = !1;
          const Vc = () => {
              nc || (nc = !0, Bc.onEnd())
            },
            Ic = Rs.claim({
              isActive: () => !nc,
              onFrame: cB => {
                Bc.onFrame(cB, Vc)
              }
            }, Vc),
            rB = void 0 === Bc.timeoutMs ? void 0 : window.setTimeout(Vc, Bc.timeoutMs),
            uc = cB => {
              "Escape" === cB.key && (cB.preventDefault(), cB.stopPropagation(), Vc())
            };
          return window.addEventListener("keydown", uc, !0), () => {
            nc = !0, Ic(), window.clearTimeout(rB), window.removeEventListener("keydown", uc, !0)
          }
        }), [cB])
      },
      Ks = cB => {
        let {
          row: Bc,
          capturing: nc,
          onCapture: Vc,
          holdFillRef: rB,
          onRebind: uc,
          swapped: sc
        } = cB;
        const {
          t: Mc
        } = (0, Ic.x)();
        if ("fixed" === Bc.kind) return (0, wc.jsx)("div", {
          className: "ControlRow PadControlRow PadControlRowFixed",
          children: (0, wc.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, wc.jsx)("div", {
              className: "ControlName",
              children: Mc(Bc.labelKey)
            }), (0, wc.jsx)("div", {
              className: "ControlBindingsContainer",
              children: (0, wc.jsx)("div", {
                className: "ControlBindingsList",
                children: (0, wc.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  children: (0, wc.jsx)(mI, {
                    glyph: "move" === Bc.stick ? (0, qB.t)() : (0, qB.p)()
                  })
                })
              })
            })]
          })
        });
        const {
          action: Pc
        } = Bc, Oc = (0, qB.g)(Pc), Tc = (0, qB.i)(Pc), fc = Oc !== Tc && (0, qB.e)(Pc, Tc);
        return (0, wc.jsxs)("div", {
          className: Wc()("ControlRow PadControlRow", {
            Capturing: nc
          }),
          children: [(0, wc.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, wc.jsx)("div", {
              className: "ControlName",
              children: Mc((0, Qs.I)(Pc))
            }), (0, wc.jsxs)("div", {
              className: "ControlBindingsContainer",
              children: [!nc && (0, wc.jsxs)("div", {
                className: "ControlBindingsList",
                children: [(0, wc.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Vc(Pc)
                  },
                  children: (0, wc.jsx)(mI, {
                    glyph: Oc
                  })
                }), fc && (0, wc.jsx)("div", {
                  className: "ControlBinding PadBindingReset",
                  title: Mc("controller:settingsReset"),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    uc(Pc, Tc)
                  },
                  children: (0, wc.jsx)(Ts.e, {
                    name: "arrows-rotate"
                  })
                })]
              }), nc && (0, wc.jsxs)("div", {
                className: "ControlBindingAddInput",
                children: [(0, wc.jsxs)("div", {
                  className: "PadCaptureBox",
                  children: [(0, wc.jsx)("span", {
                    children: Mc("controller:settingsCapturePrompt")
                  }), (0, wc.jsx)("div", {
                    ref: rB,
                    className: "PadCaptureHoldFill"
                  })]
                }), (0, wc.jsx)("div", {
                  className: "ControlBindingAddCancel",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    Vc(null)
                  },
                  children: "\xd7"
                })]
              }), nc && (0, wc.jsx)("div", {
                className: "PadCaptureHint",
                children: (0, wc.jsx)(bM.c, {
                  text: Mc((0, qB.e)(Pc, (0, qB.g)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
                    button: bM.g
                  }),
                  glyph: (0, qB.g)("menuBack")
                })
              })]
            })]
          }), sc.map((cB => (0, wc.jsx)("div", {
            className: "ControlRowWarning PadSwapNotice",
            children: (0, wc.jsx)(bM.c, {
              text: Mc("controller:settingsSwapNotice", {
                action: Mc((0, Qs.I)(cB)),
                button: bM.g
              }),
              glyph: (0, qB.g)(cB)
            })
          }, cB))), nc && (0, wc.jsx)("div", {
            className: "PadCaptureTimer",
            style: {
              animationDuration: `${Qs.q}ms`
            }
          })]
        })
      },
      xM = [],
      ds = cB => {
        let {
          layoutSetting: Bc
        } = cB;
        const {
          t: nc
        } = (0, Ic.x)(), Vc = (0, Tc.s)();
        (0, fc.E)();
        const rB = (0, Ec.useRef)(null),
          [uc, sc] = (0, Ec.useState)(null),
          Mc = (0, Ec.useCallback)(((cB, Bc) => {
            const nc = (0, Tc.k)().TV;
            (0, qB.E)(cB, Bc);
            const Vc = (0, qB.w)(nc, cB);
            sc(Vc.length > 0 ? {
              action: cB,
              swapped: Vc
            } : null)
          }), []),
          [Pc, ec] = ((cB, Bc) => {
            const [nc, Vc] = (0, Ec.useState)(null), Ic = (0, Ec.useMemo)((() => nc ? () => {
              const Ic = (0, qB.g)("menuBack"),
                rB = new Qs.d(Ic, (0, qB.g)("menuConfirm"), (cB => (0, qB.e)(nc, cB)));
              return {
                onFrame: (Vc, uc) => {
                  var sc;
                  const Mc = Vc.frame.timestampMs,
                    Pc = rB.update({
                      ...Vc,
                      isDown: cB => (0, mB.V)(Vc.frame.values, cB)
                    }, Mc);
                  null === (sc = cB.current) || void 0 === sc || sc.style.setProperty("width", 100 * rB.getBindHoldProgress(Mc) + "%"), Pc && ("bind" === Pc.kind ? (Oc.e.consumeButton(Pc.button), Bc(nc, Pc.button)) : Oc.e.consumeButton(Ic), uc())
                },
                onEnd: () => {
                  Vc(null)
                },
                timeoutMs: Qs.q
              }
            } : null), [nc, cB, Bc]);
            return iM(Ic), [nc, Vc]
          })(rB, Mc),
          tB = cB => {
            cB && sc(null), ec(cB)
          };
        (0, Ec.useEffect)((() => {
          if (!uc) return;
          const cB = window.setTimeout((() => {
            sc(null)
          }), Qs.pb);
          return () => {
            window.clearTimeout(cB)
          }
        }), [uc]);
        const Sc = !Vc.swapSticks && 0 === Object.keys(Vc.TV).length;
        return (0, wc.jsxs)("div", {
          className: "ControlsContainer PadControlsContainer",
          children: [(0, wc.jsx)("div", {
            className: "SliderText",
            children: nc("controller:settingsRemap")
          }), (0, wc.jsx)("div", {
            className: "ControllerSettingsHint",
            children: nc("controller:settingsRemapHint")
          }), (0, wc.jsx)(mM.L, {
            className: "ResetBindingsButton PadResetAllButton",
            disabled: Sc,
            onClick: () => {
              tB(null), sc(null), (0, qB.G)()
            },
            children: nc("controller:settingsResetAll")
          }), Bc, Qs.eb.map(((cB, Bc) => (0, wc.jsx)(jM.d, {
            title: nc(cB.titleKey),
            defaultOpen: 0 === Bc,
            children: cB.rows.map((cB => (0, wc.jsx)(Ks, {
              row: cB,
              capturing: "action" === cB.kind && cB.action === Pc,
              onCapture: tB,
              holdFillRef: rB,
              onRebind: Mc,
              swapped: "action" === cB.kind && (null === uc || void 0 === uc ? void 0 : uc.action) === cB.action ? uc.swapped : xM
            }, "action" === cB.kind ? cB.action : cB.labelKey)))
          }, cB.titleKey)))]
        })
      },
      As = cB => {
        let {
          deadzone: Bc,
          dotRef: nc,
          labelKey: Vc
        } = cB;
        const {
          t: rB
        } = (0, Ic.x)();
        return (0, wc.jsxs)("div", {
          className: "ControllerTesterStick",
          children: [(0, wc.jsxs)("div", {
            className: "ControllerTesterStickCircle",
            children: [(0, wc.jsx)("div", {
              className: "ControllerTesterDeadzone",
              style: {
                width: 100 * Bc + "%",
                height: 100 * Bc + "%"
              }
            }), (0, wc.jsx)("div", {
              ref: nc,
              className: "ControllerTesterDot"
            })]
          }), (0, wc.jsx)("div", {
            className: "ControllerTesterStickLabel",
            children: rB(Vc)
          })]
        })
      },
      Gs = (cB, Bc, nc, Vc) => {
        var Ic;
        cB && (cB.style.left = 50 + 50 * Math.max(-1, Math.min(1, Bc.x)) + "%", cB.style.top = 50 + 50 * Math.max(-1, Math.min(1, Bc.y)) + "%", null === (Ic = cB.parentElement) || void 0 === Ic || Ic.classList.toggle("Active", Vc || Math.hypot(Bc.x, Bc.y) > nc))
      },
      cP = cB => {
        const Bc = {
            deadzone: cB.moveDeadzone,
            labelKey: "controller:settingsActionMove"
          },
          nc = {
            deadzone: cB.lookDeadzone,
            labelKey: "controller:settingsActionLook"
          };
        return cB.swapSticks ? {
          left: nc,
          right: Bc
        } : {
          left: Bc,
          right: nc
        }
      },
      BM = () => {
        const {
          t: cB
        } = (0, Ic.x)(), Bc = (() => {
          const [cB, Bc] = (0, Ec.useState)((() => uc.h.getActivePad()));
          return (0, MV.f)(uc.e, (() => {
            Bc(uc.h.getActivePad())
          })), cB
        })(), nc = cP((0, Tc.s)()), Vc = (0, Ec.useRef)(null), rB = (0, Ec.useRef)(null), sc = (0, Ec.useRef)([]), Mc = (0, Ec.useRef)(null), Pc = (0, Ec.useRef)(null), [fc, ec] = (cB => {
          const [Bc, nc] = (0, Ec.useState)(!1), Vc = (0, Ec.useMemo)((() => Bc ? () => {
            const Bc = (0, qB.g)("menuBack"),
              Vc = new Qs.g;
            return {
              onFrame: (nc, Ic) => {
                var rB;
                const uc = Vc.update({
                  pressed: nc.wasPressed(Bc),
                  XB: nc.isHeld(Bc)
                }, nc.frame.timestampMs);
                null === (rB = cB.current) || void 0 === rB || rB.style.setProperty("width", 100 * uc + "%"), uc >= 1 && (Oc.e.consumeButton(Bc), Ic())
              },
              onEnd: () => {
                nc(!1)
              }
            }
          } : null), [Bc, cB]);
          return iM(Vc), [Bc, nc]
        })(rB);
        (0, Ec.useEffect)((() => {
          const cB = cB => {
            for (const nc of mB.mb) {
              const Bc = (0, mB.s)(nc),
                Vc = sc.current[Bc];
              if (!Vc) continue;
              const Ic = cB.values[Bc];
              Vc.classList.toggle("Pressed", Ic >= mB.I), (0, mB.Z)(Bc) && Vc.style.setProperty("--trigger-fill", `${Math.round(100*Ic)}%`)
            }
            const Bc = cP((0, Tc.k)());
            Gs(Mc.current, cB.leftStick, Bc.left.deadzone, cB.values[(0, mB.s)("LS")] >= mB.I), Gs(Pc.current, cB.rightStick, Bc.right.deadzone, cB.values[(0, mB.s)("RS")] >= mB.I)
          };
          return Bc || cB((0, mB.E)()), uc.h.onFrame(cB)
        }), [Bc]), (0, Ec.useEffect)((() => {
          Bc || ec(!1)
        }), [Bc, ec]), (0, Ec.useEffect)((() => {
          var cB;
          fc && (null === (cB = Vc.current) || void 0 === cB || cB.scrollIntoView({
            block: "nearest"
          }))
        }), [fc]);
        const tB = Qs.bb.find((cB => cB.value === (null === Bc || void 0 === Bc ? void 0 : Bc.family)));
        return (0, wc.jsxs)("div", {
          ref: Vc,
          className: Wc()("SettingBox ControllerTester", {
            Testing: fc
          }),
          children: [(0, wc.jsxs)("div", {
            className: "ControllerTesterHeader",
            children: [(0, wc.jsxs)("div", {
              className: "ControllerTesterInfo",
              children: [Bc && (0, wc.jsx)("div", {
                children: cB("controller:settingsTesterFamily", {
                  family: tB ? cB(tB.labelKey) : Bc.family
                })
              }), Bc && (0, wc.jsx)("div", {
                className: "ControllerTesterPadId",
                children: Bc.id
              }), !Bc && (0, wc.jsx)("div", {
                children: cB("controller:settingsTesterNoPad")
              })]
            }), (Bc || fc) && (0, wc.jsx)(mM.d, {
              className: "ControllerTesterToggle",
              onClick: () => {
                ec(!fc)
              },
              children: cB(fc ? "controller:settingsTesterStop" : "controller:settingsTesterStart")
            })]
          }), Bc && !fc && (0, wc.jsx)("div", {
            className: "ControllerSettingsHint",
            children: cB("controller:settingsTesterHint")
          }), fc && (0, wc.jsxs)("div", {
            className: "ControllerTesterBanner",
            children: [(0, wc.jsx)(bM.c, {
              text: cB("controller:settingsTesterTesting", {
                button: bM.g
              }),
              glyph: (0, qB.g)("menuBack")
            }), (0, wc.jsx)("div", {
              ref: rB,
              className: "ControllerTesterExitFill"
            })]
          }), (0, wc.jsxs)("div", {
            className: "ControllerTesterBody",
            children: [(0, wc.jsx)(As, {
              deadzone: nc.left.deadzone,
              dotRef: Mc,
              labelKey: nc.left.labelKey
            }), (0, wc.jsx)("div", {
              className: "ControllerTesterButtons",
              children: mB.mb.map((cB => {
                const nc = (0, mB.s)(cB);
                return (0, wc.jsx)("div", {
                  ref: cB => {
                    sc.current[nc] = cB
                  },
                  className: (0, mB.Z)(nc) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
                  children: (0, wc.jsx)(mI, {
                    glyph: cB,
                    family: null === Bc || void 0 === Bc ? void 0 : Bc.family
                  })
                }, cB)
              }))
            }), (0, wc.jsx)(As, {
              deadzone: nc.right.deadzone,
              dotRef: Pc,
              labelKey: nc.right.labelKey
            })]
          })]
        })
      },
      nM = (0, Ec.memo)((function() {
        const {
          t: cB
        } = (0, Ic.x)(), Bc = (0, Tc.s)(), [nc, Vc] = (0, Ec.useState)(!1);
        return (0, Ec.useEffect)((() => {
          if (!nc) return;
          const cB = window.setTimeout((() => {
            Vc(!1)
          }), Qs.pb);
          return () => {
            window.clearTimeout(cB)
          }
        }), [nc]), (0, wc.jsxs)("div", {
          className: "SettingsMenuRightInner ControllerCategory",
          children: [(0, wc.jsx)(Cs, {
            text: cB("controller:settingsLook")
          }), (0, wc.jsx)(Ds, {
            settingKey: "lookSensitivityX",
            label: cB("controller:settingsLookSensitivityX"),
            range: Qs.ib,
            format: Qs.E
          }), (0, wc.jsx)(Ds, {
            settingKey: "lookSensitivityY",
            label: cB("controller:settingsLookSensitivityY"),
            range: Qs.ib,
            format: Qs.E
          }), (0, wc.jsx)(Ds, {
            settingKey: "aimLookSensitivity",
            label: cB("controller:settingsAimLookSensitivity"),
            range: Qs.i,
            format: Qs.E
          }), (0, wc.jsx)(vM, {
            label: cB("controller:settingsLookCurve"),
            hint: cB("controller:settingsLookCurveHint"),
            options: Qs.Z,
            value: Bc.lookCurve,
            onChange: cB => {
              (0, Tc.o)({
                lookCurve: cB
              })
            }
          }), (0, wc.jsx)(Us.c, {
            label: cB("controller:settingsInvertLookX"),
            checked: Bc.invertLookX,
            onClick: cB => {
              (0, Tc.o)({
                invertLookX: cB
              })
            }
          }), (0, wc.jsx)(Us.c, {
            label: cB("controller:settingsInvertLookY"),
            checked: Bc.invertLookY,
            onClick: cB => {
              (0, Tc.o)({
                invertLookY: cB
              })
            }
          }), (0, wc.jsx)(Ds, {
            settingKey: "lookDeadzone",
            label: cB("controller:settingsLookDeadzone"),
            range: Qs.x,
            format: Qs.B
          }), (0, wc.jsx)(Hs, {}), (0, wc.jsx)(Cs, {
            text: cB("controller:settingsMovement")
          }), (0, wc.jsx)(Ds, {
            settingKey: "moveDeadzone",
            label: cB("controller:settingsMoveDeadzone"),
            range: Qs.x,
            format: Qs.B
          }), (0, wc.jsx)(Us.c, {
            label: cB("controller:settingsAutoSprint"),
            checked: Bc.autoSprint,
            onClick: cB => {
              (0, Tc.o)({
                autoSprint: cB
              })
            },
            circleInfoText: cB("controller:settingsAutoSprintInfo")
          }), (0, wc.jsx)(vM, {
            label: cB("controller:settingsSneak"),
            options: Qs.mb,
            value: Bc.sneakMode,
            onChange: cB => {
              (0, Tc.o)({
                sneakMode: cB
              })
            }
          }), (0, wc.jsx)(Cs, {
            text: cB("controller:settingsButtons")
          }), (0, wc.jsx)(vM, {
            label: cB("controller:settingsPromptFamily"),
            options: Qs.bb,
            value: Bc.promptFamily,
            onChange: cB => {
              (0, Tc.o)({
                promptFamily: cB
              })
            }
          }), (0, wc.jsx)(Us.c, {
            label: cB("controller:settingsHideButtonHints"),
            checked: Bc.hideButtonHints,
            onClick: cB => {
              (0, Tc.o)({
                hideButtonHints: cB
              })
            }
          }), (0, wc.jsx)(Us.c, {
            label: cB("controller:settingsVibration"),
            checked: Bc.vibration,
            onClick: cB => {
              (0, Tc.o)({
                vibration: cB
              }), cB && dn("preview")
            }
          }), (0, wc.jsx)(Ds, {
            settingKey: "cursorSpeed",
            label: cB("controller:settingsCursorSpeed"),
            range: Qs.t,
            format: Qs.E
          }), (0, wc.jsx)(Us.c, {
            label: cB("controller:settingsCursorMagnetism"),
            checked: Bc.cursorMagnetism,
            onClick: cB => {
              (0, Tc.o)({
                cursorMagnetism: cB
              })
            }
          }), (0, wc.jsx)(Us.c, {
            label: cB("controller:settingsMenuBackToCategories"),
            checked: Bc.menuBackToCategories,
            onClick: cB => {
              (0, Tc.o)({
                menuBackToCategories: cB
              })
            }
          }), (0, wc.jsx)(ds, {
            layoutSetting: (0, wc.jsxs)(wc.Fragment, {
              children: [qB.f.map((nc => (0, wc.jsx)(Us.c, {
                label: cB(Qs.S[nc]),
                checked: (0, qB.D)(nc, Bc),
                onClick: cB => {
                  Vc(!(0, qB.J)(nc, cB))
                }
              }, nc))), nc && (0, wc.jsx)("div", {
                className: "PadLayoutRefusedNotice",
                role: "status",
                children: cB("controller:settingsLayoutRefusedToast")
              })]
            })
          }), (0, wc.jsx)(Jsc, {}), (0, wc.jsx)(Cs, {
            text: cB("controller:settingsAlternatives")
          }), (0, wc.jsx)("div", {
            className: "ControllerSettingsHint",
            children: cB("controller:settingsAlternativesHint")
          }), (0, wc.jsx)(vM, {
            label: cB("controller:settingsMenuNavigation"),
            hint: cB("controller:settingsMenuNavigationHint"),
            options: Qs.$,
            value: Bc.menuNavigation,
            onChange: cB => {
              (0, Tc.o)({
                menuNavigation: cB
              })
            }
          }), (0, wc.jsx)(vM, {
            label: cB("controller:settingsInventoryNavigation"),
            hint: cB("controller:settingsInventoryNavigationHint"),
            options: Qs.Q,
            value: Bc.inventoryNavigation,
            onChange: cB => {
              (0, Tc.o)({
                inventoryNavigation: cB
              })
            }
          }), (0, wc.jsx)(vM, {
            label: cB("controller:settingsQuickChat"),
            hint: cB("controller:settingsQuickChatHint"),
            options: Qs.db,
            value: Bc.quickChat,
            onChange: cB => {
              (0, Tc.o)({
                quickChat: cB
              })
            }
          }), (0, wc.jsx)(vM, {
            label: cB("controller:settingsLeaderboardButton"),
            hint: cB("controller:settingsLeaderboardButtonHint"),
            options: Qs.W,
            value: Bc.leaderboardButton,
            onChange: cB => {
              (0, Tc.o)({
                leaderboardButton: cB
              })
            }
          }), (0, wc.jsx)(Cs, {
            text: cB("controller:settingsTester")
          }), (0, wc.jsx)(BM, {})]
        })
      }));
    (0, Ic.b)(Vc);
    for (const uM of (0, rB.s)()) uM.connected ? uc.h.handleConnectionEvent(uM) : uc.h.handleDisconnectionEvent(uM);
    const VM = () => null !== uc.h.getActivePad(),
      IM = () => Fn.getState(),
      rP = () => Fn.isSteppingSlots()
  },
  7052: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => sc,
      c: () => Mc
    });
    const Vc = {
        "054c": "playstation",
        "057e": "nintendo"
      },
      Ic = "28de",
      rB = new Set(["1205"]),
      uc = cB => {
        const Bc = /vendor:\s*([0-9a-f]{4})\s*product:\s*([0-9a-f]{4})/i.exec(cB);
        if (Bc) return {
          vendor: Bc[1].toLowerCase(),
          product: Bc[2].toLowerCase()
        };
        const nc = /^([0-9a-f]{1,4})-([0-9a-f]{1,4})-/i.exec(cB);
        return nc ? {
          vendor: nc[1].toLowerCase().padStart(4, "0"),
          product: nc[2].toLowerCase().padStart(4, "0")
        } : null
      },
      sc = (cB, Bc) => {
        const nc = uc(cB);
        if ((null === nc || void 0 === nc ? void 0 : nc.vendor) === Ic) return rB.has(nc.product) ? "steamdeck" : "xbox";
        if (nc && Vc[nc.vendor]) return Vc[nc.vendor];
        const sc = `${cB} ${null!==Bc&&void 0!==Bc?Bc:""}`.toLowerCase();
        return /dualsense|dualshock|playstation|sony/.test(sc) ? "playstation" : /nintendo|switch|joy-con|pro controller/.test(sc) ? "nintendo" : /steam deck/.test(sc) ? "steamdeck" : "xbox"
      },
      Mc = cB => {
        var Bc;
        return (null === (Bc = uc(cB)) || void 0 === Bc ? void 0 : Bc.vendor) === Ic
      }
  },
  7090: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Pc,
      i: () => sc
    });
    var Vc = nc(7044);
    const Ic = ["capture", "keyboard", "wheel", "inventory", "cursor", "focus", "gameplay"],
      rB = new Set(["capture", "gameplay"]),
      uc = ["Up", "Down", "Left", "Right"],
      sc = cB => uc.includes(cB),
      Mc = .25;
    const Pc = new class {
      constructor() {
        this.consumers = new Map, this.activeName = null, this.XB = new Array(Vc.ib).fill(!1), this.previousHeld = new Array(Vc.ib).fill(!1), this.consumedButtons = new Array(Vc.ib).fill(!1), this.suppressedReleases = new Array(Vc.ib).fill(!1), this.wakeOwned = new Array(Vc.ib).fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.peek = null, this.lastFrame = (0, Vc.E)()
      }
      register(cB) {
        return this.consumers.has(cB.name) && console.warn(`Controller consumer "${cB.name}" registered twice; the newer one replaces it.`), this.consumers.set(cB.name, cB), () => {
          var Bc;
          this.consumers.get(cB.name) === cB && (this.activeName === cB.name ? (this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()) : (null === (Bc = this.peek) || void 0 === Bc ? void 0 : Bc.over) === cB.name && (this.peek = null), this.consumers.delete(cB.name))
        }
      }
      getActiveConsumerName() {
        return this.activeName
      }
      isButtonHeld(cB) {
        return this.XB[(0, Vc.s)(cB)]
      }
      getLastFrame() {
        return this.lastFrame
      }
      clear() {
        this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()
      }
      reset() {
        this.deactivateCurrent(), this.activeName = null, this.XB = new Array(Vc.ib).fill(!1), this.previousHeld = new Array(Vc.ib).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.lastFrame = (0, Vc.E)()
      }
      dispatch(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.lastFrame = cB, this.previousHeld = this.XB, this.XB = (0, Vc.y)(cB.values, this.previousHeld);
        for (let rB = 0; rB < Vc.ib; rB++) this.suppressedReleases[rB] = !this.XB[rB] && this.consumedButtons[rB], this.XB[rB] || (this.consumedButtons[rB] = !1), this.wakeOwned[rB] && (this.XB[rB] ? (this.consumedButtons[rB] = !0, this.wakeOwned[rB] = !1) : cB.values[rB] < Vc.eb && (this.wakeOwned[rB] = !1));
        Math.hypot(cB.leftStick.x, cB.leftStick.y) < Mc && (this.leftStickConsumed = !1), Math.hypot(cB.rightStick.x, cB.rightStick.y) < Mc && (this.rightStickConsumed = !1);
        const Ic = this.pickActive();
        if ((null === Ic || void 0 === Ic ? void 0 : Ic.name) !== this.activeName) {
          var uc, sc, Pc, qB, Oc, Tc;
          const cB = this.activeName,
            Bc = {
              left: !this.leftStickConsumed,
              right: !this.rightStickConsumed
            },
            nc = null !== (uc = null === Ic || void 0 === Ic || null === (sc = Ic.peek) || void 0 === sc ? void 0 : sc.call(Ic)) && void 0 !== uc ? uc : null,
            rB = null === cB && !!nc && !(null === (Pc = this.consumers.get(nc.over)) || void 0 === Pc || !Pc.onPeekFrame),
            Mc = nc && (nc.over === cB || rB) ? nc : null,
            fc = null !== this.peek && this.peek.over === (null === Ic || void 0 === Ic ? void 0 : Ic.name) ? this.peek : null;
          this.deactivateCurrent(null !== Mc, null !== fc), this.activeName = null !== (qB = null === Ic || void 0 === Ic ? void 0 : Ic.name) && void 0 !== qB ? qB : null, null === cB || this.handOffPending || this.consumeAllHeld();
          const mB = null === (Oc = null !== Mc && void 0 !== Mc ? Mc : fc) || void 0 === Oc ? void 0 : Oc.stick;
          "left" === mB && Bc.left ? this.leftStickConsumed = !1 : "right" === mB && Bc.right && (this.rightStickConsumed = !1), this.peek = Mc, Ic || null === cB ? Ic && (null === (Tc = this.idleResume) || void 0 === Tc ? void 0 : Tc.name) === Ic.name && (this.idleResume.left && (this.leftStickConsumed = !1), this.idleResume.right && (this.rightStickConsumed = !1)) : this.idleResume = {
            name: cB,
            left: Bc.left && this.leftStickConsumed,
            right: Bc.right && this.rightStickConsumed
          }, Ic && (this.idleResume = null);
          for (let Ic = 0; Ic < Vc.ib; Ic++) this.previousHeld[Ic] && !this.XB[Ic] && (this.suppressedReleases[Ic] = !0)
        }
        var fc, mB;
        (this.handOffPending = !1, Ic) && (nc && !rB.has(Ic.name) && this.consumeWakePress(Ic), Ic.onFrame(this.buildInput(cB, Bc, nc)), this.peek && (null === (fc = this.consumers.get(this.peek.over)) || void 0 === fc || null === (mB = fc.onPeekFrame) || void 0 === mB || mB.call(fc, this.buildInput(cB, Bc, !1, this.peek.stick))))
      }
      consumeWakePress(cB) {
        for (let Ic = 0; Ic < Vc.ib; Ic++) {
          var Bc, nc;
          const rB = Vc.mb[Ic];
          (null !== (Bc = null === (nc = cB.wakePressActs) || void 0 === nc ? void 0 : nc.call(cB, rB)) && void 0 !== Bc ? Bc : uc.includes(rB)) || (this.XB[Ic] ? this.consumedButtons[Ic] = !0 : this.lastFrame.values[Ic] >= Vc.cb && (this.wakeOwned[Ic] = !0))
        }
      }
      pickActive() {
        for (const cB of Ic) {
          const Bc = this.consumers.get(cB);
          if (Bc && Bc.isActive()) return Bc
        }
        return null
      }
      deactivateCurrent() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var nc, Vc, Ic, rB;
        this.activeName && (null === (nc = this.consumers.get(this.activeName)) || void 0 === nc || null === (Vc = nc.onDeactivate) || void 0 === Vc || Vc.call(nc, cB));
        this.peek && !Bc && (null === (Ic = this.consumers.get(this.peek.over)) || void 0 === Ic || null === (rB = Ic.onDeactivate) || void 0 === rB || rB.call(Ic, !1));
        this.peek = null
      }
      consumeAllHeld() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.idleResume = null;
        for (let Ic = 0; Ic < Vc.ib; Ic++) this.XB[Ic] && (this.consumedButtons[Ic] = !0);
        const {
          leftStick: Bc,
          rightStick: nc
        } = this.lastFrame;
        this.leftStickConsumed = "left" !== cB && (this.leftStickConsumed || Math.hypot(Bc.x, Bc.y) >= Mc), this.rightStickConsumed = "right" !== cB && (this.rightStickConsumed || Math.hypot(nc.x, nc.y) >= Mc)
      }
      handOffHeldInput() {
        this.handOffPending = !0
      }
      consumeButton(cB) {
        const Bc = (0, Vc.s)(cB);
        this.XB[Bc] && (this.consumedButtons[Bc] = !0)
      }
      buildInput(cB, Bc, nc, Ic) {
        const rB = this.XB,
          uc = this.previousHeld,
          sc = Ic ? new Array(Vc.ib).fill(!0) : [...this.consumedButtons],
          Mc = Ic ? sc : [...this.suppressedReleases],
          Pc = !this.leftStickConsumed && (!Ic || "left" === Ic),
          qB = !this.rightStickConsumed && (!Ic || "right" === Ic);
        return {
          frame: cB,
          dtMs: Bc,
          isHeld: cB => {
            const Bc = (0, Vc.s)(cB);
            return rB[Bc] && !sc[Bc]
          },
          wasPressed: cB => {
            const Bc = (0, Vc.s)(cB);
            return rB[Bc] && !uc[Bc] && !sc[Bc]
          },
          wasReleased: cB => {
            const Bc = (0, Vc.s)(cB);
            return !rB[Bc] && uc[Bc] && !Mc[Bc]
          },
          value: Bc => {
            const nc = (0, Vc.s)(Bc);
            return sc[nc] ? 0 : cB.values[nc]
          },
          leftStick: Pc ? cB.leftStick : {
            x: 0,
            y: 0
          },
          rightStick: qB ? cB.rightStick : {
            x: 0,
            y: 0
          },
          wokeDevice: nc
        }
      }
    }
  },
  7064: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Oc.c,
      g: () => Oc.f,
      k: () => Uc,
      n: () => bB,
      o: () => Zc,
      s: () => Qc
    });
    var Vc = nc(73),
      Ic = nc(35),
      rB = nc(1252),
      uc = nc(51),
      sc = nc(7072),
      Mc = nc(7044),
      Pc = nc(7061),
      qB = nc(7038),
      Oc = nc(1644),
      Tc = nc(7079);
    const fc = {
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
        TV: {}
      },
      mB = "controllerSettings",
      ec = ["TV", "promptFamily", "hideButtonHints", "swapSticks", "swapConfirmBack", "leaderboardButton"],
      tB = ["auto", ...sc.b],
      Sc = (cB, Bc) => "string" === typeof Bc && cB.includes(Bc),
      yB = cB => Bc => "number" === typeof Bc && Number.isFinite(Bc) ? (0, Tc.s)(Bc, cB) : void 0,
      zB = cB => "boolean" === typeof cB ? cB : void 0,
      pc = cB => Bc => Sc(cB, Bc) ? Bc : void 0,
      hc = {
        lookSensitivityX: yB(Tc.ib),
        lookSensitivityY: yB(Tc.ib),
        aimLookSensitivity: yB(Tc.i),
        invertLookX: zB,
        invertLookY: zB,
        lookCurve: pc(Mc.ab),
        lookDeadzone: yB(Tc.x),
        moveDeadzone: yB(Tc.x),
        swapSticks: zB,
        autoSprint: zB,
        sneakMode: pc(["toggle", "hold"]),
        tapHoldTime: pc(["short", "medium", "long"]),
        attackMode: pc(["hold", "toggle"]),
        promptFamily: pc(tB),
        hideButtonHints: zB,
        vibration: zB,
        cursorSpeed: yB(Tc.t),
        cursorMagnetism: zB,
        buttonRepeat: pc(Mc.u),
        largePointer: zB,
        menuBackToCategories: zB,
        swapConfirmBack: zB,
        menuNavigation: pc(["hybrid", "focus", "cursor"]),
        inventoryNavigation: pc(["hybrid", "slot", "cursor"]),
        quickChat: pc(["wheel", "off"]),
        leaderboardButton: pc(["shop", "leaderboard"]),
        gyroAiming: zB,
        gyroSensitivity: yB(Tc.M),
        gyroActivation: pc(["always", "aiming", "button"]),
        gyroButton: pc(Mc.mb),
        emoteButton: pc(["tapHold", "wheel"])
      },
      aB = [{
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
      lc = cB => {
        const Bc = {};
        if ("object" !== typeof cB || null === cB) return Bc;
        for (const [nc, Vc] of Object.entries(cB)) Object.prototype.hasOwnProperty.call(Pc.g, nc) && Sc(Mc.mb, Vc) && (Bc[nc] = Vc);
        return Bc
      },
      Yc = cB => {
        const Bc = {};
        for (const nc of Object.keys(fc))("TV" === nc ? Object.keys(cB.TV).length > 0 : cB[nc] !== fc[nc]) && (Bc[nc] = cB[nc]);
        0 !== Object.keys(Bc).length ? uc.h.setItem(mB, Bc) : uc.h.removeItem(mB)
      };
    let Lc = (() => {
        const cB = uc.h.getItem(mB),
          Bc = (cB => {
            const Bc = "object" === typeof cB && null !== cB ? cB : {},
              nc = {
                ...fc,
                TV: lc(Bc.TV)
              };
            for (const Ic of Object.keys(hc)) {
              const cB = hc[Ic](Bc[Ic]);
              void 0 !== cB && (nc[Ic] = cB)
            }
            const Vc = Object.keys(Bc).filter((cB => !!Object.prototype.hasOwnProperty.call(fc, cB) && ("TV" === cB ? "object" !== typeof Bc.TV || null === Bc.TV || Object.keys(Bc.TV).length !== Object.keys(nc.TV).length : nc[cB] !== Bc[cB])));
            return Vc.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${Vc.join(", ")}`), nc
          })(cB);
        return null !== cB && void 0 !== cB && Yc(Bc), Bc
      })(),
      gB = {
        ...Lc,
        ...(() => {
          if ("undefined" === typeof window) return {};
          const cB = {},
            Bc = new URLSearchParams(window.location.search);
          for (const {
              param: nc,
              key: Vc
            }
            of aB) {
            const Ic = hc[Vc](Bc.get(nc));
            void 0 !== Ic && (cB[Vc] = Ic)
          }
          return cB
        })()
      };
    const Uc = () => gB,
      bB = () => {
        var cB, Bc;
        const nc = Uc().promptFamily;
        return "auto" !== nc ? nc : null !== (cB = null === (Bc = qB.h.getActivePad()) || void 0 === Bc ? void 0 : Bc.family) && void 0 !== cB ? cB : "xbox"
      },
      Zc = cB => {
        const Bc = gB;
        Lc = {
          ...Lc,
          ...cB
        }, Yc(Lc), gB = {
          ...gB,
          ...cB
        }, (cB => {
          Ic.i.Vu(Oc.f, gB), ec.some((Bc => cB[Bc] !== gB[Bc])) && Ic.i.Vu(Oc.c, gB)
        })(Bc)
      },
      Qc = () => {
        const [cB, Bc] = (0, Vc.useState)(gB);
        return (0, rB.f)(Oc.f, Bc), cB
      }
  },
  7567: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Ic
    });
    const Vc = new Set(["Alt", "AltGraph", "Meta", "OS", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "BrowserBack", "BrowserForward", "BrowserHome", "GoBack", "LaunchApplication1", "LaunchApplication2", "LaunchMail", "PrintScreen", "Unidentified"]),
      Ic = cB => Vc.has(cB)
  },
  7038: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => fc.b,
      h: () => Sc
    });
    var Vc = nc(7044),
      Ic = nc(7052);
    const rB = .1,
      uc = .3;
    class sc {
      constructor() {
        this.deadzone = 0, this.anchor = null, this.steadyMs = 0, this.lastMs = null, this.returning = !0, this.anchorLearned = !1
      }
      observe(cB, Bc) {
        const nc = null === this.lastMs ? 0 : Math.min(Math.max(0, Bc - this.lastMs), 100);
        this.lastMs = Bc;
        const Vc = Math.hypot(cB.x, cB.y);
        if (Vc >= uc) return this.anchor = null, void(this.returning = !0);
        Vc >= rB || (this.returning = !1);
        const Ic = this.anchor;
        if (!Ic || Math.hypot(cB.x - Ic.x, cB.y - Ic.y) > .03) return this.anchorLearned && (this.returning = !1), this.anchor = {
          x: cB.x,
          y: cB.y
        }, this.steadyMs = 0, void(this.anchorLearned = !1);
        if (this.steadyMs += nc, this.steadyMs < 1e3) return;
        const sc = Math.max(Vc, Math.hypot(Ic.x, Ic.y));
        sc < rB ? this.deadzone = 0 : this.returning && (this.deadzone = sc + .05, this.anchorLearned = !0)
      }
      getDeadzone() {
        return this.deadzone
      }
      apply(cB) {
        return Math.hypot(cB.x, cB.y) < this.deadzone ? {
          x: 0,
          y: 0
        } : cB
      }
    }
    const Mc = (cB, Bc) => {
        var nc, Vc;
        return null !== (nc = cB && (null === (Vc = Object.getOwnPropertyDescriptor(cB, Bc)) || void 0 === Vc ? void 0 : Vc.get)) && void 0 !== nc ? nc : null
      },
      Pc = cB => {
        const Bc = cB.vendorName;
        return "string" === typeof Bc ? Bc : void 0
      },
      qB = ((cB, Bc) => {
        const nc = Mc(cB, "index"),
          Vc = Mc(cB, "id"),
          Ic = Mc(cB, "connected"),
          rB = Mc(cB, "mapping"),
          uc = Mc(cB, "buttons"),
          sc = Mc(cB, "axes"),
          qB = Mc(Bc, "pressed"),
          Oc = Mc(Bc, "value");
        return nc && Vc && Ic && rB && uc && sc && qB && Oc ? cB => {
          const Bc = uc.call(cB),
            Mc = sc.call(cB),
            Tc = {
              index: Number(nc.call(cB)),
              id: String(Vc.call(cB)),
              connected: !0 === Ic.call(cB),
              mapping: String(rB.call(cB)),
              buttons: [],
              axes: [],
              vendorName: Pc(cB)
            };
          for (let nc = 0; nc < Bc.length; nc++) Tc.buttons.push({
            pressed: !0 === qB.call(Bc[nc]),
            value: Number(Oc.call(Bc[nc]))
          });
          for (let nc = 0; nc < Mc.length; nc++) Tc.axes.push(Number(Mc[nc]));
          return Tc
        } : null
      })("undefined" === typeof Gamepad ? null : Gamepad.prototype, "undefined" === typeof GamepadButton ? null : GamepadButton.prototype),
      Oc = "undefined" === typeof Navigator ? null : Navigator.prototype.getGamepads;
    var Tc = nc(1240),
      fc = nc(1644);
    const mB = uc,
      ec = cB => {
        const Bc = new Array(Vc.ib).fill(0);
        for (let nc = 0; nc < Vc.ib && nc < cB.buttons.length; nc++) {
          const Ic = cB.buttons[nc];
          Bc[nc] = Ic.pressed && !(0, Vc.Z)(nc) ? Math.max(Ic.value, Vc.I) : Ic.value
        }
        return Bc
      },
      tB = (cB, Bc) => {
        var nc, Vc;
        return {
          x: null !== (nc = cB.axes[Bc]) && void 0 !== nc ? nc : 0,
          y: null !== (Vc = cB.axes[Bc + 1]) && void 0 !== Vc ? Vc : 0
        }
      };
    const Sc = new class {
      constructor(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qB;
        this.readGamepads = cB, this.requireTrustedPads = Bc, this.nativeReader = nc, this.running = !1, this.listening = !1, this.rafId = 0, this.lastTimestampMs = 0, this.activeInfo = null, this.slots = [], this.trustedIndices = new Set, this.warnedNonStandardIds = new Set, this.loggedReadError = !1, this.frameListeners = new Set, this.connectionListeners = new Set, this.anyPadConnected = !1, this.connectedListeners = new Set, this.handleConnectionEvent = cB => {
          cB.isTrusted && this.trustedIndices.add(cB.gamepad.index), this.wake()
        }, this.handleDisconnectionEvent = cB => {
          this.trustedIndices.delete(cB.gamepad.index)
        }, this.cn = cB => {
          if (this.rafId = 0, !this.running) return;
          const Bc = 0 === this.lastTimestampMs ? 16 : Math.min(100, cB - this.lastTimestampMs);
          this.lastTimestampMs = cB;
          try {
            this.poll(cB, Bc)
          } finally {
            this.anyPadConnected && (this.rafId = requestAnimationFrame(this.cn))
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
      onFrame(cB) {
        return this.frameListeners.add(cB), () => {
          this.frameListeners.delete(cB)
        }
      }
      onActivePadChanged(cB) {
        return this.connectionListeners.add(cB), () => {
          this.connectionListeners.delete(cB)
        }
      }
      getActivePad() {
        return this.activeInfo
      }
      hasConnectedPad() {
        return this.anyPadConnected
      }
      onConnectedPadsChanged(cB) {
        return this.connectedListeners.add(cB), () => {
          this.connectedListeners.delete(cB)
        }
      }
      getActiveGamepad() {
        if (!this.activeInfo) return null;
        const cB = this.readPads()[this.activeInfo.index],
          Bc = cB ? this.readPad(cB) : null;
        return Bc && Bc.id === this.activeInfo.id ? cB : null
      }
      poll(cB, Bc) {
        var nc, Ic;
        const rB = this.readPads();
        let uc = null,
          Mc = !1;
        const Pc = [],
          qB = Math.max(rB.length, this.slots.length);
        for (let zB = 0; zB < qB; zB++) {
          var Oc;
          const Bc = zB < rB.length ? rB[zB] : null,
            nc = Bc ? this.readPad(Bc) : null;
          if (!nc || !nc.connected || !this.isUsable(nc)) {
            this.slots[zB] = null;
            continue
          }
          let Ic = this.slots[zB];
          Ic && Ic.id === nc.id || (Ic = {
            id: nc.id,
            XB: [],
            leftSettled: !1,
            rightSettled: !1,
            leftRest: new sc,
            rightRest: new sc
          }, this.slots[zB] = Ic);
          const qB = tB(nc, 0),
            Tc = tB(nc, 2);
          !Ic.leftSettled && Math.hypot(qB.x, qB.y) < mB && (Ic.leftSettled = !0), !Ic.rightSettled && Math.hypot(Tc.x, Tc.y) < mB && (Ic.rightSettled = !0), Ic.leftRest.observe(qB, cB), Ic.rightRest.observe(Tc, cB);
          const fc = ec(nc),
            Sc = (0, Vc.y)(fc, Ic.XB),
            yB = Ic.XB,
            pc = Sc.map(((cB, Bc) => cB && !yB[Bc]));
          Ic.XB = Sc;
          const hc = {
            pad: nc,
            slot: Ic,
            values: fc
          };
          zB === (null === (Oc = this.activeInfo) || void 0 === Oc ? void 0 : Oc.index) && nc.id === this.activeInfo.id ? (uc = hc, Mc = pc.includes(!0)) : pc.includes(!0) && Pc.push({
            polled: hc,
            rose: pc
          })
        }
        const Tc = this.slots.some((cB => null !== cB));
        if (Tc !== this.anyPadConnected) {
          this.anyPadConnected = Tc;
          for (const cB of this.connectedListeners) cB()
        }
        const fc = null !== (nc = null === (Ic = uc) || void 0 === Ic ? void 0 : Ic.slot.XB) && void 0 !== nc ? nc : [],
          Sc = Mc ? void 0 : Pc.find((cB => {
            let {
              rose: Bc
            } = cB;
            return Bc.some(((cB, Bc) => cB && !fc[Bc]))
          }));
        if (Sc ? (uc = Sc.polled, this.setActive(Sc.polled.pad)) : this.activeInfo && !uc && this.setActive(null), !uc || !this.activeInfo) return;
        const yB = ((cB, Bc) => {
          let {
            pad: nc,
            slot: Ic,
            values: rB
          } = cB;
          const uc = (0, Vc.E)(Bc);
          return uc.values = rB, Ic.leftSettled && (uc.leftStick = Ic.leftRest.apply(tB(nc, 0))), Ic.rightSettled && (uc.rightStick = Ic.rightRest.apply(tB(nc, 2))), uc
        })(uc, cB);
        for (const Vc of this.frameListeners) Vc(yB, Bc, this.activeInfo)
      }
      readPad(cB) {
        if (this.nativeReader) try {
          return this.nativeReader(cB)
        } catch {
          if (this.requireTrustedPads) return null
        }
        return this.requireTrustedPads ? null : (cB => {
          const Bc = cB;
          return {
            index: Bc.index,
            id: Bc.id,
            connected: Bc.connected,
            mapping: Bc.mapping,
            buttons: Array.from(Bc.buttons, (cB => ({
              pressed: cB.pressed,
              value: cB.value
            }))),
            axes: Array.from(Bc.axes),
            vendorName: Pc(cB)
          }
        })(cB)
      }
      isUsable(cB) {
        return !(0, Tc.e)(cB.id) && ("standard" !== cB.mapping ? (this.warnedNonStandardIds.has(cB.id) || (this.warnedNonStandardIds.add(cB.id), console.warn(`Controller "${cB.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.trustedIndices.has(cB.index))
      }
      setActive(cB) {
        this.activeInfo = cB ? {
          index: cB.index,
          id: cB.id,
          family: (0, Ic.b)(cB.id, cB.vendorName)
        } : null;
        for (const Bc of this.connectionListeners) Bc(this.activeInfo)
      }
      readPads() {
        try {
          return this.readGamepads()
        } catch (cB) {
          return this.loggedReadError || (this.loggedReadError = !0, console.warn("Reading gamepads failed; controller input is unavailable.", cB)), []
        }
      }
      wake() {
        this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.cn))
      }
    }((() => Oc ? Oc.call(navigator) : []), !0);
    Sc.listenForConnections()
  },
  7574: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Vc
    });
    const Vc = {
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
  7646: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => uc,
      d: () => sc
    });
    var Vc = nc(35),
      Ic = nc(7634);
    let rB = !1;
    const uc = () => rB,
      sc = cB => {
        cB !== rB && (rB = cB, Vc.i.Vu(Ic.k, rB))
      }
  },
  7638: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => sc,
      g: () => Mc
    });
    var Vc = nc(35),
      Ic = nc(7634);
    let rB = null,
      uc = 0;
    const sc = () => rB,
      Mc = cB => {
        null === cB && null === rB || (rB = null === cB ? null : {
          id: ++uc,
          holdMs: cB
        }, Vc.i.Vu(Ic.m, rB))
      }
  },
  7654: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => uc,
      h: () => sc
    });
    var Vc = nc(35),
      Ic = nc(7634);
    let rB = !1;
    const uc = () => rB,
      sc = cB => {
        cB !== rB && (rB = cB, Vc.i.Vu(Ic.q, rB))
      }
  },
  7742: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => uc,
      f: () => sc
    });
    var Vc = nc(35),
      Ic = nc(7634);
    let rB = !1;
    const uc = () => rB,
      sc = cB => {
        cB !== rB && (rB = cB, Vc.i.Vu(Ic.r, rB))
      }
  },
  7672: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Vc
    });
    class Vc {
      constructor() {
        this.downAtMs = null
      }
      update(cB, Bc, nc, Vc) {
        if (cB) return this.downAtMs = nc, null;
        if (null === this.downAtMs) return null;
        const Ic = nc - this.downAtMs >= Vc;
        return Bc ? Ic ? (this.downAtMs = null, "hold") : null : (this.downAtMs = null, Ic ? "hold" : "tap")
      }
      release() {
        this.downAtMs = null
      }
    }
  },
  7113: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Oc,
      f: () => Tc,
      g: () => sc,
      k: () => zB,
      m: () => yB
    });
    var Vc = nc(51),
      Ic = nc(7072),
      rB = nc(7044);
    const uc = (() => {
        try {
          return nc(7117)
        } catch {
          return null
        }
      })(),
      sc = [...rB.mb, "LeftStick", "RightStick"],
      Mc = new Map,
      Pc = {
        xbox: "xbox",
        playstation: "playstation",
        nintendo: "nintendo",
        steamdeck: "steamdeck",
        generic: "xbox"
      },
      qB = (new Set(Object.values(Pc)), {
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
      Oc = (cB, Bc) => {
        var nc, Vc;
        return null !== (nc = null === (Vc = qB[Pc[cB]]) || void 0 === Vc ? void 0 : Vc[Bc]) && void 0 !== nc ? nc : 1
      },
      Tc = (cB, Bc) => {
        const nc = `./${Pc[cB]}/${Bc}.svg`;
        let Vc = Mc.get(nc);
        return void 0 === Vc && (Vc = uc ? uc(nc) : "", Mc.set(nc, Vc)), Vc
      },
      fc = new Set,
      mB = [],
      ec = cB => {
        if (!fc.has(cB)) {
          fc.add(cB);
          for (const Bc of sc) {
            const nc = Tc(cB, Bc);
            if (nc) {
              const cB = new Image;
              cB.crossOrigin = "anonymous", cB.src = nc, mB.push(cB)
            }
          }
        }
      },
      tB = "controllerGlyphFamily";
    let Sc = null;
    const yB = cB => {
        cB !== Sc && (Sc = cB, Vc.h.setItem(tB, cB), ec(cB))
      },
      zB = () => {
        const cB = Vc.h.getItem(tB);
        (0, Ic.f)(cB) && cB !== Sc && (Sc = cB, ec(cB))
      }
  },
  7760: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Wc,
      g: () => wc
    });
    var Vc = nc(73),
      Ic = nc(35),
      rB = nc(1252),
      uc = nc(7059),
      sc = nc(7038),
      Mc = nc(7090),
      Pc = nc(7064);
    const qB = {
        x: 0,
        y: 0,
        z: 0
      },
      Oc = Math.PI / 180,
      Tc = cB => Math.hypot(cB.x, cB.y, cB.z),
      fc = (cB, Bc) => ({
        x: cB.x * Bc,
        y: cB.y * Bc,
        z: cB.z * Bc
      }),
      mB = (cB, Bc) => ({
        x: cB.x + Bc.x,
        y: cB.y + Bc.y,
        z: cB.z + Bc.z
      }),
      ec = (cB, Bc) => ({
        x: cB.x - Bc.x,
        y: cB.y - Bc.y,
        z: cB.z - Bc.z
      }),
      tB = cB => {
        const Bc = Tc(cB);
        return 0 === Bc ? qB : fc(cB, 1 / Bc)
      },
      Sc = cB => ({
        min: {
          ...cB
        },
        max: {
          ...cB
        }
      }),
      yB = (cB, Bc) => ({
        min: {
          x: Math.min(cB.min.x, Bc.x),
          y: Math.min(cB.min.y, Bc.y),
          z: Math.min(cB.min.z, Bc.z)
        },
        max: {
          x: Math.max(cB.max.x, Bc.x),
          y: Math.max(cB.max.y, Bc.y),
          z: Math.max(cB.max.z, Bc.z)
        }
      }),
      zB = (cB, Bc) => cB.max.x - cB.min.x <= Bc && cB.max.y - cB.min.y <= Bc && cB.max.z - cB.min.z <= Bc;
    class pc {
      constructor() {
        this.bias = qB, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = qB, this.windowSec = 0
      }
      update(cB) {
        const Bc = this.gyroRange ? yB(this.gyroRange, cB.gyro) : Sc(cB.gyro),
          nc = cB.accel ? this.accelRange ? yB(this.accelRange, cB.accel) : Sc(cB.accel) : null;
        if (!zB(Bc, 1) || nc && !zB(nc, .01)) return void this.restartWindow(cB);
        if (this.gyroRange = Bc, this.accelRange = nc, this.sum = mB(this.sum, fc(cB.gyro, cB.dtSec)), this.windowSec += cB.dtSec, this.windowSec < 1) return;
        const Vc = fc(this.sum, 1 / this.windowSec);
        if (Tc(Vc) > 5) return;
        const Ic = ec(Vc, this.bias);
        let rB = 0;
        !this.calibrated || this.windowSec >= 3 ? rB = 1 : Tc(Ic) <= 1 && (rB = Math.min(1, cB.dtSec / 1)), this.bias = mB(this.bias, fc(Ic, rB)), this.calibrated = this.calibrated || rB > 0
      }
      correct(cB) {
        return ec(cB, this.bias)
      }
      getBias() {
        return this.bias
      }
      isCalibrated() {
        return this.calibrated
      }
      reset() {
        this.bias = qB, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = qB, this.windowSec = 0
      }
      restartWindow(cB) {
        this.gyroRange = Sc(cB.gyro), this.accelRange = cB.accel ? Sc(cB.accel) : null, this.sum = qB, this.windowSec = 0
      }
    }
    class hc {
      constructor() {
        this.down = null
      }
      update(cB, Bc, nc) {
        const Vc = tB(fc(Bc, -1));
        if (!this.down) return this.down = Vc, Vc;
        const Ic = fc(cB, Oc * nc),
          rB = this.down,
          uc = {
            x: rB.x - (Ic.y * rB.z - Ic.z * rB.y),
            y: rB.y - (Ic.z * rB.x - Ic.x * rB.z),
            z: rB.z - (Ic.x * rB.y - Ic.y * rB.x)
          },
          sc = 0 === Tc(Vc) ? 0 : Math.min(1, nc / .25);
        var Mc, Pc;
        return this.down = tB((Pc = sc, mB(Mc = uc, fc(ec(Vc, Mc), Pc)))), this.down
      }
      reset() {
        this.down = null
      }
    }
    class aB {
      constructor() {
        this.entries = [], this.windowSec = 0
      }
      apply(cB, Bc, nc) {
        const Vc = Math.hypot(cB, Bc),
          Ic = Math.max(0, Math.min(1, (Vc - 2) / 2)),
          rB = {
            yaw: cB * (1 - Ic),
            pitch: Bc * (1 - Ic),
            dtSec: nc
          };
        for (this.entries.push(rB), this.windowSec += nc; this.entries.length > 1 && this.windowSec - this.entries[0].dtSec >= .125;) this.windowSec -= this.entries[0].dtSec, this.entries.shift();
        let uc = 0,
          sc = 0;
        for (const Pc of this.entries) uc += Pc.yaw * Pc.dtSec, sc += Pc.pitch * Pc.dtSec;
        const Mc = this.windowSec > 0 ? {
          yaw: uc / this.windowSec,
          pitch: sc / this.windowSec
        } : {
          yaw: rB.yaw,
          pitch: rB.pitch
        };
        return {
          yaw: cB * Ic + Mc.yaw,
          pitch: Bc * Ic + Mc.pitch
        }
      }
      reset() {
        this.entries = [], this.windowSec = 0
      }
    }
    class lc {
      constructor() {
        this.calibrator = new pc, this.gravity = new hc, this.smoother = new aB
      }
      process(cB, Bc, nc) {
        const Vc = Math.max(0, Math.min(.05, Bc));
        this.calibrator.update({
          ...cB,
          dtSec: Vc
        });
        const Ic = this.calibrator.correct(cB.gyro);
        let rB = Ic.y;
        "player" === nc && cB.accel && (rB = ((cB, Bc) => {
          const nc = cB.y * Bc.y + cB.z * Bc.z;
          return -Math.sign(nc) * Math.min(1.41 * Math.abs(nc), Math.hypot(cB.y, cB.z))
        })(Ic, this.gravity.update(Ic, cB.accel, Vc)));
        const uc = this.smoother.apply(rB, Ic.x, Vc),
          sc = ((cB, Bc) => {
            const nc = Math.hypot(cB, Bc);
            if (nc >= 1) return {
              yaw: cB,
              pitch: Bc
            };
            const Vc = nc / 1;
            return {
              yaw: cB * Vc,
              pitch: Bc * Vc
            }
          })(uc.yaw, uc.pitch);
        return {
          yawDeg: sc.yaw * Vc,
          pitchDeg: sc.pitch * Vc
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
    const Yc = (cB, Bc) => {
      var nc, Vc, Ic;
      const rB = Bc * Oc,
        uc = null !== (nc = cB.beta) && void 0 !== nc ? nc : 0,
        sc = null !== (Vc = cB.gamma) && void 0 !== Vc ? Vc : 0;
      return {
        x: uc * Math.cos(rB) - sc * Math.sin(rB),
        y: uc * Math.sin(rB) + sc * Math.cos(rB),
        z: null !== (Ic = cB.alpha) && void 0 !== Ic ? Ic : 0
      }
    };
    var Lc = nc(7769);
    class gB {
      constructor(cB, Bc, nc) {
        this.hid = cB, this.sink = Bc, this.onControllersChanged = nc, this.controllers = new Map, this.running = !1, this.openedCount = 0, this.opening = new Set, this.disconnectedWhileOpening = new Set, this.switchPacketCounter = 0, this.onConnect = cB => {
          this.openController(cB.device).catch((cB => {
            console.warn("Could not open motion controller", cB)
          }))
        }, this.onDisconnect = cB => {
          this.opening.has(cB.device) && this.disconnectedWhileOpening.add(cB.device);
          const Bc = this.controllers.get(cB.device);
          Bc && (this.forget(Bc), this.onControllersChanged())
        }
      }
      async start() {
        if (this.running) return;
        this.running = !0, this.hid.addEventListener("connect", this.onConnect), this.hid.addEventListener("disconnect", this.onDisconnect);
        const cB = await this.hid.getDevices();
        for (const Bc of cB) await this.openController(Bc).catch((cB => {
          console.warn("Could not open motion controller", cB)
        }))
      }
      stop() {
        this.running = !1, this.hid.removeEventListener("connect", this.onConnect), this.hid.removeEventListener("disconnect", this.onDisconnect);
        for (const cB of [...this.controllers.values()]) this.forget(cB);
        this.onControllersChanged()
      }
      async request() {
        const cB = await this.hid.requestDevice({
          filters: Lc.l
        });
        let Bc = 0;
        for (const nc of cB) await this.openController(nc).catch((cB => {
          console.warn("Could not open motion controller", cB), Bc++
        }));
        return Bc
      }
      async hasGrantedController() {
        return (await this.hid.getDevices()).some((cB => null !== (0, Lc.h)(cB.vendorId, cB.productId)))
      }
      getConnectedKinds() {
        return [...this.controllers.values()].map((cB => cB.kind))
      }
      forget(cB) {
        cB.device.removeEventListener("inputreport", cB.onReport), this.controllers.get(cB.device) === cB && this.controllers.delete(cB.device)
      }
      async openController(cB) {
        const Bc = (0, Lc.h)(cB.vendorId, cB.productId);
        if (!Bc || !this.running || this.controllers.has(cB) || this.opening.has(cB)) return;
        this.opening.add(cB);
        let nc = !1;
        try {
          cB.opened || await cB.open()
        } finally {
          this.opening.delete(cB), nc = this.disconnectedWhileOpening.delete(cB)
        }
        if (nc) return void cB.close().catch((cB => {
          console.debug("Could not close an unplugged motion controller", cB)
        }));
        if (!this.running) return;
        const Vc = {
          device: cB,
          kind: Bc,
          lastClock: null,
          lastEventMs: null,
          lastReadingMs: -1 / 0,
          openedOrder: this.openedCount++,
          onReport: cB => {
            this.onReport(Vc, cB)
          }
        };
        this.controllers.set(cB, Vc), cB.addEventListener("inputreport", Vc.onReport), this.onControllersChanged();
        try {
          await this.enableMotion(Vc)
        } catch (Ic) {
          console.warn(`Could not turn on motion for ${Bc}`, Ic), this.controllers.get(cB) === Vc && (this.forget(Vc), this.onControllersChanged())
        }
      }
      async enableMotion(cB) {
        let {
          device: Bc,
          kind: nc
        } = cB;
        if ((0, Lc.j)(nc))
          for (const Vc of Lc.x[nc]) await Bc.receiveFeatureReport(Vc).catch((cB => {
            console.debug(`Motion controller feature report ${Vc} unavailable`, cB)
          }));
        else
          for (let Vc = 0; Vc < 2; Vc++)
            for (const {
                subcommand: cB,
                args: nc
              }
              of Lc.A) await Bc.sendReport(Lc.E, (0, Lc.d)(this.switchPacketCounter++, cB, nc)), await new Promise((cB => {
              setTimeout(cB, 60)
            }))
      }
      onReport(cB, Bc) {
        const nc = (0, Lc.v)(cB.kind, Bc.reportId, Bc.data, cB.device.productId);
        if (!nc) return;
        const Vc = null === cB.lastEventMs ? 0 : (Bc.timeStamp - cB.lastEventMs) / 1e3;
        cB.lastEventMs = Bc.timeStamp;
        let Ic = nc.dtSec;
        if (null !== Ic && Vc > 0 && (Ic = Math.max(.001, Math.min(.017, Vc / nc.readings.length))), null === Ic && null !== nc.sensorClock && (0, Lc.j)(cB.kind)) {
          const Bc = (0, Lc.w)(cB.kind, cB.lastClock, nc.sensorClock);
          cB.lastClock = nc.sensorClock, Ic = 0 === Bc ? null : Bc
        }
        if (cB.lastReadingMs = Bc.timeStamp, this.isPreferred(cB, Bc.timeStamp))
          for (const uc of nc.readings) {
            var rB;
            this.sink(uc, null !== (rB = Ic) && void 0 !== rB ? rB : Vc, `hid${cB.openedOrder}`)
          }
      }
      isPreferred(cB, Bc) {
        const nc = cB => 1e6 * Lc.t[cB.kind] + cB.openedOrder;
        for (const Vc of this.controllers.values())
          if (Vc !== cB && Bc - Vc.lastReadingMs < 500 && nc(Vc) < nc(cB)) return !1;
        return !0
      }
    }
    var Uc = nc(107);
    const bB = () => DeviceMotionEvent,
      Zc = () => "undefined" !== typeof window && "undefined" !== typeof DeviceMotionEvent && window.isSecureContext && (0, Uc.isMobile)(),
      Qc = () => {
        var cB;
        const Bc = null === (cB = window.screen.orientation) || void 0 === cB ? void 0 : cB.angle;
        return "number" === typeof Bc ? Bc : "number" === typeof window.orientation ? window.orientation : 0
      };
    class Cc {
      constructor(cB, Bc) {
        this.sink = cB, this.onStateChanged = Bc, this.state = "off", this.lastEventMs = null, this.noSensorTimer = null, this.wanted = !1, this.permissionRequest = null, this.granted = !1, this.onGesture = () => {
          this.requestPermission().catch((cB => {
            console.warn("Could not enable the motion sensor", cB)
          }))
        }, this.onMotion = cB => {
          const Bc = cB.rotationRate;
          if (!Bc || null === Bc.alpha && null === Bc.beta && null === Bc.gamma) return;
          const nc = null === this.lastEventMs ? 0 : (cB.timeStamp - this.lastEventMs) / 1e3;
          this.lastEventMs = cB.timeStamp, this.clearNoSensorTimer(), this.setState("on"), this.sink({
            gyro: Yc(Bc, Qc()),
            accel: null
          }, nc, "phone")
        }
      }
      getState() {
        return this.state
      }
      start() {
        if (this.wanted = !0, "off" === this.state) return "function" !== typeof bB().requestPermission || this.granted ? void this.listen() : (this.setState("needsPermission"), void this.armGestureRequest())
      }
      requestPermission() {
        return this.permissionRequest || (this.permissionRequest = this.askPermission().finally((() => {
          this.permissionRequest = null
        }))), this.permissionRequest
      }
      async askPermission() {
        const cB = bB().requestPermission;
        if (!this.wanted) return;
        if ("function" !== typeof cB) return void this.listen();
        let Bc;
        this.disarmGestureRequest();
        try {
          Bc = await cB.call(DeviceMotionEvent)
        } catch (nc) {
          throw this.wanted && "needsPermission" === this.state && this.armGestureRequest(), nc
        }
        this.wanted && ("granted" === Bc ? (this.granted = !0, this.listen()) : this.setState("denied"))
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
      setState(cB) {
        this.state !== cB && (this.state = cB, this.onStateChanged())
      }
    }
    const vB = "controllerGyroStatusChanged",
      Dc = {
        QBc: 0,
        CBc: 0
      },
      Nc = cB => {
        var Bc, nc;
        return "undefined" === typeof document || (null === (Bc = null === (nc = document.featurePolicy) || void 0 === nc ? void 0 : nc.allowsFeature(cB)) || void 0 === Bc || Bc)
      };
    class Ec {
      constructor() {
        this.processor = new lc, this.hid = void 0, this.hidBlocked = void 0, this.phone = void 0, this.phoneBlocked = void 0, this.source = null, this.pendingYawDeg = 0, this.pendingPitchDeg = 0, this.lastDrainMs = -1 / 0, this.lastHidReadingMs = -1 / 0, this.running = !1, this.phoneRunning = !1, this.syncWithSettings = cB => {
          const Bc = cB.gyroAiming && sc.h.hasConnectedPad();
          var nc, Vc;
          Bc !== this.phoneRunning && (this.phoneRunning = Bc, Bc ? null === (nc = this.phone) || void 0 === nc || nc.start() : null === (Vc = this.phone) || void 0 === Vc || Vc.stop());
          if (cB.gyroAiming !== this.running) {
            var Ic, rB;
            if (this.running = cB.gyroAiming, this.running) null === (Ic = this.hid) || void 0 === Ic || Ic.start().catch((cB => {
              console.warn("Could not open motion controllers", cB)
            }));
            else null === (rB = this.hid) || void 0 === rB || rB.stop(), this.processor.reset(), this.source = null, this.discardPending();
            this.publishStatus()
          }
        }, this.publishStatus = () => {
          Ic.i.Vu(vB, this.getStatus())
        };
        const cB = (() => {
            var cB;
            return "undefined" !== typeof navigator && window.isSecureContext && null !== (cB = navigator.hid) && void 0 !== cB ? cB : null
          })(),
          Bc = Nc("hid");
        this.hidBlocked = null !== cB && !Bc, this.hid = cB && Bc ? new gB(cB, ((cB, Bc, nc) => {
          this.lastHidReadingMs = performance.now(), this.feed(cB, Bc, "player", nc)
        }), this.publishStatus) : null;
        const nc = Nc("accelerometer") && Nc("gyroscope");
        this.phoneBlocked = Zc() && !nc, this.phone = Zc() && nc ? new Cc(((cB, Bc, nc) => {
          performance.now() - this.lastHidReadingMs >= 500 && this.feed(cB, Bc, "local", nc)
        }), this.publishStatus) : null, Ic.i.subscribe(Pc.g, this.syncWithSettings), sc.h.onConnectedPadsChanged((() => {
          this.syncWithSettings((0, Pc.k)()), this.publishStatus()
        })), this.syncWithSettings((0, Pc.k)())
      }
      isSupported() {
        return null !== this.hid || null !== this.phone
      }
      getStatus() {
        var cB, Bc, nc, Vc;
        return {
          hidSupported: null !== this.hid,
          hidBlocked: this.hidBlocked,
          phoneSupported: null !== this.phone,
          phoneBlocked: this.phoneBlocked,
          controllers: null !== (cB = null === (Bc = this.hid) || void 0 === Bc ? void 0 : Bc.getConnectedKinds()) && void 0 !== cB ? cB : [],
          phoneMotion: null !== (nc = null === (Vc = this.phone) || void 0 === Vc ? void 0 : Vc.getState()) && void 0 !== nc ? nc : "off",
          padConnected: sc.h.hasConnectedPad()
        }
      }
      async connectController() {
        return this.hid ? this.hid.request() : 0
      }
      async connectControllerIfNoneGranted() {
        this.hid && !await this.hid.hasGrantedController() && await this.hid.request()
      }
      async allowPhoneMotion() {
        var cB;
        await (null === (cB = this.phone) || void 0 === cB ? void 0 : cB.requestPermission())
      }
      drainLookDelta() {
        const cB = performance.now();
        cB - this.lastDrainMs > 500 && this.discardPending(), this.lastDrainMs = cB;
        const Bc = {
          yawDeg: this.pendingYawDeg,
          pitchDeg: this.pendingPitchDeg
        };
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0;
        const nc = (0, Pc.k)();
        return nc.gyroAiming && (cB => {
          let {
            activation: Bc,
            isHeld: nc,
            useButton: Vc,
            gyroButton: Ic
          } = cB;
          return "always" === Bc || nc("aiming" === Bc ? Vc : Ic)
        })({
          activation: nc.gyroActivation,
          isHeld: cB => Mc.e.isButtonHeld(cB),
          useButton: (0, uc.g)("use"),
          gyroButton: nc.gyroButton
        }) ? ((cB, Bc) => ({
          QBc: -cB.yawDeg * Bc * Oc,
          CBc: -cB.pitchDeg * Bc * Oc
        }))(Bc, nc.gyroSensitivity) : Dc
      }
      discardPending() {
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0
      }
      injectMotion(cB, Bc) {
        this.feed(cB, Bc, "local", "injected")
      }
      getCalibration() {
        return this.processor.getCalibration()
      }
      feed(cB, Bc, nc, Vc) {
        this.source !== Vc && (this.processor.reset(), this.source = Vc);
        const Ic = this.processor.process(cB, Bc, nc);
        this.pendingYawDeg += Ic.yawDeg, this.pendingPitchDeg += Ic.pitchDeg
      }
    }
    let oc = null;
    const Wc = () => (oc || (oc = new Ec), oc),
      wc = () => {
        const [cB, Bc] = (0, Vc.useState)((() => Wc().getStatus()));
        return (0, rB.f)(vB, Bc), (0, Vc.useEffect)((() => {
          Bc(Wc().getStatus())
        }), []), cB
      }
  },
  7769: (cB, Bc, nc) => {
    nc.d(Bc, {
      A: () => aB,
      E: () => zB,
      d: () => hc,
      h: () => Mc,
      j: () => Vc,
      l: () => sc,
      p: () => Pc,
      t: () => qB,
      v: () => yB,
      w: () => tB,
      x: () => lc
    });
    const Vc = cB => "dualShock4" === cB || "dualSense" === cB,
      Ic = 1356,
      rB = 1406,
      uc = [{
        vendorId: Ic,
        productId: 1476,
        kind: "dualShock4"
      }, {
        vendorId: Ic,
        productId: 2508,
        kind: "dualShock4"
      }, {
        vendorId: Ic,
        productId: 2976,
        kind: "dualShock4"
      }, {
        vendorId: Ic,
        productId: 3302,
        kind: "dualSense"
      }, {
        vendorId: Ic,
        productId: 3570,
        kind: "dualSense"
      }, {
        vendorId: rB,
        productId: 8201,
        kind: "switchPro"
      }, {
        vendorId: rB,
        productId: 8198,
        kind: "joyConLeft"
      }, {
        vendorId: rB,
        productId: 8199,
        kind: "joyConRight"
      }],
      sc = uc.map((cB => {
        let {
          vendorId: Bc,
          productId: nc
        } = cB;
        return {
          vendorId: Bc,
          productId: nc
        }
      })),
      Mc = (cB, Bc) => {
        var nc, Vc;
        return null !== (nc = null === (Vc = uc.find((nc => nc.vendorId === cB && nc.productId === Bc))) || void 0 === Vc ? void 0 : Vc.kind) && void 0 !== nc ? nc : null
      },
      Pc = {
        dualShock4: "DualShock 4",
        dualSense: "DualSense",
        switchPro: "Switch Pro Controller",
        joyConLeft: "Joy-Con (L)",
        joyConRight: "Joy-Con (R)"
      },
      qB = {
        dualSense: 0,
        dualShock4: 0,
        switchPro: 0,
        joyConRight: 1,
        joyConLeft: 2
      },
      Oc = 2e3 / 32767,
      Tc = 1 / 8192,
      fc = 936 / 13371,
      mB = (cB, Bc, nc) => ({
        x: cB.getInt16(Bc, !0) * nc,
        y: cB.getInt16(Bc + 2, !0) * nc,
        z: cB.getInt16(Bc + 4, !0) * nc
      }),
      ec = cB => 0 === cB.x && 0 === cB.y && 0 === cB.z,
      tB = (cB, Bc, nc) => null === Bc ? null : "dualShock4" === cB ? 16 * (nc - Bc & 65535) / 3 / 1e6 : (nc - Bc >>> 0) / 3 / 1e6,
      Sc = (cB, Bc) => "joyConRight" === Bc ? {
        x: cB.y,
        y: -cB.z,
        z: -cB.x
      } : {
        x: -cB.y,
        y: cB.z,
        z: -cB.x
      },
      yB = (cB, Bc, nc, Ic) => Vc(cB) ? ((cB, Bc, nc, Vc) => {
        const Ic = ((cB, Bc, nc) => "dualShock4" === cB ? 1 === Bc && nc >= 63 ? 0 : 17 === Bc && nc >= 65 ? 2 : null : 1 === Bc && nc >= 62 ? 0 : 49 === Bc && nc >= 63 ? 1 : null)(cB, Bc, nc.byteLength);
        if (null === Ic) return null;
        if (2976 === Vc && 1 === Bc && 0 !== (4 & nc.getUint8(30))) return null;
        const rB = Ic + ("dualShock4" === cB ? 12 : 15),
          uc = mB(nc, rB, Oc),
          sc = mB(nc, rB + 6, Tc);
        return ec(uc) && ec(sc) ? null : {
          readings: [{
            gyro: uc,
            accel: sc
          }],
          dtSec: null,
          sensorClock: "dualShock4" === cB ? nc.getUint16(Ic + 9, !0) : nc.getUint32(Ic + 27, !0)
        }
      })(cB, Bc, nc, Ic) : ((cB, Bc, nc) => {
        if (48 !== Bc && 49 !== Bc || nc.byteLength < 48) return null;
        const Vc = [];
        for (let Ic = 0; Ic < 3; Ic++) {
          const Bc = mB(nc, 12 + 12 * Ic, 244e-6),
            rB = mB(nc, 18 + 12 * Ic, fc);
          if (ec(rB) && ec(Bc)) return null;
          Vc.push({
            gyro: Sc(rB, cB),
            accel: Sc(Bc, cB)
          })
        }
        return {
          readings: Vc,
          dtSec: .005,
          sensorClock: null
        }
      })(cB, Bc, nc),
      zB = 1,
      pc = [0, 1, 64, 64, 0, 1, 64, 64],
      hc = (cB, Bc, nc) => new Uint8Array([15 & cB, ...pc, Bc, ...nc]),
      aB = [{
        subcommand: 64,
        args: [1]
      }, {
        subcommand: 3,
        args: [48]
      }],
      lc = {
        dualShock4: [2, 5],
        dualSense: [5]
      }
  },
  7098: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => bB,
      g: () => Ec,
      j: () => Sc,
      k: () => fc.f,
      l: () => Cc,
      p: () => Qc,
      t: () => yB,
      x: () => vB,
      y: () => fc.o,
      B: () => fc.s,
      E: () => oc,
      G: () => fc.v,
      K: () => Yc
    });
    var Vc = nc(73),
      Ic = nc(27),
      rB = nc(35),
      uc = nc(1252),
      sc = nc(1142),
      Mc = nc(7064),
      Pc = nc(7106),
      qB = nc(7052),
      Oc = nc(7038),
      Tc = nc(7113),
      fc = nc(1226),
      mB = nc(7044),
      ec = nc(7567);
    class tB {
      constructor() {
        this.travelled = 0, this.lastMoveMs = -1 / 0
      }
      add(cB, Bc, nc) {
        return nc - this.lastMoveMs > 250 && (this.travelled = 0), this.lastMoveMs = nc, this.travelled += Math.hypot(cB, Bc), this.travelled >= 12
      }
      reset() {
        this.travelled = 0, this.lastMoveMs = -1 / 0
      }
    }
    const Sc = cB => !cB.repeat && !(0, ec.d)(cB.key),
      yB = "PadHidesCursor";
    let zB = !1;
    const pc = cB => {
        cB !== zB && (zB = cB, document.documentElement.classList.toggle(yB, cB))
      },
      hc = new class {
        constructor() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
        observe(cB) {
          let Bc = !1,
            nc = !1;
          cB.values.forEach(((cB, Vc) => {
            const Ic = cB >= (this.buttonsDown[Vc] ? mB.eb : mB.cb);
            Ic && !this.buttonsDown[Vc] && (Bc = !0, nc = !0), this.buttonsDown[Vc] = Ic
          }));
          return [cB.leftStick, cB.rightStick].forEach(((cB, Vc) => {
            const Ic = this.stickAnchors[Vc];
            Math.hypot(cB.x, cB.y) < (Ic ? mB.eb : .3) ? this.stickAnchors[Vc] = null : (!Ic || Math.hypot(cB.x - Ic.x, cB.y - Ic.y) >= .3) && (this.stickAnchors[Vc] = {
              x: cB.x,
              y: cB.y
            }, Bc = !0, nc ||= !Ic)
          })), Bc && (this.lastActivityMs = cB.timestampMs), this.onlyMovedOn = Bc && !nc, Bc
        }
        wasOnlyMoveOn() {
          return this.onlyMovedOn
        }
        isHolding(cB) {
          return !(cB - this.lastActivityMs >= 1e3) && (this.buttonsDown.some((cB => cB)) || this.stickAnchors.some((cB => null !== cB)))
        }
        isStickOffRest() {
          return this.stickAnchors.some((cB => null !== cB))
        }
        reset() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
      };
    let aB = null,
      lc = !1;
    const Yc = () => lc;
    let Lc = null,
      gB = !1,
      Uc = null;
    const bB = () => Uc;
    let Zc = !1;
    const Qc = cB => {
        if (!hc.observe(cB)) return !1;
        if (Zc && hc.wasOnlyMoveOn() && !(0, fc.f)()) return !1;
        Zc = !1, lc = !1;
        const Bc = !(0, fc.f)();
        return Bc && (aB = cB, Uc = !zB && gB && Lc ? {
          ...Lc
        } : null), gB = !1, (0, fc.o)("gamepad"), pc(!0), (0, Tc.m)((0, Mc.n)()), Bc
      },
      Cc = cB => !(0, fc.f)() || cB === aB,
      vB = () => {
        hc.reset()
      },
      Dc = () => {
        const cB = Ic.d.get("activeInputDevice"),
          Bc = "gamepad" === cB ? Oc.h.getActivePad() : null;
        return {
          device: cB,
          inGame: (0, sc.r)(),
          padMovesMouse: null !== Bc && (0, qB.c)(Bc.id)
        }
      },
      Nc = cB => {
        document.pointerLockElement ? Lc = null : (Lc ??= {
          x: 0,
          y: 0
        }, Lc.x = cB.clientX, Lc.y = cB.clientY)
      },
      Ec = () => {
        const cB = new tB,
          Bc = Bc => {
            cB.reset(), Zc = !1, (0, fc.o)(Bc)
          },
          nc = cB => {
            if (cB.isTrusted) {
              if (cB instanceof KeyboardEvent) {
                if ((0, fc.m)(cB), !Sc(cB)) return;
                lc = !0
              }
              if (cB instanceof PointerEvent && "touch" === cB.pointerType) return Lc = null, void Bc("touch");
              cB instanceof PointerEvent && (Nc(cB), gB = !0), ("pointerdown" !== cB.type || (cB => {
                let {
                  device: Bc,
                  inGame: nc,
                  padMovesMouse: Vc
                } = cB;
                return !("gamepad" === Bc && Vc && nc)
              })(Dc())) && Bc("keyboardMouse")
            }
          },
          Vc = cB => {
            cB.isTrusted && (Lc = null, Bc("touch"))
          },
          uc = cB => {
            cB.isTrusted && "touch" !== cB.pointerType && !cB.relatedTarget && (Lc = null)
          },
          sc = nc => {
            if (!nc.isTrusted || "touch" === nc.pointerType) return;
            Nc(nc);
            const Vc = nc.movementX || 0,
              rB = nc.movementY || 0;
            if (0 === Vc && 0 === rB) return;
            if (gB = !0, pc(!1), "keyboardMouse" === Ic.d.get("activeInputDevice")) return;
            const uc = hc.isHolding(nc.timeStamp),
              sc = Dc(),
              Mc = (cB => {
                let {
                  device: Bc,
                  inGame: nc,
                  padMovesMouse: Vc,
                  padHolding: Ic
                } = cB;
                return ("gamepad" !== Bc || !Vc) && "keyboardMouse" !== Bc && (nc || !Ic)
              })({
                ...sc,
                inGame: sc.inGame && (0, Pc.d)(),
                padHolding: uc
              });
            Mc && cB.add(Vc, rB, nc.timeStamp) && (Bc("keyboardMouse"), Zc = hc.isStickOffRest())
          },
          Mc = cB => {
            pc("gamepad" === cB)
          },
          qB = {
            capture: !0,
            passive: !0
          };
        window.addEventListener("keydown", nc, qB), window.addEventListener("pointerdown", nc, qB), window.addEventListener("wheel", nc, qB), window.addEventListener("touchstart", Vc, qB), window.addEventListener("pointermove", sc, qB), window.addEventListener("pointerout", uc, qB);
        const Oc = rB.i.subscribe("appManagerUpdated|activeInputDevice", Mc);
        return Mc(Ic.d.get("activeInputDevice")), () => {
          window.removeEventListener("keydown", nc, qB), window.removeEventListener("pointerdown", nc, qB), window.removeEventListener("wheel", nc, qB), window.removeEventListener("touchstart", Vc, qB), window.removeEventListener("pointermove", sc, qB), window.removeEventListener("pointerout", uc, qB), Lc = null, rB.i.unsubscribe(Oc), pc(!1)
        }
      },
      oc = () => {
        const [cB, Bc] = (0, Vc.useState)(Mc.n);
        return (0, uc.f)(Mc.d, (() => {
          Bc((0, Mc.n)())
        })), (0, uc.f)(Oc.e, (() => {
          Bc((0, Mc.n)())
        })), cB
      }
  },
  7072: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Vc,
      f: () => Ic
    });
    const Vc = ["xbox", "playstation", "nintendo", "steamdeck", "generic"],
      Ic = cB => Vc.includes(cB)
  },
  7106: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Pc,
      d: () => qB,
      f: () => Mc,
      i: () => sc
    });
    var Vc = nc(27),
      Ic = nc(1464),
      rB = nc(1502);
    const uc = new Map,
      sc = (cB, Bc) => (uc.has(cB) && console.warn(`Gameplay blocker "${cB}" registered twice; the newer one replaces it.`), uc.set(cB, Bc), () => {
        uc.get(cB) === Bc && uc.delete(cB)
      }),
      Mc = () => (0, rB.d)(document.activeElement),
      Pc = function() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const [Bc, nc] of uc)
          if (!cB.includes(Bc) && nc()) return Bc;
        return null
      },
      qB = function() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return "inGame" === Vc.d.get("gameState") && (!(0, Ic.p)() && (!Mc() && null === Pc(cB)))
      }
  },
  7044: (cB, Bc, nc) => {
    nc.d(Bc, {
      A: () => lc,
      E: () => rB,
      I: () => Oc,
      L: () => zB,
      O: () => Zc,
      R: () => pc,
      V: () => Sc,
      Z: () => tB,
      ab: () => Pc,
      cb: () => Tc,
      d: () => Cc,
      eb: () => fc,
      h: () => bB,
      ib: () => Ic,
      l: () => qB,
      mb: () => Vc,
      nb: () => aB,
      p: () => Mc,
      rb: () => Uc,
      s: () => sc,
      tb: () => Qc,
      u: () => Yc,
      vb: () => hc,
      y: () => yB
    });
    const Vc = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "View", "Menu", "LS", "RS", "Up", "Down", "Left", "Right", "Home"],
      Ic = Vc.length,
      rB = function() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return {
          values: new Array(Ic).fill(0),
          leftStick: {
            x: 0,
            y: 0
          },
          rightStick: {
            x: 0,
            y: 0
          },
          timestampMs: cB
        }
      },
      uc = Object.fromEntries(Vc.map(((cB, Bc) => [cB, Bc]))),
      sc = cB => uc[cB],
      Mc = function(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .95;
        const Vc = Math.hypot(cB.x, cB.y);
        if (Vc <= Bc) return {
          x: 0,
          y: 0
        };
        const Ic = Math.min(1, (Vc - Bc) / Math.max(1e-4, nc - Bc));
        return {
          x: cB.x / Vc * Ic,
          y: cB.y / Vc * Ic
        }
      },
      Pc = ["exponential", "linear", "boost"],
      qB = (cB, Bc) => {
        const nc = Math.hypot(cB.x, cB.y);
        if (0 === nc) return {
          x: 0,
          y: 0
        };
        const Vc = ((cB, Bc) => {
          const nc = Math.max(0, Math.min(1, cB));
          return "linear" === Bc ? nc : nc * nc
        })(nc, Bc);
        return {
          x: cB.x / nc * Vc,
          y: cB.y / nc * Vc
        }
      },
      Oc = .5,
      Tc = .3,
      fc = .2,
      mB = sc("LT"),
      ec = sc("RT"),
      tB = cB => cB === mB || cB === ec,
      Sc = (cB, Bc) => {
        const nc = sc(Bc);
        return tB(nc) ? cB[nc] > .35 : cB[nc] >= Oc
      },
      yB = (cB, Bc) => cB.map(((cB, nc) => tB(nc) ? Bc[nc] ? cB > .35 : cB >= .55 : cB >= Oc)),
      zB = ["Up", "Down", "Left", "Right"],
      pc = cB => zB.includes(cB),
      hc = function(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        return Math.hypot(cB.x, cB.y) < Bc ? null : Math.abs(cB.x) > Math.abs(cB.y) ? cB.x > 0 ? "Right" : "Left" : cB.y > 0 ? "Down" : "Up"
      },
      aB = {
        initialDelayMs: 350,
        intervalMs: 120
      },
      lc = {
        initialDelayMs: 350,
        intervalMs: 150
      },
      Yc = ["default", "slow", "off"],
      Lc = 800,
      gB = 250,
      Uc = (cB, Bc) => "off" === Bc ? null : "slow" === Bc ? {
        initialDelayMs: Math.max(cB.initialDelayMs, Lc),
        intervalMs: Math.max(cB.intervalMs, gB)
      } : cB;
    class bB {
      constructor(cB) {
        this.readTiming = cB, this.XB = !1, this.timing = null, this.nextFireMs = 0
      }
      update(cB, Bc) {
        return cB ? this.XB ? !!(this.timing && Bc >= this.nextFireMs) && (this.nextFireMs = Bc + this.timing.intervalMs, !0) : (this.XB = !0, this.timing = this.readTiming(), this.nextFireMs = Bc + (null !== (nc = null === (Vc = this.timing) || void 0 === Vc ? void 0 : Vc.initialDelayMs) && void 0 !== nc ? nc : 0), !0) : (this.XB = !1, !1);
        var nc, Vc
      }
      reset() {
        this.XB = !1
      }
    }
    const Zc = {
        initialDelayMs: 350,
        intervalMs: 80
      },
      Qc = {
        initialDelayMs: 400,
        intervalMs: 90
      };
    class Cc {
      constructor(cB) {
        this.timer = cB, this.direction = null
      }
      update(cB, Bc) {
        return cB !== this.direction && (this.timer.reset(), this.direction = cB), this.timer.update(null !== cB, Bc) ? cB : null
      }
      reset() {
        this.timer.reset(), this.direction = null
      }
    }
  },
  7670: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Ic,
      f: () => rB
    });
    let Vc = -1 / 0;
    const Ic = () => {
        Vc = performance.now()
      },
      rB = cB => performance.now() - Vc < cB
  },
  7569: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => uc,
      d: () => rB
    });
    var Vc = nc(7064),
      Ic = nc(7044);
    const rB = cB => (0, Ic.rb)(cB, (0, Vc.k)().buttonRepeat),
      uc = cB => new Ic.h((() => rB(cB)))
  },
  7083: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Mc,
      g: () => rB,
      h: () => sc
    });
    var Vc = nc(35),
      Ic = nc(7064);
    const rB = (cB, Bc) => "OpenShop" === cB ? "shop" === Bc : "OpenLobbyLeaderboard" !== cB || "leaderboard" === Bc;
    let uc = !1;
    const sc = cB => {
        cB !== uc && (uc = cB, Vc.i.Vu(Ic.d, (0, Ic.k)()))
      },
      Mc = () => ((cB, Bc) => "shop" === cB && Bc ? "shop" : "leaderboard")((0, Ic.k)().leaderboardButton, uc)
  },
  7079: (cB, Bc, nc) => {
    nc.d(Bc, {
      $: () => tB,
      B: () => Tc,
      D: () => fc,
      E: () => Oc,
      I: () => Uc,
      J: () => pc,
      M: () => Pc,
      Q: () => Sc,
      S: () => gB,
      W: () => zB,
      Z: () => ec,
      bb: () => mB,
      d: () => Dc,
      db: () => yB,
      eb: () => Qc,
      g: () => Ec,
      i: () => uc,
      ib: () => rB,
      l: () => Lc,
      mb: () => aB,
      o: () => lc,
      p: () => Cc,
      pb: () => Nc,
      q: () => vB,
      s: () => qB,
      sb: () => Yc,
      t: () => Mc,
      x: () => sc,
      z: () => hc
    });
    var Vc = nc(7061),
      Ic = nc(7044);
    const rB = {
        min: 25,
        max: 500,
        step: 5
      },
      uc = {
        min: 25,
        max: 100,
        step: 5
      },
      sc = {
        min: 0,
        max: .4,
        step: .01
      },
      Mc = {
        min: 25,
        max: 300,
        step: 5
      },
      Pc = {
        min: .5,
        max: 6,
        step: .1
      },
      qB = (cB, Bc) => {
        if (!Number.isFinite(cB)) return Bc.min;
        const nc = Bc.min + Math.round((cB - Bc.min) / Bc.step) * Bc.step,
          Vc = Math.min(Bc.max, Math.max(Bc.min, nc));
        return Math.round(1e3 * Vc) / 1e3
      },
      Oc = cB => `${Math.round(cB)}%`,
      Tc = cB => Oc(100 * cB),
      fc = cB => `${cB.toFixed(1)}\xd7`,
      mB = [{
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
      ec = [{
        value: "exponential",
        labelKey: "controller:settingsCurveExponential"
      }, {
        value: "linear",
        labelKey: "controller:settingsCurveLinear"
      }, {
        value: "boost",
        labelKey: "controller:settingsCurveBoost"
      }],
      tB = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "focus",
        labelKey: "controller:settingsMenuNavFocus"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      Sc = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "slot",
        labelKey: "controller:settingsInventoryNavSlot"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      yB = [{
        value: "wheel",
        labelKey: "controller:settingsQuickChatWheel"
      }, {
        value: "off",
        labelKey: "controller:settingsQuickChatOff"
      }],
      zB = [{
        value: "shop",
        labelKey: "controller:settingsLeaderboardButtonShop"
      }, {
        value: "leaderboard",
        labelKey: "controller:settingsLeaderboardButtonLeaderboard"
      }],
      pc = [{
        value: "always",
        labelKey: "controller:settingsGyroAlways"
      }, {
        value: "aiming",
        labelKey: "controller:settingsGyroWhileAiming"
      }, {
        value: "button",
        labelKey: "controller:settingsGyroWhileButton"
      }],
      hc = [{
        value: "tapHold",
        labelKey: "controller:settingsEmoteButtonTapHold"
      }, {
        value: "wheel",
        labelKey: "controller:settingsEmoteButtonWheel"
      }],
      aB = [{
        value: "toggle",
        labelKey: "controller:settingsSneakToggle"
      }, {
        value: "hold",
        labelKey: "controller:settingsSneakHold"
      }],
      lc = [{
        value: "default",
        labelKey: "controller:settingsButtonRepeatDefault"
      }, {
        value: "slow",
        labelKey: "controller:settingsButtonRepeatSlow"
      }, {
        value: "off",
        labelKey: "controller:settingsButtonRepeatOff"
      }],
      Yc = [{
        value: "short",
        labelKey: "controller:settingsTapHoldShort"
      }, {
        value: "medium",
        labelKey: "controller:settingsTapHoldMedium"
      }, {
        value: "long",
        labelKey: "controller:settingsTapHoldLong"
      }],
      Lc = [{
        value: "hold",
        labelKey: "controller:settingsAttackHold"
      }, {
        value: "toggle",
        labelKey: "controller:settingsAttackToggle"
      }],
      gB = {
        southpaw: "controller:settingsLayoutSouthpaw",
        triggersSwapped: "controller:settingsLayoutTriggersSwapped"
      },
      Uc = cB => `controller:settingsAction${cB.charAt(0).toUpperCase()}${cB.slice(1)}`,
      bB = {
        gameplay: "controller:settingsGroupGameplay",
        menu: "controller:settingsGroupMenus",
        inventory: "controller:settingsGroupInventory",
        keyboard: "controller:settingsGroupKeyboard"
      },
      Zc = [{
        kind: "fixed",
        stick: "move",
        labelKey: "controller:settingsActionMove"
      }, {
        kind: "fixed",
        stick: "look",
        labelKey: "controller:settingsActionLook"
      }],
      Qc = Vc.c.map((cB => {
        let {
          group: Bc,
          actions: nc
        } = cB;
        const Vc = nc.map((cB => ({
          kind: "action",
          action: cB
        })));
        return {
          titleKey: bB[Bc],
          rows: "gameplay" === Bc ? [...Zc, ...Vc] : Vc
        }
      })),
      Cc = Ic.mb.filter((cB => "Home" !== cB)),
      vB = 1e4;
    class Dc {
      constructor(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
        this.cancelButton = cB, this.openButton = Bc, this.accepts = nc, this.startMs = null, this.ignoredUntilMs = new Map, this.cancelDownAtMs = null
      }
      update(cB, Bc) {
        var nc;
        this.updateIgnored(cB, Bc);
        const Vc = Bc - (null !== (nc = this.startMs) && void 0 !== nc ? nc : Bc) >= 250;
        for (const Ic of Cc)
          if (Ic !== this.cancelButton && Vc && !this.ignoredUntilMs.has(Ic) && cB.wasPressed(Ic) && this.accepts(Ic)) return {
            kind: "bind",
            button: Ic
          };
        if (this.ignoredUntilMs.has(this.cancelButton)) return null;
        if (cB.wasPressed(this.cancelButton)) {
          if (!this.accepts(this.cancelButton)) return {
            kind: "cancel"
          };
          this.cancelDownAtMs = Bc
        }
        return null === this.cancelDownAtMs ? null : cB.isHeld(this.cancelButton) && Bc - this.cancelDownAtMs >= 700 ? (this.cancelDownAtMs = null, {
          kind: "bind",
          button: this.cancelButton
        }) : cB.wasReleased(this.cancelButton) ? (this.cancelDownAtMs = null, {
          kind: "cancel"
        }) : null
      }
      getBindHoldProgress(cB) {
        return null === this.cancelDownAtMs ? 0 : Math.min(1, (cB - this.cancelDownAtMs) / 700)
      }
      updateIgnored(cB, Bc) {
        if (null === this.startMs) {
          this.startMs = Bc;
          for (const Bc of Cc) cB.isDown(Bc) && this.ignoredUntilMs.set(Bc, 1 / 0);
          this.openButton && !this.ignoredUntilMs.has(this.openButton) && this.ignoredUntilMs.set(this.openButton, Bc + 250)
        }
        for (const [nc, Vc] of this.ignoredUntilMs) {
          const Ic = cB.isDown(nc);
          Vc === 1 / 0 ? Ic || nc !== this.openButton ? Ic || this.ignoredUntilMs.delete(nc) : this.ignoredUntilMs.set(nc, Bc + 250) : Bc >= Vc ? this.ignoredUntilMs.delete(nc) : Ic && this.ignoredUntilMs.set(nc, 1 / 0)
        }
      }
    }
    const Nc = 6e3;
    class Ec {
      constructor() {
        this.downAtMs = null, this.pressesAtMs = []
      }
      update(cB, Bc) {
        let {
          pressed: nc,
          XB: Vc
        } = cB;
        if (nc) {
          const cB = this.pressesAtMs.at(-1);
          if (this.pressesAtMs = void 0 !== cB && Bc - cB < 1500 ? [...this.pressesAtMs, Bc] : [Bc], this.pressesAtMs.length >= 3) return 1
        }
        return Vc ? (this.downAtMs ??= Bc, Math.min(1, (Bc - this.downAtMs) / 1500)) : (this.downAtMs = null, 0)
      }
    }
  },
  7610: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => rB,
      e: () => Ic
    });
    var Vc = nc(35);
    const Ic = "localBlockBroken";

    function rB() {
      return {
        onPlayerChangeBlock(cB, Bc, nc, rB, uc, sc) {
          "Air" === sc && Vc.i.Vu(Ic)
        }
      }
    }
  },
  7122: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/A.926fb88933484dfbde14.svg"
  },
  7128: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/B.9f5ec099f78f84e44427.svg"
  },
  7135: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  7140: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  7145: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/LB.3a20b15927b55d5d8b60.svg"
  },
  7150: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  7156: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/LT.9fdc5e69011b9d41f50a.svg"
  },
  7161: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  7168: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  7174: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Menu.c903a662eb685211e52e.svg"
  },
  7180: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/RB.bba470ddb76ceec5d168.svg"
  },
  7182: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  7186: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/RT.e5a9fbcc3c79550111ca.svg"
  },
  7194: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  7201: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  7210: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  7219: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/View.0c9378b5d720a636d50d.svg"
  },
  7225: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/X.c9377519af94e6dce1d7.svg"
  },
  7230: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Y.62d8c17731dd2e172426.svg"
  },
  7232: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/A.958a6de9474f8d0c9caf.svg"
  },
  7236: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/B.d05958bfa88a1162b47a.svg"
  },
  7244: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Down.db68fb3980768eb54671.svg"
  },
  7248: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  7251: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/LB.37a3c5128c958ec2a0c2.svg"
  },
  7257: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/LS.15b0cc5bf3f2fe7bbd8b.svg"
  },
  7265: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/LT.5412ae5222c69f8c833f.svg"
  },
  7268: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Left.4457b2895ce94a5df32e.svg"
  },
  7274: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  7276: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Menu.1e8427f8133c9d456c53.svg"
  },
  7283: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/RB.c96c4aa2590209e930c7.svg"
  },
  7292: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/RS.8d70d147cf1ab136e845.svg"
  },
  7301: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/RT.1e4691bb5a7c049693df.svg"
  },
  7305: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Right.a1e101413040c540b879.svg"
  },
  7309: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  7316: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Up.7544a65ad4f611a55775.svg"
  },
  7323: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/View.003cae39de89cae0b9d8.svg"
  },
  7327: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/X.d88b6e62dd8fb4bda32a.svg"
  },
  7333: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Y.428d3e70775877892f82.svg"
  },
  7336: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  7338: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  7345: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  7351: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Home.ea8b009cfa9562aa644e.svg"
  },
  7358: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/LB.f283d355d22fc107d6d6.svg"
  },
  7365: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  7374: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/LT.13e66c122e7ee04bb876.svg"
  },
  7378: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  7385: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  7389: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Menu.90fc4e918900eb5062a0.svg"
  },
  7397: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/RB.918a7f16dc054d96b6f3.svg"
  },
  7399: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  7402: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/RT.a0523211130959598bed.svg"
  },
  7408: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  7416: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  7418: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  7425: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/View.0bc952e292c28c3baac2.svg"
  },
  7428: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  7431: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  },
  7438: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  7445: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  7453: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  7461: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Home.8898f76b20962fe52ab7.svg"
  },
  7468: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/LB.689ba3703ae248f2e4cc.svg"
  },
  7473: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  7477: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/LT.9c2d10d335ab5c590525.svg"
  },
  7485: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  7491: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  7496: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Menu.9e485791ea97009871ca.svg"
  },
  7505: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/RB.7ee5ce48dd551f993f80.svg"
  },
  7512: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  7516: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/RT.903ecadc55a9e9e00f07.svg"
  },
  7525: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  7529: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  7536: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  7545: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/View.3c5eeb34f0413bde4a65.svg"
  },
  7554: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  7559: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);