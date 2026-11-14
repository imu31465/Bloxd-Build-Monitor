export const id = 25;
export const ids = [25];
export const modules = {
  7167: (FF, WF, SF) => {
    var CF = {
      "./nintendo/A.svg": 7171,
      "./nintendo/B.svg": 7177,
      "./nintendo/Down.svg": 7186,
      "./nintendo/Home.svg": 7190,
      "./nintendo/LB.svg": 7198,
      "./nintendo/LS.svg": 7202,
      "./nintendo/LT.svg": 7206,
      "./nintendo/Left.svg": 7213,
      "./nintendo/LeftStick.svg": 7222,
      "./nintendo/Menu.svg": 7230,
      "./nintendo/RB.svg": 7237,
      "./nintendo/RS.svg": 7240,
      "./nintendo/RT.svg": 7248,
      "./nintendo/Right.svg": 7251,
      "./nintendo/RightStick.svg": 7255,
      "./nintendo/Up.svg": 7264,
      "./nintendo/View.svg": 7266,
      "./nintendo/X.svg": 7275,
      "./nintendo/Y.svg": 7281,
      "./playstation/A.svg": 7289,
      "./playstation/B.svg": 7295,
      "./playstation/Down.svg": 7302,
      "./playstation/Home.svg": 7309,
      "./playstation/LB.svg": 7311,
      "./playstation/LS.svg": 7313,
      "./playstation/LT.svg": 7316,
      "./playstation/Left.svg": 7318,
      "./playstation/LeftStick.svg": 7323,
      "./playstation/Menu.svg": 7329,
      "./playstation/RB.svg": 7331,
      "./playstation/RS.svg": 7334,
      "./playstation/RT.svg": 7337,
      "./playstation/Right.svg": 7340,
      "./playstation/RightStick.svg": 7349,
      "./playstation/Up.svg": 7352,
      "./playstation/View.svg": 7361,
      "./playstation/X.svg": 7369,
      "./playstation/Y.svg": 7377,
      "./steamdeck/A.svg": 7385,
      "./steamdeck/B.svg": 7391,
      "./steamdeck/Down.svg": 7395,
      "./steamdeck/Home.svg": 7402,
      "./steamdeck/LB.svg": 7405,
      "./steamdeck/LS.svg": 7413,
      "./steamdeck/LT.svg": 7421,
      "./steamdeck/Left.svg": 7426,
      "./steamdeck/LeftStick.svg": 7430,
      "./steamdeck/Menu.svg": 7433,
      "./steamdeck/RB.svg": 7436,
      "./steamdeck/RS.svg": 7443,
      "./steamdeck/RT.svg": 7446,
      "./steamdeck/Right.svg": 7450,
      "./steamdeck/RightStick.svg": 7456,
      "./steamdeck/Up.svg": 7465,
      "./steamdeck/View.svg": 7467,
      "./steamdeck/X.svg": 7473,
      "./steamdeck/Y.svg": 7475,
      "./xbox/A.svg": 7477,
      "./xbox/B.svg": 7479,
      "./xbox/Down.svg": 7481,
      "./xbox/Home.svg": 7486,
      "./xbox/LB.svg": 7492,
      "./xbox/LS.svg": 7495,
      "./xbox/LT.svg": 7501,
      "./xbox/Left.svg": 7509,
      "./xbox/LeftStick.svg": 7516,
      "./xbox/Menu.svg": 7523,
      "./xbox/RB.svg": 7531,
      "./xbox/RS.svg": 7536,
      "./xbox/RT.svg": 7540,
      "./xbox/Right.svg": 7542,
      "./xbox/RightStick.svg": 7551,
      "./xbox/Up.svg": 7560,
      "./xbox/View.svg": 7562,
      "./xbox/X.svg": 7570,
      "./xbox/Y.svg": 7577
    };

    function AF(FF) {
      var WF = uF(FF);
      return SF(WF)
    }

    function uF(FF) {
      if (!SF.o(CF, FF)) {
        var WF = new Error("Cannot find module '" + FF + "'");
        throw WF.code = "MODULE_NOT_FOUND", WF
      }
      return CF[FF]
    }
    AF.keys = function() {
      return Object.keys(CF)
    }, AF.resolve = uF, FF.exports = AF, AF.id = 7167
  },
  7131: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => AF,
      f: () => uF,
      i: () => eF,
      m: () => iW,
      q: () => PF,
      r: () => bW,
      s: () => CF,
      t: () => EF,
      v: () => QF
    });
    const CF = ["menuConfirm", "menuBack", "menuTabPrevious", "menuTabNext", "menuPageUp", "menuPageDown", "menuSecondary", "menuToggleCursor"],
      AF = [{
        group: "gameplay",
        actions: ["jump", "sneak", "sneakToggle", "sprint", "attack", "use", "hotbarPrevious", "hotbarNext", "inventory", "actionButton", "perspective", "oV", "drop", "emoteWheel", "chat", "pause", "leaderboard"]
      }, {
        group: "menu",
        actions: CF
      }, {
        group: "inventory",
        actions: ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryClose", "inventoryPanelPrevious", "inventoryPanelNext", "inventoryDrop", "inventoryHotbarSwap"]
      }, {
        group: "keyboard",
        actions: ["keyboardType", "keyboardBackspace", "keyboardSpace", "keyboardCaretLeft", "keyboardCaretRight", "keyboardShift", "keyboardSymbols", "keyboardSubmit", "keyboardClose", "keyboardChannel"]
      }],
      uF = {
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
        oV: "Up",
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
      hF = ["oV", "perspective"],
      bW = FF => hF.includes(FF) ? hF : [FF],
      dF = Object.fromEntries(AF.flatMap((FF => {
        let {
          group: WF,
          actions: SF
        } = FF;
        return SF.map((FF => [FF, WF]))
      }))),
      PF = FF => dF[FF],
      RF = {
        pause: ["menu"],
        leaderboard: ["menu"],
        inventory: ["menu"],
        menuPageUp: ["inventory"],
        menuPageDown: ["inventory"]
      },
      iW = FF => {
        var WF;
        return [PF(FF), ...null !== (WF = RF[FF]) && void 0 !== WF ? WF : []]
      },
      eF = new Set(["menu", "inventory", "keyboard"]),
      EF = {
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
        "mid-fire": "oV",
        OpenInventory: "inventory",
        OpenSettings: "pause",
        OpenLobbyLeaderboard: "leaderboard",
        OpenShop: "leaderboard",
        OpenEmoteWheel: "emoteWheel"
      },
      QF = new Set(["forward", "backward", "left", "right"])
  },
  7128: (FF, WF, SF) => {
    SF.d(WF, {
      D: () => mW,
      F: () => RF,
      H: () => LF,
      K: () => ZF,
      b: () => TF,
      e: () => qW,
      h: () => eF,
      j: () => EF,
      k: () => YF,
      l: () => xW,
      n: () => OF,
      q: () => kW,
      u: () => oF,
      x: () => DF,
      z: () => aW
    });
    var CF = SF(7131),
      AF = SF(7137),
      uF = SF(7117),
      hF = SF(7152);
    const bW = FF => "oV" === FF ? "perspective" : FF,
      dF = (FF, WF) => {
        var SF;
        const AF = bW(WF);
        return null !== (SF = FF[AF]) && void 0 !== SF ? SF : CF.f[AF]
      },
      PF = new Map([
        ["menuConfirm", "menuBack"],
        ["inventoryPrimary", "inventoryClose"],
        ["keyboardType", "keyboardClose"]
      ].flatMap((FF => {
        let [WF, SF] = FF;
        return [
          [WF, SF],
          [SF, WF]
        ]
      }))),
      RF = (FF, WF) => null !== FF && void 0 !== FF ? FF : "nintendo" === WF,
      iW = FF => RF((0, AF.i)().swapConfirmBack, (0, AF.l)()) && PF.get(FF) || FF,
      eF = FF => dF((0, AF.i)().uC, iW(FF)),
      EF = FF => CF.f[iW(FF)],
      QF = Object.keys(CF.f),
      rW = FF => "gameplay" === (0, CF.q)(FF) ? ["gameplay"] : (0, CF.m)(FF),
      gW = (FF, WF) => {
        const SF = rW(WF);
        return rW(FF).some((FF => SF.includes(FF)))
      },
      tW = (FF, WF, SF) => {
        const AF = dF(FF, WF),
          hF = new Set((0, CF.r)(WF)),
          PF = [...hF];
        for (let CF = PF.pop(); CF; CF = PF.pop())
          for (const WF of QF) {
            const uF = dF(FF, WF);
            hF.has(WF) || uF !== SF && uF !== AF || !gW(CF, WF) || (hF.add(WF), PF.push(WF))
          }
        const RF = {
          ...FF
        };
        for (const iW of hF) {
          const WF = dF(FF, iW) === AF ? SF : AF,
            hF = (0, CF.m)(iW).some((FF => CF.i.has(FF)));
          if ((0, uF.B)(WF) && hF) return null;
          RF[bW(iW)] = WF
        }
        for (const uF of Object.keys(RF)) RF[uF] === CF.f[uF] && delete RF[uF];
        return RF
      },
      TF = (FF, WF) => null !== tW((0, AF.i)().uC, iW(FF), WF),
      aW = (FF, WF) => {
        if (eF(FF) === WF) return !0;
        const SF = tW((0, AF.i)().uC, iW(FF), WF);
        return !!SF && ((0, AF.p)({
          uC: SF
        }), !0)
      },
      kW = (FF, WF) => {
        const SF = (0, CF.r)(WF);
        return QF.filter((WF => bW(WF) === WF && !SF.includes(WF) && dF(FF, iW(WF)) !== eF(WF)))
      },
      qW = ["southpaw", "triggersSwapped"],
      VF = {
        southpaw: {
          sprint: "RS",
          sneakToggle: "LS"
        },
        triggersSwapped: {
          attack: "LT",
          use: "RT"
        }
      },
      NF = FF => Object.keys(VF[FF]),
      DF = (FF, WF) => "southpaw" === FF ? WF.swapSticks : NF(FF).every((SF => dF(WF.uC, SF) === VF[FF][SF])),
      LF = (FF, WF) => {
        const SF = (0, AF.i)();
        let uF = SF.uC;
        for (const AF of NF(FF)) {
          const SF = WF ? VF[FF][AF] : CF.f[AF];
          if (uF = tW(uF, AF, SF), !uF) return !1
        }
        return (0, AF.p)({
          swapSticks: "southpaw" === FF ? WF : SF.swapSticks,
          uC: uF
        }), !0
      },
      mW = () => {
        (0, AF.p)({
          swapSticks: !1,
          uC: {}
        })
      },
      OF = () => (0, AF.i)().swapSticks ? "RightStick" : "LeftStick",
      xW = () => (0, AF.i)().swapSticks ? "LeftStick" : "RightStick",
      ZF = FF => (0, AF.i)().swapSticks && (0, uF.B)(FF),
      oF = FF => ZF(FF) ? OF() : xW(),
      YF = FF => {
        if (CF.v.has(FF)) return OF();
        const WF = CF.t[FF];
        return WF && ("leaderboard" !== WF || (0, hF.f)(FF, (0, hF.e)())) ? eF(WF) : null
      }
  },
  7112: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      ControllerCategory: () => Wd,
      ControllerGlyph: () => eC,
      ControllerRoot: () => Fb,
      PadLobbyShortcuts: () => td,
      PadSneakChip: () => bd,
      PadTooltip: () => Pb,
      attachPressToContinue: () => Lb,
      getBoundButton: () => RF.h,
      getControllerSettings: () => eF.i,
      getGlyphForNoaAction: () => RF.k,
      getInventoryCursorState: () => Cd,
      getMenuShortcutButton: () => IA,
      getPadGlyphIconName: () => Ab,
      getPadGlyphIconUrl: () => ub,
      getPadRepeatTiming: () => rW.e,
      hasActivePad: () => Sd,
      isPadSteppingSlots: () => Ad
    });
    const CF = JSON.parse('{"controller":{"inventoryTake":"Take","inventoryTakeHalf":"Take half","inventoryPlace":"Place","inventoryPlaceOne":"Place one","inventoryQuickMove":"Quick move","inventoryToHotbar":"To hotbar","inventoryPutBack":"Put back","inventoryHotbarSwap":"Swap with hotbar","inventorySwapHere":"Swap here","inventoryCancel":"Cancel","inventoryClose":"Close","inventoryDrop":"Drop (hold: stack)","inventorySelect":"Select","inventoryCraft":"Craft (hold to repeat)","inventoryCraftAll":"Craft all","inventoryChooseRecipe":"Choose","inventoryBackToRecipes":"Back to recipes","inventoryType":"Type","inventoryPanels":"Switch panel","inventoryCategory":"Category","inventoryPage":"Page","disconnected":"Controller disconnected","gameplayReload":"Reload","gameplayActionWheelHint":"(hold for more)","gameplaySneaking":"Sneaking","gameplayLoadFailedTitle":"Controller unavailable","gameplayLoadFailedSubtitle":"Reload the page to play with your controller.","gameplayDropStack":"Keep holding to drop the stack","gameplayAttackLatched":"Attacking","gameplayPickBlock":"Pick block","padButtonView":"View","padButtonMenu":"Menu","padButtonHome":"Home","padButtonCreate":"Create","padButtonOptions":"Options","padButtonDpadUp":"D-pad \u2191","padButtonDpadDown":"D-pad \u2193","padButtonDpadLeft":"D-pad \u2190","padButtonDpadRight":"D-pad \u2192","padButtonLeftStick":"L Stick","padButtonRightStick":"R Stick","settingsLook":"Look","settingsLookSensitivityX":"Look sensitivity (horizontal)","settingsLookSensitivityY":"Look sensitivity (vertical)","settingsAimLookSensitivity":"Look sensitivity while aiming (use held)","settingsInvertLookX":"Invert horizontal look","settingsInvertLookY":"Invert vertical look","settingsLookCurve":"Look curve","settingsLookCurveHint":"Steep gives finer aim near the centre, Linear turns at an even rate, and Boost turns faster when you hold the stick all the way.","settingsCurveExponential":"Steep","settingsCurveLinear":"Linear","settingsCurveBoost":"Boost","settingsLookDeadzone":"Look deadzone","settingsGyro":"Gyro aiming","settingsGyroToggle":"Aim by moving the controller","settingsGyroToggleInfo":"Turn and tilt the controller to aim, on top of the right stick.","settingsGyroTogglePhone":"Aim by moving your phone or tablet","settingsGyroToggleInfoPhone":"Turn and tilt your phone or tablet to aim, on top of the right stick.","settingsGyroUnsupported":"Gyro aiming needs Chrome or Edge.","settingsGyroBlocked":"Gyro aiming isn\'t available on this site.","settingsGyroPhoneNeedsController":"Connect a controller to aim by moving your phone or tablet.","settingsGyroSteamHint":"If Steam already turns your gyro into mouse movement, leave this off.","settingsGyroConnect":"Connect motion controller","settingsGyroConnectHint":"Works with DualSense, DualShock 4 and Switch controllers.","settingsGyroConnectNeedsClick":"Click Connect with your mouse: the browser asks before sharing a controller.","settingsGyroOpenFailed":"Another app is using the controller. Close apps such as Steam or DS4Windows, then try again.","settingsGyroConnected":"Aiming with {{name}}.","settingsGyroAllowMotion":"Allow motion sensor","settingsGyroAllowNeedsTap":"Tap Allow motion sensor on your screen to turn it on.","settingsGyroPhoneOn":"Aiming with this device\'s motion sensor.","settingsGyroPhoneWaiting":"Waiting for this device\'s motion sensor\u2026","settingsGyroPhoneNoSensor":"No motion sensor found on this device.","settingsGyroPhoneDenied":"Motion access is blocked. Allow it in your browser settings.","settingsGyroSensitivity":"Gyro sensitivity","settingsGyroActivation":"Gyro turns on","settingsGyroAlways":"Always","settingsGyroWhileAiming":"While aiming","settingsGyroWhileButton":"While holding a button","settingsGyroAimingHint":"Hold {{button}} to aim with motion.","settingsGyroButton":"Gyro button","settingsGyroButtonHint":"While gyro aiming is on, this button only turns the gyro on in game, so pick one you rarely use.","settingsMovement":"Movement","settingsMoveDeadzone":"Move deadzone","settingsAutoSprint":"Sprint at full tilt","settingsAutoSprintInfo":"Push the movement stick all the way to sprint.","settingsSneak":"Sneak","settingsSneakHold":"Hold","settingsSneakToggle":"Toggle","settingsButtons":"Buttons","settingsPromptFamily":"Button prompts","settingsPromptAuto":"Match my controller","settingsPromptXbox":"Xbox","settingsPromptPlayStation":"PlayStation","settingsPromptNintendo":"Nintendo","settingsPromptSteamDeck":"Steam Deck","settingsPromptGeneric":"Generic","settingsHideButtonHints":"Hide button hints","settingsVibration":"Vibration","settingsCursorSpeed":"Virtual cursor speed","settingsCursorMagnetism":"Cursor snaps onto buttons","settingsMenuBackToCategories":"Back returns to the category list first","settingsAccessibility":"Accessibility","settingsSwapConfirmBack":"Swap confirm and back","settingsSwapToast":"Select and Back have swapped buttons.","settingsLayoutRefusedToast":"This layout doesn\'t fit your current buttons. Reset them to use it.","settingsSwapConfirmBackInfo":"Select with the right face button and go back with the bottom one, in menus, the inventory and the on-screen keyboard. On by default for Nintendo controllers.","settingsButtonRepeat":"Button repeat","settingsButtonRepeatHint":"How a held button repeats in menus, sliders, the on-screen keyboard and crafting. Off acts once per press, and holding drop in game drops just one item.","settingsButtonRepeatDefault":"Default","settingsButtonRepeatSlow":"Slow (0.8 s, then 4 a second)","settingsButtonRepeatOff":"Off (once per press)","settingsTapHoldTime":"Tap/hold time","settingsTapHoldTimeHint":"How long to hold the chat, emote or action button to open its wheel, or the view button to change view where a tap picks a block. Dropping a whole stack takes 0.8, 1 or 1.3 s.","settingsTapHoldShort":"Short (0.25 s)","settingsTapHoldMedium":"Medium (0.5 s)","settingsTapHoldLong":"Long (0.8 s)","settingsEmoteButton":"Emote button","settingsEmoteButtonTapHoldHint":"Tap to repeat your last emote, or hold to open the emote wheel.","settingsEmoteButtonWheelHint":"Any press opens the emote wheel, with no hold to time. Pick with the stick, then select.","settingsEmoteButtonTapHold":"Tap repeats, hold opens wheel","settingsEmoteButtonWheel":"Opens the wheel","settingsAttackMode":"Attack / mine","settingsAttackHoldHint":"Hold attack to keep attacking or mining.","settingsAttackToggleHint":"Press attack once to keep attacking or mining, and again to stop.","settingsAttackHold":"Hold","settingsAttackToggle":"Toggle","settingsLargePointer":"Large pointer and focus","settingsLargePointerInfo":"A bigger menu cursor, thicker selection brackets and bigger button hints.","settingsRemap":"Remap buttons","settingsRemapHint":"Select an action, then press a button. If that button is taken, the two swap.","settingsLayoutSouthpaw":"Southpaw (move with the right stick)","settingsLayoutTriggersSwapped":"Triggers swapped (attack with the left trigger)","settingsCapturePrompt":"Press a button","settingsCaptureCancelHint":"Press {{button}} to cancel","settingsCaptureCancelOrBindHint":"Tap {{button}} to cancel, or hold it to choose it","settingsReset":"Reset","settingsSwapNotice":"{{action}} moved to {{button}}","settingsResetAll":"Reset all buttons and sticks","settingsGroupGameplay":"Movement & gameplay","settingsGroupMenus":"Menus","settingsGroupInventory":"Inventory","settingsGroupKeyboard":"On-screen keyboard","settingsActionMove":"Move","settingsActionLook":"Look around","settingsActionJump":"Jump","settingsActionSneak":"Sneak","settingsActionSneakToggle":"Toggle sneak","settingsActionSprint":"Sprint","settingsActionAttack":"Attack / mine","settingsActionUse":"Use / place","settingsActionHotbarPrevious":"Previous hotbar slot","settingsActionHotbarNext":"Next hotbar slot","settingsActionInventory":"Inventory","settingsActionActionButton":"Game action","settingsActionPerspective":"Change view","settingsActionPickBlock":"Pick block (creative)","settingsActionDrop":"Drop item","settingsActionEmoteWheel":"Emotes","settingsActionChat":"Chat","settingsActionPause":"Pause menu","settingsActionLeaderboard":"Shop / leaderboard","settingsActionMenuConfirm":"Select","settingsActionMenuBack":"Back","settingsActionMenuTabPrevious":"Previous tab","settingsActionMenuTabNext":"Next tab","settingsActionMenuPageUp":"Page up","settingsActionMenuPageDown":"Page down","settingsActionMenuSecondary":"Secondary action","settingsActionMenuToggleCursor":"Switch to virtual cursor","settingsActionInventoryPrimary":"Pick up / place","settingsActionInventorySecondary":"Pick up half / place one","settingsActionInventoryQuickMove":"Quick move","settingsActionInventoryHotbarSwap":"Swap with hotbar slot","settingsActionInventoryClose":"Close","settingsActionInventoryPanelPrevious":"Previous panel","settingsActionInventoryPanelNext":"Next panel","settingsActionInventoryDrop":"Drop item","settingsActionKeyboardType":"Type key","settingsActionKeyboardBackspace":"Backspace","settingsActionKeyboardSpace":"Space","settingsActionKeyboardCaretLeft":"Move cursor left","settingsActionKeyboardCaretRight":"Move cursor right","settingsActionKeyboardShift":"Shift","settingsActionKeyboardSymbols":"Accents and symbols","settingsActionKeyboardSubmit":"Send","settingsActionKeyboardClose":"Close keyboard","settingsActionKeyboardChannel":"Chat channel","settingsAlternatives":"Try alternatives","settingsAlternativesHint":"Try each way of playing and keep the one that feels best.","settingsMenuNavigation":"Menu navigation","settingsMenuNavigationHint":"Steer a cursor with the stick and jump between buttons with the D-pad, or use just one.","settingsNavHybrid":"Cursor and D-pad","settingsMenuNavFocus":"Jump between buttons","settingsVirtualCursor":"Virtual cursor","settingsInventoryNavigation":"Inventory","settingsInventoryNavigationHint":"Steer a cursor with the stick and step slot by slot with the D-pad, or use just one.","settingsInventoryNavSlot":"Slot by slot","settingsQuickChat":"Hold chat button","settingsQuickChatHint":"Hold the chat button to pick a quick phrase. Tapping it still opens chat.","settingsQuickChatWheel":"Quick chat wheel","settingsQuickChatOff":"Off","settingsLeaderboardButton":"Shop / leaderboard button","settingsLeaderboardButtonHint":"Open the shop in one press in games that have one. The lobby leaderboard is still in the pause menu.","settingsLeaderboardButtonShop":"Shop, in games with one","settingsLeaderboardButtonLeaderboard":"Always the leaderboard","settingsTester":"Gamepad tester","settingsTesterNoPad":"Connect a gamepad and press any button to test it.","settingsTesterFamily":"Detected: {{family}}","settingsTesterHint":"Start a test to try every button and stick without moving through the menu.","settingsTesterStart":"Start test","settingsTesterStop":"Stop test","settingsTesterTesting":"Press anything to see it light up. To stop, hold {{button}} or press it three times.","settingsControlsNote":"Playing with a gamepad? Change its buttons and feel in Gamepad settings.","settingsOpenController":"Gamepad settings","keyboardSpace":"Space","keyboardSend":"Send","keyboardDone":"Done","keyboardTargetChat":"Chat","keyboardTargetSign":"Sign","keyboardTargetNameTag":"Name tag","keyboardTargetBook":"Book page","keyboardTargetBookTitle":"Book title","keyboardTargetText":"Text","keyboardPhraseGg":"gg","keyboardPhraseHi":"hi","keyboardPhraseThanks":"thanks","keyboardPhraseGl":"gl","keyboardPhraseBrb":"brb","keyboardPhraseYes":"yes","keyboardPhraseNo":"no","keyboardPhraseHelp":"help!","quickChatPick":"Pick a phrase","actionWheelPick":"Pick an action","wheelReleaseToPick":"Release to pick","wheelClose":"Close","wheelChoose":"Choose","menusSelect":"Select","menusBack":"Back","menusClose":"Close","menusQuickChat":"Quick chat (hold)","menusSkipTutorial":"Skip tutorial","menusTabs":"Tabs","menusRows":"Rows","menusCursorMode":"Cursor","menusFocusMode":"Focus","menusClick":"Click","menusRightClick":"Right-click","menusScroll":"Scroll","menusFriends":"Friends","menusSearch":"Search","menusSettings":"Settings","menusLeaveGameTitle":"Leave the game?","menusLeaveGameLeave":"Leave","menusLeaveGameStay":"Stay","menusNotifications":"Notifications","menusLobby":"Lobby","menusShop":"Shop","menusTasks":"Tasks & leaderboards","menusInvite":"Invite friends","menusAdjust":"Adjust","menusFavourite":"Favourite","screensPressToContinue":"Press {{button}} to continue","screensPressToEnterGame":"Press {{button}} to enter game","screensEnterGame":"Enter game","screensBackToGames":"Back to games","tutorialMine":"Mine","tutorialPlace":"Place / Use","tutorialInventory":"Inventory","tutorialPause":"Pause","menusUseMouse":"Use a mouse or touch here"}}');
    var AF = SF(1046),
      uF = SF(1234),
      hF = SF(7114),
      bW = SF(61),
      dF = SF(11),
      PF = SF(20),
      RF = SF(7128),
      iW = SF(7155),
      eF = SF(7137),
      EF = SF(7158),
      QF = SF(7117),
      rW = SF(7590),
      gW = SF(7595),
      tW = SF(1731);
    const TF = (FF, WF, SF) => Math.max(WF, Math.min(SF, FF)),
      aW = FF => Math.min(FF.width, FF.height) / 720,
      kW = FF => Math.max(.15, FF);
    class qW {
      constructor() {
        this.locked = !1
      }
      lock() {
        this.locked = !0
      }
      update(FF, WF) {
        const SF = Math.hypot(FF.x, FF.y) >= (FF => Math.max(.3, FF))(WF);
        return this.locked ? (this.locked = SF, !1) : SF
      }
    }
    const VF = (FF, WF) => {
        const SF = TF(WF.dtMs, 0, 100),
          CF = SF / 1e3,
          AF = aW(WF.viewport) * (WF.cursorSpeedPercent / 100),
          uF = (0, QF.j)(WF.stick, kW(WF.moveDeadzone)),
          hF = Math.hypot(uF.x, uF.y),
          bW = ((FF, WF, SF) => {
            if (WF < .3) return 0;
            const CF = SF / 350;
            return WF >= .85 ? Math.min(1, FF + CF) : Math.max(0, FF - CF)
          })(FF.speedRamp, hF, SF);
        let dF = FF.x,
          PF = FF.y;
        if (hF > 0) {
          const FF = .45 + .55 * bW,
            SF = WF.context.overInteractive ? .45 : 1,
            RF = 1400 * (FF => {
              const WF = TF(FF, 0, 1);
              return .3 * WF + .7 * WF * WF
            })(hF) * AF * FF * SF;
          dF += uF.x / hF * RF * CF, PF += uF.y / hF * RF * CF
        }
        const RF = Math.hypot(WF.dpad.x, WF.dpad.y);
        if (RF > 0) {
          const FF = 500 * AF;
          dF += WF.dpad.x / RF * FF * CF, PF += WF.dpad.y / RF * FF * CF
        }
        const iW = WF.context.magnetTarget;
        if (iW && hF < .3 && 0 === RF) {
          const FF = ((FF, WF, SF, CF, AF) => {
            const uF = WF.x - FF.x,
              hF = WF.y - FF.y,
              bW = Math.hypot(uF, hF);
            if (0 === bW) return {
              x: 0,
              y: 0
            };
            const dF = Math.min(bW, AF * (1 - CF / .3));
            let PF = uF / bW * dF,
              RF = hF / bW * dF;
            if (CF > 0) {
              const FF = SF.x / CF,
                WF = SF.y / CF,
                AF = PF * FF + RF * WF;
              AF < 0 && (PF -= AF * FF, RF -= AF * WF)
            }
            return {
              x: PF,
              y: RF
            }
          })({
            x: dF,
            y: PF
          }, iW, uF, hF, 120 * aW(WF.viewport) * CF);
          dF += FF.x, PF += FF.y
        }
        return {
          x: TF(dF, 0, Math.max(0, WF.viewport.width - 1)),
          y: TF(PF, 0, Math.max(0, WF.viewport.height - 1)),
          speedRamp: bW
        }
      },
      NF = FF => {
        const WF = (0, QF.j)(FF, .2);
        return 0 !== WF.x || 0 !== WF.y
      },
      DF = (FF, WF) => {
        const SF = (0, QF.j)(FF, .2),
          CF = Math.hypot(SF.x, SF.y);
        if (0 === CF) return {
          x: 0,
          y: 0
        };
        const AF = CF * CF * 1600,
          uF = TF(WF, 0, 100) / 1e3;
        return {
          x: SF.x / CF * AF * uF,
          y: SF.y / CF * AF * uF
        }
      },
      LF = (FF, WF) => "y" === WF ? FF.scrollHeight > FF.clientHeight + 1 : FF.scrollWidth > FF.clientWidth + 1,
      mW = (FF, WF) => {
        const SF = getComputedStyle(FF),
          CF = "y" === WF ? SF.overflowY : SF.overflowX;
        return ("auto" === CF || "scroll" === CF) && LF(FF, WF)
      },
      OF = (FF, WF, SF) => {
        for (let uF = FF instanceof HTMLElement ? FF : null !== (CF = null === FF || void 0 === FF ? void 0 : FF.parentElement) && void 0 !== CF ? CF : null; uF; uF = uF.parentElement) {
          var CF;
          if (mW(uF, WF)) return uF;
          if (uF === SF) return null
        }
        if (SF) return null;
        const AF = document.scrollingElement;
        return AF instanceof HTMLElement && LF(AF, WF) ? AF : null
      },
      xW = new WeakMap,
      ZF = (FF, WF) => {
        const SF = performance.now(),
          CF = xW.get(FF);
        if (CF && CF.axis === WF && SF - CF.atMs < 500 && (!CF.container || CF.container.isConnected)) return CF.container;
        const AF = oF(FF, WF);
        return xW.set(FF, {
          axis: WF,
          atMs: SF,
          container: AF
        }), AF
      },
      oF = (FF, WF) => {
        let SF = mW(FF, WF) ? FF : null,
          CF = SF ? SF.clientWidth * SF.clientHeight : 0;
        for (const AF of FF.querySelectorAll("*")) {
          const FF = AF.clientWidth * AF.clientHeight;
          FF > CF && mW(AF, WF) && (SF = AF, CF = FF)
        }
        return SF
      },
      YF = (FF, WF, SF) => "y" === WF ? SF < 0 ? FF.scrollTop > 0 : FF.scrollTop + FF.clientHeight < FF.scrollHeight - 1 : SF < 0 ? FF.scrollLeft > 0 : FF.scrollLeft + FF.clientWidth < FF.scrollWidth - 1,
      MF = (FF, WF, SF) => {
        "y" === WF ? FF.scrollBy({
          top: SF,
          behavior: "instant"
        }) : FF.scrollBy({
          left: SF,
          behavior: "instant"
        })
      },
      cW = FF => {
        if (!FF || FF === document.scrollingElement) return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
        const WF = FF.getBoundingClientRect(),
          SF = Math.max(0, WF.left),
          CF = Math.max(0, WF.top);
        return new DOMRect(SF, CF, Math.min(window.innerWidth, WF.right) - SF, Math.min(window.innerHeight, WF.bottom) - CF)
      },
      GF = (FF, WF) => FF.left < WF.right && WF.left < FF.right && FF.top < WF.bottom && WF.top < FF.bottom;
    var zW = SF(46),
      IF = SF(918),
      fF = SF.n(IF),
      yW = SF(971);
    let sF = 0,
      nF = !1;
    class HF {
      constructor() {
        this.element = null, this.shownKey = "", this.gap = null
      }
      setElement(FF) {
        this.element = FF, this.shownKey = "", this.gap = null
      }
      show(FF) {
        const WF = this.element;
        if (!WF) return;
        const SF = FF ? this.keepOnScreen(WF, FF) : null,
          CF = SF ? `${SF.left},${SF.top},${SF.width},${SF.height}` : "";
        if (CF === this.shownKey) return;
        const AF = "" === this.shownKey;
        this.shownKey = CF, WF.classList.toggle("Visible", null !== SF), SF && (WF.classList.toggle("Snap", AF), WF.style.width = `${SF.width}px`, WF.style.height = `${SF.height}px`, WF.style.transform = `translate(${SF.left}px, ${SF.top}px)`, AF && (WF.offsetWidth, WF.classList.remove("Snap")))
      }
      hide() {
        this.show(null)
      }
      keepOnScreen(FF, WF) {
        var SF;
        const CF = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!nF){nF=!0;const FF=document.createElement("div");FF.setAttribute("aria-hidden","true"),FF.style.cssText="position: fixed; top: 0; left: 0; width: 1rem; height: 0; visibility: hidden; pointer-events: none",document.body.appendChild(FF),new ResizeObserver((()=>{sF++})).observe(FF)}return String(sF)})()}`;
        (null === (SF = this.gap) || void 0 === SF ? void 0 : SF.key) !== CF && (this.gap = {
          px: parseFloat(getComputedStyle(FF).paddingLeft) || 0,
          key: CF
        });
        const AF = this.gap.px + 2,
          uF = Math.max(WF.left, AF),
          hF = Math.max(WF.top, AF),
          bW = Math.min(WF.left + WF.width, window.innerWidth - AF),
          dF = Math.min(WF.top + WF.height, window.innerHeight - AF);
        return bW <= uF || dF <= hF ? WF : {
          left: uF,
          top: hF,
          width: bW - uF,
          height: dF - hF
        }
      }
    }
    const KF = FF => {
      let {
        placer: WF,
        className: SF
      } = FF;
      const CF = (0, zW.useCallback)((FF => {
        WF.setElement(FF)
      }), [WF]);
      return (0, yW.jsx)("div", {
        ref: CF,
        className: fF()("PadReticle", SF),
        "aria-hidden": !0
      })
    };
    var wF = SF(7599),
      XF = SF(1513);
    const UF = FF => FF >= 56320 && FF <= 57343,
      BF = FF => FF >= 55296 && FF <= 56319,
      jW = (FF, WF) => WF >= 2 && UF(FF.charCodeAt(WF - 1)) && BF(FF.charCodeAt(WF - 2)) ? WF - 2 : Math.max(0, WF - 1),
      vW = (FF, WF) => {
        let SF;
        var CF, AF;
        return SF = FF.start !== FF.end ? WF < 0 ? FF.start : FF.end : WF < 0 ? jW(FF.value, FF.start) : (CF = FF.value, (AF = FF.start) + 1 < CF.length && BF(CF.charCodeAt(AF)) && UF(CF.charCodeAt(AF + 1)) ? AF + 2 : Math.min(CF.length, AF + 1)), {
          value: FF.value,
          start: SF,
          end: SF
        }
      },
      JF = ["text", "search", "url", "email", "tel", "password", "number"],
      pF = FF => !(!(0, XF.e)(FF) || FF.isContentEditable || FF.hasAttribute("data-pad-no-osk")) && (FF instanceof HTMLTextAreaElement || FF instanceof HTMLInputElement && JF.includes(FF.type)),
      lF = FF => null !== FF.selectionStart,
      FW = FF => {
        var WF, SF;
        const {
          value: CF
        } = FF;
        return {
          value: CF,
          start: null !== (WF = FF.selectionStart) && void 0 !== WF ? WF : CF.length,
          end: null !== (SF = FF.selectionEnd) && void 0 !== SF ? SF : CF.length
        }
      },
      WW = (FF, WF, SF) => {
        if (FF.readOnly) return;
        const CF = FF instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(CF, "value").set.call(FF, WF.value), lF(FF) && FF.setSelectionRange(WF.start, WF.end), (0, tW.h)(FF, new InputEvent("input", {
          bubbles: !0,
          inputType: SF
        }))
      };
    let SW = !1;
    const CW = (FF, WF) => !!document.execCommand(FF, !1, WF) || (SW || (SW = !0, console.warn(`execCommand("${FF}") failed; the on-screen keyboard is setting the value directly`)), !1),
      AW = (FF, WF) => {
        CW("insertText", WF) || WW(FF, function(FF, WF) {
          let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
          const CF = FF.value.slice(0, FF.start),
            AF = FF.value.slice(FF.end);
          let uF = SF < 0 ? WF.length : Math.max(0, SF - CF.length - AF.length);
          uF > 0 && uF < WF.length && BF(WF.charCodeAt(uF - 1)) && uF--;
          const hF = WF.slice(0, uF),
            bW = CF.length + hF.length;
          return {
            value: CF + hF + AF,
            start: bW,
            end: bW
          }
        }(FW(FF), WF, FF.maxLength), "insertText")
      },
      uW = FF => {
        CW("delete") || WW(FF, (FF => {
          const WF = FF.start === FF.end ? jW(FF.value, FF.start) : FF.start;
          return {
            value: FF.value.slice(0, WF) + FF.value.slice(FF.end),
            start: WF,
            end: WF
          }
        })(FW(FF)), "deleteContentBackward")
      },
      hW = (FF, WF) => {
        if (!lF(FF)) return;
        const SF = vW(FW(FF), WF);
        FF.setSelectionRange(SF.start, SF.end)
      },
      bS = ["button", "a[href]", "input:not([type=hidden])", "textarea", "select", "[role=button]", "[role=tab]", "[role=switch]", "[role=checkbox]", "[role=option]", "[role=menuitem]", "[data-pad-focusable]", "[data-pad-tab]", ".Dropdown-control", ".Dropdown-option"].join(","),
      dW = (FF, WF) => {
        if ("function" === typeof FF.checkVisibility) return !FF.checkVisibility({
          visibilityProperty: !0,
          checkVisibilityCSS: !0,
          opacityProperty: WF,
          checkOpacity: WF
        });
        const {
          visibility: SF
        } = getComputedStyle(FF);
        if ("hidden" === SF || "collapse" === SF) return !0;
        if (!WF) return !1;
        for (let CF = FF; CF; CF = CF.parentElement)
          if ("0" === getComputedStyle(CF).opacity) return !0;
        return !1
      },
      PW = FF => {
        if (!FF.isConnected || dW(FF, !0)) return !1;
        const WF = FF.getBoundingClientRect();
        return WF.width > 0 && WF.height > 0
      },
      RW = FF => !!FF.matches(":disabled, [aria-disabled='true']") || "button" === FF.getAttribute("role") && "-1" === FF.getAttribute("tabindex"),
      iS = FF => {
        var WF;
        if (FF.closest("[data-pad-ignore]")) return !0;
        return !!(null === (WF = FF.parentElement) || void 0 === WF ? void 0 : WF.closest("[data-pad-focusable]"))
      },
      eW = FF => {
        const WF = FF.querySelectorAll(bS);
        return FF.matches(bS) ? [FF, ...WF] : WF
      },
      EW = FF => {
        const WF = [];
        for (const SF of eW(FF)) !iS(SF) && PW(SF) && WF.push(SF);
        return WF
      },
      QW = new WeakMap,
      rS = FF => {
        const WF = QW.get(FF);
        if (WF && gS(WF, FF)) return !0;
        for (const SF of eW(FF))
          if (!iS(SF) && PW(SF)) return QW.set(FF, SF), !0;
        return QW.delete(FF), !1
      },
      gS = (FF, WF) => WF.contains(FF) && FF.matches(bS) && !iS(FF) && PW(FF),
      tS = (FF, WF) => gS(FF, WF) && !RW(FF),
      TW = FF => {
        const WF = WF => {
          let SF = 0;
          for (let CF = WF.parentElement; CF && CF !== FF; CF = CF.parentElement) SF++;
          return SF
        };
        return [...FF.querySelectorAll("[data-pad-initial-area]")].filter(PW).sort(((FF, SF) => WF(SF) - WF(FF)))
      },
      aS = FF => pF(FF),
      kS = FF => {
        const WF = FF.getBoundingClientRect();
        return {
          x: WF.left + WF.width / 2,
          y: WF.top + WF.height / 2
        }
      },
      qS = (FF, WF, SF) => ({
        bubbles: !0,
        cancelable: !0,
        composed: !0,
        view: window,
        clientX: FF.x,
        clientY: FF.y,
        screenX: FF.x,
        screenY: FF.y,
        button: WF,
        buttons: SF,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: !0
      }),
      VW = (FF, WF) => {
        (0, tW.h)(FF, WF)
      },
      NW = function(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const CF = 0 === SF ? 1 : 2;
        VW(FF, new PointerEvent("pointerdown", qS(WF, SF, CF))), VW(FF, new MouseEvent("mousedown", qS(WF, SF, CF)))
      },
      DW = function(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        VW(FF, new PointerEvent("pointerup", qS(WF, SF, 0))), VW(FF, new MouseEvent("mouseup", qS(WF, SF, 0)))
      },
      LW = function(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        NW(FF, WF, SF), DW(FF, WF, SF), VW(FF, 0 === SF ? new MouseEvent("click", qS(WF, 0, 0)) : new MouseEvent("contextmenu", qS(WF, 2, 0)))
      },
      mS = function(FF, WF, SF) {
        let {
          leaveBelow: CF = null,
          enterBelow: AF = null
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (FF !== WF) {
          if (null !== FF && void 0 !== FF && FF.isConnected) {
            const AF = {
              ...qS(SF, 0, 0),
              relatedTarget: WF
            };
            VW(FF, new PointerEvent("pointerout", AF)), VW(FF, new MouseEvent("mouseout", AF));
            const uF = FF => !!WF && FF.contains(WF) || !!CF && FF.contains(CF);
            for (let WF = FF; WF && !uF(WF); WF = WF.parentElement) VW(WF, new PointerEvent("pointerleave", {
              ...AF,
              bubbles: !1
            })), VW(WF, new MouseEvent("mouseleave", {
              ...AF,
              bubbles: !1
            }))
          }
          if (WF) {
            const CF = {
              ...qS(SF, 0, 0),
              relatedTarget: FF
            };
            VW(WF, new PointerEvent("pointerover", CF)), VW(WF, new MouseEvent("mouseover", CF));
            const uF = [],
              hF = WF => !(null === FF || void 0 === FF || !FF.isConnected) && WF.contains(FF) || !!AF && WF.contains(AF);
            for (let FF = WF; FF && !hF(FF); FF = FF.parentElement) uF.push(FF);
            for (const FF of uF.reverse()) VW(FF, new PointerEvent("pointerenter", {
              ...CF,
              bubbles: !1
            })), VW(FF, new MouseEvent("mouseenter", {
              ...CF,
              bubbles: !1
            }));
            VW(WF, new PointerEvent("pointermove", qS(SF, 0, 0))), VW(WF, new MouseEvent("mousemove", qS(SF, 0, 0)))
          }
        } else WF && (VW(WF, new PointerEvent("pointermove", qS(SF, 0, 0))), VW(WF, new MouseEvent("mousemove", qS(SF, 0, 0))))
      },
      OW = FF => {
        PF.j.Uu(wF.d, FF)
      },
      xS = FF => {
        if (aS(FF)) return void OW(FF);
        const WF = FF.hasAttribute("data-pad-focusable") ? FF.querySelector("a[href]") : null,
          SF = null !== WF && void 0 !== WF ? WF : FF;
        LW(SF, kS(SF))
      },
      ZW = ".Dropdown-root.is-open",
      oW = FF => {
        const WF = FF.querySelector(".Dropdown-control");
        return xS(WF), WF
      },
      YW = FF => {
        var WF;
        const SF = null !== (WF = FF.closest(ZW)) && void 0 !== WF ? WF : FF.querySelector(ZW);
        return SF ? oW(SF) : null
      },
      MW = FF => {
        for (const WF of document.querySelectorAll(ZW)) WF.contains(FF) || oW(WF)
      },
      cS = FF => null !== FF.closest("input[type=color], input[type=file], [data-pad-mouse-only]"),
      GW = FF => {
        const WF = FF ? document.elementFromPoint(FF.x, FF.y) : null;
        return !(null === WF || void 0 === WF || !WF.closest("[data-pad-repeat]"))
      },
      zS = FF => {
        var WF;
        return null !== (WF = [...FF.querySelectorAll("[data-pad-back]")].find(PW)) && void 0 !== WF ? WF : null
      },
      IW = FF => {
        const WF = zS(FF);
        return !!WF && (xS(WF), !0)
      },
      fW = FF => {
        var WF, SF, CF, AF;
        return null !== (WF = null !== (SF = null !== (CF = FF.getAttribute("data-pad-key")) && void 0 !== CF ? CF : FF.getAttribute("href")) && void 0 !== SF ? SF : null === (AF = FF.querySelector("a[href]")) || void 0 === AF ? void 0 : AF.getAttribute("href")) && void 0 !== WF ? WF : null
      },
      yS = {
        x: 0,
        y: 0,
        visible: !1,
        pressed: !1
      };
    const sW = new class {
        constructor() {
          this.state = yS, this.listeners = new Set
        }
        get() {
          return this.state
        }
        set(FF) {
          if (WF = this.state, SF = FF, (WF.visible || SF.visible) && (WF.visible !== SF.visible || WF.x !== SF.x || WF.y !== SF.y || WF.pressed !== SF.pressed)) {
            var WF, SF;
            this.state = FF;
            for (const WF of this.listeners) WF(FF)
          }
        }
        hide() {
          this.set(yS)
        }
        subscribe(FF) {
          return this.listeners.add(FF), () => {
            this.listeners.delete(FF)
          }
        }
      },
      nW = (FF, WF) => {
        let {
          kind: SF,
          holding: CF,
          hasPress: AF,
          hasBack: uF,
          slotHasItem: hF
        } = WF;
        switch (FF) {
          case "primary":
            return "slot" === SF ? "slotPrimary" : "recipe" === SF || "button" === SF ? AF ? "pressPrimary" : "click" : "textField" === SF ? "openKeyboard" : null;
          case "secondary":
            return "slot" === SF ? "slotSecondary" : "button" !== SF && "recipe" !== SF || !AF ? null : "pressSecondary";
          case "quickMove":
            return "slot" === SF && hF ? "slotQuickMove" : null;
          case "hotbarSwap":
            return "slot" === SF && hF && !CF ? "hotbarPick" : null;
          case "openButton":
            return "close";
          case "back":
            return CF ? "cancel" : uF ? "pressBack" : "close"
        }
      },
      HW = FF => {
        const WF = [];
        if (FF.hotbarPicking) return WF.push({
          actions: ["inventoryPrimary", "inventoryHotbarSwap"],
          labelKey: "inventorySwapHere"
        }), WF.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryCancel"
        }), WF;
        if (FF.holding) "slot" === FF.kind ? (WF.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryPlace"
        }), WF.push({
          actions: ["inventorySecondary"],
          labelKey: "inventoryPlaceOne"
        })) : "textField" === FF.kind && WF.push({
          actions: ["inventoryPrimary"],
          labelKey: "inventoryType"
        }), WF.push({
          actions: ["inventoryClose"],
          labelKey: "inventoryPutBack"
        }), WF.push({
          actions: ["inventoryDrop"],
          labelKey: "inventoryDrop"
        }), FF.openButtonCloses && WF.push({
          actions: ["inventory"],
          labelKey: "inventoryClose"
        });
        else {
          var SF;
          "slot" === FF.kind && FF.slotHasItem ? (WF.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryTake"
          }), WF.push({
            actions: ["inventorySecondary"],
            labelKey: "inventoryTakeHalf"
          }), WF.push({
            actions: ["inventoryQuickMove"],
            labelKey: FF.quickMoveToHotbar ? "inventoryToHotbar" : "inventoryQuickMove"
          }), WF.push({
            actions: ["inventoryHotbarSwap"],
            labelKey: "inventoryHotbarSwap"
          }), WF.push({
            actions: ["inventoryDrop"],
            labelKey: "inventoryDrop"
          })) : "button" !== FF.kind && "recipe" !== FF.kind || !FF.pressHints ? "button" === FF.kind || "recipe" === FF.kind ? WF.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventorySelect"
          }) : "textField" === FF.kind && WF.push({
            actions: ["inventoryPrimary"],
            labelKey: "inventoryType"
          }) : (FF.pressHints.primary && WF.push({
            actions: ["inventoryPrimary"],
            labelKey: FF.pressHints.primary
          }), FF.pressHints.secondary && WF.push({
            actions: ["inventorySecondary"],
            labelKey: FF.pressHints.secondary
          }));
          const CF = null === (SF = FF.pressHints) || void 0 === SF ? void 0 : SF.back;
          CF && WF.push({
            actions: ["inventoryClose"],
            labelKey: CF
          });
          const AF = [];
          FF.openButtonCloses && AF.push("inventory"), CF || AF.push("inventoryClose"), AF.length > 0 && WF.push({
            actions: AF,
            labelKey: "inventoryClose"
          })
        }
        return WF.push({
          actions: ["inventoryPanelPrevious", "inventoryPanelNext"],
          labelKey: "inventoryPanels"
        }), FF.hasCategories ? WF.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryCategory"
        }) : FF.hasList && WF.push({
          actions: ["menuPageUp", "menuPageDown"],
          labelKey: "inventoryPage"
        }), WF
      };
    var KW = SF(7608);
    const wW = FF => ({
        x: FF.left + FF.width / 2,
        y: FF.top + FF.height / 2
      }),
      XW = (FF, WF, SF) => FF < 0 ? SF >= 0 ? 0 : WF - 1 : ((FF + SF) % WF + WF) % WF,
      UW = FF => "Left" === FF || "Right" === FF,
      BW = (FF, WF, SF) => {
        const CF = UW(SF),
          AF = CF ? FF.top : FF.left,
          uF = CF ? FF.height : FF.width,
          hF = CF ? WF.top : WF.left,
          bW = CF ? WF.height : WF.width,
          dF = Math.max(0, Math.max(hF - (AF + uF), AF - (hF + bW)));
        return uF > 1.5 * bW ? {
          gap: dF,
          offset: Math.max(0, hF - AF) + .1 * Math.max(0, AF - hF)
        } : {
          gap: dF,
          offset: Math.abs(hF + bW / 2 - (AF + uF / 2))
        }
      },
      jS = (FF, WF, SF) => {
        const CF = ((FF, WF, SF) => {
          const CF = wW(FF),
            AF = wW(WF),
            uF = UW(SF) ? Math.min(FF.width, WF.width) / 4 : Math.min(FF.height, WF.height) / 4;
          switch (SF) {
            case "Right":
              return AF.x - CF.x >= uF ? Math.max(0, WF.left - (FF.left + FF.width)) : null;
            case "Left":
              return CF.x - AF.x >= uF ? Math.max(0, FF.left - (WF.left + WF.width)) : null;
            case "Down":
              return AF.y - CF.y >= uF ? Math.max(0, WF.top - (FF.top + FF.height)) : null;
            case "Up":
              return CF.y - AF.y >= uF ? Math.max(0, FF.top - (WF.top + WF.height)) : null
          }
        })(FF, WF, SF);
        if (null === CF) return null;
        const AF = BW(FF, WF, SF);
        return CF + 3 * AF.gap + .5 * AF.offset
      },
      vS = (FF, WF) => WF.visible || null !== WF.scrollGroup && WF.scrollGroup === FF.scrollGroup,
      JW = (FF, WF, SF, CF) => {
        let AF = null,
          uF = 1 / 0;
        for (const hF of WF) {
          if (hF.key === FF.key || !vS(FF, hF) || !CF(hF)) continue;
          const WF = jS(FF.rect, hF.rect, SF);
          null !== WF && WF < uF && (AF = hF, uF = WF)
        }
        return AF
      },
      pW = (FF, WF, SF) => {
        const CF = JW(FF, WF, SF, (() => !0));
        if (!CF || UW(SF) || null === FF.scrollGroup || CF.scrollGroup === FF.scrollGroup) return CF;
        const AF = JW(FF, WF, SF, (WF => 0 === BW(FF.rect, WF.rect, SF).gap));
        return null !== AF && void 0 !== AF ? AF : CF
      },
      lW = (FF, WF, SF) => {
        let CF = null,
          AF = 1 / 0;
        for (const uF of WF) {
          if (!uF.visible || SF && !SF(uF)) continue;
          const WF = wW(uF.rect),
            hF = Math.hypot(WF.x - FF.x, WF.y - FF.y);
          hF < AF && (CF = uF, AF = hF)
        }
        return CF
      },
      FS = (FF, WF) => {
        let SF = null;
        for (const CF of WF) {
          const {
            left: WF,
            top: AF,
            width: uF,
            height: hF
          } = CF.rect;
          !CF.visible || FF.x < WF || FF.x >= WF + uF || FF.y < AF || FF.y >= AF + hF || (!SF || uF * hF < SF.rect.width * SF.rect.height) && (SF = CF)
        }
        return SF
      },
      WS = FF => {
        let WF = null;
        for (const SF of FF) {
          if (!SF.visible) continue;
          if (!WF) {
            WF = SF;
            continue
          }
          const FF = Math.min(WF.rect.height, SF.rect.height) / 2,
            CF = SF.rect.top - WF.rect.top;
          (CF < -FF || Math.abs(CF) <= FF && SF.rect.left < WF.rect.left) && (WF = SF)
        }
        return WF
      },
      SS = (FF, WF, SF, CF, AF) => {
        const uF = AF % WF,
          hF = Math.floor(AF / WF);
        return {
          left: FF.left + uF * SF,
          top: FF.top + hF * CF,
          width: FF.width,
          height: FF.height
        }
      },
      CS = ".EntireInventoryWrapper .Inventory, .HotBarGameItemsContainer",
      AS = ".LazyLoadedItemWrapper",
      uS = ["[data-inven-idx]", "[data-recipe-key]", "[role=button]", "button", "input:not([type=hidden])", "textarea", ".CreativeCategoryTab", ".CreativeCategoryDropdownButton", ".CreativeCategoryDropdownOption", "[data-craft-ingredient]"].join(","),
      hS = [
        ["hotbar", ".HotBarGameItemsContainer"],
        ["gameButtons", ".ClientGameInventoryButtons"],
        ["categories", ".CreativeCategoryRail"],
        ["recipe", ".CraftableInfo"],
        ["armour", ".ArmourItemSlots"],
        ["main", ".InvenBodyRight"],
        ["left", ".InvenLeftSide"]
      ],
      bC = ["gameButtons", "categories", "left", "recipe", "armour", "main", "hotbar"],
      dS = new WeakMap;
    let PS = 0;
    const RS = FF => {
        let WF = dS.get(FF);
        return WF || (WF = "el:" + PS++, dS.set(FF, WF)), WF
      },
      iC = FF => ({
        left: FF.left,
        top: FF.top,
        width: FF.width,
        height: FF.height
      }),
      eS = (FF, WF) => FF.width > 0 && FF.height > 0 && FF.left + FF.width > 0 && FF.top + FF.height > 0 && FF.left < WF.width && FF.top < WF.height,
      ES = FF => FF.hasAttribute("data-inven-idx") ? "slot" : FF.hasAttribute("data-recipe-key") ? "recipe" : FF.hasAttribute("data-craft-ingredient") || RW(FF) ? "info" : aS(FF) ? "textField" : "button",
      QS = (FF, WF) => "slot" === WF ? Number(FF.getAttribute("data-inven-idx")) : null,
      rC = FF => FF.matches(AS) ? FF.querySelector(uS) : FF,
      gC = FF => {
        var WF, SF;
        return {
          element: FF,
          recipe: null !== (WF = FF && (null === (SF = rC(FF)) || void 0 === SF ? void 0 : SF.getAttribute("data-recipe-key"))) && void 0 !== WF ? WF : null
        }
      },
      tC = FF => {
        const WF = rC(FF);
        if (!WF) return {
          kind: "pending",
          idx: null
        };
        const SF = ES(WF);
        return {
          kind: SF,
          idx: QS(WF, SF)
        }
      },
      TS = FF => {
        const WF = [];
        for (const [SF, CF] of hS) {
          FF.matches(CF) && WF.push([SF, FF]);
          for (const AF of FF.querySelectorAll(CF)) WF.push([SF, AF])
        }
        return WF
      },
      aC = (FF, WF) => {
        for (const [SF, CF] of FF)
          if (CF.contains(WF)) return SF;
        return "other"
      },
      kC = (FF, WF, SF, CF, AF, uF, hF) => {
        var bW;
        const dF = FF.children,
          PF = iC(dF[0].getBoundingClientRect()),
          RF = [{
            element: dF[0],
            rect: PF
          }];
        if (uF.push(RF[0]), 0 === PF.width || 0 === PF.height) return;
        let iW = 1;
        for (; iW < dF.length && Math.abs(dF[iW].getBoundingClientRect().top - PF.top) < 1;) iW++;
        const eF = FF => {
            const WF = {
              element: dF[FF],
              rect: iC(dF[FF].getBoundingClientRect())
            };
            return uF.push(WF), RF.push(WF), WF.rect
          },
          EF = iW > 1 ? eF(1).left - PF.left : PF.width,
          QF = dF.length > iW ? eF(iW).top - PF.top : PF.height,
          rW = OF(FF, "y", WF),
          gW = rW === document.scrollingElement ? null : rW;
        gW && uF.push({
          element: gW,
          rect: iC(gW.getBoundingClientRect())
        });
        const tW = gW ? cW(gW) : null,
          TF = gW ? RS(gW) : null;
        let aW = null;
        var kW;
        gW && tW && (aW = null !== (kW = hF.get(gW)) && void 0 !== kW ? kW : null, aW || (aW = {
          top: gW.scrollTop,
          left: gW.scrollLeft,
          box: tW,
          viewport: CF,
          targets: [],
          probes: [],
          holdsOthers: !1
        }, hF.set(gW, aW)), aW.probes.push(...RF));
        const qW = AF.length;
        for (let VF = 0; VF < dF.length; VF++) {
          const FF = dF[VF],
            WF = SS(PF, iW, EF, QF, VF),
            uF = WF.top + WF.height / 2,
            hF = FF.firstElementChild ? FF.querySelector(uS) : null,
            bW = hF ? ES(hF) : "pending";
          AF.push({
            key: RS(FF),
            rect: WF,
            panel: SF,
            scrollGroup: TF,
            visible: eS(WF, CF) && (!tW || uF >= tW.top && uF <= tW.bottom),
            element: FF,
            kind: bW,
            idx: hF ? QS(hF, bW) : null,
            scrollContainer: gW
          })
        }
        null === (bW = aW) || void 0 === bW || bW.targets.push(...AF.slice(qW))
      };
    class qC {
      constructor() {
        this.latched = null, this.presses = 0
      }
      press(FF, WF, SF, CF) {
        this.latched = {
          source: FF,
          focusKey: WF,
          sinceMs: SF,
          hold: {
            id: ++this.presses,
            holdMs: CF
          }
        }
      }
      update(FF, WF, SF) {
        const CF = this.latched;
        return CF ? FF && WF === CF.focusKey ? SF - CF.sinceMs < CF.hold.holdMs ? null : (this.latched = null, CF.source) : (this.latched = null, null) : null
      }
      getHold() {
        var FF, WF;
        return null !== (FF = null === (WF = this.latched) || void 0 === WF ? void 0 : WF.hold) && void 0 !== FF ? FF : null
      }
      reset() {
        this.latched = null
      }
    }
    var VS = SF(7612);
    const NS = {
        kind: "none"
      },
      DS = FF => ({
        x: FF.clientX,
        y: FF.clientY
      }),
      LS = () => 2 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
    class mC {
      constructor() {
        this.hovered = NS, this.signature = "", this.holding = !1, this.lastPoint = {
          clientX: 0,
          clientY: 0
        }
      }
      sync(FF, WF, SF, CF, AF) {
        const uF = null !== WF ? {
            kind: "slot",
            idx: WF
          } : SF ? {
            kind: "element",
            element: SF
          } : NS,
          hF = `${AF}|${Math.round(CF.clientX)},${Math.round(CF.clientY)}`,
          bW = (dF = this.hovered, PF = uF, "slot" === dF.kind && "slot" === PF.kind ? dF.idx === PF.idx : "element" === dF.kind && "element" === PF.kind ? dF.element === PF.element : dF.kind === PF.kind);
        var dF, PF;
        if (bW && hF === this.signature) return;
        const RF = !bW || AF !== this.holding || "" === this.signature;
        this.signature = hF, this.holding = AF, this.lastPoint = CF;
        const iW = this.hovered;
        if (this.hovered = uF, "slot" === uF.kind) return this.leaveElement(iW, null, CF), void(RF ? FF.hover(uF.idx, CF) : FF.moveTo(CF));
        if (bW) return void("element" === uF.kind ? mS(uF.element, uF.element, DS(CF)) : FF.hover(null, CF));
        FF.hover(null, CF);
        const eF = "element" === uF.kind ? uF.element : null;
        "element" === iW.kind ? mS(iW.element, eF, DS(CF)) : eF && mS(null, eF, DS(CF))
      }
      invalidate() {
        this.signature = ""
      }
      clear(FF) {
        const WF = this.hovered;
        this.hovered = NS, this.signature = "", "none" !== WF.kind && (this.leaveElement(WF, null, this.lastPoint), FF && "slot" === WF.kind && FF.hover(null, this.lastPoint))
      }
      leaveElement(FF, WF, SF) {
        "element" === FF.kind && mS(FF.element, WF, DS(SF))
      }
    }
    class OS {
      constructor() {
        this.lastTiltedMs = -1 / 0
      }
      update(FF, WF) {
        NF(FF) && (this.lastTiltedMs = WF)
      }
      allowsClick(FF) {
        return FF - this.lastTiltedMs > 150
      }
    }
    class xC {
      constructor() {
        this.remainder = 0, this.container = null
      }
      isScrolling(FF) {
        return 0 !== (0, QF.j)(FF, .2).y
      }
      step(FF, WF, SF) {
        FF !== this.container && (this.container = FF, this.remainder = 0);
        const CF = DF(WF, SF).y;
        if (0 === CF) return this.remainder = 0, !1;
        const AF = this.remainder + CF,
          uF = Math.trunc(AF);
        if (this.remainder = AF - uF, 0 === uF) return !1;
        const hF = FF.scrollTop;
        return FF.scrollTop = hF + uF, FF.scrollTop !== hF
      }
      reset() {
        this.remainder = 0, this.container = null
      }
    }
    var ZS = SF(7615);
    const oS = "[data-pad-inventory-default]",
      YS = ".HotBarGameItemsContainer .InvenItem.Selected",
      MS = {
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
      cC = [
        ["primary", "inventoryPrimary"],
        ["secondary", "inventorySecondary"],
        ["quickMove", "inventoryQuickMove"],
        ["hotbarSwap", "inventoryHotbarSwap"],
        ["back", "inventoryClose"],
        ["openButton", "inventory"]
      ],
      GS = ["inventoryPrimary", "inventorySecondary", "inventoryQuickMove", "inventoryHotbarSwap", "inventoryClose", "inventoryDrop"],
      zC = ["inventoryPanelPrevious", "inventoryPanelNext", "menuPageUp", "menuPageDown"],
      IS = [...GS, ...zC],
      fS = () => {
        return FF = (0, RF.h)("inventory"), !IS.map(RF.h).includes(FF) && !(0, QF.B)(FF);
        var FF
      },
      yC = new Set(["slotPrimary", "slotSecondary", "slotQuickMove", "pressPrimary", "pressSecondary", "openKeyboard"]),
      sS = (FF, WF) => {
        const SF = !(null === WF || void 0 === WF || !WF.isHolding());
        return function(FF, WF) {
          const SF = FF.find((FF => FF.visible && WF(FF)));
          if (SF) return SF;
          for (var CF = arguments.length, AF = new Array(CF > 2 ? CF - 2 : 0), uF = 2; uF < CF; uF++) AF[uF - 2] = arguments[uF];
          for (const hF of AF) {
            const WF = WS(FF.filter(hF));
            if (WF) return WF
          }
          return WS(FF)
        }(FF, (FF => {
          const {
            element: WF
          } = FF;
          return WF.matches(oS) || null !== WF.querySelector(oS) || WF.matches(YS)
        }), (FF => "slot" === FF.kind ? SF || null !== FF.idx && !(null === WF || void 0 === WF || !WF.hasItemAt(FF.idx)) : "recipe" === FF.kind || "pending" === FF.kind), (FF => "slot" === FF.kind || "button" === FF.kind))
      };
    class nS {
      constructor() {
        this.set = null, this.observer = new MutationObserver((FF => {
          FF.some((FF => {
            return !((WF = FF.target) instanceof Element && null !== WF.closest(AS));
            var WF
          })) && (this.set = null)
        })), this.invalidate = () => {
          this.set = null
        }, this.onScroll = FF => {
          this.scrolled(FF.target)
        }
      }
      get() {
        if (!this.set) {
          this.set = (() => {
            const FF = [],
              WF = [];
            let SF = !1;
            const CF = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              AF = new Map;
            for (const bW of document.querySelectorAll(CS)) {
              const hF = TS(bW);
              SF ||= null !== bW.querySelector(".CreativeCategoryTab");
              for (const SF of bW.querySelectorAll(`${AS}:first-child`)) {
                const uF = SF.parentElement;
                kC(uF, bW, aC(hF, uF), CF, FF, WF, AF)
              }
              for (const SF of bW.querySelectorAll(uS)) {
                var uF;
                if (SF.closest(AS) || SF.closest("[data-pad-ignore]")) continue;
                const AF = null === (uF = SF.parentElement) || void 0 === uF ? void 0 : uF.closest(uS);
                if (AF && bW.contains(AF)) continue;
                const dF = ES(SF),
                  PF = QS(SF, dF);
                if (-1 === PF) continue;
                const RF = iC(SF.getBoundingClientRect());
                WF.push({
                  element: SF,
                  rect: RF
                }), eS(RF, CF) && FF.push({
                  key: RS(SF),
                  rect: RF,
                  panel: aC(hF, SF),
                  scrollGroup: null,
                  visible: !0,
                  element: SF,
                  kind: dF,
                  idx: PF,
                  scrollContainer: null
                })
              }
            }
            for (const [bW, dF] of AF) dF.holdsOthers = WF.some((FF => FF.element !== bW && bW.contains(FF.element) && !FF.element.closest(AS)));
            const hF = new Map;
            for (const bW of FF) hF.set(bW.element, bW);
            return {
              targets: FF,
              byElement: hF,
              hasCategories: SF,
              probes: WF,
              scrollers: AF
            }
          })(), this.observer.disconnect();
          for (const FF of document.querySelectorAll(CS)) this.observer.observe(FF, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "disabled", "aria-disabled", "tabindex", "data-inven-idx"]
          })
        }
        return this.set
      }
      scrolled(FF) {
        !this.set || FF instanceof Element && ((FF, WF) => {
          const SF = FF.scrollers.get(WF);
          if (!SF || SF.holdsOthers || WF.scrollLeft !== SF.left) return !1;
          const CF = WF.scrollTop - SF.top;
          if (0 === CF) return !0;
          SF.top = WF.scrollTop;
          for (const AF of SF.probes) AF.rect.top -= CF;
          for (const AF of SF.targets) {
            AF.rect.top -= CF;
            const FF = AF.rect.top + AF.rect.height / 2;
            AF.visible = eS(AF.rect, SF.viewport) && FF >= SF.box.top && FF <= SF.box.bottom
          }
          return !0
        })(this.set, FF) || (this.set = null)
      }
      revalidate() {
        this.set && this.set.probes.some((FF => {
          return WF = FF.rect, SF = FF.element.getBoundingClientRect(), !(WF.left === SF.left && WF.top === SF.top && WF.width === SF.width && WF.height === SF.height);
          var WF, SF
        })) && (this.set = null)
      }
      disconnect() {
        this.observer.disconnect(), this.set = null
      }
    }
    const HS = new class {
        constructor() {
          this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(QF.y.map((FF => [FF, (0, rW.b)(QF.z)]))), this.stickRepeat = new QF.d((0, rW.b)(QF.X)), this.pageUpTimer = (0, rW.b)(QF.T), this.pageDownTimer = (0, rW.b)(QF.T), this.stickGate = new qW, this.pointer = null, this.activePress = null, this.dropLatch = new qC, this.scroller = new xC, this.scrollStickClick = new OS, this.hover = new mC, this.lastRealPointer = null, this.placeAfterCategory = null, this.hotbarPick = null, this.ring = new HF, this.targets = new nS, this.hasCategories = !1, this.wasShowing = !1, this.state = VS.b, this.isActive = () => (0, KW.f)(), this.isShowing = () => "inventory" === iW.c.getActiveConsumerName() && (0, EF.j)(), this.getState = () => this.state, this.isSteppingSlots = () => this.isShowing() && null === this.pointer, this.onDeactivate = () => {
            this.endInteraction((0, KW.e)()), (0, KW.f)() || this.forgetSurface()
          }, this.forgetSurface = () => {
            var FF;
            this.reopenSlotIdx = null !== (FF = this.focused ? tC(this.focused).idx : null) && void 0 !== FF ? FF : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, KW.q)(), this.panelMemory.clear(), this.targets.disconnect()
          }, this.onFrame = FF => {
            (0, bW.unstable_batchedUpdates)((() => {
              this.frame(FF)
            }))
          }, this.shouldBlockRealPointer = FF => FF.isTrusted && !(0, tW.s)(FF) && this.isShowing(), this.noteRealPointer = FF => {
            FF instanceof MouseEvent && FF.isTrusted && !(0, tW.s)(FF) && (this.lastRealPointer ??= {
              x: 0,
              y: 0
            }, this.lastRealPointer.x = FF.clientX, this.lastRealPointer.y = FF.clientY)
          }, this.wakePressActs = FF => {
            var WF;
            return FF === (0, RF.h)("inventoryClose") ? !(null !== (WF = (0, KW.e)()) && void 0 !== WF && WF.isHolding()) : !(FF !== (0, RF.h)("inventory") || !fS()) || ((0, QF.B)(FF) ? this.isNavButton(FF) : zC.some((WF => (0, RF.h)(WF) === FF)))
          }
        }
        frame(FF) {
          var WF, SF, CF, AF, uF, hF;
          const bW = (0, KW.e)();
          if (!(0, EF.j)()) return void(this.wasShowing && (this.endInteraction(bW), this.rehoverRealPointer()));
          this.wasShowing = !0, this.applyFocusRequest(), FF.wokeDevice && this.focusWakePointer(!(null === bW || void 0 === bW || !bW.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, eF.i)().inventoryNavigation || this.pointer || this.engagePointer();
          const dF = performance.now();
          this.handleNavigation(FF, dF), this.handlePanels(FF), this.handlePaging(FF, dF), this.handleScroll(FF), this.handleButtons(FF, dF, bW), this.applyFocusRequest(), this.pointer && this.hoverAtPointer();
          const PF = this.ensureFocus(),
            iW = this.focusContext(bW);
          this.ring.show(PF);
          const QF = "slot" === iW.kind ? iW.idx : null,
            rW = null !== (WF = null === (SF = iW.actionElement) || void 0 === SF ? void 0 : SF.querySelector(".DoCraftItem")) && void 0 !== WF ? WF : iW.actionElement;
          this.pointer ? (this.hover.sync(bW, QF, rW, ((FF, WF) => {
            const SF = WF ? LS() : 0;
            return {
              clientX: FF.x - SF,
              clientY: FF.y - SF
            }
          })(this.pointer, iW.holding), iW.holding), sW.set({
            x: this.pointer.x,
            y: this.pointer.y,
            visible: !0,
            pressed: FF.isHeld((0, RF.h)("inventoryPrimary"))
          })) : PF && this.focused && this.hover.sync(bW, QF, rW, ((FF, WF) => {
            if (!WF) return {
              clientX: FF.left + FF.width - 10,
              clientY: FF.top + FF.height / 2 - 10
            };
            const SF = LS();
            return {
              clientX: FF.left + FF.width / 2 - SF,
              clientY: FF.top + FF.height / 2 - SF
            }
          })(PF, iW.holding), iW.holding), this.publishState({
            showing: !0,
            kind: iW.kind,
            holding: iW.holding,
            slotHasItem: iW.slotHasItem,
            pressHints: null !== (CF = null === (AF = iW.press) || void 0 === AF ? void 0 : AF.hints) && void 0 !== CF ? CF : null,
            hasCategories: this.hasCategories,
            hasList: !(null === (uF = this.focusTarget) || void 0 === uF || !uF.scrollGroup),
            openButtonCloses: fS(),
            steppingSlots: null === this.pointer,
            quickMoveToHotbar: "slot" === iW.kind && !(null === (hF = iW.actionElement) || void 0 === hF || !hF.closest(".CreativeItemSlots")),
            dropStackHold: this.dropLatch.getHold(),
            hotbarPicking: null !== this.hotbarPick
          })
        }
        focusWakePointer(FF) {
          var WF;
          const SF = (0, EF.c)();
          if (!SF) return;
          this.targets.revalidate();
          const CF = this.getTargets().targets;
          this.setFocus(null !== (WF = FS(SF, CF)) && void 0 !== WF ? WF : FF ? lW(SF, CF, (FF => {
            let {
              rect: WF
            } = FF;
            const CF = Math.max(WF.left - SF.x, 0, SF.x - (WF.left + WF.width)),
              AF = Math.max(WF.top - SF.y, 0, SF.y - (WF.top + WF.height));
            return Math.hypot(CF, AF) <= Math.min(WF.width, WF.height) / 2
          })) : null, !1), "cursor" === (0, eF.i)().inventoryNavigation && (this.pointer = {
            x: SF.x,
            y: SF.y,
            speedRamp: 0
          })
        }
        rehoverRealPointer() {
          const FF = this.lastRealPointer;
          if (!FF || "keyboardMouse" !== dF.b.get("activeInputDevice")) return;
          const WF = document.elementFromPoint(FF.x, FF.y);
          WF && mS(null, WF, FF)
        }
        endInteraction(FF) {
          this.wasShowing = !1, this.hotbarPick = null, this.releasePress(), this.dropLatch.reset(), this.scroller.reset();
          for (const WF of this.dpadTimers.values()) WF.reset();
          this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(FF), this.ring.hide(), this.releasePointer(), this.publishState(VS.b)
        }
        getTargets() {
          const FF = this.targets.get();
          return this.hasCategories = FF.hasCategories, FF
        }
        currentTarget() {
          var FF;
          return this.focused && null !== (FF = this.getTargets().byElement.get(this.focused)) && void 0 !== FF ? FF : null
        }
        readFocusRect() {
          const FF = this.focused;
          if (null === FF || void 0 === FF || !FF.isConnected || !FF.closest(CS)) return null;
          const WF = FF.getBoundingClientRect();
          return WF.width > 0 && WF.height > 0 ? {
            left: WF.left,
            top: WF.top,
            width: WF.width,
            height: WF.height
          } : null
        }
        ensureFocus() {
          const FF = this.readFocusRect();
          if (FF || this.pointer) return FF;
          const {
            targets: WF,
            byElement: SF
          } = this.getTargets();
          let CF = null,
            AF = !1;
          if (this.lastRect) CF = lW(wW(this.lastRect), WF);
          else {
            var uF, hF;
            const FF = ((FF, WF) => {
                const SF = document.querySelector(".EntireInventoryWrapper [data-pad-inventory-start]");
                return SF ? sS(FF.filter((FF => SF.contains(FF.element))), WF) : null
              })(WF, (0, KW.e)()),
              bW = WF.find((FF => null !== FF.idx && FF.idx === this.reopenSlotIdx)),
              dF = document.querySelector(YS);
            AF = null !== FF || void 0 !== bW, CF = null !== (uF = null !== (hF = null !== FF && void 0 !== FF ? FF : bW) && void 0 !== hF ? hF : dF && SF.get(dF)) && void 0 !== uF ? uF : WS(WF)
          }
          return this.setFocus(CF, AF), this.lastRect
        }
        setFocus(FF) {
          let WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          FF && (this.focused = FF.element, this.focusTarget = FF, this.panelMemory.set(FF.panel, FF.element), WF && FF.scrollContainer && ((FF, WF) => {
            const SF = FF.getBoundingClientRect(),
              CF = WF.getBoundingClientRect(),
              AF = WF.scrollTop;
            return SF.top < CF.top ? WF.scrollTop -= CF.top - SF.top : SF.bottom > CF.bottom && (WF.scrollTop += SF.bottom - CF.bottom), WF.scrollTop !== AF
          })(FF.element, FF.scrollContainer) && this.targets.invalidate(), this.lastRect = this.readFocusRect(), this.followFocusJump())
        }
        followFocusJump() {
          if (this.pointer)
            if ("cursor" === (0, eF.i)().inventoryNavigation) {
              if (this.lastRect) {
                const FF = wW(this.lastRect);
                this.pointer = {
                  x: FF.x,
                  y: FF.y,
                  speedRamp: 0
                }
              }
            } else this.releasePointer()
        }
        engagePointer() {
          const FF = this.lastRect ? wW(this.lastRect) : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          };
          this.pointer = {
            x: FF.x,
            y: FF.y,
            speedRamp: 0
          }
        }
        releasePointer() {
          this.pointer = null, sW.hide()
        }
        hoverAtPointer() {
          var FF;
          const WF = FS(this.pointer, this.getTargets().targets);
          (null === WF || void 0 === WF ? void 0 : WF.element) !== this.focused && (this.focused = null !== (FF = null === WF || void 0 === WF ? void 0 : WF.element) && void 0 !== FF ? FF : null, this.focusTarget = WF, WF && (this.panelMemory.set(WF.panel, WF.element), this.lastRect = this.readFocusRect()))
        }
        moveCursor(FF, WF) {
          const SF = this.focusTarget,
            CF = SF && (0, eF.i)().cursorMagnetism ? wW(SF.rect) : null;
          this.pointer = VF(this.pointer, {
            stick: FF.leftStick,
            moveDeadzone: (0, eF.i)().moveDeadzone,
            dpad: WF,
            dtMs: FF.dtMs,
            cursorSpeedPercent: (0, eF.i)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: {
              overInteractive: !1,
              magnetTarget: CF
            }
          })
        }
        move(FF) {
          this.targets.revalidate();
          const WF = this.currentTarget();
          WF && this.setFocus(pW(WF, this.getTargets().targets, FF))
        }
        step(FF) {
          const WF = this.pointer;
          if (WF && (this.releasePointer(), !this.focused)) return this.targets.revalidate(), void this.setFocus(((FF, WF, SF) => {
            var CF;
            const AF = {
              key: "",
              rect: {
                left: FF.x,
                top: FF.y,
                width: 0,
                height: 0
              },
              panel: "",
              scrollGroup: null,
              visible: !0
            };
            return null !== (CF = pW(AF, WF, SF)) && void 0 !== CF ? CF : lW(FF, WF)
          })(WF, this.getTargets().targets, FF));
          this.move(FF)
        }
        isNavButton(FF) {
          return !GS.some((WF => (0, RF.h)(WF) === FF)) && !(FF === (0, RF.h)("inventory") && fS())
        }
        handleNavigation(FF, WF) {
          const SF = (0, eF.i)().inventoryNavigation,
            CF = {
              x: 0,
              y: 0
            };
          let AF = null;
          for (const dF of QF.y) {
            const uF = this.isNavButton(dF) && FF.isHeld(dF);
            uF && (CF.x += MS[dF].x, CF.y += MS[dF].y), this.dpadTimers.get(dF).update(uF, WF) && "cursor" !== SF && (AF ??= dF)
          }
          const uF = this.stickGate.update(FF.leftStick, (0, eF.i)().moveDeadzone);
          if (AF && (this.step(AF), this.stickGate.lock()), "slot" !== SF) {
            const WF = ((FF, WF, SF, CF) => "hybrid" !== FF ? "cursor" === FF : !CF && (WF || SF))(SF, null !== this.pointer, uF, null !== AF);
            return WF && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(FF, "cursor" === SF ? CF : {
              x: 0,
              y: 0
            }))
          }
          const hF = (0, QF.j)(FF.leftStick, (0, eF.i)().moveDeadzone),
            bW = this.stickRepeat.update(uF ? (0, QF.Z)(hF) : null, WF);
          bW && this.move(bW)
        }
        applyCategoryPlace() {
          const FF = this.placeAfterCategory;
          if (!FF) return;
          this.placeAfterCategory = null, this.targets.invalidate();
          const WF = lW(wW(FF.rect), this.getTargets().targets, (WF => WF.scrollGroup === FF.scrollGroup));
          this.setFocus(WF, !1)
        }
        applyFocusRequest() {
          const FF = (0, KW.q)();
          FF && (this.targets.invalidate(), this.setFocus((0, KW.d)(this.getTargets().targets, FF)))
        }
        handlePanels(FF) {
          var WF, SF, CF;
          const AF = FF.wasPressed((0, RF.h)("inventoryPanelPrevious")),
            uF = FF.wasPressed((0, RF.h)("inventoryPanelNext"));
          if (!AF && !uF) return;
          const {
            targets: hF
          } = this.getTargets(), bW = (dF = ((FF, WF) => {
            const SF = [];
            for (const AF of FF) AF.visible && !SF.includes(AF.panel) && SF.push(AF.panel);
            const CF = FF => {
              const CF = WF.indexOf(FF);
              return -1 === CF ? WF.length + SF.indexOf(FF) : CF
            };
            return SF.sort(((FF, WF) => CF(FF) - CF(WF)))
          })(hF, bC), PF = null !== (WF = null === (SF = this.focusTarget) || void 0 === SF ? void 0 : SF.panel) && void 0 !== WF ? WF : null, iW = uF ? 1 : -1, 0 === dF.length ? null : dF[XW(null === PF ? -1 : dF.indexOf(PF), dF.length, iW)]);
          var dF, PF, iW;
          if (null === bW) return;
          const eF = this.panelMemory.get(bW),
            EF = hF.filter((FF => FF.panel === bW)),
            QF = null !== (CF = EF.find((FF => FF.element === eF && FF.visible))) && void 0 !== CF ? CF : sS(EF, (0, KW.e)());
          this.setFocus(QF)
        }
        handlePaging(FF, WF) {
          var SF, CF;
          const AF = (0, RF.h)("menuPageUp"),
            uF = (0, RF.h)("menuPageDown"),
            hF = this.pageUpTimer.update(FF.isHeld(AF), WF),
            bW = this.pageDownTimer.update(FF.isHeld(uF), WF);
          if (!hF && !bW) return;
          const dF = bW ? 1 : -1;
          if (!FF.wasPressed(bW ? uF : AF) && this.hasCategories) return;
          if ((FF => {
              const WF = Array.from(document.querySelectorAll(".EntireInventoryWrapper .CreativeCategoryTab"));
              if (0 === WF.length) return !1;
              const SF = WF.findIndex((FF => FF.classList.contains("Selected"))),
                CF = WF[XW(SF, WF.length, FF)];
              return LW(CF, kS(CF)), !0
            })(dF)) {
            var PF, iW;
            this.targets.invalidate();
            const FF = null !== (PF = null === (iW = this.focusTarget) || void 0 === iW ? void 0 : iW.scrollGroup) && void 0 !== PF ? PF : null,
              WF = this.readFocusRect();
            return void(this.placeAfterCategory = null !== FF && WF && !this.pointer ? {
              rect: WF,
              scrollGroup: FF
            } : null)
          }
          const {
            targets: eF
          } = this.getTargets();
          let EF = this.currentTarget();
          var QF;
          null !== (SF = EF) && void 0 !== SF && SF.scrollContainer || (EF = null !== (QF = eF.find((FF => null !== FF.scrollContainer && FF.visible))) && void 0 !== QF ? QF : null);
          if (null === (CF = EF) || void 0 === CF || !CF.scrollContainer) return;
          const rW = ((FF, WF, SF, CF) => {
            if (null === FF.scrollGroup) return null;
            const AF = wW(FF.rect),
              uF = AF.x,
              hF = AF.y + ("Down" === SF ? CF : -CF);
            let bW = null,
              dF = 1 / 0;
            for (const PF of WF) {
              if (PF.scrollGroup !== FF.scrollGroup || PF.key === FF.key) continue;
              const WF = wW(PF.rect);
              if ("Down" === SF ? WF.y <= AF.y : WF.y >= AF.y) continue;
              const CF = Math.hypot(WF.x - uF, WF.y - hF);
              CF < dF && (bW = PF, dF = CF)
            }
            return bW
          })(EF, eF, dF > 0 ? "Down" : "Up", EF.scrollContainer.clientHeight);
          this.setFocus(null !== rW && void 0 !== rW ? rW : EF)
        }
        handleScroll(FF) {
          var WF, SF, CF, AF;
          if (!this.scroller.isScrolling(FF.rightStick)) return void this.scroller.reset();
          const uF = null !== (WF = null === (SF = this.focusTarget) || void 0 === SF ? void 0 : SF.scrollContainer) && void 0 !== WF ? WF : null === (CF = this.getTargets().targets.find((FF => null !== FF.scrollContainer))) || void 0 === CF ? void 0 : CF.scrollContainer;
          if (!uF || !this.scroller.step(uF, FF.rightStick, FF.dtMs)) return;
          this.targets.scrolled(uF);
          const hF = this.pointer || (null === (AF = this.focusTarget) || void 0 === AF ? void 0 : AF.scrollContainer) !== uF ? null : this.readFocusRect();
          if (!hF) return;
          const bW = cW(uF),
            dF = wW(hF);
          if (dF.y < bW.top || dF.y > bW.bottom) {
            const FF = this.focusTarget.scrollGroup,
              WF = lW(dF, this.getTargets().targets, (WF => WF.scrollGroup === FF));
            this.setFocus(WF, !1)
          }
        }
        focusContext(FF) {
          const {
            kind: WF,
            idx: SF
          } = this.focused ? tC(this.focused) : {
            kind: null,
            idx: null
          }, CF = this.focused ? rC(this.focused) : null, AF = CF ? (0, ZS.b)(CF) : null;
          return {
            kind: WF,
            idx: SF,
            actionElement: CF,
            press: AF,
            hasPress: null !== AF,
            hasBack: !(null === AF || void 0 === AF || !AF.back),
            holding: FF.isHolding(),
            slotHasItem: null !== SF && FF.hasItemAt(SF)
          }
        }
        handleButtons(FF, WF, SF) {
          var CF, AF;
          if (!this.activePress || FF.isHeld(this.activePress.button) && (CF = this.activePress.target, AF = this.focused, null !== CF.recipe ? gC(AF).recipe === CF.recipe : AF === CF.element) || this.releasePress(), this.scrollStickClick.update(FF.rightStick, WF), !this.handleHotbarPick(FF, SF)) {
            for (const [CF, AF] of cC) {
              const uF = (0, RF.h)(AF);
              if (!FF.wasPressed(uF) || "openButton" === CF && !fS()) continue;
              if ("RS" === uF && !this.scrollStickClick.allowsClick(WF)) continue;
              const hF = this.focusContext(SF),
                bW = nW(CF, hF);
              bW && this.runIntent(bW, hF, uF, SF)
            }
            this.handleDrop(FF, WF, SF)
          }
        }
        handleHotbarPick(FF, WF) {
          const SF = this.hotbarPick;
          if (!SF) return !1;
          const CF = FF.wasPressed((0, RF.h)("inventoryPrimary")) || FF.wasPressed((0, RF.h)("inventoryHotbarSwap"));
          if (!CF && !FF.wasPressed((0, RF.h)("inventoryClose")) && !WF.isHolding()) return !(FF.wasPressed((0, RF.h)("inventory")) && fS());
          const AF = this.focusTarget;
          CF && "hotbar" === (null === AF || void 0 === AF ? void 0 : AF.panel) && null !== AF.idx && AF.idx !== SF.idx && (WF.swapWithHotbar(AF.idx, SF.idx), this.afterAction()), this.hotbarPick = null;
          const uF = SF.element.isConnected ? this.getTargets().byElement.get(SF.element) : void 0;
          return uF && this.setFocus(uF), !0
        }
        startHotbarPick(FF) {
          var WF;
          const {
            targets: SF,
            byElement: CF
          } = this.getTargets(), AF = document.querySelector(YS), uF = null !== (WF = AF && CF.get(AF)) && void 0 !== WF ? WF : SF.find((FF => "hotbar" === FF.panel));
          uF && this.focused && (this.hotbarPick = {
            idx: FF,
            element: this.focused
          }, this.setFocus(uF))
        }
        focusKey() {
          return this.focused ? RS(this.focused) : null
        }
        handleDrop(FF, WF, SF) {
          const CF = (0, RF.h)("inventoryDrop");
          if (FF.wasPressed(CF)) {
            const FF = (AF = this.focusContext(SF)).holding ? {
              kind: "yS"
            } : "slot" === AF.kind && AF.slotHasItem && null !== AF.idx ? {
              kind: "slot",
              idx: AF.idx
            } : null;
            return void(FF && (this.dropFrom(FF, !1, SF), this.dropLatch.press(FF, this.focusKey(), WF, gW.c[(0, eF.i)().tapHoldTime].dropStackMs), this.afterAction()))
          }
          var AF;
          const uF = this.dropLatch.update(FF.isHeld(CF), this.focusKey(), WF);
          uF && ((FF, WF, SF) => "yS" === FF.kind ? WF : !WF && SF(FF.idx))(uF, SF.isHolding(), SF.hasItemAt) && (this.dropFrom(uF, !0, SF), this.afterAction())
        }
        dropFrom(FF, WF, SF) {
          "yS" === FF.kind ? SF.dropHeld(WF, this.slotPoint()) : SF.dropSlot(FF.idx, WF)
        }
        slotPoint() {
          return this.pointer ? {
            clientX: this.pointer.x,
            clientY: this.pointer.y
          } : this.lastRect ? (FF => {
            const WF = wW(FF);
            return {
              clientX: WF.x,
              clientY: WF.y
            }
          })(this.lastRect) : {
            clientX: 0,
            clientY: 0
          }
        }
        runIntent(FF, WF, SF, CF) {
          const AF = WF.idx,
            uF = WF.actionElement;
          switch (uF && yC.has(FF) && (0, tW.w)(uF), FF) {
            case "slotPrimary":
              CF.primary(AF, this.slotPoint());
              break;
            case "slotSecondary":
              CF.secondary(AF, this.slotPoint());
              break;
            case "slotQuickMove":
              CF.quickMove(AF, this.slotPoint());
              break;
            case "hotbarPick":
              this.startHotbarPick(AF);
              break;
            case "pressPrimary":
            case "pressSecondary":
              this.startPress(WF.press, "pressPrimary" === FF ? "primary" : "secondary", SF);
              break;
            case "click":
              LW(uF, kS(uF));
              break;
            case "openKeyboard":
              aS(uF) && OW(uF);
              break;
            case "pressBack":
              WF.press.back();
              break;
            case "cancel":
              CF.cancel();
              break;
            case "close":
              return this.releasePress(), void CF.close()
          }
          this.afterAction()
        }
        startPress(FF, WF, SF) {
          this.releasePress(), FF.press(WF) && (this.activePress = {
            handlers: FF,
            button: SF,
            target: gC(this.focused)
          })
        }
        releasePress() {
          var FF, WF, SF;
          null === (FF = this.activePress) || void 0 === FF || null === (WF = (SF = FF.handlers).release) || void 0 === WF || WF.call(SF), this.activePress = null
        }
        afterAction() {
          this.targets.invalidate(), this.hover.invalidate()
        }
        publishState(FF) {
          ((FF, WF) => {
            var SF, CF, AF, uF, hF, bW;
            return FF.showing === WF.showing && FF.kind === WF.kind && FF.holding === WF.holding && FF.slotHasItem === WF.slotHasItem && (null === (SF = FF.pressHints) || void 0 === SF ? void 0 : SF.primary) === (null === (CF = WF.pressHints) || void 0 === CF ? void 0 : CF.primary) && (null === (AF = FF.pressHints) || void 0 === AF ? void 0 : AF.secondary) === (null === (uF = WF.pressHints) || void 0 === uF ? void 0 : uF.secondary) && (null === (hF = FF.pressHints) || void 0 === hF ? void 0 : hF.back) === (null === (bW = WF.pressHints) || void 0 === bW ? void 0 : bW.back) && FF.hasCategories === WF.hasCategories && FF.hasList === WF.hasList && FF.openButtonCloses === WF.openButtonCloses && FF.steppingSlots === WF.steppingSlots && FF.hotbarPicking === WF.hotbarPicking && FF.quickMoveToHotbar === WF.quickMoveToHotbar && FF.dropStackHold === WF.dropStackHold
          })(FF, this.state) || (this.state = FF, PF.j.Uu(VS.f, FF))
        }
      },
      KS = ["pointermove", "pointerover", "pointerout", "mouseover", "mouseout"];
    var wS = SF(7162);
    var XS = SF(7621);
    const US = {
        duration: 80,
        strongMagnitude: .2,
        weakMagnitude: .2,
        needsPadInUse: !1
      },
      BS = {
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
          ...US,
          minIntervalMs: 1e3
        },
        preview: {
          ...US,
          minIntervalMs: 0
        }
      };
    const jC = new class {
        constructor(FF) {
          this.deps = FF, this.lastPlayedMs = {}, this.loggedFailure = !1, this.logFailure = FF => {
            this.loggedFailure || (this.loggedFailure = !0, console.warn("Controller vibration failed; further failures are not logged.", FF))
          }
        }
        play(FF, WF) {
          const SF = BS[FF];
          if (!this.deps.isVibrationOn() || SF.needsPadInUse && !this.deps.isPadInUse()) return !1;
          const CF = this.lastPlayedMs[FF];
          if (void 0 !== CF && WF - CF < SF.minIntervalMs) return !1;
          const AF = this.deps.getActuator();
          if (!AF) return !1;
          this.lastPlayedMs[FF] = WF;
          const {
            duration: uF,
            strongMagnitude: hF,
            weakMagnitude: bW
          } = SF;
          try {
            AF.playEffect("dual-rumble", {
              duration: uF,
              strongMagnitude: hF,
              weakMagnitude: bW
            }).catch(this.logFailure)
          } catch (dF) {
            this.logFailure(dF)
          }
          return !0
        }
      }({
        getActuator: () => (FF => {
          const WF = null === FF || void 0 === FF ? void 0 : FF.vibrationActuator;
          return "function" === typeof(null === WF || void 0 === WF ? void 0 : WF.playEffect) ? WF : null
        })(hF.f.getActiveGamepad()),
        isVibrationOn: () => (0, eF.i)().vibration,
        isPadInUse: EF.j
      }),
      vC = FF => {
        jC.play(FF, performance.now())
      };
    var JS = SF(7165),
      pS = SF(2241),
      lS = SF(107),
      FC = SF(33),
      WC = SF(958);
    class SC {
      constructor(FF) {
        this.deps = FF
      }
      check() {
        let FF = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const WF = this.deps.isPadActive() ? this.deps.getPadFamily() : null;
        if (!WF) return "skipped";
        const SF = FF ? this.deps.getVisitId() : this.deps.peekVisitId();
        return null === SF || this.deps.readReportedVisitId() === SF ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(SF), this.deps.SC(WF, this.deps.getInputType()), "reported") : "notReady"
      }
    }
    const CC = "controllerUsageReportedVisit";
    var AC = SF(1189),
      uC = SF(1510),
      hC = SF(1262),
      bA = SF(1115);
    const dC = FF => ({
        translationKey: `controller:${FF}`
      }),
      PC = {
        A: "A",
        B: "B",
        X: "X",
        Y: "Y",
        LB: "LB",
        RB: "RB",
        LT: "LT",
        RT: "RT",
        View: dC("padButtonView"),
        Menu: dC("padButtonMenu"),
        LS: "L3",
        RS: "R3",
        Up: dC("padButtonDpadUp"),
        Down: dC("padButtonDpadDown"),
        Left: dC("padButtonDpadLeft"),
        Right: dC("padButtonDpadRight"),
        Home: dC("padButtonHome"),
        LeftStick: dC("padButtonLeftStick"),
        RightStick: dC("padButtonRightStick")
      },
      RC = {
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
          View: dC("padButtonCreate"),
          Menu: dC("padButtonOptions")
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
      iA = (FF, WF) => {
        var SF;
        const CF = null !== (SF = RC[FF][WF]) && void 0 !== SF ? SF : PC[WF];
        return "string" === typeof CF ? CF : (0, AF.w)(bA.h.get().getCurrentLanguageCode(), CF.translationKey)
      },
      eC = FF => {
        let {
          glyph: WF,
          family: SF,
          className: CF
        } = FF;
        const AF = (0, EF.C)(),
          uF = null !== SF && void 0 !== SF ? SF : AF,
          hF = (0, JS.g)(uF, WF);
        return (0, yW.jsx)("span", {
          className: fF()("ControllerGlyph", CF),
          role: "img",
          "aria-label": iA(uF, WF),
          style: {
            "--pad-glyph-mask": `url(${hF})`,
            "--pad-glyph-aspect": (0, JS.d)(uF, WF)
          }
        })
      };
    var EC = SF(1546);
    const QC = FF => {
      let {
        action: WF
      } = FF;
      const {
        t: SF
      } = (0, AF.B)();
      switch (WF.kind) {
        case "reload":
          return (0, yW.jsx)("span", {
            children: SF("controller:gameplayReload")
          });
        case "specialAction":
          return null;
        case "customButton":
          return (0, yW.jsx)(EC.d, {
            text: WF.description ? [{
              icon: WF.icon
            }, ` ${WF.description}`] : [{
              icon: WF.icon
            }]
          });
        case "touchButton":
          return (0, yW.jsx)(EC.d, {
            text: WF.label
          })
      }
    };
    var rA = SF(7629);
    const gA = FF => {
      let {
        hold: WF
      } = FF;
      return (0, yW.jsx)("div", {
        className: "DropStackFillTrack",
        style: {
          "--pad-drop-stack-hold": `${WF.holdMs}ms`
        },
        children: (0, yW.jsx)("div", {
          className: "DropStackFillBar"
        })
      }, WF.id)
    };
    var tA = SF(7651),
      TC = SF(7656),
      aA = SF(7665),
      kA = SF(7644);
    const qA = () => {
        const {
          gameState: FF
        } = (0, dF.d)(["gameState"]), WF = (0, EF.y)(), [CF, AF] = (0, zW.useState)(!1), [uF, hF] = (0, zW.useState)(!1);
        return (0, zW.useEffect)((() => {
          "inGame" === FF && AF(!0)
        }), [FF]), (0, zW.useEffect)((() => {
          if (!CF) return;
          let FF = null,
            WF = !1;
          return Promise.all([SF.e(59), SF.e(207), SF.e(206), SF.e(62), SF.e(60), SF.e(61), SF.e(79), SF.e(198), SF.e(169), SF.e(203), SF.e(120), SF.e(178), SF.e(72), SF.e(214), SF.e(199), SF.e(98), SF.e(195), SF.e(97), SF.e(71), SF.e(100), SF.e(78)]).then((() => SF(38505))).then((SF => {
            WF || (FF = SF.startPadGameplay())
          })).catch((FF => {
            console.error("Pad gameplay failed to load", FF), WF || hF(!0)
          })), () => {
            var SF;
            WF = !0, null === (SF = FF) || void 0 === SF || SF()
          }
        }), [CF]), (0, zW.useEffect)((() => {
          uF && WF && (hF(!1), AC.NotificationProvider.showPromptPopup({
            title: "controller:gameplayLoadFailedTitle",
            subtitle: "controller:gameplayLoadFailedSubtitle",
            confirmText: "settingsMenu:reloadPagePopupConfirm",
            confirmTooltip: "",
            cancelText: "general:cancel",
            cancelTooltip: ""
          }).getResult().then((FF => {
            !0 === FF && (0, uC.reloadBloxd)()
          })))
        }), [uF, WF]), (0, yW.jsxs)(yW.Fragment, {
          children: [(0, yW.jsx)(VC, {}), (0, yW.jsx)(NC, {}), (0, yW.jsx)(DC, {})]
        })
      },
      VC = () => {
        const {
          t: FF
        } = (0, AF.B)(), WF = (0, EF.y)(), {
          gameState: SF,
          isUiHidden: CF
        } = (0, dF.d)(["gameState", "isUiHidden"]), {
          hideButtonHints: uF
        } = (0, eF.r)(), hF = (0, rA.l)(), bW = (0, rA.m)(), [PF, iW] = (0, zW.useState)(aA.b);
        return (0, hC.e)(kA.u, iW), !WF || uF || CF || "inGame" !== SF || !hF && !PF ? null : (0, yW.jsxs)("div", {
          className: "PadActionHint SmallTextBold",
          children: [hF && (0, yW.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, yW.jsx)(eC, {
              glyph: (0, RF.h)("actionButton")
            }), (0, yW.jsx)(QC, {
              action: hF
            }), bW && (0, yW.jsx)("span", {
              className: "PadActionHintMore",
              children: FF("controller:gameplayActionWheelHint")
            })]
          }), PF && (0, yW.jsxs)("span", {
            className: "PadActionHintEntry",
            children: [(0, yW.jsx)(eC, {
              glyph: (0, RF.h)("oV")
            }), (0, yW.jsx)("span", {
              children: FF("controller:gameplayPickBlock")
            })]
          })]
        })
      },
      NC = () => {
        const {
          t: FF
        } = (0, AF.B)(), WF = (0, EF.y)(), {
          gameState: SF,
          isUiHidden: CF
        } = (0, dF.d)(["gameState", "isUiHidden"]), [uF, hF] = (0, zW.useState)(tA.c);
        return (0, hC.e)(kA.q, hF), WF && !CF && "inGame" === SF && uF ? (0, yW.jsxs)("div", {
          className: "PadDropStackFill SmallTextBold",
          children: [(0, yW.jsx)("span", {
            children: FF("controller:gameplayDropStack")
          }), (0, yW.jsx)(gA, {
            hold: uF
          })]
        }) : null
      },
      DC = () => {
        const {
          t: FF
        } = (0, AF.B)(), WF = (0, EF.y)(), {
          gameState: SF,
          isUiHidden: CF
        } = (0, dF.d)(["gameState", "isUiHidden"]), {
          hideButtonHints: uF
        } = (0, eF.r)(), [hF, bW] = (0, zW.useState)(TC.d);
        return (0, hC.e)(kA.n, bW), WF && !CF && "inGame" === SF && hF ? (0, yW.jsxs)("div", {
          className: "PadAttackLatchedHint SmallTextBold",
          children: [!uF && (0, yW.jsx)(eC, {
            glyph: (0, RF.h)("attack")
          }), (0, yW.jsx)("span", {
            children: FF("controller:gameplayAttackLatched")
          })]
        }) : null
      };
    var LC = SF(7670),
      mA = SF(1594),
      OC = SF(1955),
      xA = SF(7152);
    const ZC = FF => FF && !(0, LC.e)(mA.d.get("shopInfo")),
      oC = () => {
        const FF = "inGame" === (0, dF.d)(["gameState"]).gameState;
        return (0, OC.h)("shopInfo", (() => {
          (0, xA.j)(ZC(FF))
        })), (0, zW.useEffect)((() => {
          (0, xA.j)(ZC(FF))
        }), [FF]), null
      },
      YC = () => {
        const {
          t: FF
        } = (0, AF.B)(), {
          hideButtonHints: WF
        } = (0, eF.r)();
        (0, EF.C)();
        const SF = (0, VS.j)();
        return (0, zW.useEffect)((() => (() => {
          const FF = iW.c.register({
              name: "inventory",
              isActive: HS.isActive,
              onFrame: HS.onFrame,
              onDeactivate: HS.onDeactivate,
              wakePressActs: HS.wakePressActs
            }),
            WF = FF => {
              HS.noteRealPointer(FF), HS.shouldBlockRealPointer(FF) && FF.stopPropagation()
            };
          for (const hF of KS) window.addEventListener(hF, WF, !0);
          const SF = (0, KW.g)((() => {
              "inventory" !== iW.c.getActiveConsumerName() && HS.forgetSurface()
            })),
            CF = FF => {
              const WF = FF.target;
              (0, EF.j)() && pF(WF) && WF.closest(CS) && (0, KW.f)() && (0, KW.m)(WF)
            };
          document.addEventListener("focusout", CF, !0);
          const {
            invalidate: AF,
            onScroll: uF
          } = HS.targets;
          return document.addEventListener("scroll", uF, !0), window.addEventListener("resize", AF), () => {
            FF(), SF();
            for (const FF of KS) window.removeEventListener(FF, WF, !0);
            document.removeEventListener("scroll", uF, !0), document.removeEventListener("focusout", CF, !0), window.removeEventListener("resize", AF), HS.targets.disconnect()
          }
        })()), []), (0, yW.jsxs)(yW.Fragment, {
          children: [(0, yW.jsx)(KF, {
            placer: HS.ring,
            className: "InventorySlotCursorRing"
          }), SF.showing && !WF && (0, yW.jsx)("div", {
            className: "InventorySlotCursorHints SmallTextBold",
            children: HW(SF).map((WF => {
              let {
                actions: CF,
                labelKey: AF
              } = WF;
              return (0, yW.jsxs)("div", {
                className: "InventorySlotCursorHint",
                children: [CF.map((FF => (0, yW.jsx)(eC, {
                  glyph: (0, RF.h)(FF)
                }, FF))), (0, yW.jsx)("span", {
                  children: FF(`controller:${AF}`)
                }), "inventoryDrop" === AF && SF.dropStackHold && (0, yW.jsx)(gA, {
                  hold: SF.dropStackHold
                })]
              }, AF)
            }))
          })]
        })
      },
      MC = [{
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
      cA = FF => Array.from(FF).map((FF => ({
        type: "char",
        char: FF,
        width: 1
      }))),
      GC = function(FF) {
        return {
          type: "command",
          command: FF,
          width: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
        }
      },
      zA = [GC("page", 2), GC("otherPage"), GC("caretLeft"), GC("space", 3), GC("caretRight"), GC("close", 1.5), GC("submit", 1.5)],
      IC = [GC("page", 2), GC("otherPage"), GC("caretLeft"), GC("space", 2), GC("caretRight"), GC("newline"), GC("close", 1.5), GC("submit", 1.5)],
      fC = [
        [...cA("1234567890"), GC("backspace")], cA("qwertyuiop/"), cA("asdfghjkl'?"), [GC("shift", 2), ...cA("zxcvbnm,.")]
      ],
      yA = [
        [...cA("1234567890"), GC("backspace")], cA("!@#$%^&*()/"), cA('-_=+[]{};:"'), cA("~`|\\<>'\u20ac\xa3,.")
      ],
      sC = {
        letters: fC,
        accents: [
          [...cA("1234567890"), GC("backspace")], cA("\xe1\xe9\xed\xf3\xfa\xe0\xe8\xec\xf2\xf9\xf1"), cA("\xe2\xea\xee\xf4\xfb\xe4\xeb\xef\xf6\xfc\xe7"), [GC("shift", 2), ...cA("\xe3\xf5\xdf\u0153\u011f\u015f\u0131\xbf\xa1")]
        ],
        symbols: yA
      },
      nC = new Set(["de", "es", "fr", "it", "nl", "pt", "pt-BR", "tr", "vi"]),
      HC = (FF, WF) => "letters" === FF ? WF ? {
        page: "accents",
        otherPage: "symbols"
      } : {
        page: "symbols",
        otherPage: "accents"
      } : {
        page: "letters",
        otherPage: "accents" === FF ? "symbols" : "accents"
      },
      KC = function(FF, WF) {
        const SF = ((FF, WF) => [...sC[FF], WF ? IC : zA])(FF, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]);
        if (0 === WF) return SF;
        const CF = Math.min(2, wC(SF[0]) / WF);
        return [Array.from({
          length: WF
        }, ((FF, WF) => ({
          type: "phrase",
          phraseIndex: WF,
          width: CF
        }))), ...SF]
      },
      wC = FF => FF.reduce(((FF, WF) => FF + WF.width), 0),
      XC = FF => Math.max(...FF.map(wC)),
      UC = (FF, WF) => {
        const SF = FF[WF.row];
        let CF = (XC(FF) - wC(SF)) / 2;
        for (let AF = 0; AF < WF.col; AF++) CF += SF[AF].width;
        return CF + SF[WF.col].width / 2
      },
      BC = (FF, WF, SF) => {
        let CF = 0,
          AF = 1 / 0;
        for (let uF = 0; uF < FF[WF].length; uF++) {
          const hF = Math.abs(UC(FF, {
            row: WF,
            col: uF
          }) - SF);
          hF < AF - 1e-9 && (CF = uF, AF = hF)
        }
        return CF
      },
      jA = (FF, WF) => {
        const SF = Math.max(0, Math.min(FF.length - 1, WF.row));
        return {
          row: SF,
          col: Math.max(0, Math.min(FF[SF].length - 1, WF.col))
        }
      },
      vA = (FF, WF, SF) => "once" === FF && WF - SF <= 400 ? "caps" : "off" === FF ? "once" : "off",
      JC = (FF, WF) => "once" === FF && (FF => FF.toLowerCase() !== FF.toUpperCase())(WF) ? "off" : FF,
      pC = (FF, WF, SF) => {
        if ("symbols" === WF || "off" === SF) return FF;
        const CF = FF.toUpperCase();
        return 1 === CF.length ? CF : FF
      };
    var lC = SF(1507),
      FA = SF(7583),
      WA = SF(7680),
      SA = SF(220),
      CA = SF(1475),
      AA = SF(7131);
    const uA = "[data-pad-secondary]",
      hA = FF => FF instanceof HTMLElement && PW(FF) && !RW(FF),
      bu = FF => {
        const WF = FF.querySelector(uA);
        if (WF && hA(WF)) return WF;
        for (const AF of null !== (SF = null === (CF = FF.parentElement) || void 0 === CF ? void 0 : CF.children) && void 0 !== SF ? SF : []) {
          var SF, CF;
          if (AF !== FF && AF.matches(uA) && hA(AF)) return AF
        }
        return null
      },
      dA = (FF, WF, SF, CF) => Math.max(0, Math.max(FF, SF) - Math.min(WF, CF)),
      PA = (FF, WF, SF, CF) => Math.max(0, Math.min(WF, CF) - Math.max(FF, SF)),
      RA = (FF, WF, SF) => {
        const CF = (FF.left + FF.right) / 2,
          AF = (FF.top + FF.bottom) / 2,
          uF = (WF.left + WF.right) / 2,
          hF = (WF.top + WF.bottom) / 2;
        if ("Left" === SF || "Right" === SF) {
          const bW = "Right" === SF ? 1 : -1;
          return {
            forwardGap: "Right" === SF ? WF.left - FF.right : FF.left - WF.right,
            centreForward: (uF - CF) * bW,
            sidewaysGap: dA(FF.top, FF.bottom, WF.top, WF.bottom),
            sidewaysOverlap: PA(FF.top, FF.bottom, WF.top, WF.bottom),
            centreSideways: Math.abs(hF - AF),
            startSideways: Math.abs(WF.top - FF.top),
            fromSidewaysSize: FF.bottom - FF.top,
            toSidewaysSize: WF.bottom - WF.top,
            toLength: WF.right - WF.left
          }
        }
        const bW = "Down" === SF ? 1 : -1;
        return {
          forwardGap: "Down" === SF ? WF.top - FF.bottom : FF.top - WF.bottom,
          centreForward: (hF - AF) * bW,
          sidewaysGap: dA(FF.left, FF.right, WF.left, WF.right),
          sidewaysOverlap: PA(FF.left, FF.right, WF.left, WF.right),
          centreSideways: Math.abs(uF - CF),
          startSideways: Math.abs(WF.left - FF.left),
          fromSidewaysSize: FF.right - FF.left,
          toSidewaysSize: WF.right - WF.left,
          toLength: WF.bottom - WF.top
        }
      },
      iu = FF => FF.centreForward > .5 && FF.forwardGap >= -FF.toLength / 2,
      eA = FF => {
        const WF = FF.sidewaysOverlap > 0 ? 0 : 2 * FF.fromSidewaysSize,
          SF = FF.fromSidewaysSize > 1.5 * FF.toSidewaysSize ? FF.startSideways : FF.centreSideways;
        return Math.max(0, FF.forwardGap) + 3 * FF.sidewaysGap + WF + .1 * SF
      },
      EA = (FF, WF) => PA(FF.top, FF.bottom, WF.top, WF.bottom) > 0 || WF.bottom - WF.top > WF.right - WF.left,
      QA = (FF, WF, SF, CF, AF, uF) => {
        const hF = AF ? gu(FF, WF, SF, AF) : new Set,
          bW = TA(FF, WF, SF, hF);
        return bW < 0 && hF.size > 0 && uF ? ru(FF, WF, SF, uF) : CF && bW >= 0 ? tu(FF, WF, SF, CF, bW, hF) : bW
      },
      ru = (FF, WF, SF, CF) => {
        const AF = new Set,
          uF = TA(FF, WF, "Up", AF) >= 0,
          hF = TA(FF, WF, "Down", AF) >= 0,
          bW = new Set;
        return WF.forEach(((WF, SF) => {
          const AF = WF.top + WF.bottom < FF.top + FF.bottom;
          CF[SF] && !(AF ? uF : hF) || bW.add(SF)
        })), TA(FF, WF, SF, bW)
      },
      gu = (FF, WF, SF, CF) => {
        const AF = new Set;
        return "Left" !== SF && "Right" !== SF || WF.forEach(((WF, SF) => {
          CF[SF] && PA(FF.top, FF.bottom, WF.top, WF.bottom) <= 0 && AF.add(SF)
        })), AF
      },
      tu = (FF, WF, SF, CF, AF, uF) => {
        const hF = RA(FF, WF[AF], SF).forwardGap;
        let bW = AF,
          dF = CF[AF],
          PF = 1 / 0;
        return WF.forEach(((WF, RF) => {
          const iW = CF[RF];
          if (uF.has(RF) || iW < dF || iW === dF && bW === AF) return;
          const eF = RA(FF, WF, SF);
          if (!iu(eF) || eF.forwardGap < 0 || eF.forwardGap >= hF) return;
          const EF = eA(eF);
          (iW > dF || EF < PF) && (bW = RF, dF = iW, PF = EF)
        })), bW
      },
      TA = (FF, WF, SF, CF) => {
        let AF = -1,
          uF = 1 / 0;
        if (WF.forEach(((WF, hF) => {
            const bW = ((FF, WF, SF) => {
              const CF = RA(FF, WF, SF);
              if (!iu(CF)) return null;
              const AF = Math.max(0, CF.forwardGap);
              return CF.sidewaysOverlap <= 0 && CF.sidewaysGap > 2 * (AF + 1) ? null : eA(CF)
            })(FF, WF, SF);
            null !== bW && bW < uF && !CF.has(hF) && (uF = bW, AF = hF)
          })), AF < 0) return -1;
        const hF = WF[AF],
          bW = RA(FF, hF, SF).forwardGap;
        let dF = bW,
          PF = AF;
        return WF.forEach(((WF, uF) => {
          if (uF === AF || CF.has(uF) || !((FF, WF, SF) => {
              const CF = "Left" === SF || "Right" === SF,
                AF = CF ? PA(FF.top, FF.bottom, WF.top, WF.bottom) : PA(FF.left, FF.right, WF.left, WF.right),
                uF = CF ? Math.min(FF.bottom - FF.top, WF.bottom - WF.top) : Math.min(FF.right - FF.left, WF.right - WF.left);
              return AF > 0 && AF >= uF / 2
            })(WF, hF, SF)) return;
          const RF = RA(FF, WF, SF);
          iu(RF) && RF.forwardGap + RF.toLength <= bW + 1 && RF.forwardGap < dF && (dF = RF.forwardGap, PF = uF)
        })), PF
      },
      au = (FF, WF) => {
        let SF = -1,
          CF = 1 / 0;
        return WF.forEach(((WF, AF) => {
          const uF = Math.max(WF.left - FF.x, 0, FF.x - WF.right),
            hF = Math.max(WF.top - FF.y, 0, FF.y - WF.bottom),
            bW = Math.hypot(uF, hF);
          bW < CF && (CF = bW, SF = AF)
        })), SF
      },
      ku = (FF, WF) => {
        const SF = Math.min(FF.bottom - FF.top, WF.bottom - WF.top) / 2;
        return Math.abs(FF.top - WF.top) > SF ? FF.top - WF.top : FF.left - WF.left
      },
      qu = FF => {
        let WF = -1;
        for (let SF = 0; SF < FF.length; SF++)(WF < 0 || ku(FF[SF], FF[WF]) < 0) && (WF = SF);
        return WF
      };
    var VA = SF(7687),
      NA = SF(7695);
    const DA = FF => {
        if ("death" !== FF || "inGame" !== dF.b.get("gameState") || "off" === (0, eF.i)().quickChat || null === (0, lC.e)()) return !1;
        const WF = (0, RF.h)("chat");
        return WF !== (0, RF.h)("menuConfirm") && WF !== (0, RF.h)("menuBack")
      },
      LA = new VA.e;
    var mu = SF(3466),
      OA = SF(7700);
    const xu = FF => {
        let WF = null;
        for (const SF of FF.querySelectorAll("[data-pad-tabs]")) PW(SF) && (!WF || Number(SF.dataset.padTabs) < Number(WF.dataset.padTabs)) && (WF = SF);
        return WF
      },
      ZA = (FF, WF, SF, CF) => {
        FF.focusWhenFound((() => {
          const AF = FF.pickInitial(WF);
          if (AF && !SF.has(AF) && (null === CF || void 0 === CF || !CF.contains(AF))) return AF;
          const uF = ((FF, WF) => {
              const SF = WF => FF.getEnabledCandidates(WF).filter((FF => !FF.closest("[data-pad-tabs]")));
              for (const CF of TW(WF)) {
                const FF = SF(CF);
                if (FF.length > 0) return FF
              }
              return SF(WF)
            })(FF, WF).filter((FF => !SF.has(FF))),
            hF = qu(uF.map((FF => FF.getBoundingClientRect())));
          return hF >= 0 ? uF[hF] : null
        }), 3e3)
      },
      oA = (FF, WF, SF, CF) => {
        var AF;
        const uF = ((FF, WF) => {
          if (0 === FF.length) return null;
          const SF = FF.findIndex((FF => "true" === FF.dataset.padSelected));
          return SF < 0 ? WF > 0 ? FF[0] : FF[FF.length - 1] : FF[(SF + WF + FF.length) % FF.length]
        })([...SF.querySelectorAll("[data-pad-tab]")].filter((FF => PW(FF) && !RW(FF))), CF);
        if (!uF) return;
        const hF = null !== (AF = null === FF || void 0 === FF ? void 0 : FF.getFocused()) && void 0 !== AF ? AF : null,
          bW = !(null === hF || void 0 === hF || !hF.isConnected) && SF.contains(hF),
          dF = FF && !bW ? new Set(FF.getEnabledCandidates(WF)) : null;
        xS(uF), FF && (dF ? ZA(FF, WF, dF, SF) : FF.setFocus(uF, {
          byUser: !0
        }))
      },
      YA = FF => {
        var WF;
        const SF = cW(null !== (WF = OF(FF, "x")) && void 0 !== WF ? WF : FF),
          CF = EW(FF).filter((FF => !RW(FF))),
          AF = CF.filter((FF => GF(FF.getBoundingClientRect(), SF)));
        return (AF.length > 0 ? AF : CF).sort(((FF, WF) => ku(FF.getBoundingClientRect(), WF.getBoundingClientRect())))
      },
      MA = (FF, WF, SF) => {
        const CF = [...WF.querySelectorAll("[data-pad-row]")].filter(PW),
          AF = FF.getFocused(),
          uF = AF ? CF.findIndex((FF => FF.contains(AF))) : -1;
        let hF = 0,
          bW = SF > 0 ? 0 : CF.length - 1;
        if (uF >= 0 && AF) hF = Math.max(0, YA(CF[uF]).indexOf(AF)), bW = uF + SF;
        else if (AF) {
          const FF = AF.getBoundingClientRect(),
            WF = CF.map((WF => {
              const CF = WF.getBoundingClientRect();
              return SF > 0 ? CF.top >= FF.top : CF.bottom <= FF.bottom
            }));
          bW = SF > 0 ? WF.indexOf(!0) : WF.lastIndexOf(!0)
        }
        for (let dF = bW; dF >= 0 && dF < CF.length; dF += SF) {
          const WF = YA(CF[dF]);
          if (WF.length > 0) return void FF.setFocus(WF[Math.min(hF, WF.length - 1)], {
            byUser: !0
          })
        }
      },
      cu = (FF, WF, SF) => {
        var CF, AF;
        const uF = null !== (CF = null === FF || void 0 === FF ? void 0 : FF.getFocused()) && void 0 !== CF ? CF : null,
          hF = null !== uF && void 0 !== uF && uF.closest("[data-pad-row]") ? "x" : "y",
          bW = null !== (AF = uF ? OF(uF, hF, WF) : null) && void 0 !== AF ? AF : ZF(WF, hF);
        if (!bW) return;
        const dF = uF ? kS(uF) : null;
        if (MF(bW, hF, SF * ("y" === hF ? bW.clientHeight : bW.clientWidth) * .85), !FF || !dF) return;
        const PF = cW(bW),
          RF = FF.getEnabledCandidates(WF).filter((FF => bW.contains(FF) && GF(FF.getBoundingClientRect(), PF))),
          iW = au(dF, RF.map((FF => FF.getBoundingClientRect())));
        iW >= 0 && FF.setFocus(RF[iW], {
          scroll: !1,
          byUser: !0
        })
      };
    let GA = null;
    const zu = (FF, WF) => {
        var SF, CF;
        const AF = WF.querySelector("[data-pad-friends-column]"),
          uF = FF.getFocused();
        if (!AF || !uF || !AF.contains(uF)) return !1;
        const hF = FF.getEnabledCandidates(WF).filter((FF => !AF.contains(FF))),
          bW = au(kS(uF), hF.map((FF => FF.getBoundingClientRect()))),
          dF = null === (SF = GA) || void 0 === SF ? void 0 : SF.deref();
        return FF.setFocus(null !== dF && void 0 !== dF && dF.isConnected ? dF : null !== (CF = hF[bW]) && void 0 !== CF ? CF : null, {
          byUser: !0
        }), !0
      },
      IA = FF => {
        const WF = (0, RF.h)(FF);
        return (0, QF.B)(WF) || AA.s.some((FF => (0, RF.h)(FF) === WF)) ? null : WF
      },
      fA = (FF, WF) => {
        const SF = IA(WF);
        return null !== SF && FF.wasPressed(SF)
      },
      yu = function(FF, WF, SF) {
        let CF = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const AF = (FF => {
            var WF, SF;
            return null !== (WF = null === (SF = xu(FF)) || void 0 === SF ? void 0 : SF.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== WF ? WF : null
          })(WF),
          uF = FF && AF ? new Set(FF.getEnabledCandidates(WF)) : null;
        (0, WA.c)(), SF === SA.n.SETTINGS && (0, CA.k)(dF.b.get("openEverythingMenuName")) ? dF.b.set({
          openEverythingMenuName: SF
        }) : (0, CA.p)(new Event("padMenuShortcut"), SF, CF), FF && uF && AF && ZA(FF, WF, uF, AF.closest("[data-pad-tabs]"))
      },
      sA = FF => null !== FF.closest(".Dropdown-root") || null !== FF.querySelector(".Dropdown-root.is-open"),
      nA = FF => null !== (0, OA.e)() && "popup" !== FF.layer.kind && !xu(FF.root) && !sA(FF.root),
      HA = (0, rW.b)(QF.T),
      KA = (0, rW.b)(QF.T),
      wA = (FF, WF, SF) => {
        if (((FF, WF) => {
            const SF = (0, RF.h)("chat");
            return DA(WF) && FF.isHeld(SF) ? "hold" === LA.update(FF.wasPressed(SF), FF.isHeld(SF), performance.now(), gW.c[(0, eF.i)().tapHoldTime].wheelMs) && (iW.c.consumeButton(SF), PF.j.Uu(NA.m), !0) : (LA.release(), !1)
          })(WF, SF.layer.kind)) return !0;
        const CF = SF.root;
        for (const [hF, bW] of [
            ["menuTabPrevious", -1],
            ["menuTabNext", 1]
          ])
          if (WF.wasPressed((0, RF.h)(hF))) {
            const WF = sA(CF) ? null : xu(CF);
            if (WF) oA(FF, CF, WF, bW);
            else if (nA(SF)) {
              var AF;
              const WF = FF ? new Set(FF.getEnabledCandidates(CF)) : null;
              null !== (AF = (0, OA.e)()) && void 0 !== AF && AF(bW) && FF && WF && ZA(FF, CF, WF, null)
            } else FF && MA(FF, CF, bW);
            return !0
          } for (const [hF, bW, dF] of [
            ["menuPageUp", -1, HA],
            ["menuPageDown", 1, KA]
          ]) {
          const SF = (0, RF.h)(hF);
          if (WF.wasPressed(SF) && dF.reset(), dF.update(WF.isHeld(SF), performance.now())) return cu(FF, CF, bW), !0
        }
        const uF = "popup" === SF.layer.kind;
        return fA(WF, "pause") ? (uF || (0, CA.n)() && "menu" !== SF.layer.kind || yu(FF, CF, (0, CA.n)() ? SA.n.SETTINGS : (0, mu.c)()), !0) : !!fA(WF, "leaderboard") && ("home" === SF.layer.kind ? (FF => {
          const WF = [...FF.querySelectorAll("[data-pad-notifications]")].find(PW);
          WF && xS(WF)
        })(CF) : uF || yu(FF, CF, SA.n.LOBBY_LEADERBOARD, "inGame" === dF.b.get("gameState")), !0)
      },
      XA = (FF, WF, SF) => {
        if (wA(FF, WF, SF)) return !0;
        const CF = "home" === SF.layer.kind;
        if (WF.wasPressed((0, RF.h)("menuSecondary"))) {
          const WF = FF.getFocused(),
            AF = WF ? bu(WF) : null;
          if (AF) return xS(AF), !0;
          if (CF) {
            const WF = SF.root.querySelector("[data-pad-search] input");
            return WF && tS(WF, SF.root) ? (FF.setFocus(WF, {
              byUser: !0
            }), xS(WF)) : dF.b.set({
              searchOpen: !0
            }), !0
          }
        }
        return !(!CF || !fA(WF, "inventory")) && (((FF, WF) => {
          var SF, CF;
          const AF = WF.querySelector("[data-pad-friends-column]");
          if (!AF || !PW(AF)) return void(0, CA.p)(new Event("padMenuShortcut"), SA.n.SOCIAL);
          if (zu(FF, WF)) return;
          const uF = null !== (SF = null === (CF = AF.querySelector("[data-pad-friends-start]")) || void 0 === CF ? void 0 : CF.getBoundingClientRect().top) && void 0 !== SF ? SF : -1 / 0,
            hF = FF.getEnabledCandidates(AF),
            bW = hF.filter((FF => FF.getBoundingClientRect().top >= uF)),
            dF = bW.length > 0 ? bW : hF,
            PF = qu(dF.map((FF => FF.getBoundingClientRect())));
          FF.setFocus(PF >= 0 ? dF[PF] : null, {
            byUser: !0
          })
        })(FF, SF.root), !0)
      },
      UA = FF => {
        var WF, SF, CF;
        const AF = fW(FF);
        if (null !== AF) return AF;
        const uF = (null !== (WF = null !== (SF = null !== (CF = FF.getAttribute("aria-label")) && void 0 !== CF ? CF : FF.getAttribute("title")) && void 0 !== SF ? SF : FF.textContent) && void 0 !== WF ? WF : "").replace(/\s+/g, " ").trim();
        return uF ? `${FF.tagName}:${uF.slice(0,100)}` : null
      };
    class BA {
      constructor() {
        this.remembered = new Map, this.history = []
      }
      enter(FF) {
        const WF = this.history.indexOf(FF);
        if (WF >= 0) {
          for (const FF of this.history.splice(WF + 1)) this.remembered.delete(FF);
          return !0
        }
        return this.remembered.delete(FF), this.history.push(FF), this.history.length > 32 && this.forget(this.history[0]), !1
      }
      forget(FF) {
        this.remembered.delete(FF);
        const WF = this.history.indexOf(FF);
        WF >= 0 && this.history.splice(WF, 1)
      }
      remember(FF, WF, SF, CF) {
        const AF = UA(WF),
          uF = fW(WF),
          hF = null !== uF && ((FF, WF) => {
            let SF = 0;
            for (const CF of FF.querySelectorAll("[data-pad-key], [href]"))
              if ((CF.getAttribute("data-pad-key") === WF || CF.getAttribute("href") === WF) && (SF++, SF > 1)) return !0;
            return !1
          })(SF, uF) ? Math.max(0, this.twins(CF(), uF).indexOf(WF)) : 0;
        this.remembered.set(FF, {
          element: new WeakRef(WF),
          identity: AF,
          ordinal: hF
        })
      }
      has(FF) {
        return this.remembered.has(FF)
      }
      recall(FF, WF) {
        var SF, CF;
        const AF = this.remembered.get(FF);
        if (!AF) return null;
        const uF = AF.element.deref();
        if (uF && WF.includes(uF)) return uF;
        if (null === AF.identity) return null;
        const hF = this.twins(WF, AF.identity);
        return null !== (SF = null !== (CF = hF[AF.ordinal]) && void 0 !== CF ? CF : hF[0]) && void 0 !== SF ? SF : null
      }
      twins(FF, WF) {
        return FF.filter((FF => UA(FF) === WF))
      }
    }
    var ju = SF(1141);
    const vu = FF => {
        const WF = [];
        let SF = FF;
        for (; SF && SF !== document.body;) {
          const FF = getComputedStyle(SF).zIndex;
          "auto" !== FF && WF.push(Number(FF) || 0), SF = SF.parentElement
        }
        return WF.reverse()
      },
      JA = (FF, WF) => {
        const SF = ((FF, WF) => {
          const SF = Math.max(FF.length, WF.length);
          for (let uF = 0; uF < SF; uF++) {
            var CF, AF;
            const SF = (null !== (CF = FF[uF]) && void 0 !== CF ? CF : 0) - (null !== (AF = WF[uF]) && void 0 !== AF ? AF : 0);
            if (0 !== SF) return SF
          }
          return 0
        })(vu(FF), vu(WF));
        if (0 !== SF) return SF > 0;
        if (FF.contains(WF)) return !1;
        if (WF.contains(FF)) return !0;
        const CF = FF.compareDocumentPosition(WF);
        return !!(CF & Node.DOCUMENT_POSITION_PRECEDING) || !(CF & Node.DOCUMENT_POSITION_FOLLOWING) && null
      },
      pA = (FF, WF) => {
        var SF;
        return null !== (SF = JA(FF.root, WF.root)) && void 0 !== SF ? SF : FF.order > WF.order
      },
      lA = (FF, WF) => WF.some((WF => !WF.contains(FF) && !FF.contains(WF) && !0 === JA(WF, FF)));
    let Fu = null,
      Wu = null,
      Su = -1;
    const Cu = () => {
        var FF;
        const WF = null === (FF = document.timeline) || void 0 === FF ? void 0 : FF.currentTime,
          SF = "number" === typeof WF ? WF : null;
        if (null !== SF && SF === Wu && Su === (0, ju.c)()) return Fu;
        let CF = null;
        const AF = [],
          uF = [...document.querySelectorAll("[data-pad-covers]")].filter(PW);
        for (const hF of (0, ju.g)()) {
          const FF = hF.getRoot(),
            WF = !!FF && PW(FF) && !lA(FF, uF);
          if (hF.shown && !WF && AF.push(hF), hF.shown = WF, !FF || !WF) continue;
          const SF = {
            layer: hF,
            root: FF,
            order: hF.order
          };
          CF && !pA(SF, CF) || (CF = SF)
        }
        Fu = CF, Wu = SF, Su = (0, ju.c)();
        for (const hF of AF)(0, ju.k)(hF);
        return Fu
      },
      Au = () => {
        const FF = Cu();
        return !(null === FF || void 0 === FF || !FF.layer.close) && (FF.layer.close(), Wu = null, !0)
      },
      uu = () => {
        var FF, WF;
        return null !== (FF = null === (WF = Cu()) || void 0 === WF ? void 0 : WF.root) && void 0 !== FF ? FF : null
      },
      hu = FF => FF ? {
        ...FF,
        root: uu()
      } : null;
    let bh = null,
      du = null,
      Pu = (0, eF.i)().menuNavigation,
      Ru = null;
    const ih = new qW;
    let eu = null;
    PF.j.subscribe(eF.f, (() => {
      const FF = (0, eF.i)().menuNavigation;
      FF !== Pu && (Pu = FF, bh = null, du = null)
    }));
    const Eu = () => {
        var FF;
        return null !== (FF = bh) && void 0 !== FF ? FF : (0, eF.i)().menuNavigation
      },
      Qu = FF => {
        if (Tu()) {
          if (Ru = hu(FF), "hybrid" === Eu()) return ih.lock(), void(du = du ? null : uu());
          bh = "focus" === Eu() ? "cursor" : "focus"
        }
      },
      rh = () => {
        const FF = Ru;
        return Ru = null, FF
      };
    let gh = {
      root: null,
      firstSeenMs: -1 / 0,
      atMs: -1 / 0,
      has: !1
    };
    const th = function(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        const SF = gh.root === FF,
          CF = SF ? gh.firstSeenMs : WF,
          AF = gh.has || WF - CF > 1e3;
        return (!SF || !AF || WF - gh.atMs > 250) && (gh = {
          root: FF,
          firstSeenMs: CF,
          atMs: WF,
          has: rS(FF)
        }), gh.has
      },
      Tu = () => {
        const FF = uu();
        return null !== FF && th(FF)
      },
      ah = () => {
        const FF = Cu();
        return du && (null === FF || void 0 === FF ? void 0 : FF.root) !== du && (du = null), (FF => {
          let {
            mode: WF,
            hasLayer: SF,
            hasCandidates: CF,
            hybridCursorEngaged: AF
          } = FF;
          return SF ? "cursor" !== WF && CF() ? "hybrid" === WF && AF ? "cursor" : "focus" : "cursor" : null
        })({
          mode: Eu(),
          hasLayer: null !== FF,
          hasCandidates: () => null !== FF && th(FF.root),
          hybridCursorEngaged: null !== du
        })
      },
      kh = () => "hybrid" === Eu() && Tu(),
      qh = "pad-focused";
    var Vu = SF(4034);
    const Nu = "[data-pad-destructive]",
      Du = `${Nu}, [data-pad-back]`,
      Lu = FF => ({
        rect: FF.getBoundingClientRect(),
        destructive: FF.matches(Nu),
        closes: null !== FF.closest("[data-pad-close-button]"),
        unavailable: FF.matches("[data-pad-unavailable]")
      }),
      mh = FF => {
        let {
          destructive: WF,
          closes: SF,
          unavailable: CF
        } = FF;
        return WF ? SF ? 2 : 3 : CF ? 1 : 0
      },
      Ou = FF => {
        let WF = -1;
        for (let SF = 0; SF < FF.length; SF++) {
          if (WF < 0) {
            WF = SF;
            continue
          }
          const CF = FF[SF],
            AF = FF[WF];
          mh(CF) === mh(AF) ? ku(CF.rect, AF.rect) < 0 && (WF = SF) : mh(CF) < mh(AF) && (WF = SF)
        }
        return WF
      },
      xh = "[data-pad-tabs]",
      Zu = "[data-pad-tab]",
      ou = (FF, WF) => {
        const SF = FF.querySelector(`${Zu}[data-pad-selected='true']`);
        return SF && WF.includes(SF) ? SF : null
      },
      Yu = (FF, WF) => {
        let SF = WF;
        for (let CF = WF.parentElement; CF && !CF.contains(FF); CF = CF.parentElement) SF = CF;
        return SF
      };
    class Mu {
      constructor() {
        this.contentReturn = null
      }
      redirect(FF, WF, SF, CF) {
        var AF, uF;
        const hF = FF.closest(xh),
          bW = WF.closest(xh);
        var dF;
        if (bW && bW !== hF) return hF || (this.contentReturn = new WeakRef(FF)), null !== (dF = ou(bW, SF)) && void 0 !== dF ? dF : WF;
        if (!hF || bW) return WF;
        const PF = Yu(FF, WF),
          RF = null === (AF = this.contentReturn) || void 0 === AF ? void 0 : AF.deref();
        return RF && PF.contains(RF) && SF.includes(RF) ? RF : null !== (uF = this.pickRegionStart(PF, OF(WF, "y", CF), SF)) && void 0 !== uF ? uF : WF
      }
      findTabContent(FF, WF, SF) {
        const CF = FF.closest(xh);
        if (!CF || !FF.matches(Zu) || CF.contains(WF)) return null;
        const AF = WF.closest(xh);
        if (AF && Number(AF.dataset.padTabs) <= Number(CF.dataset.padTabs)) return null;
        const uF = Yu(FF, WF);
        return SF.some((FF => uF.contains(FF) && !FF.closest(Du))) || !WF.closest(Du) ? uF : null
      }
      pickContentStart(FF, WF, SF) {
        return this.contentReturn = null, this.pickRegionStart(FF, OF(FF, "y", SF), WF)
      }
      pickReplacedContentStart(FF, WF, SF, CF) {
        if (!WF.contains(FF)) return null;
        const AF = Yu(WF, FF),
          uF = SF.filter((FF => WF.contains(FF) && !AF.contains(FF) && !FF.closest(Du)));
        return 0 === uF.length ? null : (this.contentReturn = null, this.pickRegionStart(WF, OF(uF[0], "y", CF), uF))
      }
      backToStrip(FF, WF, SF) {
        if (FF.closest(xh)) return null;
        const CF = xu(SF);
        for (const AF of SF.querySelectorAll(xh)) {
          if (Number(AF.dataset.padTabs) <= 1 || AF === CF) continue;
          const uF = ou(AF, WF),
            hF = uF ? Yu(FF, AF).parentElement : null;
          if (uF && hF && hF !== SF && SF.contains(hF)) return this.contentReturn = new WeakRef(FF), uF
        }
        return null
      }
      pickRegionStart(FF, WF, SF) {
        const CF = cW(WF),
          AF = FF => {
            const WF = SF.filter((WF => FF.contains(WF) && !WF.closest(xh) && GF(WF.getBoundingClientRect(), CF))),
              AF = Ou(WF.map(Lu));
            return AF >= 0 ? WF[AF] : null
          };
        for (const uF of TW(FF)) {
          const FF = AF(uF);
          if (FF) return FF
        }
        for (const uF of FF.querySelectorAll(xh)) {
          const FF = ou(uF, SF);
          if (FF) return FF
        }
        return AF(FF)
      }
    }
    const ch = 1e3,
      Gu = "[data-pad-default-focus], .Dropdown-option.is-selected",
      zh = ".Dropdown-root.is-open > .Dropdown-menu",
      Iu = "[data-pad-no-step-in]",
      fu = "[data-pad-tabs]",
      yh = "[data-pad-press-area]",
      su = FF => {
        let WF = FF;
        for (let SF = 0; WF && SF <= 4; SF++, WF = WF.parentElement) {
          const SF = WF.querySelector(".CircleInfo");
          if (SF) return WF === FF || WF.querySelectorAll(bS).length <= 1 ? SF : null;
          if (WF !== FF && WF.querySelectorAll(bS).length > 1) return null
        }
        return null
      },
      nu = (FF, WF, SF) => {
        mS(FF, WF, SF);
        const CF = null !== FF && void 0 !== FF && FF.isConnected ? su(FF) : null,
          AF = su(WF);
        CF !== AF && mS(CF, AF, AF ? kS(AF) : SF, {
          leaveBelow: FF,
          enterBelow: WF
        })
      },
      Hu = FF => FF.getBoundingClientRect(),
      Ku = (FF, WF, SF) => {
        const CF = new Set(SF);
        for (let AF = FF; AF; AF = AF === WF ? null : AF.parentElement)
          if (CF.has(AF)) return AF;
        return null
      },
      wu = (FF, WF) => !FF.root || FF.root === WF || WF.matches(zh) && FF.root.contains(WF);
    const Xu = new class {
        constructor() {
          this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new BA, this.tabStripNav = new Mu, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepeatKey = null, this.confirmRepeated = !1, this.confirmRepeat = (0, rW.b)(QF.r), this.dpadRepeats = new Map(QF.y.map((FF => [FF, (0, rW.b)(QF.z)]))), this.stickRepeat = new QF.d((0, rW.b)(QF.X)), this.lastRefocusCheckMs = -1 / 0, this.enteredLayerAtMs = 0, this.lastFocusedCentre = null, this.lastActivatedKey = null, this.lastActivated = null, this.lastActivatedAtMs = -1 / 0, this.pendingFocus = null, this.tabOpenWait = null, this.retryMove = null, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.wasActive = !1, this.layerKind = null, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.listeners = new Set, this.dropdownLayers = new WeakMap, this.dropdownLayerCounter = 0
        }
        install() {
          const FF = iW.c.register({
              name: "focus",
              isActive: () => (0, EF.j)() && "focus" === ah(),
              onFrame: FF => {
                this.onFrame(FF)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: FF => (0, iW.e)(FF) || FF === (0, RF.h)("menuConfirm") && GW((0, EF.c)())
            }),
            WF = (0, ju.l)((FF => {
              const WF = (0, ju.s)(FF);
              null === FF.memoryKey && this.memory.forget(WF), WF === this.layerKey && (this.layerKey = null)
            }));
          let SF = -1 / 0;
          const CF = hF.f.onFrame((FF => {
              (0, EF.j)() || FF.timestampMs - SF < 100 || (SF = FF.timestampMs, Cu())
            })),
            AF = FF => {
              FF.isTrusted && FF.target instanceof Element && hF.f.getActivePad() && this.noteChosenStop(FF.target)
            };
          return document.addEventListener("click", AF, !0), () => {
            FF(), WF(), CF(), document.removeEventListener("click", AF, !0), this.deactivate()
          }
        }
        noteChosenStop(FF) {
          var WF, SF;
          const CF = Cu();
          if (!CF || !CF.root.contains(FF)) return;
          const AF = null !== (WF = null === (SF = FF.closest(".Dropdown-root")) || void 0 === SF ? void 0 : SF.querySelector(".Dropdown-control")) && void 0 !== WF ? WF : FF,
            uF = Ku(AF, CF.root, this.getEnabledCandidates(CF.root));
          if (!uF) return;
          const hF = (0, ju.s)(CF.layer);
          hF === this.layerKey && CF.root === this.layerRoot || this.beginLayer(CF, hF), this.wasActive ? this.setFocus(uF, {
            scroll: !1,
            byUser: !0
          }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = uF, this.lastFocusedCentre = kS(uF), this.rememberFocus(uF), this.notify())
        }
        getFocused() {
          return this.focused
        }
        isActive() {
          return this.wasActive
        }
        onChange(FF) {
          return this.listeners.add(FF), () => {
            this.listeners.delete(FF)
          }
        }
        notify() {
          for (const FF of this.listeners) FF()
        }
        deactivate() {
          var FF;
          if (this.wasActive) {
            this.wasActive = !1, this.layerKind = null, this.confirmPressedOn = null, this.retryMove = null, this.pendingFocus = null;
            for (const FF of this.dpadRepeats.values()) FF.reset();
            this.stickRepeat.reset(), null !== (FF = this.focused) && void 0 !== FF && FF.isConnected && nu(this.focused, null, kS(this.focused)), this.notify()
          }
        }
        setFocus(FF) {
          var WF;
          let {
            scroll: SF = !0,
            byUser: CF = !1
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (CF && (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1), FF === this.focused) return;
          const AF = null !== (WF = this.focused) && void 0 !== WF && WF.isConnected ? this.focused : null;
          if (this.focused = FF, FF) {
            SF && (FF.classList.add(qh), FF.scrollIntoView({
              block: "nearest",
              inline: "nearest",
              behavior: "instant"
            })), CF && ((FF, WF) => {
              const SF = WF.closest("[data-pad-friends-column]");
              SF && FF && !SF.contains(FF) && (GA = new WeakRef(FF))
            })(AF, FF);
            const WF = kS(FF);
            this.lastFocusedCentre = WF, this.movedInLayer && this.rememberFocus(FF), nu(AF, FF, WF), "false" === FF.getAttribute("aria-pressed") && FF.closest("[data-pad-select-on-focus]") && xS(FF)
          } else AF && nu(AF, null, kS(AF));
          this.notify()
        }
        rememberFocus(FF) {
          const WF = this.layerRoot;
          this.layerKey && WF && this.memory.remember(this.layerKey, FF, WF, (() => this.getEnabledCandidates(WF)))
        }
        noteCursorActivation(FF) {
          const WF = Cu();
          if (!WF || !WF.root.contains(FF)) return;
          const SF = this.getEnabledCandidates(WF.root),
            CF = new Set(SF);
          let AF = FF;
          for (; AF && !CF.has(AF);) AF = AF === WF.root ? null : AF.parentElement;
          if (!(AF instanceof HTMLElement)) return;
          const uF = (0, ju.s)(WF.layer);
          this.memory.enter(uF), this.memory.remember(uF, AF, WF.root, (() => SF))
        }
        notePageEnteredByCursor(FF) {
          return this.memory.enter(FF)
        }
        recallStop(FF, WF) {
          return this.findRemembered(FF, WF)
        }
        focusWhenFound(FF) {
          let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
            SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          this.pendingFocus = {
            find: FF,
            untilMs: performance.now() + WF,
            holdWhile: SF
          }
        }
        getEnabledCandidates(FF) {
          return EW(FF).filter((FF => !RW(FF)))
        }
        onFrame(FF) {
          var WF;
          const SF = Cu();
          if (!SF) return;
          const CF = null !== (WF = this.findOpenDropdown(SF)) && void 0 !== WF ? WF : SF,
            AF = performance.now(),
            uF = (0, ju.s)(CF.layer);
          if (uF !== this.layerKey || CF.root !== this.layerRoot) {
            const WF = this.focused;
            if (null !== this.layerKey && CF.root === this.layerRoot && WF && tS(WF, CF.root)) this.continueLayer(uF, WF), this.wasActive || this.resume(CF.root, AF);
            else {
              const WF = !this.wasActive && !FF.wokeDevice,
                hF = "death" === this.layerKind || WF,
                bW = this.enterLayer(CF, uF);
              "popup" !== CF.layer.kind || CF !== SF || bW ? "menu" === CF.layer.kind && hF && "inGame" === dF.b.get("gameState") && !(0, WA.g)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = AF + ch) : (this.pressGuardExtends = WF, this.pressGuardUntilMs = AF + (WF ? ch : hF ? 500 : 250))
            }
          } else this.wasActive || this.resume(CF.root, AF);
          if (this.layerKind = CF.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), FF.wokeDevice && this.focusPointedStop(CF.root), this.validateFocus(CF, AF), AF < this.pressGuardUntilMs && this.pressGuardExtends && (FF.wasPressed((0, RF.h)("menuConfirm")) || FF.wasPressed((0, RF.h)("menuBack"))) && (this.pressGuardUntilMs = AF + ch), AF >= this.pressGuardUntilMs && this.handleButtons(FF, CF)) return;
          const hF = "hybrid" === Eu();
          if (hF && (FF => {
              const WF = uu();
              return WF !== eu && (eu = WF, ih.lock()), ih.update(FF, (0, eF.i)().moveDeadzone)
            })(FF.leftStick)) return bW = this.getHandoff(), Ru = hu(bW), du = uu(), void iW.c.handOffHeldInput();
          var bW;
          this.handleDirections(FF, CF, AF, !hF), this.handleScroll(FF, CF)
        }
        findOpenDropdown(FF) {
          const WF = FF.root.querySelector(zh);
          if (!WF || !PW(WF)) return null;
          let SF = this.dropdownLayers.get(WF);
          return SF || (this.dropdownLayerCounter++, SF = {
            id: `dropdown-${this.dropdownLayerCounter}`,
            kind: FF.layer.kind,
            getRoot: () => WF,
            close: () => {
              YW(WF)
            },
            memoryKey: null
          }, this.dropdownLayers.set(WF, SF)), {
            layer: SF,
            root: WF,
            order: FF.order
          }
        }
        focusPointedStop(FF) {
          const WF = (0, EF.c)(),
            SF = WF ? document.elementFromPoint(WF.x, WF.y) : null;
          if (!SF || !FF.contains(SF)) return;
          const CF = Ku(SF, FF, this.getEnabledCandidates(FF));
          CF && this.setFocus(CF, {
            scroll: !1,
            byUser: !0
          })
        }
        enterLayer(FF, WF) {
          const SF = this.beginLayer(FF, WF),
            CF = rh();
          return CF && wu(CF, FF.root) ? (this.takeOver(FF.root, CF, this.enteredLayerAtMs), SF) : (this.restoreLayerFocus(FF.root, SF), SF)
        }
        beginLayer(FF, WF) {
          return this.layerKey = WF, this.layerRoot = FF.root, this.lastActivatedKey = null, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoreOnFocusLoss = !1, this.retryMove = null, this.pendingFocus = null, this.confirmPressedOn = null, this.lastRefocusCheckMs = -1 / 0, this.pressGuardUntilMs = -1 / 0, this.pressGuardExtends = !1, this.enteredLayerAtMs = performance.now(), this.lastFocusedCentre = null, this.memory.enter(WF)
        }
        restoreLayerFocus(FF, WF) {
          const SF = WF && this.layerKey ? this.findRemembered(FF, this.layerKey) : null;
          this.restoredFromMemory = null !== SF, this.setFocus(null !== SF && void 0 !== SF ? SF : this.pickInitial(FF, {
            waitForContent: !0
          }))
        }
        continueLayer(FF, WF) {
          this.layerKey = FF;
          const SF = this.memory.enter(FF);
          this.restoreOnFocusLoss = SF, this.movedInLayer && !SF && this.rememberFocus(WF)
        }
        resume(FF, WF) {
          var SF;
          const CF = rh();
          CF && wu(CF, FF) ? this.takeOver(FF, CF, WF) : null !== (SF = this.focused) && void 0 !== SF && SF.isConnected && nu(null, this.focused, kS(this.focused))
        }
        pickPreferred(FF) {
          var WF;
          return null !== (WF = this.layerKey ? this.findRemembered(FF, this.layerKey) : null) && void 0 !== WF ? WF : this.pickInitial(FF, {
            waitForContent: !0
          })
        }
        findRemembered(FF, WF) {
          return this.memory.has(WF) ? this.memory.recall(WF, this.getEnabledCandidates(FF)) : null
        }
        getHandoff() {
          var FF, WF, SF;
          const CF = null !== (FF = this.focused) && void 0 !== FF && FF.isConnected ? this.focused : null,
            AF = null !== (WF = this.layerRoot) && void 0 !== WF && WF.isConnected ? this.layerRoot : null;
          return {
            point: CF ? kS(CF) : null !== (SF = this.lastFocusedCentre) && void 0 !== SF ? SF : this.getLayerStartPoint(AF),
            element: CF,
            direction: null
          }
        }
        getLayerStartPoint(FF) {
          if (!FF) return {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          };
          const WF = this.pickInitial(FF, {
            includeDisabled: !0
          });
          return kS(null !== WF && void 0 !== WF ? WF : FF)
        }
        takeOver(FF, WF, SF) {
          const {
            element: CF,
            direction: AF,
            point: uF
          } = WF, hF = CF instanceof HTMLElement && tS(CF, FF) ? CF : null;
          if (!AF) {
            const WF = this.focused;
            return hF ? this.setFocus(hF, {
              scroll: !1,
              byUser: !0
            }) : this.focusNearest(FF, uF), void(this.focused && this.focused === WF && this.focused.isConnected && nu(null, this.focused, kS(this.focused)))
          }
          if (this.dpadRepeats.get(AF).update(!0, SF), hF) return this.setFocus(hF, {
            scroll: !1,
            byUser: !0
          }), void this.move(FF, AF, SF, !0);
          const bW = this.getEnabledCandidates(FF),
            dF = bW.map(Hu),
            PF = QA(new DOMRect(uF.x, uF.y, 0, 0), dF, AF),
            RF = PF >= 0 ? PF : au(uF, dF);
          this.setFocus(RF >= 0 ? bW[RF] : this.pickInitial(FF), {
            byUser: !0
          })
        }
        focusNearest(FF, WF) {
          const SF = this.getEnabledCandidates(FF),
            CF = au(WF, SF.map(Hu));
          this.setFocus(CF >= 0 ? SF[CF] : this.pickInitial(FF), {
            byUser: !0
          })
        }
        pickDefault(FF) {
          let {
            includeDisabled: WF = !1,
            exclude: SF = null
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const CF = [...FF.querySelectorAll(Gu)].filter((CF => (null === SF || void 0 === SF || !SF.has(CF)) && (WF ? gS(CF, FF) : tS(CF, FF)))),
            AF = Ou(CF.map(Lu));
          return AF >= 0 ? CF[AF] : null
        }
        pickNewAreaStart(FF, WF) {
          const SF = [...FF.querySelectorAll(yh)].filter(PW);
          for (const CF of [...TW(FF), ...SF]) {
            if (WF.has(CF)) continue;
            const FF = this.getEnabledCandidates(CF),
              SF = Ou(FF.map(Lu));
            if (SF >= 0) return FF[SF]
          }
          return null
        }
        pickInitial(FF) {
          let {
            includeDisabled: WF = !1,
            waitForContent: SF = !1,
            enteredAtMs: CF = this.enteredLayerAtMs
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const AF = this.pickDefault(FF, {
            includeDisabled: WF
          });
          if (AF) return AF;
          const uF = FF => WF ? EW(FF) : this.getEnabledCandidates(FF);
          let hF = [];
          for (const eF of TW(FF))
            if (hF = uF(eF), hF.length > 0) break;
          if (0 === hF.length) {
            if (SF && performance.now() - CF < 1e4 && (FF => {
                for (const WF of FF.querySelectorAll("[data-pad-initial-area]"))
                  if (!dW(WF, !1)) return !0;
                return !1
              })(FF)) return null;
            hF = uF(FF)
          }
          const bW = hF.map(Hu),
            dF = cW(null),
            PF = hF.filter(((FF, WF) => GF(bW[WF], dF))),
            RF = PF.length > 0 ? PF : hF,
            iW = Ou(RF.map(Lu));
          return iW >= 0 ? RF[iW] : null
        }
        validateFocus(FF, WF) {
          if (this.pendingFocus) {
            var SF, CF;
            const AF = this.pendingFocus.find();
            if (AF && tS(AF, FF.root)) return this.pendingFocus = null, void this.setFocus(AF, {
              byUser: !0
            });
            WF > this.pendingFocus.untilMs && (null === (SF = (CF = this.pendingFocus).holdWhile) || void 0 === SF || !SF.call(CF)) && (this.pendingFocus = null)
          }
          const AF = this.focused,
            uF = !!AF && tS(AF, FF.root);
          if (!(!uF && AF && AF === this.lastActivated && WF - this.lastActivatedAtMs < 5e3 && FF.root.contains(AF) && PW(AF) && RW(AF))) {
            if (!uF && this.restoreOnFocusLoss && this.layerKey) return this.restoreOnFocusLoss = !1, this.movedInLayer = !1, this.scrolledInLayer = !1, this.enteredLayerAtMs = WF, void this.restoreLayerFocus(FF.root, !0);
            if ((!uF || !this.movedInLayer && !this.scrolledInLayer) && !(WF - this.lastRefocusCheckMs < (uF ? 200 : 50)))
              if (this.lastRefocusCheckMs = WF, uF) {
                const SF = WF - this.enteredLayerAtMs < 15e3 ? this.pickPreferred(FF.root) : null,
                  CF = null !== SF && void 0 !== SF ? SF : this.restoredFromMemory ? null : this.pickDefault(FF.root);
                CF && CF !== AF && this.setFocus(CF)
              } else {
                if (this.lastFocusedCentre && this.movedInLayer) {
                  const WF = this.pendingFocus;
                  return this.focusNearest(FF.root, this.lastFocusedCentre), void(this.pendingFocus = WF)
                }
                this.setFocus(this.pickPreferred(FF.root))
              }
          }
        }
        handleButtons(FF, WF) {
          if (FF.wasPressed((0, RF.h)("menuToggleCursor"))) return Qu(this.getHandoff()), !0;
          if (FF.wasPressed((0, RF.h)("menuBack"))) {
            const FF = YW(WF.root);
            return FF ? this.setFocus(FF, {
              byUser: !0
            }) : zu(this, WF.root) || (IW(WF.root) ? this.returnToOpener(WF.root) : this.backToStrip(WF.root) || Au()), !0
          }
          const SF = (0, RF.h)("menuConfirm");
          var CF, AF;
          FF.wasPressed(SF) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (CF = null === (AF = this.focused) || void 0 === AF ? void 0 : AF.getAttribute("data-pad-repeat")) && void 0 !== CF ? CF : null, this.confirmRepeated = FF.wokeDevice, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now()));
          if (FF.wasReleased(SF)) {
            const FF = this.confirmPressedOn;
            if (this.confirmPressedOn = null, FF && !this.confirmRepeated && FF === this.focused && FF.isConnected && !RW(FF)) {
              const SF = FF.matches("[data-pad-tab]") ? FF.closest(fu) : null;
              SF ? this.enterTab(FF, SF, WF.root, performance.now()) : this.activate(FF)
            }
            return !0
          }
          return this.repeatConfirm(FF, SF), XA(this, FF, WF)
        }
        repeatConfirm(FF, WF) {
          const SF = this.confirmPressedOn;
          SF && null !== this.confirmRepeatKey && FF.isHeld(WF) && (SF === this.focused && SF.isConnected && !RW(SF) && SF.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? SF.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.confirmRepeated = !0, this.activate(SF)) : this.confirmRepeatKey = null)
        }
        backToStrip(FF) {
          const WF = this.focused;
          if (!(0, eF.i)().menuBackToCategories) return !1;
          const SF = null !== WF && void 0 !== WF && WF.isConnected ? this.tabStripNav.backToStrip(WF, this.getEnabledCandidates(FF), FF) : null;
          return SF && this.setFocus(SF, {
            byUser: !0
          }), null !== SF
        }
        returnToOpener(FF) {
          const WF = this.lastActivatedKey;
          WF && (this.lastActivatedKey = null, this.focusWhenFound((() => {
            var SF;
            return null !== (SF = this.getEnabledCandidates(FF).find((FF => fW(FF) === WF))) && void 0 !== SF ? SF : null
          })))
        }
        activate(FF) {
          var WF;
          if ((0, Vu.b)(FF) || cS(FF)) return;
          this.lastActivatedKey = null !== (WF = fW(FF)) && void 0 !== WF ? WF : this.lastActivatedKey, this.lastActivated = FF, this.lastActivatedAtMs = performance.now(), this.rememberFocus(FF);
          const SF = this.layerRoot;
          if (SF) {
            const WF = new Set(SF.querySelectorAll(Gu)),
              CF = new Set(SF.querySelectorAll(`[data-pad-initial-area], ${yh}`)),
              AF = this.lastActivatedAtMs;
            this.focusWhenFound((() => {
              var AF;
              return tS(FF, SF) ? null : null !== (AF = this.pickDefault(SF, {
                exclude: WF
              })) && void 0 !== AF ? AF : this.pickNewAreaStart(SF, CF)
            }), 5e3, (() => FF.isConnected && RW(FF) && performance.now() - AF < 6e4))
          }
          xS(FF), MW(FF)
        }
        handleDirections(FF, WF, SF, CF) {
          const AF = DA(WF.layer.kind) ? (0, RF.h)("chat") : null;
          for (const bW of QF.y) {
            this.dpadRepeats.get(bW).update(FF.isHeld(bW), SF) && (bW !== AF || FF.wasPressed(bW)) && this.move(WF.root, bW, SF, !0)
          }
          const uF = CF ? (0, QF.j)(FF.leftStick, (0, eF.i)().moveDeadzone) : {
              x: 0,
              y: 0
            },
            hF = this.stickRepeat.update((0, QF.Z)(uF), SF);
          if (hF && this.move(WF.root, hF, SF, !0), this.retryMove && SF >= this.retryMove.atMs) {
            const {
              direction: FF
            } = this.retryMove;
            this.retryMove = null, this.move(WF.root, FF, SF, !1)
          }
        }
        move(FF, WF, SF, CF) {
          var AF;
          let uF = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (this.pendingFocus && this.pendingFocus === (null === (AF = this.tabOpenWait) || void 0 === AF ? void 0 : AF.wait) && WF === this.tabOpenWait.direction) return;
          this.pendingFocus = null;
          const hF = this.focused;
          if (!hF || !hF.isConnected) {
            const WF = this.pickInitial(FF);
            return void(WF && this.setFocus(WF, {
              byUser: !0
            }))
          }
          const bW = "Left" === WF || "Right" === WF,
            dF = bW ? (0, Vu.b)(hF) : null;
          if (dF) return void dF.adjust("Left" === WF ? -1 : 1);
          const PF = FF => null !== FF.closest("[data-pad-friends-column]"),
            RF = PF(hF),
            iW = Hu(hF),
            eF = bW || hF.closest(fu) ? null : (FF => {
              const WF = new Map;
              return SF => {
                const CF = SF.closest(fu);
                if (!CF) return !1;
                let AF = WF.get(CF);
                if (void 0 === AF) {
                  const SF = Hu(CF);
                  AF = EA(FF, SF) && (SF.right <= FF.left || SF.left >= FF.right), WF.set(CF, AF)
                }
                return AF
              }
            })(iW),
            EF = null !== hF.closest(Iu),
            QF = this.getEnabledCandidates(FF).filter((FF => FF !== hF && (bW || PF(FF) === RF) && !(null !== eF && void 0 !== eF && eF(FF)) && (EF || !FF.closest(Iu)))),
            rW = QF.map(Hu),
            gW = OF(hF, "y", FF),
            tW = cW(gW);
          if (!uF && !GF(iW, tW)) {
            const FF = QF.filter(((FF, WF) => GF(rW[WF], tW)));
            if (FF.length > 0) {
              const WF = {
                x: tW.left + tW.width / 2,
                y: tW.top + tW.height / 2
              };
              return void this.setFocus(FF[au(WF, FF.map(Hu))], {
                byUser: !0
              })
            }
          }
          const TF = bW ? ((FF, WF, SF) => {
              const CF = Hu(FF),
                AF = FF.closest(fu),
                uF = AF ? Hu(AF) : null;
              return WF.map(((WF, hF) => {
                const bW = SF[hF];
                if (bW.bottom > CF.top && bW.top < CF.bottom) return !0;
                const dF = WF.closest(fu);
                if (AF && uF) return dF !== AF && (null !== dF || bW.bottom <= uF.top || bW.top >= uF.bottom);
                if (dF) return !EA(CF, Hu(dF));
                let PF = FF;
                for (let SF = FF.parentElement; SF && !SF.contains(WF); SF = SF.parentElement) PF = SF;
                const RF = Hu(PF);
                return bW.right > RF.left && bW.left < RF.right
              }))
            })(hF, QF, rW) : void 0,
            aW = bW && !hF.closest(fu) ? (FF => FF.map((FF => !FF.closest(Du))))(QF) : void 0,
            kW = ((FF, WF) => {
              const SF = [];
              for (let AF = FF; AF; AF = AF.parentElement) SF.push(AF);
              const CF = new Map;
              return SF.forEach(((FF, WF) => {
                CF.set(FF, SF.length - 1 - WF)
              })), WF.map((FF => {
                for (let WF = FF; WF; WF = WF.parentElement) {
                  const FF = CF.get(WF);
                  if (void 0 !== FF) return FF
                }
                return -1
              }))
            })(hF, QF),
            qW = bW ? "x" : "y",
            VF = OF(hF, qW, FF);
          let NF = QA(iW, rW, WF, kW, TF, aW);
          if (NF >= 0 && VF && !VF.contains(QF[NF])) {
            const FF = QF.flatMap(((FF, WF) => VF.contains(FF) ? [WF] : [])),
              SF = WF => WF && FF.map((FF => WF[FF])),
              CF = QA(iW, FF.map((FF => rW[FF])), WF, FF.map((FF => kW[FF])), SF(TF), SF(aW));
            NF = CF >= 0 ? FF[CF] : NF
          }
          if (NF >= 0) return void this.moveTo(hF, QF[NF], QF, FF, WF, uF);
          if (!CF) return;
          const DF = "Right" === WF || "Down" === WF ? 1 : -1;
          if (VF && YF(VF, qW, DF)) {
            const FF = "y" === qW ? VF.clientHeight : VF.clientWidth;
            MF(VF, qW, DF * FF * .5), this.retryMove = {
              direction: WF,
              atMs: SF + 80
            }
          }
        }
        moveTo(FF, WF, SF, CF, AF, uF) {
          const hF = this.tabStripNav.findTabContent(FF, WF, SF);
          hF && "true" !== FF.dataset.padSelected ? this.openTab(FF, hF, CF, AF) : uF && !hF || this.setFocus(this.tabStripNav.redirect(FF, WF, SF, CF), {
            byUser: !0
          })
        }
        openTab(FF, WF, SF, CF) {
          const AF = WF.parentElement;
          xS(FF), this.focusWhenFound((() => "true" !== FF.dataset.padSelected ? null : WF.isConnected ? this.tabStripNav.pickContentStart(WF, this.getEnabledCandidates(SF), SF) : AF ? this.tabStripNav.pickReplacedContentStart(FF, AF, this.getEnabledCandidates(SF), SF) : null), 3e3), this.tabOpenWait = {
            wait: this.pendingFocus,
            direction: CF
          }
        }
        enterTab(FF, WF, SF, CF) {
          this.move(SF, (FF => {
            const WF = [...FF.querySelectorAll(Zu)].filter((WF => WF.closest(xh) === FF));
            if (WF.length >= 2) {
              const FF = WF[0].getBoundingClientRect(),
                SF = WF[1].getBoundingClientRect();
              return Math.abs(SF.top - FF.top) > Math.abs(SF.left - FF.left) ? "Right" : "Down"
            }
            const SF = FF.getBoundingClientRect();
            return SF.height > SF.width ? "Right" : "Down"
          })(WF), CF, !1, !0), this.focused !== FF || this.pendingFocus || this.activate(FF)
        }
        handleScroll(FF, WF) {
          const SF = (0, QF.j)(FF.rightStick, .2);
          if (0 === SF.x && 0 === SF.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          const CF = FF.dtMs / 1e3;
          for (const uF of ["x", "y"]) {
            var AF;
            const FF = SF[uF];
            if (0 === FF) continue;
            const hF = null !== (AF = OF(this.focused, uF, WF.root)) && void 0 !== AF ? AF : ZF(WF.root, uF);
            if (!hF) continue;
            const bW = Math.sign(FF) * FF * FF * 1500 * CF + this.scrollRemainder[uF],
              dF = Math.trunc(bW);
            this.scrollRemainder[uF] = bW - dF, 0 !== dF && (MF(hF, uF, dF), this.scrolledInLayer = !0)
          }
        }
      },
      Uu = ["controller:keyboardPhraseGg", "controller:keyboardPhraseHi", "controller:keyboardPhraseThanks", "controller:keyboardPhraseGl", "controller:keyboardPhraseBrb", "controller:keyboardPhraseYes", "controller:keyboardPhraseNo", "controller:keyboardPhraseHelp"];
    const Bu = new class {
        constructor() {
          this.lastSendMs = -1 / 0
        }
        claim(FF) {
          return !(FF - this.lastSendMs < 2e3) && (this.lastSendMs = FF, !0)
        }
      },
      jh = {
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
      vh = ["iK", "nameTag"],
      Ju = FF => {
        const WF = FF.target instanceof HTMLTextAreaElement && !vh.includes(FF.kind);
        return KC(FF.page, "chat" === FF.kind ? Uu.length : 0, WF)
      },
      pu = FF => {
        const WF = FF.getBoundingClientRect(),
          SF = window.innerHeight,
          CF = WF.top + WF.height / 2 < SF / 2 ? "bottom" : "top",
          AF = "bottom" === CF ? SF - WF.bottom - 6 : WF.top - 6;
        return {
          placement: CF,
          maxHeightPx: Math.min(.46 * SF, Math.max(.3 * SF, AF))
        }
      },
      lu = FF => {
        (0, lC.j)(FF) ? (0, lC.e)().close(): (Xu.noteChosenStop(FF), FF.blur())
      };
    class Fh {
      constructor(FF) {
        this.host = FF, this.lastShiftPressMs = -1 / 0, this.phraseTexts = [], this.phrasesFill = !1
      }
      setPhraseRow(FF, WF) {
        this.phraseTexts = FF, this.phrasesFill = WF
      }
      pressKey(FF) {
        const WF = this.host.getState(),
          SF = Ju(WF),
          CF = SF[FF.row][FF.col];
        this.host.setState({
          ...WF,
          focus: FF,
          preferredX: UC(SF, FF)
        }), "char" === CF.type ? this.typeChar(CF.char) : "command" === CF.type ? this.runCommand(CF.command) : this.sendPhrase(CF.phraseIndex)
      }
      runCommand(FF) {
        const WF = this.host.getState();
        switch (FF) {
          case "backspace":
            uW(WF.target);
            break;
          case "space":
            AW(WF.target, " ");
            break;
          case "newline":
            AW(WF.target, "\n");
            break;
          case "caretLeft":
            hW(WF.target, -1);
            break;
          case "caretRight":
            hW(WF.target, 1);
            break;
          case "shift": {
            const FF = performance.now();
            this.host.setState({
              ...WF,
              shift: vA(WF.shift, FF, this.lastShiftPressMs)
            }), this.lastShiftPressMs = FF;
            break
          }
          case "page":
          case "otherPage": {
            const SF = HC(WF.page, WF.accentsFirst)[FF];
            this.host.setState({
              ...WF,
              page: SF,
              focus: jA(Ju({
                ...WF,
                page: SF
              }), WF.focus)
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
            (0, lC.j)(WF.target) && (0, lC.e)().selectNextChannel()
        }
      }
      submit() {
        var FF, WF;
        const {
          target: SF
        } = this.host.getState();
        this.host.hide(), (0, lC.j)(SF) ? (0, lC.e)().submit() : (Xu.noteChosenStop(SF), null === (FF = (WF = (0, lC.i)(SF)).submit) || void 0 === FF || FF.call(WF), document.activeElement === SF && SF.blur())
      }
      close() {
        const {
          target: FF
        } = this.host.getState();
        this.host.hide(), lu(FF)
      }
      typeChar(FF) {
        const {
          target: WF,
          page: SF,
          shift: CF
        } = this.host.getState();
        AW(WF, pC(FF, SF, CF)), this.host.setState({
          ...this.host.getState(),
          shift: JC(CF, FF)
        })
      }
      sendPhrase(FF) {
        if (this.phrasesFill) {
          const {
            target: WF
          } = this.host.getState(), SF = this.phraseTexts[FF];
          SF && (WF.setSelectionRange(0, WF.value.length), AW(WF, SF))
        } else Bu.claim(performance.now()) && (this.host.hide(), (0, lC.e)().sendLine(this.phraseTexts[FF]))
      }
    }
    const Wh = {
        initialDelayMs: 380,
        intervalMs: 85
      },
      Sh = {
        initialDelayMs: 400,
        intervalMs: 55
      };
    class Ch {
      constructor(FF, WF) {
        this.host = FF, this.editor = WF, this.lastDirection = null, this.navRepeat = new QF.d((0, rW.b)(Wh)), this.commandRepeats = new Map(MC.filter((FF => {
          let {
            repeats: WF
          } = FF;
          return WF
        })).map((FF => {
          let {
            command: WF
          } = FF;
          return [WF, (0, rW.b)(Sh)]
        })))
      }
      reset() {
        this.navRepeat.reset();
        for (const FF of this.commandRepeats.values()) FF.reset()
      }
      onVisibleFrame(FF) {
        const WF = performance.now();
        for (const {
            command: AF,
            action: uF
          }
          of MC) {
          const SF = (0, RF.h)(uF),
            CF = this.commandRepeats.get(AF);
          if ((CF ? CF.update(FF.isHeld(SF), WF) : FF.wasPressed(SF)) && (this.editor.runCommand(AF), !this.host.getState().visible)) return
        }
        if (FF.wasPressed((0, RF.h)("keyboardType")) && (this.editor.pressKey(this.host.getState().focus), !this.host.getState().visible)) return;
        const SF = this.readNavDirection(FF);
        this.lastDirection = SF;
        const CF = this.navRepeat.update(SF, WF);
        CF && this.navigate(CF)
      }
      onHiddenFrame(FF, WF) {
        var SF;
        if (FF.wasPressed((0, RF.h)("keyboardClose"))) return void lu(WF);
        const CF = (0, RF.h)("keyboardType");
        if (FF.wasPressed(CF)) return iW.c.consumeButton(CF), void this.host.open(WF);
        const AF = this.readNavDirection(FF),
          uF = null !== AF && AF !== this.lastDirection;
        if (this.lastDirection = AF, !uF || (0, lC.j)(WF)) return;
        const hF = (null === (SF = Cu()) || void 0 === SF ? void 0 : SF.root.contains(WF)) || null !== WF.closest(".EntireInventoryWrapper");
        lu(WF), hF && iW.c.handOffHeldInput()
      }
      navigate(FF) {
        const WF = this.host.getState();
        if ("Up" === FF && 0 === WF.focus.row && "chat" === WF.kind) return (0, lC.e)().stepHistory(), void this.host.setState({
          ...WF
        });
        const SF = ((FF, WF, SF, CF) => {
          if ("Left" === SF || "Right" === SF) {
            const CF = FF[WF.row].length,
              AF = (WF.col + ("Right" === SF ? 1 : -1) + CF) % CF,
              uF = {
                row: WF.row,
                col: AF
              };
            return {
              pos: uF,
              preferredX: UC(FF, uF)
            }
          }
          const AF = (WF.row + ("Down" === SF ? 1 : -1) + FF.length) % FF.length;
          return {
            pos: {
              row: AF,
              col: BC(FF, AF, CF)
            },
            preferredX: CF
          }
        })(Ju(WF), WF.focus, FF, WF.preferredX);
        this.host.setState({
          ...WF,
          focus: SF.pos,
          preferredX: SF.preferredX
        })
      }
      readNavDirection(FF) {
        for (const WF of QF.y)
          if (FF.isHeld(WF)) return WF;
        return (0, QF.Z)((0, QF.j)(FF.leftStick, (0, eF.i)().moveDeadzone))
      }
    }
    const Ah = ["Up", "Down", "Left", "Right"],
      uh = new Set(["CapsLock", "Control", "Fn", "FnLock", "Hyper", "NumLock", "ScrollLock", "Shift", "Super"]);
    const hh = new class {
      constructor() {
        this.state = jh, this.listeners = new Set, this.ownedField = null, this.pendingChatInput = null, this.pendingChatTimeout = 0, this.savedInputMode = null, this.editor = new Fh(this), this.padInput = new Ch(this, this.editor)
      }
      getState() {
        return this.state
      }
      setState(FF) {
        const WF = FF.visible !== this.state.visible;
        this.state = FF;
        for (const SF of this.listeners) SF();
        WF && PF.j.Uu(wF.b, FF.visible)
      }
      subscribe(FF) {
        return this.listeners.add(FF), () => {
          this.listeners.delete(FF)
        }
      }
      install() {
        const FF = iW.c.register({
            name: "keyboard",
            isActive: () => this.state.visible || pF(document.activeElement),
            onFrame: FF => {
              this.onFrame(FF)
            },
            onDeactivate: () => {
              this.padInput.reset()
            },
            wakePressActs: FF => Ah.includes(FF) || !this.state.visible && FF === (0, RF.h)("keyboardType")
          }),
          WF = FF => {
            const WF = FF.target;
            pF(WF) && (WF === this.pendingChatInput || (0, EF.j)() ? this.open(WF) : this.state.visible && WF !== this.state.target && (this.ownedField = null, this.hide()))
          },
          SF = () => {
            setTimeout((() => {
              this.releaseLostField()
            }), 0)
          },
          CF = FF => {
            FF.isTrusted && this.state.visible && (FF => !FF.repeat && !uh.has(FF.key) && !(0, FA.d)(FF.key) && !/^(Audio|Media|Browser|Launch|Gamepad)/.test(FF.key))(FF) && this.hide()
          },
          AF = () => {
            this.state.visible && this.setState({
              ...this.state,
              ...pu(this.state.target)
            })
          };
        document.addEventListener("focusin", WF, !0), document.addEventListener("focusout", SF, !0), window.addEventListener("keydown", CF, !0), window.addEventListener("resize", AF);
        const uF = PF.j.subscribe(kA.e, (() => {
            this.openChat()
          })),
          hF = PF.j.subscribe(wF.d, (FF => {
            this.openForField(FF)
          }));
        return () => {
          FF(), document.removeEventListener("focusin", WF, !0), document.removeEventListener("focusout", SF, !0), window.removeEventListener("keydown", CF, !0), window.removeEventListener("resize", AF), PF.j.unsubscribe(uF), PF.j.unsubscribe(hF), this.clearPendingChat(), this.hide(), this.ownedField = null
        }
      }
      openChat() {
        const FF = (0, lC.e)();
        FF ? document.activeElement !== FF.input ? (this.clearPendingChat(), this.pendingChatInput = FF.input, this.pendingChatTimeout = window.setTimeout((() => {
          this.pendingChatInput = null
        }), 250), FF.open()) : this.open(FF.input) : console.warn("controllerOpenChat with no chat mounted")
      }
      openForField(FF) {
        pF(FF) ? (document.activeElement !== FF && FF.focus(), document.activeElement === FF && this.open(FF)) : console.warn("controllerOpenKeyboard needs an editable input or textarea", FF)
      }
      open(FF) {
        var WF;
        if (this.clearPendingChat(), this.ownedField = FF, this.state.visible && this.state.target === FF) return;
        this.restoreInputMode(), (FF => {
          lF(FF) && 0 === FF.selectionStart && 0 === FF.selectionEnd && FF.setSelectionRange(FF.value.length, FF.value.length)
        })(FF), this.savedInputMode = FF.getAttribute("inputmode"), FF.setAttribute("inputmode", "none");
        const SF = {
          ...jh,
          visible: !0,
          target: FF,
          kind: (0, lC.j)(FF) ? "chat" : null !== (WF = (0, lC.i)(FF).kind) && void 0 !== WF ? WF : null,
          accentsFirst: (CF = bA.h.get().getCurrentLanguageCode(), nC.has(CF)),
          ...pu(FF)
        };
        var CF;
        const AF = Ju(SF),
          uF = ((FF, WF) => {
            for (let SF = 0; SF < FF.length; SF++) {
              const CF = FF[SF].findIndex((FF => "char" === FF.type && FF.char === WF));
              if (-1 !== CF) return {
                row: SF,
                col: CF
              }
            }
            return null
          })(AF, "q");
        this.padInput.reset(), this.setState({
          ...SF,
          focus: uF,
          preferredX: UC(AF, uF)
        })
      }
      hide() {
        this.state.visible && (this.restoreInputMode(), this.padInput.reset(), this.setState(jh))
      }
      onFrame(FF) {
        if (this.releaseLostField()) return;
        const WF = document.activeElement;
        this.state.visible ? this.padInput.onVisibleFrame(FF) : pF(WF) && this.padInput.onHiddenFrame(FF, WF)
      }
      releaseLostField() {
        const FF = this.ownedField;
        return !(null === FF || FF.isConnected && document.activeElement === FF) && (this.ownedField = null, this.hide(), !0)
      }
      clearPendingChat() {
        window.clearTimeout(this.pendingChatTimeout), this.pendingChatInput = null
      }
      restoreInputMode() {
        const {
          target: FF
        } = this.state;
        FF && (null === this.savedInputMode ? FF.removeAttribute("inputmode") : FF.setAttribute("inputmode", this.savedInputMode), this.savedInputMode = null)
      }
    };
    var bb = SF(7709);
    const dh = new Map(MC.map((FF => {
        let {
          command: WF,
          action: SF
        } = FF;
        return [WF, SF]
      }))),
      Ph = {
        letters: "ABC",
        accents: "\xe0\xe9",
        symbols: "&123"
      },
      Rh = {
        chat: "controller:keyboardTargetChat",
        sign: "controller:keyboardTargetSign",
        nameTag: "controller:keyboardTargetNameTag",
        book: "controller:keyboardTargetBook",
        iK: "controller:keyboardTargetBookTitle"
      },
      ib = FF => {
        const WF = (() => {
          const [, FF] = (0, zW.useReducer)((FF => FF + 1), 0);
          return FF
        })();
        (0, zW.useEffect)((() => {
          if (!FF) return;
          const SF = ["input", "select", "selectionchange", "keyup", "pointerup"];
          for (const AF of SF) FF.addEventListener(AF, WF);
          document.addEventListener("selectionchange", WF);
          const CF = new MutationObserver(WF);
          return CF.observe(FF, {
            attributeFilter: ["placeholder"]
          }), () => {
            CF.disconnect();
            for (const CF of SF) FF.removeEventListener(CF, WF);
            document.removeEventListener("selectionchange", WF)
          }
        }), [FF, WF])
      },
      eh = FF => {
        FF.preventDefault()
      },
      Eh = FF => {
        "mouse" !== FF.pointerType && FF.preventDefault()
      },
      Qh = () => {
        var FF;
        const {
          t: WF
        } = (0, AF.B)(), SF = (() => {
          const [FF, WF] = (0, zW.useState)(hh.getState());
          return (0, zW.useEffect)((() => hh.subscribe((() => {
            WF(hh.getState())
          }))), []), FF
        })(), CF = (0, EF.y)(), uF = (0, zW.useRef)(null);
        (0, eF.r)(), (0, EF.C)(), (0, zW.useEffect)((() => {
          const FF = hh.install(),
            WF = null;
          return () => {
            FF(), null === WF || void 0 === WF || WF()
          }
        }), []);
        const hF = (0, zW.useMemo)((() => Uu.map((FF => WF(FF)))), [WF]),
          bW = SF.visible && "chat" === SF.kind ? SF.target : null;
        ib(bW);
        const dF = null !== (FF = null === bW || void 0 === bW ? void 0 : bW.value) && void 0 !== FF ? FF : "",
          PF = ((FF, WF, SF) => {
            if (!FF.startsWith("/")) return [];
            const CF = [];
            for (let AF = WF.length - 1; AF >= 0 && CF.length < SF; AF--) {
              const SF = WF[AF].trim();
              SF.startsWith(FF) && SF !== FF && !CF.includes(SF) && CF.push(SF)
            }
            return CF
          })(dF, dF.startsWith("/") ? (0, bb.h)() : [], Uu.length),
          iW = dF.startsWith("/"),
          QF = iW ? Uu.map(((FF, WF) => {
            var SF;
            return null !== (SF = PF[WF]) && void 0 !== SF ? SF : ""
          })) : hF;
        if ((0, zW.useEffect)((() => {
            hh.editor.setPhraseRow(QF, iW)
          })), (0, zW.useEffect)((() => {
            const FF = uF.current;
            if (FF) return FF.addEventListener("touchstart", eh, {
              passive: !1
            }), () => {
              FF.removeEventListener("touchstart", eh)
            }
          }), [SF.visible]), !SF.visible) return null;
        const rW = Ju(SF),
          gW = XC(rW),
          tW = FF => "char" === FF.type ? pC(FF.char, SF.page, SF.shift) : "phrase" === FF.type ? QF[FF.phraseIndex] : (FF => {
            switch (FF) {
              case "backspace":
                return "\u232b";
              case "shift":
                return "caps" === SF.shift ? "\u21ea" : "\u21e7";
              case "page":
              case "otherPage":
                return Ph[HC(SF.page, SF.accentsFirst)[FF]];
              case "space":
                return WF("controller:keyboardSpace");
              case "caretLeft":
                return "\u2190";
              case "caretRight":
                return "\u2192";
              case "newline":
                return "\u21b5";
              case "submit":
                return WF("chat" === SF.kind ? "controller:keyboardSend" : "controller:keyboardDone");
              case "close":
                return "\u2715";
              case "channel":
                return "\u21c4"
            }
          })(FF.command),
          TF = FF => {
            hh.editor.pressKey(FF)
          };
        return (0, yW.jsxs)("div", {
          ref: uF,
          className: fF()(lC.o, "top" === SF.placement ? "PadKeyboardTop" : "PadKeyboardBottom", {
            PadKeyboardMultiline: SF.target instanceof HTMLTextAreaElement
          }),
          style: {
            "--pad-keyboard-rows": rW.length,
            "--pad-keyboard-height": `${SF.maxHeightPx}px`
          },
          onPointerDown: Eh,
          onMouseDown: eh,
          children: [(0, yW.jsx)(rb, {
            target: SF.target,
            label: SF.kind ? WF(Rh[SF.kind]) : SF.target.placeholder || WF("controller:keyboardTargetText")
          }), (0, yW.jsx)("div", {
            className: "PadKeyboardRows",
            children: rW.map(((FF, WF) => (0, yW.jsx)("div", {
              className: fF()("PadKeyboardRow", {
                PadKeyboardPhraseRow: "phrase" === FF[0].type
              }),
              children: FF.map(((FF, AF) => {
                const uF = CF && SF.focus.row === WF && SF.focus.col === AF,
                  hF = "command" === FF.type ? dh.get(FF.command) : void 0;
                return (0, yW.jsx)("div", {
                  className: "PadKeyboardKeySlot",
                  style: {
                    width: FF.width / gW * 100 + "%"
                  },
                  children: (0, yW.jsxs)("div", {
                    className: fF()("PadKeyboardKey", {
                      PadKeyboardKeyFocused: uF,
                      PadKeyboardKeyCommand: "command" === FF.type,
                      PadKeyboardKeyPhrase: "phrase" === FF.type,
                      PadKeyboardKeyActive: "command" === FF.type && "shift" === FF.command && "off" !== SF.shift,
                      PadKeyboardKeySubmit: "command" === FF.type && "submit" === FF.command
                    }),
                    role: "button",
                    onClick: () => {
                      TF({
                        row: WF,
                        col: AF
                      })
                    },
                    onTouchEnd: FF => {
                      var SF, CF;
                      FF.preventDefault(), SF = FF.changedTouches[0], CF = FF.currentTarget.getBoundingClientRect(), SF && SF.clientX >= CF.left && SF.clientX <= CF.right && SF.clientY >= CF.top && SF.clientY <= CF.bottom && TF({
                        row: WF,
                        col: AF
                      })
                    },
                    children: [(0, yW.jsx)("span", {
                      className: "PadKeyboardKeyLabel",
                      children: tW(FF)
                    }), CF && hF && (0, yW.jsx)(eC, {
                      className: "PadKeyboardKeyGlyph",
                      glyph: (0, RF.h)(hF)
                    })]
                  })
                }, AF)
              }))
            }, WF)))
          })]
        })
      },
      rb = FF => {
        let {
          target: WF,
          label: SF
        } = FF;
        ib(WF);
        const CF = (0, zW.useRef)(null),
          AF = (0, zW.useRef)(null),
          uF = WF instanceof HTMLTextAreaElement;
        (0, zW.useLayoutEffect)((() => {
          const FF = CF.current,
            WF = AF.current;
          uF ? FF.scrollTop = WF.offsetTop - FF.clientHeight / 2 : FF.scrollLeft = WF.offsetLeft - FF.clientWidth / 2
        }));
        const {
          value: hF,
          start: bW,
          end: dF
        } = FW(WF), PF = "password" === WF.type ? "\u2022".repeat(hF.length) : hF;
        return (0, yW.jsxs)("div", {
          className: "PadKeyboardPreview",
          children: [(0, yW.jsx)("div", {
            className: "PadKeyboardPreviewLabel SmallTextBold",
            children: SF
          }), (0, yW.jsxs)("div", {
            ref: CF,
            className: fF()("PadKeyboardPreviewText", {
              PadKeyboardPreviewMultiline: uF
            }),
            children: [(0, yW.jsx)("span", {
              children: PF.slice(0, bW)
            }), (0, yW.jsx)("span", {
              ref: AF,
              className: "PadKeyboardCaret"
            }), bW !== dF && (0, yW.jsx)("span", {
              className: "PadKeyboardPreviewSelection",
              children: PF.slice(bW, dF)
            }), (0, yW.jsx)("span", {
              children: PF.slice(dF)
            }), 0 === PF.length && WF.placeholder && WF.placeholder !== SF && (0, yW.jsx)("span", {
              className: "PadKeyboardPreviewPlaceholder",
              children: WF.placeholder
            })]
          })]
        })
      };
    var gb = SF(1223),
      tb = SF(2614);
    const Th = function() {
        for (var FF = arguments.length, WF = new Array(FF), SF = 0; SF < FF; SF++) WF[SF] = arguments[SF];
        return WF.map(RF.h)
      },
      ab = (FF, WF) => {
        const SF = IA(FF);
        return SF ? [{
          glyphs: [SF],
          labelKey: WF
        }] : []
      },
      kb = [".BottomMiddleElements", ".BottomLeftElements > *", ".BottomRightElements > *", ".MiddleTextBottom .MiddleText"],
      qb = "--pad-hint-bar-clearance",
      Vh = "[data-pad-hint-bar-avoid]",
      Nh = FF => {
        const WF = [];
        for (const SF of FF) PW(SF) && WF.push(SF.getBoundingClientRect());
        return WF
      },
      Dh = FF => {
        if (!FF) return null;
        const WF = Cu(),
          SF = WF ? Nh(((FF, WF) => {
            const SF = FF.closest(Vh);
            return SF ? [SF] : ("popup" === WF ? document : FF).querySelectorAll(Vh)
          })(WF.root, WF.layer.kind)) : [],
          CF = !WF || WF.root.hasAttribute("data-pad-shows-hud");
        if (((0, tb.h)(null === WF || void 0 === WF ? void 0 : WF.layer.kind, (0, tb.l)()) || CF) && SF.push(...Nh(document.querySelectorAll(kb.join(",")))), 0 === SF.length) return null;
        const {
          width: AF,
          height: uF
        } = FF.getBoundingClientRect(), hF = window.innerHeight - 8, bW = (0, tb.q)(hF, {
          width: AF,
          height: uF
        }, window.innerWidth / 2, SF, 8);
        return bW === hF ? null : Math.round(window.innerHeight - bW)
      },
      Lh = FF => {
        const WF = document.documentElement.style,
          SF = FF ? `${Math.round(window.innerHeight-FF.getBoundingClientRect().top)}px` : "";
        WF.getPropertyValue(qb) !== SF && (SF ? WF.setProperty(qb, SF) : WF.removeProperty(qb))
      },
      mb = () => {
        const {
          t: FF
        } = (0, AF.B)(), {
          hideButtonHints: WF
        } = (0, eF.r)(), SF = (0, EF.y)(), [CF, uF] = (0, zW.useState)(!1), [hF, PF] = (0, zW.useState)([]), [rW, gW] = (0, zW.useState)(null), tW = (0, zW.useRef)(null), TF = (0, zW.useRef)(null);
        (0, hC.e)(wF.b, (FF => {
          uF(FF)
        })), (0, hC.e)(tb.o, (() => {
          var FF;
          null === (FF = TF.current) || void 0 === FF || FF.call(TF)
        }));
        const aW = SF && !WF && !CF;
        return (0, zW.useEffect)((() => {
          if (!aW) return;
          let FF = null;
          const WF = () => {
            const WF = (() => {
                var FF;
                const WF = iW.c.getActiveConsumerName(),
                  SF = (0, tb.e)();
                if (SF) {
                  const FF = (0, RF.h)(SF),
                    WF = "emoteWheel" === SF && "wheel" === (0, eF.i)().emoteButton || !(0, QF.F)(iW.c.getLastFrame().values, FF) ? {
                      glyphs: Th("menuConfirm"),
                      labelKey: "controller:menusSelect"
                    } : {
                      glyphs: [FF],
                      labelKey: "controller:wheelReleaseToPick"
                    };
                  return [{
                    glyphs: [(0, RF.u)(FF)],
                    labelKey: "controller:wheelChoose"
                  }, WF, {
                    glyphs: Th("menuBack"),
                    labelKey: "controller:wheelClose"
                  }]
                }
                const CF = Cu();
                if (!CF || "focus" !== WF && "cursor" !== WF) return (0, tb.c)(RF.h);
                const AF = [],
                  uF = {
                    glyphs: Th("menuBack"),
                    labelKey: "controller:menusBack"
                  },
                  hF = zS(CF.root),
                  bW = hF ? !RW(hF) : Boolean(CF.layer.close),
                  PF = !hF && CF.layer.closeLabelKey ? CF.layer.closeLabelKey : uF.labelKey,
                  EF = bW ? [{
                    ...uF,
                    labelKey: PF
                  }] : [],
                  rW = DA(CF.layer.kind) ? [{
                    glyphs: Th("chat"),
                    labelKey: "controller:menusQuickChat"
                  }] : [];
                if ("cursor" === WF) return AF.push({
                  glyphs: Th("menuConfirm"),
                  labelKey: "controller:menusClick"
                }), AF.push({
                  glyphs: Th("menuSecondary"),
                  labelKey: "controller:menusRightClick"
                }), AF.push(...EF), AF.push(...rW), AF.push({
                  glyphs: ["RightStick"],
                  labelKey: "controller:menusScroll"
                }), Tu() && AF.push({
                  glyphs: Th("menuToggleCursor"),
                  labelKey: "controller:menusFocusMode"
                }), AF;
                const gW = Xu.getFocused();
                gW && (0, Vu.b)(gW) ? AF.push({
                  glyphs: ["Left", "Right"],
                  labelKey: "controller:menusAdjust"
                }) : gW && cS(gW) ? AF.push({
                  glyphs: [],
                  labelKey: "controller:menusUseMouse"
                }) : AF.push({
                  glyphs: Th("menuConfirm"),
                  labelKey: "controller:menusSelect"
                });
                const tW = gW ? null === (FF = bu(gW)) || void 0 === FF ? void 0 : FF.dataset.padSecondary : void 0;
                tW && AF.push({
                  glyphs: Th("menuSecondary"),
                  labelKey: tW
                }), AF.push(...null !== gW && void 0 !== gW && gW.closest("[data-pad-friends-column]") ? [uF] : EF), AF.push(...rW);
                const TF = "home" === CF.layer.kind;
                sA(CF.root) || !xu(CF.root) && !nA(CF) ? TF && AF.push({
                  glyphs: Th("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusRows"
                }) : AF.push({
                  glyphs: Th("menuTabPrevious", "menuTabNext"),
                  labelKey: "controller:menusTabs"
                }), TF && (AF.push(...ab("inventory", "controller:menusFriends")), tW || AF.push({
                  glyphs: Th("menuSecondary"),
                  labelKey: "controller:menusSearch"
                }), AF.push(...ab("pause", "controller:menusSettings")), AF.push(...ab("leaderboard", "controller:menusNotifications")));
                const aW = dF.b.get("openEverythingMenuName");
                return "inGame" === dF.b.get("gameState") && "popup" !== CF.layer.kind && null !== aW && ((0, CA.k)(aW) ? AF.push(...ab("leaderboard", "controller:menusClose")) : aW !== SA.n.LOBBY_LEADERBOARD && AF.push(...ab("leaderboard", "controller:menusLobby"))), AF.push({
                  glyphs: Th("menuToggleCursor"),
                  labelKey: "controller:menusCursorMode"
                }), AF
              })(),
              SF = Dh(tW.current),
              CF = ((FF, WF) => `${FF.map((FF=>`${FF.glyphs.join("+")}:${FF.labelKey}`)).join("|")}@${WF}`)(WF, SF);
            CF !== FF && (FF = CF, (0, bW.unstable_batchedUpdates)((() => {
              PF(WF), gW(SF)
            }))), Lh(tW.current)
          };
          WF(), TF.current = WF;
          const SF = requestAnimationFrame(WF),
            CF = setInterval(WF, 150);
          return () => {
            TF.current = null, cancelAnimationFrame(SF), clearInterval(CF), Lh(null)
          }
        }), [aW]), (0, zW.useLayoutEffect)((() => {
          if (!aW) return;
          if (0 === hF.length) return void Lh(null);
          const FF = Dh(tW.current);
          FF === rW ? Lh(tW.current) : gW(FF)
        }), [aW, hF, rW]), aW && 0 !== hF.length ? (0, yW.jsx)("div", {
          ref: tW,
          className: "PadButtonHintBar SmallTextBold",
          style: null === rW ? void 0 : {
            bottom: rW
          },
          "aria-hidden": !0,
          children: hF.map((WF => (0, yW.jsxs)("div", {
            className: "PadButtonHint",
            children: [WF.glyphs.map((FF => (0, yW.jsx)(eC, {
              glyph: FF,
              className: "PadButtonHintGlyph"
            }, FF))), (0, yW.jsx)("span", {
              children: FF(WF.labelKey)
            })]
          }, WF.labelKey)))
        }) : null
      },
      Oh = [bS, "label", "[data-pad-slider]"].join(","),
      xb = "data-pad-cursor-probe",
      Zh = FF => {
        var WF;
        const SF = (FF => {
          const WF = [];
          for (let CF = FF; CF && CF !== document.body && CF !== document.documentElement && (WF.push(CF), !(WF.length > 8)); CF = CF.parentElement);
          const SF = document.documentElement.classList.contains(EF.r) ? WF[WF.length - 1] : void 0;
          null === SF || void 0 === SF || SF.setAttribute(xb, "");
          try {
            return WF.map((FF => ({
              element: FF,
              cursor: getComputedStyle(FF).cursor
            })))
          } finally {
            null === SF || void 0 === SF || SF.removeAttribute(xb)
          }
        })(FF);
        if ("pointer" !== (null === (WF = SF[0]) || void 0 === WF ? void 0 : WF.cursor)) return null;
        let CF = 0;
        for (; CF + 1 < SF.length && "pointer" === SF[CF + 1].cursor;) CF++;
        return SF[CF].element
      },
      oh = (FF, WF, SF, CF) => {
        const AF = CF.root.contains(FF) ? CF.root : null;
        for (let uF = FF; uF && uF !== document.body && uF !== document.documentElement; uF = uF.parentElement) {
          if (uF instanceof HTMLElement && mW(uF, WF) && YF(uF, WF, SF)) return uF;
          if (uF === AF) break
        }
        return "home" === CF.layer.kind || "gamePage" === CF.layer.kind ? ((FF, WF) => {
          const SF = document.scrollingElement;
          return SF instanceof HTMLElement && ![document.documentElement, document.body].some((WF => {
            const SF = getComputedStyle(WF),
              CF = "y" === FF ? SF.overflowY : SF.overflowX;
            return "hidden" === CF || "clip" === CF
          })) && YF(SF, FF, WF) ? SF : null
        })(WF, SF) : null
      };
    const Yh = new class {
        constructor() {
          this.state = {
            x: 0,
            y: 0,
            speedRamp: 0
          }, this.hasPosition = !1, this.active = !1, this.hidden = !1, this.hit = null, this.interactive = null, this.magnet = null, this.lastHitTestMs = -1 / 0, this.press = null, this.draggedSlider = null, this.repeatStop = null, this.repeatKey = null, this.repeated = !1, this.confirmRepeat = (0, rW.b)(QF.r), this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.layerRoot = null, this.layerOrder = 0, this.layerPoints = new WeakMap, this.page = null, this.pendingPageStart = null
        }
        install() {
          const FF = iW.c.register({
              name: "cursor",
              isActive: () => "cursor" === ah(),
              onFrame: FF => {
                this.onFrame(FF)
              },
              onDeactivate: () => {
                this.deactivate()
              },
              wakePressActs: FF => (0, iW.e)(FF) || FF === (0, RF.h)("menuConfirm") && GW((0, EF.c)())
            }),
            WF = (0, ju.l)((FF => {
              const WF = FF.getRoot();
              WF && this.layerPoints.delete(WF), WF === this.layerRoot && (this.layerRoot = null)
            })),
            SF = PF.j.subscribe("appManagerUpdated|activeInputDevice", (FF => {
              "gamepad" !== FF && this.active && !this.hidden && this.hide()
            }));
          return () => {
            FF(), WF(), PF.j.unsubscribe(SF), this.deactivate()
          }
        }
        getHighlighted() {
          return this.isVisible() ? this.interactive : null
        }
        isVisible() {
          return this.active && !this.hidden && (0, EF.j)()
        }
        getPoint() {
          return {
            x: this.state.x,
            y: this.state.y
          }
        }
        hide() {
          this.hidden = !0, this.cancelPress(), this.secondaryArmed = !1, this.clearHover(), this.Uu()
        }
        activate(FF) {
          this.active = !0, this.hidden = !1;
          const WF = rh();
          !WF || WF.root && WF.root !== FF.root ? this.jumpTo(this.hasPosition ? this.getPoint() : {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
          }) : (this.setLayer(FF), this.jumpTo(WF.point))
        }
        jumpTo(FF) {
          this.state = {
            x: FF.x,
            y: FF.y,
            speedRamp: 0
          }, this.hasPosition = !0, this.lastHitTestMs = -1 / 0
        }
        deactivate() {
          this.active && (this.active = !1, this.page = null, this.pendingPageStart = null, this.cancelPress(), this.clearHover(), this.draggedSlider = null, this.secondaryArmed = !1, this.scrollRemainder = {
            x: 0,
            y: 0
          }, this.Uu())
        }
        onFrame(FF) {
          const WF = Cu();
          if (!WF) return;
          if (this.active || this.activate(WF), this.followPage(WF)) return;
          this.followLayer(WF);
          const SF = FF.wokeDevice ? (0, EF.c)() : null;
          if (SF && this.jumpTo(SF), !(0, EF.j)()) return void this.hide();
          const CF = (0, RF.h)("menuToggleCursor");
          if (FF.wasPressed(CF)) return iW.c.consumeButton(CF), void Qu(this.getHandoff(null));
          if (this.handBackToFocus(FF)) return;
          const AF = (0, RF.h)("menuConfirm"),
            uF = (0, RF.h)("menuSecondary");
          if (FF.wasPressed((0, RF.h)("menuBack"))) return YW(WF.root) || IW(WF.root) || Au(), void this.Uu();
          if (wA(null, FF, WF)) return FF.wasReleased(AF) && this.press && (this.updateHit(!1), this.updateConfirm(FF, AF)), void this.Uu();
          if (document.pointerLockElement) return void this.hide();
          const hF = kh() ? {
              x: 0,
              y: 0
            } : (FF => {
              const WF = (FF, WF) => (FF ? 1 : 0) - (WF ? 1 : 0);
              return {
                x: WF(FF.isHeld("Right"), FF.isHeld("Left")),
                y: WF(FF.isHeld("Down"), FF.isHeld("Up"))
              }
            })(FF),
            bW = (0, eF.i)().moveDeadzone,
            dF = ((FF, WF) => {
              const SF = (0, QF.j)(FF, kW(WF));
              return Math.hypot(SF.x, SF.y)
            })(FF.leftStick, bW) > 0 || 0 !== hF.x || 0 !== hF.y;
          if (this.hidden) {
            const WF = FF.wasPressed(AF),
              SF = FF.wasPressed(uF);
            if (!dF && !NF(FF.rightStick) && !WF && !SF && !FF.wokeDevice) return void this.Uu();
            if (this.hidden = !1, this.updateHit(!1), WF || SF) return WF && (this.press = {
              kind: "ignored"
            }, FF.wokeDevice && this.beginRepeat()), this.secondaryArmed = !1, void this.Uu()
          }
          this.movePendingPageStart(dF);
          const PF = this.getPoint();
          this.state = VF(this.state, {
            stick: FF.leftStick,
            moveDeadzone: bW,
            dpad: hF,
            dtMs: FF.dtMs,
            cursorSpeedPercent: (0, eF.i)().cursorSpeed,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight
            },
            context: this.getAssistContext()
          });
          const rW = this.state.x !== PF.x || this.state.y !== PF.y,
            gW = [AF, uF].some((WF => FF.wasPressed(WF) || FF.wasReleased(WF)));
          (rW || gW || performance.now() - this.lastHitTestMs >= 100) && this.updateHit(rW), this.updateConfirm(FF, AF), this.updateSecondary(FF, uF), this.updateScroll(FF, WF), this.Uu()
        }
        followPage(FF) {
          const WF = "home" === FF.layer.kind || "gamePage" === FF.layer.kind,
            SF = this.page;
          if (this.page = WF ? {
              key: (0, ju.s)(FF.layer),
              root: FF.root
            } : null, !this.page || !SF || SF.root !== FF.root || SF.key === this.page.key) return !1;
          if (this.cancelPress(), this.secondaryArmed = !1, this.setLayer(FF), "hybrid" === Eu()) return Ru = null, du = null, ih.lock(), !0;
          const {
            key: CF
          } = this.page;
          return this.pendingPageStart = {
            root: FF.root,
            key: CF,
            returning: Xu.notePageEnteredByCursor(CF),
            enteredAtMs: performance.now()
          }, !1
        }
        movePendingPageStart(FF) {
          const WF = this.pendingPageStart;
          if (!WF) return;
          if (FF || WF.root !== this.layerRoot) return void(this.pendingPageStart = null);
          const SF = WF.returning ? Xu.recallStop(WF.root, WF.key) : null;
          if (!SF && WF.returning && performance.now() - WF.enteredAtMs < 1e3) return;
          const CF = null !== SF && void 0 !== SF ? SF : Xu.pickInitial(WF.root, {
            includeDisabled: !0,
            waitForContent: !0,
            enteredAtMs: WF.enteredAtMs
          });
          CF && (this.pendingPageStart = null, this.jumpTo(kS(CF)))
        }
        setLayer(FF) {
          this.layerRoot = FF.root, this.layerOrder = FF.order
        }
        followLayer(FF) {
          var WF;
          if (FF.root === this.layerRoot) return;
          null !== (WF = this.layerRoot) && void 0 !== WF && WF.isConnected && this.layerPoints.set(this.layerRoot, this.getPoint()), this.cancelPress(), this.draggedSlider = null, this.secondaryArmed = !1;
          const SF = this.layerPoints.get(FF.root),
            CF = SF && FF.order <= this.layerOrder ? SF : Xu.getLayerStartPoint(FF.root);
          this.setLayer(FF), this.jumpTo(CF)
        }
        getHandoff(FF) {
          var WF;
          return {
            point: this.getPoint(),
            element: null !== (WF = this.interactive) && void 0 !== WF ? WF : this.findDraggedSliderNearby(),
            direction: FF
          }
        }
        findDraggedSliderNearby() {
          const FF = this.draggedSlider;
          if (null === FF || void 0 === FF || !FF.isConnected) return null;
          const WF = FF.getBoundingClientRect(),
            {
              y: SF
            } = this.getPoint();
          return SF >= WF.top - 40 && SF <= WF.bottom + 40 ? FF : null
        }
        handBackToFocus(FF) {
          if (!kh()) return !1;
          const WF = QF.y.find((WF => FF.wasPressed(WF)));
          return !!WF && (SF = this.getHandoff(WF), Ru = hu(SF), du = null, ih.lock(), iW.c.handOffHeldInput(), !0);
          var SF
        }
        getAssistContext() {
          const FF = this.interactive;
          if (null === FF || void 0 === FF || !FF.isConnected) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const WF = FF.getBoundingClientRect();
          if (WF.width > .4 * window.innerWidth || WF.height > .4 * window.innerHeight) return {
            overInteractive: !1,
            magnetTarget: null
          };
          const SF = (0, eF.i)().cursorMagnetism && !(0, XF.e)(FF) && !FF.closest("[data-pad-slider]"),
            CF = this.magnet && this.magnet !== FF && this.magnet.isConnected ? this.magnet.getBoundingClientRect() : WF;
          return {
            overInteractive: !0,
            magnetTarget: SF ? {
              x: CF.left + CF.width / 2,
              y: CF.top + CF.height / 2
            } : null
          }
        }
        updateHit(FF) {
          this.lastHitTestMs = performance.now();
          const WF = this.getPoint(),
            SF = document.elementFromPoint(WF.x, WF.y),
            CF = SF && !(0, tW.q)(SF) && (FF => {
              var WF;
              const SF = Cu();
              return !(SF && !SF.root.contains(FF) && !FF.closest(".tooltip-container")) || !(null !== (WF = document.getElementById("root")) && void 0 !== WF && WF.contains(FF))
            })(SF) ? SF : null;
          if (CF !== this.hit) return mS(this.hit, CF, WF), this.hit = CF, void this.setInteractive(CF ? (FF => {
            const WF = FF.closest(Oh);
            if (WF) {
              var SF, CF;
              const FF = null !== (SF = null === (CF = WF.parentElement) || void 0 === CF ? void 0 : CF.closest("[data-pad-focusable]")) && void 0 !== SF ? SF : WF;
              return RW(FF) ? {
                element: null,
                magnet: null
              } : {
                element: FF,
                magnet: WF
              }
            }
            const AF = Zh(FF);
            return {
              element: AF,
              magnet: AF
            }
          })(CF) : {
            element: null,
            magnet: null
          });
          FF && CF && mS(CF, CF, WF)
        }
        setInteractive(FF) {
          let {
            element: WF,
            magnet: SF
          } = FF;
          this.interactive = WF, this.magnet = SF
        }
        clearHover() {
          this.hit && mS(this.hit, null, this.getPoint()), this.hit = null, this.setInteractive({
            element: null,
            magnet: null
          })
        }
        beginPress() {
          const FF = this.hit;
          if (!FF || cS(FF)) return {
            kind: "ignored"
          };
          const WF = (0, Vu.b)(FF),
            SF = FF.closest("[data-pad-slider]");
          return WF && SF ? {
            kind: "slider",
            slider: SF,
            adjuster: WF
          } : (NW(FF, this.getPoint()), {
            kind: "pointer",
            target: FF
          })
        }
        applySliderFraction(FF) {
          var WF;
          const SF = FF.slider.getBoundingClientRect(),
            CF = SF.height > SF.width,
            AF = null === (WF = FF.slider.querySelector("[data-pad-slider-handle]")) || void 0 === WF ? void 0 : WF.getBoundingClientRect(),
            uF = AF ? CF ? AF.height : AF.width : 0,
            hF = (CF ? SF.height : SF.width) - uF;
          if (hF <= 0) return;
          const bW = CF ? SF.bottom - uF / 2 - this.state.y : this.state.x - SF.left - uF / 2;
          FF.adjuster.setFraction(Math.max(0, Math.min(1, bW / hF)))
        }
        updateConfirm(FF, WF) {
          FF.wasPressed(WF) && (this.press = FF.wokeDevice ? {
            kind: "ignored"
          } : this.beginPress(), this.draggedSlider = "slider" === this.press.kind ? this.press.slider : null, this.beginRepeat());
          const SF = this.press;
          if (!SF) return;
          if (FF.isHeld(WF)) return "slider" === SF.kind && this.applySliderFraction(SF), void this.updateRepeat();
          this.press = null;
          const CF = this.repeated;
          if (this.endRepeat(), !FF.wasReleased(WF)) return void this.endPressWithoutClick(SF);
          const AF = this.getPoint(),
            uF = this.hit;
          if ("slider" === SF.kind && SF.adjuster.endDrag(), "pointer" === SF.kind) {
            const FF = null !== uF && void 0 !== uF ? uF : SF.target.isConnected ? SF.target : null;
            FF && DW(FF, AF);
            const WF = uF && SF.target.isConnected && !CF ? ((FF, WF) => {
              for (let SF = FF; SF; SF = SF.parentElement)
                if (SF.contains(WF)) return SF;
              return null
            })(SF.target, uF) : null;
            WF && (Xu.noteCursorActivation(WF), (0, tW.h)(WF, new MouseEvent("click", qS(AF, 0, 0))), MW(WF), aS(WF) && OW(WF))
          }
        }
        beginRepeat() {
          var FF, WF, SF;
          const CF = null !== (FF = null === (WF = this.hit) || void 0 === WF ? void 0 : WF.closest("[data-pad-repeat]")) && void 0 !== FF ? FF : null;
          this.repeatStop = CF, this.repeatKey = null !== (SF = null === CF || void 0 === CF ? void 0 : CF.getAttribute("data-pad-repeat")) && void 0 !== SF ? SF : null, this.repeated = !1, this.confirmRepeat.reset(), this.confirmRepeat.update(!0, performance.now())
        }
        updateRepeat() {
          const FF = this.repeatStop;
          if (!FF) return;
          const WF = this.hit;
          FF.isConnected && !RW(FF) && FF.getAttribute("data-pad-repeat") === this.repeatKey && WF && FF.contains(WF) ? FF.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (this.repeated = !0, Xu.noteCursorActivation(FF), (0, tW.h)(FF, new MouseEvent("click", qS(this.getPoint(), 0, 0)))) : this.repeatStop = null
        }
        endRepeat() {
          this.repeatStop = null, this.repeated = !1
        }
        endPressWithoutClick(FF) {
          "slider" === FF.kind && FF.adjuster.endDrag(), "pointer" === FF.kind && FF.target.isConnected && DW(FF.target, this.getPoint())
        }
        cancelPress() {
          this.endRepeat(), this.press && (this.endPressWithoutClick(this.press), this.press = null)
        }
        updateSecondary(FF, WF) {
          FF.wasPressed(WF) && (this.secondaryArmed = null !== this.hit), this.secondaryArmed && !FF.isHeld(WF) && (this.secondaryArmed = !1, FF.wasReleased(WF) && this.hit && LW(this.hit, this.getPoint(), 2))
        }
        updateScroll(FF, WF) {
          const SF = DF(FF.rightStick, FF.dtMs);
          if (0 === SF.x && 0 === SF.y) return void(this.scrollRemainder = {
            x: 0,
            y: 0
          });
          this.scrollRemainder = {
            x: this.scrollRemainder.x + SF.x,
            y: this.scrollRemainder.y + SF.y
          };
          const CF = Math.trunc(this.scrollRemainder.x),
            AF = Math.trunc(this.scrollRemainder.y);
          this.scrollRemainder = {
            x: this.scrollRemainder.x - CF,
            y: this.scrollRemainder.y - AF
          };
          const uF = this.hit;
          if (!uF) return;
          let hF = !1;
          if (0 !== AF) {
            const FF = oh(uF, "y", AF > 0 ? 1 : -1, WF);
            FF && (FF.scrollBy({
              top: AF,
              behavior: "instant"
            }), hF = !0)
          }
          if (0 !== CF) {
            const FF = oh(uF, "x", CF > 0 ? 1 : -1, WF);
            FF && (FF.scrollBy({
              left: CF,
              behavior: "instant"
            }), hF = !0)
          }
          hF && (this.lastHitTestMs = -1 / 0)
        }
        Uu() {
          sW.set({
            x: this.state.x,
            y: this.state.y,
            visible: this.isVisible(),
            pressed: null !== this.press && "ignored" !== this.press.kind
          })
        }
      },
      Mh = () => {
        const FF = (0, zW.useMemo)((() => new HF), []),
          WF = (0, EF.y)();
        return (0, zW.useEffect)((() => {
          if (!WF) return;
          let SF = 0,
            CF = {
              of: null,
              atMs: 0,
              list: []
            };
          const AF = document.getElementsByClassName(qh),
            uF = FF => {
              for (const WF of [...AF]) WF !== FF && WF.classList.remove(qh)
            },
            hF = () => {
              var WF;
              SF = requestAnimationFrame(hF);
              const AF = (() => {
                const FF = Xu.getFocused();
                if (Xu.isActive() && null !== FF && void 0 !== FF && FF.isConnected) return FF;
                const WF = Yh.getHighlighted();
                return null !== WF && void 0 !== WF && WF.isConnected ? WF : null
              })();
              uF(AF), AF && !AF.classList.contains(qh) && AF.classList.add(qh);
              const bW = null !== (WF = null === AF || void 0 === AF ? void 0 : AF.closest("[data-pad-reticle-box]")) && void 0 !== WF ? WF : AF;
              FF.show(bW ? ((FF, WF) => {
                let SF = FF.left,
                  CF = FF.top,
                  AF = FF.right,
                  uF = FF.bottom;
                for (const hF of WF) {
                  if (!hF) continue;
                  const FF = cW(hF);
                  SF = Math.max(SF, FF.left), CF = Math.max(CF, FF.top), AF = Math.min(AF, FF.right), uF = Math.min(uF, FF.bottom)
                }
                return AF <= SF || uF <= CF ? null : {
                  left: SF,
                  top: CF,
                  width: AF - SF,
                  height: uF - CF
                }
              })(bW.getBoundingClientRect(), (FF => {
                const WF = performance.now();
                return (CF.of !== FF || WF - CF.atMs > 500) && (CF = {
                  of: FF,
                  atMs: WF,
                  list: [OF(FF, "y"), OF(FF, "x")]
                }), CF.list
              })(bW)) : null)
            };
          return SF = requestAnimationFrame(hF), () => {
            cancelAnimationFrame(SF), uF(null), FF.hide()
          }
        }), [WF, FF]), (0, yW.jsx)(KF, {
          placer: FF,
          className: "PadFocusRing"
        })
      },
      cb = (FF, WF) => {
        FF.style.transform = `translate3d(${WF.x}px, ${WF.y}px, 0)`, FF.classList.toggle("Visible", WF.visible), FF.classList.toggle("Pressed", WF.pressed)
      },
      Gh = () => {
        const FF = (0, zW.useRef)(null);
        return (0, zW.useEffect)((() => {
          const WF = sW.subscribe((WF => {
            FF.current && cb(FF.current, WF)
          }));
          return FF.current && cb(FF.current, sW.get()), WF
        }), []), (0, yW.jsx)("div", {
          ref: FF,
          className: "PadCursorView",
          "aria-hidden": "true",
          children: (0, yW.jsx)("div", {
            className: "PadCursorGlyph",
            children: "+"
          })
        })
      },
      zb = "#ncmp__modal.ncmp__active",
      Ih = [{
        id: "nitro-consent-banner",
        find: () => document.querySelector(zb) ? null : document.querySelector("#ncmp__tool > .ncmp__banner.ncmp__active"),
        startSelectors: ["[data-ncmp-cmd='reject']", "[data-ncmp-cmd='showModal']"]
      }, {
        id: "nitro-consent-modal",
        find: () => document.querySelector(zb),
        startSelectors: ["[data-ncmp-cmd='reject']"]
      }, {
        id: "google-consent",
        find: () => document.querySelector(".fc-consent-root"),
        startSelectors: [".fc-cta-do-not-consent", ".fc-cta-manage-options"]
      }],
      fh = "PadOverThirdParty",
      yb = new Set(Ih.map((FF => FF.id))),
      sh = () => {
        const FF = Ih.map((FF => {
            let {
              id: WF,
              find: SF,
              startSelectors: CF
            } = FF;
            return (0, ju.o)({
              id: WF,
              kind: "popup",
              getRoot: () => {
                const FF = SF(),
                  WF = FF ? ((FF, WF) => {
                    var SF;
                    for (const CF of WF) {
                      const WF = FF.querySelector(CF);
                      if (WF) return WF
                    }
                    return null !== (SF = [...FF.querySelectorAll("button")].find((FF => !FF.matches(".fc-cta-consent, [data-ncmp-cmd='save']")))) && void 0 !== SF ? SF : null
                  })(FF, CF) : null;
                if (FF && WF && !WF.hasAttribute("data-pad-default-focus")) {
                  for (const WF of FF.querySelectorAll("[data-pad-default-focus]")) WF.removeAttribute("data-pad-default-focus");
                  for (const WF of FF.querySelectorAll("[data-pad-hint-bar-avoid]")) WF.removeAttribute("data-pad-hint-bar-avoid");
                  WF.setAttribute("data-pad-default-focus", ""), ((FF, WF) => {
                    let SF = FF;
                    for (let CF = FF.parentElement; CF && WF.contains(CF) && !(CF.getBoundingClientRect().height >= window.innerHeight / 2); CF = CF.parentElement) SF = CF;
                    return SF
                  })(WF, FF).setAttribute("data-pad-hint-bar-avoid", "")
                }
                return FF
              },
              close: null,
              memoryKey: null
            })
          })),
          WF = document.documentElement,
          SF = hF.f.onFrame((() => {
            const FF = (0, EF.j)() ? Cu() : null,
              SF = !!FF && (CF = FF.layer, yb.has(CF.id));
            var CF;
            WF.classList.contains(fh) !== SF && WF.classList.toggle(fh, SF)
          }));
        return () => {
          for (const WF of FF) WF();
          SF(), WF.classList.remove(fh)
        }
      },
      nh = "PadLargePointer",
      Hh = () => {
        (0, zW.useEffect)((() => {
          const FF = (0, tW.m)(document.body),
            WF = Xu.install(),
            SF = Yh.install(),
            CF = sh();
          return () => {
            FF(), WF(), SF(), CF()
          }
        }), []);
        const {
          largePointer: FF
        } = (0, eF.r)(), WF = (0, gb.r)() && FF;
        return (0, zW.useEffect)((() => {
          if (WF) return document.documentElement.classList.add(nh), () => {
            document.documentElement.classList.remove(nh)
          }
        }), [WF]), (0, bW.createPortal)((0, yW.jsxs)(yW.Fragment, {
          children: [(0, yW.jsx)(mb, {}), (0, yW.jsx)(Mh, {}), (0, yW.jsx)(Gh, {})]
        }), document.body)
      };
    var Kh = SF(7722),
      wh = SF(7737),
      Xh = SF(7730);
    SF(7740);
    const Uh = (FF, WF) => {
        const [SF, CF] = (0, zW.useState)(!1), [AF, uF] = (0, zW.useState)(null), hF = (0, zW.useRef)(null), bW = (0, zW.useCallback)((FF => {
          hF.current = FF, uF(FF)
        }), []), dF = (0, zW.useCallback)((() => {
          CF(!1), bW(null)
        }), [bW]), RF = (0, zW.useCallback)((() => {
          CF(!0)
        }), []), iW = (0, zW.useCallback)(((FF, WF) => {
          bW((0, Xh.E)(FF, WF, hF.current))
        }), [bW]);
        (0, zW.useLayoutEffect)((() => (WF(SF), (0, tb.u)(FF, SF), PF.j.Uu(tb.o), () => {
          WF(!1), (0, tb.u)(FF, !1), PF.j.Uu(tb.o)
        })), [SF, FF, WF]), (0, hC.e)("appManagerUpdated|activeInputDevice", (FF => {
          "gamepad" !== FF && dF()
        })), (0, hC.e)("appManagerUpdated|gameState", (FF => {
          "inGame" !== FF && dF()
        }));
        const eF = () => {
          (0, CA.l)() && dF()
        };
        return (0, hC.e)("appManagerUpdated|openEverythingMenuName", eF), (0, hC.e)("appManagerUpdated|openInGameMenuName", eF), {
          open: SF,
          picked: AF,
          pickedRef: hF,
          show: RF,
          aim: iW,
          close: dF
        }
      },
      Bh = FF => {
        let {
          className: WF,
          slotCount: SF,
          picked: CF,
          slotLabel: AF,
          renderSlot: uF,
          centre: hF
        } = FF;
        const bW = Array.from({
          length: SF
        }, ((FF, WF) => WF));
        return (0, yW.jsx)("div", {
          className: fF()("EmoteWheelOverlay PadRadialWheel", WF),
          children: (0, yW.jsxs)("div", {
            className: "EmoteWheel",
            style: {
              width: 2 * Xh.t + "rem",
              height: 2 * Xh.t + "rem"
            },
            children: [(0, yW.jsxs)("svg", {
              className: "EmoteWheelSvg",
              viewBox: `0 0 ${Xh.l} ${Xh.l}`,
              children: [bW.map((FF => (0, yW.jsx)("path", {
                d: (0, Xh.u)(FF, SF, Xh.f, Xh.h, Xh.j),
                className: fF()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: FF === CF
                }),
                "aria-label": AF(FF)
              }, FF))), (0, yW.jsx)("circle", {
                className: "EmoteWheelOuterRing",
                cx: Xh.f,
                cy: Xh.f,
                r: Xh.j
              }), (0, yW.jsx)("circle", {
                className: "EmoteWheelInnerRing",
                cx: Xh.f,
                cy: Xh.f,
                r: Xh.h
              }), null !== CF && (0, yW.jsx)("path", {
                className: "EmoteWheelWedgeOutline",
                d: (0, Xh.u)(CF, SF, Xh.f, Xh.h, Xh.j)
              })]
            }), bW.map((FF => {
              const WF = (0, Xh.z)(FF, SF);
              return (0, yW.jsx)("div", {
                className: fF()("PadRadialWheelSlot SmallTextBold", {
                  PadRadialWheelSlotPicked: FF === CF
                }),
                style: {
                  left: `calc(50% + ${Xh.b*Math.cos(WF)}rem)`,
                  top: `calc(50% + ${Xh.b*Math.sin(WF)}rem)`
                },
                "aria-hidden": !0,
                children: uF(FF)
              }, FF)
            })), (0, yW.jsx)("div", {
              className: "EmoteWheelHint SmallTextBold",
              children: hF
            })]
          })
        })
      },
      jb = Uu.length,
      vb = () => {
        const {
          t: FF
        } = (0, AF.B)(), WF = Uh("chat", NA.n), SF = (0, zW.useMemo)((() => Uu.map((WF => FF(WF)))), [FF]);
        return (0, hC.e)(NA.m, (() => {
          WF.open || (0, Kh.e)() || (0, wh.n)() || "inGame" !== dF.b.get("gameState") || (0, CA.l)() || !(0, lC.e)() || WF.show()
        })), (0, hC.e)(NA.e, (FF => {
          WF.open && WF.aim(FF, jb)
        })), (0, hC.e)(NA.j, (() => {
          var FF;
          if (!WF.open) return;
          const CF = WF.pickedRef.current;
          null !== CF ? Bu.claim(performance.now()) && (WF.close(), null === (FF = (0, lC.e)()) || void 0 === FF || FF.sendLine(SF[CF])) : WF.close()
        })), (0, hC.e)(NA.g, WF.close), WF.open ? (0, yW.jsx)(Bh, {
          className: "QuickChatWheel",
          slotCount: jb,
          picked: WF.picked,
          slotLabel: FF => SF[FF],
          renderSlot: FF => SF[FF],
          centre: null !== WF.picked ? SF[WF.picked] : FF("controller:quickChatPick")
        }) : null
      },
      Jh = () => {
        const {
          t: FF
        } = (0, AF.B)(), WF = Uh("actionButton", wh.q), [SF, CF] = (0, zW.useState)([]);
        if ((0, hC.e)(wh.k, (FF => {
            WF.open || (0, Kh.e)() || (0, NA.d)() || "inGame" !== dF.b.get("gameState") || (0, CA.l)() || (CF(FF), WF.show())
          })), (0, hC.e)(wh.c, (FF => {
            WF.open && WF.aim(FF, SF.length)
          })), (0, hC.e)(wh.h, (() => {
            if (!WF.open) return;
            const FF = WF.pickedRef.current;
            WF.close(), null !== FF && PF.j.Uu(wh.m, SF[FF])
          })), (0, hC.e)(wh.e, WF.close), !WF.open) return null;
        const uF = null !== WF.picked ? SF[WF.picked] : null;
        return (0, yW.jsx)(Bh, {
          className: "ActionWheel",
          slotCount: SF.length,
          picked: WF.picked,
          slotLabel: WF => {
            const CF = SF[WF];
            return "reload" === CF.kind ? FF("controller:gameplayReload") : "customButton" === CF.kind ? CF.description || CF.icon : "touchButton" === CF.kind && "string" === typeof CF.label ? CF.label : ""
          },
          renderSlot: FF => (0, yW.jsx)(QC, {
            action: SF[FF]
          }),
          centre: uF ? (0, yW.jsx)(QC, {
            action: uF
          }) : FF("controller:actionWheelPick")
        })
      };
    var ph = SF(89);
    const lh = () => ((0, zW.useEffect)((() => {
        var FF, WF;
        const SF = (0, tW.m)(document.getElementById("root")),
          CF = (0, EF.g)(),
          AF = (() => {
            const FF = [PF.j.subscribe(XS.e, (() => {
                vC("blockBreak")
              })), PF.j.subscribe("damagedByOtherPlayer", (() => {
                vC("damage")
              })), PF.j.subscribe("yourAttackHit", (FF => {
                let {
                  hitSelf: WF
                } = FF;
                WF || vC("hit")
              }))],
              WF = hF.f.onActivePadChanged((FF => {
                FF && vC("connect")
              }));
            return () => {
              for (const WF of FF) PF.j.unsubscribe(WF);
              WF()
            }
          })(),
          uF = (() => {
            const FF = new SC({
              getVisitId: WC.b,
              peekVisitId: WC.peekVisitSessionId,
              readReportedVisitId: () => {
                const FF = FC.k.getItem(CC);
                return "string" === typeof FF ? FF : null
              },
              writeReportedVisitId: FF => {
                FC.k.setItem(CC, FF)
              },
              isPadActive: EF.j,
              getPadFamily: () => {
                var FF, WF;
                return null !== (FF = null === (WF = hF.f.getActivePad()) || void 0 === WF ? void 0 : WF.family) && void 0 !== FF ? FF : null
              },
              canReport: pS.h,
              getInputType: lS.c,
              SC: pS.l
            });
            let WF = 0,
              SF = null;
            const CF = AF => {
                null === SF && ("notReady" !== FF.check(AF) || null !== SF || WF >= 20 || (WF++, SF = setTimeout((() => {
                  SF = null, CF(!1)
                }), 3e3)))
              },
              AF = PF.j.subscribe("appManagerUpdated|activeInputDevice", (() => {
                CF(!0)
              })),
              uF = (0, WC.g)((() => {
                WF = 0, CF(!0)
              }));
            return () => {
              PF.j.unsubscribe(AF), uF(), null !== SF && clearTimeout(SF)
            }
          })(),
          bW = hF.f.onFrame(((FF, WF) => {
            const SF = (0, EF.o)(FF);
            iW.c.dispatch(FF, WF, SF)
          }));
        let RF = null !== (FF = null === (WF = hF.f.getActivePad()) || void 0 === WF ? void 0 : WF.family) && void 0 !== FF ? FF : null;
        const QF = hF.f.onActivePadChanged((FF => {
            var WF, SF;
            (iW.c.reset(), (0, EF.s)(), PF.j.Uu(hF.d, FF), (null !== (WF = null === FF || void 0 === FF ? void 0 : FF.family) && void 0 !== WF ? WF : null) !== RF) && (RF = null !== (SF = null === FF || void 0 === FF ? void 0 : FF.family) && void 0 !== SF ? SF : null, PF.j.Uu(eF.e, (0, eF.i)()));
            !FF && (0, EF.j)() && (0, EF.u)(dF.b.get("isTouchScreen") ? "touch" : "keyboardMouse")
          })),
          rW = () => {
            "visible" !== document.visibilityState && iW.c.clear()
          },
          gW = () => {
            iW.c.clear()
          };
        document.addEventListener("visibilitychange", rW), window.addEventListener("blur", gW), hF.f.start(), (0, JS.n)();
        const TF = null;
        return () => {
          SF(), CF(), AF(), uF(), bW(), QF(), document.removeEventListener("visibilitychange", rW), window.removeEventListener("blur", gW), hF.f.stop(), null === TF || void 0 === TF || TF()
        }
      }), []), (0, yW.jsxs)("div", {
        className: "ControllerRoot",
        children: [(0, yW.jsx)(qA, {}), (0, yW.jsx)(oC, {}), (0, yW.jsx)(YC, {}), (0, yW.jsx)(Qh, {}), (0, yW.jsx)(Hh, {}), (0, yW.jsx)(vb, {}), (0, yW.jsx)(Jh, {})]
      })),
      Fb = () => ph.featureFlags.useControllerSupport ? (0, yW.jsx)(lh, {}) : null;
    var Wb = SF(7146),
      Sb = SF(7752);
    const Cb = new Set(JS.j),
      Ab = FF => `${Sb.m}${(0,eF.l)()}/${FF}`,
      ub = FF => {
        if (!(0, Sb.i)(FF)) return null;
        const [WF, SF] = FF.slice(Sb.m.length).split("/");
        return (0, Wb.h)(WF) && Cb.has(SF) ? (0, JS.g)(WF, SF) : null
      };
    var hb = SF(7754);
    const bd = () => {
        const {
          t: FF
        } = (0, AF.B)(), WF = (0, EF.y)(), {
          gameState: SF,
          isUiHidden: CF
        } = (0, dF.d)(["gameState", "isUiHidden"]), {
          hideButtonHints: uF,
          sneakMode: hF
        } = (0, eF.r)(), [bW, PF] = (0, zW.useState)(hb.d);
        return (0, hC.e)(kA.w, PF), WF && !CF && "inGame" === SF && bW ? (0, yW.jsxs)("div", {
          className: "PadSneakChip SmallTextBold",
          children: [!uF && (0, yW.jsx)(eC, {
            glyph: (0, RF.h)("toggle" === hF ? "sneak" : "sneakToggle")
          }), (0, yW.jsx)("span", {
            children: FF("controller:gameplaySneaking")
          })]
        }) : null
      },
      db = 12,
      Pb = FF => {
        let {
          trigger: WF,
          className: SF,
          children: CF
        } = FF;
        const AF = (0, zW.useRef)(null);
        return (0, zW.useEffect)((() => {
          let FF = 0;
          const SF = OF(WF, "y"),
            CF = () => {
              FF = requestAnimationFrame(CF);
              const uF = AF.current;
              if (!uF || null === WF || void 0 === WF || !WF.isConnected) return;
              const {
                left: hF,
                top: bW
              } = function(FF, WF, SF) {
                let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                const uF = FF.left + FF.width / 2,
                  hF = Math.max(db, SF.width - db - WF.width),
                  bW = Math.min(Math.max(uF - WF.width / 2, db), hF),
                  dF = SF.height - CF;
                let PF = 0,
                  RF = dF;
                if (AF) {
                  const FF = Math.max(0, AF.top),
                    CF = Math.min(dF, AF.bottom);
                  CF - FF >= Math.max(SF.height / 2, WF.height + 24) && (PF = FF, RF = CF)
                }
                const iW = FF.top + FF.height / 2 < (PF + RF) / 2 ? RF - db - WF.height : PF + db;
                return {
                  left: bW,
                  top: Math.max(db, iW)
                }
              }(WF.getBoundingClientRect(), {
                width: uF.offsetWidth,
                height: uF.offsetHeight
              }, {
                width: window.innerWidth,
                height: window.innerHeight
              }, parseFloat(document.documentElement.style.getPropertyValue(qb)) || 0, null !== SF && void 0 !== SF && SF.isConnected ? SF.getBoundingClientRect() : null);
              uF.style.transform = `translate3d(${Math.round(hF)}px, ${Math.round(bW)}px, 0)`, uF.style.visibility = "visible"
            };
          return CF(), () => {
            cancelAnimationFrame(FF)
          }
        }), [WF]), (0, yW.jsx)("div", {
          ref: AF,
          className: SF,
          style: {
            position: "fixed",
            left: 0,
            top: 0,
            visibility: "hidden"
          },
          children: CF
        })
      };
    var Rb = SF(929),
      eb = SF(7763),
      Eb = SF(1266),
      Qb = SF(7770),
      rd = SF(7778);
    const gd = {
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
        AC: {
          icon: "arrow-left",
          labelKey: "settingsMenu:exitGame"
        }
      },
      td = () => {
        const {
          t: FF
        } = (0, AF.B)(), WF = (0, EF.y)(), SF = (0, eb.c)(), CF = (0, OC.k)("_tasks"), uF = (0, OC.k)("_availableLeaderboards");
        if (!WF) return null;
        const hF = (FF => {
          let {
            hasShop: WF,
            hasTasksOrLeaderboards: SF,
            canInvite: CF
          } = FF;
          const AF = [];
          return WF && AF.push("shop"), SF && AF.push("tasks"), CF && AF.push("invite"), AF.push("AC"), AF
        })({
          hasShop: SF,
          hasTasksOrLeaderboards: !(!CF && !uF),
          canInvite: !!ph.featureFlags.canUseInviteLinks
        });
        return (0, yW.jsx)("div", {
          className: "PadLobbyShortcuts",
          children: hF.map((WF => {
            const {
              icon: SF,
              labelKey: CF
            } = gd[WF], AF = "AC" === WF ? Eb.E : Eb.e;
            return (0, yW.jsx)(AF, {
              className: "PadLobbyShortcut",
              onClick: () => {
                (FF => {
                  switch (FF) {
                    case "shop":
                      return PF.j.Uu(rd.k), void dF.b.set({
                        openEverythingMenuName: SA.n.SHOP
                      });
                    case "tasks":
                      return void PF.j.Uu("toggleMenu", "retentionFeatures");
                    case "invite":
                      return void PF.j.Uu("toggleMenu", "inviteLink");
                    case "AC":
                      (0, Qb.e)()
                  }
                })(WF)
              },
              children: (0, yW.jsxs)("div", {
                className: "PadLobbyShortcutInner",
                children: [(0, yW.jsx)(Rb.e, {
                  name: SF
                }), (0, yW.jsx)("span", {
                  children: FF(CF)
                })]
              })
            }, WF)
          }))
        })
      };
    var Tb = SF(1621);
    const ad = QF.u,
      kd = ["forward", "backward", "left", "right", "sprint"],
      qd = FF => FF.ctrlKey || FF.altKey || "Alt" === FF.key || "ArrowUp" === FF.key || "ArrowDown" === FF.key || "Tab" === FF.code || "/" === FF.key || "Slash" === FF.code;
    class Vb {
      constructor() {
        this.armed = !1, this.swallowedKeys = new Set, this.previousHeld = new Array(QF.O).fill(!1), this.leftStickWasPressed = !1, this.rightStickWasPressed = !1, this.consumeNextFrame = !1, this.consumeAfterContinue = !1
      }
      setArmed(FF) {
        this.armed = FF
      }
      blocksGameplay() {
        return this.armed || this.consumeNextFrame
      }
      onKeyDown(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return !this.armed || WF ? !FF.repeat && this.swallowedKeys.delete(FF.code) ? {
          swallow: !1,
          continues: !1
        } : {
          swallow: this.swallowedKeys.has(FF.code),
          continues: !1
        } : "Escape" === FF.key || FF.repeat && !this.swallowedKeys.has(FF.code) ? {
          swallow: !1,
          continues: !1
        } : SF ? {
          swallow: !1,
          continues: !0
        } : (this.swallowedKeys.add(FF.code), {
          swallow: !0,
          continues: (0, EF.h)(FF)
        })
      }
      onKeyUp(FF) {
        return this.swallowedKeys.delete(FF.code)
      }
      forgetKeys() {
        this.swallowedKeys.clear()
      }
      onPadFrame(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          CF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const AF = (0, QF.q)(FF.values, this.previousHeld),
          uF = null === SF ? -1 : (0, QF.k)(SF),
          hF = uF >= 0 && AF[uF] && !this.previousHeld[uF],
          bW = AF.some(((FF, WF) => FF && !this.previousHeld[WF] && WF !== uF)),
          dF = Math.hypot(FF.leftStick.x, FF.leftStick.y) >= ad,
          PF = Math.hypot(FF.rightStick.x, FF.rightStick.y) >= ad,
          RF = dF && !this.leftStickWasPressed || PF && !this.rightStickWasPressed;
        this.previousHeld = AF, this.leftStickWasPressed = dF, this.rightStickWasPressed = PF;
        let iW = !1;
        this.consumeNextFrame && (this.consumeNextFrame = !1, iW = !0);
        const eF = !WF && hF && !CF,
          EF = !eF && this.armed && !WF && (bW || RF);
        return (eF || EF) && (this.consumeNextFrame = !0, this.consumeAfterContinue = EF, iW = !0), {
          continues: EF,
          back: eF,
          consumeHeld: iW
        }
      }
      consumeLeavesMoveStick() {
        return this.consumeAfterContinue
      }
    }
    const Nb = new Set([...Tb.m, ...Tb.E]),
      Db = FF => ((FF, WF, SF) => {
        const CF = Object.keys(WF).filter((CF => !SF.has(CF) && WF[CF].includes(FF)));
        return CF.length > 0 && CF.every((FF => kd.includes(FF)))
      })(FF, Tb.z, Nb),
      Lb = (FF, WF, SF) => {
        const CF = new Vb,
          AF = FF => {
            if (!FF.isTrusted) return;
            const {
              swallow: SF,
              continues: AF
            } = CF.onKeyDown(FF, !(0, EF.D)(FF) || (0, wS.h)() || (0, CA.l)(), Db(FF.code));
            SF && (FF.stopImmediatePropagation(), qd(FF) && FF.preventDefault()), AF && ((0, EF.u)("keyboardMouse"), WF())
          },
          uF = FF => {
            FF.isTrusted && CF.onKeyUp(FF) && (FF.stopImmediatePropagation(), qd(FF) && FF.preventDefault())
          },
          bW = () => {
            CF.forgetKeys()
          };
        window.addEventListener("keydown", AF, !0), window.addEventListener("keyup", uF, !0), window.addEventListener("blur", bW);
        const dF = hF.f.onFrame((FF => {
            const AF = iW.c.getActiveConsumerName(),
              uF = SF(),
              hF = uF ? (0, RF.h)("menuBack") : null,
              bW = null !== AF && "gameplay" !== AF,
              {
                continues: dF,
                back: PF,
                consumeHeld: QF
              } = CF.onPadFrame(FF, bW, hF, (0, EF.n)(FF));
            if (QF) {
              const FF = (0, eF.i)().swapSticks ? "right" : "left";
              iW.c.consumeAllHeld(CF.consumeLeavesMoveStick() ? FF : null)
            }
            PF ? null === uF || void 0 === uF || uF() : dF && WF()
          })),
          PF = (0, wS.j)(`pressToContinue:${FF}`, (() => CF.blocksGameplay()));
        return {
          setArmed: FF => {
            CF.setArmed(FF)
          },
          dispose: () => {
            window.removeEventListener("keydown", AF, !0), window.removeEventListener("keyup", uF, !0), window.removeEventListener("blur", bW), dF(), PF()
          }
        }
      };
    var md = SF(3997),
      Ob = SF(2619),
      xd = SF(2332),
      Zb = SF(7148);
    const ob = FF => {
        let {
          text: WF
        } = FF;
        return (0, yW.jsx)("div", {
          className: "ControllerSettingsHeading",
          children: WF
        })
      },
      Yb = FF => {
        let {
          label: WF,
          hint: SF,
          options: CF,
          value: uF,
          onChange: hF
        } = FF;
        const {
          t: bW
        } = (0, AF.B)();
        return (0, yW.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, yW.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: [(0, yW.jsxs)("div", {
              className: "ControllerChoiceText",
              children: [(0, yW.jsx)("div", {
                className: "SliderText",
                children: WF
              }), SF && (0, yW.jsx)("div", {
                className: "ControllerSettingsHint",
                children: SF
              })]
            }), (0, yW.jsx)(xd.c, {
              options: CF.map((FF => ({
                label: "label" in FF ? FF.label : bW(FF.labelKey),
                value: FF.value
              }))),
              value: uF,
              onChange: FF => {
                hF(FF.value)
              }
            })]
          })
        })
      },
      Mb = FF => {
        let {
          settingKey: WF,
          label: SF,
          range: CF,
          format: AF
        } = FF;
        const uF = (0, eF.r)();
        return (0, yW.jsx)(md.j, {
          name: SF,
          min: CF.min,
          max: CF.max,
          step: CF.step,
          padStep: CF.step,
          initValue: uF[WF],
          format: AF,
          onChange: FF => {
            (0, eF.p)({
              [WF]: (0, Zb.u)(FF, CF)
            })
          }
        })
      };
    var cd = SF(7782),
      Gb = SF(7790);
    const zd = FF => FF instanceof DOMException && ("SecurityError" === FF.name || "NotAllowedError" === FF.name),
      Ib = FF => {
        const [WF] = [...FF.controllers].sort(((FF, WF) => Gb.t[FF] - Gb.t[WF]));
        return Gb.p[WF]
      },
      fb = FF => {
        (0, cd.b)().allowPhoneMotion().catch((WF => {
          FF && zd(WF) ? FF() : console.warn("Could not enable the motion sensor", WF)
        }))
      },
      yd = {
        waiting: "controller:settingsGyroPhoneWaiting",
        noSensor: "controller:settingsGyroPhoneNoSensor",
        on: "controller:settingsGyroPhoneOn",
        denied: "controller:settingsGyroPhoneDenied"
      },
      sb = FF => {
        let {
          status: WF
        } = FF;
        const {
          t: SF
        } = (0, AF.B)(), [CF, uF] = (0, zW.useState)(null), hF = `${WF.controllers.join(",")}|${WF.phoneMotion}`;
        (0, zW.useEffect)((() => {
          uF(null)
        }), [hF]);
        const bW = () => {
          (0, cd.b)().connectController().then((FF => {
            uF(FF > 0 ? "openFailed" : null)
          })).catch((FF => {
            zd(FF) ? uF("needsClick") : console.warn("Could not connect motion controller", FF)
          }))
        };
        if (WF.hidSupported) {
          let FF = SF("controller:settingsGyroConnectHint");
          return "needsClick" === CF ? FF = SF("controller:settingsGyroConnectNeedsClick") : "openFailed" === CF ? FF = SF("controller:settingsGyroOpenFailed") : WF.controllers.length > 0 && (FF = SF("controller:settingsGyroConnected", {
            name: Ib(WF)
          })), (0, yW.jsx)("div", {
            className: "SettingBox ControllerChoiceSetting",
            children: (0, yW.jsxs)("div", {
              className: "ControllerChoiceRow",
              children: [(0, yW.jsx)("div", {
                className: "ControllerSettingsHint",
                children: FF
              }), (0, yW.jsx)(Eb.e, {
                onClick: bW,
                children: SF("controller:settingsGyroConnect")
              })]
            })
          })
        }
        if ("needsPermission" === WF.phoneMotion) return (0, yW.jsx)("div", {
          className: "SettingBox ControllerChoiceSetting",
          children: (0, yW.jsxs)("div", {
            className: "ControllerChoiceRow",
            children: ["needsTap" === CF && (0, yW.jsx)("div", {
              className: "ControllerSettingsHint",
              children: SF("controller:settingsGyroAllowNeedsTap")
            }), (0, yW.jsx)(Eb.e, {
              onClick: () => {
                fb((() => {
                  uF("needsTap")
                }))
              },
              children: SF("controller:settingsGyroAllowMotion")
            })]
          })
        });
        const dF = yd[WF.phoneMotion];
        return dF ? (0, yW.jsx)("div", {
          className: "ControllerSettingsHint",
          children: SF(dF)
        }) : null
      },
      nb = () => {
        const {
          t: FF
        } = (0, AF.B)(), WF = (0, eF.r)(), SF = (0, cd.c)(), CF = (0, EF.C)(), uF = !SF.hidSupported && SF.phoneSupported && !SF.padConnected, hF = (SF.hidSupported || SF.phoneSupported) && !uF, bW = (0, RF.h)("pause");
        return (0, yW.jsxs)(yW.Fragment, {
          children: [(0, yW.jsx)(ob, {
            text: FF("controller:settingsGyro")
          }), uF && (0, yW.jsx)("div", {
            className: "ControllerSettingsHint",
            children: FF("controller:settingsGyroPhoneNeedsController")
          }), !hF && !uF && (0, yW.jsx)("div", {
            className: "ControllerSettingsHint",
            children: FF(SF.hidBlocked || SF.phoneBlocked ? "controller:settingsGyroBlocked" : "controller:settingsGyroUnsupported")
          }), hF && (0, yW.jsx)(md.b, {
            label: FF(SF.hidSupported ? "controller:settingsGyroToggle" : "controller:settingsGyroTogglePhone"),
            checked: WF.gyroAiming,
            onClick: FF => {
              var WF, SF;
              (0, eF.p)({
                gyroAiming: FF
              });
              const CF = null === (WF = null === (SF = navigator.userActivation) || void 0 === SF ? void 0 : SF.isActive) || void 0 === WF || WF;
              if (!FF || !CF) return;
              const AF = (0, cd.b)(),
                uF = AF.getStatus();
              uF.hidSupported ? AF.connectControllerIfNoneGranted().catch((FF => {
                console.warn("Motion controller picker unavailable", FF)
              })) : "needsPermission" === uF.phoneMotion && fb()
            },
            circleInfoText: FF(SF.hidSupported ? "controller:settingsGyroToggleInfo" : "controller:settingsGyroToggleInfoPhone")
          }), hF && SF.hidSupported && (0, yW.jsx)("div", {
            className: "ControllerSettingsHint",
            children: FF("controller:settingsGyroSteamHint")
          }), hF && WF.gyroAiming && (0, yW.jsxs)(yW.Fragment, {
            children: [(0, yW.jsx)(sb, {
              status: SF
            }), (0, yW.jsx)(Mb, {
              settingKey: "gyroSensitivity",
              label: FF("controller:settingsGyroSensitivity"),
              range: Zb.M,
              format: Zb.F
            }), (0, yW.jsx)(Yb, {
              label: FF("controller:settingsGyroActivation"),
              hint: "aiming" === WF.gyroActivation && (0, yW.jsx)(Ob.d, {
                text: FF("controller:settingsGyroAimingHint", {
                  button: Ob.f
                }),
                glyph: (0, RF.h)("use")
              }),
              options: Zb.K,
              value: WF.gyroActivation,
              onChange: FF => {
                (0, eF.p)({
                  gyroActivation: FF
                })
              }
            }), "button" === WF.gyroActivation && (0, yW.jsx)(Yb, {
              label: FF("controller:settingsGyroButton"),
              hint: FF("controller:settingsGyroButtonHint"),
              options: Zb.s.filter((FF => FF !== bW || FF === WF.gyroButton)).map((FF => ({
                label: iA(CF, FF),
                value: FF
              }))),
              value: WF.gyroButton,
              onChange: FF => {
                (0, eF.p)({
                  gyroButton: FF
                })
              }
            })]
          })]
        })
      };
    var Hb = SF(1720);
    const Kb = () => {
      const {
        t: FF
      } = (0, AF.B)(), WF = (0, eF.r)(), SF = (0, EF.C)();
      return (0, yW.jsxs)(yW.Fragment, {
        children: [(0, yW.jsx)(ob, {
          text: FF("controller:settingsAccessibility")
        }), (0, yW.jsx)(md.b, {
          label: FF("controller:settingsSwapConfirmBack"),
          checked: (0, RF.F)(WF.swapConfirmBack, SF),
          onClick: FF => {
            (0, eF.p)({
              swapConfirmBack: FF === (0, RF.F)(null, SF) ? null : FF
            }), Hb.d.showMessage({
              translationKey: "controller:settingsSwapToast"
            })
          },
          circleInfoText: FF("controller:settingsSwapConfirmBackInfo")
        }), (0, yW.jsx)(Yb, {
          label: FF("controller:settingsButtonRepeat"),
          hint: FF("controller:settingsButtonRepeatHint"),
          options: Zb.o,
          value: WF.buttonRepeat,
          onChange: FF => {
            (0, eF.p)({
              buttonRepeat: FF
            })
          }
        }), (0, yW.jsx)(Yb, {
          label: FF("controller:settingsTapHoldTime"),
          hint: FF("controller:settingsTapHoldTimeHint"),
          options: Zb.lb,
          value: WF.tapHoldTime,
          onChange: FF => {
            (0, eF.p)({
              tapHoldTime: FF
            })
          }
        }), (0, yW.jsx)(Yb, {
          label: FF("controller:settingsEmoteButton"),
          hint: FF("wheel" === WF.emoteButton ? "controller:settingsEmoteButtonWheelHint" : "controller:settingsEmoteButtonTapHoldHint"),
          options: Zb.B,
          value: WF.emoteButton,
          onChange: FF => {
            (0, eF.p)({
              emoteButton: FF
            })
          }
        }), (0, yW.jsx)(Yb, {
          label: FF("controller:settingsAttackMode"),
          hint: FF("toggle" === WF.attackMode ? "controller:settingsAttackToggleHint" : "controller:settingsAttackHoldHint"),
          options: Zb.l,
          value: WF.attackMode,
          onChange: FF => {
            (0, eF.p)({
              attackMode: FF
            })
          }
        }), (0, yW.jsx)(md.b, {
          label: FF("controller:settingsLargePointer"),
          checked: WF.largePointer,
          onClick: FF => {
            (0, eF.p)({
              largePointer: FF
            })
          },
          circleInfoText: FF("controller:settingsLargePointerInfo")
        })]
      })
    };
    var wb = SF(7799);
    const Xb = new class {
        constructor(FF) {
          this.router = FF, this.current = null
        }
        claim(FF, WF) {
          const SF = this.current;
          SF && (this.current = null, SF.release(), SF.onTakenOver());
          const CF = this.router.register({
              ...FF,
              name: "capture"
            }),
            AF = {
              release: CF,
              onTakenOver: WF
            };
          return this.current = AF, () => {
            this.current === AF && (this.current = null), CF()
          }
        }
      }(iW.c),
      Ub = FF => {
        (0, zW.useEffect)((() => {
          if (!FF) return;
          const WF = FF();
          let SF = !1;
          const CF = () => {
              SF || (SF = !0, WF.onEnd())
            },
            AF = Xb.claim({
              isActive: () => !SF,
              onFrame: FF => {
                WF.onFrame(FF, CF)
              }
            }, CF),
            uF = void 0 === WF.timeoutMs ? void 0 : window.setTimeout(CF, WF.timeoutMs),
            hF = FF => {
              "Escape" === FF.key && (FF.preventDefault(), FF.stopPropagation(), CF())
            };
          return window.addEventListener("keydown", hF, !0), () => {
            SF = !0, AF(), window.clearTimeout(uF), window.removeEventListener("keydown", hF, !0)
          }
        }), [FF])
      },
      Bb = FF => {
        let {
          row: WF,
          capturing: SF,
          onCapture: CF,
          holdFillRef: uF,
          onRebind: hF,
          swapped: bW
        } = FF;
        const {
          t: dF
        } = (0, AF.B)();
        if ("fixed" === WF.kind) return (0, yW.jsx)("div", {
          className: "ControlRow PadControlRow PadControlRowFixed",
          children: (0, yW.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, yW.jsx)("div", {
              className: "ControlName",
              children: dF(WF.labelKey)
            }), (0, yW.jsx)("div", {
              className: "ControlBindingsContainer",
              children: (0, yW.jsx)("div", {
                className: "ControlBindingsList",
                children: (0, yW.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  children: (0, yW.jsx)(eC, {
                    glyph: "move" === WF.stick ? (0, RF.n)() : (0, RF.l)()
                  })
                })
              })
            })]
          })
        });
        const {
          action: PF
        } = WF, iW = (0, RF.h)(PF), eF = (0, RF.j)(PF), EF = iW !== eF && (0, RF.b)(PF, eF);
        return (0, yW.jsxs)("div", {
          className: fF()("ControlRow PadControlRow", {
            Capturing: SF
          }),
          children: [(0, yW.jsxs)("div", {
            className: "ControlRowInner",
            children: [(0, yW.jsx)("div", {
              className: "ControlName",
              children: dF((0, Zb.I)(PF))
            }), (0, yW.jsxs)("div", {
              className: "ControlBindingsContainer",
              children: [!SF && (0, yW.jsxs)("div", {
                className: "ControlBindingsList",
                children: [(0, yW.jsx)("div", {
                  className: "ControlBinding PadBinding",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    CF(PF)
                  },
                  children: (0, yW.jsx)(eC, {
                    glyph: iW
                  })
                }), EF && (0, yW.jsx)("div", {
                  className: "ControlBinding PadBindingReset",
                  title: dF("controller:settingsReset"),
                  "data-pad-focusable": !0,
                  onClick: () => {
                    hF(PF, eF)
                  },
                  children: (0, yW.jsx)(Rb.e, {
                    name: "arrows-rotate"
                  })
                })]
              }), SF && (0, yW.jsxs)("div", {
                className: "ControlBindingAddInput",
                children: [(0, yW.jsxs)("div", {
                  className: "PadCaptureBox",
                  children: [(0, yW.jsx)("span", {
                    children: dF("controller:settingsCapturePrompt")
                  }), (0, yW.jsx)("div", {
                    ref: uF,
                    className: "PadCaptureHoldFill"
                  })]
                }), (0, yW.jsx)("div", {
                  className: "ControlBindingAddCancel",
                  "data-pad-focusable": !0,
                  onClick: () => {
                    CF(null)
                  },
                  children: "\xd7"
                })]
              }), SF && (0, yW.jsx)("div", {
                className: "PadCaptureHint",
                children: (0, yW.jsx)(Ob.d, {
                  text: dF((0, RF.b)(PF, (0, RF.h)("menuBack")) ? "controller:settingsCaptureCancelOrBindHint" : "controller:settingsCaptureCancelHint", {
                    button: Ob.f
                  }),
                  glyph: (0, RF.h)("menuBack")
                })
              })]
            })]
          }), bW.map((FF => (0, yW.jsx)("div", {
            className: "ControlRowWarning PadSwapNotice",
            children: (0, yW.jsx)(Ob.d, {
              text: dF("controller:settingsSwapNotice", {
                action: dF((0, Zb.I)(FF)),
                button: Ob.f
              }),
              glyph: (0, RF.h)(FF)
            })
          }, FF))), SF && (0, yW.jsx)("div", {
            className: "PadCaptureTimer",
            style: {
              animationDuration: `${Zb.t}ms`
            }
          })]
        })
      },
      jd = [],
      vd = FF => {
        let {
          layoutSetting: WF
        } = FF;
        const {
          t: SF
        } = (0, AF.B)(), CF = (0, eF.r)();
        (0, EF.C)();
        const uF = (0, zW.useRef)(null),
          [hF, bW] = (0, zW.useState)(null),
          dF = (0, zW.useCallback)(((FF, WF) => {
            const SF = (0, eF.i)().uC;
            (0, RF.z)(FF, WF);
            const CF = (0, RF.q)(SF, FF);
            bW(CF.length > 0 ? {
              action: FF,
              swapped: CF
            } : null)
          }), []),
          [PF, rW] = ((FF, WF) => {
            const [SF, CF] = (0, zW.useState)(null), AF = (0, zW.useMemo)((() => SF ? () => {
              const AF = (0, RF.h)("menuBack"),
                uF = new Zb.b(AF, (0, RF.h)("menuConfirm"), (FF => (0, RF.b)(SF, FF)));
              return {
                onFrame: (CF, hF) => {
                  var bW;
                  const dF = CF.frame.timestampMs,
                    PF = uF.update({
                      ...CF,
                      isDown: FF => (0, QF.F)(CF.frame.values, FF)
                    }, dF);
                  null === (bW = FF.current) || void 0 === bW || bW.style.setProperty("width", 100 * uF.getBindHoldProgress(dF) + "%"), PF && ("bind" === PF.kind ? (iW.c.consumeButton(PF.button), WF(SF, PF.button)) : iW.c.consumeButton(AF), hF())
                },
                onEnd: () => {
                  CF(null)
                },
                timeoutMs: Zb.t
              }
            } : null), [SF, FF, WF]);
            return Ub(AF), [SF, CF]
          })(uF, dF),
          gW = FF => {
            FF && bW(null), rW(FF)
          };
        (0, zW.useEffect)((() => {
          if (!hF) return;
          const FF = window.setTimeout((() => {
            bW(null)
          }), Zb.ib);
          return () => {
            window.clearTimeout(FF)
          }
        }), [hF]);
        const tW = !CF.swapSticks && 0 === Object.keys(CF.uC).length;
        return (0, yW.jsxs)("div", {
          className: "ControlsContainer PadControlsContainer",
          children: [(0, yW.jsx)("div", {
            className: "SliderText",
            children: SF("controller:settingsRemap")
          }), (0, yW.jsx)("div", {
            className: "ControllerSettingsHint",
            children: SF("controller:settingsRemapHint")
          }), (0, yW.jsx)(Eb.E, {
            className: "ResetBindingsButton PadResetAllButton",
            disabled: tW,
            onClick: () => {
              gW(null), bW(null), (0, RF.D)()
            },
            children: SF("controller:settingsResetAll")
          }), WF, Zb.db.map(((FF, WF) => (0, yW.jsx)(wb.c, {
            title: SF(FF.titleKey),
            defaultOpen: 0 === WF,
            children: FF.rows.map((FF => (0, yW.jsx)(Bb, {
              row: FF,
              capturing: "action" === FF.kind && FF.action === PF,
              onCapture: gW,
              holdFillRef: uF,
              onRebind: dF,
              swapped: "action" === FF.kind && (null === hF || void 0 === hF ? void 0 : hF.action) === FF.action ? hF.swapped : jd
            }, "action" === FF.kind ? FF.action : FF.labelKey)))
          }, FF.titleKey)))]
        })
      },
      Jb = FF => {
        let {
          deadzone: WF,
          dotRef: SF,
          labelKey: CF
        } = FF;
        const {
          t: uF
        } = (0, AF.B)();
        return (0, yW.jsxs)("div", {
          className: "ControllerTesterStick",
          children: [(0, yW.jsxs)("div", {
            className: "ControllerTesterStickCircle",
            children: [(0, yW.jsx)("div", {
              className: "ControllerTesterDeadzone",
              style: {
                width: 100 * WF + "%",
                height: 100 * WF + "%"
              }
            }), (0, yW.jsx)("div", {
              ref: SF,
              className: "ControllerTesterDot"
            })]
          }), (0, yW.jsx)("div", {
            className: "ControllerTesterStickLabel",
            children: uF(CF)
          })]
        })
      },
      pb = (FF, WF, SF, CF) => {
        var AF;
        FF && (FF.style.left = 50 + 50 * Math.max(-1, Math.min(1, WF.x)) + "%", FF.style.top = 50 + 50 * Math.max(-1, Math.min(1, WF.y)) + "%", null === (AF = FF.parentElement) || void 0 === AF || AF.classList.toggle("Active", CF || Math.hypot(WF.x, WF.y) > SF))
      },
      lb = FF => {
        const WF = {
            deadzone: FF.moveDeadzone,
            labelKey: "controller:settingsActionMove"
          },
          SF = {
            deadzone: FF.lookDeadzone,
            labelKey: "controller:settingsActionLook"
          };
        return FF.swapSticks ? {
          left: SF,
          right: WF
        } : {
          left: WF,
          right: SF
        }
      },
      Fd = () => {
        const {
          t: FF
        } = (0, AF.B)(), WF = (() => {
          const [FF, WF] = (0, zW.useState)((() => hF.f.getActivePad()));
          return (0, hC.e)(hF.d, (() => {
            WF(hF.f.getActivePad())
          })), FF
        })(), SF = lb((0, eF.r)()), CF = (0, zW.useRef)(null), uF = (0, zW.useRef)(null), bW = (0, zW.useRef)([]), dF = (0, zW.useRef)(null), PF = (0, zW.useRef)(null), [EF, rW] = (FF => {
          const [WF, SF] = (0, zW.useState)(!1), CF = (0, zW.useMemo)((() => WF ? () => {
            const WF = (0, RF.h)("menuBack"),
              CF = new Zb.e;
            return {
              onFrame: (SF, AF) => {
                var uF;
                const hF = CF.update({
                  pressed: SF.wasPressed(WF),
                  yS: SF.isHeld(WF)
                }, SF.frame.timestampMs);
                null === (uF = FF.current) || void 0 === uF || uF.style.setProperty("width", 100 * hF + "%"), hF >= 1 && (iW.c.consumeButton(WF), AF())
              },
              onEnd: () => {
                SF(!1)
              }
            }
          } : null), [WF, FF]);
          return Ub(CF), [WF, SF]
        })(uF);
        (0, zW.useEffect)((() => {
          const FF = FF => {
            for (const SF of QF.R) {
              const WF = (0, QF.k)(SF),
                CF = bW.current[WF];
              if (!CF) continue;
              const AF = FF.values[WF];
              CF.classList.toggle("Pressed", AF >= QF.u), (0, QF.G)(WF) && CF.style.setProperty("--trigger-fill", `${Math.round(100*AF)}%`)
            }
            const WF = lb((0, eF.i)());
            pb(dF.current, FF.leftStick, WF.left.deadzone, FF.values[(0, QF.k)("LS")] >= QF.u), pb(PF.current, FF.rightStick, WF.right.deadzone, FF.values[(0, QF.k)("RS")] >= QF.u)
          };
          return WF || FF((0, QF.t)()), hF.f.onFrame(FF)
        }), [WF]), (0, zW.useEffect)((() => {
          WF || rW(!1)
        }), [WF, rW]), (0, zW.useEffect)((() => {
          var FF;
          EF && (null === (FF = CF.current) || void 0 === FF || FF.scrollIntoView({
            block: "nearest"
          }))
        }), [EF]);
        const gW = Zb.ab.find((FF => FF.value === (null === WF || void 0 === WF ? void 0 : WF.family)));
        return (0, yW.jsxs)("div", {
          ref: CF,
          className: fF()("SettingBox ControllerTester", {
            Testing: EF
          }),
          children: [(0, yW.jsxs)("div", {
            className: "ControllerTesterHeader",
            children: [(0, yW.jsxs)("div", {
              className: "ControllerTesterInfo",
              children: [WF && (0, yW.jsx)("div", {
                children: FF("controller:settingsTesterFamily", {
                  family: gW ? FF(gW.labelKey) : WF.family
                })
              }), WF && (0, yW.jsx)("div", {
                className: "ControllerTesterPadId",
                children: WF.id
              }), !WF && (0, yW.jsx)("div", {
                children: FF("controller:settingsTesterNoPad")
              })]
            }), (WF || EF) && (0, yW.jsx)(Eb.e, {
              className: "ControllerTesterToggle",
              onClick: () => {
                rW(!EF)
              },
              children: FF(EF ? "controller:settingsTesterStop" : "controller:settingsTesterStart")
            })]
          }), WF && !EF && (0, yW.jsx)("div", {
            className: "ControllerSettingsHint",
            children: FF("controller:settingsTesterHint")
          }), EF && (0, yW.jsxs)("div", {
            className: "ControllerTesterBanner",
            children: [(0, yW.jsx)(Ob.d, {
              text: FF("controller:settingsTesterTesting", {
                button: Ob.f
              }),
              glyph: (0, RF.h)("menuBack")
            }), (0, yW.jsx)("div", {
              ref: uF,
              className: "ControllerTesterExitFill"
            })]
          }), (0, yW.jsxs)("div", {
            className: "ControllerTesterBody",
            children: [(0, yW.jsx)(Jb, {
              deadzone: SF.left.deadzone,
              dotRef: dF,
              labelKey: SF.left.labelKey
            }), (0, yW.jsx)("div", {
              className: "ControllerTesterButtons",
              children: QF.R.map((FF => {
                const SF = (0, QF.k)(FF);
                return (0, yW.jsx)("div", {
                  ref: FF => {
                    bW.current[SF] = FF
                  },
                  className: (0, QF.G)(SF) ? "ControllerTesterButton ControllerTesterTrigger" : "ControllerTesterButton",
                  children: (0, yW.jsx)(eC, {
                    glyph: FF,
                    family: null === WF || void 0 === WF ? void 0 : WF.family
                  })
                }, FF)
              }))
            }), (0, yW.jsx)(Jb, {
              deadzone: SF.right.deadzone,
              dotRef: PF,
              labelKey: SF.right.labelKey
            })]
          })]
        })
      },
      Wd = (0, zW.memo)((function() {
        const {
          t: FF
        } = (0, AF.B)(), WF = (0, eF.r)(), [SF, CF] = (0, zW.useState)(!1);
        return (0, zW.useEffect)((() => {
          if (!SF) return;
          const FF = window.setTimeout((() => {
            CF(!1)
          }), Zb.ib);
          return () => {
            window.clearTimeout(FF)
          }
        }), [SF]), (0, yW.jsxs)("div", {
          className: "SettingsMenuRightInner ControllerCategory",
          children: [(0, yW.jsx)(ob, {
            text: FF("controller:settingsLook")
          }), (0, yW.jsx)(Mb, {
            settingKey: "lookSensitivityX",
            label: FF("controller:settingsLookSensitivityX"),
            range: Zb.fb,
            format: Zb.G
          }), (0, yW.jsx)(Mb, {
            settingKey: "lookSensitivityY",
            label: FF("controller:settingsLookSensitivityY"),
            range: Zb.fb,
            format: Zb.G
          }), (0, yW.jsx)(Mb, {
            settingKey: "aimLookSensitivity",
            label: FF("controller:settingsAimLookSensitivity"),
            range: Zb.h,
            format: Zb.G
          }), (0, yW.jsx)(Yb, {
            label: FF("controller:settingsLookCurve"),
            hint: FF("controller:settingsLookCurveHint"),
            options: Zb.U,
            value: WF.lookCurve,
            onChange: FF => {
              (0, eF.p)({
                lookCurve: FF
              })
            }
          }), (0, yW.jsx)(md.b, {
            label: FF("controller:settingsInvertLookX"),
            checked: WF.invertLookX,
            onClick: FF => {
              (0, eF.p)({
                invertLookX: FF
              })
            }
          }), (0, yW.jsx)(md.b, {
            label: FF("controller:settingsInvertLookY"),
            checked: WF.invertLookY,
            onClick: FF => {
              (0, eF.p)({
                invertLookY: FF
              })
            }
          }), (0, yW.jsx)(Mb, {
            settingKey: "lookDeadzone",
            label: FF("controller:settingsLookDeadzone"),
            range: Zb.y,
            format: Zb.D
          }), (0, yW.jsx)(nb, {}), (0, yW.jsx)(ob, {
            text: FF("controller:settingsMovement")
          }), (0, yW.jsx)(Mb, {
            settingKey: "moveDeadzone",
            label: FF("controller:settingsMoveDeadzone"),
            range: Zb.y,
            format: Zb.D
          }), (0, yW.jsx)(md.b, {
            label: FF("controller:settingsAutoSprint"),
            checked: WF.autoSprint,
            onClick: FF => {
              (0, eF.p)({
                autoSprint: FF
              })
            },
            circleInfoText: FF("controller:settingsAutoSprintInfo")
          }), (0, yW.jsx)(Yb, {
            label: FF("controller:settingsSneak"),
            options: Zb.hb,
            value: WF.sneakMode,
            onChange: FF => {
              (0, eF.p)({
                sneakMode: FF
              })
            }
          }), (0, yW.jsx)(ob, {
            text: FF("controller:settingsButtons")
          }), (0, yW.jsx)(Yb, {
            label: FF("controller:settingsPromptFamily"),
            options: Zb.ab,
            value: WF.promptFamily,
            onChange: FF => {
              (0, eF.p)({
                promptFamily: FF
              })
            }
          }), (0, yW.jsx)(md.b, {
            label: FF("controller:settingsHideButtonHints"),
            checked: WF.hideButtonHints,
            onClick: FF => {
              (0, eF.p)({
                hideButtonHints: FF
              })
            }
          }), (0, yW.jsx)(md.b, {
            label: FF("controller:settingsVibration"),
            checked: WF.vibration,
            onClick: FF => {
              (0, eF.p)({
                vibration: FF
              }), FF && vC("preview")
            }
          }), (0, yW.jsx)(Mb, {
            settingKey: "cursorSpeed",
            label: FF("controller:settingsCursorSpeed"),
            range: Zb.x,
            format: Zb.G
          }), (0, yW.jsx)(md.b, {
            label: FF("controller:settingsCursorMagnetism"),
            checked: WF.cursorMagnetism,
            onClick: FF => {
              (0, eF.p)({
                cursorMagnetism: FF
              })
            }
          }), (0, yW.jsx)(md.b, {
            label: FF("controller:settingsMenuBackToCategories"),
            checked: WF.menuBackToCategories,
            onClick: FF => {
              (0, eF.p)({
                menuBackToCategories: FF
              })
            }
          }), (0, yW.jsx)(vd, {
            layoutSetting: (0, yW.jsxs)(yW.Fragment, {
              children: [RF.e.map((SF => (0, yW.jsx)(md.b, {
                label: FF(Zb.O[SF]),
                checked: (0, RF.x)(SF, WF),
                onClick: FF => {
                  CF(!(0, RF.H)(SF, FF))
                }
              }, SF))), SF && (0, yW.jsx)("div", {
                className: "PadLayoutRefusedNotice",
                role: "status",
                children: FF("controller:settingsLayoutRefusedToast")
              })]
            })
          }), (0, yW.jsx)(Kb, {}), (0, yW.jsx)(ob, {
            text: FF("controller:settingsAlternatives")
          }), (0, yW.jsx)("div", {
            className: "ControllerSettingsHint",
            children: FF("controller:settingsAlternativesHint")
          }), (0, yW.jsx)(Yb, {
            label: FF("controller:settingsMenuNavigation"),
            hint: FF("controller:settingsMenuNavigationHint"),
            options: Zb.Y,
            value: WF.menuNavigation,
            onChange: FF => {
              (0, eF.p)({
                menuNavigation: FF
              })
            }
          }), (0, yW.jsx)(Yb, {
            label: FF("controller:settingsInventoryNavigation"),
            hint: FF("controller:settingsInventoryNavigationHint"),
            options: Zb.N,
            value: WF.inventoryNavigation,
            onChange: FF => {
              (0, eF.p)({
                inventoryNavigation: FF
              })
            }
          }), (0, yW.jsx)(Yb, {
            label: FF("controller:settingsQuickChat"),
            hint: FF("controller:settingsQuickChatHint"),
            options: Zb.bb,
            value: WF.quickChat,
            onChange: FF => {
              (0, eF.p)({
                quickChat: FF
              })
            }
          }), (0, yW.jsx)(Yb, {
            label: FF("controller:settingsLeaderboardButton"),
            hint: FF("controller:settingsLeaderboardButtonHint"),
            options: Zb.R,
            value: WF.leaderboardButton,
            onChange: FF => {
              (0, eF.p)({
                leaderboardButton: FF
              })
            }
          }), (0, yW.jsx)(ob, {
            text: FF("controller:settingsTester")
          }), (0, yW.jsx)(Fd, {})]
        })
      }));
    (0, AF.b)(CF);
    for (const ud of (0, uF.q)()) ud.connected ? hF.f.handleConnectionEvent(ud) : hF.f.handleDisconnectionEvent(ud);
    const Sd = () => null !== hF.f.getActivePad(),
      Cd = () => HS.getState(),
      Ad = () => HS.isSteppingSlots()
  },
  7119: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => bW,
      f: () => dF
    });
    const CF = {
        "054c": "playstation",
        "057e": "nintendo"
      },
      AF = "28de",
      uF = new Set(["1205"]),
      hF = FF => {
        const WF = /vendor:\s*([0-9a-f]{4})\s*product:\s*([0-9a-f]{4})/i.exec(FF);
        if (WF) return {
          vendor: WF[1].toLowerCase(),
          product: WF[2].toLowerCase()
        };
        const SF = /^([0-9a-f]{1,4})-([0-9a-f]{1,4})-/i.exec(FF);
        return SF ? {
          vendor: SF[1].toLowerCase().padStart(4, "0"),
          product: SF[2].toLowerCase().padStart(4, "0")
        } : null
      },
      bW = (FF, WF) => {
        const SF = hF(FF);
        if ((null === SF || void 0 === SF ? void 0 : SF.vendor) === AF) return uF.has(SF.product) ? "steamdeck" : "xbox";
        if (SF && CF[SF.vendor]) return CF[SF.vendor];
        const bW = `${FF} ${null!==WF&&void 0!==WF?WF:""}`.toLowerCase();
        return /dualsense|dualshock|playstation|sony/.test(bW) ? "playstation" : /nintendo|switch|joy-con|pro controller/.test(bW) ? "nintendo" : /steam deck/.test(bW) ? "steamdeck" : "xbox"
      },
      dF = FF => {
        var WF;
        return (null === (WF = hF(FF)) || void 0 === WF ? void 0 : WF.vendor) === AF
      }
  },
  7155: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => PF,
      e: () => bW
    });
    var CF = SF(7117);
    const AF = ["capture", "keyboard", "wheel", "inventory", "cursor", "focus", "gameplay"],
      uF = new Set(["capture", "gameplay"]),
      hF = ["Up", "Down", "Left", "Right"],
      bW = FF => hF.includes(FF),
      dF = .25;
    const PF = new class {
      constructor() {
        this.consumers = new Map, this.activeName = null, this.yS = new Array(CF.O).fill(!1), this.previousHeld = new Array(CF.O).fill(!1), this.consumedButtons = new Array(CF.O).fill(!1), this.suppressedReleases = new Array(CF.O).fill(!1), this.wakeOwned = new Array(CF.O).fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.peek = null, this.lastFrame = (0, CF.t)()
      }
      register(FF) {
        return this.consumers.has(FF.name) && console.warn(`Controller consumer "${FF.name}" registered twice; the newer one replaces it.`), this.consumers.set(FF.name, FF), () => {
          var WF;
          this.consumers.get(FF.name) === FF && (this.activeName === FF.name ? (this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()) : (null === (WF = this.peek) || void 0 === WF ? void 0 : WF.over) === FF.name && (this.peek = null), this.consumers.delete(FF.name))
        }
      }
      getActiveConsumerName() {
        return this.activeName
      }
      isButtonHeld(FF) {
        return this.yS[(0, CF.k)(FF)]
      }
      getLastFrame() {
        return this.lastFrame
      }
      clear() {
        this.deactivateCurrent(), this.activeName = null, this.consumeAllHeld()
      }
      reset() {
        this.deactivateCurrent(), this.activeName = null, this.yS = new Array(CF.O).fill(!1), this.previousHeld = new Array(CF.O).fill(!1), this.consumedButtons.fill(!1), this.suppressedReleases.fill(!1), this.wakeOwned.fill(!1), this.leftStickConsumed = !1, this.rightStickConsumed = !1, this.handOffPending = !1, this.idleResume = null, this.lastFrame = (0, CF.t)()
      }
      dispatch(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.lastFrame = FF, this.previousHeld = this.yS, this.yS = (0, CF.q)(FF.values, this.previousHeld);
        for (let uF = 0; uF < CF.O; uF++) this.suppressedReleases[uF] = !this.yS[uF] && this.consumedButtons[uF], this.yS[uF] || (this.consumedButtons[uF] = !1), this.wakeOwned[uF] && (this.yS[uF] ? (this.consumedButtons[uF] = !0, this.wakeOwned[uF] = !1) : FF.values[uF] < CF.K && (this.wakeOwned[uF] = !1));
        Math.hypot(FF.leftStick.x, FF.leftStick.y) < dF && (this.leftStickConsumed = !1), Math.hypot(FF.rightStick.x, FF.rightStick.y) < dF && (this.rightStickConsumed = !1);
        const AF = this.pickActive();
        if ((null === AF || void 0 === AF ? void 0 : AF.name) !== this.activeName) {
          var hF, bW, PF, RF, iW, eF;
          const FF = this.activeName,
            WF = {
              left: !this.leftStickConsumed,
              right: !this.rightStickConsumed
            },
            SF = null !== (hF = null === AF || void 0 === AF || null === (bW = AF.peek) || void 0 === bW ? void 0 : bW.call(AF)) && void 0 !== hF ? hF : null,
            uF = null === FF && !!SF && !(null === (PF = this.consumers.get(SF.over)) || void 0 === PF || !PF.onPeekFrame),
            dF = SF && (SF.over === FF || uF) ? SF : null,
            EF = null !== this.peek && this.peek.over === (null === AF || void 0 === AF ? void 0 : AF.name) ? this.peek : null;
          this.deactivateCurrent(null !== dF, null !== EF), this.activeName = null !== (RF = null === AF || void 0 === AF ? void 0 : AF.name) && void 0 !== RF ? RF : null, null === FF || this.handOffPending || this.consumeAllHeld();
          const QF = null === (iW = null !== dF && void 0 !== dF ? dF : EF) || void 0 === iW ? void 0 : iW.stick;
          "left" === QF && WF.left ? this.leftStickConsumed = !1 : "right" === QF && WF.right && (this.rightStickConsumed = !1), this.peek = dF, AF || null === FF ? AF && (null === (eF = this.idleResume) || void 0 === eF ? void 0 : eF.name) === AF.name && (this.idleResume.left && (this.leftStickConsumed = !1), this.idleResume.right && (this.rightStickConsumed = !1)) : this.idleResume = {
            name: FF,
            left: WF.left && this.leftStickConsumed,
            right: WF.right && this.rightStickConsumed
          }, AF && (this.idleResume = null);
          for (let AF = 0; AF < CF.O; AF++) this.previousHeld[AF] && !this.yS[AF] && (this.suppressedReleases[AF] = !0)
        }
        var EF, QF;
        (this.handOffPending = !1, AF) && (SF && !uF.has(AF.name) && this.consumeWakePress(AF), AF.onFrame(this.buildInput(FF, WF, SF)), this.peek && (null === (EF = this.consumers.get(this.peek.over)) || void 0 === EF || null === (QF = EF.onPeekFrame) || void 0 === QF || QF.call(EF, this.buildInput(FF, WF, !1, this.peek.stick))))
      }
      consumeWakePress(FF) {
        for (let AF = 0; AF < CF.O; AF++) {
          var WF, SF;
          const uF = CF.R[AF];
          (null !== (WF = null === (SF = FF.wakePressActs) || void 0 === SF ? void 0 : SF.call(FF, uF)) && void 0 !== WF ? WF : hF.includes(uF)) || (this.yS[AF] ? this.consumedButtons[AF] = !0 : this.lastFrame.values[AF] >= CF.J && (this.wakeOwned[AF] = !0))
        }
      }
      pickActive() {
        for (const FF of AF) {
          const WF = this.consumers.get(FF);
          if (WF && WF.isActive()) return WF
        }
        return null
      }
      deactivateCurrent() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var SF, CF, AF, uF;
        this.activeName && (null === (SF = this.consumers.get(this.activeName)) || void 0 === SF || null === (CF = SF.onDeactivate) || void 0 === CF || CF.call(SF, FF));
        this.peek && !WF && (null === (AF = this.consumers.get(this.peek.over)) || void 0 === AF || null === (uF = AF.onDeactivate) || void 0 === uF || uF.call(AF, !1));
        this.peek = null
      }
      consumeAllHeld() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.idleResume = null;
        for (let AF = 0; AF < CF.O; AF++) this.yS[AF] && (this.consumedButtons[AF] = !0);
        const {
          leftStick: WF,
          rightStick: SF
        } = this.lastFrame;
        this.leftStickConsumed = "left" !== FF && (this.leftStickConsumed || Math.hypot(WF.x, WF.y) >= dF), this.rightStickConsumed = "right" !== FF && (this.rightStickConsumed || Math.hypot(SF.x, SF.y) >= dF)
      }
      handOffHeldInput() {
        this.handOffPending = !0
      }
      consumeButton(FF) {
        const WF = (0, CF.k)(FF);
        this.yS[WF] && (this.consumedButtons[WF] = !0)
      }
      buildInput(FF, WF, SF, AF) {
        const uF = this.yS,
          hF = this.previousHeld,
          bW = AF ? new Array(CF.O).fill(!0) : [...this.consumedButtons],
          dF = AF ? bW : [...this.suppressedReleases],
          PF = !this.leftStickConsumed && (!AF || "left" === AF),
          RF = !this.rightStickConsumed && (!AF || "right" === AF);
        return {
          frame: FF,
          dtMs: WF,
          isHeld: FF => {
            const WF = (0, CF.k)(FF);
            return uF[WF] && !bW[WF]
          },
          wasPressed: FF => {
            const WF = (0, CF.k)(FF);
            return uF[WF] && !hF[WF] && !bW[WF]
          },
          wasReleased: FF => {
            const WF = (0, CF.k)(FF);
            return !uF[WF] && hF[WF] && !dF[WF]
          },
          value: WF => {
            const SF = (0, CF.k)(WF);
            return bW[SF] ? 0 : FF.values[SF]
          },
          leftStick: PF ? FF.leftStick : {
            x: 0,
            y: 0
          },
          rightStick: RF ? FF.rightStick : {
            x: 0,
            y: 0
          },
          wokeDevice: SF
        }
      }
    }
  },
  7137: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => iW.f,
      f: () => iW.h,
      i: () => OF,
      l: () => xW,
      p: () => ZF,
      r: () => oF
    });
    var CF = SF(46),
      AF = SF(20),
      uF = SF(1262),
      hF = SF(33),
      bW = SF(7146),
      dF = SF(7117),
      PF = SF(7131),
      RF = SF(7114),
      iW = SF(1641),
      eF = SF(7148);
    const EF = {
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
        uC: {}
      },
      QF = "controllerSettings",
      rW = ["uC", "promptFamily", "hideButtonHints", "swapSticks", "swapConfirmBack", "leaderboardButton"],
      gW = ["auto", ...bW.e],
      tW = (FF, WF) => "string" === typeof WF && FF.includes(WF),
      TF = FF => WF => "number" === typeof WF && Number.isFinite(WF) ? (0, eF.u)(WF, FF) : void 0,
      aW = FF => "boolean" === typeof FF ? FF : void 0,
      kW = FF => WF => tW(FF, WF) ? WF : void 0,
      qW = {
        lookSensitivityX: TF(eF.fb),
        lookSensitivityY: TF(eF.fb),
        aimLookSensitivity: TF(eF.h),
        invertLookX: aW,
        invertLookY: aW,
        lookCurve: kW(dF.I),
        lookDeadzone: TF(eF.y),
        moveDeadzone: TF(eF.y),
        swapSticks: aW,
        autoSprint: aW,
        sneakMode: kW(["toggle", "hold"]),
        tapHoldTime: kW(["short", "medium", "long"]),
        attackMode: kW(["hold", "toggle"]),
        promptFamily: kW(gW),
        hideButtonHints: aW,
        vibration: aW,
        cursorSpeed: TF(eF.x),
        cursorMagnetism: aW,
        buttonRepeat: kW(dF.n),
        largePointer: aW,
        menuBackToCategories: aW,
        swapConfirmBack: aW,
        menuNavigation: kW(["hybrid", "focus", "cursor"]),
        inventoryNavigation: kW(["hybrid", "slot", "cursor"]),
        quickChat: kW(["wheel", "off"]),
        leaderboardButton: kW(["shop", "leaderboard"]),
        gyroAiming: aW,
        gyroSensitivity: TF(eF.M),
        gyroActivation: kW(["always", "aiming", "button"]),
        gyroButton: kW(dF.R),
        emoteButton: kW(["tapHold", "wheel"])
      },
      VF = [{
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
      NF = FF => {
        const WF = {};
        if ("object" !== typeof FF || null === FF) return WF;
        for (const [SF, CF] of Object.entries(FF)) Object.prototype.hasOwnProperty.call(PF.f, SF) && tW(dF.R, CF) && (WF[SF] = CF);
        return WF
      },
      DF = FF => {
        const WF = {};
        for (const SF of Object.keys(EF))("uC" === SF ? Object.keys(FF.uC).length > 0 : FF[SF] !== EF[SF]) && (WF[SF] = FF[SF]);
        0 !== Object.keys(WF).length ? hF.h.setItem(QF, WF) : hF.h.removeItem(QF)
      };
    let LF = (() => {
        const FF = hF.h.getItem(QF),
          WF = (FF => {
            const WF = "object" === typeof FF && null !== FF ? FF : {},
              SF = {
                ...EF,
                uC: NF(WF.uC)
              };
            for (const AF of Object.keys(qW)) {
              const FF = qW[AF](WF[AF]);
              void 0 !== FF && (SF[AF] = FF)
            }
            const CF = Object.keys(WF).filter((FF => !!Object.prototype.hasOwnProperty.call(EF, FF) && ("uC" === FF ? "object" !== typeof WF.uC || null === WF.uC || Object.keys(WF.uC).length !== Object.keys(SF.uC).length : SF[FF] !== WF[FF])));
            return CF.length > 0 && console.warn(`Stored controller settings had invalid values, replaced with defaults: ${CF.join(", ")}`), SF
          })(FF);
        return null !== FF && void 0 !== FF && DF(WF), WF
      })(),
      mW = {
        ...LF,
        ...(() => {
          if ("undefined" === typeof window) return {};
          const FF = {},
            WF = new URLSearchParams(window.location.search);
          for (const {
              param: SF,
              key: CF
            }
            of VF) {
            const AF = qW[CF](WF.get(SF));
            void 0 !== AF && (FF[CF] = AF)
          }
          return FF
        })()
      };
    const OF = () => mW,
      xW = () => {
        var FF, WF;
        const SF = OF().promptFamily;
        return "auto" !== SF ? SF : null !== (FF = null === (WF = RF.f.getActivePad()) || void 0 === WF ? void 0 : WF.family) && void 0 !== FF ? FF : "xbox"
      },
      ZF = FF => {
        const WF = mW;
        LF = {
          ...LF,
          ...FF
        }, DF(LF), mW = {
          ...mW,
          ...FF
        }, (FF => {
          AF.j.Uu(iW.h, mW), rW.some((WF => FF[WF] !== mW[WF])) && AF.j.Uu(iW.f, mW)
        })(WF)
      },
      oF = () => {
        const [FF, WF] = (0, CF.useState)(mW);
        return (0, uF.e)(iW.h, WF), FF
      }
  },
  7583: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => AF
    });
    const CF = new Set(["Alt", "AltGraph", "Meta", "OS", "AudioVolumeUp", "AudioVolumeDown", "AudioVolumeMute", "MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaTrackNext", "MediaTrackPrevious", "BrowserBack", "BrowserForward", "BrowserHome", "GoBack", "LaunchApplication1", "LaunchApplication2", "LaunchMail", "PrintScreen", "Unidentified"]),
      AF = FF => CF.has(FF)
  },
  7114: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => EF.d,
      f: () => tW
    });
    var CF = SF(7117),
      AF = SF(7119);
    const uF = .1,
      hF = .3;
    class bW {
      constructor() {
        this.deadzone = 0, this.anchor = null, this.steadyMs = 0, this.lastMs = null, this.returning = !0, this.anchorLearned = !1
      }
      observe(FF, WF) {
        const SF = null === this.lastMs ? 0 : Math.min(Math.max(0, WF - this.lastMs), 100);
        this.lastMs = WF;
        const CF = Math.hypot(FF.x, FF.y);
        if (CF >= hF) return this.anchor = null, void(this.returning = !0);
        CF >= uF || (this.returning = !1);
        const AF = this.anchor;
        if (!AF || Math.hypot(FF.x - AF.x, FF.y - AF.y) > .03) return this.anchorLearned && (this.returning = !1), this.anchor = {
          x: FF.x,
          y: FF.y
        }, this.steadyMs = 0, void(this.anchorLearned = !1);
        if (this.steadyMs += SF, this.steadyMs < 1e3) return;
        const bW = Math.max(CF, Math.hypot(AF.x, AF.y));
        bW < uF ? this.deadzone = 0 : this.returning && (this.deadzone = bW + .05, this.anchorLearned = !0)
      }
      getDeadzone() {
        return this.deadzone
      }
      apply(FF) {
        return Math.hypot(FF.x, FF.y) < this.deadzone ? {
          x: 0,
          y: 0
        } : FF
      }
    }
    const dF = (FF, WF) => {
        var SF, CF;
        return null !== (SF = FF && (null === (CF = Object.getOwnPropertyDescriptor(FF, WF)) || void 0 === CF ? void 0 : CF.get)) && void 0 !== SF ? SF : null
      },
      PF = FF => {
        const WF = FF.vendorName;
        return "string" === typeof WF ? WF : void 0
      },
      RF = ((FF, WF) => {
        const SF = dF(FF, "index"),
          CF = dF(FF, "id"),
          AF = dF(FF, "connected"),
          uF = dF(FF, "mapping"),
          hF = dF(FF, "buttons"),
          bW = dF(FF, "axes"),
          RF = dF(WF, "pressed"),
          iW = dF(WF, "value");
        return SF && CF && AF && uF && hF && bW && RF && iW ? FF => {
          const WF = hF.call(FF),
            dF = bW.call(FF),
            eF = {
              index: Number(SF.call(FF)),
              id: String(CF.call(FF)),
              connected: !0 === AF.call(FF),
              mapping: String(uF.call(FF)),
              buttons: [],
              axes: [],
              vendorName: PF(FF)
            };
          for (let SF = 0; SF < WF.length; SF++) eF.buttons.push({
            pressed: !0 === RF.call(WF[SF]),
            value: Number(iW.call(WF[SF]))
          });
          for (let SF = 0; SF < dF.length; SF++) eF.axes.push(Number(dF[SF]));
          return eF
        } : null
      })("undefined" === typeof Gamepad ? null : Gamepad.prototype, "undefined" === typeof GamepadButton ? null : GamepadButton.prototype),
      iW = "undefined" === typeof Navigator ? null : Navigator.prototype.getGamepads;
    var eF = SF(1239),
      EF = SF(1641);
    const QF = hF,
      rW = FF => {
        const WF = new Array(CF.O).fill(0);
        for (let SF = 0; SF < CF.O && SF < FF.buttons.length; SF++) {
          const AF = FF.buttons[SF];
          WF[SF] = AF.pressed && !(0, CF.G)(SF) ? Math.max(AF.value, CF.u) : AF.value
        }
        return WF
      },
      gW = (FF, WF) => {
        var SF, CF;
        return {
          x: null !== (SF = FF.axes[WF]) && void 0 !== SF ? SF : 0,
          y: null !== (CF = FF.axes[WF + 1]) && void 0 !== CF ? CF : 0
        }
      };
    const tW = new class {
      constructor(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : RF;
        this.readGamepads = FF, this.requireTrustedPads = WF, this.nativeReader = SF, this.running = !1, this.listening = !1, this.rafId = 0, this.lastTimestampMs = 0, this.activeInfo = null, this.slots = [], this.trustedIndices = new Set, this.warnedNonStandardIds = new Set, this.loggedReadError = !1, this.frameListeners = new Set, this.connectionListeners = new Set, this.anyPadConnected = !1, this.connectedListeners = new Set, this.handleConnectionEvent = FF => {
          FF.isTrusted && this.trustedIndices.add(FF.gamepad.index), this.wake()
        }, this.handleDisconnectionEvent = FF => {
          this.trustedIndices.delete(FF.gamepad.index)
        }, this.lF = FF => {
          if (this.rafId = 0, !this.running) return;
          const WF = 0 === this.lastTimestampMs ? 16 : Math.min(100, FF - this.lastTimestampMs);
          this.lastTimestampMs = FF;
          try {
            this.poll(FF, WF)
          } finally {
            this.anyPadConnected && (this.rafId = requestAnimationFrame(this.lF))
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
      onFrame(FF) {
        return this.frameListeners.add(FF), () => {
          this.frameListeners.delete(FF)
        }
      }
      onActivePadChanged(FF) {
        return this.connectionListeners.add(FF), () => {
          this.connectionListeners.delete(FF)
        }
      }
      getActivePad() {
        return this.activeInfo
      }
      hasConnectedPad() {
        return this.anyPadConnected
      }
      onConnectedPadsChanged(FF) {
        return this.connectedListeners.add(FF), () => {
          this.connectedListeners.delete(FF)
        }
      }
      getActiveGamepad() {
        if (!this.activeInfo) return null;
        const FF = this.readPads()[this.activeInfo.index],
          WF = FF ? this.readPad(FF) : null;
        return WF && WF.id === this.activeInfo.id ? FF : null
      }
      poll(FF, WF) {
        var SF, AF;
        const uF = this.readPads();
        let hF = null,
          dF = !1;
        const PF = [],
          RF = Math.max(uF.length, this.slots.length);
        for (let aW = 0; aW < RF; aW++) {
          var iW;
          const WF = aW < uF.length ? uF[aW] : null,
            SF = WF ? this.readPad(WF) : null;
          if (!SF || !SF.connected || !this.isUsable(SF)) {
            this.slots[aW] = null;
            continue
          }
          let AF = this.slots[aW];
          AF && AF.id === SF.id || (AF = {
            id: SF.id,
            yS: [],
            leftSettled: !1,
            rightSettled: !1,
            leftRest: new bW,
            rightRest: new bW
          }, this.slots[aW] = AF);
          const RF = gW(SF, 0),
            eF = gW(SF, 2);
          !AF.leftSettled && Math.hypot(RF.x, RF.y) < QF && (AF.leftSettled = !0), !AF.rightSettled && Math.hypot(eF.x, eF.y) < QF && (AF.rightSettled = !0), AF.leftRest.observe(RF, FF), AF.rightRest.observe(eF, FF);
          const EF = rW(SF),
            tW = (0, CF.q)(EF, AF.yS),
            TF = AF.yS,
            kW = tW.map(((FF, WF) => FF && !TF[WF]));
          AF.yS = tW;
          const qW = {
            pad: SF,
            slot: AF,
            values: EF
          };
          aW === (null === (iW = this.activeInfo) || void 0 === iW ? void 0 : iW.index) && SF.id === this.activeInfo.id ? (hF = qW, dF = kW.includes(!0)) : kW.includes(!0) && PF.push({
            polled: qW,
            rose: kW
          })
        }
        const eF = this.slots.some((FF => null !== FF));
        if (eF !== this.anyPadConnected) {
          this.anyPadConnected = eF;
          for (const FF of this.connectedListeners) FF()
        }
        const EF = null !== (SF = null === (AF = hF) || void 0 === AF ? void 0 : AF.slot.yS) && void 0 !== SF ? SF : [],
          tW = dF ? void 0 : PF.find((FF => {
            let {
              rose: WF
            } = FF;
            return WF.some(((FF, WF) => FF && !EF[WF]))
          }));
        if (tW ? (hF = tW.polled, this.setActive(tW.polled.pad)) : this.activeInfo && !hF && this.setActive(null), !hF || !this.activeInfo) return;
        const TF = ((FF, WF) => {
          let {
            pad: SF,
            slot: AF,
            values: uF
          } = FF;
          const hF = (0, CF.t)(WF);
          return hF.values = uF, AF.leftSettled && (hF.leftStick = AF.leftRest.apply(gW(SF, 0))), AF.rightSettled && (hF.rightStick = AF.rightRest.apply(gW(SF, 2))), hF
        })(hF, FF);
        for (const CF of this.frameListeners) CF(TF, WF, this.activeInfo)
      }
      readPad(FF) {
        if (this.nativeReader) try {
          return this.nativeReader(FF)
        } catch {
          if (this.requireTrustedPads) return null
        }
        return this.requireTrustedPads ? null : (FF => {
          const WF = FF;
          return {
            index: WF.index,
            id: WF.id,
            connected: WF.connected,
            mapping: WF.mapping,
            buttons: Array.from(WF.buttons, (FF => ({
              pressed: FF.pressed,
              value: FF.value
            }))),
            axes: Array.from(WF.axes),
            vendorName: PF(FF)
          }
        })(FF)
      }
      isUsable(FF) {
        return !(0, eF.g)(FF.id) && ("standard" !== FF.mapping ? (this.warnedNonStandardIds.has(FF.id) || (this.warnedNonStandardIds.add(FF.id), console.warn(`Controller "${FF.id}" has no standard button mapping, so it is ignored.`)), !1) : !this.requireTrustedPads || this.trustedIndices.has(FF.index))
      }
      setActive(FF) {
        this.activeInfo = FF ? {
          index: FF.index,
          id: FF.id,
          family: (0, AF.d)(FF.id, FF.vendorName)
        } : null;
        for (const WF of this.connectionListeners) WF(this.activeInfo)
      }
      readPads() {
        try {
          return this.readGamepads()
        } catch (FF) {
          return this.loggedReadError || (this.loggedReadError = !0, console.warn("Reading gamepads failed; controller input is unavailable.", FF)), []
        }
      }
      wake() {
        this.running && 0 === this.rafId && (this.lastTimestampMs = 0, this.rafId = requestAnimationFrame(this.lF))
      }
    }((() => iW ? iW.call(navigator) : []), !0);
    tW.listenForConnections()
  },
  7595: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => CF
    });
    const CF = {
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
  7656: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => hF,
      f: () => bW
    });
    var CF = SF(20),
      AF = SF(7644);
    let uF = !1;
    const hF = () => uF,
      bW = FF => {
        FF !== uF && (uF = FF, CF.j.Uu(AF.n, uF))
      }
  },
  7651: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => bW,
      e: () => dF
    });
    var CF = SF(20),
      AF = SF(7644);
    let uF = null,
      hF = 0;
    const bW = () => uF,
      dF = FF => {
        null === FF && null === uF || (uF = null === FF ? null : {
          id: ++hF,
          holdMs: FF
        }, CF.j.Uu(AF.q, uF))
      }
  },
  7665: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => hF,
      c: () => bW
    });
    var CF = SF(20),
      AF = SF(7644);
    let uF = !1;
    const hF = () => uF,
      bW = FF => {
        FF !== uF && (uF = FF, CF.j.Uu(AF.u, uF))
      }
  },
  7754: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => hF,
      g: () => bW
    });
    var CF = SF(20),
      AF = SF(7644);
    let uF = !1;
    const hF = () => uF,
      bW = FF => {
        FF !== uF && (uF = FF, CF.j.Uu(AF.w, uF))
      }
  },
  7687: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => CF
    });
    class CF {
      constructor() {
        this.downAtMs = null
      }
      update(FF, WF, SF, CF) {
        if (FF) return this.downAtMs = SF, null;
        if (null === this.downAtMs) return null;
        const AF = SF - this.downAtMs >= CF;
        return WF ? AF ? (this.downAtMs = null, "hold") : null : (this.downAtMs = null, AF ? "hold" : "tap")
      }
      release() {
        this.downAtMs = null
      }
    }
  },
  7165: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => iW,
      g: () => eF,
      j: () => bW,
      n: () => aW,
      r: () => TF
    });
    var CF = SF(33),
      AF = SF(7146),
      uF = SF(7117);
    const hF = (() => {
        try {
          return SF(7167)
        } catch {
          return null
        }
      })(),
      bW = [...uF.R, "LeftStick", "RightStick"],
      dF = new Map,
      PF = {
        xbox: "xbox",
        playstation: "playstation",
        nintendo: "nintendo",
        steamdeck: "steamdeck",
        generic: "xbox"
      },
      RF = (new Set(Object.values(PF)), {
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
      iW = (FF, WF) => {
        var SF, CF;
        return null !== (SF = null === (CF = RF[PF[FF]]) || void 0 === CF ? void 0 : CF[WF]) && void 0 !== SF ? SF : 1
      },
      eF = (FF, WF) => {
        const SF = `./${PF[FF]}/${WF}.svg`;
        let CF = dF.get(SF);
        return void 0 === CF && (CF = hF ? hF(SF) : "", dF.set(SF, CF)), CF
      },
      EF = new Set,
      QF = [],
      rW = FF => {
        if (!EF.has(FF)) {
          EF.add(FF);
          for (const WF of bW) {
            const SF = eF(FF, WF);
            if (SF) {
              const FF = new Image;
              FF.crossOrigin = "anonymous", FF.src = SF, QF.push(FF)
            }
          }
        }
      },
      gW = "controllerGlyphFamily";
    let tW = null;
    const TF = FF => {
        FF !== tW && (tW = FF, CF.h.setItem(gW, FF), rW(FF))
      },
      aW = () => {
        const FF = CF.h.getItem(gW);
        (0, AF.h)(FF) && FF !== tW && (tW = FF, rW(FF))
      }
  },
  7782: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => fF,
      c: () => yW
    });
    var CF = SF(46),
      AF = SF(20),
      uF = SF(1262),
      hF = SF(7128),
      bW = SF(7114),
      dF = SF(7155),
      PF = SF(7137);
    const RF = {
        x: 0,
        y: 0,
        z: 0
      },
      iW = Math.PI / 180,
      eF = FF => Math.hypot(FF.x, FF.y, FF.z),
      EF = (FF, WF) => ({
        x: FF.x * WF,
        y: FF.y * WF,
        z: FF.z * WF
      }),
      QF = (FF, WF) => ({
        x: FF.x + WF.x,
        y: FF.y + WF.y,
        z: FF.z + WF.z
      }),
      rW = (FF, WF) => ({
        x: FF.x - WF.x,
        y: FF.y - WF.y,
        z: FF.z - WF.z
      }),
      gW = FF => {
        const WF = eF(FF);
        return 0 === WF ? RF : EF(FF, 1 / WF)
      },
      tW = FF => ({
        min: {
          ...FF
        },
        max: {
          ...FF
        }
      }),
      TF = (FF, WF) => ({
        min: {
          x: Math.min(FF.min.x, WF.x),
          y: Math.min(FF.min.y, WF.y),
          z: Math.min(FF.min.z, WF.z)
        },
        max: {
          x: Math.max(FF.max.x, WF.x),
          y: Math.max(FF.max.y, WF.y),
          z: Math.max(FF.max.z, WF.z)
        }
      }),
      aW = (FF, WF) => FF.max.x - FF.min.x <= WF && FF.max.y - FF.min.y <= WF && FF.max.z - FF.min.z <= WF;
    class kW {
      constructor() {
        this.bias = RF, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = RF, this.windowSec = 0
      }
      update(FF) {
        const WF = this.gyroRange ? TF(this.gyroRange, FF.gyro) : tW(FF.gyro),
          SF = FF.accel ? this.accelRange ? TF(this.accelRange, FF.accel) : tW(FF.accel) : null;
        if (!aW(WF, 1) || SF && !aW(SF, .01)) return void this.restartWindow(FF);
        if (this.gyroRange = WF, this.accelRange = SF, this.sum = QF(this.sum, EF(FF.gyro, FF.dtSec)), this.windowSec += FF.dtSec, this.windowSec < 1) return;
        const CF = EF(this.sum, 1 / this.windowSec);
        if (eF(CF) > 5) return;
        const AF = rW(CF, this.bias);
        let uF = 0;
        !this.calibrated || this.windowSec >= 3 ? uF = 1 : eF(AF) <= 1 && (uF = Math.min(1, FF.dtSec / 1)), this.bias = QF(this.bias, EF(AF, uF)), this.calibrated = this.calibrated || uF > 0
      }
      correct(FF) {
        return rW(FF, this.bias)
      }
      getBias() {
        return this.bias
      }
      isCalibrated() {
        return this.calibrated
      }
      reset() {
        this.bias = RF, this.calibrated = !1, this.gyroRange = null, this.accelRange = null, this.sum = RF, this.windowSec = 0
      }
      restartWindow(FF) {
        this.gyroRange = tW(FF.gyro), this.accelRange = FF.accel ? tW(FF.accel) : null, this.sum = RF, this.windowSec = 0
      }
    }
    class qW {
      constructor() {
        this.down = null
      }
      update(FF, WF, SF) {
        const CF = gW(EF(WF, -1));
        if (!this.down) return this.down = CF, CF;
        const AF = EF(FF, iW * SF),
          uF = this.down,
          hF = {
            x: uF.x - (AF.y * uF.z - AF.z * uF.y),
            y: uF.y - (AF.z * uF.x - AF.x * uF.z),
            z: uF.z - (AF.x * uF.y - AF.y * uF.x)
          },
          bW = 0 === eF(CF) ? 0 : Math.min(1, SF / .25);
        var dF, PF;
        return this.down = gW((PF = bW, QF(dF = hF, EF(rW(CF, dF), PF)))), this.down
      }
      reset() {
        this.down = null
      }
    }
    class VF {
      constructor() {
        this.entries = [], this.windowSec = 0
      }
      apply(FF, WF, SF) {
        const CF = Math.hypot(FF, WF),
          AF = Math.max(0, Math.min(1, (CF - 2) / 2)),
          uF = {
            yaw: FF * (1 - AF),
            pitch: WF * (1 - AF),
            dtSec: SF
          };
        for (this.entries.push(uF), this.windowSec += SF; this.entries.length > 1 && this.windowSec - this.entries[0].dtSec >= .125;) this.windowSec -= this.entries[0].dtSec, this.entries.shift();
        let hF = 0,
          bW = 0;
        for (const PF of this.entries) hF += PF.yaw * PF.dtSec, bW += PF.pitch * PF.dtSec;
        const dF = this.windowSec > 0 ? {
          yaw: hF / this.windowSec,
          pitch: bW / this.windowSec
        } : {
          yaw: uF.yaw,
          pitch: uF.pitch
        };
        return {
          yaw: FF * AF + dF.yaw,
          pitch: WF * AF + dF.pitch
        }
      }
      reset() {
        this.entries = [], this.windowSec = 0
      }
    }
    class NF {
      constructor() {
        this.calibrator = new kW, this.gravity = new qW, this.smoother = new VF
      }
      process(FF, WF, SF) {
        const CF = Math.max(0, Math.min(.05, WF));
        this.calibrator.update({
          ...FF,
          dtSec: CF
        });
        const AF = this.calibrator.correct(FF.gyro);
        let uF = AF.y;
        "player" === SF && FF.accel && (uF = ((FF, WF) => {
          const SF = FF.y * WF.y + FF.z * WF.z;
          return -Math.sign(SF) * Math.min(1.41 * Math.abs(SF), Math.hypot(FF.y, FF.z))
        })(AF, this.gravity.update(AF, FF.accel, CF)));
        const hF = this.smoother.apply(uF, AF.x, CF),
          bW = ((FF, WF) => {
            const SF = Math.hypot(FF, WF);
            if (SF >= 1) return {
              yaw: FF,
              pitch: WF
            };
            const CF = SF / 1;
            return {
              yaw: FF * CF,
              pitch: WF * CF
            }
          })(hF.yaw, hF.pitch);
        return {
          yawDeg: bW.yaw * CF,
          pitchDeg: bW.pitch * CF
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
    const DF = (FF, WF) => {
      var SF, CF, AF;
      const uF = WF * iW,
        hF = null !== (SF = FF.beta) && void 0 !== SF ? SF : 0,
        bW = null !== (CF = FF.gamma) && void 0 !== CF ? CF : 0;
      return {
        x: hF * Math.cos(uF) - bW * Math.sin(uF),
        y: hF * Math.sin(uF) + bW * Math.cos(uF),
        z: null !== (AF = FF.alpha) && void 0 !== AF ? AF : 0
      }
    };
    var LF = SF(7790);
    class mW {
      constructor(FF, WF, SF) {
        this.hid = FF, this.sink = WF, this.onControllersChanged = SF, this.controllers = new Map, this.running = !1, this.openedCount = 0, this.opening = new Set, this.disconnectedWhileOpening = new Set, this.switchPacketCounter = 0, this.onConnect = FF => {
          this.openController(FF.device).catch((FF => {
            console.warn("Could not open motion controller", FF)
          }))
        }, this.onDisconnect = FF => {
          this.opening.has(FF.device) && this.disconnectedWhileOpening.add(FF.device);
          const WF = this.controllers.get(FF.device);
          WF && (this.forget(WF), this.onControllersChanged())
        }
      }
      async start() {
        if (this.running) return;
        this.running = !0, this.hid.addEventListener("connect", this.onConnect), this.hid.addEventListener("disconnect", this.onDisconnect);
        const FF = await this.hid.getDevices();
        for (const WF of FF) await this.openController(WF).catch((FF => {
          console.warn("Could not open motion controller", FF)
        }))
      }
      stop() {
        this.running = !1, this.hid.removeEventListener("connect", this.onConnect), this.hid.removeEventListener("disconnect", this.onDisconnect);
        for (const FF of [...this.controllers.values()]) this.forget(FF);
        this.onControllersChanged()
      }
      async request() {
        const FF = await this.hid.requestDevice({
          filters: LF.m
        });
        let WF = 0;
        for (const SF of FF) await this.openController(SF).catch((FF => {
          console.warn("Could not open motion controller", FF), WF++
        }));
        return WF
      }
      async hasGrantedController() {
        return (await this.hid.getDevices()).some((FF => null !== (0, LF.h)(FF.vendorId, FF.productId)))
      }
      getConnectedKinds() {
        return [...this.controllers.values()].map((FF => FF.kind))
      }
      forget(FF) {
        FF.device.removeEventListener("inputreport", FF.onReport), this.controllers.get(FF.device) === FF && this.controllers.delete(FF.device)
      }
      async openController(FF) {
        const WF = (0, LF.h)(FF.vendorId, FF.productId);
        if (!WF || !this.running || this.controllers.has(FF) || this.opening.has(FF)) return;
        this.opening.add(FF);
        let SF = !1;
        try {
          FF.opened || await FF.open()
        } finally {
          this.opening.delete(FF), SF = this.disconnectedWhileOpening.delete(FF)
        }
        if (SF) return void FF.close().catch((FF => {
          console.debug("Could not close an unplugged motion controller", FF)
        }));
        if (!this.running) return;
        const CF = {
          device: FF,
          kind: WF,
          lastClock: null,
          lastEventMs: null,
          lastReadingMs: -1 / 0,
          openedOrder: this.openedCount++,
          onReport: FF => {
            this.onReport(CF, FF)
          }
        };
        this.controllers.set(FF, CF), FF.addEventListener("inputreport", CF.onReport), this.onControllersChanged();
        try {
          await this.enableMotion(CF)
        } catch (AF) {
          console.warn(`Could not turn on motion for ${WF}`, AF), this.controllers.get(FF) === CF && (this.forget(CF), this.onControllersChanged())
        }
      }
      async enableMotion(FF) {
        let {
          device: WF,
          kind: SF
        } = FF;
        if ((0, LF.i)(SF))
          for (const CF of LF.A[SF]) await WF.receiveFeatureReport(CF).catch((FF => {
            console.debug(`Motion controller feature report ${CF} unavailable`, FF)
          }));
        else
          for (let CF = 0; CF < 2; CF++)
            for (const {
                subcommand: FF,
                args: SF
              }
              of LF.B) await WF.sendReport(LF.E, (0, LF.e)(this.switchPacketCounter++, FF, SF)), await new Promise((FF => {
              setTimeout(FF, 60)
            }))
      }
      onReport(FF, WF) {
        const SF = (0, LF.u)(FF.kind, WF.reportId, WF.data, FF.device.productId);
        if (!SF) return;
        const CF = null === FF.lastEventMs ? 0 : (WF.timeStamp - FF.lastEventMs) / 1e3;
        FF.lastEventMs = WF.timeStamp;
        let AF = SF.dtSec;
        if (null !== AF && CF > 0 && (AF = Math.max(.001, Math.min(.017, CF / SF.readings.length))), null === AF && null !== SF.sensorClock && (0, LF.i)(FF.kind)) {
          const WF = (0, LF.w)(FF.kind, FF.lastClock, SF.sensorClock);
          FF.lastClock = SF.sensorClock, AF = 0 === WF ? null : WF
        }
        if (FF.lastReadingMs = WF.timeStamp, this.isPreferred(FF, WF.timeStamp))
          for (const hF of SF.readings) {
            var uF;
            this.sink(hF, null !== (uF = AF) && void 0 !== uF ? uF : CF, `hid${FF.openedOrder}`)
          }
      }
      isPreferred(FF, WF) {
        const SF = FF => 1e6 * LF.t[FF.kind] + FF.openedOrder;
        for (const CF of this.controllers.values())
          if (CF !== FF && WF - CF.lastReadingMs < 500 && SF(CF) < SF(FF)) return !1;
        return !0
      }
    }
    var OF = SF(89);
    const xW = () => DeviceMotionEvent,
      ZF = () => "undefined" !== typeof window && "undefined" !== typeof DeviceMotionEvent && window.isSecureContext && (0, OF.isMobile)(),
      oF = () => {
        var FF;
        const WF = null === (FF = window.screen.orientation) || void 0 === FF ? void 0 : FF.angle;
        return "number" === typeof WF ? WF : "number" === typeof window.orientation ? window.orientation : 0
      };
    class YF {
      constructor(FF, WF) {
        this.sink = FF, this.onStateChanged = WF, this.state = "off", this.lastEventMs = null, this.noSensorTimer = null, this.wanted = !1, this.permissionRequest = null, this.granted = !1, this.onGesture = () => {
          this.requestPermission().catch((FF => {
            console.warn("Could not enable the motion sensor", FF)
          }))
        }, this.onMotion = FF => {
          const WF = FF.rotationRate;
          if (!WF || null === WF.alpha && null === WF.beta && null === WF.gamma) return;
          const SF = null === this.lastEventMs ? 0 : (FF.timeStamp - this.lastEventMs) / 1e3;
          this.lastEventMs = FF.timeStamp, this.clearNoSensorTimer(), this.setState("on"), this.sink({
            gyro: DF(WF, oF()),
            accel: null
          }, SF, "phone")
        }
      }
      getState() {
        return this.state
      }
      start() {
        if (this.wanted = !0, "off" === this.state) return "function" !== typeof xW().requestPermission || this.granted ? void this.listen() : (this.setState("needsPermission"), void this.armGestureRequest())
      }
      requestPermission() {
        return this.permissionRequest || (this.permissionRequest = this.askPermission().finally((() => {
          this.permissionRequest = null
        }))), this.permissionRequest
      }
      async askPermission() {
        const FF = xW().requestPermission;
        if (!this.wanted) return;
        if ("function" !== typeof FF) return void this.listen();
        let WF;
        this.disarmGestureRequest();
        try {
          WF = await FF.call(DeviceMotionEvent)
        } catch (SF) {
          throw this.wanted && "needsPermission" === this.state && this.armGestureRequest(), SF
        }
        this.wanted && ("granted" === WF ? (this.granted = !0, this.listen()) : this.setState("denied"))
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
      setState(FF) {
        this.state !== FF && (this.state = FF, this.onStateChanged())
      }
    }
    const MF = "controllerGyroStatusChanged",
      cW = {
        TWF: 0,
        aSF: 0
      },
      GF = FF => {
        var WF, SF;
        return "undefined" === typeof document || (null === (WF = null === (SF = document.featurePolicy) || void 0 === SF ? void 0 : SF.allowsFeature(FF)) || void 0 === WF || WF)
      };
    class zW {
      constructor() {
        this.processor = new NF, this.hid = void 0, this.hidBlocked = void 0, this.phone = void 0, this.phoneBlocked = void 0, this.source = null, this.pendingYawDeg = 0, this.pendingPitchDeg = 0, this.lastDrainMs = -1 / 0, this.lastHidReadingMs = -1 / 0, this.running = !1, this.phoneRunning = !1, this.syncWithSettings = FF => {
          const WF = FF.gyroAiming && bW.f.hasConnectedPad();
          var SF, CF;
          WF !== this.phoneRunning && (this.phoneRunning = WF, WF ? null === (SF = this.phone) || void 0 === SF || SF.start() : null === (CF = this.phone) || void 0 === CF || CF.stop());
          if (FF.gyroAiming !== this.running) {
            var AF, uF;
            if (this.running = FF.gyroAiming, this.running) null === (AF = this.hid) || void 0 === AF || AF.start().catch((FF => {
              console.warn("Could not open motion controllers", FF)
            }));
            else null === (uF = this.hid) || void 0 === uF || uF.stop(), this.processor.reset(), this.source = null, this.discardPending();
            this.publishStatus()
          }
        }, this.publishStatus = () => {
          AF.j.Uu(MF, this.getStatus())
        };
        const FF = (() => {
            var FF;
            return "undefined" !== typeof navigator && window.isSecureContext && null !== (FF = navigator.hid) && void 0 !== FF ? FF : null
          })(),
          WF = GF("hid");
        this.hidBlocked = null !== FF && !WF, this.hid = FF && WF ? new mW(FF, ((FF, WF, SF) => {
          this.lastHidReadingMs = performance.now(), this.feed(FF, WF, "player", SF)
        }), this.publishStatus) : null;
        const SF = GF("accelerometer") && GF("gyroscope");
        this.phoneBlocked = ZF() && !SF, this.phone = ZF() && SF ? new YF(((FF, WF, SF) => {
          performance.now() - this.lastHidReadingMs >= 500 && this.feed(FF, WF, "local", SF)
        }), this.publishStatus) : null, AF.j.subscribe(PF.f, this.syncWithSettings), bW.f.onConnectedPadsChanged((() => {
          this.syncWithSettings((0, PF.i)()), this.publishStatus()
        })), this.syncWithSettings((0, PF.i)())
      }
      isSupported() {
        return null !== this.hid || null !== this.phone
      }
      getStatus() {
        var FF, WF, SF, CF;
        return {
          hidSupported: null !== this.hid,
          hidBlocked: this.hidBlocked,
          phoneSupported: null !== this.phone,
          phoneBlocked: this.phoneBlocked,
          controllers: null !== (FF = null === (WF = this.hid) || void 0 === WF ? void 0 : WF.getConnectedKinds()) && void 0 !== FF ? FF : [],
          phoneMotion: null !== (SF = null === (CF = this.phone) || void 0 === CF ? void 0 : CF.getState()) && void 0 !== SF ? SF : "off",
          padConnected: bW.f.hasConnectedPad()
        }
      }
      async connectController() {
        return this.hid ? this.hid.request() : 0
      }
      async connectControllerIfNoneGranted() {
        this.hid && !await this.hid.hasGrantedController() && await this.hid.request()
      }
      async allowPhoneMotion() {
        var FF;
        await (null === (FF = this.phone) || void 0 === FF ? void 0 : FF.requestPermission())
      }
      drainLookDelta() {
        const FF = performance.now();
        FF - this.lastDrainMs > 500 && this.discardPending(), this.lastDrainMs = FF;
        const WF = {
          yawDeg: this.pendingYawDeg,
          pitchDeg: this.pendingPitchDeg
        };
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0;
        const SF = (0, PF.i)();
        return SF.gyroAiming && (FF => {
          let {
            activation: WF,
            isHeld: SF,
            useButton: CF,
            gyroButton: AF
          } = FF;
          return "always" === WF || SF("aiming" === WF ? CF : AF)
        })({
          activation: SF.gyroActivation,
          isHeld: FF => dF.c.isButtonHeld(FF),
          useButton: (0, hF.h)("use"),
          gyroButton: SF.gyroButton
        }) ? ((FF, WF) => ({
          TWF: -FF.yawDeg * WF * iW,
          aSF: -FF.pitchDeg * WF * iW
        }))(WF, SF.gyroSensitivity) : cW
      }
      discardPending() {
        this.pendingYawDeg = 0, this.pendingPitchDeg = 0
      }
      injectMotion(FF, WF) {
        this.feed(FF, WF, "local", "injected")
      }
      getCalibration() {
        return this.processor.getCalibration()
      }
      feed(FF, WF, SF, CF) {
        this.source !== CF && (this.processor.reset(), this.source = CF);
        const AF = this.processor.process(FF, WF, SF);
        this.pendingYawDeg += AF.yawDeg, this.pendingPitchDeg += AF.pitchDeg
      }
    }
    let IF = null;
    const fF = () => (IF || (IF = new zW), IF),
      yW = () => {
        const [FF, WF] = (0, CF.useState)((() => fF().getStatus()));
        return (0, uF.e)(MF, WF), (0, CF.useEffect)((() => {
          WF(fF().getStatus())
        }), []), FF
      }
  },
  7790: (FF, WF, SF) => {
    SF.d(WF, {
      A: () => NF,
      B: () => VF,
      E: () => aW,
      e: () => qW,
      h: () => dF,
      i: () => CF,
      m: () => bW,
      p: () => PF,
      t: () => RF,
      u: () => TF,
      w: () => gW
    });
    const CF = FF => "dualShock4" === FF || "dualSense" === FF,
      AF = 1356,
      uF = 1406,
      hF = [{
        vendorId: AF,
        productId: 1476,
        kind: "dualShock4"
      }, {
        vendorId: AF,
        productId: 2508,
        kind: "dualShock4"
      }, {
        vendorId: AF,
        productId: 2976,
        kind: "dualShock4"
      }, {
        vendorId: AF,
        productId: 3302,
        kind: "dualSense"
      }, {
        vendorId: AF,
        productId: 3570,
        kind: "dualSense"
      }, {
        vendorId: uF,
        productId: 8201,
        kind: "switchPro"
      }, {
        vendorId: uF,
        productId: 8198,
        kind: "joyConLeft"
      }, {
        vendorId: uF,
        productId: 8199,
        kind: "joyConRight"
      }],
      bW = hF.map((FF => {
        let {
          vendorId: WF,
          productId: SF
        } = FF;
        return {
          vendorId: WF,
          productId: SF
        }
      })),
      dF = (FF, WF) => {
        var SF, CF;
        return null !== (SF = null === (CF = hF.find((SF => SF.vendorId === FF && SF.productId === WF))) || void 0 === CF ? void 0 : CF.kind) && void 0 !== SF ? SF : null
      },
      PF = {
        dualShock4: "DualShock 4",
        dualSense: "DualSense",
        switchPro: "Switch Pro Controller",
        joyConLeft: "Joy-Con (L)",
        joyConRight: "Joy-Con (R)"
      },
      RF = {
        dualSense: 0,
        dualShock4: 0,
        switchPro: 0,
        joyConRight: 1,
        joyConLeft: 2
      },
      iW = 2e3 / 32767,
      eF = 1 / 8192,
      EF = 936 / 13371,
      QF = (FF, WF, SF) => ({
        x: FF.getInt16(WF, !0) * SF,
        y: FF.getInt16(WF + 2, !0) * SF,
        z: FF.getInt16(WF + 4, !0) * SF
      }),
      rW = FF => 0 === FF.x && 0 === FF.y && 0 === FF.z,
      gW = (FF, WF, SF) => null === WF ? null : "dualShock4" === FF ? 16 * (SF - WF & 65535) / 3 / 1e6 : (SF - WF >>> 0) / 3 / 1e6,
      tW = (FF, WF) => "joyConRight" === WF ? {
        x: FF.y,
        y: -FF.z,
        z: -FF.x
      } : {
        x: -FF.y,
        y: FF.z,
        z: -FF.x
      },
      TF = (FF, WF, SF, AF) => CF(FF) ? ((FF, WF, SF, CF) => {
        const AF = ((FF, WF, SF) => "dualShock4" === FF ? 1 === WF && SF >= 63 ? 0 : 17 === WF && SF >= 65 ? 2 : null : 1 === WF && SF >= 62 ? 0 : 49 === WF && SF >= 63 ? 1 : null)(FF, WF, SF.byteLength);
        if (null === AF) return null;
        if (2976 === CF && 1 === WF && 0 !== (4 & SF.getUint8(30))) return null;
        const uF = AF + ("dualShock4" === FF ? 12 : 15),
          hF = QF(SF, uF, iW),
          bW = QF(SF, uF + 6, eF);
        return rW(hF) && rW(bW) ? null : {
          readings: [{
            gyro: hF,
            accel: bW
          }],
          dtSec: null,
          sensorClock: "dualShock4" === FF ? SF.getUint16(AF + 9, !0) : SF.getUint32(AF + 27, !0)
        }
      })(FF, WF, SF, AF) : ((FF, WF, SF) => {
        if (48 !== WF && 49 !== WF || SF.byteLength < 48) return null;
        const CF = [];
        for (let AF = 0; AF < 3; AF++) {
          const WF = QF(SF, 12 + 12 * AF, 244e-6),
            uF = QF(SF, 18 + 12 * AF, EF);
          if (rW(uF) && rW(WF)) return null;
          CF.push({
            gyro: tW(uF, FF),
            accel: tW(WF, FF)
          })
        }
        return {
          readings: CF,
          dtSec: .005,
          sensorClock: null
        }
      })(FF, WF, SF),
      aW = 1,
      kW = [0, 1, 64, 64, 0, 1, 64, 64],
      qW = (FF, WF, SF) => new Uint8Array([15 & FF, ...kW, WF, ...SF]),
      VF = [{
        subcommand: 64,
        args: [1]
      }, {
        subcommand: 3,
        args: [48]
      }],
      NF = {
        dualShock4: [2, 5],
        dualSense: [5]
      }
  },
  7158: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => xW,
      g: () => zW,
      h: () => tW,
      j: () => EF.f,
      n: () => YF,
      o: () => oF,
      r: () => TF,
      s: () => MF,
      u: () => EF.o,
      y: () => EF.r,
      C: () => IF,
      D: () => EF.u,
      G: () => DF
    });
    var CF = SF(46),
      AF = SF(11),
      uF = SF(20),
      hF = SF(1262),
      bW = SF(1144),
      dF = SF(7137),
      PF = SF(7162),
      RF = SF(7119),
      iW = SF(7114),
      eF = SF(7165),
      EF = SF(1223),
      QF = SF(7117),
      rW = SF(7583);
    class gW {
      constructor() {
        this.travelled = 0, this.lastMoveMs = -1 / 0
      }
      add(FF, WF, SF) {
        return SF - this.lastMoveMs > 250 && (this.travelled = 0), this.lastMoveMs = SF, this.travelled += Math.hypot(FF, WF), this.travelled >= 12
      }
      reset() {
        this.travelled = 0, this.lastMoveMs = -1 / 0
      }
    }
    const tW = FF => !FF.repeat && !(0, rW.d)(FF.key),
      TF = "PadHidesCursor";
    let aW = !1;
    const kW = FF => {
        FF !== aW && (aW = FF, document.documentElement.classList.toggle(TF, FF))
      },
      qW = new class {
        constructor() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
        observe(FF) {
          let WF = !1,
            SF = !1;
          FF.values.forEach(((FF, CF) => {
            const AF = FF >= (this.buttonsDown[CF] ? QF.K : QF.J);
            AF && !this.buttonsDown[CF] && (WF = !0, SF = !0), this.buttonsDown[CF] = AF
          }));
          return [FF.leftStick, FF.rightStick].forEach(((FF, CF) => {
            const AF = this.stickAnchors[CF];
            Math.hypot(FF.x, FF.y) < (AF ? QF.K : .3) ? this.stickAnchors[CF] = null : (!AF || Math.hypot(FF.x - AF.x, FF.y - AF.y) >= .3) && (this.stickAnchors[CF] = {
              x: FF.x,
              y: FF.y
            }, WF = !0, SF ||= !AF)
          })), WF && (this.lastActivityMs = FF.timestampMs), this.onlyMovedOn = WF && !SF, WF
        }
        wasOnlyMoveOn() {
          return this.onlyMovedOn
        }
        isHolding(FF) {
          return !(FF - this.lastActivityMs >= 1e3) && (this.buttonsDown.some((FF => FF)) || this.stickAnchors.some((FF => null !== FF)))
        }
        isStickOffRest() {
          return this.stickAnchors.some((FF => null !== FF))
        }
        reset() {
          this.buttonsDown = [], this.stickAnchors = [null, null], this.lastActivityMs = -1 / 0, this.onlyMovedOn = !1
        }
      };
    let VF = null,
      NF = !1;
    const DF = () => NF;
    let LF = null,
      mW = !1,
      OF = null;
    const xW = () => OF;
    let ZF = !1;
    const oF = FF => {
        if (!qW.observe(FF)) return !1;
        if (ZF && qW.wasOnlyMoveOn() && !(0, EF.f)()) return !1;
        ZF = !1, NF = !1;
        const WF = !(0, EF.f)();
        return WF && (VF = FF, OF = !aW && mW && LF ? {
          ...LF
        } : null), mW = !1, (0, EF.o)("gamepad"), kW(!0), (0, eF.r)((0, dF.l)()), WF
      },
      YF = FF => !(0, EF.f)() || FF === VF,
      MF = () => {
        qW.reset()
      },
      cW = () => {
        const FF = AF.b.get("activeInputDevice"),
          WF = "gamepad" === FF ? iW.f.getActivePad() : null;
        return {
          device: FF,
          inGame: (0, bW.k)(),
          padMovesMouse: null !== WF && (0, RF.f)(WF.id)
        }
      },
      GF = FF => {
        document.pointerLockElement ? LF = null : (LF ??= {
          x: 0,
          y: 0
        }, LF.x = FF.clientX, LF.y = FF.clientY)
      },
      zW = () => {
        const FF = new gW,
          WF = WF => {
            FF.reset(), ZF = !1, (0, EF.o)(WF)
          },
          SF = FF => {
            if (FF.isTrusted) {
              if (FF instanceof KeyboardEvent) {
                if ((0, EF.k)(FF), !tW(FF)) return;
                NF = !0
              }
              if (FF instanceof PointerEvent && "touch" === FF.pointerType) return LF = null, void WF("touch");
              FF instanceof PointerEvent && (GF(FF), mW = !0), ("pointerdown" !== FF.type || (FF => {
                let {
                  device: WF,
                  inGame: SF,
                  padMovesMouse: CF
                } = FF;
                return !("gamepad" === WF && CF && SF)
              })(cW())) && WF("keyboardMouse")
            }
          },
          CF = FF => {
            FF.isTrusted && (LF = null, WF("touch"))
          },
          hF = FF => {
            FF.isTrusted && "touch" !== FF.pointerType && !FF.relatedTarget && (LF = null)
          },
          bW = SF => {
            if (!SF.isTrusted || "touch" === SF.pointerType) return;
            GF(SF);
            const CF = SF.movementX || 0,
              uF = SF.movementY || 0;
            if (0 === CF && 0 === uF) return;
            if (mW = !0, kW(!1), "keyboardMouse" === AF.b.get("activeInputDevice")) return;
            const hF = qW.isHolding(SF.timeStamp),
              bW = cW(),
              dF = (FF => {
                let {
                  device: WF,
                  inGame: SF,
                  padMovesMouse: CF,
                  padHolding: AF
                } = FF;
                return ("gamepad" !== WF || !CF) && "keyboardMouse" !== WF && (SF || !AF)
              })({
                ...bW,
                inGame: bW.inGame && (0, PF.f)(),
                padHolding: hF
              });
            dF && FF.add(CF, uF, SF.timeStamp) && (WF("keyboardMouse"), ZF = qW.isStickOffRest())
          },
          dF = FF => {
            kW("gamepad" === FF)
          },
          RF = {
            capture: !0,
            passive: !0
          };
        window.addEventListener("keydown", SF, RF), window.addEventListener("pointerdown", SF, RF), window.addEventListener("wheel", SF, RF), window.addEventListener("touchstart", CF, RF), window.addEventListener("pointermove", bW, RF), window.addEventListener("pointerout", hF, RF);
        const iW = uF.j.subscribe("appManagerUpdated|activeInputDevice", dF);
        return dF(AF.b.get("activeInputDevice")), () => {
          window.removeEventListener("keydown", SF, RF), window.removeEventListener("pointerdown", SF, RF), window.removeEventListener("wheel", SF, RF), window.removeEventListener("touchstart", CF, RF), window.removeEventListener("pointermove", bW, RF), window.removeEventListener("pointerout", hF, RF), LF = null, uF.j.unsubscribe(iW), kW(!1)
        }
      },
      IF = () => {
        const [FF, WF] = (0, CF.useState)(dF.l);
        return (0, hF.e)(dF.e, (() => {
          WF((0, dF.l)())
        })), (0, hF.e)(iW.d, (() => {
          WF((0, dF.l)())
        })), FF
      }
  },
  7146: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => CF,
      h: () => AF
    });
    const CF = ["xbox", "playstation", "nintendo", "steamdeck", "generic"],
      AF = FF => CF.includes(FF)
  },
  7162: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => PF,
      f: () => RF,
      h: () => dF,
      j: () => bW
    });
    var CF = SF(11),
      AF = SF(1475),
      uF = SF(1513);
    const hF = new Map,
      bW = (FF, WF) => (hF.has(FF) && console.warn(`Gameplay blocker "${FF}" registered twice; the newer one replaces it.`), hF.set(FF, WF), () => {
        hF.get(FF) === WF && hF.delete(FF)
      }),
      dF = () => (0, uF.e)(document.activeElement),
      PF = function() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        for (const [WF, SF] of hF)
          if (!FF.includes(WF) && SF()) return WF;
        return null
      },
      RF = function() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return "inGame" === CF.b.get("gameState") && (!(0, AF.l)() && (!dF() && null === PF(FF)))
      }
  },
  7117: (FF, WF, SF) => {
    SF.d(WF, {
      B: () => kW,
      F: () => tW,
      G: () => gW,
      I: () => PF,
      J: () => eF,
      K: () => EF,
      O: () => AF,
      R: () => CF,
      T: () => VF,
      W: () => OF,
      X: () => oF,
      Z: () => qW,
      d: () => YF,
      g: () => xW,
      i: () => RF,
      j: () => dF,
      k: () => bW,
      n: () => DF,
      q: () => TF,
      r: () => NF,
      t: () => uF,
      u: () => iW,
      y: () => aW,
      z: () => ZF
    });
    const CF = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "View", "Menu", "LS", "RS", "Up", "Down", "Left", "Right", "Home"],
      AF = CF.length,
      uF = function() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return {
          values: new Array(AF).fill(0),
          leftStick: {
            x: 0,
            y: 0
          },
          rightStick: {
            x: 0,
            y: 0
          },
          timestampMs: FF
        }
      },
      hF = Object.fromEntries(CF.map(((FF, WF) => [FF, WF]))),
      bW = FF => hF[FF],
      dF = function(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .95;
        const CF = Math.hypot(FF.x, FF.y);
        if (CF <= WF) return {
          x: 0,
          y: 0
        };
        const AF = Math.min(1, (CF - WF) / Math.max(1e-4, SF - WF));
        return {
          x: FF.x / CF * AF,
          y: FF.y / CF * AF
        }
      },
      PF = ["exponential", "linear", "boost"],
      RF = (FF, WF) => {
        const SF = Math.hypot(FF.x, FF.y);
        if (0 === SF) return {
          x: 0,
          y: 0
        };
        const CF = ((FF, WF) => {
          const SF = Math.max(0, Math.min(1, FF));
          return "linear" === WF ? SF : SF * SF
        })(SF, WF);
        return {
          x: FF.x / SF * CF,
          y: FF.y / SF * CF
        }
      },
      iW = .5,
      eF = .3,
      EF = .2,
      QF = bW("LT"),
      rW = bW("RT"),
      gW = FF => FF === QF || FF === rW,
      tW = (FF, WF) => {
        const SF = bW(WF);
        return gW(SF) ? FF[SF] > .35 : FF[SF] >= iW
      },
      TF = (FF, WF) => FF.map(((FF, SF) => gW(SF) ? WF[SF] ? FF > .35 : FF >= .55 : FF >= iW)),
      aW = ["Up", "Down", "Left", "Right"],
      kW = FF => aW.includes(FF),
      qW = function(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        return Math.hypot(FF.x, FF.y) < WF ? null : Math.abs(FF.x) > Math.abs(FF.y) ? FF.x > 0 ? "Right" : "Left" : FF.y > 0 ? "Down" : "Up"
      },
      VF = {
        initialDelayMs: 350,
        intervalMs: 120
      },
      NF = {
        initialDelayMs: 350,
        intervalMs: 150
      },
      DF = ["default", "slow", "off"],
      LF = 800,
      mW = 250,
      OF = (FF, WF) => "off" === WF ? null : "slow" === WF ? {
        initialDelayMs: Math.max(FF.initialDelayMs, LF),
        intervalMs: Math.max(FF.intervalMs, mW)
      } : FF;
    class xW {
      constructor(FF) {
        this.readTiming = FF, this.yS = !1, this.timing = null, this.nextFireMs = 0
      }
      update(FF, WF) {
        return FF ? this.yS ? !!(this.timing && WF >= this.nextFireMs) && (this.nextFireMs = WF + this.timing.intervalMs, !0) : (this.yS = !0, this.timing = this.readTiming(), this.nextFireMs = WF + (null !== (SF = null === (CF = this.timing) || void 0 === CF ? void 0 : CF.initialDelayMs) && void 0 !== SF ? SF : 0), !0) : (this.yS = !1, !1);
        var SF, CF
      }
      reset() {
        this.yS = !1
      }
    }
    const ZF = {
        initialDelayMs: 350,
        intervalMs: 80
      },
      oF = {
        initialDelayMs: 400,
        intervalMs: 90
      };
    class YF {
      constructor(FF) {
        this.timer = FF, this.direction = null
      }
      update(FF, WF) {
        return FF !== this.direction && (this.timer.reset(), this.direction = FF), this.timer.update(null !== FF, WF) ? FF : null
      }
      reset() {
        this.timer.reset(), this.direction = null
      }
    }
  },
  7680: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => AF,
      g: () => uF
    });
    let CF = -1 / 0;
    const AF = () => {
        CF = performance.now()
      },
      uF = FF => performance.now() - CF < FF
  },
  7590: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => hF,
      e: () => uF
    });
    var CF = SF(7137),
      AF = SF(7117);
    const uF = FF => (0, AF.W)(FF, (0, CF.i)().buttonRepeat),
      hF = FF => new AF.g((() => uF(FF)))
  },
  7152: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => dF,
      f: () => uF,
      j: () => bW
    });
    var CF = SF(20),
      AF = SF(7137);
    const uF = (FF, WF) => "OpenShop" === FF ? "shop" === WF : "OpenLobbyLeaderboard" !== FF || "leaderboard" === WF;
    let hF = !1;
    const bW = FF => {
        FF !== hF && (hF = FF, CF.j.Uu(AF.e, (0, AF.i)()))
      },
      dF = () => ((FF, WF) => "shop" === FF && WF ? "shop" : "leaderboard")((0, AF.i)().leaderboardButton, hF)
  },
  7148: (FF, WF, SF) => {
    SF.d(WF, {
      B: () => qW,
      D: () => eF,
      F: () => EF,
      G: () => iW,
      I: () => OF,
      K: () => kW,
      M: () => PF,
      N: () => tW,
      O: () => mW,
      R: () => aW,
      U: () => rW,
      Y: () => gW,
      ab: () => QF,
      b: () => cW,
      bb: () => TF,
      db: () => oF,
      e: () => zW,
      fb: () => uF,
      h: () => hF,
      hb: () => VF,
      ib: () => GF,
      l: () => LF,
      lb: () => DF,
      o: () => NF,
      s: () => YF,
      t: () => MF,
      u: () => RF,
      x: () => dF,
      y: () => bW
    });
    var CF = SF(7131),
      AF = SF(7117);
    const uF = {
        min: 25,
        max: 500,
        step: 5
      },
      hF = {
        min: 25,
        max: 100,
        step: 5
      },
      bW = {
        min: 0,
        max: .4,
        step: .01
      },
      dF = {
        min: 25,
        max: 300,
        step: 5
      },
      PF = {
        min: .5,
        max: 6,
        step: .1
      },
      RF = (FF, WF) => {
        if (!Number.isFinite(FF)) return WF.min;
        const SF = WF.min + Math.round((FF - WF.min) / WF.step) * WF.step,
          CF = Math.min(WF.max, Math.max(WF.min, SF));
        return Math.round(1e3 * CF) / 1e3
      },
      iW = FF => `${Math.round(FF)}%`,
      eF = FF => iW(100 * FF),
      EF = FF => `${FF.toFixed(1)}\xd7`,
      QF = [{
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
      rW = [{
        value: "exponential",
        labelKey: "controller:settingsCurveExponential"
      }, {
        value: "linear",
        labelKey: "controller:settingsCurveLinear"
      }, {
        value: "boost",
        labelKey: "controller:settingsCurveBoost"
      }],
      gW = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "focus",
        labelKey: "controller:settingsMenuNavFocus"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      tW = [{
        value: "hybrid",
        labelKey: "controller:settingsNavHybrid"
      }, {
        value: "slot",
        labelKey: "controller:settingsInventoryNavSlot"
      }, {
        value: "cursor",
        labelKey: "controller:settingsVirtualCursor"
      }],
      TF = [{
        value: "wheel",
        labelKey: "controller:settingsQuickChatWheel"
      }, {
        value: "off",
        labelKey: "controller:settingsQuickChatOff"
      }],
      aW = [{
        value: "shop",
        labelKey: "controller:settingsLeaderboardButtonShop"
      }, {
        value: "leaderboard",
        labelKey: "controller:settingsLeaderboardButtonLeaderboard"
      }],
      kW = [{
        value: "always",
        labelKey: "controller:settingsGyroAlways"
      }, {
        value: "aiming",
        labelKey: "controller:settingsGyroWhileAiming"
      }, {
        value: "button",
        labelKey: "controller:settingsGyroWhileButton"
      }],
      qW = [{
        value: "tapHold",
        labelKey: "controller:settingsEmoteButtonTapHold"
      }, {
        value: "wheel",
        labelKey: "controller:settingsEmoteButtonWheel"
      }],
      VF = [{
        value: "toggle",
        labelKey: "controller:settingsSneakToggle"
      }, {
        value: "hold",
        labelKey: "controller:settingsSneakHold"
      }],
      NF = [{
        value: "default",
        labelKey: "controller:settingsButtonRepeatDefault"
      }, {
        value: "slow",
        labelKey: "controller:settingsButtonRepeatSlow"
      }, {
        value: "off",
        labelKey: "controller:settingsButtonRepeatOff"
      }],
      DF = [{
        value: "short",
        labelKey: "controller:settingsTapHoldShort"
      }, {
        value: "medium",
        labelKey: "controller:settingsTapHoldMedium"
      }, {
        value: "long",
        labelKey: "controller:settingsTapHoldLong"
      }],
      LF = [{
        value: "hold",
        labelKey: "controller:settingsAttackHold"
      }, {
        value: "toggle",
        labelKey: "controller:settingsAttackToggle"
      }],
      mW = {
        southpaw: "controller:settingsLayoutSouthpaw",
        triggersSwapped: "controller:settingsLayoutTriggersSwapped"
      },
      OF = FF => `controller:settingsAction${FF.charAt(0).toUpperCase()}${FF.slice(1)}`,
      xW = {
        gameplay: "controller:settingsGroupGameplay",
        menu: "controller:settingsGroupMenus",
        inventory: "controller:settingsGroupInventory",
        keyboard: "controller:settingsGroupKeyboard"
      },
      ZF = [{
        kind: "fixed",
        stick: "move",
        labelKey: "controller:settingsActionMove"
      }, {
        kind: "fixed",
        stick: "look",
        labelKey: "controller:settingsActionLook"
      }],
      oF = CF.c.map((FF => {
        let {
          group: WF,
          actions: SF
        } = FF;
        const CF = SF.map((FF => ({
          kind: "action",
          action: FF
        })));
        return {
          titleKey: xW[WF],
          rows: "gameplay" === WF ? [...ZF, ...CF] : CF
        }
      })),
      YF = AF.R.filter((FF => "Home" !== FF)),
      MF = 1e4;
    class cW {
      constructor(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
        this.cancelButton = FF, this.openButton = WF, this.accepts = SF, this.startMs = null, this.ignoredUntilMs = new Map, this.cancelDownAtMs = null
      }
      update(FF, WF) {
        var SF;
        this.updateIgnored(FF, WF);
        const CF = WF - (null !== (SF = this.startMs) && void 0 !== SF ? SF : WF) >= 250;
        for (const AF of YF)
          if (AF !== this.cancelButton && CF && !this.ignoredUntilMs.has(AF) && FF.wasPressed(AF) && this.accepts(AF)) return {
            kind: "bind",
            button: AF
          };
        if (this.ignoredUntilMs.has(this.cancelButton)) return null;
        if (FF.wasPressed(this.cancelButton)) {
          if (!this.accepts(this.cancelButton)) return {
            kind: "cancel"
          };
          this.cancelDownAtMs = WF
        }
        return null === this.cancelDownAtMs ? null : FF.isHeld(this.cancelButton) && WF - this.cancelDownAtMs >= 700 ? (this.cancelDownAtMs = null, {
          kind: "bind",
          button: this.cancelButton
        }) : FF.wasReleased(this.cancelButton) ? (this.cancelDownAtMs = null, {
          kind: "cancel"
        }) : null
      }
      getBindHoldProgress(FF) {
        return null === this.cancelDownAtMs ? 0 : Math.min(1, (FF - this.cancelDownAtMs) / 700)
      }
      updateIgnored(FF, WF) {
        if (null === this.startMs) {
          this.startMs = WF;
          for (const WF of YF) FF.isDown(WF) && this.ignoredUntilMs.set(WF, 1 / 0);
          this.openButton && !this.ignoredUntilMs.has(this.openButton) && this.ignoredUntilMs.set(this.openButton, WF + 250)
        }
        for (const [SF, CF] of this.ignoredUntilMs) {
          const AF = FF.isDown(SF);
          CF === 1 / 0 ? AF || SF !== this.openButton ? AF || this.ignoredUntilMs.delete(SF) : this.ignoredUntilMs.set(SF, WF + 250) : WF >= CF ? this.ignoredUntilMs.delete(SF) : AF && this.ignoredUntilMs.set(SF, 1 / 0)
        }
      }
    }
    const GF = 6e3;
    class zW {
      constructor() {
        this.downAtMs = null, this.pressesAtMs = []
      }
      update(FF, WF) {
        let {
          pressed: SF,
          yS: CF
        } = FF;
        if (SF) {
          const FF = this.pressesAtMs.at(-1);
          if (this.pressesAtMs = void 0 !== FF && WF - FF < 1500 ? [...this.pressesAtMs, WF] : [WF], this.pressesAtMs.length >= 3) return 1
        }
        return CF ? (this.downAtMs ??= WF, Math.min(1, (WF - this.downAtMs) / 1500)) : (this.downAtMs = null, 0)
      }
    }
  },
  7621: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => uF,
      e: () => AF
    });
    var CF = SF(20);
    const AF = "localBlockBroken";

    function uF() {
      return {
        onPlayerChangeBlock(FF, WF, SF, uF, hF, bW) {
          "Air" === bW && CF.j.Uu(AF)
        }
      }
    }
  },
  7171: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/A.926fb88933484dfbde14.svg"
  },
  7177: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/B.9f5ec099f78f84e44427.svg"
  },
  7186: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  7190: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  7198: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/LB.3a20b15927b55d5d8b60.svg"
  },
  7202: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  7206: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/LT.9fdc5e69011b9d41f50a.svg"
  },
  7213: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  7222: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  7230: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Menu.c903a662eb685211e52e.svg"
  },
  7237: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/RB.bba470ddb76ceec5d168.svg"
  },
  7240: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  7248: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/RT.e5a9fbcc3c79550111ca.svg"
  },
  7251: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  7255: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  7264: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  7266: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/View.0c9378b5d720a636d50d.svg"
  },
  7275: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/X.c9377519af94e6dce1d7.svg"
  },
  7281: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Y.62d8c17731dd2e172426.svg"
  },
  7289: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/A.958a6de9474f8d0c9caf.svg"
  },
  7295: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/B.d05958bfa88a1162b47a.svg"
  },
  7302: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Down.db68fb3980768eb54671.svg"
  },
  7309: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Home.4f2ce08049843c0d68cc.svg"
  },
  7311: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/LB.37a3c5128c958ec2a0c2.svg"
  },
  7313: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/LS.15b0cc5bf3f2fe7bbd8b.svg"
  },
  7316: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/LT.5412ae5222c69f8c833f.svg"
  },
  7318: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Left.4457b2895ce94a5df32e.svg"
  },
  7323: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  7329: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Menu.1e8427f8133c9d456c53.svg"
  },
  7331: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/RB.c96c4aa2590209e930c7.svg"
  },
  7334: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/RS.8d70d147cf1ab136e845.svg"
  },
  7337: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/RT.1e4691bb5a7c049693df.svg"
  },
  7340: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Right.a1e101413040c540b879.svg"
  },
  7349: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  7352: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Up.7544a65ad4f611a55775.svg"
  },
  7361: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/View.003cae39de89cae0b9d8.svg"
  },
  7369: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/X.d88b6e62dd8fb4bda32a.svg"
  },
  7377: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Y.428d3e70775877892f82.svg"
  },
  7385: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  7391: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  7395: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  7402: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Home.ea8b009cfa9562aa644e.svg"
  },
  7405: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/LB.f283d355d22fc107d6d6.svg"
  },
  7413: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  7421: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/LT.13e66c122e7ee04bb876.svg"
  },
  7426: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  7430: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  7433: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Menu.90fc4e918900eb5062a0.svg"
  },
  7436: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/RB.918a7f16dc054d96b6f3.svg"
  },
  7443: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  7446: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/RT.a0523211130959598bed.svg"
  },
  7450: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  7456: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  7465: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  7467: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/View.0bc952e292c28c3baac2.svg"
  },
  7473: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  7475: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  },
  7477: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/A.9f5ec099f78f84e44427.svg"
  },
  7479: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/B.926fb88933484dfbde14.svg"
  },
  7481: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Down.b1852f687e6dd088dc83.svg"
  },
  7486: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Home.8898f76b20962fe52ab7.svg"
  },
  7492: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/LB.689ba3703ae248f2e4cc.svg"
  },
  7495: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/LS.30b6b373c0d6b7ee1753.svg"
  },
  7501: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/LT.9c2d10d335ab5c590525.svg"
  },
  7509: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Left.c380211d278e5ad37395.svg"
  },
  7516: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/LeftStick.572ef7fe851cd5c7c48d.svg"
  },
  7523: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Menu.9e485791ea97009871ca.svg"
  },
  7531: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/RB.7ee5ce48dd551f993f80.svg"
  },
  7536: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/RS.faed29b08b9895ac7291.svg"
  },
  7540: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/RT.903ecadc55a9e9e00f07.svg"
  },
  7542: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Right.01eea634de7e4fea174f.svg"
  },
  7551: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/RightStick.8c455f35f82d8f40b0dc.svg"
  },
  7560: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Up.0c878a914746e22612b1.svg"
  },
  7562: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/View.3c5eeb34f0413bde4a65.svg"
  },
  7570: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/X.62d8c17731dd2e172426.svg"
  },
  7577: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/Y.c9377519af94e6dce1d7.svg"
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);